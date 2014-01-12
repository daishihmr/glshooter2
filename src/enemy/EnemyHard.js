/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

/** @const */
gls2.Enemy.DATA = {
    //name         hp     score   ground erase  star  bounding
    //名前          耐久力  素点    地上物判定 破壊時の弾消し 破壊時の星アイテム排出数 当たり判定の大きさ
    "kujo":      [     2,      300, false, false,  1, {"radius": 24}, ],
    "kiryu":     [     3,      400, false, false,  1, {"radius": 24}, ],
    "natsuki":   [     5,      900,  true, false,  1, {"radius": 24}, ],
    "kise":      [    50,    15000,  true, false,  1, {"radius": 24}, ],
    "yamabuki":  [   100,    15000,  true, false,  1, {"width":140, "height":70}, ],
    "hanasaki":  [   150,   200000,  true,  true, 10, {"radius": 40}, ],
    "myodoin":   [    50,    15000,  true, false,  1, {"radius": 40}, ],
    "kenzaki":   [   200,   300000,  true,  true, 10, {"width":100, "height":40}, ],
    "minazuki":  [   300,   300000,  true,  true, 10, {"width":100, "height":40}, ],
    "tsukikage": [     8,     1000, false, false,  5, {"width":100, "height":20}, ],
    "kurokawa":  [    35,     5000, false, false,  5, {"width":100, "height":20}, ],
    "akimoto":   [   250,   300000, false,  true, 10, {"width":200, "heightBottom":10, "heightTop":60}, ],
    "yukishiro": [   750,   800000, false,  true, 20, {"width":240, "height":80}, ],
    "misumi":    [  4000,  2000000, false,  true,  0, {"width":240, "height":80}, ],
    "mishou":    [  1000,  1000000, false,  true, 20, {"width":300, "height":80}, ],
    "hyuga":     [  6000,  3000000, false,  true,  0, {"width":240, "height":80}, ],
    "hishikawa": [  2000,  2000000, false,  true, 20, {"radius":100}, ],
    "aida":      [  8000,  4000000, false,  true,  0, {"width":240, "height":80}, ],
    "erika":     [    30,      500, false, false,  1, {"width":24, "height":48}, ],

    //Stage3
    "hino":      [    30,      500, false, false,  1, {"width":24, "height":48}, ],
    "hoshizora_y":[  100,      500, false,  true, 30, {"width":128, "height":64}, ],
    "hoshizora_t":[  150,      500, false,  true, 30, {"width":128, "height":64}, ],
    "yotsuba":   [   300,    30000, false,  true, 30, {"width":64, "height":64}, ],
    "yotsubaLeaf":[  200,    10000, false, false, 10, {"width":32, "height":32}, ],
//  "midorikawa":[   150,      500, false, true,  30, {"width":128, "height":64}, ],
//  "aoki":      [   150,      500, false, true,  30, {"width":128, "height":64}, ],
};

/**
 * 小型ヘリ「クジョウ」
 * @class
 * @extends {gls2.Enemy}
 */
gls2.Enemy.Heri1 = tm.createClass(
/** @lends {gls2.Enemy.Heri1.prototype} */
{
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "kujo");

        this._sprite = _Sprite("tex1", 64, 64);
    },
    update: function(app) {
        gls2.Enemy.prototype.update.call(this, app);

        if (this.x < this.player.x) {
            this.scaleX = -1;
        } else {
            this.scaleX = 1;
        }
    },
    draw: function(canvas) {
        this._sprite.setFrameIndex((this.frame % 4 < 2) ? 0 : 1).draw(canvas);
    },
});

/**
 * 中型ヘリ「キリュウ」
 * @class
 * @extends {gls2.Enemy}
 */
gls2.Enemy.Heri2 = tm.createClass(
/** @lends */
{
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "kiryu");

        this._sprite = _Sprite("tex1", 64, 64);
    },
    update: function(app) {
        gls2.Enemy.prototype.update.call(this, app);

        if (this.x < this.player.x) {
            this.scaleX = -1;
        } else {
            this.scaleX = 1;
        }
    },
    draw: function(canvas) {
        this._sprite.setFrameIndex((this.frame % 4 < 2) ? 8 : 9).draw(canvas);
    }
});

