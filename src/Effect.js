(function() {

gls2.Effect = {};
gls2.Effect.setup = function() {

    noise = gls2.Noise.generate(256);

    gls2.Effect["explosion"] = Array.range(0, 2).map(function(i) {
        var exp = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: "explode" + i,
            frame: {
                width: 100,
                height: 100,
            },
            animations: {
                "default": {
                    frame: Array.range(0, 64),
                    next: null,
                },
            },
        }, 100, 100))
        return exp;
    });

    gls2.Effect["shockwaveImage"] = tm.graphics.Canvas()
        .resize(100, 100)
        .setStrokeStyle("rgba(0,0,0,0)")
        .setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50)
            .addColorStopList([
                { offset: 0.00, color: "rgba(255,255,255,0)" },
                { offset: 0.70, color: "rgba(255,255,255,0)" },
                { offset: 0.95, color: "rgba(255,255,255,1)" },
                { offset: 1.00, color: "rgba(255,255,255,0)" },
            ]).toStyle())
        .fillCircle(50, 50, 50);

    gls2.Effect["shockwaveImage"] = tm.graphics.Canvas()
        .resize(100, 100)
        .setStrokeStyle("rgba(0,0,0,0)")
        .setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50)
            .addColorStopList([
                { offset: 0.00, color: "rgba(255,255,255,0)" },
                { offset: 0.70, color: "rgba(255,255,255,0)" },
                { offset: 0.95, color: "rgba(255,255,255,1)" },
                { offset: 1.00, color: "rgba(255,255,255,0)" },
            ]).toStyle())
        .fillCircle(50, 50, 50);

    /** @const */
    var size = 16;
    gls2.Effect["particle16"] = gls2.Particle(size, 1.0, 0.9, tm.graphics.Canvas()
        .resize(size, size)
        .setFillStyle(
            tm.graphics.RadialGradient(size/2, size/2, 0, size/2, size/2, size/2)
                .addColorStopList([
                    {offset:0.0, color: "rgba(255,255,255,1.0)"},
                    {offset:1.0, color: "rgba(255,128,  0,0.0)"},
                ]).toStyle()
        )
        .fillRect(0, 0, size, size)
        .element
    );

};

gls2.Effect.genParticle = function(x, y, scene) {
    var p = gls2.Effect["particle16"].clone().setPosition(x, y).addChildTo(scene);
    var speed = gls2.math.randf(5, 20);
    var dir = gls2.math.randf(Math.PI,Math.PI*2);
    p.dx = Math.cos(dir) * speed;
    p.dy = Math.sin(dir) * speed;
    var scaleMin = 0.1;
    var scaleMax = 0.5;
    p.scaleX = p.scaleY = (gls2.math.randf(scaleMin, scaleMax) + gls2.math.randf(scaleMin, scaleMax)) / 2;
    p.addEventListener("enterframe", function() {
        this.x += this.dx;
        this.y += this.dy;
        this.dx *= 0.9;
        this.dy *= 0.9;
    });
};

gls2.Effect.genShockwave = function(x, y, scene) {
    var scale = 0.1;
    var sw = tm.app.Sprite()
        .setPosition(x, y)
        .setScale(scale)
        .setBlendMode("lighter")
        .addChildTo(scene);
    sw.image = gls2.Effect["shockwaveImage"];
    sw.tweener
        .clear()
        .to({
            scaleX: 1.4,
            scaleY: 1.4,
            alpha: 0.0
        }, 800, "easeOutQuad")
        .call(function() {
            sw.remove();
        });
};

gls2.Effect.explodeS = function(x, y, scene, vector) {
    gls2.playSound("soundExplode");
    var e = gls2.Effect["explosion"].random()
        .clone()
        .addEventListener("animationend", function() {
            this.remove();
        })
        .setScale(0.75)
        .setPosition(x, y)
        .setRotation(Math.random() * 360)
        .gotoAndPlay();
    e.isEffect = true;
    if (vector !== undefined) {
        var vx = vector.x;
        var vy = vector.y;
        e.addEventListener("enterframe", function() {
            this.x += vx;
            this.y += vy;
            vx *= 0.99;
            vy *= 0.99;
        });
    }
    e.addChildTo(scene);
};

gls2.Effect.explodeGS = function(x, y, scene) {
    gls2.playSound("soundExplode");
    var e = gls2.Effect["explosion"].random()
        .clone()
        .addEventListener("animationend", function() {
            this.remove();
        })
        .addEventListener("enterframe", function() {
            this.y -= 1.4;
            this.scaleX += 0.01;
            this.scaleY += 0.01;
        })
        .setScale(0.5)
        .setPosition(x, y)
        .setRotation(Math.random() * 360)
        .gotoAndPlay();
    e.isEffect = true;
    e.addChildTo(scene);

    e = gls2.Effect["explosion"].random()
        .clone()
        .addEventListener("animationend", function() {
            this.remove();
        })
        .addEventListener("enterframe", function() {
            this.rotation += 2;
            this.x += 0.7;
            this.y -= 0.7;
            this.scaleX += 0.01;
            this.scaleY += 0.01;
        })
        .setScale(0.5)
        .setPosition(x+12, y)
        .setRotation(Math.random() * 360)
        .setBlendMode("lighter")
        .gotoAndPlay();
    e.isEffect = true;
    e.addChildTo(scene);

    e = gls2.Effect["explosion"].random()
        .clone()
        .addEventListener("animationend", function() {
            this.remove();
        })
        .addEventListener("enterframe", function() {
            this.rotation -= 2;
            this.x -= 0.7;
            this.y -= 0.7;
            this.scaleX += 0.01;
            this.scaleY += 0.01;
        })
        .setScale(0.5)
        .setPosition(x-12, y)
        .setRotation(Math.random() * 360)
        .setBlendMode("lighter")
        .gotoAndPlay();
    e.isEffect = true;
    e.addChildTo(scene);
};

var noise;

gls2.Effect.explodeM = function(x, y, scene) {
    gls2.playSound("soundExplode");
    for (var i = 0, end = gls2.math.rand(5, 10); i < end; i++) {
        var e = gls2.Effect["explosion"].random()
            .clone()
            .addEventListener("animationend", function() {
                this.remove();
            })
            .setPosition(x, y)
            .setRotation(Math.random() * 360)
            .gotoAndPlay();
        e.isEffect = true;
        // e.tweener.moveBy()
        e.addChildTo(scene);
    }
    for (var i = 0; i < 10; i++) {
        gls2.Effect.genParticle(x, y, scene);
    }
};

})();
