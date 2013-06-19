/**
 * 敵の行動パターン
 */
gls2.EnemySoft = tm.createClass({
    init: function() {
    },
    setup: function(enemy) {
    },
    update: function(enemy) {
    }
});

gls2.EnemySoft.setup = function() {

    this["heri1"] = tm.createClass({
        superClass: gls2.EnemySoft,
        init: function() {
            this.superInit();
        },
        update: function(enemy) {
            enemy.y += 1;
        }
    })();

    this["heri2"] = tm.createClass({
        superClass: gls2.EnemySoft,
        init: function() {
            this.superInit();
        },
        update: function(enemy) {
            enemy.x -= 0.2;
            enemy.y += 0.2;
        }
    })();

};

