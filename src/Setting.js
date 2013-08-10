(function() {

/**
 * @namespace
 */
gls2.Setting = {

    /**
     * ショットの攻撃力
     * @const
     */
    SHOT_ATTACK_POWER: 1,

    /**
     * ハイパーショットの攻撃力
     * @const
     */
    HYPER_SHOT_ATTACK_POWER: 2,

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
     * ハイパーゲージチャージ基本速度
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
    HYPERMODE_TIME: 900,

    /**
     * ハイパーモード起動時の無敵時間
     * @const
     */
    HYPERMODE_START_MUTEKI_TIME: 120,

    /**
     * ハイパーモード終了時の無敵時間
     * @const
     */
    HYPERMODE_END_MUTEKI_TIME: 120,

    /**
     * ハイパーモード中のコンボ数増加倍率
     * @const
     */
    COMBO_RATE_WHEN_HYPERMODE: 7,

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
     * 1フレームあたりのコンボゲージゼロ時のコンボ数減少値
     * @const
     */
    COMBO_COUNT_DECR_WHEN_COMBOGAUGE_ZERO: 6,

    /**
     * コンボボーナス。何点ごとに倍率が1上がるか
     * @const
     */
    COMBO_BONUS: 200,

};

})();
