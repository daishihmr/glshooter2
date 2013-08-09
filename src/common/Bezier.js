(function() {

tm.graphics.Bezier = {
    /**
     * @param {Array.<Array.<number>>} points 制御点の配列
     * @param {number} t 0.0～1.0
     */
    b: function(points, t) {
        return points.length <= 1 ? points[0] : arguments.callee(points.slice(0, points.length-1).map(function(vi, i) {
            return vi.map(function(vj, j) {
                return vj + (points[i+1][j] - vj) * t;
            });
        }), t);
    },
};

/**
 * @param {Array.<Object>} points 制御点の配列 [{x:0, y:0}, {x:1, y:1}, ...]
 * @param {number=} split 分割数(デフォルト:10)
 */
tm.graphics.Canvas.prototype.bezierCurve = function(points, split) {
    split = split || 10;
    var _points = [];
    for (var i = -1; points[++i] !== undefined;) {
        _points[i] = [points[i].x, points[i].y];
    }

    var vertices = [];
    for (var i = 0; i <= split; i++) {
        var p = tm.graphics.Bezier.b(_points, i/split);
        vertices.push(p[0]);
        vertices.push(p[1]);
    }
    this.lines.apply(this, vertices);
    return this;
};

/**
 * @param {Array.<Object>} points 制御点の配列 [{x:0, y:0}, {x:1, y:1}, ...]
 * @param {number=} split 分割数(デフォルト:10)
 */
tm.graphics.Canvas.prototype.strokeBezierCurve = function(points, split) {
    this.beginPath();
    this.bezierCurve(points, split);
    this.stroke();
    return this;
};

/**
 * @param {Array.<Object>} points 制御点の配列 [{x:0, y:0}, {x:1, y:1}, ...]
 * @param {number=} split 分割数(デフォルト:10)
 */
tm.graphics.Canvas.prototype.fillBezierCurve = function(points, split) {
    this.beginPath();
    this.bezierCurve(points, split);
    this.fill();
    return this;
};

})();
