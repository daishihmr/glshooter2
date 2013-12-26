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
        gls2.Setting.STAGE_CLEAR_BONUS_STAR, // 星アイテム（小）
        gls2.Setting.STAGE_CLEAR_BONUS_STAR_LARGE, // 星アイテム（大）
        gls2.Setting.STAGE_CLEAR_BONUS_KILL_RATIO, // 撃墜率
        gls2.Setting.STAGE_CLEAR_BONUS_MAX_COMBO, // 最大コンボ数
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

        this.values = [
            this.gameScene.starItem,
            this.gameScene.starItemLarge,
            ~~(this.gameScene.killCount / this.gameScene.enemyCount * 100),
            this.gameScene.maxComboCount,
            this.gameScene.missCount === 0 ? gls2.Setting.STAGE_CLEAR_BONUS_NO_MISS : 0,
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

        this.promptEnter = tm.display.Label("press space key")
            .setPosition(SC_W*0.5, SC_H*0.9)
            .addChildTo(this);
        this.promptEnter.visible = false;

        // 背景
        this.background = tm.graphics.LinearGradient(0, 0, SC_W, SC_H)
            .addColorStopList([
                { offset: 0.0, color: "hsl(220, 90%, 60%)" },
                { offset: 1.0, color: "hsl(220, 90%, 10%)" },
            ])
            .toStyle();

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

        this.addEventListener("exit", function() {
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
                this.gameScene.startStage(this.gameScene.stageNumber + 1);
                app.popScene();
            }
        }

        this.frame += 1;
    },
    drawBackground: function(canvas) {
        canvas.clearColor(this.background);

        // canvas.lineWidth = 1;
        // canvas.strokeStyle = tm.graphics.LinearGradient(0, 0, SC_W, SC_H)
        //     .addColorStopList([
        //         { offset: 0.0, color: "hsl(200, 90%, 10%)" },
        //         { offset: 1.0, color: "hsl(200, 90%, 60%)" },
        //     ])
        //     .toStyle();
        // canvas.beginPath();
        // var yy = 0;
        // for (var x = 0-C*3; x < SC_W+C*3; x += C*1.5) {
        //     yy = (yy === 0) ? L : 0;
        //     for (var y = -L*2 + yy; y < SC_H+L*2; y += L*2) {
        //         canvas.line(x, y, x + C, y);
        //         canvas.line(x, y, x - C/2, y + L);
        //         canvas.line(x, y, x - C/2, y - L);
        //     }
        // }
        // canvas.stroke();

        // canvas.fillStyle = "hsla(220, 90%, 10%, 0.6)";
        // canvas.fillRect(20, 20, SC_W-20*2, SC_H-20*2);
    }
});

/** @const */
var C = 8 * 2;
/** @const */
var L = C/2*Math.sqrt(3);

})();
