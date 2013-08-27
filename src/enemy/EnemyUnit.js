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

/** ヘリ5機。左側から */
"heri1-left2": [
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.1, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.2, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.5, y:-100 },
],

/** ヘリ5機。中央から */
"heri1-center2": [
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.7, y:-100 },
],

/** ヘリ5機。右側から */
"heri1-right2": [
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.7, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1c, x:SC_W*0.8, y:-100 },
    { hard:$e.Heri2, soft:$s.Heri1b, x:SC_W*0.9, y:-100 },
],

/** 突撃ヘリ5機。左側から */
"heri2-left": [
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.1, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.2, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.5, y:-100 },
],

/** 突撃ヘリ5機。中央から */
"heri2-center": [
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.3, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.4, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.7, y:-100 },
],

/** 突撃ヘリ5機。右側から */
"heri2-right": [
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.5, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.6, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.7, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.8, y:-100 },
    { hard:$e.Heri1, soft:$s.Heri2, x:SC_W*0.9, y:-100 },
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

"cannon-0": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.1, y:-100 },
],
"cannon-1": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.2, y:-100 },
],
"cannon-2": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.3, y:-100 },
],
"cannon-3": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.4, y:-100 },
],
"cannon-4": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.5, y:-100 },
],
"cannon-5": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.6, y:-100 },
],
"cannon-6": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.7, y:-100 },
],
"cannon-7": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.8, y:-100 },
],
"cannon-8": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W*0.9, y:-100 },
],

"cannon-R0": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W+70, y:SC_H*0.2 },
],
"cannon-R1": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W+70, y:SC_H*0.3 },
],
"cannon-R2": [
    { hard:$e.Cannon, soft:$s.Cannon1, x:SC_W+70, y:SC_H*0.4 },
],

"cannon2-0": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W*0.1, y:-100 },
],
"cannon2-1": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W*0.2, y:-100 },
],
"cannon2-2": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W*0.3, y:-100 },
],
"cannon2-3": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W*0.4, y:-100 },
],
"cannon2-4": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W*0.5, y:-100 },
],
"cannon2-5": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W*0.6, y:-100 },
],
"cannon2-6": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W*0.7, y:-100 },
],
"cannon2-7": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W*0.8, y:-100 },
],
"cannon2-8": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W*0.9, y:-100 },
],

"cannon2-R0": [
    { hard:$e.Cannon2, soft:$s.Cannon2, x:SC_W+100, y:SC_H*0.2 },
],

"fighter-m-0": [
    { hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.2, y:SC_H*-0.3 },
],
"fighter-m-1": [
    { hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.3, y:SC_H*-0.3 },
],
"fighter-m-2": [
    { hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.4, y:SC_H*-0.3 },
],
"fighter-m-3": [
    { hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.5, y:SC_H*-0.3 },
],
"fighter-m-4": [
    { hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.6, y:SC_H*-0.3 },
],
"fighter-m-5": [
    { hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.7, y:SC_H*-0.3 },
],
"fighter-m-6": [
    { hard:$e.FighterM, soft:$s.MiddleFighter1, x:SC_W*0.8, y:SC_H*-0.3 },
],

"komachi-0": [
    { hard:$e.Komachi, soft:$s.LargeFighter1, x:SC_W*0.3, y:SC_H*-0.3 },
],
"komachi-1": [
    { hard:$e.Komachi, soft:$s.LargeFighter1, x:SC_W*0.7, y:SC_H*-0.3 },
],

"komachi2-0": [
    { hard:$e.Komachi, soft:$s.MiddleFighter2, x:SC_W*0.3, y:SC_H*-0.3 },
],
"komachi2-1": [
    { hard:$e.Komachi, soft:$s.MiddleFighter2, x:SC_W*0.7, y:SC_H*-0.3 },
],

/**
 * ステージ１中ボス「ユキシロ」
 */
"yukishiro": [
    { hard:$e.Honoka, soft:$s.Honoka, x:SC_W*0.5, y:-100 },
],

/**
 * ステージ１ボス「ミスミ」
 */
"misumi": [
    { hard:$e.Nagisa, soft:[$s.Nagisa1, $s.Nagisa2, $s.Nagisa3], x:SC_W*0.5, y:-100, boss:true },
],

};

})();
