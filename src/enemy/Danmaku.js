/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

gls2.Danmaku = {};

/** bulletml.js DSL 名前空間 */
var $ = bulletml.dsl;

// 弾種
/** 青弾（小） */
var BS = function(action) { return $.bullet(action, {frame:0,ball:true}); };
/** 青弾（大） */
var BL = function(action) { return $.bullet(action, {frame:2,ball:true}); };
/** 赤弾（小） */
var RS = function(action) { return $.bullet(action, {frame:1,ball:true}); };
/** 赤弾（大） */
var RL = function(action) { return $.bullet(action, {frame:3,ball:true}); };
/** 青針弾（小） */
var BNS = function(action) { return $.bullet(action, {frame:0}); };
/** 青針弾（大） */
var BNL = function(action) { return $.bullet(action, {frame:2}); };
/** 赤針弾（小） */
var RNS = function(action) { return $.bullet(action, {frame:1}); };
/** 赤針弾（大） */
var RNL = function(action) { return $.bullet(action, {frame:3}); };
/** 赤イクラ弾 */
var RI = function(action) { return $.bullet(action, {frame:4,ball:true}); };
/** 見えない弾 */
var IVS = function(action) { return $.bullet(action, {visible:false}) };
/** 赤リング弾（大） */
var RR = function(action) { return $.bullet(action, {frame:7,ball:true}); };
/** 青リング（大） */
var BR = function(action) { return $.bullet(action, {frame:6,ball:true}); };
/** 青針弾（細） */
var BNSH = function(action) { return $.bullet(action, {frame:2,needle:true}); };
/** 赤針弾（細） */
var RNSH = function(action) { return $.bullet(action, {frame:3,needle:true}); };
/** 青レーザー */
var BLSR = function(action) { return $.bullet(action, {frame:0,laser:true}); };
/** 赤レーザー */
var RLSR = function(action) { return $.bullet(action, {frame:1,laser:true}); };

/**
 * 発射間隔
 * ランクによって短くなる
 * ハイパー中も短くなる
 */
var $interval = function(v) { return $.wait(v + "*(1-$rank)*$hyperOff") };

// 弾速
var $spd0 = function(v) { v = v===undefined?0:v; return $.speed("($rank + $ex*0.2)*1.5 + 0.20 + ("+v+"*0.1)" ); };
var $spd1 = function(v) { v = v===undefined?0:v; return $.speed("($rank + $ex*0.2)*1.5 + 0.50 + ("+v+"*0.1)" ); };
var $spd2 = function(v) { v = v===undefined?0:v; return $.speed("($rank + $ex*0.2)*1.5 + 0.80 + ("+v+"*0.1)" ); };
var $spd3 = function(v) { v = v===undefined?0:v; return $.speed("($rank + $ex*0.2)*1.5 + 1.10 + ("+v+"*0.1)" ); };
var $spd4 = function(v) { v = v===undefined?0:v; return $.speed("($rank + $ex*0.2)*1.5 + 1.40 + ("+v+"*0.1)" ); };
var $spd5 = function(v) { v = v===undefined?0:v; return $.speed("($rank + $ex*0.2)*1.5 + 1.70 + ("+v+"*0.1)" ); };
var $spd6 = function(v) { v = v===undefined?0:v; return $.speed("($rank + $ex*0.2)*1.5 + 2.00 + ("+v+"*0.1)" ); };

/** 自機狙い弾 */
var $fire0 = function(spd) { return $.fire($.direction(0), spd || $spd3, RNS) };
var $fire1 = function(spd) { return $.fire($.direction(0), spd || $spd3, BNS) };

/** 自機狙いn-way弾 */
var $nway = function(way, rangeFrom, rangeTo, speed, bullet, offsetX, offsetY, autonomy) {
    return $.action([
        $.fire($.direction(rangeFrom), speed, bullet || RNS, offsetX, offsetY, autonomy),
        $.repeat(way + "+($ex*2)-1", [
            $.fire($.direction("((" + rangeTo + ")-(" + rangeFrom + "))/(" + way + "+($ex*2)-1)", "sequence"), speed, bullet || RNS, offsetX, offsetY, autonomy),
        ])
    ]);
};
var $nwayVs = function(way, rangeFrom, rangeTo, bullet, offsetX, offsetY, autonomy) {
    return function(spd) {
        return $nway(way, rangeFrom, rangeTo, spd, bullet, offsetX, offsetY, autonomy);
    };
};

/** 絶対n-way弾 */
var $absoluteNway = function(way, rangeFrom, rangeTo, speed, bullet, offsetX, offsetY) {
    return $.action([
        $.fire($.direction(rangeFrom, "absolute"), speed, bullet || RNS, offsetX, offsetY),
        $.repeat(way + "-1", [
            $.fire($.direction("((" + rangeTo + ")-(" + rangeFrom + "))/(" + way + "-1)", "sequence"), speed, bullet || RNS, offsetX, offsetY),
        ])
    ]);
};
var $absoluteNwayVs = function(way, rangeFrom, rangeTo, bullet, offsetX, offsetY) {
    return function(spd) {
        return $absoluteNway(way, rangeFrom, rangeTo, spd, bullet, offsetX, offsetY);
    };
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
        $.repeat(count + "-1", [
            actionFunc($.speed(delta, "sequence")),
        ]),
    ]);
};

/**
 * 自機狙い弾を1発発射.
 */
gls2.Danmaku["basic0-0"] = new bulletml.Root({
    "top": $.action([
        $fire0,
    ]),
});

/**
 * 3wayウィップを発射.
 */
gls2.Danmaku["basic0-1"] = new bulletml.Root({
    "top": $.action([
        $whip($spd4, -0.01, 8, $nwayVs(3, -15, 15))
    ]),
});

/**
 * 自機狙い弾を連射.
 */
gls2.Danmaku["basic1-0"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $interval(40),
            $fire0($spd3),
        ]),
    ]),
});

/**
 * 自機狙い弾を連射.
 */
gls2.Danmaku["basic1-1"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $interval(20),
            $fire0($spd3),
        ]),
    ]),
});

/**
 * 自機狙い弾3wayを発射.
 */
gls2.Danmaku["basic1-2"] = new bulletml.Root({
    "top": $.action([
        $interval("10+$rand*100"),
        $nway(3, -20, 20, $spd3),
    ]),
});

/**
 * 自機狙い弾3wayを速射.
 */
gls2.Danmaku["basic1-3"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $interval("20+$rand*80"),
            $nway(3, -20, 20, $spd3),
        ]),
    ]),
});

/**
 * 自機狙い弾を50間隔で連射.
 */
gls2.Danmaku["basic2-0"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $interval(50),
            $fire0($spd3),
        ]),
    ]),
});

/**
 * やよい1
 * 自機狙い弾*3を100間隔で連射.
 */
gls2.Danmaku["basic3-0"] = new bulletml.Root({
    "top": $.action([
        $.wait(20),
        $.repeat(999, [
            $interval(100),
            $whip($spd3, 0.1, 3, $fire1),
        ]),
    ]),
});

/**
 * やよい2
 * 自機狙い弾*3を40間隔で連射.
 */
gls2.Danmaku["basic3-1"] = new bulletml.Root({
    "top": $.action([
        $.wait(20),
        $.repeat(999, [
            $interval(40),
            $whip($spd3, 0.1, 3, $fire1),
        ]),
    ]),
});

/**
 * ブッキー4面
 */
gls2.Danmaku["bukky-4-0"] = new bulletml.Root({
    "top0": $.action([
        $interval(30),
        $.repeat(999, [
            $.fire($.direction(-40), $spd3, BL),
            $.repeat(3, [
                $.fire($.direction( 20, "sequence"), $spd3, BL),
                $.fire($.direction( 20, "sequence"), $spd3, BL),
                $.fire($.direction( 20, "sequence"), $spd3, BL),
                $.fire($.direction( 20, "sequence"), $spd3, BL),
                $.fire($.direction(-80, "sequence"), $spd3, BL),
                $interval(5),
            ]),
            $interval(70),
        ]),
    ]),
    "top1": $.action([
        $interval(20),
        $.fire($.direction(180, "absolute"), $spd2, RS),
        $.repeat(999, [
            $.fire($.direction( 15, "sequence"), $spd2, RS),
            $.fire($.direction( 15, "sequence"), $spd2, RS),
            $.fire($.direction( 15, "sequence"), $spd2, RS),
            $.fire($.direction( 15, "sequence"), $spd2, RS),
            $.fire($.direction( 15, "sequence"), $spd2, RS),
            $.fire($.direction( 15, "sequence"), $spd2, RS),
            $.fire($.direction( 15, "sequence"), $spd2, RS),
            $.fire($.direction( 15, "sequence"), $spd2, RS),
            $.fire($.direction( 15, "sequence"), $spd2, RS),
            $.fire($.direction(-90, "sequence"), $spd2, RS),
            $interval(5),
        ]),
    ]),
});

/**
 * ブッキー5面
 */
gls2.Danmaku["bukky-5-0"] = new bulletml.Root({
    "top0": $.action([
        $interval(30),
        $.repeat(999, [
            $.fire($.direction(-40), $spd3, BL),
            $.repeat(3, [
                $.fire($.direction( 10, "sequence"), $spd3, BL),
                $.fire($.direction( 10, "sequence"), $spd3, BL),
                $.fire($.direction( 10, "sequence"), $spd3, BL),
                $.fire($.direction( 10, "sequence"), $spd3, BL),
                $.fire($.direction( 10, "sequence"), $spd3, BL),
                $.fire($.direction( 10, "sequence"), $spd3, BL),
                $.fire($.direction( 10, "sequence"), $spd3, BL),
                $.fire($.direction( 10, "sequence"), $spd3, BL),
                $.fire($.direction(-80, "sequence"), $spd3, BL),
                $interval(5),
            ]),
            $interval(70),
        ]),
    ]),
    "top1": $.action([
        $interval(20),
        $.fire($.direction(180, "absolute"), $spd2, RS),
        $.repeat(999, [
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction( 7.5, "sequence"), $spd2, RS),
            $.fire($.direction(-90, "sequence"), $spd2, RS),
            $interval(5),
        ]),
    ]),
});

/**
 * まこぴー1.
 */
