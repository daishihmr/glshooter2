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

    init: function(gameScene) {
        this.superInit("#scoreLabel");

        this.gameScene = gameScene;

        this.resize(SC_W, SC_H).fitWindow();

        this.setText("20px Orbitron", "left", "top");
        this.fillStyle = "rgba(255,255,255,0.01)";

        this.consoleWindow = gls2.ConsoleWindow(200);

    },

    update: function() {
        this.clear();

        this.fillStyle = "rgba(255,255,255,0.4)";
        this.strokeStyle = "rgba(255,255,255,0.4)";

        var text;
        this.setText("20px 'Ubuntu Mono'", "right", "top");
        score = ("" + Math.floor(this.gameScene.score)).padding(16, " ");
        text = "";
        for (var i = 0; i < score.length; i += 4) {
            text += score.substring(i, i+4) + " ";
        }
        this.fillText(text, SC_W*0.4, 5);

        this.setText("18px 'Ubuntu Mono'", "right", "top");
        score = ("+" + Math.floor(this.gameScene.baseScore)).padding(8, " ");
        text = "";
        for (var i = 0; i < score.length; i += 4) {
            text += score.substring(i, i+4) + " ";
        }
        this.fillText(text, SC_W*0.4, 22);

        this.setText("bold 18px Orbitron", "left", "top");
        this.strokeText("rank " + ~~(bulletml.Bullet.globalScope["$rank"]*100), 10, 75);
        // this.strokeText("hyper level " + this.gameScene.hyperRank, 10, 105);

        this.setText("bold 18px Orbitron", "left", "top");
        this.strokeText("max " + ~~this.gameScene.maxComboCount + " hit", 10, 95);

        if (0 < ~~this.gameScene.comboCount) {
            this.setText("bold 40px Orbitron", "left", "top");
            this.strokeText(~~this.gameScene.comboCount + " HIT!!", 10, 115);
        }

        for (var i = 0; i < this.gameScene.zanki-1; i++) {
            this.drawTexture(tm.asset.AssetManager.get("tex1"), 64*3, 0, 64, 64, 5 + (i*32), 40, 32, 32);
        }

        this.fillStyle = "rgba(255,255,255,0.5)";
        for (var i = 0; i < this.gameScene.bomb; i++) {
            this.fillRect(5+i*(20+5), SC_H-5-34, 20, 20);
        }

        this.consoleWindow.update();
        this.consoleWindow.draw(this);

        // debug
        if (DEBUG) {
            this.setText("bold 20px Orbitron", "right", "bottom");
            this.strokeText(this.gameScene.killCount + "/" + this.gameScene.enemyCount, SC_W-30, SC_H);
            this.strokeText("S:" + this.gameScene.starItem + " L:" + this.gameScene.starItemLarge, SC_W-30, SC_H - 25);
        }

    },

});

})();
