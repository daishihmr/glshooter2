var USE_GL = false;

tm.preload(function() {
    if (!USE_GL && WebGLRenderingContext) {
        tm.util.ScriptManager.load("libs/gl-matrix-min.js?"+Date.now());
        tm.util.ScriptManager.load("libs/glslib.js?"+Date.now());
    } else {
        tm.util.ScriptManager.load("libs/gls2d.js?"+Date.now());
    }

    tm.graphics.TextureManager.add("bullets", "images/bullets.png");
});

tm.main(function() {

    var canvas = document.getElementById("world");
    glslib.fitWindow(canvas);

    var scene = new glslib.Scene(canvas);
    var gl = scene.gl;
    var textures = {};
    textures.bullets = glslib.createTexture(gl, tm.graphics.TextureManager.get("bullets").element);

    var spritePool = new glslib.Pool(function() {
        var sprite = new glslib.Sprite(textures.bullets);
        sprite.texX = 0;
        sprite.texY = 0;
        sprite.scaleX = sprite.scaleY = 0.5;
        sprite.d = 0;
        sprite.update = function() {
            this.x += Math.cos(this.d) * 0.2;
            this.y += Math.sin(this.d) * 0.2;
            if (this.x < -17 || 17 < this.x || this.y < -17 || 17 < this.y) {
                scene.removeChild(this);
                spritePool.dispose(this);
            }
        };
        return sprite;
    }, 1000)

    scene.update = function() {
        for (var i = 0; i < 4; i++) {
            var sprite = spritePool.get();
            sprite.x = 0;
            sprite.y = 0;
            sprite.d = scene.frame*0.1 + Math.PI*0.5*i;
            scene.addChild(sprite);

            sprite = spritePool.get();
            sprite.x = 0;
            sprite.y = 0;
            sprite.d = scene.frame*-0.1 + Math.PI*0.5*i;
            scene.addChild(sprite);
        }
    };

    var tick = function() {
        scene._update();
        scene._draw();
        setTimeout(tick, 1000/60);
    };
    tick();

});
