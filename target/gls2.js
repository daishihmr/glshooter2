/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(b) {
  throw b;
}
var i = void 0, j = !0, k = null, m = !1;
function n() {
  return function() {
  }
}
var q = {Wg:this};
(function() {
  function b(a, b) {
    for(var f = 0, g = a.length;f < g;f++) {
      if(a[f].label == b) {
        return a[f]
      }
    }
  }
  q.ia = function(a) {
    this.type = "none";
    this.root = this;
    this.La = [];
    this.Kd = [];
    this.Rd = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof q.jb ? this.La.push(a[b]) : a[b] instanceof q.Vb ? this.Kd.push(a[b]) : a[b] instanceof q.Dc && this.Rd.push(a[b]))
      }
      a = 0;
      for(b = this.La.length;a < b;a++) {
        this.La[a].ob(this)
      }
      a = 0;
      for(b = this.Kd.length;a < b;a++) {
        this.Kd[a].ob(this)
      }
      a = 0;
      for(b = this.Rd.length;a < b;a++) {
        this.Rd[a].ob(this)
      }
    }
  };
  q.ia.prototype.fg = function(a) {
    return b(this.La, a)
  };
  q.ia.prototype.si = function() {
    for(var a = [], b = 0, f = this.La.length;b < f;b++) {
      var g = this.La[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  q.ia.prototype.ji = function(a) {
    var b;
    if(b = this.fg(a)) {
      return b
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  q.ia.prototype.ki = function(a) {
    return b(this.Kd, a)
  };
  q.ia.prototype.li = function(a) {
    var b;
    if(b = this.ki(a)) {
      return b
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  q.ia.prototype.mi = function(a) {
    return b(this.Rd, a)
  };
  q.ia.prototype.ni = function(a) {
    var b;
    if(b = this.mi(a)) {
      return b
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  q.Vb = function() {
    this.root = this.label = k;
    this.direction = new q.Mb(0);
    this.speed = new q.Nb(1);
    this.La = [];
    this.Ba = {};
    this.pa = {}
  };
  q.Vb.prototype.clone = function(a) {
    var b = new q.Vb;
    b.label = this.label;
    b.root = this.root;
    b.La = this.La;
    b.direction = new q.Mb(a.Ga(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new q.Nb(a.Ga(this.speed.value));
    b.speed.type = this.speed.type;
    b.Ba = this.Ba;
    b.pa = a.pa;
    return b
  };
  q.Vb.prototype.ob = function(a) {
    this.root = a;
    for(var b = 0, f = this.La.length;b < f;b++) {
      this.La[b].ob(a)
    }
  };
  q.td = function(a) {
    this.root = k;
    this.label = a;
    this.Ia = []
  };
  q.td.prototype.clone = function(a) {
    var b = a.pa;
    a.pa = a.Be(this.Ia);
    var f = this.root.li(this.label).clone(a);
    a.pa = b;
    return f
  };
  q.td.prototype.ob = function(a) {
    this.root = a
  };
  q.Ka = function() {
    this.Za = ""
  };
  q.Ka.prototype.ob = function(a) {
    this.root = a
  };
  q.jb = function() {
    this.Za = "action";
    this.root = this.label = k;
    this.ub = [];
    this.Ia = []
  };
  q.jb.prototype = new q.Ka;
  q.jb.prototype.ob = function(a) {
    this.root = a;
    for(var b = 0, f = this.ub.length;b < f;b++) {
      this.ub[b].ob(a)
    }
  };
  q.jb.prototype.clone = function() {
    var a = new q.jb;
    a.label = this.label;
    a.root = this.root;
    a.ub = this.ub;
    return a
  };
  q.Cc = function(a) {
    this.Za = "actionRef";
    this.label = a;
    this.root = k;
    this.Ia = []
  };
  q.Cc.prototype = new q.Ka;
  q.Cc.prototype.clone = function() {
    var a = new q.jb;
    a.root = this.root;
    a.ub.push(this);
    return a
  };
  q.Dc = function() {
    this.Za = "fire";
    this.wa = this.speed = this.direction = this.root = this.label = k;
    this.Ba = new q.xd
  };
  q.Dc.prototype = new q.Ka;
  q.Dc.prototype.ob = function(a) {
    this.root = a;
    this.wa && this.wa.ob(a)
  };
  q.ke = function(a) {
    this.Za = "fireRef";
    this.label = a;
    this.Ia = []
  };
  q.ke.prototype = new q.Ka;
  q.vd = function() {
    this.Za = "changeDirection";
    this.direction = new q.Mb;
    this.Ta = 0
  };
  q.vd.prototype = new q.Ka;
  q.wd = function() {
    this.Za = "changeSpeed";
    this.speed = new q.Nb;
    this.Ta = 0
  };
  q.wd.prototype = new q.Ka;
  q.sd = function() {
    this.Za = "accel";
    this.Ib = new q.ne;
    this.Lb = new q.ze;
    this.Ta = 0
  };
  q.sd.prototype = new q.Ka;
  q.Dd = function(a) {
    this.Za = "wait";
    this.value = a || 0
  };
  q.Dd.prototype = new q.Ka;
  q.ye = function() {
    this.Za = "vanish"
  };
  q.ye.prototype = new q.Ka;
  q.Bd = function() {
    this.Za = "repeat";
    this.Eg = 0;
    this.action = k;
    this.Ia = []
  };
  q.Bd.prototype = new q.Ka;
  q.Bd.prototype.ob = function(a) {
    this.root = a;
    this.action && this.action.ob(a)
  };
  q.ie = function(a, b) {
    this.Za = "bind";
    this.aj = a;
    this.hi = b
  };
  q.ie.prototype = new q.Ka;
  q.te = function(a, b) {
    this.Za = "notify";
    this.di = a;
    this.Ia = b || k
  };
  q.te.prototype = new q.Ka;
  q.Tg = new q.Ka;
  q.Mb = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  q.Nb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  q.ne = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.ze = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.xd = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.Da = j;
    a.Da !== i && (this.Da = !!a.Da)
  };
  q.Hf = function(a) {
    this.value = a || 0
  };
  q.If = function(a) {
    this.value = a || 0
  };
  q.wf = function(a) {
    this.value = !!a
  }
})();
q.ya = function(b) {
  this.Nf = b;
  this.Ed = [];
  this.Yb = -1;
  this.Oa = k;
  this.pa = {}
};
q.ya.prototype.next = function() {
  this.Yb += 1;
  if(this.Oa !== k) {
    var b = this.Oa.ub[this.Yb];
    if(b !== i) {
      if(b instanceof q.jb) {
        return this.Xc(), this.Oa = b, this.pa = this.Ae(), this.next()
      }
      if(b instanceof q.Cc) {
        return this.Xc(), this.Oa = this.Nf.ji(b.label), this.pa = this.Be(b.Ia), this.next()
      }
      if(b instanceof q.Bd) {
        return this.pa.Oc = 0, this.pa.rg = this.Ga(b.Eg) | 0, this.Xc(), this.Oa = b.action.clone(), this.pa = this.Ae(), this.next()
      }
      if(b instanceof q.Dc) {
        var a = new q.Dc;
        a.wa = b.wa.clone(this);
        b.direction !== k && (a.direction = new q.Mb(this.Ga(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== k && (a.speed = new q.Nb(this.Ga(b.speed.value)), a.speed.type = b.speed.type);
        a.Ba = new q.xd;
        a.Ba.offsetX = this.Ga(b.Ba.offsetX);
        a.Ba.offsetY = this.Ga(b.Ba.offsetY);
        a.Ba.Da = b.Ba.Da;
        return a
      }
      return b instanceof q.ke ? (this.Xc(), this.Oa = new q.jb, this.Oa.ub = [this.Nf.ni(b.label)], this.pa = this.Be(b.Ia), this.next()) : b instanceof q.vd ? (a = new q.vd, a.direction.type = b.direction.type, a.direction.value = this.Ga(b.direction.value), a.Ta = this.Ga(b.Ta), a) : b instanceof q.wd ? (a = new q.wd, a.speed.type = b.speed.type, a.speed.value = this.Ga(b.speed.value), a.Ta = this.Ga(b.Ta), a) : b instanceof q.sd ? (a = new q.sd, a.Ib.type = b.Ib.type, a.Ib.value = this.Ga(b.Ib.value), 
      a.Lb.type = b.Lb.type, a.Lb.value = this.Ga(b.Lb.value), a.Ta = this.Ga(b.Ta), a) : b instanceof q.Dd ? new q.Dd(this.Ga(b.value)) : b instanceof q.ye ? b : b instanceof q.ie ? (this.pa["$" + b.aj] = this.Ga(b.hi), q.Tg) : b instanceof q.te ? b : k
    }
    this.Th();
    if(this.Oa === k) {
      return k
    }
    if((b = this.Oa.ub[this.Yb]) && "repeat" == b.Za) {
      this.pa.Oc++, this.pa.Oc < this.pa.rg && (this.Xc(), this.Oa = b.action.clone(), this.pa = this.Ae())
    }
    return this.next()
  }
  return k
};
q.ya.prototype.Xc = function() {
  this.Ed.push({action:this.Oa, cursor:this.Yb, scope:this.pa});
  this.Yb = -1
};
q.ya.prototype.Th = function() {
  var b = this.Ed.pop();
  b ? (this.Yb = b.cursor, this.Oa = b.action, this.pa = b.scope) : (this.Yb = -1, this.Oa = k, this.pa = {})
};
q.ya.prototype.Ga = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.pa[b]) || (a = q.ya.Qa[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in q.ya.Qa) {
    q.ya.Qa.hasOwnProperty(d) && (a[d] = q.ya.Qa[d])
  }
  for(d in this.pa) {
    this.pa.hasOwnProperty(d) && (a[d] = this.pa[d])
  }
  a.$rand = Math.random();
  (d = this.Ed[this.Ed.length - 1]) && (a.$loop = {index:d.scope.Oc, count:d.scope.Oc + 1, first:0 === d.scope.Oc, last:d.scope.Oc + 1 >= d.scope.rg});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
q.ya.prototype.Be = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.Ga(b[d])
    }
  }else {
    for(d in this.pa) {
      this.pa.hasOwnProperty(d) && (a[d] = this.pa[d])
    }
  }
  return a
};
q.ya.prototype.Ae = function() {
  var b = {}, a;
  for(a in this.pa) {
    this.pa.hasOwnProperty(a) && (b[a] = this.pa[a])
  }
  return b
};
q.ia.prototype.Oe = function(b) {
  var a = new q.ya(this);
  if(b = this.fg(b)) {
    a.Oa = b
  }
  return a
};
q.Vb.prototype.Oe = function() {
  var b = new q.ya(this.root), a = new q.jb;
  a.root = this.root;
  a.ub = this.La;
  b.Oa = a;
  b.pa = this.pa;
  return b
};
q.ya.Qa = {};
q.ra = function(b) {
  b = b || "";
  for(var a in q.ra) {
    q.ra.hasOwnProperty(a) && (q.Wg[b + a] = q.ra[a])
  }
};
q.ra.action = function(b) {
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
  var f = new q.jb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof q.Ka)
    }) && h(Error("argument type error.")), f.ub = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof q.Ka ? f.ub[a] = arguments[a] : h(Error("argument type error."))
    }
  }
  return f
};
q.ra.ab = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.Cc(b);
  if(a instanceof Array) {
    f.Ia = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ia.push(arguments[d])
    }
  }
  return f
};
q.ra.wa = function(b, a, d, f) {
  for(var g = 0, l = arguments.length;g < l;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  l = new q.Vb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Mb ? l.direction = arguments[g] : arguments[g] instanceof q.Nb ? l.speed = arguments[g] : arguments[g] instanceof q.jb ? l.La.push(arguments[g]) : arguments[g] instanceof q.Cc ? l.La.push(arguments[g]) : arguments[g] instanceof Array ? l.La.push(q.ra.action(arguments[g])) : arguments[g] instanceof Object ? l.Ba = arguments[g] : "string" === typeof arguments[g] && (l.label = arguments[g])
  }
  return l
};
q.ra.ij = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.td(b);
  if(a instanceof Array) {
    f.Ia = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ia.push(arguments[d])
    }
  }
  return f
};
q.ra.ea = function(b, a, d, f) {
  for(var g = 0, l = arguments.length;g < l;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  l = new q.Dc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Mb ? l.direction = arguments[g] : arguments[g] instanceof q.Nb ? l.speed = arguments[g] : arguments[g] instanceof q.Vb ? l.wa = arguments[g] : arguments[g] instanceof q.td ? l.wa = arguments[g] : arguments[g] instanceof q.xd ? l.Ba = arguments[g] : arguments[g] instanceof q.Hf ? l.Ba.offsetX = arguments[g].value : arguments[g] instanceof q.If ? l.Ba.offsetY = arguments[g].value : arguments[g] instanceof q.wf && (l.Ba.Da = arguments[g].value)
  }
  l.wa === i && h(Error("bullet (or bulletRef) is required."));
  return l
};
q.ra.mj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.ke(b);
  if(a instanceof Array) {
    f.Ia = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ia.push(arguments[d])
    }
  }
  return f
};
q.ra.jj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("direction is required."));
  a === i && h(Error("term is required."));
  d = new q.vd;
  d.direction = b instanceof q.Mb ? b : new q.Mb(b);
  d.Ta = a;
  return d
};
q.ra.Fc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("speed is required."));
  a === i && h(Error("term is required."));
  d = new q.wd;
  d.speed = b instanceof q.Nb ? b : new q.Nb(b);
  d.Ta = a;
  return d
};
q.ra.gj = function(b, a, d) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new q.sd;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof q.ne ? g.Ib = b : arguments[f] instanceof q.ze ? g.Lb = a : g.Ta = arguments[f]
  }
  g.Ib === i && g.Lb === i && h(Error("horizontal or vertical is required."));
  g.Ta === i && h(Error("term is required."));
  return g
};
q.ra.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && h(Error("value is required."));
  return new q.Dd(b)
};
q.ra.ib = function() {
  return new q.ye
};
q.ra.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("times is required."));
  a === i && h(Error("action is required."));
  f = new q.Bd;
  f.Eg = b;
  if(a instanceof q.jb || a instanceof q.Cc) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = q.ra.action(a)
    }else {
      for(var g = [], d = 1;d < arguments.length;d++) {
        g.push(arguments[d])
      }
      f.action = q.ra.action(g)
    }
  }
  return f
};
q.ra.Wa = function(b, a) {
  return new q.ie(b, a)
};
q.ra.uj = function(b, a) {
  return new q.te(b, a)
};
q.ra.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Mb(b);
  a !== i && (d.type = a);
  return d
};
q.ra.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Nb(b);
  a && (d.type = a);
  return d
};
q.ra.Ib = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.ne(b);
  a && (d.type = a);
  return d
};
q.ra.Lb = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.ze(b);
  a && (d.type = a);
  return d
};
q.ra.lj = function(b) {
  return new q.xd(b)
};
q.ra.offsetX = function(b) {
  return new q.Hf(b)
};
q.ra.offsetY = function(b) {
  return new q.If(b)
};
q.ra.Da = function(b) {
  return new q.wf(b)
};
tm.Ya = tm.Ya || {};
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
  tm.Ya.ic = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.Kf = a
  }, Md:function(a, b) {
    var d = this.Kf.si();
    if(b === i && 0 < d.length) {
      for(var f = [], D = 0, v = d.length;D < v;D++) {
        f[f.length] = this.Lf(a, d[D])
      }
      for(var r = function() {
        if(!r.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          r.Ke == f.length && (r.ad = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, D = f.length;D--;) {
        f[D].ae = r
      }
      r.Ke = 0;
      r.Wf = function() {
        this.Ke++
      };
      r.Ke = 0;
      r.ad = m;
      r.Te = j;
      r.stop = m;
      return r
    }
    return this.Lf(a, b)
  }, Lf:function(a, b) {
    function d() {
      if(!d.stop) {
        d.ha += 1;
        this.ha = d.ha;
        var a = d.Ld, b = d.Sh;
        if(b) {
          if(d.ha < d.Ie ? d.direction += d.Jc : d.ha === d.Ie && (d.direction = d.ac), d.ha < d.Je ? d.speed += d.qd : d.ha === d.Je && (d.speed = d.Sc), d.ha < d.Ee ? (d.xc += d.Hd, d.zc += d.Id) : d.ha === d.Ee && (d.xc = d.Fd, d.zc = d.Gd), this.x += Math.cos(d.direction) * d.speed * a.yc, this.y += Math.sin(d.direction) * d.speed * a.yc, this.x += d.xc * a.yc, this.y += d.zc * a.yc, a.Ue(this)) {
            if(a.gc || this.gc) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.ha < d.Fg || d.ad)) {
              for(var f;f = d.Gg.next();) {
                switch(f.Za) {
                  case "fire":
                    b.Ph.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Fg = "number" === typeof f.value ? d.ha + f.value : 0 !== (a = ~~f.value) ? d.ha + a : d.ha + eval(f.value);
                    return;
                  case "changeDirection":
                    b.Kh.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.Lh.call(this, f, d);
                    break;
                  case "accel":
                    b.Ih.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.Qh.call(this, f)
                }
              }
              d.ad = j;
              d.ae ? d.ae.Wf() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.ad = j, d.ae ? d.ae.Wf() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Ya.ic.bd, f;
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
    "string" === typeof b ? d.Gg = this.Kf.Oe(b) : b instanceof q.Vb ? d.Gg = b.Oe() : (window.console.error(a, b), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Sh = this;
    d.Ld = a;
    d.Fg = -1;
    d.ad = m;
    d.direction = 0;
    d.ng = 0;
    d.speed = 0;
    d.pg = 0;
    d.xc = 0;
    d.zc = 0;
    d.Jc = 0;
    d.ac = 0;
    d.Ie = -1;
    d.qd = 0;
    d.Sc = 0;
    d.Je = -1;
    d.Hd = 0;
    d.Fd = 0;
    d.Id = 0;
    d.Gd = 0;
    d.Ee = -1;
    d.ha = -1;
    d.stop = m;
    d.Te = j;
    return d
  }, Oh:function(a) {
    function b() {
      b.stop || (this.x += b.$f, this.y += b.ag, b.Ld.Ue(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Ya.ic.bd, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b.Ld = a;
    b.direction = 0;
    b.speed = 0;
    b.$f = 0;
    b.ag = 0;
    b.stop = m;
    b.Te = j;
    return b
  }, Ph:function(b, d, f, B) {
    if(this.Mi === i || this.bc) {
      var D = {label:b.wa.label}, v;
      for(v in b.wa.Ba) {
        D[v] = b.wa.Ba[v]
      }
      if(D = d.Vf(D)) {
        B = (v = 0 === b.wa.La.length) ? B.Oh(d) : B.Md(d, b.wa);
        var r = this, A = {x:this.x + b.Ba.offsetX, y:this.y + b.Ba.offsetY};
        f.ng = B.direction = function(p) {
          var B = eval(p.value) * Math.DEG_TO_RAD;
          switch(p.type) {
            case "aim":
              return d.target ? b.Ba.Da ? a(A, d.target) + B : a(r, d.target) + B : B - Math.PI / 2;
            case "absolute":
              return B - Math.PI / 2;
            case "relative":
              return f.direction + B;
            default:
              return f.ng + B
          }
        }(b.direction || b.wa.direction);
        f.pg = B.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.pg + b;
            default:
              return b
          }
        }(b.speed || b.wa.speed);
        D.x = A.x;
        D.y = A.y;
        v && (B.$f = Math.cos(B.direction) * B.speed * d.yc, B.ag = Math.sin(B.direction) * B.speed * d.yc);
        D.gc = !!D.gc;
        if(d.gc || D.gc) {
          D.rotation = (B.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, D.speed = B.speed
        }
        D.addEventListener("enterframe", B);
        d.Pf ? d.Pf.addChild(D) : this.parent && this.parent.addChild(D)
      }
    }
  }, Kh:function(d, f, t) {
    var B = eval(d.direction.value) * Math.DEG_TO_RAD, D = eval(d.Ta);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        t.ac = a(this, d) + B;
        t.Jc = b(t.ac - t.direction) / D;
        break;
      case "absolute":
        t.ac = B - Math.PI / 2;
        t.Jc = b(t.ac - t.direction) / D;
        break;
      case "relative":
        t.ac = t.direction + B;
        t.Jc = b(t.ac - t.direction) / D;
        break;
      case "sequence":
        t.Jc = B, t.ac = t.direction + t.Jc * (D - 1)
    }
    t.Ie = t.ha + D
  }, Lh:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.Ta);
    switch(a.speed.type) {
      case "absolute":
        b.Sc = d;
        b.qd = (b.Sc - b.speed) / f;
        break;
      case "relative":
        b.Sc = d + b.speed;
        b.qd = (b.Sc - b.speed) / f;
        break;
      case "sequence":
        b.qd = d, b.Sc = b.speed + b.qd * f
    }
    b.Je = b.ha + f
  }, Ih:function(a, b) {
    var d = eval(a.Ta);
    b.Ee = b.ha + d;
    if(a.Ib) {
      var f = eval(a.Ib.value);
      switch(a.Ib.type) {
        case "absolute":
        ;
        case "sequence":
          b.Hd = (f - b.xc) / d;
          b.Fd = f;
          break;
        case "relative":
          b.Hd = f, b.Fd = (f - b.xc) * d
      }
    }else {
      b.Hd = 0, b.Fd = b.xc
    }
    if(a.Lb) {
      switch(f = eval(a.Lb.value), a.Lb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Id = (f - b.zc) / d;
          b.Gd = f;
          break;
        case "relative":
          b.Id = f, b.Gd = (f - b.zc) * d
      }
    }else {
      b.Id = 0, b.Gd = b.zc
    }
  }, Qh:function(a) {
    var b = tm.event.Event(a.di);
    if(a.Ia) {
      for(var d in a.Ia) {
        b[d] = a.Ia[d]
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
  tm.Ya.ai = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = k;
  tm.Ya.Zf = function(a) {
    if(f === k) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.Ya.kj = function() {
    return j
  };
  tm.Ya.ic.bd = {Vf:tm.Ya.ai, Ue:tm.Ya.Zf, wj:0, gc:m, yc:2, target:k};
  q.ia.prototype.Md = function(a) {
    return tm.Ya.ic(this).Md(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(n());
tm.main(function() {
  aa("#canvas2d").run()
});
var s = k, gls2 = {}, u, ba, w, z, C, F, ca, da, ea, fa, ga, ha, ia, G, I, K, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, ya, za, Aa, Ba, L, Ca, Da, N, O, Ea, Fa, R, aa = tm.createClass({superClass:tm.display.CanvasApp, Vd:0, qj:0, Zc:3, wc:3, bg:1, ca:k, init:function(b) {
  s !== k && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = u.Vg;
  this.background = "rgba(0,0,0,0)";
  this.sf = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm4:"assets2/nc31173.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/nc44202.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", 
  "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", 
  "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.Rh();
    return ba()
  }.bind(this)}))
}, update:function() {
  for(var b = [].concat(this.sf), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.sf.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Rh:function() {
  w.ja(12345);
  ["tex_stage1", "tex_tank1"].forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawTexture(a, 0, 0);
    d = d.getBitmap();
    d.filter({calc:function(a, b, d, f, D) {
      D.setPixelIndex(b, a[0], 0, 0)
    }});
    var f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(b + "Red", f)
  });
  z.ja();
  C.ja();
  this.ca = F()
}, fi:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Vd, "")
}, sf:k, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Ga(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
}
;u = {th:j, Vg:60, qh:0, Af:[1E9, 1E10], sh:3E3, Cf:3, Bf:[3, 2, 1], Jg:[6, 4, 2], Jf:1, ph:0.1, Df:1, rh:0.25, bj:1, dj:0.25, Ig:2, hh:0.005, dh:0.01, eh:0.001, Zg:0.015, $g:0.002, jh:0.001, lh:0.01, ih:0, gh:0, fh:0, bh:0.03, ah:0.004, kh:0, mh:0, nh:0.75, le:10, yd:800, Yg:0.25, Xg:0.1, oh:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], Pg:0.02, Qg:0.5, Og:0.01, zf:1E3, Mg:10, Kg:1, Gh:1E3, Fh:100, Eh:0, Dh:0, Ch:1E3, Bh:100, Ug:0.8, Rg:22500, Lg:50, vh:10, vf:m, Hg:m, zh:1E3, Ah:2E3, wh:4E3, xh:1E4, 
yh:2E7};
(function() {
  var b = k, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  ca = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, gb:0, Rb:j, Yc:j, Pc:m, ca:k, speed:0, bb:k, Ic:k, tg:k, Wd:k, Ub:k, Pe:k, Pb:k, Qe:k, Re:k, frame:0, init:function(a, f, g) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = f;
    this.style = g;
    tm.Ya.ic.bd.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Ic = this.tg = da(f, 100);
    this.Wd = da(3, 100);
    this.Ub = ea(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Ub.visible = m;
    this.Nh();
    this.bb = this.Mh();
    1 === this.style && (this.bb = [this.bb[1], this.bb[2]]);
    this.Pb = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(g = this.bb.length;f < g;f++) {
      var l = this.bb[f];
      fa(this, l).setPosition(l.x, l.y).addChildTo(this.Pb)
    }
    this.Bi = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Bi.blendMode = "lighter";
    this.Qe = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Qe.blendMode = "lighter";
    this.Qe.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.za && !a.ua
    };
    this.Re = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Re.blendMode = "lighter";
    this.Re.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.za && !a.ua
    };
    this.ed = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.ed.blendMode = "lighter";
    this.ed.rotation = -90;
    this.ed.strokeStyle = "rgba(180,180,255,0.4)";
    this.ed.update = function() {
      this.visible = a.ua
    };
    this.ed.draw = function(b) {
      b.lineCap = "round";
      var f = a.Mc / u.yd;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, m);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, m);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, m)
    };
    this.vi = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.vi.update = function() {
      this.visible = a.ua
    };
    b === k && (b = ga(this.ca.na))
  }, Mh:function() {
    if(0 === this.type) {
      return[{x:0, sc:0, y:40, d:0, pb:j, mb:-0.7, v:j}, {x:0, sc:0, y:40, d:0, pb:j, mb:0.5, v:j}, {x:0, sc:0, y:40, d:0, pb:j, mb:-0.5, v:j}, {x:0, sc:0, y:40, d:0, pb:j, mb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, pb:m, mb:-0.7, v:j}, {x:-40, y:40, d:0.1, pb:m, mb:-0.5, v:j}, {x:40, y:40, d:0.1, pb:j, mb:0.5, v:j}, {x:70, y:20, d:0.1, pb:j, mb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, pb:m, mb:-0.7, v:j}, {x:-30, y:20, d:0.4, pb:m, mb:-0.5, v:j}, {x:30, y:20, d:0.4, pb:j, mb:0.5, v:j}, {x:60, y:40, d:0.6, pb:j, mb:0.7, v:j}]
    }
  }, Nh:function() {
    this.Pe = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Pe.setFrameIndex(5);
    this.Pe.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, fc:-1, Lc:m, wb:m, update:function(d) {
    this.visible = this.Pc ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.Rb) {
      var g = f.getKeyAngle();
      g !== k && (g = a[g], this.x += g.x * this.speed * (this.wb ? 0.75 : 1), this.y += g.y * this.speed * (this.wb ? 0.75 : 1));
      this.x = S(this.x, 15, 465);
      this.y = S(this.y, 15, 625);
      var l = f.getKey("c") && this.Yc, g = f.getKey("z") && this.Yc;
      this.fc = l ? this.fc + 1 : this.fc - 1;
      this.fc = S(this.fc, -1, 10);
      this.wb = g && l || 10 === this.fc;
      l = this.ca.ua ? 3 : 5;
      this.Lc = !this.wb && (0 <= this.fc || g) && 0 === d.frame % l;
      g && (this.fc = 0);
      this.Ub.x = this.x;
      this.Ub.y = this.y - 40;
      f.getKeyDown("x") && this.Yc && (0 < this.ca.za && !this.ca.ua ? (this.ca.Xi(), ha(this).addChildTo(this.ca)) : !this.ca.Nc && 0 < this.ca.cb && (this.$a = S(this.$a - 2, 0, 1), q.ya.Qa.$rank = S(q.ya.Qa.$rank - 0.02, 0, 1), ia(this, this.ca).setPosition(S(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.wb = this.Lc = m
    }
    this.Lc && (g = Math.sin(0.2 * d.frame), l = this.Ic.ea(this.x - 7 - 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca), l = this.Ic.ea(this.x + 7 + 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca));
    if(this.wb) {
      g = 0;
      for(l = this.bb.length;g < l;g++) {
        this.bb[g].v = m
      }
      this.Pb.rotation = 0
    }else {
      this.Ub.visible = m;
      g = 0;
      for(l = this.bb.length;g < l;g++) {
        this.bb[g].v = j
      }
    }
    this.$h(f);
    this.Jh(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = d.frame
  }, Sb:function() {
    this.wb = this.Lc = m;
    this.ca.Od();
    this.ca.Ma = 0;
    this.ca.Ha = 0;
    this.ca.Aa = 0
  }, $h:function(a) {
    if(0 === this.type) {
      for(a = this.bb.length;this.bb[--a] !== i;) {
        var b = this.bb[a];
        0 === a ? b.x = b.sc + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.sc + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.sc + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.sc + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Pb, b.rotation = this.Rb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Rb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, Jh:function(a, b) {
    this.Rb && a.getKey("left") ? this.gb = S(this.gb - 0.2, -3, 3) : this.Rb && a.getKey("right") ? this.gb = S(this.gb + 0.2, -3, 3) : 0 > this.gb ? this.gb = S(this.gb + 0.2, -3, 3) : 0 < this.gb && (this.gb = S(this.gb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.gb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.gb) : 2 === this.type && this.setFrameIndex(31 + ~~this.gb);
    return b
  }});
  fa = tm.createClass({superClass:tm.display.AnimationSprite, qc:k, da:k, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.qc = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.pb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.qc.v) {
      this.x = this.qc.x * (this.da.ca.ua ? 1.5 : 1);
      this.y = this.qc.y * (this.da.ca.ua ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.qc.d * this.qc.mb);
      var f = this.parent.localToGlobal(this);
      this.qc.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.ca);
      this.da.Lc && (f = this.da.Ic.ea(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== k && f.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = k;
  G = tm.createClass({superClass:tm.display.Sprite, speed:0, oc:0, Wh:1, kg:0, eb:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.oc = u.Jf;
    b === k && (b = I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.pd(a)
  }, update:function() {
    this.x += this.uf;
    this.y += this.rd;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, pd:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Td:function(a) {
    for(var f = 0;f < a;f++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), l = T(2, 8), t = 2 * Math.random() * Math.PI;
      g.sa = Math.cos(t) * l;
      g.ta = Math.sin(t) * l;
      g.scaleX = g.scaleY = (T(0.1, 0.5) + T(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.sa;
        this.y += this.ta;
        this.sa *= 0.9;
        this.ta *= 0.9
      })
    }
  }});
  G.$c = function() {
    for(var b = [].concat(a), f = 0, g = b.length;f < g;f++) {
      b[f].remove()
    }
  };
  var a = G.Pa = [];
  da = tm.createClass({ec:k, jg:m, init:function(b, f) {
    this.jg = 3 === b;
    this.ec = [];
    for(var g = 0;g < f;g++) {
      var l = G(b), t = this;
      l.addEventListener("added", function() {
        this.oa = u.vh;
        a.push(this)
      });
      l.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        t.ec.push(this)
      });
      this.jg && l.addEventListener("enterframe", function(a) {
        this.setScale((this.Wh + this.kg) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.ec.push(l)
    }
  }, ea:function(a, b, g) {
    var l = this.ec.pop();
    if(l === i) {
      return k
    }
    var t = Ha(g);
    l.uf = Math.cos(t) * l.speed;
    l.rd = Math.sin(t) * l.speed;
    l.setPosition(a, b);
    l.rotation = g + 90;
    return l
  }, Rc:function(a) {
    for(var b = this.ec.length;this.ec[--b] !== i;) {
      this.ec[b].oc = u.Jf + u.ph * a, this.ec[b].kg = 0.2 * a
    }
  }})
})();
ea = tm.createClass({superClass:tm.display.Sprite, da:k, ca:k, Db:0, frame:0, Dg:k, color:k, Sf:0, Ge:0, Xh:m, head:k, gg:k, Rf:k, eb:j, oc:u.Df, Qc:k, init:function(b, a) {
  this.da = b;
  this.ca = b.ca;
  this.Sf = 0 === this.da.style ? 1 : 1.2;
  this.Ge = 0 === this.da.style ? 50 : 75;
  var d = this;
  this.Dg = a;
  this.superInit(a.redBody, this.Ge, 100);
  this.boundingHeightBottom = 1;
  this.xj = 0;
  this.origin.y = 1;
  var f = this.Rf = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.gg = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.Db - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.Db
  };
  this.pd(["red", "green", "blue"][this.da.type]);
  this.Rc(0)
}, pd:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.Dg[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Rf.gotoAndPlay(this.color);
  this.gg.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Qc = k;
  return this
}, Rc:function(b) {
  this.boundingWidth = this.width = this.Ge + 30 * b / u.le;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.oc = this.Sf * u.Df + u.rh * b;
  0 === b ? this.pd(["red", "green", "blue"][this.da.type]) : this.pd("hyper")
}, Td:function(b, a) {
  this.Qc === k && this.Xf();
  a = a || this.Db;
  for(var d = 0;d < b;d++) {
    var f = this.Qc.clone().setPosition(this.x, a).addChildTo(this.ca), g = T(8, 14), l = T(0, Math.PI);
    f.sa = Math.cos(l) * g;
    f.ta = Math.sin(l) * g;
    f.scaleX = f.scaleY = (T(0.5, 1.5) + T(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.sa;
      this.y += this.ta;
      this.sa *= 0.95;
      this.ta *= 0.95
    })
  }
}, qi:function(b, a, d) {
  this.Qc === k && this.Xf();
  for(var f = 0;f < b;f++) {
    var g = this.Qc.clone().setPosition(a, d).addChildTo(this.ca), l = T(12, 20), t = T(0, Math.PI);
    g.sa = Math.cos(t) * l;
    g.ta = Math.sin(t) * l;
    g.scaleX = g.scaleY = (T(1, 3) + T(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.sa;
      this.y += this.ta;
      this.sa *= 0.95;
      this.ta *= 0.95
    })
  }
}, Xf:function() {
  this.Qc = "hyper" === this.color ? I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.da.wb) ? (this.Db = Math.max(0, this.Db - 40), this.height = this.y - this.Db, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Db = this.y - 40;
  this.Xh = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, pj:function() {
  return this.Db
}, Si:function(b) {
  this.Db = b;
  this.head.update()
}});
ea.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.Db
});
(function() {
  ia = tm.createClass({superClass:tm.app.Object2D, eb:j, ca:k, init:function(a, d) {
    this.superInit();
    this.da = a;
    this.ca = d;
    this.zg = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.zg.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.zg));
    this.Of();
    b === k && (b = I(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ha = 0;
    this.md = 1;
    this.addEventListener("added", function() {
      this.ca.Nc = j;
      this.da.Pc = j;
      this.ca.cb -= 1;
      this.ca.Se = m;
      this.ca.Od();
      this.ca.Ra("drop BOMBER!!", j);
      K("bomb");
      K("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.Nc = m;
      this.da.Pc = m
    })
  }, Of:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = T(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.md + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.ha;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.ha += 3.6, this.md = -1) : (this.b = 8, this.ha += 1.8, this.md = 1)
  }});
  ka = tm.createClass({superClass:ia, init:function(a, b) {
    this.superInit(a, b);
    u.Hg && this.addEventListener("added", function() {
      this.ca.cb = 0
    })
  }, Of:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = T(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.md + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.ha;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.ha += 1.8, this.md = 1)
  }});
  var b = k
})();
C = {ja:function() {
  Ia();
  la = {};
  C.explosion = Array.range(0, 2).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  la.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k, frequency:3}}}, 100, 100));
  C.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  C.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  C.particle16 = I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Td:function(b, a, d) {
  b = C.particle16.clone().setPosition(b, a).addChildTo(d);
  a = T(5, 20);
  d = T(Math.PI, 2 * Math.PI);
  b.sa = Math.cos(d) * a;
  b.ta = Math.sin(d) * a;
  b.scaleX = b.scaleY = (T(0.1, 0.5) + T(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.sa;
    this.y += this.ta;
    this.sa *= 0.9;
    this.ta *= 0.9
  })
}, oj:function(b, a, d) {
  var f = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter").addChildTo(d);
  f.image = C.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, ri:function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.eb = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
}, Qd:function(b, a, d, f) {
  K("explode");
  b = C.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  b.eb = j;
  if(f !== i) {
    var g = f.x, l = f.y;
    b.addEventListener("enterframe", function() {
      this.x += g;
      this.y += l;
      g *= 0.99;
      l *= 0.99
    })
  }
  b.addChildTo(d)
}, gi:function(b, a, d) {
  K("explode");
  var f = C.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.eb = j;
  f.addChildTo(d);
  f = C.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.eb = j;
  f.addChildTo(d);
  f = C.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.eb = j;
  f.addChildTo(d)
}, Gb:function(b, a, d) {
  K("explode2");
  K("explode3");
  for(var f = ~~(Math.random() * Ja.length), g = 0;20 > g;g++) {
    var l = C.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === g % 2 ? "lighter" : "source-over").setPosition(b, a).gotoAndPlay();
    l.a = 2 * Math.PI * Math.random();
    l.v = 10 * Math.pow(Ja.at(~~(Ja.length * g / 20) + f), 2);
    l.eb = j;
    l.addChildTo(d)
  }
}, dg:function(b, a, d) {
  K("explode2");
  K("explode3");
  for(var f = ~~(Math.random() * Ja.length), g = 0;20 > g;g++) {
    for(var l = 2 * Math.PI * g / 20, t = Math.pow(Ja.at(~~(Ja.length * g / 20) + f), 2), B = 0;3 > B;B++) {
      var D = 4 * t * (B + 1), v = la.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ha && (this.blendMode = "source-over");
        this.ha += 1
      }).setScale(0.3 * (3 - B)).setBlendMode("lighter").setPosition(b, a).gotoAndPlay();
      v.rotation = 2 * Math.random() * Math.PI;
      v.eb = j;
      v.alpha = 0.2;
      v.ha = 0;
      v.a = l;
      v.v = D;
      v.addChildTo(d)
    }
  }
}};
ma = tm.createClass({superClass:tm.app.Object2D, target:k, vc:0, angle:0, alpha:2, eb:j, reverse:m, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.vc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === k) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        I(60, this.alpha, 0.9).setPosition(Math.cos(a) * this.vc + this.target.x, Math.sin(a) * this.vc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.vc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.vc || 200 < this.vc) && this.remove()
  }
}});
ha = tm.createClass({superClass:tm.app.Object2D, target:k, angle:0, eb:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      I(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + U(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + U(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
na = tm.createClass({superClass:tm.graphics.Canvas, ca:k, Hc:k, Sa:k, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Hc = Ka(200);
  this.Sa = oa(this)
}, update:function() {
  this.clear();
  this.ca.Qb !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Sa.Hb - 20, 470 * this.ca.Qb.oa / this.ca.Qb.cc, 20), this.strokeRect(5, this.Sa.Hb - 20, 470, 20), this.clear(263.5, this.Sa.Hb - 20 + 2, 2, 16), this.clear(52, this.Sa.Hb - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.Sa.Hb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.Ma)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.Aa / u.zf) + 1), this.Sa.dd + 192, 22);
  b = [0, 1, 4][this.ca.da.type];
  for(a = 0;a < this.ca.hc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.ya.Qa.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.jd + " hit", this.Sa.dd + 10, 95);
  0 < ~~this.ca.Aa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.Aa + " HIT!!", 10, -this.Sa.Hb + 115));
  0 === this.frame % 2 && (!this.ca.ua && 0 < this.ca.za ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.za, 5, 637)) : this.ca.ua && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Nd, 5, 637)));
  for(a = 0;a < this.ca.cb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.Se && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Hc.update();
  this.Hc.kf = this.Sa.Hb + 5;
  this.Hc.draw(this);
  this.frame += 1
}});
oa = tm.createClass({superClass:tm.app.Object2D, hb:k, dd:0, Hb:0, init:function(b) {
  this.superInit();
  this.hb = b
}});
(function() {
  for(var b = [], a = [], d = 0;3 > d;d++) {
    b[d] = 40 * Math.pow(0.8, d), a[d] = b[d] / 2 * Math.sqrt(3)
  }
  pa = tm.createClass({superClass:tm.graphics.Canvas, qa:k, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.qa = qa();
    this.qa.na = this;
    this.qa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(d) {
    this.qa.sa = Math.cos(this.qa.direction) * this.qa.speed;
    this.qa.ta = Math.sin(this.qa.direction) * this.qa.speed;
    for(var g = 0;3 > g;g++) {
      for(this.qa.xb[g] += this.qa.sa * Math.pow(0.8, g);3 * b[g] < this.qa.xb[g];) {
        this.qa.xb[g] -= 3 * b[g]
      }
      for(;this.qa.xb[g] < 3 * -b[g];) {
        this.qa.xb[g] += 3 * b[g]
      }
      for(this.qa.yb[g] += this.qa.ta * Math.pow(0.8, g);2 * a[g] < this.qa.yb[g];) {
        this.qa.yb[g] -= 2 * a[g]
      }
      for(;this.qa.yb[g] < 2 * -a[g];) {
        this.qa.yb[g] += 2 * a[g]
      }
    }
    0 === d % 2 && this.draw()
  }, draw:function() {
    this.qa.background !== k ? this.clearColor(this.qa.background, 0, 0) : this.clear();
    for(var d = 0;3 > d;d++) {
      this.lineWidth = 0.3 * Math.pow(0.8, d);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.6 * Math.pow(0.8, d) + ")"}, {offset:1, color:"rgba(255,255,255," + 0.4 * Math.pow(0.8, d) + ")"}]).toStyle();
      this.beginPath();
      for(var g = 0, l = this.qa.xb[d] - 3 * b[d];l < 480 + 3 * b[d];l += 1.5 * b[d]) {
        for(var g = 0 === g ? a[d] : 0, t = this.qa.yb[d] - 2 * a[d] + g;t < 640 + 2 * a[d];t += 2 * a[d]) {
          this.line(l, t, l + b[d], t), this.line(l, t, l - b[d] / 2, t + a[d]), this.line(l, t, l - b[d] / 2, t - a[d])
        }
      }
      this.stroke()
    }
  }});
  qa = tm.createClass({superClass:tm.app.Object2D, xb:0, yb:0, direction:0, speed:0, sa:0, ta:0, background:k, init:function() {
    this.superInit();
    this.xb = [];
    this.yb = [];
    for(var a = 0;3 > a;a++) {
      this.xb[a] = 240, this.yb[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.ta = this.sa = 0
  }})
})();
ra = tm.createClass({superClass:tm.display.Sprite, mg:m, ca:k, da:k, Tb:m, uc:m, of:m, sa:0, ta:0, init:function(b) {
  this.superInit("star", 20, 20);
  (this.mg = b) && this.setScale(2, 2);
  this.ca = F.ue;
  this.da = this.ca.da;
  this.addChildTo(this.ca);
  b = 0.5 * w.random() * Math.PI - 0.75 * Math.PI;
  this.sa = 30 * Math.cos(b);
  this.ta = 30 * Math.sin(b)
}, update:function() {
  this.da.wb && (this.uc = j);
  if(this.da.parent === k) {
    this.uc = m
  }else {
    if(100 > Ga(this, this.da)) {
      this.ca.Ci(this);
      this.remove();
      return
    }
    1E4 > Ga(this, this.da) && (this.uc = j);
    if(this.of && this.uc) {
      var b = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 10 * Math.cos(b);
      this.y += 10 * Math.sin(b)
    }else {
      this.of || (this.x += this.sa, this.y += this.ta, this.sa *= 0.8, this.ta *= 0.8, -1 < this.sa && (1 > this.sa && -1 < this.ta && 1 > this.ta) && (this.of = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
sa = tm.createClass({superClass:ra, Tb:m, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
ta = tm.createClass({superClass:ra, Tb:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.uc || (this.x += this.ca.na.sa, this.y += this.ca.na.ta);
  this.superClass.prototype.update.call(this)
}});
ua = tm.createClass({da:k, ca:k, $:k, frame:0, init:function(b) {
  this.ca = b;
  this.da = b.da;
  this.nf();
  this.$ = va();
  this.frame = 0
}, nf:n(), update:function() {
  this.ei(this.frame);
  this.frame += 1
}, ei:function(b) {
  b = this.$.get(b);
  if(b !== k) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(wa[b.value] !== i) {
        var a = wa[b.value];
        if(a !== k) {
          if(a[0].Qb === j) {
            this.qg(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.qg(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.$.qf = m
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, qg:function(b) {
  this.ca.Pd += 1;
  b = b.aa(this.ca, b.ba).setPosition(b.x, b.y).addChildTo(this.ca).Di();
  b.de = this;
  return b
}, Qf:function(b) {
  ya();
  this.ca.cd = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var g = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
      g.ha = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.ha) + 0.5;
        this.ha += 1
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
  a.addChildTo(this.ca.Me);
  K("warning");
  K("voWarning")
}});
ua.create = function(b, a) {
  switch(a) {
    case 0:
      return za(b);
    case 1:
      return Aa(b);
    case 3:
      return gls2.ej(b);
    default:
      h(Error("stageNumber = " + a))
  }
};
va = tm.createClass({index:0, data:k, qf:m, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? k : b.stop === j ? (this.qf = j, b) : this.qf ? k : b
}});
za = tm.createClass({superClass:ua, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    Ba("bgm1", j);
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
    this.Qf(function() {
      Ba("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, nf:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
Aa = tm.createClass({superClass:ua, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    Ba("bgm2", j);
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
  for(b = 0;6 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left"), this.$.add(30, "heri1-center2"), this.$.add(30, "heri1-right2"), this.$.add(30, "heri1-center2"), this.$.add(30, "heri1-left2")
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
    this.Qf(function() {
      Ba("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ca.na.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, nf:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
function La(b, a) {
  if(b.parent === k || a.parent === k) {
    return m
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, g = b.y + b.boundingHeightBottom, l = a.x - a.boundingWidthLeft, t = a.y - a.boundingHeightTop, B = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > l && f < B && g > t
}
;var Ma = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, Zi:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.Kc(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
var Na = tm.createClass({superClass:Ma, titleText:k, menu:k, descriptions:k, showExit:m, title:k, selections:[], description:k, box:k, cursor:k, bf:k, _selected:0, _opened:m, _finished:m, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.bf = d.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.bf !== k && this.parent.bf(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), K("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = S(this._selected, 0, this.selections.length - 1), K("select")) : b.keyboard.getKeyDown("up") && 
  (this._selected -= 1, this._selected = S(this._selected, 0, this.selections.length - 1), K("select")))
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
}, Kc:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function W(b, a, d, f, g) {
  g = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:n()}, g);
  b.Zi(Na(a, d, g), f)
}
;I = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, Fe:0.85, size:0, image:k, eb:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  a !== i && (this.alpha = a);
  d !== i && (this.Fe = d);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.Fe;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return I(this.size, this.tj, this.Fe, this.image)
}});
ga = tm.createClass({superClass:I, na:k, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.na = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.na.sa;
  this.y += this.na.ta + 0.3
}, clone:function(b) {
  return ga(this.na, b)
}});
var Ka = tm.createClass({width:0, label:k, Xa:k, ha:0, wg:0, kf:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Xa = [];
  this.wg = 480 - this.width - 5;
  this.kf = 5
}, Vh:function(b, a) {
  a === j && (this.Xa.clear(), this.Xa.push(""));
  5 < this.Xa.length && this.Xa.splice(1, this.Xa.length - 4);
  this.Xa.push(b);
  return this
}, Yh:function() {
  this.Xa.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.Xa.length) {
    if("" !== this.Xa[0]) {
      var a = this.Xa[0][0];
      this.Xa[0] = this.Xa[0].substring(1);
      b += a
    }else {
      this.Xa.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.ha % 2 ? "_" : " ");
  this.ha += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.wg, this.kf);
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
function Ia() {
  function b(b) {
    if(1 > b) {
      return k
    }
    var d = [], f = Math.random(), g, l;
    for(l = 0;512 > l;l += ~~b) {
      g = Math.random();
      for(var p = 0;p < b;p++) {
        d[l + p] = a(f, g, p / b)
      }
      f = g
    }
    f = d[512 - ~~b];
    g = d[0];
    for(p = 0;p < b;p++) {
      d[512 - ~~b + p] = a(f, g, p / b)
    }
    return d
  }
  function a(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var d = [], f = 0, g = Math.pow(2, 4);8 > f;f++, g *= 2) {
    var l = b(512 / g);
    if(l === k) {
      break
    }
    d.push(l)
  }
  l = [].concat(d[0]);
  f = 1;
  for(g = 0.5;f < d.length;f++, g *= 0.5) {
    for(var t = 0;512 > t;t++) {
      l[t] += d[f][t] * g
    }
  }
  for(f = 0;f < l.length;f++) {
    l[f] /= 2
  }
  return l
}
var Ja;
w = {index:-1, data:k, ja:function(b) {
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
L = k;
Ba = function(b, a) {
  a || Ca();
  var d = tm.asset.AssetManager.get(b);
  d && (L = d.clone(), L.volume = 0.1 * s.Zc, L.loop = j, L.play())
};
Ca = function() {
  L !== k && L.stop()
};
ya = function() {
  if(L !== k) {
    var b = L;
    b.loop = m;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
K = function(b) {
  if(0 !== s.wc && K.played[b] !== s.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * s.wc, K.tf !== k && K.tf.stop(), K.tf = a) : a.volume = 0.1 * s.wc);
    K.played[b] = s.frame
  }
};
K.played = {};
K.tf = k;
(function() {
  var b = k, a = k;
  ba = tm.createClass({superClass:Ma, result:k, ha:0, ld:[], Sd:m, ig:k, og:0, Yd:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.ig = tm.display.Label().setPosition(240, 256).addChildTo(this);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Sd = m;
      for(var a = ("" + Math.floor(s.Vd)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.ig.text = "HIGH SCORE: " + b.trim()
    })
  }, Kc:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Mf(80 * Math.cos(0.01 * this.ha) + 240, 80 * Math.sin(0.01 * this.ha) + 320, 0);
    this.Mf(80 * Math.cos(0.01 * this.ha + Math.PI) + 240, 80 * Math.sin(0.01 * this.ha + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Sd && this.vg();
    this.ha += 1
  }, Mf:function(d, f, g) {
    if(!this.Sd) {
      b === k && (b = I(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === k && (a = I(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      g.speed = 0.6;
      var l = T(0, 2 * Math.PI), t = U(0, 20);
      g.setPosition(Math.cos(l) * t + d, Math.sin(l) * t + f);
      var B = this;
      g.update = function() {
        this.x += Math.cos(l) * this.speed;
        this.y += Math.sin(l) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = B.ld.indexOf(this);
          -1 !== a && B.ld.splice(a, 1)
        }
      };
      this.ld.push(g)
    }
  }, vg:function() {
    W(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.Ji, {defaultValue:this.og, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, Ji:function(a) {
    4 !== a && (this.og = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Sd = j;
          for(var a = 0, b = this.ld.length;a < b;a++) {
            this.ld[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.replaceScene(Da())
        }.bind(this));
        break;
      case 2:
        this.dc();
        break;
      case 3:
        s.fi()
    }
  }, dc:function() {
    W(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.ff, {defaultValue:this.Yd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, ff:function(a) {
    3 !== a && (this.Yd = a);
    switch(a) {
      case 0:
        this.gf();
        break;
      case 1:
        this.hf();
        break;
      case 2:
        this.Qi();
        break;
      default:
        this.vg()
    }
  }, gf:function() {
    W(this, "BGM VOLUME", "012345".split(""), this.df, {defaultValue:s.Zc, onCursorMove:function(a) {
      L !== k && "exit" !== a && (L.volume = 0.1 * a)
    }, showExit:m})
  }, df:function(a) {
    6 !== a && (s.Zc = a);
    this.dc()
  }, hf:function() {
    W(this, "SE VOLUME", "012345".split(""), this.ef, {defaultValue:s.wc, showExit:m})
  }, ef:function(a) {
    6 !== a && (s.wc = a);
    this.dc()
  }, Qi:function() {
    W(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Ii, {defaultValue:s.bg, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Ii:function(a) {
    5 !== a && (s.bg = a);
    this.dc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  Da = tm.createClass({superClass:Ma, mode:0, types:k, ge:k, qb:k, rb:k, sb:k, Xe:k, Ve:k, type:0, style:0, Zb:m, Zd:m, init:function() {
    this.superInit();
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Ui();
    this.ge = this.Ti();
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
    this.ge.visible = m;
    this.af(-1, j);
    this.qb.update();
    this.rb.update();
    this.sb.update();
    K("voSelectShip")
  }, Ui:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Xe = tm.display.Label("Type-A").setPosition(240, 150);
    this.Xe.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u5f37\u529b\u306a\u96d1\u9b5a\u6383\u8a0e\u80fd\u529b"];
    this.Ye = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.Ye.update = function() {
      this.Ye.text = b[this.type]
    }.bind(this);
    this.Ye.addChildTo(a);
    var g = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.qb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.rb = tm.display.AnimationSprite(g, 64, 64).gotoAndPlay("typeB");
    this.sb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.qb.Ja = 0;
    this.rb.Ja = 1;
    this.sb.Ja = 2;
    this.qb.setScale(3).setPosition(0, 320).addChildTo(a);
    this.rb.setPosition(0, 320).addChildTo(a);
    this.sb.setPosition(0, 320).addChildTo(a);
    this.qb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ja / 3 * Math.PI)
    };
    this.rb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ja / 3 * Math.PI)
    };
    this.sb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ja / 3 * Math.PI)
    };
    return a
  }, Ti:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Ve = tm.display.Label("Shot Style").setPosition(240, 150);
    this.Ve.addChildTo(a);
    this.Uc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Pb = tm.app.Object2D();
    this.Pb.addChildTo(this.Uc);
    this.Pb.update = function(a) {
      this.Pb.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
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
    this.Uc.line = b(0, 0, 0, 130, 8);
    this.Uc.line.addChildTo(this.Uc);
    this.va.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Pb)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3059\u308b\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.We = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.We.update = function() {
      this.We.text = f[this.style]
    }.bind(this);
    this.We.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.ge.visible = m, !this.Zd && a.keyboard.getKeyDown("left")) {
        this.af(-1, m), K("select")
      }else {
        if(!this.Zd && a.keyboard.getKeyDown("right")) {
          this.af(1, m), K("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, K("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.ge.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, K("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, K("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (u.vf ? this.Ni() : (this.Zb = j, this.ug()), K("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.$i(0 === ~~(a.frame / 60) % 2))
    }
  }, Ni:function() {
    W(this, "AUTO BOMB", ["on", "off"], this.Ei, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, Ei:function(a) {
    2 !== a && (this.Zb = 0 === a, this.ug())
  }, ug:function() {
    W(this, "ARE YOU READY?", ["ok"], this.Fi, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, Fi:function(a) {
    0 === a && this.Wi()
  }, af:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.qb, this.rb, this.sb][this.type].remove().addChildTo(this.types);
    b ? (this.qb.Ja -= a, this.qb.scaleX = 0 === this.type ? 5 : 1, this.qb.scaleY = 0 === this.type ? 5 : 1, this.rb.Ja -= a, this.rb.scaleX = 1 === this.type ? 5 : 1, this.rb.scaleY = 1 === this.type ? 5 : 1, this.sb.Ja -= a, this.sb.scaleX = 2 === this.type ? 5 : 1, this.sb.scaleY = 2 === this.type ? 5 : 1) : (this.Zd = j, this.qb.tweener.clear().to({Ja:this.qb.Ja - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.rb.tweener.clear().to({Ja:this.rb.Ja - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.sb.tweener.clear().to({Ja:this.sb.Ja - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.Zd = m
    }.bind(this)));
    this.Xe.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Wi:function() {
    s.ca.Zb = this.Zb;
    s.ca.start(this.type, this.style);
    s.replaceScene(s.ca)
  }, $i:function(a) {
    this.Ve.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    a ? (this.va[0].visible = j, this.va[1].visible = j, 1 === this.style ? (this.va[2].visible = m, this.va[3].visible = m) : (this.va[2].visible = j, this.va[3].visible = j), this.Uc.line.lineWidth = 5) : (this.va.each(function(a) {
      a.visible = m
    }), this.Uc.line.lineWidth = 0 === this.style ? 10 : 20)
  }, Kc:function(b) {
    b.clearColor(tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle());
    b.lineWidth = 1;
    b.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    b.beginPath();
    for(var f = 0, g = -48;528 > g;g += 24) {
      for(var f = 0 === f ? a : 0, l = 2 * -a + f;l < 640 + 2 * a;l += 2 * a) {
        b.line(g, l, g + 16, l), b.line(g, l, g - 8, l + a), b.line(g, l, g - 8, l - a)
      }
    }
    b.stroke();
    b.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    b.fillRect(10, 10, 460, 620)
  }});
  var b = tm.createClass({superClass:tm.display.CanvasElement, init:function(a, b, g, l, t) {
    this.superInit();
    this.angle = g - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = l;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = t
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
  }}), a = 8 * Math.sqrt(3)
})();
F = tm.createClass({superClass:Ma, da:k, score:0, Ma:0, Aa:0, jd:0, Ha:0, $b:0, Bg:0, de:k, na:k, hc:3, ee:0, fe:0, Kb:0, Pd:0, kd:0, $e:0, Zb:m, cb:0, rc:0, Tf:0, Nc:m, Se:m, Jb:0, $a:0, ua:m, fd:0, Mc:0, za:0, Nd:0, sj:0, rj:0, Ud:k, eg:k, jf:k, cg:k, Le:k, Me:k, He:k, Ai:k, nb:k, hb:k, Qb:k, cd:m, zi:m, init:function() {
  F.ue !== k && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  F.ue = this;
  this.hb = na(this);
  this.hb.Sa.addChildTo(this);
  this.na = pa().qa;
  this.na.addChildTo(this);
  this.Ud = F.Xb().addChildTo(this);
  this.eg = F.Xb().addChildTo(this);
  this.cg = F.Xb().addChildTo(this);
  this.Le = F.Xb().addChildTo(this);
  this.jf = F.Xb().addChildTo(this);
  this.Me = F.Xb().addChildTo(this);
  this.He = F.Xb().addChildTo(this);
  this.Ai = F.Ef(this).addChildTo(this);
  tm.Ya.ic.bd.Pf = this;
  this.nb = tm.app.Object2D();
  this.nb.addChildTo(this);
  this.nb.update = function(b) {
    this.Li(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.hb.clear()
  })
}, addChild:function(b) {
  b.eb ? this.Le.addChild(b) : b instanceof N ? this.He.addChild(b) : b instanceof ra ? this.Ud.addChild(b) : b instanceof O ? b.Tb ? this.Ud.addChild(b) : this.cg.addChild(b) : b instanceof ca ? this.jf.addChild(b) : b === this.nb || b === this.na || b instanceof F.Xb || b instanceof F.Ef || b instanceof oa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(b)))
}, update:function(b) {
  this.Ri(b.keyboard);
  0 === b.frame % 500 && (Ja = Ia());
  this.de.update(b.frame);
  0 === b.frame % 2 && this.hb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(ba()), Ca()) : b.keyboard.getKeyDown("space") ? this.$d(0) : b.keyboard.getKeyDown("p") && (this.Ag().saveAsImage(), this.$d(0))
}, Ag:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.na.na.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.hb.element, 0, 0);
  return b
}, Li:function() {
  this.da.Rb === m && z.erase();
  var b;
  b = [].concat(O.Pa);
  for(var a = [].concat(G.Pa), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var g = b[f], l = a[d];
      if(!(0 >= g.oa) && La(g, l) && (l.Td(1), l.remove(), g.Sb(l.oc))) {
        this.Kb += 1;
        this.ua ? this.Va(u.ih) : this.Va(u.hh);
        this.cf(g);
        break
      }
    }
  }
  l = this.da.Ub;
  if(this.da.wb) {
    b = [].concat(O.Pa);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(g = b[f], !(0 >= g.oa) && La(g, l)) {
        l.Si(g.y + g.boundingHeightBottom);
        g.Sb(l.oc) ? (this.Kb += 1, this.ua ? this.Va(u.gh) : this.Va(u.dh), this.cf(g)) : (this.ua ? this.Ec(0.01 * this.za) : this.Ec(0.01), this.Ha = Math.min(this.Ha + 0.02, 1), this.ua ? this.Va(u.fh) : this.Va(u.eh));
        l.Td(2);
        break
      }
    }
    a = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(O.Pa);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.oa) && La(g, a) && (g.Sb(l.oc) ? (this.Kb += 1, this.ua ? this.Va(u.bh) : this.Va(u.Zg), this.cf(g)) : (this.ua ? this.Ec(0.01 * this.za) : this.Ec(0.01), this.Ha = Math.min(this.Ha + 0.02, 1), this.ua ? this.Va(u.ah) : this.Va(u.$g)), l.qi(2, this.da.x, this.da.y - 30))
    }
  }
  if(this.Nc) {
    z.erase();
    b = [].concat(O.Pa);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.oa) && (g.gd() && g.Sb(u.Ig)) && (this.nc(g.score), this.Kb += 1)
    }
    this.Ha = this.Aa = 0
  }
  if(this.ua) {
    f = [].concat(G.Pa);
    for(g = f.length;f[--g] !== i;) {
      if(l = f[g], !(0 >= l.oa)) {
        a = [].concat(N.Pa);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== m && (0 < l.oa && La(l, d)) && (d.oa -= 6 - this.$a, 0 > d.oa && (d.Ea(), this.nc(u.Mg), this.Ec(u.Kg), this.hg(m, m, d.x, d.y, 1)), l.oa -= 1)
        }
      }
    }
  }
  if(this.cd) {
    z.erase()
  }else {
    if(this.da.parent !== k && this.da.Pc === m && this.Nc === m && 0 >= this.fd && !u.th) {
      for(f = N.Pa.length;N.Pa[--f] !== i;) {
        if(b = N.Pa[f], b.visible !== m && La(b, this.da)) {
          this.da.Sb();
          0 < this.cb && this.Zb ? (this.$a = S(this.$a - 1, 0, 1), this.Jd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.sg();
          break
        }
      }
      for(f = O.Pa.length;O.Pa[--f] !== i;) {
        if(g = O.Pa[f], !(0 >= g.oa) && !g.Tb && La(g, this.da)) {
          this.da.Sb();
          0 < this.cb && this.Zb ? (this.$a = S(this.$a - 1, 0, 1), this.Jd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.sg();
          break
        }
      }
    }
    this.ua && (this.Mc -= 1, 0 >= this.Mc && this.Od());
    this.fd = Math.max(this.fd - 1, 0);
    this.Ha -= u.Pg * u.Qg;
    0 >= this.Ha && (this.Ha = 0, this.ua || 0 < this.za ? this.$b = this.Aa = this.Ma = 0 : (0 < this.Aa && (0 >= this.$b && (this.$b = this.Aa * u.Og), this.Ma = this.Ma * (this.Aa - this.$b) / this.Aa, this.Aa -= this.$b), 0 >= this.Aa && (this.$b = this.Aa = this.Ma = 0)))
  }
}, cf:function(b) {
  this.hg(b.Tb, this.ua || Ga(b, this.da) < u.Rg, b.x, b.y, b.star, b instanceof Ea);
  this.Ec(u.oh[this.Nd]);
  for(var a = this.Ma, d = ~~(this.Aa / u.zf) + 1, f = 0;f < d;f++) {
    a += b.score, this.nc(a)
  }
  this.Ma += b.score * d
}, hg:function(b, a, d, f, g, l) {
  b = b ? ta : sa;
  for(var t = 0;t < g;t++) {
    var B = b(a);
    B.setPosition(d, f);
    l && (B.uc = j)
  }
}, Ci:function(b) {
  K("star");
  b.mg ? (this.fe += 1, this.Ma += u.Ch, this.nc(u.Gh + this.Ma * u.Eh), this.ua ? this.Va(u.mh) : this.Va(u.lh)) : (this.ee += 1, this.Ma += u.Bh, this.nc(u.Fh + this.Ma * u.Dh), this.ua ? this.Va(u.kh) : this.Va(u.jh))
}, start:function(b, a) {
  this.hb.Hc.Yh().clear();
  this.score = 0;
  this.hc = u.Cf;
  this.cb = this.rc = u.Bf[a];
  this.Tf = u.Jg[a];
  this.za = this.$a = this.Jb = 0;
  q.ya.Qa.$rank = u.qh;
  this.Od();
  this.Nc = m;
  this.kd = this.$e = 0;
  this.da = ca(this, b, a);
  this.Cg(0);
  K("voLetsGo");
  this.Yi()
}, Cg:function(b) {
  this.Ra("3...2...1...");
  this.da.parent !== k && this.da.remove();
  O.$c();
  G.$c();
  z.$c();
  this.Ud.removeChildren();
  this.Le.removeChildren();
  this.Me.removeChildren();
  this.jf.removeChildren();
  this.He.removeChildren();
  this.nb.removeChildren();
  this.Kb = this.Pd = this.fe = this.ee = this.jd = this.Ha = this.Aa = this.Ma = 0;
  this.Qb = k;
  this.zi = this.cd = m;
  this.kd = 0;
  this.hb.Sa.dd = 0;
  this.$a = this.hb.Sa.Hb = 0;
  this.Bg = b;
  this.de = ua.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.Ze()
  }.bind(this));
  this.na.tweener.clear()
}, Ze:function() {
  this.Ra("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Ub.addChildTo(this);
  this.da.Rb = m;
  this.da.Pc = j;
  this.da.Lc = m;
  this.da.wb = m;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Yc = this.Rb = j
  }.bind(this.da)).wait(u.sh).call(function() {
    this.Pc = m
  }.bind(this.da))
}, sg:function() {
  C.Qd(this.da.x, this.da.y, this);
  this.Ra("I was shot down.");
  this.da.Rb = m;
  this.da.remove();
  this.hc -= 1;
  this.za = this.$b = this.Aa = this.Ha = 0;
  this.kd += 1;
  this.$e += 1;
  this.$a = S(this.$a - 3, 0, 1);
  this.Jd(-0.03);
  0 < this.hc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.Zb || !u.vf) {
      this.rc = Math.min(this.rc + 1, this.Tf)
    }
    this.cb = this.rc;
    this.Ze()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.Pi()
  }.bind(this))
}, Jd:function(b) {
  q.ya.Qa.$rank = S(q.ya.Qa.$rank + b, 0, 0.5)
}, oi:function() {
  this.Ra("System rebooted.", j);
  this.score = 0;
  this.hc = u.Cf;
  this.cb = this.rc = u.Bf[this.da.style];
  this.$a = 0;
  q.ya.Qa.$rank = 0;
  this.Ze()
}, Zh:function() {
  Ba("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.nb);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(Fa(this, this.Ag()));
    b.remove()
  }.bind(this))
}, pi:function() {
  Ca();
  this.app.replaceScene(Oa())
}, nj:n(), nc:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < u.Af.length;b++) {
    var d = u.Af[b];
    a < d && d <= this.score && this.ii()
  }
  s.Vd = Math.max(s.Vd, this.score)
}, Ec:function(b) {
  this.$b = 0;
  this.Aa += b;
  this.jd = Math.max(this.jd, this.Aa);
  1 <= b && (this.Ha = 1)
}, Va:function(b) {
  if(this.za !== u.le) {
    for(b *= u.nh;1 < b;) {
      ma(this.da).addChildTo(this), b -= 1, this.Jb = 0, this.za += 1, 1 === this.za ? (this.Ra("HYPER SYSTEM, stand by.", j), K("voHyperStandBy")) : (this.Ra("HYPER SYSTEM, ready.", j), K("voHyperReady"))
    }
    this.Jb = S(this.Jb + b, 0, 1);
    1 <= this.Jb && (ma(this.da).addChildTo(this), this.za += 1, this.Jb -= 1, 1 === this.za ? (this.Ra("HYPER SYSTEM, stand by.", j), K("voHyperStandBy")) : (this.Ra("HYPER SYSTEM, ready.", j), K("voHyperReady")))
  }
}, Xi:function() {
  0.5 > Math.random() ? (this.Ra("HYPER SYSTEM start!!", j), K("voHyperStart0")) : (this.Ra("start counting to system limit.", j), K("voHyperStart1"));
  this.$a = S(this.$a + 1, 0, 5);
  this.Jd(0.01 * this.za);
  q.ya.Qa.$hyperOff = u.Ug;
  this.Mc = u.yd;
  this.fd = u.yd * u.Yg;
  this.da.Wd.Rc(this.za);
  this.da.Ub.Rc(this.za);
  this.da.Ic = this.da.Wd;
  C.ri(this.da.x, this.da.y, this);
  this.ua = j;
  this.Nd = this.za;
  this.Jb = this.za = 0;
  z.erase(j, j)
}, Od:function() {
  this.ua !== m && (this.ua = m, ma(this.da, j).addChildTo(this), this.da.Ic = this.da.tg, q.ya.Qa.$hyperOff = 1, this.da.Wd.Rc(0), this.da.Ub.Rc(0), this.fd = u.yd * u.Xg, this.Nd = this.Mc = 0, z.erase())
}, hj:function() {
  K("decision");
  K("voGetBomb");
  this.cb = Math.min(this.cb + 1, this.rc);
  this.Se = this.cb === this.rc
}, ii:function() {
  K("voExtend");
  this.Ra("extended.");
  this.hc += 1
}, Ra:function(b, a) {
  this.hb.Hc.Vh(b, a)
}, $d:function(b) {
  W(this, "PAUSE", ["resume", "setting", "exit game"], this.Ki, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:m})
}, Ki:function(b) {
  switch(b) {
    case 1:
      this.dc();
      break;
    case 2:
      this.Oi()
  }
}, dc:function() {
  W(this, "SETTING", ["bgm volume", "sound volume"], this.ff, {defaultValue:this.Yd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, ff:function(b) {
  3 !== b && (this.Yd = b);
  switch(b) {
    case 0:
      this.gf();
      break;
    case 1:
      this.hf();
      break;
    default:
      this.$d()
  }
}, Oi:function() {
  W(this, "REARY?", ["yes", "no"], this.Gi, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:m})
}, Gi:function(b) {
  0 === b ? (Ca(), this.app.replaceScene(ba())) : this.$d(1)
}, gf:function() {
  W(this, "BGM VOLUME", "012345".split(""), this.df, {defaultValue:s.Zc, onCursorMove:function(b) {
    L !== k && 6 !== b && (L.volume = 0.1 * b)
  }, showExit:m})
}, df:function(b) {
  6 !== b && (s.Zc = b);
  this.dc(1)
}, hf:function() {
  W(this, "SE VOLUME", "012345".split(""), this.ef, {defaultValue:s.wc, showExit:m})
}, ef:function(b) {
  6 !== b && (s.wc = b);
  this.dc(1)
}, Pi:function() {
  W(this, "CONTINUE?", ["yes", "no"], this.Hi, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:m})
}, Hi:function(b) {
  switch(b) {
    case 0:
      this.oi();
      break;
    case 1:
      this.pi()
  }
}, Kc:n(), Vi:function() {
  this.hb.Sa.tweener.clear().to({dd:-480}, 1600, "easeInQuad").to({Hb:30}, 800, "easeInOutQuad")
}, ti:function() {
  this.hb.Sa.tweener.clear().to({Hb:0}, 800, "easeInOutQuad").to({dd:0}, 1600, "easeOutQuad")
}, nd:k, od:0, hd:k, Ad:0, Yi:function() {
  if(1 === this.Ad) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.hd = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.nd = [];
    this.od = 0
  }else {
    if(2 === this.Ad && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.hd = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.hd.push(d[f])
        }
      }
    }
  }
}, Ri:function(b) {
  if(1 === this.Ad) {
    1E3 < this.nd.length && (console.log("save"), localStorage.setItem("rec" + this.od, this.nd), localStorage.setItem("recCount", this.od), this.nd = [], this.od += 1), this.nd.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Ad && this.hd) {
      var a = this.hd.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : m
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : m
      })
    }
  }
}});
F.Xb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
F.Ef = tm.createClass({superClass:tm.display.CanvasElement, ca:k, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.bi(b);
  this.ci(b)
}, bi:function(b) {
  if(0 < this.ca.Ha) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.Ha) + "," + ~~Math.min(255, 512 * this.ca.Ha) + ",0.5)";
    var a = 500 * this.ca.Ha;
    b.fillRect(465, 635 - a, 10, a)
  }
}, ci:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.za === u.le ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.Jb && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.Jb, 9))
}});
F.ue = k;
(function() {
  Fa = tm.createClass({superClass:Ma, ca:k, yg:k, nb:k, values:k, labels:k, Xd:k, xg:[u.zh, u.Ah, u.wh, u.xh, 1], lg:k, lf:k, cursor:0, wait:0, frame:0, init:function(a, b) {
    this.superInit();
    this.ca = a;
    this.values = [this.ca.ee, this.ca.fe, ~~(100 * (this.ca.Kb / this.ca.Pd)), this.ca.jd, 0 === this.ca.kd ? u.yh : 0];
    this.Xd = this.values.map(function(a) {
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
    this.lg = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
    this.lf = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.lf.visible = m;
    this.background = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle();
    this.yg = b;
    for(var g = [], f = 0;12 > f;f++) {
      g[f] = [];
      for(var l = 0;16 > l;l++) {
        g[f][l] = {mf:0, be:0, uf:T(-2, 2), rd:T(1, 4)}
      }
    }
    this.nb = tm.app.Object2D();
    this.nb.draw = function(a) {
      for(var b = j, d = 0;d < g.length;d++) {
        for(var f = 0;f < g[d].length;f++) {
          var l = g[d][f];
          640 > 40 * f + l.be && (a.drawImage(this.yg.element, 40 * d, 40 * f, 40, 40, 40 * d + l.mf, 40 * f + l.be, 40, 40), l.mf += l.uf, l.be += l.rd, l.rd += 0.3, b = m)
        }
      }
      b ? (this.nb.remove(), this.wait = 60) : this.wait = 100
    }.bind(this);
    this.nb.addChildTo(this);
    this.addEventListener("exit", function() {
      ya()
    })
  }, update:function(a) {
    this.wait -= 1;
    if(!(0 < this.wait)) {
      var b = this.cursor;
      if(b < this.values.length) {
        K("star"), this.values[b] <= this.Xd[b] || a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.ca.nc(this.values[b] * this.xg[b]), this.values[b] = 0, this.cursor += 1, this.wait = 30) : (this.ca.nc(this.Xd[b] * this.xg[b]), this.values[b] -= this.Xd[b]), this.labels[b].text = "" + Math.floor(this.values[b]) + (2 === b ? "%" : ""), this.lg.text = Math.floor(this.ca.score)
      }else {
        if(this.lf.visible = j, a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") || 1800 < this.frame) {
          K("decision"), this.ca.Cg(this.ca.Bg + 1), a.popScene()
        }
      }
      this.frame += 1
    }
  }, Kc:function(a) {
    a.clearColor(this.background);
    a.lineWidth = 1;
    a.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    a.beginPath();
    for(var d = 0, f = -48;528 > f;f += 24) {
      for(var d = 0 === d ? b : 0, g = 2 * -b + d;g < 640 + 2 * b;g += 2 * b) {
        a.line(f, g, f + 16, g), a.line(f, g, f - 8, g + b), a.line(f, g, f - 8, g - b)
      }
    }
    a.stroke();
    a.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    a.fillRect(20, 20, 440, 600)
  }});
  var b = 8 * Math.sqrt(3)
})();
var Oa = tm.createClass({superClass:Ma, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(ba())
    }.bind(this))
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c")) && b.replaceScene(ba())
}, Kc:function(b) {
  b.clearColor("black")
}});
tm.createClass({superClass:Ma, init:function() {
  this.superInit()
}, update:n()});
(function() {
  O = tm.createClass({superClass:tm.display.CanvasElement, name:k, da:k, ca:k, de:k, oa:0, cc:0, score:0, Tb:m, erase:m, star:1, yi:m, bc:j, vb:m, frame:0, he:k, direction:0, speed:0, ma:k, init:function(a, d, f) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.vb = m;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.bc = j;
    this.ca = a;
    this.da = a.da;
    this.score = 100;
    this.erase = m;
    this.Uh(f);
    d.ja(this);
    this.altitude = this.Tb ? 1 : 10;
    this.he = {x:0, y:0}
  }, Di:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, vj:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.vb === m && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.vb = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Tb && (this.x += this.ca.na.sa, this.y += this.ca.na.ta);
    this.vb && (this.frame += 1);
    this.he.x = this.x - a;
    this.he.y = this.y - b
  }, Sb:function(a) {
    if(!this.vb) {
      return m
    }
    this.oa -= a;
    if(0 >= this.oa) {
      return a = T(0, 5), 2 > a ? this.ca.Ra("enemy destroy.") : 4 > a ? this.ca.Ra(this.name + " destroy.") : this.ca.Ra("ETR reaction gone."), this.erase && z.erase(j, this.ca.ua, this instanceof Ea), this.dispatchEvent(tm.event.Event("destroy")), this.Ea(), j
    }
    40 > this.oa && this.fb();
    return m
  }, Ea:function() {
    C.Qd(this.x, this.y, this.ca, this.he);
    this.remove()
  }, gd:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Mi:function() {
    return this.bc
  }, fb:n(), Uh:function(a) {
    this.name = a;
    a = O.Sg[a];
    this.oa = this.cc = a[0];
    this.score = a[1];
    this.Tb = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, Ne:function() {
    this.remove();
    this.ca.eg.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && C.Qd(this.x + U(-100, 100), this.y + U(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      C.dg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Uf:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && C.Qd(this.x + U(-100, 100), this.y + U(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      C.dg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  O.$c = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = O.Pa = []
})();
Ea = tm.createClass({superClass:O, yi:j, cc:0, ce:k, init:function(b, a, d) {
  this.ce = a;
  this.superInit(b, this.ce[0], d);
  this.cc = this.oa;
  this.addEventListener("added", function() {
    this.ca.Qb = this;
    this.ca.Vi();
    this.tweener.wait(1E3).call(function() {
      this.ca.cd = m
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.Qb = k;
    this.ca.ti();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.Zh()
    }.bind(this));
    a.addChildTo(this.ca.nb)
  })
}, Sb:function(b) {
  var a = this.oa;
  if(O.prototype.Sb.call(this, b)) {
    return this.ca.cd = j, this.ca.da.Yc = m, ya(), j
  }
  this.oa <= 0.55 * this.cc && 0.55 * this.cc < a ? (R.pf(this), this.clearEventListener("completeattack"), this.tweener.clear(), C.Gb(this.x, this.y, this.ca), z.erase(j, this.ca.ua), this.ce[1].ja(this)) : this.oa <= 0.1 * this.cc && 0.1 * this.cc < a && (R.pf(this), this.clearEventListener("completeattack"), this.tweener.clear(), C.Gb(this.x, this.y, this.ca), z.erase(j, this.ca.ua), this.ce[2].ja(this), K("voJacms"))
}});
(function() {
  O.Sg = {kujo:[2, 300, m, m, 1, {radius:24}], kiryu:[3, 400, m, m, 1, {radius:24}], natsuki:[5, 900, j, m, 1, {radius:24}], kise:[50, 15E3, j, m, 1, {radius:24}], yamabuki:[50, 15E3, j, m, 1, {width:70, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, m, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, m, m, 5, {width:100, height:20}], kurokawa:[35, 5E3, m, m, 5, {width:100, height:20}], akimoto:[250, 3E5, m, j, 10, {width:200, 
  heightBottom:10, heightTop:60}], yukishiro:[750, 8E5, m, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, m, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, m, j, 20, {width:300, height:80}], hyuga:[4E3, 3E6, m, j, 0, {width:240, height:80}], erika:[30, 500, m, m, 1, {width:24, height:48}]};
  O.Na = tm.createClass({superClass:O, ka:k, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.ka = b("tex_stage1", 64, 64)
  }, update:function(a) {
    O.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.ka.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  O.ga = tm.createClass({superClass:O, ka:k, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.ka = b("tex_stage1", 64, 64)
  }, update:function(a) {
    O.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.ka.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  O.fa = tm.createClass({superClass:O, Ce:k, De:k, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.Ce = b("tex_tank1", 64, 64);
    this.De = b("tex_tank1", 64, 64);
    this.pc = this.pc || 0;
    this.Fb = this.Fb || 0
  }, update:function(a) {
    O.prototype.update.call(this, a);
    for(a = this.pc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.Fb;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.Ce.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.De.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Ce.draw(a);
    this.De.draw(a)
  }, Ea:function() {
    C.gi(this.x, this.y, this.ca);
    this.remove()
  }});
  O.xf = tm.createClass({superClass:O, init:function(a, b) {
    this.superInit(a, b, "yamabuki")
  }, update:n(), draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, Ea:function() {
    C.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.Ua = tm.createClass({superClass:O, ka:k, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.ka = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, fb:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ka.Bc() : 5 === a.app.frame % 30 && this.ka.Ac()
    })
  }, draw:function(a) {
    this.ka.draw(a)
  }, Ea:function() {
    C.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.jc = tm.createClass({superClass:O, ka:k, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.ka = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, fb:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ka.Bc() : 5 === a.app.frame % 30 && this.ka.Ac()
    })
  }, draw:function(a) {
    this.ka.draw(a)
  }, Ea:function() {
    C.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.zd = tm.createClass({superClass:O, ka:k, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.ka = b("tex_stage1", 256, 128).setFrameIndex(1)
  }, fb:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ka.Bc() : 5 === a.app.frame % 30 && this.ka.Ac()
    })
  }, draw:function(a) {
    this.ka.draw(a)
  }, Ea:function() {
    this.Ne()
  }});
  O.xa = tm.createClass({superClass:O, ka:k, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.ka = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, fb:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ka.Bc() : 5 === a.app.frame % 30 && this.ka.Ac()
    })
  }, draw:function(a) {
    this.ka.draw(a)
  }, Ea:function() {
    C.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.Cd = tm.createClass({superClass:O, ka:k, init:function(a, b) {
    this.superInit(a, b, "hanasaki")
  }, fb:n(), Ea:function() {
    C.Gb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  O.oe = tm.createClass({superClass:O, init:function(a, b) {
    this.superInit(a, b, "myodoin")
  }, fb:n(), Ea:function() {
    C.Gb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  O.zb = tm.createClass({superClass:O, ka:k, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.ka = b("tex_stage1", 128, 128).setFrameIndex(4)
  }, fb:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ka.Bc() : 5 === a.app.frame % 30 && this.ka.Ac()
    })
  }, draw:function(a) {
    this.ka.draw(a)
  }, Ea:function() {
    C.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.Vc = tm.createClass({superClass:O, init:function(a, b) {
    this.superInit(a, b, "erika")
  }, fb:n(), draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, Ea:function() {
    C.Gb(this.x, this.y, this.ca);
    gls2.cj(this.x, this.y, this.da).addChildTo(this.parent);
    this.remove()
  }});
  O.me = tm.createClass({superClass:O, ka:k, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.ka = b("tex_stage1", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, fb:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ka.Bc() : 5 === a.app.frame % 30 && this.ka.Ac()
    })
  }, Ea:function() {
    this.Ne()
  }, draw:function(a) {
    this.ka.draw(a)
  }});
  O.qe = tm.createClass({superClass:Ea, ka:k, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.ka = b("tex_stage1", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, fb:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ka.Bc() : 5 === a.app.frame % 30 && this.ka.Ac()
    })
  }, draw:function(a) {
    this.ka.draw(a)
  }, Ea:function() {
    this.Uf()
  }});
  O.pe = tm.createClass({superClass:O, init:function(a, b) {
    this.superInit(a, b, "mishou")
  }, fb:n(), Ea:function() {
    this.Ne()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  O.Hh = tm.createClass({superClass:Ea, init:function(a, b) {
    this.superInit(a, b, "hyuga")
  }, fb:n(), Ea:function() {
    this.Uf()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, rf:k, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.rf = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Bc:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.rf + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }, Ac:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.rf;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }})
})();
(function() {
  R = tm.createClass({ja:function(a) {
    a.on("destroy", function() {
      R.pf(this)
    })
  }});
  R.Ca = function(a, b) {
    var f = z[b].Md();
    a.on("enterframe", f);
    a.on("completeattack", function() {
      f.stop = j
    })
  };
  R.pf = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].Te && (a[b].stop = j)
      }
    }
  };
  R.tb = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.on("launch", function() {
      var a = w.randf(64, 192);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        R.Ca(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  R.tb = R.tb();
  R.Fa = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.on("launch", function() {
      var a = w.randf(192, 320);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        R.Ca(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  R.Fa = R.Fa();
  R.Wb = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.on("launch", function() {
      var a = w.randf(448, 576);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        R.Ca(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  R.Wb = R.Wb();
  R.ga = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.tweener.wait(w.rand(0, 1E3)).call(function() {
      this.speed = 6;
      R.Ca(this, "basic1-0");
      this.on("enterframe", function() {
        this.y < this.da.y && this.vb && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = S(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.gd() && this.vb && this.remove();
        if(22500 > Ga(this, this.da) || this.y > this.da.y + 150) {
          this.bc = m
        }
      })
    }.bind(a))
  }});
  R.ga = R.ga();
  var b = tm.createClass({superClass:R, init:function(a, b, f) {
    this.superInit();
    this.xi = a;
    this.wi = b;
    this.Gc = f
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.speed = this.xi;
    a.pc = this.wi;
    this.Gc && (a.Gc = [].concat(this.Gc));
    a.Fb = 0;
    a.on("enter", function() {
      R.Ca(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.pc) * this.speed;
      this.y += Math.sin(this.pc) * this.speed;
      this.vb && !this.gd() && this.remove();
      for(this.Fb = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.Fb;) {
        this.Fb += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.Fb;) {
        this.Fb -= 2 * Math.PI
      }
      this.bc = this.y < this.da.y && 4E4 < Ga(this, this.da);
      if(this.Gc) {
        for(var a = 0;a < this.Gc.length;a++) {
          var b = this.Gc[a];
          b.frame === this.frame && this.tweener.to({pc:b.dir !== i ? b.dir : this.pc, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  R.Bb = b(1, 0.25 * Math.PI);
  R.fj = b(1, -1.75 * Math.PI);
  R.Wc = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  R.la = b(1.6, 0.5 * Math.PI);
  R.Cb = b(1.6, -0.5 * Math.PI);
  R.Ng = tm.createClass({superClass:R, Eb:k, init:function(a) {
    this.superInit();
    this.Eb = a
  }, ja:function(a) {
    R.Ca(a, this.Eb);
    a.tweener.clear().to({x:240}, 1E3, "easeInOutQuad")
  }});
  R.yf = R.Ng("bukky-1-0");
  b = tm.createClass({superClass:R, Eb:k, Yf:m, init:function(a, b) {
    this.superInit();
    this.Eb = a;
    this.Yf = !!b
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Eb = this.Eb;
    a.on("enter", function() {
      R.Ca(this, this.Eb)
    });
    a.on("enterframe", function() {
      this.vb && !this.gd() && this.remove()
    });
    if(!this.Yf) {
      a.on("enterframe", function() {
        this.bc = this.y < this.da.y && 4E4 < Ga(this, this.da)
      })
    }
  }});
  R.kb = b("basic3-0", m);
  R.lb = b("basic3-1", m);
  R.Ab = b("cannon2-0", j);
  R.ud = b("cannon3-0", j);
  R.je = b("cannon5-0", j);
  b = tm.createClass({superClass:R, velocityY:0, Eb:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Eb = b
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.velocityY = this.velocityY;
    a.ma = [this.Eb];
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      R.Ca(this, this.ma[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.vb && !this.gd() && this.remove();
      this.bc = this.y < this.da.y
    })
  }});
  R.kc = b(0.5, "kurokawa-1");
  R.mc = tm.createClass({superClass:R, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      R.Ca(this, "yuri-0");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  R.lc = tm.createClass({superClass:R, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      R.Ca(this, "yuri-0");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  R.Ff = b(0.3, "komachi-1");
  R.Gf = b(0.5, "komachi-2");
  R.Vc = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, ja:function(a) {
    R.Ca(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.bc = this.vb
    })
  }});
  R.Vc = R.Vc();
  b = tm.createClass({superClass:R, ma:k, init:function(a) {
    this.superInit();
    this.ma = a
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.ma = [].concat(this.ma);
    a.Tc = m;
    a.tc = m;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Tc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 192 + 0.5 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Tc === m || 0 >= this.oa) && 1500 < this.frame && this.tc === m) {
        this.tc = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.oa) && !this.tc) {
        var a = this.ma.shift();
        R.Ca(this, a);
        this.ma.push(a)
      }
    })
  }});
  R.me = b(["honoka-1"]);
  R.qe = tm.createClass({superClass:R, ma:k, init:function() {
    this.superInit();
    this.ma = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.ma = [].concat(this.ma);
    a.Tc = m;
    a.tc = m;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Tc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.oa) && !this.tc) {
        var a = this.ma.shift();
        R.Ca(this, a);
        this.ma.push(a)
      }
    })
  }});
  R.uh = R.qe();
  R.re = tm.createClass({superClass:R, ma:k, init:function() {
    this.superInit();
    this.ma = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.ma = [].concat(this.ma);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.oa)) {
        var a = this.ma.shift();
        R.Ca(this, a);
        this.ma.push(a)
      }
    })
  }});
  R.re = R.re();
  R.se = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.oa || R.Ca(this, "nagisa-3-1")
    })
  }});
  R.se = R.se();
  R.pe = b(["mai-1", "mai-2"]);
  R.ve = tm.createClass({superClass:R, ma:k, init:function() {
    this.superInit();
    this.ma = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.ma = [].concat(this.ma);
    a.Tc = m;
    a.tc = m;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Tc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.oa) && !this.tc) {
        var a = this.ma.shift();
        R.Ca(this, a);
        this.ma.push(a)
      }
    })
  }});
  R.ve = R.ve();
  R.we = tm.createClass({superClass:R, ma:k, init:function() {
    this.superInit();
    this.ma = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.ma = [].concat(this.ma);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.oa)) {
        var a = this.ma.shift();
        R.Ca(this, a);
        this.ma.push(a)
      }
    })
  }});
  R.we = R.we();
  R.xe = tm.createClass({superClass:R, ma:k, init:function() {
    this.superInit();
    this.ma = ["saki-3-1", "saki-3-2"]
  }, ja:function(a) {
    R.prototype.ja.call(this, a);
    a.ma = [].concat(this.ma);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.oa)) {
        var a = this.ma.shift();
        R.Ca(this, a);
        this.ma.push(a)
      }
    })
  }});
  R.xe = R.xe()
})();
var Y = O, $ = R;
wa = {"heri1-left":[{aa:Y.ga, ba:$.tb, x:48, y:-100}, {aa:Y.ga, ba:$.Fa, x:96, y:-100}, {aa:Y.ga, ba:$.tb, x:144, y:-100}, {aa:Y.ga, ba:$.Fa, x:192, y:-100}, {aa:Y.ga, ba:$.tb, x:240, y:-100}], "heri1-center":[{aa:Y.ga, ba:$.tb, x:144, y:-100}, {aa:Y.ga, ba:$.Fa, x:192, y:-100}, {aa:Y.ga, ba:$.tb, x:240, y:-100}, {aa:Y.ga, ba:$.Fa, x:288, y:-100}, {aa:Y.ga, ba:$.tb, x:336, y:-100}], "heri1-right":[{aa:Y.ga, ba:$.tb, x:240, y:-100}, {aa:Y.ga, ba:$.Fa, x:288, y:-100}, {aa:Y.ga, ba:$.tb, x:336, y:-100}, 
{aa:Y.ga, ba:$.Fa, x:384, y:-100}, {aa:Y.ga, ba:$.tb, x:432, y:-100}], "heri1-left2":[{aa:Y.ga, ba:$.Fa, x:48, y:-100}, {aa:Y.ga, ba:$.Wb, x:96, y:-100}, {aa:Y.ga, ba:$.Fa, x:144, y:-100}, {aa:Y.ga, ba:$.Wb, x:192, y:-100}, {aa:Y.ga, ba:$.Fa, x:240, y:-100}], "heri1-center2":[{aa:Y.ga, ba:$.Fa, x:144, y:-100}, {aa:Y.ga, ba:$.Wb, x:192, y:-100}, {aa:Y.ga, ba:$.Fa, x:240, y:-100}, {aa:Y.ga, ba:$.Wb, x:288, y:-100}, {aa:Y.ga, ba:$.Fa, x:336, y:-100}], "heri1-right2":[{aa:Y.ga, ba:$.Fa, x:240, y:-100}, 
{aa:Y.ga, ba:$.Wb, x:288, y:-100}, {aa:Y.ga, ba:$.Fa, x:336, y:-100}, {aa:Y.ga, ba:$.Wb, x:384, y:-100}, {aa:Y.ga, ba:$.Fa, x:432, y:-100}], "heri2-left":[{aa:Y.Na, ba:$.ga, x:48, y:-100}, {aa:Y.Na, ba:$.ga, x:96, y:-100}, {aa:Y.Na, ba:$.ga, x:144, y:-100}, {aa:Y.Na, ba:$.ga, x:192, y:-100}, {aa:Y.Na, ba:$.ga, x:240, y:-100}], "heri2-center":[{aa:Y.Na, ba:$.ga, x:144, y:-100}, {aa:Y.Na, ba:$.ga, x:192, y:-100}, {aa:Y.Na, ba:$.ga, x:240, y:-100}, {aa:Y.Na, ba:$.ga, x:288, y:-100}, {aa:Y.Na, ba:$.ga, 
x:336, y:-100}], "heri2-right":[{aa:Y.Na, ba:$.ga, x:240, y:-100}, {aa:Y.Na, ba:$.ga, x:288, y:-100}, {aa:Y.Na, ba:$.ga, x:336, y:-100}, {aa:Y.Na, ba:$.ga, x:384, y:-100}, {aa:Y.Na, ba:$.ga, x:432, y:-100}], "tankRD-left":[{aa:Y.fa, ba:$.Bb, x:78, y:-50}, {aa:Y.fa, ba:$.Bb, x:28, y:-100}, {aa:Y.fa, ba:$.Bb, x:-22, y:-150}, {aa:Y.fa, ba:$.Bb, x:-72, y:-200}, {aa:Y.fa, ba:$.Bb, x:-122, y:-250}], "tankRD-center":[{aa:Y.fa, ba:$.Bb, x:222, y:-50}, {aa:Y.fa, ba:$.Bb, x:172, y:-100}, {aa:Y.fa, ba:$.Bb, 
x:122, y:-150}, {aa:Y.fa, ba:$.Bb, x:72, y:-200}, {aa:Y.fa, ba:$.Bb, x:22, y:-250}], "tankL-top":[{aa:Y.fa, ba:$.Wc, x:550, y:64}, {aa:Y.fa, ba:$.Wc, x:620, y:64}, {aa:Y.fa, ba:$.Wc, x:690, y:64}, {aa:Y.fa, ba:$.Wc, x:760, y:64}, {aa:Y.fa, ba:$.Wc, x:830, y:64}], "tank5-left":[{aa:Y.fa, ba:$.la, x:48, y:-70}, {aa:Y.fa, ba:$.la, x:48, y:-140}, {aa:Y.fa, ba:$.la, x:48, y:-210}, {aa:Y.fa, ba:$.la, x:48, y:-280}, {aa:Y.fa, ba:$.la, x:48, y:-350}], "tank5-center":[{aa:Y.fa, ba:$.la, x:240, y:-70}, {aa:Y.fa, 
ba:$.la, x:240, y:-140}, {aa:Y.fa, ba:$.la, x:240, y:-210}, {aa:Y.fa, ba:$.la, x:240, y:-280}, {aa:Y.fa, ba:$.la, x:240, y:-350}], "tank15-top":[{aa:Y.fa, ba:$.la, x:48, y:-70}, {aa:Y.fa, ba:$.la, x:48, y:-140}, {aa:Y.fa, ba:$.la, x:48, y:-210}, {aa:Y.fa, ba:$.la, x:48, y:-280}, {aa:Y.fa, ba:$.la, x:48, y:-350}, {aa:Y.fa, ba:$.la, x:240, y:-70}, {aa:Y.fa, ba:$.la, x:240, y:-140}, {aa:Y.fa, ba:$.la, x:240, y:-210}, {aa:Y.fa, ba:$.la, x:240, y:-280}, {aa:Y.fa, ba:$.la, x:240, y:-350}, {aa:Y.fa, ba:$.la, 
x:432, y:-70}, {aa:Y.fa, ba:$.la, x:432, y:-140}, {aa:Y.fa, ba:$.la, x:432, y:-210}, {aa:Y.fa, ba:$.la, x:432, y:-280}, {aa:Y.fa, ba:$.la, x:432, y:-350}], "tank25-top":[{aa:Y.fa, ba:$.la, x:48, y:-70}, {aa:Y.fa, ba:$.la, x:48, y:-140}, {aa:Y.fa, ba:$.la, x:48, y:-210}, {aa:Y.fa, ba:$.la, x:48, y:-280}, {aa:Y.fa, ba:$.la, x:48, y:-350}, {aa:Y.fa, ba:$.la, x:240, y:-70}, {aa:Y.fa, ba:$.la, x:240, y:-140}, {aa:Y.fa, ba:$.la, x:240, y:-210}, {aa:Y.fa, ba:$.la, x:240, y:-280}, {aa:Y.fa, ba:$.la, x:240, 
y:-350}, {aa:Y.fa, ba:$.la, x:432, y:-70}, {aa:Y.fa, ba:$.la, x:432, y:-140}, {aa:Y.fa, ba:$.la, x:432, y:-210}, {aa:Y.fa, ba:$.la, x:432, y:-280}, {aa:Y.fa, ba:$.la, x:432, y:-350}, {aa:Y.fa, ba:$.Cb, x:144, y:710}, {aa:Y.fa, ba:$.Cb, x:144, y:780}, {aa:Y.fa, ba:$.Cb, x:144, y:850}, {aa:Y.fa, ba:$.Cb, x:144, y:920}, {aa:Y.fa, ba:$.Cb, x:144, y:990}, {aa:Y.fa, ba:$.Cb, x:336, y:710}, {aa:Y.fa, ba:$.Cb, x:336, y:780}, {aa:Y.fa, ba:$.Cb, x:336, y:850}, {aa:Y.fa, ba:$.Cb, x:336, y:920}, {aa:Y.fa, ba:$.Cb, 
x:336, y:990}], "bukky-4-r":[{aa:Y.xf, ba:$.yf, x:480, y:-50}], "bukky-4-l":[{aa:Y.xf, ba:$.yf, x:0, y:-50}], "cannon-0":[{aa:Y.xa, ba:$.kb, x:48, y:-100}], "cannon-1":[{aa:Y.xa, ba:$.kb, x:96, y:-100}], "cannon-2":[{aa:Y.xa, ba:$.kb, x:144, y:-100}], "cannon-3":[{aa:Y.xa, ba:$.kb, x:192, y:-100}], "cannon-4":[{aa:Y.xa, ba:$.kb, x:240, y:-100}], "cannon-5":[{aa:Y.xa, ba:$.kb, x:288, y:-100}], "cannon-6":[{aa:Y.xa, ba:$.kb, x:336, y:-100}], "cannon-7":[{aa:Y.xa, ba:$.kb, x:384, y:-100}], "cannon-8":[{aa:Y.xa, 
ba:$.kb, x:432, y:-100}], "cannon-R0":[{aa:Y.xa, ba:$.kb, x:550, y:128}], "cannon-R1":[{aa:Y.xa, ba:$.kb, x:550, y:192}], "cannon-R2":[{aa:Y.xa, ba:$.kb, x:550, y:256}], "yayoi-0":[{aa:Y.xa, ba:$.lb, x:48, y:-100}], "yayoi-1":[{aa:Y.xa, ba:$.lb, x:96, y:-100}], "yayoi-2":[{aa:Y.xa, ba:$.lb, x:144, y:-100}], "yayoi-3":[{aa:Y.xa, ba:$.lb, x:192, y:-100}], "yayoi-4":[{aa:Y.xa, ba:$.lb, x:240, y:-100}], "yayoi-5":[{aa:Y.xa, ba:$.lb, x:288, y:-100}], "yayoi-6":[{aa:Y.xa, ba:$.lb, x:336, y:-100}], "yayoi-7":[{aa:Y.xa, 
ba:$.lb, x:384, y:-100}], "yayoi-8":[{aa:Y.xa, ba:$.lb, x:432, y:-100}], "yayoi-R0":[{aa:Y.xa, ba:$.lb, x:550, y:128}], "yayoi-R1":[{aa:Y.xa, ba:$.lb, x:550, y:192}], "yayoi-R2":[{aa:Y.xa, ba:$.lb, x:550, y:256}], "tsubomi-0":[{aa:Y.Cd, ba:$.ud, x:96, y:-100}], "tsubomi-1":[{aa:Y.Cd, ba:$.ud, x:240, y:-100}], "tsubomi-2":[{aa:Y.Cd, ba:$.ud, x:384, y:-100}], "tsubomi-R0":[{aa:Y.Cd, ba:$.ud, x:580, y:128}], "itsuki-0":[{aa:Y.oe, ba:$.je, x:96, y:-100}], "itsuki-1":[{aa:Y.oe, ba:$.je, x:240, y:-100}], 
"itsuki-2":[{aa:Y.oe, ba:$.je, x:384, y:-100}], "makoto-0":[{aa:Y.zb, ba:$.Ab, x:48, y:-100}], "makoto-1":[{aa:Y.zb, ba:$.Ab, x:96, y:-100}], "makoto-2":[{aa:Y.zb, ba:$.Ab, x:144, y:-100}], "makoto-3":[{aa:Y.zb, ba:$.Ab, x:192, y:-100}], "makoto-4":[{aa:Y.zb, ba:$.Ab, x:240, y:-100}], "makoto-5":[{aa:Y.zb, ba:$.Ab, x:288, y:-100}], "makoto-6":[{aa:Y.zb, ba:$.Ab, x:336, y:-100}], "makoto-7":[{aa:Y.zb, ba:$.Ab, x:384, y:-100}], "makoto-8":[{aa:Y.zb, ba:$.Ab, x:432, y:-100}], "makoto-R0":[{aa:Y.zb, 
ba:$.Ab, x:580, y:128}], "fighter-m-0":[{aa:Y.jc, ba:$.kc, x:96, y:-192}], "fighter-m-1":[{aa:Y.jc, ba:$.kc, x:144, y:-192}], "fighter-m-2":[{aa:Y.jc, ba:$.kc, x:192, y:-192}], "fighter-m-3":[{aa:Y.jc, ba:$.kc, x:240, y:-192}], "fighter-m-4":[{aa:Y.jc, ba:$.kc, x:288, y:-192}], "fighter-m-5":[{aa:Y.jc, ba:$.kc, x:336, y:-192}], "fighter-m-6":[{aa:Y.jc, ba:$.kc, x:384, y:-192}], "tsukikage-r":[{aa:Y.Ua, ba:$.mc(700), x:624, y:256}, {aa:Y.Ua, ba:$.mc(600), x:720, y:256}, {aa:Y.Ua, ba:$.mc(500), x:576, 
y:320}, {aa:Y.Ua, ba:$.mc(400), x:672, y:320}, {aa:Y.Ua, ba:$.mc(300), x:768, y:320}, {aa:Y.Ua, ba:$.mc(200), x:624, y:384}, {aa:Y.Ua, ba:$.mc(100), x:720, y:384}], "tsukikage-l":[{aa:Y.Ua, ba:$.lc(700), x:-144, y:384}, {aa:Y.Ua, ba:$.lc(600), x:-240, y:384}, {aa:Y.Ua, ba:$.lc(500), x:-96, y:320}, {aa:Y.Ua, ba:$.lc(400), x:-192, y:320}, {aa:Y.Ua, ba:$.lc(300), x:-288, y:320}, {aa:Y.Ua, ba:$.lc(200), x:-144, y:256}, {aa:Y.Ua, ba:$.lc(100), x:-240, y:256}], "komachi-0":[{aa:Y.zd, ba:$.Ff, x:144, y:-192}], 
"komachi-1":[{aa:Y.zd, ba:$.Ff, x:336, y:-192}], "komachi2-0":[{aa:Y.zd, ba:$.Gf, x:144, y:-192}], "komachi2-1":[{aa:Y.zd, ba:$.Gf, x:336, y:-192}], erika:[{aa:Y.Vc, ba:$.Vc, x:240, y:-100}], yukishiro:[{aa:Y.me, ba:$.me, x:240, y:-100}], misumi:[{aa:Y.qe, ba:[$.uh, $.re, $.se], x:240, y:-100, Qb:j}], mai:[{aa:Y.pe, ba:$.pe, x:780, y:128}], hyuga:[{aa:Y.Hh, ba:[$.ve, $.we, $.xe], x:240, y:-100, Qb:j}]};
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, g, l, p) {
    return c.action([c.ea(c.direction(b, "absolute"), f, g || E, l, p), c.repeat(a + "-1", [c.ea(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || E, l, p)])])
  }
  function d(a, b, c, d, g) {
    return function(l) {
      return f(a, b, c, l, d, g, i, i)
    }
  }
  function f(a, b, d, f, g, l, p, r) {
    return c.action([c.ea(c.direction(b), f, g || E, l, p, r), c.repeat(a + "-1", [c.ea(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || E, l, p, r)])])
  }
  function g(a) {
    return c.ea(c.direction(0), a || v, J)
  }
  function l(a) {
    return c.ea(c.direction(0), a || v, E)
  }
  function t(a) {
    return c.speed("$rank*2.0 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function B(a) {
    return c.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function D(a) {
    return c.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function v(a) {
    return c.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function A(a) {
    return c.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function X(a) {
    return c.wa(a, {visible:m})
  }
  function H(a) {
    return c.wa(a, {frame:4, Ob:j})
  }
  function Z(a) {
    return c.wa(a, {frame:3})
  }
  function E(a) {
    return c.wa(a, {frame:1})
  }
  function M(a) {
    return c.wa(a, {frame:2})
  }
  function J(a) {
    return c.wa(a, {frame:0})
  }
  function P(a) {
    return c.wa(a, {frame:3, Ob:j})
  }
  function Qa(a) {
    return c.wa(a, {frame:1, Ob:j})
  }
  function V(a) {
    return c.wa(a, {frame:2, Ob:j})
  }
  function Q(a) {
    return c.wa(a, {frame:0, Ob:j})
  }
  z = {};
  var c = q.ra;
  z["basic0-0"] = new q.ia({top:c.action([l])});
  z["basic0-1"] = new q.ia({top:c.action([b(D, -0.01, 8, d(3, -15, 15))])});
  z["basic1-0"] = new q.ia({top:c.action([c.repeat(999, [p(40), l(v)])])});
  z["basic1-1"] = new q.ia({top:c.action([c.repeat(999, [p(20), l(v)])])});
  z["basic2-0"] = new q.ia({top:c.action([c.repeat(999, [p(50), l(v)])])});
  z["basic3-0"] = new q.ia({top:c.action([c.wait(20), c.repeat(999, [p(100), b(v, 0.1, 3, g)])])});
  z["basic3-1"] = new q.ia({top:c.action([c.wait(20), c.repeat(999, [p(40), b(v, 0.1, 3, g)])])});
  z["bukky-1-0"] = new q.ia({top0:c.action([p(30), c.repeat(999, [c.repeat(5, [a(18, 0, 340, r, P), p(20)]), p(70)])]), top1:c.action([p(30), c.repeat(999, [c.repeat(5, [f(18, 0, 340, r(1), V), p(30)]), p(70)])])});
  z["cannon2-0"] = new q.ia({top0:c.action([c.repeat(999, [p(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", r), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", r), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", r), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", r), p(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", v, J), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", v, J), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", v, J), 
  a(3, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", v, J)])]), top1:c.action([c.repeat(999, [c.ea(c.direction("  0+$loop.index*10", "absolute"), A, H), c.ea(c.direction(" 90+$loop.index*10", "absolute"), A, H), c.ea(c.direction("180+$loop.index*10", "absolute"), A, H), c.ea(c.direction("270+$loop.index*10", "absolute"), A, H), c.ea(c.direction("  0-$loop.index*10", "absolute"), A, H), c.ea(c.direction(" 90-$loop.index*10", "absolute"), A, H), c.ea(c.direction("180-$loop.index*10", "absolute"), 
  A, H), c.ea(c.direction("270-$loop.index*10", "absolute"), A, H), p(10)])])});
  z["cannon2-1"] = new q.ia({top0:c.action([c.repeat(999, [p(20), a(6, "0-10+$loop.index*15", "0+10+$loop.index*15", r), a(6, "90-10+$loop.index*15", "90+10+$loop.index*15", r), a(6, "180-10+$loop.index*15", "180+10+$loop.index*15", r), a(6, "270-10+$loop.index*15", "270+10+$loop.index*15", r), p(20), a(7, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", v, J), a(7, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", v, J), a(7, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", v, J), 
  a(7, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", v, J)])]), top1:c.action([c.repeat(999, [c.ea(c.direction("  0+$loop.index*5", "absolute"), A, H), c.ea(c.direction(" 90+$loop.index*5", "absolute"), A, H), c.ea(c.direction("180+$loop.index*5", "absolute"), A, H), c.ea(c.direction("270+$loop.index*5", "absolute"), A, H), c.ea(c.direction("  0-$loop.index*5", "absolute"), A, H), c.ea(c.direction(" 90-$loop.index*5", "absolute"), A, H), c.ea(c.direction("180-$loop.index*5", "absolute"), 
  A, H), c.ea(c.direction("270-$loop.index*5", "absolute"), A, H), p(5)])])});
  z["cannon3-0"] = new q.ia({top0:c.action([c.repeat(999, [p(80), b(r, 0.01, 5, d(5, -30, 30, J, c.offsetX(-60))), b(r, 0.01, 5, d(5, -30, 30, J)), b(r, 0.01, 5, d(5, -30, 30, J, c.offsetX(60)))])])});
  z["cannon4-0"] = new q.ia({top0:c.action([p(20), c.repeat(999, [c.ea(r, V), c.repeat(8, [p(10), c.Wa("way", "$loop.count+1"), c.ea(c.direction("-12/2 - 12*($way-2)", "sequence"), r, V), c.repeat("$way-1", [c.ea(c.direction(12, "sequence"), r, V)])]), p(120)])])});
  z["cannon5-0"] = new q.ia({top0:c.action([c.repeat(999, [c.ea(c.direction(-60), t, X(c.ab("b"))), c.repeat(11, [p(5), c.ea(c.direction(10, "sequence"), t, X(c.ab("b")))]), p(60)])]), b:c.action([c.wait(5), c.Fc(c.speed(0), 0), b(r, 0.1, 5, function(a) {
    return c.ea(c.direction(0, "relative"), a, E)
  }), c.ib])});
  z["yuri-0"] = new q.ia({top:c.action([c.repeat(5, [p(60), c.repeat(3, [f(3, -30, 30, A, J), p(8)])])])});
  z["kurokawa-1"] = new q.ia({top0:c.action([c.repeat(999, [b(v, -0.01, 4, function(a) {
    return f(4, -45, 45, a, M, c.offsetX(-45), c.Da(j))
  }), b(v, -0.01, 4, function(a) {
    return f(4, -45, 45, a, M, c.offsetX(45), c.Da(j))
  }), p(90)])]), top1:c.action([c.repeat(999, [c.ea(c.direction(0), v, P, c.offsetX(-45), c.Da(j)), p(45), c.ea(c.direction(0), v, P, c.offsetX(45), c.Da(j)), p(45)])])});
  z["komachi-1"] = new q.ia({top0:c.action([c.repeat(20, [c.ea(c.direction(210, "absolute"), A(1), E, c.offsetX(-40)), c.ea(c.direction(120, "sequence"), A(1), E, c.offsetX(-40)), c.ea(c.direction(120, "sequence"), A(1), E, c.offsetX(-40)), c.repeat(57, [p(8), c.ea(c.direction(-720 / 57, "sequence"), A(1), E, c.offsetX(-40)), c.ea(c.direction(120, "sequence"), A(1), E, c.offsetX(-40)), c.ea(c.direction(120, "sequence"), A(1), E, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, [c.ea(c.direction(-210, 
  "absolute"), A(1), E, c.offsetX(40)), c.ea(c.direction(120, "sequence"), A(1), E, c.offsetX(40)), c.ea(c.direction(120, "sequence"), A(1), E, c.offsetX(40)), c.repeat(57, [p(8), c.ea(c.direction(720 / 57, "sequence"), A(1), E, c.offsetX(40)), c.ea(c.direction(120, "sequence"), A(1), E, c.offsetX(40)), c.ea(c.direction(120, "sequence"), A(1), E, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.ea(c.direction(0), v(0), Q, c.offsetX(-110), c.Da(j)), c.repeat(6, [c.wait(1), c.ea(c.direction(0, 
  "sequence"), v(0), Q, c.offsetX(-110), c.Da(j))]), p(10), c.ea(c.direction(0), v(0), Q, c.offsetX(110), c.Da(j)), c.repeat(6, [c.wait(1), c.ea(c.direction(0, "sequence"), v(0), Q, c.offsetX(110), c.Da(j))]), p(10)])])});
  z["komachi-2"] = new q.ia({top0:c.action([c.repeat(999, [b(v, -0.01, 4, function(a) {
    return c.action([f(4, -45, 45, a, M, c.offsetX(-45), c.Da(j)), p(4)])
  }), b(v, -0.01, 4, function(a) {
    return c.action([p(4), f(4, -45, 45, a, M, c.offsetX(45), c.Da(j))])
  }), p(90)])]), top1:c.action([c.repeat(999, [p(45), b(r, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.ea(c.direction("-5+$rand*10"), a, Qa)]), p(1)])
  }), p(180)])])});
  z["honoka-1"] = new q.ia({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, r, H, c.offsetX(0), c.offsetY(30)), p(30), f(5, -40, 40, A, H, c.offsetX(0), c.offsetY(30)), p(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, r(0.6), E), f(3, -3, 3, r(1), E), f(4, -4, 4, r(1.4), E), f(5, -5, 5, r(1.8), E), p(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, A, Q, c.offsetX(-110), c.offsetY(-70)), p(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, A, Q, c.offsetX(110), c.offsetY(-70)), 
  p(30)])])});
  z["nagisa-1-1"] = new q.ia({top0:c.action([p(90), c.repeat(3, [c.Wa("way", "5 + $loop.index*6"), b(v, 0.01, "3 + $loop.index*4", function(a) {
    return c.action([f("$way", -110, 110, a, E, c.offsetX(-190), c.offsetY(-20)), f("$way", -110, 110, a, E, c.offsetX(190), c.offsetY(-20)), c.wait(5)])
  }), p(60)]), p(60)])});
  z["nagisa-1-2"] = new q.ia({top0:c.action([c.repeat(12, [f(15, -90, 90, A, E), p(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [f(5, -65, -55, r, Q, c.offsetX(-190), c.offsetY(-20)), f(5, -35, -25, r, Q, c.offsetX(-190), c.offsetY(-20)), f(5, -5, 5, r, Q, c.offsetX(-190), c.offsetY(-20)), f(5, 25, 35, r, Q, c.offsetX(-190), c.offsetY(-20)), f(5, 55, 65, r, Q, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), p(60), c.repeat(3, [f(5, -65, -55, r, Q, c.offsetX(190), c.offsetY(-20)), f(5, -35, -25, 
  r, Q, c.offsetX(190), c.offsetY(-20)), f(5, -5, 5, r, Q, c.offsetX(190), c.offsetY(-20)), f(5, 25, 35, r, Q, c.offsetX(190), c.offsetY(-20)), f(5, 55, 65, r, Q, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), p(60)])])});
  z["nagisa-1-3"] = new q.ia({top0:c.action([p(60), c.repeat(3, [c.ea(c.direction(-60), r, M, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [p(15), c.ea(c.direction(6, "sequence"), r, M, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([p(80), c.repeat(3, [c.ea(c.direction(60), r, M, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [p(15), c.ea(c.direction(-6, "sequence"), r, M, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [f(5, -60, -40, r, H, c.offsetX(-190), 
  c.offsetY(-20)), f(5, -20, -10, r, H, c.offsetX(-190), c.offsetY(-20)), f(5, 10, 20, r, H, c.offsetX(-190), c.offsetY(-20)), f(5, 40, 60, r, H, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), p(60), c.repeat(3, [f(5, -60, -40, r, H, c.offsetX(190), c.offsetY(-20)), f(5, -20, -10, r, H, c.offsetX(190), c.offsetY(-20)), f(5, 10, 20, r, H, c.offsetX(190), c.offsetY(-20)), f(5, 40, 60, r, H, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), p(60)])])});
  z["nagisa-2-1"] = new q.ia({top0:c.action([p(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", A, J, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", A, J, c.offsetX(190), c.offsetY(-20)), p(10)])]), top1:c.action([p(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, P), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, P), p(12)])])});
  z["nagisa-2-2"] = new q.ia({top0:c.action([p(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", v, P), p(12)])]), top1:c.action([p(120), c.repeat(6, [a(9, 150, 130, A(0.8), E), a(9, 172, 188, A(0.8), E), a(9, 210, 230, A(0.8), E), p(30), a(9, 170, 150, A(0.8), E), a(9, 190, 210, A(0.8), E), p(30)])])});
  z["nagisa-2-3"] = new q.ia({top:c.action([p(120), c.repeat(12, [a(23, 0, 360, A, H, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, A, H), a(23, 0, 360, A, H, c.offsetX(190), c.offsetY(-20)), p(30)])])});
  z["nagisa-3-1"] = new q.ia({top0:c.action([p(50), c.repeat(999, [b(v, 0.001, 5, function(a) {
    return c.action([f(41, "-180", "+180", a, V, c.offsetX(-190), c.offsetY(-20)), f(41, "-180", "+180", a, V, c.offsetX(190), c.offsetY(-20))])
  }), p(50)])]), top1:c.action([c.repeat(999, [f(2, -2, 0, D, E), p(10), f(2, 0, 2, D, E), p(150)])])});
  z["mai-1"] = new q.ia({top0:c.action([p(50), c.repeat(50, [c.Wa("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", t, X(c.action([c.wait(8), c.ea(c.direction(0, "relative"), r, J), c.ib]))), c.Wa("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", t, X(c.action([c.wait(8), c.ea(c.direction(0, "relative"), r, J), c.ib]))), p(8)])]), top1:c.action([p(50), c.repeat(12, [a(5, -50, 50, t, X(c.action([c.wait(8), c.ea(c.direction(0, "relative"), r, P), c.ib]))), 
  a(5, -230, -130, t, X(c.action([c.wait(8), c.ea(c.direction(0, "relative"), r, P), c.ib]))), p(16), a(6, -50, 50, t, X(c.action([c.wait(8), c.ea(c.direction(0, "relative"), r, P), c.ib]))), a(6, -230, -130, t, X(c.action([c.wait(8), c.ea(c.direction(0, "relative"), r, P), c.ib]))), p(16)])])});
  z["mai-2"] = new q.ia({top:c.action([p(50), c.repeat(15, [c.ea(c.direction(-10), V(c.ab("fireChild", "$loop.index*10"))), p(8)])]), fireChild:c.action([p("40+$1"), b(r, 0.1, 5, function(a) {
    return c.ea(c.direction(-90, "absolute"), a, M)
  }), c.ib])});
  z["saki-1-1"] = new q.ia({top:c.action([p(100), c.repeat(3, [c.ab("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Wa("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", v, J), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", v, J), p(12)]), c.repeat("$2", [f(9, -20, 20, D, Z)])])});
  z["saki-1-2"] = new q.ia({top:c.action([p(100), c.repeat(5, [c.Wa("way", "5+$loop.index*2"), c.repeat(6, [c.Wa("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, v("$s"), P, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), p(90)])])});
  z["saki-1-3"] = new q.ia({top:c.action([c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.ea(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), P(c.ab("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Fc(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, r, Z), c.ib])});
  z["saki-2-1"] = new q.ia({top0:c.action([p(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", r, J, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", r, J, c.offsetX(40)), p(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", r, J, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", r, J, c.offsetX(40)), p(60)])]), top1:c.action([p(100), c.repeat(4, [c.repeat(7, [c.Wa("o", "$loop.index*20 - 60"), c.ea(c.direction("$o"), 
  B, Z), c.repeat(4, [c.Wa("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", B("$w*-1.0"), Z)])]), p(120)])])});
  z["saki-2-2"] = new q.ia({top:c.action([p(60), c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.ea(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), V(c.ab("seed"))), p(8), c.ea(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), V(c.ab("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Fc(c.speed(0), "10 + $rand*15"), c.wait(65), b(v, 0.14, 6, function(a) {
    return c.action([c.ea(c.direction(-48), a, M)])
  }), b(v, 0.14, 6, function(a) {
    return c.action([c.ea(c.direction(-36), a, M)])
  }), b(v, 0.14, 6, function(a) {
    return c.action([c.ea(c.direction(-24), a, M)])
  }), b(v, 0.14, 6, function(a) {
    return c.action([c.ea(c.direction(-12), a, M)])
  }), b(v, 0.14, 6, function(a) {
    return c.action([c.ea(c.direction(0), a, M)])
  }), b(v, 0.14, 6, function(a) {
    return c.action([c.ea(c.direction(12), a, M)])
  }), b(v, 0.14, 6, function(a) {
    return c.action([c.ea(c.direction(24), a, M)])
  }), b(v, 0.14, 6, function(a) {
    return c.action([c.ea(c.direction(36), a, M)])
  }), b(v, 0.14, 6, function(a) {
    return c.action([c.ea(c.direction(48), a, M)])
  }), p(2), c.ib])});
  z["saki-2-3"] = new q.ia({top:c.action([p(60), c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.ea(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), P(c.ab("seed"))), p(8), c.ea(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), P(c.ab("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Fc(c.speed(0), "10 + $rand*20"), c.wait(65), b(v, 0.18, 7, function(a) {
    return c.action([c.ea(c.direction(180, "absolute"), a, Z)])
  }), p(2), c.ib])});
  z["saki-3-1"] = new q.ia({top:c.action([c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.ea(c.direction("60*$dir + $loop.index*5*-$dir"), c.speed(2), V(c.ab("seed"))), p(8), c.ea(c.direction("60*-$dir + $loop.index*5*$dir"), c.speed(2), V(c.ab("seed"))), p(8)])]), seed:c.action([c.wait(10), c.Fc(c.speed(0), "30 + $rand*40"), c.wait(65), a(4, 0, 270, D, M), a(4, 0, 270, v, M), a(4, 0, 270, r, M), p(2), c.ib])});
  z["saki-3-2"] = new q.ia({top:c.action([c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.ea(c.direction("60*$dir + $loop.index*5*-$dir"), c.speed(2), P(c.ab("seed"))), p(8), c.ea(c.direction("60*-$dir + $loop.index*5*$dir"), c.speed(2), P(c.ab("seed"))), p(8)])]), seed:c.action([c.wait(10), c.Fc(c.speed(0), "30 + $rand*40"), c.wait(65), a(4, 45, 315, D, Z), a(4, 45, 315, v, Z), a(4, 45, 315, r, Z), p(2), c.ib])});
  z.ja = function() {
    for(var a = 0;2E3 > a;a++) {
      xa.push(N())
    }
    a = z.Ld = tm.Ya.ic.bd;
    a.Ue = function(a) {
      return!(a instanceof N) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Vf = function(a) {
      var b = xa.shift(0);
      if(b) {
        return b.oa = u.Lg, ja.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.Ob ? (b.scaleX = 1, b.scaleY = 1, b.gc = m) : (b.scaleX = 0.8, b.scaleY = 1.5, b.gc = j), b.visible = a.visible === m ? m : j, b.Ob = !!a.Ob, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Zf = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.yc = 3.5;
    q.ya.Qa.$rank = 0;
    q.ya.Qa.$hyperOff = 1
  };
  z.erase = function(a, b, c) {
    for(var d = [].concat(ja), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var l = sa(!!b);
        l.setPosition(d[f].x, d[f].y);
        c && (l.uc = j)
      }
      d[f].Ea()
    }
  };
  z.$c = function() {
    for(var a = [].concat(ja), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  N = tm.createClass({superClass:tm.display.Sprite, oa:0, Ob:m, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      xa.push(this);
      var a = ja.indexOf(this);
      -1 !== a && ja.splice(a, 1)
    })
  }, update:function() {
    this.Ob && (this.rotation += 15)
  }, Ea:function() {
    var a = I(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var xa = [], ja = N.Pa = []
})();
var S, T, Ha, U, Pa;
S = function(b, a, d) {
  return b < a ? a : b > d ? d : b
};
Pa = Math.PI / 180;
Ha = function(b) {
  return b * Pa
};
U = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
T = function(b, a) {
  return window.Math.random() * (a - b) + b
};

