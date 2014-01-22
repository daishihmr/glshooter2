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

    posted: false,
    wait: false,
    scoreId: null,

    openMenu: function() {
        if (this.wait) return;
        this.opened = true;

        if (!this.posted) {
            var menu = [ "save score", "tweet result", "back to title" ];
            var labels = [
                "スコアをランキングサーバーへ送信します",
                "スコアをTwitterへ投稿します",
                "タイトルへ戻ります"
            ];
            this.openDialogMenu("GAME OVER", menu, this.onResultMenu, {
                "defaultValue": this.posted ? 1 : 0,
                "menuDescriptions": labels,
                "showExit": false
            });
        } else {
            openConfirmTweetDialog();
        }
    },

    onResultMenu: function(result) {
        if (result === 0) {
            if (this.posted) {
                return;
            }
            this.wait = true;
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
        } else if (result === 1) {
            this.tweetScore();
        } else {
            this.app.replaceScene(gls2.TitleScene());
        }
    },

    openSuccessDialog: function() {
        this.openDialogMenu("SUCCESS!", ["ok"], function() { this.openMenu() }, {
            "menuDescriptions": ["登録しました！"],
            "showExit": false
        });
    },

    openErrorDialog: function() {
        this.openDialogMenu("ERROR!", ["ok"], function() { this.openMenu() }, {
            "menuDescriptions": ["登録に失敗しました！＞＜"],
            "showExit": false
        });
    },

    tweetScore: function() {
        var text = "TM-Shooter SCORE: {score}(stage{stage} {type}-{style} continue:{cont})".format({
            "score": Math.floor(this.app.gameScene.score),
            "stage": this.app.gameScene.stageNumber + 1,
            "type": "ABC"[this.app.gameScene.player.type],
            "style": ["S", "L", "EX"][this.app.gameScene.player.style],
            "cont": this.app.gameScene.continueCount
        });
        var twitterURL = tm.social.Twitter.createURL({
            "type"    : "tweet",
            "text"    : text,
            "hashtags": "tmshooter",
            "url"     : this.scoreId ? ("http://tmshooter.net/ranking/" + this.scoreId) : "http://tmshooter.net"
        });
        window.open(twitterURL, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400");
    }

});
