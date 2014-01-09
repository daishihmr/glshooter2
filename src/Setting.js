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
     * @const
     */
    MUTEKI: false,

    /**
     * FPS
     * @const
     */
    FPS: 60,

    /**
     * 初期ランク
     * @const
     */
    INITIAL_RANK: 0.00,

    /**
     * エクステンドスコア
     * @const
     */
    EXTEND_SCORE: [
         1000000000,
        10000000000,
    ],

    /**
     * 出撃時の無敵時間
     * @const
     */
    LAUNCH_MUTEKI_TIME: 3000,

    /**
     * 初期残機数
     * @const
     */
    INITIAL_ZANKI: 3,

    /**
     * ボムスロット初期数
     * @const
     */
    INITIAL_BOMB_MAX: [3, 2, 1],

    /**
     * ボムスロット最大数
     * @const
     */
    BOMB_MAX_MAX: [6, 4, 2],

    /**
     * ショットの攻撃力
     * @const
     */
    SHOT_ATTACK_POWER: 1,

    /**
     * ハイパーショットの攻撃力上昇率
     * @const
     */
    HYPER_SHOT_ATTACK_POWER: 0.1,

    /**
     * レーザーの攻撃力
     * @const
     */
    LASER_ATTACK_POWER: 1,

    /**
     * ハイパーレーザーの攻撃力
     * @const
     */
    LASER_ATTACK_POWER_RATE: 0.25,

    /**
     * オーラの攻撃力
     * @const
     */
    AURA_ATTACK_POWER: 1,

    /**
     * ハイパーオーラの攻撃力
     * @const
     */
    HYPER_AURA_ATTACK_POWER: 0.25,

    /**
     * ボムの攻撃力
     * @const
     */
    BOMB_ATTACK_POWER: 2,

    /**
     * ショットによる敵破壊でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_SHOT: 0.005,

    /**
     * レーザーによる敵破壊でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_LASER: 0.010,

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
     * 星アイテム取得でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_STAR: 0.001,

    /**
     * 星アイテム（大）取得にチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_STAR_LARGE: 0.01,


    /**
     * ショットによる敵破壊でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_SHOT_IN_HYPER: 0,

    /**
     * レーザーによる敵破壊でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_LASER_IN_HYPER: 0,

    /**
     * レーザーを敵に当てることでチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_LASER_HIT_IN_HYPER: 0,

    /**
     * オーラによる敵破壊でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_AURA_IN_HYPER: 0.030,

    /**
     * オーラを敵に当てることでチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_AURA_HIT_IN_HYPER: 0.004,

    /**
     * 星アイテム取得でチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_STAR_IN_HYPER: 0,

    /**
     * 星アイテム（大）取得にチャージされるハイパーゲージ値
     * @const
     */
    HYPER_CHARGE_BY_STAR_LARGE_IN_HYPER: 0,

    /**
     * ハイパーゲージチャージ基本係数
     * @const
     */
    HYPER_CHARGE_RATE: 0.75,

    /**
     * ハイパーレベル最大値
     * @const
     */
    HYPER_LEVEL_MAX: 10,

    /**
     * ハイパーモード継続時間
     * @const
     */
    HYPERMODE_TIME: 800,

    /**
     * ハイパーモード起動時の無敵時間
     * @const
     */
    HYPERMODE_START_MUTEKI_TIME: 0.25,

    /**
     * ハイパーモード終了時の無敵時間
     * @const
     */
    HYPERMODE_END_MUTEKI_TIME: 0.10,

    /**
     * ハイパーモードレベルとコンボ数の関係
     * @const
     */
    HYPER_COMBO: [1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200],

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
    COMBO_BONUS: 1000,

    /**
     * 弾破壊時のスコア
     * @const
     */
    BULLET_SCORE: 10,

    /**
     * 弾破壊時のコンボカウント増加数
     * @const
     */
    BULLET_COMBO: 1,

    /**
     * 星アイテム（大）取得時のスコア
     * @const
     */
    STAR_ITEM_SCORE_LARGE: 1000,

    /**
     * 星アイテム（小）取得時のスコア
     * @const
     */
    STAR_ITEM_SCORE: 100,

    /**
     * 星アイテム（大）取得時のボーナス
     * @const
     */
    STAR_ITEM_BONUS_LARGE: 0,

    /**
     * 星アイテム（小）取得時のボーナス
     * @const
     */
    STAR_ITEM_BONUS: 0,

    /**
     * 星アイテム（大）取得時の素点増分
     * @const
     */
    STAR_ITEM_BASESCORE_LARGE: 1000,

    /**
     * 星アイテム（小）取得時の素点増分
     * @const
     */
    STAR_ITEM_BASESCORE: 100,

    /**
     * ハイパーモード時の弾幕激化係数（少ないほど激化）
     * @const
     */
    ENEMY_ATTACK_INTERVAL_RATE_HYPER: 0.5,

    /**
     * 基本弾速
     * @const
     */
    BULLET_SPEED: 3.0,

    /**
     * 星アイテム（大）が出る距離
     * @const
     */
    CROSS_RANGE: 150*150,

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
     * オートボム選択する？
     * @const
     */
    AUTO_BOMB_SELECT: false,

    /**
     * オートボム発動時に残ボム数をすべて消費するか
     * @const
     */
    AUTO_BOMB_TO_ZERO: true,

    /**
     * @const
     */
    STAGE_CLEAR_BONUS_STAR: 1000,

    /**
     * @const
     */
    STAGE_CLEAR_BONUS_STAR_LARGE: 2000,

    /**
     * @const
     */
    STAGE_CLEAR_BONUS_KILL_RATIO: 4000,

    /**
     * @const
     */
    STAGE_CLEAR_BONUS_MAX_COMBO: 10000,

    /**
     * @const
     */
    STAGE_CLEAR_BONUS_NO_MISS: 20000000,

    /**
     * @const
     */
    MAXIMUM_BONUS: 100,

    /**
     * @const
     */
    HASH_TAG: "tmshooter"
};

})();
