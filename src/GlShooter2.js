/** @const */
var SC_W = 480;
/** @const */
var SC_H = 640;

/** @namespace */
var gls2 = {
    /** @type {gls2.Glshooter2} */
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
    bgmVolume: 4,
    /** SE音量(0～5) */
    seVolume: 4,
    /** 難易度(0～4) */
    difficulty: 1,

    gameScene: null,

    init: function(id) {
        this.superInit(id);
        gls2.core = this;
        this.resize(SC_W, SC_H);
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

/** @class */
gls2.ConsoleWindow = tm.createClass(
/** @lends {gls2.ConsoleWindow.prototype} */
{
    superClass: tm.app.RectangleShape,
    label: null,
    buf: null,
    init: function(w) {
        this.superInit(w, 64, {
            fillStyle: "rgba(1,2,48,0.5)",
            strokeStyle: "rgba(0,0,0,0)",
        });
        this.label = tm.app.Label("_", 10)
            // .setFontFamily("'Consolas', 'Monaco', 'ＭＳ ゴシック'")
            .setAlign("left")
            .setBaseline("top")
            .setPosition(-this.width/2+4, -this.height/2+4)
            .setFillStyle("rgba(255,255,255,0.5)")
            .addChildTo(this);
        this.buf = [];
    },
    addLine: function(string) {
        if (this.buf.length > 5) {
            this.buf.splice(1, this.buf.length - 4);
        }
        this.buf.push(string);
        return this;
    },
    clearBuf: function() {
        this.buf.clear();
        return this;
    },
    clear: function() {
        this.label.text = "_";
        return this;
    },
    update: function(app) {
        var text = this.label.text;
        text = text.substring(0, text.length - 1);
        if (app.frame % 2 === 0 && this.buf.length !== 0) {
            if (this.buf[0] !== "") {
                var c = this.buf[0][0];
                this.buf[0] = this.buf[0].substring(1);
                text += c;
            } else {
                this.buf.shift();
                var lines = text.split("\n");
                if (lines.length > 3) {
                    lines.shift();
                    text = lines.join("\n");
                }
                text += "\n";
            }
        }
        this.label.text = text + ((~~(app.frame/6) % 2) ? "_" : " ");
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
