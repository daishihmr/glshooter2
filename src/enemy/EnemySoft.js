(function() {

/**
 * 敵の行動パターン
 * @class
 */
gls2.EnemySoft = tm.createClass(
/** @lends {gls2.EnemySoft.prototype} */
{
    /** @type {gls2.Enemy} */
    enemy: null,
    /** @type {gls2.Player} */
    player: null,
    entered: false,
    /**
     * @constructs
     */
    init: function(enemy) {
        this.enemy = enemy;
        this.player = enemy.gameScene.player;
        this.entered = false;
    },
    setup: function() {
    },
    onLaunch: function() {
    },
    onCompleteAttack: function() {
    },
    update: function() {
    },
    checkEntered: function() {
        if (this.isInScreen()) {
            this.entered = true;
        }
    },
    isInScreen: function() {
        var rad = this.enemy.radius;
        return -rad <= this.enemy.x && this.enemy.x < SC_W+rad && -rad <= this.enemy.y && this.enemy.y < SC_H+rad;
    }
});

var attack = function(enemy, danmakuName) {
    var ticker = gls2.Danmaku[danmakuName].createTicker();
    enemy.addEventListener("enterframe", ticker);
    enemy.addEventListener("completeattack", function() {
        this.removeEventListener("enterframe", ticker);
    });
};

var stopAttack = function(enemy) {
    var listeners = [].concat(enemy._listeners["enterframe"]);
    if (listeners) {
        for (var i = 0, len = listeners.length; i < len; i++) {
            if (listeners[i] && listeners[i].isDanmaku) {
                enemy.removeEventListener("enterframe", listeners[i]);
            }
        }
    }
};

/**
 * heri1a.
 * まっすぐ降りてきて上方で停止後、弾を撃って上へ離脱.
 * 出現位置はy=-100
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.Heri1a = tm.createClass(
/** @lends {gls2.EnemySoft.Heri1a.prototype} */
{
    superClass: gls2.EnemySoft,
    /**
     * @constructs
     */
    init: function(enemy) {
        this.superInit(enemy);
    },
    onLaunch: function() {
        var y = gls2.math.randf(SC_H*0.1, SC_H*0.3);
        this.enemy.tweener
            .clear()
            .wait(gls2.math.rand(10, 500))
            .move(this.enemy.x, y, y*7, "easeOutQuad")
            .call(function() {
                attack(this.enemy, "basic0-0");
            }.bind(this));
    },
    onCompleteAttack: function() {
        this.enemy.tweener
            .clear()
            .wait(1000)
            .moveBy(0, -SC_H, 2000, "easeInQuad")
            .call(function() {
                this.enemy.remove();
            }.bind(this));
    },
});

/**
 * heri1b.
 * まっすぐ降りてきて中程で停止後、弾を撃って上へ離脱.
 * 出現位置はy=-100
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.Heri1b = tm.createClass(
/** @lends {gls2.EnemySoft.Heri1b.prototype} */
{
    superClass: gls2.EnemySoft,
    /**
     * @constructs
     */
    init: function(enemy) {
        this.superInit(enemy);
    },
    onLaunch: function() {
        var y = gls2.math.randf(SC_H*0.3, SC_H*0.5);
        this.enemy.tweener
            .clear()
            .wait(gls2.math.rand(10, 500))
            .move(this.enemy.x, y, y*7, "easeOutQuad")
            .call(function() {
                attack(this.enemy, "basic0-0");
            }.bind(this));
    },
    onCompleteAttack: function() {
        this.enemy.tweener
            .clear()
            .wait(1000)
            .moveBy(0, -SC_H, 2000, "easeInQuad")
            .call(function() {
                this.enemy.remove();
            }.bind(this));
    },
});

