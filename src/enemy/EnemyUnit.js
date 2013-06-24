(function() {

/** 編隊 */
gls2.EnemyUnit = {

/** ヘリ5機。左側から */
"heri1-left": [
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1a, x:SC_W*0.1, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1b, x:SC_W*0.2, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1a, x:SC_W*0.3, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1b, x:SC_W*0.4, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1a, x:SC_W*0.5, y:-100 },
],

/** ヘリ5機。中央から */
"heri1-center": [
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1a, x:SC_W*0.3, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1b, x:SC_W*0.4, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1a, x:SC_W*0.5, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1b, x:SC_W*0.6, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1a, x:SC_W*0.7, y:-100 },
],

/** ヘリ5機。右側から */
"heri1-right": [
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1a, x:SC_W*0.5, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1b, x:SC_W*0.6, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1a, x:SC_W*0.7, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1b, x:SC_W*0.8, y:-100 },
    { hard:gls2.EnemyHard.Heri2, soft:gls2.EnemySoft.Heri1a, x:SC_W*0.9, y:-100 },
],

/** 突撃ヘリ5機。左側から */
"heri2-left": [
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.1, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.2, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.3, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.4, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.5, y:-100 },
],

/** 突撃ヘリ5機。中央から */
"heri2-center": [
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.3, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.4, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.5, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.6, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.7, y:-100 },
],

/** 突撃ヘリ5機。右側から */
"heri2-right": [
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.5, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.6, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.7, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.8, y:-100 },
    { hard:gls2.EnemyHard.Heri1, soft:gls2.EnemySoft.Heri2, x:SC_W*0.9, y:-100 },
],

/** 戦車5台。左から */
"tank-left": [
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankR, x:-64*1, y:SC_H*0.3 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankR, x:-64*2, y:SC_H*0.3 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankR, x:-64*3, y:SC_H*0.3 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankR, x:-64*4, y:SC_H*0.3 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankR, x:-64*5, y:SC_H*0.3 },
],

/** 戦車5台。左上から */
"tank-leftUpper": [
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankRD, x:-46*1-64, y:-46*1 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankRD, x:-46*2-64, y:-46*2 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankRD, x:-46*3-64, y:-46*3 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankRD, x:-46*4-64, y:-46*4 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankRD, x:-46*5-64, y:-46*5 },
],


/** 戦車5台。上から0 */
"tank-upper0": [
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.25, y:-64*1 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.25, y:-64*2 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.25, y:-64*3 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.25, y:-64*4 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.25, y:-64*5 },
],

/** 戦車5台。上から1 */
"tank-upper1": [
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.5, y:-64*1 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.5, y:-64*2 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.5, y:-64*3 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.5, y:-64*4 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.5, y:-64*5 },
],

/** 戦車5台。上から2 */
"tank-upper2": [
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.75, y:-64*1 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.75, y:-64*2 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.75, y:-64*3 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.75, y:-64*4 },
    { hard:gls2.EnemyHard.Tank1, soft:gls2.EnemySoft.TankD, x:SC_W*0.75, y:-64*5 },
],

};

})();
