/** @namespace */
var glslib = {};

(function(mat4, undefined) {

/**
 * @constructor
 * @param {HTMLCanvasElement} canvas
 */
glslib.Scene = function(canvas) {
    /** @type {WebGLRenderingContext} */
    this.gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

    /** @type {WebGLRenderingContext} */
    var gl = this.gl;
    if (!gl) {
        window.alert("failed initialize WebGL");
        throw new Error("failed initialize WebGL.");
    }

    gl.clearColor(0, 0, 0, 0);
    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    var program = this.program = createProgram(
        gl,
        createShader(gl, "vs", VERTEX_SHADER),
        createShader(gl, "fs", FRAGMENT_SHADER));

    var attrPosition = gl.getAttribLocation(program, "position");
    var positionBuffer = createVbo(gl, VERTICES);
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.enableVertexAttribArray(attrPosition);
    gl.vertexAttribPointer(attrPosition, 3, gl.FLOAT, false, 0, 0);

    var attrTexCoord = gl.getAttribLocation(program, "texCoord");
    var texCoordBuffer = createVbo(gl, TEXTURE_COORDS);
    gl.bindBuffer(gl.ARRAY_BUFFER, texCoordBuffer);
    gl.enableVertexAttribArray(attrTexCoord);
    gl.vertexAttribPointer(attrTexCoord, 2, gl.FLOAT, false, 0, 0);

    this.viewMat = mat4.identity(mat4.create());
    this.projMat = mat4.identity(mat4.create());

    mat4.lookAt([0,0,16], [0,0,0], [0,1,0], this.viewMat)
    mat4.ortho(-16, 16, -16, 16, 0.1, 32, this.projMat);

    gl.activeTexture(gl.TEXTURE0);
    gl.uniform1f(gl.getUniformLocation(program, "texture"), 0);

    this.uniformLocationsForSprite = getUniformLocationsForSprite(gl, program, ["status"]);

    this.updateMatrix();

    this.children = [];
    this._removedChildren = [];

    this.frame = 0;

    this.update = function() {};

    this.createGlowTexture();

    console.log("3d scene created.");
};

/**
 * 
 */
glslib.Scene.prototype.updateMatrix = function() {
    var temp = mat4.create();
    mat4.multiply(this.projMat, this.viewMat, temp);
    this.gl.uniformMatrix4fv(this.gl.getUniformLocation(this.program, "pvMat"), false, temp);
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
    removedChildren.splice(0);

    this.frame += 1;
};

/**
 * 
 */
glslib.Scene.prototype._draw = function() {
    var children = this.children;
    var gl = this.gl;
    gl.clear(gl.COLOR_BUFFER_BIT);

    for (var i = 0, len = children.length; i < len; i++) {
        children[i]._draw(gl);
    }

    gl.flush();
};

/**
 * 
 */
glslib.Scene.prototype.clear = function() {
    var gl = this.gl;
    gl.clear(gl.COLOR_BUFFER_BIT);
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
 *
 */
glslib.Scene.prototype.createGlowTexture = function() {
    var gl = this.gl;
    var image = new Image();
    image.src = GLOW_TEXTURE_IMAGE;
    image.onload = function() {
        glslib.Sprite.glowTexture = glslib.createTexture(gl, this);
    };
};

/**
 * @constructor
 */
glslib.Layer = function() {

};

/**
 * @constructor
 * @param {WebGLTexture=} texture
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
    this.glow = 0;

    this.texture = null;
    if (texture) {
        this.texture = texture;
    }

    this.uniforms = {};
    this.status = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

    this.update = function() {};
    this.onremoved = function() {};
};

/**
 *
 */
glslib.Sprite.prototype._update = function() {
    this.update();
    this.age += 1;
};

/**
 * @param {WebGLRenderingContext} gl
 */
glslib.Sprite.prototype._draw = function(gl) {
    if (!this.visible) return;

    gl.bindTexture(gl.TEXTURE_2D, this.texture);

    var status = this.status;
    status[0] = this.x;
    status[1] = this.y;
    status[2] = this.scaleX;
    status[3] = this.scaleY;
    status[4] = this.rotation;
    status[5] = this.texX;
    status[6] = this.texY;
    status[7] = this.texScale;
    status[8] = this.alpha;
    gl.uniformMatrix4fv(this.uniforms["status"], false, status);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    if (this.glow > 0) {
        gl.bindTexture(gl.TEXTURE_2D, glslib.Sprite.glowTexture);
        status[2] = this.scaleX * 2;
        status[3] = this.scaleY * 2;
        status[4] = 0;
        status[5] = 0;
        status[6] = 0;
        status[7] = 8;
        status[8] = this.glow;
        gl.uniformMatrix4fv(this.uniforms["status"], false, status);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
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
}

/**
 * @param {WebGLRenderingContext} gl
 * @param {Image} image
 */
glslib.createTexture = function(gl, image) {
    var tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, image);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.bindTexture(gl.TEXTURE_2D, null);
    return tex;
};

/**
 * @param {WebGLRenderingContext} gl
 * @param {Object.<string,Image>} images
 */
glslib.createTextures = function(gl, images) {
    var result = {};
    for (var key in images) {
        result[key] = glslib.createTexture(gl, images[key]);
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

/**
 * @param {WebGLRenderingContext} gl
 * @param {Array.<number>} data
 */
function createVbo(gl, data) {
    var vbo = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);
    return vbo;
}

/**
 * @param {WebGLRenderingContext} gl
 * @param {WebGLShader} vs
 * @param {WebGLShader} fs
 * @return {WebGLProgram}
 */
function createProgram(gl, vs, fs) {
    var program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (gl.getProgramParameter(program, gl.LINK_STATUS)) {
        gl.useProgram(program);
        return program;
    } else {
        alert(gl.getProgramInfoLog(program));
        throw new Error();
    }
}

/**
 * @param {WebGLRenderingContext} gl
 * @param {string} type
 * @param {string} script
 * @return {WebGLShader}
 */
function createShader(gl, type, script) {
    var shader;
    switch (type) {
        case "vs":
            shader = gl.createShader(gl.VERTEX_SHADER);
            break;
        case "fs":
            shader = gl.createShader(gl.FRAGMENT_SHADER);
            break;
        default:
            throw new Error();
    }

    gl.shaderSource(shader, script);
    gl.compileShader(shader);

    if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        return shader;
    } else {
        alert(gl.getShaderInfoLog(shader));
        throw new Error();
    }
}

/**
 * @param {WebGLRenderingContext} gl
 * @param {WebGLProgram} program
 * @param {Array.<string>} names
 */
function getUniformLocationsForSprite(gl, program, names) {
    var result = {};
    names.map(function(name) {
        result[name] = gl.getUniformLocation(program, name);
    });
    return result;
}

var VERTICES = [
    -1,  1, 0,
    -1, -1, 0,
     1,  1, 0,
     1, -1, 0
];

var TEXTURE_COORDS = [
    0, 0,
    0, 64/512,
    64/512, 0,
    64/512, 64/512
];

var VERTEX_SHADER = "\n\
attribute vec3 position;\n\
attribute vec2 texCoord;\n\
uniform mat4 pvMat;\n\
uniform mat4 status;\n\
varying vec2 vTextureCoord;\n\
varying float vAlpha;\n\
\n\
mat4 model(vec2 xy, vec2 scale, float rot) {\n\
    mat4 result = mat4(\n\
        1.0, 0.0, 0.0, 0.0,\n\
        0.0, 1.0, 0.0, 0.0,\n\
        0.0, 0.0, 1.0, 0.0,\n\
        0.0, 0.0, 0.0, 1.0\n\
    );\n\
    result = result * mat4(\n\
        1.0, 0.0, 0.0, 0.0,\n\
        0.0, 1.0, 0.0, 0.0,\n\
        0.0, 0.0, 1.0, 0.0,\n\
        xy.x, xy.y, 0.0, 1.0\n\
    );\n\
    result = result * mat4(\n\
        scale.x, 0.0, 0.0, 0.0,\n\
        0.0, scale.y, 0.0, 0.0,\n\
        0.0, 0.0, 1.0, 0.0,\n\
        0.0, 0.0, 0.0, 1.0\n\
    );\n\
    result = result * mat4(\n\
        cos(radians(rot)), -sin(radians(rot)), 0.0, 0.0,\n\
        sin(radians(rot)), cos(radians(rot)), 0.0, 0.0,\n\
        0.0, 0.0, 1.0, 0.0,\n\
        0.0, 0.0, 0.0, 1.0\n\
    );\n\
    return result;\n\
}\n\
\n\
void main(void) {\
    vAlpha = status[2][0];\n\
    vTextureCoord = vec2(status[1][1]*0.125, status[1][2]*0.125) + (texCoord * status[1][3]);\n\
    gl_Position = pvMat * model(vec2(status[0][0], status[0][1]), vec2(status[0][2], status[0][3]), status[1][0]) * vec4(position, 1.0);\n\
}\n\
";

var FRAGMENT_SHADER = "\
precision mediump float;\n\
\n\
uniform sampler2D texture;\n\
varying vec2 vTextureCoord;\n\
varying float vAlpha;\n\
\n\
void main(void) {\n\
    vec4 col = texture2D(texture, vTextureCoord);\n\
    gl_FragColor = clamp(vec4(col.rgb, col.a * vAlpha), 0.0, 1.0);\n\
}\n\
";

var GLOW_TEXTURE_IMAGE = "data:image/png;base64,\
iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFa0lEQVR4Xu2biXLbMAxE697//7VJerhcBat\
ZrQGSvtLGqmY0suW09j4uAF46fHjD43g8HtrX8cy++dhuHg+HA65vcuDH3O1ogj+2/1zPKQCA0M7fPBsQvL\
7LcXMAIfpT+7U4XTzeDx0QwjcQ2r1fOG8N42YAmnAI/hzCKV4h4LsuBQDxcMECoZ0/Gwhcrz6uBmDCFYA7g\
G6YdcAaAiZ+AXArEBcDiIT2JVodwl38KAyy1qPtU/uLAwgBIHD+uDRxXgQgWh3iMwCzYTAL4MT+bP0QvwAI\
CGeHxdkAmngKp3iF4HnAXcA8APH+3Sx9sL46gHG/xr8BgHiFgPfTxzQAsbwCmIEwWwqXPoCJZx6YEk8nnBM\
SUwBC/NewvANwCJkLZvoCFQB1wJr8Quza8io+Xr/M5IUhABNPCAoDMa8QFAA+g3gvh1klyAAw/lU47qntFc\
ILxc9CmAEAsXpCbOYGVgK9ag4ghKo36ACy5Mesv2Z/a3kFgNdwAa7l0QUQCc8BZC7IKkKvT9BzgNZ/t78CW\
DK/nCfiASAglImxBBCl7pu0Pl/TAVVOcCdU/YGsClT1f9TyELiIlRB4lnvPVc8xBRBxD8EZAA8HDQnNB1nn\
qNcb9ApQtb7GPwUrAILYAGhaAOFklFkBgEiK9+tMTshcoMlwFAIa/73WL20PweGA9ZrlgxMAYn11wAjCKCl\
WYaDJacb+WdyzxfV6Ij6AnIRCBoDC9UpHVCExqgwE4OWwApDZf5T0TiwvDsBny9lcgOt6bABI63+PEOhBUB\
gMi14+yLrFIwBa7ljvK9trq/trAngKCOuYwQFkra8w3AkZBA+HKhlmVUDH/Dri83Lntu+JX0TrqS5Yf0TM5\
KjYzAVVeGjSzMJBIWi3WB3g9T/r7JRlzkUm7xXEE2eWFAB+eAZgBoQC0HDwkaOHQQZABz69pFfZfNPa7Qso\
3AEsnSMFQKHVFa3fg5FBYDiwf8BxAl2QAWC/3+t9leVdMN5vxIYbNiCaA/D+FYDYPxPv92ZAEIaHg3aPtS/\
ATlDW+rR9luWr1lYIEOouWO4hDAgAPwxCVay/V+EZlKxiZOGgYUAHsg9AAFnS61k+E5hB0L8DgJ8EgB86Au\
Bw3AkeHh4SPmDiDPFiwnYiCXri826ttnhl841Isb87AQBeCCBr+XOAZO7wsQTdoBVBHaBlLytzm1pe2bonO\
P7NCgJ54BADH4qtROvnFJv9beUKL5OEoAC09QFALT/b2t76FHvS+oQBALCiA+gJHsFSQFW/gTNI+G4ctD9H\
dVVmzwQy1l1sKVqdAABIShUAb+0eqFHIeJIEBHw3Dk5zseUzu08JMpsP/80IwIzgc92jIBAKOGB/T3DaoqN\
Wrlp/eP/eAEYAAQPH3QQWjljB/AcwyAGjFhx9nuWQdxUCu0iCuy+D6IyMavvjdoSQglse2G9XOADsfjC0++\
GwJkIf2T3+hEiSB6rh7WNOiQWA3U+KMgzYU+u1to/s3v+0eLhgvwsjAQDj82rWd2ZV6H0vjXVcsI/FUXOBT\
mpyDbBaC3yc5XHpGbro3kJotSDqa4K+USrmQ5aL7hD5exskAgAGSD6tnQHgXL8vgWU7xbKtchWAapWYS+S+\
VH7bLTIWCpzPJ4DH3yTFZtn1NjmBMLMpyneN+6aIbINUtU1O1wk3D0nE7PFZewWv2igp+cA3R2rSe+ytsgm\
EfW2WllCAZUfiuf7vD01cs1vcw8D3DqU7xmd2ikPbcLO01ikZNepS9z4emNgU7Nf1xH0+MpOERNXpedyHph\
I3ZLH/2I/NJblhnw9OJiDY6dnXo7MOIirG7BNja2qxUeGye/TWzwvrbz27DGZCZ+/9i4/P/wHZcraVmgBTv\
QAAAABJRU5ErkJggg==";

})(mat4);
