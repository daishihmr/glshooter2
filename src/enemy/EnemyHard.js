/**
 * 敵の見た目や性能
 */
gls2.EnemyHard = tm.createClass({
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

gls2.EnemyHard.setup = function() {
    var _Sprite = tm.createClass({
        superClass: tm.app.Sprite,
        init: function(texture, width, height) {
            this.superInit(texture, width, height);
        },
        draw: function(canvas) {
            var srcRect = this.srcRect;
            var element = this._image.element;

            canvas.context.drawImage(element,
                srcRect.x, srcRect.y, srcRect.width, srcRect.height,
                -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height);
        }
    });

    /**
     * 小型ヘリ「クジョウ」
     */
    this["heri1"] = tm.createClass({
        superClass: gls2.EnemyHard,
        name: "kujo",
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
            if (this.enemy.age % 4 < 2) {
                this._sprite.srcRect.set(7 * 64, 0 * 64, 64, 64);
            } else {
                this._sprite.srcRect.set(0 * 64, 1 * 64, 64, 64);
            }
            this._sprite.draw(canvas);
        }
    });

    /**
     * 中型ヘリ「キリュウ」
     */
    this["heri2"] = tm.createClass({
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
            if (this.enemy.age % 4 < 2) {
                this._sprite.srcRect.set(1 * 64,  1 * 64, 64, 64);
            } else {
                this._sprite.srcRect.set(2 * 64,  1 * 64, 64, 64);
            }
            this._sprite.draw(canvas);
        }
    });

    /**
     * 小型戦車「ナツキ」
     */

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
};
