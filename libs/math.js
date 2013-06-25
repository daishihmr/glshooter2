/*
 * math.js
 *
 * Google Closure Compiler最適化用
 */

gls2.math = {};

(function() {
    
    /**
     * @class Math
     * 数学
     */
    
    /**
     * クランプ
     */
    gls2.math.clamp = function(x, a, b) {
//        return ( Math.max( Math.min(x, ), min ) )
        return (x < a) ? a : ( (x > b) ? b : x );
    };
    
    /**
     * @property    DEG_TO_RAD
     * Degree to Radian.
     */
    gls2.math.DEG_TO_RAD = Math.PI/180;
    
    
    /**
     * @property    RAD_TO_DEG
     * Radian to Degree.
     */
    gls2.math.RAD_TO_DEG = 180/Math.PI;
    
    /**
     * @method
     * Degree を Radian に変換
     */
    gls2.math.degToRad = function(deg) {
        return deg * gls2.math.DEG_TO_RAD;
    };
    
    /**
     * @method
     * Radian を Degree に変換
     */
    gls2.math.radToDeg = function(rad) {
        return rad * gls2.math.RAD_TO_DEG;
    };
    
    
    
    /**
     * @method
     * ランダムな値を指定された範囲内で生成
     */
    gls2.math.rand = function(min, max) {
        return window.Math.floor( Math.random()*(max-min+1) ) + min;
    };
    
    /**
     * @method
     * ランダムな値を指定された範囲内で生成
     */
    gls2.math.randf= function(min, max) {
        return window.Math.random()*(max-min)+min;
    };

    /**
     * @method
     * 長さを取得
     */
    gls2.math.magnitude = function() {
        return Math.sqrt(gls2.math.magnitudeSq.apply(null, arguments));
    };
    
    
    /**
     * @method
     * 長さの２乗を取得
     */
    gls2.math.magnitudeSq = function() {
        var n = 0;
        
        for (var i=0,len=arguments.length; i<len; ++i) {
            n += arguments[i]*arguments[i];
        }
        
        return n;
    };


    /**
     * @method
     * a <= x <= b のとき true を返す
     */
    gls2.math.inside = function(x, a, b) {
        return (x >= a) && (x) <= b;
    };
    
})();

