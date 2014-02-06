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
    /** 難易度(0～4) */
    difficulty: 1,

    gameScene: null,

    init: function(id) {
        if (gls2.core !== null) throw new Error("class 'gls2.GlShooter2' is singleton!!");
        this.superInit(id);
        gls2.core = this;
        this.resize(SC_W, SC_H).fitWindow();
        this.fps = FPS;
        this.background = "rgba(0,0,0,0)";

        this.timeoutTasks = [];

        this.keyboard = tm.input.Keyboard(window);

        var assets = {
            // data
            "achevements": "assets/achevements.json",

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

            // bgm
            "bgmShipSelect": "assets2/nc44200.mp3",
            "bgm1": "assets2/nc54073.mp3",
            "bgm2": "assets2/nc28687.mp3",
            "bgm3": "assets2/nc80728.mp3",
            "bgm4": "assets2/nc67876.mp3",
            "bgm5": "assets2/nc60627.mp3",
            "bgmBoss": "assets2/nc29206.mp3",
            "bgmResult": "assets2/nc54077.mp3",
            "bgmEnding": "assets2/Blue_Moon_MIKU_Append.mp3",
            "bgmLoopInfo": "assets2/loop.json",

            // sound
            "sound/explode": "assets2/sen_ge_taihou03.mp3",
            "sound/explode2": "assets2/sen_ge_bom13.mp3",
            "sound/explode3": "assets2/sen_ge_bom02.mp3",
            "sound/star": "assets2/se_maoudamashii_system24.mp3",
            "sound/bomb": "assets2/sen_ge_bom17.mp3",
            "sound/warning": "assets2/meka_ge_keihou06.mp3",
            "sound/select": "assets2/se_maoudamashii_system36.mp3",
            "sound/decision": "assets2/se_maoudamashii_system03.mp3",
            "sound/achevement": "assets2/se_maoudamashii_system46.mp3",
            // TODO
            // "sound/extend": "",
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
            "sound/voSelectShip": "assets/vo_select_your_battle_ship.mp3",
            "sound/voWarning": "assets/vo_warning.mp3",
        };

        if (DEBUG) {
            delete assets["bgmShipSelect"];
            delete assets["bgm1"];
            delete assets["bgm2"];
            delete assets["bgm3"];
            delete assets["bgm4"];
            delete assets["bgm5"];
            delete assets["bgmBoss"];
            delete assets["bgmResult"];
            delete assets["bgmEnding"];
        }

        var loadingScene = tm.ui["LoadingScene"]({
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
    },

    calcContinueCountMax: function() {
        var achevements = window["achevements"];
        var data = tm.asset.AssetManager.get("achevements").data;
        if (!achevements) return INITIAL_CONTINUE_COUNT;
        return Math.floor(achevements.reduce(function(a, b) {
            return data[b] ? a + CONTINUE_COUNT_BY_ACHEVEMENT_GRADE[data[b]["grade"]] : a;
        }, INITIAL_CONTINUE_COUNT));
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

        [
            "tex1",
            "tex2",
            "tex3",
            "tex4",
            "tex5",
            "tex_tank1",
            "yotsubaLeaf",
            "kanade-cannon",
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
        });


        gls2.Danmaku.setup();
        gls2.Effect.setup();

        this.gameScene = gls2.GameScene();
    },

    exitApp: function() {
        this.stop();
    },

    loggedIn: false,

    /**
     * @param {?String} userName
     * @param {function()} callback
     */
    postScore: function(userName, callback) {
        var avgFps = this.gameScene.fpsAvgByStage.slice(0, this.gameScene.stageNumber)["average"]();
        console.log("avgFps = " + avgFps);
        var data = {
            "score": Math.floor(this.gameScene.score),
            "stage": this.gameScene.stageNumber + 1,
            "continueCount": this.gameScene.continueCount,
            "shipType": this.gameScene.player.type,
            "shipStyle": this.gameScene.player.style,
            "fps": this.gameScene.fpsAvgByStage.slice(0, this.gameScene.stageNumber)["average"](),
            "screenShot": this.gameScene.screenShot
        };
        if (userName) {
            data["userName"] = userName;
            this.loggedIn = false;
        } else {
            this.loggedIn = true;
        }

        tm.util.Ajax.load({
            "url": "/api/ranking/post",
            "data": data,
            "type": "POST",
            "dataType": "json",
            "success": function(result) {
                if (!result) {
                    callback("登録に失敗しました！＞＜");
                } else if (result["success"]) {
                    callback(null, true, result["scoreId"]);
                } else if (result["confirmLogin"]) {
                    if (confirm("ログインしていません。ログインしますか？")) {
                        window["onchildclose"] = function() {
                            this.postScore(null, callback);
                            window["onchildclose"] = undefined;
                        }.bind(this);
                        window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400");
                    } else if (confirm("匿名でスコア登録しますか？")) {
                        var userName = "";
                        while (userName === "") userName = window.prompt("仮のユーザー名:", this.getAnonName());
                        if (userName === null) return;
                        userName = userName.substring(0, 10);
                        this.postScore(userName + " (匿名)", callback);
                    } else {
                        callback(null, false);
                    }
                } else {
                    callback("登録に失敗しました！＞＜");
                }
            }.bind(this),
            "error": function() {
                callback("登録に失敗しました！＞＜");
            }
        });
    },

    getAnonName: function() {
        return [
            "名無しシューター",
            "大佐",
            "レイニャンにゃん",
            "アイたそ",
            "ぱふぇ☆",
            "能登真璃亜",
            "にゃんぱすー(30)",
            "相田総理"
        ]["pickup"]();
    },

    timeoutTasks: null,
    setTimeoutF: function(fn, t) {
        timeoutTasks.push({
            frame: this.frame + t,
            fn: fn,
        });
    },

    putAchevement: function(key) {
        if (!window["achevements"] || window["achevements"].indexOf(key) !== -1) {
            return;
        }

        var data = tm.asset.AssetManager.get("achevements").data;
        if (!data[key]) return;

        var achevements = window["achevements"];

        if (achevements.indexOf(key) == -1) {
            achevements.push(key);
            tm.util.Ajax.load({
                url: "/api/achevement/" + key,
                type: "POST",
                dataType: "json",
                success: function(json) {
                    console.dir(json);
                    if (data[key]) {
                        gls2.playSound("achevement");
                        this.gameScene.labelLayer.addChild(gls2.GetTrophyEffect(data[key].title));
                    }
                }.bind(this),
                error: function() {
                    console.warn("error!");
                },
            });

            if (DEBUG && data[key]) {
                gls2.playSound("achevement");
                this.currentScene.addChild(gls2.GetTrophyEffect(data[key].title));
            }
        }
    }

});

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
