/**
 * @preserve gls2.js v1.0-beta
 *
 * License
 * http://daishihmr.mit-license.org/
 */

/**
 * @define {boolean}
 */
var STATS = true;

/**
 * @define {boolean}
 *
 * true時：
 *   BGMオフ
 *   右下に隠し情報表示
 *   hキーでハイパーチャージ
 *   pキーでスクリーンショットを撮る
 */
var DEBUG = true;

tm.preload(function() {
    if (STATS) tm.util.ScriptManager.loadStats();
});
tm.main(function() {
    gls2.GlShooter2("#canvas2d");
    if (STATS) gls2.core.enableStats();
    gls2.core.run();
});
