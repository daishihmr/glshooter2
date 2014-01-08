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
var q = {ph:this};
(function() {
  function b(a, b) {
    for(var f = 0, g = a.length;f < g;f++) {
      if(a[f].label == b) {
        return a[f]
      }
    }
  }
  q.ha = function(a) {
    this.type = "none";
    this.root = this;
    this.Ma = [];
    this.Rd = [];
    this.$d = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof q.lb ? this.Ma.push(a[b]) : a[b] instanceof q.cc ? this.Rd.push(a[b]) : a[b] instanceof q.Lc && this.$d.push(a[b]))
      }
      a = 0;
      for(b = this.Ma.length;a < b;a++) {
        this.Ma[a].ub(this)
      }
      a = 0;
      for(b = this.Rd.length;a < b;a++) {
        this.Rd[a].ub(this)
      }
      a = 0;
      for(b = this.$d.length;a < b;a++) {
        this.$d[a].ub(this)
      }
    }
  };
  q.ha.prototype.rg = function(a) {
    return b(this.Ma, a)
  };
  q.ha.prototype.Pi = function() {
    for(var a = [], b = 0, f = this.Ma.length;b < f;b++) {
      var g = this.Ma[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  q.ha.prototype.Gi = function(a) {
    var b;
    if(b = this.rg(a)) {
      return b
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  q.ha.prototype.Hi = function(a) {
    return b(this.Rd, a)
  };
  q.ha.prototype.Ii = function(a) {
    var b;
    if(b = this.Hi(a)) {
      return b
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  q.ha.prototype.Ji = function(a) {
    return b(this.$d, a)
  };
  q.ha.prototype.Ki = function(a) {
    var b;
    if(b = this.Ji(a)) {
      return b
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  q.cc = function() {
    this.root = this.label = k;
    this.direction = new q.Qb(0);
    this.speed = new q.Sb(1);
    this.Ma = [];
    this.Fa = {};
    this.ra = {}
  };
  q.cc.prototype.clone = function(a) {
    var b = new q.cc;
    b.label = this.label;
    b.root = this.root;
    b.Ma = this.Ma;
    b.direction = new q.Qb(a.Ha(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new q.Sb(a.Ha(this.speed.value));
    b.speed.type = this.speed.type;
    b.Fa = this.Fa;
    b.ra = a.ra;
    return b
  };
  q.cc.prototype.ub = function(a) {
    this.root = a;
    for(var b = 0, f = this.Ma.length;b < f;b++) {
      this.Ma[b].ub(a)
    }
  };
  q.Bd = function(a) {
    this.root = k;
    this.label = a;
    this.Ja = []
  };
  q.Bd.prototype.clone = function(a) {
    var b = a.ra;
    a.ra = a.Ne(this.Ja);
    var f = this.root.Ii(this.label).clone(a);
    a.ra = b;
    return f
  };
  q.Bd.prototype.ub = function(a) {
    this.root = a
  };
  q.La = function() {
    this.eb = ""
  };
  q.La.prototype.ub = function(a) {
    this.root = a
  };
  q.lb = function() {
    this.eb = "action";
    this.root = this.label = k;
    this.zb = [];
    this.Ja = []
  };
  q.lb.prototype = new q.La;
  q.lb.prototype.ub = function(a) {
    this.root = a;
    for(var b = 0, f = this.zb.length;b < f;b++) {
      this.zb[b].ub(a)
    }
  };
  q.lb.prototype.clone = function() {
    var a = new q.lb;
    a.label = this.label;
    a.root = this.root;
    a.zb = this.zb;
    return a
  };
  q.Kc = function(a) {
    this.eb = "actionRef";
    this.label = a;
    this.root = k;
    this.Ja = []
  };
  q.Kc.prototype = new q.La;
  q.Kc.prototype.clone = function() {
    var a = new q.lb;
    a.root = this.root;
    a.zb.push(this);
    return a
  };
  q.Lc = function() {
    this.eb = "fire";
    this.oa = this.speed = this.direction = this.root = this.label = k;
    this.Fa = new q.Fd
  };
  q.Lc.prototype = new q.La;
  q.Lc.prototype.ub = function(a) {
    this.root = a;
    this.oa && this.oa.ub(a)
  };
  q.we = function(a) {
    this.eb = "fireRef";
    this.label = a;
    this.Ja = []
  };
  q.we.prototype = new q.La;
  q.Dd = function() {
    this.eb = "changeDirection";
    this.direction = new q.Qb;
    this.Za = 0
  };
  q.Dd.prototype = new q.La;
  q.Ed = function() {
    this.eb = "changeSpeed";
    this.speed = new q.Sb;
    this.Za = 0
  };
  q.Ed.prototype = new q.La;
  q.Ad = function() {
    this.eb = "accel";
    this.Mb = new q.ze;
    this.Pb = new q.Le;
    this.Za = 0
  };
  q.Ad.prototype = new q.La;
  q.Ld = function(a) {
    this.eb = "wait";
    this.value = a || 0
  };
  q.Ld.prototype = new q.La;
  q.Ke = function() {
    this.eb = "vanish"
  };
  q.Ke.prototype = new q.La;
  q.Jd = function() {
    this.eb = "repeat";
    this.Vg = 0;
    this.action = k;
    this.Ja = []
  };
  q.Jd.prototype = new q.La;
  q.Jd.prototype.ub = function(a) {
    this.root = a;
    this.action && this.action.ub(a)
  };
  q.ue = function(a, b) {
    this.eb = "bind";
    this.xj = a;
    this.Ei = b
  };
  q.ue.prototype = new q.La;
  q.Fe = function(a, b) {
    this.eb = "notify";
    this.Bi = a;
    this.Ja = b || k
  };
  q.Fe.prototype = new q.La;
  q.mh = new q.La;
  q.Qb = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  q.Sb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  q.ze = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.Le = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.Fd = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.la = j;
    a.la !== i && (this.la = !!a.la)
  };
  q.Uf = function(a) {
    this.value = a || 0
  };
  q.Vf = function(a) {
    this.value = a || 0
  };
  q.Jf = function(a) {
    this.value = !!a
  }
})();
q.Da = function(b) {
  this.$f = b;
  this.Md = [];
  this.hc = -1;
  this.Ra = k;
  this.ra = {}
};
q.Da.prototype.next = function() {
  this.hc += 1;
  if(this.Ra !== k) {
    var b = this.Ra.zb[this.hc];
    if(b !== i) {
      if(b instanceof q.lb) {
        return this.dd(), this.Ra = b, this.ra = this.Me(), this.next()
      }
      if(b instanceof q.Kc) {
        return this.dd(), this.Ra = this.$f.Gi(b.label), this.ra = this.Ne(b.Ja), this.next()
      }
      if(b instanceof q.Jd) {
        return this.ra.Wc = 0, this.ra.Ig = this.Ha(b.Vg) | 0, this.dd(), this.Ra = b.action.clone(), this.ra = this.Me(), this.next()
      }
      if(b instanceof q.Lc) {
        var a = new q.Lc;
        a.oa = b.oa.clone(this);
        b.direction !== k && (a.direction = new q.Qb(this.Ha(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== k && (a.speed = new q.Sb(this.Ha(b.speed.value)), a.speed.type = b.speed.type);
        a.Fa = new q.Fd;
        a.Fa.offsetX = this.Ha(b.Fa.offsetX);
        a.Fa.offsetY = this.Ha(b.Fa.offsetY);
        a.Fa.la = b.Fa.la;
        return a
      }
      return b instanceof q.we ? (this.dd(), this.Ra = new q.lb, this.Ra.zb = [this.$f.Ki(b.label)], this.ra = this.Ne(b.Ja), this.next()) : b instanceof q.Dd ? (a = new q.Dd, a.direction.type = b.direction.type, a.direction.value = this.Ha(b.direction.value), a.Za = this.Ha(b.Za), a) : b instanceof q.Ed ? (a = new q.Ed, a.speed.type = b.speed.type, a.speed.value = this.Ha(b.speed.value), a.Za = this.Ha(b.Za), a) : b instanceof q.Ad ? (a = new q.Ad, a.Mb.type = b.Mb.type, a.Mb.value = this.Ha(b.Mb.value), 
      a.Pb.type = b.Pb.type, a.Pb.value = this.Ha(b.Pb.value), a.Za = this.Ha(b.Za), a) : b instanceof q.Ld ? new q.Ld(this.Ha(b.value)) : b instanceof q.Ke ? b : b instanceof q.ue ? (this.ra["$" + b.xj] = this.Ha(b.Ei), q.mh) : b instanceof q.Fe ? b : k
    }
    this.oi();
    if(this.Ra === k) {
      return k
    }
    if((b = this.Ra.zb[this.hc]) && "repeat" == b.eb) {
      this.ra.Wc++, this.ra.Wc < this.ra.Ig && (this.dd(), this.Ra = b.action.clone(), this.ra = this.Me())
    }
    return this.next()
  }
  return k
};
q.Da.prototype.dd = function() {
  this.Md.push({action:this.Ra, cursor:this.hc, scope:this.ra});
  this.hc = -1
};
q.Da.prototype.oi = function() {
  var b = this.Md.pop();
  b ? (this.hc = b.cursor, this.Ra = b.action, this.ra = b.scope) : (this.hc = -1, this.Ra = k, this.ra = {})
};
q.Da.prototype.Ha = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.ra[b]) || (a = q.Da.sb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in q.Da.sb) {
    q.Da.sb.hasOwnProperty(d) && (a[d] = q.Da.sb[d])
  }
  for(d in this.ra) {
    this.ra.hasOwnProperty(d) && (a[d] = this.ra[d])
  }
  a.$rand = Math.random();
  (d = this.Md[this.Md.length - 1]) && (a.$loop = {index:d.scope.Wc, count:d.scope.Wc + 1, first:0 === d.scope.Wc, last:d.scope.Wc + 1 >= d.scope.Ig});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
q.Da.prototype.Ne = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.Ha(b[d])
    }
  }else {
    for(d in this.ra) {
      this.ra.hasOwnProperty(d) && (a[d] = this.ra[d])
    }
  }
  return a
};
q.Da.prototype.Me = function() {
  var b = {}, a;
  for(a in this.ra) {
    this.ra.hasOwnProperty(a) && (b[a] = this.ra[a])
  }
  return b
};
q.ha.prototype.af = function(b) {
  var a = new q.Da(this);
  if(b = this.rg(b)) {
    a.Ra = b
  }
  return a
};
q.cc.prototype.af = function() {
  var b = new q.Da(this.root), a = new q.lb;
  a.root = this.root;
  a.zb = this.Ma;
  b.Ra = a;
  b.ra = this.ra;
  return b
};
q.Da.sb = {};
q.va = function(b) {
  b = b || "";
  for(var a in q.va) {
    q.va.hasOwnProperty(a) && (q.ph[b + a] = q.va[a])
  }
};
q.va.action = function(b) {
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
  var f = new q.lb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof q.La)
    }) && h(Error("argument type error.")), f.zb = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof q.La ? f.zb[a] = arguments[a] : h(Error("argument type error."))
    }
  }
  return f
};
q.va.Sa = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.Kc(b);
  if(a instanceof Array) {
    f.Ja = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ja.push(arguments[d])
    }
  }
  return f
};
q.va.oa = function(b, a, d, f) {
  for(var g = 0, p = arguments.length;g < p;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  p = new q.cc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Qb ? p.direction = arguments[g] : arguments[g] instanceof q.Sb ? p.speed = arguments[g] : arguments[g] instanceof q.lb ? p.Ma.push(arguments[g]) : arguments[g] instanceof q.Kc ? p.Ma.push(arguments[g]) : arguments[g] instanceof Array ? p.Ma.push(q.va.action(arguments[g])) : arguments[g] instanceof Object ? p.Fa = arguments[g] : "string" === typeof arguments[g] && (p.label = arguments[g])
  }
  return p
};
q.va.Dj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.Bd(b);
  if(a instanceof Array) {
    f.Ja = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ja.push(arguments[d])
    }
  }
  return f
};
q.va.fire = function(b, a, d, f) {
  for(var g = 0, p = arguments.length;g < p;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  p = new q.Lc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Qb ? p.direction = arguments[g] : arguments[g] instanceof q.Sb ? p.speed = arguments[g] : arguments[g] instanceof q.cc ? p.oa = arguments[g] : arguments[g] instanceof q.Bd ? p.oa = arguments[g] : arguments[g] instanceof q.Fd ? p.Fa = arguments[g] : arguments[g] instanceof q.Uf ? p.Fa.offsetX = arguments[g].value : arguments[g] instanceof q.Vf ? p.Fa.offsetY = arguments[g].value : arguments[g] instanceof q.Jf && (p.Fa.la = arguments[g].value)
  }
  p.oa === i && h(Error("bullet (or bulletRef) is required."));
  return p
};
q.va.Jj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.we(b);
  if(a instanceof Array) {
    f.Ja = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ja.push(arguments[d])
    }
  }
  return f
};
q.va.Ej = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("direction is required."));
  a === i && h(Error("term is required."));
  d = new q.Dd;
  d.direction = b instanceof q.Qb ? b : new q.Qb(b);
  d.Za = a;
  return d
};
q.va.Sd = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("speed is required."));
  a === i && h(Error("term is required."));
  d = new q.Ed;
  d.speed = b instanceof q.Sb ? b : new q.Sb(b);
  d.Za = a;
  return d
};
q.va.Cj = function(b, a, d) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new q.Ad;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof q.ze ? g.Mb = b : arguments[f] instanceof q.Le ? g.Pb = a : g.Za = arguments[f]
  }
  g.Mb === i && g.Pb === i && h(Error("horizontal or vertical is required."));
  g.Za === i && h(Error("term is required."));
  return g
};
q.va.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && h(Error("value is required."));
  return new q.Ld(b)
};
q.va.Db = function() {
  return new q.Ke
};
q.va.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("times is required."));
  a === i && h(Error("action is required."));
  f = new q.Jd;
  f.Vg = b;
  if(a instanceof q.lb || a instanceof q.Kc) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = q.va.action(a)
    }else {
      for(var g = [], d = 1;d < arguments.length;d++) {
        g.push(arguments[d])
      }
      f.action = q.va.action(g)
    }
  }
  return f
};
q.va.ob = function(b, a) {
  return new q.ue(b, a)
};
q.va.Pj = function(b, a) {
  return new q.Fe(b, a)
};
q.va.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Qb(b);
  a !== i && (d.type = a);
  return d
};
q.va.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Sb(b);
  a && (d.type = a);
  return d
};
q.va.Mb = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.ze(b);
  a && (d.type = a);
  return d
};
q.va.Pb = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Le(b);
  a && (d.type = a);
  return d
};
q.va.Ij = function(b) {
  return new q.Fd(b)
};
q.va.offsetX = function(b) {
  return new q.Uf(b)
};
q.va.offsetY = function(b) {
  return new q.Vf(b)
};
q.va.la = function(b) {
  return new q.Jf(b)
};
tm.cb = tm.cb || {};
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
  tm.cb.tc = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.Xf = a
  }, Vd:function(a, b) {
    var d = this.Xf.Pi();
    if(b === i && 0 < d.length) {
      for(var f = [], G = 0, r = d.length;G < r;G++) {
        f[f.length] = this.Yf(a, d[G])
      }
      for(var s = function() {
        if(!s.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          s.Xe == f.length && (s.jd = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, G = f.length;G--;) {
        f[G].ke = s
      }
      s.Xe = 0;
      s.ig = function() {
        this.Xe++
      };
      s.Xe = 0;
      s.jd = l;
      s.ef = j;
      s.stop = l;
      return s
    }
    return this.Yf(a, b)
  }, Yf:function(a, b) {
    function d() {
      if(!d.stop) {
        d.ia += 1;
        this.ia = d.ia;
        var a = d.Td, b = d.ni;
        if(b) {
          if(d.ia < d.Ve ? d.direction += d.Qc : d.ia === d.Ve && (d.direction = d.kc), d.ia < d.We ? d.speed += d.yd : d.ia === d.We && (d.speed = d.$c), d.ia < d.Qe ? (d.Hc += d.Pd, d.Jc += d.Qd) : d.ia === d.Qe && (d.Hc = d.Nd, d.Jc = d.Od), this.x += Math.cos(d.direction) * d.speed * a.Ic, this.y += Math.sin(d.direction) * d.speed * a.Ic, this.x += d.Hc * a.Ic, this.y += d.Jc * a.Ic, a.ff(this)) {
            if(a.rc || this.rc) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.ia < d.Wg || d.jd)) {
              for(var f;f = d.Xg.next();) {
                switch(f.eb) {
                  case "fire":
                    b.ki.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Wg = "number" === typeof f.value ? d.ia + f.value : 0 !== (a = ~~f.value) ? d.ia + a : d.ia + eval(f.value);
                    return;
                  case "changeDirection":
                    b.fi.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.gi.call(this, f, d);
                    break;
                  case "accel":
                    b.di.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.li.call(this, f)
                }
              }
              d.jd = j;
              d.ke ? d.ke.ig() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.jd = j, d.ke ? d.ke.ig() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.cb.tc.kd, f;
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
    "string" === typeof b ? d.Xg = this.Xf.af(b) : b instanceof q.cc ? d.Xg = b.af() : (window.console.error(a, b), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.ni = this;
    d.Td = a;
    d.Wg = -1;
    d.jd = l;
    d.direction = 0;
    d.Eg = 0;
    d.speed = 0;
    d.Gg = 0;
    d.Hc = 0;
    d.Jc = 0;
    d.Qc = 0;
    d.kc = 0;
    d.Ve = -1;
    d.yd = 0;
    d.$c = 0;
    d.We = -1;
    d.Pd = 0;
    d.Nd = 0;
    d.Qd = 0;
    d.Od = 0;
    d.Qe = -1;
    d.ia = -1;
    d.stop = l;
    d.ef = j;
    return d
  }, ji:function(a) {
    function b() {
      b.stop || (this.x += b.mg, this.y += b.ng, b.Td.ff(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.cb.tc.kd, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b.Td = a;
    b.direction = 0;
    b.speed = 0;
    b.mg = 0;
    b.ng = 0;
    b.stop = l;
    b.ef = j;
    return b
  }, ki:function(b, d, f, C) {
    if(this.jj === i || this.ib) {
      var G = {label:b.oa.label}, r;
      for(r in b.oa.Fa) {
        G[r] = b.oa.Fa[r]
      }
      if(G = d.hg(G)) {
        C = (r = 0 === b.oa.Ma.length) ? C.ji(d) : C.Vd(d, b.oa);
        var s = this, A = {x:this.x + b.Fa.offsetX, y:this.y + b.Fa.offsetY};
        f.Eg = C.direction = function(r) {
          var m = eval(r.value) * Math.DEG_TO_RAD;
          switch(r.type) {
            case "aim":
              return d.target ? b.Fa.la ? a(A, d.target) + m : a(s, d.target) + m : m - Math.PI / 2;
            case "absolute":
              return m - Math.PI / 2;
            case "relative":
              return f.direction + m;
            default:
              return f.Eg + m
          }
        }(b.direction || b.oa.direction);
        f.Gg = C.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.Gg + b;
            default:
              return b
          }
        }(b.speed || b.oa.speed);
        G.x = A.x;
        G.y = A.y;
        r && (C.mg = Math.cos(C.direction) * C.speed * d.Ic, C.ng = Math.sin(C.direction) * C.speed * d.Ic);
        G.rc = !!G.rc;
        if(d.rc || G.rc) {
          G.rotation = (C.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, G.speed = C.speed
        }
        G.addEventListener("enterframe", C);
        d.cg ? d.cg.addChild(G) : this.parent && this.parent.addChild(G)
      }
    }
  }, fi:function(d, f, t) {
    var C = eval(d.direction.value) * Math.DEG_TO_RAD, G = eval(d.Za);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        t.kc = a(this, d) + C;
        t.Qc = b(t.kc - t.direction) / G;
        break;
      case "absolute":
        t.kc = C - Math.PI / 2;
        t.Qc = b(t.kc - t.direction) / G;
        break;
      case "relative":
        t.kc = t.direction + C;
        t.Qc = b(t.kc - t.direction) / G;
        break;
      case "sequence":
        t.Qc = C, t.kc = t.direction + t.Qc * (G - 1)
    }
    t.Ve = t.ia + G
  }, gi:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.Za);
    switch(a.speed.type) {
      case "absolute":
        b.$c = d;
        b.yd = (b.$c - b.speed) / f;
        break;
      case "relative":
        b.$c = d + b.speed;
        b.yd = (b.$c - b.speed) / f;
        break;
      case "sequence":
        b.yd = d, b.$c = b.speed + b.yd * f
    }
    b.We = b.ia + f
  }, di:function(a, b) {
    var d = eval(a.Za);
    b.Qe = b.ia + d;
    if(a.Mb) {
      var f = eval(a.Mb.value);
      switch(a.Mb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Pd = (f - b.Hc) / d;
          b.Nd = f;
          break;
        case "relative":
          b.Pd = f, b.Nd = (f - b.Hc) * d
      }
    }else {
      b.Pd = 0, b.Nd = b.Hc
    }
    if(a.Pb) {
      switch(f = eval(a.Pb.value), a.Pb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Qd = (f - b.Jc) / d;
          b.Od = f;
          break;
        case "relative":
          b.Qd = f, b.Od = (f - b.Jc) * d
      }
    }else {
      b.Qd = 0, b.Od = b.Jc
    }
  }, li:function(a) {
    var b = tm.event.Event(a.Bi);
    if(a.Ja) {
      for(var d in a.Ja) {
        b[d] = a.Ja[d]
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
  tm.cb.yi = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = k;
  tm.cb.lg = function(a) {
    if(f === k) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.cb.Gj = function() {
    return j
  };
  tm.cb.tc.kd = {hg:tm.cb.yi, ff:tm.cb.lg, Sj:0, rc:l, Ic:2, target:k};
  q.ha.prototype.Vd = function(a) {
    return tm.cb.tc(this).Vd(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(n());
tm.main(function() {
  ba("#canvas2d").run()
});
var u = k, v, ca, w, z, B, D, da, ea, fa, ha, ia, ja, ka, la, F, H, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, za, Aa, Ba, Ca, Da, Ea, Fa, Ga, J, K, Ha, Ia, O, P, Ja, Ka, S, ba = tm.createClass({superClass:tm.display.CanvasApp, lc:0, xg:0, zg:0, yg:0, vg:0, gd:3, Gc:3, Ye:1, ca:k, init:function(b) {
  u !== k && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  u = this;
  this.resize(480, 640).fitWindow();
  this.fps = v.oh;
  this.background = "rgba(0,0,0,0)";
  this.Gf = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", hino:"assets/enemy_hino.png", hoshizora_y:"assets/enemy_hoshizora_y.png", hoshizora_t:"assets/enemy_hoshizora_t.png", extendItem:"assets/extendItem.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm4:"assets2/nc80728.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/nc44202.mp3", 
  "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", 
  "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.mi();
    return ca()
  }.bind(this)}))
}, update:function() {
  for(var b = [].concat(this.Gf), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.Gf.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, mi:function() {
  w.setup(12345);
  ["tex_stage1", "tex_tank1"].forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawTexture(a, 0, 0);
    d = d.getBitmap();
    d.filter({calc:function(a, b, d, f, G) {
      G.setPixelIndex(b, a[0], 0, 0)
    }});
    var f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(b + "Red", f)
  });
  z.setup();
  B.setup();
  this.ca = D()
}, Hj:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.lc, "")
}, Gf:k, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function La(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
}
;v = {Oh:l, oh:60, Kh:0, Nf:[1E9, 1E10], Mh:3E3, Pf:3, Of:[3, 2, 1], ah:[6, 4, 2], Wf:1, Jh:0.1, Qf:1, Lh:0.25, yj:1, zj:0.25, $g:2, Bh:0.0050, xh:0.01, yh:0.0010, th:0.015, uh:0.0020, Dh:0.0010, Fh:0.01, Ch:0, Ah:0, zh:0, wh:0.03, vh:0.0040, Eh:0, Gh:0, Hh:0.75, xe:10, Gd:800, sh:0.25, rh:0.1, Ih:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], ih:0.02, jh:0.5, hh:0.01, Mf:1E3, eh:10, bh:1, bi:1E3, ai:100, $h:0, Zh:0, Yh:1E3, Xh:100, nh:0.5, fh:4, kh:22500, dh:50, Rh:10, If:l, Yg:j, Vh:1E3, Wh:2E3, Sh:4E3, 
Th:1E4, Uh:2E7, Nh:100, qh:"tmshooter"};
(function() {
  var b = k, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  da = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, jb:0, Wb:j, fd:j, Xc:l, ca:k, speed:0, gb:k, Pc:k, Lg:k, de:k, Zb:k, bf:k, Ub:k, cf:k, df:k, frame:0, init:function(a, f, g) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = f;
    this.style = g;
    tm.cb.tc.kd.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Pc = this.Lg = ea(f, 100);
    this.de = ea(3, 100);
    this.Zb = fa(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Zb.visible = l;
    this.ii();
    this.gb = this.hi();
    1 === this.style && (this.gb = [this.gb[1], this.gb[2]]);
    this.Ub = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(g = this.gb.length;f < g;f++) {
      var p = this.gb[f];
      ha(this, p).setPosition(p.x, p.y).addChildTo(this.Ub)
    }
    this.Xi = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Xi.blendMode = "lighter";
    this.cf = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.cf.blendMode = "lighter";
    this.cf.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Ca && !a.wa
    };
    this.df = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.df.blendMode = "lighter";
    this.df.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Ca && !a.wa
    };
    this.nd = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.nd.blendMode = "lighter";
    this.nd.rotation = -90;
    this.nd.strokeStyle = "rgba(180,180,255,0.4)";
    this.nd.update = function() {
      this.visible = a.wa
    };
    this.nd.draw = function(b) {
      b.lineCap = "round";
      var f = a.Uc / v.Gd;
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
    this.Ri = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Ri.update = function() {
      this.visible = a.wa
    };
    b === k && (b = ia(this.ca.ga))
  }, hi:function() {
    if(0 === this.type) {
      return[{x:0, Cc:0, y:40, d:0, vb:j, pb:-0.7, v:j}, {x:0, Cc:0, y:40, d:0, vb:j, pb:0.5, v:j}, {x:0, Cc:0, y:40, d:0, vb:j, pb:-0.5, v:j}, {x:0, Cc:0, y:40, d:0, vb:j, pb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, vb:l, pb:-0.7, v:j}, {x:-40, y:40, d:0.1, vb:l, pb:-0.5, v:j}, {x:40, y:40, d:0.1, vb:j, pb:0.5, v:j}, {x:70, y:20, d:0.1, vb:j, pb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, vb:l, pb:-0.7, v:j}, {x:-30, y:20, d:0.4, vb:l, pb:-0.5, v:j}, {x:30, y:20, d:0.4, vb:j, pb:0.5, v:j}, {x:60, y:40, d:0.6, vb:j, pb:0.7, v:j}]
    }
  }, ii:function() {
    this.bf = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.bf.setFrameIndex(5);
    this.bf.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, pc:-1, Tc:l, rb:l, update:function(d) {
    this.visible = this.Xc ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.Wb) {
      var g = f.getKeyAngle();
      g !== k && (g = a[g], this.x += g.x * this.speed * (this.rb ? 0.5 : 1), this.y += g.y * this.speed * (this.rb ? 0.5 : 1));
      this.x = T(this.x, 15, 465);
      this.y = T(this.y, 15, 625);
      var p = f.getKey("c") && this.fd, g = f.getKey("z") && this.fd;
      this.pc = p ? this.pc + 1 : this.pc - 1;
      this.pc = T(this.pc, -1, 10);
      this.rb = g && p || 10 === this.pc;
      p = this.ca.wa ? 3 : 5;
      this.Tc = !this.rb && (0 <= this.pc || g) && 0 === d.frame % p;
      g && (this.pc = 0);
      this.Zb.x = this.x;
      this.Zb.y = this.y - 40;
      f.getKeyDown("x") && this.fd && (0 < this.ca.Ca && !this.ca.wa ? (this.ca.tj(), ja(this).addChildTo(this.ca)) : !this.ca.Vc && 0 < this.ca.hb && (this.fb = T(this.fb - 2, 0, 1), this.ca.ed(-0.02), ka(this, this.ca).setPosition(T(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.rb = this.Tc = l
    }
    this.Tc && (g = Math.sin(0.2 * d.frame), p = this.Pc.fire(this.x - 7 - 6 * g, this.y - 5, -90), p !== k && p.addChildTo(this.ca), p = this.Pc.fire(this.x + 7 + 6 * g, this.y - 5, -90), p !== k && p.addChildTo(this.ca));
    if(this.rb) {
      g = 0;
      for(p = this.gb.length;g < p;g++) {
        this.gb[g].v = l
      }
      this.Ub.rotation = 0
    }else {
      this.Zb.visible = l;
      g = 0;
      for(p = this.gb.length;g < p;g++) {
        this.gb[g].v = j
      }
    }
    this.xi(f);
    this.ei(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = d.frame
  }, Xb:function() {
    this.rb = this.Tc = l;
    this.ca.Xd();
    this.ca.Na = 0;
    this.ca.Ia = 0;
    this.ca.Ea = 0
  }, xi:function(a) {
    if(0 === this.type) {
      for(a = this.gb.length;this.gb[--a] !== i;) {
        var b = this.gb[a];
        0 === a ? b.x = b.Cc + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.Cc + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.Cc + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.Cc + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Ub, b.rotation = this.rb ? 0 : this.Wb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Wb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, ei:function(a, b) {
    this.Wb && a.getKey("left") ? this.jb = T(this.jb - 0.2, -3, 3) : this.Wb && a.getKey("right") ? this.jb = T(this.jb + 0.2, -3, 3) : 0 > this.jb ? this.jb = T(this.jb + 0.2, -3, 3) : 0 < this.jb && (this.jb = T(this.jb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.jb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.jb) : 2 === this.type && this.setFrameIndex(31 + ~~this.jb);
    return b
  }});
  ha = tm.createClass({superClass:tm.display.AnimationSprite, Ac:k, da:k, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Ac = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.vb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.Ac.v) {
      this.x = this.Ac.x * (this.da.ca.wa ? 1.5 : 1);
      this.y = this.Ac.y * (this.da.ca.wa ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Ac.d * this.Ac.pb);
      var f = this.parent.localToGlobal(this);
      this.Ac.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.ca);
      this.da.Tc && (f = this.da.Pc.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== k && f.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = k;
  la = tm.createClass({superClass:tm.display.Sprite, speed:0, yc:0, si:1, Bg:0, Ua:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.yc = v.Wf;
    b === k && (b = F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.wd(a)
  }, update:function() {
    this.x += this.bc;
    this.y += this.Eb;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, wd:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, be:function(a) {
    for(var f = 0;f < a;f++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), p = U(2, 8), t = 2 * Math.random() * Math.PI;
      g.ta = Math.cos(t) * p;
      g.ua = Math.sin(t) * p;
      g.scaleX = g.scaleY = (U(0.1, 0.5) + U(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.ta;
        this.y += this.ua;
        this.ta *= 0.9;
        this.ua *= 0.9
      })
    }
  }});
  la.hd = function() {
    for(var b = [].concat(a), f = 0, g = b.length;f < g;f++) {
      b[f].remove()
    }
  };
  var a = la.Ta = [];
  ea = tm.createClass({oc:k, Ag:l, init:function(b, f) {
    this.Ag = 3 === b;
    this.oc = [];
    for(var g = 0;g < f;g++) {
      var p = la(b), t = this;
      p.addEventListener("added", function() {
        this.pa = v.Rh;
        a.push(this)
      });
      p.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        t.oc.push(this)
      });
      this.Ag && p.addEventListener("enterframe", function(a) {
        this.setScale((this.si + this.Bg) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.oc.push(p)
    }
  }, fire:function(a, b, g) {
    var p = this.oc.pop();
    if(p === i) {
      return k
    }
    var t = Ma(g);
    p.bc = Math.cos(t) * p.speed;
    p.Eb = Math.sin(t) * p.speed;
    p.setPosition(a, b);
    p.rotation = g + 90;
    return p
  }, Zc:function(a) {
    for(var b = this.oc.length;this.oc[--b] !== i;) {
      this.oc[b].yc = v.Wf + v.Jh * a, this.oc[b].Bg = 0.2 * a
    }
  }})
})();
fa = tm.createClass({superClass:tm.display.Sprite, da:k, ca:k, Jb:0, frame:0, Ug:k, color:k, eg:0, Te:0, ti:l, head:k, sg:k, dg:k, Ua:j, yc:v.Qf, Yc:k, init:function(b, a) {
  this.da = b;
  this.ca = b.ca;
  this.eg = 0 === this.da.style ? 1 : 1.2;
  this.Te = 0 === this.da.style ? 50 : 75;
  var d = this;
  this.Ug = a;
  this.superInit(a.redBody, this.Te, 100);
  this.boundingHeightBottom = 1;
  this.Tj = 0;
  this.origin.y = 1;
  var f = this.dg = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.sg = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.Jb - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.Jb
  };
  this.wd(["red", "green", "blue"][this.da.type]);
  this.Zc(0)
}, wd:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.Ug[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.dg.gotoAndPlay(this.color);
  this.sg.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Yc = k;
  return this
}, Zc:function(b) {
  this.boundingWidth = this.width = this.Te + 30 * b / v.xe;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.yc = this.eg * v.Qf + v.Lh * b;
  0 === b ? this.wd(["red", "green", "blue"][this.da.type]) : this.wd("hyper")
}, be:function(b, a) {
  this.Yc === k && this.jg();
  a = a || this.Jb;
  for(var d = 0;d < b;d++) {
    var f = this.Yc.clone().setPosition(this.x, a).addChildTo(this.ca), g = U(8, 14), p = U(0, Math.PI);
    f.ta = Math.cos(p) * g;
    f.ua = Math.sin(p) * g;
    f.scaleX = f.scaleY = (U(0.5, 1.5) + U(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.ta;
      this.y += this.ua;
      this.ta *= 0.95;
      this.ua *= 0.95
    })
  }
}, Ni:function(b, a, d) {
  this.Yc === k && this.jg();
  for(var f = 0;f < b;f++) {
    var g = this.Yc.clone().setPosition(a, d).addChildTo(this.ca), p = U(12, 20), t = U(0, Math.PI);
    g.ta = Math.cos(t) * p;
    g.ua = Math.sin(t) * p;
    g.scaleX = g.scaleY = (U(1, 3) + U(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.ta;
      this.y += this.ua;
      this.ta *= 0.95;
      this.ua *= 0.95
    })
  }
}, jg:function() {
  this.Yc = "hyper" === this.color ? F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.da.rb) ? (this.Jb = Math.max(0, this.Jb - 40), this.height = this.y - this.Jb, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Jb = this.y - 40;
  this.ti = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Lj:function() {
  return this.Jb
}, oj:function(b) {
  this.Jb = b;
  this.head.update()
}});
fa.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.Jb
});
(function() {
  ka = tm.createClass({superClass:tm.app.Object2D, Ua:j, ca:k, init:function(a, d) {
    this.superInit();
    this.da = a;
    this.ca = d;
    this.Rg = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Rg.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Rg));
    this.ag();
    b === k && (b = F(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ia = 0;
    this.td = 1;
    this.addEventListener("added", function() {
      this.ca.Vc = j;
      this.da.Xc = j;
      this.ca.hb -= 1;
      this.ca.fe = l;
      this.ca.Xd();
      this.ca.Xa("drop BOMBER!!", j);
      H("bomb");
      H("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.Vc = l;
      this.da.Xc = l
    })
  }, ag:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = U(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.td + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.ia;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.ia += 3.6, this.td = -1) : (this.b = 8, this.ia += 1.8, this.td = 1)
  }});
  na = tm.createClass({superClass:ka, init:function(a, b) {
    this.superInit(a, b);
    v.Yg && this.addEventListener("added", function() {
      this.ca.hb = 0
    })
  }, ag:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = U(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.td + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.ia;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.ia += 1.8, this.td = 1)
  }});
  var b = k
})();
oa = tm.createClass({superClass:tm.display.Sprite, bc:0, Eb:0, da:k, ia:0, init:function(b, a, d) {
  this.superInit("bombIcon", 40, 40);
  this.setPosition(b, a);
  this.da = d;
  this.Eb = 1;
  this.bc = 0.5 > w.random() ? -1 : 1;
  this.ia = 0
}, update:function() {
  this.x += this.bc;
  this.y += 2 * this.Eb;
  if(2025 > La(this, this.da)) {
    this.da.ca.qi(1), this.remove()
  }else {
    if(3E3 > this.ia) {
      if(30 > this.x || 450 < this.x) {
        this.bc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.Eb *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.ia += 1
}});
pa = tm.createClass({superClass:tm.display.Sprite, bc:0, Eb:0, da:k, ia:0, init:function(b, a, d) {
  this.superInit("extendItem", 32, 32);
  this.setPosition(b, a);
  this.da = d
}, update:function() {
  this.y += 0.5;
  704 < this.y && this.remove()
}});
B = {setup:function() {
  B.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k, frequency:3}}}, 100, 100));
  B.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  B.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  B.particle16 = F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, be:function(b, a, d) {
  b = B.particle16.clone().setPosition(b, a);
  b.Ua = j;
  b.addChildTo(d);
  d = U(5, 20);
  a = U(Math.PI, 2 * Math.PI);
  b.ta = Math.cos(a) * d;
  b.ua = Math.sin(a) * d;
  b.scaleX = b.scaleY = (U(0.1, 0.5) + U(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.ta;
    this.y += this.ua;
    this.ta *= 0.9;
    this.ua *= 0.9
  })
}, tg:function(b, a, d, f) {
  f = f || 1.8;
  var g = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  g.Ua = j;
  g.addChildTo(d);
  g.image = B.shockwaveImage;
  g.tweener.clear().to({scaleX:f, scaleY:f, alpha:0}, 800, "easeOutQuad").call(function() {
    g.remove()
  })
}, Oi:function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.Ua = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
}, Zd:function(b, a, d, f) {
  H("explode");
  var g = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  g.Ua = j;
  if(f !== i) {
    var p = f.x, t = f.y;
    g.addEventListener("enterframe", function() {
      this.x += p;
      this.y += t;
      p *= 0.99;
      t *= 0.99
    })
  }
  g.addChildTo(d);
  B.tg(b, a, d)
}, Di:function(b, a, d) {
  H("explode");
  var f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.Ua = j;
  f.addChildTo(d);
  f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.Ua = j;
  f.addChildTo(d);
  f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.Ua = j;
  f.addChildTo(d)
}, qb:function(b, a, d) {
  H("explode2");
  H("explode3");
  for(var f = ~~(Math.random() * Na.length), g = 0;20 > g;g++) {
    var p = B.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    p.a = 2 * Math.PI * Math.random();
    p.v = 10 * Math.pow(Na.at(~~(Na.length * g / 20) + f), 2);
    p.Ua = j;
    p.addChildTo(d)
  }
  B.tg(b, a, d, 5)
}, pg:function(b, a, d) {
  H("explode2");
  H("explode3");
  for(var f = ~~(Math.random() * Na.length), g = 0;20 > g;g++) {
    for(var p = 2 * Math.PI * g / 20, t = Math.pow(Na.at(~~(Na.length * g / 20) + f), 2), C = 0;3 > C;C++) {
      var G = 4 * t * (C + 1), r = B.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.ia += 1
      }).setScale(0.3 * (3 - C)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      r.rotation = 2 * Math.random() * Math.PI;
      r.Ua = j;
      r.ia = 0;
      r.a = p;
      r.v = G;
      r.addChildTo(d)
    }
  }
}};
qa = tm.createClass({superClass:tm.app.Object2D, target:k, Fc:0, angle:0, alpha:2, Ua:j, reverse:l, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.Fc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === k) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        F(60, this.alpha, 0.9).setPosition(Math.cos(a) * this.Fc + this.target.x, Math.sin(a) * this.Fc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.Fc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.Fc || 200 < this.Fc) && this.remove()
  }
}});
ja = tm.createClass({superClass:tm.app.Object2D, target:k, angle:0, Ua:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = F(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + V(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + V(-2, 2)).on("enterframe", function() {
        this.x += this.ta;
        this.y += this.ua
      }).addChildTo(this.target.parent);
      a.ta = 3 * Math.cos(this.angle);
      a.ua = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
ra = tm.createClass({superClass:tm.graphics.Canvas, ca:k, Oc:k, Ya:k, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Oc = Oa(200);
  this.Ya = sa(this)
}, update:function() {
  this.clear();
  this.ca.Vb !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Ya.Lb - 20, 470 * this.ca.Vb.pa / this.ca.Vb.mc, 20), this.strokeRect(5, this.Ya.Lb - 20, 470, 20), this.clear(263.5, this.Ya.Lb - 20 + 2, 2, 16), this.clear(52, this.Ya.Lb - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.Ya.Lb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.Na)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.Ea / v.Mf) + 1), this.Ya.md + 192, 22);
  b = [0, 1, 4][this.ca.da.type];
  for(a = 0;a < this.ca.sc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.Da.sb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.qd + " hit", this.Ya.md + 10, 95);
  0 < ~~this.ca.Ea && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.Ea + " HIT!!", 10, 0.5 * -this.Ya.Lb + 115));
  0 === this.frame % 2 && (!this.ca.wa && 0 < this.ca.Ca ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Ca, 5, 637)) : this.ca.wa && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Wd, 5, 637)));
  for(a = 0;a < this.ca.hb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.fe && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Oc.update();
  this.Oc.yf = this.Ya.Lb + 5;
  this.Oc.draw(this);
  this.frame += 1
}});
sa = tm.createClass({superClass:tm.app.Object2D, kb:k, md:0, Lb:0, init:function(b) {
  this.superInit();
  this.kb = b
}});
(function() {
  for(var b = [], a = [], d = 0;3 > d;d++) {
    b[d] = 40 * Math.pow(0.8, d), a[d] = b[d] / 2 * Math.sqrt(3)
  }
  ta = tm.createClass({superClass:tm.graphics.Canvas, sa:k, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.sa = ua();
    this.sa.ga = this;
    this.sa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(d) {
    this.sa.ta = Math.cos(this.sa.direction) * this.sa.speed;
    this.sa.ua = Math.sin(this.sa.direction) * this.sa.speed;
    for(var g = 0;3 > g;g++) {
      for(this.sa.Ab[g] += this.sa.ta * Math.pow(0.8, g);3 * b[g] < this.sa.Ab[g];) {
        this.sa.Ab[g] -= 3 * b[g]
      }
      for(;this.sa.Ab[g] < 3 * -b[g];) {
        this.sa.Ab[g] += 3 * b[g]
      }
      for(this.sa.Bb[g] += this.sa.ua * Math.pow(0.8, g);2 * a[g] < this.sa.Bb[g];) {
        this.sa.Bb[g] -= 2 * a[g]
      }
      for(;this.sa.Bb[g] < 2 * -a[g];) {
        this.sa.Bb[g] += 2 * a[g]
      }
    }
    0 === d % 2 && this.draw()
  }, draw:function() {
    this.sa.background !== k ? this.clearColor(this.sa.background, 0, 0) : this.clear();
    for(var d = 0;3 > d;d++) {
      this.lineWidth = 0.3 * Math.pow(0.8, d);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.6 * Math.pow(0.8, d) + ")"}, {offset:1, color:"rgba(255,255,255," + 0.4 * Math.pow(0.8, d) + ")"}]).toStyle();
      this.beginPath();
      for(var g = 0, p = this.sa.Ab[d] - 3 * b[d];p < 480 + 3 * b[d];p += 1.5 * b[d]) {
        for(var g = 0 === g ? a[d] : 0, t = this.sa.Bb[d] - 2 * a[d] + g;t < 640 + 2 * a[d];t += 2 * a[d]) {
          this.line(p, t, p + b[d], t), this.line(p, t, p - b[d] / 2, t + a[d]), this.line(p, t, p - b[d] / 2, t - a[d])
        }
      }
      this.stroke()
    }
  }});
  ua = tm.createClass({superClass:tm.app.Object2D, Ab:0, Bb:0, direction:0, speed:0, ta:0, ua:0, background:k, init:function() {
    this.superInit();
    this.Ab = [];
    this.Bb = [];
    for(var a = 0;3 > a;a++) {
      this.Ab[a] = 240, this.Bb[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.ua = this.ta = 0
  }})
})();
va = tm.createClass({superClass:tm.display.Sprite, Dg:l, ca:k, da:k, Yb:l, Ec:l, Cf:l, ta:0, ua:0, init:function(b) {
  this.superInit("star", 20, 20);
  (this.Dg = b) && this.setScale(2, 2);
  this.ca = D.Ge;
  this.da = this.ca.da;
  this.addChildTo(this.ca);
  b = 0.5 * w.random() * Math.PI - 0.75 * Math.PI;
  this.ta = 30 * Math.cos(b);
  this.ua = 30 * Math.sin(b)
}, update:function() {
  this.da.rb && (this.Ec = j);
  if(this.da.parent === k) {
    this.Ec = l
  }else {
    if(100 > La(this, this.da)) {
      this.ca.aj(this);
      this.remove();
      return
    }
    1E4 > La(this, this.da) && (this.Ec = j);
    if(this.Cf && this.Ec) {
      var b = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 10 * Math.cos(b);
      this.y += 10 * Math.sin(b)
    }else {
      this.Cf || (this.x += this.ta, this.y += this.ua, this.ta *= 0.8, this.ua *= 0.8, -1 < this.ta && (1 > this.ta && -1 < this.ua && 1 > this.ua) && (this.Cf = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
wa = tm.createClass({superClass:va, Yb:l, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
xa = tm.createClass({superClass:va, Yb:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.Ec || (this.x += this.ca.ga.ta, this.y += this.ca.ga.ua);
  this.superClass.prototype.update.call(this)
}});
za = tm.createClass({da:k, ca:k, $:k, frame:0, init:function(b) {
  this.ca = b;
  this.da = b.da;
  this.xd();
  this.$ = Aa();
  this.frame = 0
}, xd:n(), update:function() {
  this.Ci(this.frame);
  this.frame += 1
}, Ci:function(b) {
  b = this.$.get(b);
  if(b !== k) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(Ba[b.value] !== i) {
        var a = Ba[b.value];
        if(a !== k) {
          if(a[0].Vb === j) {
            this.Hg(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.Hg(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.$.Ef = l
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Hg:function(b) {
  this.ca.Yd += 1;
  b = b.aa(this.ca, b.ba).setPosition(b.x, b.y).addChildTo(this.ca).qf();
  b.zd = this;
  return b
}, Re:function(b) {
  Ca();
  this.ca.ld = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var g = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
      g.ia = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.ia) + 0.5;
        this.ia += 1
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
  a.addChildTo(this.ca.$e);
  H("warning");
  H("voWarning")
}});
za.create = function(b, a) {
  switch(a) {
    case 0:
      return Da(b);
    case 1:
      return Ea(b);
    case 2:
      return Fa(b);
    case 3:
      return Ga(b);
    default:
      h(Error("stageNumber = " + a))
  }
};
Aa = tm.createClass({index:0, data:k, Ef:l, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? k : b.stop === j ? (this.Ef = j, b) : this.Ef ? k : b
}});
Da = tm.createClass({superClass:za, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    J("bgm1", j);
    this.ca.ga.direction = 0.5 * Math.PI;
    this.ca.ga.speed = 8;
    this.ca.ga.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.ca.ga.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.ca.ga.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.Re(function() {
      J("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, xd:function() {
  this.ca.ga.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
Ea = tm.createClass({superClass:za, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    J("bgm2", j);
    this.ca.ga.direction = 0.5 * Math.PI;
    this.ca.ga.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.ca.ga.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.ca.ga.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.ca.ga.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.ca.ga.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.ca.ga.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.ca.ga.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", j);
  this.$.add(300, "heri2-left");
  for(b = 0;12 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.ca.ga.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
    this.Re(function() {
      J("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ca.ga.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, xd:function() {
  this.ca.ga.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
Fa = tm.createClass({superClass:za, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    J("bgm1", j);
    this.ca.ga.direction = 0.5 * Math.PI;
    this.ca.ga.speed = 8;
    this.ca.ga.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "akane-1");
  this.$.add(1, "heri2-center");
  this.$.add(300, "akane-2");
  this.$.add(1, "heri2-left");
  this.$.add(300, "akane-3");
  this.$.add(1, "heri2-right");
  this.$.add(0, function() {
    this.ca.ga.direction = ~~(90 * (Math.PI / 180));
    this.ca.ga.speed = 4;
    this.ca.ga.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "hoshizora_y-1");
  this.$.add(1, "heri2-right");
  this.$.add(100, "yotsuba");
  this.$.add(200, "tankRD-center");
  this.$.add(200, "tankRD-left");
  this.$.add(200, "tankRD-right");
  this.$.add(200, "tankRD-center");
  this.$.add(0, function() {
    this.ca.ga.direction = ~~(180 * (Math.PI / 180));
    this.ca.ga.speed = 4;
    this.ca.ga.tweener.clear().to({speed:4}, 4E3, "easeInOutQuad")
  });
  this.$.add(200, "tankRD-center");
  this.$.add(200, "tankRD-left");
  this.$.add(200, "tankRD-right");
  this.$.add(200, "tankRD-center");
  this.$.add(0, function() {
    this.ca.ga.direction = ~~(180 * (Math.PI / 180));
    this.ca.ga.speed = 4;
    this.ca.ga.tweener.clear().to({speed:4}, 4E3, "easeInOutQuad")
  });
  this.$.add(300, "hoshizora_y-2");
  this.$.add(20, "yayoi-R0");
  this.$.add(1, "yayoi-R2");
  this.$.add(600, function() {
    this.Re(function() {
      J("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.ga.tweener.clear().to({speed:-10}, 5E3, "easeInOutQuad")
  });
  this.$.add(600, "misumi")
}, xd:function() {
  this.ca.ga.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
Ga = tm.createClass({superClass:za, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    J("bgm4", j);
    this.ca.ga.direction = 0.5 * Math.PI;
    this.ca.ga.speed = 1
  });
  this.$.add(200, "tsukikage-r");
  this.$.add(100, "tsukikage-l");
  this.$.add(200, "bukky-4-r");
  this.$.add(150, "heri1-4-left");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-left");
  this.$.add(10, "heri1-4-center");
  this.$.add(100, "komachi4-0");
  this.$.add(120, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(10, "heri1-4-right");
  this.$.add(10, "heri1-4-center");
  this.$.add(100, "bukky-4-l");
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
    this.ca.ga.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 1E4)
  });
  for(b = 0;6 > b;b++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1E3, function() {
    alert("\u4eca\u65e5\u306e\u5b9f\u88c5\u306f\u3053\u3053\u307e\u3067\uff01")
  })
}, xd:function() {
  this.ca.ga.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
function Pa(b, a) {
  if(b.parent === k || a.parent === k) {
    return l
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, g = b.y + b.boundingHeightBottom, p = a.x - a.boundingWidthLeft, t = a.y - a.boundingHeightTop, C = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > p && f < C && g > t
}
;var Qa = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, vj:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.Rc(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
var Ra = tm.createClass({superClass:Qa, titleText:k, menu:k, descriptions:k, showExit:l, title:k, selections:[], description:k, box:k, cursor:k, of:k, _selected:0, _opened:l, _finished:l, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.of = d.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.of !== k && this.parent.of(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), H("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = T(this._selected, 0, this.selections.length - 1), H("select")) : b.keyboard.getKeyDown("up") && 
  (this._selected -= 1, this._selected = T(this._selected, 0, this.selections.length - 1), H("select")))
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
}, Rc:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function Y(b, a, d, f, g) {
  g = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:n()}, g);
  b.vj(Ra(a, d, g), f)
}
;F = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, Se:0.85, size:0, image:k, Ua:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  a !== i && (this.alpha = a);
  d !== i && (this.Se = d);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.Se;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return F(this.size, this.Oj, this.Se, this.image)
}});
ia = tm.createClass({superClass:F, ga:k, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.ga = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.ga.ta;
  this.y += this.ga.ua + 0.3
}, clone:function(b) {
  return ia(this.ga, b)
}});
var Oa = tm.createClass({width:0, label:k, bb:k, ia:0, Og:0, yf:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.bb = [];
  this.Og = 480 - this.width - 5;
  this.yf = 5
}, ri:function(b, a) {
  a === j && (this.bb.clear(), this.bb.push(""));
  5 < this.bb.length && this.bb.splice(1, this.bb.length - 4);
  this.bb.push(b);
  return this
}, vi:function() {
  this.bb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.bb.length) {
    if("" !== this.bb[0]) {
      var a = this.bb[0][0];
      this.bb[0] = this.bb[0].substring(1);
      b += a
    }else {
      this.bb.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.ia % 2 ? "_" : " ");
  this.ia += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.Og, this.yf);
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
var Na = k, Na = function(b) {
  function a(a) {
    if(1 > a) {
      return k
    }
    var f = [], g = Math.random(), p, t;
    for(t = 0;t < b;t += ~~a) {
      p = Math.random();
      for(var m = 0;m < a;m++) {
        f[t + m] = d(g, p, m / a)
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
    var t = a(b / p);
    if(t === k) {
      break
    }
    f.push(t)
  }
  t = [].concat(f[0]);
  g = 1;
  for(p = 0.5;g < f.length;g++, p *= 0.5) {
    for(var C = 0;C < b;C++) {
      t[C] += f[g][C] * p
    }
  }
  for(g = 0;g < t.length;g++) {
    t[g] /= 2
  }
  return t
}(512);
w = {index:-1, data:k, setup:function(b) {
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
K = k;
J = function(b, a) {
  a || Ha();
  var d = tm.asset.AssetManager.get(b);
  d && (K = d.clone(), K.volume = 0.1 * u.gd, K.loop = j, K.play())
};
Ha = function() {
  K !== k && K.stop()
};
Ca = function() {
  if(K !== k) {
    var b = K;
    b.loop = l;
    var a = function() {
      b.volume -= 0.0010;
      0 >= b.volume ? b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
H = function(b) {
  if(0 !== u.Gc && H.played[b] !== u.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * u.Gc, H.Hf !== k && H.Hf.stop(), H.Hf = a) : a.volume = 0.1 * u.Gc);
    H.played[b] = u.frame
  }
};
H.played = {};
H.Hf = k;
(function() {
  var b = k, a = k;
  ca = tm.createClass({superClass:Qa, result:k, ia:0, sd:[], ae:l, wg:k, Fg:0, ge:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.wg = tm.display.Label().setPosition(240, 256).addChildTo(this);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.ae = l;
      for(var a = ("" + Math.floor(u.lc)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.wg.text = "HIGH SCORE: " + b.trim()
    })
  }, Rc:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Zf(80 * Math.cos(0.01 * this.ia) + 240, 80 * Math.sin(0.01 * this.ia) + 320, 0);
    this.Zf(80 * Math.cos(0.01 * this.ia + Math.PI) + 240, 80 * Math.sin(0.01 * this.ia + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.ae && this.Ng();
    this.ia += 1
  }, Zf:function(d, f, g) {
    if(!this.ae) {
      b === k && (b = F(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === k && (a = F(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      g.speed = 0.6;
      var p = U(0, 2 * Math.PI), t = V(0, 20);
      g.setPosition(Math.cos(p) * t + d, Math.sin(p) * t + f);
      var C = this;
      g.update = function() {
        this.x += Math.cos(p) * this.speed;
        this.y += Math.sin(p) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = C.sd.indexOf(this);
          -1 !== a && C.sd.splice(a, 1)
        }
      };
      this.sd.push(g)
    }
  }, Ng:function() {
    var a = ["start", "tutorial", "setting"], b = ["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"];
    0 < u.lc && (a.push("tweet high score"), b.push("Twitter\u3078\u30cf\u30a4\u30b9\u30b3\u30a2\u3092\u6295\u7a3f\u3057\u307e\u3059"));
    Y(this, "MAIN MENU", a, this.gj, {defaultValue:this.Fg, menuDescriptions:b})
  }, gj:function(a) {
    4 !== a && (this.Fg = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.ae = j;
          for(var a = 0, b = this.sd.length;a < b;a++) {
            this.sd[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          u.replaceScene(Ia())
        }.bind(this));
        break;
      case 2:
        this.nc();
        break;
      case 3:
        0 < u.lc && (a = "SCORE:{score} (ship:{type}-{style} stage:{stage} continue:{cont}) TM-Shooter http://goo.gl/GvMQOJ ".format({score:Math.floor(u.lc), zd:u.xg + 1, Fj:u.vg, type:["A", "B", "C"][u.zg], style:["S", "L", "EX"][u.yg]}), a = tm.social.Twitter.createURL({type:"tweet", text:a, hashtags:v.qh, url:window.document.location.href}), window.open(a))
    }
  }, nc:function() {
    Y(this, "SETTING", ["bgm volume", "sound volume"], this.tf, {defaultValue:this.ge, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, tf:function(a) {
    3 !== a && (this.ge = a);
    switch(a) {
      case 0:
        this.uf();
        break;
      case 1:
        this.vf();
        break;
      default:
        this.Ng()
    }
  }, uf:function() {
    Y(this, "BGM VOLUME", "012345".split(""), this.rf, {defaultValue:u.gd, onCursorMove:function(a) {
      K !== k && "exit" !== a && (K.volume = 0.1 * a)
    }, showExit:l})
  }, rf:function(a) {
    6 !== a && (u.gd = a);
    this.nc()
  }, vf:function() {
    Y(this, "SE VOLUME", "012345".split(""), this.sf, {defaultValue:u.Gc, showExit:l})
  }, sf:function(a) {
    6 !== a && (u.Gc = a);
    this.nc()
  }, Rj:function() {
    Y(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.fj, {defaultValue:u.Ye, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, fj:function(a) {
    5 !== a && (u.Ye = a);
    this.nc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  Ia = tm.createClass({superClass:Qa, mode:0, types:k, re:k, wb:k, xb:k, yb:k, jf:k, gf:k, type:0, style:0, ic:l, ie:l, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.qj();
    this.re = this.pj();
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
    this.re.visible = l;
    this.nf(-1, j);
    this.wb.update();
    this.xb.update();
    this.yb.update();
    H("voSelectShip");
    J("bgmShipSelect", j)
  }, qj:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.jf = tm.display.Label("Type-A").setPosition(240, 150);
    this.jf.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.kf = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.kf.update = function() {
      this.kf.text = b[this.type]
    }.bind(this);
    this.kf.addChildTo(a);
    var f = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.wb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.xb = tm.display.AnimationSprite(f, 64, 64).gotoAndPlay("typeB");
    this.yb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.wb.Ka = 0;
    this.xb.Ka = 1;
    this.yb.Ka = 2;
    this.wb.setScale(3).setPosition(0, 320).addChildTo(a);
    this.xb.setPosition(0, 320).addChildTo(a);
    this.yb.setPosition(0, 320).addChildTo(a);
    this.wb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ka / 3 * Math.PI)
    };
    this.xb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ka / 3 * Math.PI)
    };
    this.yb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ka / 3 * Math.PI)
    };
    return a
  }, pj:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.gf = tm.display.Label("Shot Style").setPosition(240, 150);
    this.gf.addChildTo(a);
    this.qc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Ub = tm.app.Object2D();
    this.Ub.addChildTo(this.qc);
    this.Ub.update = function(a) {
      this.Ub.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.ma = [];
    this.ma[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ma[0].update = function() {
      0 === this.type ? this.ma[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.ma[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.ma[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.ma[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ma[1].update = function() {
      0 === this.type ? this.ma[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.ma[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.ma[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.ma[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ma[2].update = function() {
      0 === this.type ? this.ma[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.ma[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.ma[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.ma[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ma[3].update = function() {
      0 === this.type ? this.ma[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.ma[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.ma[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.qc.line = b(0, 0, 0, 130, 8);
    this.qc.line.addChildTo(this.qc);
    this.ma.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Ub)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.hf = tm.display.Label(d[0], 16).setPosition(240, 500);
    this.hf.update = function() {
      this.hf.text = d[this.style]
    }.bind(this);
    this.hf.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.re.visible = l, !this.ie && a.keyboard.getKeyDown("left")) {
        this.nf(-1, l), H("select")
      }else {
        if(!this.ie && a.keyboard.getKeyDown("right")) {
          this.nf(1, l), H("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, H("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.re.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, H("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, H("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (v.If ? this.kj() : (this.ic = j, this.Mg()), H("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.wj(0 === ~~(a.frame / 60) % 2))
    }
  }, kj:function() {
    Y(this, "AUTO BOMB", ["on", "off"], this.bj, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, bj:function(a) {
    2 !== a && (this.ic = 0 === a, this.Mg())
  }, Mg:function() {
    Y(this, "ARE YOU READY?", ["ok"], this.cj, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, cj:function(a) {
    0 === a && this.sj()
  }, nf:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.wb, this.xb, this.yb][this.type].remove().addChildTo(this.types);
    b ? (this.wb.Ka -= a, this.wb.scaleX = 0 === this.type ? 5 : 1, this.wb.scaleY = 0 === this.type ? 5 : 1, this.xb.Ka -= a, this.xb.scaleX = 1 === this.type ? 5 : 1, this.xb.scaleY = 1 === this.type ? 5 : 1, this.yb.Ka -= a, this.yb.scaleX = 2 === this.type ? 5 : 1, this.yb.scaleY = 2 === this.type ? 5 : 1) : (this.ie = j, this.wb.tweener.clear().to({Ka:this.wb.Ka - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.xb.tweener.clear().to({Ka:this.xb.Ka - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.yb.tweener.clear().to({Ka:this.yb.Ka - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.ie = l
    }.bind(this)));
    this.jf.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, sj:function() {
    u.ca.ic = this.ic;
    u.ca.start(this.type, this.style);
    u.replaceScene(u.ca);
    Ca()
  }, wj:function(a) {
    this.gf.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.qc.line.Cb = l, this.ma[0].line.Cb = l, this.ma[1].line.Cb = l, this.ma[2].line.Cb = l, this.ma[3].line.Cb = l) : (this.qc.line.Cb = j, this.ma[0].line.Cb = j, this.ma[1].line.Cb = j, this.ma[2].line.Cb = j, this.ma[3].line.Cb = j);
    a ? (this.ma[0].visible = j, this.ma[1].visible = j, 1 === this.style ? (this.ma[2].visible = l, this.ma[3].visible = l) : (this.ma[2].visible = j, this.ma[3].visible = j), this.qc.line.lineWidth = 5) : (this.ma.each(function(a) {
      a.visible = l
    }), this.qc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, Rc:n()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, Cb:j, init:function(a, b, f, g, p) {
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
    if(this.Cb && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), f = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - f, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - f, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + f, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + f, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
D = tm.createClass({superClass:Qa, da:k, score:0, Ud:0, Na:0, Ea:0, qd:0, Ia:0, jc:0, Df:0, zd:k, ga:k, sc:3, oe:0, pe:0, Ob:0, Yd:0, rd:0, mf:0, ic:l, hb:0, Bc:0, fg:0, Vc:l, fe:l, Nb:0, fb:0, wa:l, od:0, Uc:0, Ca:0, Wd:0, Nj:0, Mj:0, ce:k, qg:k, xf:k, og:k, Ze:k, $e:k, Ue:k, Wi:k, tb:k, kb:k, Vb:k, ld:l, Vi:l, init:function() {
  D.Ge !== k && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  D.Ge = this;
  this.kb = ra(this);
  this.kb.Ya.addChildTo(this);
  this.ga = ta().sa;
  this.ga.addChildTo(this);
  this.ce = D.gc().addChildTo(this);
  this.qg = D.gc().addChildTo(this);
  this.og = D.gc().addChildTo(this);
  this.Ze = D.gc().addChildTo(this);
  this.xf = D.gc().addChildTo(this);
  this.$e = D.gc().addChildTo(this);
  this.Ue = D.gc().addChildTo(this);
  this.Wi = D.Rf(this).addChildTo(this);
  tm.cb.tc.kd.cg = this;
  this.tb = tm.app.Object2D();
  this.tb.addChildTo(this);
  this.tb.update = function(b) {
    this.ij(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.kb.clear()
  })
}, addChild:function(b) {
  b.Ua ? this.Ze.addChild(b) : b instanceof O ? this.Ue.addChild(b) : b instanceof va ? this.ce.addChild(b) : b instanceof P ? b.Yb ? this.ce.addChild(b) : this.og.addChild(b) : b instanceof da ? this.xf.addChild(b) : b === this.tb || b === this.ga || b instanceof D.gc || b instanceof D.Rf || b instanceof sa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(b)))
}, update:function(b) {
  this.nj(b.keyboard);
  this.zd.update(b.frame);
  0 === b.frame % 2 && this.kb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(ca()), Ha()) : b.keyboard.getKeyDown("space") ? this.je(0) : b.keyboard.getKeyDown("p") && (this.Sg().saveAsImage(), this.je(0))
}, Sg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.ga.ga.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.kb.element, 0, 0);
  return b
}, ij:function() {
  this.da.Wb === l && z.erase();
  var b;
  b = [].concat(P.Ta);
  for(var a = [].concat(la.Ta), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var g = b[f], p = a[d];
      if(!(0 >= g.pa) && Pa(g, p) && (p.be(1), p.remove(), g.Xb(p.yc))) {
        this.Ob += 1;
        this.wa ? this.ab(v.Ch) : this.ab(v.Bh);
        this.pf(g);
        break
      }
    }
  }
  p = this.da.Zb;
  if(this.da.rb) {
    b = [].concat(P.Ta);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(g = b[f], !(0 >= g.pa) && Pa(g, p)) {
        p.oj(g.y + g.boundingHeightBottom);
        g.Xb(p.yc) ? (this.Ob += 1, this.wa ? this.ab(v.Ah) : this.ab(v.xh), this.pf(g)) : (this.wa ? this.Mc(0.01 * this.Ca) : this.Mc(0.01), this.Ia = Math.min(this.Ia + 0.02, 1), this.wa ? this.ab(v.zh) : this.ab(v.yh));
        p.be(2);
        break
      }
    }
    a = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(P.Ta);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.pa) && Pa(g, a) && (g.Xb(p.yc) ? (this.Ob += 1, this.wa ? this.ab(v.wh) : this.ab(v.th), this.pf(g)) : (this.wa ? this.Mc(0.01 * this.Ca) : this.Mc(0.01), this.Ia = Math.min(this.Ia + 0.02, 1), this.wa ? this.ab(v.vh) : this.ab(v.uh)), p.Ni(2, this.da.x, this.da.y - 30))
    }
  }
  if(this.Vc) {
    z.erase();
    b = [].concat(P.Ta);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.pa) && (g.Va() && g.Xb(v.$g)) && (this.xc(g.score), this.Ob += 1)
    }
    this.Ia = this.Ea = 0
  }
  if(this.wa) {
    f = [].concat(la.Ta);
    for(g = f.length;f[--g] !== i;) {
      if(p = f[g], !(0 >= p.pa)) {
        a = [].concat(O.Ta);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== l && (0 < p.pa && Pa(p, d)) && (d.pa -= 6 - this.fb, 0 > d.pa && (d.Ba(), this.xc(v.eh), this.Mc(v.bh), this.ug(l, l, d.x, d.y, 1)), p.pa -= 1)
        }
      }
    }
  }
  if(this.ld) {
    z.erase()
  }else {
    if(this.da.parent !== k && this.da.Xc === l && this.Vc === l && 0 >= this.od && !v.Oh) {
      for(f = O.Ta.length;O.Ta[--f] !== i;) {
        if(b = O.Ta[f], b.visible !== l && Pa(b, this.da)) {
          this.da.Xb();
          0 < this.hb && this.ic ? (this.fb = T(this.fb - 1, 0, 1), this.ed(-0.01), na(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.Jg();
          break
        }
      }
      for(f = P.Ta.length;P.Ta[--f] !== i;) {
        if(g = P.Ta[f], !(0 >= g.pa) && !g.Yb && Pa(g, this.da)) {
          this.da.Xb();
          0 < this.hb && this.ic ? (this.fb = T(this.fb - 1, 0, 1), this.ed(-0.01), na(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.Jg();
          break
        }
      }
    }
    this.wa && (this.Uc -= 1, 0 >= this.Uc && this.Xd());
    this.od = Math.max(this.od - 1, 0);
    this.Ia -= v.ih * v.jh;
    0 >= this.Ia && (this.Ia = 0, this.wa || 0 < this.Ca ? this.jc = this.Ea = this.Na = 0 : (0 < this.Ea && (0 >= this.jc && (this.jc = this.Ea * v.hh), this.Na = this.Na * (this.Ea - this.jc) / this.Ea, this.Ea -= this.jc), 0 >= this.Ea && (this.jc = this.Ea = this.Na = 0)));
    this.fe && (this.score += v.Nh)
  }
}, pf:function(b) {
  this.ug(b.Yb, this.wa || La(b, this.da) < v.kh, b.x, b.y, b.star, b instanceof Ja);
  this.Mc(v.Ih[this.Wd]);
  for(var a = this.Na, d = ~~(this.Ea / v.Mf) + 1, f = 0;f < d;f++) {
    a += b.score, this.xc(a)
  }
  this.Na += b.score * d
}, ug:function(b, a, d, f, g, p) {
  b = b ? xa : wa;
  for(var t = 0;t < g;t++) {
    var C = b(a);
    C.setPosition(d, f);
    p && (C.Ec = j)
  }
}, aj:function(b) {
  H("star");
  b.Dg ? (this.pe += 1, this.Na += v.Yh, this.xc(v.bi + this.Na * v.$h), this.wa ? this.ab(v.Gh) : this.ab(v.Fh)) : (this.oe += 1, this.Na += v.Xh, this.xc(v.ai + this.Na * v.Zh), this.wa ? this.ab(v.Eh) : this.ab(v.Dh))
}, start:function(b, a) {
  this.kb.Oc.vi().clear();
  this.Ud = this.score = 0;
  this.sc = v.Pf;
  this.hb = this.Bc = v.Of[a];
  this.fg = v.ah[a];
  this.Ca = this.fb = this.Nb = 0;
  this.Xd();
  this.Vc = l;
  this.rd = this.mf = 0;
  this.da = da(this, b, a);
  this.Bf(v.Kh);
  q.Da.sb.$ex = 2 !== a ? 0 : 1;
  this.Tg(0);
  H("voLetsGo");
  this.uj()
}, Tg:function(b) {
  this.Xa("3...2...1...");
  this.da.parent !== k && this.da.remove();
  P.hd();
  la.hd();
  z.hd();
  this.ce.removeChildren();
  this.Ze.removeChildren();
  this.$e.removeChildren();
  this.xf.removeChildren();
  this.Ue.removeChildren();
  this.tb.removeChildren();
  this.Ob = this.Yd = this.pe = this.oe = this.qd = this.Ia = this.Ea = this.Na = 0;
  this.Vb = k;
  this.Vi = this.ld = l;
  this.rd = 0;
  this.kb.Ya.md = 0;
  this.fb = this.kb.Ya.Lb = 0;
  this.Df = b;
  this.zd = za.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.lf()
  }.bind(this));
  this.ga.tweener.clear()
}, lf:function() {
  this.Xa("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Zb.addChildTo(this);
  this.da.Wb = l;
  this.da.Xc = j;
  this.da.Tc = l;
  this.da.rb = l;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.fd = this.Wb = j
  }.bind(this.da)).wait(v.Mh).call(function() {
    this.Xc = l
  }.bind(this.da))
}, Jg:function() {
  B.Zd(this.da.x, this.da.y, this);
  this.Xa("I was shot down.");
  this.da.Wb = l;
  this.da.remove();
  this.sc -= 1;
  this.Ca = this.jc = this.Ea = this.Ia = 0;
  this.rd += 1;
  this.mf += 1;
  this.fb = T(this.fb - 3, 0, 1);
  this.ed(-0.03);
  0 < this.sc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.ic || !v.If) {
      this.Bc = Math.min(this.Bc + 1, this.fg)
    }
    this.hb = this.Bc;
    this.lf()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.mj()
  }.bind(this))
}, Bf:function(b) {
  var a = 0.02 * Math.max(0, u.Ye - 1) + (2 !== this.da.style ? 0 : 0.1);
  q.Da.sb.$rank = T(b, a, 0.5)
}, ed:function(b) {
  this.Bf(q.Da.sb.$rank + b)
}, Li:function() {
  this.Xa("System rebooted.", j);
  this.score = 0;
  this.Ud += 1;
  this.sc = v.Pf;
  this.hb = this.Bc = v.Of[this.da.style];
  this.fb = 0;
  this.Bf(0);
  this.lf()
}, wi:function() {
  J("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.tb);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(Ka(this, this.Sg()));
    b.remove()
  }.bind(this))
}, Mi:function() {
  Ha();
  this.app.replaceScene(Sa())
}, Kj:n(), xc:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < v.Nf.length;b++) {
    var d = v.Nf[b];
    a < d && d <= this.score && this.Fi()
  }
  u.lc = Math.max(u.lc, this.score);
  u.lc === this.score && (u.xg = this.Df, u.zg = this.da.type, u.yg = this.da.style, u.vg = this.Ud)
}, Mc:function(b) {
  this.jc = 0;
  this.Ea += b;
  this.qd = Math.max(this.qd, this.Ea);
  1 <= b && (this.Ia = 1)
}, ab:function(b) {
  if(this.Ca !== v.xe) {
    for(b *= v.Hh;1 < b;) {
      qa(this.da).addChildTo(this), b -= 1, this.Nb = 0, this.Ca += 1, 1 === this.Ca ? (this.Xa("HYPER SYSTEM, stand by.", j), H("voHyperStandBy")) : (this.Xa("HYPER SYSTEM, ready.", j), H("voHyperReady"))
    }
    this.Nb = T(this.Nb + b, 0, 1);
    1 <= this.Nb && (qa(this.da).addChildTo(this), this.Ca += 1, this.Nb -= 1, 1 === this.Ca ? (this.Xa("HYPER SYSTEM, stand by.", j), H("voHyperStandBy")) : (this.Xa("HYPER SYSTEM, ready.", j), H("voHyperReady")))
  }
}, tj:function() {
  0.5 > Math.random() ? (this.Xa("HYPER SYSTEM start!!", j), H("voHyperStart0")) : (this.Xa("start counting to system limit.", j), H("voHyperStart1"));
  this.fb = T(this.fb + 1, 0, 5);
  this.ed(0.01 * this.Ca);
  q.Da.sb.$hyperOff = v.nh * (2 !== this.da.style ? 1 : 0.5);
  this.Uc = v.Gd;
  this.od = v.Gd * v.sh;
  this.da.de.Zc(this.Ca);
  this.da.Zb.Zc(this.Ca);
  this.da.Pc = this.da.de;
  B.Oi(this.da.x, this.da.y, this);
  this.wa = j;
  this.Wd = this.Ca;
  this.Nb = this.Ca = 0;
  z.erase(j, j)
}, Xd:function() {
  this.wa !== l && (this.wa = l, qa(this.da, j).addChildTo(this), this.da.Pc = this.da.Lg, q.Da.sb.$hyperOff = 1 * (2 !== this.da.style ? 1 : 0.5), this.da.de.Zc(0), this.da.Zb.Zc(0), this.od = v.Gd * v.rh, this.Wd = this.Uc = 0, z.erase())
}, qi:function() {
  H("decision");
  H("voGetBomb");
  this.hb = Math.min(this.hb + 1, this.Bc);
  this.fe = this.hb === this.Bc
}, Fi:function() {
  H("voExtend");
  this.Xa("extended.");
  this.sc += 1
}, Xa:function(b, a) {
  this.kb.Oc.ri(b, a)
}, je:function(b) {
  Y(this, "PAUSE", ["resume", "setting", "exit game"], this.hj, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:l})
}, hj:function(b) {
  switch(b) {
    case 1:
      this.nc();
      break;
    case 2:
      this.lj()
  }
}, nc:function() {
  Y(this, "SETTING", ["bgm volume", "sound volume"], this.tf, {defaultValue:this.ge, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, tf:function(b) {
  3 !== b && (this.ge = b);
  switch(b) {
    case 0:
      this.uf();
      break;
    case 1:
      this.vf();
      break;
    default:
      this.je()
  }
}, lj:function() {
  Y(this, "REARY?", ["yes", "no"], this.dj, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:l})
}, dj:function(b) {
  0 === b ? (Ha(), this.app.replaceScene(ca())) : this.je(1)
}, uf:function() {
  Y(this, "BGM VOLUME", "012345".split(""), this.rf, {defaultValue:u.gd, onCursorMove:function(b) {
    K !== k && 6 !== b && (K.volume = 0.1 * b)
  }, showExit:l})
}, rf:function(b) {
  6 !== b && (u.gd = b);
  this.nc(1)
}, vf:function() {
  Y(this, "SE VOLUME", "012345".split(""), this.sf, {defaultValue:u.Gc, showExit:l})
}, sf:function(b) {
  6 !== b && (u.Gc = b);
  this.nc(1)
}, mj:function() {
  Y(this, "CONTINUE?", ["yes", "no"], this.ej, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:l})
}, ej:function(b) {
  switch(b) {
    case 0:
      this.Li();
      break;
    case 1:
      this.Mi()
  }
}, Rc:n(), rj:function() {
  this.kb.Ya.tweener.clear().to({md:-480}, 1600, "easeInBack").to({Lb:30}, 800, "easeInOutBack")
}, Qi:function() {
  this.kb.Ya.tweener.clear().to({Lb:0}, 800, "easeInOutBack").to({md:0}, 1600, "easeOutBack")
}, ud:k, vd:0, pd:k, Id:0, uj:function() {
  if(1 === this.Id) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.pd = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.ud = [];
    this.vd = 0
  }else {
    if(2 === this.Id && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.pd = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.pd.push(d[f])
        }
      }
    }
  }
}, nj:function(b) {
  if(1 === this.Id) {
    1E3 < this.ud.length && (console.log("save"), localStorage.setItem("rec" + this.vd, this.ud), localStorage.setItem("recCount", this.vd), this.ud = [], this.vd += 1), this.ud.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Id && this.pd) {
      var a = this.pd.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      })
    }
  }
}});
D.gc = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
D.Rf = tm.createClass({superClass:tm.display.CanvasElement, ca:k, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.zi(b);
  this.Ai(b)
}, zi:function(b) {
  if(0 < this.ca.Ia) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.Ia) + "," + ~~Math.min(255, 512 * this.ca.Ia) + ",0.5)";
    var a = 500 * this.ca.Ia;
    b.fillRect(465, 635 - a, 10, a)
  }
}, Ai:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.Ca === v.xe ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.Nb && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.Nb, 9))
}});
D.Ge = k;
Ka = tm.createClass({superClass:Qa, ca:k, Qg:k, tb:k, values:k, labels:k, ee:k, Pg:[v.Vh, v.Wh, v.Sh, v.Th, 1], Cg:k, zf:k, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ca.oe, this.ca.pe, ~~(100 * (this.ca.Ob / this.ca.Yd)), this.ca.qd, 0 === this.ca.rd ? v.Uh : 0];
  this.ee = this.values.map(function(a) {
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
  this.Cg = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.zf = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.zf.visible = l;
  this.Qg = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var g = 0;16 > g;g++) {
      f[d][g] = {Af:0, me:0, bc:U(-2, 2), Eb:U(1, 4)}
    }
  }
  this.tb = tm.app.Object2D();
  this.tb.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var g = 0;g < f[d].length;g++) {
        var r = f[d][g];
        640 > 40 * g + r.me && (a.drawImage(this.Qg.element, 40 * d, 40 * g, 40, 40, 40 * d + r.Af, 40 * g + r.me, 40, 40), r.Af += r.bc, r.me += r.Eb, r.Eb += 0.3, b = l)
      }
    }
    this.wait = 60;
    b && this.tb.remove();
    a.restore()
  }.bind(this);
  this.tb.addChildTo(this);
  this.addEventListener("exit", function() {
    Ca()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      H("star"), this.values[a] <= this.ee[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.xc(this.values[a] * this.Pg[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.xc(this.ee[a] * this.Pg[a]), this.values[a] -= this.ee[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.Cg.text = Math.floor(this.ca.score)
    }else {
      if(this.zf.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        H("decision"), this.ca.Tg(this.ca.Df + 1), b.popScene()
      }
    }
    this.frame += 1
  }
}, Rc:n()});
var Sa = tm.createClass({superClass:Qa, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(ca())
    }.bind(this))
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c")) && b.replaceScene(ca())
}, Rc:function(b) {
  b.clearColor("black")
}});
tm.createClass({superClass:Qa, init:function() {
  this.superInit()
}, update:n()});
(function() {
  P = tm.createClass({superClass:tm.display.CanvasElement, name:k, da:k, ca:k, zd:k, pa:0, mc:0, score:0, Yb:l, erase:l, star:1, Ui:l, ib:j, Oa:l, frame:0, se:k, direction:0, speed:0, ja:k, init:function(a, d, f) {
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
    this.ib = j;
    this.ca = a;
    this.da = a.da;
    this.score = 100;
    this.erase = l;
    this.pi(f);
    d.setup(this);
    this.altitude = this.Yb ? 1 : 10;
    this.se = {x:0, y:0}
  }, qf:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, Qj:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Oa === l && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Oa = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Yb && (this.x += this.ca.ga.ta, this.y += this.ca.ga.ua);
    this.Oa && (this.frame += 1);
    this.se.x = this.x - a;
    this.se.y = this.y - b
  }, Xb:function(a) {
    if(!this.Oa) {
      return l
    }
    this.pa -= a;
    if(0 >= this.pa) {
      return a = U(0, 5), 2 > a ? this.ca.Xa("enemy destroy.") : 4 > a ? this.ca.Xa(this.name + " destroy.") : this.ca.Xa("ETR reaction gone."), this.erase && z.erase(j, this.ca.wa, this instanceof Ja), this.dispatchEvent(tm.event.Event("destroy")), this.Ba(), j
    }
    40 > this.pa && this.Wa();
    return l
  }, Ba:function() {
    B.Zd(this.x, this.y, this.ca, this.se);
    this.remove()
  }, Va:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, jj:function() {
    return this.ib
  }, Wa:n(), pi:function(a) {
    this.name = a;
    a = P.lh[a];
    this.pa = this.mc = a[0];
    this.score = a[1];
    this.Yb = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, Sc:function() {
    this.remove();
    this.ca.qg.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && B.Zd(this.x + V(-100, 100), this.y + V(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      B.pg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, gg:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && B.Zd(this.x + V(-100, 100), this.y + V(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      B.pg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  P.hd = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = P.Ta = []
})();
Ja = tm.createClass({superClass:P, Ui:j, mc:0, ne:k, init:function(b, a, d) {
  this.ne = a;
  this.superInit(b, this.ne[0], d);
  this.mc = this.pa;
  this.addEventListener("added", function() {
    this.ca.Vb = this;
    this.ca.rj();
    this.tweener.wait(1E3).call(function() {
      this.ca.ld = l
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.Vb = k;
    this.ca.Qi();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.wi()
    }.bind(this));
    a.addChildTo(this.ca.tb)
  })
}, Xb:function(b) {
  var a = this.pa;
  if(P.prototype.Xb.call(this, b)) {
    return this.ca.ld = j, this.ca.da.fd = l, Ca(), j
  }
  this.pa <= 0.55 * this.mc && 0.55 * this.mc < a ? (S.qe(this), this.clearEventListener("completeattack"), this.tweener.clear(), B.qb(this.x, this.y, this.ca), z.erase(j, this.ca.wa), this.ne[1].setup(this)) : this.pa <= 0.1 * this.mc && 0.1 * this.mc < a && (S.qe(this), this.clearEventListener("completeattack"), this.tweener.clear(), B.qb(this.x, this.y, this.ca), z.erase(j, this.ca.wa), this.ne[2].setup(this), H("voJacms"))
}});
(function() {
  P.lh = {kujo:[2, 300, l, l, 1, {radius:24}], kiryu:[3, 400, l, l, 1, {radius:24}], natsuki:[5, 900, j, l, 1, {radius:24}], kise:[50, 15E3, j, l, 1, {radius:24}], yamabuki:[100, 15E3, j, l, 1, {width:70, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, l, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, l, l, 5, {width:100, height:20}], kurokawa:[35, 5E3, l, l, 5, {width:100, height:20}], akimoto:[250, 3E5, l, j, 10, {width:200, 
  heightBottom:10, heightTop:60}], yukishiro:[750, 8E5, l, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, l, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, l, j, 20, {width:300, height:80}], hyuga:[6E3, 3E6, l, j, 0, {width:240, height:80}], erika:[30, 500, l, l, 1, {width:24, height:48}], hino:[30, 500, l, l, 1, {width:24, height:48}], hoshizora_y:[100, 500, l, j, 30, {width:128, height:64}], hoshizora_t:[150, 500, l, j, 30, {width:128, height:64}], yotsuba:[300, 3E4, l, j, 30, {width:64, height:64}], 
  yotsubaLeaf:[300, 1E4, l, l, 10, {width:32, height:32}]};
  P.na = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.fa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    P.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  P.qa = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.fa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    P.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  P.ea = tm.createClass({superClass:P, Oe:k, Pe:k, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.Oe = b("tex_tank1", 64, 64);
    this.Pe = b("tex_tank1", 64, 64);
    this.zc = this.zc || 0;
    this.Kb = this.Kb || 0
  }, update:function(a) {
    P.prototype.update.call(this, a);
    for(a = this.zc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.Kb;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.Oe.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.Pe.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Oe.draw(a);
    this.Pe.draw(a)
  }, Ba:function() {
    B.Di(this.x, this.y, this.ca);
    this.remove()
  }});
  P.Kf = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, Wa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.ac() : 5 === a.app.frame % 30 && this.fa.$b()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    B.qb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.$a = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, Wa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.ac() : 5 === a.app.frame % 30 && this.fa.$b()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    B.qb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.dc = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, Wa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.ac() : 5 === a.app.frame % 30 && this.fa.$b()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    B.qb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.fc = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(1)
  }, Wa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.ac() : 5 === a.app.frame % 30 && this.fa.$b()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    this.Sc()
  }});
  P.Aj = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "aono");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(1)
  }, Wa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.ac() : 5 === a.app.frame % 30 && this.fa.$b()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    this.Sc()
  }});
  P.za = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, Wa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.ac() : 5 === a.app.frame % 30 && this.fa.$b()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    B.qb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.Kd = tm.createClass({superClass:P, fa:k, init:function(a, b) {
    this.superInit(a, b, "hanasaki")
  }, Wa:n(), Ba:function() {
    B.qb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  P.Ae = tm.createClass({superClass:P, init:function(a, b) {
    this.superInit(a, b, "myodoin")
  }, Wa:n(), Ba:function() {
    B.qb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  P.Fb = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(4)
  }, Wa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.ac() : 5 === a.app.frame % 30 && this.fa.$b()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    B.qb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.xa = tm.createClass({superClass:P, init:function(a, d) {
    this.superInit(a, d, "hino");
    this.fa = b("hino", 64, 32).setFrameIndex(0);
    this.boundingWidth = 64;
    this.boundingHeightBottom = 0;
    this.boundingHeightTop = 32;
    this.fa.setScale(1, 3);
    this.wf = 0
  }, update:function(a) {
    0 == this.wf && this.wf++;
    P.prototype.update.call(this, a)
  }, draw:function(a) {
    this.fa.draw(a)
  }, Va:function() {
    return 0 == this.wf ? l : P.prototype.Va.call(this)
  }});
  P.Kg = tm.createClass({superClass:P, init:function(a, d) {
    this.superInit(a, d, "hoshizora_y");
    this.fa = b("hoshizora_y", 256, 128).setFrameIndex(0);
    this.boundingWidth = 256;
    this.boundingHeightBottom = 16;
    this.boundingHeightTop = 64
  }, update:function(a) {
    this.Va() || (0 > this.x && this.fa.setFrameIndex(0), 480 < this.x && this.fa.setFrameIndex(1));
    P.prototype.update.call(this, a)
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    this.Sc()
  }, Va:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 || 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  P.he = tm.createClass({superClass:P, init:function(a, d) {
    this.superInit(a, d, "hoshizora_t");
    this.fa = b("hoshizora_t", 64, 128).setFrameIndex(0);
    this.boundingWidth = 128;
    this.boundingHeightBottom = 16;
    this.boundingHeightTop = 32
  }, update:function(a) {
    P.prototype.update.call(this, a)
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    this.Sc()
  }, Va:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 || 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  P.te = tm.createClass({superClass:P, init:function(a, b) {
    this.superInit(a, b, "yotsuba")
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, Ba:function() {
    B.qb(this.x, this.y, this.ca);
    pa(this.x, this.y).addChildTo(this.parent);
    this.remove()
  }, qf:function() {
    P.prototype.qf.call(this);
    return this
  }});
  P.Zg = tm.createClass({superClass:P, init:function(a, b) {
    this.superInit(a, b, "yotsubaLeaf")
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, Ba:function() {
    B.qb(this.x, this.y, this.ca);
    this.remove()
  }});
  P.bd = tm.createClass({superClass:P, init:function(a, b) {
    this.superInit(a, b, "erika")
  }, Wa:n(), draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, Ba:function() {
    B.qb(this.x, this.y, this.ca);
    oa(this.x, this.y, this.da).addChildTo(this.parent);
    this.remove()
  }});
  P.ye = tm.createClass({superClass:P, fa:k, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Wa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.ac() : 5 === a.app.frame % 30 && this.fa.$b()
    })
  }, Ba:function() {
    this.Sc()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  P.Ce = tm.createClass({superClass:Ja, fa:k, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, Wa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.ac() : 5 === a.app.frame % 30 && this.fa.$b()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Ba:function() {
    this.gg()
  }});
  P.Be = tm.createClass({superClass:P, init:function(a, b) {
    this.superInit(a, b, "mishou")
  }, Wa:n(), Ba:function() {
    this.Sc()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  P.ci = tm.createClass({superClass:Ja, init:function(a, b) {
    this.superInit(a, b, "hyuga")
  }, Wa:n(), Ba:function() {
    this.gg()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, Ff:k, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.Ff = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, ac:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.Ff + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }, $b:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.Ff;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }})
})();
(function() {
  S = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      S.qe(this)
    })
  }});
  S.Aa = function(a, b) {
    var g = z[b].Vd();
    a.on("enterframe", g);
    a.on("completeattack", function() {
      g.stop = j
    })
  };
  S.qe = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, g = a.length;b < g;b++) {
        a[b] && a[b].ef && (a[b].stop = j)
      }
    }
  };
  S.na = tm.createClass({superClass:S, pattern:k, init:function(a) {
    this.superInit();
    this.pattern = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    var b = this.pattern;
    a.on("launch", function() {
      var a = w.randf(64, 192);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        S.Aa(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  S.Rb = S.na("basic0-0");
  S.Pa = S.na("basic1-2");
  S.Ga = tm.createClass({superClass:S, init:function() {
    this.superInit()
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.on("launch", function() {
      var a = w.randf(192, 320);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        S.Aa(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  S.Ga = S.Ga();
  S.ec = tm.createClass({superClass:S, init:function() {
    this.superInit()
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.on("launch", function() {
      var a = w.randf(448, 576);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        S.Aa(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  S.ec = S.ec();
  S.qa = tm.createClass({superClass:S, le:k, init:function(a) {
    this.superInit();
    this.le = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.le = this.le;
    a.tweener.wait(w.rand(0, 1E3)).call(function() {
      this.speed = 6;
      S.Aa(this, this.le);
      this.on("enterframe", function() {
        this.y < this.da.y && this.Oa && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = T(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.Va() && this.Oa && this.remove();
        if(22500 > La(this, this.da) || this.y > this.da.y + 150) {
          this.ib = l
        }
      })
    }.bind(a))
  }});
  S.Qa = S.qa("basic1-0");
  var b = tm.createClass({superClass:S, init:function(a, b, g) {
    this.superInit();
    this.Ti = a;
    this.Si = b;
    this.Nc = g
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.speed = this.Ti;
    a.zc = this.Si;
    this.Nc && (a.Nc = [].concat(this.Nc));
    a.Kb = 0;
    a.on("enter", function() {
      S.Aa(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.zc) * this.speed;
      this.y += Math.sin(this.zc) * this.speed;
      this.Oa && !this.Va() && this.remove();
      for(this.Kb = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.Kb;) {
        this.Kb += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.Kb;) {
        this.Kb -= 2 * Math.PI
      }
      this.ib = this.y < this.da.y && 4E4 < La(this, this.da);
      if(this.Nc) {
        for(var a = 0;a < this.Nc.length;a++) {
          var b = this.Nc[a];
          b.frame === this.frame && this.tweener.to({zc:b.dir !== i ? b.dir : this.zc, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  S.Hb = b(1, 0.25 * Math.PI);
  S.Bj = b(1, -1.75 * Math.PI);
  S.cd = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  S.ka = b(1.6, 0.5 * Math.PI);
  S.Ib = b(1.6, -0.5 * Math.PI);
  S.gh = tm.createClass({superClass:S, ya:k, init:function(a) {
    this.superInit();
    this.ya = a
  }, setup:function(a) {
    S.Aa(a, this.ya);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  S.Lf = S.gh("bukky-4-0");
  b = tm.createClass({superClass:S, ya:k, kg:l, init:function(a, b) {
    this.superInit();
    this.ya = a;
    this.kg = !!b
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.ya = this.ya;
    a.on("enter", function() {
      S.Aa(this, this.ya)
    });
    a.on("enterframe", function() {
      this.Oa && !this.Va() && this.remove()
    });
    if(!this.kg) {
      a.on("enterframe", function() {
        this.ib = this.y < this.da.y && 4E4 < La(this, this.da)
      })
    }
  }});
  S.mb = b("basic3-0", l);
  S.nb = b("basic3-1", l);
  S.Gb = b("cannon2-0", j);
  S.Cd = b("cannon3-0", j);
  S.ve = b("cannon5-0", j);
  b = tm.createClass({superClass:S, velocityY:0, ya:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.ya = b
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ja = [this.ya];
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      S.Aa(this, this.ja[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      384 < this.y && S.qe(this);
      this.Oa && !this.Va() && this.remove();
      this.ib = this.y < this.da.y
    })
  }});
  S.uc = b(0.5, "kurokawa-1");
  S.Ph = b(0.5, "kurokawa-4");
  S.wc = tm.createClass({superClass:S, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      S.Aa(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  S.vc = tm.createClass({superClass:S, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      S.Aa(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  var a = tm.createClass({superClass:S, velocityY:0, ya:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.ya = b
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ja = [this.ya];
    a.tweener.clear().call(function() {
      S.Aa(this, this.ja[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Oa && !this.Va() && this.remove();
      this.ib = this.y < this.da.y
    })
  }});
  S.xa = a(0.5, "akane");
  a = tm.createClass({superClass:S, velocityX:0, ya:k, init:function(a, b) {
    this.superInit();
    this.velocityX = a;
    this.ya = b
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ja = [this.ya];
    a.tweener.clear().call(function() {
      S.Aa(this, this.ja[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Oa && !this.Va() && this.remove();
      this.ib = this.y < this.da.y
    })
  }});
  S.Zi = a(1, "miyuki_y");
  S.$i = a(-1, "miyuki_y");
  tm.createClass({superClass:S, velocityX:0, ya:k, init:function(a, b) {
    this.superInit();
    this.velocityX = a;
    this.ya = b
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ja = [this.ya];
    a.tweener.clear().call(function() {
      S.Aa(this, this.ja[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Oa && !this.Va() && this.remove();
      this.ib = this.y < this.da.y
    })
  }});
  S.Yi = a(0.5, "miyuki_t");
  S.Yi = a(-0.5, "miyuki_t");
  a = tm.createClass({superClass:S, velocityX:0, ya:k, init:function() {
    this.superInit();
    this.ya = "alice"
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.velocityY = 0.5;
    a.ja = [this.ya];
    a.tweener.clear().call(function() {
      S.Aa(this, this.ja[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Oa && !this.Va() && this.remove();
      this.ib = this.y < this.da.y
    })
  }});
  S.te = a();
  tm.createClass({superClass:S, ya:k, init:function() {
    this.superInit();
    this.ya = "aliceLeaf"
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ja = [this.ya];
    a.tweener.clear().call(function() {
      S.Aa(this, this.ja[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.Oa && !this.Va() && this.remove();
      this.ib = this.y < this.da.y
    })
  }});
  S.Zg = a();
  S.Sf = b(0.3, "komachi-1");
  S.Hd = b(0.5, "komachi-2");
  S.Tf = b(0.5, "komachi-4");
  S.bd = tm.createClass({superClass:S, init:function() {
    this.superInit()
  }, setup:function(a) {
    S.Aa(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.ib = this.Oa
    })
  }});
  S.bd = S.bd();
  b = tm.createClass({superClass:S, ja:k, init:function(a) {
    this.superInit();
    this.ja = a
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.ad = l;
    a.Dc = l;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.ad = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, d = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.ad === l || 0 >= this.pa) && 1500 < this.frame && this.Dc === l) {
        this.Dc = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.pa) && !this.Dc) {
        var a = this.ja.shift();
        S.Aa(this, a);
        this.ja.push(a)
      }
    })
  }});
  S.ye = b(["honoka-1"]);
  S.Ce = tm.createClass({superClass:S, ja:k, init:function() {
    this.superInit();
    this.ja = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.ad = l;
    a.Dc = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.ad = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, d = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.pa) && !this.Dc) {
        var a = this.ja.shift();
        S.Aa(this, a);
        this.ja.push(a)
      }
    })
  }});
  S.Qh = S.Ce();
  S.De = tm.createClass({superClass:S, ja:k, init:function() {
    this.superInit();
    this.ja = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, d = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.pa)) {
        var a = this.ja.shift();
        S.Aa(this, a);
        this.ja.push(a)
      }
    })
  }});
  S.De = S.De();
  S.Ee = tm.createClass({superClass:S, init:function() {
    this.superInit()
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.pa || S.Aa(this, "nagisa-3-1")
    })
  }});
  S.Ee = S.Ee();
  S.Be = b(["mai-1", "mai-2"]);
  S.He = tm.createClass({superClass:S, ja:k, init:function() {
    this.superInit();
    this.ja = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.ad = l;
    a.Dc = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.ad = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, d = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.pa) && !this.Dc) {
        var a = this.ja.shift();
        S.Aa(this, a);
        this.ja.push(a)
      }
    })
  }});
  S.He = S.He();
  S.Ie = tm.createClass({superClass:S, ja:k, init:function() {
    this.superInit();
    this.ja = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, d = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.pa)) {
        var a = this.ja.shift();
        S.Aa(this, a);
        this.ja.push(a)
      }
    })
  }});
  S.Ie = S.Ie();
  S.Je = tm.createClass({superClass:S, ja:k, init:function() {
    this.superInit();
    this.ja = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    S.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, d = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.pa)) {
        var a = this.ja.shift();
        S.Aa(this, a);
        this.ja.push(a)
      }
    })
  }});
  S.Je = S.Je()
})();
var Z = P, $ = S;
Ba = {"heri1-left":[{aa:Z.qa, ba:$.Rb, x:48, y:-100}, {aa:Z.qa, ba:$.Ga, x:96, y:-100}, {aa:Z.qa, ba:$.Rb, x:144, y:-100}, {aa:Z.qa, ba:$.Ga, x:192, y:-100}, {aa:Z.qa, ba:$.Rb, x:240, y:-100}], "heri1-center":[{aa:Z.qa, ba:$.Rb, x:144, y:-100}, {aa:Z.qa, ba:$.Ga, x:192, y:-100}, {aa:Z.qa, ba:$.Rb, x:240, y:-100}, {aa:Z.qa, ba:$.Ga, x:288, y:-100}, {aa:Z.qa, ba:$.Rb, x:336, y:-100}], "heri1-right":[{aa:Z.qa, ba:$.Rb, x:240, y:-100}, {aa:Z.qa, ba:$.Ga, x:288, y:-100}, {aa:Z.qa, ba:$.Rb, x:336, y:-100}, 
{aa:Z.qa, ba:$.Ga, x:384, y:-100}, {aa:Z.qa, ba:$.Rb, x:432, y:-100}], "heri1-left2":[{aa:Z.qa, ba:$.Ga, x:48, y:-100}, {aa:Z.qa, ba:$.ec, x:96, y:-100}, {aa:Z.qa, ba:$.Ga, x:144, y:-100}, {aa:Z.qa, ba:$.ec, x:192, y:-100}, {aa:Z.qa, ba:$.Ga, x:240, y:-100}], "heri1-center2":[{aa:Z.qa, ba:$.Ga, x:144, y:-100}, {aa:Z.qa, ba:$.ec, x:192, y:-100}, {aa:Z.qa, ba:$.Ga, x:240, y:-100}, {aa:Z.qa, ba:$.ec, x:288, y:-100}, {aa:Z.qa, ba:$.Ga, x:336, y:-100}], "heri1-right2":[{aa:Z.qa, ba:$.Ga, x:240, y:-100}, 
{aa:Z.qa, ba:$.ec, x:288, y:-100}, {aa:Z.qa, ba:$.Ga, x:336, y:-100}, {aa:Z.qa, ba:$.ec, x:384, y:-100}, {aa:Z.qa, ba:$.Ga, x:432, y:-100}], "heri2-left":[{aa:Z.na, ba:$.Qa, x:48, y:-100}, {aa:Z.na, ba:$.Qa, x:96, y:-100}, {aa:Z.na, ba:$.Qa, x:144, y:-100}, {aa:Z.na, ba:$.Qa, x:192, y:-100}, {aa:Z.na, ba:$.Qa, x:240, y:-100}], "heri2-center":[{aa:Z.na, ba:$.Qa, x:144, y:-100}, {aa:Z.na, ba:$.Qa, x:192, y:-100}, {aa:Z.na, ba:$.Qa, x:240, y:-100}, {aa:Z.na, ba:$.Qa, x:288, y:-100}, {aa:Z.na, ba:$.Qa, 
x:336, y:-100}], "heri2-right":[{aa:Z.na, ba:$.Qa, x:240, y:-100}, {aa:Z.na, ba:$.Qa, x:288, y:-100}, {aa:Z.na, ba:$.Qa, x:336, y:-100}, {aa:Z.na, ba:$.Qa, x:384, y:-100}, {aa:Z.na, ba:$.Qa, x:432, y:-100}], "heri1-4-left":[{aa:Z.na, ba:$.Pa, x:48, y:-100}, {aa:Z.na, ba:$.Pa, x:96, y:-100}, {aa:Z.na, ba:$.Pa, x:144, y:-100}, {aa:Z.na, ba:$.Pa, x:192, y:-100}, {aa:Z.na, ba:$.Pa, x:240, y:-100}], "heri1-4-center":[{aa:Z.na, ba:$.Pa, x:144, y:-100}, {aa:Z.na, ba:$.Pa, x:192, y:-100}, {aa:Z.na, ba:$.Pa, 
x:240, y:-100}, {aa:Z.na, ba:$.Pa, x:288, y:-100}, {aa:Z.na, ba:$.Pa, x:336, y:-100}], "heri1-4-right":[{aa:Z.na, ba:$.Pa, x:240, y:-100}, {aa:Z.na, ba:$.Pa, x:288, y:-100}, {aa:Z.na, ba:$.Pa, x:336, y:-100}, {aa:Z.na, ba:$.Pa, x:384, y:-100}, {aa:Z.na, ba:$.Pa, x:432, y:-100}], "tankRD-left":[{aa:Z.ea, ba:$.Hb, x:78, y:-50}, {aa:Z.ea, ba:$.Hb, x:28, y:-100}, {aa:Z.ea, ba:$.Hb, x:-22, y:-150}, {aa:Z.ea, ba:$.Hb, x:-72, y:-200}, {aa:Z.ea, ba:$.Hb, x:-122, y:-250}], "tankRD-center":[{aa:Z.ea, ba:$.Hb, 
x:222, y:-50}, {aa:Z.ea, ba:$.Hb, x:172, y:-100}, {aa:Z.ea, ba:$.Hb, x:122, y:-150}, {aa:Z.ea, ba:$.Hb, x:72, y:-200}, {aa:Z.ea, ba:$.Hb, x:22, y:-250}], "tankL-top":[{aa:Z.ea, ba:$.cd, x:550, y:64}, {aa:Z.ea, ba:$.cd, x:620, y:64}, {aa:Z.ea, ba:$.cd, x:690, y:64}, {aa:Z.ea, ba:$.cd, x:760, y:64}, {aa:Z.ea, ba:$.cd, x:830, y:64}], "tank5-left":[{aa:Z.ea, ba:$.ka, x:48, y:-70}, {aa:Z.ea, ba:$.ka, x:48, y:-140}, {aa:Z.ea, ba:$.ka, x:48, y:-210}, {aa:Z.ea, ba:$.ka, x:48, y:-280}, {aa:Z.ea, ba:$.ka, 
x:48, y:-350}], "tank5-center":[{aa:Z.ea, ba:$.ka, x:240, y:-70}, {aa:Z.ea, ba:$.ka, x:240, y:-140}, {aa:Z.ea, ba:$.ka, x:240, y:-210}, {aa:Z.ea, ba:$.ka, x:240, y:-280}, {aa:Z.ea, ba:$.ka, x:240, y:-350}], "tank15-top":[{aa:Z.ea, ba:$.ka, x:48, y:-70}, {aa:Z.ea, ba:$.ka, x:48, y:-140}, {aa:Z.ea, ba:$.ka, x:48, y:-210}, {aa:Z.ea, ba:$.ka, x:48, y:-280}, {aa:Z.ea, ba:$.ka, x:48, y:-350}, {aa:Z.ea, ba:$.ka, x:240, y:-70}, {aa:Z.ea, ba:$.ka, x:240, y:-140}, {aa:Z.ea, ba:$.ka, x:240, y:-210}, {aa:Z.ea, 
ba:$.ka, x:240, y:-280}, {aa:Z.ea, ba:$.ka, x:240, y:-350}, {aa:Z.ea, ba:$.ka, x:432, y:-70}, {aa:Z.ea, ba:$.ka, x:432, y:-140}, {aa:Z.ea, ba:$.ka, x:432, y:-210}, {aa:Z.ea, ba:$.ka, x:432, y:-280}, {aa:Z.ea, ba:$.ka, x:432, y:-350}], "tank25-top":[{aa:Z.ea, ba:$.ka, x:48, y:-70}, {aa:Z.ea, ba:$.ka, x:48, y:-140}, {aa:Z.ea, ba:$.ka, x:48, y:-210}, {aa:Z.ea, ba:$.ka, x:48, y:-280}, {aa:Z.ea, ba:$.ka, x:48, y:-350}, {aa:Z.ea, ba:$.ka, x:240, y:-70}, {aa:Z.ea, ba:$.ka, x:240, y:-140}, {aa:Z.ea, ba:$.ka, 
x:240, y:-210}, {aa:Z.ea, ba:$.ka, x:240, y:-280}, {aa:Z.ea, ba:$.ka, x:240, y:-350}, {aa:Z.ea, ba:$.ka, x:432, y:-70}, {aa:Z.ea, ba:$.ka, x:432, y:-140}, {aa:Z.ea, ba:$.ka, x:432, y:-210}, {aa:Z.ea, ba:$.ka, x:432, y:-280}, {aa:Z.ea, ba:$.ka, x:432, y:-350}, {aa:Z.ea, ba:$.Ib, x:144, y:710}, {aa:Z.ea, ba:$.Ib, x:144, y:780}, {aa:Z.ea, ba:$.Ib, x:144, y:850}, {aa:Z.ea, ba:$.Ib, x:144, y:920}, {aa:Z.ea, ba:$.Ib, x:144, y:990}, {aa:Z.ea, ba:$.Ib, x:336, y:710}, {aa:Z.ea, ba:$.Ib, x:336, y:780}, {aa:Z.ea, 
ba:$.Ib, x:336, y:850}, {aa:Z.ea, ba:$.Ib, x:336, y:920}, {aa:Z.ea, ba:$.Ib, x:336, y:990}], "bukky-4-r":[{aa:Z.Kf, ba:$.Lf, x:480, y:-50}], "bukky-4-l":[{aa:Z.Kf, ba:$.Lf, x:0, y:-50}], "cannon-0":[{aa:Z.za, ba:$.mb, x:48, y:-100}], "cannon-1":[{aa:Z.za, ba:$.mb, x:96, y:-100}], "cannon-2":[{aa:Z.za, ba:$.mb, x:144, y:-100}], "cannon-3":[{aa:Z.za, ba:$.mb, x:192, y:-100}], "cannon-4":[{aa:Z.za, ba:$.mb, x:240, y:-100}], "cannon-5":[{aa:Z.za, ba:$.mb, x:288, y:-100}], "cannon-6":[{aa:Z.za, ba:$.mb, 
x:336, y:-100}], "cannon-7":[{aa:Z.za, ba:$.mb, x:384, y:-100}], "cannon-8":[{aa:Z.za, ba:$.mb, x:432, y:-100}], "cannon-R0":[{aa:Z.za, ba:$.mb, x:550, y:128}], "cannon-R1":[{aa:Z.za, ba:$.mb, x:550, y:192}], "cannon-R2":[{aa:Z.za, ba:$.mb, x:550, y:256}], "yayoi-0":[{aa:Z.za, ba:$.nb, x:48, y:-100}], "yayoi-1":[{aa:Z.za, ba:$.nb, x:96, y:-100}], "yayoi-2":[{aa:Z.za, ba:$.nb, x:144, y:-100}], "yayoi-3":[{aa:Z.za, ba:$.nb, x:192, y:-100}], "yayoi-4":[{aa:Z.za, ba:$.nb, x:240, y:-100}], "yayoi-5":[{aa:Z.za, 
ba:$.nb, x:288, y:-100}], "yayoi-6":[{aa:Z.za, ba:$.nb, x:336, y:-100}], "yayoi-7":[{aa:Z.za, ba:$.nb, x:384, y:-100}], "yayoi-8":[{aa:Z.za, ba:$.nb, x:432, y:-100}], "yayoi-R0":[{aa:Z.za, ba:$.nb, x:550, y:128}], "yayoi-R1":[{aa:Z.za, ba:$.nb, x:550, y:192}], "yayoi-R2":[{aa:Z.za, ba:$.nb, x:550, y:256}], "tsubomi-0":[{aa:Z.Kd, ba:$.Cd, x:96, y:-100}], "tsubomi-1":[{aa:Z.Kd, ba:$.Cd, x:240, y:-100}], "tsubomi-2":[{aa:Z.Kd, ba:$.Cd, x:384, y:-100}], "tsubomi-R0":[{aa:Z.Kd, ba:$.Cd, x:580, y:128}], 
"itsuki-0":[{aa:Z.Ae, ba:$.ve, x:96, y:-100}], "itsuki-1":[{aa:Z.Ae, ba:$.ve, x:240, y:-100}], "itsuki-2":[{aa:Z.Ae, ba:$.ve, x:384, y:-100}], "makoto-0":[{aa:Z.Fb, ba:$.Gb, x:48, y:-100}], "makoto-1":[{aa:Z.Fb, ba:$.Gb, x:96, y:-100}], "makoto-2":[{aa:Z.Fb, ba:$.Gb, x:144, y:-100}], "makoto-3":[{aa:Z.Fb, ba:$.Gb, x:192, y:-100}], "makoto-4":[{aa:Z.Fb, ba:$.Gb, x:240, y:-100}], "makoto-5":[{aa:Z.Fb, ba:$.Gb, x:288, y:-100}], "makoto-6":[{aa:Z.Fb, ba:$.Gb, x:336, y:-100}], "makoto-7":[{aa:Z.Fb, ba:$.Gb, 
x:384, y:-100}], "makoto-8":[{aa:Z.Fb, ba:$.Gb, x:432, y:-100}], "makoto-R0":[{aa:Z.Fb, ba:$.Gb, x:580, y:128}], "fighter-m-0":[{aa:Z.dc, ba:$.uc, x:96, y:-192}], "fighter-m-1":[{aa:Z.dc, ba:$.uc, x:144, y:-192}], "fighter-m-2":[{aa:Z.dc, ba:$.uc, x:192, y:-192}], "fighter-m-3":[{aa:Z.dc, ba:$.uc, x:240, y:-192}], "fighter-m-4":[{aa:Z.dc, ba:$.uc, x:288, y:-192}], "fighter-m-5":[{aa:Z.dc, ba:$.uc, x:336, y:-192}], "fighter-m-6":[{aa:Z.dc, ba:$.uc, x:384, y:-192}], "fighter-m4-0":[{aa:Z.dc, ba:$.Ph, 
x:96, y:-192}], "tsukikage-r":[{aa:Z.$a, ba:$.wc(700), x:624, y:256}, {aa:Z.$a, ba:$.wc(600), x:720, y:256}, {aa:Z.$a, ba:$.wc(500), x:576, y:320}, {aa:Z.$a, ba:$.wc(400), x:672, y:320}, {aa:Z.$a, ba:$.wc(300), x:768, y:320}, {aa:Z.$a, ba:$.wc(200), x:624, y:384}, {aa:Z.$a, ba:$.wc(100), x:720, y:384}], "tsukikage-l":[{aa:Z.$a, ba:$.vc(700), x:-144, y:384}, {aa:Z.$a, ba:$.vc(600), x:-240, y:384}, {aa:Z.$a, ba:$.vc(500), x:-96, y:320}, {aa:Z.$a, ba:$.vc(400), x:-192, y:320}, {aa:Z.$a, ba:$.vc(300), 
x:-288, y:320}, {aa:Z.$a, ba:$.vc(200), x:-144, y:256}, {aa:Z.$a, ba:$.vc(100), x:-240, y:256}], "komachi-0":[{aa:Z.fc, ba:$.Sf, x:144, y:-192}], "komachi-1":[{aa:Z.fc, ba:$.Sf, x:336, y:-192}], "komachi2-0":[{aa:Z.fc, ba:$.Hd, x:144, y:-192}], "komachi2-1":[{aa:Z.fc, ba:$.Hd, x:336, y:-192}], "komachi3-0":[{aa:Z.fc, ba:$.Hd, x:144, y:-192}], "komachi3-1":[{aa:Z.fc, ba:$.Hd, x:336, y:-192}], "komachi4-0":[{aa:Z.fc, ba:$.Tf, x:144, y:-192}], "komachi4-1":[{aa:Z.fc, ba:$.Tf, x:336, y:-192}], "akane-1":[{aa:Z.xa, 
ba:$.xa, x:96, y:130}, {aa:Z.xa, ba:$.xa, x:192, y:80}, {aa:Z.xa, ba:$.xa, x:240, y:60}, {aa:Z.xa, ba:$.xa, x:288, y:80}, {aa:Z.xa, ba:$.xa, x:384, y:130}], "akane-2":[{aa:Z.xa, ba:$.xa, x:288, y:120}, {aa:Z.xa, ba:$.xa, x:288, y:80}, {aa:Z.xa, ba:$.xa, x:384, y:160}, {aa:Z.xa, ba:$.xa, x:384, y:40}], "akane-3":[{aa:Z.xa, ba:$.xa, x:96, y:120}, {aa:Z.xa, ba:$.xa, x:96, y:80}, {aa:Z.xa, ba:$.xa, x:144, y:160}, {aa:Z.xa, ba:$.xa, x:144, y:40}], "hoshizora_y-1":[{aa:Z.Kg, ba:$.Zi, x:-256, y:140}], "hoshizora_y-2":[{aa:Z.Kg, 
ba:$.$i, x:608, y:60}], "hoshizora_t-1":[{aa:Z.he, ba:$.he, x:-128, y:60}], "hoshizora_t-2":[{aa:Z.he, ba:$.he, x:608, y:60}], yotsuba:[{aa:Z.te, ba:$.te, x:240, y:-64}], erika:[{aa:Z.bd, ba:$.bd, x:240, y:-100}], yukishiro:[{aa:Z.ye, ba:$.ye, x:240, y:-100}], misumi:[{aa:Z.Ce, ba:[$.Qh, $.De, $.Ee], x:240, y:-100, Vb:j}], mai:[{aa:Z.Be, ba:$.Be, x:780, y:128}], hyuga:[{aa:Z.ci, ba:[$.He, $.Ie, $.Je], x:240, y:-100, Vb:j}]};
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, g, m, p) {
    return c.action([c.fire(c.direction(b, "absolute"), f, g || E, m, p), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || E, m, p)])])
  }
  function d(a, b, c, d, g) {
    return function(m) {
      return f(a, b, c, m, d, g, i, i)
    }
  }
  function f(a, b, d, f, g, m, p, r) {
    return c.action([c.fire(c.direction(b), f, g || E, m, p, r), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, g || E, m, p, r)])])
  }
  function g(a) {
    return c.fire(c.direction(0), a || r, M)
  }
  function p(a) {
    return c.fire(c.direction(0), a || r, E)
  }
  function t(a) {
    return c.speed("$rank*2.0 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function C(a) {
    return c.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function G(a) {
    return c.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return c.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function A(a) {
    return c.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function ga(a) {
    return c.speed("$rank*2.0 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function m(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function aa(a) {
    return c.oa(a, {visible:l})
  }
  function N(a) {
    return c.oa(a, {frame:4, Tb:j})
  }
  function W(a) {
    return c.oa(a, {frame:3})
  }
  function E(a) {
    return c.oa(a, {frame:1})
  }
  function L(a) {
    return c.oa(a, {frame:2})
  }
  function M(a) {
    return c.oa(a, {frame:0})
  }
  function Q(a) {
    return c.oa(a, {frame:3, Tb:j})
  }
  function X(a) {
    return c.oa(a, {frame:1, Tb:j})
  }
  function R(a) {
    return c.oa(a, {frame:2, Tb:j})
  }
  function I(a) {
    return c.oa(a, {frame:0, Tb:j})
  }
  z = {};
  var c = q.va;
  z["basic0-0"] = new q.ha({top:c.action([p])});
  z["basic0-1"] = new q.ha({top:c.action([b(G, -0.01, 8, d(3, -15, 15))])});
  z["basic1-0"] = new q.ha({top:c.action([c.repeat(999, [m(40), p(r)])])});
  z["basic1-1"] = new q.ha({top:c.action([c.repeat(999, [m(20), p(r)])])});
  z["basic1-2"] = new q.ha({top:c.action([m("10+$rand*20"), f(3, -20, 20, r)])});
  z["basic2-0"] = new q.ha({top:c.action([c.repeat(999, [m(50), p(r)])])});
  z["basic3-0"] = new q.ha({top:c.action([c.wait(20), c.repeat(999, [m(100), b(r, 0.1, 3, g)])])});
  z["basic3-1"] = new q.ha({top:c.action([c.wait(20), c.repeat(999, [m(40), b(r, 0.1, 3, g)])])});
  z["bukky-4-0"] = new q.ha({top0:c.action([m(30), c.repeat(999, [c.fire(c.direction(-40), r, R), c.repeat(3, [c.fire(c.direction(20, "sequence"), r, R), c.fire(c.direction(20, "sequence"), r, R), c.fire(c.direction(20, "sequence"), r, R), c.fire(c.direction(20, "sequence"), r, R), c.fire(c.direction(-80, "sequence"), r, R), m(5)]), m(70)])]), top1:c.action([m(20), c.fire(c.direction(180, "absolute"), s, X), c.repeat(999, [c.fire(c.direction(15, "sequence"), s, X), c.fire(c.direction(15, "sequence"), 
  s, X), c.fire(c.direction(15, "sequence"), s, X), c.fire(c.direction(15, "sequence"), s, X), c.fire(c.direction(15, "sequence"), s, X), c.fire(c.direction(15, "sequence"), s, X), c.fire(c.direction(15, "sequence"), s, X), c.fire(c.direction(15, "sequence"), s, X), c.fire(c.direction(15, "sequence"), s, X), c.fire(c.direction(-90, "sequence"), s, X), m(5)])])});
  z["cannon2-0"] = new q.ha({top0:c.action([c.repeat(999, [m(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", s), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", s), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", s), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", s), m(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", r), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", r), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", r), a(3, "270-10+45+$loop.index*15", 
  "270+10+45+$loop.index*15", r)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), A, N), c.fire(c.direction(" 90+$loop.index*10", "absolute"), A, N), c.fire(c.direction("180+$loop.index*10", "absolute"), A, N), c.fire(c.direction("270+$loop.index*10", "absolute"), A, N), c.fire(c.direction("  0-$loop.index*10", "absolute"), A, N), c.fire(c.direction(" 90-$loop.index*10", "absolute"), A, N), c.fire(c.direction("180-$loop.index*10", "absolute"), A, N), c.fire(c.direction("270-$loop.index*10", 
  "absolute"), A, N), m(10)])]), top2:c.action([c.repeat(999, [m(43), f(30, 0, 348, r, M)])])});
  z["cannon3-0"] = new q.ha({top0:c.action([c.repeat(999, [m(80), b(s, 0.01, 5, d(5, -30, 30, M, c.offsetX(-60))), b(s, 0.01, 5, d(5, -30, 30, M)), b(s, 0.01, 5, d(5, -30, 30, M, c.offsetX(60)))])])});
  z["cannon4-0"] = new q.ha({top0:c.action([m(20), c.repeat(999, [c.fire(s, R), c.repeat(8, [m(10), c.ob("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), s, R), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), s, R)])]), m(120)])])});
  z["cannon5-0"] = new q.ha({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), t, aa(c.Sa("b"))), c.repeat(11, [m(5), c.fire(c.direction(10, "sequence"), t, aa(c.Sa("b")))]), m(60)])]), b:c.action([c.wait(5), c.Sd(c.speed(0), 0), b(s, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, E)
  }), c.Db])});
  z["yuri-4"] = new q.ha({top:c.action([m(60), c.repeat(7, [a(7, 120, 240, A, M), m(8)])])});
  z["kurokawa-1"] = new q.ha({top0:c.action([c.repeat(999, [b(r, -0.01, 4, function(a) {
    return f(4, -45, 45, a, L, c.offsetX(-45), c.la(j))
  }), b(r, -0.01, 4, function(a) {
    return f(4, -45, 45, a, L, c.offsetX(45), c.la(j))
  }), m(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), r, Q, c.offsetX(-45), c.la(j)), m(45), c.fire(c.direction(0), r, Q, c.offsetX(45), c.la(j)), m(45)])])});
  z["kurokawa-4"] = new q.ha({top0:c.action([c.repeat(999, [b(r, -0.01, 4, function(a) {
    return f(4, -45, 45, a, L, c.offsetX(-45), c.la(j))
  }), b(r, -0.01, 4, function(a) {
    return f(4, -45, 45, a, L, c.offsetX(45), c.la(j))
  }), m(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), r, Q, c.offsetX(-45), c.la(j)), m(45), c.fire(c.direction(0), r, Q, c.offsetX(45), c.la(j)), m(45)])])});
  z["komachi-1"] = new q.ha({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), A(1), E, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(-40)), c.repeat(57, [m(8), c.fire(c.direction(-720 / 57, "sequence"), A(1), E, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, [c.fire(c.direction(-210, 
  "absolute"), A(1), E, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(40)), c.repeat(57, [m(8), c.fire(c.direction(720 / 57, "sequence"), A(1), E, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), r(0), I, c.offsetX(-110), c.la(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), r(0), I, c.offsetX(-110), c.la(j))]), m(10), c.fire(c.direction(0), r(0), I, c.offsetX(110), c.la(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), r(0), I, c.offsetX(110), c.la(j))]), m(10)])])});
  z["komachi-2"] = new q.ha({top0:c.action([c.repeat(999, [b(r, -0.01, 4, function(a) {
    return c.action([f(4, -45, 45, a, L, c.offsetX(-45), c.la(j)), m(4)])
  }), b(r, -0.01, 4, function(a) {
    return c.action([m(4), f(4, -45, 45, a, L, c.offsetX(45), c.la(j))])
  }), m(90)])]), top1:c.action([c.repeat(999, [m(45), b(s, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, X)]), m(1)])
  }), m(180)])])});
  z["komachi-3"] = new q.ha({top0:c.action([c.repeat(999, [b(r, -0.01, 4, function(a) {
    return c.action([f(6, -60, 60, a, L, c.offsetX(-45), c.la(j)), m(4)])
  }), b(r, -0.01, 4, function(a) {
    return c.action([m(4), f(6, -60, 60, a, L, c.offsetX(45), c.la(j))])
  }), m(90)])]), top1:c.action([c.repeat(999, [m(45), b(s, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, X)]), m(1)])
  }), m(180)])])});
  z["komachi-4"] = new q.ha({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), r, W, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), r, W, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), r, W, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), r, W, c.offsetX(45)), m(4)]), m(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), r(5), I, c.offsetX(-110), c.la(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), r(5), I, c.offsetX(-110), c.la(j))]), m(30), c.fire(c.direction(0), r(5), I, c.offsetX(110), c.la(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), r(5), I, c.offsetX(110), c.la(j))]), m(30)])])});
  z.akane = new q.ha({top:c.action([c.wait("40"), c.repeat(999, [m(50), f(1, 1, 1, A, c.oa({frame:2}), c.offsetX(-16), c.offsetY(6), c.la(j)), f(1, 1, 1, A, c.oa({frame:2}), c.offsetX(16), c.offsetY(6), c.la(j))])])});
  z.miyuki_y = new q.ha({top:c.action([c.wait("40"), c.repeat(999, [m(30), f(3, -45, 45, A, c.oa({frame:2}), c.offsetX(-64), c.offsetY(16), c.la(j)), f(3, -45, 45, A, c.oa({frame:2}), c.offsetX(0), c.offsetY(16), c.la(j)), f(3, -45, 45, A, c.oa({frame:2}), c.offsetX(16), c.offsetY(16), c.la(j)), f(3, -45, 45, A, c.oa({frame:2}), c.offsetX(32), c.offsetY(16), c.la(j)), b(A, 0.0010, 5, function(a) {
    return c.action([f(3, "-45", "+45", a, R, c.offsetX(0), c.offsetY(0))])
  })])])});
  z.miyuki_t = new q.ha({top:c.action([c.wait("40"), c.repeat(999, [m(30), f(1, 1, 1, A, c.oa({frame:2}), c.offsetX(-16), c.offsetY(6), c.la(j)), f(1, 1, 1, A, c.oa({frame:2}), c.offsetX(16), c.offsetY(6), c.la(j))])])});
  z.alice = new q.ha({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), r, W, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), r, W, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), r, W, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), r, W, c.offsetX(45)), m(4)]), m(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), r(5), I, c.offsetX(-110), c.la(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), r(5), I, c.offsetX(-110), c.la(j))]), m(30), c.fire(c.direction(0), r(5), I, c.offsetX(110), c.la(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), r(5), I, c.offsetX(110), c.la(j))]), m(30)])])});
  z["honoka-1"] = new q.ha({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, s, N, c.offsetX(0), c.offsetY(30)), m(30), f(5, -40, 40, A, N, c.offsetX(0), c.offsetY(30)), m(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, s(0.6), E), f(3, -3, 3, s(1), E), f(4, -4, 4, s(1.4), E), f(5, -5, 5, s(1.8), E), m(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, A, I, c.offsetX(-110), c.offsetY(-70)), m(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, A, I, c.offsetX(110), c.offsetY(-70)), 
  m(30)])])});
  z["nagisa-1-1"] = new q.ha({top0:c.action([m(90), c.repeat(3, [c.ob("way", "5 + $loop.index*6"), b(s, 0.01, "3 + $loop.index*4", function(a) {
    return c.action([f("$way", -110, 110, a, E, c.offsetX(-190), c.offsetY(-20)), f("$way", -110, 110, a, E, c.offsetX(190), c.offsetY(-20)), c.wait(5)])
  }), m(60)]), m(60)])});
  z["nagisa-1-2"] = new q.ha({top0:c.action([c.repeat(12, [f(15, -90, 90, A, E), m(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [f(5, -65, -55, s, I, c.offsetX(-190), c.offsetY(-20)), f(5, -35, -25, s, I, c.offsetX(-190), c.offsetY(-20)), f(5, -5, 5, s, I, c.offsetX(-190), c.offsetY(-20)), f(5, 25, 35, s, I, c.offsetX(-190), c.offsetY(-20)), f(5, 55, 65, s, I, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), m(60), c.repeat(3, [f(5, -65, -55, s, I, c.offsetX(190), c.offsetY(-20)), f(5, -35, -25, 
  s, I, c.offsetX(190), c.offsetY(-20)), f(5, -5, 5, s, I, c.offsetX(190), c.offsetY(-20)), f(5, 25, 35, s, I, c.offsetX(190), c.offsetY(-20)), f(5, 55, 65, s, I, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), m(60)])])});
  z["nagisa-1-3"] = new q.ha({top0:c.action([m(60), c.repeat(3, [c.fire(c.direction(-60), s, L, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [m(15), c.fire(c.direction(6, "sequence"), s, L, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([m(80), c.repeat(3, [c.fire(c.direction(60), s, L, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [m(15), c.fire(c.direction(-6, "sequence"), s, L, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [f(5, -60, -40, s, N, c.offsetX(-190), 
  c.offsetY(-20)), f(5, -20, -10, s, N, c.offsetX(-190), c.offsetY(-20)), f(5, 10, 20, s, N, c.offsetX(-190), c.offsetY(-20)), f(5, 40, 60, s, N, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), m(60), c.repeat(3, [f(5, -60, -40, s, N, c.offsetX(190), c.offsetY(-20)), f(5, -20, -10, s, N, c.offsetX(190), c.offsetY(-20)), f(5, 10, 20, s, N, c.offsetX(190), c.offsetY(-20)), f(5, 40, 60, s, N, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), m(60)])])});
  z["nagisa-2-1"] = new q.ha({top0:c.action([m(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", A, M, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", A, M, c.offsetX(190), c.offsetY(-20)), m(10)])]), top1:c.action([m(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", s, Q), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", s, Q), m(12)])])});
  z["nagisa-2-2"] = new q.ha({top0:c.action([m(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", r, Q), m(12)])]), top1:c.action([m(120), c.repeat(6, [a(9, 150, 130, A(0.8), E), a(9, 172, 188, A(0.8), E), a(9, 210, 230, A(0.8), E), m(30), a(9, 170, 150, A(0.8), E), a(9, 190, 210, A(0.8), E), m(30)])])});
  z["nagisa-2-3"] = new q.ha({top:c.action([m(120), c.repeat(12, [a(23, 0, 360, A, N, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, A, N), a(23, 0, 360, A, N, c.offsetX(190), c.offsetY(-20)), m(30)])])});
  z["nagisa-3-1"] = new q.ha({top0:c.action([m(50), c.repeat(999, [b(r, 0.0010, 5, function(a) {
    return c.action([f(41, "-180", "+180", a, R, c.offsetX(-190), c.offsetY(-20)), f(41, "-180", "+180", a, R, c.offsetX(190), c.offsetY(-20))])
  }), m(50)])]), top1:c.action([c.repeat(999, [f(2, -2, 0, G, E), m(10), f(2, 0, 2, G, E), m(150)])])});
  z["mai-1"] = new q.ha({top0:c.action([m(50), c.repeat(50, [c.ob("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, M), c.Db]))), c.ob("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, M), c.Db]))), m(8)])]), top1:c.action([m(50), c.repeat(12, [a(5, -50, 50, t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, Q), 
  c.Db]))), a(5, -230, -130, t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, Q), c.Db]))), m(16), a(6, -50, 50, t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, Q), c.Db]))), a(6, -230, -130, t, aa(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, Q), c.Db]))), m(16)])])});
  z["mai-2"] = new q.ha({top:c.action([m(50), c.repeat(15, [c.fire(c.direction(-10), R(c.Sa("fireChild", "$loop.index*10"))), m(8)])]), fireChild:c.action([m("40+$1"), b(s, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, L)
  }), c.Db])});
  z["saki-1-1"] = new q.ha({top:c.action([m(100), c.repeat(3, [c.Sa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.ob("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", r, M), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", r, M), m(12)]), c.repeat("$2", [f(9, -20, 20, G, W)])])});
  z["saki-1-2"] = new q.ha({top:c.action([m(100), c.repeat(5, [c.ob("way", "5+$loop.index*2"), c.repeat(6, [c.ob("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, r("$s"), Q, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), m(90)])])});
  z["saki-1-3"] = new q.ha({top:c.action([c.ob("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), Q(c.Sa("seed"))), m(8)]), m(60)]), seed:c.action([c.wait(10), c.Sd(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, s, W), c.Db])});
  z["saki-2-1"] = new q.ha({top0:c.action([m(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", s, M, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", s, M, c.offsetX(40)), m(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", s, M, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", s, M, c.offsetX(40)), m(60)])]), top1:c.action([m(100), c.repeat(4, [c.repeat(7, [c.ob("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  C, W), c.repeat(4, [c.ob("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", C("$w*-1.0"), W)])]), m(120)])])});
  z["saki-2-2"] = new q.ha({top:c.action([m(60), c.ob("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), R(c.Sa("seed"))), m(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), R(c.Sa("seed"))), m(8)]), m(60)]), seed:c.action([c.wait(10), c.Sd(c.speed(0), "10 + $rand*15"), c.wait(65), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, L)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, L)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, L)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, L)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, L)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, L)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, L)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, L)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, L)])
  }), m(2), c.Db])});
  z["saki-2-3"] = new q.ha({top:c.action([m(60), c.ob("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), Q(c.Sa("seed"))), m(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), Q(c.Sa("seed"))), m(8)]), m(60)]), seed:c.action([c.wait(10), c.Sd(c.speed(0), "10 + $rand*20"), c.wait(65), b(r, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, W)])
  }), m(2), c.Db])});
  z["saki-3-1"] = new q.ha({top:c.action([c.fire(c.direction(180, "absolute"), ga, R(c.Sa("seed"))), m(60), c.fire(c.direction(180, "absolute"), ga, R(c.Sa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), ga, R(c.Sa("seed")), c.offsetX(80)), m(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), r, s, M), c.repeat(999, [c.fire(c.direction(90, "sequence"), s, M), c.fire(c.direction(90, "sequence"), s, M), c.fire(c.direction(90, "sequence"), s, M), m(10), c.fire(c.direction(100, 
  "sequence"), s, M)])])});
  z["saki-3-2"] = new q.ha({top:c.action([c.fire(c.direction(180, "absolute"), ga, Q(c.Sa("seed"))), m(60), c.fire(c.direction(180, "absolute"), ga, Q(c.Sa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), ga, Q(c.Sa("seed")), c.offsetX(80)), m(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), r, s, E), c.repeat(999, [c.fire(c.direction(90, "sequence"), s, E), c.fire(c.direction(90, "sequence"), s, E), c.fire(c.direction(90, "sequence"), s, E), m(10), c.fire(c.direction(80, "sequence"), 
  s, E)])])});
  z.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      ya.push(O())
    }
    a = z.Td = tm.cb.tc.kd;
    a.ff = function(a) {
      return!(a instanceof O) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.hg = function(a) {
      var b = ya.shift(0);
      if(b) {
        return b.pa = v.dh, ma.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.Tb ? (b.scaleX = 1, b.scaleY = 1, b.rc = l) : (b.scaleX = 0.8, b.scaleY = 1.5, b.rc = j), b.visible = a.visible === l ? l : j, b.Tb = !!a.Tb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.lg = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.Ic = v.fh;
    q.Da.sb.$rank = 0;
    q.Da.sb.$hyperOff = 1
  };
  z.erase = function(a, b, c) {
    for(var d = [].concat(ma), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var m = wa(!!b);
        m.setPosition(d[f].x, d[f].y);
        c && (m.Ec = j)
      }
      d[f].Ba()
    }
  };
  z.hd = function() {
    for(var a = [].concat(ma), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  O = tm.createClass({superClass:tm.display.Sprite, pa:0, Tb:l, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      ya.push(this);
      var a = ma.indexOf(this);
      -1 !== a && ma.splice(a, 1)
    })
  }, update:function() {
    this.Tb && (this.rotation += 15)
  }, Ba:function() {
    var a = F(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var ya = [], ma = O.Ta = []
})();
var T, U, Ma, V, Ta;
T = function(b, a, d) {
  return b < a ? a : b > d ? d : b
};
Ta = Math.PI / 180;
Ma = function(b) {
  return b * Ta
};
V = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
U = function(b, a) {
  return window.Math.random() * (a - b) + b
};

