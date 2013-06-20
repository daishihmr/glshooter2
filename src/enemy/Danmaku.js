var Danmaku = {};

(function() {

var config = tm.bulletml.AttackPattern.defaultConfig;
config.isInsideOfWorld = function(b) {
    return !(b.x < -50 || SC_W+50 < b.x || b.y < -50 || SC_H+50 < b.y);
};
config.bulletFactory = function(spec) {
    return tm.app.CircleShape(12, 12, {
        strokeStyle: "red",
        fillStyle: "white",
    });
};
config.speedRate = 3;

var $ = bulletml.dsl;

/** 自機狙い弾 */
var fire0 = $.fire($.direction(0), $.bullet());

Danmaku.basic0 = new bulletml.Root({
    top: $.action([
        fire0,
    ]),
});

})();
