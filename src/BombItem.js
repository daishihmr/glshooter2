/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 * @extends {tm.display.Sprite}
 */
gls2.BombItem = tm.createClass(
/** @lends {gls2.BombItem.prototype} */
{
    superClass: tm.display.Sprite,

    vx: 0,
    vy: 0,
    player: null,
    age: 0,

    init: function(x, y, player) {
        this.superInit("tex3", 64, 64);
        this.setFrameIndex(1, 64, 64);

        this.setPosition(x, y);
        this.player = player;

        this.vy = 1;
        this.vx = Math.random() < 0.5 ? -1 : 1;
        this.age = 0;
    },

    update: function(app) {
        this.x += this.vx;
        this.y += this.vy * 2;

        if (gls2.distanceSq(this, this.player) < 45*45) {
            this.player.gameScene.addBomb(1);
            this.remove();
        } else if (this.age < 3000) {
            if (this.x < 30 || SC_W-30 < this.x) this.vx *= -1;
            if (this.y < 30 || SC_H-30 < this.y) this.vy *= -1;
        } else {
            if (this.x < -20 || SC_W+20 < this.x || this.y < -20 || SC_H+20 < this.y) {
                this.remove();
            }
        }

        this.age += 1;
    }

});

/**
 * @class
 * @extends {tm.display.Sprite}
 */
gls2.ExtendItem = tm.createClass(
/** @lends {gls2.ExtendItem.prototype} */
{
    superClass: tm.display.Sprite,

    vx: 0,
    vy: 0,
    player: null,
    age: 0,
    labels: null,

    init: function(x, y, player) {
        this.superInit("tex3", 64, 64);
        this.setFrameIndex(8, 64, 64);
        this.labels = [];
        for (var ix = -1; ix <= 1; ix++) {
            for (var iy = -1; iy <= 1; iy++) {
                this.labels.push(tm.display.Label("1 up", 30)
                    .setFillStyle("hsla(180, 60%, 60%, 0.2)")
                    .setPosition(ix, iy)
                    .addChildTo(this));
            }
        }

        this.setPosition(x, y);
        this.player = player;
    },
    update: function(app) {
        this.y += 0.5;
        if (gls2.distanceSq(this, this.player) < 64*64) {
            this.player.gameScene.extendZanki();
            gls2.core.putAchevement("extend3");
            this.remove();
        }
        if (this.y > SC_H+64) {
               this.remove();
        }

        this.labels.forEach(function(l) {
            l.setScale(1 + Math.sin(app.frame*0.2)*0.3);
        });
    }
});

})();
