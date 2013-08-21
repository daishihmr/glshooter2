/*
 * License
 * http://daishihmr.mit-license.org/
 */
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
var $fire1 = function(spd) { return $.fire($.direction(0), spd || $spd3, $.bullet({frame:0})) };

/** 自機狙いn-way弾 */
var $nway = function(way, rangeFrom, rangeTo, speed, bullet, offsetX, offsetY, autonomy) {
    return $.action([
        $.fire($.direction(rangeFrom), speed, bullet, offsetX, offsetY, autonomy),
        $.repeat(way + "-1", [
            $.fire($.direction("((" + rangeTo + ")-(" + rangeFrom + "))/(" + way + "-1)", "sequence"), speed, bullet, offsetX, offsetY, autonomy),
        ])
    ]);
};

/** 絶対n-way弾 */
var $absoluteNway = function(way, rangeFrom, rangeTo, speed, bullet, offsetX, offsetY) {
    return $.action([
        $.fire($.direction(rangeFrom, "absolute"), speed, bullet, offsetX, offsetY),
        $.repeat(way + "-1", [
            $.fire($.direction("((" + rangeTo + ")-(" + rangeFrom + "))/(" + way + "-1)", "sequence"), speed, bullet, offsetX, offsetY),
        ])
    ]);
};

/**
 * ウィップ
 * @param {bulletml.Speed} baseSpeed 初回のスピード
 * @param {number} delta 2回目以降のスピード増分
 * @param {number} count 回数
 * @param {function(bulletml.Speed):bulletml.Action} スピードを受け取りActionを返す関数
 */
var $whip = function(baseSpeed, delta, count, actionFunc) {
    return $.action([
        actionFunc(baseSpeed),
        $.repeat(count, [
            actionFunc($.speed(delta, "sequence")),
        ]),
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
            $fire0($spd4),
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
            $fire0($spd3),
        ]),
    ]),
});

/**
 * 自機狙い弾*3を100間隔で連射.
 */
gls2.Danmaku["basic3-0"] = new bulletml.Root({
    "top": $.action([
        $.wait(20),
        $.repeat(999, [
            $interval(100),
            $fire1($spd3(0)),
            $fire1($spd3(1)),
            $fire1($spd3(2)),
        ]),
    ]),
});

gls2.Danmaku["kurokawa-1"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $whip($spd4, 0.01, 4, function(spd) {
                return $nway(4, -45, 45, spd, $.bullet({frame:2}), $.offsetX(-45), $.autonomy(true));
            }),
            $whip($spd4, 0.01, 4, function(spd) {
                return $nway(4, -45, 45, spd, $.bullet({frame:2}), $.offsetX(+45), $.autonomy(true));
            }),
            $interval(90),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $.fire($.direction(0), $spd4, $.bullet({ball:true,frame:3}), $.offsetX(-45), $.autonomy(true)),
            $interval(45),
            $.fire($.direction(0), $spd4, $.bullet({ball:true,frame:3}), $.offsetX(+45), $.autonomy(true)),
            $interval(45),
        ]),
    ]),
});

gls2.Danmaku["komachi-1"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(20, [
            $.fire($.direction(210, "absolute"), $spd1(1), $.bullet, $.offsetX(-40)),
            $.fire($.direction(120, "sequence"), $spd1(1), $.bullet, $.offsetX(-40)),
            $.fire($.direction(120, "sequence"), $spd1(1), $.bullet, $.offsetX(-40)),
            $.repeat(57, [
                $interval(8),
                $.fire($.direction(-720/57, "sequence"), $spd1(1), $.bullet, $.offsetX(-40)),
                $.fire($.direction(    120, "sequence"), $spd1(1), $.bullet, $.offsetX(-40)),
                $.fire($.direction(    120, "sequence"), $spd1(1), $.bullet, $.offsetX(-40)),
            ]),
        ]),
    ]),
    "top1": $.action([
        $.repeat(20, [
            $.fire($.direction(-210, "absolute"), $spd1(1), $.bullet, $.offsetX(40)),
            $.fire($.direction( 120, "sequence"), $spd1(1), $.bullet, $.offsetX(40)),
            $.fire($.direction( 120, "sequence"), $spd1(1), $.bullet, $.offsetX(40)),
            $.repeat(57, [
                $interval(8),
                $.fire($.direction(720/57, "sequence"), $spd1(1), $.bullet, $.offsetX(40)),
                $.fire($.direction(   120, "sequence"), $spd1(1), $.bullet, $.offsetX(40)),
                $.fire($.direction(   120, "sequence"), $spd1(1), $.bullet, $.offsetX(40)),
            ]),
        ]),
    ]),
    "top2": $.action([
        $.repeat(70, [
            $.fire($.direction(0), $spd3(0), $.bullet({ball:true,frame:0}), $.offsetX(-110), $.autonomy(true)),
            $.repeat(3, [
                $.wait(3),
                $.fire($.direction(0, "sequence"), $spd3(0), $.bullet({ball:true,frame:0}), $.offsetX(-110), $.autonomy(true)),
            ]),
            $interval(10),
            $.fire($.direction(0), $spd3(0), $.bullet({ball:true,frame:0}), $.offsetX(+110), $.autonomy(true)),
            $.repeat(3, [
                $.wait(3),
                $.fire($.direction(0, "sequence"), $spd3(0), $.bullet({ball:true,frame:0}), $.offsetX(+110), $.autonomy(true)),
            ]),
            $interval(10),
        ]),
    ]),
});