gls2.Danmaku["cannon2-0"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $interval(20),
            $absoluteNway(4,   "0-10+$loop.index*15",   "0+10+$loop.index*15", $spd2),
            $absoluteNway(4,  "90-10+$loop.index*15",  "90+10+$loop.index*15", $spd2),
            $absoluteNway(4, "180-10+$loop.index*15", "180+10+$loop.index*15", $spd2),
            $absoluteNway(4, "270-10+$loop.index*15", "270+10+$loop.index*15", $spd2),
            $interval(20),
            $absoluteNway(3,   "0-10+45+$loop.index*15",   "0+10+45+$loop.index*15", $spd3),
            $absoluteNway(3,  "90-10+45+$loop.index*15",  "90+10+45+$loop.index*15", $spd3),
            $absoluteNway(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", $spd3),
            $absoluteNway(3, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", $spd3),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $.fire($.direction("  0+$loop.index*10", "absolute"), $spd1, RI),
            $.fire($.direction(" 90+$loop.index*10", "absolute"), $spd1, RI),
            $.fire($.direction("180+$loop.index*10", "absolute"), $spd1, RI),
            $.fire($.direction("270+$loop.index*10", "absolute"), $spd1, RI),
            $.fire($.direction("  0-$loop.index*10", "absolute"), $spd1, RI),
            $.fire($.direction(" 90-$loop.index*10", "absolute"), $spd1, RI),
            $.fire($.direction("180-$loop.index*10", "absolute"), $spd1, RI),
            $.fire($.direction("270-$loop.index*10", "absolute"), $spd1, RI),
            $interval(10),
        ]),
    ]),
    "top2": $.action([
        $.repeat(999, [
            $interval(43),
            $nway(30, 0, 360-360/30, $spd3, BNS),
        ]),
    ]),
});

/**
 * まこぴー4面.
 */
gls2.Danmaku["cannon2-3"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $.bindVar("d", "$loop.index*-6"),
            $.repeat(10 - 1, [
                $.fire($.direction(360/10, "sequence"), $.speed(1), IVS($.actionRef("ivs0", "$d"))),
            ]),
            $interval(10),
            $.fire($.direction(360/10 + 3, "sequence"), $.speed(1), IVS($.actionRef("ivs0", "$d"))),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $.bindVar("d", "($loop.index)*+12"),
            $.repeat(13 - 1, [
                $.fire($.direction(360/13, "sequence"), $.speed(1), IVS($.actionRef("ivs1", "$d"))),
            ]),
            $interval(10),
            $.fire($.direction(360/13 - 4, "sequence"), $.speed(1), IVS($.actionRef("ivs1", "$d"))),
        ]),
    ]),
    "ivs0": $.action([
        $.wait(5),
        $.fire($.direction("$1", "relative"), $spd2, BNS),
        $.vanish(),
    ]),
    "ivs1": $.action([
        $.wait(10),
        $.fire($.direction("$1-5", "relative"), $spd2, RR),
        $.fire($.direction("$1+5", "relative"), $spd2, BR),
        $.vanish(),
    ]),
});

/**
 * つぼみ1.
 */
gls2.Danmaku["cannon3-0"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $interval(80),
            $whip($spd2, 0.01, 5, $nwayVs(5, -30, 30, BNS, $.offsetX(-60))),
            $whip($spd2, 0.01, 5, $nwayVs(5, -30, 30, BNS)),
            $whip($spd2, 0.01, 5, $nwayVs(5, -30, 30, BNS, $.offsetX(+60))),
        ]),
    ]),
});

/**
 * いつき1.
 */
gls2.Danmaku["cannon4-0"] = new bulletml.Root({
    "top0": $.action([
        $interval(20),
        $.repeat(999, [
            $.fire($spd2, BL),
            $.repeat(8, [
                $interval(10),
                $.bindVar("way", "$loop.count+1"),
                $.fire($.direction("-12/2 - 12*($way-2)", "sequence"), $spd2, BL),
                $.repeat("$way-1", [
                    $.fire($.direction(12, "sequence"), $spd2, BL),
                ]),
            ]),
            $interval(120),
        ]),
    ]),
});

/**
 * いつき2.
 */
gls2.Danmaku["cannon5-0"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $.fire($.direction(-60), $spd6, IVS($.actionRef("b"))),
            $.repeat(11, [
                $interval(5),
                $.fire($.direction(10, "sequence"), $spd6, IVS($.actionRef("b"))),
            ]),
            $interval(60),
        ]),
    ]),
    "b": $.action([
        $.wait(5),
        $.changeSpeed($.speed(0), 0),
        $whip($spd2, 0.1, 5, function(spd) {
            return $.fire($.direction(0, "relative"), spd, RNS);
        }),
        $.vanish,
    ]),
});

/**
 * ゆりさん4面
 */
gls2.Danmaku["yuri-4"] = new bulletml.Root({
    "top": $.action([
        $interval(60),
        $.repeat(7, [
            $absoluteNway(7, 180+-60, 180+60, $spd1, BNS),
            $interval(8),
        ]),
    ]),
});

/**
 * エレン1面
 */
gls2.Danmaku["kurokawa-1"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $whip($spd3, -0.01, 4, function(spd) {
                return $nway(4, -45, 45, spd, BNL, $.offsetX(-45), $.autonomy(true));
            }),
            $whip($spd3, -0.01, 4, function(spd) {
                return $nway(4, -45, 45, spd, BNL, $.offsetX(+45), $.autonomy(true));
            }),
            $interval(90),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $.fire($.direction(0), $spd3, RL, $.offsetX(-45), $.autonomy(true)),
            $interval(45),
            $.fire($.direction(0), $spd3, RL, $.offsetX(+45), $.autonomy(true)),
            $interval(45),
        ]),
    ]),
});

/**
 * くるみ5面
 */
gls2.Danmaku["milk-5"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $nway(5, -90, 90, $spd3, RNL, $.offsetX(-45)),
            $.wait(27),
            $nway(5, -90, 90, $spd3, RNL, $.offsetX(+45)),
            $interval(120),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $interval(30),
            $nway(6, -90, 90, $spd4, BL, $.offsetX(-45)),
            $.wait(21),
            $nway(6, -90, 90, $spd4, BL, $.offsetX(+45)),
            $interval(90),
        ]),
    ]),
    "top2": $.action([
        $.repeat(999, [
            $interval(55),
            $nway(13, -90, 90, $spd1, RI, $.offsetX(-45)),
            $.wait(20),
            $nway(13, -90, 90, $spd1, RI, $.offsetX(+45)),
            $interval(21),
        ]),
    ]),
});

/**
 * アコちゃん5面
 */
gls2.Danmaku["ako-5"] = new bulletml.Root({
    "top": $.action([
        $.repeat(8, [
            $nway(3, -20, 20, $spd4, RNS),
            $interval(2)
        ]),
    ]),
});

/**
 * エレン4面
 */
gls2.Danmaku["kurokawa-4"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $whip($spd3, -0.01, 4, function(spd) {
                return $nway(4, -45, 45, spd, BNL, $.offsetX(-45), $.autonomy(true));
            }),
            $whip($spd3, -0.01, 4, function(spd) {
                return $nway(4, -45, 45, spd, BNL, $.offsetX(+45), $.autonomy(true));
            }),
            $interval(90),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $.fire($.direction(0), $spd3, RL, $.offsetX(-45), $.autonomy(true)),
            $interval(45),
            $.fire($.direction(0), $spd3, RL, $.offsetX(+45), $.autonomy(true)),
            $interval(45),
        ]),
    ]),
});

/**
 * こまち1面
 */
gls2.Danmaku["komachi-1"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(20, [
            $.fire($.direction(210, "absolute"), $spd1(1), RNS, $.offsetX(-40)),
            $.fire($.direction(120, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
            $.fire($.direction(120, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
            $.repeat(57, [
                $interval(8),
                $.fire($.direction(-720/57, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
                $.fire($.direction(    120, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
                $.fire($.direction(    120, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
            ]),
        ]),
    ]),
    "top1": $.action([
        $.repeat(20, [
            $.fire($.direction(-210, "absolute"), $spd1(1), RNS, $.offsetX(40)),
            $.fire($.direction( 120, "sequence"), $spd1(1), RNS, $.offsetX(40)),
            $.fire($.direction( 120, "sequence"), $spd1(1), RNS, $.offsetX(40)),
            $.repeat(57, [
                $interval(8),
                $.fire($.direction(720/57, "sequence"), $spd1(1), RNS, $.offsetX(40)),
                $.fire($.direction(   120, "sequence"), $spd1(1), RNS, $.offsetX(40)),
                $.fire($.direction(   120, "sequence"), $spd1(1), RNS, $.offsetX(40)),
            ]),
        ]),
    ]),
    "top2": $.action([
        $.repeat(70, [
            $.fire($.direction(0), $spd3(0), BS, $.offsetX(-110), $.autonomy(true)),
            $.repeat(6, [
                $.wait(1),
                $.fire($.direction(0, "sequence"), $spd3(0), BS, $.offsetX(-110), $.autonomy(true)),
            ]),
            $interval(10),
            $.fire($.direction(0), $spd3(0), BS, $.offsetX(+110), $.autonomy(true)),
            $.repeat(6, [
                $.wait(1),
                $.fire($.direction(0, "sequence"), $spd3(0), BS, $.offsetX(+110), $.autonomy(true)),
            ]),
            $interval(10),
        ]),
    ]),
});

/**
 * こまち2面
 */
gls2.Danmaku["komachi-2"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $whip($spd3, -0.01, 4, function(spd) {
                return $.action([
                    $nway(4, -45, 45, spd, BNL, $.offsetX(-45), $.autonomy(true)),
                    $interval(4),
                ]);
            }),
            $whip($spd3, -0.01, 4, function(spd) {
                return $.action([
                    $interval(4),
                    $nway(4, -45, 45, spd, BNL, $.offsetX(+45), $.autonomy(true)),
                ]);
            }),
            $interval(90),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $interval(45),
            $whip($spd2, 0.01, 22, function(spd) {
                return $.action([
                    $.repeat("1 + $rand*6", [
                        $.fire($.direction("-5+$rand*10"), spd, RS),
                    ]),
                    $interval(1),
                ]);
            }),
            $interval(180),
        ]),
    ]),
});

/**
 * こまち3面
 */
gls2.Danmaku["komachi-3"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $whip($spd3, -0.01, 4, function(spd) {
                return $.action([
                    $nway(8, -60, 60, spd, BNL, $.offsetX(-45), $.autonomy(true)),
                    $interval(4),
                ]);
            }),
            $whip($spd3, -0.01, 4, function(spd) {
                return $.action([
                    $interval(4),
                    $nway(8, -60, 60, spd, BNL, $.offsetX(+45), $.autonomy(true)),
                ]);
            }),
            $interval(90),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $interval(45),
            $whip($spd2, 0.01, 22, function(spd) {
                return $.action([
                    $.repeat("1 + $rand*6", [
                        $.fire($.direction("-5+$rand*10"), spd, RS),
                    ]),
                    $interval(1),
                ]);
            }),
            $interval(180),
        ]),
    ]),
});

/**
 * こまち4面
 */
