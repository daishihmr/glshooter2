gls2.Scene = tm.createClass({
    superClass: tm.app.Scene,
    init: function() {
        this.superInit();
        this.addEventListener("enter", function(e) {
            this.onResult(gls2.Scene.requestCode, gls2.Scene.result);
        });
    },
    finish: function(result) {
        gls2.Scene.result = result;
        gls2.core.popScene();
    },
    startScene: function(requestCode, sceneClass) {
        gls2.Scene.result = null;
        gls2.Scene.requestCode = requestCode;
        gls2.core.pushScene(sceneClass());
    },
    openDialogMenu: function(requestCode, title, menu, defaultValue, menuDescriptions) {
        gls2.Scene.result = null;
        gls2.Scene.requestCode = requestCode;
        gls2.core.pushScene(gls2.DialogMenu(title, menu, defaultValue, menuDescriptions));
    },
    onResult: function(requestCode, result) {
    },
    update: function(app) {
        if (app.pointing.getPointingEnd()) {
            gls2.PointerEffect(app.pointing).addChildTo(this);
        }
    },
});
gls2.Scene.result = null;

gls2.PointerEffect = tm.createClass({
    superClass: tm.app.CircleShape,
    init: function(pointing) {
        this.superInit(150, 150, {
            strokeStyle: "rgba(0,0,0,0)",
            fillStyle: tm.graphics.RadialGradient(75,75,0,75,75,75).addColorStopList([
                { offset:0.0, color:"rgba(255,255,255,0.0)" },
                { offset:0.6, color:"rgba(255,255,255,0.0)" },
                { offset:1.0, color:"rgba(255,255,255,0.8)" },
            ]).toStyle(),
        });

        this.setPosition(pointing.x, pointing.y);
        this.width = this.height = 1;
        this.tweener
            .clear()
            .to({
                width: 150,
                height: 150,
                alpha: 0
            }, 300)
            .call(function() {
                this.remove();
            }.bind(this));
    },
});
