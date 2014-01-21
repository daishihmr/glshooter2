/*
 * License
 * http://daishihmr.mit-license.org/
 */

// すべてsingletonかつimmutableに実装する
(function() {

/**
 * 敵の行動パターン
 * @class
 */
gls2.EnemySoft = tm.createClass(
/** @lends {gls2.EnemySoft.prototype} */
{
    setup: function(enemy) {
        enemy.on("destroy", function() {
            gls2.EnemySoft.stopAttack(this);
        });
    },
});

/**
 * @static
 */
gls2.EnemySoft.attack = function(enemy, danmakuName) {
    var ticker = gls2.Danmaku[danmakuName].createTicker();
    enemy.on("enterframe", ticker);
    enemy.on("completeattack", function() {
        ticker.stop = true;
    });
};

/**
 * @static
 */
gls2.EnemySoft.stopAttack = function(enemy) {
    var listeners = [].concat(enemy._listeners["enterframe"]);
    if (listeners) {
        for (var i = 0, len = listeners.length; i < len; i++) {
            if (listeners[i] && listeners[i].isDanmaku) {
                listeners[i].stop = true;
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
gls2.EnemySoft.Heri1 = tm.createClass(
/** @lends {gls2.EnemySoft.Heri1a.prototype} */
{
    superClass: gls2.EnemySoft,

    pattern: null,

    /**
     * @constructs
     */
    init: function(pattern, targetY) {
        this.superInit();
        this.pattern = pattern;
        this.targetY = targetY;
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        var pattern = this.pattern;
        var targetY = this.targetY;

        enemy.on("launch", function() {
            var y = gls2.FixedRandom.randf(SC_H*(targetY-0.1), SC_H*(targetY+0.1));
            this.tweener
                .clear()
                .wait(gls2.FixedRandom.rand(10, 500))
                .move(this.x, y, y*5, "easeOutQuad")
                .call(function() {
                    gls2.EnemySoft.attack(this, pattern);
                }.bind(this));
        });

        enemy.on("completeattack", function() {
            this.tweener
                .clear()
                .wait(1000)
                .moveBy(0, -SC_H, 2000, "easeInQuad")
                .call(function() {
                    this.remove();
                }.bind(this));
        });
    },
});
gls2.EnemySoft.Heri1a = gls2.EnemySoft.Heri1("basic0-0", 0.2);
gls2.EnemySoft.Heri1b = gls2.EnemySoft.Heri1("basic0-0", 0.4);
gls2.EnemySoft.Heri1c = gls2.EnemySoft.Heri1("basic0-0", 0.6);
gls2.EnemySoft.Heri14a = gls2.EnemySoft.Heri1("basic1-2", 0.2);
gls2.EnemySoft.Heri14b = gls2.EnemySoft.Heri1("basic1-2", 0.4);
gls2.EnemySoft.Heri14c = gls2.EnemySoft.Heri1("basic1-2", 0.6);

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

    patternName: null,

    /**
     * @constructs
     */
    init: function(patternName) {
        this.superInit();
        this.patternName = patternName;
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.angle = Math.PI * 0.5;
        enemy.patternName = this.patternName;

        enemy.tweener.wait(gls2.FixedRandom.rand(0, 1000)).call(function() {
            this.speed = 6;
            gls2.EnemySoft.attack(this, this.patternName);
            this.on("enterframe", function() {
                if (this.y < this.player.y && this.entered) {
                    var a = Math.atan2(this.player.y-this.y, this.player.x-this.x);
                    this.angle += (a < this.angle) ? -0.02 : 0.02;
                    this.angle = gls2.math.clamp(this.angle, 0.5, Math.PI-0.5);
                }

                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                if (!this.isInScreen() && this.entered) {
                    this.remove();
                }

                if (gls2.distanceSq(this, this.player) < 150*150 || this.y > this.player.y + 150) {
                    this.enableFire = false;
                }
            });
        }.bind(enemy));
    },
});
gls2.EnemySoft.Heri21 = gls2.EnemySoft.Heri2("basic1-0");

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
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.speed = this.initialSpeed;
        enemy.baseDir = this.initialDir;
        if (this.changes) {
            enemy.changes = [].concat(this.changes);
        }
        enemy.cannonDir = 0;

        enemy.on("enter", function() {
            gls2.EnemySoft.attack(this, "basic2-0");
        });

        enemy.on("enterframe", function() {
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

            this.enableFire = this.y < this.player.y && gls2.distanceSq(this, this.player) > 200*200;

            if (this.changes) {
                for (var i = 0; i < this.changes.length; i++) {
                    var c = this.changes[i];
                    if (c.frame === this.frame) {
                        this.tweener.to({
                            baseDir: (c.dir !== undefined ? c.dir : this.baseDir),
                            speed: (c.speed !== undefined ? c.speed : this.speed),
                        }, 500);
                    }
                }
            }
        });
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
 * 下へ直進する戦車
 */
gls2.EnemySoft.TankD = _Tank(1.6, Math.PI*0.5);
/**
 * 上へ直進する戦車
 */
gls2.EnemySoft.TankU = _Tank(1.6, Math.PI*-0.5);

/**
 * 大型戦車ヤマブキ
 *
 * 左右から現れ中央で停止
 */
gls2.EnemySoft.BigTankR = tm.createClass({
    superClass: gls2.EnemySoft,

    attackPattern: null,

    init: function(attackPattern) {
        this.superInit();
        this.attackPattern = attackPattern;
    },
    setup: function(enemy) {
        gls2.EnemySoft.attack(enemy, this.attackPattern);
        enemy.tweener
            .clear()
            .to({
                x: SC_W/2
            }, 8000, "easeInOutQuad");
    },
});

/**
 * 大型戦車ヤマブキ4面
 */
gls2.EnemySoft.Bukky4 = gls2.EnemySoft.BigTankR("bukky-4-0");

/**
 * 固定砲台共通
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
var _Cannon = tm.createClass(
/** @lends {_Cannon.prototype} */
{
    superClass: gls2.EnemySoft,

    attackPattern: null,
    crossRangeFire: false,

    /**
     * @constructs
     * @param {string} attackPattern 弾幕名の
     * @param {boolean} crossRangeFire 近距離からも撃ってくるかどうか
     */
    init: function(attackPattern, crossRangeFire) {
        this.superInit();
        this.attackPattern = attackPattern;
        this.crossRangeFire = !!crossRangeFire;
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.speed = 1.0;
        enemy.dir = Math.PI;

        enemy.attackPattern = this.attackPattern;

        enemy.on("enter", function() {
            gls2.EnemySoft.attack(this, this.attackPattern);
        });

        enemy.on("enterframe", function() {
            if (this.entered && !this.isInScreen()) {
                this.remove();
            }
        });

        if (!this.crossRangeFire) {
            enemy.on("enterframe", function() {
                this.enableFire = this.y < this.player.y && gls2.distanceSq(this, this.player) > 200*200;
            });
        }
    },
});

/**
 * 固定砲台1
 * ヘボい砲台
 */
gls2.EnemySoft.Cannon1 = _Cannon("basic3-0", false);
gls2.EnemySoft.Cannon1_2 = _Cannon("basic3-1", false);

/**
 * 固定砲台2
 * すごい砲台
 */
gls2.EnemySoft.Cannon2_0 = _Cannon("cannon2-0", true);
gls2.EnemySoft.Cannon2_3 = _Cannon("cannon2-3", true);

/**
 * 固定砲台3
 * そこそこの砲台
 */
gls2.EnemySoft.Cannon3_0 = _Cannon("cannon3-0", true);

/**
 * 固定砲台4
 * いやらしい砲台
 */
gls2.EnemySoft.Cannon4_0 = _Cannon("cannon5-0", true);

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
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.velocityY = this.velocityY;
        enemy.patterns = [this.attackPattern];
        enemy.ready = false;

        enemy.tweener
            .clear()
            .moveBy(0, SC_H*0.5, 800, "easeOutQuad")
            .call(function() {
                gls2.EnemySoft.attack(this, this.patterns[0]);
                this.ready = true;
            }.bind(enemy));

        enemy.on("enterframe", function() {
            if (!this.ready) return;

            this.y += this.velocityY;
            if (this.y > SC_H*0.6) {
                gls2.EnemySoft.stopAttack(this);
            }
            if (this.entered && !this.isInScreen()) {
                this.remove();
            }

            this.enableFire = this.y < this.player.y;
        });
    },
})
gls2.EnemySoft.MiddleFighter1 = _MiddleFighterCommon(0.5, "kurokawa-1");
gls2.EnemySoft.MiddleFighter4 = _MiddleFighterCommon(0.5, "kurokawa-4");

