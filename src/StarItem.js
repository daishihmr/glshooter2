/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * 星アイテム
 * @class
 * @extends {tm.display.Sprite}
 */
gls2.StarItem = tm.createClass(
/** @lends {gls2.StarItem.prototype} */
{
    superClass: tm.display.Sprite,

    large: false,
    gameScene: null,
    player: null,
    isGround: false,

    grub: false,

    stability: false,
    dx: 0,
    dy: 0,

    init: function(large) {
        this.superInit("tex3", 20, 20);
        this.setFrameIndex(0, 64, 64);

        this.large = large;
        if (large) {
            this.setScale(2, 2);
        }

        this.gameScene = gls2.GameScene.SINGLETON;
        this.player = this.gameScene.player;

        this.addChildTo(this.gameScene);

        var a = gls2.FixedRandom.random() * Math.PI*0.5 - Math.PI*0.75;
        var s = 10 + Math.random() * 30;
        this.dx = Math.cos(a) * s;
        this.dy = Math.sin(a) * s;
    },

    update: function() {
        if (this.player.fireLaser) {
            this.grub = true;
        }
        if (this.player.parent === null) {
            this.grub = false;
        } else {
            if (gls2.distanceSq(this, this.player) < 10*10) {
                this.gameScene.onGetStar(this);
                this.remove();
                return;
            } else if (gls2.distanceSq(this, this.player) < 100*100) {
                this.grub = true;
            }

            if (this.stability && this.grub) {
                var a = Math.atan2(this.player.y - this.y, this.player.x - this.x);
                this.x += Math.cos(a) * 8;
                this.y += Math.sin(a) * 8;
            } else if (!this.stability) {
                this.x += this.dx;
                this.y += this.dy;
                this.dx *= 0.8;
                this.dy *= 0.8;
                if (-1 < this.dx && this.dx < 1 && -1 < this.dy && this.dy < 1) {
                    this.stability = true;
                }
            }
        }

        if (this.x < -200 || SC_W+200 < this.x || this.y < -200 || SC_H+50 < this.y) this.remove();
    },

});

/**
 * @class
 * @extends {gls2.StarItem}
 */
gls2.StarItemSky = tm.createClass(
/** @lends {gls2.StarItemSky.prototype} */
{
    superClass: gls2.StarItem,
    isGround: false,
    init: function(large) {
        this.superInit(large);
    },
    update: function() {
        this.y += 4;
        this.rotation += 10;
        this.superClass.prototype.update.call(this);
    },
});

/**
 * @class
 * @extends {gls2.StarItem}
 */
gls2.StarItemGround = tm.createClass(
/** @lends {gls2.StarItemGround.prototype} */
{
    superClass: gls2.StarItem,
    isGround: true,
    init: function(large) {
        this.superInit(large);
    },
    update: function() {
        if (!this.grub) {
            this.x += this.gameScene.ground.dx;
            this.y += this.gameScene.ground.dy;
        }
        this.superClass.prototype.update.call(this);
    },
});

})();
