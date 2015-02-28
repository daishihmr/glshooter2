(function() {

    tm.define("tm.ui.ListView", {
        superClass: "tm.display.CanvasElement",

        init: function(param) {
            this.superInit();

            this._views = [];

            param = {}.$extend(tm.ui.ListView.DEFAULT_PARAM, param);

            this.fromJSON({
                items: param.items || [],
                innerHeight: 0,
                originY: 0,
                width: param.width,
                height: param.height,
                clipping: true,
                checkHierarchy: true,
                interactive: true,
                boundingType: "rect",
                children: {
                    inner: {
                        type: "tm.display.CanvasElement",
                        originY: 0,
                        lastElementY: 0,
                    },
                },
            });

            var drag = false;
            var velocity = 0;

            this.on("enterframe", function() {
                this.inner.y += velocity;
                this.inner.y = Math.clamp(this.inner.y, -this.innerHeight + this.height, 0);
                if (!drag && velocity !== 0) {
                    velocity *= 0.8;
                    if (Math.abs(velocity) < 0.1) {
                        velocity = 0;
                    }
                }
            });
            this.on("pointingmove", function(e) {
                drag = true;
                velocity = e.app.pointing.deltaPosition.y;
                this.inner.y += velocity;
            });
            this.on("pointingend", function() {
                drag = false;
                // if (0 < this.inner.y) {
                //     velocity = 0;
                //     this.inner.tweener
                //         .clear()
                //         .to({
                //             y: 0
                //         }, 100, "easeInQuad");
                // } else if (this.innerHeight < this.height && this.inner.y <= 0) {
                //     velocity = 0;
                //     this.inner.tweener
                //         .clear()
                //         .to({
                //             y: 0
                //         }, 100, "easeInQuad");
                // } else if (this.inner.y < -this.innerHeight + this.height) {
                //     velocity = 0;
                //     this.inner.tweener
                //         .clear()
                //         .to({
                //             y: -this.innerHeight + this.height
                //         }, 100, "easeInQuad");
                // }
            });

            this.on("added", function() {
                this.updateItems();
            });
        },

        setupMouseWheelListener: function() {
            var lastWheel = false;
            var wheel = false;

            window.document.addEventListener("mousewheel", function(e) {
                wheel = true;
                this.inner.y += e.wheelDeltaY;
                e.preventDefault();
            }.bind(this));

            this.on("enterframe", function() {
                lastWheel = wheel;
                wheel = false;
                if (lastWheel && !wheel) {
                    this.flare("pointingend");
                }
            });
        },

        getView: function(item, i, view) {
            return tm.ui.SimpleListViewItem(400, 50, item);
        },

        onItemClick: function(item) {},

        updateItems: function() {
            var y = 0;
            this.innerHeight = 0;

            var views = this._views;
            this._views = [];

            this.inner.removeChildren();

            this.items.forEach(function(item, i) {

                var view = this._views[i] = this.getView(item, i, views[i]);
                if (view) {
                    if (view.parent) {
                        view.remove();
                    }

                    y += view.height * 0.5;
                    view.y = y;
                    view.addChildTo(this.inner);
                    y += view.height * 0.5;

                    this.innerHeight += view.height;
                }

            }.bind(this));
        },

    });

    tm.ui.ListView.DEFAULT_PARAM = {
        items: null,
        width: 640,
        height: 960,
    };

    tm.define("tm.ui.ListViewItem", {
        superClass: "tm.display.CanvasElement",

        init: function(width, height) {
            this.superInit();
            this.fromJSON({
                width: width,
                height: height,
                interactive: true,
                checkHierarchy: true,
                boundingType: "rect",
            });

            var initialY = 0;
            var drag = false;

            this.on("pointingstart", function(e) {
                initialY = e.pointing.y;
                drag = false;
            });
            this.on("pointingmove", function(e) {
                if (5 < Math.abs(initialY - e.pointing.y)) {
                    drag = true;
                }
            });
            this.on("pointingend", function(e) {
                var listView = this.parent.parent;
                if (!drag && listView.isHitPoint(e.pointing.x, e.pointing.y)) {
                    listView.onItemClick(this.item, this)
                }
            });
        },

        setItem: function(item) {
            this.item = item;
            return this;
        },
    });

    tm.define("tm.ui.SimpleListViewItem", {
        superClass: "tm.ui.ListViewItem",

        init: function(width, height, text) {
            this.superInit(width, height);
            this.fromJSON({
                children: {
                    label: {
                        type: "tm.display.Label",
                        init: [text, 24],
                        fillStyle: "white",
                        x: width * -0.5,
                        align: "left",
                    },
                },
            });

            this.setItem(text);
        },

        setItem: function(item) {
            this.label.text = item;
            return tm.ui.ListViewItem.prototype.setItem.call(this, item);
        },

        setTextColor: function(color) {
            this.textColor = color;
            return this;
        },
    });

    tm.ui.SimpleListViewItem.prototype.accessor("textColor", {
        set: function(v) {
            this.label.fillStyle = v;
        },
        get: function() {
            return this.label.fillStyle;
        },
    });

})();
