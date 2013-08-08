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
            b.setFrameIndex((spec.frame === undefined) ? 1 : spec.frame);

            if (spec.ball) {
                b.scaleX = 1.0;
                b.scaleY = 1.0;
                b.updateProperties = false;
                b.update = function() {
                    this.rotation += 15;
                };
            } else {
                b.scaleX = 0.8;
                b.scaleY = 1.5;
                b.updateProperties = true;
            }

            return b;
        } else {
            console.warn("弾が足りない！");
        }
    };
    config.speedRate = 4;
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
var $spd0 = function(v) { v = v===undefined?0:v; return $.speed("$rank*0.2 + 0.4 + (" + v + "*0.1)" ); };
var $spd1 = function(v) { v = v===undefined?0:v; return $.speed("$rank*0.2 + 0.6 + (" + v + "*0.1)" ); };
var $spd2 = function(v) { v = v===undefined?0:v; return $.speed("$rank*0.2 + 0.8 + (" + v + "*0.1)" ); };
var $spd3 = function(v) { v = v===undefined?0:v; return $.speed("$rank*0.2 + 1.0 + (" + v + "*0.1)" ); };
var $spd4 = function(v) { v = v===undefined?0:v; return $.speed("$rank*0.2 + 1.2 + (" + v + "*0.1)" ); };
var $spd5 = function(v) { v = v===undefined?0:v; return $.speed("$rank*0.2 + 1.4 + (" + v + "*0.1)" ); };
var $spd6 = function(v) { v = v===undefined?0:v; return $.speed("$rank*0.2 + 1.6 + (" + v + "*0.1)" ); };

/** 自機狙い弾 */
var $fire0 = function(spd) { return $.fire($.direction(0), spd || $spd3, $.bullet) };

gls2.Danmaku["basic0-0"] = new bulletml.Root({
    "top": $.action([
        $fire0,
    ]),
});

gls2.Danmaku["basic0-4"] = new bulletml.Root({
    "top": $.action([
        $.repeat(3, [
            $.repeat(5, [
                $.fire($.direction(-20), $.speed("$loop.count*0.06+0.75"), $.bullet),
                $.fire($.direction(  0), $.speed("$loop.count*0.06+0.75"), $.bullet),
                $.fire($.direction(+20), $.speed("$loop.count*0.06+0.75"), $.bullet),
            ]),
            $.wait(40),
        ]),
    ]),
});

/**
 * 自機狙い弾を20フレーム間隔で連射.
 */
gls2.Danmaku["basic1-0"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $fire0,
            $.wait(20),
        ]),
    ]),
});


/**
 * 自機狙い弾をランダム間隔で連射.
 */
gls2.Danmaku["basic2-0"] = new bulletml.Root({
    "top": $.action([
        $.wait("120"),
        $.repeat(999, [
            $.wait("50*$rand*5"),
            $fire0($spd4),
        ]),
    ]),
});

gls2.Danmaku["kurokawa-1"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(3, [
            $.repeat(3, [
                $.fire($.direction(-45), $spd4("$loop.count"), $.bullet({frame:2}), $.offsetX(-45), $.autonomy(true)),
                $.fire($.direction(-15), $spd4("$loop.count"), $.bullet({frame:2}), $.offsetX(-45), $.autonomy(true)),
                $.fire($.direction( 15), $spd4("$loop.count"), $.bullet({frame:2}), $.offsetX(-45), $.autonomy(true)),
                $.fire($.direction( 45), $spd4("$loop.count"), $.bullet({frame:2}), $.offsetX(-45), $.autonomy(true)),
                $.fire($.direction(-45), $spd4("$loop.count"), $.bullet({frame:2}), $.offsetX(+45), $.autonomy(true)),
                $.fire($.direction(-15), $spd4("$loop.count"), $.bullet({frame:2}), $.offsetX(+45), $.autonomy(true)),
                $.fire($.direction( 15), $spd4("$loop.count"), $.bullet({frame:2}), $.offsetX(+45), $.autonomy(true)),
                $.fire($.direction( 45), $spd4("$loop.count"), $.bullet({frame:2}), $.offsetX(+45), $.autonomy(true)),
            ]),
            $.wait(90),
        ]),
    ]),
    "top1": $.action([
        $.repeat(3, [
            $.fire($.direction(0), $spd4, $.bullet({ball:true,frame:3}), $.offsetX(-45), $.autonomy(true)),
            $.wait(45),
            $.fire($.direction(0), $spd4, $.bullet({ball:true,frame:3}), $.offsetX(+45), $.autonomy(true)),
            $.wait(45),
        ]),
    ]),
});

gls2.Danmaku["honoka-1"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(10, [
            $.fire($.direction(-30), $spd3, $.bullet({ball:true,frame:4})),
            $.repeat(60/18, [
                $.fire($.direction(18, "sequence"), $spd3, $.bullet({ball:true,frame:4})),
            ]),
            $.wait(30),
            $.fire($.direction(-39), $spd3, $.bullet({ball:true,frame:4})),
            $.repeat(78/18, [
                $.fire($.direction(18, "sequence"), $spd3, $.bullet({ball:true,frame:4})),
            ]),
            $.wait(30),
        ]),
    ]),
    "top1": $.action([
        $.repeat(5, [
            $.fire($.direction(-6), $spd2, $.bullet({ball:true,frame:4})),
            $.repeat(12/2, [
                $.fire($.direction(2, "sequence"), $spd2, $.bullet({ball:true,frame:3})),
            ]),
            $.wait(110),
        ]),
    ]),
    "top2": $.action([
        $.repeat(20, [
            $.fire($.direction(-120-30, "absolute"), $spd1, $.bullet({ball:true,frame:2}), $.offsetX(-60)),
            $.repeat(60/12, [
                $.fire($.direction(12, "sequence"), $spd1, $.bullet({ball:true,frame:2}), $.offsetX(-60)),
            ]),
            $.wait(30),
        ]),
    ]),
    "top3": $.action([
        $.repeat(20, [
            $.fire($.direction(+120+30, "absolute"), $spd1, $.bullet({ball:true,frame:0}), $.offsetX(+60)),
            $.repeat(60/12, [
                $.fire($.direction(-12, "sequence"), $spd1, $.bullet({ball:true,frame:0}), $.offsetX(+60)),
            ]),
            $.wait(30),
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
    hp: 0,
    init: function() {
        this.superInit("tex0", 20, 20);

        this.boundingRadius = 7;

        this.addEventListener("added", function() {
            this.hp = 50;
        });
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
                    { offset: 0.7, color: "rgba(255,100,100,1.0)" },
                    { offset: 1.0, color: "rgba(255,100,100,1.0)" },
                ])
                .toStyle()
        })
        // .setBlendMode("lighter")
        .setPosition(this.x, this.y)
        .setScale(0.1, 0.1)
        .addChildTo(this.parent)
        .update = function() {
            this.scaleX += 0.1;
            this.scaleY += 0.1;
            this.alpha *= 0.92;
            if (this.alpha < 0.0001) {
                this.remove();
            }
        };
        this.remove();
    },
});

var bulletPool = [];
var activeList = gls2.Bullet.activeList = [];

})();
