/** @const */
var SC_W = 480;
/** @const */
var SC_H = 640;

/** @namespace */
var gls2 = {
    /** @type {gls2.GlShooter2} */
    core: null,
};

/**
　* GL-Shooter2アプリケーション
 * @class
 */
gls2.GlShooter2 = tm.createClass(
/** @lends {gls2.GlShooter2.prototype} */
{
    superClass: tm.app.CanvasApp,
    /** アプリ実行中のハイスコア */
    highScore: 0,
    /** ハイスコア取得時の最終到達ステージ */
    highStage: 0,
    /** BGM音量(0～5) */
    bgmVolume: 1,
    /** SE音量(0～5) */
    seVolume: 1,
    /** 難易度(0～4) */
    difficulty: 1,

    /** エクステンドスコア */
    extendScore: [
         1000000000,
        10000000000,
    ],

    gameScene: null,

    init: function(id) {
        if (gls2.core !== null) throw new Error("class 'gls2.GlShooter2' is singleton!!");
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
                "laserR": "assets/laser_r.png",
                "laserRHead": "assets/laser_r_head.png",
                "laserRFoot": "assets/laser_r_foot.png",
                "laserG": "assets/laser_g.png",
                "laserGHead": "assets/laser_g_head.png",
                "laserGFoot": "assets/laser_g_foot.png",
                "laserB": "assets/laser_b.png",
                "laserBHead": "assets/laser_b_head.png",
                "laserBFoot": "assets/laser_b_foot.png",
                "laserH": "assets/laser_h.png",
                "laserHHead": "assets/laser_h_head.png",
                "laserHFoot": "assets/laser_h_foot.png",
                "aura": "assets/aura.png",
                "explode0": "assets/explode0.png",
                "explode1": "assets/explode1.png",
                "explode2": "assets/explode2.png",
                "explode3": "assets/explode3.png",
                "shotbullet": "assets/shotbullet.png",
                "bomb": "assets/bomb.png",

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

gls2.removeShadow = function(element) {
    element.shadowBlur = 0;
};

/** @class */
tm.app.Label = tm.createClass(
/** @lends {tm.app.Label.prototype} */
{
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

gls2.playSound = function(soundName) {
    if (gls2.core.seVolume === 0) return;

    var sound = tm.asset.AssetManager.get(soundName);
    sound.volume = gls2.core.seVolume * 0.1;
    if (sound) {
        sound = sound.clone().play();
    }
};

tm.app.AnimationSprite.prototype.clone = function() {
    return tm.app.AnimationSprite(this.ss, this.width, this.height);
};

/**
 * @param {tm.app.Object2D} a
 * @param {tm.app.Object2D} b
 */
gls2.distanceSq = function(a, b) {
    return (a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y);
};
