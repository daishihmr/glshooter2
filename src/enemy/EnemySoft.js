// すべてsingletonかつimmutableに実装する
(function() {

/**
 * 敵の行動パターン
 * @class
 */
gls2.EnemySoft = tm.createClass(
/** @lends {gls2.EnemySoft.prototype} */
{
    setup: function() {
    },
    onLaunch: function() {
    },
    onCompleteAttack: function() {
    },
    update: function() {
    },
});

var attack = function(enemy, danmakuName) {
    var ticker = gls2.Danmaku[danmakuName].createTicker();
    enemy.addEventListener("enterframe", ticker);
    enemy.addEventListener("completeattack", function() {
        this.removeEventListener("enterframe", ticker);
    });
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
    init: function() {
        this.superInit();
    },
    onLaunch: function() {
        var y = gls2.math.randf(SC_H*0.1, SC_H*0.3);
        this.tweener
            .clear()
            .wait(gls2.math.rand(10, 500))
            .move(this.x, y, y*7, "easeOutQuad")
            .call(function() {
                attack(this, "basic0-0");
            }.bind(this));
    },
    onCompleteAttack: function() {
        this.tweener
            .clear()
            .wait(1000)
            .moveBy(0, -SC_H, 2000, "easeInQuad")
            .call(function() {
                this.remove();
            }.bind(this));
    },
});
gls2.EnemySoft.Heri1a = gls2.EnemySoft.Heri1a();

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
    init: function() {
        this.superInit();
    },
    onLaunch: function() {
        var y = gls2.math.randf(SC_H*0.3, SC_H*0.5);
        this.tweener
            .clear()
            .wait(gls2.math.rand(10, 500))
            .move(this.x, y, y*7, "easeOutQuad")
            .call(function() {
                attack(this, "basic0-0");
            }.bind(this));
    },
    onCompleteAttack: function() {
        this.tweener
            .clear()
            .wait(1000)
            .moveBy(0, -SC_H, 2000, "easeInQuad")
            .call(function() {
                this.remove();
            }.bind(this));
    },
});
gls2.EnemySoft.Heri1b = gls2.EnemySoft.Heri1b();

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
    init: function() {
        this.superInit();
    },
    setup: function() {
        this.angle = Math.PI * 0.5;
        this.startFrame = gls2.math.rand(0, 60);
        this.speed = 0;
    },
    update: function() {
        if (this.age === this.startFrame) {
            this.speed = 8;
        } else if (this.age === this.startFrame + 10) {
            attack(this, "basic1-0");
        } else if (this.startFrame < this.age && this.y < this.player.y) {
            var a = Math.atan2(this.player.y-this.y, this.player.x-this.x);
            this.angle += (a < this.angle) ? -0.02 : 0.02;
            this.angle = gls2.math.clamp(this.angle, 0.5, Math.PI-0.5);
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

        var rad = this.radius;
        if (!this.isInScreen() && this.entered) {
            this.remove();
        }

        if (gls2.distanceSq(this, this.player) < 300*300 || this.y > this.player.y) {
            this.enableFire = false;
        }
    },
});
gls2.EnemySoft.Heri2 = gls2.EnemySoft.Heri2();

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
    init: function() {
        this.superInit();
    },
    setup: function() {
        attack(this, "basic2-0");
        this.dir = 0;
    },
    update: function() {
        this.x += 1;
        if (this.entered && !this.isInScreen()) {
            this.remove();
        }
    },
});
gls2.EnemySoft.TankR = gls2.EnemySoft.TankR();

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
    init: function() {
        this.superInit();
    },
    setup: function() {
        attack(this, "basic2-0");
        this.dir = 1;
    },
    update: function() {
        this.x += 0.7;
        this.y += 0.7;
        if (this.entered && !this.isInScreen()) {
            this.remove();
        }
    },
});
gls2.EnemySoft.TankRD = gls2.EnemySoft.TankRD();

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
    init: function() {
        this.superInit();
    },
    setup: function() {
        attack(this, "basic2-0");
        this.dir = 2;
    },
    update: function() {
        this.y += 1;
        if (this.entered && !this.isInScreen()) {
            this.remove();
        }
    },
});
gls2.EnemySoft.TankD = gls2.EnemySoft.TankD();

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
    init: function() {
        this.superInit();
    },
    setup: function() {
        attack(this, "basic2-0");
        this.dir = 3;
    },
    update: function() {
        this.x -= 0.7;
        this.y += 0.7;
        if (this.entered && !this.isInScreen()) {
            this.remove();
        }
    },
});
gls2.EnemySoft.TankLD = gls2.EnemySoft.TankLD();

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
    init: function() {
        this.superInit();
    },
    setup: function() {
        attack(this, "basic2-0");
        this.dir = 4;
    },
    update: function() {
        this.x -= 1;
        if (this.entered && !this.isInScreen()) {
            this.remove();
        }
    },
});
gls2.EnemySoft.TankL = gls2.EnemySoft.TankL();

})();
