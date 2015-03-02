var Games = null;
var Data = {
    mode: 0,
    leaderboards: [],
    leaderboardId: null,
    window: "MY SCORE",
    collection: "PUBLIC",
    timeSpan: "ALL_TIME",
    scores: [],
    achievements: [],
};

var model = new Ractive({
    el: "#list",
    template: "#template",
    data: Data,
    load: function() {
        Data.leaderboards.splice(0, Data.leaderboards.length);
        Data.scores.splice(0, Data.leaderboards.length);
        Data.achievements.splice(0, Data.leaderboards.length);

        switch (this.get("mode")) {
        case 0:
            var req = Games.leaderboards.list({
                language: "ja",
            });
            req.execute(function(res) {
                if (!res.error && res.items) {
                    Data.leaderboards.splice(0, Data.leaderboards.length);
                    for (var i = 0, end = res.items.length; i < end; i++) {
                        var item = res.items[i];
                        Data.leaderboards.push(item);
                    }
                } else if (res.error) {
                    console.error(res.error);
                }
            });
            break;
        case 1:
            var req = Games.scores[this.data.window === "MY SCORE" ? "listWindow" : "list"]({
                collection: this.data.collection,
                timeSpan: this.data.timeSpan,
                leaderboardId: this.data.leaderboardId,
                language: "ja",
            });
            req.execute(function(res) {
                if (!res.error && res.items) {
                    Data.scores.splice(0, Data.scores.length);
                    for (var i = 0, end = res.items.length; i < end; i++) {
                        var item = res.items[i];
                        Data.scores.push(item);
                    }
                } else if (res.error) {
                    console.error(res.error);
                }
            });
            break;
        case 2:
            var req = Games.achievementDefinitions.list({
                language: "ja",
            });
            req.execute(function(res) {
                console.log(res);
                if (!res.error && res.items) {
                    var map = {};

                    for (var i = 0, end = res.items.length; i < end; i++) {
                        var item = res.items[i];
                        item.icon = "";
                        item.mydata = {
                            achievementState: "HIDDEN",
                        };
                        map[item.id] = item;
                    }

                    var req = Games.achievements.list({
                        playerId: "me",
                        language: "ja",
                    });
                    req.execute(function(res) {
                        console.log(res);
                        if (!res.error && res.items) {
                            for (var i = 0, end = res.items.length; i < end; i++) {
                                var item = res.items[i];
                                var achivement = map[item.id];
                                if (item.achievementState === "UNLOCKED") {
                                    achivement.icon = achivement.unlockedIconUrl;
                                    var d = new Date(Number(item.lastUpdatedTimestamp));
                                    console.log(item.lastUpdatedTimestamp);
                                    console.log(d);
                                    achivement.date = d.toLocaleDateString() + " " + d.toLocaleTimeString();
                                } else if (item.achievementState === "HIDDEN") {
                                    achivement.name = "？？？";
                                    achivement.description = "秘密の実績です";
                                    achivement.icon = "";
                                    achivement.date = "";
                                } else {
                                    achivement.icon = achivement.revealedIconUrl;
                                    achivement.date = "";
                                }
                                achivement.mydata = item;
                            }

                            Data.achievements.splice(0, Data.achievements.length);
                            for (var id in map) if (map.hasOwnProperty(id)) {
                                Data.achievements.push(map[id]);
                            }
                        } else if (res.error) {
                            console.error(res.error);
                        }
                    });

                } else if (res.error) {
                    console.error(res.error);
                }
            });

            break;
        }
    },
    onChangeTimeSpan: function(timeSpan) {
        this.set("timeSpan", timeSpan);
        this.load();
    },
    onChangeCollection: function(collection) {
        this.set("collection", collection);
        this.load();
    },
    onChangeWindow: function(window) {
        this.set("window", window);
        this.load();
    },
    onLeadarboardClick: function(id) {
        this.set("mode", 1);
        this.set("leaderboardId", id);
        this.load();
    },
    onScoreClick: function(id) {
    },
    onAchievementClick: function(id) {
    },
});

var onChangeMode = function(mode) {
    model.set("mode", mode);
    model.load();
    if (mode === 0) {
        $("#mode-leaderboard").addClass("active");
        $("#mode-achievement").removeClass("active");
    } else {
        $("#mode-leaderboard").removeClass("active");
        $("#mode-achievement").addClass("active");
    }
};

var apiProcessing = false;
var apiTasks = [];
var processApiTask = function() {
    if (apiProcessing) return;

    var task = apiTasks.shift();
    if (task) {
        apiProcessing = true;
        task.execute(function(res) {
            apiProcessing = false;
            task.callback(res);
        });
    }
};

var task = {}
task.callback = function() {};
task.execute = function() {};

window.onload = function() {
    Games = window.opener.gapi.client.games;
    model.load();
};
