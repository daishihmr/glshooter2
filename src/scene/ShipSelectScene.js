gls2.ShipSelectScene = tm.createClass({
    superClass: gls2.Scene,
    init: function() {
        this.superInit();
        tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(SC_W/2,SC_H/2).addChildTo(this);
    },
});
