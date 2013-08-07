/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function f(a) {
  throw a;
}
var i = void 0, k = !0, l = null, m = !1;
function n() {
  return function() {
  }
}
var p = {de:this};
(function() {
  function a(a, b) {
    for(var d = 0, g = a.length;d < g;d++) {
      if(a[d].label == b) {
        return a[d]
      }
    }
  }
  p.Aa = function(a) {
    this.type = "none";
    this.root = this;
    this.sa = [];
    this.pc = [];
    this.uc = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof p.Ha ? this.sa.push(a[b]) : a[b] instanceof p.fb ? this.pc.push(a[b]) : a[b] instanceof p.Gb && this.uc.push(a[b]))
      }
      a = 0;
      for(b = this.sa.length;a < b;a++) {
        this.sa[a].Na(this)
      }
      a = 0;
      for(b = this.pc.length;a < b;a++) {
        this.pc[a].Na(this)
      }
      a = 0;
      for(b = this.uc.length;a < b;a++) {
        this.uc[a].Na(this)
      }
    }
  };
  p.Aa.prototype.Ld = function(c) {
    return a(this.sa, c)
  };
  p.Aa.prototype.Pe = function() {
    for(var a = [], b = 0, d = this.sa.length;b < d;b++) {
      var g = this.sa[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  p.Aa.prototype.Ge = function(a) {
    var b;
    if(b = this.Ld(a)) {
      return b
    }
    f(Error("action labeled '" + a + "' is undefined."))
  };
  p.Aa.prototype.He = function(c) {
    return a(this.pc, c)
  };
  p.Aa.prototype.Ie = function(a) {
    var b;
    if(b = this.He(a)) {
      return b
    }
    f(Error("bullet labeled '" + a + "' is undefined."))
  };
  p.Aa.prototype.Je = function(c) {
    return a(this.uc, c)
  };
  p.Aa.prototype.Ke = function(a) {
    var b;
    if(b = this.Je(a)) {
      return b
    }
    f(Error("fire labeled '" + a + "' is undefined."))
  };
  p.fb = function() {
    this.root = this.label = l;
    this.direction = new p.Wa(0);
    this.speed = new p.Za(1);
    this.sa = [];
    this.ya = {};
    this.ga = {}
  };
  p.fb.prototype.clone = function(a) {
    var b = new p.fb;
    b.label = this.label;
    b.root = this.root;
    b.sa = this.sa;
    b.direction = new p.Wa(a.va(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new p.Za(a.va(this.speed.value));
    b.speed.type = this.speed.type;
    b.ya = this.ya;
    b.ga = a.ga;
    return b
  };
  p.fb.prototype.Na = function(a) {
    this.root = a;
    for(var b = 0, d = this.sa.length;b < d;b++) {
      this.sa[b].Na(a)
    }
  };
  p.bc = function(a) {
    this.root = l;
    this.label = a;
    this.qa = []
  };
  p.bc.prototype.clone = function(a) {
    var b = a.ga;
    a.ga = a.Rc(this.qa);
    var d = this.root.Ie(this.label).clone(a);
    a.ga = b;
    return d
  };
  p.bc.prototype.Na = function(a) {
    this.root = a
  };
  p.ra = function() {
    this.Ea = ""
  };
  p.ra.prototype.Na = function(a) {
    this.root = a
  };
  p.Ha = function() {
    this.Ea = "action";
    this.root = this.label = l;
    this.Qa = [];
    this.qa = []
  };
  p.Ha.prototype = new p.ra;
  p.Ha.prototype.Na = function(a) {
    this.root = a;
    for(var b = 0, d = this.Qa.length;b < d;b++) {
      this.Qa[b].Na(a)
    }
  };
  p.Ha.prototype.clone = function() {
    var a = new p.Ha;
    a.label = this.label;
    a.root = this.root;
    a.Qa = this.Qa;
    return a
  };
  p.Fb = function(a) {
    this.Ea = "actionRef";
    this.label = a;
    this.root = l;
    this.qa = []
  };
  p.Fb.prototype = new p.ra;
  p.Fb.prototype.clone = function() {
    var a = new p.Ha;
    a.root = this.root;
    a.Qa.push(this);
    return a
  };
  p.Gb = function() {
    this.Ea = "fire";
    this.ha = this.speed = this.direction = this.root = this.label = l;
    this.ya = new p.Kc
  };
  p.Gb.prototype = new p.ra;
  p.Gb.prototype.Na = function(a) {
    this.root = a;
    this.ha && this.ha.Na(a)
  };
  p.Lc = function(a) {
    this.Ea = "fireRef";
    this.label = a;
    this.qa = []
  };
  p.Lc.prototype = new p.ra;
  p.cc = function() {
    this.Ea = "changeDirection";
    this.direction = new p.Wa;
    this.za = 0
  };
  p.cc.prototype = new p.ra;
  p.dc = function() {
    this.Ea = "changeSpeed";
    this.speed = new p.Za;
    this.za = 0
  };
  p.dc.prototype = new p.ra;
  p.ac = function() {
    this.Ea = "accel";
    this.Ua = new p.Mc;
    this.Va = new p.Pc;
    this.za = 0
  };
  p.ac.prototype = new p.ra;
  p.fc = function(a) {
    this.Ea = "wait";
    this.value = a || 0
  };
  p.fc.prototype = new p.ra;
  p.Oc = function() {
    this.Ea = "vanish"
  };
  p.Oc.prototype = new p.ra;
  p.ec = function() {
    this.Ea = "repeat";
    this.$d = 0;
    this.action = l;
    this.qa = []
  };
  p.ec.prototype = new p.ra;
  p.ec.prototype.Na = function(a) {
    this.root = a;
    this.action && this.action.Na(a)
  };
  p.Jc = function(a, b) {
    this.Ea = "bind";
    this.kf = a;
    this.Ee = b
  };
  p.Jc.prototype = new p.ra;
  p.Nc = function(a, b) {
    this.Ea = "notify";
    this.Ae = a;
    this.qa = b || l
  };
  p.Nc.prototype = new p.ra;
  p.ce = new p.ra;
  p.Wa = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  p.Za = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  p.Mc = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  p.Pc = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  p.Kc = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.ta = k;
    a.ta !== i && (this.ta = !!a.ta)
  };
  p.od = function(a) {
    this.value = a || 0
  };
  p.pd = function(a) {
    this.value = a || 0
  };
  p.nd = function(a) {
    this.value = !!a
  }
})();
p.hb = function(a, c) {
  this.ud = a;
  this.hc = [];
  this.ib = -1;
  this.ua = l;
  this.ga = {};
  this.gc = {$rank:c || 0}
};
p.hb.prototype.next = function() {
  this.ib += 1;
  if(this.ua !== l) {
    var a = this.ua.Qa[this.ib];
    if(a !== i) {
      if(a instanceof p.Ha) {
        return this.Pb(), this.ua = a, this.ga = this.Qc(), this.next()
      }
      if(a instanceof p.Fb) {
        return this.Pb(), this.ua = this.ud.Ge(a.label), this.ga = this.Rc(a.qa), this.next()
      }
      if(a instanceof p.ec) {
        return this.ga.Lb = 0, this.ga.Ud = this.va(a.$d) | 0, this.Pb(), this.ua = a.action.clone(), this.ga = this.Qc(), this.next()
      }
      if(a instanceof p.Gb) {
        var c = new p.Gb;
        c.ha = a.ha.clone(this);
        a.direction !== l && (c.direction = new p.Wa(this.va(a.direction.value)), c.direction.type = a.direction.type);
        a.speed !== l && (c.speed = new p.Za(this.va(a.speed.value)), c.speed.type = a.speed.type);
        c.ya = a.ya;
        return c
      }
      return a instanceof p.Lc ? (this.Pb(), this.ua = new p.Ha, this.ua.Qa = [this.ud.Ke(a.label)], this.ga = this.Rc(a.qa), this.next()) : a instanceof p.cc ? (c = new p.cc, c.direction.type = a.direction.type, c.direction.value = this.va(a.direction.value), c.za = this.va(a.za), c) : a instanceof p.dc ? (c = new p.dc, c.speed.type = a.speed.type, c.speed.value = this.va(a.speed.value), c.za = this.va(a.za), c) : a instanceof p.ac ? (c = new p.ac, c.Ua.type = a.Ua.type, c.Ua.value = this.va(a.Ua.value), 
      c.Va.type = a.Va.type, c.Va.value = this.va(a.Va.value), c.za = this.va(a.za), c) : a instanceof p.fc ? new p.fc(this.va(a.value)) : a instanceof p.Oc ? a : a instanceof p.Jc ? (this.ga["$" + a.kf] = this.va(a.Ee), p.ce) : a instanceof p.Nc ? a : l
    }
    this.pe();
    if(this.ua === l) {
      return l
    }
    if((a = this.ua.Qa[this.ib]) && "repeat" == a.Ea) {
      this.ga.Lb++, this.ga.Lb < this.ga.Ud && (this.Pb(), this.ua = a.action.clone(), this.ga = this.Qc())
    }
    return this.next()
  }
  return l
};
p.hb.prototype.Pb = function() {
  this.hc.push({action:this.ua, cursor:this.ib, scope:this.ga});
  this.ib = -1
};
p.hb.prototype.pe = function() {
  var a = this.hc.pop();
  a ? (this.ib = a.cursor, this.ua = a.action, this.ga = a.scope) : (this.ib = -1, this.ua = l, this.ga = {})
};
p.hb.prototype.va = function(a) {
  var c;
  if("number" === typeof a) {
    return a
  }
  if(isNaN(c = Number(a))) {
    if((c = this.ga[a]) || (c = this.gc[a])) {
      return c
    }
    if("$rand" == a) {
      return Math.random()
    }
  }else {
    return c
  }
  c = {};
  for(var b in this.gc) {
    this.gc.hasOwnProperty(b) && (c[b] = this.gc[b])
  }
  for(b in this.ga) {
    this.ga.hasOwnProperty(b) && (c[b] = this.ga[b])
  }
  c.$rand = Math.random();
  (b = this.hc[this.hc.length - 1]) && (c.$loop = {index:b.scope.Lb, count:b.scope.Lb + 1, first:0 === b.scope.Lb, last:b.scope.Lb + 1 >= b.scope.Ud});
  return(new Function("return " + a.split("$").join("this.$"))).apply(c)
};
p.hb.prototype.Rc = function(a) {
  var c = {};
  if(a) {
    for(var b = 0, d = a.length;b < d;b++) {
      c["$" + (b + 1)] = this.va(a[b])
    }
  }else {
    for(b in this.ga) {
      this.ga.hasOwnProperty(b) && (c[b] = this.ga[b])
    }
  }
  return c
};
p.hb.prototype.Qc = function() {
  var a = {}, c;
  for(c in this.ga) {
    this.ga.hasOwnProperty(c) && (a[c] = this.ga[c])
  }
  return a
};
p.Aa.prototype.ad = function(a, c) {
  var b = new p.hb(this, c), d = this.Ld(a);
  d && (b.ua = d);
  return b
};
p.fb.prototype.ad = function(a) {
  a = new p.hb(this.root, a);
  var c = new p.Ha;
  c.root = this.root;
  c.Qa = this.sa;
  a.ua = c;
  a.ga = this.ga;
  return a
};
p.ia = function(a) {
  a = a || "";
  for(var c in p.ia) {
    p.ia.hasOwnProperty(c) && (p.de[a + c] = p.ia[c])
  }
};
p.ia.action = function(a) {
  if(0 < arguments.length) {
    for(var c = 0, b = arguments.length;c < b;c++) {
      arguments[c] instanceof Function && (arguments[c] = arguments[c]())
    }
  }
  if(a instanceof Array) {
    c = 0;
    for(b = a.length;c < b;c++) {
      a[c] instanceof Function && (a[c] = a[c]())
    }
  }
  var d = new p.Ha;
  if(a instanceof Array) {
    a.some(function(a) {
      return!(a instanceof p.ra)
    }) && f(Error("argument type error.")), d.Qa = a
  }else {
    c = 0;
    for(b = arguments.length;c < b;c++) {
      arguments[c] instanceof p.ra ? d.Qa[c] = arguments[c] : f(Error("argument type error."))
    }
  }
  return d
};
p.ia.qf = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("label is required."));
  d = new p.Fb(a);
  if(c instanceof Array) {
    d.qa = c
  }else {
    for(b = 1;b < arguments.length;b++) {
      d.qa.push(arguments[b])
    }
  }
  return d
};
p.ia.ha = function(a, c, b, d) {
  for(var g = 0, h = arguments.length;g < h;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  h = new p.fb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof p.Wa ? h.direction = arguments[g] : arguments[g] instanceof p.Za ? h.speed = arguments[g] : arguments[g] instanceof p.Ha ? h.sa.push(arguments[g]) : arguments[g] instanceof p.Fb ? h.sa.push(arguments[g]) : arguments[g] instanceof Array ? h.sa.push(p.ia.action(arguments[g])) : arguments[g] instanceof Object ? h.ya = arguments[g] : "string" === typeof arguments[g] && (h.label = arguments[g])
  }
  return h
};
p.ia.sf = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("label is required."));
  d = new p.bc(a);
  if(c instanceof Array) {
    d.qa = c
  }else {
    for(b = 1;b < arguments.length;b++) {
      d.qa.push(arguments[b])
    }
  }
  return d
};
p.ia.ma = function(a, c, b, d) {
  for(var g = 0, h = arguments.length;g < h;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  h = new p.Gb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof p.Wa ? h.direction = arguments[g] : arguments[g] instanceof p.Za ? h.speed = arguments[g] : arguments[g] instanceof p.fb ? h.ha = arguments[g] : arguments[g] instanceof p.bc ? h.ha = arguments[g] : arguments[g] instanceof p.Kc ? h.ya = arguments[g] : arguments[g] instanceof p.od ? h.ya.offsetX = arguments[g].value : arguments[g] instanceof p.pd ? h.ya.offsetY = arguments[g].value : arguments[g] instanceof p.nd && (h.ya.ta = arguments[g].value)
  }
  h.ha === i && f(Error("bullet (or bulletRef) is required."));
  return h
};
p.ia.yf = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("label is required."));
  d = new p.Lc(a);
  if(c instanceof Array) {
    d.qa = c
  }else {
    for(b = 1;b < arguments.length;b++) {
      d.qa.push(arguments[b])
    }
  }
  return d
};
p.ia.tf = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("direction is required."));
  c === i && f(Error("term is required."));
  b = new p.cc;
  b.direction = a instanceof p.Wa ? a : new p.Wa(a);
  b.za = c;
  return b
};
p.ia.uf = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("speed is required."));
  c === i && f(Error("term is required."));
  b = new p.dc;
  b.speed = a instanceof p.Za ? a : new p.Za(a);
  b.za = c;
  return b
};
p.ia.pf = function(a, c, b) {
  for(var d = 0, g = arguments.length;d < g;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  g = new p.ac;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof p.Mc ? g.Ua = a : arguments[d] instanceof p.Pc ? g.Va = c : g.za = arguments[d]
  }
  g.Ua === i && g.Va === i && f(Error("horizontal or vertical is required."));
  g.za === i && f(Error("term is required."));
  return g
};
p.ia.wait = function(a) {
  for(var c = 0, b = arguments.length;c < b;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && f(Error("value is required."));
  return new p.fc(a)
};
p.ia.Jf = function() {
  return new p.Oc
};
p.ia.repeat = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("times is required."));
  c === i && f(Error("action is required."));
  d = new p.ec;
  d.$d = a;
  if(c instanceof p.Ha || c instanceof p.Fb) {
    d.action = c
  }else {
    if(c instanceof Array) {
      d.action = p.ia.action(c)
    }else {
      for(var g = [], b = 1;b < arguments.length;b++) {
        g.push(arguments[b])
      }
      d.action = p.ia.action(g)
    }
  }
  return d
};
p.ia.rf = function(a, c) {
  return new p.Jc(a, c)
};
p.ia.Ef = function(a, c) {
  return new p.Nc(a, c)
};
p.ia.direction = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("value is required."));
  b = new p.Wa(a);
  c !== i && (b.type = c);
  return b
};
p.ia.speed = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("value is required."));
  b = new p.Za(a);
  c && (b.type = c);
  return b
};
p.ia.Ua = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("value is required."));
  b = new p.Mc(a);
  c && (b.type = c);
  return b
};
p.ia.Va = function(a, c) {
  for(var b = 0, d = arguments.length;b < d;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && f(Error("value is required."));
  b = new p.Pc(a);
  c && (b.type = c);
  return b
};
p.ia.xf = function(a) {
  return new p.Kc(a)
};
p.ia.offsetX = function(a) {
  return new p.od(a)
};
p.ia.offsetY = function(a) {
  return new p.pd(a)
};
p.ia.ta = function(a) {
  return new p.nd(a)
};
tm.Ca = tm.Ca || {};
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
  function c(a, b) {
    return Math.atan2(b.y - a.y, b.x - a.x)
  }
  tm.Ca.tb = tm.createClass({init:function(a) {
    a || f(Error("argument is invalid.", a));
    this.rd = a
  }, qc:function(a, b) {
    var c = this.rd.Pe();
    if(b === i && 0 < c.length) {
      for(var d = [], q = 0, K = c.length;q < K;q++) {
        d[d.length] = this.sd(a, c[q])
      }
      for(var v = function() {
        for(var a = d.length;a--;) {
          d[a].call(this)
        }
        v.Xc == d.length && (v.Tb = k, this.dispatchEvent(tm.event.Event("completeattack")))
      }, q = d.length;q--;) {
        d[q].Hc = v
      }
      v.Xc = 0;
      v.Cd = function() {
        this.Xc++
      };
      v.Xc = 0;
      v.Tb = m;
      v.bd = k;
      return v
    }
    return this.sd(a, b)
  }, sd:function(a, b) {
    function c() {
      c.da += 1;
      this.da = c.da;
      var a = c.Yc, b = c.oe;
      if(b) {
        if(c.da < c.Vc ? c.direction += c.Ib : c.da === c.Vc && (c.direction = c.kb), c.da < c.Wc ? c.speed += c.$b : c.da === c.Wc && (c.speed = c.Ob), c.da < c.Sc ? (c.Bb += c.kc, c.Db += c.lc) : c.da === c.Sc && (c.Bb = c.ic, c.Db = c.jc), this.x += Math.cos(c.direction) * c.speed * a.Cb, this.y += Math.sin(c.direction) * c.speed * a.Cb, this.x += c.Bb * a.Cb, this.y += c.Db * a.Cb, a.cd(this)) {
          if(a.rb || this.rb) {
            this.rotation = (c.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = c.speed
          }
          if(!(c.da < c.ae || c.Tb)) {
            for(var d;d = c.be.next();) {
              switch(d.Ea) {
                case "fire":
                  b.le.call(this, d, a, c, b);
                  break;
                case "wait":
                  a = 0;
                  c.ae = "number" === typeof d.value ? c.da + d.value : 0 !== (a = ~~d.value) ? c.da + a : c.da + eval(d.value);
                  return;
                case "changeDirection":
                  b.ge.call(this, d, a, c);
                  break;
                case "changeSpeed":
                  b.he.call(this, d, c);
                  break;
                case "accel":
                  b.ee.call(this, d, c);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  b.me.call(this, d)
              }
            }
            c.Tb = k;
            c.Hc ? c.Hc.Cd() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), c.Tb = k, c.Hc ? c.Hc.Cd() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    a = function(a) {
      var b = {}, c = tm.Ca.tb.Vb, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || f(Error("target is undefined in config."));
    b = b || "top";
    "string" === typeof b ? c.be = this.rd.ad(b, a.kd) : b instanceof p.fb ? c.be = b.ad(a.kd) : (window.console.error(a, b), f(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    c.oe = this;
    c.Yc = a;
    c.ae = -1;
    c.Tb = m;
    c.direction = 0;
    c.Qd = 0;
    c.speed = 0;
    c.Td = 0;
    c.Bb = 0;
    c.Db = 0;
    c.Ib = 0;
    c.kb = 0;
    c.Vc = -1;
    c.$b = 0;
    c.Ob = 0;
    c.Wc = -1;
    c.kc = 0;
    c.ic = 0;
    c.lc = 0;
    c.jc = 0;
    c.Sc = -1;
    c.da = -1;
    c.bd = k;
    return c
  }, ke:function(a) {
    function b() {
      this.x += b.Dd;
      this.y += b.Ed;
      b.Yc.cd(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    }
    a = function(a) {
      var b = {}, c = tm.Ca.tb.Vb, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || f(Error("target is undefined in config."));
    b.Yc = a;
    b.direction = 0;
    b.speed = 0;
    b.Dd = 0;
    b.Ed = 0;
    b.bd = k;
    return b
  }, le:function(a, b, d, r) {
    if(this.$e === i || this.rc) {
      var q = {label:a.ha.label}, K;
      for(K in a.ha.ya) {
        q[K] = a.ha.ya[K]
      }
      if(q = b.Ad(q)) {
        var v = (K = !!a.ha.sa.length) ? r.ke(b) : r.qc(b, a.ha), ba = this, R = {x:this.x + a.ya.offsetX, y:this.y + a.ya.offsetY};
        d.Qd = v.direction = function(r) {
          var q = eval(r.value) * Math.DEG_TO_RAD;
          switch(r.type) {
            case "aim":
              return b.target ? a.ya.ta ? c(R, b.target) + q : c(ba, b.target) + q : q - Math.PI / 2;
            case "absolute":
              return q - Math.PI / 2;
            case "relative":
              return d.direction + q;
            default:
              return d.Qd + q
          }
        }(a.direction || a.ha.direction);
        d.Td = v.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return d.speed + b;
            case "sequence":
              return d.Td + b;
            default:
              return b
          }
        }(a.speed || a.ha.speed);
        q.x = R.x;
        q.y = R.y;
        K && (v.Dd = Math.cos(v.direction) * v.speed * b.Cb, v.Ed = Math.sin(v.direction) * v.speed * b.Cb);
        q.rb = !!q.rb;
        if(b.rb || q.rb) {
          q.rotation = (v.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, q.speed = v.speed
        }
        q.addEventListener("enterframe", v);
        q.addEventListener("removed", function() {
          this.removeEventListener("enterframe", v);
          this.removeEventListener("removed", arguments.callee)
        });
        b.wd ? b.wd.addChild(q) : this.parent && this.parent.addChild(q)
      }
    }
  }, ge:function(b, d, j) {
    var r = eval(b.direction.value) * Math.DEG_TO_RAD, q = eval(b.za);
    switch(b.direction.type) {
      case "aim":
        b = d.target;
        if(!b) {
          return
        }
        j.kb = c(this, b) + r;
        j.Ib = a(j.kb - j.direction) / q;
        break;
      case "absolute":
        j.kb = r - Math.PI / 2;
        j.Ib = a(j.kb - j.direction) / q;
        break;
      case "relative":
        j.kb = j.direction + r;
        j.Ib = a(j.kb - j.direction) / q;
        break;
      case "sequence":
        j.Ib = r, j.kb = j.direction + j.Ib * (q - 1)
    }
    j.Vc = j.da + q
  }, he:function(a, b) {
    var c = eval(a.speed.value), d = eval(a.za);
    switch(a.speed.type) {
      case "absolute":
        b.Ob = c;
        b.$b = (b.Ob - b.speed) / d;
        break;
      case "relative":
        b.Ob = c + b.speed;
        b.$b = (b.Ob - b.speed) / d;
        break;
      case "sequence":
        b.$b = c, b.Ob = b.speed + b.$b * d
    }
    b.Wc = b.da + d
  }, ee:function(a, b) {
    var c = eval(a.za);
    b.Sc = b.da + c;
    if(a.Ua) {
      var d = eval(a.Ua.value);
      switch(a.Ua.type) {
        case "absolute":
        ;
        case "sequence":
          b.kc = (d - b.Bb) / c;
          b.ic = d;
          break;
        case "relative":
          b.kc = d, b.ic = (d - b.Bb) * c
      }
    }else {
      b.kc = 0, b.ic = b.Bb
    }
    if(a.Va) {
      switch(d = eval(a.Va.value), a.Va.type) {
        case "absolute":
        ;
        case "sequence":
          b.lc = (d - b.Db) / c;
          b.jc = d;
          break;
        case "relative":
          b.lc = d, b.jc = (d - b.Db) * c
      }
    }else {
      b.lc = 0, b.jc = b.Db
    }
  }, me:function(a) {
    var b = tm.event.Event(a.Ae);
    if(a.qa) {
      for(var c in a.qa) {
        b[c] = a.qa[c]
      }
    }
    this.dispatchEvent(b)
  }});
  var b = function() {
    var a = tm.graphics.Canvas();
    a.resize(8, 8);
    a.setTransformCenter();
    a.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    a.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return a
  }();
  tm.Ca.we = function(a) {
    var c = tm.app.Sprite(8, 8, b);
    c.label = a.label;
    return c
  };
  var d = l;
  tm.Ca.xe = function(a) {
    d === l && (d = a.getRoot());
    return 0 <= a.x && a.x < APP.width && 0 <= a.y && a.y < APP.height
  };
  tm.Ca.wf = function() {
    return k
  };
  tm.Ca.tb.Vb = {Ad:tm.Ca.we, cd:tm.Ca.xe, kd:0, rb:m, Cb:2, target:l};
  p.Aa.prototype.qc = function(a) {
    return tm.Ca.tb(this).qc(a)
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
var s = l, t, u, w, z, A, B, C, D, E, F, G, H, I, J, L, M, N, aa = tm.createClass({superClass:tm.app.CanvasApp, xc:0, Cf:0, nc:1, Nb:1, Fd:1, Kd:[1E9, 1E10], $:l, init:function(a) {
  s !== l && f(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "black";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", soundExplode:"assets/sen_ge_taihou03.mp3"}, nextScene:function() {
    this.ne();
    return t()
  }.bind(this)}))
}, ne:function() {
  u.na();
  w.na();
  z.ve();
  this.$ = A()
}, Be:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.xc, "")
}});
function O() {
  if(0 !== s.Nb && P.soundExplode !== s.frame) {
    var a = tm.asset.AssetManager.get("soundExplode");
    a.volume = 0.1 * s.Nb;
    a && a.clone().play();
    P.soundExplode = s.frame
  }
}
var P = {};
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
(function() {
  var a = l, c = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  B = tm.createClass({superClass:tm.app.Sprite, type:0, Sa:0, $a:k, Mb:m, $:l, speed:4.5, wb:l, nb:l, yc:l, oc:l, zc:l, Ac:l, init:function(b, c) {
    this.superInit("tex1", 64, 64);
    this.type = c;
    this.$ = b;
    tm.Ca.tb.Vb.target = this;
    this.boundingRadius = 2;
    this.altitude = 10;
    this.nb = C(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"}, 50);
    this.nb.visible = m;
    this.nb.addChildTo(b);
    this.je();
    this.wb = [{x:-70, y:20, d:0.1, qb:m, lb:-0.7, v:k}, {x:-40, y:40, d:0.1, qb:m, lb:-0.5, v:k}, {x:40, y:40, d:0.1, qb:k, lb:0.5, v:k}, {x:70, y:20, d:0.1, qb:k, lb:0.7, v:k}];
    this.oc = tm.app.CanvasElement().addChildTo(this);
    for(var g = 0, h = this.wb.length;g < h;g++) {
      var j = this.wb[g];
      D(this, j).setPosition(j.x, j.y).addChildTo(this.oc)
    }
    this.Se = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Se.blendMode = "lighter";
    this.zc = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.3, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.7, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:2}).addChildTo(this);
    this.zc.blendMode = "lighter";
    this.zc.update = function() {
      this.rotation += 2
    };
    this.Ac = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.3, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.7, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:2}).addChildTo(this);
    this.Ac.blendMode = "lighter";
    this.Ac.update = function() {
      this.rotation -= 2
    };
    a === l && (a = E(this.$.Ka))
  }, of:function() {
    return[{x:-70, y:20, d:0.1, qb:m, lb:-0.7, v:k}, {x:-40, y:40, d:0.1, qb:m, lb:-0.5, v:k}, {x:40, y:40, d:0.1, qb:k, lb:0.5, v:k}, {x:70, y:20, d:0.1, qb:k, lb:0.7, v:k}]
  }, je:function() {
    this.yc = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.yc.setFrameIndex(5);
    this.yc.blendMode = "lighter";
    this.yc.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, pb:-1, tc:m, yb:m, update:function(b) {
    this.visible = this.Mb ? 0 === b.frame % 2 : k;
    var d = b.keyboard;
    if(this.$a) {
      var g = d.getKeyAngle();
      g !== l && (g = c[g], this.x += g.x * this.speed * (this.yb ? 0.75 : 1), this.y += g.y * this.speed * (this.yb ? 0.75 : 1));
      this.x = Q(this.x, 15, 465);
      this.y = Q(this.y, 15, 625);
      var h = d.getKey("c"), g = d.getKey("z");
      this.pb = h ? this.pb + 1 : this.pb - 1;
      this.pb = Q(this.pb, -1, 10);
      this.yb = g && h || 10 === this.pb;
      h = this.$.La ? 3 : 5;
      this.tc = !this.yb && (0 <= this.pb || g) && 0 === b.frame % h;
      g && (this.pb = 0);
      this.nb.x = this.x;
      this.nb.y = this.y - 40;
      if(this.yb) {
        g = 0;
        for(h = this.wb.length;g < h;g++) {
          this.wb[g].v = m
        }
        this.oc.rotation = 0
      }else {
        this.nb.visible = m;
        g = 0;
        for(h = this.wb.length;g < h;g++) {
          this.wb[g].v = k
        }
      }
      if(this.tc) {
        var g = Math.sin(0.2 * b.frame), j = this.$.La ? 3 : this.type, h = z.ma(j, this.x - 7 - 6 * g, this.y - 5, -90);
        h !== l && h.addChildTo(this.$);
        h = z.ma(j, this.x + 7 + 6 * g, this.y - 5, -90);
        h !== l && h.addChildTo(this.$)
      }
      d.getKeyDown("x") && (1 === this.$.Ga ? this.$.gf() : !this.$.Dc && 0 < this.$.Ta && F(this, this.$).setPosition(Math.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.$))
    }
    this.zc.visible = this.Ac.visible = 1 === this.$.Ga;
    this.ue(d);
    this.fe(d);
    0 === b.frame % 2 && (a.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.$), a.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.$))
  }, xb:function() {
    this.yb = this.tc = m;
    this.$.sc()
  }, ue:function(a) {
    var c = this.oc;
    c.rotation = this.$a && a.getKey("left") ? Math.max(c.rotation - 3, -40) : this.$a && a.getKey("right") ? Math.min(c.rotation + 3, 40) : 3 < c.rotation ? c.rotation - 3 : -3 > c.rotation ? c.rotation + 3 : 0
  }, fe:function(a) {
    this.$a && a.getKey("left") ? this.Sa = Q(this.Sa - 0.2, -3, 3) : this.$a && a.getKey("right") ? this.Sa = Q(this.Sa + 0.2, -3, 3) : 0 > this.Sa ? this.Sa = Q(this.Sa + 0.2, -3, 3) : 0 < this.Sa && (this.Sa = Q(this.Sa - 0.2, -3, 3));
    a = 3 + ~~this.Sa;
    this.setFrameIndex(a);
    return a
  }});
  D = tm.createClass({superClass:tm.app.AnimationSprite, vb:l, ba:l, init:function(a, c) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.vb = c;
    this.ba = a;
    this.altitude = 10;
    this.gotoAndPlay(c.qb ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.vb.v) {
      this.x = this.vb.x * (this.ba.$.La ? 1.5 : 1);
      this.y = this.vb.y * (this.ba.$.La ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.vb.d * this.vb.lb);
      var c = this.parent.localToGlobal(this);
      this.vb.v && 0 === b.frame % 2 && a.clone(40).setPosition(c.x, c.y).addChildTo(b.$);
      this.ba.tc && (c = z.ma(this.ba.$.La ? 3 : this.ba.type, c.x, c.y, this.parent.rotation + this.rotation - 90), c !== l && c.addChildTo(b.$))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = l;
  z = tm.createClass({superClass:tm.app.Sprite, speed:0, jb:1, init:function() {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.addEventListener("added", function() {
      b.push(this)
    });
    this.addEventListener("removed", function() {
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1);
      c.push(this)
    });
    a === l && (a = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element))
  }, update:function() {
    this.x += this.lf;
    this.y += this.mf;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, ld:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48, this.setScale(2, 2), this.jb = 2) : (this.speed = 30, this.boundingRadius = 32, this.setScale(1.5, 1.5), this.jb = 1)
  }, wc:function(b) {
    for(var c = 0;c < b;c++) {
      var h = a.clone().setPosition(this.x, this.y).addChildTo(this.parent), j = S(2, 8), r = 2 * Math.random() * Math.PI;
      h.ka = Math.cos(r) * j;
      h.la = Math.sin(r) * j;
      h.scaleX = h.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
      h.addEventListener("enterframe", function() {
        this.x += this.ka;
        this.y += this.la;
        this.ka *= 0.9;
        this.la *= 0.9
      })
    }
  }});
  z.Sb = function() {
    for(var a = [].concat(b), c = 0, h = a.length;c < h;c++) {
      a[c].remove()
    }
  };
  var c = [], b = z.wa = [];
  z.ve = function() {
    for(var a = 0;100 > a;a++) {
      c.push(z())
    }
  };
  z.ma = function(a, b, h, j) {
    var r = c.pop();
    if(r === i) {
      return l
    }
    r.ld(a);
    a = T(j);
    r.lf = Math.cos(a) * r.speed;
    r.mf = Math.sin(a) * r.speed;
    r.setPosition(b, h);
    r.rotation = j + 90;
    return r
  }
})();
(function() {
  var a = l;
  C = tm.createClass({superClass:tm.app.Sprite, ba:l, $:l, jb:2, Pa:0, frame:0, Zd:l, color:l, re:m, head:l, Md:l, xd:l, init:function(a, b, d) {
    this.ba = a;
    this.$ = a.$;
    var g = this;
    this.Zd = b;
    this.superInit(b.redBody, d, 100);
    this.boundingWidth = d;
    this.boundingHeightBottom = 1;
    this.Ff = 0;
    this.origin.y = 1;
    a = this.xd = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
    a.y = 60;
    a.addChildTo(this);
    (this.Md = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
    b = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
    b.addChildTo(this);
    b.update = function() {
      this.y = g.Pa - g.y;
      -10 < this.y && (this.y = -10);
      this.visible = 0 < g.Pa
    };
    this.ld("blue")
  }, ld:function(c) {
    this.color = c;
    this.image = tm.asset.AssetManager.get(this.Zd[this.color + "Body"]);
    this.srcRect.x = 0;
    this.srcRect.y = 0;
    this.srcRect.width = this.image.width / 16;
    this.xd.gotoAndPlay(this.color);
    this.Md.gotoAndPlay(this.color);
    this.head.gotoAndPlay(this.color);
    a = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element);
    return this
  }, wc:function(c, b) {
    b = b || this.Pa;
    for(var d = 0;d < c;d++) {
      var g = a.clone().setPosition(this.x, b).addChildTo(this.$), h = S(8, 14), j = S(0, Math.PI);
      g.ka = Math.cos(j) * h;
      g.la = Math.sin(j) * h;
      g.scaleX = g.scaleY = (S(0.5, 1.5) + S(0.5, 1.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.ka;
        this.y += this.la;
        this.ka *= 0.95;
        this.la *= 0.95
      })
    }
  }, Oe:function(c, b, d) {
    b = b || this.x;
    d = d || this.Pa;
    for(var g = 0;g < c;g++) {
      var h = a.clone().setPosition(b, d).addChildTo(this.$), j = S(12, 20), r = S(0, Math.PI);
      h.ka = Math.cos(r) * j;
      h.la = Math.sin(r) * j;
      h.scaleX = h.scaleY = (S(1, 3) + S(1, 3)) / 2;
      h.addEventListener("enterframe", function() {
        this.x += this.ka;
        this.y += this.la;
        this.ka *= 0.95;
        this.la *= 0.95
      })
    }
  }, update:function(a) {
    (this.visible = this.ba.yb) ? (this.Pa = Math.max(0, this.Pa - 40), this.height = this.y - this.Pa, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Pa = this.y - 40;
    this.re = this.visible
  }, draw:function(a) {
    var b = this.srcRect, d = this._image.element;
    b.x = b.width * this.frame;
    a.context.drawImage(d, b.x, b.height - this.height, b.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Bf:function() {
    return this.Pa
  }, ef:function(a) {
    this.Pa = a;
    this.head.update()
  }});
  C.prototype.getter("boundingHeightTop", function() {
    return this.position.y - this.Pa
  })
})();
(function() {
  F = tm.createClass({superClass:tm.app.Object2D, $:l, init:function(c, b) {
    this.superInit();
    this.ba = c;
    this.$ = b;
    this.Yd = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Yd.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Yd));
    this.vd();
    a === l && (a = G(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.da = 0;
    this.Yb = 1;
    this.addEventListener("added", function() {
      this.$.Dc = k;
      this.ba.Mb = k;
      this.$.Ta -= 1;
      this.$.sc();
      this.$.Ma("drop 'BOMBER'.")
    });
    this.addEventListener("removed", function() {
      this.$.Dc = m;
      this.ba.Mb = m
    })
  }, vd:function() {
    this.Ra = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.Ra.gotoAndPlay("animation");
    this.Ra.blendMode = "lighter";
    this.Ra.setScale(0.1, 0.1);
    this.Ra.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = Math.randf(0.9, 1.1)
      }
    }.bind(this.Ra))
  }, update:function() {
    for(var c = 0;c < this.b;c++) {
      var b = this.a * this.Yb + 2 * c * Math.PI / this.b;
      a.clone().setPosition(Math.cos(b) * this.r + this.x, Math.sin(b) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    c = 0.02 * this.da;
    this.r = 250 * Math.sin(c);
    2 * Math.PI < c ? this.remove() : Math.PI < c ? (this.b = 16, this.da += 3.6, this.Yb = -1) : (this.b = 8, this.da += 1.8, this.Yb = 1)
  }});
  H = tm.createClass({superClass:F, init:function(a, b) {
    this.superInit(a, b);
    this.addEventListener("added", function() {
      this.$.Ta = 0
    })
  }, vd:function() {
    this.Ra = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.Ra.gotoAndPlay("animation");
    this.Ra.blendMode = "lighter";
    this.Ra.setScale(0.1, 0.1);
    this.Ra.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = Math.randf(0.4, 0.6)
      }
    }.bind(this.Ra))
  }, update:function() {
    for(var c = 0;c < this.b;c++) {
      var b = this.a * this.Yb + 2 * c * Math.PI / this.b;
      a.clone().setPosition(Math.cos(b) * this.r + this.x, Math.sin(b) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    c = 0.04 * this.da;
    this.r = 100 * Math.sin(c);
    Math.PI < c ? this.remove() : (this.b = 8, this.da += 1.8, this.Yb = 1)
  }});
  var a = l;
  F.jb = 2
})();
var U = tm.createClass({Gf:0, Pd:0, Gd:0, ba:l, $:l, frame:0, background:l, init:function(a) {
  this.$ = a;
  this.ba = a.ba;
  this.ff();
  this.frame = 0
}, ff:function() {
  this.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"#338"}, {offset:1, color:"#114"}]).toStyle()
}, update:function() {
  var a = this.Id(this.frame);
  if(a !== l) {
    for(var c = 0;c < a.length;c++) {
      this.Re(a[c])
    }
  }
  this.frame += 1
}, Id:function() {
  return l
}, Re:function(a) {
  var c = I.df.shift();
  c ? (this.Gd += 1, c.na(this.$, this, a.ca, a.aa).setPosition(a.x, a.y).addChildTo(this.$).Ab()) : console.warn("\u6575\u304c\u8db3\u308a\u306a\u3044\uff01")
}, Te:function() {
  this.Pd += 1
}});
U.create = function(a, c) {
  if(0 === c) {
    return ca(a)
  }
};
var ca = tm.createClass({superClass:U, ea:l, init:function(a) {
  this.superInit(a);
  this.ea = da();
  this.ea.add(0, function() {
    this.$.Ka.direction = 0.5 * Math.PI;
    this.$.Ka.speed = 1
  });
  this.ea.add(200, "tankRD-center");
  this.ea.add(200, "tankRD-left");
  this.ea.add(20, "heri1-right");
  this.ea.add(60, "heri1-center");
  this.ea.add(60, "heri1-left");
  this.ea.add(60, "tankL-top");
  this.ea.add(50, "heri1-right");
  this.ea.add(20, "tankRD-center");
  this.ea.add(80, "heri1-center");
  this.ea.add(50, "heri1-left");
  this.ea.add(50, "heri1-center");
  this.ea.add(50, "fighter-m-1");
  this.ea.add(50, "fighter-m-3");
  this.ea.add(50, "fighter-m-5");
  this.ea.add(70, "heri1-right");
  this.ea.add(20, "heri1-center");
  this.ea.add(20, "heri1-left");
  this.ea.add(20, "tankL-top");
  this.ea.add(20, "tankRD-left");
  this.ea.add(50, "heri1-right");
  this.ea.add(50, "heri1-center");
  this.ea.add(50, "heri1-center");
  this.ea.add(20, "tankRD-center");
  this.ea.add(20, "tankRD-left");
  this.ea.add(50, "heri1-right");
  this.ea.add(50, "heri1-center");
  this.ea.add(50, "heri1-left");
  this.ea.add(20, "tankL-top");
  this.ea.add(50, "heri1-right");
  this.ea.add(1, function() {
    this.$.Ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.ea.add(100, "fighter-m-0");
  this.ea.add(50, "fighter-m-2");
  this.ea.add(50, "fighter-m-4");
  this.ea.add(50, "fighter-m-6");
  this.ea.add(50, "fighter-m-4");
  this.ea.add(50, "fighter-m-2")
}, Id:function(a) {
  a = this.ea.get(a);
  if(a !== i) {
    if(J[a] !== i) {
      return J[a]
    }
    "function" === typeof a && a.call(this)
  }
  return l
}}), da = tm.createClass({index:0, data:l, init:function() {
  this.data = {}
}, add:function(a, c) {
  this.index += a;
  this.data[this.index] = c
}, get:function(a) {
  return this.data[a]
}});
w = {na:function() {
  ea();
  w.explosion = Array.range(0, 2).map(function(a) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + a, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  w.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  w.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  w.particle16 = G(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, wc:function(a, c, b) {
  a = w.particle16.clone().setPosition(a, c).addChildTo(b);
  c = S(5, 20);
  b = S(Math.PI, 2 * Math.PI);
  a.ka = Math.cos(b) * c;
  a.la = Math.sin(b) * c;
  a.scaleX = a.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
  a.addEventListener("enterframe", function() {
    this.x += this.ka;
    this.y += this.la;
    this.ka *= 0.9;
    this.la *= 0.9
  })
}, Af:function(a, c, b) {
  var d = tm.app.Sprite().setPosition(a, c).setScale(0.1).setBlendMode("lighter").addChildTo(b);
  d.image = w.shockwaveImage;
  d.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
}, Jd:function(a, c, b, d) {
  O();
  a = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(a, c).setRotation(360 * Math.random()).gotoAndPlay();
  a.Wb = k;
  if(d !== i) {
    var g = d.x, h = d.y;
    a.addEventListener("enterframe", function() {
      this.x += g;
      this.y += h;
      g *= 0.99;
      h *= 0.99
    })
  }
  a.addChildTo(b)
}, Ce:function(a, c, b) {
  O();
  var d = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a, c).setRotation(360 * Math.random()).gotoAndPlay();
  d.Wb = k;
  d.addChildTo(b);
  d = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a + 12, c).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  d.Wb = k;
  d.addChildTo(b);
  d = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a - 12, c).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  d.Wb = k;
  d.addChildTo(b)
}, De:function(a, c, b) {
  O();
  for(var d = 0;10 > d;d++) {
    var g = w.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += 2 * Math.cos(this.a);
      this.y += 2 * Math.sin(this.a);
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === d % 2 ? "lighter" : "source-over").setPosition(a, c).gotoAndPlay();
    g.a = 2 * Math.PI * Math.random();
    g.Wb = k;
    g.addChildTo(b)
  }
}};
var ga = tm.createClass({superClass:tm.graphics.Canvas, $:l, Ub:l, init:function(a) {
  this.superInit("#scoreLabel");
  this.$ = a;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Ub = fa(200)
}, update:function() {
  this.clear();
  this.resetTransform();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.draw();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.02)";
  for(var a = -2;2 >= a;a++) {
    for(var c = -2;2 >= c;c++) {
      this.setTransform(1, 0, 0, 1, a, c), this.draw()
    }
  }
  this.context.globalCompositeOperation = "source-over";
  for(a = 0;a < this.$.sb - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("tex1"), 192, 0, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.context.globalCompositeOperation = "source-over";
  this.fillStyle = "rgba(255,255,255,0.5)";
  for(a = 0;a < this.$.Ta;a++) {
    this.fillRect(5 + 25 * a, 601, 20, 20)
  }
  this.Ub.update();
  this.Ub.draw(this)
}, draw:function() {
  this.context.globalCompositeOperation = "lighter";
  var a;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.$.score)).padding(16, " ");
  a = "";
  for(var c = 0;c < score.length;c += 4) {
    a += score.substring(c, c + 4) + " "
  }
  this.fillText(a, 192, 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.$.Ba)).padding(8, " ");
  a = "";
  for(c = 0;c < score.length;c += 4) {
    a += score.substring(c, c + 4) + " "
  }
  this.fillText(a, 192, 22);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.$.Fc + " hit", 10, 85);
  0 < this.$.Da && (this.setText("bold 40px Orbitron", "left", "top"), this.strokeText(~~this.$.Da + " HIT!!", 10, 100))
}});
function V(a, c) {
  if(a.parent === l || c.parent === l) {
    return m
  }
  var b = a.x + a.boundingWidthRight, d = a.y - a.boundingHeightTop, g = a.y + a.boundingHeightBottom, h = c.x - c.boundingWidthLeft, j = c.y - c.boundingHeightTop, r = c.y + c.boundingHeightBottom;
  return a.x - a.boundingWidthLeft < c.x + c.boundingWidthRight && b > h && d < r && g > j
}
;var W = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, hf:function(a, c) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = c
}, finish:function(a) {
  var c = this.app;
  c.popScene();
  (c = c.currentScene) && c._sceneResultCallback && c._sceneResultCallback.bind(c)(a)
}, update:function(a) {
  a.pointing.getPointingEnd() && ha(a.pointing).addChildTo(this)
}}), ha = tm.createClass({superClass:tm.app.CircleShape, init:function(a) {
  this.superInit(150, 150, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(75, 75, 0, 75, 75, 75).addColorStopList([{offset:0, color:"rgba(255,255,255,0.0)"}, {offset:0.6, color:"rgba(255,255,255,0.0)"}, {offset:1, color:"rgba(255,255,255,0.8)"}]).toStyle()});
  this.setPosition(a.x, a.y);
  this.width = this.height = 1;
  this.tweener.clear().to({width:150, height:150, alpha:0}, 300, "easeOutQuad").call(function() {
    this.remove()
  }.bind(this))
}});
var ia = tm.createClass({superClass:W, titleText:l, menu:l, descriptions:l, showExit:m, title:l, selections:[], description:l, box:l, cursor:l, _selected:0, _opened:m, _finished:m, init:function(a, c, b, d, g) {
  this.superInit();
  this.titleText = a;
  this.menu = c;
  this._selected = ~~b;
  this.showExit = !!g;
  this.descriptions = d ? d : [].concat(c);
  this.showExit && (c.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  a = Math.max(50 * (1 + c.length), 50) + 40;
  this.box = tm.app.RectangleShape(384, a, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"rgba(1,2,48,0.8)"}).setPosition(240, 320);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:384, height:a}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.app.Label("", 14).setPosition(240, 630).addChildTo(this)
}, _onOpen:function() {
  var a = 320 - 25 * this.menu.length;
  this.title = tm.app.Label(this.titleText, 30).setPosition(240, a).addChildTo(this);
  this.selections = this.menu.map(function(c, b) {
    var d = this;
    a += 50;
    var g = tm.app.Label(c).setPosition(240, a).addChildTo(this);
    g.interactive = k;
    g.addEventListener("touchend", function() {
      d._selected === b ? d.closeDialog(d._selected) : d._selected = b
    });
    g.width = 336;
    return g
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"))
  }
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments);
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(a.frame / 2) % 2 : this.showExit && a.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") ? this.closeDialog(this._selected) : a.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = Q(this._selected, 0, this.selections.length - 1)) : a.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = 
  Q(this._selected, 0, this.selections.length - 1)))
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
function X(a, c, b, d, g, h, j) {
  j === i && (j = k);
  a.hf(ia(c, b, g, h, j), d)
}
;G = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, Uc:0.85, size:0, image:l, init:function(a, c, b, d) {
  this.superInit();
  this.width = this.height = this.size = a;
  c !== i && (this.alpha = c);
  b !== i && (this.Uc = b);
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.Uc;
  0.001 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return G(this.size, this.Df, this.Uc, this.image)
}});
E = tm.createClass({superClass:G, Ka:l, init:function(a, c) {
  c = c || 20;
  this.superInit(c, 1, 0.82, tm.graphics.Canvas().resize(c, c).setFillStyle(tm.graphics.RadialGradient(0.5 * c, 0.5 * c, 0, 0.5 * c, 0.5 * c, 0.5 * c).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, c, c).element);
  this.Ka = a
}, update:function(a) {
  this.superClass.prototype.update.apply(this, a);
  this.x += this.Ka.ka;
  this.y += this.Ka.la + 0.3
}, clone:function(a) {
  return E(this.Ka, a)
}});
var fa = tm.createClass({width:0, label:l, Ja:l, da:0, init:function(a) {
  this.width = a;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Ja = []
}, qe:function(a) {
  5 < this.Ja.length && this.Ja.splice(1, this.Ja.length - 4);
  this.Ja.push(a);
  return this
}, te:function() {
  this.Ja.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var a = this.label.text, a = a.substring(0, a.length - 1);
  if(0 !== this.Ja.length) {
    if("" !== this.Ja[0]) {
      var c = this.Ja[0][0];
      this.Ja[0] = this.Ja[0].substring(1);
      a += c
    }else {
      this.Ja.shift(), c = a.split("\n"), 3 < c.length && (c.shift(), a = c.join("\n")), a += "\n"
    }
  }
  this.label.text = a + (0 === this.da % 2 ? "_" : " ");
  this.da += 1
}, draw:function(a) {
  a.save();
  a.context.globalCompositeOperation = "source-over";
  a.translate(480 - this.width - 5, 5);
  a.fillStyle = "rgba(1,2,48,0.5)";
  a.fillRect(0, 0, this.width, 64);
  a.translate(5, 5);
  a.fillStyle = "rgba(255,255,255,0.5)";
  a.setText(this.label.fontStyle, this.label.align, this.label.baseline);
  this.label._lines.each(function(c, b) {
    a.fillText(c, 0, this.label.textSize * b)
  }.bind(this));
  a.restore()
}});
function ea() {
  function a(a) {
    if(1 > a) {
      return l
    }
    var b = [], d = Math.random(), g, h;
    for(h = 0;256 > h;h += ~~a) {
      g = Math.random();
      for(var j = 0;j < a;j++) {
        b[h + j] = c(d, g, j / a)
      }
      d = g
    }
    d = b[256 - ~~a];
    g = b[0];
    for(j = 0;j < a;j++) {
      b[256 - ~~a + j] = c(d, g, j / a)
    }
    return b
  }
  function c(a, b, c) {
    c = 0.5 * (1 - Math.cos(c * Math.PI));
    return a * (1 - c) + b * c
  }
  for(var b = [], d = 0, g = Math.pow(2, 4);8 > d;d++, g *= 2) {
    var h = a(256 / g);
    if(h === l) {
      break
    }
    b.push(h)
  }
  h = [].concat(b[0]);
  d = 1;
  for(g = 0.5;d < b.length;d++, g *= 0.5) {
    for(var j = 0;256 > j;j++) {
      h[j] += b[d][j] * g
    }
  }
  for(d = 0;d < h.length;d++) {
    h[d] /= 2
  }
}
;(function() {
  var a = l, c = l;
  t = tm.createClass({superClass:W, result:l, da:0, Xb:[], vc:m, Od:l, Sd:0, Ec:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Od = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.vc = m;
      this.Od.text = "HIGH SCORE: " + Math.floor(s.xc)
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.td(80 * Math.cos(0.01 * this.da) + 240, 80 * Math.sin(0.01 * this.da) + 320, 0);
    this.td(80 * Math.cos(0.01 * this.da + Math.PI) + 240, 80 * Math.sin(0.01 * this.da + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") || a.pointing.getPointingEnd()) && !this.vc && this.Wd();
    this.da += 1
  }, td:function(b, d, g) {
    if(!this.vc) {
      a === l && (a = G(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      c === l && (c = G(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? a.clone().addChildTo(this) : c.clone().addChildTo(this);
      g.speed = 0.6;
      var h = S(0, 2 * Math.PI), j = Y(0, 20);
      g.setPosition(Math.cos(h) * j + b, Math.sin(h) * j + d);
      var r = this;
      g.update = function() {
        this.x += Math.cos(h) * this.speed;
        this.y += Math.sin(h) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = r.Xb.indexOf(this);
          -1 !== a && r.Xb.splice(a, 1)
        }
      };
      this.Xb.push(g)
    }
  }, Wd:function() {
    X(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.Xe, this.Sd, ["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"])
  }, Xe:function(a) {
    4 !== a && (this.Sd = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.vc = k;
          for(var a = 0, b = this.Xb.length;a < b;a++) {
            this.Xb[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.$.Ne(2);
          s.pushScene(s.$)
        }.bind(this));
        break;
      case 2:
        this.ob();
        break;
      case 3:
        s.Be()
    }
  }, ob:function() {
    X(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.gd, this.Ec, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
  }, gd:function(a) {
    3 !== a && (this.Ec = a);
    switch(a) {
      case 0:
        this.hd();
        break;
      case 1:
        this.jd();
        break;
      case 2:
        this.cf();
        break;
      default:
        this.Wd()
    }
  }, hd:function() {
    X(this, "BGM VOLUME", "012345".split(""), this.ed, s.nc)
  }, ed:function(a) {
    6 !== a && (s.nc = a);
    this.ob()
  }, jd:function() {
    X(this, "SE VOLUME", "012345".split(""), this.fd, s.Nb)
  }, fd:function(a) {
    6 !== a && (s.Nb = a);
    this.ob()
  }, cf:function() {
    X(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.We, s.Fd, ["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"])
  }, We:function(a) {
    5 !== a && (s.Fd = a);
    this.ob()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
tm.createClass({superClass:W, init:function() {
  this.superInit();
  tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(240, 320).addChildTo(this)
}});
A = tm.createClass({superClass:W, ba:l, score:0, Ba:0, Da:0, Fc:0, xa:0, Eb:l, Ka:l, sb:3, Ta:0, Rb:0, zd:3, se:6, Dc:m, Ga:0, Bc:0, La:m, Cc:0, Nd:l, Xd:l, Hd:l, Zc:l, $c:l, Bd:l, Qe:l, Rd:l, Zb:l, kd:0, init:function() {
  A.qd !== l && f(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  A.qd = this;
  this.Zb = ga(this);
  this.ie();
  this.Nd = tm.app.Object2D().addChildTo(this);
  this.Hd = tm.app.Object2D().addChildTo(this);
  this.Zc = tm.app.Object2D().addChildTo(this);
  this.Xd = tm.app.Object2D().addChildTo(this);
  this.$c = tm.app.Object2D().addChildTo(this);
  this.Bd = tm.app.Object2D().addChildTo(this);
  this.Qe = tm.app.Object2D().addChildTo(this);
  tm.Ca.tb.Vb.wd = this;
  this.Rd = tm.app.Object2D().addChildTo(this);
  this.Rd.update = function(a) {
    this.Ze(a)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Zb.clear()
  })
}, Ma:function(a) {
  this.Zb.Ub.qe(a)
}, ie:function() {
  var a = this.Ka = tm.app.CanvasElement().addChildTo(this);
  a.ab = a.cb = 0;
  a.bb = a.eb = 0;
  a.direction = 0.5 * Math.PI;
  a.speed = 1;
  a.ka = 0;
  a.la = 0;
  var c = 16 * Math.sqrt(3), b = 12.8 * Math.sqrt(3);
  a.update = function() {
    this.ka = Math.cos(this.direction) * this.speed;
    this.la = Math.sin(this.direction) * this.speed;
    for(this.ab += this.ka;96 < this.ab;) {
      this.ab -= 96
    }
    for(;-96 > this.ab;) {
      this.ab += 96
    }
    for(this.cb += this.la;2 * c < this.cb;) {
      this.cb -= 2 * c
    }
    for(;this.cb < 2 * -c;) {
      this.cb += 2 * c
    }
    for(this.bb += 0.8 * this.ka;25.6 * 3 < this.bb;) {
      this.bb -= 25.6 * 3
    }
    for(;this.bb < -25.6 * 3;) {
      this.bb += 25.6 * 3
    }
    for(this.eb += 0.8 * this.la;2 * b < this.eb;) {
      this.eb -= 2 * b
    }
    for(;this.eb < 2 * -b;) {
      this.eb += 2 * b
    }
  };
  a.blendMode = "lighter";
  a.draw = function(a) {
    a.lineWidth = 0.2;
    a.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    a.beginPath();
    for(var g = 0, h = this.ab - 96;576 > h;h += 48) {
      for(var g = 0 === g ? c : 0, j = this.cb - 2 * c + g;j < 640 + 2 * c;j += 2 * c) {
        a.line(h, j, h + 32, j), a.line(h, j, h - 16, j + c), a.line(h, j, h - 16, j - c)
      }
    }
    a.stroke();
    a.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(128,128,128,1.0)"}, {offset:1, color:"rgba(128,128,128,0.5)"}]).toStyle();
    a.beginPath();
    g = 0;
    for(h = this.bb - 25.6 * 3;h < 480 + 25.6 * 3;h += 25.6 * 1.5) {
      g = 0 === g ? b : 0;
      for(j = this.eb - 2 * b + g;j < 640 + 2 * b;j += 2 * b) {
        a.line(h, j, h + 25.6, j), a.line(h, j, h - 12.8, j + b), a.line(h, j, h - 12.8, j - b)
      }
    }
    a.stroke()
  }
}, addChild:function(a) {
  a instanceof B ? this.Xd.addChild(a) : a instanceof I ? a.Jb ? this.Nd.addChild(a) : this.Hd.addChild(a) : a instanceof E || a instanceof z || a instanceof C || a instanceof F || a.Wb ? this.Zc.addChild(a) : a instanceof G ? this.$c.addChild(a) : a instanceof L ? this.Bd.addChild(a) : this.superClass.prototype.addChild.apply(this, arguments)
}, update:function(a) {
  this.Eb.update(a.frame);
  this.La && (this.Cc -= 1, 0 >= this.Cc && this.sc());
  0 === a.frame % 5 && this.Zb.update();
  this.xa -= 0.02;
  0 >= this.xa && (0 < this.Da && (this.Ba = this.Ba * (this.Da - 6) / this.Da), this.Da -= 6, 0 > this.Da && (this.Da = this.Ba = 0), this.xa = 0);
  a.keyboard.getKeyDown("escape") ? this.app.popScene() : a.keyboard.getKeyDown("space") ? this.Gc(0) : a.keyboard.getKeyDown("p") && (a.canvas.saveAsImage(), this.Gc(0))
}, Ze:function() {
  this.ba.$a === m && u.erase();
  var a;
  a = [].concat(I.wa);
  for(var c = [].concat(z.wa), b = c.length;c[--b] !== i;) {
    for(var d = a.length;a[--d] !== i;) {
      var g = a[d], h = c[b];
      if(V(g, h) && (h.wc(1), h.remove(), g.xb(h.jb))) {
        this.La === m && this.Qb(0.01);
        this.mc(1);
        this.Ba += g.score;
        this.Tc(this.Ba);
        a.erase(g);
        break
      }
    }
  }
  h = this.ba.nb;
  if(this.ba.nb.visible) {
    a = [].concat(I.wa);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(d = a.length;a[--d] !== i;) {
      if(g = a[d], V(g, h)) {
        h.ef(g.y + g.boundingHeightBottom);
        g.xb(h.jb) ? (this.Qb(0.01), this.mc(1), this.Ba += g.score, this.Tc(this.Ba)) : (this.xa = Math.max(this.xa, 0.1), this.Qb(0.001));
        h.wc(2);
        break
      }
    }
    c = {x:this.ba.x, y:this.ba.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:50, boundingHeightBottom:40};
    a = [].concat(I.wa);
    for(d = a.length;a[--d] !== i;) {
      g = a[d], V(g, c) && (g.xb(h.jb) ? (this.Qb(0.02), this.mc(1), this.Ba += g.score, this.Tc(this.Ba)) : (this.xa = Math.max(this.xa, 0.1), this.Qb(0.002)), h.Oe(2, 0.5 * (this.ba.x + g.x), 0.5 * (this.ba.y + g.y)))
    }
  }
  if(this.Dc) {
    u.erase();
    a = [].concat(I.wa);
    for(d = a.length;a[--d] !== i;) {
      g = a[d], g.Kb() && g.xb(F.jb)
    }
    this.xa = this.Da = 0
  }
  if(this.La) {
    d = [].concat(z.wa);
    for(g = d.length;d[--g] !== i;) {
      h = d[g];
      c = [].concat(L.wa);
      for(a = c.length;c[--a] !== i;) {
        b = c[a], V(h, b) && (b.Fa -= 6 - this.Bc, 0 > b.Fa && (b.Hb(), this.mc(1)))
      }
    }
  }
  if(this.ba.Mb === m) {
    for(d = L.wa.length;L.wa[--d] !== i;) {
      if(a = L.wa[d], V(a, this.ba)) {
        this.ba.xb();
        0 < this.Ta ? H(this.ba, this).setPosition(this.ba.x, this.ba.y).addChildTo(this) : this.Vd();
        break
      }
    }
    for(d = I.wa.length;I.wa[--d] !== i;) {
      if(g = I.wa[d], !g.Jb && V(g, this.ba)) {
        this.ba.xb();
        0 < this.Ta ? H(this.ba, this).setPosition(this.ba.x, this.ba.y).addChildTo(this) : this.Vd();
        break
      }
    }
  }
}, Gc:function(a) {
  X(this, "PAUSE", ["resume", "setting", "exit game"], this.Ye, a, ["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], m)
}, Ye:function(a) {
  switch(a) {
    case 1:
      this.ob();
      break;
    case 2:
      this.af()
  }
}, ob:function() {
  X(this, "SETTING", ["bgm volume", "sound volume"], this.gd, this.Ec, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
}, gd:function(a) {
  3 !== a && (this.Ec = a);
  switch(a) {
    case 0:
      this.hd();
      break;
    case 1:
      this.jd();
      break;
    default:
      this.Gc()
  }
}, af:function() {
  X(this, "REARY?", ["yes", "no"], this.Ue, 1, ["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], m)
}, Ue:function(a) {
  0 === a ? this.app.popScene() : this.Gc(1)
}, hd:function() {
  X(this, "BGM VOLUME", "012345".split(""), this.ed, s.nc)
}, ed:function(a) {
  6 !== a && (s.nc = a);
  this.ob(1)
}, jd:function() {
  X(this, "SE VOLUME", "012345".split(""), this.fd, s.Nb)
}, fd:function(a) {
  6 !== a && (s.Nb = a);
  this.ob(1)
}, bf:function() {
  X(this, "CONTINUE?", ["yes", "no"], this.Ve, 0, ["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u5e30\u9084\u3057\u307e\u3059"], m)
}, Ve:function(a) {
  switch(a) {
    case 0:
      this.Le();
      break;
    case 1:
      this.Me()
  }
}, draw:function(a) {
  this.Eb !== l && (a.clearColor(this.Eb.background, 0, 0), this.ye(a), this.ze(a))
}, ye:function(a) {
  if(0 < this.xa) {
    a.fillStyle = "rgba(255," + ~~(255 * this.xa) + "," + ~~Math.min(255, 512 * this.xa) + ",0.5)";
    var c = 500 * this.xa;
    a.fillRect(465, 635 - c, 10, c)
  }
}, ze:function(a) {
  1 === this.Ga ? 0 === this.app.frame % 2 && (a.fillStyle = "rgba(255,255,255,0.6)", a.fillRect(5, 628, 200, 9)) : (a.fillStyle = "rgba(255,255,0,0.3)", a.fillRect(5, 628, 200, 9), 0 < this.Ga && (a.fillStyle = "rgba(255,255,100,1.0)", a.fillRect(5, 628, 200 * this.Ga, 9)))
}, Ne:function(a) {
  this.Zb.Ub.te().clear();
  this.score = 0;
  this.sb = 3;
  this.Ta = this.Rb = this.zd;
  this.Ga = 0;
  this.ba !== l && this.ba.remove();
  I.Sb();
  z.Sb();
  u.Sb();
  for(var c = [].concat(this.Zc.children), b = 0;b < c.length;b++) {
    c[b].remove()
  }
  c = [].concat(this.$c.children);
  for(b = 0;b < c.length;b++) {
    c[b].remove()
  }
  this.ba = B(this, a);
  this.jf(0)
}, jf:function(a) {
  this.Ma("3.");
  this.Ma("2.");
  this.Ma("1.");
  this.Bc = this.Fc = this.xa = this.Da = this.Ba = 0;
  this.Eb = U.create(this, a);
  this.tweener.clear().wait(1E3).call(function() {
    this.dd()
  }.bind(this))
}, dd:function() {
  this.Ma("Let's go!");
  this.ba.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.ba.$a = m;
  this.ba.Mb = k;
  this.ba.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.$a = k
  }.bind(this.ba)).wait(2E3).call(function() {
    this.Mb = m
  }.bind(this.ba));
  this.Ta = this.Rb
}, Vd:function() {
  w.Jd(this.ba.x, this.ba.y, this);
  this.Ma("I was shot down.");
  this.ba.$a = m;
  this.ba.remove();
  this.sb -= 1;
  0 < this.sb ? this.tweener.clear().wait(1E3).call(function() {
    this.Rb = Math.min(this.Rb + 1, this.se);
    this.dd()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.bf()
  }.bind(this))
}, Le:function() {
  this.Ma("System rebooted.");
  this.sb = 3;
  this.Ta = this.Rb = this.zd;
  this.dd()
}, vf:n(), Me:function() {
  this.app.replaceScene(ja())
}, zf:n(), Tc:function(a) {
  var c = this.score;
  this.score += a;
  for(a = 0;a < s.Kd.length;a++) {
    var b = s.Kd[a];
    c < b && b <= this.score && this.Fe()
  }
  s.xc = Math.max(s.xc, this.score)
}, mc:function(a) {
  this.La && (a *= 7);
  this.Da += a;
  this.Fc = Math.max(this.Fc, this.Da);
  this.xa = 1
}, Qb:function(a) {
  !(0 < a && 1 === this.Ga) && !(0 > a && 0 === this.Ga) && (this.La && (a *= 2), this.Ga = Math.clamp(this.Ga + a, 0, 1), 1 === this.Ga ? this.Ma("hyper system, ready.") : 0 === this.Ga && this.sc())
}, gf:function() {
  this.La = k;
  this.Ga = 0;
  this.Bc = Math.min(this.Bc + 1, 5);
  this.Cc = 600
}, sc:function() {
  this.La = m
}, Fe:function() {
  this.Ma("Extended.");
  this.sb += 1
}});
A.qd = l;
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments)
}});
var ja = tm.createClass({superClass:W, init:function() {
  this.superInit();
  var a = tm.app.Label("GAME OVER");
  a.fillStyle = "red";
  a.setPosition(240, 320).addChildTo(this);
  this.interactive = k;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.popScene()
    }.bind(this))
  })
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments);
  (a.keyboard.getKeyDown("z") || a.pointing.getPointingStart()) && a.popScene()
}, draw:function(a) {
  a.clear()
}});
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments)
}});
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:function(a) {
  this.superClass.prototype.update.apply(this, arguments)
}});
(function() {
  I = tm.createClass({superClass:tm.app.CanvasElement, da:0, direction:0, speed:0, ba:l, $:l, Eb:l, aa:l, ca:l, Fa:0, rc:k, Jb:m, score:0, mb:m, Ic:l, init:function() {
    this.superInit();
    this.addEventListener("completeattack", function() {
      this.zb()
    });
    this.addEventListener("added", function() {
      this.da = 0;
      this.mb = m;
      this.rc = k;
      a.push(this)
    });
    this.addEventListener("removed", function() {
      var b = [].concat(this._listeners.enterframe);
      if(b) {
        for(var g = 0, h = b.length;g < h;g++) {
          b[g] && b[g].bd && this.removeEventListener("enterframe", b[g])
        }
      }
      this.tweener.clear();
      this.scaleX = this.scaleY = 1;
      this.Jb = m;
      c.push(this);
      b = a.indexOf(this);
      -1 !== b && a.splice(b, 1)
    })
  }, na:function(a, b, c, j) {
    this.$ = a;
    this.ba = a.ba;
    this.Eb = b;
    this.ca = c;
    this.aa = j;
    this.score = 100;
    this.ca.na.apply(this);
    this.aa.na.apply(this);
    this.altitude = this.Jb ? 1 : 10;
    this.Ic = {x:0, y:0};
    return this
  }, Ab:function() {
    this.ca.Ab.apply(this);
    this.aa.Ab.apply(this)
  }, zb:function() {
    this.ca.zb.apply(this);
    this.aa.zb.apply(this)
  }, update:function() {
    0 <= this.x - this.boundingWidthLeft && (480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.mb = k);
    var a = this.x, b = this.y;
    this.ca.update.apply(this);
    this.aa.update.apply(this);
    this.Jb && (this.x += this.$.Ka.ka, this.y += this.$.Ka.la);
    this.da += 1;
    this.Ic.x = this.x - a;
    this.Ic.y = this.y - b
  }, xb:function(a) {
    if(!this.mb) {
      return m
    }
    this.Fa -= a;
    return 0 >= this.Fa ? (this.aa.Hb.apply(this), a = Y(0, 2), 0 === a ? this.$.Ma("enemy destroy.") : 1 === a ? this.$.Ma(this.name + " destroy.") : 2 === a && this.$.Ma("ETR reaction gone."), this.Eb.Te(this), this.remove(), k) : m
  }, draw:function(a) {
    this.aa.draw.call(this, a)
  }, Kb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, $e:function() {
    return this.rc
  }});
  I.Sb = function() {
    for(var b = [].concat(a), c = 0, h = b.length;c < h;c++) {
      b[c].remove()
    }
  };
  for(var a = I.wa = [], c = I.df = [], b = 0;256 > b;b++) {
    c.push(I())
  }
})();
(function() {
  M = tm.createClass({na:function() {
    this.name = "abstract enemy";
    this.Fa = 9999
  }, Ab:n(), zb:n(), update:n(), draw:n(), Hb:function() {
    w.Jd(this.x, this.y, this.$, this.Ic)
  }});
  M.oa = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, na:function() {
    this.name = "kujo";
    this.Fa = 2;
    this.ja = a("tex1", 64, 64);
    this.boundingRadius = 24;
    this.score = 100
  }, update:function() {
    this.scaleX = this.x < this.ba.x ? -1 : 1
  }, draw:function(a) {
    2 > this.da % 4 ? this.ja.setFrameIndex(7) : this.ja.setFrameIndex(8);
    this.ja.draw(a)
  }});
  M.oa = M.oa();
  M.fa = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, na:function() {
    this.name = "kiryu";
    this.Fa = 3;
    this.ja = a("tex1", 64, 64);
    this.boundingRadius = 24;
    this.score = 300
  }, update:function() {
    this.scaleX = this.x < this.ba.x ? -1 : 1
  }, draw:function(a) {
    2 > this.da % 4 ? this.ja.setFrameIndex(9) : this.ja.setFrameIndex(10);
    this.ja.draw(a)
  }});
  M.fa = M.fa();
  M.pa = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, na:function() {
    this.name = "natsuki";
    this.Fa = 5;
    this.Jb = k;
    this.ja = a("tex1", 48, 48);
    this.boundingRadius = 24;
    this.score = 300
  }, update:function() {
    switch(~~(this.dir / (0.25 * Math.PI))) {
      case 0:
        this.ja.setFrameIndex(16, 64, 64);
        break;
      case 1:
        this.ja.setFrameIndex(24, 64, 64);
        break;
      case 2:
        this.ja.setFrameIndex(23, 64, 64);
        break;
      case 3:
        this.ja.setFrameIndex(11, 64, 64);
        break;
      case 4:
        this.ja.setFrameIndex(12, 64, 64);
        break;
      case 5:
        this.ja.setFrameIndex(13, 64, 64);
        break;
      case 6:
        this.ja.setFrameIndex(14, 64, 64);
        break;
      case 7:
        this.ja.setFrameIndex(15, 64, 64)
    }
  }, draw:function(a) {
    this.ja.draw(a)
  }, Hb:function() {
    w.Ce(this.x, this.y, this.$)
  }});
  M.pa = M.pa();
  M.Xa = tm.createClass({superClass:M, init:function() {
    this.superInit()
  }, na:function() {
    this.name = "kurokawa";
    this.Fa = 80;
    this.ja = a("tex1", 128, 128);
    this.ja.srcRect.x = 320;
    this.ja.srcRect.y = 128;
    this.ja.srcRect.width = 128;
    this.ja.srcRect.height = 128;
    this.boundingWidth = 100;
    this.boundingHeight = 20;
    this.score = 3E3
  }, update:n(), draw:function(a) {
    this.ja.draw(a)
  }, Hb:function() {
    w.De(this.x, this.y, this.$)
  }});
  M.Xa = M.Xa();
  var a = tm.createClass({superClass:tm.app.Sprite, init:function(a, b, d) {
    this.superInit(a, b, d)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }})
})();
(function() {
  function a(a, b) {
    var d = u[b].qc();
    a.addEventListener("enterframe", d);
    a.addEventListener("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  }
  N = tm.createClass({na:n(), Ab:n(), zb:n(), update:n()});
  N.Oa = tm.createClass({superClass:N, init:function() {
    this.superInit()
  }, Ab:function() {
    var c = S(64, 192);
    this.tweener.clear().wait(Y(10, 500)).move(this.x, c, 7 * c, "easeOutQuad").call(function() {
      a(this, "basic0-0")
    }.bind(this))
  }, zb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  N.Oa = N.Oa();
  N.gb = tm.createClass({superClass:N, init:function() {
    this.superInit()
  }, Ab:function() {
    var c = S(192, 320);
    this.tweener.clear().wait(Y(10, 500)).move(this.x, c, 7 * c, "easeOutQuad").call(function() {
      a(this, "basic0-0")
    }.bind(this))
  }, zb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  N.gb = N.gb();
  N.fa = tm.createClass({superClass:N, init:function() {
    this.superInit()
  }, na:function() {
    this.angle = 0.5 * Math.PI;
    this.md = Y(0, 60);
    this.speed = 0
  }, update:function() {
    this.da === this.md ? this.speed = 8 : this.da === this.md + 10 ? a(this, "basic1-0") : this.md < this.da && this.y < this.ba.y && (this.angle += Math.atan2(this.ba.y - this.y, this.ba.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = Q(this.angle, 0.5, Math.PI - 0.5));
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    !this.Kb() && this.mb && this.remove();
    if(9E4 > (this.x - this.ba.x) * (this.x - this.ba.x) + (this.y - this.ba.y) * (this.y - this.ba.y) || this.y > this.ba.y) {
      this.rc = m
    }
  }});
  N.fa = N.fa();
  N.nf = tm.createClass({superClass:N, init:function() {
    this.superInit()
  }, na:function() {
    a(this, "basic2-0");
    this.speed = 0.8;
    this.dir = 0
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.mb && !this.Kb() && this.remove()
  }});
  N.Ia = tm.createClass({superClass:N, init:function() {
    this.superInit()
  }, na:function() {
    a(this, "basic2-0");
    this.speed = 0.7;
    this.dir = 0.25 * Math.PI
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.mb && !this.Kb() && this.remove()
  }});
  N.Ia = N.Ia();
  N.ub = tm.createClass({superClass:N, init:function() {
    this.superInit()
  }, na:function() {
    a(this, "basic2-0");
    this.speed = 1;
    this.dir = Math.PI
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.mb && !this.Kb() && this.remove()
  }});
  N.ub = N.ub();
  N.Ya = tm.createClass({superClass:N, init:function() {
    this.superInit()
  }, na:function() {
    this.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      a(this, "kurokawa-1")
    }.bind(this))
  }, update:function() {
    this.y += 1;
    this.mb && !this.Kb() && this.remove()
  }});
  N.Ya = N.Ya()
})();
var Z = N, $ = M;
J = {"heri1-left":[{ca:Z.Oa, aa:$.fa, x:48, y:-100}, {ca:Z.gb, aa:$.fa, x:96, y:-100}, {ca:Z.Oa, aa:$.fa, x:144, y:-100}, {ca:Z.gb, aa:$.fa, x:192, y:-100}, {ca:Z.Oa, aa:$.fa, x:240, y:-100}], "heri1-center":[{ca:Z.Oa, aa:$.fa, x:144, y:-100}, {ca:Z.gb, aa:$.fa, x:192, y:-100}, {ca:Z.Oa, aa:$.fa, x:240, y:-100}, {ca:Z.gb, aa:$.fa, x:288, y:-100}, {ca:Z.Oa, aa:$.fa, x:336, y:-100}], "heri1-right":[{ca:Z.Oa, aa:$.fa, x:240, y:-100}, {ca:Z.gb, aa:$.fa, x:288, y:-100}, {ca:Z.Oa, aa:$.fa, x:336, y:-100}, 
{ca:Z.gb, aa:$.fa, x:384, y:-100}, {ca:Z.Oa, aa:$.fa, x:432, y:-100}], "heri2-left":[{ca:Z.fa, aa:$.oa, x:48, y:-100}, {ca:Z.fa, aa:$.oa, x:96, y:-100}, {ca:Z.fa, aa:$.oa, x:144, y:-100}, {ca:Z.fa, aa:$.oa, x:192, y:-100}, {ca:Z.fa, aa:$.oa, x:240, y:-100}], "heri2-center":[{ca:Z.fa, aa:$.oa, x:144, y:-100}, {ca:Z.fa, aa:$.oa, x:192, y:-100}, {ca:Z.fa, aa:$.oa, x:240, y:-100}, {ca:Z.fa, aa:$.oa, x:288, y:-100}, {ca:Z.fa, aa:$.oa, x:336, y:-100}], "heri2-right":[{ca:Z.fa, aa:$.oa, x:240, y:-100}, 
{ca:Z.fa, aa:$.oa, x:288, y:-100}, {ca:Z.fa, aa:$.oa, x:336, y:-100}, {ca:Z.fa, aa:$.oa, x:384, y:-100}, {ca:Z.fa, aa:$.oa, x:432, y:-100}], "tankRD-left":[{ca:Z.Ia, aa:$.pa, x:78, y:-50}, {ca:Z.Ia, aa:$.pa, x:28, y:-100}, {ca:Z.Ia, aa:$.pa, x:-22, y:-150}, {ca:Z.Ia, aa:$.pa, x:-72, y:-200}, {ca:Z.Ia, aa:$.pa, x:-122, y:-250}], "tankRD-center":[{ca:Z.Ia, aa:$.pa, x:222, y:-50}, {ca:Z.Ia, aa:$.pa, x:172, y:-100}, {ca:Z.Ia, aa:$.pa, x:122, y:-150}, {ca:Z.Ia, aa:$.pa, x:72, y:-200}, {ca:Z.Ia, aa:$.pa, 
x:22, y:-250}], "tankL-top":[{ca:Z.ub, aa:$.pa, x:550, y:-128}, {ca:Z.ub, aa:$.pa, x:620, y:-128}, {ca:Z.ub, aa:$.pa, x:690, y:-128}, {ca:Z.ub, aa:$.pa, x:760, y:-128}, {ca:Z.ub, aa:$.pa, x:830, y:-128}], "fighter-m-0":[{ca:Z.Ya, aa:$.Xa, x:96, y:-192}], "fighter-m-1":[{ca:Z.Ya, aa:$.Xa, x:144, y:-192}], "fighter-m-2":[{ca:Z.Ya, aa:$.Xa, x:192, y:-192}], "fighter-m-3":[{ca:Z.Ya, aa:$.Xa, x:240, y:-192}], "fighter-m-4":[{ca:Z.Ya, aa:$.Xa, x:288, y:-192}], "fighter-m-5":[{ca:Z.Ya, aa:$.Xa, x:336, y:-192}], 
"fighter-m-6":[{ca:Z.Ya, aa:$.Xa, x:384, y:-192}]};
(function() {
  function a(a) {
    return b.ma(b.direction(0), a || b.speed("$rank*0.2 + 1.0 + (0*0.1)"), b.ha())
  }
  function c() {
    return b.speed("$rank*0.2 + 1.2 + ($loop.count*0.1)")
  }
  u = {na:function() {
    for(var a = 0;255 > a;a++) {
      d.push(L())
    }
    a = tm.Ca.tb.Vb;
    a.cd = function(a) {
      return!(a instanceof L) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Ad = function(a) {
      var b = d.shift(0);
      if(b) {
        return g.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.yd ? (b.scaleX = 1, b.scaleY = 1, b.rb = m, b.update = function() {
          this.rotation += 15
        }) : (b.scaleX = 0.8, b.scaleY = 1.5, b.rb = k), b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Cb = 3
  }, erase:function() {
    for(var a = [].concat(g), b = 0, c = a.length;b < c;b++) {
      a[b].Hb()
    }
  }, Sb:function() {
    for(var a = [].concat(g), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  }};
  var b = p.ia;
  u["basic0-0"] = new p.Aa({top:b.action([a])});
  u["basic0-4"] = new p.Aa({top:b.action([b.repeat(3, [b.repeat(5, [b.ma(b.direction(-20), b.speed("$loop.count*0.06+0.75"), b.ha()), b.ma(b.direction(0), b.speed("$loop.count*0.06+0.75"), b.ha()), b.ma(b.direction(20), b.speed("$loop.count*0.06+0.75"), b.ha())]), b.wait(40)])])});
  u["basic1-0"] = new p.Aa({top:b.action([b.repeat(999, [a, b.wait(20)])])});
  u["basic2-0"] = new p.Aa({top:b.action([b.wait("120"), b.repeat(999, [b.wait("50*$rand*5"), a])])});
  u["kurokawa-1"] = new p.Aa({Hf:b.action([b.repeat(3, [b.ma(b.direction(-45), c(), b.ha({frame:2}), b.offsetX(-30), b.ta(k)), b.ma(b.direction(-15), c(), b.ha({frame:2}), b.offsetX(-30), b.ta(k)), b.ma(b.direction(15), c(), b.ha({frame:2}), b.offsetX(-30), b.ta(k)), b.ma(b.direction(45), c(), b.ha({frame:2}), b.offsetX(-30), b.ta(k)), b.ma(b.direction(-45), c(), b.ha({frame:2}), b.offsetX(30), b.ta(k)), b.ma(b.direction(-15), c(), b.ha({frame:2}), b.offsetX(30), b.ta(k)), b.ma(b.direction(15), c(), 
  b.ha({frame:2}), b.offsetX(30), b.ta(k)), b.ma(b.direction(45), c(), b.ha({frame:2}), b.offsetX(30), b.ta(k)), b.wait(60)])]), If:b.action([b.repeat(9, [b.ma(b.direction(0), c(), b.ha({yd:k, frame:3}), b.offsetX(-30), b.ta(k)), b.ma(b.direction(0), c(), b.ha({yd:k, frame:3}), b.offsetX(-30), b.ta(k)), b.wait(20)])])});
  L = tm.createClass({superClass:tm.app.Sprite, Fa:0, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("added", function() {
      this.Fa = 50
    });
    this.addEventListener("removed", function() {
      d.push(this);
      var a = g.indexOf(this);
      -1 !== a && g.splice(a, 1);
      this.clearEventListener("enterframe")
    })
  }, Hb:function() {
    tm.app.CircleShape(20, 20, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(10, 10, 0, 10, 10, 10).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.7, color:"rgba(255,100,100,1.0)"}, {offset:1, color:"rgba(255,100,100,1.0)"}]).toStyle()}).setPosition(this.x, this.y).setScale(0.1, 0.1).addChildTo(this.parent).update = function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1;
      this.alpha *= 0.92;
      1E-4 > this.alpha && this.remove()
    };
    this.remove()
  }});
  var d = [], g = L.wa = []
})();
var Q, S, T, Y, ka;
Q = function(a, c, b) {
  return a < c ? c : a > b ? b : a
};
ka = Math.PI / 180;
T = function(a) {
  return a * ka
};
Y = function(a, c) {
  return window.Math.floor(Math.random() * (c - a + 1)) + a
};
S = function(a, c) {
  return window.Math.random() * (c - a) + a
};

