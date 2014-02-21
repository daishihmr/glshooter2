/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

gls2.Effect = {};
gls2.Effect.setup = function() {

    gls2.effectSprite = {};

    gls2.Effect["explosion"] = Array.range(0, 3).map(function(i) {
        return tm.display.AnimationSprite(tm.asset.SpriteSheet({
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

    gls2.effectSprite["explodeL"] = tm.display.AnimationSprite(tm.asset.SpriteSheet({
        image: "explode0",
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
    var p = gls2.Effect["particle16"].clone().setPosition(x, y);
    p.isEffect = true;
    p.addChildTo(scene);
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

gls2.Effect.genShockwave = function(x, y, scene, scaleTo) {
    scaleTo = scaleTo || 1.8;
    var scale = 0.1;
    var sw = tm.display.Sprite()
        .setPosition(x, y)
        .setScale(scale)
        .setBlendMode("lighter");
    sw.isEffect = true;
    sw.addChildTo(scene);
    sw.image = gls2.Effect["shockwaveImage"];
    sw.tweener
        .clear()
        .to({
            scaleX: scaleTo,
            scaleY: scaleTo,
            alpha: 0.0
        }, 800, "easeOutQuad")
        .call(function() {
            sw.remove();
        });
};

gls2.Effect.genShockwaveRev = function(x, y, scene, scaleFrom) {
    scaleFrom = scaleFrom || 1.8;
    var scaleTo = 0.1;
    var sw = tm.display.Sprite()
        .setPosition(x, y)
        .setScale(scaleFrom)
        .setBlendMode("lighter");
    sw.isEffect = true;
    sw.addChildTo(scene);
    sw.image = gls2.Effect["shockwaveImage"];
    sw.tweener
        .clear()
        .to({
            scaleX: scaleTo,
            scaleY: scaleTo,
            alpha: 0.0
        }, 800, "easeOutQuad")
        .call(function() {
            sw.remove();
        });
};

gls2.Effect.genShockwaveL = function(x, y, scene) {
    var shockwave = tm.display.CircleShape(300, 300, {
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
    var e = gls2.Effect["explosion"].random().clone()
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
    gls2.Effect.genShockwave(x, y, scene);
};

gls2.Effect.explodeGS = function(x, y, scene) {
    gls2.playSound("explode");
    var e = gls2.Effect["explosion"].random().clone()
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

    e = gls2.Effect["explosion"].random().clone()
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
        .gotoAndPlay();
    e.isEffect = true;
    e.addChildTo(scene);

    e = gls2.Effect["explosion"].random().clone()
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
        .gotoAndPlay();
    e.isEffect = true;
    e.addChildTo(scene);
};

gls2.Effect.explodeM = function(x, y, scene) {
    gls2.playSound("explode2");
    gls2.playSound("explode3");
    var count = 20;
    var offset = ~~(Math.random() * gls2.Noise.noise.length);
    for (var i = 0; i < count; i++) {
        var e = gls2.Effect["explosion"].random().clone()
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
            .setPosition(x, y)
            .setRotation(Math.random() * 360)
            .gotoAndPlay();
        e.a = Math.PI*2 * Math.random();
        var idx = ~~(gls2.Noise.noise.length * i/count) + offset;
        e.v = Math.pow(gls2.Noise.noise.at(idx), 2) * 10;
        e.isEffect = true;
        e.addChildTo(scene);
    }
    gls2.Effect.genShockwave(x, y, scene, 5.0);
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
            var e = gls2.Effect["explosion"].random().clone()
                .addEventListener("animationend", function() {
                    this.remove();
                })
                .addEventListener("enterframe", function() {
                    this.x += Math.cos(this.a) * this.v;
                    this.y += Math.sin(this.a) * this.v;
                    this.scaleX += 0.01;
                    this.scaleY += 0.01;
                    this.age += 1;
                })
                .setScale(0.3 * (3-j))
                .setPosition(x, y)
                .setRotation(Math.random() * 360)
                .gotoAndPlay();
            e.rotation = Math.random() * Math.PI*2;
            e.isEffect = true;
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
    isEffect: true,
    alpha: 1,

    reverse: false,

    init: function(target, reverse) {
        this.superInit();
        this.target = target;
        this.reverse = reverse;

        this.angle = 0;
        this.rad = reverse ? 0 : 200;
        this.alpha = reverse ? 1 : 0;

        this.on("added", function() {
            if (gls2.ChargeEffect.exists) {
                this.remove();
            } else {
                gls2.ChargeEffect.exists = true;
            }
        });
        this.on("removed", function() {
            gls2.ChargeEffect.exists = false;
        });
    },

    update: function(app) {
        if (this.target.parent === null) {
            this.remove();
            return;
        }

        if (app.frame % 3 === 0) {
            for (var i = 0; i < 8; i++) {
                var a = this.angle + i/6 * Math.PI*2;
                gls2.Particle(120, this.alpha, 0.9)
                    .setPosition(Math.cos(a)*this.rad+this.target.x, Math.sin(a)*this.rad+this.target.y)
                    .addChildTo(this.target.parent);
            }
        }
        this.angle += 0.05;
        this.rad += 4 * (this.reverse ? 1 : -1);
        this.alpha += 0.02 * (this.reverse ? -1 : 1);
        if (this.rad < 0 || 600 < this.rad) this.remove();
    },

});
gls2.ChargeEffect.exists = false;

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
            var p = gls2.Particle(80, 1, 0.9)
                .setPosition(
                    Math.cos(this.angle-Math.PI*0.5)*40+this.target.x + gls2.math.rand(-2, 2),
                    Math.sin(this.angle-Math.PI*0.5)*40+this.target.y + gls2.math.rand(-2, 2)
                )
                .on("enterframe", function() {
                    this.x += this.dx;
                    this.y += this.dy;
                })
                .addChildTo(this.target.parent);
            p.dx = Math.cos(this.angle) * 3;
            p.dy = Math.sin(this.angle) * 3;
        }

        this.angle += 0.2;
        if (Math.PI*2 < this.angle) this.remove();
    },

});

gls2.GetTrophyEffect = tm.createClass({
    superClass: tm.display.RectangleShape,
    label: null,
    init: function(text) {
        this.superInit(SC_W, 40, {
            fillStyle: "rgba(0, 0, 0, 0.3)",
            strokeStyle: "transparent"
        });
        this.setPosition(this.width*0.5, SC_H - this.height*0.5);

        this.label = tm.display.Label("トロフィー「" + text + "」を獲得！", 20)
            .setFontWeight("bold")
            .setAlign("left")
            .setBaseline("middle")
            .setPosition(SC_W, 0)
            .setFillStyle("rgba(255, 255, 255, 0.5)")
            .addChildTo(this);
        this.star = tm.display.Sprite("tex3", 64, 64)
            .setScale(0.3)
            .setFrameIndex(0)
            .setPosition(-20, 0)
            .addChildTo(this.label);
    },
    "onadded": function() {
        if (this.parent instanceof tm.app.Scene) {
            this.parent.one("exit", function() {
                if (this.parent) this.remove();
            }.bind(this));
        }
    },
    update: function() {
        if (gls2.core.gameScene.player.y > SC_H*0.9) {
            this.alpha = 0.1;
        } else {
            this.alpha = 1.0;
        }

        this.label.x -= 2;
        if (this.label.x < -SC_W*2) {
            this.remove();
        }
    }
});

gls2.LargeExplodeEffect = tm.createClass({
    superClass: tm.app.Object2D,
    isEffect: true,

    addTarget: null,
    age: 0,

    init: function(x, y, addTarget) {
        this.superInit();
        this.addTarget = addTarget;
        this.setPosition(x, y);

        this.addChildTo(addTarget);
    },
    "onadded": function() {
        var soundStarted = false;;

        for (var i = 0; i < 30; i++) {
            var angle = Math.random() * 360;
            var speed = gls2.Noise.noise[Math.floor(gls2.Noise.noise.length * angle/360)] * 50;

            var position = tm.geom.Vector2(this.x, this.y);
            var velocity = tm.geom.Vector2().setAngle(angle, speed);

            var jlen = 7;
            for (var j = 0; j < jlen; j++) {
                var e = tm.display.Sprite("explode" + Math.floor(Math.random() * 3), 100, 100)
                    .setPosition(this.x, this.y)
                    .setScale(1+Math.random()*3.0)
                    .setRotation(Math.random()*360);
                e.dx = velocity.x * (jlen + 1 - j)*0.02;
                e.dy = velocity.y * (jlen + 1 - j)*0.02;
                e.frameIndex = -j*3 + Math.floor(Math.random() * -10 - 7);
                e.update = function() {
                    this.frameIndex += 0.3;

                    if (this.frameIndex < 0) {
                        this.visible = false;
                        return;
                    } else if (this.frameIndex >= 64) {
                        this.remove();
                        return;
                    } else {
                        if (!soundStarted) {
                            soundStarted = true;
                            gls2.playSound("explode6");
                        }
                    }

                    this.setFrameIndex(Math.floor(this.frameIndex));
                    this.visible = true;

                    this.x += this.dx;
                    this.y += this.dy;

                    this.blendMode = this.frameIndex < 10 ? "lighter" : "source-over";
                };
                e.isEffect = true;
                e.addChildTo(this.addTarget);
            }
        }

        var p = gls2.Particle(500, 0.001, 1.003);
        for (var i = 0; i < 80; i++) {
            var angle = Math.random() * 360;
            var speed = gls2.Noise.noise[Math.floor(gls2.Noise.noise.length * angle/360)] * 15;
            var c = p.clone().setPosition(this.x, this.y).addChildTo(this.addTarget);
            c.velocity = tm.geom.Vector2().setAngle(angle, speed);
            c.position.add(tm.geom.Vector2.mul(c.velocity, -40));
            c.setScale(0.1, 0.1);
            c.age = 0;
            c.on("enterframe", function() {
                this.age += 1;
                this.position.add(this.velocity);
                this.scaleX += 0.01;
                this.scaleY += 0.01;
                if (this.age > 80) this.alphaDecayRate = 0.99;
            });
        }

        this.remove();
    }
});

})();
