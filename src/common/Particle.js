/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

gls2.Particle = tm.createClass({
    superClass: tm.display.CanvasElement,
    alpha: 1.0,
    alphaDecayRate: 0.85,
    size: 0,
    image: null,
    isEffect: true,

    /**
     * @param {number} size サイズ
     * @param {number=} initialAlpha アルファ初期値
     * @param {number=} alphaDecayRate アルファ減衰率
     * @param {Image=} image 画像
     */
    init: function(size, initialAlpha, alphaDecayRate, image) {
        this.superInit();
        if (initialAlpha === undefined) initialAlpha = 1;
        if (alphaDecayRate === undefined) alphaDecayRate = 0.85;

        if (gls2.core.particleEffectLevel === 1) {
            this.size *= 0.7;
            this.alphaDecayRate *= 0.9;
        }

        this.width = this.height = this.size = size;
        this.alpha = initialAlpha;
        this.alphaDecayRate = alphaDecayRate;
        this.blendMode = "lighter";

        if (gls2.core.particleEffectLevel === 1) {
            this.alphaDecayRate *= 0.9;
        }

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

        if (gls2.core.particleEffectLevel === 2) {
            this.alphaDecayRate *= 0.1;
        }
    },
    update: function(app) {
        this.alpha *= this.alphaDecayRate;
        if (this.alpha < 0.01) {
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
    superUpdate: gls2.Particle.prototype.update,
    init: function(ground, size) {
        size = size || 20;
        this.superInit(size, 1.0, 0.82, tm.graphics.Canvas()
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
    	this.superUpdate(app);
        this.x += this.ground.dx;
        this.y += this.ground.dy + 0.3;
    },
    clone: function(size) {
        return gls2.BackfireParticle(this.ground, size);
    },
});

})();
