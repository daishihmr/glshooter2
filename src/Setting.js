/*
* License
* http://daishihmr.mit-license.org/
*/

/**
 * @const
 */
var MUTEKI = false;

/**
 * FPS
 * @const
 */
var FPS = 60;

/**
 * 処理落ちが入り始める弾の数
 * @const
 */
var FPS_DOWN_BULLET_COUNT = 500;

/**
 * 処理落ちにより最大どこまでFPSが下がるか(0.0～1.0)
 * @const
 */
var FPS_DOWN_MIN_RATE = 0.2;


/**
 * 初期ランク
 * @const
 */
var INITIAL_RANK = 0.00;

/**
 * ランクの影響率
 * @const
 */
var RANK_RATE = 1.0;

/**
 * エクステンドスコア
 * @const
 */
var EXTEND_SCORE = [
     2000000000,
    20000000000
];

/**
 * 出撃時の無敵時間
 * @const
 */
var LAUNCH_MUTEKI_TIME = 3000;

/**
 * 初期残機数
 * @const
 */
var INITIAL_ZANKI = 3;

/**
 * ボムスロット初期数
 * @const
 */
var INITIAL_BOMB_MAX = [3, 2, 1, 5];

/**
 * ボムスロット最大数
 * @const
 */
var BOMB_MAX_MAX = [6, 4, 2, 99];

/**
 * ショットの攻撃力
 * @const
 */
var SHOT_ATTACK_POWER = 1.2;

/**
 * ハイパーショットの攻撃力上昇率
 * @const
 */
var HYPER_SHOT_ATTACK_POWER = 0.5;

/**
 * レーザーの攻撃力
 * @const
 */
var LASER_ATTACK_POWER = 1.2;

/**
 * ハイパーレーザーの攻撃力
 * @const
 */
var LASER_ATTACK_POWER_RATE = 0.25;

/**
 * オーラの攻撃力
 * @const
 */
var AURA_ATTACK_POWER = 1.5;

/**
 * ハイパーオーラの攻撃力
 * @const
 */
var HYPER_AURA_ATTACK_POWER = 0.25;

/**
 * ボムの攻撃力
 * @const
 */
var BOMB_ATTACK_POWER = 2;

/**
 * ショットによる敵破壊でチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_SHOT = 0.0025;

/**
 * レーザーによる敵破壊でチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_LASER = 0.005;

/**
 * レーザーを敵に当てることでチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_LASER_HIT = 0.0005;

/**
 * オーラによる敵破壊でチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_AURA = 0.030;

/**
 * オーラを敵に当てることでチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_AURA_HIT = 0.004;

/**
 * 星アイテム取得でチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_STAR = 0.0005;

/**
 * 星アイテム（大）取得にチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_STAR_LARGE = 0.01;


/**
 * ショットによる敵破壊でチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_SHOT_IN_HYPER = 0;

/**
 * レーザーによる敵破壊でチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_LASER_IN_HYPER = 0;

/**
 * レーザーを敵に当てることでチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_LASER_HIT_IN_HYPER = 0;

/**
 * オーラによる敵破壊でチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_AURA_IN_HYPER = 0.030;

/**
 * オーラを敵に当てることでチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_AURA_HIT_IN_HYPER = 0.008;

/**
 * 星アイテム取得でチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_STAR_IN_HYPER = 0;

/**
 * 星アイテム（大）取得にチャージされるハイパーゲージ値
 * @const
 */
var HYPER_CHARGE_BY_STAR_LARGE_IN_HYPER = 0;

/**
 * ハイパーゲージチャージ基本係数
 * @const
 */
var HYPER_CHARGE_RATE = 0.75;

/**
 * ハイパーレベル最大値
 * @const
 */
var HYPER_LEVEL_MAX = 10;

/**
 * ハイパーモード継続時間
 * @const
 */
var HYPERMODE_TIME = 600;

/**
 * ハイパーモード起動時の無敵時間
 * @const
 */
var HYPERMODE_START_MUTEKI_TIME = 0.12;

/**
 * ハイパーモード終了時の無敵時間
 * @const
 */
var HYPERMODE_END_MUTEKI_TIME = 0.10;

/**
 * ハイパーモードレベルとコンボ数の関係
 * @const
 */
var HYPER_COMBO = [1, 10, 20, 30, 45, 60, 85, 110, 150, 180, 300];

