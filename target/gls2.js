/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(b) {
  throw b;
}
var i = void 0, j = !0, l = null, r = !1;
function B() {
  return function() {
  }
}
var I = {kj:this};
(function() {
  function b(a, b) {
    for(var d = 0, h = a.length;d < h;d++) {
      if(a[d].label == b) {
        return a[d]
      }
    }
  }
  I.ka = function(a) {
    this.type = "none";
    this.root = this;
    this.lb = [];
    this.Te = [];
    this.af = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof I.Sb ? this.lb.push(a[b]) : a[b] instanceof I.Qa ? this.Te.push(a[b]) : a[b] instanceof I.Ad && this.af.push(a[b]))
      }
      a = 0;
      for(b = this.lb.length;a < b;a++) {
        this.lb[a].cc(this)
      }
      a = 0;
      for(b = this.Te.length;a < b;a++) {
        this.Te[a].cc(this)
      }
      a = 0;
      for(b = this.af.length;a < b;a++) {
        this.af[a].cc(this)
      }
    }
  };
  I.ka.prototype.$h = function(a) {
    return b(this.lb, a)
  };
  I.ka.prototype.$k = function() {
    for(var a = [], b = 0, d = this.lb.length;b < d;b++) {
      var h = this.lb[b];
      h.label && 0 === h.label.indexOf("top") && (a[a.length] = h.label)
    }
    return a
  };
  I.ka.prototype.Qk = function(a) {
    var b;
    if(b = this.$h(a)) {
      return b
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  I.ka.prototype.Rk = function(a) {
    return b(this.Te, a)
  };
  I.ka.prototype.Sk = function(a) {
    var b;
    if(b = this.Rk(a)) {
      return b
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  I.ka.prototype.Tk = function(a) {
    return b(this.af, a)
  };
  I.ka.prototype.Uk = function(a) {
    var b;
    if(b = this.Tk(a)) {
      return b
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  I.Qa = function() {
    this.root = this.label = l;
    this.direction = new I.Fc(0);
    this.speed = new I.Jc(1);
    this.lb = [];
    this.Wa = {};
    this.Da = {}
  };
  I.Qa.prototype.clone = function(a) {
    var b = new I.Qa;
    b.label = this.label;
    b.root = this.root;
    b.lb = this.lb;
    b.direction = new I.Fc(a.fb(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new I.Jc(a.fb(this.speed.value));
    b.speed.type = this.speed.type;
    b.Wa = this.Wa;
    b.Da = a.Da;
    return b
  };
  I.Qa.prototype.cc = function(a) {
    this.root = a;
    for(var b = 0, d = this.lb.length;b < d;b++) {
      this.lb[b].cc(a)
    }
  };
  I.De = function(a) {
    this.root = l;
    this.label = a;
    this.hb = []
  };
  I.De.prototype.clone = function(a) {
    var b = a.Da;
    a.Da = a.eg(this.hb);
    var d = this.root.Sk(this.label).clone(a);
    a.Da = b;
    return d
  };
  I.De.prototype.cc = function(a) {
    this.root = a
  };
  I.kb = function() {
    this.Hb = ""
  };
  I.kb.prototype.cc = function(a) {
    this.root = a
  };
  I.Sb = function() {
    this.Hb = "action";
    this.root = this.label = l;
    this.jc = [];
    this.hb = []
  };
  I.Sb.prototype = new I.kb;
  I.Sb.prototype.cc = function(a) {
    this.root = a;
    for(var b = 0, d = this.jc.length;b < d;b++) {
      this.jc[b].cc(a)
    }
  };
  I.Sb.prototype.clone = function() {
    var a = new I.Sb;
    a.label = this.label;
    a.root = this.root;
    a.jc = this.jc;
    return a
  };
  I.yd = function(a) {
    this.Hb = "actionRef";
    this.label = a;
    this.root = l;
    this.hb = []
  };
  I.yd.prototype = new I.kb;
  I.yd.prototype.clone = function() {
    var a = new I.Sb;
    a.root = this.root;
    a.jc.push(this);
    return a
  };
  I.Ad = function() {
    this.Hb = "fire";
    this.Ia = this.speed = this.direction = this.root = this.label = l;
    this.Wa = new I.He
  };
  I.Ad.prototype = new I.kb;
  I.Ad.prototype.cc = function(a) {
    this.root = a;
    this.Ia && this.Ia.cc(a)
  };
  I.Bf = function(a) {
    this.Hb = "fireRef";
    this.label = a;
    this.hb = []
  };
  I.Bf.prototype = new I.kb;
  I.Fe = function() {
    this.Hb = "changeDirection";
    this.direction = new I.Fc;
    this.Db = 0
  };
  I.Fe.prototype = new I.kb;
  I.Ge = function() {
    this.Hb = "changeSpeed";
    this.speed = new I.Jc;
    this.Db = 0
  };
  I.Ge.prototype = new I.kb;
  I.Ce = function() {
    this.Hb = "accel";
    this.Bc = new I.Ff;
    this.Ec = new I.cg;
    this.Db = 0
  };
  I.Ce.prototype = new I.kb;
  I.Me = function(a) {
    this.Hb = "wait";
    this.value = a || 0
  };
  I.Me.prototype = new I.kb;
  I.ag = function() {
    this.Hb = "vanish"
  };
  I.ag.prototype = new I.kb;
  I.Ke = function() {
    this.Hb = "repeat";
    this.Hi = 0;
    this.action = l;
    this.hb = []
  };
  I.Ke.prototype = new I.kb;
  I.Ke.prototype.cc = function(a) {
    this.root = a;
    this.action && this.action.cc(a)
  };
  I.wf = function(a, b) {
    this.Hb = "bind";
    this.Sl = a;
    this.Pk = b
  };
  I.wf.prototype = new I.kb;
  I.Sf = function(a, b) {
    this.Hb = "notify";
    this.Mk = a;
    this.hb = b || l
  };
  I.Sf.prototype = new I.kb;
  I.fj = new I.kb;
  I.Fc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  I.Jc = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  I.Ff = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  I.cg = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  I.He = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.xa = j;
    a.xa !== i && (this.xa = !!a.xa)
  };
  I.wh = function(a) {
    this.value = a || 0
  };
  I.xh = function(a) {
    this.value = a || 0
  };
  I.bh = function(a) {
    this.value = !!a
  }
})();
I.Sa = function(b) {
  this.Hh = b;
  this.Ne = [];
  this.Sc = -1;
  this.tb = l;
  this.Da = {}
};
I.Sa.prototype.next = function() {
  this.Sc += 1;
  if(this.tb !== l) {
    var b = this.tb.jc[this.Sc];
    if(b !== i) {
      if(b instanceof I.Sb) {
        return this.$d(), this.tb = b, this.Da = this.dg(), this.next()
      }
      if(b instanceof I.yd) {
        return this.$d(), this.tb = this.Hh.Qk(b.label), this.Da = this.eg(b.hb), this.next()
      }
      if(b instanceof I.Ke) {
        return this.Da.Nd = 0, this.Da.pi = this.fb(b.Hi) | 0, this.$d(), this.tb = b.action.clone(), this.Da = this.dg(), this.next()
      }
      if(b instanceof I.Ad) {
        var a = new I.Ad;
        a.Ia = b.Ia.clone(this);
        b.direction !== l && (a.direction = new I.Fc(this.fb(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new I.Jc(this.fb(b.speed.value)), a.speed.type = b.speed.type);
        a.Wa = new I.He;
        a.Wa.offsetX = this.fb(b.Wa.offsetX);
        a.Wa.offsetY = this.fb(b.Wa.offsetY);
        a.Wa.xa = b.Wa.xa;
        return a
      }
      return b instanceof I.Bf ? (this.$d(), this.tb = new I.Sb, this.tb.jc = [this.Hh.Uk(b.label)], this.Da = this.eg(b.hb), this.next()) : b instanceof I.Fe ? (a = new I.Fe, a.direction.type = b.direction.type, a.direction.value = this.fb(b.direction.value), a.Db = this.fb(b.Db), a) : b instanceof I.Ge ? (a = new I.Ge, a.speed.type = b.speed.type, a.speed.value = this.fb(b.speed.value), a.Db = this.fb(b.Db), a) : b instanceof I.Ce ? (a = new I.Ce, a.Bc.type = b.Bc.type, a.Bc.value = this.fb(b.Bc.value), 
      a.Ec.type = b.Ec.type, a.Ec.value = this.fb(b.Ec.value), a.Db = this.fb(b.Db), a) : b instanceof I.Me ? new I.Me(this.fb(b.value)) : b instanceof I.ag ? b : b instanceof I.wf ? (this.Da["$" + b.Sl] = this.fb(b.Pk), I.fj) : b instanceof I.Sf ? b : l
    }
    this.yk();
    if(this.tb === l) {
      return l
    }
    if((b = this.tb.jc[this.Sc]) && "repeat" == b.Hb) {
      this.Da.Nd++, this.Da.Nd < this.Da.pi && (this.$d(), this.tb = b.action.clone(), this.Da = this.dg())
    }
    return this.next()
  }
  return l
};
I.Sa.prototype.$d = function() {
  this.Ne.push({action:this.tb, cursor:this.Sc, scope:this.Da});
  this.Sc = -1
};
I.Sa.prototype.yk = function() {
  var b = this.Ne.pop();
  b ? (this.Sc = b.cursor, this.tb = b.action, this.Da = b.scope) : (this.Sc = -1, this.tb = l, this.Da = {})
};
I.Sa.prototype.fb = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Da[b]) || (a = I.Sa.Yb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var f in I.Sa.Yb) {
    I.Sa.Yb.hasOwnProperty(f) && (a[f] = I.Sa.Yb[f])
  }
  for(f in this.Da) {
    this.Da.hasOwnProperty(f) && (a[f] = this.Da[f])
  }
  a.$rand = Math.random();
  (f = this.Ne[this.Ne.length - 1]) && (a.$loop = {index:f.scope.Nd, count:f.scope.Nd + 1, first:0 === f.scope.Nd, last:f.scope.Nd + 1 >= f.scope.pi});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
I.Sa.prototype.eg = function(b) {
  var a = {};
  if(b) {
    for(var f = 0, d = b.length;f < d;f++) {
      a["$" + (f + 1)] = this.fb(b[f])
    }
  }else {
    for(f in this.Da) {
      this.Da.hasOwnProperty(f) && (a[f] = this.Da[f])
    }
  }
  return a
};
I.Sa.prototype.dg = function() {
  var b = {}, a;
  for(a in this.Da) {
    this.Da.hasOwnProperty(a) && (b[a] = this.Da[a])
  }
  return b
};
I.ka.prototype.ug = function(b) {
  var a = new I.Sa(this);
  if(b = this.$h(b)) {
    a.tb = b
  }
  return a
};
I.Qa.prototype.ug = function() {
  var b = new I.Sa(this.root), a = new I.Sb;
  a.root = this.root;
  a.jc = this.lb;
  b.tb = a;
  b.Da = this.Da;
  return b
};
I.Sa.Yb = {};
I.Ja = function(b) {
  b = b || "";
  for(var a in I.Ja) {
    I.Ja.hasOwnProperty(a) && (I.kj[b + a] = I.Ja[a])
  }
};
I.Ja.action = function(b) {
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
  var d = new I.Sb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof I.kb)
    }) && g(Error("argument type error.")), d.jc = b
  }else {
    a = 0;
    for(f = arguments.length;a < f;a++) {
      arguments[a] instanceof I.kb ? d.jc[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return d
};
I.Ja.wa = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("label is required."));
  d = new I.yd(b);
  if(a instanceof Array) {
    d.hb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.hb.push(arguments[f])
    }
  }
  return d
};
I.Ja.Ia = function(b, a, f, d) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new I.Qa;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof I.Fc ? m.direction = arguments[h] : arguments[h] instanceof I.Jc ? m.speed = arguments[h] : arguments[h] instanceof I.Sb ? m.lb.push(arguments[h]) : arguments[h] instanceof I.yd ? m.lb.push(arguments[h]) : arguments[h] instanceof Array ? m.lb.push(I.Ja.action(arguments[h])) : arguments[h] instanceof Object ? m.Wa = arguments[h] : "string" === typeof arguments[h] && (m.label = arguments[h])
  }
  return m
};
I.Ja.Yl = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("label is required."));
  d = new I.De(b);
  if(a instanceof Array) {
    d.hb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.hb.push(arguments[f])
    }
  }
  return d
};
I.Ja.fire = function(b, a, f, d) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new I.Ad;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof I.Fc ? m.direction = arguments[h] : arguments[h] instanceof I.Jc ? m.speed = arguments[h] : arguments[h] instanceof I.Qa ? m.Ia = arguments[h] : arguments[h] instanceof I.De ? m.Ia = arguments[h] : arguments[h] instanceof I.He ? m.Wa = arguments[h] : arguments[h] instanceof I.wh ? m.Wa.offsetX = arguments[h].value : arguments[h] instanceof I.xh ? m.Wa.offsetY = arguments[h].value : arguments[h] instanceof I.bh && (m.Wa.xa = arguments[h].value)
  }
  m.Ia === i && g(Error("bullet (or bulletRef) is required."));
  return m
};
I.Ja.cm = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("label is required."));
  d = new I.Bf(b);
  if(a instanceof Array) {
    d.hb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.hb.push(arguments[f])
    }
  }
  return d
};
I.Ja.Zl = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("direction is required."));
  a === i && g(Error("term is required."));
  f = new I.Fe;
  f.direction = b instanceof I.Fc ? b : new I.Fc(b);
  f.Db = a;
  return f
};
I.Ja.Ue = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("speed is required."));
  a === i && g(Error("term is required."));
  f = new I.Ge;
  f.speed = b instanceof I.Jc ? b : new I.Jc(b);
  f.Db = a;
  return f
};
I.Ja.Wl = function(b, a, f) {
  for(var d = 0, h = arguments.length;d < h;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  h = new I.Ce;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof I.Ff ? h.Bc = b : arguments[d] instanceof I.cg ? h.Ec = a : h.Db = arguments[d]
  }
  h.Bc === i && h.Ec === i && g(Error("horizontal or vertical is required."));
  h.Db === i && g(Error("term is required."));
  return h
};
I.Ja.wait = function(b) {
  for(var a = 0, f = arguments.length;a < f;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && g(Error("value is required."));
  return new I.Me(b)
};
I.Ja.Xa = function() {
  return new I.ag
};
I.Ja.repeat = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("times is required."));
  a === i && g(Error("action is required."));
  d = new I.Ke;
  d.Hi = b;
  if(a instanceof I.Sb || a instanceof I.yd) {
    d.action = a
  }else {
    if(a instanceof Array) {
      d.action = I.Ja.action(a)
    }else {
      for(var h = [], f = 1;f < arguments.length;f++) {
        h.push(arguments[f])
      }
      d.action = I.Ja.action(h)
    }
  }
  return d
};
I.Ja.Ea = function(b, a) {
  return new I.wf(b, a)
};
I.Ja.im = function(b, a) {
  return new I.Sf(b, a)
};
I.Ja.direction = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.Fc(b);
  a !== i && (f.type = a);
  return f
};
I.Ja.speed = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.Jc(b);
  a && (f.type = a);
  return f
};
I.Ja.Bc = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.Ff(b);
  a && (f.type = a);
  return f
};
I.Ja.Ec = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.cg(b);
  a && (f.type = a);
  return f
};
I.Ja.bm = function(b) {
  return new I.He(b)
};
I.Ja.offsetX = function(b) {
  return new I.wh(b)
};
I.Ja.offsetY = function(b) {
  return new I.xh(b)
};
I.Ja.xa = function(b) {
  return new I.bh(b)
};
tm.Gb = tm.Gb || {};
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
  tm.Gb.dd = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.Eh = a
  }, We:function(a, b) {
    var d = this.Eh.$k();
    if(b === i && 0 < d.length) {
      for(var f = [], v = 0, n = d.length;v < n;v++) {
        f[f.length] = this.Fh(a, d[v])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          p.pg == f.length && (p.fe = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, v = f.length;v--;) {
        f[v].nf = p
      }
      p.pg = 0;
      p.Ph = function() {
        this.pg++
      };
      p.pg = 0;
      p.fe = r;
      p.yg = j;
      p.stop = r;
      return p
    }
    return this.Fh(a, b)
  }, Fh:function(a, b) {
    function d() {
      if(!d.stop) {
        d.oa += 1;
        this.oa = d.oa;
        var a = d.Ve, b = d.xk;
        if(b) {
          if(d.oa < d.ng ? d.direction += d.Jd : d.oa === d.ng && (d.direction = d.Vc), d.oa < d.og ? d.speed += d.ze : d.oa === d.og && (d.speed = d.Ud), d.oa < d.hg ? (d.vd += d.Qe, d.xd += d.Re) : d.oa === d.hg && (d.vd = d.Oe, d.xd = d.Pe), this.x += Math.cos(d.direction) * d.speed * a.wd, this.y += Math.sin(d.direction) * d.speed * a.wd, this.x += d.vd * a.wd, this.y += d.xd * a.wd, a.zg(this)) {
            if(a.bd || this.bd) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.oa < d.Mi || d.fe)) {
              for(var f;f = d.Ni.next();) {
                switch(f.Hb) {
                  case "fire":
                    b.uk.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Mi = "number" === typeof f.value ? d.oa + f.value : 0 !== (a = ~~f.value) ? d.oa + a : d.oa + eval(f.value);
                    return;
                  case "changeDirection":
                    b.pk.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.qk.call(this, f, d);
                    break;
                  case "accel":
                    b.nk.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.vk.call(this, f)
                }
              }
              d.fe = j;
              d.nf ? d.nf.Ph() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.fe = j, d.nf ? d.nf.Ph() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Gb.dd.ge, f;
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
    "string" === typeof b ? d.Ni = this.Eh.ug(b) : b instanceof I.Qa ? d.Ni = b.ug() : (window.console.error(a, b), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.xk = this;
    d.Ve = a;
    d.Mi = -1;
    d.fe = r;
    d.direction = 0;
    d.ki = 0;
    d.speed = 0;
    d.mi = 0;
    d.vd = 0;
    d.xd = 0;
    d.Jd = 0;
    d.Vc = 0;
    d.ng = -1;
    d.ze = 0;
    d.Ud = 0;
    d.og = -1;
    d.Qe = 0;
    d.Oe = 0;
    d.Re = 0;
    d.Pe = 0;
    d.hg = -1;
    d.oa = -1;
    d.stop = r;
    d.yg = j;
    return d
  }, tk:function(a) {
    function b() {
      b.stop || (this.x += b.Th, this.y += b.Uh, b.Ve.zg(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Gb.dd.ge, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.Ve = a;
    b.direction = 0;
    b.speed = 0;
    b.Th = 0;
    b.Uh = 0;
    b.stop = r;
    b.yg = j;
    return b
  }, uk:function(b, d, f, w) {
    if(this.xl === i || this.Ob) {
      var v = {label:b.Ia.label}, n;
      for(n in b.Ia.Wa) {
        v[n] = b.Ia.Wa[n]
      }
      if(v = d.Nh(v)) {
        w = (n = 0 === b.Ia.lb.length) ? w.tk(d) : w.We(d, b.Ia);
        var p = this, s = {x:this.x + b.Wa.offsetX, y:this.y + b.Wa.offsetY};
        f.ki = w.direction = function(n) {
          var k = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? b.Wa.xa ? a(s, d.target) + k : a(p, d.target) + k : k - Math.PI / 2;
            case "absolute":
              return k - Math.PI / 2;
            case "relative":
              return f.direction + k;
            default:
              return f.ki + k
          }
        }(b.direction || b.Ia.direction);
        f.mi = w.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.mi + b;
            default:
              return b
          }
        }(b.speed || b.Ia.speed);
        v.x = s.x;
        v.y = s.y;
        n && (w.Th = Math.cos(w.direction) * w.speed * d.wd, w.Uh = Math.sin(w.direction) * w.speed * d.wd);
        v.bd = !!v.bd;
        if(d.bd || v.bd) {
          v.rotation = (w.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, v.speed = w.speed
        }
        v.addEventListener("enterframe", w);
        d.Jh ? d.Jh.addChild(v) : this.parent && this.parent.addChild(v)
      }
    }
  }, pk:function(d, f, q) {
    var w = eval(d.direction.value) * Math.DEG_TO_RAD, v = eval(d.Db);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        q.Vc = a(this, d) + w;
        q.Jd = b(q.Vc - q.direction) / v;
        break;
      case "absolute":
        q.Vc = w - Math.PI / 2;
        q.Jd = b(q.Vc - q.direction) / v;
        break;
      case "relative":
        q.Vc = q.direction + w;
        q.Jd = b(q.Vc - q.direction) / v;
        break;
      case "sequence":
        q.Jd = w, q.Vc = q.direction + q.Jd * (v - 1)
    }
    q.ng = q.oa + v
  }, qk:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.Db);
    switch(a.speed.type) {
      case "absolute":
        b.Ud = d;
        b.ze = (b.Ud - b.speed) / f;
        break;
      case "relative":
        b.Ud = d + b.speed;
        b.ze = (b.Ud - b.speed) / f;
        break;
      case "sequence":
        b.ze = d, b.Ud = b.speed + b.ze * f
    }
    b.og = b.oa + f
  }, nk:function(a, b) {
    var d = eval(a.Db);
    b.hg = b.oa + d;
    if(a.Bc) {
      var f = eval(a.Bc.value);
      switch(a.Bc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Qe = (f - b.vd) / d;
          b.Oe = f;
          break;
        case "relative":
          b.Qe = f, b.Oe = (f - b.vd) * d
      }
    }else {
      b.Qe = 0, b.Oe = b.vd
    }
    if(a.Ec) {
      switch(f = eval(a.Ec.value), a.Ec.type) {
        case "absolute":
        ;
        case "sequence":
          b.Re = (f - b.xd) / d;
          b.Pe = f;
          break;
        case "relative":
          b.Re = f, b.Pe = (f - b.xd) * d
      }
    }else {
      b.Re = 0, b.Pe = b.xd
    }
  }, vk:function(a) {
    var b = tm.event.Event(a.Mk);
    if(a.hb) {
      for(var d in a.hb) {
        b[d] = a.hb[d]
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
  tm.Gb.Ik = function(a) {
    var b = tm.app.Sprite(f, 8, 8);
    b.label = a.label;
    return b
  };
  var d = l;
  tm.Gb.Sh = function(a) {
    if(d === l) {
      if(!a.getRoot().app) {
        return j
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Gb.$l = function() {
    return j
  };
  tm.Gb.dd.ge = {Nh:tm.Gb.Ik, zg:tm.Gb.Sh, pm:0, bd:r, wd:2, target:l};
  I.ka.prototype.We = function(a) {
    return tm.Gb.dd(this).We(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(B());
tm.main(function() {
  gls2.lj("#canvas2d");
  gls2.core.run()
});
gls2.lj = tm.createClass({superClass:tm.display.CanvasApp, le:0, dl:0, fl:0, el:0, bl:0, cl:l, de:3, ud:3, Vh:1, ca:l, init:function(b) {
  gls2.core !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = gls2.ja.jj;
  this.background = "rgba(0,0,0,0)";
  this.Zg = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.ui.LoadingScene({assets:{achevements:"assets/achevements.json", tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", 
  explode1:"assets/explode1.png", explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", tex_stage3:"assets/tex_stage3.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", 
  bgmEnding:"assets2/Blue_Moon_MIKU_Append.mp3", bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/achevement":"assets2/se_maoudamashii_system46.mp3", 
  "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, 
  nextScene:function() {
    this.wk();
    return gls2.TitleScene()
  }.bind(this)}))
}, Oh:function() {
  var b = window.achevements, a = tm.asset.AssetManager.get("achevements").data;
  return!b ? gls2.ja.nh : b.reduce(function(b, d) {
    return a[d] ? b + gls2.ja.aj[a[d].grade] : b
  }, gls2.ja.nh)
}, update:function() {
  for(var b = [].concat(this.Zg), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.Zg.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, wk:function() {
  gls2.ua.setup(12345);
  ["tex1", "tex2", "tex3", "tex_tank1"].forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawTexture(a, 0, 0);
    f = f.getBitmap();
    f.filter({calc:function(a, b, d, f, v) {
      v.setPixelIndex(b, a[0], 0, 0)
    }});
    var d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawBitmap(f, 0, 0);
    tm.asset.AssetManager.set(b + "Red", d)
  });
  gls2.ia.setup();
  gls2.pa.setup();
  this.ca = gls2.Ya()
}, am:function() {
  this.stop()
}, oi:r, Qg:function(b, a) {
  var f = {score:Math.floor(this.ca.score), stage:this.ca.Kb + 1, continueCount:this.ca.Kc, shipType:this.ca.fa.type, shipStyle:this.ca.fa.style, fps:0, screenShot:this.ca.Rd};
  b ? (f.userName = b, this.oi = r) : this.oi = j;
  tm.util.Ajax.load({url:"/api/ranking/post", data:f, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        a(l, j, b.scoreId)
      }else {
        if(b.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.Qg(l, a);
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(b = "";"" === b;) {
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.Zk())
              }
              b !== l && (b = b.substring(0, 10), this.Qg(b + " (\u533f\u540d)", a))
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
}, Zk:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc(30) \u76f8\u7530\u7dcf\u7406".split(" ").pickup()
}, Zg:l, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}, ya:function(b) {
  if(window.achevements) {
    var a = tm.asset.AssetManager.get("achevements").data;
    if(a[b]) {
      var f = window.achevements;
      -1 == f.indexOf(b) && (f.push(b), tm.util.Ajax.load({url:"/api/achevement/" + b, type:"POST", dataType:"json", success:function(d) {
        console.dir(d);
        a[b] && (gls2.ta("achevement"), this.ca.hi.addChild(gls2.lh(a[b].title)))
      }.bind(this), error:function() {
        console.warn("error!")
      }}))
    }
  }
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Mc = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.Ya.Xd && gls2.Ya.Xd.se(0)
};
gls2.ja = {Nj:r, jj:60, Hj:0, ih:[1E9, 1E10], Kj:3E3, oh:3, mh:[3, 2, 1], Qi:[6, 4, 2], zh:1, Gj:0.1, ph:1, Jj:0.25, Tl:1, Ul:0.25, Pi:2, zj:0.005, vj:0.01, wj:0.001, rj:0.015, sj:0.002, Bj:0.001, Dj:0.01, Aj:0, yj:0, xj:0, uj:0.03, tj:0.004, Cj:0, Ej:0, Fj:0.75, Df:10, Ie:800, qj:0.25, pj:0.1, Cf:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], Zi:0.02, $i:0.5, Yi:0.005, hh:1E3, Ti:10, Ri:1, bk:1E3, ak:100, $j:0, Zj:0, Yj:1E3, Xj:100, gj:0.5, Ui:3, bj:22500, Si:50, Rj:10, ah:r, Oi:j, Vj:1E3, Wj:2E3, 
Sj:4E3, Tj:1E4, Uj:2E7, Mj:100, oj:"tmshooter", nh:0, aj:[0.1, 0.4, 1], Ij:0, Ah:5};
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.yh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Ua:0, yc:j, ce:j, Od:r, ca:l, speed:0, Mb:l, Id:l, si:l, ef:l, Zb:l, vg:l, wc:l, wg:l, xg:l, frame:0, init:function(a, d, h) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = d;
    this.style = h;
    tm.Gb.dd.ge.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Id = this.si = gls2.Ch(d, 100);
    this.ef = gls2.Ch(3, 100);
    this.Zb = gls2.uh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Zb.visible = r;
    this.sk();
    this.Mb = this.rk();
    1 === this.style && (this.Mb = [this.Mb[1], this.Mb[2]]);
    this.wc = tm.display.CanvasElement().addChildTo(this);
    d = 0;
    for(h = this.Mb.length;d < h;d++) {
      var m = this.Mb[d];
      gls2.Wi(this, m).setPosition(m.x, m.y).addChildTo(this.wc)
    }
    this.ll = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.ll.blendMode = "lighter";
    this.wg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.wg.blendMode = "lighter";
    this.wg.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Ta && !a.La
    };
    this.xg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.xg.blendMode = "lighter";
    this.xg.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Ta && !a.La
    };
    this.me = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.me.blendMode = "lighter";
    this.me.rotation = -90;
    this.me.strokeStyle = "rgba(180,180,255,0.4)";
    this.me.update = function() {
      this.visible = a.La
    };
    this.me.draw = function(b) {
      b.lineCap = "round";
      var d = a.Ld / gls2.ja.Ie;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, r);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, r);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, r)
    };
    this.gl = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.gl.update = function() {
      this.visible = a.La
    };
    b === l && (b = gls2.dh(this.ca.la))
  }, rk:function() {
    if(0 === this.type) {
      return[{x:0, nd:0, y:40, d:0, dc:j, Wb:-0.7, v:j}, {x:0, nd:0, y:40, d:0, dc:j, Wb:0.5, v:j}, {x:0, nd:0, y:40, d:0, dc:j, Wb:-0.5, v:j}, {x:0, nd:0, y:40, d:0, dc:j, Wb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, dc:r, Wb:-0.7, v:j}, {x:-40, y:40, d:0.1, dc:r, Wb:-0.5, v:j}, {x:40, y:40, d:0.1, dc:j, Wb:0.5, v:j}, {x:70, y:20, d:0.1, dc:j, Wb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, dc:r, Wb:-0.7, v:j}, {x:-30, y:20, d:0.4, dc:r, Wb:-0.5, v:j}, {x:30, y:20, d:0.4, dc:j, Wb:0.5, v:j}, {x:60, y:40, d:0.6, dc:j, Wb:0.7, v:j}]
    }
  }, sk:function() {
    this.vg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.vg.setFrameIndex(5);
    this.vg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Zc:-1, Kd:r, Xb:r, update:function(f) {
    this.visible = this.Od ? 0 === f.frame / 2 % 2 : j;
    var d = f.keyboard;
    if(this.yc) {
      var h = d.getKeyAngle();
      h !== l && (h = a[h], this.x += h.x * this.speed * (this.Xb ? 0.5 : 1), this.y += h.y * this.speed * (this.Xb ? 0.5 : 1));
      this.x = gls2.ma.clamp(this.x, 15, 465);
      this.y = gls2.ma.clamp(this.y, 15, 625);
      var m = d.getKey("c") && this.ce, h = d.getKey("z") && this.ce;
      this.Zc = m ? this.Zc + 1 : this.Zc - 1;
      this.Zc = gls2.ma.clamp(this.Zc, -1, 10);
      this.Xb = h && m || 10 === this.Zc;
      m = this.ca.La ? 3 : 5;
      this.Kd = !this.Xb && (0 <= this.Zc || h) && 0 === f.frame % m;
      h && (this.Zc = 0);
      this.Zb.x = this.x;
      this.Zb.y = this.y - 40;
      d.getKeyDown("x") && this.ce && (0 < this.ca.Ta && !this.ca.La ? (this.ca.Kl(), gls2.mk(this).addChildTo(this.ca)) : !this.ca.rd && 0 < this.ca.Nb && (this.Ib = gls2.ma.clamp(this.Ib - 2, 0, 1), this.ca.ae(-0.02), gls2.eh(this, this.ca).setPosition(gls2.ma.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca), gls2.core.ya("bomb1")))
    }else {
      this.Xb = this.Kd = r
    }
    this.Kd && (h = Math.sin(0.2 * f.frame), m = this.Id.fire(this.x - 7 - 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.ca), m = this.Id.fire(this.x + 7 + 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.ca));
    if(this.Xb) {
      h = 0;
      for(m = this.Mb.length;h < m;h++) {
        this.Mb[h].v = r
      }
      this.wc.rotation = 0
    }else {
      this.Zb.visible = r;
      h = 0;
      for(m = this.Mb.length;h < m;h++) {
        this.Mb[h].v = j
      }
    }
    this.Hk(d);
    this.ok(d, f.frame);
    0 === f.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = f.frame
  }, Lc:function() {
    this.Xb = this.Kd = r;
    this.ca.Xe();
    this.ca.mb = 0;
    this.ca.gb = 0;
    this.ca.Oa = 0
  }, Hk:function(a) {
    if(0 === this.type) {
      for(a = this.Mb.length;this.Mb[--a] !== i;) {
        var b = this.Mb[a];
        0 === a ? b.x = b.nd + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.nd + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.nd + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.nd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.wc, b.rotation = this.Xb ? 0 : this.yc && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.yc && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, ok:function(a, b) {
    this.yc && a.getKey("left") ? this.Ua = gls2.ma.clamp(this.Ua - 0.2, -3, 3) : this.yc && a.getKey("right") ? this.Ua = gls2.ma.clamp(this.Ua + 0.2, -3, 3) : 0 > this.Ua ? this.Ua = gls2.ma.clamp(this.Ua + 0.2, -3, 3) : 0 < this.Ua && (this.Ua = gls2.ma.clamp(this.Ua - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Ua) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Ua) : 2 === this.type && this.setFrameIndex(31 + ~~this.Ua);
    return b
  }});
  gls2.Wi = tm.createClass({superClass:tm.display.AnimationSprite, ld:l, fa:l, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.ld = b;
    this.fa = a;
    this.altitude = 10;
    this.gotoAndPlay(b.dc ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.ld.v) {
      this.x = this.ld.x * (this.fa.ca.La ? 1.5 : 1);
      this.y = this.ld.y * (this.fa.ca.La ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.ld.d * this.ld.Wb);
      var d = this.parent.localToGlobal(this);
      this.ld.v && 0 === a.frame % 2 && b.clone(40).setPosition(d.x, d.y).addChildTo(this.fa.ca);
      this.fa.Kd && (d = this.fa.Id.fire(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== l && d.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  gls2.Ed = tm.createClass({superClass:tm.display.Sprite, speed:0, jd:0, Dk:1, gi:0, nb:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.jd = gls2.ja.zh;
    b === l && (b = gls2.Va(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.ye(a)
  }, update:function() {
    this.x += this.Pc;
    this.y += this.nc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, ye:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, cf:function(a) {
    for(var d = 0;d < a;d++) {
      var h = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = gls2.ma.randf(2, 8), q = 2 * Math.random() * Math.PI;
      h.Ga = Math.cos(q) * m;
      h.Ha = Math.sin(q) * m;
      h.scaleX = h.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
      h.addEventListener("enterframe", function() {
        this.x += this.Ga;
        this.y += this.Ha;
        this.Ga *= 0.9;
        this.Ha *= 0.9
      })
    }
  }});
  gls2.Ed.ee = function() {
    for(var b = [].concat(a), d = 0, h = b.length;d < h;d++) {
      b[d].remove()
    }
  };
  var a = gls2.Ed.ub = [];
  gls2.Ch = tm.createClass({Yc:l, fi:r, init:function(b, d) {
    this.fi = 3 === b;
    this.Yc = [];
    for(var h = 0;h < d;h++) {
      var m = gls2.Ed(b), q = this;
      m.addEventListener("added", function() {
        this.sa = gls2.ja.Rj;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        q.Yc.push(this)
      });
      this.fi && m.addEventListener("enterframe", function(a) {
        this.setScale((this.Dk + this.gi) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Yc.push(m)
    }
  }, fire:function(a, b, h) {
    var m = this.Yc.pop();
    if(m === i) {
      return l
    }
    var q = gls2.ma.degToRad(h);
    m.Pc = Math.cos(q) * m.speed;
    m.nc = Math.sin(q) * m.speed;
    m.setPosition(a, b);
    m.rotation = h + 90;
    return m
  }, Sd:function(a) {
    for(var b = this.Yc.length;this.Yc[--b] !== i;) {
      this.Yc[b].jd = gls2.ja.zh + gls2.ja.Gj * a, this.Yc[b].gi = 0.2 * a
    }
  }})
})();
gls2.uh = tm.createClass({superClass:tm.display.Sprite, fa:l, ca:l, uc:0, frame:0, Gi:l, color:l, Lh:0, jg:0, Ek:r, head:l, ai:l, vc:l, nb:j, jd:gls2.ja.ph, Qd:l, init:function(b, a) {
  this.fa = b;
  this.ca = b.ca;
  this.Lh = 0 === this.fa.style ? 1 : 1.2;
  this.jg = 0 === this.fa.style ? 50 : 75;
  var f = this;
  this.Gi = a;
  this.superInit(a.redBody, this.jg, 100);
  this.boundingHeightBottom = 1;
  this.rm = 0;
  this.origin.y = 1;
  var d = this.vc = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.ai = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = f.uc - f.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < f.uc
  };
  this.ye(["red", "green", "blue"][this.fa.type]);
  this.Sd(0)
}, ye:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.Gi[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.vc.gotoAndPlay(this.color);
  this.ai.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Qd = l;
  return this
}, Sd:function(b) {
  this.boundingWidth = this.width = this.jg + 30 * b / gls2.ja.Df;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.jd = this.Lh * gls2.ja.ph + gls2.ja.Jj * b;
  0 === b ? this.ye(["red", "green", "blue"][this.fa.type]) : this.ye("hyper")
}, cf:function(b, a) {
  this.Qd === l && this.Qh();
  a = a || this.uc;
  for(var f = 0;f < b;f++) {
    var d = this.Qd.clone().setPosition(this.x, a).addChildTo(this.ca), h = gls2.ma.randf(8, 14), m = gls2.ma.randf(0, Math.PI);
    d.Ga = Math.cos(m) * h;
    d.Ha = Math.sin(m) * h;
    d.scaleX = d.scaleY = (gls2.ma.randf(0.5, 1.5) + gls2.ma.randf(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.Ga;
      this.y += this.Ha;
      this.Ga *= 0.95;
      this.Ha *= 0.95
    })
  }
}, Wk:function(b, a, f) {
  this.Qd === l && this.Qh();
  for(var d = 0;d < b;d++) {
    var h = this.Qd.clone().setPosition(a, f).addChildTo(this.ca), m = gls2.ma.randf(12, 20), q = gls2.ma.randf(0, Math.PI);
    h.Ga = Math.cos(q) * m;
    h.Ha = Math.sin(q) * m;
    h.scaleX = h.scaleY = (gls2.ma.randf(1, 3) + gls2.ma.randf(1, 3)) / 2;
    h.addEventListener("enterframe", function() {
      this.x += this.Ga;
      this.y += this.Ha;
      this.Ga *= 0.95;
      this.Ha *= 0.95
    })
  }
}, Qh:function() {
  this.Qd = "hyper" === this.color ? gls2.Va(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Va(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.fa.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.fa.Xb) ? (this.uc = Math.max(0, this.uc - 40), this.height = this.y - this.uc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.uc = this.y - 40;
  this.Ek = this.visible
}, draw:function(b) {
  var a = this.srcRect, f = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(f, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, em:function() {
  return this.uc
}, El:function(b) {
  this.uc = b;
  this.head.update()
}});
gls2.uh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.uc
});
(function() {
  gls2.eh = tm.createClass({superClass:tm.app.Object2D, nb:j, ca:l, init:function(a, f) {
    this.superInit();
    this.fa = a;
    this.ca = f;
    this.Bi = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Bi.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Bi));
    this.Ih();
    b === l && (b = gls2.Va(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.oa = 0;
    this.ve = 1;
    this.addEventListener("added", function() {
      this.ca.rd = j;
      this.fa.Od = j;
      this.ca.Nb -= 1;
      this.ca.gf = r;
      this.ca.Xe();
      this.ca.zb("drop BOMBER!!", j);
      gls2.ta("bomb");
      gls2.ta("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.rd = r;
      this.fa.Od = r
    })
  }, Ih:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ma.randf(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.ve + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.oa;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.oa += 3.6, this.ve = -1) : (this.b = 8, this.oa += 1.8, this.ve = 1)
  }});
  gls2.vh = tm.createClass({superClass:gls2.eh, init:function(a, b) {
    this.superInit(a, b);
    gls2.ja.Oi && this.addEventListener("added", function() {
      this.ca.Nb = 0
    })
  }, Ih:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.ma.randf(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.ve + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.oa;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.oa += 1.8, this.ve = 1)
  }});
  var b = l
})();
gls2.Xi = tm.createClass({superClass:tm.display.Sprite, Pc:0, nc:0, fa:l, oa:0, init:function(b, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.fa = f;
  this.nc = 1;
  this.Pc = 0.5 > gls2.ua.random() ? -1 : 1;
  this.oa = 0
}, update:function() {
  this.x += this.Pc;
  this.y += 2 * this.nc;
  if(2025 > gls2.Mc(this, this.fa)) {
    this.fa.ca.Ak(1), this.remove()
  }else {
    if(3E3 > this.oa) {
      if(30 > this.x || 450 < this.x) {
        this.Pc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.nc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.oa += 1
}});
gls2.ij = tm.createClass({superClass:tm.display.Sprite, Pc:0, nc:0, fa:l, oa:0, init:function(b, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var d = -1;1 >= d;d++) {
    for(var h = -1;1 >= h;h++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(d, h).addChildTo(this)
    }
  }
  this.setPosition(b, a);
  this.fa = f
}, update:function() {
  this.y += 0.5;
  4096 > gls2.Mc(this, this.fa) && (this.fa.ca.Xh(), gls2.core.ya("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.pa = {};
gls2.pa.setup = function() {
  gls2.Lk = {};
  gls2.pa.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.Lk.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.pa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.pa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.pa.particle16 = gls2.Va(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.pa.cf = function(b, a, f) {
  b = gls2.pa.particle16.clone().setPosition(b, a);
  b.nb = j;
  b.addChildTo(f);
  f = gls2.ma.randf(5, 20);
  a = gls2.ma.randf(Math.PI, 2 * Math.PI);
  b.Ga = Math.cos(a) * f;
  b.Ha = Math.sin(a) * f;
  b.scaleX = b.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.Ga;
    this.y += this.Ha;
    this.Ga *= 0.9;
    this.Ha *= 0.9
  })
};
gls2.pa.tg = function(b, a, f, d) {
  d = d || 1.8;
  var h = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  h.nb = j;
  h.addChildTo(f);
  h.image = gls2.pa.shockwaveImage;
  h.tweener.clear().to({scaleX:d, scaleY:d, alpha:0}, 800, "easeOutQuad").call(function() {
    h.remove()
  })
};
gls2.pa.ci = function(b, a, f, d) {
  var h = tm.display.Sprite().setPosition(b, a).setScale(d || 1.8).setBlendMode("lighter");
  h.nb = j;
  h.addChildTo(f);
  h.image = gls2.pa.shockwaveImage;
  h.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    h.remove()
  })
};
gls2.pa.Xk = function(b, a, f) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.nb = j;
  b.addChildTo(f);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.pa.Ze = function(b, a, f, d) {
  gls2.ta("explode");
  var h = gls2.pa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  h.nb = j;
  if(d !== i) {
    var m = d.x, q = d.y;
    h.addEventListener("enterframe", function() {
      this.x += m;
      this.y += q;
      m *= 0.99;
      q *= 0.99
    })
  }
  h.addChildTo(f);
  gls2.pa.tg(b, a, f)
};
gls2.pa.Ok = function(b, a, f) {
  gls2.ta("explode");
  var d = gls2.pa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.nb = j;
  d.addChildTo(f);
  d = gls2.pa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.nb = j;
  d.addChildTo(f);
  d = gls2.pa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.nb = j;
  d.addChildTo(f)
};
gls2.pa.vb = function(b, a, f) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var d = ~~(Math.random() * gls2.Rc.noise.length), h = 0;20 > h;h++) {
    var m = gls2.pa.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Rc.noise.at(~~(gls2.Rc.noise.length * h / 20) + d), 2);
    m.nb = j;
    m.addChildTo(f)
  }
  gls2.pa.tg(b, a, f, 5)
};
gls2.pa.je = function(b, a, f) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var d = ~~(Math.random() * gls2.Rc.noise.length), h = 0;20 > h;h++) {
    for(var m = 2 * Math.PI * h / 20, q = Math.pow(gls2.Rc.noise.at(~~(gls2.Rc.noise.length * h / 20) + d), 2), w = 0;3 > w;w++) {
      var v = 4 * q * (w + 1), n = gls2.pa.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.oa += 1
      }).setScale(0.3 * (3 - w)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      n.rotation = 2 * Math.random() * Math.PI;
      n.nb = j;
      n.oa = 0;
      n.a = m;
      n.v = v;
      n.addChildTo(f)
    }
  }
};
gls2.Af = tm.createClass({superClass:tm.app.Object2D, target:l, Ab:0, angle:0, alpha:2, nb:j, reverse:r, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.Ab = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Va(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.Ab + this.target.x, Math.sin(a) * this.Ab + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.Ab += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.Ab || 200 < this.Ab) && this.remove()
  }
}});
gls2.mk = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, nb:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Va(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ma.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ma.rand(-2, 2)).on("enterframe", function() {
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
gls2.lh = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(b) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + b + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, km:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.label.x -= 2;
  -480 > this.label.x && (this.alpha *= 0.9, 0.001 > this.alpha && this.remove())
}});
gls2.dk = tm.createClass({superClass:tm.graphics.Canvas, ca:l, Hd:l, Cb:l, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Hd = gls2.cj(200);
  this.Cb = gls2.Bh(this)
}, update:function() {
  this.clear();
  this.ca.ic !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Cb.Ac - 20, 470 * this.ca.ic.sa / this.ca.ic.Wc, 20), this.strokeRect(5, this.Cb.Ac - 20, 470, 20), this.clear(263.5, this.Cb.Ac - 20 + 2, 2, 16), this.clear(52, this.Cb.Ac - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.Cb.Ac + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.mb)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.Oa / gls2.ja.hh) + 1), this.Cb.ke + 192, 22);
  b = [0, 1, 4][this.ca.fa.type];
  for(a = 0;a < this.ca.cd - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * I.Sa.Yb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.pe + " hit", this.Cb.ke + 10, 95);
  0 < ~~this.ca.Oa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.Oa + " HIT!!", 10, 0.5 * -this.Cb.Ac + 115));
  0 === this.frame % 2 && (!this.ca.La && 0 < this.ca.Ta ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Ta, 5, 637)) : this.ca.La && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.od, 5, 637)));
  for(a = 0;a < this.ca.Nb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.gf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Hd.update();
  this.Hd.Pg = this.Cb.Ac + 5;
  this.Hd.draw(this);
  this.frame += 1
}});
gls2.Bh = tm.createClass({superClass:tm.app.Object2D, Rb:l, ke:0, Ac:0, init:function(b) {
  this.superInit();
  this.Rb = b
}});
(function() {
  var b = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.mj = tm.createClass({superClass:tm.graphics.Canvas, Fa:l, Qb:l, ac:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Fa = gls2.nj();
    this.Fa.la = this;
    this.Fa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Qb = [];
    this.ac = [];
    for(var a = 0;5 > a;a++) {
      this.Qb[a] = 40 * b[a], this.ac[a] = this.Qb[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Fa.Ga = Math.cos(this.Fa.direction) * this.Fa.speed;
    this.Fa.Ha = Math.sin(this.Fa.direction) * this.Fa.speed;
    for(var b = 0;5 > b;b++) {
      for(this.Fa.kc[b] += this.Fa.Ga * Math.pow(0.8, b);3 * this.Qb[b] < this.Fa.kc[b];) {
        this.Fa.kc[b] -= 3 * this.Qb[b]
      }
      for(;this.Fa.kc[b] < 3 * -this.Qb[b];) {
        this.Fa.kc[b] += 3 * this.Qb[b]
      }
      for(this.Fa.lc[b] += this.Fa.Ha * Math.pow(0.8, b);2 * this.ac[b] < this.Fa.lc[b];) {
        this.Fa.lc[b] -= 2 * this.ac[b]
      }
      for(;this.Fa.lc[b] < 2 * -this.ac[b];) {
        this.Fa.lc[b] += 2 * this.ac[b]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Fa.background !== l ? this.clearColor(this.Fa.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * b[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * b[a] + ")"}]).toStyle();
      this.beginPath();
      for(var f = 0, d = this.Fa.kc[a] - 3 * this.Qb[a];d < 480 + 3 * this.Qb[a];d += 1.5 * this.Qb[a]) {
        for(var f = 0 === f ? this.ac[a] : 0, h = this.Fa.lc[a] - 2 * this.ac[a] + f;h < 640 + 2 * this.ac[a];h += 2 * this.ac[a]) {
          this.line(d, h, d + this.Qb[a], h), this.line(d, h, d - this.Qb[a] / 2, h + this.ac[a]), this.line(d, h, d - this.Qb[a] / 2, h - this.ac[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.nj = tm.createClass({superClass:tm.app.Object2D, kc:0, lc:0, direction:0, speed:0, Ga:0, Ha:0, background:l, init:function() {
    this.superInit();
    this.kc = [];
    this.lc = [];
    for(var a = 0;5 > a;a++) {
      this.kc[a] = 240, this.lc[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Ha = this.Ga = 0
  }})
})();
gls2.$f = tm.createClass({superClass:tm.display.Sprite, ji:r, ca:l, fa:l, Nc:r, qd:r, Wg:r, Ga:0, Ha:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.ji = b) && this.setScale(2, 2);
  this.ca = gls2.Ya.Xd;
  this.fa = this.ca.fa;
  this.addChildTo(this.ca);
  b = 0.5 * gls2.ua.random() * Math.PI - 0.75 * Math.PI;
  this.Ga = 30 * Math.cos(b);
  this.Ha = 30 * Math.sin(b)
}, update:function() {
  this.fa.Xb && (this.qd = j);
  if(this.fa.parent === l) {
    this.qd = r
  }else {
    if(100 > gls2.Mc(this, this.fa)) {
      this.ca.nl(this);
      this.remove();
      return
    }
    1E4 > gls2.Mc(this, this.fa) && (this.qd = j);
    if(this.Wg && this.qd) {
      var b = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.Wg || (this.x += this.Ga, this.y += this.Ha, this.Ga *= 0.8, this.Ha *= 0.8, -1 < this.Ga && (1 > this.Ga && -1 < this.Ha && 1 > this.Ha) && (this.Wg = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.Dh = tm.createClass({superClass:gls2.$f, Nc:r, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.lk = tm.createClass({superClass:gls2.$f, Nc:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.qd || (this.x += this.ca.la.Ga, this.y += this.ca.la.Ha);
  this.superClass.prototype.update.call(this)
}});
gls2.fd = tm.createClass({fa:l, ca:l, $:l, frame:0, init:function(b) {
  this.ca = b;
  this.fa = b.fa;
  this.Td();
  this.$ = gls2.kk();
  this.frame = 0
}, Td:B(), update:function() {
  this.Nk(this.frame);
  this.frame += 1
}, Nk:function(b) {
  b = this.$.get(b);
  if(b !== l) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.jh[b.value] !== i) {
        var a = gls2.jh[b.value];
        if(a !== l) {
          if(a[0].ic === j) {
            this.Fg(a[0])
          }else {
            for(var f = 0;f < a.length;f++) {
              var d = this.Fg(a[f]);
              b.stop && d.addEventListener("enemyconsumed", function() {
                this.$.Xg = r
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Fg:function(b) {
  this.ca.Ye += 1;
  b = b.aa(this.ca, b.ba).setPosition(b.x, b.y).addChildTo(this.ca);
  b.Ae = this;
  b.Pd();
  return b
}, be:function(b) {
  gls2.$e();
  this.ca.he = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), f = -4;4 >= f;f++) {
    for(var d = -4;4 >= d;d++) {
      var h = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(f, d);
      h.oa = 0;
      h.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.oa) + 0.5;
        this.oa += 1
      };
      h.addChildTo(a)
    }
  }
  a.tweener.wait(3E3).call(b).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = B();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.ca.sg);
  gls2.ta("warning");
  gls2.ta("voWarning")
}});
gls2.fd.create = function(b, a) {
  switch(a) {
    case 0:
      return gls2.fk(b);
    case 1:
      return gls2.gk(b);
    case 2:
      return gls2.hk(b);
    case 3:
      return gls2.ik(b);
    case 4:
      return gls2.jk(b);
    default:
      g(Error("stageNumber = " + a))
  }
};
gls2.kk = tm.createClass({index:0, data:l, Xg:r, init:function() {
  this.data = {}
}, add:function(b, a, f) {
  this.index += b;
  this.data[this.index] = {stop:f, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? l : b.stop === j ? (this.Xg = j, b) : this.Xg ? l : b
}});
gls2.fk = tm.createClass({superClass:gls2.fd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Jb("bgm1", j);
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
    this.be(function() {
      gls2.Jb("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, Td:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.gk = tm.createClass({superClass:gls2.fd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Jb("bgm2", j);
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
    this.be(function() {
      gls2.Jb("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ca.la.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Td:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.hk = tm.createClass({superClass:gls2.fd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Jb("bgm3", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 2;
    this.ca.la.tweener.clear().to({speed:5}, 4E3, "easeInOutQuad")
  });
  this.$.add(600, "higashi", j);
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
    this.ca.la.tweener.clear().to({speed:7}, 1E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(120, "akane-right");
  this.$.add(180, "akane-left");
  this.$.add(120, "reika1-left");
  this.$.add(180, "reika1-left");
  this.$.add(120, "akane-center");
  this.$.add(180, "akane-left");
  this.$.add(60, "reika1-left");
  this.$.add(60, "reika1-left");
  this.$.add(120, "akane-center");
  this.$.add(120, "akane-right");
  this.$.add(60, "reika1-right");
  this.$.add(60, "reika1-right");
  this.$.add(120, function() {
    this.ca.la.tweener.clear().to({speed:3, direction:90 * (-Math.PI / 180)}, 3E3, "easeInOutQuad")
  });
  for(b = 0;3 > b;b++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(60, "miyuki_y1");
  this.$.add(1, function() {
    this.ca.la.tweener.clear().to({speed:4}, 2E3, "easeInOutQuad").to({direction:0.5 * Math.PI}, 2E3, "easeInOutQuad")
  });
  this.$.add(60, "komachi3-0");
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
    this.be(function() {
      gls2.Jb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.la.direction = Math.PI / 2;
    this.ca.la.tweener.clear().to({speed:7}, 8E3, "easeInOutQuad")
  });
  this.$.add(480, "momozono")
}, Td:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.ik = tm.createClass({superClass:gls2.fd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Jb("bgm4", j);
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
  this.$.add(1200, B());
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
    this.be(function() {
      gls2.Jb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.la.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Td:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.jk = tm.createClass({superClass:gls2.fd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Jb("bgm5", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 1;
    this.ca.la.sm = j
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
  this.$.add(260, "urara5-1");
  this.$.add(200, function() {
    this.be(function() {
      gls2.Jb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.la.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Td:function() {
  this.ca.la.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {Md:function(b, a) {
  if(b.parent === l || a.parent === l) {
    return r
  }
  var f = b.x + b.boundingWidthRight, d = b.y - b.boundingHeightTop, h = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, q = a.y - a.boundingHeightTop, w = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && f > m && d < w && h > q
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Ml:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.pd(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.ej = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:r, title:l, selections:[], description:l, box:l, cursor:l, Hg:l, _selected:0, _opened:r, _finished:r, init:function(b, a, f) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~f.defaultValue;
  this.showExit = f.showExit;
  this.descriptions = f.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Hg = f.onCursorMove;
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
    var h = tm.display.Label(a).setPosition(240, b).addChildTo(this);
    h.interactive = j;
    h.addEventListener("touchend", function() {
      d._selected === f ? d.closeDialog(d._selected) : d._selected = f
    });
    h.width = 336;
    return h
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Hg !== l && this.parent.Hg(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.ta("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.ma.clamp(this._selected, 0, this.selections.length - 1), gls2.ta("select")) : 
  b.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.ma.clamp(this._selected, 0, this.selections.length - 1), gls2.ta("select")))
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
}, pd:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function J(b, a, f, d, h) {
  h = {}.$extend({menuDescriptions:[].concat(f), showExit:j, defaultValue:0, onCursorMove:B()}, h);
  b.Ml(gls2.ej(a, f, h), d)
}
;gls2.Va = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, ig:0.85, size:0, image:l, nb:j, init:function(b, a, f, d) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== i ? a : 1;
  this.ig = f !== i ? f : 0.85;
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.ig;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Va(this.size, this.hm, this.ig, this.image)
}});
gls2.dh = tm.createClass({superClass:gls2.Va, la:l, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.la = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.la.Ga;
  this.y += this.la.Ha + 0.3
}, clone:function(b) {
  return gls2.dh(this.la, b)
}});
gls2.cj = tm.createClass({width:0, label:l, Fb:l, oa:0, yi:0, Pg:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Fb = [];
  this.yi = 480 - this.width - 5;
  this.Pg = 5
}, Bk:function(b, a) {
  a === j && (this.Fb.clear(), this.Fb.push(""));
  5 < this.Fb.length && this.Fb.splice(1, this.Fb.length - 4);
  this.Fb.push(b);
  return this
}, Fk:function() {
  this.Fb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.Fb.length) {
    if("" !== this.Fb[0]) {
      var a = this.Fb[0][0];
      this.Fb[0] = this.Fb[0].substring(1);
      b += a
    }else {
      this.Fb.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.oa % 2 ? "_" : " ");
  this.oa += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.yi, this.Pg);
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
gls2.Rc = {noise:l, Yk:function(b) {
  function a(a) {
    if(1 > a) {
      return l
    }
    var d = [], h = Math.random(), m, q;
    for(q = 0;q < b;q += ~~a) {
      m = Math.random();
      for(var k = 0;k < a;k++) {
        d[q + k] = f(h, m, k / a)
      }
      h = m
    }
    h = d[b - ~~a];
    m = d[0];
    for(k = 0;k < a;k++) {
      d[b - ~~a + k] = f(h, m, k / a)
    }
    return d
  }
  function f(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var d = [], h = 0, m = Math.pow(2, 4);8 > h;h++, m *= 2) {
    var q = a(b / m);
    if(q === l) {
      break
    }
    d.push(q)
  }
  q = [].concat(d[0]);
  h = 1;
  for(m = 0.5;h < d.length;h++, m *= 0.5) {
    for(var w = 0;w < b;w++) {
      q[w] += d[h][w] * m
    }
  }
  for(h = 0;h < q.length;h++) {
    q[h] /= 2
  }
  return q
}};
gls2.Rc.noise = gls2.Rc.Yk(512);
gls2.ua = {index:-1, data:l, setup:function(b) {
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
gls2.ab = l;
gls2.Jb = function(b, a, f) {
  a || gls2.Be();
  a = tm.asset.AssetManager.get(b);
  var d = tm.asset.AssetManager.get("bgmLoopInfo");
  a && (gls2.ab = a.clone(), gls2.ab.volume = 0.1 * gls2.core.de, gls2.ab.loop = !f, gls2.ab.play(), d.data[b] && (gls2.ab.source.loopStart = d.data[b].start, gls2.ab.source.loopEnd = d.data[b].end))
};
gls2.Be = function() {
  gls2.ab !== l && gls2.ab.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.ab.stop()
};
gls2.$e = function() {
  if(gls2.ab !== l) {
    var b = gls2.ab;
    gls2.ab = l;
    b.loop = r;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.om === AudioBufferSourceNode.PLAYING_STATE && b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.ta = function(b) {
  if(0 !== gls2.core.ud && gls2.ta.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.ud, gls2.ta.$g !== l && gls2.ta.$g.stop(), gls2.ta.$g = a) : a.volume = 0.1 * gls2.core.ud);
    gls2.ta.played[b] = gls2.core.frame
  }
};
gls2.ta.played = {};
gls2.ta.$g = l;
(function() {
  var b = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, oa:0, te:[], bf:r, ei:l, li:0, hf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.ei = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.bf = r;
      this.Ql()
    })
  }, Ql:function() {
    for(var a = ("" + Math.floor(gls2.core.le)).padding(16, " "), b = "", h = 0;h < a.length;h += 4) {
      b += a.substring(h, h + 4) + " "
    }
    this.ei.text = "HIGH SCORE: " + b.trim()
  }, pd:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Gh(80 * Math.cos(0.01 * this.oa) + 240, 80 * Math.sin(0.01 * this.oa) + 320, 0);
    this.Gh(80 * Math.cos(0.01 * this.oa + Math.PI) + 240, 80 * Math.sin(0.01 * this.oa + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.bf && this.vi();
    this.oa += 1
  }, Gh:function(f, d, h) {
    if(!this.bf) {
      b === l && (b = gls2.Va(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Va(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      h = 0 === h ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      h.speed = 0.6;
      var m = gls2.ma.randf(0, 2 * Math.PI), q = gls2.ma.rand(0, 20);
      h.setPosition(Math.cos(m) * q + f, Math.sin(m) * q + d);
      var w = this;
      h.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = w.te.indexOf(this);
          -1 !== a && w.te.splice(a, 1)
        }
      };
      this.te.push(h)
    }
  }, vi:function() {
    J(this, "MAIN MENU", ["start", "setting"], this.tl, {defaultValue:this.li, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, tl:function(a) {
    2 !== a && (this.li = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.bf = j;
          for(var a = 0, b = this.te.length;a < b;a++) {
            this.te[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.ek())
        }.bind(this));
        break;
      case 1:
        this.Xc()
    }
  }, Xc:function() {
    J(this, "SETTING", ["bgm volume", "sound volume"], this.Lg, {defaultValue:this.hf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Lg:function(a) {
    3 !== a && (this.hf = a);
    switch(a) {
      case 0:
        this.Mg();
        break;
      case 1:
        this.Ng();
        break;
      default:
        this.vi()
    }
  }, Mg:function() {
    J(this, "BGM VOLUME", "012345".split(""), this.Jg, {defaultValue:gls2.core.de, onCursorMove:function(a) {
      gls2.ab !== l && "exit" !== a && (gls2.ab.volume = 0.1 * a)
    }, showExit:r})
  }, Jg:function(a) {
    6 !== a && (gls2.core.de = a);
    this.Xc()
  }, Ng:function() {
    J(this, "SE VOLUME", "012345".split(""), this.Kg, {defaultValue:gls2.core.ud, showExit:r})
  }, Kg:function(a) {
    6 !== a && (gls2.core.ud = a);
    this.Xc()
  }, nm:function() {
    J(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.sl, {defaultValue:gls2.core.Vh, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, sl:function(a) {
    5 !== a && (gls2.core.Vh = a);
    this.Xc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.ek = tm.createClass({superClass:gls2.Scene, mode:0, types:l, sf:l, ec:l, fc:l, gc:l, Cg:l, Ag:l, type:0, style:0, Tc:r, lf:r, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Gl();
    this.sf = this.Fl();
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
    this.sf.visible = r;
    this.Gg(-1, j);
    this.ec.update();
    this.fc.update();
    this.gc.update();
    gls2.ta("voSelectShip");
    gls2.Jb("bgmShipSelect", j)
  }, Gl:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Cg = tm.display.Label("Type-A").setPosition(240, 150);
    this.Cg.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.Dg = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.Dg.update = function() {
      this.Dg.text = b[this.type]
    }.bind(this);
    this.Dg.addChildTo(a);
    var d = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.ec = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.fc = tm.display.AnimationSprite(d, 64, 64).gotoAndPlay("typeB");
    this.gc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.ec.ib = 0;
    this.fc.ib = 1;
    this.gc.ib = 2;
    this.ec.setScale(3).setPosition(0, 320).addChildTo(a);
    this.fc.setPosition(0, 320).addChildTo(a);
    this.gc.setPosition(0, 320).addChildTo(a);
    this.ec.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.ib / 3 * Math.PI)
    };
    this.fc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.ib / 3 * Math.PI)
    };
    this.gc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.ib / 3 * Math.PI)
    };
    return a
  }, Fl:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Ag = tm.display.Label("Shot Style").setPosition(240, 150);
    this.Ag.addChildTo(a);
    this.ad = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.wc = tm.app.Object2D();
    this.wc.addChildTo(this.ad);
    this.wc.update = function(a) {
      this.wc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.za = [];
    this.za[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.za[0].update = function() {
      0 === this.type ? this.za[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.za[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.za[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.za[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.za[1].update = function() {
      0 === this.type ? this.za[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.za[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.za[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.za[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.za[2].update = function() {
      0 === this.type ? this.za[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.za[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.za[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.za[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.za[3].update = function() {
      0 === this.type ? this.za[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.za[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.za[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.ad.line = b(0, 0, 0, 130, 8);
    this.ad.line.addChildTo(this.ad);
    this.za.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.wc)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.Bg = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.Bg.update = function() {
      this.Bg.text = f[this.style]
    }.bind(this);
    this.Bg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.sf.visible = r, !this.lf && a.keyboard.getKeyDown("left")) {
        this.Gg(-1, r), gls2.ta("select")
      }else {
        if(!this.lf && a.keyboard.getKeyDown("right")) {
          this.Gg(1, r), gls2.ta("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.ta("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.sf.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (gls2.ja.ah ? this.yl() : (this.Tc = j, this.ti()), gls2.ta("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Rl(0 === ~~(a.frame / 60) % 
      2))
    }
  }, yl:function() {
    J(this, "AUTO BOMB", ["on", "off"], this.ol, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, ol:function(a) {
    2 !== a && (this.Tc = 0 === a, this.ti())
  }, ti:function() {
    J(this, "ARE YOU READY?", ["ok"], this.pl, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, pl:function(a) {
    0 === a && this.Jl()
  }, Gg:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.ec, this.fc, this.gc][this.type].remove().addChildTo(this.types);
    b ? (this.ec.ib -= a, this.ec.scaleX = 0 === this.type ? 5 : 1, this.ec.scaleY = 0 === this.type ? 5 : 1, this.fc.ib -= a, this.fc.scaleX = 1 === this.type ? 5 : 1, this.fc.scaleY = 1 === this.type ? 5 : 1, this.gc.ib -= a, this.gc.scaleX = 2 === this.type ? 5 : 1, this.gc.scaleY = 2 === this.type ? 5 : 1) : (this.lf = j, this.ec.tweener.clear().to({ib:this.ec.ib - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.fc.tweener.clear().to({ib:this.fc.ib - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.gc.tweener.clear().to({ib:this.gc.ib - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.lf = r
    }.bind(this)));
    this.Cg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Jl:function() {
    gls2.core.ca.Tc = this.Tc;
    gls2.core.replaceScene(gls2.core.ca);
    gls2.core.ca.start(this.type, this.style);
    gls2.$e()
  }, Rl:function(a) {
    this.Ag.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.ad.line.mc = r, this.za[0].line.mc = r, this.za[1].line.mc = r, this.za[2].line.mc = r, this.za[3].line.mc = r) : (this.ad.line.mc = j, this.za[0].line.mc = j, this.za[1].line.mc = j, this.za[2].line.mc = j, this.za[3].line.mc = j);
    a ? (this.za[0].visible = j, this.za[1].visible = j, 1 === this.style ? (this.za[2].visible = r, this.za[3].visible = r) : (this.za[2].visible = j, this.za[3].visible = j), this.ad.line.lineWidth = 5) : (this.za.each(function(a) {
      a.visible = r
    }), this.ad.line.lineWidth = 0 === this.style ? 10 : 25)
  }, pd:B()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, mc:j, init:function(a, b, d, h, m) {
    this.superInit();
    this.angle = d - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = h;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = m
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    if(this.mc && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), d = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - d, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - d, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + d, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + d, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.Ya = tm.createClass({superClass:gls2.Scene, fa:l, score:0, Kc:0, mb:0, Oa:0, pe:0, gb:0, Uc:0, Kb:0, Ae:l, la:l, cd:3, pf:0, qf:0, Dc:0, Ye:0, qe:0, kf:0, Tc:r, Nb:0, md:0, Mh:0, rd:r, gf:r, Cc:0, Ib:0, La:r, ne:0, Ld:0, Ta:0, od:0, gm:0, fm:0, df:l, Zh:l, Og:l, Wh:l, rg:l, sg:l, lg:l, hi:l, $b:l, Rb:l, ic:l, he:r, kl:r, Ck:0, Rd:l, init:function() {
  gls2.Ya.Xd !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.Ya.Xd = this;
  this.Rb = gls2.dk(this);
  this.Rb.Cb.addChildTo(this);
  this.la = gls2.mj().Fa;
  this.la.addChildTo(this);
  this.df = gls2.Ya.Layer().addChildTo(this);
  this.Zh = gls2.Ya.Layer().addChildTo(this);
  this.Wh = gls2.Ya.Layer().addChildTo(this);
  this.rg = gls2.Ya.Layer().addChildTo(this);
  this.Og = gls2.Ya.Layer().addChildTo(this);
  this.sg = gls2.Ya.Layer().addChildTo(this);
  this.lg = gls2.Ya.Layer().addChildTo(this);
  this.hi = gls2.Ya.qh(this).addChildTo(this);
  tm.Gb.dd.ge.Jh = this;
  this.$b = tm.app.Object2D();
  this.$b.addChildTo(this);
  this.$b.update = function(b) {
    this.wl(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Rb.clear()
  })
}, addChild:function(b) {
  b.nb ? this.rg.addChild(b) : b instanceof gls2.Qa ? this.lg.addChild(b) : b instanceof gls2.$f ? this.df.addChild(b) : b instanceof gls2.ga ? b.Nc ? this.df.addChild(b) : this.Wh.addChild(b) : b instanceof gls2.yh ? this.Og.addChild(b) : b === this.$b || b === this.la || b instanceof gls2.Ya.Layer || b instanceof gls2.Ya.qh || b instanceof gls2.Bh || b instanceof gls2.lh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(b)))
}, update:function(b) {
  this.Dl(b.keyboard);
  this.Ae.update(b.frame);
  0 === b.frame % 2 && this.Rb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.Be()) : b.keyboard.getKeyDown("space") ? this.se(0) : b.keyboard.getKeyDown("p") && (this.Vg().saveAsImage(), this.se(0))
}, Vg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.la.la.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Rb.element, 0, 0);
  return b
}, wl:function() {
  this.fa.yc === r && gls2.ia.erase();
  var b;
  b = [].concat(gls2.ga.ub);
  for(var a = [].concat(gls2.Ed.ub), f = a.length;a[--f] !== i;) {
    for(var d = b.length;b[--d] !== i;) {
      var h = b[d], m = a[f];
      if(!(0 >= h.sa) && gls2.Collision.Md(h, m) && (m.cf(1), m.remove(), h.Lc(m.jd))) {
        this.Dc += 1;
        this.La ? this.Eb(gls2.ja.Aj) : this.Eb(gls2.ja.zj);
        this.Ig(h);
        break
      }
    }
  }
  m = this.fa.Zb;
  if(this.fa.Xb) {
    b = [].concat(gls2.ga.ub);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(d = b.length;b[--d] !== i;) {
      if(h = b[d], !(0 >= h.sa) && gls2.Collision.Md(h, m)) {
        m.El(h.y + h.boundingHeightBottom);
        h.Lc(m.jd) ? (this.Dc += 1, this.La ? this.Eb(gls2.ja.yj) : this.Eb(gls2.ja.vj), this.Ig(h)) : (this.gb = Math.min(this.gb + 0.02, 1), this.La ? (this.Fd(0.01 * gls2.ja.Cf[this.od]), this.Eb(gls2.ja.xj)) : (this.Fd(0.01), this.Eb(gls2.ja.wj)));
        m.cf(2);
        break
      }
    }
    a = {x:this.fa.x, y:this.fa.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(gls2.ga.ub);
    for(d = b.length;b[--d] !== i;) {
      h = b[d], !(0 >= h.sa) && gls2.Collision.Md(h, a) && (h.Lc(m.jd) ? (this.Dc += 1, this.La ? this.Eb(gls2.ja.uj) : this.Eb(gls2.ja.rj), this.Ig(h)) : (this.gb = Math.min(this.gb + 0.02, 1), this.La ? (this.Fd(0.01 * gls2.ja.Cf[this.od]), this.Eb(gls2.ja.tj)) : (this.Fd(0.01), this.Eb(gls2.ja.sj))), m.Wk(2, this.fa.x, this.fa.y - 30))
    }
  }
  if(this.rd) {
    gls2.ia.erase();
    b = [].concat(gls2.ga.ub);
    for(d = b.length;b[--d] !== i;) {
      h = b[d], !(0 >= h.sa) && (h.Pb() && h.Lc(gls2.ja.Pi)) && (this.hd(h.score), this.Dc += 1)
    }
    this.gb = this.Oa = 0
  }
  if(this.La) {
    d = [].concat(gls2.Ed.ub);
    for(h = d.length;d[--h] !== i;) {
      if(m = d[h], !(0 >= m.sa)) {
        a = [].concat(gls2.Qa.ub);
        for(b = a.length;a[--b] !== i;) {
          f = a[b], f.visible !== r && (0 < m.sa && gls2.Collision.Md(m, f)) && (f.sa -= 6 - this.Ib, 0 > f.sa && (f.Ba(), this.hd(gls2.ja.Ti), this.Fd(gls2.ja.Ri), this.di(r, r, f.x, f.y, 1)), m.sa -= 1)
        }
      }
    }
  }
  if(this.he) {
    gls2.ia.erase()
  }else {
    if(this.fa.parent !== l && this.fa.Od === r && this.rd === r && 0 >= this.ne && !gls2.ja.Nj) {
      for(d = gls2.Qa.ub.length;gls2.Qa.ub[--d] !== i;) {
        if(b = gls2.Qa.ub[d], b.visible !== r && gls2.Collision.Md(b, this.fa)) {
          this.fa.Lc();
          0 < this.Nb && this.Tc ? (this.Ib = gls2.ma.clamp(this.Ib - 1, 0, 1), this.ae(-0.01), gls2.vh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this), gls2.core.ya("bomb2")) : this.qi();
          break
        }
      }
      for(d = gls2.ga.ub.length;gls2.ga.ub[--d] !== i;) {
        if(h = gls2.ga.ub[d], !(0 >= h.sa) && !h.Nc && gls2.Collision.Md(h, this.fa)) {
          this.fa.Lc();
          0 < this.Nb && this.Tc ? (this.Ib = gls2.ma.clamp(this.Ib - 1, 0, 1), this.ae(-0.01), gls2.vh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this), gls2.core.ya("bomb2")) : this.qi();
          break
        }
      }
    }
    this.La && (this.Ld -= 1, 0 >= this.Ld && this.Xe());
    this.ne = Math.max(this.ne - 1, 0);
    this.gb -= gls2.ja.Zi * gls2.ja.$i;
    0 >= this.gb && (this.gb = 0, this.La || 0 < this.Ta ? this.Uc = this.Oa = this.mb = 0 : (0 < this.Oa && (0 >= this.Uc && (this.Uc = this.Oa * gls2.ja.Yi), this.mb = this.mb * (this.Oa - this.Uc) / this.Oa, this.Oa -= this.Uc), 0 >= this.Oa && (this.Uc = this.Oa = this.mb = 0)));
    this.gf && (this.score += gls2.ja.Mj)
  }
}, Ig:function(b) {
  this.di(b.Nc, this.La || gls2.Mc(b, this.fa) < gls2.ja.bj, b.x, b.y, b.star, b instanceof gls2.zd);
  this.Fd(gls2.ja.Cf[this.od]);
  for(var a = this.mb, f = ~~(this.Oa / gls2.ja.hh) + 1, d = 0;d < f;d++) {
    a += b.score, this.hd(a)
  }
  this.mb += b.score * f
}, di:function(b, a, f, d, h, m) {
  b = b ? gls2.lk : gls2.Dh;
  for(var q = 0;q < h;q++) {
    var w = b(a);
    w.setPosition(f, d);
    m && (w.qd = j)
  }
}, nl:function(b) {
  gls2.ta("star");
  b.ji ? (this.qf += 1, this.mb += gls2.ja.Yj, this.hd(gls2.ja.bk + this.mb * gls2.ja.$j), this.La ? this.Eb(gls2.ja.Ej) : this.Eb(gls2.ja.Dj)) : (this.pf += 1, this.mb += gls2.ja.Xj, this.hd(gls2.ja.ak + this.mb * gls2.ja.Zj), this.La ? this.Eb(gls2.ja.Cj) : this.Eb(gls2.ja.Bj))
}, start:function(b, a) {
  this.Rb.Hd.Fk().clear();
  this.Kc = this.score = 0;
  this.cd = gls2.ja.oh;
  this.Nb = this.md = gls2.ja.mh[a];
  this.Mh = gls2.ja.Qi[a];
  this.Ta = this.Ib = this.Cc = 0;
  this.Xe();
  this.rd = r;
  this.Ck = this.qe = this.kf = 0;
  this.fa = gls2.yh(this, b, a);
  this.Ug(gls2.ja.Hj);
  I.Sa.Yb.$ex = 2 !== a ? 0 : 1;
  this.Ei(gls2.ja.Ij);
  gls2.ta("voLetsGo");
  this.Ll();
  0 === b ? gls2.core.ya("launch0") : 1 === b ? gls2.core.ya("launch1") : 2 === b && gls2.core.ya("launch2")
}, Ei:function(b) {
  this.zb("3...2...1...");
  this.fa.parent !== l && this.fa.remove();
  gls2.ga.ee();
  gls2.Ed.ee();
  gls2.ia.ee();
  this.df.removeChildren();
  this.rg.removeChildren();
  this.sg.removeChildren();
  this.Og.removeChildren();
  this.lg.removeChildren();
  this.$b.removeChildren();
  this.Dc = this.Ye = this.qf = this.pf = this.pe = this.gb = this.Oa = this.mb = 0;
  this.ic = l;
  this.kl = this.he = r;
  this.qe = 0;
  this.Rb.Cb.ke = 0;
  this.Ib = this.Rb.Cb.Ac = 0;
  this.Kb = b;
  this.Ae = gls2.fd.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.Eg()
  }.bind(this));
  this.la.tweener.clear()
}, Eg:function() {
  this.zb("Let's go!");
  this.fa.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.fa.Zb.addChildTo(this);
  this.fa.yc = r;
  this.fa.Od = j;
  this.fa.Kd = r;
  this.fa.Xb = r;
  this.fa.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.ce = this.yc = j
  }.bind(this.fa)).wait(gls2.ja.Kj).call(function() {
    this.Od = r
  }.bind(this.fa))
}, qi:function() {
  gls2.pa.Ze(this.fa.x, this.fa.y, this);
  this.zb("I was shot down.");
  this.fa.yc = r;
  this.fa.remove();
  this.cd -= 1;
  this.Ta = this.Uc = this.Oa = this.gb = 0;
  this.qe += 1;
  this.kf += 1;
  this.Ib = gls2.ma.clamp(this.Ib - 3, 0, 1);
  this.ae(-0.03);
  0 < this.cd ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.Tc || !gls2.ja.ah) {
      this.md = Math.min(this.md + 1, this.Mh)
    }
    this.Nb = this.md;
    this.Eg()
  }.bind(this)) : this.tweener.clear().wait(20).call(function() {
    this.Rd = this.Vg().canvas.toDataURL("image/png");
    gls2.core.le === this.score && (gls2.core.cl = this.Rd)
  }.bind(this)).wait(2E3).call(function() {
    this.Kc < gls2.core.Oh() ? this.Al() : this.bi()
  }.bind(this))
}, Ug:function(b) {
  I.Sa.Yb.$rank = gls2.ma.clamp(b, 0, 0.5)
}, ae:function(b) {
  this.Ug(I.Sa.Yb.$rank + b)
}, Vk:function() {
  this.zb("System rebooted.", j);
  this.score = 0;
  this.Kc += 1;
  this.cd = gls2.ja.oh;
  this.Nb = this.md = gls2.ja.mh[this.fa.style];
  this.Ib = 0;
  this.Ug(0);
  this.Eg()
}, Gk:function() {
  gls2.Jb("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.$b);
  b.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.Vg()));
    b.remove()
  }.bind(this))
}, bi:function() {
  gls2.Be();
  this.app.replaceScene(gls2.kh())
}, dm:B(), hd:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < gls2.ja.ih.length;b++) {
    var f = gls2.ja.ih[b];
    a < f && f <= this.score && (this.Xh(), 0 == b && this.app.ya("extend1"), 1 == b && this.app.ya("extend2"))
  }
  gls2.core.le = Math.max(gls2.core.le, this.score);
  gls2.core.le === this.score && (gls2.core.dl = this.Kb, gls2.core.fl = this.fa.type, gls2.core.el = this.fa.style, gls2.core.bl = this.Kc);
  1E8 <= this.score && gls2.core.ya("score100M");
  2E9 <= this.score && gls2.core.ya("score2G");
  2E10 <= this.score && gls2.core.ya("score20G");
  5E10 <= this.score && gls2.core.ya("score50G");
  1E11 <= this.score && gls2.core.ya("score100G");
  1E12 <= this.score && gls2.core.ya("score1T")
}, Fd:function(b) {
  this.Uc = 0;
  this.Oa += b;
  this.pe = Math.max(this.pe, this.Oa);
  1 <= b && (this.gb = 1);
  100 <= this.Oa && this.app.ya("combo100");
  1E3 <= this.Oa && this.app.ya("combo1000");
  1E4 <= this.Oa && this.app.ya("combo10000");
  1E5 <= this.Oa && this.app.ya("combo100000")
}, Eb:function(b) {
  if(this.Ta !== gls2.ja.Df) {
    for(b *= gls2.ja.Fj;1 < b;) {
      gls2.Af(this.fa).addChildTo(this), b -= 1, this.Cc = 0, this.Ta += 1, 1 === this.Ta ? (this.zb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.zb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady"))
    }
    this.Cc = gls2.ma.clamp(this.Cc + b, 0, 1);
    1 <= this.Cc && (gls2.Af(this.fa).addChildTo(this), this.Ta += 1, this.Cc -= 1, 1 === this.Ta ? (this.zb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.zb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady")))
  }
}, Kl:function() {
  0.5 > Math.random() ? (this.zb("HYPER SYSTEM start!!", j), gls2.ta("voHyperStart0")) : (this.zb("start counting to system limit.", j), gls2.ta("voHyperStart1"));
  this.Ib = gls2.ma.clamp(this.Ib + 1, 0, 5);
  this.ae(0.01 * this.Ta);
  I.Sa.Yb.$hyperOff = gls2.ja.gj * (2 !== this.fa.style ? 1 : 0.5);
  this.Ld = gls2.ja.Ie;
  this.ne = gls2.ja.Ie * gls2.ja.qj;
  this.fa.ef.Sd(this.Ta);
  this.fa.Zb.Sd(this.Ta);
  this.fa.Id = this.fa.ef;
  gls2.pa.Xk(this.fa.x, this.fa.y, this);
  this.La = j;
  this.od = this.Ta;
  this.Cc = this.Ta = 0;
  gls2.ia.erase(j, j);
  this.app.ya("hyper1");
  10 == this.od && this.app.ya("hyper10")
}, Xe:function() {
  this.La !== r && (this.La = r, gls2.Af(this.fa, j).addChildTo(this), this.fa.Id = this.fa.si, I.Sa.Yb.$hyperOff = 1 * (2 !== this.fa.style ? 1 : 0.5), this.fa.ef.Sd(0), this.fa.Zb.Sd(0), this.ne = gls2.ja.Ie * gls2.ja.pj, this.od = this.Ld = 0, gls2.ia.erase())
}, Ak:function() {
  gls2.ta("decision");
  gls2.ta("voGetBomb");
  this.Nb = Math.min(this.Nb + 1, this.md);
  this.gf = this.Nb === this.md
}, Xh:function() {
  gls2.ta("voExtend");
  this.zb("extended.");
  this.cd += 1
}, zb:function(b, a) {
  this.Rb.Hd.Bk(b, a)
}, se:function(b) {
  J(this, "PAUSE", ["resume", "setting", "exit game"], this.vl, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:r})
}, vl:function(b) {
  switch(b) {
    case 1:
      this.Xc();
      break;
    case 2:
      this.zl()
  }
}, Xc:function() {
  J(this, "SETTING", ["bgm volume", "sound volume"], this.Lg, {defaultValue:this.hf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Lg:function(b) {
  3 !== b && (this.hf = b);
  switch(b) {
    case 0:
      this.Mg();
      break;
    case 1:
      this.Ng();
      break;
    default:
      this.se()
  }
}, zl:function() {
  J(this, "REARY?", ["yes", "no"], this.ql, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:r})
}, ql:function(b) {
  0 === b ? (gls2.Be(), this.app.replaceScene(gls2.TitleScene())) : this.se(1)
}, Mg:function() {
  J(this, "BGM VOLUME", "012345".split(""), this.Jg, {defaultValue:gls2.core.de, onCursorMove:function(b) {
    gls2.ab !== l && 6 !== b && (gls2.ab.volume = 0.1 * b)
  }, showExit:r})
}, Jg:function(b) {
  6 !== b && (gls2.core.de = b);
  this.Xc(1)
}, Ng:function() {
  J(this, "SE VOLUME", "012345".split(""), this.Kg, {defaultValue:gls2.core.ud, showExit:r})
}, Kg:function(b) {
  6 !== b && (gls2.core.ud = b);
  this.Xc(1)
}, Al:function() {
  J(this, "CONTINUE? (" + this.Kc + "/" + gls2.core.Oh() + ")", ["yes", "no"], this.rl, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:r})
}, rl:function(b) {
  switch(b) {
    case 0:
      this.Vk();
      break;
    case 1:
      this.bi()
  }
}, pd:B(), Hl:function() {
  this.Rb.Cb.tweener.clear().to({ke:-480}, 1600, "easeInBack").to({Ac:30}, 800, "easeInOutBack")
}, al:function() {
  this.Rb.Cb.tweener.clear().to({Ac:0}, 800, "easeInOutBack").to({ke:0}, 1600, "easeOutBack")
}, we:l, xe:0, oe:l, Je:0, Ll:function() {
  if(1 === this.Je) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.oe = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.we = [];
    this.xe = 0
  }else {
    if(2 === this.Je && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.oe = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var f = localStorage.getItem("rec" + a).split(","), d = 0;d < f.length;d++) {
          this.oe.push(f[d])
        }
      }
    }
  }
}, Dl:function(b) {
  if(1 === this.Je) {
    1E3 < this.we.length && (console.log("save"), localStorage.setItem("rec" + this.xe, this.we), localStorage.setItem("recCount", this.xe), this.we = [], this.xe += 1), this.we.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Je && this.oe) {
      var a = this.oe.shift();
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
gls2.Ya.qh = tm.createClass({superClass:tm.display.CanvasElement, ca:l, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.Jk(b);
  this.Kk(b)
}, Jk:function(b) {
  if(0 < this.ca.gb) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.gb) + "," + ~~Math.min(255, 512 * this.ca.gb) + ",0.5)";
    var a = 500 * this.ca.gb;
    b.fillRect(465, 635 - a, 10, a)
  }
}, Kk:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.Ta === gls2.ja.Df ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.Cc && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.Cc, 9))
}});
gls2.Ya.Xd = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ca:l, Rd:l, $b:l, values:l, labels:l, ff:l, zi:[gls2.ja.Vj, gls2.ja.Wj, gls2.ja.Sj, gls2.ja.Tj, 1], ii:l, Rg:l, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ca.pf, this.ca.qf, ~~(100 * (this.ca.Dc / this.ca.Ye)), this.ca.pe, 0 === this.ca.qe ? gls2.ja.Uj : 0];
  this.ff = this.values.map(function(a) {
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
  this.ii = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.Rg = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.Rg.visible = r;
  this.Rd = a;
  for(var d = [], f = 0;12 > f;f++) {
    d[f] = [];
    for(var h = 0;16 > h;h++) {
      d[f][h] = {Sg:0, $c:0, Pc:gls2.ma.randf(-2, 2), nc:gls2.ma.randf(1, 4)}
    }
  }
  this.$b = tm.app.Object2D();
  this.$b.draw = function(a) {
    a.save();
    for(var b = j, f = 0;f < d.length;f++) {
      for(var h = 0;h < d[f].length;h++) {
        var n = d[f][h];
        640 > 40 * h + n.$c && (a.drawImage(this.Rd.element, 40 * f, 40 * h, 40, 40, 40 * f + n.Sg, 40 * h + n.$c, 40, 40), n.Sg += n.Pc, n.$c += n.nc, n.nc += 0.3, b = r)
      }
    }
    this.wait = 60;
    b && this.$b.remove();
    a.restore()
  }.bind(this);
  this.$b.addChildTo(this);
  this.on("enter", function() {
    0 === this.ca.kf && 0 === this.ca.Kc && (0 === this.ca.Kb ? gls2.core.ya("nomiss1") : 1 === this.ca.Kb ? gls2.core.ya("nomiss2") : 2 === this.ca.Kb ? gls2.core.ya("nomiss3") : 3 === this.ca.Kb ? gls2.core.ya("nomiss4") : 4 === this.ca.Kb && gls2.core.ya("nomiss5"))
  });
  this.on("exit", function() {
    gls2.$e()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.ta("star"), this.values[a] <= this.ff[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.hd(this.values[a] * this.zi[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.hd(this.ff[a] * this.zi[a]), this.values[a] -= this.ff[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.ii.text = Math.floor(this.ca.score)
    }else {
      if(this.Rg.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.ta("decision"), this.ca.Kb + 1 == gls2.ja.Ah ? b.replaceScene(gls2.hj()) : (this.ca.Ei(this.ca.Kb + 1), b.replaceScene(this.ca))
      }
    }
    this.frame += 1
  }
}, pd:B()});
gls2.kh = tm.createClass({superClass:gls2.Scene, oa:0, wi:r, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.on("enter", function() {
    gls2.Jb("gameover")
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.oa && !this.wi) && this.mf();
  this.oa += 1
}, pd:function(b) {
  b.clearColor("black")
}, ue:r, wait:r, Tg:l, mf:function() {
  if(!this.wait) {
    this.wi = j;
    var b = ["save score", "tweet result", "back to title"], a = ["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"];
    this.ue && (b.shift(), a.shift());
    J(this, "GAME OVER", b, this.ul, {defaultValue:this.ue ? 1 : 0, menuDescriptions:a, showExit:r})
  }
}, ul:function(b) {
  this.ue && (b += 1);
  0 === b ? this.ue || (this.wait = j, this.app.Qg(l, function(a, b, d) {
    this.wait = r;
    a ? this.Bl(a) : b ? (this.ue = j, this.Tg = d, this.Cl()) : this.mf()
  }.bind(this))) : 1 === b ? this.Pl() : this.app.replaceScene(gls2.TitleScene())
}, Cl:function() {
  J(this, "SUCCESS!", ["ok"], function() {
    this.mf()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:r})
}, Bl:function() {
  J(this, "ERROR!", ["ok"], function() {
    this.mf()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:r})
}, Pl:function() {
  var b = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({score:Math.floor(this.app.ca.score), stage:this.app.ca.Kb < gls2.ja.Ah ? "Stage" + (this.app.ca.Kb + 1) : "ALL", type:"ABC"[this.app.ca.fa.type], style:["S", "L", "EX"][this.app.ca.fa.style], cont:this.app.ca.Kc}), b = tm.social.Twitter.createURL({type:"tweet", text:b, hashtags:gls2.ja.oj, url:this.Tg ? window.location.origin + "/ranking/" + this.Tg : window.location.origin});
  window.open(b, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
(function() {
  var b = "TM-Shooter;2D 'DANMAKU' Shooter on HTML5;;MUSIC;Underworld (select)  by  delf;Feel the universe (stage1)  by  delf;Herod (boss)  by  \u6dbc\u3005;Re-Birth (clear)  by  delf;Remenber (stage2)  by  Ryo;THE NEW CHALLENGER freeVer. (stage3)  by  delf;Aegis (stage4)  by  \u5cf6\u767d;Ancien Ocean (stage5)  by  delf;\u84bc\u3044\u6708 (ending)  by  delf;;SOUND;kouichi_axis (\u9b54\u738b\u9b42);on_jin (\u97f3\u4eba);;GAME ENGINE (tmlib.js);phi_jp;;PROGRAM AND GRAPHICS;minimo(stage3);daishi_hmr;;special respect to...;DODONPACHI series by CAVE;PRECURE series by TOEI;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!".split(";");
  gls2.hj = tm.createClass({superClass:gls2.Scene, la:l, fa:l, labels:l, Di:r, speed:0, Yh:r, ni:l, init:function() {
    this.superInit();
    this.ni = tm.display.CanvasElement().addChildTo(this);
    this.la = gls2.core.ca.la;
    this.la.addChildTo(this);
    this.la.direction = 0.5 * Math.PI;
    this.la.speed = 1;
    var a = this.fa = gls2.core.ca.fa;
    a.yc = r;
    a.setPosition(240, 448);
    a.ca = this.ni;
    [].concat(a.children).forEach(function(b) {
      b != a.wc && b.remove()
    });
    a.addChildTo(this);
    var f = a.x;
    a.on("enterframe", function() {
      0.2 < a.x - f ? a.Ua += 0.3 : -0.2 > a.x - f ? a.Ua -= 0.3 : 0 < a.x - f ? a.Ua += 0.11 : 0 > a.x - f && (a.Ua -= 0.11);
      f = a.x
    });
    var d = function() {
      var b = gls2.ma.randf(0.8, 1.2);
      a.tweener.clear().to({x:gls2.ma.randf(48, 432), y:gls2.ma.randf(192, 512), scaleX:b, scaleY:b}, 6E3, "easeInOutQuad").call(d)
    }.bind(this);
    d();
    gls2.core.ca.Kb += 1;
    var h = this;
    this.labels = b.map(function(a, b) {
      return tm.display.Label(a, 16).setPosition(240, 960 + 64 * b).addChildTo(h).on("enterframe", function() {
        this.y -= h.speed;
        -192 > this.y && this.remove()
      })
    });
    tm.display.Label("dev7.jp", 24).setPosition(240, 960 + 64 * (b.length + 3)).addChildTo(this).on("enterframe", function() {
      320 < this.y && (this.y -= h.speed)
    });
    this.tweener.wait(2E3).call(function() {
      gls2.Jb("bgmEnding", j, j);
      this.Di = j
    }.bind(this))
  }, lm:function() {
    0 === gls2.core.ca.fa.type ? gls2.core.ya("allclear0") : 1 === gls2.core.ca.fa.type ? gls2.core.ya("allclear1") : 2 === gls2.core.ca.fa.type && gls2.core.ya("allclear2")
  }, mm:function() {
    this.la.addChildTo(gls2.core.ca)
  }, update:function(a) {
    a.keyboard.getKey("z") || a.keyboard.getKey("x") || a.keyboard.getKey("c") || this.Di && gls2.ab && gls2.ab.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(a) {
      return!!a.parent
    }) ? this.speed = 8 : this.Il() : this.speed = 0.5
  }, Il:function() {
    this.Yh || (this.Yh = j, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 5E3).call(function() {
      gls2.Be();
      this.app.replaceScene(gls2.kh())
    }.bind(this)), this.la.tweener.clear().to({speed:9}, 2E3), this.fa.tweener.clear().wait(2E3).to({y:-192}, 2E3, "easeInQuad"))
  }, pd:B()})
})();
(function() {
  gls2.ga = tm.createClass({superClass:tm.display.CanvasElement, name:l, fa:l, ca:l, Ae:l, sa:0, Wc:0, score:0, Nc:r, erase:r, star:1, jl:r, Ob:j, Ra:r, frame:0, tf:l, direction:0, speed:0, ha:l, init:function(a, f, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Ra = r;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.Ob = j;
    this.ca = a;
    this.fa = a.fa;
    this.score = 100;
    this.erase = r;
    this.zk(d);
    f.setup(this);
    this.altitude = this.Nc ? 1 : 10;
    this.tf = {x:0, y:0}
  }, Pd:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, jm:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Ra === r && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Ra = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Nc && (this.x += this.ca.la.Ga, this.y += this.ca.la.Ha);
    this.Ra && (this.frame += 1);
    this.tf.x = this.x - a;
    this.tf.y = this.y - b
  }, Lc:function(a) {
    if(!this.Ra) {
      return r
    }
    this.sa -= a;
    if(0 >= this.sa) {
      return a = gls2.ma.randf(0, 5), 2 > a ? this.ca.zb("enemy destroy.") : 4 > a ? this.ca.zb(this.name + " destroy.") : this.ca.zb("ETR reaction gone."), this.erase && gls2.ia.erase(j, this.ca.La, this instanceof gls2.zd), this.dispatchEvent(tm.event.Event("destroy")), this.Ba(), "yukishiro" === this.name ? gls2.core.ya("mboss1") : "mishou" === this.name ? gls2.core.ya("mboss2") : "higashi" === this.name ? gls2.core.ya("mboss3") : "hishikawa" === this.name ? gls2.core.ya("mboss4") : "minamino" === 
      this.name ? gls2.core.ya("mboss5") : "misumi" === this.name ? gls2.core.ya("boss1") : "hyuga" === this.name ? gls2.core.ya("boss2") : "momozono" === this.name ? gls2.core.ya("boss3") : "aida" === this.name ? gls2.core.ya("boss4") : "hojo" === this.name && gls2.core.ya("boss5"), j
    }
    40 > this.sa && this.Pa();
    return r
  }, Ba:function() {
    gls2.pa.Ze(this.x, this.y, this.ca, this.tf);
    this.remove()
  }, Pb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, xl:function() {
    return this.Ob
  }, Pa:B(), zk:function(a) {
    this.name = a;
    a = gls2.ga.dj[a];
    this.sa = this.Wc = a[0];
    this.score = a[1];
    this.Nc = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, zc:function() {
    this.remove();
    this.ca.Zh.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.pa.Ze(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.pa.je(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Se:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.pa.Ze(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.pa.je(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  gls2.ga.ee = function() {
    for(var a = [].concat(b), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var b = gls2.ga.ub = []
})();
gls2.zd = tm.createClass({superClass:gls2.ga, jl:j, Wc:0, of:l, init:function(b, a, f) {
  this.of = a;
  this.superInit(b, this.of[0], f);
  this.Wc = this.sa;
  this.addEventListener("added", function() {
    this.ca.ic = this;
    this.ca.Hl();
    this.tweener.wait(1E3).call(function() {
      this.ca.he = r
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.ic = l;
    this.ca.al();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.Gk()
    }.bind(this));
    a.addChildTo(this.ca.$b)
  })
}, Lc:function(b) {
  var a = this.sa;
  if(gls2.ga.prototype.Lc.call(this, b)) {
    return this.ca.he = j, this.ca.fa.ce = r, gls2.$e(), j
  }
  this.sa <= 0.55 * this.Wc && 0.55 * this.Wc < a ? (gls2.da.rf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.pa.vb(this.x, this.y, this.ca), gls2.ia.erase(j, this.ca.La), this.of[1].setup(this)) : this.sa <= 0.1 * this.Wc && 0.1 * this.Wc < a && (gls2.da.rf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.pa.vb(this.x, this.y, this.ca), gls2.ia.erase(j, this.ca.La), this.of[2].setup(this), gls2.ta("voJacms"))
}});
(function() {
  gls2.ga.dj = {kujo:[2, 300, r, r, 1, {radius:24}], kiryu:[3, 400, r, r, 1, {radius:24}], natsuki:[5, 900, j, r, 1, {radius:24}], kise:[50, 15E3, j, r, 1, {radius:24}], yamabuki:[100, 15E3, j, r, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, r, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, r, r, 5, {width:100, height:20}], kasugano:[6, 1E3, r, r, 1, {radius:24}], 
  kurokawa:[35, 5E3, r, r, 5, {width:100, height:20}], mimino:[35, 5E3, r, r, 5, {width:100, height:20}], shirabe:[35, 5E3, r, r, 5, {width:100, height:20}], akimoto:[250, 3E5, r, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, r, j, 20, {width:180, heightBottom:40, heightTop:60}], aono:[250, 3E5, r, j, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, r, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, r, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, 
  r, j, 20, {width:300, height:80}], higashi:[1500, 12E5, r, j, 20, {width:256, height:128}], momozono:[6E3, 35E5, r, j, 0, {width:256, height:128}], hyuga:[6E3, 3E6, r, j, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, r, j, 20, {radius:130}], aida:[8E3, 4E6, r, j, 0, {width:370, heightBottom:5, heightTop:60}], erika:[30, 500, r, r, 1, {width:24, height:48}], hino:[20, 500, r, r, 1, {width:24, height:48}], hoshizora_y:[100, 2E4, r, j, 30, {width:128, height:64}], hoshizora_t:[100, 2E4, r, j, 30, 
  {width:128, height:64}], yotsuba:[300, 1E5, r, j, 30, {width:64, height:64}], yotsubaLeaf:[100, 3E4, r, r, 10, {width:64, height:64}], midorikawa:[5, 1E3, r, r, 1, {width:64, height:64}], aoki:[5, 1200, r, r, 1, {width:64, height:64}], madoka:[5, 1200, r, r, 1, {width:64, height:64}]};
  gls2.ga.qa = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kujo");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ga.Ca = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kiryu");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ga.na = tm.createClass({superClass:gls2.ga, fg:l, gg:l, init:function(a, f) {
    this.superInit(a, f, "natsuki");
    this.fg = b("tex_tank1", 64, 64);
    this.gg = b("tex_tank1", 64, 64);
    this.kd = this.kd || 0;
    this.xc = this.xc || 0
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    for(a = this.kd;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.xc;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.fg.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.gg.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.fg.draw(a);
    this.gg.draw(a)
  }, Ba:function() {
    gls2.pa.Ok(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.fh = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "yamabuki");
    this.ea = b("tex2", 256, 128).setFrameIndex(7)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Vb = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "tsukikage");
    this.ea = b("tex1", 64, 64).setFrameIndex(23)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.eb = tm.createClass({superClass:gls2.ga, ea:l, kg:l, init:function(a, f) {
    this.superInit(a, f, "kasugano");
    this.ea = b("tex1", 64, 64).setFrameIndex(23);
    this.vc = gls2.Va(80, 1, 0.8);
    this.kg = tm.geom.Vector2()
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && this.vc.clone().setPosition(this.x, this.y).addChildTo(this.ca);
    this.rotation = tm.geom.Vector2.sub(this.position, this.kg).toAngle() * gls2.ma.RAD_TO_DEG - 90;
    this.kg.set(this.x, this.y)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Qc = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kurokawa");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.qc = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "mimino");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.ob = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "shirabe");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Ic = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "akimoto");
    this.ea = b("tex1", 256, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    this.zc()
  }});
  gls2.ga.Wd = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "aono");
    this.ea = b("tex1", 256, 128);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 128;
    this.setScale(1.2);
    this.Lb = gls2.Va(70, 1, 0.97)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Lb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca), this.Lb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    this.zc()
  }});
  gls2.ga.Dd = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "yumehara");
    this.ea = b("tex1", 256, 256);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 256;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 256
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    this.zc()
  }});
  gls2.ga.Na = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kise");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Le = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "hanasaki");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Pa:B(), Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Gf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "myodoin");
    this.ea = b("tex1", 128, 128).setFrameIndex(12)
  }, Pa:B(), Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.oc = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kenzaki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.yf = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "minazuki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256;
    this.setScale(1.2)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Ka = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hino");
    this.ea = b("tex_stage3", 64, 32).setFrameIndex(0)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.ra = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "midorikawa");
    this.ea = b("tex_stage3", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Bb = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "aoki");
    this.ea = b("tex_stage3", 64, 64).setFrameIndex(1)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Pd:function() {
    240 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.Nl = this.y + 128;
    this.$c = this.y
  }});
  gls2.ga.Kh = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, b) {
    this.superInit(a, b, "madoka");
    this.boundingHeightTop = this.boundingWidthLeft = 0;
    this.boundingHeightBottom = this.boundingWidthRight = 64
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  gls2.ga.td = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hoshizora_y");
    this.ea = b("tex_stage3", 256, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    if(this.Ra === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Ra = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.je(this.x, this.y, this.ca);
    this.zc()
  }, Pd:function() {
    480 < this.x && (this.velocityX *= -1, this.ea.scaleX = -1)
  }, Pb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ga.sd = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hoshizora_t");
    this.ea = b("tex_stage3", 64, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    if(this.Ra === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Ra = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.je(this.x, this.y, this.ca);
    this.zc()
  }, Pd:function() {
    240 < this.x && (this.velocityX *= -1)
  }, Pb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ga.uf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "yotsuba");
    this.ea = b("tex_stage3", 128, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.je(this.x, this.y, this.ca);
    this.zc();
    this.ca.rd || gls2.ij(this.x, this.y, this.fa).addChildTo(this.parent);
    for(var a = 0;4 > a;a++) {
      this.Oc[a] && this.Oc[a].Ba()
    }
    delete this.Oc;
    this.remove()
  }, Pd:function() {
    this.Oc = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Oc[a] = this.Ae.Fg({aa:gls2.ga.vf, ba:gls2.da.vf, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Oc[a].dir = b;
      this.Oc[a].qg = this;
      this.Oc[a].ml = a;
      this.Oc[a].distance = 64
    }
    gls2.ga.prototype.Pd.call(this);
    return this
  }});
  gls2.ga.vf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "yotsubaLeaf");
    this.ea = b("yotsubaLeaf", 64, 64).setFrameIndex(0)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    this.qg.Oc[this.ml] = l;
    this.remove()
  }});
  gls2.ga.Vd = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "erika");
    this.ea = b("tex3", 64, 128);
    this.ea.setFrameIndex(8)
  }, Pa:B(), draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    gls2.pa.vb(this.x, this.y, this.ca);
    gls2.Xi(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ga.Ef = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "yukishiro");
    this.ea = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, Ba:function() {
    this.zc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Pf = tm.createClass({superClass:gls2.zd, ea:l, init:function(a, f) {
    this.superInit(a, f, "misumi");
    this.ea = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ba:function() {
    this.Se()
  }});
  gls2.ga.Lf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "mishou");
    this.ea = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Lb = gls2.Va(80, 1, 0.9);
    this.vc = gls2.Va(256, 1, 0.9)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Lb.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.Lb.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.vc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, Ba:function() {
    this.zc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.ck = tm.createClass({superClass:gls2.zd, init:function(a, f) {
    this.superInit(a, f, "hyuga");
    this.ea = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, Ba:function() {
    this.Se()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Zf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "higashi");
    this.ea = b("tex_stage3", 256, 128).setFrameIndex(2);
    this.blendMode = "lighter"
  }, Pa:B(), Ba:function() {
    this.zc()
  }, draw:function(a) {
    this.ea.draw(a)
  }, Fi:function(a) {
    if(a) {
      for(a = 0;10 > a;a++) {
        gls2.pa.tg(this.x + gls2.ua.rand(-128, 128), this.y + gls2.ua.rand(-64, 64), this.ca, gls2.ua.rand(4, 10))
      }
      this.alpha = 0.2
    }else {
      for(a = 0;10 > a;a++) {
        gls2.pa.ci(this.x + gls2.ua.rand(-128, 128), this.y + gls2.ua.rand(-64, 64), this.ca, gls2.ua.rand(4, 10))
      }
      this.alpha = 1
    }
  }});
  gls2.ga.Lj = tm.createClass({superClass:gls2.zd, init:function(a, f) {
    this.superInit(a, f, "momozono");
    this.ea = b("tex_stage3", 256, 128).setFrameIndex(4);
    this.ea.setScale(2)
  }, Pa:B(), Ba:function() {
    this.Se()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Vf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hishikawa");
    this.ea = b("tex2", 256, 256).setFrameIndex(2);
    this.ea.setScale(2);
    this.Lb = gls2.Va(60, 1, 0.95);
    this.vc = gls2.Va(500, 1, 0.8)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Lb.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Lb.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.vc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, Ba:function() {
    this.zc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Oj = tm.createClass({superClass:gls2.zd, init:function(a, f) {
    this.superInit(a, f, "aida");
    this.ea = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Lb = gls2.Va(60, 1, 0.95);
    this.vc = gls2.Va(500, 1, 0.8)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Lb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Lb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Lb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Lb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.vc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.cb() : 5 === a.app.frame % 30 && this.ea.bb()
    })
  }, Ba:function() {
    this.Se()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, Yg:l, init:function(a, b, d) {
    this.superInit(a, b, d);
    "string" === typeof a && (this.Yg = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, cb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, d = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Yg + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = d;
    this.srcRect.height = h
  }, bb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, d = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Yg;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = d;
    this.srcRect.height = h
  }})
})();
(function() {
  gls2.da = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.da.rf(this)
    })
  }});
  gls2.da.Aa = function(a, b) {
    var f = gls2.ia[b].We();
    a.on("enterframe", f);
    a.on("completeattack", function() {
      f.stop = j
    })
  };
  gls2.da.rf = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].yg && (a[b].stop = j)
      }
    }
  };
  gls2.da.qa = tm.createClass({superClass:gls2.da, pattern:l, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.Ol = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    var b = this.pattern, f = this.Ol;
    a.on("launch", function() {
      var a = gls2.ua.randf(640 * (f - 0.1), 640 * (f + 0.1));
      this.tweener.clear().wait(gls2.ua.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.da.Aa(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.da.Hc = gls2.da.qa("basic0-0", 0.2);
  gls2.da.rb = gls2.da.qa("basic0-0", 0.4);
  gls2.da.Cd = gls2.da.qa("basic0-0", 0.6);
  gls2.da.qb = gls2.da.qa("basic1-2", 0.2);
  gls2.da.Gc = gls2.da.qa("basic1-2", 0.4);
  gls2.da.Bd = gls2.da.qa("basic1-2", 0.6);
  gls2.da.Ca = tm.createClass({superClass:gls2.da, $a:l, init:function(a) {
    this.superInit();
    this.$a = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.$a = this.$a;
    a.tweener.wait(gls2.ua.rand(0, 1E3)).call(function() {
      this.speed = 6;
      gls2.da.Aa(this, this.$a);
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Ra && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.Pb() && this.Ra && this.remove();
        if(22500 > gls2.Mc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Ob = r
        }
      })
    }.bind(a))
  }});
  gls2.da.sb = gls2.da.Ca("basic1-0");
  var b = tm.createClass({superClass:gls2.da, init:function(a, b, f) {
    this.superInit();
    this.il = a;
    this.hl = b;
    this.Gd = f
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = this.il;
    a.kd = this.hl;
    this.Gd && (a.Gd = [].concat(this.Gd));
    a.xc = 0;
    a.on("enter", function() {
      gls2.da.Aa(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.kd) * this.speed;
      this.y += Math.sin(this.kd) * this.speed;
      this.Ra && !this.Pb() && this.remove();
      for(this.xc = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);0 > this.xc;) {
        this.xc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.xc;) {
        this.xc -= 2 * Math.PI
      }
      this.Ob = this.y < this.fa.y && 4E4 < gls2.Mc(this, this.fa);
      if(this.Gd) {
        for(var a = 0;a < this.Gd.length;a++) {
          var b = this.Gd[a];
          b.frame === this.frame && this.tweener.to({kd:b.dir !== i ? b.dir : this.kd, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.da.sc = b(1, 0.25 * Math.PI);
  gls2.da.Vl = b(1, -1.75 * Math.PI);
  gls2.da.Yd = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.da.va = b(1.6, 0.5 * Math.PI);
  gls2.da.tc = b(1.6, -0.5 * Math.PI);
  gls2.da.Vi = tm.createClass({superClass:gls2.da, Ma:l, init:function(a) {
    this.superInit();
    this.Ma = a
  }, setup:function(a) {
    gls2.da.Aa(a, this.Ma);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.da.gh = gls2.da.Vi("bukky-4-0");
  b = tm.createClass({superClass:gls2.da, Ma:l, Rh:r, init:function(a, b) {
    this.superInit();
    this.Ma = a;
    this.Rh = !!b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Ma = this.Ma;
    a.on("enter", function() {
      gls2.da.Aa(this, this.Ma)
    });
    a.on("enterframe", function() {
      this.Ra && !this.Pb() && this.remove()
    });
    if(!this.Rh) {
      a.on("enterframe", function() {
        this.Ob = this.y < this.fa.y && 4E4 < gls2.Mc(this, this.fa)
      })
    }
  }});
  gls2.da.Tb = b("basic3-0", r);
  gls2.da.Ub = b("basic3-1", r);
  gls2.da.pc = b("cannon2-0", j);
  gls2.da.xf = b("cannon2-3", j);
  gls2.da.Ee = b("cannon3-0", j);
  gls2.da.zf = b("cannon5-0", j);
  var a = tm.createClass({superClass:gls2.da, velocityY:0, Ma:l, delay:0, init:function(a, b, f) {
    this.superInit();
    this.velocityY = a;
    this.Ma = b;
    this.delay = f || 0
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ha = [this.Ma];
    a.Ai = r;
    a.tweener.clear().wait(this.delay).moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.da.Aa(this, this.ha[0]);
      this.Ai = j
    }.bind(a));
    a.on("enterframe", function() {
      this.Ai && (this.y += this.velocityY, 384 < this.y && gls2.da.rf(this), this.Ra && !this.Pb() && this.remove(), this.Ob = this.y < this.fa.y)
    })
  }});
  gls2.da.ed = a(0.5, "kurokawa-1");
  gls2.da.Pj = a(0.5, "kurokawa-4");
  gls2.da.rc = function(b) {
    return a(0.5, "milk-5", b)
  };
  gls2.da.pb = tm.createClass({superClass:gls2.da, Ii:0, Ki:0, Ji:0, Li:0, init:function(a, b, f, q) {
    this.superInit();
    this.Ii = a;
    this.Ki = b;
    this.Ji = f;
    this.Li = q
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.on("enterframe", function() {
      this.rotation = tm.geom.Vector2.sub(this.ca.fa.position, this.position).toAngle() * gls2.ma.RAD_TO_DEG - 90
    });
    var b = this;
    a.tweener.clear().to({x:b.Ii, y:b.Ki}, 1400, "easeInOutQuad").call(function() {
      gls2.da.Aa(this, "ako-5")
    }.bind(a));
    a.one("completeattack", function() {
      this.tweener.clear().to({x:b.Ji, y:b.Li}, 900, "easeInOutQuad").call(function() {
        gls2.da.Aa(this, "ako-5")
      }.bind(this));
      this.one("completeattack", function() {
        this.tweener.clear().to({y:832}, 1900, "easeInQuad")
      })
    })
  }});
  gls2.da.gd = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.Aa(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.Zd = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.Aa(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.eb = tm.createClass({superClass:gls2.da, ri:0, direction:1, delay:0, init:function(a, b, f) {
    this.superInit();
    this.ri = a;
    this.direction = b;
    this.delay = f
  }, setup:function(a) {
    function b(a) {
      return f ? a : 1 - a
    }
    gls2.da.prototype.setup.call(this, a);
    tm.app.Tweener(a).wait(this.delay).call(function() {
      gls2.da.Aa(this, "basic1-3")
    }.bind(a));
    var f = 1 == this.direction;
    switch(this.ri) {
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
  b = tm.createClass({superClass:gls2.da, velocityY:0, Ma:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ma = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ha = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Aa(this, this.ha[0]);
      gls2.pa.ci(this.x, this.y, this.ca, 3)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Ra && !this.Pb() && this.remove();
      this.Ob = this.y < this.fa.y
    })
  }});
  gls2.da.Ka = b(0.5, "akane");
  gls2.da.ra = tm.createClass({superClass:gls2.da, $a:l, init:function(a, b) {
    this.superInit();
    this.$a = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.$a = this.$a;
    a.speed = this.speed;
    a.tweener.wait(gls2.ua.rand(0, 1E3)).call(function() {
      gls2.da.Aa(this, this.$a);
      var a = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Ra && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * a - 90;
        !this.Pb() && this.Ra && this.remove();
        if(22500 > gls2.Mc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Ob = r
        }
      })
    }.bind(a))
  }});
  gls2.da.wb = gls2.da.ra(3, 1);
  gls2.da.xb = gls2.da.ra(6, 1);
  gls2.da.yb = gls2.da.ra(12, 1);
  gls2.da.Bb = tm.createClass({superClass:gls2.da, $a:l, init:function(a) {
    this.superInit();
    this.$a = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.$a = this.$a;
    a.speed = this.speed;
    a.tweener.wait(gls2.ua.rand(0, 1E3)).call(function() {
      gls2.da.Aa(this, this.$a);
      this.Ab = 0;
      this.on("enterframe", function() {
        this.y < this.Nl ? this.$c = this.y += 0.5 : (this.x += this.speed, this.y = this.$c + 8 * Math.sin(this.Ab));
        this.Ab += 0.03
      })
    }.bind(a))
  }});
  gls2.da.bc = gls2.da.Bb(1);
  gls2.da.qm = gls2.da.Bb(2);
  gls2.da.Kh = tm.createClass({superClass:gls2.da, $a:l, init:function(a) {
    this.superInit();
    this.$a = "aguri";
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.$a = this.$a;
    a.speed = this.speed;
    a.tweener.wait(gls2.ua.rand(0, 1E3)).call(function() {
      gls2.da.Aa(this, this.$a);
      this.Ab = 0;
      this.on("enterframe", function() {
        this.x += this.speed;
        this.y = this.$c + 8 * Math.sin(this.Ab);
        this.Ab += 0.03
      })
    }.bind(a))
  }});
  gls2.da.Xl = gls2.da.Kh(1);
  gls2.da.td = tm.createClass({superClass:gls2.da, velocityX:0, Ma:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ma = "miyuki_y"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ha = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Aa(this, this.ha[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Ra && !this.Pb() && this.remove();
      this.Ob = this.y < this.fa.y
    })
  }});
  gls2.da.td = gls2.da.td(1);
  gls2.da.sd = tm.createClass({superClass:gls2.da, velocityX:0, Ma:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ma = "miyuki_t"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ha = [this.Ma];
    a.xi = 0;
    a.tweener.clear().call(function() {
      gls2.da.Aa(this, this.ha[0])
    }.bind(a));
    a.on("enterframe", function() {
      0 == this.xi ? (this.y += 0.5, 256 < this.y && this.xi++) : this.x += this.velocityX;
      this.Ra && !this.Pb() && this.remove()
    })
  }});
  gls2.da.sd = gls2.da.sd(0.5);
  b = tm.createClass({superClass:gls2.da, velocityX:0, Ma:l, init:function() {
    this.superInit();
    this.Ma = "alice"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = 0.3;
    a.ha = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Aa(this, this.ha[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Ra && !this.Pb() && this.remove();
      this.Ob = this.y < this.fa.y
    })
  }});
  gls2.da.uf = b();
  b = tm.createClass({superClass:gls2.da, Ma:l, init:function() {
    this.superInit();
    this.Ma = "aliceLeaf"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Aa(this, this.ha[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.qg.x, b = this.qg.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      a = ~~(180 * Math.atan2(b - this.y, a - this.x) / 3.14159);
      this.ea.setFrameIndex(~~(22.5 * ((0 > a ? a + 360 : a) / 360)) % 16, 64, 64);
      this.Ra && !this.Pb() && this.remove();
      this.Ob = this.y < this.fa.y;
      this.oa++
    })
  }});
  gls2.da.vf = b();
  gls2.da.rh = a(0.3, "komachi-1");
  gls2.da.sh = a(0.5, "komachi-2");
  gls2.da.th = a(0.5, "komachi-3");
  gls2.da.Hf = a(0.5, "komachi-4");
  gls2.da.Wd = tm.createClass({superClass:gls2.da, Ci:0, init:function(a) {
    this.superInit();
    this.Ci = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    tm.app.Tweener(a).to({x:480 * this.Ci}, 2800, "easeOutQuad").call(function() {
      gls2.da.Aa(this, "mktn-5")
    }.bind(a));
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.da.Tf = a(0.1, "nozomi-4");
  gls2.da.Uf = a(0.3, "nozomi-5");
  gls2.da.Vd = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.Aa(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Ob = this.Ra
    })
  }});
  gls2.da.Vd = gls2.da.Vd();
  b = tm.createClass({superClass:gls2.da, ha:l, jf:0, init:function(a, b) {
    this.superInit();
    this.ha = a;
    this.jf = b || 1500
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.jf = this.jf;
    a.jb = r;
    a.Za = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.jb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.jb === r || 0 >= this.sa) && this.jf < this.frame && this.Za === r) {
        this.Za = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Ef = b(["honoka-1"]);
  gls2.da.Pf = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.jb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.jb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Qj = gls2.da.Pf();
  gls2.da.Qf = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Qf = gls2.da.Qf();
  gls2.da.Rf = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.sa || gls2.da.Aa(this, "nagisa-3-1")
    })
  }});
  gls2.da.Rf = gls2.da.Rf();
  gls2.da.Lf = b(["mai-1", "mai-2"]);
  gls2.da.Wf = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.jb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.jb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Wf = gls2.da.Wf();
  gls2.da.Xf = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Xf = gls2.da.Xf();
  gls2.da.Yf = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Yf = gls2.da.Yf();
  var f = tm.createClass({superClass:gls2.da, ha:l, init:function(a) {
    this.superInit();
    this.ha = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.jb = r;
    a.Za = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.jb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.ua.rand(0, 100), d = 2 * gls2.ua.random() * Math.PI, f = gls2.ua.randf(48, 144);
        20 < b && 300 < this.frame ? (this.Fi(j), this.tweener.move(240 + Math.cos(d) * f, 192 + 0.5 * Math.sin(d) * f, 3E3, "easeInOutQuad").call(this.Fi()).call(a)) : this.tweener.move(240 + Math.cos(d) * f, 192 + 0.5 * Math.sin(d) * f, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.jb === r || 0 >= this.sa) && 1500 < this.frame && this.Za === r) {
        this.Za = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Zf = f(["setsuna-1"]);
  gls2.da.If = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.jb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.jb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.If = gls2.da.If();
  gls2.da.Jf = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.jb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.jb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Jf = gls2.da.Jf();
  gls2.da.Kf = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.jb = r;
    a.Za = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.jb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Kf = gls2.da.Kf();
  gls2.da.Vf = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.da.Mf = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.jb = r;
    a.Za = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.jb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.ua.randf(-48, 48);
        this.tweener.move(Math.clamp(this.fa.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Za) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Mf = gls2.da.Mf();
  gls2.da.Nf = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.4 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Nf = gls2.da.Nf();
  gls2.da.Of = tm.createClass({superClass:gls2.da, ha:l, init:function() {
    this.superInit();
    this.ha = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ha = [].concat(this.ha);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ha.shift();
        gls2.da.Aa(this, a);
        this.ha.push(a)
      }
    })
  }});
  gls2.da.Of = gls2.da.Of()
})();
(function() {
  var b = gls2.ga, a = gls2.da;
  gls2.jh = {"heri1-left":[{aa:b.Ca, ba:a.Hc, x:48, y:-100}, {aa:b.Ca, ba:a.rb, x:96, y:-100}, {aa:b.Ca, ba:a.Hc, x:144, y:-100}, {aa:b.Ca, ba:a.rb, x:192, y:-100}, {aa:b.Ca, ba:a.Hc, x:240, y:-100}], "heri1-center":[{aa:b.Ca, ba:a.Hc, x:144, y:-100}, {aa:b.Ca, ba:a.rb, x:192, y:-100}, {aa:b.Ca, ba:a.Hc, x:240, y:-100}, {aa:b.Ca, ba:a.rb, x:288, y:-100}, {aa:b.Ca, ba:a.Hc, x:336, y:-100}], "heri1-right":[{aa:b.Ca, ba:a.Hc, x:240, y:-100}, {aa:b.Ca, ba:a.rb, x:288, y:-100}, {aa:b.Ca, ba:a.Hc, x:336, 
  y:-100}, {aa:b.Ca, ba:a.rb, x:384, y:-100}, {aa:b.Ca, ba:a.Hc, x:432, y:-100}], "heri1-left2":[{aa:b.Ca, ba:a.rb, x:48, y:-100}, {aa:b.Ca, ba:a.Cd, x:96, y:-100}, {aa:b.Ca, ba:a.rb, x:144, y:-100}, {aa:b.Ca, ba:a.Cd, x:192, y:-100}, {aa:b.Ca, ba:a.rb, x:240, y:-100}], "heri1-center2":[{aa:b.Ca, ba:a.rb, x:144, y:-100}, {aa:b.Ca, ba:a.Cd, x:192, y:-100}, {aa:b.Ca, ba:a.rb, x:240, y:-100}, {aa:b.Ca, ba:a.Cd, x:288, y:-100}, {aa:b.Ca, ba:a.rb, x:336, y:-100}], "heri1-right2":[{aa:b.Ca, ba:a.rb, x:240, 
  y:-100}, {aa:b.Ca, ba:a.Cd, x:288, y:-100}, {aa:b.Ca, ba:a.rb, x:336, y:-100}, {aa:b.Ca, ba:a.Cd, x:384, y:-100}, {aa:b.Ca, ba:a.rb, x:432, y:-100}], "heri2-left":[{aa:b.qa, ba:a.sb, x:48, y:-100}, {aa:b.qa, ba:a.sb, x:96, y:-100}, {aa:b.qa, ba:a.sb, x:144, y:-100}, {aa:b.qa, ba:a.sb, x:192, y:-100}, {aa:b.qa, ba:a.sb, x:240, y:-100}], "heri2-center":[{aa:b.qa, ba:a.sb, x:144, y:-100}, {aa:b.qa, ba:a.sb, x:192, y:-100}, {aa:b.qa, ba:a.sb, x:240, y:-100}, {aa:b.qa, ba:a.sb, x:288, y:-100}, {aa:b.qa, 
  ba:a.sb, x:336, y:-100}], "heri2-right":[{aa:b.qa, ba:a.sb, x:240, y:-100}, {aa:b.qa, ba:a.sb, x:288, y:-100}, {aa:b.qa, ba:a.sb, x:336, y:-100}, {aa:b.qa, ba:a.sb, x:384, y:-100}, {aa:b.qa, ba:a.sb, x:432, y:-100}], "heri1-4-left":[{aa:b.qa, ba:a.qb, x:48, y:-100}, {aa:b.qa, ba:a.qb, x:96, y:-100}, {aa:b.qa, ba:a.qb, x:144, y:-100}, {aa:b.qa, ba:a.qb, x:192, y:-100}, {aa:b.qa, ba:a.qb, x:240, y:-100}], "heri1-4-center":[{aa:b.qa, ba:a.qb, x:144, y:-100}, {aa:b.qa, ba:a.qb, x:192, y:-100}, {aa:b.qa, 
  ba:a.qb, x:240, y:-100}, {aa:b.qa, ba:a.qb, x:288, y:-100}, {aa:b.qa, ba:a.qb, x:336, y:-100}], "heri1-4-right":[{aa:b.qa, ba:a.qb, x:240, y:-100}, {aa:b.qa, ba:a.qb, x:288, y:-100}, {aa:b.qa, ba:a.qb, x:336, y:-100}, {aa:b.qa, ba:a.qb, x:384, y:-100}, {aa:b.qa, ba:a.qb, x:432, y:-100}], "heri1-4-left2":[{aa:b.qa, ba:a.Gc, x:48, y:-100}, {aa:b.qa, ba:a.Bd, x:96, y:-100}, {aa:b.qa, ba:a.Gc, x:144, y:-100}, {aa:b.qa, ba:a.Bd, x:192, y:-100}, {aa:b.qa, ba:a.Gc, x:240, y:-100}], "heri1-4-center2":[{aa:b.qa, 
  ba:a.Gc, x:144, y:-100}, {aa:b.qa, ba:a.Bd, x:192, y:-100}, {aa:b.qa, ba:a.Gc, x:240, y:-100}, {aa:b.qa, ba:a.Bd, x:288, y:-100}, {aa:b.qa, ba:a.Gc, x:336, y:-100}], "heri1-4-right2":[{aa:b.qa, ba:a.Gc, x:240, y:-100}, {aa:b.qa, ba:a.Bd, x:288, y:-100}, {aa:b.qa, ba:a.Gc, x:336, y:-100}, {aa:b.qa, ba:a.Bd, x:384, y:-100}, {aa:b.qa, ba:a.Gc, x:432, y:-100}], "tankRD-left":[{aa:b.na, ba:a.sc, x:78, y:-50}, {aa:b.na, ba:a.sc, x:28, y:-100}, {aa:b.na, ba:a.sc, x:-22, y:-150}, {aa:b.na, ba:a.sc, x:-72, 
  y:-200}, {aa:b.na, ba:a.sc, x:-122, y:-250}], "tankRD-center":[{aa:b.na, ba:a.sc, x:222, y:-50}, {aa:b.na, ba:a.sc, x:172, y:-100}, {aa:b.na, ba:a.sc, x:122, y:-150}, {aa:b.na, ba:a.sc, x:72, y:-200}, {aa:b.na, ba:a.sc, x:22, y:-250}], "tankL-top":[{aa:b.na, ba:a.Yd, x:550, y:64}, {aa:b.na, ba:a.Yd, x:620, y:64}, {aa:b.na, ba:a.Yd, x:690, y:64}, {aa:b.na, ba:a.Yd, x:760, y:64}, {aa:b.na, ba:a.Yd, x:830, y:64}], "tank5-left":[{aa:b.na, ba:a.va, x:48, y:-70}, {aa:b.na, ba:a.va, x:48, y:-140}, {aa:b.na, 
  ba:a.va, x:48, y:-210}, {aa:b.na, ba:a.va, x:48, y:-280}, {aa:b.na, ba:a.va, x:48, y:-350}], "tank5-center":[{aa:b.na, ba:a.va, x:240, y:-70}, {aa:b.na, ba:a.va, x:240, y:-140}, {aa:b.na, ba:a.va, x:240, y:-210}, {aa:b.na, ba:a.va, x:240, y:-280}, {aa:b.na, ba:a.va, x:240, y:-350}], "tank15-top":[{aa:b.na, ba:a.va, x:48, y:-70}, {aa:b.na, ba:a.va, x:48, y:-140}, {aa:b.na, ba:a.va, x:48, y:-210}, {aa:b.na, ba:a.va, x:48, y:-280}, {aa:b.na, ba:a.va, x:48, y:-350}, {aa:b.na, ba:a.va, x:240, y:-70}, 
  {aa:b.na, ba:a.va, x:240, y:-140}, {aa:b.na, ba:a.va, x:240, y:-210}, {aa:b.na, ba:a.va, x:240, y:-280}, {aa:b.na, ba:a.va, x:240, y:-350}, {aa:b.na, ba:a.va, x:432, y:-70}, {aa:b.na, ba:a.va, x:432, y:-140}, {aa:b.na, ba:a.va, x:432, y:-210}, {aa:b.na, ba:a.va, x:432, y:-280}, {aa:b.na, ba:a.va, x:432, y:-350}], "tank25-top":[{aa:b.na, ba:a.va, x:48, y:-70}, {aa:b.na, ba:a.va, x:48, y:-140}, {aa:b.na, ba:a.va, x:48, y:-210}, {aa:b.na, ba:a.va, x:48, y:-280}, {aa:b.na, ba:a.va, x:48, y:-350}, {aa:b.na, 
  ba:a.va, x:240, y:-70}, {aa:b.na, ba:a.va, x:240, y:-140}, {aa:b.na, ba:a.va, x:240, y:-210}, {aa:b.na, ba:a.va, x:240, y:-280}, {aa:b.na, ba:a.va, x:240, y:-350}, {aa:b.na, ba:a.va, x:432, y:-70}, {aa:b.na, ba:a.va, x:432, y:-140}, {aa:b.na, ba:a.va, x:432, y:-210}, {aa:b.na, ba:a.va, x:432, y:-280}, {aa:b.na, ba:a.va, x:432, y:-350}, {aa:b.na, ba:a.tc, x:144, y:710}, {aa:b.na, ba:a.tc, x:144, y:780}, {aa:b.na, ba:a.tc, x:144, y:850}, {aa:b.na, ba:a.tc, x:144, y:920}, {aa:b.na, ba:a.tc, x:144, 
  y:990}, {aa:b.na, ba:a.tc, x:336, y:710}, {aa:b.na, ba:a.tc, x:336, y:780}, {aa:b.na, ba:a.tc, x:336, y:850}, {aa:b.na, ba:a.tc, x:336, y:920}, {aa:b.na, ba:a.tc, x:336, y:990}], "bukky-4-r":[{aa:b.fh, ba:a.gh, x:480, y:-50}], "bukky-4-l":[{aa:b.fh, ba:a.gh, x:0, y:-50}], "cannon-0":[{aa:b.Na, ba:a.Tb, x:48, y:-100}], "cannon-1":[{aa:b.Na, ba:a.Tb, x:96, y:-100}], "cannon-2":[{aa:b.Na, ba:a.Tb, x:144, y:-100}], "cannon-3":[{aa:b.Na, ba:a.Tb, x:192, y:-100}], "cannon-4":[{aa:b.Na, ba:a.Tb, x:240, 
  y:-100}], "cannon-5":[{aa:b.Na, ba:a.Tb, x:288, y:-100}], "cannon-6":[{aa:b.Na, ba:a.Tb, x:336, y:-100}], "cannon-7":[{aa:b.Na, ba:a.Tb, x:384, y:-100}], "cannon-8":[{aa:b.Na, ba:a.Tb, x:432, y:-100}], "cannon-R0":[{aa:b.Na, ba:a.Tb, x:550, y:128}], "cannon-R1":[{aa:b.Na, ba:a.Tb, x:550, y:192}], "cannon-R2":[{aa:b.Na, ba:a.Tb, x:550, y:256}], "yayoi-0":[{aa:b.Na, ba:a.Ub, x:48, y:-100}], "yayoi-1":[{aa:b.Na, ba:a.Ub, x:96, y:-100}], "yayoi-2":[{aa:b.Na, ba:a.Ub, x:144, y:-100}], "yayoi-3":[{aa:b.Na, 
  ba:a.Ub, x:192, y:-100}], "yayoi-4":[{aa:b.Na, ba:a.Ub, x:240, y:-100}], "yayoi-5":[{aa:b.Na, ba:a.Ub, x:288, y:-100}], "yayoi-6":[{aa:b.Na, ba:a.Ub, x:336, y:-100}], "yayoi-7":[{aa:b.Na, ba:a.Ub, x:384, y:-100}], "yayoi-8":[{aa:b.Na, ba:a.Ub, x:432, y:-100}], "yayoi-R0":[{aa:b.Na, ba:a.Ub, x:550, y:128}], "yayoi-R1":[{aa:b.Na, ba:a.Ub, x:550, y:192}], "yayoi-R2":[{aa:b.Na, ba:a.Ub, x:550, y:256}], "tsubomi-0":[{aa:b.Le, ba:a.Ee, x:96, y:-100}], "tsubomi-1":[{aa:b.Le, ba:a.Ee, x:240, y:-100}], 
  "tsubomi-2":[{aa:b.Le, ba:a.Ee, x:384, y:-100}], "tsubomi-R0":[{aa:b.Le, ba:a.Ee, x:580, y:128}], "itsuki-0":[{aa:b.Gf, ba:a.zf, x:96, y:-100}], "itsuki-1":[{aa:b.Gf, ba:a.zf, x:240, y:-100}], "itsuki-2":[{aa:b.Gf, ba:a.zf, x:384, y:-100}], "makoto-0":[{aa:b.oc, ba:a.pc, x:48, y:-100}], "makoto-1":[{aa:b.oc, ba:a.pc, x:96, y:-100}], "makoto-2":[{aa:b.oc, ba:a.pc, x:144, y:-100}], "makoto-3":[{aa:b.oc, ba:a.pc, x:192, y:-100}], "makoto-4":[{aa:b.oc, ba:a.pc, x:240, y:-100}], "makoto-5":[{aa:b.oc, 
  ba:a.pc, x:288, y:-100}], "makoto-6":[{aa:b.oc, ba:a.pc, x:336, y:-100}], "makoto-7":[{aa:b.oc, ba:a.pc, x:384, y:-100}], "makoto-8":[{aa:b.oc, ba:a.pc, x:432, y:-100}], "makoto-R0":[{aa:b.oc, ba:a.pc, x:580, y:128}], "karen-3-2":[{aa:b.yf, ba:a.xf, x:96, y:-100}], "karen-3-5":[{aa:b.yf, ba:a.xf, x:240, y:-100}], "karen-3-8":[{aa:b.yf, ba:a.xf, x:384, y:-100}], "fighter-m-0":[{aa:b.Qc, ba:a.ed, x:96, y:-192}], "fighter-m-1":[{aa:b.Qc, ba:a.ed, x:144, y:-192}], "fighter-m-2":[{aa:b.Qc, ba:a.ed, 
  x:192, y:-192}], "fighter-m-3":[{aa:b.Qc, ba:a.ed, x:240, y:-192}], "fighter-m-4":[{aa:b.Qc, ba:a.ed, x:288, y:-192}], "fighter-m-5":[{aa:b.Qc, ba:a.ed, x:336, y:-192}], "fighter-m-6":[{aa:b.Qc, ba:a.ed, x:384, y:-192}], "fighter-m4-0":[{aa:b.Qc, ba:a.Pj, x:96, y:-192}], "tsukikage-r":[{aa:b.Vb, ba:a.gd(700), x:624, y:256}, {aa:b.Vb, ba:a.gd(600), x:720, y:256}, {aa:b.Vb, ba:a.gd(500), x:576, y:320}, {aa:b.Vb, ba:a.gd(400), x:672, y:320}, {aa:b.Vb, ba:a.gd(300), x:768, y:320}, {aa:b.Vb, ba:a.gd(200), 
  x:624, y:384}, {aa:b.Vb, ba:a.gd(100), x:720, y:384}], "tsukikage-l":[{aa:b.Vb, ba:a.Zd(700), x:-144, y:384}, {aa:b.Vb, ba:a.Zd(600), x:-240, y:384}, {aa:b.Vb, ba:a.Zd(500), x:-96, y:320}, {aa:b.Vb, ba:a.Zd(400), x:-192, y:320}, {aa:b.Vb, ba:a.Zd(200), x:-144, y:256}], "urara5-0":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.eb, ba:a.eb(0, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-1":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.eb, ba:a.eb(0, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "urara5-2":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.eb, ba:a.eb(1, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-3":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.eb, ba:a.eb(1, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-4":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.eb, ba:a.eb(2, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-5":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.eb, ba:a.eb(2, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-6":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.eb, ba:a.eb(3, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-7":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.eb, ba:a.eb(3, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "milk5-0":[{aa:b.qc, ba:a.rc(2E3), x:384, y:-256}, {aa:b.qc, ba:a.rc(1500), x:312, y:-224}, {aa:b.qc, ba:a.rc(1E3), x:240, y:-192}, {aa:b.qc, ba:a.rc(500), x:168, y:-160}, {aa:b.qc, ba:a.rc(0), x:96, y:-128}], "milk5-1":[{aa:b.qc, ba:a.rc(2E3), x:96, y:-256}, {aa:b.qc, ba:a.rc(1500), x:168, y:-224}, {aa:b.qc, ba:a.rc(1E3), x:240, y:-192}, {aa:b.qc, ba:a.rc(500), x:312, y:-160}, {aa:b.qc, ba:a.rc(0), x:384, y:-128}], "ako5-0":[{aa:b.ob, ba:a.pb(240, 128, 96, 256), x:240, y:-192}, {aa:b.ob, 
  ba:a.pb(384, 256, 240, 128), x:384, y:-192}, {aa:b.ob, ba:a.pb(360, 512, 384, 256), x:360, y:-192}, {aa:b.ob, ba:a.pb(120, 512, 360, 512), x:120, y:-192}, {aa:b.ob, ba:a.pb(96, 256, 120, 512), x:96, y:-192}], "ako5-1":[{aa:b.ob, ba:a.pb(240, 128, 384, 256), x:240, y:-192}, {aa:b.ob, ba:a.pb(384, 256, 360, 512), x:384, y:-192}, {aa:b.ob, ba:a.pb(360, 512, 120, 512), x:360, y:-192}, {aa:b.ob, ba:a.pb(120, 512, 96, 256), x:120, y:-192}, {aa:b.ob, ba:a.pb(96, 256, 240, 128), x:96, y:-192}], "ako5-2":[{aa:b.ob, 
  ba:a.pb(240, 128, 120, 512), x:240, y:-192}, {aa:b.ob, ba:a.pb(384, 256, 96, 256), x:384, y:-192}, {aa:b.ob, ba:a.pb(360, 512, 240, 128), x:360, y:-192}, {aa:b.ob, ba:a.pb(120, 512, 384, 256), x:120, y:-192}, {aa:b.ob, ba:a.pb(96, 256, 360, 512), x:96, y:-192}], "komachi-0":[{aa:b.Ic, ba:a.rh, x:144, y:-192}], "komachi-1":[{aa:b.Ic, ba:a.rh, x:336, y:-192}], "komachi2-0":[{aa:b.Ic, ba:a.sh, x:144, y:-192}], "komachi2-1":[{aa:b.Ic, ba:a.sh, x:336, y:-192}], "komachi3-0":[{aa:b.Ic, ba:a.th, x:144, 
  y:-192}], "komachi3-1":[{aa:b.Ic, ba:a.th, x:336, y:-192}], "komachi4-0":[{aa:b.Ic, ba:a.Hf, x:144, y:-192}], "komachi4-1":[{aa:b.Ic, ba:a.Hf, x:336, y:-192}], "komachi4-2":[{aa:b.Ic, ba:a.Hf, x:240, y:-192}], "nozomi4-0":[{aa:b.Dd, ba:a.Tf, x:144, y:-192}], "nozomi4-1":[{aa:b.Dd, ba:a.Tf, x:240, y:-192}], "nozomi4-2":[{aa:b.Dd, ba:a.Tf, x:336, y:-192}], "nozomi5-0":[{aa:b.Dd, ba:a.Uf, x:144, y:-320}], "nozomi5-1":[{aa:b.Dd, ba:a.Uf, x:240, y:-192}], "nozomi5-2":[{aa:b.Dd, ba:a.Uf, x:336, y:-320}], 
  "mktn5-0":[{aa:b.Wd, ba:a.Wd(0.6), x:624, y:128}], "mktn5-1":[{aa:b.Wd, ba:a.Wd(0.4), x:-144, y:320}], "akane-center":[{aa:b.Ka, ba:a.Ka, x:144, y:130}, {aa:b.Ka, ba:a.Ka, x:192, y:80}, {aa:b.Ka, ba:a.Ka, x:240, y:140}, {aa:b.Ka, ba:a.Ka, x:288, y:80}, {aa:b.Ka, ba:a.Ka, x:336, y:130}], "akane-right":[{aa:b.Ka, ba:a.Ka, x:384, y:160}, {aa:b.Ka, ba:a.Ka, x:288, y:120}, {aa:b.Ka, ba:a.Ka, x:288, y:80}, {aa:b.Ka, ba:a.Ka, x:384, y:40}], "akane-left":[{aa:b.Ka, ba:a.Ka, x:96, y:160}, {aa:b.Ka, ba:a.Ka, 
  x:144, y:120}, {aa:b.Ka, ba:a.Ka, x:144, y:80}, {aa:b.Ka, ba:a.Ka, x:96, y:40}], "nao1-left":[{aa:b.ra, ba:a.wb, x:48, y:-100}, {aa:b.ra, ba:a.wb, x:96, y:-100}, {aa:b.ra, ba:a.wb, x:144, y:-100}, {aa:b.ra, ba:a.wb, x:192, y:-100}, {aa:b.ra, ba:a.wb, x:240, y:-100}], "nao1-right":[{aa:b.ra, ba:a.wb, x:240, y:-100}, {aa:b.ra, ba:a.wb, x:288, y:-100}, {aa:b.ra, ba:a.wb, x:336, y:-100}, {aa:b.ra, ba:a.wb, x:384, y:-100}, {aa:b.ra, ba:a.wb, x:432, y:-100}], "nao1-center":[{aa:b.ra, ba:a.wb, x:144, 
  y:-100}, {aa:b.ra, ba:a.wb, x:192, y:-100}, {aa:b.ra, ba:a.wb, x:240, y:-100}, {aa:b.ra, ba:a.wb, x:288, y:-100}, {aa:b.ra, ba:a.wb, x:336, y:-100}], "nao2-left":[{aa:b.ra, ba:a.xb, x:48, y:-100}, {aa:b.ra, ba:a.xb, x:96, y:-100}, {aa:b.ra, ba:a.xb, x:144, y:-100}, {aa:b.ra, ba:a.xb, x:192, y:-100}, {aa:b.ra, ba:a.xb, x:240, y:-100}], "nao2-right":[{aa:b.ra, ba:a.xb, x:240, y:-100}, {aa:b.ra, ba:a.xb, x:288, y:-100}, {aa:b.ra, ba:a.xb, x:336, y:-100}, {aa:b.ra, ba:a.xb, x:384, y:-100}, {aa:b.ra, 
  ba:a.xb, x:432, y:-100}], "nao2-center":[{aa:b.ra, ba:a.xb, x:144, y:-100}, {aa:b.ra, ba:a.xb, x:192, y:-100}, {aa:b.ra, ba:a.xb, x:240, y:-100}, {aa:b.ra, ba:a.xb, x:288, y:-100}, {aa:b.ra, ba:a.xb, x:336, y:-100}], "nao3-left":[{aa:b.ra, ba:a.yb, x:48, y:-100}, {aa:b.ra, ba:a.yb, x:96, y:-100}, {aa:b.ra, ba:a.yb, x:144, y:-100}, {aa:b.ra, ba:a.yb, x:192, y:-100}, {aa:b.ra, ba:a.yb, x:240, y:-100}], "nao3-right":[{aa:b.ra, ba:a.yb, x:240, y:-100}, {aa:b.ra, ba:a.yb, x:288, y:-100}, {aa:b.ra, ba:a.yb, 
  x:336, y:-100}, {aa:b.ra, ba:a.yb, x:384, y:-100}, {aa:b.ra, ba:a.yb, x:432, y:-100}], "nao3-center":[{aa:b.ra, ba:a.yb, x:144, y:-100}, {aa:b.ra, ba:a.yb, x:192, y:-100}, {aa:b.ra, ba:a.yb, x:240, y:-100}, {aa:b.ra, ba:a.yb, x:288, y:-100}, {aa:b.ra, ba:a.yb, x:336, y:-100}], "reika1-left":[{aa:b.Bb, ba:a.bc, x:48, y:-64}, {aa:b.Bb, ba:a.bc, x:72, y:-128}, {aa:b.Bb, ba:a.bc, x:96, y:-64}, {aa:b.Bb, ba:a.bc, x:120, y:-128}, {aa:b.Bb, ba:a.bc, x:144, y:-64}, {aa:b.Bb, ba:a.bc, x:168, y:-128}], "reika1-right":[{aa:b.Bb, 
  ba:a.bc, x:528, y:-64}, {aa:b.Bb, ba:a.bc, x:552, y:-128}, {aa:b.Bb, ba:a.bc, x:576, y:-64}, {aa:b.Bb, ba:a.bc, x:600, y:-128}, {aa:b.Bb, ba:a.bc, x:624, y:-64}, {aa:b.Bb, ba:a.bc, x:648, y:-128}], miyuki_y1:[{aa:b.td, ba:a.td, x:-128, y:140}], miyuki_y2:[{aa:b.td, ba:a.td, x:608, y:60}], miyuki_t1:[{aa:b.sd, ba:a.sd, x:336, y:-128}], miyuki_t2:[{aa:b.sd, ba:a.sd, x:144, y:-128}], alice:[{aa:b.uf, ba:a.uf, x:240, y:-64}], erika:[{aa:b.Vd, ba:a.Vd, x:240, y:-100}], yukishiro:[{aa:b.Ef, ba:a.Ef, 
  x:240, y:-100}], misumi:[{aa:b.Pf, ba:[a.Qj, a.Qf, a.Rf], x:240, y:-100, ic:j}], mai:[{aa:b.Lf, ba:a.Lf, x:780, y:128}], hyuga:[{aa:b.ck, ba:[a.Wf, a.Xf, a.Yf], x:240, y:-100, ic:j}], higashi:[{aa:b.Zf, ba:a.Zf, x:780, y:128}], momozono:[{aa:b.Lj, ba:[a.If, a.Jf, a.Kf], x:240, y:-100, ic:j}], rikka:[{aa:b.Vf, ba:a.Vf, x:240, y:-100}], mana:[{aa:b.Oj, ba:[a.Mf, a.Nf, a.Of], x:240, y:-100, ic:j}]}
})();
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, h, k, m) {
    return c.action([c.fire(c.direction(b, "absolute"), f, h || u, k, m), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, h || u, k, m)])])
  }
  function f(a, b, c, f, h) {
    return function(k) {
      return d(a, b, c, k, f, h, i, i)
    }
  }
  function d(a, b, d, f, h, k, m, n) {
    return c.action([c.fire(c.direction(b), f, h || u, k, m, n), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, h || u, k, m, n)])])
  }
  function h(a) {
    return c.fire(c.direction(0), a || n, E)
  }
  function m(a) {
    return c.fire(c.direction(0), a || n, u)
  }
  function q(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function w(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function v(a) {
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
  function O(a) {
    return c.Ia(a, {frame:3, re:j})
  }
  function M(a) {
    return c.Ia(a, {frame:2, re:j})
  }
  function C(a) {
    return c.Ia(a, {visible:r})
  }
  function A(a) {
    return c.Ia(a, {frame:4, hc:j})
  }
  function H(a) {
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
    return c.Ia(a, {frame:3, hc:j})
  }
  function K(a) {
    return c.Ia(a, {frame:1, hc:j})
  }
  function z(a) {
    return c.Ia(a, {frame:2, hc:j})
  }
  function F(a) {
    return c.Ia(a, {frame:0, hc:j})
  }
  gls2.ia = {};
  var c = I.Ja;
  gls2.ia["basic0-0"] = new I.ka({top:c.action([m])});
  gls2.ia["basic0-1"] = new I.ka({top:c.action([b(v, -0.01, 8, f(3, -15, 15))])});
  gls2.ia["basic1-0"] = new I.ka({top:c.action([c.repeat(999, [k(40), m(n)])])});
  gls2.ia["basic1-1"] = new I.ka({top:c.action([c.repeat(999, [k(20), m(n)])])});
  gls2.ia["basic1-2"] = new I.ka({top:c.action([k("10+$rand*100"), d(3, -20, 20, n)])});
  gls2.ia["basic1-3"] = new I.ka({top:c.action([c.repeat(999, [k("20+$rand*80"), d(3, -20, 20, n)])])});
  gls2.ia["basic2-0"] = new I.ka({top:c.action([c.repeat(999, [k(50), m(n)])])});
  gls2.ia["basic3-0"] = new I.ka({top:c.action([c.wait(20), c.repeat(999, [k(100), b(n, 0.1, 3, h)])])});
  gls2.ia["basic3-1"] = new I.ka({top:c.action([c.wait(20), c.repeat(999, [k(40), b(n, 0.1, 3, h)])])});
  gls2.ia["bukky-4-0"] = new I.ka({top0:c.action([k(30), c.repeat(999, [c.fire(c.direction(-40), n, z), c.repeat(3, [c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(-80, "sequence"), n, z), k(5)]), k(70)])]), top1:c.action([k(20), c.fire(c.direction(180, "absolute"), p, K), c.repeat(999, [c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), 
  p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(-90, "sequence"), p, K), k(5)])])});
  gls2.ia["cannon2-0"] = new I.ka({top0:c.action([c.repeat(999, [k(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", p), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", p), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", p), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", p), k(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", n), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", n), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", n), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", n)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), s, A), c.fire(c.direction(" 90+$loop.index*10", "absolute"), s, A), c.fire(c.direction("180+$loop.index*10", "absolute"), s, A), c.fire(c.direction("270+$loop.index*10", "absolute"), s, A), c.fire(c.direction("  0-$loop.index*10", "absolute"), s, A), c.fire(c.direction(" 90-$loop.index*10", "absolute"), s, A), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), s, A), c.fire(c.direction("270-$loop.index*10", "absolute"), s, A), k(10)])]), top2:c.action([c.repeat(999, [k(43), d(30, 0, 348, n, E)])])});
  gls2.ia["cannon2-3"] = new I.ka({top0:c.action([c.repeat(999, [c.Ea("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), C(c.wa("ivs0", "$d")))]), k(10), c.fire(c.direction(39, "sequence"), c.speed(1), C(c.wa("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.Ea("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), C(c.wa("ivs1", "$d")))]), k(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), C(c.wa("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, E), c.Xa()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), p, function(a) {
    return c.Ia(a, {frame:7, hc:j})
  }), c.fire(c.direction("$1+5", "relative"), p, function(a) {
    return c.Ia(a, {frame:6, hc:j})
  }), c.Xa()])});
  gls2.ia["cannon3-0"] = new I.ka({top0:c.action([c.repeat(999, [k(80), b(p, 0.01, 5, f(5, -30, 30, E, c.offsetX(-60))), b(p, 0.01, 5, f(5, -30, 30, E)), b(p, 0.01, 5, f(5, -30, 30, E, c.offsetX(60)))])])});
  gls2.ia["cannon4-0"] = new I.ka({top0:c.action([k(20), c.repeat(999, [c.fire(p, z), c.repeat(8, [k(10), c.Ea("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), p, z), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), p, z)])]), k(120)])])});
  gls2.ia["cannon5-0"] = new I.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), q, C(c.wa("b"))), c.repeat(11, [k(5), c.fire(c.direction(10, "sequence"), q, C(c.wa("b")))]), k(60)])]), b:c.action([c.wait(5), c.Ue(c.speed(0), 0), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, u)
  }), c.Xa])});
  gls2.ia["yuri-4"] = new I.ka({top:c.action([k(60), c.repeat(7, [a(7, 120, 240, s, E), k(8)])])});
  gls2.ia["kurokawa-1"] = new I.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, t, c.offsetX(-45), c.xa(j))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, t, c.offsetX(45), c.xa(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.xa(j)), k(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.xa(j)), k(45)])])});
  gls2.ia["milk-5"] = new I.ka({top0:c.action([c.repeat(999, [d(5, -90, 90, n, H, c.offsetX(-45)), c.wait(27), d(5, -90, 90, n, H, c.offsetX(45)), k(120)])]), top1:c.action([c.repeat(999, [k(30), d(6, -90, 90, v, z, c.offsetX(-45)), c.wait(21), d(6, -90, 90, v, z, c.offsetX(45)), k(90)])]), top2:c.action([c.repeat(999, [k(55), d(13, -90, 90, s, A, c.offsetX(-45)), c.wait(20), d(13, -90, 90, s, A, c.offsetX(45)), k(21)])])});
  gls2.ia["ako-5"] = new I.ka({top:c.action([c.repeat(8, [d(3, -20, 20, v, u), k(2)])])});
  gls2.ia["kurokawa-4"] = new I.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, t, c.offsetX(-45), c.xa(j))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, t, c.offsetX(45), c.xa(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.xa(j)), k(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.xa(j)), k(45)])])});
  gls2.ia["komachi-1"] = new I.ka({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40)), c.repeat(57, [k(8), c.fire(c.direction(-720 / 57, "sequence"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, 
  [c.fire(c.direction(-210, "absolute"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40)), c.repeat(57, [k(8), c.fire(c.direction(720 / 57, "sequence"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40)), c.fire(c.direction(120, "sequence"), s(1), u, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), n(0), F, c.offsetX(-110), c.xa(j)), c.repeat(6, 
  [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), F, c.offsetX(-110), c.xa(j))]), k(10), c.fire(c.direction(0), n(0), F, c.offsetX(110), c.xa(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), F, c.offsetX(110), c.xa(j))]), k(10)])])});
  gls2.ia["komachi-2"] = new I.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(4, -45, 45, a, t, c.offsetX(-45), c.xa(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), d(4, -45, 45, a, t, c.offsetX(45), c.xa(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), k(1)])
  }), k(180)])])});
  gls2.ia["komachi-3"] = new I.ka({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(8, -60, 60, a, t, c.offsetX(-45), c.xa(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), d(8, -60, 60, a, t, c.offsetX(45), c.xa(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), k(1)])
  }), k(180)])])});
  gls2.ia["komachi-4"] = new I.ka({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), n, H, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, H, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, H, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), n, H, c.offsetX(45)), k(4)]), k(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), n(5), F, c.offsetX(-110), c.xa(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), n(5), F, c.offsetX(-110), c.xa(j))]), k(30), c.fire(c.direction(0), n(5), F, c.offsetX(110), c.xa(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), n(5), F, c.offsetX(110), c.xa(j))]), k(30)])])});
  gls2.ia["nozomi-4"] = new I.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.Ea("c", "2+$loop.index"), d("$c", "-4-($c-2)*4", "4+($c-2)*4", G("(560-$c*40)*0.03"), D, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), C(c.wa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, E, c.offsetX(-50)), c.wait(3)])
  }), k(90), c.fire(c.direction(-40), C(c.wa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, E, c.offsetX(50)), c.wait(3)])
  }), k(90)])]), noop:c.action([c.wait(1), c.Xa])});
  gls2.ia["nozomi-5"] = new I.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(6, [c.Ea("c", "2+$loop.index"), d("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", G("(560-$c*40)*0.02"), D, c.offsetY(-50))]), k(150), c.repeat(6, [c.Ea("c", "2+$loop.index"), 
  d("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), d("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), d("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), d("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), d("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", G("(560-$c*40)*0.02"), z, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(5), 
  C(c.wa("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(-1, "sequence"), a, E, c.offsetX(-50)), k(3)])
  }), c.fire(c.direction(-5), C(c.wa("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(1, "sequence"), a, E, c.offsetX(50)), k(3)])
  })])]), noop:c.action([c.wait(1), c.Xa])});
  gls2.ia["mktn-5"] = new I.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(0), s, C(c.wa("noop"))), c.repeat(20, [c.fire(c.direction(0.5, "sequence"), c.speed(0.08, "sequence"), t), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), t)]), k(6)]), c.fire(c.direction(0), s, C(c.wa("noop"))), c.repeat(20, [c.fire(c.direction(-0.5, "sequence"), c.speed(0.08, "sequence"), t), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), t)]), k(6)]), k(60)])]), 
  top1:c.action([c.repeat(999, [c.fire(c.direction(0, "absolute"), n, C(c.wa("noop"))), c.repeat(5, [c.fire(c.direction(-10, "sequence"), c.speed(0.05, "sequence"), A), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), A)]), k(5)]), c.fire(c.direction(0, "absolute"), n, C(c.wa("noop"))), c.repeat(5, [c.fire(c.direction(10, "sequence"), c.speed(0.05, "sequence"), A), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), A)]), k(5)]), k(40)])]), top2:c.action([c.repeat(999, 
  [c.Ea("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"), d(5, -30, 30, n(7), M, c.offsetX("$gun"), c.offsetY(20)), k(21)])]), noop:c.action([c.wait(1), c.Xa])});
  gls2.ia.akane = new I.ka({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [k(60), d(1, 1, 1, s, t, c.offsetX(-16), c.offsetY(6), c.xa(j)), d(1, 1, 1, s, t, c.offsetX(16), c.offsetY(6), c.xa(j))]), k(120)])])});
  gls2.ia["nao-1"] = new I.ka({top:c.action([c.repeat(999, [k(30), c.fire(c.direction(0), v, D)])])});
  gls2.ia["nao-2"] = new I.ka({top:c.action([c.repeat(999, [k(30), d(2, -5, 5, v, D, c.offsetX(0), c.offsetY(0), c.xa(j))])])});
  gls2.ia["nao-3"] = new I.ka({top:c.action([c.repeat(999, [k(30), d(2, -1, 1, v, D, c.offsetX(0), c.offsetY(0), c.xa(j))])])});
  gls2.ia.reika = new I.ka({top:c.action([c.repeat(999, [k(30), c.fire(c.direction(0), n, z)])])});
  gls2.ia.aguri = new I.ka({top:c.action([c.repeat(999, [k(30), c.fire(c.direction(0), n, z)])])});
  gls2.ia.miyuki_y = new I.ka({top:c.action([c.wait("40"), c.repeat(999, [k(30), d(3, -45, 45, s, t, c.offsetX(-64), c.offsetY(16), c.xa(j)), d(3, -45, 45, s, t, c.offsetX(0), c.offsetY(16), c.xa(j)), d(3, -45, 45, s, t, c.offsetX(16), c.offsetY(16), c.xa(j)), d(3, -45, 45, s, t, c.offsetX(32), c.offsetY(16), c.xa(j)), b(s, 0.001, 5, function(a) {
    return c.action([d(3, "-45", "+45", a, z, c.offsetX(0), c.offsetY(0))])
  })])])});
  gls2.ia.miyuki_t = new I.ka({top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(3, [a(3, -20, 20, n, z, c.offsetX(32), c.offsetY(32)), k(30)]), c.repeat(3, [a(3, -10, 10, n, z, c.offsetX(-32), c.offsetY(-32)), k(30)]), c.repeat(3, [a(3, -5, 5, n, z, c.offsetX(-16), c.offsetY(-16)), k(30)]), k(120)])]), top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [a(5, -30, 30, n, z, c.offsetX(-32), c.offsetY(32)), k(45)]), c.repeat(5, [a(5, -30, 30, n, z, c.offsetX(32), c.offsetY(32)), k(45)]), k(120)])])});
  gls2.ia.alice = new I.ka({top0:c.action([c.repeat(999, [a(8, 0, 180, s, z), a(8, 0, -180, s, z), k(60), a(9, 0, 180, s, D), a(9, 0, -180, s, D), k(60)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(5, "sequence"), s, F, c.offsetX(0), c.xa(j)), k(10)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(10, "sequence"), p, K, c.offsetX(0), c.xa(j)), k(10)])])});
  gls2.ia.aliceLeaf = new I.ka({top:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(10, "sequence"), n(5), A, c.offsetX(0), c.xa(j)), k(10)])])});
  gls2.ia["honoka-1"] = new I.ka({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, A, c.offsetX(0), c.offsetY(30)), k(30), d(5, -40, 40, s, A, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), u), d(3, -3, 3, p(1), u), d(4, -4, 4, p(1.4), u), d(5, -5, 5, p(1.8), u), k(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, s, F, c.offsetX(-110), c.offsetY(-70)), k(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, s, F, c.offsetX(110), 
  c.offsetY(-70)), k(30)])])});
  gls2.ia["nagisa-1-1"] = new I.ka({top0:c.action([k(90), c.repeat(3, [c.Ea("way", "5 + $loop.index*6"), b(n, 0.01, "3 + $loop.index*2", function(a) {
    return c.action([d("$way", -110, 110, a, u, c.offsetX(-190), c.offsetY(-20)), d("$way", -110, 110, a, u, c.offsetX(190), c.offsetY(-20)), c.wait(10)])
  }), k(60)]), k(60)])});
  gls2.ia["nagisa-1-2"] = new I.ka({top0:c.action([c.repeat(12, [d(15, -90, 90, s, u), k(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [d(5, -65, -55, p, F, c.offsetX(-190), c.offsetY(-20)), d(5, -35, -25, p, F, c.offsetX(-190), c.offsetY(-20)), d(5, -5, 5, p, F, c.offsetX(-190), c.offsetY(-20)), d(5, 25, 35, p, F, c.offsetX(-190), c.offsetY(-20)), d(5, 55, 65, p, F, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), k(60), c.repeat(3, [d(5, -65, -55, p, F, c.offsetX(190), c.offsetY(-20)), d(5, -35, 
  -25, p, F, c.offsetX(190), c.offsetY(-20)), d(5, -5, 5, p, F, c.offsetX(190), c.offsetY(-20)), d(5, 25, 35, p, F, c.offsetX(190), c.offsetY(-20)), d(5, 55, 65, p, F, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), k(60)])])});
  gls2.ia["nagisa-1-3"] = new I.ka({top0:c.action([k(60), c.repeat(3, [c.fire(c.direction(-60), p, t, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(6, "sequence"), p, t, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([k(80), c.repeat(3, [c.fire(c.direction(60), p, t, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(-6, "sequence"), p, t, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [d(5, -60, -40, p, A, c.offsetX(-190), 
  c.offsetY(-20)), d(5, -20, -10, p, A, c.offsetX(-190), c.offsetY(-20)), d(5, 10, 20, p, A, c.offsetX(-190), c.offsetY(-20)), d(5, 40, 60, p, A, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), k(60), c.repeat(3, [d(5, -60, -40, p, A, c.offsetX(190), c.offsetY(-20)), d(5, -20, -10, p, A, c.offsetX(190), c.offsetY(-20)), d(5, 10, 20, p, A, c.offsetX(190), c.offsetY(-20)), d(5, 40, 60, p, A, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), k(60)])])});
  gls2.ia["nagisa-2-1"] = new I.ka({top0:c.action([k(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", s, E, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", s, E, c.offsetX(190), c.offsetY(-20)), k(10)])]), top1:c.action([k(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", p, D), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", p, D), k(12)])])});
  gls2.ia["nagisa-2-2"] = new I.ka({top0:c.action([k(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", n, D), k(12)])]), top1:c.action([k(120), c.repeat(6, [a(9, 150, 130, s(0.8), u), a(9, 172, 188, s(0.8), u), a(9, 210, 230, s(0.8), u), k(30), a(9, 170, 150, s(0.8), u), a(9, 190, 210, s(0.8), u), k(30)])])});
  gls2.ia["nagisa-2-3"] = new I.ka({top:c.action([k(120), c.repeat(12, [a(23, 0, 360, s, A, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, s, A), a(23, 0, 360, s, A, c.offsetX(190), c.offsetY(-20)), k(30)])])});
  gls2.ia["nagisa-3-1"] = new I.ka({top0:c.action([k(50), c.repeat(999, [b(n, 0.001, 5, function(a) {
    return c.action([d(41, "-180", "+180", a, z, c.offsetX(-190), c.offsetY(-20)), d(41, "-180", "+180", a, z, c.offsetX(190), c.offsetY(-20))])
  }), k(50)])]), top1:c.action([c.repeat(999, [d(2, -2, 0, v, u), k(10), d(2, 0, 2, v, u), k(150)])])});
  gls2.ia["mai-1"] = new I.ka({top0:c.action([k(50), c.repeat(50, [c.Ea("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, E), c.Xa]))), c.Ea("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, E), c.Xa]))), k(8)])]), top1:c.action([k(50), c.repeat(12, [a(5, -50, 50, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, 
  D), c.Xa]))), a(5, -230, -130, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Xa]))), k(16), a(6, -50, 50, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Xa]))), a(6, -230, -130, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Xa]))), k(16)])])});
  gls2.ia["mai-2"] = new I.ka({top:c.action([k(50), c.repeat(15, [c.fire(c.direction(-10), z(c.wa("fireChild", "$loop.index*10"))), k(8)])]), fireChild:c.action([k("40+$1"), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, t)
  }), c.Xa])});
  gls2.ia["saki-1-1"] = new I.ka({top:c.action([k(100), c.repeat(3, [c.wa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Ea("way", "$1"), c.repeat("30", [d("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, E), d("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, E), k(12)]), c.repeat("$2", [d(9, -20, 20, v, H)])])});
  gls2.ia["saki-1-2"] = new I.ka({top:c.action([k(100), c.repeat(5, [c.Ea("way", "5+$loop.index*2"), c.repeat(6, [c.Ea("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(d("$way", -30, 30, n("$s"), D, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), k(90)])])});
  gls2.ia["saki-1-3"] = new I.ka({top:c.action([c.Ea("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.wa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Ue(c.speed(0), 50), c.wait(90), d(13, 0, 360 - 360 / 13, p, H), c.Xa])});
  gls2.ia["saki-2-1"] = new I.ka({top0:c.action([k(100), c.repeat(4, [d(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", p, E, c.offsetX(-40)), d(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", p, E, c.offsetX(40)), k(60), d(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", p, E, c.offsetX(-40)), d(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", p, E, c.offsetX(40)), k(60)])]), top1:c.action([k(100), c.repeat(4, [c.repeat(7, [c.Ea("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  w, H), c.repeat(4, [c.Ea("w", "$loop.count"), d("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", w("$w*-1.0"), H)])]), k(120)])])});
  gls2.ia["saki-2-2"] = new I.ka({top:c.action([k(60), c.Ea("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), z(c.wa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), z(c.wa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Ue(c.speed(0), "10 + $rand*15"), c.wait(65), b(n, 0.14, 6, function(a) {
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
  gls2.ia["saki-2-3"] = new I.ka({top:c.action([k(60), c.Ea("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.wa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), D(c.wa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Ue(c.speed(0), "10 + $rand*20"), c.wait(65), b(n, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, H)])
  }), k(2), c.Xa])});
  gls2.ia["saki-3-1"] = new I.ka({top:c.action([c.fire(c.direction(180, "absolute"), G, z(c.wa("seed"))), k(60), c.fire(c.direction(180, "absolute"), G, z(c.wa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), G, z(c.wa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, E), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, E), c.fire(c.direction(90, "sequence"), p, E), c.fire(c.direction(90, "sequence"), p, E), k(10), c.fire(c.direction(100, 
  "sequence"), p, E)])])});
  gls2.ia["saki-3-2"] = new I.ka({top:c.action([c.fire(c.direction(180, "absolute"), G, D(c.wa("seed"))), k(60), c.fire(c.direction(180, "absolute"), G, D(c.wa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), G, D(c.wa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, u), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), k(10), c.fire(c.direction(80, 
  "sequence"), p, u)])])});
  gls2.ia["rikka-1"] = new I.ka({top:c.action([c.repeat(5, [c.Ea("s", "$loop.index*1.5"), k(30), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), d(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.ia["rikka-2"] = new I.ka({top0:c.action([c.repeat(10, [c.fire(z(c.wa("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(z(c.wa("snow")), c.offsetX(90), c.offsetY(-20)), k(8)]), k(10)]), top1:c.action([c.repeat(35, [c.Ea("d", "$loop.index*-(20+$ex*10)"), c.Ea("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), C(c.wa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), C(c.wa("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.Ea("d", "$loop.index*+(20+$ex*10)"), c.Ea("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), C(c.wa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), C(c.wa("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.Ea("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), C(c.wa("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), C(c.wa("snowArm")))])]), c.Xa]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), v, F), c.Xa]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), n("$2"), M), c.fire(c.direction("$1+1", "relative"), n("$2"), M), c.Xa()])});
  gls2.ia["rikka-3"] = new I.ka({top0:c.action([k(40), c.fire(c.direction(-10), C(c.wa("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), G("$loop.index*0.5"), t, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(-90), c.offsetY(-20))]), k(5)]), k(40)]), top1:c.action([k(40), c.fire(c.direction(-10), C(c.wa("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), G("$loop.index*0.5"), t, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(90), c.offsetY(-20))]), k(5)]), k(40)]), dummy:c.action([c.wait(1), c.Xa])});
  gls2.ia["mana-1-1"] = new I.ka({top0:c.action([c.wa("winder", -1)]), top1:c.action([c.wa("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), n, O, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [k(20), c.Ea("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), n, O, c.offsetX("-145*$1"), c.offsetY(-5))])])]), top2:c.action([c.wait(60), k(300), c.repeat(7, [c.Ea("s", "$loop.index"), c.repeat(5, [c.Ea("ss", 
  "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, v("$ss"), H, c.offsetX(-30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Ea("ss", "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, v("$ss"), H, c.offsetX(30), c.offsetY(-30))]), k(20), c.repeat(5, [c.Ea("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, w("$ss"), t, c.offsetX(30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Ea("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, w("$ss"), t, c.offsetX(-30), c.offsetY(-30))]), k(80)])])});
  gls2.ia["mana-1-2"] = new I.ka({top:c.action([c.repeat(5, [c.Ea("i", "$loop.index"), c.Ea("j", "1/($i+1) * 4"), b(n(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*(-3*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, H, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, H, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+3*$j)"), 
    a, t, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-3*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, H, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, H, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), 
    c.fire(c.direction("(12-$i)*(+3*$j)"), a, t, c.offsetX(145), c.offsetY(-50)), k(5)])
  }), k(60)])])});
  gls2.ia["mana-1-3"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-1"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-2"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-2-3"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-3-1"] = gls2.ia["mana-1-1"];
  gls2.ia["mana-3-2"] = gls2.ia["mana-1-1"];
  gls2.ia["setsuna-1"] = new I.ka({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, A, c.offsetX(0), c.offsetY(30)), k(30), d(5, -40, 40, s, A, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), u), d(3, -3, 3, p(1), u), d(4, -4, 4, p(1.4), u), d(5, -5, 5, p(1.8), u), k(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, s, F, c.offsetX(-110), c.offsetY(-70)), k(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, s, F, c.offsetX(110), 
  c.offsetY(-70)), k(30)])])});
  gls2.ia["love-1-1"] = new I.ka({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, A, c.offsetX(0), c.offsetY(30)), k(30), d(5, -40, 40, s, A, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), u), d(3, -3, 3, p(1), u), d(4, -4, 4, p(1.4), u), d(5, -5, 5, p(1.8), u), k(110)])])});
  gls2.ia.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      N.push(gls2.Qa())
    }
    a = gls2.ia.Ve = tm.Gb.dd.ge;
    a.zg = function(a) {
      return!(a instanceof gls2.Qa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Nh = function(a) {
      var b = N.shift(0);
      if(b) {
        return b.sa = gls2.ja.Si, L.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.hc ? (b.scaleX = 1, b.scaleY = 1, b.bd = r) : (a.re ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Zb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.bd = j), b.visible = a.visible === r ? r : j, b.hc = !!a.hc, b.re = !!a.re, b.Zb = !!a.Zb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Sh = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.wd = gls2.ja.Ui;
    I.Sa.Yb.$rank = 0;
    I.Sa.Yb.$hyperOff = 1
  };
  gls2.ia.erase = function(a, b, c) {
    for(var d = [].concat(L), f = 0, h = d.length;f < h;f++) {
      if(a) {
        var k = gls2.Dh(!!b);
        k.setPosition(d[f].x, d[f].y);
        c && (k.qd = j)
      }
      d[f].Ba()
    }
  };
  gls2.ia.ee = function() {
    for(var a = [].concat(L), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Qa = tm.createClass({superClass:tm.display.Sprite, sa:0, hc:r, re:r, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      N.push(this);
      var a = L.indexOf(this);
      -1 !== a && L.splice(a, 1)
    })
  }, update:function() {
    this.hc && (this.rotation += 15)
  }, Ba:function() {
    var a = gls2.Qa.ie().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Qa.ie = function() {
    gls2.Qa.ie.mg === l && (gls2.Qa.ie.mg = gls2.Va(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Qa.ie.mg.clone()
  };
  gls2.Qa.ie.mg = l;
  var N = [], L = gls2.Qa.ub = []
})();
gls2.ma = {};
gls2.ma.clamp = function(b, a, f) {
  return b < a ? a : b > f ? f : b
};
gls2.ma.DEG_TO_RAD = Math.PI / 180;
gls2.ma.RAD_TO_DEG = 180 / Math.PI;
gls2.ma.degToRad = function(b) {
  return b * gls2.ma.DEG_TO_RAD
};
gls2.ma.radToDeg = function(b) {
  return b * gls2.ma.RAD_TO_DEG
};
gls2.ma.rand = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
gls2.ma.randf = function(b, a) {
  return window.Math.random() * (a - b) + b
};
gls2.ma.magnitude = function() {
  return Math.sqrt(gls2.ma.magnitudeSq.apply(l, arguments))
};
gls2.ma.magnitudeSq = function() {
  for(var b = 0, a = 0, f = arguments.length;a < f;++a) {
    b += arguments[a] * arguments[a]
  }
  return b
};
gls2.ma.inside = function(b, a, f) {
  return b >= a && b <= f
};

