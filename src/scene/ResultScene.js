/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

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
    parts: null,

    lastElement: null,

    values: null,
    labels: null,
    incrs: null,

    labelTotal: null,

    promptEnter: null,

    cursor: 0,

    wait: 0,

    /** @constructs */
    init: function(gameScene, screenShot) {
        this.superInit();
        this.gameScene = gameScene;

        this.values = [
            this.gameScene.starItem,
            this.gameScene.starItemLarge,
            ~~(this.gameScene.killCount / this.gameScene.enemyCount * 100),
            this.gameScene.missCount === 0 ? 100000 : 0,
        ];
        this.incrs = this.values.map(function(v) {
            return v * 0.01;
        });

        tm.app.Label("RESULT", 40)        
            .setPosition(SC_W*0.5, SC_H*0.1)
            .addChildTo(this);

        tm.app.Label("STAR (S)")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.4, SC_H*0.3)
            .addChildTo(this);

        tm.app.Label("STAR (L)")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.4, SC_H*0.4)
            .addChildTo(this);

        tm.app.Label("KILL RATIO")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.4, SC_H*0.5)
            .addChildTo(this);

        tm.app.Label("NO MISS BONUS", 20)
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.4, SC_H*0.6)
            .addChildTo(this);

        tm.app.Label("TOTAL")
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.4, SC_H*0.8)
            .addChildTo(this);

        this.labels = [];
        for (var i = 0; i < this.values.length; i++) {
            this.labels[i] = tm.app.Label(""+this.values[i] + (i===2?"%":""))
                .setAlign("right")
                .setBaseline("middle")
                .setPosition(SC_W*0.9, SC_H*(0.3 + i*0.1))
                .addChildTo(this);
        }

        this.labelTotal = tm.app.Label(Math.floor(this.gameScene.score))
            .setAlign("right")
            .setBaseline("middle")
            .setPosition(SC_W*0.9, SC_H*0.8)
            .addChildTo(this);

        this.promptEnter = tm.app.Label("press space key")
            .setPosition(SC_W*0.5, SC_H*0.9)
            .addChildTo(this);
        this.promptEnter.visible = false;

        // 背景
        this.background = tm.graphics.RadialGradient(SC_W*0.5, SC_H*0.5, 0, SC_W*0.5, SC_H*0.5, SC_H)
            .addColorStopList([
                { offset: 0, color: "hsl(208, 90%, 40%)" },
                { offset: 1, color: "hsl(208, 90%, 10%)" },
            ])
            .toStyle();

        // ゲーム画面がバラバラと落ちるエフェクト
        this.screenShot = screenShot;
        this.parts = [];
        for (var i = 0; i < SC_W / CELL; i++) {
            this.parts[i] = [];
            for (var j = 0; j < SC_H / CELL; j++) {
                this.parts[i][j] = {
                    p: 0,
                    v: gls2.math.randf(2, 8),
                };
            }
        }
        this.lastElement = tm.app.Object2D();
        this.lastElement.draw = function(canvas) {
            var ok = true;
            for (var i = 0; i < this.parts.length; i++) {
                for (var j = 0; j < this.parts[i].length; j++) {
                    var part = this.parts[i][j];
                    if (j*CELL + part.p < SC_H) {
                        canvas.drawImage(this.screenShot.element, i*CELL, j*CELL, CELL, CELL, i*CELL, j*CELL + part.p, CELL, CELL);
                        part.p += part.v;
                        part.v += 0.2;
                        ok = false;
                    }
                }
            }
            if (ok) {
                this.lastElement.remove();
                this.wait = 60;
            } else {
                this.wait = 100;
            }
        }.bind(this);
        this.lastElement.addChildTo(this);

        this.addEventListener("enter", function() {
            gls2.playBgm("bgmResult");
        });
        this.addEventListener("exit", function() {
            gls2.fadeOutBgm();
        });
    },
    update: function(app) {
        this.wait -= 1;
        if (this.wait > 0) return;

        var c = this.cursor;
        if (c < 4) {
            gls2.playSound("star");
            if (this.values[c] <= this.incrs[c] || app.keyboard.getKeyDown("z") || app.keyboard.getKeyDown("space")) {
                this.gameScene.addScore(this.values[c] * (c===3)?1:1000);
                this.values[c] = 0;
                this.cursor += 1;
                this.wait = 30;
            } else {
                this.gameScene.addScore(this.incrs[c]);
                this.values[c] -= this.incrs[c];
            }
            this.labels[c].text = "" + Math.floor(this.values[c]) + (c===2?"%":"");
            this.labelTotal.text = Math.floor(this.gameScene.score);
        } else {
            this.promptEnter.visible = true;
            if (app.keyboard.getKeyDown("z") || app.keyboard.getKeyDown("space")) {
                this.gameScene.startStage(this.gameScene.stageNumber + 1);
                app.popScene();
            }
        }

    },
    draw: function(canvas) {
        canvas.clearColor(this.background);
    }
});

})();
