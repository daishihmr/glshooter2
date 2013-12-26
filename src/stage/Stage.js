/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 */
gls2.Stage = tm.createClass(
/** @lends {gls2.Stage.prototype} */
{

    player: null,
    gameScene: null,

    /** @type {gls2.StageSequencer} */
    seq: null,

    frame: 0,

    init: function(gameScene) {
        var scene = this.gameScene = gameScene;
        this.player = gameScene.player;

        this.setupBackground();

        this.seq = gls2.StageSequencer();

        this.frame = 0;
    },

    setupBackground: function() {
    },

    update: function() {
        this.executeFrame(this.frame);
        this.frame += 1;
    },

    executeFrame: function(frame) {
        var data = this.seq.get(frame);
        if (data === null) {
            return;
        } else if (typeof(data.value) === "function") {
            data.value.call(this);
        } else if (gls2.EnemyUnit[data.value] !== undefined){
            var unit = gls2.EnemyUnit[data.value];
            if (unit !== null) {
                if (unit[0].boss === true) {
                    this.launchEnemy(unit[0]);
                } else {
                    for (var i = 0; i < unit.length; i++) {
                        var enemy = this.launchEnemy(unit[i]);
                        if (data.stop) {
                            enemy.addEventListener("enemyconsumed", function() {
                                this.seq.stoping = false;
                            }.bind(this));
                        }
                    }
                }
            }
        }
    },

    launchEnemy: function(data) {
        this.gameScene.enemyCount += 1;
        var enemy = data.hard(this.gameScene, data.soft)
            .setPosition(data.x, data.y)
            .addChildTo(this.gameScene)
            .onLaunch();
        enemy.stage = this;
        return enemy;
    },

    alartWarning: function(callback) {
        // WARNING表示
        gls2.fadeOutBgm();

        this.gameScene.demoPlaying = true;
        var warn = tm.app.Object2D().setPosition(SC_W*0.5, SC_H*0.5);
        for (var i = -4; i <= 4; i++) {
            for (var j = -4; j <= 4; j++) {
                var label = tm.display.Label("WARNING!!", 75)
                    .setFillStyle(
                        tm.graphics.LinearGradient(0,0,0,20).addColorStopList([
                            { offset: 0.0, color: "hsla( 0, 100%, 50%, 0.07)" },
                            { offset: 1.0, color: "hsla(50, 100%, 50%, 0.07)" },
                        ]).toStyle()
                    )
                    .setBlendMode("lighter")
                    .setPosition(i, j);
                label.age = 0;
                label.update = function() {
                    this.alpha = Math.cos(this.age * 0.08) * -0.5 + 0.5;
                    this.age += 1;
                };
                label.addChildTo(warn);
            }
        }

        warn.tweener
            .wait(3000)
            .call(callback)
            .wait(2000)
            .call(function() {
                this.execChildren(function() {
                    this.update = function() {};
                    this.tweener.clear().fadeOut(500);
                });
            }.bind(warn))
            .wait(1000)
            .call(function() {
                this.remove();
            }.bind(warn));
        warn.addChildTo(this.gameScene.effectLayer1);

        gls2.playSound("warning");
        gls2.playSound("voWarning");
    },

});

/**
 * @static
 */
gls2.Stage.create = function(gameScene, stageNumber) {
    return gls2.Stage2(gameScene); // TODO あとで消す

    switch (stageNumber) {
        case 0:  return gls2.Stage1(gameScene);
        case 1:  return gls2.Stage2(gameScene);
        case 3:  return gls2.Stage4(gameScene);
        default:
            throw new Error("stageNumber = " + stageNumber);
    }
};

/**
 * @class
 */
gls2.StageSequencer = tm.createClass(
/** @lengs {gls2.StageSequencer.prototype} */
{
    index: 0,
    data: null,

    /** 中ボス戦闘中 */
    stoping: false,

    init: function() {
        this.data = {};
    },

    add: function(count, value, stop) {
        this.index += count;
        this.data[this.index] = {
            stop: stop,
            value: value
        };
    },

    get: function(frame) {
        var data = this.data[frame];
        if (data === undefined) return null;
        if (data.stop === true) {
            this.stoping = true;
            return data;
        } else if (!this.stoping) {
            return data;
        } else {
            return null;
        }
    },
});

})();
