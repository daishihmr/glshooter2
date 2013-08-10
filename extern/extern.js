tm.app.Object2D.prototype.accessor("boundingWidthLeft", {
    "get": function() {
        return this._boundingWidthLeft;
    },
    "set": function(v) {
        this._boundingWidthLeft = v;
    }
});
tm.app.Object2D.prototype.accessor("boundingWidthRight", {
    "get": function() {
        return this._boundingWidthRight;
    },
    "set": function(v) {
        this._boundingWidthRight = v;
    }
});
tm.app.Object2D.prototype.accessor("boundingHeightTop", {
    "get": function() {
        return this._boundingHeightTop;
    },
    "set": function(v) {
        this._boundingHeightTop = v;
    }
});
tm.app.Object2D.prototype.accessor("boundingHeightBottom", {
    "get": function() {
        return this._boundingHeightBottom;
    },
    "set": function(v) {
        this._boundingHeightBottom = v;
    }
});

tm.app.Object2D.prototype.setter("boundingWidth", function(v) {
    this.boundingWidthLeft = v*0.5;
    this.boundingWidthRight = v*0.5;
});
tm.app.Object2D.prototype.setter("boundingHeight", function(v) {
    this.boundingHeightTop = v*0.5;
    this.boundingHeightBottom = v*0.5;
});

tm.app.Object2D.prototype.setter("boundingRadius", function(v) {
    this.boundingWidth = v;
    this.boundingHeight = v;
});

tm.app.Object2D.prototype.boundingWidthLeft = 0;
tm.app.Object2D.prototype.boundingWidthRight = 0;
tm.app.Object2D.prototype.boundingHeightTop = 0;
tm.app.Object2D.prototype.boundingHeightBottom = 0;
tm.app.Object2D.prototype.boundingWidth = 0;
tm.app.Object2D.prototype.boundingHeight = 0;
tm.app.Object2D.prototype.boundingRadius = 0;


/**
 * 空中物の高度
 */
tm.app.CanvasElement.prototype.accessor("altitude", {
    "get": function() {
        return this._altitude;
    },
    "set": function(v) {
        this._altitude = v;
        if (this._altitude > 0) {
            this.shadowColor = "rgba(0,0,0,0.5)";
            this.shadowBlur = 30;
            this.shadowOffsetX = 2 * this._altitude;
            this.shadowOffsetY = 7 * this._altitude;
        } else {
            this.shadowBlur = 0;
        }
    },
});

/** @class */
tm.app.Label = tm.createClass(
/** @lends {tm.app.Label.prototype} */
{
    superClass: tm.app.Label,
    init: function(text, size) {
        this.superInit(text, size);
        this.setAlign("center");
        this.setBaseline("middle");
        this.setFontFamily("Orbitron");

        this.fillStyle = "white";

        this.isHitPoint = this.isHitPointRect;
    },
    update: function(app) {
        this.alpha = 0.8 + Math.sin(app.frame * 0.1) * 0.2;
    },
});

// var generateRandom = function() {
//     var mt = new MersenneTwister(0);
//     var _randoms = [];
//     for (var i = 0; i < 1000; i++) {
//         _randoms.push(mt.next());
//     }
//     var index = 0;
//     Math.random = function() {
//         index = (index+1) % _randoms.length;
//         return _randoms[index];
//     };
// };

// tm.setLoop = function(fn, delay) {
//     var temp = function() {
//         fn();
//         setTimeout(arguments.callee, delay);
//     };
//     setTimeout(temp, delay);
// };
