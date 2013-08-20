/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(a) {
  throw a;
}
var i = void 0, k = !0, l = null, n = !1;
function p() {
  return function() {
  }
}
var r = {bg:this};
(function() {
  function a(a, c) {
    for(var f = 0, g = a.length;f < g;f++) {
      if(a[f].label == c) {
        return a[f]
      }
    }
  }
  r.ta = function(a) {
    this.type = "none";
    this.root = this;
    this.Ga = [];
    this.pd = [];
    this.vd = [];
    if(a !== i) {
      for(var c in a) {
        a.hasOwnProperty(c) && (a[c].label = c, a[c] instanceof r.Za ? this.Ga.push(a[c]) : a[c] instanceof r.Kb ? this.pd.push(a[c]) : a[c] instanceof r.jc && this.vd.push(a[c]))
      }
      a = 0;
      for(c = this.Ga.length;a < c;a++) {
        this.Ga[a].cb(this)
      }
      a = 0;
      for(c = this.pd.length;a < c;a++) {
        this.pd[a].cb(this)
      }
      a = 0;
      for(c = this.vd.length;a < c;a++) {
        this.vd[a].cb(this)
      }
    }
  };
  r.ta.prototype.pf = function(b) {
    return a(this.Ga, b)
  };
  r.ta.prototype.oh = function() {
    for(var a = [], c = 0, f = this.Ga.length;c < f;c++) {
      var g = this.Ga[c];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  r.ta.prototype.fh = function(a) {
    var c;
    if(c = this.pf(a)) {
      return c
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  r.ta.prototype.gh = function(b) {
    return a(this.pd, b)
  };
  r.ta.prototype.hh = function(a) {
    var c;
    if(c = this.gh(a)) {
      return c
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  r.ta.prototype.ih = function(b) {
    return a(this.vd, b)
  };
  r.ta.prototype.jh = function(a) {
    var c;
    if(c = this.ih(a)) {
      return c
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  r.Kb = function() {
    this.root = this.label = l;
    this.direction = new r.Ab(0);
    this.speed = new r.Cb(1);
    this.Ga = [];
    this.Ma = {};
    this.ja = {}
  };
  r.Kb.prototype.clone = function(a) {
    var c = new r.Kb;
    c.label = this.label;
    c.root = this.root;
    c.Ga = this.Ga;
    c.direction = new r.Ab(a.Ka(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new r.Cb(a.Ka(this.speed.value));
    c.speed.type = this.speed.type;
    c.Ma = this.Ma;
    c.ja = a.ja;
    return c
  };
  r.Kb.prototype.cb = function(a) {
    this.root = a;
    for(var c = 0, f = this.Ga.length;c < f;c++) {
      this.Ga[c].cb(a)
    }
  };
  r.ad = function(a) {
    this.root = l;
    this.label = a;
    this.Ea = []
  };
  r.ad.prototype.clone = function(a) {
    var c = a.ja;
    a.ja = a.$d(this.Ea);
    var f = this.root.hh(this.label).clone(a);
    a.ja = c;
    return f
  };
  r.ad.prototype.cb = function(a) {
    this.root = a
  };
  r.Fa = function() {
    this.Ta = ""
  };
  r.Fa.prototype.cb = function(a) {
    this.root = a
  };
  r.Za = function() {
    this.Ta = "action";
    this.root = this.label = l;
    this.gb = [];
    this.Ea = []
  };
  r.Za.prototype = new r.Fa;
  r.Za.prototype.cb = function(a) {
    this.root = a;
    for(var c = 0, f = this.gb.length;c < f;c++) {
      this.gb[c].cb(a)
    }
  };
  r.Za.prototype.clone = function() {
    var a = new r.Za;
    a.label = this.label;
    a.root = this.root;
    a.gb = this.gb;
    return a
  };
  r.ic = function(a) {
    this.Ta = "actionRef";
    this.label = a;
    this.root = l;
    this.Ea = []
  };
  r.ic.prototype = new r.Fa;
  r.ic.prototype.clone = function() {
    var a = new r.Za;
    a.root = this.root;
    a.gb.push(this);
    return a
  };
  r.jc = function() {
    this.Ta = "fire";
    this.ea = this.speed = this.direction = this.root = this.label = l;
    this.Ma = new r.Qd
  };
  r.jc.prototype = new r.Fa;
  r.jc.prototype.cb = function(a) {
    this.root = a;
    this.ea && this.ea.cb(a)
  };
  r.Rd = function(a) {
    this.Ta = "fireRef";
    this.label = a;
    this.Ea = []
  };
  r.Rd.prototype = new r.Fa;
  r.bd = function() {
    this.Ta = "changeDirection";
    this.direction = new r.Ab;
    this.Oa = 0
  };
  r.bd.prototype = new r.Fa;
  r.cd = function() {
    this.Ta = "changeSpeed";
    this.speed = new r.Cb;
    this.Oa = 0
  };
  r.cd.prototype = new r.Fa;
  r.$c = function() {
    this.Ta = "accel";
    this.ub = new r.Td;
    this.zb = new r.Yd;
    this.Oa = 0
  };
  r.$c.prototype = new r.Fa;
  r.jd = function(a) {
    this.Ta = "wait";
    this.value = a || 0
  };
  r.jd.prototype = new r.Fa;
  r.Xd = function() {
    this.Ta = "vanish"
  };
  r.Xd.prototype = new r.Fa;
  r.gd = function() {
    this.Ta = "repeat";
    this.Nf = 0;
    this.action = l;
    this.Ea = []
  };
  r.gd.prototype = new r.Fa;
  r.gd.prototype.cb = function(a) {
    this.root = a;
    this.action && this.action.cb(a)
  };
  r.Pd = function(a, c) {
    this.Ta = "bind";
    this.Yh = a;
    this.dh = c
  };
  r.Pd.prototype = new r.Fa;
  r.Wd = function(a, c) {
    this.Ta = "notify";
    this.Zg = a;
    this.Ea = c || l
  };
  r.Wd.prototype = new r.Fa;
  r.$f = new r.Fa;
  r.Ab = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  r.Cb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  r.Td = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  r.Yd = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  r.Qd = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.Qa = k;
    a.Qa !== i && (this.Qa = !!a.Qa)
  };
  r.Re = function(a) {
    this.value = a || 0
  };
  r.Se = function(a) {
    this.value = a || 0
  };
  r.Le = function(a) {
    this.value = !!a
  }
})();
r.ka = function(a) {
  this.We = a;
  this.kd = [];
  this.Mb = -1;
  this.Ja = l;
  this.ja = {}
};
r.ka.prototype.next = function() {
  this.Mb += 1;
  if(this.Ja !== l) {
    var a = this.Ja.gb[this.Mb];
    if(a !== i) {
      if(a instanceof r.Za) {
        return this.Cc(), this.Ja = a, this.ja = this.Zd(), this.next()
      }
      if(a instanceof r.ic) {
        return this.Cc(), this.Ja = this.We.fh(a.label), this.ja = this.$d(a.Ea), this.next()
      }
      if(a instanceof r.gd) {
        return this.ja.sc = 0, this.ja.zf = this.Ka(a.Nf) | 0, this.Cc(), this.Ja = a.action.clone(), this.ja = this.Zd(), this.next()
      }
      if(a instanceof r.jc) {
        var b = new r.jc;
        b.ea = a.ea.clone(this);
        a.direction !== l && (b.direction = new r.Ab(this.Ka(a.direction.value)), b.direction.type = a.direction.type);
        a.speed !== l && (b.speed = new r.Cb(this.Ka(a.speed.value)), b.speed.type = a.speed.type);
        b.Ma = a.Ma;
        return b
      }
      return a instanceof r.Rd ? (this.Cc(), this.Ja = new r.Za, this.Ja.gb = [this.We.jh(a.label)], this.ja = this.$d(a.Ea), this.next()) : a instanceof r.bd ? (b = new r.bd, b.direction.type = a.direction.type, b.direction.value = this.Ka(a.direction.value), b.Oa = this.Ka(a.Oa), b) : a instanceof r.cd ? (b = new r.cd, b.speed.type = a.speed.type, b.speed.value = this.Ka(a.speed.value), b.Oa = this.Ka(a.Oa), b) : a instanceof r.$c ? (b = new r.$c, b.ub.type = a.ub.type, b.ub.value = this.Ka(a.ub.value), 
      b.zb.type = a.zb.type, b.zb.value = this.Ka(a.zb.value), b.Oa = this.Ka(a.Oa), b) : a instanceof r.jd ? new r.jd(this.Ka(a.value)) : a instanceof r.Xd ? a : a instanceof r.Pd ? (this.ja["$" + a.Yh] = this.Ka(a.dh), r.$f) : a instanceof r.Wd ? a : l
    }
    this.Ng();
    if(this.Ja === l) {
      return l
    }
    if((a = this.Ja.gb[this.Mb]) && "repeat" == a.Ta) {
      this.ja.sc++, this.ja.sc < this.ja.zf && (this.Cc(), this.Ja = a.action.clone(), this.ja = this.Zd())
    }
    return this.next()
  }
  return l
};
r.ka.prototype.Cc = function() {
  this.kd.push({action:this.Ja, cursor:this.Mb, scope:this.ja});
  this.Mb = -1
};
r.ka.prototype.Ng = function() {
  var a = this.kd.pop();
  a ? (this.Mb = a.cursor, this.Ja = a.action, this.ja = a.scope) : (this.Mb = -1, this.Ja = l, this.ja = {})
};
r.ka.prototype.Ka = function(a) {
  var b;
  if("number" === typeof a) {
    return a
  }
  if(isNaN(b = Number(a))) {
    if((b = this.ja[a]) || (b = r.ka.ya[a])) {
      return b
    }
    if("$rand" === a) {
      return Math.random()
    }
  }else {
    return b
  }
  b = {};
  for(var c in r.ka.ya) {
    r.ka.ya.hasOwnProperty(c) && (b[c] = r.ka.ya[c])
  }
  for(c in this.ja) {
    this.ja.hasOwnProperty(c) && (b[c] = this.ja[c])
  }
  b.$rand = Math.random();
  (c = this.kd[this.kd.length - 1]) && (b.$loop = {index:c.scope.sc, count:c.scope.sc + 1, first:0 === c.scope.sc, last:c.scope.sc + 1 >= c.scope.zf});
  return(new Function("return " + a.split("$").join("this.$"))).apply(b)
};
r.ka.prototype.$d = function(a) {
  var b = {};
  if(a) {
    for(var c = 0, f = a.length;c < f;c++) {
      b["$" + (c + 1)] = this.Ka(a[c])
    }
  }else {
    for(c in this.ja) {
      this.ja.hasOwnProperty(c) && (b[c] = this.ja[c])
    }
  }
  return b
};
r.ka.prototype.Zd = function() {
  var a = {}, b;
  for(b in this.ja) {
    this.ja.hasOwnProperty(b) && (a[b] = this.ja[b])
  }
  return a
};
r.ta.prototype.le = function(a) {
  var b = new r.ka(this);
  if(a = this.pf(a)) {
    b.Ja = a
  }
  return b
};
r.Kb.prototype.le = function() {
  var a = new r.ka(this.root), b = new r.Za;
  b.root = this.root;
  b.gb = this.Ga;
  a.Ja = b;
  a.ja = this.ja;
  return a
};
r.ka.ya = {};
r.oa = function(a) {
  a = a || "";
  for(var b in r.oa) {
    r.oa.hasOwnProperty(b) && (r.bg[a + b] = r.oa[b])
  }
};
r.oa.action = function(a) {
  if(0 < arguments.length) {
    for(var b = 0, c = arguments.length;b < c;b++) {
      arguments[b] instanceof Function && (arguments[b] = arguments[b]())
    }
  }
  if(a instanceof Array) {
    b = 0;
    for(c = a.length;b < c;b++) {
      a[b] instanceof Function && (a[b] = a[b]())
    }
  }
  var f = new r.Za;
  if(a instanceof Array) {
    a.some(function(a) {
      return!(a instanceof r.Fa)
    }) && h(Error("argument type error.")), f.gb = a
  }else {
    b = 0;
    for(c = arguments.length;b < c;b++) {
      arguments[b] instanceof r.Fa ? f.gb[b] = arguments[b] : h(Error("argument type error."))
    }
  }
  return f
};
r.oa.ci = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  f = new r.ic(a);
  if(b instanceof Array) {
    f.Ea = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ea.push(arguments[c])
    }
  }
  return f
};
r.oa.ea = function(a, b, c, f) {
  for(var g = 0, j = arguments.length;g < j;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  j = new r.Kb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof r.Ab ? j.direction = arguments[g] : arguments[g] instanceof r.Cb ? j.speed = arguments[g] : arguments[g] instanceof r.Za ? j.Ga.push(arguments[g]) : arguments[g] instanceof r.ic ? j.Ga.push(arguments[g]) : arguments[g] instanceof Array ? j.Ga.push(r.oa.action(arguments[g])) : arguments[g] instanceof Object ? j.Ma = arguments[g] : "string" === typeof arguments[g] && (j.label = arguments[g])
  }
  return j
};
r.oa.ei = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  f = new r.ad(a);
  if(b instanceof Array) {
    f.Ea = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ea.push(arguments[c])
    }
  }
  return f
};
r.oa.ia = function(a, b, c, f) {
  for(var g = 0, j = arguments.length;g < j;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  j = new r.jc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof r.Ab ? j.direction = arguments[g] : arguments[g] instanceof r.Cb ? j.speed = arguments[g] : arguments[g] instanceof r.Kb ? j.ea = arguments[g] : arguments[g] instanceof r.ad ? j.ea = arguments[g] : arguments[g] instanceof r.Qd ? j.Ma = arguments[g] : arguments[g] instanceof r.Re ? j.Ma.offsetX = arguments[g].value : arguments[g] instanceof r.Se ? j.Ma.offsetY = arguments[g].value : arguments[g] instanceof r.Le && (j.Ma.Qa = arguments[g].value)
  }
  j.ea === i && h(Error("bullet (or bulletRef) is required."));
  return j
};
r.oa.ji = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  f = new r.Rd(a);
  if(b instanceof Array) {
    f.Ea = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ea.push(arguments[c])
    }
  }
  return f
};
r.oa.fi = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("direction is required."));
  b === i && h(Error("term is required."));
  c = new r.bd;
  c.direction = a instanceof r.Ab ? a : new r.Ab(a);
  c.Oa = b;
  return c
};
r.oa.gi = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("speed is required."));
  b === i && h(Error("term is required."));
  c = new r.cd;
  c.speed = a instanceof r.Cb ? a : new r.Cb(a);
  c.Oa = b;
  return c
};
r.oa.bi = function(a, b, c) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new r.$c;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof r.Td ? g.ub = a : arguments[f] instanceof r.Yd ? g.zb = b : g.Oa = arguments[f]
  }
  g.ub === i && g.zb === i && h(Error("horizontal or vertical is required."));
  g.Oa === i && h(Error("term is required."));
  return g
};
r.oa.wait = function(a) {
  for(var b = 0, c = arguments.length;b < c;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && h(Error("value is required."));
  return new r.jd(a)
};
r.oa.si = function() {
  return new r.Xd
};
r.oa.repeat = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("times is required."));
  b === i && h(Error("action is required."));
  f = new r.gd;
  f.Nf = a;
  if(b instanceof r.Za || b instanceof r.ic) {
    f.action = b
  }else {
    if(b instanceof Array) {
      f.action = r.oa.action(b)
    }else {
      for(var g = [], c = 1;c < arguments.length;c++) {
        g.push(arguments[c])
      }
      f.action = r.oa.action(g)
    }
  }
  return f
};
r.oa.di = function(a, b) {
  return new r.Pd(a, b)
};
r.oa.pi = function(a, b) {
  return new r.Wd(a, b)
};
r.oa.direction = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new r.Ab(a);
  b !== i && (c.type = b);
  return c
};
r.oa.speed = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new r.Cb(a);
  b && (c.type = b);
  return c
};
r.oa.ub = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new r.Td(a);
  b && (c.type = b);
  return c
};
r.oa.zb = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new r.Yd(a);
  b && (c.type = b);
  return c
};
r.oa.ii = function(a) {
  return new r.Qd(a)
};
r.oa.offsetX = function(a) {
  return new r.Re(a)
};
r.oa.offsetY = function(a) {
  return new r.Se(a)
};
r.oa.Qa = function(a) {
  return new r.Le(a)
};
tm.Sa = tm.Sa || {};
(function() {
  function a(a) {
    for(;a <= -Math.PI;) {
      a += 2 * Math.PI
    }
    for(;Math.PI < a;) {
      a -= 2 * Math.PI
    }
    return a
  }
  function b(a, c) {
    return Math.atan2(c.y - a.y, c.x - a.x)
  }
  tm.Sa.Vb = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.Te = a
  }, rd:function(a, c) {
    var b = this.Te.oh();
    if(c === i && 0 < b.length) {
      for(var f = [], t = 0, q = b.length;t < q;t++) {
        f[f.length] = this.Ue(a, b[t])
      }
      for(var d = function() {
        for(var a = f.length;a--;) {
          f[a].call(this)
        }
        d.ie == f.length && (d.Gc = k, this.dispatchEvent(tm.event.Event("completeattack")))
      }, t = f.length;t--;) {
        f[t].Hd = d
      }
      d.ie = 0;
      d.ef = function() {
        this.ie++
      };
      d.ie = 0;
      d.Gc = n;
      d.Dd = k;
      return d
    }
    return this.Ue(a, c)
  }, Ue:function(a, c) {
    function b() {
      b.ha += 1;
      this.ha = b.ha;
      var a = b.qd, c = b.Mg;
      if(c) {
        if(b.ha < b.fe ? b.direction += b.nc : b.ha === b.fe && (b.direction = b.Qb), b.ha < b.ge ? b.speed += b.Yc : b.ha === b.ge && (b.speed = b.xc), b.ha < b.ae ? (b.cc += b.nd, b.ec += b.od) : b.ha === b.ae && (b.cc = b.ld, b.ec = b.md), this.x += Math.cos(b.direction) * b.speed * a.dc, this.y += Math.sin(b.direction) * b.speed * a.dc, this.x += b.cc * a.dc, this.y += b.ec * a.dc, a.oe(this)) {
          if(a.Tb || this.Tb) {
            this.rotation = (b.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = b.speed
          }
          if(!(b.ha < b.Of || b.Gc)) {
            for(var f;f = b.Pf.next();) {
              switch(f.Ta) {
                case "fire":
                  c.Jg.call(this, f, a, b, c);
                  break;
                case "wait":
                  a = 0;
                  b.Of = "number" === typeof f.value ? b.ha + f.value : 0 !== (a = ~~f.value) ? b.ha + a : b.ha + eval(f.value);
                  return;
                case "changeDirection":
                  c.Eg.call(this, f, a, b);
                  break;
                case "changeSpeed":
                  c.Fg.call(this, f, b);
                  break;
                case "accel":
                  c.Cg.call(this, f, b);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  c.Kg.call(this, f)
              }
            }
            b.Gc = k;
            b.Hd ? b.Hd.ef() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), b.Gc = k, b.Hd ? b.Hd.ef() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    a = function(a) {
      var c = {}, b = tm.Sa.Vb.Hc, f;
      for(f in b) {
        b.hasOwnProperty(f) && (c[f] = b[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (c[f] = a[f])
      }
      return c
    }(a);
    a.target || h(Error("target is undefined in config."));
    c = c || "top";
    "string" === typeof c ? b.Pf = this.Te.le(c) : c instanceof r.Kb ? b.Pf = c.le() : (window.console.error(a, c), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    b.Mg = this;
    b.qd = a;
    b.Of = -1;
    b.Gc = n;
    b.direction = 0;
    b.wf = 0;
    b.speed = 0;
    b.yf = 0;
    b.cc = 0;
    b.ec = 0;
    b.nc = 0;
    b.Qb = 0;
    b.fe = -1;
    b.Yc = 0;
    b.xc = 0;
    b.ge = -1;
    b.nd = 0;
    b.ld = 0;
    b.od = 0;
    b.md = 0;
    b.ae = -1;
    b.ha = -1;
    b.Dd = k;
    return b
  }, Ig:function(a) {
    function c() {
      this.x += c.hf;
      this.y += c.jf;
      c.qd.oe(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    }
    a = function(a) {
      var c = {}, b = tm.Sa.Vb.Hc, f;
      for(f in b) {
        b.hasOwnProperty(f) && (c[f] = b[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (c[f] = a[f])
      }
      return c
    }(a);
    a.target || h(Error("target is undefined in config."));
    c.qd = a;
    c.direction = 0;
    c.speed = 0;
    c.hf = 0;
    c.jf = 0;
    c.Dd = k;
    return c
  }, Jg:function(a, c, f, u) {
    if(this.Ih === i || this.$b) {
      var t = {label:a.ea.label}, q;
      for(q in a.ea.Ma) {
        t[q] = a.ea.Ma[q]
      }
      if(t = c.df(t)) {
        var d = (q = !!a.ea.Ga.length) ? u.Ig(c) : u.rd(c, a.ea), V = this, N = {x:this.x + a.Ma.offsetX, y:this.y + a.Ma.offsetY};
        f.wf = d.direction = function(d) {
          var q = eval(d.value) * Math.DEG_TO_RAD;
          switch(d.type) {
            case "aim":
              return c.target ? a.Ma.Qa ? b(N, c.target) + q : b(V, c.target) + q : q - Math.PI / 2;
            case "absolute":
              return q - Math.PI / 2;
            case "relative":
              return f.direction + q;
            default:
              return f.wf + q
          }
        }(a.direction || a.ea.direction);
        f.yf = d.speed = function(a) {
          var c = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + c;
            case "sequence":
              return f.yf + c;
            default:
              return c
          }
        }(a.speed || a.ea.speed);
        t.x = N.x;
        t.y = N.y;
        q && (d.hf = Math.cos(d.direction) * d.speed * c.dc, d.jf = Math.sin(d.direction) * d.speed * c.dc);
        t.Tb = !!t.Tb;
        if(c.Tb || t.Tb) {
          t.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, t.speed = d.speed
        }
        t.addEventListener("enterframe", d);
        t.addEventListener("removed", function() {
          this.removeEventListener("enterframe", d);
          this.removeEventListener("removed", arguments.callee)
        });
        c.$e ? c.$e.addChild(t) : this.parent && this.parent.addChild(t)
      }
    }
  }, Eg:function(c, f, m) {
    var u = eval(c.direction.value) * Math.DEG_TO_RAD, t = eval(c.Oa);
    switch(c.direction.type) {
      case "aim":
        c = f.target;
        if(!c) {
          return
        }
        m.Qb = b(this, c) + u;
        m.nc = a(m.Qb - m.direction) / t;
        break;
      case "absolute":
        m.Qb = u - Math.PI / 2;
        m.nc = a(m.Qb - m.direction) / t;
        break;
      case "relative":
        m.Qb = m.direction + u;
        m.nc = a(m.Qb - m.direction) / t;
        break;
      case "sequence":
        m.nc = u, m.Qb = m.direction + m.nc * (t - 1)
    }
    m.fe = m.ha + t
  }, Fg:function(a, c) {
    var b = eval(a.speed.value), f = eval(a.Oa);
    switch(a.speed.type) {
      case "absolute":
        c.xc = b;
        c.Yc = (c.xc - c.speed) / f;
        break;
      case "relative":
        c.xc = b + c.speed;
        c.Yc = (c.xc - c.speed) / f;
        break;
      case "sequence":
        c.Yc = b, c.xc = c.speed + c.Yc * f
    }
    c.ge = c.ha + f
  }, Cg:function(a, c) {
    var b = eval(a.Oa);
    c.ae = c.ha + b;
    if(a.ub) {
      var f = eval(a.ub.value);
      switch(a.ub.type) {
        case "absolute":
        ;
        case "sequence":
          c.nd = (f - c.cc) / b;
          c.ld = f;
          break;
        case "relative":
          c.nd = f, c.ld = (f - c.cc) * b
      }
    }else {
      c.nd = 0, c.ld = c.cc
    }
    if(a.zb) {
      switch(f = eval(a.zb.value), a.zb.type) {
        case "absolute":
        ;
        case "sequence":
          c.od = (f - c.ec) / b;
          c.md = f;
          break;
        case "relative":
          c.od = f, c.md = (f - c.ec) * b
      }
    }else {
      c.od = 0, c.md = c.ec
    }
  }, Kg:function(a) {
    var c = tm.event.Event(a.Zg);
    if(a.Ea) {
      for(var b in a.Ea) {
        c[b] = a.Ea[b]
      }
    }
    this.dispatchEvent(c)
  }});
  var c = function() {
    var a = tm.graphics.Canvas();
    a.resize(8, 8);
    a.setTransformCenter();
    a.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    a.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return tm.asset.Texture(a.canvas.toDataURL())
  }();
  tm.Sa.Wg = function(a) {
    var b = tm.app.Sprite(c, 8, 8);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.Sa.gf = function(a) {
    if(f === l) {
      if(!a.getRoot().app) {
        return k
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.Sa.hi = function() {
    return k
  };
  tm.Sa.Vb.Hc = {df:tm.Sa.Wg, oe:tm.Sa.gf, qi:0, Tb:n, dc:2, target:l};
  r.ta.prototype.rd = function(a) {
    return tm.Sa.Vb(this).rd(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(p());
tm.main(function() {
  aa("#canvas2d").run()
});
var s = l, v, w, z, A, B, C, ba, ca, da, ea, fa, ga, ha, D, E, ia, F, ja, ka, G, la, ma, na, H, oa, pa, qa, ra, I, sa, ta, ua, J, va, K, L, aa = tm.createClass({superClass:tm.app.CanvasApp, zd:0, ni:0, Dc:3, bc:3, kf:1, nf:[1E9, 1E10], $:l, init:function(a) {
  s !== l && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bgm1:"assets2/nc54073.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", 
  "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.Lg();
    return v()
  }.bind(this)}))
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Lg:function() {
  w.ra(12345);
  z.ra();
  A.ra();
  this.$ = B()
}, ah:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.zd, "")
}}), M = l;
function wa(a, b) {
  b || O();
  var c = tm.asset.AssetManager.get(a);
  c && (M = c.clone(), M.volume = 0.1 * s.Dc, M.loop = k, M.play())
}
function O() {
  M !== l && M.stop()
}
function xa() {
  if(M !== l) {
    var a = M;
    a.loop = n;
    B.hd.addEventListener("enterframe", function() {
      a.volume -= 0.002;
      0 >= a.volume && (a.stop(), this.removeEventListener("enterframe", arguments.callee))
    })
  }
}
function P(a) {
  if(0 !== s.bc && ya[a] !== s.frame) {
    var b = tm.asset.AssetManager.get("sound/" + a);
    b && (b = b.clone().play(), "vo" === a.substring(0, 2) ? (b.volume = 0.5 * s.bc, za !== l && za.stop(), za = b) : b.volume = 0.1 * s.bc);
    ya[a] = s.frame
  }
}
var ya = {}, za = l;
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Q(a, b) {
  return(a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
;C = {Ne:3, Me:3, wg:1, tg:1, Oe:1, ug:0.1, Zh:1, $h:2, Rf:8, mg:0.005, ig:0.01, jg:0.001, eg:0.015, fg:0.002, og:0.001, qg:0.01, ng:0, lg:0, kg:0, hg:0.03, gg:0.004, pg:0, rg:0, sg:0.75, Sd:10, dd:800, dg:0.25, cg:0.1, Yf:5, Wf:0.03, Xf:0.5, Vf:0.01, Uf:200, Tf:10, Bg:500, Ag:250, zg:100, yg:50, ag:0.5, Zf:1E4, Sf:50, xg:10, Qf:n};
(function() {
  var a = l, b = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  ba = tm.createClass({superClass:tm.app.Sprite, type:0, style:0, Xa:0, Fb:k, tc:n, $:l, speed:0, mb:l, mc:l, Bf:l, Bd:l, yb:l, Ad:l, Eb:l, me:l, ne:l, init:function(c, b, g) {
    this.superInit("fighter", 64, 64);
    this.$ = c;
    this.type = b;
    this.style = g;
    tm.Sa.Vb.Hc.target = this;
    this.speed = [6, 5, 4.5][b];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.mc = this.Bf = ca(b, 100);
    this.Bd = ca(3, 100);
    this.yb = da(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.yb.visible = n;
    this.Hg();
    this.mb = this.Gg();
    1 === this.style && (this.mb = [this.mb[1], this.mb[2]]);
    this.Eb = tm.app.CanvasElement().addChildTo(this);
    b = 0;
    for(g = this.mb.length;b < g;b++) {
      var j = this.mb[b];
      ea(this, j).setPosition(j.x, j.y).addChildTo(this.Eb)
    }
    this.yh = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.yh.blendMode = "lighter";
    this.me = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.me.blendMode = "lighter";
    this.me.update = function() {
      this.rotation += 2;
      this.visible = 0 < c.va && !c.na
    };
    this.ne = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.ne.blendMode = "lighter";
    this.ne.update = function() {
      this.rotation -= 2;
      this.visible = 0 < c.va && !c.na
    };
    this.Nc = tm.app.CanvasElement(80, 80).addChildTo(this);
    this.Nc.blendMode = "lighter";
    this.Nc.rotation = -90;
    this.Nc.strokeStyle = "rgba(180,180,255,0.4)";
    this.Nc.update = function() {
      this.visible = c.na
    };
    this.Nc.draw = function(a) {
      a.lineCap = "round";
      var b = c.qc / C.dd;
      a.strokeStyle = "rgba(50,50,255,0.4)";
      a.lineWidth = "12";
      a.strokeArc(0, 0, 40, 0, 2 * b * Math.PI, n);
      a.strokeStyle = "rgba(100,100,255,0.4)";
      a.lineWidth = "8";
      a.strokeArc(0, 0, 40, 0, 2 * b * Math.PI, n);
      a.strokeStyle = "rgba(180,180,255,0.4)";
      a.lineWidth = "4";
      a.strokeArc(0, 0, 40, 0, 2 * b * Math.PI, n)
    };
    this.qh = tm.app.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.qh.update = function() {
      this.visible = c.na
    };
    a === l && (a = fa(this.$.xa))
  }, Gg:function() {
    if(0 === this.type) {
      return[{x:-50, y:20, d:0, eb:n, ab:-0.7, v:k}, {x:-20, y:40, d:0, eb:n, ab:-0.5, v:k}, {x:20, y:40, d:0, eb:k, ab:0.5, v:k}, {x:50, y:20, d:0, eb:k, ab:0.7, v:k}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, eb:n, ab:-0.7, v:k}, {x:-40, y:40, d:0.1, eb:n, ab:-0.5, v:k}, {x:40, y:40, d:0.1, eb:k, ab:0.5, v:k}, {x:70, y:20, d:0.1, eb:k, ab:0.7, v:k}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, eb:n, ab:-0.7, v:k}, {x:-30, y:20, d:0.3, eb:n, ab:-0.5, v:k}, {x:30, y:20, d:0.3, eb:k, ab:0.5, v:k}, {x:60, y:40, d:0.6, eb:k, ab:0.7, v:k}]
    }
  }, Hg:function() {
    this.Ad = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.Ad.setFrameIndex(5);
    this.Ad.blendMode = "lighter";
    this.Ad.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Sb:-1, Kc:n, pb:n, update:function(c) {
    this.visible = this.tc ? 0 === c.frame / 2 % 2 : k;
    var f = c.keyboard;
    if(this.Fb) {
      var g = f.getKeyAngle();
      g !== l && (g = b[g], this.x += g.x * this.speed * (this.pb ? 0.75 : 1), this.y += g.y * this.speed * (this.pb ? 0.75 : 1));
      this.x = R(this.x, 15, 465);
      this.y = R(this.y, 15, 625);
      var j = f.getKey("c"), g = f.getKey("z");
      this.Sb = j ? this.Sb + 1 : this.Sb - 1;
      this.Sb = R(this.Sb, -1, 10);
      this.pb = g && j || 10 === this.Sb;
      j = this.$.na ? 3 : 5;
      this.Kc = !this.pb && (0 <= this.Sb || g) && 0 === c.frame % j;
      g && (this.Sb = 0);
      this.yb.x = this.x;
      this.yb.y = this.y - 40;
      if(this.pb) {
        g = 0;
        for(j = this.mb.length;g < j;g++) {
          this.mb[g].v = n
        }
        this.Eb.rotation = 0
      }else {
        this.yb.visible = n;
        g = 0;
        for(j = this.mb.length;g < j;g++) {
          this.mb[g].v = k
        }
      }
      this.Kc && (g = Math.sin(0.2 * c.frame), j = this.mc.ia(this.x - 7 - 6 * g, this.y - 5, -90), j !== l && j.addChildTo(this.$), j = this.mc.ia(this.x + 7 + 6 * g, this.y - 5, -90), j !== l && j.addChildTo(this.$));
      f.getKeyDown("x") && (0 < this.$.va && !this.$.na ? (this.$.Uh(), ga(this).addChildTo(this.$)) : !this.$.rc && 0 < this.$.nb && (this.Ua = R(this.Ua - 2, 0, 1), r.ka.ya.$rank = R(r.ka.ya.$rank - 0.02, 0, 1), ha(this, this.$).setPosition(R(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.$)))
    }
    this.Vg(f);
    this.Dg(f, c.frame);
    0 === c.frame % 2 && (a.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.$), a.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.$))
  }, Gb:function() {
    this.pb = this.Kc = n;
    this.$.sd();
    this.$.Ha = 0;
    this.$.Da = 0;
    this.$.za = 0
  }, Vg:function(a) {
    if(1 === this.type) {
      var b = this.Eb;
      b.rotation = this.Fb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Fb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0
    }
  }, Dg:function(a, b) {
    this.Fb && a.getKey("left") ? this.Xa = R(this.Xa - 0.2, -3, 3) : this.Fb && a.getKey("right") ? this.Xa = R(this.Xa + 0.2, -3, 3) : 0 > this.Xa ? this.Xa = R(this.Xa + 0.2, -3, 3) : 0 < this.Xa && (this.Xa = R(this.Xa - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Xa) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Xa) : 2 === this.type && this.setFrameIndex(31 + ~~this.Xa);
    return b
  }});
  ea = tm.createClass({superClass:tm.app.AnimationSprite, Zb:l, ca:l, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Zb = b;
    this.ca = a;
    this.altitude = 10;
    this.gotoAndPlay(b.eb ? "anim0" : "anim1")
  }, update:function(c) {
    if(this.Zb.v) {
      this.x = this.Zb.x * (this.ca.$.na ? 1.5 : 1);
      this.y = this.Zb.y * (this.ca.$.na ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Zb.d * this.Zb.ab);
      var b = this.parent.localToGlobal(this);
      this.Zb.v && 0 === c.frame % 2 && a.clone(40).setPosition(b.x, b.y).addChildTo(c.$);
      this.ca.Kc && (b = this.ca.mc.ia(b.x, b.y, this.parent.rotation + this.rotation - 90), b !== l && b.addChildTo(c.$))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = l;
  D = tm.createClass({superClass:tm.app.Sprite, speed:0, Wa:k, init:function(c) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    a === l && (a = E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    c !== i && this.vc(c)
  }, update:function() {
    this.x += this.Ke;
    this.y += this.Zc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, vc:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, xd:function(c) {
    for(var b = 0;b < c;b++) {
      var g = a.clone().setPosition(this.x, this.y).addChildTo(this.parent), j = S(2, 8), m = 2 * Math.random() * Math.PI;
      g.la = Math.cos(m) * j;
      g.ma = Math.sin(m) * j;
      g.scaleX = g.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.la;
        this.y += this.ma;
        this.la *= 0.9;
        this.ma *= 0.9
      })
    }
  }});
  D.Fc = function() {
    for(var a = [].concat(b), f = 0, g = a.length;f < g;f++) {
      a[f].remove()
    }
  };
  var b = D.La = [];
  ca = tm.createClass({Id:l, tf:n, init:function(a, f) {
    this.tf = 3 === a;
    this.Id = [];
    for(var g = 0;g < f;g++) {
      var j = D(a), m = this;
      j.addEventListener("added", function() {
        this.sa = C.xg;
        b.push(this)
      });
      j.addEventListener("removed", function() {
        var a = b.indexOf(this);
        -1 !== a && b.splice(a, 1);
        m.Id.push(this)
      });
      this.tf && j.addEventListener("enterframe", function(a) {
        this.setScale(0 === a.app.frame % 2 ? 2 : 1)
      });
      this.Id.push(j)
    }
  }, ia:function(a, b, g) {
    var j = this.Id.pop();
    if(j === i) {
      return l
    }
    var m = Aa(g);
    j.Ke = Math.cos(m) * j.speed;
    j.Zc = Math.sin(m) * j.speed;
    j.setPosition(a, b);
    j.rotation = g + 90;
    return j
  }, wc:p()})
})();
da = tm.createClass({superClass:tm.app.Sprite, ca:l, $:l, lb:0, frame:0, Mf:l, color:l, cf:0, de:0, Qg:n, head:l, qf:l, bf:l, Wa:k, ce:C.Oe, uc:l, init:function(a, b) {
  this.ca = a;
  this.$ = a.$;
  this.cf = 0 === this.ca.style ? 1 : 1.5;
  this.de = 0 === this.ca.style ? 50 : 75;
  var c = this;
  this.Mf = b;
  this.superInit(b.redBody, this.de, 100);
  this.boundingHeightBottom = 1;
  this.ri = 0;
  this.origin.y = 1;
  var f = this.bf = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.qf = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = c.lb - c.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < c.lb
  };
  this.vc(["red", "green", "blue"][this.ca.type]);
  this.wc(0)
}, vc:function(a) {
  this.color = a;
  this.image = tm.asset.AssetManager.get(this.Mf[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.bf.gotoAndPlay(this.color);
  this.qf.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.uc = l;
  return this
}, wc:function(a) {
  this.boundingWidth = this.width = this.de + 30 * a / C.Sd;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.ce = this.cf * C.Oe + C.ug * a;
  0 === a ? this.vc(["red", "green", "blue"][this.ca.type]) : this.vc("hyper")
}, xd:function(a, b) {
  this.uc === l && this.ff();
  b = b || this.lb;
  for(var c = 0;c < a;c++) {
    var f = this.uc.clone().setPosition(this.x, b).addChildTo(this.$), g = S(8, 14), j = S(0, Math.PI);
    f.la = Math.cos(j) * g;
    f.ma = Math.sin(j) * g;
    f.scaleX = f.scaleY = (S(0.5, 1.5) + S(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.la;
      this.y += this.ma;
      this.la *= 0.95;
      this.ma *= 0.95
    })
  }
}, mh:function(a, b, c) {
  this.uc === l && this.ff();
  for(var f = 0;f < a;f++) {
    var g = this.uc.clone().setPosition(b, c).addChildTo(this.$), j = S(12, 20), m = S(0, Math.PI);
    g.la = Math.cos(m) * j;
    g.ma = Math.sin(m) * j;
    g.scaleX = g.scaleY = (S(1, 3) + S(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.la;
      this.y += this.ma;
      this.la *= 0.95;
      this.ma *= 0.95
    })
  }
}, ff:function() {
  this.uc = "hyper" === this.color ? E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.ca.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(a) {
  (this.visible = this.ca.pb) ? (this.lb = Math.max(0, this.lb - 40), this.height = this.y - this.lb, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.lb = this.y - 40;
  this.Qg = this.visible
}, draw:function(a) {
  var b = this.srcRect, c = this._image.element;
  b.x = b.width * this.frame;
  a.context.drawImage(c, b.x, b.height - this.height, b.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, mi:function() {
  return this.lb
}, Ph:function(a) {
  this.lb = a;
  this.head.update()
}});
da.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.lb
});
(function() {
  ha = tm.createClass({superClass:tm.app.Object2D, Wa:k, $:l, init:function(b, c) {
    this.superInit();
    this.ca = b;
    this.$ = c;
    this.Hf = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Hf.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Hf));
    this.Xe();
    a === l && (a = E(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ha = 0;
    this.Vc = 1;
    this.addEventListener("added", function() {
      this.$.rc = k;
      this.ca.tc = k;
      this.$.nb -= 1;
      this.$.sd();
      this.$.Na("drop BOMBER!!", k);
      P("bomb");
      P("voBomb")
    });
    this.addEventListener("removed", function() {
      this.$.rc = n;
      this.ca.tc = n
    })
  }, Xe:function() {
    this.hb = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.hb.gotoAndPlay("animation");
    this.hb.blendMode = "lighter";
    this.hb.setScale(0.1, 0.1);
    this.hb.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.9, 1.1)
      }
    }.bind(this.hb))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.Vc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.ha;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.ha += 3.6, this.Vc = -1) : (this.b = 8, this.ha += 1.8, this.Vc = 1)
  }});
  ia = tm.createClass({superClass:ha, init:function(a, c) {
    this.superInit(a, c);
    C.Qf && this.addEventListener("added", function() {
      this.$.nb = 0
    })
  }, Xe:function() {
    this.hb = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.hb.gotoAndPlay("animation");
    this.hb.blendMode = "lighter";
    this.hb.setScale(0.1, 0.1);
    this.hb.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.4, 0.6)
      }
    }.bind(this.hb))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.Vc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.04 * this.ha;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.ha += 1.8, this.Vc = 1)
  }});
  var a = l
})();
F = tm.createClass({ca:l, $:l, da:l, frame:0, init:function(a) {
  this.$ = a;
  this.ca = a.ca;
  this.Gf();
  this.da = ja();
  this.frame = 0
}, Gf:p(), update:function() {
  this.$g(this.frame);
  this.frame += 1
}, $g:function(a) {
  a = this.da.get(a);
  if(a !== l) {
    if("function" === typeof a.value) {
      a.value.call(this)
    }else {
      if(ka[a.value] !== i) {
        var b = ka[a.value];
        if(b !== l) {
          if(b[0].Ob === k) {
            this.wh(b[0])
          }else {
            for(var c = 0;c < b.length;c++) {
              var f = this.xh(b[c]);
              a.stop && f.addEventListener("enemyconsumed", function() {
                this.da.Je = n
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, xh:function(a) {
  this.$.oc += 1;
  return G(this.$, a.aa, a.ba).setPosition(a.x, a.y).addChildTo(this.$).Jb()
}, wh:function(a) {
  this.$.oc += 1;
  return la(this.$, a.aa, a.ba).setPosition(a.x, a.y).addChildTo(this.$).Jb()
}, Pg:function(a) {
  xa();
  this.$.Ic = k;
  for(var b = tm.app.Object2D().setPosition(240, 320), c = -4;4 >= c;c++) {
    for(var f = -4;4 >= f;f++) {
      var g = tm.app.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(c, f);
      g.ha = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.ha) + 0.5;
        this.ha += 1
      };
      g.addChildTo(b)
    }
  }
  b.tweener.wait(3E3).call(a).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = p();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(b)).wait(1E3).call(function() {
    this.remove()
  }.bind(b));
  b.addChildTo(this.$.ke);
  P("warning");
  P("voWarning")
}});
F.create = function(a, b) {
  switch(b) {
    case 0:
      return ma(a);
    default:
      return ma(a)
  }
};
ja = tm.createClass({index:0, data:l, Je:n, init:function() {
  this.data = {}
}, add:function(a, b, c) {
  this.index += a;
  this.data[this.index] = {stop:c, value:b}
}, get:function(a) {
  a = this.data[a];
  return a === i ? l : a.stop === k ? (this.Je = k, a) : this.Je ? l : a
}});
ma = tm.createClass({superClass:F, init:function(a) {
  this.superInit(a);
  this.da.add(0, function() {
    wa("bgm1", k);
    this.$.xa.direction = 0.5 * Math.PI;
    this.$.xa.speed = 8;
    this.$.xa.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.da.add(200, "tankRD-center");
  this.da.add(200, "tankRD-left");
  this.da.add(20, "heri1-right");
  this.da.add(60, "heri1-center");
  this.da.add(10, "cannon-0");
  this.da.add(60, "heri1-left");
  this.da.add(10, "cannon-1");
  this.da.add(60, "tankL-top");
  this.da.add(50, "heri1-right");
  this.da.add(20, "tankRD-center");
  this.da.add(80, "heri1-center");
  this.da.add(150, "komachi-1");
  this.da.add(500, "heri1-right");
  this.da.add(20, "heri1-center");
  this.da.add(20, "heri1-left");
  this.da.add(20, "tankL-top");
  this.da.add(20, "tankRD-left");
  this.da.add(50, "heri1-right");
  this.da.add(50, "heri1-center");
  this.da.add(50, "heri1-center");
  this.da.add(20, "tankRD-center");
  this.da.add(20, "tankRD-left");
  this.da.add(50, "heri1-right");
  this.da.add(10, "cannon-7");
  this.da.add(50, "heri1-center");
  this.da.add(50, "heri1-left");
  this.da.add(20, "tankL-top");
  this.da.add(50, "heri1-right");
  this.da.add(50, "fighter-m-1");
  this.da.add(50, "fighter-m-5");
  this.da.add(1, function() {
    this.$.xa.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.da.add(150, "yukishiro", k);
  this.da.add(25, "heri2-left");
  this.da.add(25, "heri2-center");
  this.da.add(25, "heri2-right");
  this.da.add(25, "heri2-right");
  this.da.add(25, "heri2-left");
  this.da.add(25, "heri2-center");
  this.da.add(25, "heri2-right");
  this.da.add(25, "heri2-left");
  this.da.add(25, "heri2-center");
  this.da.add(25, "heri2-right");
  this.da.add(25, "heri2-right");
  this.da.add(25, "heri2-left");
  this.da.add(25, "heri2-center");
  this.da.add(25, "heri2-right");
  this.da.add(50, "fighter-m-0");
  this.da.add(50, "fighter-m-2");
  this.da.add(50, "fighter-m-4");
  this.da.add(50, "heri1-center");
  this.da.add(50, "heri1-right");
  this.da.add(50, "heri1-left");
  this.da.add(10, "cannon-6");
  this.da.add(60, "heri1-left");
  this.da.add(50, "heri1-right");
  this.da.add(50, "heri1-center");
  this.da.add(50, "fighter-m-6");
  this.da.add(50, "fighter-m-4");
  this.da.add(50, "fighter-m-2");
  this.da.add(50, "heri1-center");
  this.da.add(50, "heri1-right2");
  this.da.add(50, "heri1-left2");
  this.da.add(60, "heri1-center2");
  this.da.add(50, "heri1-center");
  this.da.add(50, "heri1-right");
  this.da.add(50, "fighter-m-0");
  this.da.add(50, "fighter-m-1");
  this.da.add(50, "fighter-m-2");
  this.da.add(50, "heri2-center");
  this.da.add(50, "heri2-right");
  this.da.add(50, "heri2-left");
  this.da.add(10, "cannon-1");
  this.da.add(60, "heri1-center");
  this.da.add(50, "heri1-left");
  this.da.add(50, "heri1-right");
  this.da.add(50, "fighter-m-6");
  this.da.add(50, "fighter-m-5");
  this.da.add(50, "fighter-m-4");
  this.da.add(50, "heri1-center");
  this.da.add(50, "heri1-right");
  this.da.add(50, "heri1-left2");
  this.da.add(60, "heri1-center2");
  this.da.add(50, "heri1-center");
  this.da.add(50, "heri1-right2");
  this.da.add(60, "heri1-center");
  this.da.add(1, function() {
    this.$.xa.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.da.add(100, "komachi-0");
  this.da.add(160, "komachi-1");
  this.da.add(600, function() {
    this.Pg(function() {
      wa("bgmBoss", k)
    })
  });
  this.da.add(600, "misumi")
}, Gf:function() {
  this.$.xa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,30%)"}, {offset:1, color:"hsl(230,50%,15%)"}]).toStyle()
}});
A = {ra:function() {
  Ba(256);
  na = {};
  A.explosion = Array.range(0, 2).map(function(a) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + a, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  na.explodeL = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  A.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  A.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  A.particle16 = E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, xd:function(a, b, c) {
  a = A.particle16.clone().setPosition(a, b).addChildTo(c);
  b = S(5, 20);
  c = S(Math.PI, 2 * Math.PI);
  a.la = Math.cos(c) * b;
  a.ma = Math.sin(c) * b;
  a.scaleX = a.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
  a.addEventListener("enterframe", function() {
    this.x += this.la;
    this.y += this.ma;
    this.la *= 0.9;
    this.ma *= 0.9
  })
}, li:function(a, b, c) {
  var f = tm.app.Sprite().setPosition(a, b).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  f.image = A.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, nh:function(a, b, c) {
  a = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(a, b).setScale(0.1, 0.1);
  a.Wa = k;
  a.addChildTo(c);
  a.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(a))
}, ud:function(a, b, c, f) {
  P("explode");
  a = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  a.Wa = k;
  if(f !== i) {
    var g = f.x, j = f.y;
    a.addEventListener("enterframe", function() {
      this.x += g;
      this.y += j;
      g *= 0.99;
      j *= 0.99
    })
  }
  a.addChildTo(c)
}, bh:function(a, b, c) {
  P("explode");
  var f = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  f.Wa = k;
  f.addChildTo(c);
  f = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a + 12, b).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.Wa = k;
  f.addChildTo(c);
  f = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a - 12, b).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.Wa = k;
  f.addChildTo(c)
}, td:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), g = 0;20 > g;g++) {
    var j = A.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === g % 2 ? "lighter" : "source-over").setPosition(a, b).gotoAndPlay();
    j.a = 2 * Math.PI * Math.random();
    j.v = 10 * Math.pow(T.at(~~(T.length * g / 20) + f), 2);
    j.Wa = k;
    j.addChildTo(c)
  }
}, mf:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), g = 0;20 > g;g++) {
    for(var j = 2 * Math.PI * g / 20, m = Math.pow(T.at(~~(T.length * g / 20) + f), 2), u = 0;3 > u;u++) {
      var t = 4 * m * (u + 1), q = na.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ha && (this.blendMode = "source-over");
        this.ha += 1
      }).setScale(0.3 * (3 - u)).setBlendMode("lighter").setPosition(a, b).gotoAndPlay();
      q.rotation = 2 * Math.random() * Math.PI;
      q.Wa = k;
      q.alpha = 0.2;
      q.ha = 0;
      q.a = j;
      q.v = t;
      q.addChildTo(c)
    }
  }
}};
H = tm.createClass({superClass:tm.app.Object2D, target:l, ac:0, angle:0, alpha:1, Wa:k, reverse:n, init:function(a, b) {
  this.superInit();
  this.target = a;
  this.reverse = b;
  this.angle = 0;
  this.ac = b ? 0 : 200;
  this.alpha = b ? 1 : 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;9 > a;a++) {
      var b = this.angle + 2 * a / 9 * Math.PI;
      E(80, this.alpha, 0.9).setPosition(Math.cos(b) * this.ac + this.target.x, Math.sin(b) * this.ac + this.target.y).addChildTo(this.target.parent)
    }
    this.angle += 0.05;
    this.ac += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.ac || 200 < this.ac) && this.remove()
  }
}});
ga = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, Wa:k, init:function(a) {
  this.superInit();
  this.target = a;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;5 > a;a++) {
      E(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + U(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + U(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
oa = tm.createClass({superClass:tm.graphics.Canvas, $:l, lc:l, Va:l, init:function(a) {
  this.superInit("#scoreLabel");
  this.$ = a;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.lc = Ca(200);
  this.Va = pa(this)
}, update:function() {
  this.clear();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.$.Ob !== l && (this.fillRect(5, this.Va.Ib - 20, 470 * this.$.Ob.sa / this.$.Ob.pc, 10), this.clear(287, this.Va.Ib - 20, 2, 10), this.clear(99, this.Va.Ib - 20, 2, 10));
  var a;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.$.score)).padding(16, " ");
  a = "";
  for(var b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, this.Va.Ib + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.$.Ha)).padding(8, " ");
  a = "";
  for(b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, this.Va.Lc + 192, 22);
  a = [0, 1, 4][this.$.ca.type];
  for(b = 0;b < this.$.Ub - 1;b++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * a, 64, 64, 5 + 32 * b, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * r.ka.ya.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.$.Rc + " hit", this.Va.Lc + 10, 95);
  0 < ~~this.$.za && (this.setText("bold 40px Orbitron", "left", "top"), this.strokeText(~~this.$.za + " HIT!!", 10, -this.Va.Ib + 115));
  for(b = 0;b < this.$.nb;b++) {
    this.fillRect(480 - 25 * (b + 1) - 20, 615, 20, 20)
  }
  this.lc.update();
  this.lc.Ee = this.Va.Ib + 5;
  this.lc.draw(this)
}});
pa = tm.createClass({superClass:tm.app.Object2D, Ya:l, Lc:0, Ib:0, init:function(a) {
  this.superInit();
  this.Ya = a
}});
(function() {
  var a = 16 * Math.sqrt(3), b = 12.8 * Math.sqrt(3);
  qa = tm.createClass({superClass:tm.graphics.Canvas, fa:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.fa = ra();
    this.fa.xa = this;
    this.fa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(c) {
    this.fa.la = Math.cos(this.fa.direction) * this.fa.speed;
    this.fa.ma = Math.sin(this.fa.direction) * this.fa.speed;
    for(this.fa.qb += this.fa.la;96 < this.fa.qb;) {
      this.fa.qb -= 96
    }
    for(;-96 > this.fa.qb;) {
      this.fa.qb += 96
    }
    for(this.fa.sb += this.fa.ma;2 * a < this.fa.sb;) {
      this.fa.sb -= 2 * a
    }
    for(;this.fa.sb < 2 * -a;) {
      this.fa.sb += 2 * a
    }
    for(this.fa.rb += 0.8 * this.fa.la;25.6 * 3 < this.fa.rb;) {
      this.fa.rb -= 25.6 * 3
    }
    for(;this.fa.rb < -25.6 * 3;) {
      this.fa.rb += 25.6 * 3
    }
    for(this.fa.tb += 0.8 * this.fa.ma;2 * b < this.fa.tb;) {
      this.fa.tb -= 2 * b
    }
    for(;this.fa.tb < 2 * -b;) {
      this.fa.tb += 2 * b
    }
    0 === c % 2 && this.draw()
  }, draw:function() {
    this.fa.background !== l ? this.clearColor(this.fa.background, 0, 0) : this.clear();
    this.lineWidth = 0.3;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    this.beginPath();
    for(var c = 0, f = this.fa.qb - 96;576 > f;f += 48) {
      for(var c = 0 === c ? a : 0, g = this.fa.sb - 2 * a + c;g < 640 + 2 * a;g += 2 * a) {
        this.line(f, g, f + 32, g), this.line(f, g, f - 16, g + a), this.line(f, g, f - 16, g - a)
      }
    }
    this.stroke();
    this.lineWidth = 0.2;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,0.6)"}, {offset:1, color:"rgba(255,255,255,0.3)"}]).toStyle();
    this.beginPath();
    c = 0;
    for(f = this.fa.rb - 25.6 * 3;f < 480 + 25.6 * 3;f += 25.6 * 1.5) {
      c = 0 === c ? b : 0;
      for(g = this.fa.tb - 2 * b + c;g < 640 + 2 * b;g += 2 * b) {
        this.line(f, g, f + 25.6, g), this.line(f, g, f - 12.8, g + b), this.line(f, g, f - 12.8, g - b)
      }
    }
    this.stroke()
  }});
  ra = tm.createClass({superClass:tm.app.Object2D, qb:0, sb:0, rb:0, tb:0, direction:0, speed:0, la:0, ma:0, background:l, init:function() {
    this.superInit();
    this.rb = this.tb = this.qb = this.sb = 0;
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.ma = this.la = 0
  }})
})();
I = tm.createClass({superClass:tm.app.Sprite, vf:n, $:l, ca:l, wb:n, Mc:n, He:n, la:0, ma:0, init:function(a) {
  this.superInit("star", 20, 20);
  (this.vf = a) && this.setScale(2, 2);
  this.$ = B.hd;
  this.ca = this.$.ca;
  this.addChildTo(this.$);
  a = 0.5 * w.random() * Math.PI - 0.75 * Math.PI;
  this.la = 30 * Math.cos(a);
  this.ma = 30 * Math.sin(a)
}, update:function() {
  this.ca.pb && (this.Mc = k);
  if(this.ca.parent === l) {
    this.Mc = n
  }else {
    if(100 > Q(this, this.ca)) {
      this.$.zh(this);
      this.remove();
      return
    }
    1E4 > Q(this, this.ca) && (this.Mc = k);
    if(this.He && this.Mc) {
      var a = Math.atan2(this.ca.y - this.y, this.ca.x - this.x);
      this.x += 10 * Math.cos(a);
      this.y += 10 * Math.sin(a)
    }else {
      this.He || (this.x += this.la, this.y += this.ma, this.la *= 0.8, this.ma *= 0.8, -1 < this.la && (1 > this.la && -1 < this.ma && 1 > this.ma) && (this.He = k))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
sa = tm.createClass({superClass:I, wb:n, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
ta = tm.createClass({superClass:I, wb:k, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.Mc || (this.x += this.$.xa.la, this.y += this.$.xa.ma);
  this.superClass.prototype.update.call(this)
}});
function W(a, b) {
  if(a.parent === l || b.parent === l) {
    return n
  }
  var c = a.x + a.boundingWidthRight, f = a.y - a.boundingHeightTop, g = a.y + a.boundingHeightBottom, j = b.x - b.boundingWidthLeft, m = b.y - b.boundingHeightTop, u = b.y + b.boundingHeightBottom;
  return a.x - a.boundingWidthLeft < b.x + b.boundingWidthRight && c > j && f < u && g > m
}
;var X = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Wh:function(a, b) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = b
}, finish:function(a) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(a)
}});
var Da = tm.createClass({superClass:X, titleText:l, menu:l, descriptions:l, showExit:n, title:l, selections:[], description:l, box:l, cursor:l, we:l, _selected:0, _opened:n, _finished:n, init:function(a, b, c) {
  this.superInit();
  this.titleText = a;
  this.menu = b;
  this._selected = ~~c.defaultValue;
  this.showExit = c.showExit;
  this.descriptions = c.menuDescriptions;
  this.showExit && (b.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.we = c.onCursorMove;
  a = Math.max(50 * (1 + b.length), 50) + 40;
  this.box = tm.app.RectangleShape(384, a, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"hsla(220,50%,30%,0.8)"}).setPosition(240, 320);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:384, height:a}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.app.Label("", 14).setPosition(240, 630).addChildTo(this)
}, _onOpen:function() {
  var a = 320 - 25 * this.menu.length;
  this.title = tm.app.Label(this.titleText, 30).setPosition(240, a).addChildTo(this);
  this.selections = this.menu.map(function(b, c) {
    var f = this;
    a += 50;
    var g = tm.app.Label(b).setPosition(240, a).addChildTo(this);
    g.interactive = k;
    g.addEventListener("touchend", function() {
      f._selected === c ? f.closeDialog(f._selected) : f._selected = c
    });
    g.width = 336;
    return g
  }.bind(this));
  this._createCursor();
  this._opened = k
}, _createCursor:function() {
  this.cursor = tm.app.RectangleShape(336, 10, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.LinearGradient(0, 0, 336, 0).addColorStopList([{offset:0, color:"rgba(  0,255,100,0.0)"}, {offset:0.2, color:"rgba(  0,255,100,0.3)"}, {offset:0.5, color:"rgba(  0,255,255,0.5)"}, {offset:0.8, color:"rgba(  0,255,100,0.3)"}, {offset:1, color:"rgba(  0,255,100,0.0)"}]).toStyle()}).addChildTo(this);
  this.cursor.blendMode = "lighter";
  this.cursor.x = 240;
  this.cursor.s = this._selected;
  this.cursor.y = this.selections[this._selected].y;
  this.cursor.update = function() {
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.we !== l && this.parent.we(this.s))
  }
}, update:function(a) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(a.frame / 2) % 2 : this.showExit && a.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") ? this.closeDialog(this._selected) : a.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = R(this._selected, 0, this.selections.length - 1), P("select")) : a.keyboard.getKeyDown("up") && (this._selected -= 1, 
  this._selected = R(this._selected, 0, this.selections.length - 1), P("select")))
}, closeDialog:function(a) {
  this._finished = k;
  this.tweener.clear().wait(200).call(function() {
    this.cursor.remove();
    this.title.remove();
    this.selections.each(function(a) {
      a.remove()
    });
    this.box.tweener.clear();
    this.box.tweener.to({width:1, height:1}, 200, "easeInExpo").call(function() {
      this.finish(a)
    }.bind(this))
  }.bind(this))
}, draw:function(a) {
  a.fillStyle = "rgba(0,0,0,0.8)";
  a.fillRect(0, 0, 480, 640)
}});
function Y(a, b, c, f, g) {
  g = {}.$extend({menuDescriptions:[].concat(c), showExit:k, defaultValue:0, onCursorMove:p()}, g);
  a.Wh(Da(b, c, g), f)
}
;E = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, be:0.85, size:0, image:l, Wa:k, init:function(a, b, c, f) {
  this.superInit();
  this.width = this.height = this.size = a;
  b !== i && (this.alpha = b);
  c !== i && (this.be = c);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.be;
  0.001 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return E(this.size, this.oi, this.be, this.image)
}});
fa = tm.createClass({superClass:E, xa:l, init:function(a, b) {
  b = b || 20;
  this.superInit(b, 1, 0.82, tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element);
  this.xa = a
}, update:function(a) {
  this.superClass.prototype.update.apply(this, a);
  this.x += this.xa.la;
  this.y += this.xa.ma + 0.3
}, clone:function(a) {
  return fa(this.xa, a)
}});
var Ca = tm.createClass({width:0, label:l, Ra:l, ha:0, Df:0, Ee:0, init:function(a) {
  this.width = a;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Ra = [];
  this.Df = 480 - this.width - 5;
  this.Ee = 5
}, Og:function(a, b) {
  b === k && (this.Ra.clear(), this.Ra.push(""));
  5 < this.Ra.length && this.Ra.splice(1, this.Ra.length - 4);
  this.Ra.push(a);
  return this
}, Tg:function() {
  this.Ra.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var a = this.label.text, a = a.substring(0, a.length - 1);
  if(0 !== this.Ra.length) {
    if("" !== this.Ra[0]) {
      var b = this.Ra[0][0];
      this.Ra[0] = this.Ra[0].substring(1);
      a += b
    }else {
      this.Ra.shift(), b = a.split("\n"), 3 < b.length && (b.shift(), a = b.join("\n")), a += "\n"
    }
  }
  this.label.text = a + (0 === this.ha % 2 ? "_" : " ");
  this.ha += 1
}, draw:function(a) {
  a.save();
  a.context.globalCompositeOperation = "source-over";
  a.translate(this.Df, this.Ee);
  a.fillStyle = "rgba(1,2,48,0.5)";
  a.fillRect(0, 0, this.width, 64);
  a.translate(5, 5);
  a.fillStyle = "rgba(255,255,255,0.5)";
  a.setText(this.label.fontStyle, this.label.align, this.label.baseline);
  this.label._lines.each(function(b, c) {
    a.fillText(b, 0, this.label.textSize * c)
  }.bind(this));
  a.restore()
}});
function Ba(a) {
  function b(b) {
    if(1 > b) {
      return l
    }
    var f = [], d = Math.random(), g, j;
    for(j = 0;j < a;j += ~~b) {
      g = Math.random();
      for(var m = 0;m < b;m++) {
        f[j + m] = c(d, g, m / b)
      }
      d = g
    }
    d = f[a - ~~b];
    g = f[0];
    for(m = 0;m < b;m++) {
      f[a - ~~b + m] = c(d, g, m / b)
    }
    return f
  }
  function c(a, c, b) {
    b = 0.5 * (1 - Math.cos(b * Math.PI));
    return a * (1 - b) + c * b
  }
  for(var f = [], g = 0, j = Math.pow(2, 4);8 > g;g++, j *= 2) {
    var m = b(a / j);
    if(m === l) {
      break
    }
    f.push(m)
  }
  m = [].concat(f[0]);
  g = 1;
  for(j = 0.5;g < f.length;g++, j *= 0.5) {
    for(var u = 0;u < a;u++) {
      m[u] += f[g][u] * j
    }
  }
  for(g = 0;g < m.length;g++) {
    m[g] /= 2
  }
  return m
}
var T;
w = {index:-1, data:l, ra:p(), random:function() {
  return Math.random()
}, rand:function(a, b) {
  return Math.floor(this.random() * (b - a + 1)) + a
}, randf:function(a, b) {
  return this.random() * (b - a) + a
}};
(function() {
  var a = l, b = l;
  v = tm.createClass({superClass:X, result:l, ha:0, Uc:[], wd:n, sf:l, xf:0, Ed:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.sf = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.wd = n;
      for(var a = ("" + Math.floor(s.zd)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.sf.text = "HIGH SCORE: " + b.trim()
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Ve(80 * Math.cos(0.01 * this.ha) + 240, 80 * Math.sin(0.01 * this.ha) + 320, 0);
    this.Ve(80 * Math.cos(0.01 * this.ha + Math.PI) + 240, 80 * Math.sin(0.01 * this.ha + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) && !this.wd && this.Cf();
    this.ha += 1
  }, Ve:function(c, f, g) {
    if(!this.wd) {
      a === l && (a = E(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === l && (b = E(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? a.clone().addChildTo(this) : b.clone().addChildTo(this);
      g.speed = 0.6;
      var j = S(0, 2 * Math.PI), m = U(0, 20);
      g.setPosition(Math.cos(j) * m + c, Math.sin(j) * m + f);
      var u = this;
      g.update = function() {
        this.x += Math.cos(j) * this.speed;
        this.y += Math.sin(j) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = u.Uc.indexOf(this);
          -1 !== a && u.Uc.splice(a, 1)
        }
      };
      this.Uc.push(g)
    }
  }, Cf:function() {
    Y(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.Fh, {defaultValue:this.xf, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, Fh:function(a) {
    4 !== a && (this.xf = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.wd = k;
          for(var a = 0, b = this.Uc.length;a < b;a++) {
            this.Uc[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.replaceScene(ua())
        }.bind(this));
        break;
      case 2:
        this.Rb();
        break;
      case 3:
        s.ah()
    }
  }, Rb:function() {
    Y(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Ae, {defaultValue:this.Ed, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Ae:function(a) {
    3 !== a && (this.Ed = a);
    switch(a) {
      case 0:
        this.Be();
        break;
      case 1:
        this.Ce();
        break;
      case 2:
        this.Nh();
        break;
      default:
        this.Cf()
    }
  }, Be:function() {
    Y(this, "BGM VOLUME", "012345".split(""), this.ye, {defaultValue:s.Dc, onCursorMove:function(a) {
      M !== l && "exit" !== a && (M.volume = 0.1 * a)
    }, showExit:n})
  }, ye:function(a) {
    6 !== a && (s.Dc = a);
    this.Rb()
  }, Ce:function() {
    Y(this, "SE VOLUME", "012345".split(""), this.ze, {defaultValue:s.bc, showExit:n})
  }, ze:function(a) {
    6 !== a && (s.bc = a);
    this.Rb()
  }, Nh:function() {
    Y(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Eh, {defaultValue:s.kf, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Eh:function(a) {
    5 !== a && (s.kf = a);
    this.Rb()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  ua = tm.createClass({superClass:X, fc:l, gc:l, hc:l, re:l, pe:l, type:0, style:0, Yb:n, init:function() {
    this.superInit();
    tm.app.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.Rh();
    this.Qh();
    this.ve(0);
    P("voSelectShip")
  }, Rh:function() {
    this.re = tm.app.Label("Type-A").setPosition(120, 150);
    this.re.addChildTo(this);
    var a = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u5f37\u529b\u306a\u96d1\u9b5a\u6383\u8a0e\u80fd\u529b"];
    this.se = tm.app.Label(a[0], 16).setPosition(120, 500);
    this.se.update = function() {
      this.se.text = a[this.type]
    }.bind(this);
    this.se.addChildTo(this);
    this.pe = tm.app.Label("Shot Style").setPosition(360, 150);
    this.pe.addChildTo(this);
    var b = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(30, 150).setRotation(-90);
    b.update = function(a) {
      this.setScale(a.keyboard.getKey("left") ? 2 : 1)
    };
    b.addChildTo(this);
    b = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(210, 150).setRotation(90);
    b.update = function(a) {
      this.setScale(a.keyboard.getKey("right") ? 2 : 1)
    };
    b.addChildTo(this);
    b = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(360, 120).setRotation(0);
    b.update = function(a) {
      this.setScale(a.keyboard.getKey("up") ? 2 : 1)
    };
    b.addChildTo(this);
    b = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(360, 180).setRotation(180);
    b.update = function(a) {
      this.setScale(a.keyboard.getKey("down") ? 2 : 1)
    };
    b.addChildTo(this);
    b = tm.app.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.fc = tm.app.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.gc = tm.app.AnimationSprite(b, 64, 64).gotoAndPlay("typeB");
    this.hc = tm.app.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.fc.jb = 0;
    this.gc.jb = 1;
    this.hc.jb = 2;
    this.fc.setScale(3).setPosition(0, 320).addChildTo(this);
    this.gc.setPosition(0, 320).addChildTo(this);
    this.hc.setPosition(0, 320).addChildTo(this);
    this.fc.update = function() {
      this.x = 120 + 60 * Math.sin(2 * this.jb / 3 * Math.PI)
    };
    this.gc.update = function() {
      this.x = 120 + 60 * Math.sin(2 * this.jb / 3 * Math.PI)
    };
    this.hc.update = function() {
      this.x = 120 + 60 * Math.sin(2 * this.jb / 3 * Math.PI)
    }
  }, Qh:function() {
    this.yc = tm.app.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(360, 384).addChildTo(this);
    this.Eb = tm.app.Object2D();
    this.Eb.addChildTo(this.yc);
    this.Eb.update = function(a) {
      this.Eb.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.qa = [];
    this.qa[0] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.qa[0].update = function() {
      0 === this.type ? this.qa[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.qa[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.qa[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.qa[1] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.qa[1].update = function() {
      0 === this.type ? this.qa[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.qa[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.qa[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.qa[2] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.qa[2].update = function() {
      0 === this.type ? this.qa[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.qa[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.qa[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.qa[3] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.qa[3].update = function() {
      0 === this.type ? this.qa[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.qa[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.qa[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.yc.line = a(0, 0, 0, 130, 8);
    this.yc.line.addChildTo(this.yc);
    this.qa.each(function(b) {
      b.line = a(0, 0, 0, 130, 5);
      b.line.addChildTo(b);
      b.addChildTo(this.Eb)
    }.bind(this));
    var b = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3059\u308b\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.qe = tm.app.Label(b[0], 16).setPosition(360, 500);
    this.qe.update = function() {
      this.qe.text = b[this.style]
    }.bind(this);
    this.qe.addChildTo(this)
  }, Fd:n, update:function(a) {
    !this.Fd && a.keyboard.getKeyDown("left") ? (this.ve(-1), P("select")) : !this.Fd && a.keyboard.getKeyDown("right") ? (this.ve(1), P("select")) : a.keyboard.getKeyDown("up") ? this.style = (this.style - 1 + 3) % 3 : a.keyboard.getKeyDown("down") ? this.style = (this.style + 1 + 3) % 3 : (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) && this.Jh();
    this.Xh(0 === ~~(a.frame / 60) % 2)
  }, Jh:function() {
    Y(this, "AUTO BOMB", ["on", "off"], this.Ah, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:n})
  }, Ah:function(a) {
    this.Yb = 0 === a;
    this.Kh()
  }, Kh:function() {
    Y(this, "ARE YOU READY?", ["ok", "no"], this.Bh, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059", "\u6a5f\u4f53\u9078\u629e\u306b\u623b\u308a\u307e\u3059"], showExit:n})
  }, Bh:function(a) {
    0 === a && this.Th()
  }, ve:function(a) {
    this.Fd = k;
    this.type = (this.type + a + 3) % 3;
    [this.fc, this.gc, this.hc][this.type].remove().addChildTo(this);
    this.fc.tweener.clear().to({jb:this.fc.jb - a, scaleX:0 === this.type ? 3 : 1, scaleY:0 === this.type ? 3 : 1}, 300);
    this.gc.tweener.clear().to({jb:this.gc.jb - a, scaleX:1 === this.type ? 3 : 1, scaleY:1 === this.type ? 3 : 1}, 300);
    this.hc.tweener.clear().to({jb:this.hc.jb - a, scaleX:2 === this.type ? 3 : 1, scaleY:2 === this.type ? 3 : 1}, 300);
    this.tweener.clear().wait(310).call(function() {
      this.Fd = n
    }.bind(this));
    this.re.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Th:function() {
    s.$.Yb = this.Yb;
    s.$.start(this.type, this.style);
    s.replaceScene(s.$)
  }, Xh:function(a) {
    this.pe.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    a ? (this.qa[0].visible = k, this.qa[1].visible = k, 1 === this.style ? (this.qa[2].visible = n, this.qa[3].visible = n) : (this.qa[2].visible = k, this.qa[3].visible = k), this.yc.line.lineWidth = 5) : (this.qa.each(function(a) {
      a.visible = n
    }), this.yc.line.lineWidth = 0 === this.style ? 10 : 20)
  }, draw:function(a) {
    a.clearColor(tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle());
    a.lineWidth = 1;
    a.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    a.beginPath();
    for(var f = 0, g = -48;528 > g;g += 24) {
      for(var f = 0 === f ? b : 0, j = 2 * -b + f;j < 640 + 2 * b;j += 2 * b) {
        a.line(g, j, g + 16, j), a.line(g, j, g - 8, j + b), a.line(g, j, g - 8, j - b)
      }
    }
    a.stroke();
    a.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    a.fillRect(10, 10, 460, 620)
  }});
  var a = tm.createClass({superClass:tm.app.CanvasElement, init:function(a, b, g, j, m) {
    this.superInit();
    this.angle = g - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = j;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = m
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
  }}), b = 8 * Math.sqrt(3)
})();
B = tm.createClass({superClass:X, ca:l, score:0, Ha:0, za:0, Rc:0, Da:0, Pb:0, Kf:0, Jf:l, xa:l, Ub:3, Ld:0, Md:0, xb:0, oc:0, Sc:0, ue:0, Yb:n, nb:0, Ec:0, Rg:6, rc:n, vb:0, Ua:0, na:n, Oc:0, qc:0, va:0, yd:l, De:l, lf:l, je:l, ke:l, ee:l, vh:l, bb:l, Ya:l, Ob:l, Ic:n, uh:n, init:function() {
  B.hd !== l && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  B.hd = this;
  this.Ya = oa(this);
  this.Ya.Va.addChildTo(this);
  this.xa = qa().fa;
  this.xa.addChildTo(this);
  this.yd = B.Wb().addChildTo(this);
  this.lf = B.Wb().addChildTo(this);
  this.je = B.Wb().addChildTo(this);
  this.De = B.Wb().addChildTo(this);
  this.ke = B.Wb().addChildTo(this);
  this.ee = B.Wb().addChildTo(this);
  this.vh = B.Pe(this).addChildTo(this);
  tm.Sa.Vb.Hc.$e = this;
  this.bb = tm.app.Object2D();
  this.bb.addChildTo(this);
  this.bb.update = function(a) {
    this.Hh(a)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Ya.clear()
  })
}, addChild:function(a) {
  a.Wa ? this.je.addChild(a) : a instanceof J ? this.ee.addChild(a) : a instanceof I ? this.yd.addChild(a) : a instanceof G ? a.wb ? this.yd.addChild(a) : this.lf.addChild(a) : a instanceof ba ? this.De.addChild(a) : a === this.bb || a === this.xa || a instanceof B.Wb || a instanceof B.Pe || a instanceof pa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(a)))
}, update:function(a) {
  this.Oh(a.keyboard);
  0 === a.frame % 500 && (T = Ba(512));
  this.Jf.update(a.frame);
  0 === a.frame % 2 && this.Ya.update();
  a.keyboard.getKeyDown("escape") ? (this.app.replaceScene(v()), O()) : a.keyboard.getKeyDown("space") ? this.Gd(0) : a.keyboard.getKeyDown("p") && (this.If().saveAsImage(), this.Gd(0))
}, If:function() {
  var a = tm.graphics.Canvas();
  a.resize(480, 640);
  a.clearColor("black");
  a.drawImage(this.xa.xa.element, 0, 0);
  a.drawImage(this.app.canvas.element, 0, 0);
  a.drawImage(this.Ya.element, 0, 0);
  return a
}, Hh:function() {
  this.ca.Fb === n && z.erase();
  var a;
  a = [].concat(G.La);
  for(var b = [].concat(D.La), c = b.length;b[--c] !== i;) {
    for(var f = a.length;a[--f] !== i;) {
      var g = a[f], j = b[c];
      if(!(0 >= g.sa) && W(g, j) && (j.xd(1), j.remove(), g.Gb(this.na ? C.tg : C.wg))) {
        this.xb += 1;
        this.na ? this.Pa(C.ng) : this.Pa(C.mg);
        this.xe(g);
        break
      }
    }
  }
  j = this.ca.yb;
  if(this.ca.pb) {
    a = [].concat(G.La);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = a.length;a[--f] !== i;) {
      if(g = a[f], !(0 >= g.sa) && W(g, j)) {
        j.Ph(g.y + g.boundingHeightBottom);
        g.Gb(j.ce) ? (this.xb += 1, this.na ? this.Pa(C.lg) : this.Pa(C.ig), this.xe(g)) : (this.na ? this.Nb(this.va) : this.Nb(0.01), this.Da = Math.max(this.Da, 0.05), this.na ? this.Pa(C.kg) : this.Pa(C.jg));
        j.xd(2);
        break
      }
    }
    b = {x:this.ca.x, y:this.ca.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(G.La);
    for(f = a.length;a[--f] !== i;) {
      g = a[f], !(0 >= g.sa) && W(g, b) && (g.Gb(j.ce) ? (this.xb += 1, this.na ? this.Pa(C.hg) : this.Pa(C.eg), this.xe(g)) : (this.na ? this.Nb(this.va) : this.Nb(0.01), this.Da = Math.max(this.Da, 0.05), this.na ? this.Pa(C.gg) : this.Pa(C.fg)), j.mh(2, this.ca.x, this.ca.y - 30))
    }
  }
  if(this.rc) {
    z.erase();
    a = [].concat(G.La);
    for(f = a.length;a[--f] !== i;) {
      g = a[f], !(0 >= g.sa) && (g.Pc() && g.Gb(C.Rf)) && (this.Db(g.score), this.xb += 1)
    }
    this.Da = this.za = 0
  }
  if(this.na) {
    f = [].concat(D.La);
    for(g = f.length;f[--g] !== i;) {
      if(j = f[g], !(0 >= j.sa)) {
        b = [].concat(J.La);
        for(a = b.length;b[--a] !== i;) {
          c = b[a], 0 < j.sa && W(j, c) && (c.sa -= 6 - this.Ua, 0 > c.sa && (c.$a(), this.Db(C.Tf), this.Nb(1), this.rf(n, n, c.x, c.y, 1)), j.sa -= 1)
        }
      }
    }
  }
  if(this.Ic) {
    z.erase()
  }else {
    if(this.ca.parent !== l && this.ca.tc === n && this.rc === n && 0 >= this.Oc) {
      for(f = J.La.length;J.La[--f] !== i;) {
        if(a = J.La[f], W(a, this.ca)) {
          this.ca.Gb();
          0 < this.nb && this.Yb ? (this.Ua = R(this.Ua - 1, 0, 1), r.ka.ya.$rank = R(r.ka.ya.$rank - 0.01, 0, 1), ia(this.ca, this).setPosition(this.ca.x, this.ca.y).addChildTo(this)) : this.Af();
          break
        }
      }
      for(f = G.La.length;G.La[--f] !== i;) {
        if(g = G.La[f], !(0 >= g.sa) && !g.wb && W(g, this.ca)) {
          this.ca.Gb();
          0 < this.nb && this.Yb ? (this.Ua = R(this.Ua - 1, 0, 1), r.ka.ya.$rank = R(r.ka.ya.$rank - 0.01, 0, 1), ia(this.ca, this).setPosition(this.ca.x, this.ca.y).addChildTo(this)) : this.Af();
          break
        }
      }
    }
    this.na && (this.qc -= 1, 0 >= this.qc && this.sd());
    this.Oc = Math.max(this.Oc - 1, 0);
    this.Da -= C.Wf * C.Xf;
    0 >= this.Da && (this.Da = 0, this.na || 0 < this.va ? this.Pb = this.za = this.Ha = 0 : (0 < this.za && (0 >= this.Pb && (this.Pb = this.za * C.Vf), this.Ha = this.Ha * (this.za - this.Pb) / this.za, this.za -= this.Pb), 0 >= this.za && (this.Pb = this.za = this.Ha = 0)))
  }
}, xe:function(a) {
  this.rf(a.wb, this.na || Q(a, this.ca) < C.Zf, a.x, a.y, a.star);
  this.na ? 6 > this.va ? this.Nb(10) : this.Nb(20) : this.Nb(1);
  for(var b = this.Ha, c = ~~(this.za / C.Uf) + 1, f = 0;f < c;f++) {
    b += a.score, this.Db(b)
  }
  this.Ha += a.score * c
}, rf:function(a, b, c, f, g) {
  a = a ? ta : sa;
  for(var j = 0;j < g;j++) {
    a(b).setPosition(c, f)
  }
}, zh:function(a) {
  P("star");
  a.vf ? (this.Md += 1, this.Db(C.Bg), this.Db(0.2 * this.Ha), this.Ha += C.zg, this.na ? this.Pa(C.rg) : this.Pa(C.qg)) : (this.Ld += 1, this.Db(C.Ag), this.Db(0.1 * this.Ha), this.Ha += C.yg, this.na ? this.Pa(C.pg) : this.Pa(C.og))
}, start:function(a, b) {
  this.Ya.lc.Tg().clear();
  this.score = 0;
  this.Ub = C.Ne;
  this.nb = this.Ec = C.Me;
  this.va = this.Ua = this.vb = 0;
  r.ka.ya.$rank = 0;
  this.sd();
  this.rc = n;
  this.Sc = this.ue = 0;
  this.ca = ba(this, a, b);
  this.Lf(0);
  P("voLetsGo");
  this.Vh()
}, Lf:function(a) {
  this.Na("3...2...1...");
  this.ca.parent !== l && this.ca.remove();
  G.Fc();
  D.Fc();
  z.Fc();
  this.yd.removeChildren();
  this.je.removeChildren();
  this.ke.removeChildren();
  this.De.removeChildren();
  this.ee.removeChildren();
  this.bb.removeChildren();
  this.xb = this.oc = this.Md = this.Ld = this.Rc = this.Da = this.za = this.Ha = 0;
  this.Ob = l;
  this.uh = this.Ic = n;
  this.Sc = 0;
  this.Ya.Va.Lc = 0;
  this.Ya.Va.Ib = 0;
  this.Kf = a;
  this.Jf = F.create(this, a);
  this.tweener.clear().wait(1E3).call(function() {
    this.te()
  }.bind(this))
}, te:function() {
  this.Na("Let's go!");
  this.ca.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.ca.yb.addChildTo(this);
  this.ca.Fb = n;
  this.ca.tc = k;
  this.ca.Kc = n;
  this.ca.pb = n;
  this.ca.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Fb = k
  }.bind(this.ca)).wait(2E3).call(function() {
    this.tc = n
  }.bind(this.ca))
}, Af:function() {
  A.ud(this.ca.x, this.ca.y, this);
  this.Na("I was shot down.");
  this.ca.Fb = n;
  this.ca.remove();
  this.Ub -= 1;
  this.va = this.Pb = this.za = this.Da = 0;
  this.Sc += 1;
  this.ue += 1;
  this.Ua = R(this.Ua - 3, 0, 1);
  r.ka.ya.$rank = R(r.ka.ya.$rank - 0.03, 0, 1);
  0 < this.Ub ? this.tweener.clear().wait(1E3).call(function() {
    this.Yb || (this.Ec = Math.min(this.Ec + 1, this.Rg));
    this.nb = this.Ec;
    this.te()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.Mh()
  }.bind(this))
}, kh:function() {
  this.Na("System rebooted.", k);
  this.score = 0;
  this.Ub = C.Ne;
  this.nb = this.Ec = C.Me;
  this.Ua = 0;
  r.ka.ya.$rank = 0;
  this.te()
}, Ug:function() {
  wa("bgmResult");
  var a = tm.app.Object2D();
  a.addChildTo(this.bb);
  a.tweener.wait(1E3).call(function() {
    this.app.pushScene(va(this, this.If()));
    a.remove()
  }.bind(this))
}, lh:function() {
  O();
  this.app.replaceScene(Ea())
}, ki:p(), Db:function(a) {
  var b = this.score;
  this.score += a;
  for(a = 0;a < s.nf.length;a++) {
    var c = s.nf[a];
    b < c && c <= this.score && this.eh()
  }
  s.zd = Math.max(s.zd, this.score)
}, Nb:function(a) {
  this.na && (a *= C.Yf * this.Ua);
  this.Pb = 0;
  this.za += a;
  this.Rc = Math.max(this.Rc, this.za);
  1 <= a && (this.Da = 1)
}, Pa:function(a) {
  if(this.va !== C.Sd) {
    for(a *= C.sg;1 < a;) {
      H(this.ca).addChildTo(this), a -= 1, this.vb = 0, this.va += 1, 1 === this.va ? (this.Na("HYPER SYSTEM, stand by.", k), P("voHyperStandBy")) : (this.Na("HYPER SYSTEM, ready.", k), P("voHyperReady"))
    }
    this.vb = R(this.vb + a, 0, 1);
    1 <= this.vb && (H(this.ca).addChildTo(this), this.va += 1, this.vb -= 1, 1 === this.va ? (this.Na("HYPER SYSTEM, stand by.", k), P("voHyperStandBy")) : (this.Na("HYPER SYSTEM, ready.", k), P("voHyperReady")))
  }
}, Uh:function() {
  0.5 > Math.random() ? (this.Na("HYPER SYSTEM start!!", k), P("voHyperStart0")) : (this.Na("start counting to system limit.", k), P("voHyperStart1"));
  this.Ua = R(this.Ua + 1, 0, 5);
  r.ka.ya.$rank = R(r.ka.ya.$rank + 0.01 * this.va, 0, 1);
  r.ka.ya.$hyperOff = C.ag;
  this.qc = C.dd;
  this.Oc = C.dd * C.dg;
  this.ca.Bd.wc(this.va);
  this.ca.yb.wc(this.va);
  this.ca.mc = this.ca.Bd;
  A.nh(this.ca.x, this.ca.y, this);
  this.na = k;
  this.vb = this.va = 0;
  z.erase(k, k)
}, sd:function() {
  this.na !== n && (this.na = n, H(this.ca, k).addChildTo(this), this.ca.mc = this.ca.Bf, this.ca.yb.vc("blue"), r.ka.ya.$hyperOff = 1, this.ca.Bd.wc(0), this.ca.yb.wc(0), this.Oc = C.dd * C.cg, this.qc = 0, z.erase())
}, eh:function() {
  P("voExtend");
  this.Na("extended.");
  this.Ub += 1
}, Na:function(a, b) {
  this.Ya.lc.Og(a, b)
}, Gd:function(a) {
  Y(this, "PAUSE", ["resume", "setting", "exit game"], this.Gh, {defaultValue:a, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:n})
}, Gh:function(a) {
  switch(a) {
    case 1:
      this.Rb();
      break;
    case 2:
      this.Lh()
  }
}, Rb:function() {
  Y(this, "SETTING", ["bgm volume", "sound volume"], this.Ae, {defaultValue:this.Ed, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Ae:function(a) {
  3 !== a && (this.Ed = a);
  switch(a) {
    case 0:
      this.Be();
      break;
    case 1:
      this.Ce();
      break;
    default:
      this.Gd()
  }
}, Lh:function() {
  Y(this, "REARY?", ["yes", "no"], this.Ch, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:n})
}, Ch:function(a) {
  0 === a ? (O(), this.app.replaceScene(v())) : this.Gd(1)
}, Be:function() {
  Y(this, "BGM VOLUME", "012345".split(""), this.ye, {defaultValue:s.Dc, onCursorMove:function(a) {
    M !== l && 6 !== a && (M.volume = 0.1 * a)
  }, showExit:n})
}, ye:function(a) {
  6 !== a && (s.Dc = a);
  this.Rb(1)
}, Ce:function() {
  Y(this, "SE VOLUME", "012345".split(""), this.ze, {defaultValue:s.bc, showExit:n})
}, ze:function(a) {
  6 !== a && (s.bc = a);
  this.Rb(1)
}, Mh:function() {
  Y(this, "CONTINUE?", ["yes", "no"], this.Dh, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:n})
}, Dh:function(a) {
  switch(a) {
    case 0:
      this.kh();
      break;
    case 1:
      this.lh()
  }
}, draw:p(), Sh:function() {
  this.Ya.Va.tweener.clear().to({Lc:-480}, 1600, "easeInQuad").to({Ib:22}, 800, "easeInOutQuad")
}, ph:function() {
  this.Ya.Va.tweener.clear().to({Ib:0}, 800, "easeInOutQuad").to({Lc:0}, 1600, "easeOutQuad")
}, Wc:l, Xc:0, Qc:l, fd:0, Vh:function() {
  if(1 === this.fd) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.Qc = [];
      for(var a = ~~localStorage.getItem("recCount"), b = 0;b < a;b++) {
        localStorage.removeItem("rec" + b)
      }
      localStorage.removeItem("recCount")
    }
    this.Wc = [];
    this.Xc = 0
  }else {
    if(2 === this.fd && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.Qc = [];
      a = ~~localStorage.getItem("recCount");
      for(b = 0;b < a;b++) {
        for(var c = localStorage.getItem("rec" + b).split(","), f = 0;f < c.length;f++) {
          this.Qc.push(c[f])
        }
      }
    }
  }
}, Oh:function(a) {
  if(1 === this.fd) {
    1E3 < this.Wc.length && (console.log("save"), localStorage.setItem("rec" + this.Xc, this.Wc), localStorage.setItem("recCount", this.Xc), this.Wc = [], this.Xc += 1), this.Wc.push("" + ~~a.getKey("up") + ~~a.getKey("down") + ~~a.getKey("left") + ~~a.getKey("right") + ~~a.getKey("z") + ~~a.getKey("x") + ~~a.getKey("c"))
  }else {
    if(2 === this.fd && this.Qc) {
      var b = this.Qc.shift();
      b !== i && (a.getKey = function(a) {
        return"up" === a ? !!~~b[0] : "down" === a ? !!~~b[1] : "left" === a ? !!~~b[2] : "right" === a ? !!~~b[3] : "z" === a ? !!~~b[4] : "x" === a ? !!~~b[5] : "c" === a ? !!~~b[6] : n
      }, a.getKeyDown = function(a) {
        return"up" === a ? !!~~b[0] : "down" === a ? !!~~b[1] : "left" === a ? !!~~b[2] : "right" === a ? !!~~b[3] : "z" === a ? !!~~b[4] : "x" === a ? !!~~b[5] : "c" === a ? !!~~b[6] : n
      })
    }
  }
}});
B.Wb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
B.Pe = tm.createClass({superClass:tm.app.CanvasElement, $:l, frame:0, init:function(a) {
  this.superInit();
  this.$ = a;
  this.blendMode = "lighter"
}, update:function(a) {
  this.frame = a.frame
}, draw:function(a) {
  this.Xg(a);
  this.Yg(a)
}, Xg:function(a) {
  if(0 < this.$.Da) {
    a.fillStyle = "rgba(255," + ~~(255 * this.$.Da) + "," + ~~Math.min(255, 512 * this.$.Da) + ",0.5)";
    var b = 500 * this.$.Da;
    a.fillRect(465, 635 - b, 10, b)
  }
}, Yg:function(a) {
  a.fillStyle = "rgba(255,255,0,0.1)";
  a.fillRect(5, 628, 200, 9);
  this.va === C.Sd ? 1 === this.frame % 2 && (a.fillStyle = "rgba(255,255,255,0.3)", a.fillRect(5, 628, 200, 9)) : 0 < this.$.vb && (a.fillStyle = "rgba(255,255,100,0.3)", a.fillRect(5, 628, 200 * this.$.vb, 9));
  0 < this.$.va && 0 === this.frame % 2 && (a.setText("bold 24px Orbitron", "left", "bottom"), a.strokeStyle = "rgba(255,255,100,0.5)", a.strokeText("hyper level " + this.$.va, 5, 637))
}});
B.hd = l;
(function() {
  va = tm.createClass({superClass:X, $:l, Ff:l, bb:l, values:l, labels:l, Cd:l, Ef:[1E3, 2E3, 4E3, 1E3, 1], uf:l, Fe:l, cursor:0, wait:0, init:function(a, c) {
    this.superInit();
    this.$ = a;
    this.values = [this.$.Ld, this.$.Md, ~~(100 * (this.$.xb / this.$.oc)), this.$.Rc, 0 === this.$.Sc ? 1E5 : 0];
    this.Cd = this.values.map(function(a) {
      return 0.01 * a
    });
    tm.app.Label("RESULT", 40).setPosition(240, 64).addChildTo(this);
    tm.app.Label("STAR (S)").setAlign("right").setBaseline("middle").setPosition(240, 128).addChildTo(this);
    tm.app.Label("STAR (L)").setAlign("right").setBaseline("middle").setPosition(240, 192).addChildTo(this);
    tm.app.Label("KILL RATIO").setAlign("right").setBaseline("middle").setPosition(240, 256).addChildTo(this);
    tm.app.Label("MAX HIT").setAlign("right").setBaseline("middle").setPosition(240, 320).addChildTo(this);
    tm.app.Label("NO MISS BONUS", 20).setAlign("right").setBaseline("middle").setPosition(240, 384).addChildTo(this);
    tm.app.Label("TOTAL SCORE").setAlign("right").setBaseline("middle").setPosition(240, 448).addChildTo(this);
    this.labels = [];
    for(var f = 0;f < this.values.length;f++) {
      this.labels[f] = tm.app.Label("" + Math.floor(this.values[f]) + (2 === f ? "%" : ""), 30).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 640 * (0.2 + 0.1 * f)).addChildTo(this)
    }
    this.uf = tm.app.Label(Math.floor(this.$.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
    this.Fe = tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.Fe.visible = n;
    this.background = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle();
    this.Ff = c;
    for(var g = [], f = 0;12 > f;f++) {
      g[f] = [];
      for(var j = 0;16 > j;j++) {
        g[f][j] = {Ge:0, Jd:0, Ke:S(-2, 2), Zc:S(1, 4)}
      }
    }
    this.bb = tm.app.Object2D();
    this.bb.draw = function(a) {
      for(var b = k, c = 0;c < g.length;c++) {
        for(var f = 0;f < g[c].length;f++) {
          var d = g[c][f];
          640 > 40 * f + d.Jd && (a.drawImage(this.Ff.element, 40 * c, 40 * f, 40, 40, 40 * c + d.Ge, 40 * f + d.Jd, 40, 40), d.Ge += d.Ke, d.Jd += d.Zc, d.Zc += 0.3, b = n)
        }
      }
      b ? (this.bb.remove(), console.log("this.lastElement.remove"), this.wait = 60) : this.wait = 100
    }.bind(this);
    this.bb.addChildTo(this);
    this.addEventListener("exit", function() {
      xa()
    })
  }, update:function(a) {
    this.wait -= 1;
    if(!(0 < this.wait)) {
      var c = this.cursor;
      if(c < this.values.length) {
        P("star"), this.values[c] <= this.Cd[c] || a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") ? (this.$.Db(this.values[c] * this.Ef[c]), this.values[c] = 0, this.cursor += 1, this.wait = 30) : (this.$.Db(this.Cd[c] * this.Ef[c]), this.values[c] -= this.Cd[c]), this.labels[c].text = "" + Math.floor(this.values[c]) + (2 === c ? "%" : ""), this.uf.text = Math.floor(this.$.score)
      }else {
        if(this.Fe.visible = k, a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) {
          this.$.Lf(this.$.Kf + 1), a.popScene()
        }
      }
    }
  }, draw:function(b) {
    b.clearColor(this.background);
    b.lineWidth = 1;
    b.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    b.beginPath();
    for(var c = 0, f = -48;528 > f;f += 24) {
      for(var c = 0 === c ? a : 0, g = 2 * -a + c;g < 640 + 2 * a;g += 2 * a) {
        b.line(f, g, f + 16, g), b.line(f, g, f - 8, g + a), b.line(f, g, f - 8, g - a)
      }
    }
    b.stroke();
    b.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    b.fillRect(20, 20, 440, 600)
  }});
  var a = 8 * Math.sqrt(3)
})();
var Ea = tm.createClass({superClass:X, init:function() {
  this.superInit();
  var a = tm.app.Label("GAME OVER");
  a.fillStyle = "red";
  a.setPosition(240, 320).addChildTo(this);
  this.interactive = k;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(v())
    }.bind(this))
  })
}, update:function(a) {
  a.keyboard.getKeyDown("z") && a.replaceScene(v())
}, draw:function(a) {
  a.clearColor("black")
}});
tm.createClass({superClass:X, init:function() {
  this.superInit()
}, update:p()});
(function() {
  G = tm.createClass({superClass:tm.app.CanvasElement, ca:l, $:l, ba:l, aa:l, sa:0, score:0, wb:n, erase:n, star:1, th:n, $b:k, Hb:n, frame:0, Od:l, direction:0, speed:0, init:function(b, c, f) {
    this.superInit();
    this.addEventListener("completeattack", function() {
      this.Ia()
    });
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Hb = n;
      a.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var b = a.indexOf(this);
      -1 !== b && a.splice(b, 1)
    });
    this.$b = k;
    this.$ = b;
    this.ca = b.ca;
    this.aa = c;
    this.ba = f;
    this.score = 100;
    this.erase = n;
    this.aa.ra.apply(this);
    this.ba.ra.apply(this);
    this.altitude = this.wb ? 1 : 10;
    this.Od = {x:0, y:0}
  }, Jb:function() {
    this.aa.Jb.apply(this);
    this.ba.Jb.apply(this);
    return this
  }, Ia:function() {
    this.aa.Ia.apply(this);
    this.ba.Ia.apply(this)
  }, update:function() {
    this.Hb === n && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Hb = k, this.aa.Tc.apply(this), this.ba.Tc.apply(this));
    var a = this.x, c = this.y;
    this.aa.update.apply(this);
    this.ba.update.apply(this);
    this.wb && (this.x += this.$.xa.la, this.y += this.$.xa.ma);
    this.Hb && (this.frame += 1);
    this.Od.x = this.x - a;
    this.Od.y = this.y - c
  }, Gb:function(a) {
    if(!this.Hb) {
      return n
    }
    this.sa -= a;
    return 0 >= this.sa ? (a = S(0, 5), 2 > a ? this.$.Na("enemy destroy.") : 4 > a ? this.$.Na(this.name + " destroy.") : this.$.Na("ETR reaction gone."), this.erase && z.erase(k, this.$.na), this.aa.$a.apply(this), this.ba.$a.apply(this), k) : n
  }, draw:function(a) {
    this.ba.draw.call(this, a)
  }, Pc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Ih:function() {
    return this.$b
  }});
  G.Fc = function() {
    for(var b = [].concat(a), c = 0, f = b.length;c < f;c++) {
      b[c].remove()
    }
  };
  var a = G.La = []
})();
(function() {
  var a = {kujo:[2, 300, n, n, 1], kiryu:[3, 400, n, n, 1], natsuki:[5, 900, k, n, 1], kise:[35, 15E3, k, n, 1], kurokawa:[35, 5E3, n, n, 5], akimoto:[250, 3E5, n, k, 10], yukishiro:[750, 8E5, n, k, 20], misumi:[3E3, 2E6, n, k, 0]};
  K = tm.createClass({ra:function() {
    this.name = "abstract enemy";
    this.sa = 9999
  }, setData:function(b) {
    this.name = b;
    this.sa = a[b][0];
    this.score = a[b][1];
    this.wb = a[b][2];
    this.erase = a[b][3];
    this.star = a[b][4]
  }, Jb:p(), Ia:p(), update:p(), Tc:p(), draw:p(), $a:function() {
    A.ud(this.x, this.y, this.$, this.Od);
    this.remove()
  }, of:function() {
    this.remove();
    this.wb = k;
    this.$.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && A.ud(this.x + U(-100, 100), this.y + U(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      A.mf(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }, Sg:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && A.ud(this.x + U(-100, 100), this.y + U(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      A.mf(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }});
  K.Aa = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ra:function() {
    this.ba.setData.call(this, "kujo");
    this.wa = b("tex_stage1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.ca.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.wa.setFrameIndex(0) : this.wa.setFrameIndex(1);
    this.wa.draw(a)
  }});
  K.Aa = K.Aa();
  K.ga = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ra:function() {
    this.ba.setData.call(this, "kiryu");
    this.wa = b("tex_stage1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.ca.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.wa.setFrameIndex(8) : this.wa.setFrameIndex(9);
    this.wa.draw(a)
  }});
  K.ga = K.ga();
  K.Ca = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ra:function() {
    this.ba.setData.call(this, "natsuki");
    this.Ye = b("tex_tank1", 64, 64);
    this.Ze = b("tex_tank1", 64, 64);
    this.kc = this.kc || 0;
    this.ob = this.ob || 0;
    this.boundingRadius = 24
  }, update:function() {
    this.Ye.setFrameIndex(~~(16 * this.kc / (2 * Math.PI)), 64, 64);
    this.Ze.setFrameIndex(~~(16 * this.ob / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Ye.draw(a);
    this.Ze.draw(a)
  }, $a:function() {
    A.bh(this.x, this.y, this.$);
    this.remove()
  }});
  K.Ca = K.Ca();
  K.Bb = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ra:function() {
    this.ba.setData.call(this, "kurokawa");
    this.wa = b("tex_stage1", 128, 128);
    this.wa.setFrameIndex(1);
    this.boundingWidth = 100;
    this.boundingHeight = 20
  }, update:p(), draw:function(a) {
    this.wa.draw(a)
  }, $a:function() {
    A.td(this.x, this.y, this.$);
    this.remove()
  }});
  K.Bb = K.Bb();
  K.ed = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ra:function() {
    this.ba.setData.call(this, "akimoto");
    this.wa = b("tex_stage1", 256, 128);
    this.wa.setFrameIndex(1);
    this.boundingWidth = 200;
    this.boundingHeightBottom = 10;
    this.boundingHeightTop = 60
  }, update:p(), draw:function(a) {
    this.wa.draw(a)
  }, $a:function() {
    this.ba.of.call(this)
  }});
  K.ed = K.ed();
  K.ua = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ra:function() {
    this.ba.setData.call(this, "kise");
    this.wa = b("tex_stage1", 128, 128);
    this.wa.setFrameIndex(5);
    this.boundingHeight = this.boundingWidth = 20
  }, draw:function(a) {
    this.wa.draw(a)
  }, $a:function() {
    A.td(this.x, this.y, this.$);
    this.remove()
  }});
  K.ua = K.ua();
  K.zc = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ra:function() {
    this.ba.setData.call(this, "yukishiro");
    this.wa = b("tex_stage1", 256, 128);
    this.wa.setFrameIndex(3);
    this.setScale(1.5);
    this.boundingWidth = 200;
    this.boundingHeight = 80
  }, $a:function() {
    this.ba.of.call(this)
  }, draw:function(a) {
    this.wa.draw(a)
  }});
  K.zc = K.zc();
  K.Ac = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ra:function() {
    this.ba.setData.call(this, "misumi");
    this.wa = b("tex_stage1", 256, 128);
    this.wa.setFrameIndex(4);
    this.setScale(2);
    this.boundingWidth = 300;
    this.boundingHeight = 150
  }, draw:function(a) {
    this.wa.draw(a)
  }, $a:function() {
    this.ba.Sg.call(this)
  }});
  K.Ac = K.Ac();
  var b = tm.createClass({superClass:tm.app.Sprite, init:function(a, b, g) {
    this.superInit(a, b, g)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }})
})();
(function() {
  function a(a) {
    var b = [].concat(a._listeners.enterframe);
    if(b) {
      for(var c = 0, m = b.length;c < m;c++) {
        b[c] && b[c].Dd && a.removeEventListener("enterframe", b[c])
      }
    }
  }
  function b(a, b) {
    var c = z[b].rd();
    a.addEventListener("enterframe", c);
    a.addEventListener("completeattack", function() {
      this.removeEventListener("enterframe", c)
    })
  }
  L = tm.createClass({ra:p(), Jb:p(), Ia:p(), update:p(), Tc:p(), $a:function() {
    a(this)
  }});
  L.fb = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, Jb:function() {
    var a = w.randf(64, 192);
    this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, Ia:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  L.fb = L.fb();
  L.Ba = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, Jb:function() {
    var a = w.randf(192, 320);
    this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, Ia:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  L.Ba = L.Ba();
  L.Lb = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, Jb:function() {
    var a = w.randf(448, 576);
    this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, Ia:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  L.Lb = L.Lb();
  L.ga = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, ra:function() {
    this.angle = 0.5 * Math.PI;
    this.Ie = w.rand(0, 60);
    this.speed = 0
  }, update:function() {
    this.frame === this.Ie ? this.speed = 8 : this.frame === this.Ie + 10 ? b(this, "basic1-0") : this.Ie < this.frame && this.y < this.ca.y && (this.angle += Math.atan2(this.ca.y - this.y, this.ca.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = R(this.angle, 0.5, Math.PI - 0.5));
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    !this.Pc() && this.Hb && this.remove();
    if(9E4 > Q(this, this.ca) || this.y > this.ca.y) {
      this.$b = n
    }
  }});
  L.ga = L.ga();
  var c = tm.createClass({superClass:L, init:function(a, b, c) {
    this.superInit();
    this.sh = a;
    this.rh = b;
    this.he = c
  }, ra:function() {
    this.speed = this.aa.sh;
    this.kc = this.aa.rh;
    this.ob = 0
  }, Tc:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.kc) * this.speed;
    this.y += Math.sin(this.kc) * this.speed;
    this.Hb && !this.Pc() && this.remove();
    for(this.ob = Math.atan2(this.ca.y - this.y, this.ca.x - this.x);0 > this.ob;) {
      this.ob += 2 * Math.PI
    }
    for(;2 * Math.PI <= this.ob;) {
      this.ob -= 2 * Math.PI
    }
    this.$b = this.y < this.ca.y;
    if(this.aa.he) {
      for(var a = 0;a < this.aa.he.length;a++) {
        var b = this.aa.he[a];
        b.frame === this.frame && this.tweener.to({kc:b.dir, speed:b.speed}, 500)
      }
    }
  }});
  L.kb = c(1, 0.25 * Math.PI);
  L.ai = c(1, -1.75 * Math.PI);
  L.Bc = c(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  L.ua = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, ra:function() {
    this.speed = 1;
    this.dir = Math.PI
  }, Tc:function() {
    b(this, "basic3-0")
  }, update:function() {
    this.Hb && !this.Pc() && this.remove();
    this.$b = this.y < this.ca.y
  }});
  L.ua = L.ua();
  c = tm.createClass({superClass:L, velocityY:0, af:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.af = b
  }, ra:function() {
    this.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      b(this, this.aa.af)
    }.bind(this))
  }, update:function() {
    this.y += this.aa.velocityY;
    this.Hb && !this.Pc() && this.remove();
    this.$b = this.y < this.ca.y
  }});
  L.Xb = c(0.5, "kurokawa-1");
  L.Qe = c(0.3, "komachi-1");
  c = tm.createClass({superClass:L, ib:l, init:function(a) {
    this.superInit();
    this.ib = a
  }, ra:function() {
    this.Jc = this.Nd = n;
    this.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Nd = k;
      this.Ia();
      var a = function() {
        var b = 2 * w.random() * Math.PI, c = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * c, 192 + 0.5 * Math.sin(b) * c, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(this))
  }, update:function() {
    if(!(this.Nd === n || 0 >= this.sa) && 1500 < this.frame && this.Jc === n) {
      this.Jc = k, a(this), this.tweener.clear().move(this.x, -100, 1200, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    }
  }, Ia:function() {
    if(!this.Jc) {
      var a = this.aa.ib.shift();
      b(this, a);
      this.aa.ib.push(a)
    }
  }});
  L.zc = c(["honoka-1"]);
  L.Ac = tm.createClass({superClass:L, ib:l, init:function() {
    this.superInit();
    this.ib = ["nagisa-1-3", "nagisa-1-1", "nagisa-1-2"]
  }, ra:function() {
    this.Jc = this.Nd = n;
    this.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Nd = k;
      this.Ia();
      var a = function() {
        var b = 2 * w.random() * Math.PI, c = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * c, 64 + 0.3 * Math.sin(b) * c, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(this))
  }, Ia:function() {
    if(!this.Jc) {
      var a = this.aa.ib.shift();
      b(this, a);
      this.aa.ib.push(a)
    }
  }});
  L.vg = L.Ac();
  L.Ud = tm.createClass({superClass:L, ib:l, init:function() {
    this.superInit();
    this.ib = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, ra:function() {
    this.tweener.clear().wait(800).call(function() {
      this.Ia()
    }.bind(this))
  }, update:p(), Ia:function() {
    var a = this.aa.ib.shift();
    b(this, a);
    this.aa.ib.push(a)
  }});
  L.Ud = L.Ud();
  L.Vd = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, ra:function() {
    this.tweener.clear().wait(800).call(function() {
      this.Ia()
    }.bind(this))
  }, update:p(), Ia:function() {
    b(this, "nagisa-3-1")
  }});
  L.Vd = L.Vd()
})();
var Z = L, $ = K;
ka = {"heri1-left":[{aa:Z.fb, ba:$.ga, x:48, y:-100}, {aa:Z.Ba, ba:$.ga, x:96, y:-100}, {aa:Z.fb, ba:$.ga, x:144, y:-100}, {aa:Z.Ba, ba:$.ga, x:192, y:-100}, {aa:Z.fb, ba:$.ga, x:240, y:-100}], "heri1-center":[{aa:Z.fb, ba:$.ga, x:144, y:-100}, {aa:Z.Ba, ba:$.ga, x:192, y:-100}, {aa:Z.fb, ba:$.ga, x:240, y:-100}, {aa:Z.Ba, ba:$.ga, x:288, y:-100}, {aa:Z.fb, ba:$.ga, x:336, y:-100}], "heri1-right":[{aa:Z.fb, ba:$.ga, x:240, y:-100}, {aa:Z.Ba, ba:$.ga, x:288, y:-100}, {aa:Z.fb, ba:$.ga, x:336, y:-100}, 
{aa:Z.Ba, ba:$.ga, x:384, y:-100}, {aa:Z.fb, ba:$.ga, x:432, y:-100}], "heri1-left2":[{aa:Z.Ba, ba:$.ga, x:48, y:-100}, {aa:Z.Lb, ba:$.ga, x:96, y:-100}, {aa:Z.Ba, ba:$.ga, x:144, y:-100}, {aa:Z.Lb, ba:$.ga, x:192, y:-100}, {aa:Z.Ba, ba:$.ga, x:240, y:-100}], "heri1-center2":[{aa:Z.Ba, ba:$.ga, x:144, y:-100}, {aa:Z.Lb, ba:$.ga, x:192, y:-100}, {aa:Z.Ba, ba:$.ga, x:240, y:-100}, {aa:Z.Lb, ba:$.ga, x:288, y:-100}, {aa:Z.Ba, ba:$.ga, x:336, y:-100}], "heri1-right2":[{aa:Z.Ba, ba:$.ga, x:240, y:-100}, 
{aa:Z.Lb, ba:$.ga, x:288, y:-100}, {aa:Z.Ba, ba:$.ga, x:336, y:-100}, {aa:Z.Lb, ba:$.ga, x:384, y:-100}, {aa:Z.Ba, ba:$.ga, x:432, y:-100}], "heri2-left":[{aa:Z.ga, ba:$.Aa, x:48, y:-100}, {aa:Z.ga, ba:$.Aa, x:96, y:-100}, {aa:Z.ga, ba:$.Aa, x:144, y:-100}, {aa:Z.ga, ba:$.Aa, x:192, y:-100}, {aa:Z.ga, ba:$.Aa, x:240, y:-100}], "heri2-center":[{aa:Z.ga, ba:$.Aa, x:144, y:-100}, {aa:Z.ga, ba:$.Aa, x:192, y:-100}, {aa:Z.ga, ba:$.Aa, x:240, y:-100}, {aa:Z.ga, ba:$.Aa, x:288, y:-100}, {aa:Z.ga, ba:$.Aa, 
x:336, y:-100}], "heri2-right":[{aa:Z.ga, ba:$.Aa, x:240, y:-100}, {aa:Z.ga, ba:$.Aa, x:288, y:-100}, {aa:Z.ga, ba:$.Aa, x:336, y:-100}, {aa:Z.ga, ba:$.Aa, x:384, y:-100}, {aa:Z.ga, ba:$.Aa, x:432, y:-100}], "tankRD-left":[{aa:Z.kb, ba:$.Ca, x:78, y:-50}, {aa:Z.kb, ba:$.Ca, x:28, y:-100}, {aa:Z.kb, ba:$.Ca, x:-22, y:-150}, {aa:Z.kb, ba:$.Ca, x:-72, y:-200}, {aa:Z.kb, ba:$.Ca, x:-122, y:-250}], "tankRD-center":[{aa:Z.kb, ba:$.Ca, x:222, y:-50}, {aa:Z.kb, ba:$.Ca, x:172, y:-100}, {aa:Z.kb, ba:$.Ca, 
x:122, y:-150}, {aa:Z.kb, ba:$.Ca, x:72, y:-200}, {aa:Z.kb, ba:$.Ca, x:22, y:-250}], "tankL-top":[{aa:Z.Bc, ba:$.Ca, x:550, y:64}, {aa:Z.Bc, ba:$.Ca, x:620, y:64}, {aa:Z.Bc, ba:$.Ca, x:690, y:64}, {aa:Z.Bc, ba:$.Ca, x:760, y:64}, {aa:Z.Bc, ba:$.Ca, x:830, y:64}], "cannon-0":[{aa:Z.ua, ba:$.ua, x:48, y:-100}], "cannon-1":[{aa:Z.ua, ba:$.ua, x:96, y:-100}], "cannon-2":[{aa:Z.ua, ba:$.ua, x:144, y:-100}], "cannon-3":[{aa:Z.ua, ba:$.ua, x:192, y:-100}], "cannon-4":[{aa:Z.ua, ba:$.ua, x:240, y:-100}], 
"cannon-5":[{aa:Z.ua, ba:$.ua, x:288, y:-100}], "cannon-6":[{aa:Z.ua, ba:$.ua, x:336, y:-100}], "cannon-7":[{aa:Z.ua, ba:$.ua, x:384, y:-100}], "cannon-8":[{aa:Z.ua, ba:$.ua, x:432, y:-100}], "fighter-m-0":[{aa:Z.Xb, ba:$.Bb, x:96, y:-192}], "fighter-m-1":[{aa:Z.Xb, ba:$.Bb, x:144, y:-192}], "fighter-m-2":[{aa:Z.Xb, ba:$.Bb, x:192, y:-192}], "fighter-m-3":[{aa:Z.Xb, ba:$.Bb, x:240, y:-192}], "fighter-m-4":[{aa:Z.Xb, ba:$.Bb, x:288, y:-192}], "fighter-m-5":[{aa:Z.Xb, ba:$.Bb, x:336, y:-192}], "fighter-m-6":[{aa:Z.Xb, 
ba:$.Bb, x:384, y:-192}], "komachi-0":[{aa:Z.Qe, ba:$.ed, x:144, y:-192}], "komachi-1":[{aa:Z.Qe, ba:$.ed, x:336, y:-192}], yukishiro:[{aa:Z.zc, ba:$.zc, x:240, y:-100}], misumi:[{aa:[Z.vg, Z.Ud, Z.Vd], ba:$.Ac, x:240, y:-100, Ob:k}]};
(function() {
  function a(a, b, c, f) {
    return d.action([f(a), d.repeat(c, [f(d.speed(b, "sequence"))])])
  }
  function b(a, b, c, f, g, j) {
    return d.action([d.ia(d.direction(a, "absolute"), c, f, g, j), d.repeat(11, [d.ia(d.direction((b - a) / 11, "sequence"), c, f, g, j)])])
  }
  function c(a, b, c, f, g, j, m) {
    return d.action([d.ia(d.direction(b), f, g, j, m, i), d.repeat(a - 1, [d.ia(d.direction((c - b) / (a - 1), "sequence"), f, g, j, m, i)])])
  }
  function f(a) {
    return d.ia(d.direction(0), a || m, d.ea({frame:0}))
  }
  function g(a) {
    return d.ia(d.direction(0), a || m, d.ea)
  }
  function j(a) {
    return d.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function m(a) {
    return d.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function u(a) {
    return d.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function t(a) {
    return d.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function q(a) {
    return d.wait(a + "*(1-$rank)*$hyperOff")
  }
  z = {};
  var d = r.oa;
  z["basic0-0"] = new r.ta({top:d.action([g])});
  z["basic0-4"] = new r.ta({top:d.action([d.repeat(3, [d.repeat(5, [d.ia(d.direction(-20), d.speed("$loop.count*0.06+0.75"), d.ea), d.ia(d.direction(0), d.speed("$loop.count*0.06+0.75"), d.ea), d.ia(d.direction(20), d.speed("$loop.count*0.06+0.75"), d.ea)]), q(40)])])});
  z["basic1-0"] = new r.ta({top:d.action([d.repeat(999, [q(20), g(function(a) {
    return d.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  })])])});
  z["basic2-0"] = new r.ta({top:d.action([d.wait("120"), d.repeat(999, [q(50), g(j)])])});
  z["basic3-0"] = new r.ta({top:d.action([d.wait(20), d.repeat(999, [q(100), f(j(0)), f(j(1)), f(j(2))])])});
  z["kurokawa-1"] = new r.ta({top0:d.action([d.repeat(999, [a(j, 0.01, 4, function(a) {
    return c(4, -45, 45, a, d.ea({frame:2}), d.offsetX(-45), d.Qa(k))
  }), a(j, 0.01, 4, function(a) {
    return c(4, -45, 45, a, d.ea({frame:2}), d.offsetX(45), d.Qa(k))
  }), q(90)])]), top1:d.action([d.repeat(999, [d.ia(d.direction(0), j, d.ea({pa:k, frame:3}), d.offsetX(-45), d.Qa(k)), q(45), d.ia(d.direction(0), j, d.ea({pa:k, frame:3}), d.offsetX(45), d.Qa(k)), q(45)])])});
  z["komachi-1"] = new r.ta({top0:d.action([d.repeat(20, [d.ia(d.direction(210, "absolute"), t(1), d.ea, d.offsetX(-40)), d.ia(d.direction(120, "sequence"), t(1), d.ea, d.offsetX(-40)), d.ia(d.direction(120, "sequence"), t(1), d.ea, d.offsetX(-40)), d.repeat(57, [q(8), d.ia(d.direction(-720 / 57, "sequence"), t(1), d.ea, d.offsetX(-40)), d.ia(d.direction(120, "sequence"), t(1), d.ea, d.offsetX(-40)), d.ia(d.direction(120, "sequence"), t(1), d.ea, d.offsetX(-40))])])]), top1:d.action([d.repeat(20, 
  [d.ia(d.direction(-210, "absolute"), t(1), d.ea, d.offsetX(40)), d.ia(d.direction(120, "sequence"), t(1), d.ea, d.offsetX(40)), d.ia(d.direction(120, "sequence"), t(1), d.ea, d.offsetX(40)), d.repeat(57, [q(8), d.ia(d.direction(720 / 57, "sequence"), t(1), d.ea, d.offsetX(40)), d.ia(d.direction(120, "sequence"), t(1), d.ea, d.offsetX(40)), d.ia(d.direction(120, "sequence"), t(1), d.ea, d.offsetX(40))])])]), top2:d.action([d.repeat(70, [d.ia(d.direction(0), m(0), d.ea({pa:k, frame:0}), d.offsetX(-110), 
  d.Qa(k)), d.repeat(3, [d.wait(3), d.ia(d.direction(0, "sequence"), m(0), d.ea({pa:k, frame:0}), d.offsetX(-110), d.Qa(k))]), q(10), d.ia(d.direction(0), m(0), d.ea({pa:k, frame:0}), d.offsetX(110), d.Qa(k)), d.repeat(3, [d.wait(3), d.ia(d.direction(0, "sequence"), m(0), d.ea({pa:k, frame:0}), d.offsetX(110), d.Qa(k))]), q(10)])])});
  z["honoka-1"] = new r.ta({top0:d.action([d.wait(60), d.repeat(10, [c(6, -40, 40, m, d.ea({pa:k, frame:4}), d.offsetX(0), d.offsetY(30)), q(30), c(7, -40, 40, u, d.ea({pa:k, frame:4}), d.offsetX(0), d.offsetY(30)), q(30)])]), top1:d.action([d.wait(60), d.repeat(5, [c(2, -2, 2, u(2), d.ea({frame:1})), c(3, -3, 3, u(3), d.ea({frame:1})), c(4, -4, 4, u(4), d.ea({frame:1})), c(5, -5, 5, u(5), d.ea({frame:1})), q(110)])]), top2:d.action([d.repeat(20, [b(-10, -170, t, d.ea({pa:k, frame:0}), d.offsetX(-110), 
  d.offsetY(-70)), q(30)])]), top3:d.action([d.repeat(20, [b(10, 170, t, d.ea({pa:k, frame:0}), d.offsetX(110), d.offsetY(-70)), q(30)])])});
  z["nagisa-1-1"] = new r.ta({top0:d.action([q(60), d.repeat(7, [a(m, 0.04, 10, function(a) {
    return d.action([c(5, -40, 40, a, d.ea, d.offsetX(-30)), d.wait(2)])
  }), q(60)]), q(60)]), top1:d.action([q(60), d.repeat(7, [a(m, 0.04, 10, function(a) {
    return d.action([c(5, -40, 40, a, d.ea, d.offsetX(30)), d.wait(2)])
  }), q(60)]), q(60)])});
  z["nagisa-1-2"] = new r.ta({top0:d.action([d.repeat(12, [c(15, -90, 90, u, d.ea), q(40)])]), top1:d.action([d.repeat(3, [d.repeat(3, [c(5, -65, -55, m, d.ea({frame:0, pa:k}), d.offsetX(-140)), c(5, -35, -25, m, d.ea({frame:0, pa:k}), d.offsetX(-140)), c(5, -5, 5, m, d.ea({frame:0, pa:k}), d.offsetX(-140)), c(5, 25, 35, m, d.ea({frame:0, pa:k}), d.offsetX(-140)), c(5, 55, 65, m, d.ea({frame:0, pa:k}), d.offsetX(-140)), d.wait(2)]), q(60), d.repeat(3, [c(5, -65, -55, m, d.ea({frame:0, pa:k}), d.offsetX(140)), 
  c(5, -35, -25, m, d.ea({frame:0, pa:k}), d.offsetX(140)), c(5, -5, 5, m, d.ea({frame:0, pa:k}), d.offsetX(140)), c(5, 25, 35, m, d.ea({frame:0, pa:k}), d.offsetX(140)), c(5, 55, 65, m, d.ea({frame:0, pa:k}), d.offsetX(140)), d.wait(2)]), q(60)])])});
  z["nagisa-1-3"] = new r.ta({top0:d.action([q(60), d.repeat(3, [d.ia(d.direction(-60), m, d.ea({frame:2}), d.offsetX(-140)), d.repeat(20, [q(14), d.ia(d.direction(4, "sequence"), m, d.ea({frame:2}), d.offsetX(-140))])])]), top1:d.action([q(80), d.repeat(3, [d.ia(d.direction(60), m, d.ea({frame:2}), d.offsetX(140)), d.repeat(20, [q(14), d.ia(d.direction(-4, "sequence"), m, d.ea({frame:2}), d.offsetX(140))])])]), top2:d.action([q(180), d.repeat(2, [d.ia(d.direction(-60), m, d.ea({frame:2}), d.offsetX(-140)), 
  d.repeat(20, [q(13), d.ia(d.direction(4, "sequence"), m, d.ea({frame:2}), d.offsetX(-140))])])]), top3:d.action([q(240), d.repeat(2, [d.ia(d.direction(60), m, d.ea({frame:2}), d.offsetX(140)), d.repeat(20, [q(13), d.ia(d.direction(-4, "sequence"), m, d.ea({frame:2}), d.offsetX(140))])])]), top4:d.action([q(300), d.repeat(1, [d.ia(d.direction(-60), m, d.ea({frame:2}), d.offsetX(-140)), d.repeat(20, [q(12), d.ia(d.direction(4, "sequence"), m, d.ea({frame:2}), d.offsetX(-140))])])]), top5:d.action([q(300), 
  d.repeat(1, [d.ia(d.direction(60), m, d.ea({frame:2}), d.offsetX(140)), d.repeat(20, [q(12), d.ia(d.direction(-4, "sequence"), m, d.ea({frame:2}), d.offsetX(140))])])]), top6:d.action([d.repeat(6, [d.repeat(3, [c(5, -60, -40, u, d.ea({frame:4, pa:k}), d.offsetX(-140)), c(5, -20, -10, u, d.ea({frame:4, pa:k}), d.offsetX(-140)), c(5, 10, 20, u, d.ea({frame:4, pa:k}), d.offsetX(-140)), c(5, 40, 60, u, d.ea({frame:4, pa:k}), d.offsetX(-140)), d.wait(4)]), q(60), d.repeat(3, [c(5, -60, -40, u, d.ea({frame:4, 
  pa:k}), d.offsetX(140)), c(5, -20, -10, u, d.ea({frame:4, pa:k}), d.offsetX(140)), c(5, 10, 20, u, d.ea({frame:4, pa:k}), d.offsetX(140)), c(5, 40, 60, u, d.ea({frame:4, pa:k}), d.offsetX(140)), d.wait(4)]), q(60)])])});
  z["nagisa-2-1"] = new r.ta({top0:d.action([c(60, -60, 60, u, d.ea({frame:0})), d.repeat(10, [c(3, -60, 60, u, d.ea({frame:0})), q(20)])])});
  z["nagisa-2-2"] = new r.ta({top0:d.action([c(60, -60, 60, u, d.ea({frame:0})), d.repeat(10, [c(5, -60, 60, u, d.ea({frame:0})), q(20)])])});
  z["nagisa-2-3"] = new r.ta({top0:d.action([c(60, -60, 60, u, d.ea({frame:0})), d.repeat(10, [c(73, -60, 60, u, d.ea({frame:0})), q(20)])])});
  z["nagisa-3-1"] = new r.ta({top0:d.action([d.repeat(10, [c(60, -60, 60, t, d.ea), q(20)]), q(100)])});
  z.ra = function() {
    for(var a = 0;800 > a;a++) {
      V.push(J())
    }
    a = z.qd = tm.Sa.Vb.Hc;
    a.oe = function(a) {
      return!(a instanceof J) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.df = function(a) {
      var b = V.shift(0);
      if(b) {
        return N.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.pa ? (b.scaleX = 1, b.scaleY = 1, b.Tb = n, b.update = function() {
          this.rotation += 15
        }) : (b.scaleX = 0.8, b.scaleY = 1.5, b.Tb = k), b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.gf = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.dc = 4;
    r.ka.ya.$rank = 0;
    r.ka.ya.$hyperOff = 1
  };
  z.erase = function(a, b) {
    for(var c = [].concat(N), d = 0, f = c.length;d < f;d++) {
      a && sa(!!b).setPosition(c[d].x, c[d].y), c[d].$a()
    }
  };
  z.Fc = function() {
    for(var a = [].concat(N), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  J = tm.createClass({superClass:tm.app.Sprite, sa:0, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("added", function() {
      this.sa = C.Sf
    });
    this.addEventListener("removed", function() {
      V.push(this);
      var a = N.indexOf(this);
      -1 !== a && N.splice(a, 1);
      this.clearEventListener("enterframe")
    })
  }, $a:function() {
    var a = E(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var V = [], N = J.La = []
})();
(function() {
  function a(a) {
    var c = [].concat(a._listeners.enterframe);
    if(c) {
      for(var f = 0, g = c.length;f < g;f++) {
        c[f] && c[f].Dd && a.removeEventListener("enterframe", c[f])
      }
    }
  }
  la = tm.createClass({superClass:G, th:k, pc:0, Kd:l, init:function(a, c, f) {
    this.Kd = c;
    this.superInit(a, this.Kd[0], f);
    this.pc = this.sa;
    this.addEventListener("added", function() {
      this.$.Ob = this;
      this.$.Sh();
      this.tweener.wait(1E3).call(function() {
        this.$.Ic = n
      }.bind(this))
    });
    this.addEventListener("removed", function() {
      this.$.Ob = l;
      this.$.ph();
      var a = tm.app.Object2D();
      a.tweener.wait(7E3).call(function() {
        this.$.Ug()
      }.bind(this));
      a.addChildTo(this.$.bb)
    })
  }, Gb:function(b) {
    var c = this.sa;
    if(this.superClass.prototype.Gb.call(this, b)) {
      return this.$.Ic = k, xa(), k
    }
    this.sa <= 0.6 * this.pc && 0.6 * this.pc < c ? (a(this), this.tweener.clear(), A.td(this.x, this.y, this.$), z.erase(k, this.$.na), this.aa = this.Kd[1], this.aa.ra.call(this)) : this.sa <= 0.2 * this.pc && 0.2 * this.pc < c && (a(this), this.tweener.clear(), A.td(this.x, this.y, this.$), z.erase(k, this.$.na), this.aa = this.Kd[2], this.aa.ra.call(this), P("voJacms"))
  }})
})();
var R, S, Aa, U, Fa;
R = function(a, b, c) {
  return a < b ? b : a > c ? c : a
};
Fa = Math.PI / 180;
Aa = function(a) {
  return a * Fa
};
U = function(a, b) {
  return window.Math.floor(Math.random() * (b - a + 1)) + a
};
S = function(a, b) {
  return window.Math.random() * (b - a) + a
};

