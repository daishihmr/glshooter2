/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(b) {
  throw b;
}
var h = void 0, j = !0, l = null, t = !1;
function E() {
  return function() {
  }
}
var H = {Qi:this};
(function() {
  function b(a, b) {
    for(var d = 0, i = a.length;d < i;d++) {
      if(a[d].label == b) {
        return a[d]
      }
    }
  }
  H.ia = function(a) {
    this.type = "none";
    this.root = this;
    this.mb = [];
    this.Xe = [];
    this.ef = [];
    if(a !== h) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof H.Pb ? this.mb.push(a[b]) : a[b] instanceof H.Qa ? this.Xe.push(a[b]) : a[b] instanceof H.Dd && this.ef.push(a[b]))
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
  H.ia.prototype.Xh = function(a) {
    return b(this.mb, a)
  };
  H.ia.prototype.Xj = function() {
    for(var a = [], b = 0, d = this.mb.length;b < d;b++) {
      var i = this.mb[b];
      i.label && 0 === i.label.indexOf("top") && (a[a.length] = i.label)
    }
    return a
  };
  H.ia.prototype.Mj = function(a) {
    var b;
    if(b = this.Xh(a)) {
      return b
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  H.ia.prototype.Nj = function(a) {
    return b(this.Xe, a)
  };
  H.ia.prototype.Oj = function(a) {
    var b;
    if(b = this.Nj(a)) {
      return b
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  H.ia.prototype.Pj = function(a) {
    return b(this.ef, a)
  };
  H.ia.prototype.Qj = function(a) {
    var b;
    if(b = this.Pj(a)) {
      return b
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  H.Qa = function() {
    this.root = this.label = l;
    this.direction = new H.Ic(0);
    this.speed = new H.Oc(1);
    this.mb = [];
    this.Xa = {};
    this.Ba = {}
  };
  H.Qa.prototype.clone = function(a) {
    var b = new H.Qa;
    b.label = this.label;
    b.root = this.root;
    b.mb = this.mb;
    b.direction = new H.Ic(a.fb(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new H.Oc(a.fb(this.speed.value));
    b.speed.type = this.speed.type;
    b.Xa = this.Xa;
    b.Ba = a.Ba;
    return b
  };
  H.Qa.prototype.bc = function(a) {
    this.root = a;
    for(var b = 0, d = this.mb.length;b < d;b++) {
      this.mb[b].bc(a)
    }
  };
  H.Ie = function(a) {
    this.root = l;
    this.label = a;
    this.jb = []
  };
  H.Ie.prototype.clone = function(a) {
    var b = a.Ba;
    a.Ba = a.mg(this.jb);
    var d = this.root.Oj(this.label).clone(a);
    a.Ba = b;
    return d
  };
  H.Ie.prototype.bc = function(a) {
    this.root = a
  };
  H.lb = function() {
    this.Fb = ""
  };
  H.lb.prototype.bc = function(a) {
    this.root = a
  };
  H.Pb = function() {
    this.Fb = "action";
    this.root = this.label = l;
    this.jc = [];
    this.jb = []
  };
  H.Pb.prototype = new H.lb;
  H.Pb.prototype.bc = function(a) {
    this.root = a;
    for(var b = 0, d = this.jc.length;b < d;b++) {
      this.jc[b].bc(a)
    }
  };
  H.Pb.prototype.clone = function() {
    var a = new H.Pb;
    a.label = this.label;
    a.root = this.root;
    a.jc = this.jc;
    return a
  };
  H.Bd = function(a) {
    this.Fb = "actionRef";
    this.label = a;
    this.root = l;
    this.jb = []
  };
  H.Bd.prototype = new H.lb;
  H.Bd.prototype.clone = function() {
    var a = new H.Pb;
    a.root = this.root;
    a.jc.push(this);
    return a
  };
  H.Dd = function() {
    this.Fb = "fire";
    this.Ga = this.speed = this.direction = this.root = this.label = l;
    this.Xa = new H.Me
  };
  H.Dd.prototype = new H.lb;
  H.Dd.prototype.bc = function(a) {
    this.root = a;
    this.Ga && this.Ga.bc(a)
  };
  H.Hf = function(a) {
    this.Fb = "fireRef";
    this.label = a;
    this.jb = []
  };
  H.Hf.prototype = new H.lb;
  H.Ke = function() {
    this.Fb = "changeDirection";
    this.direction = new H.Ic;
    this.Bb = 0
  };
  H.Ke.prototype = new H.lb;
  H.Le = function() {
    this.Fb = "changeSpeed";
    this.speed = new H.Oc;
    this.Bb = 0
  };
  H.Le.prototype = new H.lb;
  H.He = function() {
    this.Fb = "accel";
    this.Dc = new H.Jf;
    this.Hc = new H.kg;
    this.Bb = 0
  };
  H.He.prototype = new H.lb;
  H.Qe = function(a) {
    this.Fb = "wait";
    this.value = a || 0
  };
  H.Qe.prototype = new H.lb;
  H.jg = function() {
    this.Fb = "vanish"
  };
  H.jg.prototype = new H.lb;
  H.Oe = function() {
    this.Fb = "repeat";
    this.Ai = 0;
    this.action = l;
    this.jb = []
  };
  H.Oe.prototype = new H.lb;
  H.Oe.prototype.bc = function(a) {
    this.root = a;
    this.action && this.action.bc(a)
  };
  H.Cf = function(a, b) {
    this.Fb = "bind";
    this.Uk = a;
    this.Lj = b
  };
  H.Cf.prototype = new H.lb;
  H.Zf = function(a, b) {
    this.Fb = "notify";
    this.Ij = a;
    this.jb = b || l
  };
  H.Zf.prototype = new H.lb;
  H.Ni = new H.lb;
  H.Ic = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  H.Oc = function(a) {
    this.type = "absolute";
    this.value = a === h ? 1 : a
  };
  H.Jf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  H.kg = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  H.Me = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.ma = j;
    a.ma !== h && (this.ma = !!a.ma)
  };
  H.wh = function(a) {
    this.value = a || 0
  };
  H.xh = function(a) {
    this.value = a || 0
  };
  H.jh = function(a) {
    this.value = !!a
  }
})();
H.Ra = function(b) {
  this.Fh = b;
  this.Re = [];
  this.Wc = -1;
  this.ub = l;
  this.Ba = {}
};
H.Ra.prototype.next = function() {
  this.Wc += 1;
  if(this.ub !== l) {
    var b = this.ub.jc[this.Wc];
    if(b !== h) {
      if(b instanceof H.Pb) {
        return this.de(), this.ub = b, this.Ba = this.lg(), this.next()
      }
      if(b instanceof H.Bd) {
        return this.de(), this.ub = this.Fh.Mj(b.label), this.Ba = this.mg(b.jb), this.next()
      }
      if(b instanceof H.Oe) {
        return this.Ba.Rd = 0, this.Ba.li = this.fb(b.Ai) | 0, this.de(), this.ub = b.action.clone(), this.Ba = this.lg(), this.next()
      }
      if(b instanceof H.Dd) {
        var a = new H.Dd;
        a.Ga = b.Ga.clone(this);
        b.direction !== l && (a.direction = new H.Ic(this.fb(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new H.Oc(this.fb(b.speed.value)), a.speed.type = b.speed.type);
        a.Xa = new H.Me;
        a.Xa.offsetX = this.fb(b.Xa.offsetX);
        a.Xa.offsetY = this.fb(b.Xa.offsetY);
        a.Xa.ma = b.Xa.ma;
        return a
      }
      return b instanceof H.Hf ? (this.de(), this.ub = new H.Pb, this.ub.jc = [this.Fh.Qj(b.label)], this.Ba = this.mg(b.jb), this.next()) : b instanceof H.Ke ? (a = new H.Ke, a.direction.type = b.direction.type, a.direction.value = this.fb(b.direction.value), a.Bb = this.fb(b.Bb), a) : b instanceof H.Le ? (a = new H.Le, a.speed.type = b.speed.type, a.speed.value = this.fb(b.speed.value), a.Bb = this.fb(b.Bb), a) : b instanceof H.He ? (a = new H.He, a.Dc.type = b.Dc.type, a.Dc.value = this.fb(b.Dc.value), 
      a.Hc.type = b.Hc.type, a.Hc.value = this.fb(b.Hc.value), a.Bb = this.fb(b.Bb), a) : b instanceof H.Qe ? new H.Qe(this.fb(b.value)) : b instanceof H.jg ? b : b instanceof H.Cf ? (this.Ba["$" + b.Uk] = this.fb(b.Lj), H.Ni) : b instanceof H.Zf ? b : l
    }
    this.uj();
    if(this.ub === l) {
      return l
    }
    if((b = this.ub.jc[this.Wc]) && "repeat" == b.Fb) {
      this.Ba.Rd++, this.Ba.Rd < this.Ba.li && (this.de(), this.ub = b.action.clone(), this.Ba = this.lg())
    }
    return this.next()
  }
  return l
};
H.Ra.prototype.de = function() {
  this.Re.push({action:this.ub, cursor:this.Wc, scope:this.Ba});
  this.Wc = -1
};
H.Ra.prototype.uj = function() {
  var b = this.Re.pop();
  b ? (this.Wc = b.cursor, this.ub = b.action, this.Ba = b.scope) : (this.Wc = -1, this.ub = l, this.Ba = {})
};
H.Ra.prototype.fb = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Ba[b]) || (a = H.Ra.Wb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var f in H.Ra.Wb) {
    H.Ra.Wb.hasOwnProperty(f) && (a[f] = H.Ra.Wb[f])
  }
  for(f in this.Ba) {
    this.Ba.hasOwnProperty(f) && (a[f] = this.Ba[f])
  }
  a.$rand = Math.random();
  (f = this.Re[this.Re.length - 1]) && (a.$loop = {index:f.scope.Rd, count:f.scope.Rd + 1, first:0 === f.scope.Rd, last:f.scope.Rd + 1 >= f.scope.li});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
H.Ra.prototype.mg = function(b) {
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
H.Ra.prototype.lg = function() {
  var b = {}, a;
  for(a in this.Ba) {
    this.Ba.hasOwnProperty(a) && (b[a] = this.Ba[a])
  }
  return b
};
H.ia.prototype.Eg = function(b) {
  var a = new H.Ra(this);
  if(b = this.Xh(b)) {
    a.ub = b
  }
  return a
};
H.Qa.prototype.Eg = function() {
  var b = new H.Ra(this.root), a = new H.Pb;
  a.root = this.root;
  a.jc = this.mb;
  b.ub = a;
  b.Ba = this.Ba;
  return b
};
H.Ra.Wb = {};
H.Ha = function(b) {
  b = b || "";
  for(var a in H.Ha) {
    H.Ha.hasOwnProperty(a) && (H.Qi[b + a] = H.Ha[a])
  }
};
H.Ha.action = function(b) {
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
  var d = new H.Pb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof H.lb)
    }) && g(Error("argument type error.")), d.jc = b
  }else {
    a = 0;
    for(f = arguments.length;a < f;a++) {
      arguments[a] instanceof H.lb ? d.jc[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return d
};
H.Ha.oa = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("label is required."));
  d = new H.Bd(b);
  if(a instanceof Array) {
    d.jb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.jb.push(arguments[f])
    }
  }
  return d
};
H.Ha.Ga = function(b, a, f, d) {
  for(var i = 0, m = arguments.length;i < m;i++) {
    arguments[i] instanceof Function && (arguments[i] = arguments[i]())
  }
  m = new H.Qa;
  for(i = 0;i < arguments.length;i++) {
    arguments[i] instanceof H.Ic ? m.direction = arguments[i] : arguments[i] instanceof H.Oc ? m.speed = arguments[i] : arguments[i] instanceof H.Pb ? m.mb.push(arguments[i]) : arguments[i] instanceof H.Bd ? m.mb.push(arguments[i]) : arguments[i] instanceof Array ? m.mb.push(H.Ha.action(arguments[i])) : arguments[i] instanceof Object ? m.Xa = arguments[i] : "string" === typeof arguments[i] && (m.label = arguments[i])
  }
  return m
};
H.Ha.Yk = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("label is required."));
  d = new H.Ie(b);
  if(a instanceof Array) {
    d.jb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.jb.push(arguments[f])
    }
  }
  return d
};
H.Ha.fire = function(b, a, f, d) {
  for(var i = 0, m = arguments.length;i < m;i++) {
    arguments[i] instanceof Function && (arguments[i] = arguments[i]())
  }
  m = new H.Dd;
  for(i = 0;i < arguments.length;i++) {
    arguments[i] instanceof H.Ic ? m.direction = arguments[i] : arguments[i] instanceof H.Oc ? m.speed = arguments[i] : arguments[i] instanceof H.Qa ? m.Ga = arguments[i] : arguments[i] instanceof H.Ie ? m.Ga = arguments[i] : arguments[i] instanceof H.Me ? m.Xa = arguments[i] : arguments[i] instanceof H.wh ? m.Xa.offsetX = arguments[i].value : arguments[i] instanceof H.xh ? m.Xa.offsetY = arguments[i].value : arguments[i] instanceof H.jh && (m.Xa.ma = arguments[i].value)
  }
  m.Ga === h && g(Error("bullet (or bulletRef) is required."));
  return m
};
H.Ha.cl = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("label is required."));
  d = new H.Hf(b);
  if(a instanceof Array) {
    d.jb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.jb.push(arguments[f])
    }
  }
  return d
};
H.Ha.Zk = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("direction is required."));
  a === h && g(Error("term is required."));
  f = new H.Ke;
  f.direction = b instanceof H.Ic ? b : new H.Ic(b);
  f.Bb = a;
  return f
};
H.Ha.Ye = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("speed is required."));
  a === h && g(Error("term is required."));
  f = new H.Le;
  f.speed = b instanceof H.Oc ? b : new H.Oc(b);
  f.Bb = a;
  return f
};
H.Ha.Xk = function(b, a, f) {
  for(var d = 0, i = arguments.length;d < i;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  i = new H.He;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof H.Jf ? i.Dc = b : arguments[d] instanceof H.kg ? i.Hc = a : i.Bb = arguments[d]
  }
  i.Dc === h && i.Hc === h && g(Error("horizontal or vertical is required."));
  i.Bb === h && g(Error("term is required."));
  return i
};
H.Ha.wait = function(b) {
  for(var a = 0, f = arguments.length;a < f;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === h && g(Error("value is required."));
  return new H.Qe(b)
};
H.Ha.Oa = function() {
  return new H.jg
};
H.Ha.repeat = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("times is required."));
  a === h && g(Error("action is required."));
  d = new H.Oe;
  d.Ai = b;
  if(a instanceof H.Pb || a instanceof H.Bd) {
    d.action = a
  }else {
    if(a instanceof Array) {
      d.action = H.Ha.action(a)
    }else {
      for(var i = [], f = 1;f < arguments.length;f++) {
        i.push(arguments[f])
      }
      d.action = H.Ha.action(i)
    }
  }
  return d
};
H.Ha.wa = function(b, a) {
  return new H.Cf(b, a)
};
H.Ha.jl = function(b, a) {
  return new H.Zf(b, a)
};
H.Ha.direction = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("value is required."));
  f = new H.Ic(b);
  a !== h && (f.type = a);
  return f
};
H.Ha.speed = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("value is required."));
  f = new H.Oc(b);
  a && (f.type = a);
  return f
};
H.Ha.Dc = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("value is required."));
  f = new H.Jf(b);
  a && (f.type = a);
  return f
};
H.Ha.Hc = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === h && g(Error("value is required."));
  f = new H.kg(b);
  a && (f.type = a);
  return f
};
H.Ha.bl = function(b) {
  return new H.Me(b)
};
H.Ha.offsetX = function(b) {
  return new H.wh(b)
};
H.Ha.offsetY = function(b) {
  return new H.xh(b)
};
H.Ha.ma = function(b) {
  return new H.jh(b)
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
  tm.Eb.hd = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.Ch = a
  }, $e:function(a, b) {
    var d = this.Ch.Xj();
    if(b === h && 0 < d.length) {
      for(var f = [], r = 0, n = d.length;r < n;r++) {
        f[f.length] = this.Dh(a, d[r])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          p.yg == f.length && (p.ke = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, r = f.length;r--;) {
        f[r].uf = p
      }
      p.yg = 0;
      p.Nh = function() {
        this.yg++
      };
      p.yg = 0;
      p.ke = t;
      p.nf = j;
      p.stop = t;
      return p
    }
    return this.Dh(a, b)
  }, Dh:function(a, b) {
    function d() {
      if(!d.stop) {
        d.pa += 1;
        this.pa = d.pa;
        var a = d.Ze, b = d.tj;
        if(b) {
          if(d.pa < d.wg ? d.direction += d.Nd : d.pa === d.wg && (d.direction = d.Yc), d.pa < d.xg ? d.speed += d.Fe : d.pa === d.xg && (d.speed = d.Xd), d.pa < d.pg ? (d.yd += d.Ue, d.Ad += d.Ve) : d.pa === d.pg && (d.yd = d.Se, d.Ad = d.Te), this.x += Math.cos(d.direction) * d.speed * a.zd, this.y += Math.sin(d.direction) * d.speed * a.zd, this.x += d.yd * a.zd, this.y += d.Ad * a.zd, a.Ig(this)) {
            if(a.fd || this.fd) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.pa < d.Fi || d.ke)) {
              for(var f;f = d.Gi.next();) {
                switch(f.Fb) {
                  case "fire":
                    b.qj.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Fi = "number" === typeof f.value ? d.pa + f.value : 0 !== (a = ~~f.value) ? d.pa + a : d.pa + eval(f.value);
                    return;
                  case "changeDirection":
                    b.lj.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.mj.call(this, f, d);
                    break;
                  case "accel":
                    b.jj.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.rj.call(this, f)
                }
              }
              d.ke = j;
              d.uf ? d.uf.Nh() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.ke = j, d.uf ? d.uf.Nh() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Eb.hd.le, f;
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
    "string" === typeof b ? d.Gi = this.Ch.Eg(b) : b instanceof H.Qa ? d.Gi = b.Eg() : (window.console.error(a, b), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.tj = this;
    d.Ze = a;
    d.Fi = -1;
    d.ke = t;
    d.direction = 0;
    d.gi = 0;
    d.speed = 0;
    d.ii = 0;
    d.yd = 0;
    d.Ad = 0;
    d.Nd = 0;
    d.Yc = 0;
    d.wg = -1;
    d.Fe = 0;
    d.Xd = 0;
    d.xg = -1;
    d.Ue = 0;
    d.Se = 0;
    d.Ve = 0;
    d.Te = 0;
    d.pg = -1;
    d.pa = -1;
    d.stop = t;
    d.nf = j;
    return d
  }, pj:function(a) {
    function b() {
      b.stop || (this.x += b.Rh, this.y += b.Sh, b.Ze.Ig(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Eb.hd.le, f;
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
    b.stop = t;
    b.nf = j;
    return b
  }, qj:function(b, d, f, z) {
    if(this.vk === h || this.Gb) {
      var r = {label:b.Ga.label}, n;
      for(n in b.Ga.Xa) {
        r[n] = b.Ga.Xa[n]
      }
      if(r = d.Kh(r)) {
        z = (n = 0 === b.Ga.mb.length) ? z.pj(d) : z.$e(d, b.Ga);
        var p = this, s = {x:this.x + b.Xa.offsetX, y:this.y + b.Xa.offsetY};
        f.gi = z.direction = function(n) {
          var k = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? b.Xa.ma ? a(s, d.target) + k : a(p, d.target) + k : k - Math.PI / 2;
            case "absolute":
              return k - Math.PI / 2;
            case "relative":
              return f.direction + k;
            default:
              return f.gi + k
          }
        }(b.direction || b.Ga.direction);
        f.ii = z.speed = function(a) {
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
        r.x = s.x;
        r.y = s.y;
        n && (z.Rh = Math.cos(z.direction) * z.speed * d.zd, z.Sh = Math.sin(z.direction) * z.speed * d.zd);
        r.fd = !!r.fd;
        if(d.fd || r.fd) {
          r.rotation = (z.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, r.speed = z.speed
        }
        r.addEventListener("enterframe", z);
        d.Hh ? d.Hh.addChild(r) : this.parent && this.parent.addChild(r)
      }
    }
  }, lj:function(d, f, q) {
    var z = eval(d.direction.value) * Math.DEG_TO_RAD, r = eval(d.Bb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        q.Yc = a(this, d) + z;
        q.Nd = b(q.Yc - q.direction) / r;
        break;
      case "absolute":
        q.Yc = z - Math.PI / 2;
        q.Nd = b(q.Yc - q.direction) / r;
        break;
      case "relative":
        q.Yc = q.direction + z;
        q.Nd = b(q.Yc - q.direction) / r;
        break;
      case "sequence":
        q.Nd = z, q.Yc = q.direction + q.Nd * (r - 1)
    }
    q.wg = q.pa + r
  }, mj:function(a, b) {
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
    b.xg = b.pa + f
  }, jj:function(a, b) {
    var d = eval(a.Bb);
    b.pg = b.pa + d;
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
  }, rj:function(a) {
    var b = tm.event.Event(a.Ij);
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
  tm.Eb.Ej = function(a) {
    var b = tm.app.Sprite(f, 8, 8);
    b.label = a.label;
    return b
  };
  var d = l;
  tm.Eb.Qh = function(a) {
    if(d === l) {
      if(!a.getRoot().app) {
        return j
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Eb.$k = function() {
    return j
  };
  tm.Eb.hd.le = {Kh:tm.Eb.Ej, Ig:tm.Eb.Qh, rl:0, fd:t, zd:2, target:l};
  H.ia.prototype.$e = function(a) {
    return tm.Eb.hd(this).$e(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(E());
tm.main(function() {
  gls2.Ri("#canvas2d");
  gls2.core.run()
});
gls2.Ri = tm.createClass({superClass:tm.display.CanvasApp, qe:0, bk:0, dk:0, ck:0, $j:0, ak:l, he:3, xd:3, Th:1, ba:l, init:function(b) {
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
    this.sj();
    return gls2.TitleScene()
  }.bind(this)}))
}, Lh:function() {
  var b = window.achevements, a = tm.asset.AssetManager.get("achevements").data;
  return!b ? 0 : Math.floor(b.reduce(function(b, d) {
    return a[d] ? b + K[a[d].grade] : b
  }, 0))
}, update:function() {
  for(var b = [].concat(this.hh), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.hh.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, sj:function() {
  gls2.ya.setup(12345);
  "tex1 tex2 tex3 tex4 tex5 tex_tank1 yotsubaLeaf kanade-cannon".split(" ").forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawTexture(a, 0, 0);
    f = f.getBitmap();
    f.filter({calc:function(a, b, d, f, r) {
      r.setPixelIndex(b, a[0], 0, 0)
    }});
    var d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawBitmap(f, 0, 0);
    tm.asset.AssetManager.set(b + "Red", d)
  });
  gls2.fa.setup();
  gls2.na.setup();
  this.ba = gls2.ab()
}, al:function() {
  this.stop()
}, ki:t, Yg:function(b, a) {
  var f = {score:Math.floor(this.ba.score), stage:this.ba.Jb + 1, continueCount:this.ba.Qc, shipType:this.ba.da.type, shipStyle:this.ba.da.style, fps:0, screenShot:this.ba.Ud};
  b ? (f.userName = b, this.ki = t) : this.ki = j;
  tm.util.Ajax.load({url:"/api/ranking/post", data:f, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        a(l, j, b.scoreId)
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
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.Wj())
              }
              b !== l && (b = b.substring(0, 10), this.Yg(b + " (\u533f\u540d)", a))
            }else {
              a(l, t)
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
}, Wj:function() {
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
gls2.Rc = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.ab.ae && gls2.ab.ae.xe(0)
};
var N = [1E9, 1E10], Q = [3, 2, 1], R = [6, 4, 2], S = [1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], K = [0.1, 0.4, 1];
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.yh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Va:0, Ac:j, fe:j, ib:t, ba:l, speed:0, Mb:l, Md:l, ni:l, kf:l, Yb:l, Fg:l, yc:l, Gg:l, Hg:l, frame:0, init:function(a, d, i) {
    this.superInit("fighter", 64, 64);
    this.ba = a;
    this.type = d;
    this.style = i;
    tm.Eb.hd.le.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Md = this.ni = gls2.Ah(d, 100);
    this.kf = gls2.Ah(3, 100);
    this.Yb = gls2.vh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Yb.visible = t;
    this.oj();
    this.Mb = this.nj();
    1 === this.style && (this.Mb = [this.Mb[1], this.Mb[2]]);
    this.yc = tm.display.CanvasElement().addChildTo(this);
    d = 0;
    for(i = this.Mb.length;d < i;d++) {
      var m = this.Mb[d];
      gls2.Ii(this, m).setPosition(m.x, m.y).addChildTo(this.yc)
    }
    this.jk = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.jk.blendMode = "lighter";
    this.Gg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Gg.blendMode = "lighter";
    this.Gg.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Ua && !a.Ja
    };
    this.Hg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Hg.blendMode = "lighter";
    this.Hg.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Ua && !a.Ja
    };
    this.re = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.re.blendMode = "lighter";
    this.re.rotation = -90;
    this.re.strokeStyle = "rgba(180,180,255,0.4)";
    this.re.update = function() {
      this.visible = a.Ja
    };
    this.re.draw = function(b) {
      b.lineCap = "round";
      var d = a.Pd / 800;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, t);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, t);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, t)
    };
    this.ek = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.ek.update = function() {
      this.visible = a.Ja
    };
    b === l && (b = gls2.kh(this.ba.ja))
  }, nj:function() {
    if(0 === this.type) {
      return[{x:0, rd:0, y:40, d:0, cc:j, Ub:-0.7, v:j}, {x:0, rd:0, y:40, d:0, cc:j, Ub:0.5, v:j}, {x:0, rd:0, y:40, d:0, cc:j, Ub:-0.5, v:j}, {x:0, rd:0, y:40, d:0, cc:j, Ub:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, cc:t, Ub:-0.7, v:j}, {x:-40, y:40, d:0.1, cc:t, Ub:-0.5, v:j}, {x:40, y:40, d:0.1, cc:j, Ub:0.5, v:j}, {x:70, y:20, d:0.1, cc:j, Ub:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, cc:t, Ub:-0.7, v:j}, {x:-30, y:20, d:0.4, cc:t, Ub:-0.5, v:j}, {x:30, y:20, d:0.4, cc:j, Ub:0.5, v:j}, {x:60, y:40, d:0.6, cc:j, Ub:0.7, v:j}]
    }
  }, oj:function() {
    this.Fg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Fg.setFrameIndex(5);
    this.Fg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, cd:-1, Od:t, Vb:t, update:function(f) {
    this.visible = this.ib ? 0 === f.frame / 2 % 2 : j;
    var d = f.keyboard;
    if(this.Ac) {
      var i = d.getKeyAngle();
      i !== l && (i = a[i], this.x += i.x * this.speed * (this.Vb ? 0.5 : 1), this.y += i.y * this.speed * (this.Vb ? 0.5 : 1));
      this.x = gls2.ka.clamp(this.x, 15, 465);
      this.y = gls2.ka.clamp(this.y, 15, 625);
      var m = d.getKey("c") && this.fe, i = d.getKey("z") && this.fe;
      this.cd = m ? this.cd + 1 : this.cd - 1;
      this.cd = gls2.ka.clamp(this.cd, -1, 10);
      this.Vb = i && m || 10 === this.cd;
      m = this.ba.Ja ? 3 : 5;
      this.Od = !this.Vb && (0 <= this.cd || i) && 0 === f.frame % m;
      i && (this.cd = 0);
      this.Yb.x = this.x;
      this.Yb.y = this.y - 40;
      d.getKeyDown("x") && this.fe && (0 < this.ba.Ua && !this.ba.Ja ? (this.ba.Jk(), gls2.ij(this).addChildTo(this.ba)) : !this.ba.Qd && 0 < this.ba.hc && (this.Fc = gls2.ka.clamp(this.Fc - 2, 0, 1), this.ba.qg(-0.02), gls2.lh(this, this.ba).setPosition(gls2.ka.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ba), gls2.core.va("bomb1")))
    }else {
      this.Vb = this.Od = t
    }
    this.Od && (i = Math.sin(0.2 * f.frame), m = this.Md.fire(this.x - 7 - 6 * i, this.y - 5, -90), m !== l && m.addChildTo(this.ba), m = this.Md.fire(this.x + 7 + 6 * i, this.y - 5, -90), m !== l && m.addChildTo(this.ba));
    if(this.Vb) {
      i = 0;
      for(m = this.Mb.length;i < m;i++) {
        this.Mb[i].v = t
      }
      this.yc.rotation = 0
    }else {
      this.Yb.visible = t;
      i = 0;
      for(m = this.Mb.length;i < m;i++) {
        this.Mb[i].v = j
      }
    }
    this.Dj(d);
    this.kj(d, f.frame);
    0 === f.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ba), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ba));
    this.frame = f.frame
  }, td:function() {
    this.Vb = this.Od = t;
    this.ba.af();
    this.ba.nb = 0;
    this.ba.gb = 0;
    this.ba.Na = 0
  }, Dj:function(a) {
    if(0 === this.type) {
      for(a = this.Mb.length;this.Mb[--a] !== h;) {
        var b = this.Mb[a];
        0 === a ? b.x = b.rd + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.rd + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.rd + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.rd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.yc, b.rotation = this.Vb ? 0 : this.Ac && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Ac && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, kj:function(a, b) {
    this.Ac && a.getKey("left") ? this.Va = gls2.ka.clamp(this.Va - 0.2, -3, 3) : this.Ac && a.getKey("right") ? this.Va = gls2.ka.clamp(this.Va + 0.2, -3, 3) : 0 > this.Va ? this.Va = gls2.ka.clamp(this.Va + 0.2, -3, 3) : 0 < this.Va && (this.Va = gls2.ka.clamp(this.Va - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Va) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Va) : 2 === this.type && this.setFrameIndex(31 + ~~this.Va);
    return b
  }});
  gls2.Ii = tm.createClass({superClass:tm.display.AnimationSprite, pd:l, da:l, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.pd = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.cc ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.pd.v) {
      this.x = this.pd.x * (this.da.ba.Ja ? 1.5 : 1);
      this.y = this.pd.y * (this.da.ba.Ja ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.pd.d * this.pd.Ub);
      var d = this.parent.localToGlobal(this);
      this.pd.v && 0 === a.frame % 2 && b.clone(40).setPosition(d.x, d.y).addChildTo(this.da.ba);
      this.da.Od && (d = this.da.Md.fire(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== l && d.addChildTo(a.ba))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  gls2.Id = tm.createClass({superClass:tm.display.Sprite, speed:0, nd:0, zj:1, ci:0, ob:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.nd = 1;
    b === l && (b = gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== h && this.Ee(a)
  }, update:function() {
    this.x += this.Tc;
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
  gls2.Id.je = function() {
    for(var b = [].concat(a), d = 0, i = b.length;d < i;d++) {
      b[d].remove()
    }
  };
  var a = gls2.Id.wc = [];
  gls2.Ah = tm.createClass({bd:l, bi:t, init:function(b, d) {
    this.bi = 3 === b;
    this.bd = [];
    for(var i = 0;i < d;i++) {
      var m = gls2.Id(b), q = this;
      m.addEventListener("added", function() {
        this.ra = 10;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        q.bd.push(this)
      });
      this.bi && m.addEventListener("enterframe", function(a) {
        this.setScale((this.zj + this.ci) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.bd.push(m)
    }
  }, fire:function(a, b, i) {
    var m = this.bd.pop();
    if(m === h) {
      return l
    }
    var q = gls2.ka.degToRad(i);
    m.Tc = Math.cos(q) * m.speed;
    m.oc = Math.sin(q) * m.speed;
    m.setPosition(a, b);
    m.rotation = i + 90;
    return m
  }, Vd:function(a) {
    for(var b = this.bd.length;this.bd[--b] !== h;) {
      this.bd[b].nd = 1 + 0.1 * a, this.bd[b].ci = 0.2 * a
    }
  }})
})();
gls2.vh = tm.createClass({superClass:tm.display.Sprite, da:l, ba:l, vc:0, frame:0, zi:l, color:l, Ih:0, sg:0, Aj:t, head:l, Yh:l, xc:l, ob:j, nd:1, Sd:l, init:function(b, a) {
  this.da = b;
  this.ba = b.ba;
  this.Ih = 0 === this.da.style ? 1 : 1.2;
  this.sg = 0 === this.da.style ? 50 : 75;
  var f = this;
  this.zi = a;
  this.superInit(a.redBody, this.sg, 100);
  this.boundingHeightBottom = 1;
  this.tl = 0;
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
  this.Ee(["red", "green", "blue"][this.da.type]);
  this.Vd(0)
}, Ee:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.zi[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.xc.gotoAndPlay(this.color);
  this.Yh.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Sd = l;
  return this
}, Vd:function(b) {
  this.boundingWidth = this.width = this.sg + 30 * b / 10;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.nd = 1 * this.Ih + 0.25 * b;
  0 === b ? this.Ee(["red", "green", "blue"][this.da.type]) : this.Ee("hyper")
}, gf:function(b, a) {
  this.Sd === l && this.Oh();
  a = a || this.vc;
  for(var f = 0;f < b;f++) {
    var d = this.Sd.clone().setPosition(this.x, a).addChildTo(this.ba), i = gls2.ka.randf(8, 14), m = gls2.ka.randf(0, Math.PI);
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
}, Sj:function(b, a, f) {
  this.Sd === l && this.Oh();
  for(var d = 0;d < b;d++) {
    var i = this.Sd.clone().setPosition(a, f).addChildTo(this.ba), m = gls2.ka.randf(12, 20), q = gls2.ka.randf(0, Math.PI);
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
  this.Sd = "hyper" === this.color ? gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.da.Vb) ? (this.vc = Math.max(0, this.vc - 40), this.height = this.y - this.vc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.vc = this.y - 40;
  this.Aj = this.visible
}, draw:function(b) {
  var a = this.srcRect, f = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(f, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, el:function() {
  return this.vc
}, Ck:function(b) {
  this.vc = b;
  this.head.update()
}});
gls2.vh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.vc
});
(function() {
  gls2.lh = tm.createClass({superClass:tm.app.Object2D, ob:j, ba:l, init:function(a, f) {
    this.superInit();
    this.da = a;
    this.ba = f;
    this.ti = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.ti.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.ti));
    this.Gh();
    b === l && (b = gls2.Wa(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.pa = 0;
    this.Ae = 1;
    this.addEventListener("added", function() {
      this.ba.Qd = j;
      this.da.ib = j;
      this.ba.hc -= 1;
      this.ba.mf = t;
      this.ba.af();
      this.ba.yb("drop BOMBER!!", j);
      gls2.sa("bomb");
      gls2.sa("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ba.Qd = t;
      this.da.ib = t
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
      var f = this.a * this.Ae + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.pa;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.pa += 3.6, this.Ae = -1) : (this.b = 8, this.pa += 1.8, this.Ae = 1)
  }});
  gls2.Vk = tm.createClass({superClass:gls2.lh, init:function(a, b) {
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
      var f = this.a * this.Ae + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.pa;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.pa += 1.8, this.Ae = 1)
  }});
  var b = l
})();
gls2.Ji = tm.createClass({superClass:tm.display.Sprite, Tc:0, oc:0, da:l, pa:0, init:function(b, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.da = f;
  this.oc = 1;
  this.Tc = 0.5 > gls2.ya.random() ? -1 : 1;
  this.pa = 0
}, update:function() {
  this.x += this.Tc;
  this.y += 2 * this.oc;
  if(2025 > gls2.Rc(this, this.da)) {
    this.da.ba.wj(1), this.remove()
  }else {
    if(3E3 > this.pa) {
      if(30 > this.x || 450 < this.x) {
        this.Tc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.oc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.pa += 1
}});
gls2.Pi = tm.createClass({superClass:tm.display.Sprite, Tc:0, oc:0, da:l, pa:0, init:function(b, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var d = -1;1 >= d;d++) {
    for(var i = -1;1 >= i;i++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(d, i).addChildTo(this)
    }
  }
  this.setPosition(b, a);
  this.da = f
}, update:function() {
  this.y += 0.5;
  4096 > gls2.Rc(this, this.da) && (this.da.ba.Uh(), gls2.core.va("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.na = {};
gls2.na.setup = function() {
  gls2.Hj = {};
  gls2.na.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.Hj.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.na.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.na.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.na.particle16 = gls2.Wa(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.na.gf = function(b, a, f) {
  b = gls2.na.particle16.clone().setPosition(b, a);
  b.ob = j;
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
gls2.na.Dg = function(b, a, f, d) {
  d = d || 1.8;
  var i = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  i.ob = j;
  i.addChildTo(f);
  i.image = gls2.na.shockwaveImage;
  i.tweener.clear().to({scaleX:d, scaleY:d, alpha:0}, 800, "easeOutQuad").call(function() {
    i.remove()
  })
};
gls2.na.Uj = function(b, a, f) {
  var d = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  d.ob = j;
  d.addChildTo(f);
  d.image = gls2.na.shockwaveImage;
  d.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
};
gls2.na.Tj = function(b, a, f) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.ob = j;
  b.addChildTo(f);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.na.cf = function(b, a, f, d) {
  gls2.sa("explode");
  var i = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  i.ob = j;
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
  gls2.na.Dg(b, a, f)
};
gls2.na.Kj = function(b, a, f) {
  gls2.sa("explode");
  var d = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.ob = j;
  d.addChildTo(f);
  d = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.ob = j;
  d.addChildTo(f);
  d = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.ob = j;
  d.addChildTo(f)
};
gls2.na.hb = function(b, a, f) {
  gls2.sa("explode2");
  gls2.sa("explode3");
  for(var d = ~~(Math.random() * gls2.Vc.noise.length), i = 0;20 > i;i++) {
    var m = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Vc.noise.at(~~(gls2.Vc.noise.length * i / 20) + d), 2);
    m.ob = j;
    m.addChildTo(f)
  }
  gls2.na.Dg(b, a, f, 5)
};
gls2.na.oe = function(b, a, f) {
  gls2.sa("explode2");
  gls2.sa("explode3");
  for(var d = ~~(Math.random() * gls2.Vc.noise.length), i = 0;20 > i;i++) {
    for(var m = 2 * Math.PI * i / 20, q = Math.pow(gls2.Vc.noise.at(~~(gls2.Vc.noise.length * i / 20) + d), 2), z = 0;3 > z;z++) {
      var r = 4 * q * (z + 1), n = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.pa += 1
      }).setScale(0.3 * (3 - z)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      n.rotation = 2 * Math.random() * Math.PI;
      n.ob = j;
      n.pa = 0;
      n.a = m;
      n.v = r;
      n.addChildTo(f)
    }
  }
};
gls2.Gf = tm.createClass({superClass:tm.app.Object2D, target:l, mc:0, angle:0, alpha:2, ob:j, reverse:t, init:function(b, a) {
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
gls2.ij = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, ob:j, init:function(b) {
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
}, ll:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.alpha = 576 < gls2.core.ba.da.y ? 0.1 : 1;
  this.label.x -= 2;
  -960 > this.label.x && this.remove()
}});
gls2.$i = tm.createClass({superClass:tm.graphics.Canvas, ba:l, Ld:l, Ab:l, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ba = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Ld = gls2.Ki(200);
  this.Ab = gls2.zh(this)
}, update:function() {
  this.clear();
  this.ba.ic !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Ab.Cc - 20, 470 * this.ba.ic.ra / this.ba.ic.Zc, 20), this.strokeRect(5, this.Ab.Cc - 20, 470, 20), this.clear(263.5, this.Ab.Cc - 20 + 2, 2, 16), this.clear(52, this.Ab.Cc - 20 + 2, 2, 16));
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
  this.fillText(b + "x " + (~~(this.ba.Na / 1E3) + 1), this.Ab.pe + 192, 22);
  b = [0, 1, 4][this.ba.da.type];
  for(a = 0;a < this.ba.gd - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * H.Ra.Wb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ba.te + " hit", this.Ab.pe + 10, 95);
  0 < ~~this.ba.Na && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ba.Na + " HIT!!", 10, 0.5 * -this.Ab.Cc + 115));
  0 === this.frame % 2 && (!this.ba.Ja && 0 < this.ba.Ua ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ba.Ua, 5, 637)) : this.ba.Ja && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ba.sd, 5, 637)));
  for(a = 0;a < this.ba.hc;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ba.mf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Ld.update();
  this.Ld.Xg = this.Ab.Cc + 5;
  this.Ld.draw(this);
  this.frame += 1
}});
gls2.zh = tm.createClass({superClass:tm.app.Object2D, Ob:l, pe:0, Cc:0, init:function(b) {
  this.superInit();
  this.Ob = b
}});
(function() {
  var b = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.Si = tm.createClass({superClass:tm.graphics.Canvas, Ca:l, Nb:l, $b:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ca = gls2.Ti();
    this.Ca.ja = this;
    this.Ca.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Nb = [];
    this.$b = [];
    for(var a = 0;5 > a;a++) {
      this.Nb[a] = 40 * b[a], this.$b[a] = this.Nb[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Ca.Da = Math.cos(this.Ca.direction) * this.Ca.speed;
    this.Ca.Ea = Math.sin(this.Ca.direction) * this.Ca.speed;
    for(var b = 0;5 > b;b++) {
      for(this.Ca.kc[b] += this.Ca.Da * Math.pow(0.8, b);3 * this.Nb[b] < this.Ca.kc[b];) {
        this.Ca.kc[b] -= 3 * this.Nb[b]
      }
      for(;this.Ca.kc[b] < 3 * -this.Nb[b];) {
        this.Ca.kc[b] += 3 * this.Nb[b]
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
      for(var f = 0, d = this.Ca.kc[a] - 3 * this.Nb[a];d < 480 + 3 * this.Nb[a];d += 1.5 * this.Nb[a]) {
        for(var f = 0 === f ? this.$b[a] : 0, i = this.Ca.lc[a] - 2 * this.$b[a] + f;i < 640 + 2 * this.$b[a];i += 2 * this.$b[a]) {
          this.line(d, i, d + this.Nb[a], i), this.line(d, i, d - this.Nb[a] / 2, i + this.$b[a]), this.line(d, i, d - this.Nb[a] / 2, i - this.$b[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.Ti = tm.createClass({superClass:tm.app.Object2D, kc:0, lc:0, direction:0, speed:0, Da:0, Ea:0, background:l, init:function() {
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
gls2.ig = tm.createClass({superClass:tm.display.Sprite, fi:t, ba:l, da:l, $c:t, vd:t, eh:t, Da:0, Ea:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.fi = b) && this.setScale(2, 2);
  this.ba = gls2.ab.ae;
  this.da = this.ba.da;
  this.addChildTo(this.ba);
  b = 0.5 * gls2.ya.random() * Math.PI - 0.75 * Math.PI;
  this.Da = 30 * Math.cos(b);
  this.Ea = 30 * Math.sin(b)
}, update:function() {
  this.da.Vb && (this.vd = j);
  if(this.da.parent === l) {
    this.vd = t
  }else {
    if(100 > gls2.Rc(this, this.da)) {
      this.ba.lk(this);
      this.remove();
      return
    }
    1E4 > gls2.Rc(this, this.da) && (this.vd = j);
    if(this.eh && this.vd) {
      var b = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.eh || (this.x += this.Da, this.y += this.Ea, this.Da *= 0.8, this.Ea *= 0.8, -1 < this.Da && (1 > this.Da && -1 < this.Ea && 1 > this.Ea) && (this.eh = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.Bh = tm.createClass({superClass:gls2.ig, $c:t, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.hj = tm.createClass({superClass:gls2.ig, $c:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.vd || (this.x += this.ba.ja.Da, this.y += this.ba.ja.Ea);
  this.superClass.prototype.update.call(this)
}});
gls2.kd = tm.createClass({da:l, ba:l, $:l, frame:0, init:function(b) {
  this.ba = b;
  this.da = b.da;
  this.Wd();
  this.$ = gls2.gj();
  this.frame = 0
}, Wd:E(), update:function() {
  this.Jj(this.frame);
  this.frame += 1
}, Jj:function(b) {
  b = this.$.get(b);
  if(b !== l) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.oh[b.value] !== h) {
        var a = gls2.oh[b.value];
        if(a !== l) {
          if(a[0].ic === j) {
            this.Pa(a[0])
          }else {
            for(var f = 0;f < a.length;f++) {
              var d = this.Pa(a[f]);
              b.stop && d.addEventListener("enemyconsumed", function() {
                this.$.Yd = t
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Pa:function(b) {
  this.ba.bf += 1;
  b = b.Yj(this.ba, b.Gk).setPosition(b.x, b.y).addChildTo(this.ba);
  b.Ia = this;
  b.we();
  return b
}, ee:function(b) {
  gls2.df();
  this.ba.me = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), f = -4;4 >= f;f++) {
    for(var d = -4;4 >= d;d++) {
      var i = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(f, d);
      i.pa = 0;
      i.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.pa) + 0.5;
        this.pa += 1
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
gls2.kd.create = function(b, a) {
  switch(a) {
    case 0:
      return gls2.bj(b);
    case 1:
      return gls2.cj(b);
    case 2:
      return gls2.dj(b);
    case 3:
      return gls2.ej(b);
    case 4:
      return gls2.fj(b);
    default:
      g(Error("stageNumber = " + a))
  }
};
gls2.gj = tm.createClass({index:0, data:l, Yd:t, init:function() {
  this.data = {}
}, add:function(b, a, f) {
  this.index += b;
  this.data[this.index] = {stop:f, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === h ? l : b.stop === j ? (this.Yd = j, b) : this.Yd ? l : b
}});
gls2.bj = tm.createClass({superClass:gls2.kd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Ib("bgm1", j);
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
    this.ba.ja.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.ee(function() {
      gls2.Ib("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, Wd:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.cj = tm.createClass({superClass:gls2.kd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Ib("bgm2", j);
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
  this.$.add(1, "mai", j);
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
    this.ee(function() {
      gls2.Ib("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ba.ja.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Wd:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.dj = tm.createClass({superClass:gls2.kd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Ib("bgm3", j);
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.speed = 2;
    this.ba.ja.tweener.clear().to({speed:5}, 4E3, "easeInOutQuad")
  });
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
  this.$.add(60, "akane-left");
  this.$.add(60, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(120, "akane-center");
  this.$.add(60, "akane-left");
  this.$.add(60, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(240, "akane-center");
  this.$.add(60, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
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
    this.ba.ja.tweener.clear().to({speed:4, direction:0}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "miyuki-1");
  this.$.add(60, "reika1-right");
  this.$.add(180, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(120, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, function() {
    this.ba.ja.tweener.clear().to({speed:5}, 3E3, "easeInOutQuad")
  });
  this.$.add(120, "komachi3-0");
  this.$.add(60, "reika1-left");
  this.$.add(60, "reika1-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(120, "madoka-1");
  this.$.add(120, "reika1-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(120, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:3, direction:0.2 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "komachi3-1");
  this.$.add(120, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-right");
  this.$.add(60, "madoka-0");
  this.$.add(120, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(60, "madoka-0");
  this.$.add(180, "madoka-1");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:7}, 2E3, "easeInOutQuad")
  });
  this.$.add(300, "higashi", j);
  this.$.add(1200, E());
  for(b = 0;4 > b;b++) {
    this.$.add(90, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:2, direction:0.5 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "komachi3-1");
  this.$.add(240, "komachi3-0");
  this.$.add(120, "alice");
  this.$.add(600, E());
  for(b = 0;5 > b;b++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(120, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(120, "heri1-left");
  this.$.add(60, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(60, "komachi3-0");
  this.$.add(120, "akane-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(120, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(60, "madoka-1");
  this.$.add(120, "akane-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(120, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(120, "akane-left");
  this.$.add(120, "heri1-left");
  this.$.add(60, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(180, "komachi3-1");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(120, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(120, "akane-right");
  this.$.add(120, "heri1-left");
  this.$.add(60, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(180, "madoka-0");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(80, "erika");
  this.$.add(300, function() {
    this.ee(function() {
      gls2.Ib("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:8, direction:Math.PI / 2}, 5E3, "easeInOutQuad")
  });
  this.$.add(480, "momozono")
}, Wd:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.ej = tm.createClass({superClass:gls2.kd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Ib("bgm4", j);
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
  this.$.add(1, "rikka", j);
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
    this.ee(function() {
      gls2.Ib("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Wd:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.fj = tm.createClass({superClass:gls2.kd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Ib("bgm5", j);
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.speed = 1;
    this.ba.ja.ul = j
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
    this.ee(function() {
      gls2.Ib("bgmBoss", j)
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
    return t
  }
  var f = b.x + b.boundingWidthRight, d = b.y - b.boundingHeightTop, i = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, q = a.y - a.boundingHeightTop, z = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && f > m && d < z && i > q
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Lk:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.ud(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.Mi = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:t, title:l, selections:[], description:l, box:l, cursor:l, Pg:l, _selected:0, _opened:t, _finished:t, init:function(b, a, f) {
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
    i.interactive = j;
    i.addEventListener("touchend", function() {
      d._selected === f ? d.closeDialog(d._selected) : d._selected = f
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Pg !== l && this.parent.Pg(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.sa("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.ka.clamp(this._selected, 0, this.selections.length - 1), gls2.sa("select")) : 
  b.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.ka.clamp(this._selected, 0, this.selections.length - 1), gls2.sa("select")))
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
}, ud:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function T(b, a, f, d, i) {
  i = {}.$extend({menuDescriptions:[].concat(f), showExit:j, defaultValue:0, onCursorMove:E()}, i);
  b.Lk(gls2.Mi(a, f, i), d)
}
;gls2.Wa = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, rg:0.85, size:0, image:l, ob:j, init:function(b, a, f, d) {
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
  return gls2.Wa(this.size, this.hl, this.rg, this.image)
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
gls2.Ki = tm.createClass({width:0, label:l, Db:l, pa:0, ri:0, Xg:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Db = [];
  this.ri = 480 - this.width - 5;
  this.Xg = 5
}, xj:function(b, a) {
  a === j && (this.Db.clear(), this.Db.push(""));
  5 < this.Db.length && this.Db.splice(1, this.Db.length - 4);
  this.Db.push(b);
  return this
}, Bj:function() {
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
  this.label.text = b + (0 === this.pa % 2 ? "_" : " ");
  this.pa += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.ri, this.Xg);
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
gls2.Vc = {noise:l, Vj:function(b) {
  function a(a) {
    if(1 > a) {
      return l
    }
    var d = [], i = Math.random(), m, q;
    for(q = 0;q < b;q += ~~a) {
      m = Math.random();
      for(var k = 0;k < a;k++) {
        d[q + k] = f(i, m, k / a)
      }
      i = m
    }
    i = d[b - ~~a];
    m = d[0];
    for(k = 0;k < a;k++) {
      d[b - ~~a + k] = f(i, m, k / a)
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
    for(var z = 0;z < b;z++) {
      q[z] += d[i][z] * m
    }
  }
  for(i = 0;i < q.length;i++) {
    q[i] /= 2
  }
  return q
}};
gls2.Vc.noise = gls2.Vc.Vj(512);
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
gls2.Ib = function(b, a, f) {
  a || gls2.Ge();
  a = tm.asset.AssetManager.get(b);
  var d = tm.asset.AssetManager.get("bgmLoopInfo");
  a && (gls2.cb = a.clone(), gls2.cb.volume = 0.1 * gls2.core.he, gls2.cb.loop = !f, gls2.cb.play(), d.data[b] && (gls2.cb.source.loopStart = d.data[b].start, gls2.cb.source.loopEnd = d.data[b].end))
};
gls2.Ge = function() {
  gls2.cb !== l && gls2.cb.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.cb.stop()
};
gls2.df = function() {
  if(gls2.cb !== l) {
    var b = gls2.cb;
    gls2.cb = l;
    b.loop = t;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.ql === AudioBufferSourceNode.PLAYING_STATE && b.stop() : setTimeout(a, 10)
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
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, pa:0, ye:[], ff:t, ai:l, hi:0, pf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.ai = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.ff = t;
      this.Sk()
    })
  }, Sk:function() {
    for(var a = ("" + Math.floor(gls2.core.qe)).padding(16, " "), b = "", i = 0;i < a.length;i += 4) {
      b += a.substring(i, i + 4) + " "
    }
    this.ai.text = "HIGH SCORE: " + b.trim()
  }, ud:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Eh(80 * Math.cos(0.01 * this.pa) + 240, 80 * Math.sin(0.01 * this.pa) + 320, 0);
    this.Eh(80 * Math.cos(0.01 * this.pa + Math.PI) + 240, 80 * Math.sin(0.01 * this.pa + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.ff && this.pi();
    this.pa += 1
  }, Eh:function(f, d, i) {
    if(!this.ff) {
      b === l && (b = gls2.Wa(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Wa(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      i = 0 === i ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      i.speed = 0.6;
      var m = gls2.ka.randf(0, 2 * Math.PI), q = gls2.ka.rand(0, 20);
      i.setPosition(Math.cos(m) * q + f, Math.sin(m) * q + d);
      var z = this;
      i.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = z.ye.indexOf(this);
          -1 !== a && z.ye.splice(a, 1)
        }
      };
      this.ye.push(i)
    }
  }, pi:function() {
    T(this, "MAIN MENU", ["start", "setting"], this.rk, {defaultValue:this.hi, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, rk:function(a) {
    2 !== a && (this.hi = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.ff = j;
          for(var a = 0, b = this.ye.length;a < b;a++) {
            this.ye[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.aj())
        }.bind(this));
        break;
      case 1:
        this.ad()
    }
  }, ad:function() {
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
    T(this, "BGM VOLUME", "012345".split(""), this.Rg, {defaultValue:gls2.core.he, onCursorMove:function(a) {
      gls2.cb !== l && "exit" !== a && (gls2.cb.volume = 0.1 * a)
    }, showExit:t})
  }, Rg:function(a) {
    6 !== a && (gls2.core.he = a);
    this.ad()
  }, Vg:function() {
    T(this, "SE VOLUME", "012345".split(""), this.Sg, {defaultValue:gls2.core.xd, showExit:t})
  }, Sg:function(a) {
    6 !== a && (gls2.core.xd = a);
    this.ad()
  }, pl:function() {
    T(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.qk, {defaultValue:gls2.core.Th, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, qk:function(a) {
    5 !== a && (gls2.core.Th = a);
    this.ad()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.aj = tm.createClass({superClass:gls2.Scene, mode:0, types:l, yf:l, dc:l, ec:l, fc:l, Lg:l, Jg:l, type:0, style:0, ge:t, sf:t, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Ek();
    this.yf = this.Dk();
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
    this.yf.visible = t;
    this.Og(-1, j);
    this.dc.update();
    this.ec.update();
    this.fc.update();
    gls2.sa("voSelectShip");
    gls2.Ib("bgmShipSelect", j)
  }, Ek:function() {
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
  }, Dk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Jg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.Jg.addChildTo(a);
    this.ed = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.yc = tm.app.Object2D();
    this.yc.addChildTo(this.ed);
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
    this.ed.line = b(0, 0, 0, 130, 8);
    this.ed.line.addChildTo(this.ed);
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
      if(this.types.alpha = 1, this.yf.visible = t, !this.sf && a.keyboard.getKeyDown("left")) {
        this.Og(-1, t), gls2.sa("select")
      }else {
        if(!this.sf && a.keyboard.getKeyDown("right")) {
          this.Og(1, t), gls2.sa("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.sa("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.yf.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.sa("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.sa("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.ge = j, this.oi(), gls2.sa("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Tk(0 === ~~(a.frame / 60) % 2))
    }
  }, ol:function() {
    T(this, "AUTO BOMB", ["on", "off"], this.mk, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, mk:function(a) {
    2 !== a && (this.ge = 0 === a, this.oi())
  }, oi:function() {
    T(this, "ARE YOU READY?", ["ok"], this.nk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, nk:function(a) {
    0 === a && this.Ik()
  }, Og:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.dc, this.ec, this.fc][this.type].remove().addChildTo(this.types);
    b ? (this.dc.kb -= a, this.dc.scaleX = 0 === this.type ? 5 : 1, this.dc.scaleY = 0 === this.type ? 5 : 1, this.ec.kb -= a, this.ec.scaleX = 1 === this.type ? 5 : 1, this.ec.scaleY = 1 === this.type ? 5 : 1, this.fc.kb -= a, this.fc.scaleX = 2 === this.type ? 5 : 1, this.fc.scaleY = 2 === this.type ? 5 : 1) : (this.sf = j, this.dc.tweener.clear().to({kb:this.dc.kb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.ec.tweener.clear().to({kb:this.ec.kb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.fc.tweener.clear().to({kb:this.fc.kb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.sf = t
    }.bind(this)));
    this.Lg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Ik:function() {
    gls2.core.ba.ge = this.ge;
    gls2.core.replaceScene(gls2.core.ba);
    gls2.core.ba.start(this.type, this.style);
    gls2.df()
  }, Tk:function(a) {
    this.Jg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.ed.line.nc = t, this.xa[0].line.nc = t, this.xa[1].line.nc = t, this.xa[2].line.nc = t, this.xa[3].line.nc = t) : (this.ed.line.nc = j, this.xa[0].line.nc = j, this.xa[1].line.nc = j, this.xa[2].line.nc = j, this.xa[3].line.nc = j);
    a ? (this.xa[0].visible = j, this.xa[1].visible = j, 1 === this.style ? (this.xa[2].visible = t, this.xa[3].visible = t) : (this.xa[2].visible = j, this.xa[3].visible = j), this.ed.line.lineWidth = 5) : (this.xa.each(function(a) {
      a.visible = t
    }), this.ed.line.lineWidth = 0 === this.style ? 10 : 25)
  }, ud:E()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, nc:j, init:function(a, b, d, i, m) {
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
gls2.ab = tm.createClass({superClass:gls2.Scene, da:l, score:0, Qc:0, nb:0, Na:0, te:0, gb:0, Xc:0, Jb:0, Ia:l, ja:l, gd:3, wf:0, xf:0, Gc:0, bf:0, ue:0, rf:0, ge:t, hc:0, qd:0, Jh:0, Qd:t, mf:t, Ec:0, Fc:0, Ja:t, jf:0, Pd:0, Ua:0, sd:0, gl:0, fl:0, hf:l, Wh:l, Wg:l, Cg:l, Ag:l, Bg:l, ug:l, di:l, Zb:l, Ob:l, ic:l, me:t, ik:t, yj:0, Ud:l, init:function() {
  gls2.ab.ae !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.ab.ae = this;
  this.Ob = gls2.$i(this);
  this.Ob.Ab.addChildTo(this);
  this.ja = gls2.Si().Ca;
  this.ja.addChildTo(this);
  this.hf = gls2.ab.Layer().addChildTo(this);
  this.Wh = gls2.ab.Layer().addChildTo(this);
  this.Cg = gls2.ab.Layer().addChildTo(this);
  this.Ag = gls2.ab.Layer().addChildTo(this);
  this.Wg = gls2.ab.Layer().addChildTo(this);
  this.Bg = gls2.ab.Layer().addChildTo(this);
  this.ug = gls2.ab.Layer().addChildTo(this);
  this.di = gls2.ab.rh(this).addChildTo(this);
  tm.Eb.hd.le.Hh = this;
  this.Zb = tm.app.Object2D();
  this.Zb.addChildTo(this);
  this.Zb.update = function(b) {
    this.uk(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Ob.clear()
  })
}, addChild:function(b) {
  b.ob ? this.Ag.addChild(b) : b instanceof gls2.Qa ? this.ug.addChild(b) : b instanceof gls2.ig ? this.hf.addChild(b) : b instanceof gls2.ea ? b.$c ? this.hf.addChild(b) : this.Cg.addChild(b) : b instanceof gls2.yh ? this.Wg.addChild(b) : b === this.Zb || b === this.ja || b instanceof gls2.ab.Layer || b instanceof gls2.ab.rh || b instanceof gls2.zh || b instanceof gls2.qh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(b)))
}, update:function(b) {
  this.Ak(b.keyboard);
  this.Ia.update(b.frame);
  0 === b.frame % 2 && this.Ob.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.Ge()) : b.keyboard.getKeyDown("space") ? this.xe(0) : b.keyboard.getKeyDown("p") && (this.dh().saveAsImage(), this.xe(0))
}, dh:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.ja.ja.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Ob.element, 0, 0);
  return b
}, uk:function(b) {
  this.da.Ac === t && gls2.fa.erase();
  var a;
  a = [].concat(gls2.ea.wc);
  for(var f = [].concat(gls2.Id.wc), d = f.length;f[--d] !== h;) {
    for(var i = a.length;a[--i] !== h;) {
      var m = a[i], q = f[d];
      if(!(0 >= m.ra || m.ib) && gls2.Collision.of(m, q)) {
        if(q.gf(1), q.remove(), m.td(q.nd)) {
          this.Gc += 1;
          this.Ja ? this.Cb(0) : this.Cb(0.005);
          this.Qg(m);
          break
        }
      }
    }
  }
  q = this.da.Yb;
  if(this.da.Vb) {
    a = [].concat(gls2.ea.wc);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(i = a.length;a[--i] !== h;) {
      if(m = a[i], !(0 >= m.ra || m.ib) && gls2.Collision.of(m, q)) {
        q.Ck(m.y + m.boundingHeightBottom);
        m.td(q.nd) ? (this.Gc += 1, this.Ja ? this.Cb(0) : this.Cb(0.01), this.Qg(m)) : (this.gb = Math.min(this.gb + 0.02, 1), this.Ja ? (this.Jd(0.01 * S[this.sd]), this.Cb(0)) : (this.Jd(0.01), this.Cb(0.001)));
        q.gf(2);
        break
      }
    }
    f = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(gls2.ea.wc);
    for(i = a.length;a[--i] !== h;) {
      if(m = a[i], !(0 >= m.ra || m.ib) && gls2.Collision.of(m, f)) {
        m.td(q.nd) ? (this.Gc += 1, this.Ja ? this.Cb(0.03) : this.Cb(0.015), this.Qg(m)) : (this.gb = Math.min(this.gb + 0.02, 1), this.Ja ? (this.Jd(0.01 * S[this.sd]), this.Cb(0.004)) : (this.Jd(0.01), this.Cb(0.002))), q.Sj(2, this.da.x, this.da.y - 30)
      }
    }
  }
  if(this.Qd) {
    gls2.fa.erase();
    a = [].concat(gls2.ea.wc);
    for(i = a.length;a[--i] !== h;) {
      if(m = a[i], !(0 >= m.ra || m.ib) && m.Xb() && m.td(2)) {
        this.md(m.score), this.Gc += 1
      }
    }
    this.gb = this.Na = 0
  }
  if(this.Ja) {
    a = [].concat(gls2.Id.wc);
    for(i = a.length;a[--i] !== h;) {
      if(q = a[i], !(0 >= q.ra)) {
        m = [].concat(gls2.Qa.wc);
        for(f = m.length;m[--f] !== h;) {
          d = m[f], d.visible !== t && (0 < q.ra && gls2.Collision.of(q, d)) && (d.ra -= 6 - this.Fc, 0 > d.ra && (d.za(), this.md(10), this.Jd(1), this.$h(t, t, d.x, d.y, 1)), q.ra -= 1)
        }
      }
    }
  }
  this.me ? gls2.fa.erase() : (this.Ja && (this.Pd -= 1, 0 >= this.Pd && this.af()), this.jf = Math.max(this.jf - 1, 0), this.gb -= 0.01, 0 >= this.gb && (this.gb = 0, this.Ja || 0 < this.Ua ? this.Xc = this.Na = this.nb = 0 : (0 < this.Na && (0 >= this.Xc && (this.Xc = 0.005 * this.Na), this.nb = this.nb * (this.Na - this.Xc) / this.Na, this.Na -= this.Xc), 0 >= this.Na && (this.Xc = this.Na = this.nb = 0))), this.mf && (this.score += 100), q = gls2.Qa.wc.length, b.fps = 500 < q ? Math.floor(60 * 
  gls2.ka.clamp(500 / q, 0.2, 1)) : 60)
}, Qg:function(b) {
  this.$h(b.$c, this.Ja || 22500 > gls2.Rc(b, this.da), b.x, b.y, b.star, b instanceof gls2.Cd);
  this.Jd(S[this.sd]);
  for(var a = this.nb, f = ~~(this.Na / 1E3) + 1, d = 0;d < f;d++) {
    a += b.score, this.md(a)
  }
  this.nb += b.score * f
}, $h:function(b, a, f, d, i, m) {
  b = b ? gls2.hj : gls2.Bh;
  for(var q = 0;q < i;q++) {
    var z = b(a);
    z.setPosition(f, d);
    m && (z.vd = j)
  }
}, lk:function(b) {
  gls2.sa("star");
  b.fi ? (this.xf += 1, this.nb += 1E3, this.md(1E3 + 0 * this.nb), this.Ja ? this.Cb(0) : this.Cb(0.01)) : (this.wf += 1, this.nb += 100, this.md(100 + 0 * this.nb), this.Ja ? this.Cb(0) : this.Cb(0.001))
}, start:function(b, a) {
  this.Ob.Ld.Bj().clear();
  this.Qc = this.score = 0;
  this.gd = 3;
  this.hc = this.qd = Q[a];
  this.Jh = R[a];
  this.Ua = this.Fc = this.Ec = 0;
  this.af();
  this.Qd = t;
  this.yj = this.ue = this.rf = 0;
  this.da = gls2.yh(this, b, a);
  this.bh(0);
  H.Ra.Wb.$ex = 2 !== a ? 0 : 1;
  this.xi(0);
  gls2.sa("voLetsGo");
  this.Kk();
  0 === b ? gls2.core.va("launch0") : 1 === b ? gls2.core.va("launch1") : 2 === b && gls2.core.va("launch2")
}, xi:function(b) {
  this.yb("3...2...1...");
  this.da.parent !== l && this.da.remove();
  gls2.ea.je();
  gls2.Id.je();
  gls2.fa.je();
  this.hf.removeChildren();
  this.Ag.removeChildren();
  this.Bg.removeChildren();
  this.Wg.removeChildren();
  this.ug.removeChildren();
  this.Zb.removeChildren();
  this.Gc = this.bf = this.xf = this.wf = this.te = this.gb = this.Na = this.nb = 0;
  this.ic = l;
  this.ik = this.me = t;
  this.ue = 0;
  this.Ob.Ab.pe = 0;
  this.Fc = this.Ob.Ab.Cc = 0;
  this.Jb = b;
  this.Ia = gls2.kd.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.Ng()
  }.bind(this));
  this.ja.tweener.clear()
}, Ng:function() {
  this.yb("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Yb.addChildTo(this);
  this.da.Ac = t;
  this.da.ib = j;
  this.da.Od = t;
  this.da.Vb = t;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.fe = this.Ac = j
  }.bind(this.da)).wait(3E3).call(function() {
    this.ib = t
  }.bind(this.da))
}, il:function() {
  gls2.na.cf(this.da.x, this.da.y, this);
  this.yb("I was shot down.");
  this.da.Ac = t;
  this.da.remove();
  this.gd -= 1;
  this.Ua = this.Xc = this.Na = this.gb = 0;
  this.ue += 1;
  this.rf += 1;
  this.Fc = gls2.ka.clamp(this.Fc - 3, 0, 1);
  this.qg(-0.03);
  0 < this.gd ? this.tweener.clear().wait(1E3).call(function() {
    this.hc = this.qd = Math.min(this.qd + 1, this.Jh);
    this.Ng()
  }.bind(this)) : (this.Ud = this.dh().canvas.toDataURL("image/png"), gls2.core.qe === this.score && (gls2.core.ak = this.Ud), this.tweener.clear().wait(2E3).call(function() {
    this.Qc < gls2.core.Lh() ? this.xk() : this.Zh()
  }.bind(this)))
}, bh:function(b) {
  H.Ra.Wb.$rank = gls2.ka.clamp(b, 0, 0.5)
}, qg:function(b) {
  this.bh(H.Ra.Wb.$rank + b)
}, Rj:function() {
  this.yb("System rebooted.", j);
  this.score = 0;
  this.Qc += 1;
  this.gd = 3;
  this.hc = this.qd = Q[this.da.style];
  this.Fc = 0;
  this.bh(0);
  this.Ng()
}, Cj:function() {
  gls2.Ib("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.Zb);
  b.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.dh()));
    b.remove()
  }.bind(this))
}, Zh:function() {
  gls2.Ge();
  this.app.replaceScene(gls2.ph())
}, dl:E(), md:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < N.length;b++) {
    var f = N[b];
    a < f && f <= this.score && (this.Uh(), 0 == b && this.app.va("extend1"), 1 == b && this.app.va("extend2"))
  }
  gls2.core.qe = Math.max(gls2.core.qe, this.score);
  gls2.core.qe === this.score && (gls2.core.bk = this.Jb, gls2.core.dk = this.da.type, gls2.core.ck = this.da.style, gls2.core.$j = this.Qc);
  1E8 <= this.score && gls2.core.va("score100M");
  2E9 <= this.score && gls2.core.va("score2G");
  2E10 <= this.score && gls2.core.va("score20G");
  5E10 <= this.score && gls2.core.va("score50G");
  1E11 <= this.score && gls2.core.va("score100G");
  1E12 <= this.score && gls2.core.va("score1T")
}, Jd:function(b) {
  this.Xc = 0;
  this.Na += b;
  this.te = Math.max(this.te, this.Na);
  1 <= b && (this.gb = 1);
  100 <= this.Na && this.app.va("combo100");
  1E3 <= this.Na && this.app.va("combo1000");
  1E4 <= this.Na && this.app.va("combo10000");
  1E5 <= this.Na && this.app.va("combo100000")
}, Cb:function(b) {
  if(10 !== this.Ua) {
    for(b *= 0.75;1 < b;) {
      gls2.Gf(this.da).addChildTo(this), b -= 1, this.Ec = 0, this.Ua += 1, 1 === this.Ua ? (this.yb("HYPER SYSTEM, stand by.", j), gls2.sa("voHyperStandBy")) : (this.yb("HYPER SYSTEM, ready.", j), gls2.sa("voHyperReady"))
    }
    this.Ec = gls2.ka.clamp(this.Ec + b, 0, 1);
    1 <= this.Ec && (gls2.Gf(this.da).addChildTo(this), this.Ua += 1, this.Ec -= 1, 1 === this.Ua ? (this.yb("HYPER SYSTEM, stand by.", j), gls2.sa("voHyperStandBy")) : (this.yb("HYPER SYSTEM, ready.", j), gls2.sa("voHyperReady")))
  }
}, Jk:function() {
  0.5 > Math.random() ? (this.yb("HYPER SYSTEM start!!", j), gls2.sa("voHyperStart0")) : (this.yb("start counting to system limit.", j), gls2.sa("voHyperStart1"));
  this.Fc = gls2.ka.clamp(this.Fc + 1, 0, 5);
  this.qg(0.01 * this.Ua);
  H.Ra.Wb.$hyperOff = 0.5 * (2 !== this.da.style ? 1 : 0.5);
  this.Pd = 800;
  this.jf = 200;
  this.da.kf.Vd(this.Ua);
  this.da.Yb.Vd(this.Ua);
  this.da.Md = this.da.kf;
  gls2.na.Tj(this.da.x, this.da.y, this);
  this.Ja = j;
  this.sd = this.Ua;
  this.Ec = this.Ua = 0;
  gls2.fa.erase(j, j);
  this.app.va("hyper1");
  10 == this.sd && this.app.va("hyper10")
}, af:function() {
  this.Ja !== t && (this.Ja = t, gls2.Gf(this.da, j).addChildTo(this), this.da.Md = this.da.ni, H.Ra.Wb.$hyperOff = 1 * (2 !== this.da.style ? 1 : 0.5), this.da.kf.Vd(0), this.da.Yb.Vd(0), this.jf = 80, this.sd = this.Pd = 0, gls2.fa.erase())
}, wj:function() {
  gls2.sa("decision");
  gls2.sa("voGetBomb");
  this.hc = Math.min(this.hc + 1, this.qd);
  this.mf = this.hc === this.qd
}, Uh:function() {
  gls2.sa("voExtend");
  this.yb("extended.");
  this.gd += 1
}, yb:function(b, a) {
  this.Ob.Ld.xj(b, a)
}, xe:function(b) {
  T(this, "PAUSE", ["resume", "setting", "exit game"], this.tk, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:t})
}, tk:function(b) {
  switch(b) {
    case 1:
      this.ad();
      break;
    case 2:
      this.wk()
  }
}, ad:function() {
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
}, wk:function() {
  T(this, "REARY?", ["yes", "no"], this.ok, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:t})
}, ok:function(b) {
  0 === b ? (gls2.Ge(), this.app.replaceScene(gls2.TitleScene())) : this.xe(1)
}, Ug:function() {
  T(this, "BGM VOLUME", "012345".split(""), this.Rg, {defaultValue:gls2.core.he, onCursorMove:function(b) {
    gls2.cb !== l && 6 !== b && (gls2.cb.volume = 0.1 * b)
  }, showExit:t})
}, Rg:function(b) {
  6 !== b && (gls2.core.he = b);
  this.ad(1)
}, Vg:function() {
  T(this, "SE VOLUME", "012345".split(""), this.Sg, {defaultValue:gls2.core.xd, showExit:t})
}, Sg:function(b) {
  6 !== b && (gls2.core.xd = b);
  this.ad(1)
}, xk:function() {
  T(this, "CONTINUE? (" + this.Qc + "/" + gls2.core.Lh() + ")", ["yes", "no"], this.pk, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:t})
}, pk:function(b) {
  switch(b) {
    case 0:
      this.Rj();
      break;
    case 1:
      this.Zh()
  }
}, ud:E(), Fk:function() {
  this.Ob.Ab.tweener.clear().to({pe:-480}, 1600, "easeInBack").to({Cc:30}, 800, "easeInOutBack")
}, Zj:function() {
  this.Ob.Ab.tweener.clear().to({Cc:0}, 800, "easeInOutBack").to({pe:0}, 1600, "easeOutBack")
}, Ce:l, De:0, se:l, Ne:0, Kk:function() {
  if(1 === this.Ne) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== h) {
      this.se = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.Ce = [];
    this.De = 0
  }else {
    if(2 === this.Ne && (console.log("replay start"), localStorage.getItem("recCount") !== h)) {
      this.se = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var f = localStorage.getItem("rec" + a).split(","), d = 0;d < f.length;d++) {
          this.se.push(f[d])
        }
      }
    }
  }
}, Ak:function(b) {
  if(1 === this.Ne) {
    1E3 < this.Ce.length && (console.log("save"), localStorage.setItem("rec" + this.De, this.Ce), localStorage.setItem("recCount", this.De), this.Ce = [], this.De += 1), this.Ce.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Ne && this.se) {
      var a = this.se.shift();
      a !== h && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : t
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : t
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
  this.Fj(b);
  this.Gj(b)
}, Fj:function(b) {
  if(0 < this.ba.gb) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ba.gb) + "," + ~~Math.min(255, 512 * this.ba.gb) + ",0.5)";
    var a = 500 * this.ba.gb;
    b.fillRect(465, 635 - a, 10, a)
  }
}, Gj:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  10 === this.Ua ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ba.Ec && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ba.Ec, 9))
}});
gls2.ab.ae = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ba:l, Ud:l, Zb:l, values:l, labels:l, lf:l, si:[1E3, 2E3, 4E3, 1E4, 1], ei:l, Zg:l, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ba = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ba.wf, this.ba.xf, ~~(100 * (this.ba.Gc / this.ba.bf)), this.ba.te, 0 === this.ba.ue ? 2E7 : 0];
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
  this.Zg.visible = t;
  this.Ud = a;
  for(var d = [], f = 0;12 > f;f++) {
    d[f] = [];
    for(var i = 0;16 > i;i++) {
      d[f][i] = {$g:0, dd:0, Tc:gls2.ka.randf(-2, 2), oc:gls2.ka.randf(1, 4)}
    }
  }
  this.Zb = tm.app.Object2D();
  this.Zb.draw = function(a) {
    a.save();
    for(var b = j, f = 0;f < d.length;f++) {
      for(var i = 0;i < d[f].length;i++) {
        var n = d[f][i];
        640 > 40 * i + n.dd && (a.drawImage(this.Ud.element, 40 * f, 40 * i, 40, 40, 40 * f + n.$g, 40 * i + n.dd, 40, 40), n.$g += n.Tc, n.dd += n.oc, n.oc += 0.3, b = t)
      }
    }
    this.wait = 60;
    b && this.Zb.remove();
    a.restore()
  }.bind(this);
  this.Zb.addChildTo(this);
  this.on("enter", function() {
    0 === this.ba.rf && 0 === this.ba.Qc && (0 === this.ba.Jb ? gls2.core.va("nomiss1") : 1 === this.ba.Jb ? gls2.core.va("nomiss2") : 2 === this.ba.Jb ? gls2.core.va("nomiss3") : 3 === this.ba.Jb ? gls2.core.va("nomiss4") : 4 === this.ba.Jb && gls2.core.va("nomiss5"))
  });
  this.on("exit", function() {
    gls2.df()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.sa("star"), this.values[a] <= this.lf[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ba.md(this.values[a] * this.si[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ba.md(this.lf[a] * this.si[a]), this.values[a] -= this.lf[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.ei.text = Math.floor(this.ba.score)
    }else {
      if(this.Zg.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.sa("decision"), 5 == this.ba.Jb + 1 ? b.replaceScene(gls2.Oi()) : (this.ba.xi(this.ba.Jb + 1), b.replaceScene(this.ba))
      }
    }
    this.frame += 1
  }
}, ud:E()});
gls2.ph = tm.createClass({superClass:gls2.Scene, pa:0, qi:t, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.on("enter", function() {
    gls2.Ib("gameover")
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.pa && !this.qi) && this.tf();
  this.pa += 1
}, ud:function(b) {
  b.clearColor("black")
}, ze:t, wait:t, ah:l, tf:function() {
  if(!this.wait) {
    this.qi = j;
    var b = ["save score", "tweet result", "back to title"], a = ["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"];
    this.ze && (b.shift(), a.shift());
    T(this, "GAME OVER", b, this.sk, {defaultValue:this.ze ? 1 : 0, menuDescriptions:a, showExit:t})
  }
}, sk:function(b) {
  this.ze && (b += 1);
  0 === b ? this.ze || (this.wait = j, this.app.Yg(l, function(a, b, d) {
    this.wait = t;
    a ? this.yk(a) : b ? (this.ze = j, this.ah = d, this.zk()) : this.tf()
  }.bind(this))) : 1 === b ? this.Rk() : this.app.replaceScene(gls2.TitleScene())
}, zk:function() {
  T(this, "SUCCESS!", ["ok"], function() {
    this.tf()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:t})
}, yk:function() {
  T(this, "ERROR!", ["ok"], function() {
    this.tf()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:t})
}, Rk:function() {
  var b = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({score:Math.floor(this.app.ba.score), stage:5 > this.app.ba.Jb ? "Stage" + (this.app.ba.Jb + 1) : "ALL", type:"ABC"[this.app.ba.da.type], style:["S", "L", "EX"][this.app.ba.da.style], cont:this.app.ba.Qc}), b = tm.social.Twitter.createURL({type:"tweet", text:b, hashtags:"tmshooter", url:this.ah ? window.location.origin + "/ranking/" + this.ah : window.location.origin});
  window.open(b, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
(function() {
  var b = "TM-Shooter;2D 'DANMAKU' Shooter on HTML5;;MUSIC;Underworld (select)  by  delf;Feel the universe (stage1)  by  delf;Herod (boss)  by  \u6dbc\u3005;Re-Birth (clear)  by  delf;Remenber (stage2)  by  Ryo;THE NEW CHALLENGER freeVer. (stage3)  by  delf;Aegis (stage4)  by  \u5cf6\u767d;Ancien Ocean (stage5)  by  delf;\u84bc\u3044\u6708 (ending)  by  delf;;SOUND;kouichi_axis (\u9b54\u738b\u9b42);on_jin (\u97f3\u4eba);;GAME ENGINE (tmlib.js);phi_jp;;PROGRAM AND GRAPHICS;minimo(stage3);daishi_hmr;;special respect to...;DODONPACHI series by CAVE;PRECURE series by TOEI;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!".split(";");
  gls2.Oi = tm.createClass({superClass:gls2.Scene, ja:l, da:l, labels:l, wi:t, speed:0, Vh:t, ji:l, init:function() {
    this.superInit();
    this.ji = tm.display.CanvasElement().addChildTo(this);
    this.ja = gls2.core.ba.ja;
    this.ja.addChildTo(this);
    this.ja.direction = 0.5 * Math.PI;
    this.ja.speed = 1;
    var a = this.da = gls2.core.ba.da;
    a.Ac = t;
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
    gls2.core.ba.Jb += 1;
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
      gls2.Ib("bgmEnding", j, j);
      this.wi = j
    }.bind(this))
  }, ml:function() {
    0 === gls2.core.ba.da.type ? gls2.core.va("allclear0") : 1 === gls2.core.ba.da.type ? gls2.core.va("allclear1") : 2 === gls2.core.ba.da.type && gls2.core.va("allclear2")
  }, nl:function() {
    this.ja.addChildTo(gls2.core.ba)
  }, update:function(a) {
    a.keyboard.getKey("z") || a.keyboard.getKey("x") || a.keyboard.getKey("c") || this.wi && gls2.cb && gls2.cb.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(a) {
      return!!a.parent
    }) ? this.speed = 8 : this.Hk() : this.speed = 0.5
  }, Hk:function() {
    this.Vh || (this.Vh = j, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 5E3).call(function() {
      gls2.Ge();
      this.app.replaceScene(gls2.ph())
    }.bind(this)), this.ja.tweener.clear().to({speed:9}, 2E3), this.da.tweener.clear().wait(2E3).to({y:-192}, 2E3, "easeInQuad"))
  }, ud:E()})
})();
(function() {
  gls2.ea = tm.createClass({superClass:tm.display.CanvasElement, name:l, da:l, ba:l, Ia:l, ra:0, Zc:0, score:0, $c:t, erase:t, star:1, hk:t, Gb:j, Ta:t, frame:0, ib:t, zf:l, direction:0, speed:0, ga:l, init:function(a, f, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Ta = t;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.Gb = j;
    this.ba = a;
    this.da = a.da;
    this.score = 100;
    this.erase = t;
    this.vj(d);
    f.setup(this);
    this.altitude = this.$c ? 1 : 10;
    this.zf = {x:0, y:0};
    this.ib = t
  }, we:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, kl:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Ta === t && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Ta = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.$c && (this.x += this.ba.ja.Da, this.y += this.ba.ja.Ea);
    this.Ta && (this.frame += 1);
    this.zf.x = this.x - a;
    this.zf.y = this.y - b
  }, td:function(a) {
    if(!this.Ta) {
      return t
    }
    this.ra -= a;
    if(0 >= this.ra) {
      return a = gls2.ka.randf(0, 5), 2 > a ? this.ba.yb("enemy destroy.") : 4 > a ? this.ba.yb(this.name + " destroy.") : this.ba.yb("ETR reaction gone."), this.erase && gls2.fa.erase(j, this.ba.Ja, this instanceof gls2.Cd), this.dispatchEvent(tm.event.Event("destroy")), this.za(), "yukishiro" === this.name ? gls2.core.va("mboss1") : "mishou" === this.name ? gls2.core.va("mboss2") : "higashi" === this.name ? gls2.core.va("mboss3") : "hishikawa" === this.name ? gls2.core.va("mboss4") : "minamino" === 
      this.name ? gls2.core.va("mboss5") : "misumi" === this.name ? gls2.core.va("boss1") : "hyuga" === this.name ? gls2.core.va("boss2") : "momozono" === this.name ? gls2.core.va("boss3") : "aida" === this.name ? gls2.core.va("boss4") : "hojo" === this.name && gls2.core.va("boss5"), j
    }
    40 > this.ra && this.Ka();
    return t
  }, za:function() {
    gls2.na.cf(this.x, this.y, this.ba, this.zf);
    this.remove()
  }, Xb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, vk:function() {
    return this.Gb
  }, Ka:E(), vj:function(a) {
    this.name = a;
    a = gls2.ea.Li[a];
    this.ra = this.Zc = a[0];
    this.score = a[1];
    this.$c = a[2];
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
      0.2 > Math.random() && gls2.na.cf(this.x + gls2.ka.rand(-100, 100), this.y + gls2.ka.rand(-40, 40), this.ba, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.na.oe(this.x, this.y, this.ba);
      this.remove()
    }.bind(this))
  }, We:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.na.cf(this.x + gls2.ka.rand(-100, 100), this.y + gls2.ka.rand(-40, 40), this.ba, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.na.oe(this.x, this.y, this.ba);
      this.remove()
    }.bind(this))
  }});
  gls2.ea.je = function() {
    for(var a = [].concat(b), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var b = gls2.ea.wc = []
})();
gls2.Cd = tm.createClass({superClass:gls2.ea, hk:j, Zc:0, vf:l, init:function(b, a, f) {
  this.vf = a;
  this.superInit(b, this.vf[0], f);
  this.Zc = this.ra;
  this.addEventListener("added", function() {
    this.ba.ic = this;
    this.ba.Fk();
    this.tweener.wait(1E3).call(function() {
      this.ba.me = t
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ba.ic = l;
    this.ba.Zj();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ba.Cj()
    }.bind(this));
    a.addChildTo(this.ba.Zb)
  })
}, td:function(b) {
  var a = this.ra;
  if(gls2.ea.prototype.td.call(this, b)) {
    return this.ba.me = j, this.ba.da.fe = t, gls2.df(), j
  }
  this.ra <= 0.55 * this.Zc && 0.55 * this.Zc < a ? (gls2.aa.Td(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.na.hb(this.x, this.y, this.ba), gls2.fa.erase(j, this.ba.Ja), this.vf[1].setup(this)) : this.ra <= 0.1 * this.Zc && 0.1 * this.Zc < a && (gls2.aa.Td(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.na.hb(this.x, this.y, this.ba), gls2.fa.erase(j, this.ba.Ja), this.vf[2].setup(this), gls2.sa("voJacms"))
}});
(function() {
  gls2.ea.Li = {kujo:[2, 300, t, t, 1, {radius:24}], kiryu:[3, 400, t, t, 1, {radius:24}], natsuki:[5, 900, j, t, 1, {radius:24}], kise:[50, 15E3, j, t, 1, {radius:24}], yamabuki:[100, 15E3, j, t, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, t, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, t, t, 5, {width:100, height:20}], kasugano:[6, 1E3, t, t, 1, {radius:24}], 
  kurokawa:[35, 5E3, t, t, 5, {width:100, height:20}], mimino:[35, 5E3, t, t, 5, {width:100, height:20}], shirabe:[35, 5E3, t, t, 5, {width:100, height:20}], akimoto:[250, 3E5, t, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, t, j, 20, {width:180, heightBottom:40, heightTop:120}], aono:[300, 3E5, t, j, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, t, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, t, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, 
  t, j, 20, {width:300, height:80}], higashi:[1E3, 12E5, t, j, 20, {width:256, height:128}], momozono:[6E3, 35E5, t, j, 0, {width:256, height:128}], hyuga:[6E3, 3E6, t, j, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, t, j, 20, {radius:130}], aida:[8E3, 4E6, t, j, 0, {width:370, heightBottom:5, heightTop:60}], minamino:[1500, 5E6, j, j, 30, {width:25, heightTop:375, heightBottom:-325}], rery:[250, 2E3, j, t, 5, {radius:24}], fary:[200, 2E3, j, t, 5, {radius:24}], sory:[350, 2E3, j, t, 5, {radius:24}], 
  lary:[300, 2E3, j, j, 5, {radius:24}], shiry:[250, 2E3, j, j, 5, {radius:24}], dodory:[120, 2E3, j, t, 5, {radius:24}], erika:[30, 500, t, t, 1, {width:24, height:48}], hino:[20, 1E4, t, t, 1, {width:64, height:64}], hoshizora:[300, 3E5, t, j, 30, {width:128, height:64}], yotsuba:[300, 5E5, t, j, 40, {width:64, height:64}], yotsubaLeaf:[100, 1E5, t, t, 10, {width:64, height:64}], midorikawa:[5, 2E3, t, t, 1, {width:64, height:64}], aoki:[5, 3200, t, t, 1, {width:64, height:64}], madoka:[350, 4E5, 
  t, j, 10, {width:256, height:64}]};
  gls2.ea.ha = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kujo");
    this.ca = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ea.Aa = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kiryu");
    this.ca = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ea.la = tm.createClass({superClass:gls2.ea, ng:l, og:l, init:function(a, f) {
    this.superInit(a, f, "natsuki");
    this.ng = b("tex_tank1", 64, 64);
    this.og = b("tex_tank1", 64, 64);
    this.od = this.od || 0;
    this.zc = this.zc || 0
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    for(a = this.od;0 > a;) {
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
    gls2.na.Kj(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.mh = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "yamabuki");
    this.ca = b("tex2", 256, 128).setFrameIndex(7)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Sb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "tsukikage");
    this.ca = b("tex1", 64, 64).setFrameIndex(23)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.eb = tm.createClass({superClass:gls2.ea, ca:l, tg:l, init:function(a, f) {
    this.superInit(a, f, "kasugano");
    this.ca = b("tex5", 64, 64).setFrameIndex(1);
    this.xc = gls2.Wa(80, 1, 0.8);
    this.tg = tm.geom.Vector2()
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && this.xc.clone().setPosition(this.x, this.y).addChildTo(this.ba);
    this.rotation = tm.geom.Vector2.sub(this.position, this.tg).toAngle() * gls2.ka.RAD_TO_DEG - 90;
    this.tg.set(this.x, this.y)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Uc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kurokawa");
    this.ca = b("tex1", 128, 128).setFrameIndex(1)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.rc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "mimino");
    this.ca = b("tex1", 128, 128).setFrameIndex(1)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.pb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "shirabe");
    this.ca = b("tex5", 128, 128).setFrameIndex(4)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Tb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "akimoto");
    this.ca = b("tex1", 256, 128).setFrameIndex(1)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.Bc()
  }});
  gls2.ea.$d = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "aono");
    this.ca = b("tex1", 256, 128);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 128;
    this.setScale(1.2);
    this.Lb = gls2.Wa(70, 1, 0.97)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Lb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ba), this.Lb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ba))
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.Bc()
  }});
  gls2.ea.Hd = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "yumehara");
    this.ca = b("tex1", 256, 256);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 256;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 256
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.Bc()
  }});
  gls2.ea.Ma = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kise");
    this.ca = b("tex1", 64, 128).setFrameIndex(14)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Pe = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "hanasaki");
    this.ca = b("tex1", 64, 128).setFrameIndex(14)
  }, Ka:E(), za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Kf = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "myodoin");
    this.ca = b("tex5", 64, 128).setFrameIndex(0)
  }, Ka:E(), za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.pc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kenzaki");
    this.ca = b("tex1", 128, 256);
    this.ca.srcRect.x = 0;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 128;
    this.ca.srcRect.height = 256
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Ef = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "minazuki");
    this.ca = b("tex5", 128, 256);
    this.ca.setFrameIndex(1);
    this.setScale(1.2)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Sa = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "hino");
    this.ca = b("tex4", 64, 32).setFrameIndex(0);
    this.setScale(1.5)
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.qa = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "midorikawa");
    this.ca = b("tex4", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.zb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "aoki");
    this.ca = b("tex4", 64, 64).setFrameIndex(1)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, we:function() {
    240 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.Mk = this.y + 192;
    this.dd = this.y
  }});
  gls2.ea.Pc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "madoka");
    this.ca = b("tex4", 256, 128).setFrameIndex(3)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.oe(this.x, this.y, this.ba);
    this.Bc()
  }});
  gls2.ea.wd = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "hoshizora");
    this.ca = b("tex4", 256, 128).setFrameIndex(1);
    this.boundingWidth = 384;
    this.setScale(1.5)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    if(this.Ta === t && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Ta = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.oe(this.x, this.y, this.ba);
    this.Bc()
  }, we:function() {
    240 < this.x && (this.velocityX *= -1, this.setScale(-1.5))
  }, Xb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ea.Af = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "yotsuba");
    this.ca = b("tex4", 128, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.oe(this.x, this.y, this.ba);
    this.Bc();
    this.ba.Qd || gls2.Pi(this.x, this.y, this.da).addChildTo(this.parent);
    for(var a = 0;4 > a;a++) {
      this.Sc[a] && this.Sc[a].za()
    }
    delete this.Sc;
    this.remove()
  }, we:function() {
    this.Sc = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Sc[a] = this.Ia.Pa({Yj:gls2.ea.Bf, Gk:gls2.aa.Bf, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Sc[a].dir = b;
      this.Sc[a].zg = this;
      this.Sc[a].kk = a;
      this.Sc[a].distance = 64
    }
    gls2.ea.prototype.we.call(this);
    return this
  }});
  gls2.ea.Bf = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "yotsubaLeaf");
    this.ca = b("yotsubaLeaf", 64, 64).setFrameIndex(0)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.zg.Sc[this.kk] = l;
    this.remove()
  }});
  gls2.ea.Zd = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "erika");
    this.ca = b("tex3", 64, 128);
    this.ca.setFrameIndex(8)
  }, Ka:E(), draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    gls2.Ji(this.x, this.y, this.da).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ea.If = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "yukishiro");
    this.ca = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Wf = tm.createClass({superClass:gls2.Cd, ca:l, init:function(a, f) {
    this.superInit(a, f, "misumi");
    this.ca = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.We()
  }});
  gls2.ea.Sf = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "mishou");
    this.ca = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Lb = gls2.Wa(80, 1, 0.9);
    this.xc = gls2.Wa(256, 1, 0.9)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Lb.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba), this.Lb.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba), this.xc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba))
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Zi = tm.createClass({superClass:gls2.Cd, init:function(a, f) {
    this.superInit(a, f, "hyuga");
    this.ca = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.We()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.gg = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "higashi");
    this.ca = b("tex4", 256, 128).setFrameIndex(2);
    this.blendMode = "lighter";
    this.setScale(1.5)
  }, Ka:E(), za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Vi = tm.createClass({superClass:gls2.Cd, init:function(a, f) {
    this.superInit(a, f, "momozono");
    this.ca = b("tex4", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, Ka:E(), za:function() {
    this.We()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.cg = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "hishikawa");
    this.ca = b("tex2", 256, 256).setFrameIndex(2);
    this.ca.setScale(2);
    this.Lb = gls2.Wa(60, 1, 0.95);
    this.xc = gls2.Wa(500, 1, 0.8)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && (this.Lb.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Lb.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.xc.clone().setPosition(this.x, this.y).addChildTo(this.ba))
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Wi = tm.createClass({superClass:gls2.Cd, init:function(a, f) {
    this.superInit(a, f, "aida");
    this.ca = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Lb = gls2.Wa(60, 1, 0.95);
    this.xc = gls2.Wa(500, 1, 0.8)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && (this.Lb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Lb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Lb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Lb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.xc.clone().setPosition(this.x, this.y).addChildTo(this.ba))
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    this.We()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Ui = tm.createClass({superClass:gls2.ea, ie:l, Mh:[{x:-60, y:-426}, {x:60, y:-426}, {x:-72, y:-72}, {x:72, y:-72}, {x:-72, y:-348}, {x:72, y:-348}, {x:-48, y:-264}, {x:48, y:-264}, {x:-48, y:108}, {x:48, y:108}, {x:-78, y:-168}, {x:78, y:-168}, {x:-96, y:-228}, {x:96, y:-228}, {x:0, y:-336}, {x:0, y:-168}, {x:-120, y:144}, {x:120, y:144}, {x:-60, y:168}, {x:60, y:168}], init:function(a, f) {
    this.superInit(a, f, "minamino");
    this.altitude = 10;
    this.ib = j;
    this.ca = b("tex5", 256, 512).setFrameIndex(1);
    this.setScale(2.16);
    this.ie = [];
    this.on("launch", function() {
      Array.prototype.push.apply(this.ie, [this.Ia.Pa({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Kb, soft:gls2.aa.Kb(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Kb, soft:gls2.aa.Kb(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Kb, soft:gls2.aa.Kb(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Kb, soft:gls2.aa.Kb(), 
      x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Kb, soft:gls2.aa.Kb(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Kb, soft:gls2.aa.Kb(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Of, soft:gls2.aa.Of(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.hg, soft:gls2.aa.hg(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Jc, 
      soft:gls2.aa.Jc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Jc, soft:gls2.aa.Jc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Jc, soft:gls2.aa.Jc(), x:0, y:0}), this.Ia.Pa({hard:gls2.ea.Jc, soft:gls2.aa.Jc(), x:0, y:0})])
    })
  }, update:function() {
    this.ie.forEach(function(a, b) {
      a.setPosition(this.x + this.Mh[b].x, this.y + this.Mh[b].y)
    }.bind(this))
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove();
    this.ie.forEach(function(a) {
      a.parent && a.remove()
    }.bind(this))
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Gd = tm.createClass({superClass:gls2.ea, ca:l, yi:0, init:function(a, f, d, i, m) {
    this.superInit(a, f, d);
    this.ca = b(i, 64, 64);
    this.yi = m
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    for(var b = tm.geom.Vector2.sub(this.ba.da.position, this.position).toAngle() + 2 * Math.PI / 32;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.ca.setFrameIndex(16 * this.yi + Math.floor(16 * (b / (2 * Math.PI))))
  }, Ka:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.$a() : 5 === a.app.frame % 30 && this.ca.Za()
    })
  }, za:function() {
    gls2.na.hb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Mc = tm.createClass({superClass:gls2.ea.Gd, init:function(a, b) {
    this.superInit(a, b, "rery", "kanade-cannon", 0);
    this.setScale(1.92)
  }});
  gls2.ea.Kb = tm.createClass({superClass:gls2.ea.Gd, init:function(a, b) {
    this.superInit(a, b, "rery", "kanade-cannon", 1);
    this.setScale(1.2)
  }});
  gls2.ea.Nc = tm.createClass({superClass:gls2.ea.Gd, init:function(a, b) {
    this.superInit(a, b, "sory", "yotsubaLeaf", 0);
    this.setScale(1.2)
  }});
  gls2.ea.Of = tm.createClass({superClass:gls2.ea.Gd, init:function(a, b) {
    this.superInit(a, b, "lary", "yotsubaLeaf", 0);
    this.setScale(1.44)
  }});
  gls2.ea.hg = tm.createClass({superClass:gls2.ea.Gd, init:function(a, b) {
    this.superInit(a, b, "shiry", "kanade-cannon", 1);
    this.setScale(1.68)
  }});
  gls2.ea.Jc = tm.createClass({superClass:gls2.ea.Gd, init:function(a, b) {
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
      gls2.aa.Td(this)
    })
  }});
  gls2.aa.ta = function(a, b) {
    if(gls2.fa[b] === h) {
      console.warn("Danmaku[" + b + "] is undefined!")
    }else {
      var f = gls2.fa[b].$e();
      a.on("enterframe", f);
      a.on("completeattack", function() {
        f.stop = j
      })
    }
  };
  gls2.aa.Td = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].nf && (a[b].stop = j)
      }
    }
  };
  gls2.aa.Bk = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].nf && (a[b].stop = t)
      }
    }
  };
  gls2.aa.ha = tm.createClass({superClass:gls2.aa, pattern:l, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.Nk = b
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    var b = this.pattern, f = this.Nk;
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
  gls2.aa.Aa = tm.createClass({superClass:gls2.aa, Hb:l, init:function(a, b) {
    this.superInit();
    this.Hb = a;
    this.delay = b
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Hb = this.Hb;
    a.tweener.wait(this.delay === h ? gls2.ka.rand(0, 1E3) : this.delay).call(function() {
      this.speed = 6;
      gls2.aa.ta(this, this.Hb);
      this.on("enterframe", function() {
        this.y < this.da.y && this.Ta && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ka.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.Xb() && this.Ta && this.remove();
        if(22500 > gls2.Rc(this, this.da) || this.y > this.da.y + 150) {
          this.Gb = t
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
    this.gk = a;
    this.fk = b;
    this.Kd = f
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.speed = this.gk;
    a.od = this.fk;
    this.Kd && (a.Kd = [].concat(this.Kd));
    a.zc = 0;
    a.on("enter", function() {
      gls2.aa.ta(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.od) * this.speed;
      this.y += Math.sin(this.od) * this.speed;
      this.Ta && !this.Xb() && this.remove();
      for(this.zc = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.zc;) {
        this.zc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.zc;) {
        this.zc -= 2 * Math.PI
      }
      this.Gb = this.y < this.da.y && 4E4 < gls2.Rc(this, this.da);
      if(this.Kd) {
        for(var a = 0;a < this.Kd.length;a++) {
          var b = this.Kd[a];
          b.frame === this.frame && this.tweener.to({od:b.dir !== h ? b.dir : this.od, speed:b.speed !== h ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.aa.tc = b(1, 0.25 * Math.PI);
  gls2.aa.Wk = b(1, -1.75 * Math.PI);
  gls2.aa.be = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.aa.ua = b(1.6, 0.5 * Math.PI);
  gls2.aa.uc = b(1.6, -0.5 * Math.PI);
  gls2.aa.Hi = tm.createClass({superClass:gls2.aa, La:l, init:function(a) {
    this.superInit();
    this.La = a
  }, setup:function(a) {
    gls2.aa.ta(a, this.La);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.aa.nh = gls2.aa.Hi("bukky-4-0");
  b = tm.createClass({superClass:gls2.aa, La:l, Ph:t, init:function(a, b) {
    this.superInit();
    this.La = a;
    this.Ph = !!b
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.La = this.La;
    a.on("enter", function() {
      gls2.aa.ta(this, this.La)
    });
    a.on("enterframe", function() {
      this.Ta && !this.Xb() && this.remove()
    });
    if(!this.Ph) {
      a.on("enterframe", function() {
        this.Gb = this.y < this.da.y && 4E4 < gls2.Rc(this, this.da)
      })
    }
  }});
  gls2.aa.Qb = b("basic3-0", t);
  gls2.aa.Rb = b("basic3-1", t);
  gls2.aa.qc = b("cannon2-0", j);
  gls2.aa.Df = b("cannon2-3", j);
  gls2.aa.Je = b("cannon3-0", j);
  gls2.aa.Ff = b("cannon5-0", j);
  var a = tm.createClass({superClass:gls2.aa, velocityY:0, La:l, delay:0, init:function(a, b, f) {
    this.superInit();
    this.velocityY = a;
    this.La = b;
    this.delay = f || 0
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.La];
    a.Be = t;
    a.tweener.clear().wait(this.delay).moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, this.ga[0]);
      this.Be = j
    }.bind(a));
    a.on("enterframe", function() {
      this.Be && (this.y += this.velocityY, 384 < this.y && gls2.aa.Td(this), this.Ta && !this.Xb() && this.remove(), this.Gb = this.y < this.da.y)
    })
  }});
  gls2.aa.jd = a(0.5, "kurokawa-1");
  gls2.aa.Xi = a(0.5, "kurokawa-4");
  gls2.aa.sc = function(b) {
    return a(0.5, "milk-5", b)
  };
  gls2.aa.qb = tm.createClass({superClass:gls2.aa, Bi:0, Di:0, Ci:0, Ei:0, init:function(a, b, f, q) {
    this.superInit();
    this.Bi = a;
    this.Di = b;
    this.Ci = f;
    this.Ei = q
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.on("enterframe", function() {
      this.rotation = tm.geom.Vector2.sub(this.ba.da.position, this.position).toAngle() * gls2.ka.RAD_TO_DEG - 90
    });
    var b = this;
    a.tweener.clear().to({x:b.Bi, y:b.Di}, 1400, "easeInOutQuad").call(function() {
      gls2.aa.ta(this, "ako-5")
    }.bind(a));
    a.one("completeattack", function() {
      this.tweener.clear().to({x:b.Ci, y:b.Ei}, 900, "easeInOutQuad").call(function() {
        gls2.aa.ta(this, "ako-5")
      }.bind(this));
      this.one("completeattack", function() {
        this.tweener.clear().to({y:832}, 1900, "easeInQuad")
      })
    })
  }});
  gls2.aa.ld = tm.createClass({superClass:gls2.aa, delay:0, init:function(a) {
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
  b = tm.createClass({superClass:gls2.aa, velocityY:0, La:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.La = b
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.La];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0]);
      gls2.na.Uj(this.x, this.y, this.ba)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Ta && !this.Xb() && this.remove();
      this.Gb = this.y < this.da.y
    })
  }});
  gls2.aa.Sa = b(0.5, "akane");
  gls2.aa.qa = tm.createClass({superClass:gls2.aa, Hb:l, init:function(a, b) {
    this.superInit();
    this.Hb = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Hb = this.Hb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.aa.ta(this, this.Hb);
      var a = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.da.y && this.Ta && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ka.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * a - 90;
        !this.Xb() && this.Ta && this.remove();
        if(22500 > gls2.Rc(this, this.da) || this.y > this.da.y + 150) {
          this.Gb = t
        }
      })
    }.bind(a))
  }});
  gls2.aa.vb = gls2.aa.qa(3, 1);
  gls2.aa.wb = gls2.aa.qa(6, 1);
  gls2.aa.xb = gls2.aa.qa(12, 1);
  gls2.aa.zb = tm.createClass({superClass:gls2.aa, Hb:l, init:function(a) {
    this.superInit();
    this.Hb = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Hb = this.Hb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.aa.ta(this, this.Hb);
      this.mc = 0;
      this.on("enterframe", function() {
        this.y < this.Mk && (this.dd += 1);
        this.x += this.speed;
        this.y = this.dd + 8 * Math.sin(this.mc);
        this.mc += 0.06
      })
    }.bind(a))
  }});
  gls2.aa.ac = gls2.aa.zb(1);
  gls2.aa.sl = gls2.aa.zb(2);
  gls2.aa.Pc = tm.createClass({superClass:gls2.aa, velocityY:0, La:l, delay:0, init:function() {
    this.superInit();
    this.velocityY = 0.5;
    this.La = "aguri";
    this.delay = 0
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.La];
    a.Be = t;
    a.tweener.clear().wait(this.delay).moveBy(0, 192, 800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, this.ga[0]);
      this.Be = j
    }.bind(a));
    a.on("enterframe", function() {
      this.Be && (this.y += this.velocityY, 384 < this.y && gls2.aa.Td(this), this.Ta && !this.Xb() && this.remove(), this.Gb = this.y < this.da.y)
    })
  }});
  gls2.aa.Pc = gls2.aa.Pc();
  gls2.aa.wd = tm.createClass({superClass:gls2.aa, velocityX:0, La:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.La = "miyuki"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.La];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Ta && !this.Xb() && this.remove();
      this.Gb = this.y < this.da.y
    })
  }});
  gls2.aa.wd = gls2.aa.wd(1);
  b = tm.createClass({superClass:gls2.aa, velocityX:0, La:l, init:function() {
    this.superInit();
    this.La = "alice"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = 0.3;
    a.ga = [this.La];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Ta && !this.Xb() && this.remove();
      this.Gb = this.y < this.da.y
    })
  }});
  gls2.aa.Af = b();
  b = tm.createClass({superClass:gls2.aa, La:l, init:function() {
    this.superInit();
    this.La = "aliceLeaf"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [this.La];
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
      this.Ta && !this.Xb() && this.remove();
      this.Gb = this.y < this.da.y;
      this.pa++
    })
  }});
  gls2.aa.Bf = b();
  gls2.aa.sh = a(0.3, "komachi-1");
  gls2.aa.th = a(0.5, "komachi-2");
  gls2.aa.uh = a(0.5, "komachi-3");
  gls2.aa.Nf = a(0.5, "komachi-4");
  gls2.aa.Mf = a(0.5, "komachi-5");
  gls2.aa.$d = tm.createClass({superClass:gls2.aa, vi:0, init:function(a) {
    this.superInit();
    this.vi = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    tm.app.Tweener(a).to({x:480 * this.vi}, 2800, "easeOutQuad").call(function() {
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
      this.Gb = this.Ta
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
    a.Ya = t;
    a.bb = t;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ya = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Ya === t || 0 >= this.ra) && this.qf < this.frame && this.bb === t) {
        this.bb = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
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
    a.Ya = t;
    a.bb = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = j;
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
  gls2.aa.Yi = gls2.aa.Wf();
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
    a.Ya = t;
    a.bb = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = j;
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
    a.Ya = t;
    a.bb = t;
    a.fh = t;
    a.Ok = 0;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ya = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        this.fh = t;
        this.alpha = 1;
        this.ib = t;
        if(50 < gls2.ya.rand(0, 100) && 300 < this.frame || this.x - 64 < this.da.x && this.da.x < this.x + 64) {
          gls2.na.Dg(this.x, this.y, this.ba, 8);
          this.fh = j;
          this.alpha = 0.3;
          this.ib = j;
          this.Ok = this.frame;
          var b = gls2.ya.rand(48, 432), d = gls2.ya.rand(128, 192);
          this.tweener.move(b, d, 250, "easeInOutQuad").call(a)
        }else {
          b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144), this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 2E3, "easeInOutQuad").call(a)
        }
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Ya === t || 0 >= this.ra)) {
        if(1800 < this.frame && this.bb === t && (this.bb = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
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
    a.Ya = t;
    a.bb = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = j;
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
    a.Ya = t;
    a.bb = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = j;
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
    a.Ya = t;
    a.bb = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ya = j;
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
    a.Ya = t;
    a.bb = t;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ya = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.ya.randf(-48, 48);
        this.tweener.move(Math.clamp(this.da.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
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
      this.Ia.$.Yd = t
    });
    a.Pk = tm.app.Tweener(a).to({x:432}, 3E4, "easeInOutQuad").to({x:48}, 3E4, "easeInOutQuad").call(function() {
      this.Ia.$.Yd = j
    }.bind(a)).setLoop(j);
    a.Qk = tm.app.Tweener(a).to({y:576}, 16E4, "easeInOutQuad").call(function() {
      tm.app.Tweener(this).to({y:448}, 2E4, "easeInOutQuad").to({y:576}, 2E4, "easeInOutQuad").setLoop(j)
    }.bind(a));
    a.tweener.wait(22E4).call(function() {
      this.Ia.$.Yd = t;
      this.Pk.clear();
      this.Qk.clear();
      this.tweener.clear().to({x:960}, 1E4, "easeInQuad")
    }.bind(a));
    a.Ya = t;
    a.on("enterframe", function() {
      this.ib = 3 < this.ie.filter(function(a) {
        return!!a.parent
      }).length;
      this.Ta = !this.ib;
      !this.Ya && !this.ib && (gls2.aa.ta(this, "kanade"), this.Ya = j)
    })
  }});
  gls2.aa.Lf = gls2.aa.Lf();
  gls2.aa.Mc = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "rery");
    a.on("enterframe", function() {
      this.position.y > this.ba.da.y ? gls2.aa.Td(this) : gls2.aa.Bk(this)
    })
  }});
  gls2.aa.Kb = tm.createClass({superClass:gls2.aa, init:function() {
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
  var b = gls2.ea, a = gls2.aa;
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
  x:336, y:850}, {hard:b.la, soft:a.uc, x:336, y:920}, {hard:b.la, soft:a.uc, x:336, y:990}], "bukky-4-r":[{hard:b.mh, soft:a.nh, x:480, y:-50}], "bukky-4-l":[{hard:b.mh, soft:a.nh, x:0, y:-50}], "cannon-0":[{hard:b.Ma, soft:a.Qb, x:48, y:-100}], "cannon-1":[{hard:b.Ma, soft:a.Qb, x:96, y:-100}], "cannon-2":[{hard:b.Ma, soft:a.Qb, x:144, y:-100}], "cannon-3":[{hard:b.Ma, soft:a.Qb, x:192, y:-100}], "cannon-4":[{hard:b.Ma, soft:a.Qb, x:240, y:-100}], "cannon-5":[{hard:b.Ma, soft:a.Qb, x:288, y:-100}], 
  "cannon-6":[{hard:b.Ma, soft:a.Qb, x:336, y:-100}], "cannon-7":[{hard:b.Ma, soft:a.Qb, x:384, y:-100}], "cannon-8":[{hard:b.Ma, soft:a.Qb, x:432, y:-100}], "cannon-R0":[{hard:b.Ma, soft:a.Qb, x:550, y:128}], "cannon-R1":[{hard:b.Ma, soft:a.Qb, x:550, y:192}], "cannon-R2":[{hard:b.Ma, soft:a.Qb, x:550, y:256}], "yayoi-0":[{hard:b.Ma, soft:a.Rb, x:48, y:-100}], "yayoi-1":[{hard:b.Ma, soft:a.Rb, x:96, y:-100}], "yayoi-2":[{hard:b.Ma, soft:a.Rb, x:144, y:-100}], "yayoi-3":[{hard:b.Ma, soft:a.Rb, x:192, 
  y:-100}], "yayoi-4":[{hard:b.Ma, soft:a.Rb, x:240, y:-100}], "yayoi-5":[{hard:b.Ma, soft:a.Rb, x:288, y:-100}], "yayoi-6":[{hard:b.Ma, soft:a.Rb, x:336, y:-100}], "yayoi-7":[{hard:b.Ma, soft:a.Rb, x:384, y:-100}], "yayoi-8":[{hard:b.Ma, soft:a.Rb, x:432, y:-100}], "yayoi-R0":[{hard:b.Ma, soft:a.Rb, x:550, y:128}], "yayoi-R1":[{hard:b.Ma, soft:a.Rb, x:550, y:192}], "yayoi-R2":[{hard:b.Ma, soft:a.Rb, x:550, y:256}], "tsubomi-0":[{hard:b.Pe, soft:a.Je, x:96, y:-100}], "tsubomi-1":[{hard:b.Pe, soft:a.Je, 
  x:240, y:-100}], "tsubomi-2":[{hard:b.Pe, soft:a.Je, x:384, y:-100}], "tsubomi-R0":[{hard:b.Pe, soft:a.Je, x:580, y:128}], "itsuki-0":[{hard:b.Kf, soft:a.Ff, x:96, y:-100}], "itsuki-1":[{hard:b.Kf, soft:a.Ff, x:240, y:-100}], "itsuki-2":[{hard:b.Kf, soft:a.Ff, x:384, y:-100}], "makoto-0":[{hard:b.pc, soft:a.qc, x:48, y:-100}], "makoto-1":[{hard:b.pc, soft:a.qc, x:96, y:-100}], "makoto-2":[{hard:b.pc, soft:a.qc, x:144, y:-100}], "makoto-3":[{hard:b.pc, soft:a.qc, x:192, y:-100}], "makoto-4":[{hard:b.pc, 
  soft:a.qc, x:240, y:-100}], "makoto-5":[{hard:b.pc, soft:a.qc, x:288, y:-100}], "makoto-6":[{hard:b.pc, soft:a.qc, x:336, y:-100}], "makoto-7":[{hard:b.pc, soft:a.qc, x:384, y:-100}], "makoto-8":[{hard:b.pc, soft:a.qc, x:432, y:-100}], "makoto-R0":[{hard:b.pc, soft:a.qc, x:580, y:128}], "karen-3-2":[{hard:b.Ef, soft:a.Df, x:96, y:-100}], "karen-3-5":[{hard:b.Ef, soft:a.Df, x:240, y:-100}], "karen-3-8":[{hard:b.Ef, soft:a.Df, x:384, y:-100}], "fighter-m-0":[{hard:b.Uc, soft:a.jd, x:96, y:-192}], 
  "fighter-m-1":[{hard:b.Uc, soft:a.jd, x:144, y:-192}], "fighter-m-2":[{hard:b.Uc, soft:a.jd, x:192, y:-192}], "fighter-m-3":[{hard:b.Uc, soft:a.jd, x:240, y:-192}], "fighter-m-4":[{hard:b.Uc, soft:a.jd, x:288, y:-192}], "fighter-m-5":[{hard:b.Uc, soft:a.jd, x:336, y:-192}], "fighter-m-6":[{hard:b.Uc, soft:a.jd, x:384, y:-192}], "fighter-m4-0":[{hard:b.Uc, soft:a.Xi, x:96, y:-192}], "tsukikage-r":[{hard:b.Sb, soft:a.ld(700), x:624, y:256}, {hard:b.Sb, soft:a.ld(600), x:720, y:256}, {hard:b.Sb, soft:a.ld(500), 
  x:576, y:320}, {hard:b.Sb, soft:a.ld(400), x:672, y:320}, {hard:b.Sb, soft:a.ld(300), x:768, y:320}, {hard:b.Sb, soft:a.ld(200), x:624, y:384}, {hard:b.Sb, soft:a.ld(100), x:720, y:384}], "tsukikage-l":[{hard:b.Sb, soft:a.ce(700), x:-144, y:384}, {hard:b.Sb, soft:a.ce(600), x:-240, y:384}, {hard:b.Sb, soft:a.ce(500), x:-96, y:320}, {hard:b.Sb, soft:a.ce(400), x:-192, y:320}, {hard:b.Sb, soft:a.ce(200), x:-144, y:256}], "urara5-0":function() {
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
  y:-192}, {hard:b.pb, soft:a.qb(96, 256, 240, 128), x:96, y:-192}], "ako5-2":[{hard:b.pb, soft:a.qb(240, 128, 120, 512), x:240, y:-192}, {hard:b.pb, soft:a.qb(384, 256, 96, 256), x:384, y:-192}, {hard:b.pb, soft:a.qb(360, 512, 240, 128), x:360, y:-192}, {hard:b.pb, soft:a.qb(120, 512, 384, 256), x:120, y:-192}, {hard:b.pb, soft:a.qb(96, 256, 360, 512), x:96, y:-192}], "komachi-0":[{hard:b.Tb, soft:a.sh, x:144, y:-192}], "komachi-1":[{hard:b.Tb, soft:a.sh, x:336, y:-192}], "komachi2-0":[{hard:b.Tb, 
  soft:a.th, x:144, y:-192}], "komachi2-1":[{hard:b.Tb, soft:a.th, x:336, y:-192}], "komachi3-0":[{hard:b.Tb, soft:a.uh, x:144, y:-192}], "komachi3-1":[{hard:b.Tb, soft:a.uh, x:336, y:-192}], "komachi4-0":[{hard:b.Tb, soft:a.Nf, x:144, y:-192}], "komachi4-1":[{hard:b.Tb, soft:a.Nf, x:336, y:-192}], "komachi4-2":[{hard:b.Tb, soft:a.Nf, x:240, y:-192}], "komachi5-0":[{hard:b.Tb, soft:a.Mf, x:144, y:-192}], "komachi5-1":[{hard:b.Tb, soft:a.Mf, x:336, y:-192}], "komachi5-2":[{hard:b.Tb, soft:a.Mf, x:240, 
  y:-192}], "nozomi4-0":[{hard:b.Hd, soft:a.$f, x:144, y:-192}], "nozomi4-1":[{hard:b.Hd, soft:a.$f, x:240, y:-192}], "nozomi4-2":[{hard:b.Hd, soft:a.$f, x:336, y:-192}], "nozomi5-0":[{hard:b.Hd, soft:a.ag, x:144, y:-256}], "nozomi5-1":[{hard:b.Hd, soft:a.ag, x:240, y:-128}], "nozomi5-2":[{hard:b.Hd, soft:a.ag, x:336, y:-256}], "mktn5-0":[{hard:b.$d, soft:a.$d(0.6), x:624, y:128}], "mktn5-1":[{hard:b.$d, soft:a.$d(0.4), x:-144, y:64}], "akane-center":[{hard:b.Sa, soft:a.Sa, x:168, y:256}, {hard:b.Sa, 
  soft:a.Sa, x:192, y:128}, {hard:b.Sa, soft:a.Sa, x:288, y:128}, {hard:b.Sa, soft:a.Sa, x:312, y:256}], "akane-right":[{hard:b.Sa, soft:a.Sa, x:384, y:64}, {hard:b.Sa, soft:a.Sa, x:336, y:160}, {hard:b.Sa, soft:a.Sa, x:384, y:256}], "akane-left":[{hard:b.Sa, soft:a.Sa, x:96, y:64}, {hard:b.Sa, soft:a.Sa, x:144, y:160}, {hard:b.Sa, soft:a.Sa, x:96, y:256}], "nao1-left":[{hard:b.qa, soft:a.vb, x:48, y:-100}, {hard:b.qa, soft:a.vb, x:96, y:-100}, {hard:b.qa, soft:a.vb, x:144, y:-100}, {hard:b.qa, soft:a.vb, 
  x:192, y:-100}, {hard:b.qa, soft:a.vb, x:240, y:-100}], "nao1-right":[{hard:b.qa, soft:a.vb, x:240, y:-100}, {hard:b.qa, soft:a.vb, x:288, y:-100}, {hard:b.qa, soft:a.vb, x:336, y:-100}, {hard:b.qa, soft:a.vb, x:384, y:-100}, {hard:b.qa, soft:a.vb, x:432, y:-100}], "nao1-center":[{hard:b.qa, soft:a.vb, x:144, y:-100}, {hard:b.qa, soft:a.vb, x:192, y:-100}, {hard:b.qa, soft:a.vb, x:240, y:-100}, {hard:b.qa, soft:a.vb, x:288, y:-100}, {hard:b.qa, soft:a.vb, x:336, y:-100}], "nao2-left":[{hard:b.qa, 
  soft:a.wb, x:48, y:-100}, {hard:b.qa, soft:a.wb, x:96, y:-100}, {hard:b.qa, soft:a.wb, x:144, y:-100}, {hard:b.qa, soft:a.wb, x:192, y:-100}, {hard:b.qa, soft:a.wb, x:240, y:-100}], "nao2-right":[{hard:b.qa, soft:a.wb, x:240, y:-100}, {hard:b.qa, soft:a.wb, x:288, y:-100}, {hard:b.qa, soft:a.wb, x:336, y:-100}, {hard:b.qa, soft:a.wb, x:384, y:-100}, {hard:b.qa, soft:a.wb, x:432, y:-100}], "nao2-center":[{hard:b.qa, soft:a.wb, x:144, y:-100}, {hard:b.qa, soft:a.wb, x:192, y:-100}, {hard:b.qa, soft:a.wb, 
  x:240, y:-100}, {hard:b.qa, soft:a.wb, x:288, y:-100}, {hard:b.qa, soft:a.wb, x:336, y:-100}], "nao3-left":[{hard:b.qa, soft:a.xb, x:48, y:-100}, {hard:b.qa, soft:a.xb, x:96, y:-100}, {hard:b.qa, soft:a.xb, x:144, y:-100}, {hard:b.qa, soft:a.xb, x:192, y:-100}, {hard:b.qa, soft:a.xb, x:240, y:-100}], "nao3-right":[{hard:b.qa, soft:a.xb, x:240, y:-100}, {hard:b.qa, soft:a.xb, x:288, y:-100}, {hard:b.qa, soft:a.xb, x:336, y:-100}, {hard:b.qa, soft:a.xb, x:384, y:-100}, {hard:b.qa, soft:a.xb, x:432, 
  y:-100}], "nao3-center":[{hard:b.qa, soft:a.xb, x:144, y:-100}, {hard:b.qa, soft:a.xb, x:192, y:-100}, {hard:b.qa, soft:a.xb, x:240, y:-100}, {hard:b.qa, soft:a.xb, x:288, y:-100}, {hard:b.qa, soft:a.xb, x:336, y:-100}], "reika1-left":[{hard:b.zb, soft:a.ac, x:-48, y:-64}, {hard:b.zb, soft:a.ac, x:-72, y:-128}, {hard:b.zb, soft:a.ac, x:-96, y:-64}, {hard:b.zb, soft:a.ac, x:-120, y:-128}, {hard:b.zb, soft:a.ac, x:-144, y:-64}, {hard:b.zb, soft:a.ac, x:-168, y:-128}], "reika1-right":[{hard:b.zb, 
  soft:a.ac, x:528, y:-64}, {hard:b.zb, soft:a.ac, x:552, y:-128}, {hard:b.zb, soft:a.ac, x:576, y:-64}, {hard:b.zb, soft:a.ac, x:600, y:-128}, {hard:b.zb, soft:a.ac, x:624, y:-64}, {hard:b.zb, soft:a.ac, x:648, y:-128}], "madoka-0":[{hard:b.Pc, soft:a.Pc, x:144, y:-128}], "madoka-1":[{hard:b.Pc, soft:a.Pc, x:336, y:-128}], "madoka-2":[{hard:b.Pc, soft:a.Pc, x:240, y:-128}], "miyuki-1":[{hard:b.wd, soft:a.wd, x:-128, y:140}], "miyuki-2":[{hard:b.wd, soft:a.wd, x:608, y:60}], alice:[{hard:b.Af, soft:a.Af, 
  x:240, y:-64}], erika:[{hard:b.Zd, soft:a.Zd, x:240, y:-100}], yukishiro:[{hard:b.If, soft:a.If, x:240, y:-100}], misumi:[{hard:b.Wf, soft:[a.Yi, a.Xf, a.Yf], x:240, y:-100, ic:j}], mai:[{hard:b.Sf, soft:a.Sf, x:780, y:128}], hyuga:[{hard:b.Zi, soft:[a.dg, a.eg, a.fg], x:240, y:-100, ic:j}], higashi:[{hard:b.gg, soft:a.gg, x:780, y:128}], momozono:[{hard:b.Vi, soft:[a.Pf, a.Qf, a.Rf], x:240, y:-100, ic:j}], rikka:[{hard:b.cg, soft:a.cg, x:240, y:-100}], mana:[{hard:b.Wi, soft:[a.Tf, a.Uf, a.Vf], 
  x:240, y:-100, ic:j}], kanade:[{hard:b.Ui, soft:a.Lf, x:432, y:-448}]}
})();
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, i, k, m) {
    return c.action([c.fire(c.direction(b, "absolute"), f, i || v, k, m), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, i || v, k, m)])])
  }
  function f(a, b, c, f, i) {
    return function(k) {
      return d(a, b, c, k, f, i, h, h)
    }
  }
  function d(a, b, d, f, i, k, m, n) {
    return c.action([c.fire(c.direction(b), f, i || v, k, m, n), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, i || v, k, m, n)])])
  }
  function i(a) {
    return c.fire(c.direction(0), a || n, B)
  }
  function m(a) {
    return c.fire(c.direction(0), a || n, v)
  }
  function q(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function z(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.40 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function n(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.10 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.80 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function I(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === h ? 0 : a) + "*0.1)")
  }
  function k(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function O(a) {
    return c.Ga(a, {frame:3, ve:j})
  }
  function L(a) {
    return c.Ga(a, {frame:2, ve:j})
  }
  function A(a) {
    return c.Ga(a, {visible:t})
  }
  function F(a) {
    return c.Ga(a, {frame:4, gc:j})
  }
  function J(a) {
    return c.Ga(a, {frame:3})
  }
  function v(a) {
    return c.Ga(a, {frame:1})
  }
  function u(a) {
    return c.Ga(a, {frame:2})
  }
  function B(a) {
    return c.Ga(a, {frame:0})
  }
  function D(a) {
    return c.Ga(a, {frame:3, gc:j})
  }
  function G(a) {
    return c.Ga(a, {frame:1, gc:j})
  }
  function C(a) {
    return c.Ga(a, {frame:2, gc:j})
  }
  function w(a) {
    return c.Ga(a, {frame:0, gc:j})
  }
  gls2.fa = {};
  var c = H.Ha;
  gls2.fa["basic0-0"] = new H.ia({top:c.action([m])});
  gls2.fa["basic0-1"] = new H.ia({top:c.action([b(r, -0.01, 8, f(3, -15, 15))])});
  gls2.fa["basic1-0"] = new H.ia({top:c.action([c.repeat(999, [k(40), m(n)])])});
  gls2.fa["basic1-1"] = new H.ia({top:c.action([c.repeat(999, [k(20), m(n)])])});
  gls2.fa["basic1-2"] = new H.ia({top:c.action([k("10+$rand*100"), d(3, -20, 20, n)])});
  gls2.fa["basic1-3"] = new H.ia({top:c.action([c.repeat(999, [k("20+$rand*80"), d(3, -20, 20, n)])])});
  gls2.fa["basic2-0"] = new H.ia({top:c.action([c.repeat(999, [k(50), m(n)])])});
  gls2.fa["basic3-0"] = new H.ia({top:c.action([c.wait(20), c.repeat(999, [k(100), b(n, 0.1, 3, i)])])});
  gls2.fa["basic3-1"] = new H.ia({top:c.action([c.wait(20), c.repeat(999, [k(40), b(n, 0.1, 3, i)])])});
  gls2.fa["bukky-4-0"] = new H.ia({top0:c.action([k(30), c.repeat(999, [c.fire(c.direction(-40), n, C), c.repeat(3, [c.fire(c.direction(20, "sequence"), n, C), c.fire(c.direction(20, "sequence"), n, C), c.fire(c.direction(20, "sequence"), n, C), c.fire(c.direction(20, "sequence"), n, C), c.fire(c.direction(-80, "sequence"), n, C), k(5)]), k(70)])]), top1:c.action([k(20), c.fire(c.direction(180, "absolute"), p, G), c.repeat(999, [c.fire(c.direction(15, "sequence"), p, G), c.fire(c.direction(15, "sequence"), 
  p, G), c.fire(c.direction(15, "sequence"), p, G), c.fire(c.direction(15, "sequence"), p, G), c.fire(c.direction(15, "sequence"), p, G), c.fire(c.direction(15, "sequence"), p, G), c.fire(c.direction(15, "sequence"), p, G), c.fire(c.direction(15, "sequence"), p, G), c.fire(c.direction(15, "sequence"), p, G), c.fire(c.direction(-90, "sequence"), p, G), k(5)])])});
  gls2.fa["cannon2-0"] = new H.ia({top0:c.action([c.repeat(999, [k(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", p), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", p), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", p), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", p), k(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", n), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", n), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", n), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", n)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), s, F), c.fire(c.direction(" 90+$loop.index*10", "absolute"), s, F), c.fire(c.direction("180+$loop.index*10", "absolute"), s, F), c.fire(c.direction("270+$loop.index*10", "absolute"), s, F), c.fire(c.direction("  0-$loop.index*10", "absolute"), s, F), c.fire(c.direction(" 90-$loop.index*10", "absolute"), s, F), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), s, F), c.fire(c.direction("270-$loop.index*10", "absolute"), s, F), k(10)])]), top2:c.action([c.repeat(999, [k(43), d(30, 0, 348, n, B)])])});
  gls2.fa["cannon2-3"] = new H.ia({top0:c.action([c.repeat(999, [c.wa("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), A(c.oa("ivs0", "$d")))]), k(10), c.fire(c.direction(39, "sequence"), c.speed(1), A(c.oa("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.wa("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), A(c.oa("ivs1", "$d")))]), k(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), A(c.oa("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, B), c.Oa()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), p, function(a) {
    return c.Ga(a, {frame:7, gc:j})
  }), c.fire(c.direction("$1+5", "relative"), p, function(a) {
    return c.Ga(a, {frame:6, gc:j})
  }), c.Oa()])});
  gls2.fa["cannon3-0"] = new H.ia({top0:c.action([c.repeat(999, [k(80), b(p, 0.01, 5, f(5, -30, 30, B, c.offsetX(-60))), b(p, 0.01, 5, f(5, -30, 30, B)), b(p, 0.01, 5, f(5, -30, 30, B, c.offsetX(60)))])])});
  gls2.fa["cannon4-0"] = new H.ia({top0:c.action([k(20), c.repeat(999, [c.fire(p, C), c.repeat(8, [k(10), c.wa("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), p, C), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), p, C)])]), k(120)])])});
  gls2.fa["cannon5-0"] = new H.ia({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), q, A(c.oa("b"))), c.repeat(11, [k(5), c.fire(c.direction(10, "sequence"), q, A(c.oa("b")))]), k(60)])]), b:c.action([c.wait(5), c.Ye(c.speed(0), 0), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, v)
  }), c.Oa])});
  gls2.fa["yuri-4"] = new H.ia({top:c.action([k(60), c.repeat(7, [a(7, 120, 240, s, B), k(8)])])});
  gls2.fa["kurokawa-1"] = new H.ia({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(-45), c.ma(j))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(45), c.ma(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.ma(j)), k(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.ma(j)), k(45)])])});
  gls2.fa["milk-5"] = new H.ia({top0:c.action([c.repeat(999, [d(5, -90, 90, n, J, c.offsetX(-45)), c.wait(27), d(5, -90, 90, n, J, c.offsetX(45)), k(120)])]), top1:c.action([c.repeat(999, [k(30), d(6, -90, 90, r, C, c.offsetX(-45)), c.wait(21), d(6, -90, 90, r, C, c.offsetX(45)), k(90)])]), top2:c.action([c.repeat(999, [k(55), d(13, -90, 90, s, F, c.offsetX(-45)), c.wait(20), d(13, -90, 90, s, F, c.offsetX(45)), k(21)])])});
  gls2.fa["ako-5"] = new H.ia({top:c.action([c.repeat(8, [d(3, -20, 20, r, v), k(2)])])});
  gls2.fa["kurokawa-4"] = new H.ia({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(-45), c.ma(j))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(45), c.ma(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.ma(j)), k(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.ma(j)), k(45)])])});
  gls2.fa["komachi-1"] = new H.ia({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), s(1), v, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(-40)), c.repeat(57, [k(8), c.fire(c.direction(-720 / 57, "sequence"), s(1), v, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, 
  [c.fire(c.direction(-210, "absolute"), s(1), v, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(40)), c.repeat(57, [k(8), c.fire(c.direction(720 / 57, "sequence"), s(1), v, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), n(0), w, c.offsetX(-110), c.ma(j)), c.repeat(6, 
  [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), w, c.offsetX(-110), c.ma(j))]), k(10), c.fire(c.direction(0), n(0), w, c.offsetX(110), c.ma(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), w, c.offsetX(110), c.ma(j))]), k(10)])])});
  gls2.fa["komachi-2"] = new H.ia({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(4, -45, 45, a, u, c.offsetX(-45), c.ma(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), d(4, -45, 45, a, u, c.offsetX(45), c.ma(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, G)]), k(1)])
  }), k(180)])])});
  gls2.fa["komachi-3"] = new H.ia({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(8, -60, 60, a, u, c.offsetX(-45), c.ma(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), d(8, -60, 60, a, u, c.offsetX(45), c.ma(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, G)]), k(1)])
  }), k(180)])])});
  gls2.fa["komachi-4"] = new H.ia({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), n, J, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, J, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, J, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), n, J, c.offsetX(45)), k(4)]), k(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), n(5), w, c.offsetX(-110), c.ma(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), n(5), w, c.offsetX(-110), c.ma(j))]), k(30), c.fire(c.direction(0), n(5), w, c.offsetX(110), c.ma(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), n(5), w, c.offsetX(110), c.ma(j))]), k(30)])])});
  gls2.fa["komachi-5"] = new H.ia({top0:c.action([c.repeat(999, [c.fire(c.direction(210, "absolute"), s(1), v, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(-40)), c.repeat(60, [k(4), c.fire(c.direction(-6, "sequence"), s(1), v, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(-40))])])]), top1:c.action([c.repeat(999, [c.fire(c.direction(-210, 
  "absolute"), s(1), v, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(40)), c.repeat(60, [k(4), c.fire(c.direction(6, "sequence"), s(1), v, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), v, c.offsetX(40))])])]), top2:c.action([c.repeat(999, [c.fire(c.direction(-10), r(0), w, c.offsetX(-110), c.ma(j)), c.fire(c.direction(10, "sequence"), 
  r(0), w, c.offsetX(-110), c.ma(j)), c.fire(c.direction(10, "sequence"), r(0), w, c.offsetX(-110), c.ma(j)), c.repeat(30, [c.wait(1), c.fire(c.direction(-20, "sequence"), r(0), w, c.offsetX(-110), c.ma(j)), c.fire(c.direction(10, "sequence"), r(0), w, c.offsetX(-110), c.ma(j)), c.fire(c.direction(10, "sequence"), r(0), w, c.offsetX(-110), c.ma(j))]), k(5), c.fire(c.direction(-10), r(0), w, c.offsetX(110), c.ma(j)), c.fire(c.direction(10, "sequence"), r(0), w, c.offsetX(110), c.ma(j)), c.fire(c.direction(10, 
  "sequence"), r(0), w, c.offsetX(110), c.ma(j)), c.repeat(30, [c.wait(1), c.fire(c.direction(-20, "sequence"), r(0), w, c.offsetX(110), c.ma(j)), c.fire(c.direction(10, "sequence"), r(0), w, c.offsetX(110), c.ma(j)), c.fire(c.direction(10, "sequence"), r(0), w, c.offsetX(110), c.ma(j))]), k(5)])])});
  gls2.fa["nozomi-4"] = new H.ia({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.wa("c", "2+$loop.index"), d("$c", "-4-($c-2)*4", "4+($c-2)*4", I("(560-$c*40)*0.03"), D, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), A(c.oa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, B, c.offsetX(-50)), c.wait(3)])
  }), k(90), c.fire(c.direction(-40), A(c.oa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, B, c.offsetX(50)), c.wait(3)])
  }), k(90)])]), noop:c.action([c.wait(1), c.Oa])});
  gls2.fa["nozomi-5"] = new H.ia({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(6, [c.wa("c", "2+$loop.index"), d("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", I("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", I("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", I("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", I("(560-$c*40)*0.02"), D, c.offsetY(-50))]), k(150), c.repeat(6, [c.wa("c", "2+$loop.index"), 
  d("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", I("(560-$c*40)*0.02"), C, c.offsetY(-50)), d("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", I("(560-$c*40)*0.02"), C, c.offsetY(-50)), d("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", I("(560-$c*40)*0.02"), C, c.offsetY(-50)), d("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", I("(560-$c*40)*0.02"), C, c.offsetY(-50)), d("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", I("(560-$c*40)*0.02"), C, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(5), 
  A(c.oa("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(-1, "sequence"), a, B, c.offsetX(-50)), k(3)])
  }), c.fire(c.direction(-5), A(c.oa("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(1, "sequence"), a, B, c.offsetX(50)), k(3)])
  })])]), noop:c.action([c.wait(1), c.Oa])});
  gls2.fa["mktn-5"] = new H.ia({top0:c.action([c.repeat(999, [c.fire(c.direction(0), s, A(c.oa("noop"))), c.repeat(20, [c.fire(c.direction(0.5, "sequence"), c.speed(0.08, "sequence"), u), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), u)]), k(6)]), c.fire(c.direction(0), s, A(c.oa("noop"))), c.repeat(20, [c.fire(c.direction(-0.5, "sequence"), c.speed(0.08, "sequence"), u), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), u)]), k(6)]), k(60)])]), 
  top1:c.action([c.repeat(999, [c.fire(c.direction(0, "absolute"), n, A(c.oa("noop"))), c.repeat(5, [c.fire(c.direction(-10, "sequence"), c.speed(0.05, "sequence"), F), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), F)]), k(5)]), c.fire(c.direction(0, "absolute"), n, A(c.oa("noop"))), c.repeat(5, [c.fire(c.direction(10, "sequence"), c.speed(0.05, "sequence"), F), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), F)]), k(5)]), k(40)])]), top2:c.action([c.repeat(999, 
  [c.wa("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"), d(5, -30, 30, n(7), L, c.offsetX("$gun"), c.offsetY(20)), c.wa("gun", "[-40, -120, 0, 120, 80, 40, -80][$loop.index%7]"), d(5, -30, 30, n(7), L, c.offsetX("$gun"), c.offsetY(20)), k(21)])]), noop:c.action([c.wait(1), c.Oa])});
  gls2.fa.akane = new H.ia({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [k(60), d(1, 1, 1, s, u, c.offsetX(-16), c.offsetY(6), c.ma(j)), d(1, 1, 1, s, u, c.offsetX(16), c.offsetY(6), c.ma(j))]), k(120)])])});
  gls2.fa["nao-1"] = new H.ia({top:c.action([c.repeat(999, [k(30), c.fire(c.direction(0), r, D)])])});
  gls2.fa["nao-2"] = new H.ia({top:c.action([c.repeat(999, [k(30), d(2, -5, 5, r, D, c.offsetX(0), c.offsetY(0), c.ma(j))])])});
  gls2.fa["nao-3"] = new H.ia({top:c.action([c.repeat(999, [k(30), d(2, -1, 1, r, D, c.offsetX(0), c.offsetY(0), c.ma(j))])])});
  gls2.fa.reika = new H.ia({top:c.action([c.repeat(999, [k(60), c.fire(c.direction(0), n, C)])])});
  gls2.fa.aguri = new H.ia({top0:c.action([c.repeat(999, [k(120), c.repeat(3, [b(n, 0.05, 4, function(a) {
    return c.action([d(3, -30, 30, a, C, c.offsetX(-32), c.offsetY(-20)), d(3, -30, 30, a, C, c.offsetX(32), c.offsetY(-20)), c.wait(5)])
  }), k(30)])])]), top1:c.action([c.repeat(999, [d(3, -10, 10, r, G, c.offsetX(0), c.offsetY(0)), d(3, -10, 10, r, G, c.offsetX(0), c.offsetY(30)), d(3, -10, 10, r, G, c.offsetX(-10), c.offsetY(-10)), d(3, -10, 10, r, G, c.offsetX(-20), c.offsetY(0)), d(3, -10, 10, r, G, c.offsetX(-20), c.offsetY(10)), d(3, -10, 10, r, G, c.offsetX(-10), c.offsetY(20)), d(3, -10, 10, r, G, c.offsetX(10), c.offsetY(-10)), d(3, -10, 10, r, G, c.offsetX(20), c.offsetY(0)), d(3, -10, 10, r, G, c.offsetX(20), c.offsetY(10)), 
  d(3, -10, 10, r, G, c.offsetX(10), c.offsetY(20)), k(60)])])});
  gls2.fa.miyuki = new H.ia({top:c.action([c.wait("40"), c.repeat(999, [k(30), d(3, -45, 45, s, u, c.offsetX(-64), c.offsetY(16), c.ma(j)), d(3, -45, 45, s, u, c.offsetX(0), c.offsetY(16), c.ma(j)), d(3, -45, 45, s, u, c.offsetX(16), c.offsetY(16), c.ma(j)), d(3, -45, 45, s, u, c.offsetX(32), c.offsetY(16), c.ma(j)), b(s, 0.001, 5, function(a) {
    return c.action([d(3, "-45", "+45", a, C, c.offsetX(0), c.offsetY(0))])
  })])])});
  gls2.fa.alice = new H.ia({top0:c.action([c.repeat(999, [c.repeat(5, [a(10, 0, 180, s, C), a(10, 0, -180, s, C), k(20), a(5, 0, 180, s, D), a(5, 0, -180, s, D), k(20)]), k(30)])])});
  gls2.fa.aliceLeaf = new H.ia({top0:c.action([c.repeat(999, [k(60), d(1, -10, 10, r, G, c.offsetX(0), c.offsetY(0)), d(1, -10, 10, r, w, c.offsetX(10), c.offsetY(-10)), d(1, -10, 10, r, w, c.offsetX(10), c.offsetY(-20)), d(1, -10, 10, r, w, c.offsetX(20), c.offsetY(-10)), d(1, -10, 10, r, w, c.offsetX(19), c.offsetY(-19)), d(1, -10, 10, r, w, c.offsetX(10), c.offsetY(10)), d(1, -10, 10, r, w, c.offsetX(10), c.offsetY(20)), d(1, -10, 10, r, w, c.offsetX(20), c.offsetY(10)), d(1, -10, 10, r, w, c.offsetX(19), 
  c.offsetY(19)), d(1, -10, 10, r, w, c.offsetX(-10), c.offsetY(-10)), d(1, -10, 10, r, w, c.offsetX(-10), c.offsetY(-20)), d(1, -10, 10, r, w, c.offsetX(-20), c.offsetY(-10)), d(1, -10, 10, r, w, c.offsetX(-19), c.offsetY(-19)), d(1, -10, 10, r, w, c.offsetX(-10), c.offsetY(10)), d(1, -10, 10, r, w, c.offsetX(-10), c.offsetY(20)), d(1, -10, 10, r, w, c.offsetX(-20), c.offsetY(10)), d(1, -10, 10, r, w, c.offsetX(-19), c.offsetY(19)), k(60)])]), top1:c.action([c.fire(c.direction(0), s, B, c.offsetX(0), 
  c.ma(j)), c.repeat(999, [c.fire(c.direction(10, "sequence"), s, B, c.offsetX(0), c.ma(j)), k(10)])]), top2:c.action([c.fire(c.direction(90), s, w, c.offsetX(0), c.ma(j)), c.repeat(999, [c.fire(c.direction(10, "sequence"), s, B, c.offsetX(0), c.ma(j)), k(10)])]), top3:c.action([c.fire(c.direction(180), s, w, c.offsetX(0), c.ma(j)), c.repeat(999, [c.fire(c.direction(10, "sequence"), s, B, c.offsetX(0), c.ma(j)), k(10)])]), top4:c.action([c.fire(c.direction(-90), s, w, c.offsetX(0), c.ma(j)), c.repeat(999, 
  [c.fire(c.direction(10, "sequence"), s, B, c.offsetX(0), c.ma(j)), k(10)])])});
  gls2.fa["honoka-1"] = new H.ia({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, F, c.offsetX(0), c.offsetY(30)), k(30), d(5, -40, 40, s, F, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), v), d(3, -3, 3, p(1), v), d(4, -4, 4, p(1.4), v), d(5, -5, 5, p(1.8), v), k(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, s, w, c.offsetX(-110), c.offsetY(-70)), k(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, s, w, c.offsetX(110), 
  c.offsetY(-70)), k(30)])])});
  gls2.fa["nagisa-1-1"] = new H.ia({top0:c.action([k(90), c.repeat(3, [c.wa("way", "5 + $loop.index*6"), b(n, 0.01, "3 + $loop.index*2", function(a) {
    return c.action([d("$way", -110, 110, a, v, c.offsetX(-190), c.offsetY(-20)), d("$way", -110, 110, a, v, c.offsetX(190), c.offsetY(-20)), c.wait(10)])
  }), k(60)]), k(60)])});
  gls2.fa["nagisa-1-2"] = new H.ia({top0:c.action([c.repeat(12, [d(15, -90, 90, s, v), k(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [d(5, -65, -55, p, w, c.offsetX(-190), c.offsetY(-20)), d(5, -35, -25, p, w, c.offsetX(-190), c.offsetY(-20)), d(5, -5, 5, p, w, c.offsetX(-190), c.offsetY(-20)), d(5, 25, 35, p, w, c.offsetX(-190), c.offsetY(-20)), d(5, 55, 65, p, w, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), k(60), c.repeat(3, [d(5, -65, -55, p, w, c.offsetX(190), c.offsetY(-20)), d(5, -35, 
  -25, p, w, c.offsetX(190), c.offsetY(-20)), d(5, -5, 5, p, w, c.offsetX(190), c.offsetY(-20)), d(5, 25, 35, p, w, c.offsetX(190), c.offsetY(-20)), d(5, 55, 65, p, w, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), k(60)])])});
  gls2.fa["nagisa-1-3"] = new H.ia({top0:c.action([k(60), c.repeat(3, [c.fire(c.direction(-60), p, u, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(6, "sequence"), p, u, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([k(80), c.repeat(3, [c.fire(c.direction(60), p, u, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(-6, "sequence"), p, u, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [d(5, -60, -40, p, F, c.offsetX(-190), 
  c.offsetY(-20)), d(5, -20, -10, p, F, c.offsetX(-190), c.offsetY(-20)), d(5, 10, 20, p, F, c.offsetX(-190), c.offsetY(-20)), d(5, 40, 60, p, F, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), k(60), c.repeat(3, [d(5, -60, -40, p, F, c.offsetX(190), c.offsetY(-20)), d(5, -20, -10, p, F, c.offsetX(190), c.offsetY(-20)), d(5, 10, 20, p, F, c.offsetX(190), c.offsetY(-20)), d(5, 40, 60, p, F, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), k(60)])])});
  gls2.fa["nagisa-2-1"] = new H.ia({top0:c.action([k(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", s, B, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", s, B, c.offsetX(190), c.offsetY(-20)), k(10)])]), top1:c.action([k(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", p, D), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", p, D), k(12)])])});
  gls2.fa["nagisa-2-2"] = new H.ia({top0:c.action([k(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", n, D), k(12)])]), top1:c.action([k(120), c.repeat(6, [a(9, 150, 130, s(0.8), v), a(9, 172, 188, s(0.8), v), a(9, 210, 230, s(0.8), v), k(30), a(9, 170, 150, s(0.8), v), a(9, 190, 210, s(0.8), v), k(30)])])});
  gls2.fa["nagisa-2-3"] = new H.ia({top:c.action([k(120), c.repeat(12, [a(23, 0, 360, s, F, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, s, F), a(23, 0, 360, s, F, c.offsetX(190), c.offsetY(-20)), k(30)])])});
  gls2.fa["nagisa-3-1"] = new H.ia({top0:c.action([k(50), c.repeat(999, [b(n, 0.001, 5, function(a) {
    return c.action([d(41, "-180", "+180", a, C, c.offsetX(-190), c.offsetY(-20)), d(41, "-180", "+180", a, C, c.offsetX(190), c.offsetY(-20))])
  }), k(50)])]), top1:c.action([c.repeat(999, [d(2, -2, 0, r, v), k(10), d(2, 0, 2, r, v), k(150)])])});
  gls2.fa["mai-1"] = new H.ia({top0:c.action([k(50), c.repeat(50, [c.wa("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", q, A(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, B), c.Oa]))), c.wa("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", q, A(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, B), c.Oa]))), k(8)])]), top1:c.action([k(50), c.repeat(12, [a(5, -50, 50, q, A(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, 
  D), c.Oa]))), a(5, -230, -130, q, A(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Oa]))), k(16), a(6, -50, 50, q, A(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Oa]))), a(6, -230, -130, q, A(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Oa]))), k(16)])])});
  gls2.fa["mai-2"] = new H.ia({top:c.action([k(50), c.repeat(15, [c.fire(c.direction(-10), C(c.oa("fireChild", "$loop.index*10"))), k(8)])]), fireChild:c.action([k("40+$1"), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, u)
  }), c.Oa])});
  gls2.fa["saki-1-1"] = new H.ia({top:c.action([k(100), c.repeat(3, [c.oa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.wa("way", "$1"), c.repeat("30", [d("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, B), d("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, B), k(12)]), c.repeat("$2", [d(9, -20, 20, r, J)])])});
  gls2.fa["saki-1-2"] = new H.ia({top:c.action([k(100), c.repeat(5, [c.wa("way", "5+$loop.index*2"), c.repeat(6, [c.wa("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(d("$way", -30, 30, n("$s"), D, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), k(90)])])});
  gls2.fa["saki-1-3"] = new H.ia({top:c.action([c.wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.oa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Ye(c.speed(0), 50), c.wait(90), d(13, 0, 360 - 360 / 13, p, J), c.Oa])});
  gls2.fa["saki-2-1"] = new H.ia({top0:c.action([k(100), c.repeat(4, [d(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", p, B, c.offsetX(-40)), d(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", p, B, c.offsetX(40)), k(60), d(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", p, B, c.offsetX(-40)), d(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", p, B, c.offsetX(40)), k(60)])]), top1:c.action([k(100), c.repeat(4, [c.repeat(7, [c.wa("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  z, J), c.repeat(4, [c.wa("w", "$loop.count"), d("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", z("$w*-1.0"), J)])]), k(120)])])});
  gls2.fa["saki-2-2"] = new H.ia({top:c.action([k(60), c.wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), C(c.oa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), C(c.oa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Ye(c.speed(0), "10 + $rand*15"), c.wait(65), b(n, 0.14, 6, function(a) {
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
  }), k(2), c.Oa])});
  gls2.fa["saki-2-3"] = new H.ia({top:c.action([k(60), c.wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.oa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), D(c.oa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Ye(c.speed(0), "10 + $rand*20"), c.wait(65), b(n, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, J)])
  }), k(2), c.Oa])});
  gls2.fa["saki-3-1"] = new H.ia({top:c.action([c.fire(c.direction(180, "absolute"), I, C(c.oa("seed"))), k(60), c.fire(c.direction(180, "absolute"), I, C(c.oa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), I, C(c.oa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, B), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, B), c.fire(c.direction(90, "sequence"), p, B), c.fire(c.direction(90, "sequence"), p, B), k(10), c.fire(c.direction(100, 
  "sequence"), p, B)])])});
  gls2.fa["saki-3-2"] = new H.ia({top:c.action([c.fire(c.direction(180, "absolute"), I, D(c.oa("seed"))), k(60), c.fire(c.direction(180, "absolute"), I, D(c.oa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), I, D(c.oa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, v), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, v), c.fire(c.direction(90, "sequence"), p, v), c.fire(c.direction(90, "sequence"), p, v), k(10), c.fire(c.direction(80, 
  "sequence"), p, v)])])});
  gls2.fa["rikka-1"] = new H.ia({top:c.action([c.repeat(5, [c.wa("s", "$loop.index*1.5"), k(30), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), d(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, n("$s"), c.offsetX(90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.fa["rikka-2"] = new H.ia({top0:c.action([c.repeat(10, [c.fire(C(c.oa("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(C(c.oa("snow")), c.offsetX(90), c.offsetY(-20)), k(8)]), k(10)]), top1:c.action([c.repeat(35, [c.wa("d", "$loop.index*-(20+$ex*10)"), c.wa("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), A(c.oa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), A(c.oa("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.wa("d", "$loop.index*+(20+$ex*10)"), c.wa("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), A(c.oa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), A(c.oa("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.wa("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), A(c.oa("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), A(c.oa("snowArm")))])]), c.Oa]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), r, w), c.Oa]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), n("$2"), L), c.fire(c.direction("$1+1", "relative"), n("$2"), L), c.Oa()])});
  gls2.fa["rikka-3"] = new H.ia({top0:c.action([k(40), c.fire(c.direction(-10), A(c.oa("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), I("$loop.index*0.5"), u, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), u, c.offsetX(-90), c.offsetY(-20))]), k(5)]), k(40)]), top1:c.action([k(40), c.fire(c.direction(-10), A(c.oa("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), I("$loop.index*0.5"), u, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), u, c.offsetX(90), c.offsetY(-20))]), k(5)]), k(40)]), dummy:c.action([c.wait(1), c.Oa])});
  gls2.fa["mana-1-1"] = new H.ia({top0:c.action([c.oa("winder", -1)]), top1:c.action([c.oa("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), n, O, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [k(20), c.wa("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), n, O, c.offsetX("-145*$1"), c.offsetY(-5))])])]), top2:c.action([c.wait(60), k(300), c.repeat(7, [c.wa("s", "$loop.index"), c.repeat(5, [c.wa("ss", 
  "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, r("$ss"), J, c.offsetX(-30), c.offsetY(-30))]), k(5), c.repeat(5, [c.wa("ss", "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, r("$ss"), J, c.offsetX(30), c.offsetY(-30))]), k(20), c.repeat(5, [c.wa("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, z("$ss"), u, c.offsetX(30), c.offsetY(-30))]), k(5), c.repeat(5, [c.wa("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, z("$ss"), u, c.offsetX(-30), c.offsetY(-30))]), k(80)])])});
  gls2.fa["mana-1-2"] = new H.ia({top:c.action([c.repeat(5, [c.wa("i", "$loop.index"), c.wa("j", "1/($i+1) * 4"), b(n(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*(-3*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, J, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, J, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+3*$j)"), 
    a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-3*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, J, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, J, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), 
    c.fire(c.direction("(12-$i)*(+3*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), k(5)])
  }), k(60)])])});
  gls2.fa["mana-1-3"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-2-1"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-2-2"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-2-3"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-3-1"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-3-2"] = gls2.fa["mana-1-1"];
  gls2.fa.kanade = new H.ia({top0:c.action([c.repeat(999, [a(50, -176.4, 176.4, n, D, c.offsetY(-350)), k(42), a(50, -172.8, 180, n, D, c.offsetY(-350)), k(42)])]), top1:c.action([c.repeat(999, [d(5, -12, 12, r, C, c.offsetY(-350)), d(5, 78, 102, r, C, c.offsetY(-350)), d(5, 168, 192, r, C, c.offsetY(-350)), d(5, 258, 282, r, C, c.offsetY(-350)), k(57)])]), top2:c.action([c.repeat(999, [d(3, -3, 3, r(5), O, c.offsetY(-350)), k(37)])])});
  gls2.fa.rery = new H.ia({top:c.action([c.repeat(999, [k("180+$rand*120"), c.repeat(10, [c.fire(c.direction(-90), c.speed(2), A(c.oa("fire", 90, "$loop.index"))), c.fire(c.direction(90), c.speed(2), A(c.oa("fire", -90, "$loop.index")))])])]), fire:c.action([c.wait(3), c.fire(c.direction("$1", "relative"), z("$2"), J), c.Oa()])});
  gls2.fa.fary = new H.ia({top:c.action([c.repeat(999, [k("120+$rand*120"), c.repeat(3, [d(3, -30, 30, n, v), k(15)])])])});
  gls2.fa.sory = new H.ia({top:c.action([c.wa("d", "$rand<0.5 ? -5 : 5"), c.wa("s", "1+$rand*0.5"), c.repeat(999, [c.fire(c.direction("360/8+$d*$s", "sequence"), c.speed(2), A(c.oa("fire"))), c.repeat(3, [c.fire(c.direction(90, "sequence"), c.speed(2), A(c.oa("fire")))]), k(60)])]), fire:c.action([c.wait(2), c.fire(c.direction(0, "relative"), s, F), c.Oa()])});
  gls2.fa.lary = new H.ia({top0:c.action([c.fire(c.direction(0, "absolute"), c.speed(1), A(c.oa("fire"))), c.repeat(999, [k(10), c.fire(c.direction(98, "sequence"), c.speed(1), A(c.oa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), A(c.oa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), A(c.oa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), A(c.oa("fire")))])]), top1:c.action([c.fire(c.direction(47, "absolute"), c.speed(1), A(c.oa("fire"))), c.repeat(999, [k(10), c.fire(c.direction(76, 
  "sequence"), c.speed(1), A(c.oa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), A(c.oa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), A(c.oa("fire"))), c.fire(c.direction(90, "sequence"), c.speed(1), A(c.oa("fire")))])]), fire:c.action([c.wait(5), c.fire(c.direction(-1, "relative"), p, L), c.fire(c.direction(1, "relative"), p, L), c.Oa()])});
  gls2.fa.shiry = new H.ia({top0:c.action([c.repeat(999, [c.wa("d", "$loop.index*-6"), c.repeat(23, [c.fire(c.direction(15, "sequence"), c.speed(1), A(c.oa("ivs0", "$d")))]), k(30), c.fire(c.direction(16, "sequence"), c.speed(1), A(c.oa("ivs0", "$d")))])]), ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, D), c.Oa()])});
  gls2.fa.dodory = new H.ia({top:c.action([c.repeat(999, [k("40+$rand*20"), b(r, -0.1, 3, function(a) {
    return c.action([c.fire(a, B)])
  })])])});
  gls2.fa["setsuna-1"] = new H.ia({top0:c.action([c.wait(60), c.repeat(5, [d(5, -2, 2, p(1.8), B), d(4, -3, 3, p(1.4), B), d(3, -4, 4, p(1), B), d(2, -5, 5, p(0.6), B), k(110)])]), top1:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, D, c.offsetX(0), c.offsetY(30)), k(30), d(5, -40, 40, s, D, c.offsetX(0), c.offsetY(30)), k(30)])])});
  gls2.fa["love-1-1"] = new H.ia({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, F, c.offsetX(0), c.offsetY(30)), k(30), d(5, -40, 40, s, F, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), v), d(3, -3, 3, p(1), v), d(4, -4, 4, p(1.4), v), d(5, -5, 5, p(1.8), v), k(110)])])});
  gls2.fa.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      P.push(gls2.Qa())
    }
    a = gls2.fa.Ze = tm.Eb.hd.le;
    a.Ig = function(a) {
      return!(a instanceof gls2.Qa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Kh = function(a) {
      var b = P.shift(0);
      if(b) {
        return b.ra = 50, M.push(b), b.setFrameIndex(a.frame === h ? 1 : a.frame), b.blendMode = "source-over", a.gc ? (b.scaleX = 1, b.scaleY = 1, b.fd = t) : (a.ve ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Yb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.fd = j), b.visible = a.visible === t ? t : j, b.gc = !!a.gc, b.ve = !!a.ve, b.Yb = !!a.Yb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Qh = function(a) {
      return-0 <= a.x && 480 > a.x && -0 <= a.y && 640 > a.y
    };
    a.zd = 3;
    H.Ra.Wb.$rank = 0;
    H.Ra.Wb.$hyperOff = 1
  };
  gls2.fa.erase = function(a, b, c) {
    for(var d = [].concat(M), f = 0, i = d.length;f < i;f++) {
      if(a) {
        var k = gls2.Bh(!!b);
        k.setPosition(d[f].x, d[f].y);
        c && (k.vd = j)
      }
      d[f].za()
    }
  };
  gls2.fa.je = function() {
    for(var a = [].concat(M), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Qa = tm.createClass({superClass:tm.display.Sprite, ra:0, gc:t, ve:t, init:function() {
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
    var a = gls2.Qa.ne().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Qa.ne = function() {
    gls2.Qa.ne.vg === l && (gls2.Qa.ne.vg = gls2.Wa(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Qa.ne.vg.clone()
  };
  gls2.Qa.ne.vg = l;
  var P = [], M = gls2.Qa.wc = []
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