gls2.Danmaku["komachi-4"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $.repeat(4, [
                $.fire($.direction("220+-1+$rand*2", "absolute"), $spd3, RNL, $.offsetX(-45)),
                $.fire($.direction("180+-1+$rand*2", "absolute"), $spd3, RNL, $.offsetX(-45)),
                $.fire($.direction("180+-1+$rand*2", "absolute"), $spd3, RNL, $.offsetX(+45)),
                $.fire($.direction("140+-1+$rand*2", "absolute"), $spd3, RNL, $.offsetX(+45)),
                $interval(4),
            ]),
            $interval(60),
        ]),
    ]),
    "top1": $.action([
        $.repeat(70, [
            $.fire($.direction(0), $spd3(5), BS, $.offsetX(-110), $.autonomy(true)),
            $.repeat(12, [
                $.wait(1),
                $.fire($.direction(0, "sequence"), $spd3(5), BS, $.offsetX(-110), $.autonomy(true)),
            ]),
            $interval(30),
            $.fire($.direction(0), $spd3(5), BS, $.offsetX(+110), $.autonomy(true)),
            $.repeat(12, [
                $.wait(1),
                $.fire($.direction(0, "sequence"), $spd3(5), BS, $.offsetX(+110), $.autonomy(true)),
            ]),
            $interval(30),
        ]),
    ]),
});

/**
 * こまち5面
 */
gls2.Danmaku["komachi-5"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $.fire($.direction(210, "absolute"), $spd1(1), RNS, $.offsetX(-40)),
            $.fire($.direction(120, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
            $.fire($.direction(120, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
            $.repeat(60, [
                $interval(4),
                $.fire($.direction(-360/60, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
                $.fire($.direction(    120, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
                $.fire($.direction(    120, "sequence"), $spd1(1), RNS, $.offsetX(-40)),
            ]),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $.fire($.direction(-210, "absolute"), $spd1(1), RNS, $.offsetX(40)),
            $.fire($.direction( 120, "sequence"), $spd1(1), RNS, $.offsetX(40)),
            $.fire($.direction( 120, "sequence"), $spd1(1), RNS, $.offsetX(40)),
            $.repeat(60, [
                $interval(4),
                $.fire($.direction(+360/60, "sequence"), $spd1(1), RNS, $.offsetX(40)),
                $.fire($.direction(    120, "sequence"), $spd1(1), RNS, $.offsetX(40)),
                $.fire($.direction(    120, "sequence"), $spd1(1), RNS, $.offsetX(40)),
            ]),
        ]),
    ]),
    "top2": $.action([
        $.repeat(999, [
            $.fire($.direction(-10), $spd4(0), BS, $.offsetX(-110), $.autonomy(true)),
            $.fire($.direction(+10, "sequence"), $spd4(0), BS, $.offsetX(-110), $.autonomy(true)),
            $.fire($.direction(+10, "sequence"), $spd4(0), BS, $.offsetX(-110), $.autonomy(true)),
            $.repeat(30, [
                $.wait(1),
                $.fire($.direction(-20, "sequence"), $spd4(0), BS, $.offsetX(-110), $.autonomy(true)),
                $.fire($.direction(+10, "sequence"), $spd4(0), BS, $.offsetX(-110), $.autonomy(true)),
                $.fire($.direction(+10, "sequence"), $spd4(0), BS, $.offsetX(-110), $.autonomy(true)),
            ]),
            $interval(5),
            $.fire($.direction(-10), $spd4(0), BS, $.offsetX(+110), $.autonomy(true)),
            $.fire($.direction(+10, "sequence"), $spd4(0), BS, $.offsetX(+110), $.autonomy(true)),
            $.fire($.direction(+10, "sequence"), $spd4(0), BS, $.offsetX(+110), $.autonomy(true)),
            $.repeat(30, [
                $.wait(1),
                $.fire($.direction(-20, "sequence"), $spd4(0), BS, $.offsetX(+110), $.autonomy(true)),
                $.fire($.direction(+10, "sequence"), $spd4(0), BS, $.offsetX(+110), $.autonomy(true)),
                $.fire($.direction(+10, "sequence"), $spd4(0), BS, $.offsetX(+110), $.autonomy(true)),
            ]),
            $interval(5),
        ]),
    ]),
});

/**
 * のぞみ4面
 */
gls2.Danmaku["nozomi-4"] = new bulletml.Root({
    "top0": $.action([
        $.wait(60),
        $.repeat(999, [
            $.repeat(12, [
                $.bindVar("c", "2+$loop.index"),
                $nway("$c", "-4-($c-2)*4", "4+($c-2)*4", $spd0("(560-$c*40)*0.03"), RL, $.offsetY(-50)),
            ]),
            $interval(150),
        ]),
    ]),
    "top1": $.action([
        $.wait(20),
        $.repeat(999, [
            $.fire($.direction(+40), IVS($.actionRef("noop"))),
            $whip($spd3, 0.03, 16, function(spd) {
                return $.action([
                    $.fire($.direction(-5, "sequence"), spd, BNS, $.offsetX(-50)),
                    $.wait(3),
                ]);
            }),
            $interval(90),
            $.fire($.direction(-40), IVS($.actionRef("noop"))),
            $whip($spd3, 0.03, 16, function(spd) {
                return $.action([
                    $.fire($.direction(+5, "sequence"), spd, BNS, $.offsetX(+50)),
                    $.wait(3),
                ]);
            }),
            $interval(90),
        ]),
    ]),
    "noop": $.action([
        $.wait(1),
        $.vanish,
    ]),
});

/**
 * のぞみ5面
 */
gls2.Danmaku["nozomi-5"] = new bulletml.Root({
    "top0": $.action([
        $.wait(60),
        $.repeat(999, [
            $.repeat(6, [
                $.bindVar("c", "2+$loop.index"),
                $nway("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", $spd0("(560-$c*40)*0.02"), RL, $.offsetY(-50)),
                $nway("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", $spd0("(560-$c*40)*0.02"), RL, $.offsetY(-50)),
                $nway("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", $spd0("(560-$c*40)*0.02"), RL, $.offsetY(-50)),
                $nway("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", $spd0("(560-$c*40)*0.02"), RL, $.offsetY(-50)),
            ]),
            $interval(150),
            $.repeat(6, [
                $.bindVar("c", "2+$loop.index"),
                $nway("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", $spd0("(560-$c*40)*0.02"), BL, $.offsetY(-50)),
                $nway("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", $spd0("(560-$c*40)*0.02"), BL, $.offsetY(-50)),
                $nway("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", $spd0("(560-$c*40)*0.02"), BL, $.offsetY(-50)),
                $nway("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", $spd0("(560-$c*40)*0.02"), BL, $.offsetY(-50)),
                $nway("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", $spd0("(560-$c*40)*0.02"), BL, $.offsetY(-50)),
            ]),
            $interval(150),
        ]),
    ]),
    "top1": $.action([
        $.wait(20),
        $.repeat(999, [
            $.fire($.direction(+5), IVS($.actionRef("noop"))),
            $whip($spd3, 0.06, 15, function(spd) {
                return $.action([
                    $.fire($.direction(-1, "sequence"), spd, BNS, $.offsetX(-50)),
                    $interval(3),
                ]);
            }),
            $.fire($.direction(-5), IVS($.actionRef("noop"))),
            $whip($spd3, 0.06, 15, function(spd) {
                return $.action([
                    $.fire($.direction(+1, "sequence"), spd, BNS, $.offsetX(+50)),
                    $interval(3),
                ]);
            }),
        ]),
    ]),
    "noop": $.action([
        $.wait(1),
        $.vanish,
    ]),
});

/**
 * mktn5面
 */
gls2.Danmaku["mktn-5"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $.fire($.direction(0), $spd1, IVS($.actionRef("noop"))),
            $.repeat(20, [
                $.fire($.direction(+0.5, "sequence"), $.speed(0.08, "sequence"), BNL),
                $.repeat(360/30, [
                    $.fire($.direction(30, "sequence"), $.speed(0, "sequence"), BNL),
                ]),
                $interval(6),
            ]),

            $.fire($.direction(0), $spd1, IVS($.actionRef("noop"))),
            $.repeat(20, [
                $.fire($.direction(-0.5, "sequence"), $.speed(0.08, "sequence"), BNL),
                $.repeat(360/30, [
                    $.fire($.direction(30, "sequence"), $.speed(0, "sequence"), BNL),
                ]),
                $interval(6),
            ]),

            $interval(60),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $.fire($.direction(0, "absolute"), $spd3, IVS($.actionRef("noop"))),
            $.repeat(5, [
                $.fire($.direction(-10, "sequence"), $.speed(0.05, "sequence"), RI),
                $.repeat(360/30, [
                    $.fire($.direction(30, "sequence"), $.speed(0, "sequence"), RI),
                ]),
                $interval(5),
            ]),

            $.fire($.direction(0, "absolute"), $spd3, IVS($.actionRef("noop"))),
            $.repeat(5, [
                $.fire($.direction(+10, "sequence"), $.speed(0.05, "sequence"), RI),
                $.repeat(360/30, [
                    $.fire($.direction(30, "sequence"), $.speed(0, "sequence"), RI),
                ]),
                $interval(5),
            ]),

            $interval(40),
        ]),
    ]),
    "top2": $.action([
        $.repeat(999, [
            $.bindVar("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"),
            $nway(5, -30, 30, $spd3(7), BNSH, $.offsetX("$gun"), $.offsetY(20)),
            $.bindVar("gun", "[-40, -120, 0, 120, 80, 40, -80][$loop.index%7]"),
            $nway(5, -30, 30, $spd3(7), BNSH, $.offsetX("$gun"), $.offsetY(20)),
            $interval(21),
        ]),
    ]),
    "noop": $.action([
        $.wait(1),
        $.vanish,
    ]),
});

/**
 *　サニキ用
 */
gls2.Danmaku["akane"] = new bulletml.Root({
    "top": $.action([
        $.wait("40"),
        $.repeat(999, [
            $.repeat(5, [
                $interval(60),
                $nway(1, 1, 1, $spd1, BNL, $.offsetX(-16), $.offsetY(6), $.autonomy(true)),
                $nway(1, 1, 1, $spd1, BNL, $.offsetX( 16), $.offsetY(6), $.autonomy(true)),
            ]),
            $interval(120),
        ]),
    ]),
});

/**
 * 直球勝負！
 */
gls2.Danmaku["nao-1"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $interval(30),
            $.fire($.direction(0), $spd4, RL),
        ]),
    ]),
});
gls2.Danmaku["nao-2"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $interval(30),
             $nway(2, -5, 5, $spd4, RL, $.offsetX(0), $.offsetY(0), $.autonomy(true)),
        ]),
    ]),
});
gls2.Danmaku["nao-3"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $interval(30),
             $nway(2, -1, 1, $spd4, RL, $.offsetX(0), $.offsetY(0), $.autonomy(true)),
        ]),
    ]),
});

/**
 * れいか様
 */
gls2.Danmaku["reika"] = new bulletml.Root({
    "top": $.action([
        $.repeat(999, [
            $interval(60),
            $.fire($.direction(0), $spd3, BL),
        ]),
    ]),
});

/**
 * あぐりちゃん
 */
