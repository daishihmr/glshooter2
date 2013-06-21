gls2.Stage = tm.createClass({
    /** ステージ中の星アイテムゲット数 */
    starItem: 0,
    /** 撃墜数 */
    killCount: 0,
    /** 出現敵数 */
    enemyCount: 0,

    player: null,
    gameScene: null,

    frame: 0,

    lastLaunchedEnemy: null,

    init: function(gameScene, player) {
        var scene = this.gameScene = gameScene;
        this.player = gameScene.player;
        scene.ground.direction = Math.PI * 0.5;
        scene.ground.speed = 1;
    },

    update: function() {
        var scene = this.gameScene;

        // 敵を出現させる
        if (this.frame % 180 === 0) {
            var unit = gls2.EnemyUnit["heri1-left"];
            for (var i = 0, end = unit.length; i < end; i++) {
                this.lastLaunchedEnemy = this.launchEnemy(unit[i]);
            }
        }

        this.frame += 1;
    },

    launchEnemy: function(data) {
        return gls2.Enemy(data.hard, data.soft)
            .setPosition(data.x, data.y)
            .addChildTo(this.gameScene)
            .setPlayer(this.player)
            .onLaunch();
    },
});

gls2.Stage.create = function(gameScene, stageNumber) {
    return gls2.Stage(gameScene);
};
