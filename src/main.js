var STATS = true;

tm.preload(function() {
    if (STATS) tm.util.ScriptManager.loadStats();
});
tm.main(function() {
    var app = gls2.GlShooter2("#canvas2d");
    if (STATS) app.enableStats();
    app.run();
});
