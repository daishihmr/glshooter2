var SC_W = 480;
var SC_H = 640;

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
                // image
                "tex0": "assets/tex0.png",
                "tex1": "assets/tex1.png",
                "laser": "assets/laser.png",
                "laserHead": "assets/laser_head.png",
                "laserFoot": "assets/laser_foot.png",
                "explode0": "assets/explode0.png",
                "explode1": "assets/explode1.png",
                "explode2": "assets/explode2.png",
                "explode3": "assets/explode3.png",

                // sound
                "soundExplode": "assets/sen_ge_taihou03.mp3",
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
        gls2.Effect.setup();

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

tm.app.AnimationSprite.prototype.clone = function() {
    return tm.app.AnimationSprite(this.ss, this.width, this.height);
};
