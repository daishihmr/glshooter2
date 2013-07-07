gls2.Bomb = tm.createClass({
    init: function(scene) {
        var b = tm.app.AnimationSprite(tm.app.SpriteSheet({
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
        }), 280, 280).setPosition(SC_W/2, SC_H/2).addChildTo(scene);
        b.gotoAndPlay("animation");
        b.blendMode = "lighter";

        var particle = gls2.Particle(60, 1.0, 0.92, tm.graphics.Canvas()
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

        var a = 0;
        var r = 0;
        b.tweener.clear()
            .call(function() {
                for (var i = 0; i < 16; i++) {
                    var t = a + i * Math.PI*2/16;
                    particle.clone().setPosition(Math.cos(t)*r+SC_W/2, Math.sin(t)*r+SC_H/2).addChildTo(scene);
                }
                a += 0.05;
                r = Math.sin(a*0.8)*200;
            })
            .setLoop(true);
    }
});
