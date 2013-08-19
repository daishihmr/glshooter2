/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * 敵
 * @class
 */
gls2.Enemy = tm.createClass(
/** @lends {gls2.Enemy.prototype} */
{
    superClass: tm.app.CanvasElement,

    frame: 0,
    direction: 0,
    speed: 0,

    /** @type {gls2.Player} */
    player: null,
    /** @type {gls2.GameScene} */
    gameScene: null,
    /** @type {gls2.EnemyHard} */
    hard: null,
    /** @type {gls2.EnemySoft} */
    soft: null,

    hp: 0,
    score: 0,
    isGround: false,
    erase: false,
    star: 1,

    isBoss: false,

    enableFire: true,

    /** 出現してから一度でも可視範囲に入ったか */
    entered: false,

    velocity: null,

    /**
     * @constructs
     */
    init: function(gameScene, software, hardware) {
        this.superInit();

        this.addEventListener("completeattack", function() {
            this.onCompleteAttack();
        });
        this.addEventListener("added", function() {
            this.frame = 0;
            this.entered = false;
            activeList.push(this);
        });
        this.addEventListener("removed", function() {
            this.dispatchEvent(tm.event.Event("enemyconsumed"));
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);
        });

        this.enableFire = true;

        this.gameScene = gameScene;
        this.player = gameScene.player;
        this.soft = software;
        this.hard = hardware;

        this.score = 100;
        this.erase = false;

        this.soft.setup.apply(this);
        this.hard.setup.apply(this);

        if (this.isGround) {
            this.altitude = 1;
        } else {
            this.altitude = 10;
        }

        this.velocity = {x:0, y:0};
    },
    onLaunch: function() {
        this.soft.onLaunch.apply(this);
        this.hard.onLaunch.apply(this);

        return this;
    },
    onCompleteAttack: function() {
        this.soft.onCompleteAttack.apply(this);
        this.hard.onCompleteAttack.apply(this);
    },
    update: function() {
        if (this.entered === false
            && 0 <= this.x - this.boundingWidthLeft && this.x + this.boundingWidthRight < SC_W
            && 0 <= this.y - this.boundingHeightTop && this.y + this.boundingHeightBottom < SC_H) {
            this.entered = true;
            this.soft.onenter.apply(this);
            this.hard.onenter.apply(this);
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

        if (this.entered) this.frame += 1;

        this.velocity.x = this.x - before.x;
        this.velocity.y = this.y - before.y;
    },
    damage: function(damagePoint) {
        // 可視範囲に入ったことのない敵はダメージを受けない
        if (!this.entered) return false;

        this.hp -= damagePoint;
        if (this.hp <= 0) {

            var r = gls2.math.randf(0, 5);
            if (r < 2) {
                this.gameScene.println("enemy destroy.");
            } else if (r < 4) {
                this.gameScene.println(this.name + " destroy.");
            } else {
                this.gameScene.println("ETR reaction gone.")
            }

            if (this.erase) {
                gls2.Danmaku.erase(true, this.gameScene.isHyperMode);
            }

            this.soft.destroy.apply(this);
            this.hard.destroy.apply(this);

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

})();
