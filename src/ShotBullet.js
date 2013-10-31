/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

var origParticle = null;

gls2.ShotBullet = tm.createClass({
    superClass: tm.display.Sprite,
    speed: 0,

    attackPower: 0,

    baseScale: 1,
    hyperScale: 0,

    isEffect: true,

    init: function(color) {
        var SZ = 64;
        this.superInit("shotbullet", SZ, SZ);
        this.blendMode = "lighter";
        this.alpha = 0.5;

        this.attackPower = gls2.Setting.SHOT_ATTACK_POWER;

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

        if (color !== undefined) this.setColor(color);
    },

    update: function(app) {
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
        } else {
            this.speed = 30;
            this.boundingRadius = 32;
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

var activeList = gls2.ShotBullet.activeList = [];

gls2.ShotBulletPool = tm.createClass({
    /** @type {Array.<gls2.ShotBullet>} */
    pool: null,
    hyper: false,
    init: function(color, count) {
        this.hyper = color === 3;
        this.pool = [];
        for (var i = 0; i < count; i++) {
            var sb = gls2.ShotBullet(color);

            var self = this;
            sb.addEventListener("added", function() {
                this.hp = gls2.Setting.SHOT_HP;
                activeList.push(this);
            });
            sb.addEventListener("removed", function() {
                var idx = activeList.indexOf(this);
                if (idx !== -1) activeList.splice(idx, 1);
                self.pool.push(this);
            });

            if (this.hyper) {
                sb.addEventListener("enterframe", function(e) {
                    this.setScale((this.baseScale + this.hyperScale) * (e.app.frame % 2 === 0 ? 1.0: 1.2));
                });
            }

            this.pool.push(sb);
        }
    },

    fire: function(x, y, dir) {
        var shotBullet = this.pool.pop();
        if (shotBullet === undefined) {
            return null;
        }

        var rad = gls2.math.degToRad(dir);
        shotBullet.vx = Math.cos(rad) * shotBullet.speed;
        shotBullet.vy = Math.sin(rad) * shotBullet.speed;

        shotBullet.setPosition(x, y);
        shotBullet.rotation = dir+90;

        return shotBullet;
    },

    setLevel: function(hyperLevel) {
        for (var i = this.pool.length; this.pool[--i] !== undefined; ) {
            this.pool[i].attackPower = gls2.Setting.SHOT_ATTACK_POWER + gls2.Setting.HYPER_SHOT_ATTACK_POWER * hyperLevel;
            this.pool[i].hyperScale = hyperLevel * 0.2;
        }
    },

});

})();
