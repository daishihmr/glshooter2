/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

/** @const */
var CELL = 40;

/**
 * @class
 * @extends {gls2.Scene}
 */
gls2.ResultScene = tm.createClass(
/** @lends {gls2.ResultScene.prototype} */
{
    superClass: gls2.Scene,

    gameScene: null,

    screenShot: null,

    lastElement: null,

    values: null,
    labels: null,
    incrs: null,
    rates: [
        STAGE_CLEAR_BONUS_STAR, // 星アイテム（小）
        STAGE_CLEAR_BONUS_STAR_LARGE, // 星アイテム（大）
        STAGE_CLEAR_BONUS_KILL_RATIO, // 撃墜率
        STAGE_CLEAR_BONUS_MAX_COMBO, // 最大コンボ数
        1,    // ノーミス
    ],

    labelTotal: null,

    promptEnter: null,

    cursor: 0,

    wait: 0,

    frame: 0,

    /** @constructs */
    init: function(gameScene, screenShot) {
        this.superInit();
        this.gameScene = gameScene;

        // 背景
        tm.display.Sprite("result_bg", SC_W*1.1, SC_H*1.1)
            .setAlpha(0.5)
            .setPosition(SC_W/2, SC_H/2)
            .addChildTo(this);

        this.values = [
            this.gameScene.starItem,
            this.gameScene.starItemLarge,
            ~~(this.gameScene.killCount / this.gameScene.enemyCount * 100),
            this.gameScene.maxComboCount,
            this.gameScene.missCount === 0 ? STAGE_CLEAR_BONUS_NO_MISS : 0,
        ];
        this.incrs = this.values.map(function(v) {
            return v * 0.01;
        });
        tm.display.Label("RESULT", 40)
            .setPosition(SC_W*0.5, SC_H*0.1)
            .addChildTo(this);

        tm.display.Label("STAR (S)")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.5, SC_H*0.2)
            .addChildTo(this);

        tm.display.Label("STAR (L)")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.5, SC_H*0.3)
            .addChildTo(this);

        tm.display.Label("KILL RATIO")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.5, SC_H*0.4)
            .addChildTo(this);

        tm.display.Label("MAX HIT")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.5, SC_H*0.5)
            .addChildTo(this);

        tm.display.Label("NO MISS BONUS", 20)
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.5, SC_H*0.6)
            .addChildTo(this);

        tm.display.Label("TOTAL SCORE")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.5, SC_H*0.7)
            .addChildTo(this);

        this.labels = [];
        for (var i = 0; i < this.values.length; i++) {
            this.labels[i] = tm.display.Label(""+Math.floor(this.values[i]) + (i===2?"%":""), 30)
                .setFontFamily("'Ubuntu Mono'")
                .setAlign("right")
                .setBaseline("middle")
                .setPosition(SC_W*0.8, SC_H*(0.2 + i*0.1))
                .addChildTo(this);
        }

        this.labelTotal = tm.display.Label(Math.floor(this.gameScene.score), 34)
            .setFontFamily("'Ubuntu Mono'")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.8, SC_H*0.8)
            .addChildTo(this);

        this.promptEnter = tm.display.Label("press button")
            .setPosition(SC_W*0.5, SC_H*0.9)
            .addChildTo(this);
        this.promptEnter.visible = false;

        // ゲーム画面がバラバラと落ちるエフェクト
        this.screenShot = screenShot;
        var parts = [];
        for (var i = 0; i < SC_W / CELL; i++) {
            parts[i] = [];
            for (var j = 0; j < SC_H / CELL; j++) {
                parts[i][j] = {
                    px: 0,
                    py: 0,
                    vx: gls2.math.randf(-2, 2),
                    vy: gls2.math.randf(1, 4),
                };
            }
        }
        this.lastElement = tm.app.Object2D();
        this.lastElement.draw = function(canvas) {
            // var beginProcessTime = new Date().getTime();

            canvas.save();

            var ok = true;
            for (var i = 0; i < parts.length; i++) {
                for (var j = 0; j < parts[i].length; j++) {
                    var part = parts[i][j];
                    if (j*CELL + part.py < SC_H) {
                        canvas.drawImage(this.screenShot.element,
                            i*CELL, j*CELL, CELL, CELL,
                            i*CELL + part.px, j*CELL + part.py, CELL, CELL);
                        part.px += part.vx;
                        part.py += part.vy;
                        part.vy += 0.3;
                        ok = false;
                    }
                }
            }

            this.wait = 60;
            if (ok) {
                this.lastElement.remove();
            }

            canvas.restore();

            // console.log("lastElement " + (new Date().getTime() - beginProcessTime));
        }.bind(this);
        this.lastElement.addChildTo(this);

        // this.wait = 60;

        this.on("enter", function() {
            if (this.gameScene.killCount === this.gameScene.enemyCount) {
                gls2.core.putAchevement("kill100");
            } else if (this.gameScene.killCount / this.gameScene.enemyCount < 0.4) {
                gls2.core.putAchevement("kill40");
            }

            if (this.gameScene.missCountTotal === 0 && this.gameScene.continueCount === 0) {
                if (this.gameScene.stageNumber === 0) gls2.core.putAchevement("nomiss1");
                else if (this.gameScene.stageNumber === 1) gls2.core.putAchevement("nomiss2");
                else if (this.gameScene.stageNumber === 2) gls2.core.putAchevement("nomiss3");
                else if (this.gameScene.stageNumber === 3) gls2.core.putAchevement("nomiss4");
                else if (this.gameScene.stageNumber === 4) gls2.core.putAchevement("nomiss5");
            }

            if (this.gameScene.hyperCountByStage[this.gameScene.stageNumber] === 0) {
                gls2.core.putAchevement("nohyper");
            } else if (this.gameScene.hyperCountByStage[this.gameScene.stageNumber] >= 5) {
                gls2.core.putAchevement("hyperAndHyper");
            }
            if (this.gameScene.bombCountByStage[this.gameScene.stageNumber] === 0 && this.gameScene.autoBombCountByStage[this.gameScene.stageNumber] === 0) {
                gls2.core.putAchevement("nobomb");
            }
            if (!this.gameScene.pressC) {
                gls2.core.putAchevement("manpower");
            }
        });
        this.on("exit", function() {
            gls2.fadeOutBgm();
        });
    },
    update: function(app) {
        this.wait -= 1;
        if (this.wait > 0) return;

        var c = this.cursor;
        if (c < this.values.length) {
            gls2.playSound("star");
            if (this.values[c] <= this.incrs[c] || app.keyboard.getKeyDown("z") || app.keyboard.getKeyDown("c") || app.keyboard.getKeyDown("space")) {
                this.gameScene.addScore(this.values[c] * this.rates[c]);
                this.values[c] = 0;
                this.cursor += 1;
                this.wait = 30;
            } else {
                this.gameScene.addScore(this.incrs[c] * this.rates[c]);
                this.values[c] -= this.incrs[c];
            }
            this.labels[c].text = "" + Math.floor(this.values[c]) + (c===2?"%":"");
            this.labelTotal.text = Math.floor(this.gameScene.score);
        } else {
            this.promptEnter.visible = true;
            if (app.keyboard.getKeyDown("z") || app.keyboard.getKeyDown("c") || app.keyboard.getKeyDown("space") || this.frame > 30*60) {
                gls2.playSound("decision");

                if (this.gameScene.stageNumber === 0) {
                    this.gameScene.scoreByStage[this.gameScene.stageNumber] = this.gameScene.score;
                } else {
                    this.gameScene.scoreByStage[this.gameScene.stageNumber] = this.gameScene.score - this.gameScene.scoreByStage[this.gameScene.stageNumber - 1];
                }

                if (gls2.core.mode === 0) {
                    if (this.gameScene.stageNumber + 1 == STAGE_NUMBER) {
                        // goto ending
                        app.replaceScene(gls2.EndingScene());
                    } else {
                        this.gameScene.startStage(this.gameScene.stageNumber + 1);
                        app.replaceScene(this.gameScene);
                    }
                } else if (gls2.core.mode === 1) {
                    gls2.stopBgm();
                    app.replaceScene(gls2.TitleScene());
                }
            }
        }

        this.frame += 1;
    },
    drawBackground: function(canvas) {
    }
});

/** @const */
var C = 8 * 2;
/** @const */
var L = C/2*Math.sqrt(3);

})();
