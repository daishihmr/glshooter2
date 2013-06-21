(function() {

var KEYBOARD_MOVE = {
      0: { x:  1.0, y:  0.0 },
     45: { x:  0.7, y: -0.7 },
     90: { x:  0.0, y: -1.0 },
    135: { x: -0.7, y: -0.7 },
    180: { x: -1.0, y:  0.0 },
    225: { x: -0.7, y:  0.7 },
    270: { x:  0.0, y:  1.0 },
    315: { x:  0.7, y:  0.7 },
};

gls2.Player = tm.createClass({
    superClass: tm.app.Sprite,
    roll: 0,
    speed: 4,
    controllable: true,
    muteki: false,
    gameScene : null,
    bits: [
        { x: -50, y: 30, d: 0.1, turn: false, dt: -0.5 },
        // { x: -30, y: 20, d: 0.1, turn: false, dt: -0.5 },
        // { x:  30, y: 20, d: 0.1, turn:  true, dt:  0.5 },
        { x:  50, y: 30, d: 0.1, turn:  true, dt:  0.5 },
    ],

    hitCircle: null,
    bitPivot: null,
    circle0: null,
    circle1: null,

    init: function(gameScene) {
        this.superInit("tex1", 64, 64);

        this.gameScene = gameScene;

        tm.bulletml.AttackPattern.defaultConfig.target = this;

        gls2.setShadow(this);

        this._createHitCircle();
        this.bitPivot = tm.app.CanvasElement().addChildTo(this);
        for (var i = 0, end = this.bits.length; i < end; i++) {
            var bit = this.bits[i];
            gls2.Bit(this, bit).setPosition(bit.x, bit.y).addChildTo(this.bitPivot);
        }

        this.circle0 = tm.app.CircleShape(70, 70, {
            fillStyle: "rgba(0,0,0,0)",
            strokeStyle: tm.graphics.LinearGradient(0,0,0,70).addColorStopList([
                { offset:0.0, color:"rgba(100,255,100,0.1)" },
                { offset:0.4, color:"rgba(100,255,100,0.1)" },
                { offset:0.5, color:"rgba(255,255,255,1.0)" },
                { offset:0.6, color:"rgba(100,255,100,0.1)" },
                { offset:1.0, color:"rgba(100,255,100,0.1)" },
            ]).toStyle(),
            lineWidth: 3.0,
        }).addChildTo(this);
        this.circle0.blendMode = "lighter";
        this.circle0.update = function() {
            this.rotation += 3;
        };

        this.circle1 = tm.app.CircleShape(70, 70, {
            fillStyle: "rgba(0,0,0,0)",
            strokeStyle: tm.graphics.LinearGradient(0,0,0,70).addColorStopList([
                { offset:0.0, color:"rgba(100,255,100,0.1)" },
                { offset:0.4, color:"rgba(100,255,100,0.1)" },
                { offset:0.5, color:"rgba(255,255,255,1.0)" },
                { offset:0.6, color:"rgba(100,255,100,0.1)" },
                { offset:1.0, color:"rgba(100,255,100,0.1)" },
            ]).toStyle(),
            lineWidth: 3.0,
        }).addChildTo(this);
        this.circle1.blendMode = "lighter";
        this.circle1.update = function() {
            this.rotation -= 3;
        };
    },

    _createHitCircle: function() {
        this.hitCircle = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
        this.hitCircle.setFrameIndex(5);
        this.hitCircle.blendMode = "lighter";
        this.hitCircle.update = function(app) {
            var s = 0.75 + Math.sin(app.frame * 0.2) * 0.15;
            this.scale.set(s, s);
        };
    },

    update: function(app) {
        var kb = app.keyboard;
        if (this.controllable) {
            var angle = kb.getKeyAngle();
            if (angle !== null) {
                var m = KEYBOARD_MOVE[angle];
                this.x += m.x * this.speed;
                this.y += m.y * this.speed;
            }
            this.x = Math.clamp(this.x, 5, SC_W-5);
            this.y = Math.clamp(this.y, 5, SC_H-5);

            // ショット
            if (!kb.getKey("c") && app.frame % 3 === 0) {
                var s = Math.sin(app.frame * 0.2);
                gls2.ShotBullet(this.x-7 - s*6, this.y-5, -90).addChildTo(this.gameScene);
                gls2.ShotBullet(this.x-7 + s*6, this.y-5, -90).addChildTo(this.gameScene);
                gls2.ShotBullet(this.x+7 - s*6, this.y-5, -90).addChildTo(this.gameScene);
                gls2.ShotBullet(this.x+7 + s*6, this.y-5, -90).addChildTo(this.gameScene);
            }
        }

        // ビット
        this.controlBit(kb);

        // ロール
        this._calcRoll(kb);

        // バックファイア
        gls2.BackfireParticle(this.gameScene.ground).setPosition(this.x - 5, this.y + 20).addChildTo(this.gameScene);
        gls2.BackfireParticle(this.gameScene.ground).setPosition(this.x + 5, this.y + 20).addChildTo(this.gameScene);
    },

    controlBit: function(kb) {
        var p = this.bitPivot;
        if (this.controllable && kb.getKey("left")) {
            p.rotation = Math.max(p.rotation - 2, -30);
        } else if (this.controllable && kb.getKey("right")) {
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
    },

});

gls2.Bit = tm.createClass({
    superClass: tm.app.AnimationSprite,
    bit: null,
    player: null,

    init: function(player, bit) {
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

        this.player = player;

        gls2.setShadow(this);

        this.gotoAndPlay(bit.turn ? "anim0" : "anim1");
    },

    update: function(core) {
        this.x = this.bit.x;
        this.y = this.bit.y;

        var dir = this.bit.d * this.bit.dt;
        this.rotation = Math.radToDeg(dir);

        // グローバル座標
        var g = this.parent.localToGlobal(this);

        // バックファイア
        gls2.BackfireParticle(core.gameScene.ground).setPosition(g.x, g.y).addChildTo(core.gameScene);

        // ショット
        if (this.player.controllable && !core.keyboard.getKey("c") && core.frame % 2 !== 0) {
            gls2.ShotBullet(g.x, g.y, this.parent.rotation + this.rotation - 90).addChildTo(core.gameScene);
        }
    },

});

})();
