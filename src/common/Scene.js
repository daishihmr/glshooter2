/**
 * @class
 * @extends {tm.app.Scene}
 */
gls2.Scene = tm.createClass(
/** @lends {gls2.Scene.prototype} */
{
    superClass: tm.app.Scene,
    _requestCode: -1,
    init: function() {
        this.superInit();
    },
    finish: function(result) {
        var app = this.app;
        app.popScene();
        var scene = app.currentScene;
        if (scene && scene._requestCode !== -1) {
            scene.onResult(scene._requestCode, result);
        }
    },
    startScene: function(requestCode, scene) {
        this._requestCode = requestCode;
        if (typeof(scene) === "function") {
            this.app.pushScene(scene());
        } else if (scene instanceof tm.app.Scene) {
            this.app.pushScene(scene);
        }
    },
    openDialogMenu: function(requestCode, title, menu, defaultValue, menuDescriptions, showExit) {
        if (showExit === undefined) showExit = true;
        this.startScene(requestCode, gls2.DialogMenu(title, menu, defaultValue, menuDescriptions, showExit));
    },
    onResult: function(requestCode, result) {
        // for override
    },
    update: function(app) {
        if (app.pointing.getPointingEnd()) {
            gls2.PointerEffect(app.pointing).addChildTo(this);
        }
    },
});

/**
 * @class
 * @extends {tm.app.CircleShape}
 */
gls2.PointerEffect = tm.createClass(
/** @lends {gls2.PointerEffect.prototype} */
{
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
            }, 300, "easeOutQuad")
            .call(function() {
                this.remove();
            }.bind(this));
    },
});
