(function() {

/**
 * 敵
 */
gls2.Enemy = tm.createClass({
    superClass: tm.app.CanvasElement,
    age: 0,
    direction: 0,
    speed: 0,
    gameScene: null,
    hard: null,
    soft: null,
    player: null,
    hp: 0,
    init: function(gameScene, hardName, softName) {
        this.superInit();
        this.addEventListener("added", function() {
            this.age = 0;
        });

        this.gameScene = gameScene;
        this.hard = gls2.EnemyHard[hardName](this);
        this.soft = gls2.EnemySoft[softName](this);
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
        this.age++;
        this.soft.update();
        this.hard.update();
        if (this.hard.isGround) {
            this.x += core.gameScene.ground.dx;
            this.y += core.gameScene.ground.dy;
        }
    },
    damage: function(damagePoint) {
        if (this.x < this.radius || SC_W-this.radius < this.x || this.y < this.radius || SC_H-this.radius < this.y)
            return false;

        this.hp -= damagePoint;
        if (this.hp <= 0) {
            this.hard.destroy();
            this.remove();
            return true;
        } else {
            return false;
        }
    },
    draw: function(canvas) {
        this.hard.draw(canvas);
    },
    setPlayer: function(player) {
        this.player = player;
        return this;
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
