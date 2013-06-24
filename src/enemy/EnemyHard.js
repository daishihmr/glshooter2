(function() {

/**
 * 敵の見た目や性能
 * @class
 */
gls2.EnemyHard = tm.createClass(
/** @lends */
{
    enemy: null,
    /** 地上物判定 */
    isGround: false,
    _sprite: null,
    hp: 10,
    name: "enemy",
    init: function(enemy) {
        this.enemy = enemy;
    },
    setup: function() {
        this.enemy.hp = this.hp;
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
        gls2.Effect.explode(this.enemy.x, this.enemy.y, this.enemy.gameScene);
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
    name: "kujo",
    hp: 3,
    init: function(enemy) {
        this.superInit(enemy);
        this._sprite = _Sprite("tex1", 64, 64);
    },
    update: function() {
        if (this.enemy.x < this.enemy.player.x) {
            this.enemy.scaleX = -1;
        } else {
            this.enemy.scaleX = 1;
        }
    },
    draw: function(canvas) {
        if (this.enemy.frame % 4 < 2) {
            this._sprite.setFrameIndex(7);
        } else {
            this._sprite.setFrameIndex(8);
        }
        this._sprite.draw(canvas);
    }
});

/**
 * 中型ヘリ「キリュウ」
 * @class
 * @extends {gls2.EnemyHard}
 */
gls2.EnemyHard.Heri2 = tm.createClass(
/** @lends */
{
    superClass: gls2.EnemyHard,
    name: "kiryu",
    hp: 10,
    init: function(enemy) {
        this.superInit(enemy);
        this._sprite = _Sprite("tex1", 64, 64);
    },
    update: function() {
        if (this.enemy.x < this.enemy.player.x) {
            this.enemy.scaleX = -1;
        } else {
            this.enemy.scaleX = 1;
        }
    },
    draw: function(canvas) {
        if (this.enemy.frame % 4 < 2) {
            this._sprite.setFrameIndex(9);
        } else {
            this._sprite.setFrameIndex(10);
        }
        this._sprite.draw(canvas);
    }
});

/**
 * 小型戦車「ナツキ」
 */
gls2.EnemyHard.Tank1 = tm.createClass({
    superClass: gls2.EnemyHard,
    name: "natsuki",
    hp: 5,
    init: function(enemy) {
        this.superInit(enemy);
        this.isGround = true;
        this._sprite = _Sprite("tex1", 48, 48);
        this.enemy.radius = 24;
    },
    update: function() {
        switch (this.enemy.direction) {
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

})();
