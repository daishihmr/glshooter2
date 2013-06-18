gls2.GameScene = tm.createClass({
    superClass: tm.app.Scene,
    player: null,
    stage: null,
    ground: null,
    groundLayer: tm.app.CanvasElement(),
    playerLayer: tm.app.CanvasElement(),
    enemyLayer: tm.app.CanvasElement(),
    effectLayer: tm.app.CanvasElement(),
    bulletLayer: tm.app.CanvasElement(),
    background: tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([
        { offset:0, color:"#060" },
        { offset:1, color:"#030" }
    ]).toStyle(),

    /**
     * @param {number} playerType 自機タイプ
     */
    init: function(playerType) {
        this.superInit();
        gls2.GameScene.instance = this;

        this._setupCommonData();
        this._createGround();

        this.groundLayer.addChildTo(this);
        this.playerLayer.addChildTo(this);
        this.enemyLayer.addChildTo(this);
        this.effectLayer.addChildTo(this);
        this.bulletLayer.addChildTo(this);

        this.gameStart(playerType);
    },

    _setupCommonData: function() {
        gls2.EnemyHard.setup();
        gls2.EnemySoft.setup();
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
        } else if (child instanceof gls2.Particle || child instanceof gls2.ShotBullet) {
            this.effectLayer.addChild(child);
        // } else if (child instanceof gls2.Bullet) {
        //     this.bulletLayer.addChild(child);
        } else {
            this.superClass.prototype.addChild.apply(this, arguments);
        }
    },

    update: function(app) {
        // this.stage.update();
    },

    draw: function(canvas) {
        canvas.fillStyle = this.background;
        canvas.fillRect(0, 0, canvas.width, canvas.height);
    },

    gameStart: function(playerType) {
        this.player = gls2.Player();

        // TODO あとで消す
        gls2.Enemy("heri1", "heri1").setPosition(100, 100).addChildTo(this);
        gls2.Enemy("heri2", "heri1").setPosition(450, 200).addChildTo(this);
        this.addEventListener("enterframe", function() {
            if (gls2.core.frame % 200 === 0) {
                this.ground.direction += Math.PI/4;
            }
        });
        this.ground.direction = Math.PI * 0.5;
        this.ground.speed = 1;

        this.startStage(0);
    },

    startStage: function(stageNumber) {
        this.stage = gls2.StageManager.create(stageNumber);
        this.launch();
    },

    launch: function() {
        this.player.setFrameIndex(3 + this.roll);
        this.player.addChildTo(this);
        this.player.controllable = false;
        this.player.muteki = true;
        this.player.tweener.clear();
        this.player.tweener.set({
            x: SC_W * 0.5,
            y: SC_H + 32
        })
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

    },

    gameContinue: function() {

    },

    clearStage: function() {

    },

    gameOver: function() {

    },

    gameClear: function() {

    },

});

gls2.GameScene.instance = null;