gls2.Danmaku["honoka-1"] = new bulletml.Root({
    "top0": $.action([
        $.wait(60),
        $.repeat(10, [
            $nway(6, -40, 40, $spd3, $.bullet({ball:true,frame:4}), $.offsetX(0), $.offsetY(30)),
            $interval(30),
            $nway(7, -40, 40, $spd2, $.bullet({ball:true,frame:4}), $.offsetX(0), $.offsetY(30)),
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
            $absoluteNway(12, -10, -170, $spd1, $.bullet({ball:true,frame:0}), $.offsetX(-110), $.offsetY(-70)),
            $interval(30),
        ]),
    ]),
    "top3": $.action([
        $.repeat(20, [
            $absoluteNway(12, +10, +170, $spd1, $.bullet({ball:true,frame:0}), $.offsetX(+110), $.offsetY(-70)),
            $interval(30),
        ]),
    ]),
});

gls2.Danmaku["nagisa-1-1"] = new bulletml.Root({
    "top0": $.action([
        $interval(60),
        $.repeat(3, [
            $.bindVar("way", "5 + $loop.index*2"),
            $whip($spd3, 0.04, "3 + $loop.index", function(spd) {
                return $.action([
                    $nway("$way", -50, 50, spd, $.bullet, $.offsetX(-190), $.offsetY(-20)),
                    $nway("$way", -50, 50, spd, $.bullet, $.offsetX(+190), $.offsetY(-20)),
                    $.wait(5),
                ]);
            }),
            $interval(60),
        ]),
        $interval(60),
    ]),
});
gls2.Danmaku["nagisa-1-2"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(12, [
            $nway(15, -90, 90, $spd1, $.bullet),
            $interval(40),
        ]),
    ]),
    "top1": $.action([
        $.repeat(3, [
            $.repeat(3, [
                $nway(5, -65, -55, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(-190), $.offsetY(-20)),
                $nway(5, -35, -25, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(-190), $.offsetY(-20)),
                $nway(5,  -5,   5, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(-190), $.offsetY(-20)),
                $nway(5, +25, +35, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(-190), $.offsetY(-20)),
                $nway(5, +55, +65, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(-190), $.offsetY(-20)),
                $.wait(2),
            ]),
            $interval(60),
            $.repeat(3, [
                $nway(5, -65, -55, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(+190), $.offsetY(-20)),
                $nway(5, -35, -25, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(+190), $.offsetY(-20)),
                $nway(5,  -5,   5, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(+190), $.offsetY(-20)),
                $nway(5, +25, +35, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(+190), $.offsetY(-20)),
                $nway(5, +55, +65, $spd2, $.bullet({frame:0,ball:true}), $.offsetX(+190), $.offsetY(-20)),
                $.wait(2),
            ]),
            $interval(60),
        ]),
    ]),
});
gls2.Danmaku["nagisa-1-3"] = new bulletml.Root({
    "top0": $.action([
        $interval(60),
        $.repeat(3, [
            $.fire($.direction(-60), $spd2, $.bullet({frame:2}), $.offsetX(-190), $.offsetY(-20)),
            $.repeat(20, [
                $interval(15),
                $.fire($.direction(+6, "sequence"), $spd2, $.bullet({frame:2}), $.offsetX(-190), $.offsetY(-20)),
            ]),
        ]),
    ]),
    "top1": $.action([
        $interval(80),
        $.repeat(3, [
            $.fire($.direction(+60), $spd2, $.bullet({frame:2}), $.offsetX(+190), $.offsetY(-20)),
            $.repeat(20, [
                $interval(15),
                $.fire($.direction(-6, "sequence"), $spd2, $.bullet({frame:2}), $.offsetX(+190), $.offsetY(-20)),
            ]),
        ]),
    ]),
    "top2": $.action([
        $.repeat(6, [
            $.repeat(3, [
                $nway(5, -60, -40, $spd2, $.bullet({frame:4,ball:true}), $.offsetX(-190), $.offsetY(-20)),
                $nway(5, -20, -10, $spd2, $.bullet({frame:4,ball:true}), $.offsetX(-190), $.offsetY(-20)),
                $nway(5, +10, +20, $spd2, $.bullet({frame:4,ball:true}), $.offsetX(-190), $.offsetY(-20)),
                $nway(5, +40, +60, $spd2, $.bullet({frame:4,ball:true}), $.offsetX(-190), $.offsetY(-20)),
                $.wait(4),
            ]),
            $interval(60),
            $.repeat(3, [
                $nway(5, -60, -40, $spd2, $.bullet({frame:4,ball:true}), $.offsetX(+190), $.offsetY(-20)),
                $nway(5, -20, -10, $spd2, $.bullet({frame:4,ball:true}), $.offsetX(+190), $.offsetY(-20)),
                $nway(5, +10, +20, $spd2, $.bullet({frame:4,ball:true}), $.offsetX(+190), $.offsetY(-20)),
                $nway(5, +40, +60, $spd2, $.bullet({frame:4,ball:true}), $.offsetX(+190), $.offsetY(-20)),
                $.wait(4),
            ]),
            $interval(60),
        ]),
    ]),
});

