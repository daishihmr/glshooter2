gls2.Player = tm.createClass({
    superClass: tm.app.Sprite,
    roll: 0,
    speed: 5,
    controllable: true,
    muteki: false,
    hitCircle: null,
    gameScene : null,
    bits: [
        { x: -60, y: 30, d: 0.1, turn: false, dt: -1.0 },
        { x: -30, y: 20, d: 0.1, turn: false, dt: -0.5 },
        { x:  30, y: 20, d: 0.1, turn:  true, dt:  0.5 },
        { x:  60, y: 30, d: 0.1, turn:  true, dt:  1.0 },
    ],
    bitPivot: tm.app.CanvasElement(),
    init: function() {
        this.superInit("tex1", 64, 64);
        gls2.Player.instance = this;

        gls2.setShadow(this);
        this._createHitCircle();

        for (var i = 0, end = this.bits.length; i < end; i++) {
            var bit = this.bits[i];
            gls2.Bit(bit).setPosition(bit.x, bit.y).addChildTo(this.bitPivot);
        }
        this.bitPivot.addChildTo(this);

        this.gameScene = gls2.GameScene.instance;
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
        var kb = app.keyboard;
        if (this.controllable) {
            var angle = kb.getKeyAngle();
            if (angle !== null) {
                var m = gls2.Player.KEYBOARD_MOVE[angle];
                this.x += m.x * this.speed;
                this.y += m.y * this.speed;
            }
            this.x = Math.clamp(this.x, 5, SC_W-5);
            this.y = Math.clamp(this.y, 5, SC_H-5);

            // ショット
            if (!kb.getKey("c") && app.frame % 2 === 0) {
                var s = Math.sin(app.frame * 0.1);
                gls2.ShotBullet(this.x - s*14, this.y - 10, -90).addChildTo(this.gameScene);
                gls2.ShotBullet(this.x - s* 7, this.y - 10, -90).addChildTo(this.gameScene);
                gls2.ShotBullet(this.x + s* 7, this.y - 10, -90).addChildTo(this.gameScene);
                gls2.ShotBullet(this.x + s*14, this.y - 10, -90).addChildTo(this.gameScene);
            }
        }

        // ビット
        this.controlBit(kb);

        // ロール
        this._calcRoll(kb);

        // バックファイア
        for (var i = 0; i < 5; i++) {
            gls2.BackfireParticle().setPosition(this.x - 5, this.y + 20).addChildTo(this.gameScene);
            gls2.BackfireParticle().setPosition(this.x + 5, this.y + 20).addChildTo(this.gameScene);
        }

        // 残像
        gls2.Particle(128, 0.3, 0.9).setPosition(this.x, this.y).addChildTo(this.gameScene);
        for (var i = 0, end = this.bits.length; i < end; i++) {
            var bit = this.bits[i];
            gls2.Particle(64, 0.3, 0.9).setPosition(this.x + bit.x, this.y + bit.y).addChildTo(this.gameScene);
        }
    },
    controlBit: function(kb) {
        var p = this.bitPivot;
        if (kb.getKey("left")) {
            p.rotation = Math.max(p.rotation - 2, -30);
        } else if (kb.getKey("right")) {
            p.rotation = Math.min(p.rotation + 2,  30);
        } else {
            if (2 < p.rotation) {
                p.rotation -= 2;
            } else if (p.rotation < -2) {
                p.rotation += 2;
            } else {
                p.rotation = 0;
            }
        }
    },
    _calcRoll: function(kb) {
        if (this.controllable && kb.getKey("left")) {
            this.roll = Math.clamp(this.roll - 0.2, -3, 3);
        } else if (this.controllable && kb.getKey("right")) {
            this.roll = Math.clamp(this.roll + 0.2, -3, 3);
        } else {
            if (this.roll < 0) {
                this.roll = Math.clamp(this.roll + 0.2, -3, 3);
            } else if (0 < this.roll){
                this.roll = Math.clamp(this.roll - 0.2, -3, 3);
            }
        }
        var frame = 3 + ~~this.roll
        this.setFrameIndex(frame);
        return frame;
    }
});
gls2.Player.instance = null;
gls2.Player.KEYBOARD_MOVE = {
      0: { x:  1.0, y:  0.0 },
     45: { x:  0.7, y: -0.7 },
     90: { x:  0.0, y: -1.0 },
    135: { x: -0.7, y: -0.7 },
    180: { x: -1.0, y:  0.0 },
    225: { x: -0.7, y:  0.7 },
    270: { x:  0.0, y:  1.0 },
    315: { x:  0.7, y:  0.7 },
};

