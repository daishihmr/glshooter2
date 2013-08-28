/**
 * @preserve gls2.js v1.0-beta
 *
 * License
 * http://daishihmr.mit-license.org/
 */

/**
 * @define {boolean}
 */
var STATS = false;

/**
 * @define {boolean}
 */
var DEBUG = false;

tm.preload(function() {
    if (STATS) tm.util.ScriptManager.loadStats();
});
tm.main(function() {
    var app = gls2.GlShooter2("#canvas2d");
    if (STATS) app.enableStats();
    app.run();
});