gls2.Danmaku["nagisa-2-1"] = new bulletml.Root({
    "top0": $.action([
        $interval(120),
        $.repeat(36, [
            $absoluteNway(6, "+$loop.index*10", "+$loop.index*10 + 360", $spd1, $.bullet({frame:0}), $.offsetX(-190), $.offsetY(-20)),
            $absoluteNway(6, "-$loop.index*10", "-$loop.index*10 + 360", $spd1, $.bullet({frame:0}), $.offsetX(+190), $.offsetY(-20)),
            $interval(10),
        ]),
    ]),
    "top1": $.action([
        $interval(120),
        $.repeat(30, [
            $absoluteNway(3, "+$loop.index*10", "+$loop.index * 10 + 360", $spd2, $.bullet({frame:3,ball:true})),
            $absoluteNway(3, "-$loop.index*14", "-$loop.index * 14 + 360", $spd2, $.bullet({frame:3,ball:true})),
            $interval(12),
        ]),
    ]),
});
gls2.Danmaku["nagisa-2-2"] = new bulletml.Root({
    "top0": $.action([
        $interval(120),
        $.repeat(30, [
            $absoluteNway(4, "+$loop.index*5", "+$loop.index*5 + 270", $spd3, $.bullet({frame:3,ball:true})),
            $interval(12),
        ]),
    ]),
    "top1": $.action([
        $interval(120),
        $.repeat(6, [
            $absoluteNway(9, 180 + -30, 180 + -50, $spd1(0.8), $.bullet),
            $absoluteNway(9, 180 +  -8, 180 +  +8, $spd1(0.8), $.bullet),
            $absoluteNway(9, 180 + +30, 180 + +50, $spd1(0.8), $.bullet),
            $interval(30),
            $absoluteNway(9, 180 + -10, 180 + -30, $spd1(0.8), $.bullet),
            $absoluteNway(9, 180 + +10, 180 + +30, $spd1(0.8), $.bullet),
            $interval(30),
        ]),
    ]),
});
gls2.Danmaku["nagisa-2-3"] = new bulletml.Root({
    "top": $.action([
        $interval(120),
        $.repeat(12, [
            $absoluteNway(23, 0, 360, $spd1, $.bullet({frame:4,ball:true}), $.offsetX(-190), $.offsetY(-20)),
            $absoluteNway(23, 0, 360, $spd1, $.bullet({frame:4,ball:true})),
            $absoluteNway(23, 0, 360, $spd1, $.bullet({frame:4,ball:true}), $.offsetX(+190), $.offsetY(-20)),
            $interval(30),
        ]),
    ]),
});

gls2.Danmaku["nagisa-3-1"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(10, [
            $nway(60, -60, 60, $spd1, $.bullet),
            $interval(20),
        ]),
        $interval(100),
    ]),
});

gls2.Danmaku.setup = function() {
    for (var i = 0; i < 800; i++) {
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
    bulletml.Walker.globalScope["$rank"] = 0;
    // ハイパー？
    bulletml.Walker.globalScope["$hyperOff"] = 1.0;
};
/**
 * エフェクト付きの弾幕全消し
 */
gls2.Danmaku.erase = function(star, large) {
    var bullets = [].concat(activeList);
    for (var i = 0, len = bullets.length; i < len; i++) {
        if (star) {
            gls2.StarItemSky(!!large)
                .setPosition(bullets[i].x, bullets[i].y);
        }
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
            this.hp = gls2.Setting.BULLET_HP;
        });
        this.addEventListener("removed", function() {
            bulletPool.push(this);
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);

            this.clearEventListener("enterframe");
        });
    },
    destroy: function() {
        var p = gls2.Particle(10, 1, 0.92, tm.graphics.Canvas()
                .resize(10, 10)
                .setFillStyle(
                    tm.graphics.RadialGradient(10*0.5, 10*0.5, 0, 10*0.5, 10*0.5, 10*0.5)
                        .addColorStopList([
                            { offset: 0.0, color: "rgba(255,100,100,0.0)" },
                            { offset: 0.3, color: "rgba(255,100,100,0.0)" },
                            { offset: 0.9, color: "rgba(255,180,180,1.0)" },
                            { offset: 1.0, color: "rgba(255,100,100,0.0)" },
                        ]).toStyle()
                )
                .fillRect(0, 0, 10, 10)
                .element
        ).setScale(0.1, 0.1).setPosition(this.x, this.y);
        p.addEventListener("enterframe", function() {
            this.scaleX += 0.1;
            this.scaleY += 0.1;
        });
        p.addChildTo(this.parent);

        this.remove();
    },
});

var bulletPool = [];
var activeList = gls2.Bullet.activeList = [];

})();
