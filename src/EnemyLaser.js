/*
 * License
 * http://daishihmr.mit-license.org/
 */
(function() {

/**
 * @class
 */
gls2.EnemyLaser = tm.createClass(
/** @lends {gls2.EnemyLaser.prototype} */
{
    superClass: tm.display.Sprite,
    enemy: null,
    gameScene: null,
    
    length: 0,
    frame: 0,

    textures: null,
    color: null,

    baseAttackPower: 0,
    baseWidth: 0,

    beforeFrameVisible: false,

    head: null,
    foot: null,
    aura: null,

    isEffect: true,

    attackPower: 0,

    origParticle: null,

    init: function(enemy) {
        this.enemy = enemy;
        this.gameScene = enemy.gameScene;

        this.baseAttackPower = 1;
        this.baseWidth = 40;

        var self = this;

        var textures = {
            "redBody": "laserR",
            "greenBody": "laserG",
            "blueBody": "laserB",
            "hyperBody": "laserH",
            "head": "laserHead",
            "foot": "laserFoot",
            "aura": "aura",
        };
        this.textures = textures;

        this.superInit(textures["blueBody"], this.baseWidth, 100);

        this.boundingHeightBottom = 1;

        this.scrollOffset = 0;
        this.origin.y = 1.0;
        this.rotation = 0;

        var f = this.foot = tm.display.AnimationSprite(tm.asset.SpriteSheet({
            image: textures["foot"],
            frame: {
                width: 120,
                height: 80
            },
            animations: {
                "red": {
                    frames: [0, 1, 2, 3],
                    next: "red",
                    frequency: 2,
                },
                "green": {
                    frames: [4, 5, 6, 7],
                    next: "green",
                    frequency: 2,
                },
                "blue": {
                    frames: [8, 9, 10, 11],
                    next: "blue",
                    frequency: 2,
                },
                "hyper": {
                    frames: [12, 13, 14, 15],
                    next: "hyper",
                    frequency: 2,
                },
            }
        }), 140, 80);
        f.addChildTo(this);

        var h = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({
            image: textures["head"],
            frame: {
                width: 80,
                height: 80
            },
            animations: {
                "red": {
                    frames: [0, 1, 2, 3],
                    next: "red",
                    frequency: 2,
                },
                "green": {
                    frames: [4, 5, 6, 7],
                    next: "green",
                    frequency: 2,
                },
                "blue": {
                    frames: [8, 9, 10, 11],
                    next: "blue",
                    frequency: 2,
                },
                "hyper": {
                    frames: [12, 13, 14, 15],
                    next: "hyper",
                    frequency: 2,
                },
            }
        }), 130, 130);
        h.addChildTo(this);
        h.update = function() {
            this.y = -self.length;
            this.visible = true;
        };

        // this.blendMode = "lighter";
        // a.blendMode = "lighter";
        // f.blendMode = "lighter";
        // h.blendMode = "lighter";

        this.setColor(["red", "green", "blue"][this.enemy.laserType]);
        this.setLevel(0);
    },

    setColor: function(color) {
        this.color = color;

        this.image = tm.asset.AssetManager.get(this.textures[this.color + "Body"]);
        this.srcRect.x = 0;
        this.srcRect.y = 0;
        this.srcRect.width = this.image.width / 16;

        this.foot.gotoAndPlay(this.color);
        this.head.gotoAndPlay(this.color);

        this.origParticle = null;

        return this;
    },

    setLevel: function(hyperLevel) {
        this.width = this.baseWidth;
        this.boundingWidth = this.width;
        this.head.setScale(this.width*0.02, this.width*0.02);
        this.attackPower = this.baseAttackPower;
    },

    update: function(app) {
        this.visible = this.enemy.enableFire;

        if (this.visible) {
            this._hitY -= 10;
            this.height = this.y - this._hitY;
            if (app.frame % 3 === 0) this.frame = (this.frame + 1) % 16;
        } else {
            this._hitY = this.y - 40;
        }

        this.beforeFrameVisible = this.visible;
        // this.boundingHeightTop = this.y - this._hitY;
    },

    draw: function(canvas) {
        var srcRect = this.srcRect;
        var element = this._image.element;

        srcRect.x = srcRect.width * this.frame;

        canvas.context.drawImage(element,
            srcRect.x, srcRect.height - this.height, srcRect.width, this.height,
            -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height);
    },
});

})();
