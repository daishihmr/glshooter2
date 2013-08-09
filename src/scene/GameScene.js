(function() {

/**
 * @class
 * @extends {gls2.Scene}
 */
gls2.GameScene = tm.createClass(
/** @lends {gls2.GameScene.prototype} */
{
    superClass: gls2.Scene,
    /** @type {gls2.Player} */
    player: null,

    /** スコア */
    score: 0,
    /** 素点 */
    baseScore: 0,
    /** コンボ数 */
    comboCount: 0,
    /** maxコンボ数 */
    maxComboCount: 0,
    /** コンボゲージ */
    comboGauge: 0,

    stage: null,
    ground: null,
    zanki: 3,

    /** 現在の保有ボム数 */
    bomb: 0,
    /** ボムスロット数 */
    bombMax: 0,
    /** ボムスロット初期数数 */
    bombMaxInitial: 3,
    /** ボムスロット最大数 */
    bombMaxMax: 6,
    /** ボム発動中 */
    isBombActive: false,

    /** ハイパーゲージ */
    hyperGauge: 0,
    /** ハイパーランク */
    hyperRank: 0,
    /** ハイパーモード中 */
    isHyperMode: false,
    /** ハイパーモード残り時間 */
    hyperTime: 0,

    groundLayer: null,
    playerLayer: null,
    enemyLayer: null,
    effectLayer0: null,
    effectLayer1: null,
    bulletLayer: null,
    labelLayer: null,

    lastElement: null,

    scoreLabel: null,

    /** ランク(0.0～1.0) */
    rank: 0,

    init: function() {
        if (gls2.GameScene.SINGLETON !== null) throw new Error("class 'gls2.GameScene' is singleton!!");

        this.superInit();
        gls2.GameScene.SINGLETON = this;

        this.scoreLabel = gls2.ScoreLabel(this);

        var g = gls2.Ground();
        this.ground = g.gElement;
        this.ground.addChildTo(this);

        this.groundLayer = tm.app.Object2D().addChildTo(this);
        this.enemyLayer = tm.app.Object2D().addChildTo(this);
        this.effectLayer0 = tm.app.Object2D().addChildTo(this);
        this.playerLayer = tm.app.Object2D().addChildTo(this);
        this.effectLayer1 = tm.app.Object2D().addChildTo(this);
        this.bulletLayer = tm.app.Object2D().addChildTo(this);
        this.labelLayer = tm.app.Object2D().addChildTo(this);

        tm.bulletml.AttackPattern.defaultConfig.addTarget = this;

        this.lastElement = tm.app.Object2D().addChildTo(this);
        this.lastElement.update = function(app) {
            this.onexitframe(app);
        }.bind(this);

        this.addEventListener("exit", function() {
            this.scoreLabel.clear();
        });
    },

    println: function(string, intercept) {
        this.scoreLabel.consoleWindow.addLine(string, intercept);
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
        } else if (child instanceof gls2.BackfireParticle
            || child instanceof gls2.ShotBullet
            || child instanceof gls2.Laser
            || child instanceof gls2.Bomb
            || child.isEffect) {
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
        // this.record(app.keyboard);

        this.stage.update(app.frame);
        if (this.isHyperMode) {
            this.hyperTime -= 1;
            if (this.hyperTime <= 0) {
                this.endHyperMode();
            }
        }

        if (app.frame % 5 === 0) this.scoreLabel.update();

        this.comboGauge -= this.isHyperMode ? 0.01 : 0.02;
        if (this.comboGauge <= 0) {
            if (this.comboCount > 0) {
                this.baseScore = this.baseScore * (this.comboCount-6)/this.comboCount;
            }
            this.comboCount -= 6;
            if (this.comboCount < 0) {
                this.baseScore = 0;
                this.comboCount = 0;
            }
            this.comboGauge = 0;
        }

        if (app.keyboard.getKeyDown("escape")) {
            this.app.replaceScene(gls2.TitleScene());
        } else if (app.keyboard.getKeyDown("space")) {
            this.openPauseMenu(0);
        } else if (app.keyboard.getKeyDown("p")) {
            app.canvas.saveAsImage();
            this.openPauseMenu(0);
        }
    },

    onexitframe: function(app) {
        if (this.player.controllable === false) {
            gls2.Danmaku.erase();
        }


        var enemies;

        // ショットvs敵
        enemies = [].concat(gls2.Enemy.activeList);
        var shots = [].concat(gls2.ShotBullet.activeList);
        for (var j = shots.length; shots[--j] !== undefined;) {
            for (var i = enemies.length; enemies[--i] !== undefined;) {
                var e = enemies[i];
                var shot = shots[j];
                if (gls2.Collision.isHit(e, shot)) {
                    shot.genParticle(1);
                    shot.remove();
                    if (e.damage(shot.attackPower)) {
                        if (this.isHyperMode === false) this.addHyperGauge(0.01);

                        this.addCombo(1);
                        this.baseScore += e.score*(~~(this.comboCount / 200) + 1);
                        this.addScore(this.baseScore);
                        enemies.erase(e);
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
                return l.y - r.y;
            });
            for (var i = enemies.length; enemies[--i] !== undefined;) {
                var e = enemies[i];
                if (gls2.Collision.isHit(e, laser)) {
                    laser.setHitY(e.y + e.boundingHeightBottom);
                    if (e.damage(laser.attackPower)) {
                        this.addHyperGauge(0.01);

                        this.addCombo(1);
                        this.baseScore += e.score*(~~(this.comboCount / 200) + 1);
                        this.addScore(this.baseScore);
                    } else {
                        this.comboGauge = Math.max(this.comboGauge, 0.1);
                        this.addHyperGauge(0.001);
                    }
                    laser.genParticle(2);
                    break;
                }
            }
            // オーラ部分の当たり判定
            var aura = {
                x: this.player.x,
                y: this.player.y,
                boundingWidthLeft: 50,
                boundingWidthRight: 50,
                boundingHeightTop: 100,
                boundingHeightBottom: 40,
            };
            enemies = [].concat(gls2.Enemy.activeList);
            for (var i = enemies.length; enemies[--i] !== undefined;) {
                var e = enemies[i];
                if (gls2.Collision.isHit(e, aura)) {
                    if(e.damage(laser.attackPower)) {
                        this.addHyperGauge(0.02);

                        this.addCombo(1);
                        this.baseScore += e.score*(~~(this.comboCount / 200) + 1);
                        this.addScore(this.baseScore);
                    } else {
                        this.comboGauge = Math.max(this.comboGauge, 0.1);
                        this.addHyperGauge(0.002);
                    }
                    laser.genAuraParticle(2, this.player.x, this.player.y-30);
                }
            }
        }

        // ボムvs敵
        if (this.isBombActive) {
            // すべての弾を消す
            gls2.Danmaku.erase();
            var enemies = [].concat(gls2.Enemy.activeList);
            for (var i = enemies.length; enemies[--i] !== undefined;) {
                var e = enemies[i];
                if (e.isInScreen()) {
                    e.damage(gls2.Bomb.attackPower);
                }
            }
            this.comboCount = 0;
            this.comboGauge = 0;
        }

        // TODO? ショットvs敵弾
        if (this.isHyperMode) {
            var shotBullets = [].concat(gls2.ShotBullet.activeList);
            for (var s = shotBullets.length; shotBullets[--s] !== undefined;) {
                var shot = shotBullets[s];
                var bullets = [].concat(gls2.Bullet.activeList);
                for (var b = bullets.length; bullets[--b] !== undefined;) {
                    var bullet = bullets[b];
                    if (gls2.Collision.isHit(shot, bullet)) {
                        bullet.hp -= (6 - this.hyperRank);
                        if (bullet.hp < 0) {
                            bullet.destroy();
                            this.addCombo(1);
                        }
                    }
                }
            }
        }

        if (this.player.muteki === false) {

            // 敵弾vs自機
            for (var i = gls2.Bullet.activeList.length; gls2.Bullet.activeList[--i] !== undefined;) {
                var b = gls2.Bullet.activeList[i];
                if (gls2.Collision.isHit(b, this.player)) {
                    this.player.damage();
                    if (this.bomb > 0) {
                        gls2.MiniBomb(this.player, this).setPosition(this.player.x, this.player.y).addChildTo(this);
                    } else {
                        this.miss();
                    }
                    break;
                }
            }

            // 敵vs自機
            for (var i = gls2.Enemy.activeList.length; gls2.Enemy.activeList[--i] !== undefined;) {
                var e = gls2.Enemy.activeList[i];
                if (e.isGround) continue;
                if (gls2.Collision.isHit(e, this.player)) {
                    this.player.damage();
                    if (this.bomb > 0) {
                        gls2.MiniBomb(this.player, this).setPosition(this.player.x, this.player.y).addChildTo(this);
                    } else {
                        this.miss();
                    }
                    break;
                }
            }
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
            this.app.replaceScene(gls2.TitleScene());
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

    openContinueMenu: function() {
        this.openDialogMenu("CONTINUE?", [ "yes", "no" ], this.onResultContinue, 0, [
            "システムを再起動して出撃します",
            "作戦失敗。退却します",
        ], false);
    },
    onResultContinue: function(result) {
        switch (result) {
        case 0: // yes
            this.gameContinue();
            break;
        case 1: // no
            this.gameOver();
            break;
        }
    },

    draw: function(canvas) {
        if (this.stage === null) return;
        this.drawComboGauge(canvas);
        this.drawHyperGauge(canvas);
    },

    drawComboGauge: function(canvas) {
        if (this.comboGauge > 0) {
            canvas.fillStyle = "rgba(255," + ~~(this.comboGauge * 255) + "," + ~~Math.min(255, this.comboGauge * 512) + ",0.5)";
            var h = 500 * this.comboGauge;
            canvas.fillRect(SC_W-15, SC_H-5 - h, 10, h);
        }
    },

    drawHyperGauge: function(canvas) {
        if (this.hyperGauge === 1) {
            if (this.app.frame % 2 === 0) {
                canvas.fillStyle = "rgba(255,255,255,0.6)";
                canvas.fillRect(5, SC_H-12, 200, 9);
            }
        } else {
            canvas.fillStyle = "rgba(255,255,0,0.3)";
            canvas.fillRect(5, SC_H-12, 200, 9);
            if (0 < this.hyperGauge) {
                canvas.fillStyle = "rgba(255,255,100,1.0)";
                var w = 200 * this.hyperGauge;
                canvas.fillRect(5, SC_H-12, w, 9);
            }
        }
    },

    start: function(playerType) {
        // generateRandom();

        this.scoreLabel.consoleWindow.clearBuf().clear();

        this.score = 0;
        this.zanki = 3;
        this.bomb = this.bombMax = this.bombMaxInitial;
        this.hyperGauge = 0;

        if (this.player !== null) this.player.remove();
        gls2.Enemy.clearAll();
        gls2.ShotBullet.clearAll();
        gls2.Danmaku.clearAll();
        var copied = [].concat(this.effectLayer0.children);
        for (var i = 0; i < copied.length; i++) {
            copied[i].remove();
        }
        copied = [].concat(this.effectLayer1.children);
        for (var i = 0; i < copied.length; i++) {
            copied[i].remove();
        }

        this.player = gls2.Player(this, playerType);
        this.startStage(0);

        // this.startRec();
    },

    startStage: function(stageNumber) {
        this.println("3...2...1...");

        this.baseScore = 0;
        this.comboCount = 0;
        this.comboGauge = 0;
        this.maxComboCount = 0;
        this.hyperRank = 0;

        this.stage = gls2.Stage.create(this, stageNumber);
        this.tweener.clear().wait(1000).call(function() {
            this.launch();
        }.bind(this));
    },

    launch: function() {
        this.println("Let's go!");

        this.player
            .setPosition(SC_W*0.5, SC_H+100)
            .setFrameIndex(3)
            .addChildTo(this);
        this.player.controllable = false;
        this.player.muteki = true;
        this.player.tweener
            .clear()
            .moveBy(0, -180, 1000, "easeOutBack")
            .call(function() {
                this.controllable = true;
            }.bind(this.player))
            .wait(2000)
            .call(function() {
                this.muteki = false;
            }.bind(this.player));
        this.bomb = this.bombMax;
    },

    miss: function() {
        // ミスエフェクト
        gls2.Effect.explodeS(this.player.x, this.player.y, this);
        this.println("I was shot down.");

        this.player.controllable = false;
        this.player.remove();
        this.zanki -= 1;
        if (this.zanki > 0) {
            this.tweener.clear().wait(1000).call(function() {
                this.bombMax = Math.min(this.bombMax + 1, this.bombMaxMax);
                this.launch();
            }.bind(this));
        } else {
            // コンティニュー確認画面へ
            this.tweener.clear().wait(2000).call(function() {
                this.openContinueMenu();
            }.bind(this));
        }
    },

    gameContinue: function() {
        this.println("System rebooted.", true);

        this.zanki = 3;
        this.bomb = this.bombMax = this.bombMaxInitial;
        this.launch();
    },

    clearStage: function() {
        // TODO リザルト画面へ
    },

    gameOver: function() {
        // ゲームオーバー画面へ
        this.app.replaceScene(gls2.GameOverScene());
    },

    gameClear: function() {
        // TODO エンディング画面へ
    },

    addScore: function(score) {
        var before = this.score;
        this.score += score;
        for (var i = 0; i < gls2.core.extendScore.length; i++) {
            var es = gls2.core.extendScore[i];
            if (before < es && es <= this.score) {
                this.extendZanki();
            }
        }
        gls2.core.highScore = Math.max(gls2.core.highScore, this.score);
    },

    addCombo: function(v) {
        if (this.isHyperMode) v *= 7;

        this.comboCount += v;
        this.maxComboCount = Math.max(this.maxComboCount, this.comboCount);
        this.comboGauge = 1;
    },

    addHyperGauge: function(v) {
        if (0<v && this.hyperGauge === 1) return;
        if (v<0 && this.hyperGauge === 0) return;

        if (this.isHyperMode) v *= 2;

        this.hyperGauge = Math.clamp(this.hyperGauge + v, 0, 1);
        if (this.hyperGauge === 1) {
            this.println("hyper system, ready.", true);
            gls2.ChargeEffect(this.player).addChildTo(this);
        } else if (this.hyperGauge === 0) {
            this.endHyperMode();
        }
    },

    startHyperMode: function() {
        this.println("'HYPER SYSTEM' start!!", true)

        this.isHyperMode = true;
        this.hyperGauge = 0;
        this.hyperRank = Math.min(this.hyperRank + 1, 5);
        this.hyperTime = 600;

        this.player.currentShotPool = this.player.hyperShotPool;
        this.player.laser.setColor("hyper");

        gls2.Effect.genShockwaveL(this.player.x, this.player.y, this);

        // すべての弾を消す
        // gls2.Danmaku.erase();
    },

    endHyperMode: function() {
        if (this.isHyperMode === false) return;

        this.isHyperMode = false;

        gls2.ChargeEffect(this.player, true).addChildTo(this);

        // TODO
        this.player.currentShotPool = this.player.normalShotPool;
        this.player.laser.setColor("blue");
    },

    extendZanki: function() {
        // TODO エクステンドエフェクト
        this.println("Extended.");
        this.zanki += 1;
    },

    // rec: null,
    // recCount : 0,
    // kbary: null,
    // RECMODE: 1,
    // startRec: function() {
    //     if (this.RECMODE === 1) {
    //         if (localStorage.getItem("recCount") !== undefined) {
    //             this.kbary = [];
    //             var c = ~~localStorage.getItem("recCount");
    //             for (var i = 0; i < c; i++) {
    //                 localStorage.removeItem("rec" + i);
    //             }
    //             localStorage.removeItem("recCount");
    //         }
    //         this.rec = [];
    //         this.recCount = 0;
    //     } else if (this.RECMODE === 2) {
    //         if (localStorage.getItem("recCount") !== undefined) {
    //             this.kbary = [];
    //             var c = ~~localStorage.getItem("recCount");
    //             for (var i = 0; i < c; i++) {
    //                 var r = localStorage.getItem("rec"+i);
    //                 var ary = r.split(",");
    //                 for (var j = 0; j < ary.length; j++) {
    //                     this.kbary.push(ary[j]);
    //                 }
    //             }
    //         }
    //     }
    // },
    // record: function(kb) {
    //     if (this.RECMODE === 1) {
    //         if (1000 < this.rec.length) {
    //             console.log("save");
    //             localStorage.setItem("rec" + this.recCount, this.rec);
    //             localStorage.setItem("recCount", this.recCount);
    //             this.rec = [];
    //             this.recCount += 1;
    //         }
    //         this.rec.push(""
    //             + ~~kb.getKey("up")
    //             + ~~kb.getKey("down")
    //             + ~~kb.getKey("left")
    //             + ~~kb.getKey("right")
    //             + ~~kb.getKey("z")
    //             + ~~kb.getKey("x")
    //             + ~~kb.getKey("c"));
    //     } else if (this.RECMODE === 2) {
    //         if (this.kbary) {
    //             var keylog = this.kbary.shift();
    //             if (keylog !== undefined) {
    //                 kb.getKey = function(key) {
    //                     if (key === "up") return !!~~keylog[0];
    //                     else if (key === "down") return !!~~keylog[1];
    //                     else if (key === "left") return !!~~keylog[2];
    //                     else if (key === "right") return !!~~keylog[3];
    //                     else if (key === "z") return !!~~keylog[4];
    //                     else if (key === "x") return !!~~keylog[5];
    //                     else if (key === "c") return !!~~keylog[6];
    //                     else false;
    //                 };
    //                 kb.getKeyDown = function(key) {
    //                     if (key === "up") return !!~~keylog[0];
    //                     else if (key === "down") return !!~~keylog[1];
    //                     else if (key === "left") return !!~~keylog[2];
    //                     else if (key === "right") return !!~~keylog[3];
    //                     else if (key === "z") return !!~~keylog[4];
    //                     else if (key === "x") return !!~~keylog[5];
    //                     else if (key === "c") return !!~~keylog[6];
    //                     else false;
    //                 };
    //             }
    //         }
    //     }
    // },

});

gls2.GameScene.SINGLETON = null;

})();
