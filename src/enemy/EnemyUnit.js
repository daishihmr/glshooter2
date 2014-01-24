/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

var $e = gls2.Enemy;
var $s = gls2.EnemySoft;

/**
 * 敵の編隊データ
 *
 *
 */
gls2.EnemyUnit = {

/** ヘリ5機。左側から */
"heri1-left": [
    { hard:$e.Heri2, soft:$s.Heri1a, x:SC_W*0.1, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.2, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1a, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1a, x:SC_W*0.5, y:-100 },
],

/** ヘリ5機。中央から */
"heri1-center": [
    { hard:$e.Heri2, soft:$s.Heri1a, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1a, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1a, x:SC_W*0.7, y:-100 },
],

/** ヘリ5機。右側から */
"heri1-right": [
    { hard:$e.Heri2, soft:$s.Heri1a, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1a, x:SC_W*0.7, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.8, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1a, x:SC_W*0.9, y:-100 },
],

/** ヘリ5機。左側から。下の方まで来る */
"heri1-left2": [
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.1, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.2, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.5, y:-100 },
],

/** ヘリ5機。中央から。下の方まで来る */
"heri1-center2": [
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.7, y:-100 },
],

/** ヘリ5機。右側から。下の方まで来る */
"heri1-right2": [
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.7, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.8, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.9, y:-100 },
],

/** 突撃ヘリ5機。左側から */
"heri2-left": [
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.1, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.2, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.5, y:-100 },
],

/** 突撃ヘリ5機。中央から */
"heri2-center": [
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.7, y:-100 },
],

/** 突撃ヘリ5機。右側から */
"heri2-right": [
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.7, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.8, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri21, x:SC_W*0.9, y:-100 },
],

/** ヘリ5機4面。左側から */
"heri1-4-left": [
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.1, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.2, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.5, y:-100 },
],

/** ヘリ5機4面。中央から */
"heri1-4-center": [
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.7, y:-100 },
],

/** ヘリ5機4面。右側から */
"heri1-4-right": [
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.7, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.8, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14a, x:SC_W*0.9, y:-100 },
],

/** ヘリ5機4面。左側から */
"heri1-4-left2": [
    { hard:$e.Heri1, soft:$s.Heri14b, x:SC_W*0.1, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14c, x:SC_W*0.2, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14b, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14c, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14b, x:SC_W*0.5, y:-100 },
],

/** ヘリ5機4面。中央から */
"heri1-4-center2": [
    { hard:$e.Heri1, soft:$s.Heri14b, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14c, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14b, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14c, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14b, x:SC_W*0.7, y:-100 },
],

/** ヘリ5機4面。右側から */
"heri1-4-right2": [
    { hard:$e.Heri1, soft:$s.Heri14b, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14c, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14b, x:SC_W*0.7, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14c, x:SC_W*0.8, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri14b, x:SC_W*0.9, y:-100 },
],

/** 戦車5台。左上から */
"tankRD-left": [
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.4-50*1-64, y:-50*1 },
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.4-50*2-64, y:-50*2 },
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.4-50*3-64, y:-50*3 },
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.4-50*4-64, y:-50*4 },
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.4-50*5-64, y:-50*5 },
],

/** 戦車5台。上から */
"tankRD-center": [
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.7-50*1-64, y:-50*1 },
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.7-50*2-64, y:-50*2 },
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.7-50*3-64, y:-50*3 },
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.7-50*4-64, y:-50*4 },
    { hard:$e.Tank1, soft:$s.TankRD, x:SC_W*0.7-50*5-64, y:-50*5 },
],

/** 戦車5台。右から */
"tankL-top": [
    { hard:$e.Tank1, soft:$s.TankL, x:SC_W+70*1, y:SC_H*0.1 },
    { hard:$e.Tank1, soft:$s.TankL, x:SC_W+70*2, y:SC_H*0.1 },
    { hard:$e.Tank1, soft:$s.TankL, x:SC_W+70*3, y:SC_H*0.1 },
    { hard:$e.Tank1, soft:$s.TankL, x:SC_W+70*4, y:SC_H*0.1 },
    { hard:$e.Tank1, soft:$s.TankL, x:SC_W+70*5, y:SC_H*0.1 },
],

/** 戦車5台。上左から */
"tank5-left": [
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*1 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*2 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*3 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*4 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*5 },
],

