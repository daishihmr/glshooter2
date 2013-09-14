/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

gls2.BombItem = tm.createClass({
    superClass: tm.app.Sprite,

    vx: 0,
    vy: 0,
    player: null,
    age: 0,

    init: function(x, y, player) {
        this.superInit("bombIcon", 32, 32);
        this.setPosition(x, y);
        this.player = player;

        this.vy = 1;
        this.vx = gls2.FixedRandom.random() < 0.5 ? -1 : 1;
        this.age = 0;
    },

    update: function() {
        this.x += this.vx;
        this.y += this.vy;

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
    },

});

})();
