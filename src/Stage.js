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

    init: function(gameScene, player) {
        var scene = this.gameScene = gameScene;
        this.player = gameScene.player;
        scene.ground.direction = Math.PI * 0.5;
        scene.ground.speed = 2;
    },

    update: function() {
        var scene = this.gameScene;

        // 敵を出現させる
        if (this.frame > 200 && this.frame%30 === 0) {
            var unit;
            var r = Math.rand(0, 5);
            if (r === 0) unit = gls2.EnemyUnit["heri2-left"];
            else if (r === 1) unit = gls2.EnemyUnit["heri2-center"];
            else if (r === 2) unit = gls2.EnemyUnit["heri2-right"];
            else if (r === 3) unit = gls2.EnemyUnit["heri1-left"];
            else if (r === 4) unit = gls2.EnemyUnit["heri1-center"];
            else if (r === 5) unit = gls2.EnemyUnit["heri1-right"];
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