/**
 * ゆりさん4面右から
 */
gls2.EnemySoft.Tsukikage4r = tm.createClass(
{
    superClass: gls2.EnemySoft,

    delay: 0,

    init: function(delay) {
        this.superInit();

        this.delay = delay;
    },

    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.tweener
            .wait(this.delay)
            .call(function() {
                gls2.EnemySoft.attack(this, "yuri-4");
                this.timeline
                    .by({x: -SC_W}, 2000, 0)
                    .by({y: -SC_H*0.3}, 2000, 0, "easeInOutQuad");
            }.bind(enemy))
            .wait(2500)
            .by({y: SC_H}, 4000, "easeInQuad")
            .call(function() {
                this.remove();
            }.bind(enemy));
    },

});

/**
 * ゆりさん4面左から
 */
gls2.EnemySoft.Tsukikage4l = tm.createClass(
{
    superClass: gls2.EnemySoft,

    delay: 0,

    init: function(delay) {
        this.superInit();
        this.delay = delay;
    },

    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.tweener
            .wait(this.delay)
            .call(function() {
                gls2.EnemySoft.attack(this, "yuri-4");
                this.timeline
                    .by({x: SC_W}, 2000, 0)
                    .by({y: -SC_H*0.3}, 2000, 0, "easeInOutQuad");
            }.bind(enemy))
            .wait(2500)
            .by({y: SC_H}, 4000, "easeInQuad")
            .call(function() {
                this.remove();
            }.bind(enemy));
    },

});

