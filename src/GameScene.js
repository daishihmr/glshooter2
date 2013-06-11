gls2.GameScene = tm.createClass({
    superClass: tm.app.Scene,
    player: null,
    ground: null,
    init: function() {
        this.superInit();
        this._createGround();
    },
    _createGround: function() {
        this.ground = tm.app.CanvasElement().addChildTo(this);
        this.ground.gx = this.ground.gy = 0;
        this.ground.direction = Math.PI * 0.5;
        this.ground.cellSize = 30;
        this.ground.speed = 1;
        this.ground.update = function() {
            this.gx = (this.gx + Math.cos(this.direction) * this.speed) % this.cellSize;
            this.gy = (this.gy + Math.sin(this.direction) * this.speed) % this.cellSize;
        };
        this.ground.draw = function(canvas) {
            canvas.lineWidth = 1;
            canvas.strokeStyle = "#000099";
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
    }
});
