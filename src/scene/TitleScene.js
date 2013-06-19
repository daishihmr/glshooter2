(function() {

var MAIN_MENU = 0;
var OPTION_MENU = 1;
var GAME = 2;

gls2.TitleScene = tm.createClass({
    superClass: gls2.Scene,
    result: null,
    particleImage: null,
    age: 0,
    particles: [],
    init: function() {
        this.superInit();
        tm.app.Label("GL-Shooter 2", 50).setPosition(SC_W * 0.5, SC_H * 0.25).addChildTo(this);
        tm.app.Label("high score: 1000000000").setPosition(SC_W * 0.5, SC_H * 0.85).addChildTo(this);
        tm.app.Label("press z key").setPosition(SC_W * 0.5, SC_H * 0.75).addChildTo(this);

        var size = 80;
        var c = tm.graphics.Canvas();
        c.resize(size, size);
        c.fillStyle = tm.graphics.RadialGradient(size * 0.5, size * 0.5, 0,size * 0.5, size * 0.5, size * 0.5).addColorStopList([
            {offset:0, color: "rgba(255,255,255,0.1)"},
            {offset:1, color: "rgba(  0,155,  0,0.0)"}
        ]).toStyle();
        c.fillRect(0, 0, size, size);
        this.particleImage = c.element;
    },
    update: function(app) {
        if (this.age % 2 === 0) {
            this.generate(Math.cos(this.age*0.01)         * 50 + SC_W*0.5, Math.sin(this.age*0.01)         * 50 + SC_H*0.5);
            this.generate(Math.cos(this.age*0.01+Math.PI) * 50 + SC_W*0.5, Math.sin(this.age*0.01+Math.PI) * 50 + SC_H*0.5);
        }

        if (app.keyboard.getKeyDown("z")) {
            this.openDialogMenu(MAIN_MENU, [ "START", "OPTION", "EXIT" ]);
        }

        this.age += 1;
    },
    generate: function(cx, cy) {
        var p = gls2.Particle(80, 1.0, 0.8, this.particleImage).addChildTo(this);
        p.speed = 0.5;
        var a = Math.randf(0, Math.PI*2);
        var r = Math.rand(0, 20);
        p.setPosition(Math.cos(a) * r + cx, Math.sin(a) * r + cy);
        var self = this;
        p.update = function() {
            this.x += Math.cos(a) * this.speed;
            this.y += Math.sin(a) * this.speed;
            if (this.x < -50 || SC_W+50 < this.x || this.y < -50 || SC_H+50 < this.y) {
                this.remove();
                var idx = self.particles.indexOf(this);
                if (idx !== -1) {
                    self.particles.splice(idx, 1);
                }
            }
        };
        this.particles.push(p);
    },
    onResult: function(requestCode, result) {
        if (requestCode === MAIN_MENU) { // main menu
            switch(result) {
            case 0: // start
                this.tweener
                    .call(function() {
                        for (var i = 0, end = this.particles.length; i < end; i++) {
                            this.particles[i].speed = 6;
                            this.generate = function() {};
                        }
                    }.bind(this))
                    .wait(2000)
                    .call(function() {
                        this.startScene(GAME, gls2.GameScene);
                    }.bind(this));
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
