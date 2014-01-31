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
        this.seq.add(175, "nozomi5-2");

        this.seq.add(325, "tank5-left");
        this.seq.add( 25, "tank5-center");
        this.seq.add( 25, "heri2-left");
        this.seq.add( 25, "heri2-center");
        this.seq.add( 25, "heri2-left");
        this.seq.add( 25, "tank5-left");
        this.seq.add( 25, "tank5-center");

        this.seq.add(260, "mktn5-0");
        this.seq.add( 60, "heri1-4-left2");
        this.seq.add( 10, "heri1-4-left");
        this.seq.add( 10, "heri1-4-left2");
        this.seq.add( 10, "heri1-4-left");
        this.seq.add( 10, "heri1-4-left");
        this.seq.add( 10, "heri1-4-left2");
        this.seq.add( 10, "heri1-4-left");

        this.seq.add(300, "mktn5-1");
        this.seq.add( 60, "heri1-4-right2");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-right2");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-right2");
        this.seq.add( 10, "heri1-4-right");

        // 10%

        this.seq.add(300, "tank5-left");
        for (var i = 0; i < 2; i++) {
            this.seq.add( 33, "heri2-5-left");
            this.seq.add( 33, "heri2-5-center");
            this.seq.add( 33, "heri2-5-right");
            this.seq.add( 33, "heri2-5-left");
            this.seq.add( 33, "heri2-5-center");
            this.seq.add( 33, "heri2-5-right");
            this.seq.add(  2, "DUMMY+"+i);
        }
        this.seq.add( 25, "tank5-left");
        for (var i = 0; i < 2; i++) {
            this.seq.add( 33, "heri2-5-left");
            this.seq.add( 33, "heri2-5-center");
            this.seq.add( 33, "heri2-5-right");
            this.seq.add( 33, "heri2-5-left");
            this.seq.add( 33, "heri2-5-center");
            this.seq.add( 33, "heri2-5-right");
            this.seq.add(  2, "DUMMY+"+i);
        }
        this.seq.add( 25, "tank5-center");

        // 20%

        this.seq.add(180, "bukky-5-l");
        this.seq.add( 60, "heri1-4-center2");
        this.seq.add( 60, "heri1-4-center");
        this.seq.add(180, "bukky-5-r");
        this.seq.add( 60, "heri1-4-center2");
        this.seq.add( 60, "heri1-4-center");
        this.seq.add(180, "bukky-5-l");
        this.seq.add( 60, "heri1-4-center2");
        this.seq.add( 60, "heri1-4-center");
        this.seq.add(180, "bukky-5-r");
        this.seq.add( 60, "heri1-4-center2");
        this.seq.add( 60, "heri1-4-center");
        this.seq.add( 60, "heri1-4-center2");
        this.seq.add( 60, "heri1-4-center");

        // 40%

        this.seq.add(300, "urara5-2");
        this.seq.add(300, "urara5-3");
        this.seq.add(260, "urara5-0");
        this.seq.add(260, "urara5-1");
        this.seq.add(260, "urara5-4");
        this.seq.add(260, "urara5-5");

        this.seq.add(  1, "kanade"); // ここで出現させると中ボス戦に間に合う

        this.seq.add(200, "milk5-0");

        this.seq.add(300, "milk5-1");

        this.seq.add(200, "milk5-0");

        this.seq.add(450, "komachi5-0");
        this.seq.add( 30, "heri1-4-right2");
        this.seq.add( 30, "heri1-4-right");
        this.seq.add( 30, "heri1-4-right2");
        this.seq.add( 30, "heri1-4-right");

        this.seq.add( 80, "komachi5-2");
        this.seq.add( 30, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left");
        this.seq.add( 30, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left");

        this.seq.add( 80, "komachi5-1");
        this.seq.add( 30, "heri1-4-center2");
        this.seq.add( 30, "heri1-4-center");
        this.seq.add( 30, "heri1-4-center2");
        this.seq.add( 30, "heri1-4-center");

        this.seq.add(100, "komachi5-0");
        this.seq.add( 30, "heri1-4-right2");
        this.seq.add( 30, "heri1-4-right");
        this.seq.add( 30, "heri1-4-right2");
        this.seq.add( 30, "heri1-4-right");

        this.seq.add(120, "komachi5-2");
        this.seq.add( 30, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left");
        this.seq.add( 30, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left");

        this.seq.add(160, "komachi5-1");
        this.seq.add( 30, "heri1-4-center2");
        this.seq.add( 30, "heri1-4-center");
        this.seq.add( 30, "heri1-4-center2");
        this.seq.add( 30, "heri1-4-center");

        this.seq.add(450, "ako5-0");
        this.seq.add(250, "ako5-1");

        // 50% この辺から中ボス戦

        this.seq.add(1200, function() {});

        for (var i = 0; i < 22; i++) { // 早回しザコラッシュ
            this.seq.add( 33, "heri2-5-left");
            this.seq.add( 33, "heri2-5-center");
            this.seq.add( 33, "heri2-5-right");
            this.seq.add( 33, "heri2-5-left");
            this.seq.add( 33, "heri2-5-center");
            this.seq.add( 33, "heri2-5-right");
            this.seq.add(  2, "DUMMY+"+i);
        }

        this.seq.add(260, "urara5-0");
        this.seq.add(300, "urara5-1");
        this.seq.add(300, "urara5-2");
        this.seq.add(300, "urara5-3");
        this.seq.add(300, "urara5-4");
        this.seq.add(300, "urara5-5");

        // 60%

        this.seq.add(300, "ako5-0");

        this.seq.add(260, "komachi5-1");
        this.seq.add( 30, "heri1-4-center2");
        this.seq.add( 30, "heri1-4-center");
        this.seq.add( 30, "heri1-4-center2");
        this.seq.add( 30, "heri1-4-center");

        this.seq.add(300, "milk5-1");

        this.seq.add(160, "komachi5-1");
        this.seq.add( 30, "heri1-4-center2");
        this.seq.add( 30, "heri1-4-center");
        this.seq.add( 30, "heri1-4-center2");
        this.seq.add( 30, "heri1-4-center");

        this.seq.add(200, "mktn5-0");
        this.seq.add( 60, "heri1-4-left2");
        this.seq.add( 10, "heri1-4-left");
        this.seq.add( 10, "heri1-4-left2");
        this.seq.add( 10, "heri1-4-left");
        this.seq.add( 10, "heri1-4-left");
        this.seq.add( 10, "heri1-4-left2");
        this.seq.add( 10, "heri1-4-left");

        this.seq.add(300, "mktn5-1");
        this.seq.add( 60, "heri1-4-right2");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-right2");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-right2");
        this.seq.add( 10, "heri1-4-right");

        this.seq.add(380, "nozomi5-1");
        this.seq.add(100, "nozomi5-0");
        this.seq.add(175, "nozomi5-2");
        this.seq.add(150, "nozomi5-0");

        // 70% ここから新展開

        this.seq.add(3000, function() {});

        this.seq.add(300, function() {
            this.alartWarning(function() {
                gls2.playBgm("bgmBoss", true);
            });
        });

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener.clear().to({
                speed: 9,
            }, 2000);
        });

        this.seq.add(600, "mana");
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
