/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(b) {
  throw b;
}
var i = void 0, j = !0, l = null, r = !1;
function A() {
  return function() {
  }
}
var H = {Zi:this};
(function() {
  function b(a, b) {
    for(var f = 0, g = a.length;f < g;f++) {
      if(a[f].label == b) {
        return a[f]
      }
    }
  }
  H.ka = function(a) {
    this.type = "none";
    this.root = this;
    this.hb = [];
    this.Pe = [];
    this.Xe = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof H.Ob ? this.hb.push(a[b]) : a[b] instanceof H.Pa ? this.Pe.push(a[b]) : a[b] instanceof H.vd && this.Xe.push(a[b]))
      }
      a = 0;
      for(b = this.hb.length;a < b;a++) {
        this.hb[a].Zb(this)
      }
      a = 0;
      for(b = this.Pe.length;a < b;a++) {
        this.Pe[a].Zb(this)
      }
      a = 0;
      for(b = this.Xe.length;a < b;a++) {
        this.Xe[a].Zb(this)
      }
    }
  };
  H.ka.prototype.Th = function(a) {
    return b(this.hb, a)
  };
  H.ka.prototype.Pk = function() {
    for(var a = [], b = 0, f = this.hb.length;b < f;b++) {
      var g = this.hb[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  H.ka.prototype.Ek = function(a) {
    var b;
    if(b = this.Th(a)) {
      return b
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  H.ka.prototype.Fk = function(a) {
    return b(this.Pe, a)
  };
  H.ka.prototype.Gk = function(a) {
    var b;
    if(b = this.Fk(a)) {
      return b
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  H.ka.prototype.Hk = function(a) {
    return b(this.Xe, a)
  };
  H.ka.prototype.Ik = function(a) {
    var b;
    if(b = this.Hk(a)) {
      return b
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  H.Pa = function() {
    this.root = this.label = l;
    this.direction = new H.Bc(0);
    this.speed = new H.Fc(1);
    this.hb = [];
    this.Wa = {};
    this.Ba = {}
  };
  H.Pa.prototype.clone = function(a) {
    var b = new H.Pa;
    b.label = this.label;
    b.root = this.root;
    b.hb = this.hb;
    b.direction = new H.Bc(a.$a(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new H.Fc(a.$a(this.speed.value));
    b.speed.type = this.speed.type;
    b.Wa = this.Wa;
    b.Ba = a.Ba;
    return b
  };
  H.Pa.prototype.Zb = function(a) {
    this.root = a;
    for(var b = 0, f = this.hb.length;b < f;b++) {
      this.hb[b].Zb(a)
    }
  };
  H.xe = function(a) {
    this.root = l;
    this.label = a;
    this.cb = []
  };
  H.xe.prototype.clone = function(a) {
    var b = a.Ba;
    a.Ba = a.$f(this.cb);
    var f = this.root.Gk(this.label).clone(a);
    a.Ba = b;
    return f
  };
  H.xe.prototype.Zb = function(a) {
    this.root = a
  };
  H.gb = function() {
    this.Bb = ""
  };
  H.gb.prototype.Zb = function(a) {
    this.root = a
  };
  H.Ob = function() {
    this.Bb = "action";
    this.root = this.label = l;
    this.fc = [];
    this.cb = []
  };
  H.Ob.prototype = new H.gb;
  H.Ob.prototype.Zb = function(a) {
    this.root = a;
    for(var b = 0, f = this.fc.length;b < f;b++) {
      this.fc[b].Zb(a)
    }
  };
  H.Ob.prototype.clone = function() {
    var a = new H.Ob;
    a.label = this.label;
    a.root = this.root;
    a.fc = this.fc;
    return a
  };
  H.td = function(a) {
    this.Bb = "actionRef";
    this.label = a;
    this.root = l;
    this.cb = []
  };
  H.td.prototype = new H.gb;
  H.td.prototype.clone = function() {
    var a = new H.Ob;
    a.root = this.root;
    a.fc.push(this);
    return a
  };
  H.vd = function() {
    this.Bb = "fire";
    this.Ia = this.speed = this.direction = this.root = this.label = l;
    this.Wa = new H.Be
  };
  H.vd.prototype = new H.gb;
  H.vd.prototype.Zb = function(a) {
    this.root = a;
    this.Ia && this.Ia.Zb(a)
  };
  H.xf = function(a) {
    this.Bb = "fireRef";
    this.label = a;
    this.cb = []
  };
  H.xf.prototype = new H.gb;
  H.ze = function() {
    this.Bb = "changeDirection";
    this.direction = new H.Bc;
    this.xb = 0
  };
  H.ze.prototype = new H.gb;
  H.Ae = function() {
    this.Bb = "changeSpeed";
    this.speed = new H.Fc;
    this.xb = 0
  };
  H.Ae.prototype = new H.gb;
  H.we = function() {
    this.Bb = "accel";
    this.xc = new H.Bf;
    this.Ac = new H.Yf;
    this.xb = 0
  };
  H.we.prototype = new H.gb;
  H.He = function(a) {
    this.Bb = "wait";
    this.value = a || 0
  };
  H.He.prototype = new H.gb;
  H.Xf = function() {
    this.Bb = "vanish"
  };
  H.Xf.prototype = new H.gb;
  H.Fe = function() {
    this.Bb = "repeat";
    this.zi = 0;
    this.action = l;
    this.cb = []
  };
  H.Fe.prototype = new H.gb;
  H.Fe.prototype.Zb = function(a) {
    this.root = a;
    this.action && this.action.Zb(a)
  };
  H.sf = function(a, b) {
    this.Bb = "bind";
    this.Gl = a;
    this.Dk = b
  };
  H.sf.prototype = new H.gb;
  H.Of = function(a, b) {
    this.Bb = "notify";
    this.Ak = a;
    this.cb = b || l
  };
  H.Of.prototype = new H.gb;
  H.Ui = new H.gb;
  H.Bc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  H.Fc = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  H.Bf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  H.Yf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  H.Be = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.wa = j;
    a.wa !== i && (this.wa = !!a.wa)
  };
  H.qh = function(a) {
    this.value = a || 0
  };
  H.rh = function(a) {
    this.value = a || 0
  };
  H.Yg = function(a) {
    this.value = !!a
  }
})();
H.Sa = function(b) {
  this.Bh = b;
  this.Ie = [];
  this.Oc = -1;
  this.pb = l;
  this.Ba = {}
};
H.Sa.prototype.next = function() {
  this.Oc += 1;
  if(this.pb !== l) {
    var b = this.pb.fc[this.Oc];
    if(b !== i) {
      if(b instanceof H.Ob) {
        return this.Wd(), this.pb = b, this.Ba = this.Zf(), this.next()
      }
      if(b instanceof H.td) {
        return this.Wd(), this.pb = this.Bh.Ek(b.label), this.Ba = this.$f(b.cb), this.next()
      }
      if(b instanceof H.Fe) {
        return this.Ba.Id = 0, this.Ba.ii = this.$a(b.zi) | 0, this.Wd(), this.pb = b.action.clone(), this.Ba = this.Zf(), this.next()
      }
      if(b instanceof H.vd) {
        var a = new H.vd;
        a.Ia = b.Ia.clone(this);
        b.direction !== l && (a.direction = new H.Bc(this.$a(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new H.Fc(this.$a(b.speed.value)), a.speed.type = b.speed.type);
        a.Wa = new H.Be;
        a.Wa.offsetX = this.$a(b.Wa.offsetX);
        a.Wa.offsetY = this.$a(b.Wa.offsetY);
        a.Wa.wa = b.Wa.wa;
        return a
      }
      return b instanceof H.xf ? (this.Wd(), this.pb = new H.Ob, this.pb.fc = [this.Bh.Ik(b.label)], this.Ba = this.$f(b.cb), this.next()) : b instanceof H.ze ? (a = new H.ze, a.direction.type = b.direction.type, a.direction.value = this.$a(b.direction.value), a.xb = this.$a(b.xb), a) : b instanceof H.Ae ? (a = new H.Ae, a.speed.type = b.speed.type, a.speed.value = this.$a(b.speed.value), a.xb = this.$a(b.xb), a) : b instanceof H.we ? (a = new H.we, a.xc.type = b.xc.type, a.xc.value = this.$a(b.xc.value), 
      a.Ac.type = b.Ac.type, a.Ac.value = this.$a(b.Ac.value), a.xb = this.$a(b.xb), a) : b instanceof H.He ? new H.He(this.$a(b.value)) : b instanceof H.Xf ? b : b instanceof H.sf ? (this.Ba["$" + b.Gl] = this.$a(b.Dk), H.Ui) : b instanceof H.Of ? b : l
    }
    this.mk();
    if(this.pb === l) {
      return l
    }
    if((b = this.pb.fc[this.Oc]) && "repeat" == b.Bb) {
      this.Ba.Id++, this.Ba.Id < this.Ba.ii && (this.Wd(), this.pb = b.action.clone(), this.Ba = this.Zf())
    }
    return this.next()
  }
  return l
};
H.Sa.prototype.Wd = function() {
  this.Ie.push({action:this.pb, cursor:this.Oc, scope:this.Ba});
  this.Oc = -1
};
H.Sa.prototype.mk = function() {
  var b = this.Ie.pop();
  b ? (this.Oc = b.cursor, this.pb = b.action, this.Ba = b.scope) : (this.Oc = -1, this.pb = l, this.Ba = {})
};
H.Sa.prototype.$a = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Ba[b]) || (a = H.Sa.Ub[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in H.Sa.Ub) {
    H.Sa.Ub.hasOwnProperty(d) && (a[d] = H.Sa.Ub[d])
  }
  for(d in this.Ba) {
    this.Ba.hasOwnProperty(d) && (a[d] = this.Ba[d])
  }
  a.$rand = Math.random();
  (d = this.Ie[this.Ie.length - 1]) && (a.$loop = {index:d.scope.Id, count:d.scope.Id + 1, first:0 === d.scope.Id, last:d.scope.Id + 1 >= d.scope.ii});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
H.Sa.prototype.$f = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.$a(b[d])
    }
  }else {
    for(d in this.Ba) {
      this.Ba.hasOwnProperty(d) && (a[d] = this.Ba[d])
    }
  }
  return a
};
H.Sa.prototype.Zf = function() {
  var b = {}, a;
  for(a in this.Ba) {
    this.Ba.hasOwnProperty(a) && (b[a] = this.Ba[a])
  }
  return b
};
H.ka.prototype.qg = function(b) {
  var a = new H.Sa(this);
  if(b = this.Th(b)) {
    a.pb = b
  }
  return a
};
H.Pa.prototype.qg = function() {
  var b = new H.Sa(this.root), a = new H.Ob;
  a.root = this.root;
  a.fc = this.hb;
  b.pb = a;
  b.Ba = this.Ba;
  return b
};
H.Sa.Ub = {};
H.Ja = function(b) {
  b = b || "";
  for(var a in H.Ja) {
    H.Ja.hasOwnProperty(a) && (H.Zi[b + a] = H.Ja[a])
  }
};
H.Ja.action = function(b) {
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
  var f = new H.Ob;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof H.gb)
    }) && h(Error("argument type error.")), f.fc = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof H.gb ? f.fc[a] = arguments[a] : h(Error("argument type error."))
    }
  }
  return f
};
H.Ja.va = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new H.td(b);
  if(a instanceof Array) {
    f.cb = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.cb.push(arguments[d])
    }
  }
  return f
};
H.Ja.Ia = function(b, a, d, f) {
  for(var g = 0, m = arguments.length;g < m;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  m = new H.Pa;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof H.Bc ? m.direction = arguments[g] : arguments[g] instanceof H.Fc ? m.speed = arguments[g] : arguments[g] instanceof H.Ob ? m.hb.push(arguments[g]) : arguments[g] instanceof H.td ? m.hb.push(arguments[g]) : arguments[g] instanceof Array ? m.hb.push(H.Ja.action(arguments[g])) : arguments[g] instanceof Object ? m.Wa = arguments[g] : "string" === typeof arguments[g] && (m.label = arguments[g])
  }
  return m
};
H.Ja.Ll = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new H.xe(b);
  if(a instanceof Array) {
    f.cb = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.cb.push(arguments[d])
    }
  }
  return f
};
H.Ja.fire = function(b, a, d, f) {
  for(var g = 0, m = arguments.length;g < m;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  m = new H.vd;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof H.Bc ? m.direction = arguments[g] : arguments[g] instanceof H.Fc ? m.speed = arguments[g] : arguments[g] instanceof H.Pa ? m.Ia = arguments[g] : arguments[g] instanceof H.xe ? m.Ia = arguments[g] : arguments[g] instanceof H.Be ? m.Wa = arguments[g] : arguments[g] instanceof H.qh ? m.Wa.offsetX = arguments[g].value : arguments[g] instanceof H.rh ? m.Wa.offsetY = arguments[g].value : arguments[g] instanceof H.Yg && (m.Wa.wa = arguments[g].value)
  }
  m.Ia === i && h(Error("bullet (or bulletRef) is required."));
  return m
};
H.Ja.Ql = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new H.xf(b);
  if(a instanceof Array) {
    f.cb = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.cb.push(arguments[d])
    }
  }
  return f
};
H.Ja.Ml = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("direction is required."));
  a === i && h(Error("term is required."));
  d = new H.ze;
  d.direction = b instanceof H.Bc ? b : new H.Bc(b);
  d.xb = a;
  return d
};
H.Ja.Qe = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("speed is required."));
  a === i && h(Error("term is required."));
  d = new H.Ae;
  d.speed = b instanceof H.Fc ? b : new H.Fc(b);
  d.xb = a;
  return d
};
H.Ja.Kl = function(b, a, d) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new H.we;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof H.Bf ? g.xc = b : arguments[f] instanceof H.Yf ? g.Ac = a : g.xb = arguments[f]
  }
  g.xc === i && g.Ac === i && h(Error("horizontal or vertical is required."));
  g.xb === i && h(Error("term is required."));
  return g
};
H.Ja.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && h(Error("value is required."));
  return new H.He(b)
};
H.Ja.Xa = function() {
  return new H.Xf
};
H.Ja.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("times is required."));
  a === i && h(Error("action is required."));
  f = new H.Fe;
  f.zi = b;
  if(a instanceof H.Ob || a instanceof H.td) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = H.Ja.action(a)
    }else {
      for(var g = [], d = 1;d < arguments.length;d++) {
        g.push(arguments[d])
      }
      f.action = H.Ja.action(g)
    }
  }
  return f
};
H.Ja.Ea = function(b, a) {
  return new H.sf(b, a)
};
H.Ja.Xl = function(b, a) {
  return new H.Of(b, a)
};
H.Ja.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new H.Bc(b);
  a !== i && (d.type = a);
  return d
};
H.Ja.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new H.Fc(b);
  a && (d.type = a);
  return d
};
H.Ja.xc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new H.Bf(b);
  a && (d.type = a);
  return d
};
H.Ja.Ac = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new H.Yf(b);
  a && (d.type = a);
  return d
};
H.Ja.Pl = function(b) {
  return new H.Be(b)
};
H.Ja.offsetX = function(b) {
  return new H.qh(b)
};
H.Ja.offsetY = function(b) {
  return new H.rh(b)
};
H.Ja.wa = function(b) {
  return new H.Yg(b)
};
tm.Ab = tm.Ab || {};
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
  tm.Ab.Zc = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.yh = a
  }, Se:function(a, b) {
    var d = this.yh.Pk();
    if(b === i && 0 < d.length) {
      for(var f = [], w = 0, n = d.length;w < n;w++) {
        f[f.length] = this.zh(a, d[w])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          p.lg == f.length && (p.ae = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, w = f.length;w--;) {
        f[w].jf = p
      }
      p.lg = 0;
      p.Ih = function() {
        this.lg++
      };
      p.lg = 0;
      p.ae = r;
      p.ug = j;
      p.stop = r;
      return p
    }
    return this.zh(a, b)
  }, zh:function(a, b) {
    function d() {
      if(!d.stop) {
        d.oa += 1;
        this.oa = d.oa;
        var a = d.Re, b = d.lk;
        if(b) {
          if(d.oa < d.jg ? d.direction += d.Ed : d.oa === d.jg && (d.direction = d.Rc), d.oa < d.kg ? d.speed += d.te : d.oa === d.kg && (d.speed = d.Qd), d.oa < d.dg ? (d.qd += d.Le, d.sd += d.Me) : d.oa === d.dg && (d.qd = d.Je, d.sd = d.Ke), this.x += Math.cos(d.direction) * d.speed * a.rd, this.y += Math.sin(d.direction) * d.speed * a.rd, this.x += d.qd * a.rd, this.y += d.sd * a.rd, a.vg(this)) {
            if(a.Xc || this.Xc) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.oa < d.Ai || d.ae)) {
              for(var f;f = d.Bi.next();) {
                switch(f.Bb) {
                  case "fire":
                    b.ik.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Ai = "number" === typeof f.value ? d.oa + f.value : 0 !== (a = ~~f.value) ? d.oa + a : d.oa + eval(f.value);
                    return;
                  case "changeDirection":
                    b.dk.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.ek.call(this, f, d);
                    break;
                  case "accel":
                    b.bk.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.jk.call(this, f)
                }
              }
              d.ae = j;
              d.jf ? d.jf.Ih() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.ae = j, d.jf ? d.jf.Ih() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Ab.Zc.be, f;
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
    "string" === typeof b ? d.Bi = this.yh.qg(b) : b instanceof H.Pa ? d.Bi = b.qg() : (window.console.error(a, b), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.lk = this;
    d.Re = a;
    d.Ai = -1;
    d.ae = r;
    d.direction = 0;
    d.di = 0;
    d.speed = 0;
    d.fi = 0;
    d.qd = 0;
    d.sd = 0;
    d.Ed = 0;
    d.Rc = 0;
    d.jg = -1;
    d.te = 0;
    d.Qd = 0;
    d.kg = -1;
    d.Le = 0;
    d.Je = 0;
    d.Me = 0;
    d.Ke = 0;
    d.dg = -1;
    d.oa = -1;
    d.stop = r;
    d.ug = j;
    return d
  }, hk:function(a) {
    function b() {
      b.stop || (this.x += b.Mh, this.y += b.Nh, b.Re.vg(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Ab.Zc.be, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b.Re = a;
    b.direction = 0;
    b.speed = 0;
    b.Mh = 0;
    b.Nh = 0;
    b.stop = r;
    b.ug = j;
    return b
  }, ik:function(b, d, f, v) {
    if(this.ml === i || this.Jb) {
      var w = {label:b.Ia.label}, n;
      for(n in b.Ia.Wa) {
        w[n] = b.Ia.Wa[n]
      }
      if(w = d.Gh(w)) {
        v = (n = 0 === b.Ia.hb.length) ? v.hk(d) : v.Se(d, b.Ia);
        var p = this, s = {x:this.x + b.Wa.offsetX, y:this.y + b.Wa.offsetY};
        f.di = v.direction = function(n) {
          var k = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? b.Wa.wa ? a(s, d.target) + k : a(p, d.target) + k : k - Math.PI / 2;
            case "absolute":
              return k - Math.PI / 2;
            case "relative":
              return f.direction + k;
            default:
              return f.di + k
          }
        }(b.direction || b.Ia.direction);
        f.fi = v.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.fi + b;
            default:
              return b
          }
        }(b.speed || b.Ia.speed);
        w.x = s.x;
        w.y = s.y;
        n && (v.Mh = Math.cos(v.direction) * v.speed * d.rd, v.Nh = Math.sin(v.direction) * v.speed * d.rd);
        w.Xc = !!w.Xc;
        if(d.Xc || w.Xc) {
          w.rotation = (v.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, w.speed = v.speed
        }
        w.addEventListener("enterframe", v);
        d.Dh ? d.Dh.addChild(w) : this.parent && this.parent.addChild(w)
      }
    }
  }, dk:function(d, f, q) {
    var v = eval(d.direction.value) * Math.DEG_TO_RAD, w = eval(d.xb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        q.Rc = a(this, d) + v;
        q.Ed = b(q.Rc - q.direction) / w;
        break;
      case "absolute":
        q.Rc = v - Math.PI / 2;
        q.Ed = b(q.Rc - q.direction) / w;
        break;
      case "relative":
        q.Rc = q.direction + v;
        q.Ed = b(q.Rc - q.direction) / w;
        break;
      case "sequence":
        q.Ed = v, q.Rc = q.direction + q.Ed * (w - 1)
    }
    q.jg = q.oa + w
  }, ek:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.xb);
    switch(a.speed.type) {
      case "absolute":
        b.Qd = d;
        b.te = (b.Qd - b.speed) / f;
        break;
      case "relative":
        b.Qd = d + b.speed;
        b.te = (b.Qd - b.speed) / f;
        break;
      case "sequence":
        b.te = d, b.Qd = b.speed + b.te * f
    }
    b.kg = b.oa + f
  }, bk:function(a, b) {
    var d = eval(a.xb);
    b.dg = b.oa + d;
    if(a.xc) {
      var f = eval(a.xc.value);
      switch(a.xc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Le = (f - b.qd) / d;
          b.Je = f;
          break;
        case "relative":
          b.Le = f, b.Je = (f - b.qd) * d
      }
    }else {
      b.Le = 0, b.Je = b.qd
    }
    if(a.Ac) {
      switch(f = eval(a.Ac.value), a.Ac.type) {
        case "absolute":
        ;
        case "sequence":
          b.Me = (f - b.sd) / d;
          b.Ke = f;
          break;
        case "relative":
          b.Me = f, b.Ke = (f - b.sd) * d
      }
    }else {
      b.Me = 0, b.Ke = b.sd
    }
  }, jk:function(a) {
    var b = tm.event.Event(a.Ak);
    if(a.cb) {
      for(var d in a.cb) {
        b[d] = a.cb[d]
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
  tm.Ab.wk = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.Ab.Lh = function(a) {
    if(f === l) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.Ab.Nl = function() {
    return j
  };
  tm.Ab.Zc.be = {Gh:tm.Ab.wk, vg:tm.Ab.Lh, dm:0, Xc:r, rd:2, target:l};
  H.ka.prototype.Se = function(a) {
    return tm.Ab.Zc(this).Se(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(A());
tm.main(function() {
  gls2.$i("#canvas2d");
  gls2.core.run()
});
gls2.$i = tm.createClass({superClass:tm.display.CanvasApp, fe:0, Tk:0, Vk:0, Uk:0, Rk:0, Sk:l, Zd:3, pd:3, Oh:1, ca:l, init:function(b) {
  gls2.core !== l && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = gls2.ja.Yi;
  this.background = "rgba(0,0,0,0)";
  this.Vg = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.ui.LoadingScene({assets:{achevements:"assets/achevements.json", tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", 
  explode1:"assets/explode1.png", explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", tex_stage3:"assets/tex_stage3.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", 
  bgmEnding:"assets2/Blue_Moon_MIKU_Append.mp3", bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/achevement":"assets2/se_maoudamashii_system46.mp3", 
  "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, 
  nextScene:function() {
    this.kk();
    return gls2.TitleScene()
  }.bind(this)}))
}, Hh:function() {
  var b = window.achevements, a = tm.asset.AssetManager.get("achevements").data;
  return!b ? gls2.ja.jh : b.reduce(function(b, f) {
    return a[f] ? b + gls2.ja.Pi[a[f].Tl] : b
  }, gls2.ja.jh)
}, update:function() {
  for(var b = [].concat(this.Vg), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.Vg.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, kk:function() {
  gls2.za.setup(12345);
  ["tex1", "tex2", "tex3", "tex_tank1"].forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawTexture(a, 0, 0);
    d = d.getBitmap();
    d.filter({calc:function(a, b, d, f, w) {
      w.setPixelIndex(b, a[0], 0, 0)
    }});
    var f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(b + "Red", f)
  });
  gls2.ia.setup();
  gls2.ra.setup();
  this.ca = gls2.Ya()
}, Ol:function() {
  this.stop()
}, hi:r, Mg:function(b, a) {
  var d = {score:Math.floor(this.ca.score), stage:this.ca.Eb + 1, continueCount:this.ca.Gc, shipType:this.ca.ea.type, shipStyle:this.ca.ea.style, fps:0, screenShot:this.ca.Nd};
  b ? (d.userName = b, this.hi = r) : this.hi = j;
  tm.util.Ajax.load({url:"/api/ranking/post", data:d, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        a(l, j, b.scoreId)
      }else {
        if(b.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.Mg(l, a);
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(b = "";"" === b;) {
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.Ok())
              }
              b !== l && (b = b.substring(0, 10), this.Mg(b + " (\u533f\u540d)", a))
            }else {
              a(l, r)
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
}, Ok:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc(30) \u76f8\u7530\u7dcf\u7406".split(" ").pickup()
}, Vg:l, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}, xa:function(b) {
  if(window.achevements) {
    var a = tm.asset.AssetManager.get("achevements").data;
    if(a[b]) {
      var d = window.achevements;
      -1 == d.indexOf(b) && (d.push(b), tm.util.Ajax.load({url:"/api/achevement/" + b, type:"POST", dataType:"json", success:function(d) {
        console.dir(d);
        a[b] && (gls2.ta("achevement"), this.ca.ai.addChild(gls2.hh(a[b].title)))
      }.bind(this), error:function() {
        console.warn("error!")
      }}))
    }
  }
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Ic = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.Ya.Td && gls2.Ya.Td.me(0)
};
gls2.ja = {Bj:r, Yi:60, vj:0, eh:[1E9, 1E10], yj:3E3, kh:3, ih:[3, 2, 1], Ei:[6, 4, 2], th:1, uj:0.1, lh:1, xj:0.25, Hl:1, Il:0.25, Di:2, nj:0.0050, jj:0.01, kj:0.0010, fj:0.015, gj:0.0020, pj:0.0010, rj:0.01, oj:0, mj:0, lj:0, ij:0.03, hj:0.0040, qj:0, sj:0, tj:0.75, zf:10, Ce:800, ej:0.25, dj:0.1, yf:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], Ni:0.02, Oi:0.5, Mi:0.0050, dh:1E3, Hi:10, Fi:1, Qj:1E3, Pj:100, Oj:0, Nj:0, Mj:1E3, Lj:100, Vi:0.5, Ii:3, Qi:22500, Gi:50, Fj:10, Xg:r, Ci:j, Jj:1E3, Kj:2E3, 
Gj:4E3, Hj:1E4, Ij:2E7, Aj:100, cj:"tmshooter", jh:0, Pi:[0.1, 0.4, 1], wj:0, uh:5};
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.sh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Ua:0, uc:j, Yd:j, Jd:r, ca:l, speed:0, Hb:l, Dd:l, li:l, af:l, Vb:l, rg:l, sc:l, sg:l, tg:l, frame:0, init:function(a, f, g) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = f;
    this.style = g;
    tm.Ab.Zc.be.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Dd = this.li = gls2.wh(f, 100);
    this.af = gls2.wh(3, 100);
    this.Vb = gls2.oh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Vb.visible = r;
    this.gk();
    this.Hb = this.fk();
    1 === this.style && (this.Hb = [this.Hb[1], this.Hb[2]]);
    this.sc = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(g = this.Hb.length;f < g;f++) {
      var m = this.Hb[f];
      gls2.Ki(this, m).setPosition(m.x, m.y).addChildTo(this.sc)
    }
    this.al = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.al.blendMode = "lighter";
    this.sg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.sg.blendMode = "lighter";
    this.sg.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Ta && !a.La
    };
    this.tg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.tg.blendMode = "lighter";
    this.tg.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Ta && !a.La
    };
    this.ge = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.ge.blendMode = "lighter";
    this.ge.rotation = -90;
    this.ge.strokeStyle = "rgba(180,180,255,0.4)";
    this.ge.update = function() {
      this.visible = a.La
    };
    this.ge.draw = function(b) {
      b.lineCap = "round";
      var f = a.Gd / gls2.ja.Ce;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, r);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, r);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, r)
    };
    this.Wk = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Wk.update = function() {
      this.visible = a.La
    };
    b === l && (b = gls2.Zg(this.ca.la))
  }, fk:function() {
    if(0 === this.type) {
      return[{x:0, hd:0, y:40, d:0, $b:j, Sb:-0.7, v:j}, {x:0, hd:0, y:40, d:0, $b:j, Sb:0.5, v:j}, {x:0, hd:0, y:40, d:0, $b:j, Sb:-0.5, v:j}, {x:0, hd:0, y:40, d:0, $b:j, Sb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, $b:r, Sb:-0.7, v:j}, {x:-40, y:40, d:0.1, $b:r, Sb:-0.5, v:j}, {x:40, y:40, d:0.1, $b:j, Sb:0.5, v:j}, {x:70, y:20, d:0.1, $b:j, Sb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, $b:r, Sb:-0.7, v:j}, {x:-30, y:20, d:0.4, $b:r, Sb:-0.5, v:j}, {x:30, y:20, d:0.4, $b:j, Sb:0.5, v:j}, {x:60, y:40, d:0.6, $b:j, Sb:0.7, v:j}]
    }
  }, gk:function() {
    this.rg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.rg.setFrameIndex(5);
    this.rg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Vc:-1, Fd:r, Tb:r, update:function(d) {
    this.visible = this.Jd ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.uc) {
      var g = f.getKeyAngle();
      g !== l && (g = a[g], this.x += g.x * this.speed * (this.Tb ? 0.5 : 1), this.y += g.y * this.speed * (this.Tb ? 0.5 : 1));
      this.x = gls2.na.clamp(this.x, 15, 465);
      this.y = gls2.na.clamp(this.y, 15, 625);
      var m = f.getKey("c") && this.Yd, g = f.getKey("z") && this.Yd;
      this.Vc = m ? this.Vc + 1 : this.Vc - 1;
      this.Vc = gls2.na.clamp(this.Vc, -1, 10);
      this.Tb = g && m || 10 === this.Vc;
      m = this.ca.La ? 3 : 5;
      this.Fd = !this.Tb && (0 <= this.Vc || g) && 0 === d.frame % m;
      g && (this.Vc = 0);
      this.Vb.x = this.x;
      this.Vb.y = this.y - 40;
      f.getKeyDown("x") && this.Yd && (0 < this.ca.Ta && !this.ca.La ? (this.ca.zl(), gls2.ak(this).addChildTo(this.ca)) : !this.ca.md && 0 < this.ca.Ib && (this.Cb = gls2.na.clamp(this.Cb - 2, 0, 1), this.ca.Xd(-0.02), gls2.$g(this, this.ca).setPosition(gls2.na.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca), gls2.core.xa("bomb1")))
    }else {
      this.Tb = this.Fd = r
    }
    this.Fd && (g = Math.sin(0.2 * d.frame), m = this.Dd.fire(this.x - 7 - 6 * g, this.y - 5, -90), m !== l && m.addChildTo(this.ca), m = this.Dd.fire(this.x + 7 + 6 * g, this.y - 5, -90), m !== l && m.addChildTo(this.ca));
    if(this.Tb) {
      g = 0;
      for(m = this.Hb.length;g < m;g++) {
        this.Hb[g].v = r
      }
      this.sc.rotation = 0
    }else {
      this.Vb.visible = r;
      g = 0;
      for(m = this.Hb.length;g < m;g++) {
        this.Hb[g].v = j
      }
    }
    this.vk(f);
    this.ck(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = d.frame
  }, Hc:function() {
    this.Tb = this.Fd = r;
    this.ca.Te();
    this.ca.ib = 0;
    this.ca.ab = 0;
    this.ca.Oa = 0
  }, vk:function(a) {
    if(0 === this.type) {
      for(a = this.Hb.length;this.Hb[--a] !== i;) {
        var b = this.Hb[a];
        0 === a ? b.x = b.hd + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.hd + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.hd + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.hd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.sc, b.rotation = this.Tb ? 0 : this.uc && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.uc && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, ck:function(a, b) {
    this.uc && a.getKey("left") ? this.Ua = gls2.na.clamp(this.Ua - 0.2, -3, 3) : this.uc && a.getKey("right") ? this.Ua = gls2.na.clamp(this.Ua + 0.2, -3, 3) : 0 > this.Ua ? this.Ua = gls2.na.clamp(this.Ua + 0.2, -3, 3) : 0 < this.Ua && (this.Ua = gls2.na.clamp(this.Ua - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Ua) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Ua) : 2 === this.type && this.setFrameIndex(31 + ~~this.Ua);
    return b
  }});
  gls2.Ki = tm.createClass({superClass:tm.display.AnimationSprite, fd:l, ea:l, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.fd = b;
    this.ea = a;
    this.altitude = 10;
    this.gotoAndPlay(b.$b ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.fd.v) {
      this.x = this.fd.x * (this.ea.ca.La ? 1.5 : 1);
      this.y = this.fd.y * (this.ea.ca.La ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.fd.d * this.fd.Sb);
      var f = this.parent.localToGlobal(this);
      this.fd.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(this.ea.ca);
      this.ea.Fd && (f = this.ea.Dd.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== l && f.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  gls2.zd = tm.createClass({superClass:tm.display.Sprite, speed:0, dd:0, rk:1, $h:0, jb:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.dd = gls2.ja.th;
    b === l && (b = gls2.Va(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.se(a)
  }, update:function() {
    this.x += this.Lc;
    this.y += this.lc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, se:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Ze:function(a) {
    for(var f = 0;f < a;f++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = gls2.na.randf(2, 8), q = 2 * Math.random() * Math.PI;
      g.Ga = Math.cos(q) * m;
      g.Ha = Math.sin(q) * m;
      g.scaleX = g.scaleY = (gls2.na.randf(0.1, 0.5) + gls2.na.randf(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.Ga;
        this.y += this.Ha;
        this.Ga *= 0.9;
        this.Ha *= 0.9
      })
    }
  }});
  gls2.zd.$d = function() {
    for(var b = [].concat(a), f = 0, g = b.length;f < g;f++) {
      b[f].remove()
    }
  };
  var a = gls2.zd.qb = [];
  gls2.wh = tm.createClass({Uc:l, Zh:r, init:function(b, f) {
    this.Zh = 3 === b;
    this.Uc = [];
    for(var g = 0;g < f;g++) {
      var m = gls2.zd(b), q = this;
      m.addEventListener("added", function() {
        this.sa = gls2.ja.Fj;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        q.Uc.push(this)
      });
      this.Zh && m.addEventListener("enterframe", function(a) {
        this.setScale((this.rk + this.$h) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Uc.push(m)
    }
  }, fire:function(a, b, g) {
    var m = this.Uc.pop();
    if(m === i) {
      return l
    }
    var q = gls2.na.degToRad(g);
    m.Lc = Math.cos(q) * m.speed;
    m.lc = Math.sin(q) * m.speed;
    m.setPosition(a, b);
    m.rotation = g + 90;
    return m
  }, Od:function(a) {
    for(var b = this.Uc.length;this.Uc[--b] !== i;) {
      this.Uc[b].dd = gls2.ja.th + gls2.ja.uj * a, this.Uc[b].$h = 0.2 * a
    }
  }})
})();
gls2.oh = tm.createClass({superClass:tm.display.Sprite, ea:l, ca:l, qc:0, frame:0, yi:l, color:l, Eh:0, fg:0, sk:r, head:l, Uh:l, rc:l, jb:j, dd:gls2.ja.lh, Ld:l, init:function(b, a) {
  this.ea = b;
  this.ca = b.ca;
  this.Eh = 0 === this.ea.style ? 1 : 1.2;
  this.fg = 0 === this.ea.style ? 50 : 75;
  var d = this;
  this.yi = a;
  this.superInit(a.redBody, this.fg, 100);
  this.boundingHeightBottom = 1;
  this.fm = 0;
  this.origin.y = 1;
  var f = this.rc = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.Uh = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.qc - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.qc
  };
  this.se(["red", "green", "blue"][this.ea.type]);
  this.Od(0)
}, se:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.yi[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.rc.gotoAndPlay(this.color);
  this.Uh.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Ld = l;
  return this
}, Od:function(b) {
  this.boundingWidth = this.width = this.fg + 30 * b / gls2.ja.zf;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.dd = this.Eh * gls2.ja.lh + gls2.ja.xj * b;
  0 === b ? this.se(["red", "green", "blue"][this.ea.type]) : this.se("hyper")
}, Ze:function(b, a) {
  this.Ld === l && this.Jh();
  a = a || this.qc;
  for(var d = 0;d < b;d++) {
    var f = this.Ld.clone().setPosition(this.x, a).addChildTo(this.ca), g = gls2.na.randf(8, 14), m = gls2.na.randf(0, Math.PI);
    f.Ga = Math.cos(m) * g;
    f.Ha = Math.sin(m) * g;
    f.scaleX = f.scaleY = (gls2.na.randf(0.5, 1.5) + gls2.na.randf(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.Ga;
      this.y += this.Ha;
      this.Ga *= 0.95;
      this.Ha *= 0.95
    })
  }
}, Kk:function(b, a, d) {
  this.Ld === l && this.Jh();
  for(var f = 0;f < b;f++) {
    var g = this.Ld.clone().setPosition(a, d).addChildTo(this.ca), m = gls2.na.randf(12, 20), q = gls2.na.randf(0, Math.PI);
    g.Ga = Math.cos(q) * m;
    g.Ha = Math.sin(q) * m;
    g.scaleX = g.scaleY = (gls2.na.randf(1, 3) + gls2.na.randf(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.Ga;
      this.y += this.Ha;
      this.Ga *= 0.95;
      this.Ha *= 0.95
    })
  }
}, Jh:function() {
  this.Ld = "hyper" === this.color ? gls2.Va(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Va(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.ea.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.ea.Tb) ? (this.qc = Math.max(0, this.qc - 40), this.height = this.y - this.qc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.qc = this.y - 40;
  this.sk = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Sl:function() {
  return this.qc
}, tl:function(b) {
  this.qc = b;
  this.head.update()
}});
gls2.oh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.qc
});
(function() {
  gls2.$g = tm.createClass({superClass:tm.app.Object2D, jb:j, ca:l, init:function(a, d) {
    this.superInit();
    this.ea = a;
    this.ca = d;
    this.ti = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.ti.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.ti));
    this.Ch();
    b === l && (b = gls2.Va(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.oa = 0;
    this.pe = 1;
    this.addEventListener("added", function() {
      this.ca.md = j;
      this.ea.Jd = j;
      this.ca.Ib -= 1;
      this.ca.cf = r;
      this.ca.Te();
      this.ca.ub("drop BOMBER!!", j);
      gls2.ta("bomb");
      gls2.ta("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.md = r;
      this.ea.Jd = r
    })
  }, Ch:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.na.randf(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.pe + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.oa;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.oa += 3.6, this.pe = -1) : (this.b = 8, this.oa += 1.8, this.pe = 1)
  }});
  gls2.ph = tm.createClass({superClass:gls2.$g, init:function(a, b) {
    this.superInit(a, b);
    gls2.ja.Ci && this.addEventListener("added", function() {
      this.ca.Ib = 0
    })
  }, Ch:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.na.randf(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.pe + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.oa;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.oa += 1.8, this.pe = 1)
  }});
  var b = l
})();
gls2.Li = tm.createClass({superClass:tm.display.Sprite, Lc:0, lc:0, ea:l, oa:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.ea = d;
  this.lc = 1;
  this.Lc = 0.5 > gls2.za.random() ? -1 : 1;
  this.oa = 0
}, update:function() {
  this.x += this.Lc;
  this.y += 2 * this.lc;
  if(2025 > gls2.Ic(this, this.ea)) {
    this.ea.ca.ok(1), this.remove()
  }else {
    if(3E3 > this.oa) {
      if(30 > this.x || 450 < this.x) {
        this.Lc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.lc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.oa += 1
}});
gls2.Xi = tm.createClass({superClass:tm.display.Sprite, Lc:0, lc:0, ea:l, oa:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var f = -1;1 >= f;f++) {
    for(var g = -1;1 >= g;g++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(f, g).addChildTo(this)
    }
  }
  this.setPosition(b, a);
  this.ea = d
}, update:function() {
  this.y += 0.5;
  4096 > gls2.Ic(this, this.ea) && (this.ea.ca.Qh(), gls2.core.xa("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.ra = {};
gls2.ra.setup = function() {
  gls2.zk = {};
  gls2.ra.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.zk.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.particle16 = gls2.Va(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.ra.Ze = function(b, a, d) {
  b = gls2.ra.particle16.clone().setPosition(b, a);
  b.jb = j;
  b.addChildTo(d);
  d = gls2.na.randf(5, 20);
  a = gls2.na.randf(Math.PI, 2 * Math.PI);
  b.Ga = Math.cos(a) * d;
  b.Ha = Math.sin(a) * d;
  b.scaleX = b.scaleY = (gls2.na.randf(0.1, 0.5) + gls2.na.randf(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.Ga;
    this.y += this.Ha;
    this.Ga *= 0.9;
    this.Ha *= 0.9
  })
};
gls2.ra.Wh = function(b, a, d, f) {
  f = f || 1.8;
  var g = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  g.jb = j;
  g.addChildTo(d);
  g.image = gls2.ra.shockwaveImage;
  g.tweener.clear().to({scaleX:f, scaleY:f, alpha:0}, 800, "easeOutQuad").call(function() {
    g.remove()
  })
};
gls2.ra.Mk = function(b, a, d) {
  var f = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  f.jb = j;
  f.addChildTo(d);
  f.image = gls2.ra.shockwaveImage;
  f.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
};
gls2.ra.Lk = function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.jb = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.ra.Ve = function(b, a, d, f) {
  gls2.ta("explode");
  var g = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  g.jb = j;
  if(f !== i) {
    var m = f.x, q = f.y;
    g.addEventListener("enterframe", function() {
      this.x += m;
      this.y += q;
      m *= 0.99;
      q *= 0.99
    })
  }
  g.addChildTo(d);
  gls2.ra.Wh(b, a, d)
};
gls2.ra.Ck = function(b, a, d) {
  gls2.ta("explode");
  var f = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.jb = j;
  f.addChildTo(d);
  f = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.jb = j;
  f.addChildTo(d);
  f = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.jb = j;
  f.addChildTo(d)
};
gls2.ra.Kb = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Nc.noise.length), g = 0;20 > g;g++) {
    var m = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Nc.noise.at(~~(gls2.Nc.noise.length * g / 20) + f), 2);
    m.jb = j;
    m.addChildTo(d)
  }
  gls2.ra.Wh(b, a, d, 5)
};
gls2.ra.pg = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Nc.noise.length), g = 0;20 > g;g++) {
    for(var m = 2 * Math.PI * g / 20, q = Math.pow(gls2.Nc.noise.at(~~(gls2.Nc.noise.length * g / 20) + f), 2), v = 0;3 > v;v++) {
      var w = 4 * q * (v + 1), n = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.oa += 1
      }).setScale(0.3 * (3 - v)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      n.rotation = 2 * Math.random() * Math.PI;
      n.jb = j;
      n.oa = 0;
      n.a = m;
      n.v = w;
      n.addChildTo(d)
    }
  }
};
gls2.wf = tm.createClass({superClass:tm.app.Object2D, target:l, jc:0, angle:0, alpha:2, jb:j, reverse:r, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.jc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Va(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.jc + this.target.x, Math.sin(a) * this.jc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.jc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.jc || 200 < this.jc) && this.remove()
  }
}});
gls2.ak = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, jb:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Va(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.na.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.na.rand(-2, 2)).on("enterframe", function() {
        this.x += this.Ga;
        this.y += this.Ha
      }).addChildTo(this.target.parent);
      a.Ga = 3 * Math.cos(this.angle);
      a.Ha = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
gls2.hh = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(b) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + b + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, Zl:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.label.x -= 2;
  -480 > this.label.x && (this.alpha *= 0.9, 0.0010 > this.alpha && this.remove())
}});
gls2.Sj = tm.createClass({superClass:tm.graphics.Canvas, ca:l, Cd:l, wb:l, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Cd = gls2.Ri(200);
  this.wb = gls2.vh(this)
}, update:function() {
  this.clear();
  this.ca.ec !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.wb.wc - 20, 470 * this.ca.ec.sa / this.ca.ec.Sc, 20), this.strokeRect(5, this.wb.wc - 20, 470, 20), this.clear(263.5, this.wb.wc - 20 + 2, 2, 16), this.clear(52, this.wb.wc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.wb.wc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.ib)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.Oa / gls2.ja.dh) + 1), this.wb.ee + 192, 22);
  b = [0, 1, 4][this.ca.ea.type];
  for(a = 0;a < this.ca.Yc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * H.Sa.Ub.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.je + " hit", this.wb.ee + 10, 95);
  0 < ~~this.ca.Oa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.Oa + " HIT!!", 10, 0.5 * -this.wb.wc + 115));
  0 === this.frame % 2 && (!this.ca.La && 0 < this.ca.Ta ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Ta, 5, 637)) : this.ca.La && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.jd, 5, 637)));
  for(a = 0;a < this.ca.Ib;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.cf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Cd.update();
  this.Cd.Lg = this.wb.wc + 5;
  this.Cd.draw(this);
  this.frame += 1
}});
gls2.vh = tm.createClass({superClass:tm.app.Object2D, Nb:l, ee:0, wc:0, init:function(b) {
  this.superInit();
  this.Nb = b
}});
(function() {
  var b = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.aj = tm.createClass({superClass:tm.graphics.Canvas, Da:l, Lb:l, Xb:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Da = gls2.bj();
    this.Da.la = this;
    this.Da.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Lb = [];
    this.Xb = [];
    for(var a = 0;5 > a;a++) {
      this.Lb[a] = 40 * b[a], this.Xb[a] = this.Lb[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Da.Ga = Math.cos(this.Da.direction) * this.Da.speed;
    this.Da.Ha = Math.sin(this.Da.direction) * this.Da.speed;
    for(var b = 0;5 > b;b++) {
      for(this.Da.gc[b] += this.Da.Ga * Math.pow(0.8, b);3 * this.Lb[b] < this.Da.gc[b];) {
        this.Da.gc[b] -= 3 * this.Lb[b]
      }
      for(;this.Da.gc[b] < 3 * -this.Lb[b];) {
        this.Da.gc[b] += 3 * this.Lb[b]
      }
      for(this.Da.hc[b] += this.Da.Ha * Math.pow(0.8, b);2 * this.Xb[b] < this.Da.hc[b];) {
        this.Da.hc[b] -= 2 * this.Xb[b]
      }
      for(;this.Da.hc[b] < 2 * -this.Xb[b];) {
        this.Da.hc[b] += 2 * this.Xb[b]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Da.background !== l ? this.clearColor(this.Da.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * b[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * b[a] + ")"}]).toStyle();
      this.beginPath();
      for(var d = 0, f = this.Da.gc[a] - 3 * this.Lb[a];f < 480 + 3 * this.Lb[a];f += 1.5 * this.Lb[a]) {
        for(var d = 0 === d ? this.Xb[a] : 0, g = this.Da.hc[a] - 2 * this.Xb[a] + d;g < 640 + 2 * this.Xb[a];g += 2 * this.Xb[a]) {
          this.line(f, g, f + this.Lb[a], g), this.line(f, g, f - this.Lb[a] / 2, g + this.Xb[a]), this.line(f, g, f - this.Lb[a] / 2, g - this.Xb[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.bj = tm.createClass({superClass:tm.app.Object2D, gc:0, hc:0, direction:0, speed:0, Ga:0, Ha:0, background:l, init:function() {
    this.superInit();
    this.gc = [];
    this.hc = [];
    for(var a = 0;5 > a;a++) {
      this.gc[a] = 240, this.hc[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Ha = this.Ga = 0
  }})
})();
gls2.Wf = tm.createClass({superClass:tm.display.Sprite, ci:r, ca:l, ea:l, Jc:r, ld:r, Sg:r, Ga:0, Ha:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.ci = b) && this.setScale(2, 2);
  this.ca = gls2.Ya.Td;
  this.ea = this.ca.ea;
  this.addChildTo(this.ca);
  b = 0.5 * gls2.za.random() * Math.PI - 0.75 * Math.PI;
  this.Ga = 30 * Math.cos(b);
  this.Ha = 30 * Math.sin(b)
}, update:function() {
  this.ea.Tb && (this.ld = j);
  if(this.ea.parent === l) {
    this.ld = r
  }else {
    if(100 > gls2.Ic(this, this.ea)) {
      this.ca.cl(this);
      this.remove();
      return
    }
    1E4 > gls2.Ic(this, this.ea) && (this.ld = j);
    if(this.Sg && this.ld) {
      var b = Math.atan2(this.ea.y - this.y, this.ea.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.Sg || (this.x += this.Ga, this.y += this.Ha, this.Ga *= 0.8, this.Ha *= 0.8, -1 < this.Ga && (1 > this.Ga && -1 < this.Ha && 1 > this.Ha) && (this.Sg = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.xh = tm.createClass({superClass:gls2.Wf, Jc:r, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.$j = tm.createClass({superClass:gls2.Wf, Jc:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.ld || (this.x += this.ca.la.Ga, this.y += this.ca.la.Ha);
  this.superClass.prototype.update.call(this)
}});
gls2.ad = tm.createClass({ea:l, ca:l, $:l, frame:0, init:function(b) {
  this.ca = b;
  this.ea = b.ea;
  this.Pd();
  this.$ = gls2.Zj();
  this.frame = 0
}, Pd:A(), update:function() {
  this.Bk(this.frame);
  this.frame += 1
}, Bk:function(b) {
  b = this.$.get(b);
  if(b !== l) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.fh[b.value] !== i) {
        var a = gls2.fh[b.value];
        if(a !== l) {
          if(a[0].ec === j) {
            this.Bg(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.Bg(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.$.Tg = r
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Bg:function(b) {
  this.ca.Ue += 1;
  b = b.aa(this.ca, b.ba).setPosition(b.x, b.y).addChildTo(this.ca);
  b.ue = this;
  b.Kd();
  return b
}, Ne:function(b) {
  gls2.We();
  this.ca.ce = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var g = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
      g.oa = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.oa) + 0.5;
        this.oa += 1
      };
      g.addChildTo(a)
    }
  }
  a.tweener.wait(3E3).call(b).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = A();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.ca.og);
  gls2.ta("warning");
  gls2.ta("voWarning")
}});
gls2.ad.create = function(b, a) {
  switch(a) {
    case 0:
      return gls2.Uj(b);
    case 1:
      return gls2.Vj(b);
    case 2:
      return gls2.Wj(b);
    case 3:
      return gls2.Xj(b);
    case 4:
      return gls2.Yj(b);
    default:
      h(Error("stageNumber = " + a))
  }
};
gls2.Zj = tm.createClass({index:0, data:l, Tg:r, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? l : b.stop === j ? (this.Tg = j, b) : this.Tg ? l : b
}});
gls2.Uj = tm.createClass({superClass:gls2.ad, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Mb("bgm1", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 8;
    this.ca.la.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.Ne(function() {
      gls2.Mb("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, Pd:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.Vj = tm.createClass({superClass:gls2.ad, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Mb("bgm2", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.ca.la.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.ca.la.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.ca.la.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", j);
  this.$.add(300, "heri2-left");
  for(b = 0;12 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.ca.la.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
    this.Ne(function() {
      gls2.Mb("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ca.la.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Pd:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.Wj = tm.createClass({superClass:gls2.ad, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Mb("bgm3", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 3;
    this.ca.la.tweener.clear().to({speed:10}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "alice");
  this.$.add(1E3, "reika1-left");
  this.$.add(150, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  for(b = 0;3 > b;b++) {
    this.$.add(60, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(60, function() {
    this.ca.la.tweener.clear().to({speed:3}, 1E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "reika1-left");
  this.$.add(60, "reika1-right");
  this.$.add(120, "akane-right");
  this.$.add(120, "akane-left");
  this.$.add(120, "reika1-left");
  this.$.add(180, "reika1-left");
  this.$.add(120, "akane-center");
  this.$.add(120, "reika1-right");
  this.$.add(180, "reika1-right");
  this.$.add(120, function() {
    this.ca.la.tweener.clear().to({speed:5}, 2E3, "easeInOutQuad").to({direction:90 * (Math.PI / 180)}, 3E3, "easeInOutQuad")
  });
  for(b = 0;3 > b;b++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(100, "miyuki_y1");
  this.$.add(1, function() {
    this.ca.la.tweener.clear().to({speed:4}, 2E3, "easeInOutQuad").to({direction:0.5 * Math.PI}, 2E3, "easeInOutQuad")
  });
  this.$.add(600, "higashi", j);
  this.$.add(300, "nao1-left");
  for(b = 0;8 > b;b++) {
    this.$.add(60, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(100, "alice");
  for(b = 0;8 > b;b++) {
    this.$.add(60, "reika1-left"), this.$.add(60, "reika1-right")
  }
  this.$.add(600, function() {
    this.Ne(function() {
      gls2.Mb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.la.direction = Math.PI / 2;
    this.ca.la.tweener.clear().to({speed:-10}, 5E3, "easeInOutQuad")
  });
  this.$.add(600, "momozono")
}, Pd:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.Xj = tm.createClass({superClass:gls2.ad, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Mb("bgm4", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 1
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
    this.ca.la.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(b = 0;6 > b;b++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.ca.la.speed = 3;
    this.ca.la.tweener.clear().to({speed:0.3}, 5E3)
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
    this.ca.la.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", j);
  this.$.add(1200, A());
  for(b = 0;9 > b;b++) {
    this.$.add(50, 0 === b % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.ca.la.tweener.clear().to({speed:0.6}, 3E3)
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
    this.Ne(function() {
      gls2.Mb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.la.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Pd:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.Yj = tm.createClass({superClass:gls2.ad, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Mb("bgm5", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 1;
    this.ca.la.gm = j
  });
  this.$.add(150, "urara5-0");
  this.$.add(260, "urara5-2");
  this.$.add(260, "urara5-1");
  this.$.add(380, "nozomi5-1");
  this.$.add(100, "nozomi5-0");
  this.$.add(200, "nozomi5-2");
  this.$.add(200, "tankRD-left");
  this.$.add(50, "tank5-left");
  this.$.add(50, "tank5-center");
  this.$.add(50, "tankRD-left");
  this.$.add(50, "tank5-left");
  this.$.add(50, "tank5-center");
  this.$.add(300, "mktn5-0");
  this.$.add(120, "heri1-4-left");
  this.$.add(10, "tankL-top");
  this.$.add(20, "heri1-4-center");
  this.$.add(10, "tankL-top");
  this.$.add(35, "heri1-4-left2");
  this.$.add(35, "heri1-4-center2");
  this.$.add(10, "tankRD-left");
  this.$.add(20, "heri1-4-left");
  this.$.add(10, "tankL-top");
  this.$.add(20, "heri1-4-left");
  this.$.add(10, "tankL-top");
  this.$.add(20, "heri1-4-center");
  this.$.add(10, "tankL-top");
  this.$.add(220, "mktn5-1");
  this.$.add(20, "heri1-4-right");
  this.$.add(10, "tankRD-left");
  this.$.add(20, "heri1-4-center");
  this.$.add(10, "tank5-center");
  this.$.add(35, "heri1-4-right2");
  this.$.add(35, "heri1-4-center2");
  this.$.add(10, "tankRD-left");
  this.$.add(20, "heri1-4-right");
  this.$.add(10, "tankL-top");
  this.$.add(260, "urara5-2");
  this.$.add(260, "urara5-3");
  this.$.add(260, "urara5-2");
  this.$.add(260, "urara5-1")
}, Pd:function() {
  this.ca.la.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {Hd:function(b, a) {
  if(b.parent === l || a.parent === l) {
    return r
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, g = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, q = a.y - a.boundingHeightTop, v = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > m && f < v && g > q
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Bl:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.kd(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.Ti = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:r, title:l, selections:[], description:l, box:l, cursor:l, Dg:l, _selected:0, _opened:r, _finished:r, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Dg = d.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Dg !== l && this.parent.Dg(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.ta("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.na.clamp(this._selected, 0, this.selections.length - 1), gls2.ta("select")) : 
  b.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.na.clamp(this._selected, 0, this.selections.length - 1), gls2.ta("select")))
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
}, kd:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function I(b, a, d, f, g) {
  g = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:A()}, g);
  b.Bl(gls2.Ti(a, d, g), f)
}
;gls2.Va = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, eg:0.85, size:0, image:l, jb:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== i ? a : 1;
  this.eg = d !== i ? d : 0.85;
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.eg;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Va(this.size, this.Wl, this.eg, this.image)
}});
gls2.Zg = tm.createClass({superClass:gls2.Va, la:l, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.la = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.la.Ga;
  this.y += this.la.Ha + 0.3
}, clone:function(b) {
  return gls2.Zg(this.la, b)
}});
gls2.Ri = tm.createClass({width:0, label:l, zb:l, oa:0, qi:0, Lg:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.zb = [];
  this.qi = 480 - this.width - 5;
  this.Lg = 5
}, pk:function(b, a) {
  a === j && (this.zb.clear(), this.zb.push(""));
  5 < this.zb.length && this.zb.splice(1, this.zb.length - 4);
  this.zb.push(b);
  return this
}, tk:function() {
  this.zb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.zb.length) {
    if("" !== this.zb[0]) {
      var a = this.zb[0][0];
      this.zb[0] = this.zb[0].substring(1);
      b += a
    }else {
      this.zb.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.oa % 2 ? "_" : " ");
  this.oa += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.qi, this.Lg);
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
gls2.Nc = {noise:l, Nk:function(b) {
  function a(a) {
    if(1 > a) {
      return l
    }
    var f = [], g = Math.random(), m, q;
    for(q = 0;q < b;q += ~~a) {
      m = Math.random();
      for(var k = 0;k < a;k++) {
        f[q + k] = d(g, m, k / a)
      }
      g = m
    }
    g = f[b - ~~a];
    m = f[0];
    for(k = 0;k < a;k++) {
      f[b - ~~a + k] = d(g, m, k / a)
    }
    return f
  }
  function d(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var f = [], g = 0, m = Math.pow(2, 4);8 > g;g++, m *= 2) {
    var q = a(b / m);
    if(q === l) {
      break
    }
    f.push(q)
  }
  q = [].concat(f[0]);
  g = 1;
  for(m = 0.5;g < f.length;g++, m *= 0.5) {
    for(var v = 0;v < b;v++) {
      q[v] += f[g][v] * m
    }
  }
  for(g = 0;g < q.length;g++) {
    q[g] /= 2
  }
  return q
}};
gls2.Nc.noise = gls2.Nc.Nk(512);
gls2.za = {index:-1, data:l, setup:function(b) {
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
gls2.bb = l;
gls2.Mb = function(b, a, d) {
  a || gls2.ve();
  a = tm.asset.AssetManager.get(b);
  var f = tm.asset.AssetManager.get("bgmLoopInfo");
  a && (gls2.bb = a.clone(), gls2.bb.volume = 0.1 * gls2.core.Zd, gls2.bb.loop = !d, gls2.bb.play(), f.data[b] && (gls2.bb.source.loopStart = f.data[b].start, gls2.bb.source.loopEnd = f.data[b].end))
};
gls2.ve = function() {
  gls2.bb !== l && gls2.bb.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.bb.stop()
};
gls2.We = function() {
  if(gls2.bb !== l) {
    var b = gls2.bb;
    gls2.bb = l;
    b.loop = r;
    var a = function() {
      b.volume -= 0.0010;
      0 >= b.volume ? b.cm === AudioBufferSourceNode.PLAYING_STATE && b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.ta = function(b) {
  if(0 !== gls2.core.pd && gls2.ta.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.pd, gls2.ta.Wg !== l && gls2.ta.Wg.stop(), gls2.ta.Wg = a) : a.volume = 0.1 * gls2.core.pd);
    gls2.ta.played[b] = gls2.core.frame
  }
};
gls2.ta.played = {};
gls2.ta.Wg = l;
(function() {
  var b = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, oa:0, ne:[], Ye:r, Yh:l, ei:0, df:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Yh = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Ye = r;
      this.El()
    })
  }, El:function() {
    for(var a = ("" + Math.floor(gls2.core.fe)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
      b += a.substring(g, g + 4) + " "
    }
    this.Yh.text = "HIGH SCORE: " + b.trim()
  }, kd:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Ah(80 * Math.cos(0.01 * this.oa) + 240, 80 * Math.sin(0.01 * this.oa) + 320, 0);
    this.Ah(80 * Math.cos(0.01 * this.oa + Math.PI) + 240, 80 * Math.sin(0.01 * this.oa + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Ye && this.ni();
    this.oa += 1
  }, Ah:function(d, f, g) {
    if(!this.Ye) {
      b === l && (b = gls2.Va(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Va(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      g.speed = 0.6;
      var m = gls2.na.randf(0, 2 * Math.PI), q = gls2.na.rand(0, 20);
      g.setPosition(Math.cos(m) * q + d, Math.sin(m) * q + f);
      var v = this;
      g.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = v.ne.indexOf(this);
          -1 !== a && v.ne.splice(a, 1)
        }
      };
      this.ne.push(g)
    }
  }, ni:function() {
    I(this, "MAIN MENU", ["start", "setting"], this.il, {defaultValue:this.ei, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, il:function(a) {
    2 !== a && (this.ei = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Ye = j;
          for(var a = 0, b = this.ne.length;a < b;a++) {
            this.ne[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.Tj())
        }.bind(this));
        break;
      case 1:
        this.Tc()
    }
  }, Tc:function() {
    I(this, "SETTING", ["bgm volume", "sound volume"], this.Hg, {defaultValue:this.df, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Hg:function(a) {
    3 !== a && (this.df = a);
    switch(a) {
      case 0:
        this.Ig();
        break;
      case 1:
        this.Jg();
        break;
      default:
        this.ni()
    }
  }, Ig:function() {
    I(this, "BGM VOLUME", "012345".split(""), this.Fg, {defaultValue:gls2.core.Zd, onCursorMove:function(a) {
      gls2.bb !== l && "exit" !== a && (gls2.bb.volume = 0.1 * a)
    }, showExit:r})
  }, Fg:function(a) {
    6 !== a && (gls2.core.Zd = a);
    this.Tc()
  }, Jg:function() {
    I(this, "SE VOLUME", "012345".split(""), this.Gg, {defaultValue:gls2.core.pd, showExit:r})
  }, Gg:function(a) {
    6 !== a && (gls2.core.pd = a);
    this.Tc()
  }, bm:function() {
    I(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.hl, {defaultValue:gls2.core.Oh, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, hl:function(a) {
    5 !== a && (gls2.core.Oh = a);
    this.Tc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.Tj = tm.createClass({superClass:gls2.Scene, mode:0, types:l, of:l, ac:l, bc:l, cc:l, yg:l, wg:l, type:0, style:0, Pc:r, gf:r, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.vl();
    this.of = this.ul();
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
    this.of.visible = r;
    this.Cg(-1, j);
    this.ac.update();
    this.bc.update();
    this.cc.update();
    gls2.ta("voSelectShip");
    gls2.Mb("bgmShipSelect", j)
  }, vl:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.yg = tm.display.Label("Type-A").setPosition(240, 150);
    this.yg.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.zg = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.zg.update = function() {
      this.zg.text = b[this.type]
    }.bind(this);
    this.zg.addChildTo(a);
    var f = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.ac = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.bc = tm.display.AnimationSprite(f, 64, 64).gotoAndPlay("typeB");
    this.cc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.ac.eb = 0;
    this.bc.eb = 1;
    this.cc.eb = 2;
    this.ac.setScale(3).setPosition(0, 320).addChildTo(a);
    this.bc.setPosition(0, 320).addChildTo(a);
    this.cc.setPosition(0, 320).addChildTo(a);
    this.ac.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.eb / 3 * Math.PI)
    };
    this.bc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.eb / 3 * Math.PI)
    };
    this.cc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.eb / 3 * Math.PI)
    };
    return a
  }, ul:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.wg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.wg.addChildTo(a);
    this.Wc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.sc = tm.app.Object2D();
    this.sc.addChildTo(this.Wc);
    this.sc.update = function(a) {
      this.sc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.ya = [];
    this.ya[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ya[0].update = function() {
      0 === this.type ? this.ya[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.ya[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.ya[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.ya[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ya[1].update = function() {
      0 === this.type ? this.ya[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.ya[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.ya[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.ya[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ya[2].update = function() {
      0 === this.type ? this.ya[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.ya[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.ya[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.ya[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ya[3].update = function() {
      0 === this.type ? this.ya[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.ya[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.ya[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.Wc.line = b(0, 0, 0, 130, 8);
    this.Wc.line.addChildTo(this.Wc);
    this.ya.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.sc)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.xg = tm.display.Label(d[0], 16).setPosition(240, 500);
    this.xg.update = function() {
      this.xg.text = d[this.style]
    }.bind(this);
    this.xg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.of.visible = r, !this.gf && a.keyboard.getKeyDown("left")) {
        this.Cg(-1, r), gls2.ta("select")
      }else {
        if(!this.gf && a.keyboard.getKeyDown("right")) {
          this.Cg(1, r), gls2.ta("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.ta("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.of.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (gls2.ja.Xg ? this.nl() : (this.Pc = j, this.mi()), gls2.ta("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Fl(0 === ~~(a.frame / 60) % 
      2))
    }
  }, nl:function() {
    I(this, "AUTO BOMB", ["on", "off"], this.dl, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, dl:function(a) {
    2 !== a && (this.Pc = 0 === a, this.mi())
  }, mi:function() {
    I(this, "ARE YOU READY?", ["ok"], this.el, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, el:function(a) {
    0 === a && this.yl()
  }, Cg:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.ac, this.bc, this.cc][this.type].remove().addChildTo(this.types);
    b ? (this.ac.eb -= a, this.ac.scaleX = 0 === this.type ? 5 : 1, this.ac.scaleY = 0 === this.type ? 5 : 1, this.bc.eb -= a, this.bc.scaleX = 1 === this.type ? 5 : 1, this.bc.scaleY = 1 === this.type ? 5 : 1, this.cc.eb -= a, this.cc.scaleX = 2 === this.type ? 5 : 1, this.cc.scaleY = 2 === this.type ? 5 : 1) : (this.gf = j, this.ac.tweener.clear().to({eb:this.ac.eb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.bc.tweener.clear().to({eb:this.bc.eb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.cc.tweener.clear().to({eb:this.cc.eb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.gf = r
    }.bind(this)));
    this.yg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, yl:function() {
    gls2.core.ca.Pc = this.Pc;
    gls2.core.replaceScene(gls2.core.ca);
    gls2.core.ca.start(this.type, this.style);
    gls2.We()
  }, Fl:function(a) {
    this.wg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.Wc.line.kc = r, this.ya[0].line.kc = r, this.ya[1].line.kc = r, this.ya[2].line.kc = r, this.ya[3].line.kc = r) : (this.Wc.line.kc = j, this.ya[0].line.kc = j, this.ya[1].line.kc = j, this.ya[2].line.kc = j, this.ya[3].line.kc = j);
    a ? (this.ya[0].visible = j, this.ya[1].visible = j, 1 === this.style ? (this.ya[2].visible = r, this.ya[3].visible = r) : (this.ya[2].visible = j, this.ya[3].visible = j), this.Wc.line.lineWidth = 5) : (this.ya.each(function(a) {
      a.visible = r
    }), this.Wc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, kd:A()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, kc:j, init:function(a, b, f, g, m) {
    this.superInit();
    this.angle = f - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = g;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = m
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    if(this.kc && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), f = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - f, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - f, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + f, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + f, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.Ya = tm.createClass({superClass:gls2.Scene, ea:l, score:0, Gc:0, ib:0, Oa:0, je:0, ab:0, Qc:0, Eb:0, ue:l, la:l, Yc:3, lf:0, mf:0, zc:0, Ue:0, ke:0, ff:0, Pc:r, Ib:0, gd:0, Fh:0, md:r, cf:r, yc:0, Cb:0, La:r, he:0, Gd:0, Ta:0, jd:0, Vl:0, Ul:0, $e:l, Sh:l, Kg:l, Ph:l, ng:l, og:l, hg:l, ai:l, Wb:l, Nb:l, ec:l, ce:r, $k:r, qk:0, Nd:l, init:function() {
  gls2.Ya.Td !== l && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.Ya.Td = this;
  this.Nb = gls2.Sj(this);
  this.Nb.wb.addChildTo(this);
  this.la = gls2.aj().Da;
  this.la.addChildTo(this);
  this.$e = gls2.Ya.Layer().addChildTo(this);
  this.Sh = gls2.Ya.Layer().addChildTo(this);
  this.Ph = gls2.Ya.Layer().addChildTo(this);
  this.ng = gls2.Ya.Layer().addChildTo(this);
  this.Kg = gls2.Ya.Layer().addChildTo(this);
  this.og = gls2.Ya.Layer().addChildTo(this);
  this.hg = gls2.Ya.Layer().addChildTo(this);
  this.ai = gls2.Ya.mh(this).addChildTo(this);
  tm.Ab.Zc.be.Dh = this;
  this.Wb = tm.app.Object2D();
  this.Wb.addChildTo(this);
  this.Wb.update = function(b) {
    this.ll(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Nb.clear()
  })
}, addChild:function(b) {
  b.jb ? this.ng.addChild(b) : b instanceof gls2.Pa ? this.hg.addChild(b) : b instanceof gls2.Wf ? this.$e.addChild(b) : b instanceof gls2.ha ? b.Jc ? this.$e.addChild(b) : this.Ph.addChild(b) : b instanceof gls2.sh ? this.Kg.addChild(b) : b === this.Wb || b === this.la || b instanceof gls2.Ya.Layer || b instanceof gls2.Ya.mh || b instanceof gls2.vh || b instanceof gls2.hh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(b)))
}, update:function(b) {
  this.sl(b.keyboard);
  this.ue.update(b.frame);
  0 === b.frame % 2 && this.Nb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.ve()) : b.keyboard.getKeyDown("space") ? this.me(0) : b.keyboard.getKeyDown("p") && (this.Rg().saveAsImage(), this.me(0))
}, Rg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.la.la.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Nb.element, 0, 0);
  return b
}, ll:function() {
  this.ea.uc === r && gls2.ia.erase();
  var b;
  b = [].concat(gls2.ha.qb);
  for(var a = [].concat(gls2.zd.qb), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var g = b[f], m = a[d];
      if(!(0 >= g.sa) && gls2.Collision.Hd(g, m) && (m.Ze(1), m.remove(), g.Hc(m.dd))) {
        this.zc += 1;
        this.La ? this.yb(gls2.ja.oj) : this.yb(gls2.ja.nj);
        this.Eg(g);
        break
      }
    }
  }
  m = this.ea.Vb;
  if(this.ea.Tb) {
    b = [].concat(gls2.ha.qb);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(g = b[f], !(0 >= g.sa) && gls2.Collision.Hd(g, m)) {
        m.tl(g.y + g.boundingHeightBottom);
        g.Hc(m.dd) ? (this.zc += 1, this.La ? this.yb(gls2.ja.mj) : this.yb(gls2.ja.jj), this.Eg(g)) : (this.ab = Math.min(this.ab + 0.02, 1), this.La ? (this.Ad(0.01 * gls2.ja.yf[this.jd]), this.yb(gls2.ja.lj)) : (this.Ad(0.01), this.yb(gls2.ja.kj)));
        m.Ze(2);
        break
      }
    }
    a = {x:this.ea.x, y:this.ea.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(gls2.ha.qb);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.sa) && gls2.Collision.Hd(g, a) && (g.Hc(m.dd) ? (this.zc += 1, this.La ? this.yb(gls2.ja.ij) : this.yb(gls2.ja.fj), this.Eg(g)) : (this.ab = Math.min(this.ab + 0.02, 1), this.La ? (this.Ad(0.01 * gls2.ja.yf[this.jd]), this.yb(gls2.ja.hj)) : (this.Ad(0.01), this.yb(gls2.ja.gj))), m.Kk(2, this.ea.x, this.ea.y - 30))
    }
  }
  if(this.md) {
    gls2.ia.erase();
    b = [].concat(gls2.ha.qb);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.sa) && (g.ic() && g.Hc(gls2.ja.Di)) && (this.cd(g.score), this.zc += 1)
    }
    this.ab = this.Oa = 0
  }
  if(this.La) {
    f = [].concat(gls2.zd.qb);
    for(g = f.length;f[--g] !== i;) {
      if(m = f[g], !(0 >= m.sa)) {
        a = [].concat(gls2.Pa.qb);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== r && (0 < m.sa && gls2.Collision.Hd(m, d)) && (d.sa -= 6 - this.Cb, 0 > d.sa && (d.Fa(), this.cd(gls2.ja.Hi), this.Ad(gls2.ja.Fi), this.Xh(r, r, d.x, d.y, 1)), m.sa -= 1)
        }
      }
    }
  }
  if(this.ce) {
    gls2.ia.erase()
  }else {
    if(this.ea.parent !== l && this.ea.Jd === r && this.md === r && 0 >= this.he && !gls2.ja.Bj) {
      for(f = gls2.Pa.qb.length;gls2.Pa.qb[--f] !== i;) {
        if(b = gls2.Pa.qb[f], b.visible !== r && gls2.Collision.Hd(b, this.ea)) {
          this.ea.Hc();
          0 < this.Ib && this.Pc ? (this.Cb = gls2.na.clamp(this.Cb - 1, 0, 1), this.Xd(-0.01), gls2.ph(this.ea, this).setPosition(this.ea.x, this.ea.y).addChildTo(this), gls2.core.xa("bomb2")) : this.ji();
          break
        }
      }
      for(f = gls2.ha.qb.length;gls2.ha.qb[--f] !== i;) {
        if(g = gls2.ha.qb[f], !(0 >= g.sa) && !g.Jc && gls2.Collision.Hd(g, this.ea)) {
          this.ea.Hc();
          0 < this.Ib && this.Pc ? (this.Cb = gls2.na.clamp(this.Cb - 1, 0, 1), this.Xd(-0.01), gls2.ph(this.ea, this).setPosition(this.ea.x, this.ea.y).addChildTo(this), gls2.core.xa("bomb2")) : this.ji();
          break
        }
      }
    }
    this.La && (this.Gd -= 1, 0 >= this.Gd && this.Te());
    this.he = Math.max(this.he - 1, 0);
    this.ab -= gls2.ja.Ni * gls2.ja.Oi;
    0 >= this.ab && (this.ab = 0, this.La || 0 < this.Ta ? this.Qc = this.Oa = this.ib = 0 : (0 < this.Oa && (0 >= this.Qc && (this.Qc = this.Oa * gls2.ja.Mi), this.ib = this.ib * (this.Oa - this.Qc) / this.Oa, this.Oa -= this.Qc), 0 >= this.Oa && (this.Qc = this.Oa = this.ib = 0)));
    this.cf && (this.score += gls2.ja.Aj)
  }
}, Eg:function(b) {
  this.Xh(b.Jc, this.La || gls2.Ic(b, this.ea) < gls2.ja.Qi, b.x, b.y, b.star, b instanceof gls2.ud);
  this.Ad(gls2.ja.yf[this.jd]);
  for(var a = this.ib, d = ~~(this.Oa / gls2.ja.dh) + 1, f = 0;f < d;f++) {
    a += b.score, this.cd(a)
  }
  this.ib += b.score * d
}, Xh:function(b, a, d, f, g, m) {
  b = b ? gls2.$j : gls2.xh;
  for(var q = 0;q < g;q++) {
    var v = b(a);
    v.setPosition(d, f);
    m && (v.ld = j)
  }
}, cl:function(b) {
  gls2.ta("star");
  b.ci ? (this.mf += 1, this.ib += gls2.ja.Mj, this.cd(gls2.ja.Qj + this.ib * gls2.ja.Oj), this.La ? this.yb(gls2.ja.sj) : this.yb(gls2.ja.rj)) : (this.lf += 1, this.ib += gls2.ja.Lj, this.cd(gls2.ja.Pj + this.ib * gls2.ja.Nj), this.La ? this.yb(gls2.ja.qj) : this.yb(gls2.ja.pj))
}, start:function(b, a) {
  this.Nb.Cd.tk().clear();
  this.Gc = this.score = 0;
  this.Yc = gls2.ja.kh;
  this.Ib = this.gd = gls2.ja.ih[a];
  this.Fh = gls2.ja.Ei[a];
  this.Ta = this.Cb = this.yc = 0;
  this.Te();
  this.md = r;
  this.qk = this.ke = this.ff = 0;
  this.ea = gls2.sh(this, b, a);
  this.Qg(gls2.ja.vj);
  H.Sa.Ub.$ex = 2 !== a ? 0 : 1;
  this.xi(gls2.ja.wj);
  gls2.ta("voLetsGo");
  this.Al();
  0 === b ? gls2.core.xa("launch0") : 1 === b ? gls2.core.xa("launch1") : 2 === b && gls2.core.xa("launch2")
}, xi:function(b) {
  this.ub("3...2...1...");
  this.ea.parent !== l && this.ea.remove();
  gls2.ha.$d();
  gls2.zd.$d();
  gls2.ia.$d();
  this.$e.removeChildren();
  this.ng.removeChildren();
  this.og.removeChildren();
  this.Kg.removeChildren();
  this.hg.removeChildren();
  this.Wb.removeChildren();
  this.zc = this.Ue = this.mf = this.lf = this.je = this.ab = this.Oa = this.ib = 0;
  this.ec = l;
  this.$k = this.ce = r;
  this.ke = 0;
  this.Nb.wb.ee = 0;
  this.Cb = this.Nb.wb.wc = 0;
  this.Eb = b;
  this.ue = gls2.ad.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.Ag()
  }.bind(this));
  this.la.tweener.clear()
}, Ag:function() {
  this.ub("Let's go!");
  this.ea.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.ea.Vb.addChildTo(this);
  this.ea.uc = r;
  this.ea.Jd = j;
  this.ea.Fd = r;
  this.ea.Tb = r;
  this.ea.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Yd = this.uc = j
  }.bind(this.ea)).wait(gls2.ja.yj).call(function() {
    this.Jd = r
  }.bind(this.ea))
}, ji:function() {
  gls2.ra.Ve(this.ea.x, this.ea.y, this);
  this.ub("I was shot down.");
  this.ea.uc = r;
  this.ea.remove();
  this.Yc -= 1;
  this.Ta = this.Qc = this.Oa = this.ab = 0;
  this.ke += 1;
  this.ff += 1;
  this.Cb = gls2.na.clamp(this.Cb - 3, 0, 1);
  this.Xd(-0.03);
  0 < this.Yc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.Pc || !gls2.ja.Xg) {
      this.gd = Math.min(this.gd + 1, this.Fh)
    }
    this.Ib = this.gd;
    this.Ag()
  }.bind(this)) : this.tweener.clear().wait(20).call(function() {
    this.Nd = this.Rg().canvas.toDataURL("image/png");
    gls2.core.fe === this.score && (gls2.core.Sk = this.Nd)
  }.bind(this)).wait(2E3).call(function() {
    this.Gc < gls2.core.Hh() ? this.pl() : this.Vh()
  }.bind(this))
}, Qg:function(b) {
  H.Sa.Ub.$rank = gls2.na.clamp(b, 0, 0.5)
}, Xd:function(b) {
  this.Qg(H.Sa.Ub.$rank + b)
}, Jk:function() {
  this.ub("System rebooted.", j);
  this.score = 0;
  this.Gc += 1;
  this.Yc = gls2.ja.kh;
  this.Ib = this.gd = gls2.ja.ih[this.ea.style];
  this.Cb = 0;
  this.Qg(0);
  this.Ag()
}, uk:function() {
  gls2.Mb("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.Wb);
  b.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.Rg()));
    b.remove()
  }.bind(this))
}, Vh:function() {
  gls2.ve();
  this.app.replaceScene(gls2.gh())
}, Rl:A(), cd:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < gls2.ja.eh.length;b++) {
    var d = gls2.ja.eh[b];
    a < d && d <= this.score && (this.Qh(), 0 == b && this.app.xa("extend1"), 1 == b && this.app.xa("extend2"))
  }
  gls2.core.fe = Math.max(gls2.core.fe, this.score);
  gls2.core.fe === this.score && (gls2.core.Tk = this.Eb, gls2.core.Vk = this.ea.type, gls2.core.Uk = this.ea.style, gls2.core.Rk = this.Gc);
  1E8 <= this.score && gls2.core.xa("score100M");
  2E9 <= this.score && gls2.core.xa("score2G");
  2E10 <= this.score && gls2.core.xa("score20G");
  5E10 <= this.score && gls2.core.xa("score50G");
  1E11 <= this.score && gls2.core.xa("score100G");
  1E12 <= this.score && gls2.core.xa("score1T")
}, Ad:function(b) {
  this.Qc = 0;
  this.Oa += b;
  this.je = Math.max(this.je, this.Oa);
  1 <= b && (this.ab = 1);
  100 <= this.Oa && this.app.xa("combo100");
  1E3 <= this.Oa && this.app.xa("combo1000");
  1E4 <= this.Oa && this.app.xa("combo10000");
  1E5 <= this.Oa && this.app.xa("combo100000")
}, yb:function(b) {
  if(this.Ta !== gls2.ja.zf) {
    for(b *= gls2.ja.tj;1 < b;) {
      gls2.wf(this.ea).addChildTo(this), b -= 1, this.yc = 0, this.Ta += 1, 1 === this.Ta ? (this.ub("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.ub("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady"))
    }
    this.yc = gls2.na.clamp(this.yc + b, 0, 1);
    1 <= this.yc && (gls2.wf(this.ea).addChildTo(this), this.Ta += 1, this.yc -= 1, 1 === this.Ta ? (this.ub("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.ub("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady")))
  }
}, zl:function() {
  0.5 > Math.random() ? (this.ub("HYPER SYSTEM start!!", j), gls2.ta("voHyperStart0")) : (this.ub("start counting to system limit.", j), gls2.ta("voHyperStart1"));
  this.Cb = gls2.na.clamp(this.Cb + 1, 0, 5);
  this.Xd(0.01 * this.Ta);
  H.Sa.Ub.$hyperOff = gls2.ja.Vi * (2 !== this.ea.style ? 1 : 0.5);
  this.Gd = gls2.ja.Ce;
  this.he = gls2.ja.Ce * gls2.ja.ej;
  this.ea.af.Od(this.Ta);
  this.ea.Vb.Od(this.Ta);
  this.ea.Dd = this.ea.af;
  gls2.ra.Lk(this.ea.x, this.ea.y, this);
  this.La = j;
  this.jd = this.Ta;
  this.yc = this.Ta = 0;
  gls2.ia.erase(j, j);
  this.app.xa("hyper1");
  10 == this.jd && this.app.xa("hyper10")
}, Te:function() {
  this.La !== r && (this.La = r, gls2.wf(this.ea, j).addChildTo(this), this.ea.Dd = this.ea.li, H.Sa.Ub.$hyperOff = 1 * (2 !== this.ea.style ? 1 : 0.5), this.ea.af.Od(0), this.ea.Vb.Od(0), this.he = gls2.ja.Ce * gls2.ja.dj, this.jd = this.Gd = 0, gls2.ia.erase())
}, ok:function() {
  gls2.ta("decision");
  gls2.ta("voGetBomb");
  this.Ib = Math.min(this.Ib + 1, this.gd);
  this.cf = this.Ib === this.gd
}, Qh:function() {
  gls2.ta("voExtend");
  this.ub("extended.");
  this.Yc += 1
}, ub:function(b, a) {
  this.Nb.Cd.pk(b, a)
}, me:function(b) {
  I(this, "PAUSE", ["resume", "setting", "exit game"], this.kl, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:r})
}, kl:function(b) {
  switch(b) {
    case 1:
      this.Tc();
      break;
    case 2:
      this.ol()
  }
}, Tc:function() {
  I(this, "SETTING", ["bgm volume", "sound volume"], this.Hg, {defaultValue:this.df, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Hg:function(b) {
  3 !== b && (this.df = b);
  switch(b) {
    case 0:
      this.Ig();
      break;
    case 1:
      this.Jg();
      break;
    default:
      this.me()
  }
}, ol:function() {
  I(this, "REARY?", ["yes", "no"], this.fl, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:r})
}, fl:function(b) {
  0 === b ? (gls2.ve(), this.app.replaceScene(gls2.TitleScene())) : this.me(1)
}, Ig:function() {
  I(this, "BGM VOLUME", "012345".split(""), this.Fg, {defaultValue:gls2.core.Zd, onCursorMove:function(b) {
    gls2.bb !== l && 6 !== b && (gls2.bb.volume = 0.1 * b)
  }, showExit:r})
}, Fg:function(b) {
  6 !== b && (gls2.core.Zd = b);
  this.Tc(1)
}, Jg:function() {
  I(this, "SE VOLUME", "012345".split(""), this.Gg, {defaultValue:gls2.core.pd, showExit:r})
}, Gg:function(b) {
  6 !== b && (gls2.core.pd = b);
  this.Tc(1)
}, pl:function() {
  I(this, "CONTINUE? (" + this.Gc + "/" + gls2.core.Hh() + ")", ["yes", "no"], this.gl, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:r})
}, gl:function(b) {
  switch(b) {
    case 0:
      this.Jk();
      break;
    case 1:
      this.Vh()
  }
}, kd:A(), wl:function() {
  this.Nb.wb.tweener.clear().to({ee:-480}, 1600, "easeInBack").to({wc:30}, 800, "easeInOutBack")
}, Qk:function() {
  this.Nb.wb.tweener.clear().to({wc:0}, 800, "easeInOutBack").to({ee:0}, 1600, "easeOutBack")
}, qe:l, re:0, ie:l, Ee:0, Al:function() {
  if(1 === this.Ee) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.ie = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.qe = [];
    this.re = 0
  }else {
    if(2 === this.Ee && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.ie = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.ie.push(d[f])
        }
      }
    }
  }
}, sl:function(b) {
  if(1 === this.Ee) {
    1E3 < this.qe.length && (console.log("save"), localStorage.setItem("rec" + this.re, this.qe), localStorage.setItem("recCount", this.re), this.qe = [], this.re += 1), this.qe.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Ee && this.ie) {
      var a = this.ie.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : r
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : r
      })
    }
  }
}});
gls2.Ya.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.Ya.mh = tm.createClass({superClass:tm.display.CanvasElement, ca:l, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.xk(b);
  this.yk(b)
}, xk:function(b) {
  if(0 < this.ca.ab) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.ab) + "," + ~~Math.min(255, 512 * this.ca.ab) + ",0.5)";
    var a = 500 * this.ca.ab;
    b.fillRect(465, 635 - a, 10, a)
  }
}, yk:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.Ta === gls2.ja.zf ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.yc && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.yc, 9))
}});
gls2.Ya.Td = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ca:l, Nd:l, Wb:l, values:l, labels:l, bf:l, ri:[gls2.ja.Jj, gls2.ja.Kj, gls2.ja.Gj, gls2.ja.Hj, 1], bi:l, Ng:l, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ca.lf, this.ca.mf, ~~(100 * (this.ca.zc / this.ca.Ue)), this.ca.je, 0 === this.ca.ke ? gls2.ja.Ij : 0];
  this.bf = this.values.map(function(a) {
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
  this.bi = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.Ng = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.Ng.visible = r;
  this.Nd = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var g = 0;16 > g;g++) {
      f[d][g] = {Og:0, Md:0, Lc:gls2.na.randf(-2, 2), lc:gls2.na.randf(1, 4)}
    }
  }
  this.Wb = tm.app.Object2D();
  this.Wb.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var g = 0;g < f[d].length;g++) {
        var n = f[d][g];
        640 > 40 * g + n.Md && (a.drawImage(this.Nd.element, 40 * d, 40 * g, 40, 40, 40 * d + n.Og, 40 * g + n.Md, 40, 40), n.Og += n.Lc, n.Md += n.lc, n.lc += 0.3, b = r)
      }
    }
    this.wait = 60;
    b && this.Wb.remove();
    a.restore()
  }.bind(this);
  this.Wb.addChildTo(this);
  this.on("enter", function() {
    0 === this.ca.ff && 0 === this.ca.Gc && (0 === this.ca.Eb ? gls2.core.xa("nomiss1") : 1 === this.ca.Eb ? gls2.core.xa("nomiss2") : 2 === this.ca.Eb ? gls2.core.xa("nomiss3") : 3 === this.ca.Eb ? gls2.core.xa("nomiss4") : 4 === this.ca.Eb && gls2.core.xa("nomiss5"))
  });
  this.on("exit", function() {
    gls2.We()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.ta("star"), this.values[a] <= this.bf[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.cd(this.values[a] * this.ri[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.cd(this.bf[a] * this.ri[a]), this.values[a] -= this.bf[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.bi.text = Math.floor(this.ca.score)
    }else {
      if(this.Ng.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.ta("decision"), this.ca.Eb + 1 == gls2.ja.uh ? b.replaceScene(gls2.Wi()) : (this.ca.xi(this.ca.Eb + 1), b.replaceScene(this.ca))
      }
    }
    this.frame += 1
  }
}, kd:A()});
gls2.gh = tm.createClass({superClass:gls2.Scene, oa:0, oi:r, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.on("enter", function() {
    gls2.Mb("gameover")
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.oa && !this.oi) && this.hf();
  this.oa += 1
}, kd:function(b) {
  b.clearColor("black")
}, oe:r, wait:r, Pg:l, hf:function() {
  if(!this.wait) {
    this.oi = j;
    var b = ["save score", "tweet result", "back to title"], a = ["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"];
    this.oe && (b.shift(), a.shift());
    I(this, "GAME OVER", b, this.jl, {defaultValue:this.oe ? 1 : 0, menuDescriptions:a, showExit:r})
  }
}, jl:function(b) {
  this.oe && (b += 1);
  0 === b ? this.oe || (this.wait = j, this.app.Mg(l, function(a, b, f) {
    this.wait = r;
    a ? this.ql(a) : b ? (this.oe = j, this.Pg = f, this.rl()) : this.hf()
  }.bind(this))) : 1 === b ? this.Dl() : this.app.replaceScene(gls2.TitleScene())
}, rl:function() {
  I(this, "SUCCESS!", ["ok"], function() {
    this.hf()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:r})
}, ql:function() {
  I(this, "ERROR!", ["ok"], function() {
    this.hf()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:r})
}, Dl:function() {
  var b = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({score:Math.floor(this.app.ca.score), stage:this.app.ca.Eb < gls2.ja.uh ? "Stage" + (this.app.ca.Eb + 1) : "ALL", type:"ABC"[this.app.ca.ea.type], style:["S", "L", "EX"][this.app.ca.ea.style], cont:this.app.ca.Gc}), b = tm.social.Twitter.createURL({type:"tweet", text:b, hashtags:gls2.ja.cj, url:this.Pg ? window.location.origin + "/ranking/" + this.Pg : window.location.origin});
  window.open(b, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
(function() {
  var b = "TM-Shooter;2D 'DANMAKU' Shooter on HTML5;;MUSIC;Underworld (select)  by  delf;Feel the universe (stage1)  by  delf;Herod (boss)  by  \u6dbc\u3005;Re-Birth (clear)  by  delf;Remenber (stage2)  by  Ryo;THE NEW CHALLENGER freeVer. (stage3)  by  delf;Aegis (stage4)  by  \u5cf6\u767d;Ancien Ocean (stage5)  by  delf;\u84bc\u3044\u6708 (ending)  by  delf;;SOUND;kouichi_axis;on_jin;;GAME ENGINE (tmlib.js);phi_jp;;PROGRAM AND GRAPHICS;minimo;daishi_hmr;;GEMERAL MANAGER;daishi_hmr;;special respect to...;DODONPACHI series by CAVE;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!".split(";");
  gls2.Wi = tm.createClass({superClass:gls2.Scene, la:l, ea:l, labels:l, wi:r, speed:0.5, Rh:r, gi:l, init:function() {
    this.superInit();
    this.gi = tm.display.CanvasElement().addChildTo(this);
    this.la = gls2.core.ca.la;
    this.la.addChildTo(this);
    this.la.direction = 0.5 * Math.PI;
    this.la.speed = 1;
    var a = this.ea = gls2.core.ca.ea;
    a.uc = r;
    a.setPosition(240, 448);
    a.ca = this.gi;
    [].concat(a.children).forEach(function(b) {
      b != a.sc && b.remove()
    });
    a.addChildTo(this);
    var d = a.x;
    a.on("enterframe", function() {
      0.2 < a.x - d ? a.Ua += 0.3 : -0.2 > a.x - d ? a.Ua -= 0.3 : 0 < a.x - d ? a.Ua += 0.11 : 0 > a.x - d && (a.Ua -= 0.11);
      d = a.x
    });
    var f = function() {
      a.tweener.clear().to({x:gls2.na.randf(48, 432), y:gls2.na.randf(128, 512)}, 6E3, "easeInOutQuad").call(f)
    }.bind(this);
    f();
    gls2.core.ca.Eb += 1;
    var g = this;
    this.labels = b.map(function(a, b) {
      return tm.display.Label(a, 16).setPosition(240, 640 + 64 * b).addChildTo(g).on("enterframe", function() {
        this.y -= g.speed;
        -192 > this.y && this.remove()
      })
    });
    this.tweener.wait(2E3).call(function() {
      gls2.Mb("bgmEnding", j, j);
      this.wi = j
    }.bind(this))
  }, $l:function() {
    0 === gls2.core.ca.ea.type ? gls2.core.xa("allclear0") : 1 === gls2.core.ca.ea.type ? gls2.core.xa("allclear1") : 2 === gls2.core.ca.ea.type && gls2.core.xa("allclear2")
  }, am:function() {
    this.la.addChildTo(gls2.core.ca)
  }, update:function(a) {
    a.keyboard.getKey("z") || a.keyboard.getKey("x") || a.keyboard.getKey("c") || this.wi && gls2.bb.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(a) {
      return!!a.parent
    }) ? this.speed = 8 : this.xl() : this.speed = 0.5
  }, xl:function() {
    this.Rh || (this.Rh = j, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 3E3).call(function() {
      gls2.ve();
      this.app.replaceScene(gls2.gh())
    }.bind(this)), this.la.tweener.clear().to({speed:9}, 2E3), this.ea.tweener.clear().wait(1E3).to({y:-192}, 2E3, "easeInQuad"))
  }, kd:A()})
})();
(function() {
  gls2.ha = tm.createClass({superClass:tm.display.CanvasElement, name:l, ea:l, ca:l, ue:l, sa:0, Sc:0, score:0, Jc:r, erase:r, star:1, Zk:r, Jb:j, Qa:r, frame:0, pf:l, direction:0, speed:0, ga:l, init:function(a, d, f) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Qa = r;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.Jb = j;
    this.ca = a;
    this.ea = a.ea;
    this.score = 100;
    this.erase = r;
    this.nk(f);
    d.setup(this);
    this.altitude = this.Jc ? 1 : 10;
    this.pf = {x:0, y:0}
  }, Kd:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, Yl:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Qa === r && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Qa = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Jc && (this.x += this.ca.la.Ga, this.y += this.ca.la.Ha);
    this.Qa && (this.frame += 1);
    this.pf.x = this.x - a;
    this.pf.y = this.y - b
  }, Hc:function(a) {
    if(!this.Qa) {
      return r
    }
    this.sa -= a;
    if(0 >= this.sa) {
      return a = gls2.na.randf(0, 5), 2 > a ? this.ca.ub("enemy destroy.") : 4 > a ? this.ca.ub(this.name + " destroy.") : this.ca.ub("ETR reaction gone."), this.erase && gls2.ia.erase(j, this.ca.La, this instanceof gls2.ud), this.dispatchEvent(tm.event.Event("destroy")), this.Fa(), "yukishiro" === this.name ? gls2.core.xa("mboss1") : "mishou" === this.name ? gls2.core.xa("mboss2") : "higashi" === this.name ? gls2.core.xa("mboss3") : "hishikawa" === this.name ? gls2.core.xa("mboss4") : "minamino" === 
      this.name ? gls2.core.xa("mboss5") : "misumi" === this.name ? gls2.core.xa("boss1") : "hyuga" === this.name ? gls2.core.xa("boss2") : "momozono" === this.name ? gls2.core.xa("boss3") : "aida" === this.name ? gls2.core.xa("boss4") : "hojo" === this.name && gls2.core.xa("boss5"), j
    }
    40 > this.sa && this.Ra();
    return r
  }, Fa:function() {
    gls2.ra.Ve(this.x, this.y, this.ca, this.pf);
    this.remove()
  }, ic:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, ml:function() {
    return this.Jb
  }, Ra:A(), nk:function(a) {
    this.name = a;
    a = gls2.ha.Si[a];
    this.sa = this.Sc = a[0];
    this.score = a[1];
    this.Jc = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, vc:function() {
    this.remove();
    this.ca.Sh.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Ve(this.x + gls2.na.rand(-100, 100), this.y + gls2.na.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.pg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Oe:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Ve(this.x + gls2.na.rand(-100, 100), this.y + gls2.na.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.pg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  gls2.ha.$d = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = gls2.ha.qb = []
})();
gls2.ud = tm.createClass({superClass:gls2.ha, Zk:j, Sc:0, kf:l, init:function(b, a, d) {
  this.kf = a;
  this.superInit(b, this.kf[0], d);
  this.Sc = this.sa;
  this.addEventListener("added", function() {
    this.ca.ec = this;
    this.ca.wl();
    this.tweener.wait(1E3).call(function() {
      this.ca.ce = r
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.ec = l;
    this.ca.Qk();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.uk()
    }.bind(this));
    a.addChildTo(this.ca.Wb)
  })
}, Hc:function(b) {
  var a = this.sa;
  if(gls2.ha.prototype.Hc.call(this, b)) {
    return this.ca.ce = j, this.ca.ea.Yd = r, gls2.We(), j
  }
  this.sa <= 0.55 * this.Sc && 0.55 * this.Sc < a ? (gls2.da.nf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Kb(this.x, this.y, this.ca), gls2.ia.erase(j, this.ca.La), this.kf[1].setup(this)) : this.sa <= 0.1 * this.Sc && 0.1 * this.Sc < a && (gls2.da.nf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Kb(this.x, this.y, this.ca), gls2.ia.erase(j, this.ca.La), this.kf[2].setup(this), gls2.ta("voJacms"))
}});
(function() {
  gls2.ha.Si = {kujo:[2, 300, r, r, 1, {radius:24}], kiryu:[3, 400, r, r, 1, {radius:24}], natsuki:[5, 900, j, r, 1, {radius:24}], kise:[50, 15E3, j, r, 1, {radius:24}], yamabuki:[100, 15E3, j, r, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, r, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, r, r, 5, {width:100, height:20}], kasugano:[6, 1E3, r, r, 1, {radius:24}], 
  kurokawa:[35, 5E3, r, r, 5, {width:100, height:20}], akimoto:[250, 3E5, r, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, r, j, 20, {width:180, heightBottom:40, heightTop:60}], aono:[250, 3E5, r, j, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, r, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, r, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, r, j, 20, {width:300, height:80}], higashi:[1500, 12E5, r, j, 20, {width:256, height:128}], momozono:[6E3, 
  35E5, r, j, 0, {width:256, height:128}], hyuga:[6E3, 3E6, r, j, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, r, j, 20, {radius:130}], aida:[8E3, 4E6, r, j, 0, {width:370, heightBottom:5, heightTop:60}], erika:[30, 500, r, r, 1, {width:24, height:48}], hino:[20, 500, r, r, 1, {width:24, height:48}], hoshizora_y:[100, 2E4, r, j, 30, {width:128, height:64}], hoshizora_t:[100, 2E4, r, j, 30, {width:128, height:64}], yotsuba:[300, 1E5, r, j, 30, {width:64, height:64}], yotsubaLeaf:[100, 3E4, r, 
  r, 10, {width:32, height:32}], midorikawa:[5, 1E3, r, r, 1, {width:32, height:32}], aoki:[5, 1200, r, r, 1, {width:32, height:32}]};
  gls2.ha.pa = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.fa = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.ea.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ha.Aa = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.fa = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.ea.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ha.ma = tm.createClass({superClass:gls2.ha, ag:l, cg:l, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.ag = b("tex_tank1", 64, 64);
    this.cg = b("tex_tank1", 64, 64);
    this.ed = this.ed || 0;
    this.tc = this.tc || 0
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    for(a = this.ed;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.tc;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.ag.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.cg.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.ag.draw(a);
    this.cg.draw(a)
  }, Fa:function() {
    gls2.ra.Ck(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.ah = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.fa = b("tex2", 256, 128).setFrameIndex(7)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Rb = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.fa = b("tex1", 64, 64).setFrameIndex(23)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Fb = tm.createClass({superClass:gls2.ha, fa:l, gg:l, init:function(a, d) {
    this.superInit(a, d, "kasugano");
    this.fa = b("tex1", 64, 64).setFrameIndex(23);
    this.rc = gls2.Va(80, 1, 0.8);
    this.gg = tm.geom.Vector2()
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && this.rc.clone().setPosition(this.x, this.y).addChildTo(this.ca);
    this.rotation = tm.geom.Vector2.sub(this.position, this.gg).toAngle() * gls2.na.RAD_TO_DEG - 90;
    this.gg.set(this.x, this.y)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Mc = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.fa = b("tex1", 128, 128).setFrameIndex(1)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Ec = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.fa = b("tex1", 256, 128).setFrameIndex(1)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.vc()
  }});
  gls2.ha.Sd = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "aono");
    this.fa = b("tex1", 256, 128);
    this.fa.srcRect.x = 128;
    this.fa.srcRect.y = 128;
    this.fa.srcRect.width = 256;
    this.fa.srcRect.height = 128;
    this.setScale(1.2);
    this.Gb = gls2.Va(70, 1, 0.97)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Gb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca), this.Gb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.vc()
  }});
  gls2.ha.yd = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "yumehara");
    this.fa = b("tex1", 256, 256);
    this.fa.srcRect.x = 128;
    this.fa.srcRect.y = 256;
    this.fa.srcRect.width = 256;
    this.fa.srcRect.height = 256
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.vc()
  }});
  gls2.ha.Na = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.fa = b("tex1", 64, 128).setFrameIndex(14)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Ge = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "hanasaki");
    this.fa = b("tex1", 64, 128).setFrameIndex(14)
  }, Ra:A(), Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.Cf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "myodoin");
    this.fa = b("tex1", 128, 128).setFrameIndex(12)
  }, Ra:A(), Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.mc = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.fa = b("tex1", 128, 256);
    this.fa.srcRect.x = 0;
    this.fa.srcRect.y = 128;
    this.fa.srcRect.width = 128;
    this.fa.srcRect.height = 256
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.uf = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "minazuki");
    this.fa = b("tex1", 128, 256);
    this.fa.srcRect.x = 0;
    this.fa.srcRect.y = 128;
    this.fa.srcRect.width = 128;
    this.fa.srcRect.height = 256;
    this.setScale(1.2)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Ka = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hino");
    this.fa = b("tex_stage3", 64, 32).setFrameIndex(0)
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.qa = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "midorikawa");
    this.fa = b("tex_stage3", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a)
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.vb = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "aoki");
    this.fa = b("tex_stage3", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a)
  }, draw:function(a) {
    this.fa.draw(a)
  }, Kd:function() {
    480 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.Md = this.y
  }});
  gls2.ha.od = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_y");
    this.fa = b("tex_stage3", 256, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Qa === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Qa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.vc()
  }, Kd:function() {
    480 < this.x && (this.velocityX *= -1, this.fa.scaleX = -1)
  }});
  gls2.ha.nd = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_t");
    this.fa = b("tex_stage3", 64, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Qa === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Qa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.vc()
  }, Kd:function() {
    240 < this.x && (this.velocityX *= -1)
  }});
  gls2.ha.qf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "yotsuba");
    this.fa = b("tex_stage3", 128, 128).setFrameIndex(1);
    this.boundingWidth = 128;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.pg(this.x, this.y, this.ca);
    this.vc();
    this.ca.md || gls2.Xi(this.x, this.y, this.ea).addChildTo(this.parent);
    this.remove();
    for(var a = 0;4 > a;a++) {
      this.Kc[a] && this.Kc[a].Fa()
    }
    delete this.Kc
  }, Kd:function() {
    this.Kc = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Kc[a] = this.ue.Bg({aa:gls2.ha.rf, ba:gls2.da.rf, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Kc[a].dir = b;
      this.Kc[a].mg = this;
      this.Kc[a].bl = a;
      this.Kc[a].distance = 64
    }
    gls2.ha.prototype.Kd.call(this);
    return this
  }});
  gls2.ha.rf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "yotsubaLeaf");
    this.fa = b("yotsubaLeaf", 64, 64).setFrameIndex(0);
    this.boundingWidth = 64;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a)
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    this.mg.Kc[this.bl] = l;
    this.remove()
  }});
  gls2.ha.Rd = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "erika");
    this.fa = b("tex3", 64, 128);
    this.fa.setFrameIndex(8)
  }, Ra:A(), draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    gls2.ra.Kb(this.x, this.y, this.ca);
    gls2.Li(this.x, this.y, this.ea).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ha.Af = tm.createClass({superClass:gls2.ha, fa:l, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.fa = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, Fa:function() {
    this.vc()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.Lf = tm.createClass({superClass:gls2.ud, fa:l, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.fa = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Fa:function() {
    this.Oe()
  }});
  gls2.ha.Hf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "mishou");
    this.fa = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Gb = gls2.Va(80, 1, 0.9);
    this.rc = gls2.Va(256, 1, 0.9)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Gb.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.Gb.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.rc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, Fa:function() {
    this.vc()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.Rj = tm.createClass({superClass:gls2.ud, init:function(a, d) {
    this.superInit(a, d, "hyuga");
    this.fa = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, Fa:function() {
    this.Oe()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.Vf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "higashi");
    this.fa = b("tex_stage3", 256, 128).setFrameIndex(2)
  }, Ra:A(), Fa:function() {
    this.vc()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.zj = tm.createClass({superClass:gls2.ud, init:function(a, d) {
    this.superInit(a, d, "momozono");
    this.fa = b("tex_stage3", 256, 128).setFrameIndex(4);
    this.fa.setScale(2)
  }, Ra:A(), Fa:function() {
    this.Oe()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.Rf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hishikawa");
    this.fa = b("tex2", 256, 256).setFrameIndex(2);
    this.fa.setScale(2);
    this.Gb = gls2.Va(60, 1, 0.95);
    this.rc = gls2.Va(500, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Gb.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Gb.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.rc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, Fa:function() {
    this.vc()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  gls2.ha.Cj = tm.createClass({superClass:gls2.ud, init:function(a, d) {
    this.superInit(a, d, "aida");
    this.fa = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Gb = gls2.Va(60, 1, 0.95);
    this.rc = gls2.Va(500, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Gb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Gb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Gb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Gb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.rc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.lb() : 5 === a.app.frame % 30 && this.fa.kb()
    })
  }, Fa:function() {
    this.Oe()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, Ug:l, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.Ug = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, lb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.Ug + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }, kb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.Ug;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }})
})();
(function() {
  gls2.da = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.da.nf(this)
    })
  }});
  gls2.da.Ca = function(a, b) {
    var g = gls2.ia[b].Se();
    a.on("enterframe", g);
    a.on("completeattack", function() {
      g.stop = j
    })
  };
  gls2.da.nf = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, g = a.length;b < g;b++) {
        a[b] && a[b].ug && (a[b].stop = j)
      }
    }
  };
  gls2.da.pa = tm.createClass({superClass:gls2.da, pattern:l, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.Cl = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    var b = this.pattern, g = this.Cl;
    a.on("launch", function() {
      var a = gls2.za.randf(640 * (g - 0.1), 640 * (g + 0.1));
      this.tweener.clear().wait(gls2.za.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.da.Ca(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.da.Dc = gls2.da.pa("basic0-0", 0.2);
  gls2.da.nb = gls2.da.pa("basic0-0", 0.4);
  gls2.da.xd = gls2.da.pa("basic0-0", 0.6);
  gls2.da.mb = gls2.da.pa("basic1-2", 0.2);
  gls2.da.Cc = gls2.da.pa("basic1-2", 0.4);
  gls2.da.wd = gls2.da.pa("basic1-2", 0.6);
  gls2.da.Aa = tm.createClass({superClass:gls2.da, Db:l, init:function(a) {
    this.superInit();
    this.Db = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Db = this.Db;
    a.tweener.wait(gls2.za.rand(0, 1E3)).call(function() {
      this.speed = 6;
      gls2.da.Ca(this, this.Db);
      this.on("enterframe", function() {
        this.y < this.ea.y && this.Qa && (this.angle += Math.atan2(this.ea.y - this.y, this.ea.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.na.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.ic() && this.Qa && this.remove();
        if(22500 > gls2.Ic(this, this.ea) || this.y > this.ea.y + 150) {
          this.Jb = r
        }
      })
    }.bind(a))
  }});
  gls2.da.ob = gls2.da.Aa("basic1-0");
  var b = tm.createClass({superClass:gls2.da, init:function(a, b, g) {
    this.superInit();
    this.Yk = a;
    this.Xk = b;
    this.Bd = g
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = this.Yk;
    a.ed = this.Xk;
    this.Bd && (a.Bd = [].concat(this.Bd));
    a.tc = 0;
    a.on("enter", function() {
      gls2.da.Ca(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.ed) * this.speed;
      this.y += Math.sin(this.ed) * this.speed;
      this.Qa && !this.ic() && this.remove();
      for(this.tc = Math.atan2(this.ea.y - this.y, this.ea.x - this.x);0 > this.tc;) {
        this.tc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.tc;) {
        this.tc -= 2 * Math.PI
      }
      this.Jb = this.y < this.ea.y && 4E4 < gls2.Ic(this, this.ea);
      if(this.Bd) {
        for(var a = 0;a < this.Bd.length;a++) {
          var b = this.Bd[a];
          b.frame === this.frame && this.tweener.to({ed:b.dir !== i ? b.dir : this.ed, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.da.oc = b(1, 0.25 * Math.PI);
  gls2.da.Jl = b(1, -1.75 * Math.PI);
  gls2.da.Ud = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.da.ua = b(1.6, 0.5 * Math.PI);
  gls2.da.pc = b(1.6, -0.5 * Math.PI);
  gls2.da.Ji = tm.createClass({superClass:gls2.da, Ma:l, init:function(a) {
    this.superInit();
    this.Ma = a
  }, setup:function(a) {
    gls2.da.Ca(a, this.Ma);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.da.bh = gls2.da.Ji("bukky-4-0");
  b = tm.createClass({superClass:gls2.da, Ma:l, Kh:r, init:function(a, b) {
    this.superInit();
    this.Ma = a;
    this.Kh = !!b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Ma = this.Ma;
    a.on("enter", function() {
      gls2.da.Ca(this, this.Ma)
    });
    a.on("enterframe", function() {
      this.Qa && !this.ic() && this.remove()
    });
    if(!this.Kh) {
      a.on("enterframe", function() {
        this.Jb = this.y < this.ea.y && 4E4 < gls2.Ic(this, this.ea)
      })
    }
  }});
  gls2.da.Pb = b("basic3-0", r);
  gls2.da.Qb = b("basic3-1", r);
  gls2.da.nc = b("cannon2-0", j);
  gls2.da.tf = b("cannon2-3", j);
  gls2.da.ye = b("cannon3-0", j);
  gls2.da.vf = b("cannon5-0", j);
  b = tm.createClass({superClass:gls2.da, velocityY:0, Ma:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ma = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ma];
    a.si = r;
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.da.Ca(this, this.ga[0]);
      this.si = j
    }.bind(a));
    a.on("enterframe", function() {
      this.si && (this.y += this.velocityY, 384 < this.y && gls2.da.nf(this), this.Qa && !this.ic() && this.remove(), this.Jb = this.y < this.ea.y)
    })
  }});
  gls2.da.$c = b(0.5, "kurokawa-1");
  gls2.da.Dj = b(0.5, "kurokawa-4");
  gls2.da.bd = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.Ca(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.Vd = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.Ca(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.Fb = tm.createClass({superClass:gls2.da, ki:0, direction:1, delay:0, init:function(a, b, g) {
    this.superInit();
    this.ki = a;
    this.direction = b;
    this.delay = g
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    tm.app.Tweener(a).wait(this.delay).call(function() {
      gls2.da.Ca(this, "basic1-3")
    }.bind(a));
    var b = 1 == this.direction;
    switch(this.ki) {
      case 0:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * (b ? 0.8 : 1 - 0.8)}, 2E3, "easeOutQuart");
        tm.app.Tweener(a).wait(this.delay).to({y:832}, 2500, "easeInQuad");
        break;
      case 1:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * (b ? 0.3 : 0.7)}, 5E3, "easeOutQuad");
        tm.app.Tweener(a).wait(this.delay).to({y:192}, 2500, "easeOutQuad").to({y:832}, 3E3, "easeInBack");
        break;
      case 2:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * (b ? 0.8 : 1 - 0.8)}, 2E3, "easeOutQuad").to({x:480 * (b ? 0.4 : 0.6)}, 1E3, "easeInOutQuad").to({x:480 * (b ? 0.6 : 0.4)}, 1E3, "easeInOutQuad"), tm.app.Tweener(a).wait(this.delay).to({y:192}, 2500, "easeOutQuad").to({y:832}, 3E3, "easeInBack")
    }
  }});
  var a = tm.createClass({superClass:gls2.da, velocityY:0, Ma:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ma = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0]);
      gls2.ra.Mk(this.x, this.y, this.ca)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Qa && !this.ic() && this.remove();
      this.Jb = this.y < this.ea.y
    })
  }});
  gls2.da.Ka = a(0.5, "akane");
  gls2.da.qa = tm.createClass({superClass:gls2.da, Db:l, init:function(a, b) {
    this.superInit();
    this.Db = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Db = this.Db;
    a.speed = this.speed;
    a.tweener.wait(gls2.za.rand(0, 1E3)).call(function() {
      gls2.da.Ca(this, this.Db);
      var a = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.ea.y && this.Qa && (this.angle += Math.atan2(this.ea.y - this.y, this.ea.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.na.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * a - 90;
        !this.ic() && this.Qa && this.remove();
        if(22500 > gls2.Ic(this, this.ea) || this.y > this.ea.y + 150) {
          this.Jb = r
        }
      })
    }.bind(a))
  }});
  gls2.da.rb = gls2.da.qa(3, 1);
  gls2.da.sb = gls2.da.qa(6, 1);
  gls2.da.tb = gls2.da.qa(12, 1);
  gls2.da.vb = tm.createClass({superClass:gls2.da, Db:l, init:function(a) {
    this.superInit();
    this.Db = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Db = this.Db;
    a.speed = this.speed;
    a.tweener.wait(gls2.za.rand(0, 1E3)).call(function() {
      gls2.da.Ca(this, this.Db);
      this.jc = 0;
      this.on("enterframe", function() {
        this.x += this.speed;
        this.y = this.Md + 16 * Math.sin(this.jc);
        this.jc += 0.05
      })
    }.bind(a))
  }});
  gls2.da.Yb = gls2.da.vb(1);
  gls2.da.em = gls2.da.vb(2);
  gls2.da.od = tm.createClass({superClass:gls2.da, velocityX:0, Ma:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ma = "miyuki_y"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Qa && !this.ic() && this.remove();
      this.Jb = this.y < this.ea.y
    })
  }});
  gls2.da.od = gls2.da.od(1);
  gls2.da.nd = tm.createClass({superClass:gls2.da, velocityX:0, Ma:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ma = "miyuki_t"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ma];
    a.pi = 0;
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      0 == this.pi ? (this.y += 0.5, 256 < this.y && this.pi++) : this.x += this.velocityX;
      this.Qa && !this.ic() && this.remove()
    })
  }});
  gls2.da.nd = gls2.da.nd(0.5);
  a = tm.createClass({superClass:gls2.da, velocityX:0, Ma:l, init:function() {
    this.superInit();
    this.Ma = "alice"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = 0.5;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Qa && !this.ic() && this.remove();
      this.Jb = this.y < this.ea.y
    })
  }});
  gls2.da.qf = a();
  a = tm.createClass({superClass:gls2.da, Ma:l, init:function() {
    this.superInit();
    this.Ma = "aliceLeaf"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Ca(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.mg.x, b = this.mg.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      this.fa.setFrameIndex(~~(11.25 * (~~(180 * Math.atan2(b - this.y, a - this.x) / 3.14159) / 360)), 64, 64);
      this.Qa && !this.ic() && this.remove();
      this.Jb = this.y < this.ea.y
    })
  }});
  gls2.da.rf = a();
  gls2.da.nh = b(0.3, "komachi-1");
  gls2.da.De = b(0.5, "komachi-2");
  gls2.da.Df = b(0.5, "komachi-4");
  gls2.da.Sd = tm.createClass({superClass:gls2.da, vi:0, init:function(a) {
    this.superInit();
    this.vi = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    tm.app.Tweener(a).to({x:480 * this.vi}, 2800, "easeOutQuad").call(function() {
      gls2.da.Ca(this, "mktn-5")
    }.bind(a));
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.da.Pf = b(0.1, "nozomi-4");
  gls2.da.Qf = b(0.3, "nozomi-5");
  gls2.da.Rd = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.Ca(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Jb = this.Qa
    })
  }});
  gls2.da.Rd = gls2.da.Rd();
  b = tm.createClass({superClass:gls2.da, ga:l, ef:0, init:function(a, b) {
    this.superInit();
    this.ga = a;
    this.ef = b || 1500
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.ef = this.ef;
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.fb === r || 0 >= this.sa) && this.ef < this.frame && this.Za === r) {
        this.Za = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Af = b(["honoka-1"]);
  gls2.da.Lf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Ej = gls2.da.Lf();
  gls2.da.Mf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Mf = gls2.da.Mf();
  gls2.da.Nf = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.sa || gls2.da.Ca(this, "nagisa-3-1")
    })
  }});
  gls2.da.Nf = gls2.da.Nf();
  gls2.da.Hf = b(["mai-1", "mai-2"]);
  gls2.da.Sf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Sf = gls2.da.Sf();
  gls2.da.Tf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Tf = gls2.da.Tf();
  gls2.da.Uf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Uf = gls2.da.Uf();
  a = tm.createClass({superClass:gls2.da, ga:l, init:function(a) {
    this.superInit();
    this.ga = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.fb === r || 0 >= this.sa) && 1500 < this.frame && this.Za === r) {
        this.Za = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Vf = a(["setsuna-1"]);
  gls2.da.Ef = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Ef = gls2.da.Ef();
  gls2.da.Ff = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Ff = gls2.da.Ff();
  gls2.da.Gf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Gf = gls2.da.Gf();
  gls2.da.Rf = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.da.If = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.fb = r;
    a.Za = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.fb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.za.randf(-48, 48);
        this.tweener.move(Math.clamp(this.ea.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.If = gls2.da.If();
  gls2.da.Jf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.4 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Jf = gls2.da.Jf();
  gls2.da.Kf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.za.random() * Math.PI, d = gls2.za.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ca(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Kf = gls2.da.Kf()
})();
(function() {
  var b = gls2.ha, a = gls2.da;
  gls2.fh = {"heri1-left":[{aa:b.Aa, ba:a.Dc, x:48, y:-100}, {aa:b.Aa, ba:a.nb, x:96, y:-100}, {aa:b.Aa, ba:a.Dc, x:144, y:-100}, {aa:b.Aa, ba:a.nb, x:192, y:-100}, {aa:b.Aa, ba:a.Dc, x:240, y:-100}], "heri1-center":[{aa:b.Aa, ba:a.Dc, x:144, y:-100}, {aa:b.Aa, ba:a.nb, x:192, y:-100}, {aa:b.Aa, ba:a.Dc, x:240, y:-100}, {aa:b.Aa, ba:a.nb, x:288, y:-100}, {aa:b.Aa, ba:a.Dc, x:336, y:-100}], "heri1-right":[{aa:b.Aa, ba:a.Dc, x:240, y:-100}, {aa:b.Aa, ba:a.nb, x:288, y:-100}, {aa:b.Aa, ba:a.Dc, x:336, 
  y:-100}, {aa:b.Aa, ba:a.nb, x:384, y:-100}, {aa:b.Aa, ba:a.Dc, x:432, y:-100}], "heri1-left2":[{aa:b.Aa, ba:a.nb, x:48, y:-100}, {aa:b.Aa, ba:a.xd, x:96, y:-100}, {aa:b.Aa, ba:a.nb, x:144, y:-100}, {aa:b.Aa, ba:a.xd, x:192, y:-100}, {aa:b.Aa, ba:a.nb, x:240, y:-100}], "heri1-center2":[{aa:b.Aa, ba:a.nb, x:144, y:-100}, {aa:b.Aa, ba:a.xd, x:192, y:-100}, {aa:b.Aa, ba:a.nb, x:240, y:-100}, {aa:b.Aa, ba:a.xd, x:288, y:-100}, {aa:b.Aa, ba:a.nb, x:336, y:-100}], "heri1-right2":[{aa:b.Aa, ba:a.nb, x:240, 
  y:-100}, {aa:b.Aa, ba:a.xd, x:288, y:-100}, {aa:b.Aa, ba:a.nb, x:336, y:-100}, {aa:b.Aa, ba:a.xd, x:384, y:-100}, {aa:b.Aa, ba:a.nb, x:432, y:-100}], "heri2-left":[{aa:b.pa, ba:a.ob, x:48, y:-100}, {aa:b.pa, ba:a.ob, x:96, y:-100}, {aa:b.pa, ba:a.ob, x:144, y:-100}, {aa:b.pa, ba:a.ob, x:192, y:-100}, {aa:b.pa, ba:a.ob, x:240, y:-100}], "heri2-center":[{aa:b.pa, ba:a.ob, x:144, y:-100}, {aa:b.pa, ba:a.ob, x:192, y:-100}, {aa:b.pa, ba:a.ob, x:240, y:-100}, {aa:b.pa, ba:a.ob, x:288, y:-100}, {aa:b.pa, 
  ba:a.ob, x:336, y:-100}], "heri2-right":[{aa:b.pa, ba:a.ob, x:240, y:-100}, {aa:b.pa, ba:a.ob, x:288, y:-100}, {aa:b.pa, ba:a.ob, x:336, y:-100}, {aa:b.pa, ba:a.ob, x:384, y:-100}, {aa:b.pa, ba:a.ob, x:432, y:-100}], "heri1-4-left":[{aa:b.pa, ba:a.mb, x:48, y:-100}, {aa:b.pa, ba:a.mb, x:96, y:-100}, {aa:b.pa, ba:a.mb, x:144, y:-100}, {aa:b.pa, ba:a.mb, x:192, y:-100}, {aa:b.pa, ba:a.mb, x:240, y:-100}], "heri1-4-center":[{aa:b.pa, ba:a.mb, x:144, y:-100}, {aa:b.pa, ba:a.mb, x:192, y:-100}, {aa:b.pa, 
  ba:a.mb, x:240, y:-100}, {aa:b.pa, ba:a.mb, x:288, y:-100}, {aa:b.pa, ba:a.mb, x:336, y:-100}], "heri1-4-right":[{aa:b.pa, ba:a.mb, x:240, y:-100}, {aa:b.pa, ba:a.mb, x:288, y:-100}, {aa:b.pa, ba:a.mb, x:336, y:-100}, {aa:b.pa, ba:a.mb, x:384, y:-100}, {aa:b.pa, ba:a.mb, x:432, y:-100}], "heri1-4-left2":[{aa:b.pa, ba:a.Cc, x:48, y:-100}, {aa:b.pa, ba:a.wd, x:96, y:-100}, {aa:b.pa, ba:a.Cc, x:144, y:-100}, {aa:b.pa, ba:a.wd, x:192, y:-100}, {aa:b.pa, ba:a.Cc, x:240, y:-100}], "heri1-4-center2":[{aa:b.pa, 
  ba:a.Cc, x:144, y:-100}, {aa:b.pa, ba:a.wd, x:192, y:-100}, {aa:b.pa, ba:a.Cc, x:240, y:-100}, {aa:b.pa, ba:a.wd, x:288, y:-100}, {aa:b.pa, ba:a.Cc, x:336, y:-100}], "heri1-4-right2":[{aa:b.pa, ba:a.Cc, x:240, y:-100}, {aa:b.pa, ba:a.wd, x:288, y:-100}, {aa:b.pa, ba:a.Cc, x:336, y:-100}, {aa:b.pa, ba:a.wd, x:384, y:-100}, {aa:b.pa, ba:a.Cc, x:432, y:-100}], "tankRD-left":[{aa:b.ma, ba:a.oc, x:78, y:-50}, {aa:b.ma, ba:a.oc, x:28, y:-100}, {aa:b.ma, ba:a.oc, x:-22, y:-150}, {aa:b.ma, ba:a.oc, x:-72, 
  y:-200}, {aa:b.ma, ba:a.oc, x:-122, y:-250}], "tankRD-center":[{aa:b.ma, ba:a.oc, x:222, y:-50}, {aa:b.ma, ba:a.oc, x:172, y:-100}, {aa:b.ma, ba:a.oc, x:122, y:-150}, {aa:b.ma, ba:a.oc, x:72, y:-200}, {aa:b.ma, ba:a.oc, x:22, y:-250}], "tankL-top":[{aa:b.ma, ba:a.Ud, x:550, y:64}, {aa:b.ma, ba:a.Ud, x:620, y:64}, {aa:b.ma, ba:a.Ud, x:690, y:64}, {aa:b.ma, ba:a.Ud, x:760, y:64}, {aa:b.ma, ba:a.Ud, x:830, y:64}], "tank5-left":[{aa:b.ma, ba:a.ua, x:48, y:-70}, {aa:b.ma, ba:a.ua, x:48, y:-140}, {aa:b.ma, 
  ba:a.ua, x:48, y:-210}, {aa:b.ma, ba:a.ua, x:48, y:-280}, {aa:b.ma, ba:a.ua, x:48, y:-350}], "tank5-center":[{aa:b.ma, ba:a.ua, x:240, y:-70}, {aa:b.ma, ba:a.ua, x:240, y:-140}, {aa:b.ma, ba:a.ua, x:240, y:-210}, {aa:b.ma, ba:a.ua, x:240, y:-280}, {aa:b.ma, ba:a.ua, x:240, y:-350}], "tank15-top":[{aa:b.ma, ba:a.ua, x:48, y:-70}, {aa:b.ma, ba:a.ua, x:48, y:-140}, {aa:b.ma, ba:a.ua, x:48, y:-210}, {aa:b.ma, ba:a.ua, x:48, y:-280}, {aa:b.ma, ba:a.ua, x:48, y:-350}, {aa:b.ma, ba:a.ua, x:240, y:-70}, 
  {aa:b.ma, ba:a.ua, x:240, y:-140}, {aa:b.ma, ba:a.ua, x:240, y:-210}, {aa:b.ma, ba:a.ua, x:240, y:-280}, {aa:b.ma, ba:a.ua, x:240, y:-350}, {aa:b.ma, ba:a.ua, x:432, y:-70}, {aa:b.ma, ba:a.ua, x:432, y:-140}, {aa:b.ma, ba:a.ua, x:432, y:-210}, {aa:b.ma, ba:a.ua, x:432, y:-280}, {aa:b.ma, ba:a.ua, x:432, y:-350}], "tank25-top":[{aa:b.ma, ba:a.ua, x:48, y:-70}, {aa:b.ma, ba:a.ua, x:48, y:-140}, {aa:b.ma, ba:a.ua, x:48, y:-210}, {aa:b.ma, ba:a.ua, x:48, y:-280}, {aa:b.ma, ba:a.ua, x:48, y:-350}, {aa:b.ma, 
  ba:a.ua, x:240, y:-70}, {aa:b.ma, ba:a.ua, x:240, y:-140}, {aa:b.ma, ba:a.ua, x:240, y:-210}, {aa:b.ma, ba:a.ua, x:240, y:-280}, {aa:b.ma, ba:a.ua, x:240, y:-350}, {aa:b.ma, ba:a.ua, x:432, y:-70}, {aa:b.ma, ba:a.ua, x:432, y:-140}, {aa:b.ma, ba:a.ua, x:432, y:-210}, {aa:b.ma, ba:a.ua, x:432, y:-280}, {aa:b.ma, ba:a.ua, x:432, y:-350}, {aa:b.ma, ba:a.pc, x:144, y:710}, {aa:b.ma, ba:a.pc, x:144, y:780}, {aa:b.ma, ba:a.pc, x:144, y:850}, {aa:b.ma, ba:a.pc, x:144, y:920}, {aa:b.ma, ba:a.pc, x:144, 
  y:990}, {aa:b.ma, ba:a.pc, x:336, y:710}, {aa:b.ma, ba:a.pc, x:336, y:780}, {aa:b.ma, ba:a.pc, x:336, y:850}, {aa:b.ma, ba:a.pc, x:336, y:920}, {aa:b.ma, ba:a.pc, x:336, y:990}], "bukky-4-r":[{aa:b.ah, ba:a.bh, x:480, y:-50}], "bukky-4-l":[{aa:b.ah, ba:a.bh, x:0, y:-50}], "cannon-0":[{aa:b.Na, ba:a.Pb, x:48, y:-100}], "cannon-1":[{aa:b.Na, ba:a.Pb, x:96, y:-100}], "cannon-2":[{aa:b.Na, ba:a.Pb, x:144, y:-100}], "cannon-3":[{aa:b.Na, ba:a.Pb, x:192, y:-100}], "cannon-4":[{aa:b.Na, ba:a.Pb, x:240, 
  y:-100}], "cannon-5":[{aa:b.Na, ba:a.Pb, x:288, y:-100}], "cannon-6":[{aa:b.Na, ba:a.Pb, x:336, y:-100}], "cannon-7":[{aa:b.Na, ba:a.Pb, x:384, y:-100}], "cannon-8":[{aa:b.Na, ba:a.Pb, x:432, y:-100}], "cannon-R0":[{aa:b.Na, ba:a.Pb, x:550, y:128}], "cannon-R1":[{aa:b.Na, ba:a.Pb, x:550, y:192}], "cannon-R2":[{aa:b.Na, ba:a.Pb, x:550, y:256}], "yayoi-0":[{aa:b.Na, ba:a.Qb, x:48, y:-100}], "yayoi-1":[{aa:b.Na, ba:a.Qb, x:96, y:-100}], "yayoi-2":[{aa:b.Na, ba:a.Qb, x:144, y:-100}], "yayoi-3":[{aa:b.Na, 
  ba:a.Qb, x:192, y:-100}], "yayoi-4":[{aa:b.Na, ba:a.Qb, x:240, y:-100}], "yayoi-5":[{aa:b.Na, ba:a.Qb, x:288, y:-100}], "yayoi-6":[{aa:b.Na, ba:a.Qb, x:336, y:-100}], "yayoi-7":[{aa:b.Na, ba:a.Qb, x:384, y:-100}], "yayoi-8":[{aa:b.Na, ba:a.Qb, x:432, y:-100}], "yayoi-R0":[{aa:b.Na, ba:a.Qb, x:550, y:128}], "yayoi-R1":[{aa:b.Na, ba:a.Qb, x:550, y:192}], "yayoi-R2":[{aa:b.Na, ba:a.Qb, x:550, y:256}], "tsubomi-0":[{aa:b.Ge, ba:a.ye, x:96, y:-100}], "tsubomi-1":[{aa:b.Ge, ba:a.ye, x:240, y:-100}], 
  "tsubomi-2":[{aa:b.Ge, ba:a.ye, x:384, y:-100}], "tsubomi-R0":[{aa:b.Ge, ba:a.ye, x:580, y:128}], "itsuki-0":[{aa:b.Cf, ba:a.vf, x:96, y:-100}], "itsuki-1":[{aa:b.Cf, ba:a.vf, x:240, y:-100}], "itsuki-2":[{aa:b.Cf, ba:a.vf, x:384, y:-100}], "makoto-0":[{aa:b.mc, ba:a.nc, x:48, y:-100}], "makoto-1":[{aa:b.mc, ba:a.nc, x:96, y:-100}], "makoto-2":[{aa:b.mc, ba:a.nc, x:144, y:-100}], "makoto-3":[{aa:b.mc, ba:a.nc, x:192, y:-100}], "makoto-4":[{aa:b.mc, ba:a.nc, x:240, y:-100}], "makoto-5":[{aa:b.mc, 
  ba:a.nc, x:288, y:-100}], "makoto-6":[{aa:b.mc, ba:a.nc, x:336, y:-100}], "makoto-7":[{aa:b.mc, ba:a.nc, x:384, y:-100}], "makoto-8":[{aa:b.mc, ba:a.nc, x:432, y:-100}], "makoto-R0":[{aa:b.mc, ba:a.nc, x:580, y:128}], "karen-3-2":[{aa:b.uf, ba:a.tf, x:96, y:-100}], "karen-3-5":[{aa:b.uf, ba:a.tf, x:240, y:-100}], "karen-3-8":[{aa:b.uf, ba:a.tf, x:384, y:-100}], "fighter-m-0":[{aa:b.Mc, ba:a.$c, x:96, y:-192}], "fighter-m-1":[{aa:b.Mc, ba:a.$c, x:144, y:-192}], "fighter-m-2":[{aa:b.Mc, ba:a.$c, 
  x:192, y:-192}], "fighter-m-3":[{aa:b.Mc, ba:a.$c, x:240, y:-192}], "fighter-m-4":[{aa:b.Mc, ba:a.$c, x:288, y:-192}], "fighter-m-5":[{aa:b.Mc, ba:a.$c, x:336, y:-192}], "fighter-m-6":[{aa:b.Mc, ba:a.$c, x:384, y:-192}], "fighter-m4-0":[{aa:b.Mc, ba:a.Dj, x:96, y:-192}], "tsukikage-r":[{aa:b.Rb, ba:a.bd(700), x:624, y:256}, {aa:b.Rb, ba:a.bd(600), x:720, y:256}, {aa:b.Rb, ba:a.bd(500), x:576, y:320}, {aa:b.Rb, ba:a.bd(400), x:672, y:320}, {aa:b.Rb, ba:a.bd(300), x:768, y:320}, {aa:b.Rb, ba:a.bd(200), 
  x:624, y:384}, {aa:b.Rb, ba:a.bd(100), x:720, y:384}], "tsukikage-l":[{aa:b.Rb, ba:a.Vd(700), x:-144, y:384}, {aa:b.Rb, ba:a.Vd(600), x:-240, y:384}, {aa:b.Rb, ba:a.Vd(500), x:-96, y:320}, {aa:b.Rb, ba:a.Vd(400), x:-192, y:320}, {aa:b.Rb, ba:a.Vd(200), x:-144, y:256}], "urara5-0":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Fb, ba:a.Fb(0, 1, 200 * f), x:-144, y:128})
    }
    return d
  }(), "urara5-1":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Fb, ba:a.Fb(0, -1, 200 * f), x:624, y:128})
    }
    return d
  }(), "urara5-2":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Fb, ba:a.Fb(1, 1, 200 * f), x:-144, y:512})
    }
    return d
  }(), "urara5-3":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Fb, ba:a.Fb(1, -1, 200 * f), x:624, y:512})
    }
    return d
  }(), "urara5-4":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Fb, ba:a.Fb(2, 1, 200 * f), x:-144, y:512})
    }
    return d
  }(), "urara5-5":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Fb, ba:a.Fb(2, -1, 200 * f), x:624, y:512})
    }
    return d
  }(), "komachi-0":[{aa:b.Ec, ba:a.nh, x:144, y:-192}], "komachi-1":[{aa:b.Ec, ba:a.nh, x:336, y:-192}], "komachi2-0":[{aa:b.Ec, ba:a.De, x:144, y:-192}], "komachi2-1":[{aa:b.Ec, ba:a.De, x:336, y:-192}], "komachi3-0":[{aa:b.Ec, ba:a.De, x:144, y:-192}], "komachi3-1":[{aa:b.Ec, ba:a.De, x:336, y:-192}], "komachi4-0":[{aa:b.Ec, ba:a.Df, x:144, y:-192}], "komachi4-1":[{aa:b.Ec, ba:a.Df, x:336, y:-192}], "komachi4-2":[{aa:b.Ec, ba:a.Df, x:240, y:-192}], "nozomi4-0":[{aa:b.yd, ba:a.Pf, x:144, y:-192}], 
  "nozomi4-1":[{aa:b.yd, ba:a.Pf, x:240, y:-192}], "nozomi4-2":[{aa:b.yd, ba:a.Pf, x:336, y:-192}], "nozomi5-0":[{aa:b.yd, ba:a.Qf, x:144, y:-320}], "nozomi5-1":[{aa:b.yd, ba:a.Qf, x:240, y:-192}], "nozomi5-2":[{aa:b.yd, ba:a.Qf, x:336, y:-320}], "mktn5-0":[{aa:b.Sd, ba:a.Sd(0.6), x:624, y:128}], "mktn5-1":[{aa:b.Sd, ba:a.Sd(0.4), x:-144, y:320}], "akane-center":[{aa:b.Ka, ba:a.Ka, x:144, y:130}, {aa:b.Ka, ba:a.Ka, x:192, y:80}, {aa:b.Ka, ba:a.Ka, x:240, y:140}, {aa:b.Ka, ba:a.Ka, x:288, y:80}, {aa:b.Ka, 
  ba:a.Ka, x:336, y:130}], "akane-right":[{aa:b.Ka, ba:a.Ka, x:384, y:160}, {aa:b.Ka, ba:a.Ka, x:288, y:120}, {aa:b.Ka, ba:a.Ka, x:288, y:80}, {aa:b.Ka, ba:a.Ka, x:384, y:40}], "akane-left":[{aa:b.Ka, ba:a.Ka, x:96, y:160}, {aa:b.Ka, ba:a.Ka, x:144, y:120}, {aa:b.Ka, ba:a.Ka, x:144, y:80}, {aa:b.Ka, ba:a.Ka, x:96, y:40}], "nao1-left":[{aa:b.qa, ba:a.rb, x:48, y:-100}, {aa:b.qa, ba:a.rb, x:96, y:-100}, {aa:b.qa, ba:a.rb, x:144, y:-100}, {aa:b.qa, ba:a.rb, x:192, y:-100}, {aa:b.qa, ba:a.rb, x:240, 
  y:-100}], "nao1-right":[{aa:b.qa, ba:a.rb, x:240, y:-100}, {aa:b.qa, ba:a.rb, x:288, y:-100}, {aa:b.qa, ba:a.rb, x:336, y:-100}, {aa:b.qa, ba:a.rb, x:384, y:-100}, {aa:b.qa, ba:a.rb, x:432, y:-100}], "nao1-center":[{aa:b.qa, ba:a.rb, x:144, y:-100}, {aa:b.qa, ba:a.rb, x:192, y:-100}, {aa:b.qa, ba:a.rb, x:240, y:-100}, {aa:b.qa, ba:a.rb, x:288, y:-100}, {aa:b.qa, ba:a.rb, x:336, y:-100}], "nao2-left":[{aa:b.qa, ba:a.sb, x:48, y:-100}, {aa:b.qa, ba:a.sb, x:96, y:-100}, {aa:b.qa, ba:a.sb, x:144, y:-100}, 
  {aa:b.qa, ba:a.sb, x:192, y:-100}, {aa:b.qa, ba:a.sb, x:240, y:-100}], "nao2-right":[{aa:b.qa, ba:a.sb, x:240, y:-100}, {aa:b.qa, ba:a.sb, x:288, y:-100}, {aa:b.qa, ba:a.sb, x:336, y:-100}, {aa:b.qa, ba:a.sb, x:384, y:-100}, {aa:b.qa, ba:a.sb, x:432, y:-100}], "nao2-center":[{aa:b.qa, ba:a.sb, x:144, y:-100}, {aa:b.qa, ba:a.sb, x:192, y:-100}, {aa:b.qa, ba:a.sb, x:240, y:-100}, {aa:b.qa, ba:a.sb, x:288, y:-100}, {aa:b.qa, ba:a.sb, x:336, y:-100}], "nao3-left":[{aa:b.qa, ba:a.tb, x:48, y:-100}, 
  {aa:b.qa, ba:a.tb, x:96, y:-100}, {aa:b.qa, ba:a.tb, x:144, y:-100}, {aa:b.qa, ba:a.tb, x:192, y:-100}, {aa:b.qa, ba:a.tb, x:240, y:-100}], "nao3-right":[{aa:b.qa, ba:a.tb, x:240, y:-100}, {aa:b.qa, ba:a.tb, x:288, y:-100}, {aa:b.qa, ba:a.tb, x:336, y:-100}, {aa:b.qa, ba:a.tb, x:384, y:-100}, {aa:b.qa, ba:a.tb, x:432, y:-100}], "nao3-center":[{aa:b.qa, ba:a.tb, x:144, y:-100}, {aa:b.qa, ba:a.tb, x:192, y:-100}, {aa:b.qa, ba:a.tb, x:240, y:-100}, {aa:b.qa, ba:a.tb, x:288, y:-100}, {aa:b.qa, ba:a.tb, 
  x:336, y:-100}], "reika1-left":[{aa:b.vb, ba:a.Yb, x:-48, y:64}, {aa:b.vb, ba:a.Yb, x:-72, y:128}, {aa:b.vb, ba:a.Yb, x:-96, y:64}, {aa:b.vb, ba:a.Yb, x:-120, y:128}, {aa:b.vb, ba:a.Yb, x:-144, y:64}, {aa:b.vb, ba:a.Yb, x:-168, y:128}], "reika1-right":[{aa:b.vb, ba:a.Yb, x:528, y:64}, {aa:b.vb, ba:a.Yb, x:552, y:128}, {aa:b.vb, ba:a.Yb, x:576, y:64}, {aa:b.vb, ba:a.Yb, x:600, y:128}, {aa:b.vb, ba:a.Yb, x:624, y:64}, {aa:b.vb, ba:a.Yb, x:648, y:128}], miyuki_y1:[{aa:b.od, ba:a.od, x:-256, y:140}], 
  miyuki_y2:[{aa:b.od, ba:a.od, x:608, y:60}], miyuki_t1:[{aa:b.nd, ba:a.nd, x:336, y:-128}], miyuki_t2:[{aa:b.nd, ba:a.nd, x:144, y:-128}], alice:[{aa:b.qf, ba:a.qf, x:240, y:-64}], erika:[{aa:b.Rd, ba:a.Rd, x:240, y:-100}], yukishiro:[{aa:b.Af, ba:a.Af, x:240, y:-100}], misumi:[{aa:b.Lf, ba:[a.Ej, a.Mf, a.Nf], x:240, y:-100, ec:j}], mai:[{aa:b.Hf, ba:a.Hf, x:780, y:128}], hyuga:[{aa:b.Rj, ba:[a.Sf, a.Tf, a.Uf], x:240, y:-100, ec:j}], higashi:[{aa:b.Vf, ba:a.Vf, x:780, y:128}], momozono:[{aa:b.zj, 
  ba:[a.Ef, a.Ff, a.Gf], x:240, y:-100, ec:j}], rikka:[{aa:b.Rf, ba:a.Rf, x:240, y:-100}], mana:[{aa:b.Cj, ba:[a.If, a.Jf, a.Kf], x:240, y:-100, ec:j}]}
})();
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, g, k, m) {
    return c.action([c.fire(c.direction(b, "absolute"), f, g || u, k, m), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || u, k, m)])])
  }
  function d(a, b, c, d, g) {
    return function(k) {
      return f(a, b, c, k, d, g, i, i)
    }
  }
  function f(a, b, d, f, g, k, m, n) {
    return c.action([c.fire(c.direction(b), f, g || u, k, m, n), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, g || u, k, m, n)])])
  }
  function g(a) {
    return c.fire(c.direction(0), a || n, E)
  }
  function m(a) {
    return c.fire(c.direction(0), a || n, u)
  }
  function q(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function v(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function w(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function n(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function G(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function k(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function N(a) {
    return c.Ia(a, {frame:3, le:j})
  }
  function O(a) {
    return c.Ia(a, {frame:2, le:j})
  }
  function C(a) {
    return c.Ia(a, {visible:r})
  }
  function B(a) {
    return c.Ia(a, {frame:4, dc:j})
  }
  function J(a) {
    return c.Ia(a, {frame:3})
  }
  function u(a) {
    return c.Ia(a, {frame:1})
  }
  function t(a) {
    return c.Ia(a, {frame:2})
  }
  function E(a) {
    return c.Ia(a, {frame:0})
  }
  function D(a) {
    return c.Ia(a, {frame:3, dc:j})
  }
  function K(a) {
    return c.Ia(a, {frame:1, dc:j})
  }
  function z(a) {
    return c.Ia(a, {frame:2, dc:j})
  }
  function F(a) {
    return c.Ia(a, {frame:0, dc:j})
  }
  gls2.ia = {};
  var c = H.Ja;
  gls2.ia["basic0-0"] = new H.ka({top:c.action([m])});
  gls2.ia["basic0-1"] = new H.ka({top:c.action([b(w, -0.01, 8, d(3, -15, 15))])});
  gls2.ia["basic1-0"] = new H.ka({top:c.action([c.repeat(999, [k(40), m(n)])])});
  gls2.ia["basic1-1"] = new H.ka({top:c.action([c.repeat(999, [k(20), m(n)])])});
  gls2.ia["basic1-2"] = new H.ka({top:c.action([k("10+$rand*100"), f(3, -20, 20, n)])});
  gls2.ia["basic1-3"] = new H.ka({top:c.action([c.repeat(999, [k("20+$rand*80"), f(3, -20, 20, n)])])});
  gls2.ia["basic2-0"] = new H.ka({top:c.action([c.repeat(999, [k(50), m(n)])])});
  gls2.ia["basic3-0"] = new H.ka({top:c.action([c.wait(20), c.repeat(999, [k(100), b(n, 0.1, 3, g)])])});
  gls2.ia["basic3-1"] = new H.ka({top:c.action([c.wait(20), c.repeat(999, [k(40), b(n, 0.1, 3, g)])])});
  gls2.ia["bukky-4-0"] = new H.ka({top0:c.action([k(30), c.repeat(999, [c.fire(c.direction(-40), n, z), c.repeat(3, [c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(-80, "sequence"), n, z), k(5)]), k(70)])]), top1:c.action([k(20), c.fire(c.direction(180, "absolute"), p, K), c.repeat(999, [c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), 
  p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(-90, "sequence"), p, K), k(5)])])});
  gls2.ia["cannon2-0"] = new H.ka({top0:c.action([c.repeat(999, [k(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", p), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", p), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", p), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", p), k(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", n), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", n), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", n), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", n)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), s, B), c.fire(c.direction(" 90+$loop.index*10", "absolute"), s, B), c.fire(c.direction("180+$loop.index*10", "absolute"), s, B), c.fire(c.direction("270+$loop.index*10", "absolute"), s, B), c.fire(c.direction("  0-$loop.index*10", "absolute"), s, B), c.fire(c.direction(" 90-$loop.index*10", "absolute"), s, B), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), s, B), c.fire(c.direction("270-$loop.index*10", "absolute"), s, B), k(10)])]), top2:c.action([c.repeat(999, [k(43), f(30, 0, 348, n, E)])])});
  gls2.ia["cannon2-3"] = new H.ka({top0:c.action([c.repeat(999, [c.Ea("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), C(c.va("ivs0", "$d")))]), k(10), c.fire(c.direction(39, "sequence"), c.speed(1), C(c.va("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.Ea("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), C(c.va("ivs1", "$d")))]), k(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), C(c.va("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, E), c.Xa()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), p, function(a) {
    return c.Ia(a, {frame:7, dc:j})
  }), c.fire(c.direction("$1+5", "relative"), p, function(a) {
    return c.Ia(a, {frame:6, dc:j})
  }), c.Xa()])});
  gls2.ia["cannon3-0"] = new H.ka({top0:c.action([c.repeat(999, [k(80), b(p, 0.01, 5, d(5, -30, 30, E, c.offsetX(-60))), b(p, 0.01, 5, d(5, -30, 30, E)), b(p, 0.01, 5, d(5, -30, 30, E, c.offsetX(60)))])])});
  gls2.ia["cannon4-0"] = new H.ka({top0:c.action([k(20), c.repeat(999, [c.fire(p, z), c.repeat(8, [k(10), c.Ea("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), p, z), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), p, z)])]), k(120)])])});
  gls2.ia["cannon5-0"] = new H.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), q, C(c.va("b"))), c.repeat(11, [k(5), c.fire(c.direction(10, "sequence"), q, C(c.va("b")))]), k(60)])]), b:c.action([c.wait(5), c.Qe(c.speed(0), 0), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, u)
  }), c.Xa])});
  gls2.ia["yuri-4"] = new H.ka({top:c.action([k(60), c.repeat(7, [a(7, 120, 240, s, E), k(8)])])});
  gls2.ia["kurokawa-1"] = new H.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return f(4, -45, 45, a, t, c.offsetX(-45), c.wa(j))
  }), b(n, -0.01, 4, function(a) {
    return f(4, -45, 45, a, t, c.offsetX(45), c.wa(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.wa(j)), k(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.wa(j)), k(45)])])});
  gls2.ia["kurokawa-4"] = new H.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return f(4, -45, 45, a, t, c.offsetX(-45), c.wa(j))
  }), b(n, -0.01, 4, function(a) {
    return f(4, -45, 45, a, t, c.offsetX(45), c.wa(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.wa(j)), k(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.wa(j)), k(45)])])});
  gls2.ia["komachi-1"] = new H.ka({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40)), c.repeat(57, [k(8), c.fire(c.direction(-720 / 57, "sequence"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, 
  [c.fire(c.direction(-210, "absolute"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40)), c.repeat(57, [k(8), c.fire(c.direction(720 / 57, "sequence"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), n(0), F, c.offsetX(-110), c.wa(j)), c.repeat(6, 
  [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), F, c.offsetX(-110), c.wa(j))]), k(10), c.fire(c.direction(0), n(0), F, c.offsetX(110), c.wa(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), F, c.offsetX(110), c.wa(j))]), k(10)])])});
  gls2.ia["komachi-2"] = new H.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([f(4, -45, 45, a, t, c.offsetX(-45), c.wa(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), f(4, -45, 45, a, t, c.offsetX(45), c.wa(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), k(1)])
  }), k(180)])])});
  gls2.ia["komachi-3"] = new H.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([f(6, -60, 60, a, t, c.offsetX(-45), c.wa(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), f(6, -60, 60, a, t, c.offsetX(45), c.wa(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), k(1)])
  }), k(180)])])});
  gls2.ia["komachi-4"] = new H.ka({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), n, J, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, J, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, J, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), n, J, c.offsetX(45)), k(4)]), k(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), n(5), F, c.offsetX(-110), c.wa(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), n(5), F, c.offsetX(-110), c.wa(j))]), k(30), c.fire(c.direction(0), n(5), F, c.offsetX(110), c.wa(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), n(5), F, c.offsetX(110), c.wa(j))]), k(30)])])});
  gls2.ia["nozomi-4"] = new H.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.Ea("c", "2+$loop.index"), f("$c", "-4-($c-2)*4", "4+($c-2)*4", G("(560-$c*40)*0.03"), D, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), C(c.va("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, E, c.offsetX(-50)), c.wait(3)])
  }), k(90), c.fire(c.direction(-40), C(c.va("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, E, c.offsetX(50)), c.wait(3)])
  }), k(90)])]), noop:c.action([c.wait(1), c.Xa])});
  gls2.ia["nozomi-5"] = new H.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(6, [c.Ea("c", "2+$loop.index"), f("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), f("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), f("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), f("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", G("(560-$c*40)*0.02"), D, c.offsetY(-50))]), k(150), c.repeat(6, [c.Ea("c", "2+$loop.index"), 
  f("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), f("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), f("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), f("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), f("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", G("(560-$c*40)*0.02"), z, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(5), 
  C(c.va("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(-1, "sequence"), a, E, c.offsetX(-50)), k(3)])
  }), c.fire(c.direction(-5), C(c.va("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(1, "sequence"), a, E, c.offsetX(50)), k(3)])
  })])]), noop:c.action([c.wait(1), c.Xa])});
  gls2.ia["mktn-5"] = new H.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(0), s, C(c.va("noop"))), c.repeat(20, [c.fire(c.direction(0.5, "sequence"), c.speed(0.08, "sequence"), t), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), t)]), k(6)]), c.fire(c.direction(0), s, C(c.va("noop"))), c.repeat(20, [c.fire(c.direction(-0.5, "sequence"), c.speed(0.08, "sequence"), t), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), t)]), k(6)]), k(90)])]), 
  top1:c.action([c.repeat(999, [c.fire(c.direction(0, "absolute"), n, C(c.va("noop"))), c.repeat(5, [c.fire(c.direction(-10, "sequence"), c.speed(0.05, "sequence"), B), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), B)]), k(5)]), c.fire(c.direction(0, "absolute"), n, C(c.va("noop"))), c.repeat(5, [c.fire(c.direction(10, "sequence"), c.speed(0.05, "sequence"), B), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), B)]), k(5)]), k(40)])]), noop:c.action([c.wait(1), 
  c.Xa])});
  gls2.ia.akane = new H.ka({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [k(60), f(1, 1, 1, s, t, c.offsetX(-16), c.offsetY(6), c.wa(j)), f(1, 1, 1, s, t, c.offsetX(16), c.offsetY(6), c.wa(j))]), k(120)])])});
  gls2.ia["nao-1"] = new H.ka({top:c.action([c.repeat(999, [k(30), c.fire(c.direction(0), w, D)])])});
  gls2.ia["nao-2"] = new H.ka({top:c.action([c.repeat(999, [k(30), f(2, -5, 5, w, D, c.offsetX(0), c.offsetY(0), c.wa(j))])])});
  gls2.ia["nao-3"] = new H.ka({top:c.action([c.repeat(999, [k(30), f(2, -1, 1, w, D, c.offsetX(0), c.offsetY(0), c.wa(j))])])});
  gls2.ia.reika = new H.ka({top:c.action([c.repeat(999, [k(30), c.fire(c.direction(0), n, z)])])});
  gls2.ia.miyuki_y = new H.ka({top:c.action([c.wait("40"), c.repeat(999, [k(30), f(3, -45, 45, s, t, c.offsetX(-64), c.offsetY(16), c.wa(j)), f(3, -45, 45, s, t, c.offsetX(0), c.offsetY(16), c.wa(j)), f(3, -45, 45, s, t, c.offsetX(16), c.offsetY(16), c.wa(j)), f(3, -45, 45, s, t, c.offsetX(32), c.offsetY(16), c.wa(j)), b(s, 0.0010, 5, function(a) {
    return c.action([f(3, "-45", "+45", a, z, c.offsetX(0), c.offsetY(0))])
  })])])});
  gls2.ia.miyuki_t = new H.ka({top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(3, [a(3, -20, 20, n, z, c.offsetX(32), c.offsetY(32)), k(30)]), c.repeat(3, [a(3, -10, 10, n, z, c.offsetX(-32), c.offsetY(-32)), k(30)]), c.repeat(3, [a(3, -5, 5, n, z, c.offsetX(-16), c.offsetY(-16)), k(30)]), k(120)])]), top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [a(5, -30, 30, n, z, c.offsetX(-32), c.offsetY(32)), k(45)]), c.repeat(5, [a(5, -30, 30, n, z, c.offsetX(32), c.offsetY(32)), k(45)]), k(120)])])});
  gls2.ia.alice = new H.ka({top0:c.action([c.repeat(999, [a(8, 0, 180, s, z), a(8, 0, -180, s, z), k(60), a(9, 0, 180, s, D), a(9, 0, -180, s, D), k(60)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(5, "sequence"), s, F, c.offsetX(0), c.wa(j)), k(10)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(10, "sequence"), p, K, c.offsetX(0), c.wa(j)), k(10)])])});
  gls2.ia.aliceLeaf = new H.ka({top:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(10, "sequence"), n(5), B, c.offsetX(0), c.wa(j)), k(10)])])});
  gls2.ia["honoka-1"] = new H.ka({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, p, B, c.offsetX(0), c.offsetY(30)), k(30), f(5, -40, 40, s, B, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, p(0.6), u), f(3, -3, 3, p(1), u), f(4, -4, 4, p(1.4), u), f(5, -5, 5, p(1.8), u), k(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, s, F, c.offsetX(-110), c.offsetY(-70)), k(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, s, F, c.offsetX(110), 
  c.offsetY(-70)), k(30)])])});
  gls2.ia["nagisa-1-1"] = new H.ka({top0:c.action([k(90), c.repeat(3, [c.Ea("way", "5 + $loop.index*6"), b(n, 0.01, "3 + $loop.index*2", function(a) {
    return c.action([f("$way", -110, 110, a, u, c.offsetX(-190), c.offsetY(-20)), f("$way", -110, 110, a, u, c.offsetX(190), c.offsetY(-20)), c.wait(10)])
  }), k(60)]), k(60)])});
  gls2.ia["nagisa-1-2"] = new H.ka({top0:c.action([c.repeat(12, [f(15, -90, 90, s, u), k(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [f(5, -65, -55, p, F, c.offsetX(-190), c.offsetY(-20)), f(5, -35, -25, p, F, c.offsetX(-190), c.offsetY(-20)), f(5, -5, 5, p, F, c.offsetX(-190), c.offsetY(-20)), f(5, 25, 35, p, F, c.offsetX(-190), c.offsetY(-20)), f(5, 55, 65, p, F, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), k(60), c.repeat(3, [f(5, -65, -55, p, F, c.offsetX(190), c.offsetY(-20)), f(5, -35, 
  -25, p, F, c.offsetX(190), c.offsetY(-20)), f(5, -5, 5, p, F, c.offsetX(190), c.offsetY(-20)), f(5, 25, 35, p, F, c.offsetX(190), c.offsetY(-20)), f(5, 55, 65, p, F, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), k(60)])])});
  gls2.ia["nagisa-1-3"] = new H.ka({top0:c.action([k(60), c.repeat(3, [c.fire(c.direction(-60), p, t, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(6, "sequence"), p, t, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([k(80), c.repeat(3, [c.fire(c.direction(60), p, t, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(-6, "sequence"), p, t, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [f(5, -60, -40, p, B, c.offsetX(-190), 
  c.offsetY(-20)), f(5, -20, -10, p, B, c.offsetX(-190), c.offsetY(-20)), f(5, 10, 20, p, B, c.offsetX(-190), c.offsetY(-20)), f(5, 40, 60, p, B, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), k(60), c.repeat(3, [f(5, -60, -40, p, B, c.offsetX(190), c.offsetY(-20)), f(5, -20, -10, p, B, c.offsetX(190), c.offsetY(-20)), f(5, 10, 20, p, B, c.offsetX(190), c.offsetY(-20)), f(5, 40, 60, p, B, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), k(60)])])});
  gls2.ia["nagisa-2-1"] = new H.ka({top0:c.action([k(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", s, E, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", s, E, c.offsetX(190), c.offsetY(-20)), k(10)])]), top1:c.action([k(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", p, D), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", p, D), k(12)])])});
  gls2.ia["nagisa-2-2"] = new H.ka({top0:c.action([k(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", n, D), k(12)])]), top1:c.action([k(120), c.repeat(6, [a(9, 150, 130, s(0.8), u), a(9, 172, 188, s(0.8), u), a(9, 210, 230, s(0.8), u), k(30), a(9, 170, 150, s(0.8), u), a(9, 190, 210, s(0.8), u), k(30)])])});
  gls2.ia["nagisa-2-3"] = new H.ka({top:c.action([k(120), c.repeat(12, [a(23, 0, 360, s, B, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, s, B), a(23, 0, 360, s, B, c.offsetX(190), c.offsetY(-20)), k(30)])])});
  gls2.ia["nagisa-3-1"] = new H.ka({top0:c.action([k(50), c.repeat(999, [b(n, 0.0010, 5, function(a) {
    return c.action([f(41, "-180", "+180", a, z, c.offsetX(-190), c.offsetY(-20)), f(41, "-180", "+180", a, z, c.offsetX(190), c.offsetY(-20))])
  }), k(50)])]), top1:c.action([c.repeat(999, [f(2, -2, 0, w, u), k(10), f(2, 0, 2, w, u), k(150)])])});
  gls2.ia["mai-1"] = new H.ka({top0:c.action([k(50), c.repeat(50, [c.Ea("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, E), c.Xa]))), c.Ea("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, E), c.Xa]))), k(8)])]), top1:c.action([k(50), c.repeat(12, [a(5, -50, 50, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, 
  D), c.Xa]))), a(5, -230, -130, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Xa]))), k(16), a(6, -50, 50, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Xa]))), a(6, -230, -130, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Xa]))), k(16)])])});
  gls2.ia["mai-2"] = new H.ka({top:c.action([k(50), c.repeat(15, [c.fire(c.direction(-10), z(c.va("fireChild", "$loop.index*10"))), k(8)])]), fireChild:c.action([k("40+$1"), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, t)
  }), c.Xa])});
  gls2.ia["saki-1-1"] = new H.ka({top:c.action([k(100), c.repeat(3, [c.va("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Ea("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, E), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, E), k(12)]), c.repeat("$2", [f(9, -20, 20, w, J)])])});
  gls2.ia["saki-1-2"] = new H.ka({top:c.action([k(100), c.repeat(5, [c.Ea("way", "5+$loop.index*2"), c.repeat(6, [c.Ea("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, n("$s"), D, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), k(90)])])});
  gls2.ia["saki-1-3"] = new H.ka({top:c.action([c.Ea("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.va("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Qe(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, p, J), c.Xa])});
  gls2.ia["saki-2-1"] = new H.ka({top0:c.action([k(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", p, E, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", p, E, c.offsetX(40)), k(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", p, E, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", p, E, c.offsetX(40)), k(60)])]), top1:c.action([k(100), c.repeat(4, [c.repeat(7, [c.Ea("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  v, J), c.repeat(4, [c.Ea("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", v("$w*-1.0"), J)])]), k(120)])])});
  gls2.ia["saki-2-2"] = new H.ka({top:c.action([k(60), c.Ea("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), z(c.va("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), z(c.va("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Qe(c.speed(0), "10 + $rand*15"), c.wait(65), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, t)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, t)])
  }), k(2), c.Xa])});
  gls2.ia["saki-2-3"] = new H.ka({top:c.action([k(60), c.Ea("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.va("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), D(c.va("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Qe(c.speed(0), "10 + $rand*20"), c.wait(65), b(n, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, J)])
  }), k(2), c.Xa])});
  gls2.ia["saki-3-1"] = new H.ka({top:c.action([c.fire(c.direction(180, "absolute"), G, z(c.va("seed"))), k(60), c.fire(c.direction(180, "absolute"), G, z(c.va("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), G, z(c.va("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, E), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, E), c.fire(c.direction(90, "sequence"), p, E), c.fire(c.direction(90, "sequence"), p, E), k(10), c.fire(c.direction(100, 
  "sequence"), p, E)])])});
  gls2.ia["saki-3-2"] = new H.ka({top:c.action([c.fire(c.direction(180, "absolute"), G, D(c.va("seed"))), k(60), c.fire(c.direction(180, "absolute"), G, D(c.va("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), G, D(c.va("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, u), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), k(10), c.fire(c.direction(80, 
  "sequence"), p, u)])])});
  gls2.ia["rikka-1"] = new H.ka({top:c.action([c.repeat(5, [c.Ea("s", "$loop.index*1.5"), k(30), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), f(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.ia["rikka-2"] = new H.ka({top0:c.action([c.repeat(10, [c.fire(z(c.va("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(z(c.va("snow")), c.offsetX(90), c.offsetY(-20)), k(8)]), k(10)]), top1:c.action([c.repeat(35, [c.Ea("d", "$loop.index*-(20+$ex*10)"), c.Ea("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), C(c.va("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), C(c.va("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.Ea("d", "$loop.index*+(20+$ex*10)"), c.Ea("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), C(c.va("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), C(c.va("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.Ea("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), C(c.va("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), C(c.va("snowArm")))])]), c.Xa]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), w, F), c.Xa]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), n("$2"), O), c.fire(c.direction("$1+1", "relative"), n("$2"), O), c.Xa()])});
  gls2.ia["rikka-3"] = new H.ka({top0:c.action([k(40), c.fire(c.direction(-10), C(c.va("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), G("$loop.index*0.5"), t, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(-90), c.offsetY(-20))]), k(5)]), k(40)]), top1:c.action([k(40), c.fire(c.direction(-10), C(c.va("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), G("$loop.index*0.5"), t, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(90), c.offsetY(-20))]), k(5)]), k(40)]), dummy:c.action([c.wait(1), c.Xa])});
  gls2.ia["mana-1-1"] = new H.ka({top0:c.action([c.va("winder", -1)]), top1:c.action([c.va("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), n, N, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [k(20), c.Ea("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), n, N, c.offsetX("-145*$1"), c.offsetY(-5))])])]), top2:c.action([c.wait(60), k(300), c.repeat(7, [c.Ea("s", "$loop.index"), c.repeat(5, [c.Ea("ss", 
  "($s-$loop.index)*0.5"), f(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, w("$ss"), J, c.offsetX(-30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Ea("ss", "($s-$loop.index)*0.5"), f(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, w("$ss"), J, c.offsetX(30), c.offsetY(-30))]), k(20), c.repeat(5, [c.Ea("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, v("$ss"), t, c.offsetX(30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Ea("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, v("$ss"), t, c.offsetX(-30), c.offsetY(-30))]), k(80)])])});
  gls2.ia["mana-1-2"] = new H.ka({top:c.action([c.repeat(5, [c.Ea("i", "$loop.index"), c.Ea("j", "1/($i+1) * 4"), b(n(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*(-3*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, J, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, J, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+3*$j)"), 
    a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-3*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, J, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, J, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), 
    c.fire(c.direction("(12-$i)*(+3*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), k(5)])
  }), k(60)])])});
  gls2.ia["mana-1-3"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-1"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-2"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-3"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-3-1"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-3-2"] = gls2.ia["mana-1-1"];
  gls2.ia["setsuna-1"] = new H.ka({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, p, B, c.offsetX(0), c.offsetY(30)), k(30), f(5, -40, 40, s, B, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, p(0.6), u), f(3, -3, 3, p(1), u), f(4, -4, 4, p(1.4), u), f(5, -5, 5, p(1.8), u), k(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, s, F, c.offsetX(-110), c.offsetY(-70)), k(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, s, F, c.offsetX(110), 
  c.offsetY(-70)), k(30)])])});
  gls2.ia["love-1-1"] = new H.ka({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, p, B, c.offsetX(0), c.offsetY(30)), k(30), f(5, -40, 40, s, B, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, p(0.6), u), f(3, -3, 3, p(1), u), f(4, -4, 4, p(1.4), u), f(5, -5, 5, p(1.8), u), k(110)])])});
  gls2.ia.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      M.push(gls2.Pa())
    }
    a = gls2.ia.Re = tm.Ab.Zc.be;
    a.vg = function(a) {
      return!(a instanceof gls2.Pa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Gh = function(a) {
      var b = M.shift(0);
      if(b) {
        return b.sa = gls2.ja.Gi, L.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.dc ? (b.scaleX = 1, b.scaleY = 1, b.Xc = r) : (a.le ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Vb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.Xc = j), b.visible = a.visible === r ? r : j, b.dc = !!a.dc, b.le = !!a.le, b.Vb = !!a.Vb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Lh = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.rd = gls2.ja.Ii;
    H.Sa.Ub.$rank = 0;
    H.Sa.Ub.$hyperOff = 1
  };
  gls2.ia.erase = function(a, b, c) {
    for(var d = [].concat(L), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var k = gls2.xh(!!b);
        k.setPosition(d[f].x, d[f].y);
        c && (k.ld = j)
      }
      d[f].Fa()
    }
  };
  gls2.ia.$d = function() {
    for(var a = [].concat(L), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Pa = tm.createClass({superClass:tm.display.Sprite, sa:0, dc:r, le:r, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      M.push(this);
      var a = L.indexOf(this);
      -1 !== a && L.splice(a, 1)
    })
  }, update:function() {
    this.dc && (this.rotation += 15)
  }, Fa:function() {
    var a = gls2.Pa.de().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Pa.de = function() {
    gls2.Pa.de.ig === l && (gls2.Pa.de.ig = gls2.Va(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Pa.de.ig.clone()
  };
  gls2.Pa.de.ig = l;
  var M = [], L = gls2.Pa.qb = []
})();
gls2.na = {};
gls2.na.clamp = function(b, a, d) {
  return b < a ? a : b > d ? d : b
};
gls2.na.DEG_TO_RAD = Math.PI / 180;
gls2.na.RAD_TO_DEG = 180 / Math.PI;
gls2.na.degToRad = function(b) {
  return b * gls2.na.DEG_TO_RAD
};
gls2.na.radToDeg = function(b) {
  return b * gls2.na.RAD_TO_DEG
};
gls2.na.rand = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
gls2.na.randf = function(b, a) {
  return window.Math.random() * (a - b) + b
};
gls2.na.magnitude = function() {
  return Math.sqrt(gls2.na.magnitudeSq.apply(l, arguments))
};
gls2.na.magnitudeSq = function() {
  for(var b = 0, a = 0, d = arguments.length;a < d;++a) {
    b += arguments[a] * arguments[a]
  }
  return b
};
gls2.na.inside = function(b, a, d) {
  return b >= a && b <= d
};