/**
 * うらら5面
 */
gls2.EnemySoft.Urara = tm.createClass(
{
    superClass: gls2.EnemySoft,

    direction: 1,
    delay: 0,

    init: function(direction, delay) {
        this.superInit();
        this.direction = direction;
        this.delay = delay;
    },

    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        tm.app.Tweener(enemy)
            .wait(this.delay)
            .call(function() {
                gls2.EnemySoft.attack(this, "basic1-3");
            }.bind(enemy));

        tm.app.Tweener(enemy)
            .wait(this.delay)
            .to({
                y: SC_H*0.1
            }, 5000, "easeOutQuad")
            .to({
                y: SC_H*2
            }, 3000, "easeInQuad");
        tm.app.Tweener(enemy)
            .wait(this.delay)
            .to({
                x: SC_W*(0.5+this.direction*+0.3)
            }, 3000, "easeOutExpo")
            .to({
                x: SC_W*(0.5+this.direction*-0.3)
            }, 2000, "easeInOutQuad")
            .to({
                x: SC_W*(0.5+this.direction*+0.3)
            }, 2000, "easeOutExpo")
            .to({
                x: SC_W*(0.5+this.direction*-0.3)
            }, 2000, "easeInOutQuad")
            .to({
                x: SC_W*(this.direction*+1.3)
            }, 2000, "easeInQuad");
    }
});

/**
 * 強襲戦闘艇
 *
 * 画面内上部にテレポートで出現後、ゆっくり下へ移動していく
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
var _akane = tm.createClass(
/** @lends {_akane.prototype} */
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
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.velocityY = this.velocityY;
        enemy.patterns = [this.attackPattern];

        enemy.tweener
            .clear()
            .call(function() {
                gls2.EnemySoft.attack(this, this.patterns[0]);
                gls2.Effect.genShockwaveRev(this.x, this.y, this.gameScene, 3);
            }.bind(enemy));

        enemy.on("enterframe", function() {
            this.y += this.velocityY;
            if (this.entered && !this.isInScreen()) {
                this.remove();
            }
            this.enableFire = this.y < this.player.y;
        });
    },
})
gls2.EnemySoft.akane = _akane(0.5, "akane");

