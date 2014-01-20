/*
 * License
 * http://daishihmr.mit-license.org/
 */

/**
 * @class
 */
gls2.GameOverScene = tm.createClass(
/** @lends {gls2.GameOverScene.prototype} */
{
    superClass: gls2.Scene,

    age: 0,
    opened: false,

    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        var label = tm.display.Label("GAME OVER");
        label.fillStyle = "red";
        label.setPosition(SC_W*0.5, SC_H*0.5).addChildTo(this);

        this.interactive = true;
        this.addEventListener("enter", function() {
            this.age = 0;
            this.opened = false;
        });
    },
    update: function(app) {
        if (app.keyboard.getKeyDown("z") || app.keyboard.getKeyDown("c") || (this.age == 300 && !this.opened)) {
            this.openMenu();
        }

        this.age += 1;
    },

    drawBackground: function(canvas) {
        canvas.clearColor("black");
    },

    openMenu: function() {
        this.opened = true;

        var menu = [ "save score", "exit" ];
        var labels = [
            "スコアをランキングサーバーへ送信します",
            "タイトルへ戻ります"
        ];
        this.openDialogMenu("GAME OVER", menu, this.onResultMenu, {
            "defaultValue": 0,
            "menuDescriptions": labels,
            "showExit": false
        });
    },

    onResultMenu: function(result) {
        if (result === 0) {
            this.app.postScore(null, function() {
                this.app.replaceScene(gls2.TitleScene());
            });
        } else {
            this.app.replaceScene(gls2.TitleScene());
        }
    }

});