gls2.Danmaku["aguri"] = new bulletml.Root({
    //TODO:もう少しカッコよくしたい
    "top0": $.action([
        $.repeat(999, [
            $.repeat(3, [
                $whip($spd3, 0.001, 4, function(spd) {
                    return $.action([
                        //左側
                        $nway(3, -30, 30, spd, BL, $.offsetX( -32), $.offsetY(-20)),
                        $nway(2, -30, 30, spd, BL, $.offsetX(-120), $.offsetY( 10)),
                        $nway(2, -30, 30, spd, BL, $.offsetX( -80), $.offsetY( 12)),
                        //右側
                        $nway(3, -30, 30, spd, BL, $.offsetX(  32), $.offsetY(-20)),
                        $nway(2, -30, 30, spd, BL, $.offsetX( 120), $.offsetY( 10)),
                        $nway(2, -30, 30, spd, BL, $.offsetX(  80), $.offsetY( 12)),
                        $.wait(1),
                    ]);
                }),
                $interval(10),
            ]),
            $interval(120),
        ]),
    ]),
    //トキメキなさい！
    "top1": $.action([
        $.repeat(999, [
            $.repeat(3, [
                //真ん中
                $nway(3,-10, 10, $spd4, RS, $.offsetX(  0), $.offsetY(  0)),
                $nway(3,-10, 10, $spd4, RS, $.offsetX(  0), $.offsetY( 30)),
                //右側
                $nway(3,-10, 10, $spd4, RS, $.offsetX(-10), $.offsetY(-10)),
                $nway(3,-10, 10, $spd4, RS, $.offsetX(-20), $.offsetY(  0)),
                $nway(3,-10, 10, $spd4, RS, $.offsetX(-20), $.offsetY( 10)),
                $nway(3,-10, 10, $spd4, RS, $.offsetX(-10), $.offsetY( 20)),
                //左側
                $nway(3,-10, 10, $spd4, RS, $.offsetX( 10), $.offsetY(-10)),
                $nway(3,-10, 10, $spd4, RS, $.offsetX( 20), $.offsetY(  0)),
                $nway(3,-10, 10, $spd4, RS, $.offsetX( 20), $.offsetY( 10)),
                $nway(3,-10, 10, $spd4, RS, $.offsetX( 10), $.offsetY( 20)),
                $interval(40),
            ]),
            $interval(180),
        ]),
    ]),
});

/**
 *　小学８年生用
 */
gls2.Danmaku["miyuki"] = new bulletml.Root({
    "top": $.action([
        $.wait("40"),
        $.repeat(999, [
            $interval(30),
            $nway(3, -45, 45, $spd1, BNL, $.offsetX(-64), $.offsetY(16), $.autonomy(true)),
            $nway(3, -45, 45, $spd1, BNL, $.offsetX(  0), $.offsetY(16), $.autonomy(true)),
            $nway(3, -45, 45, $spd1, BNL, $.offsetX( 16), $.offsetY(16), $.autonomy(true)),
            $nway(3, -45, 45, $spd1, BNL, $.offsetX( 32), $.offsetY(16), $.autonomy(true)),
            $whip($spd1, 0.001, 5, function(spd) {
                return $.action([
                    $nway(3, "-45", "+45", spd, BL, $.offsetX(0), $.offsetY(0)),
                ]);
            }),
        ]),
    ]),
});

/*
 * ありす本体
*/
gls2.Danmaku["alice"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $.repeat(5, [
                $absoluteNway(10, 0,  180, $spd1, BL),
                $absoluteNway(10, 0, -180, $spd1, BL),
                $interval(30),
                $absoluteNway( 5, 0,  180, $spd1, RL),
                $absoluteNway( 5, 0, -180, $spd1, RL),
                $interval(30),
            ]),
            $interval(30),
        ]),
    ]),
    "top1": $.action([
        $.fire($.direction(0), $spd1, BNS, $.offsetX(0), $.autonomy(true)),
        $.repeat(999, [
            $.fire($.direction(10, "sequence"), $spd1, BR, $.offsetX(0), $.autonomy(true)),
            $interval(10),
        ]),
    ]),
    "top2": $.action([
        $.fire($.direction(90), $spd1, BS, $.offsetX(0), $.autonomy(true)),
        $.repeat(999, [
            $.fire($.direction(10, "sequence"), $spd1, BR, $.offsetX(0), $.autonomy(true)),
            $interval(10),
        ]),
    ]),
    "top3": $.action([
        $.fire($.direction(180), $spd1, BS, $.offsetX(0), $.autonomy(true)),
        $.repeat(999, [
            $.fire($.direction(10, "sequence"), $spd1, BR, $.offsetX(0), $.autonomy(true)),
            $interval(10),
        ]),
    ]),
    "top4": $.action([
        $.fire($.direction(-90), $spd1, BS, $.offsetX(0), $.autonomy(true)),
        $.repeat(999, [
            $.fire($.direction(10, "sequence"), $spd1, BR, $.offsetX(0), $.autonomy(true)),
            $interval(10),
        ]),
    ]),
});
/*
 * ありす端末
*/
gls2.Danmaku["aliceLeaf-1"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $.repeat(1, [
                //真ん中
                $nway(1,-10, 10, $spd4, RS, $.offsetX(  0), $.offsetY(  0)),
                //右上
                $nway(1,-10, 10, $spd4, BS, $.offsetX( 10), $.offsetY(-10)),
                $nway(1,-10, 10, $spd4, BS, $.offsetX( 10), $.offsetY(-20)),
                $nway(1,-10, 10, $spd4, BS, $.offsetX( 20), $.offsetY(-10)),
                //右下
                $nway(1,-10, 10, $spd4, BS, $.offsetX( 10), $.offsetY( 10)),
                $nway(1,-10, 10, $spd4, BS, $.offsetX( 10), $.offsetY( 20)),
                $nway(1,-10, 10, $spd4, BS, $.offsetX( 20), $.offsetY( 10)),
                //左上
                $nway(1,-10, 10, $spd4, BS, $.offsetX(-10), $.offsetY(-10)),
                $nway(1,-10, 10, $spd4, BS, $.offsetX(-10), $.offsetY(-20)),
                $nway(1,-10, 10, $spd4, BS, $.offsetX(-20), $.offsetY(-10)),
                //左下
                $nway(1,-10, 10, $spd4, BS, $.offsetX(-10), $.offsetY( 10)),
                $nway(1,-10, 10, $spd4, BS, $.offsetX(-10), $.offsetY( 20)),
                $nway(1,-10, 10, $spd4, BS, $.offsetX(-20), $.offsetY( 10)),
                $interval(20),
            ]),
            $interval(60),
        ]),
    ]),
});
gls2.Danmaku["aliceLeaf-2"] = new bulletml.Root({
    "top0": $.action([
        $.wait(30),
        $.repeat(999, [
            $.repeat(1, [
                //真ん中
                $nway(1,-10, 10, $spd4, BS, $.offsetX(  0), $.offsetY(  0)),
                //右上
                $nway(1,-10, 10, $spd4, RS, $.offsetX( 10), $.offsetY(-10)),
                $nway(1,-10, 10, $spd4, RS, $.offsetX( 10), $.offsetY(-20)),
                $nway(1,-10, 10, $spd4, RS, $.offsetX( 20), $.offsetY(-10)),
                //右下
                $nway(1,-10, 10, $spd4, RS, $.offsetX( 10), $.offsetY( 10)),
                $nway(1,-10, 10, $spd4, RS, $.offsetX( 10), $.offsetY( 20)),
                $nway(1,-10, 10, $spd4, RS, $.offsetX( 20), $.offsetY( 10)),
                //左上
                $nway(1,-10, 10, $spd4, RS, $.offsetX(-10), $.offsetY(-10)),
                $nway(1,-10, 10, $spd4, RS, $.offsetX(-10), $.offsetY(-20)),
                $nway(1,-10, 10, $spd4, RS, $.offsetX(-20), $.offsetY(-10)),
                //左下
                $nway(1,-10, 10, $spd4, RS, $.offsetX(-10), $.offsetY( 10)),
                $nway(1,-10, 10, $spd4, RS, $.offsetX(-10), $.offsetY( 20)),
                $nway(1,-10, 10, $spd4, RS, $.offsetX(-20), $.offsetY( 10)),
                $interval(20),
            ]),
            $interval(60),
        ]),
    ]),
});

/**
 * ほのか
 */
gls2.Danmaku["honoka-1"] = new bulletml.Root({
    "top0": $.action([
        $.wait(60),
        $.repeat(10, [
            $nway(4, -40, 40, $spd2, RI, $.offsetX(0), $.offsetY(30)),
            $interval(30),
            $nway(5, -40, 40, $spd1, RI, $.offsetX(0), $.offsetY(30)),
            $interval(30),
        ]),
    ]),
    "top1": $.action([
        $.wait(60),
        $.repeat(5, [
            $nway(2, -2, 2, $spd2(0.6), RNS),
            $nway(3, -3, 3, $spd2(1.0), RNS),
            $nway(4, -4, 4, $spd2(1.4), RNS),
            $nway(5, -5, 5, $spd2(1.8), RNS),
            $interval(110),
        ]),
    ]),
    "top2": $.action([
        $.repeat(20, [
            $absoluteNway(12, -10, -170, $spd1, BS, $.offsetX(-110), $.offsetY(-70)),
            $interval(30),
        ]),
    ]),
    "top3": $.action([
        $.repeat(20, [
            $absoluteNway(12, +10, +170, $spd1, BS, $.offsetX(+110), $.offsetY(-70)),
            $interval(30),
        ]),
    ]),
});

/**
 * なぎさ第1形態-1
 */
gls2.Danmaku["nagisa-1-1"] = new bulletml.Root({
    "top0": $.action([
        $interval(90),
        $.repeat(3, [
            $.bindVar("way", "5 + $loop.index*6"),
            $whip($spd3, 0.01, "3 + $loop.index*2", function(spd) {
                return $.action([
                    $nway("$way", -110, 110, spd, RNS, $.offsetX(-190), $.offsetY(-20)),
                    $nway("$way", -110, 110, spd, RNS, $.offsetX(+190), $.offsetY(-20)),
                    $.wait(10),
                ]);
            }),
            $interval(60),
        ]),
        $interval(60),
    ]),
});
/**
 * なぎさ第1形態-2
 */
gls2.Danmaku["nagisa-1-2"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(12, [
            $nway(15, -90, 90, $spd1, RNS),
            $interval(40),
        ]),
    ]),
    "top1": $.action([
        $.repeat(3, [
            $.repeat(3, [
                $nway(5, -65, -55, $spd2, BS, $.offsetX(-190), $.offsetY(-20)),
                $nway(5, -35, -25, $spd2, BS, $.offsetX(-190), $.offsetY(-20)),
                $nway(5,  -5,   5, $spd2, BS, $.offsetX(-190), $.offsetY(-20)),
                $nway(5, +25, +35, $spd2, BS, $.offsetX(-190), $.offsetY(-20)),
                $nway(5, +55, +65, $spd2, BS, $.offsetX(-190), $.offsetY(-20)),
                $.wait(2),
            ]),
            $interval(60),
            $.repeat(3, [
                $nway(5, -65, -55, $spd2, BS, $.offsetX(+190), $.offsetY(-20)),
                $nway(5, -35, -25, $spd2, BS, $.offsetX(+190), $.offsetY(-20)),
                $nway(5,  -5,   5, $spd2, BS, $.offsetX(+190), $.offsetY(-20)),
                $nway(5, +25, +35, $spd2, BS, $.offsetX(+190), $.offsetY(-20)),
                $nway(5, +55, +65, $spd2, BS, $.offsetX(+190), $.offsetY(-20)),
                $.wait(2),
            ]),
            $interval(60),
        ]),
    ]),
});
/**
 * なぎさ第1形態-3
 */
