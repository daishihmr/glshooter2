/*
 * License
 * http://daishihmr.mit-license.org/
 */

// すべてsingletonかつimmutableに実装する
(function() {

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
    onenter: function() {
    },
    destroy: function() {
        stopAttack(this);
    },
});

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
    /**
     * @this {gls2.Enemy}
     */
    onLaunch: function() {
        var y = gls2.FixedRandom.randf(SC_H*0.1, SC_H*0.3); // TODO 固定乱数化
        this.tweener
            .clear()
            .wait(gls2.FixedRandom.rand(10, 500)) // TODO 固定乱数化
            .move(this.x, y, y*7, "easeOutQuad")
            .call(function() {
                attack(this, "basic0-0");
            }.bind(this));
    },
    /**
     * @this {gls2.Enemy}
     */
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
    /**
     * @this {gls2.Enemy}
     */
    onLaunch: function() {
        var y = gls2.FixedRandom.randf(SC_H*0.3, SC_H*0.5); // TODO 固定乱数化
        this.tweener
            .clear()
            .wait(gls2.FixedRandom.rand(10, 500)) // TODO 固定乱数化
            .move(this.x, y, y*7, "easeOutQuad")
            .call(function() {
                attack(this, "basic0-0");
            }.bind(this));
    },
    /**
     * @this {gls2.Enemy}
     */
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
 * heri1b.
 * まっすぐ降りてきて下方で停止後、弾を撃って上へ離脱.
 * 出現位置はy=-100
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.Heri1c = tm.createClass(
/** @lends {gls2.EnemySoft.Heri1c.prototype} */
{
    superClass: gls2.EnemySoft,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
    },
    /**
     * @this {gls2.Enemy}
     */
    onLaunch: function() {
        var y = gls2.FixedRandom.randf(SC_H*0.7, SC_H*0.9); // TODO 固定乱数化
        this.tweener
            .clear()
            .wait(gls2.FixedRandom.rand(10, 500)) // TODO 固定乱数化
            .move(this.x, y, y*7, "easeOutQuad")
            .call(function() {
                attack(this, "basic0-0");
            }.bind(this));
    },
    /**
     * @this {gls2.Enemy}
     */
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
gls2.EnemySoft.Heri1c = gls2.EnemySoft.Heri1c();

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
    /**
     * @this {gls2.Enemy}
     */
    setup: function() {
        this.angle = Math.PI * 0.5;
        this.startFrame = gls2.FixedRandom.rand(0, 60); // TODO 固定乱数化
        this.speed = 0;
    },
    /**
     * @this {gls2.Enemy}
     */
    update: function() {
        if (this.frame === this.startFrame) {
            this.speed = 8;
        } else if (this.frame === this.startFrame + 10) {
            attack(this, "basic1-0");
        } else if (this.startFrame < this.frame && this.y < this.player.y) {
            var a = Math.atan2(this.player.y-this.y, this.player.x-this.x);
            this.angle += (a < this.angle) ? -0.02 : 0.02;
            this.angle = gls2.math.clamp(this.angle, 0.5, Math.PI-0.5);
        }

        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;

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
 * @class
 * @extends {gls2.EnemySoft}
 */
var _Tank = tm.createClass(
/** @lends {_Tank.prototype} */
{
    superClass: gls2.EnemySoft,
    /**
     * @constructs
     * @param {number} speed
     * @param {number} dir
     * @param {Object} changes 進行方向・速度の変更
     */
    init: function(speed, dir, changes) {
        this.superInit();
        this.initialSpeed = speed;
        this.initialDir = dir;
        this.changes = changes;
    },
    /**
     * @this {gls2.Enemy}
     */
    setup: function() {
        this.speed = this.soft.initialSpeed;
        this.baseDir = this.soft.initialDir;
        this.cannonDir = 0;
    },
    /**
     * @this {gls2.Enemy}
     */
    onenter: function() {
        attack(this, "basic2-0");
    },
    /**
     * @this {gls2.Enemy}
     */
    update: function() {
        this.x += Math.cos(this.baseDir) * this.speed;
        this.y += Math.sin(this.baseDir) * this.speed;
        if (this.entered && !this.isInScreen()) {
            this.remove();
        }

        this.cannonDir = Math.atan2(this.player.y-this.y, this.player.x-this.x);
        while(this.cannonDir < 0) {
            this.cannonDir += Math.PI*2;
        }
        while(Math.PI*2 <= this.cannonDir) {
            this.cannonDir -= Math.PI*2;
        }

        this.enableFire = this.y < this.player.y;

        if (this.soft.changes) {
            for (var i = 0; i < this.soft.changes.length; i++) {
                var c = this.soft.changes[i];
                if (c.frame === this.frame) {
                    this.tweener.to({
                        baseDir: c.dir,
                        speed: c.speed,
                    }, 500);
                }
            }
        }
    },
});

/**
 * 右下へ直進する戦車
 */
gls2.EnemySoft.TankRD = _Tank(1.0, Math.PI*0.25);

/**
 * 左上へ直進する戦車
 */
gls2.EnemySoft.TankLU = _Tank(1.0, Math.PI*-1.75);

/**
 * 右から現れる戦車
 */
gls2.EnemySoft.TankL = _Tank(1.0, Math.PI, [
    {
        frame: 200,
        dir: Math.PI * 1.5,
        speed: 1.0,
    },
]);

/**
 * 固定砲台1
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.Cannon = tm.createClass(
/** @lends {gls2.EnemySoft.Cannon.prototype} */
{
    superClass: gls2.EnemySoft,
    /** @constructs */
    init: function() {
        this.superInit();
    },
    /**
     * @this {gls2.Enemy}
     */
    setup: function() {
        this.speed = 1.0;
        this.dir = Math.PI;
    },
    /**
     * @this {gls2.Enemy}
     */
    onenter: function() {
        attack(this, "basic3-0");
    },
    /**
     * @this {gls2.Enemy}
     */
    update: function() {
        if (this.entered && !this.isInScreen()) {
            this.remove();
        }

        this.enableFire = this.y < this.player.y;
    },
});
gls2.EnemySoft.Cannon = gls2.EnemySoft.Cannon();

/**
 * 中型戦闘機
 *
 * 上から出現、画面上部まで降りてきた後、ゆっくり下へ移動していく
 * 
 * @class
 * @extends {gls2.EnemySoft}
 */
var _MiddleFighterCommon = tm.createClass(
/** @lends {_MiddleFighterCommon.prototype} */
{
    superClass: gls2.EnemySoft,

    velocityY: 0,
    attackPattern: null,

    /**
     * @constructs
     * @param {number} velocityY
     * @param {string} attackPattern
     */
    init: function(velocityY, attackPattern) {
        this.superInit();
        this.velocityY = velocityY;
        this.attackPattern = attackPattern;
    },
    /**
     * @this {gls2.Enemy}
     */
    setup: function() {
        this.tweener
            .clear()
            .moveBy(0, SC_H*0.5, 800, "easeOutQuad")
            .call(function() {
                attack(this, this.attackPattern);
            }.bind(this));
    },
    /**
     * @this {gls2.Enemy}
     */
    update: function() {
        this.y += this.velocityY;
        if (this.entered && !this.isInScreen()) {
            this.remove();
        }

        this.enableFire = this.y < this.player.y;
    },
})
gls2.EnemySoft.MiddleFighter1 = _MiddleFighterCommon(0.5, "kurokawa-1");

/**
 * 大型戦闘機
 */
gls2.EnemySoft.LargeFighter1 = _MiddleFighterCommon(0.3, "komachi-1");

/**
 * 中ボス共通
 *
 * 上から出現。画面上部をふらふらとさまよう
 */
var _MBossCommon = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,

    /**
     * @constructs
     * @param {Array.<string>} patterns
     */
    init: function(patterns) {
        this.superInit();
        this.patterns = patterns;
    },
    /**
     * @this {gls2.Enemy}
     */
    setup: function() {
        this.startAttack = false;
        this.endAttack = false;
        this.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.3, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.onCompleteAttack();
                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2; // TODO 固定乱数化
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3); // TODO 固定乱数化
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.3+Math.sin(a)*d*0.5, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(this));
    },
    /**
     * @this {gls2.Enemy}
     */
    update: function() {
        if (this.startAttack === false || this.hp <= 0) return;
        if (1500 < this.frame && this.endAttack === false) {
            this.endAttack = true;
            stopAttack(this);
            this.tweener
                .clear()
                .move(this.x, -100, 1200, "easeInQuad")
                .call(function() {
                    this.remove();
                }.bind(this));
        }
    },
    /**
     * @this {gls2.Enemy}
     */
    onCompleteAttack: function() {
        if (this.endAttack) return;
        var pattern = this.soft.patterns.shift();
        attack(this, pattern);
        this.soft.patterns.push(pattern);
    },
});

