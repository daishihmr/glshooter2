var achievementData = null;
tm.google.SigninButton("#signinButton", {
        clientid: gpgsConstants.CLIENT_ID,
    }).event
    .add("signin", function() {
        console.log("signin to google");

        // load achievement definitions
        var req = gapi.client.games.achievementDefinitions.list({
            language: "ja",
        });
        req.execute(function(res) {
            if (res.error) {
                return;
            }

            achievementData = {};
            for (var i = 0, iend = res.items.length; i < iend; i++) {
                var item = res.items[i];
                achievementData[item.id] = {
                    name: item.name,
                    experiencePoints: item.experiencePoints,
                };
            }

            var req2 = gapi.client.games.achievements.list({
                playerId: "me",
            });
            req2.execute(function(res) {
                if (res.error) {
                    return;
                }
                for (var i = 0, iend = res.items.length; i < iend; i++) {
                    var item = res.items[i];
                    achievementData[item.id].unlocked = (item.achievementState === "UNLOCKED");
                    achievementData[item.id].waiting = false;
                }

                console.log("ok");
            });
        });
    })
    .add("signout", function() {
        console.log("signout from google");
    });