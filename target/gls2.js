/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function f(b) {
  throw b;
}
var i = void 0, k = !0, l = null, m = !1;
function p() {
  return function() {
  }
}
var r = {Hd:this};
(function() {
  function b(a, c) {
    for(var b = 0, g = a.length;b < g;b++) {
      if(a[b].label == c) {
        return a[b]
      }
    }
  }
  r.ya = function(a) {
    this.type = "none";
    this.root = this;
    this.ra = [];
    this.Xb = [];
    this.cc = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof r.za ? this.ra.push(a[b]) : a[b] instanceof r.Pa ? this.Xb.push(a[b]) : a[b] instanceof r.ob && this.cc.push(a[b]))
      }
      a = 0;
      for(b = this.ra.length;a < b;a++) {
        this.ra[a].Ba(this)
      }
      a = 0;
      for(b = this.Xb.length;a < b;a++) {
        this.Xb[a].Ba(this)
      }
      a = 0;
      for(b = this.cc.length;a < b;a++) {
        this.cc[a].Ba(this)
      }
    }
  };
  r.ya.prototype.od = function(a) {
    return b(this.ra, a)
  };
  r.ya.prototype.oe = function() {
    for(var a = [], b = 0, d = this.ra.length;b < d;b++) {
      var g = this.ra[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  r.ya.prototype.ge = function(a) {
    var b;
    if(b = this.od(a)) {
      return b
    }
    f(Error("action labeled '" + a + "' is undefined."))
  };
  r.ya.prototype.he = function(a) {
    return b(this.Xb, a)
  };
  r.ya.prototype.ie = function(a) {
    var b;
    if(b = this.he(a)) {
      return b
    }
    f(Error("bullet labeled '" + a + "' is undefined."))
  };
  r.ya.prototype.je = function(a) {
    return b(this.cc, a)
  };
  r.ya.prototype.ke = function(a) {
    var b;
    if(b = this.je(a)) {
      return b
    }
    f(Error("fire labeled '" + a + "' is undefined."))
  };
  r.Pa = function() {
    this.root = this.label = l;
    this.direction = new r.Ja(0);
    this.speed = new r.Ka(1);
    this.ra = [];
    this.ua = {};
    this.fa = {}
  };
  r.Pa.prototype.clone = function(a) {
    var b = new r.Pa;
    b.label = this.label;
    b.root = this.root;
    b.ra = this.ra;
    b.direction = new r.Ja(a.ta(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new r.Ka(a.ta(this.speed.value));
    b.speed.type = this.speed.type;
    b.ua = this.ua;
    b.fa = a.fa;
    return b
  };
  r.Pa.prototype.Ba = function(a) {
    this.root = a;
    for(var b = 0, d = this.ra.length;b < d;b++) {
      this.ra[b].Ba(a)
    }
  };
  r.Jb = function(a) {
    this.root = l;
    this.label = a;
    this.pa = []
  };
  r.Jb.prototype.clone = function(a) {
    var b = a.fa;
    a.fa = a.wc(this.pa);
    var d = this.root.ie(this.label).clone(a);
    a.fa = b;
    return d
  };
  r.Jb.prototype.Ba = function(a) {
    this.root = a
  };
  r.qa = function() {
    this.xa = ""
  };
  r.qa.prototype.Ba = function(a) {
    this.root = a
  };
  r.za = function() {
    this.xa = "action";
    this.root = this.label = l;
    this.Ea = [];
    this.pa = []
  };
  r.za.prototype = new r.qa;
  r.za.prototype.Ba = function(a) {
    this.root = a;
    for(var b = 0, d = this.Ea.length;b < d;b++) {
      this.Ea[b].Ba(a)
    }
  };
  r.za.prototype.clone = function() {
    var a = new r.za;
    a.label = this.label;
    a.root = this.root;
    a.Ea = this.Ea;
    return a
  };
  r.nb = function(a) {
    this.xa = "actionRef";
    this.label = a;
    this.root = l;
    this.pa = []
  };
  r.nb.prototype = new r.qa;
  r.nb.prototype.clone = function() {
    var a = new r.za;
    a.root = this.root;
    a.Ea.push(this);
    return a
  };
  r.ob = function() {
    this.xa = "fire";
    this.ma = this.speed = this.direction = this.root = this.label = l;
    this.ua = new r.oc
  };
  r.ob.prototype = new r.qa;
  r.ob.prototype.Ba = function(a) {
    this.root = a;
    this.ma && this.ma.Ba(a)
  };
  r.pc = function(a) {
    this.xa = "fireRef";
    this.label = a;
    this.pa = []
  };
  r.pc.prototype = new r.qa;
  r.Kb = function() {
    this.xa = "changeDirection";
    this.direction = new r.Ja;
    this.va = 0
  };
  r.Kb.prototype = new r.qa;
  r.Lb = function() {
    this.xa = "changeSpeed";
    this.speed = new r.Ka;
    this.va = 0
  };
  r.Lb.prototype = new r.qa;
  r.Ib = function() {
    this.xa = "accel";
    this.Ha = new r.qc;
    this.Ia = new r.uc;
    this.va = 0
  };
  r.Ib.prototype = new r.qa;
  r.Nb = function(a) {
    this.xa = "wait";
    this.value = a || 0
  };
  r.Nb.prototype = new r.qa;
  r.tc = function() {
    this.xa = "vanish"
  };
  r.tc.prototype = new r.qa;
  r.Mb = function() {
    this.xa = "repeat";
    this.Dd = 0;
    this.action = l;
    this.pa = []
  };
  r.Mb.prototype = new r.qa;
  r.Mb.prototype.Ba = function(a) {
    this.root = a;
    this.action && this.action.Ba(a)
  };
  r.mc = function(a, b) {
    this.xa = "bind";
    this.Ge = a;
    this.ee = b
  };
  r.mc.prototype = new r.qa;
  r.sc = function(a, b) {
    this.xa = "notify";
    this.ae = a;
    this.pa = b || l
  };
  r.sc.prototype = new r.qa;
  r.Gd = new r.qa;
  r.Ja = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  r.Ka = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  r.qc = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  r.uc = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  r.oc = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.qb = k;
    a.qb !== i && (this.qb = !!a.qb)
  };
  r.Tc = function(a) {
    this.value = a || 0
  };
  r.Uc = function(a) {
    this.value = a || 0
  };
  r.Sc = function(a) {
    this.value = !!a
  }
})();
r.Ra = function(b, a) {
  this.$c = b;
  this.Pb = [];
  this.Sa = -1;
  this.sa = l;
  this.fa = {};
  this.Ob = {$rank:a || 0}
};
r.Ra.prototype.next = function() {
  this.Sa += 1;
  if(this.sa !== l) {
    var b = this.sa.Ea[this.Sa];
    if(b !== i) {
      if(b instanceof r.za) {
        return this.xb(), this.sa = b, this.fa = this.vc(), this.next()
      }
      if(b instanceof r.nb) {
        return this.xb(), this.sa = this.$c.ge(b.label), this.fa = this.wc(b.pa), this.next()
      }
      if(b instanceof r.Mb) {
        return this.fa.tb = 0, this.fa.yd = this.ta(b.Dd) | 0, this.xb(), this.sa = b.action.clone(), this.fa = this.vc(), this.next()
      }
      if(b instanceof r.ob) {
        var a = new r.ob;
        a.ma = b.ma.clone(this);
        b.direction !== l && (a.direction = new r.Ja(this.ta(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new r.Ka(this.ta(b.speed.value)), a.speed.type = b.speed.type);
        a.ua = b.ua;
        return a
      }
      return b instanceof r.pc ? (this.xb(), this.sa = new r.za, this.sa.Ea = [this.$c.ke(b.label)], this.fa = this.wc(b.pa), this.next()) : b instanceof r.Kb ? (a = new r.Kb, a.direction.type = b.direction.type, a.direction.value = this.ta(b.direction.value), a.va = this.ta(b.va), a) : b instanceof r.Lb ? (a = new r.Lb, a.speed.type = b.speed.type, a.speed.value = this.ta(b.speed.value), a.va = this.ta(b.va), a) : b instanceof r.Ib ? (a = new r.Ib, a.Ha.type = b.Ha.type, a.Ha.value = this.ta(b.Ha.value), 
      a.Ia.type = b.Ia.type, a.Ia.value = this.ta(b.Ia.value), a.va = this.ta(b.va), a) : b instanceof r.Nb ? new r.Nb(this.ta(b.value)) : b instanceof r.tc ? b : b instanceof r.mc ? (this.fa["$" + b.Ge] = this.ta(b.ee), r.Gd) : b instanceof r.sc ? b : l
    }
    this.Td();
    if(this.sa === l) {
      return l
    }
    if((b = this.sa.Ea[this.Sa]) && "repeat" == b.xa) {
      this.fa.tb++, this.fa.tb < this.fa.yd && (this.xb(), this.sa = b.action.clone(), this.fa = this.vc())
    }
    return this.next()
  }
  return l
};
r.Ra.prototype.xb = function() {
  this.Pb.push({action:this.sa, cursor:this.Sa, scope:this.fa});
  this.Sa = -1
};
r.Ra.prototype.Td = function() {
  var b = this.Pb.pop();
  b ? (this.Sa = b.cursor, this.sa = b.action, this.fa = b.scope) : (this.Sa = -1, this.sa = l, this.fa = {})
};
r.Ra.prototype.ta = function(b) {
  var a;
  if("number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.fa[b]) || (a = this.Ob[b])) {
      return a
    }
    if("$rand" == b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var c in this.Ob) {
    this.Ob.hasOwnProperty(c) && (a[c] = this.Ob[c])
  }
  for(c in this.fa) {
    this.fa.hasOwnProperty(c) && (a[c] = this.fa[c])
  }
  a.$rand = Math.random();
  (c = this.Pb[this.Pb.length - 1]) && (a.$loop = {index:c.scope.tb, count:c.scope.tb + 1, first:0 === c.scope.tb, last:c.scope.tb + 1 >= c.scope.yd});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
r.Ra.prototype.wc = function(b) {
  var a = {};
  if(b) {
    for(var c = 0, d = b.length;c < d;c++) {
      a["$" + (c + 1)] = this.ta(b[c])
    }
  }else {
    for(c in this.fa) {
      this.fa.hasOwnProperty(c) && (a[c] = this.fa[c])
    }
  }
  return a
};
r.Ra.prototype.vc = function() {
  var b = {}, a;
  for(a in this.fa) {
    this.fa.hasOwnProperty(a) && (b[a] = this.fa[a])
  }
  return b
};
r.ya.prototype.Fc = function(b, a) {
  var c = new r.Ra(this, a), d = this.od(b);
  d && (c.sa = d);
  return c
};
r.Pa.prototype.Fc = function(b) {
  b = new r.Ra(this.root, b);
  var a = new r.za;
  a.root = this.root;
  a.Ea = this.ra;
  b.sa = a;
  b.fa = this.fa;
  return b
};
r.ga = function(b) {
  b = b || "";
  for(var a in r.ga) {
    r.ga.hasOwnProperty(a) && (r.Hd[b + a] = r.ga[a])
  }
};
r.ga.action = function(b) {
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
  var d = new r.za;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof r.qa)
    }) && f(Error("argument type error.")), d.Ea = b
  }else {
    a = 0;
    for(c = arguments.length;a < c;a++) {
      arguments[a] instanceof r.qa ? d.Ea[a] = arguments[a] : f(Error("argument type error."))
    }
  }
  return d
};
r.ga.Le = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("label is required."));
  d = new r.nb(b);
  if(a instanceof Array) {
    d.pa = a
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.pa.push(arguments[c])
    }
  }
  return d
};
r.ga.ma = function(b, a, c, d) {
  for(var g = 0, h = arguments.length;g < h;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  h = new r.Pa;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof r.Ja ? h.direction = arguments[g] : arguments[g] instanceof r.Ka ? h.speed = arguments[g] : arguments[g] instanceof r.za ? h.ra.push(arguments[g]) : arguments[g] instanceof r.nb ? h.ra.push(arguments[g]) : arguments[g] instanceof Array ? h.ra.push(r.ga.action(arguments[g])) : arguments[g] instanceof Object ? h.ua = arguments[g] : "string" === typeof arguments[g] && (h.label = arguments[g])
  }
  return h
};
r.ga.Oe = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("label is required."));
  d = new r.Jb(b);
  if(a instanceof Array) {
    d.pa = a
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.pa.push(arguments[c])
    }
  }
  return d
};
r.ga.bc = function(b, a, c, d) {
  for(var g = 0, h = arguments.length;g < h;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  h = new r.ob;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof r.Ja ? h.direction = arguments[g] : arguments[g] instanceof r.Ka ? h.speed = arguments[g] : arguments[g] instanceof r.Pa ? h.ma = arguments[g] : arguments[g] instanceof r.Jb ? h.ma = arguments[g] : arguments[g] instanceof r.oc ? h.ua = arguments[g] : arguments[g] instanceof r.Tc ? h.ua.offsetX = arguments[g].value : arguments[g] instanceof r.Uc ? h.ua.offsetY = arguments[g].value : arguments[g] instanceof r.Sc && (h.ua.qb = arguments[g].value)
  }
  h.ma === i && f(Error("bullet (or bulletRef) is required."));
  return h
};
r.ga.Ve = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("label is required."));
  d = new r.pc(b);
  if(a instanceof Array) {
    d.pa = a
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.pa.push(arguments[c])
    }
  }
  return d
};
r.ga.Pe = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("direction is required."));
  a === i && f(Error("term is required."));
  c = new r.Kb;
  c.direction = b instanceof r.Ja ? b : new r.Ja(b);
  c.va = a;
  return c
};
r.ga.Qe = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("speed is required."));
  a === i && f(Error("term is required."));
  c = new r.Lb;
  c.speed = b instanceof r.Ka ? b : new r.Ka(b);
  c.va = a;
  return c
};
r.ga.Ke = function(b, a, c) {
  for(var d = 0, g = arguments.length;d < g;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  g = new r.Ib;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof r.qc ? g.Ha = b : arguments[d] instanceof r.uc ? g.Ia = a : g.va = arguments[d]
  }
  g.Ha === i && g.Ia === i && f(Error("horizontal or vertical is required."));
  g.va === i && f(Error("term is required."));
  return g
};
r.ga.wait = function(b) {
  for(var a = 0, c = arguments.length;a < c;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && f(Error("value is required."));
  return new r.Nb(b)
};
r.ga.gf = function() {
  return new r.tc
};
r.ga.repeat = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("times is required."));
  a === i && f(Error("action is required."));
  d = new r.Mb;
  d.Dd = b;
  if(a instanceof r.za || a instanceof r.nb) {
    d.action = a
  }else {
    if(a instanceof Array) {
      d.action = r.ga.action(a)
    }else {
      for(var g = [], c = 1;c < arguments.length;c++) {
        g.push(arguments[c])
      }
      d.action = r.ga.action(g)
    }
  }
  return d
};
r.ga.Ne = function(b, a) {
  return new r.mc(b, a)
};
r.ga.df = function(b, a) {
  return new r.sc(b, a)
};
r.ga.direction = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("value is required."));
  c = new r.Ja(b);
  a !== i && (c.type = a);
  return c
};
r.ga.speed = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("value is required."));
  c = new r.Ka(b);
  a && (c.type = a);
  return c
};
r.ga.Ha = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("value is required."));
  c = new r.qc(b);
  a && (c.type = a);
  return c
};
r.ga.Ia = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && f(Error("value is required."));
  c = new r.uc(b);
  a && (c.type = a);
  return c
};
r.ga.Ue = function(b) {
  return new r.oc(b)
};
r.ga.offsetX = function(b) {
  return new r.Tc(b)
};
r.ga.offsetY = function(b) {
  return new r.Uc(b)
};
r.ga.qb = function(b) {
  return new r.Sc(b)
};
tm.wa = tm.wa || {};
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
  tm.wa.ab = tm.createClass({init:function(a) {
    a || f(Error("argument is invalid.", a));
    this.Xc = a
  }, Yb:function(a, b) {
    var c = this.Xc.oe();
    if(b === i && 0 < c.length) {
      for(var d = [], n = 0, J = c.length;n < J;n++) {
        d[d.length] = this.Yc(a, c[n])
      }
      for(var v = function() {
        for(var a = d.length;a--;) {
          d[a].call(this)
        }
        v.Bc == d.length && (v.zb = k, this.dispatchEvent(tm.event.Event("completeattack")))
      }, n = d.length;n--;) {
        d[n].lc = v
      }
      v.Bc = 0;
      v.ed = function() {
        this.Bc++
      };
      v.Bc = 0;
      v.zb = m;
      v.Gc = k;
      return v
    }
    return this.Yc(a, b)
  }, Yc:function(a, b) {
    function c() {
      c.da += 1;
      this.da = c.da;
      var a = c.Cc, b = c.Sd;
      if(b) {
        if(c.da < c.zc ? c.direction += c.rb : c.da === c.zc && (c.direction = c.Ta), c.da < c.Ac ? c.speed += c.Gb : c.da === c.Ac && (c.speed = c.vb), c.da < c.xc ? (c.jb += c.Sb, c.lb += c.Tb) : c.da === c.xc && (c.jb = c.Qb, c.lb = c.Rb), this.x += Math.cos(c.direction) * c.speed * a.kb, this.y += Math.sin(c.direction) * c.speed * a.kb, this.x += c.jb * a.kb, this.y += c.lb * a.kb, a.Hc(this)) {
          if(a.wb || this.wb) {
            this.rotation = (c.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = c.speed
          }
          if(!(c.da < c.Ed || c.zb)) {
            for(var g;g = c.Fd.next();) {
              switch(g.xa) {
                case "fire":
                  b.Pd.call(this, g, a, c, b);
                  break;
                case "wait":
                  a = 0;
                  c.Ed = "number" === typeof g.value ? c.da + g.value : 0 !== (a = ~~g.value) ? c.da + a : c.da + eval(g.value);
                  return;
                case "changeDirection":
                  b.Kd.call(this, g, a, c);
                  break;
                case "changeSpeed":
                  b.Ld.call(this, g, c);
                  break;
                case "accel":
                  b.Id.call(this, g, c);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  b.Qd.call(this, g)
              }
            }
            c.zb = k;
            c.lc ? c.lc.ed() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), c.zb = k, c.lc ? c.lc.ed() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    a = function(a) {
      var b = {}, c = tm.wa.ab.Bb, g;
      for(g in c) {
        c.hasOwnProperty(g) && (b[g] = c[g])
      }
      for(g in a) {
        a.hasOwnProperty(g) && (b[g] = a[g])
      }
      return b
    }(a);
    a.target || f(Error("target is undefined in config."));
    b = b || "top";
    "string" === typeof b ? c.Fd = this.Xc.Fc(b, a.Pc) : b instanceof r.Pa ? c.Fd = b.Fc(a.Pc) : (window.console.error(a, b), f(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    c.Sd = this;
    c.Cc = a;
    c.Ed = -1;
    c.zb = m;
    c.direction = 0;
    c.ud = 0;
    c.speed = 0;
    c.xd = 0;
    c.jb = 0;
    c.lb = 0;
    c.rb = 0;
    c.Ta = 0;
    c.zc = -1;
    c.Gb = 0;
    c.vb = 0;
    c.Ac = -1;
    c.Sb = 0;
    c.Qb = 0;
    c.Tb = 0;
    c.Rb = 0;
    c.xc = -1;
    c.da = -1;
    c.Gc = k;
    return c
  }, Od:function(a) {
    function b() {
      this.x += b.fd;
      this.y += b.gd;
      b.Cc.Hc(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    }
    a = function(a) {
      var b = {}, c = tm.wa.ab.Bb, g;
      for(g in c) {
        c.hasOwnProperty(g) && (b[g] = c[g])
      }
      for(g in a) {
        a.hasOwnProperty(g) && (b[g] = a[g])
      }
      return b
    }(a);
    a.target || f(Error("target is undefined in config."));
    b.Cc = a;
    b.direction = 0;
    b.speed = 0;
    b.fd = 0;
    b.gd = 0;
    b.Gc = k;
    return b
  }, Pd:function(b, c, d, q) {
    if(this.xe === i || this.ac) {
      var n = {label:b.ma.label}, J;
      for(J in b.ma.ua) {
        n[J] = b.ma.ua[J]
      }
      if(n = c.cd(n)) {
        var v = (J = !!b.ma.ra.length) ? q.Od(c) : q.Yb(c, b.ma), $ = this, P = {x:this.x + b.ua.offsetX, y:this.y + b.ua.offsetY};
        d.ud = v.direction = function(q) {
          var n = eval(q.value) * Math.DEG_TO_RAD;
          switch(q.type) {
            case "aim":
              return c.target ? b.ua.qb ? a(P, c.target) + n : a($, c.target) + n : n - Math.PI / 2;
            case "absolute":
              return n - Math.PI / 2;
            case "relative":
              return d.direction + n;
            default:
              return d.ud + n
          }
        }(b.direction || b.ma.direction);
        d.xd = v.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return d.speed + b;
            case "sequence":
              return d.xd + b;
            default:
              return b
          }
        }(b.speed || b.ma.speed);
        n.x = P.x;
        n.y = P.y;
        J && (v.fd = Math.cos(v.direction) * v.speed * c.kb, v.gd = Math.sin(v.direction) * v.speed * c.kb);
        n.wb = !!n.wb;
        if(c.wb || n.wb) {
          n.rotation = (v.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, n.speed = v.speed
        }
        n.addEventListener("enterframe", v);
        n.addEventListener("removed", function() {
          this.removeEventListener("enterframe", v);
          this.removeEventListener("removed", arguments.callee)
        });
        c.ad ? c.ad.addChild(n) : this.parent && this.parent.addChild(n)
      }
    }
  }, Kd:function(c, d, j) {
    var q = eval(c.direction.value) * Math.DEG_TO_RAD, n = eval(c.va);
    switch(c.direction.type) {
      case "aim":
        c = d.target;
        if(!c) {
          return
        }
        j.Ta = a(this, c) + q;
        j.rb = b(j.Ta - j.direction) / n;
        break;
      case "absolute":
        j.Ta = q - Math.PI / 2;
        j.rb = b(j.Ta - j.direction) / n;
        break;
      case "relative":
        j.Ta = j.direction + q;
        j.rb = b(j.Ta - j.direction) / n;
        break;
      case "sequence":
        j.rb = q, j.Ta = j.direction + j.rb * (n - 1)
    }
    j.zc = j.da + n
  }, Ld:function(a, b) {
    var c = eval(a.speed.value), d = eval(a.va);
    switch(a.speed.type) {
      case "absolute":
        b.vb = c;
        b.Gb = (b.vb - b.speed) / d;
        break;
      case "relative":
        b.vb = c + b.speed;
        b.Gb = (b.vb - b.speed) / d;
        break;
      case "sequence":
        b.Gb = c, b.vb = b.speed + b.Gb * d
    }
    b.Ac = b.da + d
  }, Id:function(a, b) {
    var c = eval(a.va);
    b.xc = b.da + c;
    if(a.Ha) {
      var d = eval(a.Ha.value);
      switch(a.Ha.type) {
        case "absolute":
        ;
        case "sequence":
          b.Sb = (d - b.jb) / c;
          b.Qb = d;
          break;
        case "relative":
          b.Sb = d, b.Qb = (d - b.jb) * c
      }
    }else {
      b.Sb = 0, b.Qb = b.jb
    }
    if(a.Ia) {
      switch(d = eval(a.Ia.value), a.Ia.type) {
        case "absolute":
        ;
        case "sequence":
          b.Tb = (d - b.lb) / c;
          b.Rb = d;
          break;
        case "relative":
          b.Tb = d, b.Rb = (d - b.lb) * c
      }
    }else {
      b.Tb = 0, b.Rb = b.lb
    }
  }, Qd:function(a) {
    var b = tm.event.Event(a.ae);
    if(a.pa) {
      for(var c in a.pa) {
        b[c] = a.pa[c]
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
  tm.wa.Zd = function(a) {
    var b = tm.app.Sprite(8, 8, c);
    b.label = a.label;
    return b
  };
  var d = l;
  tm.wa.$d = function(a) {
    d === l && (d = a.getRoot());
    return 0 <= a.x && a.x < APP.width && 0 <= a.y && a.y < APP.height
  };
  tm.wa.Se = function() {
    return k
  };
  tm.wa.ab.Bb = {cd:tm.wa.Zd, Hc:tm.wa.$d, Pc:0, wb:m, kb:2, target:l};
  r.ya.prototype.Yb = function(a) {
    return tm.wa.ab(this).Yb(a)
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
var s = l, t, u, w, z, A, B, C, D, E, F, G, H, I, K, L, M, aa = tm.createClass({superClass:tm.app.CanvasApp, ec:0, $e:0, Ub:1, ub:1, hd:1, nd:[1E9, 1E10], ba:l, init:function(b) {
  s !== l && f(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "black";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", soundExplode:"assets/sen_ge_taihou03.mp3"}, nextScene:function() {
    this.Rd();
    return t()
  }.bind(this)}))
}, Rd:function() {
  u.la();
  w.la();
  this.ba = z()
}, be:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.ec, "")
}});
tm.app.Label = tm.createClass({superClass:tm.app.Label, init:function(b, a) {
  this.superInit(b, a);
  this.setAlign("center");
  this.setBaseline("middle");
  this.setFontFamily("Orbitron");
  this.fillStyle = "white";
  this.isHitPoint = this.isHitPointRect
}, update:function(b) {
  this.alpha = 0.8 + 0.2 * Math.sin(0.1 * b.frame)
}});
function N() {
  if(0 !== s.ub) {
    var b = tm.asset.AssetManager.get("soundExplode");
    b.volume = 0.1 * s.ub;
    b && b.clone().play()
  }
}
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  A = tm.createClass({superClass:tm.app.Sprite, type:0, Ga:0, gb:k, jc:m, ba:l, pe:100, speed:4.5, fb:l, Xa:l, fc:l, Vb:l, gc:l, hc:l, init:function(a, b) {
    this.superInit("tex1", 64, 64);
    this.type = b;
    this.ba = a;
    tm.wa.ab.Bb.target = this;
    this.altitude = 10;
    this.Xa = B(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"}, 50);
    this.Xa.visible = m;
    this.Xa.addChildTo(a);
    this.Nd();
    this.fb = [{x:-70, y:20, d:0.1, $a:m, Ua:-0.7, v:k}, {x:-40, y:40, d:0.1, $a:m, Ua:-0.5, v:k}, {x:40, y:40, d:0.1, $a:k, Ua:0.5, v:k}, {x:70, y:20, d:0.1, $a:k, Ua:0.7, v:k}];
    this.Vb = tm.app.CanvasElement().addChildTo(this);
    for(var g = 0, h = this.fb.length;g < h;g++) {
      var j = this.fb[g];
      C(this, j).setPosition(j.x, j.y).addChildTo(this.Vb)
    }
    this.gc = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(100,100,255,0.0)"}, {offset:0.3, color:"rgba(100,100,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.7, color:"rgba(100,100,255,0.1)"}, {offset:1, color:"rgba(100,100,255,0.0)"}]).toStyle(), lineWidth:2}).addChildTo(this);
    this.gc.blendMode = "lighter";
    this.gc.update = function() {
      this.rotation += 2
    };
    this.hc = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(100,100,255,0.0)"}, {offset:0.3, color:"rgba(100,100,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.7, color:"rgba(100,100,255,0.1)"}, {offset:1, color:"rgba(100,100,255,0.0)"}]).toStyle(), lineWidth:2}).addChildTo(this);
    this.hc.blendMode = "lighter";
    this.hc.update = function() {
      this.rotation -= 2
    }
  }, Je:function() {
    return[{x:-70, y:20, d:0.1, $a:m, Ua:-0.7, v:k}, {x:-40, y:40, d:0.1, $a:m, Ua:-0.5, v:k}, {x:40, y:40, d:0.1, $a:k, Ua:0.5, v:k}, {x:70, y:20, d:0.1, $a:k, Ua:0.7, v:k}]
  }, Nd:function() {
    this.fc = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.fc.setFrameIndex(5);
    this.fc.blendMode = "lighter";
    this.fc.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Za:-1, Ec:m, sb:m, update:function(c) {
    b === l && (b = D(this.ba.Fa));
    var d = c.keyboard;
    if(this.gb) {
      var g = d.getKeyAngle();
      g !== l && (g = a[g], this.x += g.x * this.speed * (this.sb ? 0.75 : 1), this.y += g.y * this.speed * (this.sb ? 0.75 : 1));
      this.x = O(this.x, 5, 475);
      this.y = O(this.y, 5, 635);
      var g = d.getKey("c"), h = d.getKey("z");
      this.Za = g ? this.Za + 1 : this.Za - 1;
      this.Za = O(this.Za, -1, 10);
      this.sb = h && g || 10 === this.Za;
      this.Ec = !this.sb && (0 <= this.Za || h) && 0 === c.frame % 3;
      h && (this.Za = 0);
      this.Xa.x = this.x;
      this.Xa.y = this.y - 40;
      if(this.sb) {
        g = 0;
        for(h = this.fb.length;g < h;g++) {
          this.fb[g].v = m
        }
        this.Vb.rotation = 0
      }else {
        this.Xa.visible = m;
        g = 0;
        for(h = this.fb.length;g < h;g++) {
          this.fb[g].v = k
        }
      }
      this.Ec && (g = Math.sin(0.2 * c.frame), E(this.x - 7 - 6 * g, this.y - 5, -90).addChildTo(this.ba), E(this.x - 7 + 6 * g, this.y - 5, -90).addChildTo(this.ba), E(this.x + 7 - 6 * g, this.y - 5, -90).addChildTo(this.ba), E(this.x + 7 + 6 * g, this.y - 5, -90).addChildTo(this.ba));
      d.getKeyDown("x") && !this.ba.bf && 0 < this.ba.Wb && F(this, this.ba).setPosition(Math.clamp(this.x, 96, 384), Math.max(this.y - 320, 192))
    }
    this.gc.visible = this.hc.visible = 100 === this.pe;
    this.Yd(d);
    this.Jd(d);
    0 === c.frame % 2 && (b.clone().setPosition(this.x - 5, this.y + 20).addChildTo(this.ba), b.clone().setPosition(this.x + 5, this.y + 20).addChildTo(this.ba))
  }, Yd:function(a) {
    var b = this.Vb;
    b.rotation = this.gb && a.getKey("left") ? Math.max(b.rotation - 3, -40) : this.gb && a.getKey("right") ? Math.min(b.rotation + 3, 40) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0
  }, Jd:function(a) {
    this.gb && a.getKey("left") ? this.Ga = O(this.Ga - 0.2, -3, 3) : this.gb && a.getKey("right") ? this.Ga = O(this.Ga + 0.2, -3, 3) : 0 > this.Ga ? this.Ga = O(this.Ga + 0.2, -3, 3) : 0 < this.Ga && (this.Ga = O(this.Ga - 0.2, -3, 3));
    a = 3 + ~~this.Ga;
    this.setFrameIndex(a);
    return a
  }});
  C = tm.createClass({superClass:tm.app.AnimationSprite, eb:l, ca:l, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.eb = b;
    this.ca = a;
    this.altitude = 10;
    this.gotoAndPlay(b.$a ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.eb.v) {
      this.x = this.eb.x;
      this.y = this.eb.y;
      this.rotation = Math.radToDeg(this.eb.d * this.eb.Ua);
      var d = this.parent.localToGlobal(this);
      this.eb.v && 0 === a.frame % 2 && b.clone().setPosition(d.x, d.y).addChildTo(a.ba);
      this.ca.Ec && (E(d.x - 4, d.y, this.parent.rotation + this.rotation - 90).addChildTo(a.ba), E(d.x + 4, d.y, this.parent.rotation + this.rotation - 90).addChildTo(a.ba))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  E = tm.createClass({superClass:tm.app.Sprite, speed:20, pb:1, init:function(c, d, g) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    var h = Q(g);
    this.He = Math.cos(h) * this.speed;
    this.Ie = Math.sin(h) * this.speed;
    this.setPosition(c, d);
    this.rotation = g + 90;
    this.addEventListener("added", function() {
      a.push(this)
    });
    this.addEventListener("removed", function() {
      var b = a.indexOf(this);
      -1 !== b && a.splice(b, 1)
    });
    this.boundingRadius = 32;
    b === l && (b = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    this.setFrameIndex(2, 64, 64)
  }, update:function() {
    this.x += this.He;
    this.y += this.Ie;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, Cb:function(a) {
    for(var d = 0;d < a;d++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), h = R(2, 8), j = 2 * Math.random() * Math.PI;
      g.ja = Math.cos(j) * h;
      g.ka = Math.sin(j) * h;
      g.scaleX = g.scaleY = (R(0.1, 0.5) + R(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.ja;
        this.y += this.ka;
        this.ja *= 0.9;
        this.ka *= 0.9
      })
    }
  }});
  E.yb = function() {
    for(var b = [].concat(a), d = 0, g = b.length;d < g;d++) {
      b[d].remove()
    }
  };
  var a = E.La = []
})();
(function() {
  var b = l;
  B = tm.createClass({superClass:tm.app.Sprite, ca:l, ba:l, pb:10, Da:0, frame:0, Cd:l, color:l, Vd:m, head:l, pd:l, bd:l, init:function(a, b, d) {
    this.ca = a;
    this.ba = a.ba;
    var g = this;
    this.Cd = b;
    this.superInit(b.redBody, d, 100);
    this.boundingWidth = d;
    this.boundingHeightBottom = 1;
    this.ef = 0;
    this.origin.y = 1;
    a = this.bd = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
    a.y = 60;
    a.addChildTo(this);
    (this.pd = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
    b = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
    b.addChildTo(this);
    b.update = function() {
      this.y = g.Da - g.y;
      -10 < this.y && (this.y = -10);
      this.visible = 0 < g.Da
    };
    this.Ce("blue")
  }, Ce:function(a) {
    this.color = a;
    this.image = tm.asset.AssetManager.get(this.Cd[this.color + "Body"]);
    this.srcRect.x = 0;
    this.srcRect.y = 0;
    this.srcRect.width = this.image.width / 16;
    this.bd.gotoAndPlay(this.color);
    this.pd.gotoAndPlay(this.color);
    this.head.gotoAndPlay(this.color);
    b = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element);
    return this
  }, Cb:function(a, c) {
    c = c || this.Da;
    for(var d = 0;d < a;d++) {
      var g = b.clone().setPosition(this.x, c).addChildTo(this.ba), h = R(8, 14), j = R(0, Math.PI);
      g.ja = Math.cos(j) * h;
      g.ka = Math.sin(j) * h;
      g.scaleX = g.scaleY = (R(0.5, 1.5) + R(0.5, 1.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.ja;
        this.y += this.ka;
        this.ja *= 0.95;
        this.ka *= 0.95
      })
    }
  }, me:function(a, c, d) {
    c = c || this.x;
    d = d || this.Da;
    for(var g = 0;g < a;g++) {
      var h = b.clone().setPosition(c, d).addChildTo(this.ba), j = R(12, 20), q = R(0, Math.PI);
      h.ja = Math.cos(q) * j;
      h.ka = Math.sin(q) * j;
      h.scaleX = h.scaleY = (R(1, 3) + R(1, 3)) / 2;
      h.addEventListener("enterframe", function() {
        this.x += this.ja;
        this.y += this.ka;
        this.ja *= 0.95;
        this.ka *= 0.95
      })
    }
  }, update:function(a) {
    (this.visible = this.ca.sb) ? (this.Da = Math.max(0, this.Da - 40), this.height = this.y - this.Da, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Da = this.y - 40;
    this.Vd = this.visible
  }, draw:function(a) {
    var b = this.srcRect, d = this._image.element;
    b.x = b.width * this.frame;
    a.context.drawImage(d, b.x, b.height - this.height, b.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Ze:function() {
    return this.Da
  }, De:function(a) {
    this.Da = a;
    this.head.update()
  }});
  B.prototype.getter("boundingHeightTop", function() {
    return this.position.y - this.Da
  })
})();
(function() {
  F = tm.createClass({superClass:tm.app.Object2D, ba:l, init:function(a, c) {
    this.superInit();
    this.ca = a;
    this.ca.jc = k;
    this.ba = c;
    this.ba.Wb -= 1;
    this.Bd = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Bd.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Bd));
    this.Ab = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.Ab.gotoAndPlay("animation");
    this.Ab.blendMode = "lighter";
    this.Ab.setScale(0.1, 0.1);
    this.Ab.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = Math.randf(0.9, 1.1)
      }
    }.bind(this.Ab));
    this.Ae = G(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element);
    this.r = this.a = 0;
    this.b = 8;
    this.da = 0;
    this.Qc = 1;
    this.addEventListener("added", function() {
      b.push(this)
    });
    this.addEventListener("removed", function() {
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.addChildTo(this.ba)
  }, update:function() {
    u.erase();
    for(var a = 0;a < this.b;a++) {
      var b = this.a * this.Qc + 2 * a * Math.PI / this.b;
      this.Ae.clone().setPosition(Math.cos(b) * this.r + this.x, Math.sin(b) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.02 * this.da;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? (this.ca.jc = m, this.remove()) : Math.PI < a ? (this.b = 16, this.da += 3.6, this.Qc = -1) : (this.b = 8, this.da += 1.8, this.Qc = 1)
  }});
  F.pb = 2;
  var b = F.La = []
})();
var S = tm.createClass({ff:0, sd:0, ld:0, ca:l, ba:l, frame:0, background:l, init:function(b) {
  var a = this.ba = b;
  this.ca = b.ca;
  a.Fa.direction = 0.5 * Math.PI;
  a.Fa.speed = 3.2;
  this.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"#030"}, {offset:1, color:"#010"}]).toStyle();
  this.frame = 0
}, update:function() {
  var b = [], a;
  for(a in H) {
    b.push(a)
  }
  b = H[b.random()];
  if(200 < this.frame && 0 === this.frame % 300) {
    a = 0;
    for(var c = b.length;a < c;a++) {
      this.qe(b[a])
    }
  }
  this.frame += 1
}, qe:function(b) {
  var a = I.Be.shift();
  a ? (this.ld += 1, a.la(this.ba, this, b.aa, b.$).setPosition(b.x, b.y).addChildTo(this.ba).ib()) : console.warn("\u6575\u304c\u8db3\u308a\u306a\u3044\uff01")
}, re:function() {
  this.sd += 1
}});
S.create = function(b) {
  return S(b)
};
w = {la:function() {
  ba();
  w.explosion = Array.range(0, 2).map(function(b) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  w.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  w.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  w.particle16 = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Cb:function(b, a, c) {
  b = w.particle16.clone().setPosition(b, a).addChildTo(c);
  a = R(5, 20);
  c = R(Math.PI, 2 * Math.PI);
  b.ja = Math.cos(c) * a;
  b.ka = Math.sin(c) * a;
  b.scaleX = b.scaleY = (R(0.1, 0.5) + R(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.ja;
    this.y += this.ka;
    this.ja *= 0.9;
    this.ka *= 0.9
  })
}, ne:function(b, a, c) {
  var d = tm.app.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  d.image = w.shockwaveImage;
  d.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
}, de:function(b, a, c) {
  N();
  var d = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.Db = k;
  d.addChildTo(c);
  w.ne(b, a, c)
}, ce:function(b, a, c) {
  N();
  var d = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.y -= 0.8
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.Db = k;
  d.addChildTo(c);
  d = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.y -= 0.5
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  d.Db = k;
  d.addChildTo(c);
  d = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.y -= 0.5
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  d.Db = k;
  d.addChildTo(c)
}, Te:function(b, a, c) {
  N();
  for(var d = 0, g = T(5, 10);d < g;d++) {
    var h = w.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    h.Db = k;
    h.addChildTo(c)
  }
  for(d = 0;10 > d;d++) {
    w.Cb(b, a, c)
  }
}};
function U(b, a) {
  var c = b.x + b.boundingWidthRight, d = b.y - b.boundingHeightTop, g = b.y + b.boundingHeightBottom, h = a.x - a.boundingWidthLeft, j = a.y - a.boundingHeightTop, q = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && c > h && d < q && g > j
}
;var V = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Ee:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}, update:function(b) {
  b.pointing.getPointingEnd() && ca(b.pointing).addChildTo(this)
}}), ca = tm.createClass({superClass:tm.app.CircleShape, init:function(b) {
  this.superInit(150, 150, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(75, 75, 0, 75, 75, 75).addColorStopList([{offset:0, color:"rgba(255,255,255,0.0)"}, {offset:0.6, color:"rgba(255,255,255,0.0)"}, {offset:1, color:"rgba(255,255,255,0.8)"}]).toStyle()});
  this.setPosition(b.x, b.y);
  this.width = this.height = 1;
  this.tweener.clear().to({width:150, height:150, alpha:0}, 300, "easeOutQuad").call(function() {
    this.remove()
  }.bind(this))
}});
var da = tm.createClass({superClass:V, titleText:l, menu:l, descriptions:l, showExit:m, title:l, selections:[], description:l, box:l, cursor:l, _selected:0, _opened:m, _finished:m, init:function(b, a, c, d, g) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~c;
  this.showExit = !!g;
  this.descriptions = d ? d : [].concat(a);
  this.showExit && (a.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  b = Math.max(50 * (1 + a.length), 50) + 40;
  this.box = tm.app.RectangleShape(384, b, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"rgba(1,2,48,0.8)"}).setPosition(240, 320);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:384, height:b}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.app.Label("", 14).setPosition(240, 630).addChildTo(this)
}, _onOpen:function() {
  var b = 320 - 25 * this.menu.length;
  this.title = tm.app.Label(this.titleText, 30).setPosition(240, b).addChildTo(this);
  this.selections = this.menu.map(function(a, c) {
    var d = this;
    b += 50;
    var g = tm.app.Label(a).setPosition(240, b).addChildTo(this);
    g.interactive = k;
    g.addEventListener("touchend", function() {
      d._selected === c ? d.closeDialog(d._selected) : d._selected = c
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"))
  }
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments);
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("space") ? this.closeDialog(this._selected) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = O(this._selected, 0, this.selections.length - 1)) : b.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = 
  O(this._selected, 0, this.selections.length - 1)))
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
}, draw:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function W(b, a, c, d, g, h, j) {
  j === i && (j = k);
  b.Ee(da(a, c, g, h, j), d)
}
;G = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, yc:0.85, size:0, image:l, init:function(b, a, c, d) {
  this.superInit();
  this.width = this.height = this.size = b;
  a !== i && (this.alpha = a);
  c !== i && (this.yc = c);
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.yc;
  0.0010 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return G(this.size, this.af, this.yc, this.image)
}});
D = tm.createClass({superClass:G, Fa:l, init:function(b) {
  this.superInit(20, 1, 0.82, tm.graphics.Canvas().resize(20, 20).setFillStyle(tm.graphics.RadialGradient(10, 10, 0, 10, 10, 10).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 20, 20).element);
  this.Fa = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.Fa.ja;
  this.y += this.Fa.ka + 0.2
}, clone:function() {
  return D(this.Fa)
}});
var ea = tm.createClass({superClass:tm.app.RectangleShape, label:l, Aa:l, init:function(b) {
  this.superInit(b, 64, {fillStyle:"rgba(1,2,48,0.5)", strokeStyle:"rgba(0,0,0,0)"});
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)").addChildTo(this);
  this.Aa = []
}, Ud:function(b) {
  5 < this.Aa.length && this.Aa.splice(1, this.Aa.length - 4);
  this.Aa.push(b);
  return this
}, Xd:function() {
  this.Aa.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function(b) {
  var a = this.label.text, a = a.substring(0, a.length - 1);
  if(0 === b.frame % 2 && 0 !== this.Aa.length) {
    if("" !== this.Aa[0]) {
      var c = this.Aa[0][0];
      this.Aa[0] = this.Aa[0].substring(1);
      a += c
    }else {
      this.Aa.shift(), c = a.split("\n"), 3 < c.length && (c.shift(), a = c.join("\n")), a += "\n"
    }
  }
  this.label.text = a + (~~(b.frame / 6) % 2 ? "_" : " ")
}});
function ba() {
  function b(b) {
    if(1 > b) {
      return l
    }
    var c = [], d = Math.random(), g, h;
    for(h = 0;256 > h;h += ~~b) {
      g = Math.random();
      for(var j = 0;j < b;j++) {
        c[h + j] = a(d, g, j / b)
      }
      d = g
    }
    d = c[256 - ~~b];
    g = c[0];
    for(j = 0;j < b;j++) {
      c[256 - ~~b + j] = a(d, g, j / b)
    }
    return c
  }
  function a(a, b, c) {
    c = 0.5 * (1 - Math.cos(c * Math.PI));
    return a * (1 - c) + b * c
  }
  for(var c = [], d = 0, g = Math.pow(2, 4);8 > d;d++, g *= 2) {
    var h = b(256 / g);
    if(h === l) {
      break
    }
    c.push(h)
  }
  h = [].concat(c[0]);
  d = 1;
  for(g = 0.5;d < c.length;d++, g *= 0.5) {
    for(var j = 0;256 > j;j++) {
      h[j] += c[d][j] * g
    }
  }
  for(d = 0;d < h.length;d++) {
    h[d] /= 2
  }
}
;(function() {
  var b = l, a = l;
  t = tm.createClass({superClass:V, result:l, da:0, Fb:[], dc:m, rd:l, wd:0, ic:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.rd = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.dc = m;
      this.rd.text = "HIGH SCORE: " + s.ec
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Zc(80 * Math.cos(0.01 * this.da) + 240, 80 * Math.sin(0.01 * this.da) + 320, 0);
    this.Zc(80 * Math.cos(0.01 * this.da + Math.PI) + 240, 80 * Math.sin(0.01 * this.da + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") || a.pointing.getPointingEnd()) && !this.dc && this.zd();
    this.da += 1
  }, Zc:function(c, d, g) {
    if(!this.dc) {
      b === l && (b = G(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = G(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      g.speed = 0.6;
      var h = R(0, 2 * Math.PI), j = T(0, 20);
      g.setPosition(Math.cos(h) * j + c, Math.sin(h) * j + d);
      var q = this;
      g.update = function() {
        this.x += Math.cos(h) * this.speed;
        this.y += Math.sin(h) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = q.Fb.indexOf(this);
          -1 !== a && q.Fb.splice(a, 1)
        }
      };
      this.Fb.push(g)
    }
  }, zd:function() {
    W(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.ue, this.wd, ["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"])
  }, ue:function(a) {
    4 !== a && (this.wd = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.dc = k;
          for(var a = 0, b = this.Fb.length;a < b;a++) {
            this.Fb[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.ba.le(2);
          s.pushScene(s.ba)
        }.bind(this));
        break;
      case 2:
        this.Ya();
        break;
      case 3:
        s.be()
    }
  }, Ya:function() {
    W(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Lc, this.ic, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
  }, Lc:function(a) {
    3 !== a && (this.ic = a);
    switch(a) {
      case 0:
        this.Mc();
        break;
      case 1:
        this.Nc();
        break;
      case 2:
        this.ze();
        break;
      default:
        this.zd()
    }
  }, Mc:function() {
    W(this, "BGM VOLUME", "012345".split(""), this.Jc, s.Ub)
  }, Jc:function(a) {
    6 !== a && (s.Ub = a);
    this.Ya()
  }, Nc:function() {
    W(this, "SE VOLUME", "012345".split(""), this.Kc, s.ub)
  }, Kc:function(a) {
    6 !== a && (s.ub = a);
    this.Ya()
  }, ze:function() {
    W(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.te, s.hd, ["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"])
  }, te:function(a) {
    5 !== a && (s.hd = a);
    this.Ya()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
tm.createClass({superClass:V, init:function() {
  this.superInit();
  tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(240, 320).addChildTo(this)
}});
(function() {
  var b = l;
  z = tm.createClass({superClass:V, ca:l, score:0, mb:l, Fa:l, Hb:3, Wb:0, Wd:3, qd:l, Ad:l, md:l, jd:l, kd:l, dd:l, td:l, vd:l, Dc:l, Pc:0, init:function() {
    b !== l && f(Error("class 'gls2.GameScene' is singleton!!"));
    this.superInit();
    b = this;
    this.Md();
    this.qd = tm.app.Object2D().addChildTo(this);
    this.md = tm.app.Object2D().addChildTo(this);
    this.jd = tm.app.Object2D().addChildTo(this);
    this.Ad = tm.app.Object2D().addChildTo(this);
    this.kd = tm.app.Object2D().addChildTo(this);
    this.dd = tm.app.Object2D().addChildTo(this);
    this.td = tm.app.Object2D().addChildTo(this);
    this.Dc = ea(200).setPosition(375, 37).addChildTo(this.td);
    tm.wa.ab.Bb.ad = this;
    this.vd = tm.app.Object2D().addChildTo(this);
    this.vd.update = function(a) {
      this.we(a)
    }.bind(this)
  }, Oc:function(a) {
    this.Dc.Ud(a)
  }, Md:function() {
    var a = this.Fa = tm.app.CanvasElement().addChildTo(this);
    a.Na = a.Oa = 0;
    a.direction = 0.5 * Math.PI;
    a.speed = 1;
    a.ja = 0;
    a.ka = 0;
    var b = 8 * Math.sqrt(3);
    a.update = function() {
      this.ja = Math.cos(this.direction) * this.speed;
      this.ka = Math.sin(this.direction) * this.speed;
      for(this.Na += this.ja;48 < this.Na;) {
        this.Na -= 48
      }
      for(;-48 > this.Na;) {
        this.Na += 48
      }
      for(this.Oa += this.ka;2 * b < this.Oa;) {
        this.Oa -= 2 * b
      }
      for(;this.Oa < 2 * -b;) {
        this.Oa += 2 * b
      }
    };
    a.blendMode = "lighter";
    a.draw = function(a) {
      a.lineWidth = 0.2;
      a.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(255,255,255,0.1)"}]).toStyle();
      a.beginPath();
      for(var g = 0, h = this.Na - 48;528 > h;h += 24) {
        for(var g = 0 === g ? b : 0, j = this.Oa - 2 * b + g;j < 640 + 2 * b;j += 2 * b) {
          a.line(h, j, h + 16, j), a.line(h, j, h - 8, j + b), a.line(h, j, h - 8, j - b)
        }
      }
      a.stroke()
    }
  }, addChild:function(a) {
    a instanceof A ? this.Ad.addChild(a) : a instanceof I ? a.Eb ? this.qd.addChild(a) : this.md.addChild(a) : a instanceof D || a instanceof E || a instanceof B || a.Db ? this.jd.addChild(a) : a instanceof G ? this.kd.addChild(a) : a instanceof K ? this.dd.addChild(a) : this.superClass.prototype.addChild.apply(this, arguments)
  }, update:function(a) {
    this.mb.update(a.frame);
    a.keyboard.getKeyDown("escape") ? this.app.popScene() : a.keyboard.getKeyDown("space") ? this.kc(0) : a.keyboard.getKeyDown("p") && (a.canvas.saveAsImage(), this.kc(0))
  }, we:function() {
    var a;
    a = [].concat(I.La);
    for(var b = [].concat(E.La), d = 0, g = b.length;d < g;d++) {
      for(var h = 0, j = a.length;h < j;h++) {
        var q = a[h], n = b[d];
        if(U(q, n) && (n.remove(), n.Cb(1), q.Zb(n.pb))) {
          break
        }
      }
    }
    b = this.ca.Xa;
    if(this.ca.Xa.visible) {
      a = [].concat(I.La);
      a.sort(function(a, b) {
        return b.y - a.y
      });
      h = 0;
      for(d = a.length;h < d;h++) {
        if(q = a[h], U(q, b)) {
          b.De(q.y + q.boundingHeightBottom);
          q.Zb(b.pb);
          b.Cb(2);
          break
        }
      }
      g = {x:this.ca.x, y:this.ca.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:75, boundingHeightBottom:75};
      a = [].concat(I.La);
      h = 0;
      for(d = a.length;h < d;h++) {
        q = a[h], U(q, g) && (q.Zb(b.pb), b.me(2, 0.5 * (this.ca.x + q.x), 0.5 * (this.ca.y + q.y)))
      }
    }
    if(0 < F.La.length) {
      a = [].concat(I.La);
      h = 0;
      for(j = a.length;h < j;h++) {
        q = a[h], q.Wa() && q.Zb(F.pb)
      }
    }
  }, kc:function(a) {
    W(this, "PAUSE", ["resume", "setting", "exit game"], this.ve, a, ["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], m)
  }, ve:function(a) {
    switch(a) {
      case 1:
        this.Ya();
        break;
      case 2:
        this.ye()
    }
  }, Ya:function() {
    W(this, "SETTING", ["bgm volume", "sound volume"], this.Lc, this.ic, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
  }, Lc:function(a) {
    3 !== a && (this.ic = a);
    switch(a) {
      case 0:
        this.Mc();
        break;
      case 1:
        this.Nc();
        break;
      default:
        this.kc()
    }
  }, ye:function() {
    W(this, "REARY?", ["yes", "no"], this.se, 1, ["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], m)
  }, se:function(a) {
    0 === a ? this.app.popScene() : this.kc(1)
  }, Mc:function() {
    W(this, "BGM VOLUME", "012345".split(""), this.Jc, s.Ub)
  }, Jc:function(a) {
    6 !== a && (s.Ub = a);
    this.Ya(1)
  }, Nc:function() {
    W(this, "SE VOLUME", "012345".split(""), this.Kc, s.ub)
  }, Kc:function(a) {
    6 !== a && (s.ub = a);
    this.Ya(1)
  }, draw:function(a) {
    this.mb !== l && a.clearColor(this.mb.background, 0, 0)
  }, le:function(a) {
    this.Dc.Xd().clear();
    this.ca !== l && this.ca.remove();
    I.yb();
    E.yb();
    u.yb();
    this.ca = A(this, a);
    this.Fe(0)
  }, Fe:function(a) {
    this.mb = S.create(this, a);
    this.Ic()
  }, Ic:function() {
    this.ca.setPosition(240, 672).setFrameIndex(3).addChildTo(this);
    this.ca.gb = m;
    this.ca.jc = k;
    this.ca.tweener.clear().wait(30).moveBy(0, -120).wait(120).call(function() {
      this.gb = k
    }.bind(this.ca)).wait(120).call(function() {
      this.jc = m
    }.bind(this.ca));
    this.Wb = this.Wd
  }, cf:function() {
    this.ca.remove();
    this.Hb -= 1;
    0 < this.Hb && this.Ic()
  }, Xe:function() {
    this.Ic()
  }, Re:p(), Ye:p(), We:p(), Me:function(a) {
    this.score += a;
    for(var b = 0;b < s.nd.length;b++) {
      var d = s.nd[b];
      a < d && d <= this.score && this.fe()
    }
    s.ec = Math.max(s.ec, this.score)
  }, fe:function() {
    this.Hb += 1
  }})
})();
tm.createClass({superClass:V, init:function() {
  this.superInit()
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments)
}});
tm.createClass({superClass:V, init:function() {
  this.superInit()
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments)
}});
tm.createClass({superClass:V, init:function() {
  this.superInit()
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments)
}});
tm.createClass({superClass:V, init:function() {
  this.superInit()
}, update:function(b) {
  this.superClass.prototype.update.apply(this, arguments)
}});
(function() {
  I = tm.createClass({superClass:tm.app.CanvasElement, da:0, direction:0, speed:0, ca:l, ba:l, mb:l, $:l, aa:l, Va:0, ac:k, Eb:m, Ma:m, init:function() {
    this.superInit();
    this.addEventListener("completeattack", function() {
      this.hb()
    });
    this.addEventListener("added", function() {
      this.da = 0;
      this.Ma = m;
      this.ac = k;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      var c = [].concat(this._listeners.enterframe);
      if(c) {
        for(var g = 0, h = c.length;g < h;g++) {
          c[g] && c[g].Gc && this.removeEventListener("enterframe", c[g])
        }
      }
      this.tweener.clear();
      this.scaleX = this.scaleY = 1;
      this.Eb = m;
      a.push(this);
      c = b.indexOf(this);
      -1 !== c && b.splice(c, 1)
    })
  }, la:function(a, b, c, j) {
    this.ba = a;
    this.ca = a.ca;
    this.mb = b;
    this.aa = c;
    this.$ = j;
    this.aa.la.apply(this);
    this.$.la.apply(this);
    this.altitude = this.Eb ? 0 : 10;
    return this
  }, ib:function() {
    this.aa.ib.apply(this);
    this.$.ib.apply(this)
  }, hb:function() {
    this.aa.hb.apply(this);
    this.$.hb.apply(this)
  }, update:function() {
    this.Wa() && (this.Ma = k);
    this.aa.update.apply(this);
    this.$.update.apply(this);
    this.Eb && (this.x += this.ba.Fa.ja, this.y += this.ba.Fa.ka);
    this.da += 1
  }, Zb:function(a) {
    if(!this.Ma) {
      return m
    }
    this.Va -= a;
    return 0 >= this.Va ? (this.$.$b.apply(this), a = T(0, 2), 0 === a ? this.ba.Oc("enemy destroy.") : 1 === a ? this.ba.Oc(this.name + " destroy.") : 2 === a && this.ba.Oc("ETR reaction gone."), this.remove(), this.mb.re(this), k) : m
  }, draw:function(a) {
    this.$.draw.call(this, a)
  }, Wa:function() {
    return 0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.x - this.boundingHeightTop && 640 > this.x + this.boundingHeightBottom
  }, xe:function() {
    return this.ac
  }});
  I.yb = function() {
    for(var a = [].concat(b), c = 0, h = a.length;c < h;c++) {
      a[c].remove()
    }
  };
  for(var b = I.La = [], a = I.Be = [], c = 0;256 > c;c++) {
    a.push(I())
  }
})();
(function() {
  L = tm.createClass({la:function() {
    this.name = "abstract enemy";
    this.Va = 9999
  }, ib:p(), hb:p(), update:p(), draw:p(), $b:function() {
    w.de(this.x, this.y, this.ba)
  }});
  L.na = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function() {
    this.name = "kujo";
    this.Va = 3;
    this.ia = b("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.ca.x ? -1 : 1
  }, draw:function(a) {
    2 > this.da % 4 ? this.ia.setFrameIndex(7) : this.ia.setFrameIndex(8);
    this.ia.draw(a)
  }});
  L.na = L.na();
  L.ea = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function() {
    this.name = "kiryu";
    this.Va = 10;
    this.ia = b("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.ca.x ? -1 : 1
  }, draw:function(a) {
    2 > this.da % 4 ? this.ia.setFrameIndex(9) : this.ia.setFrameIndex(10);
    this.ia.draw(a)
  }});
  L.ea = L.ea();
  L.ha = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function() {
    this.name = "natsuki";
    this.Va = 5;
    this.Eb = k;
    this.ia = b("tex1", 48, 48);
    this.boundingRadius = 24
  }, update:function() {
    switch(this.dir) {
      case 0:
        this.ia.setFrameIndex(16, 64, 64);
        break;
      case 1:
        this.ia.setFrameIndex(24, 64, 64);
        break;
      case 2:
        this.ia.setFrameIndex(23, 64, 64);
        break;
      case 3:
        this.ia.setFrameIndex(11, 64, 64);
        break;
      case 4:
        this.ia.setFrameIndex(12, 64, 64);
        break;
      case 5:
        this.ia.setFrameIndex(13, 64, 64);
        break;
      case 6:
        this.ia.setFrameIndex(14, 64, 64);
        break;
      case 7:
        this.ia.setFrameIndex(15, 64, 64)
    }
  }, draw:function(a) {
    this.ia.draw(a)
  }, $b:function() {
    w.ce(this.x, this.y, this.ba)
  }});
  L.ha = L.ha();
  L.nc = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function() {
    this.name = "kurokawa";
    this.Va = 2E3;
    this.ia = b("tex1", 256, 128);
    this.ia.srcRect.x = 64;
    this.ia.srcRect.y = 128;
    this.ia.srcRect.width = 256;
    this.ia.srcRect.height = 128;
    this.boundingWidth = 200;
    this.boundingHeight = 20
  }, update:p(), draw:function(a) {
    this.ia.draw(a)
  }});
  L.nc = L.nc();
  var b = tm.createClass({superClass:tm.app.Sprite, init:function(a, b, d) {
    this.superInit(a, b, d)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }})
})();
(function() {
  function b(a, b) {
    var d = u[b].Yb();
    a.addEventListener("enterframe", d);
    a.addEventListener("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  }
  M = tm.createClass({la:p(), ib:p(), hb:p(), update:p()});
  M.Ca = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, ib:function() {
    var a = R(64, 192);
    this.tweener.clear().wait(T(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, hb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  M.Ca = M.Ca();
  M.Qa = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, ib:function() {
    var a = R(192, 320);
    this.tweener.clear().wait(T(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, hb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  M.Qa = M.Qa();
  M.ea = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, la:function() {
    this.angle = 0.5 * Math.PI;
    this.Rc = T(0, 60);
    this.speed = 0
  }, update:function() {
    this.da === this.Rc ? this.speed = 8 : this.da === this.Rc + 10 ? b(this, "basic1-0") : this.Rc < this.da && this.y < this.ca.y && (this.angle += Math.atan2(this.ca.y - this.y, this.ca.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = O(this.angle, 0.5, Math.PI - 0.5));
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    !this.Wa() && this.Ma && this.remove();
    if(9E4 > (this.x - this.ca.x) * (this.x - this.ca.x) + (this.y - this.ca.y) * (this.y - this.ca.y) || this.y > this.ca.y) {
      this.ac = m
    }
  }});
  M.ea = M.ea();
  M.bb = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, la:function() {
    b(this, "basic2-0");
    this.dir = 0
  }, update:function() {
    this.x += 1;
    this.Ma && !this.Wa() && this.remove()
  }});
  M.bb = M.bb();
  M.cb = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, la:function() {
    b(this, "basic2-0");
    this.dir = 1
  }, update:function() {
    this.x += 0.7;
    this.y += 0.7;
    this.Ma && !this.Wa() && this.remove()
  }});
  M.cb = M.cb();
  M.oa = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, la:function() {
    b(this, "basic2-0");
    this.dir = 2
  }, update:function() {
    this.y += 1;
    this.Ma && !this.Wa() && this.remove()
  }});
  M.oa = M.oa();
  M.Wc = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, la:function() {
    b(this, "basic2-0");
    this.dir = 3
  }, update:function() {
    this.x -= 0.7;
    this.y += 0.7;
    this.Ma && !this.Wa() && this.remove()
  }});
  M.Wc = M.Wc();
  M.Vc = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, la:function() {
    b(this, "basic2-0");
    this.dir = 4
  }, update:function() {
    this.x -= 1;
    this.Ma && !this.Wa() && this.remove()
  }});
  M.Vc = M.Vc();
  M.rc = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, la:function() {
    this.tweener.clear().moveBy(0, 320, 800, "easeOutQuad")
  }, update:p()});
  M.rc = M.rc()
})();
var X = M, Y = L;
H = {"heri1-left":[{aa:X.Ca, $:Y.ea, x:48, y:-100}, {aa:X.Qa, $:Y.ea, x:96, y:-100}, {aa:X.Ca, $:Y.ea, x:144, y:-100}, {aa:X.Qa, $:Y.ea, x:192, y:-100}, {aa:X.Ca, $:Y.ea, x:240, y:-100}], "heri1-center":[{aa:X.Ca, $:Y.ea, x:144, y:-100}, {aa:X.Qa, $:Y.ea, x:192, y:-100}, {aa:X.Ca, $:Y.ea, x:240, y:-100}, {aa:X.Qa, $:Y.ea, x:288, y:-100}, {aa:X.Ca, $:Y.ea, x:336, y:-100}], "heri1-right":[{aa:X.Ca, $:Y.ea, x:240, y:-100}, {aa:X.Qa, $:Y.ea, x:288, y:-100}, {aa:X.Ca, $:Y.ea, x:336, y:-100}, {aa:X.Qa, 
$:Y.ea, x:384, y:-100}, {aa:X.Ca, $:Y.ea, x:432, y:-100}], "heri2-left":[{aa:X.ea, $:Y.na, x:48, y:-100}, {aa:X.ea, $:Y.na, x:96, y:-100}, {aa:X.ea, $:Y.na, x:144, y:-100}, {aa:X.ea, $:Y.na, x:192, y:-100}, {aa:X.ea, $:Y.na, x:240, y:-100}], "heri2-center":[{aa:X.ea, $:Y.na, x:144, y:-100}, {aa:X.ea, $:Y.na, x:192, y:-100}, {aa:X.ea, $:Y.na, x:240, y:-100}, {aa:X.ea, $:Y.na, x:288, y:-100}, {aa:X.ea, $:Y.na, x:336, y:-100}], "heri2-right":[{aa:X.ea, $:Y.na, x:240, y:-100}, {aa:X.ea, $:Y.na, x:288, 
y:-100}, {aa:X.ea, $:Y.na, x:336, y:-100}, {aa:X.ea, $:Y.na, x:384, y:-100}, {aa:X.ea, $:Y.na, x:432, y:-100}], "tank-left":[{aa:X.bb, $:Y.ha, x:-64, y:192}, {aa:X.bb, $:Y.ha, x:-128, y:192}, {aa:X.bb, $:Y.ha, x:-192, y:192}, {aa:X.bb, $:Y.ha, x:-256, y:192}, {aa:X.bb, $:Y.ha, x:-320, y:192}], "tank-leftUpper":[{aa:X.cb, $:Y.ha, x:-110, y:-46}, {aa:X.cb, $:Y.ha, x:-156, y:-92}, {aa:X.cb, $:Y.ha, x:-202, y:-138}, {aa:X.cb, $:Y.ha, x:-248, y:-184}, {aa:X.cb, $:Y.ha, x:-294, y:-230}], "tank-upper0":[{aa:X.oa, 
$:Y.ha, x:120, y:-64}, {aa:X.oa, $:Y.ha, x:120, y:-128}, {aa:X.oa, $:Y.ha, x:120, y:-192}, {aa:X.oa, $:Y.ha, x:120, y:-256}, {aa:X.oa, $:Y.ha, x:120, y:-320}], "tank-upper1":[{aa:X.oa, $:Y.ha, x:240, y:-64}, {aa:X.oa, $:Y.ha, x:240, y:-128}, {aa:X.oa, $:Y.ha, x:240, y:-192}, {aa:X.oa, $:Y.ha, x:240, y:-256}, {aa:X.oa, $:Y.ha, x:240, y:-320}], "tank-upper2":[{aa:X.oa, $:Y.ha, x:360, y:-64}, {aa:X.oa, $:Y.ha, x:360, y:-128}, {aa:X.oa, $:Y.ha, x:360, y:-192}, {aa:X.oa, $:Y.ha, x:360, y:-256}, {aa:X.oa, 
$:Y.ha, x:360, y:-320}], "fighter-m":[{aa:X.rc, $:Y.nc, x:240, y:-192}]};
(function() {
  K = tm.createClass({superClass:tm.app.Sprite, init:function() {
    this.superInit("tex0", 20, 20);
    this.addEventListener("removed", function() {
      c.push(this);
      var a = d.indexOf(this);
      -1 !== a && d.splice(a, 1);
      this.clearEventListener("enterframe")
    })
  }, $b:function() {
    tm.app.CircleShape(40, 40, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(20, 20, 0, 20, 20, 20).addColorStopList([{offset:0, color:"rgba(255,255,255,0.0)"}, {offset:0.5, color:"rgba(255,255,255,0.0)"}, {offset:1, color:"rgba(255,255,255,1.0)"}]).toStyle()}).setBlendMode("lighter").setPosition(this.x, this.y).setScale(0.1, 0.1).addChildTo(this.parent).update = function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1;
      this.alpha *= 0.9;
      0.0010 > this.alpha && this.remove()
    };
    this.remove()
  }});
  u = {erase:function() {
    for(var a = [].concat(d), b = 0, c = a.length;b < c;b++) {
      a[b].$b()
    }
  }, la:function() {
    for(var a = 0;255 > a;a++) {
      c.push(K())
    }
    a = tm.wa.ab.Bb;
    a.Hc = function(a) {
      return!(a instanceof K) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.cd = function() {
      var a = c.shift(0);
      if(a) {
        return d.push(a), a.setFrameIndex(1), a.scaleX = 1.2, a.scaleY = 1.5, a.addEventListener("enterframe", function() {
          this.rotation += 15
        }), a
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.kb = 3
  }, yb:function() {
    for(var a = [].concat(d), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  }};
  var b = r.ga, a = b.bc(b.direction(0), b.ma());
  u["basic0-0"] = new r.ya({top:b.action([a])});
  u["basic0-4"] = new r.ya({top:b.action([b.repeat(3, [b.repeat(5, [b.bc(b.direction(-20), b.speed("$loop.count*0.06+0.75"), b.ma()), b.bc(b.direction(0), b.speed("$loop.count*0.06+0.75"), b.ma()), b.bc(b.direction(20), b.speed("$loop.count*0.06+0.75"), b.ma())]), b.wait(40)])])});
  u["basic1-0"] = new r.ya({top:b.action([b.repeat(999, [a, b.wait(20)])])});
  u["basic2-0"] = new r.ya({top:b.action([b.wait("120"), b.repeat(999, [b.wait("50*$rand*5"), a])])});
  var c = [], d = K.La = []
})();
var O, Q, R, T, Z;
O = function(b, a, c) {
  return b < a ? a : b > c ? c : b
};
Z = Math.PI / 180;
Q = function(b) {
  return b * Z
};
T = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
R = function(b, a) {
  return window.Math.random() * (a - b) + b
};

