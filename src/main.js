var gls2 = {};

var DEBUG = true;
var SC_W = 480;
var SC_H = 640;

tm.preload(function() {
    gls2.core = gls2.GlShooter2("#canvas2d");
    gls2.core.replaceScene(tm.app.LoadingScene());

    if (DEBUG) tm.util.ScriptManager.loadStats();

    tm.asset.AssetManager.load("tex0", "assets/bullets.png");
    tm.asset.AssetManager.load("tex1", "assets/tex1.png");

    gls2.core.run();
});

tm.main(function() {
    if (DEBUG) gls2.core.enableStats();

    gls2.core.setupCommonData();
    gls2.GameScene();
    gls2.core.replaceScene(gls2.GameScene.instance);
});