/**
 * 小型戦闘機
 * 自機に向かって突っ込んでくる.
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.nao = tm.createClass(
/** @lends {gls2.EnemySoft.nao.prototype} */
{
    superClass: gls2.EnemySoft,

    patternName: null,

    /**
     * @constructs
     */
    init: function(speed, way) {
        this.superInit();
        this.patternName = "nao-"+way;
        this.speed = speed;
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.angle = Math.PI * 0.5;
        enemy.patternName = this.patternName;
        enemy.speed = this.speed;

        enemy.tweener.wait(gls2.FixedRandom.rand(0, 1000)).call(function() {
            gls2.EnemySoft.attack(this, this.patternName);
            this.on("enterframe", function() {
                if (this.y < this.player.y && this.entered) {
                    var a = Math.atan2(this.player.y-this.y, this.player.x-this.x);
                    this.angle += (a < this.angle) ? -0.02 : 0.02;
                    this.angle = gls2.math.clamp(this.angle, 0.5, Math.PI-0.5);
                }

                this.x += Math.cos(this.angle) * this.speed;
                this.y += Math.sin(this.angle) * this.speed;

                if (!this.isInScreen() && this.entered) {
                    this.remove();
                }

                if (gls2.distanceSq(this, this.player) < 150*150 || this.y > this.player.y + 150) {
                    this.enableFire = false;
                }
            });
        }.bind(enemy));
    },
});
gls2.EnemySoft.nao1 = gls2.EnemySoft.nao(3, 1);
gls2.EnemySoft.nao2 = gls2.EnemySoft.nao(6, 1);
gls2.EnemySoft.nao3 = gls2.EnemySoft.nao(12, 1);

/**
 * 小型浮揚戦車
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.reika = tm.createClass(
/** @lends {gls2.EnemySoft.reika.prototype} */
{
    superClass: gls2.EnemySoft,

    patternName: null,

    /**
     * @constructs
     */
    init: function(speed) {
        this.superInit();
        this.patternName = "reika";
        this.speed = speed;
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.angle = Math.PI * 0.5;
        enemy.patternName = this.patternName;
        enemy.speed = this.speed;

        enemy.tweener.wait(gls2.FixedRandom.rand(0, 1000)).call(function() {
            gls2.EnemySoft.attack(this, this.patternName);
            this.on("enterframe", function() {
                this.x += this.speed;
            });
        }.bind(enemy));
    },
});
gls2.EnemySoft.reika1 = gls2.EnemySoft.reika(3);

/**
 * 戦艦
 *
 * 左右から出現、そのまま等速で横断する。
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.miyuki_y = tm.createClass(
{
    superClass: gls2.EnemySoft,

    velocityX: 0,
    attackPattern: null,

    /**
     * @constructs
     * @param {number} velocityY
     * @param {string} attackPattern
     */
    init: function(velocityX, attackPattern) {
        this.superInit();
        this.velocityX = velocityX;
        this.attackPattern = "miyuki_y";
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.velocityX = this.velocityX;
        enemy.patterns = [this.attackPattern];

        enemy.tweener
            .clear()
            .call(function() {
                gls2.EnemySoft.attack(this, this.patterns[0]);
            }.bind(enemy));

        enemy.on("enterframe", function() {
            this.x += this.velocityX;
            if (this.entered && !this.isInScreen()) {
                this.remove();
            }
            this.enableFire = this.y < this.player.y;
        });
    },
})
gls2.EnemySoft.miyuki_y1 = gls2.EnemySoft.miyuki_y( 1.0);
gls2.EnemySoft.miyuki_y2 = gls2.EnemySoft.miyuki_y(-1.0);