gls2.Danmaku["nagisa-1-3"] = new bulletml.Root({
    "top0": $.action([
        $interval(60),
        $.repeat(3, [
            $.fire($.direction(-60), $spd2, BNL, $.offsetX(-190), $.offsetY(-20)),
            $.repeat(20, [
                $interval(15),
                $.fire($.direction(+6, "sequence"), $spd2, BNL, $.offsetX(-190), $.offsetY(-20)),
            ]),
        ]),
    ]),
    "top1": $.action([
        $interval(80),
        $.repeat(3, [
            $.fire($.direction(+60), $spd2, BNL, $.offsetX(+190), $.offsetY(-20)),
            $.repeat(20, [
                $interval(15),
                $.fire($.direction(-6, "sequence"), $spd2, BNL, $.offsetX(+190), $.offsetY(-20)),
            ]),
        ]),
    ]),
    "top2": $.action([
        $.repeat(6, [
            $.repeat(3, [
                $nway(5, -60, -40, $spd2, RI, $.offsetX(-190), $.offsetY(-20)),
                $nway(5, -20, -10, $spd2, RI, $.offsetX(-190), $.offsetY(-20)),
                $nway(5, +10, +20, $spd2, RI, $.offsetX(-190), $.offsetY(-20)),
                $nway(5, +40, +60, $spd2, RI, $.offsetX(-190), $.offsetY(-20)),
                $.wait(4),
            ]),
            $interval(60),
            $.repeat(3, [
                $nway(5, -60, -40, $spd2, RI, $.offsetX(+190), $.offsetY(-20)),
                $nway(5, -20, -10, $spd2, RI, $.offsetX(+190), $.offsetY(-20)),
                $nway(5, +10, +20, $spd2, RI, $.offsetX(+190), $.offsetY(-20)),
                $nway(5, +40, +60, $spd2, RI, $.offsetX(+190), $.offsetY(-20)),
                $.wait(4),
            ]),
            $interval(60),
        ]),
    ]),
});
/**
 * なぎさ第2形態-1
 */
gls2.Danmaku["nagisa-2-1"] = new bulletml.Root({
    "top0": $.action([
        $interval(120),
        $.repeat(36, [
            $absoluteNway(6, "+$loop.index*10", "+$loop.index*10 + 360", $spd1, BNS, $.offsetX(-190), $.offsetY(-20)),
            $absoluteNway(6, "-$loop.index*10", "-$loop.index*10 + 360", $spd1, BNS, $.offsetX(+190), $.offsetY(-20)),
            $interval(10),
        ]),
    ]),
    "top1": $.action([
        $interval(120),
        $.repeat(30, [
            $absoluteNway(3, "+$loop.index*10", "+$loop.index * 10 + 360", $spd2, RL),
            $absoluteNway(3, "-$loop.index*14", "-$loop.index * 14 + 360", $spd2, RL),
            $interval(12),
        ]),
    ]),
});
/**
 * なぎさ第2形態-2
 */
gls2.Danmaku["nagisa-2-2"] = new bulletml.Root({
    "top0": $.action([
        $interval(120),
        $.repeat(30, [
            $absoluteNway(4, "+$loop.index*5", "+$loop.index*5 + 270", $spd3, RL),
            $interval(12),
        ]),
    ]),
    "top1": $.action([
        $interval(120),
        $.repeat(6, [
            $absoluteNway(9, 180 + -30, 180 + -50, $spd1(0.8), RNS),
            $absoluteNway(9, 180 +  -8, 180 +  +8, $spd1(0.8), RNS),
            $absoluteNway(9, 180 + +30, 180 + +50, $spd1(0.8), RNS),
            $interval(30),
            $absoluteNway(9, 180 + -10, 180 + -30, $spd1(0.8), RNS),
            $absoluteNway(9, 180 + +10, 180 + +30, $spd1(0.8), RNS),
            $interval(30),
        ]),
    ]),
});
/**
 * なぎさ第2形態-3
 */
gls2.Danmaku["nagisa-2-3"] = new bulletml.Root({
    "top": $.action([
        $interval(120),
        $.repeat(12, [
            $absoluteNway(23, 0, 360, $spd1, RI, $.offsetX(-190), $.offsetY(-20)),
            $absoluteNway(23, 0, 360, $spd1, RI),
            $absoluteNway(23, 0, 360, $spd1, RI, $.offsetX(+190), $.offsetY(-20)),
            $interval(30),
        ]),
    ]),
});
/**
 * なぎさ第3形態-1
 */
gls2.Danmaku["nagisa-3-1"] = new bulletml.Root({
    "top0": $.action([
        $interval(50),
        $.repeat(999, [
            $whip($spd3, 0.001, 5, function(spd) {
                return $.action([
                    $nway(41, "-180", "+180", spd, BL, $.offsetX(-190), $.offsetY(-20)),
                    $nway(41, "-180", "+180", spd, BL, $.offsetX(+190), $.offsetY(-20)),
                ]);
            }),
            $interval(50),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $nway(2, -2, 0, $spd4, RNS),
            $interval(10),
            $nway(2,  0, 2, $spd4, RNS),
            $interval(150),
        ]),
    ]),
});

/**
 * 舞-1
 */
gls2.Danmaku["mai-1"] = new bulletml.Root({
    "top0": $.action([
        $interval(50),
        $.repeat(50, [
            $.bindVar("from", "+Math.cos($loop.index*0.15)*40-170"),
            $absoluteNway(3, "$from", "$from+60", $spd6, IVS($.action([
                $.wait(8),
                $.fire($.direction(0, "relative"), $spd2, BNS),
                $.vanish,
            ]))),
            $.bindVar("from", "-Math.cos($loop.index*0.15)*40-10"),
            $absoluteNway(3, "$from", "$from-60", $spd6, IVS($.action([
                $.wait(8),
                $.fire($.direction(0, "relative"), $spd2, BNS),
                $.vanish,
            ]))),
            $interval(8),
        ]),
    ]),
    "top1": $.action([
        $interval(50),
        $.repeat(12, [
            $absoluteNway(5, -90+40, 90-40, $spd6, IVS($.action([
                $.wait(8),
                $.fire($.direction(0, "relative"), $spd2, RL),
                $.vanish,
            ]))),
            $absoluteNway(5, -270+40, -90-40, $spd6, IVS($.action([
                $.wait(8),
                $.fire($.direction(0, "relative"), $spd2, RL),
                $.vanish,
            ]))),
            $interval(16),
            $absoluteNway(6, -90+40, 90-40, $spd6, IVS($.action([
                $.wait(8),
                $.fire($.direction(0, "relative"), $spd2, RL),
                $.vanish,
            ]))),
            $absoluteNway(6, -270+40, -90-40, $spd6, IVS($.action([
                $.wait(8),
                $.fire($.direction(0, "relative"), $spd2, RL),
                $.vanish,
            ]))),
            $interval(16),
        ]),
    ]),
});
/**
 * 舞-2
 */
gls2.Danmaku["mai-2"] = new bulletml.Root({
    "top": $.action([
        $interval(50),
        $.repeat(15, [
            $.fire($.direction(-10), BL($.actionRef("fireChild", "$loop.index*10"))),
            $interval(8),
        ]),
    ]),
    "fireChild": $.action([
        $interval("40+$1"),
        $whip($spd2, 0.1, 5, function(spd) {
            return $.fire($.direction(-90, "absolute"), spd, BNL);
        }),
        $.vanish,
    ]),
});

/**
 * たぬたぬ第1形態-1
 */
gls2.Danmaku["saki-1-1"] = new bulletml.Root({
    "top": $.action([
        $interval(100),
        $.repeat(3, [
            $.actionRef("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1"),
        ]),
    ]),
    "oneround": $.action([
        $.bindVar("way", "$1"),
        $.repeat("10", [
            $nway("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", $spd3, BNS),
            $nway("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", $spd3, BNS),
            $interval(12),
        ]),
        $.repeat("$2", [
            $nway(9, -20, 20, $spd4, RNL),
        ]),
    ]),
});

/**
 * たぬたぬ第1形態-2
 */
gls2.Danmaku["saki-1-2"] = new bulletml.Root({
    "top": $.action([
        $interval(100),
        $.repeat(5, [
            $.bindVar("way", "5+$loop.index*2"),
            $.repeat(6, [
                $.bindVar("s", "$loop.index*0.6"),
                $.action((function() {
                    var a = [];
                    for (var i = 0; i < 5; i++) {
                        a.push($nway("$way", -30, 30, $spd3("$s"), RL, $.offsetX(-120+i*60)));
                    }
                    return a;
                })()),
            ]),
            $interval(90),
        ]),
    ]),
});
/**
 * たぬたぬ第1形態-3
 */
gls2.Danmaku["saki-1-3"] = new bulletml.Root({
    "top": $.action([
        $.bindVar("dir", "$rand < 0.5 ? -1 : 1"),
        $.repeat(24, [
            $.fire($.direction("120*$dir + $loop.index*10*-$dir"), $.speed(2), RL($.actionRef("seed"))),
            $interval(8),
        ]),
        $interval(60),
    ]),
    "seed": $.action([
        $.wait(10),
        $.changeSpeed($.speed(0), 50),
        $.wait(90),
        $nway(13, 0, 360-360/13, $spd2, RNL),
        $.vanish,
    ]),
});

/**
 * たぬたぬ第2形態-1
 */
