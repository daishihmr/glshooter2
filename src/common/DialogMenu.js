gls2.DialogMenu = tm.createClass({
    superClass: gls2.Scene,
    title: null,
    selection: [],
    selected: 0,
    descriptions: null,
    description: null,
    box: null,
    opened: false,
    finished: false,
    cursor: null,

    /**
     * @param {string} title
     * @param {Array.<string>} menu
     */
    init: function(title, menu, defaultSelected, menuDesctiptions) {
        this.superInit();

        if (menuDesctiptions) {
            this.descriptions = menuDesctiptions;
        } else {
            this.descriptions = [].concat(menu);
        }
        this.descriptions.push("前の画面へ戻ります");
        menu.push("exit");

        if (defaultSelected !== undefined) this.selected = defaultSelected;

        var showLabels = function() {
            var y = SC_H*0.5 - menu.length*25;
            this.title = tm.app.Label(title, 30).setPosition(SC_W*0.5, y).addChildTo(this);
            this.selection = menu.map(function(m, i) {
                var self = this;
                y += 50;
                var sel = tm.app.Label(m).setPosition(SC_W*0.5, y).addChildTo(this);
                sel.interactive = true;
                sel.addEventListener("touchend", function() {
                    if (self.selected === i) {
                        self.closeDialog(self.selected);
                    } else {
                        self.selected = i;
                    }
                });
                sel.width = SC_W * 0.7;
                return sel;
            }.bind(this));

            this._createCursor();

            this.opened = true;
        }.bind(this);

        var height = Math.max((1+menu.length)*50, 50) + 40;
        this.box = tm.app.RectangleShape(SC_W * 0.8, height, {
            strokeStyle: "rgba(255,255,255,1)",
            fillStyle: tm.graphics.LinearGradient(
                    0, 0,
                    0, height
                ).addColorStopList([
                { offset:0, color:"rgba(3,5,105,0.8)" },
                { offset:1, color:"rgba(1,2, 48,0.8)" },
            ]).toStyle(),
        }).setPosition(SC_W*0.5, SC_H*0.5);
        this.box.width = 1;
        this.box.height = 1;
        this.box.tweener
            .to({ width: SC_W*0.8, height: height }, 200, "easeOutExpo")
            .call(showLabels);
        this.box.addChildTo(this);

        this.description = tm.app.Label("", 14).setPosition(SC_W*0.5, SC_H-10).addChildTo(this);
    },

    _createCursor: function() {
        this.cursor = tm.app.RectangleShape(SC_W*0.7, 10, {
            strokeStyle: "rgba(0,0,0,0)",
            fillStyle: tm.graphics.LinearGradient(0,0,SC_W*0.7,0)
                .addColorStopList([
                    { offset:0.0, color:"rgba(  0,255,100,0.0)" },
                    { offset:0.2, color:"rgba(  0,255,100,0.3)" },
                    { offset:0.5, color:"rgba(  0,255,255,0.5)" },
                    { offset:0.8, color:"rgba(  0,255,100,0.3)" },
                    { offset:1.0, color:"rgba(  0,255,100,0.0)" },
                ]).toStyle(),
        }).addChildTo(this);
        this.cursor.blendMode = "lighter";
        this.cursor.x = SC_W*0.5;
        this.cursor.s = this.selected;
        this.cursor.y = this.selection[this.selected].y;
        this.cursor.update = function() {
            if (this.s !== this.parent.selected) {
                this.s = this.parent.selected;
                this.tweener.clear();
                this.tweener.to({
                    y: this.parent.selection[this.parent.selected].y
                }, 200, "easeOutExpo");
            }
        };
    },

    update: function(app) {
        this.superClass.prototype.update.apply(this, arguments);

        if (this.descriptions !== null) this.description.text = this.descriptions[this.selected];


        if (!this.opened) {
            return;
        }
        if (this.finished) {
            this.cursor.visible = app.frame % 2 === 0;
            return;
        }

        if (app.keyboard.getKeyDown("x")) {
            this.selected = this.selection.length-1;
            this.closeDialog(this.selected);
            return;
        } else if (app.keyboard.getKeyDown("z")) {
            this.closeDialog(this.selected);
            return;
        } else if (app.keyboard.getKeyDown("down")) {
            this.selected += 1;
            this.selected = Math.clamp(this.selected, 0, this.selection.length-1);
        } else if (app.keyboard.getKeyDown("up")) {
            this.selected -= 1;
            this.selected = Math.clamp(this.selected, 0, this.selection.length-1);
        }
    },

    closeDialog: function(result) {
        this.finished = true;
        this.tweener
            .clear()
            .wait(200)
            .call(function() {
                this.cursor.remove();
                this.title.remove();
                this.selection.each(function(sel) {
                    sel.remove();
                });
                this.box.tweener.clear();
                this.box.tweener
                    .to({ width: 1, height: 1 }, 200, "easeInExpo")
                    .call(function() {
                        this.finish(result);
                    }.bind(this));
            }.bind(this));
    },

    draw: function(canvas) {
        canvas.fillStyle = "rgba(0,0,0,0.8)";
        canvas.fillRect(0,0,SC_W,SC_H);
    }

});
