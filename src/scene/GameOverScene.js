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

    openMenu: function() {
        this.opened = true;

        var menu = [ "tweet result", "back to title" ];
        var labels = [
            "スコアをTwitterへ投稿します",
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
            this.tweetScore();
        } else if (result === 1) {
            this.app.replaceScene(gls2.TitleScene());
        }
    },

    tweetScore: function() {
        var text = "TM-Shooter SCORE:{score}({stage} {type}-{style})continue:{cont}".format({
            "score": Math.floor(this.app.gameScene.score),
            "stage": this.app.gameScene.stageNumber < STAGE_NUMBER ? ("Stage" + (this.app.gameScene.stageNumber + 1)) : "ALL",
            "type": "ABC"[this.app.gameScene.player.type],
            "style": ["S", "L", "EX", "BG"][this.app.gameScene.player.style],
            "cont": this.app.gameScene.continueCount
        });
        var twitterURL = tm.social.Twitter.createURL({
            "type"    : "tweet",
            "text"    : text,
            "hashtags": HASH_TAG,
            "url"     : window.location.href,
        });
        window.open(twitterURL, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400");
    }

});
