/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {gls2.Stage}
 */
gls2.TutorialStage = tm.createClass(
/** @lends {gls2.TutorialStage.prototype} */
{
    superClass: gls2.Stage,

    init: function(gameScene) {
        this.superInit(gameScene);

        var key = gameScene.scoreLabel.scoreLabelElement.key;
        var player = gameScene.player;

        this.seq.add(  0, function() {
            gameScene.ground.direction = Math.PI*0.5;
            gameScene.ground.speed = 1;
        });

        this.seq.add(400, function() {
            key["left"] = true;
            player.on("enterframe", function() {
                this.x -= this.speed;
            });
        });
        this.seq.add(600, function() {
            key["left"] = false;
        });
    },

    setupBackground: function() {
        this.gameScene.ground.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
            { offset:0, color:"hsl(230,50%,20%)" },
            { offset:1, color:"hsl(230,50%,10%)" },
        ]).toStyle();
    }
});

})();
