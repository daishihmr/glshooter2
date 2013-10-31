/*
 * License
 * http://daishihmr.mit-license.org/
 */

/**
 * @class
 * @extends {tm.app.Scene}
 */
gls2.Scene = tm.createClass(
/** @lends {gls2.Scene.prototype} */
{
    superClass: tm.app.Scene,
    _sceneResultCallback: null,
    init: function() {
        this.superInit();
    },
    startSceneForResult: function(scene, callback) {
        if (typeof(scene) === "function") {
            this.app.pushScene(scene());
        } else if (scene instanceof tm.app.Scene) {
            this.app.pushScene(scene);
        }
        this._sceneResultCallback = callback;
    },
    draw: function(canvas) {
        canvas.globalCompositeOperation = "source-over";
        this.drawBackground(canvas);
    },
    finish: function(result) {
        var app = this.app;
        app.popScene();
        var scene = app.currentScene;
        if (scene && scene._sceneResultCallback) {
            scene._sceneResultCallback.bind(scene)(result);
        }
    },
});
