gls2.GlShooter2 = tm.createClass({
    superClass: tm.app.CanvasApp,
    init: function(id) {
        this.superInit(id);
        this.resize(SC_W, SC_H).fitWindow();
        this.fps = 60;
        this.background = "rgba(0,0,0,1)";
        this.replaceScene(tm.app.LoadingScene());
    },
    setupCommonData: function() {
        gls2.EnemyHard.setup();
        gls2.EnemySoft.setup();
    },
    _draw: function() {
        this.superClass.prototype._draw.apply(this, arguments);
    }
});

gls2.setShadow = function(element) {
    element.shadowColor = "rgba(0,0,0,0.5)";
    element.shadowBlur = 30;
    element.shadowOffsetX = 20;
    element.shadowOffsetY = 100;
};
