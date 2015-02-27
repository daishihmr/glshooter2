/*
 * License
 * http://daishihmr.mit-license.org/
 */

/**
 * @class
 * @extends {gls2.Scene}
 */
gls2.DialogMenu = tm.createClass(
/** @lends {gls2.DialogMenu.prototype} */
{
    superClass: gls2.Scene,

    /** @type {string} */
    titleText: null,
    /** @type {Array.<string>} */
    menu: null,
    /** @type {Array.<string>} */
    descriptions: null,
    /** @type {boolean} */
    showExit: false,

    /** @type {tm.display.Label} */
    title: null,
    /** @type {Array.<tm.display.Label>} */
    selections: [],
    /** @type {tm.display.Label} */
    description: null,
    /** @type {tm.display.RectangleShape} */
    box: null,
    /** @type {tm.display.RectangleShape} */
    cursor: null,

    onCursorMove: null,

    _selected: 0,
    _opened: false,
    _finished: false,

    /**
     * @constructs
     * @param {string} title
     * @param {Array.<string>} menu
     */
    init: function(title, menu, param) {
        this.superInit();

        this.titleText = title;
        this.menu = menu;
        this._selected = ~~param["defaultValue"];
        this.showExit = param["showExit"];
        this.descriptions = param["menuDescriptions"];
        if (this.showExit) {
            menu.push("back");
            this.descriptions.push("前の画面へ戻ります");
        }
        this.onCursorMove = param["onCursorMove"];

        var height = Math.max((1+menu.length)*50, 50) + 40;
        this.box = tm.display.RectangleShape(SC_W * 0.8, height, {
            strokeStyle: "rgba(0,0,0,0)",
            fillStyle: "hsla(220,50%,15%,0.8)",
        }).setPosition(SC_W*0.5, SC_H*0.5);
        this.box.width = 1;
        this.box.height = 1;
        this.box.tweener
            .to({ width: SC_W*0.8, height: height }, 200, "easeOutExpo")
            .call(this._onOpen.bind(this));
        this.box.addChildTo(this);

        this.description = tm.display.Label("", 14).setPosition(SC_W*0.5, SC_H-10).addChildTo(this);
    },

    _onOpen: function() {
        var y = SC_H*0.5 - this.menu.length * 25;

        this.title = tm.display.Label(this.titleText, 30).setPosition(SC_W*0.5, y).addChildTo(this);

        this.selections = this.menu.map(function(m, i) {
            var self = this;
            y += 50;
            var sel = tm.display.Label(m).setPosition(SC_W*0.5, y).addChildTo(this);
            sel.interactive = true;
            sel.addEventListener("touchend", function() {
                if (self._selected === i) {
                    self.closeDialog(self._selected);
                } else {
                    self._selected = i;
                }
            });
            sel.width = SC_W * 0.7;
            return sel;
        }.bind(this));

        this._createCursor();

        this._opened = true;
    },

    _createCursor: function() {
        this.cursor = tm.display.RectangleShape(SC_W*0.7, 10, {
            strokeStyle: "rgba(0,0,0,0)",
            fillStyle: tm.graphics.LinearGradient(0,0,SC_W*0.7,0)
                .addColorStopList([
                    { offset:0.0, color:"rgba(  0,100,255,0.0)" },
                    { offset:0.2, color:"rgba(  0,100,255,0.3)" },
                    { offset:0.5, color:"rgba(  0,255,255,0.5)" },
                    { offset:0.8, color:"rgba(  0,100,255,0.3)" },
                    { offset:1.0, color:"rgba(  0,100,255,0.0)" },
                ]).toStyle(),
        }).addChildTo(this);
        this.cursor.blendMode = "lighter";
        this.cursor.x = SC_W*0.5;
        this.cursor.s = this._selected;
        this.cursor.y = this.selections[this._selected].y;
        this.cursor.update = function() {
            if (this.s !== this.parent._selected) {
                this.s = this.parent._selected;
                this.tweener.clear();
                this.tweener.to({
                    y: this.parent.selections[this.parent._selected].y
                }, 200, "easeOutExpo");

                if (this.parent.onCursorMove !== null) this.parent.onCursorMove(this.s);
            }
        };
    },

    update: function(app) {
        this.description.text = this.descriptions[this._selected];

        if (!this._opened) {
            return;
        }
        if (this._finished) {
            this.cursor.visible = ~~(app.frame/2) % 2 === 0;
            return;
        }

        if (this.showExit && app.getKeyDown("x")) {
            this._selected = this.selections.length-1;
            this.closeDialog(this._selected);
            return;
        } else if (app.getKeyDown("z") || app.getKeyDown("c") || app.getKeyDown("space")) {
            this.closeDialog(this._selected);
            gls2.playSound("decision");
            return;
        } else if (app.getKeyDown("down")) {
            this._selected += 1;
            this._selected = gls2.math.clamp(this._selected, 0, this.selections.length-1);
            gls2.playSound("select");
        } else if (app.getKeyDown("up")) {
            this._selected -= 1;
            this._selected = gls2.math.clamp(this._selected, 0, this.selections.length-1);
            gls2.playSound("select");
        }
    },

    closeDialog: function(result) {
        this._finished = true;
        this.tweener
            .clear()
            .wait(200)
            .call(function() {
                this.cursor.remove();
                this.title.remove();
                this.selections.each(function(sel) {
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

    drawBackground: function(canvas) {
        canvas.fillStyle = "rgba(0,0,0,0.8)";
        canvas.fillRect(0,0,SC_W,SC_H);
    },
});

/**
 * @param {string} title
 * @param {Array.<string>} menu
 * @param {function(number)} callback
 * @param {number=} defaultValue
 * @param {Array.<string>=} menuDescriptions
 * @param {boolean=} showExit
 */
gls2.Scene.prototype.openDialogMenu = function(title, menu, callback, param) {
    param = {}.$extend({
        "menuDescriptions": [].concat(menu),
        "showExit": true,
        "defaultValue": 0,
        "onCursorMove": function() {},
    }, param);
    this.startSceneForResult(gls2.DialogMenu(title, menu, param), callback);
};
