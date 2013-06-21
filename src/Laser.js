gls2.Laser = tm.createClass({
    superClass: tm.app.CanvasElement,
    player: null,
    image: null,
    c: null,
    age: 0,
    hitY: 0,
    rootTexture: null,
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
    },
    update: function(app) {
        this.x = this.player.x;
        this.y = this.player.y - 40;
        this.age += 1;
        this.hitY -= 50;
        if (this.hitY < -20) this.hitY = -20;
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
    },
});
