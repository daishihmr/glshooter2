/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

var origParticle0 = null;
var origParticle1 = null;
var origParticle2 = null;

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

        tm.display.Label("TM-Shooter", 50)
            // .setBlendMode("lighter")
            .setPosition(SC_W * 0.5, SC_H * 0.25)
            .addChildTo(this);
        tm.display.Label("cure black label", 40)
            // .setBlendMode("lighter")
            .setPosition(SC_W * 0.5, SC_H * 0.33)
            .addChildTo(this);
        tm.display.Label("version " + VERSION, 22)
            // .setBlendMode("lighter")
            .setPosition(SC_W * 0.9, SC_H * 0.40)
            .setAlign("right")
            .addChildTo(this);

        tm.display.Label("1st ", 22)
            // .setBlendMode("lighter")
            .setPosition(SC_W * 0.15, SC_H * 0.70)
            .setAlign("left")
            .addChildTo(this);
        tm.display.Label(EXTEND_SCORE[0] + " PTS", 22)
            // .setBlendMode("lighter")
            .setPosition(SC_W * 0.85, SC_H * 0.70)
            .setAlign("right")
            .addChildTo(this);
        tm.display.Label("2nd ", 22)
            // .setBlendMode("lighter")
            .setPosition(SC_W * 0.15, SC_H * 0.75)
            .setAlign("left")
            .addChildTo(this);
        tm.display.Label(EXTEND_SCORE[1] + " PTS", 22)
            // .setBlendMode("lighter")
            .setPosition(SC_W * 0.85, SC_H * 0.75)
            .setAlign("right")
            .addChildTo(this);

        // this.highScoreLabel = tm.display.Label()
        //     .setPosition(SC_W * 0.5, SC_H * 0.40)
        //     .addChildTo(this);
        tm.display.Label("press button")
            .setPosition(SC_W * 0.5, SC_H * 0.9)
            // .setBlendMode("lighter")
            .addChildTo(this);

        this.addEventListener("enter", function() {
            gls2.core.fps = FPS;
            this.gameStarted = false;
            this.updateHighScoreLabel();
        });
    },

    updateHighScoreLabel: function() {
        var score = ("" + Math.floor(gls2.core.highScore)).padding(16, " ");
        var text = "";
        for (var i = 0; i < score.length; i += 4) {
            text += score.substring(i, i+4) + " ";
        }
        this.highScoreLabel.text = "HIGH SCORE: " + text.trim();
    },

    drawBackground: function(canvas) {
        canvas.fillStyle = "black";
        canvas.fillRect(0,0,SC_W,SC_H);
    },

    update: function(app) {
        if (app.frame % 2 === 0) {
            this._generateParticle(Math.cos(this.age*-0.01)            *100+SC_W*0.5, Math.sin(this.age*-0.01)            *100+SC_H*0.5, 0);
            this._generateParticle(Math.cos(this.age*-0.01+Math.PI*2/3)*100+SC_W*0.5, Math.sin(this.age*-0.01+Math.PI*2/3)*100+SC_H*0.5, 1);
            this._generateParticle(Math.cos(this.age*-0.01+Math.PI*4/3)*100+SC_W*0.5, Math.sin(this.age*-0.01+Math.PI*4/3)*100+SC_H*0.5, 2);
        }

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
        if (origParticle2 === null) origParticle2 = gls2.Particle(80, 1.0, 0.8, tm.graphics.Canvas()
            .resize(80, 80)
            .setFillStyle(
                tm.graphics.RadialGradient(40,40,0,40,40,40).addColorStopList([
                    {offset:0, color: "rgba(255,255,255,0.1)"},
                    {offset:1, color: "rgba(  0,155,  0,0.0)"},
                ]).toStyle()
            ).fillRect(0, 0, 80, 80)
            .element
        );

        var p = [origParticle0, origParticle1, origParticle2][col].clone().addChildTo(this);

        p.speed = 0.7;
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
        var menu = [ "arcade mode", "training mode", "tutorial", "setting" ];
        var labels = [
            "ゲームを開始します",
            "トレーニングを開始します",
            "チュートリアルを開始します",
            "設定を変更します"
        ];
        this.openDialogMenu("MAIN MENU", menu, this.onResultMainMenu, {
            "defaultValue": this.lastMainMenu,
            "menuDescriptions": labels
        });
    },
    onResultMainMenu: function(result) {
        if (result !== 2) this.lastMainMenu = result;
        switch (result) {
        case 0: // start
            gls2.core.mode = 0;
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
        case 1: // training
            this.openStageSelect();
            break;
        case 2: // tutorial
            gls2.core.mode = 2;
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
                    gls2.core.replaceScene(gls2.core.gameScene);
                    gls2.core.gameScene.start(2, 0);
                }.bind(this));
            break;
        case 3: // option
            this.openSetting();
            break;
        }
    },

    openStageSelect: function(defaultValue) {
        this.openDialogMenu("STAGE", [
            "stage 1",
            "stage 2",
            "stage 3",
            "stage 4",
            "stage 5",
        ], this.onResultStageSelect, {
            "defaultValue": defaultValue || 0
        });
    },
    onResultStageSelect: function(result) {
        if (result === 5) {
            this.openMainMenu();
            return;
        }
        gls2.core.mode = 1;
        gls2.core.selectedStage = result;
        this.openRankSelect();
    },

    openRankSelect: function() {
        this.openDialogMenu("RANK", [
            "0",
            "10",
            "20",
            "30",
            "40",
            "50",
        ], this.onResultRankSelect, {});
    },
    onResultRankSelect: function(result) {
        if (result === 6) {
            this.openStageSelect(gls2.core.selectedStage);
            return;
        }
        gls2.core.gameScene.setRank(result*0.1);
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
    },

    openSetting: function() {
        this.openDialogMenu("SETTING", [
            "bgm volume",
            "sound volume",
            "particle",
            "bullet appearance"
        ], this.onResultSetting, {
            "defaultValue": this.lastSetting,
            "menuDescriptions": [
                "BGMボリュームを設定します",
                "効果音ボリュームを設定します",
                "パーティクルのON/OFFを設定します",
                "敵弾の見た目に関する設定です"
            ],
        });
    },
    onResultSetting: function(result) {
        if (result !== 4) this.lastSetting = result;
        switch (result) {
        case 0:
            this.openBgmSetting();
            break;
        case 1:
            this.openSeSetting();
            break;
        case 2:
            this.openParticleSetting();
            break;
        case 3:
            this.openBulletAppearanceSetting();
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
        this.saveSetting();
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
        this.saveSetting();
        this.openSetting();
    },

    openParticleSetting: function() {
        this.openDialogMenu("PARTICLES", [ "ON", "LITE", "OFF" ], this.onResultParticleSetting, {
            "defaultValue": gls2.core.particleEffectLevel,
            "showExit": false,
        });
    },
    onResultParticleSetting: function(result) {
        gls2.core.particleEffectLevel = result;
        this.saveSetting();
        this.openSetting();
    },

    openBulletAppearanceSetting: function() {
        this.openDialogMenu("BULLET", [ "NORMAL", "LARGE" ], this.onResultBulletAppearanceSetting, {
            "defaultValue": gls2.core.bulletBig,
            "showExit": false,
            "menuDescriptions": [
                "通常サイズで表示します",
                "大きめに表示します"
            ]
        });
    },
    onResultBulletAppearanceSetting: function(result) {
        gls2.core.bulletBig = result;
        this.saveSetting();
        this.openSetting();
    },

    saveSetting: function() {
        var config = {
            "bgmVolume": gls2.core.bgmVolume,
            "seVolume": gls2.core.seVolume,
            "particleEffectLevel": gls2.core.particleEffectLevel,
            "bulletBig": gls2.core.bulletBig
        };
        localStorage.setItem("tmshooter.config", JSON.stringify(config));
    },

    toString: function() { return "gls2.TitleScene" },
});

})();
