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
            gls2.playBgm("bgm3", true),
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 3;
            this.gameScene.ground.tweener.clear().to({speed:10}, 4000, "easeInOutQuad");
        });

//        this.seq.add(100, "yotsuba");
        this.seq.add(100, "hoshizora_y1");
        this.seq.add( 60, "aoki-left");
        this.seq.add( 60, "aoki-right");


        this.seq.add(150, "nao2-center");
        this.seq.add( 60, "nao2-left");
        this.seq.add( 60, "nao2-right");
        for (var i = 0; i < 3; i++) {
            this.seq.add( 60, "nao1-center");
            this.seq.add( 60, "nao1-right");
            this.seq.add( 60, "nao1-left");
        }

        this.seq.add( 60, function() {
            gls2.playBgm("bgm3", true),
            this.gameScene.ground.tweener.clear().to({speed:3}, 1000, "easeInOutQuad");
        });

        this.seq.add(120, "akane-center");
        this.seq.add( 60, "aoki-left");
        this.seq.add( 60, "aoki-right");

        this.seq.add( 60, "akane-right");
        this.seq.add( 60, "aoki-left");
        this.seq.add( 60, "aoki-right");

        this.seq.add( 60, "akane-left");
        this.seq.add( 60, "aoki-left");
        this.seq.add( 60, "aoki-right");

        this.seq.add(120, "akane-center");
        this.seq.add( 60, "aoki-left");
        this.seq.add( 60, "aoki-right");

        this.seq.add(120, function() {
            this.gameScene.ground.tweener
                .clear()
                .to({speed:5}, 2000, "easeInOutQuad")
                .to({direction:Math.PI/180*90}, 3000, "easeInOutQuad")
        });

        for (var i = 0; i < 3; i++) {
            this.seq.add( 60, "nao2-center");
            this.seq.add( 60, "nao2-left");
            this.seq.add( 60, "nao2-right");
        }

        this.seq.add(100, "hoshizora_y1");
        this.seq.add(  1, "heri2-right");

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener
                .clear()
                .to({speed:4}, 2000, "easeInOutQuad")
                .to({direction:Math.PI*0.5}, 2000, "easeInOutQuad")
        });

        this.seq.add(100, "yotsuba");

        //中ボス
        this.seq.add(600, "higashi", true);

        this.seq.add(300, "nao1-left");
        for (var i = 0; i < 8; i++) {
            this.seq.add( 60, "nao1-center");
            this.seq.add( 60, "nao1-right");
            this.seq.add( 60, "nao1-left");
        }

        this.seq.add(600, function() {
            this.alartWarning(function() {
                gls2.playBgm("bgmBoss", true);
            });
        });

        this.seq.add(  1, function() {
            this.gameScene.ground.direction = Math.PI/2;
            this.gameScene.ground.tweener.clear().to({speed:-10}, 5000, "easeInOutQuad");
        });

        //ステージボス
        this.seq.add(600, "momozono");

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