/** 戦車5台。上中央から */
"tank5-center": [
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*1 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*2 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*3 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*4 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*5 },
],

/** 戦車15台。上下から */
"tank15-top": [
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*1 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*2 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*3 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*4 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*5 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*1 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*2 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*3 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*4 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*5 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*1 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*2 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*3 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*4 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*5 },
],

/** 戦車25台。上下から */
"tank25-top": [
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*1 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*2 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*3 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*4 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.1, y:-70*5 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*1 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*2 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*3 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*4 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.5, y:-70*5 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*1 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*2 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*3 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*4 },
    { hard:$e.Tank1, soft:$s.TankD, x:SC_W*0.9, y:-70*5 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.3, y:SC_H+70*1 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.3, y:SC_H+70*2 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.3, y:SC_H+70*3 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.3, y:SC_H+70*4 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.3, y:SC_H+70*5 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.7, y:SC_H+70*1 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.7, y:SC_H+70*2 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.7, y:SC_H+70*3 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.7, y:SC_H+70*4 },
    { hard:$e.Tank1, soft:$s.TankU, x:SC_W*0.7, y:SC_H+70*5 },
],

/** ブッキー４面右から */
"bukky-4-r": [{ hard:$e.Bukky, soft:$s.Bukky4, x:SC_W, y:-50 }],

/** ブッキー４面右から */
"bukky-4-l": [{ hard:$e.Bukky, soft:$s.Bukky4, x:0, y:-50 }],

// 固定砲台「キセ」1面用
"cannon-0": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.1, y:-100 }],
"cannon-1": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.2, y:-100 }],
"cannon-2": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.3, y:-100 }],
"cannon-3": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.4, y:-100 }],
"cannon-4": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.5, y:-100 }],
"cannon-5": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.6, y:-100 }],
"cannon-6": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.7, y:-100 }],
"cannon-7": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.8, y:-100 }],
"cannon-8": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.9, y:-100 }],

"cannon-R0": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W+70, y:SC_H*0.2 }],
"cannon-R1": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W+70, y:SC_H*0.3 }],
"cannon-R2": [{ hard:$e.Cannon, soft:$s.Cannon1, x:SC_W+70, y:SC_H*0.4 }],

// 固定砲台「キセ」2面用
"yayoi-0": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W*0.1, y:-100 }],
"yayoi-1": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W*0.2, y:-100 }],
"yayoi-2": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W*0.3, y:-100 }],
"yayoi-3": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W*0.4, y:-100 }],
"yayoi-4": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W*0.5, y:-100 }],
"yayoi-5": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W*0.6, y:-100 }],
"yayoi-6": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W*0.7, y:-100 }],
"yayoi-7": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W*0.8, y:-100 }],
"yayoi-8": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W*0.9, y:-100 }],

"yayoi-R0": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W+70, y:SC_H*0.2 }],
"yayoi-R1": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W+70, y:SC_H*0.3 }],
"yayoi-R2": [{ hard:$e.Cannon, soft:$s.Cannon1_2, x:SC_W+70, y:SC_H*0.4 }],

// 固定砲台「ハナサキ」2面用
"tsubomi-0": [{ hard:$e.Tsubomi, soft:$s.Cannon3_0, x:SC_W*0.2, y:-100 }],
"tsubomi-1": [{ hard:$e.Tsubomi, soft:$s.Cannon3_0, x:SC_W*0.5, y:-100 }],
"tsubomi-2": [{ hard:$e.Tsubomi, soft:$s.Cannon3_0, x:SC_W*0.8, y:-100 }],
"tsubomi-R0": [{ hard:$e.Tsubomi, soft:$s.Cannon3_0, x:SC_W+100, y:SC_H*0.2 }],

// 中型固定砲台「ミョウドウイン」2面用
"itsuki-0": [{ hard:$e.Itsuki, soft:$s.Cannon4_0, x:SC_W*0.2, y:-100 }],
"itsuki-1": [{ hard:$e.Itsuki, soft:$s.Cannon4_0, x:SC_W*0.5, y:-100 }],
"itsuki-2": [{ hard:$e.Itsuki, soft:$s.Cannon4_0, x:SC_W*0.8, y:-100 }],

