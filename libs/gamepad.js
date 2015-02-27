/*
 * gamepad.js
 */

tm.input = tm.input || {};


(function() {

    /**
     * ゲームパッドマネージャー.
     *
     * ゲームパッド接続状況の監視、個々のゲームパッドの入力状態の更新を行う.
     */
    tm.define("tm.input.GamepadManager", {
        superClass: "tm.event.EventDispatcher",

        /**
         * 作成済みtm.input.Gamepadオブジェクトのリスト
         *
         * @type {Object.<number, tm.input.Gamepad>}
         */
        instances: null,

        /**
         * 作成済みゲームパッドのindexのリスト
         *
         * @type {number[]}
         */
        created: null,

        init: function() {
            this.superInit();

            this.instances = {};
            this.created = [];

            /** @type {Gamepad[]} */
            this._gamepads = [];

            this._prevTimestamps = {};

            this._getGamepads = null;
            if (tm.global.navigator) {
                if (tm.global.navigator.getGamepads) {
                    this._getGamepads = function() {
                        return this.getGamepads();
                    }.bind(tm.global.navigator);
                } else if (tm.global.navigator.webkitGetGamepads) {
                    this._getGamepads = function() {
                        return this.webkitGetGamepads();
                    }.bind(tm.global.navigator);
                }
            }

            tm.global.addEventListener("gamepadconnected", function(e) {
                var gamepad = this.get(e.gamepad.index);
                gamepad.connected = true;
                var ev = tm.event.Event("connected");
                ev.gamepad = gamepad;
                this.fire(ev);
            }.bind(this));

            tm.global.addEventListener("gamepaddisconnected", function(e) {
                var gamepad = this.get(e.gamepad.index);
                gamepad.connected = false;
                var ev = tm.event.Event("disconnected");
                ev.gamepad = gamepad;
                this.fire(ev);
            }.bind(this));
        },

        /**
         * 情報更新処理
         * マイフレーム呼んで下さい.
         *
         * @private
         */
        _update: function() {
            this._pollGamepads();

            for (var i = 0, end = this.created.length; i < end; i++) {
                var gamepadIndex = this.created[i];
                var gamepad = this._gamepads[gamepadIndex];

                if (!gamepad) {
                    continue;
                }

                if (gamepad.timestamp && (gamepad.timestamp === this._prevTimestamps[i])) {
                    this.instances[gamepadIndex]._updateStateEmpty();
                    continue;
                }

                this._prevTimestamps[i] = gamepad.timestamp;
                this.instances[gamepadIndex]._updateState(gamepad);
            }
        },

        /**
         * run.
         * 自動で情報を更新したい際に使用する
         */
        run: function(fps) {
            var self = this;
            fps = fps || 30;
            tm.setLoop(function(){
                self._update();
                if (self.update) self.update();
            }, 1000 / fps);
        },

        /**
         * 指定されたindexのtm.input.Gamepadオブジェクトを返す.
         *
         * 未作成の場合は作成して返す.
         */
        get: function(gamepadIndex) {
            gamepadIndex = gamepadIndex || 0;

            if (!this.instances[gamepadIndex]) {
                this.created.push(gamepadIndex);
                this.instances[gamepadIndex] = tm.input.Gamepad(gamepadIndex);
            }

            return this.instances[gamepadIndex];
        },

        /**
         * 指定されたindexのtm.input.Gamepadオブジェクトを破棄する.
         * 破棄されたtm.input.Gamepadオブジェクトは以降更新されない.
         */
        dispose: function(gamepadIndex) {
            if (this.created.contains(gamepadIndex)) {
                var gamepad = this.get(gamepadIndex);
                this.instances.erase(gamepad);
                this.created.erase(gamepadIndex);

                gamepad.connected = false;
            }
        },

        /**
         * 指定されたindexのゲームパッドが接続中かどうかを返す.
         *
         * tm.input.Gamepadオブジェクトが未作成の場合でも動作する.
         */
        isConnected: function(gamepadIndex) {
            gamepadIndex = gamepadIndex || 0;

            return this._gamepads[gamepadIndex] && this._gamepads[gamepadIndex].connected;
        },

        /**
         * @private
         */
        _pollGamepads: function() {
            if (this._getGamepads === null) return;

            var rawGamepads = this._getGamepads();
            if (rawGamepads) {
                this._gamepads.clear();

                for (var i = 0, end = rawGamepads.length; i < end; i++) {
                    if (rawGamepads[i]) {
                        this._gamepads.push(rawGamepads[i]);
                    }
                }
            }
        },

    });

    /**
     * ゲームパッド
     *
     * 直接インスタンス化せず、tm.input.GamepadManagerオブジェクトから取得して使用する.
     */
    tm.define("tm.input.Gamepad", {

        gamepadIndex: null,
        buttons: null,
        sticks: null,

        id: null,
        connected: false,
        mapping: null,
        timestamp: null,

        init: function(gamepadIndex) {
            this.gamepadIndex = gamepadIndex || 0;

            this.buttons = Array.range(0, 16).map(function() {
                return {
                    value: 0,
                    pressed: false,
                    last: false,
                    down: false,
                    up: false,
                };
            });
            this.sticks = Array.range(0, 2).map(function() {
                return tm.geom.Vector2(0, 0);
            });
        },

        /**
         * ボタンが押されているか.
         */
        getKey: function(button) {
            if (typeof(button) === "string") {
                button = tm.input.Gamepad.BUTTON_CODE[button];
            }
            if (this.buttons[button]) {
                return this.buttons[button].pressed;
            } else {
                return false;
            }
        },

        /**
         * ボタンを押した.
         */
        getKeyDown: function(button) {
            if (typeof(button) === "string") {
                button = tm.input.Gamepad.BUTTON_CODE[button];
            }
            if (this.buttons[button]) {
                return this.buttons[button].down;
            } else {
                return false;
            }
        },

        /**
         * ボタンを離した.
         */
        getKeyUp: function(button) {
            if (typeof(button) === "string") {
                button = tm.input.Gamepad.BUTTON_CODE[button];
            }
            if (this.buttons[button]) {
                return this.buttons[button].up
            } else {
                return false;
            }
        },

        /**
         * 十字キーの入力されている方向.
         */
        getKeyAngle: function() {
            var angle = null;
            var arrowBit =
                (this.getKey("left") << 3) | // 1000
                (this.getKey("up") << 2) | // 0100
                (this.getKey("right") << 1) | // 0010
                (this.getKey("down")); // 0001

            if (arrowBit != 0 && ARROW_BIT_TO_ANGLE_TABLE.hasOwnProperty(arrowBit)) {
                angle = ARROW_BIT_TO_ANGLE_TABLE[arrowBit];
            }

            return angle;
        },

        /**
         * 十字キーの入力されている方向をベクトルで.
         * 正規化されている.
         */
        getKeyDirection: function() {
            var direction = tm.geom.Vector2(0, 0);

            if (this.getKey("left")) {
                direction.x = -1;
            } else if (this.getKey("right")) {
                direction.x = 1;
            }
            if (this.getKey("up")) {
                direction.y = -1;
            } else if (this.getKey("down")) {
                direction.y = 1;
            }

            if (direction.x && direction.y) {
                direction.div(Math.SQRT2);
            }

            return direction;
        },

        /**
         * スティックの入力されている方向.
         */
        getStickAngle: function(stickId) {
            stickId = stickId || 0;
            if (this.sticks[stickId]) {
                return Math.atan2(-this.sticks[stickId].y, this.sticks[stickId].x);
            } else {
                return null;
            }
        },

        /**
         * 十字キーの入力されている方向をベクトルで.
         */
        getStickVector: function(stickId) {
            stickId = stickId || 0;
            return this.sticks && this.sticks[stickId];
        },

        /**
         * 十字キーの入力されている方向をベクトルで.
         * 正規化されている.
         */
        getStickDirection: function(stickId) {
            var v = this.getStickVector(stickId);
            if (v) {
                return tm.geom.Vector2(v.x, v.y).normalize();
            } else {
                return null;
            }
        },

        /**
         * @private
         */
        _updateState: function(gamepad) {
            this.id = gamepad.id;
            this.connected = gamepad.connected;
            this.mapping = gamepad.mapping;
            this.timestamp = gamepad.timestamp;

            for (var i = 0, iend = gamepad.buttons.length; i < iend; i++) {
                this._updateButton(gamepad.buttons[i], i);
            }

            for (var j = 0, jend = gamepad.axes.length; j < jend; j += 2) {
                this._updateStick(gamepad.axes[j + 0], j / 2, "x");
                this._updateStick(gamepad.axes[j + 1], j / 2, "y");
            }
        },

        /**
         * @private
         */
        _updateStateEmpty: function() {
            for (var i = 0, iend = this.buttons.length; i < iend; i++) {
                this.buttons[i].down = false;
                this.buttons[i].up = false;
            }
        },

        /**
         * @private
         */
        _updateButton: function(value, buttonId) {
            if (this.buttons[buttonId] === undefined) {
                this.buttons[buttonId] = {
                    value: 0,
                    pressed: false,
                    last: false,
                    down: false,
                    up: false,
                };
            }

            var button = this.buttons[buttonId];

            button.last = button.pressed;

            if (typeof value === 'object') {
                button.value = value.value;
                button.pressed = value.pressed;
            } else {
                button.value = value;
                button.pressed = value > tm.input.Gamepad.ANALOGUE_BUTTON_THRESHOLD;
            }

            button.down = (button.pressed ^ button.last) & button.pressed;
            button.up = (button.pressed ^ button.last) & button.last;
        },

        /**
         * @private
         */
        _updateStick: function(value, stickId, axisName) {
            if (this.sticks[stickId] === undefined) {
                this.sticks[stickId] = tm.geom.Vector2(0, 0);
            }
            this.sticks[stickId][axisName] = value;
        },
    });

    /**
     * ブラウザがGamepad APIに対応しているか.
     */
    tm.input.GamepadManager.isAvailable = tm.input.Gamepad.isAvailable = (!!navigator.getGamepads) || (!!navigator.webkitGetGamepads);

    /**
     * アナログ入力対応のボタンの場合、どの程度まで押し込むとonになるかを表すしきい値.
     */
    tm.input.Gamepad.ANALOGUE_BUTTON_THRESHOLD = 0.5;

    /**
     * ボタン名とボタンIDのマップ.
     */
    tm.input.Gamepad.BUTTON_CODE = {
        "a": 0,
        "b": 1,
        "x": 2,
        "y": 3,

        "l1": 4,
        "l2": 5,
        "r1": 6,
        "r2": 7,

        "select": 8,
        "start": 9,

        "l3": 10,
        "r3": 11,

        "up": 12,
        "down": 13,
        "left": 14,
        "right": 15,

        "A": 0,
        "B": 1,
        "X": 2,
        "Y": 3,

        "L1": 4,
        "L2": 5,
        "R1": 6,
        "R2": 7,

        "SELECT": 8,
        "START": 9,

        "L3": 10,
        "R3": 11,

        "UP": 12,
        "DOWN": 13,
        "LEFT": 14,
        "RIGHT": 15,
    };

    var ARROW_BIT_TO_ANGLE_TABLE = {
        /* @property 下 */
        0x01: 270,
        /* @property 右 */
        0x02: 0,
        /* @property 上 */
        0x04: 90,
        /* @property 左 */
        0x08: 180,

        /* @property 右上 */
        0x06: 45,
        /* @property 右下 */
        0x03: 315,
        /* @property 左上 */
        0x0c: 135,
        /* @property 左下 */
        0x09: 225,

        // 三方向同時押し対応
        // 想定外の操作だが対応しといたほうが無難
        /* @property 右上左 */
        0x0e: 90,
        /* @property 上左下 */
        0x0d: 180,
        /* @property 左下右 */
        0x0b: 270,
        /* @property 下右上 */
        0x07: 0,
    };

})();
