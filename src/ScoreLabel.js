/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {tm.graphics.Canvas}
 */
gls2.ScoreLabel = tm.createClass(
/** @lends {gls2.ScoreLabel} */
{
    superClass: tm.display.CanvasLayer,

    gameScene: null,

    consoleWindow: null,

    scoreLabelElement: null,

    frame: 0,

    "gpsOffsetX": 0,
    "gpsOffsetY": 0,

    init: function(gameScene) {
        this.superInit(SC_W, SC_H*0.25);
        this.origin.set(0, 0);
        this.drawInterval = 3;

        var that = this;

        this.gameScene = gameScene;

        this.consoleWindow = gls2.ConsoleWindow(200).addChildTo(this);
        this.consoleWindow.on("enterframe", function() {
            this.posY = that["gpsOffsetY"] + 5;
        });

        // ボスHP
        var bossHpGauge = gls2.BossHpGauge()
            .on("enterframe", function() {
                this.y = that["gpsOffsetY"] * 1.2;
                if (gameScene.boss !== null) {
                    this.value = gameScene.boss.hp / gameScene.boss.hpMax;
                }
            })
            .addChildTo(this);

        // スコア
        var scoreLabel = tm.display.Label("0", 20)
            .setFillStyle("rgba(255,255,255,0.4)")
            .setFontFamily("Ubuntu Mono")
            .setAlign("right")
            .setBaseline("top")
            .on("enterframe", function() {
                this.setPosition(SC_W*0.4, that["gpsOffsetY"] + 5);
                var scoreText = "";
                var score = ("" + Math.floor(gameScene.score)).padding(16, " ");
                for (var i = 0; i < score.length; i += 4) {
                    scoreText += score.substring(i, i+4) + " ";
                }
                this.text = scoreText;
            })
            .addChildTo(this);

        // 素点
        var baseScoreLabel = tm.display.Label("0", 18)
            .setFillStyle("rgba(255,255,255,0.4)")
            .setFontFamily("Ubuntu Mono")
            .setAlign("right")
            .setBaseline("top")
            .on("enterframe", function() {
                this.setPosition(that["gpsOffsetX"] + SC_W*0.4, 22);
                var scoreText = "";
                var score = ("+" + Math.floor(gameScene.baseScore)).padding(8, " ");
                for (var i = 0; i < score.length; i += 4) {
                    scoreText += score.substring(i, i+4) + " ";
                }
                var bonus = (~~(gameScene.comboCount / COMBO_BONUS) + 1);

                this.text = scoreText + "x " + bonus;
            })
            .addChildTo(this);

        // 残機数
        var zankiGauge = gls2.ZankiGauge()
            .on("enterframe", function() {
                this.playerType = gameScene.player.type;
                this.zanki = gameScene.zanki;
            })
            .addChildTo(this);

        // ランク
        var rankLabel = tm.display.Label("0", 17)
            .setFillStyle("rgba(255,255,255,0.4)")
            .setAlign("left")
            .setBaseline("top")
            .setPosition(10, 75)
            .on("enterframe", function() {
                this.text = "rank " + ~~(bulletml.Walker.globalScope["$rank"]*100);
            })
            .addChildTo(this);

        // MAXコンボ数
        var maxComboLabel = tm.display.Label("0", 17)
            .setFillStyle("rgba(255,255,255,0.4)")
            .setAlign("left")
            .setBaseline("top")
            .on("enterframe", function() {
                this.setPosition(that["gpsOffsetX"] + 10, 95)
                this.text = "max " + ~~gameScene.maxComboCount + " hit";
            })
            .addChildTo(this);

        // コンボ数
        var comboCountLabel = tm.display.Label("0", 45)
            .setStrokeStyle("rgba(255,255,255,0.4)")
            .setAlign("left")
            .setBaseline("top")
            .on("enterframe", function() {
                this.visible = 0 < gameScene.comboCount || DEBUG;
                this.setPosition(10, that["gpsOffsetY"]*-0.5 + 110);
                this.text = ~~gameScene.comboCount + " HIT!!", 10;
            })
            .addChildTo(this);
        comboCountLabel.fill = false;
        comboCountLabel.stroke = true;
    },

    update: function() {
    //     // var beginProcessTime = new Date().getTime();

    //     this.clear();

    //     // ボスHP
    //     if (this.gameScene.boss !== null) {
    //         this.fillStyle = tm.graphics.LinearGradient(0, 0, SC_W, 0)
    //             .addColorStopList([
    //                 { offset: 0.0, color: "rgba(255,255,0,0.4)" },
    //                 { offset: 1.0, color: "rgba(0,255,255,0.4)" },
    //             ]).toStyle();
    //         this.strokeStyle = "rgba(255,255,255,0.8)";
    //         this.lineWidth = 2;
    //         this.fillRect(5, this.scoreLabelElement["gpsOffsetY"] - 20, (SC_W-10) * this.gameScene.boss.hp/this.gameScene.boss.hpMax, 20);
    //         this.strokeRect(5, this.scoreLabelElement["gpsOffsetY"] - 20, SC_W-10, 20);
    //         this.clear(5 + (SC_W-10)*0.55, this.scoreLabelElement["gpsOffsetY"] - 20+2, 2, 20-4);
    //         this.clear(5 + (SC_W-10)*0.1, this.scoreLabelElement["gpsOffsetY"] - 20+2, 2, 20-4);
    //     }

    //     this.fillStyle = "rgba(255,255,255,0.4)";
    //     this.strokeStyle = "rgba(255,255,255,0.4)";
    //     this.lineWidth = 1;

    //     // 残機数
    //     var y = [0, 1, 4][this.gameScene.player.type];
    //     for (var i = 0; i < this.gameScene.zanki-1; i++) {
    //         this.drawTexture(tm.asset.AssetManager.get("fighter"), 64*3, 64*y, 64, 64, 5 + (i*32), 40, 32, 32);
    //     }

    //     // ハイパーレベル
    //     if (this.frame % 2 === 0) {
    //         if (!this.gameScene.isHyperMode && this.gameScene.hyperLevel > 0) {
    //             this.strokeStyle = "rgba(255,255,100,0.5)";
    //             this.setText("bold 24px Orbitron", "left", "bottom");
    //             this.strokeText("HYPER LV " + this.gameScene.hyperLevel, 5, SC_H-3);
    //         } else if (this.gameScene.isHyperMode) {
    //             this.strokeStyle = "rgba(255,255,100,0.5)";
    //             this.setText("bold 28px Orbitron", "left", "bottom");
    //             this.strokeText("HYPER LV " + this.gameScene.currentHyperLevel, 5, SC_H-3);
    //         }
    //     }

    //     // ボム数
    //     for (var i = 0; i < this.gameScene.bomb; i++) {
    //         this.drawTexture(tm.asset.AssetManager.get("bombIcon"), SC_W-(i+1)*(20+5) - 20, SC_H-(20+5), 20, 20);
    //     }
    //     if (this.frame % 2 === 0) {
    //         if (this.gameScene.isBombMaximum) {
    //             this.strokeStyle = "rgba(255,255,255,0.5)";
    //             this.setText("bold 28px Orbitron", "right", "bottom");
    //             this.strokeText("MAXIMUM", SC_W-20, SC_H-3);
    //         }
    //     }

    //     this.consoleWindow.update();
    //     this.consoleWindow.posY = this.scoreLabelElement["gpsOffsetY"] + 5;
    //     this.consoleWindow.draw(this);

    //     this.frame += 1;

    //     // debug
    //     if (DEBUG) {
    //         this.fillStyle = "rgba(255,255,255,0.2)";
    //         this.setText("bold 20px Orbitron", "right", "bottom");
    //         this.fillText(this.gameScene.killCount + "/" + this.gameScene.enemyCount, SC_W-30, SC_H);
    //         this.fillText("STAR S:" + this.gameScene.starItem + " L:" + this.gameScene.starItemLarge, SC_W-30, SC_H-25);
    //         this.fillText("hyper rank " + this.gameScene.hyperRank, SC_W-30, SC_H-50);
    //     }

    //     // console.log("ScoreLabel " + (new Date().getTime() - beginProcessTime));
    }

});