// 大型固定砲台「ケンザキ」2面用
"makoto-0": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W*0.1, y:-100 }],
"makoto-1": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W*0.2, y:-100 }],
"makoto-2": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W*0.3, y:-100 }],
"makoto-3": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W*0.4, y:-100 }],
"makoto-4": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W*0.5, y:-100 }],
"makoto-5": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W*0.6, y:-100 }],
"makoto-6": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W*0.7, y:-100 }],
"makoto-7": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W*0.8, y:-100 }],
"makoto-8": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W*0.9, y:-100 }],
"makoto-R0": [{ hard:$e.Cannon2, soft:$s.Cannon2_0, x:SC_W+100, y:SC_H*0.2 }],

// 大型固定砲台「ミナヅキ」4面用
"karen-3-2": [{ hard:$e.Cannon3, soft:$s.Cannon2_3, x:SC_W*0.2, y:-100 }],
"karen-3-5": [{ hard:$e.Cannon3, soft:$s.Cannon2_3, x:SC_W*0.5, y:-100 }],
"karen-3-8": [{ hard:$e.Cannon3, soft:$s.Cannon2_3, x:SC_W*0.8, y:-100 }],

// 中型戦闘機「クロカワ」1面用
"fighter-m-0": [{ hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.2, y:SC_H*-0.3 }],
"fighter-m-1": [{ hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.3, y:SC_H*-0.3 }],
"fighter-m-2": [{ hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.4, y:SC_H*-0.3 }],
"fighter-m-3": [{ hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.5, y:SC_H*-0.3 }],
"fighter-m-4": [{ hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.6, y:SC_H*-0.3 }],
"fighter-m-5": [{ hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.7, y:SC_H*-0.3 }],
"fighter-m-6": [{ hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.8, y:SC_H*-0.3 }],

// 中型戦闘機「クロカワ」4面用
"fighter-m4-0": [{ hard:$e.FighterM, soft:$s.MiddleFighter4, x:SC_W*0.2, y:SC_H*-0.3 }],

// 小型戦闘機「ツキカゲ」4面用右から
"tsukikage-r": [
    { hard:$e.FighterS, soft:$s.Tsukikage4r(700), x:SC_W*1.3, y:SC_H*0.4 },
    { hard:$e.FighterS, soft:$s.Tsukikage4r(600), x:SC_W*1.5, y:SC_H*0.4 },
    { hard:$e.FighterS, soft:$s.Tsukikage4r(500), x:SC_W*1.2, y:SC_H*0.5 },
    { hard:$e.FighterS, soft:$s.Tsukikage4r(400), x:SC_W*1.4, y:SC_H*0.5 },
    { hard:$e.FighterS, soft:$s.Tsukikage4r(300), x:SC_W*1.6, y:SC_H*0.5 },
    { hard:$e.FighterS, soft:$s.Tsukikage4r(200), x:SC_W*1.3, y:SC_H*0.6 },
    { hard:$e.FighterS, soft:$s.Tsukikage4r(100), x:SC_W*1.5, y:SC_H*0.6 },
],

// 小型戦闘機「ツキカゲ」4面用左から
"tsukikage-l": [
    { hard:$e.FighterS, soft:$s.Tsukikage4l(700), x:SC_W*-0.3, y:SC_H*0.6 },
    { hard:$e.FighterS, soft:$s.Tsukikage4l(600), x:SC_W*-0.5, y:SC_H*0.6 },
    { hard:$e.FighterS, soft:$s.Tsukikage4l(500), x:SC_W*-0.2, y:SC_H*0.5 },
    { hard:$e.FighterS, soft:$s.Tsukikage4l(400), x:SC_W*-0.4, y:SC_H*0.5 },
    { hard:$e.FighterS, soft:$s.Tsukikage4l(200), x:SC_W*-0.3, y:SC_H*0.4 },
],

