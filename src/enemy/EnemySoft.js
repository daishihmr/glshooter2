/**
 * 敵の行動パターン
 */
gls2.EnemySoft = tm.createClass({
    enemy: null,
    init: function(enemy) {
        this.enemy = enemy;
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
        var ticker = Danmaku[danmakuName].createTicker();
        enemy.addEventListener("enterframe", ticker);
        enemy.addEventListener("completeattack", function() {
            this.removeEventListener("enterframe", ticker);
        });
    };

    /**
     * heri1.
     * まっすぐ降りてきて停止後、弾を撃って上へ離脱
     * 出現位置はy=-50
     */
    this["heri1"] = tm.createClass({
        superClass: gls2.EnemySoft,
        init: function(enemy) {
            this.superInit(enemy);
        },
        onLaunch: function() {
            this.enemy.tweener
                .clear()
                .move(this.enemy.x, Math.rand(SC_H*0.1, SC_H*0.4), 800, "easeOutQuad")
                .call(function() {
                    attack(this.enemy, "basic0");
                }.bind(this));
        },
        onCompleteAttack: function() {
            this.enemy.tweener
                .clear()
                .wait(1000)
                .moveBy(0, -SC_H, 1600, "easeOutQuad")
                .call(function() {
                    this.enemy.remove();
                }.bind(this));
        },
    });

    this["heri2"] = tm.createClass({
        superClass: gls2.EnemySoft,
        init: function(enemy) {
            this.superInit(enemy);
        },
        update: function() {
            this.enemy.x -= 0.2;
            this.enemy.y += 0.2;
        }
    });

};
