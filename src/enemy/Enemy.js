(function() {

/**
 * 敵
 * @class
 */
gls2.Enemy = tm.createClass(
/** @lends {gls2.Enemy} */
{
    superClass: tm.app.CanvasElement,
    frame: 0,
    direction: 0,
    speed: 0,
    player: null,
    gameScene: null,
    hard: null,
    soft: null,
    hp: 0,

    /**
     * @constructs
     */
    init: function(gameScene, hardClass, softClass) {
        this.superInit();
        this.frame = 0;

        this.gameScene = gameScene;
        this.player = this.gameScene.player;
        this.hard = hardClass(this);
        this.soft = softClass(this);
        this.soft.setup(this);
        this.hard.setup(this);

        if (!this.hard.isGround) {
            gls2.setShadow(this);
        }

        this.addEventListener("completeattack", function() {
            this.onCompleteAttack();
        });
        this.addEventListener("added", function() {
            activeList.push(this);
        });
        this.addEventListener("removed", function() {
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);
        });
    },
    onLaunch: function() {
        this.soft.onLaunch();
        this.hard.onLaunch();
    },
    onCompleteAttack: function() {
        this.soft.onCompleteAttack();
        this.hard.onCompleteAttack();
    },
    update: function(core) {
        this.soft.update();
        this.hard.update();
        if (this.hard.isGround) {
            this.x += core.gameScene.ground.dx;
            this.y += core.gameScene.ground.dy;
        }
        this.frame += 1;
    },
    damage: function(damagePoint) {
        if (this.x < this.radius || SC_W-this.radius < this.x || this.y < this.radius || SC_H-this.radius < this.y)
            return false;

        this.hp -= damagePoint;
        if (this.hp <= 0) {
            this.hard.destroy();

            var r = Math.rand(0, 2);
            if (r === 0) {
                this.gameScene.println("enemy destroy.");
            } else if (r === 1) {
                this.gameScene.println(this.hard.name + " destroy.");
            } else if (r === 2) {
                this.gameScene.println("ETR reaction gone.")
            }
            this.remove();
            return true;
        } else {
            return false;
        }
    },
    draw: function(canvas) {
        this.hard.draw(canvas);
    },
});
gls2.Enemy.clearAll = function() {
    var copied = [].concat(activeList);
    for (var i = 0, end = copied.length; i < end; i++) {
        copied[i].remove();
    }
};

var activeList = gls2.Enemy.activeList = [];

})();
