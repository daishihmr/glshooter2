(function() {

var MAIN_MENU = 0;
var OPTION_MENU = 1;
var GAME = 2;

gls2.TitleScene = tm.createClass({
    superClass: gls2.Scene,
    result: null,
    init: function() {
        this.superInit();
        tm.app.Label("press z key").setPosition(SC_W * 0.5, SC_H * 0.5).setAlign("center").addChildTo(this);
    },
    update: function(app) {
        if (app.keyboard.getKeyDown("z")) {
            this.openDialogMenu(MAIN_MENU, [ "START", "OPTION", "EXIT" ]);
        }
    },
    onResult: function(requestCode, result) {
        if (requestCode === MAIN_MENU) { // main menu
            switch(result) {
            case 0: // start
                this.startScene(GAME, gls2.GameScene);
                break;
            case 1: // option
                this.openOptionDialog();
                break;
            case 2: // exit
                gls2.core.exitApp();
                break;
            }
        } else if (requestCode === OPTION_MENU) { // option menu
            console.log(result)
        }
    },
    openOptionDialog: function() {
        this.openDialogMenu(OPTION_MENU, [ "BGM", "SE", "EXIT" ]);
    }
});

})();
