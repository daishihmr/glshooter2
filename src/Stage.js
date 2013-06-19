gls2.Stage = tm.createClass({
    /** 何ステージ目か */
    stageNumber: 0,
    /** ステージ中の星アイテムゲット数 */
    starItem: 0,
    /** 撃墜数 */
    killCount: 0,
    /** 出現敵数 */
    enemyCount: 0,
    init: function(stageNumber) {
        this.stageNumber = stageNumber;
    },
    update: function(app) {

    }
});
