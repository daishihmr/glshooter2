(function() {

var backfireParticle = null;

/**
 * ショットボタンを何フレーム押し続けるとレーザーになるか
 * @const
 */
var LASER_FRAME = 10;

/** @const */
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

/**
 * 自機
 * @class
 * @extends {tm.app.Sprite}
 */
gls2.Player = tm.createClass(
/** @lends {gls2.Player.prototype} */
{
    superClass: tm.app.Sprite,

    type: 0,
    roll: 0,
    controllable: true,
    muteki: false,
    gameScene : null,

    /** @protected */
    speed: 4.5,
    bits: null,

    /** @type {gls2.ShotBulletPool0} */
    currentShotPool: null,
    /** @type {gls2.ShotBulletPool0} */
    normalShotPool: null,
    /** @type {gls2.ShotBulletPool0} */
    hyperShotPool: null,

    /** @type {gls2.Laser} */
    laser: null,

    hitCircle: null,
    bitPivot: null,
    hyperCircle0: null,
    hyperCircle1: null,

    /** @constructs */
    init: function(gameScene, type) {
        this.superInit("tex1", 64, 64);

        this.type = type;
        this.gameScene = gameScene;

        tm.bulletml.AttackPattern.defaultConfig.target = this;

        this.boundingRadius = 2;
        this.altitude = 10;

        this.currentShotPool = this.normalShotPool = gls2.ShotBulletPool(type);
        this.hyperShotPool = gls2.ShotBulletPool(3);

        this.laser = gls2.Laser(this, {
            "redBody": "laserR",
            "greenBody": "laserG",
            "blueBody": "laserB",
            "hyperBody": "laserH",
            "head": "laserHead",
            "foot": "laserFoot",
            "aura": "aura",
        });
        this.laser.visible = false;
        this.laser.addChildTo(gameScene);

        this._createHitCircle();

        this.bits = this._createBits();

        this.bitPivot = tm.app.CanvasElement().addChildTo(this);
        for (var i = 0, end = this.bits.length; i < end; i++) {
            var bit = this.bits[i];
            gls2.Bit(this, bit).setPosition(bit.x, bit.y).addChildTo(this.bitPivot);
        }

        this.light = tm.app.CircleShape(140, 140, {
            strokeStyle: "rgba(0,0,0,0)",
            fillStyle: tm.graphics.RadialGradient(70,70,0,70,70,70).addColorStopList([
                { offset:0.0, color:"rgba(255,255,255,0.1)" },
                { offset:0.5, color:"rgba(255,255,255,0.1)" },
                { offset:1.0, color:"rgba(255,255,255,0.0)" },
            ]).toStyle(),
        }).addChildTo(this);
        this.light.blendMode = "lighter";

        this.hyperCircle0 = tm.app.CircleShape(80, 80, {
            fillStyle: "rgba(0,0,0,0)",
            strokeStyle: tm.graphics.LinearGradient(0,0,0,80).addColorStopList([
                { offset:0.0, color:"rgba(255,255,100,0.0)" },
                { offset:0.3, color:"rgba(255,255,100,0.1)" },
                { offset:0.5, color:"rgba(255,255,255,1.0)" },
                { offset:0.7, color:"rgba(255,255,100,0.1)" },
                { offset:1.0, color:"rgba(255,255,100,0.0)" },
            ]).toStyle(),
            lineWidth: 2.0,
        }).addChildTo(this);
        this.hyperCircle0.blendMode = "lighter";
        this.hyperCircle0.update = function() {
            this.rotation += 2;
        };

        this.hyperCircle1 = tm.app.CircleShape(80, 80, {
            fillStyle: "rgba(0,0,0,0)",
            strokeStyle: tm.graphics.LinearGradient(0,0,0,80).addColorStopList([
                { offset:0.0, color:"rgba(255,255,100,0.0)" },
                { offset:0.3, color:"rgba(255,255,100,0.1)" },
                { offset:0.5, color:"rgba(255,255,255,1.0)" },
                { offset:0.7, color:"rgba(255,255,100,0.1)" },
                { offset:1.0, color:"rgba(255,255,100,0.0)" },
            ]).toStyle(),
            lineWidth: 2.0,
        }).addChildTo(this);
        this.hyperCircle1.blendMode = "lighter";
        this.hyperCircle1.update = function() {
            this.rotation -= 2;
        };

        if (backfireParticle === null) backfireParticle = gls2.BackfireParticle(this.gameScene.ground);
    },

    /** @protected */
    _createBits: function() {
        return [
            { x: -70, y: 20, d: 0.1, turn: false, dt: -0.7, v: true },
            { x: -40, y: 40, d: 0.1, turn: false, dt: -0.5, v: true },
            { x:  40, y: 40, d: 0.1, turn:  true, dt:  0.5, v: true },
            { x:  70, y: 20, d: 0.1, turn:  true, dt:  0.7, v: true },
        ];
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

    pressTimeC: -1,
    fireShot: false,
    fireLaser: false,

    update: function(app) {
        if (this.muteki) {
            this.visible = app.frame % 2 === 0;
        } else {
            this.visible = true;
        }

        var kb = app.keyboard;
        if (this.controllable) {
            var angle = kb.getKeyAngle();
            if (angle !== null) {
                var m = KEYBOARD_MOVE[angle];
                this.x += m.x * this.speed * (this.fireLaser ? 0.75 : 1);
                this.y += m.y * this.speed * (this.fireLaser ? 0.75 : 1);
            }
            this.x = gls2.math.clamp(this.x, 15, SC_W-15);
            this.y = gls2.math.clamp(this.y, 15, SC_H-15);

            var pressC = kb.getKey("c");
            var pressZ = kb.getKey("z");

            if (pressC) {
                this.pressTimeC += 1;
            } else {
                this.pressTimeC -= 1;
            }
            this.pressTimeC = gls2.math.clamp(this.pressTimeC, -1, LASER_FRAME);

            // ショット
            this.fireLaser = (pressZ && pressC) || this.pressTimeC === LASER_FRAME;
            var shotInterval = this.gameScene.isHyperMode ? 3 : 5;
            this.fireShot = !this.fireLaser && (0 <= this.pressTimeC || pressZ) && app.frame % shotInterval === 0;
            if (pressZ) {
                this.pressTimeC = 0;
            }

            // レーザー
            this.laser.x = this.x;
            this.laser.y = this.y - 40;
            if (this.fireLaser) {
                for (var i = 0, len = this.bits.length; i < len; i++) {
                    this.bits[i].v = false;
                }
                this.bitPivot.rotation = 0;
            } else {
                this.laser.visible = false;
                for (var i = 0, len = this.bits.length; i < len; i++) {
                    this.bits[i].v = true;
                }
            }

            if (this.fireShot) {
                var s = Math.sin(app.frame * 0.2);
                var sb;
                sb = this.currentShotPool.fire(this.x-7 - s*6, this.y-5, -90);
                if (sb !== null) sb.addChildTo(this.gameScene);
                sb = this.currentShotPool.fire(this.x+7 + s*6, this.y-5, -90);
                if (sb !== null) sb.addChildTo(this.gameScene);
            }

            if (kb.getKeyDown("x")) {
                if (this.gameScene.hyperGauge === 1) {
                    // ハイパー
                    this.gameScene.startHyperMode();
                } else if (!this.gameScene.isBombActive && this.gameScene.bomb > 0) {
                    // ボム
                    gls2.Bomb(this, this.gameScene)
                        .setPosition(Math.clamp(this.x, SC_W*0.2, SC_W*0.8), Math.max(this.y - SC_H*0.5, SC_H*0.3))
                        .addChildTo(this.gameScene);
                }
            }
        }

        this.hyperCircle0.visible = this.hyperCircle1.visible = this.gameScene.hyperGauge === 1;

        // ビット
        this.controlBit(kb);

        // ロール
        this._calcRoll(kb);

        // バックファイア
        if (app.frame % 2 === 0) {
            backfireParticle.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.gameScene);
            backfireParticle.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.gameScene);
        }
    },

    damage: function() {
        this.fireShot = false;
        this.fireLaser = false;
        this.gameScene.endHyperMode();
    },

    /** @protected */
    controlBit: function(kb) {
        var p = this.bitPivot;
        if (this.controllable && kb.getKey("left")) {
            p.rotation = Math.max(p.rotation - 3, -40);
        } else if (this.controllable && kb.getKey("right")) {
            p.rotation = Math.min(p.rotation + 3,  40);
        } else {
            if (3 < p.rotation) {
                p.rotation -= 3;
            } else if (p.rotation < -3) {
                p.rotation += 3;
            } else {
                p.rotation = 0;
            }
        }
    },

    _calcRoll: function(kb) {
        if (this.controllable && kb.getKey("left")) {
            this.roll = gls2.math.clamp(this.roll - 0.2, -3, 3);
        } else if (this.controllable && kb.getKey("right")) {
            this.roll = gls2.math.clamp(this.roll + 0.2, -3, 3);
        } else {
            if (this.roll < 0) {
                this.roll = gls2.math.clamp(this.roll + 0.2, -3, 3);
            } else if (0 < this.roll){
                this.roll = gls2.math.clamp(this.roll - 0.2, -3, 3);
            }
        }
        var frame = 3 + ~~this.roll
        this.setFrameIndex(frame);
        return frame;
    },

});

/**
 * @class
 * @extends {tm.app.AnimationSprite}
 */
gls2.Bit = tm.createClass(
/** @lends {gls2.Bit.prototype} */
{
    superClass: tm.app.AnimationSprite,
    bit: null,
    player: null,

    /**
     * @constructs
     */
    init: function(player, bit) {
        this.superInit(tm.app.SpriteSheet({
            image: "tex1",
            frame: {
                width: 32,
                height: 32
            },
            animations: {
                "anim0": {
                    frames: [ 8+16*8, 9+16*8, 10+16*8, 8+16*9, 9+16*9, 10+16*9, ],
                    next: "anim0",
                    frequency: 3
                },
                "anim1": {
                    frames: [ 9+16*8, 10+16*8, 8+16*9, 9+16*9, 10+16*9, 8+16*8, ].reverse(),
                    next: "anim1",
                    frequency: 3
                }
            }
        }), 32, 32);
        this.bit = bit;

        this.player = player;

        this.altitude = 10;

        this.gotoAndPlay(bit.turn ? "anim0" : "anim1");
    },

    update: function(core) {
        if (!this.bit.v) {
            this.x = 0;
            this.y = -40;
            this.currentFrameIndex = 3;
        } else {
            this.x = this.bit.x * (this.player.gameScene.isHyperMode ? 1.5 : 1);
            this.y = this.bit.y * (this.player.gameScene.isHyperMode ? 1.5 : 1);

            var dir = this.bit.d * this.bit.dt;
            this.rotation = Math.radToDeg(dir);

            // グローバル座標
            var g = this.parent.localToGlobal(this);

            // バックファイア
            if (this.bit.v && core.frame%2 === 0) backfireParticle.clone(40).setPosition(g.x, g.y).addChildTo(core.gameScene);

            // ショット
            if (this.player.fireShot) {
                var sb = this.currentShotPool.fire(g.x, g.y, this.parent.rotation + this.rotation - 90);
                if (sb !== null) sb.addChildTo(core.gameScene);
            }
        }
    },

});

})();
