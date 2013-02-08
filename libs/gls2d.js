/** @namespace */
var glslib = {};

(function(undefined) {

/**
 * @constructor
 * @param {HTMLCanvasElement} canvas
 */
glslib.Scene = function(canvas) {
    this.canvas = canvas;
    var ctx = this.ctx = canvas.getContext("2d");

    this.children = [];
    this._removedChildren = [];

    this.frame = 0;

    this.update = function() {};

    console.log("2d scene created.");
};

/**
 * 
 */
glslib.Scene.prototype._update = function() {
    this.update();

    var children = this.children;
    var removedChildren = this._removedChildren;

    for (var i = 0, len = children.length; i < len; i++) {
        var c = children[i];
        c._update();
    }

    for (var i = 0, len = removedChildren.length; i < len; i++) {
        var index = this.children.indexOf(removedChildren[i]);
        if (index != -1) children.splice(index, 1);
    }
    this._removedChildren = [];

    this.frame++;
};

/**
 * 
 */
glslib.Scene.prototype._draw = function() {
    var children = this.children;
    var ctx = this.ctx;
    var program = this.program;

    this.ctx.globalCompositeOperation = "copy";
    this.ctx.fillStyle = "rgba(0,0,0,0)";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.globalCompositeOperation = "source-over";
    for (var i = 0, len = children.length; i < len; i++) {
        children[i]._draw(this.canvas, ctx);
    }
};

/**
 * 
 */
glslib.Scene.prototype.hide = function() {
    this.canvas.style.display = "none";
};

/**
 * @param {glslib.Sprite} sprite
 */
glslib.Scene.prototype.addChild = function(sprite) {
    var c = this.children;
    c[c.length] = sprite;
    sprite.parent = this;
    sprite.uniforms = this.uniformLocationsForSprite;
};

/**
 * @param {glslib.Sprite} sprite
 */
glslib.Scene.prototype.removeChild = function(sprite) {
    if (sprite.parent !== this) return;
    sprite.parent = null;
    this._removedChildren[this._removedChildren.length] = sprite;
    sprite.onremoved();
};

/**
 * @constructor
 * @param {Image=} texture
 */
glslib.Sprite = function(texture) {
    this.age = 0;
    this.parent = null;

    this.x = 0;
    this.y = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    this.rotation = 0;

    this.texX = 0;
    this.texY = 0;
    this.texScale = 1;

    this.visible = true;

    this.alpha = 1;

    this.texture = null;
    if (texture) {
        this.texture = texture;
    }

    this.update = function() {};
    this.onremoved = function() {};
};

/**
 *
 */
glslib.Sprite.prototype._update = function() {
    this.update();
};

/**
 */
glslib.Sprite.prototype._draw = function(canvas, ctx) {
    if (!this.visible) return;

    var x = (this.x + 16) * canvas.width/32;
    var y = (16 - this.y) * canvas.height/32;
    var w = 2 * this.scaleX * canvas.width/32;
    var h = 2 * this.scaleY * canvas.height/32;

    if (this.texture != null) {
        ctx.globalAlpha = this.alpha;
        ctx.drawImage(this.texture, this.texX*64, this.texY*64, 64*this.texScale, 64*this.texScale, x-w/2, y-h/2, w, h);
    }
};

/**
 * @param {HTMLElement} domElement
 */
glslib.fitWindow = function(domElement) {
    domElement.style.position = "absolute";
    domElement.style.top = 0;
    domElement.style.left = 0;
    if (window.innerHeight < window.innerWidth) {
        domElement.width = window.innerHeight;
        domElement.height = window.innerHeight;
    } else {
        domElement.width = window.innerWidth;
        domElement.height = window.innerWidth;
    }
};

/**
 * @param {Image} image
 */
glslib.createTexture = function(ctx, image) {
    return image;
};

/**
 * @param {Object.<string,Image>} images
 */
glslib.createTextures = function(ctx, images) {
    var result = {};
    for (var key in images) {
        result[key] = glslib.createTexture(ctx, images[key]);
    }
    return result;
};

/**
 * @constructor
 * @param {function():*} generatingFunction
 * @param {number=} initialSize
 * @param {number=} incremental
 */
glslib.Pool = function(generatingFunction, initialSize, incremental) {
    this.generatingFunction = generatingFunction;
    this.incremental = incremental || 100;

    this._pool = [];
    for (var i = 0, len = initialSize || 100; i < len; i++) {
        this._pool[this._pool.length] = generatingFunction();
    }
};

/**
 * @return {*}
 */
glslib.Pool.prototype.get = function() {
    var p = this._pool.pop();
    if (p) {
        return p;
    } else {
        for (var i = 0; i < this.incremental; i++) {
            this._pool[this._pool.length] = this.generatingFunction();
        }
        return this._pool.pop();
    }
};

/**
 * param {*} obj
 */
glslib.Pool.prototype.dispose = function(obj) {
    this._pool[this._pool.length] = obj;
};

})();
