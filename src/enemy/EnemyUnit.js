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

/** 戦車5台。左から */
"tank-left": [
    { soft:$s.TankR, hard:$h.Tank1, x:-64*1, y:SC_H*0.3 },
    { soft:$s.TankR, hard:$h.Tank1, x:-64*2, y:SC_H*0.3 },
    { soft:$s.TankR, hard:$h.Tank1, x:-64*3, y:SC_H*0.3 },
    { soft:$s.TankR, hard:$h.Tank1, x:-64*4, y:SC_H*0.3 },
    { soft:$s.TankR, hard:$h.Tank1, x:-64*5, y:SC_H*0.3 },
],

/** 戦車5台。左上から */
"tank-leftUpper": [
    { soft:$s.TankRD, hard:$h.Tank1, x:-46*1-64, y:-46*1 },
    { soft:$s.TankRD, hard:$h.Tank1, x:-46*2-64, y:-46*2 },
    { soft:$s.TankRD, hard:$h.Tank1, x:-46*3-64, y:-46*3 },
    { soft:$s.TankRD, hard:$h.Tank1, x:-46*4-64, y:-46*4 },
    { soft:$s.TankRD, hard:$h.Tank1, x:-46*5-64, y:-46*5 },
],


/** 戦車5台。上から(0) */
"tank-upper0": [
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.25, y:-64*1 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.25, y:-64*2 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.25, y:-64*3 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.25, y:-64*4 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.25, y:-64*5 },
],

/** 戦車5台。上から(1) */
"tank-upper1": [
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.5, y:-64*1 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.5, y:-64*2 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.5, y:-64*3 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.5, y:-64*4 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.5, y:-64*5 },
],

/** 戦車5台。上から(2) */
"tank-upper2": [
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.75, y:-64*1 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.75, y:-64*2 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.75, y:-64*3 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.75, y:-64*4 },
    { soft:$s.TankD, hard:$h.Tank1, x:SC_W*0.75, y:-64*5 },
],

"fighter-m": [
    { soft:$s.MiddleFighter, hard:$h.FighterM, x:SC_W*0.5, y:SC_H*-0.3 },
],

};

})();