// 小型戦闘機「カスガノ」5面用 左下から
"urara5-0": (function() {
    var result = [];
    for (var n = 0; n < 20; n++) {
        result.push({ hard:$e.Urara, soft:$s.Urara(0, 1, n*200), x:SC_W*-0.3, y:SC_H*0.2 });
    }
    return result;
})(),
"urara5-1": (function() {
    var result = [];
    for (var n = 0; n < 20; n++) {
        result.push({ hard:$e.Urara, soft:$s.Urara(0, -1, n*200), x:SC_W*1.3, y:SC_H*0.2 });
    }
    return result;
})(),
"urara5-2": (function() {
    var result = [];
    for (var n = 0; n < 20; n++) {
        result.push({ hard:$e.Urara, soft:$s.Urara(1, 1, n*200), x:SC_W*-0.3, y:SC_H*0.8 });
    }
    return result;
})(),
"urara5-3": (function() {
    var result = [];
    for (var n = 0; n < 20; n++) {
        result.push({ hard:$e.Urara, soft:$s.Urara(1, -1, n*200), x:SC_W*1.3, y:SC_H*0.8 });
    }
    return result;
})(),
"urara5-4": (function() {
    var result = [];
    for (var n = 0; n < 20; n++) {
        result.push({ hard:$e.Urara, soft:$s.Urara(2, 1, n*200), x:SC_W*-0.3, y:SC_H*0.8 });
    }
    return result;
})(),
"urara5-5": (function() {
    var result = [];
    for (var n = 0; n < 20; n++) {
        result.push({ hard:$e.Urara, soft:$s.Urara(2, -1, n*200), x:SC_W*1.3, y:SC_H*0.8 });
    }
    return result;
})(),
"urara5-6": (function() {
    var result = [];
    for (var n = 0; n < 20; n++) {
        result.push({ hard:$e.Urara, soft:$s.Urara(3, 1, n*200), x:SC_W*-0.3, y:SC_H*0.2 });
    }
    return result;
})(),
"urara5-7": (function() {
    var result = [];
    for (var n = 0; n < 20; n++) {
        result.push({ hard:$e.Urara, soft:$s.Urara(3, -1, n*200), x:SC_W*1.3, y:SC_H*0.2 });
    }
    return result;
})(),

// 中型戦闘機「ミミノ」5面用
"milk5-0": [
    { hard:$e.Milk, soft:$s.Milk5(2000), x:SC_W*0.80, y:SC_H*-0.40 },
    { hard:$e.Milk, soft:$s.Milk5(1500), x:SC_W*0.65, y:SC_H*-0.35 },
    { hard:$e.Milk, soft:$s.Milk5(1000), x:SC_W*0.50, y:SC_H*-0.30 },
    { hard:$e.Milk, soft:$s.Milk5( 500), x:SC_W*0.35, y:SC_H*-0.25 },
    { hard:$e.Milk, soft:$s.Milk5(   0), x:SC_W*0.20, y:SC_H*-0.20 }
],
"milk5-1": [
    { hard:$e.Milk, soft:$s.Milk5(2000), x:SC_W*0.20, y:SC_H*-0.40 },
    { hard:$e.Milk, soft:$s.Milk5(1500), x:SC_W*0.35, y:SC_H*-0.35 },
    { hard:$e.Milk, soft:$s.Milk5(1000), x:SC_W*0.50, y:SC_H*-0.30 },
    { hard:$e.Milk, soft:$s.Milk5( 500), x:SC_W*0.65, y:SC_H*-0.25 },
    { hard:$e.Milk, soft:$s.Milk5(   0), x:SC_W*0.80, y:SC_H*-0.20 }
],

// 中型戦闘機「シラベ」5面用
"ako5-0": [
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.50, SC_H*0.2, SC_W*0.20, SC_H*0.4), x:SC_W*0.50, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.80, SC_H*0.4, SC_W*0.50, SC_H*0.2), x:SC_W*0.80, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.75, SC_H*0.8, SC_W*0.80, SC_H*0.4), x:SC_W*0.75, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.25, SC_H*0.8, SC_W*0.75, SC_H*0.8), x:SC_W*0.25, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.20, SC_H*0.4, SC_W*0.25, SC_H*0.8), x:SC_W*0.20, y:SC_H*-0.3 },
],
"ako5-1": [
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.50, SC_H*0.2, SC_W*0.80, SC_H*0.4), x:SC_W*0.50, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.80, SC_H*0.4, SC_W*0.75, SC_H*0.8), x:SC_W*0.80, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.75, SC_H*0.8, SC_W*0.25, SC_H*0.8), x:SC_W*0.75, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.25, SC_H*0.8, SC_W*0.20, SC_H*0.4), x:SC_W*0.25, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.20, SC_H*0.4, SC_W*0.50, SC_H*0.2), x:SC_W*0.20, y:SC_H*-0.3 },
],
"ako5-2": [
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.50, SC_H*0.2, SC_W*0.25, SC_H*0.8), x:SC_W*0.50, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.80, SC_H*0.4, SC_W*0.20, SC_H*0.4), x:SC_W*0.80, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.75, SC_H*0.8, SC_W*0.50, SC_H*0.2), x:SC_W*0.75, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.25, SC_H*0.8, SC_W*0.80, SC_H*0.4), x:SC_W*0.25, y:SC_H*-0.3 },
    { hard:$e.Ako, soft:$s.Ako5(SC_W*0.20, SC_H*0.4, SC_W*0.75, SC_H*0.8), x:SC_W*0.20, y:SC_H*-0.3 },
],

