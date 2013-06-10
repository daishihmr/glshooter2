var DEBUG = true;
var SC_W = 320;
var SC_H = 640;
var COMMON_DATA = {};

var app;

tm.preload(function() {
    app = tm.app.CanvasApp("#canvas2d");
    app.resize(SC_W, SC_H); //.fitWindow();
    app.background = "black";
    app.fps = 60;

    app.replaceScene(tm.app.LoadingScene());

    if (DEBUG) {
        tm.util.ScriptManager.loadStats();
    }

    tm.asset.AssetManager.load("bullets", "images/bullets.png");
});

tm.main(function() {
    COMMON_DATA.bullets = tm.app.SpriteSheet({
        image: "bullets",
        frame: {
            width: 32,
            height: 32,
            count: 10
        }
    });

    if (DEBUG) {
        app.enableStats();
    }

    var mainScene = GameScene();
    app.replaceScene(mainScene);

    app.run();
});
