/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

var $s = gls2.EnemySoft;
var $h = gls2.EnemyHard;

/** 編隊 */
gls2.EnemyUnit = {

/** ヘリ5機。左側から */
"heri1-left": [
    { soft:$s.Heri1a, hard:$h.Heri2, x:SC_W*0.1, y:-100 },
    { soft:$s.Heri1b, hard:$h.Heri2, x:SC_W*0.2, y:-100 },
    { soft:$s.Heri1a, hard:$h.Heri2, x:SC_W*0.3, y:-100 },
    { soft:$s.Heri1b, hard:$h.Heri2, x:SC_W*0.4, y:-100 },
    { soft:$s.Heri1a, hard:$h.Heri2, x:SC_W*0.5, y:-100 },
],

/** ヘリ5機。中央から */
"heri1-center": [
    { soft:$s.Heri1a, hard:$h.Heri2, x:SC_W*0.3, y:-100 },
    { soft:$s.Heri1b, hard:$h.Heri2, x:SC_W*0.4, y:-100 },
    { soft:$s.Heri1a, hard:$h.Heri2, x:SC_W*0.5, y:-100 },
    { soft:$s.Heri1b, hard:$h.Heri2, x:SC_W*0.6, y:-100 },
    { soft:$s.Heri1a, hard:$h.Heri2, x:SC_W*0.7, y:-100 },
],

/** ヘリ5機。右側から */
"heri1-right": [
    { soft:$s.Heri1a, hard:$h.Heri2, x:SC_W*0.5, y:-100 },
    { soft:$s.Heri1b, hard:$h.Heri2, x:SC_W*0.6, y:-100 },
    { soft:$s.Heri1a, hard:$h.Heri2, x:SC_W*0.7, y:-100 },
    { soft:$s.Heri1b, hard:$h.Heri2, x:SC_W*0.8, y:-100 },
    { soft:$s.Heri1a, hard:$h.Heri2, x:SC_W*0.9, y:-100 },
],

/** 突撃ヘリ5機。左側から */
"heri2-left": [
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.1, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.2, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.3, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.4, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.5, y:-100 },
],

/** 突撃ヘリ5機。中央から */
"heri2-center": [
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.3, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.4, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.5, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.6, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.7, y:-100 },
],

/** 突撃ヘリ5機。右側から */
"heri2-right": [
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.5, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.6, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.7, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.8, y:-100 },
    { soft:$s.Heri2, hard:$h.Heri1, x:SC_W*0.9, y:-100 },
],

/** 戦車5台。左上から */
"tankRD-left": [
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.4-50*1-64, y:-50*1 },
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.4-50*2-64, y:-50*2 },
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.4-50*3-64, y:-50*3 },
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.4-50*4-64, y:-50*4 },
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.4-50*5-64, y:-50*5 },
],

/** 戦車5台。上から */
"tankRD-center": [
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.7-50*1-64, y:-50*1 },
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.7-50*2-64, y:-50*2 },
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.7-50*3-64, y:-50*3 },
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.7-50*4-64, y:-50*4 },
    { soft:$s.TankRD, hard:$h.Tank1, x:SC_W*0.7-50*5-64, y:-50*5 },
],

/** 戦車5台。右から */
"tankL-top": [
    { soft:$s.TankL, hard:$h.Tank1, x:SC_W+70*1, y:SC_H*-0.2 },
    { soft:$s.TankL, hard:$h.Tank1, x:SC_W+70*2, y:SC_H*-0.2 },
    { soft:$s.TankL, hard:$h.Tank1, x:SC_W+70*3, y:SC_H*-0.2 },
    { soft:$s.TankL, hard:$h.Tank1, x:SC_W+70*4, y:SC_H*-0.2 },
    { soft:$s.TankL, hard:$h.Tank1, x:SC_W+70*5, y:SC_H*-0.2 },
],

"cannon-0": [
    { soft:$s.Cannon, hard:$h.Cannon, x:SC_W*0.1, y:-100 },
],
"cannon-1": [
    { soft:$s.Cannon, hard:$h.Cannon, x:SC_W*0.2, y:-100 },
],
"cannon-2": [
    { soft:$s.Cannon, hard:$h.Cannon, x:SC_W*0.3, y:-100 },
],
"cannon-3": [
    { soft:$s.Cannon, hard:$h.Cannon, x:SC_W*0.4, y:-100 },
],
"cannon-4": [
    { soft:$s.Cannon, hard:$h.Cannon, x:SC_W*0.5, y:-100 },
],
"cannon-5": [
    { soft:$s.Cannon, hard:$h.Cannon, x:SC_W*0.6, y:-100 },
],
"cannon-6": [
    { soft:$s.Cannon, hard:$h.Cannon, x:SC_W*0.7, y:-100 },
],
"cannon-7": [
    { soft:$s.Cannon, hard:$h.Cannon, x:SC_W*0.8, y:-100 },
],
"cannon-8": [
    { soft:$s.Cannon, hard:$h.Cannon, x:SC_W*0.9, y:-100 },
],

"fighter-m-0": [
    { soft:$s.MiddleFighter1, hard:$h.FighterM, x:SC_W*0.2, y:SC_H*-0.3 },
],
"fighter-m-1": [
    { soft:$s.MiddleFighter1, hard:$h.FighterM, x:SC_W*0.3, y:SC_H*-0.3 },
],
"fighter-m-2": [
    { soft:$s.MiddleFighter1, hard:$h.FighterM, x:SC_W*0.4, y:SC_H*-0.3 },
],
"fighter-m-3": [
    { soft:$s.MiddleFighter1, hard:$h.FighterM, x:SC_W*0.5, y:SC_H*-0.3 },
],
"fighter-m-4": [
    { soft:$s.MiddleFighter1, hard:$h.FighterM, x:SC_W*0.6, y:SC_H*-0.3 },
],
"fighter-m-5": [
    { soft:$s.MiddleFighter1, hard:$h.FighterM, x:SC_W*0.7, y:SC_H*-0.3 },
],
"fighter-m-6": [
    { soft:$s.MiddleFighter1, hard:$h.FighterM, x:SC_W*0.8, y:SC_H*-0.3 },
],

"komachi-0": [
    { soft:$s.LargeFighter1, hard:$h.Komachi, x:SC_W*0.4, y:SC_H*-0.3 },
],
"komachi-1": [
    { soft:$s.LargeFighter1, hard:$h.Komachi, x:SC_W*0.6, y:SC_H*-0.3 },
],

/**
 * ステージ１中ボス「ユキシロ」
 */
"yukishiro": [
    { soft:$s.Honoka, hard:$h.Honoka, x:SC_W*0.5, y:-100 },
],

};

})();