// 大型戦闘機「アキモト」1面用
"komachi-0": [{ hard:$e.Komachi, soft:$s.LargeFighter1, x:SC_W*0.3, y:SC_H*-0.3 }],
"komachi-1": [{ hard:$e.Komachi, soft:$s.LargeFighter1, x:SC_W*0.7, y:SC_H*-0.3 }],

// 大型戦闘機「アキモト」2面用
"komachi2-0": [{ hard:$e.Komachi, soft:$s.LargeFighter2, x:SC_W*0.3, y:SC_H*-0.3 }],
"komachi2-1": [{ hard:$e.Komachi, soft:$s.LargeFighter2, x:SC_W*0.7, y:SC_H*-0.3 }],

// 大型戦闘機「アキモト」3面用
"komachi3-0": [{ hard:$e.Komachi, soft:$s.LargeFighter3, x:SC_W*0.3, y:SC_H*-0.3 }],
"komachi3-1": [{ hard:$e.Komachi, soft:$s.LargeFighter3, x:SC_W*0.7, y:SC_H*-0.3 }],

// 大型戦闘機「アキモト」4面用
"komachi4-0": [{ hard:$e.Komachi, soft:$s.LargeFighter4, x:SC_W*0.3, y:SC_H*-0.3 }],
"komachi4-1": [{ hard:$e.Komachi, soft:$s.LargeFighter4, x:SC_W*0.7, y:SC_H*-0.3 }],
"komachi4-2": [{ hard:$e.Komachi, soft:$s.LargeFighter4, x:SC_W*0.5, y:SC_H*-0.3 }],

// 大型戦闘機「ユメハラ」4面用
"nozomi4-0": [{ hard:$e.Nozomi, soft:$s.Nozomi4, x:SC_W*0.3, y:SC_H*-0.3 }],
"nozomi4-1": [{ hard:$e.Nozomi, soft:$s.Nozomi4, x:SC_W*0.5, y:SC_H*-0.3 }],
"nozomi4-2": [{ hard:$e.Nozomi, soft:$s.Nozomi4, x:SC_W*0.7, y:SC_H*-0.3 }],

// 大型戦闘機「ユメハラ」5面用
"nozomi5-0": [{ hard:$e.Nozomi, soft:$s.Nozomi5, x:SC_W*0.3, y:SC_H*-0.5 }],
"nozomi5-1": [{ hard:$e.Nozomi, soft:$s.Nozomi5, x:SC_W*0.5, y:SC_H*-0.3 }],
"nozomi5-2": [{ hard:$e.Nozomi, soft:$s.Nozomi5, x:SC_W*0.7, y:SC_H*-0.5 }],

// 大型戦闘機「アオノ」5面用
"mktn5-0": [{ hard:$e.Mktn, soft:$s.Mktn(0.6), x:SC_W*1.3, y:SC_H*0.2 }],
"mktn5-1": [{ hard:$e.Mktn, soft:$s.Mktn(0.4), x:SC_W*-0.3, y:SC_H*0.5 }],

//強襲戦闘機「ヒノ」
"akane-center": [
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.3, y:130 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.4, y: 80 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.5, y:140 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.6, y: 80 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.7, y:130 },
],
"akane-right": [
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.8, y:160 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.6, y:120 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.6, y: 80 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.8, y: 40 },
],
"akane-left": [
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.2, y:160 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.3, y:120 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.3, y: 80 },
    { hard:$e.akane, soft:$s.akane, x:SC_W*0.2, y: 40 },
],

