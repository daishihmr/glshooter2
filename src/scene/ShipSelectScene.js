/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

/** @class */
gls2.ShipSelectScene = tm.createClass(
/** @lends {gls2.ShipSelectScene.prototype} */
{
    superClass: gls2.Scene,

    /**
     * 0:機体選択
     * 1:スタイル選択
     */
    mode: 0,

    types: null,
    styles: null,

    typeA: null,
    typeB: null,
    typeC: null,

    labelType: null,
    labelStyle: null,

    type: 0,
    // style: 0,
    style: 2,
    autoBomb: false,

    moving: false,

    /** @constructs */
    init: function() {
        this.superInit();

        // 背景
        tm.display.Sprite("result_bg", SC_W*1.1, SC_H*1.1)
            .setPosition(SC_W/2, SC_H/2)
            .addChildTo(this);

        tm.display.Label("PLAYER SELECT", 40)
            .setPosition(SC_W*0.5,SC_H*0.1)
            .addChildTo(this);

        this.types = this.setupTypes();
        this.styles = this.setupStyles();

        var left = tm.display.TriangleShape(20, 20, {
            fillStyle: "rgba(255,255,255,0.7)",
            strokeStyle: "transparent"
        }).setPosition(SC_W*0.1, SC_H*0.5).setRotation(-90);
        left.update = function(app) {
            this.setScale(app.getKey("left") ? 2 : 1);
            this.alpha = 1 + Math.sin(app*0.1)*0.5;
        };
        left.addChildTo(this);
        var right = tm.display.TriangleShape(20, 20, {
            fillStyle: "rgba(255,255,255,0.7)",
            strokeStyle: "transparent"
        }).setPosition(SC_W*0.9, SC_H*0.5).setRotation(90);
        right.update = function(app) {
            this.setScale(app.getKey("right") ? 2 : 1);
            this.alpha = 1 + Math.sin(app*0.1)*0.5;
        };
        right.addChildTo(this);

        this.mode = 0;
        this.styles.visible = false;

        this.moveCursor(-1, true);
        this.typeA.update();
        this.typeB.update();
        this.typeC.update();

        gls2.playSound("voSelectShip");
        gls2.playBgm("bgmShipSelect", true);
    },

    setupTypes: function() {
        var types = tm.display.CanvasElement();
        types.addChildTo(this);

        this.labelType = tm.display.Label("Type-A").setPosition(SC_W*0.5, 150);
        this.labelType.addChildTo(types);

        var typeDescription = [
            "一点集中型\nスピード：最速\n\n絶大な威力を誇る\n正面火力と\nスピードで\n敵を蹂躙する",
            "可変型\nスピード：中\n\n正面と両サイドに\n撃ち分けできる\n可変型ビットを持つ\nテクニカルな機体",
            "広範囲型\nスピード：遅\n\n広範囲に攻撃可能な\nワイドショットを\n持つ機体\n高い掃討能力",
        ];

        this.labelTypeDescription = tm.display.Label(typeDescription[0], 16).setPosition(SC_W*0.5, 500);
        this.labelTypeDescription.update = function() {
            this.labelTypeDescription.text = typeDescription[this.type];
        }.bind(this);
        this.labelTypeDescription.addChildTo(types);

        var typeBSpriteSheet = tm.asset.SpriteSheet({
            image: "fighter",
            frame: {
                width: 64,
                height: 64,
            },
            animations: {
                "typeB": {
                    frames: [10, 17, 24],
                    next: "typeB",
                    frequency: 2
                },
            },
        });

        this.typeA = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
        this.typeB = tm.display.AnimationSprite(typeBSpriteSheet, 64, 64).gotoAndPlay("typeB");
        this.typeC = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);

        this.typeA.pos = 0;
        this.typeB.pos = 1;
        this.typeC.pos = 2;

        this.typeA.setScale(3).setPosition(0, SC_H*0.5).addChildTo(types);
        this.typeB.setPosition(0, SC_H*0.5).addChildTo(types);
        this.typeC.setPosition(0, SC_H*0.5).addChildTo(types);
        this.typeA.update = function() {
            this.x = SC_W*0.5 + Math.sin(this.pos/3 * Math.PI*2) * 90;
        };
        this.typeB.update = function() {
            this.x = SC_W*0.5 + Math.sin(this.pos/3 * Math.PI*2) * 90;
        };
        this.typeC.update = function() {
            this.x = SC_W*0.5 + Math.sin(this.pos/3 * Math.PI*2) * 90;
        };

        return types;
    },

    setupStyles: function() {
        var styles = tm.display.CanvasElement();
        styles.addChildTo(this);

        this.labelStyle = tm.display.Label("Shot Style").setPosition(SC_W*0.5, 150);
        this.labelStyle.addChildTo(styles);

        this.styleBase = tm.display.TriangleShape(40, 40, {
            fillStyle: "hsla(180, 80%, 80%, 0.5)",
            strokeStyle: "transparent"
        }).setPosition(SC_W*0.5, SC_H*0.6).addChildTo(styles);

        this.bitPivot = tm.app.Object2D();
        this.bitPivot.addChildTo(this.styleBase);
        this.bitPivot.update = function(app) {
            if (this.type === 1) {
                this.bitPivot.rotation = Math.sin(app.frame * 0.1) * 45;
            } else {
                this.bitPivot.rotation = 0;
            }
        }.bind(this);

        this.styleBits = [];

        this.styleBits[0] = tm.display.TriangleShape(20, 20, {
            fillStyle: "hsla(180, 80%, 80%, 0.5)",
            strokeStyle: "transparent"
        });
        this.styleBits[0].update = function() {
            if (this.type === 0) {
                this.styleBits[0].setPosition(-30, 20).setRotation(0);
            } else if (this.type === 1) {
                this.styleBits[0].setPosition(-30, 20).setRotation(-5);
            } else if (this.type === 2) {
                this.styleBits[0].setPosition(-30, 10).setRotation(-10);
            }
        }.bind(this);

        this.styleBits[1] = tm.display.TriangleShape(20, 20, {
            fillStyle: "hsla(180, 80%, 80%, 0.5)",
            strokeStyle: "transparent"
        });
        this.styleBits[1].update = function() {
            if (this.type === 0) {
                this.styleBits[1].setPosition(+30, 20).setRotation(0);
            } else if (this.type === 1) {
                this.styleBits[1].setPosition(+30, 20).setRotation(+5);
            } else if (this.type === 2) {
                this.styleBits[1].setPosition(+30, 10).setRotation(+10);
            }
        }.bind(this);

        this.styleBits[2] = tm.display.TriangleShape(20, 20, {
            fillStyle: "hsla(180, 80%, 80%, 0.5)",
            strokeStyle: "transparent"
        });
        this.styleBits[2].update = function() {
            if (this.type === 0) {
                this.styleBits[2].setPosition(-50, 10).setRotation(0);
            } else if (this.type === 1) {
                this.styleBits[2].setPosition(-50, 10).setRotation(-10);
            } else if (this.type === 2) {
                this.styleBits[2].setPosition(-50, 20).setRotation(-20);
            }
        }.bind(this);

        this.styleBits[3] = tm.display.TriangleShape(20, 20, {
            fillStyle: "hsla(180, 80%, 80%, 0.5)",
            strokeStyle: "transparent"
        });
        this.styleBits[3].update = function() {
            if (this.type === 0) {
                this.styleBits[3].setPosition(+50, 10).setRotation(0);
            } else if (this.type === 1) {
                this.styleBits[3].setPosition(+50, 10).setRotation(+10);
            } else if (this.type === 2) {
                this.styleBits[3].setPosition(+50, 20).setRotation(+20);
            }
        }.bind(this);

        this.styleBase.line = ShotLine(0, 0, 0, 130, 8);
        this.styleBase.line.addChildTo(this.styleBase);
        this.styleBits.each(function(b) {
            b.line = ShotLine(0, 0, 0, 130, 5);
            b.line.addChildTo(b);
            b.addChildTo(this.bitPivot);
        }.bind(this));

        var styleDescription = [
            "ショット強化型\n\nビットを４つ装備した\nショット重視のスタイル",
            "レーザー強化型\n\nレーザーの威力に優れ\n対大型機戦で\n有利なスタイル",
            "エキスパート強化型\n\nショットとレーザーの\n両方が強化されたスタイル\n\n<<ゲーム難易度が上昇します！>>\n<<上級者向け>>",
            "ビギナー養成型\n\nショットとレーザーの両方を\n同時に発射できるスタイル\n\n<<スコアが1/10になります！>>\n<<初心者向け>>"
        ];

        this.labelStyleDescription = tm.display.Label(styleDescription[0], 16).setPosition(SC_W*0.5, 500);
        this.labelStyleDescription.update = function() {
            this.labelStyleDescription.text = styleDescription[this.style];
        }.bind(this);
        this.labelStyleDescription.addChildTo(styles);

        return styles;
    },

    update: function(app) {
        if (this.mode === 0) {
            this.types.alpha = 1.0;
            this.styles.visible = false;

            if (!this.moving && app.getKeyDown("left")) {
                this.moveCursor(-1, false);
                gls2.playSound("select");
            } else if (!this.moving && app.getKeyDown("right")) {
                this.moveCursor(1, false);
                gls2.playSound("select");
            } else if (app.getKeyDown("z") || app.getKeyDown("c") || app.getKeyDown("space")) {
                this.mode = 1;
                gls2.playSound("decision");
            }

        } else if (this.mode === 1) {
            this.types.alpha = 0.1;
            this.styles.visible = true;

            if (app.getKeyDown("left")) {
                this.style = (this.style - 1 + 4) % 4;
                gls2.playSound("select");
            } else if (app.getKeyDown("right")) {
                this.style = (this.style + 1 + 4) % 4;
                gls2.playSound("select");
            } else if (app.getKeyDown("z") || app.getKeyDown("c") || app.getKeyDown("space")) {
                if (AUTO_BOMB_SELECT) {
                    this.openAutoBombDialog();
                } else {
                    this.autoBomb = true;
                    this.openConfirmDialog();
                }
                gls2.playSound("decision");
            } else if (app.getKeyDown("x")) {
                this.mode = 0;
            }
            this.updateStyle(~~(app.frame/60) % 2 === 0);
        }
    },

    openAutoBombDialog: function() {
        this.openDialogMenu("AUTO BOMB", [ "on", "off", ], this.onResultAutoBombDialog, {
            "defaultValue": 0,
            "menuDescriptions": [
                "被弾時に自動でボンバーを投下します",
                "ボンバーの投下は手動でのみ行います。ミス時に最大ボム数が増加します",
            ],
            "showExit": true,
        });
    },
    onResultAutoBombDialog: function(result) {
        if (result === 2) return;
        this.autoBomb = result === 0;
        this.openConfirmDialog();
    },

    openConfirmDialog: function() {
        this.openDialogMenu("ARE YOU READY?", [ "ok" ], this.onResultConfirmDialog, {
            "defaultValue": 0,
            "menuDescriptions": [
                "出撃します",
            ],
            "showExit": true,
        });
    },
    onResultConfirmDialog: function(result) {
        if (result === 0) this.startGame();
    },

    moveCursor: function(incr, noanim) {
        this.type = (this.type + incr + 3) % 3;

        [this.typeA, this.typeB, this.typeC][this.type].remove().addChildTo(this.types);

        if (noanim) {
            this.typeA.pos = this.typeA.pos-incr;
            this.typeA.scaleX = this.type === 0 ? 5 : 1;
            this.typeA.scaleY = this.type === 0 ? 5 : 1;

            this.typeB.pos = this.typeB.pos-incr;
            this.typeB.scaleX = this.type === 1 ? 5 : 1;
            this.typeB.scaleY = this.type === 1 ? 5 : 1;

            this.typeC.pos = this.typeC.pos-incr;
            this.typeC.scaleX = this.type === 2 ? 5 : 1;
            this.typeC.scaleY = this.type === 2 ? 5 : 1;
        } else {
            this.moving = true;

            this.typeA.tweener.clear().to({pos: this.typeA.pos-incr, scaleX:(this.type === 0 ? 5 : 1), scaleY:(this.type === 0 ? 5 : 1)}, 300);
            this.typeB.tweener.clear().to({pos: this.typeB.pos-incr, scaleX:(this.type === 1 ? 5 : 1), scaleY:(this.type === 1 ? 5 : 1)}, 300);
            this.typeC.tweener.clear().to({pos: this.typeC.pos-incr, scaleX:(this.type === 2 ? 5 : 1), scaleY:(this.type === 2 ? 5 : 1)}, 300);
            this.tweener.clear().wait(310).call(function() {
                this.moving = false;
            }.bind(this));
        }

        this.labelType.text = ["Type-A", "Type-B", "Type-C"][this.type];
    },

    startGame: function() {
        gls2.core.gameScene.autoBomb = this.autoBomb;
        gls2.core.gameScene.start(this.type, this.style);

        if (gls2.core.gameScene.stage.assets) {
            var loadingScene = tm.ui.LoadingScene({
                assets: gls2.core.gameScene.stage.assets,
                width: SC_W,
                height: SC_H,
                nextScene: function() {
                    gls2.core.gameScene.assets = null;
                    return gls2.core.gameScene;
                }.bind(this),
            });
            loadingScene.bg.canvas.clearColor("black");
            gls2.core.replaceScene(loadingScene);
        } else {
            gls2.core.replaceScene(gls2.core.gameScene);
        }

        gls2.fadeOutBgm();
    },

    updateStyle: function(shot) {
        this.labelStyle.text = ["Shot", "Laser", "Expert", "Beginner"][this.style] + " Style";
        if (this.style === 1) {
            this.styleBase.line.shotTwoWay = false;
            this.styleBits[0].line.shotTwoWay = false;
            this.styleBits[1].line.shotTwoWay = false;
            this.styleBits[2].line.shotTwoWay = false;
            this.styleBits[3].line.shotTwoWay = false;
        } else {
            this.styleBase.line.shotTwoWay = true;
            this.styleBits[0].line.shotTwoWay = true;
            this.styleBits[1].line.shotTwoWay = true;
            this.styleBits[2].line.shotTwoWay = true;
            this.styleBits[3].line.shotTwoWay = true;
        }
        if (shot) {
            this.styleBits[0].visible = true;
            this.styleBits[1].visible = true;
            if (this.style === 1) {
                this.styleBits[2].visible = false;
                this.styleBits[3].visible = false;
            } else {
                this.styleBits[2].visible = true;
                this.styleBits[3].visible = true;
            }
            this.styleBase.line.lineWidth = 5;
        } else {
            if (this.style !== 3) {
                this.styleBits.each(function(b) { b.visible = false });
            }
            if (this.style === 0) {
                this.styleBase.line.lineWidth = 10;
            } else {
                this.styleBase.line.lineWidth = 25;
            }
        }
    },

    drawBackground: function(canvas) {
    }

});

