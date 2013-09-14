/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

gls2.Effect = {};
gls2.Effect.setup = function() {

    noise = gls2.Noise.generate(256);

    gls2.effectSprite = {};

    gls2.Effect["explosion"] = Array.range(0, 2).map(function(i) {
        return tm.app.AnimationSprite(tm.app.SpriteSheet({
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
        }, 100, 100));
    });

    gls2.effectSprite["explodeL"] = tm.app.AnimationSprite(tm.app.SpriteSheet({
        image: "explodeL",
        frame: {
            width: 100,
            height: 100,
        },
        animations: {
            "default": {
                frame: Array.range(0, 64),
                next: null,
                frequency: 3,
            },
        },
    }, 100, 100));

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

gls2.Effect.genShockwaveL = function(x, y, scene) {
    var shockwave = tm.app.CircleShape(300, 300, {
        strokeStyle: "rgba(0,0,0,0)",
        fillStyle: tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150)
            .addColorStopList([
                { offset: 0.0, color: "rgba(255,255,255,0)" },
                { offset: 0.5, color: "rgba(255,255,255,0)" },
                { offset: 0.9, color: "rgba(255,255,255,1)" },
                { offset: 1.0, color: "rgba(255,255,255,0)" },
            ])
            .toStyle()
    }).setPosition(x, y).setScale(0.1, 0.1)
    shockwave.isEffect = true;
    shockwave.addChildTo(scene);
    shockwave.tweener.clear()
        .to({
            scaleX: 5,
            scaleY: 5,
            alpha: 0,
        }, 500, "easeOutQuad")
        .call(function() {
            this.remove();
        }.bind(shockwave));
};

gls2.Effect.explodeS = function(x, y, scene, vector) {
    gls2.playSound("explode");
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
    gls2.playSound("explode");
    var e = gls2.Effect["explosion"].random()
        .clone()
        .addEventListener("animationend", function() {
            this.remove();
        })
        .addEventListener("enterframe", function() {
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
            this.y -= 0.3;
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
            this.y -= 0.3;
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
    gls2.playSound("explode2");
    gls2.playSound("explode3");
    var count = 20;
    var offset = ~~(Math.random() * gls2.Noise.noise.length);
    for (var i = 0; i < count; i++) {
        var e = gls2.Effect["explosion"].random()
            .clone()
            .addEventListener("animationend", function() {
                this.remove();
            })
            .addEventListener("enterframe", function() {
                this.x += Math.cos(this.a) * this.v;
                this.y += Math.sin(this.a) * this.v;
                this.scaleX += 0.01;
                this.scaleY += 0.01;
            })
            .setScale(0.7)
            .setBlendMode(i%2===0?"lighter":"source-over")
            .setPosition(x, y)
            .gotoAndPlay();
        e.a = Math.PI*2 * Math.random();
        var idx = ~~(gls2.Noise.noise.length * i/count) + offset;
        e.v = Math.pow(gls2.Noise.noise.at(idx), 2) * 10;
        e.isEffect = true;
        e.addChildTo(scene);
    }
};

gls2.Effect.explodeL = function(x, y, scene) {
    gls2.playSound("explode2");
    gls2.playSound("explode3");
    var count = 20;
    var offset = ~~(Math.random() * gls2.Noise.noise.length);
    for (var i = 0; i < count; i++) {
        var a = (Math.PI*2 * i/count)
        var idx = ~~(gls2.Noise.noise.length * i/count) + offset;
        var v = Math.pow(gls2.Noise.noise.at(idx), 2);
        for (var j = 0; j < 3; j++) {
            var ev = v * (j+1) * 4;
            var e = gls2.effectSprite["explodeL"]
                .clone()
                .addEventListener("animationend", function() {
                    this.remove();
                })
                .addEventListener("enterframe", function() {
                    this.x += Math.cos(this.a) * this.v;
                    this.y += Math.sin(this.a) * this.v;
                    this.scaleX += 0.01;
                    this.scaleY += 0.01;
                    if (this.age > 32) this.blendMode = "source-over";
                    this.age += 1;
                })
                .setScale(0.3 * (3-j))
                .setBlendMode("lighter")
                .setPosition(x, y)
                .gotoAndPlay();
            e.rotation = Math.random() * Math.PI*2;
            e.isEffect = true;
            e.alpha = 0.2;
            e.age = 0;
            e.a = a;
            e.v = ev;
            e.addChildTo(scene);
        }
    }
};

gls2.ChargeEffect = tm.createClass({
    superClass: tm.app.Object2D,

    target: null,
    rad: 0,
    angle: 0,
    alpha : 2,
    isEffect: true,

    reverse: false,

    init: function(target, reverse) {
        this.superInit();
        this.target = target;
        this.reverse = reverse;

        this.angle = 0;
        this.rad = reverse ? 0 : 200;
        this.alpha = reverse ? 1 : 0;
    },

    update: function(app) {
        if (this.target.parent === null) {
            this.remove();
            return;
        }

        if (app.frame % 2 === 0) {
            for (var i = 0; i < 9; i++) {
                var a = this.angle + i/9 * Math.PI*2;
                gls2.Particle(60, this.alpha, 0.9)
                    .setPosition(Math.cos(a)*this.rad+this.target.x, Math.sin(a)*this.rad+this.target.y)
                    .addChildTo(this.target.parent);
            }
        }
        this.angle += 0.05;
        this.rad += this.reverse ? 4 : -4;
        this.alpha += this.reverse ? -0.02 : 0.05;
        if (this.rad < 0 || 200 < this.rad) this.remove();
    },

});

gls2.StartHyperEffect = tm.createClass({
    superClass: tm.app.Object2D,

    target: null,
    angle: 0,
    isEffect: true,

    init: function(target) {
        this.superInit();
        this.target = target;

        this.angle = 0;
    },

    update: function() {
        if (this.target.parent === null) {
            this.remove();
            return;
        }

        for (var i = 0; i < 5; i++) {
            gls2.Particle(80, 1, 0.9)
                .setPosition(
                    Math.cos(this.angle-Math.PI*0.5)*40+this.target.x + gls2.math.rand(-2, 2),
                    Math.sin(this.angle-Math.PI*0.5)*40+this.target.y + gls2.math.rand(-2, 2)
                )
                .addChildTo(this.target.parent);
        }

        this.angle += 0.2;
        if (Math.PI*2 < this.angle) this.remove();
    },

});

})();
