/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @namespace
 */
gls2.Setting = {

    /**
     * 初期残機数
     * @const
     */
    INITIAL_ZANKI: 3,

    /** ボムスロット初期数 */
    INITIAL_BOMB_MAX: 3,

    /**
     * ショットの攻撃力
     * @const
     */
    SHOT_ATTACK_POWER: 1,

    /**
     * ハイパーショットの攻撃力
     * @const
     */
    HYPER_SHOT_ATTACK_POWER: 1,

    /**
     * レーザーの攻撃力
     * @const
     */
    LASER_ATTACK_POWER: 2,

    /**
     * ハイパーレーザーの攻撃力
     * @const
     */
    HYPER_LASER_ATTACK_POWER: 4,

    /**
     * オーラの攻撃力
     * @const
     */
    AURA_ATTACK_POWER: 2,

    /**
     * ハイパーオーラの攻撃力
     * @const
     */
    HYPER_AURA_ATTACK_POWER: 4,

    /**
     * ボムの攻撃力
     * @const
     */
    BOMB_ATTACK_POWER: 8,

    /**
     * ショットによる敵破壊でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_SHOT: 0.01,

    /**
     * レーザーによる敵破壊でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_LASER: 0.015,

    /**
     * レーザーを敵に当てることでチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_LASER_HIT: 0.001,

    /**
     * オーラによる敵破壊でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_AURA: 0.015,

    /**
     * オーラを敵に当てることでチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_AURA_HIT: 0.002,

    /**
     * ハイパーゲージチャージ基本係数
     * @const
     */
    HYPER_CHARGE_RATE: 0.75,

    /**
     * ハイパーモード中のハイパーゲージチャージ倍率
     * @const
     */
    HYPER_CHARGE_RATE_WHEN_HYPERMODE: 2.0,

    /**
     * ハイパーモード継続時間
     * @const
     */
    HYPERMODE_TIME: 600,

    /**
     * ハイパーモード起動時の無敵時間
     * @const
     */
    HYPERMODE_START_MUTEKI_TIME: 0.75,

    /**
     * ハイパーモード終了時の無敵時間
     * @const
     */
    HYPERMODE_END_MUTEKI_TIME: 0.25,

    /**
     * ハイパーモード中のコンボ数増加倍率
     * @const
     */
    COMBO_RATE_WHEN_HYPERMODE: 1,

    /**
     * 1フレームあたりのコンボゲージ減少値
     * @const
     */
    COMBO_GAUGE_DECR: 0.02,

    /**
     * ハイパーモード中のコンボゲージ減少倍率
     * @const
     */
    COMBO_GAUGE_DECR_RATE_WHEN_HYPERMODE: 0.5,

    /**
     * 1フレームあたりのコンボゲージゼロ時のコンボ数減少率
     * @const
     */
    COMBO_COUNT_DECR_WHEN_COMBOGAUGE_ZERO: 0.01,

    /**
     * コンボボーナス。何点ごとに倍率が1上がるか
     * @const
     */
    COMBO_BONUS: 200,

    /**
     * 弾破壊時のスコア
     * @const
     */
    BULLET_SCORE: 10,

    /**
     * 星アイテム（大）取得時のスコア
     * @const
     */
    STAR_ITEM_SCORE_LARGE: 500,

    /**
     * 星アイテム（小）取得時のスコア
     * @const
     */
    STAR_ITEM_SCORE: 250,

    /**
     * 星アイテム（大）取得時の素点増分
     * @const
     */
    STAR_ITEM_BASESCORE_LARGE: 100,

    /**
     * 星アイテム（小）取得時の素点増分
     * @const
     */
    STAR_ITEM_BASESCORE: 50,

    /**
     * ハイパーモード中の敵弾幕発射間隔
     * @const
     */
    ENEMY_ATTACK_INTERVAL_RATE_HYPER: 0.3,

    /**
     * 星アイテム（大）が出る距離
     * @const
     */
    CROSS_RANGE: 200*200,

    /**
     * 敵弾のHP
     * @const
     */
    BULLET_HP: 50,

    /**
     * ショットのHP
     * @const
     */
    SHOT_HP: 10,

    /**
     * オートボム発動時に残ボム数をすべて消費するか
     * @const
     */
    AUTO_BOMB_TO_ZERO: true,

};

})();
