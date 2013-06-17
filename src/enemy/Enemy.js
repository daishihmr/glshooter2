/**
 * 敵
 */
gls2.Enemy = tm.createClass({
    superClass: tm.app.CanvasElement,
    age: 0,
    direction: 0,
    speed: 0,
    hard: null,
    soft: null,
    ground: null,
    init: function(hardName, softName) {
        this.superInit();
        this.hard = gls2.EnemyHard[hardName];
        this.soft = gls2.EnemySoft[softName];
        this.soft.setup(this);
        this.hard.setup(this);
        this.ground = gls2.GameScene.instance.ground;

        if (!this.hard.isGround) {
            gls2.setShadow(this);
        }
    },
    update: function() {
        this.age++;
        this.soft.update(this);
        this.hard.update(this);
        if (this.hard.isGround) {
            this.x += this.ground.dx;
            this.y += this.ground.dy;
        }    
    },
    draw: function(canvas) {
        this.hard.draw(this, canvas);
    }
});
