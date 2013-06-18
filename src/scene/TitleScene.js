gls2.TitleScene = tm.createClass({
    superClass: tm.app.Scene,
    result: null,
    init: function() {
        this.superInit();

        tm.app.Label("press z key").setPosition(SC_W * 0.5, SC_H * 0.5).setAlign("center").addChildTo(this);
    },
    update: function(app) {
        if (this.result === "start") {
            gls2.core.replaceScene(gls2.GameScene());
            return;
        }

        if (app.keyboard.getKey("z")) {
            this.result = "start";
        }
    }
});