/**
 * 小型戦車「ナツキ」
 */
gls2.Enemy.Tank1 = tm.createClass({
    superClass: gls2.Enemy,

    _sprite1: null,
    _sprite2: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "natsuki");

        this._sprite1 = _Sprite("tex_tank1", 64, 64);
        this._sprite2 = _Sprite("tex_tank1", 64, 64);
        this.baseDir = this.baseDir || 0;
        this.cannonDir = this.cannonDir || 0;
    },
    update: function(app) {
        gls2.Enemy.prototype.update.call(this, app);

        var b = this.baseDir;
        while (b < 0) b += Math.PI*2;
        while (Math.PI*2 <= b) b -= Math.PI*2;
        var c = this.cannonDir;
        while (c < 0) c += Math.PI*2;
        while (Math.PI*2 <= c) c -= Math.PI*2;

        this._sprite1.setFrameIndex(~~(b*16/(Math.PI*2)), 64, 64);
        this._sprite2.setFrameIndex(~~(c*16/(Math.PI*2)) + 16, 64, 64);
    },
    draw: function(canvas) {
        this._sprite1.draw(canvas);
        this._sprite2.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeGS(this.x, this.y, this.gameScene);
        this.remove();
    },
});

/**
 * 大型戦車「ヤマブキ」
 */
gls2.Enemy.Bukky = tm.createClass({
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "yamabuki");

        this._sprite = _Sprite("tex2", 64*4, 64*2).setFrameIndex(7);
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.remove();
    },
});

/**
 * 小型戦闘機「ツキカゲ」
 */
gls2.Enemy.FighterS = tm.createClass(
/** @lends */
{
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "tsukikage");

        this._sprite = _Sprite("tex1", 64*1, 64*1).setFrameIndex(23);
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.remove();
    },
});

/**
 * 中型戦闘機「クロカワ」
 */
gls2.Enemy.FighterM = tm.createClass(
/** @lends */
{
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "kurokawa");

        this._sprite = _Sprite("tex1", 64*2, 64*2).setFrameIndex(1);
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.remove();
    },
});

/**
 * 中型戦闘機「アキモト」
 */
gls2.Enemy.Komachi = tm.createClass(
/** @lends */
{
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "akimoto");

        this._sprite = _Sprite("tex1", 64*4, 64*2).setFrameIndex(1);
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        this.fallDown();
    },
});

/**
 * 大型戦闘機「アオノ」
 */
gls2.Enemy.Mktn = tm.createClass(
/** @lends */
{
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "aono");

        this._sprite = _Sprite("tex1", 64*4, 64*2);
        this._sprite.srcRect.x = 128;
        this._sprite.srcRect.y = 128;
        this._sprite.srcRect.width = 64*4;
        this._sprite.srcRect.height = 64*2;
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        this.fallDown();
    },
});

/**
 * 固定砲台「キセ」
 */
gls2.Enemy.Cannon = tm.createClass({
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "kise");

        this._sprite = _Sprite("tex1", 64*1, 64*2).setFrameIndex(14);
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.remove();
    },
});

/**
 * 固定砲台「ハナサキ」
 */
gls2.Enemy.Tsubomi = tm.createClass({
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "hanasaki");

        this._sprite = _Sprite("tex1", 64*1, 64*2).setFrameIndex(14);
    },
    ondying: function() {
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.remove();
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});

/**
 * 中型固定砲台「ミョウドウイン」
 */
gls2.Enemy.Itsuki = tm.createClass({
    superClass: gls2.Enemy,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "myodoin");

        this._sprite = _Sprite("tex1", 64*2, 64*2).setFrameIndex(12);
    },
    ondying: function() {
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.remove();
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});

/**
 * 大型固定砲台「ケンザキ」
 */
gls2.Enemy.Cannon2 = tm.createClass({
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "kenzaki");

        this._sprite = _Sprite("tex1", 64*2, 64*4);
        this._sprite.srcRect.x = 0;
        this._sprite.srcRect.y = 128;
        this._sprite.srcRect.width = 64*2;
        this._sprite.srcRect.height = 64*4;
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.remove();
    },
});

