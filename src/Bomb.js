gls2.Bomb = tm.createClass({
    superClass: tm.app.Object2D,
    gameScene: null,
    init: function(player, gameScene) {
        this.superInit();

        this.player = player;
        this.player.muteki = true;

        this.gameScene = gameScene;
        this.gameScene.bomb -= 1;
        this.gameScene.isBombActive = true;
        this.addChildTo(this.gameScene);

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
                scaleX: 3,
                scaleY: 3,
                alpha: 0,
            }, 400, "easeOutQuad")
            .call(function() {
                this.remove();
            }.bind(this.shockwave));

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

        this.origParticle = gls2.Particle(60, 1.0, 0.92, tm.graphics.Canvas()
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

        this.a = 0;
        this.r = 0;
        this.b = 8;
        this.age = 0;
    },
    update: function(app) {
        for (var i = 0; i < this.b; i++) {
            var t = this.a + i * Math.PI*2 / this.b;
            this.origParticle.clone()
                .setPosition(Math.cos(t)*this.r + this.x, Math.sin(t)*this.r + this.y)
                .addChildTo(this.parent);
        }
        this.a += 0.04;
        this.r = Math.sin(this.age * 0.02) * 250;

        if (Math.PI * 2 < this.age * 0.02) {
            this.player.muteki = false;
            this.gameScene.isBombActive = false;
            this.remove();
        } else if (Math.PI < this.age * 0.02) {
            this.b = 15;
        }

        this.age += 1;
    }
});