//小型戦闘機「ミドリカワ」
"nao1-left": [  //左側
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.1, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.2, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.3, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.4, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.5, y:-100 },
],
"nao1-right": [  //右側
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.5, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.6, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.7, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.8, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.9, y:-100 },
],
"nao1-center": [  //中央
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.3, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.4, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.5, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.6, y:-100 },
    { hard:$e.nao, soft:$s.nao1, x:SC_W*0.7, y:-100 },
],
"nao2-left": [  //左側
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.1, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.2, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.3, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.4, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.5, y:-100 },
],
"nao2-right": [  //右側
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.5, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.6, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.7, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.8, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.9, y:-100 },
],
"nao2-center": [  //中央
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.3, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.4, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.5, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.6, y:-100 },
    { hard:$e.nao, soft:$s.nao2, x:SC_W*0.7, y:-100 },
],
"nao3-left": [  //左側
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.1, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.2, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.3, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.4, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.5, y:-100 },
],
"nao3-right": [  //右側
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.5, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.6, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.7, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.8, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.9, y:-100 },
],
"nao3-center": [  //中央
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.3, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.4, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.5, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.6, y:-100 },
    { hard:$e.nao, soft:$s.nao3, x:SC_W*0.7, y:-100 },
],

//小型浮揚戦車「アオキ」
"reika1-left": [  //左側
    { hard:$e.reika, soft:$s.reika1, x:SC_W*0.10, y:SC_H*-0.1 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*0.15, y:SC_H*-0.2 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*0.20, y:SC_H*-0.1 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*0.25, y:SC_H*-0.2 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*0.30, y:SC_H*-0.1 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*0.35, y:SC_H*-0.2 },
],
"reika1-right": [  //右側
    { hard:$e.reika, soft:$s.reika1, x:SC_W*1.10, y:SC_H*-0.1 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*1.15, y:SC_H*-0.2 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*1.20, y:SC_H*-0.1 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*1.25, y:SC_H*-0.2 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*1.30, y:SC_H*-0.1 },
    { hard:$e.reika, soft:$s.reika1, x:SC_W*1.35, y:SC_H*-0.2 },
],

//大型戦艦「ホシゾラ」
"miyuki_y1": [{ hard:$e.miyuki_y, soft:$s.miyuki_y, x:-128    , y: 140},],
"miyuki_y2": [{ hard:$e.miyuki_y, soft:$s.miyuki_y, x:SC_W+128, y:  60},],
"miyuki_t1": [{ hard:$e.miyuki_t, soft:$s.miyuki_t, x:SC_W*0.7, y:-128},],
"miyuki_t2": [{ hard:$e.miyuki_t, soft:$s.miyuki_t, x:SC_W*0.3, y:-128},],

//浮遊砲台「ヨツバ」
"alice": [
    { hard:$e.Alice, soft:$s.Alice, x:SC_W/2, y:-64 },
],

// ボムキャリアー「クルミ」
"erika": [{ hard:$e.Erika, soft:$s.Erika, x: SC_W*0.5, y:-100 }],

/**
 * ステージ１中ボス「ユキシロ」
 */
"yukishiro": [{ hard:$e.Honoka, soft:$s.Honoka, x:SC_W*0.5, y:-100 }],

/**
 * ステージ１ボス「ミスミ」
 */
"misumi": [{ hard:$e.Nagisa, soft:[$s.Nagisa1, $s.Nagisa2, $s.Nagisa3], x:SC_W*0.5, y:-100, boss:true }],

/**
 * ステージ２中ボス「ミショウ」
 */
"mai": [{ hard:$e.Mai, soft:$s.Mai, x:SC_W+300, y:SC_H*0.2 }],

/**
 * ステージ２ボス「ヒュウガ」
 */
"hyuga": [{ hard:$e.Saki, soft:[$s.Saki1, $s.Saki2, $s.Saki3], x:SC_W*0.5, y:-100, boss:true }],

/**
 * ステージ３中ボス「ヒガシ」
 */
"higashi": [{ hard:$e.Setsuna, soft:$s.Setsuna, x:SC_W+300, y:SC_H*0.2}],

/**
 * ステージ３ボス「モモゾノ」
 */
"momozono": [{ hard:$e.Love, soft:[$s.Love1, $s.Love2, $s.Love3], x:SC_W*0.5, y:-100, boss:true }],

/**
 * ステージ４中ボス「ヒシカワ」
 */
"rikka": [{ hard:$e.Rikka, soft:$s.Rikka, x:SC_W*0.5, y:-100 }],

/**
 * ステージ４ボス「アイダ」
 */
"mana": [{ hard:$e.Mana, soft:[$s.Mana1, $s.Mana2, $s.Mana3], x:SC_W*0.5, y:-100, boss:true }],

};

})();
