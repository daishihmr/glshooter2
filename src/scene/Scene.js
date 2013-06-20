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
    openDialogMenu: function(requestCode, menu) {
        gls2.Scene.result = null;
        gls2.Scene.requestCode = requestCode;
        gls2.core.pushScene(gls2.DialogMenu(menu));
    },
    onResult: function(requestCode, result) {
    }
});
gls2.Scene.result = null;

gls2.DialogMenu = tm.createClass({
    superClass: gls2.Scene,
    selection: [],
    selected: 0,
    box: null,
    finished: false,
    cursor: tm.app.RectangleShape(SC_W*0.7, 35, {
        strokeStyle: "rgba(0,0,0,0)",
        fillStyle: "rgba(0, 255, 100, 0.5)",
    }),
    init: function(menu) {
        this.superInit();
        var show = function() {
            this.cursor.addChildTo(this);

            this.selection = menu.map(function(m, i) {
                var y = SC_H*0.5 - menu.length*25 + i*50 + 30;
                var label = tm.app.Label(m).setPosition(SC_W*0.5, y);
                return label;
            });
            this.selection.each(function(sel) {
                sel.addChildTo(this);
            }.bind(this));

            this.cursor.x = SC_W*0.5;
            this.cursor.y = this.selection[this.selected].y-4;
            this.cursor.update = function() {
                this.tweener.clear();
                this.tweener.to({
                    y: this.parent.selection[this.parent.selected].y-4
                }, 30);
            };
        }.bind(this);

        var h = Math.max(menu.length*50, 50) + 40;
        this.box = tm.app.RectangleShape(SC_W * 0.8, h, {
            strokeStyle: "rgba(255,255,255,1)",
            fillStyle: tm.graphics.LinearGradient(0,0,0,h).addColorStopList([
                { offset:0, color:"rgba(49,37,128,0.8)" },
                { offset:1, color:"rgba(28,21,74,0.8)" },
            ]).toStyle()
        }).setPosition(SC_W*0.5, SC_H*0.5);
        this.box.width = 1;
        this.box.height = 1;
        this.box.tweener
            .to({ width: SC_W * 0.8, height: h }, 200)
            .call(show);
        this.box.addChildTo(this);
    },
    update: function(app) {
        if (this.finished) return;

        if (app.keyboard.getKeyDown("x")) {
            this.closeDialog(-1);
            return;
        } else if (app.keyboard.getKeyDown("z")) {
            this.closeDialog(this.selected);
            return;
        } else if (app.keyboard.getKeyDown("down")) {
            this.selected += 1;
        } else if (app.keyboard.getKeyDown("up")) {
            this.selected -= 1;
        }
        this.selected = Math.clamp(this.selected, 0, this.selection.length-1);
    },
    closeDialog: function(result) {
        this.finished = true;
        this.cursor.remove();
        this.selection.each(function(sel) {
            sel.remove();
        });
        this.box.tweener.clear();
        this.box.tweener
            .to({ width: 1, height: 1 }, 200)
            .call(function() {
                this.finish(result);
            }.bind(this));
    }
});
