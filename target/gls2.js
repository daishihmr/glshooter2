/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(c) {
  throw c;
}
var i = void 0, k = !0, l = null, t = !1;
function J() {
  return function() {
  }
}
var L = {uj:this};
(function() {
  function c(a, c) {
    for(var d = 0, j = a.length;d < j;d++) {
      if(a[d].label == c) {
        return a[d]
      }
    }
  }
  L.ha = function(a) {
    this.type = "none";
    this.root = this;
    this.pb = [];
    this.qf = [];
    this.yf = [];
    if(a !== i) {
      for(var c in a) {
        a.hasOwnProperty(c) && (a[c].label = c, a[c] instanceof L.Tb ? this.pb.push(a[c]) : a[c] instanceof L.Qa ? this.qf.push(a[c]) : a[c] instanceof L.Nd && this.yf.push(a[c]))
      }
      a = 0;
      for(c = this.pb.length;a < c;a++) {
        this.pb[a].gc(this)
      }
      a = 0;
      for(c = this.qf.length;a < c;a++) {
        this.qf[a].gc(this)
      }
      a = 0;
      for(c = this.yf.length;a < c;a++) {
        this.yf[a].gc(this)
      }
    }
  };
  L.ha.prototype.yi = function(a) {
    return c(this.pb, a)
  };
  L.ha.prototype.Bk = function() {
    for(var a = [], c = 0, d = this.pb.length;c < d;c++) {
      var j = this.pb[c];
      j.label && 0 === j.label.indexOf("top") && (a[a.length] = j.label)
    }
    return a
  };
  L.ha.prototype.qk = function(a) {
    var c;
    if(c = this.yi(a)) {
      return c
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  L.ha.prototype.rk = function(a) {
    return c(this.qf, a)
  };
  L.ha.prototype.sk = function(a) {
    var c;
    if(c = this.rk(a)) {
      return c
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  L.ha.prototype.tk = function(a) {
    return c(this.yf, a)
  };
  L.ha.prototype.uk = function(a) {
    var c;
    if(c = this.tk(a)) {
      return c
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  L.Qa = function() {
    this.root = this.label = l;
    this.direction = new L.Ic(0);
    this.speed = new L.Oc(1);
    this.pb = [];
    this.$a = {};
    this.Ea = {}
  };
  L.Qa.prototype.clone = function(a) {
    var c = new L.Qa;
    c.label = this.label;
    c.root = this.root;
    c.pb = this.pb;
    c.direction = new L.Ic(a.kb(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new L.Oc(a.kb(this.speed.value));
    c.speed.type = this.speed.type;
    c.$a = this.$a;
    c.Ea = a.Ea;
    return c
  };
  L.Qa.prototype.gc = function(a) {
    this.root = a;
    for(var c = 0, d = this.pb.length;c < d;c++) {
      this.pb[c].gc(a)
    }
  };
  L.Ze = function(a) {
    this.root = l;
    this.label = a;
    this.mb = []
  };
  L.Ze.prototype.clone = function(a) {
    var c = a.Ea;
    a.Ea = a.Hg(this.mb);
    var d = this.root.sk(this.label).clone(a);
    a.Ea = c;
    return d
  };
  L.Ze.prototype.gc = function(a) {
    this.root = a
  };
  L.ob = function() {
    this.Ib = ""
  };
  L.ob.prototype.gc = function(a) {
    this.root = a
  };
  L.Tb = function() {
    this.Ib = "action";
    this.root = this.label = l;
    this.mc = [];
    this.mb = []
  };
  L.Tb.prototype = new L.ob;
  L.Tb.prototype.gc = function(a) {
    this.root = a;
    for(var c = 0, d = this.mc.length;c < d;c++) {
      this.mc[c].gc(a)
    }
  };
  L.Tb.prototype.clone = function() {
    var a = new L.Tb;
    a.label = this.label;
    a.root = this.root;
    a.mc = this.mc;
    return a
  };
  L.Md = function(a) {
    this.Ib = "actionRef";
    this.label = a;
    this.root = l;
    this.mb = []
  };
  L.Md.prototype = new L.ob;
  L.Md.prototype.clone = function() {
    var a = new L.Tb;
    a.root = this.root;
    a.mc.push(this);
    return a
  };
  L.Nd = function() {
    this.Ib = "fire";
    this.Ga = this.speed = this.direction = this.root = this.label = l;
    this.$a = new L.cf
  };
  L.Nd.prototype = new L.ob;
  L.Nd.prototype.gc = function(a) {
    this.root = a;
    this.Ga && this.Ga.gc(a)
  };
  L.Yf = function(a) {
    this.Ib = "fireRef";
    this.label = a;
    this.mb = []
  };
  L.Yf.prototype = new L.ob;
  L.af = function() {
    this.Ib = "changeDirection";
    this.direction = new L.Ic;
    this.Eb = 0
  };
  L.af.prototype = new L.ob;
  L.bf = function() {
    this.Ib = "changeSpeed";
    this.speed = new L.Oc;
    this.Eb = 0
  };
  L.bf.prototype = new L.ob;
  L.Xe = function() {
    this.Ib = "accel";
    this.Ec = new L.dg;
    this.Hc = new L.Fg;
    this.Eb = 0
  };
  L.Xe.prototype = new L.ob;
  L.gf = function(a) {
    this.Ib = "wait";
    this.value = a || 0
  };
  L.gf.prototype = new L.ob;
  L.Eg = function() {
    this.Ib = "vanish"
  };
  L.Eg.prototype = new L.ob;
  L.ef = function() {
    this.Ib = "repeat";
    this.ej = 0;
    this.action = l;
    this.mb = []
  };
  L.ef.prototype = new L.ob;
  L.ef.prototype.gc = function(a) {
    this.root = a;
    this.action && this.action.gc(a)
  };
  L.Tf = function(a, c) {
    this.Ib = "bind";
    this.ul = a;
    this.pk = c
  };
  L.Tf.prototype = new L.ob;
  L.ug = function(a, c) {
    this.Ib = "notify";
    this.mk = a;
    this.mb = c || l
  };
  L.ug.prototype = new L.ob;
  L.sj = new L.ob;
  L.Ic = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  L.Oc = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  L.dg = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  L.Fg = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  L.cf = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.pa = k;
    a.pa !== i && (this.pa = !!a.pa)
  };
  L.Xh = function(a) {
    this.value = a || 0
  };
  L.Yh = function(a) {
    this.value = a || 0
  };
  L.Gh = function(a) {
    this.value = !!a
  }
})();
L.Va = function(c) {
  this.fi = c;
  this.hf = [];
  this.Yc = -1;
  this.xb = l;
  this.Ea = {}
};
L.Va.prototype.next = function() {
  this.Yc += 1;
  if(this.xb !== l) {
    var c = this.xb.mc[this.Yc];
    if(c !== i) {
      if(c instanceof L.Tb) {
        return this.re(), this.xb = c, this.Ea = this.Gg(), this.next()
      }
      if(c instanceof L.Md) {
        return this.re(), this.xb = this.fi.qk(c.label), this.Ea = this.Hg(c.mb), this.next()
      }
      if(c instanceof L.ef) {
        return this.Ea.ce = 0, this.Ea.Oi = this.kb(c.ej) | 0, this.re(), this.xb = c.action.clone(), this.Ea = this.Gg(), this.next()
      }
      if(c instanceof L.Nd) {
        var a = new L.Nd;
        a.Ga = c.Ga.clone(this);
        c.direction !== l && (a.direction = new L.Ic(this.kb(c.direction.value)), a.direction.type = c.direction.type);
        c.speed !== l && (a.speed = new L.Oc(this.kb(c.speed.value)), a.speed.type = c.speed.type);
        a.$a = new L.cf;
        a.$a.offsetX = this.kb(c.$a.offsetX);
        a.$a.offsetY = this.kb(c.$a.offsetY);
        a.$a.pa = c.$a.pa;
        return a
      }
      return c instanceof L.Yf ? (this.re(), this.xb = new L.Tb, this.xb.mc = [this.fi.uk(c.label)], this.Ea = this.Hg(c.mb), this.next()) : c instanceof L.af ? (a = new L.af, a.direction.type = c.direction.type, a.direction.value = this.kb(c.direction.value), a.Eb = this.kb(c.Eb), a) : c instanceof L.bf ? (a = new L.bf, a.speed.type = c.speed.type, a.speed.value = this.kb(c.speed.value), a.Eb = this.kb(c.Eb), a) : c instanceof L.Xe ? (a = new L.Xe, a.Ec.type = c.Ec.type, a.Ec.value = this.kb(c.Ec.value), 
      a.Hc.type = c.Hc.type, a.Hc.value = this.kb(c.Hc.value), a.Eb = this.kb(c.Eb), a) : c instanceof L.gf ? new L.gf(this.kb(c.value)) : c instanceof L.Eg ? c : c instanceof L.Tf ? (this.Ea["$" + c.ul] = this.kb(c.pk), L.sj) : c instanceof L.ug ? c : l
    }
    this.$j();
    if(this.xb === l) {
      return l
    }
    if((c = this.xb.mc[this.Yc]) && "repeat" == c.Ib) {
      this.Ea.ce++, this.Ea.ce < this.Ea.Oi && (this.re(), this.xb = c.action.clone(), this.Ea = this.Gg())
    }
    return this.next()
  }
  return l
};
L.Va.prototype.re = function() {
  this.hf.push({action:this.xb, cursor:this.Yc, scope:this.Ea});
  this.Yc = -1
};
L.Va.prototype.$j = function() {
  var c = this.hf.pop();
  c ? (this.Yc = c.cursor, this.xb = c.action, this.Ea = c.scope) : (this.Yc = -1, this.xb = l, this.Ea = {})
};
L.Va.prototype.kb = function(c) {
  var a;
  if("boolean" === typeof c || "number" === typeof c) {
    return c
  }
  if(isNaN(a = Number(c))) {
    if((a = this.Ea[c]) || (a = L.Va.bc[c])) {
      return a
    }
    if("$rand" === c) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var f in L.Va.bc) {
    L.Va.bc.hasOwnProperty(f) && (a[f] = L.Va.bc[f])
  }
  for(f in this.Ea) {
    this.Ea.hasOwnProperty(f) && (a[f] = this.Ea[f])
  }
  a.$rand = Math.random();
  (f = this.hf[this.hf.length - 1]) && (a.$loop = {index:f.scope.ce, count:f.scope.ce + 1, first:0 === f.scope.ce, last:f.scope.ce + 1 >= f.scope.Oi});
  return(new Function("return " + c.split("$").join("this.$"))).apply(a)
};
L.Va.prototype.Hg = function(c) {
  var a = {};
  if(c) {
    for(var f = 0, d = c.length;f < d;f++) {
      a["$" + (f + 1)] = this.kb(c[f])
    }
  }else {
    for(f in this.Ea) {
      this.Ea.hasOwnProperty(f) && (a[f] = this.Ea[f])
    }
  }
  return a
};
L.Va.prototype.Gg = function() {
  var c = {}, a;
  for(a in this.Ea) {
    this.Ea.hasOwnProperty(a) && (c[a] = this.Ea[a])
  }
  return c
};
L.ha.prototype.Yg = function(c) {
  var a = new L.Va(this);
  if(c = this.yi(c)) {
    a.xb = c
  }
  return a
};
L.Qa.prototype.Yg = function() {
  var c = new L.Va(this.root), a = new L.Tb;
  a.root = this.root;
  a.mc = this.pb;
  c.xb = a;
  c.Ea = this.Ea;
  return c
};
L.Va.bc = {};
L.Ja = function(c) {
  c = c || "";
  for(var a in L.Ja) {
    L.Ja.hasOwnProperty(a) && (L.uj[c + a] = L.Ja[a])
  }
};
L.Ja.action = function(c) {
  if(0 < arguments.length) {
    for(var a = 0, f = arguments.length;a < f;a++) {
      arguments[a] instanceof Function && (arguments[a] = arguments[a]())
    }
  }
  if(c instanceof Array) {
    a = 0;
    for(f = c.length;a < f;a++) {
      c[a] instanceof Function && (c[a] = c[a]())
    }
  }
  var d = new L.Tb;
  if(c instanceof Array) {
    c.some(function(a) {
      return!(a instanceof L.ob)
    }) && h(Error("argument type error.")), d.mc = c
  }else {
    a = 0;
    for(f = arguments.length;a < f;a++) {
      arguments[a] instanceof L.ob ? d.mc[a] = arguments[a] : h(Error("argument type error."))
    }
  }
  return d
};
L.Ja.la = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("label is required."));
  d = new L.Md(c);
  if(a instanceof Array) {
    d.mb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.mb.push(arguments[f])
    }
  }
  return d
};
L.Ja.Ga = function(c, a, f, d) {
  for(var j = 0, p = arguments.length;j < p;j++) {
    arguments[j] instanceof Function && (arguments[j] = arguments[j]())
  }
  p = new L.Qa;
  for(j = 0;j < arguments.length;j++) {
    arguments[j] instanceof L.Ic ? p.direction = arguments[j] : arguments[j] instanceof L.Oc ? p.speed = arguments[j] : arguments[j] instanceof L.Tb ? p.pb.push(arguments[j]) : arguments[j] instanceof L.Md ? p.pb.push(arguments[j]) : arguments[j] instanceof Array ? p.pb.push(L.Ja.action(arguments[j])) : arguments[j] instanceof Object ? p.$a = arguments[j] : "string" === typeof arguments[j] && (p.label = arguments[j])
  }
  return p
};
L.Ja.xl = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("label is required."));
  d = new L.Ze(c);
  if(a instanceof Array) {
    d.mb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.mb.push(arguments[f])
    }
  }
  return d
};
L.Ja.fire = function(c, a, f, d) {
  for(var j = 0, p = arguments.length;j < p;j++) {
    arguments[j] instanceof Function && (arguments[j] = arguments[j]())
  }
  p = new L.Nd;
  for(j = 0;j < arguments.length;j++) {
    arguments[j] instanceof L.Ic ? p.direction = arguments[j] : arguments[j] instanceof L.Oc ? p.speed = arguments[j] : arguments[j] instanceof L.Qa ? p.Ga = arguments[j] : arguments[j] instanceof L.Ze ? p.Ga = arguments[j] : arguments[j] instanceof L.cf ? p.$a = arguments[j] : arguments[j] instanceof L.Xh ? p.$a.offsetX = arguments[j].value : arguments[j] instanceof L.Yh ? p.$a.offsetY = arguments[j].value : arguments[j] instanceof L.Gh && (p.$a.pa = arguments[j].value)
  }
  p.Ga === i && h(Error("bullet (or bulletRef) is required."));
  return p
};
L.Ja.Cl = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("label is required."));
  d = new L.Yf(c);
  if(a instanceof Array) {
    d.mb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.mb.push(arguments[f])
    }
  }
  return d
};
L.Ja.yl = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("direction is required."));
  a === i && h(Error("term is required."));
  f = new L.af;
  f.direction = c instanceof L.Ic ? c : new L.Ic(c);
  f.Eb = a;
  return f
};
L.Ja.ye = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("speed is required."));
  a === i && h(Error("term is required."));
  f = new L.bf;
  f.speed = c instanceof L.Oc ? c : new L.Oc(c);
  f.Eb = a;
  return f
};
L.Ja.wl = function(c, a, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new L.Xe;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof L.dg ? j.Ec = c : arguments[d] instanceof L.Fg ? j.Hc = a : j.Eb = arguments[d]
  }
  j.Ec === i && j.Hc === i && h(Error("horizontal or vertical is required."));
  j.Eb === i && h(Error("term is required."));
  return j
};
L.Ja.wait = function(c) {
  for(var a = 0, f = arguments.length;a < f;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  c === i && h(Error("value is required."));
  return new L.gf(c)
};
L.Ja.La = function() {
  return new L.Eg
};
L.Ja.repeat = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("times is required."));
  a === i && h(Error("action is required."));
  d = new L.ef;
  d.ej = c;
  if(a instanceof L.Tb || a instanceof L.Md) {
    d.action = a
  }else {
    if(a instanceof Array) {
      d.action = L.Ja.action(a)
    }else {
      for(var j = [], f = 1;f < arguments.length;f++) {
        j.push(arguments[f])
      }
      d.action = L.Ja.action(j)
    }
  }
  return d
};
L.Ja.sa = function(c, a) {
  return new L.Tf(c, a)
};
L.Ja.Hl = function(c, a) {
  return new L.ug(c, a)
};
L.Ja.direction = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new L.Ic(c);
  a !== i && (f.type = a);
  return f
};
L.Ja.speed = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new L.Oc(c);
  a && (f.type = a);
  return f
};
L.Ja.Ec = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new L.dg(c);
  a && (f.type = a);
  return f
};
L.Ja.Hc = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new L.Fg(c);
  a && (f.type = a);
  return f
};
L.Ja.Bl = function(c) {
  return new L.cf(c)
};
L.Ja.offsetX = function(c) {
  return new L.Xh(c)
};
L.Ja.offsetY = function(c) {
  return new L.Yh(c)
};
L.Ja.pa = function(c) {
  return new L.Gh(c)
};
tm.Hb = tm.Hb || {};
(function() {
  function c(a) {
    for(;a <= -Math.PI;) {
      a += 2 * Math.PI
    }
    for(;Math.PI < a;) {
      a -= 2 * Math.PI
    }
    return a
  }
  function a(a, c) {
    return Math.atan2(c.y - a.y, c.x - a.x)
  }
  tm.Hb.nd = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.ci = a
  }, tf:function(a, c) {
    var d = this.ci.Bk();
    if(c === i && 0 < d.length) {
      for(var f = [], s = 0, n = d.length;s < n;s++) {
        f[f.length] = this.di(a, d[s])
      }
      for(var q = function() {
        if(!q.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          q.Rg == f.length && (q.Ae = k, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, s = f.length;s--;) {
        f[s].Nf = q
      }
      q.Rg = 0;
      q.oi = function() {
        this.Rg++
      };
      q.Rg = 0;
      q.Ae = t;
      q.Gf = k;
      q.stop = t;
      return q
    }
    return this.di(a, c)
  }, di:function(a, c) {
    function d() {
      if(!d.stop) {
        d.na += 1;
        this.na = d.na;
        var a = d.rf, c = d.Zj;
        if(c) {
          if(d.na < d.Pg ? d.direction += d.Yd : d.na === d.Pg && (d.direction = d.$c), d.na < d.Qg ? d.speed += d.Ve : d.na === d.Qg && (d.speed = d.ke), d.na < d.Kg ? (d.Id += d.lf, d.Kd += d.mf) : d.na === d.Kg && (d.Id = d.jf, d.Kd = d.kf), this.x += Math.cos(d.direction) * d.speed * a.Jd, this.y += Math.sin(d.direction) * d.speed * a.Jd, this.x += d.Id * a.Jd, this.y += d.Kd * a.Jd, a.bh(this)) {
            if(a.kd || this.kd) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.na < d.mj || d.Ae)) {
              for(var f;f = d.nj.next();) {
                switch(f.Ib) {
                  case "fire":
                    c.Wj.call(this, f, a, d, c);
                    break;
                  case "wait":
                    a = 0;
                    d.mj = "number" === typeof f.value ? d.na + f.value : 0 !== (a = ~~f.value) ? d.na + a : d.na + eval(f.value);
                    return;
                  case "changeDirection":
                    c.Rj.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    c.Sj.call(this, f, d);
                    break;
                  case "accel":
                    c.Pj.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    c.Xj.call(this, f)
                }
              }
              d.Ae = k;
              d.Nf ? d.Nf.oi() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.Ae = k, d.Nf ? d.Nf.oi() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var c = {}, d = tm.Hb.nd.Be, f;
      for(f in d) {
        d.hasOwnProperty(f) && (c[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (c[f] = a[f])
      }
      return c
    }(a);
    a.target || h(Error("target is undefined in config."));
    c = c || "top";
    "string" === typeof c ? d.nj = this.ci.Yg(c) : c instanceof L.Qa ? d.nj = c.Yg() : (window.console.error(a, c), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Zj = this;
    d.rf = a;
    d.mj = -1;
    d.Ae = t;
    d.direction = 0;
    d.Ji = 0;
    d.speed = 0;
    d.Li = 0;
    d.Id = 0;
    d.Kd = 0;
    d.Yd = 0;
    d.$c = 0;
    d.Pg = -1;
    d.Ve = 0;
    d.ke = 0;
    d.Qg = -1;
    d.lf = 0;
    d.jf = 0;
    d.mf = 0;
    d.kf = 0;
    d.Kg = -1;
    d.na = -1;
    d.stop = t;
    d.Gf = k;
    return d
  }, Vj:function(a) {
    function c() {
      c.stop || (this.x += c.si, this.y += c.ti, c.rf.bh(this) || this.remove())
    }
    a = function(a) {
      var c = {}, d = tm.Hb.nd.Be, f;
      for(f in d) {
        d.hasOwnProperty(f) && (c[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (c[f] = a[f])
      }
      return c
    }(a);
    a.target || h(Error("target is undefined in config."));
    c.rf = a;
    c.direction = 0;
    c.speed = 0;
    c.si = 0;
    c.ti = 0;
    c.stop = t;
    c.Gf = k;
    return c
  }, Wj:function(c, d, f, A) {
    if(this.Zk === i || this.Jb) {
      var s = {label:c.Ga.label}, n;
      for(n in c.Ga.$a) {
        s[n] = c.Ga.$a[n]
      }
      if(s = d.ki(s)) {
        A = (n = 0 === c.Ga.pb.length) ? A.Vj(d) : A.tf(d, c.Ga);
        var q = this, m = {x:this.x + c.$a.offsetX, y:this.y + c.$a.offsetY};
        f.Ji = A.direction = function(n) {
          var g = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? c.$a.pa ? a(m, d.target) + g : a(q, d.target) + g : g - Math.PI / 2;
            case "absolute":
              return g - Math.PI / 2;
            case "relative":
              return f.direction + g;
            default:
              return f.Ji + g
          }
        }(c.direction || c.Ga.direction);
        f.Li = A.speed = function(a) {
          var c = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + c;
            case "sequence":
              return f.Li + c;
            default:
              return c
          }
        }(c.speed || c.Ga.speed);
        s.x = m.x;
        s.y = m.y;
        n && (A.si = Math.cos(A.direction) * A.speed * d.Jd, A.ti = Math.sin(A.direction) * A.speed * d.Jd);
        s.kd = !!s.kd;
        if(d.kd || s.kd) {
          s.rotation = (A.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, s.speed = A.speed
        }
        s.addEventListener("enterframe", A);
        d.hi ? d.hi.addChild(s) : this.parent && this.parent.addChild(s)
      }
    }
  }, Rj:function(d, f, r) {
    var A = eval(d.direction.value) * Math.DEG_TO_RAD, s = eval(d.Eb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        r.$c = a(this, d) + A;
        r.Yd = c(r.$c - r.direction) / s;
        break;
      case "absolute":
        r.$c = A - Math.PI / 2;
        r.Yd = c(r.$c - r.direction) / s;
        break;
      case "relative":
        r.$c = r.direction + A;
        r.Yd = c(r.$c - r.direction) / s;
        break;
      case "sequence":
        r.Yd = A, r.$c = r.direction + r.Yd * (s - 1)
    }
    r.Pg = r.na + s
  }, Sj:function(a, c) {
    var d = eval(a.speed.value), f = eval(a.Eb);
    switch(a.speed.type) {
      case "absolute":
        c.ke = d;
        c.Ve = (c.ke - c.speed) / f;
        break;
      case "relative":
        c.ke = d + c.speed;
        c.Ve = (c.ke - c.speed) / f;
        break;
      case "sequence":
        c.Ve = d, c.ke = c.speed + c.Ve * f
    }
    c.Qg = c.na + f
  }, Pj:function(a, c) {
    var d = eval(a.Eb);
    c.Kg = c.na + d;
    if(a.Ec) {
      var f = eval(a.Ec.value);
      switch(a.Ec.type) {
        case "absolute":
        ;
        case "sequence":
          c.lf = (f - c.Id) / d;
          c.jf = f;
          break;
        case "relative":
          c.lf = f, c.jf = (f - c.Id) * d
      }
    }else {
      c.lf = 0, c.jf = c.Id
    }
    if(a.Hc) {
      switch(f = eval(a.Hc.value), a.Hc.type) {
        case "absolute":
        ;
        case "sequence":
          c.mf = (f - c.Kd) / d;
          c.kf = f;
          break;
        case "relative":
          c.mf = f, c.kf = (f - c.Kd) * d
      }
    }else {
      c.mf = 0, c.kf = c.Kd
    }
  }, Xj:function(a) {
    var c = tm.event.Event(a.mk);
    if(a.mb) {
      for(var d in a.mb) {
        c[d] = a.mb[d]
      }
    }
    this.dispatchEvent(c)
  }});
  var f = function() {
    var a = tm.graphics.Canvas();
    a.resize(8, 8);
    a.setTransformCenter();
    a.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    a.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return tm.asset.Texture(a.canvas.toDataURL())
  }();
  tm.Hb.ik = function(a) {
    var c = tm.app.Sprite(f, 8, 8);
    c.label = a.label;
    return c
  };
  var d = l;
  tm.Hb.ri = function(a) {
    if(d === l) {
      if(!a.getRoot().app) {
        return k
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Hb.zl = function() {
    return k
  };
  tm.Hb.nd.Be = {ki:tm.Hb.ik, bh:tm.Hb.ri, Pl:0, kd:t, Jd:2, target:l};
  L.ha.prototype.tf = function(a) {
    return tm.Hb.nd(this).tf(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(J());
tm.main(function() {
  gls2.vj("#canvas2d");
  gls2.core.run()
});
gls2.vj = tm.createClass({superClass:tm.display.CanvasApp, Ge:0, Fk:0, Hk:0, Gk:0, Dk:0, Ek:l, ve:3, Hd:3, vi:1, ba:l, init:function(c) {
  gls2.core !== l && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(c);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.Eh = [];
  this.keyboard = tm.input.Keyboard(window);
  c = tm.ui.LoadingScene({assets:{achevements:"assets/achevements.json", tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex4:"assets/tex4.png", tex5:"assets/tex5.png", tex_tank1:"assets/tex_tank1.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", "kanade-cannon":"assets/kanade-cannon.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", 
  laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", 
  "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/explode4":"assets2/sen_ge_bom14.mp3", "sound/explode5":"assets2/sen_ge_bom17.mp3", "sound/explode6":"assets2/sen_ge_hasai01.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/achevement":"assets2/se_maoudamashii_system46.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", 
  "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, width:480, height:640, nextScene:function() {
    this.Yj();
    return gls2.TitleScene()
  }.bind(this)});
  c.bg.canvas.clearColor("black");
  this.replaceScene(c)
}, li:function() {
  var c = window.achevements, a = tm.asset.AssetManager.get("achevements").data;
  return!c ? 0 : Math.floor(c.reduce(function(c, d) {
    return a[d] ? c + M[a[d].grade] : c
  }, 0))
}, update:function() {
  for(var c = [].concat(this.Eh), a = 0;a < c.length;a++) {
    c[a].frame === this.frame ? c[a].fn() : this.Eh.erase(c[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Yj:function() {
  gls2.va.setup(12345);
  "tex1 tex2 tex3 tex4 tex5 tex_tank1 yotsubaLeaf kanade-cannon".split(" ").forEach(function(c) {
    var a = tm.asset.AssetManager.get(c), f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawTexture(a, 0, 0);
    f = f.getBitmap();
    f.filter({calc:function(a, c, d, f, s) {
      s.setPixelIndex(c, a[0], 0, 0)
    }});
    var d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawBitmap(f, 0, 0);
    tm.asset.AssetManager.set(c + "Red", d)
  });
  gls2.fa.setup();
  gls2.oa.setup();
  this.ba = gls2.bb();
  tm.asset.Loader().load({bgm2:"assets2/nc28687.mp3", bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/Blue_Moon_MIKU_Append.mp3"})
}, Al:function() {
  this.stop()
}, Ni:t, sh:function(c, a) {
  var f = this.ba.Ee.slice(0, this.ba.za + 1).average(), f = {score:Math.floor(this.ba.score), stage:this.ba.za + 1, continueCount:this.ba.Qc, shipType:this.ba.da.type, shipStyle:this.ba.da.style, fps:f, screenShot:this.ba.he};
  c ? (f.userName = c, this.Ni = t) : this.Ni = k;
  tm.util.Ajax.load({url:"/api/ranking/post", data:f, type:"POST", dataType:"json", success:function(c) {
    if(c) {
      if(c.success) {
        a(l, k, c.scoreId)
      }else {
        if(c.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.sh(l, a);
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(c = "";"" === c;) {
                c = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.Ak())
              }
              c !== l && (c = c.substring(0, 10), this.sh(c + " (\u533f\u540d)", a))
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
}, Ak:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc(30) \u76f8\u7530\u7dcf\u7406".split(" ").pickup()
}, Eh:l, setTimeoutF:function(c, a) {
  timeoutTasks.push({frame:this.frame + a, fn:c})
}, xa:function(c) {
  if(window.achevements && -1 === window.achevements.indexOf(c)) {
    var a = tm.asset.AssetManager.get("achevements").data;
    if(a[c]) {
      var f = window.achevements;
      -1 == f.indexOf(c) && (f.push(c), tm.util.Ajax.load({url:"/api/achevement/" + c, type:"POST", dataType:"json", success:function() {
        a[c] && (gls2.ua("achevement"), this.ba.Gi.addChild(gls2.Qh(a[c].title)))
      }.bind(this), error:function() {
        console.warn("error!")
      }}))
    }
  }
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Tc = function(c, a) {
  return(c.x - a.x) * (c.x - a.x) + (c.y - a.y) * (c.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.bb.oe && gls2.bb.oe.Oe(0)
};
var R = [1E9, 1E10], T = [3, 2, 1], U = [6, 4, 2], W = [1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], X = [1, 1, 2, 3, 4, 8, 16, 20, 24, 32, 40], M = [0.1, 0.4, 1];
(function() {
  var c = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.Zh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Za:0, Cc:k, ue:k, eb:t, ba:l, speed:0, Pb:l, Xd:l, Ri:l, Df:l, Lb:l, Zg:l, Ac:l, $g:l, ah:l, frame:0, init:function(a, d, j) {
    this.superInit("fighter", 64, 64);
    this.ba = a;
    this.type = d;
    this.style = j;
    tm.Hb.nd.Be.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Xd = this.Ri = gls2.ai(d, 100);
    this.Df = gls2.ai(3, 100);
    this.Lb = gls2.Vh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Lb.visible = t;
    this.Uj();
    this.Pb = this.Tj();
    1 === this.style && (this.Pb = [this.Pb[1], this.Pb[2]]);
    this.Ac = tm.display.CanvasElement().addChildTo(this);
    d = 0;
    for(j = this.Pb.length;d < j;d++) {
      var p = this.Pb[d];
      gls2.oj(this, p).setPosition(p.x, p.y).addChildTo(this.Ac)
    }
    this.Nk = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Nk.blendMode = "lighter";
    this.$g = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.$g.blendMode = "lighter";
    this.$g.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Ya && !a.Ma
    };
    this.ah = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.ah.blendMode = "lighter";
    this.ah.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Ya && !a.Ma
    };
    this.He = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.He.blendMode = "lighter";
    this.He.rotation = -90;
    this.He.strokeStyle = "rgba(180,180,255,0.4)";
    this.He.update = function() {
      this.visible = a.Ma
    };
    this.He.draw = function(c) {
      c.lineCap = "round";
      var d = a.ae / 800;
      c.strokeStyle = "rgba(50,50,255,0.4)";
      c.lineWidth = "12";
      c.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, t);
      c.strokeStyle = "rgba(100,100,255,0.4)";
      c.lineWidth = "8";
      c.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, t);
      c.strokeStyle = "rgba(180,180,255,0.4)";
      c.lineWidth = "4";
      c.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, t)
    };
    this.Ik = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Ik.update = function() {
      this.visible = a.Ma
    };
    c === l && (c = gls2.Hh(this.ba.ka))
  }, Tj:function() {
    if(0 === this.type) {
      return[{x:0, zd:0, y:40, d:0, hc:k, $b:-0.7, v:k}, {x:0, zd:0, y:40, d:0, hc:k, $b:0.5, v:k}, {x:0, zd:0, y:40, d:0, hc:k, $b:-0.5, v:k}, {x:0, zd:0, y:40, d:0, hc:k, $b:0.7, v:k}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, hc:t, $b:-0.7, v:k}, {x:-40, y:40, d:0.1, hc:t, $b:-0.5, v:k}, {x:40, y:40, d:0.1, hc:k, $b:0.5, v:k}, {x:70, y:20, d:0.1, hc:k, $b:0.7, v:k}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, hc:t, $b:-0.7, v:k}, {x:-30, y:20, d:0.4, hc:t, $b:-0.5, v:k}, {x:30, y:20, d:0.4, hc:k, $b:0.5, v:k}, {x:60, y:40, d:0.6, hc:k, $b:0.7, v:k}]
    }
  }, Uj:function() {
    this.Zg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Zg.setFrameIndex(5);
    this.Zg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, fd:-1, Zd:t, ac:t, update:function(f) {
    this.visible = this.eb ? 0 === f.frame / 2 % 2 : k;
    var d = f.keyboard;
    if(this.Cc) {
      var j = d.getKeyAngle();
      j !== l && (j = a[j], this.x += j.x * this.speed * (this.ac ? 0.5 : 1), this.y += j.y * this.speed * (this.ac ? 0.5 : 1));
      this.x = gls2.ja.clamp(this.x, 15, 465);
      this.y = gls2.ja.clamp(this.y, 15, 625);
      var p = d.getKey("c") && this.ue, j = d.getKey("z") && this.ue;
      this.fd = p ? this.fd + 1 : this.fd - 1;
      this.fd = gls2.ja.clamp(this.fd, -1, 10);
      this.ac = j && p || 10 === this.fd;
      p = this.ba.Ma ? 3 : 5;
      this.Zd = !this.ac && (0 <= this.fd || j) && 0 === f.frame % p;
      j && (this.fd = 0);
      this.Lb.x = this.x;
      this.Lb.y = this.y - 40;
      d.getKeyDown("x") && this.ue && (0 < this.ba.Ya && !this.ba.Ma ? (this.ba.ml(), gls2.Oj(this).addChildTo(this.ba)) : !this.ba.Dd && 0 < this.ba.Qb && (this.Kb = gls2.ja.clamp(this.Kb - 2, 0, 1), this.ba.se(-0.02), gls2.Jh(this, this.ba).setPosition(gls2.ja.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ba), gls2.core.xa("bomb1"), this.ba.pf[this.ba.za] += 1))
    }else {
      this.ac = this.Zd = t
    }
    this.Zd && (j = Math.sin(0.2 * f.frame), p = this.Xd.fire(this.x - 7 - 6 * j, this.y - 5, -90), p !== l && p.addChildTo(this.ba), p = this.Xd.fire(this.x + 7 + 6 * j, this.y - 5, -90), p !== l && p.addChildTo(this.ba));
    if(this.ac) {
      j = 0;
      for(p = this.Pb.length;j < p;j++) {
        this.Pb[j].v = t
      }
      this.Ac.rotation = 0
    }else {
      this.Lb.visible = t;
      j = 0;
      for(p = this.Pb.length;j < p;j++) {
        this.Pb[j].v = k
      }
    }
    this.hk(d);
    this.Qj(d, f.frame);
    0 === f.frame % 2 && (c.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ba), c.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ba));
    this.frame = f.frame
  }, Sc:function() {
    this.ac = this.Zd = t;
    this.ba.uf();
    this.ba.rb = 0;
    this.ba.lb = 0;
    this.ba.Sa = 0
  }, hk:function(a) {
    if(0 === this.type) {
      for(a = this.Pb.length;this.Pb[--a] !== i;) {
        var c = this.Pb[a];
        0 === a ? c.x = c.zd + 60 * Math.cos(0.1 * this.frame) : 1 === a ? c.x = c.zd + -60 * Math.cos(0.1 * this.frame) : 2 === a ? c.x = c.zd + 60 * Math.sin(0.1 * this.frame) : 3 === a && (c.x = c.zd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (c = this.Ac, c.rotation = this.ac ? 0 : this.Cc && a.getKey("left") ? Math.max(c.rotation - 3, -50) : this.Cc && a.getKey("right") ? Math.min(c.rotation + 3, 50) : 3 < c.rotation ? c.rotation - 3 : -3 > c.rotation ? c.rotation + 3 : 0)
    }
  }, Qj:function(a, c) {
    this.Cc && a.getKey("left") ? this.Za = gls2.ja.clamp(this.Za - 0.2, -3, 3) : this.Cc && a.getKey("right") ? this.Za = gls2.ja.clamp(this.Za + 0.2, -3, 3) : 0 > this.Za ? this.Za = gls2.ja.clamp(this.Za + 0.2, -3, 3) : 0 < this.Za && (this.Za = gls2.ja.clamp(this.Za - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Za) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(c / 2) % 3) + ~~this.Za) : 2 === this.type && this.setFrameIndex(31 + ~~this.Za);
    return c
  }});
  gls2.oj = tm.createClass({superClass:tm.display.AnimationSprite, wd:l, da:l, init:function(a, c) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.wd = c;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(c.hc ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.wd.v) {
      this.x = this.wd.x * (this.da.ba.Ma ? 1.5 : 1);
      this.y = this.wd.y * (this.da.ba.Ma ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.wd.d * this.wd.$b);
      var d = this.parent.localToGlobal(this);
      this.wd.v && 0 === a.frame % 2 && c.clone(40).setPosition(d.x, d.y).addChildTo(this.da.ba);
      this.da.Zd && (d = this.da.Xd.fire(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== l && d.addChildTo(a.ba))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var c = l;
  gls2.Sd = tm.createClass({superClass:tm.display.Sprite, speed:0, td:0, dk:1, Fi:0, ib:k, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.td = 1;
    c === l && (c = gls2.Ta(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.Ue(a)
  }, update:function() {
    this.x += this.Wc;
    this.y += this.sc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, Ue:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Af:function(a) {
    for(var d = 0;d < a;d++) {
      var j = c.clone().setPosition(this.x, this.y).addChildTo(this.parent), p = gls2.ja.randf(2, 8), r = 2 * Math.random() * Math.PI;
      j.Ca = Math.cos(r) * p;
      j.Da = Math.sin(r) * p;
      j.scaleX = j.scaleY = (gls2.ja.randf(0.1, 0.5) + gls2.ja.randf(0.1, 0.5)) / 2;
      j.addEventListener("enterframe", function() {
        this.x += this.Ca;
        this.y += this.Da;
        this.Ca *= 0.9;
        this.Da *= 0.9
      })
    }
  }});
  gls2.Sd.ze = function() {
    for(var c = [].concat(a), d = 0, j = c.length;d < j;d++) {
      c[d].remove()
    }
  };
  var a = gls2.Sd.qb = [];
  gls2.ai = tm.createClass({ed:l, Di:t, init:function(c, d) {
    this.Di = 3 === c;
    this.ed = [];
    for(var j = 0;j < d;j++) {
      var p = gls2.Sd(c), r = this;
      p.addEventListener("added", function() {
        this.ra = 10;
        a.push(this)
      });
      p.addEventListener("removed", function() {
        var c = a.indexOf(this);
        -1 !== c && a.splice(c, 1);
        r.ed.push(this)
      });
      this.Di && p.addEventListener("enterframe", function(a) {
        this.setScale((this.dk + this.Fi) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.ed.push(p)
    }
  }, fire:function(a, c, j) {
    var p = this.ed.pop();
    if(p === i) {
      return l
    }
    var r = gls2.ja.degToRad(j);
    p.Wc = Math.cos(r) * p.speed;
    p.sc = Math.sin(r) * p.speed;
    p.setPosition(a, c);
    p.rotation = j + 90;
    return p
  }, ie:function(a) {
    for(var c = this.ed.length;this.ed[--c] !== i;) {
      this.ed[c].td = 1 + 0.1 * a, this.ed[c].Fi = 0.2 * a
    }
  }})
})();
gls2.Vh = tm.createClass({superClass:tm.display.Sprite, da:l, ba:l, zc:0, frame:0, dj:l, color:l, ii:0, Lg:0, ek:t, head:l, zi:l, Zb:l, ib:k, td:1, de:l, init:function(c, a) {
  this.da = c;
  this.ba = c.ba;
  this.ii = 0 === this.da.style ? 1 : 1.2;
  this.Lg = 0 === this.da.style ? 50 : 75;
  var f = this;
  this.dj = a;
  this.superInit(a.redBody, this.Lg, 100);
  this.boundingHeightBottom = 1;
  this.Rl = 0;
  this.origin.y = 1;
  var d = this.Zb = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.zi = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = f.zc - f.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < f.zc
  };
  this.Ue(["red", "green", "blue"][this.da.type]);
  this.ie(0)
}, Ue:function(c) {
  this.color = c;
  this.image = tm.asset.AssetManager.get(this.dj[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Zb.gotoAndPlay(this.color);
  this.zi.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.de = l;
  return this
}, ie:function(c) {
  this.boundingWidth = this.width = this.Lg + 30 * c / 10;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.td = 1 * this.ii + 0.25 * c;
  0 === c ? this.Ue(["red", "green", "blue"][this.da.type]) : this.Ue("hyper")
}, Af:function(c, a) {
  this.de === l && this.pi();
  a = a || this.zc;
  for(var f = 0;f < c;f++) {
    var d = this.de.clone().setPosition(this.x, a).addChildTo(this.ba), j = gls2.ja.randf(8, 14), p = gls2.ja.randf(0, Math.PI);
    d.Ca = Math.cos(p) * j;
    d.Da = Math.sin(p) * j;
    d.scaleX = d.scaleY = (gls2.ja.randf(0.5, 1.5) + gls2.ja.randf(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.Ca;
      this.y += this.Da;
      this.Ca *= 0.95;
      this.Da *= 0.95
    })
  }
}, wk:function(c, a, f) {
  this.de === l && this.pi();
  for(var d = 0;d < c;d++) {
    var j = this.de.clone().setPosition(a, f).addChildTo(this.ba), p = gls2.ja.randf(12, 20), r = gls2.ja.randf(0, Math.PI);
    j.Ca = Math.cos(r) * p;
    j.Da = Math.sin(r) * p;
    j.scaleX = j.scaleY = (gls2.ja.randf(1, 3) + gls2.ja.randf(1, 3)) / 2;
    j.addEventListener("enterframe", function() {
      this.x += this.Ca;
      this.y += this.Da;
      this.Ca *= 0.95;
      this.Da *= 0.95
    })
  }
}, pi:function() {
  this.de = "hyper" === this.color ? gls2.Ta(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Ta(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(c) {
  (this.visible = this.da.ac) ? (this.zc = Math.max(0, this.zc - 40), this.height = this.y - this.zc, 0 === c.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.zc = this.y - 40;
  this.ek = this.visible
}, draw:function(c) {
  var a = this.srcRect, f = this._image.element;
  a.x = a.width * this.frame;
  c.context.drawImage(f, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Dl:function() {
  return this.zc
}, gl:function(c) {
  this.zc = c;
  this.head.update()
}});
gls2.Vh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.zc
});
(function() {
  gls2.Jh = tm.createClass({superClass:tm.app.Object2D, ib:k, ba:l, init:function(a, f) {
    this.superInit();
    this.da = a;
    this.ba = f;
    this.Yi = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Yi.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Yi));
    this.gi();
    c === l && (c = gls2.Ta(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.na = 0;
    this.Qe = 1;
    this.addEventListener("added", function() {
      this.ba.Dd = k;
      this.da.eb = k;
      this.ba.Qb -= 1;
      this.ba.Ff = t;
      this.ba.uf();
      this.ba.Bb("drop BOMBER!!", k);
      gls2.ua("bomb");
      gls2.ua("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ba.Dd = t;
      this.da.eb = t
    })
  }, gi:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ja.randf(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.Qe + 2 * a * Math.PI / this.b;
      c.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.na;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.na += 3.6, this.Qe = -1) : (this.b = 8, this.na += 1.8, this.Qe = 1)
  }});
  gls2.Wh = tm.createClass({superClass:gls2.Jh, init:function(a, c) {
    this.superInit(a, c);
    this.addEventListener("added", function() {
      this.ba.Qb = 0
    })
  }, gi:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ja.randf(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.Qe + 2 * a * Math.PI / this.b;
      c.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.na;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.na += 1.8, this.Qe = 1)
  }});
  var c = l
})();
gls2.Kh = tm.createClass({superClass:tm.display.Sprite, Wc:0, sc:0, da:l, na:0, init:function(c, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(c, a);
  this.da = f;
  this.sc = 1;
  this.Wc = 0.5 > gls2.va.random() ? -1 : 1;
  this.na = 0
}, update:function() {
  this.x += this.Wc;
  this.y += 2 * this.sc;
  if(2025 > gls2.Tc(this, this.da)) {
    this.da.ba.bk(1), this.remove()
  }else {
    if(3E3 > this.na) {
      if(30 > this.x || 450 < this.x) {
        this.Wc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.sc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.na += 1
}});
gls2.Oh = tm.createClass({superClass:tm.display.Sprite, Wc:0, sc:0, da:l, na:0, init:function(c, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var d = -1;1 >= d;d++) {
    for(var j = -1;1 >= j;j++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(d, j).addChildTo(this)
    }
  }
  this.setPosition(c, a);
  this.da = f
}, update:function() {
  this.y += 0.5;
  4096 > gls2.Tc(this, this.da) && (this.da.ba.wi(), gls2.core.xa("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.oa = {};
gls2.oa.setup = function() {
  gls2.lk = {};
  gls2.oa.explosion = Array.range(0, 3).map(function(c) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + c, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.lk.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.oa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.oa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.oa.particle16 = gls2.Ta(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.oa.Af = function(c, a, f) {
  c = gls2.oa.particle16.clone().setPosition(c, a);
  c.ib = k;
  c.addChildTo(f);
  f = gls2.ja.randf(5, 20);
  a = gls2.ja.randf(Math.PI, 2 * Math.PI);
  c.Ca = Math.cos(a) * f;
  c.Da = Math.sin(a) * f;
  c.scaleX = c.scaleY = (gls2.ja.randf(0.1, 0.5) + gls2.ja.randf(0.1, 0.5)) / 2;
  c.addEventListener("enterframe", function() {
    this.x += this.Ca;
    this.y += this.Da;
    this.Ca *= 0.9;
    this.Da *= 0.9
  })
};
gls2.oa.Xg = function(c, a, f, d) {
  d = d || 1.8;
  var j = tm.display.Sprite().setPosition(c, a).setScale(0.1).setBlendMode("lighter");
  j.ib = k;
  j.addChildTo(f);
  j.image = gls2.oa.shockwaveImage;
  j.tweener.clear().to({scaleX:d, scaleY:d, alpha:0}, 800, "easeOutQuad").call(function() {
    j.remove()
  })
};
gls2.oa.yk = function(c, a, f) {
  var d = tm.display.Sprite().setPosition(c, a).setScale(3).setBlendMode("lighter");
  d.ib = k;
  d.addChildTo(f);
  d.image = gls2.oa.shockwaveImage;
  d.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
};
gls2.oa.xk = function(c, a, f) {
  c = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(c, a).setScale(0.1, 0.1);
  c.ib = k;
  c.addChildTo(f);
  c.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(c))
};
gls2.oa.wf = function(c, a, f, d) {
  gls2.ua("explode");
  var j = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(c, a).setRotation(360 * Math.random()).gotoAndPlay();
  j.ib = k;
  if(d !== i) {
    var p = d.x, r = d.y;
    j.addEventListener("enterframe", function() {
      this.x += p;
      this.y += r;
      p *= 0.99;
      r *= 0.99
    })
  }
  j.addChildTo(f);
  gls2.oa.Xg(c, a, f)
};
gls2.oa.ok = function(c, a, f) {
  gls2.ua("explode");
  var d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.ib = k;
  d.addChildTo(f);
  d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.ib = k;
  d.addChildTo(f);
  d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.ib = k;
  d.addChildTo(f)
};
gls2.oa.hb = function(c, a, f) {
  gls2.ua("explode2");
  gls2.ua("explode3");
  for(var d = ~~(Math.random() * gls2.Yb.noise.length), j = 0;20 > j;j++) {
    var p = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(c, a).setRotation(360 * Math.random()).gotoAndPlay();
    p.a = 2 * Math.PI * Math.random();
    p.v = 10 * Math.pow(gls2.Yb.noise.at(~~(gls2.Yb.noise.length * j / 20) + d), 2);
    p.ib = k;
    p.addChildTo(f)
  }
  gls2.oa.Xg(c, a, f, 5)
};
gls2.oa.Bd = function(c, a, f) {
  gls2.ua("explode2");
  gls2.ua("explode3");
  for(var d = ~~(Math.random() * gls2.Yb.noise.length), j = 0;20 > j;j++) {
    for(var p = 2 * Math.PI * j / 20, r = Math.pow(gls2.Yb.noise.at(~~(gls2.Yb.noise.length * j / 20) + d), 2), A = 0;3 > A;A++) {
      var s = 4 * r * (A + 1), n = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.na += 1
      }).setScale(0.3 * (3 - A)).setPosition(c, a).setRotation(360 * Math.random()).gotoAndPlay();
      n.rotation = 2 * Math.random() * Math.PI;
      n.ib = k;
      n.na = 0;
      n.a = p;
      n.v = s;
      n.addChildTo(f)
    }
  }
};
gls2.Xf = tm.createClass({superClass:tm.app.Object2D, target:l, qc:0, angle:0, alpha:2, ib:k, reverse:t, init:function(c, a) {
  this.superInit();
  this.target = c;
  this.reverse = a;
  this.angle = 0;
  this.qc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(c) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === c.frame % 2) {
      for(c = 0;9 > c;c++) {
        var a = this.angle + 2 * c / 9 * Math.PI;
        gls2.Ta(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.qc + this.target.x, Math.sin(a) * this.qc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.qc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.qc || 200 < this.qc) && this.remove()
  }
}});
gls2.Oj = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, ib:k, init:function(c) {
  this.superInit();
  this.target = c;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var c = 0;5 > c;c++) {
      var a = gls2.Ta(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ja.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ja.rand(-2, 2)).on("enterframe", function() {
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
gls2.Qh = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(c) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + c + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).setFillStyle("rgba(255, 255, 255, 0.5)").addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, Jl:function() {
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
gls2.hg = tm.createClass({superClass:tm.app.Object2D, ib:k, ba:l, na:0, init:function(c, a, f) {
  this.superInit();
  this.ba = f;
  this.setPosition(c, a);
  this.addChildTo(f)
}, onadded:function() {
  for(var c = 0;20 > c;c++) {
    var a = 360 * Math.random(), f = 50 * gls2.Yb.noise[Math.floor(gls2.Yb.noise.length * a / 360)];
    tm.geom.Vector2(this.x, this.y);
    a = tm.geom.Vector2().setAngle(a, f);
    for(f = 0;5 > f;f++) {
      var d = tm.display.Sprite("explode" + Math.floor(3 * Math.random()), 100, 100).setPosition(this.x, this.y).setScale(1 + 3.5 * Math.random()).setRotation(360 * Math.random());
      d.Ca = 0.02 * a.x * (6 - f);
      d.Da = 0.02 * a.y * (6 - f);
      d.$d = 3 * -f + Math.floor(-10 * Math.random() - 7);
      d.update = function() {
        this.$d += 0.3;
        0 > this.$d ? this.visible = t : 64 <= this.$d ? this.remove() : (this.setFrameIndex(Math.floor(this.$d)), this.visible = k, this.x += this.Ca, this.y += this.Da, this.blendMode = 10 > this.$d ? "lighter" : "source-over")
      };
      d.ib = k;
      d.addChildTo(this.ba)
    }
  }
  d = gls2.Ta(500, 0.0010, 1.003);
  for(c = 0;80 > c;c++) {
    var a = 360 * Math.random(), f = 15 * gls2.Yb.noise[Math.floor(gls2.Yb.noise.length * a / 360)], j = d.clone().setPosition(this.x, this.y).addChildTo(this.ba);
    j.Ld = tm.geom.Vector2().setAngle(a, f);
    j.position.add(tm.geom.Vector2.mul(j.Ld, -40));
    j.setScale(0.1, 0.1);
    j.na = 0;
    j.on("enterframe", function() {
      this.na += 1;
      this.position.add(this.Ld);
      this.scaleX += 0.01;
      this.scaleY += 0.01;
      80 < this.na && (this.nf = 0.99)
    })
  }
  a = this.tweener.clear().wait(200);
  for(c = 0;9 > c;c++) {
    a.wait(3 + 10 * Math.random()).call(function() {
      gls2.ua("explode4")
    }).wait(3 + 10 * Math.random()).call(function() {
      gls2.ua("explode2")
    })
  }
}});
gls2.Fj = tm.createClass({superClass:tm.graphics.Canvas, ba:l, Wd:l, Db:l, frame:0, init:function(c) {
  this.superInit("#scoreLabel");
  this.ba = c;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Wd = gls2.pj(200);
  this.Db = gls2.$h(this)
}, update:function() {
  this.clear();
  this.ba.yd !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Db.Dc - 20, 470 * this.ba.yd.ra / this.ba.yd.ad, 20), this.strokeRect(5, this.Db.Dc - 20, 470, 20), this.clear(263.5, this.Db.Dc - 20 + 2, 2, 16), this.clear(52, this.Db.Dc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var c;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ba.score)).padding(16, " ");
  c = "";
  for(var a = 0;a < score.length;a += 4) {
    c += score.substring(a, a + 4) + " "
  }
  this.fillText(c, 192, this.Db.Dc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ba.rb)).padding(8, " ");
  c = "";
  for(a = 0;a < score.length;a += 4) {
    c += score.substring(a, a + 4) + " "
  }
  this.fillText(c + "x " + (~~(this.ba.Sa / 1E3) + 1), this.Db.Fe + 192, 22);
  c = [0, 1, 4][this.ba.da.type];
  for(a = 0;a < this.ba.ld - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * c, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * L.Va.bc.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ba.Ke + " hit", this.Db.Fe + 10, 95);
  0 < ~~this.ba.Sa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ba.Sa + " HIT!!", 10, 0.5 * -this.Db.Dc + 115));
  0 === this.frame % 2 && (!this.ba.Ma && 0 < this.ba.Ya ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ba.Ya, 5, 637)) : this.ba.Ma && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ba.Rc, 5, 637)));
  for(a = 0;a < this.ba.Qb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ba.Ff && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Wd.update();
  this.Wd.rh = this.Db.Dc + 5;
  this.Wd.draw(this);
  this.frame += 1
}});
gls2.$h = tm.createClass({superClass:tm.app.Object2D, Sb:l, Fe:0, Dc:0, init:function(c) {
  this.superInit();
  this.Sb = c
}});
(function() {
  var c = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.wj = tm.createClass({superClass:tm.graphics.Canvas, Fa:l, Rb:l, ec:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Fa = gls2.xj();
    this.Fa.ka = this;
    this.Fa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Rb = [];
    this.ec = [];
    for(var a = 0;5 > a;a++) {
      this.Rb[a] = 40 * c[a], this.ec[a] = this.Rb[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Fa.Ca = Math.cos(this.Fa.direction) * this.Fa.speed;
    this.Fa.Da = Math.sin(this.Fa.direction) * this.Fa.speed;
    for(var c = 0;5 > c;c++) {
      for(this.Fa.oc[c] += this.Fa.Ca * Math.pow(0.8, c);3 * this.Rb[c] < this.Fa.oc[c];) {
        this.Fa.oc[c] -= 3 * this.Rb[c]
      }
      for(;this.Fa.oc[c] < 3 * -this.Rb[c];) {
        this.Fa.oc[c] += 3 * this.Rb[c]
      }
      for(this.Fa.pc[c] += this.Fa.Da * Math.pow(0.8, c);2 * this.ec[c] < this.Fa.pc[c];) {
        this.Fa.pc[c] -= 2 * this.ec[c]
      }
      for(;this.Fa.pc[c] < 2 * -this.ec[c];) {
        this.Fa.pc[c] += 2 * this.ec[c]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Fa.background !== l ? this.clearColor(this.Fa.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * c[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * c[a] + ")"}]).toStyle();
      this.beginPath();
      for(var f = 0, d = this.Fa.oc[a] - 3 * this.Rb[a];d < 480 + 3 * this.Rb[a];d += 1.5 * this.Rb[a]) {
        for(var f = 0 === f ? this.ec[a] : 0, j = this.Fa.pc[a] - 2 * this.ec[a] + f;j < 640 + 2 * this.ec[a];j += 2 * this.ec[a]) {
          this.line(d, j, d + this.Rb[a], j), this.line(d, j, d - this.Rb[a] / 2, j + this.ec[a]), this.line(d, j, d - this.Rb[a] / 2, j - this.ec[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.xj = tm.createClass({superClass:tm.app.Object2D, oc:0, pc:0, direction:0, speed:0, Ca:0, Da:0, background:l, init:function() {
    this.superInit();
    this.oc = [];
    this.pc = [];
    for(var a = 0;5 > a;a++) {
      this.oc[a] = 240, this.pc[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Da = this.Ca = 0
  }})
})();
gls2.Dg = tm.createClass({superClass:tm.display.Sprite, Ii:t, ba:l, da:l, Uc:t, Cd:t, yh:t, Ca:0, Da:0, init:function(c) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.Ii = c) && this.setScale(2, 2);
  this.ba = gls2.bb.oe;
  this.da = this.ba.da;
  this.addChildTo(this.ba);
  c = 0.5 * gls2.va.random() * Math.PI - 0.75 * Math.PI;
  var a = 10 + 30 * Math.random();
  this.Ca = Math.cos(c) * a;
  this.Da = Math.sin(c) * a
}, update:function() {
  this.da.ac && (this.Cd = k);
  if(this.da.parent === l) {
    this.Cd = t
  }else {
    if(100 > gls2.Tc(this, this.da)) {
      this.ba.Pk(this);
      this.remove();
      return
    }
    1E4 > gls2.Tc(this, this.da) && (this.Cd = k);
    if(this.yh && this.Cd) {
      var c = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 8 * Math.cos(c);
      this.y += 8 * Math.sin(c)
    }else {
      this.yh || (this.x += this.Ca, this.y += this.Da, this.Ca *= 0.8, this.Da *= 0.8, -1 < this.Ca && (1 > this.Ca && -1 < this.Da && 1 > this.Da) && (this.yh = k))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.bi = tm.createClass({superClass:gls2.Dg, Uc:t, init:function(c) {
  this.superInit(c)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.Nj = tm.createClass({superClass:gls2.Dg, Uc:k, init:function(c) {
  this.superInit(c)
}, update:function() {
  this.Cd || (this.x += this.ba.ka.Ca, this.y += this.ba.ka.Da);
  this.superClass.prototype.update.call(this)
}});
gls2.qd = tm.createClass({da:l, ba:l, $:l, frame:0, init:function(c) {
  this.ba = c;
  this.da = c.da;
  this.je();
  this.$ = gls2.Mj();
  this.frame = 0
}, je:J(), update:function() {
  this.nk(this.frame);
  this.frame += 1
}, nk:function(c) {
  c = this.$.get(c);
  if(c !== l) {
    if("function" === typeof c.value) {
      c.value.call(this)
    }else {
      if(gls2.Nh[c.value] !== i) {
        var a = gls2.Nh[c.value];
        if(a !== l) {
          if(a[0].yd === k) {
            this.Ua(a[0])
          }else {
            for(var f = 0;f < a.length;f++) {
              var d = this.Ua(a[f]);
              c.stop && d.addEventListener("enemyconsumed", function() {
                this.$.le = t
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Ua:function(c) {
  this.ba.vf += 1;
  c = c.hard(this.ba, c.soft).setPosition(c.x, c.y).addChildTo(this.ba);
  c.Ka = this;
  c.Ne();
  return c
}, te:function(c) {
  gls2.xf();
  this.ba.Ce = k;
  for(var a = tm.app.Object2D().setPosition(240, 320), f = -4;4 >= f;f++) {
    for(var d = -4;4 >= d;d++) {
      var j = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(f, d);
      j.na = 0;
      j.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.na) + 0.5;
        this.na += 1
      };
      j.addChildTo(a)
    }
  }
  a.tweener.wait(3E3).call(c).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = J();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.ba.Ug);
  gls2.ua("warning");
  gls2.ua("voWarning")
}});
gls2.qd.create = function(c, a) {
  switch(a) {
    case 0:
      return gls2.Hj(c);
    case 1:
      return gls2.Ij(c);
    case 2:
      return gls2.Jj(c);
    case 3:
      return gls2.Kj(c);
    case 4:
      return gls2.Lj(c);
    default:
      h(Error("stageNumber = " + a))
  }
};
gls2.Mj = tm.createClass({index:0, data:l, le:t, init:function() {
  this.data = {}
}, add:function(c, a, f) {
  this.index += c;
  this.data[this.index] = {stop:f, value:a}
}, get:function(c) {
  c = this.data[c];
  return c === i ? l : c.stop === k ? (this.le = k, c) : this.le ? l : c
}});
gls2.Hj = tm.createClass({superClass:gls2.qd, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Nb("bgm1", k);
    this.ba.ka.direction = 0.5 * Math.PI;
    this.ba.ka.speed = 8;
    this.ba.ka.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.ba.ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.ba.ka.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.te(function() {
      gls2.Nb("bgmBoss", k)
    })
  });
  this.$.add(600, "misumi")
}, je:function() {
  this.ba.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.Ij = tm.createClass({superClass:gls2.qd, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Nb("bgm2", k);
    this.ba.ka.direction = 0.5 * Math.PI;
    this.ba.ka.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.ba.ka.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.ba.ka.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.ba.ka.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.ba.ka.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.ba.ka.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", k);
  this.$.add(300, "heri2-left");
  for(c = 0;12 > c;c++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
    this.te(function() {
      gls2.Nb("bgmBoss", k)
    })
  });
  this.$.add(300, function() {
    this.ba.ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, je:function() {
  this.ba.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.Jj = tm.createClass({superClass:gls2.qd, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Nb("bgm3", k);
    this.ba.ka.direction = 0.5 * Math.PI;
    this.ba.ka.speed = 2;
    this.ba.ka.tweener.clear().to({speed:6}, 5E3, "easeInOutQuad")
  });
  this.$.add(150, "nao2-center");
  this.$.add(30, "nao2-left");
  this.$.add(30, "nao2-right");
  this.$.add(30, "nao2-center");
  this.$.add(30, "nao2-left");
  this.$.add(30, "nao2-right");
  for(c = 0;6 > c;c++) {
    this.$.add(30, "nao1-center"), this.$.add(30, "nao1-right"), this.$.add(30, "nao1-left")
  }
  this.$.add(60, function() {
    this.ba.ka.tweener.clear().to({speed:3}, 1E3, "easeInOutQuad")
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
    this.ba.ka.tweener.clear().to({speed:4, direction:0}, 3E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "akane-right");
  this.$.add(60, "akane-left");
  for(c = 0;3 > c;c++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({speed:4, direction:0}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "miyuki-1");
  this.$.add(60, "reika1-right");
  this.$.add(180, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(120, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, function() {
    this.ba.ka.tweener.clear().to({speed:5}, 3E3, "easeInOutQuad")
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
    this.ba.ka.tweener.clear().to({speed:3, direction:0.2 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "komachi3-1");
  this.$.add(120, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-right");
  this.$.add(60, "madoka-0");
  this.$.add(120, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(60, "madoka-0");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(180, "madoka-1");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(120, "erika");
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({speed:7}, 3E3, "easeInOutQuad")
  });
  this.$.add(300, "higashi", k);
  this.$.add(900, J());
  for(c = 0;6 > c;c++) {
    this.$.add(90, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({speed:2, direction:0.5 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "miyuki-2");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
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
  this.$.add(60, "komachi3-1");
  this.$.add(240, "komachi3-0");
  this.$.add(120, "alice");
  this.$.add(300, J());
  this.$.add(180, "madoka-0");
  for(c = 0;5 > c;c++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(180, "madoka-1");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({speed:4, direction:0.5 * Math.PI}, 5E3, "easeInOutQuad")
  });
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
    this.te(function() {
      gls2.Nb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({speed:8, direction:Math.PI / 2}, 5E3, "easeInOutQuad")
  });
  this.$.add(480, "momozono")
}, je:function() {
  this.ba.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.Kj = tm.createClass({superClass:gls2.qd, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Nb("bgm4", k);
    this.ba.ka.direction = 0.5 * Math.PI;
    this.ba.ka.speed = 1
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
    this.ba.ka.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(c = 0;6 > c;c++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.ba.ka.speed = 3;
    this.ba.ka.tweener.clear().to({speed:0.3}, 5E3)
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
    this.ba.ka.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.ba.ka.direction = 0.5 * Math.PI;
    this.ba.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", k);
  this.$.add(1200, J());
  for(c = 0;9 > c;c++) {
    this.$.add(50, 0 === c % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({speed:0.6}, 3E3)
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
    this.te(function() {
      gls2.Nb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, je:function() {
  this.ba.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.Lj = tm.createClass({superClass:gls2.qd, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Nb("bgm5", k);
    this.ba.ka.direction = 0.5 * Math.PI;
    this.ba.ka.speed = 1;
    this.ba.ka.Tl = k
  });
  this.$.add(150, "urara5-0");
  this.$.add(260, "urara5-7");
  this.$.add(260, "urara5-6");
  this.$.add(380, "nozomi5-1");
  this.$.add(100, "nozomi5-0");
  this.$.add(175, "nozomi5-2");
  this.$.add(325, "tank5-left");
  this.$.add(25, "tank5-center");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-left");
  this.$.add(25, "tank5-left");
  this.$.add(25, "tank5-center");
  this.$.add(260, "mktn5-0");
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
  this.$.add(300, "tank5-left");
  for(c = 0;2 > c;c++) {
    this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(2, "DUMMY+" + c)
  }
  this.$.add(25, "tank5-left");
  for(c = 0;2 > c;c++) {
    this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(2, "DUMMY+" + c)
  }
  this.$.add(25, "tank5-center");
  this.$.add(180, "bukky-5-l");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(180, "bukky-5-r");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(180, "bukky-5-l");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(180, "bukky-5-r");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(60, "heri1-4-center2");
  this.$.add(60, "heri1-4-center");
  this.$.add(300, "urara5-0");
  this.$.add(300, "urara5-7");
  this.$.add(260, "urara5-6");
  this.$.add(260, "urara5-1");
  this.$.add(260, "urara5-0");
  this.$.add(260, "urara5-5");
  this.$.add(1, "kanade");
  this.$.add(200, "milk5-0");
  this.$.add(300, "milk5-1");
  this.$.add(200, "milk5-0");
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
  this.$.add(1200, J());
  for(c = 0;22 > c;c++) {
    this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(2, "DUMMY+" + c)
  }
  this.$.add(260, "urara5-0");
  this.$.add(300, "urara5-1");
  this.$.add(300, "urara5-6");
  this.$.add(300, "urara5-7");
  this.$.add(300, "urara5-2");
  this.$.add(300, "urara5-5");
  this.$.add(300, "ako5-0");
  this.$.add(260, "komachi5-1");
  this.$.add(300, "milk5-1");
  this.$.add(200, "komachi5-1");
  this.$.add(200, "milk5-2");
  this.$.add(200, "komachi5-0");
  this.$.add(200, "mktn5-0");
  this.$.add(300, "mktn5-1");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-center2");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-center2");
  this.$.add(10, "heri1-4-right2");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-center2");
  this.$.add(380, "nozomi5-1");
  this.$.add(100, "nozomi5-0");
  this.$.add(175, "nozomi5-2");
  this.$.add(150, "nozomi5-0");
  this.$.add(300, function() {
    this.te(function() {
      gls2.Nb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.ba.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(100, "hibiki")
}, je:function() {
  this.ba.ka.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {be:function(c, a) {
  if(c.parent === l || a.parent === l) {
    return t
  }
  var f = c.x + c.boundingWidthRight, d = c.y - c.boundingHeightTop, j = c.y + c.boundingHeightBottom, p = a.x - a.boundingWidthLeft, r = a.y - a.boundingHeightTop, A = a.y + a.boundingHeightBottom;
  return c.x - c.boundingWidthLeft < a.x + a.boundingWidthRight && f > p && d < A && j > r
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, ol:function(c, a) {
  "function" === typeof c ? this.app.pushScene(c()) : c instanceof tm.app.Scene && this.app.pushScene(c);
  this._sceneResultCallback = a
}, draw:function(c) {
  c.globalCompositeOperation = "source-over";
  this.Ad(c)
}, finish:function(c) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(c)
}});
gls2.rj = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:t, title:l, selections:[], description:l, box:l, cursor:l, jh:l, _selected:0, _opened:t, _finished:t, init:function(c, a, f) {
  this.superInit();
  this.titleText = c;
  this.menu = a;
  this._selected = ~~f.defaultValue;
  this.showExit = f.showExit;
  this.descriptions = f.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.jh = f.onCursorMove;
  c = Math.max(50 * (1 + a.length), 50) + 40;
  this.box = tm.display.RectangleShape(384, c, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"hsla(220,50%,30%,0.8)"}).setPosition(240, 320);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:384, height:c}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.display.Label("", 14).setPosition(240, 630).addChildTo(this)
}, _onOpen:function() {
  var c = 320 - 25 * this.menu.length;
  this.title = tm.display.Label(this.titleText, 30).setPosition(240, c).addChildTo(this);
  this.selections = this.menu.map(function(a, f) {
    var d = this;
    c += 50;
    var j = tm.display.Label(a).setPosition(240, c).addChildTo(this);
    j.interactive = k;
    j.addEventListener("touchend", function() {
      d._selected === f ? d.closeDialog(d._selected) : d._selected = f
    });
    j.width = 336;
    return j
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.jh !== l && this.parent.jh(this.s))
  }
}, update:function(c) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(c.frame / 2) % 2 : this.showExit && c.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : c.keyboard.getKeyDown("z") || c.keyboard.getKeyDown("c") || c.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.ua("decision")) : c.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.ja.clamp(this._selected, 0, this.selections.length - 1), gls2.ua("select")) : 
  c.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.ja.clamp(this._selected, 0, this.selections.length - 1), gls2.ua("select")))
}, closeDialog:function(c) {
  this._finished = k;
  this.tweener.clear().wait(200).call(function() {
    this.cursor.remove();
    this.title.remove();
    this.selections.each(function(a) {
      a.remove()
    });
    this.box.tweener.clear();
    this.box.tweener.to({width:1, height:1}, 200, "easeInExpo").call(function() {
      this.finish(c)
    }.bind(this))
  }.bind(this))
}, Ad:function(c) {
  c.fillStyle = "rgba(0,0,0,0.8)";
  c.fillRect(0, 0, 480, 640)
}});
function Y(c, a, f, d, j) {
  j = {}.$extend({menuDescriptions:[].concat(f), showExit:k, defaultValue:0, onCursorMove:J()}, j);
  c.ol(gls2.rj(a, f, j), d)
}
;gls2.Ta = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, nf:0.85, size:0, image:l, ib:k, init:function(c, a, f, d) {
  this.superInit();
  this.width = this.height = this.size = c;
  this.alpha = a !== i ? a : 1;
  this.nf = f !== i ? f : 0.85;
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(c, c).setFillStyle(tm.graphics.RadialGradient(0.5 * c, 0.5 * c, 0, 0.5 * c, 0.5 * c, 0.5 * c).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, c, c).element
}, update:function() {
  this.alpha *= this.nf;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(c) {
  c.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Ta(this.size, this.Gl, this.nf, this.image)
}});
gls2.Hh = tm.createClass({superClass:gls2.Ta, ka:l, init:function(c, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.ka = c
}, update:function(c) {
  this.superClass.prototype.update.apply(this, c);
  this.x += this.ka.Ca;
  this.y += this.ka.Da + 0.3
}, clone:function(c) {
  return gls2.Hh(this.ka, c)
}});
gls2.pj = tm.createClass({width:0, label:l, Gb:l, na:0, Vi:0, rh:0, init:function(c) {
  this.width = c;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Gb = [];
  this.Vi = 480 - this.width - 5;
  this.rh = 5
}, ck:function(c, a) {
  a === k && (this.Gb.clear(), this.Gb.push(""));
  5 < this.Gb.length && this.Gb.splice(1, this.Gb.length - 4);
  this.Gb.push(c);
  return this
}, fk:function() {
  this.Gb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var c = this.label.text, c = c.substring(0, c.length - 1);
  if(0 !== this.Gb.length) {
    if("" !== this.Gb[0]) {
      var a = this.Gb[0][0];
      this.Gb[0] = this.Gb[0].substring(1);
      c += a
    }else {
      this.Gb.shift(), a = c.split("\n"), 3 < a.length && (a.shift(), c = a.join("\n")), c += "\n"
    }
  }
  this.label.text = c + (0 === this.na % 2 ? "_" : " ");
  this.na += 1
}, draw:function(c) {
  c.save();
  c.context.globalCompositeOperation = "source-over";
  c.translate(this.Vi, this.rh);
  c.fillStyle = "rgba(1,2,48,0.5)";
  c.fillRect(0, 0, this.width, 64);
  c.translate(5, 5);
  c.fillStyle = "rgba(255,255,255,0.5)";
  c.setText(this.label.fontStyle, this.label.align, this.label.baseline);
  this.label._lines.each(function(a, f) {
    c.fillText(a, 0, this.label.textSize * f)
  }.bind(this));
  c.restore()
}});
gls2.Yb = {noise:l, zk:function(c) {
  function a(a) {
    if(1 > a) {
      return l
    }
    var d = [], j = Math.random(), p, r;
    for(r = 0;r < c;r += ~~a) {
      p = Math.random();
      for(var g = 0;g < a;g++) {
        d[r + g] = f(j, p, g / a)
      }
      j = p
    }
    j = d[c - ~~a];
    p = d[0];
    for(g = 0;g < a;g++) {
      d[c - ~~a + g] = f(j, p, g / a)
    }
    return d
  }
  function f(a, c, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + c * d
  }
  for(var d = [], j = 0, p = Math.pow(2, 4);8 > j;j++, p *= 2) {
    var r = a(c / p);
    if(r === l) {
      break
    }
    d.push(r)
  }
  r = [].concat(d[0]);
  j = 1;
  for(p = 0.5;j < d.length;j++, p *= 0.5) {
    for(var A = 0;A < c;A++) {
      r[A] += d[j][A] * p
    }
  }
  for(j = 0;j < r.length;j++) {
    r[j] /= 2
  }
  return r
}};
gls2.Yb.noise = gls2.Yb.zk(512);
gls2.va = {index:-1, data:l, setup:function(c) {
  this.data = [];
  c = new MersenneTwister(c);
  for(var a = 0;1E3 > a;a++) {
    this.data[a] = c.next()
  }
}, random:function() {
  this.index += 1;
  1E3 <= this.index && (this.index %= 1E3);
  return this.data[this.index]
}, rand:function(c, a) {
  return Math.floor(this.random() * (a - c + 1)) + c
}, randf:function(c, a) {
  return this.random() * (a - c) + c
}};
gls2.gb = l;
gls2.Nb = function(c, a, f) {
  a || gls2.We();
  a = tm.asset.AssetManager.get(c);
  var d = tm.asset.AssetManager.get("bgmLoopInfo");
  a && (gls2.gb = a.clone(), gls2.gb.volume = 0.1 * gls2.core.ve, gls2.gb.loop = !f, gls2.gb.play(), d.data[c] && (gls2.gb.source.loopStart = d.data[c].start, gls2.gb.source.loopEnd = d.data[c].end))
};
gls2.We = function() {
  gls2.gb !== l && gls2.gb.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.gb.stop()
};
gls2.xf = function() {
  if(gls2.gb !== l) {
    var c = gls2.gb;
    gls2.gb = l;
    c.loop = t;
    var a = function() {
      c.volume -= 0.0010;
      0 >= c.volume ? c.Ol === AudioBufferSourceNode.PLAYING_STATE && c.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.ua = function(c) {
  if(0 !== gls2.core.Hd && gls2.ua.played[c] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + c);
    a && (a = a.clone().play(), "vo" === c.substring(0, 2) ? (a.volume = 0.5 * gls2.core.Hd, gls2.ua.Fh !== l && gls2.ua.Fh.stop(), gls2.ua.Fh = a) : a.volume = 0.1 * gls2.core.Hd);
    gls2.ua.played[c] = gls2.core.frame
  }
};
gls2.ua.played = {};
gls2.ua.Fh = l;
(function() {
  var c = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, na:0, Pe:[], zf:t, Ci:l, Ki:0, Hf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Ci = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.zf = t;
      this.sl()
    })
  }, sl:function() {
    for(var a = ("" + Math.floor(gls2.core.Ge)).padding(16, " "), c = "", j = 0;j < a.length;j += 4) {
      c += a.substring(j, j + 4) + " "
    }
    this.Ci.text = "HIGH SCORE: " + c.trim()
  }, Ad:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.ei(80 * Math.cos(0.01 * this.na) + 240, 80 * Math.sin(0.01 * this.na) + 320, 0);
    this.ei(80 * Math.cos(0.01 * this.na + Math.PI) + 240, 80 * Math.sin(0.01 * this.na + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.zf && this.Ti();
    this.na += 1
  }, ei:function(f, d, j) {
    if(!this.zf) {
      c === l && (c = gls2.Ta(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Ta(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      j = 0 === j ? c.clone().addChildTo(this) : a.clone().addChildTo(this);
      j.speed = 0.6;
      var p = gls2.ja.randf(0, 2 * Math.PI), r = gls2.ja.rand(0, 20);
      j.setPosition(Math.cos(p) * r + f, Math.sin(p) * r + d);
      var A = this;
      j.update = function() {
        this.x += Math.cos(p) * this.speed;
        this.y += Math.sin(p) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = A.Pe.indexOf(this);
          -1 !== a && A.Pe.splice(a, 1)
        }
      };
      this.Pe.push(j)
    }
  }, Ti:function() {
    Y(this, "MAIN MENU", ["start", "setting"], this.Vk, {defaultValue:this.Ki, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, Vk:function(a) {
    2 !== a && (this.Ki = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.zf = k;
          for(var a = 0, c = this.Pe.length;a < c;a++) {
            this.Pe[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.Gj())
        }.bind(this));
        break;
      case 1:
        this.bd()
    }
  }, bd:function() {
    Y(this, "SETTING", ["bgm volume", "sound volume"], this.nh, {defaultValue:this.Hf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, nh:function(a) {
    3 !== a && (this.Hf = a);
    switch(a) {
      case 0:
        this.oh();
        break;
      case 1:
        this.ph();
        break;
      default:
        this.Ti()
    }
  }, oh:function() {
    Y(this, "BGM VOLUME", "012345".split(""), this.lh, {defaultValue:gls2.core.ve, onCursorMove:function(a) {
      gls2.gb !== l && "exit" !== a && (gls2.gb.volume = 0.1 * a)
    }, showExit:t})
  }, lh:function(a) {
    6 !== a && (gls2.core.ve = a);
    this.bd()
  }, ph:function() {
    Y(this, "SE VOLUME", "012345".split(""), this.mh, {defaultValue:gls2.core.Hd, showExit:t})
  }, mh:function(a) {
    6 !== a && (gls2.core.Hd = a);
    this.bd()
  }, Nl:function() {
    Y(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Uk, {defaultValue:gls2.core.vi, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Uk:function(a) {
    5 !== a && (gls2.core.vi = a);
    this.bd()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.Gj = tm.createClass({superClass:gls2.Scene, mode:0, types:l, Rf:l, ic:l, jc:l, kc:l, fh:l, dh:l, type:0, style:0, ud:t, Lf:t, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.il();
    this.Rf = this.hl();
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
    this.Rf.visible = t;
    this.ih(-1, k);
    this.ic.update();
    this.jc.update();
    this.kc.update();
    gls2.ua("voSelectShip");
    gls2.Nb("bgmShipSelect", k)
  }, il:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.fh = tm.display.Label("Type-A").setPosition(240, 150);
    this.fh.addChildTo(a);
    var c = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.gh = tm.display.Label(c[0], 16).setPosition(240, 500);
    this.gh.update = function() {
      this.gh.text = c[this.type]
    }.bind(this);
    this.gh.addChildTo(a);
    var d = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.ic = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.jc = tm.display.AnimationSprite(d, 64, 64).gotoAndPlay("typeB");
    this.kc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.ic.nb = 0;
    this.jc.nb = 1;
    this.kc.nb = 2;
    this.ic.setScale(3).setPosition(0, 320).addChildTo(a);
    this.jc.setPosition(0, 320).addChildTo(a);
    this.kc.setPosition(0, 320).addChildTo(a);
    this.ic.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.nb / 3 * Math.PI)
    };
    this.jc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.nb / 3 * Math.PI)
    };
    this.kc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.nb / 3 * Math.PI)
    };
    return a
  }, hl:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.dh = tm.display.Label("Shot Style").setPosition(240, 150);
    this.dh.addChildTo(a);
    this.jd = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Ac = tm.app.Object2D();
    this.Ac.addChildTo(this.jd);
    this.Ac.update = function(a) {
      this.Ac.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.Aa = [];
    this.Aa[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Aa[0].update = function() {
      0 === this.type ? this.Aa[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.Aa[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.Aa[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.Aa[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Aa[1].update = function() {
      0 === this.type ? this.Aa[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.Aa[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.Aa[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.Aa[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Aa[2].update = function() {
      0 === this.type ? this.Aa[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.Aa[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.Aa[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.Aa[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Aa[3].update = function() {
      0 === this.type ? this.Aa[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.Aa[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.Aa[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.jd.line = c(0, 0, 0, 130, 8);
    this.jd.line.addChildTo(this.jd);
    this.Aa.each(function(a) {
      a.line = c(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Ac)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.eh = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.eh.update = function() {
      this.eh.text = f[this.style]
    }.bind(this);
    this.eh.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.Rf.visible = t, !this.Lf && a.keyboard.getKeyDown("left")) {
        this.ih(-1, t), gls2.ua("select")
      }else {
        if(!this.Lf && a.keyboard.getKeyDown("right")) {
          this.ih(1, t), gls2.ua("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.ua("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.Rf.visible = k, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.ua("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.ua("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.ud = k, this.Si(), gls2.ua("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.tl(0 === ~~(a.frame / 60) % 2))
    }
  }, Ml:function() {
    Y(this, "AUTO BOMB", ["on", "off"], this.Qk, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:k})
  }, Qk:function(a) {
    2 !== a && (this.ud = 0 === a, this.Si())
  }, Si:function() {
    Y(this, "ARE YOU READY?", ["ok"], this.Rk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:k})
  }, Rk:function(a) {
    0 === a && this.ll()
  }, ih:function(a, c) {
    this.type = (this.type + a + 3) % 3;
    [this.ic, this.jc, this.kc][this.type].remove().addChildTo(this.types);
    c ? (this.ic.nb -= a, this.ic.scaleX = 0 === this.type ? 5 : 1, this.ic.scaleY = 0 === this.type ? 5 : 1, this.jc.nb -= a, this.jc.scaleX = 1 === this.type ? 5 : 1, this.jc.scaleY = 1 === this.type ? 5 : 1, this.kc.nb -= a, this.kc.scaleX = 2 === this.type ? 5 : 1, this.kc.scaleY = 2 === this.type ? 5 : 1) : (this.Lf = k, this.ic.tweener.clear().to({nb:this.ic.nb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.jc.tweener.clear().to({nb:this.jc.nb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.kc.tweener.clear().to({nb:this.kc.nb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.Lf = t
    }.bind(this)));
    this.fh.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, ll:function() {
    gls2.core.ba.ud = this.ud;
    gls2.core.replaceScene(gls2.core.ba);
    gls2.core.ba.start(this.type, this.style);
    gls2.xf()
  }, tl:function(a) {
    this.dh.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.jd.line.rc = t, this.Aa[0].line.rc = t, this.Aa[1].line.rc = t, this.Aa[2].line.rc = t, this.Aa[3].line.rc = t) : (this.jd.line.rc = k, this.Aa[0].line.rc = k, this.Aa[1].line.rc = k, this.Aa[2].line.rc = k, this.Aa[3].line.rc = k);
    a ? (this.Aa[0].visible = k, this.Aa[1].visible = k, 1 === this.style ? (this.Aa[2].visible = t, this.Aa[3].visible = t) : (this.Aa[2].visible = k, this.Aa[3].visible = k), this.jd.line.lineWidth = 5) : (this.Aa.each(function(a) {
      a.visible = t
    }), this.jd.line.lineWidth = 0 === this.style ? 10 : 25)
  }, Ad:J()});
  var c = tm.createClass({superClass:tm.display.CanvasElement, rc:k, init:function(a, c, d, j, p) {
    this.superInit();
    this.angle = d - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = c + 10 * Math.sin(this.angle);
    this.length = j;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = p
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    if(this.rc && 5 === this.lineWidth) {
      var c = 5 * Math.cos(this.angle - Math.PI / 2), d = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - c, this.y - d, Math.cos(this.angle) * this.length * this.i + this.x - c, Math.sin(this.angle) * this.length * this.i + this.y - d, 1.2 * this.lineWidth);
      a.drawArrow(this.x + c, this.y + d, Math.cos(this.angle) * this.length * this.i + this.x + c, Math.sin(this.angle) * this.length * this.i + this.y + d, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.bb = tm.createClass({superClass:gls2.Scene, da:l, score:0, Qc:0, rb:0, Sa:0, Ke:0, lb:0, Zc:0, za:0, Ka:l, ka:l, ld:3, Pf:0, Qf:0, Gc:0, vf:0, Le:0, Kf:0, ud:t, Qb:0, xd:0, ji:0, Dd:t, Ff:t, Fc:0, Kb:0, Ma:t, Ie:0, ae:0, Ya:0, Rc:0, Fl:0, El:0, Bf:l, Wg:l, qh:l, Vg:l, Tg:l, Ug:l, Ng:l, Gi:l, dc:l, Sb:l, yd:l, Ce:t, Mk:t, he:l, hd:l, Ee:l, Jf:l, sf:l, pf:l, Ud:l, Cf:l, Ei:l, Bh:0, zh:0, $i:0, Ah:0, ge:0, Gd:0, dd:0, fe:0, Fd:0, cd:0, of:0, init:function() {
  gls2.bb.oe !== l && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.bb.oe = this;
  this.Sb = gls2.Fj(this);
  this.Sb.Db.addChildTo(this);
  this.ka = gls2.wj().Fa;
  this.ka.addChildTo(this);
  this.Bf = gls2.bb.Layer().addChildTo(this);
  this.Wg = gls2.bb.Layer().addChildTo(this);
  this.Vg = gls2.bb.Layer().addChildTo(this);
  this.Tg = gls2.bb.Layer().addChildTo(this);
  this.qh = gls2.bb.Layer().addChildTo(this);
  this.Ug = gls2.bb.Layer().addChildTo(this);
  this.Ng = gls2.bb.Layer().addChildTo(this);
  this.Gi = gls2.bb.Rh(this).addChildTo(this);
  tm.Hb.nd.Be.hi = this;
  this.dc = tm.app.Object2D();
  this.dc.addChildTo(this);
  this.dc.update = function(c) {
    this.Yk(c)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Sb.clear()
  })
}, addChild:function(c) {
  c.ib ? this.Tg.addChild(c) : c instanceof gls2.Qa ? this.Ng.addChild(c) : c instanceof gls2.Dg || c instanceof gls2.Kh || c instanceof gls2.Oh ? this.Bf.addChild(c) : c instanceof gls2.ea ? c.Uc ? this.Bf.addChild(c) : this.Vg.addChild(c) : c instanceof gls2.Zh ? this.qh.addChild(c) : c === this.dc || c === this.ka || c instanceof gls2.bb.Layer || c instanceof gls2.bb.Rh || c instanceof gls2.$h || c instanceof gls2.Qh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), 
  h(Error(c)))
}, update:function(c) {
  this.dl(c.keyboard);
  this.Ka.update(c.frame);
  0 === c.frame % 2 && this.Sb.update();
  c.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.We()) : c.keyboard.getKeyDown("space") ? this.Oe(0) : c.keyboard.getKeyDown("p") && (this.xh().saveAsImage(), this.Oe(0))
}, xh:function() {
  var c = tm.graphics.Canvas();
  c.resize(480, 640);
  c.clearColor("black");
  c.drawImage(this.ka.ka.element, 0, 0);
  c.drawImage(this.app.canvas.element, 0, 0);
  c.drawImage(this.Sb.element, 0, 0);
  return c
}, Yk:function(c) {
  this.da.Cc === t && gls2.fa.erase();
  var a;
  a = [].concat(gls2.ea.qb);
  for(var f = [].concat(gls2.Sd.qb), d = f.length;f[--d] !== i;) {
    for(var j = a.length;a[--j] !== i;) {
      var p = a[j], r = f[d];
      if(!(0 >= p.ra || p.eb) && gls2.Collision.be(p, r)) {
        if(r.Af(1), r.remove(), p.Sc(r.td)) {
          this.Gc += 1;
          this.Ma ? this.Fb(0) : this.Fb(0.0050);
          this.kh(p);
          break
        }
      }
    }
  }
  r = this.da.Lb;
  if(this.da.ac) {
    a = [].concat(gls2.ea.qb);
    a.sort(function(a, c) {
      return a.y - c.y
    });
    for(j = a.length;a[--j] !== i;) {
      if(p = a[j], !(0 >= p.ra || p.eb) && gls2.Collision.be(p, r)) {
        r.gl(p.y + p.boundingHeightBottom);
        p.Sc(r.td) ? (this.Gc += 1, this.Ma ? this.Fb(0) : this.Fb(0.01), this.kh(p)) : (this.lb = Math.min(this.lb + 0.02, 1), this.Ma ? (this.Td(0.01 * W[this.Rc]), this.Fb(0)) : (this.Td(0.01), this.Fb(0.0010)));
        r.Af(2);
        break
      }
    }
    f = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(gls2.ea.qb);
    for(j = a.length;a[--j] !== i;) {
      if(p = a[j], !(0 >= p.ra || p.eb) && gls2.Collision.be(p, f)) {
        p.Sc(r.td) ? (this.Gc += 1, this.Ma ? this.Fb(0.03) : this.Fb(0.015), this.kh(p)) : (this.lb = Math.min(this.lb + 0.02, 1), this.Ma ? (this.Td(0.01 * W[this.Rc]), this.Fb(0.0040)) : (this.Td(0.01), this.Fb(0.0020))), r.wk(2, this.da.x, this.da.y - 30), this.of += 1, 300 < this.of && gls2.core.xa("aura300")
      }
    }
  }
  if(this.Dd) {
    gls2.fa.erase();
    a = [].concat(gls2.ea.qb);
    for(j = a.length;a[--j] !== i;) {
      if(p = a[j], !(0 >= p.ra || p.eb) && p.cc() && p.Sc(2)) {
        this.sd(p.score), this.Gc += 1
      }
    }
    this.lb = this.Sa = 0
  }
  if(this.Ma) {
    j = [].concat(gls2.Sd.qb);
    for(p = j.length;j[--p] !== i;) {
      if(r = j[p], !(0 >= r.ra)) {
        f = [].concat(gls2.Qa.qb);
        for(a = f.length;f[--a] !== i;) {
          d = f[a], d.visible !== t && (0 < r.ra && gls2.Collision.be(r, d)) && (d.ra -= 6 - this.Kb, 0 > d.ra && (d.ya(), this.sd(10), this.Td(1), this.Bi(t, t, d.x, d.y, 1)), r.ra -= 1)
        }
      }
    }
  }
  if(this.Ce) {
    gls2.fa.erase()
  }else {
    if(this.da.parent !== l && this.da.eb === t && this.Dd === t && 0 >= this.Ie) {
      r = t;
      for(j = gls2.Qa.qb.length;gls2.Qa.qb[--j] !== i;) {
        if(a = gls2.Qa.qb[j], a.visible !== t && gls2.Collision.be(a, this.da)) {
          this.da.Sc();
          r = k;
          0 < this.Qb && this.ud ? (this.Kb = gls2.ja.clamp(this.Kb - 1, 0, 1), this.se(-0.01), gls2.Wh(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this), gls2.core.xa("bomb2"), this.Ud[this.za] += 1) : this.Pi();
          break
        }
      }
      if(!r) {
        for(j = gls2.ea.qb.length;gls2.ea.qb[--j] !== i;) {
          if(p = gls2.ea.qb[j], !(0 >= p.ra || p.eb) && !p.Uc && gls2.Collision.be(p, this.da)) {
            this.da.Sc();
            0 < this.Qb && this.ud ? (this.Kb = gls2.ja.clamp(this.Kb - 1, 0, 1), this.se(-0.01), gls2.Wh(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this), gls2.core.xa("bomb2"), this.Ud[this.za] += 1) : this.Pi();
            break
          }
        }
      }
    }
    this.Ma && (this.ae -= 1, 0 >= this.ae && this.uf());
    this.Ie = Math.max(this.Ie - 1, 0);
    this.lb -= 0.01;
    0 >= this.lb && (this.lb = 0, this.Ma || 0 < this.Ya ? this.Zc = this.Sa = this.rb = 0 : (0 < this.Sa && (0 >= this.Zc && (this.Zc = 0.0050 * this.Sa), this.rb = this.rb * (this.Sa - this.Zc) / this.Sa, this.Sa -= this.Zc), 0 >= this.Sa && (this.Zc = this.Sa = this.rb = 0)));
    this.Ff && (this.score += 100);
    r = gls2.Qa.qb.length;
    c.fps = 500 < r ? Math.floor(60 * gls2.ja.clamp(500 / r, 0.2, 1)) : 60
  }
}, kh:function(c) {
  this.Bi(c.Uc, this.Ma || 22500 > gls2.Tc(c, this.da), c.x, c.y, c.star * X[this.Rc], c instanceof gls2.od);
  this.Td(W[this.Rc]);
  for(var a = this.rb, f = ~~(this.Sa / 1E3) + 1, d = 0;d < f;d++) {
    a += c.score, this.sd(a)
  }
  this.rb += c.score * f
}, Bi:function(c, a, f, d, j, p) {
  c = c ? gls2.Nj : gls2.bi;
  for(var r = 0;r < j;r++) {
    var A = c(a);
    A.setPosition(f, d);
    p && (A.Cd = k)
  }
}, Pk:function(c) {
  gls2.ua("star");
  c.Ii ? (this.Qf += 1, this.rb += 1E3, this.sd(1E3 + 0 * this.rb), this.Ma ? this.Fb(0) : this.Fb(0.01)) : (this.Pf += 1, this.rb += 100, this.sd(100 + 0 * this.rb), this.Ma ? this.Fb(0) : this.Fb(0.0010))
}, start:function(c, a) {
  this.Sb.Wd.fk().clear();
  this.Qc = this.score = 0;
  this.ld = 3;
  this.Qb = this.xd = T[a];
  this.ji = U[a];
  this.Ya = this.Kb = this.Fc = 0;
  this.uf();
  this.Dd = t;
  this.Le = this.Kf = 0;
  this.hd = [];
  this.Ee = [];
  this.Jf = [];
  this.sf = [];
  this.pf = [];
  this.Ud = [];
  this.Cf = [];
  for(var f = 0;5 > f;f++) {
    this.hd.push(0), this.Ee.push(0), this.Jf.push(0), this.sf.push(0), this.pf.push(0), this.Ud.push(0), this.Cf.push(0)
  }
  this.Ei = [];
  this.da = gls2.Zh(this, c, a);
  this.wh(0);
  L.Va.bc.$ex = 2 !== a ? 0 : 1;
  this.bj(0);
  gls2.ua("voLetsGo");
  this.nl();
  0 === c ? gls2.core.xa("launch0") : 1 === c ? gls2.core.xa("launch1") : 2 === c && gls2.core.xa("launch2")
}, bj:function(c) {
  this.Bb("3...2...1...");
  this.da.parent !== l && this.da.remove();
  gls2.ea.ze();
  gls2.Sd.ze();
  gls2.fa.ze();
  this.Bf.removeChildren();
  this.Tg.removeChildren();
  this.Ug.removeChildren();
  this.qh.removeChildren();
  this.Ng.removeChildren();
  this.dc.removeChildren();
  this.Gc = this.vf = this.Qf = this.Pf = this.Ke = this.lb = this.Sa = this.rb = 0;
  this.yd = l;
  this.Mk = this.Ce = t;
  this.Le = 0;
  this.Sb.Db.Fe = 0;
  this.Kb = this.Sb.Db.Dc = 0;
  this.za = c;
  this.Ka = gls2.qd.create(this, c);
  this.tweener.clear().wait(1E3).call(function() {
    this.hh()
  }.bind(this));
  this.ka.tweener.clear();
  this.of = this.cd = this.Fd = this.fe = this.dd = this.Gd = this.ge = this.Ah = this.zh = this.Bh = 0;
  this.Bh = gls2.core.frame;
  this.$i = Date.now()
}, hh:function() {
  this.Bb("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Lb.addChildTo(this);
  this.da.Cc = t;
  this.da.eb = k;
  this.da.Zd = t;
  this.da.ac = t;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.ue = this.Cc = k
  }.bind(this.da)).wait(3E3).call(function() {
    this.eb = t
  }.bind(this.da))
}, Pi:function() {
  gls2.oa.wf(this.da.x, this.da.y, this);
  this.Bb("I was shot down.");
  this.da.Cc = t;
  this.da.remove();
  this.ld -= 1;
  this.Ya = this.Zc = this.Sa = this.lb = 0;
  this.Le += 1;
  this.Kf += 1;
  this.Jf[this.za] += 1;
  this.Kb = gls2.ja.clamp(this.Kb - 3, 0, 1);
  this.se(-0.03);
  0 < this.ld ? this.tweener.clear().wait(1E3).call(function() {
    this.Qb = this.xd = Math.min(this.xd + 1, this.ji);
    this.hh()
  }.bind(this)) : (this.he = this.xh().canvas.toDataURL("image/png"), gls2.core.Ge === this.score && (gls2.core.Ek = this.he), this.tweener.clear().wait(2E3).call(function() {
    this.Qc < gls2.core.li() ? this.al() : this.Ai()
  }.bind(this)))
}, wh:function(c) {
  L.Va.bc.$rank = gls2.ja.clamp(c, 0, 0.5)
}, se:function(c) {
  this.wh(L.Va.bc.$rank + c)
}, vk:function() {
  this.Gd = Date.now();
  this.dd += this.Gd - this.ge;
  this.Fd = gls2.core.frame;
  this.cd += this.Fd - this.fe;
  this.Bb("System rebooted.", k);
  this.score = 0;
  this.Qc += 1;
  this.sf[this.za] += 1;
  this.ld = 3;
  this.Qb = this.xd = T[this.da.style];
  this.Kb = 0;
  this.wh(0);
  this.hh()
}, gk:function() {
  this.mi();
  gls2.Nb("bgmResult");
  var c = tm.app.Object2D();
  c.addChildTo(this.dc);
  c.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.xh()));
    c.remove()
  }.bind(this))
}, Ai:function() {
  this.hd[this.za] = this.hd[this.za - 1] === i ? this.score : this.score - this.hd[this.za - 1];
  this.mi();
  gls2.We();
  this.app.replaceScene(gls2.Ph())
}, mi:function() {
  this.Ah = Date.now();
  var c = this.Ah - this.$i - this.dd;
  this.zh = gls2.core.frame;
  this.Ee[this.za] = 1E3 * ((this.zh - this.Bh - this.cd) / c);
  console.log("this.fpsAvgByStage[" + this.za + "] = " + this.Ee[this.za])
}, sd:function(c) {
  var a = this.score;
  this.score += c;
  for(c = 0;c < R.length;c++) {
    var f = R[c];
    a < f && f <= this.score && (this.wi(), 0 == c && this.app.xa("extend1"), 1 == c && this.app.xa("extend2"))
  }
  gls2.core.Ge = Math.max(gls2.core.Ge, this.score);
  gls2.core.Ge === this.score && (gls2.core.Fk = this.za, gls2.core.Hk = this.da.type, gls2.core.Gk = this.da.style, gls2.core.Dk = this.Qc);
  1E8 <= this.score && gls2.core.xa("score100M");
  2E9 <= this.score && gls2.core.xa("score2G");
  2E10 <= this.score && gls2.core.xa("score20G");
  5E10 <= this.score && gls2.core.xa("score50G");
  1E11 <= this.score && gls2.core.xa("score100G");
  1E12 <= this.score && gls2.core.xa("score1T")
}, Td:function(c) {
  this.Zc = 0;
  this.Sa += c;
  this.Ke = Math.max(this.Ke, this.Sa);
  1 <= c && (this.lb = 1);
  100 <= this.Sa && this.app.xa("combo100");
  1E3 <= this.Sa && this.app.xa("combo1000");
  1E4 <= this.Sa && this.app.xa("combo10000");
  1E5 <= this.Sa && this.app.xa("combo100000")
}, Fb:function(c) {
  if(10 !== this.Ya) {
    for(c *= 0.75;1 < c;) {
      gls2.Xf(this.da).addChildTo(this), c -= 1, this.Fc = 0, this.Ya += 1, 1 === this.Ya ? (this.Bb("HYPER SYSTEM, stand by.", k), gls2.ua("voHyperStandBy")) : (this.Bb("HYPER SYSTEM, ready.", k), gls2.ua("voHyperReady"))
    }
    this.Fc = gls2.ja.clamp(this.Fc + c, 0, 1);
    1 <= this.Fc && (gls2.Xf(this.da).addChildTo(this), this.Ya += 1, this.Fc -= 1, 1 === this.Ya ? (this.Bb("HYPER SYSTEM, stand by.", k), gls2.ua("voHyperStandBy")) : (this.Bb("HYPER SYSTEM, ready.", k), gls2.ua("voHyperReady")))
  }
}, ml:function() {
  0.5 > Math.random() ? (this.Bb("HYPER SYSTEM start!!", k), gls2.ua("voHyperStart0")) : (this.Bb("start counting to system limit.", k), gls2.ua("voHyperStart1"));
  this.Kb = gls2.ja.clamp(this.Kb + 1, 0, 5);
  this.se(0.01 * this.Ya);
  L.Va.bc.$hyperOff = 0.5 * (2 !== this.da.style ? 1 : 0.5);
  this.ae = 800;
  this.Ie = 200;
  this.da.Df.ie(this.Ya);
  this.da.Lb.ie(this.Ya);
  this.da.Xd = this.da.Df;
  gls2.oa.xk(this.da.x, this.da.y, this);
  this.Ma = k;
  this.Rc = this.Ya;
  this.Fc = this.Ya = 0;
  gls2.fa.erase(k, k);
  this.app.xa("hyper1");
  10 == this.Rc && this.app.xa("hyper10");
  this.Cf[this.za] += 1;
  this.Ei.push(this.Rc)
}, uf:function() {
  this.Ma !== t && (this.Ma = t, gls2.Xf(this.da, k).addChildTo(this), this.da.Xd = this.da.Ri, L.Va.bc.$hyperOff = 1 * (2 !== this.da.style ? 1 : 0.5), this.da.Df.ie(0), this.da.Lb.ie(0), this.Ie = 80, this.Rc = this.ae = 0, gls2.fa.erase())
}, bk:function() {
  gls2.ua("decision");
  gls2.ua("voGetBomb");
  this.Qb = Math.min(this.Qb + 1, this.xd);
  this.Ff = this.Qb === this.xd
}, wi:function() {
  gls2.ua("voExtend");
  this.Bb("extended.");
  this.ld += 1
}, Bb:function(c, a) {
  this.Sb.Wd.ck(c, a)
}, Oe:function(c) {
  this.ge = Date.now();
  this.fe = gls2.core.frame;
  Y(this, "PAUSE", ["resume", "setting", "exit game"], this.Xk, {defaultValue:c, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:t})
}, Xk:function(c) {
  switch(c) {
    case 0:
      this.Gd = Date.now();
      this.dd += this.Gd - this.ge;
      this.Fd = gls2.core.frame;
      this.cd += this.Fd - this.fe;
      break;
    case 1:
      this.bd();
      break;
    case 2:
      this.$k()
  }
}, bd:function() {
  Y(this, "SETTING", ["bgm volume", "sound volume"], this.nh, {defaultValue:this.Hf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, nh:function(c) {
  3 !== c && (this.Hf = c);
  switch(c) {
    case 0:
      this.oh();
      break;
    case 1:
      this.ph();
      break;
    default:
      this.Oe()
  }
}, $k:function() {
  Y(this, "REARY?", ["yes", "no"], this.Sk, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:t})
}, Sk:function(c) {
  0 === c ? (gls2.We(), this.app.replaceScene(gls2.TitleScene())) : this.Oe(1)
}, oh:function() {
  Y(this, "BGM VOLUME", "012345".split(""), this.lh, {defaultValue:gls2.core.ve, onCursorMove:function(c) {
    gls2.gb !== l && 6 !== c && (gls2.gb.volume = 0.1 * c)
  }, showExit:t})
}, lh:function(c) {
  6 !== c && (gls2.core.ve = c);
  this.bd(1)
}, ph:function() {
  Y(this, "SE VOLUME", "012345".split(""), this.mh, {defaultValue:gls2.core.Hd, showExit:t})
}, mh:function(c) {
  6 !== c && (gls2.core.Hd = c);
  this.bd(1)
}, al:function() {
  this.ge = Date.now();
  this.fe = gls2.core.frame;
  Y(this, "CONTINUE? (" + this.Qc + "/" + gls2.core.li() + ")", ["yes", "no"], this.Tk, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:t})
}, Tk:function(c) {
  switch(c) {
    case 0:
      this.vk();
      break;
    case 1:
      this.Gd = Date.now(), this.dd += this.Gd - this.ge, this.Fd = gls2.core.frame, this.cd += this.Fd - this.fe, this.Ai()
  }
}, Ad:J(), jl:function() {
  this.Sb.Db.tweener.clear().to({Fe:-480}, 1600, "easeInBack").to({Dc:30}, 800, "easeInOutBack")
}, Ck:function() {
  this.Sb.Db.tweener.clear().to({Dc:0}, 800, "easeInOutBack").to({Fe:0}, 1600, "easeOutBack")
}, Se:l, Te:0, Je:l, df:0, nl:function() {
  if(1 === this.df) {
    if(localStorage.getItem("recCount") !== i) {
      this.Je = [];
      for(var c = ~~localStorage.getItem("recCount"), a = 0;a < c;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.Se = [];
    this.Te = 0
  }else {
    if(2 === this.df && localStorage.getItem("recCount") !== i) {
      this.Je = [];
      c = ~~localStorage.getItem("recCount");
      for(a = 0;a < c;a++) {
        for(var f = localStorage.getItem("rec" + a).split(","), d = 0;d < f.length;d++) {
          this.Je.push(f[d])
        }
      }
    }
  }
}, dl:function(c) {
  if(1 === this.df) {
    1E3 < this.Se.length && (localStorage.setItem("rec" + this.Te, this.Se), localStorage.setItem("recCount", this.Te), this.Se = [], this.Te += 1), this.Se.push("" + ~~c.getKey("up") + ~~c.getKey("down") + ~~c.getKey("left") + ~~c.getKey("right") + ~~c.getKey("z") + ~~c.getKey("x") + ~~c.getKey("c"))
  }else {
    if(2 === this.df && this.Je) {
      var a = this.Je.shift();
      a !== i && (c.getKey = function(c) {
        return"up" === c ? !!~~a[0] : "down" === c ? !!~~a[1] : "left" === c ? !!~~a[2] : "right" === c ? !!~~a[3] : "z" === c ? !!~~a[4] : "x" === c ? !!~~a[5] : "c" === c ? !!~~a[6] : t
      }, c.getKeyDown = function(c) {
        return"up" === c ? !!~~a[0] : "down" === c ? !!~~a[1] : "left" === c ? !!~~a[2] : "right" === c ? !!~~a[3] : "z" === c ? !!~~a[4] : "x" === c ? !!~~a[5] : "c" === c ? !!~~a[6] : t
      })
    }
  }
}});
gls2.bb.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.bb.Rh = tm.createClass({superClass:tm.display.CanvasElement, ba:l, frame:0, init:function(c) {
  this.superInit();
  this.ba = c;
  this.blendMode = "lighter"
}, update:function(c) {
  this.frame = c.frame
}, draw:function(c) {
  this.jk(c);
  this.kk(c)
}, jk:function(c) {
  if(0 < this.ba.lb) {
    c.fillStyle = "rgba(255," + ~~(255 * this.ba.lb) + "," + ~~Math.min(255, 512 * this.ba.lb) + ",0.5)";
    var a = 500 * this.ba.lb;
    c.fillRect(465, 635 - a, 10, a)
  }
}, kk:function(c) {
  c.fillStyle = "rgba(255,255,0,0.1)";
  c.fillRect(5, 628, 200, 9);
  10 === this.Ya ? 1 === this.frame % 2 && (c.fillStyle = "rgba(255,255,255,0.3)", c.fillRect(5, 628, 200, 9)) : 0 < this.ba.Fc && (c.fillStyle = "rgba(255,255,100,0.3)", c.fillRect(5, 628, 200 * this.ba.Fc, 9))
}});
gls2.bb.oe = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ba:l, he:l, dc:l, values:l, labels:l, Ef:l, Xi:[1E3, 2E3, 4E3, 1E4, 1], Hi:l, th:l, cursor:0, wait:0, frame:0, init:function(c, a) {
  this.superInit();
  this.ba = c;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ba.Pf, this.ba.Qf, ~~(100 * (this.ba.Gc / this.ba.vf)), this.ba.Ke, 0 === this.ba.Le ? 2E7 : 0];
  this.Ef = this.values.map(function(a) {
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
  this.Hi = tm.display.Label(Math.floor(this.ba.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.th = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.th.visible = t;
  this.he = a;
  for(var d = [], f = 0;12 > f;f++) {
    d[f] = [];
    for(var j = 0;16 > j;j++) {
      d[f][j] = {uh:0, gd:0, Wc:gls2.ja.randf(-2, 2), sc:gls2.ja.randf(1, 4)}
    }
  }
  this.dc = tm.app.Object2D();
  this.dc.draw = function(a) {
    a.save();
    for(var c = k, f = 0;f < d.length;f++) {
      for(var j = 0;j < d[f].length;j++) {
        var n = d[f][j];
        640 > 40 * j + n.gd && (a.drawImage(this.he.element, 40 * f, 40 * j, 40, 40, 40 * f + n.uh, 40 * j + n.gd, 40, 40), n.uh += n.Wc, n.gd += n.sc, n.sc += 0.3, c = t)
      }
    }
    this.wait = 60;
    c && this.dc.remove();
    a.restore()
  }.bind(this);
  this.dc.addChildTo(this);
  this.on("enter", function() {
    0 === this.ba.Kf && 0 === this.ba.Qc && (0 === this.ba.za ? gls2.core.xa("nomiss1") : 1 === this.ba.za ? gls2.core.xa("nomiss2") : 2 === this.ba.za ? gls2.core.xa("nomiss3") : 3 === this.ba.za ? gls2.core.xa("nomiss4") : 4 === this.ba.za && gls2.core.xa("nomiss5"))
  });
  this.on("exit", function() {
    gls2.xf()
  })
}, update:function(c) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.ua("star"), this.values[a] <= this.Ef[a] || c.keyboard.getKeyDown("z") || c.keyboard.getKeyDown("c") || c.keyboard.getKeyDown("space") ? (this.ba.sd(this.values[a] * this.Xi[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ba.sd(this.Ef[a] * this.Xi[a]), this.values[a] -= this.Ef[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.Hi.text = Math.floor(this.ba.score)
    }else {
      if(this.th.visible = k, c.keyboard.getKeyDown("z") || c.keyboard.getKeyDown("c") || c.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.ua("decision"), this.ba.hd[this.ba.za] = this.ba.hd[this.ba.za - 1] === i ? this.ba.score : this.ba.score - this.ba.hd[this.ba.za - 1], 5 == this.ba.za + 1 ? c.replaceScene(gls2.tj()) : (this.ba.bj(this.ba.za + 1), c.replaceScene(this.ba))
      }
    }
    this.frame += 1
  }
}, Ad:J()});
gls2.Ph = tm.createClass({superClass:gls2.Scene, na:0, Ui:t, init:function() {
  this.superInit();
  var c = tm.display.Label("GAME OVER");
  c.fillStyle = "red";
  c.setPosition(240, 320).addChildTo(this);
  this.interactive = k;
  this.on("enter", function() {
    gls2.Nb("gameover");
    this.fj || this.fl()
  })
}, update:function(c) {
  (c.keyboard.getKeyDown("z") || c.keyboard.getKeyDown("c") || 300 == this.na && !this.Ui) && this.Mf();
  this.na += 1
}, Ad:function(c) {
  c.clearColor("black")
}, fj:t, Wi:t, wait:t, vh:l, fl:function() {
  this.fj = this.wait = k;
  this.app.sh(l, function(c, a, f) {
    this.wait = t;
    c ? this.bl(c) : a ? (this.Wi = k, this.vh = f, this.cl()) : this.Mf()
  }.bind(this))
}, Mf:function() {
  this.wait || (this.Ui = k, Y(this, "GAME OVER", ["tweet result", "back to title"], this.Wk, {defaultValue:this.Wi ? 1 : 0, menuDescriptions:["\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"], showExit:t}))
}, Wk:function(c) {
  0 === c ? this.rl() : this.app.replaceScene(gls2.TitleScene())
}, cl:function() {
  Y(this, "SUCCESS!", ["ok"], function() {
    this.Mf()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:t})
}, bl:function() {
  Y(this, "ERROR!", ["ok"], function() {
    this.Mf()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:t})
}, rl:function() {
  var c = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({score:Math.floor(this.app.ba.score), stage:5 > this.app.ba.za ? "Stage" + (this.app.ba.za + 1) : "ALL", type:"ABC"[this.app.ba.da.type], style:["S", "L", "EX"][this.app.ba.da.style], cont:this.app.ba.Qc}), c = tm.social.Twitter.createURL({type:"tweet", text:c, hashtags:"tmshooter", url:this.vh ? window.location.origin + "/ranking/" + this.vh : window.location.origin});
  window.open(c, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
(function() {
  var c = "TM-Shooter;2D 'DANMAKU' Shooter on HTML5;;MUSIC;Underworld (select)  by  delf;Feel the universe (stage1)  by  delf;Herod (boss)  by  \u6dbc\u3005;Re-Birth (clear)  by  delf;Remenber (stage2)  by  Ryo;THE NEW CHALLENGER freeVer. (stage3)  by  delf;Aegis (stage4)  by  \u5cf6\u767d;Ancien Ocean (stage5)  by  delf;\u84bc\u3044\u6708 (ending)  by  delf;;SOUND;kouichi_axis (\u9b54\u738b\u9b42);on_jin (\u97f3\u4eba);;GAME ENGINE (tmlib.js);phi_jp;;TEST PLAY;manofac;;PROGRAM AND GRAPHICS;minimo(stage3);daishi_hmr;;special respect to...;DODONPACHI series by CAVE;PRECURE series by TOEI;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!".split(";");
  gls2.tj = tm.createClass({superClass:gls2.Scene, ka:l, da:l, labels:l, aj:t, speed:0, xi:t, Mi:l, init:function() {
    this.superInit();
    this.Mi = tm.display.CanvasElement().addChildTo(this);
    this.ka = gls2.core.ba.ka;
    this.ka.addChildTo(this);
    this.ka.direction = 0.5 * Math.PI;
    this.ka.speed = 1;
    var a = this.da = gls2.core.ba.da;
    a.Cc = t;
    a.setPosition(240, 448);
    a.ba = this.Mi;
    [].concat(a.children).forEach(function(c) {
      c != a.Ac && c.remove()
    });
    a.addChildTo(this);
    var f = a.x;
    a.on("enterframe", function() {
      0.2 < a.x - f ? a.Za += 0.3 : -0.2 > a.x - f ? a.Za -= 0.3 : 0 < a.x - f ? a.Za += 0.11 : 0 > a.x - f && (a.Za -= 0.11);
      f = a.x
    });
    var d = function() {
      var c = gls2.ja.randf(0.8, 1.2);
      a.tweener.clear().to({x:gls2.ja.randf(48, 432), y:gls2.ja.randf(192, 512), scaleX:c, scaleY:c}, 6E3, "easeInOutQuad").call(d)
    }.bind(this);
    d();
    gls2.core.ba.za += 1;
    var j = this;
    this.labels = c.map(function(a, c) {
      return tm.display.Label(a, 16).setPosition(240, 960 + 64 * c).addChildTo(j).on("enterframe", function() {
        this.y -= j.speed;
        -192 > this.y && this.remove()
      })
    });
    tm.display.Label("dev7.jp", 24).setPosition(240, 960 + 64 * (c.length + 3)).addChildTo(this).on("enterframe", function() {
      320 < this.y && (this.y -= j.speed)
    });
    this.tweener.wait(2E3).call(function() {
      gls2.Nb("bgmEnding", k, k);
      this.aj = k
    }.bind(this))
  }, Kl:function() {
    0 === gls2.core.ba.da.type ? gls2.core.xa("allclear0") : 1 === gls2.core.ba.da.type ? gls2.core.xa("allclear1") : 2 === gls2.core.ba.da.type && gls2.core.xa("allclear2")
  }, Ll:function() {
    this.ka.addChildTo(gls2.core.ba)
  }, update:function(a) {
    a.keyboard.getKey("z") || a.keyboard.getKey("x") || a.keyboard.getKey("c") || this.aj && gls2.gb && gls2.gb.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(a) {
      return!!a.parent
    }) ? this.speed = 8 : this.kl() : this.speed = 0.5
  }, kl:function() {
    this.xi || (this.xi = k, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 5E3).call(function() {
      gls2.We();
      this.app.replaceScene(gls2.Ph())
    }.bind(this)), this.ka.tweener.clear().to({speed:9}, 2E3), this.da.tweener.clear().wait(2E3).to({y:-192}, 2E3, "easeInQuad"))
  }, Ad:J()})
})();
(function() {
  gls2.ea = tm.createClass({superClass:tm.display.CanvasElement, name:l, da:l, ba:l, Ka:l, ra:0, ad:0, score:0, Uc:t, erase:t, star:1, Lk:t, Jb:k, Xa:t, frame:0, eb:t, Ld:l, direction:0, speed:0, ga:l, init:function(a, f, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Xa = t;
      c.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = c.indexOf(this);
      -1 !== a && c.splice(a, 1)
    });
    this.Jb = k;
    this.ba = a;
    this.da = a.da;
    this.score = 100;
    this.erase = t;
    this.ak(d);
    f.setup(this);
    this.altitude = this.Uc ? 1 : 10;
    this.Ld = {x:0, y:0};
    this.eb = t
  }, Ne:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, Il:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Xa === t && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Xa = k, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, c = this.y;
    this.Uc && (this.x += this.ba.ka.Ca, this.y += this.ba.ka.Da);
    this.Xa && (this.frame += 1);
    this.Ld.x = this.x - a;
    this.Ld.y = this.y - c
  }, Sc:function(a) {
    if(!this.Xa) {
      return t
    }
    this.ra -= a;
    if(0 >= this.ra) {
      return a = gls2.ja.randf(0, 5), 2 > a ? this.ba.Bb("enemy destroy.") : 4 > a ? this.ba.Bb(this.name + " destroy.") : this.ba.Bb("ETR reaction gone."), this.erase && gls2.fa.erase(k, this.ba.Ma, this instanceof gls2.od), this.dispatchEvent(tm.event.Event("destroy")), this.ya(), "yukishiro" === this.name ? gls2.core.xa("mboss1") : "mishou" === this.name ? gls2.core.xa("mboss2") : "higashi" === this.name ? gls2.core.xa("mboss3") : "hishikawa" === this.name ? gls2.core.xa("mboss4") : "minamino" === 
      this.name ? gls2.core.xa("mboss5") : "misumi" === this.name ? gls2.core.xa("boss1") : "hyuga" === this.name ? gls2.core.xa("boss2") : "momozono" === this.name ? gls2.core.xa("boss3") : "aida" === this.name ? gls2.core.xa("boss4") : "hojo" === this.name && gls2.core.xa("boss5"), k
    }
    40 > this.ra && this.Ia();
    return t
  }, ya:function() {
    gls2.oa.wf(this.x, this.y, this.ba, this.Ld);
    this.remove()
  }, cc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Zk:function() {
    return this.Jb
  }, Ia:J(), ak:function(a) {
    this.name = a;
    a = gls2.ea.qj[a];
    this.ra = this.ad = a[0];
    this.score = a[1];
    this.Uc = a[2];
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
    this.ba.Wg.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.oa.wf(this.x + gls2.ja.rand(-100, 100), this.y + gls2.ja.rand(-40, 40), this.ba, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.oa.Bd(this.x, this.y, this.ba);
      this.remove()
    }.bind(this))
  }, we:function() {
    function a() {
      (0 === c % 23 || 0 === c % 37) && gls2.oa.hb(this.x + gls2.ja.rand(-100, 100), this.y + gls2.ja.rand(-40, 40), this.ba);
      c++
    }
    var c = 0;
    this.on("enterframe", a);
    this.on("enterframe", function() {
      this.x += 3 * Math.random() - 1.5;
      this.y += 3 * Math.random() - 1.5 + 1
    });
    this.tweener.clear().to({x:240, y:128}, 500, "easeOutQuad").wait(2E3).call(function() {
      this.off("enterframe", a)
    }.bind(this)).wait(500).call(function() {
      gls2.hg(this.x, this.y, this.ba)
    }.bind(this)).wait(2E3).call(function() {
      this.remove()
    }.bind(this))
  }});
  gls2.ea.ze = function() {
    for(var a = [].concat(c), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var c = gls2.ea.qb = []
})();
gls2.od = tm.createClass({superClass:gls2.ea, Lk:k, ad:0, Of:l, init:function(c, a, f) {
  this.Of = a;
  this.superInit(c, this.Of[0], f);
  this.ad = this.ra;
  this.addEventListener("added", function() {
    this.ba.yd = this;
    this.ba.jl();
    this.tweener.wait(1E3).call(function() {
      this.ba.Ce = t
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ba.yd = l;
    this.ba.Ck();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ba.gk()
    }.bind(this));
    a.addChildTo(this.ba.dc)
  })
}, Sc:function(c) {
  var a = this.ra;
  if(gls2.ea.prototype.Sc.call(this, c)) {
    return this.ba.Ce = k, this.ba.da.ue = t, gls2.xf(), k
  }
  this.ra <= 0.55 * this.ad && 0.55 * this.ad < a ? (gls2.aa.ee(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.oa.hb(this.x, this.y, this.ba), gls2.fa.erase(k, this.ba.Ma), this.Of[1].setup(this)) : this.ra <= 0.1 * this.ad && 0.1 * this.ad < a && (gls2.aa.ee(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.oa.hb(this.x, this.y, this.ba), gls2.fa.erase(k, this.ba.Ma), this.Of[2].setup(this), gls2.ua("voJacms"))
}});
(function() {
  gls2.ea.qj = {kujo:[2, 300, t, t, 1, {radius:24}], kiryu:[3, 400, t, t, 1, {radius:24}], natsuki:[5, 900, k, t, 1, {radius:24}], kise:[50, 15E3, k, t, 1, {radius:24}], yamabuki:[100, 15E3, k, t, 1, {width:140, height:70}], hanasaki:[150, 2E5, k, k, 10, {radius:40}], myodoin:[50, 15E3, k, t, 1, {radius:40}], kenzaki:[200, 3E5, k, k, 10, {width:100, height:40}], minazuki:[300, 3E5, k, k, 10, {width:100, height:40}], tsukikage:[8, 1E3, t, t, 5, {width:100, height:20}], kasugano:[6, 1E3, t, t, 1, {radius:24}], 
  kurokawa:[35, 5E3, t, t, 5, {width:100, height:20}], mimino:[35, 5E3, t, t, 5, {width:100, height:20}], shirabe:[35, 5E3, t, t, 5, {width:100, height:20}], akimoto:[250, 3E5, t, k, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, t, k, 20, {width:180, heightBottom:40, heightTop:120}], aono:[300, 3E5, t, k, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, t, k, 20, {width:240, height:80}], misumi:[4E3, 2E6, t, k, 0, {width:240, height:80}], mishou:[1E3, 1E6, 
  t, k, 20, {width:300, height:80}], higashi:[1E3, 12E5, t, k, 20, {width:256, height:128}], momozono:[6E3, 35E5, t, k, 0, {width:256, height:128}], hyuga:[6E3, 3E6, t, k, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, t, k, 20, {radius:130}], aida:[8E3, 4E6, t, k, 0, {width:370, heightBottom:5, heightTop:60}], minamino:[1500, 5E6, k, k, 30, {width:180, heightTop:375, heightBottom:-325}], houjou:[1E4, 8E6, t, k, 0, {width:300, heightBottom:85, heightTop:60}], rery:[250, 2E3, k, t, 5, {radius:24}], 
  fary:[200, 2E3, k, t, 5, {radius:24}], sory:[350, 2E3, k, t, 5, {radius:24}], lary:[300, 2E3, k, k, 5, {radius:24}], shiry:[250, 2E3, k, k, 5, {radius:24}], dodory:[120, 2E3, k, t, 5, {radius:24}], kurumi:[30, 500, t, t, 1, {width:24, height:48}], hino:[20, 1E4, t, t, 1, {width:64, height:64}], hoshizora:[600, 3E5, t, k, 30, {width:128, height:64}], yotsuba:[300, 5E5, t, k, 40, {width:64, height:64}], yotsubaLeaf:[30, 1E5, t, t, 10, {width:64, height:64}], midorikawa:[5, 2E3, t, t, 1, {width:64, 
  height:64}], aoki:[5, 3200, t, t, 1, {width:64, height:64}], madoka:[250, 4E5, t, k, 10, {width:256, height:64}]};
  gls2.ea.ia = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kujo");
    this.ca = c("tex1", 64, 64)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ea.Ba = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kiryu");
    this.ca = c("tex1", 64, 64)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ea.ma = tm.createClass({superClass:gls2.ea, Ig:l, Jg:l, init:function(a, f) {
    this.superInit(a, f, "natsuki");
    this.Ig = c("tex_tank1", 64, 64);
    this.Jg = c("tex_tank1", 64, 64);
    this.vd = this.vd || 0;
    this.Bc = this.Bc || 0
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    for(a = this.vd;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var c = this.Bc;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.Ig.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.Jg.setFrameIndex(~~(16 * c / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Ig.draw(a);
    this.Jg.draw(a)
  }, ya:function() {
    gls2.oa.ok(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Ye = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "yamabuki");
    this.ca = c("tex2", 256, 128).setFrameIndex(7)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Wb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "tsukikage");
    this.ca = c("tex1", 64, 64).setFrameIndex(23)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.jb = tm.createClass({superClass:gls2.ea, ca:l, Mg:l, init:function(a, f) {
    this.superInit(a, f, "kasugano");
    this.ca = c("tex5", 64, 64).setFrameIndex(1);
    this.Zb = gls2.Ta(80, 1, 0.8);
    this.Mg = tm.geom.Vector2()
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && this.Zb.clone().setPosition(this.x, this.y).addChildTo(this.ba);
    this.rotation = tm.geom.Vector2.sub(this.position, this.Mg).toAngle() * gls2.ja.RAD_TO_DEG - 90;
    this.Mg.set(this.x, this.y)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Xc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kurokawa");
    this.ca = c("tex1", 128, 128).setFrameIndex(1)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.vc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "mimino");
    this.ca = c("tex4", 128, 128).setFrameIndex(10)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.sb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "shirabe");
    this.ca = c("tex5", 128, 128).setFrameIndex(4)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Xb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "akimoto");
    this.ca = c("tex1", 256, 128).setFrameIndex(1)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    this.nc()
  }});
  gls2.ea.ne = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "aono");
    this.ca = c("tex1", 256, 128);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 128;
    this.setScale(1.2);
    this.fb = gls2.Ta(70, 1, 0.97)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.fb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ba), this.fb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ba))
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    this.nc()
  }});
  gls2.ea.Rd = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "yumehara");
    this.ca = c("tex1", 256, 256);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 256;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 256
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    this.nc()
  }});
  gls2.ea.Ra = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kise");
    this.ca = c("tex1", 64, 128).setFrameIndex(14)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.ff = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "hanasaki");
    this.ca = c("tex1", 128, 128).setFrameIndex(12)
  }, Ia:J(), ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.eg = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "myodoin");
    this.ca = c("tex5", 64, 128).setFrameIndex(0)
  }, Ia:J(), ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.tc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kenzaki");
    this.ca = c("tex1", 128, 256);
    this.ca.srcRect.x = 0;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 128;
    this.ca.srcRect.height = 256
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Vf = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "minazuki");
    this.ca = c("tex5", 128, 256);
    this.ca.setFrameIndex(1);
    this.setScale(1.2)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Wa = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "hino");
    this.ca = c("tex4", 64, 32).setFrameIndex(0);
    this.setScale(1.5)
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.qa = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "midorikawa");
    this.ca = c("tex4", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Cb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "aoki");
    this.ca = c("tex4", 64, 64).setFrameIndex(1)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, Ne:function() {
    240 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.pl = this.y + 192;
    this.gd = this.y
  }});
  gls2.ea.Pc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "madoka");
    this.ca = c("tex4", 256, 128).setFrameIndex(3)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    gls2.oa.Bd(this.x, this.y, this.ba);
    this.nc()
  }});
  gls2.ea.Ed = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "hoshizora");
    this.ca = c("tex4", 256, 128).setFrameIndex(1);
    this.boundingWidth = 384;
    this.setScale(1.5)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    if(this.Xa === t && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Xa = k, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.Bd(this.x, this.y, this.ba);
    this.nc()
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, Ne:function() {
    this.tweener.move(240, this.y, 7E3, "easeInOutQuad").moveBy(0, 64, 5E3, "easeInOutQuad");
    240 < this.x ? (this.scaleX = -1.5, this.tweener.moveBy(-496, 0, 8E3, "easeInOutQuad")) : this.tweener.moveBy(496, 0, 8E3, "easeInOutQuad")
  }, cc:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }, nc:function() {
    this.remove();
    this.ba.Wg.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.oa.wf(this.x + gls2.ja.rand(-100, 100), this.y + gls2.ja.rand(-40, 40), this.ba, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.oa.Bd(this.x, this.y, this.ba);
      gls2.oa.Bd(this.x + 64, this.y, this.ba);
      gls2.oa.Bd(this.x - 64, this.y, this.ba);
      this.remove()
    }.bind(this))
  }});
  gls2.ea.Sf = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "yotsuba");
    this.ca = c("tex4", 128, 128).setFrameIndex(1);
    this.boundingHeight = this.boundingWidth = 192;
    this.setScale(1.5)
  }, draw:function(a) {
    this.ca.draw(a)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    gls2.oa.Bd(this.x, this.y, this.ba);
    this.nc();
    this.ba.Dd || gls2.Oh(this.x, this.y, this.da).addChildTo(this.ba);
    for(var a = 0;4 > a;a++) {
      this.Vc[a] && this.Vc[a].ya()
    }
    delete this.Vc;
    this.remove()
  }, Ne:function() {
    this.Vc = [];
    for(var a = 0;4 > a;a++) {
      var c = 0.5 * Math.PI * a;
      this.Vc[a] = this.Ka.Ua({hard:gls2.ea.md, soft:gls2.aa.md[a], x:this.x + 96 * Math.sin(c), y:this.y + 96 * Math.cos(c)});
      this.Vc[a].dir = c;
      this.Vc[a].Sg = this;
      this.Vc[a].Ok = a;
      this.Vc[a].distance = 96
    }
    gls2.ea.prototype.Ne.call(this);
    return this
  }});
  gls2.ea.md = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "yotsubaLeaf");
    this.ca = c("yotsubaLeaf", 64, 64).setFrameIndex(0);
    this.boundingHeight = this.boundingWidth = 96;
    this.setScale(1.5)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.Sg.Vc[this.Ok] = l;
    this.remove()
  }});
  gls2.ea.me = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "kurumi");
    this.ca = c("tex3", 64, 128);
    this.ca.setFrameIndex(8)
  }, Ia:J(), draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    gls2.Kh(this.x, this.y, this.da).addChildTo(this.ba);
    this.remove()
  }});
  gls2.ea.cg = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "yukishiro");
    this.ca = c("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    this.nc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.rg = tm.createClass({superClass:gls2.od, ca:l, init:function(a, f) {
    this.superInit(a, f, "misumi");
    this.ca = c("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, ya:function() {
    this.we();
    gls2.core.fps = 60
  }});
  gls2.ea.ng = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "mishou");
    this.ca = c("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.fb = gls2.Ta(80, 1, 0.9);
    this.Zb = gls2.Ta(256, 1, 0.9)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.fb.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba), this.fb.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba), this.Zb.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba))
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    this.nc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Ej = tm.createClass({superClass:gls2.od, init:function(a, f) {
    this.superInit(a, f, "hyuga");
    this.ca = c("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    this.we();
    gls2.core.fps = 60
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Bg = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "higashi");
    this.ca = c("tex4", 256, 128).setFrameIndex(2);
    this.blendMode = "lighter";
    this.setScale(1.5)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    this.nc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Aj = tm.createClass({superClass:gls2.od, init:function(a, f) {
    this.superInit(a, f, "momozono");
    this.ca = c("tex4", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    this.we();
    gls2.core.fps = 60
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.xg = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "hishikawa");
    this.ca = c("tex2", 256, 256).setFrameIndex(2);
    this.ca.setScale(2);
    this.fb = gls2.Ta(60, 1, 0.95);
    this.Zb = gls2.Ta(500, 1, 0.8)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && (this.fb.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.fb.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Zb.clone().setPosition(this.x, this.y).addChildTo(this.ba))
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    this.nc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Bj = tm.createClass({superClass:gls2.od, init:function(a, f) {
    this.superInit(a, f, "aida");
    this.ca = c("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.fb = gls2.Ta(60, 1, 0.95);
    this.Zb = gls2.Ta(500, 1, 0.8)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && (this.fb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.fb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.fb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.fb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Zb.clone().setPosition(this.x, this.y).addChildTo(this.ba))
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    this.we();
    gls2.core.fps = 60
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.zj = tm.createClass({superClass:gls2.ea, xe:l, ni:[{x:-60, y:-426}, {x:60, y:-426}, {x:-72, y:-72}, {x:72, y:-72}, {x:-72, y:-348}, {x:72, y:-348}, {x:-48, y:-264}, {x:48, y:-264}, {x:-48, y:108}, {x:48, y:108}, {x:-78, y:-168}, {x:78, y:-168}, {x:-96, y:-228}, {x:96, y:-228}, {x:0, y:-336}, {x:0, y:-168}, {x:-120, y:144}, {x:120, y:144}, {x:-60, y:168}, {x:60, y:168}], init:function(a, f) {
    this.superInit(a, f, "minamino");
    this.altitude = 10;
    this.eb = k;
    this.ca = c("tex5", 256, 512).setFrameIndex(1);
    this.setScale(2.16);
    this.xe = [];
    this.on("launch", function() {
      Array.prototype.push.apply(this.xe, [this.Ka.Ua({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Ob, soft:gls2.aa.Ob(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Ob, soft:gls2.aa.Ob(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Ob, soft:gls2.aa.Ob(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Ob, soft:gls2.aa.Ob(), 
      x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Ob, soft:gls2.aa.Ob(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Ob, soft:gls2.aa.Ob(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Nc, soft:gls2.aa.Nc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.jg, soft:gls2.aa.jg(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Cg, soft:gls2.aa.Cg(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Jc, 
      soft:gls2.aa.Jc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Jc, soft:gls2.aa.Jc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Jc, soft:gls2.aa.Jc(), x:0, y:0}), this.Ka.Ua({hard:gls2.ea.Jc, soft:gls2.aa.Jc(), x:0, y:0})])
    })
  }, update:function() {
    this.xe.forEach(function(a, c) {
      a.setPosition(this.x + this.ni[c].x, this.y + this.ni[c].y)
    }.bind(this))
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    function a() {
      (0 === c % 23 || 0 === c % 37) && gls2.oa.hb(this.x + gls2.ja.rand(-200, 200), this.y + gls2.ja.rand(-300, 300), this.ba);
      c++
    }
    this.dispatchEvent(tm.event.Event("enemyconsumed"));
    this.xe.forEach(function(a) {
      a.parent && a.remove()
    }.bind(this));
    this.tweener.clear();
    this.gj.clear();
    this.hj.clear();
    var c = 0;
    this.on("enterframe", a);
    this.on("enterframe", function() {
      this.x += 3 * Math.random() - 1.5;
      this.y += 1
    });
    this.tweener.clear().wait(4E3).call(function() {
      this.off("enterframe", a)
    }.bind(this)).call(function() {
      gls2.hg(this.x, this.y - 300, this.ba);
      gls2.hg(this.x, this.y + 0, this.ba)
    }.bind(this)).wait(2E3).call(function() {
      this.remove()
    }.bind(this))
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Qd = tm.createClass({superClass:gls2.ea, ca:l, cj:0, init:function(a, f, d, j, p) {
    this.superInit(a, f, d);
    this.ca = c(j, 64, 64);
    this.cj = p
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    for(var c = tm.geom.Vector2.sub(this.ba.da.position, this.position).toAngle() + 2 * Math.PI / 32;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.ca.setFrameIndex(16 * this.cj + Math.floor(16 * (c / (2 * Math.PI))))
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    gls2.oa.hb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Mc = tm.createClass({superClass:gls2.ea.Qd, init:function(a, c) {
    this.superInit(a, c, "rery", "kanade-cannon", 0);
    this.setScale(1.92)
  }});
  gls2.ea.Ob = tm.createClass({superClass:gls2.ea.Qd, init:function(a, c) {
    this.superInit(a, c, "rery", "kanade-cannon", 1);
    this.setScale(1.2)
  }});
  gls2.ea.Nc = tm.createClass({superClass:gls2.ea.Qd, init:function(a, c) {
    this.superInit(a, c, "sory", "yotsubaLeaf", 0);
    this.setScale(1.2)
  }});
  gls2.ea.jg = tm.createClass({superClass:gls2.ea.Qd, init:function(a, c) {
    this.superInit(a, c, "lary", "yotsubaLeaf", 0);
    this.setScale(1.44)
  }});
  gls2.ea.Cg = tm.createClass({superClass:gls2.ea.Qd, init:function(a, c) {
    this.superInit(a, c, "shiry", "kanade-cannon", 1);
    this.setScale(1.68)
  }});
  gls2.ea.Jc = tm.createClass({superClass:gls2.ea.Qd, init:function(a, c) {
    this.superInit(a, c, "dodory", "tex_tank1", 1);
    this.setScale(1.44)
  }});
  gls2.ea.yj = tm.createClass({superClass:gls2.od, init:function(a, f) {
    this.superInit(a, f, "houjou");
    this.ca = c("tex5", 256, 256).setFrameIndex(2);
    this.setScale(2);
    this.fb = gls2.Ta(60, 1, 0.95);
    this.Zb = gls2.Ta(500, 1, 0.8)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && (this.fb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.fb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.fb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.fb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Zb.clone().setPosition(this.x, this.y).addChildTo(this.ba))
  }, Ia:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Oa() : 5 === a.app.frame % 30 && this.ca.Na()
    })
  }, ya:function() {
    this.we();
    gls2.core.fps = 60
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  var c = tm.createClass({superClass:tm.display.Sprite, Dh:l, init:function(a, c, d) {
    this.superInit(a, c, d);
    "string" === typeof a && (this.Dh = a)
  }, draw:function(a) {
    var c = this.srcRect;
    a.context.drawImage(this._image.element, c.x, c.y, c.width, c.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Oa:function() {
    var a = this.srcRect.x, c = this.srcRect.y, d = this.srcRect.width, j = this.srcRect.height;
    this.image = this.Dh + "Red";
    this.srcRect.x = a;
    this.srcRect.y = c;
    this.srcRect.width = d;
    this.srcRect.height = j
  }, Na:function() {
    var a = this.srcRect.x, c = this.srcRect.y, d = this.srcRect.width, j = this.srcRect.height;
    this.image = this.Dh;
    this.srcRect.x = a;
    this.srcRect.y = c;
    this.srcRect.width = d;
    this.srcRect.height = j
  }})
})();
(function() {
  gls2.aa = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.aa.ee(this)
    })
  }});
  gls2.aa.ta = function(a, c) {
    if(gls2.fa[c] === i) {
      console.warn("Danmaku[" + c + "] is undefined!")
    }else {
      var f = gls2.fa[c].tf();
      a.on("enterframe", f);
      a.on("completeattack", function() {
        f.stop = k
      })
    }
  };
  gls2.aa.ee = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var c = 0, f = a.length;c < f;c++) {
        a[c] && a[c].Gf && (a[c].stop = k)
      }
    }
  };
  gls2.aa.el = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var c = 0, f = a.length;c < f;c++) {
        a[c] && a[c].Gf && (a[c].stop = t)
      }
    }
  };
  gls2.aa.ia = tm.createClass({superClass:gls2.aa, pattern:l, init:function(a, c) {
    this.superInit();
    this.pattern = a;
    this.ql = c
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    var c = this.pattern, f = this.ql;
    a.on("launch", function() {
      var a = gls2.va.randf(640 * (f - 0.1), 640 * (f + 0.1));
      this.tweener.clear().wait(gls2.va.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.aa.ta(this, c)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.aa.Lc = gls2.aa.ia("basic0-0", 0.2);
  gls2.aa.vb = gls2.aa.ia("basic0-0", 0.4);
  gls2.aa.Pd = gls2.aa.ia("basic0-0", 0.6);
  gls2.aa.ub = gls2.aa.ia("basic1-2", 0.2);
  gls2.aa.Kc = gls2.aa.ia("basic1-2", 0.4);
  gls2.aa.Od = gls2.aa.ia("basic1-2", 0.6);
  gls2.aa.Ba = tm.createClass({superClass:gls2.aa, Mb:l, init:function(a, c) {
    this.superInit();
    this.Mb = a;
    this.delay = c
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Mb = this.Mb;
    a.tweener.wait(this.delay === i ? gls2.ja.rand(0, 1E3) : this.delay).call(function() {
      this.speed = 6;
      gls2.aa.ta(this, this.Mb);
      this.on("enterframe", function() {
        this.y < this.da.y && this.Xa && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ja.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.cc() && this.Xa && this.remove();
        if(22500 > gls2.Tc(this, this.da) || this.y > this.da.y + 150) {
          this.Jb = t
        }
      })
    }.bind(a))
  }});
  gls2.aa.wb = gls2.aa.Ba("basic1-0");
  gls2.aa.Ha = function(a) {
    return gls2.aa.Ba("basic1-3", a * (2 * Math.random() + 1))
  };
  var c = tm.createClass({superClass:gls2.aa, init:function(a, c, f) {
    this.superInit();
    this.Kk = a;
    this.Jk = c;
    this.Vd = f
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.speed = this.Kk;
    a.vd = this.Jk;
    this.Vd && (a.Vd = [].concat(this.Vd));
    a.Bc = 0;
    a.on("enter", function() {
      gls2.aa.ta(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.vd) * this.speed;
      this.y += Math.sin(this.vd) * this.speed;
      this.Xa && !this.cc() && this.remove();
      for(this.Bc = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.Bc;) {
        this.Bc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.Bc;) {
        this.Bc -= 2 * Math.PI
      }
      this.Jb = this.y < this.da.y && 4E4 < gls2.Tc(this, this.da);
      if(this.Vd) {
        for(var a = 0;a < this.Vd.length;a++) {
          var c = this.Vd[a];
          c.frame === this.frame && this.tweener.to({vd:c.dir !== i ? c.dir : this.vd, speed:c.speed !== i ? c.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.aa.xc = c(1, 0.25 * Math.PI);
  gls2.aa.vl = c(1, -1.75 * Math.PI);
  gls2.aa.pe = c(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.aa.wa = c(1.6, 0.5 * Math.PI);
  gls2.aa.yc = c(1.6, -0.5 * Math.PI);
  gls2.aa.Ih = tm.createClass({superClass:gls2.aa, Pa:l, init:function(a) {
    this.superInit();
    this.Pa = a
  }, setup:function(a) {
    gls2.aa.ta(a, this.Pa);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.aa.Lh = gls2.aa.Ih("bukky-4-0");
  gls2.aa.Mh = gls2.aa.Ih("bukky-5-0");
  c = tm.createClass({superClass:gls2.aa, Pa:l, qi:t, init:function(a, c) {
    this.superInit();
    this.Pa = a;
    this.qi = !!c
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Pa = this.Pa;
    a.on("enter", function() {
      gls2.aa.ta(this, this.Pa)
    });
    a.on("enterframe", function() {
      this.Xa && !this.cc() && this.remove()
    });
    if(!this.qi) {
      a.on("enterframe", function() {
        this.Jb = this.y < this.da.y && 4E4 < gls2.Tc(this, this.da)
      })
    }
  }});
  gls2.aa.Ub = c("basic3-0", t);
  gls2.aa.Vb = c("basic3-1", t);
  gls2.aa.uc = c("cannon2-0", k);
  gls2.aa.Uf = c("cannon2-3", k);
  gls2.aa.$e = c("cannon3-0", k);
  gls2.aa.Wf = c("cannon5-0", k);
  var a = tm.createClass({superClass:gls2.aa, velocityY:0, Pa:l, delay:0, init:function(a, c, f) {
    this.superInit();
    this.velocityY = a;
    this.Pa = c;
    this.delay = f || 0
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Pa];
    a.Re = t;
    a.tweener.clear().wait(this.delay).moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, this.ga[0]);
      this.Re = k
    }.bind(a));
    a.on("enterframe", function() {
      this.Re && (this.y += this.velocityY, 384 < this.y && gls2.aa.ee(this), this.Xa && !this.cc() && this.remove(), this.Jb = this.y < this.da.y)
    })
  }});
  gls2.aa.pd = a(0.5, "kurokawa-1");
  gls2.aa.Cj = a(0.5, "kurokawa-4");
  gls2.aa.wc = function(c) {
    return a(0.5, "milk-5", c)
  };
  gls2.aa.tb = tm.createClass({superClass:gls2.aa, ij:0, kj:0, jj:0, lj:0, init:function(a, c, f, r) {
    this.superInit();
    this.ij = a;
    this.kj = c;
    this.jj = f;
    this.lj = r
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.on("enterframe", function() {
      this.rotation = tm.geom.Vector2.sub(this.ba.da.position, this.position).toAngle() * gls2.ja.RAD_TO_DEG - 90
    });
    var c = this;
    a.tweener.clear().to({x:c.ij, y:c.kj}, 1400, "easeInOutQuad").call(function() {
      gls2.aa.ta(this, "ako-5")
    }.bind(a));
    a.one("completeattack", function() {
      this.tweener.clear().to({x:c.jj, y:c.lj}, 900, "easeInOutQuad").call(function() {
        gls2.aa.ta(this, "ako-5")
      }.bind(this));
      this.one("completeattack", function() {
        this.tweener.clear().to({y:832}, 1900, "easeInQuad")
      })
    })
  }});
  gls2.aa.rd = tm.createClass({superClass:gls2.aa, delay:0, init:function(a) {
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
  gls2.aa.qe = tm.createClass({superClass:gls2.aa, delay:0, init:function(a) {
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
  gls2.aa.jb = tm.createClass({superClass:gls2.aa, Qi:0, direction:1, delay:0, init:function(a, c, f) {
    this.superInit();
    this.Qi = a;
    this.direction = c;
    this.delay = f
  }, setup:function(a) {
    function c(a) {
      return f ? a : 1 - a
    }
    gls2.aa.prototype.setup.call(this, a);
    tm.app.Tweener(a).wait(this.delay).call(function() {
      gls2.aa.ta(this, "basic1-3")
    }.bind(a));
    var f = 1 == this.direction;
    switch(this.Qi) {
      case 0:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * c(0.8)}, 1600, "easeOutQuart");
        tm.app.Tweener(a).wait(this.delay).to({y:832}, 2E3, "easeInQuad");
        break;
      case 1:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * c(0.2)}, 1040, "easeInOutQuad").wait(700).to({x:480 * c(0.4)}, 800, "easeInOutQuad");
        tm.app.Tweener(a).wait(this.delay).to({y:192}, 1840, "easeInOutQuad").to({y:832}, 1840, "easeInQuad");
        break;
      case 2:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * c(0.2)}, 1040, "easeInOutQuad").wait(560).to({x:480 * c(0.4)}, 1360, "easeInOutQuad").to({x:480 * c(1.4)}, 1600, "easeInOutQuad");
        tm.app.Tweener(a).wait(this.delay).to({y:192}, 1840, "easeInOutQuad").to({y:512}, 1760, "easeInOutQuad");
        break;
      case 3:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * c(0.2)}, 1040, "easeInOutQuad").wait(560).to({x:480 * c(0.4)}, 1360, "easeInOutQuad").to({x:480 * c(1.4)}, 1600, "easeInOutQuad"), tm.app.Tweener(a).wait(this.delay).to({y:448}, 1840, "easeInOutQuad").to({y:128}, 1760, "easeInOutQuad")
    }
  }});
  c = tm.createClass({superClass:gls2.aa, velocityY:0, Pa:l, init:function(a, c) {
    this.superInit();
    this.velocityY = a;
    this.Pa = c
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Pa];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0]);
      gls2.oa.yk(this.x, this.y, this.ba)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Xa && !this.cc() && this.remove();
      this.Jb = this.y < this.da.y
    })
  }});
  gls2.aa.Wa = c(0.5, "akane");
  gls2.aa.qa = tm.createClass({superClass:gls2.aa, Mb:l, init:function(a, c) {
    this.superInit();
    this.Mb = "nao-" + c;
    this.speed = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Mb = this.Mb;
    a.speed = this.speed;
    a.tweener.wait(gls2.va.rand(0, 1E3)).call(function() {
      gls2.aa.ta(this, this.Mb);
      var a = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.da.y && this.Xa && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ja.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * a - 90;
        !this.cc() && this.Xa && this.remove();
        if(22500 > gls2.Tc(this, this.da) || this.y > this.da.y + 150) {
          this.Jb = t
        }
      })
    }.bind(a))
  }});
  gls2.aa.yb = gls2.aa.qa(3, 1);
  gls2.aa.zb = gls2.aa.qa(6, 1);
  gls2.aa.Ab = gls2.aa.qa(12, 1);
  gls2.aa.Cb = tm.createClass({superClass:gls2.aa, Mb:l, init:function(a) {
    this.superInit();
    this.Mb = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Mb = this.Mb;
    a.speed = this.speed;
    a.tweener.wait(gls2.va.rand(0, 1E3)).call(function() {
      gls2.aa.ta(this, this.Mb);
      this.qc = 0;
      this.on("enterframe", function() {
        this.y < this.pl && (this.gd += 1);
        this.x += this.speed;
        this.y = this.gd + 8 * Math.sin(this.qc);
        this.qc += 0.06
      })
    }.bind(a))
  }});
  gls2.aa.fc = gls2.aa.Cb(1);
  gls2.aa.Ql = gls2.aa.Cb(2);
  gls2.aa.Pc = tm.createClass({superClass:gls2.aa, velocityY:0, Pa:l, delay:0, init:function() {
    this.superInit();
    this.velocityY = 0.5;
    this.Pa = "aguri";
    this.delay = 0
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Pa];
    a.Re = t;
    a.tweener.clear().wait(this.delay).moveBy(0, 192, 800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, this.ga[0]);
      this.Re = k
    }.bind(a));
    a.on("enterframe", function() {
      this.Re && (this.y += this.velocityY, 384 < this.y && gls2.aa.ee(this), this.Xa && !this.cc() && this.remove(), this.Jb = this.y < this.da.y)
    })
  }});
  gls2.aa.Pc = gls2.aa.Pc();
  gls2.aa.Ed = tm.createClass({superClass:gls2.aa, velocityX:0, Pa:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Pa = "miyuki"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [this.Pa];
    a.Sl = a.y;
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.Xa && !this.cc() && this.remove();
      this.Jb = this.y < this.da.y
    })
  }});
  gls2.aa.Ed = gls2.aa.Ed(1);
  c = tm.createClass({superClass:gls2.aa, velocityX:0, Pa:l, init:function() {
    this.superInit();
    this.Pa = "alice"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = 0.3;
    a.ga = [this.Pa];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Xa && !this.cc() && this.remove();
      this.Jb = this.y < this.da.y
    })
  }});
  gls2.aa.Sf = c();
  c = tm.createClass({superClass:gls2.aa, Pa:l, init:function(a) {
    this.superInit();
    this.Pa = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [this.Pa];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.Sg.x, c = this.Sg.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = c + Math.cos(this.dir) * this.distance;
      a = ~~(180 * Math.atan2(c - this.y, a - this.x) / 3.14159);
      this.ca.setFrameIndex(~~(22.5 * ((0 > a ? a + 360 : a) / 360)) % 16, 64, 64);
      this.Xa && !this.cc() && this.remove();
      this.Jb = this.y < this.da.y;
      this.na++
    })
  }});
  gls2.aa.md = [];
  gls2.aa.md[0] = c("aliceLeaf-1");
  gls2.aa.md[1] = c("aliceLeaf-2");
  gls2.aa.md[2] = c("aliceLeaf-1");
  gls2.aa.md[3] = c("aliceLeaf-2");
  gls2.aa.Sh = a(0.3, "komachi-1");
  gls2.aa.Th = a(0.5, "komachi-2");
  gls2.aa.Uh = a(0.5, "komachi-3");
  gls2.aa.ig = a(0.5, "komachi-4");
  gls2.aa.gg = a(0.5, "komachi-5");
  gls2.aa.ne = tm.createClass({superClass:gls2.aa, Zi:0, init:function(a) {
    this.superInit();
    this.Zi = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    tm.app.Tweener(a).to({x:480 * this.Zi}, 2800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, "mktn-5")
    }.bind(a));
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.aa.vg = a(0.1, "nozomi-4");
  gls2.aa.wg = a(0.3, "nozomi-5");
  gls2.aa.me = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.ta(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Jb = this.Xa
    })
  }});
  gls2.aa.me = gls2.aa.me();
  c = tm.createClass({superClass:gls2.aa, ga:l, If:0, init:function(a, c) {
    this.superInit();
    this.ga = a;
    this.If = c || 1500
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.If = this.If;
    a.ab = t;
    a.cb = t;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.ab = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.5 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.ab === t || 0 >= this.ra) && this.If < this.frame && this.cb === t) {
        this.cb = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.cb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.cg = c(["honoka-1"]);
  gls2.aa.rg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.ab = t;
    a.cb = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.ab = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.cb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Dj = gls2.aa.rg();
  gls2.aa.sg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
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
  gls2.aa.sg = gls2.aa.sg();
  gls2.aa.tg = tm.createClass({superClass:gls2.aa, init:function() {
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
  gls2.aa.tg = gls2.aa.tg();
  gls2.aa.ng = c(["mai-1", "mai-2"]);
  gls2.aa.yg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.ab = t;
    a.cb = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.ab = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.cb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.yg = gls2.aa.yg();
  gls2.aa.zg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
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
  gls2.aa.zg = gls2.aa.zg();
  gls2.aa.Ag = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
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
  gls2.aa.Ag = gls2.aa.Ag();
  var f = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = "setsuna-1"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.ab = t;
    a.cb = t;
    a.Ch = t;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.ab = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        this.Ch = t;
        this.alpha = 1;
        this.eb = t;
        if(50 < gls2.va.rand(0, 100) && 300 < this.frame || this.x - 76 < this.da.x && this.da.x < this.x + 76) {
          gls2.oa.Xg(this.x, this.y, this.ba, 8);
          this.Ch = k;
          this.alpha = 0.3;
          this.eb = k;
          var c = gls2.va.rand(48, 432), d = gls2.va.rand(128, 192);
          this.tweener.move(c, d, 250, "easeInOutQuad").call(a)
        }else {
          c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144), this.tweener.move(240 + Math.cos(c) * d, 192 + 0.5 * Math.sin(c) * d, 2E3, "easeInOutQuad").call(a)
        }
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.ab === t || 0 >= this.ra)) {
        if(1800 < this.frame && this.cb === t && (this.cb = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))), this.Ch && 0 == this.frame % 5) {
          var a = tm.display.Sprite("tex4", 256, 128).setFrameIndex(2);
          a.alpha = 0.3;
          a.x = this.x;
          a.y = this.y;
          a.setScale(1.5);
          a.update = function() {
            this.alpha -= 0.01;
            0 > this.alpha && this.remove()
          };
          this.ba.Vg.addChild(a)
        }
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.cb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Bg = f();
  gls2.aa.kg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["love-1-1", "love-1-2", "love-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.ab = t;
    a.cb = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.ab = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.cb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.kg = gls2.aa.kg();
  gls2.aa.lg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["love-2-1", "love-2-2", "love-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.ab = t;
    a.cb = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.ab = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.cb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.lg = gls2.aa.lg();
  gls2.aa.mg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["love-3-1", "love-3-2"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        if("love-3-1" == [].concat(this.ga).pop()) {
          var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(24, 48);
          this.tweener.move(240 + Math.cos(c) * d, 128 + 0.2 * Math.sin(c) * d, 2E3, "easeInOutQuad").call(a)
        }else {
          this.tweener.move(240, 128, 1E3, "easeInOutQuad").call(a)
        }
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
  gls2.aa.mg = gls2.aa.mg();
  gls2.aa.xg = c(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.aa.og = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.ab = t;
    a.cb = t;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.ab = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = gls2.va.randf(-48, 48);
        this.tweener.move(Math.clamp(this.da.x, 48, 432) + 0.3 * c, 128 + 0.3 * c, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.cb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.og = gls2.aa.og();
  gls2.aa.pg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.4 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
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
  gls2.aa.pg = gls2.aa.pg();
  gls2.aa.qg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-3-1"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.3 * Math.sin(c) * d, 1500, "easeInOutQuad").call(a)
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
  gls2.aa.qg = gls2.aa.qg();
  gls2.aa.fg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.on("enemyconsumed", function() {
      this.Ka.$.le = t
    });
    a.gj = tm.app.Tweener(a).to({x:432}, 3E4, "easeInOutQuad").to({x:48}, 3E4, "easeInOutQuad").call(function() {
      this.Ka.$.le = k
    }.bind(a)).setLoop(k);
    a.hj = tm.app.Tweener(a).to({y:576}, 16E4, "easeInOutQuad").call(function() {
      tm.app.Tweener(this).to({y:448}, 2E4, "easeInOutQuad").to({y:576}, 2E4, "easeInOutQuad").setLoop(k)
    }.bind(a));
    a.tweener.wait(22E4).call(function() {
      this.Ka.$.le = t;
      this.gj.clear();
      this.hj.clear();
      this.tweener.clear().to({x:960}, 1E4, "easeInQuad")
    }.bind(a));
    a.ab = t;
    a.on("enterframe", function() {
      this.eb = 3 < this.xe.filter(function(a) {
        return!!a.parent
      }).length;
      this.Xa = !this.eb;
      !this.ab && !this.eb && (gls2.aa.ta(this, "kanade"), this.ab = k)
    })
  }});
  gls2.aa.fg = gls2.aa.fg();
  gls2.aa.Mc = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "rery");
    a.on("enterframe", function() {
      this.position.y > this.ba.da.y ? gls2.aa.ee(this) : gls2.aa.el(this)
    })
  }});
  gls2.aa.Ob = tm.createClass({superClass:gls2.aa, init:function() {
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
  gls2.aa.jg = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "lary")
  }});
  gls2.aa.Cg = tm.createClass({superClass:gls2.aa, init:function() {
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
  }});
  gls2.aa.Zf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["hibiki-1-1", "hibiki-1-2", "hibiki-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.ab = t;
    a.cb = t;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.ab = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = gls2.va.randf(-48, 48);
        this.tweener.move(Math.clamp(this.da.x, 48, 432) + 0.3 * c, 128 + 0.3 * c, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.cb) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Zf = gls2.aa.Zf();
  gls2.aa.$f = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["hibiki-2-1", "hibiki-2-2", "hibiki-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.4 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
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
  gls2.aa.$f = gls2.aa.$f();
  gls2.aa.ag = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["hibiki-3-1", "hibiki-3-2"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.va.random() * Math.PI, d = gls2.va.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.3 * Math.sin(c) * d, 1500, "easeInOutQuad").call(a)
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
  gls2.aa.ag = gls2.aa.ag()
})();
(function() {
  var c = gls2.ea, a = gls2.aa;
  gls2.Nh = {"heri1-left":[{hard:c.Ba, soft:a.Lc, x:48, y:-100}, {hard:c.Ba, soft:a.vb, x:96, y:-100}, {hard:c.Ba, soft:a.Lc, x:144, y:-100}, {hard:c.Ba, soft:a.vb, x:192, y:-100}, {hard:c.Ba, soft:a.Lc, x:240, y:-100}], "heri1-center":[{hard:c.Ba, soft:a.Lc, x:144, y:-100}, {hard:c.Ba, soft:a.vb, x:192, y:-100}, {hard:c.Ba, soft:a.Lc, x:240, y:-100}, {hard:c.Ba, soft:a.vb, x:288, y:-100}, {hard:c.Ba, soft:a.Lc, x:336, y:-100}], "heri1-right":[{hard:c.Ba, soft:a.Lc, x:240, y:-100}, {hard:c.Ba, soft:a.vb, 
  x:288, y:-100}, {hard:c.Ba, soft:a.Lc, x:336, y:-100}, {hard:c.Ba, soft:a.vb, x:384, y:-100}, {hard:c.Ba, soft:a.Lc, x:432, y:-100}], "heri1-left2":[{hard:c.Ba, soft:a.vb, x:48, y:-100}, {hard:c.Ba, soft:a.Pd, x:96, y:-100}, {hard:c.Ba, soft:a.vb, x:144, y:-100}, {hard:c.Ba, soft:a.Pd, x:192, y:-100}, {hard:c.Ba, soft:a.vb, x:240, y:-100}], "heri1-center2":[{hard:c.Ba, soft:a.vb, x:144, y:-100}, {hard:c.Ba, soft:a.Pd, x:192, y:-100}, {hard:c.Ba, soft:a.vb, x:240, y:-100}, {hard:c.Ba, soft:a.Pd, 
  x:288, y:-100}, {hard:c.Ba, soft:a.vb, x:336, y:-100}], "heri1-right2":[{hard:c.Ba, soft:a.vb, x:240, y:-100}, {hard:c.Ba, soft:a.Pd, x:288, y:-100}, {hard:c.Ba, soft:a.vb, x:336, y:-100}, {hard:c.Ba, soft:a.Pd, x:384, y:-100}, {hard:c.Ba, soft:a.vb, x:432, y:-100}], "heri2-left":[{hard:c.ia, soft:a.wb, x:48, y:-100}, {hard:c.ia, soft:a.wb, x:96, y:-100}, {hard:c.ia, soft:a.wb, x:144, y:-100}, {hard:c.ia, soft:a.wb, x:192, y:-100}, {hard:c.ia, soft:a.wb, x:240, y:-100}], "heri2-center":[{hard:c.ia, 
  soft:a.wb, x:144, y:-100}, {hard:c.ia, soft:a.wb, x:192, y:-100}, {hard:c.ia, soft:a.wb, x:240, y:-100}, {hard:c.ia, soft:a.wb, x:288, y:-100}, {hard:c.ia, soft:a.wb, x:336, y:-100}], "heri2-right":[{hard:c.ia, soft:a.wb, x:240, y:-100}, {hard:c.ia, soft:a.wb, x:288, y:-100}, {hard:c.ia, soft:a.wb, x:336, y:-100}, {hard:c.ia, soft:a.wb, x:384, y:-100}, {hard:c.ia, soft:a.wb, x:432, y:-100}], "heri2-5-left":[{hard:c.ia, soft:a.Ha(0), x:48, y:-100}, {hard:c.ia, soft:a.Ha(100), x:96, y:-100}, {hard:c.ia, 
  soft:a.Ha(200), x:144, y:-100}, {hard:c.ia, soft:a.Ha(300), x:192, y:-100}, {hard:c.ia, soft:a.Ha(400), x:240, y:-100}, {hard:c.ia, soft:a.Ha(500), x:48, y:-100}, {hard:c.ia, soft:a.Ha(600), x:96, y:-100}, {hard:c.ia, soft:a.Ha(700), x:144, y:-100}, {hard:c.ia, soft:a.Ha(800), x:192, y:-100}, {hard:c.ia, soft:a.Ha(900), x:240, y:-100}], "heri2-5-center":[{hard:c.ia, soft:a.Ha(0), x:144, y:-100}, {hard:c.ia, soft:a.Ha(100), x:192, y:-100}, {hard:c.ia, soft:a.Ha(200), x:240, y:-100}, {hard:c.ia, 
  soft:a.Ha(300), x:288, y:-100}, {hard:c.ia, soft:a.Ha(400), x:336, y:-100}, {hard:c.ia, soft:a.Ha(500), x:144, y:-100}, {hard:c.ia, soft:a.Ha(600), x:192, y:-100}, {hard:c.ia, soft:a.Ha(700), x:240, y:-100}, {hard:c.ia, soft:a.Ha(800), x:288, y:-100}, {hard:c.ia, soft:a.Ha(900), x:336, y:-100}], "heri2-5-right":[{hard:c.ia, soft:a.Ha(0), x:240, y:-100}, {hard:c.ia, soft:a.Ha(100), x:288, y:-100}, {hard:c.ia, soft:a.Ha(200), x:336, y:-100}, {hard:c.ia, soft:a.Ha(300), x:384, y:-100}, {hard:c.ia, 
  soft:a.Ha(400), x:432, y:-100}, {hard:c.ia, soft:a.Ha(500), x:240, y:-100}, {hard:c.ia, soft:a.Ha(600), x:288, y:-100}, {hard:c.ia, soft:a.Ha(700), x:336, y:-100}, {hard:c.ia, soft:a.Ha(800), x:384, y:-100}, {hard:c.ia, soft:a.Ha(900), x:432, y:-100}], "heri1-4-left":[{hard:c.ia, soft:a.ub, x:48, y:-100}, {hard:c.ia, soft:a.ub, x:96, y:-100}, {hard:c.ia, soft:a.ub, x:144, y:-100}, {hard:c.ia, soft:a.ub, x:192, y:-100}, {hard:c.ia, soft:a.ub, x:240, y:-100}], "heri1-4-center":[{hard:c.ia, soft:a.ub, 
  x:144, y:-100}, {hard:c.ia, soft:a.ub, x:192, y:-100}, {hard:c.ia, soft:a.ub, x:240, y:-100}, {hard:c.ia, soft:a.ub, x:288, y:-100}, {hard:c.ia, soft:a.ub, x:336, y:-100}], "heri1-4-right":[{hard:c.ia, soft:a.ub, x:240, y:-100}, {hard:c.ia, soft:a.ub, x:288, y:-100}, {hard:c.ia, soft:a.ub, x:336, y:-100}, {hard:c.ia, soft:a.ub, x:384, y:-100}, {hard:c.ia, soft:a.ub, x:432, y:-100}], "heri1-4-left2":[{hard:c.ia, soft:a.Kc, x:48, y:-100}, {hard:c.ia, soft:a.Od, x:96, y:-100}, {hard:c.ia, soft:a.Kc, 
  x:144, y:-100}, {hard:c.ia, soft:a.Od, x:192, y:-100}, {hard:c.ia, soft:a.Kc, x:240, y:-100}], "heri1-4-center2":[{hard:c.ia, soft:a.Kc, x:144, y:-100}, {hard:c.ia, soft:a.Od, x:192, y:-100}, {hard:c.ia, soft:a.Kc, x:240, y:-100}, {hard:c.ia, soft:a.Od, x:288, y:-100}, {hard:c.ia, soft:a.Kc, x:336, y:-100}], "heri1-4-right2":[{hard:c.ia, soft:a.Kc, x:240, y:-100}, {hard:c.ia, soft:a.Od, x:288, y:-100}, {hard:c.ia, soft:a.Kc, x:336, y:-100}, {hard:c.ia, soft:a.Od, x:384, y:-100}, {hard:c.ia, soft:a.Kc, 
  x:432, y:-100}], "tankRD-left":[{hard:c.ma, soft:a.xc, x:78, y:-50}, {hard:c.ma, soft:a.xc, x:28, y:-100}, {hard:c.ma, soft:a.xc, x:-22, y:-150}, {hard:c.ma, soft:a.xc, x:-72, y:-200}, {hard:c.ma, soft:a.xc, x:-122, y:-250}], "tankRD-center":[{hard:c.ma, soft:a.xc, x:222, y:-50}, {hard:c.ma, soft:a.xc, x:172, y:-100}, {hard:c.ma, soft:a.xc, x:122, y:-150}, {hard:c.ma, soft:a.xc, x:72, y:-200}, {hard:c.ma, soft:a.xc, x:22, y:-250}], "tankL-top":[{hard:c.ma, soft:a.pe, x:550, y:64}, {hard:c.ma, soft:a.pe, 
  x:620, y:64}, {hard:c.ma, soft:a.pe, x:690, y:64}, {hard:c.ma, soft:a.pe, x:760, y:64}, {hard:c.ma, soft:a.pe, x:830, y:64}], "tank5-left":[{hard:c.ma, soft:a.wa, x:48, y:-70}, {hard:c.ma, soft:a.wa, x:48, y:-140}, {hard:c.ma, soft:a.wa, x:48, y:-210}, {hard:c.ma, soft:a.wa, x:48, y:-280}, {hard:c.ma, soft:a.wa, x:48, y:-350}], "tank5-center":[{hard:c.ma, soft:a.wa, x:240, y:-70}, {hard:c.ma, soft:a.wa, x:240, y:-140}, {hard:c.ma, soft:a.wa, x:240, y:-210}, {hard:c.ma, soft:a.wa, x:240, y:-280}, 
  {hard:c.ma, soft:a.wa, x:240, y:-350}], "tank15-top":[{hard:c.ma, soft:a.wa, x:48, y:-70}, {hard:c.ma, soft:a.wa, x:48, y:-140}, {hard:c.ma, soft:a.wa, x:48, y:-210}, {hard:c.ma, soft:a.wa, x:48, y:-280}, {hard:c.ma, soft:a.wa, x:48, y:-350}, {hard:c.ma, soft:a.wa, x:240, y:-70}, {hard:c.ma, soft:a.wa, x:240, y:-140}, {hard:c.ma, soft:a.wa, x:240, y:-210}, {hard:c.ma, soft:a.wa, x:240, y:-280}, {hard:c.ma, soft:a.wa, x:240, y:-350}, {hard:c.ma, soft:a.wa, x:432, y:-70}, {hard:c.ma, soft:a.wa, x:432, 
  y:-140}, {hard:c.ma, soft:a.wa, x:432, y:-210}, {hard:c.ma, soft:a.wa, x:432, y:-280}, {hard:c.ma, soft:a.wa, x:432, y:-350}], "tank25-top":[{hard:c.ma, soft:a.wa, x:48, y:-70}, {hard:c.ma, soft:a.wa, x:48, y:-140}, {hard:c.ma, soft:a.wa, x:48, y:-210}, {hard:c.ma, soft:a.wa, x:48, y:-280}, {hard:c.ma, soft:a.wa, x:48, y:-350}, {hard:c.ma, soft:a.wa, x:240, y:-70}, {hard:c.ma, soft:a.wa, x:240, y:-140}, {hard:c.ma, soft:a.wa, x:240, y:-210}, {hard:c.ma, soft:a.wa, x:240, y:-280}, {hard:c.ma, soft:a.wa, 
  x:240, y:-350}, {hard:c.ma, soft:a.wa, x:432, y:-70}, {hard:c.ma, soft:a.wa, x:432, y:-140}, {hard:c.ma, soft:a.wa, x:432, y:-210}, {hard:c.ma, soft:a.wa, x:432, y:-280}, {hard:c.ma, soft:a.wa, x:432, y:-350}, {hard:c.ma, soft:a.yc, x:144, y:710}, {hard:c.ma, soft:a.yc, x:144, y:780}, {hard:c.ma, soft:a.yc, x:144, y:850}, {hard:c.ma, soft:a.yc, x:144, y:920}, {hard:c.ma, soft:a.yc, x:144, y:990}, {hard:c.ma, soft:a.yc, x:336, y:710}, {hard:c.ma, soft:a.yc, x:336, y:780}, {hard:c.ma, soft:a.yc, 
  x:336, y:850}, {hard:c.ma, soft:a.yc, x:336, y:920}, {hard:c.ma, soft:a.yc, x:336, y:990}], "bukky-4-r":[{hard:c.Ye, soft:a.Lh, x:480, y:-50}], "bukky-4-l":[{hard:c.Ye, soft:a.Lh, x:0, y:-50}], "bukky-5-r":[{hard:c.Ye, soft:a.Mh, x:480, y:-50}], "bukky-5-l":[{hard:c.Ye, soft:a.Mh, x:0, y:-50}], "cannon-0":[{hard:c.Ra, soft:a.Ub, x:48, y:-100}], "cannon-1":[{hard:c.Ra, soft:a.Ub, x:96, y:-100}], "cannon-2":[{hard:c.Ra, soft:a.Ub, x:144, y:-100}], "cannon-3":[{hard:c.Ra, soft:a.Ub, x:192, y:-100}], 
  "cannon-4":[{hard:c.Ra, soft:a.Ub, x:240, y:-100}], "cannon-5":[{hard:c.Ra, soft:a.Ub, x:288, y:-100}], "cannon-6":[{hard:c.Ra, soft:a.Ub, x:336, y:-100}], "cannon-7":[{hard:c.Ra, soft:a.Ub, x:384, y:-100}], "cannon-8":[{hard:c.Ra, soft:a.Ub, x:432, y:-100}], "cannon-R0":[{hard:c.Ra, soft:a.Ub, x:550, y:128}], "cannon-R1":[{hard:c.Ra, soft:a.Ub, x:550, y:192}], "cannon-R2":[{hard:c.Ra, soft:a.Ub, x:550, y:256}], "yayoi-0":[{hard:c.Ra, soft:a.Vb, x:48, y:-100}], "yayoi-1":[{hard:c.Ra, soft:a.Vb, 
  x:96, y:-100}], "yayoi-2":[{hard:c.Ra, soft:a.Vb, x:144, y:-100}], "yayoi-3":[{hard:c.Ra, soft:a.Vb, x:192, y:-100}], "yayoi-4":[{hard:c.Ra, soft:a.Vb, x:240, y:-100}], "yayoi-5":[{hard:c.Ra, soft:a.Vb, x:288, y:-100}], "yayoi-6":[{hard:c.Ra, soft:a.Vb, x:336, y:-100}], "yayoi-7":[{hard:c.Ra, soft:a.Vb, x:384, y:-100}], "yayoi-8":[{hard:c.Ra, soft:a.Vb, x:432, y:-100}], "yayoi-R0":[{hard:c.Ra, soft:a.Vb, x:550, y:128}], "yayoi-R1":[{hard:c.Ra, soft:a.Vb, x:550, y:192}], "yayoi-R2":[{hard:c.Ra, 
  soft:a.Vb, x:550, y:256}], "tsubomi-0":[{hard:c.ff, soft:a.$e, x:96, y:-100}], "tsubomi-1":[{hard:c.ff, soft:a.$e, x:240, y:-100}], "tsubomi-2":[{hard:c.ff, soft:a.$e, x:384, y:-100}], "tsubomi-R0":[{hard:c.ff, soft:a.$e, x:580, y:128}], "itsuki-0":[{hard:c.eg, soft:a.Wf, x:96, y:-100}], "itsuki-1":[{hard:c.eg, soft:a.Wf, x:240, y:-100}], "itsuki-2":[{hard:c.eg, soft:a.Wf, x:384, y:-100}], "makoto-0":[{hard:c.tc, soft:a.uc, x:48, y:-100}], "makoto-1":[{hard:c.tc, soft:a.uc, x:96, y:-100}], "makoto-2":[{hard:c.tc, 
  soft:a.uc, x:144, y:-100}], "makoto-3":[{hard:c.tc, soft:a.uc, x:192, y:-100}], "makoto-4":[{hard:c.tc, soft:a.uc, x:240, y:-100}], "makoto-5":[{hard:c.tc, soft:a.uc, x:288, y:-100}], "makoto-6":[{hard:c.tc, soft:a.uc, x:336, y:-100}], "makoto-7":[{hard:c.tc, soft:a.uc, x:384, y:-100}], "makoto-8":[{hard:c.tc, soft:a.uc, x:432, y:-100}], "makoto-R0":[{hard:c.tc, soft:a.uc, x:580, y:128}], "karen-3-2":[{hard:c.Vf, soft:a.Uf, x:96, y:-100}], "karen-3-5":[{hard:c.Vf, soft:a.Uf, x:240, y:-100}], "karen-3-8":[{hard:c.Vf, 
  soft:a.Uf, x:384, y:-100}], "fighter-m-0":[{hard:c.Xc, soft:a.pd, x:96, y:-192}], "fighter-m-1":[{hard:c.Xc, soft:a.pd, x:144, y:-192}], "fighter-m-2":[{hard:c.Xc, soft:a.pd, x:192, y:-192}], "fighter-m-3":[{hard:c.Xc, soft:a.pd, x:240, y:-192}], "fighter-m-4":[{hard:c.Xc, soft:a.pd, x:288, y:-192}], "fighter-m-5":[{hard:c.Xc, soft:a.pd, x:336, y:-192}], "fighter-m-6":[{hard:c.Xc, soft:a.pd, x:384, y:-192}], "fighter-m4-0":[{hard:c.Xc, soft:a.Cj, x:96, y:-192}], "tsukikage-r":[{hard:c.Wb, soft:a.rd(700), 
  x:624, y:256}, {hard:c.Wb, soft:a.rd(600), x:720, y:256}, {hard:c.Wb, soft:a.rd(500), x:576, y:320}, {hard:c.Wb, soft:a.rd(400), x:672, y:320}, {hard:c.Wb, soft:a.rd(300), x:768, y:320}, {hard:c.Wb, soft:a.rd(200), x:624, y:384}, {hard:c.Wb, soft:a.rd(100), x:720, y:384}], "tsukikage-l":[{hard:c.Wb, soft:a.qe(700), x:-144, y:384}, {hard:c.Wb, soft:a.qe(600), x:-240, y:384}, {hard:c.Wb, soft:a.qe(500), x:-96, y:320}, {hard:c.Wb, soft:a.qe(400), x:-192, y:320}, {hard:c.Wb, soft:a.qe(200), x:-144, 
  y:256}], "urara5-0":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.jb, soft:a.jb(0, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-1":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.jb, soft:a.jb(0, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "urara5-2":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.jb, soft:a.jb(1, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-3":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.jb, soft:a.jb(1, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-4":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.jb, soft:a.jb(2, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-5":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.jb, soft:a.jb(2, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-6":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.jb, soft:a.jb(3, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-7":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.jb, soft:a.jb(3, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "milk5-0":[{hard:c.vc, soft:a.wc(2E3), x:384, y:-256}, {hard:c.vc, soft:a.wc(1500), x:312, y:-224}, {hard:c.vc, soft:a.wc(1E3), x:240, y:-192}, {hard:c.vc, soft:a.wc(500), x:168, y:-160}, {hard:c.vc, soft:a.wc(0), x:96, y:-128}], "milk5-1":[{hard:c.vc, soft:a.wc(2E3), x:96, y:-256}, {hard:c.vc, soft:a.wc(1500), x:168, y:-224}, {hard:c.vc, soft:a.wc(1E3), x:240, y:-192}, {hard:c.vc, soft:a.wc(500), x:312, y:-160}, {hard:c.vc, soft:a.wc(0), x:384, y:-128}], "ako5-0":[{hard:c.sb, soft:a.tb(240, 
  128, 96, 256), x:240, y:-192}, {hard:c.sb, soft:a.tb(384, 256, 240, 128), x:384, y:-192}, {hard:c.sb, soft:a.tb(360, 512, 384, 256), x:360, y:-192}, {hard:c.sb, soft:a.tb(120, 512, 360, 512), x:120, y:-192}, {hard:c.sb, soft:a.tb(96, 256, 120, 512), x:96, y:-192}], "ako5-1":[{hard:c.sb, soft:a.tb(240, 128, 384, 256), x:240, y:-192}, {hard:c.sb, soft:a.tb(384, 256, 360, 512), x:384, y:-192}, {hard:c.sb, soft:a.tb(360, 512, 120, 512), x:360, y:-192}, {hard:c.sb, soft:a.tb(120, 512, 96, 256), x:120, 
  y:-192}, {hard:c.sb, soft:a.tb(96, 256, 240, 128), x:96, y:-192}], "ako5-2":[{hard:c.sb, soft:a.tb(240, 128, 120, 512), x:240, y:-192}, {hard:c.sb, soft:a.tb(384, 256, 96, 256), x:384, y:-192}, {hard:c.sb, soft:a.tb(360, 512, 240, 128), x:360, y:-192}, {hard:c.sb, soft:a.tb(120, 512, 384, 256), x:120, y:-192}, {hard:c.sb, soft:a.tb(96, 256, 360, 512), x:96, y:-192}], "komachi-0":[{hard:c.Xb, soft:a.Sh, x:144, y:-192}], "komachi-1":[{hard:c.Xb, soft:a.Sh, x:336, y:-192}], "komachi2-0":[{hard:c.Xb, 
  soft:a.Th, x:144, y:-192}], "komachi2-1":[{hard:c.Xb, soft:a.Th, x:336, y:-192}], "komachi3-0":[{hard:c.Xb, soft:a.Uh, x:144, y:-192}], "komachi3-1":[{hard:c.Xb, soft:a.Uh, x:336, y:-192}], "komachi4-0":[{hard:c.Xb, soft:a.ig, x:144, y:-192}], "komachi4-1":[{hard:c.Xb, soft:a.ig, x:336, y:-192}], "komachi4-2":[{hard:c.Xb, soft:a.ig, x:240, y:-192}], "komachi5-0":[{hard:c.Xb, soft:a.gg, x:144, y:-192}], "komachi5-1":[{hard:c.Xb, soft:a.gg, x:336, y:-192}], "komachi5-2":[{hard:c.Xb, soft:a.gg, x:240, 
  y:-192}], "nozomi4-0":[{hard:c.Rd, soft:a.vg, x:144, y:-192}], "nozomi4-1":[{hard:c.Rd, soft:a.vg, x:240, y:-192}], "nozomi4-2":[{hard:c.Rd, soft:a.vg, x:336, y:-192}], "nozomi5-0":[{hard:c.Rd, soft:a.wg, x:144, y:-256}], "nozomi5-1":[{hard:c.Rd, soft:a.wg, x:240, y:-128}], "nozomi5-2":[{hard:c.Rd, soft:a.wg, x:336, y:-256}], "mktn5-0":[{hard:c.ne, soft:a.ne(0.6), x:624, y:128}], "mktn5-1":[{hard:c.ne, soft:a.ne(0.4), x:-144, y:64}], "akane-center":[{hard:c.Wa, soft:a.Wa, x:168, y:256}, {hard:c.Wa, 
  soft:a.Wa, x:192, y:128}, {hard:c.Wa, soft:a.Wa, x:288, y:128}, {hard:c.Wa, soft:a.Wa, x:312, y:256}], "akane-right":[{hard:c.Wa, soft:a.Wa, x:384, y:64}, {hard:c.Wa, soft:a.Wa, x:336, y:160}, {hard:c.Wa, soft:a.Wa, x:384, y:256}], "akane-left":[{hard:c.Wa, soft:a.Wa, x:96, y:64}, {hard:c.Wa, soft:a.Wa, x:144, y:160}, {hard:c.Wa, soft:a.Wa, x:96, y:256}], "nao1-left":[{hard:c.qa, soft:a.yb, x:48, y:-100}, {hard:c.qa, soft:a.yb, x:96, y:-100}, {hard:c.qa, soft:a.yb, x:144, y:-100}, {hard:c.qa, soft:a.yb, 
  x:192, y:-100}, {hard:c.qa, soft:a.yb, x:240, y:-100}], "nao1-right":[{hard:c.qa, soft:a.yb, x:240, y:-100}, {hard:c.qa, soft:a.yb, x:288, y:-100}, {hard:c.qa, soft:a.yb, x:336, y:-100}, {hard:c.qa, soft:a.yb, x:384, y:-100}, {hard:c.qa, soft:a.yb, x:432, y:-100}], "nao1-center":[{hard:c.qa, soft:a.yb, x:144, y:-100}, {hard:c.qa, soft:a.yb, x:192, y:-100}, {hard:c.qa, soft:a.yb, x:240, y:-100}, {hard:c.qa, soft:a.yb, x:288, y:-100}, {hard:c.qa, soft:a.yb, x:336, y:-100}], "nao2-left":[{hard:c.qa, 
  soft:a.zb, x:48, y:-100}, {hard:c.qa, soft:a.zb, x:96, y:-100}, {hard:c.qa, soft:a.zb, x:144, y:-100}, {hard:c.qa, soft:a.zb, x:192, y:-100}, {hard:c.qa, soft:a.zb, x:240, y:-100}], "nao2-right":[{hard:c.qa, soft:a.zb, x:240, y:-100}, {hard:c.qa, soft:a.zb, x:288, y:-100}, {hard:c.qa, soft:a.zb, x:336, y:-100}, {hard:c.qa, soft:a.zb, x:384, y:-100}, {hard:c.qa, soft:a.zb, x:432, y:-100}], "nao2-center":[{hard:c.qa, soft:a.zb, x:144, y:-100}, {hard:c.qa, soft:a.zb, x:192, y:-100}, {hard:c.qa, soft:a.zb, 
  x:240, y:-100}, {hard:c.qa, soft:a.zb, x:288, y:-100}, {hard:c.qa, soft:a.zb, x:336, y:-100}], "nao3-left":[{hard:c.qa, soft:a.Ab, x:48, y:-100}, {hard:c.qa, soft:a.Ab, x:96, y:-100}, {hard:c.qa, soft:a.Ab, x:144, y:-100}, {hard:c.qa, soft:a.Ab, x:192, y:-100}, {hard:c.qa, soft:a.Ab, x:240, y:-100}], "nao3-right":[{hard:c.qa, soft:a.Ab, x:240, y:-100}, {hard:c.qa, soft:a.Ab, x:288, y:-100}, {hard:c.qa, soft:a.Ab, x:336, y:-100}, {hard:c.qa, soft:a.Ab, x:384, y:-100}, {hard:c.qa, soft:a.Ab, x:432, 
  y:-100}], "nao3-center":[{hard:c.qa, soft:a.Ab, x:144, y:-100}, {hard:c.qa, soft:a.Ab, x:192, y:-100}, {hard:c.qa, soft:a.Ab, x:240, y:-100}, {hard:c.qa, soft:a.Ab, x:288, y:-100}, {hard:c.qa, soft:a.Ab, x:336, y:-100}], "reika1-left":[{hard:c.Cb, soft:a.fc, x:-48, y:-64}, {hard:c.Cb, soft:a.fc, x:-72, y:-128}, {hard:c.Cb, soft:a.fc, x:-96, y:-64}, {hard:c.Cb, soft:a.fc, x:-120, y:-128}, {hard:c.Cb, soft:a.fc, x:-144, y:-64}, {hard:c.Cb, soft:a.fc, x:-168, y:-128}], "reika1-right":[{hard:c.Cb, 
  soft:a.fc, x:528, y:-64}, {hard:c.Cb, soft:a.fc, x:552, y:-128}, {hard:c.Cb, soft:a.fc, x:576, y:-64}, {hard:c.Cb, soft:a.fc, x:600, y:-128}, {hard:c.Cb, soft:a.fc, x:624, y:-64}, {hard:c.Cb, soft:a.fc, x:648, y:-128}], "madoka-0":[{hard:c.Pc, soft:a.Pc, x:144, y:-128}], "madoka-1":[{hard:c.Pc, soft:a.Pc, x:336, y:-128}], "madoka-2":[{hard:c.Pc, soft:a.Pc, x:240, y:-128}], "miyuki-1":[{hard:c.Ed, soft:a.Ed, x:-256, y:140}], "miyuki-2":[{hard:c.Ed, soft:a.Ed, x:736, y:60}], alice:[{hard:c.Sf, soft:a.Sf, 
  x:240, y:-64}], erika:[{hard:c.me, soft:a.me, x:240, y:-100}], yukishiro:[{hard:c.cg, soft:a.cg, x:240, y:-100}], misumi:[{hard:c.rg, soft:[a.Dj, a.sg, a.tg], x:240, y:-100, boss:k}], mai:[{hard:c.ng, soft:a.ng, x:780, y:128}], hyuga:[{hard:c.Ej, soft:[a.yg, a.zg, a.Ag], x:240, y:-100, boss:k}], higashi:[{hard:c.Bg, soft:a.Bg, x:240, y:-100}], momozono:[{hard:c.Aj, soft:[a.kg, a.lg, a.mg], x:240, y:-100, boss:k}], rikka:[{hard:c.xg, soft:a.xg, x:240, y:-100}], mana:[{hard:c.Bj, soft:[a.og, a.pg, 
  a.qg], x:240, y:-100, boss:k}], kanade:[{hard:c.zj, soft:a.fg, x:432, y:-448}], hibiki:[{hard:c.yj, soft:[a.Zf, a.$f, a.ag], x:240, y:-100, boss:k}]}
})();
(function() {
  function c(a, c, d, f) {
    return b.action([f(a), b.repeat(d + "-1", [f(b.speed(c, "sequence"))])])
  }
  function a(a, c, d, f, g, j, m) {
    return b.action([b.fire(b.direction(c, "absolute"), f, g || w, j, m), b.repeat(a + "-1", [b.fire(b.direction("((" + d + ")-(" + c + "))/(" + a + "-1)", "sequence"), f, g || w, j, m)])])
  }
  function f(a, b, c, f, g) {
    return function(j) {
      return d(a, b, c, j, f, g, i, i)
    }
  }
  function d(a, c, d, f, g, j, m, n) {
    return b.action([b.fire(b.direction(c), f, g || w, j, m, n), b.repeat(a + "+($ex*2)-1", [b.fire(b.direction("((" + d + ")-(" + c + "))/(" + a + "+($ex*2)-1)", "sequence"), f, g || w, j, m, n)])])
  }
  function j(a) {
    return b.fire(b.direction(0), a || n, D)
  }
  function p(a) {
    return b.fire(b.direction(0), a || n, w)
  }
  function r(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function A(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function n(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function q(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function m(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function K(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function g(a) {
    return b.wait(a + "*(1-$rank)*$hyperOff")
  }
  function P(a) {
    return b.Ga(a, {frame:1, Lb:k})
  }
  function V(a) {
    return b.Ga(a, {frame:0, Lb:k})
  }
  function O(a) {
    return b.Ga(a, {frame:3, Me:k})
  }
  function N(a) {
    return b.Ga(a, {frame:2, Me:k})
  }
  function G(a) {
    return b.Ga(a, {frame:6, lc:k})
  }
  function E(a) {
    return b.Ga(a, {frame:7, lc:k})
  }
  function v(a) {
    return b.Ga(a, {visible:t})
  }
  function F(a) {
    return b.Ga(a, {frame:4, lc:k})
  }
  function I(a) {
    return b.Ga(a, {frame:3})
  }
  function w(a) {
    return b.Ga(a, {frame:1})
  }
  function u(a) {
    return b.Ga(a, {frame:2})
  }
  function D(a) {
    return b.Ga(a, {frame:0})
  }
  function H(a) {
    return b.Ga(a, {frame:3, lc:k})
  }
  function z(a) {
    return b.Ga(a, {frame:1, lc:k})
  }
  function B(a) {
    return b.Ga(a, {frame:2, lc:k})
  }
  function C(a) {
    return b.Ga(a, {frame:0, lc:k})
  }
  gls2.fa = {};
  var b = L.Ja;
  gls2.fa["basic0-0"] = new L.ha({top:b.action([p])});
  gls2.fa["basic0-1"] = new L.ha({top:b.action([c(s, -0.01, 8, f(3, -15, 15))])});
  gls2.fa["basic1-0"] = new L.ha({top:b.action([b.repeat(999, [g(40), p(n)])])});
  gls2.fa["basic1-1"] = new L.ha({top:b.action([b.repeat(999, [g(20), p(n)])])});
  gls2.fa["basic1-2"] = new L.ha({top:b.action([g("10+$rand*100"), d(3, -20, 20, n)])});
  gls2.fa["basic1-3"] = new L.ha({top:b.action([b.repeat(999, [g("20+$rand*80"), d(3, -20, 20, n)])])});
  gls2.fa["basic2-0"] = new L.ha({top:b.action([b.repeat(999, [g(50), p(n)])])});
  gls2.fa["basic3-0"] = new L.ha({top:b.action([b.wait(20), b.repeat(999, [g(100), c(n, 0.1, 3, j)])])});
  gls2.fa["basic3-1"] = new L.ha({top:b.action([b.wait(20), b.repeat(999, [g(40), c(n, 0.1, 3, j)])])});
  gls2.fa["bukky-4-0"] = new L.ha({top0:b.action([g(30), b.repeat(999, [b.fire(b.direction(-40), n, B), b.repeat(3, [b.fire(b.direction(20, "sequence"), n, B), b.fire(b.direction(20, "sequence"), n, B), b.fire(b.direction(20, "sequence"), n, B), b.fire(b.direction(20, "sequence"), n, B), b.fire(b.direction(-80, "sequence"), n, B), g(5)]), g(70)])]), top1:b.action([g(20), b.fire(b.direction(180, "absolute"), q, z), b.repeat(999, [b.fire(b.direction(15, "sequence"), q, z), b.fire(b.direction(15, "sequence"), 
  q, z), b.fire(b.direction(15, "sequence"), q, z), b.fire(b.direction(15, "sequence"), q, z), b.fire(b.direction(15, "sequence"), q, z), b.fire(b.direction(15, "sequence"), q, z), b.fire(b.direction(15, "sequence"), q, z), b.fire(b.direction(15, "sequence"), q, z), b.fire(b.direction(15, "sequence"), q, z), b.fire(b.direction(-90, "sequence"), q, z), g(5)])])});
  gls2.fa["bukky-5-0"] = new L.ha({top0:b.action([g(30), b.repeat(999, [b.fire(b.direction(-40), n, B), b.repeat(3, [b.fire(b.direction(10, "sequence"), n, B), b.fire(b.direction(10, "sequence"), n, B), b.fire(b.direction(10, "sequence"), n, B), b.fire(b.direction(10, "sequence"), n, B), b.fire(b.direction(10, "sequence"), n, B), b.fire(b.direction(10, "sequence"), n, B), b.fire(b.direction(10, "sequence"), n, B), b.fire(b.direction(10, "sequence"), n, B), b.fire(b.direction(-80, "sequence"), n, 
  B), g(5)]), g(70)])]), top1:b.action([g(20), b.fire(b.direction(180, "absolute"), q, z), b.repeat(999, [b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), 
  b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(7.5, "sequence"), q, z), b.fire(b.direction(-90, "sequence"), q, z), g(5)])])});
  gls2.fa["cannon2-0"] = new L.ha({top0:b.action([b.repeat(999, [g(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", q), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", q), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", q), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", q), g(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", n), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", n), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", n), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", n)])]), top1:b.action([b.repeat(999, [b.fire(b.direction("  0+$loop.index*10", "absolute"), m, F), b.fire(b.direction(" 90+$loop.index*10", "absolute"), m, F), b.fire(b.direction("180+$loop.index*10", "absolute"), m, F), b.fire(b.direction("270+$loop.index*10", "absolute"), m, F), b.fire(b.direction("  0-$loop.index*10", "absolute"), m, F), b.fire(b.direction(" 90-$loop.index*10", "absolute"), m, F), b.fire(b.direction("180-$loop.index*10", 
  "absolute"), m, F), b.fire(b.direction("270-$loop.index*10", "absolute"), m, F), g(10)])]), top2:b.action([b.repeat(999, [g(43), d(30, 0, 348, n, D)])])});
  gls2.fa["cannon2-3"] = new L.ha({top0:b.action([b.repeat(999, [b.sa("d", "$loop.index*-6"), b.repeat(9, [b.fire(b.direction(36, "sequence"), b.speed(1), v(b.la("ivs0", "$d")))]), g(10), b.fire(b.direction(39, "sequence"), b.speed(1), v(b.la("ivs0", "$d")))])]), top1:b.action([b.repeat(999, [b.sa("d", "($loop.index)*+12"), b.repeat(12, [b.fire(b.direction(360 / 13, "sequence"), b.speed(1), v(b.la("ivs1", "$d")))]), g(10), b.fire(b.direction(360 / 13 - 4, "sequence"), b.speed(1), v(b.la("ivs1", "$d")))])]), 
  ivs0:b.action([b.wait(5), b.fire(b.direction("$1", "relative"), q, D), b.La()]), ivs1:b.action([b.wait(10), b.fire(b.direction("$1-5", "relative"), q, E), b.fire(b.direction("$1+5", "relative"), q, G), b.La()])});
  gls2.fa["cannon3-0"] = new L.ha({top0:b.action([b.repeat(999, [g(80), c(q, 0.01, 5, f(5, -30, 30, D, b.offsetX(-60))), c(q, 0.01, 5, f(5, -30, 30, D)), c(q, 0.01, 5, f(5, -30, 30, D, b.offsetX(60)))])])});
  gls2.fa["cannon4-0"] = new L.ha({top0:b.action([g(20), b.repeat(999, [b.fire(q, B), b.repeat(8, [g(10), b.sa("way", "$loop.count+1"), b.fire(b.direction("-12/2 - 12*($way-2)", "sequence"), q, B), b.repeat("$way-1", [b.fire(b.direction(12, "sequence"), q, B)])]), g(120)])])});
  gls2.fa["cannon5-0"] = new L.ha({top0:b.action([b.repeat(999, [b.fire(b.direction(-60), r, v(b.la("b"))), b.repeat(11, [g(5), b.fire(b.direction(10, "sequence"), r, v(b.la("b")))]), g(60)])]), b:b.action([b.wait(5), b.ye(b.speed(0), 0), c(q, 0.1, 5, function(a) {
    return b.fire(b.direction(0, "relative"), a, w)
  }), b.La])});
  gls2.fa["yuri-4"] = new L.ha({top:b.action([g(60), b.repeat(7, [a(7, 120, 240, m, D), g(8)])])});
  gls2.fa["kurokawa-1"] = new L.ha({top0:b.action([b.repeat(999, [c(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, b.offsetX(-45), b.pa(k))
  }), c(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, b.offsetX(45), b.pa(k))
  }), g(90)])]), top1:b.action([b.repeat(999, [b.fire(b.direction(0), n, H, b.offsetX(-45), b.pa(k)), g(45), b.fire(b.direction(0), n, H, b.offsetX(45), b.pa(k)), g(45)])])});
  gls2.fa["milk-5"] = new L.ha({top0:b.action([b.repeat(999, [d(5, -90, 90, n, I, b.offsetX(-45)), b.wait(27), d(5, -90, 90, n, I, b.offsetX(45)), g(120)])]), top1:b.action([b.repeat(999, [g(30), d(6, -90, 90, s, B, b.offsetX(-45)), b.wait(21), d(6, -90, 90, s, B, b.offsetX(45)), g(90)])]), top2:b.action([b.repeat(999, [g(55), d(13, -90, 90, m, F, b.offsetX(-45)), b.wait(20), d(13, -90, 90, m, F, b.offsetX(45)), g(21)])])});
  gls2.fa["ako-5"] = new L.ha({top:b.action([b.repeat(8, [d(3, -20, 20, s, w), g(2)])])});
  gls2.fa["kurokawa-4"] = new L.ha({top0:b.action([b.repeat(999, [c(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, b.offsetX(-45), b.pa(k))
  }), c(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, b.offsetX(45), b.pa(k))
  }), g(90)])]), top1:b.action([b.repeat(999, [b.fire(b.direction(0), n, H, b.offsetX(-45), b.pa(k)), g(45), b.fire(b.direction(0), n, H, b.offsetX(45), b.pa(k)), g(45)])])});
  gls2.fa["komachi-1"] = new L.ha({top0:b.action([b.repeat(20, [b.fire(b.direction(210, "absolute"), m(1), w, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(-40)), b.repeat(57, [g(8), b.fire(b.direction(-720 / 57, "sequence"), m(1), w, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(-40))])])]), top1:b.action([b.repeat(20, 
  [b.fire(b.direction(-210, "absolute"), m(1), w, b.offsetX(40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(40)), b.repeat(57, [g(8), b.fire(b.direction(720 / 57, "sequence"), m(1), w, b.offsetX(40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(40))])])]), top2:b.action([b.repeat(70, [b.fire(b.direction(0), n(0), C, b.offsetX(-110), b.pa(k)), b.repeat(6, 
  [b.wait(1), b.fire(b.direction(0, "sequence"), n(0), C, b.offsetX(-110), b.pa(k))]), g(10), b.fire(b.direction(0), n(0), C, b.offsetX(110), b.pa(k)), b.repeat(6, [b.wait(1), b.fire(b.direction(0, "sequence"), n(0), C, b.offsetX(110), b.pa(k))]), g(10)])])});
  gls2.fa["komachi-2"] = new L.ha({top0:b.action([b.repeat(999, [c(n, -0.01, 4, function(a) {
    return b.action([d(4, -45, 45, a, u, b.offsetX(-45), b.pa(k)), g(4)])
  }), c(n, -0.01, 4, function(a) {
    return b.action([g(4), d(4, -45, 45, a, u, b.offsetX(45), b.pa(k))])
  }), g(90)])]), top1:b.action([b.repeat(999, [g(45), c(q, 0.01, 22, function(a) {
    return b.action([b.repeat("1 + $rand*6", [b.fire(b.direction("-5+$rand*10"), a, z)]), g(1)])
  }), g(180)])])});
  gls2.fa["komachi-3"] = new L.ha({top0:b.action([b.repeat(999, [c(n, -0.01, 4, function(a) {
    return b.action([d(8, -60, 60, a, u, b.offsetX(-45), b.pa(k)), g(4)])
  }), c(n, -0.01, 4, function(a) {
    return b.action([g(4), d(8, -60, 60, a, u, b.offsetX(45), b.pa(k))])
  }), g(90)])]), top1:b.action([b.repeat(999, [g(45), c(q, 0.01, 22, function(a) {
    return b.action([b.repeat("1 + $rand*6", [b.fire(b.direction("-5+$rand*10"), a, z)]), g(1)])
  }), g(180)])])});
  gls2.fa["komachi-4"] = new L.ha({top0:b.action([b.repeat(999, [b.repeat(4, [b.fire(b.direction("220+-1+$rand*2", "absolute"), n, I, b.offsetX(-45)), b.fire(b.direction("180+-1+$rand*2", "absolute"), n, I, b.offsetX(-45)), b.fire(b.direction("180+-1+$rand*2", "absolute"), n, I, b.offsetX(45)), b.fire(b.direction("140+-1+$rand*2", "absolute"), n, I, b.offsetX(45)), g(4)]), g(60)])]), top1:b.action([b.repeat(70, [b.fire(b.direction(0), n(5), C, b.offsetX(-110), b.pa(k)), b.repeat(12, [b.wait(1), b.fire(b.direction(0, 
  "sequence"), n(5), C, b.offsetX(-110), b.pa(k))]), g(30), b.fire(b.direction(0), n(5), C, b.offsetX(110), b.pa(k)), b.repeat(12, [b.wait(1), b.fire(b.direction(0, "sequence"), n(5), C, b.offsetX(110), b.pa(k))]), g(30)])])});
  gls2.fa["komachi-5"] = new L.ha({top0:b.action([b.repeat(999, [b.fire(b.direction(210, "absolute"), m(1), w, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(-40)), b.repeat(60, [g(4), b.fire(b.direction(-6, "sequence"), m(1), w, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(-40))])])]), top1:b.action([b.repeat(999, [b.fire(b.direction(-210, 
  "absolute"), m(1), w, b.offsetX(40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(40)), b.repeat(60, [g(4), b.fire(b.direction(6, "sequence"), m(1), w, b.offsetX(40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(40)), b.fire(b.direction(120, "sequence"), m(1), w, b.offsetX(40))])])]), top2:b.action([b.repeat(999, [b.fire(b.direction(-10), s(0), C, b.offsetX(-110), b.pa(k)), b.fire(b.direction(10, "sequence"), 
  s(0), C, b.offsetX(-110), b.pa(k)), b.fire(b.direction(10, "sequence"), s(0), C, b.offsetX(-110), b.pa(k)), b.repeat(30, [b.wait(1), b.fire(b.direction(-20, "sequence"), s(0), C, b.offsetX(-110), b.pa(k)), b.fire(b.direction(10, "sequence"), s(0), C, b.offsetX(-110), b.pa(k)), b.fire(b.direction(10, "sequence"), s(0), C, b.offsetX(-110), b.pa(k))]), g(5), b.fire(b.direction(-10), s(0), C, b.offsetX(110), b.pa(k)), b.fire(b.direction(10, "sequence"), s(0), C, b.offsetX(110), b.pa(k)), b.fire(b.direction(10, 
  "sequence"), s(0), C, b.offsetX(110), b.pa(k)), b.repeat(30, [b.wait(1), b.fire(b.direction(-20, "sequence"), s(0), C, b.offsetX(110), b.pa(k)), b.fire(b.direction(10, "sequence"), s(0), C, b.offsetX(110), b.pa(k)), b.fire(b.direction(10, "sequence"), s(0), C, b.offsetX(110), b.pa(k))]), g(5)])])});
  gls2.fa["nozomi-4"] = new L.ha({top0:b.action([b.wait(60), b.repeat(999, [b.repeat(12, [b.sa("c", "2+$loop.index"), d("$c", "-4-($c-2)*4", "4+($c-2)*4", K("(560-$c*40)*0.03"), H, b.offsetY(-50))]), g(150)])]), top1:b.action([b.wait(20), b.repeat(999, [b.fire(b.direction(40), v(b.la("noop"))), c(n, 0.03, 16, function(a) {
    return b.action([b.fire(b.direction(-5, "sequence"), a, D, b.offsetX(-50)), b.wait(3)])
  }), g(90), b.fire(b.direction(-40), v(b.la("noop"))), c(n, 0.03, 16, function(a) {
    return b.action([b.fire(b.direction(5, "sequence"), a, D, b.offsetX(50)), b.wait(3)])
  }), g(90)])]), noop:b.action([b.wait(1), b.La])});
  gls2.fa["nozomi-5"] = new L.ha({top0:b.action([b.wait(60), b.repeat(999, [b.repeat(6, [b.sa("c", "2+$loop.index"), d("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", K("(560-$c*40)*0.02"), H, b.offsetY(-50)), d("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", K("(560-$c*40)*0.02"), H, b.offsetY(-50)), d("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", K("(560-$c*40)*0.02"), H, b.offsetY(-50)), d("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", K("(560-$c*40)*0.02"), H, b.offsetY(-50))]), g(150), b.repeat(6, [b.sa("c", "2+$loop.index"), 
  d("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", K("(560-$c*40)*0.02"), B, b.offsetY(-50)), d("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", K("(560-$c*40)*0.02"), B, b.offsetY(-50)), d("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", K("(560-$c*40)*0.02"), B, b.offsetY(-50)), d("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", K("(560-$c*40)*0.02"), B, b.offsetY(-50)), d("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", K("(560-$c*40)*0.02"), B, b.offsetY(-50))]), g(150)])]), top1:b.action([b.wait(20), b.repeat(999, [b.fire(b.direction(5), 
  v(b.la("noop"))), c(n, 0.06, 15, function(a) {
    return b.action([b.fire(b.direction(-1, "sequence"), a, D, b.offsetX(-50)), g(3)])
  }), b.fire(b.direction(-5), v(b.la("noop"))), c(n, 0.06, 15, function(a) {
    return b.action([b.fire(b.direction(1, "sequence"), a, D, b.offsetX(50)), g(3)])
  })])]), noop:b.action([b.wait(1), b.La])});
  gls2.fa["mktn-5"] = new L.ha({top0:b.action([b.repeat(999, [b.fire(b.direction(0), m, v(b.la("noop"))), b.repeat(20, [b.fire(b.direction(0.5, "sequence"), b.speed(0.08, "sequence"), u), b.repeat(12, [b.fire(b.direction(30, "sequence"), b.speed(0, "sequence"), u)]), g(6)]), b.fire(b.direction(0), m, v(b.la("noop"))), b.repeat(20, [b.fire(b.direction(-0.5, "sequence"), b.speed(0.08, "sequence"), u), b.repeat(12, [b.fire(b.direction(30, "sequence"), b.speed(0, "sequence"), u)]), g(6)]), g(60)])]), 
  top1:b.action([b.repeat(999, [b.fire(b.direction(0, "absolute"), n, v(b.la("noop"))), b.repeat(5, [b.fire(b.direction(-10, "sequence"), b.speed(0.05, "sequence"), F), b.repeat(12, [b.fire(b.direction(30, "sequence"), b.speed(0, "sequence"), F)]), g(5)]), b.fire(b.direction(0, "absolute"), n, v(b.la("noop"))), b.repeat(5, [b.fire(b.direction(10, "sequence"), b.speed(0.05, "sequence"), F), b.repeat(12, [b.fire(b.direction(30, "sequence"), b.speed(0, "sequence"), F)]), g(5)]), g(40)])]), top2:b.action([b.repeat(999, 
  [b.sa("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"), d(5, -30, 30, n(7), N, b.offsetX("$gun"), b.offsetY(20)), b.sa("gun", "[-40, -120, 0, 120, 80, 40, -80][$loop.index%7]"), d(5, -30, 30, n(7), N, b.offsetX("$gun"), b.offsetY(20)), g(21)])]), noop:b.action([b.wait(1), b.La])});
  gls2.fa.akane = new L.ha({top:b.action([b.wait("40"), b.repeat(999, [b.repeat(5, [g(60), d(1, 1, 1, m, u, b.offsetX(-16), b.offsetY(6), b.pa(k)), d(1, 1, 1, m, u, b.offsetX(16), b.offsetY(6), b.pa(k))]), g(120)])])});
  gls2.fa["nao-1"] = new L.ha({top:b.action([b.repeat(999, [g(30), b.fire(b.direction(0), s, H)])])});
  gls2.fa["nao-2"] = new L.ha({top:b.action([b.repeat(999, [g(30), d(2, -5, 5, s, H, b.offsetX(0), b.offsetY(0), b.pa(k))])])});
  gls2.fa["nao-3"] = new L.ha({top:b.action([b.repeat(999, [g(30), d(2, -1, 1, s, H, b.offsetX(0), b.offsetY(0), b.pa(k))])])});
  gls2.fa.reika = new L.ha({top:b.action([b.repeat(999, [g(60), b.fire(b.direction(0), n, B)])])});
  gls2.fa.aguri = new L.ha({top0:b.action([b.repeat(999, [b.repeat(3, [c(n, 0.0010, 4, function(a) {
    return b.action([d(3, -30, 30, a, B, b.offsetX(-32), b.offsetY(-20)), d(2, -30, 30, a, B, b.offsetX(-120), b.offsetY(10)), d(2, -30, 30, a, B, b.offsetX(-80), b.offsetY(12)), d(3, -30, 30, a, B, b.offsetX(32), b.offsetY(-20)), d(2, -30, 30, a, B, b.offsetX(120), b.offsetY(10)), d(2, -30, 30, a, B, b.offsetX(80), b.offsetY(12)), b.wait(1)])
  }), g(10)]), g(120)])]), top1:b.action([b.repeat(999, [b.repeat(3, [d(3, -15, 15, s, z, b.offsetX(0), b.offsetY(0)), d(3, -15, 15, s, z, b.offsetX(0), b.offsetY(30)), d(3, -15, 15, s, z, b.offsetX(-10), b.offsetY(-10)), d(3, -15, 15, s, z, b.offsetX(-20), b.offsetY(0)), d(3, -15, 15, s, z, b.offsetX(-20), b.offsetY(10)), d(3, -15, 15, s, z, b.offsetX(-10), b.offsetY(20)), d(3, -15, 15, s, z, b.offsetX(10), b.offsetY(-10)), d(3, -15, 15, s, z, b.offsetX(20), b.offsetY(0)), d(3, -15, 15, s, z, b.offsetX(20), 
  b.offsetY(10)), d(3, -15, 15, s, z, b.offsetX(10), b.offsetY(20)), g(40)]), g(180)])])});
  gls2.fa.miyuki = new L.ha({top0:b.action([b.wait(300), b.repeat(10, [b.fire(b.direction(210, "absolute"), n, P, b.offsetX(-64), b.offsetY(32)), g(2), b.fire(b.direction(200, "absolute"), n, P, b.offsetX(-64), b.offsetY(32)), g(2), b.fire(b.direction(190, "absolute"), n, P, b.offsetX(-32), b.offsetY(32)), g(2), b.fire(b.direction(180, "absolute"), n, P, b.offsetX(0), b.offsetY(32)), g(2), b.fire(b.direction(170, "absolute"), n, P, b.offsetX(32), b.offsetY(32)), g(2), b.fire(b.direction(160, "absolute"), 
  n, P, b.offsetX(64), b.offsetY(32)), g(2), b.fire(b.direction(150, "absolute"), n, P, b.offsetX(64), b.offsetY(32)), g(180)])]), top1:b.action([b.wait("40"), b.repeat(999, [g(30), d(3, -45, 45, m, G, b.offsetX(-64), b.offsetY(16)), d(3, -45, 45, m, G, b.offsetX(0), b.offsetY(16)), d(3, -45, 45, m, G, b.offsetX(16), b.offsetY(16)), d(3, -45, 45, m, G, b.offsetX(32), b.offsetY(16)), c(m, 0.0010, 5, function(a) {
    return b.action([d(3, "-45", "+45", a, G, b.offsetX(0), b.offsetY(0))])
  })])])});
  gls2.fa.alice = new L.ha({top0:b.action([b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(999, [b.fire(b.direction(7, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), g(10)])]), top1:b.action([b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(999, [b.fire(b.direction(11, 
  "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), g(10)])]), top2:b.action([b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(999, [b.fire(b.direction(17, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), 
  b.fire(b.direction(90, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), g(10)])]), top3:b.action([b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(999, [b.fire(b.direction(-11, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, G, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, 
  G, b.offsetX(0), b.offsetY(-16)), g(10)])]), top4:b.action([b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(999, [b.fire(b.direction(-9, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), g(10)])]), top4:b.action([b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), 
  b.repeat(999, [b.fire(b.direction(-5, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), b.fire(b.direction(90, "sequence"), m, E, b.offsetX(0), b.offsetY(-16)), g(10)])])});
  gls2.fa["aliceLeaf-1"] = new L.ha({top0:b.action([b.repeat(999, [b.repeat(1, [d(3, -10, 10, s, z, b.offsetX(0), b.offsetY(0)), d(3, -10, 10, s, C, b.offsetX(10), b.offsetY(-10)), d(3, -10, 10, s, C, b.offsetX(10), b.offsetY(-20)), d(3, -10, 10, s, C, b.offsetX(20), b.offsetY(-10)), d(3, -10, 10, s, C, b.offsetX(10), b.offsetY(10)), d(3, -10, 10, s, C, b.offsetX(10), b.offsetY(20)), d(3, -10, 10, s, C, b.offsetX(20), b.offsetY(10)), d(3, -10, 10, s, C, b.offsetX(-10), b.offsetY(-10)), d(3, -10, 
  10, s, C, b.offsetX(-10), b.offsetY(-20)), d(3, -10, 10, s, C, b.offsetX(-20), b.offsetY(-10)), d(3, -10, 10, s, C, b.offsetX(-10), b.offsetY(10)), d(3, -10, 10, s, C, b.offsetX(-10), b.offsetY(20)), d(3, -10, 10, s, C, b.offsetX(-20), b.offsetY(10)), g(20)]), g(60)])])});
  gls2.fa["aliceLeaf-2"] = new L.ha({top0:b.action([b.wait(30), b.repeat(999, [b.repeat(1, [d(3, -10, 10, s, C, b.offsetX(0), b.offsetY(0)), d(3, -10, 10, s, z, b.offsetX(10), b.offsetY(-10)), d(3, -10, 10, s, z, b.offsetX(10), b.offsetY(-20)), d(3, -10, 10, s, z, b.offsetX(20), b.offsetY(-10)), d(3, -10, 10, s, z, b.offsetX(10), b.offsetY(10)), d(3, -10, 10, s, z, b.offsetX(10), b.offsetY(20)), d(3, -10, 10, s, z, b.offsetX(20), b.offsetY(10)), d(3, -10, 10, s, z, b.offsetX(-10), b.offsetY(-10)), 
  d(3, -10, 10, s, z, b.offsetX(-10), b.offsetY(-20)), d(3, -10, 10, s, z, b.offsetX(-20), b.offsetY(-10)), d(3, -10, 10, s, z, b.offsetX(-10), b.offsetY(10)), d(3, -10, 10, s, z, b.offsetX(-10), b.offsetY(20)), d(3, -10, 10, s, z, b.offsetX(-20), b.offsetY(10)), g(20)]), g(60)])])});
  gls2.fa["honoka-1"] = new L.ha({top0:b.action([b.wait(60), b.repeat(10, [d(4, -40, 40, q, F, b.offsetX(0), b.offsetY(30)), g(30), d(5, -40, 40, m, F, b.offsetX(0), b.offsetY(30)), g(30)])]), top1:b.action([b.wait(60), b.repeat(5, [d(2, -2, 2, q(0.6), w), d(3, -3, 3, q(1), w), d(4, -4, 4, q(1.4), w), d(5, -5, 5, q(1.8), w), g(110)])]), top2:b.action([b.repeat(20, [a(12, -10, -170, m, C, b.offsetX(-110), b.offsetY(-70)), g(30)])]), top3:b.action([b.repeat(20, [a(12, 10, 170, m, C, b.offsetX(110), 
  b.offsetY(-70)), g(30)])])});
  gls2.fa["nagisa-1-1"] = new L.ha({top0:b.action([g(90), b.repeat(3, [b.sa("way", "5 + $loop.index*6"), c(n, 0.01, "3 + $loop.index*2", function(a) {
    return b.action([d("$way", -110, 110, a, w, b.offsetX(-190), b.offsetY(-20)), d("$way", -110, 110, a, w, b.offsetX(190), b.offsetY(-20)), b.wait(10)])
  }), g(60)]), g(60)])});
  gls2.fa["nagisa-1-2"] = new L.ha({top0:b.action([b.repeat(12, [d(15, -90, 90, m, w), g(40)])]), top1:b.action([b.repeat(3, [b.repeat(3, [d(5, -65, -55, q, C, b.offsetX(-190), b.offsetY(-20)), d(5, -35, -25, q, C, b.offsetX(-190), b.offsetY(-20)), d(5, -5, 5, q, C, b.offsetX(-190), b.offsetY(-20)), d(5, 25, 35, q, C, b.offsetX(-190), b.offsetY(-20)), d(5, 55, 65, q, C, b.offsetX(-190), b.offsetY(-20)), b.wait(2)]), g(60), b.repeat(3, [d(5, -65, -55, q, C, b.offsetX(190), b.offsetY(-20)), d(5, -35, 
  -25, q, C, b.offsetX(190), b.offsetY(-20)), d(5, -5, 5, q, C, b.offsetX(190), b.offsetY(-20)), d(5, 25, 35, q, C, b.offsetX(190), b.offsetY(-20)), d(5, 55, 65, q, C, b.offsetX(190), b.offsetY(-20)), b.wait(2)]), g(60)])])});
  gls2.fa["nagisa-1-3"] = new L.ha({top0:b.action([g(60), b.repeat(3, [b.fire(b.direction(-60), q, u, b.offsetX(-190), b.offsetY(-20)), b.repeat(20, [g(15), b.fire(b.direction(6, "sequence"), q, u, b.offsetX(-190), b.offsetY(-20))])])]), top1:b.action([g(80), b.repeat(3, [b.fire(b.direction(60), q, u, b.offsetX(190), b.offsetY(-20)), b.repeat(20, [g(15), b.fire(b.direction(-6, "sequence"), q, u, b.offsetX(190), b.offsetY(-20))])])]), top2:b.action([b.repeat(6, [b.repeat(3, [d(5, -60, -40, q, F, b.offsetX(-190), 
  b.offsetY(-20)), d(5, -20, -10, q, F, b.offsetX(-190), b.offsetY(-20)), d(5, 10, 20, q, F, b.offsetX(-190), b.offsetY(-20)), d(5, 40, 60, q, F, b.offsetX(-190), b.offsetY(-20)), b.wait(4)]), g(60), b.repeat(3, [d(5, -60, -40, q, F, b.offsetX(190), b.offsetY(-20)), d(5, -20, -10, q, F, b.offsetX(190), b.offsetY(-20)), d(5, 10, 20, q, F, b.offsetX(190), b.offsetY(-20)), d(5, 40, 60, q, F, b.offsetX(190), b.offsetY(-20)), b.wait(4)]), g(60)])])});
  gls2.fa["nagisa-2-1"] = new L.ha({top0:b.action([g(120), b.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", m, D, b.offsetX(-190), b.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", m, D, b.offsetX(190), b.offsetY(-20)), g(10)])]), top1:b.action([g(120), b.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", q, H), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", q, H), g(12)])])});
  gls2.fa["nagisa-2-2"] = new L.ha({top0:b.action([g(120), b.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", n, H), g(12)])]), top1:b.action([g(120), b.repeat(6, [a(9, 150, 130, m(0.8), w), a(9, 172, 188, m(0.8), w), a(9, 210, 230, m(0.8), w), g(50), a(9, 170, 150, m(0.8), w), a(9, 190, 210, m(0.8), w), g(50)])])});
  gls2.fa["nagisa-2-3"] = new L.ha({top:b.action([g(120), b.repeat(12, [a(23, 0, 360, m, F, b.offsetX(-190), b.offsetY(-20)), a(23, 0, 360, m, F), a(23, 0, 360, m, F, b.offsetX(190), b.offsetY(-20)), g(30)])])});
  gls2.fa["nagisa-3-1"] = new L.ha({top0:b.action([g(50), b.repeat(999, [c(n, 0.0010, 5, function(a) {
    return b.action([d(41, "-180", "+180", a, B, b.offsetX(-190), b.offsetY(-20)), d(41, "-180", "+180", a, B, b.offsetX(190), b.offsetY(-20))])
  }), g(50)])]), top1:b.action([b.repeat(999, [d(2, -2, 0, s, w), g(10), d(2, 0, 2, s, w), g(150)])])});
  gls2.fa["mai-1"] = new L.ha({top0:b.action([g(50), b.repeat(50, [b.sa("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), q, D), b.La]))), b.sa("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), q, D), b.La]))), g(8)])]), top1:b.action([g(50), b.repeat(12, [a(5, -50, 50, r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), q, 
  H), b.La]))), a(5, -230, -130, r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), q, H), b.La]))), g(16), a(6, -50, 50, r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), q, H), b.La]))), a(6, -230, -130, r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), q, H), b.La]))), g(16)])])});
  gls2.fa["mai-2"] = new L.ha({top:b.action([g(50), b.repeat(15, [b.fire(b.direction(-10), B(b.la("fireChild", "$loop.index*10"))), g(8)])]), fireChild:b.action([g("40+$1"), c(q, 0.1, 5, function(a) {
    return b.fire(b.direction(-90, "absolute"), a, u)
  }), b.La])});
  gls2.fa["saki-1-1"] = new L.ha({top:b.action([g(100), b.repeat(3, [b.la("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:b.action([b.sa("way", "$1"), b.repeat("10", [d("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, D), d("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, D), g(12)]), b.repeat("$2", [d(9, -20, 20, s, I)])])});
  gls2.fa["saki-1-2"] = new L.ha({top:b.action([g(100), b.repeat(5, [b.sa("way", "5+$loop.index*2"), b.repeat(6, [b.sa("s", "$loop.index*0.6"), b.action(function() {
    for(var a = [], c = 0;5 > c;c++) {
      a.push(d("$way", -30, 30, n("$s"), H, b.offsetX(-120 + 60 * c)))
    }
    return a
  }())]), g(90)])])});
  gls2.fa["saki-1-3"] = new L.ha({top:b.action([b.sa("dir", "$rand < 0.5 ? -1 : 1"), b.repeat(24, [b.fire(b.direction("120*$dir + $loop.index*10*-$dir"), b.speed(2), H(b.la("seed"))), g(8)]), g(60)]), seed:b.action([b.wait(10), b.ye(b.speed(0), 50), b.wait(90), d(13, 0, 360 - 360 / 13, q, I), b.La])});
  gls2.fa["saki-2-1"] = new L.ha({top0:b.action([g(100), b.repeat(4, [d(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", q, D, b.offsetX(-40)), d(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", q, D, b.offsetX(40)), g(60), d(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", q, D, b.offsetX(-40)), d(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", q, D, b.offsetX(40)), g(60)])]), top1:b.action([g(100), b.repeat(4, [b.repeat(7, [b.sa("o", "$loop.index*20 - 60"), b.fire(b.direction("$o"), 
  A, I), b.repeat(4, [b.sa("w", "$loop.count"), d("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", A("$w*-1.0"), I)])]), g(120)])])});
  gls2.fa["saki-2-2"] = new L.ha({top:b.action([g(60), b.sa("dir", "$rand < 0.5 ? -1 : 1"), b.repeat(12, [b.fire(b.direction("120*$dir + $loop.index*10*-$dir"), b.speed(2), B(b.la("seed"))), g(8), b.fire(b.direction("120*-$dir + $loop.index*10*$dir"), b.speed(2), B(b.la("seed"))), g(8)]), g(60)]), seed:b.action([b.wait(10), b.ye(b.speed(0), "10 + $rand*15"), b.wait(65), c(n, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(-48), a, u)])
  }), c(n, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(-36), a, u)])
  }), c(n, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(-24), a, u)])
  }), c(n, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(-12), a, u)])
  }), c(n, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(0), a, u)])
  }), c(n, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(12), a, u)])
  }), c(n, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(24), a, u)])
  }), c(n, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(36), a, u)])
  }), c(n, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(48), a, u)])
  }), g(2), b.La])});
  gls2.fa["saki-2-3"] = new L.ha({top:b.action([g(60), b.sa("dir", "$rand < 0.5 ? -1 : 1"), b.repeat(24, [b.fire(b.direction("120*$dir + $loop.index*10*-$dir"), b.speed(2), H(b.la("seed"))), g(8), b.fire(b.direction("120*-$dir + $loop.index*10*$dir"), b.speed(2), H(b.la("seed"))), g(8)]), g(60)]), seed:b.action([b.wait(10), b.ye(b.speed(0), "10 + $rand*20"), b.wait(65), c(n, 0.18, 7, function(a) {
    return b.action([b.fire(b.direction(180, "absolute"), a, I)])
  }), g(2), b.La])});
  gls2.fa["saki-3-1"] = new L.ha({top:b.action([b.fire(b.direction(180, "absolute"), K, B(b.la("seed"))), g(60), b.fire(b.direction(180, "absolute"), K, B(b.la("seed")), b.offsetX(-80)), b.fire(b.direction(180, "absolute"), K, B(b.la("seed")), b.offsetX(80)), g(60)]), seed:b.action([b.fire(b.direction(0, "absolute"), n, q, D), b.repeat(999, [b.fire(b.direction(90, "sequence"), q, D), b.fire(b.direction(90, "sequence"), q, D), b.fire(b.direction(90, "sequence"), q, D), g(10), b.fire(b.direction(100, 
  "sequence"), q, D)])])});
  gls2.fa["saki-3-2"] = new L.ha({top:b.action([b.fire(b.direction(180, "absolute"), K, H(b.la("seed"))), g(60), b.fire(b.direction(180, "absolute"), K, H(b.la("seed")), b.offsetX(-80)), b.fire(b.direction(180, "absolute"), K, H(b.la("seed")), b.offsetX(80)), g(60)]), seed:b.action([b.fire(b.direction(0, "absolute"), n, q, w), b.repeat(999, [b.fire(b.direction(90, "sequence"), q, w), b.fire(b.direction(90, "sequence"), q, w), b.fire(b.direction(90, "sequence"), q, w), g(10), b.fire(b.direction(80, 
  "sequence"), q, w)])])});
  gls2.fa["rikka-1"] = new L.ha({top:b.action([b.repeat(5, [b.sa("s", "$loop.index*1.5"), g(30), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), b.offsetX(-90), b.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), b.offsetX(90), b.offsetY(-20)), g(3), d(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, n("$s"), b.offsetX(-90), b.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, n("$s"), b.offsetX(-90), b.offsetY(-20)), d(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, n("$s"), b.offsetX(90), b.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, n("$s"), b.offsetX(90), b.offsetY(-20)), g(3), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), b.offsetX(-90), b.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), b.offsetX(90), b.offsetY(-20))])])});
  gls2.fa["rikka-2"] = new L.ha({top0:b.action([b.repeat(10, [b.fire(B(b.la("snow")), b.offsetX(-90), b.offsetY(-20)), b.fire(B(b.la("snow")), b.offsetX(90), b.offsetY(-20)), g(8)]), g(10)]), top1:b.action([b.repeat(35, [b.sa("dir", "$loop.index*-20"), b.sa("spd", "($loop.index+1)*0.2"), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed(1), v(b.la("ivs1", "$dir", "$spd")))]), g(5), b.fire(b.direction("360/6 + 30", "sequence"), b.speed(1), v(b.la("ivs1", "$dir", "$spd")))]), b.repeat(35, [b.sa("dir", 
  "$loop.index*+20"), b.sa("spd", "($loop.index+1)*0.2"), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed(1), v(b.la("ivs1", "$dir", "$spd")))]), g(5), b.fire(b.direction("360/6 - 30", "sequence"), b.speed(1), v(b.la("ivs1", "$dir", "$spd")))])]), snow:b.action([b.repeat("3+$ex*3", [b.sa("s", "$loop.index+1"), b.fire(b.direction(0, "absolute"), b.speed("$s"), v(b.la("snowArm"))), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed("$s"), v(b.la("snowArm")))])]), b.La]), snowArm:b.action([b.wait(2), 
  b.fire(b.direction(0), s, C), b.La]), ivs1:b.action([b.wait(10), b.fire(b.direction("$1-1", "relative"), n("$2"), N), b.fire(b.direction("$1+1", "relative"), n("$2"), N), b.La()])});
  gls2.fa["rikka-3"] = new L.ha({top0:b.action([g(40), b.fire(b.direction(-10), v(b.la("dummy")), b.offsetX(-90), b.offsetY(-20)), b.repeat(12, [b.fire(b.direction(10, "sequence"), K("$loop.index*0.5"), u, b.offsetX(-90), b.offsetY(-20)), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed(0, "sequence"), u, b.offsetX(-90), b.offsetY(-20))]), g(5)]), g(40)]), top1:b.action([g(40), b.fire(b.direction(-10), v(b.la("dummy")), b.offsetX(90), b.offsetY(-20)), b.repeat(12, [b.fire(b.direction(10, 
  "sequence"), K("$loop.index*0.5"), u, b.offsetX(90), b.offsetY(-20)), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed(0, "sequence"), u, b.offsetX(90), b.offsetY(-20))]), g(5)]), g(40)]), dummy:b.action([b.wait(1), b.La])});
  gls2.fa["mana-1-1"] = new L.ha({top0:b.action([b.la("winder", -1)]), top1:b.action([b.la("winder", 1)]), winder:b.action([b.wait(60), b.repeat(8, [b.fire(b.direction("(-190+$loop.index*30)*$1"), n, O, b.offsetX("-145*$1"), b.offsetY(-5))]), b.repeat(50, [g(20), b.sa("a", "$loop.index*3"), b.repeat(8, [b.fire(b.direction("(-190+$a+$loop.index*30)*$1"), n, O, b.offsetX("-145*$1"), b.offsetY(-5))])])]), top2:b.action([b.wait(60), g(300), b.repeat(7, [b.sa("s", "$loop.index"), b.repeat(5, [b.sa("ss", 
  "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, s("$ss"), I, b.offsetX(-30), b.offsetY(-30))]), g(5), b.repeat(5, [b.sa("ss", "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, s("$ss"), I, b.offsetX(30), b.offsetY(-30))]), g(20), b.repeat(5, [b.sa("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, A("$ss"), u, b.offsetX(30), b.offsetY(-30))]), g(5), b.repeat(5, [b.sa("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, A("$ss"), u, b.offsetX(-30), b.offsetY(-30))]), g(80)])])});
  gls2.fa["mana-1-2"] = new L.ha({top:b.action([b.repeat(5, [b.sa("i", "$loop.index"), b.sa("j", "1/($i+1) * 4"), b.sa("k", "6+$i*3"), c(n("$k"), 0.02, "4+$loop.index*3", function(a) {
    return b.action([b.fire(b.direction("(12-$i)*(-3*$j)"), a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-2*$j)"), a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-1*$j)"), a, I, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*( 0*$j)"), a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+1*$j)"), a, I, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+2*$j)"), a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+3*$j)"), 
    a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-3*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-2*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-1*$j)"), a, I, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*( 0*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+1*$j)"), a, I, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+2*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), 
    b.fire(b.direction("(12-$i)*(+3*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), g(5)])
  }), g(30)])])});
  gls2.fa["mana-1-3"] = new L.ha({top0:b.action([g(20), b.la("fire", -145)]), top1:b.action([g(40), b.la("fire", 145)]), top2:b.action([b.repeat(8, [g(30), b.sa("d", "-3*($rand*2-1)"), b.sa("s", "$loop.index*2"), b.fire(b.direction("$d"), v(b.la("dmy"))), b.fire(b.direction(0, "sequence"), A("$s"), O), b.repeat(5, [b.wait(5), b.sa("way", "$loop.index+2"), b.fire(b.direction("-$way*0.8*0.5", "sequence"), A("$s"), O), b.repeat("$way", [b.fire(b.direction(0.8, "sequence"), A("$s"), O)]), b.fire(b.direction("-$way*0.8*0.5", 
  "sequence"), v(b.la("dmy")))])])]), fire:b.action([b.repeat(8, [d(72, -177.5, 177.5, q, u, b.offsetX("$1"), b.offsetY(-50)), g(50)])]), dmy:b.action([b.wait(1), b.La()])});
  gls2.fa["mana-2-1"] = new L.ha({top0:b.action([b.repeat(60, [b.sa("d", "Math.sin($loop.index*0.3)*40"), b.sa("s", "$loop.index*0.2"), d(7, "-90+$d", "+90+$d", n("$s"), H, b.offsetX(-145), b.offsetY(-50)), g(5)]), b.repeat(60, [b.sa("d", "Math.sin($loop.index*0.3)*40"), b.sa("s", "$loop.index*0.2"), d(7, "-90-$d", "+90-$d", n("$s"), H, b.offsetX(145), b.offsetY(-50)), g(5)])])});
  gls2.fa["mana-2-2"] = new L.ha({top0:b.action([b.repeat(5, [d(15, -90, 90, n(2), u, b.offsetX(-145), b.offsetY(-50)), g(20), d(15, -90, 90, n(2), I, b.offsetX(145), b.offsetY(-50)), g(20), d(14, -90, 90, n(6), u, b.offsetX(-145), b.offsetY(-50)), g(20), d(14, -90, 90, n(6), I, b.offsetX(145), b.offsetY(-50)), g(20)])]), top1:b.action([b.repeat(15, [g(13), d(15, -90, 90, s(3), F), g(10), d(16, -90, 90, s(1), F), g(11), d(10, -90, 90, s(2), F)])]), top2:b.action([b.fire(b.direction(10), r(3), O, 
  b.offsetX(-145), b.offsetY(-50)), b.repeat(100, [b.fire(b.direction(0, "sequence"), r(3), O, b.offsetX(-145), b.offsetY(-50)), g(5)])]), top3:b.action([b.fire(b.direction(-10), r(3), N, b.offsetX(145), b.offsetY(-50)), b.repeat(100, [b.fire(b.direction(0, "sequence"), r(3), N, b.offsetX(145), b.offsetY(-50)), g(5)])])});
  gls2.fa["mana-2-3"] = new L.ha({top0:b.action([b.repeat(30, [b.sa("ptn", "[41, 35, 27, 15, 11][Math.floor($loop.index/5) % 5]"), b.fire(b.direction(180, "absolute"), b.speed(3), G(b.la("child", "$ptn")), b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction(180, "absolute"), b.speed(3), G(b.la("child", "$ptn")), b.offsetX(145), b.offsetY(-50)), g(20)])]), child:b.action([b.repeat(999, [b.wait("$1"), b.repeat(8, [b.fire(b.direction("360*$loop.index/8", "absolute"), r, v(b.la("ring"))), b.fire(b.direction("360*$loop.index/8", 
  "absolute"), r, v(b.la("ring")))])])]), ring:b.action([b.wait(3), b.fire(b.direction(90, "absolute"), n, F), b.fire(b.direction(-90, "absolute"), n, F), b.La])});
  gls2.fa["mana-3-1"] = new L.ha({top0:b.action([b.repeat(999, [g(20), b.sa("w", "5+$rand*15"), d("$w", -90, 90, m, F, b.offsetX(-145), b.offsetY(-50)), d("$w", -90, 90, m, F, b.offsetX(145), b.offsetY(-50))])]), top1:b.action([b.repeat(999, [g(43), d(12, -5, 5, s, N)])])});
  gls2.fa.kanade = new L.ha({top0:b.action([b.repeat(999, [b.repeat(16, [b.fire(b.direction(360 / 17, "sequence"), b.speed(2), v(b.la("ivs0", -110)), b.offsetY(-350))]), g(20), b.fire(b.direction(360 / 17 - 3, "sequence"), b.speed(2), v(b.la("ivs0", -110)), b.offsetY(-350))])]), top1:b.action([b.repeat(999, [b.repeat(16, [b.fire(b.direction(360 / 17, "sequence"), b.speed(2), v(b.la("ivs0", 110)), b.offsetY(-350))]), g(20), b.fire(b.direction(360 / 17 + 6, "sequence"), b.speed(2), v(b.la("ivs0", 110)), 
  b.offsetY(-350))])]), ivs0:b.action([b.wait(5), b.fire(b.direction("$1", "relative"), m, E), b.La()]), top2:b.action([b.repeat(999, [d(5, -12, 12, m, u, b.offsetY(-350)), d(5, 78, 102, m, u, b.offsetY(-350)), d(5, 168, 192, m, u, b.offsetY(-350)), d(5, 258, 282, m, u, b.offsetY(-350)), g(57)])]), top3:b.action([b.repeat(999, [d(3, -3, 3, n, O, b.offsetY(-350)), g(91)])])});
  gls2.fa.rery = new L.ha({top:b.action([g("$rand*120"), b.repeat(999, [g(180), b.repeat(10, [b.fire(b.direction(-90), b.speed(2), v(b.la("fire", 90, "$loop.index"))), b.fire(b.direction(90), b.speed(2), v(b.la("fire", -90, "$loop.index")))])])]), fire:b.action([b.wait(3), b.fire(b.direction("$1", "relative"), s("$2*0.25"), I), b.La()])});
  gls2.fa.fary = new L.ha({top:b.action([g("$rand*120"), b.repeat(999, [g(120), b.repeat(3, [d(3, -30, 30, n, w), g(15)])])])});
  gls2.fa.sory = new L.ha({top:b.action([b.sa("d", "$rand<0.5 ? -5 : 5"), b.sa("s", "1+$rand*0.5"), b.repeat(999, [b.fire(b.direction("360/8+$d*$s", "sequence"), b.speed(2), v(b.la("fire"))), b.repeat(3, [b.fire(b.direction(90, "sequence"), b.speed(2), v(b.la("fire")))]), g(60)])]), fire:b.action([b.wait(2), b.fire(b.direction(0, "relative"), m, F), b.La()])});
  gls2.fa.lary = new L.ha({top0:b.action([b.fire(b.direction(0, "absolute"), b.speed(1), v(b.la("fire"))), b.repeat(999, [g(10), b.fire(b.direction(98, "sequence"), b.speed(1), v(b.la("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.la("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.la("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.la("fire")))])]), top1:b.action([b.fire(b.direction(47, "absolute"), b.speed(1), v(b.la("fire"))), b.repeat(999, [g(10), b.fire(b.direction(76, 
  "sequence"), b.speed(1), v(b.la("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.la("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.la("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.la("fire")))])]), fire:b.action([b.wait(5), b.fire(b.direction(-1, "relative"), q, N), b.fire(b.direction(1, "relative"), q, N), b.La()])});
  gls2.fa.shiry = new L.ha({top0:b.action([b.repeat(999, [b.sa("d", "$loop.index*-6"), b.repeat(23, [b.fire(b.direction(15, "sequence"), b.speed(1), v(b.la("ivs0", "$d")))]), g(30), b.fire(b.direction(16, "sequence"), b.speed(1), v(b.la("ivs0", "$d")))])]), ivs0:b.action([b.wait(5), b.fire(b.direction("$1", "relative"), q, H), b.La()])});
  gls2.fa.dodory = new L.ha({top:b.action([g("$rand*40"), b.repeat(999, [g(30), c(s, -0.1, 3, function(a) {
    return b.action([b.fire(a, D)])
  })])])});
  gls2.fa["hibiki-1-1"] = new L.ha({top0:b.action([g(120), b.repeat(6, [a(9, 150, 130, m(0.8), w), a(9, 172, 188, m(0.8), w), a(9, 210, 230, m(0.8), w), g(50), a(9, 170, 150, m(0.8), w), a(9, 190, 210, m(0.8), w), g(50)])])});
  gls2.fa["hibiki-1-2"] = gls2.fa["hibiki-1-1"];
  gls2.fa["hibiki-1-3"] = gls2.fa["hibiki-1-1"];
  gls2.fa["hibiki-2-1"] = gls2.fa["hibiki-1-1"];
  gls2.fa["hibiki-2-2"] = gls2.fa["hibiki-1-1"];
  gls2.fa["hibiki-2-3"] = gls2.fa["hibiki-1-1"];
  gls2.fa["hibiki-3-1"] = gls2.fa["hibiki-1-1"];
  gls2.fa["hibiki-3-2"] = gls2.fa["hibiki-1-1"];
  gls2.fa["setsuna-1"] = new L.ha({top0:b.action([b.wait(60), b.repeat(5, [d(3, -2, 2, q(1.8), D, b.offsetX(0), b.offsetX(0)), d(3, -4, 4, q(1.4), D, b.offsetX(0), b.offsetX(0)), d(3, -6, 6, q(1), D, b.offsetX(0), b.offsetX(0)), d(3, -8, 8, q(0.6), D, b.offsetX(0), b.offsetX(0)), g(110)])]), top1:b.action([b.wait(60), b.repeat(10, [d(4, -40, 40, n, H, b.offsetX(0), b.offsetY(30)), g(15), d(5, -40, 40, q, H, b.offsetX(0), b.offsetY(30)), g(15), d(6, -40, 40, m, H, b.offsetX(0), b.offsetY(30)), g(15)])])});
  gls2.fa["love-1-1"] = new L.ha({top0:b.action([g(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(17, "sequence"), m("$loop.index*0.1"), u, b.offsetX(-105), b.offsetY(0)), g(1)]), g(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(-17, "sequence"), m("$loop.index*0.1"), I, b.offsetX(-105), b.offsetY(0)), g(1)]), g(120)]), top1:b.action([b.wait(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), 
  b.repeat(90, [b.fire(b.direction(11, "sequence"), m("$loop.index*0.1"), u, b.offsetX(-85), b.offsetY(0)), g(1)]), g(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(-11, "sequence"), m("$loop.index*0.1"), I, b.offsetX(-85), b.offsetY(0)), g(1)])]), top2:b.action([b.wait(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(-19, "sequence"), m("$loop.index*0.1"), u, b.offsetX(105), b.offsetY(0)), g(1)]), g(30), 
  b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(19, "sequence"), m("$loop.index*0.1"), I, b.offsetX(105), b.offsetY(0)), g(1)])]), top3:b.action([b.wait(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(-23, "sequence"), m("$loop.index*0.1"), u, b.offsetX(85), b.offsetY(0)), g(1)]), g(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(23, "sequence"), m("$loop.index*0.1"), 
  I, b.offsetX(85), b.offsetY(0)), g(1)])])});
  gls2.fa["love-1-2"] = new L.ha({top0:b.action([b.wait(30), b.repeat(2, [c(n, 0.02, 10, function(c) {
    return b.action([a(5, 200, 120, c, O, b.offsetX(-85), b.offsetY(0)), a(6, 190, 130, c, N, b.offsetX(-170), b.offsetY(40)), a(5, 260, 210, c, O, b.offsetX(85), b.offsetY(0)), a(6, 270, 220, c, N, b.offsetX(170), b.offsetY(40)), b.wait(5)])
  }), g(120)])]), top1:b.action([b.wait(60), b.repeat(10, [d(6, -40, 40, q, E, b.offsetX(-130), b.offsetY(30)), g(30), d(7, -40, 40, m, E, b.offsetX(-130), b.offsetY(30)), g(30)])]), top2:b.action([b.wait(60), b.repeat(10, [d(6, -40, 40, q, E, b.offsetX(130), b.offsetY(30)), g(30), d(7, -40, 40, m, E, b.offsetX(130), b.offsetY(30)), g(30)])])});
  gls2.fa["love-1-3"] = new L.ha({top0:b.action([b.wait(120), b.repeat(2, [b.repeat(5, [b.repeat(10, [b.sa("c", "$loop.index*10"), d(2, "-30+$c", "30-$c", n(5), V, b.offsetX(0), b.offsetY(0)), g(6)])]), g(120)])]), top1:b.action([b.wait(60), b.repeat(10, [d(4, -40, 40, q, E, b.offsetX(-130), b.offsetY(30)), g(30), d(5, -40, 40, m, E, b.offsetX(-130), b.offsetY(30)), g(30)])]), top2:b.action([b.wait(60), b.repeat(10, [d(4, -40, 40, q, E, b.offsetX(130), b.offsetY(30)), g(30), d(5, -40, 40, m, E, b.offsetX(130), 
  b.offsetY(30)), g(30)])])});
  gls2.fa["love-2-1"] = new L.ha({top0:b.action([b.wait(60), b.repeat(2, [b.repeat(5, [b.repeat(35, [b.fire(b.direction(" $loop.index*10"), q, B, b.offsetX(-130), b.offsetY(40)), b.fire(b.direction("-$loop.index*10"), q, B, b.offsetX(130), b.offsetY(40))]), g(12)]), g(120)])]), top1:b.action([b.wait(30), b.repeat(2, [b.repeat(5, [b.repeat(36, [b.fire(b.direction(" $loop.index*10"), m, H, b.offsetX(0), b.offsetY(-30))]), g(12)]), g(120)])])});
  gls2.fa["love-2-2"] = new L.ha({top0:b.action([b.wait(60), b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(5, [b.repeat(30, [b.fire(b.direction(21, "sequence"), m, I, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(90, "sequence"), m, I, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(90, "sequence"), m, I, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(90, "sequence"), m, I, b.offsetX(-85), b.offsetY(0)), g(10)]), g(30)])]), top1:b.action([b.wait(60), b.fire(b.direction(0), 
  m, D, b.offsetX(0), b.pa(k)), b.repeat(5, [b.repeat(30, [b.fire(b.direction(-21, "sequence"), m, I, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(90, "sequence"), m, I, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(90, "sequence"), m, I, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(90, "sequence"), m, I, b.offsetX(85), b.offsetY(0)), g(10)])]), g(30)]), top9:b.action([b.wait(600), b.repeat(5, [b.repeat(36, [b.fire(b.direction("$loop.index*7"), b.speed(1), B(b.la("seed")))]), g(300)])]), 
  seed:b.action([b.wait(10), b.ye(b.speed(0), 30), b.wait(30), d(5, -40, 40, q, V), b.La])});
  gls2.fa["love-2-3"] = new L.ha({});
  gls2.fa["love-3-1"] = new L.ha({top0:b.action([b.wait(60), b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(5, [b.repeat(30, [b.fire(b.direction(11, "sequence"), m, G, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(-85), b.offsetY(0)), 
  b.fire(b.direction(45, "sequence"), m, G, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(-85), b.offsetY(0)), g(3)]), g(10)])]), top1:b.action([b.wait(60), b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(5, [b.repeat(30, [b.fire(b.direction(-11, "sequence"), m, G, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, 
  "sequence"), m, G, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, G, b.offsetX(85), b.offsetY(0)), g(3)])]), g(10)]), top2:b.action([b.wait(120), b.repeat(2, [c(s, 0.0050, 10, function(a) {
    return b.action([d(20, -90, 90, a, w, b.offsetX(-85), b.offsetY(0)), d(20, -90, 90, a, w, b.offsetX(85), b.offsetY(0))])
  }), g(240)])])});
  gls2.fa["love-3-2"] = new L.ha({top0:b.action([b.wait(60), b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(5, [b.repeat(30, [b.fire(b.direction(-11, "sequence"), m, E, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(-85), b.offsetY(0)), 
  b.fire(b.direction(45, "sequence"), m, E, b.offsetX(-85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(-85), b.offsetY(0)), g(3)]), g(10)])]), top1:b.action([b.wait(60), b.fire(b.direction(0), m, D, b.offsetX(0), b.pa(k)), b.repeat(5, [b.repeat(30, [b.fire(b.direction(11, "sequence"), m, E, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, 
  "sequence"), m, E, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(85), b.offsetY(0)), b.fire(b.direction(45, "sequence"), m, E, b.offsetX(85), b.offsetY(0)), g(3)])]), g(10)]), top2:b.action([b.wait(120), b.repeat(2, [c(s, 0.0020, 10, function(a) {
    return b.action([d(21, -90, 90, a, D, b.offsetX(-85), b.offsetY(0)), d(21, -90, 90, a, D, b.offsetX(85), b.offsetY(0))])
  }), g(240)])])});
  gls2.fa.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      S.push(gls2.Qa())
    }
    a = gls2.fa.rf = tm.Hb.nd.Be;
    a.bh = function(a) {
      return!(a instanceof gls2.Qa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.ki = function(a) {
      var b = S.shift(0);
      if(b) {
        return b.ra = 50, Q.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.lc ? (b.scaleX = 1, b.scaleY = 1, b.kd = t) : (a.Me ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Lb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.kd = k), b.visible = a.visible === t ? t : k, b.lc = !!a.lc, b.Me = !!a.Me, b.Lb = !!a.Lb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.ri = function(a) {
      return-0 <= a.x && 480 > a.x && -0 <= a.y && 640 > a.y
    };
    a.Jd = 3;
    L.Va.bc.$rank = 0;
    L.Va.bc.$hyperOff = 1
  };
  gls2.fa.erase = function(a, b, c) {
    for(var d = [].concat(Q), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var j = gls2.bi(!!b);
        j.setPosition(d[f].x, d[f].y);
        c && (j.Cd = k)
      }
      d[f].ya()
    }
  };
  gls2.fa.ze = function() {
    for(var a = [].concat(Q), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Qa = tm.createClass({superClass:tm.display.Sprite, ra:0, lc:t, Me:t, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      S.push(this);
      var a = Q.indexOf(this);
      -1 !== a && Q.splice(a, 1)
    })
  }, update:function() {
    this.lc && (this.rotation += 15)
  }, ya:function() {
    var a = gls2.Qa.De().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Qa.De = function() {
    gls2.Qa.De.Og === l && (gls2.Qa.De.Og = gls2.Ta(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Qa.De.Og.clone()
  };
  gls2.Qa.De.Og = l;
  var S = [], Q = gls2.Qa.qb = []
})();
gls2.ja = {};
gls2.ja.clamp = function(c, a, f) {
  return c < a ? a : c > f ? f : c
};
gls2.ja.DEG_TO_RAD = Math.PI / 180;
gls2.ja.RAD_TO_DEG = 180 / Math.PI;
gls2.ja.degToRad = function(c) {
  return c * gls2.ja.DEG_TO_RAD
};
gls2.ja.radToDeg = function(c) {
  return c * gls2.ja.RAD_TO_DEG
};
gls2.ja.rand = function(c, a) {
  return window.Math.floor(window.Math.random() * (a - c + 1)) + c
};
gls2.ja.randf = function(c, a) {
  return window.Math.random() * (a - c) + c
};
gls2.ja.magnitude = function() {
  return Math.sqrt(gls2.ja.magnitudeSq.apply(l, arguments))
};
gls2.ja.magnitudeSq = function() {
  for(var c = 0, a = 0, f = arguments.length;a < f;++a) {
    c += arguments[a] * arguments[a]
  }
  return c
};
gls2.ja.inside = function(c, a, f) {
  return c >= a && c <= f
};

