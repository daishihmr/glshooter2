gls2.Stage = tm.createClass({
    /** ステージ中の星アイテムゲット数 */
    starItem: 0,
    /** 撃墜数 */
    killCount: 0,
    /** 出現敵数 */
    enemyCount: 0,

    player: null,
    gameScene: null,

    init: function() {
        this.player = gls2.Player.instance;
        this.gameScene = gls2.GameScene.instance;
    },

    update: function(frame) {
        var scene = this.gameScene;

        // 敵を出現させる
        if (frame % 60 === 0) {
            gls2.Enemy("heri1", "heri1").setPosition(100, -50).addChildTo(scene);
            gls2.Enemy("heri2", "heri2").setPosition(450, -50).addChildTo(scene);
        }

        // スクロール方向を変更する
        if (frame % 200 === 0) {
            scene.ground.direction += Math.PI/4;
        }
        scene.ground.direction = Math.PI * 0.5;
        scene.ground.speed = 1;
    }
});

gls2.StageManager = tm.createClass({
    init: function() {
    },
    create: function(stageNumber) {
        return gls2.Stage();
    }
});
gls2.StageManager = gls2.StageManager();
