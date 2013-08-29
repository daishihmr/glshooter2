/*
 * License
 * http://daishihmr.mit-license.org/
 */

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
    bgmVolume: 3,
    /** SE音量(0～5) */
    seVolume: 3,
    /** 難易度(0～4) */
    difficulty: 1,

    gameScene: null,

    init: function(id) {
        if (gls2.core !== null) throw new Error("class 'gls2.GlShooter2' is singleton!!");
        this.superInit(id);
        gls2.core = this;
        this.resize(SC_W, SC_H).fitWindow();
        this.fps = 60;
        this.background = "rgba(0,0,0,0)";

        this.timeoutTasks = [];

        this.keyboard = tm.input.Keyboard(window);

        this.replaceScene(tm.app.LoadingScene({
            assets: {
                // image
                "tex0": "assets/tex0.png",
                "tex1": "assets/tex1.png", // TODO あとで消す
                "tex_stage1": "assets/tex_stage1.png",
                "tex_tank1": "assets/tex_tank1.png",
                "fighter": "assets/fighters.png",
                "laserR": "assets/laser_r.png",
                "laserG": "assets/laser_g.png",
                "laserB": "assets/laser_b.png",
                "laserH": "assets/laser_h.png",
                "laserHead": "assets/laser_head.png",
                "laserFoot": "assets/laser_foot.png",
                "aura": "assets/aura.png",
                "explode0": "assets/explode0.png",
                "explode1": "assets/explode1.png",
                "explodeL": "assets/explode2.png",
                "shotbullet": "assets/shotbullet.png",
                "bomb": "assets/bomb.png",
                "bombIcon": "assets/bomb_icon.png",

                // bgm
                "bgm1": "assets2/nc54073.mp3",
                "bgm2": "assets2/nc28687.mp3",
                "bgmBoss": "assets2/nc29206.mp3",
                "bgmResult": "assets2/nc54077.mp3",

                // sound
                "sound/explode": "assets2/sen_ge_taihou03.mp3",
                "sound/explode2": "assets2/sen_ge_bom13.mp3",
                "sound/explode3": "assets2/sen_ge_bom02.mp3",
                "sound/star": "assets2/se_maoudamashii_system24.mp3",
                "sound/bomb": "assets2/sen_ge_bom17.mp3",
                "sound/warning": "assets2/meka_ge_keihou06.mp3",
                "sound/select": "assets2/se_maoudamashii_system36.mp3",
                "sound/decision": "assets2/se_maoudamashii_system03.mp3",

                // voice
                "sound/voHyperStandBy": "assets/vo_hyper_standby.mp3",
                "sound/voHyperReady": "assets/vo_hyper_ready.mp3",
                "sound/voHyperStart0": "assets/vo_hyper_start.mp3",
                "sound/voHyperStart1": "assets/vo_hyper_start2.mp3",
                "sound/voBomb": "assets/vo_bomb.mp3",
                "sound/voExtend": "assets/vo_extend.mp3",
                "sound/voGetBomb": "assets/vo_getbomb.mp3",
                "sound/voJacms": "assets/vo_jacms.mp3",
                "sound/voLetsGo": "assets/vo_letsgo.mp3",
                "sound/voSelectShip": "assets/vo_select_your_battle_ship.mp3",
                "sound/voWarning": "assets/vo_warning.mp3",

                // test
                "star": "assets/star.png",
            },
            nextScene: function() {
                this._onLoadAssets();
                return gls2.TitleScene();
            }.bind(this),
        }));
    },

    update: function() {
        var copied = [].concat(this.timeoutTasks);
        for (var i = 0; i < copied.length; i++) {
            if (copied[i].frame === this.frame) {
                copied[i].fn();
            } else {
                this.timeoutTasks.erase(copied[i]);
            }
        }
    },

    draw: function() {
        this.canvas.globalCompositeOperation = "copy";
    },

    _onLoadAssets: function() {
        gls2.FixedRandom.setup(12345);
        gls2.Danmaku.setup();
        gls2.Effect.setup();

        this.gameScene = gls2.GameScene();
    },

    exitApp: function() {
        this.stop();
        tm.social.Nineleap.postRanking(this.highScore, "");
    },

    timeoutTasks: null,
    setTimeoutF: function(fn, t) {
        timeoutTasks.push({
            frame: this.frame + t,
            fn: fn,
        });
    },

});

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
