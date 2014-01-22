/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.Stage5 = tm.createClass(
/** @lends {gls2.Stage5.prototype} */
{
    superClass: gls2.Stage,

    init: function(gameScene) {
        this.superInit(gameScene);

        this.seq.add(  0, function() {
            gls2.playBgm("bgm5", true),
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 1;
            this.gameScene.ground.tateana = true;
        });

        // 0%

        this.seq.add(150, "urara5-0");
        this.seq.add(260, "urara5-2");
        this.seq.add(260, "urara5-1");

        this.seq.add(380, "nozomi5-1");
        this.seq.add(100, "nozomi5-0");
        this.seq.add(200, "nozomi5-2");

        this.seq.add(200, "tankRD-left");
        this.seq.add( 50, "tank5-left");
        this.seq.add( 50, "tank5-center");
        this.seq.add( 50, "tankRD-left");
        this.seq.add( 50, "tank5-left");
        this.seq.add( 50, "tank5-center");

        this.seq.add(300, "mktn5-0");
        this.seq.add(120, "heri1-4-left");
        this.seq.add( 10, "tankL-top");
        this.seq.add( 20, "heri1-4-center");
        this.seq.add( 10, "tankL-top");
        this.seq.add( 35, "heri1-4-left2");
        this.seq.add( 35, "heri1-4-center2");
        this.seq.add( 10, "tankRD-left");
        this.seq.add( 20, "heri1-4-left");
        this.seq.add( 10, "tankL-top");
        this.seq.add( 20, "heri1-4-left");
        this.seq.add( 10, "tankL-top");
        this.seq.add( 20, "heri1-4-center");
        this.seq.add( 10, "tankL-top");

        this.seq.add(220, "mktn5-1");
        this.seq.add( 20, "heri1-4-right");
        this.seq.add( 10, "tankRD-left");
        this.seq.add( 20, "heri1-4-center");
        this.seq.add( 10, "tank5-center");
        this.seq.add( 35, "heri1-4-right2");
        this.seq.add( 35, "heri1-4-center2");
        this.seq.add( 10, "tankRD-left");
        this.seq.add( 20, "heri1-4-right");
        this.seq.add( 10, "tankL-top");

        this.seq.add(260, "urara5-2");
        this.seq.add(260, "urara5-3");
        this.seq.add(260, "urara5-2");
        this.seq.add(260, "urara5-1");

        // 10%

    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.RadialGradient(SC_W*0.5, 0, 0, SC_W*0.5, SC_H*0.6, SC_H).addColorStopList([
            { offset:0.00, color:"hsl(200, 20%, 25%)" },
            { offset:0.33, color:"hsl(240, 10%,  5%)" },
            { offset:0.66, color:"hsl(280, 10%,  5%)" },
            { offset:1.00, color:"hsl(340, 10%,  5%)" },
        ]).toStyle();
    }

});

})();
