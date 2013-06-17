gls2.Player = tm.createClass({
    superClass: tm.app.Sprite,
    roll: 0,
    speed: 4,
    controllable: true,
    hitCircle: null,
    bits: [
        { x: -80, y: 30, d: -30, turn: false, sprite: null },
        { x: -40, y: 20, d: -15, turn: false, sprite: null },
        { x:  40, y: 20, d:  15, turn: true, sprite: null },
        { x:  80, y: 30, d:  30, turn: true, sprite: null }
    ],
    init: function() {
        this.superInit("tex1", 64, 64);
        var self = gls2.Player.instance = this;

        this.setPosition(SC_W * 0.5, SC_H + 32).setFrameIndex(3 + this.roll);

        gls2.setShadow(this);

        this._createHitCircle();

        for (var i = 0, end = this.bits.length; i < end; i++) {
            var bit = this.bits[i];
            bit.sprite = gls2.Bit(bit.turn).setPosition(bit.x, bit.y).addChildTo(this);
            bit.sprite.rotation = bit.d;
        }
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
            var angle = app.keyboard.getKeyAngle();
            if (angle !== null) {
                var m = gls2.Player.KEYBOARD_MOVE[angle];
                this.x += m.x * this.speed;
                this.y += m.y * this.speed;
            }
        }

        this._calcRoll(app);

        for (var i = 0; i < 5; i++) {
            gls2.BackfireParticle().setPosition(this.x-5, this.y+20).addChildTo(this.parent);
            gls2.BackfireParticle().setPosition(this.x+5, this.y+20).addChildTo(this.parent);
        }

        if (app.frame % 2 === 0) {
            gls2.Particle(128, 0.3, 0.9).setPosition(this.x, this.y).addChildTo(this.parent);
            gls2.Particle(64, 0.3, 0.9).setPosition(this.x+40, this.y+20).addChildTo(this.parent);
            gls2.Particle(64, 0.3, 0.9).setPosition(this.x+80, this.y+30).addChildTo(this.parent);
            gls2.Particle(64, 0.3, 0.9).setPosition(this.x-40, this.y+20).addChildTo(this.parent);
            gls2.Particle(64, 0.3, 0.9).setPosition(this.x-80, this.y+30).addChildTo(this.parent);
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
gls2.Player.KEYBOARD_MOVE = {
      0: { x: 1, y: 0 },
     45: { x: 0.7, y: -0.7 },
     90: { x: 0, y: -1 },
    135: { x: -0.7, y: -0.7 },
    180: { x: -1, y: 0 },
    225: { x: -0.7, y: 0.7 },
    270: { x: 0, y: 1 },
    315: { x: 0.7, y: 0.7 },
};

gls2.Bit = tm.createClass({
    superClass: tm.app.AnimationSprite,
    init: function(leftRoll) {
        if (gls2.Bit.SHEET === null) {
            gls2.Bit.SHEET = tm.app.SpriteSheet({
                image: "tex1",
                frame: {
                    width: 32,
                    height: 32
                },
                animations: {
                    "anim0": {
                        frames: [ 8+16*8, 9+16*8, 10+16*8, 8+16*9, 9+16*9, 10+16*9 ],
                        next: "anim0",
                        frequency: 3
                    },
                    "anim1": {
                        frames: [ 8+16*8, 9+16*8, 10+16*8, 8+16*9, 9+16*9, 10+16*9 ].reverse(),
                        next: "anim1",
                        frequency: 3
                    },
                }
            });
        }
        this.superInit(32, 32, gls2.Bit.SHEET);

        gls2.setShadow(this);

        this.gotoAndPlay(leftRoll ? "anim0" : "anim1");
    }
});
gls2.Bit.SHEET = null;

gls2.Bullet = tm.createClass({
    superClass: tm.app.Sprite,
    init: function() {
        this.superInit("tex0", 16, 16);
    }
});

gls2.Bullet.pool = [];

