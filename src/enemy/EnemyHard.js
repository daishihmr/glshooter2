/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

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

        this._sprite = _Sprite("tex_stage1", 64, 64);
        this.boundingRadius = 24;
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

        this._sprite = _Sprite("tex_stage1", 64, 64);
        this.boundingRadius = 24;
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

        this.boundingRadius = 24;
    },
    update: function(app) {
        gls2.Enemy.prototype.update.call(this, app);

        this._sprite1.setFrameIndex(~~(this.baseDir*16/(Math.PI*2)), 64, 64);
        this._sprite2.setFrameIndex(~~(this.cannonDir*16/(Math.PI*2)) + 16, 64, 64);
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

/**
 * 小型戦闘機「ツキカゲ」
 */

/**
 * 中型戦闘機「クロカワ」
 */
gls2.Enemy.FighterM = tm.createClass(
/** @lends */
{
    superClass: gls2.Enemy,

    _sprite1: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "kurokawa");

        this._sprite = _Sprite("tex_stage1", 64*2, 64*2).setFrameIndex(1);
        this.boundingWidth = 100;
        this.boundingHeight = 20;
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
    init: function(gameScene, software) {
        this.superInit(gameScene, software, "akimoto");

        this._sprite = _Sprite("tex_stage1", 64*4, 64*2).setFrameIndex(1);
        this.boundingWidth = 200;
        this.boundingHeightBottom = 10;
        this.boundingHeightTop = 60;
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

    _sprite1: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "kise");

        this._sprite = _Sprite("tex_stage1", 64*2, 64*2).setFrameIndex(5);
        this.boundingWidth = 20;
        this.boundingHeight = 20;
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
 * 大型固定砲台「ケンザキ」
 */

/**
 * ボムキャリアー「クルミ」
 */

/**
 * ステージ１中ボス「ユキシロ」
 */
gls2.Enemy.Honoka = tm.createClass({
    superClass: gls2.Enemy,

    _sprite1: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "yukishiro");

        this._sprite = _Sprite("tex_stage1", 64*4, 64*2).setFrameIndex(3);
        this.setScale(1.5);

        this.boundingWidth = 200;
        this.boundingHeight = 80;
    },
    destroy: function() {
        this.fallDown();
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});

/**
 * ステージ２中ボス「ミショウ」
 */

/**
 * ステージ３中ボス「ヒガシ」
 */

/**
 * ステージ４中ボス「ミナミノ」
 */

/**
 * ステージ５中ボス「ヒシカワ」
 */

/**
 * ステージ１ボス「ミスミ」
 * @class
 * @extends {gls2.Enemy}
 */
gls2.Enemy.Nagisa = tm.createClass(
/** @lends {gls2.Enemy.Nagisa.prototype} */
{
    superClass: gls2.Boss,

    _sprite1: null,

    init: function(gameScene, software) {
        this.superInit(gameScene, software, "misumi");

        this._sprite = _Sprite("tex_stage1", 64*4, 64*2).setFrameIndex(4);
        this.setScale(1.5);

        this.boundingWidth = 200;
        this.boundingHeight = 80;
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        this.bossDestroy();
    },
});

/**
 * ステージ２ボス「ヒュウガ」
 */

/**
 * ステージ３ボス「モモゾノ」
 */

/**
 * ステージ４ボス「ホウジョウ」
 */

/**
 * ステージ５ボス「アイダ」
 */

/**
 * エクストラボス「ユメハラ」
 */

/**
 * エクストラボス2「|)|23@[v]」
 */

/**
 * 初めからdrawメソッドが実装済みのSprite
 * @class
 * @extends {tm.app.Sprite}
 */
var _Sprite = tm.createClass(
/** @lends {_Sprite.prototype} */
{
    superClass: tm.app.Sprite,
    init: function(tex, w, h) {
        this.superInit(tex, w, h);
    },
    draw: function(canvas) {
        var srcRect = this.srcRect;
        var element = this._image.element;

        canvas.context.drawImage(element,
            srcRect.x, srcRect.y, srcRect.width, srcRect.height,
            -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height);
    },
});

})();
