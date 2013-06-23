/**
 * 敵の行動パターン
 */
gls2.EnemySoft = tm.createClass({
    enemy: null,
    player: null,
    init: function(enemy) {
        this.enemy = enemy;
        this.player = enemy.gameScene.player;
    },
    setup: function() {
    },
    onLaunch: function() {
    },
    onCompleteAttack: function() {
    },
    update: function() {
    },
});

gls2.EnemySoft.setup = function() {
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
     */
    this["heri1a"] = tm.createClass({
        superClass: gls2.EnemySoft,
        init: function(enemy) {
            this.superInit(enemy);
        },
        onLaunch: function() {
            var y = Math.randf(SC_H*0.1, SC_H*0.3);
            this.enemy.tweener
                .clear()
                .wait(Math.rand(10, 500))
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
     */
    this["heri1b"] = tm.createClass({
        superClass: gls2.EnemySoft,
        init: function(enemy) {
            this.superInit(enemy);
        },
        onLaunch: function() {
            var y = Math.randf(SC_H*0.3, SC_H*0.5);
            this.enemy.tweener
                .clear()
                .wait(Math.rand(10, 500))
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
     */
    this["heri2"] = tm.createClass({
        superClass: gls2.EnemySoft,
        init: function(enemy) {
            this.superInit(enemy);
            this.angle = Math.PI * 0.5;
            this.enter = false;
            this.startFrame = Math.rand(0, 60);
            this.speed = 0;
        },
        update: function() {
            var frame = this.enemy.frame;
            if (frame === this.startFrame) {
                this.speed = 8;
            } else if (frame === this.startFrame + 10) {
                attack(this.enemy, "basic1-0");
            } else if (this.startFrame < frame && this.enemy.y < this.player.y) {
                var a = Math.atan2(this.player.y-this.enemy.y, this.player.x-this.enemy.x);
                this.angle += (a < this.angle) ? -0.02 : 0.02;
                this.angle = Math.clamp(this.angle, 0.5, Math.PI-0.5);
            }

            this.enemy.x += Math.cos(this.angle) * this.speed;
            this.enemy.y += Math.sin(this.angle) * this.speed;

            var rad = this.enemy.radius;
            if (this.enemy.x < -rad || SC_W+rad < this.enemy.x || this.enemy.y < -rad || SC_H+rad < this.enemy.y) {
                if (this.enter) {
                    this.enemy.remove();
                }
            } else {
                this.enter = true;
            }

            if (this.player.y < this.enemy.y || this.enemy.position.distanceSquared(this.player.position) < 300*300) {
                stopAttack(this.enemy);
            }
        },
    });

};
