gls2.Particle = tm.createClass({
    superClass: tm.app.CanvasElement,
    alpha: 1.0,
    alphaDecayRate: 0.85,
    init: function(size, initialAlpha, alphaDecayRate) {
        this.superInit();
        this.width = this.height = size;
        if (initialAlpha !== undefined) this.alpha = initialAlpha;
        if (alphaDecayRate !== undefined) this.alphaDecayRate = alphaDecayRate;
        this.blendMode = "lighter";

        if (gls2.Particle.IMAGE == null) {
            var c = tm.graphics.Canvas();
            c.resize(size, size);
            c.fillStyle = tm.graphics.RadialGradient(size/2,size/2,0,size/2,size/2,size/2).addColorStopList([
                {offset:0, color: "rgba(255,255,255,0.1)"},
                {offset:1, color: "rgba(  0,  0,  0,0.0)"}
            ]).toStyle();
            c.fillRect(0, 0, size, size);

            gls2.Particle.IMAGE = c.element;
        }
    },
    update: function(app) {
        this.alpha *= this.alphaDecayRate;
        if (this.alpha < 0.001) {
            this.remove();
        }
    },
    draw: function(canvas) {
        canvas.context.drawImage(gls2.Particle.IMAGE,
            -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height);
    }
});
gls2.Particle.IMAGE = null;

gls2.BackfireParticle = tm.createClass({
    superClass: gls2.Particle,
    ground: null,
    init: function() {
        this.superInit(16);
        this.ground = gls2.GameScene.instance.ground;
    },
    update: function(app) {
        this.x += this.ground.dx;
        this.y += this.ground.dy + 1;
        this.superClass.prototype.update.apply(this, app);
    }
});
