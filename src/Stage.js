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

    init: function(gameScene, player) {
        var scene = this.gameScene = gameScene;
        this.player = gameScene.player;
        scene.ground.direction = Math.PI * 0.5;
        scene.ground.speed = 0.5;
    },

    update: function() {
        var scene = this.gameScene;

        // 敵を出現させる
        if (this.frame > 200 && this.frame%30 === 0) {
            var unit;
            var unitNames = [];
            for (var n in gls2.EnemyUnit) if (gls2.EnemyUnit.hasOwnProperty(n)) {
                unitNames.push(n);
            }
            unit = gls2.EnemyUnit[unitNames.random()];
            for (var i = 0, end = unit.length; i < end; i++) {
                this.launchEnemy(unit[i]);
            }
        }

        this.frame += 1;
    },

    launchEnemy: function(data) {
        return gls2.Enemy(this.gameScene, data.hard, data.soft)
            .setPosition(data.x, data.y)
            .addChildTo(this.gameScene)
            .onLaunch();
    },
});

gls2.Stage.create = function(gameScene, stageNumber) {
    return gls2.Stage(gameScene);
};
