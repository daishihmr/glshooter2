gls2.GameScene = tm.createClass({
    superClass: tm.app.Scene,
    player: null,
    ground: null,
    background: tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
        {offset:0, color:"#000088"},
        {offset:1, color:"#000022"}
    ]).toStyle(),
    init: function() {
        this.superInit();
        gls2.GameScene.instance = this;

        this._createGround();
    },
    _createGround: function() {
        this.ground = tm.app.CanvasElement().addChildTo(this);
        this.ground.gx = this.ground.gy = 0;
        this.ground.direction = Math.PI * 0.5;
        this.ground.cellSize = 20;
        this.ground.speed = 1;
        this.ground.dx = 0;
        this.ground.dy = 0;
        this.ground.update = function() {
            this.dx = Math.cos(this.direction) * this.speed;
            this.dy = Math.sin(this.direction) * this.speed;
            this.gx = (this.gx + this.dx) % this.cellSize;
            this.gy = (this.gy + this.dy) % this.cellSize;
        };
        this.ground.blendMode = "lighter";
        this.ground.draw = function(canvas) {
            canvas.lineWidth = 0.2;
            canvas.strokeStyle = "#aaaaaa";
            canvas.beginPath();
            for (var x = this.gx; x < SC_W; x += this.cellSize) {
                canvas.line(x, 0, x, SC_H);
            }
            for (var y = this.gy; y < SC_H; y += this.cellSize) {
                canvas.line(0, y, SC_W, y);
            }
            canvas.closePath();
            canvas.stroke();
        };
    },
    update: function() {
    },
    draw: function(canvas) {
        canvas.fillStyle = this.background;
        canvas.fillRect(0, 0, canvas.width, canvas.height);
    }
});

gls2.GameScene.instance = null;
