/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.Stage3 = tm.createClass(
/** @lends {gls2.Stage1.prototype} */
{
    superClass: gls2.Stage,

    init: function(gameScene) {
        this.superInit(gameScene);

        this.seq.add(  0, function() {
            gls2.playBgm("bgm1", true),
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 8;
            this.gameScene.ground.tweener.clear().to({speed:1}, 4000, "easeInOutQuad");
        });

        this.seq.add(100, "akane-1");
        this.seq.add(  1, "heri2-center");

        this.seq.add(200, "akane-2");
        this.seq.add(  1, "heri2-left");

        this.seq.add(200, "akane-3");
        this.seq.add(  1, "heri2-right");

        this.seq.add(100, "hoshizora_y-1");
        this.seq.add(  1, "heri2-right");

        this.seq.add(200, "tankRD-center");
        this.seq.add(200, "tankRD-left");
        this.seq.add(200, "tankRD-right");
        this.seq.add(200, "tankRD-center");

        this.seq.add(300, "hoshizora_y-2");

        this.seq.add( 20, "yayoi-R0");
        this.seq.add(  1, "yayoi-R2");


        this.seq.add(600, function() {
            this.alartWarning(function() {
                gls2.playBgm("bgmBoss", true);
            });
        });

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener.clear().to({speed:-10}, 5000, "easeInOutQuad");
        });

        //ステージボス
        this.seq.add(600, "misumi");

        // if (DEBUG) {
        //     this.seq.add(600, function() {
        //         this.gameScene.ground.speed = 1;
        //         this.frame = 0;
        //     });
        // }

    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(30,50%,30%)" },
            { offset:1, color:"hsl(30,50%,15%)" },
        ]).toStyle();
    },

});

})();