/**
 * 戦艦
 *
 * 上から出現、そのまま等速で画面中心まで降りて停止
 * 一定時間後、左右近い方の画面端方向に移動してスクリーンアウト
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
gls2.EnemySoft.miyuki_t = tm.createClass(
{
    superClass: gls2.EnemySoft,

    velocityX: 0,
    attackPattern: null,

    /**
     * @constructs
     * @param {number} velocityY
     * @param {string} attackPattern
     */
    init: function(velocityX, attackPattern) {
        this.superInit();
        this.velocityX = velocityX;
        this.attackPattern = attackPattern;
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.velocityX = this.velocityX;
        enemy.patterns = [this.attackPattern];
        enemy.phase = 0;

        enemy.tweener
            .clear()
            .call(function() {
                gls2.EnemySoft.attack(this, this.patterns[0]);
            }.bind(enemy));

        enemy.on("enterframe", function() {
            if (this.phase == 0) {
                this.y += 0.5;
                if (this.y > SC_H*0.4)this.phase++;
            } else {
                this.x += this.velocityX;
            }
            if (this.entered && !this.isInScreen()) {
                this.remove();
            }
        });
    },
})
gls2.EnemySoft.miyuki_t1 = gls2.EnemySoft.miyuki_t(-0.5, "miyuki_t");
gls2.EnemySoft.miyuki_t2 = gls2.EnemySoft.miyuki_t( 0.5, "miyuki_t");

/**
 * 浮遊砲台
 *
 * 上部から出現し、ゆっくりと下へ移動
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
var _alice = tm.createClass(
/** @lends {_alice.prototype} */
{
    superClass: gls2.EnemySoft,

    velocityX: 0,
    attackPattern: null,

    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.attackPattern = "alice";
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.velocityY = 0.5;
        enemy.patterns = [this.attackPattern];

        enemy.tweener
            .clear()
            .call(function() {
                gls2.EnemySoft.attack(this, this.patterns[0]);
            }.bind(enemy));

        enemy.on("enterframe", function() {
            this.y += this.velocityY;
            if (this.entered && !this.isInScreen()) {
                this.remove();
            }

            this.enableFire = this.y < this.player.y;
        });
    },
})
gls2.EnemySoft.Alice = _alice();

/**
 * 浮遊砲台（端末）
 *
 * 円を描いて展開し、本体から一定距離を保って周回する。
 *
 * @class
 * @extends {gls2.EnemySoft}
 */
var _aliceLeaf = tm.createClass(
{
    superClass: gls2.EnemySoft,

    attackPattern: null,

    /**
     * @constructs
     * @param {number} centerX
     * @param {number} centerY
     * @param {number} initialDirection
     * @param
     */
    init: function() {
        this.superInit();
        this.attackPattern = "aliceLeaf";
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [this.attackPattern];

        enemy.tweener
            .clear()
            .call(function() {
                gls2.EnemySoft.attack(this, this.patterns[0]);
            }.bind(enemy));

        var toDeg = 180/Math.PI;
        enemy.on("enterframe", function() {
            var cx = this.current.x;
            var cy = this.current.y;
            this.dir += 0.01;
            this.x = cx+Math.sin(this.dir)*this.distance;
            this.y = cy+Math.cos(this.dir)*this.distance;
            if (this.entered && !this.isInScreen()) {
                this.remove();
            }
            this.enableFire = this.y < this.player.y;
        });
    },
})
gls2.EnemySoft.AliceLeaf = _aliceLeaf();

/**
 * 大型戦闘機
 */
gls2.EnemySoft.LargeFighter1 = _MiddleFighterCommon(0.3, "komachi-1");
gls2.EnemySoft.LargeFighter2 = _MiddleFighterCommon(0.5, "komachi-2");
gls2.EnemySoft.LargeFighter4 = _MiddleFighterCommon(0.5, "komachi-4");

/**
 * mktn5面
 */
gls2.EnemySoft.Mktn = tm.createClass(
{
    superClass: gls2.EnemySoft,
    side: 0,

    init: function(side) {
        this.superInit();
        this.side = side;
    },

    setup: function(enemy) {
        tm.app.Tweener(enemy)
            .to({
                x: SC_W*this.side
            }, 4000, "easeOutQuad");
        enemy.on("enterframe", function() {
            this.y += 0.1;
        });
    }
});

/**
 * のぞみ4面
 */
gls2.EnemySoft.Nozomi4 = _MiddleFighterCommon(0.1, "nozomi-4");
/**
 * のぞみ5面
 */
gls2.EnemySoft.Nozomi5 = _MiddleFighterCommon(0.3, "nozomi-5");

