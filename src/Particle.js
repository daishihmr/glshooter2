(function() {

gls2.Particle = tm.createClass({
    superClass: tm.app.CanvasElement,
    alpha: 1.0,
    alphaDecayRate: 0.85,
    image: null,

    /**
     * @param {number} size サイズ
     * @param {number} initialAlpha アルファ初期値
     * @param {number} alphaDecayRate アルファ減衰率
     */
    init: function(size, initialAlpha, alphaDecayRate, image) {
        this.superInit();
        this.width = this.height = size;
        if (initialAlpha !== undefined) this.alpha = initialAlpha;
        if (alphaDecayRate !== undefined) this.alphaDecayRate = alphaDecayRate;
        this.blendMode = "lighter";

        if (gls2.Particle.IMAGE == null) {
            var c = tm.graphics.Canvas();
            c.resize(size, size);
            c.fillStyle = tm.graphics.RadialGradient(size * 0.5, size * 0.5, 0,size * 0.5, size * 0.5, size * 0.5).addColorStopList([
                {offset:0, color: "rgba(255,255,255,0.1)"},
                {offset:1, color: "rgba(  0,  0,  0,0.0)"}
            ]).toStyle();
            c.fillRect(0, 0, size, size);

            gls2.Particle.IMAGE = c.element;
        }

        this.image = image || gls2.Particle.IMAGE;
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
    }
});
gls2.Particle.IMAGE = null;

gls2.BackfireParticle = tm.createClass({
    superClass: gls2.Particle,
    ground: null,
    init: function() {
        this.superInit(Math.rand(14, 20));
        this.ground = gls2.GameScene.instance.ground;
    },
    update: function(app) {
        this.superClass.prototype.update.apply(this, app);
        this.x += this.ground.dx;
        this.y += this.ground.dy + 0.5;
    }
});

})();
