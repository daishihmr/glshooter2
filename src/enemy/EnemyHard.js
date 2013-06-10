/**
 * 敵の見た目や性能
 */
var EnemyHard = tm.createClass({
    /** 地上物判定 */
    isGround: false,
    init: function() {
    },
    setup: function(enemy) {
    },
    update: function(enemy) {
    },
    draw: function(enemy, canvas) {
    }
});

COMMON_DATA.hard = {
    "heri1": tm.createClass({
        superClass: EnemyHard,
        init: function() {
            this.superInit();
            this.width = 64;
            this.height = 64;
            this.ss = COMMON_DATA.bullets;
        },
        draw: function(enemy, canvas) {
            var frame = enemy.age % 2;
            var srcRect = this.ss.getFrame(frame);
            var element = this.ss.image.element;
            canvas.drawImage(element,
                srcRect.x, srcRect.y, srcRect.width, srcRect.height,
                -this.width*this.originX, -this.height*this.originY, this.width, this.height);
        }
    })()
};
