(function() {

var SINGLETON = null;

gls2.GameScene = tm.createClass({
    superClass: gls2.Scene,
    player: null,
    score: 0,
    stage: null,
    ground: null,
    zanki: 3,
    groundLayer: tm.app.CanvasElement(),
    playerLayer: tm.app.CanvasElement(),
    enemyLayer: tm.app.CanvasElement(),
    effectLayer0: tm.app.CanvasElement(),
    effectLayer1: tm.app.CanvasElement(),
    bulletLayer: tm.app.CanvasElement(),

    background: this.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
        { offset:0, color:"#030" },
        { offset:1, color:"#010" }
    ]).toStyle(),

    init: function() {
        if (SINGLETON !== null) throw new Error("class 'gls2.GameScene' is singleton!!");

        this.superInit();
        SINGLETON = this;

        this._createGround();

        this.groundLayer.addChildTo(this);
        this.effectLayer0.addChildTo(this);
        this.playerLayer.addChildTo(this);
        this.enemyLayer.addChildTo(this);
        this.effectLayer1.addChildTo(this);
        this.bulletLayer.addChildTo(this);
    },

    _createGround: function() {
        var g = this.ground = tm.app.CanvasElement().addChildTo(this);
        g.gx = g.gy = 0;
        g.direction = Math.PI * 0.5;
        g.cellSize = 20;
        g.speed = 1;
        g.dx = 0;
        g.dy = 0;
        g.update = function() {
            this.dx = Math.cos(this.direction) * this.speed;
            this.dy = Math.sin(this.direction) * this.speed;
            this.gx = (this.gx + this.dx) % this.cellSize;
            this.gy = (this.gy + this.dy) % this.cellSize;
        };
        g.blendMode = "lighter";
        g.draw = function(canvas) {
            canvas.lineWidth = 0.2;
            canvas.strokeStyle = "#999";
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

    addChild: function(child) {
        if (child instanceof gls2.Player) {
            this.playerLayer.addChild(child);
        } else if (child instanceof gls2.Enemy) {
            if (child.hard.isGround) {
                this.groundLayer.addChild(child);
            } else {
                this.enemyLayer.addChild(child);
            }
        } else if (child instanceof gls2.BackfireParticle || child instanceof gls2.ShotBullet) {
            this.effectLayer0.addChild(child);
        } else if (child instanceof gls2.Particle) {
            this.effectLayer1.addChild(child);
        // } else if (child instanceof gls2.Bullet) {
        //     this.bulletLayer.addChild(child);
        } else {
            this.superClass.prototype.addChild.apply(this, arguments);
        }
    },

    update: function(app) {
        this.stage.update(app.frame);

        if (app.keyboard.getKeyDown("space")) {
            this.finish(0);
        }
    },

    draw: function(canvas) {
        canvas.clearColor(this.background, 0, 0);
    },

    gameStart: function(playerType) {
        if (this.player !== null) this.player.remove();
        gls2.Enemy.clearAll();
        gls2.ShotBullet.clearAll();
        gls2.Danmaku.clearAll();

        this.player = gls2.Player(this);
        this.startStage(0);
    },

    startStage: function(stageNumber) {
        this.stage = gls2.Stage.create(this, stageNumber);
        this.launch();
    },

    launch: function() {
        this.player
            .setPosition(SC_W*0.5, SC_H+32)
            .setFrameIndex(3 + this.roll)
            .addChildTo(this);
        this.player.controllable = false;
        this.player.muteki = true;
        this.player.tweener
            .clear()
            .wait(30)
            .moveBy(0, -120)
            .wait(120)
            .call(function() {
                this.controllable = true;
            }.bind(this.player))
            .wait(120)
            .call(function() {
                this.muteki = false;
            }.bind(this.player));
    },

    miss: function() {
        this.player.remove();
        this.zanki -= 1;
        if (this.zanki > 0) {
            this.launch();
        } else {
            // TODO コンティニュー確認画面へ
        }
    },

    gameContinue: function() {
        this.launch();
    },

    clearStage: function() {
        // TODO リザルト画面へ
    },

    gameOver: function() {
        // TODO ゲームオーバー画面へ
    },

    gameClear: function() {
        // TODO エンディング画面へ
    },

});

})();
