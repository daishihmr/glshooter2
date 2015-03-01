/*
 * License
 * http://daishihmr.mit-license.org/
 */

/**
 * @class
 */
gls2.GameOverScene = tm.createClass(
/** @lends {gls2.GameOverScene.prototype} */
{
    superClass: gls2.Scene,

    age: 0,
    opened: false,

    /**
     * @constructs
     */
    init: function() {
        this.superInit();
        var label = tm.display.Label("GAME OVER");
        label.fillStyle = "red";
        label.setPosition(SC_W*0.5, SC_H*0.5).addChildTo(this);

        this.interactive = true;

        this.one("enter", function() {
            gls2.playBgm("gameover");
            this.sendScore();
            this.openMenu();
        });
    },
    update: function(app) {
        if (app.getKeyDown("z") || app.getKeyDown("c") || (this.age == 300 && !this.opened)) {
            this.openMenu();
        }

        this.age += 1;
    },

    drawBackground: function(canvas) {
        canvas.clearColor("black");
    },

    sendScore: function() {
        var leaderboards = [
            [
                gpgsConstants.LEAD_TYPEA_SHOTSTYLE,
                gpgsConstants.LEAD_TYPEA_LASERSTYLE,
                gpgsConstants.LEAD_TYPEA_EXPERTSTYLE,
                gpgsConstants.LEAD_TYPEA_BEGINNERSTYLE,
            ],
            [
                gpgsConstants.LEAD_TYPEB_SHOTSTYLE,
                gpgsConstants.LEAD_TYPEB_LASERSTYLE,
                gpgsConstants.LEAD_TYPEB_EXPERTSTYLE,
                gpgsConstants.LEAD_TYPEB_BEGINNERSTYLE,
            ],
            [
                gpgsConstants.LEAD_TYPEC_SHOTSTYLE,
                gpgsConstants.LEAD_TYPEC_LASERSTYLE,
                gpgsConstants.LEAD_TYPEC_EXPERTSTYLE,
                gpgsConstants.LEAD_TYPEC_BEGINNERSTYLE,
            ],
        ];

        var player = gls2.core.gameScene.player;
        var leaderboardId = leaderboards[player.type][player.style];
        this.app.postScore(leaderboardId, gls2.core.gameScene.score);
    },

    openMenu: function() {
        if (this.wait) return;
        this.opened = true;

        var menu = [ "tweet result", "back to title" ];
        var labels = [
            "プレイ結果をTwitterへ投稿します",
            "タイトルへ戻ります"
        ];

        this.openDialogMenu("GAME OVER", menu, this.onResultMenu, {
            "defaultValue": 1,
            "menuDescriptions": labels,
            "showExit": false
        });
    },

    onResultMenu: function(result) {
        if (result === 0) {
            this.tweetScore();
        } else if (result === 1) {
            this.app.replaceScene(gls2.TitleScene());
        }
    },

    tweetScore: function() {
        var text = "TM-Shooter CBL SCORE:{score} {stage} {type}-{style} continue:{cont} http://daishihmr.github.io/tmshooter-cbl/ #{hashtag}".format({
            "score": Math.floor(this.app.gameScene.score),
            "stage": this.app.gameScene.stageNumber < STAGE_NUMBER ? ("Stage" + (this.app.gameScene.stageNumber + 1)) : "ALL",
            "type": "ABC"[this.app.gameScene.player.type],
            "style": ["S", "L", "EX", "BG"][this.app.gameScene.player.style],
            "cont": this.app.gameScene.continueCount,
            "hashtag": HASH_TAG,
        });
        var media = this.app.gameScene.screenShot;
        if (media) {
            media = media.replace("data:image/png;base64,", "");
        }

        window.open("", "childWindow", "width=500, height=500, menubar=no, toolbar=no, location=no, status=no, resizable=yes, scrollbars=yes");

        var form = document.createElement("form");
        form.method = "post";
        form.action = "http://commons.dev7.jp/twitters/post-with-image";
        // form.action = "http://localhost:5000/twitters/post-with-image";
        form.target = "childWindow";
        var textInput = document.createElement("input");
        textInput.name = "text";
        textInput.value = text;
        form.appendChild(textInput);
        var mediaInput = document.createElement("input");
        mediaInput.name = "media";
        mediaInput.value = media;
        form.appendChild(mediaInput);

        form.submit();
        form = null;
    }

});
