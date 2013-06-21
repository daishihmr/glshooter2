var SC_W = 480;
var SC_H = 520;

/** @namespace */
var gls2 = {
    /** @type {gls2.Glshooter2} */
    core: null,
};

/** GL-Shooter2アプリケーション */
gls2.GlShooter2 = tm.createClass({
    superClass: tm.app.CanvasApp,
    /** アプリ実行中のハイスコア */
    highScore: 0,
    /** ハイスコア取得時の最終到達ステージ */
    highStage: 0,
    /** BGM音量(0～5) */
    bgmVolume: 4,
    /** SE音量(0～5) */
    seVolume: 4,
    /** 難易度(0～4) */
    difficulty: 1,

    gameScene: null,

    init: function(id) {
        this.superInit(id);
        gls2.core = this;
        this.resize(SC_W, SC_H).fitWindow();
        this.fps = 60;
        this.background = "black";

        this.keyboard = tm.input.Keyboard(window);

        this.replaceScene(tm.app.LoadingScene({
            assets: {
                "tex0": "assets/tex0.png",
                "tex1": "assets/tex1.png",
                "laser": "assets/laser.png",
                "laserHead": "assets/laser_head.png",
                "r0": "assets/r0.png",
                "r1": "assets/r1.png",
                "r2": "assets/r2.png",
                "r3": "assets/r3.png",
                "r4": "assets/r4.png",
                "r5": "assets/r5.png",
                "r6": "assets/r6.png",
                "r7": "assets/r7.png",
            },
            nextScene: function() {
                this._onLoadAssets();
                return gls2.TitleScene();
            }.bind(this),
        }));
    },

    _onLoadAssets: function() {
        gls2.EnemyHard.setup();
        gls2.EnemySoft.setup();
        gls2.Danmaku.setup();

        this.gameScene = gls2.GameScene();
    },

    exitApp: function() {
        this.stop();
        tm.social.Nineleap.postRanking(this.highScore, "");
    }

});

gls2.setShadow = function(element) {
    element.shadowColor = "rgba(0,0,0,0.5)";
    element.shadowBlur = 30;
    element.shadowOffsetX = 20;
    element.shadowOffsetY = 70;
};

tm.app.Label = tm.createClass({
    superClass: tm.app.Label,
    init: function(text, size) {
        this.superInit(text, size);
        this.setAlign("center");
        this.setBaseline("middle");
        this.setFontFamily("Orbitron");

        this.fillStyle = "white";

        this.isHitPoint = this.isHitPointRect;
    },
    update: function(app) {
        this.alpha = 0.8 + Math.sin(app.frame * 0.1) * 0.2;
    },
});
