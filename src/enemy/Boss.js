/*
 * License
 * http://daishihmr.mit-license.org/
 */
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
    init: function(gameScene, softwares, hardware) {
        this.softwares = softwares;
        this.superInit(gameScene, this.softwares[0], hardware);

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
        if (this.superClass.prototype.damage.call(this, damagePoint)) {
            this.gameScene.demoPlaying = true;
            gls2.fadeOutBgm();
            return true;
        }

        // 形態変化
        if (this.hp <= this.hpMax*0.6 && this.hpMax*0.6 < beforeHp) {
            stopAttack(this);
            this.tweener.clear();

            // TODO 爆発エフェクト
            gls2.Effect.explodeM(this.x, this.y, this.gameScene);
            gls2.Danmaku.erase(true, this.gameScene.isHyperMode);

            // 第2形態へ
            this.soft = this.softwares[1];
            this.soft.setup.call(this);

        } else if (this.hp <= this.hpMax*0.2 && this.hpMax*0.2 < beforeHp) {
            stopAttack(this);
            this.tweener.clear();

            // TODO 爆発エフェクト
            gls2.Effect.explodeM(this.x, this.y, this.gameScene);
            gls2.Danmaku.erase(true, this.gameScene.isHyperMode);

            // 発狂へ
            this.soft = this.softwares[2];
            this.soft.setup.call(this);

            gls2.playSound("voJacms");
        }
    },

});

})();
