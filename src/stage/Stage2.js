/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.Stage2 = tm.createClass(
/** @lends {gls2.Stage1.prototype} */
{
    superClass: gls2.Stage,

    init: function(gameScene) {
        this.superInit(gameScene);

        this.seq.add(  0, function() {
            gls2.playBgm("bgm2", true),
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 0.3;
        });

        this.seq.add(100, "itsuki-0");

        this.seq.add(200, "tank25-top");
        this.seq.add(160, "heri1-left");
        this.seq.add(100, "heri1-right");
        this.seq.add(190, "komachi2-0");
        this.seq.add( 10, "makoto-4");
        this.seq.add( 80, "komachi2-1");
        this.seq.add(600, "tank15-top");

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener
                .clear()
                .to({speed:1}, 5000, "easeInOutQuad")
                .to({direction:Math.PI}, 5000, "easeInOutQuad")
        });

        this.seq.add( 60, "heri2-center");
        this.seq.add( 60, "heri2-center");
        this.seq.add( 60, "heri2-center");
        this.seq.add( 20, "tankRD-center");
        this.seq.add( 20, "tankL-top");
        this.seq.add( 20, "yayoi-R0");
        this.seq.add(  1, "yayoi-R2");
        this.seq.add( 40, "heri2-center");
        this.seq.add( 60, "heri2-center");
        this.seq.add( 60, "heri2-center");
        this.seq.add( 60, "yayoi-R1");
        this.seq.add(  1, "heri2-center");
        this.seq.add(  1, "heri2-left");
        this.seq.add(  1, "heri2-right");
        // this.seq.add( 30, "tankL-top");
        this.seq.add( 30, "makoto-R0");

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener
                .clear()
                .to({speed:0.3}, 6000, "easeInOutQuad")
                .to({
                    direction: Math.PI*0.25,
                    speed: 1,
                }, 12000, "easeInOutQuad");
        });

        this.seq.add(600, "tank5-center");
        this.seq.add(  1, "yayoi-3");
        this.seq.add( 90, "heri2-left");
        this.seq.add(  1, "yayoi-2");
        this.seq.add( 90, "tank5-left");
        this.seq.add(  1, "yayoi-1");
        this.seq.add( 90, "heri2-left");
        this.seq.add(  1, "yayoi-0");
        this.seq.add( 90, "heri2-left");
        this.seq.add( 60, "tank5-left");

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener
                .clear()
                .to({direction:Math.PI*0.5}, 10000, "easeInOutQuad");
        });

        this.seq.add( 40, "tank5-left");
        this.seq.add( 40, "heri1-left2");
        this.seq.add( 40, "tank5-center");
        this.seq.add( 40, "heri2-right");
        this.seq.add( 40, "tank5-left");
        this.seq.add( 40, "heri2-right");
        this.seq.add( 40, "tank5-center");
        this.seq.add( 40, "heri2-right");
        this.seq.add( 40, "tank5-left");
        this.seq.add( 40, "heri1-left2");
        this.seq.add( 40, "tank5-left");
        this.seq.add( 40, "heri2-right");
        this.seq.add( 40, "tank5-center");
        this.seq.add( 40, "heri2-right");
        this.seq.add( 40, "tank5-left");
        this.seq.add( 40, "heri2-right");

        this.seq.add( 90, "makoto-4");
        this.seq.add(  1, "tsubomi-0");
        this.seq.add(  1, "tsubomi-2");

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener
                .clear()
                .to({speed:0.5}, 3000, "easeInOutQuad");
        });
        this.seq.add(400, function() {
            this.gameScene.ground.tweener
                .clear()
                .to({
                    direction: 0,
                    speed:1
                }, 5000, "easeInOutQuad");
        });

    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(130,30%,20%)" },
            { offset:1, color:"hsl(130,30%, 5%)" },
        ]).toStyle();
    },

});

})();
