/*
 * License
 * http://daishihmr.mit-license.org/
 */
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
 * @extends {tm.display.Sprite}
 */
gls2.Player = tm.createClass(
/** @lends {gls2.Player.prototype} */
{
    superClass: tm.display.Sprite,

    /**
     * 0:赤
     * 1:緑
     * 2:青
     */
    type: 0,
    /**
     * 0:ショット
     * 1:レーザー
     * 2:エキスパート
     * 3:ビギナー
     */
    style: 0,

    roll: 0,
    controllable: true,
    attackable: true,
    muteki: false,
    gameScene : null,

    speed: 0,
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

    frame: 0,

    /** @constructs */
    init: function(gameScene, type, style) {
        this.superInit("fighter", 64, 64);

        this.gameScene = gameScene;
        this.type = type;
        this.style = style;

        tm.bulletml.AttackPattern.defaultConfig.target = this;

        this.speed = [6.0, 5.0, 4.5][type] * 1.2;

        this.boundingRadius = (style === 2 || style === 3) ? 2 : 7;
        this.altitude = 10;

        this.currentShotPool = this.normalShotPool = gls2.ShotBulletPool(type, 100);
        this.hyperShotPool = gls2.ShotBulletPool(3, 100);

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

        this._createHitCircle();

        this.bits = this._createBits();
        if (this.style === 1) {
            this.bits = [this.bits[1], this.bits[2]];
        }

        this.bitPivot = tm.display.CanvasElement().addChildTo(this);
        for (var i = 0, end = this.bits.length; i < end; i++) {
            var bit = this.bits[i];
            gls2.Bit(this, bit).setPosition(bit.x, bit.y).addChildTo(this.bitPivot);
        }

        this.light = tm.display.CircleShape(140, 140, {
            strokeStyle: "rgba(0,0,0,0)",
            fillStyle: tm.graphics.RadialGradient(70,70,0,70,70,70).addColorStopList([
                { offset:0.0, color:"rgba(255,255,255,0.1)" },
                { offset:0.5, color:"rgba(255,255,255,0.1)" },
                { offset:1.0, color:"rgba(255,255,255,0.0)" },
            ]).toStyle(),
        }).addChildTo(this);
        this.light.blendMode = "lighter";

        this.hyperCircle0 = tm.display.CircleShape(80, 80, {
            fillStyle: "rgba(0,0,0,0)",
            strokeStyle: tm.graphics.LinearGradient(0,0,0,80).addColorStopList([
                { offset:0.0, color:"rgba(255,255,100,0.0)" },
                { offset:0.4, color:"rgba(255,255,100,0.1)" },
                { offset:0.5, color:"rgba(255,255,255,1.0)" },
                { offset:0.6, color:"rgba(255,255,100,0.1)" },
                { offset:1.0, color:"rgba(255,255,100,0.0)" },
            ]).toStyle(),
            lineWidth: 4.0,
        }).addChildTo(this);
        this.hyperCircle0.blendMode = "lighter";
        this.hyperCircle0.update = function() {
            this.rotation += 2;
            this.visible = gameScene.hyperLevel > 0 && !gameScene.isHyperMode;
        };

        this.hyperCircle1 = tm.display.CircleShape(80, 80, {
            fillStyle: "rgba(0,0,0,0)",
            strokeStyle: tm.graphics.LinearGradient(0,0,0,80).addColorStopList([
                { offset:0.0, color:"rgba(255,255,100,0.0)" },
                { offset:0.4, color:"rgba(255,255,100,0.1)" },
                { offset:0.5, color:"rgba(255,255,255,1.0)" },
                { offset:0.6, color:"rgba(255,255,100,0.1)" },
                { offset:1.0, color:"rgba(255,255,100,0.0)" },
            ]).toStyle(),
            lineWidth: 4.0,
        }).addChildTo(this);
        this.hyperCircle1.blendMode = "lighter";
        this.hyperCircle1.update = function() {
            this.rotation -= 2;
            this.visible = gameScene.hyperLevel > 0 && !gameScene.isHyperMode;
        };

        this.hyperCircle2 = tm.display.CanvasElement(80, 80).addChildTo(this);
        this.hyperCircle2.blendMode = "lighter";
        this.hyperCircle2.rotation = -90;
        this.hyperCircle2.strokeStyle = "rgba(180,180,255,0.4)";
        this.hyperCircle2.update = function() {
            this.visible = gameScene.isHyperMode;
        };
        this.hyperCircle2.draw = function(canvas) {
            canvas.lineCap = "round";
            var value = gameScene.hyperTime / HYPERMODE_TIME;

            canvas.strokeStyle = "rgba(50,50,255,0.4)";
            canvas.lineWidth = "15";
            canvas.strokeArc(0, 0, 40, 0, value*Math.PI*2, false);
            canvas.strokeStyle = "rgba(100,100,255,0.4)";
            canvas.lineWidth = "8";
            canvas.strokeArc(0, 0, 40, 0, value*Math.PI*2, false);
            canvas.strokeStyle = "rgba(180,180,255,0.4)";
            canvas.lineWidth = "4";
            canvas.strokeArc(0, 0, 40, 0, value*Math.PI*2, false);
        };
        this.hyperCircle3 = tm.display.CircleShape(80, 80, {
            fillStyle: tm.graphics.RadialGradient(40,40,0,40,40,35).addColorStopList([
                { offset:0.0, color:"rgba(0,0,50,0.0)" },
                { offset:0.9, color:"rgba(0,0,50,0.8)" },
                { offset:1.0, color:"rgba(0,0,50,0.0)" },
            ]).toStyle(),
            strokeStyle: "rgba(0,0,0,0)",
        }).addChildTo(this);
        this.hyperCircle3.update = function() {
            this.visible = gameScene.isHyperMode;
        };

        if (backfireParticle === null) backfireParticle = gls2.BackfireParticle(this.gameScene.ground);
    },

    /** @protected */
    _createBits: function() {
        if (this.type === 0) {
            return [
                { x:  0, bx:   0, y:  40, d: 0.0, turn:  true, dt: -0.7, v: true },
                { x:  0, bx:   0, y:  40, d: 0.0, turn:  true, dt:  0.5, v: true },
                { x:  0, bx:   0, y:  40, d: 0.0, turn:  true, dt: -0.5, v: true },
                { x:  0, bx:   0, y:  40, d: 0.0, turn:  true, dt:  0.7, v: true },
            ];
        } else if (this.type === 1) {
            return [
                { x: -70, y: 20, d: 0.1, turn: false, dt: -0.7, v: true },
                { x: -40, y: 40, d: 0.1, turn: false, dt: -0.5, v: true },
                { x:  40, y: 40, d: 0.1, turn:  true, dt:  0.5, v: true },
                { x:  70, y: 20, d: 0.1, turn:  true, dt:  0.7, v: true },
            ];
        } else if (this.type === 2) {
            return [
                { x: -60, y: 40, d: 0.6, turn: false, dt: -0.7, v: true },
                { x: -30, y: 20, d: 0.4, turn: false, dt: -0.5, v: true },
                { x:  30, y: 20, d: 0.4, turn:  true, dt:  0.5, v: true },
                { x:  60, y: 40, d: 0.6, turn:  true, dt:  0.7, v: true },
            ];
        }
    },

    _createHitCircle: function() {
        this.hitCircle = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
        this.hitCircle.setFrameIndex(5);
        // this.hitCircle.blendMode = "lighter";
        this.hitCircle.update = function(app) {
            var s = 1.2 + Math.sin(app.frame * 0.2) * 0.15;
            this.scale.set(s, s);
        };
    },

    pressTimeC: -1,
    fireShot: false,
    fireLaser: false,

    update: function(app) {
        if (this.muteki) {
            this.alpha = (app.frame/2) % 2 === 0 ? 0.5 : 1.0;
        } else {
            this.alpha = 1.0;
        }

        var kb = gls2.core.mode === 2 ? this.gameScene.stage.keyboard : app.keyboard;
        if (this.controllable || gls2.core.mode === 2) {
            var angle = kb.getKeyAngle();
            if (angle !== null) {
                var m = KEYBOARD_MOVE[angle];
                this.x += m.x * this.speed * (this.fireLaser ? 0.5 : 1);
                this.y += m.y * this.speed * (this.fireLaser ? 0.5 : 1);
            }
            this.x = gls2.math.clamp(this.x, 15, SC_W-15);
            this.y = gls2.math.clamp(this.y, 15, SC_H-15);

            var pressC = kb.getKey("c") && this.attackable;
            var pressZ = kb.getKey("z") && this.attackable;
            if (pressZ) this.gameScene.pressC = true;

            if (pressC) {
                this.pressTimeC += 1;
            } else {
                this.pressTimeC -= 1;
            }
            this.pressTimeC = gls2.math.clamp(this.pressTimeC, -1, LASER_FRAME);

            // 攻撃
            this.fireLaser = (pressZ && pressC) || this.pressTimeC === LASER_FRAME;
            var shotInterval = this.gameScene.isHyperMode ? 3 : 4;
            this.fireShot = !this.fireLaser && (0 <= this.pressTimeC || pressZ) && app.frame % shotInterval === 0;
            if (pressZ) {
                this.pressTimeC = 0;
            }
            if (this.style === 3 && this.fireLaser) {
                this.fireShot = app.frame % shotInterval === 0;
            }

            this.laser.x = this.x;
            this.laser.y = this.y - 40;

            // スペシャルウェポン
            if (kb.getKeyDown("x") && this.attackable) {
                if (this.gameScene.hyperLevel > 0 && !this.gameScene.isHyperMode) {
                    // ハイパー
                    this.gameScene.startHyperMode();
                    gls2.StartHyperEffect(this).addChildTo(this.gameScene);
                } else if (!this.gameScene.isBombActive && this.gameScene.bomb > 0) {
                    // ボム
                    this.hyperRank = gls2.math.clamp(this.hyperRank - 2, 0, 1);
                    this.gameScene.addRank(-0.02);
                    gls2.Bomb(this, this.gameScene)
                        .setPosition(gls2.math.clamp(this.x, SC_W*0.2, SC_W*0.8), Math.max(this.y - SC_H*0.5, SC_H*0.3))
                        .addChildTo(this.gameScene);
                    gls2.core.putAchevement("bomb1");
                    for (var i = 0; i < gls2.Bullet.activeList.length; i++) {
                        var b = gls2.Bullet.activeList[i];
                        if (b.visible === false) continue;
                        if ((this.x-b.x)*(this.x-b.x)+(this.y-b.y)*(this.y-b.y) < 15*15) {
                            gls2.core.putAchevement("nicebomb");
                        }
                    }

                    this.gameScene.bombCountByStage[this.gameScene.stageNumber] += 1;
                }
            }

        } else {
            this.fireShot = false;
            this.fireLaser = false;
        }

        // ショット発射
        if (this.fireShot) {
            var s = Math.sin(app.frame * 0.2);
            var sb;
            sb = this.currentShotPool.fire(this.x-7 - s*6, this.y-5, -90);
            if (sb !== null) sb.addChildTo(this.gameScene);
            sb = this.currentShotPool.fire(this.x+7 + s*6, this.y-5, -90);
            if (sb !== null) sb.addChildTo(this.gameScene);
        }

        // レーザー発射
        if (this.fireLaser && this.style !== 3) {
            for (var i = 0, len = this.bits.length; i < len; i++) {
                this.bits[i].v = false;
            }
            this.bitPivot.rotation = 0;
        } else {
            for (var i = 0, len = this.bits.length; i < len; i++) {
                this.bits[i].v = true;
            }
        }

        // ビット
        this.controlBit(kb);

        // ロール
        this._calcRoll(kb, app.frame);

        // バックファイア
        if (app.frame % 2 === 0) {
            backfireParticle.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.gameScene);
            backfireParticle.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.gameScene);
        }

        this.frame = app.frame;
    },

    damage: function() {
        this.fireShot = false;
        this.fireLaser = false;
        this.gameScene.endHyperMode();
        this.gameScene.baseScore = 0;
        this.gameScene.comboGauge = 0;
        this.gameScene.comboCount = 0;
    },

    controlBit: function(kb) {
        if (this.type === 0) {
            for (var i = this.bits.length; this.bits[--i] !== undefined; ) {
                var bit = this.bits[i];
                if (i === 0) {
                    bit.x = bit.bx + Math.cos(this.frame * 0.1) *  60;
                } else if (i === 1) {
                    bit.x = bit.bx + Math.cos(this.frame * 0.1) * -60;
                } else if (i === 2) {
                    bit.x = bit.bx + Math.sin(this.frame * 0.1) *  60;
                } else if (i === 3) {
                    bit.x = bit.bx + Math.sin(this.frame * 0.1) * -60;
                }
            }
        } else if (this.type === 1) {
            var p = this.bitPivot;
            if (!this.fireLaser || this.style !== 3) {
                if (this.controllable && kb.getKey("left")) {
                    p.rotation = Math.max(p.rotation - 3, -50);
                } else if (this.controllable && kb.getKey("right")) {
                    p.rotation = Math.min(p.rotation + 3,  50);
                } else {
                    if (3 < p.rotation) {
                        p.rotation -= 3;
                    } else if (p.rotation < -3) {
                        p.rotation += 3;
                    } else {
                        p.rotation = 0;
                    }
                }
            } else {
                p.rotation = 0;
            }
        }
    },

    _calcRoll: function(kb, frame) {
        if ((this.controllable || gls2.core.mode === 2) && kb.getKey("left")) {
            this.roll = gls2.math.clamp(this.roll - 0.2, -3, 3);
        } else if ((this.controllable || gls2.core.mode === 2) && kb.getKey("right")) {
            this.roll = gls2.math.clamp(this.roll + 0.2, -3, 3);
        } else {
            if (this.roll < 0) {
                this.roll = gls2.math.clamp(this.roll + 0.2, -3, 3);
            } else if (0 < this.roll){
                this.roll = gls2.math.clamp(this.roll - 0.2, -3, 3);
            }
        }
        if (this.type === 0) {
            this.setFrameIndex(3 + ~~this.roll);
        } else if (this.type === 1) {
            this.setFrameIndex((10 + ~~(frame/2)%3 * 7) + ~~this.roll);
        } else if (this.type === 2) {
            this.setFrameIndex(31 + ~~this.roll);
        }
        return frame;
    },

});

/**
 * @class
 * @extends {tm.display.AnimationSprite}
 */
gls2.Bit = tm.createClass(
/** @lends {gls2.Bit.prototype} */
{
    superClass: tm.display.AnimationSprite,
    bit: null,
    player: null,

    /**
     * @constructs
     */
    init: function(player, bit) {
        this.superInit(tm.asset.SpriteSheet({
            image: "tex_bit",
            frame: {
                width: 32,
                height: 32
            },
            animations: {
                "anim0": {
                    frames: [ 0, 1, 2, 3, 4, 5, ],
                    next: "anim0",
                    frequency: 3
                },
                "anim1": {
                    frames: [ 1, 2, 3, 4, 5, 0, ].reverse(),
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
            if (this.bit.v && core.frame%2 === 0) backfireParticle.clone(40).setPosition(g.x, g.y).addChildTo(this.player.gameScene);

            // ショット
            if (this.player.fireShot) {
                var sb = this.player.currentShotPool.fire(g.x, g.y, this.parent.rotation + this.rotation - 90);
                if (sb !== null) sb.addChildTo(core.gameScene);
            }
        }
    },

});

})();
