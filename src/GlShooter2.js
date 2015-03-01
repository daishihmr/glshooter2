/*
 * License
 * http://daishihmr.mit-license.org/
 */

/** @const */
var SC_W = 480;
/** @const */
var SC_H = 640;

/**
 * GL-Shooter2アプリケーション
 * @class
 */
gls2.GlShooter2 = tm.createClass(
/** @lends {gls2.GlShooter2.prototype} */
{
    superClass: tm.display.CanvasApp,

    /**
     * ゲームモード
     * 0: アーケードモード
     * 1: トレーニングモード
     */
    mode: 0,
    /** トレーニングモード時の選択ステージ */
    selectedStage: 0,

    /** アプリ実行中のハイスコア */
    highScore: 0,
    /** ハイスコア取得時の最終到達ステージ */
    highScoreStage: 0,
    /** ハイスコア取得時の機体タイプ */
    highScoreType: 0,
    /** ハイスコア取得時の機体スタイル */
    highScoreStyle: 0,
    /** ハイスコア取得時のコンティニュー回数 */
    highScoreContinueCount: 0,
    /** ハイスコア取得時のスクリーンショット */
    highScoreScreenShot: null,

    /** BGM音量(0～5) */
    bgmVolume: 3,
    /** SE音量(0～5) */
    seVolume: 3,
    particleEffectLevel: 0,
    bulletBig: false,

    gameScene: null,

    init: function(id) {
        if (gls2.core !== null) throw new Error("class 'gls2.GlShooter2' is singleton!!");
        this.superInit(id);
        gls2.core = this;
        this.resize(SC_W, SC_H);
        this.fitWindow();
        this.fps = FPS;
        this.background = "rgba(0,0,0,0)";

        this.timeoutTasks = [];

        this.keyboard = tm.input.Keyboard(window);
        this.gamepadManager = tm.input.GamepadManager();
        this.gamepad = null;
        this.gamepadConfig = {}.$extend(gls2["gamepadConfigDefault"]);

        this.tasksForGoogle = [];

        var assets = {
            // image
            "tex0": "assets/tex0.png",
            "tex_bit": "assets/tex_bit.png",
            "tex1": "assets/tex1.png",
            "tex2": "assets/tex2.png",
            "tex3": "assets/tex3.png",
            "tex4": "assets/tex4.png",
            "tex5": "assets/tex5.png",
            "tex_tank1": "assets/tex_tank1.png",
            "yotsubaLeaf": "assets/tex_yotsubaLeaf.png",
            "kanade-cannon": "assets/kanade-cannon.png",
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
            "explode2": "assets/explode2.png",
            "shotbullet": "assets/shotbullet.png",
            "bomb": "assets/bomb.png",
            "bombIcon": "assets/bomb_icon.png",
            "result_bg": "assets/result_bg.png",
            "keyDown": "assets/arrow-down-icon.png",
            "keyLeft": "assets/arrow-left-icon.png",
            "keyRight": "assets/arrow-right-icon.png",
            "keyUp": "assets/arrow-up-icon.png",
            "keyC": "assets/letter-uppercase-C-icon.png",
            "keyZ": "assets/letter-uppercase-Z-icon.png",
            "keyX": "assets/letter-uppercase-X-icon.png",
            "exboss": "assets/exboss.png",

            // bgm
            "bgmShipSelect": "assets2/nc99963.mp3",
            "bgm1": "assets2/nc99049.mp3",
            "bgmBoss": "assets2/nc66543.mp3",
            "bgmResult": "assets2/nc66558.mp3",
            "bgmEnding": "assets2/nc70056.mp3",
            "bgmLoopInfo": "assets2/loop.json",

            // sound
            "sound/explode": "assets2/sen_ge_taihou03.mp3",
            "sound/explode2": "assets2/sen_ge_bom13.mp3",
            "sound/explode3": "assets2/sen_ge_bom02.mp3",
            "sound/explode4": "assets2/sen_ge_bom14.mp3",
            "sound/explode5": "assets2/sen_ge_bom17.mp3",
            "sound/explode6": "assets2/nc17909.mp3",
            "sound/star": "assets2/se_maoudamashii_system24.mp3",
            "sound/bomb": "assets2/sen_ge_bom17.mp3",
            "sound/warning": "assets2/meka_ge_keihou06.mp3",
            "sound/select": "assets2/se_maoudamashii_system36.mp3",
            "sound/decision": "assets2/se_maoudamashii_system03.mp3",
            "sound/achevement": "assets2/se_maoudamashii_system46.mp3",
            // TODO
            // "sound/hyper": "",

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
            "sound/voSelectShip": "assets/vo_select_your_machine.mp3",
            "sound/voWarning": "assets/vo_warning.mp3",
        };

        var loadingScene = tm.ui.LoadingScene({
            assets: assets,
            width: SC_W,
            height: SC_H,
            nextScene: function() {
                this._onLoadAssets();
                return gls2.TitleScene();
            }.bind(this),
        });
        loadingScene.bg.canvas.clearColor("black");
        this.replaceScene(loadingScene);

        var configJson = localStorage.getItem("tmshooter.config");
        if (configJson) {
            var config = JSON.parse(configJson);
            this.bgmVolume = config["bgmVolume"];
            this.seVolume = config["seVolume"];
            this.particleEffectLevel = config["particleEffectLevel"];
            this.bulletBig = config["bulletBig"];
        }
    },

    calcContinueCountMax: function() {
        var unlockCount = 0;
        var achievementData = window["achievementData"];
        for (var id in achievementData) if (achievementData.hasOwnProperty(id)) {
            unlockCount += ~~(achievementData[id].unlocked);
        }
        return INITIAL_CONTINUE_COUNT + ~~(unlockCount * CONTINUE_COUNT_BY_ACHEVEMENT);
    },

    update: function() {
        this.gamepadManager._update();
        if (this.gamepad === null) {
            for (var i = 0, end = 4; i < end; i++) {
                if (this.gamepadManager.isConnected(i)) {
                    this.gamepad = this.gamepadManager.get(i);
                    break;
                }
            }
        }

        var copied = [].concat(this.timeoutTasks);
        for (var i = 0; i < copied.length; i++) {
            if (copied[i].frame === this.frame) {
                copied[i].fn();
            } else {
                this.timeoutTasks.erase(copied[i]);
            }
        }

        if (this.frame % 6 === 0) {
            this._postToGoogle();
        }
    },

    draw: function() {
        this.canvas.globalCompositeOperation = "copy";
    },

    _onLoadAssets: function() {
        gls2.FixedRandom.setup(12345);

        [
            "tex1",
            "tex2",
            "tex3",
            "tex4",
            "tex5",
            "tex_tank1",
            "yotsubaLeaf",
            "kanade-cannon",
            "exboss",
        ].forEach(function(name) {

            var tex = tm.asset.AssetManager.get(name);
            var canvas = tm.graphics.Canvas();
            canvas.resize(tex.width, tex.height);
            canvas.drawTexture(tex, 0, 0);

            var bmRed = canvas.getBitmap();
            bmRed.filter({
                calc: function(pixel, index, x, y, bitmap) {
                    bitmap.setPixelIndex(index, pixel[0], 0, 0);
                }
            });
            var cvRed = tm.graphics.Canvas();
            cvRed.resize(tex.width, tex.height);
            cvRed.drawBitmap(bmRed, 0, 0);
            tm.asset.AssetManager.set(name + "Red", cvRed);

            var bmBlack = canvas.getBitmap();
            bmBlack.filter({
                calc: function(pixel, index, x, y, bitmap) {
                    bitmap.setPixelIndex(index, pixel[2], pixel[0], pixel[1]);
                }
            });
            var cvBlack = tm.graphics.Canvas();
            cvBlack.resize(tex.width, tex.height);
            cvBlack.drawBitmap(bmBlack, 0, 0);
            tm.asset.AssetManager.set(name, cvBlack);
        });

        gls2.Danmaku.setup();
        gls2.Effect.setup();

        this.gameScene = gls2.GameScene();

        // tm.asset.Loader().load({
        //     "bgm2": "assets2/nc67881.mp3",
        //     "bgm3": "assets2/nc70057.mp3",
        //     "bgm4": "assets2/nc67880.mp3",
        //     "bgm5": "assets2/nc86158.mp3",
        //     "bgmBoss": "assets2/nc66543.mp3",
        //     "bgmLastBoss": "assets2/nc67538.mp3",
        //     "bgmExBoss": "assets2/nc104507.mp3",
        //     "bgmResult": "assets2/nc66558.mp3",
        //     "bgmEnding": "assets2/nc70056.mp3",
        // });
    },

    exitApp: function() {
        this.stop();
    },

    loggedIn: false,

    postScore: function(leaderboardId, score) {
        if (this.mode !== 0) return;

        if (!gapi.client.games.scores["submit"]) {
            return;
        }

        console.log("postScore", leaderboardId, score);

        var req = gapi.client.games.scores["submit"]({
            "leaderboardId": leaderboardId,
            "score": ~~score,
            "language": "ja",
        });

        this.tasksForGoogle.push({
            req: req,
            data: null,
        });
    },

    timeoutTasks: null,
    setTimeoutF: function(fn, t) {
        timeoutTasks.push({
            frame: this.frame + t,
            fn: fn,
        });
    },

    tasksForGoogle: null,
    waitingForGoogle: false,

    putAchevement: function(achievementId) {
        if (this.mode !== 0) return;
        if (!window["achievementData"]) return;
        if (!gapi.client.games.achievements["unlock"]) return;

        var achievementData = window["achievementData"];
        var data = achievementData[achievementId];
        if (!data || data.unlocked || data.waiting) return;

        data.waiting = true;

        var req = gapi.client.games.achievements["unlock"]({
            "achievementId": achievementId,
        });
        this.tasksForGoogle.push({
            data: data,
            req: req,
        });
    },

    _postToGoogle: function() {
        var self = this;
        if (self.waitingForGoogle) return;

        var task = self.tasksForGoogle.shift();
        if (!task) return;

        self.waitingForGoogle = true;
        task.req.execute(function(res) {
            self.waitingForGoogle = false;
            if (task.data) task.data.waiting = false;
            if (res["error"]) {
                console.warn(res);
            } else if (res["unbeatenScores"]) {
                for (var i = 0, iend = res["unbeatenScores"].length; i < iend; i++) {
                    if (res["unbeatenScores"][i]["timeSpan"] === "ALL_TIME") {
                        // TODO
                        console.log("ハイスコア更新！");
                        break;
                    }
                }
            } else if (res["newlyUnlocked"]) {
                if (task.data) {
                    task.data.unlocked = true;
                    gls2.playSound("achevement");
                    self.gameScene.labelLayer.addChild(gls2.GetTrophyEffect(task.data.name));
                }
            }
        });
    },

    // input

    gamepadConfig: null,

    getKeyDirection: function() {
        var v = tm.geom.Vector2(0, 0);
        if (this.gamepad !== null) {
            v.add(this.gamepad.getStickDirection());
            if (v.lengthSquared() < 0.25 * 0.25) {
                v.set(0, 0);
            }
            v.add(this.gamepad.getKeyDirection());
        }
        v.add(this.keyboard.getKeyDirection());
        return v.normalize();
    },

    getKey: function(param) {
        var result = false;
        if (this.gamepad !== null) {
            result = this.gamepad.getKey(this.gamepadConfig[param]);
        }
        return this.keyboard.getKey(param) || result;
    },
    getKeyDown: function(param) {
        var result = false;
        if (this.gamepad !== null) {
            result = this.gamepad.getKeyDown(this.gamepadConfig[param]);
        }
        return this.keyboard.getKeyDown(param) || result;
    },
    getKeyUp: function(param) {
        var result = false;
        if (this.gamepad !== null) {
            result = this.gamepad.getKeyUp(this.gamepadConfig[param]);
        }
        return this.keyboard.getKeyUp(param) || result;
    },

});

gls2["gamepadConfigDefault"] = {
    "z": "r2",
    "x": "a",
    "c": "x",
    "up": "up",
    "down": "down",
    "left": "left",
    "right": "right",
    "space": "start",
};

tm.display.AnimationSprite.prototype.clone = function() {
    return tm.app.AnimationSprite(this.ss, this.width, this.height);
};

/**
 * @param {tm.app.Object2D} a
 * @param {tm.app.Object2D} b
 */
gls2.distanceSq = function(a, b) {
    return (a.x-b.x)*(a.x-b.x) + (a.y-b.y)*(a.y-b.y);
};

gls2["pause"] = function() {
    if (gls2.core && gls2.core.currentScene === gls2.GameScene.SINGLETON) {
        gls2.GameScene.SINGLETON.openPauseMenu(0);
    }
};
