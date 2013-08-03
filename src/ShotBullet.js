(function() {

var origParticle = null;

gls2.ShotBullet = tm.createClass({
    superClass: tm.app.Sprite,
    speed: 20,
    attackPower: 1,

    init: function() {
        var SZ = 64;
        this.superInit("shotbullet", SZ, SZ);
        this.blendMode = "lighter";
        this.setScale(1.5, 1.5);

        this.addEventListener("added", function() {
            activeList.push(this);
        });
        this.addEventListener("removed", function() {
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);
            pool.push(this);
        });

        this.boundingRadius = 32;

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

        // TODO 自機タイプの寄って色を変える
        this.setFrameIndex(2, 64, 64);
    },

    update: function() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -60 || SC_W+60 < this.x || this.y < -60 || SC_H+60 < this.y) {
            this.remove();
        }
    },

    genParticle: function(n) {
        for (var i = 0; i < n; i++) {
            var p = origParticle.clone().setPosition(this.x, this.y).addChildTo(this.parent);
            var speed = gls2.math.randf(2, 8);
            var dir = Math.random() * Math.PI * 2;
            p.dx = Math.cos(dir) * speed;
            p.dy = Math.sin(dir) * speed;
            p.scaleX = p.scaleY = (gls2.math.randf(0.1, 0.5) + gls2.math.randf(0.1, 0.5)) / 2;
            p.addEventListener("enterframe", function() {
                this.x += this.dx;
                this.y += this.dy;
                this.dx *= 0.9;
                this.dy *= 0.9;
            });
        }
    },

});

gls2.ShotBullet.clearAll = function() {
    var copied = [].concat(activeList);
    for (var i = 0, end = copied.length; i < end; i++) {
        copied[i].remove();
    }
};

var pool = [];
var activeList = gls2.ShotBullet.activeList = [];
gls2.ShotBullet.createPool = function(count) {
    for (var i = 0; i < count; i++) {
        pool.push(gls2.ShotBullet());
    }
};
gls2.ShotBullet.fire = function(x, y, dir) {
    var shotBullet = pool.pop();
    if (shotBullet === undefined) {
        return null;
    }
    var rad = gls2.math.degToRad(dir);
    shotBullet.vx = Math.cos(rad) * shotBullet.speed;
    shotBullet.vy = Math.sin(rad) * shotBullet.speed;

    shotBullet.setPosition(x, y);
    shotBullet.rotation = dir+90;

    return shotBullet;
};

})();
