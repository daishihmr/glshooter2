/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * 敵
 * @class
 */
gls2.Enemy = tm.createClass(
/** @lends {gls2.Enemy.prototype} */
{
    superClass: tm.display.CanvasElement,

    /**
     * @type {string}
     */
    name: null,

    /**
     * 自機
     * @type {gls2.Player}
     */
    player: null,
    /**
     * GameScene
     * @type {gls2.GameScene}
     */
    gameScene: null,
    /**
     * @type {gls2.Stage}
     */
    stage: null,

    /**
     * 耐久力
     * 0以下になったら破壊される
     */
    hp: 0,
    hpMax: 0,
    /** 撃破時の素点 */
    score: 0,
    /** 地上物か */
    isGround: false,

    /** 破壊時に弾消しが発生するか */
    erase: false,
    /** 破壊時の星アイテム出現数 */
    star: 1,

    /** ステージボス */
    isBoss: false,

    /** 弾発射可能フラグ */
    enableFire: true,

    /**
     * 出現してから一度でも可視範囲に入ったか
     * 一度完全に画面に入りきるまではダメージを受けない（攻撃は命中する）
     */
    entered: false,
    /**
     * 可視範囲に入った時点からの経過フレーム
     */
    frame: 0,

    /**
     * 速度
     * 爆風の移動計算用
     */
    velocity: null,
    direction: 0,
    speed: 0,

    /** @type {Array.<string>} */
    patterns: null,

    /**
     * @constructs
     */
    init: function(gameScene, software, name) {
        this.superInit();

        this.addEventListener("added", function() {
            this.frame = 0;
            this.entered = false;
            activeList.push(this);
        });
        this.addEventListener("removed", function() {
            this.dispatchEvent(tm.event.Event("enemyconsumed"));
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);
        });

        this.enableFire = true;

        this.gameScene = gameScene;
        this.player = gameScene.player;

        this.score = 100;
        this.erase = false;

        this._setData(name);
        software.setup(this);

        if (this.isGround) {
            this.altitude = 1;
        } else {
            this.altitude = 10;
        }

        this.velocity = {x:0, y:0};

        // 残しときましょう
        if (DEBUG) {
            this.label = tm.display.Label("", 20).addChildTo(this);
            var that = this;
            this.label.update = function() {
                this.text = "[ " + ~~(that.hp) + " / " + that.hpMax + " ]";
                if (!that.entered) {
                    this.fillStyle = "red";
                } else {
                    this.fillStyle = "white";
                }
            };
        }
    },

    /**
     * 出現時に呼び出される
     */
    onLaunch: function() {
        this.dispatchEvent(tm.event.Event("launch"));
        return this;
    },

    /**
     * BulletMLによる攻撃が完了した時に呼び出される
     */
    onCompleteAttack: function() {
        this.dispatchEvent(tm.event.Event("completeattack"));
    },

    /**
     * 毎フレーム呼び出される
     */
    update: function() {
        if (this.entered === false
            && 0 <= this.x - this.boundingWidthLeft && this.x + this.boundingWidthRight < SC_W
            && 0 <= this.y - this.boundingHeightTop && this.y + this.boundingHeightBottom < SC_H) {
            this.entered = true;
            this.dispatchEvent(tm.event.Event("enter"));
        }

        var before = {
            x: this.x,
            y: this.y,
        };

        if (this.isGround) {
            this.x += this.gameScene.ground.dx;
            this.y += this.gameScene.ground.dy;
        }

        if (this.entered) this.frame += 1;

        this.velocity.x = this.x - before.x;
        this.velocity.y = this.y - before.y;
    },

    /**
     * ダメージを受ける
     * @return {boolean} このダメージによって破壊された場合はtrueを返す
     */
    damage: function(damagePoint) {
        // 可視範囲に入ったことのない敵はダメージを受けない
        if (!this.entered) return false;

        this.hp -= damagePoint;
        if (this.hp <= 0) {

            var r = gls2.math.randf(0, 5);
            if (r < 2) {
                this.gameScene.println("enemy destroy.");
            } else if (r < 4) {
                this.gameScene.println(this.name + " destroy.");
            } else {
                this.gameScene.println("ETR reaction gone.")
            }

            if (this.erase) {
                gls2.Danmaku.erase(true, this.gameScene.isHyperMode, (this instanceof gls2.Boss));
            }

            this.dispatchEvent(tm.event.Event("destroy"));
            this.destroy();

            return true;
        } else {
            if (this.hp < 40) {
                this.ondying();
            }
            return false;
        }
    },

    destroy: function() {
        gls2.Effect.explodeS(this.x, this.y, this.gameScene, this.velocity);
        this.remove();
    },

    /**
     * 現在画面内に入っているか
     */
    isInScreen: function() {
        return 0 <= this.x + this.width/2 && this.x - this.width/2 < SC_W
            && 0 <= this.y + this.height/2 && this.y - this.height/2 < SC_H;
    },

    /**
     * 弾を発射する直前に呼び出される
     * @return {boolean} falseを返すと弾の発射をキャンセルする
     */
    onfire: function() {
        return this.enableFire;
    },

    /**
     * 瀕死になった時に呼び出される
     */
    ondying: function() {

    },

    _setData: function(name) {
        this.name = name;

        var data = gls2.Enemy.DATA[name];
        this.hp = this.hpMax = data[0];
        this.score = data[1];
        this.isGround = data[2];
        this.erase = data[3];
        this.star = data[4];
        if (data[5]["radius"] !== undefined) {
            this.boundingRadius = data[5]["radius"];
        }
        if (data[5]["width"] !== undefined) {
            this.boundingWidth = data[5]["width"];
        }
        if (data[5]["height"] !== undefined) {
            this.boundingHeight = data[5]["height"];
        }
        if (data[5]["widthLeft"] !== undefined) {
            this.boundingWidthLeft = data[5]["widthLeft"];
        }
        if (data[5]["widthRight"] !== undefined) {
            this.boundingWidthRight = data[5]["widthRight"];
        }
        if (data[5]["heightTop"] !== undefined) {
            this.boundingHeightTop = data[5]["heightTop"];
        }
        if (data[5]["heightBottom"] !== undefined) {
            this.boundingHeightBottom = data[5]["heightBottom"];
        }
    },

    fallDown: function() {
        this.remove();
        this.gameScene.fallDownLayer.addChild(this);
        this.addEventListener("enterframe", function() {
            if (Math.random() < 0.2) {
                gls2.Effect.explodeS(this.x + gls2.math.rand(-100, 100), this.y + gls2.math.rand(-40, 40), this.gameScene, {
                    "x": 0,
                    "y": -3,
                });
            }
        });
        this.tweener
            .clear()
            .to({
                "altitude": 4,
                "y": this.y + 200,
            }, 2000)
            .call(function() {
                gls2.Effect.explodeL(this.x, this.y, this.gameScene);
                this.remove();
            }.bind(this));
    },

    bossDestroy: function() {
        // TODO ド派手にする
        this.addEventListener("enterframe", function() {
            if (Math.random() < 0.2) {
                gls2.Effect.explodeS(this.x + gls2.math.rand(-100, 100), this.y + gls2.math.rand(-40, 40), this.gameScene, {
                    "x": 0,
                    "y": -3,
                });
            }
        });
        this.tweener
            .clear()
            .to({
                "altitude": 4,
                "y": this.y + 200,
            }, 2000)
            .call(function() {
                gls2.Effect.explodeL(this.x, this.y, this.gameScene);
                this.remove();
            }.bind(this));
    },

});

/**
 * すべての敵を退場させる
 * @static
 */
gls2.Enemy.clearAll = function() {
    var copied = [].concat(activeList);
    for (var i = 0, end = copied.length; i < end; i++) {
        copied[i].remove();
    }
};

/**
 * GameScene上に出現しているすべての敵のリスト
 * @type {Array.<gls2.Enemy>}
 */
var activeList = gls2.Enemy.activeList = [];

})();
