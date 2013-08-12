(function() {

/** @const */
var C = 16 * 2;
/** @const */
var L = C/2*Math.sqrt(3);
/** @const */
var C2 = C*0.8;
/** @const */
var L2 = C2/2*Math.sqrt(3);

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
        this.gElement.dx = Math.cos(this.gElement.direction) * this.gElement.speed;
        this.gElement.dy = Math.sin(this.gElement.direction) * this.gElement.speed;

        this.gElement.gx += this.gElement.dx;
        while (C*3 < this.gElement.gx) this.gElement.gx -= C*3;
        while (this.gElement.gx < -C*3) this.gElement.gx += C*3;

        this.gElement.gy += this.gElement.dy;
        while (L*2 < this.gElement.gy) this.gElement.gy -= L*2;
        while (this.gElement.gy < -L*2) this.gElement.gy += L*2;

        this.gElement.gx2 += this.gElement.dx*0.8;
        while (C2*3 < this.gElement.gx2) this.gElement.gx2 -= C2*3;
        while (this.gElement.gx2 < -C2*3) this.gElement.gx2 += C2*3;

        this.gElement.gy2 += this.gElement.dy*0.8;
        while (L2*2 < this.gElement.gy2) this.gElement.gy2 -= L2*2;
        while (this.gElement.gy2 < -L2*2) this.gElement.gy2 += L2*2;

        if (frame % 2 === 0) this.draw();
    },

    draw: function() {
        if (this.gElement.background !== null) {
            this.clearColor(this.gElement.background, 0, 0);
        } else {
            this.clear();
        }

        this.lineWidth = 0.2;
        this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, SC_H)
            .addColorStopList([
                { offset: 0.0, color: "rgba(255,255,255,1.0)" },
                { offset: 1.0, color: "rgba(255,255,255,0.5)" },
            ])
            .toStyle();
        this.beginPath();
        var yy = 0;
        for (var x = this.gElement.gx-C*3; x < SC_W+C*3; x += C*1.5) {
            yy = (yy === 0) ? L : 0;
            for (var y = this.gElement.gy-L*2 + yy; y < SC_H+L*2; y += L*2) {
                this.line(x, y, x + C, y);
                this.line(x, y, x - C/2, y + L);
                this.line(x, y, x - C/2, y - L);
            }
        }
        this.stroke();

        this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, SC_H)
            .addColorStopList([
                { offset: 0.0, color: "rgba(128,128,128,1.0)" },
                { offset: 1.0, color: "rgba(128,128,128,0.5)" },
            ])
            .toStyle();
        this.beginPath();
        yy = 0;
        for (var x = this.gElement.gx2-C2*3; x < SC_W+C2*3; x += C2*1.5) {
            yy = (yy === 0) ? L2 : 0;
            for (var y = this.gElement.gy2-L2*2 + yy; y < SC_H+L2*2; y += L2*2) {
                this.line(x, y, x + C2, y);
                this.line(x, y, x - C2/2, y + L2);
                this.line(x, y, x - C2/2, y - L2);
            }
        }
        this.stroke();
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
    gx2: 0,
    gy2: 0,
    direction: 0,
    speed: 0,
    dx: 0,
    dy: 0,

    background: null,

    init: function() {
        this.superInit();

        this.gx = this.gy = 0;
        this.gx2 = this.gy2 = 0;
        this.direction = Math.PI * 0.5;
        this.speed = 1;
        this.dx = 0;
        this.dy = 0;
    },
});

})();
