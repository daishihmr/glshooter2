(function() {

/**
 * @class
 */
gls2.Stage = tm.createClass(
/** @lends {gls2.Stage.prototype} */
{
    /** ステージ中の星アイテムゲット数 */
    starItem: 0,
    /** 撃墜数 */
    killCount: 0,
    /** 出現敵数 */
    enemyCount: 0,

    player: null,
    gameScene: null,

    frame: 0,

    background: null,

    init: function(gameScene) {
        var scene = this.gameScene = gameScene;
        this.player = gameScene.player;

        this.setupBackground();

        this.frame = 0;
    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"#338" },
            { offset:1, color:"#114" }
        ]).toStyle();
    },

    update: function() {
        var unit = this.executeFrame(this.frame);
        if (unit !== null) {
            for (var i = 0; i < unit.length; i++) {
                this.launchEnemy(unit[i]);
            }
        }

        this.frame += 1;
    },

    executeFrame: function(frame) {
        // for override
        return null;
    },

    launchEnemy: function(data) {
        var enemy = gls2.Enemy.pool.shift();
        if (enemy) {
            this.enemyCount += 1;
            enemy
                .setup(this.gameScene, this, data.soft, data.hard)
                .setPosition(data.x, data.y)
                .addChildTo(this.gameScene)
                .onLaunch();
        } else {
            console.warn("敵が足りない！");
        }
    },

    onDestroyEnemy: function(enemy) {
        this.killCount += 1;
    },

});

/**
 * @static
 */
gls2.Stage.create = function(gameScene, stageNumber) {
    if (stageNumber === 0) {
        return gls2.Stage1(gameScene);
    }
};

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.Stage1 = tm.createClass(
/** @lends {gls2.Stage1.prototype} */
{
    superClass: gls2.Stage,

    seq: null,

    init: function(gameScene) {
        this.superInit(gameScene);

        this.seq = gls2.StageSequencer();

        this.seq.add(  0, function() {
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 1;
        });
        this.seq.add(200, "tankRD-center");
        this.seq.add(200, "tankRD-left");
        this.seq.add( 20, "heri1-right");
        this.seq.add( 60, "heri1-center");
        this.seq.add( 60, "heri1-left");
        this.seq.add( 60, "tankL-top");
        this.seq.add( 50, "heri1-right");
        this.seq.add( 20, "tankRD-center");
        this.seq.add( 80, "heri1-center");
        this.seq.add( 50, "heri1-left");
        this.seq.add( 50, "heri1-center");
        this.seq.add( 50, "fighter-m-1");
        this.seq.add( 50, "fighter-m-3");
        this.seq.add( 50, "fighter-m-5");
        this.seq.add( 70, "heri1-right");
        this.seq.add( 20, "heri1-center");
        this.seq.add( 20, "heri1-left");
        this.seq.add( 20, "tankL-top");
        this.seq.add( 20, "tankRD-left");
        this.seq.add( 50, "heri1-right");
        this.seq.add( 50, "heri1-center");
        this.seq.add( 50, "heri1-center");
        this.seq.add( 20, "tankRD-center");
        this.seq.add( 20, "tankRD-left");
        this.seq.add( 50, "heri1-right");
        this.seq.add( 50, "heri1-center");
        this.seq.add( 50, "heri1-left");
        this.seq.add( 20, "tankL-top");
        this.seq.add( 50, "heri1-right");
        this.seq.add(  1, function() {
            this.gameScene.ground.tweener.clear().to({speed:5}, 5000, "easeInOutQuad");
        });
        this.seq.add(100, "fighter-m-0");
        this.seq.add( 50, "fighter-m-2");
        this.seq.add( 50, "fighter-m-4");
        this.seq.add( 50, "fighter-m-6");
        this.seq.add( 50, "fighter-m-4");
        this.seq.add( 50, "fighter-m-2");
    },

    executeFrame: function(frame) {
        var data = this.seq.get(frame);
        if (data === undefined) {
            return null;
        } else if (gls2.EnemyUnit[data] !== undefined){
            return gls2.EnemyUnit[data];
        } else if (typeof(data) === "function") {
            data.call(this);
        }

        return null;
    },



});

/**
 * @class
 */
gls2.StageSequencer = tm.createClass(
/** @lengs {gls2.StageSequencer.prototype} */
{
    index: 0,
    data: null,
    init: function() {
        this.data = {};
    },

    add: function(count, value) {
        this.index += count;
        this.data[this.index] = value;
    },

    get: function(frame) {
        return this.data[frame];
    },
});

})();
