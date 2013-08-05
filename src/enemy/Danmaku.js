(function() {

gls2.Danmaku = {};
gls2.Danmaku.setup = function() {
    for (var i = 0; i < 255; i++) {
        bulletPool.push(gls2.Bullet());
    }

    var config = tm.bulletml.AttackPattern.defaultConfig;
    config.isInsideOfWorld = function(b) {
        return !(b instanceof gls2.Bullet) || !(b.x < -50 || SC_W+50 < b.x || b.y < -50 || SC_H+50 < b.y);
    };
    config.bulletFactory = function(spec) {
        var b = bulletPool.shift(0);
        if (b) {
            activeList.push(b);
            b.setFrameIndex((spec.frame === undefined) ? 3 : spec.frame);

            if (spec.needle) {
                b.scaleX = 0.5;
                b.scaleY = 2.0;
                b.updateProperties = true;
            } else {
                b.scaleX = 0.8;
                b.scaleY = 0.8;
                b.updateProperties = false;
                b.update = function() {
                    this.rotation += 15;
                };
            }

            return b;
        } else {
            console.warn("弾が足りない！");
        }
    };
    config.speedRate = 3;
};
/**
 * エフェクト付きの弾幕全消し
 */
gls2.Danmaku.erase = function() {
    var bullets = [].concat(activeList);
    for (var i = 0, len = bullets.length; i < len; i++) {
        bullets[i].destroy();
    }
};
/**
 * エフェクトなしの弾幕全消し
 */
gls2.Danmaku.clearAll = function() {
    var copied = [].concat(activeList);
    for (var i = 0, end = copied.length; i < end; i++) {
        copied[i].remove();
    }
};

/** bulletml.js DSL 名前空間 */
var $ = bulletml.dsl;

// 弾速
var $spd0 = function(v) { return $.speed("$rank*0.2 + 0.4 + (" + v + "*0.1)" ); };
var $spd1 = function(v) { return $.speed("$rank*0.2 + 0.6 + (" + v + "*0.1)" ); };
var $spd2 = function(v) { return $.speed("$rank*0.2 + 0.8 + (" + v + "*0.1)" ); };
var $spd3 = function(v) { return $.speed("$rank*0.2 + 1.0 + (" + v + "*0.1)" ); };
var $spd4 = function(v) { return $.speed("$rank*0.2 + 1.2 + (" + v + "*0.1)" ); };
var $spd5 = function(v) { return $.speed("$rank*0.2 + 1.4 + (" + v + "*0.1)" ); };
var $spd6 = function(v) { return $.speed("$rank*0.2 + 1.6 + (" + v + "*0.1)" ); };

/** 自機狙い弾 */
var fire0 = function(spd) { return $.fire($.direction(0), spd || $spd3(0), $.bullet()) };

gls2.Danmaku["basic0-0"] = new bulletml.Root({
    top: $.action([
        fire0,
    ]),
});

gls2.Danmaku["basic0-4"] = new bulletml.Root({
    top: $.action([
        $.repeat(3, [
            $.repeat(5, [
                $.fire($.direction(-20), $.speed("$loop.count*0.06+0.75"), $.bullet()),
                $.fire($.direction(  0), $.speed("$loop.count*0.06+0.75"), $.bullet()),
                $.fire($.direction(+20), $.speed("$loop.count*0.06+0.75"), $.bullet()),
            ]),
            $.wait(40),
        ]),
    ]),
});

/**
 * 自機狙い弾を20フレーム間隔で連射.
 */
gls2.Danmaku["basic1-0"] = new bulletml.Root({
    top: $.action([
        $.repeat(999, [
            fire0,
            $.wait(20),
        ]),
    ]),
});


/**
 * 自機狙い弾をランダム間隔で連射.
 */
gls2.Danmaku["basic2-0"] = new bulletml.Root({
    top: $.action([
        $.wait("120"),
        $.repeat(999, [
            $.wait("50*$rand*5"),
            fire0,
        ]),
    ]),
});

gls2.Danmaku["kurokawa-1"] = new bulletml.Root({
    top: $.action([
        $.repeat(3, [
            $.repeat(3, [
                $.fire($.direction(-45), $spd4("$loop.count"), $.bullet({needle:true,frame:2}), $.offsetX(-30), $.autonomy(true)),
                $.fire($.direction(-15), $spd4("$loop.count"), $.bullet({needle:true,frame:2}), $.offsetX(-30), $.autonomy(true)),
                $.fire($.direction( 15), $spd4("$loop.count"), $.bullet({needle:true,frame:2}), $.offsetX(-30), $.autonomy(true)),
                $.fire($.direction( 45), $spd4("$loop.count"), $.bullet({needle:true,frame:2}), $.offsetX(-30), $.autonomy(true)),
                $.fire($.direction(-45), $spd4("$loop.count"), $.bullet({needle:true,frame:2}), $.offsetX( 30), $.autonomy(true)),
                $.fire($.direction(-15), $spd4("$loop.count"), $.bullet({needle:true,frame:2}), $.offsetX( 30), $.autonomy(true)),
                $.fire($.direction( 15), $spd4("$loop.count"), $.bullet({needle:true,frame:2}), $.offsetX( 30), $.autonomy(true)),
                $.fire($.direction( 45), $spd4("$loop.count"), $.bullet({needle:true,frame:2}), $.offsetX( 30), $.autonomy(true)),
            ]),
            $.wait(60),
        ]),
    ]),
});

/**
 * 弾クラス
 * @class
 */
gls2.Bullet = tm.createClass(
/** @lends gls2.Bullet.prototype */
{
    superClass: tm.app.Sprite,
    init: function() {
        this.superInit("tex0", 20, 20);

        this.boundingRadius = 7;

        this.addEventListener("removed", function() {
            bulletPool.push(this);
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);

            this.clearEventListener("enterframe");
        });
    },
    destroy: function() {
        // 弾消しエフェクト
        tm.app.CircleShape(10*2, 10*2, {
            strokeStyle: "rgba(0,0,0,0)",
            fillStyle: tm.graphics.RadialGradient(10,10,0,10,10,10)
                .addColorStopList([
                    { offset: 0.0, color: "rgba(255,100,100,0.0)" },
                    { offset: 0.3, color: "rgba(255,100,100,0.0)" },
                    { offset: 1.0, color: "rgba(255,100,100,1.0)" },
                ])
                .toStyle()
        })
        .setBlendMode("lighter")
        .setPosition(this.x, this.y)
        .setScale(0.1, 0.1)
        .addChildTo(this.parent)
        .update = function() {
            this.scaleX += 0.1;
            this.scaleY += 0.1;
            this.alpha *= 0.9;
            if (this.alpha < 0.001) {
                this.remove();
            }
        };
        this.remove();
    },
});

var bulletPool = [];
var activeList = gls2.Bullet.activeList = [];

})();
