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

    softwares: null,

    /**
     * @constructs
     */
    init: function(gameScene, softwares, name) {
        this.softwares = softwares;
        this.superInit(gameScene, this.softwares[0], name);

        this.hpMax = this.hp;

        this.addEventListener("added", function() {
            this.gameScene.boss = this;
            this.gameScene.showBossLife();
            this.tweener.wait(1000).call(function() {
                this.gameScene.demoPlaying = false;
            }.bind(this));
        });
        this.addEventListener("removed", function() {
            this.gameScene.boss = null;
            this.gameScene.hideBossLife();

            var tempTimer = tm.app.Object2D();
            tempTimer.tweener
                .wait(7000)
                .call(function() {

                    // ステージクリア
                    this.gameScene.clearStage();

                }.bind(this));
            tempTimer.addChildTo(this.gameScene.lastElement);
        });
    },

    damage: function(damagePoint) {
        var beforeHp = this.hp;
        if (gls2.Enemy.prototype.damage.call(this, damagePoint)) {
            this.gameScene.demoPlaying = true;
            this.gameScene.player.attackable = false;
            gls2.fadeOutBgm();
            return true;
        }

        // 形態変化
        if (this.hp <= this.hpMax*0.55 && this.hpMax*0.55 < beforeHp) {
            gls2.EnemySoft.pauseAttack(this);
            this.clearEventListener("completeattack");
            this.tweener.clear();
            this.fire(tm.event.Event("secondform"));

            // TODO 爆発エフェクト
            gls2.Effect.explodeM(this.x, this.y, this.gameScene);
            gls2.Danmaku.erase(true, gls2.distanceSq(this, this.player) < CROSS_RANGE);

            // 第2形態へ
            this.softwares[1].setup(this);

        } else if (this.hp <= this.hpMax*0.1 && this.hpMax*0.1 < beforeHp) {
            gls2.EnemySoft.pauseAttack(this);
            this.clearEventListener("completeattack");
            this.tweener.clear();
            this.fire(tm.event.Event("hakkyo"));

            // TODO 爆発エフェクト
            gls2.Effect.explodeM(this.x, this.y, this.gameScene);
            gls2.Danmaku.erase(true, gls2.distanceSq(this, this.player) < CROSS_RANGE);

            // 発狂へ
            this.softwares[2].setup(this);

            gls2.playSound("voJacms");
        }
    },

});

})();
