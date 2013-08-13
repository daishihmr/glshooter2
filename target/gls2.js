/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(a) {
  throw a;
}
var i = void 0, k = !0, l = null, n = !1;
function p() {
  return function() {
  }
}
var r = {Ve:this};
(function() {
  function a(a, c) {
    for(var f = 0, d = a.length;f < d;f++) {
      if(a[f].label == c) {
        return a[f]
      }
    }
  }
  r.za = function(a) {
    this.type = "none";
    this.root = this;
    this.Ea = [];
    this.Jc = [];
    this.Oc = [];
    if(a !== i) {
      for(var c in a) {
        a.hasOwnProperty(c) && (a[c].label = c, a[c] instanceof r.Ra ? this.Ea.push(a[c]) : a[c] instanceof r.la ? this.Jc.push(a[c]) : a[c] instanceof r.Vb && this.Oc.push(a[c]))
      }
      a = 0;
      for(c = this.Ea.length;a < c;a++) {
        this.Ea[a].Ua(this)
      }
      a = 0;
      for(c = this.Jc.length;a < c;a++) {
        this.Jc[a].Ua(this)
      }
      a = 0;
      for(c = this.Oc.length;a < c;a++) {
        this.Oc[a].Ua(this)
      }
    }
  };
  r.za.prototype.oe = function(b) {
    return a(this.Ea, b)
  };
  r.za.prototype.Yf = function() {
    for(var a = [], c = 0, f = this.Ea.length;c < f;c++) {
      var d = this.Ea[c];
      d.label && 0 === d.label.indexOf("top") && (a[a.length] = d.label)
    }
    return a
  };
  r.za.prototype.Pf = function(a) {
    var c;
    if(c = this.oe(a)) {
      return c
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  r.za.prototype.Qf = function(b) {
    return a(this.Jc, b)
  };
  r.za.prototype.Rf = function(a) {
    var c;
    if(c = this.Qf(a)) {
      return c
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  r.za.prototype.Sf = function(b) {
    return a(this.Oc, b)
  };
  r.za.prototype.Tf = function(a) {
    var c;
    if(c = this.Sf(a)) {
      return c
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  r.la = function() {
    this.root = this.label = l;
    this.direction = new r.mb(0);
    this.speed = new r.pb(1);
    this.Ea = [];
    this.Ja = {};
    this.ka = {}
  };
  r.la.prototype.clone = function(a) {
    var c = new r.la;
    c.label = this.label;
    c.root = this.root;
    c.Ea = this.Ea;
    c.direction = new r.mb(a.Ha(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new r.pb(a.Ha(this.speed.value));
    c.speed.type = this.speed.type;
    c.Ja = this.Ja;
    c.ka = a.ka;
    return c
  };
  r.la.prototype.Ua = function(a) {
    this.root = a;
    for(var c = 0, f = this.Ea.length;c < f;c++) {
      this.Ea[c].Ua(a)
    }
  };
  r.uc = function(a) {
    this.root = l;
    this.label = a;
    this.Ca = []
  };
  r.uc.prototype.clone = function(a) {
    var c = a.ka;
    a.ka = a.md(this.Ca);
    var f = this.root.Rf(this.label).clone(a);
    a.ka = c;
    return f
  };
  r.uc.prototype.Ua = function(a) {
    this.root = a
  };
  r.Da = function() {
    this.Na = ""
  };
  r.Da.prototype.Ua = function(a) {
    this.root = a
  };
  r.Ra = function() {
    this.Na = "action";
    this.root = this.label = l;
    this.Xa = [];
    this.Ca = []
  };
  r.Ra.prototype = new r.Da;
  r.Ra.prototype.Ua = function(a) {
    this.root = a;
    for(var c = 0, f = this.Xa.length;c < f;c++) {
      this.Xa[c].Ua(a)
    }
  };
  r.Ra.prototype.clone = function() {
    var a = new r.Ra;
    a.label = this.label;
    a.root = this.root;
    a.Xa = this.Xa;
    return a
  };
  r.Ub = function(a) {
    this.Na = "actionRef";
    this.label = a;
    this.root = l;
    this.Ca = []
  };
  r.Ub.prototype = new r.Da;
  r.Ub.prototype.clone = function() {
    var a = new r.Ra;
    a.root = this.root;
    a.Xa.push(this);
    return a
  };
  r.Vb = function() {
    this.Na = "fire";
    this.ea = this.speed = this.direction = this.root = this.label = l;
    this.Ja = new r.dd
  };
  r.Vb.prototype = new r.Da;
  r.Vb.prototype.Ua = function(a) {
    this.root = a;
    this.ea && this.ea.Ua(a)
  };
  r.ed = function(a) {
    this.Na = "fireRef";
    this.label = a;
    this.Ca = []
  };
  r.ed.prototype = new r.Da;
  r.vc = function() {
    this.Na = "changeDirection";
    this.direction = new r.mb;
    this.Ka = 0
  };
  r.vc.prototype = new r.Da;
  r.wc = function() {
    this.Na = "changeSpeed";
    this.speed = new r.pb;
    this.Ka = 0
  };
  r.wc.prototype = new r.Da;
  r.tc = function() {
    this.Na = "accel";
    this.jb = new r.fd;
    this.lb = new r.kd;
    this.Ka = 0
  };
  r.tc.prototype = new r.Da;
  r.Bc = function(a) {
    this.Na = "wait";
    this.value = a || 0
  };
  r.Bc.prototype = new r.Da;
  r.jd = function() {
    this.Na = "vanish"
  };
  r.jd.prototype = new r.Da;
  r.Ac = function() {
    this.Na = "repeat";
    this.Fe = 0;
    this.action = l;
    this.Ca = []
  };
  r.Ac.prototype = new r.Da;
  r.Ac.prototype.Ua = function(a) {
    this.root = a;
    this.action && this.action.Ua(a)
  };
  r.cd = function(a, c) {
    this.Na = "bind";
    this.rg = a;
    this.Nf = c
  };
  r.cd.prototype = new r.Da;
  r.gd = function(a, c) {
    this.Na = "notify";
    this.Jf = a;
    this.Ca = c || l
  };
  r.gd.prototype = new r.Da;
  r.Te = new r.Da;
  r.mb = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  r.pb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  r.fd = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  r.kd = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  r.dd = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.va = k;
    a.va !== i && (this.va = !!a.va)
  };
  r.Vd = function(a) {
    this.value = a || 0
  };
  r.Wd = function(a) {
    this.value = a || 0
  };
  r.Qd = function(a) {
    this.value = !!a
  }
})();
r.ub = function(a) {
  this.$d = a;
  this.Cc = [];
  this.vb = -1;
  this.Ga = l;
  this.ka = {}
};
r.ub.prototype.next = function() {
  this.vb += 1;
  if(this.Ga !== l) {
    var a = this.Ga.Xa[this.vb];
    if(a !== i) {
      if(a instanceof r.Ra) {
        return this.fc(), this.Ga = a, this.ka = this.ld(), this.next()
      }
      if(a instanceof r.Ub) {
        return this.fc(), this.Ga = this.$d.Pf(a.label), this.ka = this.md(a.Ca), this.next()
      }
      if(a instanceof r.Ac) {
        return this.ka.ac = 0, this.ka.xe = this.Ha(a.Fe) | 0, this.fc(), this.Ga = a.action.clone(), this.ka = this.ld(), this.next()
      }
      if(a instanceof r.Vb) {
        var b = new r.Vb;
        b.ea = a.ea.clone(this);
        a.direction !== l && (b.direction = new r.mb(this.Ha(a.direction.value)), b.direction.type = a.direction.type);
        a.speed !== l && (b.speed = new r.pb(this.Ha(a.speed.value)), b.speed.type = a.speed.type);
        b.Ja = a.Ja;
        return b
      }
      return a instanceof r.ed ? (this.fc(), this.Ga = new r.Ra, this.Ga.Xa = [this.$d.Tf(a.label)], this.ka = this.md(a.Ca), this.next()) : a instanceof r.vc ? (b = new r.vc, b.direction.type = a.direction.type, b.direction.value = this.Ha(a.direction.value), b.Ka = this.Ha(a.Ka), b) : a instanceof r.wc ? (b = new r.wc, b.speed.type = a.speed.type, b.speed.value = this.Ha(a.speed.value), b.Ka = this.Ha(a.Ka), b) : a instanceof r.tc ? (b = new r.tc, b.jb.type = a.jb.type, b.jb.value = this.Ha(a.jb.value), 
      b.lb.type = a.lb.type, b.lb.value = this.Ha(a.lb.value), b.Ka = this.Ha(a.Ka), b) : a instanceof r.Bc ? new r.Bc(this.Ha(a.value)) : a instanceof r.jd ? a : a instanceof r.cd ? (this.ka["$" + a.rg] = this.Ha(a.Nf), r.Te) : a instanceof r.gd ? a : l
    }
    this.Af();
    if(this.Ga === l) {
      return l
    }
    if((a = this.Ga.Xa[this.vb]) && "repeat" == a.Na) {
      this.ka.ac++, this.ka.ac < this.ka.xe && (this.fc(), this.Ga = a.action.clone(), this.ka = this.ld())
    }
    return this.next()
  }
  return l
};
r.ub.prototype.fc = function() {
  this.Cc.push({action:this.Ga, cursor:this.vb, scope:this.ka});
  this.vb = -1
};
r.ub.prototype.Af = function() {
  var a = this.Cc.pop();
  a ? (this.vb = a.cursor, this.Ga = a.action, this.ka = a.scope) : (this.vb = -1, this.Ga = l, this.ka = {})
};
r.ub.prototype.Ha = function(a) {
  var b;
  if("number" === typeof a) {
    return a
  }
  if(isNaN(b = Number(a))) {
    if((b = this.ka[a]) || (b = r.la.ra[a])) {
      return b
    }
    if("$rand" === a) {
      return Math.random()
    }
  }else {
    return b
  }
  b = {};
  for(var c in r.la.ra) {
    r.la.ra.hasOwnProperty(c) && (b[c] = r.la.ra[c])
  }
  for(c in this.ka) {
    this.ka.hasOwnProperty(c) && (b[c] = this.ka[c])
  }
  b.$rand = Math.random();
  (c = this.Cc[this.Cc.length - 1]) && (b.$loop = {index:c.scope.ac, count:c.scope.ac + 1, first:0 === c.scope.ac, last:c.scope.ac + 1 >= c.scope.xe});
  return(new Function("return " + a.split("$").join("this.$"))).apply(b)
};
r.ub.prototype.md = function(a) {
  var b = {};
  if(a) {
    for(var c = 0, f = a.length;c < f;c++) {
      b["$" + (c + 1)] = this.Ha(a[c])
    }
  }else {
    for(c in this.ka) {
      this.ka.hasOwnProperty(c) && (b[c] = this.ka[c])
    }
  }
  return b
};
r.ub.prototype.ld = function() {
  var a = {}, b;
  for(b in this.ka) {
    this.ka.hasOwnProperty(b) && (a[b] = this.ka[b])
  }
  return a
};
r.za.prototype.wd = function(a) {
  var b = new r.ub(this);
  if(a = this.oe(a)) {
    b.Ga = a
  }
  return b
};
r.la.prototype.wd = function() {
  var a = new r.ub(this.root), b = new r.Ra;
  b.root = this.root;
  b.Xa = this.Ea;
  a.Ga = b;
  a.ka = this.ka;
  return a
};
r.la.ra = {};
r.oa = function(a) {
  a = a || "";
  for(var b in r.oa) {
    r.oa.hasOwnProperty(b) && (r.Ve[a + b] = r.oa[b])
  }
};
r.oa.action = function(a) {
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
  var f = new r.Ra;
  if(a instanceof Array) {
    a.some(function(a) {
      return!(a instanceof r.Da)
    }) && h(Error("argument type error.")), f.Xa = a
  }else {
    b = 0;
    for(c = arguments.length;b < c;b++) {
      arguments[b] instanceof r.Da ? f.Xa[b] = arguments[b] : h(Error("argument type error."))
    }
  }
  return f
};
r.oa.xg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  f = new r.Ub(a);
  if(b instanceof Array) {
    f.Ca = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ca.push(arguments[c])
    }
  }
  return f
};
r.oa.ea = function(a, b, c, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new r.la;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof r.mb ? j.direction = arguments[d] : arguments[d] instanceof r.pb ? j.speed = arguments[d] : arguments[d] instanceof r.Ra ? j.Ea.push(arguments[d]) : arguments[d] instanceof r.Ub ? j.Ea.push(arguments[d]) : arguments[d] instanceof Array ? j.Ea.push(r.oa.action(arguments[d])) : arguments[d] instanceof Object ? j.Ja = arguments[d] : "string" === typeof arguments[d] && (j.label = arguments[d])
  }
  return j
};
r.oa.zg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  f = new r.uc(a);
  if(b instanceof Array) {
    f.Ca = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ca.push(arguments[c])
    }
  }
  return f
};
r.oa.ha = function(a, b, c, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new r.Vb;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof r.mb ? j.direction = arguments[d] : arguments[d] instanceof r.pb ? j.speed = arguments[d] : arguments[d] instanceof r.la ? j.ea = arguments[d] : arguments[d] instanceof r.uc ? j.ea = arguments[d] : arguments[d] instanceof r.dd ? j.Ja = arguments[d] : arguments[d] instanceof r.Vd ? j.Ja.offsetX = arguments[d].value : arguments[d] instanceof r.Wd ? j.Ja.offsetY = arguments[d].value : arguments[d] instanceof r.Qd && (j.Ja.va = arguments[d].value)
  }
  j.ea === i && h(Error("bullet (or bulletRef) is required."));
  return j
};
r.oa.Fg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  f = new r.ed(a);
  if(b instanceof Array) {
    f.Ca = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ca.push(arguments[c])
    }
  }
  return f
};
r.oa.Ag = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("direction is required."));
  b === i && h(Error("term is required."));
  c = new r.vc;
  c.direction = a instanceof r.mb ? a : new r.mb(a);
  c.Ka = b;
  return c
};
r.oa.Bg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("speed is required."));
  b === i && h(Error("term is required."));
  c = new r.wc;
  c.speed = a instanceof r.pb ? a : new r.pb(a);
  c.Ka = b;
  return c
};
r.oa.wg = function(a, b, c) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  d = new r.tc;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof r.fd ? d.jb = a : arguments[f] instanceof r.kd ? d.lb = b : d.Ka = arguments[f]
  }
  d.jb === i && d.lb === i && h(Error("horizontal or vertical is required."));
  d.Ka === i && h(Error("term is required."));
  return d
};
r.oa.wait = function(a) {
  for(var b = 0, c = arguments.length;b < c;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && h(Error("value is required."));
  return new r.Bc(a)
};
r.oa.Pg = function() {
  return new r.jd
};
r.oa.repeat = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("times is required."));
  b === i && h(Error("action is required."));
  f = new r.Ac;
  f.Fe = a;
  if(b instanceof r.Ra || b instanceof r.Ub) {
    f.action = b
  }else {
    if(b instanceof Array) {
      f.action = r.oa.action(b)
    }else {
      for(var d = [], c = 1;c < arguments.length;c++) {
        d.push(arguments[c])
      }
      f.action = r.oa.action(d)
    }
  }
  return f
};
r.oa.yg = function(a, b) {
  return new r.cd(a, b)
};
r.oa.Lg = function(a, b) {
  return new r.gd(a, b)
};
r.oa.direction = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new r.mb(a);
  b !== i && (c.type = b);
  return c
};
r.oa.speed = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new r.pb(a);
  b && (c.type = b);
  return c
};
r.oa.jb = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new r.fd(a);
  b && (c.type = b);
  return c
};
r.oa.lb = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new r.kd(a);
  b && (c.type = b);
  return c
};
r.oa.Eg = function(a) {
  return new r.dd(a)
};
r.oa.offsetX = function(a) {
  return new r.Vd(a)
};
r.oa.offsetY = function(a) {
  return new r.Wd(a)
};
r.oa.va = function(a) {
  return new r.Qd(a)
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
  tm.Ma.Hb = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.Xd = a
  }, Lc:function(a, c) {
    var b = this.Xd.Yf();
    if(c === i && 0 < b.length) {
      for(var f = [], s = 0, g = b.length;s < g;s++) {
        f[f.length] = this.Yd(a, b[s])
      }
      for(var A = function() {
        for(var a = f.length;a--;) {
          f[a].call(this)
        }
        A.sd == f.length && (A.jc = k, this.dispatchEvent(tm.event.Event("completeattack")))
      }, s = f.length;s--;) {
        f[s].Zc = A
      }
      A.sd = 0;
      A.ee = function() {
        this.sd++
      };
      A.sd = 0;
      A.jc = n;
      A.zd = k;
      return A
    }
    return this.Yd(a, c)
  }, Yd:function(a, c) {
    function b() {
      b.ga += 1;
      this.ga = b.ga;
      var a = b.Kc, c = b.zf;
      if(c) {
        if(b.ga < b.qd ? b.direction += b.Yb : b.ga === b.qd && (b.direction = b.yb), b.ga < b.rd ? b.speed += b.sc : b.ga === b.rd && (b.speed = b.dc), b.ga < b.nd ? (b.Rb += b.Fc, b.Tb += b.Gc) : b.ga === b.nd && (b.Rb = b.Dc, b.Tb = b.Ec), this.x += Math.cos(b.direction) * b.speed * a.Sb, this.y += Math.sin(b.direction) * b.speed * a.Sb, this.x += b.Rb * a.Sb, this.y += b.Tb * a.Sb, a.Ad(this)) {
          if(a.Fb || this.Fb) {
            this.rotation = (b.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = b.speed
          }
          if(!(b.ga < b.Ge || b.jc)) {
            for(var d;d = b.He.next();) {
              switch(d.Na) {
                case "fire":
                  c.wf.call(this, d, a, b, c);
                  break;
                case "wait":
                  a = 0;
                  b.Ge = "number" === typeof d.value ? b.ga + d.value : 0 !== (a = ~~d.value) ? b.ga + a : b.ga + eval(d.value);
                  return;
                case "changeDirection":
                  c.sf.call(this, d, a, b);
                  break;
                case "changeSpeed":
                  c.tf.call(this, d, b);
                  break;
                case "accel":
                  c.qf.call(this, d, b);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  c.xf.call(this, d)
              }
            }
            b.jc = k;
            b.Zc ? b.Zc.ee() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), b.jc = k, b.Zc ? b.Zc.ee() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    a = function(a) {
      var b = {}, c = tm.Ma.Hb.lc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    c = c || "top";
    "string" === typeof c ? b.He = this.Xd.wd(c) : c instanceof r.la ? b.He = c.wd() : (window.console.error(a, c), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    b.zf = this;
    b.Kc = a;
    b.Ge = -1;
    b.jc = n;
    b.direction = 0;
    b.ue = 0;
    b.speed = 0;
    b.we = 0;
    b.Rb = 0;
    b.Tb = 0;
    b.Yb = 0;
    b.yb = 0;
    b.qd = -1;
    b.sc = 0;
    b.dc = 0;
    b.rd = -1;
    b.Fc = 0;
    b.Dc = 0;
    b.Gc = 0;
    b.Ec = 0;
    b.nd = -1;
    b.ga = -1;
    b.zd = k;
    return b
  }, vf:function(a) {
    function b() {
      this.x += b.ge;
      this.y += b.he;
      b.Kc.Ad(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    }
    a = function(a) {
      var b = {}, c = tm.Ma.Hb.lc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b.Kc = a;
    b.direction = 0;
    b.speed = 0;
    b.ge = 0;
    b.he = 0;
    b.zd = k;
    return b
  }, wf:function(a, c, f, q) {
    if(this.jg === i || this.eb) {
      var s = {label:a.ea.label}, g;
      for(g in a.ea.Ja) {
        s[g] = a.ea.Ja[g]
      }
      if(s = c.de(s)) {
        var A = (g = !!a.ea.Ea.length) ? q.vf(c) : q.Lc(c, a.ea), O = this, Y = {x:this.x + a.Ja.offsetX, y:this.y + a.Ja.offsetY};
        f.ue = A.direction = function(g) {
          var q = eval(g.value) * Math.DEG_TO_RAD;
          switch(g.type) {
            case "aim":
              return c.target ? a.Ja.va ? b(Y, c.target) + q : b(O, c.target) + q : q - Math.PI / 2;
            case "absolute":
              return q - Math.PI / 2;
            case "relative":
              return f.direction + q;
            default:
              return f.ue + q
          }
        }(a.direction || a.ea.direction);
        f.we = A.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.we + b;
            default:
              return b
          }
        }(a.speed || a.ea.speed);
        s.x = Y.x;
        s.y = Y.y;
        g && (A.ge = Math.cos(A.direction) * A.speed * c.Sb, A.he = Math.sin(A.direction) * A.speed * c.Sb);
        s.Fb = !!s.Fb;
        if(c.Fb || s.Fb) {
          s.rotation = (A.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, s.speed = A.speed
        }
        s.addEventListener("enterframe", A);
        s.addEventListener("removed", function() {
          this.removeEventListener("enterframe", A);
          this.removeEventListener("removed", arguments.callee)
        });
        c.be ? c.be.addChild(s) : this.parent && this.parent.addChild(s)
      }
    }
  }, sf:function(c, f, m) {
    var q = eval(c.direction.value) * Math.DEG_TO_RAD, s = eval(c.Ka);
    switch(c.direction.type) {
      case "aim":
        c = f.target;
        if(!c) {
          return
        }
        m.yb = b(this, c) + q;
        m.Yb = a(m.yb - m.direction) / s;
        break;
      case "absolute":
        m.yb = q - Math.PI / 2;
        m.Yb = a(m.yb - m.direction) / s;
        break;
      case "relative":
        m.yb = m.direction + q;
        m.Yb = a(m.yb - m.direction) / s;
        break;
      case "sequence":
        m.Yb = q, m.yb = m.direction + m.Yb * (s - 1)
    }
    m.qd = m.ga + s
  }, tf:function(a, b) {
    var c = eval(a.speed.value), f = eval(a.Ka);
    switch(a.speed.type) {
      case "absolute":
        b.dc = c;
        b.sc = (b.dc - b.speed) / f;
        break;
      case "relative":
        b.dc = c + b.speed;
        b.sc = (b.dc - b.speed) / f;
        break;
      case "sequence":
        b.sc = c, b.dc = b.speed + b.sc * f
    }
    b.rd = b.ga + f
  }, qf:function(a, b) {
    var c = eval(a.Ka);
    b.nd = b.ga + c;
    if(a.jb) {
      var f = eval(a.jb.value);
      switch(a.jb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Fc = (f - b.Rb) / c;
          b.Dc = f;
          break;
        case "relative":
          b.Fc = f, b.Dc = (f - b.Rb) * c
      }
    }else {
      b.Fc = 0, b.Dc = b.Rb
    }
    if(a.lb) {
      switch(f = eval(a.lb.value), a.lb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Gc = (f - b.Tb) / c;
          b.Ec = f;
          break;
        case "relative":
          b.Gc = f, b.Ec = (f - b.Tb) * c
      }
    }else {
      b.Gc = 0, b.Ec = b.Tb
    }
  }, xf:function(a) {
    var b = tm.event.Event(a.Jf);
    if(a.Ca) {
      for(var c in a.Ca) {
        b[c] = a.Ca[c]
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
    return a
  }();
  tm.Ma.Gf = function(a) {
    var b = tm.app.Sprite(8, 8, c);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.Ma.fe = function(a) {
    f === l && (f = a.getRoot());
    return 0 <= a.x && a.x < APP.width && 0 <= a.y && a.y < APP.height
  };
  tm.Ma.Dg = function() {
    return k
  };
  tm.Ma.Hb.lc = {de:tm.Ma.Gf, Ad:tm.Ma.fe, Ng:0, Fb:n, Sb:2, target:l, ra:{}};
  r.za.prototype.Lc = function(a) {
    return tm.Ma.Hb(this).Lc(a)
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
var t = l, u, v, w, z, B, C, D, ba, ca, da, ea, fa, E, F, ga, G, ha, ia, H, ja, ka, la, ma, na, oa, I, pa, qa, J, K, L, aa = tm.createClass({superClass:tm.app.CanvasApp, Tc:0, Jg:0, Wb:3, Qb:3, ie:1, ne:[1E9, 1E10], $:l, init:function(a) {
  t !== l && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  t = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bgm1:"assets2/nc54073.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", 
  "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", star:"assets/star.png"}, nextScene:function() {
    this.yf();
    return u()
  }.bind(this)}))
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, yf:function() {
  v.sa();
  w.sa();
  this.$ = z()
}, Lf:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Tc, "")
}}), M = l;
function N() {
  M !== l && M.stop()
}
function P(a) {
  if(0 !== t.Qb && ra["sound/" + a] !== t.frame) {
    var b = tm.asset.AssetManager.get("sound/" + a);
    b && (b.volume = "vo" === a.substring(0, 2) ? 0.5 * t.Qb : 0.1 * t.Qb, b.clone().play());
    ra["sound/" + a] = t.frame
  }
}
var ra = {};
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Q(a, b) {
  return(a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
;B = {Sd:3, Rd:3, kf:1, gf:1, hf:2, ff:4, Ie:2, Ye:4, Ke:8, cf:0.01, af:0.015, bf:0.0010, Ze:0.015, $e:0.0020, df:0.75, ef:2, xc:600, Xe:0.75, We:0.25, Re:1, Pe:0.02, Qe:0.5, Oe:0.01, Ne:200, Me:10, pf:500, of:250, nf:100, mf:50, Ue:0.3, Se:4E4, Le:50, lf:10, Je:k};
(function() {
  var a = l, b = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  C = tm.createClass({superClass:tm.app.Sprite, type:0, ab:0, qb:k, bc:n, $:l, speed:4.5, Lb:l, Xb:l, ze:l, se:l, kb:l, Uc:l, Ic:l, xd:l, yd:l, init:function(b, f) {
    this.superInit("tex1", 64, 64);
    this.type = f;
    this.$ = b;
    tm.Ma.Hb.lc.target = this;
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Xb = this.ze = D(f, 100);
    this.se = D(3, 100);
    this.kb = ba(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.kb.visible = n;
    this.kb.addChildTo(b);
    this.uf();
    this.Lb = [{x:-70, y:20, d:0.1, Eb:n, zb:-0.7, v:k}, {x:-40, y:40, d:0.1, Eb:n, zb:-0.5, v:k}, {x:40, y:40, d:0.1, Eb:k, zb:0.5, v:k}, {x:70, y:20, d:0.1, Eb:k, zb:0.7, v:k}];
    this.Ic = tm.app.CanvasElement().addChildTo(this);
    for(var d = 0, j = this.Lb.length;d < j;d++) {
      var m = this.Lb[d];
      ca(this, m).setPosition(m.x, m.y).addChildTo(this.Ic)
    }
    this.bg = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.bg.blendMode = "lighter";
    this.xd = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.xd.blendMode = "lighter";
    this.xd.update = function() {
      this.rotation += 2;
      this.visible = 1 === b.Fa && !b.pa
    };
    this.yd = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.yd.blendMode = "lighter";
    this.yd.update = function() {
      this.rotation -= 2;
      this.visible = 1 === b.Fa && !b.pa
    };
    this.nc = tm.app.CanvasElement(80, 80).addChildTo(this);
    this.nc.blendMode = "lighter";
    this.nc.rotation = -90;
    this.nc.strokeStyle = "rgba(180,180,255,0.4)";
    this.nc.update = function() {
      this.visible = b.pa
    };
    this.nc.draw = function(a) {
      a.lineCap = "round";
      var d = b.Zb / B.xc;
      a.strokeStyle = "rgba(50,50,255,0.4)";
      a.lineWidth = "10";
      a.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, n);
      a.strokeStyle = "rgba(100,100,255,0.4)";
      a.lineWidth = "6";
      a.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, n);
      a.strokeStyle = "rgba(180,180,255,0.4)";
      a.lineWidth = "2";
      a.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, n)
    };
    this.Zf = tm.app.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Zf.update = function() {
      this.visible = b.pa
    };
    a === l && (a = da(this.$.ta))
  }, vg:function() {
    return[{x:-70, y:20, d:0.1, Eb:n, zb:-0.7, v:k}, {x:-40, y:40, d:0.1, Eb:n, zb:-0.5, v:k}, {x:40, y:40, d:0.1, Eb:k, zb:0.5, v:k}, {x:70, y:20, d:0.1, Eb:k, zb:0.7, v:k}]
  }, uf:function() {
    this.Uc = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.Uc.setFrameIndex(5);
    this.Uc.blendMode = "lighter";
    this.Uc.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Db:-1, Nc:n, Ab:n, update:function(c) {
    this.visible = this.bc ? 0 === c.frame / 2 % 2 : k;
    var f = c.keyboard;
    if(this.qb) {
      var d = f.getKeyAngle();
      d !== l && (d = b[d], this.x += d.x * this.speed * (this.Ab ? 0.75 : 1), this.y += d.y * this.speed * (this.Ab ? 0.75 : 1));
      this.x = R(this.x, 15, 465);
      this.y = R(this.y, 15, 625);
      var j = f.getKey("c"), d = f.getKey("z");
      this.Db = j ? this.Db + 1 : this.Db - 1;
      this.Db = R(this.Db, -1, 10);
      this.Ab = d && j || 10 === this.Db;
      j = this.$.pa ? 3 : 5;
      this.Nc = !this.Ab && (0 <= this.Db || d) && 0 === c.frame % j;
      d && (this.Db = 0);
      this.kb.x = this.x;
      this.kb.y = this.y - 40;
      if(this.Ab) {
        d = 0;
        for(j = this.Lb.length;d < j;d++) {
          this.Lb[d].v = n
        }
        this.Ic.rotation = 0
      }else {
        this.kb.visible = n;
        d = 0;
        for(j = this.Lb.length;d < j;d++) {
          this.Lb[d].v = k
        }
      }
      this.Nc && (d = Math.sin(0.2 * c.frame), j = this.Xb.ha(this.x - 7 - 6 * d, this.y - 5, -90), j !== l && j.addChildTo(this.$), j = this.Xb.ha(this.x + 7 + 6 * d, this.y - 5, -90), j !== l && j.addChildTo(this.$));
      f.getKeyDown("x") && (1 === this.$.Fa && !this.$.pa ? (this.$.og(), ea(this).addChildTo(this.$)) : !this.$.$b && 0 < this.$.cb && (this.Oa = R(this.Oa - 2, 0, 1), r.la.ra.$rank = R(r.la.ra.$rank - 0.02, 0, 1), fa(this, this.$).setPosition(R(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.$)))
    }
    this.Ff(f);
    this.rf(f);
    0 === c.frame % 2 && (a.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.$), a.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.$))
  }, Mb:function() {
    this.Ab = this.Nc = n;
    this.$.mc();
    this.$.wa = 0;
    this.$.Ba = 0;
    this.$.xa = 0
  }, Ff:function(a) {
    var b = this.Ic;
    b.rotation = this.qb && a.getKey("left") ? Math.max(b.rotation - 3, -40) : this.qb && a.getKey("right") ? Math.min(b.rotation + 3, 40) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0
  }, rf:function(a) {
    this.qb && a.getKey("left") ? this.ab = R(this.ab - 0.2, -3, 3) : this.qb && a.getKey("right") ? this.ab = R(this.ab + 0.2, -3, 3) : 0 > this.ab ? this.ab = R(this.ab + 0.2, -3, 3) : 0 < this.ab && (this.ab = R(this.ab - 0.2, -3, 3));
    a = 3 + ~~this.ab;
    this.setFrameIndex(a);
    return a
  }});
  ca = tm.createClass({superClass:tm.app.AnimationSprite, Kb:l, ba:l, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Kb = b;
    this.ba = a;
    this.altitude = 10;
    this.gotoAndPlay(b.Eb ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.Kb.v) {
      this.x = this.Kb.x * (this.ba.$.pa ? 1.5 : 1);
      this.y = this.Kb.y * (this.ba.$.pa ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Kb.d * this.Kb.zb);
      var f = this.parent.localToGlobal(this);
      this.Kb.v && 0 === b.frame % 2 && a.clone(40).setPosition(f.x, f.y).addChildTo(b.$);
      this.ba.Nc && (f = this.ba.Xb.ha(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== l && f.addChildTo(b.$))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = l;
  E = tm.createClass({superClass:tm.app.Sprite, speed:0, Pa:k, init:function(b) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    a === l && (a = F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    b !== i && this.rc(b)
  }, update:function() {
    this.x += this.sg;
    this.y += this.tg;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, rc:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48, this.setScale(2, 2)) : (this.speed = 30, this.boundingRadius = 32, this.setScale(1.5, 1.5))
  }, Qc:function(b) {
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
  E.ic = function() {
    for(var a = [].concat(b), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var b = E.Ia = [];
  D = tm.createClass({$c:l, init:function(a, f) {
    this.$c = [];
    for(var d = 0;d < f;d++) {
      var j = E(a), m = this;
      j.addEventListener("added", function() {
        this.ua = B.lf;
        b.push(this)
      });
      j.addEventListener("removed", function() {
        var a = b.indexOf(this);
        -1 !== a && b.splice(a, 1);
        m.$c.push(this)
      });
      this.$c.push(j)
    }
  }, ha:function(a, b, d) {
    var j = this.$c.pop();
    if(j === i) {
      return l
    }
    var m = sa(d);
    j.sg = Math.cos(m) * j.speed;
    j.tg = Math.sin(m) * j.speed;
    j.setPosition(a, b);
    j.rotation = d + 90;
    return j
  }})
})();
(function() {
  var a = l;
  ba = tm.createClass({superClass:tm.app.Sprite, ba:l, $:l, Wa:0, frame:0, Ee:l, color:l, Cf:n, head:l, pe:l, ce:l, Pa:k, init:function(a, c) {
    this.ba = a;
    this.$ = a.$;
    var f = this;
    this.Ee = c;
    this.superInit(c.redBody, 50, 100);
    this.boundingHeightBottom = 1;
    this.Og = 0;
    this.origin.y = 1;
    var d = this.ce = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
    d.y = 60;
    d.addChildTo(this);
    (this.pe = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
    d = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
    d.addChildTo(this);
    d.update = function() {
      this.y = f.Wa - f.y;
      -10 < this.y && (this.y = -10);
      this.visible = 0 < f.Wa
    };
    this.rc("blue")
  }, rc:function(b) {
    this.color = b;
    this.image = tm.asset.AssetManager.get(this.Ee[this.color + "Body"]);
    this.srcRect.x = 0;
    this.srcRect.y = 0;
    this.srcRect.width = this.image.width / 16;
    this.ce.gotoAndPlay(this.color);
    this.pe.gotoAndPlay(this.color);
    this.head.gotoAndPlay(this.color);
    a = F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element);
    "hyper" === b ? (this.boundingWidth = this.width = 75, this.head.setScale(1.5, 1.5)) : (this.boundingWidth = this.width = 50, this.head.setScale(1, 1));
    return this
  }, Qc:function(b, c) {
    c = c || this.Wa;
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
  }, Wf:function(b, c, f) {
    c = c || this.x;
    f = f || this.Wa;
    for(var d = 0;d < b;d++) {
      var j = a.clone().setPosition(c, f).addChildTo(this.$), m = S(12, 20), q = S(0, Math.PI);
      j.ma = Math.cos(q) * m;
      j.na = Math.sin(q) * m;
      j.scaleX = j.scaleY = (S(1, 3) + S(1, 3)) / 2;
      j.addEventListener("enterframe", function() {
        this.x += this.ma;
        this.y += this.na;
        this.ma *= 0.95;
        this.na *= 0.95
      })
    }
  }, update:function(a) {
    (this.visible = this.ba.Ab) ? (this.Wa = Math.max(0, this.Wa - 40), this.height = this.y - this.Wa, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Wa = this.y - 40;
    this.Cf = this.visible
  }, draw:function(a) {
    var c = this.srcRect, f = this._image.element;
    c.x = c.width * this.frame;
    a.context.drawImage(f, c.x, c.height - this.height, c.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Ig:function() {
    return this.Wa
  }, ng:function(a) {
    this.Wa = a;
    this.head.update()
  }});
  ba.prototype.getter("boundingHeightTop", function() {
    return this.position.y - this.Wa
  })
})();
(function() {
  fa = tm.createClass({superClass:tm.app.Object2D, Pa:k, $:l, init:function(b, c) {
    this.superInit();
    this.ba = b;
    this.$ = c;
    this.Ce = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Ce.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Ce));
    this.ae();
    a === l && (a = F(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ga = 0;
    this.qc = 1;
    this.addEventListener("added", function() {
      this.$.$b = k;
      this.ba.bc = k;
      this.$.cb -= 1;
      this.$.mc();
      this.$.Qa("drop BOMBER!!", k);
      P("bomb");
      P("voBomb")
    });
    this.addEventListener("removed", function() {
      this.$.$b = n;
      this.ba.bc = n
    })
  }, ae:function() {
    this.Ya = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.Ya.gotoAndPlay("animation");
    this.Ya.blendMode = "lighter";
    this.Ya.setScale(0.1, 0.1);
    this.Ya.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.9, 1.1)
      }
    }.bind(this.Ya))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.qc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.ga;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.ga += 3.6, this.qc = -1) : (this.b = 8, this.ga += 1.8, this.qc = 1)
  }});
  ga = tm.createClass({superClass:fa, init:function(a, c) {
    this.superInit(a, c);
    B.Je && this.addEventListener("added", function() {
      this.$.cb = 0
    })
  }, ae:function() {
    this.Ya = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.Ya.gotoAndPlay("animation");
    this.Ya.blendMode = "lighter";
    this.Ya.setScale(0.1, 0.1);
    this.Ya.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.4, 0.6)
      }
    }.bind(this.Ya))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.qc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.04 * this.ga;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.ga += 1.8, this.qc = 1)
  }});
  var a = l
})();
G = tm.createClass({ba:l, $:l, aa:l, frame:0, init:function(a) {
  this.$ = a;
  this.ba = a.ba;
  this.Be();
  this.aa = ha();
  this.frame = 0
}, Be:p(), update:function() {
  this.Kf(this.frame);
  this.frame += 1
}, Kf:function(a) {
  a = this.aa.get(a);
  if(a !== l) {
    if("function" === typeof a.value) {
      a.value.call(this)
    }else {
      if(ia[a.value] !== i) {
        var b = ia[a.value];
        if(b !== l) {
          for(var c = 0;c < b.length;c++) {
            var f = this.ag(b[c]);
            a.stop && f.addEventListener("enemyconsumed", function() {
              this.aa.Pd = n
            }.bind(this))
          }
        }
      }
    }
  }
}, ag:function(a) {
  this.$.vd += 1;
  return H(this.$, this, a.ca, a.da).setPosition(a.x, a.y).addChildTo(this.$).Nb()
}, Mg:p()});
G.create = function(a, b) {
  if(0 === b) {
    return ja(a)
  }
};
ha = tm.createClass({index:0, data:l, Pd:n, init:function() {
  this.data = {}
}, add:function(a, b, c) {
  this.index += a;
  this.data[this.index] = {stop:c, value:b}
}, get:function(a) {
  a = this.data[a];
  return a === i ? l : a.stop === k ? (this.Pd = k, a) : this.Pd ? l : a
}});
ja = tm.createClass({superClass:G, init:function(a) {
  this.superInit(a);
  this.aa.add(0, function() {
    N();
    if(0 !== t.Wb) {
      var a = tm.asset.AssetManager.get("bgm1");
      a && (M = a.clone(), M.volume = 0.1 * t.Wb, M.loop = k, M.play())
    }
    this.$.ta.direction = 0.5 * Math.PI;
    this.$.ta.speed = 1
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
    this.$.ta.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.$.ta.tweener.clear().to({speed:1}, 2E3, "easeInOutQuad")
  });
  this.aa.add(100, "komachi-0");
  this.aa.add(100, "komachi-1")
}, Be:function() {
  this.$.ta.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,30%)"}, {offset:1, color:"hsl(230,50%,15%)"}]).toStyle()
}});
w = {sa:function() {
  ta(256);
  ka = {};
  w.explosion = Array.range(0, 2).map(function(a) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + a, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  ka.explodeL = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  w.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  w.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  w.particle16 = F(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Qc:function(a, b, c) {
  a = w.particle16.clone().setPosition(a, b).addChildTo(c);
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
}, Hg:function(a, b, c) {
  var f = tm.app.Sprite().setPosition(a, b).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  f.image = w.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, Xf:function(a, b, c) {
  a = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(a, b).setScale(0.1, 0.1);
  a.Pa = k;
  a.addChildTo(c);
  a.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(a))
}, Mc:function(a, b, c, f) {
  P("explode");
  a = w.explosion.random().clone().addEventListener("animationend", function() {
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
}, Mf:function(a, b, c) {
  P("explode");
  var f = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  f.Pa = k;
  f.addChildTo(c);
  f = w.explosion.random().clone().addEventListener("animationend", function() {
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
  f = w.explosion.random().clone().addEventListener("animationend", function() {
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
}, me:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), d = 0;20 > d;d++) {
    var j = w.explosion.random().clone().addEventListener("animationend", function() {
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
}, le:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), d = 0;40 > d;d++) {
    for(var j = 2 * Math.PI * d / 40, m = Math.pow(T.at(~~(T.length * d / 40) + f), 2), q = 0;4 > q;q++) {
      var s = 5 * m * (q + 1), g = ka.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ga && (this.blendMode = "source-over");
        this.ga += 1
      }).setScale(0.3 * (5 - q)).setBlendMode("lighter").setPosition(a, b).gotoAndPlay();
      g.rotation = 2 * Math.random() * Math.PI;
      g.Pa = k;
      g.alpha = 0.5;
      g.ga = 0;
      g.a = j;
      g.v = s;
      g.addChildTo(c)
    }
  }
}};
la = tm.createClass({superClass:tm.app.Object2D, target:l, Pb:0, angle:0, alpha:1, Pa:k, reverse:n, init:function(a, b) {
  this.superInit();
  this.target = a;
  this.reverse = b;
  this.angle = 0;
  this.Pb = b ? 0 : 200;
  this.alpha = b ? 1 : 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;9 > a;a++) {
      var b = this.angle + 2 * a / 9 * Math.PI;
      F(80, this.alpha, 0.9).setPosition(Math.cos(b) * this.Pb + this.target.x, Math.sin(b) * this.Pb + this.target.y).addChildTo(this.target.parent)
    }
    this.angle += 0.05;
    this.Pb += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.Pb || 200 < this.Pb) && this.remove()
  }
}});
ea = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, Pa:k, init:function(a) {
  this.superInit();
  this.target = a;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;5 > a;a++) {
      F(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + U(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + U(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
ma = tm.createClass({superClass:tm.graphics.Canvas, $:l, kc:l, init:function(a) {
  this.superInit("#scoreLabel");
  this.$ = a;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.kc = ua(200)
}, update:function() {
  this.clear();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  var a;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.$.score)).padding(16, " ");
  a = "";
  for(var b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.$.wa)).padding(8, " ");
  a = "";
  for(b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, 22);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * r.la.ra.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.$.Xc + " hit", 10, 95);
  0 < ~~this.$.xa && (this.setText("bold 40px Orbitron", "left", "top"), this.strokeText(~~this.$.xa + " HIT!!", 10, 115));
  for(b = 0;b < this.$.Gb - 1;b++) {
    this.drawTexture(tm.asset.AssetManager.get("tex1"), 192, 0, 64, 64, 5 + 32 * b, 40, 32, 32)
  }
  this.fillStyle = "rgba(255,255,255,0.5)";
  for(b = 0;b < this.$.cb;b++) {
    this.fillRect(5 + 25 * b, 601, 20, 20)
  }
  this.kc.update();
  this.kc.draw(this)
}});
(function() {
  var a = 16 * Math.sqrt(3), b = 12.8 * Math.sqrt(3);
  na = tm.createClass({superClass:tm.graphics.Canvas, fa:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.fa = oa();
    this.fa.ta = this;
    this.fa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(c) {
    this.fa.ma = Math.cos(this.fa.direction) * this.fa.speed;
    this.fa.na = Math.sin(this.fa.direction) * this.fa.speed;
    for(this.fa.fb += this.fa.ma;96 < this.fa.fb;) {
      this.fa.fb -= 96
    }
    for(;-96 > this.fa.fb;) {
      this.fa.fb += 96
    }
    for(this.fa.hb += this.fa.na;2 * a < this.fa.hb;) {
      this.fa.hb -= 2 * a
    }
    for(;this.fa.hb < 2 * -a;) {
      this.fa.hb += 2 * a
    }
    for(this.fa.gb += 0.8 * this.fa.ma;25.6 * 3 < this.fa.gb;) {
      this.fa.gb -= 25.6 * 3
    }
    for(;this.fa.gb < -25.6 * 3;) {
      this.fa.gb += 25.6 * 3
    }
    for(this.fa.ib += 0.8 * this.fa.na;2 * b < this.fa.ib;) {
      this.fa.ib -= 2 * b
    }
    for(;this.fa.ib < 2 * -b;) {
      this.fa.ib += 2 * b
    }
    0 === c % 2 && this.draw()
  }, draw:function() {
    this.fa.background !== l ? this.clearColor(this.fa.background, 0, 0) : this.clear();
    this.lineWidth = 0.2;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    this.beginPath();
    for(var c = 0, f = this.fa.fb - 96;576 > f;f += 48) {
      for(var c = 0 === c ? a : 0, d = this.fa.hb - 2 * a + c;d < 640 + 2 * a;d += 2 * a) {
        this.line(f, d, f + 32, d), this.line(f, d, f - 16, d + a), this.line(f, d, f - 16, d - a)
      }
    }
    this.stroke();
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(128,128,128,1.0)"}, {offset:1, color:"rgba(128,128,128,0.5)"}]).toStyle();
    this.beginPath();
    c = 0;
    for(f = this.fa.gb - 25.6 * 3;f < 480 + 25.6 * 3;f += 25.6 * 1.5) {
      c = 0 === c ? b : 0;
      for(d = this.fa.ib - 2 * b + c;d < 640 + 2 * b;d += 2 * b) {
        this.line(f, d, f + 25.6, d), this.line(f, d, f - 12.8, d + b), this.line(f, d, f - 12.8, d - b)
      }
    }
    this.stroke()
  }});
  oa = tm.createClass({superClass:tm.app.Object2D, fb:0, hb:0, gb:0, ib:0, direction:0, speed:0, ma:0, na:0, background:l, init:function() {
    this.superInit();
    this.gb = this.ib = this.fb = this.hb = 0;
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.na = this.ma = 0
  }})
})();
I = tm.createClass({superClass:tm.app.Sprite, te:n, $:l, ba:l, $a:n, Sc:n, Ld:n, ma:0, na:0, init:function(a) {
  this.superInit("star", 20, 20);
  (this.te = a) && this.setScale(2, 2);
  this.$ = z.hd;
  this.ba = this.$.ba;
  this.addChildTo(this.$);
  a = 0.5 * Math.random() * Math.PI - 0.75 * Math.PI;
  this.ma = 30 * Math.cos(a);
  this.na = 30 * Math.sin(a)
}, update:function() {
  this.ba.Ab && (this.Sc = k);
  if(this.ba.parent === l) {
    this.Sc = n
  }else {
    if(100 > Q(this, this.ba)) {
      this.$.cg(this);
      this.remove();
      return
    }
    1E4 > Q(this, this.ba) && (this.Sc = k);
    if(this.Ld && this.Sc) {
      var a = Math.atan2(this.ba.y - this.y, this.ba.x - this.x);
      this.x += 10 * Math.cos(a);
      this.y += 10 * Math.sin(a)
    }else {
      this.Ld || (this.x += this.ma, this.y += this.na, this.ma *= 0.8, this.na *= 0.8, -1 < this.ma && (1 > this.ma && -1 < this.na && 1 > this.na) && (this.Ld = k))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
pa = tm.createClass({superClass:I, $a:n, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
qa = tm.createClass({superClass:I, $a:k, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.x += this.$.ta.ma;
  this.y += this.$.ta.na;
  this.superClass.prototype.update.call(this)
}});
function V(a, b) {
  if(a.parent === l || b.parent === l) {
    return n
  }
  var c = a.x + a.boundingWidthRight, f = a.y - a.boundingHeightTop, d = a.y + a.boundingHeightBottom, j = b.x - b.boundingWidthLeft, m = b.y - b.boundingHeightTop, q = b.y + b.boundingHeightBottom;
  return a.x - a.boundingWidthLeft < b.x + b.boundingWidthRight && c > j && f < q && d > m
}
;var W = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, pg:function(a, b) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = b
}, finish:function(a) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(a)
}});
var va = tm.createClass({superClass:W, titleText:l, menu:l, descriptions:l, showExit:n, title:l, selections:[], description:l, box:l, cursor:l, Cd:l, _selected:0, _opened:n, _finished:n, init:function(a, b, c) {
  this.superInit();
  this.titleText = a;
  this.menu = b;
  this._selected = ~~c.defaultValue;
  this.showExit = c.showExit;
  this.descriptions = c.menuDescriptions;
  this.showExit && (b.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Cd = c.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Cd !== l && this.parent.Cd(this.s))
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
function X(a, b, c, f, d) {
  d = {}.$extend({menuDescriptions:[].concat(c), showExit:k, defaultValue:0, onCursorMove:p()}, d);
  a.pg(va(b, c, d), f)
}
;F = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, od:0.85, size:0, image:l, Pa:k, init:function(a, b, c, f) {
  this.superInit();
  this.width = this.height = this.size = a;
  b !== i && (this.alpha = b);
  c !== i && (this.od = c);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.od;
  0.0010 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return F(this.size, this.Kg, this.od, this.image)
}});
da = tm.createClass({superClass:F, ta:l, init:function(a, b) {
  b = b || 20;
  this.superInit(b, 1, 0.82, tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element);
  this.ta = a
}, update:function(a) {
  this.superClass.prototype.update.apply(this, a);
  this.x += this.ta.ma;
  this.y += this.ta.na + 0.3
}, clone:function(a) {
  return da(this.ta, a)
}});
var ua = tm.createClass({width:0, label:l, La:l, ga:0, init:function(a) {
  this.width = a;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.La = []
}, Bf:function(a, b) {
  b === k && (this.La.clear(), this.La.push(""));
  5 < this.La.length && this.La.splice(1, this.La.length - 4);
  this.La.push(a);
  return this
}, Ef:function() {
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
  a.translate(480 - this.width - 5, 5);
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
function ta(a) {
  function b(b) {
    if(1 > b) {
      return l
    }
    var d = [], f = Math.random(), j, m;
    for(m = 0;m < a;m += ~~b) {
      j = Math.random();
      for(var q = 0;q < b;q++) {
        d[m + q] = c(f, j, q / b)
      }
      f = j
    }
    f = d[a - ~~b];
    j = d[0];
    for(q = 0;q < b;q++) {
      d[a - ~~b + q] = c(f, j, q / b)
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
    for(var q = 0;q < a;q++) {
      m[q] += f[d][q] * j
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
  u = tm.createClass({superClass:W, result:l, ga:0, pc:[], Pc:n, re:l, ve:0, Wc:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.re = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Pc = n;
      for(var a = ("" + Math.floor(t.Tc)).padding(16, " "), b = "", d = 0;d < a.length;d += 4) {
        b += a.substring(d, d + 4) + " "
      }
      this.re.text = "HIGH SCORE: " + b.trim()
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Zd(80 * Math.cos(0.01 * this.ga) + 240, 80 * Math.sin(0.01 * this.ga) + 320, 0);
    this.Zd(80 * Math.cos(0.01 * this.ga + Math.PI) + 240, 80 * Math.sin(0.01 * this.ga + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) && !this.Pc && this.Ae();
    this.ga += 1
  }, Zd:function(c, f, d) {
    if(!this.Pc) {
      a === l && (a = F(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === l && (b = F(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      d = 0 === d ? a.clone().addChildTo(this) : b.clone().addChildTo(this);
      d.speed = 0.6;
      var j = S(0, 2 * Math.PI), m = U(0, 20);
      d.setPosition(Math.cos(j) * m + c, Math.sin(j) * m + f);
      var q = this;
      d.update = function() {
        this.x += Math.cos(j) * this.speed;
        this.y += Math.sin(j) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = q.pc.indexOf(this);
          -1 !== a && q.pc.splice(a, 1)
        }
      };
      this.pc.push(d)
    }
  }, Ae:function() {
    X(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.gg, {defaultValue:this.ve, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, gg:function(a) {
    4 !== a && (this.ve = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Pc = k;
          for(var a = 0, b = this.pc.length;a < b;a++) {
            this.pc[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          t.$.start(2);
          t.replaceScene(t.$)
        }.bind(this));
        break;
      case 2:
        this.Cb();
        break;
      case 3:
        t.Lf()
    }
  }, Cb:function() {
    X(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Gd, {defaultValue:this.Wc, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Gd:function(a) {
    3 !== a && (this.Wc = a);
    switch(a) {
      case 0:
        this.Hd();
        break;
      case 1:
        this.Id();
        break;
      case 2:
        this.mg();
        break;
      default:
        this.Ae()
    }
  }, Hd:function() {
    X(this, "BGM VOLUME", "012345".split(""), this.Ed, {defaultValue:t.Wb, onCursorMove:function(a) {
      M !== l && "exit" !== a && (M.volume = 0.1 * a)
    }, showExit:n})
  }, Ed:function(a) {
    6 !== a && (t.Wb = a);
    this.Cb()
  }, Id:function() {
    X(this, "SE VOLUME", "012345".split(""), this.Fd, {defaultValue:t.Qb, showExit:n})
  }, Fd:function(a) {
    6 !== a && (t.Qb = a);
    this.Cb()
  }, mg:function() {
    X(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.fg, {defaultValue:t.ie, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, fg:function(a) {
    5 !== a && (t.ie = a);
    this.Cb()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
tm.createClass({superClass:W, init:function() {
  this.superInit();
  tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(240, 320).addChildTo(this)
}});
z = tm.createClass({superClass:W, ba:l, score:0, wa:0, xa:0, Xc:0, Ba:0, xb:0, ad:l, ta:l, Gb:3, Md:0, Nd:0, rb:0, vd:0, cb:0, hc:0, Df:6, $b:n, Fa:0, Oa:0, pa:n, oc:0, Zb:0, Rc:l, Kd:l, ke:l, td:l, je:l, pd:l, $f:l, Vc:l, cc:l, init:function() {
  z.hd !== l && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  z.hd = this;
  this.cc = ma(this);
  this.ta = na().fa;
  this.ta.addChildTo(this);
  this.Rc = z.Ib().addChildTo(this);
  this.ke = z.Ib().addChildTo(this);
  this.td = z.Ib().addChildTo(this);
  this.Kd = z.Ib().addChildTo(this);
  this.je = z.Ib().addChildTo(this);
  this.pd = z.Ib().addChildTo(this);
  this.$f = z.Td(this).addChildTo(this);
  tm.Ma.Hb.lc.be = this;
  this.Vc = tm.app.Object2D();
  this.Vc.addChildTo(this);
  this.Vc.update = function(a) {
    this.ig(a)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.cc.clear()
  })
}, addChild:function(a) {
  a.Pa ? this.td.addChild(a) : a instanceof J ? this.pd.addChild(a) : a instanceof I ? this.Rc.addChild(a) : a instanceof H ? a.$a ? this.Rc.addChild(a) : this.ke.addChild(a) : a instanceof C ? this.Kd.addChild(a) : a === this.Vc || a === this.ta || a instanceof z.Ib || a instanceof z.Td ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(a)))
}, update:function(a) {
  0 === a.frame % 500 && (T = ta(512));
  this.ad.update(a.frame);
  this.pa && (this.Zb -= 1, 0 >= this.Zb && this.mc());
  this.oc = Math.max(this.oc - 1, 0);
  0 === a.frame % 5 && this.cc.update();
  this.Ba -= B.Pe * B.Qe;
  0 >= this.Ba && (this.Ba = 0, this.pa || 1 === this.Fa ? this.xb = this.xa = this.wa = 0 : (0 < this.xa && (0 >= this.xb && (this.xb = this.xa * B.Oe), this.wa = this.wa * (this.xa - this.xb) / this.xa, this.xa -= this.xb), 0 >= this.xa && (this.xb = this.xa = this.wa = 0)));
  if(a.keyboard.getKeyDown("escape")) {
    this.app.replaceScene(u()), N()
  }else {
    if(a.keyboard.getKeyDown("space")) {
      this.Yc(0)
    }else {
      if(a.keyboard.getKeyDown("p")) {
        var b = tm.graphics.Canvas();
        b.resize(480, 640);
        b.clearColor("black");
        b.drawImage(this.ta.ta.element, 0, 0);
        b.drawImage(a.canvas.element, 0, 0);
        b.drawImage(this.cc.element, 0, 0);
        b.saveAsImage();
        this.Yc(0)
      }
    }
  }
}, ig:function() {
  this.ba.qb === n && v.erase();
  var a;
  a = [].concat(H.Ia);
  for(var b = [].concat(E.Ia), c = b.length;b[--c] !== i;) {
    for(var f = a.length;a[--f] !== i;) {
      var d = a[f], j = b[c];
      if(!(0 >= d.ua) && V(d, j) && (j.Qc(1), j.remove(), d.Mb(this.pa ? B.gf : B.kf))) {
        this.rb += 1;
        this.pa === n && this.gc(B.cf);
        this.Dd(d);
        break
      }
    }
  }
  j = this.ba.kb;
  if(this.ba.kb.visible) {
    a = [].concat(H.Ia);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = a.length;a[--f] !== i;) {
      if(d = a[f], !(0 >= d.ua) && V(d, j)) {
        j.ng(d.y + d.boundingHeightBottom);
        d.Mb(this.pa ? B.ff : B.hf) ? (this.rb += 1, this.pa === n && this.gc(B.af), this.Dd(d)) : (this.Hc(0.01), this.Ba = Math.max(this.Ba, 0.05), this.pa === n && this.gc(B.bf));
        j.Qc(2);
        break
      }
    }
    b = {x:this.ba.x, y:this.ba.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(H.Ia);
    for(f = a.length;a[--f] !== i;) {
      d = a[f], !(0 >= d.ua) && V(d, b) && (d.Mb(this.pa ? B.Ye : B.Ie) ? (this.rb += 1, this.gc(B.Ze), this.Dd(d)) : (this.Hc(0.01), this.Ba = Math.max(this.Ba, 0.05), this.gc(B.$e)), j.Wf(2, this.ba.x, this.ba.y - 30))
    }
  }
  if(this.$b) {
    v.erase();
    a = [].concat(H.Ia);
    for(f = a.length;a[--f] !== i;) {
      d = a[f], !(0 >= d.ua) && (d.Bb() && d.Mb(B.Ke)) && (this.wb(d.score), this.rb += 1)
    }
    this.Ba = this.xa = 0
  }
  if(this.pa) {
    f = [].concat(E.Ia);
    for(d = f.length;f[--d] !== i;) {
      if(j = f[d], !(0 >= j.ua)) {
        b = [].concat(J.Ia);
        for(a = b.length;b[--a] !== i;) {
          c = b[a], 0 < j.ua && V(j, c) && (c.ua -= 6 - this.Oa, 0 > c.ua && (c.Ta(), this.wb(B.Me), this.Hc(1), this.qe(n, n, c.x, c.y, 1)), j.ua -= 1)
        }
      }
    }
  }
  if(this.ba.parent !== l && this.ba.bc === n && this.$b === n && 0 >= this.oc) {
    for(f = J.Ia.length;J.Ia[--f] !== i;) {
      if(a = J.Ia[f], V(a, this.ba)) {
        this.ba.Mb();
        0 < this.cb ? (this.Oa = R(this.Oa - 1, 0, 1), r.la.ra.$rank = R(r.la.ra.$rank - 0.01, 0, 1), ga(this.ba, this).setPosition(this.ba.x, this.ba.y).addChildTo(this)) : this.ye();
        break
      }
    }
    for(f = H.Ia.length;H.Ia[--f] !== i;) {
      if(d = H.Ia[f], !(0 >= d.ua) && !d.$a && V(d, this.ba)) {
        this.ba.Mb();
        0 < this.cb ? (this.Oa = R(this.Oa - 1, 0, 1), r.la.ra.$rank = R(r.la.ra.$rank - 0.01, 0, 1), ga(this.ba, this).setPosition(this.ba.x, this.ba.y).addChildTo(this)) : this.ye();
        break
      }
    }
  }
}, Dd:function(a) {
  this.qe(a.$a, this.pa || Q(a, this.ba) < B.Se, a.x, a.y, a.star);
  this.Hc(1);
  if(!this.pa && 1 === this.Fa) {
    for(var b = this.wa, c = ~~(this.xa / B.Ne) + 1;0 < c;c--) {
      b += a.score, this.wb(b)
    }
    this.wa += a.score * c
  }else {
    this.wb(this.wa + a.score), this.wa += a.score
  }
}, qe:function(a, b, c, f, d) {
  a = a ? qa : pa;
  for(var j = 0;j < d;j++) {
    a(b).setPosition(c, f)
  }
}, cg:function(a) {
  P("star");
  a.te ? (this.Nd += 1, this.wb(B.pf), this.wb(0.4 * this.wa), this.wa += B.nf) : (this.Md += 1, this.wb(B.of), this.wb(0.2 * this.wa), this.wa += B.mf)
}, start:function(a) {
  this.cc.kc.Ef().clear();
  this.score = 0;
  this.Gb = B.Sd;
  this.cb = this.hc = B.Rd;
  this.Oa = this.Fa = 0;
  r.la.ra.$rank = 0;
  this.mc();
  this.$b = n;
  this.ba !== l && this.ba.parent !== l && this.ba.remove();
  H.ic();
  E.ic();
  v.ic();
  this.Rc.clear();
  this.td.clear();
  this.je.clear();
  this.Kd.clear();
  this.pd.clear();
  this.ba = C(this, a);
  this.qg(0)
}, qg:function(a) {
  this.Qa("3...2...1...");
  this.rb = this.vd = this.Nd = this.Md = this.Xc = this.Ba = this.xa = this.wa = 0;
  this.ad = G.create(this, a);
  this.tweener.clear().wait(1E3).call(function() {
    this.Bd()
  }.bind(this))
}, Bd:function() {
  this.Qa("Let's go!");
  this.ba.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.ba.qb = n;
  this.ba.bc = k;
  this.ba.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.qb = k
  }.bind(this.ba)).wait(2E3).call(function() {
    this.bc = n
  }.bind(this.ba));
  this.cb = this.hc
}, ye:function() {
  w.Mc(this.ba.x, this.ba.y, this);
  this.Qa("I was shot down.");
  this.ba.qb = n;
  this.ba.remove();
  this.Gb -= 1;
  this.xb = this.xa = this.Ba = 0;
  this.Oa = R(this.Oa - 3, 0, 1);
  r.la.ra.$rank = R(r.la.ra.$rank - 0.03, 0, 1);
  0 < this.Gb ? this.tweener.clear().wait(1E3).call(function() {
    this.hc = Math.min(this.hc + 1, this.Df);
    this.Bd()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.lg()
  }.bind(this))
}, Uf:function() {
  this.Qa("System rebooted.", k);
  this.score = 0;
  this.Gb = B.Sd;
  this.cb = this.hc = B.Rd;
  this.Oa = 0;
  r.la.ra.$rank = 0;
  this.Bd()
}, Cg:p(), Vf:function() {
  N();
  this.app.replaceScene(wa())
}, Gg:p(), wb:function(a) {
  var b = this.score;
  this.score += a;
  for(a = 0;a < t.ne.length;a++) {
    var c = t.ne[a];
    b < c && c <= this.score && this.Of()
  }
  t.Tc = Math.max(t.Tc, this.score)
}, Hc:function(a) {
  this.pa && (a *= B.Re);
  this.xb = 0;
  this.xa += a;
  this.Xc = Math.max(this.Xc, this.xa);
  1 <= a && (this.Ba = 1)
}, gc:function(a) {
  !(0 < a && 1 === this.Fa) && !(0 > a && 0 === this.Fa) && (this.pa && (a *= B.ef), this.Fa = R(this.Fa + a * B.df, 0, 1), 1 === this.Fa ? (0.5 > Math.random() ? this.Qa("HYPER SYSTEM, ready.", k) : this.Qa("HYPER SYSTEM, stand by.", k), la(this.ba).addChildTo(this), P("voHyperReady")) : 0 === this.Fa && this.mc())
}, og:function() {
  0.5 > Math.random() ? (this.Qa("HYPER SYSTEM start!!", k), P("voHyperStart0")) : (this.Qa("start counting to system limit.", k), P("voHyperStart1"));
  this.pa = k;
  this.Fa = 0;
  this.Oa = R(this.Oa + 1, 0, 5);
  r.la.ra.$rank = R(r.la.ra.$rank + 0.02 * this.Oa, 0, 1);
  r.la.ra.$hyperOff = B.Ue;
  this.Zb = B.xc;
  this.oc = B.xc * B.Xe;
  this.ba.Xb = this.ba.se;
  this.ba.kb.rc("hyper");
  w.Xf(this.ba.x, this.ba.y, this)
}, mc:function() {
  this.pa !== n && (this.pa = n, la(this.ba, k).addChildTo(this), this.ba.Xb = this.ba.ze, this.ba.kb.rc("blue"), r.la.ra.$hyperOff = 1, this.oc = B.xc * B.We, this.Zb = 0, v.erase())
}, Of:function() {
  this.Qa("extended.");
  this.Gb += 1
}, Qa:function(a, b) {
  this.cc.kc.Bf(a, b)
}, Yc:function(a) {
  X(this, "PAUSE", ["resume", "setting", "exit game"], this.hg, {defaultValue:a, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:n})
}, hg:function(a) {
  switch(a) {
    case 1:
      this.Cb();
      break;
    case 2:
      this.kg()
  }
}, Cb:function() {
  X(this, "SETTING", ["bgm volume", "sound volume"], this.Gd, {defaultValue:this.Wc, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Gd:function(a) {
  3 !== a && (this.Wc = a);
  switch(a) {
    case 0:
      this.Hd();
      break;
    case 1:
      this.Id();
      break;
    default:
      this.Yc()
  }
}, kg:function() {
  X(this, "REARY?", ["yes", "no"], this.dg, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:n})
}, dg:function(a) {
  0 === a ? (N(), this.app.replaceScene(u())) : this.Yc(1)
}, Hd:function() {
  X(this, "BGM VOLUME", "012345".split(""), this.Ed, {defaultValue:t.Wb, onCursorMove:function(a) {
    M !== l && 6 !== a && (M.volume = 0.1 * a)
  }, showExit:n})
}, Ed:function(a) {
  6 !== a && (t.Wb = a);
  this.Cb(1)
}, Id:function() {
  X(this, "SE VOLUME", "012345".split(""), this.Fd, {defaultValue:t.Qb, showExit:n})
}, Fd:function(a) {
  6 !== a && (t.Qb = a);
  this.Cb(1)
}, lg:function() {
  X(this, "CONTINUE?", ["yes", "no"], this.eg, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:n})
}, eg:function(a) {
  switch(a) {
    case 0:
      this.Uf();
      break;
    case 1:
      this.Vf()
  }
}, draw:p()});
z.Ib = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}, clear:function() {
  for(var a = [].concat(this.children), b = 0;b < a.length;b++) {
    this.removeChild(a[b])
  }
}});
z.Td = tm.createClass({superClass:tm.app.CanvasElement, $:l, frame:0, init:function(a) {
  this.superInit();
  this.$ = a
}, update:function(a) {
  this.frame = a.frame
}, draw:function(a) {
  this.Hf(a);
  this.If(a)
}, Hf:function(a) {
  if(0 < this.$.Ba) {
    a.fillStyle = "rgba(255," + ~~(255 * this.$.Ba) + "," + ~~Math.min(255, 512 * this.$.Ba) + ",0.5)";
    var b = 500 * this.$.Ba;
    a.fillRect(465, 635 - b, 10, b)
  }
}, If:function(a) {
  1 === this.$.Fa ? 0 === this.frame % 2 && (a.fillStyle = "rgba(255,255,255,0.8)", a.fillRect(5, 628, 200, 9)) : (a.fillStyle = "rgba(255,255,0,0.3)", a.fillRect(5, 628, 200, 9), 0 < this.$.Fa && (a.fillStyle = "rgba(255,255,100,1.0)", a.fillRect(5, 628, 200 * this.$.Fa, 9)))
}});
z.hd = l;
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:p()});
var wa = tm.createClass({superClass:W, init:function() {
  this.superInit();
  var a = tm.app.Label("GAME OVER");
  a.fillStyle = "red";
  a.setPosition(240, 320).addChildTo(this);
  this.interactive = k;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(u())
    }.bind(this))
  })
}, update:function(a) {
  a.keyboard.getKeyDown("z") && a.replaceScene(u())
}, draw:function(a) {
  a.clearColor("black")
}});
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:p()});
(function() {
  H = tm.createClass({superClass:tm.app.CanvasElement, frame:0, direction:0, speed:0, ba:l, $:l, ad:l, da:l, ca:l, ua:0, score:0, $a:n, erase:n, star:1, eb:k, Za:n, bd:l, init:function(b, c, f, d) {
    this.superInit();
    this.addEventListener("completeattack", function() {
      this.sb()
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
    this.eb = k;
    this.Za = n;
    this.$ = b;
    this.ba = b.ba;
    this.ad = c;
    this.ca = f;
    this.da = d;
    this.score = 100;
    this.erase = n;
    this.ca.sa.apply(this);
    this.da.sa.apply(this);
    this.altitude = this.$a ? 1 : 10;
    this.bd = {x:0, y:0}
  }, Nb:function() {
    this.ca.Nb.apply(this);
    this.da.Nb.apply(this);
    return this
  }, sb:function() {
    this.ca.sb.apply(this);
    this.da.sb.apply(this)
  }, update:function() {
    this.Za === n && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Za = k, this.ca.Ob.apply(this), this.da.Ob.apply(this));
    var a = this.x, c = this.y;
    this.ca.update.apply(this);
    this.da.update.apply(this);
    this.$a && (this.x += this.$.ta.ma, this.y += this.$.ta.na);
    this.frame += 1;
    this.bd.x = this.x - a;
    this.bd.y = this.y - c
  }, Mb:function(a) {
    if(!this.Za) {
      return n
    }
    this.ua -= a;
    return 0 >= this.ua ? (a = S(0, 5), 2 > a ? this.$.Qa("enemy destroy.") : 4 > a ? this.$.Qa(this.name + " destroy.") : this.$.Qa("ETR reaction gone."), this.erase && v.erase(k), this.ca.Ta.apply(this), this.da.Ta.apply(this), k) : n
  }, draw:function(a) {
    this.da.draw.call(this, a)
  }, Bb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, jg:function() {
    return this.eb
  }});
  H.ic = function() {
    for(var b = [].concat(a), c = 0, f = b.length;c < f;c++) {
      b[c].remove()
    }
  };
  var a = H.Ia = []
})();
(function() {
  function a() {
    this.remove();
    this.$a = k;
    this.$.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && w.Mc(this.x + U(-100, 100), this.y + U(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:2, y:this.y + 200}, 2E3).call(function() {
      w.le(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }
  function b() {
    this.remove();
    this.$a = k;
    this.$.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && w.Mc(this.x + U(-100, 100), this.y + U(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:2, y:this.y + 200}, 2E3).call(function() {
      w.le(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }
  function c(a, b) {
    b.name = a;
    b.ua = f[a][0];
    b.score = f[a][1];
    b.$a = f[a][2];
    b.erase = f[a][3];
    b.star = f[a][4]
  }
  var f = {kujo:[2, 300, n, n, 1], kiryu:[3, 400, n, n, 1], natsuki:[5, 900, k, n, 1], kise:[70, 15E3, k, n, 1], kurokawa:[70, 5E3, n, n, 5], akimoto:[500, 3E5, n, k, 10], yukishiro:[1500, 8E5, n, k, 20]};
  K = tm.createClass({sa:function() {
    this.name = "abstract enemy";
    this.ua = 9999
  }, Nb:p(), sb:p(), update:p(), Ob:p(), draw:p(), Ta:function() {
    w.Mc(this.x, this.y, this.$, this.bd);
    this.remove()
  }});
  K.ya = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, sa:function() {
    c("kujo", this);
    this.ja = d("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.ba.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.ja.setFrameIndex(7) : this.ja.setFrameIndex(8);
    this.ja.draw(a)
  }});
  K.ya = K.ya();
  K.ia = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, sa:function() {
    c("kiryu", this);
    this.ja = d("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.ba.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.ja.setFrameIndex(9) : this.ja.setFrameIndex(10);
    this.ja.draw(a)
  }});
  K.ia = K.ia();
  K.Aa = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, sa:function() {
    c("natsuki", this);
    this.ja = d("tex1", 48, 48);
    this.boundingRadius = 24
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
  }, Ta:function() {
    w.Mf(this.x, this.y, this.$);
    this.remove()
  }});
  K.Aa = K.Aa();
  K.nb = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, sa:function() {
    c("kurokawa", this);
    this.ja = d("tex1", 128, 128);
    this.ja.srcRect.x = 320;
    this.ja.srcRect.y = 128;
    this.ja.srcRect.width = 128;
    this.ja.srcRect.height = 128;
    this.boundingWidth = 100;
    this.boundingHeight = 20
  }, update:p(), draw:function(a) {
    this.ja.draw(a)
  }, Ta:function() {
    w.me(this.x, this.y, this.$);
    this.remove()
  }});
  K.nb = K.nb();
  K.yc = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, sa:function() {
    c("akimoto", this);
    this.ja = d("tex1", 256, 128);
    this.ja.srcRect.x = 64;
    this.ja.srcRect.y = 128;
    this.ja.srcRect.width = 256;
    this.ja.srcRect.height = 128;
    this.boundingWidth = 200;
    this.boundingHeightBottom = 10;
    this.boundingHeightTop = 60
  }, update:p(), draw:function(a) {
    this.ja.draw(a)
  }, Ta:function() {
    b.call(this)
  }});
  K.yc = K.yc();
  K.qa = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, sa:function() {
    c("kise", this);
    this.ja = d("tex1", 128, 128);
    this.ja.srcRect.x = 128;
    this.ja.srcRect.y = 256;
    this.ja.srcRect.width = 128;
    this.ja.srcRect.height = 128;
    this.boundingHeight = this.boundingWidth = 20
  }, draw:function(a) {
    this.ja.draw(a)
  }, Ta:function() {
    w.me(this.x, this.y, this.$);
    this.remove()
  }});
  K.qa = K.qa();
  K.ec = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, sa:function() {
    c("yukishiro", this);
    this.boundingWidth = 200;
    this.boundingHeight = 80
  }, Ta:function() {
    b.call(this)
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-100, -40, 200, 80)
  }});
  K.ec = K.ec();
  K.Ud = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, Ta:function() {
    a.call(this)
  }});
  K.Ud = K.Ud();
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
        b[d] && b[d].zd && a.removeEventListener("enterframe", b[d])
      }
    }
  }
  function b(a, b) {
    var d = v[b].Lc();
    a.addEventListener("enterframe", d);
    a.addEventListener("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  }
  L = tm.createClass({sa:p(), Nb:p(), sb:p(), update:p(), Ob:p(), Ta:function() {
    a(this)
  }});
  L.Va = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, Nb:function() {
    var a = S(64, 192);
    this.tweener.clear().wait(U(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, sb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  L.Va = L.Va();
  L.tb = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, Nb:function() {
    var a = S(192, 320);
    this.tweener.clear().wait(U(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, sb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  L.tb = L.tb();
  L.ia = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, sa:function() {
    this.angle = 0.5 * Math.PI;
    this.Od = U(0, 60);
    this.speed = 0
  }, update:function() {
    this.frame === this.Od ? this.speed = 8 : this.frame === this.Od + 10 ? b(this, "basic1-0") : this.Od < this.frame && this.y < this.ba.y && (this.angle += Math.atan2(this.ba.y - this.y, this.ba.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = R(this.angle, 0.5, Math.PI - 0.5));
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    !this.Bb() && this.Za && this.remove();
    if(9E4 > Q(this, this.ba) || this.y > this.ba.y) {
      this.eb = n
    }
  }});
  L.ia = L.ia();
  L.ug = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, sa:function() {
    this.speed = 0.8;
    this.dir = 0
  }, Ob:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.Za && !this.Bb() && this.remove();
    this.eb = this.y < this.ba.y
  }});
  L.Sa = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, sa:function() {
    this.speed = 0.7;
    this.dir = 0.25 * Math.PI
  }, Ob:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.Za && !this.Bb() && this.remove();
    this.eb = this.y < this.ba.y
  }});
  L.Sa = L.Sa();
  L.Jb = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, sa:function() {
    this.speed = 1;
    this.dir = Math.PI
  }, Ob:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.Za && !this.Bb() && this.remove();
    this.eb = this.y < this.ba.y
  }});
  L.Jb = L.Jb();
  L.qa = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, sa:function() {
    this.speed = 1;
    this.dir = Math.PI
  }, Ob:function() {
    b(this, "basic3-0")
  }, update:function() {
    this.Za && !this.Bb() && this.remove();
    this.eb = this.y < this.ba.y
  }});
  L.qa = L.qa();
  L.ob = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, sa:function() {
    this.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      b(this, "kurokawa-1")
    }.bind(this))
  }, update:function() {
    this.y += 0.5;
    this.Za && !this.Bb() && this.remove();
    this.eb = this.y < this.ba.y
  }});
  L.ob = L.ob();
  L.zc = tm.createClass({superClass:L, init:function() {
    this.superInit()
  }, sa:function() {
    this.tweener.clear().moveBy(0, 320, 1800, "easeOutQuad").call(function() {
      b(this, "komachi-1")
    }.bind(this))
  }, update:function() {
    this.y += 0.3;
    this.Za && !this.Bb() && this.remove();
    this.eb = this.y < this.ba.y
  }});
  L.zc = L.zc();
  L.jf = tm.createClass({superClass:L, Jd:l, init:function(a) {
    this.superInit();
    this.Jd = a
  }, sa:function() {
    this.ud = this.De = n;
    this.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.De = k;
      this.sb();
      var a = function() {
        var b = 2 * Math.random() * Math.PI, d = S(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(this))
  }, update:function() {
    if(!(this.De === n || 0 >= this.ua) && 1500 < this.frame && this.ud === n) {
      console.log("end"), this.ud = k, a(this), this.tweener.clear().move(this.x, -100, 1200, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    }
  }, sb:function() {
    if(!this.ud) {
      var a = this.ca.Jd.shift();
      b(this, a);
      this.ca.Jd.push(a)
    }
  }});
  L.ec = L.jf(["honoka-1"])
})();
var Z = L, $ = K;
ia = {"heri1-left":[{ca:Z.Va, da:$.ia, x:48, y:-100}, {ca:Z.tb, da:$.ia, x:96, y:-100}, {ca:Z.Va, da:$.ia, x:144, y:-100}, {ca:Z.tb, da:$.ia, x:192, y:-100}, {ca:Z.Va, da:$.ia, x:240, y:-100}], "heri1-center":[{ca:Z.Va, da:$.ia, x:144, y:-100}, {ca:Z.tb, da:$.ia, x:192, y:-100}, {ca:Z.Va, da:$.ia, x:240, y:-100}, {ca:Z.tb, da:$.ia, x:288, y:-100}, {ca:Z.Va, da:$.ia, x:336, y:-100}], "heri1-right":[{ca:Z.Va, da:$.ia, x:240, y:-100}, {ca:Z.tb, da:$.ia, x:288, y:-100}, {ca:Z.Va, da:$.ia, x:336, y:-100}, 
{ca:Z.tb, da:$.ia, x:384, y:-100}, {ca:Z.Va, da:$.ia, x:432, y:-100}], "heri2-left":[{ca:Z.ia, da:$.ya, x:48, y:-100}, {ca:Z.ia, da:$.ya, x:96, y:-100}, {ca:Z.ia, da:$.ya, x:144, y:-100}, {ca:Z.ia, da:$.ya, x:192, y:-100}, {ca:Z.ia, da:$.ya, x:240, y:-100}], "heri2-center":[{ca:Z.ia, da:$.ya, x:144, y:-100}, {ca:Z.ia, da:$.ya, x:192, y:-100}, {ca:Z.ia, da:$.ya, x:240, y:-100}, {ca:Z.ia, da:$.ya, x:288, y:-100}, {ca:Z.ia, da:$.ya, x:336, y:-100}], "heri2-right":[{ca:Z.ia, da:$.ya, x:240, y:-100}, 
{ca:Z.ia, da:$.ya, x:288, y:-100}, {ca:Z.ia, da:$.ya, x:336, y:-100}, {ca:Z.ia, da:$.ya, x:384, y:-100}, {ca:Z.ia, da:$.ya, x:432, y:-100}], "tankRD-left":[{ca:Z.Sa, da:$.Aa, x:78, y:-50}, {ca:Z.Sa, da:$.Aa, x:28, y:-100}, {ca:Z.Sa, da:$.Aa, x:-22, y:-150}, {ca:Z.Sa, da:$.Aa, x:-72, y:-200}, {ca:Z.Sa, da:$.Aa, x:-122, y:-250}], "tankRD-center":[{ca:Z.Sa, da:$.Aa, x:222, y:-50}, {ca:Z.Sa, da:$.Aa, x:172, y:-100}, {ca:Z.Sa, da:$.Aa, x:122, y:-150}, {ca:Z.Sa, da:$.Aa, x:72, y:-200}, {ca:Z.Sa, da:$.Aa, 
x:22, y:-250}], "tankL-top":[{ca:Z.Jb, da:$.Aa, x:550, y:-128}, {ca:Z.Jb, da:$.Aa, x:620, y:-128}, {ca:Z.Jb, da:$.Aa, x:690, y:-128}, {ca:Z.Jb, da:$.Aa, x:760, y:-128}, {ca:Z.Jb, da:$.Aa, x:830, y:-128}], "cannon-0":[{ca:Z.qa, da:$.qa, x:48, y:-100}], "cannon-1":[{ca:Z.qa, da:$.qa, x:96, y:-100}], "cannon-2":[{ca:Z.qa, da:$.qa, x:144, y:-100}], "cannon-3":[{ca:Z.qa, da:$.qa, x:192, y:-100}], "cannon-4":[{ca:Z.qa, da:$.qa, x:240, y:-100}], "cannon-5":[{ca:Z.qa, da:$.qa, x:288, y:-100}], "cannon-6":[{ca:Z.qa, 
da:$.qa, x:336, y:-100}], "cannon-7":[{ca:Z.qa, da:$.qa, x:384, y:-100}], "cannon-8":[{ca:Z.qa, da:$.qa, x:432, y:-100}], "fighter-m-0":[{ca:Z.ob, da:$.nb, x:96, y:-192}], "fighter-m-1":[{ca:Z.ob, da:$.nb, x:144, y:-192}], "fighter-m-2":[{ca:Z.ob, da:$.nb, x:192, y:-192}], "fighter-m-3":[{ca:Z.ob, da:$.nb, x:240, y:-192}], "fighter-m-4":[{ca:Z.ob, da:$.nb, x:288, y:-192}], "fighter-m-5":[{ca:Z.ob, da:$.nb, x:336, y:-192}], "fighter-m-6":[{ca:Z.ob, da:$.nb, x:384, y:-192}], "komachi-0":[{ca:Z.zc, 
da:$.yc, x:192, y:-192}], "komachi-1":[{ca:Z.zc, da:$.yc, x:288, y:-192}], yukishiro:[{ca:Z.ec, da:$.ec, x:240, y:-100}]};
(function() {
  function a(a, b, c, d, f) {
    return g.action([g.ha(g.direction(a, "absolute"), c, d, f, i, i), g.repeat(12, [g.ha(g.direction((b - a) / 12, "sequence"), c, d, f, i, i)])])
  }
  function b(a, b, c, d, f) {
    return g.action([g.ha(g.direction(b), d, f, i, i, i), g.repeat(a, [g.ha(g.direction((c - b) / a, "sequence"), d, f, i, i, i)])])
  }
  function c(a) {
    return g.ha(g.direction(0), a || j, g.ea({frame:0}))
  }
  function f(a) {
    return g.ha(g.direction(0), a || j, g.ea)
  }
  function d(a) {
    return g.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function j(a) {
    return g.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function m(a) {
    return g.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function q(a) {
    return g.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return g.wait(a + "*(1-$rank)*$hyperOff")
  }
  v = {};
  var g = r.oa;
  v["basic0-0"] = new r.za({top:g.action([f])});
  v["basic0-4"] = new r.za({top:g.action([g.repeat(3, [g.repeat(5, [g.ha(g.direction(-20), g.speed("$loop.count*0.06+0.75"), g.ea), g.ha(g.direction(0), g.speed("$loop.count*0.06+0.75"), g.ea), g.ha(g.direction(20), g.speed("$loop.count*0.06+0.75"), g.ea)]), s(40)])])});
  v["basic1-0"] = new r.za({top:g.action([g.repeat(999, [s(20), f(function(a) {
    return g.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  })])])});
  v["basic2-0"] = new r.za({top:g.action([g.wait("120"), g.repeat(999, [s(50), f(d)])])});
  v["basic3-0"] = new r.za({top:g.action([g.wait(20), g.repeat(999, [s(100), c(d(0)), c(d(1)), c(d(2))])])});
  v["kurokawa-1"] = new r.za({top0:g.action([g.repeat(3, [g.repeat(3, [g.repeat(3, [g.ha(g.direction(-45), d("$loop.count"), g.ea({frame:2}), g.offsetX(-45), g.va(k)), g.ha(g.direction(-15), d("$loop.count"), g.ea({frame:2}), g.offsetX(-45), g.va(k)), g.ha(g.direction(15), d("$loop.count"), g.ea({frame:2}), g.offsetX(-45), g.va(k)), g.ha(g.direction(45), d("$loop.count"), g.ea({frame:2}), g.offsetX(-45), g.va(k)), g.ha(g.direction(-45), d("$loop.count"), g.ea({frame:2}), g.offsetX(45), g.va(k)), 
  g.ha(g.direction(-15), d("$loop.count"), g.ea({frame:2}), g.offsetX(45), g.va(k)), g.ha(g.direction(15), d("$loop.count"), g.ea({frame:2}), g.offsetX(45), g.va(k)), g.ha(g.direction(45), d("$loop.count"), g.ea({frame:2}), g.offsetX(45), g.va(k))]), s(90)]), s(120)])]), top1:g.action([g.repeat(3, [g.ha(g.direction(0), d, g.ea({bb:k, frame:3}), g.offsetX(-45), g.va(k)), s(45), g.ha(g.direction(0), d, g.ea({bb:k, frame:3}), g.offsetX(45), g.va(k)), s(45)])])});
  v["komachi-1"] = new r.za({top0:g.action([g.repeat(20, [g.ha(g.direction(210, "absolute"), q(1), g.ea, g.offsetX(-40)), g.ha(g.direction(120, "sequence"), q(1), g.ea, g.offsetX(-40)), g.ha(g.direction(120, "sequence"), q(1), g.ea, g.offsetX(-40)), g.repeat(57, [s(8), g.ha(g.direction(-720 / 57, "sequence"), q(1), g.ea, g.offsetX(-40)), g.ha(g.direction(120, "sequence"), q(1), g.ea, g.offsetX(-40)), g.ha(g.direction(120, "sequence"), q(1), g.ea, g.offsetX(-40))])])]), top1:g.action([g.repeat(20, 
  [g.ha(g.direction(-210, "absolute"), q(1), g.ea, g.offsetX(40)), g.ha(g.direction(120, "sequence"), q(1), g.ea, g.offsetX(40)), g.ha(g.direction(120, "sequence"), q(1), g.ea, g.offsetX(40)), g.repeat(57, [s(8), g.ha(g.direction(720 / 57, "sequence"), q(1), g.ea, g.offsetX(40)), g.ha(g.direction(120, "sequence"), q(1), g.ea, g.offsetX(40)), g.ha(g.direction(120, "sequence"), q(1), g.ea, g.offsetX(40))])])]), top2:g.action([g.repeat(70, [g.ha(g.direction(0), j(0), g.ea({bb:k, frame:0}), g.offsetX(-110), 
  g.va(k)), g.repeat(3, [g.wait(3), g.ha(g.direction(0, "sequence"), j(0), g.ea({bb:k, frame:0}), g.offsetX(-110), g.va(k))]), s(10), g.ha(g.direction(0), j(0), g.ea({bb:k, frame:0}), g.offsetX(110), g.va(k)), g.repeat(3, [g.wait(3), g.ha(g.direction(0, "sequence"), j(0), g.ea({bb:k, frame:0}), g.offsetX(110), g.va(k))]), s(10)])])});
  v["honoka-1"] = new r.za({top0:g.action([g.wait(60), g.repeat(10, [b(6, -40, 40, j, g.ea({bb:k, frame:4})), s(30), b(7, -40, 40, m, g.ea({bb:k, frame:4})), s(30)])]), top1:g.action([g.wait(60), g.repeat(5, [b(2, -2, 2, m(2), g.ea({frame:1})), b(3, -3, 3, m(3), g.ea({frame:1})), b(4, -4, 4, m(4), g.ea({frame:1})), b(5, -5, 5, m(5), g.ea({frame:1})), s(110)])]), top2:g.action([g.repeat(20, [a(-10, -170, q, g.ea({bb:k, frame:0}), g.offsetX(-80)), s(30)])]), top3:g.action([g.repeat(20, [a(10, 170, 
  q, g.ea({bb:k, frame:0}), g.offsetX(80)), s(30)])])});
  v.sa = function() {
    for(var a = 0;800 > a;a++) {
      A.push(J())
    }
    a = v.Kc = tm.Ma.Hb.lc;
    a.Ad = function(a) {
      return!(a instanceof J) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.de = function(a) {
      var b = A.shift(0);
      if(b) {
        return O.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.bb ? (b.scaleX = 1, b.scaleY = 1, b.Fb = n, b.update = function() {
          this.rotation += 15
        }) : (b.scaleX = 0.8, b.scaleY = 1.5, b.Fb = k), b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.fe = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.Sb = 4;
    r.la.ra.$rank = 0;
    r.la.ra.$hyperOff = 1
  };
  v.erase = function(a) {
    for(var b = [].concat(O), c = 0, d = b.length;c < d;c++) {
      a && pa(n).setPosition(b[c].x, b[c].y), b[c].Ta()
    }
  };
  v.ic = function() {
    for(var a = [].concat(O), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  J = tm.createClass({superClass:tm.app.Sprite, ua:0, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("added", function() {
      this.ua = B.Le
    });
    this.addEventListener("removed", function() {
      A.push(this);
      var a = O.indexOf(this);
      -1 !== a && O.splice(a, 1);
      this.clearEventListener("enterframe")
    })
  }, Ta:function() {
    var a = F(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var A = [], O = J.Ia = []
})();
var R, S, sa, U, xa;
R = function(a, b, c) {
  return a < b ? b : a > c ? c : a
};
xa = Math.PI / 180;
sa = function(a) {
  return a * xa
};
U = function(a, b) {
  return window.Math.floor(Math.random() * (b - a + 1)) + a
};
S = function(a, b) {
  return window.Math.random() * (b - a) + a
};

