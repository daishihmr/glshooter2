(function() {

gls2.Bomb = tm.createClass({
    superClass: tm.app.Object2D,

    isEffect: true,

    gameScene: null,

    init: function(player, gameScene) {
        this.superInit();

        this.player = player;

        this.gameScene = gameScene;

        this.shockwave = tm.app.CircleShape(300, 300, {
            strokeStyle: "rgba(0,0,0,0)",
            fillStyle: tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150)
                .addColorStopList([
                    { offset: 0.0, color: "rgba(255,255,255,0)" },
                    { offset: 0.5, color: "rgba(255,255,255,0)" },
                    { offset: 0.9, color: "rgba(255,255,255,1)" },
                    { offset: 1.0, color: "rgba(255,255,255,0)" },
                ])
                .toStyle()
        }).setScale(0.1, 0.1).addChildTo(this);
        this.shockwave.tweener.clear()
            .to({
                scaleX: 5,
                scaleY: 5,
                alpha: 0,
            }, 500, "easeOutQuad")
            .call(function() {
                this.remove();
            }.bind(this.shockwave));

        this._setupCore();

        if (origParticle === null) {
            origParticle = gls2.Particle(60, 1.0, 0.92, tm.graphics.Canvas()
                .resize(10, 10)
                .setFillStyle(
                    tm.graphics.RadialGradient(10*0.5, 10*0.5, 0, 10*0.5, 10*0.5, 10*0.5)
                        .addColorStopList([
                            {offset:0, color: "rgba(255,255,255,1.0)"},
                            {offset:1, color: "rgba(  0,  0,255,0.0)"},
                        ]).toStyle()
                )
                .fillRect(0, 0, 10, 10)
                .element);
        }

        this.a = 0;
        this.r = 0;
        this.b = 8;
        this.age = 0;
        this.rd = 1;

        this.addEventListener("added", function() {
            this.gameScene.isBombActive = true;
            this.player.muteki = true;
            this.gameScene.bomb -= 1;
            this.gameScene.endHyperMode();
            this.gameScene.println("drop 'BOMBER'!!", true);
        });
        this.addEventListener("removed", function() {
            this.gameScene.isBombActive = false;
            this.player.muteki = false;
        });
    },

    _setupCore: function() {
        this.core = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: "bomb",
            frame: {
                width: 280,
                height: 280,
            },
            animations: {
                "animation": {
                    frames: Array.range(0, 8),
                    next: "animation",
                    frequency: 3,
                }
            }
        }), 400, 400).addChildTo(this);
        this.core.gotoAndPlay("animation");
        this.core.blendMode = "lighter";
        this.core.setScale(0.1, 0.1);
        this.core.tweener.clear()
            .to({
                scaleX: 1.0,
                scaleY: 1.0
            }, 200, "easeOutBack")
            .call(function() {
                this.update = function() {
                    this.scaleX = this.scaleY = Math.randf(0.9, 1.1);
                };
            }.bind(this.core));
    },

    update: function(app) {
        for (var i = 0; i < this.b; i++) {
            var t = (this.a * this.rd) + i * Math.PI*2 / this.b;
            origParticle.clone()
                .setPosition(Math.cos(t)*this.r + this.x, Math.sin(t)*this.r + this.y)
                .addChildTo(this.parent);
        }
        this.a += 0.04;
        var theta = this.age * 0.015;
        this.r = Math.sin(theta) * 250;

        if (Math.PI * 2 < theta) {
            this.remove();
        } else if (Math.PI < theta) {
            this.b = 16;
            this.age += 3.6;
            this.rd = -1;
        } else {
            this.b = 8;
            this.age += 1.8;
            this.rd = 1;
        }
    },

});

gls2.MiniBomb = tm.createClass({
    superClass: gls2.Bomb,
    init: function(player, gameScene) {
        this.superInit(player, gameScene);

        this.addEventListener("added", function() {
            this.gameScene.bomb = 0;
        });
    },

    _setupCore: function() {
        this.core = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: "bomb",
            frame: {
                width: 280,
                height: 280,
            },
            animations: {
                "animation": {
                    frames: Array.range(0, 8),
                    next: "animation",
                    frequency: 3,
                }
            }
        }), 400, 400).addChildTo(this);
        this.core.gotoAndPlay("animation");
        this.core.blendMode = "lighter";
        this.core.setScale(0.1, 0.1);
        this.core.tweener.clear()
            .to({
                scaleX: 0.5,
                scaleY: 0.5
            }, 200, "easeOutBack")
            .call(function() {
                this.update = function() {
                    this.scaleX = this.scaleY = Math.randf(0.4, 0.6);
                };
            }.bind(this.core));
    },

    update: function(app) {
        for (var i = 0; i < this.b; i++) {
            var t = (this.a * this.rd) + i * Math.PI*2 / this.b;
            origParticle.clone()
                .setPosition(Math.cos(t)*this.r + this.x, Math.sin(t)*this.r + this.y)
                .setScale(0.7, 0.7)
                .addChildTo(this.parent);
        }
        this.a += 0.04;
        var theta = this.age * 0.04;
        this.r = Math.sin(theta) * 100;

        if (Math.PI < theta) {
            this.remove();
        } else {
            this.b = 8;
            this.age += 1.8;
            this.rd = 1;
        }
    },

});

var origParticle = null;

})();
