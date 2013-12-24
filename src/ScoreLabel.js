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
    superClass: tm.graphics.Canvas,

    gameScene: null,

    consoleWindow: null,

    scoreLabelElement: null,

    frame: 0,

    init: function(gameScene) {
        this.superInit("#scoreLabel");

        this.gameScene = gameScene;

        this.resize(SC_W, SC_H).fitWindow();

        this.setText("20px Orbitron", "left", "top");
        this.fillStyle = "rgba(255,255,255,0.01)";

        this.consoleWindow = gls2.ConsoleWindow(200);

        this.scoreLabelElement = gls2.ScoreLabelElement(this);
    },

    update: function() {
        this.clear();

        // ボスHP
        if (this.gameScene.boss !== null) {
            this.fillStyle = tm.graphics.LinearGradient(0, 0, SC_W, 0)
                .addColorStopList([
                    { offset: 0.0, color: "rgba(255,255,0,0.4)" },
                    { offset: 1.0, color: "rgba(0,255,255,0.4)" },
                ]).toStyle();
            this.strokeStyle = "rgba(255,255,255,0.8)";
            this.lineWidth = 2;
            this.fillRect(5, this.scoreLabelElement.gpsOffsetY - 20, (SC_W-10) * this.gameScene.boss.hp/this.gameScene.boss.hpMax, 20);
            this.strokeRect(5, this.scoreLabelElement.gpsOffsetY - 20, SC_W-10, 20);
            this.clear(5 + (SC_W-10)*0.55, this.scoreLabelElement.gpsOffsetY - 20+2, 2, 20-4);
            this.clear(5 + (SC_W-10)*0.1, this.scoreLabelElement.gpsOffsetY - 20+2, 2, 20-4);
        }

        this.fillStyle = "rgba(255,255,255,0.4)";
        this.strokeStyle = "rgba(255,255,255,0.4)";
        this.lineWidth = 1;

        // スコア
        var text;
        this.setText("20px 'Ubuntu Mono'", "right", "top");
        score = ("" + Math.floor(this.gameScene.score)).padding(16, " ");
        text = "";
        for (var i = 0; i < score.length; i += 4) {
            text += score.substring(i, i+4) + " ";
        }
        this.fillText(text, SC_W*0.4, this.scoreLabelElement.gpsOffsetY + 5);

        // 素点
        this.setText("18px 'Ubuntu Mono'", "right", "top");
        score = ("+" + Math.floor(this.gameScene.baseScore)).padding(8, " ");
        text = "";
        for (var i = 0; i < score.length; i += 4) {
            text += score.substring(i, i+4) + " ";
        }
        var bonus = (~~(this.gameScene.comboCount / gls2.Setting.COMBO_BONUS) + 1);
        this.fillText(text + "x " + bonus, this.scoreLabelElement.gpsOffsetX + SC_W*0.4, 22);

        // 残機数
        var y = [0, 1, 4][this.gameScene.player.type];
        for (var i = 0; i < this.gameScene.zanki-1; i++) {
            this.drawTexture(tm.asset.AssetManager.get("fighter"), 64*3, 64*y, 64, 64, 5 + (i*32), 40, 32, 32);
        }

        // ランク
        this.setText("bold 18px Orbitron", "left", "top");
        this.strokeText("rank " + ~~(bulletml.Walker.globalScope["$rank"]*100), 10, 75);

        // MAXコンボ数
        this.setText("bold 18px Orbitron", "left", "top");
        this.strokeText("max " + ~~this.gameScene.maxComboCount + " hit", this.scoreLabelElement.gpsOffsetX + 10, 95);

        // コンボ数
        if (0 < ~~this.gameScene.comboCount || DEBUG) {
            this.setText("bold 45px Orbitron", "left", "top");
            this.strokeText(~~this.gameScene.comboCount + " HIT!!", 10, -this.scoreLabelElement.gpsOffsetY + 115);
        }

        // ハイパーレベル
        if (this.frame % 2 === 0) {
            if (!this.gameScene.isHyperMode && this.gameScene.hyperLevel > 0) {
                this.strokeStyle = "rgba(255,255,100,0.5)";
                this.setText("bold 24px Orbitron", "left", "bottom");
                this.strokeText("HYPER LV " + this.gameScene.hyperLevel, 5, SC_H-3);
            } else if (this.gameScene.isHyperMode) {
                this.strokeStyle = "rgba(255,255,100,0.5)";
                this.setText("bold 28px Orbitron", "left", "bottom");
                this.strokeText("HYPER LV " + this.gameScene.currentHyperLevel, 5, SC_H-3);
            }
        }

        // ボム数
        for (var i = 0; i < this.gameScene.bomb; i++) {
            this.drawTexture(tm.asset.AssetManager.get("bombIcon"), SC_W-(i+1)*(20+5) - 20, SC_H-(20+5), 20, 20);
        }
        if (this.frame % 2 === 0) {
            if (this.gameScene.isBombMaximum) {
                this.strokeStyle = "rgba(255,255,255,0.5)";
                this.setText("bold 28px Orbitron", "right", "bottom");
                this.strokeText("MAXIMUM", SC_W-20, SC_H-3);
            }
        }

        this.consoleWindow.update();
        this.consoleWindow.posY = this.scoreLabelElement.gpsOffsetY + 5;
        this.consoleWindow.draw(this);

        this.frame += 1;

        // debug
        if (DEBUG) {
            this.fillStyle = "rgba(255,255,255,0.2)";
            this.setText("bold 20px Orbitron", "right", "bottom");
            this.fillText(this.gameScene.killCount + "/" + this.gameScene.enemyCount, SC_W-30, SC_H);
            this.fillText("STAR S:" + this.gameScene.starItem + " L:" + this.gameScene.starItemLarge, SC_W-30, SC_H-25);
            this.fillText("hyper rank " + this.gameScene.hyperRank, SC_W-30, SC_H-50);
        }

    },

});

/**
 * @class
 * @extends {tm.app.Object2D}
 */
gls2.ScoreLabelElement = tm.createClass(
/** @lends {gls2.GroundElement} */
{
    superClass: tm.app.Object2D,

    scoreLabel: null,

    gpsOffsetX: 0,
    gpsOffsetY: 0,

    init: function(scoreLabel) {
        this.superInit();
        this.scoreLabel = scoreLabel;
    },

});

})();
