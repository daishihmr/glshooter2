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
var t = {zi:this};
(function() {
  function b(a, b) {
    for(var f = 0, g = a.length;f < g;f++) {
      if(a[f].label == b) {
        return a[f]
      }
    }
  }
  t.la = function(a) {
    this.type = "none";
    this.root = this;
    this.bb = [];
    this.ue = [];
    this.De = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof t.Cb ? this.bb.push(a[b]) : a[b] instanceof t.La ? this.ue.push(a[b]) : a[b] instanceof t.fd && this.De.push(a[b]))
      }
      a = 0;
      for(b = this.bb.length;a < b;a++) {
        this.bb[a].Mb(this)
      }
      a = 0;
      for(b = this.ue.length;a < b;a++) {
        this.ue[a].Mb(this)
      }
      a = 0;
      for(b = this.De.length;a < b;a++) {
        this.De[a].Mb(this)
      }
    }
  };
  t.la.prototype.wh = function(a) {
    return b(this.bb, a)
  };
  t.la.prototype.mk = function() {
    for(var a = [], b = 0, f = this.bb.length;b < f;b++) {
      var g = this.bb[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  t.la.prototype.bk = function(a) {
    var b;
    if(b = this.wh(a)) {
      return b
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  t.la.prototype.ck = function(a) {
    return b(this.ue, a)
  };
  t.la.prototype.dk = function(a) {
    var b;
    if(b = this.ck(a)) {
      return b
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  t.la.prototype.ek = function(a) {
    return b(this.De, a)
  };
  t.la.prototype.fk = function(a) {
    var b;
    if(b = this.ek(a)) {
      return b
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  t.La = function() {
    this.root = this.label = k;
    this.direction = new t.lc(0);
    this.speed = new t.pc(1);
    this.bb = [];
    this.Ra = {};
    this.ya = {}
  };
  t.La.prototype.clone = function(a) {
    var b = new t.La;
    b.label = this.label;
    b.root = this.root;
    b.bb = this.bb;
    b.direction = new t.lc(a.Wa(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new t.pc(a.Wa(this.speed.value));
    b.speed.type = this.speed.type;
    b.Ra = this.Ra;
    b.ya = a.ya;
    return b
  };
  t.La.prototype.Mb = function(a) {
    this.root = a;
    for(var b = 0, f = this.bb.length;b < f;b++) {
      this.bb[b].Mb(a)
    }
  };
  t.ce = function(a) {
    this.root = k;
    this.label = a;
    this.Ya = []
  };
  t.ce.prototype.clone = function(a) {
    var b = a.ya;
    a.ya = a.If(this.Ya);
    var f = this.root.dk(this.label).clone(a);
    a.ya = b;
    return f
  };
  t.ce.prototype.Mb = function(a) {
    this.root = a
  };
  t.ab = function() {
    this.ub = ""
  };
  t.ab.prototype.Mb = function(a) {
    this.root = a
  };
  t.Cb = function() {
    this.ub = "action";
    this.root = this.label = k;
    this.Tb = [];
    this.Ya = []
  };
  t.Cb.prototype = new t.ab;
  t.Cb.prototype.Mb = function(a) {
    this.root = a;
    for(var b = 0, f = this.Tb.length;b < f;b++) {
      this.Tb[b].Mb(a)
    }
  };
  t.Cb.prototype.clone = function() {
    var a = new t.Cb;
    a.label = this.label;
    a.root = this.root;
    a.Tb = this.Tb;
    return a
  };
  t.dd = function(a) {
    this.ub = "actionRef";
    this.label = a;
    this.root = k;
    this.Ya = []
  };
  t.dd.prototype = new t.ab;
  t.dd.prototype.clone = function() {
    var a = new t.Cb;
    a.root = this.root;
    a.Tb.push(this);
    return a
  };
  t.fd = function() {
    this.ub = "fire";
    this.Da = this.speed = this.direction = this.root = this.label = k;
    this.Ra = new t.ge
  };
  t.fd.prototype = new t.ab;
  t.fd.prototype.Mb = function(a) {
    this.root = a;
    this.Da && this.Da.Mb(a)
  };
  t.ef = function(a) {
    this.ub = "fireRef";
    this.label = a;
    this.Ya = []
  };
  t.ef.prototype = new t.ab;
  t.ee = function() {
    this.ub = "changeDirection";
    this.direction = new t.lc;
    this.nb = 0
  };
  t.ee.prototype = new t.ab;
  t.fe = function() {
    this.ub = "changeSpeed";
    this.speed = new t.pc;
    this.nb = 0
  };
  t.fe.prototype = new t.ab;
  t.be = function() {
    this.ub = "accel";
    this.gc = new t.jf;
    this.kc = new t.Gf;
    this.nb = 0
  };
  t.be.prototype = new t.ab;
  t.me = function(a) {
    this.ub = "wait";
    this.value = a || 0
  };
  t.me.prototype = new t.ab;
  t.Ff = function() {
    this.ub = "vanish"
  };
  t.Ff.prototype = new t.ab;
  t.ke = function() {
    this.ub = "repeat";
    this.$h = 0;
    this.action = k;
    this.Ya = []
  };
  t.ke.prototype = new t.ab;
  t.ke.prototype.Mb = function(a) {
    this.root = a;
    this.action && this.action.Mb(a)
  };
  t.$e = function(a, b) {
    this.ub = "bind";
    this.Xk = a;
    this.ak = b
  };
  t.$e.prototype = new t.ab;
  t.wf = function(a, b) {
    this.ub = "notify";
    this.Yj = a;
    this.Ya = b || k
  };
  t.wf.prototype = new t.ab;
  t.vi = new t.ab;
  t.lc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  t.pc = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  t.jf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  t.Gf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  t.ge = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.ua = j;
    a.ua !== i && (this.ua = !!a.ua)
  };
  t.Wg = function(a) {
    this.value = a || 0
  };
  t.Xg = function(a) {
    this.value = a || 0
  };
  t.Hg = function(a) {
    this.value = !!a
  }
})();
t.Na = function(b) {
  this.gh = b;
  this.ne = [];
  this.zc = -1;
  this.jb = k;
  this.ya = {}
};
t.Na.prototype.next = function() {
  this.zc += 1;
  if(this.jb !== k) {
    var b = this.jb.Tb[this.zc];
    if(b !== i) {
      if(b instanceof t.Cb) {
        return this.Dd(), this.jb = b, this.ya = this.Hf(), this.next()
      }
      if(b instanceof t.dd) {
        return this.Dd(), this.jb = this.gh.bk(b.label), this.ya = this.If(b.Ya), this.next()
      }
      if(b instanceof t.ke) {
        return this.ya.vd = 0, this.ya.Nh = this.Wa(b.$h) | 0, this.Dd(), this.jb = b.action.clone(), this.ya = this.Hf(), this.next()
      }
      if(b instanceof t.fd) {
        var a = new t.fd;
        a.Da = b.Da.clone(this);
        b.direction !== k && (a.direction = new t.lc(this.Wa(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== k && (a.speed = new t.pc(this.Wa(b.speed.value)), a.speed.type = b.speed.type);
        a.Ra = new t.ge;
        a.Ra.offsetX = this.Wa(b.Ra.offsetX);
        a.Ra.offsetY = this.Wa(b.Ra.offsetY);
        a.Ra.ua = b.Ra.ua;
        return a
      }
      return b instanceof t.ef ? (this.Dd(), this.jb = new t.Cb, this.jb.Tb = [this.gh.fk(b.label)], this.ya = this.If(b.Ya), this.next()) : b instanceof t.ee ? (a = new t.ee, a.direction.type = b.direction.type, a.direction.value = this.Wa(b.direction.value), a.nb = this.Wa(b.nb), a) : b instanceof t.fe ? (a = new t.fe, a.speed.type = b.speed.type, a.speed.value = this.Wa(b.speed.value), a.nb = this.Wa(b.nb), a) : b instanceof t.be ? (a = new t.be, a.gc.type = b.gc.type, a.gc.value = this.Wa(b.gc.value), 
      a.kc.type = b.kc.type, a.kc.value = this.Wa(b.kc.value), a.nb = this.Wa(b.nb), a) : b instanceof t.me ? new t.me(this.Wa(b.value)) : b instanceof t.Ff ? b : b instanceof t.$e ? (this.ya["$" + b.Xk] = this.Wa(b.ak), t.vi) : b instanceof t.wf ? b : k
    }
    this.Lj();
    if(this.jb === k) {
      return k
    }
    if((b = this.jb.Tb[this.zc]) && "repeat" == b.ub) {
      this.ya.vd++, this.ya.vd < this.ya.Nh && (this.Dd(), this.jb = b.action.clone(), this.ya = this.Hf())
    }
    return this.next()
  }
  return k
};
t.Na.prototype.Dd = function() {
  this.ne.push({action:this.jb, cursor:this.zc, scope:this.ya});
  this.zc = -1
};
t.Na.prototype.Lj = function() {
  var b = this.ne.pop();
  b ? (this.zc = b.cursor, this.jb = b.action, this.ya = b.scope) : (this.zc = -1, this.jb = k, this.ya = {})
};
t.Na.prototype.Wa = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.ya[b]) || (a = t.Na.Jb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in t.Na.Jb) {
    t.Na.Jb.hasOwnProperty(d) && (a[d] = t.Na.Jb[d])
  }
  for(d in this.ya) {
    this.ya.hasOwnProperty(d) && (a[d] = this.ya[d])
  }
  a.$rand = Math.random();
  (d = this.ne[this.ne.length - 1]) && (a.$loop = {index:d.scope.vd, count:d.scope.vd + 1, first:0 === d.scope.vd, last:d.scope.vd + 1 >= d.scope.Nh});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
t.Na.prototype.If = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.Wa(b[d])
    }
  }else {
    for(d in this.ya) {
      this.ya.hasOwnProperty(d) && (a[d] = this.ya[d])
    }
  }
  return a
};
t.Na.prototype.Hf = function() {
  var b = {}, a;
  for(a in this.ya) {
    this.ya.hasOwnProperty(a) && (b[a] = this.ya[a])
  }
  return b
};
t.la.prototype.Xf = function(b) {
  var a = new t.Na(this);
  if(b = this.wh(b)) {
    a.jb = b
  }
  return a
};
t.La.prototype.Xf = function() {
  var b = new t.Na(this.root), a = new t.Cb;
  a.root = this.root;
  a.Tb = this.bb;
  b.jb = a;
  b.ya = this.ya;
  return b
};
t.Na.Jb = {};
t.Fa = function(b) {
  b = b || "";
  for(var a in t.Fa) {
    t.Fa.hasOwnProperty(a) && (t.zi[b + a] = t.Fa[a])
  }
};
t.Fa.action = function(b) {
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
  var f = new t.Cb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof t.ab)
    }) && h(Error("argument type error.")), f.Tb = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof t.ab ? f.Tb[a] = arguments[a] : h(Error("argument type error."))
    }
  }
  return f
};
t.Fa.wa = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new t.dd(b);
  if(a instanceof Array) {
    f.Ya = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ya.push(arguments[d])
    }
  }
  return f
};
t.Fa.Da = function(b, a, d, f) {
  for(var g = 0, p = arguments.length;g < p;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  p = new t.La;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof t.lc ? p.direction = arguments[g] : arguments[g] instanceof t.pc ? p.speed = arguments[g] : arguments[g] instanceof t.Cb ? p.bb.push(arguments[g]) : arguments[g] instanceof t.dd ? p.bb.push(arguments[g]) : arguments[g] instanceof Array ? p.bb.push(t.Fa.action(arguments[g])) : arguments[g] instanceof Object ? p.Ra = arguments[g] : "string" === typeof arguments[g] && (p.label = arguments[g])
  }
  return p
};
t.Fa.el = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new t.ce(b);
  if(a instanceof Array) {
    f.Ya = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ya.push(arguments[d])
    }
  }
  return f
};
t.Fa.fire = function(b, a, d, f) {
  for(var g = 0, p = arguments.length;g < p;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  p = new t.fd;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof t.lc ? p.direction = arguments[g] : arguments[g] instanceof t.pc ? p.speed = arguments[g] : arguments[g] instanceof t.La ? p.Da = arguments[g] : arguments[g] instanceof t.ce ? p.Da = arguments[g] : arguments[g] instanceof t.ge ? p.Ra = arguments[g] : arguments[g] instanceof t.Wg ? p.Ra.offsetX = arguments[g].value : arguments[g] instanceof t.Xg ? p.Ra.offsetY = arguments[g].value : arguments[g] instanceof t.Hg && (p.Ra.ua = arguments[g].value)
  }
  p.Da === i && h(Error("bullet (or bulletRef) is required."));
  return p
};
t.Fa.jl = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new t.ef(b);
  if(a instanceof Array) {
    f.Ya = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ya.push(arguments[d])
    }
  }
  return f
};
t.Fa.fl = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("direction is required."));
  a === i && h(Error("term is required."));
  d = new t.ee;
  d.direction = b instanceof t.lc ? b : new t.lc(b);
  d.nb = a;
  return d
};
t.Fa.ve = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("speed is required."));
  a === i && h(Error("term is required."));
  d = new t.fe;
  d.speed = b instanceof t.pc ? b : new t.pc(b);
  d.nb = a;
  return d
};
t.Fa.dl = function(b, a, d) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new t.be;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof t.jf ? g.gc = b : arguments[f] instanceof t.Gf ? g.kc = a : g.nb = arguments[f]
  }
  g.gc === i && g.kc === i && h(Error("horizontal or vertical is required."));
  g.nb === i && h(Error("term is required."));
  return g
};
t.Fa.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && h(Error("value is required."));
  return new t.me(b)
};
t.Fa.Va = function() {
  return new t.Ff
};
t.Fa.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("times is required."));
  a === i && h(Error("action is required."));
  f = new t.ke;
  f.$h = b;
  if(a instanceof t.Cb || a instanceof t.dd) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = t.Fa.action(a)
    }else {
      for(var g = [], d = 1;d < arguments.length;d++) {
        g.push(arguments[d])
      }
      f.action = t.Fa.action(g)
    }
  }
  return f
};
t.Fa.Ma = function(b, a) {
  return new t.$e(b, a)
};
t.Fa.pl = function(b, a) {
  return new t.wf(b, a)
};
t.Fa.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new t.lc(b);
  a !== i && (d.type = a);
  return d
};
t.Fa.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new t.pc(b);
  a && (d.type = a);
  return d
};
t.Fa.gc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new t.jf(b);
  a && (d.type = a);
  return d
};
t.Fa.kc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new t.Gf(b);
  a && (d.type = a);
  return d
};
t.Fa.il = function(b) {
  return new t.ge(b)
};
t.Fa.offsetX = function(b) {
  return new t.Wg(b)
};
t.Fa.offsetY = function(b) {
  return new t.Xg(b)
};
t.Fa.ua = function(b) {
  return new t.Hg(b)
};
tm.tb = tm.tb || {};
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
  tm.tb.Nc = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.dh = a
  }, ye:function(a, b) {
    var d = this.dh.mk();
    if(b === i && 0 < d.length) {
      for(var f = [], A = 0, q = d.length;A < q;A++) {
        f[f.length] = this.eh(a, d[A])
      }
      for(var r = function() {
        if(!r.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          r.Sf == f.length && (r.Id = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, A = f.length;A--;) {
        f[A].Oe = r
      }
      r.Sf = 0;
      r.mh = function() {
        this.Sf++
      };
      r.Sf = 0;
      r.Id = l;
      r.ag = j;
      r.stop = l;
      return r
    }
    return this.eh(a, b)
  }, eh:function(a, b) {
    function d() {
      if(!d.stop) {
        d.pa += 1;
        this.pa = d.pa;
        var a = d.we, b = d.Kj;
        if(b) {
          if(d.pa < d.Qf ? d.direction += d.qd : d.pa === d.Qf && (d.direction = d.Dc), d.pa < d.Rf ? d.speed += d.$d : d.pa === d.Rf && (d.speed = d.zd), d.pa < d.Lf ? (d.ad += d.qe, d.cd += d.re) : d.pa === d.Lf && (d.ad = d.oe, d.cd = d.pe), this.x += Math.cos(d.direction) * d.speed * a.bd, this.y += Math.sin(d.direction) * d.speed * a.bd, this.x += d.ad * a.bd, this.y += d.cd * a.bd, a.cg(this)) {
            if(a.Lc || this.Lc) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.pa < d.bi || d.Id)) {
              for(var f;f = d.ci.next();) {
                switch(f.ub) {
                  case "fire":
                    b.Hj.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.bi = "number" === typeof f.value ? d.pa + f.value : 0 !== (a = ~~f.value) ? d.pa + a : d.pa + eval(f.value);
                    return;
                  case "changeDirection":
                    b.Cj.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.Dj.call(this, f, d);
                    break;
                  case "accel":
                    b.Aj.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.Ij.call(this, f)
                }
              }
              d.Id = j;
              d.Oe ? d.Oe.mh() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.Id = j, d.Oe ? d.Oe.mh() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.tb.Nc.Jd, f;
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
    "string" === typeof b ? d.ci = this.dh.Xf(b) : b instanceof t.La ? d.ci = b.Xf() : (window.console.error(a, b), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Kj = this;
    d.we = a;
    d.bi = -1;
    d.Id = l;
    d.direction = 0;
    d.Kh = 0;
    d.speed = 0;
    d.Mh = 0;
    d.ad = 0;
    d.cd = 0;
    d.qd = 0;
    d.Dc = 0;
    d.Qf = -1;
    d.$d = 0;
    d.zd = 0;
    d.Rf = -1;
    d.qe = 0;
    d.oe = 0;
    d.re = 0;
    d.pe = 0;
    d.Lf = -1;
    d.pa = -1;
    d.stop = l;
    d.ag = j;
    return d
  }, Gj:function(a) {
    function b() {
      b.stop || (this.x += b.qh, this.y += b.rh, b.we.cg(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.tb.Nc.Jd, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b.we = a;
    b.direction = 0;
    b.speed = 0;
    b.qh = 0;
    b.rh = 0;
    b.stop = l;
    b.ag = j;
    return b
  }, Hj:function(b, d, f, z) {
    if(this.Ik === i || this.yb) {
      var A = {label:b.Da.label}, q;
      for(q in b.Da.Ra) {
        A[q] = b.Da.Ra[q]
      }
      if(A = d.lh(A)) {
        z = (q = 0 === b.Da.bb.length) ? z.Gj(d) : z.ye(d, b.Da);
        var r = this, u = {x:this.x + b.Ra.offsetX, y:this.y + b.Ra.offsetY};
        f.Kh = z.direction = function(q) {
          var m = eval(q.value) * Math.DEG_TO_RAD;
          switch(q.type) {
            case "aim":
              return d.target ? b.Ra.ua ? a(u, d.target) + m : a(r, d.target) + m : m - Math.PI / 2;
            case "absolute":
              return m - Math.PI / 2;
            case "relative":
              return f.direction + m;
            default:
              return f.Kh + m
          }
        }(b.direction || b.Da.direction);
        f.Mh = z.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.Mh + b;
            default:
              return b
          }
        }(b.speed || b.Da.speed);
        A.x = u.x;
        A.y = u.y;
        q && (z.qh = Math.cos(z.direction) * z.speed * d.bd, z.rh = Math.sin(z.direction) * z.speed * d.bd);
        A.Lc = !!A.Lc;
        if(d.Lc || A.Lc) {
          A.rotation = (z.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, A.speed = z.speed
        }
        A.addEventListener("enterframe", z);
        d.ih ? d.ih.addChild(A) : this.parent && this.parent.addChild(A)
      }
    }
  }, Cj:function(d, f, s) {
    var z = eval(d.direction.value) * Math.DEG_TO_RAD, A = eval(d.nb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        s.Dc = a(this, d) + z;
        s.qd = b(s.Dc - s.direction) / A;
        break;
      case "absolute":
        s.Dc = z - Math.PI / 2;
        s.qd = b(s.Dc - s.direction) / A;
        break;
      case "relative":
        s.Dc = s.direction + z;
        s.qd = b(s.Dc - s.direction) / A;
        break;
      case "sequence":
        s.qd = z, s.Dc = s.direction + s.qd * (A - 1)
    }
    s.Qf = s.pa + A
  }, Dj:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.nb);
    switch(a.speed.type) {
      case "absolute":
        b.zd = d;
        b.$d = (b.zd - b.speed) / f;
        break;
      case "relative":
        b.zd = d + b.speed;
        b.$d = (b.zd - b.speed) / f;
        break;
      case "sequence":
        b.$d = d, b.zd = b.speed + b.$d * f
    }
    b.Rf = b.pa + f
  }, Aj:function(a, b) {
    var d = eval(a.nb);
    b.Lf = b.pa + d;
    if(a.gc) {
      var f = eval(a.gc.value);
      switch(a.gc.type) {
        case "absolute":
        ;
        case "sequence":
          b.qe = (f - b.ad) / d;
          b.oe = f;
          break;
        case "relative":
          b.qe = f, b.oe = (f - b.ad) * d
      }
    }else {
      b.qe = 0, b.oe = b.ad
    }
    if(a.kc) {
      switch(f = eval(a.kc.value), a.kc.type) {
        case "absolute":
        ;
        case "sequence":
          b.re = (f - b.cd) / d;
          b.pe = f;
          break;
        case "relative":
          b.re = f, b.pe = (f - b.cd) * d
      }
    }else {
      b.re = 0, b.pe = b.cd
    }
  }, Ij:function(a) {
    var b = tm.event.Event(a.Yj);
    if(a.Ya) {
      for(var d in a.Ya) {
        b[d] = a.Ya[d]
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
  tm.tb.Uj = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = k;
  tm.tb.ph = function(a) {
    if(f === k) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.tb.gl = function() {
    return j
  };
  tm.tb.Nc.Jd = {lh:tm.tb.Uj, cg:tm.tb.ph, sl:0, Lc:l, bd:2, target:k};
  t.la.prototype.ye = function(a) {
    return tm.tb.Nc(this).ye(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(n());
tm.main(function() {
  gls2.Bi("#canvas2d");
  gls2.core.run()
});
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.Sa.Bd && gls2.Sa.Bd.Td(0)
};
gls2.Bi = tm.createClass({superClass:tm.display.CanvasApp, Fc:0, Dh:0, Fh:0, Eh:0, Ah:0, Ch:k, Gd:3, $c:3, sh:1, ca:k, init:function(b) {
  gls2.core !== k && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = gls2.ja.yi;
  this.background = "rgba(0,0,0,0)";
  this.Eg = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", 
  explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", hino:"assets/tex_hino.png", hoshizora_y:"assets/tex_hoshizora_y.png", hoshizora_t:"assets/tex_hoshizora_t.png", yotsuba:"assets/tex_yotsuba.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", higashi:"assets/tex_higashi.png", momozono:"assets/tex_momozono.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", 
  bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", 
  "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, 
  nextScene:function() {
    this.Jj();
    return gls2.TitleScene()
  }.bind(this)}))
}, update:function() {
  for(var b = [].concat(this.Eg), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.Eg.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Jj:function() {
  gls2.Aa.setup(12345);
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
  gls2.ha.setup();
  gls2.qa.setup();
  this.ca = gls2.Sa()
}, hl:function() {
  this.stop()
}, Eg:k, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Ec = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.ja = {aj:l, yi:60, Wi:0, Ng:[1E9, 1E10], Yi:3E3, Qg:3, Pg:[3, 2, 1], fi:[6, 4, 2], Zg:1, Vi:0.1, Rg:1, Xi:0.25, Yk:1, al:0.25, ei:2, Oi:0.005, Ki:0.01, Li:0.001, Gi:0.015, Hi:0.002, Qi:0.001, Si:0.01, Pi:0, Ni:0, Mi:0, Ji:0.03, Ii:0.004, Ri:0, Ti:0, Ui:0.75, gf:10, he:800, Fi:0.25, Ei:0.1, ff:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], oi:0.02, pi:0.5, ni:0.005, Mg:1E3, ii:10, gi:1, pj:1E3, oj:100, nj:0, mj:0, lj:1E3, kj:100, wi:0.5, ji:3, qi:22500, hi:50, ej:10, Gg:l, di:j, ij:1E3, jj:2E3, 
fj:4E3, gj:1E4, hj:2E7, $i:100, $k:"tmshooter"};
(function() {
  var b = k, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.Yg = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Ab:0, rc:j, Fd:j, wd:l, ca:k, speed:0, wb:k, pd:k, Qh:k, He:k, Kb:k, Yf:k, qc:k, Zf:k, $f:k, frame:0, init:function(a, f, g) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = f;
    this.style = g;
    tm.tb.Nc.Jd.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.pd = this.Qh = gls2.ah(f, 100);
    this.He = gls2.ah(3, 100);
    this.Kb = gls2.Ug(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Kb.visible = l;
    this.Fj();
    this.wb = this.Ej();
    1 === this.style && (this.wb = [this.wb[1], this.wb[2]]);
    this.qc = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(g = this.wb.length;f < g;f++) {
      var p = this.wb[f];
      gls2.li(this, p).setPosition(p.x, p.y).addChildTo(this.qc)
    }
    this.uk = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.uk.blendMode = "lighter";
    this.Zf = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Zf.blendMode = "lighter";
    this.Zf.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Oa && !a.Ia
    };
    this.$f = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.$f.blendMode = "lighter";
    this.$f.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Oa && !a.Ia
    };
    this.Nd = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.Nd.blendMode = "lighter";
    this.Nd.rotation = -90;
    this.Nd.strokeStyle = "rgba(180,180,255,0.4)";
    this.Nd.update = function() {
      this.visible = a.Ia
    };
    this.Nd.draw = function(b) {
      b.lineCap = "round";
      var f = a.td / gls2.ja.he;
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
    this.ok = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.ok.update = function() {
      this.visible = a.Ia
    };
    b === k && (b = gls2.Ig(this.ca.na))
  }, Ej:function() {
    if(0 === this.type) {
      return[{x:0, Wc:0, y:40, d:0, Nb:j, Gb:-0.7, v:j}, {x:0, Wc:0, y:40, d:0, Nb:j, Gb:0.5, v:j}, {x:0, Wc:0, y:40, d:0, Nb:j, Gb:-0.5, v:j}, {x:0, Wc:0, y:40, d:0, Nb:j, Gb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, Nb:l, Gb:-0.7, v:j}, {x:-40, y:40, d:0.1, Nb:l, Gb:-0.5, v:j}, {x:40, y:40, d:0.1, Nb:j, Gb:0.5, v:j}, {x:70, y:20, d:0.1, Nb:j, Gb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, Nb:l, Gb:-0.7, v:j}, {x:-30, y:20, d:0.4, Nb:l, Gb:-0.5, v:j}, {x:30, y:20, d:0.4, Nb:j, Gb:0.5, v:j}, {x:60, y:40, d:0.6, Nb:j, Gb:0.7, v:j}]
    }
  }, Fj:function() {
    this.Yf = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Yf.setFrameIndex(5);
    this.Yf.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Jc:-1, sd:l, Ib:l, update:function(d) {
    this.visible = this.wd ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.rc) {
      var g = f.getKeyAngle();
      g !== k && (g = a[g], this.x += g.x * this.speed * (this.Ib ? 0.5 : 1), this.y += g.y * this.speed * (this.Ib ? 0.5 : 1));
      this.x = gls2.ma.clamp(this.x, 15, 465);
      this.y = gls2.ma.clamp(this.y, 15, 625);
      var p = f.getKey("c") && this.Fd, g = f.getKey("z") && this.Fd;
      this.Jc = p ? this.Jc + 1 : this.Jc - 1;
      this.Jc = gls2.ma.clamp(this.Jc, -1, 10);
      this.Ib = g && p || 10 === this.Jc;
      p = this.ca.Ia ? 3 : 5;
      this.sd = !this.Ib && (0 <= this.Jc || g) && 0 === d.frame % p;
      g && (this.Jc = 0);
      this.Kb.x = this.x;
      this.Kb.y = this.y - 40;
      f.getKeyDown("x") && this.Fd && (0 < this.ca.Oa && !this.ca.Ia ? (this.ca.Sk(), gls2.zj(this).addChildTo(this.ca)) : !this.ca.Yc && 0 < this.ca.xb && (this.vb = gls2.ma.clamp(this.vb - 2, 0, 1), this.ca.Ed(-0.02), gls2.Jg(this, this.ca).setPosition(gls2.ma.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.Ib = this.sd = l
    }
    this.sd && (g = Math.sin(0.2 * d.frame), p = this.pd.fire(this.x - 7 - 6 * g, this.y - 5, -90), p !== k && p.addChildTo(this.ca), p = this.pd.fire(this.x + 7 + 6 * g, this.y - 5, -90), p !== k && p.addChildTo(this.ca));
    if(this.Ib) {
      g = 0;
      for(p = this.wb.length;g < p;g++) {
        this.wb[g].v = l
      }
      this.qc.rotation = 0
    }else {
      this.Kb.visible = l;
      g = 0;
      for(p = this.wb.length;g < p;g++) {
        this.wb[g].v = j
      }
    }
    this.Tj(f);
    this.Bj(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = d.frame
  }, sc:function() {
    this.Ib = this.sd = l;
    this.ca.ze();
    this.ca.cb = 0;
    this.ca.Xa = 0;
    this.ca.Qa = 0
  }, Tj:function(a) {
    if(0 === this.type) {
      for(a = this.wb.length;this.wb[--a] !== i;) {
        var b = this.wb[a];
        0 === a ? b.x = b.Wc + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.Wc + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.Wc + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.Wc + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.qc, b.rotation = this.Ib ? 0 : this.rc && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.rc && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, Bj:function(a, b) {
    this.rc && a.getKey("left") ? this.Ab = gls2.ma.clamp(this.Ab - 0.2, -3, 3) : this.rc && a.getKey("right") ? this.Ab = gls2.ma.clamp(this.Ab + 0.2, -3, 3) : 0 > this.Ab ? this.Ab = gls2.ma.clamp(this.Ab + 0.2, -3, 3) : 0 < this.Ab && (this.Ab = gls2.ma.clamp(this.Ab - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Ab) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Ab) : 2 === this.type && this.setFrameIndex(31 + ~~this.Ab);
    return b
  }});
  gls2.li = tm.createClass({superClass:tm.display.AnimationSprite, Uc:k, fa:k, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Uc = b;
    this.fa = a;
    this.altitude = 10;
    this.gotoAndPlay(b.Nb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.Uc.v) {
      this.x = this.Uc.x * (this.fa.ca.Ia ? 1.5 : 1);
      this.y = this.Uc.y * (this.fa.ca.Ia ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Uc.d * this.Uc.Gb);
      var f = this.parent.localToGlobal(this);
      this.Uc.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.ca);
      this.fa.sd && (f = this.fa.pd.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== k && f.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = k;
  gls2.jd = tm.createClass({superClass:tm.display.Sprite, speed:0, Sc:0, Pj:1, Hh:0, fb:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.Sc = gls2.ja.Zg;
    b === k && (b = gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.Yd(a)
  }, update:function() {
    this.x += this.vc;
    this.y += this.Xb;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, Yd:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Fe:function(a) {
    for(var f = 0;f < a;f++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), p = gls2.ma.randf(2, 8), s = 2 * Math.random() * Math.PI;
      g.Ba = Math.cos(s) * p;
      g.Ca = Math.sin(s) * p;
      g.scaleX = g.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.Ba;
        this.y += this.Ca;
        this.Ba *= 0.9;
        this.Ca *= 0.9
      })
    }
  }});
  gls2.jd.Hd = function() {
    for(var b = [].concat(a), f = 0, g = b.length;f < g;f++) {
      b[f].remove()
    }
  };
  var a = gls2.jd.kb = [];
  gls2.ah = tm.createClass({Ic:k, Gh:l, init:function(b, f) {
    this.Gh = 3 === b;
    this.Ic = [];
    for(var g = 0;g < f;g++) {
      var p = gls2.jd(b), s = this;
      p.addEventListener("added", function() {
        this.ra = gls2.ja.ej;
        a.push(this)
      });
      p.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        s.Ic.push(this)
      });
      this.Gh && p.addEventListener("enterframe", function(a) {
        this.setScale((this.Pj + this.Hh) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Ic.push(p)
    }
  }, fire:function(a, b, g) {
    var p = this.Ic.pop();
    if(p === i) {
      return k
    }
    var s = gls2.ma.degToRad(g);
    p.vc = Math.cos(s) * p.speed;
    p.Xb = Math.sin(s) * p.speed;
    p.setPosition(a, b);
    p.rotation = g + 90;
    return p
  }, yd:function(a) {
    for(var b = this.Ic.length;this.Ic[--b] !== i;) {
      this.Ic[b].Sc = gls2.ja.Zg + gls2.ja.Vi * a, this.Ic[b].Hh = 0.2 * a
    }
  }})
})();
gls2.Ug = tm.createClass({superClass:tm.display.Sprite, fa:k, ca:k, bc:0, frame:0, Zh:k, color:k, jh:0, Nf:0, Qj:l, head:k, xh:k, Ac:k, fb:j, Sc:gls2.ja.Rg, xd:k, init:function(b, a) {
  this.fa = b;
  this.ca = b.ca;
  this.jh = 0 === this.fa.style ? 1 : 1.2;
  this.Nf = 0 === this.fa.style ? 50 : 75;
  var d = this;
  this.Zh = a;
  this.superInit(a.redBody, this.Nf, 100);
  this.boundingHeightBottom = 1;
  this.tl = 0;
  this.origin.y = 1;
  var f = this.Ac = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.xh = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.bc - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.bc
  };
  this.Yd(["red", "green", "blue"][this.fa.type]);
  this.yd(0)
}, Yd:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.Zh[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Ac.gotoAndPlay(this.color);
  this.xh.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.xd = k;
  return this
}, yd:function(b) {
  this.boundingWidth = this.width = this.Nf + 30 * b / gls2.ja.gf;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.Sc = this.jh * gls2.ja.Rg + gls2.ja.Xi * b;
  0 === b ? this.Yd(["red", "green", "blue"][this.fa.type]) : this.Yd("hyper")
}, Fe:function(b, a) {
  this.xd === k && this.nh();
  a = a || this.bc;
  for(var d = 0;d < b;d++) {
    var f = this.xd.clone().setPosition(this.x, a).addChildTo(this.ca), g = gls2.ma.randf(8, 14), p = gls2.ma.randf(0, Math.PI);
    f.Ba = Math.cos(p) * g;
    f.Ca = Math.sin(p) * g;
    f.scaleX = f.scaleY = (gls2.ma.randf(0.5, 1.5) + gls2.ma.randf(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.Ba;
      this.y += this.Ca;
      this.Ba *= 0.95;
      this.Ca *= 0.95
    })
  }
}, ik:function(b, a, d) {
  this.xd === k && this.nh();
  for(var f = 0;f < b;f++) {
    var g = this.xd.clone().setPosition(a, d).addChildTo(this.ca), p = gls2.ma.randf(12, 20), s = gls2.ma.randf(0, Math.PI);
    g.Ba = Math.cos(s) * p;
    g.Ca = Math.sin(s) * p;
    g.scaleX = g.scaleY = (gls2.ma.randf(1, 3) + gls2.ma.randf(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.Ba;
      this.y += this.Ca;
      this.Ba *= 0.95;
      this.Ca *= 0.95
    })
  }
}, nh:function() {
  this.xd = "hyper" === this.color ? gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.fa.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.fa.Ib) ? (this.bc = Math.max(0, this.bc - 40), this.height = this.y - this.bc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.bc = this.y - 40;
  this.Qj = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, ll:function() {
  return this.bc
}, Nk:function(b) {
  this.bc = b;
  this.head.update()
}});
gls2.Ug.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.bc
});
(function() {
  gls2.Jg = tm.createClass({superClass:tm.app.Object2D, fb:j, ca:k, init:function(a, d) {
    this.superInit();
    this.fa = a;
    this.ca = d;
    this.Xh = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Xh.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Xh));
    this.hh();
    b === k && (b = gls2.Ua(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.pa = 0;
    this.Vd = 1;
    this.addEventListener("added", function() {
      this.ca.Yc = j;
      this.fa.wd = j;
      this.ca.xb -= 1;
      this.ca.Je = l;
      this.ca.ze();
      this.ca.lb("drop BOMBER!!", j);
      gls2.sa("bomb");
      gls2.sa("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.Yc = l;
      this.fa.wd = l
    })
  }, hh:function() {
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
      var d = this.a * this.Vd + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.pa;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.pa += 3.6, this.Vd = -1) : (this.b = 8, this.pa += 1.8, this.Vd = 1)
  }});
  gls2.Vg = tm.createClass({superClass:gls2.Jg, init:function(a, b) {
    this.superInit(a, b);
    gls2.ja.di && this.addEventListener("added", function() {
      this.ca.xb = 0
    })
  }, hh:function() {
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
      var d = this.a * this.Vd + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.pa;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.pa += 1.8, this.Vd = 1)
  }});
  var b = k
})();
gls2.mi = tm.createClass({superClass:tm.display.Sprite, vc:0, Xb:0, fa:k, pa:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.fa = d;
  this.Xb = 1;
  this.vc = 0.5 > gls2.Aa.random() ? -1 : 1;
  this.pa = 0
}, update:function() {
  this.x += this.vc;
  this.y += 2 * this.Xb;
  if(2025 > gls2.Ec(this, this.fa)) {
    this.fa.ca.Nj(1), this.remove()
  }else {
    if(3E3 > this.pa) {
      if(30 > this.x || 450 < this.x) {
        this.vc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.Xb *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.pa += 1
}});
gls2.xi = tm.createClass({superClass:tm.display.Sprite, vc:0, Xb:0, fa:k, pa:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var f = -1;1 >= f;f++) {
    for(var g = -1;1 >= g;g++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(f, g).addChildTo(this)
    }
  }
  this.setPosition(b, a);
  this.fa = d
}, update:function() {
  this.y += 0.5;
  4096 > gls2.Ec(this, this.fa) && (this.fa.ca.uh(), this.remove());
  704 < this.y && this.remove()
}});
gls2.qa = {};
gls2.qa.setup = function() {
  gls2.Xj = {};
  gls2.qa.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  gls2.Xj.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k, frequency:3}}}, 100, 100));
  gls2.qa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.qa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.qa.particle16 = gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.qa.Fe = function(b, a, d) {
  b = gls2.qa.particle16.clone().setPosition(b, a);
  b.fb = j;
  b.addChildTo(d);
  d = gls2.ma.randf(5, 20);
  a = gls2.ma.randf(Math.PI, 2 * Math.PI);
  b.Ba = Math.cos(a) * d;
  b.Ca = Math.sin(a) * d;
  b.scaleX = b.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.Ba;
    this.y += this.Ca;
    this.Ba *= 0.9;
    this.Ca *= 0.9
  })
};
gls2.qa.yh = function(b, a, d, f) {
  f = f || 1.8;
  var g = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  g.fb = j;
  g.addChildTo(d);
  g.image = gls2.qa.shockwaveImage;
  g.tweener.clear().to({scaleX:f, scaleY:f, alpha:0}, 800, "easeOutQuad").call(function() {
    g.remove()
  })
};
gls2.qa.kk = function(b, a, d) {
  var f = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  f.fb = j;
  f.addChildTo(d);
  f.image = gls2.qa.shockwaveImage;
  f.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
};
gls2.qa.jk = function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.fb = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.qa.Be = function(b, a, d, f) {
  gls2.sa("explode");
  var g = gls2.qa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  g.fb = j;
  if(f !== i) {
    var p = f.x, s = f.y;
    g.addEventListener("enterframe", function() {
      this.x += p;
      this.y += s;
      p *= 0.99;
      s *= 0.99
    })
  }
  g.addChildTo(d);
  gls2.qa.yh(b, a, d)
};
gls2.qa.$j = function(b, a, d) {
  gls2.sa("explode");
  var f = gls2.qa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.fb = j;
  f.addChildTo(d);
  f = gls2.qa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.fb = j;
  f.addChildTo(d);
  f = gls2.qa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.fb = j;
  f.addChildTo(d)
};
gls2.qa.Hb = function(b, a, d) {
  gls2.sa("explode2");
  gls2.sa("explode3");
  for(var f = ~~(Math.random() * gls2.yc.noise.length), g = 0;20 > g;g++) {
    var p = gls2.qa.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    p.a = 2 * Math.PI * Math.random();
    p.v = 10 * Math.pow(gls2.yc.noise.at(~~(gls2.yc.noise.length * g / 20) + f), 2);
    p.fb = j;
    p.addChildTo(d)
  }
  gls2.qa.yh(b, a, d, 5)
};
gls2.qa.Wf = function(b, a, d) {
  gls2.sa("explode2");
  gls2.sa("explode3");
  for(var f = ~~(Math.random() * gls2.yc.noise.length), g = 0;20 > g;g++) {
    for(var p = 2 * Math.PI * g / 20, s = Math.pow(gls2.yc.noise.at(~~(gls2.yc.noise.length * g / 20) + f), 2), z = 0;3 > z;z++) {
      var A = 4 * s * (z + 1), q = gls2.qa.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.pa += 1
      }).setScale(0.3 * (3 - z)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      q.rotation = 2 * Math.random() * Math.PI;
      q.fb = j;
      q.pa = 0;
      q.a = p;
      q.v = A;
      q.addChildTo(d)
    }
  }
};
gls2.df = tm.createClass({superClass:tm.app.Object2D, target:k, Zc:0, angle:0, alpha:2, fb:j, reverse:l, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.Zc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === k) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Ua(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.Zc + this.target.x, Math.sin(a) * this.Zc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.Zc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.Zc || 200 < this.Zc) && this.remove()
  }
}});
gls2.zj = tm.createClass({superClass:tm.app.Object2D, target:k, angle:0, fb:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Ua(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ma.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ma.rand(-2, 2)).on("enterframe", function() {
        this.x += this.Ba;
        this.y += this.Ca
      }).addChildTo(this.target.parent);
      a.Ba = 3 * Math.cos(this.angle);
      a.Ca = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
gls2.rj = tm.createClass({superClass:tm.graphics.Canvas, ca:k, nd:k, mb:k, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.nd = gls2.ri(200);
  this.mb = gls2.$g(this)
}, update:function() {
  this.clear();
  this.ca.Sb !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.mb.fc - 20, 470 * this.ca.Sb.ra / this.ca.Sb.Gc, 20), this.strokeRect(5, this.mb.fc - 20, 470, 20), this.clear(263.5, this.mb.fc - 20 + 2, 2, 16), this.clear(52, this.mb.fc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.mb.fc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.cb)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.Qa / gls2.ja.Mg) + 1), this.mb.Md + 192, 22);
  b = [0, 1, 4][this.ca.fa.type];
  for(a = 0;a < this.ca.Mc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * t.Na.Jb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.Qd + " hit", this.mb.Md + 10, 95);
  0 < ~~this.ca.Qa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.Qa + " HIT!!", 10, 0.5 * -this.mb.fc + 115));
  0 === this.frame % 2 && (!this.ca.Ia && 0 < this.ca.Oa ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Oa, 5, 637)) : this.ca.Ia && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.od, 5, 637)));
  for(a = 0;a < this.ca.xb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.Je && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.nd.update();
  this.nd.ug = this.mb.fc + 5;
  this.nd.draw(this);
  this.frame += 1
}});
gls2.$g = tm.createClass({superClass:tm.app.Object2D, Bb:k, Md:0, fc:0, init:function(b) {
  this.superInit();
  this.Bb = b
}});
(function() {
  for(var b = [], a = [], d = 0;3 > d;d++) {
    b[d] = 40 * Math.pow(0.8, d), a[d] = b[d] / 2 * Math.sqrt(3)
  }
  gls2.Ci = tm.createClass({superClass:tm.graphics.Canvas, za:k, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.za = gls2.Di();
    this.za.na = this;
    this.za.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(d) {
    this.za.Ba = Math.cos(this.za.direction) * this.za.speed;
    this.za.Ca = Math.sin(this.za.direction) * this.za.speed;
    for(var g = 0;3 > g;g++) {
      for(this.za.Ub[g] += this.za.Ba * Math.pow(0.8, g);3 * b[g] < this.za.Ub[g];) {
        this.za.Ub[g] -= 3 * b[g]
      }
      for(;this.za.Ub[g] < 3 * -b[g];) {
        this.za.Ub[g] += 3 * b[g]
      }
      for(this.za.Vb[g] += this.za.Ca * Math.pow(0.8, g);2 * a[g] < this.za.Vb[g];) {
        this.za.Vb[g] -= 2 * a[g]
      }
      for(;this.za.Vb[g] < 2 * -a[g];) {
        this.za.Vb[g] += 2 * a[g]
      }
    }
    0 === d % 2 && this.draw()
  }, draw:function() {
    this.za.background !== k ? this.clearColor(this.za.background, 0, 0) : this.clear();
    for(var d = 0;3 > d;d++) {
      this.lineWidth = 0.3 * Math.pow(0.8, d);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.6 * Math.pow(0.8, d) + ")"}, {offset:1, color:"rgba(255,255,255," + 0.4 * Math.pow(0.8, d) + ")"}]).toStyle();
      this.beginPath();
      for(var g = 0, p = this.za.Ub[d] - 3 * b[d];p < 480 + 3 * b[d];p += 1.5 * b[d]) {
        for(var g = 0 === g ? a[d] : 0, s = this.za.Vb[d] - 2 * a[d] + g;s < 640 + 2 * a[d];s += 2 * a[d]) {
          this.line(p, s, p + b[d], s), this.line(p, s, p - b[d] / 2, s + a[d]), this.line(p, s, p - b[d] / 2, s - a[d])
        }
      }
      this.stroke()
    }
  }});
  gls2.Di = tm.createClass({superClass:tm.app.Object2D, Ub:0, Vb:0, direction:0, speed:0, Ba:0, Ca:0, background:k, init:function() {
    this.superInit();
    this.Ub = [];
    this.Vb = [];
    for(var a = 0;3 > a;a++) {
      this.Ub[a] = 240, this.Vb[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Ca = this.Ba = 0
  }})
})();
gls2.Ef = tm.createClass({superClass:tm.display.Sprite, Jh:l, ca:k, fa:k, tc:l, Xc:l, Ag:l, Ba:0, Ca:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.Jh = b) && this.setScale(2, 2);
  this.ca = gls2.Sa.Bd;
  this.fa = this.ca.fa;
  this.addChildTo(this.ca);
  b = 0.5 * gls2.Aa.random() * Math.PI - 0.75 * Math.PI;
  this.Ba = 30 * Math.cos(b);
  this.Ca = 30 * Math.sin(b)
}, update:function() {
  this.fa.Ib && (this.Xc = j);
  if(this.fa.parent === k) {
    this.Xc = l
  }else {
    if(100 > gls2.Ec(this, this.fa)) {
      this.ca.zk(this);
      this.remove();
      return
    }
    1E4 > gls2.Ec(this, this.fa) && (this.Xc = j);
    if(this.Ag && this.Xc) {
      var b = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.Ag || (this.x += this.Ba, this.y += this.Ca, this.Ba *= 0.8, this.Ca *= 0.8, -1 < this.Ba && (1 > this.Ba && -1 < this.Ca && 1 > this.Ca) && (this.Ag = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.bh = tm.createClass({superClass:gls2.Ef, tc:l, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.yj = tm.createClass({superClass:gls2.Ef, tc:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.Xc || (this.x += this.ca.na.Ba, this.y += this.ca.na.Ca);
  this.superClass.prototype.update.call(this)
}});
gls2.kd = tm.createClass({fa:k, ca:k, $:k, frame:0, init:function(b) {
  this.ca = b;
  this.fa = b.fa;
  this.Zd();
  this.$ = gls2.xj();
  this.frame = 0
}, Zd:n(), update:function() {
  this.Zj(this.frame);
  this.frame += 1
}, Zj:function(b) {
  b = this.$.get(b);
  if(b !== k) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.Og[b.value] !== i) {
        var a = gls2.Og[b.value];
        if(a !== k) {
          if(a[0].Sb === j) {
            this.ig(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.ig(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.$.Cg = l
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, ig:function(b) {
  this.ca.Ae += 1;
  b = b.aa(this.ca, b.ba).setPosition(b.x, b.y).addChildTo(this.ca);
  b.ae = this;
  b.ng();
  return b
}, se:function(b) {
  gls2.Ce();
  this.ca.Kd = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var g = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
      g.pa = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.pa) + 0.5;
        this.pa += 1
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
  a.addChildTo(this.ca.Vf);
  gls2.sa("warning");
  gls2.sa("voWarning")
}});
gls2.kd.create = function(b, a) {
  switch(a) {
    case 0:
      return gls2.tj(b);
    case 1:
      return gls2.uj(b);
    case 2:
      return gls2.vj(b);
    case 3:
      return gls2.wj(b);
    default:
      h(Error("stageNumber = " + a))
  }
};
gls2.xj = tm.createClass({index:0, data:k, Cg:l, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? k : b.stop === j ? (this.Cg = j, b) : this.Cg ? k : b
}});
gls2.tj = tm.createClass({superClass:gls2.kd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.jc("bgm1", j);
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
    this.se(function() {
      gls2.jc("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, Zd:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.uj = tm.createClass({superClass:gls2.kd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.jc("bgm2", j);
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
    this.se(function() {
      gls2.jc("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ca.na.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Zd:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.vj = tm.createClass({superClass:gls2.kd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.jc("bgm3", j);
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.speed = 8;
    this.ca.na.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "yotsuba");
  this.$.add(300, "akane-1");
  this.$.add(1, "heri2-center");
  this.$.add(100, "akane-2");
  this.$.add(1, "heri2-left");
  this.$.add(100, "akane-3");
  this.$.add(1, "heri2-right");
  this.$.add(100, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(200, "akane-1");
  this.$.add(60, "akane-2");
  this.$.add(30, "akane-3");
  this.$.add(1, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(300, "heri2-center");
  this.$.add(1, "heri2-left");
  this.$.add(1, "heri2-right");
  this.$.add(360, function() {
    this.ca.na.direction = ~~(90 * (Math.PI / 180));
    this.ca.na.speed = 4;
    this.ca.na.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "hoshizora_y-1");
  this.$.add(1, "heri2-right");
  this.$.add(1, function() {
    this.ca.na.direction = ~~(180 * (Math.PI / 180));
    this.ca.na.speed = 4;
    this.ca.na.tweener.clear().to({speed:4}, 4E3, "easeInOutQuad")
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
    this.se(function() {
      gls2.jc("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.na.direction = Math.PI / 2;
    this.ca.na.tweener.clear().to({speed:-10}, 5E3, "easeInOutQuad")
  });
  this.$.add(600, "momozono")
}, Zd:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.wj = tm.createClass({superClass:gls2.kd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.jc("bgm4", j);
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
  this.$.add(1200, n());
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
    this.se(function() {
      gls2.jc("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.na.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Zd:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.Collision = {ud:function(b, a) {
  if(b.parent === k || a.parent === k) {
    return l
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, g = b.y + b.boundingHeightBottom, p = a.x - a.boundingWidthLeft, s = a.y - a.boundingHeightTop, z = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > p && f < z && g > s
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, Uk:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.rd(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.ti = tm.createClass({superClass:gls2.Scene, titleText:k, menu:k, descriptions:k, showExit:l, title:k, selections:[], description:k, box:k, cursor:k, lg:k, _selected:0, _opened:l, _finished:l, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.lg = d.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.lg !== k && this.parent.lg(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.sa("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.ma.clamp(this._selected, 0, this.selections.length - 1), gls2.sa("select")) : 
  b.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.ma.clamp(this._selected, 0, this.selections.length - 1), gls2.sa("select")))
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
}, rd:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function B(b, a, d, f, g) {
  g = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:n()}, g);
  b.Uk(gls2.ti(a, d, g), f)
}
;gls2.Ua = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, Mf:0.85, size:0, image:k, fb:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== i ? a : 1;
  this.Mf = d !== i ? d : 0.85;
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.Mf;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Ua(this.size, this.ol, this.Mf, this.image)
}});
gls2.Ig = tm.createClass({superClass:gls2.Ua, na:k, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.na = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.na.Ba;
  this.y += this.na.Ca + 0.3
}, clone:function(b) {
  return gls2.Ig(this.na, b)
}});
gls2.ri = tm.createClass({width:0, label:k, sb:k, pa:0, Th:0, ug:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.sb = [];
  this.Th = 480 - this.width - 5;
  this.ug = 5
}, Oj:function(b, a) {
  a === j && (this.sb.clear(), this.sb.push(""));
  5 < this.sb.length && this.sb.splice(1, this.sb.length - 4);
  this.sb.push(b);
  return this
}, Rj:function() {
  this.sb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.sb.length) {
    if("" !== this.sb[0]) {
      var a = this.sb[0][0];
      this.sb[0] = this.sb[0].substring(1);
      b += a
    }else {
      this.sb.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.pa % 2 ? "_" : " ");
  this.pa += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.Th, this.ug);
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
gls2.yc = {noise:k, lk:function(b) {
  function a(a) {
    if(1 > a) {
      return k
    }
    var f = [], g = Math.random(), p, s;
    for(s = 0;s < b;s += ~~a) {
      p = Math.random();
      for(var m = 0;m < a;m++) {
        f[s + m] = d(g, p, m / a)
      }
      g = p
    }
    g = f[b - ~~a];
    p = f[0];
    for(m = 0;m < a;m++) {
      f[b - ~~a + m] = d(g, p, m / a)
    }
    return f
  }
  function d(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var f = [], g = 0, p = Math.pow(2, 4);8 > g;g++, p *= 2) {
    var s = a(b / p);
    if(s === k) {
      break
    }
    f.push(s)
  }
  s = [].concat(f[0]);
  g = 1;
  for(p = 0.5;g < f.length;g++, p *= 0.5) {
    for(var z = 0;z < b;z++) {
      s[z] += f[g][z] * p
    }
  }
  for(g = 0;g < s.length;g++) {
    s[g] /= 2
  }
  return s
}};
gls2.yc.noise = gls2.yc.lk(512);
gls2.Aa = {index:-1, data:k, setup:function(b) {
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
gls2.Fb = k;
gls2.jc = function(b, a) {
  a || gls2.Ve();
  var d = tm.asset.AssetManager.get(b);
  d && (gls2.Fb = d.clone(), gls2.Fb.volume = 0.1 * gls2.core.Gd, gls2.Fb.loop = j, gls2.Fb.play())
};
gls2.Ve = function() {
  gls2.Fb !== k && gls2.Fb.stop()
};
gls2.Ce = function() {
  if(gls2.Fb !== k) {
    var b = gls2.Fb;
    b.loop = l;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.sa = function(b) {
  if(0 !== gls2.core.$c && gls2.sa.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.$c, gls2.sa.Fg !== k && gls2.sa.Fg.stop(), gls2.sa.Fg = a) : a.volume = 0.1 * gls2.core.$c);
    gls2.sa.played[b] = gls2.core.frame
  }
};
gls2.sa.played = {};
gls2.sa.Fg = k;
(function() {
  var b = k, a = k;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:k, pa:0, Ud:[], Ee:l, Bh:k, Lh:0, Ke:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Bh = tm.display.Label().setPosition(240, 256).addChildTo(this);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Ee = l;
      this.ai()
    })
  }, ai:function() {
    for(var a = ("" + Math.floor(gls2.core.Fc)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
      b += a.substring(g, g + 4) + " "
    }
    this.Bh.text = "HIGH SCORE: " + b.trim()
  }, rd:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.fh(80 * Math.cos(0.01 * this.pa) + 240, 80 * Math.sin(0.01 * this.pa) + 320, 0);
    this.fh(80 * Math.cos(0.01 * this.pa + Math.PI) + 240, 80 * Math.sin(0.01 * this.pa + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Ee && this.Sh();
    this.pa += 1
  }, fh:function(d, f, g) {
    if(!this.Ee) {
      b === k && (b = gls2.Ua(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === k && (a = gls2.Ua(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      g.speed = 0.6;
      var p = gls2.ma.randf(0, 2 * Math.PI), s = gls2.ma.rand(0, 20);
      g.setPosition(Math.cos(p) * s + d, Math.sin(p) * s + f);
      var z = this;
      g.update = function() {
        this.x += Math.cos(p) * this.speed;
        this.y += Math.sin(p) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = z.Ud.indexOf(this);
          -1 !== a && z.Ud.splice(a, 1)
        }
      };
      this.Ud.push(g)
    }
  }, Sh:function() {
    B(this, "MAIN MENU", ["start", "tutorial", "setting", "save high score"], this.Fk, {defaultValue:this.Lh, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30e9\u30f3\u30ad\u30f3\u30b0\u3078\u30cf\u30a4\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, Fk:function(a) {
    4 !== a && (this.Lh = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Ee = j;
          for(var a = 0, b = this.Ud.length;a < b;a++) {
            this.Ud[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.sj())
        }.bind(this));
        break;
      case 2:
        this.Hc();
        break;
      case 3:
        0 < gls2.core.Fc ? this.vg() : alert("\u30b9\u30b3\u30a2\u304c0\u3067\u3059\uff01\uff1e\uff1c")
    }
  }, vg:function(a) {
    var b = {score:Math.floor(gls2.core.Fc), stage:gls2.core.Dh + 1, continueCount:gls2.core.Ah, shipType:gls2.core.Fh, shipStyle:gls2.core.Eh, fps:0, screenShot:gls2.core.Ch};
    a && (b.userName = a);
    tm.util.Ajax.load({url:"/ranking/post", data:b, type:"POST", dataType:"json", async:l, success:function(a) {
      if(a.success) {
        alert("\u767b\u9332\u5b8c\u4e86\uff01"), gls2.core.Fc = 0, this.ai(), window.top.location.href = "/ranking/user/" + a.userName + "?id=" + a.id
      }else {
        if(a.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.vg();
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(a = "";"" === a;) {
                a = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:")
              }
              a !== k && this.vg(a + "(\u4eee)")
            }
          }
        }else {
          alert("\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c")
        }
      }
    }.bind(this)})
  }, Hc:function() {
    B(this, "SETTING", ["bgm volume", "sound volume"], this.qg, {defaultValue:this.Ke, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, qg:function(a) {
    3 !== a && (this.Ke = a);
    switch(a) {
      case 0:
        this.rg();
        break;
      case 1:
        this.sg();
        break;
      default:
        this.Sh()
    }
  }, rg:function() {
    B(this, "BGM VOLUME", "012345".split(""), this.og, {defaultValue:gls2.core.Gd, onCursorMove:function(a) {
      gls2.Fb !== k && "exit" !== a && (gls2.Fb.volume = 0.1 * a)
    }, showExit:l})
  }, og:function(a) {
    6 !== a && (gls2.core.Gd = a);
    this.Hc()
  }, sg:function() {
    B(this, "SE VOLUME", "012345".split(""), this.pg, {defaultValue:gls2.core.$c, showExit:l})
  }, pg:function(a) {
    6 !== a && (gls2.core.$c = a);
    this.Hc()
  }, rl:function() {
    B(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Ek, {defaultValue:gls2.core.sh, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Ek:function(a) {
    5 !== a && (gls2.core.sh = a);
    this.Hc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.sj = tm.createClass({superClass:gls2.Scene, mode:0, types:k, We:k, Ob:k, Pb:k, Qb:k, fg:k, dg:k, type:0, style:0, Bc:l, Ne:l, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Pk();
    this.We = this.Ok();
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
    this.We.visible = l;
    this.kg(-1, j);
    this.Ob.update();
    this.Pb.update();
    this.Qb.update();
    gls2.sa("voSelectShip");
    gls2.jc("bgmShipSelect", j)
  }, Pk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.fg = tm.display.Label("Type-A").setPosition(240, 150);
    this.fg.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.gg = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.gg.update = function() {
      this.gg.text = b[this.type]
    }.bind(this);
    this.gg.addChildTo(a);
    var f = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.Ob = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.Pb = tm.display.AnimationSprite(f, 64, 64).gotoAndPlay("typeB");
    this.Qb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.Ob.Za = 0;
    this.Pb.Za = 1;
    this.Qb.Za = 2;
    this.Ob.setScale(3).setPosition(0, 320).addChildTo(a);
    this.Pb.setPosition(0, 320).addChildTo(a);
    this.Qb.setPosition(0, 320).addChildTo(a);
    this.Ob.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Za / 3 * Math.PI)
    };
    this.Pb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Za / 3 * Math.PI)
    };
    this.Qb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Za / 3 * Math.PI)
    };
    return a
  }, Ok:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.dg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.dg.addChildTo(a);
    this.Kc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.qc = tm.app.Object2D();
    this.qc.addChildTo(this.Kc);
    this.qc.update = function(a) {
      this.qc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.va = [];
    this.va[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.va[0].update = function() {
      0 === this.type ? this.va[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.va[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.va[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.va[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.va[1].update = function() {
      0 === this.type ? this.va[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.va[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.va[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.va[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.va[2].update = function() {
      0 === this.type ? this.va[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.va[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.va[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.va[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.va[3].update = function() {
      0 === this.type ? this.va[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.va[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.va[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.Kc.line = b(0, 0, 0, 130, 8);
    this.Kc.line.addChildTo(this.Kc);
    this.va.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.qc)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.eg = tm.display.Label(d[0], 16).setPosition(240, 500);
    this.eg.update = function() {
      this.eg.text = d[this.style]
    }.bind(this);
    this.eg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.We.visible = l, !this.Ne && a.keyboard.getKeyDown("left")) {
        this.kg(-1, l), gls2.sa("select")
      }else {
        if(!this.Ne && a.keyboard.getKeyDown("right")) {
          this.kg(1, l), gls2.sa("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.sa("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.We.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.sa("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.sa("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (gls2.ja.Gg ? this.Jk() : (this.Bc = j, this.Rh()), gls2.sa("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Wk(0 === ~~(a.frame / 60) % 
      2))
    }
  }, Jk:function() {
    B(this, "AUTO BOMB", ["on", "off"], this.Ak, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, Ak:function(a) {
    2 !== a && (this.Bc = 0 === a, this.Rh())
  }, Rh:function() {
    B(this, "ARE YOU READY?", ["ok"], this.Bk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, Bk:function(a) {
    0 === a && this.Rk()
  }, kg:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.Ob, this.Pb, this.Qb][this.type].remove().addChildTo(this.types);
    b ? (this.Ob.Za -= a, this.Ob.scaleX = 0 === this.type ? 5 : 1, this.Ob.scaleY = 0 === this.type ? 5 : 1, this.Pb.Za -= a, this.Pb.scaleX = 1 === this.type ? 5 : 1, this.Pb.scaleY = 1 === this.type ? 5 : 1, this.Qb.Za -= a, this.Qb.scaleX = 2 === this.type ? 5 : 1, this.Qb.scaleY = 2 === this.type ? 5 : 1) : (this.Ne = j, this.Ob.tweener.clear().to({Za:this.Ob.Za - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.Pb.tweener.clear().to({Za:this.Pb.Za - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.Qb.tweener.clear().to({Za:this.Qb.Za - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.Ne = l
    }.bind(this)));
    this.fg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Rk:function() {
    gls2.core.ca.Bc = this.Bc;
    gls2.core.ca.start(this.type, this.style);
    gls2.core.replaceScene(gls2.core.ca);
    gls2.Ce()
  }, Wk:function(a) {
    this.dg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.Kc.line.Wb = l, this.va[0].line.Wb = l, this.va[1].line.Wb = l, this.va[2].line.Wb = l, this.va[3].line.Wb = l) : (this.Kc.line.Wb = j, this.va[0].line.Wb = j, this.va[1].line.Wb = j, this.va[2].line.Wb = j, this.va[3].line.Wb = j);
    a ? (this.va[0].visible = j, this.va[1].visible = j, 1 === this.style ? (this.va[2].visible = l, this.va[3].visible = l) : (this.va[2].visible = j, this.va[3].visible = j), this.Kc.line.lineWidth = 5) : (this.va.each(function(a) {
      a.visible = l
    }), this.Kc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, rd:n()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, Wb:j, init:function(a, b, f, g, p) {
    this.superInit();
    this.angle = f - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = g;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = p
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    if(this.Wb && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), f = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - f, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - f, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + f, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + f, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.Sa = tm.createClass({superClass:gls2.Scene, fa:k, score:0, xe:0, cb:0, Qa:0, Qd:0, Xa:0, Cc:0, Bg:0, ae:k, na:k, Mc:3, Se:0, Te:0, ic:0, Ae:0, Rd:0, jg:0, Bc:l, xb:0, Vc:0, kh:0, Yc:l, Je:l, hc:0, vb:0, Ia:l, Od:0, td:0, Oa:0, od:0, nl:0, ml:0, Ge:k, vh:k, tg:k, th:k, Uf:k, Vf:k, Of:k, tk:k, Lb:k, Bb:k, Sb:k, Kd:l, sk:l, init:function() {
  gls2.Sa.Bd !== k && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.Sa.Bd = this;
  this.Bb = gls2.rj(this);
  this.Bb.mb.addChildTo(this);
  this.na = gls2.Ci().za;
  this.na.addChildTo(this);
  this.Ge = gls2.Sa.xc().addChildTo(this);
  this.vh = gls2.Sa.xc().addChildTo(this);
  this.th = gls2.Sa.xc().addChildTo(this);
  this.Uf = gls2.Sa.xc().addChildTo(this);
  this.tg = gls2.Sa.xc().addChildTo(this);
  this.Vf = gls2.Sa.xc().addChildTo(this);
  this.Of = gls2.Sa.xc().addChildTo(this);
  this.tk = gls2.Sa.Sg(this).addChildTo(this);
  tm.tb.Nc.Jd.ih = this;
  this.Lb = tm.app.Object2D();
  this.Lb.addChildTo(this);
  this.Lb.update = function(b) {
    this.Hk(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Bb.clear()
  })
}, addChild:function(b) {
  b.fb ? this.Uf.addChild(b) : b instanceof gls2.La ? this.Of.addChild(b) : b instanceof gls2.Ef ? this.Ge.addChild(b) : b instanceof gls2.ia ? b.tc ? this.Ge.addChild(b) : this.th.addChild(b) : b instanceof gls2.Yg ? this.tg.addChild(b) : b === this.Lb || b === this.na || b instanceof gls2.Sa.xc || b instanceof gls2.Sa.Sg || b instanceof gls2.$g ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(b)))
}, update:function(b) {
  this.Mk(b.keyboard);
  this.ae.update(b.frame);
  0 === b.frame % 2 && this.Bb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.Ve()) : b.keyboard.getKeyDown("space") ? this.Td(0) : b.keyboard.getKeyDown("p") && (this.zg().saveAsImage(), this.Td(0))
}, zg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.na.na.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Bb.element, 0, 0);
  return b
}, Hk:function() {
  this.fa.rc === l && gls2.ha.erase();
  var b;
  b = [].concat(gls2.ia.kb);
  for(var a = [].concat(gls2.jd.kb), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var g = b[f], p = a[d];
      if(!(0 >= g.ra) && gls2.Collision.ud(g, p) && (p.Fe(1), p.remove(), g.sc(p.Sc))) {
        this.ic += 1;
        this.Ia ? this.rb(gls2.ja.Pi) : this.rb(gls2.ja.Oi);
        this.mg(g);
        break
      }
    }
  }
  p = this.fa.Kb;
  if(this.fa.Ib) {
    b = [].concat(gls2.ia.kb);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(g = b[f], !(0 >= g.ra) && gls2.Collision.ud(g, p)) {
        p.Nk(g.y + g.boundingHeightBottom);
        g.sc(p.Sc) ? (this.ic += 1, this.Ia ? this.rb(gls2.ja.Ni) : this.rb(gls2.ja.Ki), this.mg(g)) : (this.Xa = Math.min(this.Xa + 0.02, 1), this.Ia ? (this.ld(0.01 * gls2.ja.ff[this.od]), this.rb(gls2.ja.Mi)) : (this.ld(0.01), this.rb(gls2.ja.Li)));
        p.Fe(2);
        break
      }
    }
    a = {x:this.fa.x, y:this.fa.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(gls2.ia.kb);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.ra) && gls2.Collision.ud(g, a) && (g.sc(p.Sc) ? (this.ic += 1, this.Ia ? this.rb(gls2.ja.Ji) : this.rb(gls2.ja.Gi), this.mg(g)) : (this.Xa = Math.min(this.Xa + 0.02, 1), this.Ia ? (this.ld(0.01 * gls2.ja.ff[this.od]), this.rb(gls2.ja.Ii)) : (this.ld(0.01), this.rb(gls2.ja.Hi))), p.ik(2, this.fa.x, this.fa.y - 30))
    }
  }
  if(this.Yc) {
    gls2.ha.erase();
    b = [].concat(gls2.ia.kb);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.ra) && (g.zb() && g.sc(gls2.ja.ei)) && (this.Rc(g.score), this.ic += 1)
    }
    this.Xa = this.Qa = 0
  }
  if(this.Ia) {
    f = [].concat(gls2.jd.kb);
    for(g = f.length;f[--g] !== i;) {
      if(p = f[g], !(0 >= p.ra)) {
        a = [].concat(gls2.La.kb);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== l && (0 < p.ra && gls2.Collision.ud(p, d)) && (d.ra -= 6 - this.vb, 0 > d.ra && (d.Ea(), this.Rc(gls2.ja.ii), this.ld(gls2.ja.gi), this.zh(l, l, d.x, d.y, 1)), p.ra -= 1)
        }
      }
    }
  }
  if(this.Kd) {
    gls2.ha.erase()
  }else {
    if(this.fa.parent !== k && this.fa.wd === l && this.Yc === l && 0 >= this.Od && !gls2.ja.aj) {
      for(f = gls2.La.kb.length;gls2.La.kb[--f] !== i;) {
        if(b = gls2.La.kb[f], b.visible !== l && gls2.Collision.ud(b, this.fa)) {
          this.fa.sc();
          0 < this.xb && this.Bc ? (this.vb = gls2.ma.clamp(this.vb - 1, 0, 1), this.Ed(-0.01), gls2.Vg(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this)) : this.Oh();
          break
        }
      }
      for(f = gls2.ia.kb.length;gls2.ia.kb[--f] !== i;) {
        if(g = gls2.ia.kb[f], !(0 >= g.ra) && !g.tc && gls2.Collision.ud(g, this.fa)) {
          this.fa.sc();
          0 < this.xb && this.Bc ? (this.vb = gls2.ma.clamp(this.vb - 1, 0, 1), this.Ed(-0.01), gls2.Vg(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this)) : this.Oh();
          break
        }
      }
    }
    this.Ia && (this.td -= 1, 0 >= this.td && this.ze());
    this.Od = Math.max(this.Od - 1, 0);
    this.Xa -= gls2.ja.oi * gls2.ja.pi;
    0 >= this.Xa && (this.Xa = 0, this.Ia || 0 < this.Oa ? this.Cc = this.Qa = this.cb = 0 : (0 < this.Qa && (0 >= this.Cc && (this.Cc = this.Qa * gls2.ja.ni), this.cb = this.cb * (this.Qa - this.Cc) / this.Qa, this.Qa -= this.Cc), 0 >= this.Qa && (this.Cc = this.Qa = this.cb = 0)));
    this.Je && (this.score += gls2.ja.$i)
  }
}, mg:function(b) {
  this.zh(b.tc, this.Ia || gls2.Ec(b, this.fa) < gls2.ja.qi, b.x, b.y, b.star, b instanceof gls2.ed);
  this.ld(gls2.ja.ff[this.od]);
  for(var a = this.cb, d = ~~(this.Qa / gls2.ja.Mg) + 1, f = 0;f < d;f++) {
    a += b.score, this.Rc(a)
  }
  this.cb += b.score * d
}, zh:function(b, a, d, f, g, p) {
  b = b ? gls2.yj : gls2.bh;
  for(var s = 0;s < g;s++) {
    var z = b(a);
    z.setPosition(d, f);
    p && (z.Xc = j)
  }
}, zk:function(b) {
  gls2.sa("star");
  b.Jh ? (this.Te += 1, this.cb += gls2.ja.lj, this.Rc(gls2.ja.pj + this.cb * gls2.ja.nj), this.Ia ? this.rb(gls2.ja.Ti) : this.rb(gls2.ja.Si)) : (this.Se += 1, this.cb += gls2.ja.kj, this.Rc(gls2.ja.oj + this.cb * gls2.ja.mj), this.Ia ? this.rb(gls2.ja.Ri) : this.rb(gls2.ja.Qi))
}, start:function(b, a) {
  this.Bb.nd.Rj().clear();
  this.xe = this.score = 0;
  this.Mc = gls2.ja.Qg;
  this.xb = this.Vc = gls2.ja.Pg[a];
  this.kh = gls2.ja.fi[a];
  this.Oa = this.vb = this.hc = 0;
  this.ze();
  this.Yc = l;
  this.Rd = this.jg = 0;
  this.fa = gls2.Yg(this, b, a);
  this.yg(gls2.ja.Wi);
  t.Na.Jb.$ex = 2 !== a ? 0 : 1;
  this.Yh(0);
  gls2.sa("voLetsGo");
  this.Tk()
}, Yh:function(b) {
  this.lb("3...2...1...");
  this.fa.parent !== k && this.fa.remove();
  gls2.ia.Hd();
  gls2.jd.Hd();
  gls2.ha.Hd();
  this.Ge.removeChildren();
  this.Uf.removeChildren();
  this.Vf.removeChildren();
  this.tg.removeChildren();
  this.Of.removeChildren();
  this.Lb.removeChildren();
  this.ic = this.Ae = this.Te = this.Se = this.Qd = this.Xa = this.Qa = this.cb = 0;
  this.Sb = k;
  this.sk = this.Kd = l;
  this.Rd = 0;
  this.Bb.mb.Md = 0;
  this.vb = this.Bb.mb.fc = 0;
  this.Bg = b;
  this.ae = gls2.kd.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.hg()
  }.bind(this));
  this.na.tweener.clear()
}, hg:function() {
  this.lb("Let's go!");
  this.fa.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.fa.Kb.addChildTo(this);
  this.fa.rc = l;
  this.fa.wd = j;
  this.fa.sd = l;
  this.fa.Ib = l;
  this.fa.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Fd = this.rc = j
  }.bind(this.fa)).wait(gls2.ja.Yi).call(function() {
    this.wd = l
  }.bind(this.fa))
}, Oh:function() {
  gls2.qa.Be(this.fa.x, this.fa.y, this);
  this.lb("I was shot down.");
  this.fa.rc = l;
  this.fa.remove();
  this.Mc -= 1;
  this.Oa = this.Cc = this.Qa = this.Xa = 0;
  this.Rd += 1;
  this.jg += 1;
  this.vb = gls2.ma.clamp(this.vb - 3, 0, 1);
  this.Ed(-0.03);
  if(0 < this.Mc) {
    this.tweener.clear().wait(1E3).call(function() {
      if(!this.Bc || !gls2.ja.Gg) {
        this.Vc = Math.min(this.Vc + 1, this.kh)
      }
      this.xb = this.Vc;
      this.hg()
    }.bind(this))
  }else {
    if(gls2.core.Fc === this.score) {
      var b = this.zg();
      gls2.core.Ch = b.canvas.toDataURL("image/png")
    }
    this.tweener.clear().wait(2E3).call(function() {
      this.Lk()
    }.bind(this))
  }
}, yg:function(b) {
  t.Na.Jb.$rank = gls2.ma.clamp(b, 0, 0.5)
}, Ed:function(b) {
  this.yg(t.Na.Jb.$rank + b)
}, gk:function() {
  this.lb("System rebooted.", j);
  this.score = 0;
  this.xe += 1;
  this.Mc = gls2.ja.Qg;
  this.xb = this.Vc = gls2.ja.Pg[this.fa.style];
  this.vb = 0;
  this.yg(0);
  this.hg()
}, Sj:function() {
  gls2.jc("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.Lb);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(gls2.ResultScene(this, this.zg()));
    b.remove()
  }.bind(this))
}, hk:function() {
  gls2.Ve();
  this.app.replaceScene(gls2.Ai())
}, kl:n(), Rc:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < gls2.ja.Ng.length;b++) {
    var d = gls2.ja.Ng[b];
    a < d && d <= this.score && this.uh()
  }
  gls2.core.Fc = Math.max(gls2.core.Fc, this.score);
  gls2.core.Fc === this.score && (gls2.core.Dh = this.Bg, gls2.core.Fh = this.fa.type, gls2.core.Eh = this.fa.style, gls2.core.Ah = this.xe)
}, ld:function(b) {
  this.Cc = 0;
  this.Qa += b;
  this.Qd = Math.max(this.Qd, this.Qa);
  1 <= b && (this.Xa = 1)
}, rb:function(b) {
  if(this.Oa !== gls2.ja.gf) {
    for(b *= gls2.ja.Ui;1 < b;) {
      gls2.df(this.fa).addChildTo(this), b -= 1, this.hc = 0, this.Oa += 1, 1 === this.Oa ? (this.lb("HYPER SYSTEM, stand by.", j), gls2.sa("voHyperStandBy")) : (this.lb("HYPER SYSTEM, ready.", j), gls2.sa("voHyperReady"))
    }
    this.hc = gls2.ma.clamp(this.hc + b, 0, 1);
    1 <= this.hc && (gls2.df(this.fa).addChildTo(this), this.Oa += 1, this.hc -= 1, 1 === this.Oa ? (this.lb("HYPER SYSTEM, stand by.", j), gls2.sa("voHyperStandBy")) : (this.lb("HYPER SYSTEM, ready.", j), gls2.sa("voHyperReady")))
  }
}, Sk:function() {
  0.5 > Math.random() ? (this.lb("HYPER SYSTEM start!!", j), gls2.sa("voHyperStart0")) : (this.lb("start counting to system limit.", j), gls2.sa("voHyperStart1"));
  this.vb = gls2.ma.clamp(this.vb + 1, 0, 5);
  this.Ed(0.01 * this.Oa);
  t.Na.Jb.$hyperOff = gls2.ja.wi * (2 !== this.fa.style ? 1 : 0.5);
  this.td = gls2.ja.he;
  this.Od = gls2.ja.he * gls2.ja.Fi;
  this.fa.He.yd(this.Oa);
  this.fa.Kb.yd(this.Oa);
  this.fa.pd = this.fa.He;
  gls2.qa.jk(this.fa.x, this.fa.y, this);
  this.Ia = j;
  this.od = this.Oa;
  this.hc = this.Oa = 0;
  gls2.ha.erase(j, j)
}, ze:function() {
  this.Ia !== l && (this.Ia = l, gls2.df(this.fa, j).addChildTo(this), this.fa.pd = this.fa.Qh, t.Na.Jb.$hyperOff = 1 * (2 !== this.fa.style ? 1 : 0.5), this.fa.He.yd(0), this.fa.Kb.yd(0), this.Od = gls2.ja.he * gls2.ja.Ei, this.od = this.td = 0, gls2.ha.erase())
}, Nj:function() {
  gls2.sa("decision");
  gls2.sa("voGetBomb");
  this.xb = Math.min(this.xb + 1, this.Vc);
  this.Je = this.xb === this.Vc
}, uh:function() {
  gls2.sa("voExtend");
  this.lb("extended.");
  this.Mc += 1
}, lb:function(b, a) {
  this.Bb.nd.Oj(b, a)
}, Td:function(b) {
  B(this, "PAUSE", ["resume", "setting", "exit game"], this.Gk, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:l})
}, Gk:function(b) {
  switch(b) {
    case 1:
      this.Hc();
      break;
    case 2:
      this.Kk()
  }
}, Hc:function() {
  B(this, "SETTING", ["bgm volume", "sound volume"], this.qg, {defaultValue:this.Ke, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, qg:function(b) {
  3 !== b && (this.Ke = b);
  switch(b) {
    case 0:
      this.rg();
      break;
    case 1:
      this.sg();
      break;
    default:
      this.Td()
  }
}, Kk:function() {
  B(this, "REARY?", ["yes", "no"], this.Ck, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:l})
}, Ck:function(b) {
  0 === b ? (gls2.Ve(), this.app.replaceScene(gls2.TitleScene())) : this.Td(1)
}, rg:function() {
  B(this, "BGM VOLUME", "012345".split(""), this.og, {defaultValue:gls2.core.Gd, onCursorMove:function(b) {
    gls2.Fb !== k && 6 !== b && (gls2.Fb.volume = 0.1 * b)
  }, showExit:l})
}, og:function(b) {
  6 !== b && (gls2.core.Gd = b);
  this.Hc(1)
}, sg:function() {
  B(this, "SE VOLUME", "012345".split(""), this.pg, {defaultValue:gls2.core.$c, showExit:l})
}, pg:function(b) {
  6 !== b && (gls2.core.$c = b);
  this.Hc(1)
}, Lk:function() {
  B(this, "CONTINUE?", ["yes", "no"], this.Dk, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:l})
}, Dk:function(b) {
  switch(b) {
    case 0:
      this.gk();
      break;
    case 1:
      this.hk()
  }
}, rd:n(), Qk:function() {
  this.Bb.mb.tweener.clear().to({Md:-480}, 1600, "easeInBack").to({fc:30}, 800, "easeInOutBack")
}, nk:function() {
  this.Bb.mb.tweener.clear().to({fc:0}, 800, "easeInOutBack").to({Md:0}, 1600, "easeOutBack")
}, Wd:k, Xd:0, Pd:k, je:0, Tk:function() {
  if(1 === this.je) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.Pd = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.Wd = [];
    this.Xd = 0
  }else {
    if(2 === this.je && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.Pd = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.Pd.push(d[f])
        }
      }
    }
  }
}, Mk:function(b) {
  if(1 === this.je) {
    1E3 < this.Wd.length && (console.log("save"), localStorage.setItem("rec" + this.Xd, this.Wd), localStorage.setItem("recCount", this.Xd), this.Wd = [], this.Xd += 1), this.Wd.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.je && this.Pd) {
      var a = this.Pd.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      })
    }
  }
}});
gls2.Sa.xc = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.Sa.Sg = tm.createClass({superClass:tm.display.CanvasElement, ca:k, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.Vj(b);
  this.Wj(b)
}, Vj:function(b) {
  if(0 < this.ca.Xa) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.Xa) + "," + ~~Math.min(255, 512 * this.ca.Xa) + ",0.5)";
    var a = 500 * this.ca.Xa;
    b.fillRect(465, 635 - a, 10, a)
  }
}, Wj:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.Oa === gls2.ja.gf ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.hc && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.hc, 9))
}});
gls2.Sa.Bd = k;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ca:k, Wh:k, Lb:k, values:k, labels:k, Ie:k, Uh:[gls2.ja.ij, gls2.ja.jj, gls2.ja.fj, gls2.ja.gj, 1], Ih:k, wg:k, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ca.Se, this.ca.Te, ~~(100 * (this.ca.ic / this.ca.Ae)), this.ca.Qd, 0 === this.ca.Rd ? gls2.ja.hj : 0];
  this.Ie = this.values.map(function(a) {
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
  this.Ih = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.wg = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.wg.visible = l;
  this.Wh = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var g = 0;16 > g;g++) {
      f[d][g] = {xg:0, Qe:0, vc:gls2.ma.randf(-2, 2), Xb:gls2.ma.randf(1, 4)}
    }
  }
  this.Lb = tm.app.Object2D();
  this.Lb.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var g = 0;g < f[d].length;g++) {
        var q = f[d][g];
        640 > 40 * g + q.Qe && (a.drawImage(this.Wh.element, 40 * d, 40 * g, 40, 40, 40 * d + q.xg, 40 * g + q.Qe, 40, 40), q.xg += q.vc, q.Qe += q.Xb, q.Xb += 0.3, b = l)
      }
    }
    this.wait = 60;
    b && this.Lb.remove();
    a.restore()
  }.bind(this);
  this.Lb.addChildTo(this);
  this.addEventListener("exit", function() {
    gls2.Ce()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.sa("star"), this.values[a] <= this.Ie[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.Rc(this.values[a] * this.Uh[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.Rc(this.Ie[a] * this.Uh[a]), this.values[a] -= this.Ie[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.Ih.text = Math.floor(this.ca.score)
    }else {
      if(this.wg.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.sa("decision"), this.ca.Yh(this.ca.Bg + 1), b.popScene()
      }
    }
    this.frame += 1
  }
}, rd:n()});
gls2.Ai = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(gls2.TitleScene())
    }.bind(this))
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c")) && b.replaceScene(gls2.TitleScene())
}, rd:function(b) {
  b.clearColor("black")
}});
gls2.Zk = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit()
}, update:n()});
(function() {
  gls2.ia = tm.createClass({superClass:tm.display.CanvasElement, name:k, fa:k, ca:k, ae:k, ra:0, Gc:0, score:0, tc:l, erase:l, star:1, rk:l, yb:j, eb:l, frame:0, Xe:k, direction:0, speed:0, ga:k, init:function(a, d, f) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.eb = l;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.yb = j;
    this.ca = a;
    this.fa = a.fa;
    this.score = 100;
    this.erase = l;
    this.Mj(f);
    d.setup(this);
    this.altitude = this.tc ? 1 : 10;
    this.Xe = {x:0, y:0}
  }, ng:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, ql:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.eb === l && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.eb = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.tc && (this.x += this.ca.na.Ba, this.y += this.ca.na.Ca);
    this.eb && (this.frame += 1);
    this.Xe.x = this.x - a;
    this.Xe.y = this.y - b
  }, sc:function(a) {
    if(!this.eb) {
      return l
    }
    this.ra -= a;
    if(0 >= this.ra) {
      return a = gls2.ma.randf(0, 5), 2 > a ? this.ca.lb("enemy destroy.") : 4 > a ? this.ca.lb(this.name + " destroy.") : this.ca.lb("ETR reaction gone."), this.erase && gls2.ha.erase(j, this.ca.Ia, this instanceof gls2.ed), this.dispatchEvent(tm.event.Event("destroy")), this.Ea(), j
    }
    40 > this.ra && this.Pa();
    return l
  }, Ea:function() {
    gls2.qa.Be(this.x, this.y, this.ca, this.Xe);
    this.remove()
  }, zb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Ik:function() {
    return this.yb
  }, Pa:n(), Mj:function(a) {
    this.name = a;
    a = gls2.ia.si[a];
    this.ra = this.Gc = a[0];
    this.score = a[1];
    this.tc = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, ec:function() {
    this.remove();
    this.ca.vh.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.qa.Be(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.qa.Wf(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, te:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.qa.Be(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.qa.Wf(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  gls2.ia.Hd = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = gls2.ia.kb = []
})();
gls2.ed = tm.createClass({superClass:gls2.ia, rk:j, Gc:0, Re:k, init:function(b, a, d) {
  this.Re = a;
  this.superInit(b, this.Re[0], d);
  this.Gc = this.ra;
  this.addEventListener("added", function() {
    this.ca.Sb = this;
    this.ca.Qk();
    this.tweener.wait(1E3).call(function() {
      this.ca.Kd = l
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.Sb = k;
    this.ca.nk();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.Sj()
    }.bind(this));
    a.addChildTo(this.ca.Lb)
  })
}, sc:function(b) {
  var a = this.ra;
  if(gls2.ia.prototype.sc.call(this, b)) {
    return this.ca.Kd = j, this.ca.fa.Fd = l, gls2.Ce(), j
  }
  this.ra <= 0.55 * this.Gc && 0.55 * this.Gc < a ? (gls2.da.Ue(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.qa.Hb(this.x, this.y, this.ca), gls2.ha.erase(j, this.ca.Ia), this.Re[1].setup(this)) : this.ra <= 0.1 * this.Gc && 0.1 * this.Gc < a && (gls2.da.Ue(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.qa.Hb(this.x, this.y, this.ca), gls2.ha.erase(j, this.ca.Ia), this.Re[2].setup(this), gls2.sa("voJacms"))
}});
(function() {
  gls2.ia.si = {kujo:[2, 300, l, l, 1, {radius:24}], kiryu:[3, 400, l, l, 1, {radius:24}], natsuki:[5, 900, j, l, 1, {radius:24}], kise:[50, 15E3, j, l, 1, {radius:24}], yamabuki:[100, 15E3, j, l, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, l, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, l, l, 5, {width:100, height:20}], kurokawa:[35, 5E3, l, l, 5, 
  {width:100, height:20}], akimoto:[250, 3E5, l, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, l, j, 20, {width:180, heightBottom:40, heightTop:60}], yukishiro:[750, 8E5, l, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, l, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, l, j, 20, {width:300, height:80}], hyuga:[6E3, 3E6, l, j, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, l, j, 20, {radius:130}], aida:[8E3, 4E6, l, j, 0, {width:370, heightBottom:5, heightTop:60}], 
  erika:[30, 500, l, l, 1, {width:24, height:48}], hino:[30, 500, l, l, 1, {width:24, height:48}], hoshizora_y:[100, 500, l, j, 30, {width:128, height:64}], hoshizora_t:[150, 500, l, j, 30, {width:128, height:64}], yotsuba:[200, 3E4, l, j, 30, {width:64, height:64}], yotsubaLeaf:[150, 1E4, l, l, 10, {width:32, height:32}], higashi:[2E3, 25E4, l, j, 20, {width:256, height:128}], momozono:[6E3, 3E6, l, j, 0, {width:256, height:128}]};
  gls2.ia.oa = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ia.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ia.xa = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ia.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ia.ka = tm.createClass({superClass:gls2.ia, Jf:k, Kf:k, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.Jf = b("tex_tank1", 64, 64);
    this.Kf = b("tex_tank1", 64, 64);
    this.Tc = this.Tc || 0;
    this.dc = this.dc || 0
  }, update:function(a) {
    gls2.ia.prototype.update.call(this, a);
    for(a = this.Tc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.dc;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.Jf.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.Kf.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Jf.draw(a);
    this.Kf.draw(a)
  }, Ea:function() {
    gls2.qa.$j(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ia.Kg = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.ea = b("tex2", 256, 128).setFrameIndex(7)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ia.qb = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.ea = b("tex1", 64, 64).setFrameIndex(23)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ia.wc = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ia.oc = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.ea = b("tex1", 256, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.ec()
  }});
  gls2.ia.bl = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "aono");
    this.ea = b("tex1", 256, 128);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 128
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.ec()
  }});
  gls2.ia.xf = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "yumehara");
    this.ea = b("tex1", 256, 256);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 256;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 256
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.ec()
  }});
  gls2.ia.Ka = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ia.le = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "hanasaki");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Pa:n(), Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ia.kf = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "myodoin");
    this.ea = b("tex1", 128, 128).setFrameIndex(12)
  }, Pa:n(), Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ia.Yb = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ia.bf = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "minazuki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256;
    this.setScale(1.2)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ia.Ha = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "hino");
    this.ea = b("hino", 64, 32).setFrameIndex(0);
    this.boundingWidth = 64;
    this.boundingHeightBottom = 0;
    this.boundingHeightTop = 32
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ia.Ph = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "hoshizora_y");
    this.ea = b("hoshizora_y", 256, 128).setFrameIndex(0);
    this.boundingWidth = 256;
    this.boundingHeightBottom = 16;
    this.boundingHeightTop = 64
  }, update:function(a) {
    this.zb() || (0 > this.x && this.ea.setFrameIndex(0), 480 < this.x && this.ea.setFrameIndex(1));
    gls2.ia.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.ec()
  }, zb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 || 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ia.Me = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "hoshizora_t");
    this.ea = b("hoshizora_t", 64, 128).setFrameIndex(0);
    this.boundingWidth = 128;
    this.boundingHeightBottom = 16;
    this.boundingHeightTop = 32
  }, update:function(a) {
    gls2.ia.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.ec()
  }, zb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 || 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ia.Ye = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "yotsuba");
    this.ea = b("yotsuba", 128, 128).setFrameIndex(0);
    this.boundingWidth = 128;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.qa.Wf(this.x, this.y, this.ca);
    this.ec();
    this.ca.Yc || gls2.xi(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove();
    for(var a = 0;4 > a;a++) {
      this.uc[a] && this.uc[a].Ea()
    }
    delete this.uc
  }, ng:function() {
    this.uc = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.uc[a] = this.ae.ig({aa:gls2.ia.Ze, ba:gls2.da.Ze, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.uc[a].dir = b;
      this.uc[a].Tf = this;
      this.uc[a].yk = a;
      this.uc[a].distance = 64
    }
    gls2.ia.prototype.ng.call(this);
    return this
  }});
  gls2.ia.Ze = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "yotsubaLeaf");
    this.ea = b("yotsubaLeaf", 64, 64).setFrameIndex(0);
    this.boundingWidth = 64;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, update:function(a) {
    gls2.ia.prototype.update.call(this, a);
    for(a = this.dir;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    this.ea.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    this.Tf.uc[this.yk] = k;
    this.remove()
  }});
  gls2.ia.Ad = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "erika");
    this.ea = b("tex3", 64, 128);
    this.ea.setFrameIndex(8)
  }, Pa:n(), draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.qa.Hb(this.x, this.y, this.ca);
    gls2.mi(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ia.hf = tm.createClass({superClass:gls2.ia, ea:k, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.ea = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, Ea:function() {
    this.ec()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ia.tf = tm.createClass({superClass:gls2.ed, ea:k, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.ea = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.te()
  }});
  gls2.ia.pf = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "mishou");
    this.ea = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.cc = gls2.Ua(80, 1, 0.9);
    this.Ac = gls2.Ua(256, 1, 0.9)
  }, update:function() {
    gls2.ia.prototype.update.apply(this, arguments);
    0 === gls2.core.frame % 2 && (this.cc.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.cc.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.Ac.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, Ea:function() {
    this.ec()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ia.qj = tm.createClass({superClass:gls2.ed, init:function(a, d) {
    this.superInit(a, d, "hyuga");
    this.ea = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, Ea:function() {
    this.te()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ia.Df = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "higashi");
    this.ea = b("higashi", 256, 128).setFrameIndex(0)
  }, Pa:n(), Ea:function() {
    this.ec()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ia.Zi = tm.createClass({superClass:gls2.ed, init:function(a, d) {
    this.superInit(a, d, "momozono");
    this.ea = b("momozono", 256, 128).setFrameIndex(0);
    this.ea.setScale(2)
  }, Pa:n(), Ea:function() {
    this.te()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ia.zf = tm.createClass({superClass:gls2.ia, init:function(a, d) {
    this.superInit(a, d, "hishikawa");
    this.ea = b("tex2", 256, 256).setFrameIndex(2);
    this.ea.setScale(2);
    this.cc = gls2.Ua(60, 1, 0.95);
    this.Ac = gls2.Ua(500, 1, 0.8)
  }, update:function() {
    gls2.ia.prototype.update.apply(this, arguments);
    0 === gls2.core.frame % 2 && 0 < this.ra && (this.cc.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.cc.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Ac.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, Ea:function() {
    this.ec()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ia.bj = tm.createClass({superClass:gls2.ed, init:function(a, d) {
    this.superInit(a, d, "aida");
    this.ea = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.cc = gls2.Ua(60, 1, 0.95);
    this.Ac = gls2.Ua(500, 1, 0.8)
  }, update:function() {
    gls2.ia.prototype.update.apply(this, arguments);
    0 === gls2.core.frame % 2 && 0 < this.ra && (this.cc.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.cc.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.cc.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.cc.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Ac.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.pb() : 5 === a.app.frame % 30 && this.ea.ob()
    })
  }, Ea:function() {
    this.te()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, Dg:k, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.Dg = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, pb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.Dg + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }, ob:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.Dg;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }})
})();
(function() {
  gls2.da = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.da.Ue(this)
    })
  }});
  gls2.da.Ga = function(a, b) {
    var g = gls2.ha[b].ye();
    a.on("enterframe", g);
    a.on("completeattack", function() {
      g.stop = j
    })
  };
  gls2.da.Ue = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, g = a.length;b < g;b++) {
        a[b] && a[b].ag && (a[b].stop = j)
      }
    }
  };
  gls2.da.oa = tm.createClass({superClass:gls2.da, pattern:k, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.Vk = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    var b = this.pattern, g = this.Vk;
    a.on("launch", function() {
      var a = gls2.Aa.randf(640 * (g - 0.1), 640 * (g + 0.1));
      this.tweener.clear().wait(gls2.Aa.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.da.Ga(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.da.nc = gls2.da.oa("basic0-0", 0.2);
  gls2.da.hb = gls2.da.oa("basic0-0", 0.4);
  gls2.da.hd = gls2.da.oa("basic0-0", 0.6);
  gls2.da.gb = gls2.da.oa("basic1-2", 0.2);
  gls2.da.mc = gls2.da.oa("basic1-2", 0.4);
  gls2.da.gd = gls2.da.oa("basic1-2", 0.6);
  gls2.da.xa = tm.createClass({superClass:gls2.da, Pe:k, init:function(a) {
    this.superInit();
    this.Pe = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Pe = this.Pe;
    a.tweener.wait(gls2.Aa.rand(0, 1E3)).call(function() {
      this.speed = 6;
      gls2.da.Ga(this, this.Pe);
      this.on("enterframe", function() {
        this.y < this.fa.y && this.eb && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.zb() && this.eb && this.remove();
        if(22500 > gls2.Ec(this, this.fa) || this.y > this.fa.y + 150) {
          this.yb = l
        }
      })
    }.bind(a))
  }});
  gls2.da.ib = gls2.da.xa("basic1-0");
  var b = tm.createClass({superClass:gls2.da, init:function(a, b, g) {
    this.superInit();
    this.qk = a;
    this.pk = b;
    this.md = g
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = this.qk;
    a.Tc = this.pk;
    this.md && (a.md = [].concat(this.md));
    a.dc = 0;
    a.on("enter", function() {
      gls2.da.Ga(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.Tc) * this.speed;
      this.y += Math.sin(this.Tc) * this.speed;
      this.eb && !this.zb() && this.remove();
      for(this.dc = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);0 > this.dc;) {
        this.dc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.dc;) {
        this.dc -= 2 * Math.PI
      }
      this.yb = this.y < this.fa.y && 4E4 < gls2.Ec(this, this.fa);
      if(this.md) {
        for(var a = 0;a < this.md.length;a++) {
          var b = this.md[a];
          b.frame === this.frame && this.tweener.to({Tc:b.dir !== i ? b.dir : this.Tc, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.da.$b = b(1, 0.25 * Math.PI);
  gls2.da.cl = b(1, -1.75 * Math.PI);
  gls2.da.Cd = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.da.ta = b(1.6, 0.5 * Math.PI);
  gls2.da.ac = b(1.6, -0.5 * Math.PI);
  gls2.da.ki = tm.createClass({superClass:gls2.da, Ja:k, init:function(a) {
    this.superInit();
    this.Ja = a
  }, setup:function(a) {
    gls2.da.Ga(a, this.Ja);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.da.Lg = gls2.da.ki("bukky-4-0");
  b = tm.createClass({superClass:gls2.da, Ja:k, oh:l, init:function(a, b) {
    this.superInit();
    this.Ja = a;
    this.oh = !!b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Ja = this.Ja;
    a.on("enter", function() {
      gls2.da.Ga(this, this.Ja)
    });
    a.on("enterframe", function() {
      this.eb && !this.zb() && this.remove()
    });
    if(!this.oh) {
      a.on("enterframe", function() {
        this.yb = this.y < this.fa.y && 4E4 < gls2.Ec(this, this.fa)
      })
    }
  }});
  gls2.da.Db = b("basic3-0", l);
  gls2.da.Eb = b("basic3-1", l);
  gls2.da.Zb = b("cannon2-0", j);
  gls2.da.af = b("cannon2-3", j);
  gls2.da.de = b("cannon3-0", j);
  gls2.da.cf = b("cannon5-0", j);
  b = tm.createClass({superClass:gls2.da, velocityY:0, Ja:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ja = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ja];
    a.Vh = l;
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.da.Ga(this, this.ga[0]);
      this.Vh = j
    }.bind(a));
    a.on("enterframe", function() {
      this.Vh && (this.y += this.velocityY, 384 < this.y && gls2.da.Ue(this), this.eb && !this.zb() && this.remove(), this.yb = this.y < this.fa.y)
    })
  }});
  gls2.da.Oc = b(0.5, "kurokawa-1");
  gls2.da.cj = b(0.5, "kurokawa-4");
  gls2.da.Qc = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.Ga(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.Pc = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.Ga(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  var a = tm.createClass({superClass:gls2.da, velocityY:0, Ja:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ja = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ja];
    a.tweener.clear().call(function() {
      gls2.da.Ga(this, this.ga[0]);
      gls2.qa.kk(this.x, this.y, this.ca)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.eb && !this.zb() && this.remove();
      this.yb = this.y < this.fa.y
    })
  }});
  gls2.da.Ha = a(0.5, "akane");
  a = tm.createClass({superClass:gls2.da, velocityX:0, Ja:k, init:function(a, b) {
    this.superInit();
    this.velocityX = a;
    this.Ja = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ja];
    a.tweener.clear().call(function() {
      gls2.da.Ga(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.eb && !this.zb() && this.remove();
      this.yb = this.y < this.fa.y
    })
  }});
  gls2.da.wk = a(1, "miyuki_y");
  gls2.da.xk = a(-1, "miyuki_y");
  tm.createClass({superClass:gls2.da, velocityX:0, Ja:k, init:function(a, b) {
    this.superInit();
    this.velocityX = a;
    this.Ja = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ja];
    a.tweener.clear().call(function() {
      gls2.da.Ga(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.eb && !this.zb() && this.remove();
      this.yb = this.y < this.fa.y
    })
  }});
  gls2.da.vk = a(0.5, "miyuki_t");
  gls2.da.vk = a(-0.5, "miyuki_t");
  a = tm.createClass({superClass:gls2.da, velocityX:0, Ja:k, init:function() {
    this.superInit();
    this.Ja = "alice"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = 0.5;
    a.ga = [this.Ja];
    a.tweener.clear().call(function() {
      gls2.da.Ga(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.eb && !this.zb() && this.remove();
      this.yb = this.y < this.fa.y
    })
  }});
  gls2.da.Ye = a();
  a = tm.createClass({superClass:gls2.da, Ja:k, init:function() {
    this.superInit();
    this.Ja = "aliceLeaf"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [this.Ja];
    a.tweener.clear().call(function() {
      gls2.da.Ga(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.Tf.x, b = this.Tf.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      this.eb && !this.zb() && this.remove();
      this.yb = this.y < this.fa.y
    })
  }});
  gls2.da.Ze = a();
  gls2.da.Tg = b(0.3, "komachi-1");
  gls2.da.ie = b(0.5, "komachi-2");
  gls2.da.lf = b(0.5, "komachi-4");
  gls2.da.yf = b(0.1, "nozomi-4");
  gls2.da.Ad = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.Ga(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.yb = this.eb
    })
  }});
  gls2.da.Ad = gls2.da.Ad();
  b = tm.createClass({superClass:gls2.da, ga:k, Le:0, init:function(a, b) {
    this.superInit();
    this.ga = a;
    this.Le = b || 1500
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Le = this.Le;
    a.$a = l;
    a.Ta = l;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.$a = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.$a === l || 0 >= this.ra) && this.Le < this.frame && this.Ta === l) {
        this.Ta = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Ta) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.hf = b(["honoka-1"]);
  gls2.da.tf = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.$a = l;
    a.Ta = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Ta) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.dj = gls2.da.tf();
  gls2.da.uf = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.uf = gls2.da.uf();
  gls2.da.vf = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.ra || gls2.da.Ga(this, "nagisa-3-1")
    })
  }});
  gls2.da.vf = gls2.da.vf();
  gls2.da.pf = b(["mai-1", "mai-2"]);
  gls2.da.Af = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.$a = l;
    a.Ta = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Ta) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Af = gls2.da.Af();
  gls2.da.Bf = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Bf = gls2.da.Bf();
  gls2.da.Cf = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Cf = gls2.da.Cf();
  a = tm.createClass({superClass:gls2.da, ga:k, init:function(a) {
    this.superInit();
    this.ga = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.$a = l;
    a.Ta = l;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.$a = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.$a === l || 0 >= this.ra) && 1500 < this.frame && this.Ta === l) {
        this.Ta = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Ta) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Df = a(["setsuna-1"]);
  gls2.da.mf = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.$a = l;
    a.Ta = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Ta) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.mf = gls2.da.mf();
  gls2.da.nf = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.$a = l;
    a.Ta = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Ta) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.nf = gls2.da.nf();
  gls2.da.of = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.$a = l;
    a.Ta = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.$a = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Ta) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.of = gls2.da.of();
  gls2.da.zf = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.da.qf = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.$a = l;
    a.Ta = l;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.$a = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.Aa.randf(-48, 48);
        this.tweener.move(Math.clamp(this.fa.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Ta) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.qf = gls2.da.qf();
  gls2.da.rf = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.4 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.rf = gls2.da.rf();
  gls2.da.sf = tm.createClass({superClass:gls2.da, ga:k, init:function() {
    this.superInit();
    this.ga = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.Aa.random() * Math.PI, d = gls2.Aa.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.da.Ga(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.sf = gls2.da.sf()
})();
var I = gls2.ia, J = gls2.da;
gls2.Og = {"heri1-left":[{aa:I.xa, ba:J.nc, x:48, y:-100}, {aa:I.xa, ba:J.hb, x:96, y:-100}, {aa:I.xa, ba:J.nc, x:144, y:-100}, {aa:I.xa, ba:J.hb, x:192, y:-100}, {aa:I.xa, ba:J.nc, x:240, y:-100}], "heri1-center":[{aa:I.xa, ba:J.nc, x:144, y:-100}, {aa:I.xa, ba:J.hb, x:192, y:-100}, {aa:I.xa, ba:J.nc, x:240, y:-100}, {aa:I.xa, ba:J.hb, x:288, y:-100}, {aa:I.xa, ba:J.nc, x:336, y:-100}], "heri1-right":[{aa:I.xa, ba:J.nc, x:240, y:-100}, {aa:I.xa, ba:J.hb, x:288, y:-100}, {aa:I.xa, ba:J.nc, x:336, 
y:-100}, {aa:I.xa, ba:J.hb, x:384, y:-100}, {aa:I.xa, ba:J.nc, x:432, y:-100}], "heri1-left2":[{aa:I.xa, ba:J.hb, x:48, y:-100}, {aa:I.xa, ba:J.hd, x:96, y:-100}, {aa:I.xa, ba:J.hb, x:144, y:-100}, {aa:I.xa, ba:J.hd, x:192, y:-100}, {aa:I.xa, ba:J.hb, x:240, y:-100}], "heri1-center2":[{aa:I.xa, ba:J.hb, x:144, y:-100}, {aa:I.xa, ba:J.hd, x:192, y:-100}, {aa:I.xa, ba:J.hb, x:240, y:-100}, {aa:I.xa, ba:J.hd, x:288, y:-100}, {aa:I.xa, ba:J.hb, x:336, y:-100}], "heri1-right2":[{aa:I.xa, ba:J.hb, x:240, 
y:-100}, {aa:I.xa, ba:J.hd, x:288, y:-100}, {aa:I.xa, ba:J.hb, x:336, y:-100}, {aa:I.xa, ba:J.hd, x:384, y:-100}, {aa:I.xa, ba:J.hb, x:432, y:-100}], "heri2-left":[{aa:I.oa, ba:J.ib, x:48, y:-100}, {aa:I.oa, ba:J.ib, x:96, y:-100}, {aa:I.oa, ba:J.ib, x:144, y:-100}, {aa:I.oa, ba:J.ib, x:192, y:-100}, {aa:I.oa, ba:J.ib, x:240, y:-100}], "heri2-center":[{aa:I.oa, ba:J.ib, x:144, y:-100}, {aa:I.oa, ba:J.ib, x:192, y:-100}, {aa:I.oa, ba:J.ib, x:240, y:-100}, {aa:I.oa, ba:J.ib, x:288, y:-100}, {aa:I.oa, 
ba:J.ib, x:336, y:-100}], "heri2-right":[{aa:I.oa, ba:J.ib, x:240, y:-100}, {aa:I.oa, ba:J.ib, x:288, y:-100}, {aa:I.oa, ba:J.ib, x:336, y:-100}, {aa:I.oa, ba:J.ib, x:384, y:-100}, {aa:I.oa, ba:J.ib, x:432, y:-100}], "heri1-4-left":[{aa:I.oa, ba:J.gb, x:48, y:-100}, {aa:I.oa, ba:J.gb, x:96, y:-100}, {aa:I.oa, ba:J.gb, x:144, y:-100}, {aa:I.oa, ba:J.gb, x:192, y:-100}, {aa:I.oa, ba:J.gb, x:240, y:-100}], "heri1-4-center":[{aa:I.oa, ba:J.gb, x:144, y:-100}, {aa:I.oa, ba:J.gb, x:192, y:-100}, {aa:I.oa, 
ba:J.gb, x:240, y:-100}, {aa:I.oa, ba:J.gb, x:288, y:-100}, {aa:I.oa, ba:J.gb, x:336, y:-100}], "heri1-4-right":[{aa:I.oa, ba:J.gb, x:240, y:-100}, {aa:I.oa, ba:J.gb, x:288, y:-100}, {aa:I.oa, ba:J.gb, x:336, y:-100}, {aa:I.oa, ba:J.gb, x:384, y:-100}, {aa:I.oa, ba:J.gb, x:432, y:-100}], "heri1-4-left2":[{aa:I.oa, ba:J.mc, x:48, y:-100}, {aa:I.oa, ba:J.gd, x:96, y:-100}, {aa:I.oa, ba:J.mc, x:144, y:-100}, {aa:I.oa, ba:J.gd, x:192, y:-100}, {aa:I.oa, ba:J.mc, x:240, y:-100}], "heri1-4-center2":[{aa:I.oa, 
ba:J.mc, x:144, y:-100}, {aa:I.oa, ba:J.gd, x:192, y:-100}, {aa:I.oa, ba:J.mc, x:240, y:-100}, {aa:I.oa, ba:J.gd, x:288, y:-100}, {aa:I.oa, ba:J.mc, x:336, y:-100}], "heri1-4-right2":[{aa:I.oa, ba:J.mc, x:240, y:-100}, {aa:I.oa, ba:J.gd, x:288, y:-100}, {aa:I.oa, ba:J.mc, x:336, y:-100}, {aa:I.oa, ba:J.gd, x:384, y:-100}, {aa:I.oa, ba:J.mc, x:432, y:-100}], "tankRD-left":[{aa:I.ka, ba:J.$b, x:78, y:-50}, {aa:I.ka, ba:J.$b, x:28, y:-100}, {aa:I.ka, ba:J.$b, x:-22, y:-150}, {aa:I.ka, ba:J.$b, x:-72, 
y:-200}, {aa:I.ka, ba:J.$b, x:-122, y:-250}], "tankRD-center":[{aa:I.ka, ba:J.$b, x:222, y:-50}, {aa:I.ka, ba:J.$b, x:172, y:-100}, {aa:I.ka, ba:J.$b, x:122, y:-150}, {aa:I.ka, ba:J.$b, x:72, y:-200}, {aa:I.ka, ba:J.$b, x:22, y:-250}], "tankL-top":[{aa:I.ka, ba:J.Cd, x:550, y:64}, {aa:I.ka, ba:J.Cd, x:620, y:64}, {aa:I.ka, ba:J.Cd, x:690, y:64}, {aa:I.ka, ba:J.Cd, x:760, y:64}, {aa:I.ka, ba:J.Cd, x:830, y:64}], "tank5-left":[{aa:I.ka, ba:J.ta, x:48, y:-70}, {aa:I.ka, ba:J.ta, x:48, y:-140}, {aa:I.ka, 
ba:J.ta, x:48, y:-210}, {aa:I.ka, ba:J.ta, x:48, y:-280}, {aa:I.ka, ba:J.ta, x:48, y:-350}], "tank5-center":[{aa:I.ka, ba:J.ta, x:240, y:-70}, {aa:I.ka, ba:J.ta, x:240, y:-140}, {aa:I.ka, ba:J.ta, x:240, y:-210}, {aa:I.ka, ba:J.ta, x:240, y:-280}, {aa:I.ka, ba:J.ta, x:240, y:-350}], "tank15-top":[{aa:I.ka, ba:J.ta, x:48, y:-70}, {aa:I.ka, ba:J.ta, x:48, y:-140}, {aa:I.ka, ba:J.ta, x:48, y:-210}, {aa:I.ka, ba:J.ta, x:48, y:-280}, {aa:I.ka, ba:J.ta, x:48, y:-350}, {aa:I.ka, ba:J.ta, x:240, y:-70}, 
{aa:I.ka, ba:J.ta, x:240, y:-140}, {aa:I.ka, ba:J.ta, x:240, y:-210}, {aa:I.ka, ba:J.ta, x:240, y:-280}, {aa:I.ka, ba:J.ta, x:240, y:-350}, {aa:I.ka, ba:J.ta, x:432, y:-70}, {aa:I.ka, ba:J.ta, x:432, y:-140}, {aa:I.ka, ba:J.ta, x:432, y:-210}, {aa:I.ka, ba:J.ta, x:432, y:-280}, {aa:I.ka, ba:J.ta, x:432, y:-350}], "tank25-top":[{aa:I.ka, ba:J.ta, x:48, y:-70}, {aa:I.ka, ba:J.ta, x:48, y:-140}, {aa:I.ka, ba:J.ta, x:48, y:-210}, {aa:I.ka, ba:J.ta, x:48, y:-280}, {aa:I.ka, ba:J.ta, x:48, y:-350}, {aa:I.ka, 
ba:J.ta, x:240, y:-70}, {aa:I.ka, ba:J.ta, x:240, y:-140}, {aa:I.ka, ba:J.ta, x:240, y:-210}, {aa:I.ka, ba:J.ta, x:240, y:-280}, {aa:I.ka, ba:J.ta, x:240, y:-350}, {aa:I.ka, ba:J.ta, x:432, y:-70}, {aa:I.ka, ba:J.ta, x:432, y:-140}, {aa:I.ka, ba:J.ta, x:432, y:-210}, {aa:I.ka, ba:J.ta, x:432, y:-280}, {aa:I.ka, ba:J.ta, x:432, y:-350}, {aa:I.ka, ba:J.ac, x:144, y:710}, {aa:I.ka, ba:J.ac, x:144, y:780}, {aa:I.ka, ba:J.ac, x:144, y:850}, {aa:I.ka, ba:J.ac, x:144, y:920}, {aa:I.ka, ba:J.ac, x:144, y:990}, 
{aa:I.ka, ba:J.ac, x:336, y:710}, {aa:I.ka, ba:J.ac, x:336, y:780}, {aa:I.ka, ba:J.ac, x:336, y:850}, {aa:I.ka, ba:J.ac, x:336, y:920}, {aa:I.ka, ba:J.ac, x:336, y:990}], "bukky-4-r":[{aa:I.Kg, ba:J.Lg, x:480, y:-50}], "bukky-4-l":[{aa:I.Kg, ba:J.Lg, x:0, y:-50}], "cannon-0":[{aa:I.Ka, ba:J.Db, x:48, y:-100}], "cannon-1":[{aa:I.Ka, ba:J.Db, x:96, y:-100}], "cannon-2":[{aa:I.Ka, ba:J.Db, x:144, y:-100}], "cannon-3":[{aa:I.Ka, ba:J.Db, x:192, y:-100}], "cannon-4":[{aa:I.Ka, ba:J.Db, x:240, y:-100}], 
"cannon-5":[{aa:I.Ka, ba:J.Db, x:288, y:-100}], "cannon-6":[{aa:I.Ka, ba:J.Db, x:336, y:-100}], "cannon-7":[{aa:I.Ka, ba:J.Db, x:384, y:-100}], "cannon-8":[{aa:I.Ka, ba:J.Db, x:432, y:-100}], "cannon-R0":[{aa:I.Ka, ba:J.Db, x:550, y:128}], "cannon-R1":[{aa:I.Ka, ba:J.Db, x:550, y:192}], "cannon-R2":[{aa:I.Ka, ba:J.Db, x:550, y:256}], "yayoi-0":[{aa:I.Ka, ba:J.Eb, x:48, y:-100}], "yayoi-1":[{aa:I.Ka, ba:J.Eb, x:96, y:-100}], "yayoi-2":[{aa:I.Ka, ba:J.Eb, x:144, y:-100}], "yayoi-3":[{aa:I.Ka, ba:J.Eb, 
x:192, y:-100}], "yayoi-4":[{aa:I.Ka, ba:J.Eb, x:240, y:-100}], "yayoi-5":[{aa:I.Ka, ba:J.Eb, x:288, y:-100}], "yayoi-6":[{aa:I.Ka, ba:J.Eb, x:336, y:-100}], "yayoi-7":[{aa:I.Ka, ba:J.Eb, x:384, y:-100}], "yayoi-8":[{aa:I.Ka, ba:J.Eb, x:432, y:-100}], "yayoi-R0":[{aa:I.Ka, ba:J.Eb, x:550, y:128}], "yayoi-R1":[{aa:I.Ka, ba:J.Eb, x:550, y:192}], "yayoi-R2":[{aa:I.Ka, ba:J.Eb, x:550, y:256}], "tsubomi-0":[{aa:I.le, ba:J.de, x:96, y:-100}], "tsubomi-1":[{aa:I.le, ba:J.de, x:240, y:-100}], "tsubomi-2":[{aa:I.le, 
ba:J.de, x:384, y:-100}], "tsubomi-R0":[{aa:I.le, ba:J.de, x:580, y:128}], "itsuki-0":[{aa:I.kf, ba:J.cf, x:96, y:-100}], "itsuki-1":[{aa:I.kf, ba:J.cf, x:240, y:-100}], "itsuki-2":[{aa:I.kf, ba:J.cf, x:384, y:-100}], "makoto-0":[{aa:I.Yb, ba:J.Zb, x:48, y:-100}], "makoto-1":[{aa:I.Yb, ba:J.Zb, x:96, y:-100}], "makoto-2":[{aa:I.Yb, ba:J.Zb, x:144, y:-100}], "makoto-3":[{aa:I.Yb, ba:J.Zb, x:192, y:-100}], "makoto-4":[{aa:I.Yb, ba:J.Zb, x:240, y:-100}], "makoto-5":[{aa:I.Yb, ba:J.Zb, x:288, y:-100}], 
"makoto-6":[{aa:I.Yb, ba:J.Zb, x:336, y:-100}], "makoto-7":[{aa:I.Yb, ba:J.Zb, x:384, y:-100}], "makoto-8":[{aa:I.Yb, ba:J.Zb, x:432, y:-100}], "makoto-R0":[{aa:I.Yb, ba:J.Zb, x:580, y:128}], "karen-3-2":[{aa:I.bf, ba:J.af, x:96, y:-100}], "karen-3-5":[{aa:I.bf, ba:J.af, x:240, y:-100}], "karen-3-8":[{aa:I.bf, ba:J.af, x:384, y:-100}], "fighter-m-0":[{aa:I.wc, ba:J.Oc, x:96, y:-192}], "fighter-m-1":[{aa:I.wc, ba:J.Oc, x:144, y:-192}], "fighter-m-2":[{aa:I.wc, ba:J.Oc, x:192, y:-192}], "fighter-m-3":[{aa:I.wc, 
ba:J.Oc, x:240, y:-192}], "fighter-m-4":[{aa:I.wc, ba:J.Oc, x:288, y:-192}], "fighter-m-5":[{aa:I.wc, ba:J.Oc, x:336, y:-192}], "fighter-m-6":[{aa:I.wc, ba:J.Oc, x:384, y:-192}], "fighter-m4-0":[{aa:I.wc, ba:J.cj, x:96, y:-192}], "tsukikage-r":[{aa:I.qb, ba:J.Qc(700), x:624, y:256}, {aa:I.qb, ba:J.Qc(600), x:720, y:256}, {aa:I.qb, ba:J.Qc(500), x:576, y:320}, {aa:I.qb, ba:J.Qc(400), x:672, y:320}, {aa:I.qb, ba:J.Qc(300), x:768, y:320}, {aa:I.qb, ba:J.Qc(200), x:624, y:384}, {aa:I.qb, ba:J.Qc(100), 
x:720, y:384}], "tsukikage-l":[{aa:I.qb, ba:J.Pc(700), x:-144, y:384}, {aa:I.qb, ba:J.Pc(600), x:-240, y:384}, {aa:I.qb, ba:J.Pc(500), x:-96, y:320}, {aa:I.qb, ba:J.Pc(400), x:-192, y:320}, {aa:I.qb, ba:J.Pc(300), x:-288, y:320}, {aa:I.qb, ba:J.Pc(200), x:-144, y:256}, {aa:I.qb, ba:J.Pc(100), x:-240, y:256}], "komachi-0":[{aa:I.oc, ba:J.Tg, x:144, y:-192}], "komachi-1":[{aa:I.oc, ba:J.Tg, x:336, y:-192}], "komachi2-0":[{aa:I.oc, ba:J.ie, x:144, y:-192}], "komachi2-1":[{aa:I.oc, ba:J.ie, x:336, y:-192}], 
"komachi3-0":[{aa:I.oc, ba:J.ie, x:144, y:-192}], "komachi3-1":[{aa:I.oc, ba:J.ie, x:336, y:-192}], "komachi4-0":[{aa:I.oc, ba:J.lf, x:144, y:-192}], "komachi4-1":[{aa:I.oc, ba:J.lf, x:336, y:-192}], "komachi4-2":[{aa:I.oc, ba:J.lf, x:240, y:-192}], "nozomi4-0":[{aa:I.xf, ba:J.yf, x:144, y:-192}], "nozomi4-1":[{aa:I.xf, ba:J.yf, x:240, y:-192}], "nozomi4-2":[{aa:I.xf, ba:J.yf, x:336, y:-192}], "akane-1":[{aa:I.Ha, ba:J.Ha, x:144, y:130}, {aa:I.Ha, ba:J.Ha, x:192, y:80}, {aa:I.Ha, ba:J.Ha, x:240, 
y:140}, {aa:I.Ha, ba:J.Ha, x:288, y:80}, {aa:I.Ha, ba:J.Ha, x:336, y:130}], "akane-2":[{aa:I.Ha, ba:J.Ha, x:384, y:160}, {aa:I.Ha, ba:J.Ha, x:288, y:120}, {aa:I.Ha, ba:J.Ha, x:288, y:80}, {aa:I.Ha, ba:J.Ha, x:384, y:40}], "akane-3":[{aa:I.Ha, ba:J.Ha, x:96, y:160}, {aa:I.Ha, ba:J.Ha, x:144, y:120}, {aa:I.Ha, ba:J.Ha, x:144, y:80}, {aa:I.Ha, ba:J.Ha, x:96, y:40}], "hoshizora_y-1":[{aa:I.Ph, ba:J.wk, x:-256, y:140}], "hoshizora_y-2":[{aa:I.Ph, ba:J.xk, x:608, y:60}], "hoshizora_t-1":[{aa:I.Me, ba:J.Me, 
x:-128, y:60}], "hoshizora_t-2":[{aa:I.Me, ba:J.Me, x:608, y:60}], yotsuba:[{aa:I.Ye, ba:J.Ye, x:240, y:-64}], erika:[{aa:I.Ad, ba:J.Ad, x:240, y:-100}], yukishiro:[{aa:I.hf, ba:J.hf, x:240, y:-100}], misumi:[{aa:I.tf, ba:[J.dj, J.uf, J.vf], x:240, y:-100, Sb:j}], mai:[{aa:I.pf, ba:J.pf, x:780, y:128}], hyuga:[{aa:I.qj, ba:[J.Af, J.Bf, J.Cf], x:240, y:-100, Sb:j}], higashi:[{aa:I.Df, ba:J.Df, x:780, y:128}], momozono:[{aa:I.Zi, ba:[J.mf, J.nf, J.of], x:240, y:-100, Sb:j}], rikka:[{aa:I.zf, ba:J.zf, 
x:240, y:-100}], mana:[{aa:I.bj, ba:[J.qf, J.rf, J.sf], x:240, y:-100, Sb:j}]};
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, g, m, p) {
    return c.action([c.fire(c.direction(b, "absolute"), f, g || w, m, p), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || w, m, p)])])
  }
  function d(a, b, c, d, g) {
    return function(m) {
      return f(a, b, c, m, d, g, i, i)
    }
  }
  function f(a, b, d, f, g, m, p, q) {
    return c.action([c.fire(c.direction(b), f, g || w, m, p, q), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, g || w, m, p, q)])])
  }
  function g(a) {
    return c.fire(c.direction(0), a || q, D)
  }
  function p(a) {
    return c.fire(c.direction(0), a || q, w)
  }
  function s(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function z(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function A(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function q(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function u(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function M(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function m(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function O(a) {
    return c.Da(a, {frame:3, Sd:j})
  }
  function Q(a) {
    return c.Da(a, {frame:2, Sd:j})
  }
  function F(a) {
    return c.Da(a, {visible:l})
  }
  function C(a) {
    return c.Da(a, {frame:4, Rb:j})
  }
  function K(a) {
    return c.Da(a, {frame:3})
  }
  function w(a) {
    return c.Da(a, {frame:1})
  }
  function v(a) {
    return c.Da(a, {frame:2})
  }
  function D(a) {
    return c.Da(a, {frame:0})
  }
  function H(a) {
    return c.Da(a, {frame:3, Rb:j})
  }
  function L(a) {
    return c.Da(a, {frame:1, Rb:j})
  }
  function G(a) {
    return c.Da(a, {frame:2, Rb:j})
  }
  function E(a) {
    return c.Da(a, {frame:0, Rb:j})
  }
  gls2.ha = {};
  var c = t.Fa;
  gls2.ha["basic0-0"] = new t.la({top:c.action([p])});
  gls2.ha["basic0-1"] = new t.la({top:c.action([b(A, -0.01, 8, d(3, -15, 15))])});
  gls2.ha["basic1-0"] = new t.la({top:c.action([c.repeat(999, [m(40), p(q)])])});
  gls2.ha["basic1-1"] = new t.la({top:c.action([c.repeat(999, [m(20), p(q)])])});
  gls2.ha["basic1-2"] = new t.la({top:c.action([m("10+$rand*20"), f(3, -20, 20, q)])});
  gls2.ha["basic2-0"] = new t.la({top:c.action([c.repeat(999, [m(50), p(q)])])});
  gls2.ha["basic3-0"] = new t.la({top:c.action([c.wait(20), c.repeat(999, [m(100), b(q, 0.1, 3, g)])])});
  gls2.ha["basic3-1"] = new t.la({top:c.action([c.wait(20), c.repeat(999, [m(40), b(q, 0.1, 3, g)])])});
  gls2.ha["bukky-4-0"] = new t.la({top0:c.action([m(30), c.repeat(999, [c.fire(c.direction(-40), q, G), c.repeat(3, [c.fire(c.direction(20, "sequence"), q, G), c.fire(c.direction(20, "sequence"), q, G), c.fire(c.direction(20, "sequence"), q, G), c.fire(c.direction(20, "sequence"), q, G), c.fire(c.direction(-80, "sequence"), q, G), m(5)]), m(70)])]), top1:c.action([m(20), c.fire(c.direction(180, "absolute"), r, L), c.repeat(999, [c.fire(c.direction(15, "sequence"), r, L), c.fire(c.direction(15, "sequence"), 
  r, L), c.fire(c.direction(15, "sequence"), r, L), c.fire(c.direction(15, "sequence"), r, L), c.fire(c.direction(15, "sequence"), r, L), c.fire(c.direction(15, "sequence"), r, L), c.fire(c.direction(15, "sequence"), r, L), c.fire(c.direction(15, "sequence"), r, L), c.fire(c.direction(15, "sequence"), r, L), c.fire(c.direction(-90, "sequence"), r, L), m(5)])])});
  gls2.ha["cannon2-0"] = new t.la({top0:c.action([c.repeat(999, [m(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", r), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", r), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", r), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", r), m(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", q), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", q), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", q), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", q)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), u, C), c.fire(c.direction(" 90+$loop.index*10", "absolute"), u, C), c.fire(c.direction("180+$loop.index*10", "absolute"), u, C), c.fire(c.direction("270+$loop.index*10", "absolute"), u, C), c.fire(c.direction("  0-$loop.index*10", "absolute"), u, C), c.fire(c.direction(" 90-$loop.index*10", "absolute"), u, C), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), u, C), c.fire(c.direction("270-$loop.index*10", "absolute"), u, C), m(10)])]), top2:c.action([c.repeat(999, [m(43), f(30, 0, 348, q, D)])])});
  gls2.ha["cannon2-3"] = new t.la({top0:c.action([c.repeat(999, [c.Ma("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), F(c.wa("ivs0", "$d")))]), m(10), c.fire(c.direction(39, "sequence"), c.speed(1), F(c.wa("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.Ma("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), F(c.wa("ivs1", "$d")))]), m(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), F(c.wa("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), r, D), c.Va()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), r, function(a) {
    return c.Da(a, {frame:7, Rb:j})
  }), c.fire(c.direction("$1+5", "relative"), r, function(a) {
    return c.Da(a, {frame:6, Rb:j})
  }), c.Va()])});
  gls2.ha["cannon3-0"] = new t.la({top0:c.action([c.repeat(999, [m(80), b(r, 0.01, 5, d(5, -30, 30, D, c.offsetX(-60))), b(r, 0.01, 5, d(5, -30, 30, D)), b(r, 0.01, 5, d(5, -30, 30, D, c.offsetX(60)))])])});
  gls2.ha["cannon4-0"] = new t.la({top0:c.action([m(20), c.repeat(999, [c.fire(r, G), c.repeat(8, [m(10), c.Ma("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), r, G), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), r, G)])]), m(120)])])});
  gls2.ha["cannon5-0"] = new t.la({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), s, F(c.wa("b"))), c.repeat(11, [m(5), c.fire(c.direction(10, "sequence"), s, F(c.wa("b")))]), m(60)])]), b:c.action([c.wait(5), c.ve(c.speed(0), 0), b(r, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, w)
  }), c.Va])});
  gls2.ha["yuri-4"] = new t.la({top:c.action([m(60), c.repeat(7, [a(7, 120, 240, u, D), m(8)])])});
  gls2.ha["kurokawa-1"] = new t.la({top0:c.action([c.repeat(999, [b(q, -0.01, 4, function(a) {
    return f(4, -45, 45, a, v, c.offsetX(-45), c.ua(j))
  }), b(q, -0.01, 4, function(a) {
    return f(4, -45, 45, a, v, c.offsetX(45), c.ua(j))
  }), m(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), q, H, c.offsetX(-45), c.ua(j)), m(45), c.fire(c.direction(0), q, H, c.offsetX(45), c.ua(j)), m(45)])])});
  gls2.ha["kurokawa-4"] = new t.la({top0:c.action([c.repeat(999, [b(q, -0.01, 4, function(a) {
    return f(4, -45, 45, a, v, c.offsetX(-45), c.ua(j))
  }), b(q, -0.01, 4, function(a) {
    return f(4, -45, 45, a, v, c.offsetX(45), c.ua(j))
  }), m(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), q, H, c.offsetX(-45), c.ua(j)), m(45), c.fire(c.direction(0), q, H, c.offsetX(45), c.ua(j)), m(45)])])});
  gls2.ha["komachi-1"] = new t.la({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), u(1), w, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(-40)), c.repeat(57, [m(8), c.fire(c.direction(-720 / 57, "sequence"), u(1), w, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, 
  [c.fire(c.direction(-210, "absolute"), u(1), w, c.offsetX(40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(40)), c.repeat(57, [m(8), c.fire(c.direction(720 / 57, "sequence"), u(1), w, c.offsetX(40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(40)), c.fire(c.direction(120, "sequence"), u(1), w, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), q(0), E, c.offsetX(-110), c.ua(j)), c.repeat(6, 
  [c.wait(1), c.fire(c.direction(0, "sequence"), q(0), E, c.offsetX(-110), c.ua(j))]), m(10), c.fire(c.direction(0), q(0), E, c.offsetX(110), c.ua(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), q(0), E, c.offsetX(110), c.ua(j))]), m(10)])])});
  gls2.ha["komachi-2"] = new t.la({top0:c.action([c.repeat(999, [b(q, -0.01, 4, function(a) {
    return c.action([f(4, -45, 45, a, v, c.offsetX(-45), c.ua(j)), m(4)])
  }), b(q, -0.01, 4, function(a) {
    return c.action([m(4), f(4, -45, 45, a, v, c.offsetX(45), c.ua(j))])
  }), m(90)])]), top1:c.action([c.repeat(999, [m(45), b(r, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, L)]), m(1)])
  }), m(180)])])});
  gls2.ha["komachi-3"] = new t.la({top0:c.action([c.repeat(999, [b(q, -0.01, 4, function(a) {
    return c.action([f(6, -60, 60, a, v, c.offsetX(-45), c.ua(j)), m(4)])
  }), b(q, -0.01, 4, function(a) {
    return c.action([m(4), f(6, -60, 60, a, v, c.offsetX(45), c.ua(j))])
  }), m(90)])]), top1:c.action([c.repeat(999, [m(45), b(r, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, L)]), m(1)])
  }), m(180)])])});
  gls2.ha["komachi-4"] = new t.la({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), q, K, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), q, K, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), q, K, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), q, K, c.offsetX(45)), m(4)]), m(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), q(5), E, c.offsetX(-110), c.ua(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), q(5), E, c.offsetX(-110), c.ua(j))]), m(30), c.fire(c.direction(0), q(5), E, c.offsetX(110), c.ua(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), q(5), E, c.offsetX(110), c.ua(j))]), m(30)])])});
  gls2.ha["nozomi-4"] = new t.la({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.Ma("c", "2+$loop.index"), f("$c", "-4-($c-2)*4", "4+($c-2)*4", M("(560-$c*40)*0.03"), H, c.offsetY(-50))]), m(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), F(c.wa("noop"))), b(q, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, D, c.offsetX(-50)), c.wait(3)])
  }), m(90), c.fire(c.direction(-40), F(c.wa("noop"))), b(q, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, D, c.offsetX(50)), c.wait(3)])
  }), m(90)])]), noop:c.action([c.wait(1), c.Va])});
  gls2.ha.akane = new t.la({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [m(60), f(1, 1, 1, u, v, c.offsetX(-16), c.offsetY(6), c.ua(j)), f(1, 1, 1, u, v, c.offsetX(16), c.offsetY(6), c.ua(j))]), m(120)])])});
  gls2.ha.miyuki_y = new t.la({top:c.action([c.wait("40"), c.repeat(999, [m(30), f(3, -45, 45, u, v, c.offsetX(-64), c.offsetY(16), c.ua(j)), f(3, -45, 45, u, v, c.offsetX(0), c.offsetY(16), c.ua(j)), f(3, -45, 45, u, v, c.offsetX(16), c.offsetY(16), c.ua(j)), f(3, -45, 45, u, v, c.offsetX(32), c.offsetY(16), c.ua(j)), b(u, 0.001, 5, function(a) {
    return c.action([f(3, "-45", "+45", a, G, c.offsetX(0), c.offsetY(0))])
  })])])});
  gls2.ha.miyuki_t = new t.la({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(3, [a(3, -20, 20, r, c.Da({frame:2}), 0, 0), m(30)]), m(60)])])});
  gls2.ha.alice = new t.la({top0:c.action([c.repeat(999, [a(8, 0, 180, u, G), a(8, 0, -180, u, G), m(60), a(9, 0, 180, u, H), a(9, 0, -180, u, H), m(60)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(5, "sequence"), u, E, c.offsetX(0), c.ua(j)), m(10)])])});
  gls2.ha.aliceLeaf = new t.la({top:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(10, "sequence"), q(5), C, c.offsetX(0), c.ua(j)), m(10)])])});
  gls2.ha["honoka-1"] = new t.la({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, r, C, c.offsetX(0), c.offsetY(30)), m(30), f(5, -40, 40, u, C, c.offsetX(0), c.offsetY(30)), m(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, r(0.6), w), f(3, -3, 3, r(1), w), f(4, -4, 4, r(1.4), w), f(5, -5, 5, r(1.8), w), m(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, u, E, c.offsetX(-110), c.offsetY(-70)), m(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, u, E, c.offsetX(110), 
  c.offsetY(-70)), m(30)])])});
  gls2.ha["nagisa-1-1"] = new t.la({top0:c.action([m(90), c.repeat(3, [c.Ma("way", "5 + $loop.index*6"), b(q, 0.01, "3 + $loop.index*2", function(a) {
    return c.action([f("$way", -110, 110, a, w, c.offsetX(-190), c.offsetY(-20)), f("$way", -110, 110, a, w, c.offsetX(190), c.offsetY(-20)), c.wait(10)])
  }), m(60)]), m(60)])});
  gls2.ha["nagisa-1-2"] = new t.la({top0:c.action([c.repeat(12, [f(15, -90, 90, u, w), m(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [f(5, -65, -55, r, E, c.offsetX(-190), c.offsetY(-20)), f(5, -35, -25, r, E, c.offsetX(-190), c.offsetY(-20)), f(5, -5, 5, r, E, c.offsetX(-190), c.offsetY(-20)), f(5, 25, 35, r, E, c.offsetX(-190), c.offsetY(-20)), f(5, 55, 65, r, E, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), m(60), c.repeat(3, [f(5, -65, -55, r, E, c.offsetX(190), c.offsetY(-20)), f(5, -35, 
  -25, r, E, c.offsetX(190), c.offsetY(-20)), f(5, -5, 5, r, E, c.offsetX(190), c.offsetY(-20)), f(5, 25, 35, r, E, c.offsetX(190), c.offsetY(-20)), f(5, 55, 65, r, E, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), m(60)])])});
  gls2.ha["nagisa-1-3"] = new t.la({top0:c.action([m(60), c.repeat(3, [c.fire(c.direction(-60), r, v, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [m(15), c.fire(c.direction(6, "sequence"), r, v, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([m(80), c.repeat(3, [c.fire(c.direction(60), r, v, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [m(15), c.fire(c.direction(-6, "sequence"), r, v, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [f(5, -60, -40, r, C, c.offsetX(-190), 
  c.offsetY(-20)), f(5, -20, -10, r, C, c.offsetX(-190), c.offsetY(-20)), f(5, 10, 20, r, C, c.offsetX(-190), c.offsetY(-20)), f(5, 40, 60, r, C, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), m(60), c.repeat(3, [f(5, -60, -40, r, C, c.offsetX(190), c.offsetY(-20)), f(5, -20, -10, r, C, c.offsetX(190), c.offsetY(-20)), f(5, 10, 20, r, C, c.offsetX(190), c.offsetY(-20)), f(5, 40, 60, r, C, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), m(60)])])});
  gls2.ha["nagisa-2-1"] = new t.la({top0:c.action([m(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", u, D, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", u, D, c.offsetX(190), c.offsetY(-20)), m(10)])]), top1:c.action([m(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, H), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, H), m(12)])])});
  gls2.ha["nagisa-2-2"] = new t.la({top0:c.action([m(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", q, H), m(12)])]), top1:c.action([m(120), c.repeat(6, [a(9, 150, 130, u(0.8), w), a(9, 172, 188, u(0.8), w), a(9, 210, 230, u(0.8), w), m(30), a(9, 170, 150, u(0.8), w), a(9, 190, 210, u(0.8), w), m(30)])])});
  gls2.ha["nagisa-2-3"] = new t.la({top:c.action([m(120), c.repeat(12, [a(23, 0, 360, u, C, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, u, C), a(23, 0, 360, u, C, c.offsetX(190), c.offsetY(-20)), m(30)])])});
  gls2.ha["nagisa-3-1"] = new t.la({top0:c.action([m(50), c.repeat(999, [b(q, 0.001, 5, function(a) {
    return c.action([f(41, "-180", "+180", a, G, c.offsetX(-190), c.offsetY(-20)), f(41, "-180", "+180", a, G, c.offsetX(190), c.offsetY(-20))])
  }), m(50)])]), top1:c.action([c.repeat(999, [f(2, -2, 0, A, w), m(10), f(2, 0, 2, A, w), m(150)])])});
  gls2.ha["mai-1"] = new t.la({top0:c.action([m(50), c.repeat(50, [c.Ma("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", s, F(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, D), c.Va]))), c.Ma("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", s, F(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, D), c.Va]))), m(8)])]), top1:c.action([m(50), c.repeat(12, [a(5, -50, 50, s, F(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, 
  H), c.Va]))), a(5, -230, -130, s, F(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, H), c.Va]))), m(16), a(6, -50, 50, s, F(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, H), c.Va]))), a(6, -230, -130, s, F(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, H), c.Va]))), m(16)])])});
  gls2.ha["mai-2"] = new t.la({top:c.action([m(50), c.repeat(15, [c.fire(c.direction(-10), G(c.wa("fireChild", "$loop.index*10"))), m(8)])]), fireChild:c.action([m("40+$1"), b(r, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, v)
  }), c.Va])});
  gls2.ha["saki-1-1"] = new t.la({top:c.action([m(100), c.repeat(3, [c.wa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Ma("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", q, D), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", q, D), m(12)]), c.repeat("$2", [f(9, -20, 20, A, K)])])});
  gls2.ha["saki-1-2"] = new t.la({top:c.action([m(100), c.repeat(5, [c.Ma("way", "5+$loop.index*2"), c.repeat(6, [c.Ma("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, q("$s"), H, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), m(90)])])});
  gls2.ha["saki-1-3"] = new t.la({top:c.action([c.Ma("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), H(c.wa("seed"))), m(8)]), m(60)]), seed:c.action([c.wait(10), c.ve(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, r, K), c.Va])});
  gls2.ha["saki-2-1"] = new t.la({top0:c.action([m(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", r, D, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", r, D, c.offsetX(40)), m(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", r, D, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", r, D, c.offsetX(40)), m(60)])]), top1:c.action([m(100), c.repeat(4, [c.repeat(7, [c.Ma("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  z, K), c.repeat(4, [c.Ma("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", z("$w*-1.0"), K)])]), m(120)])])});
  gls2.ha["saki-2-2"] = new t.la({top:c.action([m(60), c.Ma("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), G(c.wa("seed"))), m(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), G(c.wa("seed"))), m(8)]), m(60)]), seed:c.action([c.wait(10), c.ve(c.speed(0), "10 + $rand*15"), c.wait(65), b(q, 0.14, 6, function(a) {
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
  }), m(2), c.Va])});
  gls2.ha["saki-2-3"] = new t.la({top:c.action([m(60), c.Ma("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), H(c.wa("seed"))), m(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), H(c.wa("seed"))), m(8)]), m(60)]), seed:c.action([c.wait(10), c.ve(c.speed(0), "10 + $rand*20"), c.wait(65), b(q, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, K)])
  }), m(2), c.Va])});
  gls2.ha["saki-3-1"] = new t.la({top:c.action([c.fire(c.direction(180, "absolute"), M, G(c.wa("seed"))), m(60), c.fire(c.direction(180, "absolute"), M, G(c.wa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), M, G(c.wa("seed")), c.offsetX(80)), m(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), q, r, D), c.repeat(999, [c.fire(c.direction(90, "sequence"), r, D), c.fire(c.direction(90, "sequence"), r, D), c.fire(c.direction(90, "sequence"), r, D), m(10), c.fire(c.direction(100, 
  "sequence"), r, D)])])});
  gls2.ha["saki-3-2"] = new t.la({top:c.action([c.fire(c.direction(180, "absolute"), M, H(c.wa("seed"))), m(60), c.fire(c.direction(180, "absolute"), M, H(c.wa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), M, H(c.wa("seed")), c.offsetX(80)), m(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), q, r, w), c.repeat(999, [c.fire(c.direction(90, "sequence"), r, w), c.fire(c.direction(90, "sequence"), r, w), c.fire(c.direction(90, "sequence"), r, w), m(10), c.fire(c.direction(80, 
  "sequence"), r, w)])])});
  gls2.ha["rikka-1"] = new t.la({top:c.action([c.repeat(5, [c.Ma("s", "$loop.index*1.5"), m(30), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, q("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, q("$s"), c.offsetX(90), c.offsetY(-20)), m(3), f(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, v, q("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, v, q("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, v, q("$s"), c.offsetX(90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, v, q("$s"), c.offsetX(90), c.offsetY(-20)), m(3), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, q("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, q("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.ha["rikka-2"] = new t.la({top0:c.action([c.repeat(10, [c.fire(G(c.wa("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(G(c.wa("snow")), c.offsetX(90), c.offsetY(-20)), m(8)]), m(10)]), top1:c.action([c.repeat(35, [c.Ma("d", "$loop.index*-(20+$ex*10)"), c.Ma("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), F(c.wa("ivs", "$d", "$s")))]), m(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), F(c.wa("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.Ma("d", "$loop.index*+(20+$ex*10)"), c.Ma("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), F(c.wa("ivs", "$d", "$s")))]), m(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), F(c.wa("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.Ma("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), F(c.wa("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), F(c.wa("snowArm")))])]), c.Va]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), A, E), c.Va]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), q("$2"), Q), c.fire(c.direction("$1+1", "relative"), q("$2"), Q), c.Va()])});
  gls2.ha["rikka-3"] = new t.la({top0:c.action([m(40), c.fire(c.direction(-10), F(c.wa("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), M("$loop.index*0.5"), v, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), v, c.offsetX(-90), c.offsetY(-20))]), m(5)]), m(40)]), top1:c.action([m(40), c.fire(c.direction(-10), F(c.wa("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), M("$loop.index*0.5"), v, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), v, c.offsetX(90), c.offsetY(-20))]), m(5)]), m(40)]), dummy:c.action([c.wait(1), c.Va])});
  gls2.ha["mana-1-1"] = new t.la({top0:c.action([c.wa("winder", -1)]), top1:c.action([c.wa("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), A, O, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [m(15), c.Ma("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), A, O, c.offsetX("-145*$1"), c.offsetY(-5))])]), c.repeat(20, [m(15), c.repeat(8, [c.fire(c.direction("(-190+50*3+$loop.index*30)*$1"), A, O, c.offsetX("-145*$1"), 
  c.offsetY(-5))])])]), top2:c.action([c.wait(60), m(400), c.repeat(5, [c.Ma("i", "$loop.index"), b(q(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*-3"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-2"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-1"), a, K, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)* 0"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+1"), a, K, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+2"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+3"), a, 
    v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-3"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-2"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*-1"), a, K, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)* 0"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+1"), a, K, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+2"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*+3"), 
    a, v, c.offsetX(145), c.offsetY(-50)), m(5)])
  }), m(90)])])});
  gls2.ha["mana-1-2"] = new t.la({top:c.action([])});
  gls2.ha["mana-1-3"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-2-1"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-2-2"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-2-3"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-3-1"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-3-2"] = gls2.ha["mana-1-1"];
  gls2.ha["setsuna-1"] = new t.la({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, r, C, c.offsetX(0), c.offsetY(30)), m(30), f(5, -40, 40, u, C, c.offsetX(0), c.offsetY(30)), m(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, r(0.6), w), f(3, -3, 3, r(1), w), f(4, -4, 4, r(1.4), w), f(5, -5, 5, r(1.8), w), m(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, u, E, c.offsetX(-110), c.offsetY(-70)), m(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, u, E, c.offsetX(110), 
  c.offsetY(-70)), m(30)])])});
  gls2.ha["love-1-1"] = new t.la({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, r, C, c.offsetX(0), c.offsetY(30)), m(30), f(5, -40, 40, u, C, c.offsetX(0), c.offsetY(30)), m(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, r(0.6), w), f(3, -3, 3, r(1), w), f(4, -4, 4, r(1.4), w), f(5, -5, 5, r(1.8), w), m(110)])])});
  gls2.ha.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      P.push(gls2.La())
    }
    a = gls2.ha.we = tm.tb.Nc.Jd;
    a.cg = function(a) {
      return!(a instanceof gls2.La) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.lh = function(a) {
      var b = P.shift(0);
      if(b) {
        return b.ra = gls2.ja.hi, N.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.Rb ? (b.scaleX = 1, b.scaleY = 1, b.Lc = l) : (a.Sd ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Kb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.Lc = j), b.visible = a.visible === l ? l : j, b.Rb = !!a.Rb, b.Sd = !!a.Sd, b.Kb = !!a.Kb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.ph = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.bd = gls2.ja.ji;
    t.Na.Jb.$rank = 0;
    t.Na.Jb.$hyperOff = 1
  };
  gls2.ha.erase = function(a, b, c) {
    for(var d = [].concat(N), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var m = gls2.bh(!!b);
        m.setPosition(d[f].x, d[f].y);
        c && (m.Xc = j)
      }
      d[f].Ea()
    }
  };
  gls2.ha.Hd = function() {
    for(var a = [].concat(N), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.La = tm.createClass({superClass:tm.display.Sprite, ra:0, Rb:l, Sd:l, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      P.push(this);
      var a = N.indexOf(this);
      -1 !== a && N.splice(a, 1)
    })
  }, update:function() {
    this.Rb && (this.rotation += 15)
  }, Ea:function() {
    var a = gls2.La.Ld().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.La.Ld = function() {
    gls2.La.Ld.Pf === k && (gls2.La.Ld.Pf = gls2.Ua(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.La.Ld.Pf.clone()
  };
  gls2.La.Ld.Pf = k;
  var P = [], N = gls2.La.kb = []
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

