/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(c) {
  throw c;
}
var i = void 0, k = !0, l = null, t = !1;
function G() {
  return function() {
  }
}
var J = {kj:this};
(function() {
  function c(a, c) {
    for(var d = 0, j = a.length;d < j;d++) {
      if(a[d].label == c) {
        return a[d]
      }
    }
  }
  J.ha = function(a) {
    this.type = "none";
    this.root = this;
    this.nb = [];
    this.jf = [];
    this.sf = [];
    if(a !== i) {
      for(var c in a) {
        a.hasOwnProperty(c) && (a[c].label = c, a[c] instanceof J.Sb ? this.nb.push(a[c]) : a[c] instanceof J.Qa ? this.jf.push(a[c]) : a[c] instanceof J.Jd && this.sf.push(a[c]))
      }
      a = 0;
      for(c = this.nb.length;a < c;a++) {
        this.nb[a].ec(this)
      }
      a = 0;
      for(c = this.jf.length;a < c;a++) {
        this.jf[a].ec(this)
      }
      a = 0;
      for(c = this.sf.length;a < c;a++) {
        this.sf[a].ec(this)
      }
    }
  };
  J.ha.prototype.oi = function(a) {
    return c(this.nb, a)
  };
  J.ha.prototype.qk = function() {
    for(var a = [], c = 0, d = this.nb.length;c < d;c++) {
      var j = this.nb[c];
      j.label && 0 === j.label.indexOf("top") && (a[a.length] = j.label)
    }
    return a
  };
  J.ha.prototype.fk = function(a) {
    var c;
    if(c = this.oi(a)) {
      return c
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  J.ha.prototype.gk = function(a) {
    return c(this.jf, a)
  };
  J.ha.prototype.hk = function(a) {
    var c;
    if(c = this.gk(a)) {
      return c
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  J.ha.prototype.ik = function(a) {
    return c(this.sf, a)
  };
  J.ha.prototype.jk = function(a) {
    var c;
    if(c = this.ik(a)) {
      return c
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  J.Qa = function() {
    this.root = this.label = l;
    this.direction = new J.Hc(0);
    this.speed = new J.Nc(1);
    this.nb = [];
    this.$a = {};
    this.Ca = {}
  };
  J.Qa.prototype.clone = function(a) {
    var c = new J.Qa;
    c.label = this.label;
    c.root = this.root;
    c.nb = this.nb;
    c.direction = new J.Hc(a.gb(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new J.Nc(a.gb(this.speed.value));
    c.speed.type = this.speed.type;
    c.$a = this.$a;
    c.Ca = a.Ca;
    return c
  };
  J.Qa.prototype.ec = function(a) {
    this.root = a;
    for(var c = 0, d = this.nb.length;c < d;c++) {
      this.nb[c].ec(a)
    }
  };
  J.Se = function(a) {
    this.root = l;
    this.label = a;
    this.kb = []
  };
  J.Se.prototype.clone = function(a) {
    var c = a.Ca;
    a.Ca = a.yg(this.kb);
    var d = this.root.hk(this.label).clone(a);
    a.Ca = c;
    return d
  };
  J.Se.prototype.ec = function(a) {
    this.root = a
  };
  J.mb = function() {
    this.Hb = ""
  };
  J.mb.prototype.ec = function(a) {
    this.root = a
  };
  J.Sb = function() {
    this.Hb = "action";
    this.root = this.label = l;
    this.kc = [];
    this.kb = []
  };
  J.Sb.prototype = new J.mb;
  J.Sb.prototype.ec = function(a) {
    this.root = a;
    for(var c = 0, d = this.kc.length;c < d;c++) {
      this.kc[c].ec(a)
    }
  };
  J.Sb.prototype.clone = function() {
    var a = new J.Sb;
    a.label = this.label;
    a.root = this.root;
    a.kc = this.kc;
    return a
  };
  J.Hd = function(a) {
    this.Hb = "actionRef";
    this.label = a;
    this.root = l;
    this.kb = []
  };
  J.Hd.prototype = new J.mb;
  J.Hd.prototype.clone = function() {
    var a = new J.Sb;
    a.root = this.root;
    a.kc.push(this);
    return a
  };
  J.Jd = function() {
    this.Hb = "fire";
    this.Ha = this.speed = this.direction = this.root = this.label = l;
    this.$a = new J.We
  };
  J.Jd.prototype = new J.mb;
  J.Jd.prototype.ec = function(a) {
    this.root = a;
    this.Ha && this.Ha.ec(a)
  };
  J.Tf = function(a) {
    this.Hb = "fireRef";
    this.label = a;
    this.kb = []
  };
  J.Tf.prototype = new J.mb;
  J.Ue = function() {
    this.Hb = "changeDirection";
    this.direction = new J.Hc;
    this.Db = 0
  };
  J.Ue.prototype = new J.mb;
  J.Ve = function() {
    this.Hb = "changeSpeed";
    this.speed = new J.Nc;
    this.Db = 0
  };
  J.Ve.prototype = new J.mb;
  J.Qe = function() {
    this.Hb = "accel";
    this.Dc = new J.Vf;
    this.Gc = new J.wg;
    this.Db = 0
  };
  J.Qe.prototype = new J.mb;
  J.$e = function(a) {
    this.Hb = "wait";
    this.value = a || 0
  };
  J.$e.prototype = new J.mb;
  J.vg = function() {
    this.Hb = "vanish"
  };
  J.vg.prototype = new J.mb;
  J.Ye = function() {
    this.Hb = "repeat";
    this.Vi = 0;
    this.action = l;
    this.kb = []
  };
  J.Ye.prototype = new J.mb;
  J.Ye.prototype.ec = function(a) {
    this.root = a;
    this.action && this.action.ec(a)
  };
  J.Of = function(a, c) {
    this.Hb = "bind";
    this.ll = a;
    this.ek = c
  };
  J.Of.prototype = new J.mb;
  J.lg = function(a, c) {
    this.Hb = "notify";
    this.bk = a;
    this.kb = c || l
  };
  J.lg.prototype = new J.mb;
  J.hj = new J.mb;
  J.Hc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  J.Nc = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  J.Vf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  J.wg = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  J.We = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.na = k;
    a.na !== i && (this.na = !!a.na)
  };
  J.Nh = function(a) {
    this.value = a || 0
  };
  J.Oh = function(a) {
    this.value = a || 0
  };
  J.yh = function(a) {
    this.value = !!a
  }
})();
J.Ua = function(c) {
  this.Wh = c;
  this.af = [];
  this.Yc = -1;
  this.wb = l;
  this.Ca = {}
};
J.Ua.prototype.next = function() {
  this.Yc += 1;
  if(this.wb !== l) {
    var c = this.wb.kc[this.Yc];
    if(c !== i) {
      if(c instanceof J.Sb) {
        return this.le(), this.wb = c, this.Ca = this.xg(), this.next()
      }
      if(c instanceof J.Hd) {
        return this.le(), this.wb = this.Wh.fk(c.label), this.Ca = this.yg(c.kb), this.next()
      }
      if(c instanceof J.Ye) {
        return this.Ca.Yd = 0, this.Ca.Fi = this.gb(c.Vi) | 0, this.le(), this.wb = c.action.clone(), this.Ca = this.xg(), this.next()
      }
      if(c instanceof J.Jd) {
        var a = new J.Jd;
        a.Ha = c.Ha.clone(this);
        c.direction !== l && (a.direction = new J.Hc(this.gb(c.direction.value)), a.direction.type = c.direction.type);
        c.speed !== l && (a.speed = new J.Nc(this.gb(c.speed.value)), a.speed.type = c.speed.type);
        a.$a = new J.We;
        a.$a.offsetX = this.gb(c.$a.offsetX);
        a.$a.offsetY = this.gb(c.$a.offsetY);
        a.$a.na = c.$a.na;
        return a
      }
      return c instanceof J.Tf ? (this.le(), this.wb = new J.Sb, this.wb.kc = [this.Wh.jk(c.label)], this.Ca = this.yg(c.kb), this.next()) : c instanceof J.Ue ? (a = new J.Ue, a.direction.type = c.direction.type, a.direction.value = this.gb(c.direction.value), a.Db = this.gb(c.Db), a) : c instanceof J.Ve ? (a = new J.Ve, a.speed.type = c.speed.type, a.speed.value = this.gb(c.speed.value), a.Db = this.gb(c.Db), a) : c instanceof J.Qe ? (a = new J.Qe, a.Dc.type = c.Dc.type, a.Dc.value = this.gb(c.Dc.value), 
      a.Gc.type = c.Gc.type, a.Gc.value = this.gb(c.Gc.value), a.Db = this.gb(c.Db), a) : c instanceof J.$e ? new J.$e(this.gb(c.value)) : c instanceof J.vg ? c : c instanceof J.Of ? (this.Ca["$" + c.ll] = this.gb(c.ek), J.hj) : c instanceof J.lg ? c : l
    }
    this.Pj();
    if(this.wb === l) {
      return l
    }
    if((c = this.wb.kc[this.Yc]) && "repeat" == c.Hb) {
      this.Ca.Yd++, this.Ca.Yd < this.Ca.Fi && (this.le(), this.wb = c.action.clone(), this.Ca = this.xg())
    }
    return this.next()
  }
  return l
};
J.Ua.prototype.le = function() {
  this.af.push({action:this.wb, cursor:this.Yc, scope:this.Ca});
  this.Yc = -1
};
J.Ua.prototype.Pj = function() {
  var c = this.af.pop();
  c ? (this.Yc = c.cursor, this.wb = c.action, this.Ca = c.scope) : (this.Yc = -1, this.wb = l, this.Ca = {})
};
J.Ua.prototype.gb = function(c) {
  var a;
  if("boolean" === typeof c || "number" === typeof c) {
    return c
  }
  if(isNaN(a = Number(c))) {
    if((a = this.Ca[c]) || (a = J.Ua.Zb[c])) {
      return a
    }
    if("$rand" === c) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var f in J.Ua.Zb) {
    J.Ua.Zb.hasOwnProperty(f) && (a[f] = J.Ua.Zb[f])
  }
  for(f in this.Ca) {
    this.Ca.hasOwnProperty(f) && (a[f] = this.Ca[f])
  }
  a.$rand = Math.random();
  (f = this.af[this.af.length - 1]) && (a.$loop = {index:f.scope.Yd, count:f.scope.Yd + 1, first:0 === f.scope.Yd, last:f.scope.Yd + 1 >= f.scope.Fi});
  return(new Function("return " + c.split("$").join("this.$"))).apply(a)
};
J.Ua.prototype.yg = function(c) {
  var a = {};
  if(c) {
    for(var f = 0, d = c.length;f < d;f++) {
      a["$" + (f + 1)] = this.gb(c[f])
    }
  }else {
    for(f in this.Ca) {
      this.Ca.hasOwnProperty(f) && (a[f] = this.Ca[f])
    }
  }
  return a
};
J.Ua.prototype.xg = function() {
  var c = {}, a;
  for(a in this.Ca) {
    this.Ca.hasOwnProperty(a) && (c[a] = this.Ca[a])
  }
  return c
};
J.ha.prototype.Pg = function(c) {
  var a = new J.Ua(this);
  if(c = this.oi(c)) {
    a.wb = c
  }
  return a
};
J.Qa.prototype.Pg = function() {
  var c = new J.Ua(this.root), a = new J.Sb;
  a.root = this.root;
  a.kc = this.nb;
  c.wb = a;
  c.Ca = this.Ca;
  return c
};
J.Ua.Zb = {};
J.Ia = function(c) {
  c = c || "";
  for(var a in J.Ia) {
    J.Ia.hasOwnProperty(a) && (J.kj[c + a] = J.Ia[a])
  }
};
J.Ia.action = function(c) {
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
  var d = new J.Sb;
  if(c instanceof Array) {
    c.some(function(a) {
      return!(a instanceof J.mb)
    }) && g(Error("argument type error.")), d.kc = c
  }else {
    a = 0;
    for(f = arguments.length;a < f;a++) {
      arguments[a] instanceof J.mb ? d.kc[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return d
};
J.Ia.ma = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("label is required."));
  d = new J.Hd(c);
  if(a instanceof Array) {
    d.kb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.kb.push(arguments[f])
    }
  }
  return d
};
J.Ia.Ha = function(c, a, f, d) {
  for(var j = 0, m = arguments.length;j < m;j++) {
    arguments[j] instanceof Function && (arguments[j] = arguments[j]())
  }
  m = new J.Qa;
  for(j = 0;j < arguments.length;j++) {
    arguments[j] instanceof J.Hc ? m.direction = arguments[j] : arguments[j] instanceof J.Nc ? m.speed = arguments[j] : arguments[j] instanceof J.Sb ? m.nb.push(arguments[j]) : arguments[j] instanceof J.Hd ? m.nb.push(arguments[j]) : arguments[j] instanceof Array ? m.nb.push(J.Ia.action(arguments[j])) : arguments[j] instanceof Object ? m.$a = arguments[j] : "string" === typeof arguments[j] && (m.label = arguments[j])
  }
  return m
};
J.Ia.ol = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("label is required."));
  d = new J.Se(c);
  if(a instanceof Array) {
    d.kb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.kb.push(arguments[f])
    }
  }
  return d
};
J.Ia.fire = function(c, a, f, d) {
  for(var j = 0, m = arguments.length;j < m;j++) {
    arguments[j] instanceof Function && (arguments[j] = arguments[j]())
  }
  m = new J.Jd;
  for(j = 0;j < arguments.length;j++) {
    arguments[j] instanceof J.Hc ? m.direction = arguments[j] : arguments[j] instanceof J.Nc ? m.speed = arguments[j] : arguments[j] instanceof J.Qa ? m.Ha = arguments[j] : arguments[j] instanceof J.Se ? m.Ha = arguments[j] : arguments[j] instanceof J.We ? m.$a = arguments[j] : arguments[j] instanceof J.Nh ? m.$a.offsetX = arguments[j].value : arguments[j] instanceof J.Oh ? m.$a.offsetY = arguments[j].value : arguments[j] instanceof J.yh && (m.$a.na = arguments[j].value)
  }
  m.Ha === i && g(Error("bullet (or bulletRef) is required."));
  return m
};
J.Ia.tl = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("label is required."));
  d = new J.Tf(c);
  if(a instanceof Array) {
    d.kb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.kb.push(arguments[f])
    }
  }
  return d
};
J.Ia.pl = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("direction is required."));
  a === i && g(Error("term is required."));
  f = new J.Ue;
  f.direction = c instanceof J.Hc ? c : new J.Hc(c);
  f.Db = a;
  return f
};
J.Ia.kf = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("speed is required."));
  a === i && g(Error("term is required."));
  f = new J.Ve;
  f.speed = c instanceof J.Nc ? c : new J.Nc(c);
  f.Db = a;
  return f
};
J.Ia.nl = function(c, a, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new J.Qe;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof J.Vf ? j.Dc = c : arguments[d] instanceof J.wg ? j.Gc = a : j.Db = arguments[d]
  }
  j.Dc === i && j.Gc === i && g(Error("horizontal or vertical is required."));
  j.Db === i && g(Error("term is required."));
  return j
};
J.Ia.wait = function(c) {
  for(var a = 0, f = arguments.length;a < f;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  c === i && g(Error("value is required."));
  return new J.$e(c)
};
J.Ia.Ma = function() {
  return new J.vg
};
J.Ia.repeat = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("times is required."));
  a === i && g(Error("action is required."));
  d = new J.Ye;
  d.Vi = c;
  if(a instanceof J.Sb || a instanceof J.Hd) {
    d.action = a
  }else {
    if(a instanceof Array) {
      d.action = J.Ia.action(a)
    }else {
      for(var j = [], f = 1;f < arguments.length;f++) {
        j.push(arguments[f])
      }
      d.action = J.Ia.action(j)
    }
  }
  return d
};
J.Ia.ua = function(c, a) {
  return new J.Of(c, a)
};
J.Ia.yl = function(c, a) {
  return new J.lg(c, a)
};
J.Ia.direction = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("value is required."));
  f = new J.Hc(c);
  a !== i && (f.type = a);
  return f
};
J.Ia.speed = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("value is required."));
  f = new J.Nc(c);
  a && (f.type = a);
  return f
};
J.Ia.Dc = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("value is required."));
  f = new J.Vf(c);
  a && (f.type = a);
  return f
};
J.Ia.Gc = function(c, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && g(Error("value is required."));
  f = new J.wg(c);
  a && (f.type = a);
  return f
};
J.Ia.sl = function(c) {
  return new J.We(c)
};
J.Ia.offsetX = function(c) {
  return new J.Nh(c)
};
J.Ia.offsetY = function(c) {
  return new J.Oh(c)
};
J.Ia.na = function(c) {
  return new J.yh(c)
};
tm.Gb = tm.Gb || {};
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
  tm.Gb.md = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.Th = a
  }, nf:function(a, c) {
    var d = this.Th.qk();
    if(c === i && 0 < d.length) {
      for(var f = [], q = 0, p = d.length;q < p;q++) {
        f[f.length] = this.Uh(a, d[q])
      }
      for(var n = function() {
        if(!n.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          n.Jg == f.length && (n.se = k, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, q = f.length;q--;) {
        f[q].Hf = n
      }
      n.Jg = 0;
      n.ei = function() {
        this.Jg++
      };
      n.Jg = 0;
      n.se = t;
      n.Af = k;
      n.stop = t;
      return n
    }
    return this.Uh(a, c)
  }, Uh:function(a, c) {
    function d() {
      if(!d.stop) {
        d.pa += 1;
        this.pa = d.pa;
        var a = d.lf, c = d.Oj;
        if(c) {
          if(d.pa < d.Hg ? d.direction += d.Ud : d.pa === d.Hg && (d.direction = d.$c), d.pa < d.Ig ? d.speed += d.Oe : d.pa === d.Ig && (d.speed = d.ee), d.pa < d.Bg ? (d.Ed += d.df, d.Gd += d.ef) : d.pa === d.Bg && (d.Ed = d.bf, d.Gd = d.cf), this.x += Math.cos(d.direction) * d.speed * a.Fd, this.y += Math.sin(d.direction) * d.speed * a.Fd, this.x += d.Ed * a.Fd, this.y += d.Gd * a.Fd, a.Tg(this)) {
            if(a.jd || this.jd) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.pa < d.aj || d.se)) {
              for(var f;f = d.bj.next();) {
                switch(f.Hb) {
                  case "fire":
                    c.Lj.call(this, f, a, d, c);
                    break;
                  case "wait":
                    a = 0;
                    d.aj = "number" === typeof f.value ? d.pa + f.value : 0 !== (a = ~~f.value) ? d.pa + a : d.pa + eval(f.value);
                    return;
                  case "changeDirection":
                    c.Gj.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    c.Hj.call(this, f, d);
                    break;
                  case "accel":
                    c.Ej.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    c.Mj.call(this, f)
                }
              }
              d.se = k;
              d.Hf ? d.Hf.ei() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.se = k, d.Hf ? d.Hf.ei() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var c = {}, d = tm.Gb.md.te, f;
      for(f in d) {
        d.hasOwnProperty(f) && (c[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (c[f] = a[f])
      }
      return c
    }(a);
    a.target || g(Error("target is undefined in config."));
    c = c || "top";
    "string" === typeof c ? d.bj = this.Th.Pg(c) : c instanceof J.Qa ? d.bj = c.Pg() : (window.console.error(a, c), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Oj = this;
    d.lf = a;
    d.aj = -1;
    d.se = t;
    d.direction = 0;
    d.Ai = 0;
    d.speed = 0;
    d.Ci = 0;
    d.Ed = 0;
    d.Gd = 0;
    d.Ud = 0;
    d.$c = 0;
    d.Hg = -1;
    d.Oe = 0;
    d.ee = 0;
    d.Ig = -1;
    d.df = 0;
    d.bf = 0;
    d.ef = 0;
    d.cf = 0;
    d.Bg = -1;
    d.pa = -1;
    d.stop = t;
    d.Af = k;
    return d
  }, Kj:function(a) {
    function c() {
      c.stop || (this.x += c.ii, this.y += c.ji, c.lf.Tg(this) || this.remove())
    }
    a = function(a) {
      var c = {}, d = tm.Gb.md.te, f;
      for(f in d) {
        d.hasOwnProperty(f) && (c[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (c[f] = a[f])
      }
      return c
    }(a);
    a.target || g(Error("target is undefined in config."));
    c.lf = a;
    c.direction = 0;
    c.speed = 0;
    c.ii = 0;
    c.ji = 0;
    c.stop = t;
    c.Af = k;
    return c
  }, Lj:function(c, d, f, B) {
    if(this.Ok === i || this.Ib) {
      var q = {label:c.Ha.label}, p;
      for(p in c.Ha.$a) {
        q[p] = c.Ha.$a[p]
      }
      if(q = d.ai(q)) {
        B = (p = 0 === c.Ha.nb.length) ? B.Kj(d) : B.nf(d, c.Ha);
        var n = this, s = {x:this.x + c.$a.offsetX, y:this.y + c.$a.offsetY};
        f.Ai = B.direction = function(p) {
          var h = eval(p.value) * Math.DEG_TO_RAD;
          switch(p.type) {
            case "aim":
              return d.target ? c.$a.na ? a(s, d.target) + h : a(n, d.target) + h : h - Math.PI / 2;
            case "absolute":
              return h - Math.PI / 2;
            case "relative":
              return f.direction + h;
            default:
              return f.Ai + h
          }
        }(c.direction || c.Ha.direction);
        f.Ci = B.speed = function(a) {
          var c = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + c;
            case "sequence":
              return f.Ci + c;
            default:
              return c
          }
        }(c.speed || c.Ha.speed);
        q.x = s.x;
        q.y = s.y;
        p && (B.ii = Math.cos(B.direction) * B.speed * d.Fd, B.ji = Math.sin(B.direction) * B.speed * d.Fd);
        q.jd = !!q.jd;
        if(d.jd || q.jd) {
          q.rotation = (B.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, q.speed = B.speed
        }
        q.addEventListener("enterframe", B);
        d.Yh ? d.Yh.addChild(q) : this.parent && this.parent.addChild(q)
      }
    }
  }, Gj:function(d, f, r) {
    var B = eval(d.direction.value) * Math.DEG_TO_RAD, q = eval(d.Db);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        r.$c = a(this, d) + B;
        r.Ud = c(r.$c - r.direction) / q;
        break;
      case "absolute":
        r.$c = B - Math.PI / 2;
        r.Ud = c(r.$c - r.direction) / q;
        break;
      case "relative":
        r.$c = r.direction + B;
        r.Ud = c(r.$c - r.direction) / q;
        break;
      case "sequence":
        r.Ud = B, r.$c = r.direction + r.Ud * (q - 1)
    }
    r.Hg = r.pa + q
  }, Hj:function(a, c) {
    var d = eval(a.speed.value), f = eval(a.Db);
    switch(a.speed.type) {
      case "absolute":
        c.ee = d;
        c.Oe = (c.ee - c.speed) / f;
        break;
      case "relative":
        c.ee = d + c.speed;
        c.Oe = (c.ee - c.speed) / f;
        break;
      case "sequence":
        c.Oe = d, c.ee = c.speed + c.Oe * f
    }
    c.Ig = c.pa + f
  }, Ej:function(a, c) {
    var d = eval(a.Db);
    c.Bg = c.pa + d;
    if(a.Dc) {
      var f = eval(a.Dc.value);
      switch(a.Dc.type) {
        case "absolute":
        ;
        case "sequence":
          c.df = (f - c.Ed) / d;
          c.bf = f;
          break;
        case "relative":
          c.df = f, c.bf = (f - c.Ed) * d
      }
    }else {
      c.df = 0, c.bf = c.Ed
    }
    if(a.Gc) {
      switch(f = eval(a.Gc.value), a.Gc.type) {
        case "absolute":
        ;
        case "sequence":
          c.ef = (f - c.Gd) / d;
          c.cf = f;
          break;
        case "relative":
          c.ef = f, c.cf = (f - c.Gd) * d
      }
    }else {
      c.ef = 0, c.cf = c.Gd
    }
  }, Mj:function(a) {
    var c = tm.event.Event(a.bk);
    if(a.kb) {
      for(var d in a.kb) {
        c[d] = a.kb[d]
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
  tm.Gb.Yj = function(a) {
    var c = tm.app.Sprite(f, 8, 8);
    c.label = a.label;
    return c
  };
  var d = l;
  tm.Gb.hi = function(a) {
    if(d === l) {
      if(!a.getRoot().app) {
        return k
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Gb.ql = function() {
    return k
  };
  tm.Gb.md.te = {ai:tm.Gb.Yj, Tg:tm.Gb.hi, Gl:0, jd:t, Fd:2, target:l};
  J.ha.prototype.nf = function(a) {
    return tm.Gb.md(this).nf(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(G());
tm.main(function() {
  gls2.lj("#canvas2d");
  gls2.core.run()
});
gls2.lj = tm.createClass({superClass:tm.display.CanvasApp, ze:0, uk:0, wk:0, vk:0, sk:0, tk:l, pe:3, Dd:3, ki:1, ba:l, init:function(c) {
  gls2.core !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(c);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.wh = [];
  this.keyboard = tm.input.Keyboard(window);
  c = tm.ui.LoadingScene({assets:{achevements:"assets/achevements.json", tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex4:"assets/tex4.png", tex5:"assets/tex5.png", tex_tank1:"assets/tex_tank1.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", "kanade-cannon":"assets/kanade-cannon.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", 
  laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", 
  bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/Blue_Moon_MIKU_Append.mp3", bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", 
  "sound/achevement":"assets2/se_maoudamashii_system46.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", 
  "sound/voWarning":"assets/vo_warning.mp3"}, width:480, height:640, nextScene:function() {
    this.Nj();
    return gls2.TitleScene()
  }.bind(this)});
  c.bg.canvas.clearColor("black");
  this.replaceScene(c)
}, bi:function() {
  var c = window.achevements, a = tm.asset.AssetManager.get("achevements").data;
  return!c ? 0 : Math.floor(c.reduce(function(c, d) {
    return a[d] ? c + K[a[d].grade] : c
  }, 0))
}, update:function() {
  for(var c = [].concat(this.wh), a = 0;a < c.length;a++) {
    c[a].frame === this.frame ? c[a].fn() : this.wh.erase(c[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Nj:function() {
  gls2.ya.setup(12345);
  "tex1 tex2 tex3 tex4 tex5 tex_tank1 yotsubaLeaf kanade-cannon".split(" ").forEach(function(c) {
    var a = tm.asset.AssetManager.get(c), f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawTexture(a, 0, 0);
    f = f.getBitmap();
    f.filter({calc:function(a, c, d, f, q) {
      q.setPixelIndex(c, a[0], 0, 0)
    }});
    var d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawBitmap(f, 0, 0);
    tm.asset.AssetManager.set(c + "Red", d)
  });
  gls2.fa.setup();
  gls2.oa.setup();
  this.ba = gls2.ab()
}, rl:function() {
  this.stop()
}, Ei:t, jh:function(c, a) {
  this.ba.xe.slice(0, this.ba.Aa + 1).average();
  var f = {score:Math.floor(this.ba.score), stage:this.ba.Aa + 1, continueCount:this.ba.Pc, shipType:this.ba.da.type, shipStyle:this.ba.da.style, fps:this.ba.xe.slice(0, this.ba.Aa).average(), screenShot:this.ba.be};
  c ? (f.userName = c, this.Ei = t) : this.Ei = k;
  tm.util.Ajax.load({url:"/api/ranking/post", data:f, type:"POST", dataType:"json", success:function(c) {
    if(c) {
      if(c.success) {
        a(l, k, c.scoreId)
      }else {
        if(c.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.jh(l, a);
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(c = "";"" === c;) {
                c = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.pk())
              }
              c !== l && (c = c.substring(0, 10), this.jh(c + " (\u533f\u540d)", a))
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
}, pk:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc(30) \u76f8\u7530\u7dcf\u7406".split(" ").pickup()
}, wh:l, setTimeoutF:function(c, a) {
  timeoutTasks.push({frame:this.frame + a, fn:c})
}, wa:function(c) {
  if(window.achevements && -1 === window.achevements.indexOf(c)) {
    var a = tm.asset.AssetManager.get("achevements").data;
    if(a[c]) {
      var f = window.achevements;
      -1 == f.indexOf(c) && (f.push(c), tm.util.Ajax.load({url:"/api/achevement/" + c, type:"POST", dataType:"json", success:function() {
        a[c] && (gls2.sa("achevement"), this.ba.xi.addChild(gls2.Gh(a[c].title)))
      }.bind(this), error:function() {
        console.warn("error!")
      }}))
    }
  }
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Sc = function(c, a) {
  return(c.x - a.x) * (c.x - a.x) + (c.y - a.y) * (c.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.ab.ie && gls2.ab.ie.He(0)
};
var P = [1E9, 1E10], R = [3, 2, 1], S = [6, 4, 2], U = [1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], V = [1, 1, 2, 3, 4, 8, 16, 20, 24, 32, 40], K = [0.1, 0.4, 1];
(function() {
  var c = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.Ph = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Ya:0, Ac:k, oe:k, bb:t, ba:l, speed:0, Ob:l, Td:l, Ii:l, xf:l, ac:l, Qg:l, yc:l, Rg:l, Sg:l, frame:0, init:function(a, d, j) {
    this.superInit("fighter", 64, 64);
    this.ba = a;
    this.type = d;
    this.style = j;
    tm.Gb.md.te.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Td = this.Ii = gls2.Rh(d, 100);
    this.xf = gls2.Rh(3, 100);
    this.ac = gls2.Lh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.ac.visible = t;
    this.Jj();
    this.Ob = this.Ij();
    1 === this.style && (this.Ob = [this.Ob[1], this.Ob[2]]);
    this.yc = tm.display.CanvasElement().addChildTo(this);
    d = 0;
    for(j = this.Ob.length;d < j;d++) {
      var m = this.Ob[d];
      gls2.cj(this, m).setPosition(m.x, m.y).addChildTo(this.yc)
    }
    this.Ck = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Ck.blendMode = "lighter";
    this.Rg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Rg.blendMode = "lighter";
    this.Rg.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Xa && !a.La
    };
    this.Sg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Sg.blendMode = "lighter";
    this.Sg.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Xa && !a.La
    };
    this.Ae = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.Ae.blendMode = "lighter";
    this.Ae.rotation = -90;
    this.Ae.strokeStyle = "rgba(180,180,255,0.4)";
    this.Ae.update = function() {
      this.visible = a.La
    };
    this.Ae.draw = function(c) {
      c.lineCap = "round";
      var d = a.Wd / 800;
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
    this.xk = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.xk.update = function() {
      this.visible = a.La
    };
    c === l && (c = gls2.zh(this.ba.ja))
  }, Ij:function() {
    if(0 === this.type) {
      return[{x:0, xd:0, y:40, d:0, fc:k, Xb:-0.7, v:k}, {x:0, xd:0, y:40, d:0, fc:k, Xb:0.5, v:k}, {x:0, xd:0, y:40, d:0, fc:k, Xb:-0.5, v:k}, {x:0, xd:0, y:40, d:0, fc:k, Xb:0.7, v:k}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, fc:t, Xb:-0.7, v:k}, {x:-40, y:40, d:0.1, fc:t, Xb:-0.5, v:k}, {x:40, y:40, d:0.1, fc:k, Xb:0.5, v:k}, {x:70, y:20, d:0.1, fc:k, Xb:0.7, v:k}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, fc:t, Xb:-0.7, v:k}, {x:-30, y:20, d:0.4, fc:t, Xb:-0.5, v:k}, {x:30, y:20, d:0.4, fc:k, Xb:0.5, v:k}, {x:60, y:40, d:0.6, fc:k, Xb:0.7, v:k}]
    }
  }, Jj:function() {
    this.Qg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Qg.setFrameIndex(5);
    this.Qg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, ed:-1, Vd:t, Yb:t, update:function(f) {
    this.visible = this.bb ? 0 === f.frame / 2 % 2 : k;
    var d = f.keyboard;
    if(this.Ac) {
      var j = d.getKeyAngle();
      j !== l && (j = a[j], this.x += j.x * this.speed * (this.Yb ? 0.5 : 1), this.y += j.y * this.speed * (this.Yb ? 0.5 : 1));
      this.x = gls2.ka.clamp(this.x, 15, 465);
      this.y = gls2.ka.clamp(this.y, 15, 625);
      var m = d.getKey("c") && this.oe, j = d.getKey("z") && this.oe;
      this.ed = m ? this.ed + 1 : this.ed - 1;
      this.ed = gls2.ka.clamp(this.ed, -1, 10);
      this.Yb = j && m || 10 === this.ed;
      m = this.ba.La ? 3 : 5;
      this.Vd = !this.Yb && (0 <= this.ed || j) && 0 === f.frame % m;
      j && (this.ed = 0);
      this.ac.x = this.x;
      this.ac.y = this.y - 40;
      d.getKeyDown("x") && this.oe && (0 < this.ba.Xa && !this.ba.La ? (this.ba.bl(), gls2.Dj(this).addChildTo(this.ba)) : !this.ba.Ad && 0 < this.ba.Pb && (this.Jb = gls2.ka.clamp(this.Jb - 2, 0, 1), this.ba.me(-0.02), gls2.Bh(this, this.ba).setPosition(gls2.ka.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ba), gls2.core.wa("bomb1"), this.ba.gf[this.ba.Aa] += 1))
    }else {
      this.Yb = this.Vd = t
    }
    this.Vd && (j = Math.sin(0.2 * f.frame), m = this.Td.fire(this.x - 7 - 6 * j, this.y - 5, -90), m !== l && m.addChildTo(this.ba), m = this.Td.fire(this.x + 7 + 6 * j, this.y - 5, -90), m !== l && m.addChildTo(this.ba));
    if(this.Yb) {
      j = 0;
      for(m = this.Ob.length;j < m;j++) {
        this.Ob[j].v = t
      }
      this.yc.rotation = 0
    }else {
      this.ac.visible = t;
      j = 0;
      for(m = this.Ob.length;j < m;j++) {
        this.Ob[j].v = k
      }
    }
    this.Xj(d);
    this.Fj(d, f.frame);
    0 === f.frame % 2 && (c.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ba), c.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ba));
    this.frame = f.frame
  }, Rc:function() {
    this.Yb = this.Vd = t;
    this.ba.of();
    this.ba.pb = 0;
    this.ba.hb = 0;
    this.ba.Sa = 0
  }, Xj:function(a) {
    if(0 === this.type) {
      for(a = this.Ob.length;this.Ob[--a] !== i;) {
        var c = this.Ob[a];
        0 === a ? c.x = c.xd + 60 * Math.cos(0.1 * this.frame) : 1 === a ? c.x = c.xd + -60 * Math.cos(0.1 * this.frame) : 2 === a ? c.x = c.xd + 60 * Math.sin(0.1 * this.frame) : 3 === a && (c.x = c.xd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (c = this.yc, c.rotation = this.Yb ? 0 : this.Ac && a.getKey("left") ? Math.max(c.rotation - 3, -50) : this.Ac && a.getKey("right") ? Math.min(c.rotation + 3, 50) : 3 < c.rotation ? c.rotation - 3 : -3 > c.rotation ? c.rotation + 3 : 0)
    }
  }, Fj:function(a, c) {
    this.Ac && a.getKey("left") ? this.Ya = gls2.ka.clamp(this.Ya - 0.2, -3, 3) : this.Ac && a.getKey("right") ? this.Ya = gls2.ka.clamp(this.Ya + 0.2, -3, 3) : 0 > this.Ya ? this.Ya = gls2.ka.clamp(this.Ya + 0.2, -3, 3) : 0 < this.Ya && (this.Ya = gls2.ka.clamp(this.Ya - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Ya) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(c / 2) % 3) + ~~this.Ya) : 2 === this.type && this.setFrameIndex(31 + ~~this.Ya);
    return c
  }});
  gls2.cj = tm.createClass({superClass:tm.display.AnimationSprite, ud:l, da:l, init:function(a, c) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.ud = c;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(c.fc ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.ud.v) {
      this.x = this.ud.x * (this.da.ba.La ? 1.5 : 1);
      this.y = this.ud.y * (this.da.ba.La ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.ud.d * this.ud.Xb);
      var d = this.parent.localToGlobal(this);
      this.ud.v && 0 === a.frame % 2 && c.clone(40).setPosition(d.x, d.y).addChildTo(this.da.ba);
      this.da.Vd && (d = this.da.Td.fire(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== l && d.addChildTo(a.ba))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var c = l;
  gls2.Od = tm.createClass({superClass:tm.display.Sprite, speed:0, rd:0, Tj:1, wi:0, qb:k, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.rd = 1;
    c === l && (c = gls2.Za(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.Ne(a)
  }, update:function() {
    this.x += this.Vc;
    this.y += this.pc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, Ne:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, uf:function(a) {
    for(var d = 0;d < a;d++) {
      var j = c.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = gls2.ka.randf(2, 8), r = 2 * Math.random() * Math.PI;
      j.Ea = Math.cos(r) * m;
      j.Fa = Math.sin(r) * m;
      j.scaleX = j.scaleY = (gls2.ka.randf(0.1, 0.5) + gls2.ka.randf(0.1, 0.5)) / 2;
      j.addEventListener("enterframe", function() {
        this.x += this.Ea;
        this.y += this.Fa;
        this.Ea *= 0.9;
        this.Fa *= 0.9
      })
    }
  }});
  gls2.Od.re = function() {
    for(var c = [].concat(a), d = 0, j = c.length;d < j;d++) {
      c[d].remove()
    }
  };
  var a = gls2.Od.ob = [];
  gls2.Rh = tm.createClass({dd:l, ti:t, init:function(c, d) {
    this.ti = 3 === c;
    this.dd = [];
    for(var j = 0;j < d;j++) {
      var m = gls2.Od(c), r = this;
      m.addEventListener("added", function() {
        this.ra = 10;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var c = a.indexOf(this);
        -1 !== c && a.splice(c, 1);
        r.dd.push(this)
      });
      this.ti && m.addEventListener("enterframe", function(a) {
        this.setScale((this.Tj + this.wi) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.dd.push(m)
    }
  }, fire:function(a, c, j) {
    var m = this.dd.pop();
    if(m === i) {
      return l
    }
    var r = gls2.ka.degToRad(j);
    m.Vc = Math.cos(r) * m.speed;
    m.pc = Math.sin(r) * m.speed;
    m.setPosition(a, c);
    m.rotation = j + 90;
    return m
  }, ce:function(a) {
    for(var c = this.dd.length;this.dd[--c] !== i;) {
      this.dd[c].rd = 1 + 0.1 * a, this.dd[c].wi = 0.2 * a
    }
  }})
})();
gls2.Lh = tm.createClass({superClass:tm.display.Sprite, da:l, ba:l, wc:0, frame:0, Ui:l, color:l, Zh:0, Dg:0, Uj:t, head:l, pi:l, xc:l, qb:k, rd:1, Zd:l, init:function(c, a) {
  this.da = c;
  this.ba = c.ba;
  this.Zh = 0 === this.da.style ? 1 : 1.2;
  this.Dg = 0 === this.da.style ? 50 : 75;
  var f = this;
  this.Ui = a;
  this.superInit(a.redBody, this.Dg, 100);
  this.boundingHeightBottom = 1;
  this.Il = 0;
  this.origin.y = 1;
  var d = this.xc = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.pi = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = f.wc - f.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < f.wc
  };
  this.Ne(["red", "green", "blue"][this.da.type]);
  this.ce(0)
}, Ne:function(c) {
  this.color = c;
  this.image = tm.asset.AssetManager.get(this.Ui[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.xc.gotoAndPlay(this.color);
  this.pi.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Zd = l;
  return this
}, ce:function(c) {
  this.boundingWidth = this.width = this.Dg + 30 * c / 10;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.rd = 1 * this.Zh + 0.25 * c;
  0 === c ? this.Ne(["red", "green", "blue"][this.da.type]) : this.Ne("hyper")
}, uf:function(c, a) {
  this.Zd === l && this.fi();
  a = a || this.wc;
  for(var f = 0;f < c;f++) {
    var d = this.Zd.clone().setPosition(this.x, a).addChildTo(this.ba), j = gls2.ka.randf(8, 14), m = gls2.ka.randf(0, Math.PI);
    d.Ea = Math.cos(m) * j;
    d.Fa = Math.sin(m) * j;
    d.scaleX = d.scaleY = (gls2.ka.randf(0.5, 1.5) + gls2.ka.randf(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.Ea;
      this.y += this.Fa;
      this.Ea *= 0.95;
      this.Fa *= 0.95
    })
  }
}, lk:function(c, a, f) {
  this.Zd === l && this.fi();
  for(var d = 0;d < c;d++) {
    var j = this.Zd.clone().setPosition(a, f).addChildTo(this.ba), m = gls2.ka.randf(12, 20), r = gls2.ka.randf(0, Math.PI);
    j.Ea = Math.cos(r) * m;
    j.Fa = Math.sin(r) * m;
    j.scaleX = j.scaleY = (gls2.ka.randf(1, 3) + gls2.ka.randf(1, 3)) / 2;
    j.addEventListener("enterframe", function() {
      this.x += this.Ea;
      this.y += this.Fa;
      this.Ea *= 0.95;
      this.Fa *= 0.95
    })
  }
}, fi:function() {
  this.Zd = "hyper" === this.color ? gls2.Za(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Za(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(c) {
  (this.visible = this.da.Yb) ? (this.wc = Math.max(0, this.wc - 40), this.height = this.y - this.wc, 0 === c.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.wc = this.y - 40;
  this.Uj = this.visible
}, draw:function(c) {
  var a = this.srcRect, f = this._image.element;
  a.x = a.width * this.frame;
  c.context.drawImage(f, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, ul:function() {
  return this.wc
}, Wk:function(c) {
  this.wc = c;
  this.head.update()
}});
gls2.Lh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.wc
});
(function() {
  gls2.Bh = tm.createClass({superClass:tm.app.Object2D, qb:k, ba:l, init:function(a, f) {
    this.superInit();
    this.da = a;
    this.ba = f;
    this.Pi = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Pi.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Pi));
    this.Xh();
    c === l && (c = gls2.Za(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.pa = 0;
    this.Je = 1;
    this.addEventListener("added", function() {
      this.ba.Ad = k;
      this.da.bb = k;
      this.ba.Pb -= 1;
      this.ba.zf = t;
      this.ba.of();
      this.ba.Ab("drop BOMBER!!", k);
      gls2.sa("bomb");
      gls2.sa("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ba.Ad = t;
      this.da.bb = t
    })
  }, Xh:function() {
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
      var f = this.a * this.Je + 2 * a * Math.PI / this.b;
      c.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.pa;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.pa += 3.6, this.Je = -1) : (this.b = 8, this.pa += 1.8, this.Je = 1)
  }});
  gls2.Mh = tm.createClass({superClass:gls2.Bh, init:function(a, c) {
    this.superInit(a, c);
    this.addEventListener("added", function() {
      this.ba.Pb = 0
    })
  }, Xh:function() {
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
      var f = this.a * this.Je + 2 * a * Math.PI / this.b;
      c.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.pa;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.pa += 1.8, this.Je = 1)
  }});
  var c = l
})();
gls2.dj = tm.createClass({superClass:tm.display.Sprite, Vc:0, pc:0, da:l, pa:0, init:function(c, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(c, a);
  this.da = f;
  this.pc = 1;
  this.Vc = 0.5 > gls2.ya.random() ? -1 : 1;
  this.pa = 0
}, update:function() {
  this.x += this.Vc;
  this.y += 2 * this.pc;
  if(2025 > gls2.Sc(this, this.da)) {
    this.da.ba.Rj(1), this.remove()
  }else {
    if(3E3 > this.pa) {
      if(30 > this.x || 450 < this.x) {
        this.Vc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.pc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.pa += 1
}});
gls2.jj = tm.createClass({superClass:tm.display.Sprite, Vc:0, pc:0, da:l, pa:0, init:function(c, a, f) {
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
  4096 > gls2.Sc(this, this.da) && (this.da.ba.li(), gls2.core.wa("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.oa = {};
gls2.oa.setup = function() {
  gls2.ak = {};
  gls2.oa.explosion = Array.range(0, 3).map(function(c) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + c, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.ak.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.oa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.oa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.oa.particle16 = gls2.Za(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.oa.uf = function(c, a, f) {
  c = gls2.oa.particle16.clone().setPosition(c, a);
  c.qb = k;
  c.addChildTo(f);
  f = gls2.ka.randf(5, 20);
  a = gls2.ka.randf(Math.PI, 2 * Math.PI);
  c.Ea = Math.cos(a) * f;
  c.Fa = Math.sin(a) * f;
  c.scaleX = c.scaleY = (gls2.ka.randf(0.1, 0.5) + gls2.ka.randf(0.1, 0.5)) / 2;
  c.addEventListener("enterframe", function() {
    this.x += this.Ea;
    this.y += this.Fa;
    this.Ea *= 0.9;
    this.Fa *= 0.9
  })
};
gls2.oa.Og = function(c, a, f, d) {
  d = d || 1.8;
  var j = tm.display.Sprite().setPosition(c, a).setScale(0.1).setBlendMode("lighter");
  j.qb = k;
  j.addChildTo(f);
  j.image = gls2.oa.shockwaveImage;
  j.tweener.clear().to({scaleX:d, scaleY:d, alpha:0}, 800, "easeOutQuad").call(function() {
    j.remove()
  })
};
gls2.oa.nk = function(c, a, f) {
  var d = tm.display.Sprite().setPosition(c, a).setScale(3).setBlendMode("lighter");
  d.qb = k;
  d.addChildTo(f);
  d.image = gls2.oa.shockwaveImage;
  d.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
};
gls2.oa.mk = function(c, a, f) {
  c = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(c, a).setScale(0.1, 0.1);
  c.qb = k;
  c.addChildTo(f);
  c.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(c))
};
gls2.oa.qf = function(c, a, f, d) {
  gls2.sa("explode");
  var j = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(c, a).setRotation(360 * Math.random()).gotoAndPlay();
  j.qb = k;
  if(d !== i) {
    var m = d.x, r = d.y;
    j.addEventListener("enterframe", function() {
      this.x += m;
      this.y += r;
      m *= 0.99;
      r *= 0.99
    })
  }
  j.addChildTo(f);
  gls2.oa.Og(c, a, f)
};
gls2.oa.dk = function(c, a, f) {
  gls2.sa("explode");
  var d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.qb = k;
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
  d.qb = k;
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
  d.qb = k;
  d.addChildTo(f)
};
gls2.oa.jb = function(c, a, f) {
  gls2.sa("explode2");
  gls2.sa("explode3");
  for(var d = ~~(Math.random() * gls2.Xc.noise.length), j = 0;20 > j;j++) {
    var m = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(c, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Xc.noise.at(~~(gls2.Xc.noise.length * j / 20) + d), 2);
    m.qb = k;
    m.addChildTo(f)
  }
  gls2.oa.Og(c, a, f, 5)
};
gls2.oa.we = function(c, a, f) {
  gls2.sa("explode2");
  gls2.sa("explode3");
  for(var d = ~~(Math.random() * gls2.Xc.noise.length), j = 0;20 > j;j++) {
    for(var m = 2 * Math.PI * j / 20, r = Math.pow(gls2.Xc.noise.at(~~(gls2.Xc.noise.length * j / 20) + d), 2), B = 0;3 > B;B++) {
      var q = 4 * r * (B + 1), p = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.pa += 1
      }).setScale(0.3 * (3 - B)).setPosition(c, a).setRotation(360 * Math.random()).gotoAndPlay();
      p.rotation = 2 * Math.random() * Math.PI;
      p.qb = k;
      p.pa = 0;
      p.a = m;
      p.v = q;
      p.addChildTo(f)
    }
  }
};
gls2.Sf = tm.createClass({superClass:tm.app.Object2D, target:l, nc:0, angle:0, alpha:2, qb:k, reverse:t, init:function(c, a) {
  this.superInit();
  this.target = c;
  this.reverse = a;
  this.angle = 0;
  this.nc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(c) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === c.frame % 2) {
      for(c = 0;9 > c;c++) {
        var a = this.angle + 2 * c / 9 * Math.PI;
        gls2.Za(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.nc + this.target.x, Math.sin(a) * this.nc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.nc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.nc || 200 < this.nc) && this.remove()
  }
}});
gls2.Dj = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, qb:k, init:function(c) {
  this.superInit();
  this.target = c;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var c = 0;5 > c;c++) {
      var a = gls2.Za(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ka.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ka.rand(-2, 2)).on("enterframe", function() {
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
gls2.Gh = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(c) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + c + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).setFillStyle("rgba(255, 255, 255, 0.5)").addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, Al:function() {
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
gls2.uj = tm.createClass({superClass:tm.graphics.Canvas, ba:l, Sd:l, Cb:l, frame:0, init:function(c) {
  this.superInit("#scoreLabel");
  this.ba = c;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Sd = gls2.ej(200);
  this.Cb = gls2.Qh(this)
}, update:function() {
  this.clear();
  this.ba.wd !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Cb.Cc - 20, 470 * this.ba.wd.ra / this.ba.wd.ad, 20), this.strokeRect(5, this.Cb.Cc - 20, 470, 20), this.clear(263.5, this.Cb.Cc - 20 + 2, 2, 16), this.clear(52, this.Cb.Cc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var c;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ba.score)).padding(16, " ");
  c = "";
  for(var a = 0;a < score.length;a += 4) {
    c += score.substring(a, a + 4) + " "
  }
  this.fillText(c, 192, this.Cb.Cc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ba.pb)).padding(8, " ");
  c = "";
  for(a = 0;a < score.length;a += 4) {
    c += score.substring(a, a + 4) + " "
  }
  this.fillText(c + "x " + (~~(this.ba.Sa / 1E3) + 1), this.Cb.ye + 192, 22);
  c = [0, 1, 4][this.ba.da.type];
  for(a = 0;a < this.ba.kd - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * c, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * J.Ua.Zb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ba.De + " hit", this.Cb.ye + 10, 95);
  0 < ~~this.ba.Sa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ba.Sa + " HIT!!", 10, 0.5 * -this.Cb.Cc + 115));
  0 === this.frame % 2 && (!this.ba.La && 0 < this.ba.Xa ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ba.Xa, 5, 637)) : this.ba.La && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ba.Qc, 5, 637)));
  for(a = 0;a < this.ba.Pb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ba.zf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Sd.update();
  this.Sd.ih = this.Cb.Cc + 5;
  this.Sd.draw(this);
  this.frame += 1
}});
gls2.Qh = tm.createClass({superClass:tm.app.Object2D, Rb:l, ye:0, Cc:0, init:function(c) {
  this.superInit();
  this.Rb = c
}});
(function() {
  var c = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.mj = tm.createClass({superClass:tm.graphics.Canvas, Da:l, Qb:l, cc:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Da = gls2.nj();
    this.Da.ja = this;
    this.Da.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Qb = [];
    this.cc = [];
    for(var a = 0;5 > a;a++) {
      this.Qb[a] = 40 * c[a], this.cc[a] = this.Qb[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Da.Ea = Math.cos(this.Da.direction) * this.Da.speed;
    this.Da.Fa = Math.sin(this.Da.direction) * this.Da.speed;
    for(var c = 0;5 > c;c++) {
      for(this.Da.lc[c] += this.Da.Ea * Math.pow(0.8, c);3 * this.Qb[c] < this.Da.lc[c];) {
        this.Da.lc[c] -= 3 * this.Qb[c]
      }
      for(;this.Da.lc[c] < 3 * -this.Qb[c];) {
        this.Da.lc[c] += 3 * this.Qb[c]
      }
      for(this.Da.mc[c] += this.Da.Fa * Math.pow(0.8, c);2 * this.cc[c] < this.Da.mc[c];) {
        this.Da.mc[c] -= 2 * this.cc[c]
      }
      for(;this.Da.mc[c] < 2 * -this.cc[c];) {
        this.Da.mc[c] += 2 * this.cc[c]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Da.background !== l ? this.clearColor(this.Da.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * c[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * c[a] + ")"}]).toStyle();
      this.beginPath();
      for(var f = 0, d = this.Da.lc[a] - 3 * this.Qb[a];d < 480 + 3 * this.Qb[a];d += 1.5 * this.Qb[a]) {
        for(var f = 0 === f ? this.cc[a] : 0, j = this.Da.mc[a] - 2 * this.cc[a] + f;j < 640 + 2 * this.cc[a];j += 2 * this.cc[a]) {
          this.line(d, j, d + this.Qb[a], j), this.line(d, j, d - this.Qb[a] / 2, j + this.cc[a]), this.line(d, j, d - this.Qb[a] / 2, j - this.cc[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.nj = tm.createClass({superClass:tm.app.Object2D, lc:0, mc:0, direction:0, speed:0, Ea:0, Fa:0, background:l, init:function() {
    this.superInit();
    this.lc = [];
    this.mc = [];
    for(var a = 0;5 > a;a++) {
      this.lc[a] = 240, this.mc[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Fa = this.Ea = 0
  }})
})();
gls2.ug = tm.createClass({superClass:tm.display.Sprite, zi:t, ba:l, da:l, Tc:t, zd:t, ph:t, Ea:0, Fa:0, init:function(c) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.zi = c) && this.setScale(2, 2);
  this.ba = gls2.ab.ie;
  this.da = this.ba.da;
  this.addChildTo(this.ba);
  c = 0.5 * gls2.ya.random() * Math.PI - 0.75 * Math.PI;
  var a = 10 + 30 * Math.random();
  this.Ea = Math.cos(c) * a;
  this.Fa = Math.sin(c) * a
}, update:function() {
  this.da.Yb && (this.zd = k);
  if(this.da.parent === l) {
    this.zd = t
  }else {
    if(100 > gls2.Sc(this, this.da)) {
      this.ba.Ek(this);
      this.remove();
      return
    }
    1E4 > gls2.Sc(this, this.da) && (this.zd = k);
    if(this.ph && this.zd) {
      var c = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 8 * Math.cos(c);
      this.y += 8 * Math.sin(c)
    }else {
      this.ph || (this.x += this.Ea, this.y += this.Fa, this.Ea *= 0.8, this.Fa *= 0.8, -1 < this.Ea && (1 > this.Ea && -1 < this.Fa && 1 > this.Fa) && (this.ph = k))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.Sh = tm.createClass({superClass:gls2.ug, Tc:t, init:function(c) {
  this.superInit(c)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.Cj = tm.createClass({superClass:gls2.ug, Tc:k, init:function(c) {
  this.superInit(c)
}, update:function() {
  this.zd || (this.x += this.ba.ja.Ea, this.y += this.ba.ja.Fa);
  this.superClass.prototype.update.call(this)
}});
gls2.od = tm.createClass({da:l, ba:l, $:l, frame:0, init:function(c) {
  this.ba = c;
  this.da = c.da;
  this.de();
  this.$ = gls2.Bj();
  this.frame = 0
}, de:G(), update:function() {
  this.ck(this.frame);
  this.frame += 1
}, ck:function(c) {
  c = this.$.get(c);
  if(c !== l) {
    if("function" === typeof c.value) {
      c.value.call(this)
    }else {
      if(gls2.Eh[c.value] !== i) {
        var a = gls2.Eh[c.value];
        if(a !== l) {
          if(a[0].wd === k) {
            this.Ta(a[0])
          }else {
            for(var f = 0;f < a.length;f++) {
              var d = this.Ta(a[f]);
              c.stop && d.addEventListener("enemyconsumed", function() {
                this.$.fe = t
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Ta:function(c) {
  this.ba.pf += 1;
  c = c.hard(this.ba, c.soft).setPosition(c.x, c.y).addChildTo(this.ba);
  c.Ka = this;
  c.Ge();
  return c
}, ne:function(c) {
  gls2.rf();
  this.ba.ue = k;
  for(var a = tm.app.Object2D().setPosition(240, 320), f = -4;4 >= f;f++) {
    for(var d = -4;4 >= d;d++) {
      var j = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(f, d);
      j.pa = 0;
      j.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.pa) + 0.5;
        this.pa += 1
      };
      j.addChildTo(a)
    }
  }
  a.tweener.wait(3E3).call(c).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = G();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.ba.Mg);
  gls2.sa("warning");
  gls2.sa("voWarning")
}});
gls2.od.create = function(c, a) {
  switch(a) {
    case 0:
      return gls2.wj(c);
    case 1:
      return gls2.xj(c);
    case 2:
      return gls2.yj(c);
    case 3:
      return gls2.zj(c);
    case 4:
      return gls2.Aj(c);
    default:
      g(Error("stageNumber = " + a))
  }
};
gls2.Bj = tm.createClass({index:0, data:l, fe:t, init:function() {
  this.data = {}
}, add:function(c, a, f) {
  this.index += c;
  this.data[this.index] = {stop:f, value:a}
}, get:function(c) {
  c = this.data[c];
  return c === i ? l : c.stop === k ? (this.fe = k, c) : this.fe ? l : c
}});
gls2.wj = tm.createClass({superClass:gls2.od, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Lb("bgm1", k);
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
    this.ne(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(600, "misumi")
}, de:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.xj = tm.createClass({superClass:gls2.od, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Lb("bgm2", k);
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
  for(c = 0;12 > c;c++) {
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
    this.ne(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(300, function() {
    this.ba.ja.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, de:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.yj = tm.createClass({superClass:gls2.od, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Lb("bgm3", k);
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.speed = 2;
    this.ba.ja.tweener.clear().to({speed:6}, 5E3, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({speed:3}, 1E3, "easeInOutQuad")
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
    this.ba.ja.tweener.clear().to({speed:4, direction:0}, 3E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "akane-right");
  this.$.add(60, "akane-left");
  for(c = 0;3 > c;c++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(1, function() {
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
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(180, "madoka-1");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(120, "erika");
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:7}, 3E3, "easeInOutQuad")
  });
  this.$.add(300, "higashi", k);
  this.$.add(900, G());
  for(c = 0;6 > c;c++) {
    this.$.add(90, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:2, direction:0.5 * Math.PI}, 3E3, "easeInOutQuad")
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
  this.$.add(300, G());
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
    this.ba.ja.tweener.clear().to({speed:4, direction:0.5 * Math.PI}, 5E3, "easeInOutQuad")
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
    this.ne(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:8, direction:Math.PI / 2}, 5E3, "easeInOutQuad")
  });
  this.$.add(480, "momozono")
}, de:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.zj = tm.createClass({superClass:gls2.od, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Lb("bgm4", k);
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
  for(c = 0;6 > c;c++) {
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
  this.$.add(1200, G());
  for(c = 0;9 > c;c++) {
    this.$.add(50, 0 === c % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
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
    this.ne(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, de:function() {
  this.ba.ja.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.Aj = tm.createClass({superClass:gls2.od, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Lb("bgm5", k);
    this.ba.ja.direction = 0.5 * Math.PI;
    this.ba.ja.speed = 1;
    this.ba.ja.Kl = k
  });
  this.$.add(150, "urara5-0");
  this.$.add(260, "urara5-2");
  this.$.add(260, "urara5-1");
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
  this.$.add(300, "urara5-2");
  this.$.add(300, "urara5-3");
  this.$.add(260, "urara5-0");
  this.$.add(260, "urara5-1");
  this.$.add(260, "urara5-4");
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
  this.$.add(1200, G());
  for(c = 0;22 > c;c++) {
    this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(33, "heri2-5-left"), this.$.add(33, "heri2-5-center"), this.$.add(33, "heri2-5-right"), this.$.add(2, "DUMMY+" + c)
  }
  this.$.add(260, "urara5-0");
  this.$.add(300, "urara5-1");
  this.$.add(300, "urara5-2");
  this.$.add(300, "urara5-3");
  this.$.add(300, "urara5-4");
  this.$.add(300, "urara5-5");
  this.$.add(300, "ako5-0");
  this.$.add(260, "komachi5-1");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(300, "milk5-1");
  this.$.add(160, "komachi5-1");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center");
  this.$.add(200, "mktn5-0");
  this.$.add(60, "heri1-4-left2");
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
  this.$.add(3E3, G());
  this.$.add(300, function() {
    this.ne(function() {
      gls2.Lb("bgmBoss", k)
    })
  });
  this.$.add(1, function() {
    this.ba.ja.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, de:function() {
  this.ba.ja.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {Xd:function(c, a) {
  if(c.parent === l || a.parent === l) {
    return t
  }
  var f = c.x + c.boundingWidthRight, d = c.y - c.boundingHeightTop, j = c.y + c.boundingHeightBottom, m = a.x - a.boundingWidthLeft, r = a.y - a.boundingHeightTop, B = a.y + a.boundingHeightBottom;
  return c.x - c.boundingWidthLeft < a.x + a.boundingWidthRight && f > m && d < B && j > r
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, dl:function(c, a) {
  "function" === typeof c ? this.app.pushScene(c()) : c instanceof tm.app.Scene && this.app.pushScene(c);
  this._sceneResultCallback = a
}, draw:function(c) {
  c.globalCompositeOperation = "source-over";
  this.yd(c)
}, finish:function(c) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(c)
}});
gls2.gj = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:t, title:l, selections:[], description:l, box:l, cursor:l, $g:l, _selected:0, _opened:t, _finished:t, init:function(c, a, f) {
  this.superInit();
  this.titleText = c;
  this.menu = a;
  this._selected = ~~f.defaultValue;
  this.showExit = f.showExit;
  this.descriptions = f.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.$g = f.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.$g !== l && this.parent.$g(this.s))
  }
}, update:function(c) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(c.frame / 2) % 2 : this.showExit && c.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : c.keyboard.getKeyDown("z") || c.keyboard.getKeyDown("c") || c.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.sa("decision")) : c.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.ka.clamp(this._selected, 0, this.selections.length - 1), gls2.sa("select")) : 
  c.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.ka.clamp(this._selected, 0, this.selections.length - 1), gls2.sa("select")))
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
}, yd:function(c) {
  c.fillStyle = "rgba(0,0,0,0.8)";
  c.fillRect(0, 0, 480, 640)
}});
function W(c, a, f, d, j) {
  j = {}.$extend({menuDescriptions:[].concat(f), showExit:k, defaultValue:0, onCursorMove:G()}, j);
  c.dl(gls2.gj(a, f, j), d)
}
;gls2.Za = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, Cg:0.85, size:0, image:l, qb:k, init:function(c, a, f, d) {
  this.superInit();
  this.width = this.height = this.size = c;
  this.alpha = a !== i ? a : 1;
  this.Cg = f !== i ? f : 0.85;
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(c, c).setFillStyle(tm.graphics.RadialGradient(0.5 * c, 0.5 * c, 0, 0.5 * c, 0.5 * c, 0.5 * c).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, c, c).element
}, update:function() {
  this.alpha *= this.Cg;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(c) {
  c.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Za(this.size, this.xl, this.Cg, this.image)
}});
gls2.zh = tm.createClass({superClass:gls2.Za, ja:l, init:function(c, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.ja = c
}, update:function(c) {
  this.superClass.prototype.update.apply(this, c);
  this.x += this.ja.Ea;
  this.y += this.ja.Fa + 0.3
}, clone:function(c) {
  return gls2.zh(this.ja, c)
}});
gls2.ej = tm.createClass({width:0, label:l, Fb:l, pa:0, Mi:0, ih:0, init:function(c) {
  this.width = c;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Fb = [];
  this.Mi = 480 - this.width - 5;
  this.ih = 5
}, Sj:function(c, a) {
  a === k && (this.Fb.clear(), this.Fb.push(""));
  5 < this.Fb.length && this.Fb.splice(1, this.Fb.length - 4);
  this.Fb.push(c);
  return this
}, Vj:function() {
  this.Fb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var c = this.label.text, c = c.substring(0, c.length - 1);
  if(0 !== this.Fb.length) {
    if("" !== this.Fb[0]) {
      var a = this.Fb[0][0];
      this.Fb[0] = this.Fb[0].substring(1);
      c += a
    }else {
      this.Fb.shift(), a = c.split("\n"), 3 < a.length && (a.shift(), c = a.join("\n")), c += "\n"
    }
  }
  this.label.text = c + (0 === this.pa % 2 ? "_" : " ");
  this.pa += 1
}, draw:function(c) {
  c.save();
  c.context.globalCompositeOperation = "source-over";
  c.translate(this.Mi, this.ih);
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
gls2.Xc = {noise:l, ok:function(c) {
  function a(a) {
    if(1 > a) {
      return l
    }
    var d = [], j = Math.random(), m, r;
    for(r = 0;r < c;r += ~~a) {
      m = Math.random();
      for(var h = 0;h < a;h++) {
        d[r + h] = f(j, m, h / a)
      }
      j = m
    }
    j = d[c - ~~a];
    m = d[0];
    for(h = 0;h < a;h++) {
      d[c - ~~a + h] = f(j, m, h / a)
    }
    return d
  }
  function f(a, c, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + c * d
  }
  for(var d = [], j = 0, m = Math.pow(2, 4);8 > j;j++, m *= 2) {
    var r = a(c / m);
    if(r === l) {
      break
    }
    d.push(r)
  }
  r = [].concat(d[0]);
  j = 1;
  for(m = 0.5;j < d.length;j++, m *= 0.5) {
    for(var B = 0;B < c;B++) {
      r[B] += d[j][B] * m
    }
  }
  for(j = 0;j < r.length;j++) {
    r[j] /= 2
  }
  return r
}};
gls2.Xc.noise = gls2.Xc.ok(512);
gls2.ya = {index:-1, data:l, setup:function(c) {
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
gls2.cb = l;
gls2.Lb = function(c, a, f) {
  a || gls2.Pe();
  a = tm.asset.AssetManager.get(c);
  var d = tm.asset.AssetManager.get("bgmLoopInfo");
  a && (gls2.cb = a.clone(), gls2.cb.volume = 0.1 * gls2.core.pe, gls2.cb.loop = !f, gls2.cb.play(), d.data[c] && (gls2.cb.source.loopStart = d.data[c].start, gls2.cb.source.loopEnd = d.data[c].end))
};
gls2.Pe = function() {
  gls2.cb !== l && gls2.cb.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.cb.stop()
};
gls2.rf = function() {
  if(gls2.cb !== l) {
    var c = gls2.cb;
    gls2.cb = l;
    c.loop = t;
    var a = function() {
      c.volume -= 0.001;
      0 >= c.volume ? c.Fl === AudioBufferSourceNode.PLAYING_STATE && c.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.sa = function(c) {
  if(0 !== gls2.core.Dd && gls2.sa.played[c] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + c);
    a && (a = a.clone().play(), "vo" === c.substring(0, 2) ? (a.volume = 0.5 * gls2.core.Dd, gls2.sa.xh !== l && gls2.sa.xh.stop(), gls2.sa.xh = a) : a.volume = 0.1 * gls2.core.Dd);
    gls2.sa.played[c] = gls2.core.frame
  }
};
gls2.sa.played = {};
gls2.sa.xh = l;
(function() {
  var c = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, pa:0, Ie:[], tf:t, si:l, Bi:0, Bf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.si = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.tf = t;
      this.jl()
    })
  }, jl:function() {
    for(var a = ("" + Math.floor(gls2.core.ze)).padding(16, " "), c = "", j = 0;j < a.length;j += 4) {
      c += a.substring(j, j + 4) + " "
    }
    this.si.text = "HIGH SCORE: " + c.trim()
  }, yd:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Vh(80 * Math.cos(0.01 * this.pa) + 240, 80 * Math.sin(0.01 * this.pa) + 320, 0);
    this.Vh(80 * Math.cos(0.01 * this.pa + Math.PI) + 240, 80 * Math.sin(0.01 * this.pa + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.tf && this.Ki();
    this.pa += 1
  }, Vh:function(f, d, j) {
    if(!this.tf) {
      c === l && (c = gls2.Za(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Za(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      j = 0 === j ? c.clone().addChildTo(this) : a.clone().addChildTo(this);
      j.speed = 0.6;
      var m = gls2.ka.randf(0, 2 * Math.PI), r = gls2.ka.rand(0, 20);
      j.setPosition(Math.cos(m) * r + f, Math.sin(m) * r + d);
      var B = this;
      j.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = B.Ie.indexOf(this);
          -1 !== a && B.Ie.splice(a, 1)
        }
      };
      this.Ie.push(j)
    }
  }, Ki:function() {
    W(this, "MAIN MENU", ["start", "setting"], this.Kk, {defaultValue:this.Bi, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, Kk:function(a) {
    2 !== a && (this.Bi = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.tf = k;
          for(var a = 0, c = this.Ie.length;a < c;a++) {
            this.Ie[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.vj())
        }.bind(this));
        break;
      case 1:
        this.bd()
    }
  }, bd:function() {
    W(this, "SETTING", ["bgm volume", "sound volume"], this.eh, {defaultValue:this.Bf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, eh:function(a) {
    3 !== a && (this.Bf = a);
    switch(a) {
      case 0:
        this.fh();
        break;
      case 1:
        this.gh();
        break;
      default:
        this.Ki()
    }
  }, fh:function() {
    W(this, "BGM VOLUME", "012345".split(""), this.bh, {defaultValue:gls2.core.pe, onCursorMove:function(a) {
      gls2.cb !== l && "exit" !== a && (gls2.cb.volume = 0.1 * a)
    }, showExit:t})
  }, bh:function(a) {
    6 !== a && (gls2.core.pe = a);
    this.bd()
  }, gh:function() {
    W(this, "SE VOLUME", "012345".split(""), this.dh, {defaultValue:gls2.core.Dd, showExit:t})
  }, dh:function(a) {
    6 !== a && (gls2.core.Dd = a);
    this.bd()
  }, El:function() {
    W(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Jk, {defaultValue:gls2.core.ki, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Jk:function(a) {
    5 !== a && (gls2.core.ki = a);
    this.bd()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.vj = tm.createClass({superClass:gls2.Scene, mode:0, types:l, Lf:l, gc:l, hc:l, ic:l, Wg:l, Ug:l, type:0, style:0, sd:t, Ff:t, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Yk();
    this.Lf = this.Xk();
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
    this.Lf.visible = t;
    this.Zg(-1, k);
    this.gc.update();
    this.hc.update();
    this.ic.update();
    gls2.sa("voSelectShip");
    gls2.Lb("bgmShipSelect", k)
  }, Yk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Wg = tm.display.Label("Type-A").setPosition(240, 150);
    this.Wg.addChildTo(a);
    var c = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.Xg = tm.display.Label(c[0], 16).setPosition(240, 500);
    this.Xg.update = function() {
      this.Xg.text = c[this.type]
    }.bind(this);
    this.Xg.addChildTo(a);
    var d = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.gc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.hc = tm.display.AnimationSprite(d, 64, 64).gotoAndPlay("typeB");
    this.ic = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.gc.lb = 0;
    this.hc.lb = 1;
    this.ic.lb = 2;
    this.gc.setScale(3).setPosition(0, 320).addChildTo(a);
    this.hc.setPosition(0, 320).addChildTo(a);
    this.ic.setPosition(0, 320).addChildTo(a);
    this.gc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.lb / 3 * Math.PI)
    };
    this.hc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.lb / 3 * Math.PI)
    };
    this.ic.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.lb / 3 * Math.PI)
    };
    return a
  }, Xk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Ug = tm.display.Label("Shot Style").setPosition(240, 150);
    this.Ug.addChildTo(a);
    this.hd = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.yc = tm.app.Object2D();
    this.yc.addChildTo(this.hd);
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
    this.hd.line = c(0, 0, 0, 130, 8);
    this.hd.line.addChildTo(this.hd);
    this.xa.each(function(a) {
      a.line = c(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.yc)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.Vg = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.Vg.update = function() {
      this.Vg.text = f[this.style]
    }.bind(this);
    this.Vg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.Lf.visible = t, !this.Ff && a.keyboard.getKeyDown("left")) {
        this.Zg(-1, t), gls2.sa("select")
      }else {
        if(!this.Ff && a.keyboard.getKeyDown("right")) {
          this.Zg(1, t), gls2.sa("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.sa("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.Lf.visible = k, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.sa("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.sa("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.sd = k, this.Ji(), gls2.sa("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.kl(0 === ~~(a.frame / 60) % 2))
    }
  }, Dl:function() {
    W(this, "AUTO BOMB", ["on", "off"], this.Fk, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:k})
  }, Fk:function(a) {
    2 !== a && (this.sd = 0 === a, this.Ji())
  }, Ji:function() {
    W(this, "ARE YOU READY?", ["ok"], this.Gk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:k})
  }, Gk:function(a) {
    0 === a && this.al()
  }, Zg:function(a, c) {
    this.type = (this.type + a + 3) % 3;
    [this.gc, this.hc, this.ic][this.type].remove().addChildTo(this.types);
    c ? (this.gc.lb -= a, this.gc.scaleX = 0 === this.type ? 5 : 1, this.gc.scaleY = 0 === this.type ? 5 : 1, this.hc.lb -= a, this.hc.scaleX = 1 === this.type ? 5 : 1, this.hc.scaleY = 1 === this.type ? 5 : 1, this.ic.lb -= a, this.ic.scaleX = 2 === this.type ? 5 : 1, this.ic.scaleY = 2 === this.type ? 5 : 1) : (this.Ff = k, this.gc.tweener.clear().to({lb:this.gc.lb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.hc.tweener.clear().to({lb:this.hc.lb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.ic.tweener.clear().to({lb:this.ic.lb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.Ff = t
    }.bind(this)));
    this.Wg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, al:function() {
    gls2.core.ba.sd = this.sd;
    gls2.core.replaceScene(gls2.core.ba);
    gls2.core.ba.start(this.type, this.style);
    gls2.rf()
  }, kl:function(a) {
    this.Ug.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.hd.line.oc = t, this.xa[0].line.oc = t, this.xa[1].line.oc = t, this.xa[2].line.oc = t, this.xa[3].line.oc = t) : (this.hd.line.oc = k, this.xa[0].line.oc = k, this.xa[1].line.oc = k, this.xa[2].line.oc = k, this.xa[3].line.oc = k);
    a ? (this.xa[0].visible = k, this.xa[1].visible = k, 1 === this.style ? (this.xa[2].visible = t, this.xa[3].visible = t) : (this.xa[2].visible = k, this.xa[3].visible = k), this.hd.line.lineWidth = 5) : (this.xa.each(function(a) {
      a.visible = t
    }), this.hd.line.lineWidth = 0 === this.style ? 10 : 25)
  }, yd:G()});
  var c = tm.createClass({superClass:tm.display.CanvasElement, oc:k, init:function(a, c, d, j, m) {
    this.superInit();
    this.angle = d - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = c + 10 * Math.sin(this.angle);
    this.length = j;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = m
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    if(this.oc && 5 === this.lineWidth) {
      var c = 5 * Math.cos(this.angle - Math.PI / 2), d = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - c, this.y - d, Math.cos(this.angle) * this.length * this.i + this.x - c, Math.sin(this.angle) * this.length * this.i + this.y - d, 1.2 * this.lineWidth);
      a.drawArrow(this.x + c, this.y + d, Math.cos(this.angle) * this.length * this.i + this.x + c, Math.sin(this.angle) * this.length * this.i + this.y + d, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.ab = tm.createClass({superClass:gls2.Scene, da:l, score:0, Pc:0, pb:0, Sa:0, De:0, hb:0, Zc:0, Aa:0, Ka:l, ja:l, kd:3, Jf:0, Kf:0, Fc:0, pf:0, Ee:0, Ef:0, sd:t, Pb:0, vd:0, $h:0, Ad:t, zf:t, Ec:0, Jb:0, La:t, Be:0, Wd:0, Xa:0, Qc:0, wl:0, vl:0, vf:l, ni:l, hh:l, Ng:l, Lg:l, Mg:l, Fg:l, xi:l, bc:l, Rb:l, wd:l, ue:t, Bk:t, be:l, gd:l, xe:l, Df:l, mf:l, gf:l, Qd:l, wf:l, vi:l, sh:0, qh:0, th:0, rh:0, ae:0, Cd:0, cd:0, ff:0, init:function() {
  gls2.ab.ie !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.ab.ie = this;
  this.Rb = gls2.uj(this);
  this.Rb.Cb.addChildTo(this);
  this.ja = gls2.mj().Da;
  this.ja.addChildTo(this);
  this.vf = gls2.ab.Layer().addChildTo(this);
  this.ni = gls2.ab.Layer().addChildTo(this);
  this.Ng = gls2.ab.Layer().addChildTo(this);
  this.Lg = gls2.ab.Layer().addChildTo(this);
  this.hh = gls2.ab.Layer().addChildTo(this);
  this.Mg = gls2.ab.Layer().addChildTo(this);
  this.Fg = gls2.ab.Layer().addChildTo(this);
  this.xi = gls2.ab.Hh(this).addChildTo(this);
  tm.Gb.md.te.Yh = this;
  this.bc = tm.app.Object2D();
  this.bc.addChildTo(this);
  this.bc.update = function(c) {
    this.Nk(c)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Rb.clear()
  })
}, addChild:function(c) {
  c.qb ? this.Lg.addChild(c) : c instanceof gls2.Qa ? this.Fg.addChild(c) : c instanceof gls2.ug ? this.vf.addChild(c) : c instanceof gls2.ea ? c.Tc ? this.vf.addChild(c) : this.Ng.addChild(c) : c instanceof gls2.Ph ? this.hh.addChild(c) : c === this.bc || c === this.ja || c instanceof gls2.ab.Layer || c instanceof gls2.ab.Hh || c instanceof gls2.Qh || c instanceof gls2.Gh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(c)))
}, update:function(c) {
  this.Tk(c.keyboard);
  this.Ka.update(c.frame);
  0 === c.frame % 2 && this.Rb.update();
  c.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.Pe()) : c.keyboard.getKeyDown("space") ? this.He(0) : c.keyboard.getKeyDown("p") && (this.oh().saveAsImage(), this.He(0))
}, oh:function() {
  var c = tm.graphics.Canvas();
  c.resize(480, 640);
  c.clearColor("black");
  c.drawImage(this.ja.ja.element, 0, 0);
  c.drawImage(this.app.canvas.element, 0, 0);
  c.drawImage(this.Rb.element, 0, 0);
  return c
}, Nk:function(c) {
  this.da.Ac === t && gls2.fa.erase();
  var a;
  a = [].concat(gls2.ea.ob);
  for(var f = [].concat(gls2.Od.ob), d = f.length;f[--d] !== i;) {
    for(var j = a.length;a[--j] !== i;) {
      var m = a[j], r = f[d];
      if(!(0 >= m.ra || m.bb) && gls2.Collision.Xd(m, r)) {
        if(r.uf(1), r.remove(), m.Rc(r.rd)) {
          this.Fc += 1;
          this.La ? this.Eb(0) : this.Eb(0.005);
          this.ah(m);
          break
        }
      }
    }
  }
  r = this.da.ac;
  if(this.da.Yb) {
    a = [].concat(gls2.ea.ob);
    a.sort(function(a, c) {
      return a.y - c.y
    });
    for(j = a.length;a[--j] !== i;) {
      if(m = a[j], !(0 >= m.ra || m.bb) && gls2.Collision.Xd(m, r)) {
        r.Wk(m.y + m.boundingHeightBottom);
        m.Rc(r.rd) ? (this.Fc += 1, this.La ? this.Eb(0) : this.Eb(0.01), this.ah(m)) : (this.hb = Math.min(this.hb + 0.02, 1), this.La ? (this.Pd(0.01 * U[this.Qc]), this.Eb(0)) : (this.Pd(0.01), this.Eb(0.001)));
        r.uf(2);
        break
      }
    }
    f = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(gls2.ea.ob);
    for(j = a.length;a[--j] !== i;) {
      if(m = a[j], !(0 >= m.ra || m.bb) && gls2.Collision.Xd(m, f)) {
        m.Rc(r.rd) ? (this.Fc += 1, this.La ? this.Eb(0.03) : this.Eb(0.015), this.ah(m)) : (this.hb = Math.min(this.hb + 0.02, 1), this.La ? (this.Pd(0.01 * U[this.Qc]), this.Eb(0.004)) : (this.Pd(0.01), this.Eb(0.002))), r.lk(2, this.da.x, this.da.y - 30), this.ff += 1, 300 < this.ff && gls2.core.wa("aura300")
      }
    }
  }
  if(this.Ad) {
    gls2.fa.erase();
    a = [].concat(gls2.ea.ob);
    for(j = a.length;a[--j] !== i;) {
      if(m = a[j], !(0 >= m.ra || m.bb) && m.$b() && m.Rc(2)) {
        this.qd(m.score), this.Fc += 1
      }
    }
    this.hb = this.Sa = 0
  }
  if(this.La) {
    j = [].concat(gls2.Od.ob);
    for(m = j.length;j[--m] !== i;) {
      if(r = j[m], !(0 >= r.ra)) {
        f = [].concat(gls2.Qa.ob);
        for(a = f.length;f[--a] !== i;) {
          d = f[a], d.visible !== t && (0 < r.ra && gls2.Collision.Xd(r, d)) && (d.ra -= 6 - this.Jb, 0 > d.ra && (d.za(), this.qd(10), this.Pd(1), this.ri(t, t, d.x, d.y, 1)), r.ra -= 1)
        }
      }
    }
  }
  if(this.ue) {
    gls2.fa.erase()
  }else {
    if(this.da.parent !== l && this.da.bb === t && this.Ad === t && 0 >= this.Be) {
      r = t;
      for(j = gls2.Qa.ob.length;gls2.Qa.ob[--j] !== i;) {
        if(a = gls2.Qa.ob[j], a.visible !== t && gls2.Collision.Xd(a, this.da)) {
          this.da.Rc();
          r = k;
          0 < this.Pb && this.sd ? (this.Jb = gls2.ka.clamp(this.Jb - 1, 0, 1), this.me(-0.01), gls2.Mh(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this), gls2.core.wa("bomb2"), this.Qd[this.Aa] += 1) : this.Gi();
          break
        }
      }
      if(!r) {
        for(j = gls2.ea.ob.length;gls2.ea.ob[--j] !== i;) {
          if(m = gls2.ea.ob[j], !(0 >= m.ra || m.bb) && !m.Tc && gls2.Collision.Xd(m, this.da)) {
            this.da.Rc();
            0 < this.Pb && this.sd ? (this.Jb = gls2.ka.clamp(this.Jb - 1, 0, 1), this.me(-0.01), gls2.Mh(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this), gls2.core.wa("bomb2"), this.Qd[this.Aa] += 1) : this.Gi();
            break
          }
        }
      }
    }
    this.La && (this.Wd -= 1, 0 >= this.Wd && this.of());
    this.Be = Math.max(this.Be - 1, 0);
    this.hb -= 0.01;
    0 >= this.hb && (this.hb = 0, this.La || 0 < this.Xa ? this.Zc = this.Sa = this.pb = 0 : (0 < this.Sa && (0 >= this.Zc && (this.Zc = 0.005 * this.Sa), this.pb = this.pb * (this.Sa - this.Zc) / this.Sa, this.Sa -= this.Zc), 0 >= this.Sa && (this.Zc = this.Sa = this.pb = 0)));
    this.zf && (this.score += 100);
    r = gls2.Qa.ob.length;
    c.fps = 500 < r ? Math.floor(60 * gls2.ka.clamp(500 / r, 0.2, 1)) : 60
  }
}, ah:function(c) {
  this.ri(c.Tc, this.La || 22500 > gls2.Sc(c, this.da), c.x, c.y, c.star * V[this.Qc], c instanceof gls2.Id);
  this.Pd(U[this.Qc]);
  for(var a = this.pb, f = ~~(this.Sa / 1E3) + 1, d = 0;d < f;d++) {
    a += c.score, this.qd(a)
  }
  this.pb += c.score * f
}, ri:function(c, a, f, d, j, m) {
  c = c ? gls2.Cj : gls2.Sh;
  for(var r = 0;r < j;r++) {
    var B = c(a);
    B.setPosition(f, d);
    m && (B.zd = k)
  }
}, Ek:function(c) {
  gls2.sa("star");
  c.zi ? (this.Kf += 1, this.pb += 1E3, this.qd(1E3 + 0 * this.pb), this.La ? this.Eb(0) : this.Eb(0.01)) : (this.Jf += 1, this.pb += 100, this.qd(100 + 0 * this.pb), this.La ? this.Eb(0) : this.Eb(0.001))
}, start:function(c, a) {
  this.Rb.Sd.Vj().clear();
  this.Pc = this.score = 0;
  this.kd = 3;
  this.Pb = this.vd = R[a];
  this.$h = S[a];
  this.Xa = this.Jb = this.Ec = 0;
  this.of();
  this.Ad = t;
  this.Ee = this.Ef = 0;
  this.gd = [];
  this.xe = [];
  this.Df = [];
  this.mf = [];
  this.gf = [];
  this.Qd = [];
  this.wf = [];
  for(var f = 0;5 > f;f++) {
    this.gd.push(0), this.xe.push(0), this.Df.push(0), this.mf.push(0), this.gf.push(0), this.Qd.push(0), this.wf.push(0)
  }
  this.vi = [];
  this.da = gls2.Ph(this, c, a);
  this.nh(0);
  J.Ua.Zb.$ex = 2 !== a ? 0 : 1;
  this.Si(0);
  gls2.sa("voLetsGo");
  this.cl();
  0 === c ? gls2.core.wa("launch0") : 1 === c ? gls2.core.wa("launch1") : 2 === c && gls2.core.wa("launch2")
}, Si:function(c) {
  this.Ab("3...2...1...");
  this.da.parent !== l && this.da.remove();
  gls2.ea.re();
  gls2.Od.re();
  gls2.fa.re();
  this.vf.removeChildren();
  this.Lg.removeChildren();
  this.Mg.removeChildren();
  this.hh.removeChildren();
  this.Fg.removeChildren();
  this.bc.removeChildren();
  this.Fc = this.pf = this.Kf = this.Jf = this.De = this.hb = this.Sa = this.pb = 0;
  this.wd = l;
  this.Bk = this.ue = t;
  this.Ee = 0;
  this.Rb.Cb.ye = 0;
  this.Jb = this.Rb.Cb.Cc = 0;
  this.Aa = c;
  this.Ka = gls2.od.create(this, c);
  this.tweener.clear().wait(1E3).call(function() {
    this.Yg()
  }.bind(this));
  this.ja.tweener.clear();
  this.ff = this.cd = this.Cd = this.ae = this.rh = this.th = this.qh = this.sh = 0;
  this.sh = gls2.core.frame;
  this.th = Date.now()
}, Yg:function() {
  this.Ab("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.ac.addChildTo(this);
  this.da.Ac = t;
  this.da.bb = k;
  this.da.Vd = t;
  this.da.Yb = t;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.oe = this.Ac = k
  }.bind(this.da)).wait(3E3).call(function() {
    this.bb = t
  }.bind(this.da))
}, Gi:function() {
  gls2.oa.qf(this.da.x, this.da.y, this);
  this.Ab("I was shot down.");
  this.da.Ac = t;
  this.da.remove();
  this.kd -= 1;
  this.Xa = this.Zc = this.Sa = this.hb = 0;
  this.Ee += 1;
  this.Ef += 1;
  this.Df[this.Aa] += 1;
  this.Jb = gls2.ka.clamp(this.Jb - 3, 0, 1);
  this.me(-0.03);
  0 < this.kd ? this.tweener.clear().wait(1E3).call(function() {
    this.Pb = this.vd = Math.min(this.vd + 1, this.$h);
    this.Yg()
  }.bind(this)) : (this.be = this.oh().canvas.toDataURL("image/png"), gls2.core.ze === this.score && (gls2.core.tk = this.be), this.tweener.clear().wait(2E3).call(function() {
    this.Pc < gls2.core.bi() ? this.Qk() : this.qi()
  }.bind(this)))
}, nh:function(c) {
  J.Ua.Zb.$rank = gls2.ka.clamp(c, 0, 0.5)
}, me:function(c) {
  this.nh(J.Ua.Zb.$rank + c)
}, kk:function() {
  this.Cd = Date.now();
  this.cd += this.Cd - this.ae;
  this.Ab("System rebooted.", k);
  this.score = 0;
  this.Pc += 1;
  this.mf[this.Aa] += 1;
  this.kd = 3;
  this.Pb = this.vd = R[this.da.style];
  this.Jb = 0;
  this.nh(0);
  this.Yg()
}, Wj:function() {
  this.ci();
  gls2.Lb("bgmResult");
  var c = tm.app.Object2D();
  c.addChildTo(this.bc);
  c.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.oh()));
    c.remove()
  }.bind(this))
}, qi:function() {
  this.gd[this.Aa] = this.gd[this.Aa - 1] === i ? this.score : this.score - this.gd[this.Aa - 1];
  this.ci();
  gls2.Pe();
  this.app.replaceScene(gls2.Fh())
}, ci:function() {
  this.rh = Date.now();
  this.qh = gls2.core.frame;
  this.xe[this.Aa] = 1E3 * ((this.qh - this.sh) / (this.rh - this.th - this.cd))
}, qd:function(c) {
  var a = this.score;
  this.score += c;
  for(c = 0;c < P.length;c++) {
    var f = P[c];
    a < f && f <= this.score && (this.li(), 0 == c && this.app.wa("extend1"), 1 == c && this.app.wa("extend2"))
  }
  gls2.core.ze = Math.max(gls2.core.ze, this.score);
  gls2.core.ze === this.score && (gls2.core.uk = this.Aa, gls2.core.wk = this.da.type, gls2.core.vk = this.da.style, gls2.core.sk = this.Pc);
  1E8 <= this.score && gls2.core.wa("score100M");
  2E9 <= this.score && gls2.core.wa("score2G");
  2E10 <= this.score && gls2.core.wa("score20G");
  5E10 <= this.score && gls2.core.wa("score50G");
  1E11 <= this.score && gls2.core.wa("score100G");
  1E12 <= this.score && gls2.core.wa("score1T")
}, Pd:function(c) {
  this.Zc = 0;
  this.Sa += c;
  this.De = Math.max(this.De, this.Sa);
  1 <= c && (this.hb = 1);
  100 <= this.Sa && this.app.wa("combo100");
  1E3 <= this.Sa && this.app.wa("combo1000");
  1E4 <= this.Sa && this.app.wa("combo10000");
  1E5 <= this.Sa && this.app.wa("combo100000")
}, Eb:function(c) {
  if(10 !== this.Xa) {
    for(c *= 0.75;1 < c;) {
      gls2.Sf(this.da).addChildTo(this), c -= 1, this.Ec = 0, this.Xa += 1, 1 === this.Xa ? (this.Ab("HYPER SYSTEM, stand by.", k), gls2.sa("voHyperStandBy")) : (this.Ab("HYPER SYSTEM, ready.", k), gls2.sa("voHyperReady"))
    }
    this.Ec = gls2.ka.clamp(this.Ec + c, 0, 1);
    1 <= this.Ec && (gls2.Sf(this.da).addChildTo(this), this.Xa += 1, this.Ec -= 1, 1 === this.Xa ? (this.Ab("HYPER SYSTEM, stand by.", k), gls2.sa("voHyperStandBy")) : (this.Ab("HYPER SYSTEM, ready.", k), gls2.sa("voHyperReady")))
  }
}, bl:function() {
  0.5 > Math.random() ? (this.Ab("HYPER SYSTEM start!!", k), gls2.sa("voHyperStart0")) : (this.Ab("start counting to system limit.", k), gls2.sa("voHyperStart1"));
  this.Jb = gls2.ka.clamp(this.Jb + 1, 0, 5);
  this.me(0.01 * this.Xa);
  J.Ua.Zb.$hyperOff = 0.5 * (2 !== this.da.style ? 1 : 0.5);
  this.Wd = 800;
  this.Be = 200;
  this.da.xf.ce(this.Xa);
  this.da.ac.ce(this.Xa);
  this.da.Td = this.da.xf;
  gls2.oa.mk(this.da.x, this.da.y, this);
  this.La = k;
  this.Qc = this.Xa;
  this.Ec = this.Xa = 0;
  gls2.fa.erase(k, k);
  this.app.wa("hyper1");
  10 == this.Qc && this.app.wa("hyper10");
  this.wf[this.Aa] += 1;
  this.vi.push(this.Qc)
}, of:function() {
  this.La !== t && (this.La = t, gls2.Sf(this.da, k).addChildTo(this), this.da.Td = this.da.Ii, J.Ua.Zb.$hyperOff = 1 * (2 !== this.da.style ? 1 : 0.5), this.da.xf.ce(0), this.da.ac.ce(0), this.Be = 80, this.Qc = this.Wd = 0, gls2.fa.erase())
}, Rj:function() {
  gls2.sa("decision");
  gls2.sa("voGetBomb");
  this.Pb = Math.min(this.Pb + 1, this.vd);
  this.zf = this.Pb === this.vd
}, li:function() {
  gls2.sa("voExtend");
  this.Ab("extended.");
  this.kd += 1
}, Ab:function(c, a) {
  this.Rb.Sd.Sj(c, a)
}, He:function(c) {
  this.ae = Date.now();
  W(this, "PAUSE", ["resume", "setting", "exit game"], this.Mk, {defaultValue:c, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:t})
}, Mk:function(c) {
  switch(c) {
    case 0:
      this.Cd = Date.now();
      this.cd += this.Cd - this.ae;
      break;
    case 1:
      this.bd();
      break;
    case 2:
      this.Pk()
  }
}, bd:function() {
  W(this, "SETTING", ["bgm volume", "sound volume"], this.eh, {defaultValue:this.Bf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, eh:function(c) {
  3 !== c && (this.Bf = c);
  switch(c) {
    case 0:
      this.fh();
      break;
    case 1:
      this.gh();
      break;
    default:
      this.He()
  }
}, Pk:function() {
  W(this, "REARY?", ["yes", "no"], this.Hk, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:t})
}, Hk:function(c) {
  0 === c ? (gls2.Pe(), this.app.replaceScene(gls2.TitleScene())) : this.He(1)
}, fh:function() {
  W(this, "BGM VOLUME", "012345".split(""), this.bh, {defaultValue:gls2.core.pe, onCursorMove:function(c) {
    gls2.cb !== l && 6 !== c && (gls2.cb.volume = 0.1 * c)
  }, showExit:t})
}, bh:function(c) {
  6 !== c && (gls2.core.pe = c);
  this.bd(1)
}, gh:function() {
  W(this, "SE VOLUME", "012345".split(""), this.dh, {defaultValue:gls2.core.Dd, showExit:t})
}, dh:function(c) {
  6 !== c && (gls2.core.Dd = c);
  this.bd(1)
}, Qk:function() {
  this.ae = Date.now();
  W(this, "CONTINUE? (" + this.Pc + "/" + gls2.core.bi() + ")", ["yes", "no"], this.Ik, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:t})
}, Ik:function(c) {
  switch(c) {
    case 0:
      this.kk();
      break;
    case 1:
      this.Cd = Date.now(), this.cd += this.Cd - this.ae, this.qi()
  }
}, yd:G(), Zk:function() {
  this.Rb.Cb.tweener.clear().to({ye:-480}, 1600, "easeInBack").to({Cc:30}, 800, "easeInOutBack")
}, rk:function() {
  this.Rb.Cb.tweener.clear().to({Cc:0}, 800, "easeInOutBack").to({ye:0}, 1600, "easeOutBack")
}, Le:l, Me:0, Ce:l, Xe:0, cl:function() {
  if(1 === this.Xe) {
    if(localStorage.getItem("recCount") !== i) {
      this.Ce = [];
      for(var c = ~~localStorage.getItem("recCount"), a = 0;a < c;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.Le = [];
    this.Me = 0
  }else {
    if(2 === this.Xe && localStorage.getItem("recCount") !== i) {
      this.Ce = [];
      c = ~~localStorage.getItem("recCount");
      for(a = 0;a < c;a++) {
        for(var f = localStorage.getItem("rec" + a).split(","), d = 0;d < f.length;d++) {
          this.Ce.push(f[d])
        }
      }
    }
  }
}, Tk:function(c) {
  if(1 === this.Xe) {
    1E3 < this.Le.length && (localStorage.setItem("rec" + this.Me, this.Le), localStorage.setItem("recCount", this.Me), this.Le = [], this.Me += 1), this.Le.push("" + ~~c.getKey("up") + ~~c.getKey("down") + ~~c.getKey("left") + ~~c.getKey("right") + ~~c.getKey("z") + ~~c.getKey("x") + ~~c.getKey("c"))
  }else {
    if(2 === this.Xe && this.Ce) {
      var a = this.Ce.shift();
      a !== i && (c.getKey = function(c) {
        return"up" === c ? !!~~a[0] : "down" === c ? !!~~a[1] : "left" === c ? !!~~a[2] : "right" === c ? !!~~a[3] : "z" === c ? !!~~a[4] : "x" === c ? !!~~a[5] : "c" === c ? !!~~a[6] : t
      }, c.getKeyDown = function(c) {
        return"up" === c ? !!~~a[0] : "down" === c ? !!~~a[1] : "left" === c ? !!~~a[2] : "right" === c ? !!~~a[3] : "z" === c ? !!~~a[4] : "x" === c ? !!~~a[5] : "c" === c ? !!~~a[6] : t
      })
    }
  }
}});
gls2.ab.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.ab.Hh = tm.createClass({superClass:tm.display.CanvasElement, ba:l, frame:0, init:function(c) {
  this.superInit();
  this.ba = c;
  this.blendMode = "lighter"
}, update:function(c) {
  this.frame = c.frame
}, draw:function(c) {
  this.Zj(c);
  this.$j(c)
}, Zj:function(c) {
  if(0 < this.ba.hb) {
    c.fillStyle = "rgba(255," + ~~(255 * this.ba.hb) + "," + ~~Math.min(255, 512 * this.ba.hb) + ",0.5)";
    var a = 500 * this.ba.hb;
    c.fillRect(465, 635 - a, 10, a)
  }
}, $j:function(c) {
  c.fillStyle = "rgba(255,255,0,0.1)";
  c.fillRect(5, 628, 200, 9);
  10 === this.Xa ? 1 === this.frame % 2 && (c.fillStyle = "rgba(255,255,255,0.3)", c.fillRect(5, 628, 200, 9)) : 0 < this.ba.Ec && (c.fillStyle = "rgba(255,255,100,0.3)", c.fillRect(5, 628, 200 * this.ba.Ec, 9))
}});
gls2.ab.ie = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ba:l, be:l, bc:l, values:l, labels:l, yf:l, Oi:[1E3, 2E3, 4E3, 1E4, 1], yi:l, kh:l, cursor:0, wait:0, frame:0, init:function(c, a) {
  this.superInit();
  this.ba = c;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ba.Jf, this.ba.Kf, ~~(100 * (this.ba.Fc / this.ba.pf)), this.ba.De, 0 === this.ba.Ee ? 2E7 : 0];
  this.yf = this.values.map(function(a) {
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
  this.yi = tm.display.Label(Math.floor(this.ba.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.kh = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.kh.visible = t;
  this.be = a;
  for(var d = [], f = 0;12 > f;f++) {
    d[f] = [];
    for(var j = 0;16 > j;j++) {
      d[f][j] = {lh:0, fd:0, Vc:gls2.ka.randf(-2, 2), pc:gls2.ka.randf(1, 4)}
    }
  }
  this.bc = tm.app.Object2D();
  this.bc.draw = function(a) {
    a.save();
    for(var c = k, f = 0;f < d.length;f++) {
      for(var j = 0;j < d[f].length;j++) {
        var p = d[f][j];
        640 > 40 * j + p.fd && (a.drawImage(this.be.element, 40 * f, 40 * j, 40, 40, 40 * f + p.lh, 40 * j + p.fd, 40, 40), p.lh += p.Vc, p.fd += p.pc, p.pc += 0.3, c = t)
      }
    }
    this.wait = 60;
    c && this.bc.remove();
    a.restore()
  }.bind(this);
  this.bc.addChildTo(this);
  this.on("enter", function() {
    0 === this.ba.Ef && 0 === this.ba.Pc && (0 === this.ba.Aa ? gls2.core.wa("nomiss1") : 1 === this.ba.Aa ? gls2.core.wa("nomiss2") : 2 === this.ba.Aa ? gls2.core.wa("nomiss3") : 3 === this.ba.Aa ? gls2.core.wa("nomiss4") : 4 === this.ba.Aa && gls2.core.wa("nomiss5"))
  });
  this.on("exit", function() {
    gls2.rf()
  })
}, update:function(c) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.sa("star"), this.values[a] <= this.yf[a] || c.keyboard.getKeyDown("z") || c.keyboard.getKeyDown("c") || c.keyboard.getKeyDown("space") ? (this.ba.qd(this.values[a] * this.Oi[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ba.qd(this.yf[a] * this.Oi[a]), this.values[a] -= this.yf[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.yi.text = Math.floor(this.ba.score)
    }else {
      if(this.kh.visible = k, c.keyboard.getKeyDown("z") || c.keyboard.getKeyDown("c") || c.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.sa("decision"), this.ba.gd[this.ba.Aa] = this.ba.gd[this.ba.Aa - 1] === i ? this.ba.score : this.ba.score - this.ba.gd[this.ba.Aa - 1], 5 == this.ba.Aa + 1 ? c.replaceScene(gls2.ij()) : (this.ba.Si(this.ba.Aa + 1), c.replaceScene(this.ba))
      }
    }
    this.frame += 1
  }
}, yd:G()});
gls2.Fh = tm.createClass({superClass:gls2.Scene, pa:0, Li:t, init:function() {
  this.superInit();
  var c = tm.display.Label("GAME OVER");
  c.fillStyle = "red";
  c.setPosition(240, 320).addChildTo(this);
  this.interactive = k;
  this.on("enter", function() {
    gls2.Lb("gameover");
    this.Wi || this.Vk()
  })
}, update:function(c) {
  (c.keyboard.getKeyDown("z") || c.keyboard.getKeyDown("c") || 300 == this.pa && !this.Li) && this.Gf();
  this.pa += 1
}, yd:function(c) {
  c.clearColor("black")
}, Wi:t, Ni:t, wait:t, mh:l, Vk:function() {
  this.Wi = this.wait = k;
  this.app.jh(l, function(c, a, f) {
    this.wait = t;
    c ? this.Rk(c) : a ? (this.Ni = k, this.mh = f, this.Sk()) : this.Gf()
  }.bind(this))
}, Gf:function() {
  this.wait || (this.Li = k, W(this, "GAME OVER", ["tweet result", "back to title"], this.Lk, {defaultValue:this.Ni ? 1 : 0, menuDescriptions:["\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"], showExit:t}))
}, Lk:function(c) {
  0 === c ? this.il() : this.app.replaceScene(gls2.TitleScene())
}, Sk:function() {
  W(this, "SUCCESS!", ["ok"], function() {
    this.Gf()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:t})
}, Rk:function() {
  W(this, "ERROR!", ["ok"], function() {
    this.Gf()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:t})
}, il:function() {
  var c = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({score:Math.floor(this.app.ba.score), stage:5 > this.app.ba.Aa ? "Stage" + (this.app.ba.Aa + 1) : "ALL", type:"ABC"[this.app.ba.da.type], style:["S", "L", "EX"][this.app.ba.da.style], cont:this.app.ba.Pc}), c = tm.social.Twitter.createURL({type:"tweet", text:c, hashtags:"tmshooter", url:this.mh ? window.location.origin + "/ranking/" + this.mh : window.location.origin});
  window.open(c, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
(function() {
  var c = "TM-Shooter;2D 'DANMAKU' Shooter on HTML5;;MUSIC;Underworld (select)  by  delf;Feel the universe (stage1)  by  delf;Herod (boss)  by  \u6dbc\u3005;Re-Birth (clear)  by  delf;Remenber (stage2)  by  Ryo;THE NEW CHALLENGER freeVer. (stage3)  by  delf;Aegis (stage4)  by  \u5cf6\u767d;Ancien Ocean (stage5)  by  delf;\u84bc\u3044\u6708 (ending)  by  delf;;SOUND;kouichi_axis (\u9b54\u738b\u9b42);on_jin (\u97f3\u4eba);;GAME ENGINE (tmlib.js);phi_jp;;PROGRAM AND GRAPHICS;minimo(stage3);daishi_hmr;;special respect to...;DODONPACHI series by CAVE;PRECURE series by TOEI;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!".split(";");
  gls2.ij = tm.createClass({superClass:gls2.Scene, ja:l, da:l, labels:l, Ri:t, speed:0, mi:t, Di:l, init:function() {
    this.superInit();
    this.Di = tm.display.CanvasElement().addChildTo(this);
    this.ja = gls2.core.ba.ja;
    this.ja.addChildTo(this);
    this.ja.direction = 0.5 * Math.PI;
    this.ja.speed = 1;
    var a = this.da = gls2.core.ba.da;
    a.Ac = t;
    a.setPosition(240, 448);
    a.ba = this.Di;
    [].concat(a.children).forEach(function(c) {
      c != a.yc && c.remove()
    });
    a.addChildTo(this);
    var f = a.x;
    a.on("enterframe", function() {
      0.2 < a.x - f ? a.Ya += 0.3 : -0.2 > a.x - f ? a.Ya -= 0.3 : 0 < a.x - f ? a.Ya += 0.11 : 0 > a.x - f && (a.Ya -= 0.11);
      f = a.x
    });
    var d = function() {
      var c = gls2.ka.randf(0.8, 1.2);
      a.tweener.clear().to({x:gls2.ka.randf(48, 432), y:gls2.ka.randf(192, 512), scaleX:c, scaleY:c}, 6E3, "easeInOutQuad").call(d)
    }.bind(this);
    d();
    gls2.core.ba.Aa += 1;
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
      gls2.Lb("bgmEnding", k, k);
      this.Ri = k
    }.bind(this))
  }, Bl:function() {
    0 === gls2.core.ba.da.type ? gls2.core.wa("allclear0") : 1 === gls2.core.ba.da.type ? gls2.core.wa("allclear1") : 2 === gls2.core.ba.da.type && gls2.core.wa("allclear2")
  }, Cl:function() {
    this.ja.addChildTo(gls2.core.ba)
  }, update:function(a) {
    a.keyboard.getKey("z") || a.keyboard.getKey("x") || a.keyboard.getKey("c") || this.Ri && gls2.cb && gls2.cb.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(a) {
      return!!a.parent
    }) ? this.speed = 8 : this.$k() : this.speed = 0.5
  }, $k:function() {
    this.mi || (this.mi = k, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 5E3).call(function() {
      gls2.Pe();
      this.app.replaceScene(gls2.Fh())
    }.bind(this)), this.ja.tweener.clear().to({speed:9}, 2E3), this.da.tweener.clear().wait(2E3).to({y:-192}, 2E3, "easeInQuad"))
  }, yd:G()})
})();
(function() {
  gls2.ea = tm.createClass({superClass:tm.display.CanvasElement, name:l, da:l, ba:l, Ka:l, ra:0, ad:0, score:0, Tc:t, erase:t, star:1, Ak:t, Ib:k, Wa:t, frame:0, bb:t, Mf:l, direction:0, speed:0, ga:l, init:function(a, f, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Wa = t;
      c.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = c.indexOf(this);
      -1 !== a && c.splice(a, 1)
    });
    this.Ib = k;
    this.ba = a;
    this.da = a.da;
    this.score = 100;
    this.erase = t;
    this.Qj(d);
    f.setup(this);
    this.altitude = this.Tc ? 1 : 10;
    this.Mf = {x:0, y:0};
    this.bb = t
  }, Ge:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, zl:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Wa === t && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Wa = k, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, c = this.y;
    this.Tc && (this.x += this.ba.ja.Ea, this.y += this.ba.ja.Fa);
    this.Wa && (this.frame += 1);
    this.Mf.x = this.x - a;
    this.Mf.y = this.y - c
  }, Rc:function(a) {
    if(!this.Wa) {
      return t
    }
    this.ra -= a;
    if(0 >= this.ra) {
      return a = gls2.ka.randf(0, 5), 2 > a ? this.ba.Ab("enemy destroy.") : 4 > a ? this.ba.Ab(this.name + " destroy.") : this.ba.Ab("ETR reaction gone."), this.erase && gls2.fa.erase(k, this.ba.La, this instanceof gls2.Id), this.dispatchEvent(tm.event.Event("destroy")), this.za(), "yukishiro" === this.name ? gls2.core.wa("mboss1") : "mishou" === this.name ? gls2.core.wa("mboss2") : "higashi" === this.name ? gls2.core.wa("mboss3") : "hishikawa" === this.name ? gls2.core.wa("mboss4") : "minamino" === 
      this.name ? gls2.core.wa("mboss5") : "misumi" === this.name ? gls2.core.wa("boss1") : "hyuga" === this.name ? gls2.core.wa("boss2") : "momozono" === this.name ? gls2.core.wa("boss3") : "aida" === this.name ? gls2.core.wa("boss4") : "hojo" === this.name && gls2.core.wa("boss5"), k
    }
    40 > this.ra && this.Ja();
    return t
  }, za:function() {
    gls2.oa.qf(this.x, this.y, this.ba, this.Mf);
    this.remove()
  }, $b:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Ok:function() {
    return this.Ib
  }, Ja:G(), Qj:function(a) {
    this.name = a;
    a = gls2.ea.fj[a];
    this.ra = this.ad = a[0];
    this.score = a[1];
    this.Tc = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, Bc:function() {
    this.remove();
    this.ba.ni.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.oa.qf(this.x + gls2.ka.rand(-100, 100), this.y + gls2.ka.rand(-40, 40), this.ba, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.oa.we(this.x, this.y, this.ba);
      this.remove()
    }.bind(this))
  }, hf:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.oa.qf(this.x + gls2.ka.rand(-100, 100), this.y + gls2.ka.rand(-40, 40), this.ba, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.oa.we(this.x, this.y, this.ba);
      this.remove()
    }.bind(this))
  }});
  gls2.ea.re = function() {
    for(var a = [].concat(c), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var c = gls2.ea.ob = []
})();
gls2.Id = tm.createClass({superClass:gls2.ea, Ak:k, ad:0, If:l, init:function(c, a, f) {
  this.If = a;
  this.superInit(c, this.If[0], f);
  this.ad = this.ra;
  this.addEventListener("added", function() {
    this.ba.wd = this;
    this.ba.Zk();
    this.tweener.wait(1E3).call(function() {
      this.ba.ue = t
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ba.wd = l;
    this.ba.rk();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ba.Wj()
    }.bind(this));
    a.addChildTo(this.ba.bc)
  })
}, Rc:function(c) {
  var a = this.ra;
  if(gls2.ea.prototype.Rc.call(this, c)) {
    return this.ba.ue = k, this.ba.da.oe = t, gls2.rf(), k
  }
  this.ra <= 0.55 * this.ad && 0.55 * this.ad < a ? (gls2.aa.$d(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.oa.jb(this.x, this.y, this.ba), gls2.fa.erase(k, this.ba.La), this.If[1].setup(this)) : this.ra <= 0.1 * this.ad && 0.1 * this.ad < a && (gls2.aa.$d(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.oa.jb(this.x, this.y, this.ba), gls2.fa.erase(k, this.ba.La), this.If[2].setup(this), gls2.sa("voJacms"))
}});
(function() {
  gls2.ea.fj = {kujo:[2, 300, t, t, 1, {radius:24}], kiryu:[3, 400, t, t, 1, {radius:24}], natsuki:[5, 900, k, t, 1, {radius:24}], kise:[50, 15E3, k, t, 1, {radius:24}], yamabuki:[100, 15E3, k, t, 1, {width:140, height:70}], hanasaki:[150, 2E5, k, k, 10, {radius:40}], myodoin:[50, 15E3, k, t, 1, {radius:40}], kenzaki:[200, 3E5, k, k, 10, {width:100, height:40}], minazuki:[300, 3E5, k, k, 10, {width:100, height:40}], tsukikage:[8, 1E3, t, t, 5, {width:100, height:20}], kasugano:[6, 1E3, t, t, 1, {radius:24}], 
  kurokawa:[35, 5E3, t, t, 5, {width:100, height:20}], mimino:[35, 5E3, t, t, 5, {width:100, height:20}], shirabe:[35, 5E3, t, t, 5, {width:100, height:20}], akimoto:[250, 3E5, t, k, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, t, k, 20, {width:180, heightBottom:40, heightTop:120}], aono:[300, 3E5, t, k, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, t, k, 20, {width:240, height:80}], misumi:[4E3, 2E6, t, k, 0, {width:240, height:80}], mishou:[1E3, 1E6, 
  t, k, 20, {width:300, height:80}], higashi:[1E3, 12E5, t, k, 20, {width:256, height:128}], momozono:[6E3, 35E5, t, k, 0, {width:256, height:128}], hyuga:[6E3, 3E6, t, k, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, t, k, 20, {radius:130}], aida:[8E3, 4E6, t, k, 0, {width:370, heightBottom:5, heightTop:60}], minamino:[1500, 5E6, k, k, 30, {width:180, heightTop:375, heightBottom:-325}], rery:[250, 2E3, k, t, 5, {radius:24}], fary:[200, 2E3, k, t, 5, {radius:24}], sory:[350, 2E3, k, t, 5, {radius:24}], 
  lary:[300, 2E3, k, k, 5, {radius:24}], shiry:[250, 2E3, k, k, 5, {radius:24}], dodory:[120, 2E3, k, t, 5, {radius:24}], kurumi:[30, 500, t, t, 1, {width:24, height:48}], hino:[20, 1E4, t, t, 1, {width:64, height:64}], hoshizora:[300, 3E5, t, k, 30, {width:128, height:64}], yotsuba:[400, 5E5, t, k, 40, {width:64, height:64}], yotsubaLeaf:[30, 1E5, t, t, 10, {width:64, height:64}], midorikawa:[5, 2E3, t, t, 1, {width:64, height:64}], aoki:[5, 3200, t, t, 1, {width:64, height:64}], madoka:[250, 4E5, 
  t, k, 10, {width:256, height:64}]};
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
  gls2.ea.la = tm.createClass({superClass:gls2.ea, zg:l, Ag:l, init:function(a, f) {
    this.superInit(a, f, "natsuki");
    this.zg = c("tex_tank1", 64, 64);
    this.Ag = c("tex_tank1", 64, 64);
    this.td = this.td || 0;
    this.zc = this.zc || 0
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    for(a = this.td;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var c = this.zc;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.zg.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.Ag.setFrameIndex(~~(16 * c / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.zg.draw(a);
    this.Ag.draw(a)
  }, za:function() {
    gls2.oa.dk(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Re = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "yamabuki");
    this.ca = c("tex2", 256, 128).setFrameIndex(7)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Vb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "tsukikage");
    this.ca = c("tex1", 64, 64).setFrameIndex(23)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.fb = tm.createClass({superClass:gls2.ea, ca:l, Eg:l, init:function(a, f) {
    this.superInit(a, f, "kasugano");
    this.ca = c("tex5", 64, 64).setFrameIndex(1);
    this.xc = gls2.Za(80, 1, 0.8);
    this.Eg = tm.geom.Vector2()
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && this.xc.clone().setPosition(this.x, this.y).addChildTo(this.ba);
    this.rotation = tm.geom.Vector2.sub(this.position, this.Eg).toAngle() * gls2.ka.RAD_TO_DEG - 90;
    this.Eg.set(this.x, this.y)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Wc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kurokawa");
    this.ca = c("tex1", 128, 128).setFrameIndex(1)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.sc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "mimino");
    this.ca = c("tex1", 128, 128).setFrameIndex(1)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.rb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "shirabe");
    this.ca = c("tex5", 128, 128).setFrameIndex(4)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Wb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "akimoto");
    this.ca = c("tex1", 256, 128).setFrameIndex(1)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.Bc()
  }});
  gls2.ea.he = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "aono");
    this.ca = c("tex1", 256, 128);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 128;
    this.setScale(1.2);
    this.Nb = gls2.Za(70, 1, 0.97)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Nb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ba), this.Nb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ba))
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.Bc()
  }});
  gls2.ea.Nd = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "yumehara");
    this.ca = c("tex1", 256, 256);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 256;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 256
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.Bc()
  }});
  gls2.ea.Ra = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kise");
    this.ca = c("tex1", 64, 128).setFrameIndex(14)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Ze = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "hanasaki");
    this.ca = c("tex1", 128, 128).setFrameIndex(12)
  }, Ja:G(), za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Wf = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "myodoin");
    this.ca = c("tex5", 64, 128).setFrameIndex(0)
  }, Ja:G(), za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.qc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "kenzaki");
    this.ca = c("tex1", 128, 256);
    this.ca.srcRect.x = 0;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 128;
    this.ca.srcRect.height = 256
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Qf = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "minazuki");
    this.ca = c("tex5", 128, 256);
    this.ca.setFrameIndex(1);
    this.setScale(1.2)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }});
  gls2.ea.Va = tm.createClass({superClass:gls2.ea, init:function(a, f) {
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
  gls2.ea.Bb = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "aoki");
    this.ca = c("tex4", 64, 64).setFrameIndex(1)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, Ge:function() {
    240 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.el = this.y + 192;
    this.fd = this.y
  }});
  gls2.ea.Oc = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "madoka");
    this.ca = c("tex4", 256, 128).setFrameIndex(3)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    gls2.oa.we(this.x, this.y, this.ba);
    this.Bc()
  }});
  gls2.ea.Bd = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "hoshizora");
    this.ca = c("tex4", 256, 128).setFrameIndex(1);
    this.boundingWidth = 384;
    this.setScale(1.5)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a);
    if(this.Wa === t && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Wa = k, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.we(this.x, this.y, this.ba);
    this.Bc()
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, Ge:function() {
    this.tweener.move(240, this.y, 6E3, "easeInOutQuad").moveBy(0, 64, 5E3, "easeInOutQuad");
    240 < this.x ? (this.scaleX = -1.5, this.tweener.moveBy(-496, 0, 8E3, "easeInOutQuad")) : this.tweener.moveBy(496, 0, 8E3, "easeInOutQuad")
  }, $b:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ea.Nf = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "yotsuba");
    this.ca = c("tex4", 128, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.ca.draw(a)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    gls2.oa.we(this.x, this.y, this.ba);
    this.Bc();
    this.ba.Ad || gls2.jj(this.x, this.y, this.da).addChildTo(this.parent);
    for(var a = 0;4 > a;a++) {
      this.Uc[a] && this.Uc[a].za()
    }
    delete this.Uc;
    this.remove()
  }, Ge:function() {
    this.Uc = [];
    for(var a = 0;4 > a;a++) {
      var c = 0.5 * Math.PI * a;
      this.Uc[a] = this.Ka.Ta({hard:gls2.ea.ld, soft:gls2.aa.ld[a], x:this.x + 64 * Math.sin(c), y:this.y + 64 * Math.cos(c)});
      this.Uc[a].dir = c;
      this.Uc[a].Kg = this;
      this.Uc[a].Dk = a;
      this.Uc[a].distance = 64
    }
    gls2.ea.prototype.Ge.call(this);
    return this
  }});
  gls2.ea.ld = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "yotsubaLeaf");
    this.ca = c("yotsubaLeaf", 64, 64).setFrameIndex(0)
  }, update:function(a) {
    gls2.ea.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.Kg.Uc[this.Dk] = l;
    this.remove()
  }});
  gls2.ea.ge = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "kurumi");
    this.ca = c("tex3", 64, 128);
    this.ca.setFrameIndex(8)
  }, Ja:G(), draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    gls2.dj(this.x, this.y, this.da).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ea.Uf = tm.createClass({superClass:gls2.ea, ca:l, init:function(a, f) {
    this.superInit(a, f, "yukishiro");
    this.ca = c("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.ig = tm.createClass({superClass:gls2.Id, ca:l, init:function(a, f) {
    this.superInit(a, f, "misumi");
    this.ca = c("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, draw:function(a) {
    this.ca.draw(a)
  }, za:function() {
    this.hf();
    gls2.core.fps = 60
  }});
  gls2.ea.eg = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "mishou");
    this.ca = c("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Nb = gls2.Za(80, 1, 0.9);
    this.xc = gls2.Za(256, 1, 0.9)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Nb.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba), this.Nb.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba), this.xc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ba))
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.tj = tm.createClass({superClass:gls2.Id, init:function(a, f) {
    this.superInit(a, f, "hyuga");
    this.ca = c("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    this.hf();
    gls2.core.fps = 60
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.sg = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "higashi");
    this.ca = c("tex4", 256, 128).setFrameIndex(2);
    this.blendMode = "lighter";
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.pj = tm.createClass({superClass:gls2.Id, init:function(a, f) {
    this.superInit(a, f, "momozono");
    this.ca = c("tex4", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    this.hf();
    gls2.core.fps = 60
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.og = tm.createClass({superClass:gls2.ea, init:function(a, f) {
    this.superInit(a, f, "hishikawa");
    this.ca = c("tex2", 256, 256).setFrameIndex(2);
    this.ca.setScale(2);
    this.Nb = gls2.Za(60, 1, 0.95);
    this.xc = gls2.Za(500, 1, 0.8)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && (this.Nb.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Nb.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.xc.clone().setPosition(this.x, this.y).addChildTo(this.ba))
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    this.Bc()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.qj = tm.createClass({superClass:gls2.Id, init:function(a, f) {
    this.superInit(a, f, "aida");
    this.ca = c("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Nb = gls2.Za(60, 1, 0.95);
    this.xc = gls2.Za(500, 1, 0.8)
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.ra && (this.Nb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Nb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Nb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.Nb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ba), this.xc.clone().setPosition(this.x, this.y).addChildTo(this.ba))
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    this.hf();
    gls2.core.fps = 60
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.oj = tm.createClass({superClass:gls2.ea, qe:l, di:[{x:-60, y:-426}, {x:60, y:-426}, {x:-72, y:-72}, {x:72, y:-72}, {x:-72, y:-348}, {x:72, y:-348}, {x:-48, y:-264}, {x:48, y:-264}, {x:-48, y:108}, {x:48, y:108}, {x:-78, y:-168}, {x:78, y:-168}, {x:-96, y:-228}, {x:96, y:-228}, {x:0, y:-336}, {x:0, y:-168}, {x:-120, y:144}, {x:120, y:144}, {x:-60, y:168}, {x:60, y:168}], init:function(a, f) {
    this.superInit(a, f, "minamino");
    this.altitude = 10;
    this.bb = k;
    this.ca = c("tex5", 256, 512).setFrameIndex(1);
    this.setScale(2.16);
    this.qe = [];
    this.on("launch", function() {
      Array.prototype.push.apply(this.qe, [this.Ka.Ta({hard:gls2.ea.Lc, soft:gls2.aa.Lc(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Lc, soft:gls2.aa.Lc(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Lc, soft:gls2.aa.Lc(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Lc, soft:gls2.aa.Lc(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mb, soft:gls2.aa.Mb(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mb, soft:gls2.aa.Mb(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mb, soft:gls2.aa.Mb(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mb, soft:gls2.aa.Mb(), 
      x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mb, soft:gls2.aa.Mb(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mb, soft:gls2.aa.Mb(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Mc, soft:gls2.aa.Mc(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.$f, soft:gls2.aa.$f(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.tg, soft:gls2.aa.tg(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Ic, 
      soft:gls2.aa.Ic(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Ic, soft:gls2.aa.Ic(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Ic, soft:gls2.aa.Ic(), x:0, y:0}), this.Ka.Ta({hard:gls2.ea.Ic, soft:gls2.aa.Ic(), x:0, y:0})])
    })
  }, update:function() {
    this.qe.forEach(function(a, c) {
      a.setPosition(this.x + this.di[c].x, this.y + this.di[c].y)
    }.bind(this))
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove();
    this.qe.forEach(function(a) {
      a.parent && a.remove()
    }.bind(this))
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Md = tm.createClass({superClass:gls2.ea, ca:l, Ti:0, init:function(a, f, d, j, m) {
    this.superInit(a, f, d);
    this.ca = c(j, 64, 64);
    this.Ti = m
  }, update:function(a) {
    gls2.ea.prototype.update.apply(this, arguments);
    for(var c = tm.geom.Vector2.sub(this.ba.da.position, this.position).toAngle() + 2 * Math.PI / 32;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.ca.setFrameIndex(16 * this.Ti + Math.floor(16 * (c / (2 * Math.PI))))
  }, Ja:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ca.Pa() : 5 === a.app.frame % 30 && this.ca.Oa()
    })
  }, za:function() {
    gls2.oa.jb(this.x, this.y, this.ba);
    this.remove()
  }, draw:function(a) {
    this.ca.draw(a)
  }});
  gls2.ea.Lc = tm.createClass({superClass:gls2.ea.Md, init:function(a, c) {
    this.superInit(a, c, "rery", "kanade-cannon", 0);
    this.setScale(1.92)
  }});
  gls2.ea.Mb = tm.createClass({superClass:gls2.ea.Md, init:function(a, c) {
    this.superInit(a, c, "rery", "kanade-cannon", 1);
    this.setScale(1.2)
  }});
  gls2.ea.Mc = tm.createClass({superClass:gls2.ea.Md, init:function(a, c) {
    this.superInit(a, c, "sory", "yotsubaLeaf", 0);
    this.setScale(1.2)
  }});
  gls2.ea.$f = tm.createClass({superClass:gls2.ea.Md, init:function(a, c) {
    this.superInit(a, c, "lary", "yotsubaLeaf", 0);
    this.setScale(1.44)
  }});
  gls2.ea.tg = tm.createClass({superClass:gls2.ea.Md, init:function(a, c) {
    this.superInit(a, c, "shiry", "kanade-cannon", 1);
    this.setScale(1.68)
  }});
  gls2.ea.Ic = tm.createClass({superClass:gls2.ea.Md, init:function(a, c) {
    this.superInit(a, c, "dodory", "tex_tank1", 1);
    this.setScale(1.44)
  }});
  var c = tm.createClass({superClass:tm.display.Sprite, vh:l, init:function(a, c, d) {
    this.superInit(a, c, d);
    "string" === typeof a && (this.vh = a)
  }, draw:function(a) {
    var c = this.srcRect;
    a.context.drawImage(this._image.element, c.x, c.y, c.width, c.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Pa:function() {
    var a = this.srcRect.x, c = this.srcRect.y, d = this.srcRect.width, j = this.srcRect.height;
    this.image = this.vh + "Red";
    this.srcRect.x = a;
    this.srcRect.y = c;
    this.srcRect.width = d;
    this.srcRect.height = j
  }, Oa:function() {
    var a = this.srcRect.x, c = this.srcRect.y, d = this.srcRect.width, j = this.srcRect.height;
    this.image = this.vh;
    this.srcRect.x = a;
    this.srcRect.y = c;
    this.srcRect.width = d;
    this.srcRect.height = j
  }})
})();
(function() {
  gls2.aa = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.aa.$d(this)
    })
  }});
  gls2.aa.ta = function(a, c) {
    if(gls2.fa[c] === i) {
      console.warn("Danmaku[" + c + "] is undefined!")
    }else {
      var f = gls2.fa[c].nf();
      a.on("enterframe", f);
      a.on("completeattack", function() {
        f.stop = k
      })
    }
  };
  gls2.aa.$d = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var c = 0, f = a.length;c < f;c++) {
        a[c] && a[c].Af && (a[c].stop = k)
      }
    }
  };
  gls2.aa.Uk = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var c = 0, f = a.length;c < f;c++) {
        a[c] && a[c].Af && (a[c].stop = t)
      }
    }
  };
  gls2.aa.ia = tm.createClass({superClass:gls2.aa, pattern:l, init:function(a, c) {
    this.superInit();
    this.pattern = a;
    this.fl = c
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    var c = this.pattern, f = this.fl;
    a.on("launch", function() {
      var a = gls2.ya.randf(640 * (f - 0.1), 640 * (f + 0.1));
      this.tweener.clear().wait(gls2.ya.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.aa.ta(this, c)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.aa.Kc = gls2.aa.ia("basic0-0", 0.2);
  gls2.aa.ub = gls2.aa.ia("basic0-0", 0.4);
  gls2.aa.Ld = gls2.aa.ia("basic0-0", 0.6);
  gls2.aa.tb = gls2.aa.ia("basic1-2", 0.2);
  gls2.aa.Jc = gls2.aa.ia("basic1-2", 0.4);
  gls2.aa.Kd = gls2.aa.ia("basic1-2", 0.6);
  gls2.aa.Ba = tm.createClass({superClass:gls2.aa, Kb:l, init:function(a, c) {
    this.superInit();
    this.Kb = a;
    this.delay = c
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Kb = this.Kb;
    a.tweener.wait(this.delay === i ? gls2.ka.rand(0, 1E3) : this.delay).call(function() {
      this.speed = 6;
      gls2.aa.ta(this, this.Kb);
      this.on("enterframe", function() {
        this.y < this.da.y && this.Wa && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ka.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.$b() && this.Wa && this.remove();
        if(22500 > gls2.Sc(this, this.da) || this.y > this.da.y + 150) {
          this.Ib = t
        }
      })
    }.bind(a))
  }});
  gls2.aa.vb = gls2.aa.Ba("basic1-0");
  gls2.aa.Ga = function(a) {
    return gls2.aa.Ba("basic1-3", a * (2 * Math.random() + 1))
  };
  var c = tm.createClass({superClass:gls2.aa, init:function(a, c, f) {
    this.superInit();
    this.zk = a;
    this.yk = c;
    this.Rd = f
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.speed = this.zk;
    a.td = this.yk;
    this.Rd && (a.Rd = [].concat(this.Rd));
    a.zc = 0;
    a.on("enter", function() {
      gls2.aa.ta(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.td) * this.speed;
      this.y += Math.sin(this.td) * this.speed;
      this.Wa && !this.$b() && this.remove();
      for(this.zc = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.zc;) {
        this.zc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.zc;) {
        this.zc -= 2 * Math.PI
      }
      this.Ib = this.y < this.da.y && 4E4 < gls2.Sc(this, this.da);
      if(this.Rd) {
        for(var a = 0;a < this.Rd.length;a++) {
          var c = this.Rd[a];
          c.frame === this.frame && this.tweener.to({td:c.dir !== i ? c.dir : this.td, speed:c.speed !== i ? c.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.aa.uc = c(1, 0.25 * Math.PI);
  gls2.aa.ml = c(1, -1.75 * Math.PI);
  gls2.aa.je = c(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.aa.va = c(1.6, 0.5 * Math.PI);
  gls2.aa.vc = c(1.6, -0.5 * Math.PI);
  gls2.aa.Ah = tm.createClass({superClass:gls2.aa, Na:l, init:function(a) {
    this.superInit();
    this.Na = a
  }, setup:function(a) {
    gls2.aa.ta(a, this.Na);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.aa.Ch = gls2.aa.Ah("bukky-4-0");
  gls2.aa.Dh = gls2.aa.Ah("bukky-5-0");
  c = tm.createClass({superClass:gls2.aa, Na:l, gi:t, init:function(a, c) {
    this.superInit();
    this.Na = a;
    this.gi = !!c
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Na = this.Na;
    a.on("enter", function() {
      gls2.aa.ta(this, this.Na)
    });
    a.on("enterframe", function() {
      this.Wa && !this.$b() && this.remove()
    });
    if(!this.gi) {
      a.on("enterframe", function() {
        this.Ib = this.y < this.da.y && 4E4 < gls2.Sc(this, this.da)
      })
    }
  }});
  gls2.aa.Tb = c("basic3-0", t);
  gls2.aa.Ub = c("basic3-1", t);
  gls2.aa.rc = c("cannon2-0", k);
  gls2.aa.Pf = c("cannon2-3", k);
  gls2.aa.Te = c("cannon3-0", k);
  gls2.aa.Rf = c("cannon5-0", k);
  var a = tm.createClass({superClass:gls2.aa, velocityY:0, Na:l, delay:0, init:function(a, c, f) {
    this.superInit();
    this.velocityY = a;
    this.Na = c;
    this.delay = f || 0
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Na];
    a.Ke = t;
    a.tweener.clear().wait(this.delay).moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, this.ga[0]);
      this.Ke = k
    }.bind(a));
    a.on("enterframe", function() {
      this.Ke && (this.y += this.velocityY, 384 < this.y && gls2.aa.$d(this), this.Wa && !this.$b() && this.remove(), this.Ib = this.y < this.da.y)
    })
  }});
  gls2.aa.nd = a(0.5, "kurokawa-1");
  gls2.aa.rj = a(0.5, "kurokawa-4");
  gls2.aa.tc = function(c) {
    return a(0.5, "milk-5", c)
  };
  gls2.aa.sb = tm.createClass({superClass:gls2.aa, Xi:0, Zi:0, Yi:0, $i:0, init:function(a, c, f, r) {
    this.superInit();
    this.Xi = a;
    this.Zi = c;
    this.Yi = f;
    this.$i = r
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.on("enterframe", function() {
      this.rotation = tm.geom.Vector2.sub(this.ba.da.position, this.position).toAngle() * gls2.ka.RAD_TO_DEG - 90
    });
    var c = this;
    a.tweener.clear().to({x:c.Xi, y:c.Zi}, 1400, "easeInOutQuad").call(function() {
      gls2.aa.ta(this, "ako-5")
    }.bind(a));
    a.one("completeattack", function() {
      this.tweener.clear().to({x:c.Yi, y:c.$i}, 900, "easeInOutQuad").call(function() {
        gls2.aa.ta(this, "ako-5")
      }.bind(this));
      this.one("completeattack", function() {
        this.tweener.clear().to({y:832}, 1900, "easeInQuad")
      })
    })
  }});
  gls2.aa.pd = tm.createClass({superClass:gls2.aa, delay:0, init:function(a) {
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
  gls2.aa.ke = tm.createClass({superClass:gls2.aa, delay:0, init:function(a) {
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
  gls2.aa.fb = tm.createClass({superClass:gls2.aa, Hi:0, direction:1, delay:0, init:function(a, c, f) {
    this.superInit();
    this.Hi = a;
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
    switch(this.Hi) {
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
  c = tm.createClass({superClass:gls2.aa, velocityY:0, Na:l, init:function(a, c) {
    this.superInit();
    this.velocityY = a;
    this.Na = c
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Na];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0]);
      gls2.oa.nk(this.x, this.y, this.ba)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Wa && !this.$b() && this.remove();
      this.Ib = this.y < this.da.y
    })
  }});
  gls2.aa.Va = c(0.5, "akane");
  gls2.aa.qa = tm.createClass({superClass:gls2.aa, Kb:l, init:function(a, c) {
    this.superInit();
    this.Kb = "nao-" + c;
    this.speed = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Kb = this.Kb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.aa.ta(this, this.Kb);
      var a = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.da.y && this.Wa && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ka.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * a - 90;
        !this.$b() && this.Wa && this.remove();
        if(22500 > gls2.Sc(this, this.da) || this.y > this.da.y + 150) {
          this.Ib = t
        }
      })
    }.bind(a))
  }});
  gls2.aa.xb = gls2.aa.qa(3, 1);
  gls2.aa.yb = gls2.aa.qa(6, 1);
  gls2.aa.zb = gls2.aa.qa(12, 1);
  gls2.aa.Bb = tm.createClass({superClass:gls2.aa, Kb:l, init:function(a) {
    this.superInit();
    this.Kb = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Kb = this.Kb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.aa.ta(this, this.Kb);
      this.nc = 0;
      this.on("enterframe", function() {
        this.y < this.el && (this.fd += 1);
        this.x += this.speed;
        this.y = this.fd + 8 * Math.sin(this.nc);
        this.nc += 0.06
      })
    }.bind(a))
  }});
  gls2.aa.dc = gls2.aa.Bb(1);
  gls2.aa.Hl = gls2.aa.Bb(2);
  gls2.aa.Oc = tm.createClass({superClass:gls2.aa, velocityY:0, Na:l, delay:0, init:function() {
    this.superInit();
    this.velocityY = 0.5;
    this.Na = "aguri";
    this.delay = 0
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Na];
    a.Ke = t;
    a.tweener.clear().wait(this.delay).moveBy(0, 192, 800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, this.ga[0]);
      this.Ke = k
    }.bind(a));
    a.on("enterframe", function() {
      this.Ke && (this.y += this.velocityY, 384 < this.y && gls2.aa.$d(this), this.Wa && !this.$b() && this.remove(), this.Ib = this.y < this.da.y)
    })
  }});
  gls2.aa.Oc = gls2.aa.Oc();
  gls2.aa.Bd = tm.createClass({superClass:gls2.aa, velocityX:0, Na:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Na = "miyuki"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [this.Na];
    a.Jl = a.y;
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.Wa && !this.$b() && this.remove();
      this.Ib = this.y < this.da.y
    })
  }});
  gls2.aa.Bd = gls2.aa.Bd(1);
  c = tm.createClass({superClass:gls2.aa, velocityX:0, Na:l, init:function() {
    this.superInit();
    this.Na = "alice"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.velocityY = 0.3;
    a.ga = [this.Na];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Wa && !this.$b() && this.remove();
      this.Ib = this.y < this.da.y
    })
  }});
  gls2.aa.Nf = c();
  c = tm.createClass({superClass:gls2.aa, Na:l, init:function(a) {
    this.superInit();
    this.Na = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [this.Na];
    a.tweener.clear().call(function() {
      gls2.aa.ta(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.Kg.x, c = this.Kg.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = c + Math.cos(this.dir) * this.distance;
      a = ~~(180 * Math.atan2(c - this.y, a - this.x) / 3.14159);
      this.ca.setFrameIndex(~~(22.5 * ((0 > a ? a + 360 : a) / 360)) % 16, 64, 64);
      this.Wa && !this.$b() && this.remove();
      this.Ib = this.y < this.da.y;
      this.pa++
    })
  }});
  gls2.aa.ld = [];
  gls2.aa.ld[0] = c("aliceLeaf-1");
  gls2.aa.ld[1] = c("aliceLeaf-2");
  gls2.aa.ld[2] = c("aliceLeaf-1");
  gls2.aa.ld[3] = c("aliceLeaf-2");
  gls2.aa.Ih = a(0.3, "komachi-1");
  gls2.aa.Jh = a(0.5, "komachi-2");
  gls2.aa.Kh = a(0.5, "komachi-3");
  gls2.aa.Zf = a(0.5, "komachi-4");
  gls2.aa.Yf = a(0.5, "komachi-5");
  gls2.aa.he = tm.createClass({superClass:gls2.aa, Qi:0, init:function(a) {
    this.superInit();
    this.Qi = a
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    tm.app.Tweener(a).to({x:480 * this.Qi}, 2800, "easeOutQuad").call(function() {
      gls2.aa.ta(this, "mktn-5")
    }.bind(a));
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.aa.mg = a(0.1, "nozomi-4");
  gls2.aa.ng = a(0.3, "nozomi-5");
  gls2.aa.ge = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.ta(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Ib = this.Wa
    })
  }});
  gls2.aa.ge = gls2.aa.ge();
  c = tm.createClass({superClass:gls2.aa, ga:l, Cf:0, init:function(a, c) {
    this.superInit();
    this.ga = a;
    this.Cf = c || 1500
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.Cf = this.Cf;
    a.eb = t;
    a.ib = t;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.eb = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.5 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.eb === t || 0 >= this.ra) && this.Cf < this.frame && this.ib === t) {
        this.ib = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.ib) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.Uf = c(["honoka-1"]);
  gls2.aa.ig = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.eb = t;
    a.ib = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.eb = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.ib) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.sj = gls2.aa.ig();
  gls2.aa.jg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
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
  gls2.aa.jg = gls2.aa.jg();
  gls2.aa.kg = tm.createClass({superClass:gls2.aa, init:function() {
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
  gls2.aa.kg = gls2.aa.kg();
  gls2.aa.eg = c(["mai-1", "mai-2"]);
  gls2.aa.pg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.eb = t;
    a.ib = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.eb = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.ib) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.pg = gls2.aa.pg();
  gls2.aa.qg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
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
  gls2.aa.qg = gls2.aa.qg();
  gls2.aa.rg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
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
  gls2.aa.rg = gls2.aa.rg();
  var f = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = "setsuna-1"
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.eb = t;
    a.ib = t;
    a.uh = t;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.eb = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        this.uh = t;
        this.alpha = 1;
        this.bb = t;
        if(50 < gls2.ya.rand(0, 100) && 300 < this.frame || this.x - 76 < this.da.x && this.da.x < this.x + 76) {
          gls2.oa.Og(this.x, this.y, this.ba, 8);
          this.uh = k;
          this.alpha = 0.3;
          this.bb = k;
          var c = gls2.ya.rand(48, 432), d = gls2.ya.rand(128, 192);
          this.tweener.move(c, d, 250, "easeInOutQuad").call(a)
        }else {
          c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144), this.tweener.move(240 + Math.cos(c) * d, 192 + 0.5 * Math.sin(c) * d, 2E3, "easeInOutQuad").call(a)
        }
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.eb === t || 0 >= this.ra)) {
        if(1800 < this.frame && this.ib === t && (this.ib = k, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))), this.uh && 0 == this.frame % 5) {
          var a = tm.display.Sprite("tex4", 256, 128).setFrameIndex(2);
          a.alpha = 0.3;
          a.x = this.x;
          a.y = this.y;
          a.setScale(1.5);
          a.update = function() {
            this.alpha -= 0.01;
            0 > this.alpha && this.remove()
          };
          this.ba.Ng.addChild(a)
        }
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.ib) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.sg = f();
  gls2.aa.ag = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["love-1-1", "love-1-2", "love-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.eb = t;
    a.ib = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.eb = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.ib) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.ag = gls2.aa.ag();
  gls2.aa.cg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["love-2-1", "love-2-2", "love-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.eb = t;
    a.ib = t;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.eb = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.ib) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.cg = gls2.aa.cg();
  gls2.aa.dg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["love-3-1", "love-3-2"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 2E3, "easeInOutQuad").call(a)
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
  gls2.aa.dg = gls2.aa.dg();
  gls2.aa.og = c(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.aa.fg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.eb = t;
    a.ib = t;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.eb = k;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = gls2.ya.randf(-48, 48);
        this.tweener.move(Math.clamp(this.da.x, 48, 432) + 0.3 * c, 128 + 0.3 * c, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.ib) {
        var a = this.ga.shift();
        gls2.aa.ta(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.aa.fg = gls2.aa.fg();
  gls2.aa.gg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
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
  gls2.aa.gg = gls2.aa.gg();
  gls2.aa.hg = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var c = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(a)
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
  gls2.aa.hg = gls2.aa.hg();
  gls2.aa.Xf = tm.createClass({superClass:gls2.aa, ga:l, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    a.on("enemyconsumed", function() {
      this.Ka.$.fe = t
    });
    a.gl = tm.app.Tweener(a).to({x:432}, 3E4, "easeInOutQuad").to({x:48}, 3E4, "easeInOutQuad").call(function() {
      this.Ka.$.fe = k
    }.bind(a)).setLoop(k);
    a.hl = tm.app.Tweener(a).to({y:576}, 16E4, "easeInOutQuad").call(function() {
      tm.app.Tweener(this).to({y:448}, 2E4, "easeInOutQuad").to({y:576}, 2E4, "easeInOutQuad").setLoop(k)
    }.bind(a));
    a.tweener.wait(22E4).call(function() {
      this.Ka.$.fe = t;
      this.gl.clear();
      this.hl.clear();
      this.tweener.clear().to({x:960}, 1E4, "easeInQuad")
    }.bind(a));
    a.eb = t;
    a.on("enterframe", function() {
      this.bb = 3 < this.qe.filter(function(a) {
        return!!a.parent
      }).length;
      this.Wa = !this.bb;
      !this.eb && !this.bb && (gls2.aa.ta(this, "kanade"), this.eb = k)
    })
  }});
  gls2.aa.Xf = gls2.aa.Xf();
  gls2.aa.Lc = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "rery");
    a.on("enterframe", function() {
      this.position.y > this.ba.da.y ? gls2.aa.$d(this) : gls2.aa.Uk(this)
    })
  }});
  gls2.aa.Mb = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "fary")
  }});
  gls2.aa.Mc = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "sory")
  }});
  gls2.aa.$f = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "lary")
  }});
  gls2.aa.tg = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "shiry")
  }});
  gls2.aa.Ic = tm.createClass({superClass:gls2.aa, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.aa.prototype.setup.call(this, a);
    gls2.aa.ta(a, "dodory")
  }})
})();
(function() {
  var c = gls2.ea, a = gls2.aa;
  gls2.Eh = {"heri1-left":[{hard:c.Ba, soft:a.Kc, x:48, y:-100}, {hard:c.Ba, soft:a.ub, x:96, y:-100}, {hard:c.Ba, soft:a.Kc, x:144, y:-100}, {hard:c.Ba, soft:a.ub, x:192, y:-100}, {hard:c.Ba, soft:a.Kc, x:240, y:-100}], "heri1-center":[{hard:c.Ba, soft:a.Kc, x:144, y:-100}, {hard:c.Ba, soft:a.ub, x:192, y:-100}, {hard:c.Ba, soft:a.Kc, x:240, y:-100}, {hard:c.Ba, soft:a.ub, x:288, y:-100}, {hard:c.Ba, soft:a.Kc, x:336, y:-100}], "heri1-right":[{hard:c.Ba, soft:a.Kc, x:240, y:-100}, {hard:c.Ba, soft:a.ub, 
  x:288, y:-100}, {hard:c.Ba, soft:a.Kc, x:336, y:-100}, {hard:c.Ba, soft:a.ub, x:384, y:-100}, {hard:c.Ba, soft:a.Kc, x:432, y:-100}], "heri1-left2":[{hard:c.Ba, soft:a.ub, x:48, y:-100}, {hard:c.Ba, soft:a.Ld, x:96, y:-100}, {hard:c.Ba, soft:a.ub, x:144, y:-100}, {hard:c.Ba, soft:a.Ld, x:192, y:-100}, {hard:c.Ba, soft:a.ub, x:240, y:-100}], "heri1-center2":[{hard:c.Ba, soft:a.ub, x:144, y:-100}, {hard:c.Ba, soft:a.Ld, x:192, y:-100}, {hard:c.Ba, soft:a.ub, x:240, y:-100}, {hard:c.Ba, soft:a.Ld, 
  x:288, y:-100}, {hard:c.Ba, soft:a.ub, x:336, y:-100}], "heri1-right2":[{hard:c.Ba, soft:a.ub, x:240, y:-100}, {hard:c.Ba, soft:a.Ld, x:288, y:-100}, {hard:c.Ba, soft:a.ub, x:336, y:-100}, {hard:c.Ba, soft:a.Ld, x:384, y:-100}, {hard:c.Ba, soft:a.ub, x:432, y:-100}], "heri2-left":[{hard:c.ia, soft:a.vb, x:48, y:-100}, {hard:c.ia, soft:a.vb, x:96, y:-100}, {hard:c.ia, soft:a.vb, x:144, y:-100}, {hard:c.ia, soft:a.vb, x:192, y:-100}, {hard:c.ia, soft:a.vb, x:240, y:-100}], "heri2-center":[{hard:c.ia, 
  soft:a.vb, x:144, y:-100}, {hard:c.ia, soft:a.vb, x:192, y:-100}, {hard:c.ia, soft:a.vb, x:240, y:-100}, {hard:c.ia, soft:a.vb, x:288, y:-100}, {hard:c.ia, soft:a.vb, x:336, y:-100}], "heri2-right":[{hard:c.ia, soft:a.vb, x:240, y:-100}, {hard:c.ia, soft:a.vb, x:288, y:-100}, {hard:c.ia, soft:a.vb, x:336, y:-100}, {hard:c.ia, soft:a.vb, x:384, y:-100}, {hard:c.ia, soft:a.vb, x:432, y:-100}], "heri2-5-left":[{hard:c.ia, soft:a.Ga(0), x:48, y:-100}, {hard:c.ia, soft:a.Ga(100), x:96, y:-100}, {hard:c.ia, 
  soft:a.Ga(200), x:144, y:-100}, {hard:c.ia, soft:a.Ga(300), x:192, y:-100}, {hard:c.ia, soft:a.Ga(400), x:240, y:-100}, {hard:c.ia, soft:a.Ga(500), x:48, y:-100}, {hard:c.ia, soft:a.Ga(600), x:96, y:-100}, {hard:c.ia, soft:a.Ga(700), x:144, y:-100}, {hard:c.ia, soft:a.Ga(800), x:192, y:-100}, {hard:c.ia, soft:a.Ga(900), x:240, y:-100}], "heri2-5-center":[{hard:c.ia, soft:a.Ga(0), x:144, y:-100}, {hard:c.ia, soft:a.Ga(100), x:192, y:-100}, {hard:c.ia, soft:a.Ga(200), x:240, y:-100}, {hard:c.ia, 
  soft:a.Ga(300), x:288, y:-100}, {hard:c.ia, soft:a.Ga(400), x:336, y:-100}, {hard:c.ia, soft:a.Ga(500), x:144, y:-100}, {hard:c.ia, soft:a.Ga(600), x:192, y:-100}, {hard:c.ia, soft:a.Ga(700), x:240, y:-100}, {hard:c.ia, soft:a.Ga(800), x:288, y:-100}, {hard:c.ia, soft:a.Ga(900), x:336, y:-100}], "heri2-5-right":[{hard:c.ia, soft:a.Ga(0), x:240, y:-100}, {hard:c.ia, soft:a.Ga(100), x:288, y:-100}, {hard:c.ia, soft:a.Ga(200), x:336, y:-100}, {hard:c.ia, soft:a.Ga(300), x:384, y:-100}, {hard:c.ia, 
  soft:a.Ga(400), x:432, y:-100}, {hard:c.ia, soft:a.Ga(500), x:240, y:-100}, {hard:c.ia, soft:a.Ga(600), x:288, y:-100}, {hard:c.ia, soft:a.Ga(700), x:336, y:-100}, {hard:c.ia, soft:a.Ga(800), x:384, y:-100}, {hard:c.ia, soft:a.Ga(900), x:432, y:-100}], "heri1-4-left":[{hard:c.ia, soft:a.tb, x:48, y:-100}, {hard:c.ia, soft:a.tb, x:96, y:-100}, {hard:c.ia, soft:a.tb, x:144, y:-100}, {hard:c.ia, soft:a.tb, x:192, y:-100}, {hard:c.ia, soft:a.tb, x:240, y:-100}], "heri1-4-center":[{hard:c.ia, soft:a.tb, 
  x:144, y:-100}, {hard:c.ia, soft:a.tb, x:192, y:-100}, {hard:c.ia, soft:a.tb, x:240, y:-100}, {hard:c.ia, soft:a.tb, x:288, y:-100}, {hard:c.ia, soft:a.tb, x:336, y:-100}], "heri1-4-right":[{hard:c.ia, soft:a.tb, x:240, y:-100}, {hard:c.ia, soft:a.tb, x:288, y:-100}, {hard:c.ia, soft:a.tb, x:336, y:-100}, {hard:c.ia, soft:a.tb, x:384, y:-100}, {hard:c.ia, soft:a.tb, x:432, y:-100}], "heri1-4-left2":[{hard:c.ia, soft:a.Jc, x:48, y:-100}, {hard:c.ia, soft:a.Kd, x:96, y:-100}, {hard:c.ia, soft:a.Jc, 
  x:144, y:-100}, {hard:c.ia, soft:a.Kd, x:192, y:-100}, {hard:c.ia, soft:a.Jc, x:240, y:-100}], "heri1-4-center2":[{hard:c.ia, soft:a.Jc, x:144, y:-100}, {hard:c.ia, soft:a.Kd, x:192, y:-100}, {hard:c.ia, soft:a.Jc, x:240, y:-100}, {hard:c.ia, soft:a.Kd, x:288, y:-100}, {hard:c.ia, soft:a.Jc, x:336, y:-100}], "heri1-4-right2":[{hard:c.ia, soft:a.Jc, x:240, y:-100}, {hard:c.ia, soft:a.Kd, x:288, y:-100}, {hard:c.ia, soft:a.Jc, x:336, y:-100}, {hard:c.ia, soft:a.Kd, x:384, y:-100}, {hard:c.ia, soft:a.Jc, 
  x:432, y:-100}], "tankRD-left":[{hard:c.la, soft:a.uc, x:78, y:-50}, {hard:c.la, soft:a.uc, x:28, y:-100}, {hard:c.la, soft:a.uc, x:-22, y:-150}, {hard:c.la, soft:a.uc, x:-72, y:-200}, {hard:c.la, soft:a.uc, x:-122, y:-250}], "tankRD-center":[{hard:c.la, soft:a.uc, x:222, y:-50}, {hard:c.la, soft:a.uc, x:172, y:-100}, {hard:c.la, soft:a.uc, x:122, y:-150}, {hard:c.la, soft:a.uc, x:72, y:-200}, {hard:c.la, soft:a.uc, x:22, y:-250}], "tankL-top":[{hard:c.la, soft:a.je, x:550, y:64}, {hard:c.la, soft:a.je, 
  x:620, y:64}, {hard:c.la, soft:a.je, x:690, y:64}, {hard:c.la, soft:a.je, x:760, y:64}, {hard:c.la, soft:a.je, x:830, y:64}], "tank5-left":[{hard:c.la, soft:a.va, x:48, y:-70}, {hard:c.la, soft:a.va, x:48, y:-140}, {hard:c.la, soft:a.va, x:48, y:-210}, {hard:c.la, soft:a.va, x:48, y:-280}, {hard:c.la, soft:a.va, x:48, y:-350}], "tank5-center":[{hard:c.la, soft:a.va, x:240, y:-70}, {hard:c.la, soft:a.va, x:240, y:-140}, {hard:c.la, soft:a.va, x:240, y:-210}, {hard:c.la, soft:a.va, x:240, y:-280}, 
  {hard:c.la, soft:a.va, x:240, y:-350}], "tank15-top":[{hard:c.la, soft:a.va, x:48, y:-70}, {hard:c.la, soft:a.va, x:48, y:-140}, {hard:c.la, soft:a.va, x:48, y:-210}, {hard:c.la, soft:a.va, x:48, y:-280}, {hard:c.la, soft:a.va, x:48, y:-350}, {hard:c.la, soft:a.va, x:240, y:-70}, {hard:c.la, soft:a.va, x:240, y:-140}, {hard:c.la, soft:a.va, x:240, y:-210}, {hard:c.la, soft:a.va, x:240, y:-280}, {hard:c.la, soft:a.va, x:240, y:-350}, {hard:c.la, soft:a.va, x:432, y:-70}, {hard:c.la, soft:a.va, x:432, 
  y:-140}, {hard:c.la, soft:a.va, x:432, y:-210}, {hard:c.la, soft:a.va, x:432, y:-280}, {hard:c.la, soft:a.va, x:432, y:-350}], "tank25-top":[{hard:c.la, soft:a.va, x:48, y:-70}, {hard:c.la, soft:a.va, x:48, y:-140}, {hard:c.la, soft:a.va, x:48, y:-210}, {hard:c.la, soft:a.va, x:48, y:-280}, {hard:c.la, soft:a.va, x:48, y:-350}, {hard:c.la, soft:a.va, x:240, y:-70}, {hard:c.la, soft:a.va, x:240, y:-140}, {hard:c.la, soft:a.va, x:240, y:-210}, {hard:c.la, soft:a.va, x:240, y:-280}, {hard:c.la, soft:a.va, 
  x:240, y:-350}, {hard:c.la, soft:a.va, x:432, y:-70}, {hard:c.la, soft:a.va, x:432, y:-140}, {hard:c.la, soft:a.va, x:432, y:-210}, {hard:c.la, soft:a.va, x:432, y:-280}, {hard:c.la, soft:a.va, x:432, y:-350}, {hard:c.la, soft:a.vc, x:144, y:710}, {hard:c.la, soft:a.vc, x:144, y:780}, {hard:c.la, soft:a.vc, x:144, y:850}, {hard:c.la, soft:a.vc, x:144, y:920}, {hard:c.la, soft:a.vc, x:144, y:990}, {hard:c.la, soft:a.vc, x:336, y:710}, {hard:c.la, soft:a.vc, x:336, y:780}, {hard:c.la, soft:a.vc, 
  x:336, y:850}, {hard:c.la, soft:a.vc, x:336, y:920}, {hard:c.la, soft:a.vc, x:336, y:990}], "bukky-4-r":[{hard:c.Re, soft:a.Ch, x:480, y:-50}], "bukky-4-l":[{hard:c.Re, soft:a.Ch, x:0, y:-50}], "bukky-5-r":[{hard:c.Re, soft:a.Dh, x:480, y:-50}], "bukky-5-l":[{hard:c.Re, soft:a.Dh, x:0, y:-50}], "cannon-0":[{hard:c.Ra, soft:a.Tb, x:48, y:-100}], "cannon-1":[{hard:c.Ra, soft:a.Tb, x:96, y:-100}], "cannon-2":[{hard:c.Ra, soft:a.Tb, x:144, y:-100}], "cannon-3":[{hard:c.Ra, soft:a.Tb, x:192, y:-100}], 
  "cannon-4":[{hard:c.Ra, soft:a.Tb, x:240, y:-100}], "cannon-5":[{hard:c.Ra, soft:a.Tb, x:288, y:-100}], "cannon-6":[{hard:c.Ra, soft:a.Tb, x:336, y:-100}], "cannon-7":[{hard:c.Ra, soft:a.Tb, x:384, y:-100}], "cannon-8":[{hard:c.Ra, soft:a.Tb, x:432, y:-100}], "cannon-R0":[{hard:c.Ra, soft:a.Tb, x:550, y:128}], "cannon-R1":[{hard:c.Ra, soft:a.Tb, x:550, y:192}], "cannon-R2":[{hard:c.Ra, soft:a.Tb, x:550, y:256}], "yayoi-0":[{hard:c.Ra, soft:a.Ub, x:48, y:-100}], "yayoi-1":[{hard:c.Ra, soft:a.Ub, 
  x:96, y:-100}], "yayoi-2":[{hard:c.Ra, soft:a.Ub, x:144, y:-100}], "yayoi-3":[{hard:c.Ra, soft:a.Ub, x:192, y:-100}], "yayoi-4":[{hard:c.Ra, soft:a.Ub, x:240, y:-100}], "yayoi-5":[{hard:c.Ra, soft:a.Ub, x:288, y:-100}], "yayoi-6":[{hard:c.Ra, soft:a.Ub, x:336, y:-100}], "yayoi-7":[{hard:c.Ra, soft:a.Ub, x:384, y:-100}], "yayoi-8":[{hard:c.Ra, soft:a.Ub, x:432, y:-100}], "yayoi-R0":[{hard:c.Ra, soft:a.Ub, x:550, y:128}], "yayoi-R1":[{hard:c.Ra, soft:a.Ub, x:550, y:192}], "yayoi-R2":[{hard:c.Ra, 
  soft:a.Ub, x:550, y:256}], "tsubomi-0":[{hard:c.Ze, soft:a.Te, x:96, y:-100}], "tsubomi-1":[{hard:c.Ze, soft:a.Te, x:240, y:-100}], "tsubomi-2":[{hard:c.Ze, soft:a.Te, x:384, y:-100}], "tsubomi-R0":[{hard:c.Ze, soft:a.Te, x:580, y:128}], "itsuki-0":[{hard:c.Wf, soft:a.Rf, x:96, y:-100}], "itsuki-1":[{hard:c.Wf, soft:a.Rf, x:240, y:-100}], "itsuki-2":[{hard:c.Wf, soft:a.Rf, x:384, y:-100}], "makoto-0":[{hard:c.qc, soft:a.rc, x:48, y:-100}], "makoto-1":[{hard:c.qc, soft:a.rc, x:96, y:-100}], "makoto-2":[{hard:c.qc, 
  soft:a.rc, x:144, y:-100}], "makoto-3":[{hard:c.qc, soft:a.rc, x:192, y:-100}], "makoto-4":[{hard:c.qc, soft:a.rc, x:240, y:-100}], "makoto-5":[{hard:c.qc, soft:a.rc, x:288, y:-100}], "makoto-6":[{hard:c.qc, soft:a.rc, x:336, y:-100}], "makoto-7":[{hard:c.qc, soft:a.rc, x:384, y:-100}], "makoto-8":[{hard:c.qc, soft:a.rc, x:432, y:-100}], "makoto-R0":[{hard:c.qc, soft:a.rc, x:580, y:128}], "karen-3-2":[{hard:c.Qf, soft:a.Pf, x:96, y:-100}], "karen-3-5":[{hard:c.Qf, soft:a.Pf, x:240, y:-100}], "karen-3-8":[{hard:c.Qf, 
  soft:a.Pf, x:384, y:-100}], "fighter-m-0":[{hard:c.Wc, soft:a.nd, x:96, y:-192}], "fighter-m-1":[{hard:c.Wc, soft:a.nd, x:144, y:-192}], "fighter-m-2":[{hard:c.Wc, soft:a.nd, x:192, y:-192}], "fighter-m-3":[{hard:c.Wc, soft:a.nd, x:240, y:-192}], "fighter-m-4":[{hard:c.Wc, soft:a.nd, x:288, y:-192}], "fighter-m-5":[{hard:c.Wc, soft:a.nd, x:336, y:-192}], "fighter-m-6":[{hard:c.Wc, soft:a.nd, x:384, y:-192}], "fighter-m4-0":[{hard:c.Wc, soft:a.rj, x:96, y:-192}], "tsukikage-r":[{hard:c.Vb, soft:a.pd(700), 
  x:624, y:256}, {hard:c.Vb, soft:a.pd(600), x:720, y:256}, {hard:c.Vb, soft:a.pd(500), x:576, y:320}, {hard:c.Vb, soft:a.pd(400), x:672, y:320}, {hard:c.Vb, soft:a.pd(300), x:768, y:320}, {hard:c.Vb, soft:a.pd(200), x:624, y:384}, {hard:c.Vb, soft:a.pd(100), x:720, y:384}], "tsukikage-l":[{hard:c.Vb, soft:a.ke(700), x:-144, y:384}, {hard:c.Vb, soft:a.ke(600), x:-240, y:384}, {hard:c.Vb, soft:a.ke(500), x:-96, y:320}, {hard:c.Vb, soft:a.ke(400), x:-192, y:320}, {hard:c.Vb, soft:a.ke(200), x:-144, 
  y:256}], "urara5-0":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.fb, soft:a.fb(0, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-1":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.fb, soft:a.fb(0, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "urara5-2":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.fb, soft:a.fb(1, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-3":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.fb, soft:a.fb(1, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-4":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.fb, soft:a.fb(2, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-5":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.fb, soft:a.fb(2, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-6":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.fb, soft:a.fb(3, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-7":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.fb, soft:a.fb(3, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "milk5-0":[{hard:c.sc, soft:a.tc(2E3), x:384, y:-256}, {hard:c.sc, soft:a.tc(1500), x:312, y:-224}, {hard:c.sc, soft:a.tc(1E3), x:240, y:-192}, {hard:c.sc, soft:a.tc(500), x:168, y:-160}, {hard:c.sc, soft:a.tc(0), x:96, y:-128}], "milk5-1":[{hard:c.sc, soft:a.tc(2E3), x:96, y:-256}, {hard:c.sc, soft:a.tc(1500), x:168, y:-224}, {hard:c.sc, soft:a.tc(1E3), x:240, y:-192}, {hard:c.sc, soft:a.tc(500), x:312, y:-160}, {hard:c.sc, soft:a.tc(0), x:384, y:-128}], "ako5-0":[{hard:c.rb, soft:a.sb(240, 
  128, 96, 256), x:240, y:-192}, {hard:c.rb, soft:a.sb(384, 256, 240, 128), x:384, y:-192}, {hard:c.rb, soft:a.sb(360, 512, 384, 256), x:360, y:-192}, {hard:c.rb, soft:a.sb(120, 512, 360, 512), x:120, y:-192}, {hard:c.rb, soft:a.sb(96, 256, 120, 512), x:96, y:-192}], "ako5-1":[{hard:c.rb, soft:a.sb(240, 128, 384, 256), x:240, y:-192}, {hard:c.rb, soft:a.sb(384, 256, 360, 512), x:384, y:-192}, {hard:c.rb, soft:a.sb(360, 512, 120, 512), x:360, y:-192}, {hard:c.rb, soft:a.sb(120, 512, 96, 256), x:120, 
  y:-192}, {hard:c.rb, soft:a.sb(96, 256, 240, 128), x:96, y:-192}], "ako5-2":[{hard:c.rb, soft:a.sb(240, 128, 120, 512), x:240, y:-192}, {hard:c.rb, soft:a.sb(384, 256, 96, 256), x:384, y:-192}, {hard:c.rb, soft:a.sb(360, 512, 240, 128), x:360, y:-192}, {hard:c.rb, soft:a.sb(120, 512, 384, 256), x:120, y:-192}, {hard:c.rb, soft:a.sb(96, 256, 360, 512), x:96, y:-192}], "komachi-0":[{hard:c.Wb, soft:a.Ih, x:144, y:-192}], "komachi-1":[{hard:c.Wb, soft:a.Ih, x:336, y:-192}], "komachi2-0":[{hard:c.Wb, 
  soft:a.Jh, x:144, y:-192}], "komachi2-1":[{hard:c.Wb, soft:a.Jh, x:336, y:-192}], "komachi3-0":[{hard:c.Wb, soft:a.Kh, x:144, y:-192}], "komachi3-1":[{hard:c.Wb, soft:a.Kh, x:336, y:-192}], "komachi4-0":[{hard:c.Wb, soft:a.Zf, x:144, y:-192}], "komachi4-1":[{hard:c.Wb, soft:a.Zf, x:336, y:-192}], "komachi4-2":[{hard:c.Wb, soft:a.Zf, x:240, y:-192}], "komachi5-0":[{hard:c.Wb, soft:a.Yf, x:144, y:-192}], "komachi5-1":[{hard:c.Wb, soft:a.Yf, x:336, y:-192}], "komachi5-2":[{hard:c.Wb, soft:a.Yf, x:240, 
  y:-192}], "nozomi4-0":[{hard:c.Nd, soft:a.mg, x:144, y:-192}], "nozomi4-1":[{hard:c.Nd, soft:a.mg, x:240, y:-192}], "nozomi4-2":[{hard:c.Nd, soft:a.mg, x:336, y:-192}], "nozomi5-0":[{hard:c.Nd, soft:a.ng, x:144, y:-256}], "nozomi5-1":[{hard:c.Nd, soft:a.ng, x:240, y:-128}], "nozomi5-2":[{hard:c.Nd, soft:a.ng, x:336, y:-256}], "mktn5-0":[{hard:c.he, soft:a.he(0.6), x:624, y:128}], "mktn5-1":[{hard:c.he, soft:a.he(0.4), x:-144, y:64}], "akane-center":[{hard:c.Va, soft:a.Va, x:168, y:256}, {hard:c.Va, 
  soft:a.Va, x:192, y:128}, {hard:c.Va, soft:a.Va, x:288, y:128}, {hard:c.Va, soft:a.Va, x:312, y:256}], "akane-right":[{hard:c.Va, soft:a.Va, x:384, y:64}, {hard:c.Va, soft:a.Va, x:336, y:160}, {hard:c.Va, soft:a.Va, x:384, y:256}], "akane-left":[{hard:c.Va, soft:a.Va, x:96, y:64}, {hard:c.Va, soft:a.Va, x:144, y:160}, {hard:c.Va, soft:a.Va, x:96, y:256}], "nao1-left":[{hard:c.qa, soft:a.xb, x:48, y:-100}, {hard:c.qa, soft:a.xb, x:96, y:-100}, {hard:c.qa, soft:a.xb, x:144, y:-100}, {hard:c.qa, soft:a.xb, 
  x:192, y:-100}, {hard:c.qa, soft:a.xb, x:240, y:-100}], "nao1-right":[{hard:c.qa, soft:a.xb, x:240, y:-100}, {hard:c.qa, soft:a.xb, x:288, y:-100}, {hard:c.qa, soft:a.xb, x:336, y:-100}, {hard:c.qa, soft:a.xb, x:384, y:-100}, {hard:c.qa, soft:a.xb, x:432, y:-100}], "nao1-center":[{hard:c.qa, soft:a.xb, x:144, y:-100}, {hard:c.qa, soft:a.xb, x:192, y:-100}, {hard:c.qa, soft:a.xb, x:240, y:-100}, {hard:c.qa, soft:a.xb, x:288, y:-100}, {hard:c.qa, soft:a.xb, x:336, y:-100}], "nao2-left":[{hard:c.qa, 
  soft:a.yb, x:48, y:-100}, {hard:c.qa, soft:a.yb, x:96, y:-100}, {hard:c.qa, soft:a.yb, x:144, y:-100}, {hard:c.qa, soft:a.yb, x:192, y:-100}, {hard:c.qa, soft:a.yb, x:240, y:-100}], "nao2-right":[{hard:c.qa, soft:a.yb, x:240, y:-100}, {hard:c.qa, soft:a.yb, x:288, y:-100}, {hard:c.qa, soft:a.yb, x:336, y:-100}, {hard:c.qa, soft:a.yb, x:384, y:-100}, {hard:c.qa, soft:a.yb, x:432, y:-100}], "nao2-center":[{hard:c.qa, soft:a.yb, x:144, y:-100}, {hard:c.qa, soft:a.yb, x:192, y:-100}, {hard:c.qa, soft:a.yb, 
  x:240, y:-100}, {hard:c.qa, soft:a.yb, x:288, y:-100}, {hard:c.qa, soft:a.yb, x:336, y:-100}], "nao3-left":[{hard:c.qa, soft:a.zb, x:48, y:-100}, {hard:c.qa, soft:a.zb, x:96, y:-100}, {hard:c.qa, soft:a.zb, x:144, y:-100}, {hard:c.qa, soft:a.zb, x:192, y:-100}, {hard:c.qa, soft:a.zb, x:240, y:-100}], "nao3-right":[{hard:c.qa, soft:a.zb, x:240, y:-100}, {hard:c.qa, soft:a.zb, x:288, y:-100}, {hard:c.qa, soft:a.zb, x:336, y:-100}, {hard:c.qa, soft:a.zb, x:384, y:-100}, {hard:c.qa, soft:a.zb, x:432, 
  y:-100}], "nao3-center":[{hard:c.qa, soft:a.zb, x:144, y:-100}, {hard:c.qa, soft:a.zb, x:192, y:-100}, {hard:c.qa, soft:a.zb, x:240, y:-100}, {hard:c.qa, soft:a.zb, x:288, y:-100}, {hard:c.qa, soft:a.zb, x:336, y:-100}], "reika1-left":[{hard:c.Bb, soft:a.dc, x:-48, y:-64}, {hard:c.Bb, soft:a.dc, x:-72, y:-128}, {hard:c.Bb, soft:a.dc, x:-96, y:-64}, {hard:c.Bb, soft:a.dc, x:-120, y:-128}, {hard:c.Bb, soft:a.dc, x:-144, y:-64}, {hard:c.Bb, soft:a.dc, x:-168, y:-128}], "reika1-right":[{hard:c.Bb, 
  soft:a.dc, x:528, y:-64}, {hard:c.Bb, soft:a.dc, x:552, y:-128}, {hard:c.Bb, soft:a.dc, x:576, y:-64}, {hard:c.Bb, soft:a.dc, x:600, y:-128}, {hard:c.Bb, soft:a.dc, x:624, y:-64}, {hard:c.Bb, soft:a.dc, x:648, y:-128}], "madoka-0":[{hard:c.Oc, soft:a.Oc, x:144, y:-128}], "madoka-1":[{hard:c.Oc, soft:a.Oc, x:336, y:-128}], "madoka-2":[{hard:c.Oc, soft:a.Oc, x:240, y:-128}], "miyuki-1":[{hard:c.Bd, soft:a.Bd, x:-128, y:140}], "miyuki-2":[{hard:c.Bd, soft:a.Bd, x:608, y:60}], alice:[{hard:c.Nf, soft:a.Nf, 
  x:240, y:-64}], erika:[{hard:c.ge, soft:a.ge, x:240, y:-100}], yukishiro:[{hard:c.Uf, soft:a.Uf, x:240, y:-100}], misumi:[{hard:c.ig, soft:[a.sj, a.jg, a.kg], x:240, y:-100, boss:k}], mai:[{hard:c.eg, soft:a.eg, x:780, y:128}], hyuga:[{hard:c.tj, soft:[a.pg, a.qg, a.rg], x:240, y:-100, boss:k}], higashi:[{hard:c.sg, soft:a.sg, x:780, y:128}], momozono:[{hard:c.pj, soft:[a.ag, a.cg, a.dg], x:240, y:-100, boss:k}], rikka:[{hard:c.og, soft:a.og, x:240, y:-100}], mana:[{hard:c.qj, soft:[a.fg, a.gg, 
  a.hg], x:240, y:-100, boss:k}], kanade:[{hard:c.oj, soft:a.Xf, x:432, y:-448}]}
})();
(function() {
  function c(a, c, d, f) {
    return b.action([f(a), b.repeat(d + "-1", [f(b.speed(c, "sequence"))])])
  }
  function a(a, c, d, f, h, j, m) {
    return b.action([b.fire(b.direction(c, "absolute"), f, h || z, j, m), b.repeat(a + "-1", [b.fire(b.direction("((" + d + ")-(" + c + "))/(" + a + "-1)", "sequence"), f, h || z, j, m)])])
  }
  function f(a, b, c, f, h) {
    return function(j) {
      return d(a, b, c, j, f, h, i, i)
    }
  }
  function d(a, c, d, f, h, j, m, n) {
    return b.action([b.fire(b.direction(c), f, h || z, j, m, n), b.repeat(a + "+($ex*2)-1", [b.fire(b.direction("((" + d + ")-(" + c + "))/(" + a + "+($ex*2)-1)", "sequence"), f, h || z, j, m, n)])])
  }
  function j(a) {
    return b.fire(b.direction(0), a || p, D)
  }
  function m(a) {
    return b.fire(b.direction(0), a || p, z)
  }
  function r(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function B(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function q(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function n(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function H(a) {
    return b.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function h(a) {
    return b.wait(a + "*(1-$rank)*$hyperOff")
  }
  function L(a) {
    return b.Ha(a, {frame:3, Fe:k})
  }
  function M(a) {
    return b.Ha(a, {frame:2, Fe:k})
  }
  function N(a) {
    return b.Ha(a, {frame:6, jc:k})
  }
  function T(a) {
    return b.Ha(a, {frame:7, jc:k})
  }
  function v(a) {
    return b.Ha(a, {visible:t})
  }
  function E(a) {
    return b.Ha(a, {frame:4, jc:k})
  }
  function I(a) {
    return b.Ha(a, {frame:3})
  }
  function z(a) {
    return b.Ha(a, {frame:1})
  }
  function u(a) {
    return b.Ha(a, {frame:2})
  }
  function D(a) {
    return b.Ha(a, {frame:0})
  }
  function F(a) {
    return b.Ha(a, {frame:3, jc:k})
  }
  function w(a) {
    return b.Ha(a, {frame:1, jc:k})
  }
  function C(a) {
    return b.Ha(a, {frame:2, jc:k})
  }
  function A(a) {
    return b.Ha(a, {frame:0, jc:k})
  }
  gls2.fa = {};
  var b = J.Ia;
  gls2.fa["basic0-0"] = new J.ha({top:b.action([m])});
  gls2.fa["basic0-1"] = new J.ha({top:b.action([c(q, -0.01, 8, f(3, -15, 15))])});
  gls2.fa["basic1-0"] = new J.ha({top:b.action([b.repeat(999, [h(40), m(p)])])});
  gls2.fa["basic1-1"] = new J.ha({top:b.action([b.repeat(999, [h(20), m(p)])])});
  gls2.fa["basic1-2"] = new J.ha({top:b.action([h("10+$rand*100"), d(3, -20, 20, p)])});
  gls2.fa["basic1-3"] = new J.ha({top:b.action([b.repeat(999, [h("20+$rand*80"), d(3, -20, 20, p)])])});
  gls2.fa["basic2-0"] = new J.ha({top:b.action([b.repeat(999, [h(50), m(p)])])});
  gls2.fa["basic3-0"] = new J.ha({top:b.action([b.wait(20), b.repeat(999, [h(100), c(p, 0.1, 3, j)])])});
  gls2.fa["basic3-1"] = new J.ha({top:b.action([b.wait(20), b.repeat(999, [h(40), c(p, 0.1, 3, j)])])});
  gls2.fa["bukky-4-0"] = new J.ha({top0:b.action([h(30), b.repeat(999, [b.fire(b.direction(-40), p, C), b.repeat(3, [b.fire(b.direction(20, "sequence"), p, C), b.fire(b.direction(20, "sequence"), p, C), b.fire(b.direction(20, "sequence"), p, C), b.fire(b.direction(20, "sequence"), p, C), b.fire(b.direction(-80, "sequence"), p, C), h(5)]), h(70)])]), top1:b.action([h(20), b.fire(b.direction(180, "absolute"), n, w), b.repeat(999, [b.fire(b.direction(15, "sequence"), n, w), b.fire(b.direction(15, "sequence"), 
  n, w), b.fire(b.direction(15, "sequence"), n, w), b.fire(b.direction(15, "sequence"), n, w), b.fire(b.direction(15, "sequence"), n, w), b.fire(b.direction(15, "sequence"), n, w), b.fire(b.direction(15, "sequence"), n, w), b.fire(b.direction(15, "sequence"), n, w), b.fire(b.direction(15, "sequence"), n, w), b.fire(b.direction(-90, "sequence"), n, w), h(5)])])});
  gls2.fa["bukky-5-0"] = new J.ha({top0:b.action([h(30), b.repeat(999, [b.fire(b.direction(-40), p, C), b.repeat(3, [b.fire(b.direction(10, "sequence"), p, C), b.fire(b.direction(10, "sequence"), p, C), b.fire(b.direction(10, "sequence"), p, C), b.fire(b.direction(10, "sequence"), p, C), b.fire(b.direction(10, "sequence"), p, C), b.fire(b.direction(10, "sequence"), p, C), b.fire(b.direction(10, "sequence"), p, C), b.fire(b.direction(10, "sequence"), p, C), b.fire(b.direction(-80, "sequence"), p, 
  C), h(5)]), h(70)])]), top1:b.action([h(20), b.fire(b.direction(180, "absolute"), n, w), b.repeat(999, [b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), 
  b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(7.5, "sequence"), n, w), b.fire(b.direction(-90, "sequence"), n, w), h(5)])])});
  gls2.fa["cannon2-0"] = new J.ha({top0:b.action([b.repeat(999, [h(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", n), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", n), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", n), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", n), h(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", p), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", p), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", p), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", p)])]), top1:b.action([b.repeat(999, [b.fire(b.direction("  0+$loop.index*10", "absolute"), s, E), b.fire(b.direction(" 90+$loop.index*10", "absolute"), s, E), b.fire(b.direction("180+$loop.index*10", "absolute"), s, E), b.fire(b.direction("270+$loop.index*10", "absolute"), s, E), b.fire(b.direction("  0-$loop.index*10", "absolute"), s, E), b.fire(b.direction(" 90-$loop.index*10", "absolute"), s, E), b.fire(b.direction("180-$loop.index*10", 
  "absolute"), s, E), b.fire(b.direction("270-$loop.index*10", "absolute"), s, E), h(10)])]), top2:b.action([b.repeat(999, [h(43), d(30, 0, 348, p, D)])])});
  gls2.fa["cannon2-3"] = new J.ha({top0:b.action([b.repeat(999, [b.ua("d", "$loop.index*-6"), b.repeat(9, [b.fire(b.direction(36, "sequence"), b.speed(1), v(b.ma("ivs0", "$d")))]), h(10), b.fire(b.direction(39, "sequence"), b.speed(1), v(b.ma("ivs0", "$d")))])]), top1:b.action([b.repeat(999, [b.ua("d", "($loop.index)*+12"), b.repeat(12, [b.fire(b.direction(360 / 13, "sequence"), b.speed(1), v(b.ma("ivs1", "$d")))]), h(10), b.fire(b.direction(360 / 13 - 4, "sequence"), b.speed(1), v(b.ma("ivs1", "$d")))])]), 
  ivs0:b.action([b.wait(5), b.fire(b.direction("$1", "relative"), n, D), b.Ma()]), ivs1:b.action([b.wait(10), b.fire(b.direction("$1-5", "relative"), n, T), b.fire(b.direction("$1+5", "relative"), n, N), b.Ma()])});
  gls2.fa["cannon3-0"] = new J.ha({top0:b.action([b.repeat(999, [h(80), c(n, 0.01, 5, f(5, -30, 30, D, b.offsetX(-60))), c(n, 0.01, 5, f(5, -30, 30, D)), c(n, 0.01, 5, f(5, -30, 30, D, b.offsetX(60)))])])});
  gls2.fa["cannon4-0"] = new J.ha({top0:b.action([h(20), b.repeat(999, [b.fire(n, C), b.repeat(8, [h(10), b.ua("way", "$loop.count+1"), b.fire(b.direction("-12/2 - 12*($way-2)", "sequence"), n, C), b.repeat("$way-1", [b.fire(b.direction(12, "sequence"), n, C)])]), h(120)])])});
  gls2.fa["cannon5-0"] = new J.ha({top0:b.action([b.repeat(999, [b.fire(b.direction(-60), r, v(b.ma("b"))), b.repeat(11, [h(5), b.fire(b.direction(10, "sequence"), r, v(b.ma("b")))]), h(60)])]), b:b.action([b.wait(5), b.kf(b.speed(0), 0), c(n, 0.1, 5, function(a) {
    return b.fire(b.direction(0, "relative"), a, z)
  }), b.Ma])});
  gls2.fa["yuri-4"] = new J.ha({top:b.action([h(60), b.repeat(7, [a(7, 120, 240, s, D), h(8)])])});
  gls2.fa["kurokawa-1"] = new J.ha({top0:b.action([b.repeat(999, [c(p, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, b.offsetX(-45), b.na(k))
  }), c(p, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, b.offsetX(45), b.na(k))
  }), h(90)])]), top1:b.action([b.repeat(999, [b.fire(b.direction(0), p, F, b.offsetX(-45), b.na(k)), h(45), b.fire(b.direction(0), p, F, b.offsetX(45), b.na(k)), h(45)])])});
  gls2.fa["milk-5"] = new J.ha({top0:b.action([b.repeat(999, [d(5, -90, 90, p, I, b.offsetX(-45)), b.wait(27), d(5, -90, 90, p, I, b.offsetX(45)), h(120)])]), top1:b.action([b.repeat(999, [h(30), d(6, -90, 90, q, C, b.offsetX(-45)), b.wait(21), d(6, -90, 90, q, C, b.offsetX(45)), h(90)])]), top2:b.action([b.repeat(999, [h(55), d(13, -90, 90, s, E, b.offsetX(-45)), b.wait(20), d(13, -90, 90, s, E, b.offsetX(45)), h(21)])])});
  gls2.fa["ako-5"] = new J.ha({top:b.action([b.repeat(8, [d(3, -20, 20, q, z), h(2)])])});
  gls2.fa["kurokawa-4"] = new J.ha({top0:b.action([b.repeat(999, [c(p, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, b.offsetX(-45), b.na(k))
  }), c(p, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, b.offsetX(45), b.na(k))
  }), h(90)])]), top1:b.action([b.repeat(999, [b.fire(b.direction(0), p, F, b.offsetX(-45), b.na(k)), h(45), b.fire(b.direction(0), p, F, b.offsetX(45), b.na(k)), h(45)])])});
  gls2.fa["komachi-1"] = new J.ha({top0:b.action([b.repeat(20, [b.fire(b.direction(210, "absolute"), s(1), z, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(-40)), b.repeat(57, [h(8), b.fire(b.direction(-720 / 57, "sequence"), s(1), z, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(-40))])])]), top1:b.action([b.repeat(20, 
  [b.fire(b.direction(-210, "absolute"), s(1), z, b.offsetX(40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(40)), b.repeat(57, [h(8), b.fire(b.direction(720 / 57, "sequence"), s(1), z, b.offsetX(40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(40))])])]), top2:b.action([b.repeat(70, [b.fire(b.direction(0), p(0), A, b.offsetX(-110), b.na(k)), b.repeat(6, 
  [b.wait(1), b.fire(b.direction(0, "sequence"), p(0), A, b.offsetX(-110), b.na(k))]), h(10), b.fire(b.direction(0), p(0), A, b.offsetX(110), b.na(k)), b.repeat(6, [b.wait(1), b.fire(b.direction(0, "sequence"), p(0), A, b.offsetX(110), b.na(k))]), h(10)])])});
  gls2.fa["komachi-2"] = new J.ha({top0:b.action([b.repeat(999, [c(p, -0.01, 4, function(a) {
    return b.action([d(4, -45, 45, a, u, b.offsetX(-45), b.na(k)), h(4)])
  }), c(p, -0.01, 4, function(a) {
    return b.action([h(4), d(4, -45, 45, a, u, b.offsetX(45), b.na(k))])
  }), h(90)])]), top1:b.action([b.repeat(999, [h(45), c(n, 0.01, 22, function(a) {
    return b.action([b.repeat("1 + $rand*6", [b.fire(b.direction("-5+$rand*10"), a, w)]), h(1)])
  }), h(180)])])});
  gls2.fa["komachi-3"] = new J.ha({top0:b.action([b.repeat(999, [c(p, -0.01, 4, function(a) {
    return b.action([d(8, -60, 60, a, u, b.offsetX(-45), b.na(k)), h(4)])
  }), c(p, -0.01, 4, function(a) {
    return b.action([h(4), d(8, -60, 60, a, u, b.offsetX(45), b.na(k))])
  }), h(90)])]), top1:b.action([b.repeat(999, [h(45), c(n, 0.01, 22, function(a) {
    return b.action([b.repeat("1 + $rand*6", [b.fire(b.direction("-5+$rand*10"), a, w)]), h(1)])
  }), h(180)])])});
  gls2.fa["komachi-4"] = new J.ha({top0:b.action([b.repeat(999, [b.repeat(4, [b.fire(b.direction("220+-1+$rand*2", "absolute"), p, I, b.offsetX(-45)), b.fire(b.direction("180+-1+$rand*2", "absolute"), p, I, b.offsetX(-45)), b.fire(b.direction("180+-1+$rand*2", "absolute"), p, I, b.offsetX(45)), b.fire(b.direction("140+-1+$rand*2", "absolute"), p, I, b.offsetX(45)), h(4)]), h(60)])]), top1:b.action([b.repeat(70, [b.fire(b.direction(0), p(5), A, b.offsetX(-110), b.na(k)), b.repeat(12, [b.wait(1), b.fire(b.direction(0, 
  "sequence"), p(5), A, b.offsetX(-110), b.na(k))]), h(30), b.fire(b.direction(0), p(5), A, b.offsetX(110), b.na(k)), b.repeat(12, [b.wait(1), b.fire(b.direction(0, "sequence"), p(5), A, b.offsetX(110), b.na(k))]), h(30)])])});
  gls2.fa["komachi-5"] = new J.ha({top0:b.action([b.repeat(999, [b.fire(b.direction(210, "absolute"), s(1), z, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(-40)), b.repeat(60, [h(4), b.fire(b.direction(-6, "sequence"), s(1), z, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(-40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(-40))])])]), top1:b.action([b.repeat(999, [b.fire(b.direction(-210, 
  "absolute"), s(1), z, b.offsetX(40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(40)), b.repeat(60, [h(4), b.fire(b.direction(6, "sequence"), s(1), z, b.offsetX(40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(40)), b.fire(b.direction(120, "sequence"), s(1), z, b.offsetX(40))])])]), top2:b.action([b.repeat(999, [b.fire(b.direction(-10), q(0), A, b.offsetX(-110), b.na(k)), b.fire(b.direction(10, "sequence"), 
  q(0), A, b.offsetX(-110), b.na(k)), b.fire(b.direction(10, "sequence"), q(0), A, b.offsetX(-110), b.na(k)), b.repeat(30, [b.wait(1), b.fire(b.direction(-20, "sequence"), q(0), A, b.offsetX(-110), b.na(k)), b.fire(b.direction(10, "sequence"), q(0), A, b.offsetX(-110), b.na(k)), b.fire(b.direction(10, "sequence"), q(0), A, b.offsetX(-110), b.na(k))]), h(5), b.fire(b.direction(-10), q(0), A, b.offsetX(110), b.na(k)), b.fire(b.direction(10, "sequence"), q(0), A, b.offsetX(110), b.na(k)), b.fire(b.direction(10, 
  "sequence"), q(0), A, b.offsetX(110), b.na(k)), b.repeat(30, [b.wait(1), b.fire(b.direction(-20, "sequence"), q(0), A, b.offsetX(110), b.na(k)), b.fire(b.direction(10, "sequence"), q(0), A, b.offsetX(110), b.na(k)), b.fire(b.direction(10, "sequence"), q(0), A, b.offsetX(110), b.na(k))]), h(5)])])});
  gls2.fa["nozomi-4"] = new J.ha({top0:b.action([b.wait(60), b.repeat(999, [b.repeat(12, [b.ua("c", "2+$loop.index"), d("$c", "-4-($c-2)*4", "4+($c-2)*4", H("(560-$c*40)*0.03"), F, b.offsetY(-50))]), h(150)])]), top1:b.action([b.wait(20), b.repeat(999, [b.fire(b.direction(40), v(b.ma("noop"))), c(p, 0.03, 16, function(a) {
    return b.action([b.fire(b.direction(-5, "sequence"), a, D, b.offsetX(-50)), b.wait(3)])
  }), h(90), b.fire(b.direction(-40), v(b.ma("noop"))), c(p, 0.03, 16, function(a) {
    return b.action([b.fire(b.direction(5, "sequence"), a, D, b.offsetX(50)), b.wait(3)])
  }), h(90)])]), noop:b.action([b.wait(1), b.Ma])});
  gls2.fa["nozomi-5"] = new J.ha({top0:b.action([b.wait(60), b.repeat(999, [b.repeat(6, [b.ua("c", "2+$loop.index"), d("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", H("(560-$c*40)*0.02"), F, b.offsetY(-50)), d("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", H("(560-$c*40)*0.02"), F, b.offsetY(-50)), d("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", H("(560-$c*40)*0.02"), F, b.offsetY(-50)), d("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", H("(560-$c*40)*0.02"), F, b.offsetY(-50))]), h(150), b.repeat(6, [b.ua("c", "2+$loop.index"), 
  d("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", H("(560-$c*40)*0.02"), C, b.offsetY(-50)), d("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", H("(560-$c*40)*0.02"), C, b.offsetY(-50)), d("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", H("(560-$c*40)*0.02"), C, b.offsetY(-50)), d("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", H("(560-$c*40)*0.02"), C, b.offsetY(-50)), d("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", H("(560-$c*40)*0.02"), C, b.offsetY(-50))]), h(150)])]), top1:b.action([b.wait(20), b.repeat(999, [b.fire(b.direction(5), 
  v(b.ma("noop"))), c(p, 0.06, 15, function(a) {
    return b.action([b.fire(b.direction(-1, "sequence"), a, D, b.offsetX(-50)), h(3)])
  }), b.fire(b.direction(-5), v(b.ma("noop"))), c(p, 0.06, 15, function(a) {
    return b.action([b.fire(b.direction(1, "sequence"), a, D, b.offsetX(50)), h(3)])
  })])]), noop:b.action([b.wait(1), b.Ma])});
  gls2.fa["mktn-5"] = new J.ha({top0:b.action([b.repeat(999, [b.fire(b.direction(0), s, v(b.ma("noop"))), b.repeat(20, [b.fire(b.direction(0.5, "sequence"), b.speed(0.08, "sequence"), u), b.repeat(12, [b.fire(b.direction(30, "sequence"), b.speed(0, "sequence"), u)]), h(6)]), b.fire(b.direction(0), s, v(b.ma("noop"))), b.repeat(20, [b.fire(b.direction(-0.5, "sequence"), b.speed(0.08, "sequence"), u), b.repeat(12, [b.fire(b.direction(30, "sequence"), b.speed(0, "sequence"), u)]), h(6)]), h(60)])]), 
  top1:b.action([b.repeat(999, [b.fire(b.direction(0, "absolute"), p, v(b.ma("noop"))), b.repeat(5, [b.fire(b.direction(-10, "sequence"), b.speed(0.05, "sequence"), E), b.repeat(12, [b.fire(b.direction(30, "sequence"), b.speed(0, "sequence"), E)]), h(5)]), b.fire(b.direction(0, "absolute"), p, v(b.ma("noop"))), b.repeat(5, [b.fire(b.direction(10, "sequence"), b.speed(0.05, "sequence"), E), b.repeat(12, [b.fire(b.direction(30, "sequence"), b.speed(0, "sequence"), E)]), h(5)]), h(40)])]), top2:b.action([b.repeat(999, 
  [b.ua("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"), d(5, -30, 30, p(7), M, b.offsetX("$gun"), b.offsetY(20)), b.ua("gun", "[-40, -120, 0, 120, 80, 40, -80][$loop.index%7]"), d(5, -30, 30, p(7), M, b.offsetX("$gun"), b.offsetY(20)), h(21)])]), noop:b.action([b.wait(1), b.Ma])});
  gls2.fa.akane = new J.ha({top:b.action([b.wait("40"), b.repeat(999, [b.repeat(5, [h(60), d(1, 1, 1, s, u, b.offsetX(-16), b.offsetY(6), b.na(k)), d(1, 1, 1, s, u, b.offsetX(16), b.offsetY(6), b.na(k))]), h(120)])])});
  gls2.fa["nao-1"] = new J.ha({top:b.action([b.repeat(999, [h(30), b.fire(b.direction(0), q, F)])])});
  gls2.fa["nao-2"] = new J.ha({top:b.action([b.repeat(999, [h(30), d(2, -5, 5, q, F, b.offsetX(0), b.offsetY(0), b.na(k))])])});
  gls2.fa["nao-3"] = new J.ha({top:b.action([b.repeat(999, [h(30), d(2, -1, 1, q, F, b.offsetX(0), b.offsetY(0), b.na(k))])])});
  gls2.fa.reika = new J.ha({top:b.action([b.repeat(999, [h(60), b.fire(b.direction(0), p, C)])])});
  gls2.fa.aguri = new J.ha({top0:b.action([b.repeat(999, [b.repeat(3, [c(p, 0.001, 4, function(a) {
    return b.action([d(3, -30, 30, a, C, b.offsetX(-32), b.offsetY(-20)), d(2, -30, 30, a, C, b.offsetX(-120), b.offsetY(10)), d(2, -30, 30, a, C, b.offsetX(-80), b.offsetY(12)), d(3, -30, 30, a, C, b.offsetX(32), b.offsetY(-20)), d(2, -30, 30, a, C, b.offsetX(120), b.offsetY(10)), d(2, -30, 30, a, C, b.offsetX(80), b.offsetY(12)), b.wait(1)])
  }), h(10)]), h(120)])]), top1:b.action([b.repeat(999, [b.repeat(3, [d(3, -15, 15, q, w, b.offsetX(0), b.offsetY(0)), d(3, -15, 15, q, w, b.offsetX(0), b.offsetY(30)), d(3, -15, 15, q, w, b.offsetX(-10), b.offsetY(-10)), d(3, -15, 15, q, w, b.offsetX(-20), b.offsetY(0)), d(3, -15, 15, q, w, b.offsetX(-20), b.offsetY(10)), d(3, -15, 15, q, w, b.offsetX(-10), b.offsetY(20)), d(3, -15, 15, q, w, b.offsetX(10), b.offsetY(-10)), d(3, -15, 15, q, w, b.offsetX(20), b.offsetY(0)), d(3, -15, 15, q, w, b.offsetX(20), 
  b.offsetY(10)), d(3, -15, 15, q, w, b.offsetX(10), b.offsetY(20)), h(40)]), h(180)])])});
  gls2.fa.miyuki = new J.ha({top:b.action([b.wait("40"), b.repeat(999, [h(30), d(3, -45, 45, s, u, b.offsetX(-64), b.offsetY(16), b.na(k)), d(3, -45, 45, s, u, b.offsetX(0), b.offsetY(16), b.na(k)), d(3, -45, 45, s, u, b.offsetX(16), b.offsetY(16), b.na(k)), d(3, -45, 45, s, u, b.offsetX(32), b.offsetY(16), b.na(k)), c(s, 0.001, 5, function(a) {
    return b.action([d(3, "-45", "+45", a, C, b.offsetX(0), b.offsetY(0))])
  })])])});
  gls2.fa.alice = new J.ha({top0:b.action([b.repeat(999, [b.repeat(5, [a(10, 0, 180, s, C), a(10, 0, -180, s, C), h(30), a(5, 0, 180, s, F), a(5, 0, -180, s, F), h(30)]), h(30)])]), top1:b.action([b.fire(b.direction(0), s, D, b.offsetX(0), b.na(k)), b.repeat(999, [b.fire(b.direction(10, "sequence"), s, N, b.offsetX(0), b.na(k)), h(10)])]), top2:b.action([b.fire(b.direction(90), s, A, b.offsetX(0), b.na(k)), b.repeat(999, [b.fire(b.direction(10, "sequence"), s, N, b.offsetX(0), b.na(k)), h(10)])]), 
  top3:b.action([b.fire(b.direction(180), s, A, b.offsetX(0), b.na(k)), b.repeat(999, [b.fire(b.direction(10, "sequence"), s, N, b.offsetX(0), b.na(k)), h(10)])]), top4:b.action([b.fire(b.direction(-90), s, A, b.offsetX(0), b.na(k)), b.repeat(999, [b.fire(b.direction(10, "sequence"), s, N, b.offsetX(0), b.na(k)), h(10)])])});
  gls2.fa["aliceLeaf-1"] = new J.ha({top0:b.action([b.repeat(999, [b.repeat(1, [d(1, -10, 10, q, w, b.offsetX(0), b.offsetY(0)), d(1, -10, 10, q, A, b.offsetX(10), b.offsetY(-10)), d(1, -10, 10, q, A, b.offsetX(10), b.offsetY(-20)), d(1, -10, 10, q, A, b.offsetX(20), b.offsetY(-10)), d(1, -10, 10, q, A, b.offsetX(10), b.offsetY(10)), d(1, -10, 10, q, A, b.offsetX(10), b.offsetY(20)), d(1, -10, 10, q, A, b.offsetX(20), b.offsetY(10)), d(1, -10, 10, q, A, b.offsetX(-10), b.offsetY(-10)), d(1, -10, 
  10, q, A, b.offsetX(-10), b.offsetY(-20)), d(1, -10, 10, q, A, b.offsetX(-20), b.offsetY(-10)), d(1, -10, 10, q, A, b.offsetX(-10), b.offsetY(10)), d(1, -10, 10, q, A, b.offsetX(-10), b.offsetY(20)), d(1, -10, 10, q, A, b.offsetX(-20), b.offsetY(10)), h(20)]), h(60)])])});
  gls2.fa["aliceLeaf-2"] = new J.ha({top0:b.action([b.wait(30), b.repeat(999, [b.repeat(1, [d(1, -10, 10, q, A, b.offsetX(0), b.offsetY(0)), d(1, -10, 10, q, w, b.offsetX(10), b.offsetY(-10)), d(1, -10, 10, q, w, b.offsetX(10), b.offsetY(-20)), d(1, -10, 10, q, w, b.offsetX(20), b.offsetY(-10)), d(1, -10, 10, q, w, b.offsetX(10), b.offsetY(10)), d(1, -10, 10, q, w, b.offsetX(10), b.offsetY(20)), d(1, -10, 10, q, w, b.offsetX(20), b.offsetY(10)), d(1, -10, 10, q, w, b.offsetX(-10), b.offsetY(-10)), 
  d(1, -10, 10, q, w, b.offsetX(-10), b.offsetY(-20)), d(1, -10, 10, q, w, b.offsetX(-20), b.offsetY(-10)), d(1, -10, 10, q, w, b.offsetX(-10), b.offsetY(10)), d(1, -10, 10, q, w, b.offsetX(-10), b.offsetY(20)), d(1, -10, 10, q, w, b.offsetX(-20), b.offsetY(10)), h(20)]), h(60)])])});
  gls2.fa["honoka-1"] = new J.ha({top0:b.action([b.wait(60), b.repeat(10, [d(4, -40, 40, n, E, b.offsetX(0), b.offsetY(30)), h(30), d(5, -40, 40, s, E, b.offsetX(0), b.offsetY(30)), h(30)])]), top1:b.action([b.wait(60), b.repeat(5, [d(2, -2, 2, n(0.6), z), d(3, -3, 3, n(1), z), d(4, -4, 4, n(1.4), z), d(5, -5, 5, n(1.8), z), h(110)])]), top2:b.action([b.repeat(20, [a(12, -10, -170, s, A, b.offsetX(-110), b.offsetY(-70)), h(30)])]), top3:b.action([b.repeat(20, [a(12, 10, 170, s, A, b.offsetX(110), 
  b.offsetY(-70)), h(30)])])});
  gls2.fa["nagisa-1-1"] = new J.ha({top0:b.action([h(90), b.repeat(3, [b.ua("way", "5 + $loop.index*6"), c(p, 0.01, "3 + $loop.index*2", function(a) {
    return b.action([d("$way", -110, 110, a, z, b.offsetX(-190), b.offsetY(-20)), d("$way", -110, 110, a, z, b.offsetX(190), b.offsetY(-20)), b.wait(10)])
  }), h(60)]), h(60)])});
  gls2.fa["nagisa-1-2"] = new J.ha({top0:b.action([b.repeat(12, [d(15, -90, 90, s, z), h(40)])]), top1:b.action([b.repeat(3, [b.repeat(3, [d(5, -65, -55, n, A, b.offsetX(-190), b.offsetY(-20)), d(5, -35, -25, n, A, b.offsetX(-190), b.offsetY(-20)), d(5, -5, 5, n, A, b.offsetX(-190), b.offsetY(-20)), d(5, 25, 35, n, A, b.offsetX(-190), b.offsetY(-20)), d(5, 55, 65, n, A, b.offsetX(-190), b.offsetY(-20)), b.wait(2)]), h(60), b.repeat(3, [d(5, -65, -55, n, A, b.offsetX(190), b.offsetY(-20)), d(5, -35, 
  -25, n, A, b.offsetX(190), b.offsetY(-20)), d(5, -5, 5, n, A, b.offsetX(190), b.offsetY(-20)), d(5, 25, 35, n, A, b.offsetX(190), b.offsetY(-20)), d(5, 55, 65, n, A, b.offsetX(190), b.offsetY(-20)), b.wait(2)]), h(60)])])});
  gls2.fa["nagisa-1-3"] = new J.ha({top0:b.action([h(60), b.repeat(3, [b.fire(b.direction(-60), n, u, b.offsetX(-190), b.offsetY(-20)), b.repeat(20, [h(15), b.fire(b.direction(6, "sequence"), n, u, b.offsetX(-190), b.offsetY(-20))])])]), top1:b.action([h(80), b.repeat(3, [b.fire(b.direction(60), n, u, b.offsetX(190), b.offsetY(-20)), b.repeat(20, [h(15), b.fire(b.direction(-6, "sequence"), n, u, b.offsetX(190), b.offsetY(-20))])])]), top2:b.action([b.repeat(6, [b.repeat(3, [d(5, -60, -40, n, E, b.offsetX(-190), 
  b.offsetY(-20)), d(5, -20, -10, n, E, b.offsetX(-190), b.offsetY(-20)), d(5, 10, 20, n, E, b.offsetX(-190), b.offsetY(-20)), d(5, 40, 60, n, E, b.offsetX(-190), b.offsetY(-20)), b.wait(4)]), h(60), b.repeat(3, [d(5, -60, -40, n, E, b.offsetX(190), b.offsetY(-20)), d(5, -20, -10, n, E, b.offsetX(190), b.offsetY(-20)), d(5, 10, 20, n, E, b.offsetX(190), b.offsetY(-20)), d(5, 40, 60, n, E, b.offsetX(190), b.offsetY(-20)), b.wait(4)]), h(60)])])});
  gls2.fa["nagisa-2-1"] = new J.ha({top0:b.action([h(120), b.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", s, D, b.offsetX(-190), b.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", s, D, b.offsetX(190), b.offsetY(-20)), h(10)])]), top1:b.action([h(120), b.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", n, F), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", n, F), h(12)])])});
  gls2.fa["nagisa-2-2"] = new J.ha({top0:b.action([h(120), b.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", p, F), h(12)])]), top1:b.action([h(120), b.repeat(6, [a(9, 150, 130, s(0.8), z), a(9, 172, 188, s(0.8), z), a(9, 210, 230, s(0.8), z), h(30), a(9, 170, 150, s(0.8), z), a(9, 190, 210, s(0.8), z), h(30)])])});
  gls2.fa["nagisa-2-3"] = new J.ha({top:b.action([h(120), b.repeat(12, [a(23, 0, 360, s, E, b.offsetX(-190), b.offsetY(-20)), a(23, 0, 360, s, E), a(23, 0, 360, s, E, b.offsetX(190), b.offsetY(-20)), h(30)])])});
  gls2.fa["nagisa-3-1"] = new J.ha({top0:b.action([h(50), b.repeat(999, [c(p, 0.001, 5, function(a) {
    return b.action([d(41, "-180", "+180", a, C, b.offsetX(-190), b.offsetY(-20)), d(41, "-180", "+180", a, C, b.offsetX(190), b.offsetY(-20))])
  }), h(50)])]), top1:b.action([b.repeat(999, [d(2, -2, 0, q, z), h(10), d(2, 0, 2, q, z), h(150)])])});
  gls2.fa["mai-1"] = new J.ha({top0:b.action([h(50), b.repeat(50, [b.ua("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), n, D), b.Ma]))), b.ua("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), n, D), b.Ma]))), h(8)])]), top1:b.action([h(50), b.repeat(12, [a(5, -50, 50, r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), n, 
  F), b.Ma]))), a(5, -230, -130, r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), n, F), b.Ma]))), h(16), a(6, -50, 50, r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), n, F), b.Ma]))), a(6, -230, -130, r, v(b.action([b.wait(8), b.fire(b.direction(0, "relative"), n, F), b.Ma]))), h(16)])])});
  gls2.fa["mai-2"] = new J.ha({top:b.action([h(50), b.repeat(15, [b.fire(b.direction(-10), C(b.ma("fireChild", "$loop.index*10"))), h(8)])]), fireChild:b.action([h("40+$1"), c(n, 0.1, 5, function(a) {
    return b.fire(b.direction(-90, "absolute"), a, u)
  }), b.Ma])});
  gls2.fa["saki-1-1"] = new J.ha({top:b.action([h(100), b.repeat(3, [b.ma("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:b.action([b.ua("way", "$1"), b.repeat("10", [d("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", p, D), d("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", p, D), h(12)]), b.repeat("$2", [d(9, -20, 20, q, I)])])});
  gls2.fa["saki-1-2"] = new J.ha({top:b.action([h(100), b.repeat(5, [b.ua("way", "5+$loop.index*2"), b.repeat(6, [b.ua("s", "$loop.index*0.6"), b.action(function() {
    for(var a = [], c = 0;5 > c;c++) {
      a.push(d("$way", -30, 30, p("$s"), F, b.offsetX(-120 + 60 * c)))
    }
    return a
  }())]), h(90)])])});
  gls2.fa["saki-1-3"] = new J.ha({top:b.action([b.ua("dir", "$rand < 0.5 ? -1 : 1"), b.repeat(24, [b.fire(b.direction("120*$dir + $loop.index*10*-$dir"), b.speed(2), F(b.ma("seed"))), h(8)]), h(60)]), seed:b.action([b.wait(10), b.kf(b.speed(0), 50), b.wait(90), d(13, 0, 360 - 360 / 13, n, I), b.Ma])});
  gls2.fa["saki-2-1"] = new J.ha({top0:b.action([h(100), b.repeat(4, [d(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", n, D, b.offsetX(-40)), d(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", n, D, b.offsetX(40)), h(60), d(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", n, D, b.offsetX(-40)), d(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", n, D, b.offsetX(40)), h(60)])]), top1:b.action([h(100), b.repeat(4, [b.repeat(7, [b.ua("o", "$loop.index*20 - 60"), b.fire(b.direction("$o"), 
  B, I), b.repeat(4, [b.ua("w", "$loop.count"), d("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", B("$w*-1.0"), I)])]), h(120)])])});
  gls2.fa["saki-2-2"] = new J.ha({top:b.action([h(60), b.ua("dir", "$rand < 0.5 ? -1 : 1"), b.repeat(12, [b.fire(b.direction("120*$dir + $loop.index*10*-$dir"), b.speed(2), C(b.ma("seed"))), h(8), b.fire(b.direction("120*-$dir + $loop.index*10*$dir"), b.speed(2), C(b.ma("seed"))), h(8)]), h(60)]), seed:b.action([b.wait(10), b.kf(b.speed(0), "10 + $rand*15"), b.wait(65), c(p, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(-48), a, u)])
  }), c(p, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(-36), a, u)])
  }), c(p, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(-24), a, u)])
  }), c(p, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(-12), a, u)])
  }), c(p, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(0), a, u)])
  }), c(p, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(12), a, u)])
  }), c(p, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(24), a, u)])
  }), c(p, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(36), a, u)])
  }), c(p, 0.14, 6, function(a) {
    return b.action([b.fire(b.direction(48), a, u)])
  }), h(2), b.Ma])});
  gls2.fa["saki-2-3"] = new J.ha({top:b.action([h(60), b.ua("dir", "$rand < 0.5 ? -1 : 1"), b.repeat(24, [b.fire(b.direction("120*$dir + $loop.index*10*-$dir"), b.speed(2), F(b.ma("seed"))), h(8), b.fire(b.direction("120*-$dir + $loop.index*10*$dir"), b.speed(2), F(b.ma("seed"))), h(8)]), h(60)]), seed:b.action([b.wait(10), b.kf(b.speed(0), "10 + $rand*20"), b.wait(65), c(p, 0.18, 7, function(a) {
    return b.action([b.fire(b.direction(180, "absolute"), a, I)])
  }), h(2), b.Ma])});
  gls2.fa["saki-3-1"] = new J.ha({top:b.action([b.fire(b.direction(180, "absolute"), H, C(b.ma("seed"))), h(60), b.fire(b.direction(180, "absolute"), H, C(b.ma("seed")), b.offsetX(-80)), b.fire(b.direction(180, "absolute"), H, C(b.ma("seed")), b.offsetX(80)), h(60)]), seed:b.action([b.fire(b.direction(0, "absolute"), p, n, D), b.repeat(999, [b.fire(b.direction(90, "sequence"), n, D), b.fire(b.direction(90, "sequence"), n, D), b.fire(b.direction(90, "sequence"), n, D), h(10), b.fire(b.direction(100, 
  "sequence"), n, D)])])});
  gls2.fa["saki-3-2"] = new J.ha({top:b.action([b.fire(b.direction(180, "absolute"), H, F(b.ma("seed"))), h(60), b.fire(b.direction(180, "absolute"), H, F(b.ma("seed")), b.offsetX(-80)), b.fire(b.direction(180, "absolute"), H, F(b.ma("seed")), b.offsetX(80)), h(60)]), seed:b.action([b.fire(b.direction(0, "absolute"), p, n, z), b.repeat(999, [b.fire(b.direction(90, "sequence"), n, z), b.fire(b.direction(90, "sequence"), n, z), b.fire(b.direction(90, "sequence"), n, z), h(10), b.fire(b.direction(80, 
  "sequence"), n, z)])])});
  gls2.fa["rikka-1"] = new J.ha({top:b.action([b.repeat(5, [b.ua("s", "$loop.index*1.5"), h(30), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, p("$s"), b.offsetX(-90), b.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, p("$s"), b.offsetX(90), b.offsetY(-20)), h(3), d(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, p("$s"), b.offsetX(-90), b.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, p("$s"), b.offsetX(-90), b.offsetY(-20)), d(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, p("$s"), b.offsetX(90), b.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, p("$s"), b.offsetX(90), b.offsetY(-20)), h(3), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, p("$s"), b.offsetX(-90), b.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, p("$s"), b.offsetX(90), b.offsetY(-20))])])});
  gls2.fa["rikka-2"] = new J.ha({top0:b.action([b.repeat(10, [b.fire(C(b.ma("snow")), b.offsetX(-90), b.offsetY(-20)), b.fire(C(b.ma("snow")), b.offsetX(90), b.offsetY(-20)), h(8)]), h(10)]), top1:b.action([b.repeat(35, [b.ua("d", "$loop.index*-(20+$ex*10)"), b.ua("s", "($loop.index+1)*0.2"), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed(1), v(b.ma("ivs", "$d", "$s")))]), h(5), b.fire(b.direction("360/6 + (30+$ex*10)", "sequence"), b.speed(1), v(b.ma("ivs", "$d", "$s")))]), b.repeat(35, 
  [b.ua("d", "$loop.index*+(20+$ex*10)"), b.ua("s", "($loop.index+1)*0.2"), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed(1), v(b.ma("ivs", "$d", "$s")))]), h(5), b.fire(b.direction("360/6 - (30+$ex*10)", "sequence"), b.speed(1), v(b.ma("ivs", "$d", "$s")))])]), snow:b.action([b.repeat("3+$ex*3", [b.ua("s", "$loop.index+1"), b.fire(b.direction(0, "absolute"), b.speed("$s"), v(b.ma("snowArm"))), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed("$s"), v(b.ma("snowArm")))])]), b.Ma]), 
  snowArm:b.action([b.wait(2), b.fire(b.direction(0), q, A), b.Ma]), ivs:b.action([b.wait(10), b.fire(b.direction("$1-1", "relative"), p("$2"), M), b.fire(b.direction("$1+1", "relative"), p("$2"), M), b.Ma()])});
  gls2.fa["rikka-3"] = new J.ha({top0:b.action([h(40), b.fire(b.direction(-10), v(b.ma("dummy")), b.offsetX(-90), b.offsetY(-20)), b.repeat(12, [b.fire(b.direction(10, "sequence"), H("$loop.index*0.5"), u, b.offsetX(-90), b.offsetY(-20)), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed(0, "sequence"), u, b.offsetX(-90), b.offsetY(-20))]), h(5)]), h(40)]), top1:b.action([h(40), b.fire(b.direction(-10), v(b.ma("dummy")), b.offsetX(90), b.offsetY(-20)), b.repeat(12, [b.fire(b.direction(10, 
  "sequence"), H("$loop.index*0.5"), u, b.offsetX(90), b.offsetY(-20)), b.repeat(5, [b.fire(b.direction(60, "sequence"), b.speed(0, "sequence"), u, b.offsetX(90), b.offsetY(-20))]), h(5)]), h(40)]), dummy:b.action([b.wait(1), b.Ma])});
  gls2.fa["mana-1-1"] = new J.ha({top0:b.action([b.ma("winder", -1)]), top1:b.action([b.ma("winder", 1)]), winder:b.action([b.wait(60), b.repeat(8, [b.fire(b.direction("(-190+$loop.index*30)*$1"), p, L, b.offsetX("-145*$1"), b.offsetY(-5))]), b.repeat(50, [h(20), b.ua("a", "$loop.index*3"), b.repeat(8, [b.fire(b.direction("(-190+$a+$loop.index*30)*$1"), p, L, b.offsetX("-145*$1"), b.offsetY(-5))])])]), top2:b.action([b.wait(60), h(300), b.repeat(7, [b.ua("s", "$loop.index"), b.repeat(5, [b.ua("ss", 
  "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, q("$ss"), I, b.offsetX(-30), b.offsetY(-30))]), h(5), b.repeat(5, [b.ua("ss", "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, q("$ss"), I, b.offsetX(30), b.offsetY(-30))]), h(20), b.repeat(5, [b.ua("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, B("$ss"), u, b.offsetX(30), b.offsetY(-30))]), h(5), b.repeat(5, [b.ua("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, B("$ss"), u, b.offsetX(-30), b.offsetY(-30))]), h(80)])])});
  gls2.fa["mana-1-2"] = new J.ha({top:b.action([b.repeat(5, [b.ua("i", "$loop.index"), b.ua("j", "1/($i+1) * 4"), b.ua("k", "6+$i*3"), c(p("$k"), 0.02, "4+$loop.index*3", function(a) {
    return b.action([b.fire(b.direction("(12-$i)*(-3*$j)"), a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-2*$j)"), a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-1*$j)"), a, I, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*( 0*$j)"), a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+1*$j)"), a, I, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+2*$j)"), a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+3*$j)"), 
    a, u, b.offsetX(-145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-3*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-2*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(-1*$j)"), a, I, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*( 0*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+1*$j)"), a, I, b.offsetX(145), b.offsetY(-50)), b.fire(b.direction("(12-$i)*(+2*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), 
    b.fire(b.direction("(12-$i)*(+3*$j)"), a, u, b.offsetX(145), b.offsetY(-50)), h(5)])
  }), h(30)])])});
  gls2.fa["mana-1-3"] = new J.ha({top0:b.action([h(20), b.ma("fire", -145)]), top1:b.action([h(40), b.ma("fire", 145)]), top2:b.action([b.repeat(8, [h(30), b.ua("d", "-3*($rand*2-1)"), b.ua("s", "$loop.index*2"), b.fire(b.direction("$d"), v(b.ma("dmy"))), b.fire(b.direction(0, "sequence"), B("$s"), L), b.repeat(5, [b.wait(5), b.ua("way", "$loop.index+2"), b.fire(b.direction("-$way*0.8*0.5", "sequence"), B("$s"), L), b.repeat("$way", [b.fire(b.direction(0.8, "sequence"), B("$s"), L)]), b.fire(b.direction("-$way*0.8*0.5", 
  "sequence"), v(b.ma("dmy")))])])]), fire:b.action([b.repeat(8, [d(72, -177.5, 177.5, n, u, b.offsetX("$1"), b.offsetY(-50)), h(50)])]), dmy:b.action([b.wait(1), b.Ma()])});
  gls2.fa["mana-2-1"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-2-2"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-2-3"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-3-1"] = gls2.fa["mana-1-1"];
  gls2.fa["mana-3-2"] = gls2.fa["mana-1-1"];
  gls2.fa.kanade = new J.ha({top0:b.action([b.repeat(999, [b.repeat(16, [b.fire(b.direction(360 / 17, "sequence"), b.speed(2), v(b.ma("ivs0", -110)), b.offsetY(-350))]), h(20), b.fire(b.direction(360 / 17 - 3, "sequence"), b.speed(2), v(b.ma("ivs0", -110)), b.offsetY(-350))])]), top1:b.action([b.repeat(999, [b.repeat(16, [b.fire(b.direction(360 / 17, "sequence"), b.speed(2), v(b.ma("ivs0", 110)), b.offsetY(-350))]), h(20), b.fire(b.direction(360 / 17 + 6, "sequence"), b.speed(2), v(b.ma("ivs0", 110)), 
  b.offsetY(-350))])]), ivs0:b.action([b.wait(5), b.fire(b.direction("$1", "relative"), s, T), b.Ma()]), top2:b.action([b.repeat(999, [d(5, -12, 12, s, u, b.offsetY(-350)), d(5, 78, 102, s, u, b.offsetY(-350)), d(5, 168, 192, s, u, b.offsetY(-350)), d(5, 258, 282, s, u, b.offsetY(-350)), h(57)])]), top3:b.action([b.repeat(999, [d(3, -3, 3, p, L, b.offsetY(-350)), h(91)])])});
  gls2.fa.rery = new J.ha({top:b.action([h("$rand*120"), b.repeat(999, [h(180), b.repeat(10, [b.fire(b.direction(-90), b.speed(2), v(b.ma("fire", 90, "$loop.index"))), b.fire(b.direction(90), b.speed(2), v(b.ma("fire", -90, "$loop.index")))])])]), fire:b.action([b.wait(3), b.fire(b.direction("$1", "relative"), q("$2*0.25"), I), b.Ma()])});
  gls2.fa.fary = new J.ha({top:b.action([h("$rand*120"), b.repeat(999, [h(120), b.repeat(3, [d(3, -30, 30, p, z), h(15)])])])});
  gls2.fa.sory = new J.ha({top:b.action([b.ua("d", "$rand<0.5 ? -5 : 5"), b.ua("s", "1+$rand*0.5"), b.repeat(999, [b.fire(b.direction("360/8+$d*$s", "sequence"), b.speed(2), v(b.ma("fire"))), b.repeat(3, [b.fire(b.direction(90, "sequence"), b.speed(2), v(b.ma("fire")))]), h(60)])]), fire:b.action([b.wait(2), b.fire(b.direction(0, "relative"), s, E), b.Ma()])});
  gls2.fa.lary = new J.ha({top0:b.action([b.fire(b.direction(0, "absolute"), b.speed(1), v(b.ma("fire"))), b.repeat(999, [h(10), b.fire(b.direction(98, "sequence"), b.speed(1), v(b.ma("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.ma("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.ma("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.ma("fire")))])]), top1:b.action([b.fire(b.direction(47, "absolute"), b.speed(1), v(b.ma("fire"))), b.repeat(999, [h(10), b.fire(b.direction(76, 
  "sequence"), b.speed(1), v(b.ma("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.ma("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.ma("fire"))), b.fire(b.direction(90, "sequence"), b.speed(1), v(b.ma("fire")))])]), fire:b.action([b.wait(5), b.fire(b.direction(-1, "relative"), n, M), b.fire(b.direction(1, "relative"), n, M), b.Ma()])});
  gls2.fa.shiry = new J.ha({top0:b.action([b.repeat(999, [b.ua("d", "$loop.index*-6"), b.repeat(23, [b.fire(b.direction(15, "sequence"), b.speed(1), v(b.ma("ivs0", "$d")))]), h(30), b.fire(b.direction(16, "sequence"), b.speed(1), v(b.ma("ivs0", "$d")))])]), ivs0:b.action([b.wait(5), b.fire(b.direction("$1", "relative"), n, F), b.Ma()])});
  gls2.fa.dodory = new J.ha({top:b.action([h("$rand*40"), b.repeat(999, [h(30), c(q, -0.1, 3, function(a) {
    return b.action([b.fire(a, D)])
  })])])});
  gls2.fa["setsuna-1"] = new J.ha({top0:b.action([b.wait(60), b.repeat(5, [d(5, -2, 2, n(1.8), D, b.offsetX(0), b.offsetX(0)), d(4, -3, 3, n(1.4), D, b.offsetX(0), b.offsetX(0)), d(3, -4, 4, n(1), D, b.offsetX(0), b.offsetX(0)), d(2, -5, 5, n(0.6), D, b.offsetX(0), b.offsetX(0)), h(110)])]), top1:b.action([b.wait(60), b.repeat(10, [d(4, -40, 40, n, F, b.offsetX(0), b.offsetY(30)), h(30), d(5, -40, 40, s, F, b.offsetX(0), b.offsetY(30)), h(30)])])});
  gls2.fa["love-1-1"] = new J.ha({top0:b.action([h(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(20, "sequence"), n("$loop.index*0.3"), u, b.offsetX(-105), b.offsetY(0)), h(1)]), h(60), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(-20, "sequence"), n("$loop.index*0.3"), u, b.offsetX(-105), b.offsetY(0)), h(1)]), h(120)]), top1:b.action([b.wait(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), 
  b.repeat(90, [b.fire(b.direction(25, "sequence"), n("$loop.index*0.3"), u, b.offsetX(-85), b.offsetY(0)), h(1)]), h(60), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(-25, "sequence"), n("$loop.index*0.3"), u, b.offsetX(-85), b.offsetY(0)), h(1)])]), top2:b.action([b.wait(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(-20, "sequence"), n("$loop.index*0.3"), u, b.offsetX(105), b.offsetY(0)), h(1)]), h(60), 
  b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(20, "sequence"), n("$loop.index*0.3"), u, b.offsetX(105), b.offsetY(0)), h(1)])]), top3:b.action([b.wait(30), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(-25, "sequence"), n("$loop.index*0.3"), u, b.offsetX(85), b.offsetY(0)), h(1)]), h(60), b.fire(b.direction(-10), v, b.offsetX(0), b.offsetY(0)), b.repeat(90, [b.fire(b.direction(25, "sequence"), n("$loop.index*0.3"), 
  u, b.offsetX(85), b.offsetY(0)), h(1)])])});
  gls2.fa["love-1-2"] = new J.ha({top0:b.action([b.wait(30), b.repeat(2, [c(p, 0.02, 10, function(c) {
    return b.action([a(5, 200, 120, c, z, b.offsetX(-85), b.offsetY(0)), a(5, 260, 210, c, z, b.offsetX(85), b.offsetY(0)), a(6, 190, 130, c, D, b.offsetX(-170), b.offsetY(40)), a(6, 270, 220, c, D, b.offsetX(170), b.offsetY(40)), b.wait(5)])
  }), h(180)])]), top1:b.action([b.wait(60), b.repeat(10, [d(4, -40, 40, n, E, b.offsetX(0), b.offsetY(30)), h(30), d(5, -40, 40, s, E, b.offsetX(0), b.offsetY(30)), h(30)])])});
  gls2.fa["love-1-3"] = new J.ha({top0:b.action([b.wait(60), b.repeat(10, [d(4, -40, 40, n, E, b.offsetX(0), b.offsetY(30)), h(30), d(5, -40, 40, s, E, b.offsetX(0), b.offsetY(30)), h(30)])]), top1:b.action([b.wait(120), b.repeat(5, [b.repeat(10, [b.ua("c", "$loop.index*5"), d(2, "-30+$c", "30-$c", q(10), D, b.offsetX(0), b.offsetY(0)), h(5)])]), h(120)])});
  gls2.fa["love-2-1"] = gls2.fa["love-1-1"];
  gls2.fa["love-2-2"] = gls2.fa["love-1-2"];
  gls2.fa["love-2-3"] = gls2.fa["love-1-3"];
  gls2.fa["love-3-1"] = new J.ha({top0:b.action([b.wait(30), b.repeat(2, [c(q, 0.005, 10, function(a) {
    return b.action([d(20, -90, 90, a, z, b.offsetX(-85), b.offsetY(0)), d(20, -90, 90, a, z, b.offsetX(85), b.offsetY(0))])
  }), h(300)])])});
  gls2.fa["love-3-2"] = gls2.fa["love-1-2"];
  gls2.fa.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      Q.push(gls2.Qa())
    }
    a = gls2.fa.lf = tm.Gb.md.te;
    a.Tg = function(a) {
      return!(a instanceof gls2.Qa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.ai = function(a) {
      var b = Q.shift(0);
      if(b) {
        return b.ra = 50, O.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.jc ? (b.scaleX = 1, b.scaleY = 1, b.jd = t) : (a.Fe ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.ac ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.jd = k), b.visible = a.visible === t ? t : k, b.jc = !!a.jc, b.Fe = !!a.Fe, b.ac = !!a.ac, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.hi = function(a) {
      return-0 <= a.x && 480 > a.x && -0 <= a.y && 640 > a.y
    };
    a.Fd = 3;
    J.Ua.Zb.$rank = 0;
    J.Ua.Zb.$hyperOff = 1
  };
  gls2.fa.erase = function(a, b, c) {
    for(var d = [].concat(O), f = 0, h = d.length;f < h;f++) {
      if(a) {
        var j = gls2.Sh(!!b);
        j.setPosition(d[f].x, d[f].y);
        c && (j.zd = k)
      }
      d[f].za()
    }
  };
  gls2.fa.re = function() {
    for(var a = [].concat(O), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Qa = tm.createClass({superClass:tm.display.Sprite, ra:0, jc:t, Fe:t, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      Q.push(this);
      var a = O.indexOf(this);
      -1 !== a && O.splice(a, 1)
    })
  }, update:function() {
    this.jc && (this.rotation += 15)
  }, za:function() {
    var a = gls2.Qa.ve().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Qa.ve = function() {
    gls2.Qa.ve.Gg === l && (gls2.Qa.ve.Gg = gls2.Za(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Qa.ve.Gg.clone()
  };
  gls2.Qa.ve.Gg = l;
  var Q = [], O = gls2.Qa.ob = []
})();
gls2.ka = {};
gls2.ka.clamp = function(c, a, f) {
  return c < a ? a : c > f ? f : c
};
gls2.ka.DEG_TO_RAD = Math.PI / 180;
gls2.ka.RAD_TO_DEG = 180 / Math.PI;
gls2.ka.degToRad = function(c) {
  return c * gls2.ka.DEG_TO_RAD
};
gls2.ka.radToDeg = function(c) {
  return c * gls2.ka.RAD_TO_DEG
};
gls2.ka.rand = function(c, a) {
  return window.Math.floor(window.Math.random() * (a - c + 1)) + c
};
gls2.ka.randf = function(c, a) {
  return window.Math.random() * (a - c) + c
};
gls2.ka.magnitude = function() {
  return Math.sqrt(gls2.ka.magnitudeSq.apply(l, arguments))
};
gls2.ka.magnitudeSq = function() {
  for(var c = 0, a = 0, f = arguments.length;a < f;++a) {
    c += arguments[a] * arguments[a]
  }
  return c
};
gls2.ka.inside = function(c, a, f) {
  return c >= a && c <= f
};

