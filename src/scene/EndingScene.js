/*
 * License
 * http://daishihmr.mit-license.org/
 */

(function() {

var texts = [
    "TM-Shooter",
    "2D 'DANMAKU' Shooter on HTML5",
    "",
    "MUSIC",
    "Underworld (select)  by  delf",
    "Feel the universe (stage1)  by  delf",
    "Herod (boss)  by  涼々",
    "Re-Birth (clear)  by  delf",
    "Remenber (stage2)  by  Ryo",
    "THE NEW CHALLENGER freeVer. (stage3)  by  delf",
    "Aegis (stage4)  by  島白",
    "Ancien Ocean (stage5)  by  delf",
    "蒼い月 (ending)  by  delf",
    "",
    "SOUND",
    "kouichi_axis (魔王魂)",
    "on_jin (音人)",
    "",
    "GAME ENGINE (tmlib.js)",
    "phi_jp",
    "",
    "TEST PLAY",
    "manofac",
    "",
    "PROGRAM AND GRAPHICS",
    "minimo(stage3)", // (｀皿´）)
    "daishi_hmr",
    "",
    "special respect to...",
    "DODONPACHI series by CAVE",
    "PRECURE series by TOEI",
    "",
    "",
    "",
    "Thank You for Playing!",
    "Let's play more other STG!!",
    "and",
    "Create Game with tmlib.js!!"
];

/**
 * @class
 * @extends {gls2.Scene}
 */
gls2.EndingScene = tm.createClass(
/** @lends {gls2.EndingScene.prototype} */
{
    superClass: gls2.Scene,

    ground: null,
    player: null,
    labels: null,
    startBgm: false,
    speed : 0,
    fadeOutStarted: false,
    layer: null,

    /**
     * @constructs
     */
    init: function() {
        this.superInit();

        this.layer = tm.display.CanvasElement().addChildTo(this);

        this.ground = gls2.core.gameScene.ground;
        this.ground.addChildTo(this);
        this.ground.direction = Math.PI * 0.5;
        this.ground.speed = 1;

        var player = this.player = gls2.core.gameScene.player;
        player.controllable = false;
        player.setPosition(SC_W*0.5, SC_H*0.7);
        player.gameScene = this.layer;
        var children = [].concat(player.children);
        children.forEach(function(c) { if (c != player.bitPivot) c.remove(); });
        player.addChildTo(this);
        var beforePos = player.x;
        player.on("enterframe", function() {
            if (player.x - beforePos > 0.2) player.roll += 0.3;
            else if (player.x - beforePos < -0.2) player.roll -= 0.3;
            else {
                if (player.x - beforePos > 0) player.roll += 0.11;
                else if (player.x - beforePos < 0) player.roll -= 0.11;
            }
            beforePos = player.x;
        });
        var next = function() {
            var s = gls2.math.randf(0.8, 1.2);
            player.tweener.clear()
                .to({
                    "x": gls2.math.randf(SC_W*0.1, SC_W*0.9),
                    "y": gls2.math.randf(SC_H*0.3, SC_H*0.8),
                    "scaleX": s,
                    "scaleY": s
                }, 6000, "easeInOutQuad")
                .call(next);
        }.bind(this);
        next();

        gls2.core.gameScene.stageNumber += 1;

        var that = this;
        this.labels = texts.map(function(text, i) {
            return tm.display.Label(text, 16)
                .setPosition(SC_W*0.5, SC_H*1.5+i*SC_H*0.1)
                .addChildTo(that)
                .on("enterframe", function() {
                    this.y -= that.speed;
                    if (this.y < SC_H*-0.3) {
                        this.remove();
                    }
                });
        });
        var circleLogo = tm.display.Label("dev7.jp", 24)
            .setPosition(SC_W*0.5, SC_H*1.5+(texts.length+3)*SC_H*0.1)
            .addChildTo(this)
            .on("enterframe", function() {
                if (this.y > SC_H*0.5) {
                    this.y -= that.speed;
                }
            });

        this.tweener.wait(2000).call(function() {
            gls2.playBgm("bgmEnding", true, true);
            this.startBgm = true;
        }.bind(this));
    },
    onenter: function() {
        if (gls2.core.gameScene.player.type === 0) gls2.core.putAchevement("allclear0");
        else if (gls2.core.gameScene.player.type === 1) gls2.core.putAchevement("allclear1");
        else if (gls2.core.gameScene.player.type === 2) gls2.core.putAchevement("allclear2");
    },
    onexit: function() {
        // groundをgameSceneに返す
        this.ground.addChildTo(gls2.core.gameScene);
    },
    update: function(app) {
        if (app.keyboard.getKey("z")
            || app.keyboard.getKey("x")
            || app.keyboard.getKey("c")
            || (this.startBgm && gls2.currentBgm && gls2.currentBgm.source["playbackState"] !== AudioBufferSourceNode["PLAYING_STATE"])) {
            if (!this.labels.some(function(l) { return !!l.parent; })) {
                this.startFadeOut();
            } else {
                this.speed = 8;
            }
        } else {
            this.speed = 0.5;
        }
    },
    startFadeOut: function() {
        if (this.fadeOutStarted) return;
        this.fadeOutStarted = true;

        var that = this;
        tm.display.RectangleShape(SC_W, SC_H, {
            fillStyle: "black",
            strokeStyle: "black"
        })
        .setPosition(SC_W*0.5, SC_H*0.5)
        .addChildTo(this)
        .tweener
            .set({ alpha: 0 })
            .to({ alpha: 1 }, 5000)
            .call(function() {
                gls2.stopBgm();
                this.app.replaceScene(gls2.GameOverScene());
            }.bind(this));

        this.ground.tweener.clear().to({
            speed: 9
        }, 2000);
        this.player.tweener.clear()
            .wait(2000)
            .to({
                y: SC_H * -0.3
            }, 2000, "easeInQuad");
    },
    drawBackground: function(canvas) {
    }
});

})();
