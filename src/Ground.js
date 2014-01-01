/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/** @const */
var LS = 3;
/** @const */
var C = [];
/** @const */
var L = [];
for (var i = 0; i < LS; i++) {
    C[i] = 40 * Math.pow(0.8, i);
    L[i] = C[i]/2*Math.sqrt(3);
}

/**
 * @class
 */
gls2.Ground = tm.createClass(
/** @lends {gls2.Ground.prototype} */
{
    superClass: tm.graphics.Canvas,

    /** @type {gls2.GroundElement} */
    gElement: null,

    init: function() {
        this.superInit("#background");
        this.resize(SC_W, SC_H).fitWindow();

        this.gElement = gls2.GroundElement();
        this.gElement.ground = this;
        this.gElement.update = function(app) {
            this.update(app.frame);
        }.bind(this);

        this.blendMode = "lighter";
    },

    update: function(frame) {
        // var beginProcessTime = new Date().getTime();

        this.gElement.dx = Math.cos(this.gElement.direction) * this.gElement.speed;
        this.gElement.dy = Math.sin(this.gElement.direction) * this.gElement.speed;

        for (var i = 0; i < LS; i++) {
            this.gElement.gx[i] += this.gElement.dx * Math.pow(0.8, i);
            while (C[i]*3 < this.gElement.gx[i]) this.gElement.gx[i] -= C[i]*3;
            while (this.gElement.gx[i] < -C[i]*3) this.gElement.gx[i] += C[i]*3;

            this.gElement.gy[i] += this.gElement.dy * Math.pow(0.8, i);
            while (L[i]*2 < this.gElement.gy[i]) this.gElement.gy[i] -= L[i]*2;
            while (this.gElement.gy[i] < -L[i]*2) this.gElement.gy[i] += L[i]*2;
        }

        if (frame % 2 === 0) this.draw();

        // console.log("Ground update " + (new Date().getTime() - beginProcessTime));
    },

    draw: function() {
        if (this.gElement.background !== null) {
            this.clearColor(this.gElement.background, 0, 0);
        } else {
            this.clear();
        }

        for (var i = 0; i < LS; i++) {
            this.lineWidth = 0.3 * Math.pow(0.8, i);
            this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, SC_H)
                .addColorStopList([
                    { offset: 0.0, color: "rgba(255,255,255," + (0.6 * Math.pow(0.8, i)) + ")" },
                    { offset: 1.0, color: "rgba(255,255,255," + (0.4 * Math.pow(0.8, i)) + ")" },
                ])
                .toStyle();
            this.beginPath();
            var yy = 0;
            for (var x = this.gElement.gx[i]-C[i]*3; x < SC_W+C[i]*3; x += C[i]*1.5) {
                yy = (yy === 0) ? L[i] : 0;
                for (var y = this.gElement.gy[i]-L[i]*2 + yy; y < SC_H+L[i]*2; y += L[i]*2) {
                    this.line(x, y, x + C[i], y);
                    this.line(x, y, x - C[i]/2, y + L[i]);
                    this.line(x, y, x - C[i]/2, y - L[i]);
                }
            }
            this.stroke();
        }
    },

})

/**
 * @class
 * @extends {tm.app.Object2D}
 */
gls2.GroundElement = tm.createClass(
/** @lends {gls2.GroundElement} */
{
    superClass: tm.app.Object2D,

    gx: 0,
    gy: 0,
    direction: 0,
    speed: 0,
    dx: 0,
    dy: 0,

    background: null,

    init: function() {
        this.superInit();

        this.gx = [];
        this.gy = [];
        for (var i = 0; i < LS; i++) {
            this.gx[i] = SC_W*0.5;
            this.gy[i] = SC_H*0.5;
        }
        this.direction = Math.PI * 0.5;
        this.speed = 1;
        this.dx = 0;
        this.dy = 0;
    },
});

})();
