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

        this.on("enter", function() {
            gls2.playBgm("gameover");
            if (!this.tried) this.sendScore();
        });
    },
    update: function(app) {
        if (app.keyboard.getKeyDown("z") || app.keyboard.getKeyDown("c") || (this.age == 300 && !this.opened)) {
            this.openMenu();
        }

        this.age += 1;
    },

    drawBackground: function(canvas) {
        canvas.clearColor("black");
    },

    tried: false,
    posted: false,
    wait: false,
    scoreId: null,

    sendScore: function() {
        if (gls2.core.mode === 1) return;

        this.wait = true;
        this.tried = true;
        this.app.postScore(null, function(error, success, scoreId) {
            this.wait = false;
            if (error) {
                this.openErrorDialog(error);
            } else if (success) {
                this.posted = true;
                this.scoreId = scoreId;
                this.openSuccessDialog();
            } else {
                this.openMenu();
            }
        }.bind(this));
    },

    openMenu: function() {
        if (this.wait) return;
        this.opened = true;

        var menu = [ "tweet result", "back to title" ];
        var labels = [
            "スコアをTwitterへ投稿します",
            "タイトルへ戻ります"
        ];

        if (!this.posted) {
            menu.push("save score");
            labels.push("スコアを登録します");
        }

        this.openDialogMenu("GAME OVER", menu, this.onResultMenu, {
            "defaultValue": this.posted ? 1 : 0,
            "menuDescriptions": labels,
            "showExit": false
        });
    },

    onResultMenu: function(result) {
        if (result === 0) {
            this.tweetScore();
        } else if (result === 1) {
            this.app.replaceScene(gls2.TitleScene());
        } else {
            this.sendScore();
        }
    },

    openSuccessDialog: function() {
        this.openDialogMenu("SUCCESS!", ["ok"], function() { this.openMenu() }, {
            "menuDescriptions": ["スコア登録しました！"],
            "showExit": false
        });
    },

    openErrorDialog: function() {
        this.openDialogMenu("ERROR!", ["ok"], function() { this.openMenu() }, {
            "menuDescriptions": ["スコア登録に失敗しました！＞＜"],
            "showExit": false
        });
    },

    tweetScore: function() {
        var text = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({
            "score": Math.floor(this.app.gameScene.score),
            "stage": this.app.gameScene.stageNumber < STAGE_NUMBER ? ("Stage" + (this.app.gameScene.stageNumber + 1)) : "ALL",
            "type": "ABC"[this.app.gameScene.player.type],
            "style": ["S", "L", "EX"][this.app.gameScene.player.style],
            "cont": this.app.gameScene.continueCount
        });
        var twitterURL = tm.social.Twitter.createURL({
            "type"    : "tweet",
            "text"    : text,
            "hashtags": HASH_TAG,
            "url"     : this.scoreId ? (window.location.origin + "/ranking/" + this.scoreId) : window.location.origin
        });
        window.open(twitterURL, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400");
    }

});