gls2.Bit = tm.createClass({
    superClass: tm.app.AnimationSprite,
    bit: null,
    player: null,
    gameScene: null,
    init: function(bit) {
        this.superInit(tm.app.SpriteSheet({
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
                }
            }
        }), 32, 32);
        this.bit = bit;

        this.player = gls2.Player.instance;
        this.gameScene = gls2.GameScene.instance;

        gls2.setShadow(this);

        this.gotoAndPlay(bit.turn ? "anim0" : "anim1");
    },
    update: function(app) {
        this.x = this.bit.x;
        this.y = this.bit.y;
        var dir = this.bit.d * this.bit.dt;
        this.rotation = Math.radToDeg(dir);

        if (this.player.controllable) {
            var g = this.parent.localToGlobal(this);
            gls2.ShotBullet(g.x, g.y, this.parent.rotation + this.rotation - 90).addChildTo(this.gameScene);
        }
    }
});

// TODO Spriteにする
gls2.ShotBullet = tm.createClass({
    superClass: tm.app.CircleShape,
    speed: 20,
    init: function(x, y, dir) {
        var SZ = 24;
        this.superInit(SZ, SZ, {
            fillStyle: tm.graphics.RadialGradient(SZ*0.5, SZ*0.5, 0, SZ*0.5, SZ*0.5, SZ*0.5).addColorStopList([
                { offset: 0, color: "rgba(255,255,255,1)" },
                { offset: 1, color: "rgba(  0,255,100,0)" }
            ]).toStyle(),
            strokeStyle: "rgba(0,0,0,0)"
        });
        this.blendMode = "lighter";

        this.scaleY = 0.4;
        var rad = Math.degToRad(dir);
        this.vx = Math.cos(rad) * this.speed;
        this.vy = Math.sin(rad) * this.speed;

        this.setPosition(x, y);
        this.rotation = dir;
    },
    update: function() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -60 || SC_W+60 < this.x || this.y < -60 || SC_H+60 < this.y) {
            this.remove();
        }
    }
});

gls2.HiperBullet = tm.createClass({
    superClass: tm.app.CircleShape,
    speed: 20,
    init: function(x, y, dir) {
        var SZ = 24;
        this.superInit(SZ, SZ, {
            fillStyle: tm.graphics.RadialGradient(SZ*0.5, SZ*0.5, 0, SZ*0.5, SZ*0.5, SZ*0.5).addColorStopList([
                { offset: 0, color: "rgba(255,255,255,1)" },
                { offset: 1, color: "rgba(255,255,  0,0)" }
            ]).toStyle(),
            strokeStyle: "rgba(0,0,0,0)"
        });
        this.blendMode = "lighter";

        this.scaleX = 2;
        this.scaleY = 1;
        var rad = Math.degToRad(dir);
        this.vx = Math.cos(rad) * this.speed;
        this.vy = Math.sin(rad) * this.speed;

        this.setPosition(x, y);
        this.rotation = dir;
    },
    update: function() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < -60 || SC_W+60 < this.x || this.y < -60 || SC_H+60 < this.y) {
            this.remove();
        }
    }
});

gls2.ShotBullet.pool = [];