/**
 * 大型固定砲台「ミナヅキ」
 */
gls2.Enemy.Cannon3 = tm.createClass({
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "minazuki");

        this._sprite = _Sprite("tex1", 64*2, 64*4);
        this._sprite.srcRect.x = 0;
        this._sprite.srcRect.y = 128;
        this._sprite.srcRect.width = 64*2;
        this._sprite.srcRect.height = 64*4;
        this.setScale(1.2);
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.remove();
    },
});

/**
 * 強襲戦闘艇「ヒノ」
 */
gls2.Enemy.akane = tm.createClass(
{
    superClass: gls2.Enemy,
    init: function(gameScene, software) {
        this.superInit(gameScene, software, "hino");

        this._sprite = _Sprite("hino", 64, 32).setFrameIndex(0);
        this.boundingWidth = 64;
        this.boundingHeightBottom = 0;
        this.boundingHeightTop = 32;
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});

/**
 * 大型戦艦「ホシゾラ」横
 */
gls2.Enemy.miyuki_y = tm.createClass(
{
    superClass: gls2.Enemy,
    init: function(gameScene, software) {
        this.superInit(gameScene, software, "hoshizora_y");

        this._sprite = _Sprite("hoshizora_y", 256, 128).setFrameIndex(0);
        this.boundingWidth = 256;
        this.boundingHeightBottom = 16;
        this.boundingHeightTop = 64;
    },
    update: function(app) {
        if (!this.isInScreen()) {
            if (this.x < 0)this._sprite.setFrameIndex(0);
            if (this.x > SC_W)this._sprite.setFrameIndex(1);
        }
        gls2.Enemy.prototype.update.call(this, app);
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        this.fallDown();
    },
    isInScreen: function() {
        //一部でも表示されたら画面内とする
        return 0 <= this.x + this.width/2 || this.x - this.width/2 < SC_W
            || 0 <= this.y + this.height/2 || this.y - this.height/2 < SC_H;
    },
});

/**
 * 大型戦艦「ホシゾラ」縦
 */
gls2.Enemy.miyuki_t = tm.createClass(
{
    superClass: gls2.Enemy,
    init: function(gameScene, software) {
        this.superInit(gameScene, software, "hoshizora_t");

        this._sprite = _Sprite("hoshizora_t", 64, 128).setFrameIndex(0);
        this.boundingWidth = 128;
        this.boundingHeightBottom = 16;
        this.boundingHeightTop = 32;
    },
    update: function(app) {
        gls2.Enemy.prototype.update.call(this, app);
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        this.fallDown();
    },
    isInScreen: function() {
        //一部でも表示されたら画面内とする
        return 0 <= this.x + this.width/2 || this.x - this.width/2 < SC_W
            || 0 <= this.y + this.height/2 || this.y - this.height/2 < SC_H;
    },
});

/**
 * 浮遊砲台「ヨツバ」（エクステンドキャリア）
 */
gls2.Enemy.Alice = tm.createClass({
    superClass: gls2.Enemy,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "yotsuba");
        this._sprite = _Sprite("yotsuba", 128, 128).setFrameIndex(0);
        this.boundingWidth = 128;
        this.boundingHeightBottom = 0;
        this.boundingHeightTop = 0;
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeL(this.x, this.y, this.gameScene);
        this.fallDown();

        //ボム効果時間中はエクステンドアイテムを出さない
        if (!this.gameScene.isBombActive) gls2.ExtendItem(this.x, this.y).addChildTo(this.parent);

        this.remove();

        //本体破壊時に端末も破壊
        for (var i = 0; i<4; i++) {
            if (this.leaf[i])this.leaf[i].destroy();
        }
        delete this.leaf;
    },
    onLaunch: function() {
        //出現時に端末を投入
        this.leaf = [];
        for (var i = 0; i<4; i++) {
            var dir = Math.PI*0.5*i;
            var distance = 50;
            var sx = this.x+Math.sin(dir)*distance;
            var sy = this.y+Math.cos(dir)*distance;
            this.leaf[i] = this.stage.launchEnemy({ hard:gls2.Enemy.AliceLeaf, soft:gls2.EnemySoft.AliceLeaf, x:sx, y:sy});
            this.leaf[i].dir = dir;
            this.leaf[i].current = this;
            this.leaf[i].number = i;
            this.leaf[i].distance = distance;
        }
        gls2.Enemy.prototype.onLaunch.call(this);
        return this;
    },
});

