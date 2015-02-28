(function() {

    var ITEM_DEFAULT_TEXTURE = null;
    tm.main(function() {
        ITEM_DEFAULT_TEXTURE = tm.graphics.Canvas()
            .resize(512, 512)
            .setStrokeStyle("hsl(180, 60%, 50%)")
            .setLineStyle(20)
            .strokeCircle(256, 256, 160);
    });

    tm.define("tm.google.LeaderboardScene", {
        superClass: "tm.app.Scene",
        init: function(param) {
            var self = this;
            self.superInit();

            param = {}.$extend(tm.google.LeaderboardScene.DEFAULT_PARAM, param);

            self.applicationId = param.applicationId;

            self.fromJSON({
                children: {
                    bg: {
                        type: "tm.display.RectangleShape",
                        init: {
                            width: param.width,
                            height: param.height,
                            strokeStyle: "transparent",
                            fillStyle: param.backgroundColor,
                        },
                        originX: 0,
                        originY: 0,
                    },
                    headerBg: {
                        type: "tm.display.RectangleShape",
                        init: {
                            width: param.width,
                            height: 100,
                            strokeStyle: "transparent",
                            fillStyle: "white",
                            shadowColor: "black",
                            shadowBlur: 15,
                        },
                        originX: 0,
                        y: 50
                    },
                    title: {
                        type: "tm.display.Label",
                        init: ["loading...", 26],
                        x: param.width * 0.5,
                        y: 25,
                        align: "center",
                        fillStyle: "black",
                    },
                    closeButton: {
                        type: "tm.ui.FlatButton",
                        init: {
                            text: "完了",
                            width: 60,
                            height: 32,
                            fontSize: 22,
                        },
                        x: param.width - 32,
                        y: 25,
                        onpush: function() {
                            self.app.popScene();
                        },
                    },
                    buttons: {
                        type: "tm.display.CanvasElement",
                        y: 75,
                        children: {
                            leaderboardButton: {
                                type: "tm.google.LeaderboardScene.Button",
                                init: {
                                    text: "Leaderboard",
                                    width: 130,
                                    height: 32,
                                    fontSize: 18,
                                    backgroundColor: "white",
                                    foregroundColor: param.foregroundColor,
                                },
                                x: param.width * 0.5 - 70,
                            },
                            achievementButton: {
                                type: "tm.google.LeaderboardScene.Button",
                                init: {
                                    text: "達成項目",
                                    width: 130,
                                    height: 32,
                                    fontSize: 18,
                                    backgroundColor: "white",
                                    foregroundColor: param.foregroundColor,
                                },
                                x: param.width * 0.5 + 70,
                                onpush: function() {},
                            },
                        },
                    },

                    listView: {
                        type: "tm.ui.ListView",
                        x: param.width * 0.5,
                        y: 100,
                        width: param.width,
                        height: param.height - 100,
                        getView: function(item, i, view) {
                            if (view) {
                                return view.setItem(item);
                            } else if (item.kind === "games#leaderboard") {
                                return tm.google.LeaderboardScene.Item(400, 80, item);
                            } else {
                                return tm.ui.SimpleListViewItem(400, 40, item).setInteractive(false);
                            }
                        },
                        onItemClick: function(item, view) {
                            self.app.pushScene(tm.google.RankingScene(item, param));
                        },
                    },
                },
            });

            this.buttons.leaderboardButton.selected = true;
            this.buttons.achievementButton.selected = false;

            self._getGameData().then(function() {
                self._getLeaderboardData().then(function() {
                    self.listView.updateItems();
                });
            });
        },

        _getGameData: function() {
            var self = this;

            return new Promise(function(resolve, reject) {

                var req = gapi.client.games.applications.get({
                    applicationId: self.applicationId,
                    language: "ja",
                });
                req.execute(function(res) {
                    if (!res.error) {
                        self.title.text = res.name;
                        self.listView.items.push("Leaderboard: {0}件".format(res.leaderboard_count));

                        resolve();
                    } else {
                        reject(res.error);
                    }
                });

            });
        },

        _getLeaderboardData: function() {
            var self = this;

            return new Promise(function(resolve, reject) {

                var req = gapi.client.games.leaderboards.list({
                    language: "ja",
                });
                req.execute(function(res) {
                    if (!res.error) {
                        res.items.forEach(function(leaderboard) {
                            self.listView.items.push(leaderboard);
                        });
                        self.listView.updateItems();

                        resolve();
                    } else {
                        reject(res.error);
                    }
                });

            });
        },
    });

    tm.google.LeaderboardScene.DEFAULT_PARAM = {
        applicationId: null,
        width: 640,
        height: 960,
        backgroundColor: "rgba(240, 240, 240, 0.90)",
        foregroundColor: "hsl(180, 60%, 50%)",
    };

    tm.define("tm.google.LeaderboardScene.Item", {
        superClass: "tm.ui.ListViewItem",

        init: function(width, height, leaderboard) {
            var self = this;
            this.superInit(width, height);
            this.fromJSON({
                children: {
                    icon: {
                        type: "tm.display.Sprite",
                        init: [ITEM_DEFAULT_TEXTURE, 60, 60],
                        x: -width * 0.5 + 40,
                        y: 0,
                    },
                    title: {
                        type: "tm.display.Label",
                        init: ["loading...", 24],
                        fillStyle: "rgb(20, 20, 20)",
                        align: "left",
                        fontWeight: "bold",
                        x: -width * 0.5 + 40 + 50,
                        y: 0,
                    },
                },
            });

            this.setItem(leaderboard);
        },

        setItem: function(item) {
            var self = this;
            self.title.text = item.name;
            if (item.iconUrl) {
                tm.asset.Texture(item.iconUrl)
                    .on("load", function() {
                        self.icon.image = this;
                    });
            }
            return tm.ui.ListViewItem.prototype.setItem.call(self, item);
        },
    });

    tm.define("tm.google.RankingScene", {
        superClass: "tm.app.Scene",

        init: function(leaderboard, param) {
            var self = this;
            self.superInit();
            self.fromJSON({
                leaderboard: leaderboard,
                param: param,
                nextPageToken: null,
                children: {
                    bg: {
                        type: "tm.display.RectangleShape",
                        init: {
                            width: param.width,
                            height: param.height,
                            strokeStyle: "transparent",
                            fillStyle: param.backgroundColor,
                        },
                        originX: 0,
                        originY: 0,
                    },
                    headerBg: {
                        type: "tm.display.RectangleShape",
                        init: {
                            width: param.width,
                            height: 100,
                            strokeStyle: "transparent",
                            fillStyle: "white",
                            shadowColor: "black",
                            shadowBlur: 15,
                        },
                        x: param.width * 0.5,
                        y: 100 * 0.5,
                    },
                    title: {
                        type: "tm.display.Label",
                        init: [leaderboard.name, 26],
                        x: param.width * 0.5,
                        y: 25,
                        align: "center",
                        fillStyle: "black",
                    },
                    backButton: {
                        type: "tm.ui.FlatButton",
                        init: {
                            text: "戻る",
                            width: 60,
                            height: 32,
                            fontSize: 22,
                        },
                        x: 32,
                        y: 25,
                        onpush: function() {
                            self.app.popScene();
                        },
                    },
                    closeButton: {
                        type: "tm.ui.FlatButton",
                        init: {
                            text: "完了",
                            width: 60,
                            height: 32,
                            fontSize: 22,
                        },
                        x: param.width - 32,
                        y: 25,
                        onpush: function() {
                            var app = self.app;
                            app.popScene();
                            app.popScene();
                        },
                    },

                    buttons: {
                        type: "tm.display.CanvasElement",
                        y: 75,
                        children: {
                            timeSpanButton: {
                                type: "tm.google.LeaderboardScene.Button",
                                init: {
                                    text: "すべての時間",
                                    width: 130,
                                    height: 32,
                                    fontSize: 18,
                                    backgroundColor: "white",
                                    foregroundColor: param.foregroundColor,
                                },
                                x: param.width * 0.5 - 140,
                                selections: ["すべての時間", "今日", "今週"],
                                value: 0,
                                onpush: function() {
                                    this.value = (this.value + 1) % this.selections.length;
                                    this.label.text = this.selections[this.value];
                                    self.loadData();
                                },
                            },
                            windowButton: {
                                type: "tm.google.LeaderboardScene.Button",
                                init: {
                                    text: "自分のスコア",
                                    width: 130,
                                    height: 32,
                                    fontSize: 18,
                                    backgroundColor: "white",
                                    foregroundColor: param.foregroundColor,
                                },
                                x: param.width * 0.5,
                                selections: ["自分のスコア", "トップスコア"],
                                value: 0,
                                onpush: function() {
                                    this.value = (this.value + 1) % this.selections.length;
                                    this.label.text = this.selections[this.value];
                                    self.loadData();
                                },
                            },
                            collectionButton: {
                                type: "tm.google.LeaderboardScene.Button",
                                init: {
                                    text: "友達",
                                    width: 130,
                                    height: 32,
                                    fontSize: 18,
                                    backgroundColor: "white",
                                    foregroundColor: param.foregroundColor,
                                },
                                x: param.width * 0.5 + 140,
                                selections: ["友達", "全プレイヤー"],
                                value: 0,
                                onpush: function() {
                                    this.value = (this.value + 1) % this.selections.length;
                                    this.label.text = this.selections[this.value];
                                    self.loadData();
                                },
                            },
                        },
                    },

                    listView: {
                        type: "tm.ui.ListView",
                        width: param.width,
                        height: param.height - 100,
                        x: param.width * 0.5,
                        y: 100,
                        getView: function(item, i, view) {
                            if (view) {
                                return view.setItem(item);
                            } else if (item.kind === "games#leaderboardEntry") {
                                return tm.google.RankingScene.Item(400, 80, item);
                            } else if (item === "さらに表示…") {
                                return tm.ui.SimpleListViewItem(400, 40, item)
                                    .setTextColor(param.foregroundColor);
                            } else if (typeof(item) === "string") {
                                return tm.ui.SimpleListViewItem(400, 40, item).setInteractive(false);
                            }
                        },
                        onItemClick: function(item) {
                            if (item === "さらに表示…") {
                                self.loadData(self.nextPageToken);
                            } else {
                                // TODO
                            }
                        },
                    },
                },
            });

            self.loadData();
        },

        loadData: function(pageToken) {
            var self = this;

            if (!pageToken) {
                self.listView.items.clear();
            }

            var promise =  new Promise(function(resolve, reject) {

                var method = ["listWindow", "list"][self.buttons.windowButton.value];

                var req = gapi.client.games.scores[method]({
                    leaderboardId: self.leaderboard.id,
                    collection: ["social", "public"][self.buttons.collectionButton.value],
                    timeSpan: ["all_time", "daily", "weekly"][self.buttons.timeSpanButton.value],
                    maxResults: 20,
                    pageToken: pageToken,
                });
                req.execute(function(res) {
                    if (!res.error) {
                        self.listView.items.push("{0}人".format(res.numScores));
                        if (res.items && res.items.length) {
                            res.items.forEach(function(item) {

                                if (res.playerScore) {
                                    item.itsMe = item.player.playerId === res.playerScore.player.playerId;
                                }

                                self.listView.items.push(item);
                            });

                            if (self.buttons.windowButton.value === 1 && res.nextPageToken) {
                                self.listView.items.push("さらに表示…");
                                self.nextPageToken = res.nextPageToken;
                            } else {
                                self.nextPageToken = null;
                            }
                        }
                        resolve();
                    } else {
                        reject(res.error);
                    }
                });

            });

            promise.then(function() {
                self.listView.updateItems();
            });
        },
    });

    tm.define("tm.google.RankingScene.Item", {
        superClass: "tm.ui.ListViewItem",

        init: function(width, height, score) {
            var self = this;
            this.superInit(width, height);
            this.fromJSON({
                children: {
                    rank: {
                        type: "tm.display.Label",
                        init: ["?", 32],
                        fillStyle: "rgb(20, 20, 20)",
                        fontWeight: "bold",
                        x: -width * 0.5 + 40,
                        y: 0,
                    },
                    icon: {
                        type: "tm.display.Sprite",
                        init: [ITEM_DEFAULT_TEXTURE, 60, 60],
                        x: -width * 0.5 + 40 + 80,
                        y: 0,
                    },
                    playerName: {
                        type: "tm.display.Label",
                        init: ["loading...", 24],
                        fillStyle: "rgb(20, 20, 20)",
                        align: "left",
                        fontWeight: "bold",
                        x: -width * 0.5 + 40 + 80 + 50,
                        y: -12,
                    },
                    score: {
                        type: "tm.display.Label",
                        init: ["loading...", 18],
                        fillStyle: "rgb(120, 120, 120)",
                        align: "left",
                        fontFamily: "monospace",
                        x: -width * 0.5 + 40 + 80 + 50,
                        y: 16,
                    },
                },
            });

            this.setItem(score);
        },

        setItem: function(item) {
            var self = this;
            self.rank.text = item.scoreRank;
            self.playerName.text = item.itsMe ? "自分" : item.player.displayName;
            self.score.text = item.formattedScore;
            if (item.player.avatarImageUrl) {
                tm.asset.Texture(item.player.avatarImageUrl)
                    .on("load", function() {
                        self.icon.image = this;
                    });
            }
            return tm.ui.ListViewItem.prototype.setItem.call(self, item);
        }
    });

    tm.define("tm.google.LeaderboardScene.Button", {
        superClass: "tm.ui.FlatButton",

        init: function(param) {
            this.superInit(param);
            this.param = param;
            this._selected = false;
        },
    });

    tm.google.LeaderboardScene.Button.prototype.accessor("selected", {
        set: function(v) {
            this._selected = v;
            if (v) {
                this.fillStyle = this.param.foregroundColor;
                this.strokeStyle = this.param.foregroundColor;
                this.label.fillStyle = this.param.backgroundColor;
            } else {
                this.fillStyle = this.param.backgroundColor;
                this.strokeStyle = this.param.foregroundColor;
                this.label.fillStyle = this.param.foregroundColor;
            }
        },
        get: function() {
            return this._selected;
        },
    });

})();
