/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(b) {
  throw b;
}
var i = void 0, j = !0, l = null, r = !1;
function z() {
  return function() {
  }
}
var G = {Pi:this};
(function() {
  function b(a, b) {
    for(var f = 0, h = a.length;f < h;f++) {
      if(a[f].label == b) {
        return a[f]
      }
    }
  }
  G.ka = function(a) {
    this.type = "none";
    this.root = this;
    this.hb = [];
    this.Le = [];
    this.Te = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof G.Nb ? this.hb.push(a[b]) : a[b] instanceof G.Ra ? this.Le.push(a[b]) : a[b] instanceof G.td && this.Te.push(a[b]))
      }
      a = 0;
      for(b = this.hb.length;a < b;a++) {
        this.hb[a].Wb(this)
      }
      a = 0;
      for(b = this.Le.length;a < b;a++) {
        this.Le[a].Wb(this)
      }
      a = 0;
      for(b = this.Te.length;a < b;a++) {
        this.Te[a].Wb(this)
      }
    }
  };
  G.ka.prototype.Ph = function(a) {
    return b(this.hb, a)
  };
  G.ka.prototype.Fk = function() {
    for(var a = [], b = 0, f = this.hb.length;b < f;b++) {
      var h = this.hb[b];
      h.label && 0 === h.label.indexOf("top") && (a[a.length] = h.label)
    }
    return a
  };
  G.ka.prototype.uk = function(a) {
    var b;
    if(b = this.Ph(a)) {
      return b
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  G.ka.prototype.vk = function(a) {
    return b(this.Le, a)
  };
  G.ka.prototype.wk = function(a) {
    var b;
    if(b = this.vk(a)) {
      return b
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  G.ka.prototype.xk = function(a) {
    return b(this.Te, a)
  };
  G.ka.prototype.yk = function(a) {
    var b;
    if(b = this.xk(a)) {
      return b
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  G.Ra = function() {
    this.root = this.label = l;
    this.direction = new G.wc(0);
    this.speed = new G.Ac(1);
    this.hb = [];
    this.Xa = {};
    this.Aa = {}
  };
  G.Ra.prototype.clone = function(a) {
    var b = new G.Ra;
    b.label = this.label;
    b.root = this.root;
    b.hb = this.hb;
    b.direction = new G.wc(a.ab(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new G.Ac(a.ab(this.speed.value));
    b.speed.type = this.speed.type;
    b.Xa = this.Xa;
    b.Aa = a.Aa;
    return b
  };
  G.Ra.prototype.Wb = function(a) {
    this.root = a;
    for(var b = 0, f = this.hb.length;b < f;b++) {
      this.hb[b].Wb(a)
    }
  };
  G.te = function(a) {
    this.root = l;
    this.label = a;
    this.cb = []
  };
  G.te.prototype.clone = function(a) {
    var b = a.Aa;
    a.Aa = a.$f(this.cb);
    var f = this.root.wk(this.label).clone(a);
    a.Aa = b;
    return f
  };
  G.te.prototype.Wb = function(a) {
    this.root = a
  };
  G.gb = function() {
    this.Cb = ""
  };
  G.gb.prototype.Wb = function(a) {
    this.root = a
  };
  G.Nb = function() {
    this.Cb = "action";
    this.root = this.label = l;
    this.cc = [];
    this.cb = []
  };
  G.Nb.prototype = new G.gb;
  G.Nb.prototype.Wb = function(a) {
    this.root = a;
    for(var b = 0, f = this.cc.length;b < f;b++) {
      this.cc[b].Wb(a)
    }
  };
  G.Nb.prototype.clone = function() {
    var a = new G.Nb;
    a.label = this.label;
    a.root = this.root;
    a.cc = this.cc;
    return a
  };
  G.rd = function(a) {
    this.Cb = "actionRef";
    this.label = a;
    this.root = l;
    this.cb = []
  };
  G.rd.prototype = new G.gb;
  G.rd.prototype.clone = function() {
    var a = new G.Nb;
    a.root = this.root;
    a.cc.push(this);
    return a
  };
  G.td = function() {
    this.Cb = "fire";
    this.Ia = this.speed = this.direction = this.root = this.label = l;
    this.Xa = new G.xe
  };
  G.td.prototype = new G.gb;
  G.td.prototype.Wb = function(a) {
    this.root = a;
    this.Ia && this.Ia.Wb(a)
  };
  G.wf = function(a) {
    this.Cb = "fireRef";
    this.label = a;
    this.cb = []
  };
  G.wf.prototype = new G.gb;
  G.ve = function() {
    this.Cb = "changeDirection";
    this.direction = new G.wc;
    this.xb = 0
  };
  G.ve.prototype = new G.gb;
  G.we = function() {
    this.Cb = "changeSpeed";
    this.speed = new G.Ac;
    this.xb = 0
  };
  G.we.prototype = new G.gb;
  G.se = function() {
    this.Cb = "accel";
    this.sc = new G.Af;
    this.vc = new G.Yf;
    this.xb = 0
  };
  G.se.prototype = new G.gb;
  G.De = function(a) {
    this.Cb = "wait";
    this.value = a || 0
  };
  G.De.prototype = new G.gb;
  G.Xf = function() {
    this.Cb = "vanish"
  };
  G.Xf.prototype = new G.gb;
  G.Be = function() {
    this.Cb = "repeat";
    this.qi = 0;
    this.action = l;
    this.cb = []
  };
  G.Be.prototype = new G.gb;
  G.Be.prototype.Wb = function(a) {
    this.root = a;
    this.action && this.action.Wb(a)
  };
  G.rf = function(a, b) {
    this.Cb = "bind";
    this.wl = a;
    this.tk = b
  };
  G.rf.prototype = new G.gb;
  G.Of = function(a, b) {
    this.Cb = "notify";
    this.qk = a;
    this.cb = b || l
  };
  G.Of.prototype = new G.gb;
  G.Li = new G.gb;
  G.wc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  G.Ac = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  G.Af = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  G.Yf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  G.xe = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.va = j;
    a.va !== i && (this.va = !!a.va)
  };
  G.ph = function(a) {
    this.value = a || 0
  };
  G.qh = function(a) {
    this.value = a || 0
  };
  G.Zg = function(a) {
    this.value = !!a
  }
})();
G.Ua = function(b) {
  this.zh = b;
  this.Ee = [];
  this.Lc = -1;
  this.qb = l;
  this.Aa = {}
};
G.Ua.prototype.next = function() {
  this.Lc += 1;
  if(this.qb !== l) {
    var b = this.qb.cc[this.Lc];
    if(b !== i) {
      if(b instanceof G.Nb) {
        return this.Td(), this.qb = b, this.Aa = this.Zf(), this.next()
      }
      if(b instanceof G.rd) {
        return this.Td(), this.qb = this.zh.uk(b.label), this.Aa = this.$f(b.cb), this.next()
      }
      if(b instanceof G.Be) {
        return this.Aa.Id = 0, this.Aa.Bg = this.ab(b.qi) | 0, this.Td(), this.qb = b.action.clone(), this.Aa = this.Zf(), this.next()
      }
      if(b instanceof G.td) {
        var a = new G.td;
        a.Ia = b.Ia.clone(this);
        b.direction !== l && (a.direction = new G.wc(this.ab(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new G.Ac(this.ab(b.speed.value)), a.speed.type = b.speed.type);
        a.Xa = new G.xe;
        a.Xa.offsetX = this.ab(b.Xa.offsetX);
        a.Xa.offsetY = this.ab(b.Xa.offsetY);
        a.Xa.va = b.Xa.va;
        return a
      }
      return b instanceof G.wf ? (this.Td(), this.qb = new G.Nb, this.qb.cc = [this.zh.yk(b.label)], this.Aa = this.$f(b.cb), this.next()) : b instanceof G.ve ? (a = new G.ve, a.direction.type = b.direction.type, a.direction.value = this.ab(b.direction.value), a.xb = this.ab(b.xb), a) : b instanceof G.we ? (a = new G.we, a.speed.type = b.speed.type, a.speed.value = this.ab(b.speed.value), a.xb = this.ab(b.xb), a) : b instanceof G.se ? (a = new G.se, a.sc.type = b.sc.type, a.sc.value = this.ab(b.sc.value), 
      a.vc.type = b.vc.type, a.vc.value = this.ab(b.vc.value), a.xb = this.ab(b.xb), a) : b instanceof G.De ? new G.De(this.ab(b.value)) : b instanceof G.Xf ? b : b instanceof G.rf ? (this.Aa["$" + b.wl] = this.ab(b.tk), G.Li) : b instanceof G.Of ? b : l
    }
    this.ck();
    if(this.qb === l) {
      return l
    }
    if((b = this.qb.cc[this.Lc]) && "repeat" == b.Cb) {
      this.Aa.Id++, this.Aa.Id < this.Aa.Bg && (this.Td(), this.qb = b.action.clone(), this.Aa = this.Zf())
    }
    return this.next()
  }
  return l
};
G.Ua.prototype.Td = function() {
  this.Ee.push({action:this.qb, cursor:this.Lc, scope:this.Aa});
  this.Lc = -1
};
G.Ua.prototype.ck = function() {
  var b = this.Ee.pop();
  b ? (this.Lc = b.cursor, this.qb = b.action, this.Aa = b.scope) : (this.Lc = -1, this.qb = l, this.Aa = {})
};
G.Ua.prototype.ab = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Aa[b]) || (a = G.Ua.Sb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in G.Ua.Sb) {
    G.Ua.Sb.hasOwnProperty(d) && (a[d] = G.Ua.Sb[d])
  }
  for(d in this.Aa) {
    this.Aa.hasOwnProperty(d) && (a[d] = this.Aa[d])
  }
  a.$rand = Math.random();
  (d = this.Ee[this.Ee.length - 1]) && (a.$loop = {index:d.scope.Id, count:d.scope.Id + 1, first:0 === d.scope.Id, last:d.scope.Id + 1 >= d.scope.Bg});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
G.Ua.prototype.$f = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.ab(b[d])
    }
  }else {
    for(d in this.Aa) {
      this.Aa.hasOwnProperty(d) && (a[d] = this.Aa[d])
    }
  }
  return a
};
G.Ua.prototype.Zf = function() {
  var b = {}, a;
  for(a in this.Aa) {
    this.Aa.hasOwnProperty(a) && (b[a] = this.Aa[a])
  }
  return b
};
G.ka.prototype.pg = function(b) {
  var a = new G.Ua(this);
  if(b = this.Ph(b)) {
    a.qb = b
  }
  return a
};
G.Ra.prototype.pg = function() {
  var b = new G.Ua(this.root), a = new G.Nb;
  a.root = this.root;
  a.cc = this.hb;
  b.qb = a;
  b.Aa = this.Aa;
  return b
};
G.Ua.Sb = {};
G.Ja = function(b) {
  b = b || "";
  for(var a in G.Ja) {
    G.Ja.hasOwnProperty(a) && (G.Pi[b + a] = G.Ja[a])
  }
};
G.Ja.action = function(b) {
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
  var f = new G.Nb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof G.gb)
    }) && g(Error("argument type error.")), f.cc = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof G.gb ? f.cc[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return f
};
G.Ja.xa = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("label is required."));
  f = new G.rd(b);
  if(a instanceof Array) {
    f.cb = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.cb.push(arguments[d])
    }
  }
  return f
};
G.Ja.Ia = function(b, a, d, f) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new G.Ra;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof G.wc ? m.direction = arguments[h] : arguments[h] instanceof G.Ac ? m.speed = arguments[h] : arguments[h] instanceof G.Nb ? m.hb.push(arguments[h]) : arguments[h] instanceof G.rd ? m.hb.push(arguments[h]) : arguments[h] instanceof Array ? m.hb.push(G.Ja.action(arguments[h])) : arguments[h] instanceof Object ? m.Xa = arguments[h] : "string" === typeof arguments[h] && (m.label = arguments[h])
  }
  return m
};
G.Ja.Dl = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("label is required."));
  f = new G.te(b);
  if(a instanceof Array) {
    f.cb = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.cb.push(arguments[d])
    }
  }
  return f
};
G.Ja.fire = function(b, a, d, f) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new G.td;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof G.wc ? m.direction = arguments[h] : arguments[h] instanceof G.Ac ? m.speed = arguments[h] : arguments[h] instanceof G.Ra ? m.Ia = arguments[h] : arguments[h] instanceof G.te ? m.Ia = arguments[h] : arguments[h] instanceof G.xe ? m.Xa = arguments[h] : arguments[h] instanceof G.ph ? m.Xa.offsetX = arguments[h].value : arguments[h] instanceof G.qh ? m.Xa.offsetY = arguments[h].value : arguments[h] instanceof G.Zg && (m.Xa.va = arguments[h].value)
  }
  m.Ia === i && g(Error("bullet (or bulletRef) is required."));
  return m
};
G.Ja.Il = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("label is required."));
  f = new G.wf(b);
  if(a instanceof Array) {
    f.cb = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.cb.push(arguments[d])
    }
  }
  return f
};
G.Ja.El = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("direction is required."));
  a === i && g(Error("term is required."));
  d = new G.ve;
  d.direction = b instanceof G.wc ? b : new G.wc(b);
  d.xb = a;
  return d
};
G.Ja.Me = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("speed is required."));
  a === i && g(Error("term is required."));
  d = new G.we;
  d.speed = b instanceof G.Ac ? b : new G.Ac(b);
  d.xb = a;
  return d
};
G.Ja.Cl = function(b, a, d) {
  for(var f = 0, h = arguments.length;f < h;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  h = new G.se;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof G.Af ? h.sc = b : arguments[f] instanceof G.Yf ? h.vc = a : h.xb = arguments[f]
  }
  h.sc === i && h.vc === i && g(Error("horizontal or vertical is required."));
  h.xb === i && g(Error("term is required."));
  return h
};
G.Ja.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && g(Error("value is required."));
  return new G.De(b)
};
G.Ja.$a = function() {
  return new G.Xf
};
G.Ja.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("times is required."));
  a === i && g(Error("action is required."));
  f = new G.Be;
  f.qi = b;
  if(a instanceof G.Nb || a instanceof G.rd) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = G.Ja.action(a)
    }else {
      for(var h = [], d = 1;d < arguments.length;d++) {
        h.push(arguments[d])
      }
      f.action = G.Ja.action(h)
    }
  }
  return f
};
G.Ja.Ha = function(b, a) {
  return new G.rf(b, a)
};
G.Ja.Pl = function(b, a) {
  return new G.Of(b, a)
};
G.Ja.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new G.wc(b);
  a !== i && (d.type = a);
  return d
};
G.Ja.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new G.Ac(b);
  a && (d.type = a);
  return d
};
G.Ja.sc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new G.Af(b);
  a && (d.type = a);
  return d
};
G.Ja.vc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new G.Yf(b);
  a && (d.type = a);
  return d
};
G.Ja.Hl = function(b) {
  return new G.xe(b)
};
G.Ja.offsetX = function(b) {
  return new G.ph(b)
};
G.Ja.offsetY = function(b) {
  return new G.qh(b)
};
G.Ja.va = function(b) {
  return new G.Zg(b)
};
tm.Bb = tm.Bb || {};
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
  tm.Bb.Wc = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.wh = a
  }, Oe:function(a, b) {
    var d = this.wh.Fk();
    if(b === i && 0 < d.length) {
      for(var f = [], w = 0, n = d.length;w < n;w++) {
        f[f.length] = this.xh(a, d[w])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          p.kg == f.length && (p.Yd = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, w = f.length;w--;) {
        f[w].ef = p
      }
      p.kg = 0;
      p.Fh = function() {
        this.kg++
      };
      p.kg = 0;
      p.Yd = r;
      p.tg = j;
      p.stop = r;
      return p
    }
    return this.xh(a, b)
  }, xh:function(a, b) {
    function d() {
      if(!d.stop) {
        d.oa += 1;
        this.oa = d.oa;
        var a = d.Ne, b = d.bk;
        if(b) {
          if(d.oa < d.ig ? d.direction += d.Dd : d.oa === d.ig && (d.direction = d.Oc), d.oa < d.jg ? d.speed += d.pe : d.oa === d.jg && (d.speed = d.Pd), d.oa < d.dg ? (d.od += d.He, d.qd += d.Ie) : d.oa === d.dg && (d.od = d.Fe, d.qd = d.Ge), this.x += Math.cos(d.direction) * d.speed * a.pd, this.y += Math.sin(d.direction) * d.speed * a.pd, this.x += d.od * a.pd, this.y += d.qd * a.pd, a.ug(this)) {
            if(a.Uc || this.Uc) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.oa < d.ri || d.Yd)) {
              for(var f;f = d.si.next();) {
                switch(f.Cb) {
                  case "fire":
                    b.Zj.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.ri = "number" === typeof f.value ? d.oa + f.value : 0 !== (a = ~~f.value) ? d.oa + a : d.oa + eval(f.value);
                    return;
                  case "changeDirection":
                    b.Uj.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.Vj.call(this, f, d);
                    break;
                  case "accel":
                    b.Sj.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.$j.call(this, f)
                }
              }
              d.Yd = j;
              d.ef ? d.ef.Fh() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.Yd = j, d.ef ? d.ef.Fh() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Bb.Wc.Zd, f;
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
    "string" === typeof b ? d.si = this.wh.pg(b) : b instanceof G.Ra ? d.si = b.pg() : (window.console.error(a, b), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.bk = this;
    d.Ne = a;
    d.ri = -1;
    d.Yd = r;
    d.direction = 0;
    d.$h = 0;
    d.speed = 0;
    d.bi = 0;
    d.od = 0;
    d.qd = 0;
    d.Dd = 0;
    d.Oc = 0;
    d.ig = -1;
    d.pe = 0;
    d.Pd = 0;
    d.jg = -1;
    d.He = 0;
    d.Fe = 0;
    d.Ie = 0;
    d.Ge = 0;
    d.dg = -1;
    d.oa = -1;
    d.stop = r;
    d.tg = j;
    return d
  }, Yj:function(a) {
    function b() {
      b.stop || (this.x += b.Jh, this.y += b.Kh, b.Ne.ug(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Bb.Wc.Zd, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.Ne = a;
    b.direction = 0;
    b.speed = 0;
    b.Jh = 0;
    b.Kh = 0;
    b.stop = r;
    b.tg = j;
    return b
  }, Zj:function(b, d, f, v) {
    if(this.cl === i || this.Ib) {
      var w = {label:b.Ia.label}, n;
      for(n in b.Ia.Xa) {
        w[n] = b.Ia.Xa[n]
      }
      if(w = d.Eh(w)) {
        v = (n = 0 === b.Ia.hb.length) ? v.Yj(d) : v.Oe(d, b.Ia);
        var p = this, s = {x:this.x + b.Xa.offsetX, y:this.y + b.Xa.offsetY};
        f.$h = v.direction = function(n) {
          var k = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? b.Xa.va ? a(s, d.target) + k : a(p, d.target) + k : k - Math.PI / 2;
            case "absolute":
              return k - Math.PI / 2;
            case "relative":
              return f.direction + k;
            default:
              return f.$h + k
          }
        }(b.direction || b.Ia.direction);
        f.bi = v.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.bi + b;
            default:
              return b
          }
        }(b.speed || b.Ia.speed);
        w.x = s.x;
        w.y = s.y;
        n && (v.Jh = Math.cos(v.direction) * v.speed * d.pd, v.Kh = Math.sin(v.direction) * v.speed * d.pd);
        w.Uc = !!w.Uc;
        if(d.Uc || w.Uc) {
          w.rotation = (v.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, w.speed = v.speed
        }
        w.addEventListener("enterframe", v);
        d.Bh ? d.Bh.addChild(w) : this.parent && this.parent.addChild(w)
      }
    }
  }, Uj:function(d, f, q) {
    var v = eval(d.direction.value) * Math.DEG_TO_RAD, w = eval(d.xb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        q.Oc = a(this, d) + v;
        q.Dd = b(q.Oc - q.direction) / w;
        break;
      case "absolute":
        q.Oc = v - Math.PI / 2;
        q.Dd = b(q.Oc - q.direction) / w;
        break;
      case "relative":
        q.Oc = q.direction + v;
        q.Dd = b(q.Oc - q.direction) / w;
        break;
      case "sequence":
        q.Dd = v, q.Oc = q.direction + q.Dd * (w - 1)
    }
    q.ig = q.oa + w
  }, Vj:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.xb);
    switch(a.speed.type) {
      case "absolute":
        b.Pd = d;
        b.pe = (b.Pd - b.speed) / f;
        break;
      case "relative":
        b.Pd = d + b.speed;
        b.pe = (b.Pd - b.speed) / f;
        break;
      case "sequence":
        b.pe = d, b.Pd = b.speed + b.pe * f
    }
    b.jg = b.oa + f
  }, Sj:function(a, b) {
    var d = eval(a.xb);
    b.dg = b.oa + d;
    if(a.sc) {
      var f = eval(a.sc.value);
      switch(a.sc.type) {
        case "absolute":
        ;
        case "sequence":
          b.He = (f - b.od) / d;
          b.Fe = f;
          break;
        case "relative":
          b.He = f, b.Fe = (f - b.od) * d
      }
    }else {
      b.He = 0, b.Fe = b.od
    }
    if(a.vc) {
      switch(f = eval(a.vc.value), a.vc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Ie = (f - b.qd) / d;
          b.Ge = f;
          break;
        case "relative":
          b.Ie = f, b.Ge = (f - b.qd) * d
      }
    }else {
      b.Ie = 0, b.Ge = b.qd
    }
  }, $j:function(a) {
    var b = tm.event.Event(a.qk);
    if(a.cb) {
      for(var d in a.cb) {
        b[d] = a.cb[d]
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
  tm.Bb.mk = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.Bb.Ih = function(a) {
    if(f === l) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.Bb.Fl = function() {
    return j
  };
  tm.Bb.Wc.Zd = {Eh:tm.Bb.mk, ug:tm.Bb.Ih, Tl:0, Uc:r, pd:2, target:l};
  G.ka.prototype.Oe = function(a) {
    return tm.Bb.Wc(this).Oe(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(z());
tm.main(function() {
  gls2.Ri("#canvas2d");
  gls2.core.run()
});
gls2.Ri = tm.createClass({superClass:tm.display.CanvasApp, ce:0, Jk:0, Lk:0, Kk:0, Hk:0, Ik:l, Wd:3, nd:3, Lh:1, ca:l, Bd:3, init:function(b) {
  gls2.core !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = gls2.ja.Oi;
  this.background = "rgba(0,0,0,0)";
  this.Vg = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.ui.LoadingScene({assets:{tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", 
  explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", tex_stage3:"assets/tex_stage3.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmLoopInfo:"assets2/loop.json", 
  "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/achevement":"assets2/se_maoudamashii_system46.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", 
  "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, nextScene:function() {
    this.ak();
    return gls2.TitleScene()
  }.bind(this)}));
  window.achevements && (this.Bd = window.achevements.length)
}, update:function() {
  for(var b = [].concat(this.Vg), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.Vg.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, ak:function() {
  gls2.ya.setup(12345);
  ["tex1", "tex2", "tex3", "tex_tank1"].forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawTexture(a, 0, 0);
    d = d.getBitmap();
    d.filter({calc:function(a, b, d, f, w) {
      w.setPixelIndex(b, a[0], 0, 0)
    }});
    var f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(b + "Red", f)
  });
  gls2.ia.setup();
  gls2.ra.setup();
  this.ca = gls2.Ya()
}, Gl:function() {
  this.stop()
}, ci:r, Mg:function(b, a) {
  var d = {score:Math.floor(this.ca.score), stage:this.ca.re + 1, continueCount:this.ca.Cc, shipType:this.ca.fa.type, shipStyle:this.ca.fa.style, fps:0, screenShot:this.ca.Md};
  b ? (d.userName = b, this.ci = r) : this.ci = j;
  tm.util.Ajax.load({url:"/api/ranking/post", data:d, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        a(l, j, b.scoreId)
      }else {
        if(b.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.Mg(l, a);
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(b = "";"" === b;) {
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.Ek())
              }
              b !== l && (b = b.substring(0, 10), this.Mg(b + " (\u533f\u540d)", a))
            }else {
              a(l, r)
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
}, Ek:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc(30) \u76f8\u7530\u7dcf\u7406".split(" ").pickup()
}, Vg:l, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}, Oa:function(b) {
  if(window.achevements) {
    var a = window.achevements;
    -1 == a.indexOf(b) && (this.Bd += 1, a.push(b), tm.util.Ajax.load({url:"/api/achevement/" + b, type:"POST", dataType:"json", success:function(a) {
      console.dir(a);
      gls2.Yg[b] && (gls2.ta("achevement"), this.ca.Xh.addChild(gls2.hh(gls2.Yg[b].title)))
    }.bind(this), error:function() {
      console.warn("error!")
    }}))
  }
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Fc = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.Ya.Rd && gls2.Ya.Rd.je(0)
};
gls2.continueCountMax = function(b) {
  gls2.core && (gls2.core.Bd = b)
};
gls2.ja = {qj:r, Oi:60, lj:0, fh:[1E9, 1E10], nj:3E3, jh:3, ih:[3, 2, 1], wi:[6, 4, 2], sh:1, kj:0.1, kh:1, mj:0.25, xl:1, Al:0.25, vi:2, dj:0.005, $i:0.01, aj:0.001, Wi:0.015, Xi:0.002, fj:0.001, hj:0.01, ej:0, cj:0, bj:0, Zi:0.03, Yi:0.004, gj:0, ij:0, jj:0.75, yf:10, ye:800, Vi:0.25, Ui:0.1, xf:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], Fi:0.02, Gi:0.5, Ei:0.005, eh:1E3, zi:10, xi:1, Gj:1E3, Fj:100, Ej:0, Dj:0, Cj:1E3, Bj:100, Mi:0.5, Ai:3, Hi:22500, yi:50, vj:10, Xg:r, ti:j, zj:1E3, Aj:2E3, 
wj:4E3, xj:1E4, yj:2E7, pj:100, zl:"tmshooter"};
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.rh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Lb:0, Dc:j, Vd:j, Jd:r, ca:l, speed:0, Gb:l, Cd:l, ei:l, Xe:l, Tb:l, qg:l, Bc:l, rg:l, sg:l, frame:0, init:function(a, f, h) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = f;
    this.style = h;
    tm.Bb.Wc.Zd.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Cd = this.ei = gls2.uh(f, 100);
    this.Xe = gls2.uh(3, 100);
    this.Tb = gls2.nh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Tb.visible = r;
    this.Xj();
    this.Gb = this.Wj();
    1 === this.style && (this.Gb = [this.Gb[1], this.Gb[2]]);
    this.Bc = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(h = this.Gb.length;f < h;f++) {
      var m = this.Gb[f];
      gls2.Ci(this, m).setPosition(m.x, m.y).addChildTo(this.Bc)
    }
    this.Rk = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Rk.blendMode = "lighter";
    this.rg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.rg.blendMode = "lighter";
    this.rg.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Va && !a.La
    };
    this.sg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.sg.blendMode = "lighter";
    this.sg.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Va && !a.La
    };
    this.de = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.de.blendMode = "lighter";
    this.de.rotation = -90;
    this.de.strokeStyle = "rgba(180,180,255,0.4)";
    this.de.update = function() {
      this.visible = a.La
    };
    this.de.draw = function(b) {
      b.lineCap = "round";
      var f = a.Gd / gls2.ja.ye;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, r);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, r);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, r)
    };
    this.Mk = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Mk.update = function() {
      this.visible = a.La
    };
    b === l && (b = gls2.$g(this.ca.na))
  }, Wj:function() {
    if(0 === this.type) {
      return[{x:0, fd:0, y:40, d:0, Xb:j, Qb:-0.7, v:j}, {x:0, fd:0, y:40, d:0, Xb:j, Qb:0.5, v:j}, {x:0, fd:0, y:40, d:0, Xb:j, Qb:-0.5, v:j}, {x:0, fd:0, y:40, d:0, Xb:j, Qb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, Xb:r, Qb:-0.7, v:j}, {x:-40, y:40, d:0.1, Xb:r, Qb:-0.5, v:j}, {x:40, y:40, d:0.1, Xb:j, Qb:0.5, v:j}, {x:70, y:20, d:0.1, Xb:j, Qb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, Xb:r, Qb:-0.7, v:j}, {x:-30, y:20, d:0.4, Xb:r, Qb:-0.5, v:j}, {x:30, y:20, d:0.4, Xb:j, Qb:0.5, v:j}, {x:60, y:40, d:0.6, Xb:j, Qb:0.7, v:j}]
    }
  }, Xj:function() {
    this.qg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.qg.setFrameIndex(5);
    this.qg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Sc:-1, Fd:r, Rb:r, update:function(d) {
    this.visible = this.Jd ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.Dc) {
      var h = f.getKeyAngle();
      h !== l && (h = a[h], this.x += h.x * this.speed * (this.Rb ? 0.5 : 1), this.y += h.y * this.speed * (this.Rb ? 0.5 : 1));
      this.x = gls2.ma.clamp(this.x, 15, 465);
      this.y = gls2.ma.clamp(this.y, 15, 625);
      var m = f.getKey("c") && this.Vd, h = f.getKey("z") && this.Vd;
      this.Sc = m ? this.Sc + 1 : this.Sc - 1;
      this.Sc = gls2.ma.clamp(this.Sc, -1, 10);
      this.Rb = h && m || 10 === this.Sc;
      m = this.ca.La ? 3 : 5;
      this.Fd = !this.Rb && (0 <= this.Sc || h) && 0 === d.frame % m;
      h && (this.Sc = 0);
      this.Tb.x = this.x;
      this.Tb.y = this.y - 40;
      f.getKeyDown("x") && this.Vd && (0 < this.ca.Va && !this.ca.La ? (this.ca.pl(), gls2.Rj(this).addChildTo(this.ca)) : !this.ca.jd && 0 < this.ca.Hb && (this.Db = gls2.ma.clamp(this.Db - 2, 0, 1), this.ca.Ud(-0.02), gls2.ah(this, this.ca).setPosition(gls2.ma.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.Rb = this.Fd = r
    }
    this.Fd && (h = Math.sin(0.2 * d.frame), m = this.Cd.fire(this.x - 7 - 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.ca), m = this.Cd.fire(this.x + 7 + 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.ca));
    if(this.Rb) {
      h = 0;
      for(m = this.Gb.length;h < m;h++) {
        this.Gb[h].v = r
      }
      this.Bc.rotation = 0
    }else {
      this.Tb.visible = r;
      h = 0;
      for(m = this.Gb.length;h < m;h++) {
        this.Gb[h].v = j
      }
    }
    this.lk(f);
    this.Tj(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = d.frame
  }, Ec:function() {
    this.Rb = this.Fd = r;
    this.ca.Pe();
    this.ca.ib = 0;
    this.ca.bb = 0;
    this.ca.Qa = 0
  }, lk:function(a) {
    if(0 === this.type) {
      for(a = this.Gb.length;this.Gb[--a] !== i;) {
        var b = this.Gb[a];
        0 === a ? b.x = b.fd + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.fd + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.fd + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.fd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Bc, b.rotation = this.Rb ? 0 : this.Dc && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Dc && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, Tj:function(a, b) {
    this.Dc && a.getKey("left") ? this.Lb = gls2.ma.clamp(this.Lb - 0.2, -3, 3) : this.Dc && a.getKey("right") ? this.Lb = gls2.ma.clamp(this.Lb + 0.2, -3, 3) : 0 > this.Lb ? this.Lb = gls2.ma.clamp(this.Lb + 0.2, -3, 3) : 0 < this.Lb && (this.Lb = gls2.ma.clamp(this.Lb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Lb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Lb) : 2 === this.type && this.setFrameIndex(31 + ~~this.Lb);
    return b
  }});
  gls2.Ci = tm.createClass({superClass:tm.display.AnimationSprite, dd:l, fa:l, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.dd = b;
    this.fa = a;
    this.altitude = 10;
    this.gotoAndPlay(b.Xb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.dd.v) {
      this.x = this.dd.x * (this.fa.ca.La ? 1.5 : 1);
      this.y = this.dd.y * (this.fa.ca.La ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.dd.d * this.dd.Qb);
      var f = this.parent.localToGlobal(this);
      this.dd.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.ca);
      this.fa.Fd && (f = this.fa.Cd.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== l && f.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  gls2.xd = tm.createClass({superClass:tm.display.Sprite, speed:0, bd:0, hk:1, Wh:0, kb:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.bd = gls2.ja.sh;
    b === l && (b = gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.oe(a)
  }, update:function() {
    this.x += this.Ic;
    this.y += this.ic;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, oe:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Ve:function(a) {
    for(var f = 0;f < a;f++) {
      var h = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = gls2.ma.randf(2, 8), q = 2 * Math.random() * Math.PI;
      h.Ea = Math.cos(q) * m;
      h.Fa = Math.sin(q) * m;
      h.scaleX = h.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
      h.addEventListener("enterframe", function() {
        this.x += this.Ea;
        this.y += this.Fa;
        this.Ea *= 0.9;
        this.Fa *= 0.9
      })
    }
  }});
  gls2.xd.Xd = function() {
    for(var b = [].concat(a), f = 0, h = b.length;f < h;f++) {
      b[f].remove()
    }
  };
  var a = gls2.xd.rb = [];
  gls2.uh = tm.createClass({Rc:l, Vh:r, init:function(b, f) {
    this.Vh = 3 === b;
    this.Rc = [];
    for(var h = 0;h < f;h++) {
      var m = gls2.xd(b), q = this;
      m.addEventListener("added", function() {
        this.sa = gls2.ja.vj;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        q.Rc.push(this)
      });
      this.Vh && m.addEventListener("enterframe", function(a) {
        this.setScale((this.hk + this.Wh) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Rc.push(m)
    }
  }, fire:function(a, b, h) {
    var m = this.Rc.pop();
    if(m === i) {
      return l
    }
    var q = gls2.ma.degToRad(h);
    m.Ic = Math.cos(q) * m.speed;
    m.ic = Math.sin(q) * m.speed;
    m.setPosition(a, b);
    m.rotation = h + 90;
    return m
  }, Nd:function(a) {
    for(var b = this.Rc.length;this.Rc[--b] !== i;) {
      this.Rc[b].bd = gls2.ja.sh + gls2.ja.kj * a, this.Rc[b].Wh = 0.2 * a
    }
  }})
})();
gls2.nh = tm.createClass({superClass:tm.display.Sprite, fa:l, ca:l, nc:0, frame:0, pi:l, color:l, Ch:0, fg:0, ik:r, head:l, Qh:l, oc:l, kb:j, bd:gls2.ja.kh, Ld:l, init:function(b, a) {
  this.fa = b;
  this.ca = b.ca;
  this.Ch = 0 === this.fa.style ? 1 : 1.2;
  this.fg = 0 === this.fa.style ? 50 : 75;
  var d = this;
  this.pi = a;
  this.superInit(a.redBody, this.fg, 100);
  this.boundingHeightBottom = 1;
  this.Ul = 0;
  this.origin.y = 1;
  var f = this.oc = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.Qh = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.nc - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.nc
  };
  this.oe(["red", "green", "blue"][this.fa.type]);
  this.Nd(0)
}, oe:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.pi[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.oc.gotoAndPlay(this.color);
  this.Qh.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Ld = l;
  return this
}, Nd:function(b) {
  this.boundingWidth = this.width = this.fg + 30 * b / gls2.ja.yf;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.bd = this.Ch * gls2.ja.kh + gls2.ja.mj * b;
  0 === b ? this.oe(["red", "green", "blue"][this.fa.type]) : this.oe("hyper")
}, Ve:function(b, a) {
  this.Ld === l && this.Gh();
  a = a || this.nc;
  for(var d = 0;d < b;d++) {
    var f = this.Ld.clone().setPosition(this.x, a).addChildTo(this.ca), h = gls2.ma.randf(8, 14), m = gls2.ma.randf(0, Math.PI);
    f.Ea = Math.cos(m) * h;
    f.Fa = Math.sin(m) * h;
    f.scaleX = f.scaleY = (gls2.ma.randf(0.5, 1.5) + gls2.ma.randf(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.Ea;
      this.y += this.Fa;
      this.Ea *= 0.95;
      this.Fa *= 0.95
    })
  }
}, Ak:function(b, a, d) {
  this.Ld === l && this.Gh();
  for(var f = 0;f < b;f++) {
    var h = this.Ld.clone().setPosition(a, d).addChildTo(this.ca), m = gls2.ma.randf(12, 20), q = gls2.ma.randf(0, Math.PI);
    h.Ea = Math.cos(q) * m;
    h.Fa = Math.sin(q) * m;
    h.scaleX = h.scaleY = (gls2.ma.randf(1, 3) + gls2.ma.randf(1, 3)) / 2;
    h.addEventListener("enterframe", function() {
      this.x += this.Ea;
      this.y += this.Fa;
      this.Ea *= 0.95;
      this.Fa *= 0.95
    })
  }
}, Gh:function() {
  this.Ld = "hyper" === this.color ? gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.fa.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.fa.Rb) ? (this.nc = Math.max(0, this.nc - 40), this.height = this.y - this.nc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.nc = this.y - 40;
  this.ik = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Kl:function() {
  return this.nc
}, kl:function(b) {
  this.nc = b;
  this.head.update()
}});
gls2.nh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.nc
});
(function() {
  gls2.ah = tm.createClass({superClass:tm.app.Object2D, kb:j, ca:l, init:function(a, d) {
    this.superInit();
    this.fa = a;
    this.ca = d;
    this.mi = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.mi.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.mi));
    this.Ah();
    b === l && (b = gls2.Wa(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.oa = 0;
    this.le = 1;
    this.addEventListener("added", function() {
      this.ca.jd = j;
      this.fa.Jd = j;
      this.ca.Hb -= 1;
      this.ca.Ze = r;
      this.ca.Pe();
      this.ca.vb("drop BOMBER!!", j);
      gls2.ta("bomb");
      gls2.ta("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.jd = r;
      this.fa.Jd = r
    })
  }, Ah:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ma.randf(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.le + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.oa;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.oa += 3.6, this.le = -1) : (this.b = 8, this.oa += 1.8, this.le = 1)
  }});
  gls2.oh = tm.createClass({superClass:gls2.ah, init:function(a, b) {
    this.superInit(a, b);
    gls2.ja.ti && this.addEventListener("added", function() {
      this.ca.Hb = 0
    })
  }, Ah:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ma.randf(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.le + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.oa;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.oa += 1.8, this.le = 1)
  }});
  var b = l
})();
gls2.Di = tm.createClass({superClass:tm.display.Sprite, Ic:0, ic:0, fa:l, oa:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.fa = d;
  this.ic = 1;
  this.Ic = 0.5 > gls2.ya.random() ? -1 : 1;
  this.oa = 0
}, update:function() {
  this.x += this.Ic;
  this.y += 2 * this.ic;
  if(2025 > gls2.Fc(this, this.fa)) {
    this.fa.ca.ek(1), this.remove()
  }else {
    if(3E3 > this.oa) {
      if(30 > this.x || 450 < this.x) {
        this.Ic *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.ic *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.oa += 1
}});
gls2.Ni = tm.createClass({superClass:tm.display.Sprite, Ic:0, ic:0, fa:l, oa:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var f = -1;1 >= f;f++) {
    for(var h = -1;1 >= h;h++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(f, h).addChildTo(this)
    }
  }
  this.setPosition(b, a);
  this.fa = d
}, update:function() {
  this.y += 0.5;
  4096 > gls2.Fc(this, this.fa) && (this.fa.ca.Nh(), gls2.core.Oa("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.Yg = {hyper1:{title:"\u30cf\u30a4\u30d1\u30fc\u30b7\u30b9\u30c6\u30e0\u8d77\u52d5\uff01", description:"\u30cf\u30a4\u30d1\u30fc\u30b7\u30b9\u30c6\u30e0\u3092\u521d\u3081\u3066\u767a\u52d5\u3059\u308b"}, hyper10:{title:"\u30d5\u30eb\u30cf\u30a4\u30d1\u30fc\uff01\uff01", description:"\u30cf\u30a4\u30d1\u30fc\u30b7\u30b9\u30c6\u30e0\u3092Lv10\u307e\u3067\u6e9c\u3081\u3066\u767a\u52d5\u3059\u308b"}, score100M:{title:"\u30b9\u30b3\u30a21\u5104\uff01", description:"\u30b9\u30b3\u30a2\u30921\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, 
score2G:{title:"\u30b9\u30b3\u30a220\u5104\uff01", description:"\u30b9\u30b3\u30a2\u309220\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, score20G:{title:"\u30b9\u30b3\u30a2200\u5104\uff01", description:"\u30b9\u30b3\u30a2\u3092200\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, score50G:{title:"\u30b9\u30b3\u30a2500\u5104\uff01", description:"\u30b9\u30b3\u30a2\u3092500\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, score100G:{title:"\u30b9\u30b3\u30a21000\u5104\uff01", description:"\u30b9\u30b3\u30a2\u30921000\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, 
score1T:{title:"\u30b9\u30b3\u30a21\u5146\uff01", description:"\u30b9\u30b3\u30a2\u30921\u5146\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, combo100:{title:"100HIT\u9054\u6210\uff01", description:"\u30b3\u30f3\u30dc\u3092100HIT\u4ee5\u4e0a\u3064\u306a\u3052\u308b"}, combo1000:{title:"1000HIT\u9054\u6210\uff01", description:"\u30b3\u30f3\u30dc\u30921000HIT\u4ee5\u4e0a\u3064\u306a\u3052\u308b"}, combo10000:{title:"10000HIT\u9054\u6210\uff01", description:"\u30b3\u30f3\u30dc\u309210000HIT\u4ee5\u4e0a\u3064\u306a\u3052\u308b"}, 
combo100000:{title:"100000HIT\u9054\u6210\uff01", description:"\u30b3\u30f3\u30dc\u3092100000HIT\u4ee5\u4e0a\u3064\u306a\u3052\u308b"}, extend1:{title:"\u30d5\u30a1\u30fc\u30b9\u30c8\u30a8\u30af\u30b9\u30c6\u30f3\u30c9\uff01", description:"\u521d\u3081\u3066\u30d5\u30a1\u30fc\u30b9\u30c8\u30a8\u30af\u30b9\u30c6\u30f3\u30c9(100,000\u70b9)\u3092\u9054\u6210\u3059\u308b"}, extend2:{title:"\u30bb\u30ab\u30f3\u30c9\u30a8\u30af\u30b9\u30c6\u30f3\u30c9\uff01", description:"\u521d\u3081\u3066\u30bb\u30ab\u30f3\u30c9\u30a8\u30af\u30b9\u30c6\u30f3\u30c9(1,000,000\u70b9)\u3092\u9054\u6210\u3059\u308b"}, 
extend3:{title:"\u8ca1\u95a5\u304b\u3089\u306e\u30d7\u30ec\u30bc\u30f3\u30c8", description:"\u521d\u3081\u3066\u30a8\u30af\u30b9\u30c6\u30f3\u30c9\u30a2\u30a4\u30c6\u30e0\u3092\u53d6\u5f97\u3059\u308b"}, nomiss1:{title:"\u30b9\u30c6\u30fc\u30b81\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, nomiss2:{title:"\u30b9\u30c6\u30fc\u30b82\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", 
description:"\u30b9\u30c6\u30fc\u30b82\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, nomiss3:{title:"\u30b9\u30c6\u30fc\u30b83\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", description:"\u30b9\u30c6\u30fc\u30b83\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, nomiss4:{title:"\u30b9\u30c6\u30fc\u30b84\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", 
description:"\u30b9\u30c6\u30fc\u30b84\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, nomiss5:{title:"\u30b9\u30c6\u30fc\u30b85\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", description:"\u30b9\u30c6\u30fc\u30b85\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, boss1:{title:"\u30df\u30b9\u30df\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30df\u30b9\u30df\u300d\u3092\u6483\u7834\u3059\u308b"}, 
boss2:{title:"\u30d2\u30e5\u30a6\u30ac\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30d2\u30e5\u30a6\u30ac\u300d\u3092\u6483\u7834\u3059\u308b"}, boss3:{title:"\u30e2\u30e2\u30be\u30ce\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30e2\u30e2\u30be\u30ce\u300d\u3092\u6483\u7834\u3059\u308b"}, boss4:{title:"\u30a2\u30a4\u30c0\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30a2\u30a4\u30c0\u300d\u3092\u6483\u7834\u3059\u308b"}, 
boss5:{title:"\u30db\u30a6\u30b8\u30e7\u30a6\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30db\u30a6\u30b8\u30e7\u30a6\u300d\u3092\u6483\u7834\u3059\u308b"}};
gls2.ra = {};
gls2.ra.setup = function() {
  gls2.pk = {};
  gls2.ra.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.pk.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.particle16 = gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.ra.Ve = function(b, a, d) {
  b = gls2.ra.particle16.clone().setPosition(b, a);
  b.kb = j;
  b.addChildTo(d);
  d = gls2.ma.randf(5, 20);
  a = gls2.ma.randf(Math.PI, 2 * Math.PI);
  b.Ea = Math.cos(a) * d;
  b.Fa = Math.sin(a) * d;
  b.scaleX = b.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.Ea;
    this.y += this.Fa;
    this.Ea *= 0.9;
    this.Fa *= 0.9
  })
};
gls2.ra.Sh = function(b, a, d, f) {
  f = f || 1.8;
  var h = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  h.kb = j;
  h.addChildTo(d);
  h.image = gls2.ra.shockwaveImage;
  h.tweener.clear().to({scaleX:f, scaleY:f, alpha:0}, 800, "easeOutQuad").call(function() {
    h.remove()
  })
};
gls2.ra.Ck = function(b, a, d) {
  var f = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  f.kb = j;
  f.addChildTo(d);
  f.image = gls2.ra.shockwaveImage;
  f.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
};
gls2.ra.Bk = function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.kb = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.ra.Re = function(b, a, d, f) {
  gls2.ta("explode");
  var h = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  h.kb = j;
  if(f !== i) {
    var m = f.x, q = f.y;
    h.addEventListener("enterframe", function() {
      this.x += m;
      this.y += q;
      m *= 0.99;
      q *= 0.99
    })
  }
  h.addChildTo(d);
  gls2.ra.Sh(b, a, d)
};
gls2.ra.sk = function(b, a, d) {
  gls2.ta("explode");
  var f = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.kb = j;
  f.addChildTo(d);
  f = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.kb = j;
  f.addChildTo(d);
  f = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.kb = j;
  f.addChildTo(d)
};
gls2.ra.Jb = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Kc.noise.length), h = 0;20 > h;h++) {
    var m = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Kc.noise.at(~~(gls2.Kc.noise.length * h / 20) + f), 2);
    m.kb = j;
    m.addChildTo(d)
  }
  gls2.ra.Sh(b, a, d, 5)
};
gls2.ra.og = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Kc.noise.length), h = 0;20 > h;h++) {
    for(var m = 2 * Math.PI * h / 20, q = Math.pow(gls2.Kc.noise.at(~~(gls2.Kc.noise.length * h / 20) + f), 2), v = 0;3 > v;v++) {
      var w = 4 * q * (v + 1), n = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.oa += 1
      }).setScale(0.3 * (3 - v)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      n.rotation = 2 * Math.random() * Math.PI;
      n.kb = j;
      n.oa = 0;
      n.a = m;
      n.v = w;
      n.addChildTo(d)
    }
  }
};
gls2.vf = tm.createClass({superClass:tm.app.Object2D, target:l, md:0, angle:0, alpha:2, kb:j, reverse:r, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.md = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Wa(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.md + this.target.x, Math.sin(a) * this.md + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.md += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.md || 200 < this.md) && this.remove()
  }
}});
gls2.Rj = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, kb:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Wa(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ma.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ma.rand(-2, 2)).on("enterframe", function() {
        this.x += this.Ea;
        this.y += this.Fa
      }).addChildTo(this.target.parent);
      a.Ea = 3 * Math.cos(this.angle);
      a.Fa = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
gls2.hh = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(b) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.8)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + b + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, Rl:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.label.x -= 2;
  -480 > this.label.x && (this.alpha *= 0.9, 0.001 > this.alpha && this.remove())
}});
gls2.Ij = tm.createClass({superClass:tm.graphics.Canvas, ca:l, Ad:l, wb:l, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Ad = gls2.Ii(200);
  this.wb = gls2.th(this)
}, update:function() {
  this.clear();
  this.ca.bc !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.wb.rc - 20, 470 * this.ca.bc.sa / this.ca.bc.Pc, 20), this.strokeRect(5, this.wb.rc - 20, 470, 20), this.clear(263.5, this.wb.rc - 20 + 2, 2, 16), this.clear(52, this.wb.rc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.wb.rc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.ib)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.Qa / gls2.ja.eh) + 1), this.wb.be + 192, 22);
  b = [0, 1, 4][this.ca.fa.type];
  for(a = 0;a < this.ca.Vc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * G.Ua.Sb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.ge + " hit", this.wb.be + 10, 95);
  0 < ~~this.ca.Qa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.Qa + " HIT!!", 10, 0.5 * -this.wb.rc + 115));
  0 === this.frame % 2 && (!this.ca.La && 0 < this.ca.Va ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Va, 5, 637)) : this.ca.La && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.gd, 5, 637)));
  for(a = 0;a < this.ca.Hb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.Ze && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Ad.update();
  this.Ad.Lg = this.wb.rc + 5;
  this.Ad.draw(this);
  this.frame += 1
}});
gls2.th = tm.createClass({superClass:tm.app.Object2D, Mb:l, be:0, rc:0, init:function(b) {
  this.superInit();
  this.Mb = b
}});
(function() {
  var b = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.Si = tm.createClass({superClass:tm.graphics.Canvas, Ba:l, Kb:l, Vb:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ba = gls2.Ti();
    this.Ba.na = this;
    this.Ba.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Kb = [];
    this.Vb = [];
    for(var a = 0;5 > a;a++) {
      this.Kb[a] = 40 * b[a], this.Vb[a] = this.Kb[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Ba.Ea = Math.cos(this.Ba.direction) * this.Ba.speed;
    this.Ba.Fa = Math.sin(this.Ba.direction) * this.Ba.speed;
    for(var b = 0;5 > b;b++) {
      for(this.Ba.dc[b] += this.Ba.Ea * Math.pow(0.8, b);3 * this.Kb[b] < this.Ba.dc[b];) {
        this.Ba.dc[b] -= 3 * this.Kb[b]
      }
      for(;this.Ba.dc[b] < 3 * -this.Kb[b];) {
        this.Ba.dc[b] += 3 * this.Kb[b]
      }
      for(this.Ba.ec[b] += this.Ba.Fa * Math.pow(0.8, b);2 * this.Vb[b] < this.Ba.ec[b];) {
        this.Ba.ec[b] -= 2 * this.Vb[b]
      }
      for(;this.Ba.ec[b] < 2 * -this.Vb[b];) {
        this.Ba.ec[b] += 2 * this.Vb[b]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Ba.background !== l ? this.clearColor(this.Ba.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * b[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * b[a] + ")"}]).toStyle();
      this.beginPath();
      for(var d = 0, f = this.Ba.dc[a] - 3 * this.Kb[a];f < 480 + 3 * this.Kb[a];f += 1.5 * this.Kb[a]) {
        for(var d = 0 === d ? this.Vb[a] : 0, h = this.Ba.ec[a] - 2 * this.Vb[a] + d;h < 640 + 2 * this.Vb[a];h += 2 * this.Vb[a]) {
          this.line(f, h, f + this.Kb[a], h), this.line(f, h, f - this.Kb[a] / 2, h + this.Vb[a]), this.line(f, h, f - this.Kb[a] / 2, h - this.Vb[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.Ti = tm.createClass({superClass:tm.app.Object2D, dc:0, ec:0, direction:0, speed:0, Ea:0, Fa:0, background:l, init:function() {
    this.superInit();
    this.dc = [];
    this.ec = [];
    for(var a = 0;5 > a;a++) {
      this.dc[a] = 240, this.ec[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Fa = this.Ea = 0
  }})
})();
gls2.Wf = tm.createClass({superClass:tm.display.Sprite, Zh:r, ca:l, fa:l, Gc:r, hd:r, Sg:r, Ea:0, Fa:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.Zh = b) && this.setScale(2, 2);
  this.ca = gls2.Ya.Rd;
  this.fa = this.ca.fa;
  this.addChildTo(this.ca);
  b = 0.5 * gls2.ya.random() * Math.PI - 0.75 * Math.PI;
  this.Ea = 30 * Math.cos(b);
  this.Fa = 30 * Math.sin(b)
}, update:function() {
  this.fa.Rb && (this.hd = j);
  if(this.fa.parent === l) {
    this.hd = r
  }else {
    if(100 > gls2.Fc(this, this.fa)) {
      this.ca.Tk(this);
      this.remove();
      return
    }
    1E4 > gls2.Fc(this, this.fa) && (this.hd = j);
    if(this.Sg && this.hd) {
      var b = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.Sg || (this.x += this.Ea, this.y += this.Fa, this.Ea *= 0.8, this.Fa *= 0.8, -1 < this.Ea && (1 > this.Ea && -1 < this.Fa && 1 > this.Fa) && (this.Sg = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.vh = tm.createClass({superClass:gls2.Wf, Gc:r, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.Qj = tm.createClass({superClass:gls2.Wf, Gc:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.hd || (this.x += this.ca.na.Ea, this.y += this.ca.na.Fa);
  this.superClass.prototype.update.call(this)
}});
gls2.Yc = tm.createClass({fa:l, ca:l, $:l, frame:0, init:function(b) {
  this.ca = b;
  this.fa = b.fa;
  this.Od();
  this.$ = gls2.Pj();
  this.frame = 0
}, Od:z(), update:function() {
  this.rk(this.frame);
  this.frame += 1
}, rk:function(b) {
  b = this.$.get(b);
  if(b !== l) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.gh[b.value] !== i) {
        var a = gls2.gh[b.value];
        if(a !== l) {
          if(a[0].bc === j) {
            this.Ag(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.Ag(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.$.Tg = r
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Ag:function(b) {
  this.ca.Qe += 1;
  b = b.aa(this.ca, b.ba).setPosition(b.x, b.y).addChildTo(this.ca);
  b.qe = this;
  b.Kd();
  return b
}, Je:function(b) {
  gls2.Se();
  this.ca.$d = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var h = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
      h.oa = 0;
      h.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.oa) + 0.5;
        this.oa += 1
      };
      h.addChildTo(a)
    }
  }
  a.tweener.wait(3E3).call(b).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = z();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.ca.ng);
  gls2.ta("warning");
  gls2.ta("voWarning")
}});
gls2.Yc.create = function(b, a) {
  switch(a) {
    case 0:
      return gls2.Kj(b);
    case 1:
      return gls2.Lj(b);
    case 2:
      return gls2.Mj(b);
    case 3:
      return gls2.Nj(b);
    case 4:
      return gls2.Oj(b);
    default:
      g(Error("stageNumber = " + a))
  }
};
gls2.Pj = tm.createClass({index:0, data:l, Tg:r, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? l : b.stop === j ? (this.Tg = j, b) : this.Tg ? l : b
}});
gls2.Kj = tm.createClass({superClass:gls2.Yc, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.gc("bgm1", j);
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.speed = 8;
    this.ca.na.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.ca.na.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.ca.na.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.Je(function() {
      gls2.gc("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, Od:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.Lj = tm.createClass({superClass:gls2.Yc, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.gc("bgm2", j);
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.ca.na.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.ca.na.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.ca.na.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.ca.na.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.ca.na.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.ca.na.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", j);
  this.$.add(300, "heri2-left");
  for(b = 0;12 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.ca.na.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
    this.Je(function() {
      gls2.gc("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ca.na.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Od:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.Mj = tm.createClass({superClass:gls2.Yc, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.gc("bgm3", j);
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.speed = 3;
    this.ca.na.tweener.clear().to({speed:10}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "hoshizora_y1");
  this.$.add(60, "aoki-left");
  this.$.add(60, "aoki-right");
  this.$.add(150, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  for(b = 0;3 > b;b++) {
    this.$.add(60, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(60, function() {
    this.ca.na.tweener.clear().to({speed:3}, 1E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "aoki-left");
  this.$.add(60, "aoki-right");
  this.$.add(60, "akane-right");
  this.$.add(60, "aoki-left");
  this.$.add(60, "aoki-right");
  this.$.add(60, "akane-left");
  this.$.add(60, "aoki-left");
  this.$.add(60, "aoki-right");
  this.$.add(120, "akane-center");
  this.$.add(60, "aoki-left");
  this.$.add(60, "aoki-right");
  this.$.add(120, function() {
    this.ca.na.tweener.clear().to({speed:5}, 2E3, "easeInOutQuad").to({direction:90 * (Math.PI / 180)}, 3E3, "easeInOutQuad")
  });
  for(b = 0;3 > b;b++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(100, "hoshizora_y1");
  this.$.add(1, "heri2-right");
  this.$.add(1, function() {
    this.ca.na.tweener.clear().to({speed:4}, 2E3, "easeInOutQuad").to({direction:0.5 * Math.PI}, 2E3, "easeInOutQuad")
  });
  this.$.add(100, "yotsuba");
  this.$.add(600, "higashi", j);
  this.$.add(300, "nao1-left");
  for(b = 0;8 > b;b++) {
    this.$.add(60, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(600, function() {
    this.Je(function() {
      gls2.gc("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.na.direction = Math.PI / 2;
    this.ca.na.tweener.clear().to({speed:-10}, 5E3, "easeInOutQuad")
  });
  this.$.add(600, "momozono")
}, Od:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.Nj = tm.createClass({superClass:gls2.Yc, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.gc("bgm4", j);
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.speed = 1
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
    this.ca.na.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(b = 0;6 > b;b++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.ca.na.speed = 3;
    this.ca.na.tweener.clear().to({speed:0.3}, 5E3)
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
    this.ca.na.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", j);
  this.$.add(1200, z());
  for(b = 0;9 > b;b++) {
    this.$.add(50, 0 === b % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.ca.na.tweener.clear().to({speed:0.6}, 3E3)
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
    this.Je(function() {
      gls2.gc("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.na.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Od:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.Oj = tm.createClass({superClass:gls2.Yc, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.gc("bgm5", j);
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.speed = 1;
    this.ca.na.Vl = j
  });
  this.$.add(200, "urara5-2");
  this.$.add(460, "nozomi5-1");
  this.$.add(100, "nozomi5-0");
  this.$.add(200, "nozomi5-2");
  this.$.add(400, "mktn5-0")
}, Od:function() {
  this.ca.na.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {Hd:function(b, a) {
  if(b.parent === l || a.parent === l) {
    return r
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, h = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, q = a.y - a.boundingHeightTop, v = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > m && f < v && h > q
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, rl:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.Ed(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.Ki = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:r, title:l, selections:[], description:l, box:l, cursor:l, Dg:l, _selected:0, _opened:r, _finished:r, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Dg = d.onCursorMove;
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
    var h = tm.display.Label(a).setPosition(240, b).addChildTo(this);
    h.interactive = j;
    h.addEventListener("touchend", function() {
      f._selected === d ? f.closeDialog(f._selected) : f._selected = d
    });
    h.width = 336;
    return h
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Dg !== l && this.parent.Dg(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.ta("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.ma.clamp(this._selected, 0, this.selections.length - 1), gls2.ta("select")) : 
  b.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.ma.clamp(this._selected, 0, this.selections.length - 1), gls2.ta("select")))
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
}, Ed:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function H(b, a, d, f, h) {
  h = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:z()}, h);
  b.rl(gls2.Ki(a, d, h), f)
}
;gls2.Wa = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, eg:0.85, size:0, image:l, kb:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== i ? a : 1;
  this.eg = d !== i ? d : 0.85;
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.eg;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Wa(this.size, this.Nl, this.eg, this.image)
}});
gls2.$g = tm.createClass({superClass:gls2.Wa, na:l, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.na = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.na.Ea;
  this.y += this.na.Fa + 0.3
}, clone:function(b) {
  return gls2.$g(this.na, b)
}});
gls2.Ii = tm.createClass({width:0, label:l, Ab:l, oa:0, ji:0, Lg:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Ab = [];
  this.ji = 480 - this.width - 5;
  this.Lg = 5
}, fk:function(b, a) {
  a === j && (this.Ab.clear(), this.Ab.push(""));
  5 < this.Ab.length && this.Ab.splice(1, this.Ab.length - 4);
  this.Ab.push(b);
  return this
}, jk:function() {
  this.Ab.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.Ab.length) {
    if("" !== this.Ab[0]) {
      var a = this.Ab[0][0];
      this.Ab[0] = this.Ab[0].substring(1);
      b += a
    }else {
      this.Ab.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.oa % 2 ? "_" : " ");
  this.oa += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.ji, this.Lg);
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
gls2.Kc = {noise:l, Dk:function(b) {
  function a(a) {
    if(1 > a) {
      return l
    }
    var f = [], h = Math.random(), m, q;
    for(q = 0;q < b;q += ~~a) {
      m = Math.random();
      for(var k = 0;k < a;k++) {
        f[q + k] = d(h, m, k / a)
      }
      h = m
    }
    h = f[b - ~~a];
    m = f[0];
    for(k = 0;k < a;k++) {
      f[b - ~~a + k] = d(h, m, k / a)
    }
    return f
  }
  function d(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var f = [], h = 0, m = Math.pow(2, 4);8 > h;h++, m *= 2) {
    var q = a(b / m);
    if(q === l) {
      break
    }
    f.push(q)
  }
  q = [].concat(f[0]);
  h = 1;
  for(m = 0.5;h < f.length;h++, m *= 0.5) {
    for(var v = 0;v < b;v++) {
      q[v] += f[h][v] * m
    }
  }
  for(h = 0;h < q.length;h++) {
    q[h] /= 2
  }
  return q
}};
gls2.Kc.noise = gls2.Kc.Dk(512);
gls2.ya = {index:-1, data:l, setup:function(b) {
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
gls2.jb = l;
gls2.gc = function(b, a) {
  a || gls2.mf();
  var d = tm.asset.AssetManager.get(b), f = tm.asset.AssetManager.get("bgmLoopInfo");
  d && (gls2.jb = d.clone(), gls2.jb.volume = 0.1 * gls2.core.Wd, gls2.jb.loop = j, gls2.jb.play(), f.data[b] && (gls2.jb.source.Ol = f.data[b].start, gls2.jb.source.Bg = f.data[b].end))
};
gls2.mf = function() {
  gls2.jb !== l && gls2.jb.source.il === AudioBufferSourceNode.uj && gls2.jb.stop()
};
gls2.Se = function() {
  if(gls2.jb !== l) {
    var b = gls2.jb;
    gls2.jb = l;
    b.loop = r;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.il === AudioBufferSourceNode.uj && b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.ta = function(b) {
  if(0 !== gls2.core.nd && gls2.ta.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.nd, gls2.ta.Wg !== l && gls2.ta.Wg.stop(), gls2.ta.Wg = a) : a.volume = 0.1 * gls2.core.nd);
    gls2.ta.played[b] = gls2.core.frame
  }
};
gls2.ta.played = {};
gls2.ta.Wg = l;
(function() {
  var b = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, oa:0, ke:[], Ue:r, Uh:l, ai:0, $e:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Uh = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Ue = r;
      this.ul()
    })
  }, ul:function() {
    for(var a = ("" + Math.floor(gls2.core.ce)).padding(16, " "), b = "", h = 0;h < a.length;h += 4) {
      b += a.substring(h, h + 4) + " "
    }
    this.Uh.text = "HIGH SCORE: " + b.trim()
  }, Ed:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.yh(80 * Math.cos(0.01 * this.oa) + 240, 80 * Math.sin(0.01 * this.oa) + 320, 0);
    this.yh(80 * Math.cos(0.01 * this.oa + Math.PI) + 240, 80 * Math.sin(0.01 * this.oa + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Ue && this.gi();
    this.oa += 1
  }, yh:function(d, f, h) {
    if(!this.Ue) {
      b === l && (b = gls2.Wa(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Wa(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      h = 0 === h ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      h.speed = 0.6;
      var m = gls2.ma.randf(0, 2 * Math.PI), q = gls2.ma.rand(0, 20);
      h.setPosition(Math.cos(m) * q + d, Math.sin(m) * q + f);
      var v = this;
      h.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = v.ke.indexOf(this);
          -1 !== a && v.ke.splice(a, 1)
        }
      };
      this.ke.push(h)
    }
  }, gi:function() {
    H(this, "MAIN MENU", ["start", "setting"], this.Zk, {defaultValue:this.ai, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, Zk:function(a) {
    2 !== a && (this.ai = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Ue = j;
          for(var a = 0, b = this.ke.length;a < b;a++) {
            this.ke[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.Jj())
        }.bind(this));
        break;
      case 1:
        this.Qc()
    }
  }, Qc:function() {
    H(this, "SETTING", ["bgm volume", "sound volume"], this.Hg, {defaultValue:this.$e, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Hg:function(a) {
    3 !== a && (this.$e = a);
    switch(a) {
      case 0:
        this.Ig();
        break;
      case 1:
        this.Jg();
        break;
      default:
        this.gi()
    }
  }, Ig:function() {
    H(this, "BGM VOLUME", "012345".split(""), this.Fg, {defaultValue:gls2.core.Wd, onCursorMove:function(a) {
      gls2.jb !== l && "exit" !== a && (gls2.jb.volume = 0.1 * a)
    }, showExit:r})
  }, Fg:function(a) {
    6 !== a && (gls2.core.Wd = a);
    this.Qc()
  }, Jg:function() {
    H(this, "SE VOLUME", "012345".split(""), this.Gg, {defaultValue:gls2.core.nd, showExit:r})
  }, Gg:function(a) {
    6 !== a && (gls2.core.nd = a);
    this.Qc()
  }, Sl:function() {
    H(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Yk, {defaultValue:gls2.core.Lh, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Yk:function(a) {
    5 !== a && (gls2.core.Lh = a);
    this.Qc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.Jj = tm.createClass({superClass:gls2.Scene, mode:0, types:l, nf:l, Yb:l, Zb:l, $b:l, xg:l, vg:l, type:0, style:0, Mc:r, cf:r, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.ml();
    this.nf = this.ll();
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
    this.nf.visible = r;
    this.Cg(-1, j);
    this.Yb.update();
    this.Zb.update();
    this.$b.update();
    gls2.ta("voSelectShip");
    gls2.gc("bgmShipSelect", j)
  }, ml:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.xg = tm.display.Label("Type-A").setPosition(240, 150);
    this.xg.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.yg = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.yg.update = function() {
      this.yg.text = b[this.type]
    }.bind(this);
    this.yg.addChildTo(a);
    var f = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.Yb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.Zb = tm.display.AnimationSprite(f, 64, 64).gotoAndPlay("typeB");
    this.$b = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.Yb.eb = 0;
    this.Zb.eb = 1;
    this.$b.eb = 2;
    this.Yb.setScale(3).setPosition(0, 320).addChildTo(a);
    this.Zb.setPosition(0, 320).addChildTo(a);
    this.$b.setPosition(0, 320).addChildTo(a);
    this.Yb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.eb / 3 * Math.PI)
    };
    this.Zb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.eb / 3 * Math.PI)
    };
    this.$b.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.eb / 3 * Math.PI)
    };
    return a
  }, ll:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.vg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.vg.addChildTo(a);
    this.Tc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Bc = tm.app.Object2D();
    this.Bc.addChildTo(this.Tc);
    this.Bc.update = function(a) {
      this.Bc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.wa = [];
    this.wa[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.wa[0].update = function() {
      0 === this.type ? this.wa[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.wa[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.wa[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.wa[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.wa[1].update = function() {
      0 === this.type ? this.wa[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.wa[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.wa[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.wa[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.wa[2].update = function() {
      0 === this.type ? this.wa[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.wa[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.wa[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.wa[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.wa[3].update = function() {
      0 === this.type ? this.wa[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.wa[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.wa[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.Tc.line = b(0, 0, 0, 130, 8);
    this.Tc.line.addChildTo(this.Tc);
    this.wa.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Bc)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.wg = tm.display.Label(d[0], 16).setPosition(240, 500);
    this.wg.update = function() {
      this.wg.text = d[this.style]
    }.bind(this);
    this.wg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.nf.visible = r, !this.cf && a.keyboard.getKeyDown("left")) {
        this.Cg(-1, r), gls2.ta("select")
      }else {
        if(!this.cf && a.keyboard.getKeyDown("right")) {
          this.Cg(1, r), gls2.ta("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.ta("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.nf.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (gls2.ja.Xg ? this.dl() : (this.Mc = j, this.fi()), gls2.ta("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.vl(0 === ~~(a.frame / 60) % 
      2))
    }
  }, dl:function() {
    H(this, "AUTO BOMB", ["on", "off"], this.Uk, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, Uk:function(a) {
    2 !== a && (this.Mc = 0 === a, this.fi())
  }, fi:function() {
    H(this, "ARE YOU READY?", ["ok"], this.Vk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, Vk:function(a) {
    0 === a && this.ol()
  }, Cg:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.Yb, this.Zb, this.$b][this.type].remove().addChildTo(this.types);
    b ? (this.Yb.eb -= a, this.Yb.scaleX = 0 === this.type ? 5 : 1, this.Yb.scaleY = 0 === this.type ? 5 : 1, this.Zb.eb -= a, this.Zb.scaleX = 1 === this.type ? 5 : 1, this.Zb.scaleY = 1 === this.type ? 5 : 1, this.$b.eb -= a, this.$b.scaleX = 2 === this.type ? 5 : 1, this.$b.scaleY = 2 === this.type ? 5 : 1) : (this.cf = j, this.Yb.tweener.clear().to({eb:this.Yb.eb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.Zb.tweener.clear().to({eb:this.Zb.eb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.$b.tweener.clear().to({eb:this.$b.eb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.cf = r
    }.bind(this)));
    this.xg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, ol:function() {
    gls2.core.ca.Mc = this.Mc;
    gls2.core.ca.start(this.type, this.style);
    gls2.core.replaceScene(gls2.core.ca);
    gls2.Se()
  }, vl:function(a) {
    this.vg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.Tc.line.hc = r, this.wa[0].line.hc = r, this.wa[1].line.hc = r, this.wa[2].line.hc = r, this.wa[3].line.hc = r) : (this.Tc.line.hc = j, this.wa[0].line.hc = j, this.wa[1].line.hc = j, this.wa[2].line.hc = j, this.wa[3].line.hc = j);
    a ? (this.wa[0].visible = j, this.wa[1].visible = j, 1 === this.style ? (this.wa[2].visible = r, this.wa[3].visible = r) : (this.wa[2].visible = j, this.wa[3].visible = j), this.Tc.line.lineWidth = 5) : (this.wa.each(function(a) {
      a.visible = r
    }), this.Tc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, Ed:z()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, hc:j, init:function(a, b, f, h, m) {
    this.superInit();
    this.angle = f - 0.5 * Math.PI;
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
    if(this.hc && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), f = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - f, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - f, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + f, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + f, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.Ya = tm.createClass({superClass:gls2.Scene, fa:l, score:0, Cc:0, ib:0, Qa:0, ge:0, bb:0, Nc:0, re:0, qe:l, na:l, Vc:3, jf:0, kf:0, uc:0, Qe:0, he:0, bf:0, Mc:r, Hb:0, ed:0, Dh:0, jd:r, Ze:r, tc:0, Db:0, La:r, ee:0, Gd:0, Va:0, gd:0, Ml:0, Ll:0, We:l, Oh:l, Kg:l, Mh:l, mg:l, ng:l, gg:l, Xh:l, Ub:l, Mb:l, bc:l, $d:r, Qk:r, gk:0, Md:l, init:function() {
  gls2.Ya.Rd !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.Ya.Rd = this;
  this.Mb = gls2.Ij(this);
  this.Mb.wb.addChildTo(this);
  this.na = gls2.Si().Ba;
  this.na.addChildTo(this);
  this.We = gls2.Ya.Layer().addChildTo(this);
  this.Oh = gls2.Ya.Layer().addChildTo(this);
  this.Mh = gls2.Ya.Layer().addChildTo(this);
  this.mg = gls2.Ya.Layer().addChildTo(this);
  this.Kg = gls2.Ya.Layer().addChildTo(this);
  this.ng = gls2.Ya.Layer().addChildTo(this);
  this.gg = gls2.Ya.Layer().addChildTo(this);
  this.Xh = gls2.Ya.lh(this).addChildTo(this);
  tm.Bb.Wc.Zd.Bh = this;
  this.Ub = tm.app.Object2D();
  this.Ub.addChildTo(this);
  this.Ub.update = function(b) {
    this.bl(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Mb.clear()
  })
}, addChild:function(b) {
  b.kb ? this.mg.addChild(b) : b instanceof gls2.Ra ? this.gg.addChild(b) : b instanceof gls2.Wf ? this.We.addChild(b) : b instanceof gls2.ha ? b.Gc ? this.We.addChild(b) : this.Mh.addChild(b) : b instanceof gls2.rh ? this.Kg.addChild(b) : b === this.Ub || b === this.na || b instanceof gls2.Ya.Layer || b instanceof gls2.Ya.lh || b instanceof gls2.th || b instanceof gls2.hh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(b)))
}, update:function(b) {
  this.jl(b.keyboard);
  this.qe.update(b.frame);
  0 === b.frame % 2 && this.Mb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.mf()) : b.keyboard.getKeyDown("space") ? this.je(0) : b.keyboard.getKeyDown("p") && (this.Rg().saveAsImage(), this.je(0))
}, Rg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.na.na.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Mb.element, 0, 0);
  return b
}, bl:function() {
  this.fa.Dc === r && gls2.ia.erase();
  var b;
  b = [].concat(gls2.ha.rb);
  for(var a = [].concat(gls2.xd.rb), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var h = b[f], m = a[d];
      if(!(0 >= h.sa) && gls2.Collision.Hd(h, m) && (m.Ve(1), m.remove(), h.Ec(m.bd))) {
        this.uc += 1;
        this.La ? this.zb(gls2.ja.ej) : this.zb(gls2.ja.dj);
        this.Eg(h);
        break
      }
    }
  }
  m = this.fa.Tb;
  if(this.fa.Rb) {
    b = [].concat(gls2.ha.rb);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(h = b[f], !(0 >= h.sa) && gls2.Collision.Hd(h, m)) {
        m.kl(h.y + h.boundingHeightBottom);
        h.Ec(m.bd) ? (this.uc += 1, this.La ? this.zb(gls2.ja.cj) : this.zb(gls2.ja.$i), this.Eg(h)) : (this.bb = Math.min(this.bb + 0.02, 1), this.La ? (this.yd(0.01 * gls2.ja.xf[this.gd]), this.zb(gls2.ja.bj)) : (this.yd(0.01), this.zb(gls2.ja.aj)));
        m.Ve(2);
        break
      }
    }
    a = {x:this.fa.x, y:this.fa.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(gls2.ha.rb);
    for(f = b.length;b[--f] !== i;) {
      h = b[f], !(0 >= h.sa) && gls2.Collision.Hd(h, a) && (h.Ec(m.bd) ? (this.uc += 1, this.La ? this.zb(gls2.ja.Zi) : this.zb(gls2.ja.Wi), this.Eg(h)) : (this.bb = Math.min(this.bb + 0.02, 1), this.La ? (this.yd(0.01 * gls2.ja.xf[this.gd]), this.zb(gls2.ja.Yi)) : (this.yd(0.01), this.zb(gls2.ja.Xi))), m.Ak(2, this.fa.x, this.fa.y - 30))
    }
  }
  if(this.jd) {
    gls2.ia.erase();
    b = [].concat(gls2.ha.rb);
    for(f = b.length;b[--f] !== i;) {
      h = b[f], !(0 >= h.sa) && (h.fc() && h.Ec(gls2.ja.vi)) && (this.ad(h.score), this.uc += 1)
    }
    this.bb = this.Qa = 0
  }
  if(this.La) {
    f = [].concat(gls2.xd.rb);
    for(h = f.length;f[--h] !== i;) {
      if(m = f[h], !(0 >= m.sa)) {
        a = [].concat(gls2.Ra.rb);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== r && (0 < m.sa && gls2.Collision.Hd(m, d)) && (d.sa -= 6 - this.Db, 0 > d.sa && (d.Da(), this.ad(gls2.ja.zi), this.yd(gls2.ja.xi), this.Th(r, r, d.x, d.y, 1)), m.sa -= 1)
        }
      }
    }
  }
  if(this.$d) {
    gls2.ia.erase()
  }else {
    if(this.fa.parent !== l && this.fa.Jd === r && this.jd === r && 0 >= this.ee && !gls2.ja.qj) {
      for(f = gls2.Ra.rb.length;gls2.Ra.rb[--f] !== i;) {
        if(b = gls2.Ra.rb[f], b.visible !== r && gls2.Collision.Hd(b, this.fa)) {
          this.fa.Ec();
          0 < this.Hb && this.Mc ? (this.Db = gls2.ma.clamp(this.Db - 1, 0, 1), this.Ud(-0.01), gls2.oh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this)) : this.di();
          break
        }
      }
      for(f = gls2.ha.rb.length;gls2.ha.rb[--f] !== i;) {
        if(h = gls2.ha.rb[f], !(0 >= h.sa) && !h.Gc && gls2.Collision.Hd(h, this.fa)) {
          this.fa.Ec();
          0 < this.Hb && this.Mc ? (this.Db = gls2.ma.clamp(this.Db - 1, 0, 1), this.Ud(-0.01), gls2.oh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this)) : this.di();
          break
        }
      }
    }
    this.La && (this.Gd -= 1, 0 >= this.Gd && this.Pe());
    this.ee = Math.max(this.ee - 1, 0);
    this.bb -= gls2.ja.Fi * gls2.ja.Gi;
    0 >= this.bb && (this.bb = 0, this.La || 0 < this.Va ? this.Nc = this.Qa = this.ib = 0 : (0 < this.Qa && (0 >= this.Nc && (this.Nc = this.Qa * gls2.ja.Ei), this.ib = this.ib * (this.Qa - this.Nc) / this.Qa, this.Qa -= this.Nc), 0 >= this.Qa && (this.Nc = this.Qa = this.ib = 0)));
    this.Ze && (this.score += gls2.ja.pj)
  }
}, Eg:function(b) {
  this.Th(b.Gc, this.La || gls2.Fc(b, this.fa) < gls2.ja.Hi, b.x, b.y, b.star, b instanceof gls2.sd);
  this.yd(gls2.ja.xf[this.gd]);
  for(var a = this.ib, d = ~~(this.Qa / gls2.ja.eh) + 1, f = 0;f < d;f++) {
    a += b.score, this.ad(a)
  }
  this.ib += b.score * d;
  "misumi" === b.name && this.app.Oa("boss1");
  "hyuga" === b.name && this.app.Oa("boss2");
  "momozono" === b.name && this.app.Oa("boss3");
  "aida" === b.name && this.app.Oa("boss4");
  "hojo" === b.name && this.app.Oa("boss5");
  0 === this.bf && 0 === this.Cc && ("misumi" === b.name && this.app.Oa("nomiss1"), "hyuga" === b.name && this.app.Oa("nomiss2"), "momozono" === b.name && this.app.Oa("nomiss3"), "aida" === b.name && this.app.Oa("nomiss4"), "hojo" === b.name && this.app.Oa("nomiss5"))
}, Th:function(b, a, d, f, h, m) {
  b = b ? gls2.Qj : gls2.vh;
  for(var q = 0;q < h;q++) {
    var v = b(a);
    v.setPosition(d, f);
    m && (v.hd = j)
  }
}, Tk:function(b) {
  gls2.ta("star");
  b.Zh ? (this.kf += 1, this.ib += gls2.ja.Cj, this.ad(gls2.ja.Gj + this.ib * gls2.ja.Ej), this.La ? this.zb(gls2.ja.ij) : this.zb(gls2.ja.hj)) : (this.jf += 1, this.ib += gls2.ja.Bj, this.ad(gls2.ja.Fj + this.ib * gls2.ja.Dj), this.La ? this.zb(gls2.ja.gj) : this.zb(gls2.ja.fj))
}, start:function(b, a) {
  this.Mb.Ad.jk().clear();
  this.Cc = this.score = 0;
  this.Vc = gls2.ja.jh;
  this.Hb = this.ed = gls2.ja.ih[a];
  this.Dh = gls2.ja.wi[a];
  this.Va = this.Db = this.tc = 0;
  this.Pe();
  this.jd = r;
  this.gk = this.he = this.bf = 0;
  this.fa = gls2.rh(this, b, a);
  this.Qg(gls2.ja.lj);
  G.Ua.Sb.$ex = 2 !== a ? 0 : 1;
  this.oi(0);
  gls2.ta("voLetsGo");
  this.ql()
}, oi:function(b) {
  this.vb("3...2...1...");
  this.fa.parent !== l && this.fa.remove();
  gls2.ha.Xd();
  gls2.xd.Xd();
  gls2.ia.Xd();
  this.We.removeChildren();
  this.mg.removeChildren();
  this.ng.removeChildren();
  this.Kg.removeChildren();
  this.gg.removeChildren();
  this.Ub.removeChildren();
  this.uc = this.Qe = this.kf = this.jf = this.ge = this.bb = this.Qa = this.ib = 0;
  this.bc = l;
  this.Qk = this.$d = r;
  this.he = 0;
  this.Mb.wb.be = 0;
  this.Db = this.Mb.wb.rc = 0;
  this.re = b;
  this.qe = gls2.Yc.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.zg()
  }.bind(this));
  this.na.tweener.clear()
}, zg:function() {
  this.vb("Let's go!");
  this.fa.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.fa.Tb.addChildTo(this);
  this.fa.Dc = r;
  this.fa.Jd = j;
  this.fa.Fd = r;
  this.fa.Rb = r;
  this.fa.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Vd = this.Dc = j
  }.bind(this.fa)).wait(gls2.ja.nj).call(function() {
    this.Jd = r
  }.bind(this.fa))
}, di:function() {
  gls2.ra.Re(this.fa.x, this.fa.y, this);
  this.vb("I was shot down.");
  this.fa.Dc = r;
  this.fa.remove();
  this.Vc -= 1;
  this.Va = this.Nc = this.Qa = this.bb = 0;
  this.he += 1;
  this.bf += 1;
  this.Db = gls2.ma.clamp(this.Db - 3, 0, 1);
  this.Ud(-0.03);
  0 < this.Vc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.Mc || !gls2.ja.Xg) {
      this.ed = Math.min(this.ed + 1, this.Dh)
    }
    this.Hb = this.ed;
    this.zg()
  }.bind(this)) : this.tweener.clear().wait(20).call(function() {
    this.Md = this.Rg().canvas.toDataURL("image/png");
    gls2.core.ce === this.score && (gls2.core.Ik = this.Md)
  }.bind(this)).wait(2E3).call(function() {
    this.Cc < gls2.core.Bd ? this.fl() : this.Rh()
  }.bind(this))
}, Qg:function(b) {
  G.Ua.Sb.$rank = gls2.ma.clamp(b, 0, 0.5)
}, Ud:function(b) {
  this.Qg(G.Ua.Sb.$rank + b)
}, zk:function() {
  this.vb("System rebooted.", j);
  this.score = 0;
  this.Cc += 1;
  this.Vc = gls2.ja.jh;
  this.Hb = this.ed = gls2.ja.ih[this.fa.style];
  this.Db = 0;
  this.Qg(0);
  this.zg()
}, kk:function() {
  gls2.gc("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.Ub);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(gls2.ResultScene(this, this.Rg()));
    b.remove()
  }.bind(this))
}, Rh:function() {
  gls2.mf();
  this.app.replaceScene(gls2.Qi())
}, Jl:z(), ad:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < gls2.ja.fh.length;b++) {
    var d = gls2.ja.fh[b];
    a < d && d <= this.score && (this.Nh(), 0 == b && this.app.Oa("extend1"), 1 == b && this.app.Oa("extend2"))
  }
  gls2.core.ce = Math.max(gls2.core.ce, this.score);
  gls2.core.ce === this.score && (gls2.core.Jk = this.re, gls2.core.Lk = this.fa.type, gls2.core.Kk = this.fa.style, gls2.core.Hk = this.Cc);
  1E8 <= this.score && this.app.Oa("score100M");
  2E9 <= this.score && this.app.Oa("score2G");
  2E10 <= this.score && this.app.Oa("score20G");
  5E10 <= this.score && this.app.Oa("score50G");
  1E11 <= this.score && this.app.Oa("score100G");
  1E12 <= this.score && this.app.Oa("score1T")
}, yd:function(b) {
  this.Nc = 0;
  this.Qa += b;
  this.ge = Math.max(this.ge, this.Qa);
  1 <= b && (this.bb = 1);
  100 <= this.Qa && this.app.Oa("combo100");
  1E3 <= this.Qa && this.app.Oa("combo1000");
  1E4 <= this.Qa && this.app.Oa("combo10000");
  1E5 <= this.Qa && this.app.Oa("combo100000")
}, zb:function(b) {
  if(this.Va !== gls2.ja.yf) {
    for(b *= gls2.ja.jj;1 < b;) {
      gls2.vf(this.fa).addChildTo(this), b -= 1, this.tc = 0, this.Va += 1, 1 === this.Va ? (this.vb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.vb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady"))
    }
    this.tc = gls2.ma.clamp(this.tc + b, 0, 1);
    1 <= this.tc && (gls2.vf(this.fa).addChildTo(this), this.Va += 1, this.tc -= 1, 1 === this.Va ? (this.vb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.vb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady")))
  }
}, pl:function() {
  0.5 > Math.random() ? (this.vb("HYPER SYSTEM start!!", j), gls2.ta("voHyperStart0")) : (this.vb("start counting to system limit.", j), gls2.ta("voHyperStart1"));
  this.Db = gls2.ma.clamp(this.Db + 1, 0, 5);
  this.Ud(0.01 * this.Va);
  G.Ua.Sb.$hyperOff = gls2.ja.Mi * (2 !== this.fa.style ? 1 : 0.5);
  this.Gd = gls2.ja.ye;
  this.ee = gls2.ja.ye * gls2.ja.Vi;
  this.fa.Xe.Nd(this.Va);
  this.fa.Tb.Nd(this.Va);
  this.fa.Cd = this.fa.Xe;
  gls2.ra.Bk(this.fa.x, this.fa.y, this);
  this.La = j;
  this.gd = this.Va;
  this.tc = this.Va = 0;
  gls2.ia.erase(j, j);
  this.app.Oa("hyper1");
  10 == this.gd && this.app.Oa("hyper10")
}, Pe:function() {
  this.La !== r && (this.La = r, gls2.vf(this.fa, j).addChildTo(this), this.fa.Cd = this.fa.ei, G.Ua.Sb.$hyperOff = 1 * (2 !== this.fa.style ? 1 : 0.5), this.fa.Xe.Nd(0), this.fa.Tb.Nd(0), this.ee = gls2.ja.ye * gls2.ja.Ui, this.gd = this.Gd = 0, gls2.ia.erase())
}, ek:function() {
  gls2.ta("decision");
  gls2.ta("voGetBomb");
  this.Hb = Math.min(this.Hb + 1, this.ed);
  this.Ze = this.Hb === this.ed
}, Nh:function() {
  gls2.ta("voExtend");
  this.vb("extended.");
  this.Vc += 1
}, vb:function(b, a) {
  this.Mb.Ad.fk(b, a)
}, je:function(b) {
  H(this, "PAUSE", ["resume", "setting", "exit game"], this.al, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:r})
}, al:function(b) {
  switch(b) {
    case 1:
      this.Qc();
      break;
    case 2:
      this.el()
  }
}, Qc:function() {
  H(this, "SETTING", ["bgm volume", "sound volume"], this.Hg, {defaultValue:this.$e, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Hg:function(b) {
  3 !== b && (this.$e = b);
  switch(b) {
    case 0:
      this.Ig();
      break;
    case 1:
      this.Jg();
      break;
    default:
      this.je()
  }
}, el:function() {
  H(this, "REARY?", ["yes", "no"], this.Wk, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:r})
}, Wk:function(b) {
  0 === b ? (gls2.mf(), this.app.replaceScene(gls2.TitleScene())) : this.je(1)
}, Ig:function() {
  H(this, "BGM VOLUME", "012345".split(""), this.Fg, {defaultValue:gls2.core.Wd, onCursorMove:function(b) {
    gls2.jb !== l && 6 !== b && (gls2.jb.volume = 0.1 * b)
  }, showExit:r})
}, Fg:function(b) {
  6 !== b && (gls2.core.Wd = b);
  this.Qc(1)
}, Jg:function() {
  H(this, "SE VOLUME", "012345".split(""), this.Gg, {defaultValue:gls2.core.nd, showExit:r})
}, Gg:function(b) {
  6 !== b && (gls2.core.nd = b);
  this.Qc(1)
}, fl:function() {
  H(this, "CONTINUE? (" + this.Cc + "/" + gls2.core.Bd + ")", ["yes", "no"], this.Xk, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:r})
}, Xk:function(b) {
  switch(b) {
    case 0:
      this.zk();
      break;
    case 1:
      this.Rh()
  }
}, Ed:z(), nl:function() {
  this.Mb.wb.tweener.clear().to({be:-480}, 1600, "easeInBack").to({rc:30}, 800, "easeInOutBack")
}, Gk:function() {
  this.Mb.wb.tweener.clear().to({rc:0}, 800, "easeInOutBack").to({be:0}, 1600, "easeOutBack")
}, me:l, ne:0, fe:l, Ae:0, ql:function() {
  if(1 === this.Ae) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.fe = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.me = [];
    this.ne = 0
  }else {
    if(2 === this.Ae && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.fe = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.fe.push(d[f])
        }
      }
    }
  }
}, jl:function(b) {
  if(1 === this.Ae) {
    1E3 < this.me.length && (console.log("save"), localStorage.setItem("rec" + this.ne, this.me), localStorage.setItem("recCount", this.ne), this.me = [], this.ne += 1), this.me.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Ae && this.fe) {
      var a = this.fe.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : r
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : r
      })
    }
  }
}});
gls2.Ya.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.Ya.lh = tm.createClass({superClass:tm.display.CanvasElement, ca:l, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.nk(b);
  this.ok(b)
}, nk:function(b) {
  if(0 < this.ca.bb) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.bb) + "," + ~~Math.min(255, 512 * this.ca.bb) + ",0.5)";
    var a = 500 * this.ca.bb;
    b.fillRect(465, 635 - a, 10, a)
  }
}, ok:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.Va === gls2.ja.yf ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.tc && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.tc, 9))
}});
gls2.Ya.Rd = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ca:l, Md:l, Ub:l, values:l, labels:l, Ye:l, ki:[gls2.ja.zj, gls2.ja.Aj, gls2.ja.wj, gls2.ja.xj, 1], Yh:l, Ng:l, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ca.jf, this.ca.kf, ~~(100 * (this.ca.uc / this.ca.Qe)), this.ca.ge, 0 === this.ca.he ? gls2.ja.yj : 0];
  this.Ye = this.values.map(function(a) {
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
  this.Yh = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.Ng = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.Ng.visible = r;
  this.Md = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var h = 0;16 > h;h++) {
      f[d][h] = {Og:0, gf:0, Ic:gls2.ma.randf(-2, 2), ic:gls2.ma.randf(1, 4)}
    }
  }
  this.Ub = tm.app.Object2D();
  this.Ub.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var h = 0;h < f[d].length;h++) {
        var n = f[d][h];
        640 > 40 * h + n.gf && (a.drawImage(this.Md.element, 40 * d, 40 * h, 40, 40, 40 * d + n.Og, 40 * h + n.gf, 40, 40), n.Og += n.Ic, n.gf += n.ic, n.ic += 0.3, b = r)
      }
    }
    this.wait = 60;
    b && this.Ub.remove();
    a.restore()
  }.bind(this);
  this.Ub.addChildTo(this);
  this.addEventListener("exit", function() {
    gls2.Se()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.ta("star"), this.values[a] <= this.Ye[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.ad(this.values[a] * this.ki[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.ad(this.Ye[a] * this.ki[a]), this.values[a] -= this.Ye[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.Yh.text = Math.floor(this.ca.score)
    }else {
      if(this.Ng.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.ta("decision"), this.ca.oi(this.ca.re + 1), b.popScene()
      }
    }
    this.frame += 1
  }
}, Ed:z()});
gls2.Qi = tm.createClass({superClass:gls2.Scene, oa:0, hi:r, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.oa && !this.hi) && this.df();
  this.oa += 1
}, Ed:function(b) {
  b.clearColor("black")
}, ff:r, wait:r, Pg:l, df:function() {
  this.wait || (this.hi = j, this.ff ? openConfirmTweetDialog() : H(this, "GAME OVER", ["save score", "tweet result", "back to title"], this.$k, {defaultValue:this.ff ? 1 : 0, menuDescriptions:["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"], showExit:r}))
}, $k:function(b) {
  0 === b ? this.ff || (this.wait = j, this.app.Mg(l, function(a, b, f) {
    this.wait = r;
    a ? this.gl(a) : b ? (this.ff = j, this.Pg = f, this.hl()) : this.df()
  }.bind(this))) : 1 === b ? this.tl() : this.app.replaceScene(gls2.TitleScene())
}, hl:function() {
  H(this, "SUCCESS!", ["ok"], function() {
    this.df()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:r})
}, gl:function() {
  H(this, "ERROR!", ["ok"], function() {
    this.df()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:r})
}, tl:function() {
  var b = "TM-Shooter SCORE: {score}(stage{stage} {type}-{style} continue:{cont})".format({score:Math.floor(this.app.ca.score), stage:this.app.ca.re + 1, type:"ABC"[this.app.ca.fa.type], style:["S", "L", "EX"][this.app.ca.fa.style], cont:this.app.ca.Cc}), b = tm.social.Twitter.createURL({type:"tweet", text:b, hashtags:"tmshooter", url:this.Pg ? "http://tmshooter.net/ranking/" + this.Pg : "http://tmshooter.net"});
  window.open(b, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
gls2.yl = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit()
}, update:z()});
(function() {
  gls2.ha = tm.createClass({superClass:tm.display.CanvasElement, name:l, fa:l, ca:l, qe:l, sa:0, Pc:0, score:0, Gc:r, erase:r, star:1, Pk:r, Ib:j, Sa:r, frame:0, of:l, direction:0, speed:0, ga:l, init:function(a, d, f) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Sa = r;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.Ib = j;
    this.ca = a;
    this.fa = a.fa;
    this.score = 100;
    this.erase = r;
    this.dk(f);
    d.setup(this);
    this.altitude = this.Gc ? 1 : 10;
    this.of = {x:0, y:0}
  }, Kd:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, Ql:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Sa === r && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Sa = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Gc && (this.x += this.ca.na.Ea, this.y += this.ca.na.Fa);
    this.Sa && (this.frame += 1);
    this.of.x = this.x - a;
    this.of.y = this.y - b
  }, Ec:function(a) {
    if(!this.Sa) {
      return r
    }
    this.sa -= a;
    if(0 >= this.sa) {
      return a = gls2.ma.randf(0, 5), 2 > a ? this.ca.vb("enemy destroy.") : 4 > a ? this.ca.vb(this.name + " destroy.") : this.ca.vb("ETR reaction gone."), this.erase && gls2.ia.erase(j, this.ca.La, this instanceof gls2.sd), this.dispatchEvent(tm.event.Event("destroy")), this.Da(), j
    }
    40 > this.sa && this.Ta();
    return r
  }, Da:function() {
    gls2.ra.Re(this.x, this.y, this.ca, this.of);
    this.remove()
  }, fc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, cl:function() {
    return this.Ib
  }, Ta:z(), dk:function(a) {
    this.name = a;
    a = gls2.ha.Ji[a];
    this.sa = this.Pc = a[0];
    this.score = a[1];
    this.Gc = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, qc:function() {
    this.remove();
    this.ca.Oh.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Re(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.og(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Ke:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Re(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.og(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  gls2.ha.Xd = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = gls2.ha.rb = []
})();
gls2.sd = tm.createClass({superClass:gls2.ha, Pk:j, Pc:0, hf:l, init:function(b, a, d) {
  this.hf = a;
  this.superInit(b, this.hf[0], d);
  this.Pc = this.sa;
  this.addEventListener("added", function() {
    this.ca.bc = this;
    this.ca.nl();
    this.tweener.wait(1E3).call(function() {
      this.ca.$d = r
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.bc = l;
    this.ca.Gk();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.kk()
    }.bind(this));
    a.addChildTo(this.ca.Ub)
  })
}, Ec:function(b) {
  var a = this.sa;
  if(gls2.ha.prototype.Ec.call(this, b)) {
    return this.ca.$d = j, this.ca.fa.Vd = r, gls2.Se(), j
  }
  this.sa <= 0.55 * this.Pc && 0.55 * this.Pc < a ? (gls2.da.lf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Jb(this.x, this.y, this.ca), gls2.ia.erase(j, this.ca.La), this.hf[1].setup(this)) : this.sa <= 0.1 * this.Pc && 0.1 * this.Pc < a && (gls2.da.lf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Jb(this.x, this.y, this.ca), gls2.ia.erase(j, this.ca.La), this.hf[2].setup(this), gls2.ta("voJacms"))
}});
(function() {
  gls2.ha.Ji = {kujo:[2, 300, r, r, 1, {radius:24}], kiryu:[3, 400, r, r, 1, {radius:24}], natsuki:[5, 900, j, r, 1, {radius:24}], kise:[50, 15E3, j, r, 1, {radius:24}], yamabuki:[100, 15E3, j, r, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, r, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, r, r, 5, {width:100, height:20}], kasugano:[4, 1E3, r, r, 1, {radius:24}], 
  kurokawa:[35, 5E3, r, r, 5, {width:100, height:20}], akimoto:[250, 3E5, r, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, r, j, 20, {width:180, heightBottom:40, heightTop:60}], aono:[250, 3E5, r, j, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, r, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, r, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, r, j, 20, {width:300, height:80}], higashi:[1500, 12E5, r, j, 20, {width:256, height:128}], momozono:[6E3, 
  35E5, r, j, 0, {width:256, height:128}], hyuga:[6E3, 3E6, r, j, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, r, j, 20, {radius:130}], aida:[8E3, 4E6, r, j, 0, {width:370, heightBottom:5, heightTop:60}], erika:[30, 500, r, r, 1, {width:24, height:48}], hino:[20, 500, r, r, 1, {width:24, height:48}], hoshizora_y:[100, 2E4, r, j, 30, {width:128, height:64}], hoshizora_t:[100, 2E4, r, j, 30, {width:128, height:64}], yotsuba:[300, 1E5, r, j, 30, {width:64, height:64}], yotsubaLeaf:[100, 3E4, r, 
  r, 10, {width:32, height:32}], midorikawa:[5, 1E3, r, r, 1, {width:32, height:32}], aoki:[5, 1200, r, r, 1, {width:32, height:32}]};
  gls2.ha.pa = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ha.za = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ha.la = tm.createClass({superClass:gls2.ha, ag:l, cg:l, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.ag = b("tex_tank1", 64, 64);
    this.cg = b("tex_tank1", 64, 64);
    this.cd = this.cd || 0;
    this.pc = this.pc || 0
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    for(a = this.cd;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.pc;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.ag.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.cg.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.ag.draw(a);
    this.cg.draw(a)
  }, Da:function() {
    gls2.ra.sk(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.bh = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.ea = b("tex2", 256, 128).setFrameIndex(7)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.yb = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.ea = b("tex1", 64, 64).setFrameIndex(23)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Ma = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kasugano");
    this.ea = b("tex1", 64, 64).setFrameIndex(23);
    this.oc = gls2.Wa(80, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && this.oc.clone().setPosition(this.x, this.y).addChildTo(this.ca)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Jc = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.zc = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.ea = b("tex1", 256, 128).setFrameIndex(1)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.qc()
  }});
  gls2.ha.Kf = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "aono");
    this.ea = b("tex1", 256, 128);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 128;
    this.setScale(1.2);
    this.Fb = gls2.Wa(50, 1, 0.95)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Fb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca), this.Fb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca))
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.qc()
  }});
  gls2.ha.wd = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "yumehara");
    this.ea = b("tex1", 256, 256);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 256;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 256
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.qc()
  }});
  gls2.ha.Pa = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Ce = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "hanasaki");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Ta:z(), Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Bf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "myodoin");
    this.ea = b("tex1", 128, 128).setFrameIndex(12)
  }, Ta:z(), Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.jc = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.tf = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "minazuki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256;
    this.setScale(1.2)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Ka = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hino");
    this.ea = b("tex_stage3", 64, 32).setFrameIndex(0)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.qa = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "midorikawa");
    this.ea = b("tex_stage3", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Ga = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, b) {
    this.superInit(a, b, "aoki");
    this.boundingWidthLeft = 0;
    this.boundingWidthRight = 32;
    this.boundingHeightTop = 0;
    this.boundingHeightBottom = 32
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = 0 > this.velocityX ? -1 : 1
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, Kd:function() {
    480 < this.x && (this.speed *= -1)
  }});
  gls2.ha.ld = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_y");
    this.ea = b("tex_stage3", 256, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Sa === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Sa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.qc()
  }, Kd:function() {
    480 < this.x && (this.velocityX *= -1, this.ea.scaleX = -1)
  }});
  gls2.ha.kd = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_t");
    this.ea = b("tex_stage3", 64, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Sa === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Sa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.qc()
  }, Kd:function() {
    240 < this.x && (this.velocityX *= -1)
  }});
  gls2.ha.pf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "yotsuba");
    this.ea = b("tex_stage3", 128, 128).setFrameIndex(1);
    this.boundingWidth = 128;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.og(this.x, this.y, this.ca);
    this.qc();
    this.ca.jd || gls2.Ni(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove();
    for(var a = 0;4 > a;a++) {
      this.Hc[a] && this.Hc[a].Da()
    }
    delete this.Hc
  }, Kd:function() {
    this.Hc = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Hc[a] = this.qe.Ag({aa:gls2.ha.qf, ba:gls2.da.qf, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Hc[a].dir = b;
      this.Hc[a].lg = this;
      this.Hc[a].Sk = a;
      this.Hc[a].distance = 64
    }
    gls2.ha.prototype.Kd.call(this);
    return this
  }});
  gls2.ha.qf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "yotsubaLeaf");
    this.ea = b("yotsubaLeaf", 64, 64).setFrameIndex(0);
    this.boundingWidth = 64;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    for(a = this.dir;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    this.ea.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    this.lg.Hc[this.Sk] = l;
    this.remove()
  }});
  gls2.ha.Qd = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "erika");
    this.ea = b("tex3", 64, 128);
    this.ea.setFrameIndex(8)
  }, Ta:z(), draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Jb(this.x, this.y, this.ca);
    gls2.Di(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ha.zf = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.ea = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, Da:function() {
    this.qc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Lf = tm.createClass({superClass:gls2.sd, ea:l, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.ea = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.Ke()
  }});
  gls2.ha.Gf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "mishou");
    this.ea = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Fb = gls2.Wa(80, 1, 0.9);
    this.oc = gls2.Wa(256, 1, 0.9)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Fb.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.Fb.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.oc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca))
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, Da:function() {
    this.qc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Hj = tm.createClass({superClass:gls2.sd, init:function(a, d) {
    this.superInit(a, d, "hyuga");
    this.ea = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, Da:function() {
    this.Ke()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Vf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "higashi");
    this.ea = b("tex_stage3", 256, 128).setFrameIndex(2)
  }, Ta:z(), Da:function() {
    this.qc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.oj = tm.createClass({superClass:gls2.sd, init:function(a, d) {
    this.superInit(a, d, "momozono");
    this.ea = b("tex_stage3", 256, 128).setFrameIndex(4);
    this.ea.setScale(2)
  }, Ta:z(), Da:function() {
    this.Ke()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Rf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hishikawa");
    this.ea = b("tex2", 256, 256).setFrameIndex(2);
    this.ea.setScale(2);
    this.Fb = gls2.Wa(60, 1, 0.95);
    this.oc = gls2.Wa(500, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Fb.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Fb.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.oc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, Da:function() {
    this.qc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.rj = tm.createClass({superClass:gls2.sd, init:function(a, d) {
    this.superInit(a, d, "aida");
    this.ea = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Fb = gls2.Wa(60, 1, 0.95);
    this.oc = gls2.Wa(500, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Fb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Fb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Fb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Fb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.oc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Ta:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.mb() : 5 === a.app.frame % 30 && this.ea.lb()
    })
  }, Da:function() {
    this.Ke()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, Ug:l, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.Ug = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, mb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Ug + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = h
  }, lb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Ug;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = h
  }})
})();
(function() {
  gls2.da = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.da.lf(this)
    })
  }});
  gls2.da.Ca = function(a, b) {
    var h = gls2.ia[b].Oe();
    a.on("enterframe", h);
    a.on("completeattack", function() {
      h.stop = j
    })
  };
  gls2.da.lf = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, h = a.length;b < h;b++) {
        a[b] && a[b].tg && (a[b].stop = j)
      }
    }
  };
  gls2.da.pa = tm.createClass({superClass:gls2.da, pattern:l, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.sl = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    var b = this.pattern, h = this.sl;
    a.on("launch", function() {
      var a = gls2.ya.randf(640 * (h - 0.1), 640 * (h + 0.1));
      this.tweener.clear().wait(gls2.ya.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.da.Ca(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.da.yc = gls2.da.pa("basic0-0", 0.2);
  gls2.da.ob = gls2.da.pa("basic0-0", 0.4);
  gls2.da.vd = gls2.da.pa("basic0-0", 0.6);
  gls2.da.nb = gls2.da.pa("basic1-2", 0.2);
  gls2.da.xc = gls2.da.pa("basic1-2", 0.4);
  gls2.da.ud = gls2.da.pa("basic1-2", 0.6);
  gls2.da.za = tm.createClass({superClass:gls2.da, Eb:l, init:function(a) {
    this.superInit();
    this.Eb = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Eb = this.Eb;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      this.speed = 6;
      gls2.da.Ca(this, this.Eb);
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Sa && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.fc() && this.Sa && this.remove();
        if(22500 > gls2.Fc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Ib = r
        }
      })
    }.bind(a))
  }});
  gls2.da.pb = gls2.da.za("basic1-0");
  var b = tm.createClass({superClass:gls2.da, init:function(a, b, h) {
    this.superInit();
    this.Ok = a;
    this.Nk = b;
    this.zd = h
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = this.Ok;
    a.cd = this.Nk;
    this.zd && (a.zd = [].concat(this.zd));
    a.pc = 0;
    a.on("enter", function() {
      gls2.da.Ca(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.cd) * this.speed;
      this.y += Math.sin(this.cd) * this.speed;
      this.Sa && !this.fc() && this.remove();
      for(this.pc = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);0 > this.pc;) {
        this.pc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.pc;) {
        this.pc -= 2 * Math.PI
      }
      this.Ib = this.y < this.fa.y && 4E4 < gls2.Fc(this, this.fa);
      if(this.zd) {
        for(var a = 0;a < this.zd.length;a++) {
          var b = this.zd[a];
          b.frame === this.frame && this.tweener.to({cd:b.dir !== i ? b.dir : this.cd, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.da.lc = b(1, 0.25 * Math.PI);
  gls2.da.Bl = b(1, -1.75 * Math.PI);
  gls2.da.Sd = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.da.ua = b(1.6, 0.5 * Math.PI);
  gls2.da.mc = b(1.6, -0.5 * Math.PI);
  gls2.da.Bi = tm.createClass({superClass:gls2.da, Na:l, init:function(a) {
    this.superInit();
    this.Na = a
  }, setup:function(a) {
    gls2.da.Ca(a, this.Na);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.da.dh = gls2.da.Bi("bukky-4-0");
  b = tm.createClass({superClass:gls2.da, Na:l, Hh:r, init:function(a, b) {
    this.superInit();
    this.Na = a;
    this.Hh = !!b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Na = this.Na;
    a.on("enter", function() {
      gls2.da.Ca(this, this.Na)
    });
    a.on("enterframe", function() {
      this.Sa && !this.fc() && this.remove()
    });
    if(!this.Hh) {
      a.on("enterframe", function() {
        this.Ib = this.y < this.fa.y && 4E4 < gls2.Fc(this, this.fa)
      })
    }
  }});
  gls2.da.Ob = b("basic3-0", r);
  gls2.da.Pb = b("basic3-1", r);
  gls2.da.kc = b("cannon2-0", j);
  gls2.da.sf = b("cannon2-3", j);
  gls2.da.ue = b("cannon3-0", j);
  gls2.da.uf = b("cannon5-0", j);
  b = tm.createClass({superClass:gls2.da, velocityY:0, Na:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Na = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Na];
    a.li = r;
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.da.Ca(this, this.ga[0]);
      this.li = j
    }.bind(a));
    a.on("enterframe", function() {
      this.li && (this.y += this.velocityY, 384 < this.y && gls2.da.lf(this), this.Sa && !this.fc() && this.remove(), this.Ib = this.y < this.fa.y)
    })
  }});
  gls2.da.Xc = b(0.5, "kurokawa-1");
  gls2.da.sj = b(0.5, "kurokawa-4");
  gls2.da.$c = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.Ca(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.Zc = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.Ca(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.Ma = tm.createClass({superClass:gls2.da, direction:1, delay:0, init:function(a, b) {
    this.superInit();
    this.direction = a;
    this.delay = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    tm.app.Tweener(a).wait(this.delay).call(function() {
      gls2.da.Ca(this, "basic1-3")
    }.bind(a));
    tm.app.Tweener(a).wait(this.delay).to({y:64}, 5E3, "easeOutQuad").to({y:1280}, 3E3, "easeInQuad");
    tm.app.Tweener(a).wait(this.delay).to({x:480 * (0.5 + 0.3 * this.direction)}, 3E3, "easeOutExpo").to({x:480 * (0.5 + -0.3 * this.direction)}, 2E3, "easeInOutQuad").to({x:480 * (0.5 + 0.3 * this.direction)}, 2E3, "easeOutExpo").to({x:480 * (0.5 + -0.3 * this.direction)}, 2E3, "easeInOutQuad").to({x:480 * 1.3 * this.direction}, 2E3, "easeInQuad")
  }});
  var a = tm.createClass({superClass:gls2.da, velocityY:0, Na:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Na = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Na];
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0]);
      gls2.ra.Ck(this.x, this.y, this.ca)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Sa && !this.fc() && this.remove();
      this.Ib = this.y < this.fa.y
    })
  }});
  gls2.da.Ka = a(0.5, "akane");
  gls2.da.qa = tm.createClass({superClass:gls2.da, Eb:l, init:function(a, b) {
    this.superInit();
    this.Eb = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Eb = this.Eb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.da.Ca(this, this.Eb);
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Sa && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.fc() && this.Sa && this.remove();
        if(22500 > gls2.Fc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Ib = r
        }
      })
    }.bind(a))
  }});
  gls2.da.sb = gls2.da.qa(3, 1);
  gls2.da.tb = gls2.da.qa(6, 1);
  gls2.da.ub = gls2.da.qa(12, 1);
  gls2.da.Ga = tm.createClass({superClass:gls2.da, Eb:l, init:function(a) {
    this.superInit();
    this.Eb = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Eb = this.Eb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.da.Ca(this, this.Eb);
      var a = 0;
      this.on("enterframe", function() {
        this.x += this.speed;
        this.y += 8 * Math.sin(a);
        a += 0.01
      })
    }.bind(a))
  }});
  gls2.da.Ga = gls2.da.Ga(3);
  gls2.da.ld = tm.createClass({superClass:gls2.da, velocityX:0, Na:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Na = "miyuki_y"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Na];
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Sa && !this.fc() && this.remove();
      this.Ib = this.y < this.fa.y
    })
  }});
  gls2.da.ld = gls2.da.ld(1);
  gls2.da.kd = tm.createClass({superClass:gls2.da, velocityX:0, Na:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Na = "miyuki_t"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Na];
    a.ii = 0;
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      0 == this.ii ? (this.y += 0.5, 256 < this.y && this.ii++) : this.x += this.velocityX;
      this.Sa && !this.fc() && this.remove()
    })
  }});
  gls2.da.kd = gls2.da.kd(0.5);
  a = tm.createClass({superClass:gls2.da, velocityX:0, Na:l, init:function() {
    this.superInit();
    this.Na = "alice"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = 0.5;
    a.ga = [this.Na];
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Sa && !this.fc() && this.remove();
      this.Ib = this.y < this.fa.y
    })
  }});
  gls2.da.pf = a();
  a = tm.createClass({superClass:gls2.da, Na:l, init:function() {
    this.superInit();
    this.Na = "aliceLeaf"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [this.Na];
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.lg.x, b = this.lg.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      this.Sa && !this.fc() && this.remove();
      this.Ib = this.y < this.fa.y
    })
  }});
  gls2.da.qf = a();
  gls2.da.mh = b(0.3, "komachi-1");
  gls2.da.ze = b(0.5, "komachi-2");
  gls2.da.Cf = b(0.5, "komachi-4");
  gls2.da.Kf = tm.createClass({superClass:gls2.da, ni:0, init:function(a) {
    this.superInit();
    this.ni = a
  }, setup:function(a) {
    tm.app.Tweener(a).to({x:480 * this.ni}, 4E3, "easeOutQuad");
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.da.Pf = b(0.1, "nozomi-4");
  gls2.da.Qf = b(0.3, "nozomi-5");
  gls2.da.Qd = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.Ca(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Ib = this.Sa
    })
  }});
  gls2.da.Qd = gls2.da.Qd();
  b = tm.createClass({superClass:gls2.da, ga:l, af:0, init:function(a, b) {
    this.superInit();
    this.ga = a;
    this.af = b || 1500
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.af = this.af;
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.fb === r || 0 >= this.sa) && this.af < this.frame && this.Za === r) {
        this.Za = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.zf = b(["honoka-1"]);
  gls2.da.Lf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.tj = gls2.da.Lf();
  gls2.da.Mf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Mf = gls2.da.Mf();
  gls2.da.Nf = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.sa || gls2.da.Ca(this, "nagisa-3-1")
    })
  }});
  gls2.da.Nf = gls2.da.Nf();
  gls2.da.Gf = b(["mai-1", "mai-2"]);
  gls2.da.Sf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Sf = gls2.da.Sf();
  gls2.da.Tf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Tf = gls2.da.Tf();
  gls2.da.Uf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Uf = gls2.da.Uf();
  a = tm.createClass({superClass:gls2.da, ga:l, init:function(a) {
    this.superInit();
    this.ga = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.fb === r || 0 >= this.sa) && 1500 < this.frame && this.Za === r) {
        this.Za = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Vf = a(["setsuna-1"]);
  gls2.da.Df = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Df = gls2.da.Df();
  gls2.da.Ef = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Ef = gls2.da.Ef();
  gls2.da.Ff = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Ff = gls2.da.Ff();
  gls2.da.Rf = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.da.Hf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.ya.randf(-48, 48);
        this.tweener.move(Math.clamp(this.fa.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Hf = gls2.da.Hf();
  gls2.da.If = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.4 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.If = gls2.da.If();
  gls2.da.Jf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Jf = gls2.da.Jf()
})();
(function() {
  var b = gls2.ha, a = gls2.da;
  gls2.gh = {"heri1-left":[{aa:b.za, ba:a.yc, x:48, y:-100}, {aa:b.za, ba:a.ob, x:96, y:-100}, {aa:b.za, ba:a.yc, x:144, y:-100}, {aa:b.za, ba:a.ob, x:192, y:-100}, {aa:b.za, ba:a.yc, x:240, y:-100}], "heri1-center":[{aa:b.za, ba:a.yc, x:144, y:-100}, {aa:b.za, ba:a.ob, x:192, y:-100}, {aa:b.za, ba:a.yc, x:240, y:-100}, {aa:b.za, ba:a.ob, x:288, y:-100}, {aa:b.za, ba:a.yc, x:336, y:-100}], "heri1-right":[{aa:b.za, ba:a.yc, x:240, y:-100}, {aa:b.za, ba:a.ob, x:288, y:-100}, {aa:b.za, ba:a.yc, x:336, 
  y:-100}, {aa:b.za, ba:a.ob, x:384, y:-100}, {aa:b.za, ba:a.yc, x:432, y:-100}], "heri1-left2":[{aa:b.za, ba:a.ob, x:48, y:-100}, {aa:b.za, ba:a.vd, x:96, y:-100}, {aa:b.za, ba:a.ob, x:144, y:-100}, {aa:b.za, ba:a.vd, x:192, y:-100}, {aa:b.za, ba:a.ob, x:240, y:-100}], "heri1-center2":[{aa:b.za, ba:a.ob, x:144, y:-100}, {aa:b.za, ba:a.vd, x:192, y:-100}, {aa:b.za, ba:a.ob, x:240, y:-100}, {aa:b.za, ba:a.vd, x:288, y:-100}, {aa:b.za, ba:a.ob, x:336, y:-100}], "heri1-right2":[{aa:b.za, ba:a.ob, x:240, 
  y:-100}, {aa:b.za, ba:a.vd, x:288, y:-100}, {aa:b.za, ba:a.ob, x:336, y:-100}, {aa:b.za, ba:a.vd, x:384, y:-100}, {aa:b.za, ba:a.ob, x:432, y:-100}], "heri2-left":[{aa:b.pa, ba:a.pb, x:48, y:-100}, {aa:b.pa, ba:a.pb, x:96, y:-100}, {aa:b.pa, ba:a.pb, x:144, y:-100}, {aa:b.pa, ba:a.pb, x:192, y:-100}, {aa:b.pa, ba:a.pb, x:240, y:-100}], "heri2-center":[{aa:b.pa, ba:a.pb, x:144, y:-100}, {aa:b.pa, ba:a.pb, x:192, y:-100}, {aa:b.pa, ba:a.pb, x:240, y:-100}, {aa:b.pa, ba:a.pb, x:288, y:-100}, {aa:b.pa, 
  ba:a.pb, x:336, y:-100}], "heri2-right":[{aa:b.pa, ba:a.pb, x:240, y:-100}, {aa:b.pa, ba:a.pb, x:288, y:-100}, {aa:b.pa, ba:a.pb, x:336, y:-100}, {aa:b.pa, ba:a.pb, x:384, y:-100}, {aa:b.pa, ba:a.pb, x:432, y:-100}], "heri1-4-left":[{aa:b.pa, ba:a.nb, x:48, y:-100}, {aa:b.pa, ba:a.nb, x:96, y:-100}, {aa:b.pa, ba:a.nb, x:144, y:-100}, {aa:b.pa, ba:a.nb, x:192, y:-100}, {aa:b.pa, ba:a.nb, x:240, y:-100}], "heri1-4-center":[{aa:b.pa, ba:a.nb, x:144, y:-100}, {aa:b.pa, ba:a.nb, x:192, y:-100}, {aa:b.pa, 
  ba:a.nb, x:240, y:-100}, {aa:b.pa, ba:a.nb, x:288, y:-100}, {aa:b.pa, ba:a.nb, x:336, y:-100}], "heri1-4-right":[{aa:b.pa, ba:a.nb, x:240, y:-100}, {aa:b.pa, ba:a.nb, x:288, y:-100}, {aa:b.pa, ba:a.nb, x:336, y:-100}, {aa:b.pa, ba:a.nb, x:384, y:-100}, {aa:b.pa, ba:a.nb, x:432, y:-100}], "heri1-4-left2":[{aa:b.pa, ba:a.xc, x:48, y:-100}, {aa:b.pa, ba:a.ud, x:96, y:-100}, {aa:b.pa, ba:a.xc, x:144, y:-100}, {aa:b.pa, ba:a.ud, x:192, y:-100}, {aa:b.pa, ba:a.xc, x:240, y:-100}], "heri1-4-center2":[{aa:b.pa, 
  ba:a.xc, x:144, y:-100}, {aa:b.pa, ba:a.ud, x:192, y:-100}, {aa:b.pa, ba:a.xc, x:240, y:-100}, {aa:b.pa, ba:a.ud, x:288, y:-100}, {aa:b.pa, ba:a.xc, x:336, y:-100}], "heri1-4-right2":[{aa:b.pa, ba:a.xc, x:240, y:-100}, {aa:b.pa, ba:a.ud, x:288, y:-100}, {aa:b.pa, ba:a.xc, x:336, y:-100}, {aa:b.pa, ba:a.ud, x:384, y:-100}, {aa:b.pa, ba:a.xc, x:432, y:-100}], "tankRD-left":[{aa:b.la, ba:a.lc, x:78, y:-50}, {aa:b.la, ba:a.lc, x:28, y:-100}, {aa:b.la, ba:a.lc, x:-22, y:-150}, {aa:b.la, ba:a.lc, x:-72, 
  y:-200}, {aa:b.la, ba:a.lc, x:-122, y:-250}], "tankRD-center":[{aa:b.la, ba:a.lc, x:222, y:-50}, {aa:b.la, ba:a.lc, x:172, y:-100}, {aa:b.la, ba:a.lc, x:122, y:-150}, {aa:b.la, ba:a.lc, x:72, y:-200}, {aa:b.la, ba:a.lc, x:22, y:-250}], "tankL-top":[{aa:b.la, ba:a.Sd, x:550, y:64}, {aa:b.la, ba:a.Sd, x:620, y:64}, {aa:b.la, ba:a.Sd, x:690, y:64}, {aa:b.la, ba:a.Sd, x:760, y:64}, {aa:b.la, ba:a.Sd, x:830, y:64}], "tank5-left":[{aa:b.la, ba:a.ua, x:48, y:-70}, {aa:b.la, ba:a.ua, x:48, y:-140}, {aa:b.la, 
  ba:a.ua, x:48, y:-210}, {aa:b.la, ba:a.ua, x:48, y:-280}, {aa:b.la, ba:a.ua, x:48, y:-350}], "tank5-center":[{aa:b.la, ba:a.ua, x:240, y:-70}, {aa:b.la, ba:a.ua, x:240, y:-140}, {aa:b.la, ba:a.ua, x:240, y:-210}, {aa:b.la, ba:a.ua, x:240, y:-280}, {aa:b.la, ba:a.ua, x:240, y:-350}], "tank15-top":[{aa:b.la, ba:a.ua, x:48, y:-70}, {aa:b.la, ba:a.ua, x:48, y:-140}, {aa:b.la, ba:a.ua, x:48, y:-210}, {aa:b.la, ba:a.ua, x:48, y:-280}, {aa:b.la, ba:a.ua, x:48, y:-350}, {aa:b.la, ba:a.ua, x:240, y:-70}, 
  {aa:b.la, ba:a.ua, x:240, y:-140}, {aa:b.la, ba:a.ua, x:240, y:-210}, {aa:b.la, ba:a.ua, x:240, y:-280}, {aa:b.la, ba:a.ua, x:240, y:-350}, {aa:b.la, ba:a.ua, x:432, y:-70}, {aa:b.la, ba:a.ua, x:432, y:-140}, {aa:b.la, ba:a.ua, x:432, y:-210}, {aa:b.la, ba:a.ua, x:432, y:-280}, {aa:b.la, ba:a.ua, x:432, y:-350}], "tank25-top":[{aa:b.la, ba:a.ua, x:48, y:-70}, {aa:b.la, ba:a.ua, x:48, y:-140}, {aa:b.la, ba:a.ua, x:48, y:-210}, {aa:b.la, ba:a.ua, x:48, y:-280}, {aa:b.la, ba:a.ua, x:48, y:-350}, {aa:b.la, 
  ba:a.ua, x:240, y:-70}, {aa:b.la, ba:a.ua, x:240, y:-140}, {aa:b.la, ba:a.ua, x:240, y:-210}, {aa:b.la, ba:a.ua, x:240, y:-280}, {aa:b.la, ba:a.ua, x:240, y:-350}, {aa:b.la, ba:a.ua, x:432, y:-70}, {aa:b.la, ba:a.ua, x:432, y:-140}, {aa:b.la, ba:a.ua, x:432, y:-210}, {aa:b.la, ba:a.ua, x:432, y:-280}, {aa:b.la, ba:a.ua, x:432, y:-350}, {aa:b.la, ba:a.mc, x:144, y:710}, {aa:b.la, ba:a.mc, x:144, y:780}, {aa:b.la, ba:a.mc, x:144, y:850}, {aa:b.la, ba:a.mc, x:144, y:920}, {aa:b.la, ba:a.mc, x:144, 
  y:990}, {aa:b.la, ba:a.mc, x:336, y:710}, {aa:b.la, ba:a.mc, x:336, y:780}, {aa:b.la, ba:a.mc, x:336, y:850}, {aa:b.la, ba:a.mc, x:336, y:920}, {aa:b.la, ba:a.mc, x:336, y:990}], "bukky-4-r":[{aa:b.bh, ba:a.dh, x:480, y:-50}], "bukky-4-l":[{aa:b.bh, ba:a.dh, x:0, y:-50}], "cannon-0":[{aa:b.Pa, ba:a.Ob, x:48, y:-100}], "cannon-1":[{aa:b.Pa, ba:a.Ob, x:96, y:-100}], "cannon-2":[{aa:b.Pa, ba:a.Ob, x:144, y:-100}], "cannon-3":[{aa:b.Pa, ba:a.Ob, x:192, y:-100}], "cannon-4":[{aa:b.Pa, ba:a.Ob, x:240, 
  y:-100}], "cannon-5":[{aa:b.Pa, ba:a.Ob, x:288, y:-100}], "cannon-6":[{aa:b.Pa, ba:a.Ob, x:336, y:-100}], "cannon-7":[{aa:b.Pa, ba:a.Ob, x:384, y:-100}], "cannon-8":[{aa:b.Pa, ba:a.Ob, x:432, y:-100}], "cannon-R0":[{aa:b.Pa, ba:a.Ob, x:550, y:128}], "cannon-R1":[{aa:b.Pa, ba:a.Ob, x:550, y:192}], "cannon-R2":[{aa:b.Pa, ba:a.Ob, x:550, y:256}], "yayoi-0":[{aa:b.Pa, ba:a.Pb, x:48, y:-100}], "yayoi-1":[{aa:b.Pa, ba:a.Pb, x:96, y:-100}], "yayoi-2":[{aa:b.Pa, ba:a.Pb, x:144, y:-100}], "yayoi-3":[{aa:b.Pa, 
  ba:a.Pb, x:192, y:-100}], "yayoi-4":[{aa:b.Pa, ba:a.Pb, x:240, y:-100}], "yayoi-5":[{aa:b.Pa, ba:a.Pb, x:288, y:-100}], "yayoi-6":[{aa:b.Pa, ba:a.Pb, x:336, y:-100}], "yayoi-7":[{aa:b.Pa, ba:a.Pb, x:384, y:-100}], "yayoi-8":[{aa:b.Pa, ba:a.Pb, x:432, y:-100}], "yayoi-R0":[{aa:b.Pa, ba:a.Pb, x:550, y:128}], "yayoi-R1":[{aa:b.Pa, ba:a.Pb, x:550, y:192}], "yayoi-R2":[{aa:b.Pa, ba:a.Pb, x:550, y:256}], "tsubomi-0":[{aa:b.Ce, ba:a.ue, x:96, y:-100}], "tsubomi-1":[{aa:b.Ce, ba:a.ue, x:240, y:-100}], 
  "tsubomi-2":[{aa:b.Ce, ba:a.ue, x:384, y:-100}], "tsubomi-R0":[{aa:b.Ce, ba:a.ue, x:580, y:128}], "itsuki-0":[{aa:b.Bf, ba:a.uf, x:96, y:-100}], "itsuki-1":[{aa:b.Bf, ba:a.uf, x:240, y:-100}], "itsuki-2":[{aa:b.Bf, ba:a.uf, x:384, y:-100}], "makoto-0":[{aa:b.jc, ba:a.kc, x:48, y:-100}], "makoto-1":[{aa:b.jc, ba:a.kc, x:96, y:-100}], "makoto-2":[{aa:b.jc, ba:a.kc, x:144, y:-100}], "makoto-3":[{aa:b.jc, ba:a.kc, x:192, y:-100}], "makoto-4":[{aa:b.jc, ba:a.kc, x:240, y:-100}], "makoto-5":[{aa:b.jc, 
  ba:a.kc, x:288, y:-100}], "makoto-6":[{aa:b.jc, ba:a.kc, x:336, y:-100}], "makoto-7":[{aa:b.jc, ba:a.kc, x:384, y:-100}], "makoto-8":[{aa:b.jc, ba:a.kc, x:432, y:-100}], "makoto-R0":[{aa:b.jc, ba:a.kc, x:580, y:128}], "karen-3-2":[{aa:b.tf, ba:a.sf, x:96, y:-100}], "karen-3-5":[{aa:b.tf, ba:a.sf, x:240, y:-100}], "karen-3-8":[{aa:b.tf, ba:a.sf, x:384, y:-100}], "fighter-m-0":[{aa:b.Jc, ba:a.Xc, x:96, y:-192}], "fighter-m-1":[{aa:b.Jc, ba:a.Xc, x:144, y:-192}], "fighter-m-2":[{aa:b.Jc, ba:a.Xc, 
  x:192, y:-192}], "fighter-m-3":[{aa:b.Jc, ba:a.Xc, x:240, y:-192}], "fighter-m-4":[{aa:b.Jc, ba:a.Xc, x:288, y:-192}], "fighter-m-5":[{aa:b.Jc, ba:a.Xc, x:336, y:-192}], "fighter-m-6":[{aa:b.Jc, ba:a.Xc, x:384, y:-192}], "fighter-m4-0":[{aa:b.Jc, ba:a.sj, x:96, y:-192}], "tsukikage-r":[{aa:b.yb, ba:a.$c(700), x:624, y:256}, {aa:b.yb, ba:a.$c(600), x:720, y:256}, {aa:b.yb, ba:a.$c(500), x:576, y:320}, {aa:b.yb, ba:a.$c(400), x:672, y:320}, {aa:b.yb, ba:a.$c(300), x:768, y:320}, {aa:b.yb, ba:a.$c(200), 
  x:624, y:384}, {aa:b.yb, ba:a.$c(100), x:720, y:384}], "tsukikage-l":[{aa:b.yb, ba:a.Zc(700), x:-144, y:384}, {aa:b.yb, ba:a.Zc(600), x:-240, y:384}, {aa:b.yb, ba:a.Zc(500), x:-96, y:320}, {aa:b.yb, ba:a.Zc(400), x:-192, y:320}, {aa:b.yb, ba:a.Zc(300), x:-288, y:320}, {aa:b.yb, ba:a.Zc(200), x:-144, y:256}, {aa:b.yb, ba:a.Zc(100), x:-240, y:256}], "urara5-0":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Ma, ba:a.Ma(1, 200 * f), x:-144, y:320}), d.push({aa:b.Ma, ba:a.Ma(1, 200 * f), x:-144, y:352}), d.push({aa:b.Ma, ba:a.Ma(1, 200 * f), x:-144, y:384})
    }
    return d
  }(), "urara5-1":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Ma, ba:a.Ma(-1, 200 * f), x:624, y:320}), d.push({aa:b.Ma, ba:a.Ma(-1, 200 * f), x:624, y:352}), d.push({aa:b.Ma, ba:a.Ma(-1, 200 * f), x:624, y:384})
    }
    return d
  }(), "urara5-2":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Ma, ba:a.Ma(1, 200 * f), x:-144, y:128}), d.push({aa:b.Ma, ba:a.Ma(1, 200 * f), x:-144, y:160}), d.push({aa:b.Ma, ba:a.Ma(1, 200 * f), x:-144, y:192})
    }
    return d
  }(), "urara5-3":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Ma, ba:a.Ma(-1, 200 * f), x:624, y:128}), d.push({aa:b.Ma, ba:a.Ma(-1, 200 * f), x:624, y:160}), d.push({aa:b.Ma, ba:a.Ma(-1, 200 * f), x:624, y:192})
    }
    return d
  }(), "komachi-0":[{aa:b.zc, ba:a.mh, x:144, y:-192}], "komachi-1":[{aa:b.zc, ba:a.mh, x:336, y:-192}], "komachi2-0":[{aa:b.zc, ba:a.ze, x:144, y:-192}], "komachi2-1":[{aa:b.zc, ba:a.ze, x:336, y:-192}], "komachi3-0":[{aa:b.zc, ba:a.ze, x:144, y:-192}], "komachi3-1":[{aa:b.zc, ba:a.ze, x:336, y:-192}], "komachi4-0":[{aa:b.zc, ba:a.Cf, x:144, y:-192}], "komachi4-1":[{aa:b.zc, ba:a.Cf, x:336, y:-192}], "komachi4-2":[{aa:b.zc, ba:a.Cf, x:240, y:-192}], "nozomi4-0":[{aa:b.wd, ba:a.Pf, x:144, y:-192}], 
  "nozomi4-1":[{aa:b.wd, ba:a.Pf, x:240, y:-192}], "nozomi4-2":[{aa:b.wd, ba:a.Pf, x:336, y:-192}], "nozomi5-0":[{aa:b.wd, ba:a.Qf, x:144, y:-320}], "nozomi5-1":[{aa:b.wd, ba:a.Qf, x:240, y:-192}], "nozomi5-2":[{aa:b.wd, ba:a.Qf, x:336, y:-320}], "mktn5-0":[{aa:b.Kf, ba:a.Kf(0.7), x:624, y:128}], "akane-center":[{aa:b.Ka, ba:a.Ka, x:144, y:130}, {aa:b.Ka, ba:a.Ka, x:192, y:80}, {aa:b.Ka, ba:a.Ka, x:240, y:140}, {aa:b.Ka, ba:a.Ka, x:288, y:80}, {aa:b.Ka, ba:a.Ka, x:336, y:130}], "akane-right":[{aa:b.Ka, 
  ba:a.Ka, x:384, y:160}, {aa:b.Ka, ba:a.Ka, x:288, y:120}, {aa:b.Ka, ba:a.Ka, x:288, y:80}, {aa:b.Ka, ba:a.Ka, x:384, y:40}], "akane-left":[{aa:b.Ka, ba:a.Ka, x:96, y:160}, {aa:b.Ka, ba:a.Ka, x:144, y:120}, {aa:b.Ka, ba:a.Ka, x:144, y:80}, {aa:b.Ka, ba:a.Ka, x:96, y:40}], "nao1-left":[{aa:b.qa, ba:a.sb, x:48, y:-100}, {aa:b.qa, ba:a.sb, x:96, y:-100}, {aa:b.qa, ba:a.sb, x:144, y:-100}, {aa:b.qa, ba:a.sb, x:192, y:-100}, {aa:b.qa, ba:a.sb, x:240, y:-100}], "nao1-right":[{aa:b.qa, ba:a.sb, x:240, 
  y:-100}, {aa:b.qa, ba:a.sb, x:288, y:-100}, {aa:b.qa, ba:a.sb, x:336, y:-100}, {aa:b.qa, ba:a.sb, x:384, y:-100}, {aa:b.qa, ba:a.sb, x:432, y:-100}], "nao1-center":[{aa:b.qa, ba:a.sb, x:144, y:-100}, {aa:b.qa, ba:a.sb, x:192, y:-100}, {aa:b.qa, ba:a.sb, x:240, y:-100}, {aa:b.qa, ba:a.sb, x:288, y:-100}, {aa:b.qa, ba:a.sb, x:336, y:-100}], "nao2-left":[{aa:b.qa, ba:a.tb, x:48, y:-100}, {aa:b.qa, ba:a.tb, x:96, y:-100}, {aa:b.qa, ba:a.tb, x:144, y:-100}, {aa:b.qa, ba:a.tb, x:192, y:-100}, {aa:b.qa, 
  ba:a.tb, x:240, y:-100}], "nao2-right":[{aa:b.qa, ba:a.tb, x:240, y:-100}, {aa:b.qa, ba:a.tb, x:288, y:-100}, {aa:b.qa, ba:a.tb, x:336, y:-100}, {aa:b.qa, ba:a.tb, x:384, y:-100}, {aa:b.qa, ba:a.tb, x:432, y:-100}], "nao2-center":[{aa:b.qa, ba:a.tb, x:144, y:-100}, {aa:b.qa, ba:a.tb, x:192, y:-100}, {aa:b.qa, ba:a.tb, x:240, y:-100}, {aa:b.qa, ba:a.tb, x:288, y:-100}, {aa:b.qa, ba:a.tb, x:336, y:-100}], "nao3-left":[{aa:b.qa, ba:a.ub, x:48, y:-100}, {aa:b.qa, ba:a.ub, x:96, y:-100}, {aa:b.qa, ba:a.ub, 
  x:144, y:-100}, {aa:b.qa, ba:a.ub, x:192, y:-100}, {aa:b.qa, ba:a.ub, x:240, y:-100}], "nao3-right":[{aa:b.qa, ba:a.ub, x:240, y:-100}, {aa:b.qa, ba:a.ub, x:288, y:-100}, {aa:b.qa, ba:a.ub, x:336, y:-100}, {aa:b.qa, ba:a.ub, x:384, y:-100}, {aa:b.qa, ba:a.ub, x:432, y:-100}], "nao3-center":[{aa:b.qa, ba:a.ub, x:144, y:-100}, {aa:b.qa, ba:a.ub, x:192, y:-100}, {aa:b.qa, ba:a.ub, x:240, y:-100}, {aa:b.qa, ba:a.ub, x:288, y:-100}, {aa:b.qa, ba:a.ub, x:336, y:-100}], "reika-left":[{aa:b.Ga, ba:a.Ga, 
  x:240, y:320}, {aa:b.Ga, ba:a.Ga, x:-48, y:64}, {aa:b.Ga, ba:a.Ga, x:-72, y:128}, {aa:b.Ga, ba:a.Ga, x:-96, y:64}, {aa:b.Ga, ba:a.Ga, x:-120, y:128}, {aa:b.Ga, ba:a.Ga, x:-144, y:64}, {aa:b.Ga, ba:a.Ga, x:-168, y:128}], "reika-right":[{aa:b.Ga, ba:a.Ga, x:240, y:320}, {aa:b.Ga, ba:a.Ga, x:528, y:64}, {aa:b.Ga, ba:a.Ga, x:552, y:128}, {aa:b.Ga, ba:a.Ga, x:576, y:64}, {aa:b.Ga, ba:a.Ga, x:600, y:128}, {aa:b.Ga, ba:a.Ga, x:624, y:64}, {aa:b.Ga, ba:a.Ga, x:648, y:128}], hoshizora_y1:[{aa:b.ld, ba:a.ld, 
  x:-256, y:140}], hoshizora_y2:[{aa:b.ld, ba:a.ld, x:608, y:60}], hoshizora_t1:[{aa:b.kd, ba:a.kd, x:336, y:-128}], hoshizora_t2:[{aa:b.kd, ba:a.kd, x:144, y:-128}], yotsuba:[{aa:b.pf, ba:a.pf, x:240, y:-64}], erika:[{aa:b.Qd, ba:a.Qd, x:240, y:-100}], yukishiro:[{aa:b.zf, ba:a.zf, x:240, y:-100}], misumi:[{aa:b.Lf, ba:[a.tj, a.Mf, a.Nf], x:240, y:-100, bc:j}], mai:[{aa:b.Gf, ba:a.Gf, x:780, y:128}], hyuga:[{aa:b.Hj, ba:[a.Sf, a.Tf, a.Uf], x:240, y:-100, bc:j}], higashi:[{aa:b.Vf, ba:a.Vf, x:780, 
  y:128}], momozono:[{aa:b.oj, ba:[a.Df, a.Ef, a.Ff], x:240, y:-100, bc:j}], rikka:[{aa:b.Rf, ba:a.Rf, x:240, y:-100}], mana:[{aa:b.rj, ba:[a.Hf, a.If, a.Jf], x:240, y:-100, bc:j}]}
})();
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, h, k, m) {
    return c.action([c.fire(c.direction(b, "absolute"), f, h || u, k, m), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, h || u, k, m)])])
  }
  function d(a, b, c, d, h) {
    return function(k) {
      return f(a, b, c, k, d, h, i, i)
    }
  }
  function f(a, b, d, f, h, k, m, n) {
    return c.action([c.fire(c.direction(b), f, h || u, k, m, n), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, h || u, k, m, n)])])
  }
  function h(a) {
    return c.fire(c.direction(0), a || n, C)
  }
  function m(a) {
    return c.fire(c.direction(0), a || n, u)
  }
  function q(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function v(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function w(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function n(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function K(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function k(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function N(a) {
    return c.Ia(a, {frame:3, ie:j})
  }
  function O(a) {
    return c.Ia(a, {frame:2, ie:j})
  }
  function E(a) {
    return c.Ia(a, {visible:r})
  }
  function D(a) {
    return c.Ia(a, {frame:4, ac:j})
  }
  function I(a) {
    return c.Ia(a, {frame:3})
  }
  function u(a) {
    return c.Ia(a, {frame:1})
  }
  function t(a) {
    return c.Ia(a, {frame:2})
  }
  function C(a) {
    return c.Ia(a, {frame:0})
  }
  function A(a) {
    return c.Ia(a, {frame:3, ac:j})
  }
  function J(a) {
    return c.Ia(a, {frame:1, ac:j})
  }
  function B(a) {
    return c.Ia(a, {frame:2, ac:j})
  }
  function F(a) {
    return c.Ia(a, {frame:0, ac:j})
  }
  gls2.ia = {};
  var c = G.Ja;
  gls2.ia["basic0-0"] = new G.ka({top:c.action([m])});
  gls2.ia["basic0-1"] = new G.ka({top:c.action([b(w, -0.01, 8, d(3, -15, 15))])});
  gls2.ia["basic1-0"] = new G.ka({top:c.action([c.repeat(999, [k(40), m(n)])])});
  gls2.ia["basic1-1"] = new G.ka({top:c.action([c.repeat(999, [k(20), m(n)])])});
  gls2.ia["basic1-2"] = new G.ka({top:c.action([k("10+$rand*100"), f(3, -20, 20, n)])});
  gls2.ia["basic1-3"] = new G.ka({top:c.action([c.repeat(999, [k("10+$rand*100"), f(3, -20, 20, n)])])});
  gls2.ia["basic2-0"] = new G.ka({top:c.action([c.repeat(999, [k(50), m(n)])])});
  gls2.ia["basic3-0"] = new G.ka({top:c.action([c.wait(20), c.repeat(999, [k(100), b(n, 0.1, 3, h)])])});
  gls2.ia["basic3-1"] = new G.ka({top:c.action([c.wait(20), c.repeat(999, [k(40), b(n, 0.1, 3, h)])])});
  gls2.ia["bukky-4-0"] = new G.ka({top0:c.action([k(30), c.repeat(999, [c.fire(c.direction(-40), n, B), c.repeat(3, [c.fire(c.direction(20, "sequence"), n, B), c.fire(c.direction(20, "sequence"), n, B), c.fire(c.direction(20, "sequence"), n, B), c.fire(c.direction(20, "sequence"), n, B), c.fire(c.direction(-80, "sequence"), n, B), k(5)]), k(70)])]), top1:c.action([k(20), c.fire(c.direction(180, "absolute"), p, J), c.repeat(999, [c.fire(c.direction(15, "sequence"), p, J), c.fire(c.direction(15, "sequence"), 
  p, J), c.fire(c.direction(15, "sequence"), p, J), c.fire(c.direction(15, "sequence"), p, J), c.fire(c.direction(15, "sequence"), p, J), c.fire(c.direction(15, "sequence"), p, J), c.fire(c.direction(15, "sequence"), p, J), c.fire(c.direction(15, "sequence"), p, J), c.fire(c.direction(15, "sequence"), p, J), c.fire(c.direction(-90, "sequence"), p, J), k(5)])])});
  gls2.ia["cannon2-0"] = new G.ka({top0:c.action([c.repeat(999, [k(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", p), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", p), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", p), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", p), k(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", n), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", n), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", n), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", n)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), s, D), c.fire(c.direction(" 90+$loop.index*10", "absolute"), s, D), c.fire(c.direction("180+$loop.index*10", "absolute"), s, D), c.fire(c.direction("270+$loop.index*10", "absolute"), s, D), c.fire(c.direction("  0-$loop.index*10", "absolute"), s, D), c.fire(c.direction(" 90-$loop.index*10", "absolute"), s, D), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), s, D), c.fire(c.direction("270-$loop.index*10", "absolute"), s, D), k(10)])]), top2:c.action([c.repeat(999, [k(43), f(30, 0, 348, n, C)])])});
  gls2.ia["cannon2-3"] = new G.ka({top0:c.action([c.repeat(999, [c.Ha("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), E(c.xa("ivs0", "$d")))]), k(10), c.fire(c.direction(39, "sequence"), c.speed(1), E(c.xa("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.Ha("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), E(c.xa("ivs1", "$d")))]), k(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), E(c.xa("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, C), c.$a()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), p, function(a) {
    return c.Ia(a, {frame:7, ac:j})
  }), c.fire(c.direction("$1+5", "relative"), p, function(a) {
    return c.Ia(a, {frame:6, ac:j})
  }), c.$a()])});
  gls2.ia["cannon3-0"] = new G.ka({top0:c.action([c.repeat(999, [k(80), b(p, 0.01, 5, d(5, -30, 30, C, c.offsetX(-60))), b(p, 0.01, 5, d(5, -30, 30, C)), b(p, 0.01, 5, d(5, -30, 30, C, c.offsetX(60)))])])});
  gls2.ia["cannon4-0"] = new G.ka({top0:c.action([k(20), c.repeat(999, [c.fire(p, B), c.repeat(8, [k(10), c.Ha("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), p, B), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), p, B)])]), k(120)])])});
  gls2.ia["cannon5-0"] = new G.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), q, E(c.xa("b"))), c.repeat(11, [k(5), c.fire(c.direction(10, "sequence"), q, E(c.xa("b")))]), k(60)])]), b:c.action([c.wait(5), c.Me(c.speed(0), 0), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, u)
  }), c.$a])});
  gls2.ia["yuri-4"] = new G.ka({top:c.action([k(60), c.repeat(7, [a(7, 120, 240, s, C), k(8)])])});
  gls2.ia["kurokawa-1"] = new G.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return f(4, -45, 45, a, t, c.offsetX(-45), c.va(j))
  }), b(n, -0.01, 4, function(a) {
    return f(4, -45, 45, a, t, c.offsetX(45), c.va(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, A, c.offsetX(-45), c.va(j)), k(45), c.fire(c.direction(0), n, A, c.offsetX(45), c.va(j)), k(45)])])});
  gls2.ia["kurokawa-4"] = new G.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return f(4, -45, 45, a, t, c.offsetX(-45), c.va(j))
  }), b(n, -0.01, 4, function(a) {
    return f(4, -45, 45, a, t, c.offsetX(45), c.va(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, A, c.offsetX(-45), c.va(j)), k(45), c.fire(c.direction(0), n, A, c.offsetX(45), c.va(j)), k(45)])])});
  gls2.ia["komachi-1"] = new G.ka({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40)), c.repeat(57, [k(8), c.fire(c.direction(-720 / 57, "sequence"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, 
  [c.fire(c.direction(-210, "absolute"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40)), c.repeat(57, [k(8), c.fire(c.direction(720 / 57, "sequence"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), n(0), F, c.offsetX(-110), c.va(j)), c.repeat(6, 
  [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), F, c.offsetX(-110), c.va(j))]), k(10), c.fire(c.direction(0), n(0), F, c.offsetX(110), c.va(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), F, c.offsetX(110), c.va(j))]), k(10)])])});
  gls2.ia["komachi-2"] = new G.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([f(4, -45, 45, a, t, c.offsetX(-45), c.va(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), f(4, -45, 45, a, t, c.offsetX(45), c.va(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, J)]), k(1)])
  }), k(180)])])});
  gls2.ia["komachi-3"] = new G.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([f(6, -60, 60, a, t, c.offsetX(-45), c.va(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), f(6, -60, 60, a, t, c.offsetX(45), c.va(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, J)]), k(1)])
  }), k(180)])])});
  gls2.ia["komachi-4"] = new G.ka({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), n, I, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, I, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, I, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), n, I, c.offsetX(45)), k(4)]), k(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), n(5), F, c.offsetX(-110), c.va(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), n(5), F, c.offsetX(-110), c.va(j))]), k(30), c.fire(c.direction(0), n(5), F, c.offsetX(110), c.va(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), n(5), F, c.offsetX(110), c.va(j))]), k(30)])])});
  gls2.ia["nozomi-4"] = new G.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.Ha("c", "2+$loop.index"), f("$c", "-4-($c-2)*4", "4+($c-2)*4", K("(560-$c*40)*0.03"), A, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), E(c.xa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, C, c.offsetX(-50)), c.wait(3)])
  }), k(90), c.fire(c.direction(-40), E(c.xa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, C, c.offsetX(50)), c.wait(3)])
  }), k(90)])]), noop:c.action([c.wait(1), c.$a])});
  gls2.ia["nozomi-5"] = new G.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(6, [c.Ha("c", "2+$loop.index"), f("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", K("(560-$c*40)*0.02"), A, c.offsetY(-50)), f("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", K("(560-$c*40)*0.02"), A, c.offsetY(-50)), f("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", K("(560-$c*40)*0.02"), A, c.offsetY(-50)), f("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", K("(560-$c*40)*0.02"), A, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), 
  c.repeat(999, [c.fire(c.direction(40), E(c.xa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, C, c.offsetX(-50)), k(3)])
  }), c.fire(c.direction(-40), E(c.xa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, C, c.offsetX(50)), k(3)])
  })])]), noop:c.action([c.wait(1), c.$a])});
  gls2.ia.akane = new G.ka({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [k(60), f(1, 1, 1, s, t, c.offsetX(-16), c.offsetY(6), c.va(j)), f(1, 1, 1, s, t, c.offsetX(16), c.offsetY(6), c.va(j))]), k(120)])])});
  gls2.ia["nao-1"] = new G.ka({top:c.action([c.repeat(999, [k(20), c.fire(c.direction(0), w, A)])])});
  gls2.ia["nao-2"] = new G.ka({top:c.action([c.repeat(999, [k(20), f(2, -5, 5, w, A, c.offsetX(0), c.offsetY(0), c.va(j))])])});
  gls2.ia["nao-3"] = new G.ka({top:c.action([c.repeat(999, [k(20), f(2, -1, 1, w, A, c.offsetX(0), c.offsetY(0), c.va(j))])])});
  gls2.ia.reika = new G.ka({top:c.action([c.repeat(999, [k(20), c.fire(c.direction(0), v, B)])])});
  gls2.ia.miyuki_y = new G.ka({top:c.action([c.wait("40"), c.repeat(999, [k(30), f(3, -45, 45, s, t, c.offsetX(-64), c.offsetY(16), c.va(j)), f(3, -45, 45, s, t, c.offsetX(0), c.offsetY(16), c.va(j)), f(3, -45, 45, s, t, c.offsetX(16), c.offsetY(16), c.va(j)), f(3, -45, 45, s, t, c.offsetX(32), c.offsetY(16), c.va(j)), b(s, 0.001, 5, function(a) {
    return c.action([f(3, "-45", "+45", a, B, c.offsetX(0), c.offsetY(0))])
  })])])});
  gls2.ia.miyuki_t = new G.ka({top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(3, [a(3, -20, 20, n, B, c.offsetX(32), c.offsetY(32)), k(30)]), c.repeat(3, [a(3, -10, 10, n, B, c.offsetX(-32), c.offsetY(-32)), k(30)]), c.repeat(3, [a(3, -5, 5, n, B, c.offsetX(-16), c.offsetY(-16)), k(30)]), k(120)])]), top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [a(5, -30, 30, n, B, c.offsetX(-32), c.offsetY(32)), k(45)]), c.repeat(5, [a(5, -30, 30, n, B, c.offsetX(32), c.offsetY(32)), k(45)]), k(120)])])});
  gls2.ia.alice = new G.ka({top0:c.action([c.repeat(999, [a(8, 0, 180, s, B), a(8, 0, -180, s, B), k(60), a(9, 0, 180, s, A), a(9, 0, -180, s, A), k(60)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(5, "sequence"), s, F, c.offsetX(0), c.va(j)), k(10)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(10, "sequence"), p, J, c.offsetX(0), c.va(j)), k(10)])])});
  gls2.ia.aliceLeaf = new G.ka({top:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(10, "sequence"), n(5), D, c.offsetX(0), c.va(j)), k(10)])])});
  gls2.ia["honoka-1"] = new G.ka({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, p, D, c.offsetX(0), c.offsetY(30)), k(30), f(5, -40, 40, s, D, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, p(0.6), u), f(3, -3, 3, p(1), u), f(4, -4, 4, p(1.4), u), f(5, -5, 5, p(1.8), u), k(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, s, F, c.offsetX(-110), c.offsetY(-70)), k(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, s, F, c.offsetX(110), 
  c.offsetY(-70)), k(30)])])});
  gls2.ia["nagisa-1-1"] = new G.ka({top0:c.action([k(90), c.repeat(3, [c.Ha("way", "5 + $loop.index*6"), b(n, 0.01, "3 + $loop.index*2", function(a) {
    return c.action([f("$way", -110, 110, a, u, c.offsetX(-190), c.offsetY(-20)), f("$way", -110, 110, a, u, c.offsetX(190), c.offsetY(-20)), c.wait(10)])
  }), k(60)]), k(60)])});
  gls2.ia["nagisa-1-2"] = new G.ka({top0:c.action([c.repeat(12, [f(15, -90, 90, s, u), k(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [f(5, -65, -55, p, F, c.offsetX(-190), c.offsetY(-20)), f(5, -35, -25, p, F, c.offsetX(-190), c.offsetY(-20)), f(5, -5, 5, p, F, c.offsetX(-190), c.offsetY(-20)), f(5, 25, 35, p, F, c.offsetX(-190), c.offsetY(-20)), f(5, 55, 65, p, F, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), k(60), c.repeat(3, [f(5, -65, -55, p, F, c.offsetX(190), c.offsetY(-20)), f(5, -35, 
  -25, p, F, c.offsetX(190), c.offsetY(-20)), f(5, -5, 5, p, F, c.offsetX(190), c.offsetY(-20)), f(5, 25, 35, p, F, c.offsetX(190), c.offsetY(-20)), f(5, 55, 65, p, F, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), k(60)])])});
  gls2.ia["nagisa-1-3"] = new G.ka({top0:c.action([k(60), c.repeat(3, [c.fire(c.direction(-60), p, t, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(6, "sequence"), p, t, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([k(80), c.repeat(3, [c.fire(c.direction(60), p, t, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(-6, "sequence"), p, t, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [f(5, -60, -40, p, D, c.offsetX(-190), 
  c.offsetY(-20)), f(5, -20, -10, p, D, c.offsetX(-190), c.offsetY(-20)), f(5, 10, 20, p, D, c.offsetX(-190), c.offsetY(-20)), f(5, 40, 60, p, D, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), k(60), c.repeat(3, [f(5, -60, -40, p, D, c.offsetX(190), c.offsetY(-20)), f(5, -20, -10, p, D, c.offsetX(190), c.offsetY(-20)), f(5, 10, 20, p, D, c.offsetX(190), c.offsetY(-20)), f(5, 40, 60, p, D, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), k(60)])])});
  gls2.ia["nagisa-2-1"] = new G.ka({top0:c.action([k(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", s, C, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", s, C, c.offsetX(190), c.offsetY(-20)), k(10)])]), top1:c.action([k(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", p, A), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", p, A), k(12)])])});
  gls2.ia["nagisa-2-2"] = new G.ka({top0:c.action([k(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", n, A), k(12)])]), top1:c.action([k(120), c.repeat(6, [a(9, 150, 130, s(0.8), u), a(9, 172, 188, s(0.8), u), a(9, 210, 230, s(0.8), u), k(30), a(9, 170, 150, s(0.8), u), a(9, 190, 210, s(0.8), u), k(30)])])});
  gls2.ia["nagisa-2-3"] = new G.ka({top:c.action([k(120), c.repeat(12, [a(23, 0, 360, s, D, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, s, D), a(23, 0, 360, s, D, c.offsetX(190), c.offsetY(-20)), k(30)])])});
  gls2.ia["nagisa-3-1"] = new G.ka({top0:c.action([k(50), c.repeat(999, [b(n, 0.001, 5, function(a) {
    return c.action([f(41, "-180", "+180", a, B, c.offsetX(-190), c.offsetY(-20)), f(41, "-180", "+180", a, B, c.offsetX(190), c.offsetY(-20))])
  }), k(50)])]), top1:c.action([c.repeat(999, [f(2, -2, 0, w, u), k(10), f(2, 0, 2, w, u), k(150)])])});
  gls2.ia["mai-1"] = new G.ka({top0:c.action([k(50), c.repeat(50, [c.Ha("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, C), c.$a]))), c.Ha("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, C), c.$a]))), k(8)])]), top1:c.action([k(50), c.repeat(12, [a(5, -50, 50, q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, 
  A), c.$a]))), a(5, -230, -130, q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, A), c.$a]))), k(16), a(6, -50, 50, q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, A), c.$a]))), a(6, -230, -130, q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, A), c.$a]))), k(16)])])});
  gls2.ia["mai-2"] = new G.ka({top:c.action([k(50), c.repeat(15, [c.fire(c.direction(-10), B(c.xa("fireChild", "$loop.index*10"))), k(8)])]), fireChild:c.action([k("40+$1"), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, t)
  }), c.$a])});
  gls2.ia["saki-1-1"] = new G.ka({top:c.action([k(100), c.repeat(3, [c.xa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Ha("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, C), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, C), k(12)]), c.repeat("$2", [f(9, -20, 20, w, I)])])});
  gls2.ia["saki-1-2"] = new G.ka({top:c.action([k(100), c.repeat(5, [c.Ha("way", "5+$loop.index*2"), c.repeat(6, [c.Ha("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, n("$s"), A, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), k(90)])])});
  gls2.ia["saki-1-3"] = new G.ka({top:c.action([c.Ha("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), A(c.xa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Me(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, p, I), c.$a])});
  gls2.ia["saki-2-1"] = new G.ka({top0:c.action([k(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", p, C, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", p, C, c.offsetX(40)), k(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", p, C, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", p, C, c.offsetX(40)), k(60)])]), top1:c.action([k(100), c.repeat(4, [c.repeat(7, [c.Ha("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  v, I), c.repeat(4, [c.Ha("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", v("$w*-1.0"), I)])]), k(120)])])});
  gls2.ia["saki-2-2"] = new G.ka({top:c.action([k(60), c.Ha("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), B(c.xa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), B(c.xa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Me(c.speed(0), "10 + $rand*15"), c.wait(65), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, t)])
  }), k(2), c.$a])});
  gls2.ia["saki-2-3"] = new G.ka({top:c.action([k(60), c.Ha("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), A(c.xa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), A(c.xa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Me(c.speed(0), "10 + $rand*20"), c.wait(65), b(n, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, I)])
  }), k(2), c.$a])});
  gls2.ia["saki-3-1"] = new G.ka({top:c.action([c.fire(c.direction(180, "absolute"), K, B(c.xa("seed"))), k(60), c.fire(c.direction(180, "absolute"), K, B(c.xa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), K, B(c.xa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, C), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, C), c.fire(c.direction(90, "sequence"), p, C), c.fire(c.direction(90, "sequence"), p, C), k(10), c.fire(c.direction(100, 
  "sequence"), p, C)])])});
  gls2.ia["saki-3-2"] = new G.ka({top:c.action([c.fire(c.direction(180, "absolute"), K, A(c.xa("seed"))), k(60), c.fire(c.direction(180, "absolute"), K, A(c.xa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), K, A(c.xa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, u), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), k(10), c.fire(c.direction(80, 
  "sequence"), p, u)])])});
  gls2.ia["rikka-1"] = new G.ka({top:c.action([c.repeat(5, [c.Ha("s", "$loop.index*1.5"), k(30), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), f(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.ia["rikka-2"] = new G.ka({top0:c.action([c.repeat(10, [c.fire(B(c.xa("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(B(c.xa("snow")), c.offsetX(90), c.offsetY(-20)), k(8)]), k(10)]), top1:c.action([c.repeat(35, [c.Ha("d", "$loop.index*-(20+$ex*10)"), c.Ha("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), E(c.xa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), E(c.xa("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.Ha("d", "$loop.index*+(20+$ex*10)"), c.Ha("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), E(c.xa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), E(c.xa("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.Ha("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), E(c.xa("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), E(c.xa("snowArm")))])]), c.$a]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), w, F), c.$a]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), n("$2"), O), c.fire(c.direction("$1+1", "relative"), n("$2"), O), c.$a()])});
  gls2.ia["rikka-3"] = new G.ka({top0:c.action([k(40), c.fire(c.direction(-10), E(c.xa("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), K("$loop.index*0.5"), t, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(-90), c.offsetY(-20))]), k(5)]), k(40)]), top1:c.action([k(40), c.fire(c.direction(-10), E(c.xa("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), K("$loop.index*0.5"), t, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(90), c.offsetY(-20))]), k(5)]), k(40)]), dummy:c.action([c.wait(1), c.$a])});
  gls2.ia["mana-1-1"] = new G.ka({top0:c.action([c.xa("winder", -1)]), top1:c.action([c.xa("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), n, N, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [k(20), c.Ha("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), n, N, c.offsetX("-145*$1"), c.offsetY(-5))])])]), top2:c.action([c.wait(60), k(300), c.repeat(7, [c.Ha("s", "$loop.index"), c.repeat(5, [c.Ha("ss", 
  "($s-$loop.index)*0.5"), f(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, w("$ss"), I, c.offsetX(-30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Ha("ss", "($s-$loop.index)*0.5"), f(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, w("$ss"), I, c.offsetX(30), c.offsetY(-30))]), k(20), c.repeat(5, [c.Ha("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, v("$ss"), t, c.offsetX(30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Ha("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, v("$ss"), t, c.offsetX(-30), c.offsetY(-30))]), k(80)])])});
  gls2.ia["mana-1-2"] = new G.ka({top:c.action([c.repeat(5, [c.Ha("i", "$loop.index"), c.Ha("j", "1/($i+1) * 4"), b(n(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*(-3*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, I, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, I, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+3*$j)"), 
    a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-3*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, I, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, I, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), 
    c.fire(c.direction("(12-$i)*(+3*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), k(5)])
  }), k(60)])])});
  gls2.ia["mana-1-3"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-1"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-2"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-3"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-3-1"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-3-2"] = gls2.ia["mana-1-1"];
  gls2.ia["setsuna-1"] = new G.ka({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, p, D, c.offsetX(0), c.offsetY(30)), k(30), f(5, -40, 40, s, D, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, p(0.6), u), f(3, -3, 3, p(1), u), f(4, -4, 4, p(1.4), u), f(5, -5, 5, p(1.8), u), k(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, s, F, c.offsetX(-110), c.offsetY(-70)), k(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, s, F, c.offsetX(110), 
  c.offsetY(-70)), k(30)])])});
  gls2.ia["love-1-1"] = new G.ka({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, p, D, c.offsetX(0), c.offsetY(30)), k(30), f(5, -40, 40, s, D, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, p(0.6), u), f(3, -3, 3, p(1), u), f(4, -4, 4, p(1.4), u), f(5, -5, 5, p(1.8), u), k(110)])])});
  gls2.ia.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      M.push(gls2.Ra())
    }
    a = gls2.ia.Ne = tm.Bb.Wc.Zd;
    a.ug = function(a) {
      return!(a instanceof gls2.Ra) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Eh = function(a) {
      var b = M.shift(0);
      if(b) {
        return b.sa = gls2.ja.yi, L.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.ac ? (b.scaleX = 1, b.scaleY = 1, b.Uc = r) : (a.ie ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Tb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.Uc = j), b.visible = a.visible === r ? r : j, b.ac = !!a.ac, b.ie = !!a.ie, b.Tb = !!a.Tb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Ih = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.pd = gls2.ja.Ai;
    G.Ua.Sb.$rank = 0;
    G.Ua.Sb.$hyperOff = 1
  };
  gls2.ia.erase = function(a, b, c) {
    for(var d = [].concat(L), f = 0, h = d.length;f < h;f++) {
      if(a) {
        var k = gls2.vh(!!b);
        k.setPosition(d[f].x, d[f].y);
        c && (k.hd = j)
      }
      d[f].Da()
    }
  };
  gls2.ia.Xd = function() {
    for(var a = [].concat(L), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Ra = tm.createClass({superClass:tm.display.Sprite, sa:0, ac:r, ie:r, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      M.push(this);
      var a = L.indexOf(this);
      -1 !== a && L.splice(a, 1)
    })
  }, update:function() {
    this.ac && (this.rotation += 15)
  }, Da:function() {
    var a = gls2.Ra.ae().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Ra.ae = function() {
    gls2.Ra.ae.hg === l && (gls2.Ra.ae.hg = gls2.Wa(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Ra.ae.hg.clone()
  };
  gls2.Ra.ae.hg = l;
  var M = [], L = gls2.Ra.rb = []
})();
gls2.ma = {};
gls2.ma.clamp = function(b, a, d) {
  return b < a ? a : b > d ? d : b
};
gls2.ma.DEG_TO_RAD = Math.PI / 180;
gls2.ma.RAD_TO_DEG = 180 / Math.PI;
gls2.ma.degToRad = function(b) {
  return b * gls2.ma.DEG_TO_RAD
};
gls2.ma.radToDeg = function(b) {
  return b * gls2.ma.RAD_TO_DEG
};
gls2.ma.rand = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
gls2.ma.randf = function(b, a) {
  return window.Math.random() * (a - b) + b
};
gls2.ma.magnitude = function() {
  return Math.sqrt(gls2.ma.magnitudeSq.apply(l, arguments))
};
gls2.ma.magnitudeSq = function() {
  for(var b = 0, a = 0, d = arguments.length;a < d;++a) {
    b += arguments[a] * arguments[a]
  }
  return b
};
gls2.ma.inside = function(b, a, d) {
  return b >= a && b <= d
};