/**
 * 浮遊砲台「ヨツバ」端末
 */
gls2.Enemy.AliceLeaf = tm.createClass({
    superClass: gls2.Enemy,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "yotsubaLeaf");

        this._sprite = _Sprite("yotsubaLeaf", 64, 64).setFrameIndex(0);
        this.boundingWidth = 64;
        this.boundingHeightBottom = 0;
        this.boundingHeightTop = 0;
    },
    update: function(app) {
        gls2.Enemy.prototype.update.call(this, app);

        var b = this.dir;
        while (b < 0) b += Math.PI*2;
        while (Math.PI*2 <= b) b -= Math.PI*2;
        this._sprite.setFrameIndex(~~(b*16/(Math.PI*2)), 64, 64);
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.current.leaf[this.number] = null;  //破壊されたら本体のリストから切り離し
        this.remove();
    },
});

/**
 * ボムキャリアー「クルミ」
 */
gls2.Enemy.Erika = tm.createClass({
    superClass: gls2.Enemy,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "erika");
    },

    ondying: function() {
    },

    draw: function(canvas) {
        canvas.fillStyle = "yellow";
        canvas.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop,
            this.boundingWidthLeft+this.boundingWidthRight, this.boundingHeightTop+this.boundingHeightBottom);
    },

    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        gls2.BombItem(this.x, this.y, this.player).addChildTo(this.parent);
        this.remove();
    }
});

/**
 * ステージ１中ボス「ユキシロ」
 */
gls2.Enemy.Honoka = tm.createClass({
    superClass: gls2.Enemy,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "yukishiro");

        this._sprite = _Sprite("tex2", 64*4, 64*2).setFrameIndex(0);
        this.setScale(1.5);
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    destroy: function() {
        this.fallDown();
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});

/**
 * ステージ１ボス「ミスミ」
 * @class
 * @extends {gls2.Enemy}
 */
gls2.Enemy.Nagisa = tm.createClass(
/** @lends {gls2.Enemy.Nagisa.prototype} */
{
    superClass: gls2.Boss,

    _sprite: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "misumi");

        this._sprite = _Sprite("tex2", 64*4, 64*2).setFrameIndex(1);
        this.setScale(1.5);
    },
    ondying: function() {
        this.on("enterframe", function(e) {
            if (e.app.frame % 30 === 0) {
                this._sprite.toRed();
            } else if (e.app.frame % 30 === 5) {
                this._sprite.toNormal();
            }
        });
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        this.bossDestroy();
    },
});

/**
 * ステージ２中ボス「ミショウ」
 */
gls2.Enemy.Mai = tm.createClass(
{
    superClass: gls2.Enemy,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "mishou");

        this._sprite = _Sprite("tex2", 64*4, 64*2).setFrameIndex(2);
        this.setScale(1.2);

        this.backFire = gls2.Particle(80, 1.0, 0.9);
        this.aura = gls2.Particle(256, 1.0, 0.9);
    },
    update: function() {
        gls2.Enemy.prototype.update.apply(this, arguments);
        if (gls2.core.frame % 2 === 0) {
            this.backFire.clone().setPosition(this.x + 120, this.y - 30)
                .on("enterframe", function() {
                    this.x += 5;
                }).addChildTo(this.gameScene);
            this.backFire.clone().setPosition(this.x + 120, this.y + 25)
                .on("enterframe", function() {
                    this.x += 5;
                }).addChildTo(this.gameScene);
            this.aura.clone().setPosition(this.x - 30, this.y)
                .on("enterframe", function() {
                    this.x += 5;
                }).addChildTo(this.gameScene);
        }
    },
    ondying: function() {
    },
    destroy: function() {
        this.fallDown();
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});

/**
 * ステージ２ボス「ヒュウガ」
 */
