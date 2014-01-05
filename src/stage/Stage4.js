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
            this.gameScene.ground.speed = 1;
        });

        // 0%

        this.seq.add(200, "tsukikage-r");
        this.seq.add(100, "tsukikage-l");

        this.seq.add(200, "bukky-4-r");

        this.seq.add(150, "heri1-4-left");
        this.seq.add( 10, "heri1-4-center");
        this.seq.add( 10, "heri1-4-left");
        this.seq.add( 10, "heri1-4-center");

        this.seq.add(100, "komachi4-0");

        this.seq.add(120, "heri1-4-right");
        this.seq.add( 10, "heri1-4-center");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-center");

        this.seq.add(100, "bukky-4-l");
        this.seq.add(200, "bukky-4-r");

        this.seq.add(200, "tankRD-center");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-center");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-center");
        this.seq.add( 20, "tankRD-left");
        this.seq.add( 20, "tank5-left");
        this.seq.add( 20, "tank5-center");
        this.seq.add( 20, "tankRD-left");
        this.seq.add( 20, "tank5-left");
        this.seq.add( 20, "tank5-center");

        this.seq.add(100, "tsukikage-r");
        this.seq.add( 10, "tankL-top");
        this.seq.add(100, "tankL-top");
        this.seq.add( 50, "tankL-top");
        this.seq.add( 50, "tankL-top");

        this.seq.add(150, "komachi4-0");
        this.seq.add( 50, "komachi4-1");

        this.seq.add(500, "heri2-left");
        this.seq.add(  1, function() {
            this.gameScene.ground.tweener.clear().to({
                speed: 5,
                direction: -Math.PI*0.5
            }, 10000).to({
                speed: 3,
                direction: -Math.PI*1.5
            }, 10000);
        });
        for (var i = 0; i < 6; i++) {
            this.seq.add( 20, "heri2-center");
            this.seq.add( 20, "heri2-right");
            this.seq.add( 20, "heri2-left");
            this.seq.add(  1, "tank5-center");
            this.seq.add( 15, "heri1-4-center");
            this.seq.add( 15, "heri1-4-right");
            this.seq.add( 15, "heri1-4-left");
            this.seq.add(  1, "tank5-left");
            this.seq.add( 90, "tank25-top");
        }

        // 25%
    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(30,30%,15%)" },
            { offset:1, color:"hsl(30,50%, 5%)" },
        ]).toStyle();
    },

});

})();