gls2.BossHpGauge = tm.createClass({
    superClass: tm.display.CanvasElement,

    value: 0,

    init: function() {
        this.superInit();
        this.fillStyle = tm.graphics.LinearGradient(0, 0, SC_W, 0)
            .addColorStopList([
                { offset: 0.0, color: "rgba(255,255,0,0.4)" },
                { offset: 1.0, color: "rgba(0,255,255,0.4)" },
            ]).toStyle();
        this.strokeStyle = "rgba(255,255,255,0.8)";
    },

    draw: function(canvas) {
        canvas.lineWidth = 2;
        canvas.fillRect(5, -24, (SC_W-10) * this.value, 20);
        canvas.strokeRect(5, -24, SC_W-10, 20);
        canvas.clear(5 + (SC_W-10)*0.55, -24+2, 2, 20-4);
        canvas.clear(5 + (SC_W-10)*0.1, -24+2, 2, 20-4);
    }
});

gls2.ZankiGauge = tm.createClass({
    superClass: tm.display.CanvasElement,

    playerType: 0,
    zanki: 0,

    init: function() {
        this.superInit();
    },

    draw: function(canvas) {
        var y = [0, 1, 4][this.playerType];
        for (var i = 0; i < this.zanki - 1; i++) {
            canvas.drawTexture(tm.asset.AssetManager.get("fighter"), 64*3, 64*y, 64, 64, 5 + (i*32), 40, 32, 32);
        }
    }
});

})();
