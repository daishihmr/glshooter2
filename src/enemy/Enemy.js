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
        this.addEventListener("added", function() {
            this.age = 0;
            this.ground = this.parent.ground;
        });
    },
    update: function() {
        this.age++;
        this.soft.update(this);
        this.hard.update(this);
        if (this.hard.isGround) {
            this.x += Math.cos(this.ground.direction) * this.ground.speed;
            this.y += Math.sin(this.ground.direction) * this.ground.speed;
        }    
    },
    draw: function(canvas) {
        this.hard.draw(this, canvas);
    }
});