/**
 * ボムキャリアー「クルミ」
 */
gls2.EnemySoft.Erika = tm.createClass(
{
    superClass: gls2.EnemySoft,

    init: function() {
        this.superInit();
    },
    setup: function(enemy) {
        gls2.EnemySoft.attack(enemy, "basic3-0");
        enemy.on("enterframe", function() {
            this.y += 0.8;
            this.enableFire = this.entered;
        });
    },
});
gls2.EnemySoft.Erika = gls2.EnemySoft.Erika();

/**
 * 中ボス共通
 *
 * 上から出現。画面上部をふらふらとさまよう
 */
var _MBossCommon = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    limitAge: 0,

    /**
     * @constructs
     * @param {Array.<string>} patterns
     * @param {Number=} limitAge 逃げるまでのフレーム.default=1500.
     */
    init: function(patterns, limitAge) {
        this.superInit();
        this.patterns = patterns;
        this.limitAge = limitAge || 1500;
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.limitAge = this.limitAge;
        enemy.startAttack = false;
        enemy.endAttack = false;
        enemy.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.3, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.dispatchEvent(tm.event.Event("completeattack"));
                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.3+Math.sin(a)*d*0.5, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("enterframe", function() {
            if (this.startAttack === false || this.hp <= 0) return;
            if (this.limitAge < this.frame && this.endAttack === false) {
                this.endAttack = true;
                this.tweener
                    .clear()
                    .wait(500)
                    .move(this.x, -100, 1200, "easeInQuad")
                    .call(function() {
                        this.remove();
                    }.bind(this));
            }
        });

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            if (this.endAttack) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});

/**
 * ステージ１中ボス「ユキシロ」
 */
gls2.EnemySoft.Honoka = _MBossCommon(["honoka-1"]);

/**
 * ステージ１ボス「ミスミ」第1形態
 */
gls2.EnemySoft.Nagisa = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "nagisa-1-1",
            "nagisa-1-2",
            "nagisa-1-3",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.startAttack = false;
        enemy.endAttack = false;
        enemy.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.2, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.2+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            if (this.endAttack) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
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
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "nagisa-2-1",
            "nagisa-2-2",
            "nagisa-2-3",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.tweener.clear()
            .wait(800)
            .call(function() {
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.2+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Nagisa2 = gls2.EnemySoft.Nagisa2();
/**
 * 第3形態（発狂）
 */
gls2.EnemySoft.Nagisa3 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.tweener.clear()
            .wait(800)
            .call(function() {
                this.dispatchEvent(tm.event.Event("completeattack"));
                this.tweener
                    .clear()
                    .move(SC_W*0.5, SC_H*0.2,  3000, "easeInOutQuad")
                    .move(SC_W*0.5, SC_H*0.7, 20000, "easeInOutQuad");
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            gls2.EnemySoft.attack(this, "nagisa-3-1");
        });
    },
});
gls2.EnemySoft.Nagisa3 = gls2.EnemySoft.Nagisa3();

/**
 * ステージ２中ボス「ミショウ」
 */
gls2.EnemySoft.Mai = _MBossCommon(["mai-1", "mai-2"]);

/**
 * ステージ２ボス「ヒュウガ」
 */
gls2.EnemySoft.Saki1 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "saki-1-1",
            "saki-1-2",
            "saki-1-3",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.startAttack = false;
        enemy.endAttack = false;
        enemy.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.2, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.2+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            if (this.endAttack) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Saki1 = gls2.EnemySoft.Saki1();
