/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(a) {
  throw a;
}
var i = void 0, k = !0, l = null, n = !1;
function p() {
  return function() {
  }
}
var q = {cf:this};
(function() {
  function a(a, c) {
    for(var f = 0, d = a.length;f < d;f++) {
      if(a[f].label == c) {
        return a[f]
      }
    }
  }
  q.ya = function(a) {
    this.type = "none";
    this.root = this;
    this.Da = [];
    this.Pc = [];
    this.Uc = [];
    if(a !== i) {
      for(var c in a) {
        a.hasOwnProperty(c) && (a[c].label = c, a[c] instanceof q.Sa ? this.Da.push(a[c]) : a[c] instanceof q.wb ? this.Pc.push(a[c]) : a[c] instanceof q.Yb && this.Uc.push(a[c]))
      }
      a = 0;
      for(c = this.Da.length;a < c;a++) {
        this.Da[a].Wa(this)
      }
      a = 0;
      for(c = this.Pc.length;a < c;a++) {
        this.Pc[a].Wa(this)
      }
      a = 0;
      for(c = this.Uc.length;a < c;a++) {
        this.Uc[a].Wa(this)
      }
    }
  };
  q.ya.prototype.te = function(b) {
    return a(this.Da, b)
  };
  q.ya.prototype.fg = function() {
    for(var a = [], c = 0, f = this.Da.length;c < f;c++) {
      var d = this.Da[c];
      d.label && 0 === d.label.indexOf("top") && (a[a.length] = d.label)
    }
    return a
  };
  q.ya.prototype.Xf = function(a) {
    var c;
    if(c = this.te(a)) {
      return c
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  q.ya.prototype.Yf = function(b) {
    return a(this.Pc, b)
  };
  q.ya.prototype.Zf = function(a) {
    var c;
    if(c = this.Yf(a)) {
      return c
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  q.ya.prototype.$f = function(b) {
    return a(this.Uc, b)
  };
  q.ya.prototype.ag = function(a) {
    var c;
    if(c = this.$f(a)) {
      return c
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  q.wb = function() {
    this.root = this.label = l;
    this.direction = new q.ob(0);
    this.speed = new q.rb(1);
    this.Da = [];
    this.Ia = {};
    this.ja = {}
  };
  q.wb.prototype.clone = function(a) {
    var c = new q.wb;
    c.label = this.label;
    c.root = this.root;
    c.Da = this.Da;
    c.direction = new q.ob(a.Ga(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new q.rb(a.Ga(this.speed.value));
    c.speed.type = this.speed.type;
    c.Ia = this.Ia;
    c.ja = a.ja;
    return c
  };
  q.wb.prototype.Wa = function(a) {
    this.root = a;
    for(var c = 0, f = this.Da.length;c < f;c++) {
      this.Da[c].Wa(a)
    }
  };
  q.yc = function(a) {
    this.root = l;
    this.label = a;
    this.Ba = []
  };
  q.yc.prototype.clone = function(a) {
    var c = a.ja;
    a.ja = a.qd(this.Ba);
    var f = this.root.Zf(this.label).clone(a);
    a.ja = c;
    return f
  };
  q.yc.prototype.Wa = function(a) {
    this.root = a
  };
  q.Ca = function() {
    this.Na = ""
  };
  q.Ca.prototype.Wa = function(a) {
    this.root = a
  };
  q.Sa = function() {
    this.Na = "action";
    this.root = this.label = l;
    this.Za = [];
    this.Ba = []
  };
  q.Sa.prototype = new q.Ca;
  q.Sa.prototype.Wa = function(a) {
    this.root = a;
    for(var c = 0, f = this.Za.length;c < f;c++) {
      this.Za[c].Wa(a)
    }
  };
  q.Sa.prototype.clone = function() {
    var a = new q.Sa;
    a.label = this.label;
    a.root = this.root;
    a.Za = this.Za;
    return a
  };
  q.Xb = function(a) {
    this.Na = "actionRef";
    this.label = a;
    this.root = l;
    this.Ba = []
  };
  q.Xb.prototype = new q.Ca;
  q.Xb.prototype.clone = function() {
    var a = new q.Sa;
    a.root = this.root;
    a.Za.push(this);
    return a
  };
  q.Yb = function() {
    this.Na = "fire";
    this.fa = this.speed = this.direction = this.root = this.label = l;
    this.Ia = new q.jd
  };
  q.Yb.prototype = new q.Ca;
  q.Yb.prototype.Wa = function(a) {
    this.root = a;
    this.fa && this.fa.Wa(a)
  };
  q.kd = function(a) {
    this.Na = "fireRef";
    this.label = a;
    this.Ba = []
  };
  q.kd.prototype = new q.Ca;
  q.zc = function() {
    this.Na = "changeDirection";
    this.direction = new q.ob;
    this.Ja = 0
  };
  q.zc.prototype = new q.Ca;
  q.Ac = function() {
    this.Na = "changeSpeed";
    this.speed = new q.rb;
    this.Ja = 0
  };
  q.Ac.prototype = new q.Ca;
  q.xc = function() {
    this.Na = "accel";
    this.lb = new q.ld;
    this.nb = new q.od;
    this.Ja = 0
  };
  q.xc.prototype = new q.Ca;
  q.Gc = function(a) {
    this.Na = "wait";
    this.value = a || 0
  };
  q.Gc.prototype = new q.Ca;
  q.nd = function() {
    this.Na = "vanish"
  };
  q.nd.prototype = new q.Ca;
  q.Ec = function() {
    this.Na = "repeat";
    this.Ne = 0;
    this.action = l;
    this.Ba = []
  };
  q.Ec.prototype = new q.Ca;
  q.Ec.prototype.Wa = function(a) {
    this.root = a;
    this.action && this.action.Wa(a)
  };
  q.hd = function(a, c) {
    this.Na = "bind";
    this.Bg = a;
    this.Vf = c
  };
  q.hd.prototype = new q.Ca;
  q.md = function(a, c) {
    this.Na = "notify";
    this.Rf = a;
    this.Ba = c || l
  };
  q.md.prototype = new q.Ca;
  q.af = new q.Ca;
  q.ob = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  q.rb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  q.ld = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.od = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.jd = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.Ka = k;
    a.Ka !== i && (this.Ka = !!a.Ka)
  };
  q.ae = function(a) {
    this.value = a || 0
  };
  q.be = function(a) {
    this.value = a || 0
  };
  q.Wd = function(a) {
    this.value = !!a
  }
})();
q.la = function(a) {
  this.fe = a;
  this.Hc = [];
  this.yb = -1;
  this.Fa = l;
  this.ja = {}
};
q.la.prototype.next = function() {
  this.yb += 1;
  if(this.Fa !== l) {
    var a = this.Fa.Za[this.yb];
    if(a !== i) {
      if(a instanceof q.Sa) {
        return this.hc(), this.Fa = a, this.ja = this.pd(), this.next()
      }
      if(a instanceof q.Xb) {
        return this.hc(), this.Fa = this.fe.Xf(a.label), this.ja = this.qd(a.Ba), this.next()
      }
      if(a instanceof q.Ec) {
        return this.ja.dc = 0, this.ja.De = this.Ga(a.Ne) | 0, this.hc(), this.Fa = a.action.clone(), this.ja = this.pd(), this.next()
      }
      if(a instanceof q.Yb) {
        var b = new q.Yb;
        b.fa = a.fa.clone(this);
        a.direction !== l && (b.direction = new q.ob(this.Ga(a.direction.value)), b.direction.type = a.direction.type);
        a.speed !== l && (b.speed = new q.rb(this.Ga(a.speed.value)), b.speed.type = a.speed.type);
        b.Ia = a.Ia;
        return b
      }
      return a instanceof q.kd ? (this.hc(), this.Fa = new q.Sa, this.Fa.Za = [this.fe.ag(a.label)], this.ja = this.qd(a.Ba), this.next()) : a instanceof q.zc ? (b = new q.zc, b.direction.type = a.direction.type, b.direction.value = this.Ga(a.direction.value), b.Ja = this.Ga(a.Ja), b) : a instanceof q.Ac ? (b = new q.Ac, b.speed.type = a.speed.type, b.speed.value = this.Ga(a.speed.value), b.Ja = this.Ga(a.Ja), b) : a instanceof q.xc ? (b = new q.xc, b.lb.type = a.lb.type, b.lb.value = this.Ga(a.lb.value), 
      b.nb.type = a.nb.type, b.nb.value = this.Ga(a.nb.value), b.Ja = this.Ga(a.Ja), b) : a instanceof q.Gc ? new q.Gc(this.Ga(a.value)) : a instanceof q.nd ? a : a instanceof q.hd ? (this.ja["$" + a.Bg] = this.Ga(a.Vf), q.af) : a instanceof q.md ? a : l
    }
    this.If();
    if(this.Fa === l) {
      return l
    }
    if((a = this.Fa.Za[this.yb]) && "repeat" == a.Na) {
      this.ja.dc++, this.ja.dc < this.ja.De && (this.hc(), this.Fa = a.action.clone(), this.ja = this.pd())
    }
    return this.next()
  }
  return l
};
q.la.prototype.hc = function() {
  this.Hc.push({action:this.Fa, cursor:this.yb, scope:this.ja});
  this.yb = -1
};
q.la.prototype.If = function() {
  var a = this.Hc.pop();
  a ? (this.yb = a.cursor, this.Fa = a.action, this.ja = a.scope) : (this.yb = -1, this.Fa = l, this.ja = {})
};
q.la.prototype.Ga = function(a) {
  var b;
  if("number" === typeof a) {
    return a
  }
  if(isNaN(b = Number(a))) {
    if((b = this.ja[a]) || (b = q.la.ua[a])) {
      return b
    }
    if("$rand" === a) {
      return Math.random()
    }
  }else {
    return b
  }
  b = {};
  for(var c in q.la.ua) {
    q.la.ua.hasOwnProperty(c) && (b[c] = q.la.ua[c])
  }
  for(c in this.ja) {
    this.ja.hasOwnProperty(c) && (b[c] = this.ja[c])
  }
  b.$rand = Math.random();
  (c = this.Hc[this.Hc.length - 1]) && (b.$loop = {index:c.scope.dc, count:c.scope.dc + 1, first:0 === c.scope.dc, last:c.scope.dc + 1 >= c.scope.De});
  return(new Function("return " + a.split("$").join("this.$"))).apply(b)
};
q.la.prototype.qd = function(a) {
  var b = {};
  if(a) {
    for(var c = 0, f = a.length;c < f;c++) {
      b["$" + (c + 1)] = this.Ga(a[c])
    }
  }else {
    for(c in this.ja) {
      this.ja.hasOwnProperty(c) && (b[c] = this.ja[c])
    }
  }
  return b
};
q.la.prototype.pd = function() {
  var a = {}, b;
  for(b in this.ja) {
    this.ja.hasOwnProperty(b) && (a[b] = this.ja[b])
  }
  return a
};
q.ya.prototype.Bd = function(a) {
  var b = new q.la(this);
  if(a = this.te(a)) {
    b.Fa = a
  }
  return b
};
q.wb.prototype.Bd = function() {
  var a = new q.la(this.root), b = new q.Sa;
  b.root = this.root;
  b.Za = this.Da;
  a.Fa = b;
  a.ja = this.ja;
  return a
};
q.la.ua = {};
q.oa = function(a) {
  a = a || "";
  for(var b in q.oa) {
    q.oa.hasOwnProperty(b) && (q.cf[a + b] = q.oa[b])
  }
};
q.oa.action = function(a) {
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
  var f = new q.Sa;
  if(a instanceof Array) {
    a.some(function(a) {
      return!(a instanceof q.Ca)
    }) && g(Error("argument type error.")), f.Za = a
  }else {
    b = 0;
    for(c = arguments.length;b < c;b++) {
      arguments[b] instanceof q.Ca ? f.Za[b] = arguments[b] : g(Error("argument type error."))
    }
  }
  return f
};
q.oa.Hg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("label is required."));
  f = new q.Xb(a);
  if(b instanceof Array) {
    f.Ba = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ba.push(arguments[c])
    }
  }
  return f
};
q.oa.fa = function(a, b, c, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new q.wb;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof q.ob ? j.direction = arguments[d] : arguments[d] instanceof q.rb ? j.speed = arguments[d] : arguments[d] instanceof q.Sa ? j.Da.push(arguments[d]) : arguments[d] instanceof q.Xb ? j.Da.push(arguments[d]) : arguments[d] instanceof Array ? j.Da.push(q.oa.action(arguments[d])) : arguments[d] instanceof Object ? j.Ia = arguments[d] : "string" === typeof arguments[d] && (j.label = arguments[d])
  }
  return j
};
q.oa.Jg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("label is required."));
  f = new q.yc(a);
  if(b instanceof Array) {
    f.Ba = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ba.push(arguments[c])
    }
  }
  return f
};
q.oa.ka = function(a, b, c, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new q.Yb;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof q.ob ? j.direction = arguments[d] : arguments[d] instanceof q.rb ? j.speed = arguments[d] : arguments[d] instanceof q.wb ? j.fa = arguments[d] : arguments[d] instanceof q.yc ? j.fa = arguments[d] : arguments[d] instanceof q.jd ? j.Ia = arguments[d] : arguments[d] instanceof q.ae ? j.Ia.offsetX = arguments[d].value : arguments[d] instanceof q.be ? j.Ia.offsetY = arguments[d].value : arguments[d] instanceof q.Wd && (j.Ia.Ka = arguments[d].value)
  }
  j.fa === i && g(Error("bullet (or bulletRef) is required."));
  return j
};
q.oa.Pg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("label is required."));
  f = new q.kd(a);
  if(b instanceof Array) {
    f.Ba = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ba.push(arguments[c])
    }
  }
  return f
};
q.oa.Kg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("direction is required."));
  b === i && g(Error("term is required."));
  c = new q.zc;
  c.direction = a instanceof q.ob ? a : new q.ob(a);
  c.Ja = b;
  return c
};
q.oa.Lg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("speed is required."));
  b === i && g(Error("term is required."));
  c = new q.Ac;
  c.speed = a instanceof q.rb ? a : new q.rb(a);
  c.Ja = b;
  return c
};
q.oa.Gg = function(a, b, c) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  d = new q.xc;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof q.ld ? d.lb = a : arguments[f] instanceof q.od ? d.nb = b : d.Ja = arguments[f]
  }
  d.lb === i && d.nb === i && g(Error("horizontal or vertical is required."));
  d.Ja === i && g(Error("term is required."));
  return d
};
q.oa.wait = function(a) {
  for(var b = 0, c = arguments.length;b < c;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && g(Error("value is required."));
  return new q.Gc(a)
};
q.oa.Zg = function() {
  return new q.nd
};
q.oa.repeat = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("times is required."));
  b === i && g(Error("action is required."));
  f = new q.Ec;
  f.Ne = a;
  if(b instanceof q.Sa || b instanceof q.Xb) {
    f.action = b
  }else {
    if(b instanceof Array) {
      f.action = q.oa.action(b)
    }else {
      for(var d = [], c = 1;c < arguments.length;c++) {
        d.push(arguments[c])
      }
      f.action = q.oa.action(d)
    }
  }
  return f
};
q.oa.Ig = function(a, b) {
  return new q.hd(a, b)
};
q.oa.Vg = function(a, b) {
  return new q.md(a, b)
};
q.oa.direction = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.ob(a);
  b !== i && (c.type = b);
  return c
};
q.oa.speed = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.rb(a);
  b && (c.type = b);
  return c
};
q.oa.lb = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.ld(a);
  b && (c.type = b);
  return c
};
q.oa.nb = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.od(a);
  b && (c.type = b);
  return c
};
q.oa.Og = function(a) {
  return new q.jd(a)
};
q.oa.offsetX = function(a) {
  return new q.ae(a)
};
q.oa.offsetY = function(a) {
  return new q.be(a)
};
q.oa.Ka = function(a) {
  return new q.Wd(a)
};
tm.Ma = tm.Ma || {};
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
  function b(a, c) {
    return Math.atan2(c.y - a.y, c.x - a.x)
  }
  tm.Ma.Kb = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.ce = a
  }, Rc:function(a, c) {
    var b = this.ce.fg();
    if(c === i && 0 < b.length) {
      for(var f = [], r = 0, w = b.length;r < w;r++) {
        f[f.length] = this.de(a, b[r])
      }
      for(var h = function() {
        for(var a = f.length;a--;) {
          f[a].call(this)
        }
        h.wd == f.length && (h.mc = k, this.dispatchEvent(tm.event.Event("completeattack")))
      }, r = f.length;r--;) {
        f[r].dd = h
      }
      h.wd = 0;
      h.ke = function() {
        this.wd++
      };
      h.wd = 0;
      h.mc = n;
      h.Ed = k;
      return h
    }
    return this.de(a, c)
  }, de:function(a, c) {
    function b() {
      b.ga += 1;
      this.ga = b.ga;
      var a = b.Qc, c = b.Hf;
      if(c) {
        if(b.ga < b.ud ? b.direction += b.ac : b.ga === b.ud && (b.direction = b.Bb), b.ga < b.vd ? b.speed += b.wc : b.ga === b.vd && (b.speed = b.fc), b.ga < b.rd ? (b.Ub += b.Kc, b.Wb += b.Lc) : b.ga === b.rd && (b.Ub = b.Ic, b.Wb = b.Jc), this.x += Math.cos(b.direction) * b.speed * a.Vb, this.y += Math.sin(b.direction) * b.speed * a.Vb, this.x += b.Ub * a.Vb, this.y += b.Wb * a.Vb, a.Fd(this)) {
          if(a.Ib || this.Ib) {
            this.rotation = (b.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = b.speed
          }
          if(!(b.ga < b.Oe || b.mc)) {
            for(var d;d = b.Pe.next();) {
              switch(d.Na) {
                case "fire":
                  c.Ef.call(this, d, a, b, c);
                  break;
                case "wait":
                  a = 0;
                  b.Oe = "number" === typeof d.value ? b.ga + d.value : 0 !== (a = ~~d.value) ? b.ga + a : b.ga + eval(d.value);
                  return;
                case "changeDirection":
                  c.Af.call(this, d, a, b);
                  break;
                case "changeSpeed":
                  c.Bf.call(this, d, b);
                  break;
                case "accel":
                  c.yf.call(this, d, b);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  c.Ff.call(this, d)
              }
            }
            b.mc = k;
            b.dd ? b.dd.ke() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), b.mc = k, b.dd ? b.dd.ke() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    a = function(a) {
      var b = {}, c = tm.Ma.Kb.nc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    c = c || "top";
    "string" === typeof c ? b.Pe = this.ce.Bd(c) : c instanceof q.wb ? b.Pe = c.Bd() : (window.console.error(a, c), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    b.Hf = this;
    b.Qc = a;
    b.Oe = -1;
    b.mc = n;
    b.direction = 0;
    b.Ae = 0;
    b.speed = 0;
    b.Ce = 0;
    b.Ub = 0;
    b.Wb = 0;
    b.ac = 0;
    b.Bb = 0;
    b.ud = -1;
    b.wc = 0;
    b.fc = 0;
    b.vd = -1;
    b.Kc = 0;
    b.Ic = 0;
    b.Lc = 0;
    b.Jc = 0;
    b.rd = -1;
    b.ga = -1;
    b.Ed = k;
    return b
  }, Df:function(a) {
    function b() {
      this.x += b.me;
      this.y += b.ne;
      b.Qc.Fd(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    }
    a = function(a) {
      var b = {}, c = tm.Ma.Kb.nc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.Qc = a;
    b.direction = 0;
    b.speed = 0;
    b.me = 0;
    b.ne = 0;
    b.Ed = k;
    return b
  }, Ef:function(a, c, f, u) {
    if(this.tg === i || this.gb) {
      var r = {label:a.fa.label}, w;
      for(w in a.fa.Ia) {
        r[w] = a.fa.Ia[w]
      }
      if(r = c.je(r)) {
        var h = (w = !!a.fa.Da.length) ? u.Df(c) : u.Rc(c, a.fa), V = this, N = {x:this.x + a.Ia.offsetX, y:this.y + a.Ia.offsetY};
        f.Ae = h.direction = function(h) {
          var u = eval(h.value) * Math.DEG_TO_RAD;
          switch(h.type) {
            case "aim":
              return c.target ? a.Ia.Ka ? b(N, c.target) + u : b(V, c.target) + u : u - Math.PI / 2;
            case "absolute":
              return u - Math.PI / 2;
            case "relative":
              return f.direction + u;
            default:
              return f.Ae + u
          }
        }(a.direction || a.fa.direction);
        f.Ce = h.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.Ce + b;
            default:
              return b
          }
        }(a.speed || a.fa.speed);
        r.x = N.x;
        r.y = N.y;
        w && (h.me = Math.cos(h.direction) * h.speed * c.Vb, h.ne = Math.sin(h.direction) * h.speed * c.Vb);
        r.Ib = !!r.Ib;
        if(c.Ib || r.Ib) {
          r.rotation = (h.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, r.speed = h.speed
        }
        r.addEventListener("enterframe", h);
        r.addEventListener("removed", function() {
          this.removeEventListener("enterframe", h);
          this.removeEventListener("removed", arguments.callee)
        });
        c.he ? c.he.addChild(r) : this.parent && this.parent.addChild(r)
      }
    }
  }, Af:function(c, f, m) {
    var u = eval(c.direction.value) * Math.DEG_TO_RAD, r = eval(c.Ja);
    switch(c.direction.type) {
      case "aim":
        c = f.target;
        if(!c) {
          return
        }
        m.Bb = b(this, c) + u;
        m.ac = a(m.Bb - m.direction) / r;
        break;
      case "absolute":
        m.Bb = u - Math.PI / 2;
        m.ac = a(m.Bb - m.direction) / r;
        break;
      case "relative":
        m.Bb = m.direction + u;
        m.ac = a(m.Bb - m.direction) / r;
        break;
      case "sequence":
        m.ac = u, m.Bb = m.direction + m.ac * (r - 1)
    }
    m.ud = m.ga + r
  }, Bf:function(a, b) {
    var c = eval(a.speed.value), f = eval(a.Ja);
    switch(a.speed.type) {
      case "absolute":
        b.fc = c;
        b.wc = (b.fc - b.speed) / f;
        break;
      case "relative":
        b.fc = c + b.speed;
        b.wc = (b.fc - b.speed) / f;
        break;
      case "sequence":
        b.wc = c, b.fc = b.speed + b.wc * f
    }
    b.vd = b.ga + f
  }, yf:function(a, b) {
    var c = eval(a.Ja);
    b.rd = b.ga + c;
    if(a.lb) {
      var f = eval(a.lb.value);
      switch(a.lb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Kc = (f - b.Ub) / c;
          b.Ic = f;
          break;
        case "relative":
          b.Kc = f, b.Ic = (f - b.Ub) * c
      }
    }else {
      b.Kc = 0, b.Ic = b.Ub
    }
    if(a.nb) {
      switch(f = eval(a.nb.value), a.nb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Lc = (f - b.Wb) / c;
          b.Jc = f;
          break;
        case "relative":
          b.Lc = f, b.Jc = (f - b.Wb) * c
      }
    }else {
      b.Lc = 0, b.Jc = b.Wb
    }
  }, Ff:function(a) {
    var b = tm.event.Event(a.Rf);
    if(a.Ba) {
      for(var c in a.Ba) {
        b[c] = a.Ba[c]
      }
    }
    this.dispatchEvent(b)
  }});
  var c = function() {
    var a = tm.graphics.Canvas();
    a.resize(8, 8);
    a.setTransformCenter();
    a.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    a.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return tm.asset.Texture(a.canvas.toDataURL())
  }();
  tm.Ma.Of = function(a) {
    var b = tm.app.Sprite(c, 8, 8);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.Ma.le = function(a) {
    if(f === l) {
      if(!a.getRoot().app) {
        return k
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.Ma.Ng = function() {
    return k
  };
  tm.Ma.Kb.nc = {je:tm.Ma.Of, Fd:tm.Ma.le, Xg:0, Ib:n, Vb:2, target:l};
  q.ya.prototype.Rc = function(a) {
    return tm.Ma.Kb(this).Rc(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(p());
tm.main(function() {
  aa("#canvas2d").run()
});
var s = l, t, v, z, A, B, C, ba, ca, da, ea, fa, ga, D, E, ha, F, ia, ja, G, ka, la, ma, na, oa, pa, qa, H, ra, sa, I, J, K, aa = tm.createClass({superClass:tm.app.CanvasApp, Yc:0, Tg:0, jc:3, Tb:3, oe:1, se:[1E9, 1E10], $:l, init:function(a) {
  s !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bgm1:"assets2/nc54073.mp3", bgmBoss:"assets2/nc29206.mp3", 
  "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", star:"assets/star.png"}, nextScene:function() {
    this.Gf();
    return t()
  }.bind(this)}))
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Gf:function() {
  v.ta();
  z.ta();
  this.$ = A()
}, Tf:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Yc, "")
}}), L = l;
function ta(a, b) {
  b || M();
  var c = tm.asset.AssetManager.get(a);
  c && (L = c.clone(), L.volume = 0.1 * s.jc, L.loop = k, L.play())
}
function M() {
  L !== l && L.stop()
}
function ua() {
  if(L !== l) {
    var a = L;
    a.loop = n;
    A.Fc.addEventListener("enterframe", function() {
      a.volume -= 0.0020;
      0 >= a.volume && (a.stop(), this.removeEventListener("enterframe", arguments.callee))
    })
  }
}
function P(a) {
  if(0 !== s.Tb && va["sound/" + a] !== s.frame) {
    var b = tm.asset.AssetManager.get("sound/" + a);
    b && (b.volume = "vo" === a.substring(0, 2) ? 0.5 * s.Tb : 0.1 * s.Tb, b.clone().play());
    va["sound/" + a] = s.frame
  }
}
var va = {};
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Q(a, b) {
  return(a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
;B = {Yd:3, Xd:3, sf:1, pf:1, qf:1, of:2, Qe:1, ff:2, Se:8, lf:0.01, jf:0.015, kf:0.0010, gf:0.015, hf:0.0020, mf:0.75, nf:2, Bc:600, ef:0.75, df:0.25, Ze:1, Xe:0.02, Ye:0.5, We:0.01, Ve:200, Ue:10, xf:500, wf:250, vf:100, uf:50, bf:0.3, $e:4E4, Te:50, tf:10, Re:k};
(function() {
  var a = l, b = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  C = tm.createClass({superClass:tm.app.Sprite, type:0, cb:0, sb:k, ec:n, $:l, speed:4.5, Ob:l, $b:l, Fe:l, ye:l, mb:l, Zc:l, Nc:l, Cd:l, Dd:l, init:function(b, f) {
    this.superInit("tex1", 64, 64);
    this.type = f;
    this.$ = b;
    tm.Ma.Kb.nc.target = this;
    this.boundingRadius = 3;
    this.altitude = 10;
    this.$b = this.Fe = ba(f, 100);
    this.ye = ba(3, 100);
    this.mb = ca(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.mb.visible = n;
    this.mb.addChildTo(b);
    this.Cf();
    this.Ob = [{x:-70, y:20, d:0.1, Hb:n, Cb:-0.7, v:k}, {x:-40, y:40, d:0.1, Hb:n, Cb:-0.5, v:k}, {x:40, y:40, d:0.1, Hb:k, Cb:0.5, v:k}, {x:70, y:20, d:0.1, Hb:k, Cb:0.7, v:k}];
    this.Nc = tm.app.CanvasElement().addChildTo(this);
    for(var d = 0, j = this.Ob.length;d < j;d++) {
      var m = this.Ob[d];
      da(this, m).setPosition(m.x, m.y).addChildTo(this.Nc)
    }
    this.lg = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.lg.blendMode = "lighter";
    this.Cd = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Cd.blendMode = "lighter";
    this.Cd.update = function() {
      this.rotation += 2;
      this.visible = 1 === b.Ea && !b.pa
    };
    this.Dd = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Dd.blendMode = "lighter";
    this.Dd.update = function() {
      this.rotation -= 2;
      this.visible = 1 === b.Ea && !b.pa
    };
    this.rc = tm.app.CanvasElement(80, 80).addChildTo(this);
    this.rc.blendMode = "lighter";
    this.rc.rotation = -90;
    this.rc.strokeStyle = "rgba(180,180,255,0.4)";
    this.rc.update = function() {
      this.visible = b.pa
    };
    this.rc.draw = function(a) {
      a.lineCap = "round";
      var f = b.bc / B.Bc;
      a.strokeStyle = "rgba(50,50,255,0.4)";
      a.lineWidth = "12";
      a.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, n);
      a.strokeStyle = "rgba(100,100,255,0.4)";
      a.lineWidth = "8";
      a.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, n);
      a.strokeStyle = "rgba(180,180,255,0.4)";
      a.lineWidth = "4";
      a.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, n)
    };
    this.hg = tm.app.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.hg.update = function() {
      this.visible = b.pa
    };
    a === l && (a = ea(this.$.sa))
  }, Fg:function() {
    return[{x:-70, y:20, d:0.1, Hb:n, Cb:-0.7, v:k}, {x:-40, y:40, d:0.1, Hb:n, Cb:-0.5, v:k}, {x:40, y:40, d:0.1, Hb:k, Cb:0.5, v:k}, {x:70, y:20, d:0.1, Hb:k, Cb:0.7, v:k}]
  }, Cf:function() {
    this.Zc = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.Zc.setFrameIndex(5);
    this.Zc.blendMode = "lighter";
    this.Zc.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Gb:-1, Tc:n, Db:n, update:function(c) {
    this.visible = this.ec ? 0 === c.frame / 2 % 2 : k;
    var f = c.keyboard;
    if(this.sb) {
      var d = f.getKeyAngle();
      d !== l && (d = b[d], this.x += d.x * this.speed * (this.Db ? 0.75 : 1), this.y += d.y * this.speed * (this.Db ? 0.75 : 1));
      this.x = R(this.x, 15, 465);
      this.y = R(this.y, 15, 625);
      var j = f.getKey("c"), d = f.getKey("z");
      this.Gb = j ? this.Gb + 1 : this.Gb - 1;
      this.Gb = R(this.Gb, -1, 10);
      this.Db = d && j || 10 === this.Gb;
      j = this.$.pa ? 3 : 5;
      this.Tc = !this.Db && (0 <= this.Gb || d) && 0 === c.frame % j;
      d && (this.Gb = 0);
      this.mb.x = this.x;
      this.mb.y = this.y - 40;
      if(this.Db) {
        d = 0;
        for(j = this.Ob.length;d < j;d++) {
          this.Ob[d].v = n
        }
        this.Nc.rotation = 0
      }else {
        this.mb.visible = n;
        d = 0;
        for(j = this.Ob.length;d < j;d++) {
          this.Ob[d].v = k
        }
      }
      this.Tc && (d = Math.sin(0.2 * c.frame), j = this.$b.ka(this.x - 7 - 6 * d, this.y - 5, -90), j !== l && j.addChildTo(this.$), j = this.$b.ka(this.x + 7 + 6 * d, this.y - 5, -90), j !== l && j.addChildTo(this.$));
      f.getKeyDown("x") && (1 === this.$.Ea && !this.$.pa ? (this.$.yg(), fa(this).addChildTo(this.$)) : !this.$.cc && 0 < this.$.fb && (this.Oa = R(this.Oa - 2, 0, 1), q.la.ua.$rank = R(q.la.ua.$rank - 0.02, 0, 1), ga(this, this.$).setPosition(R(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.$)))
    }
    this.Nf(f);
    this.zf(f);
    0 === c.frame % 2 && (a.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.$), a.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.$))
  }, tb:function() {
    this.Db = this.Tc = n;
    this.$.oc();
    this.$.va = 0;
    this.$.Aa = 0;
    this.$.wa = 0
  }, Nf:function(a) {
    var b = this.Nc;
    b.rotation = this.sb && a.getKey("left") ? Math.max(b.rotation - 3, -40) : this.sb && a.getKey("right") ? Math.min(b.rotation + 3, 40) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0
  }, zf:function(a) {
    this.sb && a.getKey("left") ? this.cb = R(this.cb - 0.2, -3, 3) : this.sb && a.getKey("right") ? this.cb = R(this.cb + 0.2, -3, 3) : 0 > this.cb ? this.cb = R(this.cb + 0.2, -3, 3) : 0 < this.cb && (this.cb = R(this.cb - 0.2, -3, 3));
    a = 3 + ~~this.cb;
    this.setFrameIndex(a);
    return a
  }});
  da = tm.createClass({superClass:tm.app.AnimationSprite, Nb:l, ba:l, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Nb = b;
    this.ba = a;
    this.altitude = 10;
    this.gotoAndPlay(b.Hb ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.Nb.v) {
      this.x = this.Nb.x * (this.ba.$.pa ? 1.5 : 1);
      this.y = this.Nb.y * (this.ba.$.pa ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Nb.d * this.Nb.Cb);
      var f = this.parent.localToGlobal(this);
      this.Nb.v && 0 === b.frame % 2 && a.clone(40).setPosition(f.x, f.y).addChildTo(b.$);
      this.ba.Tc && (f = this.ba.$b.ka(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== l && f.addChildTo(b.$))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = l;
  D = tm.createClass({superClass:tm.app.Sprite, speed:0, Pa:k, init:function(b) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    a === l && (a = E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    b !== i && this.vc(b)
  }, update:function() {
    this.x += this.Cg;
    this.y += this.Dg;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, vc:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48, this.setScale(2, 2)) : (this.speed = 30, this.boundingRadius = 32, this.setScale(1.5, 1.5))
  }, Wc:function(b) {
    for(var f = 0;f < b;f++) {
      var d = a.clone().setPosition(this.x, this.y).addChildTo(this.parent), j = S(2, 8), m = 2 * Math.random() * Math.PI;
      d.ma = Math.cos(m) * j;
      d.na = Math.sin(m) * j;
      d.scaleX = d.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
      d.addEventListener("enterframe", function() {
        this.x += this.ma;
        this.y += this.na;
        this.ma *= 0.9;
        this.na *= 0.9
      })
    }
  }});
  D.lc = function() {
    for(var a = [].concat(b), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var b = D.Ha = [];
  ba = tm.createClass({ed:l, init:function(a, f) {
    this.ed = [];
    for(var d = 0;d < f;d++) {
      var j = D(a), m = this;
      j.addEventListener("added", function() {
        this.ra = B.tf;
        b.push(this)
      });
      j.addEventListener("removed", function() {
        var a = b.indexOf(this);
        -1 !== a && b.splice(a, 1);
        m.ed.push(this)
      });
      3 === a && j.addEventListener("enterframe", function(a) {
        this.scaleX = 0 === a.app.frame % 2 ? 3 : 2
      });
      this.ed.push(j)
    }
  }, ka:function(a, b, d) {
    var j = this.ed.pop();
    if(j === i) {
      return l
    }
    var m = wa(d);
    j.Cg = Math.cos(m) * j.speed;
    j.Dg = Math.sin(m) * j.speed;
    j.setPosition(a, b);
    j.rotation = d + 90;
    return j
  }})
})();
(function() {
  var a = l;
  ca = tm.createClass({superClass:tm.app.Sprite, ba:l, $:l, Ya:0, frame:0, Me:l, color:l, Kf:n, head:l, ue:l, ie:l, Pa:k, init:function(a, c) {
    this.ba = a;
    this.$ = a.$;
    var f = this;
    this.Me = c;
    this.superInit(c.redBody, 50, 100);
    this.boundingHeightBottom = 1;
    this.Yg = 0;
    this.origin.y = 1;
    var d = this.ie = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
    d.y = 60;
    d.addChildTo(this);
    (this.ue = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
    d = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
    d.addChildTo(this);
    d.update = function() {
      this.y = f.Ya - f.y;
      -10 < this.y && (this.y = -10);
      this.visible = 0 < f.Ya
    };
    this.vc("blue")
  }, vc:function(b) {
    this.color = b;
    this.image = tm.asset.AssetManager.get(this.Me[this.color + "Body"]);
    this.srcRect.x = 0;
    this.srcRect.y = 0;
    this.srcRect.width = this.image.width / 16;
    this.ie.gotoAndPlay(this.color);
    this.ue.gotoAndPlay(this.color);
    this.head.gotoAndPlay(this.color);
    a = E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element);
    "hyper" === b ? (this.boundingWidth = this.width = 75, this.head.setScale(1.5, 1.5)) : (this.boundingWidth = this.width = 50, this.head.setScale(1, 1));
    return this
  }, Wc:function(b, c) {
    c = c || this.Ya;
    for(var f = 0;f < b;f++) {
      var d = a.clone().setPosition(this.x, c).addChildTo(this.$), j = S(8, 14), m = S(0, Math.PI);
      d.ma = Math.cos(m) * j;
      d.na = Math.sin(m) * j;
      d.scaleX = d.scaleY = (S(0.5, 1.5) + S(0.5, 1.5)) / 2;
      d.addEventListener("enterframe", function() {
        this.x += this.ma;
        this.y += this.na;
        this.ma *= 0.95;
        this.na *= 0.95
      })
    }
  }, dg:function(b, c, f) {
    c = c || this.x;
    f = f || this.Ya;
    for(var d = 0;d < b;d++) {
      var j = a.clone().setPosition(c, f).addChildTo(this.$), m = S(12, 20), u = S(0, Math.PI);
      j.ma = Math.cos(u) * m;
      j.na = Math.sin(u) * m;
      j.scaleX = j.scaleY = (S(1, 3) + S(1, 3)) / 2;
      j.addEventListener("enterframe", function() {
        this.x += this.ma;
        this.y += this.na;
        this.ma *= 0.95;
        this.na *= 0.95
      })
    }
  }, update:function(a) {
    (this.visible = this.ba.Db) ? (this.Ya = Math.max(0, this.Ya - 40), this.height = this.y - this.Ya, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Ya = this.y - 40;
    this.Kf = this.visible
  }, draw:function(a) {
    var c = this.srcRect, f = this._image.element;
    c.x = c.width * this.frame;
    a.context.drawImage(f, c.x, c.height - this.height, c.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Sg:function() {
    return this.Ya
  }, xg:function(a) {
    this.Ya = a;
    this.head.update()
  }});
  ca.prototype.getter("boundingHeightTop", function() {
    return this.position.y - this.Ya
  })
})();
(function() {
  ga = tm.createClass({superClass:tm.app.Object2D, Pa:k, $:l, init:function(b, c) {
    this.superInit();
    this.ba = b;
    this.$ = c;
    this.Je = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Je.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Je));
    this.ge();
    a === l && (a = E(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ga = 0;
    this.uc = 1;
    this.addEventListener("added", function() {
      this.$.cc = k;
      this.ba.ec = k;
      this.$.fb -= 1;
      this.$.oc();
      this.$.Qa("drop BOMBER!!", k);
      P("bomb");
      P("voBomb")
    });
    this.addEventListener("removed", function() {
      this.$.cc = n;
      this.ba.ec = n
    })
  }, ge:function() {
    this.$a = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.$a.gotoAndPlay("animation");
    this.$a.blendMode = "lighter";
    this.$a.setScale(0.1, 0.1);
    this.$a.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.9, 1.1)
      }
    }.bind(this.$a))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.uc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.ga;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.ga += 3.6, this.uc = -1) : (this.b = 8, this.ga += 1.8, this.uc = 1)
  }});
  ha = tm.createClass({superClass:ga, init:function(a, c) {
    this.superInit(a, c);
    B.Re && this.addEventListener("added", function() {
      this.$.fb = 0
    })
  }, ge:function() {
    this.$a = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.$a.gotoAndPlay("animation");
    this.$a.blendMode = "lighter";
    this.$a.setScale(0.1, 0.1);
    this.$a.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.4, 0.6)
      }
    }.bind(this.$a))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.uc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.04 * this.ga;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.ga += 1.8, this.uc = 1)
  }});
  var a = l
})();
F = tm.createClass({ba:l, $:l, aa:l, frame:0, init:function(a) {
  this.$ = a;
  this.ba = a.ba;
  this.Ie();
  this.aa = ia();
  this.frame = 0
}, Ie:p(), update:function() {
  this.Sf(this.frame);
  this.frame += 1
}, Sf:function(a) {
  a = this.aa.get(a);
  if(a !== l) {
    if("function" === typeof a.value) {
      a.value.call(this)
    }else {
      if(ja[a.value] !== i) {
        var b = ja[a.value];
        if(b !== l) {
          for(var c = 0;c < b.length;c++) {
            var f = this.kg(b[c]);
            a.stop && f.addEventListener("enemyconsumed", function() {
              this.aa.Vd = n
            }.bind(this))
          }
        }
      }
    }
  }
}, kg:function(a) {
  this.$.Ad += 1;
  return G(this.$, this, a.ca, a.da).setPosition(a.x, a.y).addChildTo(this.$).Qb()
}, Wg:p()});
F.create = function(a, b) {
  if(0 === b) {
    return ka(a)
  }
};
ia = tm.createClass({index:0, data:l, Vd:n, init:function() {
  this.data = {}
}, add:function(a, b, c) {
  this.index += a;
  this.data[this.index] = {stop:c, value:b}
}, get:function(a) {
  a = this.data[a];
  return a === i ? l : a.stop === k ? (this.Vd = k, a) : this.Vd ? l : a
}});
ka = tm.createClass({superClass:F, init:function(a) {
  this.superInit(a);
  this.aa.add(0, function() {
    ta("bgm1");
    this.$.sa.direction = 0.5 * Math.PI;
    this.$.sa.speed = 8;
    this.$.sa.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.aa.add(200, "tankRD-center");
  this.aa.add(200, "tankRD-left");
  this.aa.add(20, "heri1-right");
  this.aa.add(60, "heri1-center");
  this.aa.add(10, "cannon-0");
  this.aa.add(60, "heri1-left");
  this.aa.add(10, "cannon-1");
  this.aa.add(60, "tankL-top");
  this.aa.add(50, "heri1-right");
  this.aa.add(20, "tankRD-center");
  this.aa.add(80, "heri1-center");
  this.aa.add(150, "komachi-1");
  this.aa.add(500, "heri1-right");
  this.aa.add(20, "heri1-center");
  this.aa.add(20, "heri1-left");
  this.aa.add(20, "tankL-top");
  this.aa.add(20, "tankRD-left");
  this.aa.add(50, "heri1-right");
  this.aa.add(50, "heri1-center");
  this.aa.add(50, "heri1-center");
  this.aa.add(20, "tankRD-center");
  this.aa.add(20, "tankRD-left");
  this.aa.add(50, "heri1-right");
  this.aa.add(10, "cannon-7");
  this.aa.add(50, "heri1-center");
  this.aa.add(50, "heri1-left");
  this.aa.add(20, "tankL-top");
  this.aa.add(50, "heri1-right");
  this.aa.add(50, "fighter-m-1");
  this.aa.add(50, "fighter-m-5");
  this.aa.add(1, function() {
    this.$.sa.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.aa.add(150, "yukishiro", k);
  this.aa.add(50, "heri2-left");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(60, "heri1-center");
  this.aa.add(50, "heri2-left");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(50, "fighter-m-0");
  this.aa.add(50, "fighter-m-2");
  this.aa.add(50, "fighter-m-4");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(50, "heri2-left");
  this.aa.add(10, "cannon-6");
  this.aa.add(60, "heri1-center");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(50, "fighter-m-6");
  this.aa.add(50, "fighter-m-4");
  this.aa.add(50, "fighter-m-2");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(50, "heri2-left");
  this.aa.add(60, "heri1-center");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(50, "fighter-m-0");
  this.aa.add(50, "fighter-m-1");
  this.aa.add(50, "fighter-m-2");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(10, "cannon-1");
  this.aa.add(50, "heri2-left");
  this.aa.add(60, "heri1-center");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(50, "fighter-m-6");
  this.aa.add(50, "fighter-m-5");
  this.aa.add(50, "fighter-m-4");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(50, "heri2-left");
  this.aa.add(60, "heri1-center");
  this.aa.add(50, "heri2-center");
  this.aa.add(50, "heri2-right");
  this.aa.add(60, "heri1-center");
  this.aa.add(1, function() {
    this.$.sa.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.aa.add(100, "komachi-0");
  this.aa.add(160, "komachi-1");
  this.aa.add(800, function() {
    ua();
    P("warning");
    for(var a = tm.app.Object2D().setPosition(240, 320), c = -4;4 >= c;c++) {
      for(var f = -4;4 >= f;f++) {
        var d = tm.app.Label("WARNING!!", 70).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.05)"}, {offset:0.5, color:"hsla(50, 100%, 50%, 0.05)"}, {offset:1, color:"hsla( 0, 100%, 50%, 0.05)"}]).toStyle()).setBlendMode("lighter").setPosition(c, f);
        d.ga = 0;
        d.update = function() {
          this.alpha = -0.5 * Math.cos(0.1 * this.ga) + 0.5;
          this.ga += 1
        };
        d.addChildTo(a)
      }
    }
    a.tweener.wait(3E3).call(function() {
      ta("bgmBoss", k)
    }).wait(3E3).call(function() {
      console.log(1);
      this.$.Ke()
    }.bind(this)).call(function() {
      this.remove()
    }.bind(a));
    a.addChildTo(this.$.yd)
  })
}, Ie:function() {
  this.$.sa.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,30%)"}, {offset:1, color:"hsl(230,50%,15%)"}]).toStyle()
}});
z = {ta:function() {
  xa(256);
  la = {};
  z.explosion = Array.range(0, 2).map(function(a) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + a, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  la.explodeL = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  z.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  z.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  z.particle16 = E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Wc:function(a, b, c) {
  a = z.particle16.clone().setPosition(a, b).addChildTo(c);
  b = S(5, 20);
  c = S(Math.PI, 2 * Math.PI);
  a.ma = Math.cos(c) * b;
  a.na = Math.sin(c) * b;
  a.scaleX = a.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
  a.addEventListener("enterframe", function() {
    this.x += this.ma;
    this.y += this.na;
    this.ma *= 0.9;
    this.na *= 0.9
  })
}, Rg:function(a, b, c) {
  var f = tm.app.Sprite().setPosition(a, b).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  f.image = z.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, eg:function(a, b, c) {
  a = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(a, b).setScale(0.1, 0.1);
  a.Pa = k;
  a.addChildTo(c);
  a.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(a))
}, Sc:function(a, b, c, f) {
  P("explode");
  a = z.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  a.Pa = k;
  if(f !== i) {
    var d = f.x, j = f.y;
    a.addEventListener("enterframe", function() {
      this.x += d;
      this.y += j;
      d *= 0.99;
      j *= 0.99
    })
  }
  a.addChildTo(c)
}, Uf:function(a, b, c) {
  P("explode");
  var f = z.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  f.Pa = k;
  f.addChildTo(c);
  f = z.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a + 12, b).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.Pa = k;
  f.addChildTo(c);
  f = z.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a - 12, b).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.Pa = k;
  f.addChildTo(c)
}, re:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), d = 0;20 > d;d++) {
    var j = z.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === d % 2 ? "lighter" : "source-over").setPosition(a, b).gotoAndPlay();
    j.a = 2 * Math.PI * Math.random();
    j.v = 10 * Math.pow(T.at(~~(T.length * d / 20) + f), 2);
    j.Pa = k;
    j.addChildTo(c)
  }
}, qe:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), d = 0;20 > d;d++) {
    for(var j = 2 * Math.PI * d / 20, m = Math.pow(T.at(~~(T.length * d / 20) + f), 2), u = 0;3 > u;u++) {
      var r = 4 * m * (u + 1), w = la.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ga && (this.blendMode = "source-over");
        this.ga += 1
      }).setScale(0.3 * (3 - u)).setBlendMode("lighter").setPosition(a, b).gotoAndPlay();
      w.rotation = 2 * Math.random() * Math.PI;
      w.Pa = k;
      w.alpha = 0.2;
      w.ga = 0;
      w.a = j;
      w.v = r;
      w.addChildTo(c)
    }
  }
}};
ma = tm.createClass({superClass:tm.app.Object2D, target:l, Sb:0, angle:0, alpha:1, Pa:k, reverse:n, init:function(a, b) {
  this.superInit();
  this.target = a;
  this.reverse = b;
  this.angle = 0;
  this.Sb = b ? 0 : 200;
  this.alpha = b ? 1 : 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;9 > a;a++) {
      var b = this.angle + 2 * a / 9 * Math.PI;
      E(80, this.alpha, 0.9).setPosition(Math.cos(b) * this.Sb + this.target.x, Math.sin(b) * this.Sb + this.target.y).addChildTo(this.target.parent)
    }
    this.angle += 0.05;
    this.Sb += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.Sb || 200 < this.Sb) && this.remove()
  }
}});
fa = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, Pa:k, init:function(a) {
  this.superInit();
  this.target = a;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;5 > a;a++) {
      E(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + U(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + U(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
na = tm.createClass({superClass:tm.graphics.Canvas, $:l, Zb:l, Va:l, init:function(a) {
  this.superInit("#scoreLabel");
  this.$ = a;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Zb = ya(200);
  this.Va = oa(this)
}, update:function() {
  this.clear();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.$.Oc !== l && this.fillRect(5, this.Va.Pb - 20, 470 * this.$.Oc.ra / this.$.Oc.xe, 10);
  var a;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.$.score)).padding(16, " ");
  a = "";
  for(var b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, this.Va.Pb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.$.va)).padding(8, " ");
  a = "";
  for(b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, this.Va.pc + 192, 22);
  for(b = 0;b < this.$.Jb - 1;b++) {
    this.drawTexture(tm.asset.AssetManager.get("tex1"), 192, 0, 64, 64, 5 + 32 * b, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.la.ua.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.$.bd + " hit", this.Va.pc + 10, 95);
  0 < ~~this.$.wa && (this.setText("bold 40px Orbitron", "left", "top"), this.strokeText(~~this.$.wa + " HIT!!", 10, -this.Va.Pb + 115));
  for(b = 0;b < this.$.fb;b++) {
    this.fillRect(5 + 25 * b, 601, 20, 20)
  }
  this.Zb.update();
  this.Zb.Qd = this.Va.Pb + 5;
  this.Zb.draw(this)
}});
oa = tm.createClass({superClass:tm.app.Object2D, Ra:l, pc:0, Pb:0, init:function(a) {
  this.superInit();
  this.Ra = a
}});
(function() {
  var a = 16 * Math.sqrt(3), b = 12.8 * Math.sqrt(3);
  pa = tm.createClass({superClass:tm.graphics.Canvas, ea:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.ea = qa();
    this.ea.sa = this;
    this.ea.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(c) {
    this.ea.ma = Math.cos(this.ea.direction) * this.ea.speed;
    this.ea.na = Math.sin(this.ea.direction) * this.ea.speed;
    for(this.ea.hb += this.ea.ma;96 < this.ea.hb;) {
      this.ea.hb -= 96
    }
    for(;-96 > this.ea.hb;) {
      this.ea.hb += 96
    }
    for(this.ea.jb += this.ea.na;2 * a < this.ea.jb;) {
      this.ea.jb -= 2 * a
    }
    for(;this.ea.jb < 2 * -a;) {
      this.ea.jb += 2 * a
    }
    for(this.ea.ib += 0.8 * this.ea.ma;25.6 * 3 < this.ea.ib;) {
      this.ea.ib -= 25.6 * 3
    }
    for(;this.ea.ib < -25.6 * 3;) {
      this.ea.ib += 25.6 * 3
    }
    for(this.ea.kb += 0.8 * this.ea.na;2 * b < this.ea.kb;) {
      this.ea.kb -= 2 * b
    }
    for(;this.ea.kb < 2 * -b;) {
      this.ea.kb += 2 * b
    }
    0 === c % 2 && this.draw()
  }, draw:function() {
    this.ea.background !== l ? this.clearColor(this.ea.background, 0, 0) : this.clear();
    this.lineWidth = 0.3;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    this.beginPath();
    for(var c = 0, f = this.ea.hb - 96;576 > f;f += 48) {
      for(var c = 0 === c ? a : 0, d = this.ea.jb - 2 * a + c;d < 640 + 2 * a;d += 2 * a) {
        this.line(f, d, f + 32, d), this.line(f, d, f - 16, d + a), this.line(f, d, f - 16, d - a)
      }
    }
    this.stroke();
    this.lineWidth = 0.2;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,0.6)"}, {offset:1, color:"rgba(255,255,255,0.3)"}]).toStyle();
    this.beginPath();
    c = 0;
    for(f = this.ea.ib - 25.6 * 3;f < 480 + 25.6 * 3;f += 25.6 * 1.5) {
      c = 0 === c ? b : 0;
      for(d = this.ea.kb - 2 * b + c;d < 640 + 2 * b;d += 2 * b) {
        this.line(f, d, f + 25.6, d), this.line(f, d, f - 12.8, d + b), this.line(f, d, f - 12.8, d - b)
      }
    }
    this.stroke()
  }});
  qa = tm.createClass({superClass:tm.app.Object2D, hb:0, jb:0, ib:0, kb:0, direction:0, speed:0, ma:0, na:0, background:l, init:function() {
    this.superInit();
    this.ib = this.kb = this.hb = this.jb = 0;
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.na = this.ma = 0
  }})
})();
H = tm.createClass({superClass:tm.app.Sprite, ze:n, $:l, ba:l, bb:n, qc:n, Rd:n, ma:0, na:0, init:function(a) {
  this.superInit("star", 20, 20);
  (this.ze = a) && this.setScale(2, 2);
  this.$ = A.Fc;
  this.ba = this.$.ba;
  this.addChildTo(this.$);
  a = 0.5 * Math.random() * Math.PI - 0.75 * Math.PI;
  this.ma = 30 * Math.cos(a);
  this.na = 30 * Math.sin(a)
}, update:function() {
  this.ba.Db && (this.qc = k);
  if(this.ba.parent === l) {
    this.qc = n
  }else {
    if(100 > Q(this, this.ba)) {
      this.$.mg(this);
      this.remove();
      return
    }
    1E4 > Q(this, this.ba) && (this.qc = k);
    if(this.Rd && this.qc) {
      var a = Math.atan2(this.ba.y - this.y, this.ba.x - this.x);
      this.x += 10 * Math.cos(a);
      this.y += 10 * Math.sin(a)
    }else {
      this.Rd || (this.x += this.ma, this.y += this.na, this.ma *= 0.8, this.na *= 0.8, -1 < this.ma && (1 > this.ma && -1 < this.na && 1 > this.na) && (this.Rd = k))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
ra = tm.createClass({superClass:H, bb:n, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
sa = tm.createClass({superClass:H, bb:k, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.qc || (this.x += this.$.sa.ma, this.y += this.$.sa.na);
  this.superClass.prototype.update.call(this)
}});
function W(a, b) {
  if(a.parent === l || b.parent === l) {
    return n
  }
  var c = a.x + a.boundingWidthRight, f = a.y - a.boundingHeightTop, d = a.y + a.boundingHeightBottom, j = b.x - b.boundingWidthLeft, m = b.y - b.boundingHeightTop, u = b.y + b.boundingHeightBottom;
  return a.x - a.boundingWidthLeft < b.x + b.boundingWidthRight && c > j && f < u && d > m
}
;var X = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, zg:function(a, b) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = b
}, finish:function(a) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(a)
}});
var za = tm.createClass({superClass:X, titleText:l, menu:l, descriptions:l, showExit:n, title:l, selections:[], description:l, box:l, cursor:l, Hd:l, _selected:0, _opened:n, _finished:n, init:function(a, b, c) {
  this.superInit();
  this.titleText = a;
  this.menu = b;
  this._selected = ~~c.defaultValue;
  this.showExit = c.showExit;
  this.descriptions = c.menuDescriptions;
  this.showExit && (b.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Hd = c.onCursorMove;
  a = Math.max(50 * (1 + b.length), 50) + 40;
  this.box = tm.app.RectangleShape(384, a, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"rgba(1,2,48,0.8)"}).setPosition(240, 320);
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
    var d = tm.app.Label(b).setPosition(240, a).addChildTo(this);
    d.interactive = k;
    d.addEventListener("touchend", function() {
      f._selected === c ? f.closeDialog(f._selected) : f._selected = c
    });
    d.width = 336;
    return d
  }.bind(this));
  this._createCursor();
  this._opened = k
}, _createCursor:function() {
  this.cursor = tm.app.RectangleShape(336, 10, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.LinearGradient(0, 0, 336, 0).addColorStopList([{offset:0, color:"rgba(  0,255,100,0.0)"}, {offset:0.2, color:"rgba(  0,255,100,0.3)"}, {offset:0.5, color:"rgba(  0,255,255,0.5)"}, {offset:0.8, color:"rgba(  0,255,100,0.3)"}, {offset:1, color:"rgba(  0,255,100,0.0)"}]).toStyle()}).addChildTo(this);
  this.cursor.blendMode = "lighter";
  this.cursor.x = 240;
  this.cursor.s = this._selected;
  this.cursor.y = this.selections[this._selected].y;
  this.cursor.update = function() {
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Hd !== l && this.parent.Hd(this.s))
  }
}, update:function(a) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(a.frame / 2) % 2 : this.showExit && a.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") ? this.closeDialog(this._selected) : a.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = R(this._selected, 0, this.selections.length - 1)) : a.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = 
  R(this._selected, 0, this.selections.length - 1)))
}, closeDialog:function(a) {
  this._finished = k;
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
function Y(a, b, c, f, d) {
  d = {}.$extend({menuDescriptions:[].concat(c), showExit:k, defaultValue:0, onCursorMove:p()}, d);
  a.zg(za(b, c, d), f)
}
;E = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, sd:0.85, size:0, image:l, Pa:k, init:function(a, b, c, f) {
  this.superInit();
  this.width = this.height = this.size = a;
  b !== i && (this.alpha = b);
  c !== i && (this.sd = c);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.sd;
  0.0010 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return E(this.size, this.Ug, this.sd, this.image)
}});
ea = tm.createClass({superClass:E, sa:l, init:function(a, b) {
  b = b || 20;
  this.superInit(b, 1, 0.82, tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element);
  this.sa = a
}, update:function(a) {
  this.superClass.prototype.update.apply(this, a);
  this.x += this.sa.ma;
  this.y += this.sa.na + 0.3
}, clone:function(a) {
  return ea(this.sa, a)
}});
var ya = tm.createClass({width:0, label:l, La:l, ga:0, He:0, Qd:0, init:function(a) {
  this.width = a;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.La = [];
  this.He = 480 - this.width - 5;
  this.Qd = 5
}, Jf:function(a, b) {
  b === k && (this.La.clear(), this.La.push(""));
  5 < this.La.length && this.La.splice(1, this.La.length - 4);
  this.La.push(a);
  return this
}, Mf:function() {
  this.La.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var a = this.label.text, a = a.substring(0, a.length - 1);
  if(0 !== this.La.length) {
    if("" !== this.La[0]) {
      var b = this.La[0][0];
      this.La[0] = this.La[0].substring(1);
      a += b
    }else {
      this.La.shift(), b = a.split("\n"), 3 < b.length && (b.shift(), a = b.join("\n")), a += "\n"
    }
  }
  this.label.text = a + (0 === this.ga % 2 ? "_" : " ");
  this.ga += 1
}, draw:function(a) {
  a.save();
  a.context.globalCompositeOperation = "source-over";
  a.translate(this.He, this.Qd);
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
function xa(a) {
  function b(b) {
    if(1 > b) {
      return l
    }
    var d = [], f = Math.random(), j, m;
    for(m = 0;m < a;m += ~~b) {
      j = Math.random();
      for(var O = 0;O < b;O++) {
        d[m + O] = c(f, j, O / b)
      }
      f = j
    }
    f = d[a - ~~b];
    j = d[0];
    for(O = 0;O < b;O++) {
      d[a - ~~b + O] = c(f, j, O / b)
    }
    return d
  }
  function c(a, b, c) {
    c = 0.5 * (1 - Math.cos(c * Math.PI));
    return a * (1 - c) + b * c
  }
  for(var f = [], d = 0, j = Math.pow(2, 4);8 > d;d++, j *= 2) {
    var m = b(a / j);
    if(m === l) {
      break
    }
    f.push(m)
  }
  m = [].concat(f[0]);
  d = 1;
  for(j = 0.5;d < f.length;d++, j *= 0.5) {
    for(var u = 0;u < a;u++) {
      m[u] += f[d][u] * j
    }
  }
  for(d = 0;d < m.length;d++) {
    m[d] /= 2
  }
  return m
}
var T;
(function() {
  var a = l, b = l;
  t = tm.createClass({superClass:X, result:l, ga:0, tc:[], Vc:n, we:l, Be:0, ad:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.we = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Vc = n;
      for(var a = ("" + Math.floor(s.Yc)).padding(16, " "), b = "", d = 0;d < a.length;d += 4) {
        b += a.substring(d, d + 4) + " "
      }
      this.we.text = "HIGH SCORE: " + b.trim()
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.ee(80 * Math.cos(0.01 * this.ga) + 240, 80 * Math.sin(0.01 * this.ga) + 320, 0);
    this.ee(80 * Math.cos(0.01 * this.ga + Math.PI) + 240, 80 * Math.sin(0.01 * this.ga + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) && !this.Vc && this.Ge();
    this.ga += 1
  }, ee:function(c, f, d) {
    if(!this.Vc) {
      a === l && (a = E(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === l && (b = E(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      d = 0 === d ? a.clone().addChildTo(this) : b.clone().addChildTo(this);
      d.speed = 0.6;
      var j = S(0, 2 * Math.PI), m = U(0, 20);
      d.setPosition(Math.cos(j) * m + c, Math.sin(j) * m + f);
      var u = this;
      d.update = function() {
        this.x += Math.cos(j) * this.speed;
        this.y += Math.sin(j) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = u.tc.indexOf(this);
          -1 !== a && u.tc.splice(a, 1)
        }
      };
      this.tc.push(d)
    }
  }, Ge:function() {
    Y(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.qg, {defaultValue:this.Be, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, qg:function(a) {
    4 !== a && (this.Be = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Vc = k;
          for(var a = 0, b = this.tc.length;a < b;a++) {
            this.tc[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.$.start(2);
          s.replaceScene(s.$)
        }.bind(this));
        break;
      case 2:
        this.Fb();
        break;
      case 3:
        s.Tf()
    }
  }, Fb:function() {
    Y(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Ld, {defaultValue:this.ad, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Ld:function(a) {
    3 !== a && (this.ad = a);
    switch(a) {
      case 0:
        this.Md();
        break;
      case 1:
        this.Nd();
        break;
      case 2:
        this.wg();
        break;
      default:
        this.Ge()
    }
  }, Md:function() {
    Y(this, "BGM VOLUME", "012345".split(""), this.Jd, {defaultValue:s.jc, onCursorMove:function(a) {
      L !== l && "exit" !== a && (L.volume = 0.1 * a)
    }, showExit:n})
  }, Jd:function(a) {
    6 !== a && (s.jc = a);
    this.Fb()
  }, Nd:function() {
    Y(this, "SE VOLUME", "012345".split(""), this.Kd, {defaultValue:s.Tb, showExit:n})
  }, Kd:function(a) {
    6 !== a && (s.Tb = a);
    this.Fb()
  }, wg:function() {
    Y(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.pg, {defaultValue:s.oe, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, pg:function(a) {
    5 !== a && (s.oe = a);
    this.Fb()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
tm.createClass({superClass:X, init:function() {
  this.superInit();
  tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(240, 320).addChildTo(this)
}});
A = tm.createClass({superClass:X, ba:l, score:0, va:0, wa:0, bd:0, Aa:0, Ab:0, fd:l, sa:l, Jb:3, Sd:0, Td:0, ub:0, Ad:0, fb:0, kc:0, Lf:6, cc:n, Ea:0, Oa:0, pa:n, sc:0, bc:0, Xc:l, Pd:l, pe:l, xd:l, yd:l, td:l, jg:l, $c:l, Ra:l, Oc:l, init:function() {
  A.Fc !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  A.Fc = this;
  this.Ra = na(this);
  this.Ra.Va.addChildTo(this);
  this.sa = pa().ea;
  this.sa.addChildTo(this);
  this.Xc = A.Lb().addChildTo(this);
  this.pe = A.Lb().addChildTo(this);
  this.xd = A.Lb().addChildTo(this);
  this.Pd = A.Lb().addChildTo(this);
  this.yd = A.Lb().addChildTo(this);
  this.td = A.Lb().addChildTo(this);
  this.jg = A.Zd(this).addChildTo(this);
  tm.Ma.Kb.nc.he = this;
  this.$c = tm.app.Object2D();
  this.$c.addChildTo(this);
  this.$c.update = function(a) {
    this.sg(a)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Ra.clear()
  })
}, addChild:function(a) {
  a.Pa ? this.xd.addChild(a) : a instanceof I ? this.td.addChild(a) : a instanceof H ? this.Xc.addChild(a) : a instanceof G ? a.bb ? this.Xc.addChild(a) : this.pe.addChild(a) : a instanceof C ? this.Pd.addChild(a) : a === this.$c || a === this.sa || a instanceof A.Lb || a instanceof A.Zd || a instanceof oa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(a)))
}, update:function(a) {
  0 === a.frame % 500 && (T = xa(512));
  this.fd.update(a.frame);
  this.pa && (this.bc -= 1, 0 >= this.bc && this.oc());
  this.sc = Math.max(this.sc - 1, 0);
  0 === a.frame % 5 && this.Ra.update();
  this.Aa -= B.Xe * B.Ye;
  0 >= this.Aa && (this.Aa = 0, this.pa || 1 === this.Ea ? this.Ab = this.wa = this.va = 0 : (0 < this.wa && (0 >= this.Ab && (this.Ab = this.wa * B.We), this.va = this.va * (this.wa - this.Ab) / this.wa, this.wa -= this.Ab), 0 >= this.wa && (this.Ab = this.wa = this.va = 0)));
  if(a.keyboard.getKeyDown("escape")) {
    this.app.replaceScene(t()), M()
  }else {
    if(a.keyboard.getKeyDown("space")) {
      this.cd(0)
    }else {
      if(a.keyboard.getKeyDown("p")) {
        var b = tm.graphics.Canvas();
        b.resize(480, 640);
        b.clearColor("black");
        b.drawImage(this.sa.sa.element, 0, 0);
        b.drawImage(a.canvas.element, 0, 0);
        b.drawImage(this.Ra.element, 0, 0);
        b.saveAsImage();
        this.cd(0)
      }
    }
  }
}, sg:function() {
  this.ba.sb === n && v.erase();
  var a;
  a = [].concat(G.Ha);
  for(var b = [].concat(D.Ha), c = b.length;b[--c] !== i;) {
    for(var f = a.length;a[--f] !== i;) {
      var d = a[f], j = b[c];
      if(!(0 >= d.ra) && W(d, j) && (j.Wc(1), j.remove(), d.tb(this.pa ? B.pf : B.sf))) {
        this.ub += 1;
        this.pa === n && this.ic(B.lf);
        this.Id(d);
        break
      }
    }
  }
  j = this.ba.mb;
  if(this.ba.mb.visible) {
    a = [].concat(G.Ha);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = a.length;a[--f] !== i;) {
      if(d = a[f], !(0 >= d.ra) && W(d, j)) {
        j.xg(d.y + d.boundingHeightBottom);
        d.tb(this.pa ? B.of : B.qf) ? (this.ub += 1, this.pa === n && this.ic(B.jf), this.Id(d)) : (this.Mc(0.01), this.Aa = Math.max(this.Aa, 0.05), this.pa === n && this.ic(B.kf));
        j.Wc(2);
        break
      }
    }
    b = {x:this.ba.x, y:this.ba.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(G.Ha);
    for(f = a.length;a[--f] !== i;) {
      d = a[f], !(0 >= d.ra) && W(d, b) && (d.tb(this.pa ? B.ff : B.Qe) ? (this.ub += 1, this.ic(B.gf), this.Id(d)) : (this.Mc(0.01), this.Aa = Math.max(this.Aa, 0.05), this.ic(B.hf)), j.dg(2, this.ba.x, this.ba.y - 30))
    }
  }
  if(this.cc) {
    v.erase();
    a = [].concat(G.Ha);
    for(f = a.length;a[--f] !== i;) {
      d = a[f], !(0 >= d.ra) && (d.Eb() && d.tb(B.Se)) && (this.zb(d.score), this.ub += 1)
    }
    this.Aa = this.wa = 0
  }
  if(this.pa) {
    f = [].concat(D.Ha);
    for(d = f.length;f[--d] !== i;) {
      if(j = f[d], !(0 >= j.ra)) {
        b = [].concat(I.Ha);
        for(a = b.length;b[--a] !== i;) {
          c = b[a], 0 < j.ra && W(j, c) && (c.ra -= 6 - this.Oa, 0 > c.ra && (c.Ua(), this.zb(B.Ue), this.Mc(1), this.ve(n, n, c.x, c.y, 1)), j.ra -= 1)
        }
      }
    }
  }
  if(this.ba.parent !== l && this.ba.ec === n && this.cc === n && 0 >= this.sc) {
    for(f = I.Ha.length;I.Ha[--f] !== i;) {
      if(a = I.Ha[f], W(a, this.ba)) {
        this.ba.tb();
        0 < this.fb ? (this.Oa = R(this.Oa - 1, 0, 1), q.la.ua.$rank = R(q.la.ua.$rank - 0.01, 0, 1), ha(this.ba, this).setPosition(this.ba.x, this.ba.y).addChildTo(this)) : this.Ee();
        break
      }
    }
    for(f = G.Ha.length;G.Ha[--f] !== i;) {
      if(d = G.Ha[f], !(0 >= d.ra) && !d.bb && W(d, this.ba)) {
        this.ba.tb();
        0 < this.fb ? (this.Oa = R(this.Oa - 1, 0, 1), q.la.ua.$rank = R(q.la.ua.$rank - 0.01, 0, 1), ha(this.ba, this).setPosition(this.ba.x, this.ba.y).addChildTo(this)) : this.Ee();
        break
      }
    }
  }
}, Id:function(a) {
  this.ve(a.bb, this.pa || Q(a, this.ba) < B.$e, a.x, a.y, a.star);
  this.Mc(1);
  if(!this.pa && 1 === this.Ea) {
    for(var b = this.va, c = ~~(this.wa / B.Ve) + 1;0 < c;c--) {
      b += a.score, this.zb(b)
    }
    this.va += a.score * c
  }else {
    this.zb(this.va + a.score), this.va += a.score
  }
}, ve:function(a, b, c, f, d) {
  a = a ? sa : ra;
  for(var j = 0;j < d;j++) {
    a(b).setPosition(c, f)
  }
}, mg:function(a) {
  P("star");
  a.ze ? (this.Td += 1, this.zb(B.xf), this.zb(0.4 * this.va), this.va += B.vf) : (this.Sd += 1, this.zb(B.wf), this.zb(0.2 * this.va), this.va += B.uf)
}, start:function(a) {
  this.Ra.Zb.Mf().clear();
  this.score = 0;
  this.Jb = B.Yd;
  this.fb = this.kc = B.Xd;
  this.Oa = this.Ea = 0;
  q.la.ua.$rank = 0;
  this.oc();
  this.cc = n;
  this.ba !== l && this.ba.parent !== l && this.ba.remove();
  G.lc();
  D.lc();
  v.lc();
  this.Xc.clear();
  this.xd.clear();
  this.yd.clear();
  this.Pd.clear();
  this.td.clear();
  this.ba = C(this, a);
  this.Ag(0)
}, Ag:function(a) {
  this.Qa("3...2...1...");
  this.ub = this.Ad = this.Td = this.Sd = this.bd = this.Aa = this.wa = this.va = 0;
  this.Ra.Va.pc = 0;
  this.Ra.Va.Pb = 0;
  this.fd = F.create(this, a);
  this.tweener.clear().wait(1E3).call(function() {
    this.Gd()
  }.bind(this))
}, Gd:function() {
  this.Qa("Let's go!");
  this.ba.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.ba.sb = n;
  this.ba.ec = k;
  this.ba.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.sb = k
  }.bind(this.ba)).wait(2E3).call(function() {
    this.ec = n
  }.bind(this.ba));
  this.fb = this.kc
}, Ee:function() {
  z.Sc(this.ba.x, this.ba.y, this);
  this.Qa("I was shot down.");
  this.ba.sb = n;
  this.ba.remove();
  this.Jb -= 1;
  this.Ab = this.wa = this.Aa = 0;
  this.Oa = R(this.Oa - 3, 0, 1);
  q.la.ua.$rank = R(q.la.ua.$rank - 0.03, 0, 1);
  0 < this.Jb ? this.tweener.clear().wait(1E3).call(function() {
    this.kc = Math.min(this.kc + 1, this.Lf);
    this.Gd()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.vg()
  }.bind(this))
}, bg:function() {
  this.Qa("System rebooted.", k);
  this.score = 0;
  this.Jb = B.Yd;
  this.fb = this.kc = B.Xd;
  this.Oa = 0;
  q.la.ua.$rank = 0;
  this.Gd()
}, Mg:p(), cg:function() {
  M();
  this.app.replaceScene(Aa())
}, Qg:p(), zb:function(a) {
  var b = this.score;
  this.score += a;
  for(a = 0;a < s.se.length;a++) {
    var c = s.se[a];
    b < c && c <= this.score && this.Wf()
  }
  s.Yc = Math.max(s.Yc, this.score)
}, Mc:function(a) {
  this.pa && (a *= B.Ze);
  this.Ab = 0;
  this.wa += a;
  this.bd = Math.max(this.bd, this.wa);
  1 <= a && (this.Aa = 1)
}, ic:function(a) {
  !(0 < a && 1 === this.Ea) && !(0 > a && 0 === this.Ea) && (this.pa && (a *= B.nf), this.Ea = R(this.Ea + a * B.mf, 0, 1), 1 === this.Ea ? (0.5 > Math.random() ? this.Qa("HYPER SYSTEM, ready.", k) : this.Qa("HYPER SYSTEM, stand by.", k), ma(this.ba).addChildTo(this), P("voHyperReady")) : 0 === this.Ea && this.oc())
}, yg:function() {
  0.5 > Math.random() ? (this.Qa("HYPER SYSTEM start!!", k), P("voHyperStart0")) : (this.Qa("start counting to system limit.", k), P("voHyperStart1"));
  this.pa = k;
  this.Ea = 0;
  this.Oa = R(this.Oa + 1, 0, 5);
  q.la.ua.$rank = R(q.la.ua.$rank + 0.02 * this.Oa, 0, 1);
  q.la.ua.$hyperOff = B.bf;
  this.bc = B.Bc;
  this.sc = B.Bc * B.ef;
  this.ba.$b = this.ba.ye;
  this.ba.mb.vc("hyper");
  z.eg(this.ba.x, this.ba.y, this)
}, oc:function() {
  this.pa !== n && (this.pa = n, ma(this.ba, k).addChildTo(this), this.ba.$b = this.ba.Fe, this.ba.mb.vc("blue"), q.la.ua.$hyperOff = 1, this.sc = B.Bc * B.df, this.bc = 0, v.erase())
}, Wf:function() {
  this.Qa("extended.");
  this.Jb += 1
}, Qa:function(a, b) {
  this.Ra.Zb.Jf(a, b)
}, cd:function(a) {
  Y(this, "PAUSE", ["resume", "setting", "exit game"], this.rg, {defaultValue:a, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:n})
}, rg:function(a) {
  switch(a) {
    case 1:
      this.Fb();
      break;
    case 2:
      this.ug()
  }
}, Fb:function() {
  Y(this, "SETTING", ["bgm volume", "sound volume"], this.Ld, {defaultValue:this.ad, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Ld:function(a) {
  3 !== a && (this.ad = a);
  switch(a) {
    case 0:
      this.Md();
      break;
    case 1:
      this.Nd();
      break;
    default:
      this.cd()
  }
}, ug:function() {
  Y(this, "REARY?", ["yes", "no"], this.ng, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:n})
}, ng:function(a) {
  0 === a ? (M(), this.app.replaceScene(t())) : this.cd(1)
}, Md:function() {
  Y(this, "BGM VOLUME", "012345".split(""), this.Jd, {defaultValue:s.jc, onCursorMove:function(a) {
    L !== l && 6 !== a && (L.volume = 0.1 * a)
  }, showExit:n})
}, Jd:function(a) {
  6 !== a && (s.jc = a);
  this.Fb(1)
}, Nd:function() {
  Y(this, "SE VOLUME", "012345".split(""), this.Kd, {defaultValue:s.Tb, showExit:n})
}, Kd:function(a) {
  6 !== a && (s.Tb = a);
  this.Fb(1)
}, vg:function() {
  Y(this, "CONTINUE?", ["yes", "no"], this.og, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:n})
}, og:function(a) {
  switch(a) {
    case 0:
      this.bg();
      break;
    case 1:
      this.cg()
  }
}, draw:p(), Ke:function() {
  this.Ra.Va.tweener.clear().to({pc:-480}, 1600, "easeInQuad").to({Pb:22}, 800, "easeInOutQuad")
}, gg:function() {
  this.Ra.Va.tweener.clear().to({Pb:0}, 800, "easeInOutQuad").to({pc:0}, 1600, "easeOutQuad")
}});
A.Lb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}, clear:function() {
  for(var a = [].concat(this.children), b = 0;b < a.length;b++) {
    this.removeChild(a[b])
  }
}});
A.Zd = tm.createClass({superClass:tm.app.CanvasElement, $:l, frame:0, init:function(a) {
  this.superInit();
  this.$ = a
}, update:function(a) {
  this.frame = a.frame
}, draw:function(a) {
  this.Pf(a);
  this.Qf(a)
}, Pf:function(a) {
  if(0 < this.$.Aa) {
    a.fillStyle = "rgba(255," + ~~(255 * this.$.Aa) + "," + ~~Math.min(255, 512 * this.$.Aa) + ",0.5)";
    var b = 500 * this.$.Aa;
    a.fillRect(465, 635 - b, 10, b)
  }
}, Qf:function(a) {
  1 === this.$.Ea ? 0 === this.frame % 2 && (a.fillStyle = "rgba(255,255,255,0.8)", a.fillRect(5, 628, 200, 9)) : (a.fillStyle = "rgba(255,255,0,0.3)", a.fillRect(5, 628, 200, 9), 0 < this.$.Ea && (a.fillStyle = "rgba(255,255,100,1.0)", a.fillRect(5, 628, 200 * this.$.Ea, 9)))
}});
A.Fc = l;
tm.createClass({superClass:X, init:function() {
  this.superInit()
}, update:p()});
var Aa = tm.createClass({superClass:X, init:function() {
  this.superInit();
  var a = tm.app.Label("GAME OVER");
  a.fillStyle = "red";
  a.setPosition(240, 320).addChildTo(this);
  this.interactive = k;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(t())
    }.bind(this))
  })
}, update:function(a) {
  a.keyboard.getKeyDown("z") && a.replaceScene(t())
}, draw:function(a) {
  a.clearColor("black")
}});
tm.createClass({superClass:X, init:function() {
  this.superInit()
}, update:p()});
(function() {
  G = tm.createClass({superClass:tm.app.CanvasElement, frame:0, direction:0, speed:0, ba:l, $:l, fd:l, da:l, ca:l, ra:0, score:0, bb:n, erase:n, star:1, ig:n, gb:k, ab:n, gd:l, init:function(b, c, f, d) {
    this.superInit();
    this.addEventListener("completeattack", function() {
      this.vb()
    });
    this.addEventListener("added", function() {
      this.frame = 0;
      a.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var b = a.indexOf(this);
      -1 !== b && a.splice(b, 1)
    });
    this.gb = k;
    this.ab = n;
    this.$ = b;
    this.ba = b.ba;
    this.fd = c;
    this.ca = f;
    this.da = d;
    this.score = 100;
    this.erase = n;
    this.ca.ta.apply(this);
    this.da.ta.apply(this);
    this.altitude = this.bb ? 1 : 10;
    this.gd = {x:0, y:0}
  }, Qb:function() {
    this.ca.Qb.apply(this);
    this.da.Qb.apply(this);
    return this
  }, vb:function() {
    this.ca.vb.apply(this);
    this.da.vb.apply(this)
  }, update:function() {
    this.ab === n && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.ab = k, this.ca.Rb.apply(this), this.da.Rb.apply(this));
    var a = this.x, c = this.y;
    this.ca.update.apply(this);
    this.da.update.apply(this);
    this.bb && (this.x += this.$.sa.ma, this.y += this.$.sa.na);
    this.frame += 1;
    this.gd.x = this.x - a;
    this.gd.y = this.y - c
  }, tb:function(a) {
    if(!this.ab) {
      return n
    }
    this.ra -= a;
    return 0 >= this.ra ? (a = S(0, 5), 2 > a ? this.$.Qa("enemy destroy.") : 4 > a ? this.$.Qa(this.name + " destroy.") : this.$.Qa("ETR reaction gone."), this.erase && v.erase(k), this.ca.Ua.apply(this), this.da.Ua.apply(this), k) : n
  }, draw:function(a) {
    this.da.draw.call(this, a)
  }, Eb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, tg:function() {
    return this.gb
  }});
  G.lc = function() {
    for(var b = [].concat(a), c = 0, f = b.length;c < f;c++) {
      b[c].remove()
    }
  };
  var a = G.Ha = []
})();
(function() {
  function a() {
    this.remove();
    this.bb = k;
    this.$.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && z.Sc(this.x + U(-100, 100), this.y + U(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:2, y:this.y + 200}, 2E3).call(function() {
      z.qe(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }
  function b() {
    this.remove();
    this.bb = k;
    this.$.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && z.Sc(this.x + U(-100, 100), this.y + U(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:2, y:this.y + 200, scaleX:0.9, scaleY:0.9, rotation:Math.rand(-10, 10)}, 2E3).call(function() {
      z.qe(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }
  function c(a, b) {
    b.name = a;
    b.ra = f[a][0];
    b.score = f[a][1];
    b.bb = f[a][2];
    b.erase = f[a][3];
    b.star = f[a][4]
  }
  var f = {kujo:[2, 300, n, n, 1], kiryu:[3, 400, n, n, 1], natsuki:[5, 900, k, n, 1], kise:[35, 15E3, k, n, 1], kurokawa:[35, 5E3, n, n, 5], akimoto:[250, 3E5, n, k, 10], yukishiro:[750, 8E5, n, k, 20]};
  J = tm.createClass({ta:function() {
    this.name = "abstract enemy";
    this.ra = 9999
  }, Qb:p(), vb:p(), update:p(), Rb:p(), draw:p(), Ua:function() {
    z.Sc(this.x, this.y, this.$, this.gd);
    this.remove()
  }});
  J.xa = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, ta:function() {
    c("kujo", this);
    this.ia = d("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.ba.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.ia.setFrameIndex(7) : this.ia.setFrameIndex(8);
    this.ia.draw(a)
  }});
  J.xa = J.xa();
  J.ha = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, ta:function() {
    c("kiryu", this);
    this.ia = d("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.ba.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.ia.setFrameIndex(9) : this.ia.setFrameIndex(10);
    this.ia.draw(a)
  }});
  J.ha = J.ha();
  J.za = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, ta:function() {
    c("natsuki", this);
    this.ia = d("tex1", 48, 48);
    this.boundingRadius = 24
  }, update:function() {
    switch(~~(this.dir / (0.25 * Math.PI))) {
      case 0:
        this.ia.setFrameIndex(16, 64, 64);
        break;
      case 1:
        this.ia.setFrameIndex(24, 64, 64);
        break;
      case 2:
        this.ia.setFrameIndex(23, 64, 64);
        break;
      case 3:
        this.ia.setFrameIndex(11, 64, 64);
        break;
      case 4:
        this.ia.setFrameIndex(12, 64, 64);
        break;
      case 5:
        this.ia.setFrameIndex(13, 64, 64);
        break;
      case 6:
        this.ia.setFrameIndex(14, 64, 64);
        break;
      case 7:
        this.ia.setFrameIndex(15, 64, 64)
    }
  }, draw:function(a) {
    this.ia.draw(a)
  }, Ua:function() {
    z.Uf(this.x, this.y, this.$);
    this.remove()
  }});
  J.za = J.za();
  J.pb = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, ta:function() {
    c("kurokawa", this);
    this.ia = d("tex1", 128, 128);
    this.ia.srcRect.x = 320;
    this.ia.srcRect.y = 128;
    this.ia.srcRect.width = 128;
    this.ia.srcRect.height = 128;
    this.boundingWidth = 100;
    this.boundingHeight = 20
  }, update:p(), draw:function(a) {
    this.ia.draw(a)
  }, Ua:function() {
    z.re(this.x, this.y, this.$);
    this.remove()
  }});
  J.pb = J.pb();
  J.Cc = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, ta:function() {
    c("akimoto", this);
    this.ia = d("tex1", 256, 128);
    this.ia.srcRect.x = 64;
    this.ia.srcRect.y = 128;
    this.ia.srcRect.width = 256;
    this.ia.srcRect.height = 128;
    this.boundingWidth = 200;
    this.boundingHeightBottom = 10;
    this.boundingHeightTop = 60
  }, update:p(), draw:function(a) {
    this.ia.draw(a)
  }, Ua:function() {
    b.call(this)
  }});
  J.Cc = J.Cc();
  J.qa = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, ta:function() {
    c("kise", this);
    this.ia = d("tex1", 128, 128);
    this.ia.srcRect.x = 128;
    this.ia.srcRect.y = 256;
    this.ia.srcRect.width = 128;
    this.ia.srcRect.height = 128;
    this.boundingHeight = this.boundingWidth = 20
  }, draw:function(a) {
    this.ia.draw(a)
  }, Ua:function() {
    z.re(this.x, this.y, this.$);
    this.remove()
  }});
  J.qa = J.qa();
  J.gc = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, ta:function() {
    c("yukishiro", this);
    this.boundingWidth = 200;
    this.boundingHeight = 80
  }, Ua:function() {
    b.call(this)
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-100, -40, 200, 80)
  }});
  J.gc = J.gc();
  J.$d = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, Ua:function() {
    a.call(this)
  }});
  J.$d = J.$d();
  var d = tm.createClass({superClass:tm.app.Sprite, init:function(a, b, c) {
    this.superInit(a, b, c)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }})
})();
(function() {
  function a(a) {
    var b = [].concat(a._listeners.enterframe);
    if(b) {
      for(var d = 0, j = b.length;d < j;d++) {
        b[d] && b[d].Ed && a.removeEventListener("enterframe", b[d])
      }
    }
  }
  function b(a, b) {
    var d = v[b].Rc();
    a.addEventListener("enterframe", d);
    a.addEventListener("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  }
  K = tm.createClass({ta:p(), Qb:p(), vb:p(), update:p(), Rb:p(), Ua:function() {
    a(this)
  }});
  K.Xa = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, Qb:function() {
    var a = S(64, 192);
    this.tweener.clear().wait(U(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, vb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  K.Xa = K.Xa();
  K.xb = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, Qb:function() {
    var a = S(192, 320);
    this.tweener.clear().wait(U(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, vb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  K.xb = K.xb();
  K.ha = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ta:function() {
    this.angle = 0.5 * Math.PI;
    this.Ud = U(0, 60);
    this.speed = 0
  }, update:function() {
    this.frame === this.Ud ? this.speed = 8 : this.frame === this.Ud + 10 ? b(this, "basic1-0") : this.Ud < this.frame && this.y < this.ba.y && (this.angle += Math.atan2(this.ba.y - this.y, this.ba.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = R(this.angle, 0.5, Math.PI - 0.5));
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    !this.Eb() && this.ab && this.remove();
    if(9E4 > Q(this, this.ba) || this.y > this.ba.y) {
      this.gb = n
    }
  }});
  K.ha = K.ha();
  K.Eg = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ta:function() {
    this.speed = 0.8;
    this.dir = 0
  }, Rb:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.ab && !this.Eb() && this.remove();
    this.gb = this.y < this.ba.y
  }});
  K.Ta = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ta:function() {
    this.speed = 0.7;
    this.dir = 0.25 * Math.PI
  }, Rb:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.ab && !this.Eb() && this.remove();
    this.gb = this.y < this.ba.y
  }});
  K.Ta = K.Ta();
  K.Mb = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ta:function() {
    this.speed = 1;
    this.dir = Math.PI
  }, Rb:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.ab && !this.Eb() && this.remove();
    this.gb = this.y < this.ba.y
  }});
  K.Mb = K.Mb();
  K.qa = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ta:function() {
    this.speed = 1;
    this.dir = Math.PI
  }, Rb:function() {
    b(this, "basic3-0")
  }, update:function() {
    this.ab && !this.Eb() && this.remove();
    this.gb = this.y < this.ba.y
  }});
  K.qa = K.qa();
  K.qb = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ta:function() {
    this.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      b(this, "kurokawa-1")
    }.bind(this))
  }, update:function() {
    this.y += 0.5;
    this.ab && !this.Eb() && this.remove();
    this.gb = this.y < this.ba.y
  }});
  K.qb = K.qb();
  K.Dc = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, ta:function() {
    this.tweener.clear().moveBy(0, 320, 1800, "easeOutQuad").call(function() {
      b(this, "komachi-1")
    }.bind(this))
  }, update:function() {
    this.y += 0.3;
    this.ab && !this.Eb() && this.remove();
    this.gb = this.y < this.ba.y
  }});
  K.Dc = K.Dc();
  K.rf = tm.createClass({superClass:K, Od:l, init:function(a) {
    this.superInit();
    this.Od = a
  }, ta:function() {
    this.zd = this.Le = n;
    this.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Le = k;
      this.vb();
      var a = function() {
        var b = 2 * Math.random() * Math.PI, d = S(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(this))
  }, update:function() {
    if(!(this.Le === n || 0 >= this.ra) && 1500 < this.frame && this.zd === n) {
      console.log("end"), this.zd = k, a(this), this.tweener.clear().move(this.x, -100, 1200, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    }
  }, vb:function() {
    if(!this.zd) {
      var a = this.ca.Od.shift();
      b(this, a);
      this.ca.Od.push(a)
    }
  }});
  K.gc = K.rf(["honoka-1"])
})();
var Z = K, $ = J;
ja = {"heri1-left":[{ca:Z.Xa, da:$.ha, x:48, y:-100}, {ca:Z.xb, da:$.ha, x:96, y:-100}, {ca:Z.Xa, da:$.ha, x:144, y:-100}, {ca:Z.xb, da:$.ha, x:192, y:-100}, {ca:Z.Xa, da:$.ha, x:240, y:-100}], "heri1-center":[{ca:Z.Xa, da:$.ha, x:144, y:-100}, {ca:Z.xb, da:$.ha, x:192, y:-100}, {ca:Z.Xa, da:$.ha, x:240, y:-100}, {ca:Z.xb, da:$.ha, x:288, y:-100}, {ca:Z.Xa, da:$.ha, x:336, y:-100}], "heri1-right":[{ca:Z.Xa, da:$.ha, x:240, y:-100}, {ca:Z.xb, da:$.ha, x:288, y:-100}, {ca:Z.Xa, da:$.ha, x:336, y:-100}, 
{ca:Z.xb, da:$.ha, x:384, y:-100}, {ca:Z.Xa, da:$.ha, x:432, y:-100}], "heri2-left":[{ca:Z.ha, da:$.xa, x:48, y:-100}, {ca:Z.ha, da:$.xa, x:96, y:-100}, {ca:Z.ha, da:$.xa, x:144, y:-100}, {ca:Z.ha, da:$.xa, x:192, y:-100}, {ca:Z.ha, da:$.xa, x:240, y:-100}], "heri2-center":[{ca:Z.ha, da:$.xa, x:144, y:-100}, {ca:Z.ha, da:$.xa, x:192, y:-100}, {ca:Z.ha, da:$.xa, x:240, y:-100}, {ca:Z.ha, da:$.xa, x:288, y:-100}, {ca:Z.ha, da:$.xa, x:336, y:-100}], "heri2-right":[{ca:Z.ha, da:$.xa, x:240, y:-100}, 
{ca:Z.ha, da:$.xa, x:288, y:-100}, {ca:Z.ha, da:$.xa, x:336, y:-100}, {ca:Z.ha, da:$.xa, x:384, y:-100}, {ca:Z.ha, da:$.xa, x:432, y:-100}], "tankRD-left":[{ca:Z.Ta, da:$.za, x:78, y:-50}, {ca:Z.Ta, da:$.za, x:28, y:-100}, {ca:Z.Ta, da:$.za, x:-22, y:-150}, {ca:Z.Ta, da:$.za, x:-72, y:-200}, {ca:Z.Ta, da:$.za, x:-122, y:-250}], "tankRD-center":[{ca:Z.Ta, da:$.za, x:222, y:-50}, {ca:Z.Ta, da:$.za, x:172, y:-100}, {ca:Z.Ta, da:$.za, x:122, y:-150}, {ca:Z.Ta, da:$.za, x:72, y:-200}, {ca:Z.Ta, da:$.za, 
x:22, y:-250}], "tankL-top":[{ca:Z.Mb, da:$.za, x:550, y:-128}, {ca:Z.Mb, da:$.za, x:620, y:-128}, {ca:Z.Mb, da:$.za, x:690, y:-128}, {ca:Z.Mb, da:$.za, x:760, y:-128}, {ca:Z.Mb, da:$.za, x:830, y:-128}], "cannon-0":[{ca:Z.qa, da:$.qa, x:48, y:-100}], "cannon-1":[{ca:Z.qa, da:$.qa, x:96, y:-100}], "cannon-2":[{ca:Z.qa, da:$.qa, x:144, y:-100}], "cannon-3":[{ca:Z.qa, da:$.qa, x:192, y:-100}], "cannon-4":[{ca:Z.qa, da:$.qa, x:240, y:-100}], "cannon-5":[{ca:Z.qa, da:$.qa, x:288, y:-100}], "cannon-6":[{ca:Z.qa, 
da:$.qa, x:336, y:-100}], "cannon-7":[{ca:Z.qa, da:$.qa, x:384, y:-100}], "cannon-8":[{ca:Z.qa, da:$.qa, x:432, y:-100}], "fighter-m-0":[{ca:Z.qb, da:$.pb, x:96, y:-192}], "fighter-m-1":[{ca:Z.qb, da:$.pb, x:144, y:-192}], "fighter-m-2":[{ca:Z.qb, da:$.pb, x:192, y:-192}], "fighter-m-3":[{ca:Z.qb, da:$.pb, x:240, y:-192}], "fighter-m-4":[{ca:Z.qb, da:$.pb, x:288, y:-192}], "fighter-m-5":[{ca:Z.qb, da:$.pb, x:336, y:-192}], "fighter-m-6":[{ca:Z.qb, da:$.pb, x:384, y:-192}], "komachi-0":[{ca:Z.Dc, 
da:$.Cc, x:144, y:-192}], "komachi-1":[{ca:Z.Dc, da:$.Cc, x:336, y:-192}], yukishiro:[{ca:Z.gc, da:$.gc, x:240, y:-100}]};
(function() {
  function a(a, b) {
    return h.action([b(a), h.repeat(4, [b(h.speed(0.01, "sequence"))])])
  }
  function b(a, b, c, d, f) {
    return h.action([h.ka(h.direction(a, "absolute"), c, d, f, i, i), h.repeat(11, [h.ka(h.direction((b - a) / 11, "sequence"), c, d, f, i, i)])])
  }
  function c(a, b, c, d, f, j, m) {
    return h.action([h.ka(h.direction(b), d, f, j, m, i), h.repeat(a - 1, [h.ka(h.direction((c - b) / (a - 1), "sequence"), d, f, j, m, i)])])
  }
  function f(a) {
    return h.ka(h.direction(0), a || m, h.fa({frame:0}))
  }
  function d(a) {
    return h.ka(h.direction(0), a || m, h.fa)
  }
  function j(a) {
    return h.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function m(a) {
    return h.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function u(a) {
    return h.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return h.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function w(a) {
    return h.wait(a + "*(1-$rank)*$hyperOff")
  }
  v = {};
  var h = q.oa;
  v["basic0-0"] = new q.ya({top:h.action([d])});
  v["basic0-4"] = new q.ya({top:h.action([h.repeat(3, [h.repeat(5, [h.ka(h.direction(-20), h.speed("$loop.count*0.06+0.75"), h.fa), h.ka(h.direction(0), h.speed("$loop.count*0.06+0.75"), h.fa), h.ka(h.direction(20), h.speed("$loop.count*0.06+0.75"), h.fa)]), w(40)])])});
  v["basic1-0"] = new q.ya({top:h.action([h.repeat(999, [w(20), d(function(a) {
    return h.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  })])])});
  v["basic2-0"] = new q.ya({top:h.action([h.wait("120"), h.repeat(999, [w(50), d(j)])])});
  v["basic3-0"] = new q.ya({top:h.action([h.wait(20), h.repeat(999, [w(100), f(j(0)), f(j(1)), f(j(2))])])});
  v["kurokawa-1"] = new q.ya({top0:h.action([h.repeat(999, [a(j, function(a) {
    return c(4, -45, 45, a, h.fa({frame:2}), h.offsetX(-45), h.Ka(k))
  }), a(j, function(a) {
    return c(4, -45, 45, a, h.fa({frame:2}), h.offsetX(45), h.Ka(k))
  }), w(90)])]), top1:h.action([h.repeat(999, [h.ka(h.direction(0), j, h.fa({eb:k, frame:3}), h.offsetX(-45), h.Ka(k)), w(45), h.ka(h.direction(0), j, h.fa({eb:k, frame:3}), h.offsetX(45), h.Ka(k)), w(45)])])});
  v["komachi-1"] = new q.ya({top0:h.action([h.repeat(20, [h.ka(h.direction(210, "absolute"), r(1), h.fa, h.offsetX(-40)), h.ka(h.direction(120, "sequence"), r(1), h.fa, h.offsetX(-40)), h.ka(h.direction(120, "sequence"), r(1), h.fa, h.offsetX(-40)), h.repeat(57, [w(8), h.ka(h.direction(-720 / 57, "sequence"), r(1), h.fa, h.offsetX(-40)), h.ka(h.direction(120, "sequence"), r(1), h.fa, h.offsetX(-40)), h.ka(h.direction(120, "sequence"), r(1), h.fa, h.offsetX(-40))])])]), top1:h.action([h.repeat(20, 
  [h.ka(h.direction(-210, "absolute"), r(1), h.fa, h.offsetX(40)), h.ka(h.direction(120, "sequence"), r(1), h.fa, h.offsetX(40)), h.ka(h.direction(120, "sequence"), r(1), h.fa, h.offsetX(40)), h.repeat(57, [w(8), h.ka(h.direction(720 / 57, "sequence"), r(1), h.fa, h.offsetX(40)), h.ka(h.direction(120, "sequence"), r(1), h.fa, h.offsetX(40)), h.ka(h.direction(120, "sequence"), r(1), h.fa, h.offsetX(40))])])]), top2:h.action([h.repeat(70, [h.ka(h.direction(0), m(0), h.fa({eb:k, frame:0}), h.offsetX(-110), 
  h.Ka(k)), h.repeat(3, [h.wait(3), h.ka(h.direction(0, "sequence"), m(0), h.fa({eb:k, frame:0}), h.offsetX(-110), h.Ka(k))]), w(10), h.ka(h.direction(0), m(0), h.fa({eb:k, frame:0}), h.offsetX(110), h.Ka(k)), h.repeat(3, [h.wait(3), h.ka(h.direction(0, "sequence"), m(0), h.fa({eb:k, frame:0}), h.offsetX(110), h.Ka(k))]), w(10)])])});
  v["honoka-1"] = new q.ya({top0:h.action([h.wait(60), h.repeat(10, [c(6, -40, 40, m, h.fa({eb:k, frame:4})), w(30), c(7, -40, 40, u, h.fa({eb:k, frame:4})), w(30)])]), top1:h.action([h.wait(60), h.repeat(5, [c(2, -2, 2, u(2), h.fa({frame:1})), c(3, -3, 3, u(3), h.fa({frame:1})), c(4, -4, 4, u(4), h.fa({frame:1})), c(5, -5, 5, u(5), h.fa({frame:1})), w(110)])]), top2:h.action([h.repeat(20, [b(-10, -170, r, h.fa({eb:k, frame:0}), h.offsetX(-80)), w(30)])]), top3:h.action([h.repeat(20, [b(10, 170, 
  r, h.fa({eb:k, frame:0}), h.offsetX(80)), w(30)])])});
  v.ta = function() {
    for(var a = 0;800 > a;a++) {
      V.push(I())
    }
    a = v.Qc = tm.Ma.Kb.nc;
    a.Fd = function(a) {
      return!(a instanceof I) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.je = function(a) {
      var b = V.shift(0);
      if(b) {
        return N.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.eb ? (b.scaleX = 1, b.scaleY = 1, b.Ib = n, b.update = function() {
          this.rotation += 15
        }) : (b.scaleX = 0.8, b.scaleY = 1.5, b.Ib = k), b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.le = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.Vb = 4;
    q.la.ua.$rank = 0;
    q.la.ua.$hyperOff = 1
  };
  v.erase = function(a) {
    for(var b = [].concat(N), c = 0, d = b.length;c < d;c++) {
      a && ra(n).setPosition(b[c].x, b[c].y), b[c].Ua()
    }
  };
  v.lc = function() {
    for(var a = [].concat(N), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  I = tm.createClass({superClass:tm.app.Sprite, ra:0, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("added", function() {
      this.ra = B.Te
    });
    this.addEventListener("removed", function() {
      V.push(this);
      var a = N.indexOf(this);
      -1 !== a && N.splice(a, 1);
      this.clearEventListener("enterframe")
    })
  }, Ua:function() {
    var a = E(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var V = [], N = I.Ha = []
})();
tm.createClass({superClass:G, ig:k, xe:0, init:function(a, b, c, f) {
  this.superInit(a, b, c, f);
  this.xe = this.ra;
  this.addEventListener("added", function() {
    this.$.Oc = this;
    this.$.Ke()
  });
  this.addEventListener("removed", function() {
    this.$.gg()
  })
}, tb:function(a) {
  if(this.superClass.prototype.tb.call(this, a)) {
    return k
  }
}});
var R, S, wa, U, Ba;
R = function(a, b, c) {
  return a < b ? b : a > c ? c : a
};
Ba = Math.PI / 180;
wa = function(a) {
  return a * Ba
};
U = function(a, b) {
  return window.Math.floor(Math.random() * (b - a + 1)) + a
};
S = function(a, b) {
  return window.Math.random() * (b - a) + a
};

