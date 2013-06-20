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
        this.addEventListener("added", function() {
            this.age = 0;
        });

        this.hard = gls2.EnemyHard[hardName](this);
        this.soft = gls2.EnemySoft[softName](this);
        this.soft.setup(this);
        this.hard.setup(this);
        this.ground = gls2.GameScene.instance.ground;

        if (!this.hard.isGround) {
            gls2.setShadow(this);
        }

        this.addEventListener("completeattack", function() {
            this.onCompleteAttack();
        });
    },
    onLaunch: function() {
        this.soft.onLaunch();
        this.hard.onLaunch();
    },
    onCompleteAttack: function() {
        this.soft.onCompleteAttack();
        this.hard.onCompleteAttack();
    },
    update: function() {
        this.age++;
        this.soft.update();
        this.hard.update();
        if (this.hard.isGround) {
            this.x += this.ground.dx;
            this.y += this.ground.dy;
        }    
    },
    draw: function(canvas) {
        this.hard.draw(canvas);
    }
});
