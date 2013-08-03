(function() {

/**
 * 敵
 * @class
 */
gls2.Enemy = tm.createClass(
/** @lends {gls2.Enemy.prototype} */
{
    superClass: tm.app.CanvasElement,
    age: 0,
    direction: 0,
    speed: 0,
    player: null,
    gameScene: null,
    stage: null,
    hard: null,
    soft: null,
    hp: 0,
    enableFire: true,
    isGround: false,

    score: 0,

    /** 出現してから一度でも可視範囲に入ったか */
    entered: false,

    velocity: null,

    /**
     * @constructs
     */
    init: function() {
        this.superInit();

        this.addEventListener("completeattack", function() {
            this.onCompleteAttack();
        });
        this.addEventListener("added", function() {
            this.age = 0;
            this.entered = false;
            this.enableFire = true;
            activeList.push(this);
        });
        this.addEventListener("removed", function() {
            var listeners = [].concat(this._listeners["enterframe"]);
            if (listeners) {
                for (var i = 0, len = listeners.length; i < len; i++) {
                    if (listeners[i] && listeners[i].isDanmaku) {
                        this.removeEventListener("enterframe", listeners[i]);
                    }
                }
            }

            this.tweener.clear();

            this.scaleX = this.scaleY = 1;
            this.isGround = false;

            enemyPool.push(this);
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);
        });
    },
    setup: function(gameScene, stage, software, hardware) {
        this.gameScene = gameScene;
        this.player = gameScene.player;
        this.stage = stage;
        this.soft = software;
        this.hard = hardware;

        this.score = 100;

        this.soft.setup.apply(this);
        this.hard.setup.apply(this);

        if (this.isGround) {
            this.altitude = 1;
        } else {
            this.altitude = 10;
        }

        this.velocity = {x:0, y:0};

        return this;
    },
    onLaunch: function() {
        this.soft.onLaunch.apply(this);
        this.hard.onLaunch.apply(this);
    },
    onCompleteAttack: function() {
        this.soft.onCompleteAttack.apply(this);
        this.hard.onCompleteAttack.apply(this);
    },
    update: function() {
        if (0 <= this.x - this.boundingWidthLeft && this.x + this.boundingWidthRight < SC_W
            && 0 <= this.y - this.boundingHeightTop && this.y + this.boundingHeightBottom < SC_H) {
            this.entered = true;
        }

        var before = {
            x: this.x,
            y: this.y,
        };

        this.soft.update.apply(this);
        this.hard.update.apply(this);
        if (this.isGround) {
            this.x += this.gameScene.ground.dx;
            this.y += this.gameScene.ground.dy;
        }
        this.age += 1;

        this.velocity.x = this.x - before.x;
        this.velocity.y = this.y - before.y;
    },
    damage: function(damagePoint) {
        // 可視範囲に入ったことのない敵はダメージを受けない
        if (!this.entered) return false;

        this.hp -= damagePoint;
        if (this.hp <= 0) {
            this.hard.destroy.apply(this);

            var r = gls2.math.rand(0, 2);
            if (r === 0) {
                this.gameScene.println("enemy destroy.");
            } else if (r === 1) {
                this.gameScene.println(this.name + " destroy.");
            } else if (r === 2) {
                this.gameScene.println("ETR reaction gone.")
            }
            this.remove();

            this.stage.onDestroyEnemy(this);

            return true;
        } else {
            return false;
        }
    },

    draw: function(canvas) {
        this.hard.draw.call(this, canvas);
    },

    isInScreen: function() {
        return 0 <= this.x + this.width/2 && this.x - this.width/2 < SC_W
            && 0 <= this.y + this.height/2 && this.y - this.height/2 < SC_H;
    },

    onfire: function() {
        return this.enableFire;
    },

});
gls2.Enemy.clearAll = function() {
    var copied = [].concat(activeList);
    for (var i = 0, end = copied.length; i < end; i++) {
        copied[i].remove();
    }
};

var activeList = gls2.Enemy.activeList = [];
var enemyPool = gls2.Enemy.pool = [];
for (var i = 0; i < 256; i++) {
    enemyPool.push(gls2.Enemy());
}

})();
