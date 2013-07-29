(function() {

var origParticle = null;

gls2.Laser = tm.createClass({
    superClass: tm.app.Sprite,
    player: null,
    gameScene: null,
    attackPower: 10,

    _hitY: 0,
    frame: 0,

    textures: null,
    color: null,

    beforeFrameVisible: false,

    head: null,
    foot: null,
    aura: null,

    init: function(player, textures, width) {
        this.player = player;
        this.gameScene = player.gameScene;

        var self = this;

        this.textures = textures;

        this.superInit(textures.redBody, width, 100);

        this.boundingType = "rect";

        this.scrollOffset = 0;
        this.origin.y = 1.0;

        var a = this.aura = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: textures.aura,
            frame: {
                width: 100,
                height: 100
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
        }), 140, 140);
        a.y = 60;
        a.addChildTo(this);

        var f = this.foot = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: textures.foot,
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

        var h = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: textures.head,
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
            this.y = self._hitY - self.y;
            if (-10 < this.y) {
                this.y = -10;
            }
            this.visible = self._hitY > 0;
        };

        // this.blendMode = "lighter";
        // a.blendMode = "lighter";
        // f.blendMode = "lighter";
        // h.blendMode = "lighter";

        // TODO
        this.setColor("blue");
    },

    setColor: function(color) {
        this.color = color;

        this.image = tm.asset.AssetManager.get(this.textures[this.color + "Body"]);
        this.srcRect.x = 0;
        this.srcRect.y = 0;
        this.srcRect.width = this.image.width / 16;

        this.aura.gotoAndPlay(this.color);
        this.foot.gotoAndPlay(this.color);
        this.head.gotoAndPlay(this.color);

        var size = 16;
        origParticle = gls2.Particle(size, 1.0, 0.9, tm.graphics.Canvas()
            .resize(size, size)
            .setFillStyle(
                tm.graphics.RadialGradient(size*0.5, size*0.5, 0, size*0.5, size*0.5, size*0.5)
                    .addColorStopList([
                        {offset:0.0, color: "rgba(255,255,255,1.0)"},
                        {offset:1.0, color: "rgba(  0,  0,255,0.0)"},
                    ]).toStyle()
            )
            .fillRect(0, 0, size, size)
            .element
        );

        return this;
    },

    getBoundingRect: function() {
        this.height = this.position.y - this._hitY;
        return tm.geom.Rect(this.x - this.width/2, this.y - this.height, this.width, this.height);
    },

    genParticle: function(count, y) {
        var y = y || this._hitY;
        for (var i = 0; i < count; i++) {
            var p = origParticle.clone().setPosition(this.x, y).addChildTo(this.gameScene);
            var speed = gls2.math.randf(8, 14);
            var dir = gls2.math.randf(0, Math.PI);
            p.dx = Math.cos(dir) * speed;
            p.dy = Math.sin(dir) * speed;
            p.scaleX = p.scaleY = (gls2.math.randf(0.5, 1.5) + gls2.math.randf(0.5, 1.5)) / 2;
            p.addEventListener("enterframe", function() {
                this.x += this.dx;
                this.y += this.dy;
                this.dx *= 0.95;
                this.dy *= 0.95;
            });
        }
    },

    genAuraParticle: function(count, x, y) {
        var x = x || this.x;
        var y = y || this._hitY;
        for (var i = 0; i < count; i++) {
            var p = origParticle.clone().setPosition(x, y).addChildTo(this.gameScene);
            var speed = gls2.math.randf(12, 20);
            var dir = gls2.math.randf(0, Math.PI);
            p.dx = Math.cos(dir) * speed;
            p.dy = Math.sin(dir) * speed;
            p.scaleX = p.scaleY = (gls2.math.randf(1.0, 3.0) + gls2.math.randf(1.0, 3.0)) / 2;
            p.addEventListener("enterframe", function() {
                this.x += this.dx;
                this.y += this.dy;
                this.dx *= 0.95;
                this.dy *= 0.95;
            });
        }
    },

    update: function(app) {
        this.visible = this.player.fireLaser;

        if (this.visible) {
            this._hitY = Math.max(0, this._hitY - 40);
            this.height = this.y - this._hitY;
            if (app.frame % 3 === 0) this.frame = (this.frame + 1) % 16;
        } else {
            this._hitY = this.y - 40;
        }

        this.beforeFrameVisible = this.visible;
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

gls2.Laser.prototype.accessor("hitY", {
    "get": function()   { return this._hitY; },
    "set": function(hitY)  {
        this._hitY = hitY;
        this.head.update();
    }
});

})();