/**
 * 1フレームあたりのコンボゲージ減少値
 * @const
 */
var COMBO_GAUGE_DECR = 0.04;

/**
 * ハイパーモード中のコンボゲージ減少倍率
 * @const
 */
var COMBO_GAUGE_DECR_RATE_WHEN_HYPERMODE = 0.3;

/**
 * 1フレームあたりのコンボゲージゼロ時のコンボ数減少率
 * @const
 */
var COMBO_COUNT_DECR_WHEN_COMBOGAUGE_ZERO = 0.0025;

/**
 * コンボボーナス。何HITごとに倍率が1上がるか
 * @const
 */
var COMBO_BONUS = 500;

/**
 * 弾破壊時のスコア
 * @const
 */
var BULLET_SCORE = 10;

/**
 * 弾破壊時のコンボカウント増加数
 * @const
 */
var BULLET_COMBO = 10;

/**
 * ハイパー中の星アイテム増加倍率
 * @const
 */
var STAR_ITEM_BY_HYPERLEVEL = [ 1, 2, 4, 8, 10, 15, 20, 25, 30, 35, 40 ];

/**
 * 星アイテム（大）取得時のスコア
 * @const
 */
var STAR_ITEM_SCORE_LARGE = 1000;

/**
 * 星アイテム（小）取得時のスコア
 * @const
 */
var STAR_ITEM_SCORE = 100;

/**
 * 星アイテム（大）取得時のボーナス
 * @const
 */
var STAR_ITEM_BONUS_LARGE = 0;

/**
 * 星アイテム（小）取得時のボーナス
 * @const
 */
var STAR_ITEM_BONUS = 0;

/**
 * 星アイテム（大）取得時の素点増分
 * @const
 */
var STAR_ITEM_BASESCORE_LARGE = 1000;

/**
 * 星アイテム（小）取得時の素点増分
 * @const
 */
var STAR_ITEM_BASESCORE = 100;

/**
 * ハイパーモード時の弾幕激化係数（少ないほど激化）
 * @const
 */
var ENEMY_ATTACK_INTERVAL_RATE_HYPER = 0.8;

/**
 * 基本弾速
 * @const
 */
var BULLET_SPEED = 3.0;

/**
 * 星アイテム（大）が出る距離
 * @const
 */
var CROSS_RANGE = 250*250;

/**
 * 敵弾のHP
 * @const
 */
var BULLET_HP = 5;

/**
 * ショットのHP
 * @const
 */
var SHOT_HP = 20;

/**
 * オートボム選択する？
 * @const
 */
var AUTO_BOMB_SELECT = false;

/**
 * オートボム発動時に残ボム数をすべて消費するか
 * @const
 */
var AUTO_BOMB_TO_ZERO = true;

/**
 * ステージクリア時ボーナス：小星
 * @const
 */
var STAGE_CLEAR_BONUS_STAR = 1000;

/**
 * ステージクリア時ボーナス：大星
 * @const
 */
var STAGE_CLEAR_BONUS_STAR_LARGE = 2000;

/**
 * ステージクリア時ボーナス：キルレシオ
 * @const
 */
var STAGE_CLEAR_BONUS_KILL_RATIO = 4000;

/**
 * ステージクリア時ボーナス：MAXコンボ
 * @const
 */
var STAGE_CLEAR_BONUS_MAX_COMBO = 10000;

/**
 * ステージノーミスクリア時のボーナススコア
 * @const
 */
var STAGE_CLEAR_BONUS_NO_MISS = 50000000;

/**
 * ボムMAXIMUM時にフレーム毎に増加するスコア
 * @const
 */
var MAXIMUM_BONUS = 1000;

/**
 * Twitter投稿用ハッシュタグ
 * @const
 */
var HASH_TAG = "tmshooter";

/**
 * コンティニュー可能回数初期値
 * @const
 */
var INITIAL_CONTINUE_COUNT = 3;

/**
 * 実績ポイント : コンティニュー可能回数
 * @const
 */
var CONTINUE_COUNT_BY_ACHEVEMENT = 0.2;

/**
 * 開始ステージ(0～)
 * @const
 */
var INITIAL_STAGE = 0;

/**
 * 総ステージ数
 * @const
 */
var STAGE_NUMBER = 5;

/**
 * 撃ち返し発生距離
 */
var FIRE_BACK_DISTANCE_SQ = 120*120;
