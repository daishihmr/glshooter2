(function() {

var SINGLETON = null;

gls2.GameScene = tm.createClass({
    superClass: gls2.Scene,
    player: null,
    score: 0,
    stage: null,
    ground: null,
    zanki: 3,
    bomb: 0,
    bombMax: 3,
    groundLayer: null,
    playerLayer: null,
    enemyLayer: null,
    effectLayer0: null,
    effectLayer1: null,
    bulletLayer: null,
    labelLayer: null,

    consoleWindow: null,

    /** ランク(0.0～1.0) */
    rank: 0,

    init: function() {
        if (SINGLETON !== null) throw new Error("class 'gls2.GameScene' is singleton!!");

        this.superInit();
        SINGLETON = this;

        this._createGround();

        this.groundLayer = tm.app.Object2D().addChildTo(this);
        this.enemyLayer = tm.app.Object2D().addChildTo(this);
        this.effectLayer0 = tm.app.Object2D().addChildTo(this);
        this.playerLayer = tm.app.Object2D().addChildTo(this);
        this.effectLayer1 = tm.app.Object2D().addChildTo(this);
        this.bulletLayer = tm.app.Object2D().addChildTo(this);
        this.labelLayer = tm.app.Object2D().addChildTo(this);

        this.consoleWindow = gls2.ConsoleWindow(200)
            .setPosition(SC_W - 100 - 5, 32 + 5)
            .addChildTo(this.labelLayer);

        tm.bulletml.AttackPattern.defaultConfig.addTarget = this;
    },

    println: function(string) {
        this.consoleWindow.addLine(string);
    },

    _createGround: function() {
        var g = this.ground = tm.app.CanvasElement().addChildTo(this);
        g.gx = g.gy = 0;
        g.direction = Math.PI * 0.5;
        g.speed = 1;
        g.dx = 0;
        g.dy = 0;

        var c = 8 * 2;
        var l = 8*Math.sqrt(3);

        g.update = function() {
            this.dx = Math.cos(this.direction) * this.speed;
            this.dy = Math.sin(this.direction) * this.speed;

            this.gx += this.dx;
            while (c*3 < this.gx) this.gx -= c*3;
            while (this.gx < -c*3) this.gx += c*3;

            this.gy += this.dy;
            while (l*2 < this.gy) this.gy -= l*2;
            while (this.gy < -l*2) this.gy += l*2;
        };
        g.blendMode = "lighter";
        g.draw = function(canvas) {
            canvas.lineWidth = 0.2;
            canvas.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, SC_H)
                .addColorStopList([
                    { offset: 0.0, color: "rgba(255,255,255,0.5)" },
                    { offset: 1.0, color: "rgba(255,255,255,0.1)" },
                ])
                .toStyle();
            canvas.beginPath();
            var yy = 0;
            for (var x = this.gx-c*3; x < SC_W+c*3; x += c*1.5) {
                yy = (yy === 0) ? l : 0;
                for (var y = this.gy-l*2 + yy; y < SC_H+l*2; y += l*2) {
                    canvas.line(x, y, x + c, y);
                    canvas.line(x, y, x - c/2, y + l);
                    canvas.line(x, y, x - c/2, y - l);
                }
            }
            canvas.stroke();
        };
    },

    addChild: function(child) {
        if (child instanceof gls2.Player) {
            this.playerLayer.addChild(child);
        } else if (child instanceof gls2.Enemy) {
            if (child.isGround) {
                this.groundLayer.addChild(child);
            } else {
                this.enemyLayer.addChild(child);
            }
        } else if (child instanceof gls2.BackfireParticle || child instanceof gls2.ShotBullet || child instanceof gls2.Laser || child.isEffect) {
            this.effectLayer0.addChild(child);
        } else if (child instanceof gls2.Particle) {
            this.effectLayer1.addChild(child);
        } else if (child instanceof gls2.Bullet) {
            this.bulletLayer.addChild(child);
        } else {
            this.superClass.prototype.addChild.apply(this, arguments);
        }
    },

    update: function(app) {
        this.stage.update(app.frame);

        var enemies;

        // ショットvs敵
        enemies = [].concat(gls2.Enemy.activeList);
        var shots = [].concat(gls2.ShotBullet.activeList);
        for (var j = 0, jlen = shots.length; j < jlen; j++) {
            for (var i = 0, ilen = enemies.length; i < ilen; i++) {
                var e = enemies[i];
                var s = shots[j];
                if (e.isHitWithShot(s)) {
                    s.remove();
                    s.genParticle(1);
                    if (e.damage(s.attackPower)) {
                        break;
                    }
                }
            }
        }

        // レーザーvs敵
        var laser = this.player.laser;
        if (this.player.laser.visible) {
            // レーザー部分の当たり判定
            enemies = [].concat(gls2.Enemy.activeList);
            enemies.sort(function(l, r) {
                return r.y - l.y;
            });
            for (var i = 0, len = enemies.length; i < len; i++) {
                var e = enemies[i];
                if (e.isHitWithLaser(laser)) {
                    e.damage(laser.attackPower);
                    laser.genParticle(2);
                    break;
                }
            }
            // オーラ部分の当たり判定
            var aura = {
                x: this.player.x,
                y: this.player.y,
                radius: 60,
            };
            enemies = [].concat(gls2.Enemy.activeList);
            for (var i = 0, len = enemies.length; i < len; i++) {
                var e = enemies[i];
                if (e.isHitWithShot(aura)) {
                    e.damage(laser.attackPower);
                    laser.genAuraParticle(2, e.y);
                }
            }
        }

        // ボムvs敵
        if (gls2.Bomb.activeList.length > 0) {
            var enemies = [].concat(gls2.Enemy.activeList);
            for (var i = 0, ilen = enemies.length; i < ilen; i++) {
                var e = enemies[i];
                if (e.isInScreen()) {
                    e.damage(gls2.Bomb.attackPower);
                }
            }
        }

        // TODO? ショットvs敵弾

        // TODO 敵弾vs自機

        // TODO 敵vs自機

        if (app.keyboard.getKeyDown("escape")) {
            this.app.popScene();
        } else if (app.keyboard.getKeyDown("space")) {
            this.openPauseMenu(0);
        } else if (app.keyboard.getKeyDown("p")) {
            app.canvas.saveAsImage();
            this.openPauseMenu(0);
        }
    },

    openPauseMenu: function(defaultValue) {
        this.openDialogMenu("PAUSE", [ "resume", "setting", "exit game" ], this.onResultPause, defaultValue, [
            "ゲームを再開します",
            "設定を変更します",
            "ゲームを中断し、タイトル画面に戻ります",
        ], false);
    },
    onResultPause: function(result) {
        switch (result) {
        case 0: // resume
            break;
        case 1: // setting
            this.openSetting();
            break;
        case 2: // exit title
            this.openConfirmExitGame();
            break;
        }
    },

    openSetting: function() {
        this.openDialogMenu("SETTING", [ "bgm volume", "sound volume" ], this.onResultSetting, this.lastSetting, [
            "BGMボリュームを設定します",
            "効果音ボリュームを設定します",
        ]);
    },
    onResultSetting: function(result) {
        if (result !== 3) this.lastSetting = result;
        switch (result) {
        case 0:
            this.openBgmSetting();
            break;
        case 1:
            this.openSeSetting();
            break;
        default:
            this.openPauseMenu();
            break;
        }
    },

    openConfirmExitGame: function() {
        this.openDialogMenu("REARY?", [ "yes", "no" ], this.onResultConfirmExitGame, 1, [
            "ゲームを中断し、タイトル画面に戻ります",
            "前の画面へ戻ります",
        ], false);
    },
    onResultConfirmExitGame: function(result) {
        if (result === 0) {
            this.app.popScene();
        } else {
            this.openPauseMenu(1);
        }
    },

    openBgmSetting: function() {
        this.openDialogMenu("BGM VOLUME", [ "0", "1", "2", "3", "4", "5" ], this.onResultBgmSetting, gls2.core.bgmVolume);
    },
    onResultBgmSetting: function(result) {
        if (result !== 6) gls2.core.bgmVolume = result;
        this.openSetting(1);
    },

    openSeSetting: function() {
        this.openDialogMenu("SE VOLUME", [ "0", "1", "2", "3", "4", "5" ], this.onResultSeSetting, gls2.core.seVolume);
    },
    onResultSeSetting: function(result) {
        if (result !== 6) {
            gls2.core.seVolume = result;
        }
        this.openSetting(1);
    },

    draw: function(canvas) {
        if (this.stage === null) return;
        canvas.clearColor(this.stage.background, 0, 0);
    },

    gameStart: function(playerType) {
        this.consoleWindow.clearBuf().clear();

        if (this.player !== null) this.player.remove();
        gls2.Enemy.clearAll();
        gls2.ShotBullet.clearAll();
        gls2.Danmaku.clearAll();

        this.player = gls2.Player(this, playerType);
        this.startStage(0);
    },

    startStage: function(stageNumber) {
        this.stage = gls2.Stage.create(this, stageNumber);
        this.launch();
    },

    launch: function() {
        this.player
            .setPosition(SC_W*0.5, SC_H+32)
            .setFrameIndex(3)
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
        this.bomb = this.bombMax;
    },

    miss: function() {
        // TODO ミスエフェクト
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

    addScore: function(score) {
        var before = score;
        this.score += score;
        for (var i = 0; i < gls2.core.extendScore.length; i++) {
            var es = gls2.core.extendScore[i];
            if (before < es && es <= this.score) {
                this.extendZanki();
            }
        }
        gls2.core.highScore = Math.max(gls2.core.highScore, this.score);
    },

    extendZanki: function() {
        // TODO エクステンドエフェクト
        this.zanki += 1;
    },

});

})();
