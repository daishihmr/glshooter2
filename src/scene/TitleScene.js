/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

var origParticle0 = null;
var origParticle1 = null;

gls2.TitleScene = tm.createClass({
    superClass: gls2.Scene,
    result: null,
    age: 0,
    particles: [],

    gameStarted: false,
    highScoreLabel: null,

    lastMainMenu: 0,
    lastSetting: 0,

    init: function() {
        this.superInit();

        tm.app.Label("GL-Shooter 2", 50)
            .setPosition(SC_W * 0.5, SC_H * 0.25).addChildTo(this);
        tm.app.Label("version 1.0-beta", 22)
            .setPosition(SC_W * 0.9, SC_H * 0.30).setAlign("right").addChildTo(this);
        this.highScoreLabel = tm.app.Label()
            .setPosition(SC_W * 0.5, SC_H * 0.40).addChildTo(this);
        tm.app.Label("press space key").setPosition(SC_W * 0.5, SC_H * 0.9).addChildTo(this);

        this.addEventListener("enter", function() {
            this.gameStarted = false;
            var score = ("" + Math.floor(gls2.core.highScore)).padding(16, " ");
            var text = "";
            for (var i = 0; i < score.length; i += 4) {
                text += score.substring(i, i+4) + " ";
            }
            this.highScoreLabel.text = "HIGH SCORE: " + text.trim();
        });
    },

    draw: function(canvas) {
        canvas.fillStyle = "black";
        canvas.fillRect(0,0,SC_W,SC_H);
    },

    update: function(app) {
        this._generateParticle(Math.cos(this.age*0.01)        *80+SC_W*0.5, Math.sin(this.age*0.01)        *80+SC_H*0.5, 0);
        this._generateParticle(Math.cos(this.age*0.01+Math.PI)*80+SC_W*0.5, Math.sin(this.age*0.01+Math.PI)*80+SC_H*0.5, 1);

        if ((app.keyboard.getKeyDown("z") || app.keyboard.getKeyDown("c") || app.keyboard.getKeyDown("space")) && !this.gameStarted) {
            this.openMainMenu()
        }

        this.age += 1;
    },

    _generateParticle: function(cx, cy, col) {
        if (this.gameStarted) return;

        if (origParticle0 === null) origParticle0 = gls2.Particle(80, 1.0, 0.8, tm.graphics.Canvas()
            .resize(80, 80)
            .setFillStyle(
                tm.graphics.RadialGradient(40,40,0,40,40,40).addColorStopList([
                    {offset:0, color: "rgba(255,255,255,0.1)"},
                    {offset:1, color: "rgba(155,  0,  0,0.0)"},
                ]).toStyle()
            ).fillRect(0, 0, 80, 80)
            .element
        );
        if (origParticle1 === null) origParticle1 = gls2.Particle(80, 1.0, 0.8, tm.graphics.Canvas()
            .resize(80, 80)
            .setFillStyle(
                tm.graphics.RadialGradient(40,40,0,40,40,40).addColorStopList([
                    {offset:0, color: "rgba(255,255,255,0.1)"},
                    {offset:1, color: "rgba(  0,  0,155,0.0)"},
                ]).toStyle()
            ).fillRect(0, 0, 80, 80)
            .element
        );

        var p = (col === 0) ? origParticle0.clone().addChildTo(this) : origParticle1.clone().addChildTo(this);

        p.speed = 0.6;
        var a = gls2.math.randf(0, Math.PI*2);
        var r = gls2.math.rand(0, 20);
        p.setPosition(Math.cos(a) * r + cx, Math.sin(a) * r + cy);
        var self = this;
        p.update = function() {
            this.x += Math.cos(a) * this.speed;
            this.y += Math.sin(a) * this.speed;
            if (this.x < -50 || SC_W+50 < this.x || this.y < -50 || SC_H+50 < this.y) {
                this.remove();
                var idx = self.particles.indexOf(this);
                if (idx !== -1) {
                    self.particles.splice(idx, 1);
                }
            }
        };
        this.particles.push(p);
    },

    openMainMenu: function() {
        this.openDialogMenu("MAIN MENU", [ "start", "tutorial", "setting", "save score" ], this.onResultMainMenu, {
            "defaultValue": this.lastMainMenu,
            "menuDescriptions": [
                "ゲームを開始します",
                "チュートリアルを開始します",
                "設定を変更します",
                "ゲームを終了し9leapにスコアを登録します",
            ]
        });
    },
    onResultMainMenu: function(result) {
        if (result !== 4) this.lastMainMenu = result;
        switch (result) {
        case 0: // start
            this.tweener
                .clear()
                .call(function() {
                    this.gameStarted = true;
                    for (var i = 0, end = this.particles.length; i < end; i++) {
                        this.particles[i].speed = 8;
                    }
                }.bind(this))
                .wait(1000)
                .call(function() {
                    gls2.core.replaceScene(gls2.ShipSelectScene());
                }.bind(this));
            break;
        case 1: // tutorial
            break;
        case 2: // option
            this.openSetting();
            break;
        case 3: // to 9leap
            gls2.core.exitApp();
            break;
        }
    },

    openSetting: function() {
        this.openDialogMenu("SETTING", [ "bgm volume", "sound volume", "difficulty" ], this.onResultSetting, {
            "defaultValue": this.lastSetting,
            "menuDescriptions": [
                "BGMボリュームを設定します",
                "効果音ボリュームを設定します",
                "難易度を設定します",
            ],
        });
    },
    onResultSetting: function(result) {
        if (result !== 3) this.lastSetting = result;
        switch (result) {
        case 0:
            this.openBgmSetting();
            break;
        case 1:
            this.openSeSetting();
            break;
        case 2:
            this.openDifficultySetting();
            break;
        default:
            this.openMainMenu();
            break;
        }
    },

    openBgmSetting: function() {
        this.openDialogMenu("BGM VOLUME", [ "0", "1", "2", "3", "4", "5" ], this.onResultBgmSetting, {
            "defaultValue": gls2.core.bgmVolume,
            "onCursorMove": function(s) {
                if (gls2.currentBgm !== null && s !== "exit") gls2.currentBgm.volume = s*0.1;
            },
            "showExit": false,
        });

    },
    onResultBgmSetting: function(result) {
        if (result !== 6) gls2.core.bgmVolume = result;
        this.openSetting();
    },

    openSeSetting: function() {
        this.openDialogMenu("SE VOLUME", [ "0", "1", "2", "3", "4", "5" ], this.onResultSeSetting, {
            "defaultValue": gls2.core.seVolume,
            "showExit": false,
        });
    },
    onResultSeSetting: function(result) {
        if (result !== 6) {
            gls2.core.seVolume = result;
        }
        this.openSetting();
    },

    openDifficultySetting: function() {
        this.openDialogMenu("DIFFICULTY", [ "easy", "normal", "hard", "very hard", "hell" ], this.onResultDifficultySetting, {
            "defaultValue": gls2.core.difficulty,
            "menuDescriptions": [
                "初心者でも安心して挑戦可能な入門コース",
                "普通の難易度。easyでは物足りない人へ",
                "一般的な弾幕STGの難易度",
                "hardはヌルすぎるという人向け",
                "死ぬがよい",
            ],
        });
    },
    onResultDifficultySetting: function(result) {
        if (result !== 5) gls2.core.difficulty = result;
        this.openSetting();
    },

    toString: function() { return "gls2.TitleScene" },
});

})();
