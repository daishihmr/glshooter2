(function() {

var origParticle = null;

gls2.ShotBullet = tm.createClass({
    superClass: tm.app.Sprite,
    speed: 0,
    attackPower: 1,

    init: function() {
        var SZ = 64;
        this.superInit("shotbullet", SZ, SZ);
        this.blendMode = "lighter";

        this.addEventListener("added", function() {
            activeList.push(this);
        });
        this.addEventListener("removed", function() {
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);
            pool.push(this);
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

        if (this.x < -60 || SC_W+60 < this.x || this.y < -60 || SC_H+60 < this.y) {
            this.remove();
        }
    },

    /**
     * col: 0=red, 1=green, 2=blue, 3=hyper
     */
    setColor: function(col) {
        this.setFrameIndex(col, 64, 64);
        if (col === 3) {
            this.speed = 45;
            this.boundingRadius = 48;
            this.setScale(2.0, 2.0);
            this.attackPower = 2;
        } else {
            this.speed = 30;
            this.boundingRadius = 32;
            this.setScale(1.5, 1.5);
            this.attackPower = 1;
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

// TODO 色を指定してプールを作る
gls2.ShotBullet.createPool = function(count) {
    for (var i = 0; i < count; i++) {
        pool.push(gls2.ShotBullet());
    }
};

// TODO プールのメソッドにする
gls2.ShotBullet.fire = function(color, x, y, dir) {
    var shotBullet = pool.pop();
    if (shotBullet === undefined) {
        return null;
    }

    shotBullet.setColor(color);

    var rad = gls2.math.degToRad(dir);
    shotBullet.vx = Math.cos(rad) * shotBullet.speed;
    shotBullet.vy = Math.sin(rad) * shotBullet.speed;

    shotBullet.setPosition(x, y);
    shotBullet.rotation = dir+90;

    return shotBullet;
};

})();
