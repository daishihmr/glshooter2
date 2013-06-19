/** @namespace */
var gls2 = {};

var DEBUG = true;
var SC_W = 480;
var SC_H = 640;

tm.preload(function() {
    if (DEBUG) tm.util.ScriptManager.loadStats();
});
tm.main(function() {
    gls2.core = gls2.GlShooter2("#canvas2d");
    if (DEBUG) gls2.core.enableStats();
    gls2.core.run();
});
