gls2.Laser = tm.createClass({
    superClass: tm.app.CanvasElement,
    player: null,
    image: null,
    c: null,
    age: 0,
    hitY: 0,
    rootTexture: null,
    attackPower: 10,

    head: null,

    init: function(player, texture, roots) {
        this.player = player;
        var tex = tm.asset.AssetManager.get(texture);
        this.rootTexture = roots.map(function(name) {
            return tm.asset.AssetManager.get(name);
        });
        this.rootTexture.index = 0;
        this.rootTexture.next = function() {
            this.index = (this.index + 1) % this.length;
            return this[this.index];
        };

        this.superInit();
        this.image = tex.element;
        this.width = tex.width;
        this.height = 480;
        this.blendMode = "lighter";
        this.origin.y = 1;

        this.c = tm.graphics.Canvas();
        this.c.resize(this.width, this.height+100);
        this.c.globalCompositeOperation = "lighter";

        this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({
            image: "laserHead",
            frame: {
                width: 80,
                height: 80,
            },
            animations: {
                "default": {
                    frames: [ 0, 1, 2, 3 ],
                    next: "default"
                },
            },
        }), 80, 80);
        this.head.gotoAndPlay();
        this.head.blendMode = "lighter";
    },

    update: function(app) {
        this.x = this.player.x;
        this.y = this.player.y - 30;
        this.age += 1;
        this.hitY -= 50;
        if (this.hitY < -80) this.hitY = -80;

        if (!this.visible) {
            return;
        }

        var copied = [].concat(gls2.Enemy.activeList);
        for (var i = 0, len = copied.length; i < len; i++) {
            var e = copied[i];
            if (e.x < e.radius || SC_W-e.radius < e.x || e.y < e.radius || SC_H-e.radius < e.y) continue;
            if (this.hitY-30 < e.y && e.y < this.y && this.x-32 < e.x && e.x < this.x+32) {
                if (!e.damage(this.attackPower)) {
                    this.hitY = e.y;
                }
            }
        }

        this.head._updateFrame();
    },

    draw: function(canvas) {
        var y = (this.age*15) % 240;
        this.c.clear();
        for (var i = 0; i < 4; i++) {
            this.c.drawImage(this.image, 0, -y + 240*i);
        }

        this.height = Math.max(this.y - this.hitY, 1);
        canvas.context.drawImage(this.c.element,
            0, this.c.height-this.height, this.c.width, this.height,
            -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height);
        canvas.context.drawImage(this.rootTexture.next().element, -64, -32);

        var srcRect = this.head.ss.getFrame(this.head.currentFrame);
        var element = this.head.ss.image.element;
        canvas.drawImage(element,
            srcRect.x, srcRect.y, srcRect.width, srcRect.height,
            -this.width*this.origin.x-43, -this.height*this.origin.y-75, 150, 150);
    },
});