gls2.Danmaku["saki-2-1"] = new bulletml.Root({
    "top0": $.action([
        $interval(100),
        $.repeat(4, [
            $nway(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", $spd2, BNS, $.offsetX(-40)),
            $nway(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", $spd2, BNS, $.offsetX(+40)),
            $interval(60),
            $nway(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", $spd2, BNS, $.offsetX(-40)),
            $nway(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", $spd2, BNS, $.offsetX(+40)),
            $interval(60),
        ]),
    ]),
    "top1": $.action([
        $interval(100),
        $.repeat(4, [
            $.repeat(7, [
                $.bindVar("o", "$loop.index*20 - 60"),
                $.fire($.direction("$o"), $spd5, RNL),
                $.repeat(4, [
                    $.bindVar("w", "$loop.count"),
                    $nway("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", $spd5("$w*-1.0"), RNL),
                ]),
            ]),
            $interval(120),
        ]),
    ]),
});

/**
 * たぬたぬ第2形態-2
 */
gls2.Danmaku["saki-2-2"] = new bulletml.Root({
    "top": $.action([
        $interval(60),
        $.bindVar("dir", "$rand < 0.5 ? -1 : 1"),
        $.repeat(12, [
            $.fire($.direction("120*$dir + $loop.index*10*-$dir"), $.speed(2), BL($.actionRef("seed"))),
            $interval(8),
            $.fire($.direction("120*-$dir + $loop.index*10*$dir"), $.speed(2), BL($.actionRef("seed"))),
            $interval(8),
        ]),
        $interval(60),
    ]),
    "seed": $.action([
        $.wait(10),
        $.changeSpeed($.speed(0), "10 + $rand*15"),
        $.wait(65),
        $whip($spd3, 0.14, 6, function(spd) {
            return $.action([ $.fire($.direction(-48), spd, BNL) ]);
        }),
        $whip($spd3, 0.14, 6, function(spd) {
            return $.action([ $.fire($.direction(-36), spd, BNL) ]);
        }),
        $whip($spd3, 0.14, 6, function(spd) {
            return $.action([ $.fire($.direction(-24), spd, BNL) ]);
        }),
        $whip($spd3, 0.14, 6, function(spd) {
            return $.action([ $.fire($.direction(-12), spd, BNL) ]);
        }),
        $whip($spd3, 0.14, 6, function(spd) {
            return $.action([ $.fire($.direction( +0), spd, BNL) ]);
        }),
        $whip($spd3, 0.14, 6, function(spd) {
            return $.action([ $.fire($.direction(+12), spd, BNL) ]);
        }),
        $whip($spd3, 0.14, 6, function(spd) {
            return $.action([ $.fire($.direction(+24), spd, BNL) ]);
        }),
        $whip($spd3, 0.14, 6, function(spd) {
            return $.action([ $.fire($.direction(+36), spd, BNL) ]);
        }),
        $whip($spd3, 0.14, 6, function(spd) {
            return $.action([ $.fire($.direction(+48), spd, BNL) ]);
        }),
        $interval(2),
        $.vanish,
    ]),
});

/**
 * たぬたぬ第2形態-3
 */
gls2.Danmaku["saki-2-3"] = new bulletml.Root({
    "top": $.action([
        $interval(60),
        $.bindVar("dir", "$rand < 0.5 ? -1 : 1"),
        $.repeat(24, [
            $.fire($.direction("120*$dir + $loop.index*10*-$dir"), $.speed(2), RL($.actionRef("seed"))),
            $interval(8),
            $.fire($.direction("120*-$dir + $loop.index*10*$dir"), $.speed(2), RL($.actionRef("seed"))),
            $interval(8),
        ]),
        $interval(60),
    ]),
    "seed": $.action([
        $.wait(10),
        $.changeSpeed($.speed(0), "10 + $rand*20"),
        $.wait(65),
        $whip($spd3, 0.18, 7, function(spd) {
            return $.action([ $.fire($.direction(180, "absolute"), spd, RNL) ]);
        }),
        $interval(2),
        $.vanish,
    ]),
});

/**
 * たぬたぬ発狂-1
 */
gls2.Danmaku["saki-3-1"] = new bulletml.Root({
    "top": $.action([
        $.fire($.direction(180, "absolute"), $spd0, BL($.actionRef("seed"))),
        $interval(60),
        $.fire($.direction(180, "absolute"), $spd0, BL($.actionRef("seed")), $.offsetX(-80)),
        $.fire($.direction(180, "absolute"), $spd0, BL($.actionRef("seed")), $.offsetX(+80)),
        $interval(60),
    ]),
    "seed": $.action([
        $.fire($.direction(0, "absolute"), $spd3, $spd2, BNS),
        $.repeat(999, [
            $.fire($.direction( 90, "sequence"), $spd2, BNS),
            $.fire($.direction( 90, "sequence"), $spd2, BNS),
            $.fire($.direction( 90, "sequence"), $spd2, BNS),
            $interval(10),
            $.fire($.direction(100, "sequence"), $spd2, BNS),
        ]),
    ]),
});

/**
 * たぬたぬ発狂-2
 */
gls2.Danmaku["saki-3-2"] = new bulletml.Root({
    "top": $.action([
        $.fire($.direction(180, "absolute"), $spd0, RL($.actionRef("seed"))),
        $interval(60),
        $.fire($.direction(180, "absolute"), $spd0, RL($.actionRef("seed")), $.offsetX(-80)),
        $.fire($.direction(180, "absolute"), $spd0, RL($.actionRef("seed")), $.offsetX(+80)),
        $interval(60),
    ]),
    "seed": $.action([
        $.fire($.direction(0, "absolute"), $spd3, $spd2, RNS),
        $.repeat(999, [
            $.fire($.direction( 90, "sequence"), $spd2, RNS),
            $.fire($.direction( 90, "sequence"), $spd2, RNS),
            $.fire($.direction( 90, "sequence"), $spd2, RNS),
            $interval(10),
               $.fire($.direction( 80, "sequence"), $spd2, RNS),
        ]),
    ]),
});

/**
 * 六花-1
 */
gls2.Danmaku["rikka-1"] = new bulletml.Root({
    "top": $.action([
        $.repeat(5, [
            $.bindVar("s", "$loop.index*1.5"),
            $interval(30),
            $nway(41, (-180+180/41/2)+0, (180-180/41/2)+0, BNL, $spd3("$s"), $.offsetX(-90), $.offsetY(-20)),
            $nway(41, (-180+180/41/2)+0, (180-180/41/2)+0, BNL, $spd3("$s"), $.offsetX(+90), $.offsetY(-20)),
            $interval(3),
            $nway(41, (-180+180/41/2)-1, (180-180/41/2)-1, BNL, $spd3("$s"), $.offsetX(-90), $.offsetY(-20)),
            $nway(41, (-180+180/41/2)+1, (180-180/41/2)+1, BNL, $spd3("$s"), $.offsetX(-90), $.offsetY(-20)),
            $nway(41, (-180+180/41/2)-1, (180-180/41/2)-1, BNL, $spd3("$s"), $.offsetX(+90), $.offsetY(-20)),
            $nway(41, (-180+180/41/2)+1, (180-180/41/2)+1, BNL, $spd3("$s"), $.offsetX(+90), $.offsetY(-20)),
            $interval(3),
            $nway(41, (-180+180/41/2)+0, (180-180/41/2)+0, BNL, $spd3("$s"), $.offsetX(-90), $.offsetY(-20)),
            $nway(41, (-180+180/41/2)+0, (180-180/41/2)+0, BNL, $spd3("$s"), $.offsetX(+90), $.offsetY(-20)),
        ]),
    ]),
});

/**
 * 六花-2
 */
gls2.Danmaku["rikka-2"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(10, [
            $.fire(BL($.actionRef("snow")), $.offsetX(-90), $.offsetY(-20)),
            $.fire(BL($.actionRef("snow")), $.offsetX(+90), $.offsetY(-20)),
            $interval(8),
        ]),
        $interval(10),
    ]),
    "top1": $.action([
        $.repeat(35, [
            $.bindVar("d", "$loop.index*-(20+$ex*10)"),
            $.bindVar("s", "($loop.index+1)*0.2"),
            $.repeat(6 - 1, [
                $.fire($.direction(360/6, "sequence"), $.speed(1), IVS($.actionRef("ivs", "$d", "$s"))),
            ]),
            $interval(5),
            $.fire($.direction("360/6 + (30+$ex*10)", "sequence"), $.speed(1), IVS($.actionRef("ivs", "$d", "$s"))),
        ]),
        $.repeat(35, [
            $.bindVar("d", "$loop.index*+(20+$ex*10)"),
            $.bindVar("s", "($loop.index+1)*0.2"),
            $.repeat(6 - 1, [
                $.fire($.direction(360/6, "sequence"), $.speed(1), IVS($.actionRef("ivs", "$d", "$s"))),
            ]),
            $interval(5),
            $.fire($.direction("360/6 - (30+$ex*10)", "sequence"), $.speed(1), IVS($.actionRef("ivs", "$d", "$s"))),
        ]),
    ]),
    "snow": $.action([
        $.repeat("3+$ex*3", [
            $.bindVar("s", "$loop.index+1"),
            $.fire($.direction(0, "absolute"), $.speed("$s"), IVS($.actionRef("snowArm"))),
            $.repeat(5, [
                $.fire($.direction(60, "sequence"), $.speed("$s"), IVS($.actionRef("snowArm"))),
            ]),
        ]),
        $.vanish
    ]),
    "snowArm": $.action([
        $.wait(2),
        $.fire($.direction(0), $spd4, BS),
        $.vanish
    ]),
    "ivs": $.action([
        $.wait(10),
        $.fire($.direction("$1-1", "relative"), $spd3("$2"), BNSH),
        $.fire($.direction("$1+1", "relative"), $spd3("$2"), BNSH),
        $.vanish(),
    ]),
});

/**
 * 六花-3
 */
gls2.Danmaku["rikka-3"] = new bulletml.Root({
    "top0": $.action([
        $interval(40),
        $.fire($.direction(-10), IVS($.actionRef("dummy")), $.offsetX(-90), $.offsetY(-20)),
        $.repeat(12, [
            $.fire($.direction(10, "sequence"), $spd0("$loop.index*0.5"), BNL, $.offsetX(-90), $.offsetY(-20)),
            $.repeat(5, [
                $.fire($.direction(60, "sequence"), $.speed(0, "sequence"), BNL, $.offsetX(-90), $.offsetY(-20)),
            ]),
            $interval(5),
        ]),
        $interval(40),
    ]),
    "top1": $.action([
        $interval(40),
        $.fire($.direction(-10), IVS($.actionRef("dummy")), $.offsetX(+90), $.offsetY(-20)),
        $.repeat(12, [
            $.fire($.direction(10, "sequence"), $spd0("$loop.index*0.5"), BNL, $.offsetX(+90), $.offsetY(-20)),
            $.repeat(5, [
                $.fire($.direction(60, "sequence"), $.speed(0, "sequence"), BNL, $.offsetX(+90), $.offsetY(-20)),
            ]),
            $interval(5),
        ]),
        $interval(40),
    ]),
    "dummy": $.action([
        $.wait(1),
        $.vanish,
    ]),
});

/**
 * マナ第１形態-1
 */
gls2.Danmaku["mana-1-1"] = new bulletml.Root({
    "top0": $.action([
        $.actionRef("winder", -1),
    ]),
    "top1": $.action([
        $.actionRef("winder", 1),
    ]),
    "winder": $.action([
        $.wait(60),
        $.repeat(8, [
            $.fire($.direction("(-190+$loop.index*30)*$1"), $spd3, RNSH, $.offsetX("-145*$1"), $.offsetY(-5)),
        ]),
        $.repeat(50, [
            $interval(20),
            $.bindVar("a", "$loop.index*3"),
            $.repeat(8, [
                $.fire($.direction("(-190+$a+$loop.index*30)*$1"), $spd3, RNSH, $.offsetX("-145*$1"), $.offsetY(-5)),
            ]),
        ]),
    ]),
    "top2": $.action([
        $.wait(60),
        $interval(300),
        $.repeat(7, [
            $.bindVar("s", "$loop.index"),
            $.repeat(5, [
                $.bindVar("ss", "($s-$loop.index)*0.5"),
                $nway(41, -180+360/41/2, 180-360/41/2, $spd4("$ss"), RNL, $.offsetX(-30), $.offsetY(-30)),
            ]),
            $interval(5),
            $.repeat(5, [
                $.bindVar("ss", "($s-$loop.index)*0.5"),
                $nway(41, -180+360/41/2, 180-360/41/2, $spd4("$ss"), RNL, $.offsetX(+30), $.offsetY(-30)),
            ]),
            $interval(20),
            $.repeat(5, [
                $.bindVar("ss", "($s-$loop.index)*0.5"),
                $absoluteNway(42, -180+360/42/2, 180-360/42/2, $spd5("$ss"), BNL, $.offsetX(+30), $.offsetY(-30)),
            ]),
            $interval(5),
            $.repeat(5, [
                $.bindVar("ss", "($s-$loop.index)*0.5"),
                $absoluteNway(42, -180+360/42/2, 180-360/42/2, $spd5("$ss"), BNL, $.offsetX(-30), $.offsetY(-30)),
            ]),
            $interval(80),
        ]),
    ]),
});
/**
 * マナ第１形態-2
 */
gls2.Danmaku["mana-1-2"] = new bulletml.Root({
    "top": $.action([
        $.repeat(5, [
            $.bindVar("i", "$loop.index"),
            $.bindVar("j", "1/($i+1) * 4"),
            $.bindVar("k", "6+$i*3"),
            $whip($spd3("$k"), 0.02, "4+$loop.index*3", function(spd) {
                return $.action([
                    $.fire($.direction("(12-$i)*(-3*$j)"), spd, BNL, $.offsetX(-145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(-2*$j)"), spd, BNL, $.offsetX(-145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(-1*$j)"), spd, RNL, $.offsetX(-145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*( 0*$j)"), spd, BNL, $.offsetX(-145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(+1*$j)"), spd, RNL, $.offsetX(-145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(+2*$j)"), spd, BNL, $.offsetX(-145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(+3*$j)"), spd, BNL, $.offsetX(-145), $.offsetY(-50)),

                    $.fire($.direction("(12-$i)*(-3*$j)"), spd, BNL, $.offsetX(+145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(-2*$j)"), spd, BNL, $.offsetX(+145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(-1*$j)"), spd, RNL, $.offsetX(+145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*( 0*$j)"), spd, BNL, $.offsetX(+145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(+1*$j)"), spd, RNL, $.offsetX(+145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(+2*$j)"), spd, BNL, $.offsetX(+145), $.offsetY(-50)),
                    $.fire($.direction("(12-$i)*(+3*$j)"), spd, BNL, $.offsetX(+145), $.offsetY(-50)),

                    $interval(5),
                ]);
            }),
            $interval(30),
        ]),
    ]),
});
/**
 * マナ第１形態-3
 */
gls2.Danmaku["mana-1-3"] = new bulletml.Root({
    "top0": $.action([
        $interval(20),
        $.actionRef("fire", -145),
    ]),
    "top1": $.action([
        $interval(40),
        $.actionRef("fire", +145),
    ]),
    "top2": $.action([
        $.repeat(8, [
            $interval(30),
            $.bindVar("d", "-3*($rand*2-1)"),
            $.bindVar("s", "$loop.index*2"),
            $.fire($.direction("$d"), IVS($.actionRef("dmy"))),
            $.fire($.direction(0, "sequence"), $spd5("$s"), RNSH),
            $.repeat(5, [
                $.wait(5),
                $.bindVar("way", "$loop.index+2"),
                $.fire($.direction("-$way*0.8*0.5", "sequence"), $spd5("$s"), RNSH),
                $.repeat("$way", [
                    $.fire($.direction(+0.8, "sequence"), $spd5("$s"), RNSH),
                ]),
                $.fire($.direction("-$way*0.8*0.5", "sequence"), IVS($.actionRef("dmy"))),
            ]),
        ]),
    ]),
    "fire": $.action([
        $.repeat(8, [
            $nway(72, -180+180/72, +180-180/72, $spd2, BNL, $.offsetX("$1"), $.offsetY(-50)),
            $interval(50),
        ]),
    ]),
    "dmy": $.action([
        $.wait(1),
        $.vanish(),
    ]),
});
/**
 * マナ第２形態-1
 */
gls2.Danmaku["mana-2-1"] = gls2.Danmaku["mana-1-1"];
/**
 * マナ第２形態-2
 */
gls2.Danmaku["mana-2-2"] = gls2.Danmaku["mana-1-1"];
/**
 * マナ第２形態-3
 */
gls2.Danmaku["mana-2-3"] = gls2.Danmaku["mana-1-1"];
/**
 * マナ発狂-1
 */
gls2.Danmaku["mana-3-1"] = gls2.Danmaku["mana-1-1"];
/**
 * マナ発狂-2
 */
gls2.Danmaku["mana-3-2"] = gls2.Danmaku["mana-1-1"];

/**
 * 奏
 */
gls2.Danmaku["kanade"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $.repeat(17 - 1, [
                $.fire($.direction(360/17, "sequence"), $.speed(2), IVS($.actionRef("ivs0", -110)), $.offsetY(-350)),
            ]),
            $interval(20),
            $.fire($.direction(360/17 - 3, "sequence"), $.speed(2), IVS($.actionRef("ivs0", -110)), $.offsetY(-350)),
        ]),
    ]),
    "top1": $.action([
        $.repeat(999, [
            $.repeat(17 - 1, [
                $.fire($.direction(360/17, "sequence"), $.speed(2), IVS($.actionRef("ivs0", +110)), $.offsetY(-350)),
            ]),
            $interval(20),
            $.fire($.direction(360/17 + 6, "sequence"), $.speed(2), IVS($.actionRef("ivs0", +110)), $.offsetY(-350)),
        ]),
    ]),
    "ivs0": $.action([
        $.wait(5),
        $.fire($.direction("$1", "relative"), $spd1, RR),
        $.vanish(),
    ]),
    "top2": $.action([
        $.repeat(999, [
            $nway(5, -12  +0, +12  +0, $spd1, BNL, $.offsetY(-350)),
            $nway(5, -12 +90, +12 +90, $spd1, BNL, $.offsetY(-350)),
            $nway(5, -12+180, +12+180, $spd1, BNL, $.offsetY(-350)),
            $nway(5, -12+270, +12+270, $spd1, BNL, $.offsetY(-350)),
            $interval(57),
        ]),
    ]),
    "top3": $.action([
        $.repeat(999, [
            $nway(3, -3,  +3, $spd3, RNSH, $.offsetY(-350)),
            $interval(37),
        ]),
    ]),
});
gls2.Danmaku["rery"] = new bulletml.Root({
    "top": $.action([
        $interval("$rand*120"),
        $.repeat(999, [
            $interval(180),
            $.repeat(10, [
                $.fire($.direction(-90), $.speed(2), IVS($.actionRef("fire", +90, "$loop.index"))),
                $.fire($.direction(+90), $.speed(2), IVS($.actionRef("fire", -90, "$loop.index"))),
            ]),
        ]),
    ]),
    "fire": $.action([
        $.wait(3),
        $.fire($.direction("$1", "relative"), $spd4("$2*0.25"), RNL),
        $.vanish(),
    ]),
});
gls2.Danmaku["fary"] = new bulletml.Root({
    "top": $.action([
        $interval("$rand*120"),
        $.repeat(999, [
            $interval(120),
            $.repeat(3, [
                $nway(3, -30, 30, $spd3, RNS),
                $interval(15),
            ]),
        ]),
    ]),
});
gls2.Danmaku["sory"] = new bulletml.Root({
    "top": $.action([
        $.bindVar("d", "$rand<0.5 ? -5 : 5"),
        $.bindVar("s", "1+$rand*0.5"),
        $.repeat(999, [
            $.fire($.direction("360/8+$d*$s", "sequence"), $.speed(2), IVS($.actionRef("fire"))),
            $.repeat(4-1, [
                $.fire($.direction(360/4, "sequence"), $.speed(2), IVS($.actionRef("fire"))),
            ]),
            $interval(60),
        ]),
    ]),
    "fire": $.action([
        $.wait(2),
        $.fire($.direction(0, "relative"), $spd1, RI),
        $.vanish(),
    ]),
});
gls2.Danmaku["lary"] = new bulletml.Root({
    "top0": $.action([
        $.fire($.direction(0, "absolute"), $.speed(1), IVS($.actionRef("fire"))),
        $.repeat(999, [
            $interval(10),
            $.fire($.direction(360/4+8, "sequence"), $.speed(1), IVS($.actionRef("fire"))),
            $.fire($.direction(360/4, "sequence"), $.speed(1), IVS($.actionRef("fire"))),
            $.fire($.direction(360/4, "sequence"), $.speed(1), IVS($.actionRef("fire"))),
            $.fire($.direction(360/4, "sequence"), $.speed(1), IVS($.actionRef("fire"))),
        ]),
    ]),
    "top1": $.action([
        $.fire($.direction(47, "absolute"), $.speed(1), IVS($.actionRef("fire"))),
        $.repeat(999, [
            $interval(10),
            $.fire($.direction(360/4-14, "sequence"), $.speed(1), IVS($.actionRef("fire"))),
            $.fire($.direction(360/4, "sequence"), $.speed(1), IVS($.actionRef("fire"))),
            $.fire($.direction(360/4, "sequence"), $.speed(1), IVS($.actionRef("fire"))),
            $.fire($.direction(360/4, "sequence"), $.speed(1), IVS($.actionRef("fire"))),
        ]),
    ]),
    "fire": $.action([
        $.wait(5),
        $.fire($.direction(-1, "relative"), $spd2, BNSH),
        $.fire($.direction(+1, "relative"), $spd2, BNSH),
        $.vanish(),
    ]),
});
gls2.Danmaku["shiry"] = new bulletml.Root({
    "top0": $.action([
        $.repeat(999, [
            $.bindVar("d", "$loop.index*-6"),
            $.repeat(24 - 1, [
                $.fire($.direction(360/24, "sequence"), $.speed(1), IVS($.actionRef("ivs0", "$d"))),
            ]),
            $interval(30),
            $.fire($.direction(360/24 + 1, "sequence"), $.speed(1), IVS($.actionRef("ivs0", "$d"))),
        ]),
    ]),
    "ivs0": $.action([
        $.wait(5),
        $.fire($.direction("$1", "relative"), $spd2, RL),
        $.vanish(),
    ]),
});
gls2.Danmaku["dodory"] = new bulletml.Root({
    "top": $.action([
        $interval("$rand*40"),
        $.repeat(999, [
            $interval(30),
            $whip($spd4, -0.1, 3, function(spd) {
                return $.action([
                    $.fire(spd, BNS),
                ]);
            }),
        ]),
    ]),
});


