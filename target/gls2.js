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
var G = {Ki:this};
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
    this.fb = [];
    this.Ee = [];
    this.Ne = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof G.Lb ? this.fb.push(a[b]) : a[b] instanceof G.Oa ? this.Ee.push(a[b]) : a[b] instanceof G.od && this.Ne.push(a[b]))
      }
      a = 0;
      for(b = this.fb.length;a < b;a++) {
        this.fb[a].Ub(this)
      }
      a = 0;
      for(b = this.Ee.length;a < b;a++) {
        this.Ee[a].Ub(this)
      }
      a = 0;
      for(b = this.Ne.length;a < b;a++) {
        this.Ne[a].Ub(this)
      }
    }
  };
  G.ka.prototype.Lh = function(a) {
    return b(this.fb, a)
  };
  G.ka.prototype.wk = function() {
    for(var a = [], b = 0, f = this.fb.length;b < f;b++) {
      var h = this.fb[b];
      h.label && 0 === h.label.indexOf("top") && (a[a.length] = h.label)
    }
    return a
  };
  G.ka.prototype.kk = function(a) {
    var b;
    if(b = this.Lh(a)) {
      return b
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  G.ka.prototype.lk = function(a) {
    return b(this.Ee, a)
  };
  G.ka.prototype.mk = function(a) {
    var b;
    if(b = this.lk(a)) {
      return b
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  G.ka.prototype.nk = function(a) {
    return b(this.Ne, a)
  };
  G.ka.prototype.ok = function(a) {
    var b;
    if(b = this.nk(a)) {
      return b
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  G.Oa = function() {
    this.root = this.label = l;
    this.direction = new G.uc(0);
    this.speed = new G.yc(1);
    this.fb = [];
    this.Va = {};
    this.Aa = {}
  };
  G.Oa.prototype.clone = function(a) {
    var b = new G.Oa;
    b.label = this.label;
    b.root = this.root;
    b.fb = this.fb;
    b.direction = new G.uc(a.Za(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new G.yc(a.Za(this.speed.value));
    b.speed.type = this.speed.type;
    b.Va = this.Va;
    b.Aa = a.Aa;
    return b
  };
  G.Oa.prototype.Ub = function(a) {
    this.root = a;
    for(var b = 0, f = this.fb.length;b < f;b++) {
      this.fb[b].Ub(a)
    }
  };
  G.ne = function(a) {
    this.root = l;
    this.label = a;
    this.ab = []
  };
  G.ne.prototype.clone = function(a) {
    var b = a.Aa;
    a.Aa = a.Rf(this.ab);
    var f = this.root.mk(this.label).clone(a);
    a.Aa = b;
    return f
  };
  G.ne.prototype.Ub = function(a) {
    this.root = a
  };
  G.eb = function() {
    this.Ab = ""
  };
  G.eb.prototype.Ub = function(a) {
    this.root = a
  };
  G.Lb = function() {
    this.Ab = "action";
    this.root = this.label = l;
    this.ac = [];
    this.ab = []
  };
  G.Lb.prototype = new G.eb;
  G.Lb.prototype.Ub = function(a) {
    this.root = a;
    for(var b = 0, f = this.ac.length;b < f;b++) {
      this.ac[b].Ub(a)
    }
  };
  G.Lb.prototype.clone = function() {
    var a = new G.Lb;
    a.label = this.label;
    a.root = this.root;
    a.ac = this.ac;
    return a
  };
  G.md = function(a) {
    this.Ab = "actionRef";
    this.label = a;
    this.root = l;
    this.ab = []
  };
  G.md.prototype = new G.eb;
  G.md.prototype.clone = function() {
    var a = new G.Lb;
    a.root = this.root;
    a.ac.push(this);
    return a
  };
  G.od = function() {
    this.Ab = "fire";
    this.Ha = this.speed = this.direction = this.root = this.label = l;
    this.Va = new G.re
  };
  G.od.prototype = new G.eb;
  G.od.prototype.Ub = function(a) {
    this.root = a;
    this.Ha && this.Ha.Ub(a)
  };
  G.nf = function(a) {
    this.Ab = "fireRef";
    this.label = a;
    this.ab = []
  };
  G.nf.prototype = new G.eb;
  G.pe = function() {
    this.Ab = "changeDirection";
    this.direction = new G.uc;
    this.vb = 0
  };
  G.pe.prototype = new G.eb;
  G.qe = function() {
    this.Ab = "changeSpeed";
    this.speed = new G.yc;
    this.vb = 0
  };
  G.qe.prototype = new G.eb;
  G.me = function() {
    this.Ab = "accel";
    this.pc = new G.rf;
    this.tc = new G.Pf;
    this.vb = 0
  };
  G.me.prototype = new G.eb;
  G.xe = function(a) {
    this.Ab = "wait";
    this.value = a || 0
  };
  G.xe.prototype = new G.eb;
  G.Of = function() {
    this.Ab = "vanish"
  };
  G.Of.prototype = new G.eb;
  G.ve = function() {
    this.Ab = "repeat";
    this.li = 0;
    this.action = l;
    this.ab = []
  };
  G.ve.prototype = new G.eb;
  G.ve.prototype.Ub = function(a) {
    this.root = a;
    this.action && this.action.Ub(a)
  };
  G.hf = function(a, b) {
    this.Ab = "bind";
    this.ll = a;
    this.jk = b
  };
  G.hf.prototype = new G.eb;
  G.Ff = function(a, b) {
    this.Ab = "notify";
    this.gk = a;
    this.ab = b || l
  };
  G.Ff.prototype = new G.eb;
  G.Gi = new G.eb;
  G.uc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  G.yc = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  G.rf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  G.Pf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  G.re = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.va = j;
    a.va !== i && (this.va = !!a.va)
  };
  G.lh = function(a) {
    this.value = a || 0
  };
  G.mh = function(a) {
    this.value = a || 0
  };
  G.Wg = function(a) {
    this.value = !!a
  }
})();
G.Ra = function(b) {
  this.vh = b;
  this.ye = [];
  this.Ic = -1;
  this.ob = l;
  this.Aa = {}
};
G.Ra.prototype.next = function() {
  this.Ic += 1;
  if(this.ob !== l) {
    var b = this.ob.ac[this.Ic];
    if(b !== i) {
      if(b instanceof G.Lb) {
        return this.Md(), this.ob = b, this.Aa = this.Qf(), this.next()
      }
      if(b instanceof G.md) {
        return this.Md(), this.ob = this.vh.kk(b.label), this.Aa = this.Rf(b.ab), this.next()
      }
      if(b instanceof G.ve) {
        return this.Aa.Dd = 0, this.Aa.xg = this.Za(b.li) | 0, this.Md(), this.ob = b.action.clone(), this.Aa = this.Qf(), this.next()
      }
      if(b instanceof G.od) {
        var a = new G.od;
        a.Ha = b.Ha.clone(this);
        b.direction !== l && (a.direction = new G.uc(this.Za(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new G.yc(this.Za(b.speed.value)), a.speed.type = b.speed.type);
        a.Va = new G.re;
        a.Va.offsetX = this.Za(b.Va.offsetX);
        a.Va.offsetY = this.Za(b.Va.offsetY);
        a.Va.va = b.Va.va;
        return a
      }
      return b instanceof G.nf ? (this.Md(), this.ob = new G.Lb, this.ob.ac = [this.vh.ok(b.label)], this.Aa = this.Rf(b.ab), this.next()) : b instanceof G.pe ? (a = new G.pe, a.direction.type = b.direction.type, a.direction.value = this.Za(b.direction.value), a.vb = this.Za(b.vb), a) : b instanceof G.qe ? (a = new G.qe, a.speed.type = b.speed.type, a.speed.value = this.Za(b.speed.value), a.vb = this.Za(b.vb), a) : b instanceof G.me ? (a = new G.me, a.pc.type = b.pc.type, a.pc.value = this.Za(b.pc.value), 
      a.tc.type = b.tc.type, a.tc.value = this.Za(b.tc.value), a.vb = this.Za(b.vb), a) : b instanceof G.xe ? new G.xe(this.Za(b.value)) : b instanceof G.Of ? b : b instanceof G.hf ? (this.Aa["$" + b.ll] = this.Za(b.jk), G.Gi) : b instanceof G.Ff ? b : l
    }
    this.Uj();
    if(this.ob === l) {
      return l
    }
    if((b = this.ob.ac[this.Ic]) && "repeat" == b.Ab) {
      this.Aa.Dd++, this.Aa.Dd < this.Aa.xg && (this.Md(), this.ob = b.action.clone(), this.Aa = this.Qf())
    }
    return this.next()
  }
  return l
};
G.Ra.prototype.Md = function() {
  this.ye.push({action:this.ob, cursor:this.Ic, scope:this.Aa});
  this.Ic = -1
};
G.Ra.prototype.Uj = function() {
  var b = this.ye.pop();
  b ? (this.Ic = b.cursor, this.ob = b.action, this.Aa = b.scope) : (this.Ic = -1, this.ob = l, this.Aa = {})
};
G.Ra.prototype.Za = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Aa[b]) || (a = G.Ra.Qb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in G.Ra.Qb) {
    G.Ra.Qb.hasOwnProperty(d) && (a[d] = G.Ra.Qb[d])
  }
  for(d in this.Aa) {
    this.Aa.hasOwnProperty(d) && (a[d] = this.Aa[d])
  }
  a.$rand = Math.random();
  (d = this.ye[this.ye.length - 1]) && (a.$loop = {index:d.scope.Dd, count:d.scope.Dd + 1, first:0 === d.scope.Dd, last:d.scope.Dd + 1 >= d.scope.xg});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
G.Ra.prototype.Rf = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.Za(b[d])
    }
  }else {
    for(d in this.Aa) {
      this.Aa.hasOwnProperty(d) && (a[d] = this.Aa[d])
    }
  }
  return a
};
G.Ra.prototype.Qf = function() {
  var b = {}, a;
  for(a in this.Aa) {
    this.Aa.hasOwnProperty(a) && (b[a] = this.Aa[a])
  }
  return b
};
G.ka.prototype.hg = function(b) {
  var a = new G.Ra(this);
  if(b = this.Lh(b)) {
    a.ob = b
  }
  return a
};
G.Oa.prototype.hg = function() {
  var b = new G.Ra(this.root), a = new G.Lb;
  a.root = this.root;
  a.ac = this.fb;
  b.ob = a;
  b.Aa = this.Aa;
  return b
};
G.Ra.Qb = {};
G.Ia = function(b) {
  b = b || "";
  for(var a in G.Ia) {
    G.Ia.hasOwnProperty(a) && (G.Ki[b + a] = G.Ia[a])
  }
};
G.Ia.action = function(b) {
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
  var f = new G.Lb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof G.eb)
    }) && g(Error("argument type error.")), f.ac = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof G.eb ? f.ac[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return f
};
G.Ia.xa = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("label is required."));
  f = new G.md(b);
  if(a instanceof Array) {
    f.ab = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.ab.push(arguments[d])
    }
  }
  return f
};
G.Ia.Ha = function(b, a, d, f) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new G.Oa;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof G.uc ? m.direction = arguments[h] : arguments[h] instanceof G.yc ? m.speed = arguments[h] : arguments[h] instanceof G.Lb ? m.fb.push(arguments[h]) : arguments[h] instanceof G.md ? m.fb.push(arguments[h]) : arguments[h] instanceof Array ? m.fb.push(G.Ia.action(arguments[h])) : arguments[h] instanceof Object ? m.Va = arguments[h] : "string" === typeof arguments[h] && (m.label = arguments[h])
  }
  return m
};
G.Ia.wl = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("label is required."));
  f = new G.ne(b);
  if(a instanceof Array) {
    f.ab = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.ab.push(arguments[d])
    }
  }
  return f
};
G.Ia.fire = function(b, a, d, f) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new G.od;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof G.uc ? m.direction = arguments[h] : arguments[h] instanceof G.yc ? m.speed = arguments[h] : arguments[h] instanceof G.Oa ? m.Ha = arguments[h] : arguments[h] instanceof G.ne ? m.Ha = arguments[h] : arguments[h] instanceof G.re ? m.Va = arguments[h] : arguments[h] instanceof G.lh ? m.Va.offsetX = arguments[h].value : arguments[h] instanceof G.mh ? m.Va.offsetY = arguments[h].value : arguments[h] instanceof G.Wg && (m.Va.va = arguments[h].value)
  }
  m.Ha === i && g(Error("bullet (or bulletRef) is required."));
  return m
};
G.Ia.Bl = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("label is required."));
  f = new G.nf(b);
  if(a instanceof Array) {
    f.ab = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.ab.push(arguments[d])
    }
  }
  return f
};
G.Ia.xl = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("direction is required."));
  a === i && g(Error("term is required."));
  d = new G.pe;
  d.direction = b instanceof G.uc ? b : new G.uc(b);
  d.vb = a;
  return d
};
G.Ia.Fe = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("speed is required."));
  a === i && g(Error("term is required."));
  d = new G.qe;
  d.speed = b instanceof G.yc ? b : new G.yc(b);
  d.vb = a;
  return d
};
G.Ia.vl = function(b, a, d) {
  for(var f = 0, h = arguments.length;f < h;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  h = new G.me;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof G.rf ? h.pc = b : arguments[f] instanceof G.Pf ? h.tc = a : h.vb = arguments[f]
  }
  h.pc === i && h.tc === i && g(Error("horizontal or vertical is required."));
  h.vb === i && g(Error("term is required."));
  return h
};
G.Ia.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && g(Error("value is required."));
  return new G.xe(b)
};
G.Ia.Ya = function() {
  return new G.Of
};
G.Ia.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("times is required."));
  a === i && g(Error("action is required."));
  f = new G.ve;
  f.li = b;
  if(a instanceof G.Lb || a instanceof G.md) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = G.Ia.action(a)
    }else {
      for(var h = [], d = 1;d < arguments.length;d++) {
        h.push(arguments[d])
      }
      f.action = G.Ia.action(h)
    }
  }
  return f
};
G.Ia.Ga = function(b, a) {
  return new G.hf(b, a)
};
G.Ia.Il = function(b, a) {
  return new G.Ff(b, a)
};
G.Ia.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new G.uc(b);
  a !== i && (d.type = a);
  return d
};
G.Ia.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new G.yc(b);
  a && (d.type = a);
  return d
};
G.Ia.pc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new G.rf(b);
  a && (d.type = a);
  return d
};
G.Ia.tc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new G.Pf(b);
  a && (d.type = a);
  return d
};
G.Ia.Al = function(b) {
  return new G.re(b)
};
G.Ia.offsetX = function(b) {
  return new G.lh(b)
};
G.Ia.offsetY = function(b) {
  return new G.mh(b)
};
G.Ia.va = function(b) {
  return new G.Wg(b)
};
tm.zb = tm.zb || {};
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
  tm.zb.Tc = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.sh = a
  }, Ie:function(a, b) {
    var d = this.sh.wk();
    if(b === i && 0 < d.length) {
      for(var f = [], w = 0, n = d.length;w < n;w++) {
        f[f.length] = this.th(a, d[w])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          p.cg == f.length && (p.Rd = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, w = f.length;w--;) {
        f[w].Xe = p
      }
      p.cg = 0;
      p.Bh = function() {
        this.cg++
      };
      p.cg = 0;
      p.Rd = r;
      p.pg = j;
      p.stop = r;
      return p
    }
    return this.th(a, b)
  }, th:function(a, b) {
    function d() {
      if(!d.stop) {
        d.na += 1;
        this.na = d.na;
        var a = d.Ge, b = d.Tj;
        if(b) {
          if(d.na < d.$f ? d.direction += d.yd : d.na === d.$f && (d.direction = d.Lc), d.na < d.ag ? d.speed += d.ke : d.na === d.ag && (d.speed = d.Id), d.na < d.Uf ? (d.jd += d.Be, d.ld += d.Ce) : d.na === d.Uf && (d.jd = d.ze, d.ld = d.Ae), this.x += Math.cos(d.direction) * d.speed * a.kd, this.y += Math.sin(d.direction) * d.speed * a.kd, this.x += d.jd * a.kd, this.y += d.ld * a.kd, a.qg(this)) {
            if(a.Rc || this.Rc) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.na < d.mi || d.Rd)) {
              for(var f;f = d.ni.next();) {
                switch(f.Ab) {
                  case "fire":
                    b.Qj.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.mi = "number" === typeof f.value ? d.na + f.value : 0 !== (a = ~~f.value) ? d.na + a : d.na + eval(f.value);
                    return;
                  case "changeDirection":
                    b.Lj.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.Mj.call(this, f, d);
                    break;
                  case "accel":
                    b.Jj.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.Rj.call(this, f)
                }
              }
              d.Rd = j;
              d.Xe ? d.Xe.Bh() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.Rd = j, d.Xe ? d.Xe.Bh() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.zb.Tc.Sd, f;
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
    "string" === typeof b ? d.ni = this.sh.hg(b) : b instanceof G.Oa ? d.ni = b.hg() : (window.console.error(a, b), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Tj = this;
    d.Ge = a;
    d.mi = -1;
    d.Rd = r;
    d.direction = 0;
    d.Vh = 0;
    d.speed = 0;
    d.Xh = 0;
    d.jd = 0;
    d.ld = 0;
    d.yd = 0;
    d.Lc = 0;
    d.$f = -1;
    d.ke = 0;
    d.Id = 0;
    d.ag = -1;
    d.Be = 0;
    d.ze = 0;
    d.Ce = 0;
    d.Ae = 0;
    d.Uf = -1;
    d.na = -1;
    d.stop = r;
    d.pg = j;
    return d
  }, Pj:function(a) {
    function b() {
      b.stop || (this.x += b.Fh, this.y += b.Gh, b.Ge.qg(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.zb.Tc.Sd, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.Ge = a;
    b.direction = 0;
    b.speed = 0;
    b.Fh = 0;
    b.Gh = 0;
    b.stop = r;
    b.pg = j;
    return b
  }, Qj:function(b, d, f, v) {
    if(this.Uk === i || this.Gb) {
      var w = {label:b.Ha.label}, n;
      for(n in b.Ha.Va) {
        w[n] = b.Ha.Va[n]
      }
      if(w = d.Ah(w)) {
        v = (n = 0 === b.Ha.fb.length) ? v.Pj(d) : v.Ie(d, b.Ha);
        var p = this, s = {x:this.x + b.Va.offsetX, y:this.y + b.Va.offsetY};
        f.Vh = v.direction = function(n) {
          var k = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? b.Va.va ? a(s, d.target) + k : a(p, d.target) + k : k - Math.PI / 2;
            case "absolute":
              return k - Math.PI / 2;
            case "relative":
              return f.direction + k;
            default:
              return f.Vh + k
          }
        }(b.direction || b.Ha.direction);
        f.Xh = v.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.Xh + b;
            default:
              return b
          }
        }(b.speed || b.Ha.speed);
        w.x = s.x;
        w.y = s.y;
        n && (v.Fh = Math.cos(v.direction) * v.speed * d.kd, v.Gh = Math.sin(v.direction) * v.speed * d.kd);
        w.Rc = !!w.Rc;
        if(d.Rc || w.Rc) {
          w.rotation = (v.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, w.speed = v.speed
        }
        w.addEventListener("enterframe", v);
        d.xh ? d.xh.addChild(w) : this.parent && this.parent.addChild(w)
      }
    }
  }, Lj:function(d, f, q) {
    var v = eval(d.direction.value) * Math.DEG_TO_RAD, w = eval(d.vb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        q.Lc = a(this, d) + v;
        q.yd = b(q.Lc - q.direction) / w;
        break;
      case "absolute":
        q.Lc = v - Math.PI / 2;
        q.yd = b(q.Lc - q.direction) / w;
        break;
      case "relative":
        q.Lc = q.direction + v;
        q.yd = b(q.Lc - q.direction) / w;
        break;
      case "sequence":
        q.yd = v, q.Lc = q.direction + q.yd * (w - 1)
    }
    q.$f = q.na + w
  }, Mj:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.vb);
    switch(a.speed.type) {
      case "absolute":
        b.Id = d;
        b.ke = (b.Id - b.speed) / f;
        break;
      case "relative":
        b.Id = d + b.speed;
        b.ke = (b.Id - b.speed) / f;
        break;
      case "sequence":
        b.ke = d, b.Id = b.speed + b.ke * f
    }
    b.ag = b.na + f
  }, Jj:function(a, b) {
    var d = eval(a.vb);
    b.Uf = b.na + d;
    if(a.pc) {
      var f = eval(a.pc.value);
      switch(a.pc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Be = (f - b.jd) / d;
          b.ze = f;
          break;
        case "relative":
          b.Be = f, b.ze = (f - b.jd) * d
      }
    }else {
      b.Be = 0, b.ze = b.jd
    }
    if(a.tc) {
      switch(f = eval(a.tc.value), a.tc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Ce = (f - b.ld) / d;
          b.Ae = f;
          break;
        case "relative":
          b.Ce = f, b.Ae = (f - b.ld) * d
      }
    }else {
      b.Ce = 0, b.Ae = b.ld
    }
  }, Rj:function(a) {
    var b = tm.event.Event(a.gk);
    if(a.ab) {
      for(var d in a.ab) {
        b[d] = a.ab[d]
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
  tm.zb.ck = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.zb.Eh = function(a) {
    if(f === l) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.zb.yl = function() {
    return j
  };
  tm.zb.Tc.Sd = {Ah:tm.zb.ck, qg:tm.zb.Eh, Ml:0, Rc:r, kd:2, target:l};
  G.ka.prototype.Ie = function(a) {
    return tm.zb.Tc(this).Ie(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(z());
tm.main(function() {
  gls2.Mi("#canvas2d");
  gls2.core.run()
});
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.Wa.Kd && gls2.Wa.Kd.ee(0)
};
gls2.Mi = tm.createClass({superClass:tm.display.CanvasApp, ed:0, jg:0, lg:0, kg:0, ig:0, Qh:l, Pd:3, hd:3, Hh:1, da:l, init:function(b) {
  gls2.core !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = gls2.ja.Ji;
  this.background = "rgba(0,0,0,0)";
  this.Tg = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.ui.LoadingScene({assets:{tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", 
  explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", hino:"assets/tex_hino.png", hoshizora_y:"assets/tex_hoshizora_y.png", hoshizora_t:"assets/tex_hoshizora_t.png", yotsuba:"assets/tex_yotsuba.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", higashi:"assets/tex_higashi.png", momozono:"assets/tex_momozono.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", 
  bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", 
  "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", 
  "sound/voWarning":"assets/vo_warning.mp3"}, nextScene:function() {
    this.Sj();
    return gls2.TitleScene()
  }.bind(this)}))
}, update:function() {
  for(var b = [].concat(this.Tg), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.Tg.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Sj:function() {
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
  this.da = gls2.Wa()
}, zl:function() {
  this.stop()
}, Kg:function(b, a) {
  var d = {score:Math.floor(this.ed), stage:this.jg + 1, continueCount:this.ig, shipType:this.lg, shipStyle:this.kg, fps:0, screenShot:this.Qh};
  b && (d.userName = b);
  tm.util.Ajax.load({url:"/api/ranking/post", data:d, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        alert("\u767b\u9332\u5b8c\u4e86\uff01"), a()
      }else {
        if(b.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.Kg(l, a);
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(b = "";"" === b;) {
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.vk())
              }
              b !== l && (b = b.substring(0, 10), this.Kg(b + " (\u533f\u540d)", a))
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
}, vk:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc \u76f8\u7530\u30de\u30ca".split(" ").Ll()
}, Tg:l, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Cc = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.ja = {lj:r, Ji:60, gj:0, bh:[1E9, 1E10], ij:3E3, fh:3, eh:[3, 2, 1], qi:[6, 4, 2], oh:1, fj:0.1, gh:1, hj:0.25, ml:1, pl:0.25, pi:2, Zi:0.005, Vi:0.01, Wi:0.001, Ri:0.015, Si:0.002, aj:0.001, cj:0.01, $i:0, Yi:0, Xi:0, Ui:0.03, Ti:0.004, bj:0, dj:0, ej:0.75, pf:10, se:800, Qi:0.25, Pi:0.1, of:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], Ai:0.02, Bi:0.5, zi:0.005, ah:1E3, ti:10, ri:1, Bj:1E3, Aj:100, zj:0, yj:0, xj:1E3, wj:100, Hi:0.5, vi:3, Ci:22500, si:50, qj:10, Vg:r, oi:j, uj:1E3, vj:2E3, 
rj:4E3, sj:1E4, tj:2E7, kj:100, ol:"tmshooter"};
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.nh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Jb:0, Ac:j, Od:j, Ed:r, da:l, speed:0, Eb:l, xd:l, Zh:l, Re:l, Rb:l, mg:l, zc:l, ng:l, og:l, frame:0, init:function(a, f, h) {
    this.superInit("fighter", 64, 64);
    this.da = a;
    this.type = f;
    this.style = h;
    tm.zb.Tc.Sd.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.xd = this.Zh = gls2.qh(f, 100);
    this.Re = gls2.qh(3, 100);
    this.Rb = gls2.jh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Rb.visible = r;
    this.Oj();
    this.Eb = this.Nj();
    1 === this.style && (this.Eb = [this.Eb[1], this.Eb[2]]);
    this.zc = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(h = this.Eb.length;f < h;f++) {
      var m = this.Eb[f];
      gls2.xi(this, m).setPosition(m.x, m.y).addChildTo(this.zc)
    }
    this.Ek = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Ek.blendMode = "lighter";
    this.ng = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.ng.blendMode = "lighter";
    this.ng.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Sa && !a.Ka
    };
    this.og = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.og.blendMode = "lighter";
    this.og.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Sa && !a.Ka
    };
    this.Wd = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.Wd.blendMode = "lighter";
    this.Wd.rotation = -90;
    this.Wd.strokeStyle = "rgba(180,180,255,0.4)";
    this.Wd.update = function() {
      this.visible = a.Ka
    };
    this.Wd.draw = function(b) {
      b.lineCap = "round";
      var f = a.Bd / gls2.ja.se;
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
    this.yk = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.yk.update = function() {
      this.visible = a.Ka
    };
    b === l && (b = gls2.Xg(this.da.pa))
  }, Nj:function() {
    if(0 === this.type) {
      return[{x:0, cd:0, y:40, d:0, Vb:j, Ob:-0.7, v:j}, {x:0, cd:0, y:40, d:0, Vb:j, Ob:0.5, v:j}, {x:0, cd:0, y:40, d:0, Vb:j, Ob:-0.5, v:j}, {x:0, cd:0, y:40, d:0, Vb:j, Ob:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, Vb:r, Ob:-0.7, v:j}, {x:-40, y:40, d:0.1, Vb:r, Ob:-0.5, v:j}, {x:40, y:40, d:0.1, Vb:j, Ob:0.5, v:j}, {x:70, y:20, d:0.1, Vb:j, Ob:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, Vb:r, Ob:-0.7, v:j}, {x:-30, y:20, d:0.4, Vb:r, Ob:-0.5, v:j}, {x:30, y:20, d:0.4, Vb:j, Ob:0.5, v:j}, {x:60, y:40, d:0.6, Vb:j, Ob:0.7, v:j}]
    }
  }, Oj:function() {
    this.mg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.mg.setFrameIndex(5);
    this.mg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Pc:-1, Ad:r, Pb:r, update:function(d) {
    this.visible = this.Ed ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.Ac) {
      var h = f.getKeyAngle();
      h !== l && (h = a[h], this.x += h.x * this.speed * (this.Pb ? 0.5 : 1), this.y += h.y * this.speed * (this.Pb ? 0.5 : 1));
      this.x = gls2.ma.clamp(this.x, 15, 465);
      this.y = gls2.ma.clamp(this.y, 15, 625);
      var m = f.getKey("c") && this.Od, h = f.getKey("z") && this.Od;
      this.Pc = m ? this.Pc + 1 : this.Pc - 1;
      this.Pc = gls2.ma.clamp(this.Pc, -1, 10);
      this.Pb = h && m || 10 === this.Pc;
      m = this.da.Ka ? 3 : 5;
      this.Ad = !this.Pb && (0 <= this.Pc || h) && 0 === d.frame % m;
      h && (this.Pc = 0);
      this.Rb.x = this.x;
      this.Rb.y = this.y - 40;
      f.getKeyDown("x") && this.Od && (0 < this.da.Sa && !this.da.Ka ? (this.da.fl(), gls2.Ij(this).addChildTo(this.da)) : !this.da.fd && 0 < this.da.Fb && (this.Bb = gls2.ma.clamp(this.Bb - 2, 0, 1), this.da.Nd(-0.02), gls2.Yg(this, this.da).setPosition(gls2.ma.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.da)))
    }else {
      this.Pb = this.Ad = r
    }
    this.Ad && (h = Math.sin(0.2 * d.frame), m = this.xd.fire(this.x - 7 - 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.da), m = this.xd.fire(this.x + 7 + 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.da));
    if(this.Pb) {
      h = 0;
      for(m = this.Eb.length;h < m;h++) {
        this.Eb[h].v = r
      }
      this.zc.rotation = 0
    }else {
      this.Rb.visible = r;
      h = 0;
      for(m = this.Eb.length;h < m;h++) {
        this.Eb[h].v = j
      }
    }
    this.bk(f);
    this.Kj(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.da), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.da));
    this.frame = d.frame
  }, Bc:function() {
    this.Pb = this.Ad = r;
    this.da.Je();
    this.da.gb = 0;
    this.da.$a = 0;
    this.da.Ua = 0
  }, bk:function(a) {
    if(0 === this.type) {
      for(a = this.Eb.length;this.Eb[--a] !== i;) {
        var b = this.Eb[a];
        0 === a ? b.x = b.cd + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.cd + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.cd + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.cd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.zc, b.rotation = this.Pb ? 0 : this.Ac && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Ac && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, Kj:function(a, b) {
    this.Ac && a.getKey("left") ? this.Jb = gls2.ma.clamp(this.Jb - 0.2, -3, 3) : this.Ac && a.getKey("right") ? this.Jb = gls2.ma.clamp(this.Jb + 0.2, -3, 3) : 0 > this.Jb ? this.Jb = gls2.ma.clamp(this.Jb + 0.2, -3, 3) : 0 < this.Jb && (this.Jb = gls2.ma.clamp(this.Jb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Jb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Jb) : 2 === this.type && this.setFrameIndex(31 + ~~this.Jb);
    return b
  }});
  gls2.xi = tm.createClass({superClass:tm.display.AnimationSprite, ad:l, fa:l, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.ad = b;
    this.fa = a;
    this.altitude = 10;
    this.gotoAndPlay(b.Vb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.ad.v) {
      this.x = this.ad.x * (this.fa.da.Ka ? 1.5 : 1);
      this.y = this.ad.y * (this.fa.da.Ka ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.ad.d * this.ad.Ob);
      var f = this.parent.localToGlobal(this);
      this.ad.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.da);
      this.fa.Ad && (f = this.fa.xd.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== l && f.addChildTo(a.da))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  gls2.sd = tm.createClass({superClass:tm.display.Sprite, speed:0, Zc:0, Yj:1, Sh:0, ib:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.Zc = gls2.ja.oh;
    b === l && (b = gls2.Ta(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.je(a)
  }, update:function() {
    this.x += this.Fc;
    this.y += this.fc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, je:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Pe:function(a) {
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
  gls2.sd.Qd = function() {
    for(var b = [].concat(a), f = 0, h = b.length;f < h;f++) {
      b[f].remove()
    }
  };
  var a = gls2.sd.pb = [];
  gls2.qh = tm.createClass({Oc:l, Rh:r, init:function(b, f) {
    this.Rh = 3 === b;
    this.Oc = [];
    for(var h = 0;h < f;h++) {
      var m = gls2.sd(b), q = this;
      m.addEventListener("added", function() {
        this.sa = gls2.ja.qj;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        q.Oc.push(this)
      });
      this.Rh && m.addEventListener("enterframe", function(a) {
        this.setScale((this.Yj + this.Sh) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Oc.push(m)
    }
  }, fire:function(a, b, h) {
    var m = this.Oc.pop();
    if(m === i) {
      return l
    }
    var q = gls2.ma.degToRad(h);
    m.Fc = Math.cos(q) * m.speed;
    m.fc = Math.sin(q) * m.speed;
    m.setPosition(a, b);
    m.rotation = h + 90;
    return m
  }, Gd:function(a) {
    for(var b = this.Oc.length;this.Oc[--b] !== i;) {
      this.Oc[b].Zc = gls2.ja.oh + gls2.ja.fj * a, this.Oc[b].Sh = 0.2 * a
    }
  }})
})();
gls2.jh = tm.createClass({superClass:tm.display.Sprite, fa:l, da:l, kc:0, frame:0, ki:l, color:l, yh:0, Xf:0, Zj:r, head:l, Mh:l, lc:l, ib:j, Zc:gls2.ja.gh, Fd:l, init:function(b, a) {
  this.fa = b;
  this.da = b.da;
  this.yh = 0 === this.fa.style ? 1 : 1.2;
  this.Xf = 0 === this.fa.style ? 50 : 75;
  var d = this;
  this.ki = a;
  this.superInit(a.redBody, this.Xf, 100);
  this.boundingHeightBottom = 1;
  this.Ol = 0;
  this.origin.y = 1;
  var f = this.lc = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.Mh = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.kc - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.kc
  };
  this.je(["red", "green", "blue"][this.fa.type]);
  this.Gd(0)
}, je:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.ki[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.lc.gotoAndPlay(this.color);
  this.Mh.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Fd = l;
  return this
}, Gd:function(b) {
  this.boundingWidth = this.width = this.Xf + 30 * b / gls2.ja.pf;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.Zc = this.yh * gls2.ja.gh + gls2.ja.hj * b;
  0 === b ? this.je(["red", "green", "blue"][this.fa.type]) : this.je("hyper")
}, Pe:function(b, a) {
  this.Fd === l && this.Ch();
  a = a || this.kc;
  for(var d = 0;d < b;d++) {
    var f = this.Fd.clone().setPosition(this.x, a).addChildTo(this.da), h = gls2.ma.randf(8, 14), m = gls2.ma.randf(0, Math.PI);
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
}, rk:function(b, a, d) {
  this.Fd === l && this.Ch();
  for(var f = 0;f < b;f++) {
    var h = this.Fd.clone().setPosition(a, d).addChildTo(this.da), m = gls2.ma.randf(12, 20), q = gls2.ma.randf(0, Math.PI);
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
}, Ch:function() {
  this.Fd = "hyper" === this.color ? gls2.Ta(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Ta(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.fa.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.fa.Pb) ? (this.kc = Math.max(0, this.kc - 40), this.height = this.y - this.kc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.kc = this.y - 40;
  this.Zj = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Dl:function() {
  return this.kc
}, al:function(b) {
  this.kc = b;
  this.head.update()
}});
gls2.jh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.kc
});
(function() {
  gls2.Yg = tm.createClass({superClass:tm.app.Object2D, ib:j, da:l, init:function(a, d) {
    this.superInit();
    this.fa = a;
    this.da = d;
    this.hi = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.hi.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.hi));
    this.wh();
    b === l && (b = gls2.Ta(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.na = 0;
    this.ge = 1;
    this.addEventListener("added", function() {
      this.da.fd = j;
      this.fa.Ed = j;
      this.da.Fb -= 1;
      this.da.Te = r;
      this.da.Je();
      this.da.tb("drop BOMBER!!", j);
      gls2.ta("bomb");
      gls2.ta("voBomb")
    });
    this.addEventListener("removed", function() {
      this.da.fd = r;
      this.fa.Ed = r
    })
  }, wh:function() {
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
      var d = this.a * this.ge + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.na;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.na += 3.6, this.ge = -1) : (this.b = 8, this.na += 1.8, this.ge = 1)
  }});
  gls2.kh = tm.createClass({superClass:gls2.Yg, init:function(a, b) {
    this.superInit(a, b);
    gls2.ja.oi && this.addEventListener("added", function() {
      this.da.Fb = 0
    })
  }, wh:function() {
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
      var d = this.a * this.ge + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.na;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.na += 1.8, this.ge = 1)
  }});
  var b = l
})();
gls2.yi = tm.createClass({superClass:tm.display.Sprite, Fc:0, fc:0, fa:l, na:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.fa = d;
  this.fc = 1;
  this.Fc = 0.5 > gls2.ya.random() ? -1 : 1;
  this.na = 0
}, update:function() {
  this.x += this.Fc;
  this.y += 2 * this.fc;
  if(2025 > gls2.Cc(this, this.fa)) {
    this.fa.da.Wj(1), this.remove()
  }else {
    if(3E3 > this.na) {
      if(30 > this.x || 450 < this.x) {
        this.Fc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.fc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.na += 1
}});
gls2.Ii = tm.createClass({superClass:tm.display.Sprite, Fc:0, fc:0, fa:l, na:0, init:function(b, a, d) {
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
  4096 > gls2.Cc(this, this.fa) && (this.fa.da.Jh(), this.remove());
  704 < this.y && this.remove()
}});
gls2.ra = {};
gls2.ra.setup = function() {
  gls2.fk = {};
  gls2.ra.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.fk.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.particle16 = gls2.Ta(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.ra.Pe = function(b, a, d) {
  b = gls2.ra.particle16.clone().setPosition(b, a);
  b.ib = j;
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
gls2.ra.Nh = function(b, a, d, f) {
  f = f || 1.8;
  var h = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  h.ib = j;
  h.addChildTo(d);
  h.image = gls2.ra.shockwaveImage;
  h.tweener.clear().to({scaleX:f, scaleY:f, alpha:0}, 800, "easeOutQuad").call(function() {
    h.remove()
  })
};
gls2.ra.tk = function(b, a, d) {
  var f = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  f.ib = j;
  f.addChildTo(d);
  f.image = gls2.ra.shockwaveImage;
  f.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
};
gls2.ra.sk = function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.ib = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.ra.Le = function(b, a, d, f) {
  gls2.ta("explode");
  var h = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  h.ib = j;
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
  gls2.ra.Nh(b, a, d)
};
gls2.ra.ik = function(b, a, d) {
  gls2.ta("explode");
  var f = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.ib = j;
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
  f.ib = j;
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
  f.ib = j;
  f.addChildTo(d)
};
gls2.ra.Hb = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Hc.noise.length), h = 0;20 > h;h++) {
    var m = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Hc.noise.at(~~(gls2.Hc.noise.length * h / 20) + f), 2);
    m.ib = j;
    m.addChildTo(d)
  }
  gls2.ra.Nh(b, a, d, 5)
};
gls2.ra.gg = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Hc.noise.length), h = 0;20 > h;h++) {
    for(var m = 2 * Math.PI * h / 20, q = Math.pow(gls2.Hc.noise.at(~~(gls2.Hc.noise.length * h / 20) + f), 2), v = 0;3 > v;v++) {
      var w = 4 * q * (v + 1), n = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.na += 1
      }).setScale(0.3 * (3 - v)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      n.rotation = 2 * Math.random() * Math.PI;
      n.ib = j;
      n.na = 0;
      n.a = m;
      n.v = w;
      n.addChildTo(d)
    }
  }
};
gls2.mf = tm.createClass({superClass:tm.app.Object2D, target:l, gd:0, angle:0, alpha:2, ib:j, reverse:r, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.gd = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Ta(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.gd + this.target.x, Math.sin(a) * this.gd + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.gd += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.gd || 200 < this.gd) && this.remove()
  }
}});
gls2.Ij = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, ib:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Ta(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ma.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ma.rand(-2, 2)).on("enterframe", function() {
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
gls2.Dj = tm.createClass({superClass:tm.graphics.Canvas, da:l, vd:l, ub:l, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.da = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.vd = gls2.Di(200);
  this.ub = gls2.ph(this)
}, update:function() {
  this.clear();
  this.da.$b !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.ub.oc - 20, 470 * this.da.$b.sa / this.da.$b.Mc, 20), this.strokeRect(5, this.ub.oc - 20, 470, 20), this.clear(263.5, this.ub.oc - 20 + 2, 2, 16), this.clear(52, this.ub.oc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.da.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.ub.oc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.da.gb)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.da.Ua / gls2.ja.ah) + 1), this.ub.Vd + 192, 22);
  b = [0, 1, 4][this.da.fa.type];
  for(a = 0;a < this.da.Sc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * G.Ra.Qb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.da.Zd + " hit", this.ub.Vd + 10, 95);
  0 < ~~this.da.Ua && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.da.Ua + " HIT!!", 10, 0.5 * -this.ub.oc + 115));
  0 === this.frame % 2 && (!this.da.Ka && 0 < this.da.Sa ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.da.Sa, 5, 637)) : this.da.Ka && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.da.wd, 5, 637)));
  for(a = 0;a < this.da.Fb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.da.Te && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.vd.update();
  this.vd.Jg = this.ub.oc + 5;
  this.vd.draw(this);
  this.frame += 1
}});
gls2.ph = tm.createClass({superClass:tm.app.Object2D, Kb:l, Vd:0, oc:0, init:function(b) {
  this.superInit();
  this.Kb = b
}});
(function() {
  var b = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.Ni = tm.createClass({superClass:tm.graphics.Canvas, Ba:l, Ib:l, Tb:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ba = gls2.Oi();
    this.Ba.pa = this;
    this.Ba.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Ib = [];
    this.Tb = [];
    for(var a = 0;5 > a;a++) {
      this.Ib[a] = 40 * b[a], this.Tb[a] = this.Ib[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Ba.Ea = Math.cos(this.Ba.direction) * this.Ba.speed;
    this.Ba.Fa = Math.sin(this.Ba.direction) * this.Ba.speed;
    for(var b = 0;5 > b;b++) {
      for(this.Ba.bc[b] += this.Ba.Ea * Math.pow(0.8, b);3 * this.Ib[b] < this.Ba.bc[b];) {
        this.Ba.bc[b] -= 3 * this.Ib[b]
      }
      for(;this.Ba.bc[b] < 3 * -this.Ib[b];) {
        this.Ba.bc[b] += 3 * this.Ib[b]
      }
      for(this.Ba.cc[b] += this.Ba.Fa * Math.pow(0.8, b);2 * this.Tb[b] < this.Ba.cc[b];) {
        this.Ba.cc[b] -= 2 * this.Tb[b]
      }
      for(;this.Ba.cc[b] < 2 * -this.Tb[b];) {
        this.Ba.cc[b] += 2 * this.Tb[b]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Ba.background !== l ? this.clearColor(this.Ba.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * b[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * b[a] + ")"}]).toStyle();
      this.beginPath();
      for(var d = 0, f = this.Ba.bc[a] - 3 * this.Ib[a];f < 480 + 3 * this.Ib[a];f += 1.5 * this.Ib[a]) {
        for(var d = 0 === d ? this.Tb[a] : 0, h = this.Ba.cc[a] - 2 * this.Tb[a] + d;h < 640 + 2 * this.Tb[a];h += 2 * this.Tb[a]) {
          this.line(f, h, f + this.Ib[a], h), this.line(f, h, f - this.Ib[a] / 2, h + this.Tb[a]), this.line(f, h, f - this.Ib[a] / 2, h - this.Tb[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.Oi = tm.createClass({superClass:tm.app.Object2D, bc:0, cc:0, direction:0, speed:0, Ea:0, Fa:0, background:l, init:function() {
    this.superInit();
    this.bc = [];
    this.cc = [];
    for(var a = 0;5 > a;a++) {
      this.bc[a] = 240, this.cc[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Fa = this.Ea = 0
  }})
})();
gls2.Nf = tm.createClass({superClass:tm.display.Sprite, Uh:r, da:l, fa:l, Dc:r, dd:r, Pg:r, Ea:0, Fa:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.Uh = b) && this.setScale(2, 2);
  this.da = gls2.Wa.Kd;
  this.fa = this.da.fa;
  this.addChildTo(this.da);
  b = 0.5 * gls2.ya.random() * Math.PI - 0.75 * Math.PI;
  this.Ea = 30 * Math.cos(b);
  this.Fa = 30 * Math.sin(b)
}, update:function() {
  this.fa.Pb && (this.dd = j);
  if(this.fa.parent === l) {
    this.dd = r
  }else {
    if(100 > gls2.Cc(this, this.fa)) {
      this.da.Kk(this);
      this.remove();
      return
    }
    1E4 > gls2.Cc(this, this.fa) && (this.dd = j);
    if(this.Pg && this.dd) {
      var b = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.Pg || (this.x += this.Ea, this.y += this.Fa, this.Ea *= 0.8, this.Fa *= 0.8, -1 < this.Ea && (1 > this.Ea && -1 < this.Fa && 1 > this.Fa) && (this.Pg = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.rh = tm.createClass({superClass:gls2.Nf, Dc:r, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.Hj = tm.createClass({superClass:gls2.Nf, Dc:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.dd || (this.x += this.da.pa.Ea, this.y += this.da.pa.Fa);
  this.superClass.prototype.update.call(this)
}});
gls2.Vc = tm.createClass({fa:l, da:l, ba:l, frame:0, init:function(b) {
  this.da = b;
  this.fa = b.fa;
  this.Hd();
  this.ba = gls2.Gj();
  this.frame = 0
}, Hd:z(), update:function() {
  this.hk(this.frame);
  this.frame += 1
}, hk:function(b) {
  b = this.ba.get(b);
  if(b !== l) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.dh[b.value] !== i) {
        var a = gls2.dh[b.value];
        if(a !== l) {
          if(a[0].$b === j) {
            this.wg(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.wg(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.ba.Rg = r
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, wg:function(b) {
  this.da.Ke += 1;
  b = b.$(this.da, b.aa).setPosition(b.x, b.y).addChildTo(this.da);
  b.le = this;
  b.de();
  return b
}, Vf:function(b) {
  gls2.Me();
  this.da.Td = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var h = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
      h.na = 0;
      h.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.na) + 0.5;
        this.na += 1
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
  a.addChildTo(this.da.fg);
  gls2.ta("warning");
  gls2.ta("voWarning")
}});
gls2.Vc.create = function(b) {
  return gls2.Fj(b)
};
gls2.Gj = tm.createClass({index:0, data:l, Rg:r, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? l : b.stop === j ? (this.Rg = j, b) : this.Rg ? l : b
}});
gls2.ql = tm.createClass({superClass:gls2.Vc, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    gls2.sc("bgm1", j);
    this.da.pa.direction = 0.5 * Math.PI;
    this.da.pa.speed = 8;
    this.da.pa.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.ba.add(200, "tankRD-center");
  this.ba.add(200, "tankRD-left");
  this.ba.add(20, "heri1-right");
  this.ba.add(60, "heri1-center");
  this.ba.add(10, "cannon-0");
  this.ba.add(30, "heri1-left");
  this.ba.add(10, "cannon-1");
  this.ba.add(30, "tankL-top");
  this.ba.add(50, "heri1-right");
  this.ba.add(20, "tankRD-center");
  this.ba.add(80, "heri1-center");
  this.ba.add(150, "komachi-1");
  this.ba.add(230, "heri1-right");
  this.ba.add(20, "heri1-center");
  this.ba.add(20, "heri1-left");
  this.ba.add(20, "tankL-top");
  this.ba.add(20, "tankRD-left");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-center");
  this.ba.add(20, "tankRD-center");
  this.ba.add(20, "tankRD-left");
  this.ba.add(50, "heri1-right");
  this.ba.add(10, "cannon-7");
  this.ba.add(30, "heri1-center");
  this.ba.add(50, "heri1-left");
  this.ba.add(20, "tankL-top");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "fighter-m-1");
  this.ba.add(50, "fighter-m-5");
  this.ba.add(1, function() {
    this.da.pa.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.ba.add(150, "yukishiro", j);
  this.ba.add(25, "heri2-left");
  this.ba.add(25, "heri2-center");
  this.ba.add(25, "heri2-right");
  this.ba.add(25, "heri2-right");
  this.ba.add(25, "heri2-left");
  this.ba.add(25, "heri2-center");
  this.ba.add(25, "heri2-right");
  this.ba.add(25, "heri2-left");
  this.ba.add(25, "heri2-center");
  this.ba.add(25, "heri2-right");
  this.ba.add(25, "heri2-right");
  this.ba.add(25, "heri2-left");
  this.ba.add(25, "heri2-center");
  this.ba.add(25, "heri2-right");
  this.ba.add(50, "fighter-m-0");
  this.ba.add(50, "fighter-m-2");
  this.ba.add(50, "fighter-m-4");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-left");
  this.ba.add(50, "heri2-center");
  this.ba.add(50, "heri2-right");
  this.ba.add(50, "heri2-left");
  this.ba.add(1, "cannon-6");
  this.ba.add(30, "heri1-left");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "fighter-m-6");
  this.ba.add(50, "fighter-m-4");
  this.ba.add(50, "fighter-m-2");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right2");
  this.ba.add(50, "heri1-left2");
  this.ba.add(60, "heri1-center2");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "fighter-m-0");
  this.ba.add(50, "fighter-m-1");
  this.ba.add(50, "fighter-m-2");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-left");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-left");
  this.ba.add(1, "cannon-1");
  this.ba.add(30, "heri1-center");
  this.ba.add(50, "heri1-left");
  this.ba.add(50, "heri1-right");
  this.ba.add(30, "heri1-center");
  this.ba.add(50, "heri1-left");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "fighter-m-6");
  this.ba.add(50, "fighter-m-5");
  this.ba.add(50, "fighter-m-4");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-left2");
  this.ba.add(50, "heri1-center2");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right2");
  this.ba.add(50, "heri1-center");
  this.ba.add(1, function() {
    this.da.pa.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.ba.add(100, "komachi-0");
  this.ba.add(160, "komachi-1");
  this.ba.add(600, function() {
    this.Vf(function() {
      gls2.sc("bgmBoss", j)
    })
  });
  this.ba.add(600, "misumi")
}, Hd:function() {
  this.da.pa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.rl = tm.createClass({superClass:gls2.Vc, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    gls2.sc("bgm2", j);
    this.da.pa.direction = 0.5 * Math.PI;
    this.da.pa.speed = 0.3
  });
  this.ba.add(200, "tank25-top");
  this.ba.add(160, "heri1-left");
  this.ba.add(100, "heri1-right");
  this.ba.add(190, "komachi2-0");
  this.ba.add(10, "itsuki-1");
  this.ba.add(400, "tank15-top");
  this.ba.add(1, function() {
    this.da.pa.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
  });
  this.ba.add(60, "heri2-left");
  this.ba.add(60, "heri2-center");
  this.ba.add(60, "heri2-right");
  this.ba.add(20, "tankRD-center");
  this.ba.add(20, "tankL-top");
  this.ba.add(20, "yayoi-R0");
  this.ba.add(1, "yayoi-R2");
  this.ba.add(40, "heri2-left");
  this.ba.add(60, "heri2-center");
  this.ba.add(60, "heri2-right");
  this.ba.add(60, "yayoi-R1");
  this.ba.add(1, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(30, "makoto-R0");
  this.ba.add(1, function() {
    this.da.pa.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
  });
  this.ba.add(600, "tank5-center");
  this.ba.add(1, "yayoi-3");
  this.ba.add(90, "heri2-left");
  this.ba.add(1, "yayoi-2");
  this.ba.add(90, "tank5-left");
  this.ba.add(1, "yayoi-1");
  this.ba.add(90, "heri2-right");
  this.ba.add(1, "yayoi-0");
  this.ba.add(90, "heri2-left");
  this.ba.add(60, "tank5-left");
  this.ba.add(1, function() {
    this.da.pa.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
  });
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri1-left2");
  this.ba.add(40, "tank5-center");
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri2-left");
  this.ba.add(40, "tank5-center");
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri1-left2");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri2-left");
  this.ba.add(40, "tank5-center");
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri2-left");
  this.ba.add(90, "makoto-4");
  this.ba.add(1, "tsubomi-0");
  this.ba.add(1, "tsubomi-2");
  this.ba.add(1, function() {
    this.da.pa.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.ba.add(400, function() {
    this.da.pa.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.ba.add(430, function() {
    this.da.pa.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.ba.add(1, "mai", j);
  this.ba.add(300, "heri2-left");
  for(b = 0;12 > b;b++) {
    this.ba.add(30, "heri2-center"), this.ba.add(30, "heri2-right"), this.ba.add(30, "heri2-center"), this.ba.add(30, "heri2-left")
  }
  this.ba.add(1, function() {
    this.da.pa.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
  });
  this.ba.add(60, "tank5-left");
  this.ba.add(60, "tank5-left");
  this.ba.add(60, "tank5-left");
  this.ba.add(120, "itsuki-2");
  this.ba.add(1, "komachi2-0");
  this.ba.add(380, "tsubomi-0");
  this.ba.add(1, "komachi2-1");
  this.ba.add(380, "itsuki-1");
  this.ba.add(380, "makoto-4");
  this.ba.add(1, "komachi2-0");
  this.ba.add(380, "makoto-1");
  this.ba.add(580, "erika");
  this.ba.add(520, function() {
    this.Vf(function() {
      gls2.sc("bgmBoss", j)
    })
  });
  this.ba.add(300, function() {
    this.da.pa.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.ba.add(300, "hyuga")
}, Hd:function() {
  this.da.pa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.sl = tm.createClass({superClass:gls2.Vc, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    gls2.sc("bgm3", j);
    this.da.pa.direction = 0.5 * Math.PI;
    this.da.pa.speed = 8;
    this.da.pa.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.ba.add(100, "hoshizora_y1");
  this.ba.add(300, "nao1-center");
  this.ba.add(60, "nao1-left");
  this.ba.add(60, "nao1-right");
  this.ba.add(60, "nao1-center");
  this.ba.add(60, "nao1-left");
  this.ba.add(60, "nao1-right");
  this.ba.add(60, "nao1-center");
  this.ba.add(60, "nao1-left");
  this.ba.add(60, "nao1-right");
  this.ba.add(120, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(150, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(60, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(60, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(60, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(60, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(150, "akane-center");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(60, "akane-right");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(60, "akane-left");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-right");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(60, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(120, "akane-center");
  this.ba.add(30, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(30, "akane-right");
  this.ba.add(30, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(30, "akane-left");
  this.ba.add(30, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(180, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(60, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(60, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(60, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(60, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(60, "nao2-center");
  this.ba.add(60, "nao2-left");
  this.ba.add(60, "nao2-right");
  this.ba.add(120, function() {
    this.da.pa.tweener.clear().to({speed:4}, 5E3, "easeInOutQuad").to({direction:90 * (Math.PI / 180)}, 5E3, "easeInOutQuad")
  });
  this.ba.add(100, "hoshizora_y1");
  this.ba.add(1, "heri2-right");
  this.ba.add(1, function() {
    this.da.pa.direction = ~~(180 * (Math.PI / 180));
    this.da.pa.speed = 4;
    this.da.pa.tweener.clear().to({speed:4}, 4E3, "easeInOutQuad")
  });
  this.ba.add(100, "yotsuba");
  this.ba.add(600, "higashi", j);
  this.ba.add(1200, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(300, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(300, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(600, function() {
    this.Vf(function() {
      gls2.sc("bgmBoss", j)
    })
  });
  this.ba.add(1, function() {
    this.da.pa.direction = Math.PI / 2;
    this.da.pa.tweener.clear().to({speed:-10}, 5E3, "easeInOutQuad")
  });
  this.ba.add(600, "momozono")
}, Hd:function() {
  this.da.pa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.tl = tm.createClass({superClass:gls2.Vc, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    gls2.sc("bgm4", j);
    this.da.pa.direction = 0.5 * Math.PI;
    this.da.pa.speed = 1
  });
  this.ba.add(1, function() {
    this.da.pa.tweener.clear().to({speed:9}, 2E3)
  });
  this.ba.add(600, "mana")
}, Hd:function() {
  this.da.pa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.Fj = tm.createClass({superClass:gls2.Vc, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    gls2.sc("bgm5", j);
    this.da.pa.direction = 0.5 * Math.PI;
    this.da.pa.speed = 1;
    this.da.pa.Pl = j
  });
  this.ba.add(200, "urara5-2");
  this.ba.add(460, "nozomi5-1");
  this.ba.add(100, "nozomi5-0");
  this.ba.add(200, "nozomi5-2");
  this.ba.add(400, "mktn5-0")
}, Hd:function() {
  this.da.pa.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {Cd:function(b, a) {
  if(b.parent === l || a.parent === l) {
    return r
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, h = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, q = a.y - a.boundingHeightTop, v = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > m && f < v && h > q
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, hl:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.zd(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.Fi = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:r, title:l, selections:[], description:l, box:l, cursor:l, Ag:l, _selected:0, _opened:r, _finished:r, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Ag = d.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Ag !== l && this.parent.Ag(this.s))
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
}, zd:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function I(b, a, d, f, h) {
  h = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:z()}, h);
  b.hl(gls2.Fi(a, d, h), f)
}
;gls2.Ta = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, Wf:0.85, size:0, image:l, ib:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== i ? a : 1;
  this.Wf = d !== i ? d : 0.85;
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.Wf;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Ta(this.size, this.Gl, this.Wf, this.image)
}});
gls2.Xg = tm.createClass({superClass:gls2.Ta, pa:l, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.pa = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.pa.Ea;
  this.y += this.pa.Fa + 0.3
}, clone:function(b) {
  return gls2.Xg(this.pa, b)
}});
gls2.Di = tm.createClass({width:0, label:l, yb:l, na:0, ci:0, Jg:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.yb = [];
  this.ci = 480 - this.width - 5;
  this.Jg = 5
}, Xj:function(b, a) {
  a === j && (this.yb.clear(), this.yb.push(""));
  5 < this.yb.length && this.yb.splice(1, this.yb.length - 4);
  this.yb.push(b);
  return this
}, $j:function() {
  this.yb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.yb.length) {
    if("" !== this.yb[0]) {
      var a = this.yb[0][0];
      this.yb[0] = this.yb[0].substring(1);
      b += a
    }else {
      this.yb.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.na % 2 ? "_" : " ");
  this.na += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.ci, this.Jg);
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
gls2.Hc = {noise:l, uk:function(b) {
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
gls2.Hc.noise = gls2.Hc.uk(512);
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
gls2.hb = l;
gls2.sc = function(b, a) {
  a || gls2.cf();
  var d = tm.asset.AssetManager.get(b), f = tm.asset.AssetManager.get("bgmLoopInfo");
  d && (gls2.hb = d.clone(), gls2.hb.volume = 0.1 * gls2.core.Pd, gls2.hb.loop = j, gls2.hb.play(), f.data[b] && (gls2.hb.source.Hl = f.data[b].start, gls2.hb.source.xg = f.data[b].end))
};
gls2.cf = function() {
  gls2.hb !== l && gls2.hb.source.Zk === AudioBufferSourceNode.pj && gls2.hb.stop()
};
gls2.Me = function() {
  if(gls2.hb !== l) {
    var b = gls2.hb;
    gls2.hb = l;
    b.loop = r;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.Zk === AudioBufferSourceNode.pj && b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.ta = function(b) {
  if(0 !== gls2.core.hd && gls2.ta.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.hd, gls2.ta.Ug !== l && gls2.ta.Ug.stop(), gls2.ta.Ug = a) : a.volume = 0.1 * gls2.core.hd);
    gls2.ta.played[b] = gls2.core.frame
  }
};
gls2.ta.played = {};
gls2.ta.Ug = l;
(function() {
  var b = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, na:0, fe:[], Oe:r, Ph:l, Wh:0, Ue:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Ph = tm.display.Label().setPosition(240, 256).addChildTo(this);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Oe = r;
      this.jl()
    })
  }, jl:function() {
    for(var a = ("" + Math.floor(gls2.core.ed)).padding(16, " "), b = "", h = 0;h < a.length;h += 4) {
      b += a.substring(h, h + 4) + " "
    }
    this.Ph.text = "HIGH SCORE: " + b.trim()
  }, zd:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.uh(80 * Math.cos(0.01 * this.na) + 240, 80 * Math.sin(0.01 * this.na) + 320, 0);
    this.uh(80 * Math.cos(0.01 * this.na + Math.PI) + 240, 80 * Math.sin(0.01 * this.na + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Oe && this.ai();
    this.na += 1
  }, uh:function(d, f, h) {
    if(!this.Oe) {
      b === l && (b = gls2.Ta(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Ta(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
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
          var a = v.fe.indexOf(this);
          -1 !== a && v.fe.splice(a, 1)
        }
      };
      this.fe.push(h)
    }
  }, ai:function() {
    I(this, "MAIN MENU", ["start", "setting", "tweet high score"], this.Qk, {defaultValue:this.Wh, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30cf\u30a4\u30b9\u30b3\u30a2\u3092Twitter\u306b\u6295\u7a3f\u3057\u307e\u3059"]})
  }, Qk:function(a) {
    2 !== a && (this.Wh = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Oe = j;
          for(var a = 0, b = this.fe.length;a < b;a++) {
            this.fe[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.Ej())
        }.bind(this));
        break;
      case 1:
        this.Nc();
        break;
      case 2:
        a = "TM-Shooter SCORE: {score}(stage{stage} {type}-{style} continue:{cont})".format({score:this.app.ed, stage:this.app.jg, type:"ABC"[this.app.lg], style:["S", "L", "EX"][this.app.kg], cont:this.app.ig}), a = tm.social.Twitter.createURL({type:"tweet", text:a, hashtags:"tmshooter", url:"http://tmshooter.dev7.jp"}), window.open(a)
    }
  }, Nc:function() {
    I(this, "SETTING", ["bgm volume", "sound volume"], this.Eg, {defaultValue:this.Ue, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Eg:function(a) {
    3 !== a && (this.Ue = a);
    switch(a) {
      case 0:
        this.Fg();
        break;
      case 1:
        this.Gg();
        break;
      default:
        this.ai()
    }
  }, Fg:function() {
    I(this, "BGM VOLUME", "012345".split(""), this.Cg, {defaultValue:gls2.core.Pd, onCursorMove:function(a) {
      gls2.hb !== l && "exit" !== a && (gls2.hb.volume = 0.1 * a)
    }, showExit:r})
  }, Cg:function(a) {
    6 !== a && (gls2.core.Pd = a);
    this.Nc()
  }, Gg:function() {
    I(this, "SE VOLUME", "012345".split(""), this.Dg, {defaultValue:gls2.core.hd, showExit:r})
  }, Dg:function(a) {
    6 !== a && (gls2.core.hd = a);
    this.Nc()
  }, Kl:function() {
    I(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Pk, {defaultValue:gls2.core.Hh, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Pk:function(a) {
    5 !== a && (gls2.core.Hh = a);
    this.Nc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.Ej = tm.createClass({superClass:gls2.Scene, mode:0, types:l, df:l, Wb:l, Xb:l, Yb:l, tg:l, rg:l, type:0, style:0, Jc:r, We:r, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.cl();
    this.df = this.bl();
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
    this.df.visible = r;
    this.zg(-1, j);
    this.Wb.update();
    this.Xb.update();
    this.Yb.update();
    gls2.ta("voSelectShip");
    gls2.sc("bgmShipSelect", j)
  }, cl:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.tg = tm.display.Label("Type-A").setPosition(240, 150);
    this.tg.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.ug = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.ug.update = function() {
      this.ug.text = b[this.type]
    }.bind(this);
    this.ug.addChildTo(a);
    var f = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.Wb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.Xb = tm.display.AnimationSprite(f, 64, 64).gotoAndPlay("typeB");
    this.Yb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.Wb.bb = 0;
    this.Xb.bb = 1;
    this.Yb.bb = 2;
    this.Wb.setScale(3).setPosition(0, 320).addChildTo(a);
    this.Xb.setPosition(0, 320).addChildTo(a);
    this.Yb.setPosition(0, 320).addChildTo(a);
    this.Wb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.bb / 3 * Math.PI)
    };
    this.Xb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.bb / 3 * Math.PI)
    };
    this.Yb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.bb / 3 * Math.PI)
    };
    return a
  }, bl:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.rg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.rg.addChildTo(a);
    this.Qc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.zc = tm.app.Object2D();
    this.zc.addChildTo(this.Qc);
    this.zc.update = function(a) {
      this.zc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
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
    this.Qc.line = b(0, 0, 0, 130, 8);
    this.Qc.line.addChildTo(this.Qc);
    this.wa.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.zc)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.sg = tm.display.Label(d[0], 16).setPosition(240, 500);
    this.sg.update = function() {
      this.sg.text = d[this.style]
    }.bind(this);
    this.sg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.df.visible = r, !this.We && a.keyboard.getKeyDown("left")) {
        this.zg(-1, r), gls2.ta("select")
      }else {
        if(!this.We && a.keyboard.getKeyDown("right")) {
          this.zg(1, r), gls2.ta("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.ta("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.df.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (gls2.ja.Vg ? this.Vk() : (this.Jc = j, this.$h()), gls2.ta("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.kl(0 === ~~(a.frame / 60) % 
      2))
    }
  }, Vk:function() {
    I(this, "AUTO BOMB", ["on", "off"], this.Lk, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, Lk:function(a) {
    2 !== a && (this.Jc = 0 === a, this.$h())
  }, $h:function() {
    I(this, "ARE YOU READY?", ["ok"], this.Mk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, Mk:function(a) {
    0 === a && this.el()
  }, zg:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.Wb, this.Xb, this.Yb][this.type].remove().addChildTo(this.types);
    b ? (this.Wb.bb -= a, this.Wb.scaleX = 0 === this.type ? 5 : 1, this.Wb.scaleY = 0 === this.type ? 5 : 1, this.Xb.bb -= a, this.Xb.scaleX = 1 === this.type ? 5 : 1, this.Xb.scaleY = 1 === this.type ? 5 : 1, this.Yb.bb -= a, this.Yb.scaleX = 2 === this.type ? 5 : 1, this.Yb.scaleY = 2 === this.type ? 5 : 1) : (this.We = j, this.Wb.tweener.clear().to({bb:this.Wb.bb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.Xb.tweener.clear().to({bb:this.Xb.bb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.Yb.tweener.clear().to({bb:this.Yb.bb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.We = r
    }.bind(this)));
    this.tg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, el:function() {
    gls2.core.da.Jc = this.Jc;
    gls2.core.da.start(this.type, this.style);
    gls2.core.replaceScene(gls2.core.da);
    gls2.Me()
  }, kl:function(a) {
    this.rg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.Qc.line.ec = r, this.wa[0].line.ec = r, this.wa[1].line.ec = r, this.wa[2].line.ec = r, this.wa[3].line.ec = r) : (this.Qc.line.ec = j, this.wa[0].line.ec = j, this.wa[1].line.ec = j, this.wa[2].line.ec = j, this.wa[3].line.ec = j);
    a ? (this.wa[0].visible = j, this.wa[1].visible = j, 1 === this.style ? (this.wa[2].visible = r, this.wa[3].visible = r) : (this.wa[2].visible = j, this.wa[3].visible = j), this.Qc.line.lineWidth = 5) : (this.wa.each(function(a) {
      a.visible = r
    }), this.Qc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, zd:z()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, ec:j, init:function(a, b, f, h, m) {
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
    if(this.ec && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), f = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - f, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - f, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + f, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + f, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.Wa = tm.createClass({superClass:gls2.Scene, fa:l, score:0, He:0, gb:0, Ua:0, Zd:0, $a:0, Kc:0, Qg:0, le:l, pa:l, Sc:3, $e:0, af:0, rc:0, Ke:0, $d:0, yg:0, Jc:r, Fb:0, bd:0, zh:0, fd:r, Te:r, qc:0, Bb:0, Ka:r, Xd:0, Bd:0, Sa:0, wd:0, Fl:0, El:0, Qe:l, Kh:l, Ig:l, Ih:l, eg:l, fg:l, Yf:l, Dk:l, Sb:l, Kb:l, $b:l, Td:r, Ck:r, init:function() {
  gls2.Wa.Kd !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.Wa.Kd = this;
  this.Kb = gls2.Dj(this);
  this.Kb.ub.addChildTo(this);
  this.pa = gls2.Ni().Ba;
  this.pa.addChildTo(this);
  this.Qe = gls2.Wa.Layer().addChildTo(this);
  this.Kh = gls2.Wa.Layer().addChildTo(this);
  this.Ih = gls2.Wa.Layer().addChildTo(this);
  this.eg = gls2.Wa.Layer().addChildTo(this);
  this.Ig = gls2.Wa.Layer().addChildTo(this);
  this.fg = gls2.Wa.Layer().addChildTo(this);
  this.Yf = gls2.Wa.Layer().addChildTo(this);
  this.Dk = gls2.Wa.hh(this).addChildTo(this);
  tm.zb.Tc.Sd.xh = this;
  this.Sb = tm.app.Object2D();
  this.Sb.addChildTo(this);
  this.Sb.update = function(b) {
    this.Tk(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Kb.clear()
  })
}, addChild:function(b) {
  b.ib ? this.eg.addChild(b) : b instanceof gls2.Oa ? this.Yf.addChild(b) : b instanceof gls2.Nf ? this.Qe.addChild(b) : b instanceof gls2.ha ? b.Dc ? this.Qe.addChild(b) : this.Ih.addChild(b) : b instanceof gls2.nh ? this.Ig.addChild(b) : b === this.Sb || b === this.pa || b instanceof gls2.Wa.Layer || b instanceof gls2.Wa.hh || b instanceof gls2.ph ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(b)))
}, update:function(b) {
  this.$k(b.keyboard);
  this.le.update(b.frame);
  0 === b.frame % 2 && this.Kb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.cf()) : b.keyboard.getKeyDown("space") ? this.ee(0) : b.keyboard.getKeyDown("p") && (this.Og().saveAsImage(), this.ee(0))
}, Og:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.pa.pa.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Kb.element, 0, 0);
  return b
}, Tk:function() {
  this.fa.Ac === r && gls2.ia.erase();
  var b;
  b = [].concat(gls2.ha.pb);
  for(var a = [].concat(gls2.sd.pb), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var h = b[f], m = a[d];
      if(!(0 >= h.sa) && gls2.Collision.Cd(h, m) && (m.Pe(1), m.remove(), h.Bc(m.Zc))) {
        this.rc += 1;
        this.Ka ? this.xb(gls2.ja.$i) : this.xb(gls2.ja.Zi);
        this.Bg(h);
        break
      }
    }
  }
  m = this.fa.Rb;
  if(this.fa.Pb) {
    b = [].concat(gls2.ha.pb);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(h = b[f], !(0 >= h.sa) && gls2.Collision.Cd(h, m)) {
        m.al(h.y + h.boundingHeightBottom);
        h.Bc(m.Zc) ? (this.rc += 1, this.Ka ? this.xb(gls2.ja.Yi) : this.xb(gls2.ja.Vi), this.Bg(h)) : (this.$a = Math.min(this.$a + 0.02, 1), this.Ka ? (this.td(0.01 * gls2.ja.of[this.wd]), this.xb(gls2.ja.Xi)) : (this.td(0.01), this.xb(gls2.ja.Wi)));
        m.Pe(2);
        break
      }
    }
    a = {x:this.fa.x, y:this.fa.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(gls2.ha.pb);
    for(f = b.length;b[--f] !== i;) {
      h = b[f], !(0 >= h.sa) && gls2.Collision.Cd(h, a) && (h.Bc(m.Zc) ? (this.rc += 1, this.Ka ? this.xb(gls2.ja.Ui) : this.xb(gls2.ja.Ri), this.Bg(h)) : (this.$a = Math.min(this.$a + 0.02, 1), this.Ka ? (this.td(0.01 * gls2.ja.of[this.wd]), this.xb(gls2.ja.Ti)) : (this.td(0.01), this.xb(gls2.ja.Si))), m.rk(2, this.fa.x, this.fa.y - 30))
    }
  }
  if(this.fd) {
    gls2.ia.erase();
    b = [].concat(gls2.ha.pb);
    for(f = b.length;b[--f] !== i;) {
      h = b[f], !(0 >= h.sa) && (h.dc() && h.Bc(gls2.ja.pi)) && (this.Yc(h.score), this.rc += 1)
    }
    this.$a = this.Ua = 0
  }
  if(this.Ka) {
    f = [].concat(gls2.sd.pb);
    for(h = f.length;f[--h] !== i;) {
      if(m = f[h], !(0 >= m.sa)) {
        a = [].concat(gls2.Oa.pb);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== r && (0 < m.sa && gls2.Collision.Cd(m, d)) && (d.sa -= 6 - this.Bb, 0 > d.sa && (d.Da(), this.Yc(gls2.ja.ti), this.td(gls2.ja.ri), this.Oh(r, r, d.x, d.y, 1)), m.sa -= 1)
        }
      }
    }
  }
  if(this.Td) {
    gls2.ia.erase()
  }else {
    if(this.fa.parent !== l && this.fa.Ed === r && this.fd === r && 0 >= this.Xd && !gls2.ja.lj) {
      for(f = gls2.Oa.pb.length;gls2.Oa.pb[--f] !== i;) {
        if(b = gls2.Oa.pb[f], b.visible !== r && gls2.Collision.Cd(b, this.fa)) {
          this.fa.Bc();
          0 < this.Fb && this.Jc ? (this.Bb = gls2.ma.clamp(this.Bb - 1, 0, 1), this.Nd(-0.01), gls2.kh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this)) : this.Yh();
          break
        }
      }
      for(f = gls2.ha.pb.length;gls2.ha.pb[--f] !== i;) {
        if(h = gls2.ha.pb[f], !(0 >= h.sa) && !h.Dc && gls2.Collision.Cd(h, this.fa)) {
          this.fa.Bc();
          0 < this.Fb && this.Jc ? (this.Bb = gls2.ma.clamp(this.Bb - 1, 0, 1), this.Nd(-0.01), gls2.kh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this)) : this.Yh();
          break
        }
      }
    }
    this.Ka && (this.Bd -= 1, 0 >= this.Bd && this.Je());
    this.Xd = Math.max(this.Xd - 1, 0);
    this.$a -= gls2.ja.Ai * gls2.ja.Bi;
    0 >= this.$a && (this.$a = 0, this.Ka || 0 < this.Sa ? this.Kc = this.Ua = this.gb = 0 : (0 < this.Ua && (0 >= this.Kc && (this.Kc = this.Ua * gls2.ja.zi), this.gb = this.gb * (this.Ua - this.Kc) / this.Ua, this.Ua -= this.Kc), 0 >= this.Ua && (this.Kc = this.Ua = this.gb = 0)));
    this.Te && (this.score += gls2.ja.kj)
  }
}, Bg:function(b) {
  this.Oh(b.Dc, this.Ka || gls2.Cc(b, this.fa) < gls2.ja.Ci, b.x, b.y, b.star, b instanceof gls2.nd);
  this.td(gls2.ja.of[this.wd]);
  for(var a = this.gb, d = ~~(this.Ua / gls2.ja.ah) + 1, f = 0;f < d;f++) {
    a += b.score, this.Yc(a)
  }
  this.gb += b.score * d
}, Oh:function(b, a, d, f, h, m) {
  b = b ? gls2.Hj : gls2.rh;
  for(var q = 0;q < h;q++) {
    var v = b(a);
    v.setPosition(d, f);
    m && (v.dd = j)
  }
}, Kk:function(b) {
  gls2.ta("star");
  b.Uh ? (this.af += 1, this.gb += gls2.ja.xj, this.Yc(gls2.ja.Bj + this.gb * gls2.ja.zj), this.Ka ? this.xb(gls2.ja.dj) : this.xb(gls2.ja.cj)) : (this.$e += 1, this.gb += gls2.ja.wj, this.Yc(gls2.ja.Aj + this.gb * gls2.ja.yj), this.Ka ? this.xb(gls2.ja.bj) : this.xb(gls2.ja.aj))
}, start:function(b, a) {
  this.Kb.vd.$j().clear();
  this.He = this.score = 0;
  this.Sc = gls2.ja.fh;
  this.Fb = this.bd = gls2.ja.eh[a];
  this.zh = gls2.ja.qi[a];
  this.Sa = this.Bb = this.qc = 0;
  this.Je();
  this.fd = r;
  this.$d = this.yg = 0;
  this.fa = gls2.nh(this, b, a);
  this.Ng(gls2.ja.gj);
  G.Ra.Qb.$ex = 2 !== a ? 0 : 1;
  this.ji(0);
  gls2.ta("voLetsGo");
  this.gl()
}, ji:function(b) {
  this.tb("3...2...1...");
  this.fa.parent !== l && this.fa.remove();
  gls2.ha.Qd();
  gls2.sd.Qd();
  gls2.ia.Qd();
  this.Qe.removeChildren();
  this.eg.removeChildren();
  this.fg.removeChildren();
  this.Ig.removeChildren();
  this.Yf.removeChildren();
  this.Sb.removeChildren();
  this.rc = this.Ke = this.af = this.$e = this.Zd = this.$a = this.Ua = this.gb = 0;
  this.$b = l;
  this.Ck = this.Td = r;
  this.$d = 0;
  this.Kb.ub.Vd = 0;
  this.Bb = this.Kb.ub.oc = 0;
  this.Qg = b;
  this.le = gls2.Vc.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.vg()
  }.bind(this));
  this.pa.tweener.clear()
}, vg:function() {
  this.tb("Let's go!");
  this.fa.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.fa.Rb.addChildTo(this);
  this.fa.Ac = r;
  this.fa.Ed = j;
  this.fa.Ad = r;
  this.fa.Pb = r;
  this.fa.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Od = this.Ac = j
  }.bind(this.fa)).wait(gls2.ja.ij).call(function() {
    this.Ed = r
  }.bind(this.fa))
}, Yh:function() {
  gls2.ra.Le(this.fa.x, this.fa.y, this);
  this.tb("I was shot down.");
  this.fa.Ac = r;
  this.fa.remove();
  this.Sc -= 1;
  this.Sa = this.Kc = this.Ua = this.$a = 0;
  this.$d += 1;
  this.yg += 1;
  this.Bb = gls2.ma.clamp(this.Bb - 3, 0, 1);
  this.Nd(-0.03);
  if(0 < this.Sc) {
    this.tweener.clear().wait(1E3).call(function() {
      if(!this.Jc || !gls2.ja.Vg) {
        this.bd = Math.min(this.bd + 1, this.zh)
      }
      this.Fb = this.bd;
      this.vg()
    }.bind(this))
  }else {
    if(gls2.core.ed === this.score) {
      var b = this.Og();
      gls2.core.Qh = b.canvas.toDataURL("image/png")
    }
    this.tweener.clear().wait(2E3).call(function() {
      this.Xk()
    }.bind(this))
  }
}, Ng:function(b) {
  G.Ra.Qb.$rank = gls2.ma.clamp(b, 0, 0.5)
}, Nd:function(b) {
  this.Ng(G.Ra.Qb.$rank + b)
}, pk:function() {
  this.tb("System rebooted.", j);
  this.score = 0;
  this.He += 1;
  this.Sc = gls2.ja.fh;
  this.Fb = this.bd = gls2.ja.eh[this.fa.style];
  this.Bb = 0;
  this.Ng(0);
  this.vg()
}, ak:function() {
  gls2.sc("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.Sb);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(gls2.ResultScene(this, this.Og()));
    b.remove()
  }.bind(this))
}, qk:function() {
  gls2.cf();
  this.app.replaceScene(gls2.Li())
}, Cl:z(), Yc:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < gls2.ja.bh.length;b++) {
    var d = gls2.ja.bh[b];
    a < d && d <= this.score && this.Jh()
  }
  gls2.core.ed = Math.max(gls2.core.ed, this.score);
  gls2.core.ed === this.score && (gls2.core.jg = this.Qg, gls2.core.lg = this.fa.type, gls2.core.kg = this.fa.style, gls2.core.ig = this.He)
}, td:function(b) {
  this.Kc = 0;
  this.Ua += b;
  this.Zd = Math.max(this.Zd, this.Ua);
  1 <= b && (this.$a = 1)
}, xb:function(b) {
  if(this.Sa !== gls2.ja.pf) {
    for(b *= gls2.ja.ej;1 < b;) {
      gls2.mf(this.fa).addChildTo(this), b -= 1, this.qc = 0, this.Sa += 1, 1 === this.Sa ? (this.tb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.tb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady"))
    }
    this.qc = gls2.ma.clamp(this.qc + b, 0, 1);
    1 <= this.qc && (gls2.mf(this.fa).addChildTo(this), this.Sa += 1, this.qc -= 1, 1 === this.Sa ? (this.tb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.tb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady")))
  }
}, fl:function() {
  0.5 > Math.random() ? (this.tb("HYPER SYSTEM start!!", j), gls2.ta("voHyperStart0")) : (this.tb("start counting to system limit.", j), gls2.ta("voHyperStart1"));
  this.Bb = gls2.ma.clamp(this.Bb + 1, 0, 5);
  this.Nd(0.01 * this.Sa);
  G.Ra.Qb.$hyperOff = gls2.ja.Hi * (2 !== this.fa.style ? 1 : 0.5);
  this.Bd = gls2.ja.se;
  this.Xd = gls2.ja.se * gls2.ja.Qi;
  this.fa.Re.Gd(this.Sa);
  this.fa.Rb.Gd(this.Sa);
  this.fa.xd = this.fa.Re;
  gls2.ra.sk(this.fa.x, this.fa.y, this);
  this.Ka = j;
  this.wd = this.Sa;
  this.qc = this.Sa = 0;
  gls2.ia.erase(j, j)
}, Je:function() {
  this.Ka !== r && (this.Ka = r, gls2.mf(this.fa, j).addChildTo(this), this.fa.xd = this.fa.Zh, G.Ra.Qb.$hyperOff = 1 * (2 !== this.fa.style ? 1 : 0.5), this.fa.Re.Gd(0), this.fa.Rb.Gd(0), this.Xd = gls2.ja.se * gls2.ja.Pi, this.wd = this.Bd = 0, gls2.ia.erase())
}, Wj:function() {
  gls2.ta("decision");
  gls2.ta("voGetBomb");
  this.Fb = Math.min(this.Fb + 1, this.bd);
  this.Te = this.Fb === this.bd
}, Jh:function() {
  gls2.ta("voExtend");
  this.tb("extended.");
  this.Sc += 1
}, tb:function(b, a) {
  this.Kb.vd.Xj(b, a)
}, ee:function(b) {
  I(this, "PAUSE", ["resume", "setting", "exit game"], this.Sk, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:r})
}, Sk:function(b) {
  switch(b) {
    case 1:
      this.Nc();
      break;
    case 2:
      this.Wk()
  }
}, Nc:function() {
  I(this, "SETTING", ["bgm volume", "sound volume"], this.Eg, {defaultValue:this.Ue, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Eg:function(b) {
  3 !== b && (this.Ue = b);
  switch(b) {
    case 0:
      this.Fg();
      break;
    case 1:
      this.Gg();
      break;
    default:
      this.ee()
  }
}, Wk:function() {
  I(this, "REARY?", ["yes", "no"], this.Nk, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:r})
}, Nk:function(b) {
  0 === b ? (gls2.cf(), this.app.replaceScene(gls2.TitleScene())) : this.ee(1)
}, Fg:function() {
  I(this, "BGM VOLUME", "012345".split(""), this.Cg, {defaultValue:gls2.core.Pd, onCursorMove:function(b) {
    gls2.hb !== l && 6 !== b && (gls2.hb.volume = 0.1 * b)
  }, showExit:r})
}, Cg:function(b) {
  6 !== b && (gls2.core.Pd = b);
  this.Nc(1)
}, Gg:function() {
  I(this, "SE VOLUME", "012345".split(""), this.Dg, {defaultValue:gls2.core.hd, showExit:r})
}, Dg:function(b) {
  6 !== b && (gls2.core.hd = b);
  this.Nc(1)
}, Xk:function() {
  I(this, "CONTINUE?", ["yes", "no"], this.Ok, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:r})
}, Ok:function(b) {
  switch(b) {
    case 0:
      this.pk();
      break;
    case 1:
      this.qk()
  }
}, zd:z(), dl:function() {
  this.Kb.ub.tweener.clear().to({Vd:-480}, 1600, "easeInBack").to({oc:30}, 800, "easeInOutBack")
}, xk:function() {
  this.Kb.ub.tweener.clear().to({oc:0}, 800, "easeInOutBack").to({Vd:0}, 1600, "easeOutBack")
}, he:l, ie:0, Yd:l, ue:0, gl:function() {
  if(1 === this.ue) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.Yd = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.he = [];
    this.ie = 0
  }else {
    if(2 === this.ue && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.Yd = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.Yd.push(d[f])
        }
      }
    }
  }
}, $k:function(b) {
  if(1 === this.ue) {
    1E3 < this.he.length && (console.log("save"), localStorage.setItem("rec" + this.ie, this.he), localStorage.setItem("recCount", this.ie), this.he = [], this.ie += 1), this.he.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.ue && this.Yd) {
      var a = this.Yd.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : r
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : r
      })
    }
  }
}});
gls2.Wa.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.Wa.hh = tm.createClass({superClass:tm.display.CanvasElement, da:l, frame:0, init:function(b) {
  this.superInit();
  this.da = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.dk(b);
  this.ek(b)
}, dk:function(b) {
  if(0 < this.da.$a) {
    b.fillStyle = "rgba(255," + ~~(255 * this.da.$a) + "," + ~~Math.min(255, 512 * this.da.$a) + ",0.5)";
    var a = 500 * this.da.$a;
    b.fillRect(465, 635 - a, 10, a)
  }
}, ek:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.Sa === gls2.ja.pf ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.da.qc && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.da.qc, 9))
}});
gls2.Wa.Kd = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, da:l, gi:l, Sb:l, values:l, labels:l, Se:l, di:[gls2.ja.uj, gls2.ja.vj, gls2.ja.rj, gls2.ja.sj, 1], Th:l, Lg:l, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.da = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.da.$e, this.da.af, ~~(100 * (this.da.rc / this.da.Ke)), this.da.Zd, 0 === this.da.$d ? gls2.ja.tj : 0];
  this.Se = this.values.map(function(a) {
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
  this.Th = tm.display.Label(Math.floor(this.da.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.Lg = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.Lg.visible = r;
  this.gi = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var h = 0;16 > h;h++) {
      f[d][h] = {Mg:0, Ye:0, Fc:gls2.ma.randf(-2, 2), fc:gls2.ma.randf(1, 4)}
    }
  }
  this.Sb = tm.app.Object2D();
  this.Sb.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var h = 0;h < f[d].length;h++) {
        var n = f[d][h];
        640 > 40 * h + n.Ye && (a.drawImage(this.gi.element, 40 * d, 40 * h, 40, 40, 40 * d + n.Mg, 40 * h + n.Ye, 40, 40), n.Mg += n.Fc, n.Ye += n.fc, n.fc += 0.3, b = r)
      }
    }
    this.wait = 60;
    b && this.Sb.remove();
    a.restore()
  }.bind(this);
  this.Sb.addChildTo(this);
  this.addEventListener("exit", function() {
    gls2.Me()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.ta("star"), this.values[a] <= this.Se[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.da.Yc(this.values[a] * this.di[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.da.Yc(this.Se[a] * this.di[a]), this.values[a] -= this.Se[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.Th.text = Math.floor(this.da.score)
    }else {
      if(this.Lg.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.ta("decision"), this.da.ji(this.da.Qg + 1), b.popScene()
      }
    }
    this.frame += 1
  }
}, zd:z()});
gls2.Li = tm.createClass({superClass:gls2.Scene, na:0, Hg:r, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.na = 0;
    this.Hg = r
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.na && !this.Hg) && this.Yk();
  this.na += 1
}, zd:function(b) {
  b.clearColor("black")
}, Yk:function() {
  this.Hg = j;
  I(this, "GAME OVER", ["save score", "exit"], this.Rk, {defaultValue:0, menuDescriptions:["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"], showExit:r})
}, Rk:function(b) {
  0 === b ? this.app.Kg(l, function() {
    this.app.replaceScene(gls2.TitleScene())
  }.bind(this)) : this.app.replaceScene(gls2.TitleScene())
}});
gls2.nl = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit()
}, update:z()});
(function() {
  gls2.ha = tm.createClass({superClass:tm.display.CanvasElement, name:l, fa:l, da:l, le:l, sa:0, Mc:0, score:0, Dc:r, erase:r, star:1, Bk:r, Gb:j, Pa:r, frame:0, ef:l, direction:0, speed:0, ga:l, init:function(a, d, f) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Pa = r;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.Gb = j;
    this.da = a;
    this.fa = a.fa;
    this.score = 100;
    this.erase = r;
    this.Vj(f);
    d.setup(this);
    this.altitude = this.Dc ? 1 : 10;
    this.ef = {x:0, y:0}
  }, de:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, Jl:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Pa === r && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Pa = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Dc && (this.x += this.da.pa.Ea, this.y += this.da.pa.Fa);
    this.Pa && (this.frame += 1);
    this.ef.x = this.x - a;
    this.ef.y = this.y - b
  }, Bc:function(a) {
    if(!this.Pa) {
      return r
    }
    this.sa -= a;
    if(0 >= this.sa) {
      return a = gls2.ma.randf(0, 5), 2 > a ? this.da.tb("enemy destroy.") : 4 > a ? this.da.tb(this.name + " destroy.") : this.da.tb("ETR reaction gone."), this.erase && gls2.ia.erase(j, this.da.Ka, this instanceof gls2.nd), this.dispatchEvent(tm.event.Event("destroy")), this.Da(), j
    }
    40 > this.sa && this.Qa();
    return r
  }, Da:function() {
    gls2.ra.Le(this.x, this.y, this.da, this.ef);
    this.remove()
  }, dc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Uk:function() {
    return this.Gb
  }, Qa:z(), Vj:function(a) {
    this.name = a;
    a = gls2.ha.Ei[a];
    this.sa = this.Mc = a[0];
    this.score = a[1];
    this.Dc = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, nc:function() {
    this.remove();
    this.da.Kh.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Le(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.da, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.gg(this.x, this.y, this.da);
      this.remove()
    }.bind(this))
  }, De:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Le(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.da, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.gg(this.x, this.y, this.da);
      this.remove()
    }.bind(this))
  }});
  gls2.ha.Qd = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = gls2.ha.pb = []
})();
gls2.nd = tm.createClass({superClass:gls2.ha, Bk:j, Mc:0, Ze:l, init:function(b, a, d) {
  this.Ze = a;
  this.superInit(b, this.Ze[0], d);
  this.Mc = this.sa;
  this.addEventListener("added", function() {
    this.da.$b = this;
    this.da.dl();
    this.tweener.wait(1E3).call(function() {
      this.da.Td = r
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.da.$b = l;
    this.da.xk();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.da.ak()
    }.bind(this));
    a.addChildTo(this.da.Sb)
  })
}, Bc:function(b) {
  var a = this.sa;
  if(gls2.ha.prototype.Bc.call(this, b)) {
    return this.da.Td = j, this.da.fa.Od = r, gls2.Me(), j
  }
  this.sa <= 0.55 * this.Mc && 0.55 * this.Mc < a ? (gls2.ca.bf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Hb(this.x, this.y, this.da), gls2.ia.erase(j, this.da.Ka), this.Ze[1].setup(this)) : this.sa <= 0.1 * this.Mc && 0.1 * this.Mc < a && (gls2.ca.bf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Hb(this.x, this.y, this.da), gls2.ia.erase(j, this.da.Ka), this.Ze[2].setup(this), gls2.ta("voJacms"))
}});
(function() {
  gls2.ha.Ei = {kujo:[2, 300, r, r, 1, {radius:24}], kiryu:[3, 400, r, r, 1, {radius:24}], natsuki:[5, 900, j, r, 1, {radius:24}], kise:[50, 15E3, j, r, 1, {radius:24}], yamabuki:[100, 15E3, j, r, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, r, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, r, r, 5, {width:100, height:20}], kasugano:[4, 1E3, r, r, 1, {radius:24}], 
  kurokawa:[35, 5E3, r, r, 5, {width:100, height:20}], akimoto:[250, 3E5, r, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, r, j, 20, {width:180, heightBottom:40, heightTop:60}], aono:[250, 3E5, r, j, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, r, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, r, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, r, j, 20, {width:300, height:80}], higashi:[1500, 12E5, r, j, 20, {width:256, height:128}], momozono:[6E3, 
  35E5, r, j, 0, {width:256, height:128}], hyuga:[6E3, 3E6, r, j, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, r, j, 20, {radius:130}], aida:[8E3, 4E6, r, j, 0, {width:370, heightBottom:5, heightTop:60}], erika:[30, 500, r, r, 1, {width:24, height:48}], hino:[30, 500, r, r, 1, {width:24, height:48}], hoshizora_y:[100, 2E4, r, j, 30, {width:128, height:64}], hoshizora_t:[100, 2E4, r, j, 30, {width:128, height:64}], yotsuba:[300, 1E5, r, j, 30, {width:64, height:64}], yotsubaLeaf:[150, 3E4, r, 
  r, 10, {width:32, height:32}], midorikawa:[5, 1E3, r, r, 1, {width:32, height:32}], aoki:[5, 1200, r, r, 1, {width:32, height:32}]};
  gls2.ha.oa = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
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
  gls2.ha.la = tm.createClass({superClass:gls2.ha, Sf:l, Tf:l, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.Sf = b("tex_tank1", 64, 64);
    this.Tf = b("tex_tank1", 64, 64);
    this.$c = this.$c || 0;
    this.mc = this.mc || 0
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    for(a = this.$c;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.mc;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.Sf.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.Tf.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Sf.draw(a);
    this.Tf.draw(a)
  }, Da:function() {
    gls2.ra.ik(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.Zg = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.ea = b("tex2", 256, 128).setFrameIndex(7)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.wb = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.ea = b("tex1", 64, 64).setFrameIndex(23)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.La = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kasugano");
    this.ea = b("tex1", 64, 64).setFrameIndex(23);
    this.lc = gls2.Ta(80, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && this.lc.clone().setPosition(this.x, this.y).addChildTo(this.da)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.Gc = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.xc = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.ea = b("tex1", 256, 128).setFrameIndex(1)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.nc()
  }});
  gls2.ha.Bf = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "aono");
    this.ea = b("tex1", 256, 128);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 128;
    this.setScale(1.2);
    this.Db = gls2.Ta(50, 1, 0.95)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Db.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.da), this.Db.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.da))
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.nc()
  }});
  gls2.ha.rd = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "yumehara");
    this.ea = b("tex1", 256, 256);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 256;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 256
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.nc()
  }});
  gls2.ha.Na = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.we = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "hanasaki");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Qa:z(), Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.sf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "myodoin");
    this.ea = b("tex1", 128, 128).setFrameIndex(12)
  }, Qa:z(), Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.gc = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.kf = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "minazuki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256;
    this.setScale(1.2)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    this.remove()
  }});
  gls2.ha.Ja = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hino");
    this.ea = b("hino", 64, 32).setFrameIndex(0);
    this.boundingWidth = 64;
    this.boundingHeightBottom = 0;
    this.boundingHeightTop = 32
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.qa = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, b) {
    this.superInit(a, b, "midorikawa");
    this.boundingWidthLeft = 0;
    this.boundingWidthRight = 32;
    this.boundingHeightTop = 0;
    this.boundingHeightBottom = 32
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  gls2.ha.fi = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, b) {
    this.superInit(a, b, "aoki");
    this.boundingWidthLeft = 0;
    this.boundingWidthRight = 32;
    this.boundingHeightTop = 0;
    this.boundingHeightBottom = 32
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, de:function() {
    480 < this.x && (this.speed *= -1)
  }});
  gls2.ha.be = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_y");
    this.ea = b("hoshizora_y", 256, 128).setFrameIndex(0);
    this.boundingWidth = 256;
    this.boundingHeightBottom = 16;
    this.boundingHeightTop = 64
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Pa === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Pa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.nc()
  }, de:function() {
    480 < this.x && (this.ea.scaleX = -1)
  }});
  gls2.ha.ae = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_t");
    this.ea = b("hoshizora_t", 64, 128).setFrameIndex(0);
    this.boundingWidth = 128;
    this.boundingHeightBottom = 16;
    this.boundingHeightTop = 32
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Pa === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Pa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.nc()
  }});
  gls2.ha.ff = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "yotsuba");
    this.ea = b("yotsuba", 128, 128).setFrameIndex(0);
    this.boundingWidth = 128;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.gg(this.x, this.y, this.da);
    this.nc();
    this.da.fd || gls2.Ii(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove();
    for(var a = 0;4 > a;a++) {
      this.Ec[a] && this.Ec[a].Da()
    }
    delete this.Ec
  }, de:function() {
    this.Ec = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Ec[a] = this.le.wg({$:gls2.ha.gf, aa:gls2.ca.gf, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Ec[a].dir = b;
      this.Ec[a].dg = this;
      this.Ec[a].Jk = a;
      this.Ec[a].distance = 64
    }
    gls2.ha.prototype.de.call(this);
    return this
  }});
  gls2.ha.gf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
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
    gls2.ra.Hb(this.x, this.y, this.da);
    this.dg.Ec[this.Jk] = l;
    this.remove()
  }});
  gls2.ha.Jd = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "erika");
    this.ea = b("tex3", 64, 128);
    this.ea.setFrameIndex(8)
  }, Qa:z(), draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    gls2.ra.Hb(this.x, this.y, this.da);
    gls2.yi(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ha.qf = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.ea = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Da:function() {
    this.nc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Cf = tm.createClass({superClass:gls2.nd, ea:l, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.ea = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Da:function() {
    this.De()
  }});
  gls2.ha.xf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "mishou");
    this.ea = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Db = gls2.Ta(80, 1, 0.9);
    this.lc = gls2.Ta(256, 1, 0.9)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Db.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.da), this.Db.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.da), this.lc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.da))
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Da:function() {
    this.nc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Cj = tm.createClass({superClass:gls2.nd, init:function(a, d) {
    this.superInit(a, d, "hyuga");
    this.ea = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Da:function() {
    this.De()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Mf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "higashi");
    this.ea = b("higashi", 256, 128).setFrameIndex(0)
  }, Qa:z(), Da:function() {
    this.nc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.jj = tm.createClass({superClass:gls2.nd, init:function(a, d) {
    this.superInit(a, d, "momozono");
    this.ea = b("momozono", 256, 128).setFrameIndex(0);
    this.ea.setScale(2)
  }, Qa:z(), Da:function() {
    this.De()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.If = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hishikawa");
    this.ea = b("tex2", 256, 256).setFrameIndex(2);
    this.ea.setScale(2);
    this.Db = gls2.Ta(60, 1, 0.95);
    this.lc = gls2.Ta(500, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Db.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Db.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.lc.clone().setPosition(this.x, this.y).addChildTo(this.da))
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Da:function() {
    this.nc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.mj = tm.createClass({superClass:gls2.nd, init:function(a, d) {
    this.superInit(a, d, "aida");
    this.ea = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Db = gls2.Ta(60, 1, 0.95);
    this.lc = gls2.Ta(500, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Db.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Db.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Db.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.Db.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.da), this.lc.clone().setPosition(this.x, this.y).addChildTo(this.da))
  }, Qa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Da:function() {
    this.De()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, Sg:l, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.Sg = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, kb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Sg + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = h
  }, jb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Sg;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = h
  }})
})();
(function() {
  gls2.ca = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.ca.bf(this)
    })
  }});
  gls2.ca.Ca = function(a, b) {
    var h = gls2.ia[b].Ie();
    a.on("enterframe", h);
    a.on("completeattack", function() {
      h.stop = j
    })
  };
  gls2.ca.bf = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, h = a.length;b < h;b++) {
        a[b] && a[b].pg && (a[b].stop = j)
      }
    }
  };
  gls2.ca.oa = tm.createClass({superClass:gls2.ca, pattern:l, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.il = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    var b = this.pattern, h = this.il;
    a.on("launch", function() {
      var a = gls2.ya.randf(640 * (h - 0.1), 640 * (h + 0.1));
      this.tweener.clear().wait(gls2.ya.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.ca.Ca(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.ca.wc = gls2.ca.oa("basic0-0", 0.2);
  gls2.ca.mb = gls2.ca.oa("basic0-0", 0.4);
  gls2.ca.qd = gls2.ca.oa("basic0-0", 0.6);
  gls2.ca.lb = gls2.ca.oa("basic1-2", 0.2);
  gls2.ca.vc = gls2.ca.oa("basic1-2", 0.4);
  gls2.ca.pd = gls2.ca.oa("basic1-2", 0.6);
  gls2.ca.za = tm.createClass({superClass:gls2.ca, Cb:l, init:function(a) {
    this.superInit();
    this.Cb = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Cb = this.Cb;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      this.speed = 6;
      gls2.ca.Ca(this, this.Cb);
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Pa && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.dc() && this.Pa && this.remove();
        if(22500 > gls2.Cc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Gb = r
        }
      })
    }.bind(a))
  }});
  gls2.ca.nb = gls2.ca.za("basic1-0");
  var b = tm.createClass({superClass:gls2.ca, init:function(a, b, h) {
    this.superInit();
    this.Ak = a;
    this.zk = b;
    this.ud = h
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.speed = this.Ak;
    a.$c = this.zk;
    this.ud && (a.ud = [].concat(this.ud));
    a.mc = 0;
    a.on("enter", function() {
      gls2.ca.Ca(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.$c) * this.speed;
      this.y += Math.sin(this.$c) * this.speed;
      this.Pa && !this.dc() && this.remove();
      for(this.mc = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);0 > this.mc;) {
        this.mc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.mc;) {
        this.mc -= 2 * Math.PI
      }
      this.Gb = this.y < this.fa.y && 4E4 < gls2.Cc(this, this.fa);
      if(this.ud) {
        for(var a = 0;a < this.ud.length;a++) {
          var b = this.ud[a];
          b.frame === this.frame && this.tweener.to({$c:b.dir !== i ? b.dir : this.$c, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.ca.ic = b(1, 0.25 * Math.PI);
  gls2.ca.ul = b(1, -1.75 * Math.PI);
  gls2.ca.Ld = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.ca.ua = b(1.6, 0.5 * Math.PI);
  gls2.ca.jc = b(1.6, -0.5 * Math.PI);
  gls2.ca.wi = tm.createClass({superClass:gls2.ca, Ma:l, init:function(a) {
    this.superInit();
    this.Ma = a
  }, setup:function(a) {
    gls2.ca.Ca(a, this.Ma);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.ca.$g = gls2.ca.wi("bukky-4-0");
  b = tm.createClass({superClass:gls2.ca, Ma:l, Dh:r, init:function(a, b) {
    this.superInit();
    this.Ma = a;
    this.Dh = !!b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Ma = this.Ma;
    a.on("enter", function() {
      gls2.ca.Ca(this, this.Ma)
    });
    a.on("enterframe", function() {
      this.Pa && !this.dc() && this.remove()
    });
    if(!this.Dh) {
      a.on("enterframe", function() {
        this.Gb = this.y < this.fa.y && 4E4 < gls2.Cc(this, this.fa)
      })
    }
  }});
  gls2.ca.Mb = b("basic3-0", r);
  gls2.ca.Nb = b("basic3-1", r);
  gls2.ca.hc = b("cannon2-0", j);
  gls2.ca.jf = b("cannon2-3", j);
  gls2.ca.oe = b("cannon3-0", j);
  gls2.ca.lf = b("cannon5-0", j);
  b = tm.createClass({superClass:gls2.ca, velocityY:0, Ma:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ma = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ma];
    a.ei = r;
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.ca.Ca(this, this.ga[0]);
      this.ei = j
    }.bind(a));
    a.on("enterframe", function() {
      this.ei && (this.y += this.velocityY, 384 < this.y && gls2.ca.bf(this), this.Pa && !this.dc() && this.remove(), this.Gb = this.y < this.fa.y)
    })
  }});
  gls2.ca.Uc = b(0.5, "kurokawa-1");
  gls2.ca.nj = b(0.5, "kurokawa-4");
  gls2.ca.Xc = tm.createClass({superClass:gls2.ca, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.ca.Ca(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.ca.Wc = tm.createClass({superClass:gls2.ca, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.ca.Ca(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.ca.La = tm.createClass({superClass:gls2.ca, direction:1, delay:0, init:function(a, b) {
    this.superInit();
    this.direction = a;
    this.delay = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    tm.app.Tweener(a).wait(this.delay).call(function() {
      gls2.ca.Ca(this, "basic1-3")
    }.bind(a));
    tm.app.Tweener(a).wait(this.delay).to({y:64}, 5E3, "easeOutQuad").to({y:1280}, 3E3, "easeInQuad");
    tm.app.Tweener(a).wait(this.delay).to({x:480 * (0.5 + 0.3 * this.direction)}, 3E3, "easeOutExpo").to({x:480 * (0.5 + -0.3 * this.direction)}, 2E3, "easeInOutQuad").to({x:480 * (0.5 + 0.3 * this.direction)}, 2E3, "easeOutExpo").to({x:480 * (0.5 + -0.3 * this.direction)}, 2E3, "easeInOutQuad").to({x:480 * 1.3 * this.direction}, 2E3, "easeInQuad")
  }});
  var a = tm.createClass({superClass:gls2.ca, velocityY:0, Ma:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ma = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.ca.Ca(this, this.ga[0]);
      gls2.ra.tk(this.x, this.y, this.da)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Pa && !this.dc() && this.remove();
      this.Gb = this.y < this.fa.y
    })
  }});
  gls2.ca.Ja = a(0.5, "akane");
  gls2.ca.qa = tm.createClass({superClass:gls2.ca, Cb:l, init:function(a, b) {
    this.superInit();
    this.Cb = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Cb = this.Cb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.ca.Ca(this, this.Cb);
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Pa && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.dc() && this.Pa && this.remove();
        if(22500 > gls2.Cc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Gb = r
        }
      })
    }.bind(a))
  }});
  gls2.ca.qb = gls2.ca.qa(3, 1);
  gls2.ca.rb = gls2.ca.qa(6, 1);
  gls2.ca.sb = gls2.ca.qa(12, 1);
  gls2.ca.fi = tm.createClass({superClass:gls2.ca, Cb:l, init:function(a) {
    this.superInit();
    this.Cb = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Cb = this.Cb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.ca.Ca(this, this.Cb);
      this.on("enterframe", function() {
        this.x += this.speed
      })
    }.bind(a))
  }});
  gls2.ca.Nl = gls2.ca.fi(3);
  gls2.ca.be = tm.createClass({superClass:gls2.ca, velocityX:0, Ma:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ma = "miyuki_y"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.ca.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Pa && !this.dc() && this.remove();
      this.Gb = this.y < this.fa.y
    })
  }});
  gls2.ca.Hk = gls2.ca.be(1);
  gls2.ca.Ik = gls2.ca.be(-1);
  gls2.ca.ae = tm.createClass({superClass:gls2.ca, velocityX:0, Ma:l, init:function(a, b) {
    this.superInit();
    this.velocityX = a;
    this.Ma = b
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ma];
    a.bi = 0;
    a.tweener.clear().call(function() {
      gls2.ca.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      0 == this.bi ? (this.y += 0.5, 256 < this.y && this.bi++) : this.x += this.velocityX;
      this.Pa && !this.dc() && this.remove()
    })
  }});
  gls2.ca.Fk = gls2.ca.ae(-0.5, "miyuki_t");
  gls2.ca.Gk = gls2.ca.ae(0.5, "miyuki_t");
  a = tm.createClass({superClass:gls2.ca, velocityX:0, Ma:l, init:function() {
    this.superInit();
    this.Ma = "alice"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.velocityY = 0.5;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.ca.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Pa && !this.dc() && this.remove();
      this.Gb = this.y < this.fa.y
    })
  }});
  gls2.ca.ff = a();
  a = tm.createClass({superClass:gls2.ca, Ma:l, init:function() {
    this.superInit();
    this.Ma = "aliceLeaf"
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.ca.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.dg.x, b = this.dg.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      this.Pa && !this.dc() && this.remove();
      this.Gb = this.y < this.fa.y
    })
  }});
  gls2.ca.gf = a();
  gls2.ca.ih = b(0.3, "komachi-1");
  gls2.ca.te = b(0.5, "komachi-2");
  gls2.ca.tf = b(0.5, "komachi-4");
  gls2.ca.Bf = tm.createClass({superClass:gls2.ca, ii:0, init:function(a) {
    this.superInit();
    this.ii = a
  }, setup:function(a) {
    tm.app.Tweener(a).to({x:480 * this.ii}, 4E3, "easeOutQuad");
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.ca.Gf = b(0.1, "nozomi-4");
  gls2.ca.Hf = b(0.3, "nozomi-5");
  gls2.ca.Jd = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.Ca(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Gb = this.Pa
    })
  }});
  gls2.ca.Jd = gls2.ca.Jd();
  b = tm.createClass({superClass:gls2.ca, ga:l, Ve:0, init:function(a, b) {
    this.superInit();
    this.ga = a;
    this.Ve = b || 1500
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Ve = this.Ve;
    a.cb = r;
    a.Xa = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.cb === r || 0 >= this.sa) && this.Ve < this.frame && this.Xa === r) {
        this.Xa = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Xa) {
        var a = this.ga.shift();
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.qf = b(["honoka-1"]);
  gls2.ca.Cf = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Xa = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Xa) {
        var a = this.ga.shift();
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.oj = gls2.ca.Cf();
  gls2.ca.Df = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
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
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Df = gls2.ca.Df();
  gls2.ca.Ef = tm.createClass({superClass:gls2.ca, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.sa || gls2.ca.Ca(this, "nagisa-3-1")
    })
  }});
  gls2.ca.Ef = gls2.ca.Ef();
  gls2.ca.xf = b(["mai-1", "mai-2"]);
  gls2.ca.Jf = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Xa = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Xa) {
        var a = this.ga.shift();
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Jf = gls2.ca.Jf();
  gls2.ca.Kf = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
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
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Kf = gls2.ca.Kf();
  gls2.ca.Lf = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
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
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Lf = gls2.ca.Lf();
  a = tm.createClass({superClass:gls2.ca, ga:l, init:function(a) {
    this.superInit();
    this.ga = a
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Xa = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.cb === r || 0 >= this.sa) && 1500 < this.frame && this.Xa === r) {
        this.Xa = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Xa) {
        var a = this.ga.shift();
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Mf = a(["setsuna-1"]);
  gls2.ca.uf = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Xa = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Xa) {
        var a = this.ga.shift();
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.uf = gls2.ca.uf();
  gls2.ca.vf = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Xa = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Xa) {
        var a = this.ga.shift();
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.vf = gls2.ca.vf();
  gls2.ca.wf = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Xa = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Xa) {
        var a = this.ga.shift();
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.wf = gls2.ca.wf();
  gls2.ca.If = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.ca.yf = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Xa = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.ya.randf(-48, 48);
        this.tweener.move(Math.clamp(this.fa.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Xa) {
        var a = this.ga.shift();
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.yf = gls2.ca.yf();
  gls2.ca.zf = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
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
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.zf = gls2.ca.zf();
  gls2.ca.Af = tm.createClass({superClass:gls2.ca, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.ca.prototype.setup.call(this, a);
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
        gls2.ca.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.ca.Af = gls2.ca.Af()
})();
(function() {
  var b = gls2.ha, a = gls2.ca;
  gls2.dh = {"heri1-left":[{$:b.za, aa:a.wc, x:48, y:-100}, {$:b.za, aa:a.mb, x:96, y:-100}, {$:b.za, aa:a.wc, x:144, y:-100}, {$:b.za, aa:a.mb, x:192, y:-100}, {$:b.za, aa:a.wc, x:240, y:-100}], "heri1-center":[{$:b.za, aa:a.wc, x:144, y:-100}, {$:b.za, aa:a.mb, x:192, y:-100}, {$:b.za, aa:a.wc, x:240, y:-100}, {$:b.za, aa:a.mb, x:288, y:-100}, {$:b.za, aa:a.wc, x:336, y:-100}], "heri1-right":[{$:b.za, aa:a.wc, x:240, y:-100}, {$:b.za, aa:a.mb, x:288, y:-100}, {$:b.za, aa:a.wc, x:336, y:-100}, {$:b.za, 
  aa:a.mb, x:384, y:-100}, {$:b.za, aa:a.wc, x:432, y:-100}], "heri1-left2":[{$:b.za, aa:a.mb, x:48, y:-100}, {$:b.za, aa:a.qd, x:96, y:-100}, {$:b.za, aa:a.mb, x:144, y:-100}, {$:b.za, aa:a.qd, x:192, y:-100}, {$:b.za, aa:a.mb, x:240, y:-100}], "heri1-center2":[{$:b.za, aa:a.mb, x:144, y:-100}, {$:b.za, aa:a.qd, x:192, y:-100}, {$:b.za, aa:a.mb, x:240, y:-100}, {$:b.za, aa:a.qd, x:288, y:-100}, {$:b.za, aa:a.mb, x:336, y:-100}], "heri1-right2":[{$:b.za, aa:a.mb, x:240, y:-100}, {$:b.za, aa:a.qd, 
  x:288, y:-100}, {$:b.za, aa:a.mb, x:336, y:-100}, {$:b.za, aa:a.qd, x:384, y:-100}, {$:b.za, aa:a.mb, x:432, y:-100}], "heri2-left":[{$:b.oa, aa:a.nb, x:48, y:-100}, {$:b.oa, aa:a.nb, x:96, y:-100}, {$:b.oa, aa:a.nb, x:144, y:-100}, {$:b.oa, aa:a.nb, x:192, y:-100}, {$:b.oa, aa:a.nb, x:240, y:-100}], "heri2-center":[{$:b.oa, aa:a.nb, x:144, y:-100}, {$:b.oa, aa:a.nb, x:192, y:-100}, {$:b.oa, aa:a.nb, x:240, y:-100}, {$:b.oa, aa:a.nb, x:288, y:-100}, {$:b.oa, aa:a.nb, x:336, y:-100}], "heri2-right":[{$:b.oa, 
  aa:a.nb, x:240, y:-100}, {$:b.oa, aa:a.nb, x:288, y:-100}, {$:b.oa, aa:a.nb, x:336, y:-100}, {$:b.oa, aa:a.nb, x:384, y:-100}, {$:b.oa, aa:a.nb, x:432, y:-100}], "heri1-4-left":[{$:b.oa, aa:a.lb, x:48, y:-100}, {$:b.oa, aa:a.lb, x:96, y:-100}, {$:b.oa, aa:a.lb, x:144, y:-100}, {$:b.oa, aa:a.lb, x:192, y:-100}, {$:b.oa, aa:a.lb, x:240, y:-100}], "heri1-4-center":[{$:b.oa, aa:a.lb, x:144, y:-100}, {$:b.oa, aa:a.lb, x:192, y:-100}, {$:b.oa, aa:a.lb, x:240, y:-100}, {$:b.oa, aa:a.lb, x:288, y:-100}, 
  {$:b.oa, aa:a.lb, x:336, y:-100}], "heri1-4-right":[{$:b.oa, aa:a.lb, x:240, y:-100}, {$:b.oa, aa:a.lb, x:288, y:-100}, {$:b.oa, aa:a.lb, x:336, y:-100}, {$:b.oa, aa:a.lb, x:384, y:-100}, {$:b.oa, aa:a.lb, x:432, y:-100}], "heri1-4-left2":[{$:b.oa, aa:a.vc, x:48, y:-100}, {$:b.oa, aa:a.pd, x:96, y:-100}, {$:b.oa, aa:a.vc, x:144, y:-100}, {$:b.oa, aa:a.pd, x:192, y:-100}, {$:b.oa, aa:a.vc, x:240, y:-100}], "heri1-4-center2":[{$:b.oa, aa:a.vc, x:144, y:-100}, {$:b.oa, aa:a.pd, x:192, y:-100}, {$:b.oa, 
  aa:a.vc, x:240, y:-100}, {$:b.oa, aa:a.pd, x:288, y:-100}, {$:b.oa, aa:a.vc, x:336, y:-100}], "heri1-4-right2":[{$:b.oa, aa:a.vc, x:240, y:-100}, {$:b.oa, aa:a.pd, x:288, y:-100}, {$:b.oa, aa:a.vc, x:336, y:-100}, {$:b.oa, aa:a.pd, x:384, y:-100}, {$:b.oa, aa:a.vc, x:432, y:-100}], "tankRD-left":[{$:b.la, aa:a.ic, x:78, y:-50}, {$:b.la, aa:a.ic, x:28, y:-100}, {$:b.la, aa:a.ic, x:-22, y:-150}, {$:b.la, aa:a.ic, x:-72, y:-200}, {$:b.la, aa:a.ic, x:-122, y:-250}], "tankRD-center":[{$:b.la, aa:a.ic, 
  x:222, y:-50}, {$:b.la, aa:a.ic, x:172, y:-100}, {$:b.la, aa:a.ic, x:122, y:-150}, {$:b.la, aa:a.ic, x:72, y:-200}, {$:b.la, aa:a.ic, x:22, y:-250}], "tankL-top":[{$:b.la, aa:a.Ld, x:550, y:64}, {$:b.la, aa:a.Ld, x:620, y:64}, {$:b.la, aa:a.Ld, x:690, y:64}, {$:b.la, aa:a.Ld, x:760, y:64}, {$:b.la, aa:a.Ld, x:830, y:64}], "tank5-left":[{$:b.la, aa:a.ua, x:48, y:-70}, {$:b.la, aa:a.ua, x:48, y:-140}, {$:b.la, aa:a.ua, x:48, y:-210}, {$:b.la, aa:a.ua, x:48, y:-280}, {$:b.la, aa:a.ua, x:48, y:-350}], 
  "tank5-center":[{$:b.la, aa:a.ua, x:240, y:-70}, {$:b.la, aa:a.ua, x:240, y:-140}, {$:b.la, aa:a.ua, x:240, y:-210}, {$:b.la, aa:a.ua, x:240, y:-280}, {$:b.la, aa:a.ua, x:240, y:-350}], "tank15-top":[{$:b.la, aa:a.ua, x:48, y:-70}, {$:b.la, aa:a.ua, x:48, y:-140}, {$:b.la, aa:a.ua, x:48, y:-210}, {$:b.la, aa:a.ua, x:48, y:-280}, {$:b.la, aa:a.ua, x:48, y:-350}, {$:b.la, aa:a.ua, x:240, y:-70}, {$:b.la, aa:a.ua, x:240, y:-140}, {$:b.la, aa:a.ua, x:240, y:-210}, {$:b.la, aa:a.ua, x:240, y:-280}, 
  {$:b.la, aa:a.ua, x:240, y:-350}, {$:b.la, aa:a.ua, x:432, y:-70}, {$:b.la, aa:a.ua, x:432, y:-140}, {$:b.la, aa:a.ua, x:432, y:-210}, {$:b.la, aa:a.ua, x:432, y:-280}, {$:b.la, aa:a.ua, x:432, y:-350}], "tank25-top":[{$:b.la, aa:a.ua, x:48, y:-70}, {$:b.la, aa:a.ua, x:48, y:-140}, {$:b.la, aa:a.ua, x:48, y:-210}, {$:b.la, aa:a.ua, x:48, y:-280}, {$:b.la, aa:a.ua, x:48, y:-350}, {$:b.la, aa:a.ua, x:240, y:-70}, {$:b.la, aa:a.ua, x:240, y:-140}, {$:b.la, aa:a.ua, x:240, y:-210}, {$:b.la, aa:a.ua, 
  x:240, y:-280}, {$:b.la, aa:a.ua, x:240, y:-350}, {$:b.la, aa:a.ua, x:432, y:-70}, {$:b.la, aa:a.ua, x:432, y:-140}, {$:b.la, aa:a.ua, x:432, y:-210}, {$:b.la, aa:a.ua, x:432, y:-280}, {$:b.la, aa:a.ua, x:432, y:-350}, {$:b.la, aa:a.jc, x:144, y:710}, {$:b.la, aa:a.jc, x:144, y:780}, {$:b.la, aa:a.jc, x:144, y:850}, {$:b.la, aa:a.jc, x:144, y:920}, {$:b.la, aa:a.jc, x:144, y:990}, {$:b.la, aa:a.jc, x:336, y:710}, {$:b.la, aa:a.jc, x:336, y:780}, {$:b.la, aa:a.jc, x:336, y:850}, {$:b.la, aa:a.jc, 
  x:336, y:920}, {$:b.la, aa:a.jc, x:336, y:990}], "bukky-4-r":[{$:b.Zg, aa:a.$g, x:480, y:-50}], "bukky-4-l":[{$:b.Zg, aa:a.$g, x:0, y:-50}], "cannon-0":[{$:b.Na, aa:a.Mb, x:48, y:-100}], "cannon-1":[{$:b.Na, aa:a.Mb, x:96, y:-100}], "cannon-2":[{$:b.Na, aa:a.Mb, x:144, y:-100}], "cannon-3":[{$:b.Na, aa:a.Mb, x:192, y:-100}], "cannon-4":[{$:b.Na, aa:a.Mb, x:240, y:-100}], "cannon-5":[{$:b.Na, aa:a.Mb, x:288, y:-100}], "cannon-6":[{$:b.Na, aa:a.Mb, x:336, y:-100}], "cannon-7":[{$:b.Na, aa:a.Mb, x:384, 
  y:-100}], "cannon-8":[{$:b.Na, aa:a.Mb, x:432, y:-100}], "cannon-R0":[{$:b.Na, aa:a.Mb, x:550, y:128}], "cannon-R1":[{$:b.Na, aa:a.Mb, x:550, y:192}], "cannon-R2":[{$:b.Na, aa:a.Mb, x:550, y:256}], "yayoi-0":[{$:b.Na, aa:a.Nb, x:48, y:-100}], "yayoi-1":[{$:b.Na, aa:a.Nb, x:96, y:-100}], "yayoi-2":[{$:b.Na, aa:a.Nb, x:144, y:-100}], "yayoi-3":[{$:b.Na, aa:a.Nb, x:192, y:-100}], "yayoi-4":[{$:b.Na, aa:a.Nb, x:240, y:-100}], "yayoi-5":[{$:b.Na, aa:a.Nb, x:288, y:-100}], "yayoi-6":[{$:b.Na, aa:a.Nb, 
  x:336, y:-100}], "yayoi-7":[{$:b.Na, aa:a.Nb, x:384, y:-100}], "yayoi-8":[{$:b.Na, aa:a.Nb, x:432, y:-100}], "yayoi-R0":[{$:b.Na, aa:a.Nb, x:550, y:128}], "yayoi-R1":[{$:b.Na, aa:a.Nb, x:550, y:192}], "yayoi-R2":[{$:b.Na, aa:a.Nb, x:550, y:256}], "tsubomi-0":[{$:b.we, aa:a.oe, x:96, y:-100}], "tsubomi-1":[{$:b.we, aa:a.oe, x:240, y:-100}], "tsubomi-2":[{$:b.we, aa:a.oe, x:384, y:-100}], "tsubomi-R0":[{$:b.we, aa:a.oe, x:580, y:128}], "itsuki-0":[{$:b.sf, aa:a.lf, x:96, y:-100}], "itsuki-1":[{$:b.sf, 
  aa:a.lf, x:240, y:-100}], "itsuki-2":[{$:b.sf, aa:a.lf, x:384, y:-100}], "makoto-0":[{$:b.gc, aa:a.hc, x:48, y:-100}], "makoto-1":[{$:b.gc, aa:a.hc, x:96, y:-100}], "makoto-2":[{$:b.gc, aa:a.hc, x:144, y:-100}], "makoto-3":[{$:b.gc, aa:a.hc, x:192, y:-100}], "makoto-4":[{$:b.gc, aa:a.hc, x:240, y:-100}], "makoto-5":[{$:b.gc, aa:a.hc, x:288, y:-100}], "makoto-6":[{$:b.gc, aa:a.hc, x:336, y:-100}], "makoto-7":[{$:b.gc, aa:a.hc, x:384, y:-100}], "makoto-8":[{$:b.gc, aa:a.hc, x:432, y:-100}], "makoto-R0":[{$:b.gc, 
  aa:a.hc, x:580, y:128}], "karen-3-2":[{$:b.kf, aa:a.jf, x:96, y:-100}], "karen-3-5":[{$:b.kf, aa:a.jf, x:240, y:-100}], "karen-3-8":[{$:b.kf, aa:a.jf, x:384, y:-100}], "fighter-m-0":[{$:b.Gc, aa:a.Uc, x:96, y:-192}], "fighter-m-1":[{$:b.Gc, aa:a.Uc, x:144, y:-192}], "fighter-m-2":[{$:b.Gc, aa:a.Uc, x:192, y:-192}], "fighter-m-3":[{$:b.Gc, aa:a.Uc, x:240, y:-192}], "fighter-m-4":[{$:b.Gc, aa:a.Uc, x:288, y:-192}], "fighter-m-5":[{$:b.Gc, aa:a.Uc, x:336, y:-192}], "fighter-m-6":[{$:b.Gc, aa:a.Uc, 
  x:384, y:-192}], "fighter-m4-0":[{$:b.Gc, aa:a.nj, x:96, y:-192}], "tsukikage-r":[{$:b.wb, aa:a.Xc(700), x:624, y:256}, {$:b.wb, aa:a.Xc(600), x:720, y:256}, {$:b.wb, aa:a.Xc(500), x:576, y:320}, {$:b.wb, aa:a.Xc(400), x:672, y:320}, {$:b.wb, aa:a.Xc(300), x:768, y:320}, {$:b.wb, aa:a.Xc(200), x:624, y:384}, {$:b.wb, aa:a.Xc(100), x:720, y:384}], "tsukikage-l":[{$:b.wb, aa:a.Wc(700), x:-144, y:384}, {$:b.wb, aa:a.Wc(600), x:-240, y:384}, {$:b.wb, aa:a.Wc(500), x:-96, y:320}, {$:b.wb, aa:a.Wc(400), 
  x:-192, y:320}, {$:b.wb, aa:a.Wc(300), x:-288, y:320}, {$:b.wb, aa:a.Wc(200), x:-144, y:256}, {$:b.wb, aa:a.Wc(100), x:-240, y:256}], "urara5-0":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({$:b.La, aa:a.La(1, 200 * f), x:-144, y:320}), d.push({$:b.La, aa:a.La(1, 200 * f), x:-144, y:352}), d.push({$:b.La, aa:a.La(1, 200 * f), x:-144, y:384})
    }
    return d
  }(), "urara5-1":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({$:b.La, aa:a.La(-1, 200 * f), x:624, y:320}), d.push({$:b.La, aa:a.La(-1, 200 * f), x:624, y:352}), d.push({$:b.La, aa:a.La(-1, 200 * f), x:624, y:384})
    }
    return d
  }(), "urara5-2":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({$:b.La, aa:a.La(1, 200 * f), x:-144, y:128}), d.push({$:b.La, aa:a.La(1, 200 * f), x:-144, y:160}), d.push({$:b.La, aa:a.La(1, 200 * f), x:-144, y:192})
    }
    return d
  }(), "urara5-3":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({$:b.La, aa:a.La(-1, 200 * f), x:624, y:128}), d.push({$:b.La, aa:a.La(-1, 200 * f), x:624, y:160}), d.push({$:b.La, aa:a.La(-1, 200 * f), x:624, y:192})
    }
    return d
  }(), "komachi-0":[{$:b.xc, aa:a.ih, x:144, y:-192}], "komachi-1":[{$:b.xc, aa:a.ih, x:336, y:-192}], "komachi2-0":[{$:b.xc, aa:a.te, x:144, y:-192}], "komachi2-1":[{$:b.xc, aa:a.te, x:336, y:-192}], "komachi3-0":[{$:b.xc, aa:a.te, x:144, y:-192}], "komachi3-1":[{$:b.xc, aa:a.te, x:336, y:-192}], "komachi4-0":[{$:b.xc, aa:a.tf, x:144, y:-192}], "komachi4-1":[{$:b.xc, aa:a.tf, x:336, y:-192}], "komachi4-2":[{$:b.xc, aa:a.tf, x:240, y:-192}], "nozomi4-0":[{$:b.rd, aa:a.Gf, x:144, y:-192}], "nozomi4-1":[{$:b.rd, 
  aa:a.Gf, x:240, y:-192}], "nozomi4-2":[{$:b.rd, aa:a.Gf, x:336, y:-192}], "nozomi5-0":[{$:b.rd, aa:a.Hf, x:144, y:-320}], "nozomi5-1":[{$:b.rd, aa:a.Hf, x:240, y:-192}], "nozomi5-2":[{$:b.rd, aa:a.Hf, x:336, y:-320}], "mktn5-0":[{$:b.Bf, aa:a.Bf(0.7), x:624, y:128}], "akane-center":[{$:b.Ja, aa:a.Ja, x:144, y:130}, {$:b.Ja, aa:a.Ja, x:192, y:80}, {$:b.Ja, aa:a.Ja, x:240, y:140}, {$:b.Ja, aa:a.Ja, x:288, y:80}, {$:b.Ja, aa:a.Ja, x:336, y:130}], "akane-right":[{$:b.Ja, aa:a.Ja, x:384, y:160}, {$:b.Ja, 
  aa:a.Ja, x:288, y:120}, {$:b.Ja, aa:a.Ja, x:288, y:80}, {$:b.Ja, aa:a.Ja, x:384, y:40}], "akane-left":[{$:b.Ja, aa:a.Ja, x:96, y:160}, {$:b.Ja, aa:a.Ja, x:144, y:120}, {$:b.Ja, aa:a.Ja, x:144, y:80}, {$:b.Ja, aa:a.Ja, x:96, y:40}], "nao1-left":[{$:b.qa, aa:a.qb, x:48, y:-100}, {$:b.qa, aa:a.qb, x:96, y:-100}, {$:b.qa, aa:a.qb, x:144, y:-100}, {$:b.qa, aa:a.qb, x:192, y:-100}, {$:b.qa, aa:a.qb, x:240, y:-100}], "nao1-right":[{$:b.qa, aa:a.qb, x:240, y:-100}, {$:b.qa, aa:a.qb, x:288, y:-100}, {$:b.qa, 
  aa:a.qb, x:336, y:-100}, {$:b.qa, aa:a.qb, x:384, y:-100}, {$:b.qa, aa:a.qb, x:432, y:-100}], "nao1-center":[{$:b.qa, aa:a.qb, x:144, y:-100}, {$:b.qa, aa:a.qb, x:192, y:-100}, {$:b.qa, aa:a.qb, x:240, y:-100}, {$:b.qa, aa:a.qb, x:288, y:-100}, {$:b.qa, aa:a.qb, x:336, y:-100}], "nao2-left":[{$:b.qa, aa:a.rb, x:48, y:-100}, {$:b.qa, aa:a.rb, x:96, y:-100}, {$:b.qa, aa:a.rb, x:144, y:-100}, {$:b.qa, aa:a.rb, x:192, y:-100}, {$:b.qa, aa:a.rb, x:240, y:-100}], "nao2-right":[{$:b.qa, aa:a.rb, x:240, 
  y:-100}, {$:b.qa, aa:a.rb, x:288, y:-100}, {$:b.qa, aa:a.rb, x:336, y:-100}, {$:b.qa, aa:a.rb, x:384, y:-100}, {$:b.qa, aa:a.rb, x:432, y:-100}], "nao2-center":[{$:b.qa, aa:a.rb, x:144, y:-100}, {$:b.qa, aa:a.rb, x:192, y:-100}, {$:b.qa, aa:a.rb, x:240, y:-100}, {$:b.qa, aa:a.rb, x:288, y:-100}, {$:b.qa, aa:a.rb, x:336, y:-100}], "nao3-left":[{$:b.qa, aa:a.sb, x:48, y:-100}, {$:b.qa, aa:a.sb, x:96, y:-100}, {$:b.qa, aa:a.sb, x:144, y:-100}, {$:b.qa, aa:a.sb, x:192, y:-100}, {$:b.qa, aa:a.sb, x:240, 
  y:-100}], "nao3-right":[{$:b.qa, aa:a.sb, x:240, y:-100}, {$:b.qa, aa:a.sb, x:288, y:-100}, {$:b.qa, aa:a.sb, x:336, y:-100}, {$:b.qa, aa:a.sb, x:384, y:-100}, {$:b.qa, aa:a.sb, x:432, y:-100}], "nao3-center":[{$:b.qa, aa:a.sb, x:144, y:-100}, {$:b.qa, aa:a.sb, x:192, y:-100}, {$:b.qa, aa:a.sb, x:240, y:-100}, {$:b.qa, aa:a.sb, x:288, y:-100}, {$:b.qa, aa:a.sb, x:336, y:-100}], hoshizora_y1:[{$:b.be, aa:a.Hk, x:-256, y:140}], hoshizora_y2:[{$:b.be, aa:a.Ik, x:608, y:60}], hoshizora_t1:[{$:b.ae, 
  aa:a.Fk, x:336, y:-128}], hoshizora_t2:[{$:b.ae, aa:a.Gk, x:144, y:-128}], yotsuba:[{$:b.ff, aa:a.ff, x:240, y:-64}], erika:[{$:b.Jd, aa:a.Jd, x:240, y:-100}], yukishiro:[{$:b.qf, aa:a.qf, x:240, y:-100}], misumi:[{$:b.Cf, aa:[a.oj, a.Df, a.Ef], x:240, y:-100, $b:j}], mai:[{$:b.xf, aa:a.xf, x:780, y:128}], hyuga:[{$:b.Cj, aa:[a.Jf, a.Kf, a.Lf], x:240, y:-100, $b:j}], higashi:[{$:b.Mf, aa:a.Mf, x:780, y:128}], momozono:[{$:b.jj, aa:[a.uf, a.vf, a.wf], x:240, y:-100, $b:j}], rikka:[{$:b.If, aa:a.If, 
  x:240, y:-100}], mana:[{$:b.mj, aa:[a.yf, a.zf, a.Af], x:240, y:-100, $b:j}]}
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
    return c.Ha(a, {frame:3, ce:j})
  }
  function O(a) {
    return c.Ha(a, {frame:2, ce:j})
  }
  function E(a) {
    return c.Ha(a, {visible:r})
  }
  function D(a) {
    return c.Ha(a, {frame:4, Zb:j})
  }
  function H(a) {
    return c.Ha(a, {frame:3})
  }
  function u(a) {
    return c.Ha(a, {frame:1})
  }
  function t(a) {
    return c.Ha(a, {frame:2})
  }
  function C(a) {
    return c.Ha(a, {frame:0})
  }
  function A(a) {
    return c.Ha(a, {frame:3, Zb:j})
  }
  function J(a) {
    return c.Ha(a, {frame:1, Zb:j})
  }
  function B(a) {
    return c.Ha(a, {frame:2, Zb:j})
  }
  function F(a) {
    return c.Ha(a, {frame:0, Zb:j})
  }
  gls2.ia = {};
  var c = G.Ia;
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
  gls2.ia["cannon2-3"] = new G.ka({top0:c.action([c.repeat(999, [c.Ga("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), E(c.xa("ivs0", "$d")))]), k(10), c.fire(c.direction(39, "sequence"), c.speed(1), E(c.xa("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.Ga("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), E(c.xa("ivs1", "$d")))]), k(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), E(c.xa("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, C), c.Ya()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), p, function(a) {
    return c.Ha(a, {frame:7, Zb:j})
  }), c.fire(c.direction("$1+5", "relative"), p, function(a) {
    return c.Ha(a, {frame:6, Zb:j})
  }), c.Ya()])});
  gls2.ia["cannon3-0"] = new G.ka({top0:c.action([c.repeat(999, [k(80), b(p, 0.01, 5, d(5, -30, 30, C, c.offsetX(-60))), b(p, 0.01, 5, d(5, -30, 30, C)), b(p, 0.01, 5, d(5, -30, 30, C, c.offsetX(60)))])])});
  gls2.ia["cannon4-0"] = new G.ka({top0:c.action([k(20), c.repeat(999, [c.fire(p, B), c.repeat(8, [k(10), c.Ga("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), p, B), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), p, B)])]), k(120)])])});
  gls2.ia["cannon5-0"] = new G.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), q, E(c.xa("b"))), c.repeat(11, [k(5), c.fire(c.direction(10, "sequence"), q, E(c.xa("b")))]), k(60)])]), b:c.action([c.wait(5), c.Fe(c.speed(0), 0), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, u)
  }), c.Ya])});
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
  gls2.ia["komachi-4"] = new G.ka({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), n, H, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, H, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, H, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), n, H, c.offsetX(45)), k(4)]), k(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), n(5), F, c.offsetX(-110), c.va(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), n(5), F, c.offsetX(-110), c.va(j))]), k(30), c.fire(c.direction(0), n(5), F, c.offsetX(110), c.va(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), n(5), F, c.offsetX(110), c.va(j))]), k(30)])])});
  gls2.ia["nozomi-4"] = new G.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.Ga("c", "2+$loop.index"), f("$c", "-4-($c-2)*4", "4+($c-2)*4", K("(560-$c*40)*0.03"), A, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), E(c.xa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, C, c.offsetX(-50)), c.wait(3)])
  }), k(90), c.fire(c.direction(-40), E(c.xa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, C, c.offsetX(50)), c.wait(3)])
  }), k(90)])]), noop:c.action([c.wait(1), c.Ya])});
  gls2.ia["nozomi-5"] = new G.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(6, [c.Ga("c", "2+$loop.index"), f("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", K("(560-$c*40)*0.02"), A, c.offsetY(-50)), f("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", K("(560-$c*40)*0.02"), A, c.offsetY(-50)), f("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", K("(560-$c*40)*0.02"), A, c.offsetY(-50)), f("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", K("(560-$c*40)*0.02"), A, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), 
  c.repeat(999, [c.fire(c.direction(40), E(c.xa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, C, c.offsetX(-50)), k(3)])
  }), c.fire(c.direction(-40), E(c.xa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, C, c.offsetX(50)), k(3)])
  })])]), noop:c.action([c.wait(1), c.Ya])});
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
  gls2.ia["nagisa-1-1"] = new G.ka({top0:c.action([k(90), c.repeat(3, [c.Ga("way", "5 + $loop.index*6"), b(n, 0.01, "3 + $loop.index*2", function(a) {
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
  gls2.ia["mai-1"] = new G.ka({top0:c.action([k(50), c.repeat(50, [c.Ga("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, C), c.Ya]))), c.Ga("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, C), c.Ya]))), k(8)])]), top1:c.action([k(50), c.repeat(12, [a(5, -50, 50, q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, 
  A), c.Ya]))), a(5, -230, -130, q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, A), c.Ya]))), k(16), a(6, -50, 50, q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, A), c.Ya]))), a(6, -230, -130, q, E(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, A), c.Ya]))), k(16)])])});
  gls2.ia["mai-2"] = new G.ka({top:c.action([k(50), c.repeat(15, [c.fire(c.direction(-10), B(c.xa("fireChild", "$loop.index*10"))), k(8)])]), fireChild:c.action([k("40+$1"), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, t)
  }), c.Ya])});
  gls2.ia["saki-1-1"] = new G.ka({top:c.action([k(100), c.repeat(3, [c.xa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Ga("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, C), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, C), k(12)]), c.repeat("$2", [f(9, -20, 20, w, H)])])});
  gls2.ia["saki-1-2"] = new G.ka({top:c.action([k(100), c.repeat(5, [c.Ga("way", "5+$loop.index*2"), c.repeat(6, [c.Ga("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, n("$s"), A, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), k(90)])])});
  gls2.ia["saki-1-3"] = new G.ka({top:c.action([c.Ga("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), A(c.xa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Fe(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, p, H), c.Ya])});
  gls2.ia["saki-2-1"] = new G.ka({top0:c.action([k(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", p, C, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", p, C, c.offsetX(40)), k(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", p, C, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", p, C, c.offsetX(40)), k(60)])]), top1:c.action([k(100), c.repeat(4, [c.repeat(7, [c.Ga("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  v, H), c.repeat(4, [c.Ga("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", v("$w*-1.0"), H)])]), k(120)])])});
  gls2.ia["saki-2-2"] = new G.ka({top:c.action([k(60), c.Ga("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), B(c.xa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), B(c.xa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Fe(c.speed(0), "10 + $rand*15"), c.wait(65), b(n, 0.14, 6, function(a) {
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
  }), k(2), c.Ya])});
  gls2.ia["saki-2-3"] = new G.ka({top:c.action([k(60), c.Ga("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), A(c.xa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), A(c.xa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Fe(c.speed(0), "10 + $rand*20"), c.wait(65), b(n, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, H)])
  }), k(2), c.Ya])});
  gls2.ia["saki-3-1"] = new G.ka({top:c.action([c.fire(c.direction(180, "absolute"), K, B(c.xa("seed"))), k(60), c.fire(c.direction(180, "absolute"), K, B(c.xa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), K, B(c.xa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, C), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, C), c.fire(c.direction(90, "sequence"), p, C), c.fire(c.direction(90, "sequence"), p, C), k(10), c.fire(c.direction(100, 
  "sequence"), p, C)])])});
  gls2.ia["saki-3-2"] = new G.ka({top:c.action([c.fire(c.direction(180, "absolute"), K, A(c.xa("seed"))), k(60), c.fire(c.direction(180, "absolute"), K, A(c.xa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), K, A(c.xa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, u), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), k(10), c.fire(c.direction(80, 
  "sequence"), p, u)])])});
  gls2.ia["rikka-1"] = new G.ka({top:c.action([c.repeat(5, [c.Ga("s", "$loop.index*1.5"), k(30), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), f(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.ia["rikka-2"] = new G.ka({top0:c.action([c.repeat(10, [c.fire(B(c.xa("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(B(c.xa("snow")), c.offsetX(90), c.offsetY(-20)), k(8)]), k(10)]), top1:c.action([c.repeat(35, [c.Ga("d", "$loop.index*-(20+$ex*10)"), c.Ga("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), E(c.xa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), E(c.xa("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.Ga("d", "$loop.index*+(20+$ex*10)"), c.Ga("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), E(c.xa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), E(c.xa("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.Ga("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), E(c.xa("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), E(c.xa("snowArm")))])]), c.Ya]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), w, F), c.Ya]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), n("$2"), O), c.fire(c.direction("$1+1", "relative"), n("$2"), O), c.Ya()])});
  gls2.ia["rikka-3"] = new G.ka({top0:c.action([k(40), c.fire(c.direction(-10), E(c.xa("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), K("$loop.index*0.5"), t, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(-90), c.offsetY(-20))]), k(5)]), k(40)]), top1:c.action([k(40), c.fire(c.direction(-10), E(c.xa("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), K("$loop.index*0.5"), t, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(90), c.offsetY(-20))]), k(5)]), k(40)]), dummy:c.action([c.wait(1), c.Ya])});
  gls2.ia["mana-1-1"] = new G.ka({top0:c.action([c.xa("winder", -1)]), top1:c.action([c.xa("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), n, N, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [k(20), c.Ga("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), n, N, c.offsetX("-145*$1"), c.offsetY(-5))])])]), top2:c.action([c.wait(60), k(300), c.repeat(7, [c.Ga("s", "$loop.index"), c.repeat(5, [c.Ga("ss", 
  "($s-$loop.index)*0.5"), f(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, w("$ss"), H, c.offsetX(-30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Ga("ss", "($s-$loop.index)*0.5"), f(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, w("$ss"), H, c.offsetX(30), c.offsetY(-30))]), k(20), c.repeat(5, [c.Ga("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, v("$ss"), t, c.offsetX(30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Ga("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, v("$ss"), t, c.offsetX(-30), c.offsetY(-30))]), k(80)])])});
  gls2.ia["mana-1-2"] = new G.ka({top:c.action([c.repeat(5, [c.Ga("i", "$loop.index"), c.Ga("j", "1/($i+1) * 4"), b(n(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*(-3*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, H, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, H, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+3*$j)"), 
    a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-3*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, H, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, H, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), 
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
      M.push(gls2.Oa())
    }
    a = gls2.ia.Ge = tm.zb.Tc.Sd;
    a.qg = function(a) {
      return!(a instanceof gls2.Oa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Ah = function(a) {
      var b = M.shift(0);
      if(b) {
        return b.sa = gls2.ja.si, L.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.Zb ? (b.scaleX = 1, b.scaleY = 1, b.Rc = r) : (a.ce ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Rb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.Rc = j), b.visible = a.visible === r ? r : j, b.Zb = !!a.Zb, b.ce = !!a.ce, b.Rb = !!a.Rb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Eh = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.kd = gls2.ja.vi;
    G.Ra.Qb.$rank = 0;
    G.Ra.Qb.$hyperOff = 1
  };
  gls2.ia.erase = function(a, b, c) {
    for(var d = [].concat(L), f = 0, h = d.length;f < h;f++) {
      if(a) {
        var k = gls2.rh(!!b);
        k.setPosition(d[f].x, d[f].y);
        c && (k.dd = j)
      }
      d[f].Da()
    }
  };
  gls2.ia.Qd = function() {
    for(var a = [].concat(L), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Oa = tm.createClass({superClass:tm.display.Sprite, sa:0, Zb:r, ce:r, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      M.push(this);
      var a = L.indexOf(this);
      -1 !== a && L.splice(a, 1)
    })
  }, update:function() {
    this.Zb && (this.rotation += 15)
  }, Da:function() {
    var a = gls2.Oa.Ud().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Oa.Ud = function() {
    gls2.Oa.Ud.Zf === l && (gls2.Oa.Ud.Zf = gls2.Ta(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Oa.Ud.Zf.clone()
  };
  gls2.Oa.Ud.Zf = l;
  var M = [], L = gls2.Oa.pb = []
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

