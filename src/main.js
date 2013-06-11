var gls2 = {};

var DEBUG = true;
var SC_W = 320;
var SC_H = 480;

tm.preload(function() {
    gls2.app = tm.app.CanvasApp("#canvas2d");
    gls2.app.resize(SC_W, SC_H).fitWindow();
    gls2.app.background = "black";
    gls2.app.fps = 60;

    gls2.app.replaceScene(tm.app.LoadingScene());

    if (DEBUG) tm.util.ScriptManager.loadStats();

    tm.asset.AssetManager.load("tex0", "images/bullets.png");
    tm.asset.AssetManager.load("tex1", "images/tex1.png");
});

tm.main(function() {
    if (DEBUG) gls2.app.enableStats();

    gls2.EnemyHard.setup();
    gls2.EnemySoft.setup();

    var player = gls2.Player.instance = gls2.Player();
    gls2.Player.instance.keyboard = gls2.app.keyboard;

    var mainScene = gls2.GameScene();
    mainScene.addChild(player);

    gls2.Enemy("heri1", "heri1").setPosition(100, 100).addChildTo(mainScene);
    gls2.Enemy("heri2", "heri1").setPosition(200, 100).addChildTo(mainScene);

    gls2.app.run();

    gls2.app.replaceScene(mainScene);
});
