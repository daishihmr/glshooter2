/*
 * License
 * http://daishihmr.mit-license.org/
 */

// すべてsingletonかつimmutableに実装する
(function() {

var data = {
    //name         hp     score   ground erase  star
    "kujo":      [     2,      300, false, false,  1 ],
    "kiryu":     [     3,      400, false, false,  1 ],
    "natsuki":   [     5,      900,  true, false,  1 ],
    "kise":      [    35,    15000,  true, false,  1 ],
    "kurokawa":  [    35,     5000, false, false,  5 ],
    "akimoto":   [   250,   300000, false,  true, 10 ],
    "yukishiro": [   750,   800000, false,  true, 20 ],
    "misumi":    [  3000,  2000000, false,  true,  0 ],
};
var setData = function(name, enemy) {
    enemy.name = name;
    enemy.hp = data[name][0];
    enemy.score = data[name][1];
    enemy.isGround = data[name][2];
    enemy.erase = data[name][3];
    enemy.star = data[name][4];
};

/**
 * 大型機の墜落
 */
var fallDown = function() {
    this.remove();
    this.isGround = true;
    this.gameScene.addChild(this);
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
            "altitude": 2,
            "y": this.y + 200,
            "rotation": Math.rand(-10, 10),
        }, 2000)
        .call(function() {
            gls2.Effect.explodeL(this.x, this.y, this.gameScene);
            this.remove();
        }.bind(this));
};

/**
 * ボス破壊
 */
var bossExplode = function() {
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
            "altitude": 2,
            "y": this.y + 200,
        }, 2000)
        .call(function() {
            gls2.Effect.explodeL(this.x, this.y, this.gameScene);
            this.remove();
        }.bind(this));
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

        this._sprite = _Sprite("tex_stage1", 64, 64);
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
            this._sprite.setFrameIndex(0);
        } else {
            this._sprite.setFrameIndex(1);
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

        this._sprite = _Sprite("tex_stage1", 64, 64);
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
            this._sprite.setFrameIndex(8);
        } else {
            this._sprite.setFrameIndex(9);
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
        this._sprite1 = _Sprite("tex_tank1", 64, 64);
        this._sprite2 = _Sprite("tex_tank1", 64, 64);
        this.baseDir = this.baseDir || 0;
        this.cannonDir = this.cannonDir || 0;

        this.boundingRadius = 24;
    },
    update: function() {
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

        this._sprite = _Sprite("tex_stage1", 64*2, 64*2);
        this._sprite.setFrameIndex(1);
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
 * 中型戦闘機「アキモト」
 */
gls2.EnemyHard.Komachi = tm.createClass(
/** @lends */
{
    superClass: gls2.EnemyHard,
    init: function() {
        this.superInit();
    },
    setup: function() {
        setData("akimoto", this);

        this._sprite = _Sprite("tex_stage1", 64*4, 64*2);
        this._sprite.setFrameIndex(1);
        this.boundingWidth = 200;
        this.boundingHeightBottom = 10;
        this.boundingHeightTop = 60;
    },
    update: function() {
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        fallDown.call(this);
    },
});
gls2.EnemyHard.Komachi = gls2.EnemyHard.Komachi();

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

        this._sprite = _Sprite("tex_stage1", 64*2, 64*2);
        this._sprite.setFrameIndex(5);
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
        this._sprite = _Sprite("tex_stage1", 64*4, 64*2);
        this._sprite.setFrameIndex(3);
        this.setScale(1.5);

        this.boundingWidth = 200;
        this.boundingHeight = 80;
    },
    destroy: function() {
        fallDown.call(this);
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
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
 * @class
 * @extends {gls2.EnemyHard}
 */
gls2.EnemyHard.Nagisa = tm.createClass(
/** @lends {gls2.EnemyHard.Nagisa.prototype} */
{
    superClass: gls2.EnemyHard,
    init: function() {
        this.superInit();
    },
    setup: function() {
        setData("misumi", this);
        this._sprite = _Sprite("tex_stage1", 64*4, 64*2);
        this._sprite.setFrameIndex(4);
        this.setScale(2);

        this.boundingWidth = 200;
        this.boundingHeight = 150;
    },
    draw: function(canvas) {
        this._sprite.draw(canvas);
    },
    destroy: function() {
        bossExplode.call(this);
    },
});
gls2.EnemyHard.Nagisa = gls2.EnemyHard.Nagisa();

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
