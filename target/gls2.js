/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(b) {
  throw b;
}
var i = void 0, k = !0, l = null, s = !1;
function D() {
  return function() {
  }
}
var I = {Wi:this};
(function() {
  function b(a, b) {
    for(var d = 0, h = a.length;d < h;d++) {
      if(a[d].label == b) {
        return a[d]
      }
    }
  }
  I.ka = function(a) {
    this.type = "none";
    this.root = this;
    this.ob = [];
    this.af = [];
    this.jf = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof I.Vb ? this.ob.push(a[b]) : a[b] instanceof I.Pa ? this.af.push(a[b]) : a[b] instanceof I.Hd && this.jf.push(a[b]))
      }
      a = 0;
      for(b = this.ob.length;a < b;a++) {
        this.ob[a].gc(this)
      }
      a = 0;
      for(b = this.af.length;a < b;a++) {
        this.af[a].gc(this)
      }
      a = 0;
      for(b = this.jf.length;a < b;a++) {
        this.jf[a].gc(this)
      }
    }
  };
  I.ka.prototype.$h = function(a) {
    return b(this.ob, a)
  };
  I.ka.prototype.ck = function() {
    for(var a = [], b = 0, d = this.ob.length;b < d;b++) {
      var h = this.ob[b];
      h.label && 0 === h.label.indexOf("top") && (a[a.length] = h.label)
    }
    return a
  };
  I.ka.prototype.Sj = function(a) {
    var b;
    if(b = this.$h(a)) {
      return b
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  I.ka.prototype.Tj = function(a) {
    return b(this.af, a)
  };
  I.ka.prototype.Uj = function(a) {
    var b;
    if(b = this.Tj(a)) {
      return b
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  I.ka.prototype.Vj = function(a) {
    return b(this.jf, a)
  };
  I.ka.prototype.Wj = function(a) {
    var b;
    if(b = this.Vj(a)) {
      return b
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  I.Pa = function() {
    this.root = this.label = l;
    this.direction = new I.Kc(0);
    this.speed = new I.Qc(1);
    this.ob = [];
    this.Za = {};
    this.Da = {}
  };
  I.Pa.prototype.clone = function(a) {
    var b = new I.Pa;
    b.label = this.label;
    b.root = this.root;
    b.ob = this.ob;
    b.direction = new I.Kc(a.ib(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new I.Qc(a.ib(this.speed.value));
    b.speed.type = this.speed.type;
    b.Za = this.Za;
    b.Da = a.Da;
    return b
  };
  I.Pa.prototype.gc = function(a) {
    this.root = a;
    for(var b = 0, d = this.ob.length;b < d;b++) {
      this.ob[b].gc(a)
    }
  };
  I.Me = function(a) {
    this.root = l;
    this.label = a;
    this.lb = []
  };
  I.Me.prototype.clone = function(a) {
    var b = a.Da;
    a.Da = a.og(this.lb);
    var d = this.root.Uj(this.label).clone(a);
    a.Da = b;
    return d
  };
  I.Me.prototype.gc = function(a) {
    this.root = a
  };
  I.nb = function() {
    this.Ib = ""
  };
  I.nb.prototype.gc = function(a) {
    this.root = a
  };
  I.Vb = function() {
    this.Ib = "action";
    this.root = this.label = l;
    this.nc = [];
    this.lb = []
  };
  I.Vb.prototype = new I.nb;
  I.Vb.prototype.gc = function(a) {
    this.root = a;
    for(var b = 0, d = this.nc.length;b < d;b++) {
      this.nc[b].gc(a)
    }
  };
  I.Vb.prototype.clone = function() {
    var a = new I.Vb;
    a.label = this.label;
    a.root = this.root;
    a.nc = this.nc;
    return a
  };
  I.Fd = function(a) {
    this.Ib = "actionRef";
    this.label = a;
    this.root = l;
    this.lb = []
  };
  I.Fd.prototype = new I.nb;
  I.Fd.prototype.clone = function() {
    var a = new I.Vb;
    a.root = this.root;
    a.nc.push(this);
    return a
  };
  I.Hd = function() {
    this.Ib = "fire";
    this.Ia = this.speed = this.direction = this.root = this.label = l;
    this.Za = new I.Qe
  };
  I.Hd.prototype = new I.nb;
  I.Hd.prototype.gc = function(a) {
    this.root = a;
    this.Ia && this.Ia.gc(a)
  };
  I.Jf = function(a) {
    this.Ib = "fireRef";
    this.label = a;
    this.lb = []
  };
  I.Jf.prototype = new I.nb;
  I.Oe = function() {
    this.Ib = "changeDirection";
    this.direction = new I.Kc;
    this.Eb = 0
  };
  I.Oe.prototype = new I.nb;
  I.Pe = function() {
    this.Ib = "changeSpeed";
    this.speed = new I.Qc;
    this.Eb = 0
  };
  I.Pe.prototype = new I.nb;
  I.Le = function() {
    this.Ib = "accel";
    this.Gc = new I.Lf;
    this.Jc = new I.mg;
    this.Eb = 0
  };
  I.Le.prototype = new I.nb;
  I.Ue = function(a) {
    this.Ib = "wait";
    this.value = a || 0
  };
  I.Ue.prototype = new I.nb;
  I.lg = function() {
    this.Ib = "vanish"
  };
  I.lg.prototype = new I.nb;
  I.Se = function() {
    this.Ib = "repeat";
    this.Gi = 0;
    this.action = l;
    this.lb = []
  };
  I.Se.prototype = new I.nb;
  I.Se.prototype.gc = function(a) {
    this.root = a;
    this.action && this.action.gc(a)
  };
  I.Ef = function(a, b) {
    this.Ib = "bind";
    this.Zk = a;
    this.Rj = b
  };
  I.Ef.prototype = new I.nb;
  I.ag = function(a, b) {
    this.Ib = "notify";
    this.Oj = a;
    this.lb = b || l
  };
  I.ag.prototype = new I.nb;
  I.Ti = new I.nb;
  I.Kc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  I.Qc = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  I.Lf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  I.mg = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  I.Qe = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.sa = k;
    a.sa !== i && (this.sa = !!a.sa)
  };
  I.zh = function(a) {
    this.value = a || 0
  };
  I.Ah = function(a) {
    this.value = a || 0
  };
  I.lh = function(a) {
    this.value = !!a
  }
})();
I.Va = function(b) {
  this.Ih = b;
  this.Ve = [];
  this.Zc = -1;
  this.xb = l;
  this.Da = {}
};
I.Va.prototype.next = function() {
  this.Zc += 1;
  if(this.xb !== l) {
    var b = this.xb.nc[this.Zc];
    if(b !== i) {
      if(b instanceof I.Vb) {
        return this.he(), this.xb = b, this.Da = this.ng(), this.next()
      }
      if(b instanceof I.Fd) {
        return this.he(), this.xb = this.Ih.Sj(b.label), this.Da = this.og(b.lb), this.next()
      }
      if(b instanceof I.Se) {
        return this.Da.Vd = 0, this.Da.oi = this.ib(b.Gi) | 0, this.he(), this.xb = b.action.clone(), this.Da = this.ng(), this.next()
      }
      if(b instanceof I.Hd) {
        var a = new I.Hd;
        a.Ia = b.Ia.clone(this);
        b.direction !== l && (a.direction = new I.Kc(this.ib(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new I.Qc(this.ib(b.speed.value)), a.speed.type = b.speed.type);
        a.Za = new I.Qe;
        a.Za.offsetX = this.ib(b.Za.offsetX);
        a.Za.offsetY = this.ib(b.Za.offsetY);
        a.Za.sa = b.Za.sa;
        return a
      }
      return b instanceof I.Jf ? (this.he(), this.xb = new I.Vb, this.xb.nc = [this.Ih.Wj(b.label)], this.Da = this.og(b.lb), this.next()) : b instanceof I.Oe ? (a = new I.Oe, a.direction.type = b.direction.type, a.direction.value = this.ib(b.direction.value), a.Eb = this.ib(b.Eb), a) : b instanceof I.Pe ? (a = new I.Pe, a.speed.type = b.speed.type, a.speed.value = this.ib(b.speed.value), a.Eb = this.ib(b.Eb), a) : b instanceof I.Le ? (a = new I.Le, a.Gc.type = b.Gc.type, a.Gc.value = this.ib(b.Gc.value), 
      a.Jc.type = b.Jc.type, a.Jc.value = this.ib(b.Jc.value), a.Eb = this.ib(b.Eb), a) : b instanceof I.Ue ? new I.Ue(this.ib(b.value)) : b instanceof I.lg ? b : b instanceof I.Ef ? (this.Da["$" + b.Zk] = this.ib(b.Rj), I.Ti) : b instanceof I.ag ? b : l
    }
    this.Aj();
    if(this.xb === l) {
      return l
    }
    if((b = this.xb.nc[this.Zc]) && "repeat" == b.Ib) {
      this.Da.Vd++, this.Da.Vd < this.Da.oi && (this.he(), this.xb = b.action.clone(), this.Da = this.ng())
    }
    return this.next()
  }
  return l
};
I.Va.prototype.he = function() {
  this.Ve.push({action:this.xb, cursor:this.Zc, scope:this.Da});
  this.Zc = -1
};
I.Va.prototype.Aj = function() {
  var b = this.Ve.pop();
  b ? (this.Zc = b.cursor, this.xb = b.action, this.Da = b.scope) : (this.Zc = -1, this.xb = l, this.Da = {})
};
I.Va.prototype.ib = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Da[b]) || (a = I.Va.bc[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var f in I.Va.bc) {
    I.Va.bc.hasOwnProperty(f) && (a[f] = I.Va.bc[f])
  }
  for(f in this.Da) {
    this.Da.hasOwnProperty(f) && (a[f] = this.Da[f])
  }
  a.$rand = Math.random();
  (f = this.Ve[this.Ve.length - 1]) && (a.$loop = {index:f.scope.Vd, count:f.scope.Vd + 1, first:0 === f.scope.Vd, last:f.scope.Vd + 1 >= f.scope.oi});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
I.Va.prototype.og = function(b) {
  var a = {};
  if(b) {
    for(var f = 0, d = b.length;f < d;f++) {
      a["$" + (f + 1)] = this.ib(b[f])
    }
  }else {
    for(f in this.Da) {
      this.Da.hasOwnProperty(f) && (a[f] = this.Da[f])
    }
  }
  return a
};
I.Va.prototype.ng = function() {
  var b = {}, a;
  for(a in this.Da) {
    this.Da.hasOwnProperty(a) && (b[a] = this.Da[a])
  }
  return b
};
I.ka.prototype.Fg = function(b) {
  var a = new I.Va(this);
  if(b = this.$h(b)) {
    a.xb = b
  }
  return a
};
I.Pa.prototype.Fg = function() {
  var b = new I.Va(this.root), a = new I.Vb;
  a.root = this.root;
  a.nc = this.ob;
  b.xb = a;
  b.Da = this.Da;
  return b
};
I.Va.bc = {};
I.Ja = function(b) {
  b = b || "";
  for(var a in I.Ja) {
    I.Ja.hasOwnProperty(a) && (I.Wi[b + a] = I.Ja[a])
  }
};
I.Ja.action = function(b) {
  if(0 < arguments.length) {
    for(var a = 0, f = arguments.length;a < f;a++) {
      arguments[a] instanceof Function && (arguments[a] = arguments[a]())
    }
  }
  if(b instanceof Array) {
    a = 0;
    for(f = b.length;a < f;a++) {
      b[a] instanceof Function && (b[a] = b[a]())
    }
  }
  var d = new I.Vb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof I.nb)
    }) && g(Error("argument type error.")), d.nc = b
  }else {
    a = 0;
    for(f = arguments.length;a < f;a++) {
      arguments[a] instanceof I.nb ? d.nc[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return d
};
I.Ja.pa = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("label is required."));
  d = new I.Fd(b);
  if(a instanceof Array) {
    d.lb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.lb.push(arguments[f])
    }
  }
  return d
};
I.Ja.Ia = function(b, a, f, d) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new I.Pa;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof I.Kc ? m.direction = arguments[h] : arguments[h] instanceof I.Qc ? m.speed = arguments[h] : arguments[h] instanceof I.Vb ? m.ob.push(arguments[h]) : arguments[h] instanceof I.Fd ? m.ob.push(arguments[h]) : arguments[h] instanceof Array ? m.ob.push(I.Ja.action(arguments[h])) : arguments[h] instanceof Object ? m.Za = arguments[h] : "string" === typeof arguments[h] && (m.label = arguments[h])
  }
  return m
};
I.Ja.bl = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("label is required."));
  d = new I.Me(b);
  if(a instanceof Array) {
    d.lb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.lb.push(arguments[f])
    }
  }
  return d
};
I.Ja.fire = function(b, a, f, d) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new I.Hd;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof I.Kc ? m.direction = arguments[h] : arguments[h] instanceof I.Qc ? m.speed = arguments[h] : arguments[h] instanceof I.Pa ? m.Ia = arguments[h] : arguments[h] instanceof I.Me ? m.Ia = arguments[h] : arguments[h] instanceof I.Qe ? m.Za = arguments[h] : arguments[h] instanceof I.zh ? m.Za.offsetX = arguments[h].value : arguments[h] instanceof I.Ah ? m.Za.offsetY = arguments[h].value : arguments[h] instanceof I.lh && (m.Za.sa = arguments[h].value)
  }
  m.Ia === i && g(Error("bullet (or bulletRef) is required."));
  return m
};
I.Ja.gl = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("label is required."));
  d = new I.Jf(b);
  if(a instanceof Array) {
    d.lb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.lb.push(arguments[f])
    }
  }
  return d
};
I.Ja.cl = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("direction is required."));
  a === i && g(Error("term is required."));
  f = new I.Oe;
  f.direction = b instanceof I.Kc ? b : new I.Kc(b);
  f.Eb = a;
  return f
};
I.Ja.bf = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("speed is required."));
  a === i && g(Error("term is required."));
  f = new I.Pe;
  f.speed = b instanceof I.Qc ? b : new I.Qc(b);
  f.Eb = a;
  return f
};
I.Ja.al = function(b, a, f) {
  for(var d = 0, h = arguments.length;d < h;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  h = new I.Le;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof I.Lf ? h.Gc = b : arguments[d] instanceof I.mg ? h.Jc = a : h.Eb = arguments[d]
  }
  h.Gc === i && h.Jc === i && g(Error("horizontal or vertical is required."));
  h.Eb === i && g(Error("term is required."));
  return h
};
I.Ja.wait = function(b) {
  for(var a = 0, f = arguments.length;a < f;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && g(Error("value is required."));
  return new I.Ue(b)
};
I.Ja.Sa = function() {
  return new I.lg
};
I.Ja.repeat = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("times is required."));
  a === i && g(Error("action is required."));
  d = new I.Se;
  d.Gi = b;
  if(a instanceof I.Vb || a instanceof I.Fd) {
    d.action = a
  }else {
    if(a instanceof Array) {
      d.action = I.Ja.action(a)
    }else {
      for(var h = [], f = 1;f < arguments.length;f++) {
        h.push(arguments[f])
      }
      d.action = I.Ja.action(h)
    }
  }
  return d
};
I.Ja.ya = function(b, a) {
  return new I.Ef(b, a)
};
I.Ja.ml = function(b, a) {
  return new I.ag(b, a)
};
I.Ja.direction = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.Kc(b);
  a !== i && (f.type = a);
  return f
};
I.Ja.speed = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.Qc(b);
  a && (f.type = a);
  return f
};
I.Ja.Gc = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.Lf(b);
  a && (f.type = a);
  return f
};
I.Ja.Jc = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.mg(b);
  a && (f.type = a);
  return f
};
I.Ja.fl = function(b) {
  return new I.Qe(b)
};
I.Ja.offsetX = function(b) {
  return new I.zh(b)
};
I.Ja.offsetY = function(b) {
  return new I.Ah(b)
};
I.Ja.sa = function(b) {
  return new I.lh(b)
};
tm.Hb = tm.Hb || {};
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
  tm.Hb.kd = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.Fh = a
  }, df:function(a, b) {
    var d = this.Fh.ck();
    if(b === i && 0 < d.length) {
      for(var f = [], v = 0, n = d.length;v < n;v++) {
        f[f.length] = this.Gh(a, d[v])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          p.zg == f.length && (p.pe = k, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, v = f.length;v--;) {
        f[v].wf = p
      }
      p.zg = 0;
      p.Qh = function() {
        this.zg++
      };
      p.zg = 0;
      p.pe = s;
      p.qf = k;
      p.stop = s;
      return p
    }
    return this.Gh(a, b)
  }, Gh:function(a, b) {
    function d() {
      if(!d.stop) {
        d.qa += 1;
        this.qa = d.qa;
        var a = d.cf, b = d.zj;
        if(b) {
          if(d.qa < d.xg ? d.direction += d.Rd : d.qa === d.xg && (d.direction = d.ad), d.qa < d.yg ? d.speed += d.Je : d.qa === d.yg && (d.speed = d.ae), d.qa < d.rg ? (d.Cd += d.Ye, d.Ed += d.Ze) : d.qa === d.rg && (d.Cd = d.We, d.Ed = d.Xe), this.x += Math.cos(d.direction) * d.speed * a.Dd, this.y += Math.sin(d.direction) * d.speed * a.Dd, this.x += d.Cd * a.Dd, this.y += d.Ed * a.Dd, a.Jg(this)) {
            if(a.hd || this.hd) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.qa < d.Li || d.pe)) {
              for(var f;f = d.Mi.next();) {
                switch(f.Ib) {
                  case "fire":
                    b.wj.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Li = "number" === typeof f.value ? d.qa + f.value : 0 !== (a = ~~f.value) ? d.qa + a : d.qa + eval(f.value);
                    return;
                  case "changeDirection":
                    b.rj.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.sj.call(this, f, d);
                    break;
                  case "accel":
                    b.pj.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.xj.call(this, f)
                }
              }
              d.pe = k;
              d.wf ? d.wf.Qh() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.pe = k, d.wf ? d.wf.Qh() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Hb.kd.qe, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b = b || "top";
    "string" === typeof b ? d.Mi = this.Fh.Fg(b) : b instanceof I.Pa ? d.Mi = b.Fg() : (window.console.error(a, b), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.zj = this;
    d.cf = a;
    d.Li = -1;
    d.pe = s;
    d.direction = 0;
    d.ji = 0;
    d.speed = 0;
    d.li = 0;
    d.Cd = 0;
    d.Ed = 0;
    d.Rd = 0;
    d.ad = 0;
    d.xg = -1;
    d.Je = 0;
    d.ae = 0;
    d.yg = -1;
    d.Ye = 0;
    d.We = 0;
    d.Ze = 0;
    d.Xe = 0;
    d.rg = -1;
    d.qa = -1;
    d.stop = s;
    d.qf = k;
    return d
  }, vj:function(a) {
    function b() {
      b.stop || (this.x += b.Uh, this.y += b.Vh, b.cf.Jg(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Hb.kd.qe, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.cf = a;
    b.direction = 0;
    b.speed = 0;
    b.Uh = 0;
    b.Vh = 0;
    b.stop = s;
    b.qf = k;
    return b
  }, wj:function(b, d, f, w) {
    if(this.Ak === i || this.Rb) {
      var v = {label:b.Ia.label}, n;
      for(n in b.Ia.Za) {
        v[n] = b.Ia.Za[n]
      }
      if(v = d.Nh(v)) {
        w = (n = 0 === b.Ia.ob.length) ? w.vj(d) : w.df(d, b.Ia);
        var p = this, r = {x:this.x + b.Za.offsetX, y:this.y + b.Za.offsetY};
        f.ji = w.direction = function(n) {
          var j = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? b.Za.sa ? a(r, d.target) + j : a(p, d.target) + j : j - Math.PI / 2;
            case "absolute":
              return j - Math.PI / 2;
            case "relative":
              return f.direction + j;
            default:
              return f.ji + j
          }
        }(b.direction || b.Ia.direction);
        f.li = w.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.li + b;
            default:
              return b
          }
        }(b.speed || b.Ia.speed);
        v.x = r.x;
        v.y = r.y;
        n && (w.Uh = Math.cos(w.direction) * w.speed * d.Dd, w.Vh = Math.sin(w.direction) * w.speed * d.Dd);
        v.hd = !!v.hd;
        if(d.hd || v.hd) {
          v.rotation = (w.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, v.speed = w.speed
        }
        v.addEventListener("enterframe", w);
        d.Kh ? d.Kh.addChild(v) : this.parent && this.parent.addChild(v)
      }
    }
  }, rj:function(d, f, q) {
    var w = eval(d.direction.value) * Math.DEG_TO_RAD, v = eval(d.Eb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        q.ad = a(this, d) + w;
        q.Rd = b(q.ad - q.direction) / v;
        break;
      case "absolute":
        q.ad = w - Math.PI / 2;
        q.Rd = b(q.ad - q.direction) / v;
        break;
      case "relative":
        q.ad = q.direction + w;
        q.Rd = b(q.ad - q.direction) / v;
        break;
      case "sequence":
        q.Rd = w, q.ad = q.direction + q.Rd * (v - 1)
    }
    q.xg = q.qa + v
  }, sj:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.Eb);
    switch(a.speed.type) {
      case "absolute":
        b.ae = d;
        b.Je = (b.ae - b.speed) / f;
        break;
      case "relative":
        b.ae = d + b.speed;
        b.Je = (b.ae - b.speed) / f;
        break;
      case "sequence":
        b.Je = d, b.ae = b.speed + b.Je * f
    }
    b.yg = b.qa + f
  }, pj:function(a, b) {
    var d = eval(a.Eb);
    b.rg = b.qa + d;
    if(a.Gc) {
      var f = eval(a.Gc.value);
      switch(a.Gc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Ye = (f - b.Cd) / d;
          b.We = f;
          break;
        case "relative":
          b.Ye = f, b.We = (f - b.Cd) * d
      }
    }else {
      b.Ye = 0, b.We = b.Cd
    }
    if(a.Jc) {
      switch(f = eval(a.Jc.value), a.Jc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Ze = (f - b.Ed) / d;
          b.Xe = f;
          break;
        case "relative":
          b.Ze = f, b.Xe = (f - b.Ed) * d
      }
    }else {
      b.Ze = 0, b.Xe = b.Ed
    }
  }, xj:function(a) {
    var b = tm.event.Event(a.Oj);
    if(a.lb) {
      for(var d in a.lb) {
        b[d] = a.lb[d]
      }
    }
    this.dispatchEvent(b)
  }});
  var f = function() {
    var a = tm.graphics.Canvas();
    a.resize(8, 8);
    a.setTransformCenter();
    a.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    a.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return tm.asset.Texture(a.canvas.toDataURL())
  }();
  tm.Hb.Kj = function(a) {
    var b = tm.app.Sprite(f, 8, 8);
    b.label = a.label;
    return b
  };
  var d = l;
  tm.Hb.Th = function(a) {
    if(d === l) {
      if(!a.getRoot().app) {
        return k
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Hb.dl = function() {
    return k
  };
  tm.Hb.kd.qe = {Nh:tm.Hb.Kj, Jg:tm.Hb.Th, vl:0, hd:s, Dd:2, target:l};
  I.ka.prototype.df = function(a) {
    return tm.Hb.kd(this).df(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(D());
tm.main(function() {
  gls2.Xi("#canvas2d");
  gls2.core.run()
});
gls2.Xi = tm.createClass({superClass:tm.display.CanvasApp, ve:0, gk:0, ik:0, hk:0, ek:0, fk:l, me:3, Bd:3, Wh:1, da:l, init:function(b) {
  gls2.core !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.jh = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.ui.LoadingScene({assets:{achevements:"assets/achevements.json", tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex4:"assets/tex4.png", tex5:"assets/tex5.png", tex_tank1:"assets/tex_tank1.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", "kanade-cannon":"assets/kanade-cannon.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", 
  laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", 
  bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/Blue_Moon_MIKU_Append.mp3", bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", 
  "sound/achevement":"assets2/se_maoudamashii_system46.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", 
  "sound/voWarning":"assets/vo_warning.mp3"}, nextScene:function() {
    this.yj();
    return gls2.TitleScene()
  }.bind(this)}))
}, Oh:function() {
  var b = window.achevements, a = tm.asset.AssetManager.get("achevements").data;
  return!b ? 0 : Math.floor(b.reduce(function(b, d) {
    return a[d] ? b + J[a[d].grade] : b
  }, 0))
}, update:function() {
  for(var b = [].concat(this.jh), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.jh.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, yj:function() {
  gls2.Aa.setup(12345);
  "tex1 tex2 tex3 tex4 tex5 tex_tank1 yotsubaLeaf kanade-cannon".split(" ").forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawTexture(a, 0, 0);
    f = f.getBitmap();
    f.filter({calc:function(a, b, d, f, v) {
      v.setPixelIndex(b, a[0], 0, 0)
    }});
    var d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawBitmap(f, 0, 0);
    tm.asset.AssetManager.set(b + "Red", d)
  });
  gls2.ha.setup();
  gls2.oa.setup();
  this.da = gls2.cb()
}, el:function() {
  this.stop()
}, ni:s, $g:function(b, a) {
  var f = {score:Math.floor(this.da.score), stage:this.da.Mb + 1, continueCount:this.da.Rc, shipType:this.da.fa.type, shipStyle:this.da.fa.style, fps:0, screenShot:this.da.Yd};
  b ? (f.userName = b, this.ni = s) : this.ni = k;
  tm.util.Ajax.load({url:"/api/ranking/post", data:f, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        a(l, k, b.scoreId)
      }else {
        if(b.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.$g(l, a);
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(b = "";"" === b;) {
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.bk())
              }
              b !== l && (b = b.substring(0, 10), this.$g(b + " (\u533f\u540d)", a))
            }else {
              a(l, s)
            }
          }
        }else {
          a("\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c")
        }
      }
    }else {
      a("\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c")
    }
  }.bind(this), error:function() {
    a("\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c")
  }})
}, bk:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc(30) \u76f8\u7530\u7dcf\u7406".split(" ").pickup()
}, jh:l, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}, xa:function(b) {
  if(window.achevements) {
    var a = tm.asset.AssetManager.get("achevements").data;
    if(a[b]) {
      var f = window.achevements;
      -1 == f.indexOf(b) && (f.push(b), tm.util.Ajax.load({url:"/api/achevement/" + b, type:"POST", dataType:"json", success:function(d) {
        console.dir(d);
        a[b] && (gls2.ua("achevement"), this.da.gi.addChild(gls2.sh(a[b].title)))
      }.bind(this), error:function() {
        console.warn("error!")
      }}))
    }
  }
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Tc = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.cb.ee && gls2.cb.ee.Ce(0)
};
var N = [1E9, 1E10], Q = [3, 2, 1], R = [6, 4, 2], S = [1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], J = [0.1, 0.4, 1];
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.Bh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Xa:0, Dc:k, le:k, fb:s, da:l, speed:0, Pb:l, Qd:l, ri:l, nf:l, cc:l, Gg:l, Bc:l, Hg:l, Ig:l, frame:0, init:function(a, d, h) {
    this.superInit("fighter", 64, 64);
    this.da = a;
    this.type = d;
    this.style = h;
    tm.Hb.kd.qe.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Qd = this.ri = gls2.Dh(d, 100);
    this.nf = gls2.Dh(3, 100);
    this.cc = gls2.xh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.cc.visible = s;
    this.uj();
    this.Pb = this.tj();
    1 === this.style && (this.Pb = [this.Pb[1], this.Pb[2]]);
    this.Bc = tm.display.CanvasElement().addChildTo(this);
    d = 0;
    for(h = this.Pb.length;d < h;d++) {
      var m = this.Pb[d];
      gls2.Oi(this, m).setPosition(m.x, m.y).addChildTo(this.Bc)
    }
    this.ok = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.ok.blendMode = "lighter";
    this.Hg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Hg.blendMode = "lighter";
    this.Hg.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Wa && !a.Ma
    };
    this.Ig = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Ig.blendMode = "lighter";
    this.Ig.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Wa && !a.Ma
    };
    this.we = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.we.blendMode = "lighter";
    this.we.rotation = -90;
    this.we.strokeStyle = "rgba(180,180,255,0.4)";
    this.we.update = function() {
      this.visible = a.Ma
    };
    this.we.draw = function(b) {
      b.lineCap = "round";
      var d = a.Td / 800;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, s);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, s);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, s)
    };
    this.jk = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.jk.update = function() {
      this.visible = a.Ma
    };
    b === l && (b = gls2.mh(this.da.ma))
  }, tj:function() {
    if(0 === this.type) {
      return[{x:0, ud:0, y:40, d:0, hc:k, $b:-0.7, v:k}, {x:0, ud:0, y:40, d:0, hc:k, $b:0.5, v:k}, {x:0, ud:0, y:40, d:0, hc:k, $b:-0.5, v:k}, {x:0, ud:0, y:40, d:0, hc:k, $b:0.7, v:k}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, hc:s, $b:-0.7, v:k}, {x:-40, y:40, d:0.1, hc:s, $b:-0.5, v:k}, {x:40, y:40, d:0.1, hc:k, $b:0.5, v:k}, {x:70, y:20, d:0.1, hc:k, $b:0.7, v:k}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, hc:s, $b:-0.7, v:k}, {x:-30, y:20, d:0.4, hc:s, $b:-0.5, v:k}, {x:30, y:20, d:0.4, hc:k, $b:0.5, v:k}, {x:60, y:40, d:0.6, hc:k, $b:0.7, v:k}]
    }
  }, uj:function() {
    this.Gg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Gg.setFrameIndex(5);
    this.Gg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, ed:-1, Sd:s, ac:s, update:function(f) {
    this.visible = this.fb ? 0 === f.frame / 2 % 2 : k;
    var d = f.keyboard;
    if(this.Dc) {
      var h = d.getKeyAngle();
      h !== l && (h = a[h], this.x += h.x * this.speed * (this.ac ? 0.5 : 1), this.y += h.y * this.speed * (this.ac ? 0.5 : 1));
      this.x = gls2.la.clamp(this.x, 15, 465);
      this.y = gls2.la.clamp(this.y, 15, 625);
      var m = d.getKey("c") && this.le, h = d.getKey("z") && this.le;
      this.ed = m ? this.ed + 1 : this.ed - 1;
      this.ed = gls2.la.clamp(this.ed, -1, 10);
      this.ac = h && m || 10 === this.ed;
      m = this.da.Ma ? 3 : 5;
      this.Sd = !this.ac && (0 <= this.ed || h) && 0 === f.frame % m;
      h && (this.ed = 0);
      this.cc.x = this.x;
      this.cc.y = this.y - 40;
      d.getKeyDown("x") && this.le && (0 < this.da.Wa && !this.da.Ma ? (this.da.Nk(), gls2.oj(this).addChildTo(this.da)) : !this.da.yd && 0 < this.da.Qb && (this.Jb = gls2.la.clamp(this.Jb - 2, 0, 1), this.da.ie(-0.02), gls2.nh(this, this.da).setPosition(gls2.la.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.da), gls2.core.xa("bomb1")))
    }else {
      this.ac = this.Sd = s
    }
    this.Sd && (h = Math.sin(0.2 * f.frame), m = this.Qd.fire(this.x - 7 - 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.da), m = this.Qd.fire(this.x + 7 + 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.da));
    if(this.ac) {
      h = 0;
      for(m = this.Pb.length;h < m;h++) {
        this.Pb[h].v = s
      }
      this.Bc.rotation = 0
    }else {
      this.cc.visible = s;
      h = 0;
      for(m = this.Pb.length;h < m;h++) {
        this.Pb[h].v = k
      }
    }
    this.Jj(d);
    this.qj(d, f.frame);
    0 === f.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.da), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.da));
    this.frame = f.frame
  }, Sc:function() {
    this.ac = this.Sd = s;
    this.da.ef();
    this.da.qb = 0;
    this.da.jb = 0;
    this.da.Ra = 0
  }, Jj:function(a) {
    if(0 === this.type) {
      for(a = this.Pb.length;this.Pb[--a] !== i;) {
        var b = this.Pb[a];
        0 === a ? b.x = b.ud + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.ud + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.ud + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.ud + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Bc, b.rotation = this.ac ? 0 : this.Dc && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Dc && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, qj:function(a, b) {
    this.Dc && a.getKey("left") ? this.Xa = gls2.la.clamp(this.Xa - 0.2, -3, 3) : this.Dc && a.getKey("right") ? this.Xa = gls2.la.clamp(this.Xa + 0.2, -3, 3) : 0 > this.Xa ? this.Xa = gls2.la.clamp(this.Xa + 0.2, -3, 3) : 0 < this.Xa && (this.Xa = gls2.la.clamp(this.Xa - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Xa) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Xa) : 2 === this.type && this.setFrameIndex(31 + ~~this.Xa);
    return b
  }});
  gls2.Oi = tm.createClass({superClass:tm.display.AnimationSprite, sd:l, fa:l, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.sd = b;
    this.fa = a;
    this.altitude = 10;
    this.gotoAndPlay(b.hc ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.sd.v) {
      this.x = this.sd.x * (this.fa.da.Ma ? 1.5 : 1);
      this.y = this.sd.y * (this.fa.da.Ma ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.sd.d * this.sd.$b);
      var d = this.parent.localToGlobal(this);
      this.sd.v && 0 === a.frame % 2 && b.clone(40).setPosition(d.x, d.y).addChildTo(this.fa.da);
      this.fa.Sd && (d = this.fa.Qd.fire(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== l && d.addChildTo(a.da))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  gls2.Md = tm.createClass({superClass:tm.display.Sprite, speed:0, pd:0, Fj:1, fi:0, rb:k, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.pd = 1;
    b === l && (b = gls2.Ya(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.Ie(a)
  }, update:function() {
    this.x += this.Wc;
    this.y += this.sc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, Ie:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, lf:function(a) {
    for(var d = 0;d < a;d++) {
      var h = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = gls2.la.randf(2, 8), q = 2 * Math.random() * Math.PI;
      h.Fa = Math.cos(q) * m;
      h.Ga = Math.sin(q) * m;
      h.scaleX = h.scaleY = (gls2.la.randf(0.1, 0.5) + gls2.la.randf(0.1, 0.5)) / 2;
      h.addEventListener("enterframe", function() {
        this.x += this.Fa;
        this.y += this.Ga;
        this.Fa *= 0.9;
        this.Ga *= 0.9
      })
    }
  }});
  gls2.Md.oe = function() {
    for(var b = [].concat(a), d = 0, h = b.length;d < h;d++) {
      b[d].remove()
    }
  };
  var a = gls2.Md.pb = [];
  gls2.Dh = tm.createClass({dd:l, ei:s, init:function(b, d) {
    this.ei = 3 === b;
    this.dd = [];
    for(var h = 0;h < d;h++) {
      var m = gls2.Md(b), q = this;
      m.addEventListener("added", function() {
        this.ta = 10;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        q.dd.push(this)
      });
      this.ei && m.addEventListener("enterframe", function(a) {
        this.setScale((this.Fj + this.fi) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.dd.push(m)
    }
  }, fire:function(a, b, h) {
    var m = this.dd.pop();
    if(m === i) {
      return l
    }
    var q = gls2.la.degToRad(h);
    m.Wc = Math.cos(q) * m.speed;
    m.sc = Math.sin(q) * m.speed;
    m.setPosition(a, b);
    m.rotation = h + 90;
    return m
  }, Zd:function(a) {
    for(var b = this.dd.length;this.dd[--b] !== i;) {
      this.dd[b].pd = 1 + 0.1 * a, this.dd[b].fi = 0.2 * a
    }
  }})
})();
gls2.xh = tm.createClass({superClass:tm.display.Sprite, fa:l, da:l, zc:0, frame:0, Fi:l, color:l, Lh:0, tg:0, Gj:s, head:l, ai:l, Ac:l, rb:k, pd:1, Xd:l, init:function(b, a) {
  this.fa = b;
  this.da = b.da;
  this.Lh = 0 === this.fa.style ? 1 : 1.2;
  this.tg = 0 === this.fa.style ? 50 : 75;
  var f = this;
  this.Fi = a;
  this.superInit(a.redBody, this.tg, 100);
  this.boundingHeightBottom = 1;
  this.xl = 0;
  this.origin.y = 1;
  var d = this.Ac = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.ai = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = f.zc - f.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < f.zc
  };
  this.Ie(["red", "green", "blue"][this.fa.type]);
  this.Zd(0)
}, Ie:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.Fi[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Ac.gotoAndPlay(this.color);
  this.ai.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Xd = l;
  return this
}, Zd:function(b) {
  this.boundingWidth = this.width = this.tg + 30 * b / 10;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.pd = 1 * this.Lh + 0.25 * b;
  0 === b ? this.Ie(["red", "green", "blue"][this.fa.type]) : this.Ie("hyper")
}, lf:function(b, a) {
  this.Xd === l && this.Rh();
  a = a || this.zc;
  for(var f = 0;f < b;f++) {
    var d = this.Xd.clone().setPosition(this.x, a).addChildTo(this.da), h = gls2.la.randf(8, 14), m = gls2.la.randf(0, Math.PI);
    d.Fa = Math.cos(m) * h;
    d.Ga = Math.sin(m) * h;
    d.scaleX = d.scaleY = (gls2.la.randf(0.5, 1.5) + gls2.la.randf(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.Fa;
      this.y += this.Ga;
      this.Fa *= 0.95;
      this.Ga *= 0.95
    })
  }
}, Yj:function(b, a, f) {
  this.Xd === l && this.Rh();
  for(var d = 0;d < b;d++) {
    var h = this.Xd.clone().setPosition(a, f).addChildTo(this.da), m = gls2.la.randf(12, 20), q = gls2.la.randf(0, Math.PI);
    h.Fa = Math.cos(q) * m;
    h.Ga = Math.sin(q) * m;
    h.scaleX = h.scaleY = (gls2.la.randf(1, 3) + gls2.la.randf(1, 3)) / 2;
    h.addEventListener("enterframe", function() {
      this.x += this.Fa;
      this.y += this.Ga;
      this.Fa *= 0.95;
      this.Ga *= 0.95
    })
  }
}, Rh:function() {
  this.Xd = "hyper" === this.color ? gls2.Ya(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Ya(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.fa.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.fa.ac) ? (this.zc = Math.max(0, this.zc - 40), this.height = this.y - this.zc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.zc = this.y - 40;
  this.Gj = this.visible
}, draw:function(b) {
  var a = this.srcRect, f = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(f, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, il:function() {
  return this.zc
}, Hk:function(b) {
  this.zc = b;
  this.head.update()
}});
gls2.xh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.zc
});
(function() {
  gls2.nh = tm.createClass({superClass:tm.app.Object2D, rb:k, da:l, init:function(a, f) {
    this.superInit();
    this.fa = a;
    this.da = f;
    this.Ai = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Ai.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Ai));
    this.Jh();
    b === l && (b = gls2.Ya(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.qa = 0;
    this.Fe = 1;
    this.addEventListener("added", function() {
      this.da.yd = k;
      this.fa.fb = k;
      this.da.Qb -= 1;
      this.da.pf = s;
      this.da.ef();
      this.da.Bb("drop BOMBER!!", k);
      gls2.ua("bomb");
      gls2.ua("voBomb")
    });
    this.addEventListener("removed", function() {
      this.da.yd = s;
      this.fa.fb = s
    })
  }, Jh:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.la.randf(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.Fe + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.qa;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.qa += 3.6, this.Fe = -1) : (this.b = 8, this.qa += 1.8, this.Fe = 1)
  }});
  gls2.yh = tm.createClass({superClass:gls2.nh, init:function(a, b) {
    this.superInit(a, b);
    this.addEventListener("added", function() {
      this.da.Qb = 0
    })
  }, Jh:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.la.randf(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.Fe + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.qa;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.qa += 1.8, this.Fe = 1)
  }});
  var b = l
})();
gls2.Pi = tm.createClass({superClass:tm.display.Sprite, Wc:0, sc:0, fa:l, qa:0, init:function(b, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.fa = f;
  this.sc = 1;
  this.Wc = 0.5 > gls2.Aa.random() ? -1 : 1;
  this.qa = 0
}, update:function() {
  this.x += this.Wc;
  this.y += 2 * this.sc;
  if(2025 > gls2.Tc(this, this.fa)) {
    this.fa.da.Cj(1), this.remove()
  }else {
    if(3E3 > this.qa) {
      if(30 > this.x || 450 < this.x) {
        this.Wc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.sc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.qa += 1
}});
gls2.Vi = tm.createClass({superClass:tm.display.Sprite, Wc:0, sc:0, fa:l, qa:0, init:function(b, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var d = -1;1 >= d;d++) {
    for(var h = -1;1 >= h;h++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(d, h).addChildTo(this)
    }
  }
  this.setPosition(b, a);
  this.fa = f
}, update:function() {
  this.y += 0.5;
  4096 > gls2.Tc(this, this.fa) && (this.fa.da.Xh(), gls2.core.xa("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.oa = {};
gls2.oa.setup = function() {
  gls2.Nj = {};
  gls2.oa.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.Nj.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.oa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.oa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.oa.particle16 = gls2.Ya(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.oa.lf = function(b, a, f) {
  b = gls2.oa.particle16.clone().setPosition(b, a);
  b.rb = k;
  b.addChildTo(f);
  f = gls2.la.randf(5, 20);
  a = gls2.la.randf(Math.PI, 2 * Math.PI);
  b.Fa = Math.cos(a) * f;
  b.Ga = Math.sin(a) * f;
  b.scaleX = b.scaleY = (gls2.la.randf(0.1, 0.5) + gls2.la.randf(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.Fa;
    this.y += this.Ga;
    this.Fa *= 0.9;
    this.Ga *= 0.9
  })
};
gls2.oa.Eg = function(b, a, f, d) {
  d = d || 1.8;
  var h = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  h.rb = k;
  h.addChildTo(f);
  h.image = gls2.oa.shockwaveImage;
  h.tweener.clear().to({scaleX:d, scaleY:d, alpha:0}, 800, "easeOutQuad").call(function() {
    h.remove()
  })
};
gls2.oa.$j = function(b, a, f) {
  var d = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  d.rb = k;
  d.addChildTo(f);
  d.image = gls2.oa.shockwaveImage;
  d.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
};
gls2.oa.Zj = function(b, a, f) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.rb = k;
  b.addChildTo(f);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.oa.gf = function(b, a, f, d) {
  gls2.ua("explode");
  var h = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  h.rb = k;
  if(d !== i) {
    var m = d.x, q = d.y;
    h.addEventListener("enterframe", function() {
      this.x += m;
      this.y += q;
      m *= 0.99;
      q *= 0.99
    })
  }
  h.addChildTo(f);
  gls2.oa.Eg(b, a, f)
};
gls2.oa.Qj = function(b, a, f) {
  gls2.ua("explode");
  var d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.rb = k;
  d.addChildTo(f);
  d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.rb = k;
  d.addChildTo(f);
  d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.rb = k;
  d.addChildTo(f)
};
gls2.oa.kb = function(b, a, f) {
  gls2.ua("explode2");
  gls2.ua("explode3");
  for(var d = ~~(Math.random() * gls2.Yc.noise.length), h = 0;20 > h;h++) {
    var m = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Yc.noise.at(~~(gls2.Yc.noise.length * h / 20) + d), 2);
    m.rb = k;
    m.addChildTo(f)
  }
  gls2.oa.Eg(b, a, f, 5)
};
gls2.oa.te = function(b, a, f) {
  gls2.ua("explode2");
  gls2.ua("explode3");
  for(var d = ~~(Math.random() * gls2.Yc.noise.length), h = 0;20 > h;h++) {
    for(var m = 2 * Math.PI * h / 20, q = Math.pow(gls2.Yc.noise.at(~~(gls2.Yc.noise.length * h / 20) + d), 2), w = 0;3 > w;w++) {
      var v = 4 * q * (w + 1), n = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.qa += 1
      }).setScale(0.3 * (3 - w)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      n.rotation = 2 * Math.random() * Math.PI;
      n.rb = k;
      n.qa = 0;
      n.a = m;
      n.v = v;
      n.addChildTo(f)
    }
  }
};
gls2.If = tm.createClass({superClass:tm.app.Object2D, target:l, qc:0, angle:0, alpha:2, rb:k, reverse:s, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.qc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Ya(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.qc + this.target.x, Math.sin(a) * this.qc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.qc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.qc || 200 < this.qc) && this.remove()
  }
}});
gls2.oj = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, rb:k, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Ya(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.la.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.la.rand(-2, 2)).on("enterframe", function() {
        this.x += this.Fa;
        this.y += this.Ga
      }).addChildTo(this.target.parent);
      a.Fa = 3 * Math.cos(this.angle);
      a.Ga = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
gls2.sh = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(b) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + b + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).setFillStyle("rgba(255, 255, 255, 0.5)").addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, ol:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.alpha = 576 < gls2.core.da.fa.y ? 0.1 : 1;
  this.label.x -= 2;
  -960 > this.label.x && this.remove()
}});
gls2.fj = tm.createClass({superClass:tm.graphics.Canvas, da:l, Pd:l, Db:l, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.da = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Pd = gls2.Qi(200);
  this.Db = gls2.Ch(this)
}, update:function() {
  this.clear();
  this.da.mc !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Db.Fc - 20, 470 * this.da.mc.ta / this.da.mc.bd, 20), this.strokeRect(5, this.Db.Fc - 20, 470, 20), this.clear(263.5, this.Db.Fc - 20 + 2, 2, 16), this.clear(52, this.Db.Fc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.da.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.Db.Fc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.da.qb)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.da.Ra / 1E3) + 1), this.Db.ue + 192, 22);
  b = [0, 1, 4][this.da.fa.type];
  for(a = 0;a < this.da.jd - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * I.Va.bc.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.da.ze + " hit", this.Db.ue + 10, 95);
  0 < ~~this.da.Ra && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.da.Ra + " HIT!!", 10, 0.5 * -this.Db.Fc + 115));
  0 === this.frame % 2 && (!this.da.Ma && 0 < this.da.Wa ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.da.Wa, 5, 637)) : this.da.Ma && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.da.vd, 5, 637)));
  for(a = 0;a < this.da.Qb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.da.pf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Pd.update();
  this.Pd.Zg = this.Db.Fc + 5;
  this.Pd.draw(this);
  this.frame += 1
}});
gls2.Ch = tm.createClass({superClass:tm.app.Object2D, Ub:l, ue:0, Fc:0, init:function(b) {
  this.superInit();
  this.Ub = b
}});
(function() {
  var b = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.Yi = tm.createClass({superClass:tm.graphics.Canvas, Ea:l, Tb:l, ec:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ea = gls2.Zi();
    this.Ea.ma = this;
    this.Ea.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Tb = [];
    this.ec = [];
    for(var a = 0;5 > a;a++) {
      this.Tb[a] = 40 * b[a], this.ec[a] = this.Tb[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Ea.Fa = Math.cos(this.Ea.direction) * this.Ea.speed;
    this.Ea.Ga = Math.sin(this.Ea.direction) * this.Ea.speed;
    for(var b = 0;5 > b;b++) {
      for(this.Ea.oc[b] += this.Ea.Fa * Math.pow(0.8, b);3 * this.Tb[b] < this.Ea.oc[b];) {
        this.Ea.oc[b] -= 3 * this.Tb[b]
      }
      for(;this.Ea.oc[b] < 3 * -this.Tb[b];) {
        this.Ea.oc[b] += 3 * this.Tb[b]
      }
      for(this.Ea.pc[b] += this.Ea.Ga * Math.pow(0.8, b);2 * this.ec[b] < this.Ea.pc[b];) {
        this.Ea.pc[b] -= 2 * this.ec[b]
      }
      for(;this.Ea.pc[b] < 2 * -this.ec[b];) {
        this.Ea.pc[b] += 2 * this.ec[b]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Ea.background !== l ? this.clearColor(this.Ea.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * b[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * b[a] + ")"}]).toStyle();
      this.beginPath();
      for(var f = 0, d = this.Ea.oc[a] - 3 * this.Tb[a];d < 480 + 3 * this.Tb[a];d += 1.5 * this.Tb[a]) {
        for(var f = 0 === f ? this.ec[a] : 0, h = this.Ea.pc[a] - 2 * this.ec[a] + f;h < 640 + 2 * this.ec[a];h += 2 * this.ec[a]) {
          this.line(d, h, d + this.Tb[a], h), this.line(d, h, d - this.Tb[a] / 2, h + this.ec[a]), this.line(d, h, d - this.Tb[a] / 2, h - this.ec[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.Zi = tm.createClass({superClass:tm.app.Object2D, oc:0, pc:0, direction:0, speed:0, Fa:0, Ga:0, background:l, init:function() {
    this.superInit();
    this.oc = [];
    this.pc = [];
    for(var a = 0;5 > a;a++) {
      this.oc[a] = 240, this.pc[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Ga = this.Fa = 0
  }})
})();
gls2.kg = tm.createClass({superClass:tm.display.Sprite, ii:s, da:l, fa:l, Uc:s, xd:s, gh:s, Fa:0, Ga:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.ii = b) && this.setScale(2, 2);
  this.da = gls2.cb.ee;
  this.fa = this.da.fa;
  this.addChildTo(this.da);
  b = 0.5 * gls2.Aa.random() * Math.PI - 0.75 * Math.PI;
  this.Fa = 30 * Math.cos(b);
  this.Ga = 30 * Math.sin(b)
}, update:function() {
  this.fa.ac && (this.xd = k);
  if(this.fa.parent === l) {
    this.xd = s
  }else {
    if(100 > gls2.Tc(this, this.fa)) {
      this.da.qk(this);
      this.remove();
      return
    }
    1E4 > gls2.Tc(this, this.fa) && (this.xd = k);
    if(this.gh && this.xd) {
      var b = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.gh || (this.x += this.Fa, this.y += this.Ga, this.Fa *= 0.8, this.Ga *= 0.8, -1 < this.Fa && (1 > this.Fa && -1 < this.Ga && 1 > this.Ga) && (this.gh = k))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.Eh = tm.createClass({superClass:gls2.kg, Uc:s, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.nj = tm.createClass({superClass:gls2.kg, Uc:k, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.xd || (this.x += this.da.ma.Fa, this.y += this.da.ma.Ga);
  this.superClass.prototype.update.call(this)
}});
gls2.md = tm.createClass({fa:l, da:l, $:l, frame:0, init:function(b) {
  this.da = b;
  this.fa = b.fa;
  this.$d();
  this.$ = gls2.mj();
  this.frame = 0
}, $d:D(), update:function() {
  this.Pj(this.frame);
  this.frame += 1
}, Pj:function(b) {
  b = this.$.get(b);
  if(b !== l) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.qh[b.value] !== i) {
        var a = gls2.qh[b.value];
        if(a) {
          if(a[0].mc === k) {
            this.Ua(a[0])
          }else {
            for(var f = 0;f < a.length;f++) {
              var d = this.Ua(a[f]);
              b.stop && d.addEventListener("enemyconsumed", function() {
                this.$.be = s
              }.bind(this))
            }
          }
        }
      }else {
        console.warn("gls2.EnemyUnit['" + b.value + "'] is undefined")
      }
    }
  }
}, Ua:function(b) {
  this.da.ff += 1;
  b = b.aa(this.da, b.ba).setPosition(b.x, b.y).addChildTo(this.da);
  b.Ka = this;
  b.Wd();
  return b
}, ke:function(b) {
  gls2.hf();
  this.da.re = k;
  for(var a = tm.app.Object2D().setPosition(240, 320), f = -4;4 >= f;f++) {
    for(var d = -4;4 >= d;d++) {
      var h = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(f, d);
      h.qa = 0;
      h.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.qa) + 0.5;
        this.qa += 1
      };
      h.addChildTo(a)
    }
  }
  a.tweener.wait(3E3).call(b).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = D();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.da.Cg);
  gls2.ua("warning");
  gls2.ua("voWarning")
}});
gls2.md.create = function(b, a) {
  switch(a) {
    case 0:
      return gls2.hj(b);
    case 1:
      return gls2.ij(b);
    case 2:
      return gls2.jj(b);
    case 3:
      return gls2.kj(b);
    case 4:
      return gls2.lj(b);
    default:
      g(Error("stageNumber = " + a))
  }
};
gls2.mj = tm.createClass({index:0, data:l, be:s, init:function() {
  this.data = {}
}, add:function(b, a, f) {
  this.index += b;
  this.data[this.index] = {stop:f, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? l : b.stop === k ? (this.be = k, b) : this.be ? l : b
}});
gls2.hj = tm.createClass({superClass:gls2.md, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Lb("bgm1", k);
    this.da.ma.direction = 0.5 * Math.PI;
    this.da.ma.speed = 8;
    this.da.ma.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.$.add(200, "tankRD-center");
  this.$.add(200, "tankRD-left");
  this.$.add(20, "heri1-right");
  this.$.add(60, "heri1-center");
  this.$.add(10, "cannon-0");
  this.$.add(30, "heri1-left");
  this.$.add(10, "cannon-1");
  this.$.add(30, "tankL-top");
  this.$.add(50, "heri1-right");
  this.$.add(20, "tankRD-center");
  this.$.add(80, "heri1-center");
  this.$.add(150, "komachi-1");
  this.$.add(230, "heri1-right");
  this.$.add(20, "heri1-center");
  this.$.add(20, "heri1-left");
  this.$.add(20, "tankL-top");
  this.$.add(20, "tankRD-left");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-center");
  this.$.add(20, "tankRD-center");
  this.$.add(20, "tankRD-left");
  this.$.add(50, "heri1-right");
  this.$.add(10, "cannon-7");
  this.$.add(30, "heri1-center");
  this.$.add(50, "heri1-left");
  this.$.add(20, "tankL-top");
  this.$.add(50, "heri1-right");
  this.$.add(50, "fighter-m-1");
  this.$.add(50, "fighter-m-5");
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(150, "yukishiro", k);
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(50, "fighter-m-0");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-left");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(50, "heri2-left");
  this.$.add(1, "cannon-6");
  this.$.add(30, "heri1-left");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-center");
  this.$.add(50, "fighter-m-6");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right2");
  this.$.add(50, "heri1-left2");
  this.$.add(60, "heri1-center2");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "fighter-m-0");
  this.$.add(50, "fighter-m-1");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-left");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-left");
  this.$.add(1, "cannon-1");
  this.$.add(30, "heri1-center");
  this.$.add(50, "heri1-left");
  this.$.add(50, "heri1-right");
  this.$.add(30, "heri1-center");
  this.$.add(50, "heri1-left");
  this.$.add(50, "heri1-right");
  this.$.add(50, "fighter-m-6");
  this.$.add(50, "fighter-m-5");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right");
  this.$.add(50, "heri1-left2");
  this.$.add(50, "heri1-center2");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-right2");
  this.$.add(50, "heri1-center");
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.ke(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(600, "misumi")
}, $d:function() {
  this.da.ma.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.ij = tm.createClass({superClass:gls2.md, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Lb("bgm2", k);
    this.da.ma.direction = 0.5 * Math.PI;
    this.da.ma.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
  });
  this.$.add(60, "heri2-left");
  this.$.add(60, "heri2-center");
  this.$.add(60, "heri2-right");
  this.$.add(20, "tankRD-center");
  this.$.add(20, "tankL-top");
  this.$.add(20, "yayoi-R0");
  this.$.add(1, "yayoi-R2");
  this.$.add(40, "heri2-left");
  this.$.add(60, "heri2-center");
  this.$.add(60, "heri2-right");
  this.$.add(60, "yayoi-R1");
  this.$.add(1, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(30, "makoto-R0");
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
  });
  this.$.add(600, "tank5-center");
  this.$.add(1, "yayoi-3");
  this.$.add(90, "heri2-left");
  this.$.add(1, "yayoi-2");
  this.$.add(90, "tank5-left");
  this.$.add(1, "yayoi-1");
  this.$.add(90, "heri2-right");
  this.$.add(1, "yayoi-0");
  this.$.add(90, "heri2-left");
  this.$.add(60, "tank5-left");
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
  });
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri1-left2");
  this.$.add(40, "tank5-center");
  this.$.add(40, "heri2-right");
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri2-left");
  this.$.add(40, "tank5-center");
  this.$.add(40, "heri2-right");
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri1-left2");
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri2-left");
  this.$.add(40, "tank5-center");
  this.$.add(40, "heri2-right");
  this.$.add(40, "tank5-left");
  this.$.add(40, "heri2-left");
  this.$.add(90, "makoto-4");
  this.$.add(1, "tsubomi-0");
  this.$.add(1, "tsubomi-2");
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.da.ma.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.da.ma.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", k);
  this.$.add(300, "heri2-left");
  for(b = 0;12 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
  });
  this.$.add(60, "tank5-left");
  this.$.add(60, "tank5-left");
  this.$.add(60, "tank5-left");
  this.$.add(120, "itsuki-2");
  this.$.add(1, "komachi2-0");
  this.$.add(380, "tsubomi-0");
  this.$.add(1, "komachi2-1");
  this.$.add(380, "itsuki-1");
  this.$.add(380, "makoto-4");
  this.$.add(1, "komachi2-0");
  this.$.add(380, "makoto-1");
  this.$.add(580, "erika");
  this.$.add(520, function() {
    this.ke(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(300, function() {
    this.da.ma.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, $d:function() {
  this.da.ma.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.jj = tm.createClass({superClass:gls2.md, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Lb("bgm3", k);
    this.da.ma.direction = 0.5 * Math.PI;
    this.da.ma.speed = 2;
    this.da.ma.tweener.clear().to({speed:5}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "madoka-1");
  this.$.add(150, "nao2-center");
  this.$.add(30, "nao2-left");
  this.$.add(30, "nao2-right");
  this.$.add(30, "nao2-center");
  this.$.add(30, "nao2-left");
  this.$.add(30, "nao2-right");
  for(b = 0;6 > b;b++) {
    this.$.add(30, "nao1-center"), this.$.add(30, "nao1-right"), this.$.add(30, "nao1-left")
  }
  this.$.add(60, function() {
    this.da.ma.tweener.clear().to({speed:7}, 1E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(120, "akane-right");
  this.$.add(180, "akane-left");
  this.$.add(120, "reika1-left");
  this.$.add(180, "reika1-left");
  this.$.add(120, "akane-center");
  this.$.add(180, "akane-left");
  this.$.add(60, "reika1-left");
  this.$.add(60, "reika1-left");
  this.$.add(120, "akane-center");
  this.$.add(120, "akane-right");
  this.$.add(60, "reika1-right");
  this.$.add(60, "reika1-right");
  this.$.add(60, function() {
    this.da.ma.tweener.clear().to({speed:3}, 1E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "akane-right");
  this.$.add(60, "akane-left");
  for(b = 0;3 > b;b++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(60, function() {
    this.da.ma.tweener.clear().to({speed:4, direction:90 * (-Math.PI / 180)}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "miyuki_y1");
  this.$.add(60, "reika1-right");
  this.$.add(180, "reika1-right");
  this.$.add(120, "komachi3-0");
  this.$.add(120, "madoka-1");
  this.$.add(60, "reika1-left");
  this.$.add(60, "reika1-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(120, "reika1-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(120, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:4}, 2E3, "easeInOutQuad").to({direction:0.5 * Math.PI}, 2E3, "easeInOutQuad")
  });
  this.$.add(60, "komachi3-1");
  this.$.add(60, "madoka-0");
  this.$.add(120, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-right");
  this.$.add(120, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(300, "higashi", k);
  this.$.add(300, "nao1-left");
  for(b = 0;2 > b;b++) {
    this.$.add(60, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(120, "reika1-right");
  this.$.add(100, "alice");
  for(b = 0;5 > b;b++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(60, "komachi3-0");
  this.$.add(60, "madoka-1");
  this.$.add(60, "komachi3-1");
  this.$.add(60, "madoka-0");
  this.$.add(600, function() {
    this.ke(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.da.ma.direction = Math.PI / 2;
    this.da.ma.tweener.clear().to({speed:7}, 8E3, "easeInOutQuad")
  });
  this.$.add(480, "momozono")
}, $d:function() {
  this.da.ma.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.kj = tm.createClass({superClass:gls2.md, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Lb("bgm4", k);
    this.da.ma.direction = 0.5 * Math.PI;
    this.da.ma.speed = 1
  });
  this.$.add(200, "tsukikage-r");
  this.$.add(100, "tsukikage-l");
  this.$.add(170, "bukky-4-r");
  this.$.add(150, "heri1-4-left");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-center");
  this.$.add(100, "komachi4-0");
  this.$.add(120, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(80, "bukky-4-l");
  this.$.add(200, "bukky-4-r");
  this.$.add(200, "tankRD-center");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(20, "tankRD-left");
  this.$.add(20, "tank5-left");
  this.$.add(20, "tank5-center");
  this.$.add(20, "tankRD-left");
  this.$.add(20, "tank5-left");
  this.$.add(20, "tank5-center");
  this.$.add(100, "tsukikage-r");
  this.$.add(10, "tankL-top");
  this.$.add(100, "tankL-top");
  this.$.add(50, "tankL-top");
  this.$.add(50, "tankL-top");
  this.$.add(150, "komachi4-0");
  this.$.add(50, "komachi4-1");
  this.$.add(500, "heri2-left");
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(b = 0;6 > b;b++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.da.ma.speed = 3;
    this.da.ma.tweener.clear().to({speed:0.3}, 5E3)
  });
  this.$.add(180, "karen-3-2");
  this.$.add(300, "karen-3-8");
  this.$.add(75, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(100, "karen-3-2");
  this.$.add(75, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(100, "karen-3-8");
  this.$.add(75, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-right");
  this.$.add(100, "karen-3-2");
  this.$.add(75, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(25, "heri1-4-center");
  this.$.add(25, "heri1-4-left");
  this.$.add(200, "karen-3-8");
  this.$.add(60, "karen-3-2");
  this.$.add(52, "heri1-4-left");
  this.$.add(12, "heri1-4-right");
  this.$.add(12, "heri1-4-left");
  this.$.add(12, "heri1-4-right");
  this.$.add(12, "heri1-4-left");
  this.$.add(12, "heri1-4-right");
  this.$.add(12, "heri1-4-left");
  this.$.add(12, "heri1-4-right");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(102, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(12, "heri1-4-left2");
  this.$.add(12, "heri1-4-right2");
  this.$.add(400, function() {
    this.da.ma.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.da.ma.direction = 0.5 * Math.PI;
    this.da.ma.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", k);
  this.$.add(1200, D());
  for(b = 0;9 > b;b++) {
    this.$.add(50, 0 === b % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:0.6}, 3E3)
  });
  this.$.add(200, "nozomi4-0");
  this.$.add(20, "tankRD-center");
  this.$.add(90, "tankRD-center");
  this.$.add(90, "tankRD-center");
  this.$.add(200, "nozomi4-2");
  this.$.add(90, "tankRD-center");
  this.$.add(300, "bukky-4-l");
  this.$.add(90, "bukky-4-r");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(150, "tsukikage-r");
  this.$.add(15, "tsukikage-l");
  this.$.add(1, "heri2-center");
  this.$.add(1, "heri2-right");
  this.$.add(1, "heri2-left");
  this.$.add(60, "heri2-center");
  this.$.add(60, "heri2-right");
  this.$.add(60, "heri2-left");
  this.$.add(250, "nozomi4-0");
  this.$.add(100, "nozomi4-2");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(100, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(80, "erika");
  this.$.add(200, function() {
    this.ke(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, $d:function() {
  this.da.ma.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.lj = tm.createClass({superClass:gls2.md, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Lb("bgm5", k);
    this.da.ma.direction = 0.5 * Math.PI;
    this.da.ma.speed = 1;
    this.da.ma.yl = k
  });
  this.$.add(150, "urara5-0");
  this.$.add(260, "urara5-2");
  this.$.add(260, "urara5-1");
  this.$.add(380, "nozomi5-1");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(50, "nozomi5-0");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(100, "nozomi5-2");
  this.$.add(25, "tank5-left");
  this.$.add(25, "tank5-center");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(25, "tank5-left");
  this.$.add(25, "tank5-center");
  this.$.add(55, "tankRD-left");
  this.$.add(25, "tankRD-left");
  this.$.add(25, "tankRD-left");
  this.$.add(200, "mktn5-0");
  this.$.add(60, "heri1-4-left2");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-left");
  this.$.add(300, "mktn5-1");
  this.$.add(60, "heri1-4-right2");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-right2");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-right2");
  this.$.add(10, "heri1-4-right");
  this.$.add(300, "urara5-2");
  this.$.add(300, "urara5-3");
  this.$.add(260, "urara5-0");
  this.$.add(260, "urara5-1");
  this.$.add(260, "urara5-4");
  this.$.add(260, "urara5-5");
  this.$.add(1, "kanade");
  this.$.add(200, "milk5-0");
  this.$.add(1, "itsuki-2");
  this.$.add(300, "milk5-1");
  this.$.add(1, "itsuki-0");
  this.$.add(200, "milk5-0");
  this.$.add(1, "itsuki-2");
  this.$.add(450, "komachi5-0");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right");
  this.$.add(80, "komachi5-2");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left");
  this.$.add(80, "komachi5-1");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(100, "komachi5-0");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right");
  this.$.add(120, "komachi5-2");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left");
  this.$.add(160, "komachi5-1");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(450, "ako5-0");
  this.$.add(250, "ako5-1");
  this.$.add(1200, D());
  for(b = 0;45 > b;b++) {
    this.$.add(66, "heri2-5-left"), this.$.add(66, "heri2-5-center"), this.$.add(66, "heri2-5-right"), this.$.add(2, "DUMMY+" + b)
  }
  this.$.add(300, function() {
    this.ke(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.da.ma.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, $d:function() {
  this.da.ma.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {Ud:function(b, a) {
  if(b.parent === l || a.parent === l) {
    return s
  }
  var f = b.x + b.boundingWidthRight, d = b.y - b.boundingHeightTop, h = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, q = a.y - a.boundingHeightTop, w = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && f > m && d < w && h > q
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Pk:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.wd(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.Si = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:s, title:l, selections:[], description:l, box:l, cursor:l, Qg:l, _selected:0, _opened:s, _finished:s, init:function(b, a, f) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~f.defaultValue;
  this.showExit = f.showExit;
  this.descriptions = f.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Qg = f.onCursorMove;
  b = Math.max(50 * (1 + a.length), 50) + 40;
  this.box = tm.display.RectangleShape(384, b, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"hsla(220,50%,30%,0.8)"}).setPosition(240, 320);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:384, height:b}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.display.Label("", 14).setPosition(240, 630).addChildTo(this)
}, _onOpen:function() {
  var b = 320 - 25 * this.menu.length;
  this.title = tm.display.Label(this.titleText, 30).setPosition(240, b).addChildTo(this);
  this.selections = this.menu.map(function(a, f) {
    var d = this;
    b += 50;
    var h = tm.display.Label(a).setPosition(240, b).addChildTo(this);
    h.interactive = k;
    h.addEventListener("touchend", function() {
      d._selected === f ? d.closeDialog(d._selected) : d._selected = f
    });
    h.width = 336;
    return h
  }.bind(this));
  this._createCursor();
  this._opened = k
}, _createCursor:function() {
  this.cursor = tm.display.RectangleShape(336, 10, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.LinearGradient(0, 0, 336, 0).addColorStopList([{offset:0, color:"rgba(  0,255,100,0.0)"}, {offset:0.2, color:"rgba(  0,255,100,0.3)"}, {offset:0.5, color:"rgba(  0,255,255,0.5)"}, {offset:0.8, color:"rgba(  0,255,100,0.3)"}, {offset:1, color:"rgba(  0,255,100,0.0)"}]).toStyle()}).addChildTo(this);
  this.cursor.blendMode = "lighter";
  this.cursor.x = 240;
  this.cursor.s = this._selected;
  this.cursor.y = this.selections[this._selected].y;
  this.cursor.update = function() {
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Qg !== l && this.parent.Qg(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.ua("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.la.clamp(this._selected, 0, this.selections.length - 1), gls2.ua("select")) : 
  b.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.la.clamp(this._selected, 0, this.selections.length - 1), gls2.ua("select")))
}, closeDialog:function(b) {
  this._finished = k;
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
}, wd:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function T(b, a, f, d, h) {
  h = {}.$extend({menuDescriptions:[].concat(f), showExit:k, defaultValue:0, onCursorMove:D()}, h);
  b.Pk(gls2.Si(a, f, h), d)
}
;gls2.Ya = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, sg:0.85, size:0, image:l, rb:k, init:function(b, a, f, d) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== i ? a : 1;
  this.sg = f !== i ? f : 0.85;
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.sg;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Ya(this.size, this.ll, this.sg, this.image)
}});
gls2.mh = tm.createClass({superClass:gls2.Ya, ma:l, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.ma = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.ma.Fa;
  this.y += this.ma.Ga + 0.3
}, clone:function(b) {
  return gls2.mh(this.ma, b)
}});
gls2.Qi = tm.createClass({width:0, label:l, Gb:l, qa:0, xi:0, Zg:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Gb = [];
  this.xi = 480 - this.width - 5;
  this.Zg = 5
}, Dj:function(b, a) {
  a === k && (this.Gb.clear(), this.Gb.push(""));
  5 < this.Gb.length && this.Gb.splice(1, this.Gb.length - 4);
  this.Gb.push(b);
  return this
}, Hj:function() {
  this.Gb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.Gb.length) {
    if("" !== this.Gb[0]) {
      var a = this.Gb[0][0];
      this.Gb[0] = this.Gb[0].substring(1);
      b += a
    }else {
      this.Gb.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.qa % 2 ? "_" : " ");
  this.qa += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.xi, this.Zg);
  b.fillStyle = "rgba(1,2,48,0.5)";
  b.fillRect(0, 0, this.width, 64);
  b.translate(5, 5);
  b.fillStyle = "rgba(255,255,255,0.5)";
  b.setText(this.label.fontStyle, this.label.align, this.label.baseline);
  this.label._lines.each(function(a, f) {
    b.fillText(a, 0, this.label.textSize * f)
  }.bind(this));
  b.restore()
}});
gls2.Yc = {noise:l, ak:function(b) {
  function a(a) {
    if(1 > a) {
      return l
    }
    var d = [], h = Math.random(), m, q;
    for(q = 0;q < b;q += ~~a) {
      m = Math.random();
      for(var j = 0;j < a;j++) {
        d[q + j] = f(h, m, j / a)
      }
      h = m
    }
    h = d[b - ~~a];
    m = d[0];
    for(j = 0;j < a;j++) {
      d[b - ~~a + j] = f(h, m, j / a)
    }
    return d
  }
  function f(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var d = [], h = 0, m = Math.pow(2, 4);8 > h;h++, m *= 2) {
    var q = a(b / m);
    if(q === l) {
      break
    }
    d.push(q)
  }
  q = [].concat(d[0]);
  h = 1;
  for(m = 0.5;h < d.length;h++, m *= 0.5) {
    for(var w = 0;w < b;w++) {
      q[w] += d[h][w] * m
    }
  }
  for(h = 0;h < q.length;h++) {
    q[h] /= 2
  }
  return q
}};
gls2.Yc.noise = gls2.Yc.ak(512);
gls2.Aa = {index:-1, data:l, setup:function(b) {
  this.data = [];
  b = new MersenneTwister(b);
  for(var a = 0;1E3 > a;a++) {
    this.data[a] = b.next()
  }
}, random:function() {
  this.index += 1;
  1E3 <= this.index && (this.index %= 1E3);
  return this.data[this.index]
}, rand:function(b, a) {
  return Math.floor(this.random() * (a - b + 1)) + b
}, randf:function(b, a) {
  return this.random() * (a - b) + b
}};
gls2.gb = l;
gls2.Lb = function(b, a, f) {
  a || gls2.Ke();
  a = tm.asset.AssetManager.get(b);
  var d = tm.asset.AssetManager.get("bgmLoopInfo");
  a && (gls2.gb = a.clone(), gls2.gb.volume = 0.1 * gls2.core.me, gls2.gb.loop = !f, gls2.gb.play(), d.data[b] && (gls2.gb.source.loopStart = d.data[b].start, gls2.gb.source.loopEnd = d.data[b].end))
};
gls2.Ke = function() {
  gls2.gb !== l && gls2.gb.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.gb.stop()
};
gls2.hf = function() {
  if(gls2.gb !== l) {
    var b = gls2.gb;
    gls2.gb = l;
    b.loop = s;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.ul === AudioBufferSourceNode.PLAYING_STATE && b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.ua = function(b) {
  if(0 !== gls2.core.Bd && gls2.ua.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.Bd, gls2.ua.kh !== l && gls2.ua.kh.stop(), gls2.ua.kh = a) : a.volume = 0.1 * gls2.core.Bd);
    gls2.ua.played[b] = gls2.core.frame
  }
};
gls2.ua.played = {};
gls2.ua.kh = l;
(function() {
  var b = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, qa:0, De:[], kf:s, di:l, ki:0, rf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.di = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.kf = s;
      this.Xk()
    })
  }, Xk:function() {
    for(var a = ("" + Math.floor(gls2.core.ve)).padding(16, " "), b = "", h = 0;h < a.length;h += 4) {
      b += a.substring(h, h + 4) + " "
    }
    this.di.text = "HIGH SCORE: " + b.trim()
  }, wd:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Hh(80 * Math.cos(0.01 * this.qa) + 240, 80 * Math.sin(0.01 * this.qa) + 320, 0);
    this.Hh(80 * Math.cos(0.01 * this.qa + Math.PI) + 240, 80 * Math.sin(0.01 * this.qa + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.kf && this.ti();
    this.qa += 1
  }, Hh:function(f, d, h) {
    if(!this.kf) {
      b === l && (b = gls2.Ya(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Ya(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      h = 0 === h ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      h.speed = 0.6;
      var m = gls2.la.randf(0, 2 * Math.PI), q = gls2.la.rand(0, 20);
      h.setPosition(Math.cos(m) * q + f, Math.sin(m) * q + d);
      var w = this;
      h.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = w.De.indexOf(this);
          -1 !== a && w.De.splice(a, 1)
        }
      };
      this.De.push(h)
    }
  }, ti:function() {
    T(this, "MAIN MENU", ["start", "setting"], this.wk, {defaultValue:this.ki, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, wk:function(a) {
    2 !== a && (this.ki = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.kf = k;
          for(var a = 0, b = this.De.length;a < b;a++) {
            this.De[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.gj())
        }.bind(this));
        break;
      case 1:
        this.cd()
    }
  }, cd:function() {
    T(this, "SETTING", ["bgm volume", "sound volume"], this.Ug, {defaultValue:this.rf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Ug:function(a) {
    3 !== a && (this.rf = a);
    switch(a) {
      case 0:
        this.Vg();
        break;
      case 1:
        this.Wg();
        break;
      default:
        this.ti()
    }
  }, Vg:function() {
    T(this, "BGM VOLUME", "012345".split(""), this.Sg, {defaultValue:gls2.core.me, onCursorMove:function(a) {
      gls2.gb !== l && "exit" !== a && (gls2.gb.volume = 0.1 * a)
    }, showExit:s})
  }, Sg:function(a) {
    6 !== a && (gls2.core.me = a);
    this.cd()
  }, Wg:function() {
    T(this, "SE VOLUME", "012345".split(""), this.Tg, {defaultValue:gls2.core.Bd, showExit:s})
  }, Tg:function(a) {
    6 !== a && (gls2.core.Bd = a);
    this.cd()
  }, tl:function() {
    T(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.vk, {defaultValue:gls2.core.Wh, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, vk:function(a) {
    5 !== a && (gls2.core.Wh = a);
    this.cd()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.gj = tm.createClass({superClass:gls2.Scene, mode:0, types:l, Af:l, ic:l, jc:l, kc:l, Mg:l, Kg:l, type:0, style:0, qd:s, uf:s, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Jk();
    this.Af = this.Ik();
    var a = tm.display.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(48, 320).setRotation(-90);
    a.update = function(a) {
      this.setScale(a.keyboard.getKey("left") ? 2 : 1);
      this.alpha = 1 + 0.5 * Math.sin(0.1 * a)
    };
    a.addChildTo(this);
    a = tm.display.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(432, 320).setRotation(90);
    a.update = function(a) {
      this.setScale(a.keyboard.getKey("right") ? 2 : 1);
      this.alpha = 1 + 0.5 * Math.sin(0.1 * a)
    };
    a.addChildTo(this);
    this.mode = 0;
    this.Af.visible = s;
    this.Pg(-1, k);
    this.ic.update();
    this.jc.update();
    this.kc.update();
    gls2.ua("voSelectShip");
    gls2.Lb("bgmShipSelect", k)
  }, Jk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Mg = tm.display.Label("Type-A").setPosition(240, 150);
    this.Mg.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.Ng = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.Ng.update = function() {
      this.Ng.text = b[this.type]
    }.bind(this);
    this.Ng.addChildTo(a);
    var d = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.ic = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.jc = tm.display.AnimationSprite(d, 64, 64).gotoAndPlay("typeB");
    this.kc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.ic.mb = 0;
    this.jc.mb = 1;
    this.kc.mb = 2;
    this.ic.setScale(3).setPosition(0, 320).addChildTo(a);
    this.jc.setPosition(0, 320).addChildTo(a);
    this.kc.setPosition(0, 320).addChildTo(a);
    this.ic.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.mb / 3 * Math.PI)
    };
    this.jc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.mb / 3 * Math.PI)
    };
    this.kc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.mb / 3 * Math.PI)
    };
    return a
  }, Ik:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Kg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.Kg.addChildTo(a);
    this.gd = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Bc = tm.app.Object2D();
    this.Bc.addChildTo(this.gd);
    this.Bc.update = function(a) {
      this.Bc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.za = [];
    this.za[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.za[0].update = function() {
      0 === this.type ? this.za[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.za[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.za[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.za[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.za[1].update = function() {
      0 === this.type ? this.za[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.za[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.za[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.za[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.za[2].update = function() {
      0 === this.type ? this.za[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.za[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.za[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.za[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.za[3].update = function() {
      0 === this.type ? this.za[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.za[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.za[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.gd.line = b(0, 0, 0, 130, 8);
    this.gd.line.addChildTo(this.gd);
    this.za.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Bc)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.Lg = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.Lg.update = function() {
      this.Lg.text = f[this.style]
    }.bind(this);
    this.Lg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.Af.visible = s, !this.uf && a.keyboard.getKeyDown("left")) {
        this.Pg(-1, s), gls2.ua("select")
      }else {
        if(!this.uf && a.keyboard.getKeyDown("right")) {
          this.Pg(1, s), gls2.ua("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.ua("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.Af.visible = k, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.ua("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.ua("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.qd = k, this.si(), gls2.ua("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Yk(0 === ~~(a.frame / 60) % 2))
    }
  }, sl:function() {
    T(this, "AUTO BOMB", ["on", "off"], this.rk, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:k})
  }, rk:function(a) {
    2 !== a && (this.qd = 0 === a, this.si())
  }, si:function() {
    T(this, "ARE YOU READY?", ["ok"], this.sk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:k})
  }, sk:function(a) {
    0 === a && this.Mk()
  }, Pg:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.ic, this.jc, this.kc][this.type].remove().addChildTo(this.types);
    b ? (this.ic.mb -= a, this.ic.scaleX = 0 === this.type ? 5 : 1, this.ic.scaleY = 0 === this.type ? 5 : 1, this.jc.mb -= a, this.jc.scaleX = 1 === this.type ? 5 : 1, this.jc.scaleY = 1 === this.type ? 5 : 1, this.kc.mb -= a, this.kc.scaleX = 2 === this.type ? 5 : 1, this.kc.scaleY = 2 === this.type ? 5 : 1) : (this.uf = k, this.ic.tweener.clear().to({mb:this.ic.mb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.jc.tweener.clear().to({mb:this.jc.mb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.kc.tweener.clear().to({mb:this.kc.mb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.uf = s
    }.bind(this)));
    this.Mg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Mk:function() {
    gls2.core.da.qd = this.qd;
    gls2.core.replaceScene(gls2.core.da);
    gls2.core.da.start(this.type, this.style);
    gls2.hf()
  }, Yk:function(a) {
    this.Kg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.gd.line.rc = s, this.za[0].line.rc = s, this.za[1].line.rc = s, this.za[2].line.rc = s, this.za[3].line.rc = s) : (this.gd.line.rc = k, this.za[0].line.rc = k, this.za[1].line.rc = k, this.za[2].line.rc = k, this.za[3].line.rc = k);
    a ? (this.za[0].visible = k, this.za[1].visible = k, 1 === this.style ? (this.za[2].visible = s, this.za[3].visible = s) : (this.za[2].visible = k, this.za[3].visible = k), this.gd.line.lineWidth = 5) : (this.za.each(function(a) {
      a.visible = s
    }), this.gd.line.lineWidth = 0 === this.style ? 10 : 25)
  }, wd:D()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, rc:k, init:function(a, b, d, h, m) {
    this.superInit();
    this.angle = d - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = h;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = m
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    if(this.rc && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), d = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - d, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - d, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + d, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + d, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.cb = tm.createClass({superClass:gls2.Scene, fa:l, score:0, Rc:0, qb:0, Ra:0, ze:0, jb:0, $c:0, Mb:0, Ka:l, ma:l, jd:3, yf:0, zf:0, Ic:0, ff:0, Ae:0, tf:0, qd:s, Qb:0, td:0, Mh:0, yd:s, pf:s, Hc:0, Jb:0, Ma:s, xe:0, Td:0, Wa:0, vd:0, kl:0, jl:0, mf:l, Zh:l, Yg:l, Dg:l, Bg:l, Cg:l, vg:l, gi:l, dc:l, Ub:l, mc:l, re:s, nk:s, Ej:0, Yd:l, init:function() {
  gls2.cb.ee !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.cb.ee = this;
  this.Ub = gls2.fj(this);
  this.Ub.Db.addChildTo(this);
  this.ma = gls2.Yi().Ea;
  this.ma.addChildTo(this);
  this.mf = gls2.cb.Layer().addChildTo(this);
  this.Zh = gls2.cb.Layer().addChildTo(this);
  this.Dg = gls2.cb.Layer().addChildTo(this);
  this.Bg = gls2.cb.Layer().addChildTo(this);
  this.Yg = gls2.cb.Layer().addChildTo(this);
  this.Cg = gls2.cb.Layer().addChildTo(this);
  this.vg = gls2.cb.Layer().addChildTo(this);
  this.gi = gls2.cb.th(this).addChildTo(this);
  tm.Hb.kd.qe.Kh = this;
  this.dc = tm.app.Object2D();
  this.dc.addChildTo(this);
  this.dc.update = function(b) {
    this.zk(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Ub.clear()
  })
}, addChild:function(b) {
  b.rb ? this.Bg.addChild(b) : b instanceof gls2.Pa ? this.vg.addChild(b) : b instanceof gls2.kg ? this.mf.addChild(b) : b instanceof gls2.ga ? b.Uc ? this.mf.addChild(b) : this.Dg.addChild(b) : b instanceof gls2.Bh ? this.Yg.addChild(b) : b === this.dc || b === this.ma || b instanceof gls2.cb.Layer || b instanceof gls2.cb.th || b instanceof gls2.Ch || b instanceof gls2.sh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(b)))
}, update:function(b) {
  this.Fk(b.keyboard);
  this.Ka.update(b.frame);
  0 === b.frame % 2 && this.Ub.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.Ke()) : b.keyboard.getKeyDown("space") ? this.Ce(0) : b.keyboard.getKeyDown("p") && (this.fh().saveAsImage(), this.Ce(0))
}, fh:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.ma.ma.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Ub.element, 0, 0);
  return b
}, zk:function(b) {
  this.fa.Dc === s && gls2.ha.erase();
  var a;
  a = [].concat(gls2.ga.pb);
  for(var f = [].concat(gls2.Md.pb), d = f.length;f[--d] !== i;) {
    for(var h = a.length;a[--h] !== i;) {
      var m = a[h], q = f[d];
      if(!(0 >= m.ta || m.fb) && gls2.Collision.Ud(m, q)) {
        if(q.lf(1), q.remove(), m.Sc(q.pd)) {
          this.Ic += 1;
          this.Ma ? this.Fb(0) : this.Fb(0.005);
          this.Rg(m);
          break
        }
      }
    }
  }
  q = this.fa.cc;
  if(this.fa.ac) {
    a = [].concat(gls2.ga.pb);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(h = a.length;a[--h] !== i;) {
      if(m = a[h], !(0 >= m.ta || m.fb) && gls2.Collision.Ud(m, q)) {
        q.Hk(m.y + m.boundingHeightBottom);
        m.Sc(q.pd) ? (this.Ic += 1, this.Ma ? this.Fb(0) : this.Fb(0.01), this.Rg(m)) : (this.jb = Math.min(this.jb + 0.02, 1), this.Ma ? (this.Nd(0.01 * S[this.vd]), this.Fb(0)) : (this.Nd(0.01), this.Fb(0.001)));
        q.lf(2);
        break
      }
    }
    f = {x:this.fa.x, y:this.fa.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(gls2.ga.pb);
    for(h = a.length;a[--h] !== i;) {
      if(m = a[h], !(0 >= m.ta || m.fb) && gls2.Collision.Ud(m, f)) {
        m.Sc(q.pd) ? (this.Ic += 1, this.Ma ? this.Fb(0.03) : this.Fb(0.015), this.Rg(m)) : (this.jb = Math.min(this.jb + 0.02, 1), this.Ma ? (this.Nd(0.01 * S[this.vd]), this.Fb(0.004)) : (this.Nd(0.01), this.Fb(0.002))), q.Yj(2, this.fa.x, this.fa.y - 30)
      }
    }
  }
  if(this.yd) {
    gls2.ha.erase();
    a = [].concat(gls2.ga.pb);
    for(h = a.length;a[--h] !== i;) {
      if(m = a[h], !(0 >= m.ta || m.fb) && m.Sb() && m.Sc(2)) {
        this.od(m.score), this.Ic += 1
      }
    }
    this.jb = this.Ra = 0
  }
  if(this.Ma) {
    h = [].concat(gls2.Md.pb);
    for(m = h.length;h[--m] !== i;) {
      if(q = h[m], !(0 >= q.ta)) {
        f = [].concat(gls2.Pa.pb);
        for(a = f.length;f[--a] !== i;) {
          d = f[a], d.visible !== s && (0 < q.ta && gls2.Collision.Ud(q, d)) && (d.ta -= 6 - this.Jb, 0 > d.ta && (d.Ba(), this.od(10), this.Nd(1), this.ci(s, s, d.x, d.y, 1)), q.ta -= 1)
        }
      }
    }
  }
  if(this.re) {
    gls2.ha.erase()
  }else {
    if(this.fa.parent !== l && this.fa.fb === s && this.yd === s && 0 >= this.xe) {
      for(h = gls2.Pa.pb.length;gls2.Pa.pb[--h] !== i;) {
        if(a = gls2.Pa.pb[h], a.visible !== s && gls2.Collision.Ud(a, this.fa)) {
          this.fa.Sc();
          0 < this.Qb && this.qd ? (this.Jb = gls2.la.clamp(this.Jb - 1, 0, 1), this.ie(-0.01), gls2.yh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this), gls2.core.xa("bomb2")) : this.pi();
          break
        }
      }
      for(h = gls2.ga.pb.length;gls2.ga.pb[--h] !== i;) {
        if(m = gls2.ga.pb[h], !(0 >= m.ta || m.fb) && !m.Uc && gls2.Collision.Ud(m, this.fa)) {
          this.fa.Sc();
          0 < this.Qb && this.qd ? (this.Jb = gls2.la.clamp(this.Jb - 1, 0, 1), this.ie(-0.01), gls2.yh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this), gls2.core.xa("bomb2")) : this.pi();
          break
        }
      }
    }
    this.Ma && (this.Td -= 1, 0 >= this.Td && this.ef());
    this.xe = Math.max(this.xe - 1, 0);
    this.jb -= 0.01;
    0 >= this.jb && (this.jb = 0, this.Ma || 0 < this.Wa ? this.$c = this.Ra = this.qb = 0 : (0 < this.Ra && (0 >= this.$c && (this.$c = 0.005 * this.Ra), this.qb = this.qb * (this.Ra - this.$c) / this.Ra, this.Ra -= this.$c), 0 >= this.Ra && (this.$c = this.Ra = this.qb = 0)));
    this.pf && (this.score += 100);
    q = gls2.Pa.pb.length;
    b.fps = 500 < q ? Math.floor(60 * gls2.la.clamp(500 / q, 0.2, 1)) : 60
  }
}, Rg:function(b) {
  this.ci(b.Uc, this.Ma || 22500 > gls2.Tc(b, this.fa), b.x, b.y, b.star, b instanceof gls2.Gd);
  this.Nd(S[this.vd]);
  for(var a = this.qb, f = ~~(this.Ra / 1E3) + 1, d = 0;d < f;d++) {
    a += b.score, this.od(a)
  }
  this.qb += b.score * f
}, ci:function(b, a, f, d, h, m) {
  b = b ? gls2.nj : gls2.Eh;
  for(var q = 0;q < h;q++) {
    var w = b(a);
    w.setPosition(f, d);
    m && (w.xd = k)
  }
}, qk:function(b) {
  gls2.ua("star");
  b.ii ? (this.zf += 1, this.qb += 1E3, this.od(1E3 + 0 * this.qb), this.Ma ? this.Fb(0) : this.Fb(0.01)) : (this.yf += 1, this.qb += 100, this.od(100 + 0 * this.qb), this.Ma ? this.Fb(0) : this.Fb(0.001))
}, start:function(b, a) {
  this.Ub.Pd.Hj().clear();
  this.Rc = this.score = 0;
  this.jd = 3;
  this.Qb = this.td = Q[a];
  this.Mh = R[a];
  this.Wa = this.Jb = this.Hc = 0;
  this.ef();
  this.yd = s;
  this.Ej = this.Ae = this.tf = 0;
  this.fa = gls2.Bh(this, b, a);
  this.eh(0);
  I.Va.bc.$ex = 2 !== a ? 0 : 1;
  this.Di(0);
  gls2.ua("voLetsGo");
  this.Ok();
  0 === b ? gls2.core.xa("launch0") : 1 === b ? gls2.core.xa("launch1") : 2 === b && gls2.core.xa("launch2")
}, Di:function(b) {
  this.Bb("3...2...1...");
  this.fa.parent !== l && this.fa.remove();
  gls2.ga.oe();
  gls2.Md.oe();
  gls2.ha.oe();
  this.mf.removeChildren();
  this.Bg.removeChildren();
  this.Cg.removeChildren();
  this.Yg.removeChildren();
  this.vg.removeChildren();
  this.dc.removeChildren();
  this.Ic = this.ff = this.zf = this.yf = this.ze = this.jb = this.Ra = this.qb = 0;
  this.mc = l;
  this.nk = this.re = s;
  this.Ae = 0;
  this.Ub.Db.ue = 0;
  this.Jb = this.Ub.Db.Fc = 0;
  this.Mb = b;
  this.Ka = gls2.md.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.Og()
  }.bind(this));
  this.ma.tweener.clear()
}, Og:function() {
  this.Bb("Let's go!");
  this.fa.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.fa.cc.addChildTo(this);
  this.fa.Dc = s;
  this.fa.fb = k;
  this.fa.Sd = s;
  this.fa.ac = s;
  this.fa.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.le = this.Dc = k
  }.bind(this.fa)).wait(3E3).call(function() {
    this.fb = s
  }.bind(this.fa))
}, pi:function() {
  gls2.oa.gf(this.fa.x, this.fa.y, this);
  this.Bb("I was shot down.");
  this.fa.Dc = s;
  this.fa.remove();
  this.jd -= 1;
  this.Wa = this.$c = this.Ra = this.jb = 0;
  this.Ae += 1;
  this.tf += 1;
  this.Jb = gls2.la.clamp(this.Jb - 3, 0, 1);
  this.ie(-0.03);
  0 < this.jd ? this.tweener.clear().wait(1E3).call(function() {
    this.Qb = this.td = Math.min(this.td + 1, this.Mh);
    this.Og()
  }.bind(this)) : (this.Yd = this.fh().canvas.toDataURL("image/png"), gls2.core.ve === this.score && (gls2.core.fk = this.Yd), this.tweener.clear().wait(2E3).call(function() {
    this.Rc < gls2.core.Oh() ? this.Ck() : this.bi()
  }.bind(this)))
}, eh:function(b) {
  I.Va.bc.$rank = gls2.la.clamp(b, 0, 0.5)
}, ie:function(b) {
  this.eh(I.Va.bc.$rank + b)
}, Xj:function() {
  this.Bb("System rebooted.", k);
  this.score = 0;
  this.Rc += 1;
  this.jd = 3;
  this.Qb = this.td = Q[this.fa.style];
  this.Jb = 0;
  this.eh(0);
  this.Og()
}, Ij:function() {
  gls2.Lb("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.dc);
  b.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.fh()));
    b.remove()
  }.bind(this))
}, bi:function() {
  gls2.Ke();
  this.app.replaceScene(gls2.rh())
}, hl:D(), od:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < N.length;b++) {
    var f = N[b];
    a < f && f <= this.score && (this.Xh(), 0 == b && this.app.xa("extend1"), 1 == b && this.app.xa("extend2"))
  }
  gls2.core.ve = Math.max(gls2.core.ve, this.score);
  gls2.core.ve === this.score && (gls2.core.gk = this.Mb, gls2.core.ik = this.fa.type, gls2.core.hk = this.fa.style, gls2.core.ek = this.Rc);
  1E8 <= this.score && gls2.core.xa("score100M");
  2E9 <= this.score && gls2.core.xa("score2G");
  2E10 <= this.score && gls2.core.xa("score20G");
  5E10 <= this.score && gls2.core.xa("score50G");
  1E11 <= this.score && gls2.core.xa("score100G");
  1E12 <= this.score && gls2.core.xa("score1T")
}, Nd:function(b) {
  this.$c = 0;
  this.Ra += b;
  this.ze = Math.max(this.ze, this.Ra);
  1 <= b && (this.jb = 1);
  100 <= this.Ra && this.app.xa("combo100");
  1E3 <= this.Ra && this.app.xa("combo1000");
  1E4 <= this.Ra && this.app.xa("combo10000");
  1E5 <= this.Ra && this.app.xa("combo100000")
}, Fb:function(b) {
  if(10 !== this.Wa) {
    for(b *= 0.75;1 < b;) {
      gls2.If(this.fa).addChildTo(this), b -= 1, this.Hc = 0, this.Wa += 1, 1 === this.Wa ? (this.Bb("HYPER SYSTEM, stand by.", k), gls2.ua("voHyperStandBy")) : (this.Bb("HYPER SYSTEM, ready.", k), gls2.ua("voHyperReady"))
    }
    this.Hc = gls2.la.clamp(this.Hc + b, 0, 1);
    1 <= this.Hc && (gls2.If(this.fa).addChildTo(this), this.Wa += 1, this.Hc -= 1, 1 === this.Wa ? (this.Bb("HYPER SYSTEM, stand by.", k), gls2.ua("voHyperStandBy")) : (this.Bb("HYPER SYSTEM, ready.", k), gls2.ua("voHyperReady")))
  }
}, Nk:function() {
  0.5 > Math.random() ? (this.Bb("HYPER SYSTEM start!!", k), gls2.ua("voHyperStart0")) : (this.Bb("start counting to system limit.", k), gls2.ua("voHyperStart1"));
  this.Jb = gls2.la.clamp(this.Jb + 1, 0, 5);
  this.ie(0.01 * this.Wa);
  I.Va.bc.$hyperOff = 0.5 * (2 !== this.fa.style ? 1 : 0.5);
  this.Td = 800;
  this.xe = 200;
  this.fa.nf.Zd(this.Wa);
  this.fa.cc.Zd(this.Wa);
  this.fa.Qd = this.fa.nf;
  gls2.oa.Zj(this.fa.x, this.fa.y, this);
  this.Ma = k;
  this.vd = this.Wa;
  this.Hc = this.Wa = 0;
  gls2.ha.erase(k, k);
  this.app.xa("hyper1");
  10 == this.vd && this.app.xa("hyper10")
}, ef:function() {
  this.Ma !== s && (this.Ma = s, gls2.If(this.fa, k).addChildTo(this), this.fa.Qd = this.fa.ri, I.Va.bc.$hyperOff = 1 * (2 !== this.fa.style ? 1 : 0.5), this.fa.nf.Zd(0), this.fa.cc.Zd(0), this.xe = 80, this.vd = this.Td = 0, gls2.ha.erase())
}, Cj:function() {
  gls2.ua("decision");
  gls2.ua("voGetBomb");
  this.Qb = Math.min(this.Qb + 1, this.td);
  this.pf = this.Qb === this.td
}, Xh:function() {
  gls2.ua("voExtend");
  this.Bb("extended.");
  this.jd += 1
}, Bb:function(b, a) {
  this.Ub.Pd.Dj(b, a)
}, Ce:function(b) {
  T(this, "PAUSE", ["resume", "setting", "exit game"], this.yk, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:s})
}, yk:function(b) {
  switch(b) {
    case 1:
      this.cd();
      break;
    case 2:
      this.Bk()
  }
}, cd:function() {
  T(this, "SETTING", ["bgm volume", "sound volume"], this.Ug, {defaultValue:this.rf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Ug:function(b) {
  3 !== b && (this.rf = b);
  switch(b) {
    case 0:
      this.Vg();
      break;
    case 1:
      this.Wg();
      break;
    default:
      this.Ce()
  }
}, Bk:function() {
  T(this, "REARY?", ["yes", "no"], this.tk, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:s})
}, tk:function(b) {
  0 === b ? (gls2.Ke(), this.app.replaceScene(gls2.TitleScene())) : this.Ce(1)
}, Vg:function() {
  T(this, "BGM VOLUME", "012345".split(""), this.Sg, {defaultValue:gls2.core.me, onCursorMove:function(b) {
    gls2.gb !== l && 6 !== b && (gls2.gb.volume = 0.1 * b)
  }, showExit:s})
}, Sg:function(b) {
  6 !== b && (gls2.core.me = b);
  this.cd(1)
}, Wg:function() {
  T(this, "SE VOLUME", "012345".split(""), this.Tg, {defaultValue:gls2.core.Bd, showExit:s})
}, Tg:function(b) {
  6 !== b && (gls2.core.Bd = b);
  this.cd(1)
}, Ck:function() {
  T(this, "CONTINUE? (" + this.Rc + "/" + gls2.core.Oh() + ")", ["yes", "no"], this.uk, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:s})
}, uk:function(b) {
  switch(b) {
    case 0:
      this.Xj();
      break;
    case 1:
      this.bi()
  }
}, wd:D(), Kk:function() {
  this.Ub.Db.tweener.clear().to({ue:-480}, 1600, "easeInBack").to({Fc:30}, 800, "easeInOutBack")
}, dk:function() {
  this.Ub.Db.tweener.clear().to({Fc:0}, 800, "easeInOutBack").to({ue:0}, 1600, "easeOutBack")
}, Ge:l, He:0, ye:l, Re:0, Ok:function() {
  if(1 === this.Re) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.ye = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.Ge = [];
    this.He = 0
  }else {
    if(2 === this.Re && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.ye = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var f = localStorage.getItem("rec" + a).split(","), d = 0;d < f.length;d++) {
          this.ye.push(f[d])
        }
      }
    }
  }
}, Fk:function(b) {
  if(1 === this.Re) {
    1E3 < this.Ge.length && (console.log("save"), localStorage.setItem("rec" + this.He, this.Ge), localStorage.setItem("recCount", this.He), this.Ge = [], this.He += 1), this.Ge.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Re && this.ye) {
      var a = this.ye.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : s
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : s
      })
    }
  }
}});
gls2.cb.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.cb.th = tm.createClass({superClass:tm.display.CanvasElement, da:l, frame:0, init:function(b) {
  this.superInit();
  this.da = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.Lj(b);
  this.Mj(b)
}, Lj:function(b) {
  if(0 < this.da.jb) {
    b.fillStyle = "rgba(255," + ~~(255 * this.da.jb) + "," + ~~Math.min(255, 512 * this.da.jb) + ",0.5)";
    var a = 500 * this.da.jb;
    b.fillRect(465, 635 - a, 10, a)
  }
}, Mj:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  10 === this.Wa ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.da.Hc && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.da.Hc, 9))
}});
gls2.cb.ee = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, da:l, Yd:l, dc:l, values:l, labels:l, of:l, yi:[1E3, 2E3, 4E3, 1E4, 1], hi:l, ah:l, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.da = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.da.yf, this.da.zf, ~~(100 * (this.da.Ic / this.da.ff)), this.da.ze, 0 === this.da.Ae ? 2E7 : 0];
  this.of = this.values.map(function(a) {
    return 0.01 * a
  });
  tm.display.Label("RESULT", 40).setPosition(240, 64).addChildTo(this);
  tm.display.Label("STAR (S)").setAlign("right").setBaseline("middle").setPosition(240, 128).addChildTo(this);
  tm.display.Label("STAR (L)").setAlign("right").setBaseline("middle").setPosition(240, 192).addChildTo(this);
  tm.display.Label("KILL RATIO").setAlign("right").setBaseline("middle").setPosition(240, 256).addChildTo(this);
  tm.display.Label("MAX HIT").setAlign("right").setBaseline("middle").setPosition(240, 320).addChildTo(this);
  tm.display.Label("NO MISS BONUS", 20).setAlign("right").setBaseline("middle").setPosition(240, 384).addChildTo(this);
  tm.display.Label("TOTAL SCORE").setAlign("right").setBaseline("middle").setPosition(240, 448).addChildTo(this);
  this.labels = [];
  for(var f = 0;f < this.values.length;f++) {
    this.labels[f] = tm.display.Label("" + Math.floor(this.values[f]) + (2 === f ? "%" : ""), 30).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 640 * (0.2 + 0.1 * f)).addChildTo(this)
  }
  this.hi = tm.display.Label(Math.floor(this.da.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.ah = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.ah.visible = s;
  this.Yd = a;
  for(var d = [], f = 0;12 > f;f++) {
    d[f] = [];
    for(var h = 0;16 > h;h++) {
      d[f][h] = {bh:0, fd:0, Wc:gls2.la.randf(-2, 2), sc:gls2.la.randf(1, 4)}
    }
  }
  this.dc = tm.app.Object2D();
  this.dc.draw = function(a) {
    a.save();
    for(var b = k, f = 0;f < d.length;f++) {
      for(var h = 0;h < d[f].length;h++) {
        var n = d[f][h];
        640 > 40 * h + n.fd && (a.drawImage(this.Yd.element, 40 * f, 40 * h, 40, 40, 40 * f + n.bh, 40 * h + n.fd, 40, 40), n.bh += n.Wc, n.fd += n.sc, n.sc += 0.3, b = s)
      }
    }
    this.wait = 60;
    b && this.dc.remove();
    a.restore()
  }.bind(this);
  this.dc.addChildTo(this);
  this.on("enter", function() {
    0 === this.da.tf && 0 === this.da.Rc && (0 === this.da.Mb ? gls2.core.xa("nomiss1") : 1 === this.da.Mb ? gls2.core.xa("nomiss2") : 2 === this.da.Mb ? gls2.core.xa("nomiss3") : 3 === this.da.Mb ? gls2.core.xa("nomiss4") : 4 === this.da.Mb && gls2.core.xa("nomiss5"))
  });
  this.on("exit", function() {
    gls2.hf()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.ua("star"), this.values[a] <= this.of[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.da.od(this.values[a] * this.yi[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.da.od(this.of[a] * this.yi[a]), this.values[a] -= this.of[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.hi.text = Math.floor(this.da.score)
    }else {
      if(this.ah.visible = k, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.ua("decision"), 5 == this.da.Mb + 1 ? b.replaceScene(gls2.Ui()) : (this.da.Di(this.da.Mb + 1), b.replaceScene(this.da))
      }
    }
    this.frame += 1
  }
}, wd:D()});
gls2.rh = tm.createClass({superClass:gls2.Scene, qa:0, vi:s, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = k;
  this.on("enter", function() {
    gls2.Lb("gameover")
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.qa && !this.vi) && this.vf();
  this.qa += 1
}, wd:function(b) {
  b.clearColor("black")
}, Ee:s, wait:s, dh:l, vf:function() {
  if(!this.wait) {
    this.vi = k;
    var b = ["save score", "tweet result", "back to title"], a = ["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"];
    this.Ee && (b.shift(), a.shift());
    T(this, "GAME OVER", b, this.xk, {defaultValue:this.Ee ? 1 : 0, menuDescriptions:a, showExit:s})
  }
}, xk:function(b) {
  this.Ee && (b += 1);
  0 === b ? this.Ee || (this.wait = k, this.app.$g(l, function(a, b, d) {
    this.wait = s;
    a ? this.Dk(a) : b ? (this.Ee = k, this.dh = d, this.Ek()) : this.vf()
  }.bind(this))) : 1 === b ? this.Wk() : this.app.replaceScene(gls2.TitleScene())
}, Ek:function() {
  T(this, "SUCCESS!", ["ok"], function() {
    this.vf()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:s})
}, Dk:function() {
  T(this, "ERROR!", ["ok"], function() {
    this.vf()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:s})
}, Wk:function() {
  var b = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({score:Math.floor(this.app.da.score), stage:5 > this.app.da.Mb ? "Stage" + (this.app.da.Mb + 1) : "ALL", type:"ABC"[this.app.da.fa.type], style:["S", "L", "EX"][this.app.da.fa.style], cont:this.app.da.Rc}), b = tm.social.Twitter.createURL({type:"tweet", text:b, hashtags:"tmshooter", url:this.dh ? window.location.origin + "/ranking/" + this.dh : window.location.origin});
  window.open(b, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
(function() {
  var b = "TM-Shooter;2D 'DANMAKU' Shooter on HTML5;;MUSIC;Underworld (select)  by  delf;Feel the universe (stage1)  by  delf;Herod (boss)  by  \u6dbc\u3005;Re-Birth (clear)  by  delf;Remenber (stage2)  by  Ryo;THE NEW CHALLENGER freeVer. (stage3)  by  delf;Aegis (stage4)  by  \u5cf6\u767d;Ancien Ocean (stage5)  by  delf;\u84bc\u3044\u6708 (ending)  by  delf;;SOUND;kouichi_axis (\u9b54\u738b\u9b42);on_jin (\u97f3\u4eba);;GAME ENGINE (tmlib.js);phi_jp;;PROGRAM AND GRAPHICS;minimo(stage3);daishi_hmr;;special respect to...;DODONPACHI series by CAVE;PRECURE series by TOEI;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!".split(";");
  gls2.Ui = tm.createClass({superClass:gls2.Scene, ma:l, fa:l, labels:l, Ci:s, speed:0, Yh:s, mi:l, init:function() {
    this.superInit();
    this.mi = tm.display.CanvasElement().addChildTo(this);
    this.ma = gls2.core.da.ma;
    this.ma.addChildTo(this);
    this.ma.direction = 0.5 * Math.PI;
    this.ma.speed = 1;
    var a = this.fa = gls2.core.da.fa;
    a.Dc = s;
    a.setPosition(240, 448);
    a.da = this.mi;
    [].concat(a.children).forEach(function(b) {
      b != a.Bc && b.remove()
    });
    a.addChildTo(this);
    var f = a.x;
    a.on("enterframe", function() {
      0.2 < a.x - f ? a.Xa += 0.3 : -0.2 > a.x - f ? a.Xa -= 0.3 : 0 < a.x - f ? a.Xa += 0.11 : 0 > a.x - f && (a.Xa -= 0.11);
      f = a.x
    });
    var d = function() {
      var b = gls2.la.randf(0.8, 1.2);
      a.tweener.clear().to({x:gls2.la.randf(48, 432), y:gls2.la.randf(192, 512), scaleX:b, scaleY:b}, 6E3, "easeInOutQuad").call(d)
    }.bind(this);
    d();
    gls2.core.da.Mb += 1;
    var h = this;
    this.labels = b.map(function(a, b) {
      return tm.display.Label(a, 16).setPosition(240, 960 + 64 * b).addChildTo(h).on("enterframe", function() {
        this.y -= h.speed;
        -192 > this.y && this.remove()
      })
    });
    tm.display.Label("dev7.jp", 24).setPosition(240, 960 + 64 * (b.length + 3)).addChildTo(this).on("enterframe", function() {
      320 < this.y && (this.y -= h.speed)
    });
    this.tweener.wait(2E3).call(function() {
      gls2.Lb("bgmEnding", k, k);
      this.Ci = k
    }.bind(this))
  }, pl:function() {
    0 === gls2.core.da.fa.type ? gls2.core.xa("allclear0") : 1 === gls2.core.da.fa.type ? gls2.core.xa("allclear1") : 2 === gls2.core.da.fa.type && gls2.core.xa("allclear2")
  }, ql:function() {
    this.ma.addChildTo(gls2.core.da)
  }, update:function(a) {
    a.keyboard.getKey("z") || a.keyboard.getKey("x") || a.keyboard.getKey("c") || this.Ci && gls2.gb && gls2.gb.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(a) {
      return!!a.parent
    }) ? this.speed = 8 : this.Lk() : this.speed = 0.5
  }, Lk:function() {
    this.Yh || (this.Yh = k, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 5E3).call(function() {
      gls2.Ke();
      this.app.replaceScene(gls2.rh())
    }.bind(this)), this.ma.tweener.clear().to({speed:9}, 2E3), this.fa.tweener.clear().wait(2E3).to({y:-192}, 2E3, "easeInQuad"))
  }, wd:D()})
})();
(function() {
  gls2.ga = tm.createClass({superClass:tm.display.CanvasElement, name:l, fa:l, da:l, Ka:l, ta:0, bd:0, score:0, Uc:s, erase:s, star:1, mk:s, Rb:k, Ta:s, frame:0, fb:s, Bf:l, direction:0, speed:0, ia:l, init:function(a, f, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Ta = s;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.Rb = k;
    this.da = a;
    this.fa = a.fa;
    this.score = 100;
    this.erase = s;
    this.Bj(d);
    f.setup(this);
    this.altitude = this.Uc ? 1 : 10;
    this.Bf = {x:0, y:0};
    this.fb = s
  }, Wd:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, nl:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Ta === s && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Ta = k, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Uc && (this.x += this.da.ma.Fa, this.y += this.da.ma.Ga);
    this.Ta && (this.frame += 1);
    this.Bf.x = this.x - a;
    this.Bf.y = this.y - b
  }, Sc:function(a) {
    if(!this.Ta) {
      return s
    }
    this.ta -= a;
    if(0 >= this.ta) {
      return a = gls2.la.randf(0, 5), 2 > a ? this.da.Bb("enemy destroy.") : 4 > a ? this.da.Bb(this.name + " destroy.") : this.da.Bb("ETR reaction gone."), this.erase && gls2.ha.erase(k, this.da.Ma, this instanceof gls2.Gd), this.dispatchEvent(tm.event.Event("destroy")), this.Ba(), "yukishiro" === this.name ? gls2.core.xa("mboss1") : "mishou" === this.name ? gls2.core.xa("mboss2") : "higashi" === this.name ? gls2.core.xa("mboss3") : "hishikawa" === this.name ? gls2.core.xa("mboss4") : "minamino" === 
      this.name ? gls2.core.xa("mboss5") : "misumi" === this.name ? gls2.core.xa("boss1") : "hyuga" === this.name ? gls2.core.xa("boss2") : "momozono" === this.name ? gls2.core.xa("boss3") : "aida" === this.name ? gls2.core.xa("boss4") : "hojo" === this.name && gls2.core.xa("boss5"), k
    }
    40 > this.ta && this.Na();
    return s
  }, Ba:function() {
    gls2.oa.gf(this.x, this.y, this.da, this.Bf);
    this.remove()
  }, Sb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Ak:function() {
    return this.Rb
  }, Na:D(), Bj:function(a) {
    this.name = a;
    a = gls2.ga.Ri[a];
    this.ta = this.bd = a[0];
    this.score = a[1];
    this.Uc = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, Ec:function() {
    this.remove();
    this.da.Zh.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.oa.gf(this.x + gls2.la.rand(-100, 100), this.y + gls2.la.rand(-40, 40), this.da, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.oa.te(this.x, this.y, this.da);
      this.remove()
    }.bind(this))
  }, $e:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.oa.gf(this.x + gls2.la.rand(-100, 100), this.y + gls2.la.rand(-40, 40), this.da, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.oa.te(this.x, this.y, this.da);
      this.remove()
    }.bind(this))
  }});
  gls2.ga.oe = function() {
    for(var a = [].concat(b), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var b = gls2.ga.pb = []
})();
gls2.Gd = tm.createClass({superClass:gls2.ga, mk:k, bd:0, xf:l, init:function(b, a, f) {
  this.xf = a;
  this.superInit(b, this.xf[0], f);
  this.bd = this.ta;
  this.addEventListener("added", function() {
    this.da.mc = this;
    this.da.Kk();
    this.tweener.wait(1E3).call(function() {
      this.da.re = s
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.da.mc = l;
    this.da.dk();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.da.Ij()
    }.bind(this));
    a.addChildTo(this.da.dc)
  })
}, Sc:function(b) {
  var a = this.ta;
  if(gls2.ga.prototype.Sc.call(this, b)) {
    return this.da.re = k, this.da.fa.le = s, gls2.hf(), k
  }
  this.ta <= 0.55 * this.bd && 0.55 * this.bd < a ? (gls2.ca.Qk(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.oa.kb(this.x, this.y, this.da), gls2.ha.erase(k, this.da.Ma), this.xf[1].setup(this)) : this.ta <= 0.1 * this.bd && 0.1 * this.bd < a && (gls2.ca.Qk(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.oa.kb(this.x, this.y, this.da), gls2.ha.erase(k, this.da.Ma), this.xf[2].setup(this), gls2.ua("voJacms"))
}});
(function() {
  gls2.ga.Ri = {kujo:[2, 300, s, s, 1, {radius:24}], kiryu:[3, 400, s, s, 1, {radius:24}], natsuki:[5, 900, k, s, 1, {radius:24}], kise:[50, 15E3, k, s, 1, {radius:24}], yamabuki:[100, 15E3, k, s, 1, {width:140, height:70}], hanasaki:[150, 2E5, k, k, 10, {radius:40}], myodoin:[50, 15E3, k, s, 1, {radius:40}], kenzaki:[200, 3E5, k, k, 10, {width:100, height:40}], minazuki:[300, 3E5, k, k, 10, {width:100, height:40}], tsukikage:[8, 1E3, s, s, 5, {width:100, height:20}], kasugano:[6, 1E3, s, s, 1, {radius:24}], 
  kurokawa:[35, 5E3, s, s, 5, {width:100, height:20}], mimino:[35, 5E3, s, s, 5, {width:100, height:20}], shirabe:[35, 5E3, s, s, 5, {width:100, height:20}], akimoto:[250, 3E5, s, k, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, s, k, 20, {width:180, heightBottom:40, heightTop:120}], aono:[300, 3E5, s, k, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, s, k, 20, {width:240, height:80}], misumi:[4E3, 2E6, s, k, 0, {width:240, height:80}], mishou:[1E3, 1E6, 
  s, k, 20, {width:300, height:80}], higashi:[1E3, 12E5, s, k, 20, {width:256, height:128}], momozono:[6E3, 35E5, s, k, 0, {width:256, height:128}], hyuga:[6E3, 3E6, s, k, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, s, k, 20, {radius:130}], aida:[8E3, 4E6, s, k, 0, {width:370, heightBottom:5, heightTop:60}], minamino:[750, 5E6, k, k, 30, {width:25, heightTop:375, heightBottom:-325}], rery:[450, 2E3, k, s, 5, {radius:24}], fary:[400, 2E3, k, s, 5, {radius:24}], sory:[350, 2E3, k, s, 5, {radius:24}], 
  lary:[300, 2E3, k, k, 5, {radius:24}], shiry:[250, 2E3, k, k, 5, {radius:24}], dodory:[120, 2E3, k, s, 5, {radius:24}], erika:[30, 500, s, s, 1, {width:24, height:48}], hino:[20, 500, s, s, 1, {width:24, height:48}], hoshizora_y:[100, 2E4, s, k, 30, {width:128, height:64}], hoshizora_t:[100, 2E4, s, k, 30, {width:128, height:64}], yotsuba:[300, 1E5, s, k, 30, {width:64, height:64}], yotsubaLeaf:[100, 3E4, s, s, 10, {width:64, height:64}], midorikawa:[5, 1E3, s, s, 1, {width:64, height:64}], aoki:[5, 
  1200, s, s, 1, {width:64, height:64}], madoka:[250, 15E3, s, k, 5, {width:256, height:64}]};
  gls2.ga.ja = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kujo");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ga.Ca = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kiryu");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ga.na = tm.createClass({superClass:gls2.ga, pg:l, qg:l, init:function(a, f) {
    this.superInit(a, f, "natsuki");
    this.pg = b("tex_tank1", 64, 64);
    this.qg = b("tex_tank1", 64, 64);
    this.rd = this.rd || 0;
    this.Cc = this.Cc || 0
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    for(a = this.rd;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.Cc;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.pg.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.qg.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.pg.draw(a);
    this.qg.draw(a)
  }, Ba:function() {
    gls2.oa.Qj(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.oh = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "yamabuki");
    this.ea = b("tex2", 256, 128).setFrameIndex(7)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.Yb = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "tsukikage");
    this.ea = b("tex1", 64, 64).setFrameIndex(23)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.hb = tm.createClass({superClass:gls2.ga, ea:l, ug:l, init:function(a, f) {
    this.superInit(a, f, "kasugano");
    this.ea = b("tex5", 64, 64).setFrameIndex(1);
    this.Ac = gls2.Ya(80, 1, 0.8);
    this.ug = tm.geom.Vector2()
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ta && this.Ac.clone().setPosition(this.x, this.y).addChildTo(this.da);
    this.rotation = tm.geom.Vector2.sub(this.position, this.ug).toAngle() * gls2.la.RAD_TO_DEG - 90;
    this.ug.set(this.x, this.y)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.Xc = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kurokawa");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.vc = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "mimino");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.sb = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "shirabe");
    this.ea = b("tex5", 128, 128).setFrameIndex(4)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.Zb = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "akimoto");
    this.ea = b("tex1", 256, 128).setFrameIndex(1)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    this.Ec()
  }});
  gls2.ga.de = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "aono");
    this.ea = b("tex1", 256, 128);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 128;
    this.setScale(1.2);
    this.Ob = gls2.Ya(70, 1, 0.97)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Ob.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.da), this.Ob.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.da))
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    this.Ec()
  }});
  gls2.ga.Ld = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "yumehara");
    this.ea = b("tex1", 256, 256);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 256;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 256
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    this.Ec()
  }});
  gls2.ga.Qa = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kise");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.Te = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "hanasaki");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Na:D(), Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Mf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "myodoin");
    this.ea = b("tex5", 64, 128).setFrameIndex(0)
  }, Na:D(), Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.tc = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kenzaki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.Gf = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "minazuki");
    this.ea = b("tex5", 128, 256);
    this.ea.setFrameIndex(1);
    this.setScale(1.2)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ga.La = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hino");
    this.ea = b("tex4", 64, 32).setFrameIndex(0)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.ra = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "midorikawa");
    this.ea = b("tex4", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Cb = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "aoki");
    this.ea = b("tex4", 64, 64).setFrameIndex(1)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Wd:function() {
    240 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.Rk = this.y + 192;
    this.fd = this.y
  }});
  gls2.ga.je = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "madoka");
    this.ea = b("tex4", 256, 128).setFrameIndex(3)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Ad = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hoshizora_y");
    this.ea = b("tex4", 256, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    if(this.Ta === s && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Ta = k, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.te(this.x, this.y, this.da);
    this.Ec()
  }, Wd:function() {
    480 < this.x && (this.velocityX *= -1, this.ea.scaleX = -1)
  }, Sb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ga.zd = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hoshizora_t");
    this.ea = b("tex4", 64, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    if(this.Ta === s && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Ta = k, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.te(this.x, this.y, this.da);
    this.Ec()
  }, Wd:function() {
    240 < this.x && (this.velocityX *= -1)
  }, Sb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ga.Cf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "yotsuba");
    this.ea = b("tex4", 128, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.te(this.x, this.y, this.da);
    this.Ec();
    this.da.yd || gls2.Vi(this.x, this.y, this.fa).addChildTo(this.parent);
    for(var a = 0;4 > a;a++) {
      this.Vc[a] && this.Vc[a].Ba()
    }
    delete this.Vc;
    this.remove()
  }, Wd:function() {
    this.Vc = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Vc[a] = this.Ka.Ua({aa:gls2.ga.Df, ba:gls2.ca.Df, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Vc[a].dir = b;
      this.Vc[a].Ag = this;
      this.Vc[a].pk = a;
      this.Vc[a].distance = 64
    }
    gls2.ga.prototype.Wd.call(this);
    return this
  }});
  gls2.ga.Df = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "yotsubaLeaf");
    this.ea = b("yotsubaLeaf", 64, 64).setFrameIndex(0)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.Ag.Vc[this.pk] = l;
    this.remove()
  }});
  gls2.ga.ce = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "erika");
    this.ea = b("tex3", 64, 128);
    this.ea.setFrameIndex(8)
  }, Na:D(), draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    gls2.Pi(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ga.Kf = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "yukishiro");
    this.ea = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, Ba:function() {
    this.Ec()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Yf = tm.createClass({superClass:gls2.Gd, ea:l, init:function(a, f) {
    this.superInit(a, f, "misumi");
    this.ea = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    this.$e()
  }});
  gls2.ga.Uf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "mishou");
    this.ea = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Ob = gls2.Ya(80, 1, 0.9);
    this.Ac = gls2.Ya(256, 1, 0.9)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Ob.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.da), this.Ob.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.da), this.Ac.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.da))
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, Ba:function() {
    this.Ec()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.ej = tm.createClass({superClass:gls2.Gd, init:function(a, f) {
    this.superInit(a, f, "hyuga");
    this.ea = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, Ba:function() {
    this.$e()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.ig = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "higashi");
    this.ea = b("tex4", 256, 128).setFrameIndex(2);
    this.blendMode = "lighter";
    this.setScale(1.5)
  }, Na:D(), Ba:function() {
    this.Ec()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.aj = tm.createClass({superClass:gls2.Gd, init:function(a, f) {
    this.superInit(a, f, "momozono");
    this.ea = b("tex4", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, Na:D(), Ba:function() {
    this.$e()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.eg = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hishikawa");
    this.ea = b("tex2", 256, 256).setFrameIndex(2);
    this.ea.setScale(2);
    this.Ob = gls2.Ya(60, 1, 0.95);
    this.Ac = gls2.Ya(500, 1, 0.8)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ta && (this.Ob.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Ob.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Ac.clone().setPosition(this.x, this.y).addChildTo(this.da))
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, Ba:function() {
    this.Ec()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.bj = tm.createClass({superClass:gls2.Gd, init:function(a, f) {
    this.superInit(a, f, "aida");
    this.ea = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Ob = gls2.Ya(60, 1, 0.95);
    this.Ac = gls2.Ya(500, 1, 0.8)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ta && (this.Ob.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Ob.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Ob.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Ob.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Ac.clone().setPosition(this.x, this.y).addChildTo(this.da))
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, Ba:function() {
    this.$e()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.$i = tm.createClass({superClass:gls2.ga, ne:l, Ph:[{x:-50, y:-355}, {x:50, y:-355}, {x:-60, y:-60}, {x:60, y:-60}, {x:-60, y:-290}, {x:60, y:-290}, {x:-40, y:-220}, {x:40, y:-220}, {x:-40, y:90}, {x:40, y:90}, {x:-65, y:-140}, {x:65, y:-140}, {x:-80, y:-190}, {x:80, y:-190}, {x:0, y:-280}, {x:0, y:-140}, {x:-100, y:120}, {x:100, y:120}, {x:-50, y:140}, {x:50, y:140}], init:function(a, f) {
    this.superInit(a, f, "minamino");
    this.altitude = 10;
    this.fb = k;
    this.ea = b("tex5", 256, 512).setFrameIndex(1);
    this.setScale(1.8);
    this.ne = []
  }, rl:function() {
    Array.prototype.push.apply(this.ne, [this.Ka.Ua({hard:gls2.ga.Oc, soft:gls2.ca.Oc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Oc, soft:gls2.ca.Oc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Oc, soft:gls2.ca.Oc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Oc, soft:gls2.ca.Oc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Nb, soft:gls2.ca.Nb(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Nb, soft:gls2.ca.Nb(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Nb, soft:gls2.ca.Nb(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Nb, soft:gls2.ca.Nb(), 
    x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Nb, soft:gls2.ca.Nb(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Nb, soft:gls2.ca.Nb(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Pc, soft:gls2.ca.Pc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Pc, soft:gls2.ca.Pc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Pc, soft:gls2.ca.Pc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Pc, soft:gls2.ca.Pc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Qf, soft:gls2.ca.Qf(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.jg, soft:gls2.ca.jg(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Lc, 
    soft:gls2.ca.Lc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Lc, soft:gls2.ca.Lc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Lc, soft:gls2.ca.Lc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ga.Lc, soft:gls2.ca.Lc(), x:0, y:0})])
  }, update:function() {
    this.ne.forEach(function(a, b) {
      a.setPosition(this.x + this.Ph[b].x, this.y + this.Ph[b].y)
    }.bind(this))
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove();
    this.ne.forEach(function(a) {
      a.parent && a.remove()
    }.bind(this))
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Kd = tm.createClass({superClass:gls2.ga, ea:l, Ei:0, init:function(a, f, d, h, m) {
    this.superInit(a, f, d);
    this.ea = b(h, 64, 64);
    this.Ei = m
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    for(var b = tm.geom.Vector2.sub(this.da.fa.position, this.position).toAngle();0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.ea.setFrameIndex(16 * this.Ei + Math.floor(16 * (b / (2 * Math.PI))))
  }, Na:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.bb() : 5 === a.app.frame % 30 && this.ea.ab()
    })
  }, Ba:function() {
    gls2.oa.kb(this.x, this.y, this.da);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Oc = tm.createClass({superClass:gls2.ga.Kd, init:function(a, b) {
    this.superInit(a, b, "rery", "kanade-cannon", 0);
    this.setScale(1.6)
  }});
  gls2.ga.Nb = tm.createClass({superClass:gls2.ga.Kd, init:function(a, b) {
    this.superInit(a, b, "rery", "kanade-cannon", 1)
  }});
  gls2.ga.Pc = tm.createClass({superClass:gls2.ga.Kd, init:function(a, b) {
    this.superInit(a, b, "sory", "yotsubaLeaf", 0)
  }});
  gls2.ga.Qf = tm.createClass({superClass:gls2.ga.Kd, init:function(a, b) {
    this.superInit(a, b, "lary", "yotsubaLeaf", 0);
    this.setScale(1.2)
  }});
  gls2.ga.jg = tm.createClass({superClass:gls2.ga.Kd, init:function(a, b) {
    this.superInit(a, b, "shiry", "kanade-cannon", 1);
    this.setScale(1.4)
  }});
  gls2.ga.Lc = tm.createClass({superClass:gls2.ga.Kd, init:function(a, b) {
    this.superInit(a, b, "dodory", "tex_tank1", 1);
    this.setScale(1.2)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, ih:l, init:function(a, b, d) {
    this.superInit(a, b, d);
    "string" === typeof a && (this.ih = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, bb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, d = this.srcRect.width, h = this.srcRect.height;
    this.image = this.ih + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = d;
    this.srcRect.height = h
  }, ab:function() {
    var a = this.srcRect.x, b = this.srcRect.y, d = this.srcRect.width, h = this.srcRect.height;
    this.image = this.ih;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = d;
    this.srcRect.height = h
  }})
})();
(function() {
  gls2.ca = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.ca.Xg(this)
    })
  }});
  gls2.ca.va = function(a, b) {
    if(gls2.ha[b] === i) {
      console.warn("Danmaku[" + b + "] is undefined!")
    }else {
      var f = gls2.ha[b].df();
      a.on("enterframe", f);
      a.on("completeattack", function() {
        f.stop = k
      })
    }
  };
  gls2.ca.Xg = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].qf && (a[b].stop = k)
      }
    }
  };
  gls2.ca.Gk = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].qf && (a[b].stop = s)
      }
    }
  };
  gls2.ca.ja = tm.createClass({superClass:gls2.ca, pattern:l, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.Sk = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    var b = this.pattern, f = this.Sk;
    a.on("launch", function() {
      var a = gls2.Aa.randf(640 * (f - 0.1), 640 * (f + 0.1));
      this.tweener.clear().wait(gls2.Aa.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.ca.va(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.ca.Nc = gls2.ca.ja("basic0-0", 0.2);
  gls2.ca.vb = gls2.ca.ja("basic0-0", 0.4);
  gls2.ca.Jd = gls2.ca.ja("basic0-0", 0.6);
  gls2.ca.ub = gls2.ca.ja("basic1-2", 0.2);
  gls2.ca.Mc = gls2.ca.ja("basic1-2", 0.4);
  gls2.ca.Id = gls2.ca.ja("basic1-2", 0.6);
  gls2.ca.Ca = tm.createClass({superClass:gls2.ca, Kb:l, init:function(a, b) {
    this.superInit();
    this.Kb = a;
    this.delay = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Kb = this.Kb;
    a.tweener.wait(this.delay === i ? gls2.la.rand(0, 1E3) : this.delay).call(function() {
      this.speed = 6;
      gls2.ca.va(this, this.Kb);
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Ta && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.la.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.Sb() && this.Ta && this.remove();
        if(22500 > gls2.Tc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Rb = s
        }
      })
    }.bind(a))
  }});
  gls2.ca.wb = gls2.ca.Ca("basic1-0");
  gls2.ca.Ha = function(a) {
    return gls2.ca.Ca("basic1-3", a * gls2.la.randf(1, 2))
  };
  var b = tm.createClass({superClass:gls2.ca, init:function(a, b, f) {
    this.superInit();
    this.lk = a;
    this.kk = b;
    this.Od = f
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.speed = this.lk;
    a.rd = this.kk;
    this.Od && (a.Od = [].concat(this.Od));
    a.Cc = 0;
    a.on("enter", function() {
      gls2.ca.va(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.rd) * this.speed;
      this.y += Math.sin(this.rd) * this.speed;
      this.Ta && !this.Sb() && this.remove();
      for(this.Cc = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);0 > this.Cc;) {
        this.Cc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.Cc;) {
        this.Cc -= 2 * Math.PI
      }
      this.Rb = this.y < this.fa.y && 4E4 < gls2.Tc(this, this.fa);
      if(this.Od) {
        for(var a = 0;a < this.Od.length;a++) {
          var b = this.Od[a];
          b.frame === this.frame && this.tweener.to({rd:b.dir !== i ? b.dir : this.rd, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.ca.xc = b(1, 0.25 * Math.PI);
  gls2.ca.$k = b(1, -1.75 * Math.PI);
  gls2.ca.fe = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.ca.wa = b(1.6, 0.5 * Math.PI);
  gls2.ca.yc = b(1.6, -0.5 * Math.PI);
  gls2.ca.Ni = tm.createClass({superClass:gls2.ca, Oa:l, init:function(a) {
    this.superInit();
    this.Oa = a
  }, setup:function(a) {
    gls2.ca.va(a, this.Oa);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.ca.ph = gls2.ca.Ni("bukky-4-0");
  b = tm.createClass({superClass:gls2.ca, Oa:l, Sh:s, init:function(a, b) {
    this.superInit();
    this.Oa = a;
    this.Sh = !!b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Oa = this.Oa;
    a.on("enter", function() {
      gls2.ca.va(this, this.Oa)
    });
    a.on("enterframe", function() {
      this.Ta && !this.Sb() && this.remove()
    });
    if(!this.Sh) {
      a.on("enterframe", function() {
        this.Rb = this.y < this.fa.y && 4E4 < gls2.Tc(this, this.fa)
      })
    }
  }});
  gls2.ca.Wb = b("basic3-0", s);
  gls2.ca.Xb = b("basic3-1", s);
  gls2.ca.uc = b("cannon2-0", k);
  gls2.ca.Ff = b("cannon2-3", k);
  gls2.ca.Ne = b("cannon3-0", k);
  gls2.ca.Hf = b("cannon5-0", k);
  var a = tm.createClass({superClass:gls2.ca, velocityY:0, Oa:l, delay:0, init:function(a, b, f) {
    this.superInit();
    this.velocityY = a;
    this.Oa = b;
    this.delay = f || 0
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ia = [this.Oa];
    a.zi = s;
    a.tweener.clear().wait(this.delay).moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.ca.va(this, this.ia[0]);
      this.zi = k
    }.bind(a));
    a.on("enterframe", function() {
      this.zi && (this.y += this.velocityY, 384 < this.y && gls2.ca.Xg(this), this.Ta && !this.Sb() && this.remove(), this.Rb = this.y < this.fa.y)
    })
  }});
  gls2.ca.ld = a(0.5, "kurokawa-1");
  gls2.ca.cj = a(0.5, "kurokawa-4");
  gls2.ca.wc = function(b) {
    return a(0.5, "milk-5", b)
  };
  gls2.ca.tb = tm.createClass({superClass:gls2.ca, Hi:0, Ji:0, Ii:0, Ki:0, init:function(a, b, f, q) {
    this.superInit();
    this.Hi = a;
    this.Ji = b;
    this.Ii = f;
    this.Ki = q
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.on("enterframe", function() {
      this.rotation = tm.geom.Vector2.sub(this.da.fa.position, this.position).toAngle() * gls2.la.RAD_TO_DEG - 90
    });
    var b = this;
    a.tweener.clear().to({x:b.Hi, y:b.Ji}, 1400, "easeInOutQuad").call(function() {
      gls2.ca.va(this, "ako-5")
    }.bind(a));
    a.one("completeattack", function() {
      this.tweener.clear().to({x:b.Ii, y:b.Ki}, 900, "easeInOutQuad").call(function() {
        gls2.ca.va(this, "ako-5")
      }.bind(this));
      this.one("completeattack", function() {
        this.tweener.clear().to({y:832}, 1900, "easeInQuad")
      })
    })
  }});
  gls2.ca.nd = tm.createClass({superClass:gls2.ca, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.ca.va(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.ca.ge = tm.createClass({superClass:gls2.ca, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.ca.va(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.ca.hb = tm.createClass({superClass:gls2.ca, qi:0, direction:1, delay:0, init:function(a, b, f) {
    this.superInit();
    this.qi = a;
    this.direction = b;
    this.delay = f
  }, setup:function(a) {
    function b(a) {
      return f ? a : 1 - a
    }
    gls2.ca.prototype.setup.call(this, a);
    tm.app.Tweener(a).wait(this.delay).call(function() {
      gls2.ca.va(this, "basic1-3")
    }.bind(a));
    var f = 1 == this.direction;
    switch(this.qi) {
      case 0:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * b(0.8)}, 1600, "easeOutQuart");
        tm.app.Tweener(a).wait(this.delay).to({y:832}, 2E3, "easeInQuad");
        break;
      case 1:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * b(0.2)}, 1040, "easeInOutQuad").wait(700).to({x:480 * b(0.4)}, 800, "easeInOutQuad");
        tm.app.Tweener(a).wait(this.delay).to({y:192}, 1840, "easeInOutQuad").to({y:832}, 1840, "easeInQuad");
        break;
      case 2:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * b(0.2)}, 1040, "easeInOutQuad").wait(560).to({x:480 * b(0.4)}, 1360, "easeInOutQuad").to({x:480 * b(1.4)}, 1600, "easeInOutQuad");
        tm.app.Tweener(a).wait(this.delay).to({y:192}, 1840, "easeInOutQuad").to({y:512}, 1760, "easeInOutQuad");
        break;
      case 3:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * b(0.2)}, 1040, "easeInOutQuad").wait(560).to({x:480 * b(0.4)}, 1360, "easeInOutQuad").to({x:480 * b(1.4)}, 1600, "easeInOutQuad"), tm.app.Tweener(a).wait(this.delay).to({y:448}, 1840, "easeInOutQuad").to({y:128}, 1760, "easeInOutQuad")
    }
  }});
  b = tm.createClass({superClass:gls2.ca, velocityY:0, Oa:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Oa = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ia = [this.Oa];
    a.tweener.clear().call(function() {
      gls2.ca.va(this, this.ia[0]);
      gls2.oa.$j(this.x, this.y, this.da)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Ta && !this.Sb() && this.remove();
      this.Rb = this.y < this.fa.y
    })
  }});
  gls2.ca.La = b(0.5, "akane");
  gls2.ca.ra = tm.createClass({superClass:gls2.ca, Kb:l, init:function(a, b) {
    this.superInit();
    this.Kb = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Kb = this.Kb;
    a.speed = this.speed;
    a.tweener.wait(gls2.Aa.rand(0, 1E3)).call(function() {
      gls2.ca.va(this, this.Kb);
      var a = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Ta && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.la.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * a - 90;
        !this.Sb() && this.Ta && this.remove();
        if(22500 > gls2.Tc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Rb = s
        }
      })
    }.bind(a))
  }});
  gls2.ca.yb = gls2.ca.ra(3, 1);
  gls2.ca.zb = gls2.ca.ra(6, 1);
  gls2.ca.Ab = gls2.ca.ra(12, 1);
  gls2.ca.Cb = tm.createClass({superClass:gls2.ca, Kb:l, init:function(a) {
    this.superInit();
    this.Kb = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Kb = this.Kb;
    a.speed = this.speed;
    a.tweener.wait(gls2.Aa.rand(0, 1E3)).call(function() {
      gls2.ca.va(this, this.Kb);
      this.qc = 0;
      this.on("enterframe", function() {
        this.y < this.Rk && (this.fd += 1);
        this.x += this.speed;
        this.y = this.fd + 8 * Math.sin(this.qc);
        this.qc += 0.06
      })
    }.bind(a))
  }});
  gls2.ca.fc = gls2.ca.Cb(1);
  gls2.ca.wl = gls2.ca.Cb(2);
  gls2.ca.je = a(0.5, "aguri");
  gls2.ca.Ad = tm.createClass({superClass:gls2.ca, velocityX:0, Oa:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Oa = "miyuki_y"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ia = [this.Oa];
    a.tweener.clear().call(function() {
      gls2.ca.va(this, this.ia[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Ta && !this.Sb() && this.remove();
      this.Rb = this.y < this.fa.y
    })
  }});
  gls2.ca.Ad = gls2.ca.Ad(1);
  gls2.ca.zd = tm.createClass({superClass:gls2.ca, velocityX:0, Oa:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Oa = "miyuki_t"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ia = [this.Oa];
    a.wi = 0;
    a.tweener.clear().call(function() {
      gls2.ca.va(this, this.ia[0])
    }.bind(a));
    a.on("enterframe", function() {
      0 == this.wi ? (this.y += 0.5, 256 < this.y && this.wi++) : this.x += this.velocityX;
      this.Ta && !this.Sb() && this.remove()
    })
  }});
  gls2.ca.zd = gls2.ca.zd(0.5);
  b = tm.createClass({superClass:gls2.ca, velocityX:0, Oa:l, init:function() {
    this.superInit();
    this.Oa = "alice"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityY = 0.3;
    a.ia = [this.Oa];
    a.tweener.clear().call(function() {
      gls2.ca.va(this, this.ia[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Ta && !this.Sb() && this.remove();
      this.Rb = this.y < this.fa.y
    })
  }});
  gls2.ca.Cf = b();
  b = tm.createClass({superClass:gls2.ca, Oa:l, init:function() {
    this.superInit();
    this.Oa = "aliceLeaf"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [this.Oa];
    a.tweener.clear().call(function() {
      gls2.ca.va(this, this.ia[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.Ag.x, b = this.Ag.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      a = ~~(180 * Math.atan2(b - this.y, a - this.x) / 3.14159);
      this.ea.setFrameIndex(~~(22.5 * ((0 > a ? a + 360 : a) / 360)) % 16, 64, 64);
      this.Ta && !this.Sb() && this.remove();
      this.Rb = this.y < this.fa.y;
      this.qa++
    })
  }});
  gls2.ca.Df = b();
  gls2.ca.uh = a(0.3, "komachi-1");
  gls2.ca.vh = a(0.5, "komachi-2");
  gls2.ca.wh = a(0.5, "komachi-3");
  gls2.ca.Pf = a(0.5, "komachi-4");
  gls2.ca.Of = a(0.5, "komachi-5");
  gls2.ca.de = tm.createClass({superClass:gls2.ca, Bi:0, init:function(a) {
    this.superInit();
    this.Bi = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    tm.app.Tweener(a).to({x:480 * this.Bi}, 2800, "easeOutQuad").call(function() {
      gls2.ca.va(this, "mktn-5")
    }.bind(a));
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.ca.cg = a(0.1, "nozomi-4");
  gls2.ca.dg = a(0.3, "nozomi-5");
  gls2.ca.ce = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.va(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Rb = this.Ta
    })
  }});
  gls2.ca.ce = gls2.ca.ce();
  b = tm.createClass({superClass:gls2.ca, ia:l, sf:0, init:function(a, b) {
    this.superInit();
    this.ia = a;
    this.sf = b || 1500
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.sf = this.sf;
    a.$a = s;
    a.eb = s;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.$a = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.$a === s || 0 >= this.ta) && this.sf < this.frame && this.eb === s) {
        this.eb = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ta) && !this.eb) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.Kf = b(["honoka-1"]);
  gls2.ca.Yf = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.$a = s;
    a.eb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta) && !this.eb) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.dj = gls2.ca.Yf();
  gls2.ca.Zf = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta)) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.Zf = gls2.ca.Zf();
  gls2.ca.$f = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.ta || gls2.ca.va(this, "nagisa-3-1")
    })
  }});
  gls2.ca.$f = gls2.ca.$f();
  gls2.ca.Uf = b(["mai-1", "mai-2"]);
  gls2.ca.fg = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.$a = s;
    a.eb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta) && !this.eb) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.fg = gls2.ca.fg();
  gls2.ca.gg = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta)) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.gg = gls2.ca.gg();
  gls2.ca.hg = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta)) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.hg = gls2.ca.hg();
  var f = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = "setsuna-1"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.$a = s;
    a.eb = s;
    a.hh = s;
    a.Tk = 0;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.$a = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        this.hh = s;
        this.alpha = 1;
        this.fb = s;
        if(50 < gls2.Aa.rand(0, 100) && 300 < this.frame || this.x - 64 < this.fa.x && this.fa.x < this.x + 64) {
          gls2.oa.Eg(this.x, this.y, this.da, 8);
          this.hh = k;
          this.alpha = 0.3;
          this.fb = k;
          this.Tk = this.frame;
          var b = gls2.Aa.rand(48, 432), d = gls2.Aa.rand(128, 192);
          this.tweener.move(b, d, 250, "easeInOutQuad").call(a)
        }else {
          b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144), this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 2E3, "easeInOutQuad").call(a)
        }
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.$a === s || 0 >= this.ta)) {
        if(1500 < this.frame && this.eb === s && (this.eb = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))), this.hh && 0 == this.frame % 5) {
          var a = tm.display.Sprite("tex4", 256, 128).setFrameIndex(2);
          a.alpha = 0.3;
          a.x = this.x;
          a.y = this.y;
          a.setScale(1.5);
          a.update = function() {
            this.alpha -= 0.01;
            0 > this.alpha && this.remove()
          };
          this.da.Dg.addChild(a)
        }
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ta) && !this.eb) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.ig = f();
  gls2.ca.Rf = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.$a = s;
    a.eb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta) && !this.eb) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.Rf = gls2.ca.Rf();
  gls2.ca.Sf = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.$a = s;
    a.eb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta) && !this.eb) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.Sf = gls2.ca.Sf();
  gls2.ca.Tf = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.$a = s;
    a.eb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta) && !this.eb) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.Tf = gls2.ca.Tf();
  gls2.ca.eg = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.ca.Vf = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.$a = s;
    a.eb = s;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.$a = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.Aa.randf(-48, 48);
        this.tweener.move(Math.clamp(this.fa.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta) && !this.eb) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.Vf = gls2.ca.Vf();
  gls2.ca.Wf = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.4 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta)) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.Wf = gls2.ca.Wf();
  gls2.ca.Xf = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit();
    this.ia = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ta)) {
        var a = this.ia.shift();
        gls2.ca.va(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.ca.Xf = gls2.ca.Xf();
  gls2.ca.Nf = tm.createClass({superClass:gls2.ca, ia:l, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.on("enemyconsumed", function() {
      this.Ka.$.be = s
    });
    a.Uk = tm.app.Tweener(a).to({x:432}, 3E4, "easeInOutQuad").to({x:48}, 3E4, "easeInOutQuad").call(function() {
      this.Ka.$.be = k
    }.bind(a)).setLoop(k);
    a.Vk = tm.app.Tweener(a).to({y:448}, 15E4, "easeInOutQuad").to({y:384}, 9E4, "easeInOutQuad").setLoop(k);
    a.tweener.wait(22E4).call(function() {
      this.Ka.$.be = s;
      this.Uk.clear();
      this.Vk.clear();
      this.tweener.clear().to({x:960}, 1E4, "easeInQuad")
    }.bind(a));
    a.$a = s;
    a.on("enterframe", function() {
      this.fb = 3 < this.ne.filter(function(a) {
        return!!a.parent
      }).length;
      this.Ta = !this.fb;
      !this.$a && !this.fb && (gls2.ca.va(this, "kanade"), this.$a = k)
    })
  }});
  gls2.ca.Nf = gls2.ca.Nf();
  gls2.ca.Oc = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    gls2.ca.va(a, "rery");
    a.on("enterframe", function() {
      this.position.y > this.da.fa.y ? gls2.ca.Xg(this) : gls2.ca.Gk(this)
    })
  }});
  gls2.ca.Nb = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    gls2.ca.va(a, "fary")
  }});
  gls2.ca.Pc = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    gls2.ca.va(a, "sory")
  }});
  gls2.ca.Qf = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    gls2.ca.va(a, "lary")
  }});
  gls2.ca.jg = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    gls2.ca.va(a, "shiry")
  }});
  gls2.ca.Lc = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    gls2.ca.va(a, "dodory")
  }})
})();
(function() {
  var b = gls2.ga, a = gls2.ca;
  gls2.qh = {"heri1-left":[{aa:b.Ca, ba:a.Nc, x:48, y:-100}, {aa:b.Ca, ba:a.vb, x:96, y:-100}, {aa:b.Ca, ba:a.Nc, x:144, y:-100}, {aa:b.Ca, ba:a.vb, x:192, y:-100}, {aa:b.Ca, ba:a.Nc, x:240, y:-100}], "heri1-center":[{aa:b.Ca, ba:a.Nc, x:144, y:-100}, {aa:b.Ca, ba:a.vb, x:192, y:-100}, {aa:b.Ca, ba:a.Nc, x:240, y:-100}, {aa:b.Ca, ba:a.vb, x:288, y:-100}, {aa:b.Ca, ba:a.Nc, x:336, y:-100}], "heri1-right":[{aa:b.Ca, ba:a.Nc, x:240, y:-100}, {aa:b.Ca, ba:a.vb, x:288, y:-100}, {aa:b.Ca, ba:a.Nc, x:336, 
  y:-100}, {aa:b.Ca, ba:a.vb, x:384, y:-100}, {aa:b.Ca, ba:a.Nc, x:432, y:-100}], "heri1-left2":[{aa:b.Ca, ba:a.vb, x:48, y:-100}, {aa:b.Ca, ba:a.Jd, x:96, y:-100}, {aa:b.Ca, ba:a.vb, x:144, y:-100}, {aa:b.Ca, ba:a.Jd, x:192, y:-100}, {aa:b.Ca, ba:a.vb, x:240, y:-100}], "heri1-center2":[{aa:b.Ca, ba:a.vb, x:144, y:-100}, {aa:b.Ca, ba:a.Jd, x:192, y:-100}, {aa:b.Ca, ba:a.vb, x:240, y:-100}, {aa:b.Ca, ba:a.Jd, x:288, y:-100}, {aa:b.Ca, ba:a.vb, x:336, y:-100}], "heri1-right2":[{aa:b.Ca, ba:a.vb, x:240, 
  y:-100}, {aa:b.Ca, ba:a.Jd, x:288, y:-100}, {aa:b.Ca, ba:a.vb, x:336, y:-100}, {aa:b.Ca, ba:a.Jd, x:384, y:-100}, {aa:b.Ca, ba:a.vb, x:432, y:-100}], "heri2-left":[{aa:b.ja, ba:a.wb, x:48, y:-100}, {aa:b.ja, ba:a.wb, x:96, y:-100}, {aa:b.ja, ba:a.wb, x:144, y:-100}, {aa:b.ja, ba:a.wb, x:192, y:-100}, {aa:b.ja, ba:a.wb, x:240, y:-100}], "heri2-center":[{aa:b.ja, ba:a.wb, x:144, y:-100}, {aa:b.ja, ba:a.wb, x:192, y:-100}, {aa:b.ja, ba:a.wb, x:240, y:-100}, {aa:b.ja, ba:a.wb, x:288, y:-100}, {aa:b.ja, 
  ba:a.wb, x:336, y:-100}], "heri2-right":[{aa:b.ja, ba:a.wb, x:240, y:-100}, {aa:b.ja, ba:a.wb, x:288, y:-100}, {aa:b.ja, ba:a.wb, x:336, y:-100}, {aa:b.ja, ba:a.wb, x:384, y:-100}, {aa:b.ja, ba:a.wb, x:432, y:-100}], "heri2-5-left":[{aa:b.ja, ba:a.Ha(0), x:48, y:-100}, {aa:b.ja, ba:a.Ha(0), x:96, y:-100}, {aa:b.ja, ba:a.Ha(0), x:144, y:-100}, {aa:b.ja, ba:a.Ha(0), x:192, y:-100}, {aa:b.ja, ba:a.Ha(0), x:240, y:-100}, {aa:b.ja, ba:a.Ha(30), x:48, y:-100}, {aa:b.ja, ba:a.Ha(30), x:96, y:-100}, {aa:b.ja, 
  ba:a.Ha(30), x:144, y:-100}, {aa:b.ja, ba:a.Ha(30), x:192, y:-100}, {aa:b.ja, ba:a.Ha(30), x:240, y:-100}], "heri2-5-center":[{aa:b.ja, ba:a.Ha(0), x:144, y:-100}, {aa:b.ja, ba:a.Ha(0), x:192, y:-100}, {aa:b.ja, ba:a.Ha(0), x:240, y:-100}, {aa:b.ja, ba:a.Ha(0), x:288, y:-100}, {aa:b.ja, ba:a.Ha(0), x:336, y:-100}, {aa:b.ja, ba:a.Ha(30), x:144, y:-100}, {aa:b.ja, ba:a.Ha(30), x:192, y:-100}, {aa:b.ja, ba:a.Ha(30), x:240, y:-100}, {aa:b.ja, ba:a.Ha(30), x:288, y:-100}, {aa:b.ja, ba:a.Ha(30), x:336, 
  y:-100}], "heri2-5-right":[{aa:b.ja, ba:a.Ha(0), x:240, y:-100}, {aa:b.ja, ba:a.Ha(0), x:288, y:-100}, {aa:b.ja, ba:a.Ha(0), x:336, y:-100}, {aa:b.ja, ba:a.Ha(0), x:384, y:-100}, {aa:b.ja, ba:a.Ha(0), x:432, y:-100}, {aa:b.ja, ba:a.Ha(30), x:240, y:-100}, {aa:b.ja, ba:a.Ha(30), x:288, y:-100}, {aa:b.ja, ba:a.Ha(30), x:336, y:-100}, {aa:b.ja, ba:a.Ha(30), x:384, y:-100}, {aa:b.ja, ba:a.Ha(30), x:432, y:-100}], "heri1-4-left":[{aa:b.ja, ba:a.ub, x:48, y:-100}, {aa:b.ja, ba:a.ub, x:96, y:-100}, {aa:b.ja, 
  ba:a.ub, x:144, y:-100}, {aa:b.ja, ba:a.ub, x:192, y:-100}, {aa:b.ja, ba:a.ub, x:240, y:-100}], "heri1-4-center":[{aa:b.ja, ba:a.ub, x:144, y:-100}, {aa:b.ja, ba:a.ub, x:192, y:-100}, {aa:b.ja, ba:a.ub, x:240, y:-100}, {aa:b.ja, ba:a.ub, x:288, y:-100}, {aa:b.ja, ba:a.ub, x:336, y:-100}], "heri1-4-right":[{aa:b.ja, ba:a.ub, x:240, y:-100}, {aa:b.ja, ba:a.ub, x:288, y:-100}, {aa:b.ja, ba:a.ub, x:336, y:-100}, {aa:b.ja, ba:a.ub, x:384, y:-100}, {aa:b.ja, ba:a.ub, x:432, y:-100}], "heri1-4-left2":[{aa:b.ja, 
  ba:a.Mc, x:48, y:-100}, {aa:b.ja, ba:a.Id, x:96, y:-100}, {aa:b.ja, ba:a.Mc, x:144, y:-100}, {aa:b.ja, ba:a.Id, x:192, y:-100}, {aa:b.ja, ba:a.Mc, x:240, y:-100}], "heri1-4-center2":[{aa:b.ja, ba:a.Mc, x:144, y:-100}, {aa:b.ja, ba:a.Id, x:192, y:-100}, {aa:b.ja, ba:a.Mc, x:240, y:-100}, {aa:b.ja, ba:a.Id, x:288, y:-100}, {aa:b.ja, ba:a.Mc, x:336, y:-100}], "heri1-4-right2":[{aa:b.ja, ba:a.Mc, x:240, y:-100}, {aa:b.ja, ba:a.Id, x:288, y:-100}, {aa:b.ja, ba:a.Mc, x:336, y:-100}, {aa:b.ja, ba:a.Id, 
  x:384, y:-100}, {aa:b.ja, ba:a.Mc, x:432, y:-100}], "tankRD-left":[{aa:b.na, ba:a.xc, x:78, y:-50}, {aa:b.na, ba:a.xc, x:28, y:-100}, {aa:b.na, ba:a.xc, x:-22, y:-150}, {aa:b.na, ba:a.xc, x:-72, y:-200}, {aa:b.na, ba:a.xc, x:-122, y:-250}], "tankRD-center":[{aa:b.na, ba:a.xc, x:222, y:-50}, {aa:b.na, ba:a.xc, x:172, y:-100}, {aa:b.na, ba:a.xc, x:122, y:-150}, {aa:b.na, ba:a.xc, x:72, y:-200}, {aa:b.na, ba:a.xc, x:22, y:-250}], "tankL-top":[{aa:b.na, ba:a.fe, x:550, y:64}, {aa:b.na, ba:a.fe, x:620, 
  y:64}, {aa:b.na, ba:a.fe, x:690, y:64}, {aa:b.na, ba:a.fe, x:760, y:64}, {aa:b.na, ba:a.fe, x:830, y:64}], "tank5-left":[{aa:b.na, ba:a.wa, x:48, y:-70}, {aa:b.na, ba:a.wa, x:48, y:-140}, {aa:b.na, ba:a.wa, x:48, y:-210}, {aa:b.na, ba:a.wa, x:48, y:-280}, {aa:b.na, ba:a.wa, x:48, y:-350}], "tank5-center":[{aa:b.na, ba:a.wa, x:240, y:-70}, {aa:b.na, ba:a.wa, x:240, y:-140}, {aa:b.na, ba:a.wa, x:240, y:-210}, {aa:b.na, ba:a.wa, x:240, y:-280}, {aa:b.na, ba:a.wa, x:240, y:-350}], "tank15-top":[{aa:b.na, 
  ba:a.wa, x:48, y:-70}, {aa:b.na, ba:a.wa, x:48, y:-140}, {aa:b.na, ba:a.wa, x:48, y:-210}, {aa:b.na, ba:a.wa, x:48, y:-280}, {aa:b.na, ba:a.wa, x:48, y:-350}, {aa:b.na, ba:a.wa, x:240, y:-70}, {aa:b.na, ba:a.wa, x:240, y:-140}, {aa:b.na, ba:a.wa, x:240, y:-210}, {aa:b.na, ba:a.wa, x:240, y:-280}, {aa:b.na, ba:a.wa, x:240, y:-350}, {aa:b.na, ba:a.wa, x:432, y:-70}, {aa:b.na, ba:a.wa, x:432, y:-140}, {aa:b.na, ba:a.wa, x:432, y:-210}, {aa:b.na, ba:a.wa, x:432, y:-280}, {aa:b.na, ba:a.wa, x:432, y:-350}], 
  "tank25-top":[{aa:b.na, ba:a.wa, x:48, y:-70}, {aa:b.na, ba:a.wa, x:48, y:-140}, {aa:b.na, ba:a.wa, x:48, y:-210}, {aa:b.na, ba:a.wa, x:48, y:-280}, {aa:b.na, ba:a.wa, x:48, y:-350}, {aa:b.na, ba:a.wa, x:240, y:-70}, {aa:b.na, ba:a.wa, x:240, y:-140}, {aa:b.na, ba:a.wa, x:240, y:-210}, {aa:b.na, ba:a.wa, x:240, y:-280}, {aa:b.na, ba:a.wa, x:240, y:-350}, {aa:b.na, ba:a.wa, x:432, y:-70}, {aa:b.na, ba:a.wa, x:432, y:-140}, {aa:b.na, ba:a.wa, x:432, y:-210}, {aa:b.na, ba:a.wa, x:432, y:-280}, {aa:b.na, 
  ba:a.wa, x:432, y:-350}, {aa:b.na, ba:a.yc, x:144, y:710}, {aa:b.na, ba:a.yc, x:144, y:780}, {aa:b.na, ba:a.yc, x:144, y:850}, {aa:b.na, ba:a.yc, x:144, y:920}, {aa:b.na, ba:a.yc, x:144, y:990}, {aa:b.na, ba:a.yc, x:336, y:710}, {aa:b.na, ba:a.yc, x:336, y:780}, {aa:b.na, ba:a.yc, x:336, y:850}, {aa:b.na, ba:a.yc, x:336, y:920}, {aa:b.na, ba:a.yc, x:336, y:990}], "bukky-4-r":[{aa:b.oh, ba:a.ph, x:480, y:-50}], "bukky-4-l":[{aa:b.oh, ba:a.ph, x:0, y:-50}], "cannon-0":[{aa:b.Qa, ba:a.Wb, x:48, y:-100}], 
  "cannon-1":[{aa:b.Qa, ba:a.Wb, x:96, y:-100}], "cannon-2":[{aa:b.Qa, ba:a.Wb, x:144, y:-100}], "cannon-3":[{aa:b.Qa, ba:a.Wb, x:192, y:-100}], "cannon-4":[{aa:b.Qa, ba:a.Wb, x:240, y:-100}], "cannon-5":[{aa:b.Qa, ba:a.Wb, x:288, y:-100}], "cannon-6":[{aa:b.Qa, ba:a.Wb, x:336, y:-100}], "cannon-7":[{aa:b.Qa, ba:a.Wb, x:384, y:-100}], "cannon-8":[{aa:b.Qa, ba:a.Wb, x:432, y:-100}], "cannon-R0":[{aa:b.Qa, ba:a.Wb, x:550, y:128}], "cannon-R1":[{aa:b.Qa, ba:a.Wb, x:550, y:192}], "cannon-R2":[{aa:b.Qa, 
  ba:a.Wb, x:550, y:256}], "yayoi-0":[{aa:b.Qa, ba:a.Xb, x:48, y:-100}], "yayoi-1":[{aa:b.Qa, ba:a.Xb, x:96, y:-100}], "yayoi-2":[{aa:b.Qa, ba:a.Xb, x:144, y:-100}], "yayoi-3":[{aa:b.Qa, ba:a.Xb, x:192, y:-100}], "yayoi-4":[{aa:b.Qa, ba:a.Xb, x:240, y:-100}], "yayoi-5":[{aa:b.Qa, ba:a.Xb, x:288, y:-100}], "yayoi-6":[{aa:b.Qa, ba:a.Xb, x:336, y:-100}], "yayoi-7":[{aa:b.Qa, ba:a.Xb, x:384, y:-100}], "yayoi-8":[{aa:b.Qa, ba:a.Xb, x:432, y:-100}], "yayoi-R0":[{aa:b.Qa, ba:a.Xb, x:550, y:128}], "yayoi-R1":[{aa:b.Qa, 
  ba:a.Xb, x:550, y:192}], "yayoi-R2":[{aa:b.Qa, ba:a.Xb, x:550, y:256}], "tsubomi-0":[{aa:b.Te, ba:a.Ne, x:96, y:-100}], "tsubomi-1":[{aa:b.Te, ba:a.Ne, x:240, y:-100}], "tsubomi-2":[{aa:b.Te, ba:a.Ne, x:384, y:-100}], "tsubomi-R0":[{aa:b.Te, ba:a.Ne, x:580, y:128}], "itsuki-0":[{aa:b.Mf, ba:a.Hf, x:96, y:-100}], "itsuki-1":[{aa:b.Mf, ba:a.Hf, x:240, y:-100}], "itsuki-2":[{aa:b.Mf, ba:a.Hf, x:384, y:-100}], "makoto-0":[{aa:b.tc, ba:a.uc, x:48, y:-100}], "makoto-1":[{aa:b.tc, ba:a.uc, x:96, y:-100}], 
  "makoto-2":[{aa:b.tc, ba:a.uc, x:144, y:-100}], "makoto-3":[{aa:b.tc, ba:a.uc, x:192, y:-100}], "makoto-4":[{aa:b.tc, ba:a.uc, x:240, y:-100}], "makoto-5":[{aa:b.tc, ba:a.uc, x:288, y:-100}], "makoto-6":[{aa:b.tc, ba:a.uc, x:336, y:-100}], "makoto-7":[{aa:b.tc, ba:a.uc, x:384, y:-100}], "makoto-8":[{aa:b.tc, ba:a.uc, x:432, y:-100}], "makoto-R0":[{aa:b.tc, ba:a.uc, x:580, y:128}], "karen-3-2":[{aa:b.Gf, ba:a.Ff, x:96, y:-100}], "karen-3-5":[{aa:b.Gf, ba:a.Ff, x:240, y:-100}], "karen-3-8":[{aa:b.Gf, 
  ba:a.Ff, x:384, y:-100}], "fighter-m-0":[{aa:b.Xc, ba:a.ld, x:96, y:-192}], "fighter-m-1":[{aa:b.Xc, ba:a.ld, x:144, y:-192}], "fighter-m-2":[{aa:b.Xc, ba:a.ld, x:192, y:-192}], "fighter-m-3":[{aa:b.Xc, ba:a.ld, x:240, y:-192}], "fighter-m-4":[{aa:b.Xc, ba:a.ld, x:288, y:-192}], "fighter-m-5":[{aa:b.Xc, ba:a.ld, x:336, y:-192}], "fighter-m-6":[{aa:b.Xc, ba:a.ld, x:384, y:-192}], "fighter-m4-0":[{aa:b.Xc, ba:a.cj, x:96, y:-192}], "tsukikage-r":[{aa:b.Yb, ba:a.nd(700), x:624, y:256}, {aa:b.Yb, ba:a.nd(600), 
  x:720, y:256}, {aa:b.Yb, ba:a.nd(500), x:576, y:320}, {aa:b.Yb, ba:a.nd(400), x:672, y:320}, {aa:b.Yb, ba:a.nd(300), x:768, y:320}, {aa:b.Yb, ba:a.nd(200), x:624, y:384}, {aa:b.Yb, ba:a.nd(100), x:720, y:384}], "tsukikage-l":[{aa:b.Yb, ba:a.ge(700), x:-144, y:384}, {aa:b.Yb, ba:a.ge(600), x:-240, y:384}, {aa:b.Yb, ba:a.ge(500), x:-96, y:320}, {aa:b.Yb, ba:a.ge(400), x:-192, y:320}, {aa:b.Yb, ba:a.ge(200), x:-144, y:256}], "urara5-0":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.hb, ba:a.hb(0, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-1":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.hb, ba:a.hb(0, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "urara5-2":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.hb, ba:a.hb(1, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-3":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.hb, ba:a.hb(1, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-4":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.hb, ba:a.hb(2, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-5":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.hb, ba:a.hb(2, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-6":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.hb, ba:a.hb(3, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-7":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.hb, ba:a.hb(3, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "milk5-0":[{aa:b.vc, ba:a.wc(2E3), x:384, y:-256}, {aa:b.vc, ba:a.wc(1500), x:312, y:-224}, {aa:b.vc, ba:a.wc(1E3), x:240, y:-192}, {aa:b.vc, ba:a.wc(500), x:168, y:-160}, {aa:b.vc, ba:a.wc(0), x:96, y:-128}], "milk5-1":[{aa:b.vc, ba:a.wc(2E3), x:96, y:-256}, {aa:b.vc, ba:a.wc(1500), x:168, y:-224}, {aa:b.vc, ba:a.wc(1E3), x:240, y:-192}, {aa:b.vc, ba:a.wc(500), x:312, y:-160}, {aa:b.vc, ba:a.wc(0), x:384, y:-128}], "ako5-0":[{aa:b.sb, ba:a.tb(240, 128, 96, 256), x:240, y:-192}, {aa:b.sb, 
  ba:a.tb(384, 256, 240, 128), x:384, y:-192}, {aa:b.sb, ba:a.tb(360, 512, 384, 256), x:360, y:-192}, {aa:b.sb, ba:a.tb(120, 512, 360, 512), x:120, y:-192}, {aa:b.sb, ba:a.tb(96, 256, 120, 512), x:96, y:-192}], "ako5-1":[{aa:b.sb, ba:a.tb(240, 128, 384, 256), x:240, y:-192}, {aa:b.sb, ba:a.tb(384, 256, 360, 512), x:384, y:-192}, {aa:b.sb, ba:a.tb(360, 512, 120, 512), x:360, y:-192}, {aa:b.sb, ba:a.tb(120, 512, 96, 256), x:120, y:-192}, {aa:b.sb, ba:a.tb(96, 256, 240, 128), x:96, y:-192}], "ako5-2":[{aa:b.sb, 
  ba:a.tb(240, 128, 120, 512), x:240, y:-192}, {aa:b.sb, ba:a.tb(384, 256, 96, 256), x:384, y:-192}, {aa:b.sb, ba:a.tb(360, 512, 240, 128), x:360, y:-192}, {aa:b.sb, ba:a.tb(120, 512, 384, 256), x:120, y:-192}, {aa:b.sb, ba:a.tb(96, 256, 360, 512), x:96, y:-192}], "komachi-0":[{aa:b.Zb, ba:a.uh, x:144, y:-192}], "komachi-1":[{aa:b.Zb, ba:a.uh, x:336, y:-192}], "komachi2-0":[{aa:b.Zb, ba:a.vh, x:144, y:-192}], "komachi2-1":[{aa:b.Zb, ba:a.vh, x:336, y:-192}], "komachi3-0":[{aa:b.Zb, ba:a.wh, x:144, 
  y:-192}], "komachi3-1":[{aa:b.Zb, ba:a.wh, x:336, y:-192}], "komachi4-0":[{aa:b.Zb, ba:a.Pf, x:144, y:-192}], "komachi4-1":[{aa:b.Zb, ba:a.Pf, x:336, y:-192}], "komachi4-2":[{aa:b.Zb, ba:a.Pf, x:240, y:-192}], "komachi5-0":[{aa:b.Zb, ba:a.Of, x:144, y:-192}], "komachi5-1":[{aa:b.Zb, ba:a.Of, x:336, y:-192}], "komachi5-2":[{aa:b.Zb, ba:a.Of, x:240, y:-192}], "nozomi4-0":[{aa:b.Ld, ba:a.cg, x:144, y:-192}], "nozomi4-1":[{aa:b.Ld, ba:a.cg, x:240, y:-192}], "nozomi4-2":[{aa:b.Ld, ba:a.cg, x:336, y:-192}], 
  "nozomi5-0":[{aa:b.Ld, ba:a.dg, x:144, y:-256}], "nozomi5-1":[{aa:b.Ld, ba:a.dg, x:240, y:-128}], "nozomi5-2":[{aa:b.Ld, ba:a.dg, x:336, y:-256}], "mktn5-0":[{aa:b.de, ba:a.de(0.6), x:624, y:128}], "mktn5-1":[{aa:b.de, ba:a.de(0.4), x:-144, y:64}], "akane-center":[{aa:b.La, ba:a.La, x:144, y:130}, {aa:b.La, ba:a.La, x:192, y:80}, {aa:b.La, ba:a.La, x:240, y:140}, {aa:b.La, ba:a.La, x:288, y:80}, {aa:b.La, ba:a.La, x:336, y:130}], "akane-right":[{aa:b.La, ba:a.La, x:384, y:160}, {aa:b.La, ba:a.La, 
  x:288, y:120}, {aa:b.La, ba:a.La, x:288, y:80}, {aa:b.La, ba:a.La, x:384, y:40}], "akane-left":[{aa:b.La, ba:a.La, x:96, y:160}, {aa:b.La, ba:a.La, x:144, y:120}, {aa:b.La, ba:a.La, x:144, y:80}, {aa:b.La, ba:a.La, x:96, y:40}], "nao1-left":[{aa:b.ra, ba:a.yb, x:48, y:-100}, {aa:b.ra, ba:a.yb, x:96, y:-100}, {aa:b.ra, ba:a.yb, x:144, y:-100}, {aa:b.ra, ba:a.yb, x:192, y:-100}, {aa:b.ra, ba:a.yb, x:240, y:-100}], "nao1-right":[{aa:b.ra, ba:a.yb, x:240, y:-100}, {aa:b.ra, ba:a.yb, x:288, y:-100}, 
  {aa:b.ra, ba:a.yb, x:336, y:-100}, {aa:b.ra, ba:a.yb, x:384, y:-100}, {aa:b.ra, ba:a.yb, x:432, y:-100}], "nao1-center":[{aa:b.ra, ba:a.yb, x:144, y:-100}, {aa:b.ra, ba:a.yb, x:192, y:-100}, {aa:b.ra, ba:a.yb, x:240, y:-100}, {aa:b.ra, ba:a.yb, x:288, y:-100}, {aa:b.ra, ba:a.yb, x:336, y:-100}], "nao2-left":[{aa:b.ra, ba:a.zb, x:48, y:-100}, {aa:b.ra, ba:a.zb, x:96, y:-100}, {aa:b.ra, ba:a.zb, x:144, y:-100}, {aa:b.ra, ba:a.zb, x:192, y:-100}, {aa:b.ra, ba:a.zb, x:240, y:-100}], "nao2-right":[{aa:b.ra, 
  ba:a.zb, x:240, y:-100}, {aa:b.ra, ba:a.zb, x:288, y:-100}, {aa:b.ra, ba:a.zb, x:336, y:-100}, {aa:b.ra, ba:a.zb, x:384, y:-100}, {aa:b.ra, ba:a.zb, x:432, y:-100}], "nao2-center":[{aa:b.ra, ba:a.zb, x:144, y:-100}, {aa:b.ra, ba:a.zb, x:192, y:-100}, {aa:b.ra, ba:a.zb, x:240, y:-100}, {aa:b.ra, ba:a.zb, x:288, y:-100}, {aa:b.ra, ba:a.zb, x:336, y:-100}], "nao3-left":[{aa:b.ra, ba:a.Ab, x:48, y:-100}, {aa:b.ra, ba:a.Ab, x:96, y:-100}, {aa:b.ra, ba:a.Ab, x:144, y:-100}, {aa:b.ra, ba:a.Ab, x:192, 
  y:-100}, {aa:b.ra, ba:a.Ab, x:240, y:-100}], "nao3-right":[{aa:b.ra, ba:a.Ab, x:240, y:-100}, {aa:b.ra, ba:a.Ab, x:288, y:-100}, {aa:b.ra, ba:a.Ab, x:336, y:-100}, {aa:b.ra, ba:a.Ab, x:384, y:-100}, {aa:b.ra, ba:a.Ab, x:432, y:-100}], "nao3-center":[{aa:b.ra, ba:a.Ab, x:144, y:-100}, {aa:b.ra, ba:a.Ab, x:192, y:-100}, {aa:b.ra, ba:a.Ab, x:240, y:-100}, {aa:b.ra, ba:a.Ab, x:288, y:-100}, {aa:b.ra, ba:a.Ab, x:336, y:-100}], "reika1-left":[{aa:b.Cb, ba:a.fc, x:-48, y:-64}, {aa:b.Cb, ba:a.fc, x:-72, 
  y:-128}, {aa:b.Cb, ba:a.fc, x:-96, y:-64}, {aa:b.Cb, ba:a.fc, x:-120, y:-128}, {aa:b.Cb, ba:a.fc, x:-144, y:-64}, {aa:b.Cb, ba:a.fc, x:-168, y:-128}], "reika1-right":[{aa:b.Cb, ba:a.fc, x:528, y:-64}, {aa:b.Cb, ba:a.fc, x:552, y:-128}, {aa:b.Cb, ba:a.fc, x:576, y:-64}, {aa:b.Cb, ba:a.fc, x:600, y:-128}, {aa:b.Cb, ba:a.fc, x:624, y:-64}, {aa:b.Cb, ba:a.fc, x:648, y:-128}], "madoka-0":[{aa:b.je, ba:a.je, x:144, y:-128}], "madoka-1":[{aa:b.je, ba:a.je, x:336, y:-128}], miyuki_y1:[{aa:b.Ad, ba:a.Ad, 
  x:-128, y:140}], miyuki_y2:[{aa:b.Ad, ba:a.Ad, x:608, y:60}], miyuki_t1:[{aa:b.zd, ba:a.zd, x:336, y:-128}], miyuki_t2:[{aa:b.zd, ba:a.zd, x:144, y:-128}], alice:[{aa:b.Cf, ba:a.Cf, x:240, y:-64}], erika:[{aa:b.ce, ba:a.ce, x:240, y:-100}], yukishiro:[{aa:b.Kf, ba:a.Kf, x:240, y:-100}], misumi:[{aa:b.Yf, ba:[a.dj, a.Zf, a.$f], x:240, y:-100, mc:k}], mai:[{aa:b.Uf, ba:a.Uf, x:780, y:128}], hyuga:[{aa:b.ej, ba:[a.fg, a.gg, a.hg], x:240, y:-100, mc:k}], higashi:[{aa:b.ig, ba:a.ig, x:780, y:128}], 
  momozono:[{aa:b.aj, ba:[a.Rf, a.Sf, a.Tf], x:240, y:-100, mc:k}], rikka:[{aa:b.eg, ba:a.eg, x:240, y:-100}], mana:[{aa:b.bj, ba:[a.Vf, a.Wf, a.Xf], x:240, y:-100, mc:k}], kanade:[{aa:b.$i, ba:a.Nf, x:432, y:-448}]}
})();
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, h, j, m) {
    return c.action([c.fire(c.direction(b, "absolute"), f, h || t, j, m), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, h || t, j, m)])])
  }
  function f(a, b, c, f, h) {
    return function(j) {
      return d(a, b, c, j, f, h, i, i)
    }
  }
  function d(a, b, d, f, h, j, m, n) {
    return c.action([c.fire(c.direction(b), f, h || t, j, m, n), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, h || t, j, m, n)])])
  }
  function h(a) {
    return c.fire(c.direction(0), a || n, F)
  }
  function m(a) {
    return c.fire(c.direction(0), a || n, t)
  }
  function q(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function w(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function v(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function n(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function H(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function j(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function O(a) {
    return c.Ia(a, {frame:3, Be:k})
  }
  function L(a) {
    return c.Ia(a, {frame:2, Be:k})
  }
  function z(a) {
    return c.Ia(a, {visible:s})
  }
  function B(a) {
    return c.Ia(a, {frame:4, lc:k})
  }
  function G(a) {
    return c.Ia(a, {frame:3})
  }
  function t(a) {
    return c.Ia(a, {frame:1})
  }
  function u(a) {
    return c.Ia(a, {frame:2})
  }
  function F(a) {
    return c.Ia(a, {frame:0})
  }
  function C(a) {
    return c.Ia(a, {frame:3, lc:k})
  }
  function K(a) {
    return c.Ia(a, {frame:1, lc:k})
  }
  function A(a) {
    return c.Ia(a, {frame:2, lc:k})
  }
  function E(a) {
    return c.Ia(a, {frame:0, lc:k})
  }
  gls2.ha = {};
  var c = I.Ja;
  gls2.ha["basic0-0"] = new I.ka({top:c.action([m])});
  gls2.ha["basic0-1"] = new I.ka({top:c.action([b(v, -0.01, 8, f(3, -15, 15))])});
  gls2.ha["basic1-0"] = new I.ka({top:c.action([c.repeat(999, [j(40), m(n)])])});
  gls2.ha["basic1-1"] = new I.ka({top:c.action([c.repeat(999, [j(20), m(n)])])});
  gls2.ha["basic1-2"] = new I.ka({top:c.action([j("10+$rand*100"), d(3, -20, 20, n)])});
  gls2.ha["basic1-3"] = new I.ka({top:c.action([c.repeat(999, [j("20+$rand*80"), d(3, -20, 20, n)])])});
  gls2.ha["basic2-0"] = new I.ka({top:c.action([c.repeat(999, [j(50), m(n)])])});
  gls2.ha["basic3-0"] = new I.ka({top:c.action([c.wait(20), c.repeat(999, [j(100), b(n, 0.1, 3, h)])])});
  gls2.ha["basic3-1"] = new I.ka({top:c.action([c.wait(20), c.repeat(999, [j(40), b(n, 0.1, 3, h)])])});
  gls2.ha["bukky-4-0"] = new I.ka({top0:c.action([j(30), c.repeat(999, [c.fire(c.direction(-40), n, A), c.repeat(3, [c.fire(c.direction(20, "sequence"), n, A), c.fire(c.direction(20, "sequence"), n, A), c.fire(c.direction(20, "sequence"), n, A), c.fire(c.direction(20, "sequence"), n, A), c.fire(c.direction(-80, "sequence"), n, A), j(5)]), j(70)])]), top1:c.action([j(20), c.fire(c.direction(180, "absolute"), p, K), c.repeat(999, [c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), 
  p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(-90, "sequence"), p, K), j(5)])])});
  gls2.ha["cannon2-0"] = new I.ka({top0:c.action([c.repeat(999, [j(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", p), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", p), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", p), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", p), j(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", n), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", n), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", n), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", n)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), r, B), c.fire(c.direction(" 90+$loop.index*10", "absolute"), r, B), c.fire(c.direction("180+$loop.index*10", "absolute"), r, B), c.fire(c.direction("270+$loop.index*10", "absolute"), r, B), c.fire(c.direction("  0-$loop.index*10", "absolute"), r, B), c.fire(c.direction(" 90-$loop.index*10", "absolute"), r, B), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), r, B), c.fire(c.direction("270-$loop.index*10", "absolute"), r, B), j(10)])]), top2:c.action([c.repeat(999, [j(43), d(30, 0, 348, n, F)])])});
  gls2.ha["cannon2-3"] = new I.ka({top0:c.action([c.repeat(999, [c.ya("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), z(c.pa("ivs0", "$d")))]), j(10), c.fire(c.direction(39, "sequence"), c.speed(1), z(c.pa("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.ya("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), z(c.pa("ivs1", "$d")))]), j(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), z(c.pa("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, F), c.Sa()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), p, function(a) {
    return c.Ia(a, {frame:7, lc:k})
  }), c.fire(c.direction("$1+5", "relative"), p, function(a) {
    return c.Ia(a, {frame:6, lc:k})
  }), c.Sa()])});
  gls2.ha["cannon3-0"] = new I.ka({top0:c.action([c.repeat(999, [j(80), b(p, 0.01, 5, f(5, -30, 30, F, c.offsetX(-60))), b(p, 0.01, 5, f(5, -30, 30, F)), b(p, 0.01, 5, f(5, -30, 30, F, c.offsetX(60)))])])});
  gls2.ha["cannon4-0"] = new I.ka({top0:c.action([j(20), c.repeat(999, [c.fire(p, A), c.repeat(8, [j(10), c.ya("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), p, A), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), p, A)])]), j(120)])])});
  gls2.ha["cannon5-0"] = new I.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), q, z(c.pa("b"))), c.repeat(11, [j(5), c.fire(c.direction(10, "sequence"), q, z(c.pa("b")))]), j(60)])]), b:c.action([c.wait(5), c.bf(c.speed(0), 0), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, t)
  }), c.Sa])});
  gls2.ha["yuri-4"] = new I.ka({top:c.action([j(60), c.repeat(7, [a(7, 120, 240, r, F), j(8)])])});
  gls2.ha["kurokawa-1"] = new I.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(-45), c.sa(k))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(45), c.sa(k))
  }), j(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, C, c.offsetX(-45), c.sa(k)), j(45), c.fire(c.direction(0), n, C, c.offsetX(45), c.sa(k)), j(45)])])});
  gls2.ha["milk-5"] = new I.ka({top0:c.action([c.repeat(999, [d(5, -90, 90, n, G, c.offsetX(-45)), c.wait(27), d(5, -90, 90, n, G, c.offsetX(45)), j(120)])]), top1:c.action([c.repeat(999, [j(30), d(6, -90, 90, v, A, c.offsetX(-45)), c.wait(21), d(6, -90, 90, v, A, c.offsetX(45)), j(90)])]), top2:c.action([c.repeat(999, [j(55), d(13, -90, 90, r, B, c.offsetX(-45)), c.wait(20), d(13, -90, 90, r, B, c.offsetX(45)), j(21)])])});
  gls2.ha["ako-5"] = new I.ka({top:c.action([c.repeat(8, [d(3, -20, 20, v, t), j(2)])])});
  gls2.ha["kurokawa-4"] = new I.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(-45), c.sa(k))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(45), c.sa(k))
  }), j(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, C, c.offsetX(-45), c.sa(k)), j(45), c.fire(c.direction(0), n, C, c.offsetX(45), c.sa(k)), j(45)])])});
  gls2.ha["komachi-1"] = new I.ka({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.repeat(57, [j(8), c.fire(c.direction(-720 / 57, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, 
  [c.fire(c.direction(-210, "absolute"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.repeat(57, [j(8), c.fire(c.direction(720 / 57, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), n(0), E, c.offsetX(-110), c.sa(k)), c.repeat(6, 
  [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), E, c.offsetX(-110), c.sa(k))]), j(10), c.fire(c.direction(0), n(0), E, c.offsetX(110), c.sa(k)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), E, c.offsetX(110), c.sa(k))]), j(10)])])});
  gls2.ha["komachi-2"] = new I.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(4, -45, 45, a, u, c.offsetX(-45), c.sa(k)), j(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([j(4), d(4, -45, 45, a, u, c.offsetX(45), c.sa(k))])
  }), j(90)])]), top1:c.action([c.repeat(999, [j(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), j(1)])
  }), j(180)])])});
  gls2.ha["komachi-3"] = new I.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(8, -60, 60, a, u, c.offsetX(-45), c.sa(k)), j(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([j(4), d(8, -60, 60, a, u, c.offsetX(45), c.sa(k))])
  }), j(90)])]), top1:c.action([c.repeat(999, [j(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), j(1)])
  }), j(180)])])});
  gls2.ha["komachi-4"] = new I.ka({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), n, G, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, G, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, G, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), n, G, c.offsetX(45)), j(4)]), j(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), n(5), E, c.offsetX(-110), c.sa(k)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), n(5), E, c.offsetX(-110), c.sa(k))]), j(30), c.fire(c.direction(0), n(5), E, c.offsetX(110), c.sa(k)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), n(5), E, c.offsetX(110), c.sa(k))]), j(30)])])});
  gls2.ha["komachi-5"] = new I.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(210, "absolute"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.repeat(60, [j(4), c.fire(c.direction(-6, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40))])])]), top1:c.action([c.repeat(999, [c.fire(c.direction(-210, 
  "absolute"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.repeat(60, [j(4), c.fire(c.direction(6, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40))])])]), top2:c.action([c.repeat(999, [c.fire(c.direction(0), v(0), E, c.offsetX(-110), c.sa(k)), c.repeat(30, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), v(0), E, c.offsetX(-110), c.sa(k))]), j(5), c.fire(c.direction(0), v(0), E, c.offsetX(110), c.sa(k)), c.repeat(30, [c.wait(1), c.fire(c.direction(0, "sequence"), v(0), E, c.offsetX(110), c.sa(k))]), j(5)])])});
  gls2.ha["nozomi-4"] = new I.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.ya("c", "2+$loop.index"), d("$c", "-4-($c-2)*4", "4+($c-2)*4", H("(560-$c*40)*0.03"), C, c.offsetY(-50))]), j(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), z(c.pa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, F, c.offsetX(-50)), c.wait(3)])
  }), j(90), c.fire(c.direction(-40), z(c.pa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, F, c.offsetX(50)), c.wait(3)])
  }), j(90)])]), noop:c.action([c.wait(1), c.Sa])});
  gls2.ha["nozomi-5"] = new I.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(6, [c.ya("c", "2+$loop.index"), d("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", H("(560-$c*40)*0.02"), C, c.offsetY(-50)), d("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", H("(560-$c*40)*0.02"), C, c.offsetY(-50)), d("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", H("(560-$c*40)*0.02"), C, c.offsetY(-50)), d("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", H("(560-$c*40)*0.02"), C, c.offsetY(-50))]), j(150), c.repeat(6, [c.ya("c", "2+$loop.index"), 
  d("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", H("(560-$c*40)*0.02"), A, c.offsetY(-50)), d("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", H("(560-$c*40)*0.02"), A, c.offsetY(-50)), d("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", H("(560-$c*40)*0.02"), A, c.offsetY(-50)), d("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", H("(560-$c*40)*0.02"), A, c.offsetY(-50)), d("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", H("(560-$c*40)*0.02"), A, c.offsetY(-50))]), j(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(5), 
  z(c.pa("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(-1, "sequence"), a, F, c.offsetX(-50)), j(3)])
  }), c.fire(c.direction(-5), z(c.pa("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(1, "sequence"), a, F, c.offsetX(50)), j(3)])
  })])]), noop:c.action([c.wait(1), c.Sa])});
  gls2.ha["mktn-5"] = new I.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(0), r, z(c.pa("noop"))), c.repeat(20, [c.fire(c.direction(0.5, "sequence"), c.speed(0.08, "sequence"), u), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), u)]), j(6)]), c.fire(c.direction(0), r, z(c.pa("noop"))), c.repeat(20, [c.fire(c.direction(-0.5, "sequence"), c.speed(0.08, "sequence"), u), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), u)]), j(6)]), j(60)])]), 
  top1:c.action([c.repeat(999, [c.fire(c.direction(0, "absolute"), n, z(c.pa("noop"))), c.repeat(5, [c.fire(c.direction(-10, "sequence"), c.speed(0.05, "sequence"), B), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), B)]), j(5)]), c.fire(c.direction(0, "absolute"), n, z(c.pa("noop"))), c.repeat(5, [c.fire(c.direction(10, "sequence"), c.speed(0.05, "sequence"), B), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), B)]), j(5)]), j(40)])]), top2:c.action([c.repeat(999, 
  [c.ya("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"), d(5, -30, 30, n(7), L, c.offsetX("$gun"), c.offsetY(20)), c.ya("gun", "[-40, -120, 0, 120, 80, 40, -80][$loop.index%7]"), d(5, -30, 30, n(7), L, c.offsetX("$gun"), c.offsetY(20)), j(21)])]), noop:c.action([c.wait(1), c.Sa])});
  gls2.ha.akane = new I.ka({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [j(60), d(1, 1, 1, r, u, c.offsetX(-16), c.offsetY(6), c.sa(k)), d(1, 1, 1, r, u, c.offsetX(16), c.offsetY(6), c.sa(k))]), j(120)])])});
  gls2.ha["nao-1"] = new I.ka({top:c.action([c.repeat(999, [j(30), c.fire(c.direction(0), v, C)])])});
  gls2.ha["nao-2"] = new I.ka({top:c.action([c.repeat(999, [j(30), d(2, -5, 5, v, C, c.offsetX(0), c.offsetY(0), c.sa(k))])])});
  gls2.ha["nao-3"] = new I.ka({top:c.action([c.repeat(999, [j(30), d(2, -1, 1, v, C, c.offsetX(0), c.offsetY(0), c.sa(k))])])});
  gls2.ha.reika = new I.ka({top:c.action([c.repeat(999, [j(60), c.fire(c.direction(0), n, A)])])});
  gls2.ha.aguri = new I.ka({top0:c.action([c.repeat(999, [j(30), d(3, -30, 30, r, G, c.offsetX(0), c.offsetY(0), c.sa(k))])]), top1:c.action([c.repeat(999, [j(30), d(3, -30, 30, r, u, c.offsetX(-64), c.offsetY(24), c.sa(k))])]), top2:c.action([c.repeat(999, [j(30), d(3, -30, 30, r, u, c.offsetX(-80), c.offsetY(10), c.sa(k))])]), top3:c.action([c.repeat(999, [j(30), d(3, -30, 30, r, u, c.offsetX(-90), c.offsetY(5), c.sa(k))])])});
  gls2.ha.miyuki_y = new I.ka({top:c.action([c.wait("40"), c.repeat(999, [j(30), d(3, -45, 45, r, u, c.offsetX(-64), c.offsetY(16), c.sa(k)), d(3, -45, 45, r, u, c.offsetX(0), c.offsetY(16), c.sa(k)), d(3, -45, 45, r, u, c.offsetX(16), c.offsetY(16), c.sa(k)), d(3, -45, 45, r, u, c.offsetX(32), c.offsetY(16), c.sa(k)), b(r, 0.001, 5, function(a) {
    return c.action([d(3, "-45", "+45", a, A, c.offsetX(0), c.offsetY(0))])
  })])])});
  gls2.ha.miyuki_t = new I.ka({top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(3, [a(3, -20, 20, n, A, c.offsetX(32), c.offsetY(32)), j(30)]), c.repeat(3, [a(3, -10, 10, n, A, c.offsetX(-32), c.offsetY(-32)), j(30)]), c.repeat(3, [a(3, -5, 5, n, A, c.offsetX(-16), c.offsetY(-16)), j(30)]), j(120)])]), top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [a(5, -30, 30, n, A, c.offsetX(-32), c.offsetY(32)), j(45)]), c.repeat(5, [a(5, -30, 30, n, A, c.offsetX(32), c.offsetY(32)), j(45)]), j(120)])])});
  gls2.ha.alice = new I.ka({top0:c.action([c.repeat(999, [a(8, 0, 180, r, A), a(8, 0, -180, r, A), j(60), a(9, 0, 180, r, C), a(9, 0, -180, r, C), j(60)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(5, "sequence"), r, E, c.offsetX(0), c.sa(k)), j(10)])]), top2:c.action([c.repeat(999, [c.fire(c.direction(10, "sequence"), p, K, c.offsetX(0), c.sa(k)), j(10)])])});
  gls2.ha.aliceLeaf = new I.ka({top:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(10, "sequence"), n(5), B, c.offsetX(0), c.sa(k)), j(10)])])});
  gls2.ha["honoka-1"] = new I.ka({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, B, c.offsetX(0), c.offsetY(30)), j(30), d(5, -40, 40, r, B, c.offsetX(0), c.offsetY(30)), j(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), t), d(3, -3, 3, p(1), t), d(4, -4, 4, p(1.4), t), d(5, -5, 5, p(1.8), t), j(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, r, E, c.offsetX(-110), c.offsetY(-70)), j(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, r, E, c.offsetX(110), 
  c.offsetY(-70)), j(30)])])});
  gls2.ha["nagisa-1-1"] = new I.ka({top0:c.action([j(90), c.repeat(3, [c.ya("way", "5 + $loop.index*6"), b(n, 0.01, "3 + $loop.index*2", function(a) {
    return c.action([d("$way", -110, 110, a, t, c.offsetX(-190), c.offsetY(-20)), d("$way", -110, 110, a, t, c.offsetX(190), c.offsetY(-20)), c.wait(10)])
  }), j(60)]), j(60)])});
  gls2.ha["nagisa-1-2"] = new I.ka({top0:c.action([c.repeat(12, [d(15, -90, 90, r, t), j(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [d(5, -65, -55, p, E, c.offsetX(-190), c.offsetY(-20)), d(5, -35, -25, p, E, c.offsetX(-190), c.offsetY(-20)), d(5, -5, 5, p, E, c.offsetX(-190), c.offsetY(-20)), d(5, 25, 35, p, E, c.offsetX(-190), c.offsetY(-20)), d(5, 55, 65, p, E, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), j(60), c.repeat(3, [d(5, -65, -55, p, E, c.offsetX(190), c.offsetY(-20)), d(5, -35, 
  -25, p, E, c.offsetX(190), c.offsetY(-20)), d(5, -5, 5, p, E, c.offsetX(190), c.offsetY(-20)), d(5, 25, 35, p, E, c.offsetX(190), c.offsetY(-20)), d(5, 55, 65, p, E, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), j(60)])])});
  gls2.ha["nagisa-1-3"] = new I.ka({top0:c.action([j(60), c.repeat(3, [c.fire(c.direction(-60), p, u, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [j(15), c.fire(c.direction(6, "sequence"), p, u, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([j(80), c.repeat(3, [c.fire(c.direction(60), p, u, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [j(15), c.fire(c.direction(-6, "sequence"), p, u, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [d(5, -60, -40, p, B, c.offsetX(-190), 
  c.offsetY(-20)), d(5, -20, -10, p, B, c.offsetX(-190), c.offsetY(-20)), d(5, 10, 20, p, B, c.offsetX(-190), c.offsetY(-20)), d(5, 40, 60, p, B, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), j(60), c.repeat(3, [d(5, -60, -40, p, B, c.offsetX(190), c.offsetY(-20)), d(5, -20, -10, p, B, c.offsetX(190), c.offsetY(-20)), d(5, 10, 20, p, B, c.offsetX(190), c.offsetY(-20)), d(5, 40, 60, p, B, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), j(60)])])});
  gls2.ha["nagisa-2-1"] = new I.ka({top0:c.action([j(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", r, F, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", r, F, c.offsetX(190), c.offsetY(-20)), j(10)])]), top1:c.action([j(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", p, C), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", p, C), j(12)])])});
  gls2.ha["nagisa-2-2"] = new I.ka({top0:c.action([j(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", n, C), j(12)])]), top1:c.action([j(120), c.repeat(6, [a(9, 150, 130, r(0.8), t), a(9, 172, 188, r(0.8), t), a(9, 210, 230, r(0.8), t), j(30), a(9, 170, 150, r(0.8), t), a(9, 190, 210, r(0.8), t), j(30)])])});
  gls2.ha["nagisa-2-3"] = new I.ka({top:c.action([j(120), c.repeat(12, [a(23, 0, 360, r, B, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, r, B), a(23, 0, 360, r, B, c.offsetX(190), c.offsetY(-20)), j(30)])])});
  gls2.ha["nagisa-3-1"] = new I.ka({top0:c.action([j(50), c.repeat(999, [b(n, 0.001, 5, function(a) {
    return c.action([d(41, "-180", "+180", a, A, c.offsetX(-190), c.offsetY(-20)), d(41, "-180", "+180", a, A, c.offsetX(190), c.offsetY(-20))])
  }), j(50)])]), top1:c.action([c.repeat(999, [d(2, -2, 0, v, t), j(10), d(2, 0, 2, v, t), j(150)])])});
  gls2.ha["mai-1"] = new I.ka({top0:c.action([j(50), c.repeat(50, [c.ya("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, F), c.Sa]))), c.ya("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, F), c.Sa]))), j(8)])]), top1:c.action([j(50), c.repeat(12, [a(5, -50, 50, q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, 
  C), c.Sa]))), a(5, -230, -130, q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, C), c.Sa]))), j(16), a(6, -50, 50, q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, C), c.Sa]))), a(6, -230, -130, q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, C), c.Sa]))), j(16)])])});
  gls2.ha["mai-2"] = new I.ka({top:c.action([j(50), c.repeat(15, [c.fire(c.direction(-10), A(c.pa("fireChild", "$loop.index*10"))), j(8)])]), fireChild:c.action([j("40+$1"), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, u)
  }), c.Sa])});
  gls2.ha["saki-1-1"] = new I.ka({top:c.action([j(100), c.repeat(3, [c.pa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.ya("way", "$1"), c.repeat("30", [d("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, F), d("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, F), j(12)]), c.repeat("$2", [d(9, -20, 20, v, G)])])});
  gls2.ha["saki-1-2"] = new I.ka({top:c.action([j(100), c.repeat(5, [c.ya("way", "5+$loop.index*2"), c.repeat(6, [c.ya("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(d("$way", -30, 30, n("$s"), C, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), j(90)])])});
  gls2.ha["saki-1-3"] = new I.ka({top:c.action([c.ya("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), C(c.pa("seed"))), j(8)]), j(60)]), seed:c.action([c.wait(10), c.bf(c.speed(0), 50), c.wait(90), d(13, 0, 360 - 360 / 13, p, G), c.Sa])});
  gls2.ha["saki-2-1"] = new I.ka({top0:c.action([j(100), c.repeat(4, [d(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", p, F, c.offsetX(-40)), d(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", p, F, c.offsetX(40)), j(60), d(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", p, F, c.offsetX(-40)), d(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", p, F, c.offsetX(40)), j(60)])]), top1:c.action([j(100), c.repeat(4, [c.repeat(7, [c.ya("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  w, G), c.repeat(4, [c.ya("w", "$loop.count"), d("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", w("$w*-1.0"), G)])]), j(120)])])});
  gls2.ha["saki-2-2"] = new I.ka({top:c.action([j(60), c.ya("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), A(c.pa("seed"))), j(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), A(c.pa("seed"))), j(8)]), j(60)]), seed:c.action([c.wait(10), c.bf(c.speed(0), "10 + $rand*15"), c.wait(65), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, u)])
  }), j(2), c.Sa])});
  gls2.ha["saki-2-3"] = new I.ka({top:c.action([j(60), c.ya("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), C(c.pa("seed"))), j(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), C(c.pa("seed"))), j(8)]), j(60)]), seed:c.action([c.wait(10), c.bf(c.speed(0), "10 + $rand*20"), c.wait(65), b(n, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, G)])
  }), j(2), c.Sa])});
  gls2.ha["saki-3-1"] = new I.ka({top:c.action([c.fire(c.direction(180, "absolute"), H, A(c.pa("seed"))), j(60), c.fire(c.direction(180, "absolute"), H, A(c.pa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), H, A(c.pa("seed")), c.offsetX(80)), j(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, F), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, F), c.fire(c.direction(90, "sequence"), p, F), c.fire(c.direction(90, "sequence"), p, F), j(10), c.fire(c.direction(100, 
  "sequence"), p, F)])])});
  gls2.ha["saki-3-2"] = new I.ka({top:c.action([c.fire(c.direction(180, "absolute"), H, C(c.pa("seed"))), j(60), c.fire(c.direction(180, "absolute"), H, C(c.pa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), H, C(c.pa("seed")), c.offsetX(80)), j(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, t), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, t), c.fire(c.direction(90, "sequence"), p, t), c.fire(c.direction(90, "sequence"), p, t), j(10), c.fire(c.direction(80, 
  "sequence"), p, t)])])});
  gls2.ha["rikka-1"] = new I.ka({top:c.action([c.repeat(5, [c.ya("s", "$loop.index*1.5"), j(30), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(90), c.offsetY(-20)), j(3), d(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, n("$s"), c.offsetX(90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, n("$s"), c.offsetX(90), c.offsetY(-20)), j(3), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.ha["rikka-2"] = new I.ka({top0:c.action([c.repeat(10, [c.fire(A(c.pa("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(A(c.pa("snow")), c.offsetX(90), c.offsetY(-20)), j(8)]), j(10)]), top1:c.action([c.repeat(35, [c.ya("d", "$loop.index*-(20+$ex*10)"), c.ya("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), z(c.pa("ivs", "$d", "$s")))]), j(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), z(c.pa("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.ya("d", "$loop.index*+(20+$ex*10)"), c.ya("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), z(c.pa("ivs", "$d", "$s")))]), j(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), z(c.pa("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.ya("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), z(c.pa("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), z(c.pa("snowArm")))])]), c.Sa]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), v, E), c.Sa]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), n("$2"), L), c.fire(c.direction("$1+1", "relative"), n("$2"), L), c.Sa()])});
  gls2.ha["rikka-3"] = new I.ka({top0:c.action([j(40), c.fire(c.direction(-10), z(c.pa("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), H("$loop.index*0.5"), u, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), u, c.offsetX(-90), c.offsetY(-20))]), j(5)]), j(40)]), top1:c.action([j(40), c.fire(c.direction(-10), z(c.pa("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), H("$loop.index*0.5"), u, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), u, c.offsetX(90), c.offsetY(-20))]), j(5)]), j(40)]), dummy:c.action([c.wait(1), c.Sa])});
  gls2.ha["mana-1-1"] = new I.ka({top0:c.action([c.pa("winder", -1)]), top1:c.action([c.pa("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), n, O, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [j(20), c.ya("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), n, O, c.offsetX("-145*$1"), c.offsetY(-5))])])]), top2:c.action([c.wait(60), j(300), c.repeat(7, [c.ya("s", "$loop.index"), c.repeat(5, [c.ya("ss", 
  "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, v("$ss"), G, c.offsetX(-30), c.offsetY(-30))]), j(5), c.repeat(5, [c.ya("ss", "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, v("$ss"), G, c.offsetX(30), c.offsetY(-30))]), j(20), c.repeat(5, [c.ya("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, w("$ss"), u, c.offsetX(30), c.offsetY(-30))]), j(5), c.repeat(5, [c.ya("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, w("$ss"), u, c.offsetX(-30), c.offsetY(-30))]), j(80)])])});
  gls2.ha["mana-1-2"] = new I.ka({top:c.action([c.repeat(5, [c.ya("i", "$loop.index"), c.ya("j", "1/($i+1) * 4"), b(n(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*(-3*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, G, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, G, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+3*$j)"), 
    a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-3*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, G, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, G, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), 
    c.fire(c.direction("(12-$i)*(+3*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), j(5)])
  }), j(60)])])});
  gls2.ha["mana-1-3"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-2-1"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-2-2"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-2-3"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-3-1"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-3-2"] = gls2.ha["mana-1-1"];
  gls2.ha.kanade = new I.ka({top0:c.action([c.repeat(999, [a(50, -176.4, 176.4, n, C, c.offsetY(-350)), j(42), a(50, -172.8, 180, n, C, c.offsetY(-350)), j(42)])]), top1:c.action([c.repeat(999, [d(5, -12, 12, v, A, c.offsetY(-350)), d(5, 78, 102, v, A, c.offsetY(-350)), d(5, 168, 192, v, A, c.offsetY(-350)), d(5, 258, 282, v, A, c.offsetY(-350)), j(57)])]), top2:c.action([c.repeat(999, [d(3, -3, 3, v(5), O, c.offsetY(-350)), j(37)])])});
  gls2.ha.rery = new I.ka({top:c.action([c.repeat(999, [j("180+$rand*120"), c.repeat(10, [c.fire(c.direction(-90), c.speed(2), z(c.pa("fire", 90, "$loop.index"))), c.fire(c.direction(90), c.speed(2), z(c.pa("fire", -90, "$loop.index")))])])]), fire:c.action([c.wait(3), c.fire(c.direction("$1", "relative"), w("$2"), G), c.Sa()])});
  gls2.ha.fary = new I.ka({top:c.action([c.repeat(999, [j("120+$rand*120"), c.repeat(3, [d(3, -30, 30, n, t), j(15)])])])});
  gls2.ha.sory = new I.ka({top:c.action([c.ya("d", "$rand<0.5 ? -5 : 5"), c.ya("s", "1+$rand*0.5"), c.repeat(999, [c.fire(c.direction("360/8+$d*$s", "sequence"), c.speed(2), z(c.pa("fire"))), c.repeat(3, [c.fire(c.direction(90, "sequence"), c.speed(2), z(c.pa("fire")))]), j(60)])]), fire:c.action([c.wait(2), c.fire(c.direction(0, "relative"), r, B), c.Sa()])});
  gls2.ha.lary = new I.ka({top0:c.action([c.fire(c.direction(0, "absolute"), c.speed(1), z(c.pa("fire"))), c.repeat(999, [j(10), c.fire(c.direction(95, "sequence"), c.speed(1), z(c.pa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.pa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.pa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.pa("fire")))])]), top1:c.action([c.fire(c.direction(47, "absolute"), c.speed(1), z(c.pa("fire"))), c.repeat(999, [j(10), c.fire(c.direction(83, 
  "sequence"), c.speed(1), z(c.pa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.pa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.pa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.pa("fire")))])]), fire:c.action([c.wait(5), c.fire(c.direction(-3, "relative"), p, L), c.fire(c.direction(3, "relative"), p, L), c.Sa()])});
  gls2.ha.shiry = new I.ka({top0:c.action([c.repeat(999, [c.ya("d", "$loop.index*-6"), c.repeat(19, [c.fire(c.direction(18, "sequence"), c.speed(1), z(c.pa("ivs0", "$d")))]), j(30), c.fire(c.direction(19, "sequence"), c.speed(1), z(c.pa("ivs0", "$d")))])]), ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, C), c.Sa()])});
  gls2.ha.dodory = new I.ka({top:c.action([c.repeat(999, [j("40+$rand*20"), b(v, -0.1, 3, function(a) {
    return c.action([c.fire(a, F)])
  })])])});
  gls2.ha["setsuna-1"] = new I.ka({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, B, c.offsetX(0), c.offsetY(30)), j(30), d(5, -40, 40, r, B, c.offsetX(0), c.offsetY(30)), j(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), t), d(3, -3, 3, p(1), t), d(4, -4, 4, p(1.4), t), d(5, -5, 5, p(1.8), t), j(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, r, E, c.offsetX(-110), c.offsetY(-70)), j(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, r, E, c.offsetX(110), 
  c.offsetY(-70)), j(30)])])});
  gls2.ha["love-1-1"] = new I.ka({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, B, c.offsetX(0), c.offsetY(30)), j(30), d(5, -40, 40, r, B, c.offsetX(0), c.offsetY(30)), j(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), t), d(3, -3, 3, p(1), t), d(4, -4, 4, p(1.4), t), d(5, -5, 5, p(1.8), t), j(110)])])});
  gls2.ha.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      P.push(gls2.Pa())
    }
    a = gls2.ha.cf = tm.Hb.kd.qe;
    a.Jg = function(a) {
      return!(a instanceof gls2.Pa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Nh = function(a) {
      var b = P.shift(0);
      if(b) {
        return b.ta = 50, M.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.lc ? (b.scaleX = 1, b.scaleY = 1, b.hd = s) : (a.Be ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.cc ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.hd = k), b.visible = a.visible === s ? s : k, b.lc = !!a.lc, b.Be = !!a.Be, b.cc = !!a.cc, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Th = function(a) {
      return-0 <= a.x && 480 > a.x && -0 <= a.y && 640 > a.y
    };
    a.Dd = 3;
    I.Va.bc.$rank = 0;
    I.Va.bc.$hyperOff = 1
  };
  gls2.ha.erase = function(a, b, c) {
    for(var d = [].concat(M), f = 0, h = d.length;f < h;f++) {
      if(a) {
        var j = gls2.Eh(!!b);
        j.setPosition(d[f].x, d[f].y);
        c && (j.xd = k)
      }
      d[f].Ba()
    }
  };
  gls2.ha.oe = function() {
    for(var a = [].concat(M), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Pa = tm.createClass({superClass:tm.display.Sprite, ta:0, lc:s, Be:s, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      P.push(this);
      var a = M.indexOf(this);
      -1 !== a && M.splice(a, 1)
    })
  }, update:function() {
    this.lc && (this.rotation += 15)
  }, Ba:function() {
    var a = gls2.Pa.se().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Pa.se = function() {
    gls2.Pa.se.wg === l && (gls2.Pa.se.wg = gls2.Ya(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Pa.se.wg.clone()
  };
  gls2.Pa.se.wg = l;
  var P = [], M = gls2.Pa.pb = []
})();
gls2.la = {};
gls2.la.clamp = function(b, a, f) {
  return b < a ? a : b > f ? f : b
};
gls2.la.DEG_TO_RAD = Math.PI / 180;
gls2.la.RAD_TO_DEG = 180 / Math.PI;
gls2.la.degToRad = function(b) {
  return b * gls2.la.DEG_TO_RAD
};
gls2.la.radToDeg = function(b) {
  return b * gls2.la.RAD_TO_DEG
};
gls2.la.rand = function(b, a) {
  return window.Math.floor(window.Math.random() * (a - b + 1)) + b
};
gls2.la.randf = function(b, a) {
  return window.Math.random() * (a - b) + b
};
gls2.la.magnitude = function() {
  return Math.sqrt(gls2.la.magnitudeSq.apply(l, arguments))
};
gls2.la.magnitudeSq = function() {
  for(var b = 0, a = 0, f = arguments.length;a < f;++a) {
    b += arguments[a] * arguments[a]
  }
  return b
};
gls2.la.inside = function(b, a, f) {
  return b >= a && b <= f
};

