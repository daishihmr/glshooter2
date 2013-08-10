(function() {

gls2.Danmaku = {};

/** bulletml.js DSL 名前空間 */
var $ = bulletml.dsl;

// 発射間隔
var $interval = function(v) { return $.wait(v + "*(1-$rank)*$hyperOff") };

// 弾速
var $spd0 = function(v) { v = v===undefined?0:v; return $.speed("$rank*2.0 + 0.20 + (" + v + "*0.1)" ); };
var $spd1 = function(v) { v = v===undefined?0:v; return $.speed("$rank*2.0 + 0.50 + (" + v + "*0.1)" ); };
var $spd2 = function(v) { v = v===undefined?0:v; return $.speed("$rank*2.0 + 0.80 + (" + v + "*0.1)" ); };
var $spd3 = function(v) { v = v===undefined?0:v; return $.speed("$rank*2.0 + 1.10 + (" + v + "*0.1)" ); };
var $spd4 = function(v) { v = v===undefined?0:v; return $.speed("$rank*2.0 + 1.40 + (" + v + "*0.1)" ); };
var $spd5 = function(v) { v = v===undefined?0:v; return $.speed("$rank*2.0 + 1.70 + (" + v + "*0.1)" ); };
var $spd6 = function(v) { v = v===undefined?0:v; return $.speed("$rank*2.0 + 2.00 + (" + v + "*0.1)" ); };

/** 自機狙い弾 */
var $fire0 = function(spd) { return $.fire($.direction(0), spd || $spd3, $.bullet) };

/** 自機狙いn-way弾 */
var $nway = function(way, rangeFrom, rangeTo, speed, bullet, offsetX, offsetY, autonomy) {
    return $.action([
        $.fire($.direction(rangeFrom), speed, bullet, offsetX, offsetY, autonomy),
        $.repeat(way, [
            $.fire($.direction((rangeTo-rangeFrom)/way, "sequence"), speed, bullet, offsetX, offsetY, autonomy),
        ])
    ]);
};

var $absoluteNway = function(way, rangeFrom, rangeTo, speed, bullet, offsetX, offsetY, autonomy) {
    return $.action([
        $.fire($.direction(rangeFrom, "absolute"), speed, bullet, offsetX, offsetY, autonomy),
        $.repeat(way, [
            $.fire($.direction((rangeTo-rangeFrom)/way, "sequence"), speed, bullet, offsetX, offsetY, autonomy),
        ])
    ]);
};

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
            $interval(40),
        ]),
    ]),
});

/**
 * 自機狙い弾を20フレーム間隔で連射.
 */
gls2.Danmaku["basic1-0"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $interval(20),
            $fire0($spd5),
        ]),
    ]),
});


/**
 * 自機狙い弾を50間隔で連射.
 */
gls2.Danmaku["basic2-0"] = new bulletml.Root({
    "top": $.action([
        $.wait("120"),
        $.repeat(999, [
            $interval(50),
            $fire0($spd4),
        ]),
    ]),
});

gls2.Danmaku["kurokawa-1"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(3, [
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
                $interval(90),
            ]),
            $interval(120),
        ]),
    ]),
    "top1": $.action([
        $.repeat(3, [
            $.fire($.direction(0), $spd4, $.bullet({ball:true,frame:3}), $.offsetX(-45), $.autonomy(true)),
            $interval(45),
            $.fire($.direction(0), $spd4, $.bullet({ball:true,frame:3}), $.offsetX(+45), $.autonomy(true)),
            $interval(45),
        ]),
    ]),
});

gls2.Danmaku["honoka-1"] = new bulletml.Root({
    "top0": $.action([
        $.wait(60),
        $.repeat(10, [
            $nway(6, -40, 40, $spd3, $.bullet({ball:true,frame:4})),
            $interval(30),
            $nway(7, -40, 40, $spd2, $.bullet({ball:true,frame:4})),
            $interval(30),
        ]),
    ]),
    "top1": $.action([
        $.wait(60),
        $.repeat(5, [
            $nway(2, -2, 2, $spd2(2), $.bullet({frame:1})),
            $nway(3, -3, 3, $spd2(3), $.bullet({frame:1})),
            $nway(4, -4, 4, $spd2(4), $.bullet({frame:1})),
            $nway(5, -5, 5, $spd2(5), $.bullet({frame:1})),
            $interval(110),
        ]),
    ]),
    "top2": $.action([
        $.repeat(20, [
            $absoluteNway(12, -10, -170, $spd1, $.bullet({ball:true,frame:0}), $.offsetX(-80)),
            $interval(30),
        ]),
    ]),
    "top3": $.action([
        $.repeat(20, [
            $absoluteNway(12, +10, +170, $spd1, $.bullet({ball:true,frame:0}), $.offsetX(+80)),
            $interval(30),
        ]),
    ]),
});

gls2.Danmaku.setup = function() {
    for (var i = 0; i < 500; i++) {
        bulletPool.push(gls2.Bullet());
    }

    var config = gls2.Danmaku.config = tm.bulletml.AttackPattern.defaultConfig;
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
    config.defaultIsInsideOfWorld = function(bullet) {
        return -80 <= bullet.x && bullet.x < SC_W+80 && -80 <= bullet.y && bullet.y < SC_H+80;
    };
    config.speedRate = 4;

    // ランク
    bulletml.Bullet.globalScope.$rank = 0;
    // ハイパー？
    bulletml.Bullet.globalScope.$hyperOff = 1.0;
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
