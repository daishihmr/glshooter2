// すべてsingletonかつimmutableに実装する
(function() {

var data = {
    "kujo":      [   2,    100, false, false ],
    "kiryu":     [   3,    300, false, false ],
    "natsuki":   [   5,    300,  true, false ],
    "kise":      [  30,    300,  true, false ],
    "kurokawa":  [  60,   3000, false, false ],
    "yukishiro": [ 1500, 50000, false,  true ],
};
var setData = function(name, enemy) {
    enemy.name = name;
    enemy.hp = data[name][0];
    enemy.score = data[name][1];
    enemy.isGround = data[name][2];
    enemy.erase = data[name][3];
};

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
    onenter: function() {
    },
    draw: function(canvas) {
    },
    destroy: function() {
        gls2.Effect.explodeS(this.x, this.y, this.gameScene, this.velocity);
        this.remove();
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
        setData("kujo", this);

        this._sprite = _Sprite("tex1", 64, 64);
        this.boundingRadius = 24;
    },
    update: function() {
        if (this.x < this.player.x) {
            this.scaleX = -1;
        } else {
            this.scaleX = 1;
        }
    },
    draw: function(canvas) {
        if (this.frame % 4 < 2) {
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
        setData("kiryu", this);

        this._sprite = _Sprite("tex1", 64, 64);
        this.boundingRadius = 24;
    },
    update: function() {
        if (this.x < this.player.x) {
            this.scaleX = -1;
        } else {
            this.scaleX = 1;
        }
    },
    draw: function(canvas) {
        if (this.frame % 4 < 2) {
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
        setData("natsuki", this);

        this._sprite = _Sprite("tex1", 48, 48);
        this.boundingRadius = 24;
    },
    update: function() {
        switch (~~(this.dir/(Math.PI*0.25))) {
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
    destroy: function() {
        gls2.Effect.explodeGS(this.x, this.y, this.gameScene);
        this.remove();
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
gls2.EnemyHard.FighterM = tm.createClass(
/** @lends */
{
    superClass: gls2.EnemyHard,
    init: function() {
        this.superInit();
    },
    setup: function() {
        setData("kurokawa", this);

        this._sprite = _Sprite("tex1", 128, 128);
        this._sprite.srcRect.x = 64*5;
        this._sprite.srcRect.y = 64*2;
        this._sprite.srcRect.width = 64*2;
        this._sprite.srcRect.height = 64*2;
        this.boundingWidth = 100;
        this.boundingHeight = 20;
    },
    update: function() {
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        gls2.Effect.explodeM(this.x, this.y, this.gameScene);
        this.remove();
    },
});
gls2.EnemyHard.FighterM = gls2.EnemyHard.FighterM();

/**
 * 固定砲台「キセ」
 */
gls2.EnemyHard.Cannon = tm.createClass({
    superClass: gls2.EnemyHard,
    init: function() {
        this.superInit();
    },
    setup: function() {
        setData("kise", this);

        this.boundingWidth = 20;
        this.boundingHeight = 20;
    },
    draw: function(canvas) {
        canvas.strokeStyle = "yellow";
        canvas.strokeRect(-20*0.5, -20*0.5, 20, 20);
    },
});
gls2.EnemyHard.Cannon = gls2.EnemyHard.Cannon();

/**
 * 大型固定砲台「ケンザキ」
 */

/**
 * ボムキャリアー「クルミ」
 */

/**
 * ステージ１中ボス「ユキシロ」
 */
gls2.EnemyHard.Honoka = tm.createClass({
    superClass: gls2.EnemyHard,
    init: function() {
        this.superInit();
    },
    setup: function() {
        setData("yukishiro", this);

        this.boundingWidth = 200;
        this.boundingHeight = 80;
    },
    destroy: function() {
        this.remove();
        this.isGround = true;
        this.gameScene.addChild(this);
        this.addEventListener("enterframe", function() {
            if (Math.random() < 0.2) {
                gls2.Effect.explodeS(this.x + Math.rand(-100, 100), this.y + Math.rand(-40, 40), this.gameScene, {
                    "x": 0,
                    "y": -3,
                });
            }
        });
        this.tweener
            .clear()
            .to({
                "altitude": 0,
                "y": this.y + 200,
                "rotation": 10,
            }, 2000)
            .call(function() {
                gls2.Effect.explodeM(this.x, this.y, this.gameScene);
                this.remove();
            }.bind(this));
    },
    draw: function(canvas) {
        canvas.fillStyle = "yellow";
        canvas.fillRect(-100, -40, 200, 80);
    },
});
gls2.EnemyHard.Honoka = gls2.EnemyHard.Honoka();

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
