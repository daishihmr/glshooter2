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
        var label = tm.app.Label("GAME OVER");
        label.fillStyle = "red";
        label.setPosition(SC_W*0.5, SC_H*0.5).addChildTo(this);

        this.interactive = true;
        this.addEventListener("enter", function() {
            this.tweener.clear()
                .wait(5000)
                .call(function() {
                    this.app.popScene();
                }.bind(this));
        });
    },
    update: function(app) {
        if (app.keyboard.getKeyDown("z")) {
            app.popScene();
            return;
        }
    },
    draw: function(canvas) {
        canvas.clear();
    },
});
