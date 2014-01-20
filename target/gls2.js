/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(b) {
  throw b;
}
var h = void 0, j = !0, k = null, l = !1;
function n() {
  return function() {
  }
}
var t = {Fi:this};
(function() {
  function b(a, d) {
    for(var b = 0, i = a.length;b < i;b++) {
      if(a[b].label == d) {
        return a[b]
      }
    }
  }
  t.ka = function(a) {
    this.type = "none";
    this.root = this;
    this.eb = [];
    this.Ce = [];
    this.Le = [];
    if(a !== h) {
      for(var d in a) {
        a.hasOwnProperty(d) && (a[d].label = d, a[d] instanceof t.Hb ? this.eb.push(a[d]) : a[d] instanceof t.Ma ? this.Ce.push(a[d]) : a[d] instanceof t.kd && this.Le.push(a[d]))
      }
      a = 0;
      for(d = this.eb.length;a < d;a++) {
        this.eb[a].Qb(this)
      }
      a = 0;
      for(d = this.Ce.length;a < d;a++) {
        this.Ce[a].Qb(this)
      }
      a = 0;
      for(d = this.Le.length;a < d;a++) {
        this.Le[a].Qb(this)
      }
    }
  };
  t.ka.prototype.Ch = function(a) {
    return b(this.eb, a)
  };
  t.ka.prototype.tk = function() {
    for(var a = [], d = 0, b = this.eb.length;d < b;d++) {
      var i = this.eb[d];
      i.label && 0 === i.label.indexOf("top") && (a[a.length] = i.label)
    }
    return a
  };
  t.ka.prototype.hk = function(a) {
    var d;
    if(d = this.Ch(a)) {
      return d
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  t.ka.prototype.ik = function(a) {
    return b(this.Ce, a)
  };
  t.ka.prototype.jk = function(a) {
    var d;
    if(d = this.ik(a)) {
      return d
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  t.ka.prototype.kk = function(a) {
    return b(this.Le, a)
  };
  t.ka.prototype.lk = function(a) {
    var d;
    if(d = this.kk(a)) {
      return d
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  t.Ma = function() {
    this.root = this.label = k;
    this.direction = new t.qc(0);
    this.speed = new t.uc(1);
    this.eb = [];
    this.Ta = {};
    this.Aa = {}
  };
  t.Ma.prototype.clone = function(a) {
    var d = new t.Ma;
    d.label = this.label;
    d.root = this.root;
    d.eb = this.eb;
    d.direction = new t.qc(a.Ya(this.direction.value));
    d.direction.type = this.direction.type;
    d.speed = new t.uc(a.Ya(this.speed.value));
    d.speed.type = this.speed.type;
    d.Ta = this.Ta;
    d.Aa = a.Aa;
    return d
  };
  t.Ma.prototype.Qb = function(a) {
    this.root = a;
    for(var d = 0, b = this.eb.length;d < b;d++) {
      this.eb[d].Qb(a)
    }
  };
  t.ke = function(a) {
    this.root = k;
    this.label = a;
    this.$a = []
  };
  t.ke.prototype.clone = function(a) {
    var d = a.Aa;
    a.Aa = a.Of(this.$a);
    var b = this.root.jk(this.label).clone(a);
    a.Aa = d;
    return b
  };
  t.ke.prototype.Qb = function(a) {
    this.root = a
  };
  t.cb = function() {
    this.yb = ""
  };
  t.cb.prototype.Qb = function(a) {
    this.root = a
  };
  t.Hb = function() {
    this.yb = "action";
    this.root = this.label = k;
    this.Xb = [];
    this.$a = []
  };
  t.Hb.prototype = new t.cb;
  t.Hb.prototype.Qb = function(a) {
    this.root = a;
    for(var d = 0, b = this.Xb.length;d < b;d++) {
      this.Xb[d].Qb(a)
    }
  };
  t.Hb.prototype.clone = function() {
    var a = new t.Hb;
    a.label = this.label;
    a.root = this.root;
    a.Xb = this.Xb;
    return a
  };
  t.hd = function(a) {
    this.yb = "actionRef";
    this.label = a;
    this.root = k;
    this.$a = []
  };
  t.hd.prototype = new t.cb;
  t.hd.prototype.clone = function() {
    var a = new t.Hb;
    a.root = this.root;
    a.Xb.push(this);
    return a
  };
  t.kd = function() {
    this.yb = "fire";
    this.Ga = this.speed = this.direction = this.root = this.label = k;
    this.Ta = new t.oe
  };
  t.kd.prototype = new t.cb;
  t.kd.prototype.Qb = function(a) {
    this.root = a;
    this.Ga && this.Ga.Qb(a)
  };
  t.lf = function(a) {
    this.yb = "fireRef";
    this.label = a;
    this.$a = []
  };
  t.lf.prototype = new t.cb;
  t.me = function() {
    this.yb = "changeDirection";
    this.direction = new t.qc;
    this.rb = 0
  };
  t.me.prototype = new t.cb;
  t.ne = function() {
    this.yb = "changeSpeed";
    this.speed = new t.uc;
    this.rb = 0
  };
  t.ne.prototype = new t.cb;
  t.je = function() {
    this.yb = "accel";
    this.lc = new t.pf;
    this.pc = new t.Mf;
    this.rb = 0
  };
  t.je.prototype = new t.cb;
  t.ue = function(a) {
    this.yb = "wait";
    this.value = a || 0
  };
  t.ue.prototype = new t.cb;
  t.Lf = function() {
    this.yb = "vanish"
  };
  t.Lf.prototype = new t.cb;
  t.se = function() {
    this.yb = "repeat";
    this.gi = 0;
    this.action = k;
    this.$a = []
  };
  t.se.prototype = new t.cb;
  t.se.prototype.Qb = function(a) {
    this.root = a;
    this.action && this.action.Qb(a)
  };
  t.ff = function(a, d) {
    this.yb = "bind";
    this.hl = a;
    this.gk = d
  };
  t.ff.prototype = new t.cb;
  t.Cf = function(a, d) {
    this.yb = "notify";
    this.dk = a;
    this.$a = d || k
  };
  t.Cf.prototype = new t.cb;
  t.Bi = new t.cb;
  t.qc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  t.uc = function(a) {
    this.type = "absolute";
    this.value = a === h ? 1 : a
  };
  t.pf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  t.Mf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  t.oe = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.va = j;
    a.va !== h && (this.va = !!a.va)
  };
  t.bh = function(a) {
    this.value = a || 0
  };
  t.dh = function(a) {
    this.value = a || 0
  };
  t.Ng = function(a) {
    this.value = !!a
  }
})();
t.Pa = function(b) {
  this.mh = b;
  this.ve = [];
  this.Fc = -1;
  this.kb = k;
  this.Aa = {}
};
t.Pa.prototype.next = function() {
  this.Fc += 1;
  if(this.kb !== k) {
    var b = this.kb.Xb[this.Fc];
    if(b !== h) {
      if(b instanceof t.Hb) {
        return this.Id(), this.kb = b, this.Aa = this.Nf(), this.next()
      }
      if(b instanceof t.hd) {
        return this.Id(), this.kb = this.mh.hk(b.label), this.Aa = this.Of(b.$a), this.next()
      }
      if(b instanceof t.se) {
        return this.Aa.Ad = 0, this.Aa.Th = this.Ya(b.gi) | 0, this.Id(), this.kb = b.action.clone(), this.Aa = this.Nf(), this.next()
      }
      if(b instanceof t.kd) {
        var a = new t.kd;
        a.Ga = b.Ga.clone(this);
        b.direction !== k && (a.direction = new t.qc(this.Ya(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== k && (a.speed = new t.uc(this.Ya(b.speed.value)), a.speed.type = b.speed.type);
        a.Ta = new t.oe;
        a.Ta.offsetX = this.Ya(b.Ta.offsetX);
        a.Ta.offsetY = this.Ya(b.Ta.offsetY);
        a.Ta.va = b.Ta.va;
        return a
      }
      return b instanceof t.lf ? (this.Id(), this.kb = new t.Hb, this.kb.Xb = [this.mh.lk(b.label)], this.Aa = this.Of(b.$a), this.next()) : b instanceof t.me ? (a = new t.me, a.direction.type = b.direction.type, a.direction.value = this.Ya(b.direction.value), a.rb = this.Ya(b.rb), a) : b instanceof t.ne ? (a = new t.ne, a.speed.type = b.speed.type, a.speed.value = this.Ya(b.speed.value), a.rb = this.Ya(b.rb), a) : b instanceof t.je ? (a = new t.je, a.lc.type = b.lc.type, a.lc.value = this.Ya(b.lc.value), 
      a.pc.type = b.pc.type, a.pc.value = this.Ya(b.pc.value), a.rb = this.Ya(b.rb), a) : b instanceof t.ue ? new t.ue(this.Ya(b.value)) : b instanceof t.Lf ? b : b instanceof t.ff ? (this.Aa["$" + b.hl] = this.Ya(b.gk), t.Bi) : b instanceof t.Cf ? b : k
    }
    this.Rj();
    if(this.kb === k) {
      return k
    }
    if((b = this.kb.Xb[this.Fc]) && "repeat" == b.yb) {
      this.Aa.Ad++, this.Aa.Ad < this.Aa.Th && (this.Id(), this.kb = b.action.clone(), this.Aa = this.Nf())
    }
    return this.next()
  }
  return k
};
t.Pa.prototype.Id = function() {
  this.ve.push({action:this.kb, cursor:this.Fc, scope:this.Aa});
  this.Fc = -1
};
t.Pa.prototype.Rj = function() {
  var b = this.ve.pop();
  b ? (this.Fc = b.cursor, this.kb = b.action, this.Aa = b.scope) : (this.Fc = -1, this.kb = k, this.Aa = {})
};
t.Pa.prototype.Ya = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Aa[b]) || (a = t.Pa.Nb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in t.Pa.Nb) {
    t.Pa.Nb.hasOwnProperty(d) && (a[d] = t.Pa.Nb[d])
  }
  for(d in this.Aa) {
    this.Aa.hasOwnProperty(d) && (a[d] = this.Aa[d])
  }
  a.$rand = Math.random();
  (d = this.ve[this.ve.length - 1]) && (a.$loop = {index:d.scope.Ad, count:d.scope.Ad + 1, first:0 === d.scope.Ad, last:d.scope.Ad + 1 >= d.scope.Th});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
t.Pa.prototype.Of = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.Ya(b[d])
    }
  }else {
    for(d in this.Aa) {
      this.Aa.hasOwnProperty(d) && (a[d] = this.Aa[d])
    }
  }
  return a
};
t.Pa.prototype.Nf = function() {
  var b = {}, a;
  for(a in this.Aa) {
    this.Aa.hasOwnProperty(a) && (b[a] = this.Aa[a])
  }
  return b
};
t.ka.prototype.dg = function(b) {
  var a = new t.Pa(this);
  if(b = this.Ch(b)) {
    a.kb = b
  }
  return a
};
t.Ma.prototype.dg = function() {
  var b = new t.Pa(this.root), a = new t.Hb;
  a.root = this.root;
  a.Xb = this.eb;
  b.kb = a;
  b.Aa = this.Aa;
  return b
};
t.Pa.Nb = {};
t.Ha = function(b) {
  b = b || "";
  for(var a in t.Ha) {
    t.Ha.hasOwnProperty(a) && (t.Fi[b + a] = t.Ha[a])
  }
};
t.Ha.action = function(b) {
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
  var f = new t.Hb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof t.cb)
    }) && g(Error("argument type error.")), f.Xb = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof t.cb ? f.Xb[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return f
};
t.Ha.ya = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("label is required."));
  f = new t.hd(b);
  if(a instanceof Array) {
    f.$a = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.$a.push(arguments[d])
    }
  }
  return f
};
t.Ha.Ga = function(b, a, d, f) {
  for(var i = 0, p = arguments.length;i < p;i++) {
    arguments[i] instanceof Function && (arguments[i] = arguments[i]())
  }
  p = new t.Ma;
  for(i = 0;i < arguments.length;i++) {
    arguments[i] instanceof t.qc ? p.direction = arguments[i] : arguments[i] instanceof t.uc ? p.speed = arguments[i] : arguments[i] instanceof t.Hb ? p.eb.push(arguments[i]) : arguments[i] instanceof t.hd ? p.eb.push(arguments[i]) : arguments[i] instanceof Array ? p.eb.push(t.Ha.action(arguments[i])) : arguments[i] instanceof Object ? p.Ta = arguments[i] : "string" === typeof arguments[i] && (p.label = arguments[i])
  }
  return p
};
t.Ha.pl = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("label is required."));
  f = new t.ke(b);
  if(a instanceof Array) {
    f.$a = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.$a.push(arguments[d])
    }
  }
  return f
};
t.Ha.fire = function(b, a, d, f) {
  for(var i = 0, p = arguments.length;i < p;i++) {
    arguments[i] instanceof Function && (arguments[i] = arguments[i]())
  }
  p = new t.kd;
  for(i = 0;i < arguments.length;i++) {
    arguments[i] instanceof t.qc ? p.direction = arguments[i] : arguments[i] instanceof t.uc ? p.speed = arguments[i] : arguments[i] instanceof t.Ma ? p.Ga = arguments[i] : arguments[i] instanceof t.ke ? p.Ga = arguments[i] : arguments[i] instanceof t.oe ? p.Ta = arguments[i] : arguments[i] instanceof t.bh ? p.Ta.offsetX = arguments[i].value : arguments[i] instanceof t.dh ? p.Ta.offsetY = arguments[i].value : arguments[i] instanceof t.Ng && (p.Ta.va = arguments[i].value)
  }
  p.Ga === h && g(Error("bullet (or bulletRef) is required."));
  return p
};
t.Ha.ul = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("label is required."));
  f = new t.lf(b);
  if(a instanceof Array) {
    f.$a = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.$a.push(arguments[d])
    }
  }
  return f
};
t.Ha.ql = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("direction is required."));
  a === h && g(Error("term is required."));
  d = new t.me;
  d.direction = b instanceof t.qc ? b : new t.qc(b);
  d.rb = a;
  return d
};
t.Ha.De = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("speed is required."));
  a === h && g(Error("term is required."));
  d = new t.ne;
  d.speed = b instanceof t.uc ? b : new t.uc(b);
  d.rb = a;
  return d
};
t.Ha.ol = function(b, a, d) {
  for(var f = 0, i = arguments.length;f < i;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  i = new t.je;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof t.pf ? i.lc = b : arguments[f] instanceof t.Mf ? i.pc = a : i.rb = arguments[f]
  }
  i.lc === h && i.pc === h && g(Error("horizontal or vertical is required."));
  i.rb === h && g(Error("term is required."));
  return i
};
t.Ha.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === h && g(Error("value is required."));
  return new t.ue(b)
};
t.Ha.Xa = function() {
  return new t.Lf
};
t.Ha.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("times is required."));
  a === h && g(Error("action is required."));
  f = new t.se;
  f.gi = b;
  if(a instanceof t.Hb || a instanceof t.hd) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = t.Ha.action(a)
    }else {
      for(var i = [], d = 1;d < arguments.length;d++) {
        i.push(arguments[d])
      }
      f.action = t.Ha.action(i)
    }
  }
  return f
};
t.Ha.Na = function(b, a) {
  return new t.ff(b, a)
};
t.Ha.Al = function(b, a) {
  return new t.Cf(b, a)
};
t.Ha.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("value is required."));
  d = new t.qc(b);
  a !== h && (d.type = a);
  return d
};
t.Ha.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("value is required."));
  d = new t.uc(b);
  a && (d.type = a);
  return d
};
t.Ha.lc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("value is required."));
  d = new t.pf(b);
  a && (d.type = a);
  return d
};
t.Ha.pc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === h && g(Error("value is required."));
  d = new t.Mf(b);
  a && (d.type = a);
  return d
};
t.Ha.tl = function(b) {
  return new t.oe(b)
};
t.Ha.offsetX = function(b) {
  return new t.bh(b)
};
t.Ha.offsetY = function(b) {
  return new t.dh(b)
};
t.Ha.va = function(b) {
  return new t.Ng(b)
};
tm.xb = tm.xb || {};
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
  function a(a, d) {
    return Math.atan2(d.y - a.y, d.x - a.x)
  }
  tm.xb.Rc = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.jh = a
  }, Ge:function(a, d) {
    var b = this.jh.tk();
    if(d === h && 0 < b.length) {
      for(var f = [], A = 0, q = b.length;A < q;A++) {
        f[f.length] = this.kh(a, b[A])
      }
      for(var r = function() {
        if(!r.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          r.Yf == f.length && (r.Nd = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, A = f.length;A--;) {
        f[A].Ve = r
      }
      r.Yf = 0;
      r.sh = function() {
        this.Yf++
      };
      r.Yf = 0;
      r.Nd = l;
      r.hg = j;
      r.stop = l;
      return r
    }
    return this.kh(a, d)
  }, kh:function(a, d) {
    function b() {
      if(!b.stop) {
        b.na += 1;
        this.na = b.na;
        var a = b.Ee, d = b.Qj;
        if(d) {
          if(b.na < b.Wf ? b.direction += b.ud : b.na === b.Wf && (b.direction = b.Jc), b.na < b.Xf ? b.speed += b.he : b.na === b.Xf && (b.speed = b.Ed), b.na < b.Rf ? (b.ed += b.ye, b.gd += b.ze) : b.na === b.Rf && (b.ed = b.we, b.gd = b.xe), this.x += Math.cos(b.direction) * b.speed * a.fd, this.y += Math.sin(b.direction) * b.speed * a.fd, this.x += b.ed * a.fd, this.y += b.gd * a.fd, a.ig(this)) {
            if(a.Pc || this.Pc) {
              this.rotation = (b.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = b.speed
            }
            if(!(b.na < b.hi || b.Nd)) {
              for(var f;f = b.ii.next();) {
                switch(f.yb) {
                  case "fire":
                    d.Nj.call(this, f, a, b, d);
                    break;
                  case "wait":
                    a = 0;
                    b.hi = "number" === typeof f.value ? b.na + f.value : 0 !== (a = ~~f.value) ? b.na + a : b.na + eval(f.value);
                    return;
                  case "changeDirection":
                    d.Ij.call(this, f, a, b);
                    break;
                  case "changeSpeed":
                    d.Jj.call(this, f, b);
                    break;
                  case "accel":
                    d.Gj.call(this, f, b);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    d.Oj.call(this, f)
                }
              }
              b.Nd = j;
              b.Ve ? b.Ve.sh() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), b.Nd = j, b.Ve ? b.Ve.sh() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.xb.Rc.Od, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    d = d || "top";
    "string" === typeof d ? b.ii = this.jh.dg(d) : d instanceof t.Ma ? b.ii = d.dg() : (window.console.error(a, d), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    b.Qj = this;
    b.Ee = a;
    b.hi = -1;
    b.Nd = l;
    b.direction = 0;
    b.Qh = 0;
    b.speed = 0;
    b.Sh = 0;
    b.ed = 0;
    b.gd = 0;
    b.ud = 0;
    b.Jc = 0;
    b.Wf = -1;
    b.he = 0;
    b.Ed = 0;
    b.Xf = -1;
    b.ye = 0;
    b.we = 0;
    b.ze = 0;
    b.xe = 0;
    b.Rf = -1;
    b.na = -1;
    b.stop = l;
    b.hg = j;
    return b
  }, Mj:function(a) {
    function b() {
      b.stop || (this.x += b.wh, this.y += b.xh, b.Ee.ig(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.xb.Rc.Od, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.Ee = a;
    b.direction = 0;
    b.speed = 0;
    b.wh = 0;
    b.xh = 0;
    b.stop = l;
    b.hg = j;
    return b
  }, Nj:function(b, d, f, z) {
    if(this.Rk === h || this.Eb) {
      var A = {label:b.Ga.label}, q;
      for(q in b.Ga.Ta) {
        A[q] = b.Ga.Ta[q]
      }
      if(A = d.rh(A)) {
        z = (q = 0 === b.Ga.eb.length) ? z.Mj(d) : z.Ge(d, b.Ga);
        var r = this, u = {x:this.x + b.Ta.offsetX, y:this.y + b.Ta.offsetY};
        f.Qh = z.direction = function(q) {
          var m = eval(q.value) * Math.DEG_TO_RAD;
          switch(q.type) {
            case "aim":
              return d.target ? b.Ta.va ? a(u, d.target) + m : a(r, d.target) + m : m - Math.PI / 2;
            case "absolute":
              return m - Math.PI / 2;
            case "relative":
              return f.direction + m;
            default:
              return f.Qh + m
          }
        }(b.direction || b.Ga.direction);
        f.Sh = z.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.Sh + b;
            default:
              return b
          }
        }(b.speed || b.Ga.speed);
        A.x = u.x;
        A.y = u.y;
        q && (z.wh = Math.cos(z.direction) * z.speed * d.fd, z.xh = Math.sin(z.direction) * z.speed * d.fd);
        A.Pc = !!A.Pc;
        if(d.Pc || A.Pc) {
          A.rotation = (z.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, A.speed = z.speed
        }
        A.addEventListener("enterframe", z);
        d.oh ? d.oh.addChild(A) : this.parent && this.parent.addChild(A)
      }
    }
  }, Ij:function(d, f, s) {
    var z = eval(d.direction.value) * Math.DEG_TO_RAD, A = eval(d.rb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        s.Jc = a(this, d) + z;
        s.ud = b(s.Jc - s.direction) / A;
        break;
      case "absolute":
        s.Jc = z - Math.PI / 2;
        s.ud = b(s.Jc - s.direction) / A;
        break;
      case "relative":
        s.Jc = s.direction + z;
        s.ud = b(s.Jc - s.direction) / A;
        break;
      case "sequence":
        s.ud = z, s.Jc = s.direction + s.ud * (A - 1)
    }
    s.Wf = s.na + A
  }, Jj:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.rb);
    switch(a.speed.type) {
      case "absolute":
        b.Ed = d;
        b.he = (b.Ed - b.speed) / f;
        break;
      case "relative":
        b.Ed = d + b.speed;
        b.he = (b.Ed - b.speed) / f;
        break;
      case "sequence":
        b.he = d, b.Ed = b.speed + b.he * f
    }
    b.Xf = b.na + f
  }, Gj:function(a, b) {
    var d = eval(a.rb);
    b.Rf = b.na + d;
    if(a.lc) {
      var f = eval(a.lc.value);
      switch(a.lc.type) {
        case "absolute":
        ;
        case "sequence":
          b.ye = (f - b.ed) / d;
          b.we = f;
          break;
        case "relative":
          b.ye = f, b.we = (f - b.ed) * d
      }
    }else {
      b.ye = 0, b.we = b.ed
    }
    if(a.pc) {
      switch(f = eval(a.pc.value), a.pc.type) {
        case "absolute":
        ;
        case "sequence":
          b.ze = (f - b.gd) / d;
          b.xe = f;
          break;
        case "relative":
          b.ze = f, b.xe = (f - b.gd) * d
      }
    }else {
      b.ze = 0, b.xe = b.gd
    }
  }, Oj:function(a) {
    var b = tm.event.Event(a.dk);
    if(a.$a) {
      for(var d in a.$a) {
        b[d] = a.$a[d]
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
  tm.xb.$j = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = k;
  tm.xb.vh = function(a) {
    if(f === k) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.xb.rl = function() {
    return j
  };
  tm.xb.Rc.Od = {rh:tm.xb.$j, ig:tm.xb.vh, El:0, Pc:l, fd:2, target:k};
  t.ka.prototype.Ge = function(a) {
    return tm.xb.Rc(this).Ge(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(n());
tm.main(function() {
  gls2.Hi("#canvas2d");
  gls2.core.run()
});
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.Ua.Gd && gls2.Ua.Gd.ae(0)
};
gls2.Hi = tm.createClass({superClass:tm.display.CanvasApp, xd:0, Jh:0, Lh:0, Kh:0, Gh:0, Ih:k, Ld:3, dd:3, yh:1, da:k, init:function(b) {
  gls2.core !== k && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = gls2.ja.Ei;
  this.background = "rgba(0,0,0,0)";
  this.Kg = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", 
  explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", hino:"assets/tex_hino.png", hoshizora_y:"assets/tex_hoshizora_y.png", hoshizora_t:"assets/tex_hoshizora_t.png", yotsuba:"assets/tex_yotsuba.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", higashi:"assets/tex_higashi.png", momozono:"assets/tex_momozono.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", 
  bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", 
  "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, 
  nextScene:function() {
    this.Pj();
    return gls2.TitleScene()
  }.bind(this)}))
}, update:function() {
  for(var b = [].concat(this.Kg), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.Kg.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Pj:function() {
  gls2.xa.setup(12345);
  ["tex1", "tex2", "tex3", "tex_tank1"].forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawTexture(a, 0, 0);
    d = d.getBitmap();
    d.filter({calc:function(a, b, d, f, A) {
      A.setPixelIndex(b, a[0], 0, 0)
    }});
    var f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(b + "Red", f)
  });
  gls2.ia.setup();
  gls2.ra.setup();
  this.da = gls2.Ua()
}, sl:function() {
  this.stop()
}, Bg:function(b, a) {
  var d = {score:Math.floor(this.xd), stage:this.Jh + 1, continueCount:this.Gh, shipType:this.Lh, shipStyle:this.Kh, fps:0, screenShot:this.Ih};
  b && (d.userName = b);
  tm.util.Ajax.load({url:"/api/ranking/post", data:d, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        alert("\u767b\u9332\u5b8c\u4e86\uff01"), a()
      }else {
        if(b.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.Bg(k, a);
              window.onchildclose = h
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(b = "";"" === b;) {
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.sk())
              }
              b !== k && (b = b.substring(0, 10), this.Bg(b + " (\u533f\u540d)", a))
            }else {
              a()
            }
          }
        }else {
          alert("\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"), a()
        }
      }
    }else {
      alert("\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"), a()
    }
  }.bind(this), error:function() {
    alert("\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c");
    a()
  }})
}, sk:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc \u76f8\u7530\u30de\u30ca".split(" ").Dl()
}, Kg:k, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.yc = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.ja = {gj:l, Ei:60, bj:0, Tg:[1E9, 1E10], dj:3E3, Wg:3, Vg:[3, 2, 1], li:[6, 4, 2], fh:1, aj:0.1, Xg:1, cj:0.25, il:1, ll:0.25, ki:2, Ui:0.005, Qi:0.01, Ri:0.001, Mi:0.015, Ni:0.002, Wi:0.001, Yi:0.01, Vi:0, Ti:0, Si:0, Pi:0.03, Oi:0.004, Xi:0, Zi:0, $i:0.75, nf:10, pe:800, Li:0.25, Ki:0.1, mf:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], vi:0.02, wi:0.5, ti:0.005, Sg:1E3, oi:10, mi:1, vj:1E3, uj:100, tj:0, sj:0, rj:1E3, qj:100, Ci:0.5, pi:3, xi:22500, ni:50, kj:10, Mg:l, ji:j, oj:1E3, pj:2E3, 
lj:4E3, mj:1E4, nj:2E7, fj:100, kl:"tmshooter"};
(function() {
  var b = k, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.eh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Fb:0, wc:j, Kd:j, Bd:l, da:k, speed:0, Bb:k, td:k, Vh:k, Pe:k, Ob:k, eg:k, vc:k, fg:k, gg:k, frame:0, init:function(a, f, i) {
    this.superInit("fighter", 64, 64);
    this.da = a;
    this.type = f;
    this.style = i;
    tm.xb.Rc.Od.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.td = this.Vh = gls2.hh(f, 100);
    this.Pe = gls2.hh(3, 100);
    this.Ob = gls2.$g(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Ob.visible = l;
    this.Lj();
    this.Bb = this.Kj();
    1 === this.style && (this.Bb = [this.Bb[1], this.Bb[2]]);
    this.vc = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(i = this.Bb.length;f < i;f++) {
      var p = this.Bb[f];
      gls2.ri(this, p).setPosition(p.x, p.y).addChildTo(this.vc)
    }
    this.Bk = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Bk.blendMode = "lighter";
    this.fg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.fg.blendMode = "lighter";
    this.fg.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Qa && !a.Ja
    };
    this.gg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.gg.blendMode = "lighter";
    this.gg.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Qa && !a.Ja
    };
    this.Sd = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.Sd.blendMode = "lighter";
    this.Sd.rotation = -90;
    this.Sd.strokeStyle = "rgba(180,180,255,0.4)";
    this.Sd.update = function() {
      this.visible = a.Ja
    };
    this.Sd.draw = function(b) {
      b.lineCap = "round";
      var f = a.yd / gls2.ja.pe;
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
    this.vk = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.vk.update = function() {
      this.visible = a.Ja
    };
    b === k && (b = gls2.Og(this.da.oa))
  }, Kj:function() {
    if(0 === this.type) {
      return[{x:0, $c:0, y:40, d:0, Rb:j, Kb:-0.7, v:j}, {x:0, $c:0, y:40, d:0, Rb:j, Kb:0.5, v:j}, {x:0, $c:0, y:40, d:0, Rb:j, Kb:-0.5, v:j}, {x:0, $c:0, y:40, d:0, Rb:j, Kb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, Rb:l, Kb:-0.7, v:j}, {x:-40, y:40, d:0.1, Rb:l, Kb:-0.5, v:j}, {x:40, y:40, d:0.1, Rb:j, Kb:0.5, v:j}, {x:70, y:20, d:0.1, Rb:j, Kb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, Rb:l, Kb:-0.7, v:j}, {x:-30, y:20, d:0.4, Rb:l, Kb:-0.5, v:j}, {x:30, y:20, d:0.4, Rb:j, Kb:0.5, v:j}, {x:60, y:40, d:0.6, Rb:j, Kb:0.7, v:j}]
    }
  }, Lj:function() {
    this.eg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.eg.setFrameIndex(5);
    this.eg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Nc:-1, wd:l, Mb:l, update:function(d) {
    this.visible = this.Bd ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.wc) {
      var i = f.getKeyAngle();
      i !== k && (i = a[i], this.x += i.x * this.speed * (this.Mb ? 0.5 : 1), this.y += i.y * this.speed * (this.Mb ? 0.5 : 1));
      this.x = gls2.ma.clamp(this.x, 15, 465);
      this.y = gls2.ma.clamp(this.y, 15, 625);
      var p = f.getKey("c") && this.Kd, i = f.getKey("z") && this.Kd;
      this.Nc = p ? this.Nc + 1 : this.Nc - 1;
      this.Nc = gls2.ma.clamp(this.Nc, -1, 10);
      this.Mb = i && p || 10 === this.Nc;
      p = this.da.Ja ? 3 : 5;
      this.wd = !this.Mb && (0 <= this.Nc || i) && 0 === d.frame % p;
      i && (this.Nc = 0);
      this.Ob.x = this.x;
      this.Ob.y = this.y - 40;
      f.getKeyDown("x") && this.Kd && (0 < this.da.Qa && !this.da.Ja ? (this.da.bl(), gls2.Fj(this).addChildTo(this.da)) : !this.da.bd && 0 < this.da.Cb && (this.zb = gls2.ma.clamp(this.zb - 2, 0, 1), this.da.Jd(-0.02), gls2.Pg(this, this.da).setPosition(gls2.ma.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.da)))
    }else {
      this.Mb = this.wd = l
    }
    this.wd && (i = Math.sin(0.2 * d.frame), p = this.td.fire(this.x - 7 - 6 * i, this.y - 5, -90), p !== k && p.addChildTo(this.da), p = this.td.fire(this.x + 7 + 6 * i, this.y - 5, -90), p !== k && p.addChildTo(this.da));
    if(this.Mb) {
      i = 0;
      for(p = this.Bb.length;i < p;i++) {
        this.Bb[i].v = l
      }
      this.vc.rotation = 0
    }else {
      this.Ob.visible = l;
      i = 0;
      for(p = this.Bb.length;i < p;i++) {
        this.Bb[i].v = j
      }
    }
    this.Zj(f);
    this.Hj(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.da), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.da));
    this.frame = d.frame
  }, xc:function() {
    this.Mb = this.wd = l;
    this.da.He();
    this.da.fb = 0;
    this.da.Za = 0;
    this.da.Sa = 0
  }, Zj:function(a) {
    if(0 === this.type) {
      for(a = this.Bb.length;this.Bb[--a] !== h;) {
        var b = this.Bb[a];
        0 === a ? b.x = b.$c + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.$c + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.$c + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.$c + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.vc, b.rotation = this.Mb ? 0 : this.wc && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.wc && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, Hj:function(a, b) {
    this.wc && a.getKey("left") ? this.Fb = gls2.ma.clamp(this.Fb - 0.2, -3, 3) : this.wc && a.getKey("right") ? this.Fb = gls2.ma.clamp(this.Fb + 0.2, -3, 3) : 0 > this.Fb ? this.Fb = gls2.ma.clamp(this.Fb + 0.2, -3, 3) : 0 < this.Fb && (this.Fb = gls2.ma.clamp(this.Fb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Fb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Fb) : 2 === this.type && this.setFrameIndex(31 + ~~this.Fb);
    return b
  }});
  gls2.ri = tm.createClass({superClass:tm.display.AnimationSprite, Yc:k, ea:k, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Yc = b;
    this.ea = a;
    this.altitude = 10;
    this.gotoAndPlay(b.Rb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.Yc.v) {
      this.x = this.Yc.x * (this.ea.da.Ja ? 1.5 : 1);
      this.y = this.Yc.y * (this.ea.da.Ja ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Yc.d * this.Yc.Kb);
      var f = this.parent.localToGlobal(this);
      this.Yc.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.da);
      this.ea.wd && (f = this.ea.td.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== k && f.addChildTo(a.da))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = k;
  gls2.nd = tm.createClass({superClass:tm.display.Sprite, speed:0, Wc:0, Vj:1, Nh:0, gb:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.Wc = gls2.ja.fh;
    b === k && (b = gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== h && this.fe(a)
  }, update:function() {
    this.x += this.Bc;
    this.y += this.bc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, fe:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Ne:function(a) {
    for(var f = 0;f < a;f++) {
      var i = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), p = gls2.ma.randf(2, 8), s = 2 * Math.random() * Math.PI;
      i.Ca = Math.cos(s) * p;
      i.Da = Math.sin(s) * p;
      i.scaleX = i.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
      i.addEventListener("enterframe", function() {
        this.x += this.Ca;
        this.y += this.Da;
        this.Ca *= 0.9;
        this.Da *= 0.9
      })
    }
  }});
  gls2.nd.Md = function() {
    for(var b = [].concat(a), f = 0, i = b.length;f < i;f++) {
      b[f].remove()
    }
  };
  var a = gls2.nd.lb = [];
  gls2.hh = tm.createClass({Mc:k, Mh:l, init:function(b, f) {
    this.Mh = 3 === b;
    this.Mc = [];
    for(var i = 0;i < f;i++) {
      var p = gls2.nd(b), s = this;
      p.addEventListener("added", function() {
        this.sa = gls2.ja.kj;
        a.push(this)
      });
      p.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        s.Mc.push(this)
      });
      this.Mh && p.addEventListener("enterframe", function(a) {
        this.setScale((this.Vj + this.Nh) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Mc.push(p)
    }
  }, fire:function(a, b, i) {
    var p = this.Mc.pop();
    if(p === h) {
      return k
    }
    var s = gls2.ma.degToRad(i);
    p.Bc = Math.cos(s) * p.speed;
    p.bc = Math.sin(s) * p.speed;
    p.setPosition(a, b);
    p.rotation = i + 90;
    return p
  }, Dd:function(a) {
    for(var b = this.Mc.length;this.Mc[--b] !== h;) {
      this.Mc[b].Wc = gls2.ja.fh + gls2.ja.aj * a, this.Mc[b].Nh = 0.2 * a
    }
  }})
})();
gls2.$g = tm.createClass({superClass:tm.display.Sprite, ea:k, da:k, gc:0, frame:0, fi:k, color:k, ph:0, Tf:0, Wj:l, head:k, Dh:k, Gc:k, gb:j, Wc:gls2.ja.Xg, Cd:k, init:function(b, a) {
  this.ea = b;
  this.da = b.da;
  this.ph = 0 === this.ea.style ? 1 : 1.2;
  this.Tf = 0 === this.ea.style ? 50 : 75;
  var d = this;
  this.fi = a;
  this.superInit(a.redBody, this.Tf, 100);
  this.boundingHeightBottom = 1;
  this.Gl = 0;
  this.origin.y = 1;
  var f = this.Gc = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.Dh = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.gc - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.gc
  };
  this.fe(["red", "green", "blue"][this.ea.type]);
  this.Dd(0)
}, fe:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.fi[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Gc.gotoAndPlay(this.color);
  this.Dh.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Cd = k;
  return this
}, Dd:function(b) {
  this.boundingWidth = this.width = this.Tf + 30 * b / gls2.ja.nf;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.Wc = this.ph * gls2.ja.Xg + gls2.ja.cj * b;
  0 === b ? this.fe(["red", "green", "blue"][this.ea.type]) : this.fe("hyper")
}, Ne:function(b, a) {
  this.Cd === k && this.th();
  a = a || this.gc;
  for(var d = 0;d < b;d++) {
    var f = this.Cd.clone().setPosition(this.x, a).addChildTo(this.da), i = gls2.ma.randf(8, 14), p = gls2.ma.randf(0, Math.PI);
    f.Ca = Math.cos(p) * i;
    f.Da = Math.sin(p) * i;
    f.scaleX = f.scaleY = (gls2.ma.randf(0.5, 1.5) + gls2.ma.randf(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.Ca;
      this.y += this.Da;
      this.Ca *= 0.95;
      this.Da *= 0.95
    })
  }
}, ok:function(b, a, d) {
  this.Cd === k && this.th();
  for(var f = 0;f < b;f++) {
    var i = this.Cd.clone().setPosition(a, d).addChildTo(this.da), p = gls2.ma.randf(12, 20), s = gls2.ma.randf(0, Math.PI);
    i.Ca = Math.cos(s) * p;
    i.Da = Math.sin(s) * p;
    i.scaleX = i.scaleY = (gls2.ma.randf(1, 3) + gls2.ma.randf(1, 3)) / 2;
    i.addEventListener("enterframe", function() {
      this.x += this.Ca;
      this.y += this.Da;
      this.Ca *= 0.95;
      this.Da *= 0.95
    })
  }
}, th:function() {
  this.Cd = "hyper" === this.color ? gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.ea.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.ea.Mb) ? (this.gc = Math.max(0, this.gc - 40), this.height = this.y - this.gc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.gc = this.y - 40;
  this.Wj = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, wl:function() {
  return this.gc
}, Xk:function(b) {
  this.gc = b;
  this.head.update()
}});
gls2.$g.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.gc
});
(function() {
  gls2.Pg = tm.createClass({superClass:tm.app.Object2D, gb:j, da:k, init:function(a, d) {
    this.superInit();
    this.ea = a;
    this.da = d;
    this.di = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.di.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.di));
    this.nh();
    b === k && (b = gls2.Wa(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.na = 0;
    this.ce = 1;
    this.addEventListener("added", function() {
      this.da.bd = j;
      this.ea.Bd = j;
      this.da.Cb -= 1;
      this.da.Re = l;
      this.da.He();
      this.da.pb("drop BOMBER!!", j);
      gls2.ta("bomb");
      gls2.ta("voBomb")
    });
    this.addEventListener("removed", function() {
      this.da.bd = l;
      this.ea.Bd = l
    })
  }, nh:function() {
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
      var d = this.a * this.ce + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.na;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.na += 3.6, this.ce = -1) : (this.b = 8, this.na += 1.8, this.ce = 1)
  }});
  gls2.ah = tm.createClass({superClass:gls2.Pg, init:function(a, b) {
    this.superInit(a, b);
    gls2.ja.ji && this.addEventListener("added", function() {
      this.da.Cb = 0
    })
  }, nh:function() {
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
      var d = this.a * this.ce + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.na;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.na += 1.8, this.ce = 1)
  }});
  var b = k
})();
gls2.si = tm.createClass({superClass:tm.display.Sprite, Bc:0, bc:0, ea:k, na:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.ea = d;
  this.bc = 1;
  this.Bc = 0.5 > gls2.xa.random() ? -1 : 1;
  this.na = 0
}, update:function() {
  this.x += this.Bc;
  this.y += 2 * this.bc;
  if(2025 > gls2.yc(this, this.ea)) {
    this.ea.da.Tj(1), this.remove()
  }else {
    if(3E3 > this.na) {
      if(30 > this.x || 450 < this.x) {
        this.Bc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.bc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.na += 1
}});
gls2.Di = tm.createClass({superClass:tm.display.Sprite, Bc:0, bc:0, ea:k, na:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var f = -1;1 >= f;f++) {
    for(var i = -1;1 >= i;i++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(f, i).addChildTo(this)
    }
  }
  this.setPosition(b, a);
  this.ea = d
}, update:function() {
  this.y += 0.5;
  4096 > gls2.yc(this, this.ea) && (this.ea.da.Ah(), this.remove());
  704 < this.y && this.remove()
}});
gls2.ra = {};
gls2.ra.setup = function() {
  gls2.ck = {};
  gls2.ra.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  gls2.ck.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k, frequency:3}}}, 100, 100));
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.particle16 = gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.ra.Ne = function(b, a, d) {
  b = gls2.ra.particle16.clone().setPosition(b, a);
  b.gb = j;
  b.addChildTo(d);
  d = gls2.ma.randf(5, 20);
  a = gls2.ma.randf(Math.PI, 2 * Math.PI);
  b.Ca = Math.cos(a) * d;
  b.Da = Math.sin(a) * d;
  b.scaleX = b.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.Ca;
    this.y += this.Da;
    this.Ca *= 0.9;
    this.Da *= 0.9
  })
};
gls2.ra.Eh = function(b, a, d, f) {
  f = f || 1.8;
  var i = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  i.gb = j;
  i.addChildTo(d);
  i.image = gls2.ra.shockwaveImage;
  i.tweener.clear().to({scaleX:f, scaleY:f, alpha:0}, 800, "easeOutQuad").call(function() {
    i.remove()
  })
};
gls2.ra.qk = function(b, a, d) {
  var f = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  f.gb = j;
  f.addChildTo(d);
  f.image = gls2.ra.shockwaveImage;
  f.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
};
gls2.ra.pk = function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.gb = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.ra.Je = function(b, a, d, f) {
  gls2.ta("explode");
  var i = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  i.gb = j;
  if(f !== h) {
    var p = f.x, s = f.y;
    i.addEventListener("enterframe", function() {
      this.x += p;
      this.y += s;
      p *= 0.99;
      s *= 0.99
    })
  }
  i.addChildTo(d);
  gls2.ra.Eh(b, a, d)
};
gls2.ra.fk = function(b, a, d) {
  gls2.ta("explode");
  var f = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.gb = j;
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
  f.gb = j;
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
  f.gb = j;
  f.addChildTo(d)
};
gls2.ra.Lb = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Ec.noise.length), i = 0;20 > i;i++) {
    var p = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    p.a = 2 * Math.PI * Math.random();
    p.v = 10 * Math.pow(gls2.Ec.noise.at(~~(gls2.Ec.noise.length * i / 20) + f), 2);
    p.gb = j;
    p.addChildTo(d)
  }
  gls2.ra.Eh(b, a, d, 5)
};
gls2.ra.cg = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Ec.noise.length), i = 0;20 > i;i++) {
    for(var p = 2 * Math.PI * i / 20, s = Math.pow(gls2.Ec.noise.at(~~(gls2.Ec.noise.length * i / 20) + f), 2), z = 0;3 > z;z++) {
      var A = 4 * s * (z + 1), q = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.na += 1
      }).setScale(0.3 * (3 - z)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      q.rotation = 2 * Math.random() * Math.PI;
      q.gb = j;
      q.na = 0;
      q.a = p;
      q.v = A;
      q.addChildTo(d)
    }
  }
};
gls2.kf = tm.createClass({superClass:tm.app.Object2D, target:k, cd:0, angle:0, alpha:2, gb:j, reverse:l, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.cd = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === k) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Wa(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.cd + this.target.x, Math.sin(a) * this.cd + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.cd += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.cd || 200 < this.cd) && this.remove()
  }
}});
gls2.Fj = tm.createClass({superClass:tm.app.Object2D, target:k, angle:0, gb:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Wa(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ma.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ma.rand(-2, 2)).on("enterframe", function() {
        this.x += this.Ca;
        this.y += this.Da
      }).addChildTo(this.target.parent);
      a.Ca = 3 * Math.cos(this.angle);
      a.Da = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
gls2.xj = tm.createClass({superClass:tm.graphics.Canvas, da:k, rd:k, qb:k, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.da = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.rd = gls2.yi(200);
  this.qb = gls2.gh(this)
}, update:function() {
  this.clear();
  this.da.Wb !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.qb.kc - 20, 470 * this.da.Wb.sa / this.da.Wb.Kc, 20), this.strokeRect(5, this.qb.kc - 20, 470, 20), this.clear(263.5, this.qb.kc - 20 + 2, 2, 16), this.clear(52, this.qb.kc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.da.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.qb.kc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.da.fb)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.da.Sa / gls2.ja.Sg) + 1), this.qb.Rd + 192, 22);
  b = [0, 1, 4][this.da.ea.type];
  for(a = 0;a < this.da.Qc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * t.Pa.Nb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.da.Vd + " hit", this.qb.Rd + 10, 95);
  0 < ~~this.da.Sa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.da.Sa + " HIT!!", 10, 0.5 * -this.qb.kc + 115));
  0 === this.frame % 2 && (!this.da.Ja && 0 < this.da.Qa ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.da.Qa, 5, 637)) : this.da.Ja && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.da.sd, 5, 637)));
  for(a = 0;a < this.da.Cb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.da.Re && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.rd.update();
  this.rd.Ag = this.qb.kc + 5;
  this.rd.draw(this);
  this.frame += 1
}});
gls2.gh = tm.createClass({superClass:tm.app.Object2D, Gb:k, Rd:0, kc:0, init:function(b) {
  this.superInit();
  this.Gb = b
}});
(function() {
  for(var b = [], a = [], d = 0;3 > d;d++) {
    b[d] = 40 * Math.pow(0.8, d), a[d] = b[d] / 2 * Math.sqrt(3)
  }
  gls2.Ii = tm.createClass({superClass:tm.graphics.Canvas, Ba:k, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ba = gls2.Ji();
    this.Ba.oa = this;
    this.Ba.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(d) {
    this.Ba.Ca = Math.cos(this.Ba.direction) * this.Ba.speed;
    this.Ba.Da = Math.sin(this.Ba.direction) * this.Ba.speed;
    for(var i = 0;3 > i;i++) {
      for(this.Ba.Yb[i] += this.Ba.Ca * Math.pow(0.8, i);3 * b[i] < this.Ba.Yb[i];) {
        this.Ba.Yb[i] -= 3 * b[i]
      }
      for(;this.Ba.Yb[i] < 3 * -b[i];) {
        this.Ba.Yb[i] += 3 * b[i]
      }
      for(this.Ba.Zb[i] += this.Ba.Da * Math.pow(0.8, i);2 * a[i] < this.Ba.Zb[i];) {
        this.Ba.Zb[i] -= 2 * a[i]
      }
      for(;this.Ba.Zb[i] < 2 * -a[i];) {
        this.Ba.Zb[i] += 2 * a[i]
      }
    }
    0 === d % 2 && this.draw()
  }, draw:function() {
    this.Ba.background !== k ? this.clearColor(this.Ba.background, 0, 0) : this.clear();
    for(var d = 0;3 > d;d++) {
      this.lineWidth = 0.3 * Math.pow(0.8, d);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.6 * Math.pow(0.8, d) + ")"}, {offset:1, color:"rgba(255,255,255," + 0.4 * Math.pow(0.8, d) + ")"}]).toStyle();
      this.beginPath();
      for(var i = 0, p = this.Ba.Yb[d] - 3 * b[d];p < 480 + 3 * b[d];p += 1.5 * b[d]) {
        for(var i = 0 === i ? a[d] : 0, s = this.Ba.Zb[d] - 2 * a[d] + i;s < 640 + 2 * a[d];s += 2 * a[d]) {
          this.line(p, s, p + b[d], s), this.line(p, s, p - b[d] / 2, s + a[d]), this.line(p, s, p - b[d] / 2, s - a[d])
        }
      }
      this.stroke()
    }
  }});
  gls2.Ji = tm.createClass({superClass:tm.app.Object2D, Yb:0, Zb:0, direction:0, speed:0, Ca:0, Da:0, background:k, init:function() {
    this.superInit();
    this.Yb = [];
    this.Zb = [];
    for(var a = 0;3 > a;a++) {
      this.Yb[a] = 240, this.Zb[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Da = this.Ca = 0
  }})
})();
gls2.Kf = tm.createClass({superClass:tm.display.Sprite, Ph:l, da:k, ea:k, zc:l, ad:l, Gg:l, Ca:0, Da:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.Ph = b) && this.setScale(2, 2);
  this.da = gls2.Ua.Gd;
  this.ea = this.da.ea;
  this.addChildTo(this.da);
  b = 0.5 * gls2.xa.random() * Math.PI - 0.75 * Math.PI;
  this.Ca = 30 * Math.cos(b);
  this.Da = 30 * Math.sin(b)
}, update:function() {
  this.ea.Mb && (this.ad = j);
  if(this.ea.parent === k) {
    this.ad = l
  }else {
    if(100 > gls2.yc(this, this.ea)) {
      this.da.Hk(this);
      this.remove();
      return
    }
    1E4 > gls2.yc(this, this.ea) && (this.ad = j);
    if(this.Gg && this.ad) {
      var b = Math.atan2(this.ea.y - this.y, this.ea.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.Gg || (this.x += this.Ca, this.y += this.Da, this.Ca *= 0.8, this.Da *= 0.8, -1 < this.Ca && (1 > this.Ca && -1 < this.Da && 1 > this.Da) && (this.Gg = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.ih = tm.createClass({superClass:gls2.Kf, zc:l, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.Ej = tm.createClass({superClass:gls2.Kf, zc:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.ad || (this.x += this.da.oa.Ca, this.y += this.da.oa.Da);
  this.superClass.prototype.update.call(this)
}});
gls2.od = tm.createClass({ea:k, da:k, $:k, frame:0, init:function(b) {
  this.da = b;
  this.ea = b.ea;
  this.ge();
  this.$ = gls2.Dj();
  this.frame = 0
}, ge:n(), update:function() {
  this.ek(this.frame);
  this.frame += 1
}, ek:function(b) {
  b = this.$.get(b);
  if(b !== k) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.Ug[b.value] !== h) {
        var a = gls2.Ug[b.value];
        if(a !== k) {
          if(a[0].Wb === j) {
            this.og(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.og(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.$.Ig = l
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, og:function(b) {
  this.da.Ie += 1;
  b = b.aa(this.da, b.ba).setPosition(b.x, b.y).addChildTo(this.da);
  b.ie = this;
  b.$d();
  return b
}, Ae:function(b) {
  gls2.Ke();
  this.da.Pd = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var i = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
      i.na = 0;
      i.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.na) + 0.5;
        this.na += 1
      };
      i.addChildTo(a)
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
  a.addChildTo(this.da.ag);
  gls2.ta("warning");
  gls2.ta("voWarning")
}});
gls2.od.create = function(b, a) {
  switch(a) {
    case 0:
      return gls2.zj(b);
    case 1:
      return gls2.Aj(b);
    case 2:
      return gls2.Bj(b);
    case 3:
      return gls2.Cj(b);
    default:
      g(Error("stageNumber = " + a))
  }
};
gls2.Dj = tm.createClass({index:0, data:k, Ig:l, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === h ? k : b.stop === j ? (this.Ig = j, b) : this.Ig ? k : b
}});
gls2.zj = tm.createClass({superClass:gls2.od, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.oc("bgm1", j);
    this.da.oa.direction = 0.5 * Math.PI;
    this.da.oa.speed = 8;
    this.da.oa.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.da.oa.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.da.oa.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.Ae(function() {
      gls2.oc("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, ge:function() {
  this.da.oa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.Aj = tm.createClass({superClass:gls2.od, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.oc("bgm2", j);
    this.da.oa.direction = 0.5 * Math.PI;
    this.da.oa.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.da.oa.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.da.oa.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.da.oa.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.da.oa.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.da.oa.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.da.oa.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", j);
  this.$.add(300, "heri2-left");
  for(b = 0;12 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.da.oa.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
    this.Ae(function() {
      gls2.oc("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.da.oa.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, ge:function() {
  this.da.oa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.Bj = tm.createClass({superClass:gls2.od, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.oc("bgm3", j);
    this.da.oa.direction = 0.5 * Math.PI;
    this.da.oa.speed = 8;
    this.da.oa.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "hoshizora_y1");
  this.$.add(300, "nao1-center");
  this.$.add(60, "nao1-left");
  this.$.add(60, "nao1-right");
  this.$.add(60, "nao1-center");
  this.$.add(60, "nao1-left");
  this.$.add(60, "nao1-right");
  this.$.add(60, "nao1-center");
  this.$.add(60, "nao1-left");
  this.$.add(60, "nao1-right");
  this.$.add(120, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(150, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(150, "akane-center");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(60, "akane-right");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(60, "akane-left");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-right");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(60, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(120, "akane-center");
  this.$.add(30, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(30, "akane-right");
  this.$.add(30, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(30, "akane-left");
  this.$.add(30, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(180, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(120, function() {
    this.da.oa.tweener.clear().to({speed:4}, 5E3, "easeInOutQuad").to({direction:90 * (Math.PI / 180)}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "hoshizora_y1");
  this.$.add(1, "heri2-right");
  this.$.add(1, function() {
    this.da.oa.direction = ~~(180 * (Math.PI / 180));
    this.da.oa.speed = 4;
    this.da.oa.tweener.clear().to({speed:4}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "yotsuba");
  this.$.add(600, "higashi", j);
  this.$.add(1200, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(300, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(300, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(600, function() {
    this.Ae(function() {
      gls2.oc("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.da.oa.direction = Math.PI / 2;
    this.da.oa.tweener.clear().to({speed:-10}, 5E3, "easeInOutQuad")
  });
  this.$.add(600, "momozono")
}, ge:function() {
  this.da.oa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.Cj = tm.createClass({superClass:gls2.od, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.oc("bgm4", j);
    this.da.oa.direction = 0.5 * Math.PI;
    this.da.oa.speed = 1
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
    this.da.oa.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(b = 0;6 > b;b++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.da.oa.speed = 3;
    this.da.oa.tweener.clear().to({speed:0.3}, 5E3)
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
    this.da.oa.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.da.oa.direction = 0.5 * Math.PI;
    this.da.oa.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", j);
  this.$.add(1200, n());
  for(b = 0;9 > b;b++) {
    this.$.add(50, 0 === b % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.da.oa.tweener.clear().to({speed:0.6}, 3E3)
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
    this.Ae(function() {
      gls2.oc("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.da.oa.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, ge:function() {
  this.da.oa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.Collision = {zd:function(b, a) {
  if(b.parent === k || a.parent === k) {
    return l
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, i = b.y + b.boundingHeightBottom, p = a.x - a.boundingWidthLeft, s = a.y - a.boundingHeightTop, z = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > p && f < z && i > s
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, dl:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.vd(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.Ai = tm.createClass({superClass:gls2.Scene, titleText:k, menu:k, descriptions:k, showExit:l, title:k, selections:[], description:k, box:k, cursor:k, rg:k, _selected:0, _opened:l, _finished:l, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.rg = d.onCursorMove;
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
    var i = tm.display.Label(a).setPosition(240, b).addChildTo(this);
    i.interactive = j;
    i.addEventListener("touchend", function() {
      f._selected === d ? f.closeDialog(f._selected) : f._selected = d
    });
    i.width = 336;
    return i
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.rg !== k && this.parent.rg(this.s))
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
}, vd:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function B(b, a, d, f, i) {
  i = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:n()}, i);
  b.dl(gls2.Ai(a, d, i), f)
}
;gls2.Wa = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, Sf:0.85, size:0, image:k, gb:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== h ? a : 1;
  this.Sf = d !== h ? d : 0.85;
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.Sf;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Wa(this.size, this.zl, this.Sf, this.image)
}});
gls2.Og = tm.createClass({superClass:gls2.Wa, oa:k, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.oa = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.oa.Ca;
  this.y += this.oa.Da + 0.3
}, clone:function(b) {
  return gls2.Og(this.oa, b)
}});
gls2.yi = tm.createClass({width:0, label:k, wb:k, na:0, Zh:0, Ag:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.wb = [];
  this.Zh = 480 - this.width - 5;
  this.Ag = 5
}, Uj:function(b, a) {
  a === j && (this.wb.clear(), this.wb.push(""));
  5 < this.wb.length && this.wb.splice(1, this.wb.length - 4);
  this.wb.push(b);
  return this
}, Xj:function() {
  this.wb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.wb.length) {
    if("" !== this.wb[0]) {
      var a = this.wb[0][0];
      this.wb[0] = this.wb[0].substring(1);
      b += a
    }else {
      this.wb.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.na % 2 ? "_" : " ");
  this.na += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.Zh, this.Ag);
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
gls2.Ec = {noise:k, rk:function(b) {
  function a(a) {
    if(1 > a) {
      return k
    }
    var f = [], i = Math.random(), p, s;
    for(s = 0;s < b;s += ~~a) {
      p = Math.random();
      for(var m = 0;m < a;m++) {
        f[s + m] = d(i, p, m / a)
      }
      i = p
    }
    i = f[b - ~~a];
    p = f[0];
    for(m = 0;m < a;m++) {
      f[b - ~~a + m] = d(i, p, m / a)
    }
    return f
  }
  function d(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var f = [], i = 0, p = Math.pow(2, 4);8 > i;i++, p *= 2) {
    var s = a(b / p);
    if(s === k) {
      break
    }
    f.push(s)
  }
  s = [].concat(f[0]);
  i = 1;
  for(p = 0.5;i < f.length;i++, p *= 0.5) {
    for(var z = 0;z < b;z++) {
      s[z] += f[i][z] * p
    }
  }
  for(i = 0;i < s.length;i++) {
    s[i] /= 2
  }
  return s
}};
gls2.Ec.noise = gls2.Ec.rk(512);
gls2.xa = {index:-1, data:k, setup:function(b) {
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
gls2.Db = k;
gls2.oc = function(b, a) {
  a || gls2.af();
  var d = tm.asset.AssetManager.get(b);
  d && (gls2.Db = d.clone(), gls2.Db.volume = 0.1 * gls2.core.Ld, gls2.Db.loop = j, gls2.Db.play())
};
gls2.af = function() {
  gls2.Db !== k && gls2.Db.isPlaying() && gls2.Db.stop()
};
gls2.Ke = function() {
  if(gls2.Db !== k) {
    var b = gls2.Db;
    b.loop = l;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.ta = function(b) {
  if(0 !== gls2.core.dd && gls2.ta.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.dd, gls2.ta.Lg !== k && gls2.ta.Lg.stop(), gls2.ta.Lg = a) : a.volume = 0.1 * gls2.core.dd);
    gls2.ta.played[b] = gls2.core.frame
  }
};
gls2.ta.played = {};
gls2.ta.Lg = k;
(function() {
  var b = k, a = k;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:k, na:0, be:[], Me:l, Hh:k, Rh:0, Se:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Hh = tm.display.Label().setPosition(240, 256).addChildTo(this);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Me = l;
      this.fl()
    })
  }, fl:function() {
    for(var a = ("" + Math.floor(gls2.core.xd)).padding(16, " "), b = "", i = 0;i < a.length;i += 4) {
      b += a.substring(i, i + 4) + " "
    }
    this.Hh.text = "HIGH SCORE: " + b.trim()
  }, vd:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.lh(80 * Math.cos(0.01 * this.na) + 240, 80 * Math.sin(0.01 * this.na) + 320, 0);
    this.lh(80 * Math.cos(0.01 * this.na + Math.PI) + 240, 80 * Math.sin(0.01 * this.na + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Me && this.Xh();
    this.na += 1
  }, lh:function(d, f, i) {
    if(!this.Me) {
      b === k && (b = gls2.Wa(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === k && (a = gls2.Wa(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      i = 0 === i ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      i.speed = 0.6;
      var p = gls2.ma.randf(0, 2 * Math.PI), s = gls2.ma.rand(0, 20);
      i.setPosition(Math.cos(p) * s + d, Math.sin(p) * s + f);
      var z = this;
      i.update = function() {
        this.x += Math.cos(p) * this.speed;
        this.y += Math.sin(p) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = z.be.indexOf(this);
          -1 !== a && z.be.splice(a, 1)
        }
      };
      this.be.push(i)
    }
  }, Xh:function() {
    B(this, "MAIN MENU", ["start", "setting"], this.Nk, {defaultValue:this.Rh, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, Nk:function(a) {
    2 !== a && (this.Rh = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Me = j;
          for(var a = 0, b = this.be.length;a < b;a++) {
            this.be[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.yj())
        }.bind(this));
        break;
      case 1:
        this.Lc()
    }
  }, Lc:function() {
    B(this, "SETTING", ["bgm volume", "sound volume"], this.vg, {defaultValue:this.Se, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, vg:function(a) {
    3 !== a && (this.Se = a);
    switch(a) {
      case 0:
        this.wg();
        break;
      case 1:
        this.xg();
        break;
      default:
        this.Xh()
    }
  }, wg:function() {
    B(this, "BGM VOLUME", "012345".split(""), this.tg, {defaultValue:gls2.core.Ld, onCursorMove:function(a) {
      gls2.Db !== k && "exit" !== a && (gls2.Db.volume = 0.1 * a)
    }, showExit:l})
  }, tg:function(a) {
    6 !== a && (gls2.core.Ld = a);
    this.Lc()
  }, xg:function() {
    B(this, "SE VOLUME", "012345".split(""), this.ug, {defaultValue:gls2.core.dd, showExit:l})
  }, ug:function(a) {
    6 !== a && (gls2.core.dd = a);
    this.Lc()
  }, Cl:function() {
    B(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Mk, {defaultValue:gls2.core.yh, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Mk:function(a) {
    5 !== a && (gls2.core.yh = a);
    this.Lc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.yj = tm.createClass({superClass:gls2.Scene, mode:0, types:k, bf:k, Sb:k, Tb:k, Ub:k, lg:k, jg:k, type:0, style:0, Hc:l, Ue:l, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Zk();
    this.bf = this.Yk();
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
    this.bf.visible = l;
    this.qg(-1, j);
    this.Sb.update();
    this.Tb.update();
    this.Ub.update();
    gls2.ta("voSelectShip");
    gls2.oc("bgmShipSelect", j)
  }, Zk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.lg = tm.display.Label("Type-A").setPosition(240, 150);
    this.lg.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.mg = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.mg.update = function() {
      this.mg.text = b[this.type]
    }.bind(this);
    this.mg.addChildTo(a);
    var f = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.Sb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.Tb = tm.display.AnimationSprite(f, 64, 64).gotoAndPlay("typeB");
    this.Ub = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.Sb.ab = 0;
    this.Tb.ab = 1;
    this.Ub.ab = 2;
    this.Sb.setScale(3).setPosition(0, 320).addChildTo(a);
    this.Tb.setPosition(0, 320).addChildTo(a);
    this.Ub.setPosition(0, 320).addChildTo(a);
    this.Sb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.ab / 3 * Math.PI)
    };
    this.Tb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.ab / 3 * Math.PI)
    };
    this.Ub.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.ab / 3 * Math.PI)
    };
    return a
  }, Yk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.jg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.jg.addChildTo(a);
    this.Oc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.vc = tm.app.Object2D();
    this.vc.addChildTo(this.Oc);
    this.vc.update = function(a) {
      this.vc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
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
    this.Oc.line = b(0, 0, 0, 130, 8);
    this.Oc.line.addChildTo(this.Oc);
    this.wa.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.vc)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.kg = tm.display.Label(d[0], 16).setPosition(240, 500);
    this.kg.update = function() {
      this.kg.text = d[this.style]
    }.bind(this);
    this.kg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.bf.visible = l, !this.Ue && a.keyboard.getKeyDown("left")) {
        this.qg(-1, l), gls2.ta("select")
      }else {
        if(!this.Ue && a.keyboard.getKeyDown("right")) {
          this.qg(1, l), gls2.ta("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.ta("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.bf.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (gls2.ja.Mg ? this.Sk() : (this.Hc = j, this.Wh()), gls2.ta("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.gl(0 === ~~(a.frame / 60) % 
      2))
    }
  }, Sk:function() {
    B(this, "AUTO BOMB", ["on", "off"], this.Ik, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, Ik:function(a) {
    2 !== a && (this.Hc = 0 === a, this.Wh())
  }, Wh:function() {
    B(this, "ARE YOU READY?", ["ok"], this.Jk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, Jk:function(a) {
    0 === a && this.al()
  }, qg:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.Sb, this.Tb, this.Ub][this.type].remove().addChildTo(this.types);
    b ? (this.Sb.ab -= a, this.Sb.scaleX = 0 === this.type ? 5 : 1, this.Sb.scaleY = 0 === this.type ? 5 : 1, this.Tb.ab -= a, this.Tb.scaleX = 1 === this.type ? 5 : 1, this.Tb.scaleY = 1 === this.type ? 5 : 1, this.Ub.ab -= a, this.Ub.scaleX = 2 === this.type ? 5 : 1, this.Ub.scaleY = 2 === this.type ? 5 : 1) : (this.Ue = j, this.Sb.tweener.clear().to({ab:this.Sb.ab - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.Tb.tweener.clear().to({ab:this.Tb.ab - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.Ub.tweener.clear().to({ab:this.Ub.ab - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.Ue = l
    }.bind(this)));
    this.lg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, al:function() {
    gls2.core.da.Hc = this.Hc;
    gls2.core.da.start(this.type, this.style);
    gls2.core.replaceScene(gls2.core.da);
    gls2.Ke()
  }, gl:function(a) {
    this.jg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.Oc.line.ac = l, this.wa[0].line.ac = l, this.wa[1].line.ac = l, this.wa[2].line.ac = l, this.wa[3].line.ac = l) : (this.Oc.line.ac = j, this.wa[0].line.ac = j, this.wa[1].line.ac = j, this.wa[2].line.ac = j, this.wa[3].line.ac = j);
    a ? (this.wa[0].visible = j, this.wa[1].visible = j, 1 === this.style ? (this.wa[2].visible = l, this.wa[3].visible = l) : (this.wa[2].visible = j, this.wa[3].visible = j), this.Oc.line.lineWidth = 5) : (this.wa.each(function(a) {
      a.visible = l
    }), this.Oc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, vd:n()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, ac:j, init:function(a, b, f, i, p) {
    this.superInit();
    this.angle = f - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = i;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = p
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    if(this.ac && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), f = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - f, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - f, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + f, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + f, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.Ua = tm.createClass({superClass:gls2.Scene, ea:k, score:0, Fe:0, fb:0, Sa:0, Vd:0, Za:0, Ic:0, Hg:0, ie:k, oa:k, Qc:3, Ye:0, Ze:0, nc:0, Ie:0, Wd:0, pg:0, Hc:l, Cb:0, Zc:0, qh:0, bd:l, Re:l, mc:0, zb:0, Ja:l, Td:0, yd:0, Qa:0, sd:0, yl:0, xl:0, Oe:k, Bh:k, zg:k, zh:k, $f:k, ag:k, Uf:k, Ak:k, Pb:k, Gb:k, Wb:k, Pd:l, zk:l, init:function() {
  gls2.Ua.Gd !== k && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.Ua.Gd = this;
  this.Gb = gls2.xj(this);
  this.Gb.qb.addChildTo(this);
  this.oa = gls2.Ii().Ba;
  this.oa.addChildTo(this);
  this.Oe = gls2.Ua.Dc().addChildTo(this);
  this.Bh = gls2.Ua.Dc().addChildTo(this);
  this.zh = gls2.Ua.Dc().addChildTo(this);
  this.$f = gls2.Ua.Dc().addChildTo(this);
  this.zg = gls2.Ua.Dc().addChildTo(this);
  this.ag = gls2.Ua.Dc().addChildTo(this);
  this.Uf = gls2.Ua.Dc().addChildTo(this);
  this.Ak = gls2.Ua.Yg(this).addChildTo(this);
  tm.xb.Rc.Od.oh = this;
  this.Pb = tm.app.Object2D();
  this.Pb.addChildTo(this);
  this.Pb.update = function(b) {
    this.Qk(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Gb.clear()
  })
}, addChild:function(b) {
  b.gb ? this.$f.addChild(b) : b instanceof gls2.Ma ? this.Uf.addChild(b) : b instanceof gls2.Kf ? this.Oe.addChild(b) : b instanceof gls2.ha ? b.zc ? this.Oe.addChild(b) : this.zh.addChild(b) : b instanceof gls2.eh ? this.zg.addChild(b) : b === this.Pb || b === this.oa || b instanceof gls2.Ua.Dc || b instanceof gls2.Ua.Yg || b instanceof gls2.gh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(b)))
}, update:function(b) {
  this.Wk(b.keyboard);
  this.ie.update(b.frame);
  0 === b.frame % 2 && this.Gb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.af()) : b.keyboard.getKeyDown("space") ? this.ae(0) : b.keyboard.getKeyDown("p") && (this.Fg().saveAsImage(), this.ae(0))
}, Fg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.oa.oa.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Gb.element, 0, 0);
  return b
}, Qk:function() {
  this.ea.wc === l && gls2.ia.erase();
  var b;
  b = [].concat(gls2.ha.lb);
  for(var a = [].concat(gls2.nd.lb), d = a.length;a[--d] !== h;) {
    for(var f = b.length;b[--f] !== h;) {
      var i = b[f], p = a[d];
      if(!(0 >= i.sa) && gls2.Collision.zd(i, p) && (p.Ne(1), p.remove(), i.xc(p.Wc))) {
        this.nc += 1;
        this.Ja ? this.vb(gls2.ja.Vi) : this.vb(gls2.ja.Ui);
        this.sg(i);
        break
      }
    }
  }
  p = this.ea.Ob;
  if(this.ea.Mb) {
    b = [].concat(gls2.ha.lb);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== h;) {
      if(i = b[f], !(0 >= i.sa) && gls2.Collision.zd(i, p)) {
        p.Xk(i.y + i.boundingHeightBottom);
        i.xc(p.Wc) ? (this.nc += 1, this.Ja ? this.vb(gls2.ja.Ti) : this.vb(gls2.ja.Qi), this.sg(i)) : (this.Za = Math.min(this.Za + 0.02, 1), this.Ja ? (this.pd(0.01 * gls2.ja.mf[this.sd]), this.vb(gls2.ja.Si)) : (this.pd(0.01), this.vb(gls2.ja.Ri)));
        p.Ne(2);
        break
      }
    }
    a = {x:this.ea.x, y:this.ea.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(gls2.ha.lb);
    for(f = b.length;b[--f] !== h;) {
      i = b[f], !(0 >= i.sa) && gls2.Collision.zd(i, a) && (i.xc(p.Wc) ? (this.nc += 1, this.Ja ? this.vb(gls2.ja.Pi) : this.vb(gls2.ja.Mi), this.sg(i)) : (this.Za = Math.min(this.Za + 0.02, 1), this.Ja ? (this.pd(0.01 * gls2.ja.mf[this.sd]), this.vb(gls2.ja.Oi)) : (this.pd(0.01), this.vb(gls2.ja.Ni))), p.ok(2, this.ea.x, this.ea.y - 30))
    }
  }
  if(this.bd) {
    gls2.ia.erase();
    b = [].concat(gls2.ha.lb);
    for(f = b.length;b[--f] !== h;) {
      i = b[f], !(0 >= i.sa) && (i.$b() && i.xc(gls2.ja.ki)) && (this.Vc(i.score), this.nc += 1)
    }
    this.Za = this.Sa = 0
  }
  if(this.Ja) {
    f = [].concat(gls2.nd.lb);
    for(i = f.length;f[--i] !== h;) {
      if(p = f[i], !(0 >= p.sa)) {
        a = [].concat(gls2.Ma.lb);
        for(b = a.length;a[--b] !== h;) {
          d = a[b], d.visible !== l && (0 < p.sa && gls2.Collision.zd(p, d)) && (d.sa -= 6 - this.zb, 0 > d.sa && (d.Fa(), this.Vc(gls2.ja.oi), this.pd(gls2.ja.mi), this.Fh(l, l, d.x, d.y, 1)), p.sa -= 1)
        }
      }
    }
  }
  if(this.Pd) {
    gls2.ia.erase()
  }else {
    if(this.ea.parent !== k && this.ea.Bd === l && this.bd === l && 0 >= this.Td && !gls2.ja.gj) {
      for(f = gls2.Ma.lb.length;gls2.Ma.lb[--f] !== h;) {
        if(b = gls2.Ma.lb[f], b.visible !== l && gls2.Collision.zd(b, this.ea)) {
          this.ea.xc();
          0 < this.Cb && this.Hc ? (this.zb = gls2.ma.clamp(this.zb - 1, 0, 1), this.Jd(-0.01), gls2.ah(this.ea, this).setPosition(this.ea.x, this.ea.y).addChildTo(this)) : this.Uh();
          break
        }
      }
      for(f = gls2.ha.lb.length;gls2.ha.lb[--f] !== h;) {
        if(i = gls2.ha.lb[f], !(0 >= i.sa) && !i.zc && gls2.Collision.zd(i, this.ea)) {
          this.ea.xc();
          0 < this.Cb && this.Hc ? (this.zb = gls2.ma.clamp(this.zb - 1, 0, 1), this.Jd(-0.01), gls2.ah(this.ea, this).setPosition(this.ea.x, this.ea.y).addChildTo(this)) : this.Uh();
          break
        }
      }
    }
    this.Ja && (this.yd -= 1, 0 >= this.yd && this.He());
    this.Td = Math.max(this.Td - 1, 0);
    this.Za -= gls2.ja.vi * gls2.ja.wi;
    0 >= this.Za && (this.Za = 0, this.Ja || 0 < this.Qa ? this.Ic = this.Sa = this.fb = 0 : (0 < this.Sa && (0 >= this.Ic && (this.Ic = this.Sa * gls2.ja.ti), this.fb = this.fb * (this.Sa - this.Ic) / this.Sa, this.Sa -= this.Ic), 0 >= this.Sa && (this.Ic = this.Sa = this.fb = 0)));
    this.Re && (this.score += gls2.ja.fj)
  }
}, sg:function(b) {
  this.Fh(b.zc, this.Ja || gls2.yc(b, this.ea) < gls2.ja.xi, b.x, b.y, b.star, b instanceof gls2.jd);
  this.pd(gls2.ja.mf[this.sd]);
  for(var a = this.fb, d = ~~(this.Sa / gls2.ja.Sg) + 1, f = 0;f < d;f++) {
    a += b.score, this.Vc(a)
  }
  this.fb += b.score * d
}, Fh:function(b, a, d, f, i, p) {
  b = b ? gls2.Ej : gls2.ih;
  for(var s = 0;s < i;s++) {
    var z = b(a);
    z.setPosition(d, f);
    p && (z.ad = j)
  }
}, Hk:function(b) {
  gls2.ta("star");
  b.Ph ? (this.Ze += 1, this.fb += gls2.ja.rj, this.Vc(gls2.ja.vj + this.fb * gls2.ja.tj), this.Ja ? this.vb(gls2.ja.Zi) : this.vb(gls2.ja.Yi)) : (this.Ye += 1, this.fb += gls2.ja.qj, this.Vc(gls2.ja.uj + this.fb * gls2.ja.sj), this.Ja ? this.vb(gls2.ja.Xi) : this.vb(gls2.ja.Wi))
}, start:function(b, a) {
  this.Gb.rd.Xj().clear();
  this.Fe = this.score = 0;
  this.Qc = gls2.ja.Wg;
  this.Cb = this.Zc = gls2.ja.Vg[a];
  this.qh = gls2.ja.li[a];
  this.Qa = this.zb = this.mc = 0;
  this.He();
  this.bd = l;
  this.Wd = this.pg = 0;
  this.ea = gls2.eh(this, b, a);
  this.Eg(gls2.ja.bj);
  t.Pa.Nb.$ex = 2 !== a ? 0 : 1;
  this.ei(0);
  gls2.ta("voLetsGo");
  this.cl()
}, ei:function(b) {
  this.pb("3...2...1...");
  this.ea.parent !== k && this.ea.remove();
  gls2.ha.Md();
  gls2.nd.Md();
  gls2.ia.Md();
  this.Oe.removeChildren();
  this.$f.removeChildren();
  this.ag.removeChildren();
  this.zg.removeChildren();
  this.Uf.removeChildren();
  this.Pb.removeChildren();
  this.nc = this.Ie = this.Ze = this.Ye = this.Vd = this.Za = this.Sa = this.fb = 0;
  this.Wb = k;
  this.zk = this.Pd = l;
  this.Wd = 0;
  this.Gb.qb.Rd = 0;
  this.zb = this.Gb.qb.kc = 0;
  this.Hg = b;
  this.ie = gls2.od.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.ng()
  }.bind(this));
  this.oa.tweener.clear()
}, ng:function() {
  this.pb("Let's go!");
  this.ea.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.ea.Ob.addChildTo(this);
  this.ea.wc = l;
  this.ea.Bd = j;
  this.ea.wd = l;
  this.ea.Mb = l;
  this.ea.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Kd = this.wc = j
  }.bind(this.ea)).wait(gls2.ja.dj).call(function() {
    this.Bd = l
  }.bind(this.ea))
}, Uh:function() {
  gls2.ra.Je(this.ea.x, this.ea.y, this);
  this.pb("I was shot down.");
  this.ea.wc = l;
  this.ea.remove();
  this.Qc -= 1;
  this.Qa = this.Ic = this.Sa = this.Za = 0;
  this.Wd += 1;
  this.pg += 1;
  this.zb = gls2.ma.clamp(this.zb - 3, 0, 1);
  this.Jd(-0.03);
  if(0 < this.Qc) {
    this.tweener.clear().wait(1E3).call(function() {
      if(!this.Hc || !gls2.ja.Mg) {
        this.Zc = Math.min(this.Zc + 1, this.qh)
      }
      this.Cb = this.Zc;
      this.ng()
    }.bind(this))
  }else {
    if(gls2.core.xd === this.score) {
      var b = this.Fg();
      gls2.core.Ih = b.canvas.toDataURL("image/png")
    }
    this.tweener.clear().wait(2E3).call(function() {
      this.Uk()
    }.bind(this))
  }
}, Eg:function(b) {
  t.Pa.Nb.$rank = gls2.ma.clamp(b, 0, 0.5)
}, Jd:function(b) {
  this.Eg(t.Pa.Nb.$rank + b)
}, mk:function() {
  this.pb("System rebooted.", j);
  this.score = 0;
  this.Fe += 1;
  this.Qc = gls2.ja.Wg;
  this.Cb = this.Zc = gls2.ja.Vg[this.ea.style];
  this.zb = 0;
  this.Eg(0);
  this.ng()
}, Yj:function() {
  gls2.oc("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.Pb);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(gls2.ResultScene(this, this.Fg()));
    b.remove()
  }.bind(this))
}, nk:function() {
  gls2.af();
  this.app.replaceScene(gls2.Gi())
}, vl:n(), Vc:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < gls2.ja.Tg.length;b++) {
    var d = gls2.ja.Tg[b];
    a < d && d <= this.score && this.Ah()
  }
  gls2.core.xd = Math.max(gls2.core.xd, this.score);
  gls2.core.xd === this.score && (gls2.core.Jh = this.Hg, gls2.core.Lh = this.ea.type, gls2.core.Kh = this.ea.style, gls2.core.Gh = this.Fe)
}, pd:function(b) {
  this.Ic = 0;
  this.Sa += b;
  this.Vd = Math.max(this.Vd, this.Sa);
  1 <= b && (this.Za = 1)
}, vb:function(b) {
  if(this.Qa !== gls2.ja.nf) {
    for(b *= gls2.ja.$i;1 < b;) {
      gls2.kf(this.ea).addChildTo(this), b -= 1, this.mc = 0, this.Qa += 1, 1 === this.Qa ? (this.pb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.pb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady"))
    }
    this.mc = gls2.ma.clamp(this.mc + b, 0, 1);
    1 <= this.mc && (gls2.kf(this.ea).addChildTo(this), this.Qa += 1, this.mc -= 1, 1 === this.Qa ? (this.pb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.pb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady")))
  }
}, bl:function() {
  0.5 > Math.random() ? (this.pb("HYPER SYSTEM start!!", j), gls2.ta("voHyperStart0")) : (this.pb("start counting to system limit.", j), gls2.ta("voHyperStart1"));
  this.zb = gls2.ma.clamp(this.zb + 1, 0, 5);
  this.Jd(0.01 * this.Qa);
  t.Pa.Nb.$hyperOff = gls2.ja.Ci * (2 !== this.ea.style ? 1 : 0.5);
  this.yd = gls2.ja.pe;
  this.Td = gls2.ja.pe * gls2.ja.Li;
  this.ea.Pe.Dd(this.Qa);
  this.ea.Ob.Dd(this.Qa);
  this.ea.td = this.ea.Pe;
  gls2.ra.pk(this.ea.x, this.ea.y, this);
  this.Ja = j;
  this.sd = this.Qa;
  this.mc = this.Qa = 0;
  gls2.ia.erase(j, j)
}, He:function() {
  this.Ja !== l && (this.Ja = l, gls2.kf(this.ea, j).addChildTo(this), this.ea.td = this.ea.Vh, t.Pa.Nb.$hyperOff = 1 * (2 !== this.ea.style ? 1 : 0.5), this.ea.Pe.Dd(0), this.ea.Ob.Dd(0), this.Td = gls2.ja.pe * gls2.ja.Ki, this.sd = this.yd = 0, gls2.ia.erase())
}, Tj:function() {
  gls2.ta("decision");
  gls2.ta("voGetBomb");
  this.Cb = Math.min(this.Cb + 1, this.Zc);
  this.Re = this.Cb === this.Zc
}, Ah:function() {
  gls2.ta("voExtend");
  this.pb("extended.");
  this.Qc += 1
}, pb:function(b, a) {
  this.Gb.rd.Uj(b, a)
}, ae:function(b) {
  B(this, "PAUSE", ["resume", "setting", "exit game"], this.Pk, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:l})
}, Pk:function(b) {
  switch(b) {
    case 1:
      this.Lc();
      break;
    case 2:
      this.Tk()
  }
}, Lc:function() {
  B(this, "SETTING", ["bgm volume", "sound volume"], this.vg, {defaultValue:this.Se, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, vg:function(b) {
  3 !== b && (this.Se = b);
  switch(b) {
    case 0:
      this.wg();
      break;
    case 1:
      this.xg();
      break;
    default:
      this.ae()
  }
}, Tk:function() {
  B(this, "REARY?", ["yes", "no"], this.Kk, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:l})
}, Kk:function(b) {
  0 === b ? (gls2.af(), this.app.replaceScene(gls2.TitleScene())) : this.ae(1)
}, wg:function() {
  B(this, "BGM VOLUME", "012345".split(""), this.tg, {defaultValue:gls2.core.Ld, onCursorMove:function(b) {
    gls2.Db !== k && 6 !== b && (gls2.Db.volume = 0.1 * b)
  }, showExit:l})
}, tg:function(b) {
  6 !== b && (gls2.core.Ld = b);
  this.Lc(1)
}, xg:function() {
  B(this, "SE VOLUME", "012345".split(""), this.ug, {defaultValue:gls2.core.dd, showExit:l})
}, ug:function(b) {
  6 !== b && (gls2.core.dd = b);
  this.Lc(1)
}, Uk:function() {
  B(this, "CONTINUE?", ["yes", "no"], this.Lk, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:l})
}, Lk:function(b) {
  switch(b) {
    case 0:
      this.mk();
      break;
    case 1:
      this.nk()
  }
}, vd:n(), $k:function() {
  this.Gb.qb.tweener.clear().to({Rd:-480}, 1600, "easeInBack").to({kc:30}, 800, "easeInOutBack")
}, uk:function() {
  this.Gb.qb.tweener.clear().to({kc:0}, 800, "easeInOutBack").to({Rd:0}, 1600, "easeOutBack")
}, de:k, ee:0, Ud:k, re:0, cl:function() {
  if(1 === this.re) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== h) {
      this.Ud = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.de = [];
    this.ee = 0
  }else {
    if(2 === this.re && (console.log("replay start"), localStorage.getItem("recCount") !== h)) {
      this.Ud = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.Ud.push(d[f])
        }
      }
    }
  }
}, Wk:function(b) {
  if(1 === this.re) {
    1E3 < this.de.length && (console.log("save"), localStorage.setItem("rec" + this.ee, this.de), localStorage.setItem("recCount", this.ee), this.de = [], this.ee += 1), this.de.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.re && this.Ud) {
      var a = this.Ud.shift();
      a !== h && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      })
    }
  }
}});
gls2.Ua.Dc = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.Ua.Yg = tm.createClass({superClass:tm.display.CanvasElement, da:k, frame:0, init:function(b) {
  this.superInit();
  this.da = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.ak(b);
  this.bk(b)
}, ak:function(b) {
  if(0 < this.da.Za) {
    b.fillStyle = "rgba(255," + ~~(255 * this.da.Za) + "," + ~~Math.min(255, 512 * this.da.Za) + ",0.5)";
    var a = 500 * this.da.Za;
    b.fillRect(465, 635 - a, 10, a)
  }
}, bk:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.Qa === gls2.ja.nf ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.da.mc && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.da.mc, 9))
}});
gls2.Ua.Gd = k;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, da:k, ci:k, Pb:k, values:k, labels:k, Qe:k, $h:[gls2.ja.oj, gls2.ja.pj, gls2.ja.lj, gls2.ja.mj, 1], Oh:k, Cg:k, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.da = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.da.Ye, this.da.Ze, ~~(100 * (this.da.nc / this.da.Ie)), this.da.Vd, 0 === this.da.Wd ? gls2.ja.nj : 0];
  this.Qe = this.values.map(function(a) {
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
  this.Oh = tm.display.Label(Math.floor(this.da.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.Cg = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.Cg.visible = l;
  this.ci = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var i = 0;16 > i;i++) {
      f[d][i] = {Dg:0, We:0, Bc:gls2.ma.randf(-2, 2), bc:gls2.ma.randf(1, 4)}
    }
  }
  this.Pb = tm.app.Object2D();
  this.Pb.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var i = 0;i < f[d].length;i++) {
        var q = f[d][i];
        640 > 40 * i + q.We && (a.drawImage(this.ci.element, 40 * d, 40 * i, 40, 40, 40 * d + q.Dg, 40 * i + q.We, 40, 40), q.Dg += q.Bc, q.We += q.bc, q.bc += 0.3, b = l)
      }
    }
    this.wait = 60;
    b && this.Pb.remove();
    a.restore()
  }.bind(this);
  this.Pb.addChildTo(this);
  this.addEventListener("exit", function() {
    gls2.Ke()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.ta("star"), this.values[a] <= this.Qe[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.da.Vc(this.values[a] * this.$h[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.da.Vc(this.Qe[a] * this.$h[a]), this.values[a] -= this.Qe[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.Oh.text = Math.floor(this.da.score)
    }else {
      if(this.Cg.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.ta("decision"), this.da.ei(this.da.Hg + 1), b.popScene()
      }
    }
    this.frame += 1
  }
}, vd:n()});
gls2.Gi = tm.createClass({superClass:gls2.Scene, na:0, yg:l, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.na = 0;
    this.yg = l
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.na && !this.yg) && this.Vk();
  this.na += 1
}, vd:function(b) {
  b.clearColor("black")
}, Vk:function() {
  this.yg = j;
  B(this, "GAME OVER", ["save score", "exit"], this.Ok, {defaultValue:0, menuDescriptions:["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"], showExit:l})
}, Ok:function(b) {
  0 === b ? this.app.Bg(k, function() {
    this.app.replaceScene(gls2.TitleScene())
  }) : this.app.replaceScene(gls2.TitleScene())
}});
gls2.jl = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit()
}, update:n()});
(function() {
  gls2.ha = tm.createClass({superClass:tm.display.CanvasElement, name:k, ea:k, da:k, ie:k, sa:0, Kc:0, score:0, zc:l, erase:l, star:1, yk:l, Eb:j, Oa:l, frame:0, cf:k, direction:0, speed:0, ga:k, init:function(a, d, f) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Oa = l;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.Eb = j;
    this.da = a;
    this.ea = a.ea;
    this.score = 100;
    this.erase = l;
    this.Sj(f);
    d.setup(this);
    this.altitude = this.zc ? 1 : 10;
    this.cf = {x:0, y:0}
  }, $d:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, Bl:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Oa === l && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Oa = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.zc && (this.x += this.da.oa.Ca, this.y += this.da.oa.Da);
    this.Oa && (this.frame += 1);
    this.cf.x = this.x - a;
    this.cf.y = this.y - b
  }, xc:function(a) {
    if(!this.Oa) {
      return l
    }
    this.sa -= a;
    if(0 >= this.sa) {
      return a = gls2.ma.randf(0, 5), 2 > a ? this.da.pb("enemy destroy.") : 4 > a ? this.da.pb(this.name + " destroy.") : this.da.pb("ETR reaction gone."), this.erase && gls2.ia.erase(j, this.da.Ja, this instanceof gls2.jd), this.dispatchEvent(tm.event.Event("destroy")), this.Fa(), j
    }
    40 > this.sa && this.Ra();
    return l
  }, Fa:function() {
    gls2.ra.Je(this.x, this.y, this.da, this.cf);
    this.remove()
  }, $b:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Rk:function() {
    return this.Eb
  }, Ra:n(), Sj:function(a) {
    this.name = a;
    a = gls2.ha.zi[a];
    this.sa = this.Kc = a[0];
    this.score = a[1];
    this.zc = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== h && (this.boundingRadius = a[5].radius);
    a[5].width !== h && (this.boundingWidth = a[5].width);
    a[5].height !== h && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== h && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== h && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== h && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== h && (this.boundingHeightBottom = a[5].heightBottom)
  }, jc:function() {
    this.remove();
    this.da.Bh.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Je(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.da, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.cg(this.x, this.y, this.da);
      this.remove()
    }.bind(this))
  }, Be:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Je(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.da, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.cg(this.x, this.y, this.da);
      this.remove()
    }.bind(this))
  }});
  gls2.ha.Md = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = gls2.ha.lb = []
})();
gls2.jd = tm.createClass({superClass:gls2.ha, yk:j, Kc:0, Xe:k, init:function(b, a, d) {
  this.Xe = a;
  this.superInit(b, this.Xe[0], d);
  this.Kc = this.sa;
  this.addEventListener("added", function() {
    this.da.Wb = this;
    this.da.$k();
    this.tweener.wait(1E3).call(function() {
      this.da.Pd = l
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.da.Wb = k;
    this.da.uk();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.da.Yj()
    }.bind(this));
    a.addChildTo(this.da.Pb)
  })
}, xc:function(b) {
  var a = this.sa;
  if(gls2.ha.prototype.xc.call(this, b)) {
    return this.da.Pd = j, this.da.ea.Kd = l, gls2.Ke(), j
  }
  this.sa <= 0.55 * this.Kc && 0.55 * this.Kc < a ? (gls2.ca.$e(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Lb(this.x, this.y, this.da), gls2.ia.erase(j, this.da.Ja), this.Xe[1].setup(this)) : this.sa <= 0.1 * this.Kc && 0.1 * this.Kc < a && (gls2.ca.$e(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Lb(this.x, this.y, this.da), gls2.ia.erase(j, this.da.Ja), this.Xe[2].setup(this), gls2.ta("voJacms"))
}});
(function() {
  gls2.ha.zi = {kujo:[2, 300, l, l, 1, {radius:24}], kiryu:[3, 400, l, l, 1, {radius:24}], natsuki:[5, 900, j, l, 1, {radius:24}], kise:[50, 15E3, j, l, 1, {radius:24}], yamabuki:[100, 15E3, j, l, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, l, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, l, l, 5, {width:100, height:20}], kurokawa:[35, 5E3, l, l, 5, 
  {width:100, height:20}], akimoto:[250, 3E5, l, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, l, j, 20, {width:180, heightBottom:40, heightTop:60}], yukishiro:[750, 8E5, l, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, l, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, l, j, 20, {width:300, height:80}], higashi:[1500, 12E5, l, j, 20, {width:256, height:128}], momozono:[6E3, 35E5, l, j, 0, {width:256, height:128}], hyuga:[6E3, 3E6, l, j, 0, {width:240, height:80}], 
  hishikawa:[2E3, 2E6, l, j, 20, {radius:130}], aida:[8E3, 4E6, l, j, 0, {width:370, heightBottom:5, heightTop:60}], erika:[30, 500, l, l, 1, {width:24, height:48}], hino:[30, 500, l, l, 1, {width:24, height:48}], hoshizora_y:[100, 2E4, l, j, 30, {width:128, height:64}], hoshizora_t:[100, 2E4, l, j, 30, {width:128, height:64}], yotsuba:[300, 1E5, l, j, 30, {width:64, height:64}], yotsubaLeaf:[150, 3E4, l, l, 10, {width:32, height:32}], midorikawa:[5, 1E3, l, l, 1, {width:32, height:32}], aoki:[5, 
  1200, l, l, 1, {width:32, height:32}]};
  gls2.ha.pa = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.fa = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.ea.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ha.za = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.fa = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.ea.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ha.la = tm.createClass({superClass:gls2.ha, Pf:k, Qf:k, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.Pf = b("tex_tank1", 64, 64);
    this.Qf = b("tex_tank1", 64, 64);
    this.Xc = this.Xc || 0;
    this.ic = this.ic || 0
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    for(a = this.Xc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.ic;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.Pf.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.Qf.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Pf.draw(a);
    this.Qf.draw(a)
  }, Fa:function() {
    gls2.ra.fk(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.Qg = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.fa = b("tex2", 256, 128).setFrameIndex(7)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.ub = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.fa = b("tex1", 64, 64).setFrameIndex(23)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.Cc = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.fa = b("tex1", 128, 128).setFrameIndex(1)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.tc = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.fa = b("tex1", 256, 128).setFrameIndex(1)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.jc()
  }});
  gls2.ha.ml = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "aono");
    this.fa = b("tex1", 256, 128);
    this.fa.srcRect.x = 128;
    this.fa.srcRect.y = 128;
    this.fa.srcRect.width = 256;
    this.fa.srcRect.height = 128
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.jc()
  }});
  gls2.ha.Df = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "yumehara");
    this.fa = b("tex1", 256, 256);
    this.fa.srcRect.x = 128;
    this.fa.srcRect.y = 256;
    this.fa.srcRect.width = 256;
    this.fa.srcRect.height = 256
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.jc()
  }});
  gls2.ha.La = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.fa = b("tex1", 64, 128).setFrameIndex(14)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.te = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "hanasaki");
    this.fa = b("tex1", 64, 128).setFrameIndex(14)
  }, Ra:n(), Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    this.remove()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.qf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "myodoin");
    this.fa = b("tex1", 128, 128).setFrameIndex(12)
  }, Ra:n(), Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    this.remove()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.cc = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.fa = b("tex1", 128, 256);
    this.fa.srcRect.x = 0;
    this.fa.srcRect.y = 128;
    this.fa.srcRect.width = 128;
    this.fa.srcRect.height = 256
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.hf = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "minazuki");
    this.fa = b("tex1", 128, 256);
    this.fa.srcRect.x = 0;
    this.fa.srcRect.y = 128;
    this.fa.srcRect.width = 128;
    this.fa.srcRect.height = 256;
    this.setScale(1.2)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.Ia = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hino");
    this.fa = b("hino", 64, 32).setFrameIndex(0);
    this.boundingWidth = 64;
    this.boundingHeightBottom = 0;
    this.boundingHeightTop = 32
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.qa = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, b) {
    this.superInit(a, b, "midorikawa");
    this.boundingWidthLeft = 0;
    this.boundingWidthRight = 32;
    this.boundingHeightTop = 0;
    this.boundingHeightBottom = 32
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.ea.x ? -1 : 1
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  gls2.ha.bi = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, b) {
    this.superInit(a, b, "aoki");
    this.boundingWidthLeft = 0;
    this.boundingWidthRight = 32;
    this.boundingHeightTop = 0;
    this.boundingHeightBottom = 32
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.ea.x ? -1 : 1
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, $d:function() {
    480 < this.x && (this.speed *= -1)
  }});
  gls2.ha.Yd = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_y");
    this.fa = b("hoshizora_y", 256, 128).setFrameIndex(0);
    this.boundingWidth = 256;
    this.boundingHeightBottom = 16;
    this.boundingHeightTop = 64
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Oa === l && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Oa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.jc()
  }, $d:function() {
    480 < this.x && (this.fa.scaleX = -1)
  }});
  gls2.ha.Xd = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_t");
    this.fa = b("hoshizora_t", 64, 128).setFrameIndex(0);
    this.boundingWidth = 128;
    this.boundingHeightBottom = 16;
    this.boundingHeightTop = 32
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Oa === l && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Oa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.jc()
  }});
  gls2.ha.df = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "yotsuba");
    this.fa = b("yotsuba", 128, 128).setFrameIndex(0);
    this.boundingWidth = 128;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.cg(this.x, this.y, this.da);
    this.jc();
    this.da.bd || gls2.Di(this.x, this.y, this.ea).addChildTo(this.parent);
    this.remove();
    for(var a = 0;4 > a;a++) {
      this.Ac[a] && this.Ac[a].Fa()
    }
    delete this.Ac
  }, $d:function() {
    this.Ac = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Ac[a] = this.ie.og({aa:gls2.ha.ef, ba:gls2.ca.ef, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Ac[a].dir = b;
      this.Ac[a].Zf = this;
      this.Ac[a].Gk = a;
      this.Ac[a].distance = 64
    }
    gls2.ha.prototype.$d.call(this);
    return this
  }});
  gls2.ha.ef = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "yotsubaLeaf");
    this.fa = b("yotsubaLeaf", 64, 64).setFrameIndex(0);
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
    this.fa.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64)
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    this.Zf.Ac[this.Gk] = k;
    this.remove()
  }});
  gls2.ha.Fd = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "erika");
    this.fa = b("tex3", 64, 128);
    this.fa.setFrameIndex(8)
  }, Ra:n(), draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Lb(this.x, this.y, this.da);
    gls2.si(this.x, this.y, this.ea).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ha.of = tm.createClass({superClass:gls2.ha, fa:k, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.fa = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, Fa:function() {
    this.jc()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.zf = tm.createClass({superClass:gls2.jd, fa:k, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.fa = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.Be()
  }});
  gls2.ha.vf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "mishou");
    this.fa = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.hc = gls2.Wa(80, 1, 0.9);
    this.Gc = gls2.Wa(256, 1, 0.9)
  }, update:function() {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === gls2.core.frame % 2 && (this.hc.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.da), this.hc.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.da), this.Gc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.da))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, Fa:function() {
    this.jc()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.wj = tm.createClass({superClass:gls2.jd, init:function(a, d) {
    this.superInit(a, d, "hyuga");
    this.fa = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, Fa:function() {
    this.Be()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.Jf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "higashi");
    this.fa = b("higashi", 256, 128).setFrameIndex(0)
  }, Ra:n(), Fa:function() {
    this.jc()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.ej = tm.createClass({superClass:gls2.jd, init:function(a, d) {
    this.superInit(a, d, "momozono");
    this.fa = b("momozono", 256, 128).setFrameIndex(0);
    this.fa.setScale(2)
  }, Ra:n(), Fa:function() {
    this.Be()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.Ff = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hishikawa");
    this.fa = b("tex2", 256, 256).setFrameIndex(2);
    this.fa.setScale(2);
    this.hc = gls2.Wa(60, 1, 0.95);
    this.Gc = gls2.Wa(500, 1, 0.8)
  }, update:function() {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === gls2.core.frame % 2 && 0 < this.sa && (this.hc.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.hc.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Gc.clone().setPosition(this.x, this.y).addChildTo(this.da))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, Fa:function() {
    this.jc()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.hj = tm.createClass({superClass:gls2.jd, init:function(a, d) {
    this.superInit(a, d, "aida");
    this.fa = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.hc = gls2.Wa(60, 1, 0.95);
    this.Gc = gls2.Wa(500, 1, 0.8)
  }, update:function() {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === gls2.core.frame % 2 && 0 < this.sa && (this.hc.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.hc.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.hc.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.hc.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Gc.clone().setPosition(this.x, this.y).addChildTo(this.da))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.tb() : 5 === a.app.frame % 30 && this.fa.sb()
    })
  }, Fa:function() {
    this.Be()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, Jg:k, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.Jg = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, tb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, i = this.srcRect.height;
    this.image = this.Jg + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = i
  }, sb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, i = this.srcRect.height;
    this.image = this.Jg;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = i
  }})
})();
(function() {
  gls2.ca = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.ca.$e(this)
    })
  }});
  gls2.ca.Ea = function(a, b) {
    var i = gls2.ia[b].Ge();
    a.on("enterframe", i);
    a.on("completeattack", function() {
      i.stop = j
    })
  };
  gls2.ca.$e = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, i = a.length;b < i;b++) {
        a[b] && a[b].hg && (a[b].stop = j)
      }
    }
  };
  gls2.ca.pa = tm.createClass({superClass:gls2.ca, pattern:k, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.el = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    var b = this.pattern, i = this.el;
    a.on("launch", function() {
      var a = gls2.xa.randf(640 * (i - 0.1), 640 * (i + 0.1));
      this.tweener.clear().wait(gls2.xa.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.ca.Ea(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.ca.sc = gls2.ca.pa("basic0-0", 0.2);
  gls2.ca.ib = gls2.ca.pa("basic0-0", 0.4);
  gls2.ca.md = gls2.ca.pa("basic0-0", 0.6);
  gls2.ca.hb = gls2.ca.pa("basic1-2", 0.2);
  gls2.ca.rc = gls2.ca.pa("basic1-2", 0.4);
  gls2.ca.ld = gls2.ca.pa("basic1-2", 0.6);
  gls2.ca.za = tm.createClass({superClass:gls2.ca, Ab:k, init:function(a) {
    this.superInit();
    this.Ab = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Ab = this.Ab;
    a.tweener.wait(gls2.xa.rand(0, 1E3)).call(function() {
      this.speed = 6;
      gls2.ca.Ea(this, this.Ab);
      this.on("enterframe", function() {
        this.y < this.ea.y && this.Oa && (this.angle += Math.atan2(this.ea.y - this.y, this.ea.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.$b() && this.Oa && this.remove();
        if(22500 > gls2.yc(this, this.ea) || this.y > this.ea.y + 150) {
          this.Eb = l
        }
      })
    }.bind(a))
  }});
  gls2.ca.jb = gls2.ca.za("basic1-0");
  var b = tm.createClass({superClass:gls2.ca, init:function(a, b, i) {
    this.superInit();
    this.xk = a;
    this.wk = b;
    this.qd = i
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.speed = this.xk;
    a.Xc = this.wk;
    this.qd && (a.qd = [].concat(this.qd));
    a.ic = 0;
    a.on("enter", function() {
      gls2.ca.Ea(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.Xc) * this.speed;
      this.y += Math.sin(this.Xc) * this.speed;
      this.Oa && !this.$b() && this.remove();
      for(this.ic = Math.atan2(this.ea.y - this.y, this.ea.x - this.x);0 > this.ic;) {
        this.ic += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.ic;) {
        this.ic -= 2 * Math.PI
      }
      this.Eb = this.y < this.ea.y && 4E4 < gls2.yc(this, this.ea);
      if(this.qd) {
        for(var a = 0;a < this.qd.length;a++) {
          var b = this.qd[a];
          b.frame === this.frame && this.tweener.to({Xc:b.dir !== h ? b.dir : this.Xc, speed:b.speed !== h ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.ca.ec = b(1, 0.25 * Math.PI);
  gls2.ca.nl = b(1, -1.75 * Math.PI);
  gls2.ca.Hd = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.ca.ua = b(1.6, 0.5 * Math.PI);
  gls2.ca.fc = b(1.6, -0.5 * Math.PI);
  gls2.ca.qi = tm.createClass({superClass:gls2.ca, Ka:k, init:function(a) {
    this.superInit();
    this.Ka = a
  }, setup:function(a) {
    gls2.ca.Ea(a, this.Ka);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.ca.Rg = gls2.ca.qi("bukky-4-0");
  b = tm.createClass({superClass:gls2.ca, Ka:k, uh:l, init:function(a, b) {
    this.superInit();
    this.Ka = a;
    this.uh = !!b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Ka = this.Ka;
    a.on("enter", function() {
      gls2.ca.Ea(this, this.Ka)
    });
    a.on("enterframe", function() {
      this.Oa && !this.$b() && this.remove()
    });
    if(!this.uh) {
      a.on("enterframe", function() {
        this.Eb = this.y < this.ea.y && 4E4 < gls2.yc(this, this.ea)
      })
    }
  }});
  gls2.ca.Ib = b("basic3-0", l);
  gls2.ca.Jb = b("basic3-1", l);
  gls2.ca.dc = b("cannon2-0", j);
  gls2.ca.gf = b("cannon2-3", j);
  gls2.ca.le = b("cannon3-0", j);
  gls2.ca.jf = b("cannon5-0", j);
  b = tm.createClass({superClass:gls2.ca, velocityY:0, Ka:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ka = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ka];
    a.ai = l;
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.ca.Ea(this, this.ga[0]);
      this.ai = j
    }.bind(a));
    a.on("enterframe", function() {
      this.ai && (this.y += this.velocityY, 384 < this.y && gls2.ca.$e(this), this.Oa && !this.$b() && this.remove(), this.Eb = this.y < this.ea.y)
    })
  }});
  gls2.ca.Sc = b(0.5, "kurokawa-1");
  gls2.ca.ij = b(0.5, "kurokawa-4");
  gls2.ca.Uc = tm.createClass({superClass:gls2.ca, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.ca.Ea(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.ca.Tc = tm.createClass({superClass:gls2.ca, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.ca.Ea(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  var a = tm.createClass({superClass:gls2.ca, velocityY:0, Ka:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ka = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ka];
    a.tweener.clear().call(function() {
      gls2.ca.Ea(this, this.ga[0]);
      gls2.ra.qk(this.x, this.y, this.da)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Oa && !this.$b() && this.remove();
      this.Eb = this.y < this.ea.y
    })
  }});
  gls2.ca.Ia = a(0.5, "akane");
  gls2.ca.qa = tm.createClass({superClass:gls2.ca, Ab:k, init:function(a, b) {
    this.superInit();
    this.Ab = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Ab = this.Ab;
    a.speed = this.speed;
    a.tweener.wait(gls2.xa.rand(0, 1E3)).call(function() {
      gls2.ca.Ea(this, this.Ab);
      this.on("enterframe", function() {
        this.y < this.ea.y && this.Oa && (this.angle += Math.atan2(this.ea.y - this.y, this.ea.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.$b() && this.Oa && this.remove();
        if(22500 > gls2.yc(this, this.ea) || this.y > this.ea.y + 150) {
          this.Eb = l
        }
      })
    }.bind(a))
  }});
  gls2.ca.mb = gls2.ca.qa(3, 1);
  gls2.ca.nb = gls2.ca.qa(6, 1);
  gls2.ca.ob = gls2.ca.qa(12, 1);
  gls2.ca.bi = tm.createClass({superClass:gls2.ca, Ab:k, init:function(a) {
    this.superInit();
    this.Ab = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Ab = this.Ab;
    a.speed = this.speed;
    a.tweener.wait(gls2.xa.rand(0, 1E3)).call(function() {
      gls2.ca.Ea(this, this.Ab);
      this.on("enterframe", function() {
        this.x += this.speed
      })
    }.bind(a))
  }});
  gls2.ca.Fl = gls2.ca.bi(3);
  gls2.ca.Yd = tm.createClass({superClass:gls2.ca, velocityX:0, Ka:k, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ka = "miyuki_y"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ka];
    a.tweener.clear().call(function() {
      gls2.ca.Ea(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Oa && !this.$b() && this.remove();
      this.Eb = this.y < this.ea.y
    })
  }});
  gls2.ca.Ek = gls2.ca.Yd(1);
  gls2.ca.Fk = gls2.ca.Yd(-1);
  gls2.ca.Xd = tm.createClass({superClass:gls2.ca, velocityX:0, Ka:k, init:function(a, b) {
    this.superInit();
    this.velocityX = a;
    this.Ka = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ka];
    a.Yh = 0;
    a.tweener.clear().call(function() {
      gls2.ca.Ea(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      0 == this.Yh ? (this.y += 0.5, 256 < this.y && this.Yh++) : this.x += this.velocityX;
      this.Oa && !this.$b() && this.remove()
    })
  }});
  gls2.ca.Ck = gls2.ca.Xd(-0.5, "miyuki_t");
  gls2.ca.Dk = gls2.ca.Xd(0.5, "miyuki_t");
  a = tm.createClass({superClass:gls2.ca, velocityX:0, Ka:k, init:function() {
    this.superInit();
    this.Ka = "alice"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityY = 0.5;
    a.ga = [this.Ka];
    a.tweener.clear().call(function() {
      gls2.ca.Ea(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Oa && !this.$b() && this.remove();
      this.Eb = this.y < this.ea.y
    })
  }});
  gls2.ca.df = a();
  a = tm.createClass({superClass:gls2.ca, Ka:k, init:function() {
    this.superInit();
    this.Ka = "aliceLeaf"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [this.Ka];
    a.tweener.clear().call(function() {
      gls2.ca.Ea(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.Zf.x, b = this.Zf.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      this.Oa && !this.$b() && this.remove();
      this.Eb = this.y < this.ea.y
    })
  }});
  gls2.ca.ef = a();
  gls2.ca.Zg = b(0.3, "komachi-1");
  gls2.ca.qe = b(0.5, "komachi-2");
  gls2.ca.rf = b(0.5, "komachi-4");
  gls2.ca.Ef = b(0.1, "nozomi-4");
  gls2.ca.Fd = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.Ea(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Eb = this.Oa
    })
  }});
  gls2.ca.Fd = gls2.ca.Fd();
  b = tm.createClass({superClass:gls2.ca, ga:k, Te:0, init:function(a, b) {
    this.superInit();
    this.ga = a;
    this.Te = b || 1500
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Te = this.Te;
    a.bb = l;
    a.Va = l;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.bb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.bb === l || 0 >= this.sa) && this.Te < this.frame && this.Va === l) {
        this.Va = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Va) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.of = b(["honoka-1"]);
  gls2.ca.zf = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.bb = l;
    a.Va = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.bb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Va) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.jj = gls2.ca.zf();
  gls2.ca.Af = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Af = gls2.ca.Af();
  gls2.ca.Bf = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.sa || gls2.ca.Ea(this, "nagisa-3-1")
    })
  }});
  gls2.ca.Bf = gls2.ca.Bf();
  gls2.ca.vf = b(["mai-1", "mai-2"]);
  gls2.ca.Gf = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.bb = l;
    a.Va = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.bb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Va) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Gf = gls2.ca.Gf();
  gls2.ca.Hf = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Hf = gls2.ca.Hf();
  gls2.ca.If = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.If = gls2.ca.If();
  a = tm.createClass({superClass:gls2.ca, ga:k, init:function(a) {
    this.superInit();
    this.ga = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.bb = l;
    a.Va = l;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.bb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.bb === l || 0 >= this.sa) && 1500 < this.frame && this.Va === l) {
        this.Va = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Va) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Jf = a(["setsuna-1"]);
  gls2.ca.sf = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.bb = l;
    a.Va = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.bb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Va) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.sf = gls2.ca.sf();
  gls2.ca.tf = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.bb = l;
    a.Va = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.bb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Va) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.tf = gls2.ca.tf();
  gls2.ca.uf = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.bb = l;
    a.Va = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.bb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Va) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.uf = gls2.ca.uf();
  gls2.ca.Ff = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.ca.wf = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.bb = l;
    a.Va = l;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.bb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.xa.randf(-48, 48);
        this.tweener.move(Math.clamp(this.ea.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Va) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.wf = gls2.ca.wf();
  gls2.ca.xf = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.4 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.xf = gls2.ca.xf();
  gls2.ca.yf = tm.createClass({superClass:gls2.ca, ga:k, init:function() {
    this.superInit();
    this.ga = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.xa.random() * Math.PI, d = gls2.xa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.ca.Ea(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.yf = gls2.ca.yf()
})();
var I = gls2.ha, J = gls2.ca;
gls2.Ug = {"heri1-left":[{aa:I.za, ba:J.sc, x:48, y:-100}, {aa:I.za, ba:J.ib, x:96, y:-100}, {aa:I.za, ba:J.sc, x:144, y:-100}, {aa:I.za, ba:J.ib, x:192, y:-100}, {aa:I.za, ba:J.sc, x:240, y:-100}], "heri1-center":[{aa:I.za, ba:J.sc, x:144, y:-100}, {aa:I.za, ba:J.ib, x:192, y:-100}, {aa:I.za, ba:J.sc, x:240, y:-100}, {aa:I.za, ba:J.ib, x:288, y:-100}, {aa:I.za, ba:J.sc, x:336, y:-100}], "heri1-right":[{aa:I.za, ba:J.sc, x:240, y:-100}, {aa:I.za, ba:J.ib, x:288, y:-100}, {aa:I.za, ba:J.sc, x:336, 
y:-100}, {aa:I.za, ba:J.ib, x:384, y:-100}, {aa:I.za, ba:J.sc, x:432, y:-100}], "heri1-left2":[{aa:I.za, ba:J.ib, x:48, y:-100}, {aa:I.za, ba:J.md, x:96, y:-100}, {aa:I.za, ba:J.ib, x:144, y:-100}, {aa:I.za, ba:J.md, x:192, y:-100}, {aa:I.za, ba:J.ib, x:240, y:-100}], "heri1-center2":[{aa:I.za, ba:J.ib, x:144, y:-100}, {aa:I.za, ba:J.md, x:192, y:-100}, {aa:I.za, ba:J.ib, x:240, y:-100}, {aa:I.za, ba:J.md, x:288, y:-100}, {aa:I.za, ba:J.ib, x:336, y:-100}], "heri1-right2":[{aa:I.za, ba:J.ib, x:240, 
y:-100}, {aa:I.za, ba:J.md, x:288, y:-100}, {aa:I.za, ba:J.ib, x:336, y:-100}, {aa:I.za, ba:J.md, x:384, y:-100}, {aa:I.za, ba:J.ib, x:432, y:-100}], "heri2-left":[{aa:I.pa, ba:J.jb, x:48, y:-100}, {aa:I.pa, ba:J.jb, x:96, y:-100}, {aa:I.pa, ba:J.jb, x:144, y:-100}, {aa:I.pa, ba:J.jb, x:192, y:-100}, {aa:I.pa, ba:J.jb, x:240, y:-100}], "heri2-center":[{aa:I.pa, ba:J.jb, x:144, y:-100}, {aa:I.pa, ba:J.jb, x:192, y:-100}, {aa:I.pa, ba:J.jb, x:240, y:-100}, {aa:I.pa, ba:J.jb, x:288, y:-100}, {aa:I.pa, 
ba:J.jb, x:336, y:-100}], "heri2-right":[{aa:I.pa, ba:J.jb, x:240, y:-100}, {aa:I.pa, ba:J.jb, x:288, y:-100}, {aa:I.pa, ba:J.jb, x:336, y:-100}, {aa:I.pa, ba:J.jb, x:384, y:-100}, {aa:I.pa, ba:J.jb, x:432, y:-100}], "heri1-4-left":[{aa:I.pa, ba:J.hb, x:48, y:-100}, {aa:I.pa, ba:J.hb, x:96, y:-100}, {aa:I.pa, ba:J.hb, x:144, y:-100}, {aa:I.pa, ba:J.hb, x:192, y:-100}, {aa:I.pa, ba:J.hb, x:240, y:-100}], "heri1-4-center":[{aa:I.pa, ba:J.hb, x:144, y:-100}, {aa:I.pa, ba:J.hb, x:192, y:-100}, {aa:I.pa, 
ba:J.hb, x:240, y:-100}, {aa:I.pa, ba:J.hb, x:288, y:-100}, {aa:I.pa, ba:J.hb, x:336, y:-100}], "heri1-4-right":[{aa:I.pa, ba:J.hb, x:240, y:-100}, {aa:I.pa, ba:J.hb, x:288, y:-100}, {aa:I.pa, ba:J.hb, x:336, y:-100}, {aa:I.pa, ba:J.hb, x:384, y:-100}, {aa:I.pa, ba:J.hb, x:432, y:-100}], "heri1-4-left2":[{aa:I.pa, ba:J.rc, x:48, y:-100}, {aa:I.pa, ba:J.ld, x:96, y:-100}, {aa:I.pa, ba:J.rc, x:144, y:-100}, {aa:I.pa, ba:J.ld, x:192, y:-100}, {aa:I.pa, ba:J.rc, x:240, y:-100}], "heri1-4-center2":[{aa:I.pa, 
ba:J.rc, x:144, y:-100}, {aa:I.pa, ba:J.ld, x:192, y:-100}, {aa:I.pa, ba:J.rc, x:240, y:-100}, {aa:I.pa, ba:J.ld, x:288, y:-100}, {aa:I.pa, ba:J.rc, x:336, y:-100}], "heri1-4-right2":[{aa:I.pa, ba:J.rc, x:240, y:-100}, {aa:I.pa, ba:J.ld, x:288, y:-100}, {aa:I.pa, ba:J.rc, x:336, y:-100}, {aa:I.pa, ba:J.ld, x:384, y:-100}, {aa:I.pa, ba:J.rc, x:432, y:-100}], "tankRD-left":[{aa:I.la, ba:J.ec, x:78, y:-50}, {aa:I.la, ba:J.ec, x:28, y:-100}, {aa:I.la, ba:J.ec, x:-22, y:-150}, {aa:I.la, ba:J.ec, x:-72, 
y:-200}, {aa:I.la, ba:J.ec, x:-122, y:-250}], "tankRD-center":[{aa:I.la, ba:J.ec, x:222, y:-50}, {aa:I.la, ba:J.ec, x:172, y:-100}, {aa:I.la, ba:J.ec, x:122, y:-150}, {aa:I.la, ba:J.ec, x:72, y:-200}, {aa:I.la, ba:J.ec, x:22, y:-250}], "tankL-top":[{aa:I.la, ba:J.Hd, x:550, y:64}, {aa:I.la, ba:J.Hd, x:620, y:64}, {aa:I.la, ba:J.Hd, x:690, y:64}, {aa:I.la, ba:J.Hd, x:760, y:64}, {aa:I.la, ba:J.Hd, x:830, y:64}], "tank5-left":[{aa:I.la, ba:J.ua, x:48, y:-70}, {aa:I.la, ba:J.ua, x:48, y:-140}, {aa:I.la, 
ba:J.ua, x:48, y:-210}, {aa:I.la, ba:J.ua, x:48, y:-280}, {aa:I.la, ba:J.ua, x:48, y:-350}], "tank5-center":[{aa:I.la, ba:J.ua, x:240, y:-70}, {aa:I.la, ba:J.ua, x:240, y:-140}, {aa:I.la, ba:J.ua, x:240, y:-210}, {aa:I.la, ba:J.ua, x:240, y:-280}, {aa:I.la, ba:J.ua, x:240, y:-350}], "tank15-top":[{aa:I.la, ba:J.ua, x:48, y:-70}, {aa:I.la, ba:J.ua, x:48, y:-140}, {aa:I.la, ba:J.ua, x:48, y:-210}, {aa:I.la, ba:J.ua, x:48, y:-280}, {aa:I.la, ba:J.ua, x:48, y:-350}, {aa:I.la, ba:J.ua, x:240, y:-70}, 
{aa:I.la, ba:J.ua, x:240, y:-140}, {aa:I.la, ba:J.ua, x:240, y:-210}, {aa:I.la, ba:J.ua, x:240, y:-280}, {aa:I.la, ba:J.ua, x:240, y:-350}, {aa:I.la, ba:J.ua, x:432, y:-70}, {aa:I.la, ba:J.ua, x:432, y:-140}, {aa:I.la, ba:J.ua, x:432, y:-210}, {aa:I.la, ba:J.ua, x:432, y:-280}, {aa:I.la, ba:J.ua, x:432, y:-350}], "tank25-top":[{aa:I.la, ba:J.ua, x:48, y:-70}, {aa:I.la, ba:J.ua, x:48, y:-140}, {aa:I.la, ba:J.ua, x:48, y:-210}, {aa:I.la, ba:J.ua, x:48, y:-280}, {aa:I.la, ba:J.ua, x:48, y:-350}, {aa:I.la, 
ba:J.ua, x:240, y:-70}, {aa:I.la, ba:J.ua, x:240, y:-140}, {aa:I.la, ba:J.ua, x:240, y:-210}, {aa:I.la, ba:J.ua, x:240, y:-280}, {aa:I.la, ba:J.ua, x:240, y:-350}, {aa:I.la, ba:J.ua, x:432, y:-70}, {aa:I.la, ba:J.ua, x:432, y:-140}, {aa:I.la, ba:J.ua, x:432, y:-210}, {aa:I.la, ba:J.ua, x:432, y:-280}, {aa:I.la, ba:J.ua, x:432, y:-350}, {aa:I.la, ba:J.fc, x:144, y:710}, {aa:I.la, ba:J.fc, x:144, y:780}, {aa:I.la, ba:J.fc, x:144, y:850}, {aa:I.la, ba:J.fc, x:144, y:920}, {aa:I.la, ba:J.fc, x:144, y:990}, 
{aa:I.la, ba:J.fc, x:336, y:710}, {aa:I.la, ba:J.fc, x:336, y:780}, {aa:I.la, ba:J.fc, x:336, y:850}, {aa:I.la, ba:J.fc, x:336, y:920}, {aa:I.la, ba:J.fc, x:336, y:990}], "bukky-4-r":[{aa:I.Qg, ba:J.Rg, x:480, y:-50}], "bukky-4-l":[{aa:I.Qg, ba:J.Rg, x:0, y:-50}], "cannon-0":[{aa:I.La, ba:J.Ib, x:48, y:-100}], "cannon-1":[{aa:I.La, ba:J.Ib, x:96, y:-100}], "cannon-2":[{aa:I.La, ba:J.Ib, x:144, y:-100}], "cannon-3":[{aa:I.La, ba:J.Ib, x:192, y:-100}], "cannon-4":[{aa:I.La, ba:J.Ib, x:240, y:-100}], 
"cannon-5":[{aa:I.La, ba:J.Ib, x:288, y:-100}], "cannon-6":[{aa:I.La, ba:J.Ib, x:336, y:-100}], "cannon-7":[{aa:I.La, ba:J.Ib, x:384, y:-100}], "cannon-8":[{aa:I.La, ba:J.Ib, x:432, y:-100}], "cannon-R0":[{aa:I.La, ba:J.Ib, x:550, y:128}], "cannon-R1":[{aa:I.La, ba:J.Ib, x:550, y:192}], "cannon-R2":[{aa:I.La, ba:J.Ib, x:550, y:256}], "yayoi-0":[{aa:I.La, ba:J.Jb, x:48, y:-100}], "yayoi-1":[{aa:I.La, ba:J.Jb, x:96, y:-100}], "yayoi-2":[{aa:I.La, ba:J.Jb, x:144, y:-100}], "yayoi-3":[{aa:I.La, ba:J.Jb, 
x:192, y:-100}], "yayoi-4":[{aa:I.La, ba:J.Jb, x:240, y:-100}], "yayoi-5":[{aa:I.La, ba:J.Jb, x:288, y:-100}], "yayoi-6":[{aa:I.La, ba:J.Jb, x:336, y:-100}], "yayoi-7":[{aa:I.La, ba:J.Jb, x:384, y:-100}], "yayoi-8":[{aa:I.La, ba:J.Jb, x:432, y:-100}], "yayoi-R0":[{aa:I.La, ba:J.Jb, x:550, y:128}], "yayoi-R1":[{aa:I.La, ba:J.Jb, x:550, y:192}], "yayoi-R2":[{aa:I.La, ba:J.Jb, x:550, y:256}], "tsubomi-0":[{aa:I.te, ba:J.le, x:96, y:-100}], "tsubomi-1":[{aa:I.te, ba:J.le, x:240, y:-100}], "tsubomi-2":[{aa:I.te, 
ba:J.le, x:384, y:-100}], "tsubomi-R0":[{aa:I.te, ba:J.le, x:580, y:128}], "itsuki-0":[{aa:I.qf, ba:J.jf, x:96, y:-100}], "itsuki-1":[{aa:I.qf, ba:J.jf, x:240, y:-100}], "itsuki-2":[{aa:I.qf, ba:J.jf, x:384, y:-100}], "makoto-0":[{aa:I.cc, ba:J.dc, x:48, y:-100}], "makoto-1":[{aa:I.cc, ba:J.dc, x:96, y:-100}], "makoto-2":[{aa:I.cc, ba:J.dc, x:144, y:-100}], "makoto-3":[{aa:I.cc, ba:J.dc, x:192, y:-100}], "makoto-4":[{aa:I.cc, ba:J.dc, x:240, y:-100}], "makoto-5":[{aa:I.cc, ba:J.dc, x:288, y:-100}], 
"makoto-6":[{aa:I.cc, ba:J.dc, x:336, y:-100}], "makoto-7":[{aa:I.cc, ba:J.dc, x:384, y:-100}], "makoto-8":[{aa:I.cc, ba:J.dc, x:432, y:-100}], "makoto-R0":[{aa:I.cc, ba:J.dc, x:580, y:128}], "karen-3-2":[{aa:I.hf, ba:J.gf, x:96, y:-100}], "karen-3-5":[{aa:I.hf, ba:J.gf, x:240, y:-100}], "karen-3-8":[{aa:I.hf, ba:J.gf, x:384, y:-100}], "fighter-m-0":[{aa:I.Cc, ba:J.Sc, x:96, y:-192}], "fighter-m-1":[{aa:I.Cc, ba:J.Sc, x:144, y:-192}], "fighter-m-2":[{aa:I.Cc, ba:J.Sc, x:192, y:-192}], "fighter-m-3":[{aa:I.Cc, 
ba:J.Sc, x:240, y:-192}], "fighter-m-4":[{aa:I.Cc, ba:J.Sc, x:288, y:-192}], "fighter-m-5":[{aa:I.Cc, ba:J.Sc, x:336, y:-192}], "fighter-m-6":[{aa:I.Cc, ba:J.Sc, x:384, y:-192}], "fighter-m4-0":[{aa:I.Cc, ba:J.ij, x:96, y:-192}], "tsukikage-r":[{aa:I.ub, ba:J.Uc(700), x:624, y:256}, {aa:I.ub, ba:J.Uc(600), x:720, y:256}, {aa:I.ub, ba:J.Uc(500), x:576, y:320}, {aa:I.ub, ba:J.Uc(400), x:672, y:320}, {aa:I.ub, ba:J.Uc(300), x:768, y:320}, {aa:I.ub, ba:J.Uc(200), x:624, y:384}, {aa:I.ub, ba:J.Uc(100), 
x:720, y:384}], "tsukikage-l":[{aa:I.ub, ba:J.Tc(700), x:-144, y:384}, {aa:I.ub, ba:J.Tc(600), x:-240, y:384}, {aa:I.ub, ba:J.Tc(500), x:-96, y:320}, {aa:I.ub, ba:J.Tc(400), x:-192, y:320}, {aa:I.ub, ba:J.Tc(300), x:-288, y:320}, {aa:I.ub, ba:J.Tc(200), x:-144, y:256}, {aa:I.ub, ba:J.Tc(100), x:-240, y:256}], "komachi-0":[{aa:I.tc, ba:J.Zg, x:144, y:-192}], "komachi-1":[{aa:I.tc, ba:J.Zg, x:336, y:-192}], "komachi2-0":[{aa:I.tc, ba:J.qe, x:144, y:-192}], "komachi2-1":[{aa:I.tc, ba:J.qe, x:336, y:-192}], 
"komachi3-0":[{aa:I.tc, ba:J.qe, x:144, y:-192}], "komachi3-1":[{aa:I.tc, ba:J.qe, x:336, y:-192}], "komachi4-0":[{aa:I.tc, ba:J.rf, x:144, y:-192}], "komachi4-1":[{aa:I.tc, ba:J.rf, x:336, y:-192}], "komachi4-2":[{aa:I.tc, ba:J.rf, x:240, y:-192}], "nozomi4-0":[{aa:I.Df, ba:J.Ef, x:144, y:-192}], "nozomi4-1":[{aa:I.Df, ba:J.Ef, x:240, y:-192}], "nozomi4-2":[{aa:I.Df, ba:J.Ef, x:336, y:-192}], "akane-center":[{aa:I.Ia, ba:J.Ia, x:144, y:130}, {aa:I.Ia, ba:J.Ia, x:192, y:80}, {aa:I.Ia, ba:J.Ia, x:240, 
y:140}, {aa:I.Ia, ba:J.Ia, x:288, y:80}, {aa:I.Ia, ba:J.Ia, x:336, y:130}], "akane-right":[{aa:I.Ia, ba:J.Ia, x:384, y:160}, {aa:I.Ia, ba:J.Ia, x:288, y:120}, {aa:I.Ia, ba:J.Ia, x:288, y:80}, {aa:I.Ia, ba:J.Ia, x:384, y:40}], "akane-left":[{aa:I.Ia, ba:J.Ia, x:96, y:160}, {aa:I.Ia, ba:J.Ia, x:144, y:120}, {aa:I.Ia, ba:J.Ia, x:144, y:80}, {aa:I.Ia, ba:J.Ia, x:96, y:40}], "nao1-left":[{aa:I.qa, ba:J.mb, x:48, y:-100}, {aa:I.qa, ba:J.mb, x:96, y:-100}, {aa:I.qa, ba:J.mb, x:144, y:-100}, {aa:I.qa, ba:J.mb, 
x:192, y:-100}, {aa:I.qa, ba:J.mb, x:240, y:-100}], "nao1-right":[{aa:I.qa, ba:J.mb, x:240, y:-100}, {aa:I.qa, ba:J.mb, x:288, y:-100}, {aa:I.qa, ba:J.mb, x:336, y:-100}, {aa:I.qa, ba:J.mb, x:384, y:-100}, {aa:I.qa, ba:J.mb, x:432, y:-100}], "nao1-center":[{aa:I.qa, ba:J.mb, x:144, y:-100}, {aa:I.qa, ba:J.mb, x:192, y:-100}, {aa:I.qa, ba:J.mb, x:240, y:-100}, {aa:I.qa, ba:J.mb, x:288, y:-100}, {aa:I.qa, ba:J.mb, x:336, y:-100}], "nao2-left":[{aa:I.qa, ba:J.nb, x:48, y:-100}, {aa:I.qa, ba:J.nb, x:96, 
y:-100}, {aa:I.qa, ba:J.nb, x:144, y:-100}, {aa:I.qa, ba:J.nb, x:192, y:-100}, {aa:I.qa, ba:J.nb, x:240, y:-100}], "nao2-right":[{aa:I.qa, ba:J.nb, x:240, y:-100}, {aa:I.qa, ba:J.nb, x:288, y:-100}, {aa:I.qa, ba:J.nb, x:336, y:-100}, {aa:I.qa, ba:J.nb, x:384, y:-100}, {aa:I.qa, ba:J.nb, x:432, y:-100}], "nao2-center":[{aa:I.qa, ba:J.nb, x:144, y:-100}, {aa:I.qa, ba:J.nb, x:192, y:-100}, {aa:I.qa, ba:J.nb, x:240, y:-100}, {aa:I.qa, ba:J.nb, x:288, y:-100}, {aa:I.qa, ba:J.nb, x:336, y:-100}], "nao3-left":[{aa:I.qa, 
ba:J.ob, x:48, y:-100}, {aa:I.qa, ba:J.ob, x:96, y:-100}, {aa:I.qa, ba:J.ob, x:144, y:-100}, {aa:I.qa, ba:J.ob, x:192, y:-100}, {aa:I.qa, ba:J.ob, x:240, y:-100}], "nao3-right":[{aa:I.qa, ba:J.ob, x:240, y:-100}, {aa:I.qa, ba:J.ob, x:288, y:-100}, {aa:I.qa, ba:J.ob, x:336, y:-100}, {aa:I.qa, ba:J.ob, x:384, y:-100}, {aa:I.qa, ba:J.ob, x:432, y:-100}], "nao3-center":[{aa:I.qa, ba:J.ob, x:144, y:-100}, {aa:I.qa, ba:J.ob, x:192, y:-100}, {aa:I.qa, ba:J.ob, x:240, y:-100}, {aa:I.qa, ba:J.ob, x:288, y:-100}, 
{aa:I.qa, ba:J.ob, x:336, y:-100}], hoshizora_y1:[{aa:I.Yd, ba:J.Ek, x:-256, y:140}], hoshizora_y2:[{aa:I.Yd, ba:J.Fk, x:608, y:60}], hoshizora_t1:[{aa:I.Xd, ba:J.Ck, x:336, y:-128}], hoshizora_t2:[{aa:I.Xd, ba:J.Dk, x:144, y:-128}], yotsuba:[{aa:I.df, ba:J.df, x:240, y:-64}], erika:[{aa:I.Fd, ba:J.Fd, x:240, y:-100}], yukishiro:[{aa:I.of, ba:J.of, x:240, y:-100}], misumi:[{aa:I.zf, ba:[J.jj, J.Af, J.Bf], x:240, y:-100, Wb:j}], mai:[{aa:I.vf, ba:J.vf, x:780, y:128}], hyuga:[{aa:I.wj, ba:[J.Gf, J.Hf, 
J.If], x:240, y:-100, Wb:j}], higashi:[{aa:I.Jf, ba:J.Jf, x:780, y:128}], momozono:[{aa:I.ej, ba:[J.sf, J.tf, J.uf], x:240, y:-100, Wb:j}], rikka:[{aa:I.Ff, ba:J.Ff, x:240, y:-100}], mana:[{aa:I.hj, ba:[J.wf, J.xf, J.yf], x:240, y:-100, Wb:j}]};
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, i, m, p) {
    return c.action([c.fire(c.direction(b, "absolute"), f, i || w, m, p), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, i || w, m, p)])])
  }
  function d(a, b, c, d, i) {
    return function(m) {
      return f(a, b, c, m, d, i, h, h)
    }
  }
  function f(a, b, d, f, i, m, p, q) {
    return c.action([c.fire(c.direction(b), f, i || w, m, p, q), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, i || w, m, p, q)])])
  }
  function i(a) {
    return c.fire(c.direction(0), a || q, E)
  }
  function p(a) {
    return c.fire(c.direction(0), a || q, w)
  }
  function s(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function z(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function A(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.40 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function q(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.10 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.80 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function u(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function M(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function m(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function O(a) {
    return c.Ga(a, {frame:3, Zd:j})
  }
  function Q(a) {
    return c.Ga(a, {frame:2, Zd:j})
  }
  function H(a) {
    return c.Ga(a, {visible:l})
  }
  function D(a) {
    return c.Ga(a, {frame:4, Vb:j})
  }
  function L(a) {
    return c.Ga(a, {frame:3})
  }
  function w(a) {
    return c.Ga(a, {frame:1})
  }
  function v(a) {
    return c.Ga(a, {frame:2})
  }
  function E(a) {
    return c.Ga(a, {frame:0})
  }
  function F(a) {
    return c.Ga(a, {frame:3, Vb:j})
  }
  function K(a) {
    return c.Ga(a, {frame:1, Vb:j})
  }
  function C(a) {
    return c.Ga(a, {frame:2, Vb:j})
  }
  function G(a) {
    return c.Ga(a, {frame:0, Vb:j})
  }
  gls2.ia = {};
  var c = t.Ha;
  gls2.ia["basic0-0"] = new t.ka({top:c.action([p])});
  gls2.ia["basic0-1"] = new t.ka({top:c.action([b(A, -0.01, 8, d(3, -15, 15))])});
  gls2.ia["basic1-0"] = new t.ka({top:c.action([c.repeat(999, [m(40), p(q)])])});
  gls2.ia["basic1-1"] = new t.ka({top:c.action([c.repeat(999, [m(20), p(q)])])});
  gls2.ia["basic1-2"] = new t.ka({top:c.action([m("10+$rand*20"), f(3, -20, 20, q)])});
  gls2.ia["basic2-0"] = new t.ka({top:c.action([c.repeat(999, [m(50), p(q)])])});
  gls2.ia["basic3-0"] = new t.ka({top:c.action([c.wait(20), c.repeat(999, [m(100), b(q, 0.1, 3, i)])])});
  gls2.ia["basic3-1"] = new t.ka({top:c.action([c.wait(20), c.repeat(999, [m(40), b(q, 0.1, 3, i)])])});
  gls2.ia["bukky-4-0"] = new t.ka({top0:c.action([m(30), c.repeat(999, [c.fire(c.direction(-40), q, C), c.repeat(3, [c.fire(c.direction(20, "sequence"), q, C), c.fire(c.direction(20, "sequence"), q, C), c.fire(c.direction(20, "sequence"), q, C), c.fire(c.direction(20, "sequence"), q, C), c.fire(c.direction(-80, "sequence"), q, C), m(5)]), m(70)])]), top1:c.action([m(20), c.fire(c.direction(180, "absolute"), r, K), c.repeat(999, [c.fire(c.direction(15, "sequence"), r, K), c.fire(c.direction(15, "sequence"), 
  r, K), c.fire(c.direction(15, "sequence"), r, K), c.fire(c.direction(15, "sequence"), r, K), c.fire(c.direction(15, "sequence"), r, K), c.fire(c.direction(15, "sequence"), r, K), c.fire(c.direction(15, "sequence"), r, K), c.fire(c.direction(15, "sequence"), r, K), c.fire(c.direction(15, "sequence"), r, K), c.fire(c.direction(-90, "sequence"), r, K), m(5)])])});
  gls2.ia["cannon2-0"] = new t.ka({top0:c.action([c.repeat(999, [m(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", r), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", r), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", r), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", r), m(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", q), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", q), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", q), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", q)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), u, D), c.fire(c.direction(" 90+$loop.index*10", "absolute"), u, D), c.fire(c.direction("180+$loop.index*10", "absolute"), u, D), c.fire(c.direction("270+$loop.index*10", "absolute"), u, D), c.fire(c.direction("  0-$loop.index*10", "absolute"), u, D), c.fire(c.direction(" 90-$loop.index*10", "absolute"), u, D), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), u, D), c.fire(c.direction("270-$loop.index*10", "absolute"), u, D), m(10)])]), top2:c.action([c.repeat(999, [m(43), f(30, 0, 348, q, E)])])});
  gls2.ia["cannon2-3"] = new t.ka({top0:c.action([c.repeat(999, [c.Na("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), H(c.ya("ivs0", "$d")))]), m(10), c.fire(c.direction(39, "sequence"), c.speed(1), H(c.ya("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.Na("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), H(c.ya("ivs1", "$d")))]), m(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), H(c.ya("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), r, E), c.Xa()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), r, function(a) {
    return c.Ga(a, {frame:7, Vb:j})
  }), c.fire(c.direction("$1+5", "relative"), r, function(a) {
    return c.Ga(a, {frame:6, Vb:j})
  }), c.Xa()])});
  gls2.ia["cannon3-0"] = new t.ka({top0:c.action([c.repeat(999, [m(80), b(r, 0.01, 5, d(5, -30, 30, E, c.offsetX(-60))), b(r, 0.01, 5, d(5, -30, 30, E)), b(r, 0.01, 5, d(5, -30, 30, E, c.offsetX(60)))])])});
  gls2.ia["cannon4-0"] = new t.ka({top0:c.action([m(20), c.repeat(999, [c.fire(r, C), c.repeat(8, [m(10), c.Na("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), r, C), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), r, C)])]), m(120)])])});
  gls2.ia["cannon5-0"] = new t.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), s, H(c.ya("b"))), c.repeat(11, [m(5), c.fire(c.direction(10, "sequence"), s, H(c.ya("b")))]), m(60)])]), b:c.action([c.wait(5), c.De(c.speed(0), 0), b(r, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, w)
  }), c.Xa])});
  gls2.ia["yuri-4"] = new t.ka({top:c.action([m(60), c.repeat(7, [a(7, 120, 240, u, E), m(8)])])});
  gls2.ia["kurokawa-1"] = new t.ka({top0:c.action([c.repeat(999, [b(q, -0.01, 4, function(a) {
    return f(4, -45, 45, a, v, c.offsetX(-45), c.va(j))
  }), b(q, -0.01, 4, function(a) {
    return f(4, -45, 45, a, v, c.offsetX(45), c.va(j))
  }), m(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), q, F, c.offsetX(-45), c.va(j)), m(45), c.fire(c.direction(0), q, F, c.offsetX(45), c.va(j)), m(45)])])});
  gls2.ia["kurokawa-4"] = new t.ka({top0:c.action([c.repeat(999, [b(q, -0.01, 4, function(a) {
    return f(4, -45, 45, a, v, c.offsetX(-45), c.va(j))
  }), b(q, -0.01, 4, function(a) {
    return f(4, -45, 45, a, v, c.offsetX(45), c.va(j))
  }), m(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), q, F, c.offsetX(-45), c.va(j)), m(45), c.fire(c.direction(0), q, F, c.offsetX(45), c.va(j)), m(45)])])});
  gls2.ia["komachi-1"] = new t.ka({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), u(1), w, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(-40)), c.repeat(57, [m(8), c.fire(c.direction(-720 / 57, "sequence"), u(1), w, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, 
  [c.fire(c.direction(-210, "absolute"), u(1), w, c.offsetX(40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(40)), c.repeat(57, [m(8), c.fire(c.direction(720 / 57, "sequence"), u(1), w, c.offsetX(40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), q(0), G, c.offsetX(-110), c.va(j)), c.repeat(6, 
  [c.wait(1), c.fire(c.direction(0, "sequence"), q(0), G, c.offsetX(-110), c.va(j))]), m(10), c.fire(c.direction(0), q(0), G, c.offsetX(110), c.va(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), q(0), G, c.offsetX(110), c.va(j))]), m(10)])])});
  gls2.ia["komachi-2"] = new t.ka({top0:c.action([c.repeat(999, [b(q, -0.01, 4, function(a) {
    return c.action([f(4, -45, 45, a, v, c.offsetX(-45), c.va(j)), m(4)])
  }), b(q, -0.01, 4, function(a) {
    return c.action([m(4), f(4, -45, 45, a, v, c.offsetX(45), c.va(j))])
  }), m(90)])]), top1:c.action([c.repeat(999, [m(45), b(r, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), m(1)])
  }), m(180)])])});
  gls2.ia["komachi-3"] = new t.ka({top0:c.action([c.repeat(999, [b(q, -0.01, 4, function(a) {
    return c.action([f(6, -60, 60, a, v, c.offsetX(-45), c.va(j)), m(4)])
  }), b(q, -0.01, 4, function(a) {
    return c.action([m(4), f(6, -60, 60, a, v, c.offsetX(45), c.va(j))])
  }), m(90)])]), top1:c.action([c.repeat(999, [m(45), b(r, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), m(1)])
  }), m(180)])])});
  gls2.ia["komachi-4"] = new t.ka({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), q, L, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), q, L, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), q, L, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), q, L, c.offsetX(45)), m(4)]), m(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), q(5), G, c.offsetX(-110), c.va(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), q(5), G, c.offsetX(-110), c.va(j))]), m(30), c.fire(c.direction(0), q(5), G, c.offsetX(110), c.va(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), q(5), G, c.offsetX(110), c.va(j))]), m(30)])])});
  gls2.ia["nozomi-4"] = new t.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.Na("c", "2+$loop.index"), f("$c", "-4-($c-2)*4", "4+($c-2)*4", M("(560-$c*40)*0.03"), F, c.offsetY(-50))]), m(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), H(c.ya("noop"))), b(q, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, E, c.offsetX(-50)), c.wait(3)])
  }), m(90), c.fire(c.direction(-40), H(c.ya("noop"))), b(q, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, E, c.offsetX(50)), c.wait(3)])
  }), m(90)])]), noop:c.action([c.wait(1), c.Xa])});
  gls2.ia.akane = new t.ka({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [m(60), f(1, 1, 1, u, v, c.offsetX(-16), c.offsetY(6), c.va(j)), f(1, 1, 1, u, v, c.offsetX(16), c.offsetY(6), c.va(j))]), m(120)])])});
  gls2.ia["nao-1"] = new t.ka({top:c.action([c.repeat(999, [m(20), c.fire(c.direction(0), A, F)])])});
  gls2.ia["nao-2"] = new t.ka({top:c.action([c.repeat(999, [m(20), f(2, -5, 5, A, F, c.offsetX(0), c.offsetY(0), c.va(j))])])});
  gls2.ia["nao-3"] = new t.ka({top:c.action([c.repeat(999, [m(20), f(2, -1, 1, A, F, c.offsetX(0), c.offsetY(0), c.va(j))])])});
  gls2.ia.reika = new t.ka({top:c.action([c.repeat(999, [m(20), c.fire(c.direction(0), z, C)])])});
  gls2.ia.miyuki_y = new t.ka({top:c.action([c.wait("40"), c.repeat(999, [m(30), f(3, -45, 45, u, v, c.offsetX(-64), c.offsetY(16), c.va(j)), f(3, -45, 45, u, v, c.offsetX(0), c.offsetY(16), c.va(j)), f(3, -45, 45, u, v, c.offsetX(16), c.offsetY(16), c.va(j)), f(3, -45, 45, u, v, c.offsetX(32), c.offsetY(16), c.va(j)), b(u, 0.001, 5, function(a) {
    return c.action([f(3, "-45", "+45", a, C, c.offsetX(0), c.offsetY(0))])
  })])])});
  gls2.ia.miyuki_t = new t.ka({top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(3, [a(3, -20, 20, q, C, c.offsetX(32), c.offsetY(32)), m(30)]), c.repeat(3, [a(3, -10, 10, q, C, c.offsetX(-32), c.offsetY(-32)), m(30)]), c.repeat(3, [a(3, -5, 5, q, C, c.offsetX(-16), c.offsetY(-16)), m(30)]), m(120)])]), top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [a(5, -30, 30, q, C, c.offsetX(-32), c.offsetY(32)), m(45)]), c.repeat(5, [a(5, -30, 30, q, C, c.offsetX(32), c.offsetY(32)), m(45)]), m(120)])])});
  gls2.ia.alice = new t.ka({top0:c.action([c.repeat(999, [a(8, 0, 180, u, C), a(8, 0, -180, u, C), m(60), a(9, 0, 180, u, F), a(9, 0, -180, u, F), m(60)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(5, "sequence"), u, G, c.offsetX(0), c.va(j)), m(10)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(10, "sequence"), r, K, c.offsetX(0), c.va(j)), m(10)])])});
  gls2.ia.aliceLeaf = new t.ka({top:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(10, "sequence"), q(5), D, c.offsetX(0), c.va(j)), m(10)])])});
  gls2.ia["honoka-1"] = new t.ka({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, r, D, c.offsetX(0), c.offsetY(30)), m(30), f(5, -40, 40, u, D, c.offsetX(0), c.offsetY(30)), m(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, r(0.6), w), f(3, -3, 3, r(1), w), f(4, -4, 4, r(1.4), w), f(5, -5, 5, r(1.8), w), m(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, u, G, c.offsetX(-110), c.offsetY(-70)), m(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, u, G, c.offsetX(110), 
  c.offsetY(-70)), m(30)])])});
  gls2.ia["nagisa-1-1"] = new t.ka({top0:c.action([m(90), c.repeat(3, [c.Na("way", "5 + $loop.index*6"), b(q, 0.01, "3 + $loop.index*2", function(a) {
    return c.action([f("$way", -110, 110, a, w, c.offsetX(-190), c.offsetY(-20)), f("$way", -110, 110, a, w, c.offsetX(190), c.offsetY(-20)), c.wait(10)])
  }), m(60)]), m(60)])});
  gls2.ia["nagisa-1-2"] = new t.ka({top0:c.action([c.repeat(12, [f(15, -90, 90, u, w), m(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [f(5, -65, -55, r, G, c.offsetX(-190), c.offsetY(-20)), f(5, -35, -25, r, G, c.offsetX(-190), c.offsetY(-20)), f(5, -5, 5, r, G, c.offsetX(-190), c.offsetY(-20)), f(5, 25, 35, r, G, c.offsetX(-190), c.offsetY(-20)), f(5, 55, 65, r, G, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), m(60), c.repeat(3, [f(5, -65, -55, r, G, c.offsetX(190), c.offsetY(-20)), f(5, -35, 
  -25, r, G, c.offsetX(190), c.offsetY(-20)), f(5, -5, 5, r, G, c.offsetX(190), c.offsetY(-20)), f(5, 25, 35, r, G, c.offsetX(190), c.offsetY(-20)), f(5, 55, 65, r, G, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), m(60)])])});
  gls2.ia["nagisa-1-3"] = new t.ka({top0:c.action([m(60), c.repeat(3, [c.fire(c.direction(-60), r, v, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [m(15), c.fire(c.direction(6, "sequence"), r, v, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([m(80), c.repeat(3, [c.fire(c.direction(60), r, v, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [m(15), c.fire(c.direction(-6, "sequence"), r, v, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [f(5, -60, -40, r, D, c.offsetX(-190), 
  c.offsetY(-20)), f(5, -20, -10, r, D, c.offsetX(-190), c.offsetY(-20)), f(5, 10, 20, r, D, c.offsetX(-190), c.offsetY(-20)), f(5, 40, 60, r, D, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), m(60), c.repeat(3, [f(5, -60, -40, r, D, c.offsetX(190), c.offsetY(-20)), f(5, -20, -10, r, D, c.offsetX(190), c.offsetY(-20)), f(5, 10, 20, r, D, c.offsetX(190), c.offsetY(-20)), f(5, 40, 60, r, D, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), m(60)])])});
  gls2.ia["nagisa-2-1"] = new t.ka({top0:c.action([m(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", u, E, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", u, E, c.offsetX(190), c.offsetY(-20)), m(10)])]), top1:c.action([m(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, F), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, F), m(12)])])});
  gls2.ia["nagisa-2-2"] = new t.ka({top0:c.action([m(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", q, F), m(12)])]), top1:c.action([m(120), c.repeat(6, [a(9, 150, 130, u(0.8), w), a(9, 172, 188, u(0.8), w), a(9, 210, 230, u(0.8), w), m(30), a(9, 170, 150, u(0.8), w), a(9, 190, 210, u(0.8), w), m(30)])])});
  gls2.ia["nagisa-2-3"] = new t.ka({top:c.action([m(120), c.repeat(12, [a(23, 0, 360, u, D, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, u, D), a(23, 0, 360, u, D, c.offsetX(190), c.offsetY(-20)), m(30)])])});
  gls2.ia["nagisa-3-1"] = new t.ka({top0:c.action([m(50), c.repeat(999, [b(q, 0.001, 5, function(a) {
    return c.action([f(41, "-180", "+180", a, C, c.offsetX(-190), c.offsetY(-20)), f(41, "-180", "+180", a, C, c.offsetX(190), c.offsetY(-20))])
  }), m(50)])]), top1:c.action([c.repeat(999, [f(2, -2, 0, A, w), m(10), f(2, 0, 2, A, w), m(150)])])});
  gls2.ia["mai-1"] = new t.ka({top0:c.action([m(50), c.repeat(50, [c.Na("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", s, H(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, E), c.Xa]))), c.Na("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", s, H(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, E), c.Xa]))), m(8)])]), top1:c.action([m(50), c.repeat(12, [a(5, -50, 50, s, H(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, 
  F), c.Xa]))), a(5, -230, -130, s, H(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, F), c.Xa]))), m(16), a(6, -50, 50, s, H(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, F), c.Xa]))), a(6, -230, -130, s, H(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, F), c.Xa]))), m(16)])])});
  gls2.ia["mai-2"] = new t.ka({top:c.action([m(50), c.repeat(15, [c.fire(c.direction(-10), C(c.ya("fireChild", "$loop.index*10"))), m(8)])]), fireChild:c.action([m("40+$1"), b(r, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, v)
  }), c.Xa])});
  gls2.ia["saki-1-1"] = new t.ka({top:c.action([m(100), c.repeat(3, [c.ya("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Na("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", q, E), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", q, E), m(12)]), c.repeat("$2", [f(9, -20, 20, A, L)])])});
  gls2.ia["saki-1-2"] = new t.ka({top:c.action([m(100), c.repeat(5, [c.Na("way", "5+$loop.index*2"), c.repeat(6, [c.Na("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, q("$s"), F, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), m(90)])])});
  gls2.ia["saki-1-3"] = new t.ka({top:c.action([c.Na("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), F(c.ya("seed"))), m(8)]), m(60)]), seed:c.action([c.wait(10), c.De(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, r, L), c.Xa])});
  gls2.ia["saki-2-1"] = new t.ka({top0:c.action([m(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", r, E, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", r, E, c.offsetX(40)), m(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", r, E, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", r, E, c.offsetX(40)), m(60)])]), top1:c.action([m(100), c.repeat(4, [c.repeat(7, [c.Na("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  z, L), c.repeat(4, [c.Na("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", z("$w*-1.0"), L)])]), m(120)])])});
  gls2.ia["saki-2-2"] = new t.ka({top:c.action([m(60), c.Na("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), C(c.ya("seed"))), m(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), C(c.ya("seed"))), m(8)]), m(60)]), seed:c.action([c.wait(10), c.De(c.speed(0), "10 + $rand*15"), c.wait(65), b(q, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, v)])
  }), b(q, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, v)])
  }), b(q, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, v)])
  }), b(q, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, v)])
  }), b(q, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, v)])
  }), b(q, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, v)])
  }), b(q, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, v)])
  }), b(q, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, v)])
  }), b(q, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, v)])
  }), m(2), c.Xa])});
  gls2.ia["saki-2-3"] = new t.ka({top:c.action([m(60), c.Na("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), F(c.ya("seed"))), m(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), F(c.ya("seed"))), m(8)]), m(60)]), seed:c.action([c.wait(10), c.De(c.speed(0), "10 + $rand*20"), c.wait(65), b(q, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, L)])
  }), m(2), c.Xa])});
  gls2.ia["saki-3-1"] = new t.ka({top:c.action([c.fire(c.direction(180, "absolute"), M, C(c.ya("seed"))), m(60), c.fire(c.direction(180, "absolute"), M, C(c.ya("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), M, C(c.ya("seed")), c.offsetX(80)), m(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), q, r, E), c.repeat(999, [c.fire(c.direction(90, "sequence"), r, E), c.fire(c.direction(90, "sequence"), r, E), c.fire(c.direction(90, "sequence"), r, E), m(10), c.fire(c.direction(100, 
  "sequence"), r, E)])])});
  gls2.ia["saki-3-2"] = new t.ka({top:c.action([c.fire(c.direction(180, "absolute"), M, F(c.ya("seed"))), m(60), c.fire(c.direction(180, "absolute"), M, F(c.ya("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), M, F(c.ya("seed")), c.offsetX(80)), m(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), q, r, w), c.repeat(999, [c.fire(c.direction(90, "sequence"), r, w), c.fire(c.direction(90, "sequence"), r, w), c.fire(c.direction(90, "sequence"), r, w), m(10), c.fire(c.direction(80, 
  "sequence"), r, w)])])});
  gls2.ia["rikka-1"] = new t.ka({top:c.action([c.repeat(5, [c.Na("s", "$loop.index*1.5"), m(30), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, q("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, q("$s"), c.offsetX(90), c.offsetY(-20)), m(3), f(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, v, q("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, v, q("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, v, q("$s"), c.offsetX(90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, v, q("$s"), c.offsetX(90), c.offsetY(-20)), m(3), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, q("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, q("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.ia["rikka-2"] = new t.ka({top0:c.action([c.repeat(10, [c.fire(C(c.ya("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(C(c.ya("snow")), c.offsetX(90), c.offsetY(-20)), m(8)]), m(10)]), top1:c.action([c.repeat(35, [c.Na("d", "$loop.index*-(20+$ex*10)"), c.Na("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), H(c.ya("ivs", "$d", "$s")))]), m(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), H(c.ya("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.Na("d", "$loop.index*+(20+$ex*10)"), c.Na("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), H(c.ya("ivs", "$d", "$s")))]), m(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), H(c.ya("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.Na("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), H(c.ya("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), H(c.ya("snowArm")))])]), c.Xa]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), A, G), c.Xa]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), q("$2"), Q), c.fire(c.direction("$1+1", "relative"), q("$2"), Q), c.Xa()])});
  gls2.ia["rikka-3"] = new t.ka({top0:c.action([m(40), c.fire(c.direction(-10), H(c.ya("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), M("$loop.index*0.5"), v, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), v, c.offsetX(-90), c.offsetY(-20))]), m(5)]), m(40)]), top1:c.action([m(40), c.fire(c.direction(-10), H(c.ya("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), M("$loop.index*0.5"), v, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), v, c.offsetX(90), c.offsetY(-20))]), m(5)]), m(40)]), dummy:c.action([c.wait(1), c.Xa])});
  gls2.ia["mana-1-1"] = new t.ka({top0:c.action([c.ya("winder", -1)]), top1:c.action([c.ya("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), A, O, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [m(15), c.Na("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), A, O, c.offsetX("-145*$1"), c.offsetY(-5))])]), c.repeat(20, [m(15), c.repeat(8, [c.fire(c.direction("(-190+50*3+$loop.index*30)*$1"), A, O, c.offsetX("-145*$1"), 
  c.offsetY(-5))])])]), top2:c.action([c.wait(60), m(400), c.repeat(5, [c.Na("i", "$loop.index"), b(q(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*-3"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-2"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-1"), a, L, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)* 0"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+1"), a, L, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+2"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+3"), a, 
    v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-3"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-2"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-1"), a, L, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)* 0"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+1"), a, L, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+2"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+3"), 
    a, v, c.offsetX(145), c.offsetY(-50)), m(5)])
  }), m(90)])])});
  gls2.ia["mana-1-2"] = new t.ka({top:c.action([])});
  gls2.ia["mana-1-3"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-1"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-2"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-3"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-3-1"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-3-2"] = gls2.ia["mana-1-1"];
  gls2.ia["setsuna-1"] = new t.ka({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, r, D, c.offsetX(0), c.offsetY(30)), m(30), f(5, -40, 40, u, D, c.offsetX(0), c.offsetY(30)), m(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, r(0.6), w), f(3, -3, 3, r(1), w), f(4, -4, 4, r(1.4), w), f(5, -5, 5, r(1.8), w), m(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, u, G, c.offsetX(-110), c.offsetY(-70)), m(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, u, G, c.offsetX(110), 
  c.offsetY(-70)), m(30)])])});
  gls2.ia["love-1-1"] = new t.ka({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, r, D, c.offsetX(0), c.offsetY(30)), m(30), f(5, -40, 40, u, D, c.offsetX(0), c.offsetY(30)), m(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, r(0.6), w), f(3, -3, 3, r(1), w), f(4, -4, 4, r(1.4), w), f(5, -5, 5, r(1.8), w), m(110)])])});
  gls2.ia.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      P.push(gls2.Ma())
    }
    a = gls2.ia.Ee = tm.xb.Rc.Od;
    a.ig = function(a) {
      return!(a instanceof gls2.Ma) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.rh = function(a) {
      var b = P.shift(0);
      if(b) {
        return b.sa = gls2.ja.ni, N.push(b), b.setFrameIndex(a.frame === h ? 1 : a.frame), b.blendMode = "source-over", a.Vb ? (b.scaleX = 1, b.scaleY = 1, b.Pc = l) : (a.Zd ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Ob ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.Pc = j), b.visible = a.visible === l ? l : j, b.Vb = !!a.Vb, b.Zd = !!a.Zd, b.Ob = !!a.Ob, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.vh = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.fd = gls2.ja.pi;
    t.Pa.Nb.$rank = 0;
    t.Pa.Nb.$hyperOff = 1
  };
  gls2.ia.erase = function(a, b, c) {
    for(var d = [].concat(N), f = 0, i = d.length;f < i;f++) {
      if(a) {
        var m = gls2.ih(!!b);
        m.setPosition(d[f].x, d[f].y);
        c && (m.ad = j)
      }
      d[f].Fa()
    }
  };
  gls2.ia.Md = function() {
    for(var a = [].concat(N), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Ma = tm.createClass({superClass:tm.display.Sprite, sa:0, Vb:l, Zd:l, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      P.push(this);
      var a = N.indexOf(this);
      -1 !== a && N.splice(a, 1)
    })
  }, update:function() {
    this.Vb && (this.rotation += 15)
  }, Fa:function() {
    var a = gls2.Ma.Qd().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Ma.Qd = function() {
    gls2.Ma.Qd.Vf === k && (gls2.Ma.Qd.Vf = gls2.Wa(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Ma.Qd.Vf.clone()
  };
  gls2.Ma.Qd.Vf = k;
  var P = [], N = gls2.Ma.lb = []
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
  return Math.sqrt(gls2.ma.magnitudeSq.apply(k, arguments))
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

