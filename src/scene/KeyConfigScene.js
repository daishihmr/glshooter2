/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

    var FLOW = {};

    /**
     * @class
     * @extends {gls2.Scene}
     */
    gls2.KeyConfigScene = tm.createClass(
        /** @lends {gls2.KeyConfigScene.prototype} */
        {
            superClass: gls2.Scene,

            init: function() {
                this.superInit();
            },

            drawBackground: function(canvas) {
                canvas.fillStyle = "rgba(0, 0, 0, 0.9)";
                canvas.fillRect(0, 0, SC_W, SC_H);
            },

        });

})();