var ShotLine = tm.createClass({
    superClass: tm.display.CanvasElement,

    shotTwoWay: true,

    init: function(x, y, angle, length, width) {
        this.superInit();
        this.angle = angle-Math.PI*0.5;
        this.x = x + Math.cos(this.angle)*10;
        this.y = y + Math.sin(this.angle)*10;
        this.length = length;
        this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
        this.i = 0;
        this.lineWidth = width;
    },
    update: function(app) {
        this.i = (app.frame%20) / 20;
    },
    draw: function(canvas) {
        canvas.lineWidth = this.lineWidth;

        if (this.shotTwoWay && this.lineWidth === 5) {
            var dx = Math.cos(this.angle-Math.PI/2) * 5;
            var dy = Math.sin(this.angle-Math.PI/2) * 5;
            canvas.drawArrow(this.x - dx, this.y - dy,
                Math.cos(this.angle)*this.length*this.i+this.x - dx,
                Math.sin(this.angle)*this.length*this.i+this.y - dy, this.lineWidth*1.2);
            canvas.drawArrow(this.x + dx, this.y + dy,
                Math.cos(this.angle)*this.length*this.i+this.x + dx,
                Math.sin(this.angle)*this.length*this.i+this.y + dy, this.lineWidth*1.2);
        } else {
            canvas.drawArrow(this.x, this.y,
                Math.cos(this.angle)*this.length*this.i+this.x,
                Math.sin(this.angle)*this.length*this.i+this.y, this.lineWidth*1.2);
        }
    },
})

})();