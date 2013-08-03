/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
var bulletml = {GLOBAL:this};
(function() {
  function b(a, b) {
    for(var d = 0, f = a.length;d < f;d++) {
      if(a[d].label == b) {
        return a[d]
      }
    }
  }
  bulletml.Root = function(a) {
    this.type = "none";
    this.root = this;
    this.actions = [];
    this.bullets = [];
    this.fires = [];
    if(void 0 !== a) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof bulletml.Action ? this.actions.push(a[b]) : a[b] instanceof bulletml.Bullet ? this.bullets.push(a[b]) : a[b] instanceof bulletml.Fire && this.fires.push(a[b]))
      }
      a = 0;
      for(b = this.actions.length;a < b;a++) {
        this.actions[a].setRoot(this)
      }
      a = 0;
      for(b = this.bullets.length;a < b;a++) {
        this.bullets[a].setRoot(this)
      }
      a = 0;
      for(b = this.fires.length;a < b;a++) {
        this.fires[a].setRoot(this)
      }
    }
  };
  bulletml.Root.prototype.findAction = function(a) {
    return b(this.actions, a)
  };
  bulletml.Root.prototype.getTopActionLabels = function() {
    for(var a = [], b = 0, d = this.actions.length;b < d;b++) {
      var f = this.actions[b];
      f.label && 0 === f.label.indexOf("top") && (a[a.length] = f.label)
    }
    return a
  };
  bulletml.Root.prototype.findActionOrThrow = function(a) {
    var b;
    if(b = this.findAction(a)) {
      return b
    }
    throw Error("action labeled '" + a + "' is undefined.");
  };
  bulletml.Root.prototype.findBullet = function(a) {
    return b(this.bullets, a)
  };
  bulletml.Root.prototype.findBulletOrThrow = function(a) {
    var b;
    if(b = this.findBullet(a)) {
      return b
    }
    throw Error("bullet labeled '" + a + "' is undefined.");
  };
  bulletml.Root.prototype.findFire = function(a) {
    return b(this.fires, a)
  };
  bulletml.Root.prototype.findFireOrThrow = function(a) {
    var b;
    if(b = this.findFire(a)) {
      return b
    }
    throw Error("fire labeled '" + a + "' is undefined.");
  };
  bulletml.Bullet = function() {
    this.root = this.label = null;
    this.direction = new bulletml.Direction(0);
    this.speed = new bulletml.Speed(1);
    this.actions = [];
    this.option = {};
    this._localScope = {}
  };
  bulletml.Bullet.prototype.clone = function(a) {
    var b = new bulletml.Bullet;
    b.label = this.label;
    b.root = this.root;
    b.actions = this.actions;
    b.direction = new bulletml.Direction(a._evalParam(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new bulletml.Speed(a._evalParam(this.speed.value));
    b.speed.type = this.speed.type;
    b.option = this.option;
    b._localScope = a._localScope;
    return b
  };
  bulletml.Bullet.prototype.setRoot = function(a) {
    this.root = a;
    for(var b = 0, d = this.actions.length;b < d;b++) {
      this.actions[b].setRoot(a)
    }
  };
  bulletml.BulletRef = function(a) {
    this.root = null;
    this.label = a;
    this.params = []
  };
  bulletml.BulletRef.prototype.clone = function(a) {
    var b = a._localScope;
    a._localScope = a._newScope(this.params);
    var d = this.root.findBulletOrThrow(this.label).clone(a);
    a._localScope = b;
    return d
  };
  bulletml.BulletRef.prototype.setRoot = function(a) {
    this.root = a
  };
  bulletml.Command = function() {
    this.commandName = ""
  };
  bulletml.Command.prototype.setRoot = function(a) {
    this.root = a
  };
  bulletml.Action = function() {
    this.commandName = "action";
    this.root = this.label = null;
    this.commands = [];
    this.params = []
  };
  bulletml.Action.prototype = new bulletml.Command;
  bulletml.Action.prototype.setRoot = function(a) {
    this.root = a;
    for(var b = 0, d = this.commands.length;b < d;b++) {
      this.commands[b].setRoot(a)
    }
  };
  bulletml.Action.prototype.clone = function() {
    var a = new bulletml.Action;
    a.label = this.label;
    a.root = this.root;
    a.commands = this.commands;
    return a
  };
  bulletml.ActionRef = function(a) {
    this.commandName = "actionRef";
    this.label = a;
    this.root = null;
    this.params = []
  };
  bulletml.ActionRef.prototype = new bulletml.Command;
  bulletml.ActionRef.prototype.clone = function() {
    var a = new bulletml.Action;
    a.root = this.root;
    a.commands.push(this);
    return a
  };
  bulletml.Fire = function() {
    this.commandName = "fire";
    this.bullet = this.speed = this.direction = this.root = this.label = null;
    this.option = new bulletml.FireOption
  };
  bulletml.Fire.prototype = new bulletml.Command;
  bulletml.Fire.prototype.setRoot = function(a) {
    this.root = a;
    this.bullet && this.bullet.setRoot(a)
  };
  bulletml.FireRef = function(a) {
    this.commandName = "fireRef";
    this.label = a;
    this.params = []
  };
  bulletml.FireRef.prototype = new bulletml.Command;
  bulletml.ChangeDirection = function() {
    this.commandName = "changeDirection";
    this.direction = new bulletml.Direction;
    this.term = 0
  };
  bulletml.ChangeDirection.prototype = new bulletml.Command;
  bulletml.ChangeSpeed = function() {
    this.commandName = "changeSpeed";
    this.speed = new bulletml.Speed;
    this.term = 0
  };
  bulletml.ChangeSpeed.prototype = new bulletml.Command;
  bulletml.Accel = function() {
    this.commandName = "accel";
    this.horizontal = new bulletml.Horizontal;
    this.vertical = new bulletml.Vertical;
    this.term = 0
  };
  bulletml.Accel.prototype = new bulletml.Command;
  bulletml.Wait = function(a) {
    this.commandName = "wait";
    this.value = a || 0
  };
  bulletml.Wait.prototype = new bulletml.Command;
  bulletml.Vanish = function() {
    this.commandName = "vanish"
  };
  bulletml.Vanish.prototype = new bulletml.Command;
  bulletml.Repeat = function() {
    this.commandName = "repeat";
    this.times = 0;
    this.action = null;
    this.params = []
  };
  bulletml.Repeat.prototype = new bulletml.Command;
  bulletml.Repeat.prototype.setRoot = function(a) {
    this.root = a;
    this.action && this.action.setRoot(a)
  };
  bulletml.Bind = function(a, b) {
    this.commandName = "bind";
    this.variable = a;
    this.expression = b
  };
  bulletml.Bind.prototype = new bulletml.Command;
  bulletml.Notify = function(a, b) {
    this.commandName = "notify";
    this.eventName = a;
    this.params = b || null
  };
  bulletml.Notify.prototype = new bulletml.Command;
  bulletml.DummyCommand = new bulletml.Command;
  bulletml.Direction = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  bulletml.Speed = function(a) {
    this.type = "absolute";
    this.value = void 0 === a ? 1 : a
  };
  bulletml.Horizontal = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  bulletml.Vertical = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  bulletml.FireOption = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.autonomy = !0;
    void 0 !== a.autonomy && (this.autonomy = !!a.autonomy)
  };
  bulletml.OffsetX = function(a) {
    this.value = a || 0
  };
  bulletml.OffsetY = function(a) {
    this.value = a || 0
  };
  bulletml.Autonomy = function(a) {
    this.value = !!a
  }
})();
var BulletML = bulletml;
(function() {
  bulletml.Walker = function(b, a) {
    this._root = b;
    this._stack = [];
    this._cursor = -1;
    this._action = null;
    this._localScope = {};
    this._globalScope = {$rank:a || 0}
  };
  bulletml.Walker.prototype.next = function() {
    this._cursor += 1;
    if(null !== this._action) {
      var b = this._action.commands[this._cursor];
      if(void 0 !== b) {
        if(b instanceof bulletml.Action) {
          return this._pushStack(), this._action = b, this._localScope = this._cloneScope(), this.next()
        }
        if(b instanceof bulletml.ActionRef) {
          return this._pushStack(), this._action = this._root.findActionOrThrow(b.label), this._localScope = this._newScope(b.params), this.next()
        }
        if(b instanceof bulletml.Repeat) {
          return this._localScope.loopCounter = 0, this._localScope.loopEnd = this._evalParam(b.times) | 0, this._pushStack(), this._action = b.action.clone(), this._localScope = this._cloneScope(), this.next()
        }
        if(b instanceof bulletml.Fire) {
          var a = new bulletml.Fire;
          a.bullet = b.bullet.clone(this);
          null !== b.direction && (a.direction = new bulletml.Direction(this._evalParam(b.direction.value)), a.direction.type = b.direction.type);
          null !== b.speed && (a.speed = new bulletml.Speed(this._evalParam(b.speed.value)), a.speed.type = b.speed.type);
          a.option = b.option;
          return a
        }
        return b instanceof bulletml.FireRef ? (this._pushStack(), this._action = new bulletml.Action, this._action.commands = [this._root.findFireOrThrow(b.label)], this._localScope = this._newScope(b.params), this.next()) : b instanceof bulletml.ChangeDirection ? (a = new bulletml.ChangeDirection, a.direction.type = b.direction.type, a.direction.value = this._evalParam(b.direction.value), a.term = this._evalParam(b.term), a) : b instanceof bulletml.ChangeSpeed ? (a = new bulletml.ChangeSpeed, a.speed.type = 
        b.speed.type, a.speed.value = this._evalParam(b.speed.value), a.term = this._evalParam(b.term), a) : b instanceof bulletml.Accel ? (a = new bulletml.Accel, a.horizontal.type = b.horizontal.type, a.horizontal.value = this._evalParam(b.horizontal.value), a.vertical.type = b.vertical.type, a.vertical.value = this._evalParam(b.vertical.value), a.term = this._evalParam(b.term), a) : b instanceof bulletml.Wait ? new bulletml.Wait(this._evalParam(b.value)) : b instanceof bulletml.Vanish ? b : b instanceof 
        bulletml.Bind ? (this._localScope["$" + b.variable] = this._evalParam(b.expression), bulletml.DummyCommand) : b instanceof bulletml.Notify ? b : null
      }
      this._popStack();
      if(null === this._action) {
        return null
      }
      if((b = this._action.commands[this._cursor]) && "repeat" == b.commandName) {
        this._localScope.loopCounter++, this._localScope.loopCounter < this._localScope.loopEnd && (this._pushStack(), this._action = b.action.clone(), this._localScope = this._cloneScope())
      }
      return this.next()
    }
    return null
  };
  bulletml.Walker.prototype._pushStack = function() {
    this._stack.push({action:this._action, cursor:this._cursor, scope:this._localScope});
    this._cursor = -1
  };
  bulletml.Walker.prototype._popStack = function() {
    var b = this._stack.pop();
    b ? (this._cursor = b.cursor, this._action = b.action, this._localScope = b.scope) : (this._cursor = -1, this._action = null, this._localScope = {})
  };
  bulletml.Walker.prototype._evalParam = function(b) {
    var a;
    if("number" === typeof b) {
      return b
    }
    if(isNaN(a = Number(b))) {
      if((a = this._localScope[b]) || (a = this._globalScope[b])) {
        return a
      }
      if("$rand" == b) {
        return Math.random()
      }
    }else {
      return a
    }
    a = {};
    for(var c in this._globalScope) {
      this._globalScope.hasOwnProperty(c) && (a[c] = this._globalScope[c])
    }
    for(c in this._localScope) {
      this._localScope.hasOwnProperty(c) && (a[c] = this._localScope[c])
    }
    a.$rand = Math.random();
    (c = this._stack[this._stack.length - 1]) && (a.$loop = {index:c.scope.loopCounter, count:c.scope.loopCounter + 1, first:0 === c.scope.loopCounter, last:c.scope.loopCounter + 1 >= c.scope.loopEnd});
    return(new Function("return " + b.split("$").join("this.$"))).apply(a)
  };
  bulletml.Walker.prototype._newScope = function(b) {
    var a = {};
    if(b) {
      for(var c = 0, d = b.length;c < d;c++) {
        a["$" + (c + 1)] = this._evalParam(b[c])
      }
    }else {
      for(c in this._localScope) {
        this._localScope.hasOwnProperty(c) && (a[c] = this._localScope[c])
      }
    }
    return a
  };
  bulletml.Walker.prototype._cloneScope = function() {
    var b = {}, a;
    for(a in this._localScope) {
      this._localScope.hasOwnProperty(a) && (b[a] = this._localScope[a])
    }
    return b
  };
  bulletml.Root.prototype.getWalker = function(b, a) {
    var c = new bulletml.Walker(this, a), d = this.findAction(b);
    d && (c._action = d);
    return c
  };
  bulletml.Bullet.prototype.getWalker = function(b) {
    b = new bulletml.Walker(this.root, b);
    var a = new bulletml.Action;
    a.root = this.root;
    a.commands = this.actions;
    b._action = a;
    b._localScope = this._localScope;
    return b
  }
})();
(function() {
  bulletml.dsl = function(b) {
    b = b || "";
    for(var a in bulletml.dsl) {
      bulletml.dsl.hasOwnProperty(a) && (bulletml.GLOBAL[b + a] = bulletml.dsl[a])
    }
  };
  bulletml.dsl.action = function(b) {
    if(0 < arguments.length) {
      for(var a = 0, c = arguments.length;a < c;a++) {
        arguments[a] instanceof Function && (arguments[a] = arguments[a]())
      }
    }
    if(b instanceof Array) {
      a = 0;
      for(c = b.length;a < c;a++) {
        b[a] instanceof Function && (b[a] = b[a]())
      }
    }
    var d = new bulletml.Action;
    if(b instanceof Array) {
      if(b.some(function(a) {
        return!(a instanceof bulletml.Command)
      })) {
        throw Error("argument type error.");
      }
      d.commands = b
    }else {
      a = 0;
      for(c = arguments.length;a < c;a++) {
        if(arguments[a] instanceof bulletml.Command) {
          d.commands[a] = arguments[a]
        }else {
          throw Error("argument type error.");
        }
      }
    }
    return d
  };
  bulletml.dsl.actionRef = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("label is required.");
    }
    d = new bulletml.ActionRef(b);
    if(a instanceof Array) {
      d.params = a
    }else {
      for(c = 1;c < arguments.length;c++) {
        d.params.push(arguments[c])
      }
    }
    return d
  };
  bulletml.dsl.bullet = function(b, a, c, d) {
    for(var f = 0, g = arguments.length;f < g;f++) {
      arguments[f] instanceof Function && (arguments[f] = arguments[f]())
    }
    g = new bulletml.Bullet;
    for(f = 0;f < arguments.length;f++) {
      arguments[f] instanceof bulletml.Direction ? g.direction = arguments[f] : arguments[f] instanceof bulletml.Speed ? g.speed = arguments[f] : arguments[f] instanceof bulletml.Action ? g.actions.push(arguments[f]) : arguments[f] instanceof bulletml.ActionRef ? g.actions.push(arguments[f]) : arguments[f] instanceof Array ? g.actions.push(bulletml.dsl.action(arguments[f])) : arguments[f] instanceof Object ? g.option = arguments[f] : "string" === typeof arguments[f] && (g.label = arguments[f])
    }
    return g
  };
  bulletml.dsl.bulletRef = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("label is required.");
    }
    d = new bulletml.BulletRef(b);
    if(a instanceof Array) {
      d.params = a
    }else {
      for(c = 1;c < arguments.length;c++) {
        d.params.push(arguments[c])
      }
    }
    return d
  };
  bulletml.dsl.fire = function(b, a, c, d) {
    for(var f = 0, g = arguments.length;f < g;f++) {
      arguments[f] instanceof Function && (arguments[f] = arguments[f]())
    }
    g = new bulletml.Fire;
    for(f = 0;f < arguments.length;f++) {
      arguments[f] instanceof bulletml.Direction ? g.direction = arguments[f] : arguments[f] instanceof bulletml.Speed ? g.speed = arguments[f] : arguments[f] instanceof bulletml.Bullet ? g.bullet = arguments[f] : arguments[f] instanceof bulletml.BulletRef ? g.bullet = arguments[f] : arguments[f] instanceof bulletml.FireOption ? g.option = arguments[f] : arguments[f] instanceof bulletml.OffsetX ? g.option.offsetX = arguments[f].value : arguments[f] instanceof bulletml.OffsetY ? g.option.offsetY = 
      arguments[f].value : arguments[f] instanceof bulletml.Autonomy && (g.option.autonomy = arguments[f].value)
    }
    if(void 0 === g.bullet) {
      throw Error("bullet (or bulletRef) is required.");
    }
    return g
  };
  bulletml.dsl.fireRef = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("label is required.");
    }
    d = new bulletml.FireRef(b);
    if(a instanceof Array) {
      d.params = a
    }else {
      for(c = 1;c < arguments.length;c++) {
        d.params.push(arguments[c])
      }
    }
    return d
  };
  bulletml.dsl.changeDirection = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("direction is required.");
    }
    if(void 0 === a) {
      throw Error("term is required.");
    }
    c = new bulletml.ChangeDirection;
    c.direction = b instanceof bulletml.Direction ? b : new bulletml.Direction(b);
    c.term = a;
    return c
  };
  bulletml.dsl.changeSpeed = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("speed is required.");
    }
    if(void 0 === a) {
      throw Error("term is required.");
    }
    c = new bulletml.ChangeSpeed;
    c.speed = b instanceof bulletml.Speed ? b : new bulletml.Speed(b);
    c.term = a;
    return c
  };
  bulletml.dsl.accel = function(b, a, c) {
    for(var d = 0, f = arguments.length;d < f;d++) {
      arguments[d] instanceof Function && (arguments[d] = arguments[d]())
    }
    f = new bulletml.Accel;
    for(d = 0;d < arguments.length;d++) {
      arguments[d] instanceof bulletml.Horizontal ? f.horizontal = b : arguments[d] instanceof bulletml.Vertical ? f.vertical = a : f.term = arguments[d]
    }
    if(void 0 === f.horizontal && void 0 === f.vertical) {
      throw Error("horizontal or vertical is required.");
    }
    if(void 0 === f.term) {
      throw Error("term is required.");
    }
    return f
  };
  bulletml.dsl.wait = function(b) {
    for(var a = 0, c = arguments.length;a < c;a++) {
      arguments[a] instanceof Function && (arguments[a] = arguments[a]())
    }
    if(void 0 === b) {
      throw Error("value is required.");
    }
    return new bulletml.Wait(b)
  };
  bulletml.dsl.vanish = function() {
    return new bulletml.Vanish
  };
  bulletml.dsl.repeat = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("times is required.");
    }
    if(void 0 === a) {
      throw Error("action is required.");
    }
    d = new bulletml.Repeat;
    d.times = b;
    if(a instanceof bulletml.Action || a instanceof bulletml.ActionRef) {
      d.action = a
    }else {
      if(a instanceof Array) {
        d.action = bulletml.dsl.action(a)
      }else {
        for(var f = [], c = 1;c < arguments.length;c++) {
          f.push(arguments[c])
        }
        d.action = bulletml.dsl.action(f)
      }
    }
    return d
  };
  bulletml.dsl.bindVar = function(b, a) {
    return new bulletml.Bind(b, a)
  };
  bulletml.dsl.notify = function(b, a) {
    return new bulletml.Notify(b, a)
  };
  bulletml.dsl.direction = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("value is required.");
    }
    c = new bulletml.Direction(b);
    void 0 !== a && (c.type = a);
    return c
  };
  bulletml.dsl.speed = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("value is required.");
    }
    c = new bulletml.Speed(b);
    a && (c.type = a);
    return c
  };
  bulletml.dsl.horizontal = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("value is required.");
    }
    c = new bulletml.Horizontal(b);
    a && (c.type = a);
    return c
  };
  bulletml.dsl.vertical = function(b, a) {
    for(var c = 0, d = arguments.length;c < d;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
    if(void 0 === b) {
      throw Error("value is required.");
    }
    c = new bulletml.Vertical(b);
    a && (c.type = a);
    return c
  };
  bulletml.dsl.fireOption = function(b) {
    return new bulletml.FireOption(b)
  };
  bulletml.dsl.offsetX = function(b) {
    return new bulletml.OffsetX(b)
  };
  bulletml.dsl.offsetY = function(b) {
    return new bulletml.OffsetY(b)
  };
  bulletml.dsl.autonomy = function(b) {
    return new bulletml.Autonomy(b)
  }
})();
tm.bulletml = tm.bulletml || {};
(function() {
  function b(a) {
    for(;a <= -Math.PI;) {
      a += 2 * Math.PI
    }
    for(;Math.PI < a;) {
      a -= 2 * Math.PI
    }
    return a
  }
  function a(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x)
  }
  tm.bulletml.AttackPattern = tm.createClass({init:function(a) {
    if(!a) {
      throw Error("argument is invalid.", a);
    }
    this._bulletml = a
  }, createTicker:function(a, b) {
    var c = this._bulletml.getTopActionLabels();
    if(void 0 === b && 0 < c.length) {
      for(var d = [], j = 0, m = c.length;j < m;j++) {
        d[d.length] = this._createTicker(a, c[j])
      }
      for(var k = function() {
        for(var a = d.length;a--;) {
          d[a].call(this)
        }
        k.compChildCount == d.length && (k.completed = !0, this.dispatchEvent(tm.event.Event("completeattack")))
      }, j = d.length;j--;) {
        d[j].parentTicker = k
      }
      k.compChildCount = 0;
      k.completeChild = function() {
        this.compChildCount++
      };
      k.compChildCount = 0;
      k.completed = !1;
      k.isDanmaku = !0;
      return k
    }
    return this._createTicker(a, b)
  }, _createTicker:function(a, b) {
    a = function(a) {
      var b = {}, c = tm.bulletml.AttackPattern.defaultConfig, f;
      for(f in c) {
        c.hasOwnProperty(f) && (b[f] = c[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    if(!a.target) {
      throw Error("target is undefined in config.");
    }
    var c = function() {
      c.age += 1;
      this.age = c.age;
      var a = c.config, b = c._pattern;
      if(b) {
        if(c.age < c.chDirEnd ? c.direction += c.dirIncr : c.age === c.chDirEnd && (c.direction = c.dirFin), c.age < c.chSpdEnd ? c.speed += c.spdIncr : c.age === c.chSpdEnd && (c.speed = c.spdFin), c.age < c.aclEnd ? (c.speedH += c.aclIncrH, c.speedV += c.aclIncrV) : c.age === c.aclEnd && (c.speedH = c.aclFinH, c.speedV = c.aclFinV), this.x += Math.cos(c.direction) * c.speed * a.speedRate, this.y += Math.sin(c.direction) * c.speed * a.speedRate, this.x += c.speedH * a.speedRate, this.y += c.speedV * 
        a.speedRate, a.isInsideOfWorld(this)) {
          if(a.updateProperties || this.updateProperties) {
            this.rotation = (c.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = c.speed
          }
          if(!(c.age < c.waitTo || c.completed)) {
            for(var f;f = c.walker.next();) {
              switch(f.commandName) {
                case "fire":
                  b._fire.call(this, f, a, c, b);
                  break;
                case "wait":
                  a = 0;
                  c.waitTo = "number" === typeof f.value ? c.age + f.value : 0 !== (a = ~~f.value) ? c.age + a : c.age + eval(f.value);
                  return;
                case "changeDirection":
                  b._changeDirection.call(this, f, a, c);
                  break;
                case "changeSpeed":
                  b._changeSpeed.call(this, f, c);
                  break;
                case "accel":
                  b._accel.call(this, f, c);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  b._notify.call(this, f)
              }
            }
            c.completed = !0;
            c.parentTicker ? c.parentTicker.completeChild() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), c.completed = !0, c.parentTicker ? c.parentTicker.completeChild() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    };
    b = b || "top";
    if("string" === typeof b) {
      c.walker = this._bulletml.getWalker(b, a.rank)
    }else {
      if(b instanceof bulletml.Bullet) {
        c.walker = b.getWalker(a.rank)
      }else {
        throw window.console.error(a, b), Error("\u5f15\u6570\u304c\u4e0d\u6b63");
      }
    }
    c._pattern = this;
    c.config = a;
    c.waitTo = -1;
    c.completed = !1;
    c.direction = 0;
    c.lastDirection = 0;
    c.speed = 0;
    c.lastSpeed = 0;
    c.speedH = 0;
    c.speedV = 0;
    c.dirIncr = 0;
    c.dirFin = 0;
    c.chDirEnd = -1;
    c.spdIncr = 0;
    c.spdFin = 0;
    c.chSpdEnd = -1;
    c.aclIncrH = 0;
    c.aclFinH = 0;
    c.aclIncrV = 0;
    c.aclFinV = 0;
    c.aclEnd = -1;
    c.age = -1;
    c.isDanmaku = !0;
    return c
  }, _createSimpleTicker:function(a) {
    a = function(a) {
      var b = {}, c = tm.bulletml.AttackPattern.defaultConfig, f;
      for(f in c) {
        c.hasOwnProperty(f) && (b[f] = c[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    if(!a.target) {
      throw Error("target is undefined in config.");
    }
    var b = function() {
      this.x += b.deltaX;
      this.y += b.deltaY;
      b.config.isInsideOfWorld(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    };
    b.config = a;
    b.direction = 0;
    b.speed = 0;
    b.deltaX = 0;
    b.deltaY = 0;
    b.isDanmaku = !0;
    return b
  }, _fire:function(b, c, d, i) {
    if(void 0 === this.onfire || this.onfire()) {
      var j = {label:b.bullet.label}, m;
      for(m in b.bullet.option) {
        j[m] = b.bullet.option[m]
      }
      if(j = c.bulletFactory(j)) {
        var k = (m = !!b.bullet.actions.length) ? i._createSimpleTicker(c) : i.createTicker(c, b.bullet), n = this, l = {x:this.x + b.option.offsetX, y:this.y + b.option.offsetY};
        d.lastDirection = k.direction = function(i) {
          var j = eval(i.value) * Math.DEG_TO_RAD;
          switch(i.type) {
            case "aim":
              return c.target ? b.option.autonomy ? a(l, c.target) + j : a(n, c.target) + j : j - Math.PI / 2;
            case "absolute":
              return j - Math.PI / 2;
            case "relative":
              return d.direction + j;
            default:
              return d.lastDirection + j
          }
        }(b.direction || b.bullet.direction);
        d.lastSpeed = k.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return d.speed + b;
            case "sequence":
              return d.lastSpeed + b;
            default:
              return b
          }
        }(b.speed || b.bullet.speed);
        j.x = l.x;
        j.y = l.y;
        m && (k.deltaX = Math.cos(k.direction) * k.speed * c.speedRate, k.deltaY = Math.sin(k.direction) * k.speed * c.speedRate);
        j.updateProperties = !!j.updateProperties;
        if(c.updateProperties || j.updateProperties) {
          j.rotation = (k.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, j.speed = k.speed
        }
        j.addEventListener("enterframe", k);
        j.addEventListener("removed", function() {
          this.removeEventListener("enterframe", k);
          this.removeEventListener("removed", arguments.callee)
        });
        c.addTarget ? c.addTarget.addChild(j) : this.parent && this.parent.addChild(j)
      }
    }
  }, _changeDirection:function(c, d, h) {
    var i = eval(c.direction.value) * Math.DEG_TO_RAD, j = eval(c.term);
    switch(c.direction.type) {
      case "aim":
        c = d.target;
        if(!c) {
          return
        }
        h.dirFin = a(this, c) + i;
        h.dirIncr = b(h.dirFin - h.direction) / j;
        break;
      case "absolute":
        h.dirFin = i - Math.PI / 2;
        h.dirIncr = b(h.dirFin - h.direction) / j;
        break;
      case "relative":
        h.dirFin = h.direction + i;
        h.dirIncr = b(h.dirFin - h.direction) / j;
        break;
      case "sequence":
        h.dirIncr = i, h.dirFin = h.direction + h.dirIncr * (j - 1)
    }
    h.chDirEnd = h.age + j
  }, _changeSpeed:function(a, b) {
    var c = eval(a.speed.value), d = eval(a.term);
    switch(a.speed.type) {
      case "absolute":
        b.spdFin = c;
        b.spdIncr = (b.spdFin - b.speed) / d;
        break;
      case "relative":
        b.spdFin = c + b.speed;
        b.spdIncr = (b.spdFin - b.speed) / d;
        break;
      case "sequence":
        b.spdIncr = c, b.spdFin = b.speed + b.spdIncr * d
    }
    b.chSpdEnd = b.age + d
  }, _accel:function(a, b) {
    var c = eval(a.term);
    b.aclEnd = b.age + c;
    if(a.horizontal) {
      var d = eval(a.horizontal.value);
      switch(a.horizontal.type) {
        case "absolute":
        ;
        case "sequence":
          b.aclIncrH = (d - b.speedH) / c;
          b.aclFinH = d;
          break;
        case "relative":
          b.aclIncrH = d, b.aclFinH = (d - b.speedH) * c
      }
    }else {
      b.aclIncrH = 0, b.aclFinH = b.speedH
    }
    if(a.vertical) {
      switch(d = eval(a.vertical.value), a.vertical.type) {
        case "absolute":
        ;
        case "sequence":
          b.aclIncrV = (d - b.speedV) / c;
          b.aclFinV = d;
          break;
        case "relative":
          b.aclIncrV = d, b.aclFinV = (d - b.speedV) * c
      }
    }else {
      b.aclIncrV = 0, b.aclFinV = b.speedV
    }
  }, _notify:function(a) {
    var b = tm.event.Event(a.eventName);
    if(a.params) {
      for(var c in a.params) {
        b[c] = a.params[c]
      }
    }
    this.dispatchEvent(b)
  }});
  var c = function() {
    var a = tm.graphics.Canvas();
    a.resize(8, 8);
    a.setTransformCenter();
    a.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    a.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return a
  }();
  tm.bulletml.defaultBulletFactory = function(a) {
    var b = tm.app.Sprite(8, 8, c);
    b.label = a.label;
    return b
  };
  var d = null;
  tm.bulletml.defaultIsInsideOfWorld = function(a) {
    null === d && (d = a.getRoot());
    return 0 <= a.x && a.x < APP.width && 0 <= a.y && a.y < APP.height
  };
  tm.bulletml.defaultOnFire = function(a) {
    return!0
  };
  tm.bulletml.AttackPattern.defaultConfig = {bulletFactory:tm.bulletml.defaultBulletFactory, isInsideOfWorld:tm.bulletml.defaultIsInsideOfWorld, rank:0, updateProperties:!1, speedRate:2, target:null};
  bulletml.Root.prototype.createTicker = function(a) {
    return tm.bulletml.AttackPattern(this).createTicker(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
var STATS = !1;
tm.preload(function() {
  STATS && tm.util.ScriptManager.loadStats()
});
tm.main(function() {
  var b = gls2.GlShooter2("#canvas2d");
  STATS && b.enableStats();
  b.run()
});
var SC_W = 480, SC_H = 640, gls2 = {core:null};
gls2.GlShooter2 = tm.createClass({superClass:tm.app.CanvasApp, highScore:0, highStage:0, bgmVolume:1, seVolume:1, difficulty:1, extendScore:[1E9, 1E10], gameScene:null, init:function(b) {
  if(null !== gls2.core) {
    throw Error("class 'gls2.GlShooter2' is singleton!!");
  }
  this.superInit(b);
  gls2.core = this;
  this.resize(SC_W, SC_H).fitWindow();
  this.fps = 60;
  this.background = "black";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", soundExplode:"assets/sen_ge_taihou03.mp3"}, nextScene:function() {
    this._onLoadAssets();
    return gls2.TitleScene()
  }.bind(this)}))
}, _onLoadAssets:function() {
  gls2.Danmaku.setup();
  gls2.Effect.setup();
  gls2.ShotBullet.createPool(50);
  this.gameScene = gls2.GameScene()
}, exitApp:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.highScore, "")
}});
gls2.playSound = function(b) {
  0 !== gls2.core.seVolume && (b = tm.asset.AssetManager.get(b), b.volume = 0.1 * gls2.core.seVolume, b && b.clone().play())
};
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.distanceSq = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
(function() {
  var b = null, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.Player = tm.createClass({superClass:tm.app.Sprite, type:0, roll:0, controllable:!0, muteki:!1, gameScene:null, hyperGauge:100, speed:4.5, bits:null, laser:null, hitCircle:null, bitPivot:null, hyperCircle0:null, hyperCircle1:null, init:function(a, b) {
    this.superInit("tex1", 64, 64);
    this.type = b;
    this.gameScene = a;
    tm.bulletml.AttackPattern.defaultConfig.target = this;
    this.altitude = 10;
    this.laser = gls2.Laser(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"}, 50);
    this.laser.visible = !1;
    this.laser.addChildTo(a);
    this._createHitCircle();
    this.bits = this._createBits();
    this.bitPivot = tm.app.CanvasElement().addChildTo(this);
    for(var f = 0, g = this.bits.length;f < g;f++) {
      var h = this.bits[f];
      gls2.Bit(this, h).setPosition(h.x, h.y).addChildTo(this.bitPivot)
    }
    this.light = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.light.blendMode = "lighter";
    this.hyperCircle0 = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(100,100,255,0.0)"}, {offset:0.3, color:"rgba(100,100,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.7, color:"rgba(100,100,255,0.1)"}, {offset:1, color:"rgba(100,100,255,0.0)"}]).toStyle(), lineWidth:2}).addChildTo(this);
    this.hyperCircle0.blendMode = "lighter";
    this.hyperCircle0.update = function() {
      this.rotation += 2
    };
    this.hyperCircle1 = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(100,100,255,0.0)"}, {offset:0.3, color:"rgba(100,100,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.7, color:"rgba(100,100,255,0.1)"}, {offset:1, color:"rgba(100,100,255,0.0)"}]).toStyle(), lineWidth:2}).addChildTo(this);
    this.hyperCircle1.blendMode = "lighter";
    this.hyperCircle1.update = function() {
      this.rotation -= 2
    }
  }, _createBits:function() {
    return[{x:-70, y:20, d:0.1, turn:!1, dt:-0.7, v:!0}, {x:-40, y:40, d:0.1, turn:!1, dt:-0.5, v:!0}, {x:40, y:40, d:0.1, turn:!0, dt:0.5, v:!0}, {x:70, y:20, d:0.1, turn:!0, dt:0.7, v:!0}]
  }, _createHitCircle:function() {
    this.hitCircle = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.hitCircle.setFrameIndex(5);
    this.hitCircle.blendMode = "lighter";
    this.hitCircle.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, pressTimeC:-1, fireShot:!1, fireLaser:!1, update:function(c) {
    null === b && (b = gls2.BackfireParticle(this.gameScene.ground));
    var d = c.keyboard;
    if(this.controllable) {
      var f = d.getKeyAngle();
      null !== f && (f = a[f], this.x += f.x * this.speed * (this.fireLaser ? 0.75 : 1), this.y += f.y * this.speed * (this.fireLaser ? 0.75 : 1));
      this.x = gls2.math.clamp(this.x, 5, SC_W - 5);
      this.y = gls2.math.clamp(this.y, 5, SC_H - 5);
      var f = d.getKey("c"), g = d.getKey("z");
      this.pressTimeC = f ? this.pressTimeC + 1 : this.pressTimeC - 1;
      this.pressTimeC = gls2.math.clamp(this.pressTimeC, -1, 10);
      this.fireLaser = g && f || 10 === this.pressTimeC;
      this.fireShot = !this.fireLaser && (0 <= this.pressTimeC || g) && 0 === c.frame % 5;
      g && (this.pressTimeC = 0);
      this.laser.x = this.x;
      this.laser.y = this.y - 40;
      if(this.fireLaser) {
        f = 0;
        for(g = this.bits.length;f < g;f++) {
          this.bits[f].v = !1
        }
        this.bitPivot.rotation = 0
      }else {
        this.laser.visible = !1;
        f = 0;
        for(g = this.bits.length;f < g;f++) {
          this.bits[f].v = !0
        }
      }
      this.fireShot && (f = Math.sin(0.2 * c.frame), g = gls2.ShotBullet.fire(this.x - 7 - 6 * f, this.y - 5, -90), null !== g && g.addChildTo(this.gameScene), g = gls2.ShotBullet.fire(this.x + 7 + 6 * f, this.y - 5, -90), null !== g && g.addChildTo(this.gameScene));
      d.getKeyDown("x") && !this.gameScene.isBombActive && 0 < this.gameScene.bomb && gls2.Bomb(this, this.gameScene).setPosition(Math.clamp(this.x, 0.2 * SC_W, 0.8 * SC_W), Math.max(this.y - 0.5 * SC_H, 0.3 * SC_H))
    }
    this.hyperCircle0.visible = this.hyperCircle1.visible = 100 === this.hyperGauge;
    this.controlBit(d);
    this._calcRoll(d);
    0 === c.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.gameScene), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.gameScene))
  }, controlBit:function(a) {
    var b = this.bitPivot;
    b.rotation = this.controllable && a.getKey("left") ? Math.max(b.rotation - 3, -40) : this.controllable && a.getKey("right") ? Math.min(b.rotation + 3, 40) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0
  }, _calcRoll:function(a) {
    this.controllable && a.getKey("left") ? this.roll = gls2.math.clamp(this.roll - 0.2, -3, 3) : this.controllable && a.getKey("right") ? this.roll = gls2.math.clamp(this.roll + 0.2, -3, 3) : 0 > this.roll ? this.roll = gls2.math.clamp(this.roll + 0.2, -3, 3) : 0 < this.roll && (this.roll = gls2.math.clamp(this.roll - 0.2, -3, 3));
    a = 3 + ~~this.roll;
    this.setFrameIndex(a);
    return a
  }});
  gls2.Bit = tm.createClass({superClass:tm.app.AnimationSprite, bit:null, player:null, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.bit = b;
    this.player = a;
    this.altitude = 10;
    this.gotoAndPlay(b.turn ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.bit.v) {
      this.x = this.bit.x;
      this.y = this.bit.y;
      this.rotation = Math.radToDeg(this.bit.d * this.bit.dt);
      var d = this.parent.localToGlobal(this);
      this.bit.v && 0 === a.frame % 2 && b.clone(40).setPosition(d.x, d.y).addChildTo(a.gameScene);
      this.player.fireShot && (d = gls2.ShotBullet.fire(d.x, d.y, this.parent.rotation + this.rotation - 90), null !== d && d.addChildTo(a.gameScene))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = null;
  gls2.ShotBullet = tm.createClass({superClass:tm.app.Sprite, speed:20, attackPower:1, init:function() {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.setScale(1.5, 1.5);
    this.addEventListener("added", function() {
      c.push(this)
    });
    this.addEventListener("removed", function() {
      var b = c.indexOf(this);
      -1 !== b && c.splice(b, 1);
      a.push(this)
    });
    this.boundingRadius = 32;
    null === b && (b = gls2.Particle(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    this.setFrameIndex(2, 64, 64)
  }, update:function() {
    this.x += this.vx;
    this.y += this.vy;
    (-60 > this.x || SC_W + 60 < this.x || -60 > this.y || SC_H + 60 < this.y) && this.remove()
  }, genParticle:function(a) {
    for(var c = 0;c < a;c++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), h = gls2.math.randf(2, 8), i = 2 * Math.random() * Math.PI;
      g.dx = Math.cos(i) * h;
      g.dy = Math.sin(i) * h;
      g.scaleX = g.scaleY = (gls2.math.randf(0.1, 0.5) + gls2.math.randf(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.dx;
        this.y += this.dy;
        this.dx *= 0.9;
        this.dy *= 0.9
      })
    }
  }});
  gls2.ShotBullet.clearAll = function() {
    for(var a = [].concat(c), b = 0, g = a.length;b < g;b++) {
      a[b].remove()
    }
  };
  var a = [], c = gls2.ShotBullet.activeList = [];
  gls2.ShotBullet.createPool = function(b) {
    for(var c = 0;c < b;c++) {
      a.push(gls2.ShotBullet())
    }
  };
  gls2.ShotBullet.fire = function(b, c, g) {
    var h = a.pop();
    if(void 0 === h) {
      return null
    }
    var i = gls2.math.degToRad(g);
    h.vx = Math.cos(i) * h.speed;
    h.vy = Math.sin(i) * h.speed;
    h.setPosition(b, c);
    h.rotation = g + 90;
    return h
  }
})();
(function() {
  var b = null;
  gls2.Laser = tm.createClass({superClass:tm.app.Sprite, player:null, gameScene:null, attackPower:2, _hitY:0, frame:0, textures:null, color:null, beforeFrameVisible:!1, head:null, foot:null, aura:null, init:function(a, b, d) {
    this.player = a;
    this.gameScene = a.gameScene;
    var f = this;
    this.textures = b;
    this.superInit(b.redBody, d, 100);
    this.boundingWidth = d;
    this.boundingHeightBottom = 1;
    this.scrollOffset = 0;
    this.origin.y = 1;
    a = this.aura = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
    a.y = 60;
    a.addChildTo(this);
    (this.foot = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
    b = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
    b.addChildTo(this);
    b.update = function() {
      this.y = f._hitY - f.y;
      -10 < this.y && (this.y = -10);
      this.visible = 0 < f._hitY
    };
    this.setColor("blue")
  }, setColor:function(a) {
    this.color = a;
    this.image = tm.asset.AssetManager.get(this.textures[this.color + "Body"]);
    this.srcRect.x = 0;
    this.srcRect.y = 0;
    this.srcRect.width = this.image.width / 16;
    this.aura.gotoAndPlay(this.color);
    this.foot.gotoAndPlay(this.color);
    this.head.gotoAndPlay(this.color);
    b = gls2.Particle(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element);
    return this
  }, genParticle:function(a, c) {
    c = c || this._hitY;
    for(var d = 0;d < a;d++) {
      var f = b.clone().setPosition(this.x, c).addChildTo(this.gameScene), g = gls2.math.randf(8, 14), h = gls2.math.randf(0, Math.PI);
      f.dx = Math.cos(h) * g;
      f.dy = Math.sin(h) * g;
      f.scaleX = f.scaleY = (gls2.math.randf(0.5, 1.5) + gls2.math.randf(0.5, 1.5)) / 2;
      f.addEventListener("enterframe", function() {
        this.x += this.dx;
        this.y += this.dy;
        this.dx *= 0.95;
        this.dy *= 0.95
      })
    }
  }, genAuraParticle:function(a, c, d) {
    c = c || this.x;
    d = d || this._hitY;
    for(var f = 0;f < a;f++) {
      var g = b.clone().setPosition(c, d).addChildTo(this.gameScene), h = gls2.math.randf(12, 20), i = gls2.math.randf(0, Math.PI);
      g.dx = Math.cos(i) * h;
      g.dy = Math.sin(i) * h;
      g.scaleX = g.scaleY = (gls2.math.randf(1, 3) + gls2.math.randf(1, 3)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.dx;
        this.y += this.dy;
        this.dx *= 0.95;
        this.dy *= 0.95
      })
    }
  }, update:function(a) {
    (this.visible = this.player.fireLaser) ? (this._hitY = Math.max(0, this._hitY - 40), this.height = this.y - this._hitY, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this._hitY = this.y - 40;
    this.beforeFrameVisible = this.visible
  }, draw:function(a) {
    var b = this.srcRect, d = this._image.element;
    b.x = b.width * this.frame;
    a.context.drawImage(d, b.x, b.height - this.height, b.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, getHitY:function() {
    return this._hitY
  }, setHitY:function(a) {
    this._hitY = a;
    this.head.update()
  }});
  gls2.Laser.prototype.getter("boundingHeightTop", function() {
    return this.position.y - this._hitY
  })
})();
(function() {
  gls2.Bomb = tm.createClass({superClass:tm.app.Object2D, gameScene:null, init:function(a, c) {
    this.superInit();
    this.player = a;
    this.player.muteki = !0;
    this.gameScene = c;
    this.gameScene.bomb -= 1;
    this.shockwave = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.shockwave.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.shockwave));
    this.core = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = Math.randf(0.9, 1.1)
      }
    }.bind(this.core));
    this.origParticle = gls2.Particle(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element);
    this.r = this.a = 0;
    this.b = 8;
    this.age = 0;
    this.rd = 1;
    this.addEventListener("added", function() {
      b.push(this)
    });
    this.addEventListener("removed", function() {
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.addChildTo(this.gameScene)
  }, update:function(a) {
    gls2.Danmaku.erase();
    for(a = 0;a < this.b;a++) {
      var b = this.a * this.rd + 2 * a * Math.PI / this.b;
      this.origParticle.clone().setPosition(Math.cos(b) * this.r + this.x, Math.sin(b) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.02 * this.age;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? (this.player.muteki = !1, this.remove()) : Math.PI < a ? (this.b = 16, this.age += 3.6, this.rd = -1) : (this.b = 8, this.age += 1.8, this.rd = 1)
  }});
  gls2.Bomb.attackPower = 2;
  var b = gls2.Bomb.activeList = []
})();
gls2.Stage = tm.createClass({starItem:0, killCount:0, enemyCount:0, player:null, gameScene:null, frame:0, background:null, init:function(b, a) {
  var c = this.gameScene = b;
  this.player = b.player;
  c.ground.direction = 0.5 * Math.PI;
  c.ground.speed = 0.6;
  this.background = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([{offset:0, color:"#338"}, {offset:1, color:"#114"}]).toStyle();
  this.frame = 0
}, update:function() {
  var b = [], a;
  for(a in gls2.EnemyUnit) {
    b.push(a)
  }
  b = gls2.EnemyUnit[b.random()];
  if(200 < this.frame && 0 === this.frame % 30) {
    a = 0;
    for(var c = b.length;a < c;a++) {
      this.launchEnemy(b[a])
    }
  }
  this.frame += 1
}, launchEnemy:function(b) {
  var a = gls2.Enemy.pool.shift();
  a ? (this.enemyCount += 1, a.setup(this.gameScene, this, b.soft, b.hard).setPosition(b.x, b.y).addChildTo(this.gameScene).onLaunch()) : console.warn("\u6575\u304c\u8db3\u308a\u306a\u3044\uff01")
}, onDestroyEnemy:function(b) {
  this.killCount += 1
}});
gls2.Stage.create = function(b, a) {
  return gls2.Stage(b)
};
(function() {
  gls2.StageData = [];
  gls2.StageData[0] = {}
})();
(function() {
  gls2.Effect = {};
  gls2.Effect.setup = function() {
    gls2.Noise.generate(256);
    gls2.Effect.explosion = Array.range(0, 2).map(function(b) {
      return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:null}}}, 100, 100))
    });
    gls2.Effect.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
    gls2.Effect.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
    gls2.Effect.particle16 = gls2.Particle(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
  };
  gls2.Effect.genParticle = function(b, a, c) {
    b = gls2.Effect.particle16.clone().setPosition(b, a).addChildTo(c);
    a = gls2.math.randf(5, 20);
    c = gls2.math.randf(Math.PI, 2 * Math.PI);
    b.dx = Math.cos(c) * a;
    b.dy = Math.sin(c) * a;
    b.scaleX = b.scaleY = (gls2.math.randf(0.1, 0.5) + gls2.math.randf(0.1, 0.5)) / 2;
    b.addEventListener("enterframe", function() {
      this.x += this.dx;
      this.y += this.dy;
      this.dx *= 0.9;
      this.dy *= 0.9
    })
  };
  gls2.Effect.genShockwave = function(b, a, c) {
    var d = tm.app.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter").addChildTo(c);
    d.image = gls2.Effect.shockwaveImage;
    d.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
      d.remove()
    })
  };
  gls2.Effect.explodeS = function(b, a, c, d) {
    gls2.playSound("soundExplode");
    b = gls2.Effect.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    b.isEffect = !0;
    if(void 0 !== d) {
      var f = d.x, g = d.y;
      b.addEventListener("enterframe", function() {
        this.x += f;
        this.y += g;
        f *= 0.99;
        g *= 0.99
      })
    }
    b.addChildTo(c)
  };
  gls2.Effect.explodeGS = function(b, a, c) {
    gls2.playSound("soundExplode");
    var d = gls2.Effect.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.y -= 1.4;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    d.isEffect = !0;
    d.addChildTo(c);
    d = gls2.Effect.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.rotation += 2;
      this.x += 0.7;
      this.y -= 0.7;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
    d.isEffect = !0;
    d.addChildTo(c);
    d = gls2.Effect.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.rotation -= 2;
      this.x -= 0.7;
      this.y -= 0.7;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
    d.isEffect = !0;
    d.addChildTo(c)
  };
  gls2.Effect.explodeM = function(b, a, c) {
    gls2.playSound("soundExplode");
    for(var d = 0, f = gls2.math.rand(5, 10);d < f;d++) {
      var g = gls2.Effect.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      g.isEffect = !0;
      g.addChildTo(c)
    }
    for(d = 0;10 > d;d++) {
      gls2.Effect.genParticle(b, a, c)
    }
  }
})();
gls2.ScoreLabel = tm.createClass({superClass:tm.graphics.Canvas, gameScene:null, init:function(b) {
  this.superInit("#scoreLabel");
  this.gameScene = b;
  this.resize(SC_W, SC_H).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)"
}, update:function() {
  this.clear();
  this.resetTransform();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.draw();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.02)";
  for(var b = -2;2 >= b;b++) {
    for(var a = -2;2 >= a;a++) {
      this.setTransform(1, 0, 0, 1, b, a), this.draw()
    }
  }
  this.context.globalCompositeOperation = "source-over";
  for(b = 0;b < this.gameScene.zanki;b++) {
    this.drawTexture(tm.asset.AssetManager.get("tex1"), 192, 0, 64, 64, 5 + 32 * b, 40, 32, 32)
  }
}, draw:function() {
  this.context.globalCompositeOperation = "lighter";
  var b;
  this.setText("16px Orbitron", "left", "top");
  var a = this.gameScene.score + "";
  a.substring(a.indexOf("."), a.length);
  a = a.padding(16, "0");
  b = "";
  for(var c = 0;c < a.length;c += 4) {
    b += a.substring(c, c + 4) + " "
  }
  this.fillText(b, 5, 5);
  this.setText("14px Orbitron", "left", "top");
  a = (~~this.gameScene.baseScore + "").padding(8, "0");
  b = "";
  for(c = 0;c < a.length;c += 4) {
    b += a.substring(c, c + 4) + " "
  }
  this.fillText(b, 5, 22);
  0 < this.gameScene.comboCount && (this.setText("bold 40px Orbitron", "left", "top"), this.strokeText(~~this.gameScene.comboCount + " HIT!!", 10, 85))
}});
gls2.Collision = {isHit:function(b, a) {
  var c = b.x + b.boundingWidthRight, d = b.y - b.boundingHeightTop, f = b.y + b.boundingHeightBottom, g = a.x - a.boundingWidthLeft, h = a.y - a.boundingHeightTop, i = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && c > g && d < i && f > h
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:null, init:function() {
  this.superInit()
}, startSceneForResult:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}, update:function(b) {
  b.pointing.getPointingEnd() && gls2.PointerEffect(b.pointing).addChildTo(this)
}});
gls2.PointerEffect = tm.createClass({superClass:tm.app.CircleShape, init:function(b) {
  this.superInit(150, 150, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(75, 75, 0, 75, 75, 75).addColorStopList([{offset:0, color:"rgba(255,255,255,0.0)"}, {offset:0.6, color:"rgba(255,255,255,0.0)"}, {offset:1, color:"rgba(255,255,255,0.8)"}]).toStyle()});
  this.setPosition(b.x, b.y);
  this.width = this.height = 1;
  this.tweener.clear().to({width:150, height:150, alpha:0}, 300, "easeOutQuad").call(function() {
    this.remove()
  }.bind(this))
}});
gls2.DialogMenu = tm.createClass({superClass:gls2.Scene, titleText:null, menu:null, descriptions:null, showExit:!1, title:null, selections:[], description:null, box:null, cursor:null, _selected:0, _opened:!1, _finished:!1, init:function(b, a, c, d, f) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~c;
  this.showExit = !!f;
  this.descriptions = d ? d : [].concat(a);
  this.showExit && (a.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  b = Math.max(50 * (1 + a.length), 50) + 40;
  this.box = tm.app.RectangleShape(0.8 * SC_W, b, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"rgba(1,2,48,0.8)"}).setPosition(0.5 * SC_W, 0.5 * SC_H);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:0.8 * SC_W, height:b}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.app.Label("", 14).setPosition(0.5 * SC_W, SC_H - 10).addChildTo(this)
}, _onOpen:function() {
  var b = 0.5 * SC_H - 25 * this.menu.length;
  this.title = tm.app.Label(this.titleText, 30).setPosition(0.5 * SC_W, b).addChildTo(this);
  this.selections = this.menu.map(function(a, c) {
    var d = this;
    b += 50;
    var f = tm.app.Label(a).setPosition(0.5 * SC_W, b).addChildTo(this);
    f.interactive = !0;
    f.addEventListener("touchend", function() {
      d._selected === c ? d.closeDialog(d._selected) : d._selected = c
    });
    f.width = 0.7 * SC_W;
    return f
  }.bind(this));
  this._createCursor();
  this._opened = !0
}, _createCursor:function() {
  this.cursor = tm.app.RectangleShape(0.7 * SC_W, 10, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.LinearGradient(0, 0, 0.7 * SC_W, 0).addColorStopList([{offset:0, color:"rgba(  0,255,100,0.0)"}, {offset:0.2, color:"rgba(  0,255,100,0.3)"}, {offset:0.5, color:"rgba(  0,255,255,0.5)"}, {offset:0.8, color:"rgba(  0,255,100,0.3)"}, {offset:1, color:"rgba(  0,255,100,0.0)"}]).toStyle()}).addChildTo(this);
  this.cursor.blendMode = "lighter";
  this.cursor.x = 0.5 * SC_W;
  this.cursor.s = this._selected;
  this.cursor.y = this.selections[this._selected].y;
  this.cursor.update = function() {
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"))
  }
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments);
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("space") ? this.closeDialog(this._selected) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.math.clamp(this._selected, 0, this.selections.length - 1)) : b.keyboard.getKeyDown("up") && (this._selected -= 1, 
  this._selected = gls2.math.clamp(this._selected, 0, this.selections.length - 1)))
}, closeDialog:function(b) {
  this._finished = !0;
  this.tweener.clear().wait(200).call(function() {
    this.cursor.remove();
    this.title.remove();
    this.selections.each(function(a) {
      a.remove()
    });
    this.box.tweener.clear();
    this.box.tweener.to({width:1, height:1}, 200, "easeInExpo").call(function() {
      this.finish(b)
    }.bind(this))
  }.bind(this))
}, draw:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, SC_W, SC_H)
}});
gls2.Scene.prototype.openDialogMenu = function(b, a, c, d, f, g) {
  void 0 === g && (g = !0);
  this.startSceneForResult(gls2.DialogMenu(b, a, d, f, g), c)
};
(function() {
  gls2.Particle = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, alphaDecayRate:0.85, size:0, image:null, init:function(b, a, c, d) {
    this.superInit();
    this.width = this.height = this.size = b;
    void 0 !== a && (this.alpha = a);
    void 0 !== c && (this.alphaDecayRate = c);
    this.blendMode = "lighter";
    this.image = d ? d : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
  }, update:function(b) {
    this.alpha *= this.alphaDecayRate;
    0.0010 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
  }, draw:function(b) {
    b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, clone:function() {
    return gls2.Particle(this.size, this.initialAlpha, this.alphaDecayRate, this.image)
  }});
  gls2.BackfireParticle = tm.createClass({superClass:gls2.Particle, ground:null, init:function(b, a) {
    a = a || 20;
    this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
    this.ground = b
  }, update:function(b) {
    this.superClass.prototype.update.apply(this, b);
    this.x += this.ground.dx;
    this.y += this.ground.dy + 0.3
  }, clone:function(b) {
    return gls2.BackfireParticle(this.ground, b)
  }})
})();
gls2.ConsoleWindow = tm.createClass({superClass:tm.app.RectangleShape, label:null, buf:null, init:function(b) {
  this.superInit(b, 64, {fillStyle:"rgba(1,2,48,0.5)", strokeStyle:"rgba(0,0,0,0)"});
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)").addChildTo(this);
  this.buf = []
}, addLine:function(b) {
  5 < this.buf.length && this.buf.splice(1, this.buf.length - 4);
  this.buf.push(b);
  return this
}, clearBuf:function() {
  this.buf.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function(b) {
  var a = this.label.text, a = a.substring(0, a.length - 1);
  if(0 === b.frame % 2 && 0 !== this.buf.length) {
    if("" !== this.buf[0]) {
      var c = this.buf[0][0];
      this.buf[0] = this.buf[0].substring(1);
      a += c
    }else {
      this.buf.shift(), c = a.split("\n"), 3 < c.length && (c.shift(), a = c.join("\n")), a += "\n"
    }
  }
  this.label.text = a + (~~(b.frame / 6) % 2 ? "_" : " ")
}});
gls2.Noise = {generate:function(b) {
  for(var a = function(a, b, c) {
    c = 0.5 * (1 - Math.cos(c * Math.PI));
    return a * (1 - c) + b * c
  }, c = function(c) {
    if(1 > c) {
      return null
    }
    var d = [], f = Math.random(), g, h;
    for(h = 0;h < b;h += ~~c) {
      g = Math.random();
      for(var l = 0;l < c;l++) {
        d[h + l] = a(f, g, l / c)
      }
      f = g
    }
    f = d[b - ~~c];
    g = d[0];
    for(l = 0;l < c;l++) {
      d[b - ~~c + l] = a(f, g, l / c)
    }
    return d
  }, d = [], f = 0, g = Math.pow(2, 4);8 > f;f++, g *= 2) {
    var h = c(b / g);
    if(null === h) {
      break
    }
    d.push(h)
  }
  c = [].concat(d[0]);
  f = 1;
  for(g = 0.5;f < d.length;f++, g *= 0.5) {
    for(h = 0;h < b;h++) {
      c[h] += d[f][h] * g
    }
  }
  for(f = 0;f < c.length;f++) {
    c[f] /= 2
  }
  return c
}};
(function() {
  var b = null, a = null;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:null, age:0, particles:[], gameStarted:!1, highScoreLabel:null, lastMainMenu:0, lastSetting:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(0.5 * SC_W, 0.25 * SC_H).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(0.9 * SC_W, 0.3 * SC_H).setAlign("right").addChildTo(this);
    this.highScoreLabel = tm.app.Label().setPosition(0.5 * SC_W, 0.4 * SC_H).addChildTo(this);
    tm.app.Label("press space key").setPosition(0.5 * SC_W, 0.9 * SC_H).addChildTo(this);
    this.addEventListener("enter", function() {
      this.gameStarted = !1;
      this.highScoreLabel.text = "HIGH SCORE: " + gls2.core.highScore
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, SC_W, SC_H)
  }, update:function(a) {
    this._generateParticle(80 * Math.cos(0.01 * this.age) + 0.5 * SC_W, 80 * Math.sin(0.01 * this.age) + 0.5 * SC_H, 0);
    this._generateParticle(80 * Math.cos(0.01 * this.age + Math.PI) + 0.5 * SC_W, 80 * Math.sin(0.01 * this.age + Math.PI) + 0.5 * SC_H, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") || a.pointing.getPointingEnd()) && !this.gameStarted && this.openMainMenu();
    this.age += 1
  }, _generateParticle:function(c, d, f) {
    if(!this.gameStarted) {
      null === b && (b = gls2.Particle(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      null === a && (a = gls2.Particle(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      f = 0 === f ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      f.speed = 0.6;
      var g = gls2.math.randf(0, 2 * Math.PI), h = gls2.math.rand(0, 20);
      f.setPosition(Math.cos(g) * h + c, Math.sin(g) * h + d);
      var i = this;
      f.update = function() {
        this.x += Math.cos(g) * this.speed;
        this.y += Math.sin(g) * this.speed;
        if(-50 > this.x || SC_W + 50 < this.x || -50 > this.y || SC_H + 50 < this.y) {
          this.remove();
          var a = i.particles.indexOf(this);
          -1 !== a && i.particles.splice(a, 1)
        }
      };
      this.particles.push(f)
    }
  }, openMainMenu:function() {
    this.openDialogMenu("MAIN MENU", ["start", "tutorial", "setting", "save score"], this.onResultMainMenu, this.lastMainMenu, ["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"])
  }, onResultMainMenu:function(a) {
    4 !== a && (this.lastMainMenu = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.gameStarted = !0;
          for(var a = 0, b = this.particles.length;a < b;a++) {
            this.particles[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.gameScene.gameStart(2);
          gls2.core.pushScene(gls2.core.gameScene)
        }.bind(this));
        break;
      case 2:
        this.openSetting();
        break;
      case 3:
        gls2.core.exitApp()
    }
  }, openSetting:function() {
    this.openDialogMenu("SETTING", ["bgm volume", "sound volume", "difficulty"], this.onResultSetting, this.lastSetting, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
  }, onResultSetting:function(a) {
    3 !== a && (this.lastSetting = a);
    switch(a) {
      case 0:
        this.openBgmSetting();
        break;
      case 1:
        this.openSeSetting();
        break;
      case 2:
        this.openDifficultySetting();
        break;
      default:
        this.openMainMenu()
    }
  }, openBgmSetting:function() {
    this.openDialogMenu("BGM VOLUME", "012345".split(""), this.onResultBgmSetting, gls2.core.bgmVolume)
  }, onResultBgmSetting:function(a) {
    6 !== a && (gls2.core.bgmVolume = a);
    this.openSetting()
  }, openSeSetting:function() {
    this.openDialogMenu("SE VOLUME", "012345".split(""), this.onResultSeSetting, gls2.core.seVolume)
  }, onResultSeSetting:function(a) {
    6 !== a && (gls2.core.seVolume = a);
    this.openSetting()
  }, openDifficultySetting:function() {
    this.openDialogMenu("DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.onResultDifficultySetting, gls2.core.difficulty, ["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", 
    "\u6b7b\u306c\u304c\u3088\u3044"])
  }, onResultDifficultySetting:function(a) {
    5 !== a && (gls2.core.difficulty = a);
    this.openSetting()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
gls2.ShipSelectScene = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit();
  tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(SC_W / 2, SC_H / 2).addChildTo(this)
}});
(function() {
  var b = null;
  gls2.GameScene = tm.createClass({superClass:gls2.Scene, player:null, score:0, baseScore:0, comboCount:0, comboGauge:0, stage:null, ground:null, zanki:3, bomb:0, bombMax:3, groundLayer:null, playerLayer:null, enemyLayer:null, effectLayer0:null, effectLayer1:null, bulletLayer:null, labelLayer:null, lastElement:null, consoleWindow:null, scoreLabel:null, rank:0, init:function() {
    if(null !== b) {
      throw Error("class 'gls2.GameScene' is singleton!!");
    }
    this.superInit();
    b = this;
    this.scoreLabel = gls2.ScoreLabel(this);
    this._createGround();
    this.groundLayer = tm.app.Object2D().addChildTo(this);
    this.enemyLayer = tm.app.Object2D().addChildTo(this);
    this.effectLayer0 = tm.app.Object2D().addChildTo(this);
    this.playerLayer = tm.app.Object2D().addChildTo(this);
    this.effectLayer1 = tm.app.Object2D().addChildTo(this);
    this.bulletLayer = tm.app.Object2D().addChildTo(this);
    this.labelLayer = tm.app.Object2D().addChildTo(this);
    this.consoleWindow = gls2.ConsoleWindow(200).setPosition(SC_W - 100 - 5, 37).addChildTo(this.labelLayer);
    tm.bulletml.AttackPattern.defaultConfig.addTarget = this;
    this.lastElement = tm.app.Object2D().addChildTo(this);
    this.lastElement.update = function(a) {
      this.onexitframe(a)
    }.bind(this)
  }, println:function(a) {
    this.consoleWindow.addLine(a)
  }, _createGround:function() {
    var a = this.ground = tm.app.CanvasElement().addChildTo(this);
    a.gx = a.gy = 0;
    a.direction = 0.5 * Math.PI;
    a.speed = 1;
    a.dx = 0;
    a.dy = 0;
    var b = 8 * Math.sqrt(3);
    a.update = function() {
      this.dx = Math.cos(this.direction) * this.speed;
      this.dy = Math.sin(this.direction) * this.speed;
      for(this.gx += this.dx;48 < this.gx;) {
        this.gx -= 48
      }
      for(;-48 > this.gx;) {
        this.gx += 48
      }
      for(this.gy += this.dy;2 * b < this.gy;) {
        this.gy -= 2 * b
      }
      for(;this.gy < 2 * -b;) {
        this.gy += 2 * b
      }
    };
    a.blendMode = "lighter";
    a.draw = function(a) {
      a.lineWidth = 0.2;
      a.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, SC_H).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
      a.beginPath();
      for(var f = 0, g = this.gx - 48;g < SC_W + 48;g += 24) {
        for(var f = 0 === f ? b : 0, h = this.gy - 2 * b + f;h < SC_H + 2 * b;h += 2 * b) {
          a.line(g, h, g + 16, h), a.line(g, h, g - 8, h + b), a.line(g, h, g - 8, h - b)
        }
      }
      a.stroke()
    }
  }, addChild:function(a) {
    a instanceof gls2.Player ? this.playerLayer.addChild(a) : a instanceof gls2.Enemy ? a.isGround ? this.groundLayer.addChild(a) : this.enemyLayer.addChild(a) : a instanceof gls2.BackfireParticle || a instanceof gls2.ShotBullet || a instanceof gls2.Laser || a.isEffect ? this.effectLayer0.addChild(a) : a instanceof gls2.Particle ? this.effectLayer1.addChild(a) : a instanceof gls2.Bullet ? this.bulletLayer.addChild(a) : this.superClass.prototype.addChild.apply(this, arguments)
  }, update:function(a) {
    this.stage.update(a.frame);
    0 === a.frame % 5 && this.scoreLabel.update();
    this.comboGauge -= 0.01;
    0 >= this.comboGauge && (0 < this.comboCount && (this.baseScore = this.baseScore * (this.comboCount - 6) / this.comboCount), this.comboCount -= 6, 0 > this.comboCount && (this.comboCount = this.baseScore = 0), this.comboGauge = 0);
    a.keyboard.getKeyDown("escape") ? this.app.popScene() : a.keyboard.getKeyDown("space") ? this.openPauseMenu(0) : a.keyboard.getKeyDown("p") && (a.canvas.saveAsImage(), this.openPauseMenu(0))
  }, onexitframe:function(a) {
    a = [].concat(gls2.Enemy.activeList);
    for(var b = [].concat(gls2.ShotBullet.activeList), d = 0, f = b.length;d < f;d++) {
      for(var g = 0, h = a.length;g < h;g++) {
        var i = a[g], j = b[d];
        if(gls2.Collision.isHit(i, j) && (j.remove(), j.genParticle(1), i.damage(j.attackPower))) {
          this.comboCount += 1;
          this.comboGauge = 1;
          this.baseScore += i.score;
          this.addScore(this.baseScore);
          a.erase(i);
          break
        }
      }
    }
    b = this.player.laser;
    if(this.player.laser.visible) {
      a = [].concat(gls2.Enemy.activeList);
      a.sort(function(a, b) {
        return b.y - a.y
      });
      g = 0;
      for(d = a.length;g < d;g++) {
        if(i = a[g], gls2.Collision.isHit(i, b)) {
          b.setHitY(i.y + i.boundingHeightBottom);
          i.damage(b.attackPower) ? (this.comboCount += 1, this.comboGauge = 1, this.baseScore += i.score, this.addScore(this.baseScore)) : this.comboGauge = Math.max(this.comboGauge, 0.1);
          b.genParticle(2);
          break
        }
      }
      f = {x:this.player.x, y:this.player.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:50, boundingHeightBottom:40};
      a = [].concat(gls2.Enemy.activeList);
      g = 0;
      for(d = a.length;g < d;g++) {
        i = a[g], gls2.Collision.isHit(i, f) && (i.damage(b.attackPower) ? (this.comboCount += 1, this.comboGauge = 1, this.baseScore += i.score, this.addScore(this.baseScore)) : (this.comboCount += 0.1, this.comboGauge = Math.max(this.comboGauge, 0.1)), b.genAuraParticle(2, 0.5 * (this.player.x + i.x), 0.5 * (this.player.y + i.y)))
      }
    }
    if(0 < gls2.Bomb.activeList.length) {
      a = [].concat(gls2.Enemy.activeList);
      g = 0;
      for(h = a.length;g < h;g++) {
        i = a[g], i.isInScreen() && i.damage(gls2.Bomb.attackPower)
      }
      this.comboGauge = this.comboCount = 0
    }
  }, openPauseMenu:function(a) {
    this.openDialogMenu("PAUSE", ["resume", "setting", "exit game"], this.onResultPause, a, ["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], !1)
  }, onResultPause:function(a) {
    switch(a) {
      case 1:
        this.openSetting();
        break;
      case 2:
        this.openConfirmExitGame()
    }
  }, openSetting:function() {
    this.openDialogMenu("SETTING", ["bgm volume", "sound volume"], this.onResultSetting, this.lastSetting, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
  }, onResultSetting:function(a) {
    3 !== a && (this.lastSetting = a);
    switch(a) {
      case 0:
        this.openBgmSetting();
        break;
      case 1:
        this.openSeSetting();
        break;
      default:
        this.openPauseMenu()
    }
  }, openConfirmExitGame:function() {
    this.openDialogMenu("REARY?", ["yes", "no"], this.onResultConfirmExitGame, 1, ["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], !1)
  }, onResultConfirmExitGame:function(a) {
    0 === a ? this.app.popScene() : this.openPauseMenu(1)
  }, openBgmSetting:function() {
    this.openDialogMenu("BGM VOLUME", "012345".split(""), this.onResultBgmSetting, gls2.core.bgmVolume)
  }, onResultBgmSetting:function(a) {
    6 !== a && (gls2.core.bgmVolume = a);
    this.openSetting(1)
  }, openSeSetting:function() {
    this.openDialogMenu("SE VOLUME", "012345".split(""), this.onResultSeSetting, gls2.core.seVolume)
  }, onResultSeSetting:function(a) {
    6 !== a && (gls2.core.seVolume = a);
    this.openSetting(1)
  }, draw:function(a) {
    null !== this.stage && (a.clearColor(this.stage.background, 0, 0), this.drawComboGauge(a))
  }, drawComboGauge:function(a) {
    if(0 < this.comboGauge) {
      a.fillStyle = "rgba(255," + ~~(255 * this.comboGauge) + "," + ~~Math.min(255, 512 * this.comboGauge) + ",0.5)";
      var b = 500 * this.comboGauge;
      a.fillRect(SC_W - 15, SC_H - 5 - b, 10, b)
    }
  }, gameStart:function(a) {
    this.consoleWindow.clearBuf().clear();
    null !== this.player && this.player.remove();
    gls2.Enemy.clearAll();
    gls2.ShotBullet.clearAll();
    gls2.Danmaku.clearAll();
    this.player = gls2.Player(this, a);
    this.startStage(0)
  }, startStage:function(a) {
    this.stage = gls2.Stage.create(this, a);
    this.launch()
  }, launch:function() {
    this.player.setPosition(0.5 * SC_W, SC_H + 32).setFrameIndex(3).addChildTo(this);
    this.player.controllable = !1;
    this.player.muteki = !0;
    this.player.tweener.clear().wait(30).moveBy(0, -120).wait(120).call(function() {
      this.controllable = !0
    }.bind(this.player)).wait(120).call(function() {
      this.muteki = !1
    }.bind(this.player));
    this.bomb = this.bombMax
  }, miss:function() {
    this.player.remove();
    this.zanki -= 1;
    0 < this.zanki && this.launch()
  }, gameContinue:function() {
    this.launch()
  }, clearStage:function() {
  }, gameOver:function() {
  }, gameClear:function() {
  }, addScore:function(a) {
    var b = this.score;
    this.score += a;
    for(a = 0;a < gls2.core.extendScore.length;a++) {
      var d = gls2.core.extendScore[a];
      b < d && d <= this.score && this.extendZanki()
    }
    gls2.core.highScore = Math.max(gls2.core.highScore, this.score)
  }, extendZanki:function() {
    this.zanki += 1
  }})
})();
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit()
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments)
}});
gls2.GameOverScene = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit()
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments)
}});
gls2.ContinueConfirmScene = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit()
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments)
}});
gls2.EndingScene = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit()
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments)
}});
(function() {
  gls2.Enemy = tm.createClass({superClass:tm.app.CanvasElement, age:0, direction:0, speed:0, player:null, gameScene:null, stage:null, hard:null, soft:null, hp:0, enableFire:!0, isGround:!1, score:0, entered:!1, velocity:null, init:function() {
    this.superInit();
    this.addEventListener("completeattack", function() {
      this.onCompleteAttack()
    });
    this.addEventListener("added", function() {
      this.age = 0;
      this.entered = !1;
      this.enableFire = !0;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      var c = [].concat(this._listeners.enterframe);
      if(c) {
        for(var f = 0, g = c.length;f < g;f++) {
          c[f] && c[f].isDanmaku && this.removeEventListener("enterframe", c[f])
        }
      }
      this.tweener.clear();
      this.scaleX = this.scaleY = 1;
      this.isGround = !1;
      a.push(this);
      c = b.indexOf(this);
      -1 !== c && b.splice(c, 1)
    })
  }, setup:function(a, b, c, h) {
    this.gameScene = a;
    this.player = a.player;
    this.stage = b;
    this.soft = c;
    this.hard = h;
    this.score = 100;
    this.soft.setup.apply(this);
    this.hard.setup.apply(this);
    this.altitude = this.isGround ? 1 : 10;
    this.velocity = {x:0, y:0};
    return this
  }, onLaunch:function() {
    this.soft.onLaunch.apply(this);
    this.hard.onLaunch.apply(this)
  }, onCompleteAttack:function() {
    this.soft.onCompleteAttack.apply(this);
    this.hard.onCompleteAttack.apply(this)
  }, update:function() {
    0 <= this.x - this.boundingWidthLeft && (this.x + this.boundingWidthRight < SC_W && 0 <= this.y - this.boundingHeightTop && this.y + this.boundingHeightBottom < SC_H) && (this.entered = !0);
    var a = this.x, b = this.y;
    this.soft.update.apply(this);
    this.hard.update.apply(this);
    this.isGround && (this.x += this.gameScene.ground.dx, this.y += this.gameScene.ground.dy);
    this.age += 1;
    this.velocity.x = this.x - a;
    this.velocity.y = this.y - b
  }, damage:function(a) {
    if(!this.entered) {
      return!1
    }
    this.hp -= a;
    return 0 >= this.hp ? (this.hard.destroy.apply(this), a = gls2.math.rand(0, 2), 0 === a ? this.gameScene.println("enemy destroy.") : 1 === a ? this.gameScene.println(this.name + " destroy.") : 2 === a && this.gameScene.println("ETR reaction gone."), this.remove(), this.stage.onDestroyEnemy(this), !0) : !1
  }, draw:function(a) {
    this.hard.draw.call(this, a)
  }, isInScreen:function() {
    return 0 <= this.x + this.width / 2 && this.x - this.width / 2 < SC_W && 0 <= this.y + this.height / 2 && this.y - this.height / 2 < SC_H
  }, onfire:function() {
    return this.enableFire
  }});
  gls2.Enemy.clearAll = function() {
    for(var a = [].concat(b), c = 0, g = a.length;c < g;c++) {
      a[c].remove()
    }
  };
  for(var b = gls2.Enemy.activeList = [], a = gls2.Enemy.pool = [], c = 0;256 > c;c++) {
    a.push(gls2.Enemy())
  }
})();
(function() {
  gls2.EnemyHard = tm.createClass({setup:function() {
    this.name = "abstract enemy";
    this.hp = 9999
  }, onLaunch:function() {
  }, onCompleteAttack:function() {
  }, update:function() {
  }, draw:function(a) {
  }, destroy:function() {
    gls2.Effect.explodeS(this.x, this.y, this.gameScene, this.velocity)
  }});
  gls2.EnemyHard.Heri1 = tm.createClass({superClass:gls2.EnemyHard, init:function() {
    this.superInit()
  }, setup:function() {
    this.name = "kujo";
    this.hp = 2;
    this._sprite = b("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.player.x ? -1 : 1
  }, draw:function(a) {
    2 > this.age % 4 ? this._sprite.setFrameIndex(7) : this._sprite.setFrameIndex(8);
    this._sprite.draw(a)
  }});
  gls2.EnemyHard.Heri1 = gls2.EnemyHard.Heri1();
  gls2.EnemyHard.Heri2 = tm.createClass({superClass:gls2.EnemyHard, init:function() {
    this.superInit()
  }, setup:function() {
    this.name = "kiryu";
    this.hp = 3;
    this._sprite = b("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.player.x ? -1 : 1
  }, draw:function(a) {
    2 > this.age % 4 ? this._sprite.setFrameIndex(9) : this._sprite.setFrameIndex(10);
    this._sprite.draw(a)
  }});
  gls2.EnemyHard.Heri2 = gls2.EnemyHard.Heri2();
  gls2.EnemyHard.Tank1 = tm.createClass({superClass:gls2.EnemyHard, init:function() {
    this.superInit()
  }, setup:function() {
    this.name = "natsuki";
    this.hp = 5;
    this.isGround = !0;
    this._sprite = b("tex1", 48, 48);
    this.boundingRadius = 24
  }, update:function() {
    switch(this.dir) {
      case 0:
        this._sprite.setFrameIndex(16, 64, 64);
        break;
      case 1:
        this._sprite.setFrameIndex(24, 64, 64);
        break;
      case 2:
        this._sprite.setFrameIndex(23, 64, 64);
        break;
      case 3:
        this._sprite.setFrameIndex(11, 64, 64);
        break;
      case 4:
        this._sprite.setFrameIndex(12, 64, 64);
        break;
      case 5:
        this._sprite.setFrameIndex(13, 64, 64);
        break;
      case 6:
        this._sprite.setFrameIndex(14, 64, 64);
        break;
      case 7:
        this._sprite.setFrameIndex(15, 64, 64)
    }
  }, draw:function(a) {
    this._sprite.draw(a)
  }, destroy:function() {
    gls2.Effect.explodeGS(this.x, this.y, this.gameScene)
  }});
  gls2.EnemyHard.Tank1 = gls2.EnemyHard.Tank1();
  gls2.EnemyHard.FighterM = tm.createClass({superClass:gls2.EnemyHard, init:function() {
    this.superInit()
  }, setup:function() {
    this.name = "kurokawa";
    this.hp = 80;
    this._sprite = b("tex1", 256, 128);
    this._sprite.srcRect.x = 64;
    this._sprite.srcRect.y = 128;
    this._sprite.srcRect.width = 256;
    this._sprite.srcRect.height = 128;
    this.boundingWidth = 200;
    this.boundingHeight = 20
  }, update:function() {
  }, draw:function(a) {
    this._sprite.draw(a)
  }});
  gls2.EnemyHard.FighterM = gls2.EnemyHard.FighterM();
  var b = tm.createClass({superClass:tm.app.Sprite, init:function(a, b, d) {
    this.superInit(a, b, d)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }})
})();
(function() {
  gls2.EnemySoft = tm.createClass({setup:function() {
  }, onLaunch:function() {
  }, onCompleteAttack:function() {
  }, update:function() {
  }});
  var b = function(a, b) {
    var d = gls2.Danmaku[b].createTicker();
    a.addEventListener("enterframe", d);
    a.addEventListener("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  };
  gls2.EnemySoft.Heri1a = tm.createClass({superClass:gls2.EnemySoft, init:function() {
    this.superInit()
  }, onLaunch:function() {
    var a = gls2.math.randf(0.1 * SC_H, 0.3 * SC_H);
    this.tweener.clear().wait(gls2.math.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, onCompleteAttack:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -SC_H, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  gls2.EnemySoft.Heri1a = gls2.EnemySoft.Heri1a();
  gls2.EnemySoft.Heri1b = tm.createClass({superClass:gls2.EnemySoft, init:function() {
    this.superInit()
  }, onLaunch:function() {
    var a = gls2.math.randf(0.3 * SC_H, 0.5 * SC_H);
    this.tweener.clear().wait(gls2.math.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, onCompleteAttack:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -SC_H, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  gls2.EnemySoft.Heri1b = gls2.EnemySoft.Heri1b();
  gls2.EnemySoft.Heri2 = tm.createClass({superClass:gls2.EnemySoft, init:function() {
    this.superInit()
  }, setup:function() {
    this.angle = 0.5 * Math.PI;
    this.startFrame = gls2.math.rand(0, 60);
    this.speed = 0
  }, update:function() {
    if(this.age === this.startFrame) {
      this.speed = 8
    }else {
      if(this.age === this.startFrame + 10) {
        b(this, "basic1-0")
      }else {
        if(this.startFrame < this.age && this.y < this.player.y) {
          var a = Math.atan2(this.player.y - this.y, this.player.x - this.x);
          this.angle += a < this.angle ? -0.02 : 0.02;
          this.angle = gls2.math.clamp(this.angle, 0.5, Math.PI - 0.5)
        }
      }
    }
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    !this.isInScreen() && this.entered && this.remove();
    if(9E4 > gls2.distanceSq(this, this.player) || this.y > this.player.y) {
      this.enableFire = !1
    }
  }});
  gls2.EnemySoft.Heri2 = gls2.EnemySoft.Heri2();
  gls2.EnemySoft.TankR = tm.createClass({superClass:gls2.EnemySoft, init:function() {
    this.superInit()
  }, setup:function() {
    b(this, "basic2-0");
    this.dir = 0
  }, update:function() {
    this.x += 1;
    this.entered && !this.isInScreen() && this.remove()
  }});
  gls2.EnemySoft.TankR = gls2.EnemySoft.TankR();
  gls2.EnemySoft.TankRD = tm.createClass({superClass:gls2.EnemySoft, init:function() {
    this.superInit()
  }, setup:function() {
    b(this, "basic2-0");
    this.dir = 1
  }, update:function() {
    this.x += 0.7;
    this.y += 0.7;
    this.entered && !this.isInScreen() && this.remove()
  }});
  gls2.EnemySoft.TankRD = gls2.EnemySoft.TankRD();
  gls2.EnemySoft.TankD = tm.createClass({superClass:gls2.EnemySoft, init:function() {
    this.superInit()
  }, setup:function() {
    b(this, "basic2-0");
    this.dir = 2
  }, update:function() {
    this.y += 1;
    this.entered && !this.isInScreen() && this.remove()
  }});
  gls2.EnemySoft.TankD = gls2.EnemySoft.TankD();
  gls2.EnemySoft.TankLD = tm.createClass({superClass:gls2.EnemySoft, init:function() {
    this.superInit()
  }, setup:function() {
    b(this, "basic2-0");
    this.dir = 3
  }, update:function() {
    this.x -= 0.7;
    this.y += 0.7;
    this.entered && !this.isInScreen() && this.remove()
  }});
  gls2.EnemySoft.TankLD = gls2.EnemySoft.TankLD();
  gls2.EnemySoft.TankL = tm.createClass({superClass:gls2.EnemySoft, init:function() {
    this.superInit()
  }, setup:function() {
    b(this, "basic2-0");
    this.dir = 4
  }, update:function() {
    this.x -= 1;
    this.entered && !this.isInScreen() && this.remove()
  }});
  gls2.EnemySoft.TankL = gls2.EnemySoft.TankL();
  gls2.EnemySoft.MiddleFighter = tm.createClass({superClass:gls2.EnemySoft, init:function() {
    this.superInit()
  }, setup:function() {
    this.tweener.clear().moveBy(0, 0.5 * SC_H, 800, "easeOutQuad")
  }, update:function() {
  }});
  gls2.EnemySoft.MiddleFighter = gls2.EnemySoft.MiddleFighter()
})();
(function() {
  var b = gls2.EnemySoft, a = gls2.EnemyHard;
  gls2.EnemyUnit = {"heri1-left":[{soft:b.Heri1a, hard:a.Heri2, x:0.1 * SC_W, y:-100}, {soft:b.Heri1b, hard:a.Heri2, x:0.2 * SC_W, y:-100}, {soft:b.Heri1a, hard:a.Heri2, x:0.3 * SC_W, y:-100}, {soft:b.Heri1b, hard:a.Heri2, x:0.4 * SC_W, y:-100}, {soft:b.Heri1a, hard:a.Heri2, x:0.5 * SC_W, y:-100}], "heri1-center":[{soft:b.Heri1a, hard:a.Heri2, x:0.3 * SC_W, y:-100}, {soft:b.Heri1b, hard:a.Heri2, x:0.4 * SC_W, y:-100}, {soft:b.Heri1a, hard:a.Heri2, x:0.5 * SC_W, y:-100}, {soft:b.Heri1b, hard:a.Heri2, 
  x:0.6 * SC_W, y:-100}, {soft:b.Heri1a, hard:a.Heri2, x:0.7 * SC_W, y:-100}], "heri1-right":[{soft:b.Heri1a, hard:a.Heri2, x:0.5 * SC_W, y:-100}, {soft:b.Heri1b, hard:a.Heri2, x:0.6 * SC_W, y:-100}, {soft:b.Heri1a, hard:a.Heri2, x:0.7 * SC_W, y:-100}, {soft:b.Heri1b, hard:a.Heri2, x:0.8 * SC_W, y:-100}, {soft:b.Heri1a, hard:a.Heri2, x:0.9 * SC_W, y:-100}], "heri2-left":[{soft:b.Heri2, hard:a.Heri1, x:0.1 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.2 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, 
  x:0.3 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.4 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.5 * SC_W, y:-100}], "heri2-center":[{soft:b.Heri2, hard:a.Heri1, x:0.3 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.4 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.5 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.6 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.7 * SC_W, y:-100}], "heri2-right":[{soft:b.Heri2, hard:a.Heri1, x:0.5 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, 
  x:0.6 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.7 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.8 * SC_W, y:-100}, {soft:b.Heri2, hard:a.Heri1, x:0.9 * SC_W, y:-100}], "tank-left":[{soft:b.TankR, hard:a.Tank1, x:-64, y:0.3 * SC_H}, {soft:b.TankR, hard:a.Tank1, x:-128, y:0.3 * SC_H}, {soft:b.TankR, hard:a.Tank1, x:-192, y:0.3 * SC_H}, {soft:b.TankR, hard:a.Tank1, x:-256, y:0.3 * SC_H}, {soft:b.TankR, hard:a.Tank1, x:-320, y:0.3 * SC_H}], "tank-leftUpper":[{soft:b.TankRD, hard:a.Tank1, 
  x:-110, y:-46}, {soft:b.TankRD, hard:a.Tank1, x:-156, y:-92}, {soft:b.TankRD, hard:a.Tank1, x:-202, y:-138}, {soft:b.TankRD, hard:a.Tank1, x:-248, y:-184}, {soft:b.TankRD, hard:a.Tank1, x:-294, y:-230}], "tank-upper0":[{soft:b.TankD, hard:a.Tank1, x:0.25 * SC_W, y:-64}, {soft:b.TankD, hard:a.Tank1, x:0.25 * SC_W, y:-128}, {soft:b.TankD, hard:a.Tank1, x:0.25 * SC_W, y:-192}, {soft:b.TankD, hard:a.Tank1, x:0.25 * SC_W, y:-256}, {soft:b.TankD, hard:a.Tank1, x:0.25 * SC_W, y:-320}], "tank-upper1":[{soft:b.TankD, 
  hard:a.Tank1, x:0.5 * SC_W, y:-64}, {soft:b.TankD, hard:a.Tank1, x:0.5 * SC_W, y:-128}, {soft:b.TankD, hard:a.Tank1, x:0.5 * SC_W, y:-192}, {soft:b.TankD, hard:a.Tank1, x:0.5 * SC_W, y:-256}, {soft:b.TankD, hard:a.Tank1, x:0.5 * SC_W, y:-320}], "tank-upper2":[{soft:b.TankD, hard:a.Tank1, x:0.75 * SC_W, y:-64}, {soft:b.TankD, hard:a.Tank1, x:0.75 * SC_W, y:-128}, {soft:b.TankD, hard:a.Tank1, x:0.75 * SC_W, y:-192}, {soft:b.TankD, hard:a.Tank1, x:0.75 * SC_W, y:-256}, {soft:b.TankD, hard:a.Tank1, 
  x:0.75 * SC_W, y:-320}], "fighter-m":[{soft:b.MiddleFighter, hard:a.FighterM, x:0.5 * SC_W, y:-0.3 * SC_H}]}
})();
(function() {
  gls2.Bullet = tm.createClass({superClass:tm.app.Sprite, init:function() {
    this.superInit("tex0", 20, 20);
    this.addEventListener("removed", function() {
      c.push(this);
      var a = d.indexOf(this);
      -1 !== a && d.splice(a, 1);
      this.clearEventListener("enterframe")
    })
  }, destroy:function() {
    tm.app.CircleShape(40, 40, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(20, 20, 0, 20, 20, 20).addColorStopList([{offset:0, color:"rgba(255,255,255,0.0)"}, {offset:0.5, color:"rgba(255,255,255,0.0)"}, {offset:1, color:"rgba(255,255,255,1.0)"}]).toStyle()}).setBlendMode("lighter").setPosition(this.x, this.y).setScale(0.1, 0.1).addChildTo(this.parent).update = function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1;
      this.alpha *= 0.9;
      0.0010 > this.alpha && this.remove()
    };
    this.remove()
  }});
  gls2.Danmaku = {};
  gls2.Danmaku.erase = function() {
    for(var a = [].concat(d), b = 0, c = a.length;b < c;b++) {
      a[b].destroy()
    }
  };
  gls2.Danmaku.setup = function() {
    for(var a = 0;255 > a;a++) {
      c.push(gls2.Bullet())
    }
    a = tm.bulletml.AttackPattern.defaultConfig;
    a.isInsideOfWorld = function(a) {
      return!(a instanceof gls2.Bullet) || !(-50 > a.x || SC_W + 50 < a.x || -50 > a.y || SC_H + 50 < a.y)
    };
    a.bulletFactory = function(a) {
      if(a = c.shift(0)) {
        return d.push(a), a.setFrameIndex(1), a.scaleX = 1.2, a.scaleY = 1.5, a.addEventListener("enterframe", function() {
          this.rotation += 15
        }), a
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.speedRate = 3
  };
  gls2.Danmaku.clearAll = function() {
    for(var a = [].concat(d), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  var b = bulletml.dsl, a = b.fire(b.direction(0), b.bullet());
  gls2.Danmaku["basic0-0"] = new bulletml.Root({top:b.action([a])});
  gls2.Danmaku["basic0-4"] = new bulletml.Root({top:b.action([b.repeat(3, [b.repeat(5, [b.fire(b.direction(-20), b.speed("$loop.count*0.06+0.75"), b.bullet()), b.fire(b.direction(0), b.speed("$loop.count*0.06+0.75"), b.bullet()), b.fire(b.direction(20), b.speed("$loop.count*0.06+0.75"), b.bullet())]), b.wait(40)])])});
  gls2.Danmaku["basic1-0"] = new bulletml.Root({top:b.action([b.repeat(999, [a, b.wait(20)])])});
  gls2.Danmaku["basic2-0"] = new bulletml.Root({top:b.action([b.wait("120"), b.repeat(999, [b.wait("50*$rand*5"), a])])});
  var c = [], d = gls2.Bullet.activeList = []
})();
gls2.math = {};
(function() {
  gls2.math.clamp = function(b, a, c) {
    return b < a ? a : b > c ? c : b
  };
  gls2.math.DEG_TO_RAD = Math.PI / 180;
  gls2.math.RAD_TO_DEG = 180 / Math.PI;
  gls2.math.degToRad = function(b) {
    return b * gls2.math.DEG_TO_RAD
  };
  gls2.math.radToDeg = function(b) {
    return b * gls2.math.RAD_TO_DEG
  };
  gls2.math.rand = function(b, a) {
    return window.Math.floor(Math.random() * (a - b + 1)) + b
  };
  gls2.math.randf = function(b, a) {
    return window.Math.random() * (a - b) + b
  };
  gls2.math.magnitude = function() {
    return Math.sqrt(gls2.math.magnitudeSq.apply(null, arguments))
  };
  gls2.math.magnitudeSq = function() {
    for(var b = 0, a = 0, c = arguments.length;a < c;++a) {
      b += arguments[a] * arguments[a]
    }
    return b
  };
  gls2.math.inside = function(b, a, c) {
    return b >= a && b <= c
  }
})();

