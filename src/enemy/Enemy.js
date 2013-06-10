/**
 * 敵
 */
var Enemy = tm.createClass({
    superClass: tm.app.Element,
    age: 0,
    x: 0,
    y: 0,
    direction: 0,
    speed: 0,
    hard: null,
    soft: null,
    ground: null,
    init: function(hardName, softName) {
        this.superInit();
        this.hard = COMMON_DATA.hard[hardName];
        this.soft = COMMON_DATA.soft[softName];
        this.soft.setup(this);
        this.hard.setup(this);
    },
    update: function() {
        this.soft.update(this);
        this.hard.update(this);
        if (hard.isGround) {
            this.x += Math.cos(this.ground.direction) * this.ground.speed;
            this.y += Math.sin(this.ground.direction) * this.ground.speed;
        }    
    },
    draw: function(canvas) {
        this.hard.draw(this, canvas);
    }
});