/**
 * せつな-1
 */
gls2.Danmaku["setsuna-1"] = new bulletml.Root({
    "top0": $.action([
        $.wait(60),
        $.repeat(5, [
            $nway(5, -2, 2, $spd2(1.8), BNS, $.offsetX(0),  $.offsetX(0)),
            $nway(4, -3, 3, $spd2(1.4), BNS, $.offsetX(0),  $.offsetX(0)),
            $nway(3, -4, 4, $spd2(1.0), BNS, $.offsetX(0),  $.offsetX(0)),
            $nway(2, -5, 5, $spd2(0.6), BNS, $.offsetX(0),  $.offsetX(0)),
            $interval(110),
        ]),
    ]),
    "top1": $.action([
        $.wait(60),
        $.repeat(10, [
            $nway(4, -40, 40, $spd2, RL, $.offsetX(0), $.offsetY(30)),
            $interval(30),
            $nway(5, -40, 40, $spd1, RL, $.offsetX(0), $.offsetY(30)),
            $interval(30),
        ]),
    ]),
});


/**
 * 桃園羅武第１形態-1
 */
gls2.Danmaku["love-1-1"] = new bulletml.Root({
    "top0": $.action([
        $interval(30),
        $.fire($.direction(-10), IVS, $.offsetX(0), $.offsetY(0)),
        $.repeat(60, [
            $.fire($.direction(+20, "sequence"), $spd2("$loop.index*0.3"), BNL, $.offsetX(-105), $.offsetY(0)),
            $interval(2),
        ]),
        $interval(60),
        $.fire($.direction(-10), IVS, $.offsetX(0), $.offsetY(0)),
        $.repeat(60, [
            $.fire($.direction(-20, "sequence"), $spd2("$loop.index*0.3"), BNL, $.offsetX(-105), $.offsetY(0)),
            $interval(2),
        ]),
        $interval(120),
    ]),
    "top1": $.action([
        $.wait(30),
        $.fire($.direction(-10), IVS, $.offsetX(0), $.offsetY(0)),
        $.repeat(30, [
            $.fire($.direction(+30, "sequence"), $spd2("$loop.index*0.3"), BNL, $.offsetX(-85), $.offsetY(0)),
            $interval(4),
        ]),
        $interval(60),
        $.fire($.direction(-10), IVS, $.offsetX(0), $.offsetY(0)),
        $.repeat(30, [
            $.fire($.direction(-30, "sequence"), $spd2("$loop.index*0.3"), BNL, $.offsetX(-85), $.offsetY(0)),
            $interval(4),
        ]),
    ]),
    "top2": $.action([
        $.wait(30),
        $.fire($.direction(-10), IVS, $.offsetX(0), $.offsetY(0)),
        $.repeat(60, [
            $.fire($.direction(-20, "sequence"), $spd2("$loop.index*0.3"), BNL, $.offsetX(+105), $.offsetY(0)),
            $interval(2),
        ]),
        $interval(60),
        $.fire($.direction(-10), IVS, $.offsetX(0), $.offsetY(0)),
        $.repeat(60, [
            $.fire($.direction(+20, "sequence"), $spd2("$loop.index*0.3"), BNL, $.offsetX(+105), $.offsetY(0)),
            $interval(2),
        ]),
    ]),
    "top3": $.action([
        $.wait(30),
        $.fire($.direction(-10), IVS, $.offsetX(0), $.offsetY(0)),
        $.repeat(30, [
            $.fire($.direction(-30, "sequence"), $spd2("$loop.index*0.3"), BNL, $.offsetX(+85), $.offsetY(0)),
            $interval(4),
        ]),
        $interval(60),
        $.fire($.direction(-10), IVS, $.offsetX(0), $.offsetY(0)),
        $.repeat(30, [
            $.fire($.direction(+30, "sequence"), $spd2("$loop.index*0.3"), BNL, $.offsetX(+85), $.offsetY(0)),
            $interval(4),
        ]),
    ]),
});
/**
 * 桃園羅武第１形態-2
 */