gls2.EnemySoft.Saki2 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "saki-2-1",
            "saki-2-2",
            "saki-2-3",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.tweener.clear()
            .wait(800)
            .call(function() {
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.2+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Saki2 = gls2.EnemySoft.Saki2();
gls2.EnemySoft.Saki3 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "saki-3-1",
            "saki-3-2",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.tweener.clear()
            .wait(800)
            .call(function() {
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.2+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Saki3 = gls2.EnemySoft.Saki3();

/**
 * ステージ３中ボス「ヒガシ」
 */
var _Setsuna = tm.createClass(
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
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.startAttack = false;
        enemy.endAttack = false;
        enemy.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.3, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.dispatchEvent(tm.event.Event("completeattack"));
                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.3+Math.sin(a)*d*0.5, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("enterframe", function() {
            if (this.startAttack === false || this.hp <= 0) return;
            if (1500 < this.frame && this.endAttack === false) {
                this.endAttack = true;
                this.tweener
                    .clear()
                    .wait(500)
                    .move(this.x, -100, 1200, "easeInQuad")
                    .call(function() {
                        this.remove();
                    }.bind(this));
            }
        });

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            if (this.endAttack) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Setsuna = _Setsuna(["setsuna-1"]);

/**
 * ステージ３ボス「モモゾノ」
 */
gls2.EnemySoft.Love1 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "saki-1-1",
            "saki-1-2",
            "saki-1-3",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.startAttack = false;
        enemy.endAttack = false;
        enemy.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.2, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.2+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            if (this.endAttack) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Love1 = gls2.EnemySoft.Love1();
gls2.EnemySoft.Love2 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "saki-1-1",
            "saki-1-2",
            "saki-1-3",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.startAttack = false;
        enemy.endAttack = false;
        enemy.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.2, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.2+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            if (this.endAttack) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Love2 = gls2.EnemySoft.Love2();
gls2.EnemySoft.Love3 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "saki-1-1",
            "saki-1-2",
            "saki-1-3",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.startAttack = false;
        enemy.endAttack = false;
        enemy.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.2, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.2+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            if (this.endAttack) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Love3 = gls2.EnemySoft.Love3();

/**
 * ステージ４中ボス「ヒシカワ」
 */
gls2.EnemySoft.Rikka = _MBossCommon(["rikka-1", "rikka-2", "rikka-3"], 3000);

/**
 * ステージ４ボス「アイダ」
 */
gls2.EnemySoft.Mana1 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "mana-1-1",
            "mana-1-2",
            "mana-1-3",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.startAttack = false;
        enemy.endAttack = false;
        enemy.tweener
            .clear()
            .move(SC_W*0.5, SC_H*0.3, 1200, "easeOutQuad")
            .call(function() {
                this.startAttack = true;
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var d = gls2.FixedRandom.randf(SC_W*-0.1, SC_W*0.1);
                    this.tweener
                        .move(
                            Math.clamp(this.player.x, SC_W*0.1, SC_W*0.9) + d*0.3,
                            SC_H*0.2 + d*0.3,
                            3000, "easeInOutQuad"
                        )
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            if (this.endAttack) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Mana1 = gls2.EnemySoft.Mana1();
gls2.EnemySoft.Mana2 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "mana-2-1",
            "mana-2-2",
            "mana-2-3",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.tweener.clear()
            .wait(800)
            .call(function() {
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.3+Math.sin(a)*d*0.4, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Mana2 = gls2.EnemySoft.Mana2();
gls2.EnemySoft.Mana3 = tm.createClass(
{
    superClass: gls2.EnemySoft,
    patterns: null,
    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        this.patterns = [
            "mana-3-1",
            "mana-3-2",
        ];
    },
    setup: function(enemy) {
        gls2.EnemySoft.prototype.setup.call(this, enemy);

        enemy.patterns = [].concat(this.patterns);
        enemy.tweener.clear()
            .wait(800)
            .call(function() {
                this.dispatchEvent(tm.event.Event("completeattack"));

                var temp = function() {
                    var a = gls2.FixedRandom.random() * Math.PI*2;
                    var d = gls2.FixedRandom.randf(SC_W*0.1, SC_W*0.3);
                    this.tweener
                        .move(SC_W*0.5+Math.cos(a)*d, SC_H*0.3+Math.sin(a)*d*0.3, 3000, "easeInOutQuad")
                        .call(temp);
                }.bind(this);
                temp();
            }.bind(enemy));

        enemy.on("completeattack", function() {
            if (this.hp <= 0) return;
            var pattern = this.patterns.shift();
            gls2.EnemySoft.attack(this, pattern);
            this.patterns.push(pattern);
        });
    },
});
gls2.EnemySoft.Mana3 = gls2.EnemySoft.Mana3();

})();

