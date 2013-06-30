(function() {

gls2.Particle = tm.createClass({
    superClass: tm.app.CanvasElement,
    alpha: 1.0,
    alphaDecayRate: 0.85,
    size: 0,
    image: null,

    /**
     * @param {number} size サイズ
     * @param {number=} initialAlpha アルファ初期値
     * @param {number=} alphaDecayRate アルファ減衰率
     * @param {Image=} image 画像
     */
    init: function(size, initialAlpha, alphaDecayRate, image) {
        this.superInit();
        this.width = this.height = this.size = size;
        if (initialAlpha !== undefined) this.alpha = initialAlpha;
        if (alphaDecayRate !== undefined) this.alphaDecayRate = alphaDecayRate;
        this.blendMode = "lighter";

        if (image) {
            this.image = image
        } else {
            this.image = tm.graphics.Canvas()
                .resize(size, size)
                .setFillStyle(
                    tm.graphics.RadialGradient(size*0.5, size*0.5, 0, size*0.5, size*0.5, size*0.5)
                        .addColorStopList([
                            {offset:0, color: "rgba(255,255,255,0.1)"},
                            {offset:1, color: "rgba(  0,  0,  0,0.0)"},
                        ]).toStyle()
                )
                .fillRect(0, 0, size, size)
                .element;
        }
    },
    update: function(app) {
        this.alpha *= this.alphaDecayRate;
        if (this.alpha < 0.001) {
            this.remove();
        } else if (1.0 < this.alpha) {
            this.alpha = 1.0;
        }
    },
    draw: function(canvas) {
        canvas.context.drawImage(this.image,
            -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height);
    },
    clone: function() {
        return gls2.Particle(this.size, this.initialAlpha, this.alphaDecayRate, this.image);
    },
});

gls2.BackfireParticle = tm.createClass({
    superClass: gls2.Particle,
    ground: null,
    init: function(ground) {
        var size = 20;
        this.superInit(size, 1.0, 0.8, tm.graphics.Canvas()
            .resize(size, size)
            .setFillStyle(
                tm.graphics.RadialGradient(size*0.5, size*0.5, 0, size*0.5, size*0.5, size*0.5)
                    .addColorStopList([
                        {offset:0, color: "rgba(255,255,255,0.5)"},
                        {offset:1, color: "rgba(  0,  0,  0,0.0)"},
                    ]).toStyle()
            )
            .fillRect(0, 0, size, size)
            .element
        );
        this.ground = ground;
    },
    update: function(app) {
        this.superClass.prototype.update.apply(this, app);
        this.x += this.ground.dx;
        this.y += this.ground.dy + 0.2;
    },
    clone: function() {
        return gls2.BackfireParticle(this.ground);
    },
});

})();
