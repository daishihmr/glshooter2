gls2.Player = tm.createClass({
    superClass: tm.app.Sprite,
    keyboard: null,
    roll: 0,
    speed: 3,
    controllable: true,
    hitCircle: null,
    init: function() {
        this.superInit("tex1", 64, 64);
        this.setPosition(SC_W * 0.5, SC_H + 32).setFrameIndex(3 + this.roll);
        this.scaleX = this.scaleY = 0.75;

        this.hitCircle = tm.app.Sprite("tex0", 64, 64).addChildTo(this)
        this.hitCircle.setFrameIndex(7);
        this.hitCircle.scaleX = this.hitCircle.scaleY = 0.2;
        this.hitCircle.blendMode = "lighter";
        this.hitCircle.update = function(app) {
            this.scaleX = this.scaleY = 0.15 + Math.sin(app.frame * 0.2) * 0.05;
        };
    },
    update: function() {
        if (this.controllable) {
            if (this.keyboard.getKey("up")) {
                this.y -= this.speed;
            } else if (this.keyboard.getKey("down")) {
                this.y += this.speed;
            }
            if (this.keyboard.getKey("left")) {
                this.x -= this.speed;
                this.roll = Math.clamp(this.roll - 0.1, -3, 3);
            } else if (this.keyboard.getKey("right")) {
                this.x += this.speed;
                this.roll = Math.clamp(this.roll + 0.1, -3, 3);
            } else {
                if (this.roll < 0) {
                    this.roll = Math.clamp(this.roll + 0.1, -3, 3);
                } else if (this.roll > 0){
                    this.roll = Math.clamp(this.roll - 0.1, -3, 3);
                }
            }
        } else {
            if (this.roll < 0) {
                this.roll = Math.clamp(this.roll + 0.1, -3, 3);
            } else if (this.roll > 0){
                this.roll = Math.clamp(this.roll - 0.1, -3, 3);
            }
        }

        this.setFrameIndex(3 + ~~this.roll);
    }
});

gls2.Player.instance = null;

gls2.Bullet = tm.createClass({
    superClass: tm.app.Sprite,
    init: function() {
        this.superInit("tex0", 16, 16);
    }
});

gls2.Bullet.pool = [];
