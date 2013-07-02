/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function d(a) {
  throw a;
}
var h = void 0, j = !0, k = null, l = !1;
function m() {
  return function() {
  }
}
var p = {zd:this};
(function() {
  function a(b, c) {
    for(var a = 0, g = b.length;a < g;a++) {
      if(b[a].label == c) {
        return b[a]
      }
    }
  }
  p.ya = function(b) {
    this.type = "none";
    this.root = this;
    this.pa = [];
    this.Rb = [];
    this.Wb = [];
    if(b !== h) {
      for(var c in b) {
        b.hasOwnProperty(c) && (b[c].label = c, b[c] instanceof p.za ? this.pa.push(b[c]) : b[c] instanceof p.Ma ? this.Rb.push(b[c]) : b[c] instanceof p.lb && this.Wb.push(b[c]))
      }
      b = 0;
      for(c = this.pa.length;b < c;b++) {
        this.pa[b].Ba(this)
      }
      b = 0;
      for(c = this.Rb.length;b < c;b++) {
        this.Rb[b].Ba(this)
      }
      b = 0;
      for(c = this.Wb.length;b < c;b++) {
        this.Wb[b].Ba(this)
      }
    }
  };
  p.ya.prototype.hd = function(b) {
    return a(this.pa, b)
  };
  p.ya.prototype.de = function() {
    for(var b = [], c = 0, a = this.pa.length;c < a;c++) {
      var g = this.pa[c];
      g.label && 0 === g.label.indexOf("top") && (b[b.length] = g.label)
    }
    return b
  };
  p.ya.prototype.Xd = function(b) {
    var c;
    if(c = this.hd(b)) {
      return c
    }
    d(Error("action labeled '" + b + "' is undefined."))
  };
  p.ya.prototype.Yd = function(b) {
    return a(this.Rb, b)
  };
  p.ya.prototype.Zd = function(b) {
    var c;
    if(c = this.Yd(b)) {
      return c
    }
    d(Error("bullet labeled '" + b + "' is undefined."))
  };
  p.ya.prototype.$d = function(b) {
    return a(this.Wb, b)
  };
  p.ya.prototype.ae = function(b) {
    var c;
    if(c = this.$d(b)) {
      return c
    }
    d(Error("fire labeled '" + b + "' is undefined."))
  };
  p.Ma = function() {
    this.root = this.label = k;
    this.direction = new p.Ja(0);
    this.speed = new p.Ka(1);
    this.pa = [];
    this.ua = {};
    this.ea = {}
  };
  p.Ma.prototype.clone = function(b) {
    var c = new p.Ma;
    c.label = this.label;
    c.root = this.root;
    c.pa = this.pa;
    c.direction = new p.Ja(b.ta(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new p.Ka(b.ta(this.speed.value));
    c.speed.type = this.speed.type;
    c.ua = this.ua;
    c.ea = b.ea;
    return c
  };
  p.Ma.prototype.Ba = function(b) {
    this.root = b;
    for(var c = 0, a = this.pa.length;c < a;c++) {
      this.pa[c].Ba(b)
    }
  };
  p.Eb = function(b) {
    this.root = k;
    this.label = b;
    this.na = []
  };
  p.Eb.prototype.clone = function(b) {
    var c = b.ea;
    b.ea = b.mc(this.na);
    var a = this.root.Zd(this.label).clone(b);
    b.ea = c;
    return a
  };
  p.Eb.prototype.Ba = function(b) {
    this.root = b
  };
  p.oa = function() {
    this.xa = ""
  };
  p.oa.prototype.Ba = function(b) {
    this.root = b
  };
  p.za = function() {
    this.xa = "action";
    this.root = this.label = k;
    this.Da = [];
    this.na = []
  };
  p.za.prototype = new p.oa;
  p.za.prototype.Ba = function(b) {
    this.root = b;
    for(var c = 0, a = this.Da.length;c < a;c++) {
      this.Da[c].Ba(b)
    }
  };
  p.za.prototype.clone = function() {
    var b = new p.za;
    b.label = this.label;
    b.root = this.root;
    b.Da = this.Da;
    return b
  };
  p.kb = function(b) {
    this.xa = "actionRef";
    this.label = b;
    this.root = k;
    this.na = []
  };
  p.kb.prototype = new p.oa;
  p.kb.prototype.clone = function() {
    var b = new p.za;
    b.root = this.root;
    b.Da.push(this);
    return b
  };
  p.lb = function() {
    this.xa = "fire";
    this.ia = this.speed = this.direction = this.root = this.label = k;
    this.ua = new p.fc
  };
  p.lb.prototype = new p.oa;
  p.lb.prototype.Ba = function(b) {
    this.root = b;
    this.ia && this.ia.Ba(b)
  };
  p.gc = function(b) {
    this.xa = "fireRef";
    this.label = b;
    this.na = []
  };
  p.gc.prototype = new p.oa;
  p.Fb = function() {
    this.xa = "changeDirection";
    this.direction = new p.Ja;
    this.va = 0
  };
  p.Fb.prototype = new p.oa;
  p.Gb = function() {
    this.xa = "changeSpeed";
    this.speed = new p.Ka;
    this.va = 0
  };
  p.Gb.prototype = new p.oa;
  p.Db = function() {
    this.xa = "accel";
    this.Ha = new p.hc;
    this.Ia = new p.kc;
    this.va = 0
  };
  p.Db.prototype = new p.oa;
  p.Ib = function(b) {
    this.xa = "wait";
    this.value = b || 0
  };
  p.Ib.prototype = new p.oa;
  p.jc = function() {
    this.xa = "vanish"
  };
  p.jc.prototype = new p.oa;
  p.Hb = function() {
    this.xa = "repeat";
    this.vd = 0;
    this.action = k;
    this.na = []
  };
  p.Hb.prototype = new p.oa;
  p.Hb.prototype.Ba = function(b) {
    this.root = b;
    this.action && this.action.Ba(b)
  };
  p.ec = function(b, c) {
    this.xa = "bind";
    this.re = b;
    this.Vd = c
  };
  p.ec.prototype = new p.oa;
  p.ic = function(b, c) {
    this.xa = "notify";
    this.Sd = b;
    this.na = c || k
  };
  p.ic.prototype = new p.oa;
  p.yd = new p.oa;
  p.Ja = function(b) {
    this.type = "aim";
    this.value = b || 0
  };
  p.Ka = function(b) {
    this.type = "absolute";
    this.value = b === h ? 1 : b
  };
  p.hc = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  p.kc = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  p.fc = function(b) {
    b = b || {};
    this.offsetX = b.offsetX || 0;
    this.offsetY = b.offsetY || 0;
    this.mb = j;
    b.mb !== h && (this.mb = !!b.mb)
  };
  p.Nc = function(b) {
    this.value = b || 0
  };
  p.Oc = function(b) {
    this.value = b || 0
  };
  p.Mc = function(b) {
    this.value = !!b
  }
})();
p.Oa = function(a, b) {
  this.Uc = a;
  this.Kb = [];
  this.Pa = -1;
  this.sa = k;
  this.ea = {};
  this.Jb = {$rank:b || 0}
};
p.Oa.prototype.next = function() {
  this.Pa += 1;
  if(this.sa !== k) {
    var a = this.sa.Da[this.Pa];
    if(a !== h) {
      if(a instanceof p.za) {
        return this.tb(), this.sa = a, this.ea = this.lc(), this.next()
      }
      if(a instanceof p.kb) {
        return this.tb(), this.sa = this.Uc.Xd(a.label), this.ea = this.mc(a.na), this.next()
      }
      if(a instanceof p.Hb) {
        return this.ea.pb = 0, this.ea.rd = this.ta(a.vd) | 0, this.tb(), this.sa = a.action.clone(), this.ea = this.lc(), this.next()
      }
      if(a instanceof p.lb) {
        var b = new p.lb;
        b.ia = a.ia.clone(this);
        a.direction !== k && (b.direction = new p.Ja(this.ta(a.direction.value)), b.direction.type = a.direction.type);
        a.speed !== k && (b.speed = new p.Ka(this.ta(a.speed.value)), b.speed.type = a.speed.type);
        b.ua = a.ua;
        return b
      }
      return a instanceof p.gc ? (this.tb(), this.sa = new p.za, this.sa.Da = [this.Uc.ae(a.label)], this.ea = this.mc(a.na), this.next()) : a instanceof p.Fb ? (b = new p.Fb, b.direction.type = a.direction.type, b.direction.value = this.ta(a.direction.value), b.va = this.ta(a.va), b) : a instanceof p.Gb ? (b = new p.Gb, b.speed.type = a.speed.type, b.speed.value = this.ta(a.speed.value), b.va = this.ta(a.va), b) : a instanceof p.Db ? (b = new p.Db, b.Ha.type = a.Ha.type, b.Ha.value = this.ta(a.Ha.value), 
      b.Ia.type = a.Ia.type, b.Ia.value = this.ta(a.Ia.value), b.va = this.ta(a.va), b) : a instanceof p.Ib ? new p.Ib(this.ta(a.value)) : a instanceof p.jc ? a : a instanceof p.ec ? (this.ea["$" + a.re] = this.ta(a.Vd), p.yd) : a instanceof p.ic ? a : k
    }
    this.Ld();
    if(this.sa === k) {
      return k
    }
    if((a = this.sa.Da[this.Pa]) && "repeat" == a.xa) {
      this.ea.pb++, this.ea.pb < this.ea.rd && (this.tb(), this.sa = a.action.clone(), this.ea = this.lc())
    }
    return this.next()
  }
  return k
};
p.Oa.prototype.tb = function() {
  this.Kb.push({action:this.sa, cursor:this.Pa, scope:this.ea});
  this.Pa = -1
};
p.Oa.prototype.Ld = function() {
  var a = this.Kb.pop();
  a ? (this.Pa = a.cursor, this.sa = a.action, this.ea = a.scope) : (this.Pa = -1, this.sa = k, this.ea = {})
};
p.Oa.prototype.ta = function(a) {
  var b;
  if("number" === typeof a) {
    return a
  }
  if(isNaN(b = Number(a))) {
    if((b = this.ea[a]) || (b = this.Jb[a])) {
      return b
    }
    if("$rand" == a) {
      return Math.random()
    }
  }else {
    return b
  }
  b = {};
  for(var c in this.Jb) {
    this.Jb.hasOwnProperty(c) && (b[c] = this.Jb[c])
  }
  for(c in this.ea) {
    this.ea.hasOwnProperty(c) && (b[c] = this.ea[c])
  }
  b.$rand = Math.random();
  (c = this.Kb[this.Kb.length - 1]) && (b.$loop = {index:c.scope.pb, count:c.scope.pb + 1, first:0 === c.scope.pb, last:c.scope.pb + 1 >= c.scope.rd});
  return(new Function("return " + a.split("$").join("this.$"))).apply(b)
};
p.Oa.prototype.mc = function(a) {
  var b = {};
  if(a) {
    for(var c = 0, f = a.length;c < f;c++) {
      b["$" + (c + 1)] = this.ta(a[c])
    }
  }else {
    for(c in this.ea) {
      this.ea.hasOwnProperty(c) && (b[c] = this.ea[c])
    }
  }
  return b
};
p.Oa.prototype.lc = function() {
  var a = {}, b;
  for(b in this.ea) {
    this.ea.hasOwnProperty(b) && (a[b] = this.ea[b])
  }
  return a
};
p.ya.prototype.yc = function(a, b) {
  var c = new p.Oa(this, b), f = this.hd(a);
  f && (c.sa = f);
  return c
};
p.Ma.prototype.yc = function(a) {
  a = new p.Oa(this.root, a);
  var b = new p.za;
  b.root = this.root;
  b.Da = this.pa;
  a.sa = b;
  a.ea = this.ea;
  return a
};
p.fa = function(a) {
  a = a || "";
  for(var b in p.fa) {
    p.fa.hasOwnProperty(b) && (p.zd[a + b] = p.fa[b])
  }
};
p.fa.action = function(a) {
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
  var f = new p.za;
  if(a instanceof Array) {
    a.some(function(b) {
      return!(b instanceof p.oa)
    }) && d(Error("argument type error.")), f.Da = a
  }else {
    b = 0;
    for(c = arguments.length;b < c;b++) {
      arguments[b] instanceof p.oa ? f.Da[b] = arguments[b] : d(Error("argument type error."))
    }
  }
  return f
};
p.fa.we = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("label is required."));
  f = new p.kb(a);
  if(b instanceof Array) {
    f.na = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.na.push(arguments[c])
    }
  }
  return f
};
p.fa.ia = function(a, b, c, f) {
  for(var g = 0, i = arguments.length;g < i;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  i = new p.Ma;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof p.Ja ? i.direction = arguments[g] : arguments[g] instanceof p.Ka ? i.speed = arguments[g] : arguments[g] instanceof p.za ? i.pa.push(arguments[g]) : arguments[g] instanceof p.kb ? i.pa.push(arguments[g]) : arguments[g] instanceof Array ? i.pa.push(p.fa.action(arguments[g])) : arguments[g] instanceof Object ? i.ua = arguments[g] : "string" === typeof arguments[g] && (i.label = arguments[g])
  }
  return i
};
p.fa.ze = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("label is required."));
  f = new p.Eb(a);
  if(b instanceof Array) {
    f.na = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.na.push(arguments[c])
    }
  }
  return f
};
p.fa.Vb = function(a, b, c, f) {
  for(var g = 0, i = arguments.length;g < i;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  i = new p.lb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof p.Ja ? i.direction = arguments[g] : arguments[g] instanceof p.Ka ? i.speed = arguments[g] : arguments[g] instanceof p.Ma ? i.ia = arguments[g] : arguments[g] instanceof p.Eb ? i.ia = arguments[g] : arguments[g] instanceof p.fc ? i.ua = arguments[g] : arguments[g] instanceof p.Nc ? i.ua.offsetX = arguments[g].value : arguments[g] instanceof p.Oc ? i.ua.offsetY = arguments[g].value : arguments[g] instanceof p.Mc && (i.ua.mb = arguments[g].value)
  }
  i.ia === h && d(Error("bullet (or bulletRef) is required."));
  return i
};
p.fa.Ge = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("label is required."));
  f = new p.gc(a);
  if(b instanceof Array) {
    f.na = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.na.push(arguments[c])
    }
  }
  return f
};
p.fa.Ae = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("direction is required."));
  b === h && d(Error("term is required."));
  c = new p.Fb;
  c.direction = a instanceof p.Ja ? a : new p.Ja(a);
  c.va = b;
  return c
};
p.fa.Be = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("speed is required."));
  b === h && d(Error("term is required."));
  c = new p.Gb;
  c.speed = a instanceof p.Ka ? a : new p.Ka(a);
  c.va = b;
  return c
};
p.fa.ve = function(a, b, c) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new p.Db;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof p.hc ? g.Ha = a : arguments[f] instanceof p.kc ? g.Ia = b : g.va = arguments[f]
  }
  g.Ha === h && g.Ia === h && d(Error("horizontal or vertical is required."));
  g.va === h && d(Error("term is required."));
  return g
};
p.fa.wait = function(a) {
  for(var b = 0, c = arguments.length;b < c;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === h && d(Error("value is required."));
  return new p.Ib(a)
};
p.fa.Qe = function() {
  return new p.jc
};
p.fa.repeat = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("times is required."));
  b === h && d(Error("action is required."));
  f = new p.Hb;
  f.vd = a;
  if(b instanceof p.za || b instanceof p.kb) {
    f.action = b
  }else {
    if(b instanceof Array) {
      f.action = p.fa.action(b)
    }else {
      for(var g = [], c = 1;c < arguments.length;c++) {
        g.push(arguments[c])
      }
      f.action = p.fa.action(g)
    }
  }
  return f
};
p.fa.ye = function(a, b) {
  return new p.ec(a, b)
};
p.fa.Ne = function(a, b) {
  return new p.ic(a, b)
};
p.fa.direction = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("value is required."));
  c = new p.Ja(a);
  b !== h && (c.type = b);
  return c
};
p.fa.speed = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("value is required."));
  c = new p.Ka(a);
  b && (c.type = b);
  return c
};
p.fa.Ha = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("value is required."));
  c = new p.hc(a);
  b && (c.type = b);
  return c
};
p.fa.Ia = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === h && d(Error("value is required."));
  c = new p.kc(a);
  b && (c.type = b);
  return c
};
p.fa.Fe = function(a) {
  return new p.fc(a)
};
p.fa.offsetX = function(a) {
  return new p.Nc(a)
};
p.fa.offsetY = function(a) {
  return new p.Oc(a)
};
p.fa.mb = function(a) {
  return new p.Mc(a)
};
tm.wa = tm.wa || {};
(function() {
  function a(b) {
    for(;b <= -Math.PI;) {
      b += 2 * Math.PI
    }
    for(;Math.PI < b;) {
      b -= 2 * Math.PI
    }
    return b
  }
  function b(b, c) {
    return Math.atan2(c.y - b.y, c.x - b.x)
  }
  tm.wa.Va = tm.createClass({init:function(b) {
    b || d(Error("argument is invalid.", b));
    this.Rc = b
  }, Tb:function(b, c) {
    var a = this.Rc.de();
    if(c === h && 0 < a.length) {
      for(var f = [], q = 0, J = a.length;q < J;q++) {
        f[f.length] = this.Sc(b, a[q])
      }
      for(var u = function() {
        for(var b = f.length;b--;) {
          f[b].call(this)
        }
        u.uc == f.length && (u.vb = j, this.dispatchEvent(tm.event.Event("completeattack")))
      }, q = f.length;q--;) {
        f[q].dc = u
      }
      u.uc = 0;
      u.Yc = function() {
        this.uc++
      };
      u.uc = 0;
      u.vb = l;
      u.Bc = j;
      return u
    }
    return this.Sc(b, c)
  }, Sc:function(b, c) {
    function a() {
      a.ba += 1;
      this.ba = a.ba;
      var b = a.vc, c = a.Kd;
      if(c) {
        if(a.ba < a.sc ? a.direction += a.nb : a.ba === a.sc && (a.direction = a.Qa), a.ba < a.tc ? a.speed += a.Bb : a.ba === a.tc && (a.speed = a.rb), a.ba < a.nc ? (a.gb += a.Nb, a.ib += a.Ob) : a.ba === a.nc && (a.gb = a.Lb, a.ib = a.Mb), this.x += Math.cos(a.direction) * a.speed * b.hb, this.y += Math.sin(a.direction) * a.speed * b.hb, this.x += a.gb * b.hb, this.y += a.ib * b.hb, b.Cc(this)) {
          if(b.sb || this.sb) {
            this.rotation = (a.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = a.speed
          }
          if(!(a.ba < a.wd || a.vb)) {
            for(var g;g = a.xd.next();) {
              switch(g.xa) {
                case "fire":
                  c.Hd.call(this, g, b, a, c);
                  break;
                case "wait":
                  b = 0;
                  a.wd = "number" === typeof g.value ? a.ba + g.value : 0 !== (b = ~~g.value) ? a.ba + b : a.ba + eval(g.value);
                  return;
                case "changeDirection":
                  c.Cd.call(this, g, b, a);
                  break;
                case "changeSpeed":
                  c.Dd.call(this, g, a);
                  break;
                case "accel":
                  c.Ad.call(this, g, a);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  c.Id.call(this, g)
              }
            }
            a.vb = j;
            a.dc ? a.dc.Yc() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), a.vb = j, a.dc ? a.dc.Yc() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    b = function(b) {
      var a = {}, c = tm.wa.Va.wb, g;
      for(g in c) {
        c.hasOwnProperty(g) && (a[g] = c[g])
      }
      for(g in b) {
        b.hasOwnProperty(g) && (a[g] = b[g])
      }
      return a
    }(b);
    b.target || d(Error("target is undefined in config."));
    c = c || "top";
    "string" === typeof c ? a.xd = this.Rc.yc(c, b.Kc) : c instanceof p.Ma ? a.xd = c.yc(b.Kc) : (window.console.error(b, c), d(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    a.Kd = this;
    a.vc = b;
    a.wd = -1;
    a.vb = l;
    a.direction = 0;
    a.od = 0;
    a.speed = 0;
    a.qd = 0;
    a.gb = 0;
    a.ib = 0;
    a.nb = 0;
    a.Qa = 0;
    a.sc = -1;
    a.Bb = 0;
    a.rb = 0;
    a.tc = -1;
    a.Nb = 0;
    a.Lb = 0;
    a.Ob = 0;
    a.Mb = 0;
    a.nc = -1;
    a.ba = -1;
    a.Bc = j;
    return a
  }, Gd:function(b) {
    function a() {
      this.x += a.$c;
      this.y += a.ad;
      a.vc.Cc(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    }
    b = function(b) {
      var a = {}, c = tm.wa.Va.wb, g;
      for(g in c) {
        c.hasOwnProperty(g) && (a[g] = c[g])
      }
      for(g in b) {
        b.hasOwnProperty(g) && (a[g] = b[g])
      }
      return a
    }(b);
    b.target || d(Error("target is undefined in config."));
    a.vc = b;
    a.direction = 0;
    a.speed = 0;
    a.$c = 0;
    a.ad = 0;
    a.Bc = j;
    return a
  }, Hd:function(a, c, f, v) {
    if(this.le === h || this.Ub) {
      var q = {label:a.ia.label}, J;
      for(J in a.ia.ua) {
        q[J] = a.ia.ua[J]
      }
      if(q = c.Wc(q)) {
        var u = (J = !!a.ia.pa.length) ? v.Gd(c) : v.Tb(c, a.ia), Z = this, O = {x:this.x + a.ua.offsetX, y:this.y + a.ua.offsetY};
        f.od = u.direction = function(q) {
          var v = eval(q.value) * Math.DEG_TO_RAD;
          switch(q.type) {
            case "aim":
              return c.target ? a.ua.mb ? b(O, c.target) + v : b(Z, c.target) + v : v - Math.PI / 2;
            case "absolute":
              return v - Math.PI / 2;
            case "relative":
              return f.direction + v;
            default:
              return f.od + v
          }
        }(a.direction || a.ia.direction);
        f.qd = u.speed = function(b) {
          var a = eval(b.value);
          switch(b.type) {
            case "relative":
              return f.speed + a;
            case "sequence":
              return f.qd + a;
            default:
              return a
          }
        }(a.speed || a.ia.speed);
        q.x = O.x;
        q.y = O.y;
        J && (u.$c = Math.cos(u.direction) * u.speed * c.hb, u.ad = Math.sin(u.direction) * u.speed * c.hb);
        q.sb = !!q.sb;
        if(c.sb || q.sb) {
          q.rotation = (u.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, q.speed = u.speed
        }
        q.addEventListener("enterframe", u);
        q.addEventListener("removed", function() {
          this.removeEventListener("enterframe", u);
          this.removeEventListener("removed", arguments.callee)
        });
        c.Vc ? c.Vc.addChild(q) : this.parent && this.parent.addChild(q)
      }
    }
  }, Cd:function(c, f, n) {
    var v = eval(c.direction.value) * Math.DEG_TO_RAD, q = eval(c.va);
    switch(c.direction.type) {
      case "aim":
        c = f.target;
        if(!c) {
          return
        }
        n.Qa = b(this, c) + v;
        n.nb = a(n.Qa - n.direction) / q;
        break;
      case "absolute":
        n.Qa = v - Math.PI / 2;
        n.nb = a(n.Qa - n.direction) / q;
        break;
      case "relative":
        n.Qa = n.direction + v;
        n.nb = a(n.Qa - n.direction) / q;
        break;
      case "sequence":
        n.nb = v, n.Qa = n.direction + n.nb * (q - 1)
    }
    n.sc = n.ba + q
  }, Dd:function(b, a) {
    var c = eval(b.speed.value), f = eval(b.va);
    switch(b.speed.type) {
      case "absolute":
        a.rb = c;
        a.Bb = (a.rb - a.speed) / f;
        break;
      case "relative":
        a.rb = c + a.speed;
        a.Bb = (a.rb - a.speed) / f;
        break;
      case "sequence":
        a.Bb = c, a.rb = a.speed + a.Bb * f
    }
    a.tc = a.ba + f
  }, Ad:function(b, a) {
    var c = eval(b.va);
    a.nc = a.ba + c;
    if(b.Ha) {
      var f = eval(b.Ha.value);
      switch(b.Ha.type) {
        case "absolute":
        ;
        case "sequence":
          a.Nb = (f - a.gb) / c;
          a.Lb = f;
          break;
        case "relative":
          a.Nb = f, a.Lb = (f - a.gb) * c
      }
    }else {
      a.Nb = 0, a.Lb = a.gb
    }
    if(b.Ia) {
      switch(f = eval(b.Ia.value), b.Ia.type) {
        case "absolute":
        ;
        case "sequence":
          a.Ob = (f - a.ib) / c;
          a.Mb = f;
          break;
        case "relative":
          a.Ob = f, a.Mb = (f - a.ib) * c
      }
    }else {
      a.Ob = 0, a.Mb = a.ib
    }
  }, Id:function(a) {
    var b = tm.event.Event(a.Sd);
    if(a.na) {
      for(var c in a.na) {
        b[c] = a.na[c]
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
  tm.wa.Pd = function(a) {
    var b = tm.app.Sprite(8, 8, c);
    b.label = a.label;
    return b
  };
  var f = k;
  tm.wa.Qd = function(a) {
    f === k && (f = a.getRoot());
    return 0 <= a.x && a.x < APP.width && 0 <= a.y && a.y < APP.height
  };
  tm.wa.De = function() {
    return j
  };
  tm.wa.Va.wb = {Wc:tm.wa.Pd, Cc:tm.wa.Qd, Kc:0, sb:l, hb:2, target:k};
  p.ya.prototype.Tb = function(a) {
    return tm.wa.Va(this).Tb(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(m());
tm.main(function() {
  r("#canvas2d").run()
});
var s = k, t, w, z, A, B, C, D, E, F, G, H, I, K, L, M, r = tm.createClass({superClass:tm.app.CanvasApp, Yb:0, Ke:0, Pb:4, qb:4, bd:1, gd:[1E9, 1E10], ha:k, init:function(a) {
  s !== k && d(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "black";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", laser:"assets/laser.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", explode3:"assets/explode3.png", shotbullet:"assets/shotbullet.png", soundExplode:"assets/sen_ge_taihou03.mp3"}, nextScene:function() {
    this.Jd();
    return t()
  }.bind(this)}))
}, Jd:function() {
  w.ja();
  z.ja();
  this.ha = A()
}, Td:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Yb, "")
}});
function N(a) {
  a.shadowColor = "rgba(0,0,0,0.5)";
  a.shadowBlur = 30;
  a.shadowOffsetX = 20;
  a.shadowOffsetY = 70
}
tm.app.Label = tm.createClass({superClass:tm.app.Label, init:function(a, b) {
  this.superInit(a, b);
  this.setAlign("center");
  this.setBaseline("middle");
  this.setFontFamily("Orbitron");
  this.fillStyle = "white";
  this.isHitPoint = this.isHitPointRect
}, update:function(a) {
  this.alpha = 0.8 + 0.2 * Math.sin(0.1 * a.frame)
}});
function P() {
  if(0 !== s.qb) {
    var a = tm.asset.AssetManager.get("soundExplode");
    a.volume = 0.1 * s.qb;
    a && a.clone().play()
  }
}
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
(function() {
  var a = k, b = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  B = tm.createClass({superClass:tm.app.Sprite, Fa:0, $a:j, sd:l, ha:k, ee:100, speed:4.5, Za:k, zb:k, Zb:k, Qb:k, $b:k, ac:k, init:function(a) {
    this.superInit("tex1", 64, 64);
    this.ha = a;
    tm.wa.Va.wb.target = this;
    N(this);
    this.zb = C(this, "laser", "laserHead", "laserFoot");
    this.zb.visible = l;
    this.zb.addChildTo(a);
    this.Fd();
    this.Za = [{x:-70, y:20, d:0.1, Ua:l, Ra:-0.7, v:j}, {x:-40, y:40, d:0.1, Ua:l, Ra:-0.5, v:j}, {x:40, y:40, d:0.1, Ua:j, Ra:0.5, v:j}, {x:70, y:20, d:0.1, Ua:j, Ra:0.7, v:j}];
    this.Qb = tm.app.CanvasElement().addChildTo(this);
    a = 0;
    for(var b = this.Za.length;a < b;a++) {
      var g = this.Za[a];
      D(this, g).setPosition(g.x, g.y).addChildTo(this.Qb)
    }
    this.$b = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(100,100,255,0.0)"}, {offset:0.3, color:"rgba(100,100,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.7, color:"rgba(100,100,255,0.1)"}, {offset:1, color:"rgba(100,100,255,0.0)"}]).toStyle(), lineWidth:2}).addChildTo(this);
    this.$b.blendMode = "lighter";
    this.$b.update = function() {
      this.rotation += 2
    };
    this.ac = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(100,100,255,0.0)"}, {offset:0.3, color:"rgba(100,100,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.7, color:"rgba(100,100,255,0.1)"}, {offset:1, color:"rgba(100,100,255,0.0)"}]).toStyle(), lineWidth:2}).addChildTo(this);
    this.ac.blendMode = "lighter";
    this.ac.update = function() {
      this.rotation -= 2
    }
  }, ue:function() {
    return[{x:-70, y:20, d:0.1, Ua:l, Ra:-0.7, v:j}, {x:-40, y:40, d:0.1, Ua:l, Ra:-0.5, v:j}, {x:40, y:40, d:0.1, Ua:j, Ra:0.5, v:j}, {x:70, y:20, d:0.1, Ua:j, Ra:0.7, v:j}]
  }, Fd:function() {
    this.Zb = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.Zb.setFrameIndex(5);
    this.Zb.blendMode = "lighter";
    this.Zb.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Ta:-1, xc:l, xb:l, update:function(c) {
    var f = c.keyboard;
    if(this.$a) {
      var g = f.getKeyAngle();
      g !== k && (g = b[g], this.x += g.x * this.speed * (this.xb ? 0.75 : 1), this.y += g.y * this.speed * (this.xb ? 0.75 : 1));
      this.x = Q(this.x, 5, 475);
      this.y = Q(this.y, 5, 635);
      var g = f.getKey("c"), i = f.getKey("z");
      this.Ta = g ? this.Ta + 1 : this.Ta - 1;
      this.Ta = Q(this.Ta, -1, 10);
      this.xb = i && g || 10 === this.Ta;
      this.xc = !this.xb && (0 <= this.Ta || i) && 0 === c.frame % 3;
      i && (this.Ta = 0);
      if(this.xb) {
        this.zb.visible = j;
        g = 0;
        for(i = this.Za.length;g < i;g++) {
          this.Za[g].v = l
        }
        this.Qb.rotation = 0
      }else {
        this.zb.visible = l;
        g = 0;
        for(i = this.Za.length;g < i;g++) {
          this.Za[g].v = j
        }
      }
      this.xc && (c = Math.sin(0.2 * c.frame), E(this.x - 7 - 6 * c, this.y - 5, -90).addChildTo(this.ha), E(this.x - 7 + 6 * c, this.y - 5, -90).addChildTo(this.ha), E(this.x + 7 - 6 * c, this.y - 5, -90).addChildTo(this.ha), E(this.x + 7 + 6 * c, this.y - 5, -90).addChildTo(this.ha))
    }
    this.$b.visible = this.ac.visible = 100 === this.ee;
    this.Od(f);
    this.Bd(f);
    a === k && (a = F(this.ha.Ea));
    a.clone().setPosition(this.x - 5, this.y + 20).addChildTo(this.ha);
    a.clone().setPosition(this.x + 5, this.y + 20).addChildTo(this.ha)
  }, Od:function(a) {
    var b = this.Qb;
    b.rotation = this.$a && a.getKey("left") ? Math.max(b.rotation - 2, -30) : this.$a && a.getKey("right") ? Math.min(b.rotation + 2, 30) : 2 < b.rotation ? b.rotation - 2 : -2 > b.rotation ? b.rotation + 2 : 0
  }, Bd:function(a) {
    this.$a && a.getKey("left") ? this.Fa = Q(this.Fa - 0.2, -3, 3) : this.$a && a.getKey("right") ? this.Fa = Q(this.Fa + 0.2, -3, 3) : 0 > this.Fa ? this.Fa = Q(this.Fa + 0.2, -3, 3) : 0 < this.Fa && (this.Fa = Q(this.Fa - 0.2, -3, 3));
    a = 3 + ~~this.Fa;
    this.setFrameIndex(a);
    return a
  }});
  D = tm.createClass({superClass:tm.app.AnimationSprite, Ya:k, da:k, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Ya = b;
    this.da = a;
    N(this);
    this.gotoAndPlay(b.Ua ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.Ya.v) {
      this.x = this.Ya.x;
      this.y = this.Ya.y;
      this.rotation = Math.radToDeg(this.Ya.d * this.Ya.Ra);
      var f = this.parent.localToGlobal(this);
      this.Ya.v && a.clone().setPosition(f.x, f.y).addChildTo(b.ha);
      this.da.xc && (E(f.x - 4, f.y, this.parent.rotation + this.rotation - 90).addChildTo(b.ha), E(f.x + 4, f.y, this.parent.rotation + this.rotation - 90).addChildTo(b.ha))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = k;
  E = tm.createClass({superClass:tm.app.Sprite, speed:20, qc:1, init:function(c, f, g) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    var i = R(g);
    this.se = Math.cos(i) * this.speed;
    this.te = Math.sin(i) * this.speed;
    this.setPosition(c, f);
    this.rotation = g + 90;
    this.addEventListener("added", function() {
      b.push(this)
    });
    this.addEventListener("removed", function() {
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    a === k && (a = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    this.setFrameIndex(2, 64, 64)
  }, update:function() {
    this.x += this.se;
    this.y += this.te;
    for(var a = [].concat(H.oc), b = 0, g = a.length;b < g;b++) {
      var i = a[b];
      if((this.x - i.x) * (this.x - i.x) + (this.y - i.y) * (this.y - i.y) < (this.radius + i.radius) * this.radius + i.radius) {
        this.ob();
        i.Zc(this.qc);
        this.remove();
        break
      }
    }
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, ob:function() {
    var b = a.clone().setPosition(this.x, this.y).addChildTo(this.parent), f = S(2, 8), g = 2 * Math.random() * Math.PI;
    b.qa = Math.cos(g) * f;
    b.ra = Math.sin(g) * f;
    b.scaleX = b.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
    b.addEventListener("enterframe", function() {
      this.x += this.qa;
      this.y += this.ra;
      this.qa *= 0.9;
      this.ra *= 0.9
    })
  }});
  E.ub = function() {
    for(var a = [].concat(b), f = 0, g = a.length;f < g;f++) {
      a[f].remove()
    }
  };
  var b = E.oc = []
})();
(function() {
  var a = k;
  C = tm.createClass({superClass:tm.app.CanvasElement, da:k, image:k, c:k, ba:0, Ga:0, Oe:k, qc:5, rc:l, head:k, ab:k, init:function(b, c, f, g) {
    this.da = b;
    b = tm.asset.AssetManager.get(c);
    this.superInit();
    this.image = b.element;
    this.width = b.width;
    this.height = 640;
    this.blendMode = "lighter";
    this.origin.y = 1;
    this.c = tm.graphics.Canvas();
    this.c.resize(this.width, 740);
    this.c.globalCompositeOperation = "lighter";
    this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:f, frame:{width:80, height:80}, animations:{"default":{frames:[0, 1, 2, 3], next:"default"}}}), 80, 80);
    this.head.gotoAndPlay();
    this.head.blendMode = "lighter";
    this.ab = tm.app.AnimationSprite(tm.app.SpriteSheet({image:g, frame:{width:128, height:64}, animations:{"default":{frames:[0, 1, 2, 3], next:"default"}}}), 128, 64);
    this.ab.gotoAndPlay();
    this.ab.blendMode = "lighter";
    a === k && (a = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element))
  }, update:function() {
    this.x = this.da.x;
    this.y = this.da.y - 40;
    if(this.visible) {
      this.Ga = this.rc ? this.Ga - 50 : this.y;
      var a = [].concat(H.oc);
      a.sort(function(a, b) {
        return b.y - a.y
      });
      for(var c = 0, f = a.length;c < f;c++) {
        var g = a[c];
        if(this.Ga - 30 < g.y && g.y < this.y && this.x - 40 < g.x && g.x < this.x + 40) {
          this.Ga = g.y;
          g.Zc(this.qc);
          this.ob(1);
          break
        }
      }
      this.head._updateFrame();
      this.ab._updateFrame()
    }else {
      if(this.rc) {
        for(a = this.y;a > this.Ga;a -= 30) {
          this.ob(1, a)
        }
      }
      this.Ga = this.y
    }
    -80 > this.Ga && (this.Ga = -80);
    this.rc = this.visible;
    this.ba += 1
  }, ob:function(b, c) {
    c = c || this.Ga;
    for(var f = 0;f < b;f++) {
      var g = a.clone().setPosition(this.x, c).addChildTo(this.parent), i = S(8, 14), n = S(0, Math.PI);
      g.qa = Math.cos(n) * i;
      g.ra = Math.sin(n) * i;
      g.scaleX = g.scaleY = (S(0.5, 1.5) + S(0.5, 1.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.qa;
        this.y += this.ra;
        this.qa *= 0.9;
        this.ra *= 0.9
      })
    }
  }, draw:function(a) {
    this.c.clear();
    for(var c = 0;6 > c;c++) {
      this.c.drawImage(this.image, 0, -(15 * this.ba % 240) + 240 * c)
    }
    this.height = Math.max(this.y - this.Ga, 1);
    a.context.drawImage(this.c.element, 0, this.c.height - this.height, this.c.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height);
    var c = this.head.ss.getFrame(this.head.currentFrame), f = this.head.ss.image.element;
    a.drawImage(f, c.x, c.y, c.width, c.height, -this.width * this.origin.x - 43, -this.height * this.origin.y - 75, 150, 150);
    c = this.ab.ss.getFrame(this.ab.currentFrame);
    f = this.ab.ss.image.element;
    a.drawImage(f, c.x, c.y, c.width, c.height, -this.width * this.origin.x - 43, -this.height * this.origin.y + this.height - 37, 150, 74)
  }})
})();
var T = tm.createClass({Pe:0, md:0, ed:0, da:k, ha:k, frame:0, background:k, init:function(a) {
  var b = this.ha = a;
  this.da = a.da;
  b.Ea.direction = 0.5 * Math.PI;
  b.Ea.speed = 0.5;
  this.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"#030"}, {offset:1, color:"#010"}]).toStyle();
  this.frame = 0
}, update:function() {
  if(200 < this.frame && 0 === this.frame % 30) {
    var a;
    a = [];
    for(var b in I) {
      I.hasOwnProperty(b) && a.push(b)
    }
    a = I[["tank-left", "heri1-left"].random()];
    b = 0;
    for(var c = a.length;b < c;b++) {
      this.fe(a[b])
    }
  }
  this.frame += 1
}, fe:function(a) {
  var b = H.oe.shift();
  b ? (this.ed += 1, b.ja(this.ha, this, a.aa, a.$).setPosition(a.x, a.y).addChildTo(this.ha).fb()) : console.warn("\u6575\u304c\u8db3\u308a\u306a\u3044\uff01")
}, ge:function() {
  this.md += 1
}});
T.create = function(a) {
  return T(a)
};
z = {ja:function() {
  z.explosion = Array.range(0, 4).map(function(a) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + a, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  z.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  z.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  z.particle16 = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, ob:function(a, b, c) {
  a = z.particle16.clone().setPosition(a, b).addChildTo(c);
  b = S(5, 20);
  c = S(Math.PI, 2 * Math.PI);
  a.qa = Math.cos(c) * b;
  a.ra = Math.sin(c) * b;
  a.scaleX = a.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
  a.addEventListener("enterframe", function() {
    this.x += this.qa;
    this.y += this.ra;
    this.qa *= 0.9;
    this.ra *= 0.9
  })
}, ce:function(a, b, c) {
  var f = tm.app.Sprite().setPosition(a, b).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  f.image = z.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, Ud:function(a, b, c) {
  P();
  var f = z.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.5).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  f.ld = j;
  f.addChildTo(c);
  z.ce(a, b, c)
}, Ee:function(a, b, c) {
  P();
  var f = z.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  f.ld = j;
  f.addChildTo(c);
  for(f = 0;10 > f;f++) {
    z.ob(a, b, c)
  }
}};
var U = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, pe:function(a, b) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = b
}, finish:function(a) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(a)
}, update:function(a) {
  a.pointing.getPointingEnd() && aa(a.pointing).addChildTo(this)
}}), aa = tm.createClass({superClass:tm.app.CircleShape, init:function(a) {
  this.superInit(150, 150, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(75, 75, 0, 75, 75, 75).addColorStopList([{offset:0, color:"rgba(255,255,255,0.0)"}, {offset:0.6, color:"rgba(255,255,255,0.0)"}, {offset:1, color:"rgba(255,255,255,0.8)"}]).toStyle()});
  this.setPosition(a.x, a.y);
  this.width = this.height = 1;
  this.tweener.clear().to({width:150, height:150, alpha:0}, 300, "easeOutQuad").call(function() {
    this.remove()
  }.bind(this))
}});
var ba = tm.createClass({superClass:U, titleText:k, menu:k, descriptions:k, showExit:l, title:k, selections:[], description:k, box:k, cursor:k, _selected:0, _opened:l, _finished:l, init:function(a, b, c, f, g) {
  this.superInit();
  this.titleText = a;
  this.menu = b;
  this._selected = ~~c;
  this.showExit = !!g;
  this.descriptions = f ? f : [].concat(b);
  this.showExit && (b.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  a = Math.max(50 * (1 + b.length), 50) + 40;
  this.box = tm.app.RectangleShape(384, a, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"rgba(1,2,48,0.8)"}).setPosition(240, 320);
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
    g.interactive = j;
    g.addEventListener("touchend", function() {
      f._selected === c ? f.closeDialog(f._selected) : f._selected = c
    });
    g.width = 336;
    return g
  }.bind(this));
  this._createCursor();
  this._opened = j
}, _createCursor:function() {
  this.cursor = tm.app.RectangleShape(336, 10, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.LinearGradient(0, 0, 336, 0).addColorStopList([{offset:0, color:"rgba(  0,255,100,0.0)"}, {offset:0.2, color:"rgba(  0,255,100,0.3)"}, {offset:0.5, color:"rgba(  0,255,255,0.5)"}, {offset:0.8, color:"rgba(  0,255,100,0.3)"}, {offset:1, color:"rgba(  0,255,100,0.0)"}]).toStyle()}).addChildTo(this);
  this.cursor.blendMode = "lighter";
  this.cursor.x = 240;
  this.cursor.s = this._selected;
  this.cursor.y = this.selections[this._selected].y;
  this.cursor.update = function() {
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"))
  }
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments);
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(a.frame / 2) % 2 : this.showExit && a.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") ? this.closeDialog(this._selected) : a.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = Q(this._selected, 0, this.selections.length - 1)) : a.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = 
  Q(this._selected, 0, this.selections.length - 1)))
}, closeDialog:function(a) {
  this._finished = j;
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
function V(a, b, c, f, g, i, n) {
  n === h && (n = j);
  a.pe(ba(b, c, g, i, n), f)
}
;G = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, pc:0.85, size:0, image:k, init:function(a, b, c, f) {
  this.superInit();
  this.width = this.height = this.size = a;
  b !== h && (this.alpha = b);
  c !== h && (this.pc = c);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.pc;
  0.0010 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return G(this.size, this.Le, this.pc, this.image)
}});
F = tm.createClass({superClass:G, Ea:k, init:function(a) {
  this.superInit(20, 1, 0.8, tm.graphics.Canvas().resize(20, 20).setFillStyle(tm.graphics.RadialGradient(10, 10, 0, 10, 10, 10).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 20, 20).element);
  this.Ea = a
}, update:function(a) {
  this.superClass.prototype.update.apply(this, a);
  this.x += this.Ea.qa;
  this.y += this.Ea.ra + 0.2
}, clone:function() {
  return F(this.Ea)
}});
var ca = tm.createClass({superClass:tm.app.RectangleShape, label:k, Aa:k, init:function(a) {
  this.superInit(a, 64, {fillStyle:"rgba(1,2,48,0.5)", strokeStyle:"rgba(0,0,0,0)"});
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)").addChildTo(this);
  this.Aa = []
}, Md:function(a) {
  5 < this.Aa.length && this.Aa.splice(1, this.Aa.length - 4);
  this.Aa.push(a);
  return this
}, Nd:function() {
  this.Aa.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function(a) {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 === a.frame % 2 && 0 !== this.Aa.length) {
    if("" !== this.Aa[0]) {
      var c = this.Aa[0][0];
      this.Aa[0] = this.Aa[0].substring(1);
      b += c
    }else {
      this.Aa.shift(), c = b.split("\n"), 3 < c.length && (c.shift(), b = c.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (~~(a.frame / 6) % 2 ? "_" : " ")
}});
(function() {
  var a = k, b = k;
  t = tm.createClass({superClass:U, result:k, ba:0, Ab:[], Xb:l, kd:k, pd:0, bc:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.kd = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Xb = l;
      this.kd.text = "HIGH SCORE: " + s.Yb
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Tc(80 * Math.cos(0.01 * this.ba) + 240, 80 * Math.sin(0.01 * this.ba) + 320, 0);
    this.Tc(80 * Math.cos(0.01 * this.ba + Math.PI) + 240, 80 * Math.sin(0.01 * this.ba + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("space") || a.pointing.getPointingEnd()) && !this.Xb && this.td();
    this.ba += 1
  }, Tc:function(c, f, g) {
    if(!this.Xb) {
      a === k && (a = G(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === k && (b = G(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? a.clone().addChildTo(this) : b.clone().addChildTo(this);
      g.speed = 0.6;
      var i = S(0, 2 * Math.PI), n = W(0, 20);
      g.setPosition(Math.cos(i) * n + c, Math.sin(i) * n + f);
      var v = this;
      g.update = function() {
        this.x += Math.cos(i) * this.speed;
        this.y += Math.sin(i) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = v.Ab.indexOf(this);
          -1 !== a && v.Ab.splice(a, 1)
        }
      };
      this.Ab.push(g)
    }
  }, td:function() {
    V(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.je, this.pd, ["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"])
  }, je:function(a) {
    4 !== a && (this.pd = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Xb = j;
          for(var a = 0, b = this.Ab.length;a < b;a++) {
            this.Ab[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.ha.be(1);
          s.pushScene(s.ha)
        }.bind(this));
        break;
      case 2:
        this.Sa();
        break;
      case 3:
        s.Td()
    }
  }, Sa:function() {
    V(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Gc, this.bc, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
  }, Gc:function(a) {
    3 !== a && (this.bc = a);
    switch(a) {
      case 0:
        this.Hc();
        break;
      case 1:
        this.Ic();
        break;
      case 2:
        this.ne();
        break;
      default:
        this.td()
    }
  }, Hc:function() {
    V(this, "BGM VOLUME", "012345".split(""), this.Ec, s.Pb)
  }, Ec:function(a) {
    6 !== a && (s.Pb = a);
    this.Sa()
  }, Ic:function() {
    V(this, "SE VOLUME", "012345".split(""), this.Fc, s.qb)
  }, Fc:function(a) {
    6 !== a && (s.qb = a);
    this.Sa()
  }, ne:function() {
    V(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.ie, s.bd, ["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"])
  }, ie:function(a) {
    5 !== a && (s.bd = a);
    this.Sa()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
tm.createClass({superClass:U, init:function() {
  this.superInit();
  tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(240, 320).addChildTo(this)
}});
(function() {
  var a = k;
  A = tm.createClass({superClass:U, da:k, score:0, jb:k, Ea:k, Cb:3, jd:k, ud:k, fd:k, cd:k, dd:k, Xc:k, nd:k, wc:k, Kc:0, init:function() {
    a !== k && d(Error("class 'gls2.GameScene' is singleton!!"));
    this.superInit();
    a = this;
    this.Ed();
    this.jd = tm.app.Object2D().addChildTo(this);
    this.fd = tm.app.Object2D().addChildTo(this);
    this.cd = tm.app.Object2D().addChildTo(this);
    this.ud = tm.app.Object2D().addChildTo(this);
    this.dd = tm.app.Object2D().addChildTo(this);
    this.Xc = tm.app.Object2D().addChildTo(this);
    this.nd = tm.app.Object2D().addChildTo(this);
    this.wc = ca(200).setPosition(375, 37).addChildTo(this.nd);
    tm.wa.Va.wb.Vc = this
  }, Jc:function(a) {
    this.wc.Md(a)
  }, Ed:function() {
    var a = this.Ea = tm.app.CanvasElement().addChildTo(this);
    a.zc = a.Ac = 0;
    a.direction = 0.5 * Math.PI;
    a.Sb = 20;
    a.speed = 1;
    a.qa = 0;
    a.ra = 0;
    a.update = function() {
      this.qa = Math.cos(this.direction) * this.speed;
      this.ra = Math.sin(this.direction) * this.speed;
      this.zc = (this.zc + this.qa) % this.Sb;
      this.Ac = (this.Ac + this.ra) % this.Sb
    };
    a.blendMode = "lighter";
    a.draw = function(a) {
      a.lineWidth = 0.2;
      a.strokeStyle = "#rgba(255,255,255,0.5)";
      a.beginPath();
      for(var b = this.zc;480 > b;b += this.Sb) {
        a.line(b, 0, b, 640)
      }
      for(b = this.Ac;640 > b;b += this.Sb) {
        a.line(0, b, 480, b)
      }
      a.stroke()
    }
  }, addChild:function(a) {
    a instanceof B ? this.ud.addChild(a) : a instanceof H ? a.yb ? (console.log("ge"), this.jd.addChild(a)) : (console.log("ae"), this.fd.addChild(a)) : a instanceof F || a instanceof E || a instanceof C ? this.cd.addChild(a) : a instanceof G || a.ld ? this.dd.addChild(a) : a instanceof K ? this.Xc.addChild(a) : this.superClass.prototype.addChild.apply(this, arguments)
  }, update:function(a) {
    this.jb.update(a.frame);
    a.keyboard.getKeyDown("escape") ? this.app.popScene() : a.keyboard.getKeyDown("space") ? this.cc(0) : a.keyboard.getKeyDown("p") && (a.canvas.saveAsImage(), this.cc(0))
  }, cc:function(a) {
    V(this, "PAUSE", ["resume", "setting", "exit game"], this.ke, a, ["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], l)
  }, ke:function(a) {
    switch(a) {
      case 1:
        this.Sa();
        break;
      case 2:
        this.me()
    }
  }, Sa:function() {
    V(this, "SETTING", ["bgm volume", "sound volume"], this.Gc, this.bc, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
  }, Gc:function(a) {
    3 !== a && (this.bc = a);
    switch(a) {
      case 0:
        this.Hc();
        break;
      case 1:
        this.Ic();
        break;
      default:
        this.cc()
    }
  }, me:function() {
    V(this, "REARY?", ["yes", "no"], this.he, 1, ["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], l)
  }, he:function(a) {
    0 === a ? this.app.popScene() : this.cc(1)
  }, Hc:function() {
    V(this, "BGM VOLUME", "012345".split(""), this.Ec, s.Pb)
  }, Ec:function(a) {
    6 !== a && (s.Pb = a);
    this.Sa(1)
  }, Ic:function() {
    V(this, "SE VOLUME", "012345".split(""), this.Fc, s.qb)
  }, Fc:function(a) {
    6 !== a && (s.qb = a);
    this.Sa(1)
  }, draw:function(a) {
    this.jb !== k && a.clearColor(this.jb.background, 0, 0)
  }, be:function() {
    this.wc.Nd().clear();
    this.da !== k && this.da.remove();
    H.ub();
    E.ub();
    w.ub();
    this.da = B(this);
    this.qe(0)
  }, qe:function(a) {
    this.jb = T.create(this, a);
    this.Dc()
  }, Dc:function() {
    this.da.setPosition(240, 672).setFrameIndex(3).addChildTo(this);
    this.da.$a = l;
    this.da.sd = j;
    this.da.tweener.clear().wait(30).moveBy(0, -120).wait(120).call(function() {
      this.$a = j
    }.bind(this.da)).wait(120).call(function() {
      this.sd = l
    }.bind(this.da))
  }, Me:function() {
    this.da.remove();
    this.Cb -= 1;
    0 < this.Cb && this.Dc()
  }, Ie:function() {
    this.Dc()
  }, Ce:m(), Je:m(), He:m(), xe:function(a) {
    this.score += a;
    for(var c = 0;c < s.gd.length;c++) {
      var f = s.gd[c];
      a < f && f <= this.score && this.Wd()
    }
    s.Yb = Math.max(s.Yb, this.score)
  }, Wd:function() {
    this.Cb += 1
  }})
})();
tm.createClass({superClass:U, init:function() {
  this.superInit()
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments)
}});
tm.createClass({superClass:U, init:function() {
  this.superInit()
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments)
}});
tm.createClass({superClass:U, init:function() {
  this.superInit()
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments)
}});
tm.createClass({superClass:U, init:function() {
  this.superInit()
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments)
}});
(function() {
  H = tm.createClass({superClass:tm.app.CanvasElement, ba:0, direction:0, speed:0, da:k, ha:k, jb:k, $:k, aa:k, bb:0, Ub:j, yb:l, La:l, init:function() {
    this.superInit();
    this.addEventListener("completeattack", function() {
      this.eb()
    });
    this.addEventListener("added", function() {
      this.ba = 0;
      this.La = l;
      this.Ub = j;
      a.push(this)
    });
    this.addEventListener("removed", function() {
      var c = [].concat(this._listeners.enterframe);
      if(c) {
        for(var g = 0, i = c.length;g < i;g++) {
          c[g] && c[g].Bc && this.removeEventListener("enterframe", c[g])
        }
      }
      this.tweener.clear();
      this.scaleX = this.scaleY = 1;
      this.yb = l;
      b.push(this);
      c = a.indexOf(this);
      -1 !== c && a.splice(c, 1)
    })
  }, ja:function(a, b, c, n) {
    this.ha = a;
    this.da = a.da;
    this.jb = b;
    this.aa = c;
    this.$ = n;
    this.aa.ja.apply(this);
    this.$.ja.apply(this);
    this.yb ? this.shadowBlur = 0 : N(this);
    return this
  }, fb:function() {
    this.aa.fb.apply(this);
    this.$.fb.apply(this)
  }, eb:function() {
    this.aa.eb.apply(this);
    this.$.eb.apply(this)
  }, update:function() {
    this.cb() && (this.La = j);
    this.aa.update.apply(this);
    this.$.update.apply(this);
    this.yb && (this.x += this.ha.Ea.qa, this.y += this.ha.Ea.ra);
    this.ba += 1
  }, Zc:function(a) {
    if(!this.La) {
      return l
    }
    this.bb -= a;
    return 0 >= this.bb ? (this.$.Rd.apply(this), a = W(0, 2), 0 === a ? this.ha.Jc("enemy destroy.") : 1 === a ? this.ha.Jc(this.name + " destroy.") : 2 === a && this.ha.Jc("ETR reaction gone."), this.remove(), this.jb.ge(this), j) : l
  }, draw:function(a) {
    this.$.draw.call(this, a)
  }, cb:function() {
    var a = this.radius;
    return-a <= this.x && this.x < 480 + a && -a <= this.y && this.y < 640 + a
  }, le:function() {
    return this.Ub
  }});
  H.ub = function() {
    for(var b = [].concat(a), c = 0, i = b.length;c < i;c++) {
      b[c].remove()
    }
  };
  for(var a = H.oc = [], b = H.oe = [], c = 0;256 > c;c++) {
    b.push(H())
  }
})();
(function() {
  var a = tm.createClass({superClass:tm.app.Sprite, init:function(a, c, f) {
    this.superInit(a, c, f)
  }, draw:function(a) {
    var c = this.srcRect;
    a.context.drawImage(this._image.element, c.x, c.y, c.width, c.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }});
  L = tm.createClass({ja:function() {
    this.name = "abstract enemy";
    this.bb = 9999
  }, fb:m(), eb:m(), update:m(), draw:m(), Rd:function() {
    z.Ud(this.x, this.y, this.ha)
  }});
  L.ka = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, ja:function() {
    this.name = "kujo";
    this.bb = 3;
    this.ma = a("tex1", 64, 64)
  }, update:function() {
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    2 > this.ba % 4 ? this.ma.setFrameIndex(7) : this.ma.setFrameIndex(8);
    this.ma.draw(a)
  }});
  L.ka = L.ka();
  L.ca = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, ja:function() {
    this.name = "kiryu";
    this.bb = 10;
    this.ma = a("tex1", 64, 64)
  }, update:function() {
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    2 > this.ba % 4 ? this.ma.setFrameIndex(9) : this.ma.setFrameIndex(10);
    this.ma.draw(a)
  }});
  L.ca = L.ca();
  L.ga = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, ja:function() {
    this.name = "natsuki";
    this.bb = 5;
    this.yb = j;
    this.ma = a("tex1", 48, 48);
    this.radius = 24
  }, update:function() {
    switch(this.dir) {
      case 0:
        this.ma.setFrameIndex(16, 64, 64);
        break;
      case 1:
        this.ma.setFrameIndex(24, 64, 64);
        break;
      case 2:
        this.ma.setFrameIndex(23, 64, 64);
        break;
      case 3:
        this.ma.setFrameIndex(11, 64, 64);
        break;
      case 4:
        this.ma.setFrameIndex(12, 64, 64);
        break;
      case 5:
        this.ma.setFrameIndex(13, 64, 64);
        break;
      case 6:
        this.ma.setFrameIndex(14, 64, 64);
        break;
      case 7:
        this.ma.setFrameIndex(15, 64, 64)
    }
  }, draw:function(a) {
    this.ma.draw(a)
  }});
  L.ga = L.ga()
})();
(function() {
  function a(a, c) {
    var f = w[c].Tb();
    a.addEventListener("enterframe", f);
    a.addEventListener("completeattack", function() {
      this.removeEventListener("enterframe", f)
    })
  }
  M = tm.createClass({ja:m(), fb:m(), eb:m(), update:m()});
  M.Ca = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, fb:function() {
    var b = S(64, 192);
    this.tweener.clear().wait(W(10, 500)).move(this.x, b, 7 * b, "easeOutQuad").call(function() {
      a(this, "basic0-0")
    }.bind(this))
  }, eb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  M.Ca = M.Ca();
  M.Na = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, fb:function() {
    var b = S(192, 320);
    this.tweener.clear().wait(W(10, 500)).move(this.x, b, 7 * b, "easeOutQuad").call(function() {
      a(this, "basic0-0")
    }.bind(this))
  }, eb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  M.Na = M.Na();
  M.ca = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, ja:function() {
    this.angle = 0.5 * Math.PI;
    this.Lc = W(0, 60);
    this.speed = 0
  }, update:function() {
    this.ba === this.Lc ? this.speed = 8 : this.ba === this.Lc + 10 ? a(this, "basic1-0") : this.Lc < this.ba && this.y < this.da.y && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = Q(this.angle, 0.5, Math.PI - 0.5));
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    !this.cb() && this.La && this.remove();
    if(9E4 > (this.x - this.da.x) * (this.x - this.da.x) + (this.y - this.da.y) * (this.y - this.da.y) || this.y > this.da.y) {
      this.Ub = l
    }
  }});
  M.ca = M.ca();
  M.Wa = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, ja:function() {
    a(this, "basic2-0");
    this.dir = 0
  }, update:function() {
    this.x += 1;
    this.La && !this.cb() && this.remove()
  }});
  M.Wa = M.Wa();
  M.Xa = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, ja:function() {
    a(this, "basic2-0");
    this.dir = 1
  }, update:function() {
    this.x += 0.7;
    this.y += 0.7;
    this.La && !this.cb() && this.remove()
  }});
  M.Xa = M.Xa();
  M.la = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, ja:function() {
    a(this, "basic2-0");
    this.dir = 2
  }, update:function() {
    this.y += 1;
    this.La && !this.cb() && this.remove()
  }});
  M.la = M.la();
  M.Qc = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, ja:function() {
    a(this, "basic2-0");
    this.dir = 3
  }, update:function() {
    this.x -= 0.7;
    this.y += 0.7;
    this.La && !this.cb() && this.remove()
  }});
  M.Qc = M.Qc();
  M.Pc = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, ja:function() {
    a(this, "basic2-0");
    this.dir = 4
  }, update:function() {
    this.x -= 1;
    this.La && !this.cb() && this.remove()
  }});
  M.Pc = M.Pc()
})();
var X = M, Y = L;
I = {"heri1-left":[{aa:X.Ca, $:Y.ca, x:48, y:-100}, {aa:X.Na, $:Y.ca, x:96, y:-100}, {aa:X.Ca, $:Y.ca, x:144, y:-100}, {aa:X.Na, $:Y.ca, x:192, y:-100}, {aa:X.Ca, $:Y.ca, x:240, y:-100}], "heri1-center":[{aa:X.Ca, $:Y.ca, x:144, y:-100}, {aa:X.Na, $:Y.ca, x:192, y:-100}, {aa:X.Ca, $:Y.ca, x:240, y:-100}, {aa:X.Na, $:Y.ca, x:288, y:-100}, {aa:X.Ca, $:Y.ca, x:336, y:-100}], "heri1-right":[{aa:X.Ca, $:Y.ca, x:240, y:-100}, {aa:X.Na, $:Y.ca, x:288, y:-100}, {aa:X.Ca, $:Y.ca, x:336, y:-100}, {aa:X.Na, 
$:Y.ca, x:384, y:-100}, {aa:X.Ca, $:Y.ca, x:432, y:-100}], "heri2-left":[{aa:X.ca, $:Y.ka, x:48, y:-100}, {aa:X.ca, $:Y.ka, x:96, y:-100}, {aa:X.ca, $:Y.ka, x:144, y:-100}, {aa:X.ca, $:Y.ka, x:192, y:-100}, {aa:X.ca, $:Y.ka, x:240, y:-100}], "heri2-center":[{aa:X.ca, $:Y.ka, x:144, y:-100}, {aa:X.ca, $:Y.ka, x:192, y:-100}, {aa:X.ca, $:Y.ka, x:240, y:-100}, {aa:X.ca, $:Y.ka, x:288, y:-100}, {aa:X.ca, $:Y.ka, x:336, y:-100}], "heri2-right":[{aa:X.ca, $:Y.ka, x:240, y:-100}, {aa:X.ca, $:Y.ka, x:288, 
y:-100}, {aa:X.ca, $:Y.ka, x:336, y:-100}, {aa:X.ca, $:Y.ka, x:384, y:-100}, {aa:X.ca, $:Y.ka, x:432, y:-100}], "tank-left":[{aa:X.Wa, $:Y.ga, x:-64, y:192}, {aa:X.Wa, $:Y.ga, x:-128, y:192}, {aa:X.Wa, $:Y.ga, x:-192, y:192}, {aa:X.Wa, $:Y.ga, x:-256, y:192}, {aa:X.Wa, $:Y.ga, x:-320, y:192}], "tank-leftUpper":[{aa:X.Xa, $:Y.ga, x:-110, y:-46}, {aa:X.Xa, $:Y.ga, x:-156, y:-92}, {aa:X.Xa, $:Y.ga, x:-202, y:-138}, {aa:X.Xa, $:Y.ga, x:-248, y:-184}, {aa:X.Xa, $:Y.ga, x:-294, y:-230}], "tank-upper0":[{aa:X.la, 
$:Y.ga, x:120, y:-64}, {aa:X.la, $:Y.ga, x:120, y:-128}, {aa:X.la, $:Y.ga, x:120, y:-192}, {aa:X.la, $:Y.ga, x:120, y:-256}, {aa:X.la, $:Y.ga, x:120, y:-320}], "tank-upper1":[{aa:X.la, $:Y.ga, x:240, y:-64}, {aa:X.la, $:Y.ga, x:240, y:-128}, {aa:X.la, $:Y.ga, x:240, y:-192}, {aa:X.la, $:Y.ga, x:240, y:-256}, {aa:X.la, $:Y.ga, x:240, y:-320}], "tank-upper2":[{aa:X.la, $:Y.ga, x:360, y:-64}, {aa:X.la, $:Y.ga, x:360, y:-128}, {aa:X.la, $:Y.ga, x:360, y:-192}, {aa:X.la, $:Y.ga, x:360, y:-256}, {aa:X.la, 
$:Y.ga, x:360, y:-320}]};
(function() {
  var a = [], b = [];
  K = tm.createClass({superClass:tm.app.Sprite, init:function() {
    this.superInit("tex0", 20, 20);
    this.addEventListener("removed", function() {
      a.push(this);
      var c = b.indexOf(this);
      -1 !== c && b.splice(c, 1);
      this.clearEventListener("enterframe")
    })
  }});
  w = {ja:function() {
    for(var c = 0;255 > c;c++) {
      a.push(K())
    }
    c = tm.wa.Va.wb;
    c.Cc = function(a) {
      return!(a instanceof K) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    c.Wc = function() {
      var c = a.shift(0);
      if(c) {
        return b.push(c), c.setFrameIndex(1), c.scaleX = 1.2, c.scaleY = 1.5, c.addEventListener("enterframe", function() {
          this.rotation += 15
        }), c
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    c.hb = 3
  }, ub:function() {
    for(var a = [].concat(b), c = 0, f = a.length;c < f;c++) {
      a[c].remove()
    }
  }};
  var c = p.fa, f = c.Vb(c.direction(0), c.ia());
  w["basic0-0"] = new p.ya({top:c.action([f])});
  w["basic0-4"] = new p.ya({top:c.action([c.repeat(3, [c.repeat(5, [c.Vb(c.direction(-20), c.speed("$loop.count*0.06+0.75"), c.ia()), c.Vb(c.direction(0), c.speed("$loop.count*0.06+0.75"), c.ia()), c.Vb(c.direction(20), c.speed("$loop.count*0.06+0.75"), c.ia())]), c.wait(40)])])});
  w["basic1-0"] = new p.ya({top:c.action([c.repeat(999, [f, c.wait(20)])])});
  w["basic2-0"] = new p.ya({top:c.action([c.wait("120"), c.repeat(999, [c.wait("50*$rand*5"), f])])})
})();
var Q, R, S, W, $;
Q = function(a, b, c) {
  return a < b ? b : a > c ? c : a
};
$ = Math.PI / 180;
R = function(a) {
  return a * $
};
W = function(a, b) {
  return window.Math.floor(Math.random() * (b - a + 1)) + a
};
S = function(a, b) {
  return window.Math.random() * (b - a) + a
};

