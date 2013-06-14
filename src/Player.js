gls2.Player = tm.createClass({
    superClass: tm.app.Sprite,
    roll: 0,
    speed: 3,
    controllable: true,
    hitCircle: null,
    init: function() {
        this.superInit("tex1", 64, 64);
        gls2.Player.instance = this;

        this.setPosition(SC_W * 0.5, SC_H + 32).setFrameIndex(3 + this.roll);
        this.scaleX = this.scaleY = 0.75;

        this._createHitCircle();
    },
    _createHitCircle: function() {
        this.hitCircle = tm.app.Sprite("tex0", 64, 64).addChildTo(this);
        this.hitCircle.setFrameIndex(7);
        this.hitCircle.scale.set(0.2, 0.2);
        this.hitCircle.blendMode = "lighter";
        this.hitCircle.update = function(app) {
            var s = 0.15 + Math.sin(app.frame * 0.2) * 0.05;
            this.scale.set(s, s);
        };
    },
    update: function(app) {
        if (this.controllable) {
            var kb = app.keyboard;
            if (kb.getKey("left")) {
                this.x -= this.speed;
            } else if (kb.getKey("right")) {
                this.x += this.speed;
            }
            if (kb.getKey("up")) {
                this.y -= this.speed;
            } else if (kb.getKey("down")) {
                this.y += this.speed;
            }
        }

        this._calcRoll(app);

        gls2.Particle(128, 0.15, 0.95).setPosition(this.x, this.y).addChildTo(this.parent);
        for (var i = 0; i < 5; i++) {
            gls2.BackfireParticle().setPosition(this.x-5, this.y+14).addChildTo(this.parent);
            gls2.BackfireParticle().setPosition(this.x+5, this.y+14).addChildTo(this.parent);
        }
    },
    _calcRoll: function(app) {
        var inputLeft = this.controllable && app.keyboard.getKey("left");
        var inputRight = this.controllable && app.keyboard.getKey("right");
        if (inputLeft) {
            this.roll = Math.clamp(this.roll - 0.2, -3, 3);
        } else if (inputRight) {
            this.roll = Math.clamp(this.roll + 0.2, -3, 3);
        } else {
            if (this.roll < 0) {
                this.roll = Math.clamp(this.roll + 0.2, -3, 3);
            } else if (0 < this.roll){
                this.roll = Math.clamp(this.roll - 0.2, -3, 3);
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
