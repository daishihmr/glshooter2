(function() {

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
tm.display.CanvasElement.prototype.accessor("altitude", {
    "get": function() {
        return this._altitude;
    },
    "set": function(v) {
        this._altitude = v;
        if (this._altitude > 0) {
            this.shadowColor = "rgba(0,0,0," + (0.5+0.5*(1-v/10)) + ")";
            this.shadowBlur = 50 * v/10;
            this.shadowOffsetX = 2 * this._altitude;
            this.shadowOffsetY = 7 * this._altitude;
        } else {
            this.shadowBlur = 0;
        }
    },
});

/** @class */
tm.display.Label = tm.createClass(
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

tm.display.SpriteSheet = tm.asset.SpriteSheet;

var origGetKey = tm.input.Keyboard.prototype.getKey;
tm.input.Keyboard.prototype.getKey = function(key) {
    if (key === "left")       return origGetKey.call(this, "left")  || origGetKey.call(this, "a");
    else if (key === "up")    return origGetKey.call(this, "up")    || origGetKey.call(this, "w");
    else if (key === "right") return origGetKey.call(this, "right") || origGetKey.call(this, "d");
    else if (key === "down")  return origGetKey.call(this, "down")  || origGetKey.call(this, "s");
    else if (key === "z")     return origGetKey.call(this, "z")     || origGetKey.call(this, "l") || origGetKey.call(this, "numpad3");
    else if (key === "x")     return origGetKey.call(this, "x")     || origGetKey.call(this, "k") || origGetKey.call(this, "numpad2");
    else if (key === "c")     return origGetKey.call(this, "c")     || origGetKey.call(this, "j") || origGetKey.call(this, "numpad1");
    else return origGetKey.call(this, key);
};

var origGetKeyDown = tm.input.Keyboard.prototype.getKeyDown;
tm.input.Keyboard.prototype.getKeyDown = function(key) {
    if (key === "left")       return origGetKeyDown.call(this, "left")  || origGetKeyDown.call(this, "a");
    else if (key === "up")    return origGetKeyDown.call(this, "up")    || origGetKeyDown.call(this, "w");
    else if (key === "right") return origGetKeyDown.call(this, "right") || origGetKeyDown.call(this, "d");
    else if (key === "down")  return origGetKeyDown.call(this, "down")  || origGetKeyDown.call(this, "s");
    else if (key === "z")     return origGetKeyDown.call(this, "z")     || origGetKeyDown.call(this, "l") || origGetKeyDown.call(this, "numpad3");
    else if (key === "x")     return origGetKeyDown.call(this, "x")     || origGetKeyDown.call(this, "k") || origGetKeyDown.call(this, "numpad2");
    else if (key === "c")     return origGetKeyDown.call(this, "c")     || origGetKeyDown.call(this, "j") || origGetKeyDown.call(this, "numpad1");
    else return origGetKeyDown.call(this, key);
};


var random ={
    data: [],
    pointerI: 0,
    pointerJ: 0
};
var mt = new MersenneTwister(12345);
for (var i = 0; i < 500; i++) {
    random.data[i] = [];
    for (var j = 0; j < 30; j++) {
        random.data[i][j] = mt.next();
    }
}

Math["origRandom"] = Math.random;
Math.random = function() {
    var r = random.data[random.pointerI][random.pointerJ];
    random.pointerJ = (random.pointerJ + 1) % random.data[random.pointerI].length;
    return r;
};
Math.random.reset = function() {
    random.pointerI = 0;
    random.pointerJ = 0;
};
Math.random.set = function(i) {
    random.pointerI = i;
    random.pointerJ = 0;
};

})();
