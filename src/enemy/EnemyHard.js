/**
 * 敵の見た目や性能
 */
gls2.EnemyHard = tm.createClass({
    enemy: null,
    /** 地上物判定 */
    isGround: false,
    _sprite: null,
    init: function(enemy) {
        this.enemy = enemy;
    },
    setup: function() {
    },
    onLaunch: function() {
    },
    onCompleteAttack: function() {
    },
    update: function() {
    },
    draw: function(canvas) {
    }
});

gls2.EnemyHard.setup = function() {
    var _Sprite = tm.createClass({
        superClass: tm.app.Sprite,
        init: function(texture, width, height) {
            this.superInit(texture, width, height);
        },
        draw: function(canvas) {
            var srcRect = this.srcRect;
            var element = this._image.element;
            
            canvas.context.drawImage(element,
                srcRect.x, srcRect.y, srcRect.width, srcRect.height,
                -this.width*this.origin.x, -this.height*this.origin.y, this.width, this.height);
        }
    });

    this["heri1"] = tm.createClass({
        superClass: gls2.EnemyHard,
        init: function(enemy) {
            this.superInit(enemy);
            this._sprite = _Sprite("tex1", 64, 64);
        },
        update: function() {
            if (this.enemy.x < gls2.Player.instance.x) {
                this.enemy.scaleX = -1;
            } else {
                this.enemy.scaleX = 1;
            }
        },
        draw: function(canvas) {
            if (this.enemy.age % 4 < 2) {
                this._sprite.srcRect.set(448, 0, 64, 64);
            } else {
                this._sprite.srcRect.set(0, 64, 64, 64);
            }
            this._sprite.draw(canvas);
        }
    });

    this["heri2"] = tm.createClass({
        superClass: gls2.EnemyHard,
        init: function(enemy) {
            this.superInit(enemy);
            this._sprite = _Sprite("tex1", 64, 64);
            this.isGround = true;
        },
        update: function() {
            if (this.enemy.x < gls2.Player.instance.x) {
                this.enemy.scaleX = -1;
            } else {
                this.enemy.scaleX = 1;
            }
        },
        draw: function(canvas) {
            if (this.enemy.age % 4 < 2) {
                this._sprite.srcRect.set(64, 64, 64, 64);
            } else {
                this._sprite.srcRect.set(128, 64, 64, 64);
            }
            this._sprite.draw(canvas);
        }
    });

};
