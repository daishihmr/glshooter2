(function() {

var origParticle = null;

gls2.Laser = tm.createClass({
    superClass: tm.app.CanvasElement,
    player: null,
    image: null,
    c: null,
    age: 0,
    hitY: 0,
    rootTexture: null,
    attackPower: 10,

    beforeFrameVisible: false,

    head: null,
    foot: null,
    aura: null,

    init: function(player, type) {
        this.player = player;
        var tex = tm.asset.AssetManager.get("laser" + "RGBH"[type]);

        var self = this;

        this.superInit();
        this.image = tex.element;
        this.width = tex.width;
        this.height = SC_H;
        this.blendMode = "lighter";
        this.origin.y = 1;

        this.c = tm.graphics.Canvas();
        this.c.resize(this.width, SC_H + 100);
        this.c.globalCompositeOperation = "lighter";

        this.aura = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: "aura",
            frame: {
                width: 100,
                height: 100,
            },
            animations: {
                "animation": {
                    frames: [ 0, 4, 8, 12 ].map(function(v) { return type+v }),
                    next: "animation",
                    frequency: 2,
                },
            }
        }), 100, 100).setPosition(0, 50).setScale(1.2, 1.2);
        this.aura.addChildTo(this);
        this.aura.gotoAndPlay("animation");

        this.foot = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: "laser" + "RGBH"[type] + "Foot",
            frame: {
                width: 128,
                height: 64,
            },
            animations: {
                "animation": {
                    frames: [ 0, 1, 2, 3 ],
                    next: "animation",
                    frequency: 2,
                },
            },
        }), 128, 64).setScale(1.2, 1.2);
        this.foot.addChildTo(this);
        this.foot.gotoAndPlay("animation");

        this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: "laser" + "RGBH"[type] + "Head",
            frame: {
                width: 80,
                height: 80,
            },
            animations: {
                "animation": {
                    frames: [ 0, 1, 2, 3 ],
                    next: "animation",
                    frequency: 2,
                },
            },
        }), 80, 80).setScale(1.5, 1.5);
        this.head.update = function() {
            this.y = self.hitY - self.y;
        };
        this.head.addChildTo(this);
        this.head.gotoAndPlay("animation");

        if (origParticle === null) {
            var size = 16;
            origParticle = gls2.Particle(size, 1.0, 0.9, tm.graphics.Canvas()
                .resize(size, size)
                .setFillStyle(
                    tm.graphics.RadialGradient(size*0.5, size*0.5, 0, size*0.5, size*0.5, size*0.5)
                        .addColorStopList([
                            {offset:0.0, color: "rgba(255,255,255,1.0)"},
                            {offset:1.0, color: "rgba(  0,  0,255,0.0)"},
                        ]).toStyle()
                )
                .fillRect(0, 0, size, size)
                .element
            );
        }
    },

    update: function(app) {
        this.x = this.player.x;
        this.y = this.player.y - 40;

        if (!this.visible) {
            if (this.beforeFrameVisible) {
                for (var y = this.y; y > this.hitY; y -= 30) {
                    this.genParticle(1, y);
                }
            }
            this.hitY = this.y;
        } else {
            if (!this.beforeFrameVisible) {
                this.hitY = this.y;
            } else {
                this.hitY -= 40;
            }
        }

        if (this.hitY < -80) this.hitY = -80;
        this.beforeFrameVisible = this.visible;
        this.age += 1;
    },

    genParticle: function(count, y) {
        var y = y || this.hitY;
        for (var i = 0; i < count; i++) {
            var p = origParticle.clone().setPosition(this.x, y).addChildTo(this.parent);
            var speed = gls2.math.randf(8, 14);
            var dir = gls2.math.randf(0, Math.PI);
            p.dx = Math.cos(dir) * speed;
            p.dy = Math.sin(dir) * speed;
            p.scaleX = p.scaleY = (gls2.math.randf(0.5, 1.5) + gls2.math.randf(0.5, 1.5)) / 2;
            p.addEventListener("enterframe", function() {
                this.x += this.dx;
                this.y += this.dy;
                this.dx *= 0.95;
                this.dy *= 0.95;
            });
        }
    },

    genAuraParticle: function(count, y) {
        var y = y || this.hitY;
        for (var i = 0; i < count; i++) {
            var p = origParticle.clone().setPosition(this.x, y).addChildTo(this.parent);
            var speed = gls2.math.randf(12, 20);
            var dir = gls2.math.randf(0, Math.PI);
            p.dx = Math.cos(dir) * speed;
            p.dy = Math.sin(dir) * speed;
            p.scaleX = p.scaleY = (gls2.math.randf(1.0, 3.0) + gls2.math.randf(1.0, 3.0)) / 2;
            p.addEventListener("enterframe", function() {
                this.x += this.dx;
                this.y += this.dy;
                this.dx *= 0.95;
                this.dy *= 0.95;
            });
        }
    },
    draw: function(canvas) {
    },
});

})();
