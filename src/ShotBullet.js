(function() {

var origParticle = null;

// TODO Spriteにする
gls2.ShotBullet = tm.createClass({
    superClass: tm.app.CircleShape,
    speed: 20,
    attackPower: 1,

    init: function(x, y, dir) {
        var SZ = 24;
        this.superInit(SZ, SZ, {
            fillStyle: tm.graphics.RadialGradient(SZ*0.5, SZ*0.5, 0, SZ*0.5, SZ*0.5, SZ*0.5).addColorStopList([
                { offset: 0.0, color: "rgba(255,255,255,1)" },
                { offset: 0.5, color: "rgba(255,255,255,1)" },
                { offset: 1.0, color: "rgba(  0,100,255,0)" }
            ]).toStyle(),
            strokeStyle: "rgba(0,0,0,0)"
        });
        this.blendMode = "lighter";

        this.scaleY = 0.5;
        var rad = Math.degToRad(dir);
        this.vx = Math.cos(rad) * this.speed;
        this.vy = Math.sin(rad) * this.speed;

        this.setPosition(x, y);
        this.rotation = dir;

        this.addEventListener("added", function() {
            activeList.push(this);
        });
        this.addEventListener("removed", function() {
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);
        });

        if (origParticle === null) {
            var size = 16;
            origParticle = gls2.Particle(size, 1.0, 0.9, tm.graphics.Canvas()
                .resize(size, size)
                .setFillStyle(
                    tm.graphics.RadialGradient(size*0.5, size*0.5, 0, size*0.5, size*0.5, size*0.5)
                        .addColorStopList([
                            {offset:0.0, color: "rgba(255,255,255,1.0)"},
                            {offset:1.0, color: "rgba(255,128,  0,0.0)"},
                        ]).toStyle()
                )
                .fillRect(0, 0, size, size)
                .element
            );
        }
    },

    update: function() {
        this.x += this.vx;
        this.y += this.vy;

        var copied = [].concat(gls2.Enemy.activeList);
        for (var i = 0, len = copied.length; i < len; i++) {
            var e = copied[i];
            if ((this.x-e.x)*(this.x-e.x) + (this.y-e.y)*(this.y-e.y) < (this.radius+e.radius)*this.radius+e.radius) {
                this.genParticle();
                e.damage(this.attackPower);
                this.remove();
                break;
            }
        }


        if (this.x < -60 || SC_W+60 < this.x || this.y < -60 || SC_H+60 < this.y) {
            this.remove();
        }
    },

    genParticle: function() {
        var p = origParticle.clone().setPosition(this.x, this.y).addChildTo(this.parent);
        var speed = Math.randf(2, 8);
        var dir = Math.random() * Math.PI * 2;
        p.dx = Math.cos(dir) * speed;
        p.dy = Math.sin(dir) * speed;
        p.scaleX = p.scaleY = (Math.randf(0.1, 0.5) + Math.randf(0.1, 0.5)) / 2;
        p.addEventListener("enterframe", function() {
            this.x += this.dx;
            this.y += this.dy;
            this.dx *= 0.9;
            this.dy *= 0.9;
        });
    },

});

gls2.ShotBullet.clearAll = function() {
    var copied = [].concat(activeList);
    for (var i = 0, end = copied.length; i < end; i++) {
        copied[i].remove();
    }
};

var activeList = gls2.ShotBullet.activeList = [];

})();