gls2.Danmaku["love-1-2"] = new bulletml.Root({
    "top0": $.action([
        $.wait(30),
        $.repeat(2, [
            $whip($spd3, 0.02, 10, function(spd) {
                return $.action([
                    $absoluteNway(5, 200, 120, spd, RNS, $.offsetX(-85), $.offsetY(0)),
                    $absoluteNway(5, 260, 210, spd, RNS, $.offsetX(+85), $.offsetY(0)),
                    $.wait(5),
                ]);
            }),
            $interval(180),
        ]),
    ]),
    "top1": $.action([
        $.wait(60),
        $.repeat(10, [
            $nway(4, -40, 40, $spd2, RI, $.offsetX(0), $.offsetY(30)),
            $interval(30),
            $nway(5, -40, 40, $spd1, RI, $.offsetX(0), $.offsetY(30)),
            $interval(30),
        ]),
    ]),
});
/**
 * 桃園羅武第１形態-3
 */
gls2.Danmaku["love-1-3"] = new bulletml.Root({
    "top0": $.action([
        $.wait(60),
        $.repeat(10, [
            $nway(4, -40, 40, $spd2, RI, $.offsetX(0), $.offsetY(30)),
            $interval(30),
            $nway(5, -40, 40, $spd1, RI, $.offsetX(0), $.offsetY(30)),
            $interval(30),
        ]),
    ]),
    "top1": $.action([
        $.wait(120),
        $.repeat(5, [
            $.repeat(10, [
                $.bindVar("c", "$loop.index*5"),
                $nway(2, "-30+$c", "30-$c", $spd4(10), BNS, $.offsetX(0), $.offsetY(0)),
                $interval(5),
            ]),
        ]),
        $interval(120),
    ]),
});
/**
 * 桃園羅武第２形態-1
 */
gls2.Danmaku["love-2-1"] = gls2.Danmaku["love-1-1"];
/**
 * 桃園羅武第２形態-2
 */
gls2.Danmaku["love-2-2"] = gls2.Danmaku["love-1-2"];
/**
 * 桃園羅武第２形態-3
 */
gls2.Danmaku["love-2-3"] = gls2.Danmaku["love-1-3"];
/**
 * 桃園羅武発狂-1
 */
gls2.Danmaku["love-3-1"] = new bulletml.Root({
    "top0": $.action([
        $.wait(30),
        $.repeat(2, [
            $whip($spd4, 0.005, 10, function(spd) {
                return $.action([
/*
                    $absoluteNway(20, 270, 90, spd, RNS, $.offsetX(-85), $.offsetY(0)),
                    $absoluteNway(20, 270, 90, spd, RNS, $.offsetX(+85), $.offsetY(0)),
*/                    
                    $nway(20, -90, 90, spd, RNS, $.offsetX(-85), $.offsetY(0)),
                    $nway(20, -90, 90, spd, RNS, $.offsetX(+85), $.offsetY(0)),
                ]);
            }),
            $interval(300),
        ]),
    ]),
});
/**
 * 桃園羅武発狂-2
 */
gls2.Danmaku["love-3-2"] = gls2.Danmaku["love-1-2"];


/**
 * 弾幕初期設定
 */
gls2.Danmaku.setup = function() {
    for (var i = 0; i < 2000; i++) {
        bulletPool.push(gls2.Bullet());
    }

    var config = gls2.Danmaku.config = tm.bulletml.AttackPattern.defaultConfig;
    config.isInsideOfWorld = function(b) {
        return !(b instanceof gls2.Bullet) || !(b.x < -50 || SC_W+50 < b.x || b.y < -50 || SC_H+50 < b.y);
    };
    config.bulletFactory = function(spec) {
        var b = bulletPool.shift(0);
        if (b) {
            b.hp = BULLET_HP;

            activeList.push(b);
            b.setFrameIndex((spec.frame === undefined) ? 1 : spec.frame);

            b.blendMode = "source-over";
            if (spec.ball) {
                b.scaleX = 1.0;
                b.scaleY = 1.0;
                b.updateProperties = false;
            } else if (spec.needle) {
                b.scaleX = 0.4;
                b.scaleY = 1.5;
                b.updateProperties = true;
            } else if (spec.laser) {
                b.scaleX = 1.0;
                b.scaleY = 10.0;
                b.blendMode = "lighter";
                b.updateProperties = true;
            } else {
                b.scaleX = 0.8;
                b.scaleY = 1.5;
                b.updateProperties = true;
            }

            if (spec.visible === false) {
                b.visible = false;
            } else {
                b.visible = true;
            }
            b.ball = !!spec.ball;
            b.needle = !!spec.needle;
            b.laser = !!spec.laser;

            return b;
        } else {
            console.warn("弾が足りない！");
        }
    };
    config.defaultIsInsideOfWorld = function(bullet) {
        return -0 <= bullet.x && bullet.x < SC_W+0 && -0 <= bullet.y && bullet.y < SC_H+0;
    };
    config.speedRate = BULLET_SPEED;

    // ランク
    bulletml.Walker.globalScope["$rank"] = 0;
    // ハイパー？
    bulletml.Walker.globalScope["$hyperOff"] = 1.0;
};
/**
 * エフェクト付きの弾幕全消し
 */
gls2.Danmaku.erase = function(star, large, grub) {
    var bullets = [].concat(activeList);
    for (var i = 0, len = bullets.length; i < len; i++) {
        if (star) {
            var s = gls2.StarItemSky(!!large);
            s.setPosition(bullets[i].x, bullets[i].y);
            if (grub) s.grub = true;
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
    superClass: tm.display.Sprite,

    hp: 0,
    ball: false,
    needle: false,

    init: function() {
        this.superInit("tex0", 20, 20);

        this.boundingRadius = 7;

        this.addEventListener("removed", function() {
            this.clearEventListener("enterframe");
            bulletPool.push(this);
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);
        });
    },
    update: function() {
        if (this.ball) this.rotation += 15;
    },
    destroy: function() {
        var p = gls2.Bullet.destroyEffect().setScale(0.1, 0.1).setPosition(this.x, this.y);
        p.addEventListener("enterframe", function() {
            this.scaleX += 0.1;
            this.scaleY += 0.1;
        });
        p.addChildTo(this.parent);

        this.remove();
    },
});
gls2.Bullet.destroyEffect = function() {
    if (gls2.Bullet.destroyEffect.cache === null) {
        gls2.Bullet.destroyEffect.cache = gls2.Particle(10, 1, 0.92, tm.graphics.Canvas()
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
        );
    }
    return gls2.Bullet.destroyEffect.cache.clone();
};
gls2.Bullet.destroyEffect.cache = null;

var bulletPool = [];
var activeList = gls2.Bullet.activeList = [];

})();
