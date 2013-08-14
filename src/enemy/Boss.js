/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * ボス
 * @class
 * @extends {gls2.Enemy}
 */
gls2.Boss = tm.createClass(
/** @lends {gls2.Boss.prototype} */
{
    superClass: gls2.Enemy,

    isBoss: true,
    hpMax: 0,

    /**
     * @constructs
     */
    init: function(gameScene, stage, software, hardware) {
        this.superInit(gameScene, stage, software, hardware);

        this.hpMax = this.hp;

        this.addEventListener("added", function() {
            this.gameScene.boss = this;
            this.gameScene.showBossLife();
        });
        this.addEventListener("removed", function() {
            // ボスHPゲージを消去
            this.gameScene.hideBossLife();

            // TODO ステージクリア
        });
    },

    damage: function(damagePoint) {
        var beforeHp = this.hp;
        var result = this.superClass.prototype.damage.call(this, damagePoint);
        if (result) {
            return true;
        }

        // TODO 形態変化
        if (this.hp <= this.hpMax*0.5 && this.hpMax*0.5 < beforeHp) {
            // HPが50%以下になった
        } else if (this.hp <= this.hpMax*0.25 && this.hpMax*0.25 < beforeHp) {
            // HPが25%以下になった
        }
    },

});
    
})();
