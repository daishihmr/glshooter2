(function() {

var MAIN_MENU = 0;
var OPTION_MENU = 1;
var GAME = 2;

gls2.TitleScene = tm.createClass({
    superClass: gls2.Scene,
    result: null,
    particleImage: null,
    age: 0,
    init: function() {
        this.superInit();
        tm.app.Label("GL-Shooter 2", 40).setPosition(SC_W * 0.5, SC_H * 0.25).addChildTo(this);
        tm.app.Label("press z key").setPosition(SC_W * 0.5, SC_H * 0.75).addChildTo(this);

        var size = 80;
        var c = tm.graphics.Canvas();
        c.resize(size, size);
        c.fillStyle = tm.graphics.RadialGradient(size * 0.5, size * 0.5, 0,size * 0.5, size * 0.5, size * 0.5).addColorStopList([
            {offset:0, color: "rgba(255,255,255,0.1)"},
            {offset:1, color: "rgba(  0,  0,255,0.0)"}
        ]).toStyle();
        c.fillRect(0, 0, size, size);
        this.particleImage = c.element;
    },
    update: function(app) {
        var cx, cy;
        if (this.age % 2 === 0) {
            cx = Math.cos(this.age * 0.01) * 30 + SC_W*0.5;
            cy = Math.sin(this.age * 0.01) * 30 + SC_H*0.5;
        } else {
            cx = Math.cos(this.age * -0.01) * 70 + SC_W*0.5;
            cy = Math.sin(this.age * -0.01) * 70 + SC_H*0.5;
        }
        var p = gls2.Particle(80, 1.0, 0.9, this.particleImage).addChildTo(this);
        var a = Math.randf(0, Math.PI*2);
        var r = Math.rand(0, 20);
        p.setPosition(Math.cos(a) * r + cx, Math.sin(a) * r + cy);
        p.update = function() {
            this.x += Math.cos(a) * 0.5;
            this.y += Math.sin(a) * 0.5;
            if (this.x < -50 || SC_W+50 < this.x || this.y < -50 || SC_H+50 < this.y) {
                this.remove();
            }
        };

        if (app.keyboard.getKeyDown("z")) {
            this.openDialogMenu(MAIN_MENU, [ "START", "OPTION", "EXIT" ]);
        }

        this.age += 1;
    },
    onResult: function(requestCode, result) {
        if (requestCode === MAIN_MENU) { // main menu
            switch(result) {
            case 0: // start
                this.startScene(GAME, gls2.GameScene);
                break;
            case 1: // option
                this.openOptionDialog();
                break;
            case 2: // exit
                gls2.core.exitApp();
                break;
            }
        } else if (requestCode === OPTION_MENU) { // option menu
            console.log(result)
        }
    },
    openOptionDialog: function() {
        this.openDialogMenu(OPTION_MENU, [ "BGM", "SE", "EXIT" ]);
    }
});

})();