gls2.Enemy.Saki = tm.createClass(
{
    superClass: gls2.Boss,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "hyuga");

        this._sprite = _Sprite("tex2", 64*4, 64*2).setFrameIndex(3);
        this.setScale(1.5);
    },
    ondying: function() {
    },
    destroy: function() {
        this.bossDestroy();
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});

/**
 * ステージ３中ボス「ヒガシ」
 */

/**
 * ステージ３ボス「モモゾノ」
 */

/**
 * ステージ４中ボス「ヒシカワ」
 */
gls2.Enemy.Rikka = tm.createClass(
{
    superClass: gls2.Enemy,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "hishikawa");

        this._sprite = _Sprite("tex2", 64*4, 64*4).setFrameIndex(2);
        this._sprite.setScale(2);
        this.backFire = gls2.Particle(60, 1.0, 0.95);
        this.aura = gls2.Particle(500, 1.0, 0.8);
    },
    update: function() {
        gls2.Enemy.prototype.update.apply(this, arguments);
        if (gls2.core.frame%2 === 0 && this.hp > 0) {
            this.backFire.clone().setPosition(this.x-45, this.y+40)
                .on("enterframe", function() { this.y+=10; })
                .addChildTo(this.gameScene);
            this.backFire.clone().setPosition(this.x+45, this.y+40)
                .on("enterframe", function() { this.y+=10; })
                .addChildTo(this.gameScene);
            this.aura.clone().setPosition(this.x, this.y)
                .addChildTo(this.gameScene);
        }
    },
    ondying: function() {
    },
    destroy: function() {
        this.fallDown();
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});

/**
 * ステージ４ボス「アイダ」
 */
gls2.Enemy.Mana = tm.createClass(
{
    superClass: gls2.Enemy,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "aida");

        this._sprite = _Sprite("tex2", 64*4, 64*2).setFrameIndex(5);
        this.setScale(2);
    },
    ondying: function() {
    },
    destroy: function() {
        this.fallDown();
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});

/**
 * ステージ５中ボス「ミナミノ」
 */

/**
 * ステージ５ボス「ホウジョウ」
 */

/**
 * エクストラボス「ヒビカナ」
 */

/**
 * エクストラボス2「クレッシェンドヒビカナ」
 */

/*
 * 使ってない名前
 * 「ユメハラ」
 * 「カスガノ」
 * 「ミナヅキ」
 * 「ミミノ」
 * 「シラベ」
 * 「マドカ」
 *
 *
 * 足りなくなったら
 * 「ニシジマ」
 * 「ヒガシヤマ」
 * 「ココダ」
 * 「ナツ」
 * 「アマイ」
 * 「ニシ」
 * 「ミナミ」
 * 「バン」
 * 「キリヤ」
 * 「マスコ」
 * 「チネン」
 * 「オウジ」
 * 「オカダ」
 */

/**
 * 初めからdrawメソッドが実装済みのSprite
 * @class
 * @extends {tm.display.Sprite}
 */
var _Sprite = tm.createClass(
/** @lends {_Sprite.prototype} */
{
    superClass: tm.display.Sprite,

    texName: null,

    init: function(tex, w, h) {
        this.superInit(tex, w, h);

        if (typeof(tex) === "string") {
            this.texName = tex;
        }
    },
    draw: function(canvas) {
        var srcRect = this.srcRect;
        var element = this._image.element;

        canvas.context.drawImage(element,
            srcRect.x, srcRect.y, srcRect.width, srcRect.height,
            -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height);
    },

    toRed: function() {
        var bx = this.srcRect.x;
        var by = this.srcRect.y;
        var bw = this.srcRect.width;
        var bh = this.srcRect.height;

        this.image = this.texName + "Red";

        this.srcRect.x = bx;
        this.srcRect.y = by;
        this.srcRect.width = bw;
        this.srcRect.height = bh;
    },

    toNormal: function() {
        var bx = this.srcRect.x;
        var by = this.srcRect.y;
        var bw = this.srcRect.width;
        var bh = this.srcRect.height;

        this.image = this.texName;

        this.srcRect.x = bx;
        this.srcRect.y = by;
        this.srcRect.width = bw;
        this.srcRect.height = bh;
    },
});

})();
