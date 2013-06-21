var DEBUG = true;

tm.preload(function() {
    if (DEBUG) tm.util.ScriptManager.loadStats();
});
tm.main(function() {
    var app = gls2.GlShooter2("#canvas2d");
    if (DEBUG) app.enableStats();
    app.run();
});