/**
 * heri2.
 * 自機に向かって突っ込んでくる.
 * 出現位置はy=-100
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.Heri2 = tm.createClass(
/** @lends {gls2.EnemySoft.Heri2.prototype} */
{
    superClass: gls2.EnemySoft,
    /**
     * @constructs
     */
    init: function(enemy) {
        this.superInit(enemy);
        this.angle = Math.PI * 0.5;
        this.startFrame = gls2.math.rand(0, 60);
        this.speed = 0;
    },
    update: function() {
        this.checkEntered();

        var frame = this.enemy.frame;
        if (frame === this.startFrame) {
            this.speed = 8;
        } else if (frame === this.startFrame + 10) {
            attack(this.enemy, "basic1-0");
        } else if (this.startFrame < frame && this.enemy.y < this.player.y) {
            var a = Math.atan2(this.player.y-this.enemy.y, this.player.x-this.enemy.x);
            this.angle += (a < this.angle) ? -0.02 : 0.02;
            this.angle = gls2.math.clamp(this.angle, 0.5, Math.PI-0.5);
        }

        this.enemy.x += Math.cos(this.angle) * this.speed;
        this.enemy.y += Math.sin(this.angle) * this.speed;

        var rad = this.enemy.radius;
        if (!this.isInScreen() && this.entered) {
            this.enemy.remove();
        }

        if (gls2.distanceSq(this.enemy, this.player) < 300*300) {
            stopAttack(this.enemy);
        }
    },
});

/**
 * 右へ直進する戦車
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.TankR = tm.createClass(
/** @lends {gls2.EnemySoft.Tank1.prototype} */
{
    superClass: gls2.EnemySoft,
    /** @constructs */
    init: function(enemy) {
        this.superInit(enemy);
        attack(this.enemy, "basic2-0");
        this.enemy.direction = 0;
    },
    update: function() {
        this.checkEntered();
        this.enemy.x += 1;
        if (this.entered && !this.isInScreen()) {
            this.enemy.remove();
        }
    },
});

/**
 * 右下へ直進する戦車
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.TankRD = tm.createClass(
/** @lends {gls2.EnemySoft.Tank1.prototype} */
{
    superClass: gls2.EnemySoft,
    /** @constructs */
    init: function(enemy) {
        this.superInit(enemy);
        attack(this.enemy, "basic2-0");
        this.enemy.direction = 1;
    },
    update: function() {
        this.checkEntered();
        this.enemy.x += 0.7;
        this.enemy.y += 0.7;
        if (this.entered && !this.isInScreen()) {
            this.enemy.remove();
        }
    },
});

/**
 * 下へ直進する戦車
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.TankD = tm.createClass(
/** @lends {gls2.EnemySoft.Tank1.prototype} */
{
    superClass: gls2.EnemySoft,
    /** @constructs */
    init: function(enemy) {
        this.superInit(enemy);
        attack(this.enemy, "basic2-0");
        this.enemy.direction = 2;
    },
    update: function() {
        this.checkEntered();
        this.enemy.y += 1;
        if (this.entered && !this.isInScreen()) {
            this.enemy.remove();
        }
    },
});

/**
 * 左下へ直進する戦車
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.TankLD = tm.createClass(
/** @lends {gls2.EnemySoft.Tank1.prototype} */
{
    superClass: gls2.EnemySoft,
    /** @constructs */
    init: function(enemy) {
        this.superInit(enemy);
        attack(this.enemy, "basic2-0");
        this.enemy.direction = 3;
    },
    update: function() {
        this.checkEntered();
        this.enemy.x -= 0.7;
        this.enemy.y += 0.7;
        if (this.entered && !this.isInScreen()) {
            this.enemy.remove();
        }
    },
});

/**
 * 左へ直進する戦車
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.TankL = tm.createClass(
/** @lends {gls2.EnemySoft.Tank1.prototype} */
{
    superClass: gls2.EnemySoft,
    /** @constructs */
    init: function(enemy) {
        this.superInit(enemy);
        attack(this.enemy, "basic2-0");
        this.enemy.direction = 4;
    },
    update: function() {
        this.checkEntered();
        this.enemy.x -= 1;
        if (this.entered && !this.isInScreen()) {
            this.enemy.remove();
        }
    },
});

})();
