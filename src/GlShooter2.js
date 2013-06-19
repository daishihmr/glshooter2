gls2.GlShooter2 = tm.createClass({
    superClass: tm.app.CanvasApp,
    score: 0,
    highScore: 0,
    init: function(id) {
        this.superInit(id);
        this.resize(SC_W, SC_H).fitWindow();
        this.fps = 60;
        this.background = "rgba(0,0,0,1)";
        this.replaceScene(tm.app.LoadingScene({
            assets: {
                "tex0": "assets/bullets.png",
                "tex1": "assets/tex1.png",
            },
            nextScene: gls2.TitleScene
        }));
    }
});

gls2.setShadow = function(element) {
    element.shadowColor = "rgba(0,0,0,0.5)";
    element.shadowBlur = 30;
    element.shadowOffsetX = 20;
    element.shadowOffsetY = 40;
};
