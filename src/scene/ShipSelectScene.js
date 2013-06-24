/** @class */
gls2.ShipSelectScene = tm.createClass(
/** @lends {gls2.ShipSelectScene.prototype} */
{
    superClass: gls2.Scene,
    /** @constructs */
    init: function() {
        this.superInit();
        tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(SC_W/2,SC_H/2).addChildTo(this);
    },
});
