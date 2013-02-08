var USE_GL = false;
var DEBUG = true;

var app;

tm.preload(function() {
    app = tm.app.CanvasApp("#canvas2d");
    app.resize(320, 320).fitWindow();
    app.background = "rgba(0, 0, 0, 1)";
    app.fps = 60;

    app.replaceScene(tm.app.LoadingScene());

    if (DEBUG) {
        tm.util.ScriptManager.loadStats();
    }

    if (USE_GL && WebGLRenderingContext) {
        tm.util.ScriptManager.load("libs/gl-matrix-min.js?"+Date.now());
        tm.util.ScriptManager.load("libs/glslib.js?"+Date.now());
    } else {
        tm.util.ScriptManager.load("libs/gls2d.js?"+Date.now());
    }

    tm.graphics.TextureManager.add("bullets", "images/bullets.png");
});

tm.main(function() {
    if (DEBUG) {
        app.enableStats();
    }

    app.replaceScene(tm.app.Scene());

    var score = tm.app.Label();
    score.rotation = 90;
    app.currentScene.addChild(score);

    var canvas = document.getElementById("canvas3d");

    app.mouse = tm.input.Mouse(canvas);
    app.touch = tm.input.Touch(canvas);
    app.pointing = (tm.isMobile) ? app.touch : app.mouse;
    app.mouse._mousemove = app.mouse._mousemoveScale;
    app.touch._touchmove = app.touch._touchmoveScale;

    canvas.width = canvas.height = 320;
    tm.graphics.Canvas.prototype.fitWindow.call({ element: canvas });

    var scene = new glslib.Scene(canvas);
    var gl = scene.gl;
    var textures = {};
    textures.bullets = glslib.createTexture(gl, tm.graphics.TextureManager.get("bullets").element);

    var player = new glslib.Sprite(textures.bullets);
    player.texX = 1;
    scene.addChild(player);

    scene.update = function() {
        for (var i = 0; i < 10; i++) {
            var s = new glslib.Sprite(textures.bullets);
            s.x = 0;
            s.y = 0;
            s.scaleX = 0.5;
            s.scaleY = 0.5;
            s.dir = Math.random() * Math.PI * 2;
            s.update = function() {
                this.x += Math.cos(this.dir) * 0.3;
                this.y += Math.sin(this.dir) * 0.3;
                if (this.x < -17 || 17 < this.x || this.y < -17 || 17 < this.y) {
                    scene.removeChild(this);
                }
            };
            this.addChild(s);
        }
    };

    app.update = function() {
        scene._update();
        scene._draw();

        if (app.pointing.getPointing()) {
            player.x += app.pointing.deltaPosition.x * 0.1;
            player.y -= app.pointing.deltaPosition.y * 0.1;
        }
    };

    app.run();
});
