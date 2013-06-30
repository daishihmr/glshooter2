(function() {

var bulletPool = [];
var activeList = [];

gls2.Bullet = tm.createClass({
    superClass: tm.app.Sprite,
    init: function() {
        this.superInit("tex0", 20, 20);
        this.addEventListener("removed", function() {
            bulletPool.push(this);
            var idx = activeList.indexOf(this);
            if (idx !== -1) activeList.splice(idx, 1);

            this.clearEventListener("enterframe");
        });
    },
});

gls2.Danmaku = {};
gls2.Danmaku.setup = function() {
    for (var i = 0; i < 255; i++) {
        bulletPool.push(gls2.Bullet());
    }

    var config = tm.bulletml.AttackPattern.defaultConfig;
    config.isInsideOfWorld = function(b) {
        return !(b instanceof gls2.Bullet) || !(b.x < -50 || SC_W+50 < b.x || b.y < -50 || SC_H+50 < b.y);
    };
    config.bulletFactory = function(spec) {
        var b = bulletPool.shift(0);
        if (b) {
            activeList.push(b);
            b.setFrameIndex(1);
            b.scaleX = 1.2;
            b.scaleY = 1.5;

            b.addEventListener("enterframe", function() {
                this.rotation += 15;
            });

            return b;
        } else {
            console.warn("弾が足りない！");
        }
    };
    config.speedRate = 4;
};

gls2.Danmaku.clearAll = function() {
    var copied = [].concat(activeList);
    for (var i = 0, end = copied.length; i < end; i++) {
        copied[i].remove();
    }
};

var $ = bulletml.dsl;

/** 自機狙い弾 */
var fire0 = $.fire($.direction(0), $.bullet());

gls2.Danmaku["basic0-0"] = new bulletml.Root({
    top: $.action([
        fire0,
    ]),
});

gls2.Danmaku["basic0-4"] = new bulletml.Root({
    top: $.action([
        $.repeat(3, [
            $.repeat(5, [
                $.fire($.direction(-20), $.speed("$loop.count*0.06+0.75"), $.bullet()),
                $.fire($.direction(  0), $.speed("$loop.count*0.06+0.75"), $.bullet()),
                $.fire($.direction(+20), $.speed("$loop.count*0.06+0.75"), $.bullet()),
            ]),
            $.wait(40),
        ]),
    ]),
});

/**
 * 自機狙い弾を20フレーム間隔で連射.
 */
gls2.Danmaku["basic1-0"] = new bulletml.Root({
    top: $.action([
        $.repeat(999, [
            fire0,
            $.wait(20),
        ]),
    ]),
});


/**
 * 自機狙い弾をランダム間隔で連射.
 */
gls2.Danmaku["basic2-0"] = new bulletml.Root({
    top: $.action([
        $.wait("120"),
        $.repeat(999, [
            $.wait("50*$rand*5"),
            fire0,
        ]),
    ]),
});

})();
