/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(b) {
  throw b;
}
var h = void 0, k = !0, l = null, s = !1;
function E() {
  return function() {
  }
}
var I = {Si:this};
(function() {
  function b(a, b) {
    for(var d = 0, i = a.length;d < i;d++) {
      if(a[d].label == b) {
        return a[d]
      }
    }
  }
  I.ia = function(a) {
    this.type = "none";
    this.root = this;
    this.mb = [];
    this.Xe = [];
    this.ef = [];
    if(a !== h) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof I.Qb ? this.mb.push(a[b]) : a[b] instanceof I.Sa ? this.Xe.push(a[b]) : a[b] instanceof I.Dd && this.ef.push(a[b]))
      }
      a = 0;
      for(b = this.mb.length;a < b;a++) {
        this.mb[a].bc(this)
      }
      a = 0;
      for(b = this.Xe.length;a < b;a++) {
        this.Xe[a].bc(this)
      }
      a = 0;
      for(b = this.ef.length;a < b;a++) {
        this.ef[a].bc(this)
      }
    }
  };
  I.ia.prototype.Xh = function(a) {
    return b(this.mb, a)
  };
  I.ia.prototype.Vj = function() {
    for(var a = [], b = 0, d = this.mb.length;b < d;b++) {
      var i = this.mb[b];
      i.label && 0 === i.label.indexOf("top") && (a[a.length] = i.label)
    }
    return a
  };
  I.ia.prototype.Kj = function(a) {
    var b;
    if(b = this.Xh(a)) {
      return b
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  I.ia.prototype.Lj = function(a) {
    return b(this.Xe, a)
  };
  I.ia.prototype.Mj = function(a) {
    var b;
    if(b = this.Lj(a)) {
      return b
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  I.ia.prototype.Nj = function(a) {
    return b(this.ef, a)
  };
  I.ia.prototype.Oj = function(a) {
    var b;
    if(b = this.Nj(a)) {
      return b
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  I.Sa = function() {
    this.root = this.label = l;
    this.direction = new I.Ic(0);
    this.speed = new I.Oc(1);
    this.mb = [];
    this.Xa = {};
    this.Ba = {}
  };
  I.Sa.prototype.clone = function(a) {
    var b = new I.Sa;
    b.label = this.label;
    b.root = this.root;
    b.mb = this.mb;
    b.direction = new I.Ic(a.fb(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new I.Oc(a.fb(this.speed.value));
    b.speed.type = this.speed.type;
    b.Xa = this.Xa;
    b.Ba = a.Ba;
    return b
  };
  I.Sa.prototype.bc = function(a) {
    this.root = a;
    for(var b = 0, d = this.mb.length;b < d;b++) {
      this.mb[b].bc(a)
    }
  };
  I.Ie = function(a) {
    this.root = l;
    this.label = a;
    this.jb = []
  };
  I.Ie.prototype.clone = function(a) {
    var b = a.Ba;
    a.Ba = a.mg(this.jb);
    var d = this.root.Mj(this.label).clone(a);
    a.Ba = b;
    return d
  };
  I.Ie.prototype.bc = function(a) {
    this.root = a
  };
  I.lb = function() {
    this.Fb = ""
  };
  I.lb.prototype.bc = function(a) {
    this.root = a
  };
  I.Qb = function() {
    this.Fb = "action";
    this.root = this.label = l;
    this.jc = [];
    this.jb = []
  };
  I.Qb.prototype = new I.lb;
  I.Qb.prototype.bc = function(a) {
    this.root = a;
    for(var b = 0, d = this.jc.length;b < d;b++) {
      this.jc[b].bc(a)
    }
  };
  I.Qb.prototype.clone = function() {
    var a = new I.Qb;
    a.label = this.label;
    a.root = this.root;
    a.jc = this.jc;
    return a
  };
  I.Bd = function(a) {
    this.Fb = "actionRef";
    this.label = a;
    this.root = l;
    this.jb = []
  };
  I.Bd.prototype = new I.lb;
  I.Bd.prototype.clone = function() {
    var a = new I.Qb;
    a.root = this.root;
    a.jc.push(this);
    return a
  };
  I.Dd = function() {
    this.Fb = "fire";
    this.Ga = this.speed = this.direction = this.root = this.label = l;
    this.Xa = new I.Me
  };
  I.Dd.prototype = new I.lb;
  I.Dd.prototype.bc = function(a) {
    this.root = a;
    this.Ga && this.Ga.bc(a)
  };
  I.Hf = function(a) {
    this.Fb = "fireRef";
    this.label = a;
    this.jb = []
  };
  I.Hf.prototype = new I.lb;
  I.Ke = function() {
    this.Fb = "changeDirection";
    this.direction = new I.Ic;
    this.Bb = 0
  };
  I.Ke.prototype = new I.lb;
  I.Le = function() {
    this.Fb = "changeSpeed";
    this.speed = new I.Oc;
    this.Bb = 0
  };
  I.Le.prototype = new I.lb;
  I.He = function() {
    this.Fb = "accel";
    this.Dc = new I.Jf;
    this.Hc = new I.kg;
    this.Bb = 0
  };
  I.He.prototype = new I.lb;
  I.Qe = function(a) {
    this.Fb = "wait";
    this.value = a || 0
  };
  I.Qe.prototype = new I.lb;
  I.jg = function() {
    this.Fb = "vanish"
  };
  I.jg.prototype = new I.lb;
  I.Oe = function() {
    this.Fb = "repeat";
    this.Ci = 0;
    this.action = l;
    this.jb = []
  };
  I.Oe.prototype = new I.lb;
  I.Oe.prototype.bc = function(a) {
    this.root = a;
    this.action && this.action.bc(a)
  };
  I.Cf = function(a, b) {
    this.Fb = "bind";
    this.Qk = a;
    this.Jj = b
  };
  I.Cf.prototype = new I.lb;
  I.Zf = function(a, b) {
    this.Fb = "notify";
    this.Gj = a;
    this.jb = b || l
  };
  I.Zf.prototype = new I.lb;
  I.Pi = new I.lb;
  I.Ic = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  I.Oc = function(a) {
    this.type = "absolute";
    this.value = a === h ? 1 : a
  };
  I.Jf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  I.kg = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  I.Me = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.pa = k;
    a.pa !== h && (this.pa = !!a.pa)
  };
  I.wh = function(a) {
    this.value = a || 0
  };
  I.xh = function(a) {
    this.value = a || 0
  };
  I.jh = function(a) {
    this.value = !!a
  }
})();
I.Ta = function(b) {
  this.Fh = b;
  this.Re = [];
  this.Vc = -1;
  this.ub = l;
  this.Ba = {}
};
I.Ta.prototype.next = function() {
  this.Vc += 1;
  if(this.ub !== l) {
    var b = this.ub.jc[this.Vc];
    if(b !== h) {
      if(b instanceof I.Qb) {
        return this.de(), this.ub = b, this.Ba = this.lg(), this.next()
      }
      if(b instanceof I.Bd) {
        return this.de(), this.ub = this.Fh.Kj(b.label), this.Ba = this.mg(b.jb), this.next()
      }
      if(b instanceof I.Oe) {
        return this.Ba.Rd = 0, this.Ba.li = this.fb(b.Ci) | 0, this.de(), this.ub = b.action.clone(), this.Ba = this.lg(), this.next()
      }
      if(b instanceof I.Dd) {
        var a = new I.Dd;
        a.Ga = b.Ga.clone(this);
        b.direction !== l && (a.direction = new I.Ic(this.fb(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new I.Oc(this.fb(b.speed.value)), a.speed.type = b.speed.type);
        a.Xa = new I.Me;
        a.Xa.offsetX = this.fb(b.Xa.offsetX);
        a.Xa.offsetY = this.fb(b.Xa.offsetY);
        a.Xa.pa = b.Xa.pa;
        return a
      }
      return b instanceof I.Hf ? (this.de(), this.ub = new I.Qb, this.ub.jc = [this.Fh.Oj(b.label)], this.Ba = this.mg(b.jb), this.next()) : b instanceof I.Ke ? (a = new I.Ke, a.direction.type = b.direction.type, a.direction.value = this.fb(b.direction.value), a.Bb = this.fb(b.Bb), a) : b instanceof I.Le ? (a = new I.Le, a.speed.type = b.speed.type, a.speed.value = this.fb(b.speed.value), a.Bb = this.fb(b.Bb), a) : b instanceof I.He ? (a = new I.He, a.Dc.type = b.Dc.type, a.Dc.value = this.fb(b.Dc.value), 
      a.Hc.type = b.Hc.type, a.Hc.value = this.fb(b.Hc.value), a.Bb = this.fb(b.Bb), a) : b instanceof I.Qe ? new I.Qe(this.fb(b.value)) : b instanceof I.jg ? b : b instanceof I.Cf ? (this.Ba["$" + b.Qk] = this.fb(b.Jj), I.Pi) : b instanceof I.Zf ? b : l
    }
    this.sj();
    if(this.ub === l) {
      return l
    }
    if((b = this.ub.jc[this.Vc]) && "repeat" == b.Fb) {
      this.Ba.Rd++, this.Ba.Rd < this.Ba.li && (this.de(), this.ub = b.action.clone(), this.Ba = this.lg())
    }
    return this.next()
  }
  return l
};
I.Ta.prototype.de = function() {
  this.Re.push({action:this.ub, cursor:this.Vc, scope:this.Ba});
  this.Vc = -1
};
I.Ta.prototype.sj = function() {
  var b = this.Re.pop();
  b ? (this.Vc = b.cursor, this.ub = b.action, this.Ba = b.scope) : (this.Vc = -1, this.ub = l, this.Ba = {})
};
I.Ta.prototype.fb = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Ba[b]) || (a = I.Ta.Xb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var f in I.Ta.Xb) {
    I.Ta.Xb.hasOwnProperty(f) && (a[f] = I.Ta.Xb[f])
  }
  for(f in this.Ba) {
    this.Ba.hasOwnProperty(f) && (a[f] = this.Ba[f])
  }
  a.$rand = Math.random();
  (f = this.Re[this.Re.length - 1]) && (a.$loop = {index:f.scope.Rd, count:f.scope.Rd + 1, first:0 === f.scope.Rd, last:f.scope.Rd + 1 >= f.scope.li});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
I.Ta.prototype.mg = function(b) {
  var a = {};
  if(b) {
    for(var f = 0, d = b.length;f < d;f++) {
      a["$" + (f + 1)] = this.fb(b[f])
    }
  }else {
    for(f in this.Ba) {
      this.Ba.hasOwnProperty(f) && (a[f] = this.Ba[f])
    }
  }
  return a
};
I.Ta.prototype.lg = function() {
  var b = {}, a;
  for(a in this.Ba) {
    this.Ba.hasOwnProperty(a) && (b[a] = this.Ba[a])
  }
  return b
};
I.ia.prototype.Eg = function(b) {
  var a = new I.Ta(this);
  if(b = this.Xh(b)) {
    a.ub = b
  }
  return a
};
I.Sa.prototype.Eg = function() {
  var b = new I.Ta(this.root), a = new I.Qb;
  a.root = this.root;
  a.jc = this.mb;
  b.ub = a;
  b.Ba = this.Ba;
  return b
};
I.Ta.Xb = {};
I.Ha = function(b) {
  b = b || "";
  for(var a in I.Ha) {
    I.Ha.hasOwnProperty(a) && (I.Si[b + a] = I.Ha[a])
  }
};
I.Ha.action = function(b) {
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
  var d = new I.Qb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof I.lb)
    }) && g(Error("argument type error.")), d.jc = b
  }else {
    a = 0;
    for(f = arguments.length;a < f;a++) {
      arguments[a] instanceof I.lb ? d.jc[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return d
};
I.Ha.na = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("label is required."));
  d = new I.Bd(b);
  if(a instanceof Array) {
    d.jb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.jb.push(arguments[f])
    }
  }
  return d
};
I.Ha.Ga = function(b, a, f, d) {
  for(var i = 0, m = arguments.length;i < m;i++) {
    arguments[i] instanceof Function && (arguments[i] = arguments[i]())
  }
  m = new I.Sa;
  for(i = 0;i < arguments.length;i++) {
    arguments[i] instanceof I.Ic ? m.direction = arguments[i] : arguments[i] instanceof I.Oc ? m.speed = arguments[i] : arguments[i] instanceof I.Qb ? m.mb.push(arguments[i]) : arguments[i] instanceof I.Bd ? m.mb.push(arguments[i]) : arguments[i] instanceof Array ? m.mb.push(I.Ha.action(arguments[i])) : arguments[i] instanceof Object ? m.Xa = arguments[i] : "string" === typeof arguments[i] && (m.label = arguments[i])
  }
  return m
};
I.Ha.Yk = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("label is required."));
  d = new I.Ie(b);
  if(a instanceof Array) {
    d.jb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.jb.push(arguments[f])
    }
  }
  return d
};
I.Ha.fire = function(b, a, f, d) {
  for(var i = 0, m = arguments.length;i < m;i++) {
    arguments[i] instanceof Function && (arguments[i] = arguments[i]())
  }
  m = new I.Dd;
  for(i = 0;i < arguments.length;i++) {
    arguments[i] instanceof I.Ic ? m.direction = arguments[i] : arguments[i] instanceof I.Oc ? m.speed = arguments[i] : arguments[i] instanceof I.Sa ? m.Ga = arguments[i] : arguments[i] instanceof I.Ie ? m.Ga = arguments[i] : arguments[i] instanceof I.Me ? m.Xa = arguments[i] : arguments[i] instanceof I.wh ? m.Xa.offsetX = arguments[i].value : arguments[i] instanceof I.xh ? m.Xa.offsetY = arguments[i].value : arguments[i] instanceof I.jh && (m.Xa.pa = arguments[i].value)
  }
  m.Ga === h && g(Error("bullet (or bulletRef) is required."));
  return m
};
I.Ha.cl = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("label is required."));
  d = new I.Hf(b);
  if(a instanceof Array) {
    d.jb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.jb.push(arguments[f])
    }
  }
  return d
};
I.Ha.Zk = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("direction is required."));
  a === h && g(Error("term is required."));
  f = new I.Ke;
  f.direction = b instanceof I.Ic ? b : new I.Ic(b);
  f.Bb = a;
  return f
};
I.Ha.Ye = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("speed is required."));
  a === h && g(Error("term is required."));
  f = new I.Le;
  f.speed = b instanceof I.Oc ? b : new I.Oc(b);
  f.Bb = a;
  return f
};
I.Ha.Xk = function(b, a, f) {
  for(var d = 0, i = arguments.length;d < i;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  i = new I.He;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof I.Jf ? i.Dc = b : arguments[d] instanceof I.kg ? i.Hc = a : i.Bb = arguments[d]
  }
  i.Dc === h && i.Hc === h && g(Error("horizontal or vertical is required."));
  i.Bb === h && g(Error("term is required."));
  return i
};
I.Ha.wait = function(b) {
  for(var a = 0, f = arguments.length;a < f;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === h && g(Error("value is required."));
  return new I.Qe(b)
};
I.Ha.Pa = function() {
  return new I.jg
};
I.Ha.repeat = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("times is required."));
  a === h && g(Error("action is required."));
  d = new I.Oe;
  d.Ci = b;
  if(a instanceof I.Qb || a instanceof I.Bd) {
    d.action = a
  }else {
    if(a instanceof Array) {
      d.action = I.Ha.action(a)
    }else {
      for(var i = [], f = 1;f < arguments.length;f++) {
        i.push(arguments[f])
      }
      d.action = I.Ha.action(i)
    }
  }
  return d
};
I.Ha.wa = function(b, a) {
  return new I.Cf(b, a)
};
I.Ha.kl = function(b, a) {
  return new I.Zf(b, a)
};
I.Ha.direction = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("value is required."));
  f = new I.Ic(b);
  a !== h && (f.type = a);
  return f
};
I.Ha.speed = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("value is required."));
  f = new I.Oc(b);
  a && (f.type = a);
  return f
};
I.Ha.Dc = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("value is required."));
  f = new I.Jf(b);
  a && (f.type = a);
  return f
};
I.Ha.Hc = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("value is required."));
  f = new I.kg(b);
  a && (f.type = a);
  return f
};
I.Ha.bl = function(b) {
  return new I.Me(b)
};
I.Ha.offsetX = function(b) {
  return new I.wh(b)
};
I.Ha.offsetY = function(b) {
  return new I.xh(b)
};
I.Ha.pa = function(b) {
  return new I.jh(b)
};
tm.Eb = tm.Eb || {};
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
  tm.Eb.gd = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.Ch = a
  }, $e:function(a, b) {
    var d = this.Ch.Vj();
    if(b === h && 0 < d.length) {
      for(var f = [], t = 0, n = d.length;t < n;t++) {
        f[f.length] = this.Dh(a, d[t])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          p.yg == f.length && (p.le = k, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, t = f.length;t--;) {
        f[t].uf = p
      }
      p.yg = 0;
      p.Nh = function() {
        this.yg++
      };
      p.yg = 0;
      p.le = s;
      p.nf = k;
      p.stop = s;
      return p
    }
    return this.Dh(a, b)
  }, Dh:function(a, b) {
    function d() {
      if(!d.stop) {
        d.oa += 1;
        this.oa = d.oa;
        var a = d.Ze, b = d.rj;
        if(b) {
          if(d.oa < d.wg ? d.direction += d.Nd : d.oa === d.wg && (d.direction = d.Xc), d.oa < d.xg ? d.speed += d.Fe : d.oa === d.xg && (d.speed = d.Xd), d.oa < d.pg ? (d.yd += d.Ue, d.Ad += d.Ve) : d.oa === d.pg && (d.yd = d.Se, d.Ad = d.Te), this.x += Math.cos(d.direction) * d.speed * a.zd, this.y += Math.sin(d.direction) * d.speed * a.zd, this.x += d.yd * a.zd, this.y += d.Ad * a.zd, a.Ig(this)) {
            if(a.ed || this.ed) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.oa < d.Hi || d.le)) {
              for(var f;f = d.Ii.next();) {
                switch(f.Fb) {
                  case "fire":
                    b.oj.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Hi = "number" === typeof f.value ? d.oa + f.value : 0 !== (a = ~~f.value) ? d.oa + a : d.oa + eval(f.value);
                    return;
                  case "changeDirection":
                    b.jj.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.kj.call(this, f, d);
                    break;
                  case "accel":
                    b.hj.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.pj.call(this, f)
                }
              }
              d.le = k;
              d.uf ? d.uf.Nh() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.le = k, d.uf ? d.uf.Nh() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Eb.gd.me, f;
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
    "string" === typeof b ? d.Ii = this.Ch.Eg(b) : b instanceof I.Sa ? d.Ii = b.Eg() : (window.console.error(a, b), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.rj = this;
    d.Ze = a;
    d.Hi = -1;
    d.le = s;
    d.direction = 0;
    d.gi = 0;
    d.speed = 0;
    d.ii = 0;
    d.yd = 0;
    d.Ad = 0;
    d.Nd = 0;
    d.Xc = 0;
    d.wg = -1;
    d.Fe = 0;
    d.Xd = 0;
    d.xg = -1;
    d.Ue = 0;
    d.Se = 0;
    d.Ve = 0;
    d.Te = 0;
    d.pg = -1;
    d.oa = -1;
    d.stop = s;
    d.nf = k;
    return d
  }, nj:function(a) {
    function b() {
      b.stop || (this.x += b.Rh, this.y += b.Sh, b.Ze.Ig(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Eb.gd.me, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.Ze = a;
    b.direction = 0;
    b.speed = 0;
    b.Rh = 0;
    b.Sh = 0;
    b.stop = s;
    b.nf = k;
    return b
  }, oj:function(b, d, f, w) {
    if(this.sk === h || this.Mb) {
      var t = {label:b.Ga.label}, n;
      for(n in b.Ga.Xa) {
        t[n] = b.Ga.Xa[n]
      }
      if(t = d.Kh(t)) {
        w = (n = 0 === b.Ga.mb.length) ? w.nj(d) : w.$e(d, b.Ga);
        var p = this, r = {x:this.x + b.Xa.offsetX, y:this.y + b.Xa.offsetY};
        f.gi = w.direction = function(n) {
          var j = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? b.Xa.pa ? a(r, d.target) + j : a(p, d.target) + j : j - Math.PI / 2;
            case "absolute":
              return j - Math.PI / 2;
            case "relative":
              return f.direction + j;
            default:
              return f.gi + j
          }
        }(b.direction || b.Ga.direction);
        f.ii = w.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.ii + b;
            default:
              return b
          }
        }(b.speed || b.Ga.speed);
        t.x = r.x;
        t.y = r.y;
        n && (w.Rh = Math.cos(w.direction) * w.speed * d.zd, w.Sh = Math.sin(w.direction) * w.speed * d.zd);
        t.ed = !!t.ed;
        if(d.ed || t.ed) {
          t.rotation = (w.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, t.speed = w.speed
        }
        t.addEventListener("enterframe", w);
        d.Hh ? d.Hh.addChild(t) : this.parent && this.parent.addChild(t)
      }
    }
  }, jj:function(d, f, q) {
    var w = eval(d.direction.value) * Math.DEG_TO_RAD, t = eval(d.Bb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        q.Xc = a(this, d) + w;
        q.Nd = b(q.Xc - q.direction) / t;
        break;
      case "absolute":
        q.Xc = w - Math.PI / 2;
        q.Nd = b(q.Xc - q.direction) / t;
        break;
      case "relative":
        q.Xc = q.direction + w;
        q.Nd = b(q.Xc - q.direction) / t;
        break;
      case "sequence":
        q.Nd = w, q.Xc = q.direction + q.Nd * (t - 1)
    }
    q.wg = q.oa + t
  }, kj:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.Bb);
    switch(a.speed.type) {
      case "absolute":
        b.Xd = d;
        b.Fe = (b.Xd - b.speed) / f;
        break;
      case "relative":
        b.Xd = d + b.speed;
        b.Fe = (b.Xd - b.speed) / f;
        break;
      case "sequence":
        b.Fe = d, b.Xd = b.speed + b.Fe * f
    }
    b.xg = b.oa + f
  }, hj:function(a, b) {
    var d = eval(a.Bb);
    b.pg = b.oa + d;
    if(a.Dc) {
      var f = eval(a.Dc.value);
      switch(a.Dc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Ue = (f - b.yd) / d;
          b.Se = f;
          break;
        case "relative":
          b.Ue = f, b.Se = (f - b.yd) * d
      }
    }else {
      b.Ue = 0, b.Se = b.yd
    }
    if(a.Hc) {
      switch(f = eval(a.Hc.value), a.Hc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Ve = (f - b.Ad) / d;
          b.Te = f;
          break;
        case "relative":
          b.Ve = f, b.Te = (f - b.Ad) * d
      }
    }else {
      b.Ve = 0, b.Te = b.Ad
    }
  }, pj:function(a) {
    var b = tm.event.Event(a.Gj);
    if(a.jb) {
      for(var d in a.jb) {
        b[d] = a.jb[d]
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
  tm.Eb.Cj = function(a) {
    var b = tm.app.Sprite(f, 8, 8);
    b.label = a.label;
    return b
  };
  var d = l;
  tm.Eb.Qh = function(a) {
    if(d === l) {
      if(!a.getRoot().app) {
        return k
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Eb.$k = function() {
    return k
  };
  tm.Eb.gd.me = {Kh:tm.Eb.Cj, Ig:tm.Eb.Qh, sl:0, ed:s, zd:2, target:l};
  I.ia.prototype.$e = function(a) {
    return tm.Eb.gd(this).$e(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(E());
tm.main(function() {
  gls2.Ti("#canvas2d");
  gls2.core.run()
});
gls2.Ti = tm.createClass({superClass:tm.display.CanvasApp, re:0, Zj:0, ak:0, $j:0, Xj:0, Yj:l, ie:3, xd:3, Th:1, ba:l, init:function(b) {
  gls2.core !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.hh = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.ui.LoadingScene({assets:{achevements:"assets/achevements.json", tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex4:"assets/tex4.png", tex5:"assets/tex5.png", tex_tank1:"assets/tex_tank1.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", "kanade-cannon":"assets/kanade-cannon.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", 
  laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", 
  bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/Blue_Moon_MIKU_Append.mp3", bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", 
  "sound/achevement":"assets2/se_maoudamashii_system46.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", 
  "sound/voWarning":"assets/vo_warning.mp3"}, nextScene:function() {
    this.qj();
    return gls2.TitleScene()
  }.bind(this)}))
}, Lh:function() {
  var b = window.achevements, a = tm.asset.AssetManager.get("achevements").data;
  return!b ? 0 : Math.floor(b.reduce(function(b, d) {
    return a[d] ? b + J[a[d].grade] : b
  }, 0))
}, update:function() {
  for(var b = [].concat(this.hh), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.hh.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, qj:function() {
  gls2.ya.setup(12345);
  "tex1 tex2 tex3 tex4 tex5 tex_tank1 yotsubaLeaf kanade-cannon".split(" ").forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawTexture(a, 0, 0);
    f = f.getBitmap();
    f.filter({calc:function(a, b, d, f, t) {
      t.setPixelIndex(b, a[0], 0, 0)
    }});
    var d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawBitmap(f, 0, 0);
    tm.asset.AssetManager.set(b + "Red", d)
  });
  gls2.fa.setup();
  gls2.ma.setup();
  this.ba = gls2.ab()
}, al:function() {
  this.stop()
}, ki:s, Yg:function(b, a) {
  var f = {score:Math.floor(this.ba.score), stage:this.ba.Ib + 1, continueCount:this.ba.Pc, shipType:this.ba.ea.type, shipStyle:this.ba.ea.style, fps:0, screenShot:this.ba.Ud};
  b ? (f.userName = b, this.ki = s) : this.ki = k;
  tm.util.Ajax.load({url:"/api/ranking/post", data:f, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        a(l, k, b.scoreId)
      }else {
        if(b.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.Yg(l, a);
              window.onchildclose = h
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(b = "";"" === b;) {
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.Uj())
              }
              b !== l && (b = b.substring(0, 10), this.Yg(b + " (\u533f\u540d)", a))
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
}, Uj:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc(30) \u76f8\u7530\u7dcf\u7406".split(" ").pickup()
}, hh:l, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}, va:function(b) {
  if(window.achevements) {
    var a = tm.asset.AssetManager.get("achevements").data;
    if(a[b]) {
      var f = window.achevements;
      -1 == f.indexOf(b) && (f.push(b), tm.util.Ajax.load({url:"/api/achevement/" + b, type:"POST", dataType:"json", success:function(d) {
        console.dir(d);
        a[b] && (gls2.sa("achevement"), this.ba.di.addChild(gls2.qh(a[b].title)))
      }.bind(this), error:function() {
        console.warn("error!")
      }}))
    }
  }
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Qc = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.ab.ae && gls2.ab.ae.xe(0)
};
var N = [1E9, 1E10], Q = [3, 2, 1], R = [6, 4, 2], S = [1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], J = [0.1, 0.4, 1];
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.yh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Va:0, Ac:k, ge:k, ib:s, ba:l, speed:0, Lb:l, Md:l, ni:l, kf:l, Yb:l, Fg:l, yc:l, Gg:l, Hg:l, frame:0, init:function(a, d, i) {
    this.superInit("fighter", 64, 64);
    this.ba = a;
    this.type = d;
    this.style = i;
    tm.Eb.gd.me.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Md = this.ni = gls2.Ah(d, 100);
    this.kf = gls2.Ah(3, 100);
    this.Yb = gls2.vh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Yb.visible = s;
    this.mj();
    this.Lb = this.lj();
    1 === this.style && (this.Lb = [this.Lb[1], this.Lb[2]]);
    this.yc = tm.display.CanvasElement().addChildTo(this);
    d = 0;
    for(i = this.Lb.length;d < i;d++) {
      var m = this.Lb[d];
      gls2.Ki(this, m).setPosition(m.x, m.y).addChildTo(this.yc)
    }
    this.gk = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.gk.blendMode = "lighter";
    this.Gg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Gg.blendMode = "lighter";
    this.Gg.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Ua && !a.Ka
    };
    this.Hg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Hg.blendMode = "lighter";
    this.Hg.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Ua && !a.Ka
    };
    this.se = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.se.blendMode = "lighter";
    this.se.rotation = -90;
    this.se.strokeStyle = "rgba(180,180,255,0.4)";
    this.se.update = function() {
      this.visible = a.Ka
    };
    this.se.draw = function(b) {
      b.lineCap = "round";
      var d = a.Pd / 800;
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
    this.bk = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.bk.update = function() {
      this.visible = a.Ka
    };
    b === l && (b = gls2.kh(this.ba.ja))
  }, lj:function() {
    if(0 === this.type) {
      return[{x:0, qd:0, y:40, d:0, cc:k, Vb:-0.7, v:k}, {x:0, qd:0, y:40, d:0, cc:k, Vb:0.5, v:k}, {x:0, qd:0, y:40, d:0, cc:k, Vb:-0.5, v:k}, {x:0, qd:0, y:40, d:0, cc:k, Vb:0.7, v:k}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, cc:s, Vb:-0.7, v:k}, {x:-40, y:40, d:0.1, cc:s, Vb:-0.5, v:k}, {x:40, y:40, d:0.1, cc:k, Vb:0.5, v:k}, {x:70, y:20, d:0.1, cc:k, Vb:0.7, v:k}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, cc:s, Vb:-0.7, v:k}, {x:-30, y:20, d:0.4, cc:s, Vb:-0.5, v:k}, {x:30, y:20, d:0.4, cc:k, Vb:0.5, v:k}, {x:60, y:40, d:0.6, cc:k, Vb:0.7, v:k}]
    }
  }, mj:function() {
    this.Fg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Fg.setFrameIndex(5);
    this.Fg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, bd:-1, Od:s, Wb:s, update:function(f) {
    this.visible = this.ib ? 0 === f.frame / 2 % 2 : k;
    var d = f.keyboard;
    if(this.Ac) {
      var i = d.getKeyAngle();
      i !== l && (i = a[i], this.x += i.x * this.speed * (this.Wb ? 0.5 : 1), this.y += i.y * this.speed * (this.Wb ? 0.5 : 1));
      this.x = gls2.ka.clamp(this.x, 15, 465);
      this.y = gls2.ka.clamp(this.y, 15, 625);
      var m = d.getKey("c") && this.ge, i = d.getKey("z") && this.ge;
      this.bd = m ? this.bd + 1 : this.bd - 1;
      this.bd = gls2.ka.clamp(this.bd, -1, 10);
      this.Wb = i && m || 10 === this.bd;
      m = this.ba.Ka ? 3 : 5;
      this.Od = !this.Wb && (0 <= this.bd || i) && 0 === f.frame % m;
      i && (this.bd = 0);
      this.Yb.x = this.x;
      this.Yb.y = this.y - 40;
      d.getKeyDown("x") && this.ge && (0 < this.ba.Ua && !this.ba.Ka ? (this.ba.Fk(), gls2.gj(this).addChildTo(this.ba)) : !this.ba.Qd && 0 < this.ba.hc && (this.Fc = gls2.ka.clamp(this.Fc - 2, 0, 1), this.ba.qg(-0.02), gls2.lh(this, this.ba).setPosition(gls2.ka.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ba), gls2.core.va("bomb1")))
    }else {
      this.Wb = this.Od = s
    }
    this.Od && (i = Math.sin(0.2 * f.frame), m = this.Md.fire(this.x - 7 - 6 * i, this.y - 5, -90), m !== l && m.addChildTo(this.ba), m = this.Md.fire(this.x + 7 + 6 * i, this.y - 5, -90), m !== l && m.addChildTo(this.ba));
    if(this.Wb) {
      i = 0;
      for(m = this.Lb.length;i < m;i++) {
        this.Lb[i].v = s
      }
      this.yc.rotation = 0
    }else {
      this.Yb.visible = s;
      i = 0;
      for(m = this.Lb.length;i < m;i++) {
        this.Lb[i].v = k
      }
    }
    this.Bj(d);
    this.ij(d, f.frame);
    0 === f.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ba), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ba));
    this.frame = f.frame
  }, sd:function() {
    this.Wb = this.Od = s;
    this.ba.af();
    this.ba.nb = 0;
    this.ba.gb = 0;
    this.ba.Oa = 0
  }, Bj:function(a) {
    if(0 === this.type) {
      for(a = this.Lb.length;this.Lb[--a] !== h;) {
        var b = this.Lb[a];
        0 === a ? b.x = b.qd + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.qd + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.qd + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.qd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.yc, b.rotation = this.Wb ? 0 : this.Ac && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Ac && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, ij:function(a, b) {
    this.Ac && a.getKey("left") ? this.Va = gls2.ka.clamp(this.Va - 0.2, -3, 3) : this.Ac && a.getKey("right") ? this.Va = gls2.ka.clamp(this.Va + 0.2, -3, 3) : 0 > this.Va ? this.Va = gls2.ka.clamp(this.Va + 0.2, -3, 3) : 0 < this.Va && (this.Va = gls2.ka.clamp(this.Va - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Va) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Va) : 2 === this.type && this.setFrameIndex(31 + ~~this.Va);
    return b
  }});
  gls2.Ki = tm.createClass({superClass:tm.display.AnimationSprite, od:l, ea:l, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.od = b;
    this.ea = a;
    this.altitude = 10;
    this.gotoAndPlay(b.cc ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.od.v) {
      this.x = this.od.x * (this.ea.ba.Ka ? 1.5 : 1);
      this.y = this.od.y * (this.ea.ba.Ka ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.od.d * this.od.Vb);
      var d = this.parent.localToGlobal(this);
      this.od.v && 0 === a.frame % 2 && b.clone(40).setPosition(d.x, d.y).addChildTo(this.ea.ba);
      this.ea.Od && (d = this.ea.Md.fire(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== l && d.addChildTo(a.ba))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  gls2.Id = tm.createClass({superClass:tm.display.Sprite, speed:0, md:0, xj:1, ci:0, ob:k, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.md = 1;
    b === l && (b = gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== h && this.Ee(a)
  }, update:function() {
    this.x += this.Sc;
    this.y += this.oc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, Ee:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, gf:function(a) {
    for(var d = 0;d < a;d++) {
      var i = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = gls2.ka.randf(2, 8), q = 2 * Math.random() * Math.PI;
      i.Da = Math.cos(q) * m;
      i.Ea = Math.sin(q) * m;
      i.scaleX = i.scaleY = (gls2.ka.randf(0.1, 0.5) + gls2.ka.randf(0.1, 0.5)) / 2;
      i.addEventListener("enterframe", function() {
        this.x += this.Da;
        this.y += this.Ea;
        this.Da *= 0.9;
        this.Ea *= 0.9
      })
    }
  }});
  gls2.Id.ke = function() {
    for(var b = [].concat(a), d = 0, i = b.length;d < i;d++) {
      b[d].remove()
    }
  };
  var a = gls2.Id.wc = [];
  gls2.Ah = tm.createClass({ad:l, bi:s, init:function(b, d) {
    this.bi = 3 === b;
    this.ad = [];
    for(var i = 0;i < d;i++) {
      var m = gls2.Id(b), q = this;
      m.addEventListener("added", function() {
        this.ra = 10;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        q.ad.push(this)
      });
      this.bi && m.addEventListener("enterframe", function(a) {
        this.setScale((this.xj + this.ci) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.ad.push(m)
    }
  }, fire:function(a, b, i) {
    var m = this.ad.pop();
    if(m === h) {
      return l
    }
    var q = gls2.ka.degToRad(i);
    m.Sc = Math.cos(q) * m.speed;
    m.oc = Math.sin(q) * m.speed;
    m.setPosition(a, b);
    m.rotation = i + 90;
    return m
  }, Vd:function(a) {
    for(var b = this.ad.length;this.ad[--b] !== h;) {
      this.ad[b].md = 1 + 0.1 * a, this.ad[b].ci = 0.2 * a
    }
  }})
})();
gls2.vh = tm.createClass({superClass:tm.display.Sprite, ea:l, ba:l, vc:0, frame:0, Bi:l, color:l, Ih:0, sg:0, yj:s, head:l, Yh:l, xc:l, ob:k, md:1, Td:l, init:function(b, a) {
  this.ea = b;
  this.ba = b.ba;
  this.Ih = 0 === this.ea.style ? 1 : 1.2;
  this.sg = 0 === this.ea.style ? 50 : 75;
  var f = this;
  this.Bi = a;
  this.superInit(a.redBody, this.sg, 100);
  this.boundingHeightBottom = 1;
  this.ul = 0;
  this.origin.y = 1;
  var d = this.xc = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.Yh = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = f.vc - f.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < f.vc
  };
  this.Ee(["red", "green", "blue"][this.ea.type]);
  this.Vd(0)
}, Ee:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.Bi[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.xc.gotoAndPlay(this.color);
  this.Yh.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Td = l;
  return this
}, Vd:function(b) {
  this.boundingWidth = this.width = this.sg + 30 * b / 10;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.md = 1 * this.Ih + 0.25 * b;
  0 === b ? this.Ee(["red", "green", "blue"][this.ea.type]) : this.Ee("hyper")
}, gf:function(b, a) {
  this.Td === l && this.Oh();
  a = a || this.vc;
  for(var f = 0;f < b;f++) {
    var d = this.Td.clone().setPosition(this.x, a).addChildTo(this.ba), i = gls2.ka.randf(8, 14), m = gls2.ka.randf(0, Math.PI);
    d.Da = Math.cos(m) * i;
    d.Ea = Math.sin(m) * i;
    d.scaleX = d.scaleY = (gls2.ka.randf(0.5, 1.5) + gls2.ka.randf(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.Da;
      this.y += this.Ea;
      this.Da *= 0.95;
      this.Ea *= 0.95
    })
  }
}, Qj:function(b, a, f) {
  this.Td === l && this.Oh();
  for(var d = 0;d < b;d++) {
    var i = this.Td.clone().setPosition(a, f).addChildTo(this.ba), m = gls2.ka.randf(12, 20), q = gls2.ka.randf(0, Math.PI);
    i.Da = Math.cos(q) * m;
    i.Ea = Math.sin(q) * m;
    i.scaleX = i.scaleY = (gls2.ka.randf(1, 3) + gls2.ka.randf(1, 3)) / 2;
    i.addEventListener("enterframe", function() {
      this.x += this.Da;
      this.y += this.Ea;
      this.Da *= 0.95;
      this.Ea *= 0.95
    })
  }
}, Oh:function() {
  this.Td = "hyper" === this.color ? gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.ea.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.ea.Wb) ? (this.vc = Math.max(0, this.vc - 40), this.height = this.y - this.vc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.vc = this.y - 40;
  this.yj = this.visible
}, draw:function(b) {
  var a = this.srcRect, f = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(f, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, el:function() {
  return this.vc
}, zk:function(b) {
  this.vc = b;
  this.head.update()
}});
gls2.vh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.vc
});
(function() {
  gls2.lh = tm.createClass({superClass:tm.app.Object2D, ob:k, ba:l, init:function(a, f) {
    this.superInit();
    this.ea = a;
    this.ba = f;
    this.wi = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.wi.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.wi));
    this.Gh();
    b === l && (b = gls2.Wa(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.oa = 0;
    this.Be = 1;
    this.addEventListener("added", function() {
      this.ba.Qd = k;
      this.ea.ib = k;
      this.ba.hc -= 1;
      this.ba.mf = s;
      this.ba.af();
      this.ba.yb("drop BOMBER!!", k);
      gls2.sa("bomb");
      gls2.sa("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ba.Qd = s;
      this.ea.ib = s
    })
  }, Gh:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ka.randf(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.Be + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.oa;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.oa += 3.6, this.Be = -1) : (this.b = 8, this.oa += 1.8, this.Be = 1)
  }});
  gls2.Rk = tm.createClass({superClass:gls2.lh, init:function(a, b) {
    this.superInit(a, b);
    this.addEventListener("added", function() {
      this.ba.hc = 0
    })
  }, Gh:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ka.randf(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.Be + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.oa;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.oa += 1.8, this.Be = 1)
  }});
  var b = l
})();
gls2.Li = tm.createClass({superClass:tm.display.Sprite, Sc:0, oc:0, ea:l, oa:0, init:function(b, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.ea = f;
  this.oc = 1;
  this.Sc = 0.5 > gls2.ya.random() ? -1 : 1;
  this.oa = 0
}, update:function() {
  this.x += this.Sc;
  this.y += 2 * this.oc;
  if(2025 > gls2.Qc(this, this.ea)) {
    this.ea.ba.uj(1), this.remove()
  }else {
    if(3E3 > this.oa) {
      if(30 > this.x || 450 < this.x) {
        this.Sc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.oc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.oa += 1
}});
gls2.Ri = tm.createClass({superClass:tm.display.Sprite, Sc:0, oc:0, ea:l, oa:0, init:function(b, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var d = -1;1 >= d;d++) {
    for(var i = -1;1 >= i;i++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(d, i).addChildTo(this)
    }
  }
  this.setPosition(b, a);
  this.ea = f
}, update:function() {
  this.y += 0.5;
  4096 > gls2.Qc(this, this.ea) && (this.ea.ba.Uh(), gls2.core.va("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.ma = {};
gls2.ma.setup = function() {
  gls2.Fj = {};
  gls2.ma.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.Fj.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.ma.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ma.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ma.particle16 = gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.ma.gf = function(b, a, f) {
  b = gls2.ma.particle16.clone().setPosition(b, a);
  b.ob = k;
  b.addChildTo(f);
  f = gls2.ka.randf(5, 20);
  a = gls2.ka.randf(Math.PI, 2 * Math.PI);
  b.Da = Math.cos(a) * f;
  b.Ea = Math.sin(a) * f;
  b.scaleX = b.scaleY = (gls2.ka.randf(0.1, 0.5) + gls2.ka.randf(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.Da;
    this.y += this.Ea;
    this.Da *= 0.9;
    this.Ea *= 0.9
  })
};
gls2.ma.Dg = function(b, a, f, d) {
  d = d || 1.8;
  var i = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  i.ob = k;
  i.addChildTo(f);
  i.image = gls2.ma.shockwaveImage;
  i.tweener.clear().to({scaleX:d, scaleY:d, alpha:0}, 800, "easeOutQuad").call(function() {
    i.remove()
  })
};
gls2.ma.Sj = function(b, a, f) {
  var d = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  d.ob = k;
  d.addChildTo(f);
  d.image = gls2.ma.shockwaveImage;
  d.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
};
gls2.ma.Rj = function(b, a, f) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.ob = k;
  b.addChildTo(f);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.ma.cf = function(b, a, f, d) {
  gls2.sa("explode");
  var i = gls2.ma.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  i.ob = k;
  if(d !== h) {
    var m = d.x, q = d.y;
    i.addEventListener("enterframe", function() {
      this.x += m;
      this.y += q;
      m *= 0.99;
      q *= 0.99
    })
  }
  i.addChildTo(f);
  gls2.ma.Dg(b, a, f)
};
gls2.ma.Ij = function(b, a, f) {
  gls2.sa("explode");
  var d = gls2.ma.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.ob = k;
  d.addChildTo(f);
  d = gls2.ma.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.ob = k;
  d.addChildTo(f);
  d = gls2.ma.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.ob = k;
  d.addChildTo(f)
};
gls2.ma.hb = function(b, a, f) {
  gls2.sa("explode2");
  gls2.sa("explode3");
  for(var d = ~~(Math.random() * gls2.Uc.noise.length), i = 0;20 > i;i++) {
    var m = gls2.ma.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Uc.noise.at(~~(gls2.Uc.noise.length * i / 20) + d), 2);
    m.ob = k;
    m.addChildTo(f)
  }
  gls2.ma.Dg(b, a, f, 5)
};
gls2.ma.pe = function(b, a, f) {
  gls2.sa("explode2");
  gls2.sa("explode3");
  for(var d = ~~(Math.random() * gls2.Uc.noise.length), i = 0;20 > i;i++) {
    for(var m = 2 * Math.PI * i / 20, q = Math.pow(gls2.Uc.noise.at(~~(gls2.Uc.noise.length * i / 20) + d), 2), w = 0;3 > w;w++) {
      var t = 4 * q * (w + 1), n = gls2.ma.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.oa += 1
      }).setScale(0.3 * (3 - w)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      n.rotation = 2 * Math.random() * Math.PI;
      n.ob = k;
      n.oa = 0;
      n.a = m;
      n.v = t;
      n.addChildTo(f)
    }
  }
};
gls2.Gf = tm.createClass({superClass:tm.app.Object2D, target:l, mc:0, angle:0, alpha:2, ob:k, reverse:s, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.mc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Wa(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.mc + this.target.x, Math.sin(a) * this.mc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.mc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.mc || 200 < this.mc) && this.remove()
  }
}});
gls2.gj = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, ob:k, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Wa(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ka.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ka.rand(-2, 2)).on("enterframe", function() {
        this.x += this.Da;
        this.y += this.Ea
      }).addChildTo(this.target.parent);
      a.Da = 3 * Math.cos(this.angle);
      a.Ea = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
gls2.qh = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(b) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + b + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).setFillStyle("rgba(255, 255, 255, 0.5)").addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, ml:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.alpha = 576 < gls2.core.ba.ea.y ? 0.1 : 1;
  this.label.x -= 2;
  -960 > this.label.x && this.remove()
}});
gls2.bj = tm.createClass({superClass:tm.graphics.Canvas, ba:l, Ld:l, Ab:l, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ba = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Ld = gls2.Mi(200);
  this.Ab = gls2.zh(this)
}, update:function() {
  this.clear();
  this.ba.ic !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Ab.Cc - 20, 470 * this.ba.ic.ra / this.ba.ic.Yc, 20), this.strokeRect(5, this.Ab.Cc - 20, 470, 20), this.clear(263.5, this.Ab.Cc - 20 + 2, 2, 16), this.clear(52, this.Ab.Cc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ba.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.Ab.Cc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ba.nb)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ba.Oa / 1E3) + 1), this.Ab.qe + 192, 22);
  b = [0, 1, 4][this.ba.ea.type];
  for(a = 0;a < this.ba.fd - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * I.Ta.Xb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ba.ue + " hit", this.Ab.qe + 10, 95);
  0 < ~~this.ba.Oa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ba.Oa + " HIT!!", 10, 0.5 * -this.Ab.Cc + 115));
  0 === this.frame % 2 && (!this.ba.Ka && 0 < this.ba.Ua ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ba.Ua, 5, 637)) : this.ba.Ka && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ba.rd, 5, 637)));
  for(a = 0;a < this.ba.hc;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ba.mf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Ld.update();
  this.Ld.Xg = this.Ab.Cc + 5;
  this.Ld.draw(this);
  this.frame += 1
}});
gls2.zh = tm.createClass({superClass:tm.app.Object2D, Pb:l, qe:0, Cc:0, init:function(b) {
  this.superInit();
  this.Pb = b
}});
(function() {
  var b = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.Ui = tm.createClass({superClass:tm.graphics.Canvas, Ca:l, Ob:l, $b:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ca = gls2.Vi();
    this.Ca.ja = this;
    this.Ca.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Ob = [];
    this.$b = [];
    for(var a = 0;5 > a;a++) {
      this.Ob[a] = 40 * b[a], this.$b[a] = this.Ob[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Ca.Da = Math.cos(this.Ca.direction) * this.Ca.speed;
    this.Ca.Ea = Math.sin(this.Ca.direction) * this.Ca.speed;
    for(var b = 0;5 > b;b++) {
      for(this.Ca.kc[b] += this.Ca.Da * Math.pow(0.8, b);3 * this.Ob[b] < this.Ca.kc[b];) {
        this.Ca.kc[b] -= 3 * this.Ob[b]
      }
      for(;this.Ca.kc[b] < 3 * -this.Ob[b];) {
        this.Ca.kc[b] += 3 * this.Ob[b]
      }
      for(this.Ca.lc[b] += this.Ca.Ea * Math.pow(0.8, b);2 * this.$b[b] < this.Ca.lc[b];) {
        this.Ca.lc[b] -= 2 * this.$b[b]
      }
      for(;this.Ca.lc[b] < 2 * -this.$b[b];) {
        this.Ca.lc[b] += 2 * this.$b[b]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Ca.background !== l ? this.clearColor(this.Ca.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * b[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * b[a] + ")"}]).toStyle();
      this.beginPath();
      for(var f = 0, d = this.Ca.kc[a] - 3 * this.Ob[a];d < 480 + 3 * this.Ob[a];d += 1.5 * this.Ob[a]) {
        for(var f = 0 === f ? this.$b[a] : 0, i = this.Ca.lc[a] - 2 * this.$b[a] + f;i < 640 + 2 * this.$b[a];i += 2 * this.$b[a]) {
          this.line(d, i, d + this.Ob[a], i), this.line(d, i, d - this.Ob[a] / 2, i + this.$b[a]), this.line(d, i, d - this.Ob[a] / 2, i - this.$b[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.Vi = tm.createClass({superClass:tm.app.Object2D, kc:0, lc:0, direction:0, speed:0, Da:0, Ea:0, background:l, init:function() {
    this.superInit();
    this.kc = [];
    this.lc = [];
    for(var a = 0;5 > a;a++) {
      this.kc[a] = 240, this.lc[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Ea = this.Da = 0
  }})
})();
gls2.ig = tm.createClass({superClass:tm.display.Sprite, fi:s, ba:l, ea:l, Zc:s, ud:s, eh:s, Da:0, Ea:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.fi = b) && this.setScale(2, 2);
  this.ba = gls2.ab.ae;
  this.ea = this.ba.ea;
  this.addChildTo(this.ba);
  b = 0.5 * gls2.ya.random() * Math.PI - 0.75 * Math.PI;
  this.Da = 30 * Math.cos(b);
  this.Ea = 30 * Math.sin(b)
}, update:function() {
  this.ea.Wb && (this.ud = k);
  if(this.ea.parent === l) {
    this.ud = s
  }else {
    if(100 > gls2.Qc(this, this.ea)) {
      this.ba.ik(this);
      this.remove();
      return
    }
    1E4 > gls2.Qc(this, this.ea) && (this.ud = k);
    if(this.eh && this.ud) {
      var b = Math.atan2(this.ea.y - this.y, this.ea.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.eh || (this.x += this.Da, this.y += this.Ea, this.Da *= 0.8, this.Ea *= 0.8, -1 < this.Da && (1 > this.Da && -1 < this.Ea && 1 > this.Ea) && (this.eh = k))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.Bh = tm.createClass({superClass:gls2.ig, Zc:s, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.fj = tm.createClass({superClass:gls2.ig, Zc:k, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.ud || (this.x += this.ba.ja.Da, this.y += this.ba.ja.Ea);
  this.superClass.prototype.update.call(this)
}});
gls2.jd = tm.createClass({ea:l, ba:l, $:l, frame:0, init:function(b) {
  this.ba = b;
  this.ea = b.ea;
  this.Wd();
  this.$ = gls2.ej();
  this.frame = 0
}, Wd:E(), update:function() {
  this.Hj(this.frame);
  this.frame += 1
}, Hj:function(b) {
  b = this.$.get(b);
  if(b !== l) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.oh[b.value] !== h) {
        var a = gls2.oh[b.value];
        if(a !== l) {
          if(a[0].ic === k) {
            this.Ra(a[0])
          }else {
            for(var f = 0;f < a.length;f++) {
              var d = this.Ra(a[f]);
              b.stop && d.addEventListener("enemyconsumed", function() {
                this.$.Yd = s
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Ra:function(b) {
  this.ba.bf += 1;
  b = b.hard(this.ba, b.soft).setPosition(b.x, b.y).addChildTo(this.ba);
  b.Ia = this;
  b.Sd();
  return b
}, fe:function(b) {
  gls2.df();
  this.ba.ne = k;
  for(var a = tm.app.Object2D().setPosition(240, 320), f = -4;4 >= f;f++) {
    for(var d = -4;4 >= d;d++) {
      var i = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(f, d);
      i.oa = 0;
      i.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.oa) + 0.5;
        this.oa += 1
      };
      i.addChildTo(a)
    }
  }
  a.tweener.wait(3E3).call(b).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = E();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.ba.Bg);
  gls2.sa("warning");
  gls2.sa("voWarning")
}});
gls2.jd.create = function(b) {
  return gls2.dj(b)
};
gls2.ej = tm.createClass({index:0, data:l, Yd:s, init:function() {
  this.data = {}
}, add:function(b, a, f) {
  this.index += b;
  this.data[this.index] = {stop:f, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === h ? l : b.stop === k ? (this.Yd = k, b) : this.Yd ? l : b
}});
gls2.Sk = tm.createClass({superClass:gls2.jd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm1", k);
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.speed = 8;
    this.ba.ja.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.fe(function() {
      gls2.Hb("bgmBoss", k)
    })
  });
  this.$.add(600, "misumi")
}, Wd:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.Tk = tm.createClass({superClass:gls2.jd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm2", k);
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.ba.ja.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.ba.ja.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", k);
  this.$.add(300, "heri2-left");
  for(b = 0;12 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
    this.fe(function() {
      gls2.Hb("bgmBoss", k)
    })
  });
  this.$.add(300, function() {
    this.ba.ja.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Wd:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.Uk = tm.createClass({superClass:gls2.jd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm3", k);
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.speed = 2;
    this.ba.ja.tweener.clear().to({speed:5}, 4E3, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({speed:7}, 1E3, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({speed:3}, 1E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "akane-right");
  this.$.add(60, "akane-left");
  for(b = 0;3 > b;b++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(60, function() {
    this.ba.ja.tweener.clear().to({speed:4, direction:90 * (-Math.PI / 180)}, 3E3, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({speed:4}, 2E3, "easeInOutQuad").to({direction:0.5 * Math.PI}, 2E3, "easeInOutQuad")
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
    this.fe(function() {
      gls2.Hb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.ba.ja.direction = Math.PI / 2;
    this.ba.ja.tweener.clear().to({speed:7}, 8E3, "easeInOutQuad")
  });
  this.$.add(480, "momozono")
}, Wd:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.Vk = tm.createClass({superClass:gls2.jd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm4", k);
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.speed = 1
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
    this.ba.ja.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(b = 0;6 > b;b++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.ba.ja.speed = 3;
    this.ba.ja.tweener.clear().to({speed:0.3}, 5E3)
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
    this.ba.ja.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", k);
  this.$.add(1200, E());
  for(b = 0;9 > b;b++) {
    this.$.add(50, 0 === b % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:0.6}, 3E3)
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
    this.fe(function() {
      gls2.Hb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Wd:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.dj = tm.createClass({superClass:gls2.jd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm5", k);
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.speed = 1;
    this.ba.ja.wl = k
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
  this.$.add(1200, E());
  for(b = 0;45 > b;b++) {
    this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(2, "DUMMY+" + b)
  }
  this.$.add(300, function() {
    this.fe(function() {
      gls2.Hb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Wd:function() {
  this.ba.ja.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {of:function(b, a) {
  if(b.parent === l || a.parent === l) {
    return s
  }
  var f = b.x + b.boundingWidthRight, d = b.y - b.boundingHeightTop, i = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, q = a.y - a.boundingHeightTop, w = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && f > m && d < w && i > q
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Hk:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.td(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.Oi = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:s, title:l, selections:[], description:l, box:l, cursor:l, Pg:l, _selected:0, _opened:s, _finished:s, init:function(b, a, f) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~f.defaultValue;
  this.showExit = f.showExit;
  this.descriptions = f.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Pg = f.onCursorMove;
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
    var i = tm.display.Label(a).setPosition(240, b).addChildTo(this);
    i.interactive = k;
    i.addEventListener("touchend", function() {
      d._selected === f ? d.closeDialog(d._selected) : d._selected = f
    });
    i.width = 336;
    return i
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Pg !== l && this.parent.Pg(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.sa("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.ka.clamp(this._selected, 0, this.selections.length - 1), gls2.sa("select")) : 
  b.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.ka.clamp(this._selected, 0, this.selections.length - 1), gls2.sa("select")))
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
}, td:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function T(b, a, f, d, i) {
  i = {}.$extend({menuDescriptions:[].concat(f), showExit:k, defaultValue:0, onCursorMove:E()}, i);
  b.Hk(gls2.Oi(a, f, i), d)
}
;gls2.Wa = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, rg:0.85, size:0, image:l, ob:k, init:function(b, a, f, d) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== h ? a : 1;
  this.rg = f !== h ? f : 0.85;
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.rg;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Wa(this.size, this.il, this.rg, this.image)
}});
gls2.kh = tm.createClass({superClass:gls2.Wa, ja:l, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.ja = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.ja.Da;
  this.y += this.ja.Ea + 0.3
}, clone:function(b) {
  return gls2.kh(this.ja, b)
}});
gls2.Mi = tm.createClass({width:0, label:l, Db:l, oa:0, si:0, Xg:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Db = [];
  this.si = 480 - this.width - 5;
  this.Xg = 5
}, vj:function(b, a) {
  a === k && (this.Db.clear(), this.Db.push(""));
  5 < this.Db.length && this.Db.splice(1, this.Db.length - 4);
  this.Db.push(b);
  return this
}, zj:function() {
  this.Db.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.Db.length) {
    if("" !== this.Db[0]) {
      var a = this.Db[0][0];
      this.Db[0] = this.Db[0].substring(1);
      b += a
    }else {
      this.Db.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.oa % 2 ? "_" : " ");
  this.oa += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.si, this.Xg);
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
gls2.Uc = {noise:l, Tj:function(b) {
  function a(a) {
    if(1 > a) {
      return l
    }
    var d = [], i = Math.random(), m, q;
    for(q = 0;q < b;q += ~~a) {
      m = Math.random();
      for(var j = 0;j < a;j++) {
        d[q + j] = f(i, m, j / a)
      }
      i = m
    }
    i = d[b - ~~a];
    m = d[0];
    for(j = 0;j < a;j++) {
      d[b - ~~a + j] = f(i, m, j / a)
    }
    return d
  }
  function f(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var d = [], i = 0, m = Math.pow(2, 4);8 > i;i++, m *= 2) {
    var q = a(b / m);
    if(q === l) {
      break
    }
    d.push(q)
  }
  q = [].concat(d[0]);
  i = 1;
  for(m = 0.5;i < d.length;i++, m *= 0.5) {
    for(var w = 0;w < b;w++) {
      q[w] += d[i][w] * m
    }
  }
  for(i = 0;i < q.length;i++) {
    q[i] /= 2
  }
  return q
}};
gls2.Uc.noise = gls2.Uc.Tj(512);
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
gls2.cb = l;
gls2.Hb = function(b, a, f) {
  a || gls2.Ge();
  a = tm.asset.AssetManager.get(b);
  var d = tm.asset.AssetManager.get("bgmLoopInfo");
  a && (gls2.cb = a.clone(), gls2.cb.volume = 0.1 * gls2.core.ie, gls2.cb.loop = !f, gls2.cb.play(), d.data[b] && (gls2.cb.source.loopStart = d.data[b].start, gls2.cb.source.loopEnd = d.data[b].end))
};
gls2.Ge = function() {
  gls2.cb !== l && gls2.cb.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.cb.stop()
};
gls2.df = function() {
  if(gls2.cb !== l) {
    var b = gls2.cb;
    gls2.cb = l;
    b.loop = s;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.rl === AudioBufferSourceNode.PLAYING_STATE && b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.sa = function(b) {
  if(0 !== gls2.core.xd && gls2.sa.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.xd, gls2.sa.ih !== l && gls2.sa.ih.stop(), gls2.sa.ih = a) : a.volume = 0.1 * gls2.core.xd);
    gls2.sa.played[b] = gls2.core.frame
  }
};
gls2.sa.played = {};
gls2.sa.ih = l;
(function() {
  var b = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, oa:0, ye:[], ff:s, ai:l, hi:0, pf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.ai = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.ff = s;
      this.Ok()
    })
  }, Ok:function() {
    for(var a = ("" + Math.floor(gls2.core.re)).padding(16, " "), b = "", i = 0;i < a.length;i += 4) {
      b += a.substring(i, i + 4) + " "
    }
    this.ai.text = "HIGH SCORE: " + b.trim()
  }, td:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Eh(80 * Math.cos(0.01 * this.oa) + 240, 80 * Math.sin(0.01 * this.oa) + 320, 0);
    this.Eh(80 * Math.cos(0.01 * this.oa + Math.PI) + 240, 80 * Math.sin(0.01 * this.oa + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.ff && this.pi();
    this.oa += 1
  }, Eh:function(f, d, i) {
    if(!this.ff) {
      b === l && (b = gls2.Wa(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Wa(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      i = 0 === i ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      i.speed = 0.6;
      var m = gls2.ka.randf(0, 2 * Math.PI), q = gls2.ka.rand(0, 20);
      i.setPosition(Math.cos(m) * q + f, Math.sin(m) * q + d);
      var w = this;
      i.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = w.ye.indexOf(this);
          -1 !== a && w.ye.splice(a, 1)
        }
      };
      this.ye.push(i)
    }
  }, pi:function() {
    T(this, "MAIN MENU", ["start", "setting"], this.ok, {defaultValue:this.hi, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, ok:function(a) {
    2 !== a && (this.hi = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.ff = k;
          for(var a = 0, b = this.ye.length;a < b;a++) {
            this.ye[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.cj())
        }.bind(this));
        break;
      case 1:
        this.$c()
    }
  }, $c:function() {
    T(this, "SETTING", ["bgm volume", "sound volume"], this.Tg, {defaultValue:this.pf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Tg:function(a) {
    3 !== a && (this.pf = a);
    switch(a) {
      case 0:
        this.Ug();
        break;
      case 1:
        this.Vg();
        break;
      default:
        this.pi()
    }
  }, Ug:function() {
    T(this, "BGM VOLUME", "012345".split(""), this.Rg, {defaultValue:gls2.core.ie, onCursorMove:function(a) {
      gls2.cb !== l && "exit" !== a && (gls2.cb.volume = 0.1 * a)
    }, showExit:s})
  }, Rg:function(a) {
    6 !== a && (gls2.core.ie = a);
    this.$c()
  }, Vg:function() {
    T(this, "SE VOLUME", "012345".split(""), this.Sg, {defaultValue:gls2.core.xd, showExit:s})
  }, Sg:function(a) {
    6 !== a && (gls2.core.xd = a);
    this.$c()
  }, ql:function() {
    T(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.nk, {defaultValue:gls2.core.Th, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, nk:function(a) {
    5 !== a && (gls2.core.Th = a);
    this.$c()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.cj = tm.createClass({superClass:gls2.Scene, mode:0, types:l, yf:l, dc:l, ec:l, fc:l, Lg:l, Jg:l, type:0, style:0, he:s, sf:s, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Bk();
    this.yf = this.Ak();
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
    this.yf.visible = s;
    this.Og(-1, k);
    this.dc.update();
    this.ec.update();
    this.fc.update();
    gls2.sa("voSelectShip");
    gls2.Hb("bgmShipSelect", k)
  }, Bk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Lg = tm.display.Label("Type-A").setPosition(240, 150);
    this.Lg.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.Mg = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.Mg.update = function() {
      this.Mg.text = b[this.type]
    }.bind(this);
    this.Mg.addChildTo(a);
    var d = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.dc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.ec = tm.display.AnimationSprite(d, 64, 64).gotoAndPlay("typeB");
    this.fc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.dc.kb = 0;
    this.ec.kb = 1;
    this.fc.kb = 2;
    this.dc.setScale(3).setPosition(0, 320).addChildTo(a);
    this.ec.setPosition(0, 320).addChildTo(a);
    this.fc.setPosition(0, 320).addChildTo(a);
    this.dc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.kb / 3 * Math.PI)
    };
    this.ec.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.kb / 3 * Math.PI)
    };
    this.fc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.kb / 3 * Math.PI)
    };
    return a
  }, Ak:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Jg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.Jg.addChildTo(a);
    this.dd = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.yc = tm.app.Object2D();
    this.yc.addChildTo(this.dd);
    this.yc.update = function(a) {
      this.yc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.xa = [];
    this.xa[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.xa[0].update = function() {
      0 === this.type ? this.xa[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.xa[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.xa[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.xa[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.xa[1].update = function() {
      0 === this.type ? this.xa[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.xa[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.xa[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.xa[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.xa[2].update = function() {
      0 === this.type ? this.xa[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.xa[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.xa[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.xa[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.xa[3].update = function() {
      0 === this.type ? this.xa[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.xa[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.xa[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.dd.line = b(0, 0, 0, 130, 8);
    this.dd.line.addChildTo(this.dd);
    this.xa.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.yc)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.Kg = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.Kg.update = function() {
      this.Kg.text = f[this.style]
    }.bind(this);
    this.Kg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.yf.visible = s, !this.sf && a.keyboard.getKeyDown("left")) {
        this.Og(-1, s), gls2.sa("select")
      }else {
        if(!this.sf && a.keyboard.getKeyDown("right")) {
          this.Og(1, s), gls2.sa("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.sa("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.yf.visible = k, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.sa("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.sa("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.he = k, this.oi(), gls2.sa("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Pk(0 === ~~(a.frame / 60) % 2))
    }
  }, pl:function() {
    T(this, "AUTO BOMB", ["on", "off"], this.jk, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:k})
  }, jk:function(a) {
    2 !== a && (this.he = 0 === a, this.oi())
  }, oi:function() {
    T(this, "ARE YOU READY?", ["ok"], this.kk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:k})
  }, kk:function(a) {
    0 === a && this.Ek()
  }, Og:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.dc, this.ec, this.fc][this.type].remove().addChildTo(this.types);
    b ? (this.dc.kb -= a, this.dc.scaleX = 0 === this.type ? 5 : 1, this.dc.scaleY = 0 === this.type ? 5 : 1, this.ec.kb -= a, this.ec.scaleX = 1 === this.type ? 5 : 1, this.ec.scaleY = 1 === this.type ? 5 : 1, this.fc.kb -= a, this.fc.scaleX = 2 === this.type ? 5 : 1, this.fc.scaleY = 2 === this.type ? 5 : 1) : (this.sf = k, this.dc.tweener.clear().to({kb:this.dc.kb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.ec.tweener.clear().to({kb:this.ec.kb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.fc.tweener.clear().to({kb:this.fc.kb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.sf = s
    }.bind(this)));
    this.Lg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Ek:function() {
    gls2.core.ba.he = this.he;
    gls2.core.replaceScene(gls2.core.ba);
    gls2.core.ba.start(this.type, this.style);
    gls2.df()
  }, Pk:function(a) {
    this.Jg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.dd.line.nc = s, this.xa[0].line.nc = s, this.xa[1].line.nc = s, this.xa[2].line.nc = s, this.xa[3].line.nc = s) : (this.dd.line.nc = k, this.xa[0].line.nc = k, this.xa[1].line.nc = k, this.xa[2].line.nc = k, this.xa[3].line.nc = k);
    a ? (this.xa[0].visible = k, this.xa[1].visible = k, 1 === this.style ? (this.xa[2].visible = s, this.xa[3].visible = s) : (this.xa[2].visible = k, this.xa[3].visible = k), this.dd.line.lineWidth = 5) : (this.xa.each(function(a) {
      a.visible = s
    }), this.dd.line.lineWidth = 0 === this.style ? 10 : 25)
  }, td:E()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, nc:k, init:function(a, b, d, i, m) {
    this.superInit();
    this.angle = d - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = i;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = m
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    if(this.nc && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), d = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - d, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - d, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + d, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + d, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.ab = tm.createClass({superClass:gls2.Scene, ea:l, score:0, Pc:0, nb:0, Oa:0, ue:0, gb:0, Wc:0, Ib:0, Ia:l, ja:l, fd:3, wf:0, xf:0, Gc:0, bf:0, ve:0, rf:0, he:s, hc:0, pd:0, Jh:0, Qd:s, mf:s, Ec:0, Fc:0, Ka:s, jf:0, Pd:0, Ua:0, rd:0, hl:0, gl:0, hf:l, Wh:l, Wg:l, Cg:l, Ag:l, Bg:l, ug:l, di:l, Zb:l, Pb:l, ic:l, ne:s, fk:s, wj:0, Ud:l, init:function() {
  gls2.ab.ae !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.ab.ae = this;
  this.Pb = gls2.bj(this);
  this.Pb.Ab.addChildTo(this);
  this.ja = gls2.Ui().Ca;
  this.ja.addChildTo(this);
  this.hf = gls2.ab.Layer().addChildTo(this);
  this.Wh = gls2.ab.Layer().addChildTo(this);
  this.Cg = gls2.ab.Layer().addChildTo(this);
  this.Ag = gls2.ab.Layer().addChildTo(this);
  this.Wg = gls2.ab.Layer().addChildTo(this);
  this.Bg = gls2.ab.Layer().addChildTo(this);
  this.ug = gls2.ab.Layer().addChildTo(this);
  this.di = gls2.ab.rh(this).addChildTo(this);
  tm.Eb.gd.me.Hh = this;
  this.Zb = tm.app.Object2D();
  this.Zb.addChildTo(this);
  this.Zb.update = function(b) {
    this.rk(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Pb.clear()
  })
}, addChild:function(b) {
  b.ob ? this.Ag.addChild(b) : b instanceof gls2.Sa ? this.ug.addChild(b) : b instanceof gls2.ig ? this.hf.addChild(b) : b instanceof gls2.da ? b.Zc ? this.hf.addChild(b) : this.Cg.addChild(b) : b instanceof gls2.yh ? this.Wg.addChild(b) : b === this.Zb || b === this.ja || b instanceof gls2.ab.Layer || b instanceof gls2.ab.rh || b instanceof gls2.zh || b instanceof gls2.qh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(b)))
}, update:function(b) {
  this.xk(b.keyboard);
  this.Ia.update(b.frame);
  0 === b.frame % 2 && this.Pb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.Ge()) : b.keyboard.getKeyDown("space") ? this.xe(0) : b.keyboard.getKeyDown("p") && (this.dh().saveAsImage(), this.xe(0))
}, dh:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.ja.ja.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Pb.element, 0, 0);
  return b
}, rk:function(b) {
  this.ea.Ac === s && gls2.fa.erase();
  var a;
  a = [].concat(gls2.da.wc);
  for(var f = [].concat(gls2.Id.wc), d = f.length;f[--d] !== h;) {
    for(var i = a.length;a[--i] !== h;) {
      var m = a[i], q = f[d];
      if(!(0 >= m.ra || m.ib) && gls2.Collision.of(m, q)) {
        if(q.gf(1), q.remove(), m.sd(q.md)) {
          this.Gc += 1;
          this.Ka ? this.Cb(0) : this.Cb(0.005);
          this.Qg(m);
          break
        }
      }
    }
  }
  q = this.ea.Yb;
  if(this.ea.Wb) {
    a = [].concat(gls2.da.wc);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(i = a.length;a[--i] !== h;) {
      if(m = a[i], !(0 >= m.ra || m.ib) && gls2.Collision.of(m, q)) {
        q.zk(m.y + m.boundingHeightBottom);
        m.sd(q.md) ? (this.Gc += 1, this.Ka ? this.Cb(0) : this.Cb(0.01), this.Qg(m)) : (this.gb = Math.min(this.gb + 0.02, 1), this.Ka ? (this.Jd(0.01 * S[this.rd]), this.Cb(0)) : (this.Jd(0.01), this.Cb(0.001)));
        q.gf(2);
        break
      }
    }
    f = {x:this.ea.x, y:this.ea.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(gls2.da.wc);
    for(i = a.length;a[--i] !== h;) {
      if(m = a[i], !(0 >= m.ra || m.ib) && gls2.Collision.of(m, f)) {
        m.sd(q.md) ? (this.Gc += 1, this.Ka ? this.Cb(0.03) : this.Cb(0.015), this.Qg(m)) : (this.gb = Math.min(this.gb + 0.02, 1), this.Ka ? (this.Jd(0.01 * S[this.rd]), this.Cb(0.004)) : (this.Jd(0.01), this.Cb(0.002))), q.Qj(2, this.ea.x, this.ea.y - 30)
      }
    }
  }
  if(this.Qd) {
    gls2.fa.erase();
    a = [].concat(gls2.da.wc);
    for(i = a.length;a[--i] !== h;) {
      if(m = a[i], !(0 >= m.ra || m.ib) && m.Nb() && m.sd(2)) {
        this.ld(m.score), this.Gc += 1
      }
    }
    this.gb = this.Oa = 0
  }
  if(this.Ka) {
    a = [].concat(gls2.Id.wc);
    for(i = a.length;a[--i] !== h;) {
      if(q = a[i], !(0 >= q.ra)) {
        m = [].concat(gls2.Sa.wc);
        for(f = m.length;m[--f] !== h;) {
          d = m[f], d.visible !== s && (0 < q.ra && gls2.Collision.of(q, d)) && (d.ra -= 6 - this.Fc, 0 > d.ra && (d.za(), this.ld(10), this.Jd(1), this.$h(s, s, d.x, d.y, 1)), q.ra -= 1)
        }
      }
    }
  }
  this.ne ? gls2.fa.erase() : (this.Ka && (this.Pd -= 1, 0 >= this.Pd && this.af()), this.jf = Math.max(this.jf - 1, 0), this.gb -= 0.01, 0 >= this.gb && (this.gb = 0, this.Ka || 0 < this.Ua ? this.Wc = this.Oa = this.nb = 0 : (0 < this.Oa && (0 >= this.Wc && (this.Wc = 0.005 * this.Oa), this.nb = this.nb * (this.Oa - this.Wc) / this.Oa, this.Oa -= this.Wc), 0 >= this.Oa && (this.Wc = this.Oa = this.nb = 0))), this.mf && (this.score += 100), q = gls2.Sa.wc.length, b.fps = 500 < q ? Math.floor(60 * 
  gls2.ka.clamp(500 / q, 0.2, 1)) : 60)
}, Qg:function(b) {
  this.$h(b.Zc, this.Ka || 22500 > gls2.Qc(b, this.ea), b.x, b.y, b.star, b instanceof gls2.Cd);
  this.Jd(S[this.rd]);
  for(var a = this.nb, f = ~~(this.Oa / 1E3) + 1, d = 0;d < f;d++) {
    a += b.score, this.ld(a)
  }
  this.nb += b.score * f
}, $h:function(b, a, f, d, i, m) {
  b = b ? gls2.fj : gls2.Bh;
  for(var q = 0;q < i;q++) {
    var w = b(a);
    w.setPosition(f, d);
    m && (w.ud = k)
  }
}, ik:function(b) {
  gls2.sa("star");
  b.fi ? (this.xf += 1, this.nb += 1E3, this.ld(1E3 + 0 * this.nb), this.Ka ? this.Cb(0) : this.Cb(0.01)) : (this.wf += 1, this.nb += 100, this.ld(100 + 0 * this.nb), this.Ka ? this.Cb(0) : this.Cb(0.001))
}, start:function(b, a) {
  this.Pb.Ld.zj().clear();
  this.Pc = this.score = 0;
  this.fd = 3;
  this.hc = this.pd = Q[a];
  this.Jh = R[a];
  this.Ua = this.Fc = this.Ec = 0;
  this.af();
  this.Qd = s;
  this.wj = this.ve = this.rf = 0;
  this.ea = gls2.yh(this, b, a);
  this.bh(0);
  I.Ta.Xb.$ex = 2 !== a ? 0 : 1;
  this.zi(0);
  gls2.sa("voLetsGo");
  this.Gk();
  0 === b ? gls2.core.va("launch0") : 1 === b ? gls2.core.va("launch1") : 2 === b && gls2.core.va("launch2")
}, zi:function(b) {
  this.yb("3...2...1...");
  this.ea.parent !== l && this.ea.remove();
  gls2.da.ke();
  gls2.Id.ke();
  gls2.fa.ke();
  this.hf.removeChildren();
  this.Ag.removeChildren();
  this.Bg.removeChildren();
  this.Wg.removeChildren();
  this.ug.removeChildren();
  this.Zb.removeChildren();
  this.Gc = this.bf = this.xf = this.wf = this.ue = this.gb = this.Oa = this.nb = 0;
  this.ic = l;
  this.fk = this.ne = s;
  this.ve = 0;
  this.Pb.Ab.qe = 0;
  this.Fc = this.Pb.Ab.Cc = 0;
  this.Ib = b;
  this.Ia = gls2.jd.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.Ng()
  }.bind(this));
  this.ja.tweener.clear()
}, Ng:function() {
  this.yb("Let's go!");
  this.ea.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.ea.Yb.addChildTo(this);
  this.ea.Ac = s;
  this.ea.ib = k;
  this.ea.Od = s;
  this.ea.Wb = s;
  this.ea.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.ge = this.Ac = k
  }.bind(this.ea)).wait(3E3).call(function() {
    this.ib = s
  }.bind(this.ea))
}, jl:function() {
  gls2.ma.cf(this.ea.x, this.ea.y, this);
  this.yb("I was shot down.");
  this.ea.Ac = s;
  this.ea.remove();
  this.fd -= 1;
  this.Ua = this.Wc = this.Oa = this.gb = 0;
  this.ve += 1;
  this.rf += 1;
  this.Fc = gls2.ka.clamp(this.Fc - 3, 0, 1);
  this.qg(-0.03);
  0 < this.fd ? this.tweener.clear().wait(1E3).call(function() {
    this.hc = this.pd = Math.min(this.pd + 1, this.Jh);
    this.Ng()
  }.bind(this)) : (this.Ud = this.dh().canvas.toDataURL("image/png"), gls2.core.re === this.score && (gls2.core.Yj = this.Ud), this.tweener.clear().wait(2E3).call(function() {
    this.Pc < gls2.core.Lh() ? this.uk() : this.Zh()
  }.bind(this)))
}, bh:function(b) {
  I.Ta.Xb.$rank = gls2.ka.clamp(b, 0, 0.5)
}, qg:function(b) {
  this.bh(I.Ta.Xb.$rank + b)
}, Pj:function() {
  this.yb("System rebooted.", k);
  this.score = 0;
  this.Pc += 1;
  this.fd = 3;
  this.hc = this.pd = Q[this.ea.style];
  this.Fc = 0;
  this.bh(0);
  this.Ng()
}, Aj:function() {
  gls2.Hb("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.Zb);
  b.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.dh()));
    b.remove()
  }.bind(this))
}, Zh:function() {
  gls2.Ge();
  this.app.replaceScene(gls2.ph())
}, dl:E(), ld:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < N.length;b++) {
    var f = N[b];
    a < f && f <= this.score && (this.Uh(), 0 == b && this.app.va("extend1"), 1 == b && this.app.va("extend2"))
  }
  gls2.core.re = Math.max(gls2.core.re, this.score);
  gls2.core.re === this.score && (gls2.core.Zj = this.Ib, gls2.core.ak = this.ea.type, gls2.core.$j = this.ea.style, gls2.core.Xj = this.Pc);
  1E8 <= this.score && gls2.core.va("score100M");
  2E9 <= this.score && gls2.core.va("score2G");
  2E10 <= this.score && gls2.core.va("score20G");
  5E10 <= this.score && gls2.core.va("score50G");
  1E11 <= this.score && gls2.core.va("score100G");
  1E12 <= this.score && gls2.core.va("score1T")
}, Jd:function(b) {
  this.Wc = 0;
  this.Oa += b;
  this.ue = Math.max(this.ue, this.Oa);
  1 <= b && (this.gb = 1);
  100 <= this.Oa && this.app.va("combo100");
  1E3 <= this.Oa && this.app.va("combo1000");
  1E4 <= this.Oa && this.app.va("combo10000");
  1E5 <= this.Oa && this.app.va("combo100000")
}, Cb:function(b) {
  if(10 !== this.Ua) {
    for(b *= 0.75;1 < b;) {
      gls2.Gf(this.ea).addChildTo(this), b -= 1, this.Ec = 0, this.Ua += 1, 1 === this.Ua ? (this.yb("HYPER SYSTEM, stand by.", k), gls2.sa("voHyperStandBy")) : (this.yb("HYPER SYSTEM, ready.", k), gls2.sa("voHyperReady"))
    }
    this.Ec = gls2.ka.clamp(this.Ec + b, 0, 1);
    1 <= this.Ec && (gls2.Gf(this.ea).addChildTo(this), this.Ua += 1, this.Ec -= 1, 1 === this.Ua ? (this.yb("HYPER SYSTEM, stand by.", k), gls2.sa("voHyperStandBy")) : (this.yb("HYPER SYSTEM, ready.", k), gls2.sa("voHyperReady")))
  }
}, Fk:function() {
  0.5 > Math.random() ? (this.yb("HYPER SYSTEM start!!", k), gls2.sa("voHyperStart0")) : (this.yb("start counting to system limit.", k), gls2.sa("voHyperStart1"));
  this.Fc = gls2.ka.clamp(this.Fc + 1, 0, 5);
  this.qg(0.01 * this.Ua);
  I.Ta.Xb.$hyperOff = 0.5 * (2 !== this.ea.style ? 1 : 0.5);
  this.Pd = 800;
  this.jf = 200;
  this.ea.kf.Vd(this.Ua);
  this.ea.Yb.Vd(this.Ua);
  this.ea.Md = this.ea.kf;
  gls2.ma.Rj(this.ea.x, this.ea.y, this);
  this.Ka = k;
  this.rd = this.Ua;
  this.Ec = this.Ua = 0;
  gls2.fa.erase(k, k);
  this.app.va("hyper1");
  10 == this.rd && this.app.va("hyper10")
}, af:function() {
  this.Ka !== s && (this.Ka = s, gls2.Gf(this.ea, k).addChildTo(this), this.ea.Md = this.ea.ni, I.Ta.Xb.$hyperOff = 1 * (2 !== this.ea.style ? 1 : 0.5), this.ea.kf.Vd(0), this.ea.Yb.Vd(0), this.jf = 80, this.rd = this.Pd = 0, gls2.fa.erase())
}, uj:function() {
  gls2.sa("decision");
  gls2.sa("voGetBomb");
  this.hc = Math.min(this.hc + 1, this.pd);
  this.mf = this.hc === this.pd
}, Uh:function() {
  gls2.sa("voExtend");
  this.yb("extended.");
  this.fd += 1
}, yb:function(b, a) {
  this.Pb.Ld.vj(b, a)
}, xe:function(b) {
  T(this, "PAUSE", ["resume", "setting", "exit game"], this.qk, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:s})
}, qk:function(b) {
  switch(b) {
    case 1:
      this.$c();
      break;
    case 2:
      this.tk()
  }
}, $c:function() {
  T(this, "SETTING", ["bgm volume", "sound volume"], this.Tg, {defaultValue:this.pf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Tg:function(b) {
  3 !== b && (this.pf = b);
  switch(b) {
    case 0:
      this.Ug();
      break;
    case 1:
      this.Vg();
      break;
    default:
      this.xe()
  }
}, tk:function() {
  T(this, "REARY?", ["yes", "no"], this.lk, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:s})
}, lk:function(b) {
  0 === b ? (gls2.Ge(), this.app.replaceScene(gls2.TitleScene())) : this.xe(1)
}, Ug:function() {
  T(this, "BGM VOLUME", "012345".split(""), this.Rg, {defaultValue:gls2.core.ie, onCursorMove:function(b) {
    gls2.cb !== l && 6 !== b && (gls2.cb.volume = 0.1 * b)
  }, showExit:s})
}, Rg:function(b) {
  6 !== b && (gls2.core.ie = b);
  this.$c(1)
}, Vg:function() {
  T(this, "SE VOLUME", "012345".split(""), this.Sg, {defaultValue:gls2.core.xd, showExit:s})
}, Sg:function(b) {
  6 !== b && (gls2.core.xd = b);
  this.$c(1)
}, uk:function() {
  T(this, "CONTINUE? (" + this.Pc + "/" + gls2.core.Lh() + ")", ["yes", "no"], this.mk, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:s})
}, mk:function(b) {
  switch(b) {
    case 0:
      this.Pj();
      break;
    case 1:
      this.Zh()
  }
}, td:E(), Ck:function() {
  this.Pb.Ab.tweener.clear().to({qe:-480}, 1600, "easeInBack").to({Cc:30}, 800, "easeInOutBack")
}, Wj:function() {
  this.Pb.Ab.tweener.clear().to({Cc:0}, 800, "easeInOutBack").to({qe:0}, 1600, "easeOutBack")
}, Ce:l, De:0, te:l, Ne:0, Gk:function() {
  if(1 === this.Ne) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== h) {
      this.te = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.Ce = [];
    this.De = 0
  }else {
    if(2 === this.Ne && (console.log("replay start"), localStorage.getItem("recCount") !== h)) {
      this.te = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var f = localStorage.getItem("rec" + a).split(","), d = 0;d < f.length;d++) {
          this.te.push(f[d])
        }
      }
    }
  }
}, xk:function(b) {
  if(1 === this.Ne) {
    1E3 < this.Ce.length && (console.log("save"), localStorage.setItem("rec" + this.De, this.Ce), localStorage.setItem("recCount", this.De), this.Ce = [], this.De += 1), this.Ce.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Ne && this.te) {
      var a = this.te.shift();
      a !== h && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : s
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : s
      })
    }
  }
}});
gls2.ab.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.ab.rh = tm.createClass({superClass:tm.display.CanvasElement, ba:l, frame:0, init:function(b) {
  this.superInit();
  this.ba = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.Dj(b);
  this.Ej(b)
}, Dj:function(b) {
  if(0 < this.ba.gb) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ba.gb) + "," + ~~Math.min(255, 512 * this.ba.gb) + ",0.5)";
    var a = 500 * this.ba.gb;
    b.fillRect(465, 635 - a, 10, a)
  }
}, Ej:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  10 === this.Ua ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ba.Ec && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ba.Ec, 9))
}});
gls2.ab.ae = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ba:l, Ud:l, Zb:l, values:l, labels:l, lf:l, ti:[1E3, 2E3, 4E3, 1E4, 1], ei:l, Zg:l, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ba = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ba.wf, this.ba.xf, ~~(100 * (this.ba.Gc / this.ba.bf)), this.ba.ue, 0 === this.ba.ve ? 2E7 : 0];
  this.lf = this.values.map(function(a) {
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
  this.ei = tm.display.Label(Math.floor(this.ba.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.Zg = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.Zg.visible = s;
  this.Ud = a;
  for(var d = [], f = 0;12 > f;f++) {
    d[f] = [];
    for(var i = 0;16 > i;i++) {
      d[f][i] = {$g:0, cd:0, Sc:gls2.ka.randf(-2, 2), oc:gls2.ka.randf(1, 4)}
    }
  }
  this.Zb = tm.app.Object2D();
  this.Zb.draw = function(a) {
    a.save();
    for(var b = k, f = 0;f < d.length;f++) {
      for(var i = 0;i < d[f].length;i++) {
        var n = d[f][i];
        640 > 40 * i + n.cd && (a.drawImage(this.Ud.element, 40 * f, 40 * i, 40, 40, 40 * f + n.$g, 40 * i + n.cd, 40, 40), n.$g += n.Sc, n.cd += n.oc, n.oc += 0.3, b = s)
      }
    }
    this.wait = 60;
    b && this.Zb.remove();
    a.restore()
  }.bind(this);
  this.Zb.addChildTo(this);
  this.on("enter", function() {
    0 === this.ba.rf && 0 === this.ba.Pc && (0 === this.ba.Ib ? gls2.core.va("nomiss1") : 1 === this.ba.Ib ? gls2.core.va("nomiss2") : 2 === this.ba.Ib ? gls2.core.va("nomiss3") : 3 === this.ba.Ib ? gls2.core.va("nomiss4") : 4 === this.ba.Ib && gls2.core.va("nomiss5"))
  });
  this.on("exit", function() {
    gls2.df()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.sa("star"), this.values[a] <= this.lf[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ba.ld(this.values[a] * this.ti[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ba.ld(this.lf[a] * this.ti[a]), this.values[a] -= this.lf[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.ei.text = Math.floor(this.ba.score)
    }else {
      if(this.Zg.visible = k, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.sa("decision"), 5 == this.ba.Ib + 1 ? b.replaceScene(gls2.Qi()) : (this.ba.zi(this.ba.Ib + 1), b.replaceScene(this.ba))
      }
    }
    this.frame += 1
  }
}, td:E()});
gls2.ph = tm.createClass({superClass:gls2.Scene, oa:0, qi:s, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = k;
  this.on("enter", function() {
    gls2.Hb("gameover")
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.oa && !this.qi) && this.tf();
  this.oa += 1
}, td:function(b) {
  b.clearColor("black")
}, Ae:s, wait:s, ah:l, tf:function() {
  if(!this.wait) {
    this.qi = k;
    var b = ["save score", "tweet result", "back to title"], a = ["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"];
    this.Ae && (b.shift(), a.shift());
    T(this, "GAME OVER", b, this.pk, {defaultValue:this.Ae ? 1 : 0, menuDescriptions:a, showExit:s})
  }
}, pk:function(b) {
  this.Ae && (b += 1);
  0 === b ? this.Ae || (this.wait = k, this.app.Yg(l, function(a, b, d) {
    this.wait = s;
    a ? this.vk(a) : b ? (this.Ae = k, this.ah = d, this.wk()) : this.tf()
  }.bind(this))) : 1 === b ? this.Nk() : this.app.replaceScene(gls2.TitleScene())
}, wk:function() {
  T(this, "SUCCESS!", ["ok"], function() {
    this.tf()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:s})
}, vk:function() {
  T(this, "ERROR!", ["ok"], function() {
    this.tf()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:s})
}, Nk:function() {
  var b = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({score:Math.floor(this.app.ba.score), stage:5 > this.app.ba.Ib ? "Stage" + (this.app.ba.Ib + 1) : "ALL", type:"ABC"[this.app.ba.ea.type], style:["S", "L", "EX"][this.app.ba.ea.style], cont:this.app.ba.Pc}), b = tm.social.Twitter.createURL({type:"tweet", text:b, hashtags:"tmshooter", url:this.ah ? window.location.origin + "/ranking/" + this.ah : window.location.origin});
  window.open(b, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
(function() {
  var b = "TM-Shooter;2D 'DANMAKU' Shooter on HTML5;;MUSIC;Underworld (select)  by  delf;Feel the universe (stage1)  by  delf;Herod (boss)  by  \u6dbc\u3005;Re-Birth (clear)  by  delf;Remenber (stage2)  by  Ryo;THE NEW CHALLENGER freeVer. (stage3)  by  delf;Aegis (stage4)  by  \u5cf6\u767d;Ancien Ocean (stage5)  by  delf;\u84bc\u3044\u6708 (ending)  by  delf;;SOUND;kouichi_axis (\u9b54\u738b\u9b42);on_jin (\u97f3\u4eba);;GAME ENGINE (tmlib.js);phi_jp;;PROGRAM AND GRAPHICS;minimo(stage3);daishi_hmr;;special respect to...;DODONPACHI series by CAVE;PRECURE series by TOEI;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!".split(";");
  gls2.Qi = tm.createClass({superClass:gls2.Scene, ja:l, ea:l, labels:l, yi:s, speed:0, Vh:s, ji:l, init:function() {
    this.superInit();
    this.ji = tm.display.CanvasElement().addChildTo(this);
    this.ja = gls2.core.ba.ja;
    this.ja.addChildTo(this);
    this.ja.direction = 0.5 * Math.PI;
    this.ja.speed = 1;
    var a = this.ea = gls2.core.ba.ea;
    a.Ac = s;
    a.setPosition(240, 448);
    a.ba = this.ji;
    [].concat(a.children).forEach(function(b) {
      b != a.yc && b.remove()
    });
    a.addChildTo(this);
    var f = a.x;
    a.on("enterframe", function() {
      0.2 < a.x - f ? a.Va += 0.3 : -0.2 > a.x - f ? a.Va -= 0.3 : 0 < a.x - f ? a.Va += 0.11 : 0 > a.x - f && (a.Va -= 0.11);
      f = a.x
    });
    var d = function() {
      var b = gls2.ka.randf(0.8, 1.2);
      a.tweener.clear().to({x:gls2.ka.randf(48, 432), y:gls2.ka.randf(192, 512), scaleX:b, scaleY:b}, 6E3, "easeInOutQuad").call(d)
    }.bind(this);
    d();
    gls2.core.ba.Ib += 1;
    var i = this;
    this.labels = b.map(function(a, b) {
      return tm.display.Label(a, 16).setPosition(240, 960 + 64 * b).addChildTo(i).on("enterframe", function() {
        this.y -= i.speed;
        -192 > this.y && this.remove()
      })
    });
    tm.display.Label("dev7.jp", 24).setPosition(240, 960 + 64 * (b.length + 3)).addChildTo(this).on("enterframe", function() {
      320 < this.y && (this.y -= i.speed)
    });
    this.tweener.wait(2E3).call(function() {
      gls2.Hb("bgmEnding", k, k);
      this.yi = k
    }.bind(this))
  }, nl:function() {
    0 === gls2.core.ba.ea.type ? gls2.core.va("allclear0") : 1 === gls2.core.ba.ea.type ? gls2.core.va("allclear1") : 2 === gls2.core.ba.ea.type && gls2.core.va("allclear2")
  }, ol:function() {
    this.ja.addChildTo(gls2.core.ba)
  }, update:function(a) {
    a.keyboard.getKey("z") || a.keyboard.getKey("x") || a.keyboard.getKey("c") || this.yi && gls2.cb && gls2.cb.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(a) {
      return!!a.parent
    }) ? this.speed = 8 : this.Dk() : this.speed = 0.5
  }, Dk:function() {
    this.Vh || (this.Vh = k, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 5E3).call(function() {
      gls2.Ge();
      this.app.replaceScene(gls2.ph())
    }.bind(this)), this.ja.tweener.clear().to({speed:9}, 2E3), this.ea.tweener.clear().wait(2E3).to({y:-192}, 2E3, "easeInQuad"))
  }, td:E()})
})();
(function() {
  gls2.da = tm.createClass({superClass:tm.display.CanvasElement, name:l, ea:l, ba:l, Ia:l, ra:0, Yc:0, score:0, Zc:s, erase:s, star:1, ek:s, Mb:k, Qa:s, frame:0, ib:s, zf:l, direction:0, speed:0, ga:l, init:function(a, f, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Qa = s;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.Mb = k;
    this.ba = a;
    this.ea = a.ea;
    this.score = 100;
    this.erase = s;
    this.tj(d);
    f.setup(this);
    this.altitude = this.Zc ? 1 : 10;
    this.zf = {x:0, y:0};
    this.ib = s
  }, Sd:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, ll:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Qa === s && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Qa = k, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Zc && (this.x += this.ba.ja.Da, this.y += this.ba.ja.Ea);
    this.Qa && (this.frame += 1);
    this.zf.x = this.x - a;
    this.zf.y = this.y - b
  }, sd:function(a) {
    if(!this.Qa) {
      return s
    }
    this.ra -= a;
    if(0 >= this.ra) {
      return a = gls2.ka.randf(0, 5), 2 > a ? this.ba.yb("enemy destroy.") : 4 > a ? this.ba.yb(this.name + " destroy.") : this.ba.yb("ETR reaction gone."), this.erase && gls2.fa.erase(k, this.ba.Ka, this instanceof gls2.Cd), this.dispatchEvent(tm.event.Event("destroy")), this.za(), "yukishiro" === this.name ? gls2.core.va("mboss1") : "mishou" === this.name ? gls2.core.va("mboss2") : "higashi" === this.name ? gls2.core.va("mboss3") : "hishikawa" === this.name ? gls2.core.va("mboss4") : "minamino" === 
      this.name ? gls2.core.va("mboss5") : "misumi" === this.name ? gls2.core.va("boss1") : "hyuga" === this.name ? gls2.core.va("boss2") : "momozono" === this.name ? gls2.core.va("boss3") : "aida" === this.name ? gls2.core.va("boss4") : "hojo" === this.name && gls2.core.va("boss5"), k
    }
    40 > this.ra && this.La();
    return s
  }, za:function() {
    gls2.ma.cf(this.x, this.y, this.ba, this.zf);
    this.remove()
  }, Nb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, sk:function() {
    return this.Mb
  }, La:E(), tj:function(a) {
    this.name = a;
    a = gls2.da.Ni[a];
    this.ra = this.Yc = a[0];
    this.score = a[1];
    this.Zc = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== h && (this.boundingRadius = a[5].radius);
    a[5].width !== h && (this.boundingWidth = a[5].width);
    a[5].height !== h && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== h && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== h && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== h && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== h && (this.boundingHeightBottom = a[5].heightBottom)
  }, Bc:function() {
    this.remove();
    this.ba.Wh.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ma.cf(this.x + gls2.ka.rand(-100, 100), this.y + gls2.ka.rand(-40, 40), this.ba, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ma.pe(this.x, this.y, this.ba);
      this.remove()
    }.bind(this))
  }, We:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ma.cf(this.x + gls2.ka.rand(-100, 100), this.y + gls2.ka.rand(-40, 40), this.ba, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ma.pe(this.x, this.y, this.ba);
      this.remove()
    }.bind(this))
  }});
  gls2.da.ke = function() {
    for(var a = [].concat(b), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var b = gls2.da.wc = []
})();
gls2.Cd = tm.createClass({superClass:gls2.da, ek:k, Yc:0, vf:l, init:function(b, a, f) {
  this.vf = a;
  this.superInit(b, this.vf[0], f);
  this.Yc = this.ra;
  this.addEventListener("added", function() {
    this.ba.ic = this;
    this.ba.Ck();
    this.tweener.wait(1E3).call(function() {
      this.ba.ne = s
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ba.ic = l;
    this.ba.Wj();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ba.Aj()
    }.bind(this));
    a.addChildTo(this.ba.Zb)
  })
}, sd:function(b) {
  var a = this.ra;
  if(gls2.da.prototype.sd.call(this, b)) {
    return this.ba.ne = k, this.ba.ea.ge = s, gls2.df(), k
  }
  this.ra <= 0.55 * this.Yc && 0.55 * this.Yc < a ? (gls2.aa.ze(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ma.hb(this.x, this.y, this.ba), gls2.fa.erase(k, this.ba.Ka), this.vf[1].setup(this)) : this.ra <= 0.1 * this.Yc && 0.1 * this.Yc < a && (gls2.aa.ze(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ma.hb(this.x, this.y, this.ba), gls2.fa.erase(k, this.ba.Ka), this.vf[2].setup(this), gls2.sa("voJacms"))
}});
(function() {
  gls2.da.Ni = {kujo:[2, 300, s, s, 1, {radius:24}], kiryu:[3, 400, s, s, 1, {radius:24}], natsuki:[5, 900, k, s, 1, {radius:24}], kise:[50, 15E3, k, s, 1, {radius:24}], yamabuki:[100, 15E3, k, s, 1, {width:140, height:70}], hanasaki:[150, 2E5, k, k, 10, {radius:40}], myodoin:[50, 15E3, k, s, 1, {radius:40}], kenzaki:[200, 3E5, k, k, 10, {width:100, height:40}], minazuki:[300, 3E5, k, k, 10, {width:100, height:40}], tsukikage:[8, 1E3, s, s, 5, {width:100, height:20}], kasugano:[6, 1E3, s, s, 1, {radius:24}], 
  kurokawa:[35, 5E3, s, s, 5, {width:100, height:20}], mimino:[35, 5E3, s, s, 5, {width:100, height:20}], shirabe:[35, 5E3, s, s, 5, {width:100, height:20}], akimoto:[250, 3E5, s, k, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, s, k, 20, {width:180, heightBottom:40, heightTop:120}], aono:[300, 3E5, s, k, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, s, k, 20, {width:240, height:80}], misumi:[4E3, 2E6, s, k, 0, {width:240, height:80}], mishou:[1E3, 1E6, 
  s, k, 20, {width:300, height:80}], higashi:[1E3, 12E5, s, k, 20, {width:256, height:128}], momozono:[6E3, 35E5, s, k, 0, {width:256, height:128}], hyuga:[6E3, 3E6, s, k, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, s, k, 20, {radius:130}], aida:[8E3, 4E6, s, k, 0, {width:370, heightBottom:5, heightTop:60}], minamino:[1500, 5E6, k, k, 30, {width:25, heightTop:375, heightBottom:-325}], rery:[250, 2E3, k, s, 5, {radius:24}], fary:[200, 2E3, k, s, 5, {radius:24}], sory:[350, 2E3, k, s, 5, {radius:24}], 
  lary:[300, 2E3, k, k, 5, {radius:24}], shiry:[250, 2E3, k, k, 5, {radius:24}], dodory:[120, 2E3, k, s, 5, {radius:24}], erika:[30, 500, s, s, 1, {width:24, height:48}], hino:[20, 500, s, s, 1, {width:24, height:48}], hoshizora_y:[100, 2E4, s, k, 30, {width:128, height:64}], hoshizora_t:[100, 2E4, s, k, 30, {width:128, height:64}], yotsuba:[300, 1E5, s, k, 30, {width:64, height:64}], yotsubaLeaf:[100, 3E4, s, s, 10, {width:64, height:64}], midorikawa:[5, 1E3, s, s, 1, {width:64, height:64}], aoki:[5, 
  1200, s, s, 1, {width:64, height:64}], madoka:[250, 15E3, s, k, 5, {width:256, height:64}]};
  gls2.da.ha = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "kujo");
    this.ca = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.da.prototype.update.call(this, a);
    this.scaleX = this.x < this.ea.x ? -1 : 1
  }, draw:function(a) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.da.Aa = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "kiryu");
    this.ca = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.da.prototype.update.call(this, a);
    this.scaleX = this.x < this.ea.x ? -1 : 1
  }, draw:function(a) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.da.la = tm.createClass({superClass:gls2.da, ng:l, og:l, init:function(a, f) {
    this.superInit(a, f, "natsuki");
    this.ng = b("tex_tank1", 64, 64);
    this.og = b("tex_tank1", 64, 64);
    this.nd = this.nd || 0;
    this.zc = this.zc || 0
  }, update:function(a) {
    gls2.da.prototype.update.call(this, a);
    for(a = this.nd;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.zc;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.ng.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.og.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.ng.draw(a);
    this.og.draw(a)
  }, za:function() {
    gls2.ma.Ij(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.mh = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "yamabuki");
    this.ca = b("tex2", 256, 128).setFrameIndex(7)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.Tb = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "tsukikage");
    this.ca = b("tex1", 64, 64).setFrameIndex(23)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.eb = tm.createClass({superClass:gls2.da, ca:l, tg:l, init:function(a, f) {
    this.superInit(a, f, "kasugano");
    this.ca = b("tex5", 64, 64).setFrameIndex(1);
    this.xc = gls2.Wa(80, 1, 0.8);
    this.tg = tm.geom.Vector2()
  }, update:function(a) {
    gls2.da.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && this.xc.clone().setPosition(this.x, this.y).addChildTo(this.ba);
    this.rotation = tm.geom.Vector2.sub(this.position, this.tg).toAngle() * gls2.ka.RAD_TO_DEG - 90;
    this.tg.set(this.x, this.y)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.Tc = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "kurokawa");
    this.ca = b("tex1", 128, 128).setFrameIndex(1)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.rc = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "mimino");
    this.ca = b("tex1", 128, 128).setFrameIndex(1)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.pb = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "shirabe");
    this.ca = b("tex5", 128, 128).setFrameIndex(4)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.Ub = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "akimoto");
    this.ca = b("tex1", 256, 128).setFrameIndex(1)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.Bc()
  }});
  gls2.da.$d = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "aono");
    this.ca = b("tex1", 256, 128);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 128;
    this.setScale(1.2);
    this.Kb = gls2.Wa(70, 1, 0.97)
  }, update:function(a) {
    gls2.da.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Kb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ba), this.Kb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ba))
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.Bc()
  }});
  gls2.da.Hd = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "yumehara");
    this.ca = b("tex1", 256, 256);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 256;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 256
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.Bc()
  }});
  gls2.da.Na = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "kise");
    this.ca = b("tex1", 64, 128).setFrameIndex(14)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.Pe = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "hanasaki");
    this.ca = b("tex1", 64, 128).setFrameIndex(14)
  }, La:E(), za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.Kf = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "myodoin");
    this.ca = b("tex5", 64, 128).setFrameIndex(0)
  }, La:E(), za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.pc = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "kenzaki");
    this.ca = b("tex1", 128, 256);
    this.ca.srcRect.x = 0;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 128;
    this.ca.srcRect.height = 256
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.Ef = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "minazuki");
    this.ca = b("tex5", 128, 256);
    this.ca.setFrameIndex(1);
    this.setScale(1.2)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.da.Ja = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "hino");
    this.ca = b("tex4", 64, 32).setFrameIndex(0)
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.qa = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "midorikawa");
    this.ca = b("tex4", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.da.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.zb = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "aoki");
    this.ca = b("tex4", 64, 64).setFrameIndex(1)
  }, update:function(a) {
    gls2.da.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, Sd:function() {
    240 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.Ik = this.y + 192;
    this.cd = this.y
  }});
  gls2.da.ee = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "madoka");
    this.ca = b("tex4", 256, 128).setFrameIndex(3)
  }, update:function(a) {
    gls2.da.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.wd = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "hoshizora_y");
    this.ca = b("tex4", 256, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.da.prototype.update.call(this, a);
    if(this.Qa === s && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Qa = k, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.pe(this.x, this.y, this.ba);
    this.Bc()
  }, Sd:function() {
    480 < this.x && (this.velocityX *= -1, this.ca.scaleX = -1)
  }, Nb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.da.vd = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "hoshizora_t");
    this.ca = b("tex4", 64, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.da.prototype.update.call(this, a);
    if(this.Qa === s && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Qa = k, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.pe(this.x, this.y, this.ba);
    this.Bc()
  }, Sd:function() {
    240 < this.x && (this.velocityX *= -1)
  }, Nb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.da.Af = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "yotsuba");
    this.ca = b("tex4", 128, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.pe(this.x, this.y, this.ba);
    this.Bc();
    this.ba.Qd || gls2.Ri(this.x, this.y, this.ea).addChildTo(this.parent);
    for(var a = 0;4 > a;a++) {
      this.Rc[a] && this.Rc[a].za()
    }
    delete this.Rc;
    this.remove()
  }, Sd:function() {
    this.Rc = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Rc[a] = this.Ia.Ra({fl:gls2.da.Bf, vl:gls2.aa.Bf, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Rc[a].dir = b;
      this.Rc[a].zg = this;
      this.Rc[a].hk = a;
      this.Rc[a].distance = 64
    }
    gls2.da.prototype.Sd.call(this);
    return this
  }});
  gls2.da.Bf = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "yotsubaLeaf");
    this.ca = b("yotsubaLeaf", 64, 64).setFrameIndex(0)
  }, update:function(a) {
    gls2.da.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.zg.Rc[this.hk] = l;
    this.remove()
  }});
  gls2.da.Zd = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "erika");
    this.ca = b("tex3", 64, 128);
    this.ca.setFrameIndex(8)
  }, La:E(), draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    gls2.Li(this.x, this.y, this.ea).addChildTo(this.parent);
    this.remove()
  }});
  gls2.da.If = tm.createClass({superClass:gls2.da, ca:l, init:function(a, f) {
    this.superInit(a, f, "yukishiro");
    this.ca = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.Wf = tm.createClass({superClass:gls2.Cd, ca:l, init:function(a, f) {
    this.superInit(a, f, "misumi");
    this.ca = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.We()
  }});
  gls2.da.Sf = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "mishou");
    this.ca = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Kb = gls2.Wa(80, 1, 0.9);
    this.xc = gls2.Wa(256, 1, 0.9)
  }, update:function(a) {
    gls2.da.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Kb.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba), this.Kb.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba), this.xc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba))
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.aj = tm.createClass({superClass:gls2.Cd, init:function(a, f) {
    this.superInit(a, f, "hyuga");
    this.ca = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.We()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.gg = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "higashi");
    this.ca = b("tex4", 256, 128).setFrameIndex(2);
    this.blendMode = "lighter";
    this.setScale(1.5)
  }, La:E(), za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.Xi = tm.createClass({superClass:gls2.Cd, init:function(a, f) {
    this.superInit(a, f, "momozono");
    this.ca = b("tex4", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, La:E(), za:function() {
    this.We()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.cg = tm.createClass({superClass:gls2.da, init:function(a, f) {
    this.superInit(a, f, "hishikawa");
    this.ca = b("tex2", 256, 256).setFrameIndex(2);
    this.ca.setScale(2);
    this.Kb = gls2.Wa(60, 1, 0.95);
    this.xc = gls2.Wa(500, 1, 0.8)
  }, update:function(a) {
    gls2.da.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && (this.Kb.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Kb.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.xc.clone().setPosition(this.x, this.y).addChildTo(this.ba))
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.Yi = tm.createClass({superClass:gls2.Cd, init:function(a, f) {
    this.superInit(a, f, "aida");
    this.ca = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Kb = gls2.Wa(60, 1, 0.95);
    this.xc = gls2.Wa(500, 1, 0.8)
  }, update:function(a) {
    gls2.da.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && (this.Kb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Kb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Kb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Kb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.xc.clone().setPosition(this.x, this.y).addChildTo(this.ba))
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.We()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.Wi = tm.createClass({superClass:gls2.da, je:l, Mh:[{x:-60, y:-426}, {x:60, y:-426}, {x:-72, y:-72}, {x:72, y:-72}, {x:-72, y:-348}, {x:72, y:-348}, {x:-48, y:-264}, {x:48, y:-264}, {x:-48, y:108}, {x:48, y:108}, {x:-78, y:-168}, {x:78, y:-168}, {x:-96, y:-228}, {x:96, y:-228}, {x:0, y:-336}, {x:0, y:-168}, {x:-120, y:144}, {x:120, y:144}, {x:-60, y:168}, {x:60, y:168}], init:function(a, f) {
    this.superInit(a, f, "minamino");
    this.altitude = 10;
    this.ib = k;
    this.ca = b("tex5", 256, 512).setFrameIndex(1);
    this.setScale(2.16);
    this.je = [];
    this.on("launch", function() {
      Array.prototype.push.apply(this.je, [this.Ia.Ra({hard:gls2.da.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jb, soft:gls2.aa.Jb(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jb, soft:gls2.aa.Jb(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jb, soft:gls2.aa.Jb(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jb, soft:gls2.aa.Jb(), 
      x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jb, soft:gls2.aa.Jb(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jb, soft:gls2.aa.Jb(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Of, soft:gls2.aa.Of(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.hg, soft:gls2.aa.hg(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jc, 
      soft:gls2.aa.Jc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jc, soft:gls2.aa.Jc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jc, soft:gls2.aa.Jc(), x:0, y:0}), this.Ia.Ra({hard:gls2.da.Jc, soft:gls2.aa.Jc(), x:0, y:0})])
    })
  }, update:function() {
    this.je.forEach(function(a, b) {
      a.setPosition(this.x + this.Mh[b].x, this.y + this.Mh[b].y)
    }.bind(this))
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove();
    this.je.forEach(function(a) {
      a.parent && a.remove()
    }.bind(this))
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.Gd = tm.createClass({superClass:gls2.da, ca:l, Ai:0, init:function(a, f, d, i, m) {
    this.superInit(a, f, d);
    this.ca = b(i, 64, 64);
    this.Ai = m
  }, update:function(a) {
    gls2.da.prototype.update.apply(this, arguments);
    for(var b = tm.geom.Vector2.sub(this.ba.ea.position, this.position).toAngle() + 2 * Math.PI / 32;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.ca.setFrameIndex(16 * this.Ai + Math.floor(16 * (b / (2 * Math.PI))))
  }, La:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    gls2.ma.hb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.da.Mc = tm.createClass({superClass:gls2.da.Gd, init:function(a, b) {
    this.superInit(a, b, "rery", "kanade-cannon", 0);
    this.setScale(1.92)
  }});
  gls2.da.Jb = tm.createClass({superClass:gls2.da.Gd, init:function(a, b) {
    this.superInit(a, b, "rery", "kanade-cannon", 1);
    this.setScale(1.2)
  }});
  gls2.da.Nc = tm.createClass({superClass:gls2.da.Gd, init:function(a, b) {
    this.superInit(a, b, "sory", "yotsubaLeaf", 0);
    this.setScale(1.2)
  }});
  gls2.da.Of = tm.createClass({superClass:gls2.da.Gd, init:function(a, b) {
    this.superInit(a, b, "lary", "yotsubaLeaf", 0);
    this.setScale(1.44)
  }});
  gls2.da.hg = tm.createClass({superClass:gls2.da.Gd, init:function(a, b) {
    this.superInit(a, b, "shiry", "kanade-cannon", 1);
    this.setScale(1.68)
  }});
  gls2.da.Jc = tm.createClass({superClass:gls2.da.Gd, init:function(a, b) {
    this.superInit(a, b, "dodory", "tex_tank1", 1);
    this.setScale(1.44)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, gh:l, init:function(a, b, d) {
    this.superInit(a, b, d);
    "string" === typeof a && (this.gh = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, $a:function() {
    var a = this.srcRect.x, b = this.srcRect.y, d = this.srcRect.width, i = this.srcRect.height;
    this.image = this.gh + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = d;
    this.srcRect.height = i
  }, Za:function() {
    var a = this.srcRect.x, b = this.srcRect.y, d = this.srcRect.width, i = this.srcRect.height;
    this.image = this.gh;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = d;
    this.srcRect.height = i
  }})
})();
(function() {
  gls2.aa = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.aa.ze(this)
    })
  }});
  gls2.aa.ta = function(a, b) {
    if(gls2.fa[b] === h) {
      console.warn("Danmaku[" + b + "] is undefined!")
    }else {
      var f = gls2.fa[b].$e();
      a.on("enterframe", f);
      a.on("completeattack", function() {
        f.stop = k
      })
    }
  };
  gls2.aa.ze = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].nf && (a[b].stop = k)
      }
    }
  };
  gls2.aa.yk = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].nf && (a[b].stop = s)
      }
    }
  };
  gls2.aa.ha = tm.createClass({superClass:gls2.aa, pattern:l, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.Jk = b
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    var b = this.pattern, f = this.Jk;
    a.on("launch", function() {
      var a = gls2.ya.randf(640 * (f - 0.1), 640 * (f + 0.1));
      this.tweener.clear().wait(gls2.ya.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.aa.ta(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.aa.Lc = gls2.aa.ha("basic0-0", 0.2);
  gls2.aa.sb = gls2.aa.ha("basic0-0", 0.4);
  gls2.aa.Fd = gls2.aa.ha("basic0-0", 0.6);
  gls2.aa.rb = gls2.aa.ha("basic1-2", 0.2);
  gls2.aa.Kc = gls2.aa.ha("basic1-2", 0.4);
  gls2.aa.Ed = gls2.aa.ha("basic1-2", 0.6);
  gls2.aa.Aa = tm.createClass({superClass:gls2.aa, Gb:l, init:function(a, b) {
    this.superInit();
    this.Gb = a;
    this.delay = b
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Gb = this.Gb;
    a.tweener.wait(this.delay === h ? gls2.ka.rand(0, 1E3) : this.delay).call(function() {
      this.speed = 6;
      gls2.aa.ta(this, this.Gb);
      this.on("enterframe", function() {
        this.y < this.ea.y && this.Qa && (this.angle += Math.atan2(this.ea.y - this.y, this.ea.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ka.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.Nb() && this.Qa && this.remove();
        if(22500 > gls2.Qc(this, this.ea) || this.y > this.ea.y + 150) {
          this.Mb = s
        }
      })
    }.bind(a))
  }});
  gls2.aa.tb = gls2.aa.Aa("basic1-0");
  gls2.aa.Fa = function(a) {
    return gls2.aa.Aa("basic1-3", a * (2 * Math.random() + 1))
  };
  var b = tm.createClass({superClass:gls2.aa, init:function(a, b, f) {
    this.superInit();
    this.dk = a;
    this.ck = b;
    this.Kd = f
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.speed = this.dk;
    a.nd = this.ck;
    this.Kd && (a.Kd = [].concat(this.Kd));
    a.zc = 0;
    a.on("enter", function() {
      gls2.aa.ta(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.nd) * this.speed;
      this.y += Math.sin(this.nd) * this.speed;
      this.Qa && !this.Nb() && this.remove();
      for(this.zc = Math.atan2(this.ea.y - this.y, this.ea.x - this.x);0 > this.zc;) {
        this.zc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.zc;) {
        this.zc -= 2 * Math.PI
      }
      this.Mb = this.y < this.ea.y && 4E4 < gls2.Qc(this, this.ea);
      if(this.Kd) {
        for(var a = 0;a < this.Kd.length;a++) {
          var b = this.Kd[a];
          b.frame === this.frame && this.tweener.to({nd:b.dir !== h ? b.dir : this.nd, speed:b.speed !== h ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.aa.tc = b(1, 0.25 * Math.PI);
  gls2.aa.Wk = b(1, -1.75 * Math.PI);
  gls2.aa.be = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.aa.ua = b(1.6, 0.5 * Math.PI);
  gls2.aa.uc = b(1.6, -0.5 * Math.PI);
  gls2.aa.Ji = tm.createClass({superClass:gls2.aa, Ma:l, init:function(a) {
    this.superInit();
    this.Ma = a
  }, setup:function(a) {
    gls2.aa.ta(a, this.Ma);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.aa.nh = gls2.aa.Ji("bukky-4-0");
  b = tm.createClass({superClass:gls2.aa, Ma:l, Ph:s, init:function(a, b) {
    this.superInit();
    this.Ma = a;
    this.Ph = !!b
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Ma = this.Ma;
    a.on("enter", function() {
      gls2.aa.ta(this, this.Ma)
    });
    a.on("enterframe", function() {
      this.Qa && !this.Nb() && this.remove()
    });
    if(!this.Ph) {
      a.on("enterframe", function() {
        this.Mb = this.y < this.ea.y && 4E4 < gls2.Qc(this, this.ea)
      })
    }
  }});
  gls2.aa.Rb = b("basic3-0", s);
  gls2.aa.Sb = b("basic3-1", s);
  gls2.aa.qc = b("cannon2-0", k);
  gls2.aa.Df = b("cannon2-3", k);
  gls2.aa.Je = b("cannon3-0", k);
  gls2.aa.Ff = b("cannon5-0", k);
  var a = tm.createClass({superClass:gls2.aa, velocityY:0, Ma:l, delay:0, init:function(a, b, f) {
    this.superInit();
    this.velocityY = a;
    this.Ma = b;
    this.delay = f || 0
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ma];
    a.vi = s;
    a.tweener.clear().wait(this.delay).moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, this.ga[0]);
      this.vi = k
    }.bind(a));
    a.on("enterframe", function() {
      this.vi && (this.y += this.velocityY, 384 < this.y && gls2.aa.ze(this), this.Qa && !this.Nb() && this.remove(), this.Mb = this.y < this.ea.y)
    })
  }});
  gls2.aa.hd = a(0.5, "kurokawa-1");
  gls2.aa.Zi = a(0.5, "kurokawa-4");
  gls2.aa.sc = function(b) {
    return a(0.5, "milk-5", b)
  };
  gls2.aa.qb = tm.createClass({superClass:gls2.aa, Di:0, Fi:0, Ei:0, Gi:0, init:function(a, b, f, q) {
    this.superInit();
    this.Di = a;
    this.Fi = b;
    this.Ei = f;
    this.Gi = q
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.on("enterframe", function() {
      this.rotation = tm.geom.Vector2.sub(this.ba.ea.position, this.position).toAngle() * gls2.ka.RAD_TO_DEG - 90
    });
    var b = this;
    a.tweener.clear().to({x:b.Di, y:b.Fi}, 1400, "easeInOutQuad").call(function() {
      gls2.aa.ta(this, "ako-5")
    }.bind(a));
    a.one("completeattack", function() {
      this.tweener.clear().to({x:b.Ei, y:b.Gi}, 900, "easeInOutQuad").call(function() {
        gls2.aa.ta(this, "ako-5")
      }.bind(this));
      this.one("completeattack", function() {
        this.tweener.clear().to({y:832}, 1900, "easeInQuad")
      })
    })
  }});
  gls2.aa.kd = tm.createClass({superClass:gls2.aa, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.aa.ta(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.aa.ce = tm.createClass({superClass:gls2.aa, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.aa.ta(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.aa.eb = tm.createClass({superClass:gls2.aa, mi:0, direction:1, delay:0, init:function(a, b, f) {
    this.superInit();
    this.mi = a;
    this.direction = b;
    this.delay = f
  }, setup:function(a) {
    function b(a) {
      return f ? a : 1 - a
    }
    gls2.aa.prototype.setup.call(this, a);
    tm.app.Tweener(a).wait(this.delay).call(function() {
      gls2.aa.ta(this, "basic1-3")
    }.bind(a));
    var f = 1 == this.direction;
    switch(this.mi) {
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
  b = tm.createClass({superClass:gls2.aa, velocityY:0, Ma:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ma = b
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0]);
      gls2.ma.Sj(this.x, this.y, this.ba)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Qa && !this.Nb() && this.remove();
      this.Mb = this.y < this.ea.y
    })
  }});
  gls2.aa.Ja = b(0.5, "akane");
  gls2.aa.qa = tm.createClass({superClass:gls2.aa, Gb:l, init:function(a, b) {
    this.superInit();
    this.Gb = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Gb = this.Gb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.aa.ta(this, this.Gb);
      var a = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.ea.y && this.Qa && (this.angle += Math.atan2(this.ea.y - this.y, this.ea.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ka.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * a - 90;
        !this.Nb() && this.Qa && this.remove();
        if(22500 > gls2.Qc(this, this.ea) || this.y > this.ea.y + 150) {
          this.Mb = s
        }
      })
    }.bind(a))
  }});
  gls2.aa.vb = gls2.aa.qa(3, 1);
  gls2.aa.wb = gls2.aa.qa(6, 1);
  gls2.aa.xb = gls2.aa.qa(12, 1);
  gls2.aa.zb = tm.createClass({superClass:gls2.aa, Gb:l, init:function(a) {
    this.superInit();
    this.Gb = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Gb = this.Gb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.aa.ta(this, this.Gb);
      this.mc = 0;
      this.on("enterframe", function() {
        this.y < this.Ik && (this.cd += 1);
        this.x += this.speed;
        this.y = this.cd + 8 * Math.sin(this.mc);
        this.mc += 0.06
      })
    }.bind(a))
  }});
  gls2.aa.ac = gls2.aa.zb(1);
  gls2.aa.tl = gls2.aa.zb(2);
  gls2.aa.ee = a(0.5, "aguri");
  gls2.aa.wd = tm.createClass({superClass:gls2.aa, velocityX:0, Ma:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ma = "miyuki_y"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Qa && !this.Nb() && this.remove();
      this.Mb = this.y < this.ea.y
    })
  }});
  gls2.aa.wd = gls2.aa.wd(1);
  gls2.aa.vd = tm.createClass({superClass:gls2.aa, velocityX:0, Ma:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ma = "miyuki_t"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ma];
    a.ri = 0;
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      0 == this.ri ? (this.y += 0.5, 256 < this.y && this.ri++) : this.x += this.velocityX;
      this.Qa && !this.Nb() && this.remove()
    })
  }});
  gls2.aa.vd = gls2.aa.vd(0.5);
  b = tm.createClass({superClass:gls2.aa, velocityX:0, Ma:l, init:function() {
    this.superInit();
    this.Ma = "alice"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = 0.3;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Qa && !this.Nb() && this.remove();
      this.Mb = this.y < this.ea.y
    })
  }});
  gls2.aa.Af = b();
  b = tm.createClass({superClass:gls2.aa, Ma:l, init:function() {
    this.superInit();
    this.Ma = "aliceLeaf"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.zg.x, b = this.zg.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      a = ~~(180 * Math.atan2(b - this.y, a - this.x) / 3.14159);
      this.ca.setFrameIndex(~~(22.5 * ((0 > a ? a + 360 : a) / 360)) % 16, 64, 64);
      this.Qa && !this.Nb() && this.remove();
      this.Mb = this.y < this.ea.y;
      this.oa++
    })
  }});
  gls2.aa.Bf = b();
  gls2.aa.sh = a(0.3, "komachi-1");
  gls2.aa.th = a(0.5, "komachi-2");
  gls2.aa.uh = a(0.5, "komachi-3");
  gls2.aa.Nf = a(0.5, "komachi-4");
  gls2.aa.Mf = a(0.5, "komachi-5");
  gls2.aa.$d = tm.createClass({superClass:gls2.aa, xi:0, init:function(a) {
    this.superInit();
    this.xi = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    tm.app.Tweener(a).to({x:480 * this.xi}, 2800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, "mktn-5")
    }.bind(a));
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.aa.$f = a(0.1, "nozomi-4");
  gls2.aa.ag = a(0.3, "nozomi-5");
  gls2.aa.Zd = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.ta(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Mb = this.Qa
    })
  }});
  gls2.aa.Zd = gls2.aa.Zd();
  b = tm.createClass({superClass:gls2.aa, ga:l, qf:0, init:function(a, b) {
    this.superInit();
    this.ga = a;
    this.qf = b || 1500
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.qf = this.qf;
    a.Ya = s;
    a.bb = s;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ya = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Ya === s || 0 >= this.ra) && this.qf < this.frame && this.bb === s) {
        this.bb = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.bb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.If = b(["honoka-1"]);
  gls2.aa.Wf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Ya = s;
    a.bb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.bb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.$i = gls2.aa.Wf();
  gls2.aa.Xf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
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
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Xf = gls2.aa.Xf();
  gls2.aa.Yf = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.ra || gls2.aa.ta(this, "nagisa-3-1")
    })
  }});
  gls2.aa.Yf = gls2.aa.Yf();
  gls2.aa.Sf = b(["mai-1", "mai-2"]);
  gls2.aa.dg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Ya = s;
    a.bb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.bb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.dg = gls2.aa.dg();
  gls2.aa.eg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
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
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.eg = gls2.aa.eg();
  gls2.aa.fg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
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
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.fg = gls2.aa.fg();
  var f = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = "setsuna-1"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Ya = s;
    a.bb = s;
    a.fh = s;
    a.Kk = 0;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ya = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        this.fh = s;
        this.alpha = 1;
        this.ib = s;
        if(50 < gls2.ya.rand(0, 100) && 300 < this.frame || this.x - 64 < this.ea.x && this.ea.x < this.x + 64) {
          gls2.ma.Dg(this.x, this.y, this.ba, 8);
          this.fh = k;
          this.alpha = 0.3;
          this.ib = k;
          this.Kk = this.frame;
          var b = gls2.ya.rand(48, 432), d = gls2.ya.rand(128, 192);
          this.tweener.move(b, d, 250, "easeInOutQuad").call(a)
        }else {
          b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144), this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 2E3, "easeInOutQuad").call(a)
        }
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Ya === s || 0 >= this.ra)) {
        if(1500 < this.frame && this.bb === s && (this.bb = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))), this.fh && 0 == this.frame % 5) {
          var a = tm.display.Sprite("tex4", 256, 128).setFrameIndex(2);
          a.alpha = 0.3;
          a.x = this.x;
          a.y = this.y;
          a.setScale(1.5);
          a.update = function() {
            this.alpha -= 0.01;
            0 > this.alpha && this.remove()
          };
          this.ba.Cg.addChild(a)
        }
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.bb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.gg = f();
  gls2.aa.Pf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Ya = s;
    a.bb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.bb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Pf = gls2.aa.Pf();
  gls2.aa.Qf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Ya = s;
    a.bb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.bb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Qf = gls2.aa.Qf();
  gls2.aa.Rf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Ya = s;
    a.bb = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.bb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Rf = gls2.aa.Rf();
  gls2.aa.cg = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.aa.Tf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Ya = s;
    a.bb = s;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ya = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.ya.randf(-48, 48);
        this.tweener.move(Math.clamp(this.ea.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.bb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Tf = gls2.aa.Tf();
  gls2.aa.Uf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
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
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Uf = gls2.aa.Uf();
  gls2.aa.Vf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
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
      if(!(0 >= this.ra)) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Vf = gls2.aa.Vf();
  gls2.aa.Lf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.on("enemyconsumed", function() {
      this.Ia.$.Yd = s
    });
    a.Lk = tm.app.Tweener(a).to({x:432}, 3E4, "easeInOutQuad").to({x:48}, 3E4, "easeInOutQuad").call(function() {
      this.Ia.$.Yd = k
    }.bind(a)).setLoop(k);
    a.Mk = tm.app.Tweener(a).to({y:576}, 16E4, "easeInOutQuad").call(function() {
      tm.app.Tweener(this).to({y:448}, 2E4, "easeInOutQuad").to({y:576}, 2E4, "easeInOutQuad").setLoop(k)
    }.bind(a));
    a.tweener.wait(22E4).call(function() {
      this.Ia.$.Yd = s;
      this.Lk.clear();
      this.Mk.clear();
      this.tweener.clear().to({x:960}, 1E4, "easeInQuad")
    }.bind(a));
    a.Ya = s;
    a.on("enterframe", function() {
      this.ib = 3 < this.je.filter(function(a) {
        return!!a.parent
      }).length;
      this.Qa = !this.ib;
      !this.Ya && !this.ib && (gls2.aa.ta(this, "kanade"), this.Ya = k)
    })
  }});
  gls2.aa.Lf = gls2.aa.Lf();
  gls2.aa.Mc = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "rery");
    a.on("enterframe", function() {
      this.position.y > this.ba.ea.y ? gls2.aa.ze(this) : gls2.aa.yk(this)
    })
  }});
  gls2.aa.Jb = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "fary")
  }});
  gls2.aa.Nc = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "sory")
  }});
  gls2.aa.Of = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "lary")
  }});
  gls2.aa.hg = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "shiry")
  }});
  gls2.aa.Jc = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "dodory")
  }})
})();
(function() {
  var b = gls2.da, a = gls2.aa;
  gls2.oh = {"heri1-left":[{hard:b.Aa, soft:a.Lc, x:48, y:-100}, {hard:b.Aa, soft:a.sb, x:96, y:-100}, {hard:b.Aa, soft:a.Lc, x:144, y:-100}, {hard:b.Aa, soft:a.sb, x:192, y:-100}, {hard:b.Aa, soft:a.Lc, x:240, y:-100}], "heri1-center":[{hard:b.Aa, soft:a.Lc, x:144, y:-100}, {hard:b.Aa, soft:a.sb, x:192, y:-100}, {hard:b.Aa, soft:a.Lc, x:240, y:-100}, {hard:b.Aa, soft:a.sb, x:288, y:-100}, {hard:b.Aa, soft:a.Lc, x:336, y:-100}], "heri1-right":[{hard:b.Aa, soft:a.Lc, x:240, y:-100}, {hard:b.Aa, soft:a.sb, 
  x:288, y:-100}, {hard:b.Aa, soft:a.Lc, x:336, y:-100}, {hard:b.Aa, soft:a.sb, x:384, y:-100}, {hard:b.Aa, soft:a.Lc, x:432, y:-100}], "heri1-left2":[{hard:b.Aa, soft:a.sb, x:48, y:-100}, {hard:b.Aa, soft:a.Fd, x:96, y:-100}, {hard:b.Aa, soft:a.sb, x:144, y:-100}, {hard:b.Aa, soft:a.Fd, x:192, y:-100}, {hard:b.Aa, soft:a.sb, x:240, y:-100}], "heri1-center2":[{hard:b.Aa, soft:a.sb, x:144, y:-100}, {hard:b.Aa, soft:a.Fd, x:192, y:-100}, {hard:b.Aa, soft:a.sb, x:240, y:-100}, {hard:b.Aa, soft:a.Fd, 
  x:288, y:-100}, {hard:b.Aa, soft:a.sb, x:336, y:-100}], "heri1-right2":[{hard:b.Aa, soft:a.sb, x:240, y:-100}, {hard:b.Aa, soft:a.Fd, x:288, y:-100}, {hard:b.Aa, soft:a.sb, x:336, y:-100}, {hard:b.Aa, soft:a.Fd, x:384, y:-100}, {hard:b.Aa, soft:a.sb, x:432, y:-100}], "heri2-left":[{hard:b.ha, soft:a.tb, x:48, y:-100}, {hard:b.ha, soft:a.tb, x:96, y:-100}, {hard:b.ha, soft:a.tb, x:144, y:-100}, {hard:b.ha, soft:a.tb, x:192, y:-100}, {hard:b.ha, soft:a.tb, x:240, y:-100}], "heri2-center":[{hard:b.ha, 
  soft:a.tb, x:144, y:-100}, {hard:b.ha, soft:a.tb, x:192, y:-100}, {hard:b.ha, soft:a.tb, x:240, y:-100}, {hard:b.ha, soft:a.tb, x:288, y:-100}, {hard:b.ha, soft:a.tb, x:336, y:-100}], "heri2-right":[{hard:b.ha, soft:a.tb, x:240, y:-100}, {hard:b.ha, soft:a.tb, x:288, y:-100}, {hard:b.ha, soft:a.tb, x:336, y:-100}, {hard:b.ha, soft:a.tb, x:384, y:-100}, {hard:b.ha, soft:a.tb, x:432, y:-100}], "heri2-5-left":[{hard:b.ha, soft:a.Fa(0), x:48, y:-100}, {hard:b.ha, soft:a.Fa(100), x:96, y:-100}, {hard:b.ha, 
  soft:a.Fa(200), x:144, y:-100}, {hard:b.ha, soft:a.Fa(300), x:192, y:-100}, {hard:b.ha, soft:a.Fa(400), x:240, y:-100}, {hard:b.ha, soft:a.Fa(500), x:48, y:-100}, {hard:b.ha, soft:a.Fa(600), x:96, y:-100}, {hard:b.ha, soft:a.Fa(700), x:144, y:-100}, {hard:b.ha, soft:a.Fa(800), x:192, y:-100}, {hard:b.ha, soft:a.Fa(900), x:240, y:-100}], "heri2-5-center":[{hard:b.ha, soft:a.Fa(0), x:144, y:-100}, {hard:b.ha, soft:a.Fa(100), x:192, y:-100}, {hard:b.ha, soft:a.Fa(200), x:240, y:-100}, {hard:b.ha, 
  soft:a.Fa(300), x:288, y:-100}, {hard:b.ha, soft:a.Fa(400), x:336, y:-100}, {hard:b.ha, soft:a.Fa(500), x:144, y:-100}, {hard:b.ha, soft:a.Fa(600), x:192, y:-100}, {hard:b.ha, soft:a.Fa(700), x:240, y:-100}, {hard:b.ha, soft:a.Fa(800), x:288, y:-100}, {hard:b.ha, soft:a.Fa(900), x:336, y:-100}], "heri2-5-right":[{hard:b.ha, soft:a.Fa(0), x:240, y:-100}, {hard:b.ha, soft:a.Fa(100), x:288, y:-100}, {hard:b.ha, soft:a.Fa(200), x:336, y:-100}, {hard:b.ha, soft:a.Fa(300), x:384, y:-100}, {hard:b.ha, 
  soft:a.Fa(400), x:432, y:-100}, {hard:b.ha, soft:a.Fa(500), x:240, y:-100}, {hard:b.ha, soft:a.Fa(600), x:288, y:-100}, {hard:b.ha, soft:a.Fa(700), x:336, y:-100}, {hard:b.ha, soft:a.Fa(800), x:384, y:-100}, {hard:b.ha, soft:a.Fa(900), x:432, y:-100}], "heri1-4-left":[{hard:b.ha, soft:a.rb, x:48, y:-100}, {hard:b.ha, soft:a.rb, x:96, y:-100}, {hard:b.ha, soft:a.rb, x:144, y:-100}, {hard:b.ha, soft:a.rb, x:192, y:-100}, {hard:b.ha, soft:a.rb, x:240, y:-100}], "heri1-4-center":[{hard:b.ha, soft:a.rb, 
  x:144, y:-100}, {hard:b.ha, soft:a.rb, x:192, y:-100}, {hard:b.ha, soft:a.rb, x:240, y:-100}, {hard:b.ha, soft:a.rb, x:288, y:-100}, {hard:b.ha, soft:a.rb, x:336, y:-100}], "heri1-4-right":[{hard:b.ha, soft:a.rb, x:240, y:-100}, {hard:b.ha, soft:a.rb, x:288, y:-100}, {hard:b.ha, soft:a.rb, x:336, y:-100}, {hard:b.ha, soft:a.rb, x:384, y:-100}, {hard:b.ha, soft:a.rb, x:432, y:-100}], "heri1-4-left2":[{hard:b.ha, soft:a.Kc, x:48, y:-100}, {hard:b.ha, soft:a.Ed, x:96, y:-100}, {hard:b.ha, soft:a.Kc, 
  x:144, y:-100}, {hard:b.ha, soft:a.Ed, x:192, y:-100}, {hard:b.ha, soft:a.Kc, x:240, y:-100}], "heri1-4-center2":[{hard:b.ha, soft:a.Kc, x:144, y:-100}, {hard:b.ha, soft:a.Ed, x:192, y:-100}, {hard:b.ha, soft:a.Kc, x:240, y:-100}, {hard:b.ha, soft:a.Ed, x:288, y:-100}, {hard:b.ha, soft:a.Kc, x:336, y:-100}], "heri1-4-right2":[{hard:b.ha, soft:a.Kc, x:240, y:-100}, {hard:b.ha, soft:a.Ed, x:288, y:-100}, {hard:b.ha, soft:a.Kc, x:336, y:-100}, {hard:b.ha, soft:a.Ed, x:384, y:-100}, {hard:b.ha, soft:a.Kc, 
  x:432, y:-100}], "tankRD-left":[{hard:b.la, soft:a.tc, x:78, y:-50}, {hard:b.la, soft:a.tc, x:28, y:-100}, {hard:b.la, soft:a.tc, x:-22, y:-150}, {hard:b.la, soft:a.tc, x:-72, y:-200}, {hard:b.la, soft:a.tc, x:-122, y:-250}], "tankRD-center":[{hard:b.la, soft:a.tc, x:222, y:-50}, {hard:b.la, soft:a.tc, x:172, y:-100}, {hard:b.la, soft:a.tc, x:122, y:-150}, {hard:b.la, soft:a.tc, x:72, y:-200}, {hard:b.la, soft:a.tc, x:22, y:-250}], "tankL-top":[{hard:b.la, soft:a.be, x:550, y:64}, {hard:b.la, soft:a.be, 
  x:620, y:64}, {hard:b.la, soft:a.be, x:690, y:64}, {hard:b.la, soft:a.be, x:760, y:64}, {hard:b.la, soft:a.be, x:830, y:64}], "tank5-left":[{hard:b.la, soft:a.ua, x:48, y:-70}, {hard:b.la, soft:a.ua, x:48, y:-140}, {hard:b.la, soft:a.ua, x:48, y:-210}, {hard:b.la, soft:a.ua, x:48, y:-280}, {hard:b.la, soft:a.ua, x:48, y:-350}], "tank5-center":[{hard:b.la, soft:a.ua, x:240, y:-70}, {hard:b.la, soft:a.ua, x:240, y:-140}, {hard:b.la, soft:a.ua, x:240, y:-210}, {hard:b.la, soft:a.ua, x:240, y:-280}, 
  {hard:b.la, soft:a.ua, x:240, y:-350}], "tank15-top":[{hard:b.la, soft:a.ua, x:48, y:-70}, {hard:b.la, soft:a.ua, x:48, y:-140}, {hard:b.la, soft:a.ua, x:48, y:-210}, {hard:b.la, soft:a.ua, x:48, y:-280}, {hard:b.la, soft:a.ua, x:48, y:-350}, {hard:b.la, soft:a.ua, x:240, y:-70}, {hard:b.la, soft:a.ua, x:240, y:-140}, {hard:b.la, soft:a.ua, x:240, y:-210}, {hard:b.la, soft:a.ua, x:240, y:-280}, {hard:b.la, soft:a.ua, x:240, y:-350}, {hard:b.la, soft:a.ua, x:432, y:-70}, {hard:b.la, soft:a.ua, x:432, 
  y:-140}, {hard:b.la, soft:a.ua, x:432, y:-210}, {hard:b.la, soft:a.ua, x:432, y:-280}, {hard:b.la, soft:a.ua, x:432, y:-350}], "tank25-top":[{hard:b.la, soft:a.ua, x:48, y:-70}, {hard:b.la, soft:a.ua, x:48, y:-140}, {hard:b.la, soft:a.ua, x:48, y:-210}, {hard:b.la, soft:a.ua, x:48, y:-280}, {hard:b.la, soft:a.ua, x:48, y:-350}, {hard:b.la, soft:a.ua, x:240, y:-70}, {hard:b.la, soft:a.ua, x:240, y:-140}, {hard:b.la, soft:a.ua, x:240, y:-210}, {hard:b.la, soft:a.ua, x:240, y:-280}, {hard:b.la, soft:a.ua, 
  x:240, y:-350}, {hard:b.la, soft:a.ua, x:432, y:-70}, {hard:b.la, soft:a.ua, x:432, y:-140}, {hard:b.la, soft:a.ua, x:432, y:-210}, {hard:b.la, soft:a.ua, x:432, y:-280}, {hard:b.la, soft:a.ua, x:432, y:-350}, {hard:b.la, soft:a.uc, x:144, y:710}, {hard:b.la, soft:a.uc, x:144, y:780}, {hard:b.la, soft:a.uc, x:144, y:850}, {hard:b.la, soft:a.uc, x:144, y:920}, {hard:b.la, soft:a.uc, x:144, y:990}, {hard:b.la, soft:a.uc, x:336, y:710}, {hard:b.la, soft:a.uc, x:336, y:780}, {hard:b.la, soft:a.uc, 
  x:336, y:850}, {hard:b.la, soft:a.uc, x:336, y:920}, {hard:b.la, soft:a.uc, x:336, y:990}], "bukky-4-r":[{hard:b.mh, soft:a.nh, x:480, y:-50}], "bukky-4-l":[{hard:b.mh, soft:a.nh, x:0, y:-50}], "cannon-0":[{hard:b.Na, soft:a.Rb, x:48, y:-100}], "cannon-1":[{hard:b.Na, soft:a.Rb, x:96, y:-100}], "cannon-2":[{hard:b.Na, soft:a.Rb, x:144, y:-100}], "cannon-3":[{hard:b.Na, soft:a.Rb, x:192, y:-100}], "cannon-4":[{hard:b.Na, soft:a.Rb, x:240, y:-100}], "cannon-5":[{hard:b.Na, soft:a.Rb, x:288, y:-100}], 
  "cannon-6":[{hard:b.Na, soft:a.Rb, x:336, y:-100}], "cannon-7":[{hard:b.Na, soft:a.Rb, x:384, y:-100}], "cannon-8":[{hard:b.Na, soft:a.Rb, x:432, y:-100}], "cannon-R0":[{hard:b.Na, soft:a.Rb, x:550, y:128}], "cannon-R1":[{hard:b.Na, soft:a.Rb, x:550, y:192}], "cannon-R2":[{hard:b.Na, soft:a.Rb, x:550, y:256}], "yayoi-0":[{hard:b.Na, soft:a.Sb, x:48, y:-100}], "yayoi-1":[{hard:b.Na, soft:a.Sb, x:96, y:-100}], "yayoi-2":[{hard:b.Na, soft:a.Sb, x:144, y:-100}], "yayoi-3":[{hard:b.Na, soft:a.Sb, x:192, 
  y:-100}], "yayoi-4":[{hard:b.Na, soft:a.Sb, x:240, y:-100}], "yayoi-5":[{hard:b.Na, soft:a.Sb, x:288, y:-100}], "yayoi-6":[{hard:b.Na, soft:a.Sb, x:336, y:-100}], "yayoi-7":[{hard:b.Na, soft:a.Sb, x:384, y:-100}], "yayoi-8":[{hard:b.Na, soft:a.Sb, x:432, y:-100}], "yayoi-R0":[{hard:b.Na, soft:a.Sb, x:550, y:128}], "yayoi-R1":[{hard:b.Na, soft:a.Sb, x:550, y:192}], "yayoi-R2":[{hard:b.Na, soft:a.Sb, x:550, y:256}], "tsubomi-0":[{hard:b.Pe, soft:a.Je, x:96, y:-100}], "tsubomi-1":[{hard:b.Pe, soft:a.Je, 
  x:240, y:-100}], "tsubomi-2":[{hard:b.Pe, soft:a.Je, x:384, y:-100}], "tsubomi-R0":[{hard:b.Pe, soft:a.Je, x:580, y:128}], "itsuki-0":[{hard:b.Kf, soft:a.Ff, x:96, y:-100}], "itsuki-1":[{hard:b.Kf, soft:a.Ff, x:240, y:-100}], "itsuki-2":[{hard:b.Kf, soft:a.Ff, x:384, y:-100}], "makoto-0":[{hard:b.pc, soft:a.qc, x:48, y:-100}], "makoto-1":[{hard:b.pc, soft:a.qc, x:96, y:-100}], "makoto-2":[{hard:b.pc, soft:a.qc, x:144, y:-100}], "makoto-3":[{hard:b.pc, soft:a.qc, x:192, y:-100}], "makoto-4":[{hard:b.pc, 
  soft:a.qc, x:240, y:-100}], "makoto-5":[{hard:b.pc, soft:a.qc, x:288, y:-100}], "makoto-6":[{hard:b.pc, soft:a.qc, x:336, y:-100}], "makoto-7":[{hard:b.pc, soft:a.qc, x:384, y:-100}], "makoto-8":[{hard:b.pc, soft:a.qc, x:432, y:-100}], "makoto-R0":[{hard:b.pc, soft:a.qc, x:580, y:128}], "karen-3-2":[{hard:b.Ef, soft:a.Df, x:96, y:-100}], "karen-3-5":[{hard:b.Ef, soft:a.Df, x:240, y:-100}], "karen-3-8":[{hard:b.Ef, soft:a.Df, x:384, y:-100}], "fighter-m-0":[{hard:b.Tc, soft:a.hd, x:96, y:-192}], 
  "fighter-m-1":[{hard:b.Tc, soft:a.hd, x:144, y:-192}], "fighter-m-2":[{hard:b.Tc, soft:a.hd, x:192, y:-192}], "fighter-m-3":[{hard:b.Tc, soft:a.hd, x:240, y:-192}], "fighter-m-4":[{hard:b.Tc, soft:a.hd, x:288, y:-192}], "fighter-m-5":[{hard:b.Tc, soft:a.hd, x:336, y:-192}], "fighter-m-6":[{hard:b.Tc, soft:a.hd, x:384, y:-192}], "fighter-m4-0":[{hard:b.Tc, soft:a.Zi, x:96, y:-192}], "tsukikage-r":[{hard:b.Tb, soft:a.kd(700), x:624, y:256}, {hard:b.Tb, soft:a.kd(600), x:720, y:256}, {hard:b.Tb, soft:a.kd(500), 
  x:576, y:320}, {hard:b.Tb, soft:a.kd(400), x:672, y:320}, {hard:b.Tb, soft:a.kd(300), x:768, y:320}, {hard:b.Tb, soft:a.kd(200), x:624, y:384}, {hard:b.Tb, soft:a.kd(100), x:720, y:384}], "tsukikage-l":[{hard:b.Tb, soft:a.ce(700), x:-144, y:384}, {hard:b.Tb, soft:a.ce(600), x:-240, y:384}, {hard:b.Tb, soft:a.ce(500), x:-96, y:320}, {hard:b.Tb, soft:a.ce(400), x:-192, y:320}, {hard:b.Tb, soft:a.ce(200), x:-144, y:256}], "urara5-0":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:b.eb, soft:a.eb(0, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-1":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:b.eb, soft:a.eb(0, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "urara5-2":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:b.eb, soft:a.eb(1, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-3":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:b.eb, soft:a.eb(1, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-4":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:b.eb, soft:a.eb(2, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-5":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:b.eb, soft:a.eb(2, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-6":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:b.eb, soft:a.eb(3, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-7":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:b.eb, soft:a.eb(3, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "milk5-0":[{hard:b.rc, soft:a.sc(2E3), x:384, y:-256}, {hard:b.rc, soft:a.sc(1500), x:312, y:-224}, {hard:b.rc, soft:a.sc(1E3), x:240, y:-192}, {hard:b.rc, soft:a.sc(500), x:168, y:-160}, {hard:b.rc, soft:a.sc(0), x:96, y:-128}], "milk5-1":[{hard:b.rc, soft:a.sc(2E3), x:96, y:-256}, {hard:b.rc, soft:a.sc(1500), x:168, y:-224}, {hard:b.rc, soft:a.sc(1E3), x:240, y:-192}, {hard:b.rc, soft:a.sc(500), x:312, y:-160}, {hard:b.rc, soft:a.sc(0), x:384, y:-128}], "ako5-0":[{hard:b.pb, soft:a.qb(240, 
  128, 96, 256), x:240, y:-192}, {hard:b.pb, soft:a.qb(384, 256, 240, 128), x:384, y:-192}, {hard:b.pb, soft:a.qb(360, 512, 384, 256), x:360, y:-192}, {hard:b.pb, soft:a.qb(120, 512, 360, 512), x:120, y:-192}, {hard:b.pb, soft:a.qb(96, 256, 120, 512), x:96, y:-192}], "ako5-1":[{hard:b.pb, soft:a.qb(240, 128, 384, 256), x:240, y:-192}, {hard:b.pb, soft:a.qb(384, 256, 360, 512), x:384, y:-192}, {hard:b.pb, soft:a.qb(360, 512, 120, 512), x:360, y:-192}, {hard:b.pb, soft:a.qb(120, 512, 96, 256), x:120, 
  y:-192}, {hard:b.pb, soft:a.qb(96, 256, 240, 128), x:96, y:-192}], "ako5-2":[{hard:b.pb, soft:a.qb(240, 128, 120, 512), x:240, y:-192}, {hard:b.pb, soft:a.qb(384, 256, 96, 256), x:384, y:-192}, {hard:b.pb, soft:a.qb(360, 512, 240, 128), x:360, y:-192}, {hard:b.pb, soft:a.qb(120, 512, 384, 256), x:120, y:-192}, {hard:b.pb, soft:a.qb(96, 256, 360, 512), x:96, y:-192}], "komachi-0":[{hard:b.Ub, soft:a.sh, x:144, y:-192}], "komachi-1":[{hard:b.Ub, soft:a.sh, x:336, y:-192}], "komachi2-0":[{hard:b.Ub, 
  soft:a.th, x:144, y:-192}], "komachi2-1":[{hard:b.Ub, soft:a.th, x:336, y:-192}], "komachi3-0":[{hard:b.Ub, soft:a.uh, x:144, y:-192}], "komachi3-1":[{hard:b.Ub, soft:a.uh, x:336, y:-192}], "komachi4-0":[{hard:b.Ub, soft:a.Nf, x:144, y:-192}], "komachi4-1":[{hard:b.Ub, soft:a.Nf, x:336, y:-192}], "komachi4-2":[{hard:b.Ub, soft:a.Nf, x:240, y:-192}], "komachi5-0":[{hard:b.Ub, soft:a.Mf, x:144, y:-192}], "komachi5-1":[{hard:b.Ub, soft:a.Mf, x:336, y:-192}], "komachi5-2":[{hard:b.Ub, soft:a.Mf, x:240, 
  y:-192}], "nozomi4-0":[{hard:b.Hd, soft:a.$f, x:144, y:-192}], "nozomi4-1":[{hard:b.Hd, soft:a.$f, x:240, y:-192}], "nozomi4-2":[{hard:b.Hd, soft:a.$f, x:336, y:-192}], "nozomi5-0":[{hard:b.Hd, soft:a.ag, x:144, y:-256}], "nozomi5-1":[{hard:b.Hd, soft:a.ag, x:240, y:-128}], "nozomi5-2":[{hard:b.Hd, soft:a.ag, x:336, y:-256}], "mktn5-0":[{hard:b.$d, soft:a.$d(0.6), x:624, y:128}], "mktn5-1":[{hard:b.$d, soft:a.$d(0.4), x:-144, y:64}], "akane-center":[{hard:b.Ja, soft:a.Ja, x:144, y:130}, {hard:b.Ja, 
  soft:a.Ja, x:192, y:80}, {hard:b.Ja, soft:a.Ja, x:240, y:140}, {hard:b.Ja, soft:a.Ja, x:288, y:80}, {hard:b.Ja, soft:a.Ja, x:336, y:130}], "akane-right":[{hard:b.Ja, soft:a.Ja, x:384, y:160}, {hard:b.Ja, soft:a.Ja, x:288, y:120}, {hard:b.Ja, soft:a.Ja, x:288, y:80}, {hard:b.Ja, soft:a.Ja, x:384, y:40}], "akane-left":[{hard:b.Ja, soft:a.Ja, x:96, y:160}, {hard:b.Ja, soft:a.Ja, x:144, y:120}, {hard:b.Ja, soft:a.Ja, x:144, y:80}, {hard:b.Ja, soft:a.Ja, x:96, y:40}], "nao1-left":[{hard:b.qa, soft:a.vb, 
  x:48, y:-100}, {hard:b.qa, soft:a.vb, x:96, y:-100}, {hard:b.qa, soft:a.vb, x:144, y:-100}, {hard:b.qa, soft:a.vb, x:192, y:-100}, {hard:b.qa, soft:a.vb, x:240, y:-100}], "nao1-right":[{hard:b.qa, soft:a.vb, x:240, y:-100}, {hard:b.qa, soft:a.vb, x:288, y:-100}, {hard:b.qa, soft:a.vb, x:336, y:-100}, {hard:b.qa, soft:a.vb, x:384, y:-100}, {hard:b.qa, soft:a.vb, x:432, y:-100}], "nao1-center":[{hard:b.qa, soft:a.vb, x:144, y:-100}, {hard:b.qa, soft:a.vb, x:192, y:-100}, {hard:b.qa, soft:a.vb, x:240, 
  y:-100}, {hard:b.qa, soft:a.vb, x:288, y:-100}, {hard:b.qa, soft:a.vb, x:336, y:-100}], "nao2-left":[{hard:b.qa, soft:a.wb, x:48, y:-100}, {hard:b.qa, soft:a.wb, x:96, y:-100}, {hard:b.qa, soft:a.wb, x:144, y:-100}, {hard:b.qa, soft:a.wb, x:192, y:-100}, {hard:b.qa, soft:a.wb, x:240, y:-100}], "nao2-right":[{hard:b.qa, soft:a.wb, x:240, y:-100}, {hard:b.qa, soft:a.wb, x:288, y:-100}, {hard:b.qa, soft:a.wb, x:336, y:-100}, {hard:b.qa, soft:a.wb, x:384, y:-100}, {hard:b.qa, soft:a.wb, x:432, y:-100}], 
  "nao2-center":[{hard:b.qa, soft:a.wb, x:144, y:-100}, {hard:b.qa, soft:a.wb, x:192, y:-100}, {hard:b.qa, soft:a.wb, x:240, y:-100}, {hard:b.qa, soft:a.wb, x:288, y:-100}, {hard:b.qa, soft:a.wb, x:336, y:-100}], "nao3-left":[{hard:b.qa, soft:a.xb, x:48, y:-100}, {hard:b.qa, soft:a.xb, x:96, y:-100}, {hard:b.qa, soft:a.xb, x:144, y:-100}, {hard:b.qa, soft:a.xb, x:192, y:-100}, {hard:b.qa, soft:a.xb, x:240, y:-100}], "nao3-right":[{hard:b.qa, soft:a.xb, x:240, y:-100}, {hard:b.qa, soft:a.xb, x:288, 
  y:-100}, {hard:b.qa, soft:a.xb, x:336, y:-100}, {hard:b.qa, soft:a.xb, x:384, y:-100}, {hard:b.qa, soft:a.xb, x:432, y:-100}], "nao3-center":[{hard:b.qa, soft:a.xb, x:144, y:-100}, {hard:b.qa, soft:a.xb, x:192, y:-100}, {hard:b.qa, soft:a.xb, x:240, y:-100}, {hard:b.qa, soft:a.xb, x:288, y:-100}, {hard:b.qa, soft:a.xb, x:336, y:-100}], "reika1-left":[{hard:b.zb, soft:a.ac, x:-48, y:-64}, {hard:b.zb, soft:a.ac, x:-72, y:-128}, {hard:b.zb, soft:a.ac, x:-96, y:-64}, {hard:b.zb, soft:a.ac, x:-120, 
  y:-128}, {hard:b.zb, soft:a.ac, x:-144, y:-64}, {hard:b.zb, soft:a.ac, x:-168, y:-128}], "reika1-right":[{hard:b.zb, soft:a.ac, x:528, y:-64}, {hard:b.zb, soft:a.ac, x:552, y:-128}, {hard:b.zb, soft:a.ac, x:576, y:-64}, {hard:b.zb, soft:a.ac, x:600, y:-128}, {hard:b.zb, soft:a.ac, x:624, y:-64}, {hard:b.zb, soft:a.ac, x:648, y:-128}], "madoka-0":[{hard:b.ee, soft:a.ee, x:144, y:-128}], "madoka-1":[{hard:b.ee, soft:a.ee, x:336, y:-128}], miyuki_y1:[{hard:b.wd, soft:a.wd, x:-128, y:140}], miyuki_y2:[{hard:b.wd, 
  soft:a.wd, x:608, y:60}], miyuki_t1:[{hard:b.vd, soft:a.vd, x:336, y:-128}], miyuki_t2:[{hard:b.vd, soft:a.vd, x:144, y:-128}], alice:[{hard:b.Af, soft:a.Af, x:240, y:-64}], erika:[{hard:b.Zd, soft:a.Zd, x:240, y:-100}], yukishiro:[{hard:b.If, soft:a.If, x:240, y:-100}], misumi:[{hard:b.Wf, soft:[a.$i, a.Xf, a.Yf], x:240, y:-100, ic:k}], mai:[{hard:b.Sf, soft:a.Sf, x:780, y:128}], hyuga:[{hard:b.aj, soft:[a.dg, a.eg, a.fg], x:240, y:-100, ic:k}], higashi:[{hard:b.gg, soft:a.gg, x:780, y:128}], 
  momozono:[{hard:b.Xi, soft:[a.Pf, a.Qf, a.Rf], x:240, y:-100, ic:k}], rikka:[{hard:b.cg, soft:a.cg, x:240, y:-100}], mana:[{hard:b.Yi, soft:[a.Tf, a.Uf, a.Vf], x:240, y:-100, ic:k}], kanade:[{hard:b.Wi, soft:a.Lf, x:432, y:-448}]}
})();
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, i, j, m) {
    return c.action([c.fire(c.direction(b, "absolute"), f, i || u, j, m), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, i || u, j, m)])])
  }
  function f(a, b, c, f, i) {
    return function(j) {
      return d(a, b, c, j, f, i, h, h)
    }
  }
  function d(a, b, d, f, i, j, m, n) {
    return c.action([c.fire(c.direction(b), f, i || u, j, m, n), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, i || u, j, m, n)])])
  }
  function i(a) {
    return c.fire(c.direction(0), a || n, F)
  }
  function m(a) {
    return c.fire(c.direction(0), a || n, u)
  }
  function q(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function w(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function t(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.40 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function n(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.10 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.80 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function H(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function j(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function O(a) {
    return c.Ga(a, {frame:3, we:k})
  }
  function L(a) {
    return c.Ga(a, {frame:2, we:k})
  }
  function z(a) {
    return c.Ga(a, {visible:s})
  }
  function C(a) {
    return c.Ga(a, {frame:4, gc:k})
  }
  function G(a) {
    return c.Ga(a, {frame:3})
  }
  function u(a) {
    return c.Ga(a, {frame:1})
  }
  function v(a) {
    return c.Ga(a, {frame:2})
  }
  function F(a) {
    return c.Ga(a, {frame:0})
  }
  function D(a) {
    return c.Ga(a, {frame:3, gc:k})
  }
  function K(a) {
    return c.Ga(a, {frame:1, gc:k})
  }
  function A(a) {
    return c.Ga(a, {frame:2, gc:k})
  }
  function B(a) {
    return c.Ga(a, {frame:0, gc:k})
  }
  gls2.fa = {};
  var c = I.Ha;
  gls2.fa["basic0-0"] = new I.ia({top:c.action([m])});
  gls2.fa["basic0-1"] = new I.ia({top:c.action([b(t, -0.01, 8, f(3, -15, 15))])});
  gls2.fa["basic1-0"] = new I.ia({top:c.action([c.repeat(999, [j(40), m(n)])])});
  gls2.fa["basic1-1"] = new I.ia({top:c.action([c.repeat(999, [j(20), m(n)])])});
  gls2.fa["basic1-2"] = new I.ia({top:c.action([j("10+$rand*100"), d(3, -20, 20, n)])});
  gls2.fa["basic1-3"] = new I.ia({top:c.action([c.repeat(999, [j("20+$rand*80"), d(3, -20, 20, n)])])});
  gls2.fa["basic2-0"] = new I.ia({top:c.action([c.repeat(999, [j(50), m(n)])])});
  gls2.fa["basic3-0"] = new I.ia({top:c.action([c.wait(20), c.repeat(999, [j(100), b(n, 0.1, 3, i)])])});
  gls2.fa["basic3-1"] = new I.ia({top:c.action([c.wait(20), c.repeat(999, [j(40), b(n, 0.1, 3, i)])])});
  gls2.fa["bukky-4-0"] = new I.ia({top0:c.action([j(30), c.repeat(999, [c.fire(c.direction(-40), n, A), c.repeat(3, [c.fire(c.direction(20, "sequence"), n, A), c.fire(c.direction(20, "sequence"), n, A), c.fire(c.direction(20, "sequence"), n, A), c.fire(c.direction(20, "sequence"), n, A), c.fire(c.direction(-80, "sequence"), n, A), j(5)]), j(70)])]), top1:c.action([j(20), c.fire(c.direction(180, "absolute"), p, K), c.repeat(999, [c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), 
  p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(-90, "sequence"), p, K), j(5)])])});
  gls2.fa["cannon2-0"] = new I.ia({top0:c.action([c.repeat(999, [j(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", p), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", p), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", p), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", p), j(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", n), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", n), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", n), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", n)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), r, C), c.fire(c.direction(" 90+$loop.index*10", "absolute"), r, C), c.fire(c.direction("180+$loop.index*10", "absolute"), r, C), c.fire(c.direction("270+$loop.index*10", "absolute"), r, C), c.fire(c.direction("  0-$loop.index*10", "absolute"), r, C), c.fire(c.direction(" 90-$loop.index*10", "absolute"), r, C), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), r, C), c.fire(c.direction("270-$loop.index*10", "absolute"), r, C), j(10)])]), top2:c.action([c.repeat(999, [j(43), d(30, 0, 348, n, F)])])});
  gls2.fa["cannon2-3"] = new I.ia({top0:c.action([c.repeat(999, [c.wa("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), z(c.na("ivs0", "$d")))]), j(10), c.fire(c.direction(39, "sequence"), c.speed(1), z(c.na("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.wa("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), z(c.na("ivs1", "$d")))]), j(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), z(c.na("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, F), c.Pa()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), p, function(a) {
    return c.Ga(a, {frame:7, gc:k})
  }), c.fire(c.direction("$1+5", "relative"), p, function(a) {
    return c.Ga(a, {frame:6, gc:k})
  }), c.Pa()])});
  gls2.fa["cannon3-0"] = new I.ia({top0:c.action([c.repeat(999, [j(80), b(p, 0.01, 5, f(5, -30, 30, F, c.offsetX(-60))), b(p, 0.01, 5, f(5, -30, 30, F)), b(p, 0.01, 5, f(5, -30, 30, F, c.offsetX(60)))])])});
  gls2.fa["cannon4-0"] = new I.ia({top0:c.action([j(20), c.repeat(999, [c.fire(p, A), c.repeat(8, [j(10), c.wa("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), p, A), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), p, A)])]), j(120)])])});
  gls2.fa["cannon5-0"] = new I.ia({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), q, z(c.na("b"))), c.repeat(11, [j(5), c.fire(c.direction(10, "sequence"), q, z(c.na("b")))]), j(60)])]), b:c.action([c.wait(5), c.Ye(c.speed(0), 0), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, u)
  }), c.Pa])});
  gls2.fa["yuri-4"] = new I.ia({top:c.action([j(60), c.repeat(7, [a(7, 120, 240, r, F), j(8)])])});
  gls2.fa["kurokawa-1"] = new I.ia({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, v, c.offsetX(-45), c.pa(k))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, v, c.offsetX(45), c.pa(k))
  }), j(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.pa(k)), j(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.pa(k)), j(45)])])});
  gls2.fa["milk-5"] = new I.ia({top0:c.action([c.repeat(999, [d(5, -90, 90, n, G, c.offsetX(-45)), c.wait(27), d(5, -90, 90, n, G, c.offsetX(45)), j(120)])]), top1:c.action([c.repeat(999, [j(30), d(6, -90, 90, t, A, c.offsetX(-45)), c.wait(21), d(6, -90, 90, t, A, c.offsetX(45)), j(90)])]), top2:c.action([c.repeat(999, [j(55), d(13, -90, 90, r, C, c.offsetX(-45)), c.wait(20), d(13, -90, 90, r, C, c.offsetX(45)), j(21)])])});
  gls2.fa["ako-5"] = new I.ia({top:c.action([c.repeat(8, [d(3, -20, 20, t, u), j(2)])])});
  gls2.fa["kurokawa-4"] = new I.ia({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, v, c.offsetX(-45), c.pa(k))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, v, c.offsetX(45), c.pa(k))
  }), j(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.pa(k)), j(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.pa(k)), j(45)])])});
  gls2.fa["komachi-1"] = new I.ia({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), r(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(-40)), c.repeat(57, [j(8), c.fire(c.direction(-720 / 57, "sequence"), r(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, 
  [c.fire(c.direction(-210, "absolute"), r(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(40)), c.repeat(57, [j(8), c.fire(c.direction(720 / 57, "sequence"), r(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), n(0), B, c.offsetX(-110), c.pa(k)), c.repeat(6, 
  [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), B, c.offsetX(-110), c.pa(k))]), j(10), c.fire(c.direction(0), n(0), B, c.offsetX(110), c.pa(k)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), B, c.offsetX(110), c.pa(k))]), j(10)])])});
  gls2.fa["komachi-2"] = new I.ia({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(4, -45, 45, a, v, c.offsetX(-45), c.pa(k)), j(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([j(4), d(4, -45, 45, a, v, c.offsetX(45), c.pa(k))])
  }), j(90)])]), top1:c.action([c.repeat(999, [j(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), j(1)])
  }), j(180)])])});
  gls2.fa["komachi-3"] = new I.ia({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(8, -60, 60, a, v, c.offsetX(-45), c.pa(k)), j(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([j(4), d(8, -60, 60, a, v, c.offsetX(45), c.pa(k))])
  }), j(90)])]), top1:c.action([c.repeat(999, [j(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), j(1)])
  }), j(180)])])});
  gls2.fa["komachi-4"] = new I.ia({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), n, G, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, G, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, G, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), n, G, c.offsetX(45)), j(4)]), j(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), n(5), B, c.offsetX(-110), c.pa(k)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), n(5), B, c.offsetX(-110), c.pa(k))]), j(30), c.fire(c.direction(0), n(5), B, c.offsetX(110), c.pa(k)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), n(5), B, c.offsetX(110), c.pa(k))]), j(30)])])});
  gls2.fa["komachi-5"] = new I.ia({top0:c.action([c.repeat(999, [c.fire(c.direction(210, "absolute"), r(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(-40)), c.repeat(60, [j(4), c.fire(c.direction(-6, "sequence"), r(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(-40))])])]), top1:c.action([c.repeat(999, [c.fire(c.direction(-210, 
  "absolute"), r(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(40)), c.repeat(60, [j(4), c.fire(c.direction(6, "sequence"), r(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), u, c.offsetX(40))])])]), top2:c.action([c.repeat(999, [c.fire(c.direction(-10), t(0), B, c.offsetX(-110), c.pa(k)), c.fire(c.direction(10, "sequence"), 
  t(0), B, c.offsetX(-110), c.pa(k)), c.fire(c.direction(10, "sequence"), t(0), B, c.offsetX(-110), c.pa(k)), c.repeat(30, [c.wait(1), c.fire(c.direction(-20, "sequence"), t(0), B, c.offsetX(-110), c.pa(k)), c.fire(c.direction(10, "sequence"), t(0), B, c.offsetX(-110), c.pa(k)), c.fire(c.direction(10, "sequence"), t(0), B, c.offsetX(-110), c.pa(k))]), j(5), c.fire(c.direction(-10), t(0), B, c.offsetX(110), c.pa(k)), c.fire(c.direction(10, "sequence"), t(0), B, c.offsetX(110), c.pa(k)), c.fire(c.direction(10, 
  "sequence"), t(0), B, c.offsetX(110), c.pa(k)), c.repeat(30, [c.wait(1), c.fire(c.direction(-20, "sequence"), t(0), B, c.offsetX(110), c.pa(k)), c.fire(c.direction(10, "sequence"), t(0), B, c.offsetX(110), c.pa(k)), c.fire(c.direction(10, "sequence"), t(0), B, c.offsetX(110), c.pa(k))]), j(5)])])});
  gls2.fa["nozomi-4"] = new I.ia({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.wa("c", "2+$loop.index"), d("$c", "-4-($c-2)*4", "4+($c-2)*4", H("(560-$c*40)*0.03"), D, c.offsetY(-50))]), j(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), z(c.na("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, F, c.offsetX(-50)), c.wait(3)])
  }), j(90), c.fire(c.direction(-40), z(c.na("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, F, c.offsetX(50)), c.wait(3)])
  }), j(90)])]), noop:c.action([c.wait(1), c.Pa])});
  gls2.fa["nozomi-5"] = new I.ia({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(6, [c.wa("c", "2+$loop.index"), d("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", H("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", H("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", H("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", H("(560-$c*40)*0.02"), D, c.offsetY(-50))]), j(150), c.repeat(6, [c.wa("c", "2+$loop.index"), 
  d("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", H("(560-$c*40)*0.02"), A, c.offsetY(-50)), d("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", H("(560-$c*40)*0.02"), A, c.offsetY(-50)), d("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", H("(560-$c*40)*0.02"), A, c.offsetY(-50)), d("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", H("(560-$c*40)*0.02"), A, c.offsetY(-50)), d("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", H("(560-$c*40)*0.02"), A, c.offsetY(-50))]), j(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(5), 
  z(c.na("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(-1, "sequence"), a, F, c.offsetX(-50)), j(3)])
  }), c.fire(c.direction(-5), z(c.na("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(1, "sequence"), a, F, c.offsetX(50)), j(3)])
  })])]), noop:c.action([c.wait(1), c.Pa])});
  gls2.fa["mktn-5"] = new I.ia({top0:c.action([c.repeat(999, [c.fire(c.direction(0), r, z(c.na("noop"))), c.repeat(20, [c.fire(c.direction(0.5, "sequence"), c.speed(0.08, "sequence"), v), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), v)]), j(6)]), c.fire(c.direction(0), r, z(c.na("noop"))), c.repeat(20, [c.fire(c.direction(-0.5, "sequence"), c.speed(0.08, "sequence"), v), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), v)]), j(6)]), j(60)])]), 
  top1:c.action([c.repeat(999, [c.fire(c.direction(0, "absolute"), n, z(c.na("noop"))), c.repeat(5, [c.fire(c.direction(-10, "sequence"), c.speed(0.05, "sequence"), C), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), C)]), j(5)]), c.fire(c.direction(0, "absolute"), n, z(c.na("noop"))), c.repeat(5, [c.fire(c.direction(10, "sequence"), c.speed(0.05, "sequence"), C), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), C)]), j(5)]), j(40)])]), top2:c.action([c.repeat(999, 
  [c.wa("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"), d(5, -30, 30, n(7), L, c.offsetX("$gun"), c.offsetY(20)), c.wa("gun", "[-40, -120, 0, 120, 80, 40, -80][$loop.index%7]"), d(5, -30, 30, n(7), L, c.offsetX("$gun"), c.offsetY(20)), j(21)])]), noop:c.action([c.wait(1), c.Pa])});
  gls2.fa.akane = new I.ia({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [j(60), d(1, 1, 1, r, v, c.offsetX(-16), c.offsetY(6), c.pa(k)), d(1, 1, 1, r, v, c.offsetX(16), c.offsetY(6), c.pa(k))]), j(120)])])});
  gls2.fa["nao-1"] = new I.ia({top:c.action([c.repeat(999, [j(30), c.fire(c.direction(0), t, D)])])});
  gls2.fa["nao-2"] = new I.ia({top:c.action([c.repeat(999, [j(30), d(2, -5, 5, t, D, c.offsetX(0), c.offsetY(0), c.pa(k))])])});
  gls2.fa["nao-3"] = new I.ia({top:c.action([c.repeat(999, [j(30), d(2, -1, 1, t, D, c.offsetX(0), c.offsetY(0), c.pa(k))])])});
  gls2.fa.reika = new I.ia({top:c.action([c.repeat(999, [j(60), c.fire(c.direction(0), n, A)])])});
  gls2.fa.aguri = new I.ia({top0:c.action([c.repeat(999, [j(30), d(3, -30, 30, r, G, c.offsetX(0), c.offsetY(0), c.pa(k))])]), top1:c.action([c.repeat(999, [j(30), d(3, -30, 30, r, v, c.offsetX(-64), c.offsetY(24), c.pa(k))])]), top2:c.action([c.repeat(999, [j(30), d(3, -30, 30, r, v, c.offsetX(-80), c.offsetY(10), c.pa(k))])]), top3:c.action([c.repeat(999, [j(30), d(3, -30, 30, r, v, c.offsetX(-90), c.offsetY(5), c.pa(k))])])});
  gls2.fa.miyuki_y = new I.ia({top:c.action([c.wait("40"), c.repeat(999, [j(30), d(3, -45, 45, r, v, c.offsetX(-64), c.offsetY(16), c.pa(k)), d(3, -45, 45, r, v, c.offsetX(0), c.offsetY(16), c.pa(k)), d(3, -45, 45, r, v, c.offsetX(16), c.offsetY(16), c.pa(k)), d(3, -45, 45, r, v, c.offsetX(32), c.offsetY(16), c.pa(k)), b(r, 0.001, 5, function(a) {
    return c.action([d(3, "-45", "+45", a, A, c.offsetX(0), c.offsetY(0))])
  })])])});
  gls2.fa.miyuki_t = new I.ia({top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(3, [a(3, -20, 20, n, A, c.offsetX(32), c.offsetY(32)), j(30)]), c.repeat(3, [a(3, -10, 10, n, A, c.offsetX(-32), c.offsetY(-32)), j(30)]), c.repeat(3, [a(3, -5, 5, n, A, c.offsetX(-16), c.offsetY(-16)), j(30)]), j(120)])]), top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [a(5, -30, 30, n, A, c.offsetX(-32), c.offsetY(32)), j(45)]), c.repeat(5, [a(5, -30, 30, n, A, c.offsetX(32), c.offsetY(32)), j(45)]), j(120)])])});
  gls2.fa.alice = new I.ia({top0:c.action([c.repeat(999, [a(8, 0, 180, r, A), a(8, 0, -180, r, A), j(60), a(9, 0, 180, r, D), a(9, 0, -180, r, D), j(60)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(5, "sequence"), r, B, c.offsetX(0), c.pa(k)), j(10)])]), top2:c.action([c.repeat(999, [c.fire(c.direction(10, "sequence"), p, K, c.offsetX(0), c.pa(k)), j(10)])])});
  gls2.fa.aliceLeaf = new I.ia({top:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(10, "sequence"), n(5), C, c.offsetX(0), c.pa(k)), j(10)])])});
  gls2.fa["honoka-1"] = new I.ia({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, C, c.offsetX(0), c.offsetY(30)), j(30), d(5, -40, 40, r, C, c.offsetX(0), c.offsetY(30)), j(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), u), d(3, -3, 3, p(1), u), d(4, -4, 4, p(1.4), u), d(5, -5, 5, p(1.8), u), j(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, r, B, c.offsetX(-110), c.offsetY(-70)), j(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, r, B, c.offsetX(110), 
  c.offsetY(-70)), j(30)])])});
  gls2.fa["nagisa-1-1"] = new I.ia({top0:c.action([j(90), c.repeat(3, [c.wa("way", "5 + $loop.index*6"), b(n, 0.01, "3 + $loop.index*2", function(a) {
    return c.action([d("$way", -110, 110, a, u, c.offsetX(-190), c.offsetY(-20)), d("$way", -110, 110, a, u, c.offsetX(190), c.offsetY(-20)), c.wait(10)])
  }), j(60)]), j(60)])});
  gls2.fa["nagisa-1-2"] = new I.ia({top0:c.action([c.repeat(12, [d(15, -90, 90, r, u), j(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [d(5, -65, -55, p, B, c.offsetX(-190), c.offsetY(-20)), d(5, -35, -25, p, B, c.offsetX(-190), c.offsetY(-20)), d(5, -5, 5, p, B, c.offsetX(-190), c.offsetY(-20)), d(5, 25, 35, p, B, c.offsetX(-190), c.offsetY(-20)), d(5, 55, 65, p, B, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), j(60), c.repeat(3, [d(5, -65, -55, p, B, c.offsetX(190), c.offsetY(-20)), d(5, -35, 
  -25, p, B, c.offsetX(190), c.offsetY(-20)), d(5, -5, 5, p, B, c.offsetX(190), c.offsetY(-20)), d(5, 25, 35, p, B, c.offsetX(190), c.offsetY(-20)), d(5, 55, 65, p, B, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), j(60)])])});
  gls2.fa["nagisa-1-3"] = new I.ia({top0:c.action([j(60), c.repeat(3, [c.fire(c.direction(-60), p, v, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [j(15), c.fire(c.direction(6, "sequence"), p, v, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([j(80), c.repeat(3, [c.fire(c.direction(60), p, v, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [j(15), c.fire(c.direction(-6, "sequence"), p, v, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [d(5, -60, -40, p, C, c.offsetX(-190), 
  c.offsetY(-20)), d(5, -20, -10, p, C, c.offsetX(-190), c.offsetY(-20)), d(5, 10, 20, p, C, c.offsetX(-190), c.offsetY(-20)), d(5, 40, 60, p, C, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), j(60), c.repeat(3, [d(5, -60, -40, p, C, c.offsetX(190), c.offsetY(-20)), d(5, -20, -10, p, C, c.offsetX(190), c.offsetY(-20)), d(5, 10, 20, p, C, c.offsetX(190), c.offsetY(-20)), d(5, 40, 60, p, C, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), j(60)])])});
  gls2.fa["nagisa-2-1"] = new I.ia({top0:c.action([j(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", r, F, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", r, F, c.offsetX(190), c.offsetY(-20)), j(10)])]), top1:c.action([j(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", p, D), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", p, D), j(12)])])});
  gls2.fa["nagisa-2-2"] = new I.ia({top0:c.action([j(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", n, D), j(12)])]), top1:c.action([j(120), c.repeat(6, [a(9, 150, 130, r(0.8), u), a(9, 172, 188, r(0.8), u), a(9, 210, 230, r(0.8), u), j(30), a(9, 170, 150, r(0.8), u), a(9, 190, 210, r(0.8), u), j(30)])])});
  gls2.fa["nagisa-2-3"] = new I.ia({top:c.action([j(120), c.repeat(12, [a(23, 0, 360, r, C, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, r, C), a(23, 0, 360, r, C, c.offsetX(190), c.offsetY(-20)), j(30)])])});
  gls2.fa["nagisa-3-1"] = new I.ia({top0:c.action([j(50), c.repeat(999, [b(n, 0.001, 5, function(a) {
    return c.action([d(41, "-180", "+180", a, A, c.offsetX(-190), c.offsetY(-20)), d(41, "-180", "+180", a, A, c.offsetX(190), c.offsetY(-20))])
  }), j(50)])]), top1:c.action([c.repeat(999, [d(2, -2, 0, t, u), j(10), d(2, 0, 2, t, u), j(150)])])});
  gls2.fa["mai-1"] = new I.ia({top0:c.action([j(50), c.repeat(50, [c.wa("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, F), c.Pa]))), c.wa("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, F), c.Pa]))), j(8)])]), top1:c.action([j(50), c.repeat(12, [a(5, -50, 50, q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, 
  D), c.Pa]))), a(5, -230, -130, q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Pa]))), j(16), a(6, -50, 50, q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Pa]))), a(6, -230, -130, q, z(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Pa]))), j(16)])])});
  gls2.fa["mai-2"] = new I.ia({top:c.action([j(50), c.repeat(15, [c.fire(c.direction(-10), A(c.na("fireChild", "$loop.index*10"))), j(8)])]), fireChild:c.action([j("40+$1"), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, v)
  }), c.Pa])});
  gls2.fa["saki-1-1"] = new I.ia({top:c.action([j(100), c.repeat(3, [c.na("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.wa("way", "$1"), c.repeat("30", [d("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, F), d("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, F), j(12)]), c.repeat("$2", [d(9, -20, 20, t, G)])])});
  gls2.fa["saki-1-2"] = new I.ia({top:c.action([j(100), c.repeat(5, [c.wa("way", "5+$loop.index*2"), c.repeat(6, [c.wa("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(d("$way", -30, 30, n("$s"), D, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), j(90)])])});
  gls2.fa["saki-1-3"] = new I.ia({top:c.action([c.wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.na("seed"))), j(8)]), j(60)]), seed:c.action([c.wait(10), c.Ye(c.speed(0), 50), c.wait(90), d(13, 0, 360 - 360 / 13, p, G), c.Pa])});
  gls2.fa["saki-2-1"] = new I.ia({top0:c.action([j(100), c.repeat(4, [d(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", p, F, c.offsetX(-40)), d(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", p, F, c.offsetX(40)), j(60), d(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", p, F, c.offsetX(-40)), d(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", p, F, c.offsetX(40)), j(60)])]), top1:c.action([j(100), c.repeat(4, [c.repeat(7, [c.wa("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  w, G), c.repeat(4, [c.wa("w", "$loop.count"), d("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", w("$w*-1.0"), G)])]), j(120)])])});
  gls2.fa["saki-2-2"] = new I.ia({top:c.action([j(60), c.wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), A(c.na("seed"))), j(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), A(c.na("seed"))), j(8)]), j(60)]), seed:c.action([c.wait(10), c.Ye(c.speed(0), "10 + $rand*15"), c.wait(65), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, v)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, v)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, v)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, v)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, v)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, v)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, v)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, v)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, v)])
  }), j(2), c.Pa])});
  gls2.fa["saki-2-3"] = new I.ia({top:c.action([j(60), c.wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.na("seed"))), j(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), D(c.na("seed"))), j(8)]), j(60)]), seed:c.action([c.wait(10), c.Ye(c.speed(0), "10 + $rand*20"), c.wait(65), b(n, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, G)])
  }), j(2), c.Pa])});
  gls2.fa["saki-3-1"] = new I.ia({top:c.action([c.fire(c.direction(180, "absolute"), H, A(c.na("seed"))), j(60), c.fire(c.direction(180, "absolute"), H, A(c.na("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), H, A(c.na("seed")), c.offsetX(80)), j(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, F), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, F), c.fire(c.direction(90, "sequence"), p, F), c.fire(c.direction(90, "sequence"), p, F), j(10), c.fire(c.direction(100, 
  "sequence"), p, F)])])});
  gls2.fa["saki-3-2"] = new I.ia({top:c.action([c.fire(c.direction(180, "absolute"), H, D(c.na("seed"))), j(60), c.fire(c.direction(180, "absolute"), H, D(c.na("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), H, D(c.na("seed")), c.offsetX(80)), j(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, u), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), j(10), c.fire(c.direction(80, 
  "sequence"), p, u)])])});
  gls2.fa["rikka-1"] = new I.ia({top:c.action([c.repeat(5, [c.wa("s", "$loop.index*1.5"), j(30), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, n("$s"), c.offsetX(90), c.offsetY(-20)), j(3), d(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, v, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, v, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, v, n("$s"), c.offsetX(90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, v, n("$s"), c.offsetX(90), c.offsetY(-20)), j(3), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, v, n("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.fa["rikka-2"] = new I.ia({top0:c.action([c.repeat(10, [c.fire(A(c.na("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(A(c.na("snow")), c.offsetX(90), c.offsetY(-20)), j(8)]), j(10)]), top1:c.action([c.repeat(35, [c.wa("d", "$loop.index*-(20+$ex*10)"), c.wa("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), z(c.na("ivs", "$d", "$s")))]), j(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), z(c.na("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.wa("d", "$loop.index*+(20+$ex*10)"), c.wa("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), z(c.na("ivs", "$d", "$s")))]), j(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), z(c.na("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.wa("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), z(c.na("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), z(c.na("snowArm")))])]), c.Pa]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), t, B), c.Pa]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), n("$2"), L), c.fire(c.direction("$1+1", "relative"), n("$2"), L), c.Pa()])});
  gls2.fa["rikka-3"] = new I.ia({top0:c.action([j(40), c.fire(c.direction(-10), z(c.na("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), H("$loop.index*0.5"), v, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), v, c.offsetX(-90), c.offsetY(-20))]), j(5)]), j(40)]), top1:c.action([j(40), c.fire(c.direction(-10), z(c.na("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), H("$loop.index*0.5"), v, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), v, c.offsetX(90), c.offsetY(-20))]), j(5)]), j(40)]), dummy:c.action([c.wait(1), c.Pa])});
  gls2.fa["mana-1-1"] = new I.ia({top0:c.action([c.na("winder", -1)]), top1:c.action([c.na("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), n, O, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [j(20), c.wa("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), n, O, c.offsetX("-145*$1"), c.offsetY(-5))])])]), top2:c.action([c.wait(60), j(300), c.repeat(7, [c.wa("s", "$loop.index"), c.repeat(5, [c.wa("ss", 
  "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, t("$ss"), G, c.offsetX(-30), c.offsetY(-30))]), j(5), c.repeat(5, [c.wa("ss", "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, t("$ss"), G, c.offsetX(30), c.offsetY(-30))]), j(20), c.repeat(5, [c.wa("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, w("$ss"), v, c.offsetX(30), c.offsetY(-30))]), j(5), c.repeat(5, [c.wa("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, w("$ss"), v, c.offsetX(-30), c.offsetY(-30))]), j(80)])])});
  gls2.fa["mana-1-2"] = new I.ia({top:c.action([c.repeat(5, [c.wa("i", "$loop.index"), c.wa("j", "1/($i+1) * 4"), b(n(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*(-3*$j)"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, G, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, G, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+3*$j)"), 
    a, v, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-3*$j)"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, G, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, v, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, G, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, v, c.offsetX(145), c.offsetY(-50)), 
    c.fire(c.direction("(12-$i)*(+3*$j)"), a, v, c.offsetX(145), c.offsetY(-50)), j(5)])
  }), j(60)])])});
  gls2.fa["mana-1-3"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-2-1"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-2-2"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-2-3"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-3-1"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-3-2"] = gls2.fa["mana-1-1"];
  gls2.fa.kanade = new I.ia({top0:c.action([c.repeat(999, [a(50, -176.4, 176.4, n, D, c.offsetY(-350)), j(42), a(50, -172.8, 180, n, D, c.offsetY(-350)), j(42)])]), top1:c.action([c.repeat(999, [d(5, -12, 12, t, A, c.offsetY(-350)), d(5, 78, 102, t, A, c.offsetY(-350)), d(5, 168, 192, t, A, c.offsetY(-350)), d(5, 258, 282, t, A, c.offsetY(-350)), j(57)])]), top2:c.action([c.repeat(999, [d(3, -3, 3, t(5), O, c.offsetY(-350)), j(37)])])});
  gls2.fa.rery = new I.ia({top:c.action([c.repeat(999, [j("180+$rand*120"), c.repeat(10, [c.fire(c.direction(-90), c.speed(2), z(c.na("fire", 90, "$loop.index"))), c.fire(c.direction(90), c.speed(2), z(c.na("fire", -90, "$loop.index")))])])]), fire:c.action([c.wait(3), c.fire(c.direction("$1", "relative"), w("$2"), G), c.Pa()])});
  gls2.fa.fary = new I.ia({top:c.action([c.repeat(999, [j("120+$rand*120"), c.repeat(3, [d(3, -30, 30, n, u), j(15)])])])});
  gls2.fa.sory = new I.ia({top:c.action([c.wa("d", "$rand<0.5 ? -5 : 5"), c.wa("s", "1+$rand*0.5"), c.repeat(999, [c.fire(c.direction("360/8+$d*$s", "sequence"), c.speed(2), z(c.na("fire"))), c.repeat(3, [c.fire(c.direction(90, "sequence"), c.speed(2), z(c.na("fire")))]), j(60)])]), fire:c.action([c.wait(2), c.fire(c.direction(0, "relative"), r, C), c.Pa()])});
  gls2.fa.lary = new I.ia({top0:c.action([c.fire(c.direction(0, "absolute"), c.speed(1), z(c.na("fire"))), c.repeat(999, [j(10), c.fire(c.direction(98, "sequence"), c.speed(1), z(c.na("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.na("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.na("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.na("fire")))])]), top1:c.action([c.fire(c.direction(47, "absolute"), c.speed(1), z(c.na("fire"))), c.repeat(999, [j(10), c.fire(c.direction(76, 
  "sequence"), c.speed(1), z(c.na("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.na("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.na("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), z(c.na("fire")))])]), fire:c.action([c.wait(5), c.fire(c.direction(-1, "relative"), p, L), c.fire(c.direction(1, "relative"), p, L), c.Pa()])});
  gls2.fa.shiry = new I.ia({top0:c.action([c.repeat(999, [c.wa("d", "$loop.index*-6"), c.repeat(23, [c.fire(c.direction(15, "sequence"), c.speed(1), z(c.na("ivs0", "$d")))]), j(30), c.fire(c.direction(16, "sequence"), c.speed(1), z(c.na("ivs0", "$d")))])]), ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, D), c.Pa()])});
  gls2.fa.dodory = new I.ia({top:c.action([c.repeat(999, [j("40+$rand*20"), b(t, -0.1, 3, function(a) {
    return c.action([c.fire(a, F)])
  })])])});
  gls2.fa["setsuna-1"] = new I.ia({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, C, c.offsetX(0), c.offsetY(30)), j(30), d(5, -40, 40, r, C, c.offsetX(0), c.offsetY(30)), j(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), u), d(3, -3, 3, p(1), u), d(4, -4, 4, p(1.4), u), d(5, -5, 5, p(1.8), u), j(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, r, B, c.offsetX(-110), c.offsetY(-70)), j(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, r, B, c.offsetX(110), 
  c.offsetY(-70)), j(30)])])});
  gls2.fa["love-1-1"] = new I.ia({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, C, c.offsetX(0), c.offsetY(30)), j(30), d(5, -40, 40, r, C, c.offsetX(0), c.offsetY(30)), j(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), u), d(3, -3, 3, p(1), u), d(4, -4, 4, p(1.4), u), d(5, -5, 5, p(1.8), u), j(110)])])});
  gls2.fa.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      P.push(gls2.Sa())
    }
    a = gls2.fa.Ze = tm.Eb.gd.me;
    a.Ig = function(a) {
      return!(a instanceof gls2.Sa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Kh = function(a) {
      var b = P.shift(0);
      if(b) {
        return b.ra = 50, M.push(b), b.setFrameIndex(a.frame === h ? 1 : a.frame), b.blendMode = "source-over", a.gc ? (b.scaleX = 1, b.scaleY = 1, b.ed = s) : (a.we ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Yb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.ed = k), b.visible = a.visible === s ? s : k, b.gc = !!a.gc, b.we = !!a.we, b.Yb = !!a.Yb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Qh = function(a) {
      return-0 <= a.x && 480 > a.x && -0 <= a.y && 640 > a.y
    };
    a.zd = 3;
    I.Ta.Xb.$rank = 0;
    I.Ta.Xb.$hyperOff = 1
  };
  gls2.fa.erase = function(a, b, c) {
    for(var d = [].concat(M), f = 0, i = d.length;f < i;f++) {
      if(a) {
        var j = gls2.Bh(!!b);
        j.setPosition(d[f].x, d[f].y);
        c && (j.ud = k)
      }
      d[f].za()
    }
  };
  gls2.fa.ke = function() {
    for(var a = [].concat(M), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Sa = tm.createClass({superClass:tm.display.Sprite, ra:0, gc:s, we:s, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      P.push(this);
      var a = M.indexOf(this);
      -1 !== a && M.splice(a, 1)
    })
  }, update:function() {
    this.gc && (this.rotation += 15)
  }, za:function() {
    var a = gls2.Sa.oe().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Sa.oe = function() {
    gls2.Sa.oe.vg === l && (gls2.Sa.oe.vg = gls2.Wa(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Sa.oe.vg.clone()
  };
  gls2.Sa.oe.vg = l;
  var P = [], M = gls2.Sa.wc = []
})();
gls2.ka = {};
gls2.ka.clamp = function(b, a, f) {
  return b < a ? a : b > f ? f : b
};
gls2.ka.DEG_TO_RAD = Math.PI / 180;
gls2.ka.RAD_TO_DEG = 180 / Math.PI;
gls2.ka.degToRad = function(b) {
  return b * gls2.ka.DEG_TO_RAD
};
gls2.ka.radToDeg = function(b) {
  return b * gls2.ka.RAD_TO_DEG
};
gls2.ka.rand = function(b, a) {
  return window.Math.floor(window.Math.random() * (a - b + 1)) + b
};
gls2.ka.randf = function(b, a) {
  return window.Math.random() * (a - b) + b
};
gls2.ka.magnitude = function() {
  return Math.sqrt(gls2.ka.magnitudeSq.apply(l, arguments))
};
gls2.ka.magnitudeSq = function() {
  for(var b = 0, a = 0, f = arguments.length;a < f;++a) {
    b += arguments[a] * arguments[a]
  }
  return b
};
gls2.ka.inside = function(b, a, f) {
  return b >= a && b <= f
};

