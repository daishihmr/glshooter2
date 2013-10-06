/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.Stage4 = tm.createClass(
/** @lends {gls2.Stage4.prototype} */
{
    superClass: gls2.Stage,

    init: function(gameScene) {
        this.superInit(gameScene);

        this.seq.add(  0, function() {
            gls2.playBgm("bgm4", true),
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 8;
            this.gameScene.ground.tweener.clear().to({speed:1}, 4000, "easeInOutQuad");
        });

        this.seq.add(200, "heri1-right");
        this.seq.add( 60, "heri1-center");
        this.seq.add(100, "tsukikage-r");
        this.seq.add(100, "tsukikage-l");

    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(30,30%,15%)" },
            { offset:1, color:"hsl(30,50%, 5%)" },
        ]).toStyle();
    },

});

})();
