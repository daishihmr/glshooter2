/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(b) {
  throw b;
}
var i = void 0, j = !0, k = null, l = !1;
function n() {
  return function() {
  }
}
var q = {bh:this};
(function() {
  function b(a, b) {
    for(var f = 0, g = a.length;f < g;f++) {
      if(a[f].label == b) {
        return a[f]
      }
    }
  }
  q.ha = function(a) {
    this.type = "none";
    this.root = this;
    this.Ka = [];
    this.Ld = [];
    this.Ud = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof q.hb ? this.Ka.push(a[b]) : a[b] instanceof q.Zb ? this.Ld.push(a[b]) : a[b] instanceof q.Hc && this.Ud.push(a[b]))
      }
      a = 0;
      for(b = this.Ka.length;a < b;a++) {
        this.Ka[a].ob(this)
      }
      a = 0;
      for(b = this.Ld.length;a < b;a++) {
        this.Ld[a].ob(this)
      }
      a = 0;
      for(b = this.Ud.length;a < b;a++) {
        this.Ud[a].ob(this)
      }
    }
  };
  q.ha.prototype.jg = function(a) {
    return b(this.Ka, a)
  };
  q.ha.prototype.Bi = function() {
    for(var a = [], b = 0, f = this.Ka.length;b < f;b++) {
      var g = this.Ka[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  q.ha.prototype.ri = function(a) {
    var b;
    if(b = this.jg(a)) {
      return b
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  q.ha.prototype.si = function(a) {
    return b(this.Ld, a)
  };
  q.ha.prototype.ti = function(a) {
    var b;
    if(b = this.si(a)) {
      return b
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  q.ha.prototype.vi = function(a) {
    return b(this.Ud, a)
  };
  q.ha.prototype.wi = function(a) {
    var b;
    if(b = this.vi(a)) {
      return b
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  q.Zb = function() {
    this.root = this.label = k;
    this.direction = new q.Nb(0);
    this.speed = new q.Pb(1);
    this.Ka = [];
    this.Ba = {};
    this.pa = {}
  };
  q.Zb.prototype.clone = function(a) {
    var b = new q.Zb;
    b.label = this.label;
    b.root = this.root;
    b.Ka = this.Ka;
    b.direction = new q.Nb(a.Fa(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new q.Pb(a.Fa(this.speed.value));
    b.speed.type = this.speed.type;
    b.Ba = this.Ba;
    b.pa = a.pa;
    return b
  };
  q.Zb.prototype.ob = function(a) {
    this.root = a;
    for(var b = 0, f = this.Ka.length;b < f;b++) {
      this.Ka[b].ob(a)
    }
  };
  q.vd = function(a) {
    this.root = k;
    this.label = a;
    this.Ha = []
  };
  q.vd.prototype.clone = function(a) {
    var b = a.pa;
    a.pa = a.He(this.Ha);
    var f = this.root.ti(this.label).clone(a);
    a.pa = b;
    return f
  };
  q.vd.prototype.ob = function(a) {
    this.root = a
  };
  q.Ja = function() {
    this.ab = ""
  };
  q.Ja.prototype.ob = function(a) {
    this.root = a
  };
  q.hb = function() {
    this.ab = "action";
    this.root = this.label = k;
    this.tb = [];
    this.Ha = []
  };
  q.hb.prototype = new q.Ja;
  q.hb.prototype.ob = function(a) {
    this.root = a;
    for(var b = 0, f = this.tb.length;b < f;b++) {
      this.tb[b].ob(a)
    }
  };
  q.hb.prototype.clone = function() {
    var a = new q.hb;
    a.label = this.label;
    a.root = this.root;
    a.tb = this.tb;
    return a
  };
  q.Gc = function(a) {
    this.ab = "actionRef";
    this.label = a;
    this.root = k;
    this.Ha = []
  };
  q.Gc.prototype = new q.Ja;
  q.Gc.prototype.clone = function() {
    var a = new q.hb;
    a.root = this.root;
    a.tb.push(this);
    return a
  };
  q.Hc = function() {
    this.ab = "fire";
    this.wa = this.speed = this.direction = this.root = this.label = k;
    this.Ba = new q.zd
  };
  q.Hc.prototype = new q.Ja;
  q.Hc.prototype.ob = function(a) {
    this.root = a;
    this.wa && this.wa.ob(a)
  };
  q.qe = function(a) {
    this.ab = "fireRef";
    this.label = a;
    this.Ha = []
  };
  q.qe.prototype = new q.Ja;
  q.xd = function() {
    this.ab = "changeDirection";
    this.direction = new q.Nb;
    this.Wa = 0
  };
  q.xd.prototype = new q.Ja;
  q.yd = function() {
    this.ab = "changeSpeed";
    this.speed = new q.Pb;
    this.Wa = 0
  };
  q.yd.prototype = new q.Ja;
  q.ud = function() {
    this.ab = "accel";
    this.Ib = new q.te;
    this.Lb = new q.Fe;
    this.Wa = 0
  };
  q.ud.prototype = new q.Ja;
  q.Ed = function(a) {
    this.ab = "wait";
    this.value = a || 0
  };
  q.Ed.prototype = new q.Ja;
  q.Ee = function() {
    this.ab = "vanish"
  };
  q.Ee.prototype = new q.Ja;
  q.Cd = function() {
    this.ab = "repeat";
    this.Jg = 0;
    this.action = k;
    this.Ha = []
  };
  q.Cd.prototype = new q.Ja;
  q.Cd.prototype.ob = function(a) {
    this.root = a;
    this.action && this.action.ob(a)
  };
  q.oe = function(a, b) {
    this.ab = "bind";
    this.ij = a;
    this.pi = b
  };
  q.oe.prototype = new q.Ja;
  q.ze = function(a, b) {
    this.ab = "notify";
    this.li = a;
    this.Ha = b || k
  };
  q.ze.prototype = new q.Ja;
  q.Zg = new q.Ja;
  q.Nb = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  q.Pb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  q.te = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.Fe = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.zd = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.va = j;
    a.va !== i && (this.va = !!a.va)
  };
  q.Kf = function(a) {
    this.value = a || 0
  };
  q.Lf = function(a) {
    this.value = a || 0
  };
  q.yf = function(a) {
    this.value = !!a
  }
})();
q.ya = function(b) {
  this.Qf = b;
  this.Fd = [];
  this.cc = -1;
  this.Oa = k;
  this.pa = {}
};
q.ya.prototype.next = function() {
  this.cc += 1;
  if(this.Oa !== k) {
    var b = this.Oa.tb[this.cc];
    if(b !== i) {
      if(b instanceof q.hb) {
        return this.$c(), this.Oa = b, this.pa = this.Ge(), this.next()
      }
      if(b instanceof q.Gc) {
        return this.$c(), this.Oa = this.Qf.ri(b.label), this.pa = this.He(b.Ha), this.next()
      }
      if(b instanceof q.Cd) {
        return this.pa.Sc = 0, this.pa.wg = this.Fa(b.Jg) | 0, this.$c(), this.Oa = b.action.clone(), this.pa = this.Ge(), this.next()
      }
      if(b instanceof q.Hc) {
        var a = new q.Hc;
        a.wa = b.wa.clone(this);
        b.direction !== k && (a.direction = new q.Nb(this.Fa(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== k && (a.speed = new q.Pb(this.Fa(b.speed.value)), a.speed.type = b.speed.type);
        a.Ba = new q.zd;
        a.Ba.offsetX = this.Fa(b.Ba.offsetX);
        a.Ba.offsetY = this.Fa(b.Ba.offsetY);
        a.Ba.va = b.Ba.va;
        return a
      }
      return b instanceof q.qe ? (this.$c(), this.Oa = new q.hb, this.Oa.tb = [this.Qf.wi(b.label)], this.pa = this.He(b.Ha), this.next()) : b instanceof q.xd ? (a = new q.xd, a.direction.type = b.direction.type, a.direction.value = this.Fa(b.direction.value), a.Wa = this.Fa(b.Wa), a) : b instanceof q.yd ? (a = new q.yd, a.speed.type = b.speed.type, a.speed.value = this.Fa(b.speed.value), a.Wa = this.Fa(b.Wa), a) : b instanceof q.ud ? (a = new q.ud, a.Ib.type = b.Ib.type, a.Ib.value = this.Fa(b.Ib.value), 
      a.Lb.type = b.Lb.type, a.Lb.value = this.Fa(b.Lb.value), a.Wa = this.Fa(b.Wa), a) : b instanceof q.Ed ? new q.Ed(this.Fa(b.value)) : b instanceof q.Ee ? b : b instanceof q.oe ? (this.pa["$" + b.ij] = this.Fa(b.pi), q.Zg) : b instanceof q.ze ? b : k
    }
    this.$h();
    if(this.Oa === k) {
      return k
    }
    if((b = this.Oa.tb[this.cc]) && "repeat" == b.ab) {
      this.pa.Sc++, this.pa.Sc < this.pa.wg && (this.$c(), this.Oa = b.action.clone(), this.pa = this.Ge())
    }
    return this.next()
  }
  return k
};
q.ya.prototype.$c = function() {
  this.Fd.push({action:this.Oa, cursor:this.cc, scope:this.pa});
  this.cc = -1
};
q.ya.prototype.$h = function() {
  var b = this.Fd.pop();
  b ? (this.cc = b.cursor, this.Oa = b.action, this.pa = b.scope) : (this.cc = -1, this.Oa = k, this.pa = {})
};
q.ya.prototype.Fa = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.pa[b]) || (a = q.ya.Ra[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in q.ya.Ra) {
    q.ya.Ra.hasOwnProperty(d) && (a[d] = q.ya.Ra[d])
  }
  for(d in this.pa) {
    this.pa.hasOwnProperty(d) && (a[d] = this.pa[d])
  }
  a.$rand = Math.random();
  (d = this.Fd[this.Fd.length - 1]) && (a.$loop = {index:d.scope.Sc, count:d.scope.Sc + 1, first:0 === d.scope.Sc, last:d.scope.Sc + 1 >= d.scope.wg});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
q.ya.prototype.He = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.Fa(b[d])
    }
  }else {
    for(d in this.pa) {
      this.pa.hasOwnProperty(d) && (a[d] = this.pa[d])
    }
  }
  return a
};
q.ya.prototype.Ge = function() {
  var b = {}, a;
  for(a in this.pa) {
    this.pa.hasOwnProperty(a) && (b[a] = this.pa[a])
  }
  return b
};
q.ha.prototype.Te = function(b) {
  var a = new q.ya(this);
  if(b = this.jg(b)) {
    a.Oa = b
  }
  return a
};
q.Zb.prototype.Te = function() {
  var b = new q.ya(this.root), a = new q.hb;
  a.root = this.root;
  a.tb = this.Ka;
  b.Oa = a;
  b.pa = this.pa;
  return b
};
q.ya.Ra = {};
q.ta = function(b) {
  b = b || "";
  for(var a in q.ta) {
    q.ta.hasOwnProperty(a) && (q.bh[b + a] = q.ta[a])
  }
};
q.ta.action = function(b) {
  if(0 < arguments.length) {
    for(var a = 0, d = arguments.length;a < d;a++) {
      arguments[a] instanceof Function && (arguments[a] = arguments[a]())
    }
  }
  if(b instanceof Array) {
    a = 0;
    for(d = b.length;a < d;a++) {
      b[a] instanceof Function && (b[a] = b[a]())
    }
  }
  var f = new q.hb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof q.Ja)
    }) && h(Error("argument type error.")), f.tb = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof q.Ja ? f.tb[a] = arguments[a] : h(Error("argument type error."))
    }
  }
  return f
};
q.ta.Pa = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.Gc(b);
  if(a instanceof Array) {
    f.Ha = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ha.push(arguments[d])
    }
  }
  return f
};
q.ta.wa = function(b, a, d, f) {
  for(var g = 0, m = arguments.length;g < m;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  m = new q.Zb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Nb ? m.direction = arguments[g] : arguments[g] instanceof q.Pb ? m.speed = arguments[g] : arguments[g] instanceof q.hb ? m.Ka.push(arguments[g]) : arguments[g] instanceof q.Gc ? m.Ka.push(arguments[g]) : arguments[g] instanceof Array ? m.Ka.push(q.ta.action(arguments[g])) : arguments[g] instanceof Object ? m.Ba = arguments[g] : "string" === typeof arguments[g] && (m.label = arguments[g])
  }
  return m
};
q.ta.oj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.vd(b);
  if(a instanceof Array) {
    f.Ha = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ha.push(arguments[d])
    }
  }
  return f
};
q.ta.fire = function(b, a, d, f) {
  for(var g = 0, m = arguments.length;g < m;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  m = new q.Hc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Nb ? m.direction = arguments[g] : arguments[g] instanceof q.Pb ? m.speed = arguments[g] : arguments[g] instanceof q.Zb ? m.wa = arguments[g] : arguments[g] instanceof q.vd ? m.wa = arguments[g] : arguments[g] instanceof q.zd ? m.Ba = arguments[g] : arguments[g] instanceof q.Kf ? m.Ba.offsetX = arguments[g].value : arguments[g] instanceof q.Lf ? m.Ba.offsetY = arguments[g].value : arguments[g] instanceof q.yf && (m.Ba.va = arguments[g].value)
  }
  m.wa === i && h(Error("bullet (or bulletRef) is required."));
  return m
};
q.ta.sj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.qe(b);
  if(a instanceof Array) {
    f.Ha = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ha.push(arguments[d])
    }
  }
  return f
};
q.ta.pj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("direction is required."));
  a === i && h(Error("term is required."));
  d = new q.xd;
  d.direction = b instanceof q.Nb ? b : new q.Nb(b);
  d.Wa = a;
  return d
};
q.ta.Md = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("speed is required."));
  a === i && h(Error("term is required."));
  d = new q.yd;
  d.speed = b instanceof q.Pb ? b : new q.Pb(b);
  d.Wa = a;
  return d
};
q.ta.nj = function(b, a, d) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new q.ud;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof q.te ? g.Ib = b : arguments[f] instanceof q.Fe ? g.Lb = a : g.Wa = arguments[f]
  }
  g.Ib === i && g.Lb === i && h(Error("horizontal or vertical is required."));
  g.Wa === i && h(Error("term is required."));
  return g
};
q.ta.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && h(Error("value is required."));
  return new q.Ed(b)
};
q.ta.yb = function() {
  return new q.Ee
};
q.ta.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("times is required."));
  a === i && h(Error("action is required."));
  f = new q.Cd;
  f.Jg = b;
  if(a instanceof q.hb || a instanceof q.Gc) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = q.ta.action(a)
    }else {
      for(var g = [], d = 1;d < arguments.length;d++) {
        g.push(arguments[d])
      }
      f.action = q.ta.action(g)
    }
  }
  return f
};
q.ta.kb = function(b, a) {
  return new q.oe(b, a)
};
q.ta.zj = function(b, a) {
  return new q.ze(b, a)
};
q.ta.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Nb(b);
  a !== i && (d.type = a);
  return d
};
q.ta.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Pb(b);
  a && (d.type = a);
  return d
};
q.ta.Ib = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.te(b);
  a && (d.type = a);
  return d
};
q.ta.Lb = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Fe(b);
  a && (d.type = a);
  return d
};
q.ta.rj = function(b) {
  return new q.zd(b)
};
q.ta.offsetX = function(b) {
  return new q.Kf(b)
};
q.ta.offsetY = function(b) {
  return new q.Lf(b)
};
q.ta.va = function(b) {
  return new q.yf(b)
};
tm.$a = tm.$a || {};
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
  tm.$a.pc = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.Nf = a
  }, Od:function(a, b) {
    var d = this.Nf.Bi();
    if(b === i && 0 < d.length) {
      for(var f = [], E = 0, s = d.length;E < s;E++) {
        f[f.length] = this.Of(a, d[E])
      }
      for(var r = function() {
        if(!r.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          r.Qe == f.length && (r.dd = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, E = f.length;E--;) {
        f[E].de = r
      }
      r.Qe = 0;
      r.Zf = function() {
        this.Qe++
      };
      r.Qe = 0;
      r.dd = l;
      r.Ye = j;
      r.stop = l;
      return r
    }
    return this.Of(a, b)
  }, Of:function(a, b) {
    function d() {
      if(!d.stop) {
        d.ga += 1;
        this.ga = d.ga;
        var a = d.Nd, b = d.Zh;
        if(b) {
          if(d.ga < d.Oe ? d.direction += d.Nc : d.ga === d.Oe && (d.direction = d.fc), d.ga < d.Pe ? d.speed += d.td : d.ga === d.Pe && (d.speed = d.Wc), d.ga < d.Ke ? (d.Dc += d.Id, d.Fc += d.Jd) : d.ga === d.Ke && (d.Dc = d.Gd, d.Fc = d.Hd), this.x += Math.cos(d.direction) * d.speed * a.Ec, this.y += Math.sin(d.direction) * d.speed * a.Ec, this.x += d.Dc * a.Ec, this.y += d.Fc * a.Ec, a.Ze(this)) {
            if(a.mc || this.mc) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.ga < d.Kg || d.dd)) {
              for(var f;f = d.Lg.next();) {
                switch(f.ab) {
                  case "fire":
                    b.Wh.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Kg = "number" === typeof f.value ? d.ga + f.value : 0 !== (a = ~~f.value) ? d.ga + a : d.ga + eval(f.value);
                    return;
                  case "changeDirection":
                    b.Rh.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.Sh.call(this, f, d);
                    break;
                  case "accel":
                    b.Ph.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.Xh.call(this, f)
                }
              }
              d.dd = j;
              d.de ? d.de.Zf() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.dd = j, d.de ? d.de.Zf() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.$a.pc.ed, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b = b || "top";
    "string" === typeof b ? d.Lg = this.Nf.Te(b) : b instanceof q.Zb ? d.Lg = b.Te() : (window.console.error(a, b), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Zh = this;
    d.Nd = a;
    d.Kg = -1;
    d.dd = l;
    d.direction = 0;
    d.sg = 0;
    d.speed = 0;
    d.ug = 0;
    d.Dc = 0;
    d.Fc = 0;
    d.Nc = 0;
    d.fc = 0;
    d.Oe = -1;
    d.td = 0;
    d.Wc = 0;
    d.Pe = -1;
    d.Id = 0;
    d.Gd = 0;
    d.Jd = 0;
    d.Hd = 0;
    d.Ke = -1;
    d.ga = -1;
    d.stop = l;
    d.Ye = j;
    return d
  }, Vh:function(a) {
    function b() {
      b.stop || (this.x += b.dg, this.y += b.eg, b.Nd.Ze(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.$a.pc.ed, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b.Nd = a;
    b.direction = 0;
    b.speed = 0;
    b.dg = 0;
    b.eg = 0;
    b.stop = l;
    b.Ye = j;
    return b
  }, Wh:function(b, d, f, C) {
    if(this.Ui === i || this.gc) {
      var E = {label:b.wa.label}, s;
      for(s in b.wa.Ba) {
        E[s] = b.wa.Ba[s]
      }
      if(E = d.Yf(E)) {
        C = (s = 0 === b.wa.Ka.length) ? C.Vh(d) : C.Od(d, b.wa);
        var r = this, A = {x:this.x + b.Ba.offsetX, y:this.y + b.Ba.offsetY};
        f.sg = C.direction = function(s) {
          var p = eval(s.value) * Math.DEG_TO_RAD;
          switch(s.type) {
            case "aim":
              return d.target ? b.Ba.va ? a(A, d.target) + p : a(r, d.target) + p : p - Math.PI / 2;
            case "absolute":
              return p - Math.PI / 2;
            case "relative":
              return f.direction + p;
            default:
              return f.sg + p
          }
        }(b.direction || b.wa.direction);
        f.ug = C.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.ug + b;
            default:
              return b
          }
        }(b.speed || b.wa.speed);
        E.x = A.x;
        E.y = A.y;
        s && (C.dg = Math.cos(C.direction) * C.speed * d.Ec, C.eg = Math.sin(C.direction) * C.speed * d.Ec);
        E.mc = !!E.mc;
        if(d.mc || E.mc) {
          E.rotation = (C.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, E.speed = C.speed
        }
        E.addEventListener("enterframe", C);
        d.Sf ? d.Sf.addChild(E) : this.parent && this.parent.addChild(E)
      }
    }
  }, Rh:function(d, f, t) {
    var C = eval(d.direction.value) * Math.DEG_TO_RAD, E = eval(d.Wa);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        t.fc = a(this, d) + C;
        t.Nc = b(t.fc - t.direction) / E;
        break;
      case "absolute":
        t.fc = C - Math.PI / 2;
        t.Nc = b(t.fc - t.direction) / E;
        break;
      case "relative":
        t.fc = t.direction + C;
        t.Nc = b(t.fc - t.direction) / E;
        break;
      case "sequence":
        t.Nc = C, t.fc = t.direction + t.Nc * (E - 1)
    }
    t.Oe = t.ga + E
  }, Sh:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.Wa);
    switch(a.speed.type) {
      case "absolute":
        b.Wc = d;
        b.td = (b.Wc - b.speed) / f;
        break;
      case "relative":
        b.Wc = d + b.speed;
        b.td = (b.Wc - b.speed) / f;
        break;
      case "sequence":
        b.td = d, b.Wc = b.speed + b.td * f
    }
    b.Pe = b.ga + f
  }, Ph:function(a, b) {
    var d = eval(a.Wa);
    b.Ke = b.ga + d;
    if(a.Ib) {
      var f = eval(a.Ib.value);
      switch(a.Ib.type) {
        case "absolute":
        ;
        case "sequence":
          b.Id = (f - b.Dc) / d;
          b.Gd = f;
          break;
        case "relative":
          b.Id = f, b.Gd = (f - b.Dc) * d
      }
    }else {
      b.Id = 0, b.Gd = b.Dc
    }
    if(a.Lb) {
      switch(f = eval(a.Lb.value), a.Lb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Jd = (f - b.Fc) / d;
          b.Hd = f;
          break;
        case "relative":
          b.Jd = f, b.Hd = (f - b.Fc) * d
      }
    }else {
      b.Jd = 0, b.Hd = b.Fc
    }
  }, Xh:function(a) {
    var b = tm.event.Event(a.li);
    if(a.Ha) {
      for(var d in a.Ha) {
        b[d] = a.Ha[d]
      }
    }
    this.dispatchEvent(b)
  }});
  var d = function() {
    var a = tm.graphics.Canvas();
    a.resize(8, 8);
    a.setTransformCenter();
    a.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    a.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return tm.asset.Texture(a.canvas.toDataURL())
  }();
  tm.$a.ii = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = k;
  tm.$a.cg = function(a) {
    if(f === k) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.$a.qj = function() {
    return j
  };
  tm.$a.pc.ed = {Yf:tm.$a.ii, Ze:tm.$a.cg, Bj:0, mc:l, Ec:2, target:k};
  q.ha.prototype.Od = function(a) {
    return tm.$a.pc(this).Od(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(n());
tm.main(function() {
  ba("#canvas2d").run()
});
var u = k, v, ca, w, z, B, F, da, ea, ga, ha, ia, ja, ka, la, G, J, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, ya, za, Ba, Ca, Da, Ea, Fa, K, L, Ga, Ha, M, P, Ia, Ja, S, ba = tm.createClass({superClass:tm.display.CanvasApp, Yd:0, vj:0, bd:3, Cc:3, fg:1, ca:k, init:function(b) {
  u !== k && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  u = this;
  this.resize(480, 640).fitWindow();
  this.fps = v.ah;
  this.background = "rgba(0,0,0,0)";
  this.vf = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm4:"assets2/nc80728.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/nc44202.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", 
  "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", 
  "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.Yh();
    return ca()
  }.bind(this)}))
}, update:function() {
  for(var b = [].concat(this.vf), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.vf.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Yh:function() {
  w.setup(12345);
  ["tex_stage1", "tex_tank1"].forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawTexture(a, 0, 0);
    d = d.getBitmap();
    d.filter({calc:function(a, b, d, f, E) {
      E.setPixelIndex(b, a[0], 0, 0)
    }});
    var f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(b + "Red", f)
  });
  z.setup();
  B.setup();
  this.ca = F()
}, ni:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Yd, "")
}, vf:k, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Ka(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
}
;v = {zh:l, ah:60, wh:0, Cf:[1E9, 1E10], yh:3E3, Ef:3, Df:[3, 2, 1], Og:[6, 4, 2], Mf:1, vh:0.1, Ff:1, xh:0.25, jj:1, kj:0.25, Ng:2, nh:0.0050, jh:0.01, kh:0.0010, fh:0.015, gh:0.0020, ph:0.0010, rh:0.01, oh:0, mh:0, lh:0, ih:0.03, hh:0.0040, qh:0, sh:0, th:0.75, re:10, Ad:800, eh:0.25, dh:0.1, uh:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], Vg:0.02, Wg:0.5, Ug:0.01, Bf:1E3, Rg:10, Pg:1, Nh:1E3, Mh:100, Lh:0, Kh:0, Jh:1E3, Ih:100, $g:0.5, Sg:4, Xg:22500, Qg:50, Ch:10, xf:l, Mg:j, Gh:1E3, Hh:2E3, Dh:4E3, 
Eh:1E4, Fh:2E7};
(function() {
  var b = k, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  da = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, fb:0, Tb:j, ad:j, Tc:l, ca:k, speed:0, cb:k, Mc:k, yg:k, Zd:k, Wb:k, Ue:k, Rb:k, Ve:k, We:k, frame:0, init:function(a, f, g) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = f;
    this.style = g;
    tm.$a.pc.ed.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Mc = this.yg = ea(f, 100);
    this.Zd = ea(3, 100);
    this.Wb = ga(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Wb.visible = l;
    this.Uh();
    this.cb = this.Th();
    1 === this.style && (this.cb = [this.cb[1], this.cb[2]]);
    this.Rb = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(g = this.cb.length;f < g;f++) {
      var m = this.cb[f];
      ha(this, m).setPosition(m.x, m.y).addChildTo(this.Rb)
    }
    this.Ji = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Ji.blendMode = "lighter";
    this.Ve = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Ve.blendMode = "lighter";
    this.Ve.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.za && !a.ua
    };
    this.We = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.We.blendMode = "lighter";
    this.We.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.za && !a.ua
    };
    this.hd = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.hd.blendMode = "lighter";
    this.hd.rotation = -90;
    this.hd.strokeStyle = "rgba(180,180,255,0.4)";
    this.hd.update = function() {
      this.visible = a.ua
    };
    this.hd.draw = function(b) {
      b.lineCap = "round";
      var f = a.Qc / v.Ad;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, l);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, l);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, l)
    };
    this.Di = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Di.update = function() {
      this.visible = a.ua
    };
    b === k && (b = ia(this.ca.ja))
  }, Th:function() {
    if(0 === this.type) {
      return[{x:0, yc:0, y:40, d:0, pb:j, lb:-0.7, v:j}, {x:0, yc:0, y:40, d:0, pb:j, lb:0.5, v:j}, {x:0, yc:0, y:40, d:0, pb:j, lb:-0.5, v:j}, {x:0, yc:0, y:40, d:0, pb:j, lb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, pb:l, lb:-0.7, v:j}, {x:-40, y:40, d:0.1, pb:l, lb:-0.5, v:j}, {x:40, y:40, d:0.1, pb:j, lb:0.5, v:j}, {x:70, y:20, d:0.1, pb:j, lb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, pb:l, lb:-0.7, v:j}, {x:-30, y:20, d:0.4, pb:l, lb:-0.5, v:j}, {x:30, y:20, d:0.4, pb:j, lb:0.5, v:j}, {x:60, y:40, d:0.6, pb:j, lb:0.7, v:j}]
    }
  }, Uh:function() {
    this.Ue = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Ue.setFrameIndex(5);
    this.Ue.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, kc:-1, Pc:l, mb:l, update:function(d) {
    this.visible = this.Tc ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.Tb) {
      var g = f.getKeyAngle();
      g !== k && (g = a[g], this.x += g.x * this.speed * (this.mb ? 0.5 : 1), this.y += g.y * this.speed * (this.mb ? 0.5 : 1));
      this.x = T(this.x, 15, 465);
      this.y = T(this.y, 15, 625);
      var m = f.getKey("c") && this.ad, g = f.getKey("z") && this.ad;
      this.kc = m ? this.kc + 1 : this.kc - 1;
      this.kc = T(this.kc, -1, 10);
      this.mb = g && m || 10 === this.kc;
      m = this.ca.ua ? 3 : 5;
      this.Pc = !this.mb && (0 <= this.kc || g) && 0 === d.frame % m;
      g && (this.kc = 0);
      this.Wb.x = this.x;
      this.Wb.y = this.y - 40;
      f.getKeyDown("x") && this.ad && (0 < this.ca.za && !this.ca.ua ? (this.ca.ej(), ja(this).addChildTo(this.ca)) : !this.ca.Rc && 0 < this.ca.eb && (this.bb = T(this.bb - 2, 0, 1), q.ya.Ra.$rank = T(q.ya.Ra.$rank - 0.02, 0, 1), ka(this, this.ca).setPosition(T(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.mb = this.Pc = l
    }
    this.Pc && (g = Math.sin(0.2 * d.frame), m = this.Mc.fire(this.x - 7 - 6 * g, this.y - 5, -90), m !== k && m.addChildTo(this.ca), m = this.Mc.fire(this.x + 7 + 6 * g, this.y - 5, -90), m !== k && m.addChildTo(this.ca));
    if(this.mb) {
      g = 0;
      for(m = this.cb.length;g < m;g++) {
        this.cb[g].v = l
      }
      this.Rb.rotation = 0
    }else {
      this.Wb.visible = l;
      g = 0;
      for(m = this.cb.length;g < m;g++) {
        this.cb[g].v = j
      }
    }
    this.hi(f);
    this.Qh(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = d.frame
  }, Ub:function() {
    this.mb = this.Pc = l;
    this.ca.Qd();
    this.ca.La = 0;
    this.ca.Ga = 0;
    this.ca.Aa = 0
  }, hi:function(a) {
    if(0 === this.type) {
      for(a = this.cb.length;this.cb[--a] !== i;) {
        var b = this.cb[a];
        0 === a ? b.x = b.yc + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.yc + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.yc + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.yc + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Rb, b.rotation = this.mb ? 0 : this.Tb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Tb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, Qh:function(a, b) {
    this.Tb && a.getKey("left") ? this.fb = T(this.fb - 0.2, -3, 3) : this.Tb && a.getKey("right") ? this.fb = T(this.fb + 0.2, -3, 3) : 0 > this.fb ? this.fb = T(this.fb + 0.2, -3, 3) : 0 < this.fb && (this.fb = T(this.fb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.fb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.fb) : 2 === this.type && this.setFrameIndex(31 + ~~this.fb);
    return b
  }});
  ha = tm.createClass({superClass:tm.display.AnimationSprite, wc:k, da:k, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.wc = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.pb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.wc.v) {
      this.x = this.wc.x * (this.da.ca.ua ? 1.5 : 1);
      this.y = this.wc.y * (this.da.ca.ua ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.wc.d * this.wc.lb);
      var f = this.parent.localToGlobal(this);
      this.wc.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.ca);
      this.da.Pc && (f = this.da.Mc.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== k && f.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = k;
  la = tm.createClass({superClass:tm.display.Sprite, speed:0, uc:0, di:1, pg:0, Sa:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.uc = v.Mf;
    b === k && (b = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.sd(a)
  }, update:function() {
    this.x += this.nc;
    this.y += this.Mb;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, sd:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Wd:function(a) {
    for(var f = 0;f < a;f++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = U(2, 8), t = 2 * Math.random() * Math.PI;
      g.ra = Math.cos(t) * m;
      g.sa = Math.sin(t) * m;
      g.scaleX = g.scaleY = (U(0.1, 0.5) + U(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.ra;
        this.y += this.sa;
        this.ra *= 0.9;
        this.sa *= 0.9
      })
    }
  }});
  la.cd = function() {
    for(var b = [].concat(a), f = 0, g = b.length;f < g;f++) {
      b[f].remove()
    }
  };
  var a = la.Qa = [];
  ea = tm.createClass({jc:k, og:l, init:function(b, f) {
    this.og = 3 === b;
    this.jc = [];
    for(var g = 0;g < f;g++) {
      var m = la(b), t = this;
      m.addEventListener("added", function() {
        this.na = v.Ch;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        t.jc.push(this)
      });
      this.og && m.addEventListener("enterframe", function(a) {
        this.setScale((this.di + this.pg) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.jc.push(m)
    }
  }, fire:function(a, b, g) {
    var m = this.jc.pop();
    if(m === i) {
      return k
    }
    var t = La(g);
    m.nc = Math.cos(t) * m.speed;
    m.Mb = Math.sin(t) * m.speed;
    m.setPosition(a, b);
    m.rotation = g + 90;
    return m
  }, Vc:function(a) {
    for(var b = this.jc.length;this.jc[--b] !== i;) {
      this.jc[b].uc = v.Mf + v.vh * a, this.jc[b].pg = 0.2 * a
    }
  }})
})();
ga = tm.createClass({superClass:tm.display.Sprite, da:k, ca:k, Db:0, frame:0, Ig:k, color:k, Vf:0, Me:0, ei:l, head:k, kg:k, Uf:k, Sa:j, uc:v.Ff, Uc:k, init:function(b, a) {
  this.da = b;
  this.ca = b.ca;
  this.Vf = 0 === this.da.style ? 1 : 1.2;
  this.Me = 0 === this.da.style ? 50 : 75;
  var d = this;
  this.Ig = a;
  this.superInit(a.redBody, this.Me, 100);
  this.boundingHeightBottom = 1;
  this.Cj = 0;
  this.origin.y = 1;
  var f = this.Uf = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.kg = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.Db - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.Db
  };
  this.sd(["red", "green", "blue"][this.da.type]);
  this.Vc(0)
}, sd:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.Ig[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Uf.gotoAndPlay(this.color);
  this.kg.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Uc = k;
  return this
}, Vc:function(b) {
  this.boundingWidth = this.width = this.Me + 30 * b / v.re;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.uc = this.Vf * v.Ff + v.xh * b;
  0 === b ? this.sd(["red", "green", "blue"][this.da.type]) : this.sd("hyper")
}, Wd:function(b, a) {
  this.Uc === k && this.$f();
  a = a || this.Db;
  for(var d = 0;d < b;d++) {
    var f = this.Uc.clone().setPosition(this.x, a).addChildTo(this.ca), g = U(8, 14), m = U(0, Math.PI);
    f.ra = Math.cos(m) * g;
    f.sa = Math.sin(m) * g;
    f.scaleX = f.scaleY = (U(0.5, 1.5) + U(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.ra;
      this.y += this.sa;
      this.ra *= 0.95;
      this.sa *= 0.95
    })
  }
}, zi:function(b, a, d) {
  this.Uc === k && this.$f();
  for(var f = 0;f < b;f++) {
    var g = this.Uc.clone().setPosition(a, d).addChildTo(this.ca), m = U(12, 20), t = U(0, Math.PI);
    g.ra = Math.cos(t) * m;
    g.sa = Math.sin(t) * m;
    g.scaleX = g.scaleY = (U(1, 3) + U(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.ra;
      this.y += this.sa;
      this.ra *= 0.95;
      this.sa *= 0.95
    })
  }
}, $f:function() {
  this.Uc = "hyper" === this.color ? G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.da.mb) ? (this.Db = Math.max(0, this.Db - 40), this.height = this.y - this.Db, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Db = this.y - 40;
  this.ei = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, uj:function() {
  return this.Db
}, $i:function(b) {
  this.Db = b;
  this.head.update()
}});
ga.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.Db
});
(function() {
  ka = tm.createClass({superClass:tm.app.Object2D, Sa:j, ca:k, init:function(a, d) {
    this.superInit();
    this.da = a;
    this.ca = d;
    this.Eg = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Eg.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Eg));
    this.Rf();
    b === k && (b = G(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ga = 0;
    this.pd = 1;
    this.addEventListener("added", function() {
      this.ca.Rc = j;
      this.da.Tc = j;
      this.ca.eb -= 1;
      this.ca.Xe = l;
      this.ca.Qd();
      this.ca.Ua("drop BOMBER!!", j);
      J("bomb");
      J("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.Rc = l;
      this.da.Tc = l
    })
  }, Rf:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = U(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.pd + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.ga;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.ga += 3.6, this.pd = -1) : (this.b = 8, this.ga += 1.8, this.pd = 1)
  }});
  na = tm.createClass({superClass:ka, init:function(a, b) {
    this.superInit(a, b);
    v.Mg && this.addEventListener("added", function() {
      this.ca.eb = 0
    })
  }, Rf:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = U(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.pd + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.ga;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.ga += 1.8, this.pd = 1)
  }});
  var b = k
})();
oa = tm.createClass({superClass:tm.display.Sprite, nc:0, Mb:0, da:k, ga:0, init:function(b, a, d) {
  this.superInit("bombIcon", 40, 40);
  this.setPosition(b, a);
  this.da = d;
  this.Mb = 1;
  this.nc = 0.5 > w.random() ? -1 : 1;
  this.ga = 0
}, update:function() {
  this.x += this.nc;
  this.y += 2 * this.Mb;
  if(2025 > Ka(this, this.da)) {
    this.da.ca.bi(1), this.remove()
  }else {
    if(3E3 > this.ga) {
      if(30 > this.x || 450 < this.x) {
        this.nc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.Mb *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.ga += 1
}});
B = {setup:function() {
  pa = {};
  B.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  pa.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k, frequency:3}}}, 100, 100));
  B.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  B.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  B.particle16 = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Wd:function(b, a, d) {
  b = B.particle16.clone().setPosition(b, a);
  b.Sa = j;
  b.addChildTo(d);
  d = U(5, 20);
  a = U(Math.PI, 2 * Math.PI);
  b.ra = Math.cos(a) * d;
  b.sa = Math.sin(a) * d;
  b.scaleX = b.scaleY = (U(0.1, 0.5) + U(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.ra;
    this.y += this.sa;
    this.ra *= 0.9;
    this.sa *= 0.9
  })
}, lg:function(b, a, d, f) {
  f = f || 1.8;
  var g = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  g.Sa = j;
  g.addChildTo(d);
  g.image = B.shockwaveImage;
  g.tweener.clear().to({scaleX:f, scaleY:f, alpha:0}, 800, "easeOutQuad").call(function() {
    g.remove()
  })
}, Ai:function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.Sa = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
}, Sd:function(b, a, d, f) {
  J("explode");
  var g = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  g.Sa = j;
  if(f !== i) {
    var m = f.x, t = f.y;
    g.addEventListener("enterframe", function() {
      this.x += m;
      this.y += t;
      m *= 0.99;
      t *= 0.99
    })
  }
  g.addChildTo(d);
  B.lg(b, a, d)
}, oi:function(b, a, d) {
  J("explode");
  var f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.Sa = j;
  f.addChildTo(d);
  f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.Sa = j;
  f.addChildTo(d);
  f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.Sa = j;
  f.addChildTo(d)
}, Gb:function(b, a, d) {
  J("explode2");
  J("explode3");
  for(var f = ~~(Math.random() * Ma.length), g = 0;20 > g;g++) {
    var m = B.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(Ma.at(~~(Ma.length * g / 20) + f), 2);
    m.Sa = j;
    m.addChildTo(d)
  }
  B.lg(b, a, d, 5)
}, hg:function(b, a, d) {
  J("explode2");
  J("explode3");
  for(var f = ~~(Math.random() * Ma.length), g = 0;20 > g;g++) {
    for(var m = 2 * Math.PI * g / 20, t = Math.pow(Ma.at(~~(Ma.length * g / 20) + f), 2), C = 0;3 > C;C++) {
      var E = 4 * t * (C + 1), s = pa.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.ga += 1
      }).setScale(0.3 * (3 - C)).setPosition(b, a).gotoAndPlay();
      s.rotation = 2 * Math.random() * Math.PI;
      s.Sa = j;
      s.ga = 0;
      s.a = m;
      s.v = E;
      s.addChildTo(d)
    }
  }
}};
qa = tm.createClass({superClass:tm.app.Object2D, target:k, Bc:0, angle:0, alpha:2, Sa:j, reverse:l, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.Bc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === k) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        G(60, this.alpha, 0.9).setPosition(Math.cos(a) * this.Bc + this.target.x, Math.sin(a) * this.Bc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.Bc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.Bc || 200 < this.Bc) && this.remove()
  }
}});
ja = tm.createClass({superClass:tm.app.Object2D, target:k, angle:0, Sa:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = G(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + V(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + V(-2, 2)).on("enterframe", function() {
        this.x += this.ra;
        this.y += this.sa
      }).addChildTo(this.target.parent);
      a.ra = 3 * Math.cos(this.angle);
      a.sa = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
ra = tm.createClass({superClass:tm.graphics.Canvas, ca:k, Lc:k, Va:k, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Lc = Na(200);
  this.Va = sa(this)
}, update:function() {
  this.clear();
  this.ca.Sb !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Va.Hb - 20, 470 * this.ca.Sb.na / this.ca.Sb.hc, 20), this.strokeRect(5, this.Va.Hb - 20, 470, 20), this.clear(263.5, this.Va.Hb - 20 + 2, 2, 16), this.clear(52, this.Va.Hb - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.Va.Hb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.La)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.Aa / v.Bf) + 1), this.Va.gd + 192, 22);
  b = [0, 1, 4][this.ca.da.type];
  for(a = 0;a < this.ca.oc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.ya.Ra.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.md + " hit", this.Va.gd + 10, 95);
  0 < ~~this.ca.Aa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.Aa + " HIT!!", 10, 0.5 * -this.Va.Hb + 115));
  0 === this.frame % 2 && (!this.ca.ua && 0 < this.ca.za ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.za, 5, 637)) : this.ca.ua && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Pd, 5, 637)));
  for(a = 0;a < this.ca.eb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.Xe && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Lc.update();
  this.Lc.pf = this.Va.Hb + 5;
  this.Lc.draw(this);
  this.frame += 1
}});
sa = tm.createClass({superClass:tm.app.Object2D, gb:k, gd:0, Hb:0, init:function(b) {
  this.superInit();
  this.gb = b
}});
(function() {
  for(var b = [], a = [], d = 0;3 > d;d++) {
    b[d] = 40 * Math.pow(0.8, d), a[d] = b[d] / 2 * Math.sqrt(3)
  }
  ta = tm.createClass({superClass:tm.graphics.Canvas, qa:k, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.qa = ua();
    this.qa.ja = this;
    this.qa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(d) {
    this.qa.ra = Math.cos(this.qa.direction) * this.qa.speed;
    this.qa.sa = Math.sin(this.qa.direction) * this.qa.speed;
    for(var g = 0;3 > g;g++) {
      for(this.qa.vb[g] += this.qa.ra * Math.pow(0.8, g);3 * b[g] < this.qa.vb[g];) {
        this.qa.vb[g] -= 3 * b[g]
      }
      for(;this.qa.vb[g] < 3 * -b[g];) {
        this.qa.vb[g] += 3 * b[g]
      }
      for(this.qa.wb[g] += this.qa.sa * Math.pow(0.8, g);2 * a[g] < this.qa.wb[g];) {
        this.qa.wb[g] -= 2 * a[g]
      }
      for(;this.qa.wb[g] < 2 * -a[g];) {
        this.qa.wb[g] += 2 * a[g]
      }
    }
    0 === d % 2 && this.draw()
  }, draw:function() {
    this.qa.background !== k ? this.clearColor(this.qa.background, 0, 0) : this.clear();
    for(var d = 0;3 > d;d++) {
      this.lineWidth = 0.3 * Math.pow(0.8, d);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.6 * Math.pow(0.8, d) + ")"}, {offset:1, color:"rgba(255,255,255," + 0.4 * Math.pow(0.8, d) + ")"}]).toStyle();
      this.beginPath();
      for(var g = 0, m = this.qa.vb[d] - 3 * b[d];m < 480 + 3 * b[d];m += 1.5 * b[d]) {
        for(var g = 0 === g ? a[d] : 0, t = this.qa.wb[d] - 2 * a[d] + g;t < 640 + 2 * a[d];t += 2 * a[d]) {
          this.line(m, t, m + b[d], t), this.line(m, t, m - b[d] / 2, t + a[d]), this.line(m, t, m - b[d] / 2, t - a[d])
        }
      }
      this.stroke()
    }
  }});
  ua = tm.createClass({superClass:tm.app.Object2D, vb:0, wb:0, direction:0, speed:0, ra:0, sa:0, background:k, init:function() {
    this.superInit();
    this.vb = [];
    this.wb = [];
    for(var a = 0;3 > a;a++) {
      this.vb[a] = 240, this.wb[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.sa = this.ra = 0
  }})
})();
va = tm.createClass({superClass:tm.display.Sprite, rg:l, ca:k, da:k, Vb:l, Ac:l, sf:l, ra:0, sa:0, init:function(b) {
  this.superInit("star", 20, 20);
  (this.rg = b) && this.setScale(2, 2);
  this.ca = F.Ae;
  this.da = this.ca.da;
  this.addChildTo(this.ca);
  b = 0.5 * w.random() * Math.PI - 0.75 * Math.PI;
  this.ra = 30 * Math.cos(b);
  this.sa = 30 * Math.sin(b)
}, update:function() {
  this.da.mb && (this.Ac = j);
  if(this.da.parent === k) {
    this.Ac = l
  }else {
    if(100 > Ka(this, this.da)) {
      this.ca.Ki(this);
      this.remove();
      return
    }
    1E4 > Ka(this, this.da) && (this.Ac = j);
    if(this.sf && this.Ac) {
      var b = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 10 * Math.cos(b);
      this.y += 10 * Math.sin(b)
    }else {
      this.sf || (this.x += this.ra, this.y += this.sa, this.ra *= 0.8, this.sa *= 0.8, -1 < this.ra && (1 > this.ra && -1 < this.sa && 1 > this.sa) && (this.sf = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
wa = tm.createClass({superClass:va, Vb:l, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
xa = tm.createClass({superClass:va, Vb:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.Ac || (this.x += this.ca.ja.ra, this.y += this.ca.ja.sa);
  this.superClass.prototype.update.call(this)
}});
ya = tm.createClass({da:k, ca:k, $:k, frame:0, init:function(b) {
  this.ca = b;
  this.da = b.da;
  this.ge();
  this.$ = za();
  this.frame = 0
}, ge:n(), update:function() {
  this.mi(this.frame);
  this.frame += 1
}, mi:function(b) {
  b = this.$.get(b);
  if(b !== k) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(Ba[b.value] !== i) {
        var a = Ba[b.value];
        if(a !== k) {
          if(a[0].Sb === j) {
            this.vg(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.vg(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.$.tf = l
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, vg:function(b) {
  this.ca.Rd += 1;
  b = b.aa(this.ca, b.ba).setPosition(b.x, b.y).addChildTo(this.ca).Li();
  b.ie = this;
  return b
}, Tf:function(b) {
  Ca();
  this.ca.fd = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var g = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
      g.ga = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.ga) + 0.5;
        this.ga += 1
      };
      g.addChildTo(a)
    }
  }
  a.tweener.wait(3E3).call(b).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = n();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.ca.Se);
  J("warning");
  J("voWarning")
}});
ya.create = function(b, a) {
  switch(a) {
    case 0:
      return Da(b);
    case 1:
      return Ea(b);
    case 2:
      return Fa(b);
    case 3:
      return Fa(b);
    default:
      h(Error("stageNumber = " + a))
  }
};
za = tm.createClass({index:0, data:k, tf:l, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? k : b.stop === j ? (this.tf = j, b) : this.tf ? k : b
}});
Da = tm.createClass({superClass:ya, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    K("bgm1", j);
    this.ca.ja.direction = 0.5 * Math.PI;
    this.ca.ja.speed = 8;
    this.ca.ja.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.ca.ja.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(150, "yukishiro", j);
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
    this.ca.ja.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.Tf(function() {
      K("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, ge:function() {
  this.ca.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
Ea = tm.createClass({superClass:ya, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    K("bgm2", j);
    this.ca.ja.direction = 0.5 * Math.PI;
    this.ca.ja.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.ca.ja.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.ca.ja.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.ca.ja.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.ca.ja.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.ca.ja.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.ca.ja.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", j);
  this.$.add(300, "heri2-left");
  for(b = 0;12 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.ca.ja.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
    this.Tf(function() {
      K("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ca.ja.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, ge:function() {
  this.ca.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
Fa = tm.createClass({superClass:ya, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    K("bgm4", j);
    this.ca.ja.direction = 0.5 * Math.PI;
    this.ca.ja.speed = 1
  });
  this.$.add(200, "tsukikage-r");
  this.$.add(100, "tsukikage-l");
  this.$.add(200, "bukky-4-r");
  this.$.add(150, "heri1-4-left");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-center");
  this.$.add(100, "komachi4-0");
  this.$.add(120, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(100, "bukky-4-l");
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
    this.ca.ja.tweener.clear().to({speed:3, direction:0.25 * Math.PI}, 2E3)
  });
  for(b = 0;3 > b;b++) {
    this.$.add(15, "heri2-center"), this.$.add(15, "heri2-right"), this.$.add(15, "heri2-center"), this.$.add(15, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri2-center"), this.$.add(15, "heri2-right"), this.$.add(15, "heri2-center"), this.$.add(15, "heri2-left"), this.$.add(1, "tank5-left")
  }
}, ge:function() {
  this.ca.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
function Oa(b, a) {
  if(b.parent === k || a.parent === k) {
    return l
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, g = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, t = a.y - a.boundingHeightTop, C = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > m && f < C && g > t
}
;var Pa = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, gj:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.Oc(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
var Qa = tm.createClass({superClass:Pa, titleText:k, menu:k, descriptions:k, showExit:l, title:k, selections:[], description:k, box:k, cursor:k, gf:k, _selected:0, _opened:l, _finished:l, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.gf = d.onCursorMove;
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
  this.selections = this.menu.map(function(a, d) {
    var f = this;
    b += 50;
    var g = tm.display.Label(a).setPosition(240, b).addChildTo(this);
    g.interactive = j;
    g.addEventListener("touchend", function() {
      f._selected === d ? f.closeDialog(f._selected) : f._selected = d
    });
    g.width = 336;
    return g
  }.bind(this));
  this._createCursor();
  this._opened = j
}, _createCursor:function() {
  this.cursor = tm.display.RectangleShape(336, 10, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.LinearGradient(0, 0, 336, 0).addColorStopList([{offset:0, color:"rgba(  0,255,100,0.0)"}, {offset:0.2, color:"rgba(  0,255,100,0.3)"}, {offset:0.5, color:"rgba(  0,255,255,0.5)"}, {offset:0.8, color:"rgba(  0,255,100,0.3)"}, {offset:1, color:"rgba(  0,255,100,0.0)"}]).toStyle()}).addChildTo(this);
  this.cursor.blendMode = "lighter";
  this.cursor.x = 240;
  this.cursor.s = this._selected;
  this.cursor.y = this.selections[this._selected].y;
  this.cursor.update = function() {
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.gf !== k && this.parent.gf(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), J("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = T(this._selected, 0, this.selections.length - 1), J("select")) : b.keyboard.getKeyDown("up") && 
  (this._selected -= 1, this._selected = T(this._selected, 0, this.selections.length - 1), J("select")))
}, closeDialog:function(b) {
  this._finished = j;
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
}, Oc:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function X(b, a, d, f, g) {
  g = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:n()}, g);
  b.gj(Qa(a, d, g), f)
}
;G = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, Le:0.85, size:0, image:k, Sa:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  a !== i && (this.alpha = a);
  d !== i && (this.Le = d);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.Le;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return G(this.size, this.yj, this.Le, this.image)
}});
ia = tm.createClass({superClass:G, ja:k, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.ja = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.ja.ra;
  this.y += this.ja.sa + 0.3
}, clone:function(b) {
  return ia(this.ja, b)
}});
var Na = tm.createClass({width:0, label:k, Za:k, ga:0, Bg:0, pf:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Za = [];
  this.Bg = 480 - this.width - 5;
  this.pf = 5
}, ci:function(b, a) {
  a === j && (this.Za.clear(), this.Za.push(""));
  5 < this.Za.length && this.Za.splice(1, this.Za.length - 4);
  this.Za.push(b);
  return this
}, fi:function() {
  this.Za.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.Za.length) {
    if("" !== this.Za[0]) {
      var a = this.Za[0][0];
      this.Za[0] = this.Za[0].substring(1);
      b += a
    }else {
      this.Za.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.ga % 2 ? "_" : " ");
  this.ga += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.Bg, this.pf);
  b.fillStyle = "rgba(1,2,48,0.5)";
  b.fillRect(0, 0, this.width, 64);
  b.translate(5, 5);
  b.fillStyle = "rgba(255,255,255,0.5)";
  b.setText(this.label.fontStyle, this.label.align, this.label.baseline);
  this.label._lines.each(function(a, d) {
    b.fillText(a, 0, this.label.textSize * d)
  }.bind(this));
  b.restore()
}});
var Ma = k, Ma = function(b) {
  function a(a) {
    if(1 > a) {
      return k
    }
    var f = [], g = Math.random(), m, t;
    for(t = 0;t < b;t += ~~a) {
      m = Math.random();
      for(var p = 0;p < a;p++) {
        f[t + p] = d(g, m, p / a)
      }
      g = m
    }
    g = f[b - ~~a];
    m = f[0];
    for(p = 0;p < a;p++) {
      f[b - ~~a + p] = d(g, m, p / a)
    }
    return f
  }
  function d(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var f = [], g = 0, m = Math.pow(2, 4);8 > g;g++, m *= 2) {
    var t = a(b / m);
    if(t === k) {
      break
    }
    f.push(t)
  }
  t = [].concat(f[0]);
  g = 1;
  for(m = 0.5;g < f.length;g++, m *= 0.5) {
    for(var C = 0;C < b;C++) {
      t[C] += f[g][C] * m
    }
  }
  for(g = 0;g < t.length;g++) {
    t[g] /= 2
  }
  return t
}(512);
w = {index:-1, data:k, setup:function(b) {
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
L = k;
K = function(b, a) {
  a || Ga();
  var d = tm.asset.AssetManager.get(b);
  d && (L = d.clone(), L.volume = 0.1 * u.bd, L.loop = j, L.play())
};
Ga = function() {
  L !== k && L.stop()
};
Ca = function() {
  if(L !== k) {
    var b = L;
    b.loop = l;
    var a = function() {
      b.volume -= 0.0010;
      0 >= b.volume ? b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
J = function(b) {
  if(0 !== u.Cc && J.played[b] !== u.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * u.Cc, J.wf !== k && J.wf.stop(), J.wf = a) : a.volume = 0.1 * u.Cc);
    J.played[b] = u.frame
  }
};
J.played = {};
J.wf = k;
(function() {
  var b = k, a = k;
  ca = tm.createClass({superClass:Pa, result:k, ga:0, od:[], Vd:l, ng:k, tg:0, ae:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.ng = tm.display.Label().setPosition(240, 256).addChildTo(this);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Vd = l;
      for(var a = ("" + Math.floor(u.Yd)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.ng.text = "HIGH SCORE: " + b.trim()
    })
  }, Oc:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Pf(80 * Math.cos(0.01 * this.ga) + 240, 80 * Math.sin(0.01 * this.ga) + 320, 0);
    this.Pf(80 * Math.cos(0.01 * this.ga + Math.PI) + 240, 80 * Math.sin(0.01 * this.ga + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Vd && this.Ag();
    this.ga += 1
  }, Pf:function(d, f, g) {
    if(!this.Vd) {
      b === k && (b = G(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === k && (a = G(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      g.speed = 0.6;
      var m = U(0, 2 * Math.PI), t = V(0, 20);
      g.setPosition(Math.cos(m) * t + d, Math.sin(m) * t + f);
      var C = this;
      g.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = C.od.indexOf(this);
          -1 !== a && C.od.splice(a, 1)
        }
      };
      this.od.push(g)
    }
  }, Ag:function() {
    X(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.Ri, {defaultValue:this.tg, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, Ri:function(a) {
    4 !== a && (this.tg = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Vd = j;
          for(var a = 0, b = this.od.length;a < b;a++) {
            this.od[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          u.replaceScene(Ha())
        }.bind(this));
        break;
      case 2:
        this.ic();
        break;
      case 3:
        u.ni()
    }
  }, ic:function() {
    X(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.lf, {defaultValue:this.ae, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, lf:function(a) {
    3 !== a && (this.ae = a);
    switch(a) {
      case 0:
        this.mf();
        break;
      case 1:
        this.nf();
        break;
      case 2:
        this.Yi();
        break;
      default:
        this.Ag()
    }
  }, mf:function() {
    X(this, "BGM VOLUME", "012345".split(""), this.jf, {defaultValue:u.bd, onCursorMove:function(a) {
      L !== k && "exit" !== a && (L.volume = 0.1 * a)
    }, showExit:l})
  }, jf:function(a) {
    6 !== a && (u.bd = a);
    this.ic()
  }, nf:function() {
    X(this, "SE VOLUME", "012345".split(""), this.kf, {defaultValue:u.Cc, showExit:l})
  }, kf:function(a) {
    6 !== a && (u.Cc = a);
    this.ic()
  }, Yi:function() {
    X(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Qi, {defaultValue:u.fg, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Qi:function(a) {
    5 !== a && (u.fg = a);
    this.ic()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  Ha = tm.createClass({superClass:Pa, mode:0, types:k, me:k, qb:k, rb:k, sb:k, bf:k, $e:k, type:0, style:0, dc:l, be:l, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.bj();
    this.me = this.aj();
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
    this.me.visible = l;
    this.ff(-1, j);
    this.qb.update();
    this.rb.update();
    this.sb.update();
    J("voSelectShip");
    K("bgmShipSelect", j)
  }, bj:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.bf = tm.display.Label("Type-A").setPosition(240, 150);
    this.bf.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.cf = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.cf.update = function() {
      this.cf.text = b[this.type]
    }.bind(this);
    this.cf.addChildTo(a);
    var f = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.qb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.rb = tm.display.AnimationSprite(f, 64, 64).gotoAndPlay("typeB");
    this.sb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.qb.Ia = 0;
    this.rb.Ia = 1;
    this.sb.Ia = 2;
    this.qb.setScale(3).setPosition(0, 320).addChildTo(a);
    this.rb.setPosition(0, 320).addChildTo(a);
    this.sb.setPosition(0, 320).addChildTo(a);
    this.qb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ia / 3 * Math.PI)
    };
    this.rb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ia / 3 * Math.PI)
    };
    this.sb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ia / 3 * Math.PI)
    };
    return a
  }, aj:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.$e = tm.display.Label("Shot Style").setPosition(240, 150);
    this.$e.addChildTo(a);
    this.lc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Rb = tm.app.Object2D();
    this.Rb.addChildTo(this.lc);
    this.Rb.update = function(a) {
      this.Rb.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.la = [];
    this.la[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.la[0].update = function() {
      0 === this.type ? this.la[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.la[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.la[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.la[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.la[1].update = function() {
      0 === this.type ? this.la[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.la[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.la[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.la[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.la[2].update = function() {
      0 === this.type ? this.la[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.la[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.la[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.la[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.la[3].update = function() {
      0 === this.type ? this.la[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.la[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.la[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.lc.line = b(0, 0, 0, 130, 8);
    this.lc.line.addChildTo(this.lc);
    this.la.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Rb)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.af = tm.display.Label(d[0], 16).setPosition(240, 500);
    this.af.update = function() {
      this.af.text = d[this.style]
    }.bind(this);
    this.af.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.me.visible = l, !this.be && a.keyboard.getKeyDown("left")) {
        this.ff(-1, l), J("select")
      }else {
        if(!this.be && a.keyboard.getKeyDown("right")) {
          this.ff(1, l), J("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, J("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.me.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, J("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, J("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (v.xf ? this.Vi() : (this.dc = j, this.zg()), J("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.hj(0 === ~~(a.frame / 60) % 2))
    }
  }, Vi:function() {
    X(this, "AUTO BOMB", ["on", "off"], this.Mi, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, Mi:function(a) {
    2 !== a && (this.dc = 0 === a, this.zg())
  }, zg:function() {
    X(this, "ARE YOU READY?", ["ok"], this.Ni, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, Ni:function(a) {
    0 === a && this.dj()
  }, ff:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.qb, this.rb, this.sb][this.type].remove().addChildTo(this.types);
    b ? (this.qb.Ia -= a, this.qb.scaleX = 0 === this.type ? 5 : 1, this.qb.scaleY = 0 === this.type ? 5 : 1, this.rb.Ia -= a, this.rb.scaleX = 1 === this.type ? 5 : 1, this.rb.scaleY = 1 === this.type ? 5 : 1, this.sb.Ia -= a, this.sb.scaleX = 2 === this.type ? 5 : 1, this.sb.scaleY = 2 === this.type ? 5 : 1) : (this.be = j, this.qb.tweener.clear().to({Ia:this.qb.Ia - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.rb.tweener.clear().to({Ia:this.rb.Ia - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.sb.tweener.clear().to({Ia:this.sb.Ia - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.be = l
    }.bind(this)));
    this.bf.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, dj:function() {
    u.ca.dc = this.dc;
    u.ca.start(this.type, this.style);
    u.replaceScene(u.ca);
    Ca()
  }, hj:function(a) {
    this.$e.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.lc.line.xb = l, this.la[0].line.xb = l, this.la[1].line.xb = l, this.la[2].line.xb = l, this.la[3].line.xb = l) : (this.lc.line.xb = j, this.la[0].line.xb = j, this.la[1].line.xb = j, this.la[2].line.xb = j, this.la[3].line.xb = j);
    a ? (this.la[0].visible = j, this.la[1].visible = j, 1 === this.style ? (this.la[2].visible = l, this.la[3].visible = l) : (this.la[2].visible = j, this.la[3].visible = j), this.lc.line.lineWidth = 5) : (this.la.each(function(a) {
      a.visible = l
    }), this.lc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, Oc:n()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, xb:j, init:function(a, b, f, g, m) {
    this.superInit();
    this.angle = f - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = g;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = m
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    if(this.xb && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), f = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - f, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - f, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + f, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + f, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
F = tm.createClass({superClass:Pa, da:k, score:0, La:0, Aa:0, md:0, Ga:0, ec:0, Gg:0, ie:k, ja:k, oc:3, je:0, ke:0, Kb:0, Rd:0, nd:0, ef:0, dc:l, eb:0, xc:0, Wf:0, Rc:l, Xe:l, Jb:0, bb:0, ua:l, jd:0, Qc:0, za:0, Pd:0, xj:0, wj:0, Xd:k, ig:k, of:k, gg:k, Re:k, Se:k, Ne:k, Ii:k, nb:k, gb:k, Sb:k, fd:l, Hi:l, init:function() {
  F.Ae !== k && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  F.Ae = this;
  this.gb = ra(this);
  this.gb.Va.addChildTo(this);
  this.ja = ta().qa;
  this.ja.addChildTo(this);
  this.Xd = F.bc().addChildTo(this);
  this.ig = F.bc().addChildTo(this);
  this.gg = F.bc().addChildTo(this);
  this.Re = F.bc().addChildTo(this);
  this.of = F.bc().addChildTo(this);
  this.Se = F.bc().addChildTo(this);
  this.Ne = F.bc().addChildTo(this);
  this.Ii = F.Gf(this).addChildTo(this);
  tm.$a.pc.ed.Sf = this;
  this.nb = tm.app.Object2D();
  this.nb.addChildTo(this);
  this.nb.update = function(b) {
    this.Ti(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.gb.clear()
  })
}, addChild:function(b) {
  b.Sa ? this.Re.addChild(b) : b instanceof M ? this.Ne.addChild(b) : b instanceof va ? this.Xd.addChild(b) : b instanceof P ? b.Vb ? this.Xd.addChild(b) : this.gg.addChild(b) : b instanceof da ? this.of.addChild(b) : b === this.nb || b === this.ja || b instanceof F.bc || b instanceof F.Gf || b instanceof sa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(b)))
}, update:function(b) {
  this.Zi(b.keyboard);
  this.ie.update(b.frame);
  0 === b.frame % 2 && this.gb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(ca()), Ga()) : b.keyboard.getKeyDown("space") ? this.ce(0) : b.keyboard.getKeyDown("p") && (this.Fg().saveAsImage(), this.ce(0))
}, Fg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.ja.ja.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.gb.element, 0, 0);
  return b
}, Ti:function() {
  this.da.Tb === l && z.erase();
  var b;
  b = [].concat(P.Qa);
  for(var a = [].concat(la.Qa), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var g = b[f], m = a[d];
      if(!(0 >= g.na) && Oa(g, m) && (m.Wd(1), m.remove(), g.Ub(m.uc))) {
        this.Kb += 1;
        this.ua ? this.Ya(v.oh) : this.Ya(v.nh);
        this.hf(g);
        break
      }
    }
  }
  m = this.da.Wb;
  if(this.da.mb) {
    b = [].concat(P.Qa);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(g = b[f], !(0 >= g.na) && Oa(g, m)) {
        m.$i(g.y + g.boundingHeightBottom);
        g.Ub(m.uc) ? (this.Kb += 1, this.ua ? this.Ya(v.mh) : this.Ya(v.jh), this.hf(g)) : (this.ua ? this.Jc(0.01 * this.za) : this.Jc(0.01), this.Ga = Math.min(this.Ga + 0.02, 1), this.ua ? this.Ya(v.lh) : this.Ya(v.kh));
        m.Wd(2);
        break
      }
    }
    a = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(P.Qa);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.na) && Oa(g, a) && (g.Ub(m.uc) ? (this.Kb += 1, this.ua ? this.Ya(v.ih) : this.Ya(v.fh), this.hf(g)) : (this.ua ? this.Jc(0.01 * this.za) : this.Jc(0.01), this.Ga = Math.min(this.Ga + 0.02, 1), this.ua ? this.Ya(v.hh) : this.Ya(v.gh)), m.zi(2, this.da.x, this.da.y - 30))
    }
  }
  if(this.Rc) {
    z.erase();
    b = [].concat(P.Qa);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.na) && (g.kd() && g.Ub(v.Ng)) && (this.tc(g.score), this.Kb += 1)
    }
    this.Ga = this.Aa = 0
  }
  if(this.ua) {
    f = [].concat(la.Qa);
    for(g = f.length;f[--g] !== i;) {
      if(m = f[g], !(0 >= m.na)) {
        a = [].concat(M.Qa);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== l && (0 < m.na && Oa(m, d)) && (d.na -= 6 - this.bb, 0 > d.na && (d.Ca(), this.tc(v.Rg), this.Jc(v.Pg), this.mg(l, l, d.x, d.y, 1)), m.na -= 1)
        }
      }
    }
  }
  if(this.fd) {
    z.erase()
  }else {
    if(this.da.parent !== k && this.da.Tc === l && this.Rc === l && 0 >= this.jd && !v.zh) {
      for(f = M.Qa.length;M.Qa[--f] !== i;) {
        if(b = M.Qa[f], b.visible !== l && Oa(b, this.da)) {
          this.da.Ub();
          0 < this.eb && this.dc ? (this.bb = T(this.bb - 1, 0, 1), this.Kd(-0.01), na(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.xg();
          break
        }
      }
      for(f = P.Qa.length;P.Qa[--f] !== i;) {
        if(g = P.Qa[f], !(0 >= g.na) && !g.Vb && Oa(g, this.da)) {
          this.da.Ub();
          0 < this.eb && this.dc ? (this.bb = T(this.bb - 1, 0, 1), this.Kd(-0.01), na(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.xg();
          break
        }
      }
    }
    this.ua && (this.Qc -= 1, 0 >= this.Qc && this.Qd());
    this.jd = Math.max(this.jd - 1, 0);
    this.Ga -= v.Vg * v.Wg;
    0 >= this.Ga && (this.Ga = 0, this.ua || 0 < this.za ? this.ec = this.Aa = this.La = 0 : (0 < this.Aa && (0 >= this.ec && (this.ec = this.Aa * v.Ug), this.La = this.La * (this.Aa - this.ec) / this.Aa, this.Aa -= this.ec), 0 >= this.Aa && (this.ec = this.Aa = this.La = 0)))
  }
}, hf:function(b) {
  this.mg(b.Vb, this.ua || Ka(b, this.da) < v.Xg, b.x, b.y, b.star, b instanceof Ia);
  this.Jc(v.uh[this.Pd]);
  for(var a = this.La, d = ~~(this.Aa / v.Bf) + 1, f = 0;f < d;f++) {
    a += b.score, this.tc(a)
  }
  this.La += b.score * d
}, mg:function(b, a, d, f, g, m) {
  b = b ? xa : wa;
  for(var t = 0;t < g;t++) {
    var C = b(a);
    C.setPosition(d, f);
    m && (C.Ac = j)
  }
}, Ki:function(b) {
  J("star");
  b.rg ? (this.ke += 1, this.La += v.Jh, this.tc(v.Nh + this.La * v.Lh), this.ua ? this.Ya(v.sh) : this.Ya(v.rh)) : (this.je += 1, this.La += v.Ih, this.tc(v.Mh + this.La * v.Kh), this.ua ? this.Ya(v.qh) : this.Ya(v.ph))
}, start:function(b, a) {
  this.gb.Lc.fi().clear();
  this.score = 0;
  this.oc = v.Ef;
  this.eb = this.xc = v.Df[a];
  this.Wf = v.Og[a];
  this.za = this.bb = this.Jb = 0;
  q.ya.Ra.$rank = v.wh;
  this.Qd();
  this.Rc = l;
  this.nd = this.ef = 0;
  this.da = da(this, b, a);
  this.Hg(0);
  J("voLetsGo");
  this.fj()
}, Hg:function(b) {
  this.Ua("3...2...1...");
  this.da.parent !== k && this.da.remove();
  P.cd();
  la.cd();
  z.cd();
  this.Xd.removeChildren();
  this.Re.removeChildren();
  this.Se.removeChildren();
  this.of.removeChildren();
  this.Ne.removeChildren();
  this.nb.removeChildren();
  this.Kb = this.Rd = this.ke = this.je = this.md = this.Ga = this.Aa = this.La = 0;
  this.Sb = k;
  this.Hi = this.fd = l;
  this.nd = 0;
  this.gb.Va.gd = 0;
  this.bb = this.gb.Va.Hb = 0;
  this.Gg = b;
  this.ie = ya.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.df()
  }.bind(this));
  this.ja.tweener.clear()
}, df:function() {
  this.Ua("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Wb.addChildTo(this);
  this.da.Tb = l;
  this.da.Tc = j;
  this.da.Pc = l;
  this.da.mb = l;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.ad = this.Tb = j
  }.bind(this.da)).wait(v.yh).call(function() {
    this.Tc = l
  }.bind(this.da))
}, xg:function() {
  B.Sd(this.da.x, this.da.y, this);
  this.Ua("I was shot down.");
  this.da.Tb = l;
  this.da.remove();
  this.oc -= 1;
  this.za = this.ec = this.Aa = this.Ga = 0;
  this.nd += 1;
  this.ef += 1;
  this.bb = T(this.bb - 3, 0, 1);
  this.Kd(-0.03);
  0 < this.oc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.dc || !v.xf) {
      this.xc = Math.min(this.xc + 1, this.Wf)
    }
    this.eb = this.xc;
    this.df()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.Xi()
  }.bind(this))
}, Kd:function(b) {
  q.ya.Ra.$rank = T(q.ya.Ra.$rank + b, 0, 0.5)
}, xi:function() {
  this.Ua("System rebooted.", j);
  this.score = 0;
  this.oc = v.Ef;
  this.eb = this.xc = v.Df[this.da.style];
  this.bb = 0;
  q.ya.Ra.$rank = 0;
  this.df()
}, gi:function() {
  K("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.nb);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(Ja(this, this.Fg()));
    b.remove()
  }.bind(this))
}, yi:function() {
  Ga();
  this.app.replaceScene(Ra())
}, tj:n(), tc:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < v.Cf.length;b++) {
    var d = v.Cf[b];
    a < d && d <= this.score && this.qi()
  }
  u.Yd = Math.max(u.Yd, this.score)
}, Jc:function(b) {
  this.ec = 0;
  this.Aa += b;
  this.md = Math.max(this.md, this.Aa);
  1 <= b && (this.Ga = 1)
}, Ya:function(b) {
  if(this.za !== v.re) {
    for(b *= v.th;1 < b;) {
      qa(this.da).addChildTo(this), b -= 1, this.Jb = 0, this.za += 1, 1 === this.za ? (this.Ua("HYPER SYSTEM, stand by.", j), J("voHyperStandBy")) : (this.Ua("HYPER SYSTEM, ready.", j), J("voHyperReady"))
    }
    this.Jb = T(this.Jb + b, 0, 1);
    1 <= this.Jb && (qa(this.da).addChildTo(this), this.za += 1, this.Jb -= 1, 1 === this.za ? (this.Ua("HYPER SYSTEM, stand by.", j), J("voHyperStandBy")) : (this.Ua("HYPER SYSTEM, ready.", j), J("voHyperReady")))
  }
}, ej:function() {
  0.5 > Math.random() ? (this.Ua("HYPER SYSTEM start!!", j), J("voHyperStart0")) : (this.Ua("start counting to system limit.", j), J("voHyperStart1"));
  this.bb = T(this.bb + 1, 0, 5);
  this.Kd(0.01 * this.za);
  q.ya.Ra.$hyperOff = v.$g;
  this.Qc = v.Ad;
  this.jd = v.Ad * v.eh;
  this.da.Zd.Vc(this.za);
  this.da.Wb.Vc(this.za);
  this.da.Mc = this.da.Zd;
  B.Ai(this.da.x, this.da.y, this);
  this.ua = j;
  this.Pd = this.za;
  this.Jb = this.za = 0;
  z.erase(j, j)
}, Qd:function() {
  this.ua !== l && (this.ua = l, qa(this.da, j).addChildTo(this), this.da.Mc = this.da.yg, q.ya.Ra.$hyperOff = 1, this.da.Zd.Vc(0), this.da.Wb.Vc(0), this.jd = v.Ad * v.dh, this.Pd = this.Qc = 0, z.erase())
}, bi:function() {
  J("decision");
  J("voGetBomb");
  this.eb = Math.min(this.eb + 1, this.xc);
  this.Xe = this.eb === this.xc
}, qi:function() {
  J("voExtend");
  this.Ua("extended.");
  this.oc += 1
}, Ua:function(b, a) {
  this.gb.Lc.ci(b, a)
}, ce:function(b) {
  X(this, "PAUSE", ["resume", "setting", "exit game"], this.Si, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:l})
}, Si:function(b) {
  switch(b) {
    case 1:
      this.ic();
      break;
    case 2:
      this.Wi()
  }
}, ic:function() {
  X(this, "SETTING", ["bgm volume", "sound volume"], this.lf, {defaultValue:this.ae, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, lf:function(b) {
  3 !== b && (this.ae = b);
  switch(b) {
    case 0:
      this.mf();
      break;
    case 1:
      this.nf();
      break;
    default:
      this.ce()
  }
}, Wi:function() {
  X(this, "REARY?", ["yes", "no"], this.Oi, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:l})
}, Oi:function(b) {
  0 === b ? (Ga(), this.app.replaceScene(ca())) : this.ce(1)
}, mf:function() {
  X(this, "BGM VOLUME", "012345".split(""), this.jf, {defaultValue:u.bd, onCursorMove:function(b) {
    L !== k && 6 !== b && (L.volume = 0.1 * b)
  }, showExit:l})
}, jf:function(b) {
  6 !== b && (u.bd = b);
  this.ic(1)
}, nf:function() {
  X(this, "SE VOLUME", "012345".split(""), this.kf, {defaultValue:u.Cc, showExit:l})
}, kf:function(b) {
  6 !== b && (u.Cc = b);
  this.ic(1)
}, Xi:function() {
  X(this, "CONTINUE?", ["yes", "no"], this.Pi, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:l})
}, Pi:function(b) {
  switch(b) {
    case 0:
      this.xi();
      break;
    case 1:
      this.yi()
  }
}, Oc:n(), cj:function() {
  this.gb.Va.tweener.clear().to({gd:-480}, 1600, "easeInBack").to({Hb:30}, 800, "easeInOutBack")
}, Ci:function() {
  this.gb.Va.tweener.clear().to({Hb:0}, 800, "easeInOutBack").to({gd:0}, 1600, "easeOutBack")
}, qd:k, rd:0, ld:k, Bd:0, fj:function() {
  if(1 === this.Bd) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.ld = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.qd = [];
    this.rd = 0
  }else {
    if(2 === this.Bd && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.ld = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.ld.push(d[f])
        }
      }
    }
  }
}, Zi:function(b) {
  if(1 === this.Bd) {
    1E3 < this.qd.length && (console.log("save"), localStorage.setItem("rec" + this.rd, this.qd), localStorage.setItem("recCount", this.rd), this.qd = [], this.rd += 1), this.qd.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Bd && this.ld) {
      var a = this.ld.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      })
    }
  }
}});
F.bc = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
F.Gf = tm.createClass({superClass:tm.display.CanvasElement, ca:k, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.ji(b);
  this.ki(b)
}, ji:function(b) {
  if(0 < this.ca.Ga) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.Ga) + "," + ~~Math.min(255, 512 * this.ca.Ga) + ",0.5)";
    var a = 500 * this.ca.Ga;
    b.fillRect(465, 635 - a, 10, a)
  }
}, ki:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.za === v.re ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.Jb && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.Jb, 9))
}});
F.Ae = k;
Ja = tm.createClass({superClass:Pa, ca:k, Dg:k, nb:k, values:k, labels:k, $d:k, Cg:[v.Gh, v.Hh, v.Dh, v.Eh, 1], qg:k, qf:k, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ca.je, this.ca.ke, ~~(100 * (this.ca.Kb / this.ca.Rd)), this.ca.md, 0 === this.ca.nd ? v.Fh : 0];
  this.$d = this.values.map(function(a) {
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
  for(var d = 0;d < this.values.length;d++) {
    this.labels[d] = tm.display.Label("" + Math.floor(this.values[d]) + (2 === d ? "%" : ""), 30).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 640 * (0.2 + 0.1 * d)).addChildTo(this)
  }
  this.qg = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.qf = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.qf.visible = l;
  this.Dg = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var g = 0;16 > g;g++) {
      f[d][g] = {rf:0, fe:0, nc:U(-2, 2), Mb:U(1, 4)}
    }
  }
  this.nb = tm.app.Object2D();
  this.nb.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var g = 0;g < f[d].length;g++) {
        var s = f[d][g];
        640 > 40 * g + s.fe && (a.drawImage(this.Dg.element, 40 * d, 40 * g, 40, 40, 40 * d + s.rf, 40 * g + s.fe, 40, 40), s.rf += s.nc, s.fe += s.Mb, s.Mb += 0.3, b = l)
      }
    }
    this.wait = 60;
    b && this.nb.remove();
    a.restore()
  }.bind(this);
  this.nb.addChildTo(this);
  this.addEventListener("exit", function() {
    Ca()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      J("star"), this.values[a] <= this.$d[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.tc(this.values[a] * this.Cg[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.tc(this.$d[a] * this.Cg[a]), this.values[a] -= this.$d[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.qg.text = Math.floor(this.ca.score)
    }else {
      if(this.qf.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        J("decision"), this.ca.Hg(this.ca.Gg + 1), b.popScene()
      }
    }
    this.frame += 1
  }
}, Oc:n()});
var Ra = tm.createClass({superClass:Pa, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(ca())
    }.bind(this))
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c")) && b.replaceScene(ca())
}, Oc:function(b) {
  b.clearColor("black")
}});
tm.createClass({superClass:Pa, init:function() {
  this.superInit()
}, update:n()});
(function() {
  P = tm.createClass({superClass:tm.display.CanvasElement, name:k, da:k, ca:k, ie:k, na:0, hc:0, score:0, Vb:l, erase:l, star:1, Gi:l, gc:j, ub:l, frame:0, ne:k, direction:0, speed:0, ka:k, init:function(a, d, f) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.ub = l;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.gc = j;
    this.ca = a;
    this.da = a.da;
    this.score = 100;
    this.erase = l;
    this.ai(f);
    d.setup(this);
    this.altitude = this.Vb ? 1 : 10;
    this.ne = {x:0, y:0}
  }, Li:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, Aj:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.ub === l && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.ub = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Vb && (this.x += this.ca.ja.ra, this.y += this.ca.ja.sa);
    this.ub && (this.frame += 1);
    this.ne.x = this.x - a;
    this.ne.y = this.y - b
  }, Ub:function(a) {
    if(!this.ub) {
      return l
    }
    this.na -= a;
    if(0 >= this.na) {
      return a = U(0, 5), 2 > a ? this.ca.Ua("enemy destroy.") : 4 > a ? this.ca.Ua(this.name + " destroy.") : this.ca.Ua("ETR reaction gone."), this.erase && z.erase(j, this.ca.ua, this instanceof Ia), this.dispatchEvent(tm.event.Event("destroy")), this.Ca(), j
    }
    40 > this.na && this.Ta();
    return l
  }, Ca:function() {
    B.Sd(this.x, this.y, this.ca, this.ne);
    this.remove()
  }, kd:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Ui:function() {
    return this.gc
  }, Ta:n(), ai:function(a) {
    this.name = a;
    a = P.Yg[a];
    this.na = this.hc = a[0];
    this.score = a[1];
    this.Vb = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, Td:function() {
    this.remove();
    this.ca.ig.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && B.Sd(this.x + V(-100, 100), this.y + V(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      B.hg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Xf:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && B.Sd(this.x + V(-100, 100), this.y + V(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      B.hg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  P.cd = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = P.Qa = []
})();
Ia = tm.createClass({superClass:P, Gi:j, hc:0, he:k, init:function(b, a, d) {
  this.he = a;
  this.superInit(b, this.he[0], d);
  this.hc = this.na;
  this.addEventListener("added", function() {
    this.ca.Sb = this;
    this.ca.cj();
    this.tweener.wait(1E3).call(function() {
      this.ca.fd = l
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.Sb = k;
    this.ca.Ci();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.gi()
    }.bind(this));
    a.addChildTo(this.ca.nb)
  })
}, Ub:function(b) {
  var a = this.na;
  if(P.prototype.Ub.call(this, b)) {
    return this.ca.fd = j, this.ca.da.ad = l, Ca(), j
  }
  this.na <= 0.55 * this.hc && 0.55 * this.hc < a ? (S.le(this), this.clearEventListener("completeattack"), this.tweener.clear(), B.Gb(this.x, this.y, this.ca), z.erase(j, this.ca.ua), this.he[1].setup(this)) : this.na <= 0.1 * this.hc && 0.1 * this.hc < a && (S.le(this), this.clearEventListener("completeattack"), this.tweener.clear(), B.Gb(this.x, this.y, this.ca), z.erase(j, this.ca.ua), this.he[2].setup(this), J("voJacms"))
}});
(function() {
  P.Yg = {kujo:[2, 300, l, l, 1, {radius:24}], kiryu:[3, 400, l, l, 1, {radius:24}], natsuki:[5, 900, j, l, 1, {radius:24}], kise:[50, 15E3, j, l, 1, {radius:24}], yamabuki:[100, 15E3, j, l, 1, {width:70, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, l, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, l, l, 5, {width:100, height:20}], kurokawa:[35, 5E3, l, l, 5, {width:100, height:20}], akimoto:[250, 3E5, l, j, 10, {width:200, 
  heightBottom:10, heightTop:60}], yukishiro:[750, 8E5, l, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, l, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, l, j, 20, {width:300, height:80}], hyuga:[6E3, 3E6, l, j, 0, {width:240, height:80}], erika:[30, 500, l, l, 1, {width:24, height:48}]};
  P.ma = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.fa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    P.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  P.oa = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.fa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    P.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  P.ea = tm.createClass({superClass:P, Ie:k, Je:k, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.Ie = b("tex_tank1", 64, 64);
    this.Je = b("tex_tank1", 64, 64);
    this.vc = this.vc || 0;
    this.Fb = this.Fb || 0
  }, update:function(a) {
    P.prototype.update.call(this, a);
    for(a = this.vc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.Fb;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.Ie.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.Je.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Ie.draw(a);
    this.Je.draw(a)
  }, Ca:function() {
    B.oi(this.x, this.y, this.ca);
    this.remove()
  }});
  P.zf = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.Yb() : 5 === a.app.frame % 30 && this.fa.Xb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ca:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.Xa = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.Yb() : 5 === a.app.frame % 30 && this.fa.Xb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ca:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.$b = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.Yb() : 5 === a.app.frame % 30 && this.fa.Xb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ca:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.Ic = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(1)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.Yb() : 5 === a.app.frame % 30 && this.fa.Xb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ca:function() {
    this.Td()
  }});
  P.lj = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "aono");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(1)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.Yb() : 5 === a.app.frame % 30 && this.fa.Xb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ca:function() {
    this.Td()
  }});
  P.xa = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.Yb() : 5 === a.app.frame % 30 && this.fa.Xb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ca:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.Dd = tm.createClass({superClass:P, fa:k, init:function(a, b) {
    this.superInit(a, b, "hanasaki")
  }, Ta:n(), Ca:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  P.ue = tm.createClass({superClass:P, init:function(a, b) {
    this.superInit(a, b, "myodoin")
  }, Ta:n(), Ca:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  P.zb = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(4)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.Yb() : 5 === a.app.frame % 30 && this.fa.Xb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ca:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.Yc = tm.createClass({superClass:P, init:function(a, b) {
    this.superInit(a, b, "erika")
  }, Ta:n(), draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, Ca:function() {
    B.Gb(this.x, this.y, this.ca);
    oa(this.x, this.y, this.da).addChildTo(this.parent);
    this.remove()
  }});
  P.se = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.Yb() : 5 === a.app.frame % 30 && this.fa.Xb()
    })
  }, Ca:function() {
    this.Td()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  P.we = tm.createClass({superClass:Ia, fa:k, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.Yb() : 5 === a.app.frame % 30 && this.fa.Xb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ca:function() {
    this.Xf()
  }});
  P.ve = tm.createClass({superClass:P, init:function(a, b) {
    this.superInit(a, b, "mishou")
  }, Ta:n(), Ca:function() {
    this.Td()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  P.Oh = tm.createClass({superClass:Ia, init:function(a, b) {
    this.superInit(a, b, "hyuga")
  }, Ta:n(), Ca:function() {
    this.Xf()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, uf:k, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.uf = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Yb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.uf + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }, Xb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.uf;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }})
})();
(function() {
  S = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      S.le(this)
    })
  }});
  S.Da = function(a, b) {
    var f = z[b].Od();
    a.on("enterframe", f);
    a.on("completeattack", function() {
      f.stop = j
    })
  };
  S.le = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].Ye && (a[b].stop = j)
      }
    }
  };
  S.ma = tm.createClass({superClass:S, pattern:k, init:function(a) {
    this.superInit();
    this.pattern = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    var b = this.pattern;
    a.on("launch", function() {
      var a = w.randf(64, 192);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        S.Da(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  S.Ob = S.ma("basic0-0");
  S.Ma = S.ma("basic1-2");
  S.Ea = tm.createClass({superClass:S, init:function() {
    this.superInit()
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.on("launch", function() {
      var a = w.randf(192, 320);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        S.Da(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  S.Ea = S.Ea();
  S.ac = tm.createClass({superClass:S, init:function() {
    this.superInit()
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.on("launch", function() {
      var a = w.randf(448, 576);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        S.Da(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  S.ac = S.ac();
  S.oa = tm.createClass({superClass:S, ee:k, init:function(a) {
    this.superInit();
    this.ee = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.ee = this.ee;
    a.tweener.wait(w.rand(0, 1E3)).call(function() {
      this.speed = 6;
      S.Da(this, this.ee);
      this.on("enterframe", function() {
        this.y < this.da.y && this.ub && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = T(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.kd() && this.ub && this.remove();
        if(22500 > Ka(this, this.da) || this.y > this.da.y + 150) {
          this.gc = l
        }
      })
    }.bind(a))
  }});
  S.Na = S.oa("basic1-0");
  var b = tm.createClass({superClass:S, init:function(a, b, f) {
    this.superInit();
    this.Fi = a;
    this.Ei = b;
    this.Kc = f
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.speed = this.Fi;
    a.vc = this.Ei;
    this.Kc && (a.Kc = [].concat(this.Kc));
    a.Fb = 0;
    a.on("enter", function() {
      S.Da(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.vc) * this.speed;
      this.y += Math.sin(this.vc) * this.speed;
      this.ub && !this.kd() && this.remove();
      for(this.Fb = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.Fb;) {
        this.Fb += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.Fb;) {
        this.Fb -= 2 * Math.PI
      }
      this.gc = this.y < this.da.y && 4E4 < Ka(this, this.da);
      if(this.Kc) {
        for(var a = 0;a < this.Kc.length;a++) {
          var b = this.Kc[a];
          b.frame === this.frame && this.tweener.to({vc:b.dir !== i ? b.dir : this.vc, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  S.Bb = b(1, 0.25 * Math.PI);
  S.mj = b(1, -1.75 * Math.PI);
  S.Zc = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  S.ia = b(1.6, 0.5 * Math.PI);
  S.Cb = b(1.6, -0.5 * Math.PI);
  S.Tg = tm.createClass({superClass:S, Eb:k, init:function(a) {
    this.superInit();
    this.Eb = a
  }, setup:function(a) {
    S.Da(a, this.Eb);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  S.Af = S.Tg("bukky-4-0");
  b = tm.createClass({superClass:S, Eb:k, ag:l, init:function(a, b) {
    this.superInit();
    this.Eb = a;
    this.ag = !!b
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Eb = this.Eb;
    a.on("enter", function() {
      S.Da(this, this.Eb)
    });
    a.on("enterframe", function() {
      this.ub && !this.kd() && this.remove()
    });
    if(!this.ag) {
      a.on("enterframe", function() {
        this.gc = this.y < this.da.y && 4E4 < Ka(this, this.da)
      })
    }
  }});
  S.ib = b("basic3-0", l);
  S.jb = b("basic3-1", l);
  S.Ab = b("cannon2-0", j);
  S.wd = b("cannon3-0", j);
  S.pe = b("cannon5-0", j);
  b = tm.createClass({superClass:S, velocityY:0, Eb:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Eb = b
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ka = [this.Eb];
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      S.Da(this, this.ka[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      384 < this.y && S.le(this);
      this.ub && !this.kd() && this.remove();
      this.gc = this.y < this.da.y
    })
  }});
  S.qc = b(0.5, "kurokawa-1");
  S.Ah = b(0.5, "kurokawa-4");
  S.sc = tm.createClass({superClass:S, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      S.Da(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  S.rc = tm.createClass({superClass:S, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      S.Da(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  S.Hf = b(0.3, "komachi-1");
  S.If = b(0.5, "komachi-2");
  S.Jf = b(0.5, "komachi-4");
  S.Yc = tm.createClass({superClass:S, init:function() {
    this.superInit()
  }, setup:function(a) {
    S.Da(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.gc = this.ub
    })
  }});
  S.Yc = S.Yc();
  b = tm.createClass({superClass:S, ka:k, init:function(a) {
    this.superInit();
    this.ka = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ka = [].concat(this.ka);
    a.Xc = l;
    a.zc = l;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Xc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 192 + 0.5 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Xc === l || 0 >= this.na) && 1500 < this.frame && this.zc === l) {
        this.zc = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.na) && !this.zc) {
        var a = this.ka.shift();
        S.Da(this, a);
        this.ka.push(a)
      }
    })
  }});
  S.se = b(["honoka-1"]);
  S.we = tm.createClass({superClass:S, ka:k, init:function() {
    this.superInit();
    this.ka = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ka = [].concat(this.ka);
    a.Xc = l;
    a.zc = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Xc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.na) && !this.zc) {
        var a = this.ka.shift();
        S.Da(this, a);
        this.ka.push(a)
      }
    })
  }});
  S.Bh = S.we();
  S.xe = tm.createClass({superClass:S, ka:k, init:function() {
    this.superInit();
    this.ka = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ka = [].concat(this.ka);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.na)) {
        var a = this.ka.shift();
        S.Da(this, a);
        this.ka.push(a)
      }
    })
  }});
  S.xe = S.xe();
  S.ye = tm.createClass({superClass:S, init:function() {
    this.superInit()
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.na || S.Da(this, "nagisa-3-1")
    })
  }});
  S.ye = S.ye();
  S.ve = b(["mai-1", "mai-2"]);
  S.Be = tm.createClass({superClass:S, ka:k, init:function() {
    this.superInit();
    this.ka = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ka = [].concat(this.ka);
    a.Xc = l;
    a.zc = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Xc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.na) && !this.zc) {
        var a = this.ka.shift();
        S.Da(this, a);
        this.ka.push(a)
      }
    })
  }});
  S.Be = S.Be();
  S.Ce = tm.createClass({superClass:S, ka:k, init:function() {
    this.superInit();
    this.ka = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ka = [].concat(this.ka);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.na)) {
        var a = this.ka.shift();
        S.Da(this, a);
        this.ka.push(a)
      }
    })
  }});
  S.Ce = S.Ce();
  S.De = tm.createClass({superClass:S, ka:k, init:function() {
    this.superInit();
    this.ka = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ka = [].concat(this.ka);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.na)) {
        var a = this.ka.shift();
        S.Da(this, a);
        this.ka.push(a)
      }
    })
  }});
  S.De = S.De()
})();
var Z = P, $ = S;
Ba = {"heri1-left":[{aa:Z.oa, ba:$.Ob, x:48, y:-100}, {aa:Z.oa, ba:$.Ea, x:96, y:-100}, {aa:Z.oa, ba:$.Ob, x:144, y:-100}, {aa:Z.oa, ba:$.Ea, x:192, y:-100}, {aa:Z.oa, ba:$.Ob, x:240, y:-100}], "heri1-center":[{aa:Z.oa, ba:$.Ob, x:144, y:-100}, {aa:Z.oa, ba:$.Ea, x:192, y:-100}, {aa:Z.oa, ba:$.Ob, x:240, y:-100}, {aa:Z.oa, ba:$.Ea, x:288, y:-100}, {aa:Z.oa, ba:$.Ob, x:336, y:-100}], "heri1-right":[{aa:Z.oa, ba:$.Ob, x:240, y:-100}, {aa:Z.oa, ba:$.Ea, x:288, y:-100}, {aa:Z.oa, ba:$.Ob, x:336, y:-100}, 
{aa:Z.oa, ba:$.Ea, x:384, y:-100}, {aa:Z.oa, ba:$.Ob, x:432, y:-100}], "heri1-left2":[{aa:Z.oa, ba:$.Ea, x:48, y:-100}, {aa:Z.oa, ba:$.ac, x:96, y:-100}, {aa:Z.oa, ba:$.Ea, x:144, y:-100}, {aa:Z.oa, ba:$.ac, x:192, y:-100}, {aa:Z.oa, ba:$.Ea, x:240, y:-100}], "heri1-center2":[{aa:Z.oa, ba:$.Ea, x:144, y:-100}, {aa:Z.oa, ba:$.ac, x:192, y:-100}, {aa:Z.oa, ba:$.Ea, x:240, y:-100}, {aa:Z.oa, ba:$.ac, x:288, y:-100}, {aa:Z.oa, ba:$.Ea, x:336, y:-100}], "heri1-right2":[{aa:Z.oa, ba:$.Ea, x:240, y:-100}, 
{aa:Z.oa, ba:$.ac, x:288, y:-100}, {aa:Z.oa, ba:$.Ea, x:336, y:-100}, {aa:Z.oa, ba:$.ac, x:384, y:-100}, {aa:Z.oa, ba:$.Ea, x:432, y:-100}], "heri2-left":[{aa:Z.ma, ba:$.Na, x:48, y:-100}, {aa:Z.ma, ba:$.Na, x:96, y:-100}, {aa:Z.ma, ba:$.Na, x:144, y:-100}, {aa:Z.ma, ba:$.Na, x:192, y:-100}, {aa:Z.ma, ba:$.Na, x:240, y:-100}], "heri2-center":[{aa:Z.ma, ba:$.Na, x:144, y:-100}, {aa:Z.ma, ba:$.Na, x:192, y:-100}, {aa:Z.ma, ba:$.Na, x:240, y:-100}, {aa:Z.ma, ba:$.Na, x:288, y:-100}, {aa:Z.ma, ba:$.Na, 
x:336, y:-100}], "heri2-right":[{aa:Z.ma, ba:$.Na, x:240, y:-100}, {aa:Z.ma, ba:$.Na, x:288, y:-100}, {aa:Z.ma, ba:$.Na, x:336, y:-100}, {aa:Z.ma, ba:$.Na, x:384, y:-100}, {aa:Z.ma, ba:$.Na, x:432, y:-100}], "heri1-4-left":[{aa:Z.ma, ba:$.Ma, x:48, y:-100}, {aa:Z.ma, ba:$.Ma, x:96, y:-100}, {aa:Z.ma, ba:$.Ma, x:144, y:-100}, {aa:Z.ma, ba:$.Ma, x:192, y:-100}, {aa:Z.ma, ba:$.Ma, x:240, y:-100}], "heri1-4-center":[{aa:Z.ma, ba:$.Ma, x:144, y:-100}, {aa:Z.ma, ba:$.Ma, x:192, y:-100}, {aa:Z.ma, ba:$.Ma, 
x:240, y:-100}, {aa:Z.ma, ba:$.Ma, x:288, y:-100}, {aa:Z.ma, ba:$.Ma, x:336, y:-100}], "heri1-4-right":[{aa:Z.ma, ba:$.Ma, x:240, y:-100}, {aa:Z.ma, ba:$.Ma, x:288, y:-100}, {aa:Z.ma, ba:$.Ma, x:336, y:-100}, {aa:Z.ma, ba:$.Ma, x:384, y:-100}, {aa:Z.ma, ba:$.Ma, x:432, y:-100}], "tankRD-left":[{aa:Z.ea, ba:$.Bb, x:78, y:-50}, {aa:Z.ea, ba:$.Bb, x:28, y:-100}, {aa:Z.ea, ba:$.Bb, x:-22, y:-150}, {aa:Z.ea, ba:$.Bb, x:-72, y:-200}, {aa:Z.ea, ba:$.Bb, x:-122, y:-250}], "tankRD-center":[{aa:Z.ea, ba:$.Bb, 
x:222, y:-50}, {aa:Z.ea, ba:$.Bb, x:172, y:-100}, {aa:Z.ea, ba:$.Bb, x:122, y:-150}, {aa:Z.ea, ba:$.Bb, x:72, y:-200}, {aa:Z.ea, ba:$.Bb, x:22, y:-250}], "tankL-top":[{aa:Z.ea, ba:$.Zc, x:550, y:64}, {aa:Z.ea, ba:$.Zc, x:620, y:64}, {aa:Z.ea, ba:$.Zc, x:690, y:64}, {aa:Z.ea, ba:$.Zc, x:760, y:64}, {aa:Z.ea, ba:$.Zc, x:830, y:64}], "tank5-left":[{aa:Z.ea, ba:$.ia, x:48, y:-70}, {aa:Z.ea, ba:$.ia, x:48, y:-140}, {aa:Z.ea, ba:$.ia, x:48, y:-210}, {aa:Z.ea, ba:$.ia, x:48, y:-280}, {aa:Z.ea, ba:$.ia, 
x:48, y:-350}], "tank5-center":[{aa:Z.ea, ba:$.ia, x:240, y:-70}, {aa:Z.ea, ba:$.ia, x:240, y:-140}, {aa:Z.ea, ba:$.ia, x:240, y:-210}, {aa:Z.ea, ba:$.ia, x:240, y:-280}, {aa:Z.ea, ba:$.ia, x:240, y:-350}], "tank15-top":[{aa:Z.ea, ba:$.ia, x:48, y:-70}, {aa:Z.ea, ba:$.ia, x:48, y:-140}, {aa:Z.ea, ba:$.ia, x:48, y:-210}, {aa:Z.ea, ba:$.ia, x:48, y:-280}, {aa:Z.ea, ba:$.ia, x:48, y:-350}, {aa:Z.ea, ba:$.ia, x:240, y:-70}, {aa:Z.ea, ba:$.ia, x:240, y:-140}, {aa:Z.ea, ba:$.ia, x:240, y:-210}, {aa:Z.ea, 
ba:$.ia, x:240, y:-280}, {aa:Z.ea, ba:$.ia, x:240, y:-350}, {aa:Z.ea, ba:$.ia, x:432, y:-70}, {aa:Z.ea, ba:$.ia, x:432, y:-140}, {aa:Z.ea, ba:$.ia, x:432, y:-210}, {aa:Z.ea, ba:$.ia, x:432, y:-280}, {aa:Z.ea, ba:$.ia, x:432, y:-350}], "tank25-top":[{aa:Z.ea, ba:$.ia, x:48, y:-70}, {aa:Z.ea, ba:$.ia, x:48, y:-140}, {aa:Z.ea, ba:$.ia, x:48, y:-210}, {aa:Z.ea, ba:$.ia, x:48, y:-280}, {aa:Z.ea, ba:$.ia, x:48, y:-350}, {aa:Z.ea, ba:$.ia, x:240, y:-70}, {aa:Z.ea, ba:$.ia, x:240, y:-140}, {aa:Z.ea, ba:$.ia, 
x:240, y:-210}, {aa:Z.ea, ba:$.ia, x:240, y:-280}, {aa:Z.ea, ba:$.ia, x:240, y:-350}, {aa:Z.ea, ba:$.ia, x:432, y:-70}, {aa:Z.ea, ba:$.ia, x:432, y:-140}, {aa:Z.ea, ba:$.ia, x:432, y:-210}, {aa:Z.ea, ba:$.ia, x:432, y:-280}, {aa:Z.ea, ba:$.ia, x:432, y:-350}, {aa:Z.ea, ba:$.Cb, x:144, y:710}, {aa:Z.ea, ba:$.Cb, x:144, y:780}, {aa:Z.ea, ba:$.Cb, x:144, y:850}, {aa:Z.ea, ba:$.Cb, x:144, y:920}, {aa:Z.ea, ba:$.Cb, x:144, y:990}, {aa:Z.ea, ba:$.Cb, x:336, y:710}, {aa:Z.ea, ba:$.Cb, x:336, y:780}, {aa:Z.ea, 
ba:$.Cb, x:336, y:850}, {aa:Z.ea, ba:$.Cb, x:336, y:920}, {aa:Z.ea, ba:$.Cb, x:336, y:990}], "bukky-4-r":[{aa:Z.zf, ba:$.Af, x:480, y:-50}], "bukky-4-l":[{aa:Z.zf, ba:$.Af, x:0, y:-50}], "cannon-0":[{aa:Z.xa, ba:$.ib, x:48, y:-100}], "cannon-1":[{aa:Z.xa, ba:$.ib, x:96, y:-100}], "cannon-2":[{aa:Z.xa, ba:$.ib, x:144, y:-100}], "cannon-3":[{aa:Z.xa, ba:$.ib, x:192, y:-100}], "cannon-4":[{aa:Z.xa, ba:$.ib, x:240, y:-100}], "cannon-5":[{aa:Z.xa, ba:$.ib, x:288, y:-100}], "cannon-6":[{aa:Z.xa, ba:$.ib, 
x:336, y:-100}], "cannon-7":[{aa:Z.xa, ba:$.ib, x:384, y:-100}], "cannon-8":[{aa:Z.xa, ba:$.ib, x:432, y:-100}], "cannon-R0":[{aa:Z.xa, ba:$.ib, x:550, y:128}], "cannon-R1":[{aa:Z.xa, ba:$.ib, x:550, y:192}], "cannon-R2":[{aa:Z.xa, ba:$.ib, x:550, y:256}], "yayoi-0":[{aa:Z.xa, ba:$.jb, x:48, y:-100}], "yayoi-1":[{aa:Z.xa, ba:$.jb, x:96, y:-100}], "yayoi-2":[{aa:Z.xa, ba:$.jb, x:144, y:-100}], "yayoi-3":[{aa:Z.xa, ba:$.jb, x:192, y:-100}], "yayoi-4":[{aa:Z.xa, ba:$.jb, x:240, y:-100}], "yayoi-5":[{aa:Z.xa, 
ba:$.jb, x:288, y:-100}], "yayoi-6":[{aa:Z.xa, ba:$.jb, x:336, y:-100}], "yayoi-7":[{aa:Z.xa, ba:$.jb, x:384, y:-100}], "yayoi-8":[{aa:Z.xa, ba:$.jb, x:432, y:-100}], "yayoi-R0":[{aa:Z.xa, ba:$.jb, x:550, y:128}], "yayoi-R1":[{aa:Z.xa, ba:$.jb, x:550, y:192}], "yayoi-R2":[{aa:Z.xa, ba:$.jb, x:550, y:256}], "tsubomi-0":[{aa:Z.Dd, ba:$.wd, x:96, y:-100}], "tsubomi-1":[{aa:Z.Dd, ba:$.wd, x:240, y:-100}], "tsubomi-2":[{aa:Z.Dd, ba:$.wd, x:384, y:-100}], "tsubomi-R0":[{aa:Z.Dd, ba:$.wd, x:580, y:128}], 
"itsuki-0":[{aa:Z.ue, ba:$.pe, x:96, y:-100}], "itsuki-1":[{aa:Z.ue, ba:$.pe, x:240, y:-100}], "itsuki-2":[{aa:Z.ue, ba:$.pe, x:384, y:-100}], "makoto-0":[{aa:Z.zb, ba:$.Ab, x:48, y:-100}], "makoto-1":[{aa:Z.zb, ba:$.Ab, x:96, y:-100}], "makoto-2":[{aa:Z.zb, ba:$.Ab, x:144, y:-100}], "makoto-3":[{aa:Z.zb, ba:$.Ab, x:192, y:-100}], "makoto-4":[{aa:Z.zb, ba:$.Ab, x:240, y:-100}], "makoto-5":[{aa:Z.zb, ba:$.Ab, x:288, y:-100}], "makoto-6":[{aa:Z.zb, ba:$.Ab, x:336, y:-100}], "makoto-7":[{aa:Z.zb, ba:$.Ab, 
x:384, y:-100}], "makoto-8":[{aa:Z.zb, ba:$.Ab, x:432, y:-100}], "makoto-R0":[{aa:Z.zb, ba:$.Ab, x:580, y:128}], "fighter-m-0":[{aa:Z.$b, ba:$.qc, x:96, y:-192}], "fighter-m-1":[{aa:Z.$b, ba:$.qc, x:144, y:-192}], "fighter-m-2":[{aa:Z.$b, ba:$.qc, x:192, y:-192}], "fighter-m-3":[{aa:Z.$b, ba:$.qc, x:240, y:-192}], "fighter-m-4":[{aa:Z.$b, ba:$.qc, x:288, y:-192}], "fighter-m-5":[{aa:Z.$b, ba:$.qc, x:336, y:-192}], "fighter-m-6":[{aa:Z.$b, ba:$.qc, x:384, y:-192}], "fighter-m4-0":[{aa:Z.$b, ba:$.Ah, 
x:96, y:-192}], "tsukikage-r":[{aa:Z.Xa, ba:$.sc(700), x:624, y:256}, {aa:Z.Xa, ba:$.sc(600), x:720, y:256}, {aa:Z.Xa, ba:$.sc(500), x:576, y:320}, {aa:Z.Xa, ba:$.sc(400), x:672, y:320}, {aa:Z.Xa, ba:$.sc(300), x:768, y:320}, {aa:Z.Xa, ba:$.sc(200), x:624, y:384}, {aa:Z.Xa, ba:$.sc(100), x:720, y:384}], "tsukikage-l":[{aa:Z.Xa, ba:$.rc(700), x:-144, y:384}, {aa:Z.Xa, ba:$.rc(600), x:-240, y:384}, {aa:Z.Xa, ba:$.rc(500), x:-96, y:320}, {aa:Z.Xa, ba:$.rc(400), x:-192, y:320}, {aa:Z.Xa, ba:$.rc(300), 
x:-288, y:320}, {aa:Z.Xa, ba:$.rc(200), x:-144, y:256}, {aa:Z.Xa, ba:$.rc(100), x:-240, y:256}], "komachi-0":[{aa:Z.Ic, ba:$.Hf, x:144, y:-192}], "komachi-1":[{aa:Z.Ic, ba:$.Hf, x:336, y:-192}], "komachi2-0":[{aa:Z.Ic, ba:$.If, x:144, y:-192}], "komachi2-1":[{aa:Z.Ic, ba:$.If, x:336, y:-192}], "komachi4-0":[{aa:Z.Ic, ba:$.Jf, x:144, y:-192}], "komachi4-1":[{aa:Z.Ic, ba:$.Jf, x:336, y:-192}], erika:[{aa:Z.Yc, ba:$.Yc, x:240, y:-100}], yukishiro:[{aa:Z.se, ba:$.se, x:240, y:-100}], misumi:[{aa:Z.we, 
ba:[$.Bh, $.xe, $.ye], x:240, y:-100, Sb:j}], mai:[{aa:Z.ve, ba:$.ve, x:780, y:128}], hyuga:[{aa:Z.Oh, ba:[$.Be, $.Ce, $.De], x:240, y:-100, Sb:j}]};
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, g, m, p) {
    return c.action([c.fire(c.direction(b, "absolute"), f, g || D, m, p), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || D, m, p)])])
  }
  function d(a, b, c, d, g) {
    return function(m) {
      return f(a, b, c, m, d, g, i, i)
    }
  }
  function f(a, b, d, f, g, m, p, r) {
    return c.action([c.fire(c.direction(b), f, g || D, m, p, r), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || D, m, p, r)])])
  }
  function g(a) {
    return c.fire(c.direction(0), a || s, I)
  }
  function m(a) {
    return c.fire(c.direction(0), a || s, D)
  }
  function t(a) {
    return c.speed("$rank*2.0 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function C(a) {
    return c.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function E(a) {
    return c.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return c.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function A(a) {
    return c.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function fa(a) {
    return c.speed("$rank*2.0 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function aa(a) {
    return c.wa(a, {visible:l})
  }
  function H(a) {
    return c.wa(a, {frame:4, Qb:j})
  }
  function Y(a) {
    return c.wa(a, {frame:3})
  }
  function D(a) {
    return c.wa(a, {frame:1})
  }
  function N(a) {
    return c.wa(a, {frame:2})
  }
  function I(a) {
    return c.wa(a, {frame:0})
  }
  function Q(a) {
    return c.wa(a, {frame:3, Qb:j})
  }
  function W(a) {
    return c.wa(a, {frame:1, Qb:j})
  }
  function R(a) {
    return c.wa(a, {frame:2, Qb:j})
  }
  function O(a) {
    return c.wa(a, {frame:0, Qb:j})
  }
  z = {};
  var c = q.ta;
  z["basic0-0"] = new q.ha({top:c.action([m])});
  z["basic0-1"] = new q.ha({top:c.action([b(E, -0.01, 8, d(3, -15, 15))])});
  z["basic1-0"] = new q.ha({top:c.action([c.repeat(999, [p(40), m(s)])])});
  z["basic1-1"] = new q.ha({top:c.action([c.repeat(999, [p(20), m(s)])])});
  z["basic1-2"] = new q.ha({top:c.action([p("10+$rand*20"), f(3, -20, 20, s)])});
  z["basic2-0"] = new q.ha({top:c.action([c.repeat(999, [p(50), m(s)])])});
  z["basic3-0"] = new q.ha({top:c.action([c.wait(20), c.repeat(999, [p(100), b(s, 0.1, 3, g)])])});
  z["basic3-1"] = new q.ha({top:c.action([c.wait(20), c.repeat(999, [p(40), b(s, 0.1, 3, g)])])});
  z["bukky-4-0"] = new q.ha({top0:c.action([p(30), c.repeat(999, [c.fire(c.direction(-40), s, R), c.repeat(3, [c.fire(c.direction(20, "sequence"), s, R), c.fire(c.direction(20, "sequence"), s, R), c.fire(c.direction(20, "sequence"), s, R), c.fire(c.direction(20, "sequence"), s, R), c.fire(c.direction(-80, "sequence"), s, R), p(5)]), p(70)])]), top1:c.action([p(20), c.fire(c.direction(180, "absolute"), r, W), c.repeat(999, [c.fire(c.direction(15, "sequence"), r, W), c.fire(c.direction(15, "sequence"), 
  r, W), c.fire(c.direction(15, "sequence"), r, W), c.fire(c.direction(15, "sequence"), r, W), c.fire(c.direction(15, "sequence"), r, W), c.fire(c.direction(15, "sequence"), r, W), c.fire(c.direction(15, "sequence"), r, W), c.fire(c.direction(15, "sequence"), r, W), c.fire(c.direction(15, "sequence"), r, W), c.fire(c.direction(-90, "sequence"), r, W), p(5)])])});
  z["cannon2-0"] = new q.ha({top0:c.action([c.repeat(999, [p(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", r), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", r), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", r), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", r), p(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", s, I), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", s, I), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", s, I), 
  a(3, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", s, I)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), A, H), c.fire(c.direction(" 90+$loop.index*10", "absolute"), A, H), c.fire(c.direction("180+$loop.index*10", "absolute"), A, H), c.fire(c.direction("270+$loop.index*10", "absolute"), A, H), c.fire(c.direction("  0-$loop.index*10", "absolute"), A, H), c.fire(c.direction(" 90-$loop.index*10", "absolute"), A, H), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), A, H), c.fire(c.direction("270-$loop.index*10", "absolute"), A, H), p(10)])])});
  z["cannon2-1"] = new q.ha({top0:c.action([c.repeat(999, [p(20), a(6, "0-10+$loop.index*15", "0+10+$loop.index*15", r), a(6, "90-10+$loop.index*15", "90+10+$loop.index*15", r), a(6, "180-10+$loop.index*15", "180+10+$loop.index*15", r), a(6, "270-10+$loop.index*15", "270+10+$loop.index*15", r), p(20), a(7, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", s, I), a(7, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", s, I), a(7, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", s, I), 
  a(7, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", s, I)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*5", "absolute"), A, H), c.fire(c.direction(" 90+$loop.index*5", "absolute"), A, H), c.fire(c.direction("180+$loop.index*5", "absolute"), A, H), c.fire(c.direction("270+$loop.index*5", "absolute"), A, H), c.fire(c.direction("  0-$loop.index*5", "absolute"), A, H), c.fire(c.direction(" 90-$loop.index*5", "absolute"), A, H), c.fire(c.direction("180-$loop.index*5", 
  "absolute"), A, H), c.fire(c.direction("270-$loop.index*5", "absolute"), A, H), p(5)])])});
  z["cannon3-0"] = new q.ha({top0:c.action([c.repeat(999, [p(80), b(r, 0.01, 5, d(5, -30, 30, I, c.offsetX(-60))), b(r, 0.01, 5, d(5, -30, 30, I)), b(r, 0.01, 5, d(5, -30, 30, I, c.offsetX(60)))])])});
  z["cannon4-0"] = new q.ha({top0:c.action([p(20), c.repeat(999, [c.fire(r, R), c.repeat(8, [p(10), c.kb("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), r, R), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), r, R)])]), p(120)])])});
  z["cannon5-0"] = new q.ha({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), t, aa(c.Pa("b"))), c.repeat(11, [p(5), c.fire(c.direction(10, "sequence"), t, aa(c.Pa("b")))]), p(60)])]), b:c.action([c.wait(5), c.Md(c.speed(0), 0), b(r, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, D)
  }), c.yb])});
  z["yuri-4"] = new q.ha({top:c.action([p(60), c.repeat(7, [a(7, 120, 240, A, I), p(8)])])});
  z["kurokawa-1"] = new q.ha({top0:c.action([c.repeat(999, [b(s, -0.01, 4, function(a) {
    return f(4, -45, 45, a, N, c.offsetX(-45), c.va(j))
  }), b(s, -0.01, 4, function(a) {
    return f(4, -45, 45, a, N, c.offsetX(45), c.va(j))
  }), p(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), s, Q, c.offsetX(-45), c.va(j)), p(45), c.fire(c.direction(0), s, Q, c.offsetX(45), c.va(j)), p(45)])])});
  z["kurokawa-4"] = new q.ha({top0:c.action([c.repeat(999, [b(s, -0.01, 4, function(a) {
    return f(4, -45, 45, a, N, c.offsetX(-45), c.va(j))
  }), b(s, -0.01, 4, function(a) {
    return f(4, -45, 45, a, N, c.offsetX(45), c.va(j))
  }), p(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), s, Q, c.offsetX(-45), c.va(j)), p(45), c.fire(c.direction(0), s, Q, c.offsetX(45), c.va(j)), p(45)])])});
  z["komachi-1"] = new q.ha({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), A(1), D, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(-40)), c.repeat(57, [p(8), c.fire(c.direction(-720 / 57, "sequence"), A(1), D, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, [c.fire(c.direction(-210, 
  "absolute"), A(1), D, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(40)), c.repeat(57, [p(8), c.fire(c.direction(720 / 57, "sequence"), A(1), D, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), s(0), O, c.offsetX(-110), c.va(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), s(0), O, c.offsetX(-110), c.va(j))]), p(10), c.fire(c.direction(0), s(0), O, c.offsetX(110), c.va(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), s(0), O, c.offsetX(110), c.va(j))]), p(10)])])});
  z["komachi-2"] = new q.ha({top0:c.action([c.repeat(999, [b(s, -0.01, 4, function(a) {
    return c.action([f(4, -45, 45, a, N, c.offsetX(-45), c.va(j)), p(4)])
  }), b(s, -0.01, 4, function(a) {
    return c.action([p(4), f(4, -45, 45, a, N, c.offsetX(45), c.va(j))])
  }), p(90)])]), top1:c.action([c.repeat(999, [p(45), b(r, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, W)]), p(1)])
  }), p(180)])])});
  z["komachi-4"] = new q.ha({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), s, Y, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), s, Y, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), s, Y, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), s, Y, c.offsetX(45)), p(4)]), p(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), s(5), O, c.offsetX(-110), c.va(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), s(5), O, c.offsetX(-110), c.va(j))]), p(30), c.fire(c.direction(0), s(5), O, c.offsetX(110), c.va(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), s(5), O, c.offsetX(110), c.va(j))]), p(30)])])});
  z["honoka-1"] = new q.ha({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, r, H, c.offsetX(0), c.offsetY(30)), p(30), f(5, -40, 40, A, H, c.offsetX(0), c.offsetY(30)), p(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, r(0.6), D), f(3, -3, 3, r(1), D), f(4, -4, 4, r(1.4), D), f(5, -5, 5, r(1.8), D), p(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, A, O, c.offsetX(-110), c.offsetY(-70)), p(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, A, O, c.offsetX(110), c.offsetY(-70)), 
  p(30)])])});
  z["nagisa-1-1"] = new q.ha({top0:c.action([p(90), c.repeat(3, [c.kb("way", "5 + $loop.index*6"), b(r, 0.01, "3 + $loop.index*4", function(a) {
    return c.action([f("$way", -110, 110, a, D, c.offsetX(-190), c.offsetY(-20)), f("$way", -110, 110, a, D, c.offsetX(190), c.offsetY(-20)), c.wait(5)])
  }), p(60)]), p(60)])});
  z["nagisa-1-2"] = new q.ha({top0:c.action([c.repeat(12, [f(15, -90, 90, A, D), p(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [f(5, -65, -55, r, O, c.offsetX(-190), c.offsetY(-20)), f(5, -35, -25, r, O, c.offsetX(-190), c.offsetY(-20)), f(5, -5, 5, r, O, c.offsetX(-190), c.offsetY(-20)), f(5, 25, 35, r, O, c.offsetX(-190), c.offsetY(-20)), f(5, 55, 65, r, O, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), p(60), c.repeat(3, [f(5, -65, -55, r, O, c.offsetX(190), c.offsetY(-20)), f(5, -35, -25, 
  r, O, c.offsetX(190), c.offsetY(-20)), f(5, -5, 5, r, O, c.offsetX(190), c.offsetY(-20)), f(5, 25, 35, r, O, c.offsetX(190), c.offsetY(-20)), f(5, 55, 65, r, O, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), p(60)])])});
  z["nagisa-1-3"] = new q.ha({top0:c.action([p(60), c.repeat(3, [c.fire(c.direction(-60), r, N, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [p(15), c.fire(c.direction(6, "sequence"), r, N, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([p(80), c.repeat(3, [c.fire(c.direction(60), r, N, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [p(15), c.fire(c.direction(-6, "sequence"), r, N, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [f(5, -60, -40, r, H, c.offsetX(-190), 
  c.offsetY(-20)), f(5, -20, -10, r, H, c.offsetX(-190), c.offsetY(-20)), f(5, 10, 20, r, H, c.offsetX(-190), c.offsetY(-20)), f(5, 40, 60, r, H, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), p(60), c.repeat(3, [f(5, -60, -40, r, H, c.offsetX(190), c.offsetY(-20)), f(5, -20, -10, r, H, c.offsetX(190), c.offsetY(-20)), f(5, 10, 20, r, H, c.offsetX(190), c.offsetY(-20)), f(5, 40, 60, r, H, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), p(60)])])});
  z["nagisa-2-1"] = new q.ha({top0:c.action([p(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", A, I, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", A, I, c.offsetX(190), c.offsetY(-20)), p(10)])]), top1:c.action([p(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, Q), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, Q), p(12)])])});
  z["nagisa-2-2"] = new q.ha({top0:c.action([p(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", s, Q), p(12)])]), top1:c.action([p(120), c.repeat(6, [a(9, 150, 130, A(0.8), D), a(9, 172, 188, A(0.8), D), a(9, 210, 230, A(0.8), D), p(30), a(9, 170, 150, A(0.8), D), a(9, 190, 210, A(0.8), D), p(30)])])});
  z["nagisa-2-3"] = new q.ha({top:c.action([p(120), c.repeat(12, [a(23, 0, 360, A, H, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, A, H), a(23, 0, 360, A, H, c.offsetX(190), c.offsetY(-20)), p(30)])])});
  z["nagisa-3-1"] = new q.ha({top0:c.action([p(50), c.repeat(999, [b(s, 0.0010, 5, function(a) {
    return c.action([f(41, "-180", "+180", a, R, c.offsetX(-190), c.offsetY(-20)), f(41, "-180", "+180", a, R, c.offsetX(190), c.offsetY(-20))])
  }), p(50)])]), top1:c.action([c.repeat(999, [f(2, -2, 0, E, D), p(10), f(2, 0, 2, E, D), p(150)])])});
  z["mai-1"] = new q.ha({top0:c.action([p(50), c.repeat(50, [c.kb("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, I), c.yb]))), c.kb("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, I), c.yb]))), p(8)])]), top1:c.action([p(50), c.repeat(12, [a(5, -50, 50, t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, Q), 
  c.yb]))), a(5, -230, -130, t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, Q), c.yb]))), p(16), a(6, -50, 50, t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, Q), c.yb]))), a(6, -230, -130, t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, Q), c.yb]))), p(16)])])});
  z["mai-2"] = new q.ha({top:c.action([p(50), c.repeat(15, [c.fire(c.direction(-10), R(c.Pa("fireChild", "$loop.index*10"))), p(8)])]), fireChild:c.action([p("40+$1"), b(r, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, N)
  }), c.yb])});
  z["saki-1-1"] = new q.ha({top:c.action([p(100), c.repeat(3, [c.Pa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.kb("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", s, I), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", s, I), p(12)]), c.repeat("$2", [f(9, -20, 20, E, Y)])])});
  z["saki-1-2"] = new q.ha({top:c.action([p(100), c.repeat(5, [c.kb("way", "5+$loop.index*2"), c.repeat(6, [c.kb("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, s("$s"), Q, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), p(90)])])});
  z["saki-1-3"] = new q.ha({top:c.action([c.kb("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), Q(c.Pa("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Md(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, r, Y), c.yb])});
  z["saki-2-1"] = new q.ha({top0:c.action([p(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", r, I, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", r, I, c.offsetX(40)), p(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", r, I, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", r, I, c.offsetX(40)), p(60)])]), top1:c.action([p(100), c.repeat(4, [c.repeat(7, [c.kb("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  C, Y), c.repeat(4, [c.kb("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", C("$w*-1.0"), Y)])]), p(120)])])});
  z["saki-2-2"] = new q.ha({top:c.action([p(60), c.kb("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), R(c.Pa("seed"))), p(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), R(c.Pa("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Md(c.speed(0), "10 + $rand*15"), c.wait(65), b(s, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, N)])
  }), b(s, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, N)])
  }), b(s, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, N)])
  }), b(s, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, N)])
  }), b(s, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, N)])
  }), b(s, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, N)])
  }), b(s, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, N)])
  }), b(s, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, N)])
  }), b(s, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, N)])
  }), p(2), c.yb])});
  z["saki-2-3"] = new q.ha({top:c.action([p(60), c.kb("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), Q(c.Pa("seed"))), p(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), Q(c.Pa("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Md(c.speed(0), "10 + $rand*20"), c.wait(65), b(s, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, Y)])
  }), p(2), c.yb])});
  z["saki-3-1"] = new q.ha({top:c.action([c.fire(c.direction(180, "absolute"), fa, R(c.Pa("seed"))), p(60), c.fire(c.direction(180, "absolute"), fa, R(c.Pa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), fa, R(c.Pa("seed")), c.offsetX(80)), p(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), s, r, I), c.repeat(999, [c.fire(c.direction(90, "sequence"), r, I), c.fire(c.direction(90, "sequence"), r, I), c.fire(c.direction(90, "sequence"), r, I), p(10), c.fire(c.direction(100, 
  "sequence"), r, I)])])});
  z["saki-3-2"] = new q.ha({top:c.action([c.fire(c.direction(180, "absolute"), fa, Q(c.Pa("seed"))), p(60), c.fire(c.direction(180, "absolute"), fa, Q(c.Pa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), fa, Q(c.Pa("seed")), c.offsetX(80)), p(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), s, r, D), c.repeat(999, [c.fire(c.direction(90, "sequence"), r, D), c.fire(c.direction(90, "sequence"), r, D), c.fire(c.direction(90, "sequence"), r, D), p(10), c.fire(c.direction(80, "sequence"), 
  r, D)])])});
  z.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      Aa.push(M())
    }
    a = z.Nd = tm.$a.pc.ed;
    a.Ze = function(a) {
      return!(a instanceof M) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Yf = function(a) {
      var b = Aa.shift(0);
      if(b) {
        return b.na = v.Qg, ma.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.Qb ? (b.scaleX = 1, b.scaleY = 1, b.mc = l) : (b.scaleX = 0.8, b.scaleY = 1.5, b.mc = j), b.visible = a.visible === l ? l : j, b.Qb = !!a.Qb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.cg = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.Ec = v.Sg;
    q.ya.Ra.$rank = 0;
    q.ya.Ra.$hyperOff = 1
  };
  z.erase = function(a, b, c) {
    for(var d = [].concat(ma), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var m = wa(!!b);
        m.setPosition(d[f].x, d[f].y);
        c && (m.Ac = j)
      }
      d[f].Ca()
    }
  };
  z.cd = function() {
    for(var a = [].concat(ma), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  M = tm.createClass({superClass:tm.display.Sprite, na:0, Qb:l, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      Aa.push(this);
      var a = ma.indexOf(this);
      -1 !== a && ma.splice(a, 1)
    })
  }, update:function() {
    this.Qb && (this.rotation += 15)
  }, Ca:function() {
    var a = G(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var Aa = [], ma = M.Qa = []
})();
var T, U, La, V, Sa;
T = function(b, a, d) {
  return b < a ? a : b > d ? d : b
};
Sa = Math.PI / 180;
La = function(b) {
  return b * Sa
};
V = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
U = function(b, a) {
  return window.Math.random() * (a - b) + b
};

