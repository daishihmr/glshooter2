/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

/**
 * @class
 * @extends {tm.app.Scene}
 */
gls2.EndingScene = tm.createClass(
/** @lends {gls2.EndingScene.prototype} */
{
    superClass: tm.app.Scene,

    /**
     * @constructs
     */
    init: function() {
        this.superInit();

        var t =      "今回はここまで";
        var labels = "だんまくびより".split("").map(function(c, i) {
            return FallLabel(c, t[i], "hsl(" + (Math.floor(i * 50)%360) + ", 100%, 60%)");
        });

        var that = this;
        labels.forEach(function(l, i) {
            l.setPosition(50 + i*60, -50).addChildTo(that);
            var d = Math.rand(0, 500);
            l.timeline.to({
                y: 280
            }, 2000, d, "easeOutBounce")
            l.timeline.to({
                scaleY: 0
            }, 800, d + 1200, "easeOutBounce");
            l.tweener.wait(4000).call(function() {
                this.updateText();
            }.bind(l)).to({
                scaleY: 1
            }, 1000, "easeInOutQuad");
        });
    },
    onenter: function() {
        this.app.background = "white";
        if (gls2.core.gameScene.player.type === 0) gls2.core.putAchevement("allclear0");
        else if (gls2.core.gameScene.player.type === 1) gls2.core.putAchevement("allclear1");
        else if (gls2.core.gameScene.player.type === 2) gls2.core.putAchevement("allclear2");
    },
    update: function(app) {
        if (app.keyboard.getKeyDown("z")
            || app.keyboard.getKeyDown("x")
            || app.keyboard.getKeyDown("c")) {
            this.app.replaceScene(gls2.GameOverScene());
        }
    }
});

/**
 * @class
 * @extends {tm.display.Sprite}
 */
var FallLabel = tm.createClass(
/** @lends */
{
    superClass: tm.display.Sprite,

    init: function(c0, c1, color) {
        var tex = tm.graphics.Canvas();
        tex.resize(64, 160);
        tex.setText("64px 'Consolas', 'Monaco', 'ＭＳ ゴシック'", "center", "bottom");
        tex.setFillStyle(color);
        tex.fillText(c0, 32, 80);

        this.c1 = c1;
        this.color = color;

        this.superInit(tex, 64, 160);
    },

    updateText: function() {
        var tex = tm.graphics.Canvas();
        tex.resize(64, 160);
        tex.setText("64px 'Consolas', 'Monaco', 'ＭＳ ゴシック'", "center", "bottom");
        tex.setFillStyle(this.color);
        tex.fillText(this.c1, 32, 80);

        this.image = tex;
    }

});

})();
