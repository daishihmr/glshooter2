/*
 * siginbutton.js
 */

(function() {

    tm.define("tm.google.SigninButton", {
        superClass: "tm.dom.Element",

        init: function(q, param) {
            var self = this;
            this.superInit(q);

            this.signedIn = false;

            this.param = {}.$extend(tm.google.SigninButton.PARAM_DEFAULT, param);

            if (!tm.global[tm.google.SigninButton.SIGNIN_CALLBACK_NAME]) {
                tm.global[tm.google.SigninButton.SIGNIN_CALLBACK_NAME] = this._signinCallback.bind(this);
                tm.util.Script("https://apis.google.com/js/client:platform.js");
                setTimeout(function() {
                    if (tm.global["gapi"] && gapi.signin) {
                        gapi.signin.render(self.element, self.param);
                    } else {
                        setTimeout(arguments.callee, 10);
                    }
                }, 10);
            }
        },

        signOut: function() {
            gapi.auth.signOut();
        },

        isSignedIn: function() {
            return this.signedIn;
        },

        _signinCallback: function(auth) {
            console.log(auth);
            if (auth && auth.error == null) {
                this.visible = false;
                gapi.client.load("games", "v1", function() {
                    this.signedIn = true;
                    var ev = new Event("signin");
                    this.element.dispatchEvent(ev);
                }.bind(this));
            } else if (auth.error === "user_signed_out") {
                this.signedIn = false;
                var ev = new Event("signout");
                this.element.dispatchEvent(ev);
            } else {
                this.signedIn = false;
                var ev = new Event("error");
                this.element.dispatchEvent(ev);
            }
        },
    });

    tm.google.SigninButton.SIGNIN_CALLBACK_NAME = "__googleSigninCallback__" + Math.rand(0, 10000).toString(16) + "_" + Math.rand(0, 10000).toString(16);

    tm.google.SigninButton.PARAM_DEFAULT = {
        clientid: null,
        callback: tm.google.SigninButton.SIGNIN_CALLBACK_NAME,
        cookiepolicy: "single_host_origin",
        scope: "https://www.googleapis.com/auth/games",
        width: "wide",
        height: "short",
        theme: "light",
    };

})();