/**
 * ステージ１中ボス「ユキシロ」
 */
gls2.EnemySoft.Honoka = _MBossCommon([
    "honoka-1"
]);

/**
 * ステージ１ボス「ミスミ」第1形態
 */
gls2.EnemySoft.Nagisa = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    init: function() {
        this.superInit();
        this.patterns = [
            "nagisa-1-3",
            "nagisa-1-1",
            "nagisa-1-2",
        ];
    },
    /**
     * @this {gls2.Enemy}
     */
    setup: function() {
        this.startAttack = false;
        this.endAttack = false;
        this.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.2, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.onCompleteAttack();
                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2; // TODO 固定乱数化
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3); // TODO 固定乱数化
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.1+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(this));
    },
    /**
     * @this {gls2.Enemy}
     */
    onCompleteAttack: function() {
        if (this.endAttack) return;
        var pattern = this.soft.patterns.shift();
        attack(this, pattern);
        this.soft.patterns.push(pattern);
    },
});
gls2.EnemySoft.Nagisa1 = gls2.EnemySoft.Nagisa();
/**
 * 第2形態
 */
gls2.EnemySoft.Nagisa2 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    init: function() {
        this.superInit();
        this.patterns = [ "nagisa-2-1", "nagisa-2-2", "nagisa-2-3" ];
    },
    /**
     * @this {gls2.Enemy}
     */
    setup: function() {
        this.tweener.clear()
            .wait(800)
            .call(function() {
                this.onCompleteAttack();
            }.bind(this));
    },
    /**
     * @this {gls2.Enemy}
     */
    update: function() {
    },
    /**
     * @this {gls2.Enemy}
     */
    onCompleteAttack: function() {
        var pattern = this.soft.patterns.shift();
        attack(this, pattern);
        this.soft.patterns.push(pattern);
    },
});
gls2.EnemySoft.Nagisa2 = gls2.EnemySoft.Nagisa2();
/**
 * 第3形態（発狂）
 */
gls2.EnemySoft.Nagisa3 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    init: function() {
        this.superInit();
    },
    /**
     * @this {gls2.Enemy}
     */
    setup: function() {
        this.tweener.clear()
            .wait(800)
            .call(function() {
                this.onCompleteAttack();
            }.bind(this));
    },
    /**
     * @this {gls2.Enemy}
     */
    update: function() {
    },
    /**
     * @this {gls2.Enemy}
     */
    onCompleteAttack: function() {
        attack(this, "nagisa-3-1");
    },
});
gls2.EnemySoft.Nagisa3 = gls2.EnemySoft.Nagisa3();

})();

