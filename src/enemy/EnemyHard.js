// すべてsingletonかつimmutableに実装する
(function() {

var _Sprite = tm.createClass({
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

/**
 * 敵の見た目や性能
 * @class
 */
gls2.EnemyHard = tm.createClass(
/** @lends */
{
    setup: function() {
        this.name = "abstract enemy";
        this.hp = 9999;
    },
    onLaunch: function() {
    },
    onCompleteAttack: function() {
    },
    update: function() {
    },
    draw: function(canvas) {
    },
    destroy: function() {
        gls2.Effect.explode(this.x, this.y, this.gameScene);
    },
});

/**
 * 小型ヘリ「クジョウ」
 * @class
 * @extends {gls2.EnemyHard}
 */
gls2.EnemyHard.Heri1 = tm.createClass(
/** @lends */
{
    superClass: gls2.EnemyHard,
    init: function() {
        this.superInit();
    },
    setup: function() {
        this.name = "kujo";
        this.hp = 3;
        this.isGround = false;
        this._sprite = _Sprite("tex1", 64, 64);
    },
    update: function() {
        if (this.x < this.player.x) {
            this.scaleX = -1;
        } else {
            this.scaleX = 1;
        }
    },
    draw: function(canvas) {
        if (this.age % 4 < 2) {
            this._sprite.setFrameIndex(7);
        } else {
            this._sprite.setFrameIndex(8);
        }
        this._sprite.draw(canvas);
    }
});
gls2.EnemyHard.Heri1 = gls2.EnemyHard.Heri1();

/**
 * 中型ヘリ「キリュウ」
 * @class
 * @extends {gls2.EnemyHard}
 */
gls2.EnemyHard.Heri2 = tm.createClass(
/** @lends */
{
    superClass: gls2.EnemyHard,
    init: function() {
        this.superInit();
    },
    setup: function() {
        this.name = "kiryu";
        this.hp = 10;
        this.isGround = false;
        this._sprite = _Sprite("tex1", 64, 64);
    },
    update: function() {
        if (this.x < this.player.x) {
            this.scaleX = -1;
        } else {
            this.scaleX = 1;
        }
    },
    draw: function(canvas) {
        if (this.age % 4 < 2) {
            this._sprite.setFrameIndex(9);
        } else {
            this._sprite.setFrameIndex(10);
        }
        this._sprite.draw(canvas);
    }
});
gls2.EnemyHard.Heri2 = gls2.EnemyHard.Heri2();

/**
 * 小型戦車「ナツキ」
 */
gls2.EnemyHard.Tank1 = tm.createClass({
    superClass: gls2.EnemyHard,
    init: function() {
        this.superInit();
    },
    setup: function() {
        this.name = "natsuki";
        this.hp = 5;
        this.isGround = true;
        this._sprite = _Sprite("tex1", 48, 48);
        this.radius = 24;
    },
    update: function() {
        switch (this.direction) {
        case 0:
            this._sprite.setFrameIndex(16, 64, 64);
            break;
        case 1:
            this._sprite.setFrameIndex(24, 64, 64);
            break;
        case 2:
            this._sprite.setFrameIndex(23, 64, 64);
            break;
        case 3:
            this._sprite.setFrameIndex(11, 64, 64);
            break;
        case 4:
            this._sprite.setFrameIndex(12, 64, 64);
            break;
        case 5:
            this._sprite.setFrameIndex(13, 64, 64);
            break;
        case 6:
            this._sprite.setFrameIndex(14, 64, 64);
            break;
        case 7:
            this._sprite.setFrameIndex(15, 64, 64);
            break;
        }
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
});
gls2.EnemyHard.Tank1 = gls2.EnemyHard.Tank1();

/**
 * 大型戦車「ヤマブキ」
 */

/**
 * 小型戦闘機「ツキカゲ」
 */

/**
 * 中型戦闘機「クロカワ」
 */

/**
 * 固定砲台「キセ」
 */

/**
 * 大型固定砲台「ケンザキ」
 */

/**
 * ボムキャリアー「クルミ」
 */

/**
 * ステージ１中ボス「ユキシロ」
 */
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
 */

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

})();
