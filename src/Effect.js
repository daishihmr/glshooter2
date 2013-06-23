gls2.Effect = {};
gls2.Effect.setup = function() {
    gls2.Effect["explosion"] = Array.range(0, 4).map(function(i) {
        var exp = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: "explode" + i,
            frame: {
                width: 100,
                height: 100,
            },
            animations: {
                "default": {
                    frame: Array.range(0, 25),
                    next: null,
                },
            },
        }, 100, 100))
        return exp;
    });

    gls2.Effect["shockwave"] = tm.app.CircleShape(100, 100, {
        strokeStyle: "rgba(0,0,0,0)",
        fillStyle: tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50)
            .addColorStopList([
                { offset: 0.00, color: "rgba(255,255,255,0)" },
                { offset: 0.70, color: "rgba(255,255,255,0)" },
                { offset: 0.95, color: "rgba(255,255,255,1)" },
                { offset: 1.00, color: "rgba(255,255,255,0)" },
            ])
            .toStyle()
    });

};

gls2.Effect.explode = function(x, y, scene) {
    var e = this["explosion"][Math.rand(0, 3)]
        .clone()
        .addEventListener("animationend", function() {
            this.remove();
        })
        .setPosition(x, y)
        .setRotation(Math.random() * 360)
        .setBlendMode("lighter")
        .gotoAndPlay();
    e.isEffect = true;
    e.addChildTo(scene);
};
