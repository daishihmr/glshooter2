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

        this.assets = {
            "bgm4": "assets2/nc67880.mp3",
        };

        this.seq.add(  0, function() {
            gls2.playBgm("bgm4", true),
            this.gameScene.ground.direction = Math.PI*0.5;
            this.gameScene.ground.speed = 1;
        });
        if(gls2.core.mode === 3) {
          gls2.core.mode = 1;
          this.addBoss();
          return this;
        }

        // 0%

        this.seq.add(200, "tsukikage-r");
        this.seq.add(100, "tsukikage-l");

        this.seq.add(170, "bukky-4-r");

        this.seq.add(150, "heri1-4-left");
        this.seq.add( 10, "heri1-4-center");
        this.seq.add( 10, "heri1-4-left");
        this.seq.add( 10, "heri1-4-center");

        this.seq.add(100, "komachi4-0");

        this.seq.add(120, "heri1-4-right");
        this.seq.add( 10, "heri1-4-center");
        this.seq.add( 10, "heri1-4-right");
        this.seq.add( 10, "heri1-4-center");

        this.seq.add( 80, "bukky-4-l");
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
            }, 9000);
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

        this.seq.add(  1, function() {
            this.gameScene.ground.speed = 3;
            this.gameScene.ground.tweener.clear().to({
                speed: 0.3,
            }, 5000);
        });

        this.seq.add(180, "karen-3-2");
        this.seq.add(300, "karen-3-8");
        this.seq.add( 75, "heri1-4-center");
        this.seq.add( 25, "heri1-4-right");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-right");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-right");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-right");
        this.seq.add(100, "karen-3-2");
        this.seq.add( 75, "heri1-4-center");
        this.seq.add( 25, "heri1-4-left");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-left");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-left");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-left");
        this.seq.add(100, "karen-3-8");
        this.seq.add( 75, "heri1-4-center");
        this.seq.add( 25, "heri1-4-right");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-right");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-right");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-right");
        this.seq.add(100, "karen-3-2");
        this.seq.add( 75, "heri1-4-center");
        this.seq.add( 25, "heri1-4-left");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-left");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-left");
        this.seq.add( 25, "heri1-4-center");
        this.seq.add( 25, "heri1-4-left");
        this.seq.add(200, "karen-3-8");
        this.seq.add( 60, "karen-3-2");
        this.seq.add( 52, "heri1-4-left");
        this.seq.add( 12, "heri1-4-right");
        this.seq.add( 12, "heri1-4-left");
        this.seq.add( 12, "heri1-4-right");
        this.seq.add( 12, "heri1-4-left");
        this.seq.add( 12, "heri1-4-right");
        this.seq.add( 12, "heri1-4-left");
        this.seq.add( 12, "heri1-4-right");
        this.seq.add( 12, "heri1-4-left2");
        this.seq.add( 12, "heri1-4-right2");
        this.seq.add( 12, "heri1-4-left2");
        this.seq.add( 12, "heri1-4-right2");
        this.seq.add( 12, "heri1-4-left2");
        this.seq.add( 12, "heri1-4-right2");
        this.seq.add( 12, "heri1-4-left2");
        this.seq.add( 12, "heri1-4-right2");
        this.seq.add(102, "heri1-4-left2");
        this.seq.add( 12, "heri1-4-right2");
        this.seq.add( 12, "heri1-4-left2");
        this.seq.add( 12, "heri1-4-right2");
        this.seq.add( 12, "heri1-4-left2");
        this.seq.add( 12, "heri1-4-right2");
        this.seq.add( 12, "heri1-4-left2");
        this.seq.add( 12, "heri1-4-right2");

        this.seq.add(400, function() {
            this.gameScene.ground.tweener.clear().to({
                speed: 3,
            }, 5000);
        });

        // 50%

        this.seq.add(250, function() {
            this.gameScene.ground.direction = Math.PI * 0.5;
            this.gameScene.ground.tweener.clear().to({
                speed: 9,
            }, 2000);
        });
        this.seq.add(  1, "rikka", true);

        this.seq.add(1200, function() {});

        for (var i = 0; i < 9; i++) {
            this.seq.add( 50, i%2===0 ? "komachi4-0" : "komachi4-1");
            this.seq.add( 35, "heri1-4-left2");
            this.seq.add( 35, "heri1-4-center2");
            this.seq.add( 35, "heri1-4-right2");
            this.seq.add( 35, "heri1-4-left");
            this.seq.add( 35, "heri1-4-center");
            this.seq.add( 35, "heri1-4-right");
        }

        // 75%

        this.seq.add( 80, "erika");

        this.seq.add(  1, function() {
            this.gameScene.ground.tweener.clear().to({
                speed: 0.6
            }, 3000);
        });

        this.seq.add(200, "nozomi4-0");
        this.seq.add( 20, "tankRD-center");
        this.seq.add( 90, "tankRD-center");
        this.seq.add( 90, "tankRD-center");
        this.seq.add(200, "nozomi4-2");
        this.seq.add( 90, "tankRD-center");

        this.seq.add(300, "bukky-4-l");
        this.seq.add( 90, "bukky-4-r");

        this.seq.add(100, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left1");
        this.seq.add(100, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left1");
        this.seq.add(100, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left1");

        this.seq.add(150, "tsukikage-r");
        this.seq.add( 15, "tsukikage-l");
        this.seq.add(  1, "heri2-center");
        this.seq.add(  1, "heri2-right");
        this.seq.add(  1, "heri2-left");
        this.seq.add( 60, "heri2-center");
        this.seq.add( 60, "heri2-right");
        this.seq.add( 60, "heri2-left");

        this.seq.add(250, "nozomi4-0");
        this.seq.add(100, "nozomi4-2");
        this.seq.add(100, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left1");
        this.seq.add(100, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left1");
        this.seq.add(100, "heri1-4-left2");
        this.seq.add( 30, "heri1-4-left1");

        this.seq.add( 80, "erika");

        // 100% boss

        this.addBoss();


    },

    addBoss: function(){
      this.seq.add(200, function() {
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
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(30,30%,10%)" },
            { offset:1, color:"hsl(30,50%, 2%)" },
        ]).toStyle();
    }

});

})();
