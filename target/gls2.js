/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(a) {
  throw a;
}
var i = void 0, j = !0, l = null, m = !1;
function n() {
  return function() {
  }
}
var q = {bg:this};
(function() {
  function a(b, a) {
    for(var f = 0, g = b.length;f < g;f++) {
      if(b[f].label == a) {
        return b[f]
      }
    }
  }
  q.ta = function(b) {
    this.type = "none";
    this.root = this;
    this.Ea = [];
    this.kd = [];
    this.rd = [];
    if(b !== i) {
      for(var a in b) {
        b.hasOwnProperty(a) && (b[a].label = a, b[a] instanceof q.Za ? this.Ea.push(b[a]) : b[a] instanceof q.Ib ? this.kd.push(b[a]) : b[a] instanceof q.jc && this.rd.push(b[a]))
      }
      b = 0;
      for(a = this.Ea.length;b < a;b++) {
        this.Ea[b].bb(this)
      }
      b = 0;
      for(a = this.kd.length;b < a;b++) {
        this.kd[b].bb(this)
      }
      b = 0;
      for(a = this.rd.length;b < a;b++) {
        this.rd[b].bb(this)
      }
    }
  };
  q.ta.prototype.of = function(b) {
    return a(this.Ea, b)
  };
  q.ta.prototype.qh = function() {
    for(var b = [], a = 0, f = this.Ea.length;a < f;a++) {
      var g = this.Ea[a];
      g.label && 0 === g.label.indexOf("top") && (b[b.length] = g.label)
    }
    return b
  };
  q.ta.prototype.hh = function(b) {
    var a;
    if(a = this.of(b)) {
      return a
    }
    h(Error("action labeled '" + b + "' is undefined."))
  };
  q.ta.prototype.ih = function(b) {
    return a(this.kd, b)
  };
  q.ta.prototype.jh = function(a) {
    var c;
    if(c = this.ih(a)) {
      return c
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  q.ta.prototype.kh = function(b) {
    return a(this.rd, b)
  };
  q.ta.prototype.lh = function(a) {
    var c;
    if(c = this.kh(a)) {
      return c
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  q.Ib = function() {
    this.root = this.label = l;
    this.direction = new q.Ab(0);
    this.speed = new q.Bb(1);
    this.Ea = [];
    this.Ma = {};
    this.ka = {}
  };
  q.Ib.prototype.clone = function(a) {
    var c = new q.Ib;
    c.label = this.label;
    c.root = this.root;
    c.Ea = this.Ea;
    c.direction = new q.Ab(a.Ja(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new q.Bb(a.Ja(this.speed.value));
    c.speed.type = this.speed.type;
    c.Ma = this.Ma;
    c.ka = a.ka;
    return c
  };
  q.Ib.prototype.bb = function(a) {
    this.root = a;
    for(var c = 0, f = this.Ea.length;c < f;c++) {
      this.Ea[c].bb(a)
    }
  };
  q.Xc = function(a) {
    this.root = l;
    this.label = a;
    this.Ca = []
  };
  q.Xc.prototype.clone = function(a) {
    var c = a.ka;
    a.ka = a.Yd(this.Ca);
    var f = this.root.jh(this.label).clone(a);
    a.ka = c;
    return f
  };
  q.Xc.prototype.bb = function(a) {
    this.root = a
  };
  q.Da = function() {
    this.Ta = ""
  };
  q.Da.prototype.bb = function(a) {
    this.root = a
  };
  q.Za = function() {
    this.Ta = "action";
    this.root = this.label = l;
    this.gb = [];
    this.Ca = []
  };
  q.Za.prototype = new q.Da;
  q.Za.prototype.bb = function(a) {
    this.root = a;
    for(var c = 0, f = this.gb.length;c < f;c++) {
      this.gb[c].bb(a)
    }
  };
  q.Za.prototype.clone = function() {
    var a = new q.Za;
    a.label = this.label;
    a.root = this.root;
    a.gb = this.gb;
    return a
  };
  q.ic = function(a) {
    this.Ta = "actionRef";
    this.label = a;
    this.root = l;
    this.Ca = []
  };
  q.ic.prototype = new q.Da;
  q.ic.prototype.clone = function() {
    var a = new q.Za;
    a.root = this.root;
    a.gb.push(this);
    return a
  };
  q.jc = function() {
    this.Ta = "fire";
    this.ca = this.speed = this.direction = this.root = this.label = l;
    this.Ma = new q.Md
  };
  q.jc.prototype = new q.Da;
  q.jc.prototype.bb = function(a) {
    this.root = a;
    this.ca && this.ca.bb(a)
  };
  q.Nd = function(a) {
    this.Ta = "fireRef";
    this.label = a;
    this.Ca = []
  };
  q.Nd.prototype = new q.Da;
  q.Yc = function() {
    this.Ta = "changeDirection";
    this.direction = new q.Ab;
    this.Oa = 0
  };
  q.Yc.prototype = new q.Da;
  q.Zc = function() {
    this.Ta = "changeSpeed";
    this.speed = new q.Bb;
    this.Oa = 0
  };
  q.Zc.prototype = new q.Da;
  q.Wc = function() {
    this.Ta = "accel";
    this.ub = new q.Qd;
    this.zb = new q.Wd;
    this.Oa = 0
  };
  q.Wc.prototype = new q.Da;
  q.dd = function(a) {
    this.Ta = "wait";
    this.value = a || 0
  };
  q.dd.prototype = new q.Da;
  q.Vd = function() {
    this.Ta = "vanish"
  };
  q.Vd.prototype = new q.Da;
  q.bd = function() {
    this.Ta = "repeat";
    this.Nf = 0;
    this.action = l;
    this.Ca = []
  };
  q.bd.prototype = new q.Da;
  q.bd.prototype.bb = function(a) {
    this.root = a;
    this.action && this.action.bb(a)
  };
  q.Ld = function(a, c) {
    this.Ta = "bind";
    this.Zh = a;
    this.fh = c
  };
  q.Ld.prototype = new q.Da;
  q.Ud = function(a, c) {
    this.Ta = "notify";
    this.ah = a;
    this.Ca = c || l
  };
  q.Ud.prototype = new q.Da;
  q.$f = new q.Da;
  q.Ab = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  q.Bb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  q.Qd = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.Wd = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.Md = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.Qa = j;
    a.Qa !== i && (this.Qa = !!a.Qa)
  };
  q.Se = function(a) {
    this.value = a || 0
  };
  q.Te = function(a) {
    this.value = a || 0
  };
  q.Le = function(a) {
    this.value = !!a
  }
})();
q.ma = function(a) {
  this.Xe = a;
  this.ed = [];
  this.Kb = -1;
  this.Ia = l;
  this.ka = {}
};
q.ma.prototype.next = function() {
  this.Kb += 1;
  if(this.Ia !== l) {
    var a = this.Ia.gb[this.Kb];
    if(a !== i) {
      if(a instanceof q.Za) {
        return this.zc(), this.Ia = a, this.ka = this.Xd(), this.next()
      }
      if(a instanceof q.ic) {
        return this.zc(), this.Ia = this.Xe.hh(a.label), this.ka = this.Yd(a.Ca), this.next()
      }
      if(a instanceof q.bd) {
        return this.ka.rc = 0, this.ka.zf = this.Ja(a.Nf) | 0, this.zc(), this.Ia = a.action.clone(), this.ka = this.Xd(), this.next()
      }
      if(a instanceof q.jc) {
        var b = new q.jc;
        b.ca = a.ca.clone(this);
        a.direction !== l && (b.direction = new q.Ab(this.Ja(a.direction.value)), b.direction.type = a.direction.type);
        a.speed !== l && (b.speed = new q.Bb(this.Ja(a.speed.value)), b.speed.type = a.speed.type);
        b.Ma = a.Ma;
        return b
      }
      return a instanceof q.Nd ? (this.zc(), this.Ia = new q.Za, this.Ia.gb = [this.Xe.lh(a.label)], this.ka = this.Yd(a.Ca), this.next()) : a instanceof q.Yc ? (b = new q.Yc, b.direction.type = a.direction.type, b.direction.value = this.Ja(a.direction.value), b.Oa = this.Ja(a.Oa), b) : a instanceof q.Zc ? (b = new q.Zc, b.speed.type = a.speed.type, b.speed.value = this.Ja(a.speed.value), b.Oa = this.Ja(a.Oa), b) : a instanceof q.Wc ? (b = new q.Wc, b.ub.type = a.ub.type, b.ub.value = this.Ja(a.ub.value), 
      b.zb.type = a.zb.type, b.zb.value = this.Ja(a.zb.value), b.Oa = this.Ja(a.Oa), b) : a instanceof q.dd ? new q.dd(this.Ja(a.value)) : a instanceof q.Vd ? a : a instanceof q.Ld ? (this.ka["$" + a.Zh] = this.Ja(a.fh), q.$f) : a instanceof q.Ud ? a : l
    }
    this.Ng();
    if(this.Ia === l) {
      return l
    }
    if((a = this.Ia.gb[this.Kb]) && "repeat" == a.Ta) {
      this.ka.rc++, this.ka.rc < this.ka.zf && (this.zc(), this.Ia = a.action.clone(), this.ka = this.Xd())
    }
    return this.next()
  }
  return l
};
q.ma.prototype.zc = function() {
  this.ed.push({action:this.Ia, cursor:this.Kb, scope:this.ka});
  this.Kb = -1
};
q.ma.prototype.Ng = function() {
  var a = this.ed.pop();
  a ? (this.Kb = a.cursor, this.Ia = a.action, this.ka = a.scope) : (this.Kb = -1, this.Ia = l, this.ka = {})
};
q.ma.prototype.Ja = function(a) {
  var b;
  if("number" === typeof a) {
    return a
  }
  if(isNaN(b = Number(a))) {
    if((b = this.ka[a]) || (b = q.ma.xa[a])) {
      return b
    }
    if("$rand" === a) {
      return Math.random()
    }
  }else {
    return b
  }
  b = {};
  for(var c in q.ma.xa) {
    q.ma.xa.hasOwnProperty(c) && (b[c] = q.ma.xa[c])
  }
  for(c in this.ka) {
    this.ka.hasOwnProperty(c) && (b[c] = this.ka[c])
  }
  b.$rand = Math.random();
  (c = this.ed[this.ed.length - 1]) && (b.$loop = {index:c.scope.rc, count:c.scope.rc + 1, first:0 === c.scope.rc, last:c.scope.rc + 1 >= c.scope.zf});
  return(new Function("return " + a.split("$").join("this.$"))).apply(b)
};
q.ma.prototype.Yd = function(a) {
  var b = {};
  if(a) {
    for(var c = 0, f = a.length;c < f;c++) {
      b["$" + (c + 1)] = this.Ja(a[c])
    }
  }else {
    for(c in this.ka) {
      this.ka.hasOwnProperty(c) && (b[c] = this.ka[c])
    }
  }
  return b
};
q.ma.prototype.Xd = function() {
  var a = {}, b;
  for(b in this.ka) {
    this.ka.hasOwnProperty(b) && (a[b] = this.ka[b])
  }
  return a
};
q.ta.prototype.ke = function(a) {
  var b = new q.ma(this);
  if(a = this.of(a)) {
    b.Ia = a
  }
  return b
};
q.Ib.prototype.ke = function() {
  var a = new q.ma(this.root), b = new q.Za;
  b.root = this.root;
  b.gb = this.Ea;
  a.Ia = b;
  a.ka = this.ka;
  return a
};
q.ma.xa = {};
q.qa = function(a) {
  a = a || "";
  for(var b in q.qa) {
    q.qa.hasOwnProperty(b) && (q.bg[a + b] = q.qa[b])
  }
};
q.qa.action = function(a) {
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
  var f = new q.Za;
  if(a instanceof Array) {
    a.some(function(a) {
      return!(a instanceof q.Da)
    }) && h(Error("argument type error.")), f.gb = a
  }else {
    b = 0;
    for(c = arguments.length;b < c;b++) {
      arguments[b] instanceof q.Da ? f.gb[b] = arguments[b] : h(Error("argument type error."))
    }
  }
  return f
};
q.qa.di = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  f = new q.ic(a);
  if(b instanceof Array) {
    f.Ca = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ca.push(arguments[c])
    }
  }
  return f
};
q.qa.ca = function(a, b, c, f) {
  for(var g = 0, k = arguments.length;g < k;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  k = new q.Ib;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Ab ? k.direction = arguments[g] : arguments[g] instanceof q.Bb ? k.speed = arguments[g] : arguments[g] instanceof q.Za ? k.Ea.push(arguments[g]) : arguments[g] instanceof q.ic ? k.Ea.push(arguments[g]) : arguments[g] instanceof Array ? k.Ea.push(q.qa.action(arguments[g])) : arguments[g] instanceof Object ? k.Ma = arguments[g] : "string" === typeof arguments[g] && (k.label = arguments[g])
  }
  return k
};
q.qa.ei = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  f = new q.Xc(a);
  if(b instanceof Array) {
    f.Ca = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ca.push(arguments[c])
    }
  }
  return f
};
q.qa.ja = function(a, b, c, f) {
  for(var g = 0, k = arguments.length;g < k;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  k = new q.jc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Ab ? k.direction = arguments[g] : arguments[g] instanceof q.Bb ? k.speed = arguments[g] : arguments[g] instanceof q.Ib ? k.ca = arguments[g] : arguments[g] instanceof q.Xc ? k.ca = arguments[g] : arguments[g] instanceof q.Md ? k.Ma = arguments[g] : arguments[g] instanceof q.Se ? k.Ma.offsetX = arguments[g].value : arguments[g] instanceof q.Te ? k.Ma.offsetY = arguments[g].value : arguments[g] instanceof q.Le && (k.Ma.Qa = arguments[g].value)
  }
  k.ca === i && h(Error("bullet (or bulletRef) is required."));
  return k
};
q.qa.ji = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  f = new q.Nd(a);
  if(b instanceof Array) {
    f.Ca = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ca.push(arguments[c])
    }
  }
  return f
};
q.qa.fi = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("direction is required."));
  b === i && h(Error("term is required."));
  c = new q.Yc;
  c.direction = a instanceof q.Ab ? a : new q.Ab(a);
  c.Oa = b;
  return c
};
q.qa.gi = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("speed is required."));
  b === i && h(Error("term is required."));
  c = new q.Zc;
  c.speed = a instanceof q.Bb ? a : new q.Bb(a);
  c.Oa = b;
  return c
};
q.qa.ci = function(a, b, c) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new q.Wc;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof q.Qd ? g.ub = a : arguments[f] instanceof q.Wd ? g.zb = b : g.Oa = arguments[f]
  }
  g.ub === i && g.zb === i && h(Error("horizontal or vertical is required."));
  g.Oa === i && h(Error("term is required."));
  return g
};
q.qa.wait = function(a) {
  for(var b = 0, c = arguments.length;b < c;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && h(Error("value is required."));
  return new q.dd(a)
};
q.qa.ti = function() {
  return new q.Vd
};
q.qa.repeat = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("times is required."));
  b === i && h(Error("action is required."));
  f = new q.bd;
  f.Nf = a;
  if(b instanceof q.Za || b instanceof q.ic) {
    f.action = b
  }else {
    if(b instanceof Array) {
      f.action = q.qa.action(b)
    }else {
      for(var g = [], c = 1;c < arguments.length;c++) {
        g.push(arguments[c])
      }
      f.action = q.qa.action(g)
    }
  }
  return f
};
q.qa.Sg = function() {
  return new q.Ld("way", "5 + $loop.index*2")
};
q.qa.pi = function(a, b) {
  return new q.Ud(a, b)
};
q.qa.direction = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.Ab(a);
  b !== i && (c.type = b);
  return c
};
q.qa.speed = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.Bb(a);
  b && (c.type = b);
  return c
};
q.qa.ub = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.Qd(a);
  b && (c.type = b);
  return c
};
q.qa.zb = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.Wd(a);
  b && (c.type = b);
  return c
};
q.qa.ii = function(a) {
  return new q.Md(a)
};
q.qa.offsetX = function(a) {
  return new q.Se(a)
};
q.qa.offsetY = function(a) {
  return new q.Te(a)
};
q.qa.Qa = function(a) {
  return new q.Le(a)
};
tm.Sa = tm.Sa || {};
(function() {
  function a(a) {
    for(;a <= -Math.PI;) {
      a += 2 * Math.PI
    }
    for(;Math.PI < a;) {
      a -= 2 * Math.PI
    }
    return a
  }
  function b(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x)
  }
  tm.Sa.Tb = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.Ue = a
  }, md:function(a, b) {
    var c = this.Ue.qh();
    if(b === i && 0 < c.length) {
      for(var f = [], t = 0, s = c.length;t < s;t++) {
        f[f.length] = this.Ve(a, c[t])
      }
      for(var d = function() {
        for(var a = f.length;a--;) {
          f[a].call(this)
        }
        d.he == f.length && (d.Dc = j, this.dispatchEvent(tm.event.Event("completeattack")))
      }, t = f.length;t--;) {
        f[t].Cd = d
      }
      d.he = 0;
      d.df = function() {
        this.he++
      };
      d.he = 0;
      d.Dc = m;
      d.ne = j;
      return d
    }
    return this.Ve(a, b)
  }, Ve:function(a, b) {
    function c() {
      c.ha += 1;
      this.ha = c.ha;
      var a = c.ld, b = c.Mg;
      if(b) {
        if(c.ha < c.ee ? c.direction += c.nc : c.ha === c.ee && (c.direction = c.Ob), c.ha < c.fe ? c.speed += c.Uc : c.ha === c.fe && (c.speed = c.wc), c.ha < c.$d ? (c.cc += c.hd, c.ec += c.jd) : c.ha === c.$d && (c.cc = c.fd, c.ec = c.gd), this.x += Math.cos(c.direction) * c.speed * a.dc, this.y += Math.sin(c.direction) * c.speed * a.dc, this.x += c.cc * a.dc, this.y += c.ec * a.dc, a.oe(this)) {
          if(a.Rb || this.Rb) {
            this.rotation = (c.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = c.speed
          }
          if(!(c.ha < c.Of || c.Dc)) {
            for(var f;f = c.Pf.next();) {
              switch(f.Ta) {
                case "fire":
                  b.Jg.call(this, f, a, c, b);
                  break;
                case "wait":
                  a = 0;
                  c.Of = "number" === typeof f.value ? c.ha + f.value : 0 !== (a = ~~f.value) ? c.ha + a : c.ha + eval(f.value);
                  return;
                case "changeDirection":
                  b.Eg.call(this, f, a, c);
                  break;
                case "changeSpeed":
                  b.Fg.call(this, f, c);
                  break;
                case "accel":
                  b.Cg.call(this, f, c);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  b.Kg.call(this, f)
              }
            }
            c.Dc = j;
            c.Cd ? c.Cd.df() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), c.Dc = j, c.Cd ? c.Cd.df() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    a = function(a) {
      var c = {}, b = tm.Sa.Tb.Ec, d;
      for(d in b) {
        b.hasOwnProperty(d) && (c[d] = b[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (c[d] = a[d])
      }
      return c
    }(a);
    a.target || h(Error("target is undefined in config."));
    b = b || "top";
    "string" === typeof b ? c.Pf = this.Ue.ke(b) : b instanceof q.Ib ? c.Pf = b.ke() : (window.console.error(a, b), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    c.Mg = this;
    c.ld = a;
    c.Of = -1;
    c.Dc = m;
    c.direction = 0;
    c.vf = 0;
    c.speed = 0;
    c.xf = 0;
    c.cc = 0;
    c.ec = 0;
    c.nc = 0;
    c.Ob = 0;
    c.ee = -1;
    c.Uc = 0;
    c.wc = 0;
    c.fe = -1;
    c.hd = 0;
    c.fd = 0;
    c.jd = 0;
    c.gd = 0;
    c.$d = -1;
    c.ha = -1;
    c.ne = j;
    return c
  }, Ig:function(a) {
    function c() {
      this.x += c.gf;
      this.y += c.hf;
      c.ld.oe(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    }
    a = function(a) {
      var c = {}, b = tm.Sa.Tb.Ec, f;
      for(f in b) {
        b.hasOwnProperty(f) && (c[f] = b[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (c[f] = a[f])
      }
      return c
    }(a);
    a.target || h(Error("target is undefined in config."));
    c.ld = a;
    c.direction = 0;
    c.speed = 0;
    c.gf = 0;
    c.hf = 0;
    c.ne = j;
    return c
  }, Jg:function(a, c, f, r) {
    if(this.Jh === i || this.$b) {
      var t = {label:a.ca.label}, s;
      for(s in a.ca.Ma) {
        t[s] = a.ca.Ma[s]
      }
      if(t = c.cf(t)) {
        var d = (s = !!a.ca.Ea.length) ? r.Ig(c) : r.md(c, a.ca), U = this, M = {x:this.x + a.Ma.offsetX, y:this.y + a.Ma.offsetY};
        f.vf = d.direction = function(d) {
          var r = eval(d.value) * Math.DEG_TO_RAD;
          switch(d.type) {
            case "aim":
              return c.target ? a.Ma.Qa ? b(M, c.target) + r : b(U, c.target) + r : r - Math.PI / 2;
            case "absolute":
              return r - Math.PI / 2;
            case "relative":
              return f.direction + r;
            default:
              return f.vf + r
          }
        }(a.direction || a.ca.direction);
        f.xf = d.speed = function(a) {
          var c = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + c;
            case "sequence":
              return f.xf + c;
            default:
              return c
          }
        }(a.speed || a.ca.speed);
        t.x = M.x;
        t.y = M.y;
        s && (d.gf = Math.cos(d.direction) * d.speed * c.dc, d.hf = Math.sin(d.direction) * d.speed * c.dc);
        t.Rb = !!t.Rb;
        if(c.Rb || t.Rb) {
          t.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, t.speed = d.speed
        }
        t.addEventListener("enterframe", d);
        t.addEventListener("removed", function() {
          this.removeEventListener("enterframe", d);
          this.removeEventListener("removed", arguments.callee)
        });
        c.Ze ? c.Ze.addChild(t) : this.parent && this.parent.addChild(t)
      }
    }
  }, Eg:function(c, f, p) {
    var r = eval(c.direction.value) * Math.DEG_TO_RAD, t = eval(c.Oa);
    switch(c.direction.type) {
      case "aim":
        c = f.target;
        if(!c) {
          return
        }
        p.Ob = b(this, c) + r;
        p.nc = a(p.Ob - p.direction) / t;
        break;
      case "absolute":
        p.Ob = r - Math.PI / 2;
        p.nc = a(p.Ob - p.direction) / t;
        break;
      case "relative":
        p.Ob = p.direction + r;
        p.nc = a(p.Ob - p.direction) / t;
        break;
      case "sequence":
        p.nc = r, p.Ob = p.direction + p.nc * (t - 1)
    }
    p.ee = p.ha + t
  }, Fg:function(a, c) {
    var b = eval(a.speed.value), f = eval(a.Oa);
    switch(a.speed.type) {
      case "absolute":
        c.wc = b;
        c.Uc = (c.wc - c.speed) / f;
        break;
      case "relative":
        c.wc = b + c.speed;
        c.Uc = (c.wc - c.speed) / f;
        break;
      case "sequence":
        c.Uc = b, c.wc = c.speed + c.Uc * f
    }
    c.fe = c.ha + f
  }, Cg:function(a, c) {
    var b = eval(a.Oa);
    c.$d = c.ha + b;
    if(a.ub) {
      var f = eval(a.ub.value);
      switch(a.ub.type) {
        case "absolute":
        ;
        case "sequence":
          c.hd = (f - c.cc) / b;
          c.fd = f;
          break;
        case "relative":
          c.hd = f, c.fd = (f - c.cc) * b
      }
    }else {
      c.hd = 0, c.fd = c.cc
    }
    if(a.zb) {
      switch(f = eval(a.zb.value), a.zb.type) {
        case "absolute":
        ;
        case "sequence":
          c.jd = (f - c.ec) / b;
          c.gd = f;
          break;
        case "relative":
          c.jd = f, c.gd = (f - c.ec) * b
      }
    }else {
      c.jd = 0, c.gd = c.ec
    }
  }, Kg:function(a) {
    var c = tm.event.Event(a.ah);
    if(a.Ca) {
      for(var b in a.Ca) {
        c[b] = a.Ca[b]
      }
    }
    this.dispatchEvent(c)
  }});
  var c = function() {
    var a = tm.graphics.Canvas();
    a.resize(8, 8);
    a.setTransformCenter();
    a.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    a.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return tm.asset.Texture(a.canvas.toDataURL())
  }();
  tm.Sa.Yg = function(a) {
    var b = tm.app.Sprite(c, 8, 8);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.Sa.ff = function(a) {
    if(f === l) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.Sa.hi = function() {
    return j
  };
  tm.Sa.Tb.Ec = {cf:tm.Sa.Yg, oe:tm.Sa.ff, ri:0, Rb:m, dc:2, target:l};
  q.ta.prototype.md = function(a) {
    return tm.Sa.Tb(this).md(a)
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
var u = l, v, w, z, A, B, C, D, ba, ca, da, ea, fa, ga, E, F, ha, G, ia, ja, ka, la, H, ma, na, oa, pa, I, qa, ra, sa, J, K, ta, ua, L, aa = tm.createClass({superClass:tm.app.CanvasApp, vd:0, ni:0, Ac:3, bc:3, jf:1, mf:[1E9, 1E10], $:l, init:function(a) {
  u !== l && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  u = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bgm1:"assets2/nc54073.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", 
  "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.Lg();
    return v()
  }.bind(this)}))
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Lg:function() {
  w.la(12345);
  z.la();
  A.la();
  this.$ = B()
}, dh:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.vd, "")
}}), N = l;
function va(a, b) {
  b || O();
  var c = tm.asset.AssetManager.get(a);
  c && (N = c.clone(), N.volume = 0.1 * u.Ac, N.loop = j, N.play())
}
function O() {
  N !== l && N.stop()
}
function wa() {
  if(N !== l) {
    var a = N;
    a.loop = m;
    B.cd.addEventListener("enterframe", function() {
      a.volume -= 0.002;
      0 >= a.volume && (a.stop(), this.removeEventListener("enterframe", arguments.callee))
    })
  }
}
function P(a) {
  if(0 !== u.bc && xa[a] !== u.frame) {
    var b = tm.asset.AssetManager.get("sound/" + a);
    b && (b = b.clone().play(), "vo" === a.substring(0, 2) ? (b.volume = 0.5 * u.bc, ya !== l && ya.stop(), ya = b) : b.volume = 0.1 * u.bc);
    xa[a] = u.frame
  }
}
var xa = {}, ya = l;
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Q(a, b) {
  return(a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
;C = {Ne:3, Me:3, wg:1, tg:1, Pe:1, ug:0.1, $h:1, ai:2, Rf:8, mg:0.005, ig:0.01, jg:0.001, eg:0.015, fg:0.002, og:0.001, qg:0.01, ng:0, lg:0, kg:0, hg:0.03, gg:0.004, pg:0, rg:0, sg:0.75, Od:10, $c:800, dg:0.25, cg:0.1, Yf:5, Wf:0.03, Xf:0.5, Vf:0.01, Uf:1E3, Tf:10, Bg:500, Ag:250, zg:100, yg:50, ag:0.5, Zf:1E4, Sf:50, xg:10, Qf:m};
(function() {
  var a = l, b = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  D = tm.createClass({superClass:tm.app.Sprite, type:0, style:0, Xa:0, Eb:j, sc:m, $:l, speed:0, lb:l, mc:l, Bf:l, xd:l, yb:l, wd:l, Db:l, le:l, me:l, init:function(c, b, g) {
    this.superInit("fighter", 64, 64);
    this.$ = c;
    this.type = b;
    this.style = g;
    tm.Sa.Tb.Ec.target = this;
    this.speed = [6, 5, 4.5][b];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.mc = this.Bf = ba(b, 100);
    this.xd = ba(3, 100);
    this.yb = ca(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.yb.visible = m;
    this.Hg();
    this.lb = this.Gg();
    1 === this.style && (this.lb = [this.lb[1], this.lb[2]]);
    this.Db = tm.app.CanvasElement().addChildTo(this);
    b = 0;
    for(g = this.lb.length;b < g;b++) {
      var k = this.lb[b];
      da(this, k).setPosition(k.x, k.y).addChildTo(this.Db)
    }
    this.yh = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.yh.blendMode = "lighter";
    this.le = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.le.blendMode = "lighter";
    this.le.update = function() {
      this.rotation += 2;
      this.visible = 0 < c.ua && !c.pa
    };
    this.me = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.me.blendMode = "lighter";
    this.me.update = function() {
      this.rotation -= 2;
      this.visible = 0 < c.ua && !c.pa
    };
    this.Kc = tm.app.CanvasElement(80, 80).addChildTo(this);
    this.Kc.blendMode = "lighter";
    this.Kc.rotation = -90;
    this.Kc.strokeStyle = "rgba(180,180,255,0.4)";
    this.Kc.update = function() {
      this.visible = c.pa
    };
    this.Kc.draw = function(a) {
      a.lineCap = "round";
      var b = c.pc / C.$c;
      a.strokeStyle = "rgba(50,50,255,0.4)";
      a.lineWidth = "12";
      a.strokeArc(0, 0, 40, 0, 2 * b * Math.PI, m);
      a.strokeStyle = "rgba(100,100,255,0.4)";
      a.lineWidth = "8";
      a.strokeArc(0, 0, 40, 0, 2 * b * Math.PI, m);
      a.strokeStyle = "rgba(180,180,255,0.4)";
      a.lineWidth = "4";
      a.strokeArc(0, 0, 40, 0, 2 * b * Math.PI, m)
    };
    this.sh = tm.app.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.sh.update = function() {
      this.visible = c.pa
    };
    a === l && (a = ea(this.$.va))
  }, Gg:function() {
    if(0 === this.type) {
      return[{x:-50, y:20, d:0, cb:m, $a:-0.7, v:j}, {x:-20, y:40, d:0, cb:m, $a:-0.5, v:j}, {x:20, y:40, d:0, cb:j, $a:0.5, v:j}, {x:50, y:20, d:0, cb:j, $a:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, cb:m, $a:-0.7, v:j}, {x:-40, y:40, d:0.1, cb:m, $a:-0.5, v:j}, {x:40, y:40, d:0.1, cb:j, $a:0.5, v:j}, {x:70, y:20, d:0.1, cb:j, $a:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, cb:m, $a:-0.7, v:j}, {x:-30, y:20, d:0.3, cb:m, $a:-0.5, v:j}, {x:30, y:20, d:0.3, cb:j, $a:0.5, v:j}, {x:60, y:40, d:0.6, cb:j, $a:0.7, v:j}]
    }
  }, Hg:function() {
    this.wd = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.wd.setFrameIndex(5);
    this.wd.blendMode = "lighter";
    this.wd.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Qb:-1, Hc:m, pb:m, update:function(c) {
    this.visible = this.sc ? 0 === c.frame / 2 % 2 : j;
    var f = c.keyboard;
    if(this.Eb) {
      var g = f.getKeyAngle();
      g !== l && (g = b[g], this.x += g.x * this.speed * (this.pb ? 0.75 : 1), this.y += g.y * this.speed * (this.pb ? 0.75 : 1));
      this.x = R(this.x, 15, 465);
      this.y = R(this.y, 15, 625);
      var k = f.getKey("c"), g = f.getKey("z");
      this.Qb = k ? this.Qb + 1 : this.Qb - 1;
      this.Qb = R(this.Qb, -1, 10);
      this.pb = g && k || 10 === this.Qb;
      k = this.$.pa ? 3 : 5;
      this.Hc = !this.pb && (0 <= this.Qb || g) && 0 === c.frame % k;
      g && (this.Qb = 0);
      this.yb.x = this.x;
      this.yb.y = this.y - 40;
      if(this.pb) {
        g = 0;
        for(k = this.lb.length;g < k;g++) {
          this.lb[g].v = m
        }
        this.Db.rotation = 0
      }else {
        this.yb.visible = m;
        g = 0;
        for(k = this.lb.length;g < k;g++) {
          this.lb[g].v = j
        }
      }
      this.Hc && (g = Math.sin(0.2 * c.frame), k = this.mc.ja(this.x - 7 - 6 * g, this.y - 5, -90), k !== l && k.addChildTo(this.$), k = this.mc.ja(this.x + 7 + 6 * g, this.y - 5, -90), k !== l && k.addChildTo(this.$));
      f.getKeyDown("x") && (0 < this.$.ua && !this.$.pa ? (this.$.Vh(), fa(this).addChildTo(this.$)) : !this.$.qc && 0 < this.$.mb && (this.Ua = R(this.Ua - 2, 0, 1), q.ma.xa.$rank = R(q.ma.xa.$rank - 0.02, 0, 1), ga(this, this.$).setPosition(R(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.$)))
    }
    this.Xg(f);
    this.Dg(f, c.frame);
    0 === c.frame % 2 && (a.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.$), a.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.$))
  }, Fb:function() {
    this.pb = this.Hc = m;
    this.$.nd();
    this.$.Fa = 0;
    this.$.Ba = 0;
    this.$.za = 0
  }, Xg:function(a) {
    if(1 === this.type) {
      var b = this.Db;
      b.rotation = this.Eb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Eb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0
    }
  }, Dg:function(a, b) {
    this.Eb && a.getKey("left") ? this.Xa = R(this.Xa - 0.2, -3, 3) : this.Eb && a.getKey("right") ? this.Xa = R(this.Xa + 0.2, -3, 3) : 0 > this.Xa ? this.Xa = R(this.Xa + 0.2, -3, 3) : 0 < this.Xa && (this.Xa = R(this.Xa - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Xa) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Xa) : 2 === this.type && this.setFrameIndex(31 + ~~this.Xa);
    return b
  }});
  da = tm.createClass({superClass:tm.app.AnimationSprite, Zb:l, aa:l, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Zb = b;
    this.aa = a;
    this.altitude = 10;
    this.gotoAndPlay(b.cb ? "anim0" : "anim1")
  }, update:function(c) {
    if(this.Zb.v) {
      this.x = this.Zb.x * (this.aa.$.pa ? 1.5 : 1);
      this.y = this.Zb.y * (this.aa.$.pa ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Zb.d * this.Zb.$a);
      var b = this.parent.localToGlobal(this);
      this.Zb.v && 0 === c.frame % 2 && a.clone(40).setPosition(b.x, b.y).addChildTo(c.$);
      this.aa.Hc && (b = this.aa.mc.ja(b.x, b.y, this.parent.rotation + this.rotation - 90), b !== l && b.addChildTo(c.$))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = l;
  E = tm.createClass({superClass:tm.app.Sprite, speed:0, Wa:j, init:function(c) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    a === l && (a = F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    c !== i && this.uc(c)
  }, update:function() {
    this.x += this.Ke;
    this.y += this.Vc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, uc:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, td:function(c) {
    for(var b = 0;b < c;b++) {
      var g = a.clone().setPosition(this.x, this.y).addChildTo(this.parent), k = S(2, 8), p = 2 * Math.random() * Math.PI;
      g.na = Math.cos(p) * k;
      g.oa = Math.sin(p) * k;
      g.scaleX = g.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.na;
        this.y += this.oa;
        this.na *= 0.9;
        this.oa *= 0.9
      })
    }
  }});
  E.Cc = function() {
    for(var a = [].concat(b), f = 0, g = a.length;f < g;f++) {
      a[f].remove()
    }
  };
  var b = E.La = [];
  ba = tm.createClass({Dd:l, sf:m, init:function(a, f) {
    this.sf = 3 === a;
    this.Dd = [];
    for(var g = 0;g < f;g++) {
      var k = E(a), p = this;
      k.addEventListener("added", function() {
        this.sa = C.xg;
        b.push(this)
      });
      k.addEventListener("removed", function() {
        var a = b.indexOf(this);
        -1 !== a && b.splice(a, 1);
        p.Dd.push(this)
      });
      this.sf && k.addEventListener("enterframe", function(a) {
        this.setScale(0 === a.app.frame % 2 ? 2 : 1)
      });
      this.Dd.push(k)
    }
  }, ja:function(a, b, g) {
    var k = this.Dd.pop();
    if(k === i) {
      return l
    }
    var p = za(g);
    k.Ke = Math.cos(p) * k.speed;
    k.Vc = Math.sin(p) * k.speed;
    k.setPosition(a, b);
    k.rotation = g + 90;
    return k
  }, vc:n()})
})();
ca = tm.createClass({superClass:tm.app.Sprite, aa:l, $:l, kb:0, frame:0, Mf:l, color:l, bf:0, ce:0, Rg:m, head:l, pf:l, af:l, Wa:j, be:C.Pe, tc:l, init:function(a, b) {
  this.aa = a;
  this.$ = a.$;
  this.bf = 0 === this.aa.style ? 1 : 1.5;
  this.ce = 0 === this.aa.style ? 50 : 75;
  var c = this;
  this.Mf = b;
  this.superInit(b.redBody, this.ce, 100);
  this.boundingHeightBottom = 1;
  this.si = 0;
  this.origin.y = 1;
  var f = this.af = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.pf = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = c.kb - c.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < c.kb
  };
  this.uc(["red", "green", "blue"][this.aa.type]);
  this.vc(0)
}, uc:function(a) {
  this.color = a;
  this.image = tm.asset.AssetManager.get(this.Mf[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.af.gotoAndPlay(this.color);
  this.pf.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.tc = l;
  return this
}, vc:function(a) {
  this.boundingWidth = this.width = this.ce + 30 * a / C.Od;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.be = this.bf * C.Pe + C.ug * a;
  0 === a ? this.uc(["red", "green", "blue"][this.aa.type]) : this.uc("hyper")
}, td:function(a, b) {
  this.tc === l && this.ef();
  b = b || this.kb;
  for(var c = 0;c < a;c++) {
    var f = this.tc.clone().setPosition(this.x, b).addChildTo(this.$), g = S(8, 14), k = S(0, Math.PI);
    f.na = Math.cos(k) * g;
    f.oa = Math.sin(k) * g;
    f.scaleX = f.scaleY = (S(0.5, 1.5) + S(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.na;
      this.y += this.oa;
      this.na *= 0.95;
      this.oa *= 0.95
    })
  }
}, oh:function(a, b, c) {
  this.tc === l && this.ef();
  for(var f = 0;f < a;f++) {
    var g = this.tc.clone().setPosition(b, c).addChildTo(this.$), k = S(12, 20), p = S(0, Math.PI);
    g.na = Math.cos(p) * k;
    g.oa = Math.sin(p) * k;
    g.scaleX = g.scaleY = (S(1, 3) + S(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.na;
      this.y += this.oa;
      this.na *= 0.95;
      this.oa *= 0.95
    })
  }
}, ef:function() {
  this.tc = "hyper" === this.color ? F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.aa.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(a) {
  (this.visible = this.aa.pb) ? (this.kb = Math.max(0, this.kb - 40), this.height = this.y - this.kb, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.kb = this.y - 40;
  this.Rg = this.visible
}, draw:function(a) {
  var b = this.srcRect, c = this._image.element;
  b.x = b.width * this.frame;
  a.context.drawImage(c, b.x, b.height - this.height, b.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, mi:function() {
  return this.kb
}, Qh:function(a) {
  this.kb = a;
  this.head.update()
}});
ca.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.kb
});
(function() {
  ga = tm.createClass({superClass:tm.app.Object2D, Wa:j, $:l, init:function(b, c) {
    this.superInit();
    this.aa = b;
    this.$ = c;
    this.Hf = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Hf.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Hf));
    this.Ye();
    a === l && (a = F(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ha = 0;
    this.Rc = 1;
    this.addEventListener("added", function() {
      this.$.qc = j;
      this.aa.sc = j;
      this.$.mb -= 1;
      this.$.nd();
      this.$.Na("drop BOMBER!!", j);
      P("bomb");
      P("voBomb")
    });
    this.addEventListener("removed", function() {
      this.$.qc = m;
      this.aa.sc = m
    })
  }, Ye:function() {
    this.hb = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.hb.gotoAndPlay("animation");
    this.hb.blendMode = "lighter";
    this.hb.setScale(0.1, 0.1);
    this.hb.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.9, 1.1)
      }
    }.bind(this.hb))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.Rc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.ha;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.ha += 3.6, this.Rc = -1) : (this.b = 8, this.ha += 1.8, this.Rc = 1)
  }});
  ha = tm.createClass({superClass:ga, init:function(a, c) {
    this.superInit(a, c);
    C.Qf && this.addEventListener("added", function() {
      this.$.mb = 0
    })
  }, Ye:function() {
    this.hb = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.hb.gotoAndPlay("animation");
    this.hb.blendMode = "lighter";
    this.hb.setScale(0.1, 0.1);
    this.hb.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.4, 0.6)
      }
    }.bind(this.hb))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.Rc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.04 * this.ha;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.ha += 1.8, this.Rc = 1)
  }});
  var a = l
})();
G = tm.createClass({aa:l, $:l, ba:l, frame:0, init:function(a) {
  this.$ = a;
  this.aa = a.aa;
  this.Gf();
  this.ba = ia();
  this.frame = 0
}, Gf:n(), update:function() {
  this.bh(this.frame);
  this.frame += 1
}, bh:function(a) {
  a = this.ba.get(a);
  if(a !== l) {
    if("function" === typeof a.value) {
      a.value.call(this)
    }else {
      if(ja[a.value] !== i) {
        var b = ja[a.value];
        if(b !== l) {
          if(b[0].Mb === j) {
            this.yf(b[0])
          }else {
            for(var c = 0;c < b.length;c++) {
              var f = this.yf(b[c]);
              a.stop && f.addEventListener("enemyconsumed", function() {
                this.ba.Je = m
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, yf:function(a) {
  this.$.od += 1;
  return a.da(this.$, a.ea).setPosition(a.x, a.y).addChildTo(this.$).Ah()
}, Qg:function(a) {
  wa();
  this.$.Fc = j;
  for(var b = tm.app.Object2D().setPosition(240, 320), c = -4;4 >= c;c++) {
    for(var f = -4;4 >= f;f++) {
      var g = tm.app.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(c, f);
      g.ha = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.ha) + 0.5;
        this.ha += 1
      };
      g.addChildTo(b)
    }
  }
  b.tweener.wait(3E3).call(a).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = n();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(b)).wait(1E3).call(function() {
    this.remove()
  }.bind(b));
  b.addChildTo(this.$.je);
  P("warning");
  P("voWarning")
}});
G.create = function(a, b) {
  switch(b) {
    case 0:
      return ka(a);
    default:
      return ka(a)
  }
};
ia = tm.createClass({index:0, data:l, Je:m, init:function() {
  this.data = {}
}, add:function(a, b, c) {
  this.index += a;
  this.data[this.index] = {stop:c, value:b}
}, get:function(a) {
  a = this.data[a];
  return a === i ? l : a.stop === j ? (this.Je = j, a) : this.Je ? l : a
}});
ka = tm.createClass({superClass:G, init:function(a) {
  this.superInit(a);
  this.ba.add(0, function() {
    va("bgm1", j);
    this.$.va.direction = 0.5 * Math.PI;
    this.$.va.speed = 8;
    this.$.va.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.ba.add(200, "tankRD-center");
  this.ba.add(200, "tankRD-left");
  this.ba.add(20, "heri1-right");
  this.ba.add(60, "heri1-center");
  this.ba.add(10, "cannon-0");
  this.ba.add(60, "heri1-left");
  this.ba.add(10, "cannon-1");
  this.ba.add(60, "tankL-top");
  this.ba.add(50, "heri1-right");
  this.ba.add(20, "tankRD-center");
  this.ba.add(80, "heri1-center");
  this.ba.add(150, "komachi-1");
  this.ba.add(500, "heri1-right");
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
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-left");
  this.ba.add(20, "tankL-top");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "fighter-m-1");
  this.ba.add(50, "fighter-m-5");
  this.ba.add(1, function() {
    this.$.va.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
  this.ba.add(10, "cannon-6");
  this.ba.add(60, "heri1-left");
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
  this.ba.add(50, "heri2-center");
  this.ba.add(50, "heri2-right");
  this.ba.add(50, "heri2-left");
  this.ba.add(10, "cannon-1");
  this.ba.add(60, "heri1-center");
  this.ba.add(50, "heri1-left");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "fighter-m-6");
  this.ba.add(50, "fighter-m-5");
  this.ba.add(50, "fighter-m-4");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-left2");
  this.ba.add(60, "heri1-center2");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right2");
  this.ba.add(60, "heri1-center");
  this.ba.add(1, function() {
    this.$.va.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.ba.add(100, "komachi-0");
  this.ba.add(160, "komachi-1");
  this.ba.add(600, function() {
    this.Qg(function() {
      va("bgmBoss", j)
    })
  });
  this.ba.add(600, "misumi")
}, Gf:function() {
  this.$.va.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,30%)"}, {offset:1, color:"hsl(230,50%,15%)"}]).toStyle()
}});
A = {la:function() {
  Aa(256);
  la = {};
  A.explosion = Array.range(0, 2).map(function(a) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + a, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  la.explodeL = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  A.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  A.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  A.particle16 = F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, td:function(a, b, c) {
  a = A.particle16.clone().setPosition(a, b).addChildTo(c);
  b = S(5, 20);
  c = S(Math.PI, 2 * Math.PI);
  a.na = Math.cos(c) * b;
  a.oa = Math.sin(c) * b;
  a.scaleX = a.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
  a.addEventListener("enterframe", function() {
    this.x += this.na;
    this.y += this.oa;
    this.na *= 0.9;
    this.oa *= 0.9
  })
}, li:function(a, b, c) {
  var f = tm.app.Sprite().setPosition(a, b).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  f.image = A.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, ph:function(a, b, c) {
  a = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(a, b).setScale(0.1, 0.1);
  a.Wa = j;
  a.addChildTo(c);
  a.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(a))
}, qd:function(a, b, c, f) {
  P("explode");
  a = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  a.Wa = j;
  if(f !== i) {
    var g = f.x, k = f.y;
    a.addEventListener("enterframe", function() {
      this.x += g;
      this.y += k;
      g *= 0.99;
      k *= 0.99
    })
  }
  a.addChildTo(c)
}, eh:function(a, b, c) {
  P("explode");
  var f = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  f.Wa = j;
  f.addChildTo(c);
  f = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a + 12, b).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.Wa = j;
  f.addChildTo(c);
  f = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a - 12, b).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.Wa = j;
  f.addChildTo(c)
}, pd:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), g = 0;20 > g;g++) {
    var k = A.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === g % 2 ? "lighter" : "source-over").setPosition(a, b).gotoAndPlay();
    k.a = 2 * Math.PI * Math.random();
    k.v = 10 * Math.pow(T.at(~~(T.length * g / 20) + f), 2);
    k.Wa = j;
    k.addChildTo(c)
  }
}, lf:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), g = 0;20 > g;g++) {
    for(var k = 2 * Math.PI * g / 20, p = Math.pow(T.at(~~(T.length * g / 20) + f), 2), r = 0;3 > r;r++) {
      var t = 4 * p * (r + 1), s = la.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ha && (this.blendMode = "source-over");
        this.ha += 1
      }).setScale(0.3 * (3 - r)).setBlendMode("lighter").setPosition(a, b).gotoAndPlay();
      s.rotation = 2 * Math.random() * Math.PI;
      s.Wa = j;
      s.alpha = 0.2;
      s.ha = 0;
      s.a = k;
      s.v = t;
      s.addChildTo(c)
    }
  }
}};
H = tm.createClass({superClass:tm.app.Object2D, target:l, ac:0, angle:0, alpha:1, Wa:j, reverse:m, init:function(a, b) {
  this.superInit();
  this.target = a;
  this.reverse = b;
  this.angle = 0;
  this.ac = b ? 0 : 200;
  this.alpha = b ? 1 : 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;9 > a;a++) {
      var b = this.angle + 2 * a / 9 * Math.PI;
      F(80, this.alpha, 0.9).setPosition(Math.cos(b) * this.ac + this.target.x, Math.sin(b) * this.ac + this.target.y).addChildTo(this.target.parent)
    }
    this.angle += 0.05;
    this.ac += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.ac || 200 < this.ac) && this.remove()
  }
}});
fa = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, Wa:j, init:function(a) {
  this.superInit();
  this.target = a;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;5 > a;a++) {
      F(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + V(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + V(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
ma = tm.createClass({superClass:tm.graphics.Canvas, $:l, lc:l, Va:l, init:function(a) {
  this.superInit("#scoreLabel");
  this.$ = a;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.lc = Ba(200);
  this.Va = na(this)
}, update:function() {
  this.clear();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.$.Mb !== l && (this.fillRect(5, this.Va.Hb - 20, 470 * this.$.Mb.sa / this.$.Mb.oc, 10), this.clear(263.5, this.Va.Hb - 20, 2, 10), this.clear(52, this.Va.Hb - 20, 2, 10));
  var a;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.$.score)).padding(16, " ");
  a = "";
  for(var b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, this.Va.Hb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.$.Fa)).padding(8, " ");
  a = "";
  for(b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, this.Va.Ic + 192, 22);
  a = [0, 1, 4][this.$.aa.type];
  for(b = 0;b < this.$.Sb - 1;b++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * a, 64, 64, 5 + 32 * b, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.ma.xa.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.$.Oc + " hit", this.Va.Ic + 10, 95);
  0 < ~~this.$.za && (this.setText("bold 40px Orbitron", "left", "top"), this.strokeText(~~this.$.za + " HIT!!", 10, -this.Va.Hb + 115));
  for(b = 0;b < this.$.mb;b++) {
    this.fillRect(480 - 25 * (b + 1) - 20, 615, 20, 20)
  }
  this.lc.update();
  this.lc.Ee = this.Va.Hb + 5;
  this.lc.draw(this)
}});
na = tm.createClass({superClass:tm.app.Object2D, Ya:l, Ic:0, Hb:0, init:function(a) {
  this.superInit();
  this.Ya = a
}});
(function() {
  var a = 16 * Math.sqrt(3), b = 12.8 * Math.sqrt(3);
  oa = tm.createClass({superClass:tm.graphics.Canvas, fa:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.fa = pa();
    this.fa.va = this;
    this.fa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(c) {
    this.fa.na = Math.cos(this.fa.direction) * this.fa.speed;
    this.fa.oa = Math.sin(this.fa.direction) * this.fa.speed;
    for(this.fa.qb += this.fa.na;96 < this.fa.qb;) {
      this.fa.qb -= 96
    }
    for(;-96 > this.fa.qb;) {
      this.fa.qb += 96
    }
    for(this.fa.sb += this.fa.oa;2 * a < this.fa.sb;) {
      this.fa.sb -= 2 * a
    }
    for(;this.fa.sb < 2 * -a;) {
      this.fa.sb += 2 * a
    }
    for(this.fa.rb += 0.8 * this.fa.na;25.6 * 3 < this.fa.rb;) {
      this.fa.rb -= 25.6 * 3
    }
    for(;this.fa.rb < -25.6 * 3;) {
      this.fa.rb += 25.6 * 3
    }
    for(this.fa.tb += 0.8 * this.fa.oa;2 * b < this.fa.tb;) {
      this.fa.tb -= 2 * b
    }
    for(;this.fa.tb < 2 * -b;) {
      this.fa.tb += 2 * b
    }
    0 === c % 2 && this.draw()
  }, draw:function() {
    this.fa.background !== l ? this.clearColor(this.fa.background, 0, 0) : this.clear();
    this.lineWidth = 0.3;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    this.beginPath();
    for(var c = 0, f = this.fa.qb - 96;576 > f;f += 48) {
      for(var c = 0 === c ? a : 0, g = this.fa.sb - 2 * a + c;g < 640 + 2 * a;g += 2 * a) {
        this.line(f, g, f + 32, g), this.line(f, g, f - 16, g + a), this.line(f, g, f - 16, g - a)
      }
    }
    this.stroke();
    this.lineWidth = 0.2;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,0.6)"}, {offset:1, color:"rgba(255,255,255,0.3)"}]).toStyle();
    this.beginPath();
    c = 0;
    for(f = this.fa.rb - 25.6 * 3;f < 480 + 25.6 * 3;f += 25.6 * 1.5) {
      c = 0 === c ? b : 0;
      for(g = this.fa.tb - 2 * b + c;g < 640 + 2 * b;g += 2 * b) {
        this.line(f, g, f + 25.6, g), this.line(f, g, f - 12.8, g + b), this.line(f, g, f - 12.8, g - b)
      }
    }
    this.stroke()
  }});
  pa = tm.createClass({superClass:tm.app.Object2D, qb:0, sb:0, rb:0, tb:0, direction:0, speed:0, na:0, oa:0, background:l, init:function() {
    this.superInit();
    this.rb = this.tb = this.qb = this.sb = 0;
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.oa = this.na = 0
  }})
})();
I = tm.createClass({superClass:tm.app.Sprite, uf:m, $:l, aa:l, wb:m, Jc:m, He:m, na:0, oa:0, init:function(a) {
  this.superInit("star", 20, 20);
  (this.uf = a) && this.setScale(2, 2);
  this.$ = B.cd;
  this.aa = this.$.aa;
  this.addChildTo(this.$);
  a = 0.5 * w.random() * Math.PI - 0.75 * Math.PI;
  this.na = 30 * Math.cos(a);
  this.oa = 30 * Math.sin(a)
}, update:function() {
  this.aa.pb && (this.Jc = j);
  if(this.aa.parent === l) {
    this.Jc = m
  }else {
    if(100 > Q(this, this.aa)) {
      this.$.zh(this);
      this.remove();
      return
    }
    1E4 > Q(this, this.aa) && (this.Jc = j);
    if(this.He && this.Jc) {
      var a = Math.atan2(this.aa.y - this.y, this.aa.x - this.x);
      this.x += 10 * Math.cos(a);
      this.y += 10 * Math.sin(a)
    }else {
      this.He || (this.x += this.na, this.y += this.oa, this.na *= 0.8, this.oa *= 0.8, -1 < this.na && (1 > this.na && -1 < this.oa && 1 > this.oa) && (this.He = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
qa = tm.createClass({superClass:I, wb:m, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
ra = tm.createClass({superClass:I, wb:j, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.Jc || (this.x += this.$.va.na, this.y += this.$.va.oa);
  this.superClass.prototype.update.call(this)
}});
function W(a, b) {
  if(a.parent === l || b.parent === l) {
    return m
  }
  var c = a.x + a.boundingWidthRight, f = a.y - a.boundingHeightTop, g = a.y + a.boundingHeightBottom, k = b.x - b.boundingWidthLeft, p = b.y - b.boundingHeightTop, r = b.y + b.boundingHeightBottom;
  return a.x - a.boundingWidthLeft < b.x + b.boundingWidthRight && c > k && f < r && g > p
}
;var X = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Xh:function(a, b) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = b
}, finish:function(a) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(a)
}});
var Ca = tm.createClass({superClass:X, titleText:l, menu:l, descriptions:l, showExit:m, title:l, selections:[], description:l, box:l, cursor:l, we:l, _selected:0, _opened:m, _finished:m, init:function(a, b, c) {
  this.superInit();
  this.titleText = a;
  this.menu = b;
  this._selected = ~~c.defaultValue;
  this.showExit = c.showExit;
  this.descriptions = c.menuDescriptions;
  this.showExit && (b.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.we = c.onCursorMove;
  a = Math.max(50 * (1 + b.length), 50) + 40;
  this.box = tm.app.RectangleShape(384, a, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"hsla(220,50%,30%,0.8)"}).setPosition(240, 320);
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.we !== l && this.parent.we(this.s))
  }
}, update:function(a) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(a.frame / 2) % 2 : this.showExit && a.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") ? this.closeDialog(this._selected) : a.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = R(this._selected, 0, this.selections.length - 1), P("select")) : a.keyboard.getKeyDown("up") && (this._selected -= 1, 
  this._selected = R(this._selected, 0, this.selections.length - 1), P("select")))
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
function Y(a, b, c, f, g) {
  g = {}.$extend({menuDescriptions:[].concat(c), showExit:j, defaultValue:0, onCursorMove:n()}, g);
  a.Xh(Ca(b, c, g), f)
}
;F = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, ae:0.85, size:0, image:l, Wa:j, init:function(a, b, c, f) {
  this.superInit();
  this.width = this.height = this.size = a;
  b !== i && (this.alpha = b);
  c !== i && (this.ae = c);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.ae;
  0.001 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return F(this.size, this.oi, this.ae, this.image)
}});
ea = tm.createClass({superClass:F, va:l, init:function(a, b) {
  b = b || 20;
  this.superInit(b, 1, 0.82, tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element);
  this.va = a
}, update:function(a) {
  this.superClass.prototype.update.apply(this, a);
  this.x += this.va.na;
  this.y += this.va.oa + 0.3
}, clone:function(a) {
  return ea(this.va, a)
}});
var Ba = tm.createClass({width:0, label:l, Ra:l, ha:0, Df:0, Ee:0, init:function(a) {
  this.width = a;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Ra = [];
  this.Df = 480 - this.width - 5;
  this.Ee = 5
}, Pg:function(a, b) {
  b === j && (this.Ra.clear(), this.Ra.push(""));
  5 < this.Ra.length && this.Ra.splice(1, this.Ra.length - 4);
  this.Ra.push(a);
  return this
}, Vg:function() {
  this.Ra.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var a = this.label.text, a = a.substring(0, a.length - 1);
  if(0 !== this.Ra.length) {
    if("" !== this.Ra[0]) {
      var b = this.Ra[0][0];
      this.Ra[0] = this.Ra[0].substring(1);
      a += b
    }else {
      this.Ra.shift(), b = a.split("\n"), 3 < b.length && (b.shift(), a = b.join("\n")), a += "\n"
    }
  }
  this.label.text = a + (0 === this.ha % 2 ? "_" : " ");
  this.ha += 1
}, draw:function(a) {
  a.save();
  a.context.globalCompositeOperation = "source-over";
  a.translate(this.Df, this.Ee);
  a.fillStyle = "rgba(1,2,48,0.5)";
  a.fillRect(0, 0, this.width, 64);
  a.translate(5, 5);
  a.fillStyle = "rgba(255,255,255,0.5)";
  a.setText(this.label.fontStyle, this.label.align, this.label.baseline);
  this.label._lines.each(function(b, c) {
    a.fillText(b, 0, this.label.textSize * c)
  }.bind(this));
  a.restore()
}});
function Aa(a) {
  function b(b) {
    if(1 > b) {
      return l
    }
    var f = [], d = Math.random(), g, k;
    for(k = 0;k < a;k += ~~b) {
      g = Math.random();
      for(var p = 0;p < b;p++) {
        f[k + p] = c(d, g, p / b)
      }
      d = g
    }
    d = f[a - ~~b];
    g = f[0];
    for(p = 0;p < b;p++) {
      f[a - ~~b + p] = c(d, g, p / b)
    }
    return f
  }
  function c(a, c, b) {
    b = 0.5 * (1 - Math.cos(b * Math.PI));
    return a * (1 - b) + c * b
  }
  for(var f = [], g = 0, k = Math.pow(2, 4);8 > g;g++, k *= 2) {
    var p = b(a / k);
    if(p === l) {
      break
    }
    f.push(p)
  }
  p = [].concat(f[0]);
  g = 1;
  for(k = 0.5;g < f.length;g++, k *= 0.5) {
    for(var r = 0;r < a;r++) {
      p[r] += f[g][r] * k
    }
  }
  for(g = 0;g < p.length;g++) {
    p[g] /= 2
  }
  return p
}
var T;
w = {index:-1, data:l, la:n(), random:function() {
  return Math.random()
}, rand:function(a, b) {
  return Math.floor(this.random() * (b - a + 1)) + a
}, randf:function(a, b) {
  return this.random() * (b - a) + a
}};
(function() {
  var a = l, b = l;
  v = tm.createClass({superClass:X, result:l, ha:0, Qc:[], sd:m, rf:l, wf:0, zd:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.rf = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.sd = m;
      for(var a = ("" + Math.floor(u.vd)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.rf.text = "HIGH SCORE: " + b.trim()
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.We(80 * Math.cos(0.01 * this.ha) + 240, 80 * Math.sin(0.01 * this.ha) + 320, 0);
    this.We(80 * Math.cos(0.01 * this.ha + Math.PI) + 240, 80 * Math.sin(0.01 * this.ha + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) && !this.sd && this.Cf();
    this.ha += 1
  }, We:function(c, f, g) {
    if(!this.sd) {
      a === l && (a = F(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === l && (b = F(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? a.clone().addChildTo(this) : b.clone().addChildTo(this);
      g.speed = 0.6;
      var k = S(0, 2 * Math.PI), p = V(0, 20);
      g.setPosition(Math.cos(k) * p + c, Math.sin(k) * p + f);
      var r = this;
      g.update = function() {
        this.x += Math.cos(k) * this.speed;
        this.y += Math.sin(k) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = r.Qc.indexOf(this);
          -1 !== a && r.Qc.splice(a, 1)
        }
      };
      this.Qc.push(g)
    }
  }, Cf:function() {
    Y(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.Gh, {defaultValue:this.wf, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, Gh:function(a) {
    4 !== a && (this.wf = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.sd = j;
          for(var a = 0, c = this.Qc.length;a < c;a++) {
            this.Qc[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          u.replaceScene(sa())
        }.bind(this));
        break;
      case 2:
        this.Pb();
        break;
      case 3:
        u.dh()
    }
  }, Pb:function() {
    Y(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Ae, {defaultValue:this.zd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Ae:function(a) {
    3 !== a && (this.zd = a);
    switch(a) {
      case 0:
        this.Be();
        break;
      case 1:
        this.Ce();
        break;
      case 2:
        this.Oh();
        break;
      default:
        this.Cf()
    }
  }, Be:function() {
    Y(this, "BGM VOLUME", "012345".split(""), this.ye, {defaultValue:u.Ac, onCursorMove:function(a) {
      N !== l && "exit" !== a && (N.volume = 0.1 * a)
    }, showExit:m})
  }, ye:function(a) {
    6 !== a && (u.Ac = a);
    this.Pb()
  }, Ce:function() {
    Y(this, "SE VOLUME", "012345".split(""), this.ze, {defaultValue:u.bc, showExit:m})
  }, ze:function(a) {
    6 !== a && (u.bc = a);
    this.Pb()
  }, Oh:function() {
    Y(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Fh, {defaultValue:u.jf, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Fh:function(a) {
    5 !== a && (u.jf = a);
    this.Pb()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  sa = tm.createClass({superClass:X, fc:l, gc:l, hc:l, re:l, pe:l, type:0, style:0, Yb:m, init:function() {
    this.superInit();
    tm.app.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.Sh();
    this.Rh();
    this.ve(0);
    P("voSelectShip")
  }, Sh:function() {
    this.re = tm.app.Label("Type-A").setPosition(120, 150);
    this.re.addChildTo(this);
    var a = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u5f37\u529b\u306a\u96d1\u9b5a\u6383\u8a0e\u80fd\u529b"];
    this.se = tm.app.Label(a[0], 16).setPosition(120, 500);
    this.se.update = function() {
      this.se.text = a[this.type]
    }.bind(this);
    this.se.addChildTo(this);
    this.pe = tm.app.Label("Shot Style").setPosition(360, 150);
    this.pe.addChildTo(this);
    var b = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(30, 150).setRotation(-90);
    b.update = function(a) {
      this.setScale(a.keyboard.getKey("left") ? 2 : 1)
    };
    b.addChildTo(this);
    b = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(210, 150).setRotation(90);
    b.update = function(a) {
      this.setScale(a.keyboard.getKey("right") ? 2 : 1)
    };
    b.addChildTo(this);
    b = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(360, 120).setRotation(0);
    b.update = function(a) {
      this.setScale(a.keyboard.getKey("up") ? 2 : 1)
    };
    b.addChildTo(this);
    b = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(360, 180).setRotation(180);
    b.update = function(a) {
      this.setScale(a.keyboard.getKey("down") ? 2 : 1)
    };
    b.addChildTo(this);
    b = tm.app.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.fc = tm.app.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.gc = tm.app.AnimationSprite(b, 64, 64).gotoAndPlay("typeB");
    this.hc = tm.app.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.fc.ib = 0;
    this.gc.ib = 1;
    this.hc.ib = 2;
    this.fc.setScale(3).setPosition(0, 320).addChildTo(this);
    this.gc.setPosition(0, 320).addChildTo(this);
    this.hc.setPosition(0, 320).addChildTo(this);
    this.fc.update = function() {
      this.x = 120 + 60 * Math.sin(2 * this.ib / 3 * Math.PI)
    };
    this.gc.update = function() {
      this.x = 120 + 60 * Math.sin(2 * this.ib / 3 * Math.PI)
    };
    this.hc.update = function() {
      this.x = 120 + 60 * Math.sin(2 * this.ib / 3 * Math.PI)
    }
  }, Rh:function() {
    this.xc = tm.app.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(360, 384).addChildTo(this);
    this.Db = tm.app.Object2D();
    this.Db.addChildTo(this.xc);
    this.Db.update = function(a) {
      this.Db.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.ra = [];
    this.ra[0] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ra[0].update = function() {
      0 === this.type ? this.ra[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.ra[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.ra[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.ra[1] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ra[1].update = function() {
      0 === this.type ? this.ra[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.ra[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.ra[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.ra[2] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ra[2].update = function() {
      0 === this.type ? this.ra[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.ra[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.ra[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.ra[3] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ra[3].update = function() {
      0 === this.type ? this.ra[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.ra[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.ra[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.xc.line = a(0, 0, 0, 130, 8);
    this.xc.line.addChildTo(this.xc);
    this.ra.each(function(b) {
      b.line = a(0, 0, 0, 130, 5);
      b.line.addChildTo(b);
      b.addChildTo(this.Db)
    }.bind(this));
    var b = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3059\u308b\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.qe = tm.app.Label(b[0], 16).setPosition(360, 500);
    this.qe.update = function() {
      this.qe.text = b[this.style]
    }.bind(this);
    this.qe.addChildTo(this)
  }, Ad:m, update:function(a) {
    !this.Ad && a.keyboard.getKeyDown("left") ? (this.ve(-1), P("select")) : !this.Ad && a.keyboard.getKeyDown("right") ? (this.ve(1), P("select")) : a.keyboard.getKeyDown("up") ? this.style = (this.style - 1 + 3) % 3 : a.keyboard.getKeyDown("down") ? this.style = (this.style + 1 + 3) % 3 : (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) && this.Kh();
    this.Yh(0 === ~~(a.frame / 60) % 2)
  }, Kh:function() {
    Y(this, "AUTO BOMB", ["on", "off"], this.Bh, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:m})
  }, Bh:function(a) {
    this.Yb = 0 === a;
    this.Lh()
  }, Lh:function() {
    Y(this, "ARE YOU READY?", ["ok", "no"], this.Ch, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059", "\u6a5f\u4f53\u9078\u629e\u306b\u623b\u308a\u307e\u3059"], showExit:m})
  }, Ch:function(a) {
    0 === a && this.Uh()
  }, ve:function(a) {
    this.Ad = j;
    this.type = (this.type + a + 3) % 3;
    [this.fc, this.gc, this.hc][this.type].remove().addChildTo(this);
    this.fc.tweener.clear().to({ib:this.fc.ib - a, scaleX:0 === this.type ? 3 : 1, scaleY:0 === this.type ? 3 : 1}, 300);
    this.gc.tweener.clear().to({ib:this.gc.ib - a, scaleX:1 === this.type ? 3 : 1, scaleY:1 === this.type ? 3 : 1}, 300);
    this.hc.tweener.clear().to({ib:this.hc.ib - a, scaleX:2 === this.type ? 3 : 1, scaleY:2 === this.type ? 3 : 1}, 300);
    this.tweener.clear().wait(310).call(function() {
      this.Ad = m
    }.bind(this));
    this.re.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Uh:function() {
    u.$.Yb = this.Yb;
    u.$.start(this.type, this.style);
    u.replaceScene(u.$)
  }, Yh:function(a) {
    this.pe.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    a ? (this.ra[0].visible = j, this.ra[1].visible = j, 1 === this.style ? (this.ra[2].visible = m, this.ra[3].visible = m) : (this.ra[2].visible = j, this.ra[3].visible = j), this.xc.line.lineWidth = 5) : (this.ra.each(function(a) {
      a.visible = m
    }), this.xc.line.lineWidth = 0 === this.style ? 10 : 20)
  }, draw:function(a) {
    a.clearColor(tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle());
    a.lineWidth = 1;
    a.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    a.beginPath();
    for(var f = 0, g = -48;528 > g;g += 24) {
      for(var f = 0 === f ? b : 0, k = 2 * -b + f;k < 640 + 2 * b;k += 2 * b) {
        a.line(g, k, g + 16, k), a.line(g, k, g - 8, k + b), a.line(g, k, g - 8, k - b)
      }
    }
    a.stroke();
    a.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    a.fillRect(10, 10, 460, 620)
  }});
  var a = tm.createClass({superClass:tm.app.CanvasElement, init:function(a, b, g, k, p) {
    this.superInit();
    this.angle = g - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = k;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = p
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
  }}), b = 8 * Math.sqrt(3)
})();
B = tm.createClass({superClass:X, aa:l, score:0, Fa:0, za:0, Oc:0, Ba:0, Nb:0, Kf:0, Jf:l, va:l, Sb:3, Gd:0, Hd:0, xb:0, od:0, Pc:0, ue:0, Yb:m, mb:0, Bc:0, Tg:6, qc:m, vb:0, Ua:0, pa:m, Lc:0, pc:0, ua:0, ud:l, De:l, kf:l, ie:l, je:l, de:l, xh:l, ab:l, Ya:l, Mb:l, Fc:m, wh:m, init:function() {
  B.cd !== l && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  B.cd = this;
  this.Ya = ma(this);
  this.Ya.Va.addChildTo(this);
  this.va = oa().fa;
  this.va.addChildTo(this);
  this.ud = B.Vb().addChildTo(this);
  this.kf = B.Vb().addChildTo(this);
  this.ie = B.Vb().addChildTo(this);
  this.De = B.Vb().addChildTo(this);
  this.je = B.Vb().addChildTo(this);
  this.de = B.Vb().addChildTo(this);
  this.xh = B.Qe(this).addChildTo(this);
  tm.Sa.Tb.Ec.Ze = this;
  this.ab = tm.app.Object2D();
  this.ab.addChildTo(this);
  this.ab.update = function(a) {
    this.Ih(a)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Ya.clear()
  })
}, addChild:function(a) {
  a.Wa ? this.ie.addChild(a) : a instanceof J ? this.de.addChild(a) : a instanceof I ? this.ud.addChild(a) : a instanceof K ? a.wb ? this.ud.addChild(a) : this.kf.addChild(a) : a instanceof D ? this.De.addChild(a) : a === this.ab || a === this.va || a instanceof B.Vb || a instanceof B.Qe || a instanceof na ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(a)))
}, update:function(a) {
  this.Ph(a.keyboard);
  0 === a.frame % 500 && (T = Aa(512));
  this.Jf.update(a.frame);
  0 === a.frame % 2 && this.Ya.update();
  a.keyboard.getKeyDown("escape") ? (this.app.replaceScene(v()), O()) : a.keyboard.getKeyDown("space") ? this.Bd(0) : a.keyboard.getKeyDown("p") && (this.If().saveAsImage(), this.Bd(0))
}, If:function() {
  var a = tm.graphics.Canvas();
  a.resize(480, 640);
  a.clearColor("black");
  a.drawImage(this.va.va.element, 0, 0);
  a.drawImage(this.app.canvas.element, 0, 0);
  a.drawImage(this.Ya.element, 0, 0);
  return a
}, Ih:function() {
  this.aa.Eb === m && z.erase();
  var a;
  a = [].concat(K.La);
  for(var b = [].concat(E.La), c = b.length;b[--c] !== i;) {
    for(var f = a.length;a[--f] !== i;) {
      var g = a[f], k = b[c];
      if(!(0 >= g.sa) && W(g, k) && (k.td(1), k.remove(), g.Fb(this.pa ? C.tg : C.wg))) {
        this.xb += 1;
        this.pa ? this.Pa(C.ng) : this.Pa(C.mg);
        this.xe(g);
        break
      }
    }
  }
  k = this.aa.yb;
  if(this.aa.pb) {
    a = [].concat(K.La);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = a.length;a[--f] !== i;) {
      if(g = a[f], !(0 >= g.sa) && W(g, k)) {
        k.Qh(g.y + g.boundingHeightBottom);
        g.Fb(k.be) ? (this.xb += 1, this.pa ? this.Pa(C.lg) : this.Pa(C.ig), this.xe(g)) : (this.pa ? this.Lb(0.01 * this.ua) : this.Lb(0.01), this.Ba = Math.max(this.Ba, 0.05), this.pa ? this.Pa(C.kg) : this.Pa(C.jg));
        k.td(2);
        break
      }
    }
    b = {x:this.aa.x, y:this.aa.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(K.La);
    for(f = a.length;a[--f] !== i;) {
      g = a[f], !(0 >= g.sa) && W(g, b) && (g.Fb(k.be) ? (this.xb += 1, this.pa ? this.Pa(C.hg) : this.Pa(C.eg), this.xe(g)) : (this.pa ? this.Lb(0.01 * this.ua) : this.Lb(0.01), this.Ba = Math.max(this.Ba, 0.05), this.pa ? this.Pa(C.gg) : this.Pa(C.fg)), k.oh(2, this.aa.x, this.aa.y - 30))
    }
  }
  if(this.qc) {
    z.erase();
    a = [].concat(K.La);
    for(f = a.length;a[--f] !== i;) {
      g = a[f], !(0 >= g.sa) && (g.Mc() && g.Fb(C.Rf)) && (this.Cb(g.score), this.xb += 1)
    }
    this.Ba = this.za = 0
  }
  if(this.pa) {
    f = [].concat(E.La);
    for(g = f.length;f[--g] !== i;) {
      if(k = f[g], !(0 >= k.sa)) {
        b = [].concat(J.La);
        for(a = b.length;b[--a] !== i;) {
          c = b[a], 0 < k.sa && W(k, c) && (c.sa -= 6 - this.Ua, 0 > c.sa && (c.ob(), this.Cb(C.Tf), this.Lb(1), this.qf(m, m, c.x, c.y, 1)), k.sa -= 1)
        }
      }
    }
  }
  if(this.Fc) {
    z.erase()
  }else {
    if(this.aa.parent !== l && this.aa.sc === m && this.qc === m && 0 >= this.Lc) {
      for(f = J.La.length;J.La[--f] !== i;) {
        if(a = J.La[f], W(a, this.aa)) {
          this.aa.Fb();
          0 < this.mb && this.Yb ? (this.Ua = R(this.Ua - 1, 0, 1), q.ma.xa.$rank = R(q.ma.xa.$rank - 0.01, 0, 1), ha(this.aa, this).setPosition(this.aa.x, this.aa.y).addChildTo(this)) : this.Af();
          break
        }
      }
      for(f = K.La.length;K.La[--f] !== i;) {
        if(g = K.La[f], !(0 >= g.sa) && !g.wb && W(g, this.aa)) {
          this.aa.Fb();
          0 < this.mb && this.Yb ? (this.Ua = R(this.Ua - 1, 0, 1), q.ma.xa.$rank = R(q.ma.xa.$rank - 0.01, 0, 1), ha(this.aa, this).setPosition(this.aa.x, this.aa.y).addChildTo(this)) : this.Af();
          break
        }
      }
    }
    this.pa && (this.pc -= 1, 0 >= this.pc && this.nd());
    this.Lc = Math.max(this.Lc - 1, 0);
    this.Ba -= C.Wf * C.Xf;
    0 >= this.Ba && (this.Ba = 0, this.pa || 0 < this.ua ? this.Nb = this.za = this.Fa = 0 : (0 < this.za && (0 >= this.Nb && (this.Nb = this.za * C.Vf), this.Fa = this.Fa * (this.za - this.Nb) / this.za, this.za -= this.Nb), 0 >= this.za && (this.Nb = this.za = this.Fa = 0)))
  }
}, xe:function(a) {
  this.qf(a.wb, this.pa || Q(a, this.aa) < C.Zf, a.x, a.y, a.star);
  this.pa ? 6 > this.ua ? this.Lb(10) : this.Lb(20) : this.Lb(1);
  for(var b = this.Fa, c = ~~(this.za / C.Uf) + 1, f = 0;f < c;f++) {
    b += a.score, this.Cb(b)
  }
  this.Fa += a.score * c
}, qf:function(a, b, c, f, g) {
  a = a ? ra : qa;
  for(var k = 0;k < g;k++) {
    a(b).setPosition(c, f)
  }
}, zh:function(a) {
  P("star");
  a.uf ? (this.Hd += 1, this.Cb(C.Bg), this.Cb(0.2 * this.Fa), this.Fa += C.zg, this.pa ? this.Pa(C.rg) : this.Pa(C.qg)) : (this.Gd += 1, this.Cb(C.Ag), this.Cb(0.1 * this.Fa), this.Fa += C.yg, this.pa ? this.Pa(C.pg) : this.Pa(C.og))
}, start:function(a, b) {
  this.Ya.lc.Vg().clear();
  this.score = 0;
  this.Sb = C.Ne;
  this.mb = this.Bc = C.Me;
  this.ua = this.Ua = this.vb = 0;
  q.ma.xa.$rank = 0;
  this.nd();
  this.qc = m;
  this.Pc = this.ue = 0;
  this.aa = D(this, a, b);
  this.Lf(0);
  P("voLetsGo");
  this.Wh()
}, Lf:function(a) {
  this.Na("3...2...1...");
  this.aa.parent !== l && this.aa.remove();
  K.Cc();
  E.Cc();
  z.Cc();
  this.ud.removeChildren();
  this.ie.removeChildren();
  this.je.removeChildren();
  this.De.removeChildren();
  this.de.removeChildren();
  this.ab.removeChildren();
  this.xb = this.od = this.Hd = this.Gd = this.Oc = this.Ba = this.za = this.Fa = 0;
  this.Mb = l;
  this.wh = this.Fc = m;
  this.Pc = 0;
  this.Ya.Va.Ic = 0;
  this.Ya.Va.Hb = 0;
  this.Kf = a;
  this.Jf = G.create(this, a);
  this.tweener.clear().wait(1E3).call(function() {
    this.te()
  }.bind(this))
}, te:function() {
  this.Na("Let's go!");
  this.aa.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.aa.yb.addChildTo(this);
  this.aa.Eb = m;
  this.aa.sc = j;
  this.aa.Hc = m;
  this.aa.pb = m;
  this.aa.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Eb = j
  }.bind(this.aa)).wait(2E3).call(function() {
    this.sc = m
  }.bind(this.aa))
}, Af:function() {
  A.qd(this.aa.x, this.aa.y, this);
  this.Na("I was shot down.");
  this.aa.Eb = m;
  this.aa.remove();
  this.Sb -= 1;
  this.ua = this.Nb = this.za = this.Ba = 0;
  this.Pc += 1;
  this.ue += 1;
  this.Ua = R(this.Ua - 3, 0, 1);
  q.ma.xa.$rank = R(q.ma.xa.$rank - 0.03, 0, 1);
  0 < this.Sb ? this.tweener.clear().wait(1E3).call(function() {
    this.Yb || (this.Bc = Math.min(this.Bc + 1, this.Tg));
    this.mb = this.Bc;
    this.te()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.Nh()
  }.bind(this))
}, mh:function() {
  this.Na("System rebooted.", j);
  this.score = 0;
  this.Sb = C.Ne;
  this.mb = this.Bc = C.Me;
  this.Ua = 0;
  q.ma.xa.$rank = 0;
  this.te()
}, Wg:function() {
  va("bgmResult");
  var a = tm.app.Object2D();
  a.addChildTo(this.ab);
  a.tweener.wait(1E3).call(function() {
    this.app.pushScene(ta(this, this.If()));
    a.remove()
  }.bind(this))
}, nh:function() {
  O();
  this.app.replaceScene(Da())
}, ki:n(), Cb:function(a) {
  var b = this.score;
  this.score += a;
  for(a = 0;a < u.mf.length;a++) {
    var c = u.mf[a];
    b < c && c <= this.score && this.gh()
  }
  u.vd = Math.max(u.vd, this.score)
}, Lb:function(a) {
  this.pa && (a *= C.Yf * this.Ua);
  this.Nb = 0;
  this.za += a;
  this.Oc = Math.max(this.Oc, this.za);
  1 <= a && (this.Ba = 1)
}, Pa:function(a) {
  if(this.ua !== C.Od) {
    for(a *= C.sg;1 < a;) {
      H(this.aa).addChildTo(this), a -= 1, this.vb = 0, this.ua += 1, 1 === this.ua ? (this.Na("HYPER SYSTEM, stand by.", j), P("voHyperStandBy")) : (this.Na("HYPER SYSTEM, ready.", j), P("voHyperReady"))
    }
    this.vb = R(this.vb + a, 0, 1);
    1 <= this.vb && (H(this.aa).addChildTo(this), this.ua += 1, this.vb -= 1, 1 === this.ua ? (this.Na("HYPER SYSTEM, stand by.", j), P("voHyperStandBy")) : (this.Na("HYPER SYSTEM, ready.", j), P("voHyperReady")))
  }
}, Vh:function() {
  0.5 > Math.random() ? (this.Na("HYPER SYSTEM start!!", j), P("voHyperStart0")) : (this.Na("start counting to system limit.", j), P("voHyperStart1"));
  this.Ua = R(this.Ua + 1, 0, 5);
  q.ma.xa.$rank = R(q.ma.xa.$rank + 0.01 * this.ua, 0, 1);
  q.ma.xa.$hyperOff = C.ag;
  this.pc = C.$c;
  this.Lc = C.$c * C.dg;
  this.aa.xd.vc(this.ua);
  this.aa.yb.vc(this.ua);
  this.aa.mc = this.aa.xd;
  A.ph(this.aa.x, this.aa.y, this);
  this.pa = j;
  this.vb = this.ua = 0;
  z.erase(j, j)
}, nd:function() {
  this.pa !== m && (this.pa = m, H(this.aa, j).addChildTo(this), this.aa.mc = this.aa.Bf, this.aa.yb.uc("blue"), q.ma.xa.$hyperOff = 1, this.aa.xd.vc(0), this.aa.yb.vc(0), this.Lc = C.$c * C.cg, this.pc = 0, z.erase())
}, gh:function() {
  P("voExtend");
  this.Na("extended.");
  this.Sb += 1
}, Na:function(a, b) {
  this.Ya.lc.Pg(a, b)
}, Bd:function(a) {
  Y(this, "PAUSE", ["resume", "setting", "exit game"], this.Hh, {defaultValue:a, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:m})
}, Hh:function(a) {
  switch(a) {
    case 1:
      this.Pb();
      break;
    case 2:
      this.Mh()
  }
}, Pb:function() {
  Y(this, "SETTING", ["bgm volume", "sound volume"], this.Ae, {defaultValue:this.zd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Ae:function(a) {
  3 !== a && (this.zd = a);
  switch(a) {
    case 0:
      this.Be();
      break;
    case 1:
      this.Ce();
      break;
    default:
      this.Bd()
  }
}, Mh:function() {
  Y(this, "REARY?", ["yes", "no"], this.Dh, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:m})
}, Dh:function(a) {
  0 === a ? (O(), this.app.replaceScene(v())) : this.Bd(1)
}, Be:function() {
  Y(this, "BGM VOLUME", "012345".split(""), this.ye, {defaultValue:u.Ac, onCursorMove:function(a) {
    N !== l && 6 !== a && (N.volume = 0.1 * a)
  }, showExit:m})
}, ye:function(a) {
  6 !== a && (u.Ac = a);
  this.Pb(1)
}, Ce:function() {
  Y(this, "SE VOLUME", "012345".split(""), this.ze, {defaultValue:u.bc, showExit:m})
}, ze:function(a) {
  6 !== a && (u.bc = a);
  this.Pb(1)
}, Nh:function() {
  Y(this, "CONTINUE?", ["yes", "no"], this.Eh, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:m})
}, Eh:function(a) {
  switch(a) {
    case 0:
      this.mh();
      break;
    case 1:
      this.nh()
  }
}, draw:n(), Th:function() {
  this.Ya.Va.tweener.clear().to({Ic:-480}, 1600, "easeInQuad").to({Hb:22}, 800, "easeInOutQuad")
}, rh:function() {
  this.Ya.Va.tweener.clear().to({Hb:0}, 800, "easeInOutQuad").to({Ic:0}, 1600, "easeOutQuad")
}, Sc:l, Tc:0, Nc:l, ad:0, Wh:function() {
  if(1 === this.ad) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.Nc = [];
      for(var a = ~~localStorage.getItem("recCount"), b = 0;b < a;b++) {
        localStorage.removeItem("rec" + b)
      }
      localStorage.removeItem("recCount")
    }
    this.Sc = [];
    this.Tc = 0
  }else {
    if(2 === this.ad && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.Nc = [];
      a = ~~localStorage.getItem("recCount");
      for(b = 0;b < a;b++) {
        for(var c = localStorage.getItem("rec" + b).split(","), f = 0;f < c.length;f++) {
          this.Nc.push(c[f])
        }
      }
    }
  }
}, Ph:function(a) {
  if(1 === this.ad) {
    1E3 < this.Sc.length && (console.log("save"), localStorage.setItem("rec" + this.Tc, this.Sc), localStorage.setItem("recCount", this.Tc), this.Sc = [], this.Tc += 1), this.Sc.push("" + ~~a.getKey("up") + ~~a.getKey("down") + ~~a.getKey("left") + ~~a.getKey("right") + ~~a.getKey("z") + ~~a.getKey("x") + ~~a.getKey("c"))
  }else {
    if(2 === this.ad && this.Nc) {
      var b = this.Nc.shift();
      b !== i && (a.getKey = function(a) {
        return"up" === a ? !!~~b[0] : "down" === a ? !!~~b[1] : "left" === a ? !!~~b[2] : "right" === a ? !!~~b[3] : "z" === a ? !!~~b[4] : "x" === a ? !!~~b[5] : "c" === a ? !!~~b[6] : m
      }, a.getKeyDown = function(a) {
        return"up" === a ? !!~~b[0] : "down" === a ? !!~~b[1] : "left" === a ? !!~~b[2] : "right" === a ? !!~~b[3] : "z" === a ? !!~~b[4] : "x" === a ? !!~~b[5] : "c" === a ? !!~~b[6] : m
      })
    }
  }
}});
B.Vb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
B.Qe = tm.createClass({superClass:tm.app.CanvasElement, $:l, frame:0, init:function(a) {
  this.superInit();
  this.$ = a;
  this.blendMode = "lighter"
}, update:function(a) {
  this.frame = a.frame
}, draw:function(a) {
  this.Zg(a);
  this.$g(a)
}, Zg:function(a) {
  if(0 < this.$.Ba) {
    a.fillStyle = "rgba(255," + ~~(255 * this.$.Ba) + "," + ~~Math.min(255, 512 * this.$.Ba) + ",0.5)";
    var b = 500 * this.$.Ba;
    a.fillRect(465, 635 - b, 10, b)
  }
}, $g:function(a) {
  a.fillStyle = "rgba(255,255,0,0.1)";
  a.fillRect(5, 628, 200, 9);
  this.ua === C.Od ? 1 === this.frame % 2 && (a.fillStyle = "rgba(255,255,255,0.3)", a.fillRect(5, 628, 200, 9)) : 0 < this.$.vb && (a.fillStyle = "rgba(255,255,100,0.3)", a.fillRect(5, 628, 200 * this.$.vb, 9));
  0 < this.$.ua && 0 === this.frame % 2 && (a.setText("bold 24px Orbitron", "left", "bottom"), a.strokeStyle = "rgba(255,255,100,0.5)", a.strokeText("hyper level " + this.$.ua, 5, 637))
}});
B.cd = l;
(function() {
  ta = tm.createClass({superClass:X, $:l, Ff:l, ab:l, values:l, labels:l, yd:l, Ef:[1E3, 2E3, 4E3, 1E3, 1], tf:l, Fe:l, cursor:0, wait:0, init:function(a, c) {
    this.superInit();
    this.$ = a;
    this.values = [this.$.Gd, this.$.Hd, ~~(100 * (this.$.xb / this.$.od)), this.$.Oc, 0 === this.$.Pc ? 1E5 : 0];
    this.yd = this.values.map(function(a) {
      return 0.01 * a
    });
    tm.app.Label("RESULT", 40).setPosition(240, 64).addChildTo(this);
    tm.app.Label("STAR (S)").setAlign("right").setBaseline("middle").setPosition(240, 128).addChildTo(this);
    tm.app.Label("STAR (L)").setAlign("right").setBaseline("middle").setPosition(240, 192).addChildTo(this);
    tm.app.Label("KILL RATIO").setAlign("right").setBaseline("middle").setPosition(240, 256).addChildTo(this);
    tm.app.Label("MAX HIT").setAlign("right").setBaseline("middle").setPosition(240, 320).addChildTo(this);
    tm.app.Label("NO MISS BONUS", 20).setAlign("right").setBaseline("middle").setPosition(240, 384).addChildTo(this);
    tm.app.Label("TOTAL SCORE").setAlign("right").setBaseline("middle").setPosition(240, 448).addChildTo(this);
    this.labels = [];
    for(var f = 0;f < this.values.length;f++) {
      this.labels[f] = tm.app.Label("" + Math.floor(this.values[f]) + (2 === f ? "%" : ""), 30).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 640 * (0.2 + 0.1 * f)).addChildTo(this)
    }
    this.tf = tm.app.Label(Math.floor(this.$.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
    this.Fe = tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.Fe.visible = m;
    this.background = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle();
    this.Ff = c;
    for(var g = [], f = 0;12 > f;f++) {
      g[f] = [];
      for(var k = 0;16 > k;k++) {
        g[f][k] = {Ge:0, Ed:0, Ke:S(-2, 2), Vc:S(1, 4)}
      }
    }
    this.ab = tm.app.Object2D();
    this.ab.draw = function(a) {
      for(var b = j, c = 0;c < g.length;c++) {
        for(var f = 0;f < g[c].length;f++) {
          var d = g[c][f];
          640 > 40 * f + d.Ed && (a.drawImage(this.Ff.element, 40 * c, 40 * f, 40, 40, 40 * c + d.Ge, 40 * f + d.Ed, 40, 40), d.Ge += d.Ke, d.Ed += d.Vc, d.Vc += 0.3, b = m)
        }
      }
      b ? (this.ab.remove(), console.log("this.lastElement.remove"), this.wait = 60) : this.wait = 100
    }.bind(this);
    this.ab.addChildTo(this);
    this.addEventListener("exit", function() {
      wa()
    })
  }, update:function(a) {
    this.wait -= 1;
    if(!(0 < this.wait)) {
      var c = this.cursor;
      if(c < this.values.length) {
        P("star"), this.values[c] <= this.yd[c] || a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") ? (this.$.Cb(this.values[c] * this.Ef[c]), this.values[c] = 0, this.cursor += 1, this.wait = 30) : (this.$.Cb(this.yd[c] * this.Ef[c]), this.values[c] -= this.yd[c]), this.labels[c].text = "" + Math.floor(this.values[c]) + (2 === c ? "%" : ""), this.tf.text = Math.floor(this.$.score)
      }else {
        if(this.Fe.visible = j, a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) {
          this.$.Lf(this.$.Kf + 1), a.popScene()
        }
      }
    }
  }, draw:function(b) {
    b.clearColor(this.background);
    b.lineWidth = 1;
    b.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    b.beginPath();
    for(var c = 0, f = -48;528 > f;f += 24) {
      for(var c = 0 === c ? a : 0, g = 2 * -a + c;g < 640 + 2 * a;g += 2 * a) {
        b.line(f, g, f + 16, g), b.line(f, g, f - 8, g + a), b.line(f, g, f - 8, g - a)
      }
    }
    b.stroke();
    b.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    b.fillRect(20, 20, 440, 600)
  }});
  var a = 8 * Math.sqrt(3)
})();
var Da = tm.createClass({superClass:X, init:function() {
  this.superInit();
  var a = tm.app.Label("GAME OVER");
  a.fillStyle = "red";
  a.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(v())
    }.bind(this))
  })
}, update:function(a) {
  a.keyboard.getKeyDown("z") && a.replaceScene(v())
}, draw:function(a) {
  a.clearColor("black")
}});
tm.createClass({superClass:X, init:function() {
  this.superInit()
}, update:n()});
(function() {
  var a = {kujo:[2, 300, m, m, 1], kiryu:[3, 400, m, m, 1], natsuki:[5, 900, j, m, 1], kise:[35, 15E3, j, m, 1], kurokawa:[35, 5E3, m, m, 5], akimoto:[250, 3E5, m, j, 10], yukishiro:[750, 8E5, m, j, 20], misumi:[4E3, 2E6, m, j, 0]};
  K = tm.createClass({superClass:tm.app.CanvasElement, name:l, aa:l, $:l, sa:0, score:0, wb:m, erase:m, star:1, vh:m, $b:j, Gb:m, frame:0, Kd:l, direction:0, speed:0, ya:l, init:function(a, f, g) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Gb = m;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.$b = j;
    this.$ = a;
    this.aa = a.aa;
    this.score = 100;
    this.erase = m;
    this.Og(g);
    f.la(this);
    this.altitude = this.wb ? 1 : 10;
    this.Kd = {x:0, y:0}
  }, Ah:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, qi:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Gb === m && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Gb = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.wb && (this.x += this.$.va.na, this.y += this.$.va.oa);
    this.Gb && (this.frame += 1);
    this.Kd.x = this.x - a;
    this.Kd.y = this.y - b
  }, Fb:function(a) {
    if(!this.Gb) {
      return m
    }
    this.sa -= a;
    return 0 >= this.sa ? (a = S(0, 5), 2 > a ? this.$.Na("enemy destroy.") : 4 > a ? this.$.Na(this.name + " destroy.") : this.$.Na("ETR reaction gone."), this.erase && z.erase(j, this.$.pa), this.dispatchEvent(tm.event.Event("destroy")), this.ob(), j) : m
  }, ob:function() {
    A.qd(this.x, this.y, this.$, this.Kd);
    this.remove()
  }, Mc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Jh:function() {
    return this.$b
  }, Og:function(b) {
    this.name = b;
    this.sa = a[b][0];
    this.score = a[b][1];
    this.wb = a[b][2];
    this.erase = a[b][3];
    this.star = a[b][4]
  }, nf:function() {
    this.remove();
    this.wb = j;
    this.$.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && A.qd(this.x + V(-100, 100), this.y + V(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      A.lf(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }, Ug:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && A.qd(this.x + V(-100, 100), this.y + V(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      A.lf(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }});
  K.Cc = function() {
    for(var a = [].concat(b), f = 0, g = a.length;f < g;f++) {
      a[f].remove()
    }
  };
  var b = K.La = []
})();
ua = tm.createClass({superClass:K, vh:j, oc:0, Fd:l, init:function(a, b, c) {
  this.Fd = b;
  this.superInit(a, this.Fd[0], c);
  this.oc = this.sa;
  this.addEventListener("added", function() {
    this.$.Mb = this;
    this.$.Th();
    this.tweener.wait(1E3).call(function() {
      this.$.Fc = m
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.$.Mb = l;
    this.$.rh();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.$.Wg()
    }.bind(this));
    a.addChildTo(this.$.ab)
  })
}, Fb:function(a) {
  var b = this.sa;
  if(K.prototype.Fb.call(this, a)) {
    return this.$.Fc = j, wa(), j
  }
  this.sa <= 0.55 * this.oc && 0.55 * this.oc < b ? (L.Jd(this), this.clearEventListener("completeattack"), this.tweener.clear(), A.pd(this.x, this.y, this.$), z.erase(j, this.$.pa), this.Fd[1].la(this)) : this.sa <= 0.1 * this.oc && 0.1 * this.oc < b && (L.Jd(this), this.clearEventListener("completeattack"), this.tweener.clear(), A.pd(this.x, this.y, this.$), z.erase(j, this.$.pa), this.Fd[2].la(this), P("voJacms"))
}});
(function() {
  K.Ga = tm.createClass({superClass:K, Ka:l, init:function(b, c) {
    this.superInit(b, c, "kujo");
    this.Ka = a("tex_stage1", 64, 64);
    this.boundingRadius = 24
  }, update:function(a) {
    K.prototype.update.call(this, a);
    this.scaleX = this.x < this.aa.x ? -1 : 1
  }, draw:function(a) {
    this.Ka.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  K.ga = tm.createClass({superClass:K, Ka:l, init:function(b, c) {
    this.superInit(b, c, "kiryu");
    this.Ka = a("tex_stage1", 64, 64);
    this.boundingRadius = 24
  }, update:function(a) {
    K.prototype.update.call(this, a);
    this.scaleX = this.x < this.aa.x ? -1 : 1
  }, draw:function(a) {
    this.Ka.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  K.Ha = tm.createClass({superClass:K, Xb:l, Zd:l, init:function(b, c) {
    this.superInit(b, c, "natsuki");
    this.Xb = a("tex_tank1", 64, 64);
    this.Zd = a("tex_tank1", 64, 64);
    this.kc = this.kc || 0;
    this.nb = this.nb || 0;
    this.boundingRadius = 24
  }, update:function(a) {
    K.prototype.update.call(this, a);
    this.Xb.setFrameIndex(~~(16 * this.kc / (2 * Math.PI)), 64, 64);
    this.Zd.setFrameIndex(~~(16 * this.nb / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Xb.draw(a);
    this.Zd.draw(a)
  }, ob:function() {
    A.eh(this.x, this.y, this.$);
    this.remove()
  }});
  K.Ub = tm.createClass({superClass:K, Xb:l, init:function(b, c) {
    this.superInit(b, c, "kurokawa");
    this.Ka = a("tex_stage1", 128, 128).setFrameIndex(1);
    this.boundingWidth = 100;
    this.boundingHeight = 20
  }, draw:function(a) {
    this.Ka.draw(a)
  }, ob:function() {
    A.pd(this.x, this.y, this.$);
    this.remove()
  }});
  K.Oe = tm.createClass({superClass:K, init:function(b, c) {
    this.superInit(b, c, "akimoto");
    this.Ka = a("tex_stage1", 256, 128).setFrameIndex(1);
    this.boundingWidth = 200;
    this.boundingHeightBottom = 10;
    this.boundingHeightTop = 60
  }, draw:function(a) {
    this.Ka.draw(a)
  }, ob:function() {
    this.nf()
  }});
  K.wa = tm.createClass({superClass:K, Xb:l, init:function(b, c) {
    this.superInit(b, c, "kise");
    this.Ka = a("tex_stage1", 128, 128).setFrameIndex(5);
    this.boundingHeight = this.boundingWidth = 20
  }, draw:function(a) {
    this.Ka.draw(a)
  }, ob:function() {
    A.pd(this.x, this.y, this.$);
    this.remove()
  }});
  K.Pd = tm.createClass({superClass:K, Xb:l, init:function(b, c) {
    this.superInit(b, c, "yukishiro");
    this.Ka = a("tex_stage1", 256, 128).setFrameIndex(3);
    this.setScale(1.5);
    this.boundingWidth = 200;
    this.boundingHeight = 80
  }, ob:function() {
    this.nf()
  }, draw:function(a) {
    this.Ka.draw(a)
  }});
  K.Rd = tm.createClass({superClass:ua, Xb:l, init:function(b, c) {
    this.superInit(b, c, "misumi");
    this.Ka = a("tex_stage1", 256, 128).setFrameIndex(4);
    this.setScale(1.5);
    this.boundingWidth = 200;
    this.boundingHeight = 80
  }, draw:function(a) {
    this.Ka.draw(a)
  }, ob:function() {
    this.Ug()
  }});
  var a = tm.createClass({superClass:tm.app.Sprite, init:function(a, c, f) {
    this.superInit(a, c, f)
  }, draw:function(a) {
    var c = this.srcRect;
    a.context.drawImage(this._image.element, c.x, c.y, c.width, c.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }})
})();
(function() {
  L = tm.createClass({la:function(a) {
    a.on("destroy", function() {
      L.Jd(this)
    })
  }});
  L.fb = function(a, c) {
    console.log("attack(" + a.name + ", " + c + ")");
    var f = z[c].md();
    a.on("enterframe", f);
    a.on("completeattack", function() {
      this.removeEventListener("enterframe", f)
    })
  };
  L.Jd = function(a) {
    var c = [].concat(a._listeners.enterframe);
    if(c) {
      for(var f = 0, g = c.length;f < g;f++) {
        c[f] && c[f].ne && a.removeEventListener("enterframe", c[f])
      }
    }
  };
  L.eb = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.on("launch", function() {
      var a = w.randf(64, 192);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
        L.fb(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  L.eb = L.eb();
  L.Aa = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.on("launch", function() {
      var a = w.randf(192, 320);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
        L.fb(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  L.Aa = L.Aa();
  L.Jb = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.on("launch", function() {
      var a = w.randf(448, 576);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
        L.fb(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  L.Jb = L.Jb();
  L.ga = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Ie = w.rand(0, 60);
    a.speed = 0;
    a.on("enterframe", function() {
      this.frame === this.Ie ? this.speed = 8 : this.frame === this.Ie + 10 ? L.fb(this, "basic1-0") : this.Ie < this.frame && this.y < this.aa.y && (this.angle += Math.atan2(this.aa.y - this.y, this.aa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = R(this.angle, 0.5, Math.PI - 0.5));
      this.x += Math.cos(this.angle) * this.speed;
      this.y += Math.sin(this.angle) * this.speed;
      !this.Mc() && this.Gb && this.remove();
      if(9E4 > Q(this, this.aa) || this.y > this.aa.y) {
        this.$b = m
      }
    })
  }});
  L.ga = L.ga();
  var a = tm.createClass({superClass:L, init:function(a, c, f) {
    this.superInit();
    this.uh = a;
    this.th = c;
    this.ge = f
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.speed = this.uh;
    a.kc = this.th;
    a.nb = 0;
    a.on("enter", function() {
      L.fb(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.kc) * this.speed;
      this.y += Math.sin(this.kc) * this.speed;
      this.Gb && !this.Mc() && this.remove();
      for(this.nb = Math.atan2(this.aa.y - this.y, this.aa.x - this.x);0 > this.nb;) {
        this.nb += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.nb;) {
        this.nb -= 2 * Math.PI
      }
      this.$b = this.y < this.aa.y;
      if(this.ge) {
        for(var a = 0;a < this.ge.length;a++) {
          var b = this.ge[a];
          b.frame === this.frame && this.tweener.to({kc:b.dir, speed:b.speed}, 500)
        }
      }
    })
  }});
  L.jb = a(1, 0.25 * Math.PI);
  L.bi = a(1, -1.75 * Math.PI);
  L.yc = a(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  L.wa = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.on("enter", function() {
      L.fb(this, "basic3-0")
    });
    a.on("enterframe", function() {
      this.Gb && !this.Mc() && this.remove();
      this.$b = this.y < this.aa.y
    })
  }});
  L.wa = L.wa();
  a = tm.createClass({superClass:L, velocityY:0, $e:l, init:function(a, c) {
    this.superInit();
    this.velocityY = a;
    this.$e = c
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.velocityY = this.velocityY;
    a.ya = [this.$e];
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      L.fb(this, this.ya[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Gb && !this.Mc() && this.remove();
      this.$b = this.y < this.aa.y
    })
  }});
  L.Wb = a(0.5, "kurokawa-1");
  L.Re = a(0.3, "komachi-1");
  a = tm.createClass({superClass:L, ya:l, init:function(a) {
    this.superInit();
    this.ya = a
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.ya = [].concat(this.ya);
    a.Id = m;
    a.Gc = m;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Id = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 192 + 0.5 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Id === m || 0 >= this.sa) && 1500 < this.frame && this.Gc === m) {
        this.Gc = j, this.Jd.call(this), this.tweener.clear().move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!this.Gc) {
        var a = this.ya.shift();
        L.fb(this, a);
        this.ya.push(a)
      }
    })
  }});
  L.Pd = a(["honoka-1"]);
  L.Rd = tm.createClass({superClass:L, ya:l, init:function() {
    this.superInit();
    this.ya = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.ya = [].concat(this.ya);
    a.Id = m;
    a.Gc = m;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Id = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!this.Gc) {
        var a = this.ya.shift();
        L.fb(this, a);
        this.ya.push(a)
      }
    })
  }});
  L.vg = L.Rd();
  L.Sd = tm.createClass({superClass:L, ya:l, init:function() {
    this.superInit();
    this.ya = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.ya = [].concat(this.ya);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      var a = this.ya.shift();
      L.fb(this, a);
      this.ya.push(a)
    })
  }});
  L.Sd = L.Sd();
  L.Td = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, la:function(a) {
    L.prototype.la.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      L.fb(this, "nagisa-3-1")
    })
  }});
  L.Td = L.Td()
})();
var Z = K, $ = L;
ja = {"heri1-left":[{da:Z.ga, ea:$.eb, x:48, y:-100}, {da:Z.ga, ea:$.Aa, x:96, y:-100}, {da:Z.ga, ea:$.eb, x:144, y:-100}, {da:Z.ga, ea:$.Aa, x:192, y:-100}, {da:Z.ga, ea:$.eb, x:240, y:-100}], "heri1-center":[{da:Z.ga, ea:$.eb, x:144, y:-100}, {da:Z.ga, ea:$.Aa, x:192, y:-100}, {da:Z.ga, ea:$.eb, x:240, y:-100}, {da:Z.ga, ea:$.Aa, x:288, y:-100}, {da:Z.ga, ea:$.eb, x:336, y:-100}], "heri1-right":[{da:Z.ga, ea:$.eb, x:240, y:-100}, {da:Z.ga, ea:$.Aa, x:288, y:-100}, {da:Z.ga, ea:$.eb, x:336, y:-100}, 
{da:Z.ga, ea:$.Aa, x:384, y:-100}, {da:Z.ga, ea:$.eb, x:432, y:-100}], "heri1-left2":[{da:Z.ga, ea:$.Aa, x:48, y:-100}, {da:Z.ga, ea:$.Jb, x:96, y:-100}, {da:Z.ga, ea:$.Aa, x:144, y:-100}, {da:Z.ga, ea:$.Jb, x:192, y:-100}, {da:Z.ga, ea:$.Aa, x:240, y:-100}], "heri1-center2":[{da:Z.ga, ea:$.Aa, x:144, y:-100}, {da:Z.ga, ea:$.Jb, x:192, y:-100}, {da:Z.ga, ea:$.Aa, x:240, y:-100}, {da:Z.ga, ea:$.Jb, x:288, y:-100}, {da:Z.ga, ea:$.Aa, x:336, y:-100}], "heri1-right2":[{da:Z.ga, ea:$.Aa, x:240, y:-100}, 
{da:Z.ga, ea:$.Jb, x:288, y:-100}, {da:Z.ga, ea:$.Aa, x:336, y:-100}, {da:Z.ga, ea:$.Jb, x:384, y:-100}, {da:Z.ga, ea:$.Aa, x:432, y:-100}], "heri2-left":[{da:Z.Ga, ea:$.ga, x:48, y:-100}, {da:Z.Ga, ea:$.ga, x:96, y:-100}, {da:Z.Ga, ea:$.ga, x:144, y:-100}, {da:Z.Ga, ea:$.ga, x:192, y:-100}, {da:Z.Ga, ea:$.ga, x:240, y:-100}], "heri2-center":[{da:Z.Ga, ea:$.ga, x:144, y:-100}, {da:Z.Ga, ea:$.ga, x:192, y:-100}, {da:Z.Ga, ea:$.ga, x:240, y:-100}, {da:Z.Ga, ea:$.ga, x:288, y:-100}, {da:Z.Ga, ea:$.ga, 
x:336, y:-100}], "heri2-right":[{da:Z.Ga, ea:$.ga, x:240, y:-100}, {da:Z.Ga, ea:$.ga, x:288, y:-100}, {da:Z.Ga, ea:$.ga, x:336, y:-100}, {da:Z.Ga, ea:$.ga, x:384, y:-100}, {da:Z.Ga, ea:$.ga, x:432, y:-100}], "tankRD-left":[{da:Z.Ha, ea:$.jb, x:78, y:-50}, {da:Z.Ha, ea:$.jb, x:28, y:-100}, {da:Z.Ha, ea:$.jb, x:-22, y:-150}, {da:Z.Ha, ea:$.jb, x:-72, y:-200}, {da:Z.Ha, ea:$.jb, x:-122, y:-250}], "tankRD-center":[{da:Z.Ha, ea:$.jb, x:222, y:-50}, {da:Z.Ha, ea:$.jb, x:172, y:-100}, {da:Z.Ha, ea:$.jb, 
x:122, y:-150}, {da:Z.Ha, ea:$.jb, x:72, y:-200}, {da:Z.Ha, ea:$.jb, x:22, y:-250}], "tankL-top":[{da:Z.Ha, ea:$.yc, x:550, y:64}, {da:Z.Ha, ea:$.yc, x:620, y:64}, {da:Z.Ha, ea:$.yc, x:690, y:64}, {da:Z.Ha, ea:$.yc, x:760, y:64}, {da:Z.Ha, ea:$.yc, x:830, y:64}], "cannon-0":[{da:Z.wa, ea:$.wa, x:48, y:-100}], "cannon-1":[{da:Z.wa, ea:$.wa, x:96, y:-100}], "cannon-2":[{da:Z.wa, ea:$.wa, x:144, y:-100}], "cannon-3":[{da:Z.wa, ea:$.wa, x:192, y:-100}], "cannon-4":[{da:Z.wa, ea:$.wa, x:240, y:-100}], 
"cannon-5":[{da:Z.wa, ea:$.wa, x:288, y:-100}], "cannon-6":[{da:Z.wa, ea:$.wa, x:336, y:-100}], "cannon-7":[{da:Z.wa, ea:$.wa, x:384, y:-100}], "cannon-8":[{da:Z.wa, ea:$.wa, x:432, y:-100}], "fighter-m-0":[{da:Z.Ub, ea:$.Wb, x:96, y:-192}], "fighter-m-1":[{da:Z.Ub, ea:$.Wb, x:144, y:-192}], "fighter-m-2":[{da:Z.Ub, ea:$.Wb, x:192, y:-192}], "fighter-m-3":[{da:Z.Ub, ea:$.Wb, x:240, y:-192}], "fighter-m-4":[{da:Z.Ub, ea:$.Wb, x:288, y:-192}], "fighter-m-5":[{da:Z.Ub, ea:$.Wb, x:336, y:-192}], "fighter-m-6":[{da:Z.Ub, 
ea:$.Wb, x:384, y:-192}], "komachi-0":[{da:Z.Oe, ea:$.Re, x:144, y:-192}], "komachi-1":[{da:Z.Oe, ea:$.Re, x:336, y:-192}], yukishiro:[{da:Z.Pd, ea:$.Pd, x:240, y:-100}], misumi:[{da:Z.Rd, ea:[$.vg, $.Sd, $.Td], x:240, y:-100, Mb:j}]};
(function() {
  function a(a, b, c, f) {
    return d.action([f(a), d.repeat(c, [f(d.speed(b, "sequence"))])])
  }
  function b(a, b, c, f, g, k, p) {
    return d.action([d.ja(d.direction(b, "absolute"), f, g, k, p), d.repeat(a + "-1", [d.ja(d.direction("((" + c + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g, k, p)])])
  }
  function c(a, b, c, f, g, k, p) {
    return d.action([d.ja(d.direction(b), f, g, k, p, i), d.repeat(a + "-1", [d.ja(d.direction("((" + c + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g, k, p, i)])])
  }
  function f(a) {
    return d.ja(d.direction(0), a || p, d.ca({frame:0}))
  }
  function g(a) {
    return d.ja(d.direction(0), a || p, d.ca)
  }
  function k(a) {
    return d.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return d.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return d.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function t(a) {
    return d.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return d.wait(a + "*(1-$rank)*$hyperOff")
  }
  z = {};
  var d = q.qa;
  z["basic0-0"] = new q.ta({top:d.action([g])});
  z["basic0-4"] = new q.ta({top:d.action([d.repeat(3, [d.repeat(5, [d.ja(d.direction(-20), d.speed("$loop.count*0.06+0.75"), d.ca), d.ja(d.direction(0), d.speed("$loop.count*0.06+0.75"), d.ca), d.ja(d.direction(20), d.speed("$loop.count*0.06+0.75"), d.ca)]), s(40)])])});
  z["basic1-0"] = new q.ta({top:d.action([d.repeat(999, [s(20), g(k)])])});
  z["basic2-0"] = new q.ta({top:d.action([d.wait("120"), d.repeat(999, [s(50), g(p)])])});
  z["basic3-0"] = new q.ta({top:d.action([d.wait(20), d.repeat(999, [s(100), f(p(0)), f(p(1)), f(p(2))])])});
  z["kurokawa-1"] = new q.ta({top0:d.action([d.repeat(999, [a(k, 0.01, 4, function(a) {
    return c(4, -45, 45, a, d.ca({frame:2}), d.offsetX(-45), d.Qa(j))
  }), a(k, 0.01, 4, function(a) {
    return c(4, -45, 45, a, d.ca({frame:2}), d.offsetX(45), d.Qa(j))
  }), s(90)])]), top1:d.action([d.repeat(999, [d.ja(d.direction(0), k, d.ca({ia:j, frame:3}), d.offsetX(-45), d.Qa(j)), s(45), d.ja(d.direction(0), k, d.ca({ia:j, frame:3}), d.offsetX(45), d.Qa(j)), s(45)])])});
  z["komachi-1"] = new q.ta({top0:d.action([d.repeat(20, [d.ja(d.direction(210, "absolute"), t(1), d.ca, d.offsetX(-40)), d.ja(d.direction(120, "sequence"), t(1), d.ca, d.offsetX(-40)), d.ja(d.direction(120, "sequence"), t(1), d.ca, d.offsetX(-40)), d.repeat(57, [s(8), d.ja(d.direction(-720 / 57, "sequence"), t(1), d.ca, d.offsetX(-40)), d.ja(d.direction(120, "sequence"), t(1), d.ca, d.offsetX(-40)), d.ja(d.direction(120, "sequence"), t(1), d.ca, d.offsetX(-40))])])]), top1:d.action([d.repeat(20, 
  [d.ja(d.direction(-210, "absolute"), t(1), d.ca, d.offsetX(40)), d.ja(d.direction(120, "sequence"), t(1), d.ca, d.offsetX(40)), d.ja(d.direction(120, "sequence"), t(1), d.ca, d.offsetX(40)), d.repeat(57, [s(8), d.ja(d.direction(720 / 57, "sequence"), t(1), d.ca, d.offsetX(40)), d.ja(d.direction(120, "sequence"), t(1), d.ca, d.offsetX(40)), d.ja(d.direction(120, "sequence"), t(1), d.ca, d.offsetX(40))])])]), top2:d.action([d.repeat(70, [d.ja(d.direction(0), p(0), d.ca({ia:j, frame:0}), d.offsetX(-110), 
  d.Qa(j)), d.repeat(3, [d.wait(3), d.ja(d.direction(0, "sequence"), p(0), d.ca({ia:j, frame:0}), d.offsetX(-110), d.Qa(j))]), s(10), d.ja(d.direction(0), p(0), d.ca({ia:j, frame:0}), d.offsetX(110), d.Qa(j)), d.repeat(3, [d.wait(3), d.ja(d.direction(0, "sequence"), p(0), d.ca({ia:j, frame:0}), d.offsetX(110), d.Qa(j))]), s(10)])])});
  z["honoka-1"] = new q.ta({top0:d.action([d.wait(60), d.repeat(10, [c(6, -40, 40, p, d.ca({ia:j, frame:4}), d.offsetX(0), d.offsetY(30)), s(30), c(7, -40, 40, r, d.ca({ia:j, frame:4}), d.offsetX(0), d.offsetY(30)), s(30)])]), top1:d.action([d.wait(60), d.repeat(5, [c(2, -2, 2, r(2), d.ca({frame:1})), c(3, -3, 3, r(3), d.ca({frame:1})), c(4, -4, 4, r(4), d.ca({frame:1})), c(5, -5, 5, r(5), d.ca({frame:1})), s(110)])]), top2:d.action([d.repeat(20, [b(12, -10, -170, t, d.ca({ia:j, frame:0}), d.offsetX(-110), 
  d.offsetY(-70)), s(30)])]), top3:d.action([d.repeat(20, [b(12, 10, 170, t, d.ca({ia:j, frame:0}), d.offsetX(110), d.offsetY(-70)), s(30)])])});
  z["nagisa-1-1"] = new q.ta({top0:d.action([s(60), d.repeat(3, [d.Sg(), a(p, 0.04, "3 + $loop.index", function(a) {
    return d.action([c("$way", -50, 50, a, d.ca, d.offsetX(-190), d.offsetY(-20)), c("$way", -50, 50, a, d.ca, d.offsetX(190), d.offsetY(-20)), d.wait(5)])
  }), s(60)]), s(60)])});
  z["nagisa-1-2"] = new q.ta({top0:d.action([d.repeat(12, [c(15, -90, 90, t, d.ca), s(40)])]), top1:d.action([d.repeat(3, [d.repeat(3, [c(5, -65, -55, r, d.ca({frame:0, ia:j}), d.offsetX(-190), d.offsetY(-20)), c(5, -35, -25, r, d.ca({frame:0, ia:j}), d.offsetX(-190), d.offsetY(-20)), c(5, -5, 5, r, d.ca({frame:0, ia:j}), d.offsetX(-190), d.offsetY(-20)), c(5, 25, 35, r, d.ca({frame:0, ia:j}), d.offsetX(-190), d.offsetY(-20)), c(5, 55, 65, r, d.ca({frame:0, ia:j}), d.offsetX(-190), d.offsetY(-20)), 
  d.wait(2)]), s(60), d.repeat(3, [c(5, -65, -55, r, d.ca({frame:0, ia:j}), d.offsetX(190), d.offsetY(-20)), c(5, -35, -25, r, d.ca({frame:0, ia:j}), d.offsetX(190), d.offsetY(-20)), c(5, -5, 5, r, d.ca({frame:0, ia:j}), d.offsetX(190), d.offsetY(-20)), c(5, 25, 35, r, d.ca({frame:0, ia:j}), d.offsetX(190), d.offsetY(-20)), c(5, 55, 65, r, d.ca({frame:0, ia:j}), d.offsetX(190), d.offsetY(-20)), d.wait(2)]), s(60)])])});
  z["nagisa-1-3"] = new q.ta({top0:d.action([s(60), d.repeat(3, [d.ja(d.direction(-60), r, d.ca({frame:2}), d.offsetX(-190), d.offsetY(-20)), d.repeat(20, [s(15), d.ja(d.direction(6, "sequence"), r, d.ca({frame:2}), d.offsetX(-190), d.offsetY(-20))])])]), top1:d.action([s(80), d.repeat(3, [d.ja(d.direction(60), r, d.ca({frame:2}), d.offsetX(190), d.offsetY(-20)), d.repeat(20, [s(15), d.ja(d.direction(-6, "sequence"), r, d.ca({frame:2}), d.offsetX(190), d.offsetY(-20))])])]), top2:d.action([d.repeat(6, 
  [d.repeat(3, [c(5, -60, -40, r, d.ca({frame:4, ia:j}), d.offsetX(-190), d.offsetY(-20)), c(5, -20, -10, r, d.ca({frame:4, ia:j}), d.offsetX(-190), d.offsetY(-20)), c(5, 10, 20, r, d.ca({frame:4, ia:j}), d.offsetX(-190), d.offsetY(-20)), c(5, 40, 60, r, d.ca({frame:4, ia:j}), d.offsetX(-190), d.offsetY(-20)), d.wait(4)]), s(60), d.repeat(3, [c(5, -60, -40, r, d.ca({frame:4, ia:j}), d.offsetX(190), d.offsetY(-20)), c(5, -20, -10, r, d.ca({frame:4, ia:j}), d.offsetX(190), d.offsetY(-20)), c(5, 10, 
  20, r, d.ca({frame:4, ia:j}), d.offsetX(190), d.offsetY(-20)), c(5, 40, 60, r, d.ca({frame:4, ia:j}), d.offsetX(190), d.offsetY(-20)), d.wait(4)]), s(60)])])});
  z["nagisa-2-1"] = new q.ta({top0:d.action([s(120), d.repeat(36, [b(6, "+$loop.index*10", "+$loop.index*10 + 360", t, d.ca({frame:0}), d.offsetX(-190), d.offsetY(-20)), b(6, "-$loop.index*10", "-$loop.index*10 + 360", t, d.ca({frame:0}), d.offsetX(190), d.offsetY(-20)), s(10)])]), top1:d.action([s(120), d.repeat(30, [b(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, d.ca({frame:3, ia:j})), b(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, d.ca({frame:3, ia:j})), s(12)])])});
  z["nagisa-2-2"] = new q.ta({top0:d.action([s(120), d.repeat(30, [b(4, "+$loop.index*5", "+$loop.index*5 + 270", p, d.ca({frame:3, ia:j})), s(12)])]), top1:d.action([s(120), d.repeat(6, [b(9, 150, 130, t(0.8), d.ca), b(9, 172, 188, t(0.8), d.ca), b(9, 210, 230, t(0.8), d.ca), s(30), b(9, 170, 150, t(0.8), d.ca), b(9, 190, 210, t(0.8), d.ca), s(30)])])});
  z["nagisa-2-3"] = new q.ta({top:d.action([s(120), d.repeat(12, [b(23, 0, 360, t, d.ca({frame:4, ia:j}), d.offsetX(-190), d.offsetY(-20)), b(23, 0, 360, t, d.ca({frame:4, ia:j})), b(23, 0, 360, t, d.ca({frame:4, ia:j}), d.offsetX(190), d.offsetY(-20)), s(30)])])});
  z["nagisa-3-1"] = new q.ta({top0:d.action([d.repeat(999, [a(r, 0.001, 5, function(a) {
    return d.action([c(17, "-180", "+180", a, d.ca({frame:2, ia:j}), d.offsetX(-190), d.offsetY(-20)), c(17, "-180", "+180", a, d.ca({frame:2, ia:j}), d.offsetX(190), d.offsetY(-20))])
  }), s(50)])]), top1:d.action([d.repeat(999, [c(2, -2, 0, k, d.ca), s(10), c(2, 0, 2, k, d.ca), s(150)])])});
  z.la = function() {
    for(var a = 0;800 > a;a++) {
      U.push(J())
    }
    a = z.ld = tm.Sa.Tb.Ec;
    a.oe = function(a) {
      return!(a instanceof J) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.cf = function(a) {
      var b = U.shift(0);
      if(b) {
        return M.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.ia ? (b.scaleX = 1, b.scaleY = 1, b.Rb = m, b.update = function() {
          this.rotation += 15
        }) : (b.scaleX = 0.8, b.scaleY = 1.5, b.Rb = j), b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.ff = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.dc = 4;
    q.ma.xa.$rank = 0;
    q.ma.xa.$hyperOff = 1
  };
  z.erase = function(a, b) {
    for(var c = [].concat(M), d = 0, f = c.length;d < f;d++) {
      a && qa(!!b).setPosition(c[d].x, c[d].y), c[d].ob()
    }
  };
  z.Cc = function() {
    for(var a = [].concat(M), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  J = tm.createClass({superClass:tm.app.Sprite, sa:0, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("added", function() {
      this.sa = C.Sf
    });
    this.addEventListener("removed", function() {
      U.push(this);
      var a = M.indexOf(this);
      -1 !== a && M.splice(a, 1);
      this.clearEventListener("enterframe")
    })
  }, ob:function() {
    var a = F(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var U = [], M = J.La = []
})();
var R, S, za, V, Ea;
R = function(a, b, c) {
  return a < b ? b : a > c ? c : a
};
Ea = Math.PI / 180;
za = function(a) {
  return a * Ea
};
V = function(a, b) {
  return window.Math.floor(Math.random() * (b - a + 1)) + a
};
S = function(a, b) {
  return window.Math.random() * (b - a) + a
};

