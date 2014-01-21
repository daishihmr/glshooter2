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
        this.addEventListener("enter", function() {
            this.age = 0;
            this.opened = false;
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

    openMenu: function() {
        this.opened = true;

        var menu = [ "save score", "exit" ];
        var labels = [
            "スコアをランキングサーバーへ送信します",
            "タイトルへ戻ります"
        ];
        this.openDialogMenu("GAME OVER", menu, this.onResultMenu, {
            "defaultValue": 0,
            "menuDescriptions": labels,
            "showExit": false
        });
    },

    onResultMenu: function(result) {
        if (result === 0) {
            this.app.postScore(null, function(error, success, scoreId) {
                if (error) {
                    this.openErrorDialog(error);
                } else if (success) {
                    if (scoreId) {
                        this.openConfirmTweetDialog(scoreId)
                    } else {
                        this.app.replaceScene(gls2.TitleScene());
                    }
                } else {
                    this.openMenu();
                }
            }.bind(this));
        } else {
            this.app.replaceScene(gls2.TitleScene());
        }
    },

    openErrorDialog: function() {
        this.openDialogMenu("ERROR!", ["ok"], function() { return }, {
            "menuDescriptions": ["登録に失敗しました！＞＜"],
            "showExit": false
        });
    },

    openConfirmTweetDialog: function(scoreId) {
        var menu = [ "yes", "no" ];
        var labels = [
            "スコアをTwitterに投稿します",
            "タイトルへ戻ります"
        ];
        this.openDialogMenu("tweet this score?", menu, function(result) {
            this.onResultTweet(result, scoreId);
        }, {
            "defaultValue": 0,
            "menuDescriptions": labels,
            "showExit": false
        });
    },

    onResultTweet: function(result, scoreId) {
        if (result == 0) {
            var text = "TM-Shooter SCORE: {score}(stage{stage} {type}-{style} continue:{cont})".format({
                "score": this.app.highScore,
                "stage": this.app.highScoreStage,
                "type": "ABC"[this.app.highScoreType],
                "style": ["S", "L", "EX"][this.app.highScoreStyle],
                "cont": this.app.highScoreContinueCount
            });
            var twitterURL = tm.social.Twitter.createURL({
                "type"    : "tweet",
                "text"    : text,
                "hashtags": "tmshooter",
                "url"     : "http://tmshooter.dev7.jp"
            });
            window.open(twitterURL);
            this.app.replaceScene(gls2.TitleScene());
        } else if (result == 1) {
            this.app.replaceScene(gls2.TitleScene());
        }
    }

});
