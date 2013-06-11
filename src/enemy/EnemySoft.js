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
    gls2.EnemySoft.heri1 = tm.createClass({
        superClass: gls2.EnemySoft,
        init: function() {
            this.superInit();
        }
    })();
};
