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
            this.tweener.clear()
                .wait(5000)
                .call(function() {
                    this.app.replaceScene(gls2.TitleScene());
                }.bind(this));
        });
    },
    update: function(app) {
        if (app.keyboard.getKeyDown("z") || app.keyboard.getKeyDown("c")) {
            app.replaceScene(gls2.TitleScene());
            return;
        }
    },
    drawBackground: function(canvas) {
        canvas.clearColor("black");
    },
});
