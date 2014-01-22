/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(b) {
  throw b;
}
var i = void 0, j = !0, l = null, r = !1;
function A() {
  return function() {
  }
}
var H = {Si:this};
(function() {
  function b(a, b) {
    for(var f = 0, h = a.length;f < h;f++) {
      if(a[f].label == b) {
        return a[f]
      }
    }
  }
  H.ka = function(a) {
    this.type = "none";
    this.root = this;
    this.fb = [];
    this.Oe = [];
    this.We = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof H.Mb ? this.fb.push(a[b]) : a[b] instanceof H.Pa ? this.Oe.push(a[b]) : a[b] instanceof H.td && this.We.push(a[b]))
      }
      a = 0;
      for(b = this.fb.length;a < b;a++) {
        this.fb[a].Yb(this)
      }
      a = 0;
      for(b = this.Oe.length;a < b;a++) {
        this.Oe[a].Yb(this)
      }
      a = 0;
      for(b = this.We.length;a < b;a++) {
        this.We[a].Yb(this)
      }
    }
  };
  H.ka.prototype.Qh = function(a) {
    return b(this.fb, a)
  };
  H.ka.prototype.Hk = function() {
    for(var a = [], b = 0, f = this.fb.length;b < f;b++) {
      var h = this.fb[b];
      h.label && 0 === h.label.indexOf("top") && (a[a.length] = h.label)
    }
    return a
  };
  H.ka.prototype.wk = function(a) {
    var b;
    if(b = this.Qh(a)) {
      return b
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  H.ka.prototype.xk = function(a) {
    return b(this.Oe, a)
  };
  H.ka.prototype.yk = function(a) {
    var b;
    if(b = this.xk(a)) {
      return b
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  H.ka.prototype.zk = function(a) {
    return b(this.We, a)
  };
  H.ka.prototype.Ak = function(a) {
    var b;
    if(b = this.zk(a)) {
      return b
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  H.Pa = function() {
    this.root = this.label = l;
    this.direction = new H.yc(0);
    this.speed = new H.Cc(1);
    this.fb = [];
    this.Va = {};
    this.Aa = {}
  };
  H.Pa.prototype.clone = function(a) {
    var b = new H.Pa;
    b.label = this.label;
    b.root = this.root;
    b.fb = this.fb;
    b.direction = new H.yc(a.Za(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new H.Cc(a.Za(this.speed.value));
    b.speed.type = this.speed.type;
    b.Va = this.Va;
    b.Aa = a.Aa;
    return b
  };
  H.Pa.prototype.Yb = function(a) {
    this.root = a;
    for(var b = 0, f = this.fb.length;b < f;b++) {
      this.fb[b].Yb(a)
    }
  };
  H.we = function(a) {
    this.root = l;
    this.label = a;
    this.ab = []
  };
  H.we.prototype.clone = function(a) {
    var b = a.Aa;
    a.Aa = a.ag(this.ab);
    var f = this.root.yk(this.label).clone(a);
    a.Aa = b;
    return f
  };
  H.we.prototype.Yb = function(a) {
    this.root = a
  };
  H.eb = function() {
    this.Ab = ""
  };
  H.eb.prototype.Yb = function(a) {
    this.root = a
  };
  H.Mb = function() {
    this.Ab = "action";
    this.root = this.label = l;
    this.ec = [];
    this.ab = []
  };
  H.Mb.prototype = new H.eb;
  H.Mb.prototype.Yb = function(a) {
    this.root = a;
    for(var b = 0, f = this.ec.length;b < f;b++) {
      this.ec[b].Yb(a)
    }
  };
  H.Mb.prototype.clone = function() {
    var a = new H.Mb;
    a.label = this.label;
    a.root = this.root;
    a.ec = this.ec;
    return a
  };
  H.rd = function(a) {
    this.Ab = "actionRef";
    this.label = a;
    this.root = l;
    this.ab = []
  };
  H.rd.prototype = new H.eb;
  H.rd.prototype.clone = function() {
    var a = new H.Mb;
    a.root = this.root;
    a.ec.push(this);
    return a
  };
  H.td = function() {
    this.Ab = "fire";
    this.Ha = this.speed = this.direction = this.root = this.label = l;
    this.Va = new H.Ae
  };
  H.td.prototype = new H.eb;
  H.td.prototype.Yb = function(a) {
    this.root = a;
    this.Ha && this.Ha.Yb(a)
  };
  H.yf = function(a) {
    this.Ab = "fireRef";
    this.label = a;
    this.ab = []
  };
  H.yf.prototype = new H.eb;
  H.ye = function() {
    this.Ab = "changeDirection";
    this.direction = new H.yc;
    this.wb = 0
  };
  H.ye.prototype = new H.eb;
  H.ze = function() {
    this.Ab = "changeSpeed";
    this.speed = new H.Cc;
    this.wb = 0
  };
  H.ze.prototype = new H.eb;
  H.ve = function() {
    this.Ab = "accel";
    this.uc = new H.Cf;
    this.xc = new H.Zf;
    this.wb = 0
  };
  H.ve.prototype = new H.eb;
  H.Ge = function(a) {
    this.Ab = "wait";
    this.value = a || 0
  };
  H.Ge.prototype = new H.eb;
  H.Yf = function() {
    this.Ab = "vanish"
  };
  H.Yf.prototype = new H.eb;
  H.Ee = function() {
    this.Ab = "repeat";
    this.ti = 0;
    this.action = l;
    this.ab = []
  };
  H.Ee.prototype = new H.eb;
  H.Ee.prototype.Yb = function(a) {
    this.root = a;
    this.action && this.action.Yb(a)
  };
  H.tf = function(a, b) {
    this.Ab = "bind";
    this.xl = a;
    this.vk = b
  };
  H.tf.prototype = new H.eb;
  H.Pf = function(a, b) {
    this.Ab = "notify";
    this.sk = a;
    this.ab = b || l
  };
  H.Pf.prototype = new H.eb;
  H.Oi = new H.eb;
  H.yc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  H.Cc = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  H.Cf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  H.Zf = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  H.Ae = function(a) {
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
  H.$g = function(a) {
    this.value = !!a
  }
})();
H.Sa = function(b) {
  this.Ah = b;
  this.He = [];
  this.Nc = -1;
  this.ob = l;
  this.Aa = {}
};
H.Sa.prototype.next = function() {
  this.Nc += 1;
  if(this.ob !== l) {
    var b = this.ob.ec[this.Nc];
    if(b !== i) {
      if(b instanceof H.Mb) {
        return this.Wd(), this.ob = b, this.Aa = this.$f(), this.next()
      }
      if(b instanceof H.rd) {
        return this.Wd(), this.ob = this.Ah.wk(b.label), this.Aa = this.ag(b.ab), this.next()
      }
      if(b instanceof H.Ee) {
        return this.Aa.Id = 0, this.Aa.ei = this.Za(b.ti) | 0, this.Wd(), this.ob = b.action.clone(), this.Aa = this.$f(), this.next()
      }
      if(b instanceof H.td) {
        var a = new H.td;
        a.Ha = b.Ha.clone(this);
        b.direction !== l && (a.direction = new H.yc(this.Za(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new H.Cc(this.Za(b.speed.value)), a.speed.type = b.speed.type);
        a.Va = new H.Ae;
        a.Va.offsetX = this.Za(b.Va.offsetX);
        a.Va.offsetY = this.Za(b.Va.offsetY);
        a.Va.wa = b.Va.wa;
        return a
      }
      return b instanceof H.yf ? (this.Wd(), this.ob = new H.Mb, this.ob.ec = [this.Ah.Ak(b.label)], this.Aa = this.ag(b.ab), this.next()) : b instanceof H.ye ? (a = new H.ye, a.direction.type = b.direction.type, a.direction.value = this.Za(b.direction.value), a.wb = this.Za(b.wb), a) : b instanceof H.ze ? (a = new H.ze, a.speed.type = b.speed.type, a.speed.value = this.Za(b.speed.value), a.wb = this.Za(b.wb), a) : b instanceof H.ve ? (a = new H.ve, a.uc.type = b.uc.type, a.uc.value = this.Za(b.uc.value), 
      a.xc.type = b.xc.type, a.xc.value = this.Za(b.xc.value), a.wb = this.Za(b.wb), a) : b instanceof H.Ge ? new H.Ge(this.Za(b.value)) : b instanceof H.Yf ? b : b instanceof H.tf ? (this.Aa["$" + b.xl] = this.Za(b.vk), H.Oi) : b instanceof H.Pf ? b : l
    }
    this.ek();
    if(this.ob === l) {
      return l
    }
    if((b = this.ob.ec[this.Nc]) && "repeat" == b.Ab) {
      this.Aa.Id++, this.Aa.Id < this.Aa.ei && (this.Wd(), this.ob = b.action.clone(), this.Aa = this.$f())
    }
    return this.next()
  }
  return l
};
H.Sa.prototype.Wd = function() {
  this.He.push({action:this.ob, cursor:this.Nc, scope:this.Aa});
  this.Nc = -1
};
H.Sa.prototype.ek = function() {
  var b = this.He.pop();
  b ? (this.Nc = b.cursor, this.ob = b.action, this.Aa = b.scope) : (this.Nc = -1, this.ob = l, this.Aa = {})
};
H.Sa.prototype.Za = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Aa[b]) || (a = H.Sa.Sb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in H.Sa.Sb) {
    H.Sa.Sb.hasOwnProperty(d) && (a[d] = H.Sa.Sb[d])
  }
  for(d in this.Aa) {
    this.Aa.hasOwnProperty(d) && (a[d] = this.Aa[d])
  }
  a.$rand = Math.random();
  (d = this.He[this.He.length - 1]) && (a.$loop = {index:d.scope.Id, count:d.scope.Id + 1, first:0 === d.scope.Id, last:d.scope.Id + 1 >= d.scope.ei});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
H.Sa.prototype.ag = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.Za(b[d])
    }
  }else {
    for(d in this.Aa) {
      this.Aa.hasOwnProperty(d) && (a[d] = this.Aa[d])
    }
  }
  return a
};
H.Sa.prototype.$f = function() {
  var b = {}, a;
  for(a in this.Aa) {
    this.Aa.hasOwnProperty(a) && (b[a] = this.Aa[a])
  }
  return b
};
H.ka.prototype.rg = function(b) {
  var a = new H.Sa(this);
  if(b = this.Qh(b)) {
    a.ob = b
  }
  return a
};
H.Pa.prototype.rg = function() {
  var b = new H.Sa(this.root), a = new H.Mb;
  a.root = this.root;
  a.ec = this.fb;
  b.ob = a;
  b.Aa = this.Aa;
  return b
};
H.Sa.Sb = {};
H.Ia = function(b) {
  b = b || "";
  for(var a in H.Ia) {
    H.Ia.hasOwnProperty(a) && (H.Si[b + a] = H.Ia[a])
  }
};
H.Ia.action = function(b) {
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
  var f = new H.Mb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof H.eb)
    }) && g(Error("argument type error.")), f.ec = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof H.eb ? f.ec[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return f
};
H.Ia.va = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("label is required."));
  f = new H.rd(b);
  if(a instanceof Array) {
    f.ab = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.ab.push(arguments[d])
    }
  }
  return f
};
H.Ia.Ha = function(b, a, d, f) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new H.Pa;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof H.yc ? m.direction = arguments[h] : arguments[h] instanceof H.Cc ? m.speed = arguments[h] : arguments[h] instanceof H.Mb ? m.fb.push(arguments[h]) : arguments[h] instanceof H.rd ? m.fb.push(arguments[h]) : arguments[h] instanceof Array ? m.fb.push(H.Ia.action(arguments[h])) : arguments[h] instanceof Object ? m.Va = arguments[h] : "string" === typeof arguments[h] && (m.label = arguments[h])
  }
  return m
};
H.Ia.El = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("label is required."));
  f = new H.we(b);
  if(a instanceof Array) {
    f.ab = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.ab.push(arguments[d])
    }
  }
  return f
};
H.Ia.fire = function(b, a, d, f) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new H.td;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof H.yc ? m.direction = arguments[h] : arguments[h] instanceof H.Cc ? m.speed = arguments[h] : arguments[h] instanceof H.Pa ? m.Ha = arguments[h] : arguments[h] instanceof H.we ? m.Ha = arguments[h] : arguments[h] instanceof H.Ae ? m.Va = arguments[h] : arguments[h] instanceof H.qh ? m.Va.offsetX = arguments[h].value : arguments[h] instanceof H.rh ? m.Va.offsetY = arguments[h].value : arguments[h] instanceof H.$g && (m.Va.wa = arguments[h].value)
  }
  m.Ha === i && g(Error("bullet (or bulletRef) is required."));
  return m
};
H.Ia.Jl = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("label is required."));
  f = new H.yf(b);
  if(a instanceof Array) {
    f.ab = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.ab.push(arguments[d])
    }
  }
  return f
};
H.Ia.Fl = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("direction is required."));
  a === i && g(Error("term is required."));
  d = new H.ye;
  d.direction = b instanceof H.yc ? b : new H.yc(b);
  d.wb = a;
  return d
};
H.Ia.Pe = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("speed is required."));
  a === i && g(Error("term is required."));
  d = new H.ze;
  d.speed = b instanceof H.Cc ? b : new H.Cc(b);
  d.wb = a;
  return d
};
H.Ia.Dl = function(b, a, d) {
  for(var f = 0, h = arguments.length;f < h;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  h = new H.ve;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof H.Cf ? h.uc = b : arguments[f] instanceof H.Zf ? h.xc = a : h.wb = arguments[f]
  }
  h.uc === i && h.xc === i && g(Error("horizontal or vertical is required."));
  h.wb === i && g(Error("term is required."));
  return h
};
H.Ia.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && g(Error("value is required."));
  return new H.Ge(b)
};
H.Ia.Wa = function() {
  return new H.Yf
};
H.Ia.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("times is required."));
  a === i && g(Error("action is required."));
  f = new H.Ee;
  f.ti = b;
  if(a instanceof H.Mb || a instanceof H.rd) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = H.Ia.action(a)
    }else {
      for(var h = [], d = 1;d < arguments.length;d++) {
        h.push(arguments[d])
      }
      f.action = H.Ia.action(h)
    }
  }
  return f
};
H.Ia.Da = function(b, a) {
  return new H.tf(b, a)
};
H.Ia.Pl = function(b, a) {
  return new H.Pf(b, a)
};
H.Ia.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new H.yc(b);
  a !== i && (d.type = a);
  return d
};
H.Ia.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new H.Cc(b);
  a && (d.type = a);
  return d
};
H.Ia.uc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new H.Cf(b);
  a && (d.type = a);
  return d
};
H.Ia.xc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && g(Error("value is required."));
  d = new H.Zf(b);
  a && (d.type = a);
  return d
};
H.Ia.Il = function(b) {
  return new H.Ae(b)
};
H.Ia.offsetX = function(b) {
  return new H.qh(b)
};
H.Ia.offsetY = function(b) {
  return new H.rh(b)
};
H.Ia.wa = function(b) {
  return new H.$g(b)
};
tm.zb = tm.zb || {};
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
  tm.zb.Yc = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.xh = a
  }, Re:function(a, b) {
    var d = this.xh.Hk();
    if(b === i && 0 < d.length) {
      for(var f = [], w = 0, n = d.length;w < n;w++) {
        f[f.length] = this.yh(a, d[w])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          p.mg == f.length && (p.ae = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, w = f.length;w--;) {
        f[w].hf = p
      }
      p.mg = 0;
      p.Gh = function() {
        this.mg++
      };
      p.mg = 0;
      p.ae = r;
      p.vg = j;
      p.stop = r;
      return p
    }
    return this.yh(a, b)
  }, yh:function(a, b) {
    function d() {
      if(!d.stop) {
        d.oa += 1;
        this.oa = d.oa;
        var a = d.Qe, b = d.dk;
        if(b) {
          if(d.oa < d.kg ? d.direction += d.Dd : d.oa === d.kg && (d.direction = d.Qc), d.oa < d.lg ? d.speed += d.se : d.oa === d.lg && (d.speed = d.Qd), d.oa < d.eg ? (d.od += d.Ke, d.qd += d.Le) : d.oa === d.eg && (d.od = d.Ie, d.qd = d.Je), this.x += Math.cos(d.direction) * d.speed * a.pd, this.y += Math.sin(d.direction) * d.speed * a.pd, this.x += d.od * a.pd, this.y += d.qd * a.pd, a.wg(this)) {
            if(a.Wc || this.Wc) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.oa < d.vi || d.ae)) {
              for(var f;f = d.wi.next();) {
                switch(f.Ab) {
                  case "fire":
                    b.ak.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.vi = "number" === typeof f.value ? d.oa + f.value : 0 !== (a = ~~f.value) ? d.oa + a : d.oa + eval(f.value);
                    return;
                  case "changeDirection":
                    b.Wj.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.Xj.call(this, f, d);
                    break;
                  case "accel":
                    b.Uj.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.bk.call(this, f)
                }
              }
              d.ae = j;
              d.hf ? d.hf.Gh() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.ae = j, d.hf ? d.hf.Gh() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.zb.Yc.be, f;
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
    "string" === typeof b ? d.wi = this.xh.rg(b) : b instanceof H.Pa ? d.wi = b.rg() : (window.console.error(a, b), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.dk = this;
    d.Qe = a;
    d.vi = -1;
    d.ae = r;
    d.direction = 0;
    d.ai = 0;
    d.speed = 0;
    d.ci = 0;
    d.od = 0;
    d.qd = 0;
    d.Dd = 0;
    d.Qc = 0;
    d.kg = -1;
    d.se = 0;
    d.Qd = 0;
    d.lg = -1;
    d.Ke = 0;
    d.Ie = 0;
    d.Le = 0;
    d.Je = 0;
    d.eg = -1;
    d.oa = -1;
    d.stop = r;
    d.vg = j;
    return d
  }, $j:function(a) {
    function b() {
      b.stop || (this.x += b.Kh, this.y += b.Lh, b.Qe.wg(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.zb.Yc.be, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.Qe = a;
    b.direction = 0;
    b.speed = 0;
    b.Kh = 0;
    b.Lh = 0;
    b.stop = r;
    b.vg = j;
    return b
  }, ak:function(b, d, f, v) {
    if(this.el === i || this.Hb) {
      var w = {label:b.Ha.label}, n;
      for(n in b.Ha.Va) {
        w[n] = b.Ha.Va[n]
      }
      if(w = d.Fh(w)) {
        v = (n = 0 === b.Ha.fb.length) ? v.$j(d) : v.Re(d, b.Ha);
        var p = this, s = {x:this.x + b.Va.offsetX, y:this.y + b.Va.offsetY};
        f.ai = v.direction = function(n) {
          var k = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? b.Va.wa ? a(s, d.target) + k : a(p, d.target) + k : k - Math.PI / 2;
            case "absolute":
              return k - Math.PI / 2;
            case "relative":
              return f.direction + k;
            default:
              return f.ai + k
          }
        }(b.direction || b.Ha.direction);
        f.ci = v.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.ci + b;
            default:
              return b
          }
        }(b.speed || b.Ha.speed);
        w.x = s.x;
        w.y = s.y;
        n && (v.Kh = Math.cos(v.direction) * v.speed * d.pd, v.Lh = Math.sin(v.direction) * v.speed * d.pd);
        w.Wc = !!w.Wc;
        if(d.Wc || w.Wc) {
          w.rotation = (v.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, w.speed = v.speed
        }
        w.addEventListener("enterframe", v);
        d.Ch ? d.Ch.addChild(w) : this.parent && this.parent.addChild(w)
      }
    }
  }, Wj:function(d, f, q) {
    var v = eval(d.direction.value) * Math.DEG_TO_RAD, w = eval(d.wb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        q.Qc = a(this, d) + v;
        q.Dd = b(q.Qc - q.direction) / w;
        break;
      case "absolute":
        q.Qc = v - Math.PI / 2;
        q.Dd = b(q.Qc - q.direction) / w;
        break;
      case "relative":
        q.Qc = q.direction + v;
        q.Dd = b(q.Qc - q.direction) / w;
        break;
      case "sequence":
        q.Dd = v, q.Qc = q.direction + q.Dd * (w - 1)
    }
    q.kg = q.oa + w
  }, Xj:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.wb);
    switch(a.speed.type) {
      case "absolute":
        b.Qd = d;
        b.se = (b.Qd - b.speed) / f;
        break;
      case "relative":
        b.Qd = d + b.speed;
        b.se = (b.Qd - b.speed) / f;
        break;
      case "sequence":
        b.se = d, b.Qd = b.speed + b.se * f
    }
    b.lg = b.oa + f
  }, Uj:function(a, b) {
    var d = eval(a.wb);
    b.eg = b.oa + d;
    if(a.uc) {
      var f = eval(a.uc.value);
      switch(a.uc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Ke = (f - b.od) / d;
          b.Ie = f;
          break;
        case "relative":
          b.Ke = f, b.Ie = (f - b.od) * d
      }
    }else {
      b.Ke = 0, b.Ie = b.od
    }
    if(a.xc) {
      switch(f = eval(a.xc.value), a.xc.type) {
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
  }, bk:function(a) {
    var b = tm.event.Event(a.sk);
    if(a.ab) {
      for(var d in a.ab) {
        b[d] = a.ab[d]
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
  tm.zb.ok = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.zb.Jh = function(a) {
    if(f === l) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.zb.Gl = function() {
    return j
  };
  tm.zb.Yc.be = {Fh:tm.zb.ok, wg:tm.zb.Jh, Ul:0, Wc:r, pd:2, target:l};
  H.ka.prototype.Re = function(a) {
    return tm.zb.Yc(this).Re(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(A());
tm.main(function() {
  gls2.Ui("#canvas2d");
  gls2.core.run()
});
gls2.Ui = tm.createClass({superClass:tm.display.CanvasApp, fe:0, Lk:0, Nk:0, Mk:0, Jk:0, Kk:l, Zd:3, nd:3, Mh:1, ca:l, Bd:3, init:function(b) {
  gls2.core !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = gls2.ja.Ri;
  this.background = "rgba(0,0,0,0)";
  this.Wg = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.ui.LoadingScene({assets:{tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", 
  explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", tex_stage3:"assets/tex_stage3.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmLoopInfo:"assets2/loop.json", 
  "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/achevement":"assets2/se_maoudamashii_system46.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", 
  "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, nextScene:function() {
    this.ck();
    return gls2.TitleScene()
  }.bind(this)}));
  window.achevements && (this.Bd = window.achevements.length)
}, update:function() {
  for(var b = [].concat(this.Wg), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.Wg.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, ck:function() {
  gls2.ya.setup(12345);
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
  this.ca = gls2.Xa()
}, Hl:function() {
  this.stop()
}, di:r, Ng:function(b, a) {
  var d = {score:Math.floor(this.ca.score), stage:this.ca.ue + 1, continueCount:this.ca.Ec, shipType:this.ca.fa.type, shipStyle:this.ca.fa.style, fps:0, screenShot:this.ca.Nd};
  b ? (d.userName = b, this.di = r) : this.di = j;
  tm.util.Ajax.load({url:"/api/ranking/post", data:d, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        a(l, j, b.scoreId)
      }else {
        if(b.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.Ng(l, a);
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(b = "";"" === b;) {
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.Gk())
              }
              b !== l && (b = b.substring(0, 10), this.Ng(b + " (\u533f\u540d)", a))
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
}, Gk:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc(30) \u76f8\u7530\u7dcf\u7406".split(" ").pickup()
}, Wg:l, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}, Ja:function(b) {
  if(window.achevements) {
    var a = window.achevements;
    -1 == a.indexOf(b) && (this.Bd += 1, a.push(b), tm.util.Ajax.load({url:"/api/achevement/" + b, type:"POST", dataType:"json", success:function(a) {
      console.dir(a);
      gls2.Zg[b] && (gls2.ta("achevement"), this.ca.Yh.addChild(gls2.ih(gls2.Zg[b].title)))
    }.bind(this), error:function() {
      console.warn("error!")
    }}))
  }
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Hc = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.Xa.Td && gls2.Xa.Td.me(0)
};
gls2.continueCountMax = function(b) {
  gls2.core && (gls2.core.Bd = b)
};
gls2.ja = {tj:r, Ri:60, oj:0, gh:[1E9, 1E10], qj:3E3, kh:3, jh:[3, 2, 1], zi:[6, 4, 2], th:1, nj:0.1, lh:1, pj:0.25, yl:1, Bl:0.25, yi:2, gj:0.0050, cj:0.01, dj:0.0010, Zi:0.015, $i:0.0020, ij:0.0010, kj:0.01, hj:0, fj:0, ej:0, bj:0.03, aj:0.0040, jj:0, lj:0, mj:0.75, Af:10, Be:800, Yi:0.25, Xi:0.1, zf:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], Ii:0.02, Ji:0.5, Hi:0.0050, fh:1E3, Ci:10, Ai:1, Ij:1E3, Hj:100, Gj:0, Fj:0, Ej:1E3, Dj:100, Pi:0.5, Di:3, Ki:22500, Bi:50, xj:10, Yg:r, xi:j, Bj:1E3, Cj:2E3, 
yj:4E3, zj:1E4, Aj:2E7, sj:100, Al:"tmshooter"};
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.sh = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Kb:0, Fc:j, Yd:j, Jd:r, ca:l, speed:0, Fb:l, Cd:l, hi:l, $e:l, Tb:l, sg:l, Dc:l, tg:l, ug:l, frame:0, init:function(a, f, h) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = f;
    this.style = h;
    tm.zb.Yc.be.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Cd = this.hi = gls2.vh(f, 100);
    this.$e = gls2.vh(3, 100);
    this.Tb = gls2.oh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Tb.visible = r;
    this.Zj();
    this.Fb = this.Yj();
    1 === this.style && (this.Fb = [this.Fb[1], this.Fb[2]]);
    this.Dc = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(h = this.Fb.length;f < h;f++) {
      var m = this.Fb[f];
      gls2.Fi(this, m).setPosition(m.x, m.y).addChildTo(this.Dc)
    }
    this.Tk = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Tk.blendMode = "lighter";
    this.tg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.tg.blendMode = "lighter";
    this.tg.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Ta && !a.La
    };
    this.ug = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.ug.blendMode = "lighter";
    this.ug.update = function() {
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
      var f = a.Gd / gls2.ja.Be;
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
    this.Ok = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Ok.update = function() {
      this.visible = a.La
    };
    b === l && (b = gls2.ah(this.ca.na))
  }, Yj:function() {
    if(0 === this.type) {
      return[{x:0, gd:0, y:40, d:0, Zb:j, Qb:-0.7, v:j}, {x:0, gd:0, y:40, d:0, Zb:j, Qb:0.5, v:j}, {x:0, gd:0, y:40, d:0, Zb:j, Qb:-0.5, v:j}, {x:0, gd:0, y:40, d:0, Zb:j, Qb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, Zb:r, Qb:-0.7, v:j}, {x:-40, y:40, d:0.1, Zb:r, Qb:-0.5, v:j}, {x:40, y:40, d:0.1, Zb:j, Qb:0.5, v:j}, {x:70, y:20, d:0.1, Zb:j, Qb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, Zb:r, Qb:-0.7, v:j}, {x:-30, y:20, d:0.4, Zb:r, Qb:-0.5, v:j}, {x:30, y:20, d:0.4, Zb:j, Qb:0.5, v:j}, {x:60, y:40, d:0.6, Zb:j, Qb:0.7, v:j}]
    }
  }, Zj:function() {
    this.sg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.sg.setFrameIndex(5);
    this.sg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Uc:-1, Fd:r, Rb:r, update:function(d) {
    this.visible = this.Jd ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.Fc) {
      var h = f.getKeyAngle();
      h !== l && (h = a[h], this.x += h.x * this.speed * (this.Rb ? 0.5 : 1), this.y += h.y * this.speed * (this.Rb ? 0.5 : 1));
      this.x = gls2.ma.clamp(this.x, 15, 465);
      this.y = gls2.ma.clamp(this.y, 15, 625);
      var m = f.getKey("c") && this.Yd, h = f.getKey("z") && this.Yd;
      this.Uc = m ? this.Uc + 1 : this.Uc - 1;
      this.Uc = gls2.ma.clamp(this.Uc, -1, 10);
      this.Rb = h && m || 10 === this.Uc;
      m = this.ca.La ? 3 : 5;
      this.Fd = !this.Rb && (0 <= this.Uc || h) && 0 === d.frame % m;
      h && (this.Uc = 0);
      this.Tb.x = this.x;
      this.Tb.y = this.y - 40;
      f.getKeyDown("x") && this.Yd && (0 < this.ca.Ta && !this.ca.La ? (this.ca.ql(), gls2.Tj(this).addChildTo(this.ca)) : !this.ca.kd && 0 < this.ca.Gb && (this.Bb = gls2.ma.clamp(this.Bb - 2, 0, 1), this.ca.Xd(-0.02), gls2.bh(this, this.ca).setPosition(gls2.ma.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.Rb = this.Fd = r
    }
    this.Fd && (h = Math.sin(0.2 * d.frame), m = this.Cd.fire(this.x - 7 - 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.ca), m = this.Cd.fire(this.x + 7 + 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.ca));
    if(this.Rb) {
      h = 0;
      for(m = this.Fb.length;h < m;h++) {
        this.Fb[h].v = r
      }
      this.Dc.rotation = 0
    }else {
      this.Tb.visible = r;
      h = 0;
      for(m = this.Fb.length;h < m;h++) {
        this.Fb[h].v = j
      }
    }
    this.nk(f);
    this.Vj(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = d.frame
  }, Gc:function() {
    this.Rb = this.Fd = r;
    this.ca.Se();
    this.ca.gb = 0;
    this.ca.$a = 0;
    this.ca.Oa = 0
  }, nk:function(a) {
    if(0 === this.type) {
      for(a = this.Fb.length;this.Fb[--a] !== i;) {
        var b = this.Fb[a];
        0 === a ? b.x = b.gd + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.gd + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.gd + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.gd + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Dc, b.rotation = this.Rb ? 0 : this.Fc && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Fc && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, Vj:function(a, b) {
    this.Fc && a.getKey("left") ? this.Kb = gls2.ma.clamp(this.Kb - 0.2, -3, 3) : this.Fc && a.getKey("right") ? this.Kb = gls2.ma.clamp(this.Kb + 0.2, -3, 3) : 0 > this.Kb ? this.Kb = gls2.ma.clamp(this.Kb + 0.2, -3, 3) : 0 < this.Kb && (this.Kb = gls2.ma.clamp(this.Kb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Kb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Kb) : 2 === this.type && this.setFrameIndex(31 + ~~this.Kb);
    return b
  }});
  gls2.Fi = tm.createClass({superClass:tm.display.AnimationSprite, ed:l, fa:l, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.ed = b;
    this.fa = a;
    this.altitude = 10;
    this.gotoAndPlay(b.Zb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.ed.v) {
      this.x = this.ed.x * (this.fa.ca.La ? 1.5 : 1);
      this.y = this.ed.y * (this.fa.ca.La ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.ed.d * this.ed.Qb);
      var f = this.parent.localToGlobal(this);
      this.ed.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.ca);
      this.fa.Fd && (f = this.fa.Cd.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== l && f.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  gls2.xd = tm.createClass({superClass:tm.display.Sprite, speed:0, cd:0, jk:1, Xh:0, ib:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.cd = gls2.ja.th;
    b === l && (b = gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.re(a)
  }, update:function() {
    this.x += this.Kc;
    this.y += this.kc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, re:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Ye:function(a) {
    for(var f = 0;f < a;f++) {
      var h = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = gls2.ma.randf(2, 8), q = 2 * Math.random() * Math.PI;
      h.Fa = Math.cos(q) * m;
      h.Ga = Math.sin(q) * m;
      h.scaleX = h.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
      h.addEventListener("enterframe", function() {
        this.x += this.Fa;
        this.y += this.Ga;
        this.Fa *= 0.9;
        this.Ga *= 0.9
      })
    }
  }});
  gls2.xd.$d = function() {
    for(var b = [].concat(a), f = 0, h = b.length;f < h;f++) {
      b[f].remove()
    }
  };
  var a = gls2.xd.pb = [];
  gls2.vh = tm.createClass({Tc:l, Wh:r, init:function(b, f) {
    this.Wh = 3 === b;
    this.Tc = [];
    for(var h = 0;h < f;h++) {
      var m = gls2.xd(b), q = this;
      m.addEventListener("added", function() {
        this.sa = gls2.ja.xj;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        q.Tc.push(this)
      });
      this.Wh && m.addEventListener("enterframe", function(a) {
        this.setScale((this.jk + this.Xh) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Tc.push(m)
    }
  }, fire:function(a, b, h) {
    var m = this.Tc.pop();
    if(m === i) {
      return l
    }
    var q = gls2.ma.degToRad(h);
    m.Kc = Math.cos(q) * m.speed;
    m.kc = Math.sin(q) * m.speed;
    m.setPosition(a, b);
    m.rotation = h + 90;
    return m
  }, Od:function(a) {
    for(var b = this.Tc.length;this.Tc[--b] !== i;) {
      this.Tc[b].cd = gls2.ja.th + gls2.ja.nj * a, this.Tc[b].Xh = 0.2 * a
    }
  }})
})();
gls2.oh = tm.createClass({superClass:tm.display.Sprite, fa:l, ca:l, pc:0, frame:0, si:l, color:l, Dh:0, gg:0, kk:r, head:l, Rh:l, qc:l, ib:j, cd:gls2.ja.lh, Ld:l, init:function(b, a) {
  this.fa = b;
  this.ca = b.ca;
  this.Dh = 0 === this.fa.style ? 1 : 1.2;
  this.gg = 0 === this.fa.style ? 50 : 75;
  var d = this;
  this.si = a;
  this.superInit(a.redBody, this.gg, 100);
  this.boundingHeightBottom = 1;
  this.Wl = 0;
  this.origin.y = 1;
  var f = this.qc = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.Rh = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.pc - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.pc
  };
  this.re(["red", "green", "blue"][this.fa.type]);
  this.Od(0)
}, re:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.si[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.qc.gotoAndPlay(this.color);
  this.Rh.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Ld = l;
  return this
}, Od:function(b) {
  this.boundingWidth = this.width = this.gg + 30 * b / gls2.ja.Af;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.cd = this.Dh * gls2.ja.lh + gls2.ja.pj * b;
  0 === b ? this.re(["red", "green", "blue"][this.fa.type]) : this.re("hyper")
}, Ye:function(b, a) {
  this.Ld === l && this.Hh();
  a = a || this.pc;
  for(var d = 0;d < b;d++) {
    var f = this.Ld.clone().setPosition(this.x, a).addChildTo(this.ca), h = gls2.ma.randf(8, 14), m = gls2.ma.randf(0, Math.PI);
    f.Fa = Math.cos(m) * h;
    f.Ga = Math.sin(m) * h;
    f.scaleX = f.scaleY = (gls2.ma.randf(0.5, 1.5) + gls2.ma.randf(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.Fa;
      this.y += this.Ga;
      this.Fa *= 0.95;
      this.Ga *= 0.95
    })
  }
}, Ck:function(b, a, d) {
  this.Ld === l && this.Hh();
  for(var f = 0;f < b;f++) {
    var h = this.Ld.clone().setPosition(a, d).addChildTo(this.ca), m = gls2.ma.randf(12, 20), q = gls2.ma.randf(0, Math.PI);
    h.Fa = Math.cos(q) * m;
    h.Ga = Math.sin(q) * m;
    h.scaleX = h.scaleY = (gls2.ma.randf(1, 3) + gls2.ma.randf(1, 3)) / 2;
    h.addEventListener("enterframe", function() {
      this.x += this.Fa;
      this.y += this.Ga;
      this.Fa *= 0.95;
      this.Ga *= 0.95
    })
  }
}, Hh:function() {
  this.Ld = "hyper" === this.color ? gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.fa.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.fa.Rb) ? (this.pc = Math.max(0, this.pc - 40), this.height = this.y - this.pc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.pc = this.y - 40;
  this.kk = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Ll:function() {
  return this.pc
}, ll:function(b) {
  this.pc = b;
  this.head.update()
}});
gls2.oh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.pc
});
(function() {
  gls2.bh = tm.createClass({superClass:tm.app.Object2D, ib:j, ca:l, init:function(a, d) {
    this.superInit();
    this.fa = a;
    this.ca = d;
    this.pi = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.pi.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.pi));
    this.Bh();
    b === l && (b = gls2.Ua(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.oa = 0;
    this.oe = 1;
    this.addEventListener("added", function() {
      this.ca.kd = j;
      this.fa.Jd = j;
      this.ca.Gb -= 1;
      this.ca.bf = r;
      this.ca.Se();
      this.ca.tb("drop BOMBER!!", j);
      gls2.ta("bomb");
      gls2.ta("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.kd = r;
      this.fa.Jd = r
    })
  }, Bh:function() {
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
      var d = this.a * this.oe + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.oa;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.oa += 3.6, this.oe = -1) : (this.b = 8, this.oa += 1.8, this.oe = 1)
  }});
  gls2.ph = tm.createClass({superClass:gls2.bh, init:function(a, b) {
    this.superInit(a, b);
    gls2.ja.xi && this.addEventListener("added", function() {
      this.ca.Gb = 0
    })
  }, Bh:function() {
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
      var d = this.a * this.oe + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.oa;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.oa += 1.8, this.oe = 1)
  }});
  var b = l
})();
gls2.Gi = tm.createClass({superClass:tm.display.Sprite, Kc:0, kc:0, fa:l, oa:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.fa = d;
  this.kc = 1;
  this.Kc = 0.5 > gls2.ya.random() ? -1 : 1;
  this.oa = 0
}, update:function() {
  this.x += this.Kc;
  this.y += 2 * this.kc;
  if(2025 > gls2.Hc(this, this.fa)) {
    this.fa.ca.gk(1), this.remove()
  }else {
    if(3E3 > this.oa) {
      if(30 > this.x || 450 < this.x) {
        this.Kc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.kc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.oa += 1
}});
gls2.Qi = tm.createClass({superClass:tm.display.Sprite, Kc:0, kc:0, fa:l, oa:0, init:function(b, a, d) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  tm.display.Label("1 up", 20).setFillStyle("hsla(180, 70%, 100%, 1)").addChildTo(this);
  for(var f = -1;1 >= f;f++) {
    for(var h = -1;1 >= h;h++) {
      this.label = tm.display.Label("1 up", 20).setFillStyle("hsla(180, 50%, 50%, 0.2)").setPosition(f, h).addChildTo(this)
    }
  }
  this.setPosition(b, a);
  this.fa = d
}, update:function() {
  this.y += 0.5;
  4096 > gls2.Hc(this, this.fa) && (this.fa.ca.Oh(), gls2.core.Ja("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.Zg = {launchA:{title:"\u30bf\u30a4\u30d7A\u767a\u9032\uff01", description:"\u6a5f\u4f53\u30bf\u30a4\u30d7A\u3067\u51fa\u6483\u3059\u308b"}, launchB:{title:"\u30bf\u30a4\u30d7B\u767a\u9032\uff01", description:"\u6a5f\u4f53\u30bf\u30a4\u30d7B\u3067\u51fa\u6483\u3059\u308b"}, launchC:{title:"\u30bf\u30a4\u30d7C\u767a\u9032\uff01", description:"\u6a5f\u4f53\u30bf\u30a4\u30d7C\u3067\u51fa\u6483\u3059\u308b"}, hyper1:{title:"\u30cf\u30a4\u30d1\u30fc\u30b7\u30b9\u30c6\u30e0\u8d77\u52d5\uff01", description:"\u30cf\u30a4\u30d1\u30fc\u30b7\u30b9\u30c6\u30e0\u3092\u521d\u3081\u3066\u767a\u52d5\u3059\u308b"}, 
hyper10:{title:"\u30d5\u30eb\u30cf\u30a4\u30d1\u30fc\uff01\uff01", description:"\u30cf\u30a4\u30d1\u30fc\u30b7\u30b9\u30c6\u30e0\u3092Lv10\u307e\u3067\u6e9c\u3081\u3066\u767a\u52d5\u3059\u308b"}, score100M:{title:"\u30b9\u30b3\u30a21\u5104\uff01", description:"\u30b9\u30b3\u30a2\u30921\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, score2G:{title:"\u30b9\u30b3\u30a220\u5104\uff01", description:"\u30b9\u30b3\u30a2\u309220\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, score20G:{title:"\u30b9\u30b3\u30a2200\u5104\uff01", 
description:"\u30b9\u30b3\u30a2\u3092200\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, score50G:{title:"\u30b9\u30b3\u30a2500\u5104\uff01", description:"\u30b9\u30b3\u30a2\u3092500\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, score100G:{title:"\u30b9\u30b3\u30a21000\u5104\uff01", description:"\u30b9\u30b3\u30a2\u30921000\u5104\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, score1T:{title:"\u30b9\u30b3\u30a21\u5146\uff01", description:"\u30b9\u30b3\u30a2\u30921\u5146\u70b9\u4ee5\u4e0a\u7372\u5f97\u3059\u308b"}, 
combo100:{title:"100HIT\u9054\u6210\uff01", description:"\u30b3\u30f3\u30dc\u3092100HIT\u4ee5\u4e0a\u3064\u306a\u3052\u308b"}, combo1000:{title:"1000HIT\u9054\u6210\uff01", description:"\u30b3\u30f3\u30dc\u30921,000HIT\u4ee5\u4e0a\u3064\u306a\u3052\u308b"}, combo10000:{title:"10000HIT\u9054\u6210\uff01", description:"\u30b3\u30f3\u30dc\u309210,000HIT\u4ee5\u4e0a\u3064\u306a\u3052\u308b"}, combo100000:{title:"100000HIT\u9054\u6210\uff01", description:"\u30b3\u30f3\u30dc\u3092100,000HIT\u4ee5\u4e0a\u3064\u306a\u3052\u308b"}, 
extend1:{title:"\u30d5\u30a1\u30fc\u30b9\u30c8\u30a8\u30af\u30b9\u30c6\u30f3\u30c9\uff01", description:"\u521d\u3081\u3066\u30d5\u30a1\u30fc\u30b9\u30c8\u30a8\u30af\u30b9\u30c6\u30f3\u30c9(100,000\u70b9)\u3092\u9054\u6210\u3059\u308b"}, extend2:{title:"\u30bb\u30ab\u30f3\u30c9\u30a8\u30af\u30b9\u30c6\u30f3\u30c9\uff01", description:"\u521d\u3081\u3066\u30bb\u30ab\u30f3\u30c9\u30a8\u30af\u30b9\u30c6\u30f3\u30c9(1,000,000\u70b9)\u3092\u9054\u6210\u3059\u308b"}, extend3:{title:"\u8ca1\u95a5\u304b\u3089\u306e\u30d7\u30ec\u30bc\u30f3\u30c8", 
description:"\u521d\u3081\u3066\u30a8\u30af\u30b9\u30c6\u30f3\u30c9\u30a2\u30a4\u30c6\u30e0\u3092\u53d6\u5f97\u3059\u308b"}, nomiss1:{title:"\u30b9\u30c6\u30fc\u30b81\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, nomiss2:{title:"\u30b9\u30c6\u30fc\u30b82\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", description:"\u30b9\u30c6\u30fc\u30b82\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, 
nomiss3:{title:"\u30b9\u30c6\u30fc\u30b83\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", description:"\u30b9\u30c6\u30fc\u30b83\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, nomiss4:{title:"\u30b9\u30c6\u30fc\u30b84\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", description:"\u30b9\u30c6\u30fc\u30b84\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, 
nomiss5:{title:"\u30b9\u30c6\u30fc\u30b85\u30ce\u30fc\u30df\u30b9\u30af\u30ea\u30a2\uff01", description:"\u30b9\u30c6\u30fc\u30b85\u3092\u30ce\u30fc\u30df\u30b9\u30ce\u30fc\u30b3\u30f3\u30c6\u30a3\u30cb\u30e5\u30fc\u3067\u30af\u30ea\u30a2\u3059\u308b"}, boss1:{title:"\u30df\u30b9\u30df\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30df\u30b9\u30df\u300d\u3092\u6483\u7834\u3059\u308b"}, boss2:{title:"\u30d2\u30e5\u30a6\u30ac\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30d2\u30e5\u30a6\u30ac\u300d\u3092\u6483\u7834\u3059\u308b"}, 
boss3:{title:"\u30e2\u30e2\u30be\u30ce\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30e2\u30e2\u30be\u30ce\u300d\u3092\u6483\u7834\u3059\u308b"}, boss4:{title:"\u30a2\u30a4\u30c0\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30a2\u30a4\u30c0\u300d\u3092\u6483\u7834\u3059\u308b"}, boss5:{title:"\u30db\u30a6\u30b8\u30e7\u30a6\u6483\u7834\uff01", description:"\u30b9\u30c6\u30fc\u30b81\u30dc\u30b9\u300c\u30db\u30a6\u30b8\u30e7\u30a6\u300d\u3092\u6483\u7834\u3059\u308b"}};
gls2.ra = {};
gls2.ra.setup = function() {
  gls2.rk = {};
  gls2.ra.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.rk.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.ra.particle16 = gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.ra.Ye = function(b, a, d) {
  b = gls2.ra.particle16.clone().setPosition(b, a);
  b.ib = j;
  b.addChildTo(d);
  d = gls2.ma.randf(5, 20);
  a = gls2.ma.randf(Math.PI, 2 * Math.PI);
  b.Fa = Math.cos(a) * d;
  b.Ga = Math.sin(a) * d;
  b.scaleX = b.scaleY = (gls2.ma.randf(0.1, 0.5) + gls2.ma.randf(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.Fa;
    this.y += this.Ga;
    this.Fa *= 0.9;
    this.Ga *= 0.9
  })
};
gls2.ra.Th = function(b, a, d, f) {
  f = f || 1.8;
  var h = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  h.ib = j;
  h.addChildTo(d);
  h.image = gls2.ra.shockwaveImage;
  h.tweener.clear().to({scaleX:f, scaleY:f, alpha:0}, 800, "easeOutQuad").call(function() {
    h.remove()
  })
};
gls2.ra.Ek = function(b, a, d) {
  var f = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  f.ib = j;
  f.addChildTo(d);
  f.image = gls2.ra.shockwaveImage;
  f.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
};
gls2.ra.Dk = function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.ib = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.ra.Ue = function(b, a, d, f) {
  gls2.ta("explode");
  var h = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  h.ib = j;
  if(f !== i) {
    var m = f.x, q = f.y;
    h.addEventListener("enterframe", function() {
      this.x += m;
      this.y += q;
      m *= 0.99;
      q *= 0.99
    })
  }
  h.addChildTo(d);
  gls2.ra.Th(b, a, d)
};
gls2.ra.uk = function(b, a, d) {
  gls2.ta("explode");
  var f = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.ib = j;
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
  f.ib = j;
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
  f.ib = j;
  f.addChildTo(d)
};
gls2.ra.Ib = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Mc.noise.length), h = 0;20 > h;h++) {
    var m = gls2.ra.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Mc.noise.at(~~(gls2.Mc.noise.length * h / 20) + f), 2);
    m.ib = j;
    m.addChildTo(d)
  }
  gls2.ra.Th(b, a, d, 5)
};
gls2.ra.qg = function(b, a, d) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var f = ~~(Math.random() * gls2.Mc.noise.length), h = 0;20 > h;h++) {
    for(var m = 2 * Math.PI * h / 20, q = Math.pow(gls2.Mc.noise.at(~~(gls2.Mc.noise.length * h / 20) + f), 2), v = 0;3 > v;v++) {
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
      n.ib = j;
      n.oa = 0;
      n.a = m;
      n.v = w;
      n.addChildTo(d)
    }
  }
};
gls2.xf = tm.createClass({superClass:tm.app.Object2D, target:l, ic:0, angle:0, alpha:2, ib:j, reverse:r, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.ic = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Ua(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.ic + this.target.x, Math.sin(a) * this.ic + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.ic += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.ic || 200 < this.ic) && this.remove()
  }
}});
gls2.Tj = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, ib:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Ua(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.ma.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.ma.rand(-2, 2)).on("enterframe", function() {
        this.x += this.Fa;
        this.y += this.Ga
      }).addChildTo(this.target.parent);
      a.Fa = 3 * Math.cos(this.angle);
      a.Ga = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
gls2.ih = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(b) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + b + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, Rl:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.label.x -= 2;
  -480 > this.label.x && (this.alpha *= 0.9, 0.0010 > this.alpha && this.remove())
}});
gls2.Kj = tm.createClass({superClass:tm.graphics.Canvas, ca:l, Ad:l, vb:l, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Ad = gls2.Li(200);
  this.vb = gls2.uh(this)
}, update:function() {
  this.clear();
  this.ca.dc !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.vb.tc - 20, 470 * this.ca.dc.sa / this.ca.dc.Rc, 20), this.strokeRect(5, this.vb.tc - 20, 470, 20), this.clear(263.5, this.vb.tc - 20 + 2, 2, 16), this.clear(52, this.vb.tc - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.vb.tc + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.gb)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.Oa / gls2.ja.fh) + 1), this.vb.ee + 192, 22);
  b = [0, 1, 4][this.ca.fa.type];
  for(a = 0;a < this.ca.Xc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * H.Sa.Sb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.je + " hit", this.vb.ee + 10, 95);
  0 < ~~this.ca.Oa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.Oa + " HIT!!", 10, 0.5 * -this.vb.tc + 115));
  0 === this.frame % 2 && (!this.ca.La && 0 < this.ca.Ta ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Ta, 5, 637)) : this.ca.La && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.hd, 5, 637)));
  for(a = 0;a < this.ca.Gb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.bf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Ad.update();
  this.Ad.Mg = this.vb.tc + 5;
  this.Ad.draw(this);
  this.frame += 1
}});
gls2.uh = tm.createClass({superClass:tm.app.Object2D, Lb:l, ee:0, tc:0, init:function(b) {
  this.superInit();
  this.Lb = b
}});
(function() {
  var b = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.Vi = tm.createClass({superClass:tm.graphics.Canvas, Ca:l, Jb:l, Vb:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ca = gls2.Wi();
    this.Ca.na = this;
    this.Ca.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Jb = [];
    this.Vb = [];
    for(var a = 0;5 > a;a++) {
      this.Jb[a] = 40 * b[a], this.Vb[a] = this.Jb[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Ca.Fa = Math.cos(this.Ca.direction) * this.Ca.speed;
    this.Ca.Ga = Math.sin(this.Ca.direction) * this.Ca.speed;
    for(var b = 0;5 > b;b++) {
      for(this.Ca.fc[b] += this.Ca.Fa * Math.pow(0.8, b);3 * this.Jb[b] < this.Ca.fc[b];) {
        this.Ca.fc[b] -= 3 * this.Jb[b]
      }
      for(;this.Ca.fc[b] < 3 * -this.Jb[b];) {
        this.Ca.fc[b] += 3 * this.Jb[b]
      }
      for(this.Ca.gc[b] += this.Ca.Ga * Math.pow(0.8, b);2 * this.Vb[b] < this.Ca.gc[b];) {
        this.Ca.gc[b] -= 2 * this.Vb[b]
      }
      for(;this.Ca.gc[b] < 2 * -this.Vb[b];) {
        this.Ca.gc[b] += 2 * this.Vb[b]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Ca.background !== l ? this.clearColor(this.Ca.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * b[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * b[a] + ")"}]).toStyle();
      this.beginPath();
      for(var d = 0, f = this.Ca.fc[a] - 3 * this.Jb[a];f < 480 + 3 * this.Jb[a];f += 1.5 * this.Jb[a]) {
        for(var d = 0 === d ? this.Vb[a] : 0, h = this.Ca.gc[a] - 2 * this.Vb[a] + d;h < 640 + 2 * this.Vb[a];h += 2 * this.Vb[a]) {
          this.line(f, h, f + this.Jb[a], h), this.line(f, h, f - this.Jb[a] / 2, h + this.Vb[a]), this.line(f, h, f - this.Jb[a] / 2, h - this.Vb[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.Wi = tm.createClass({superClass:tm.app.Object2D, fc:0, gc:0, direction:0, speed:0, Fa:0, Ga:0, background:l, init:function() {
    this.superInit();
    this.fc = [];
    this.gc = [];
    for(var a = 0;5 > a;a++) {
      this.fc[a] = 240, this.gc[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Ga = this.Fa = 0
  }})
})();
gls2.Xf = tm.createClass({superClass:tm.display.Sprite, $h:r, ca:l, fa:l, Ic:r, jd:r, Tg:r, Fa:0, Ga:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.$h = b) && this.setScale(2, 2);
  this.ca = gls2.Xa.Td;
  this.fa = this.ca.fa;
  this.addChildTo(this.ca);
  b = 0.5 * gls2.ya.random() * Math.PI - 0.75 * Math.PI;
  this.Fa = 30 * Math.cos(b);
  this.Ga = 30 * Math.sin(b)
}, update:function() {
  this.fa.Rb && (this.jd = j);
  if(this.fa.parent === l) {
    this.jd = r
  }else {
    if(100 > gls2.Hc(this, this.fa)) {
      this.ca.Vk(this);
      this.remove();
      return
    }
    1E4 > gls2.Hc(this, this.fa) && (this.jd = j);
    if(this.Tg && this.jd) {
      var b = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.Tg || (this.x += this.Fa, this.y += this.Ga, this.Fa *= 0.8, this.Ga *= 0.8, -1 < this.Fa && (1 > this.Fa && -1 < this.Ga && 1 > this.Ga) && (this.Tg = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.wh = tm.createClass({superClass:gls2.Xf, Ic:r, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.Sj = tm.createClass({superClass:gls2.Xf, Ic:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.jd || (this.x += this.ca.na.Fa, this.y += this.ca.na.Ga);
  this.superClass.prototype.update.call(this)
}});
gls2.$c = tm.createClass({fa:l, ca:l, $:l, frame:0, init:function(b) {
  this.ca = b;
  this.fa = b.fa;
  this.Pd();
  this.$ = gls2.Rj();
  this.frame = 0
}, Pd:A(), update:function() {
  this.tk(this.frame);
  this.frame += 1
}, tk:function(b) {
  b = this.$.get(b);
  if(b !== l) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.hh[b.value] !== i) {
        var a = gls2.hh[b.value];
        if(a !== l) {
          if(a[0].dc === j) {
            this.Cg(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.Cg(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.$.Ug = r
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Cg:function(b) {
  this.ca.Te += 1;
  b = b.aa(this.ca, b.ba).setPosition(b.x, b.y).addChildTo(this.ca);
  b.te = this;
  b.Kd();
  return b
}, Me:function(b) {
  gls2.Ve();
  this.ca.ce = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var h = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
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
      this.update = A();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.ca.pg);
  gls2.ta("warning");
  gls2.ta("voWarning")
}});
gls2.$c.create = function(b, a) {
  switch(a) {
    case 0:
      return gls2.Mj(b);
    case 1:
      return gls2.Nj(b);
    case 2:
      return gls2.Oj(b);
    case 3:
      return gls2.Pj(b);
    case 4:
      return gls2.Qj(b);
    default:
      g(Error("stageNumber = " + a))
  }
};
gls2.Rj = tm.createClass({index:0, data:l, Ug:r, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? l : b.stop === j ? (this.Ug = j, b) : this.Ug ? l : b
}});
gls2.Mj = tm.createClass({superClass:gls2.$c, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Wb("bgm1", j);
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
    this.Me(function() {
      gls2.Wb("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, Pd:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.Nj = tm.createClass({superClass:gls2.$c, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Wb("bgm2", j);
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
  for(b = 0;12 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
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
    this.Me(function() {
      gls2.Wb("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ca.na.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Pd:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.Oj = tm.createClass({superClass:gls2.$c, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Wb("bgm3", j);
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.speed = 3;
    this.ca.na.tweener.clear().to({speed:10}, 4E3, "easeInOutQuad")
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
    this.ca.na.tweener.clear().to({speed:3}, 1E3, "easeInOutQuad")
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
    this.ca.na.tweener.clear().to({speed:5}, 2E3, "easeInOutQuad").to({direction:90 * (Math.PI / 180)}, 3E3, "easeInOutQuad")
  });
  for(b = 0;3 > b;b++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(100, "miyuki_y1");
  this.$.add(1, function() {
    this.ca.na.tweener.clear().to({speed:4}, 2E3, "easeInOutQuad").to({direction:0.5 * Math.PI}, 2E3, "easeInOutQuad")
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
    this.Me(function() {
      gls2.Wb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.na.direction = Math.PI / 2;
    this.ca.na.tweener.clear().to({speed:-10}, 5E3, "easeInOutQuad")
  });
  this.$.add(600, "momozono")
}, Pd:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.Pj = tm.createClass({superClass:gls2.$c, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Wb("bgm4", j);
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.speed = 1
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
    this.ca.na.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(b = 0;6 > b;b++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.ca.na.speed = 3;
    this.ca.na.tweener.clear().to({speed:0.3}, 5E3)
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
    this.ca.na.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", j);
  this.$.add(1200, A());
  for(b = 0;9 > b;b++) {
    this.$.add(50, 0 === b % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.ca.na.tweener.clear().to({speed:0.6}, 3E3)
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
    this.Me(function() {
      gls2.Wb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.na.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Pd:function() {
  this.ca.na.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.Qj = tm.createClass({superClass:gls2.$c, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Wb("bgm5", j);
    this.ca.na.direction = 0.5 * Math.PI;
    this.ca.na.speed = 1;
    this.ca.na.Xl = j
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
  this.ca.na.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {Hd:function(b, a) {
  if(b.parent === l || a.parent === l) {
    return r
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, h = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, q = a.y - a.boundingHeightTop, v = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > m && f < v && h > q
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, sl:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.Ed(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.Ni = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:r, title:l, selections:[], description:l, box:l, cursor:l, Eg:l, _selected:0, _opened:r, _finished:r, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Eg = d.onCursorMove;
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
    var h = tm.display.Label(a).setPosition(240, b).addChildTo(this);
    h.interactive = j;
    h.addEventListener("touchend", function() {
      f._selected === d ? f.closeDialog(f._selected) : f._selected = d
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Eg !== l && this.parent.Eg(this.s))
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
}, Ed:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function I(b, a, d, f, h) {
  h = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:A()}, h);
  b.sl(gls2.Ni(a, d, h), f)
}
;gls2.Ua = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, fg:0.85, size:0, image:l, ib:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== i ? a : 1;
  this.fg = d !== i ? d : 0.85;
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.fg;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Ua(this.size, this.Ol, this.fg, this.image)
}});
gls2.ah = tm.createClass({superClass:gls2.Ua, na:l, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.na = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.na.Fa;
  this.y += this.na.Ga + 0.3
}, clone:function(b) {
  return gls2.ah(this.na, b)
}});
gls2.Li = tm.createClass({width:0, label:l, yb:l, oa:0, mi:0, Mg:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.yb = [];
  this.mi = 480 - this.width - 5;
  this.Mg = 5
}, hk:function(b, a) {
  a === j && (this.yb.clear(), this.yb.push(""));
  5 < this.yb.length && this.yb.splice(1, this.yb.length - 4);
  this.yb.push(b);
  return this
}, lk:function() {
  this.yb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.yb.length) {
    if("" !== this.yb[0]) {
      var a = this.yb[0][0];
      this.yb[0] = this.yb[0].substring(1);
      b += a
    }else {
      this.yb.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.oa % 2 ? "_" : " ");
  this.oa += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.mi, this.Mg);
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
gls2.Mc = {noise:l, Fk:function(b) {
  function a(a) {
    if(1 > a) {
      return l
    }
    var f = [], h = Math.random(), m, q;
    for(q = 0;q < b;q += ~~a) {
      m = Math.random();
      for(var k = 0;k < a;k++) {
        f[q + k] = d(h, m, k / a)
      }
      h = m
    }
    h = f[b - ~~a];
    m = f[0];
    for(k = 0;k < a;k++) {
      f[b - ~~a + k] = d(h, m, k / a)
    }
    return f
  }
  function d(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var f = [], h = 0, m = Math.pow(2, 4);8 > h;h++, m *= 2) {
    var q = a(b / m);
    if(q === l) {
      break
    }
    f.push(q)
  }
  q = [].concat(f[0]);
  h = 1;
  for(m = 0.5;h < f.length;h++, m *= 0.5) {
    for(var v = 0;v < b;v++) {
      q[v] += f[h][v] * m
    }
  }
  for(h = 0;h < q.length;h++) {
    q[h] /= 2
  }
  return q
}};
gls2.Mc.noise = gls2.Mc.Fk(512);
gls2.ya = {index:-1, data:l, setup:function(b) {
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
gls2.hb = l;
gls2.Wb = function(b, a) {
  a || gls2.of();
  var d = tm.asset.AssetManager.get(b), f = tm.asset.AssetManager.get("bgmLoopInfo");
  d && (gls2.hb = d.clone(), gls2.hb.volume = 0.1 * gls2.core.Zd, gls2.hb.loop = j, gls2.hb.play(), f.data[b] && (gls2.hb.source.loopStart = f.data[b].start, gls2.hb.source.loopEnd = f.data[b].end))
};
gls2.of = function() {
  gls2.hb !== l && gls2.hb.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.hb.stop()
};
gls2.Ve = function() {
  if(gls2.hb !== l) {
    var b = gls2.hb;
    gls2.hb = l;
    b.loop = r;
    var a = function() {
      b.volume -= 0.0010;
      0 >= b.volume ? b.Tl === AudioBufferSourceNode.PLAYING_STATE && b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.ta = function(b) {
  if(0 !== gls2.core.nd && gls2.ta.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.nd, gls2.ta.Xg !== l && gls2.ta.Xg.stop(), gls2.ta.Xg = a) : a.volume = 0.1 * gls2.core.nd);
    gls2.ta.played[b] = gls2.core.frame
  }
};
gls2.ta.played = {};
gls2.ta.Xg = l;
(function() {
  var b = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, oa:0, ne:[], Xe:r, Vh:l, bi:0, cf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Vh = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Xe = r;
      this.vl()
    })
  }, vl:function() {
    for(var a = ("" + Math.floor(gls2.core.fe)).padding(16, " "), b = "", h = 0;h < a.length;h += 4) {
      b += a.substring(h, h + 4) + " "
    }
    this.Vh.text = "HIGH SCORE: " + b.trim()
  }, Ed:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.zh(80 * Math.cos(0.01 * this.oa) + 240, 80 * Math.sin(0.01 * this.oa) + 320, 0);
    this.zh(80 * Math.cos(0.01 * this.oa + Math.PI) + 240, 80 * Math.sin(0.01 * this.oa + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Xe && this.ji();
    this.oa += 1
  }, zh:function(d, f, h) {
    if(!this.Xe) {
      b === l && (b = gls2.Ua(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Ua(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      h = 0 === h ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      h.speed = 0.6;
      var m = gls2.ma.randf(0, 2 * Math.PI), q = gls2.ma.rand(0, 20);
      h.setPosition(Math.cos(m) * q + d, Math.sin(m) * q + f);
      var v = this;
      h.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = v.ne.indexOf(this);
          -1 !== a && v.ne.splice(a, 1)
        }
      };
      this.ne.push(h)
    }
  }, ji:function() {
    I(this, "MAIN MENU", ["start", "setting"], this.al, {defaultValue:this.bi, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, al:function(a) {
    2 !== a && (this.bi = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Xe = j;
          for(var a = 0, b = this.ne.length;a < b;a++) {
            this.ne[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.Lj())
        }.bind(this));
        break;
      case 1:
        this.Sc()
    }
  }, Sc:function() {
    I(this, "SETTING", ["bgm volume", "sound volume"], this.Ig, {defaultValue:this.cf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Ig:function(a) {
    3 !== a && (this.cf = a);
    switch(a) {
      case 0:
        this.Jg();
        break;
      case 1:
        this.Kg();
        break;
      default:
        this.ji()
    }
  }, Jg:function() {
    I(this, "BGM VOLUME", "012345".split(""), this.Gg, {defaultValue:gls2.core.Zd, onCursorMove:function(a) {
      gls2.hb !== l && "exit" !== a && (gls2.hb.volume = 0.1 * a)
    }, showExit:r})
  }, Gg:function(a) {
    6 !== a && (gls2.core.Zd = a);
    this.Sc()
  }, Kg:function() {
    I(this, "SE VOLUME", "012345".split(""), this.Hg, {defaultValue:gls2.core.nd, showExit:r})
  }, Hg:function(a) {
    6 !== a && (gls2.core.nd = a);
    this.Sc()
  }, Sl:function() {
    I(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.$k, {defaultValue:gls2.core.Mh, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, $k:function(a) {
    5 !== a && (gls2.core.Mh = a);
    this.Sc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.Lj = tm.createClass({superClass:gls2.Scene, mode:0, types:l, pf:l, $b:l, ac:l, bc:l, zg:l, xg:l, type:0, style:0, Oc:r, ff:r, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.nl();
    this.pf = this.ml();
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
    this.pf.visible = r;
    this.Dg(-1, j);
    this.$b.update();
    this.ac.update();
    this.bc.update();
    gls2.ta("voSelectShip");
    gls2.Wb("bgmShipSelect", j)
  }, nl:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.zg = tm.display.Label("Type-A").setPosition(240, 150);
    this.zg.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.Ag = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.Ag.update = function() {
      this.Ag.text = b[this.type]
    }.bind(this);
    this.Ag.addChildTo(a);
    var f = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.$b = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.ac = tm.display.AnimationSprite(f, 64, 64).gotoAndPlay("typeB");
    this.bc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.$b.bb = 0;
    this.ac.bb = 1;
    this.bc.bb = 2;
    this.$b.setScale(3).setPosition(0, 320).addChildTo(a);
    this.ac.setPosition(0, 320).addChildTo(a);
    this.bc.setPosition(0, 320).addChildTo(a);
    this.$b.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.bb / 3 * Math.PI)
    };
    this.ac.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.bb / 3 * Math.PI)
    };
    this.bc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.bb / 3 * Math.PI)
    };
    return a
  }, ml:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.xg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.xg.addChildTo(a);
    this.Vc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Dc = tm.app.Object2D();
    this.Dc.addChildTo(this.Vc);
    this.Dc.update = function(a) {
      this.Dc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
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
    this.Vc.line = b(0, 0, 0, 130, 8);
    this.Vc.line.addChildTo(this.Vc);
    this.xa.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Dc)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.yg = tm.display.Label(d[0], 16).setPosition(240, 500);
    this.yg.update = function() {
      this.yg.text = d[this.style]
    }.bind(this);
    this.yg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.pf.visible = r, !this.ff && a.keyboard.getKeyDown("left")) {
        this.Dg(-1, r), gls2.ta("select")
      }else {
        if(!this.ff && a.keyboard.getKeyDown("right")) {
          this.Dg(1, r), gls2.ta("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.ta("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.pf.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (gls2.ja.Yg ? this.fl() : (this.Oc = j, this.ii()), gls2.ta("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.wl(0 === ~~(a.frame / 60) % 
      2))
    }
  }, fl:function() {
    I(this, "AUTO BOMB", ["on", "off"], this.Wk, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, Wk:function(a) {
    2 !== a && (this.Oc = 0 === a, this.ii())
  }, ii:function() {
    I(this, "ARE YOU READY?", ["ok"], this.Xk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, Xk:function(a) {
    0 === a && this.pl()
  }, Dg:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.$b, this.ac, this.bc][this.type].remove().addChildTo(this.types);
    b ? (this.$b.bb -= a, this.$b.scaleX = 0 === this.type ? 5 : 1, this.$b.scaleY = 0 === this.type ? 5 : 1, this.ac.bb -= a, this.ac.scaleX = 1 === this.type ? 5 : 1, this.ac.scaleY = 1 === this.type ? 5 : 1, this.bc.bb -= a, this.bc.scaleX = 2 === this.type ? 5 : 1, this.bc.scaleY = 2 === this.type ? 5 : 1) : (this.ff = j, this.$b.tweener.clear().to({bb:this.$b.bb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.ac.tweener.clear().to({bb:this.ac.bb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.bc.tweener.clear().to({bb:this.bc.bb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.ff = r
    }.bind(this)));
    this.zg.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, pl:function() {
    gls2.core.ca.Oc = this.Oc;
    gls2.core.replaceScene(gls2.core.ca);
    gls2.core.ca.start(this.type, this.style);
    gls2.Ve()
  }, wl:function(a) {
    this.xg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.Vc.line.jc = r, this.xa[0].line.jc = r, this.xa[1].line.jc = r, this.xa[2].line.jc = r, this.xa[3].line.jc = r) : (this.Vc.line.jc = j, this.xa[0].line.jc = j, this.xa[1].line.jc = j, this.xa[2].line.jc = j, this.xa[3].line.jc = j);
    a ? (this.xa[0].visible = j, this.xa[1].visible = j, 1 === this.style ? (this.xa[2].visible = r, this.xa[3].visible = r) : (this.xa[2].visible = j, this.xa[3].visible = j), this.Vc.line.lineWidth = 5) : (this.xa.each(function(a) {
      a.visible = r
    }), this.Vc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, Ed:A()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, jc:j, init:function(a, b, f, h, m) {
    this.superInit();
    this.angle = f - 0.5 * Math.PI;
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
    if(this.jc && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), f = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - f, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - f, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + f, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + f, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.Xa = tm.createClass({superClass:gls2.Scene, fa:l, score:0, Ec:0, gb:0, Oa:0, je:0, $a:0, Pc:0, ue:0, te:l, na:l, Xc:3, lf:0, mf:0, wc:0, Te:0, ke:0, ef:0, Oc:r, Gb:0, fd:0, Eh:0, kd:r, bf:r, vc:0, Bb:0, La:r, he:0, Gd:0, Ta:0, hd:0, Nl:0, Ml:0, Ze:l, Ph:l, Lg:l, Nh:l, og:l, pg:l, ig:l, Yh:l, Ub:l, Lb:l, dc:l, ce:r, Sk:r, ik:0, Nd:l, init:function() {
  gls2.Xa.Td !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.Xa.Td = this;
  this.Lb = gls2.Kj(this);
  this.Lb.vb.addChildTo(this);
  this.na = gls2.Vi().Ca;
  this.na.addChildTo(this);
  this.Ze = gls2.Xa.Layer().addChildTo(this);
  this.Ph = gls2.Xa.Layer().addChildTo(this);
  this.Nh = gls2.Xa.Layer().addChildTo(this);
  this.og = gls2.Xa.Layer().addChildTo(this);
  this.Lg = gls2.Xa.Layer().addChildTo(this);
  this.pg = gls2.Xa.Layer().addChildTo(this);
  this.ig = gls2.Xa.Layer().addChildTo(this);
  this.Yh = gls2.Xa.mh(this).addChildTo(this);
  tm.zb.Yc.be.Ch = this;
  this.Ub = tm.app.Object2D();
  this.Ub.addChildTo(this);
  this.Ub.update = function(b) {
    this.dl(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Lb.clear()
  })
}, addChild:function(b) {
  b.ib ? this.og.addChild(b) : b instanceof gls2.Pa ? this.ig.addChild(b) : b instanceof gls2.Xf ? this.Ze.addChild(b) : b instanceof gls2.ha ? b.Ic ? this.Ze.addChild(b) : this.Nh.addChild(b) : b instanceof gls2.sh ? this.Lg.addChild(b) : b === this.Ub || b === this.na || b instanceof gls2.Xa.Layer || b instanceof gls2.Xa.mh || b instanceof gls2.uh || b instanceof gls2.ih ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(b)))
}, update:function(b) {
  this.kl(b.keyboard);
  this.te.update(b.frame);
  0 === b.frame % 2 && this.Lb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.of()) : b.keyboard.getKeyDown("space") ? this.me(0) : b.keyboard.getKeyDown("p") && (this.Sg().saveAsImage(), this.me(0))
}, Sg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.na.na.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Lb.element, 0, 0);
  return b
}, dl:function() {
  this.fa.Fc === r && gls2.ia.erase();
  var b;
  b = [].concat(gls2.ha.pb);
  for(var a = [].concat(gls2.xd.pb), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var h = b[f], m = a[d];
      if(!(0 >= h.sa) && gls2.Collision.Hd(h, m) && (m.Ye(1), m.remove(), h.Gc(m.cd))) {
        this.wc += 1;
        this.La ? this.xb(gls2.ja.hj) : this.xb(gls2.ja.gj);
        this.Fg(h);
        break
      }
    }
  }
  m = this.fa.Tb;
  if(this.fa.Rb) {
    b = [].concat(gls2.ha.pb);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(h = b[f], !(0 >= h.sa) && gls2.Collision.Hd(h, m)) {
        m.ll(h.y + h.boundingHeightBottom);
        h.Gc(m.cd) ? (this.wc += 1, this.La ? this.xb(gls2.ja.fj) : this.xb(gls2.ja.cj), this.Fg(h)) : (this.$a = Math.min(this.$a + 0.02, 1), this.La ? (this.yd(0.01 * gls2.ja.zf[this.hd]), this.xb(gls2.ja.ej)) : (this.yd(0.01), this.xb(gls2.ja.dj)));
        m.Ye(2);
        break
      }
    }
    a = {x:this.fa.x, y:this.fa.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(gls2.ha.pb);
    for(f = b.length;b[--f] !== i;) {
      h = b[f], !(0 >= h.sa) && gls2.Collision.Hd(h, a) && (h.Gc(m.cd) ? (this.wc += 1, this.La ? this.xb(gls2.ja.bj) : this.xb(gls2.ja.Zi), this.Fg(h)) : (this.$a = Math.min(this.$a + 0.02, 1), this.La ? (this.yd(0.01 * gls2.ja.zf[this.hd]), this.xb(gls2.ja.aj)) : (this.yd(0.01), this.xb(gls2.ja.$i))), m.Ck(2, this.fa.x, this.fa.y - 30))
    }
  }
  if(this.kd) {
    gls2.ia.erase();
    b = [].concat(gls2.ha.pb);
    for(f = b.length;b[--f] !== i;) {
      h = b[f], !(0 >= h.sa) && (h.hc() && h.Gc(gls2.ja.yi)) && (this.bd(h.score), this.wc += 1)
    }
    this.$a = this.Oa = 0
  }
  if(this.La) {
    f = [].concat(gls2.xd.pb);
    for(h = f.length;f[--h] !== i;) {
      if(m = f[h], !(0 >= m.sa)) {
        a = [].concat(gls2.Pa.pb);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== r && (0 < m.sa && gls2.Collision.Hd(m, d)) && (d.sa -= 6 - this.Bb, 0 > d.sa && (d.Ea(), this.bd(gls2.ja.Ci), this.yd(gls2.ja.Ai), this.Uh(r, r, d.x, d.y, 1)), m.sa -= 1)
        }
      }
    }
  }
  if(this.ce) {
    gls2.ia.erase()
  }else {
    if(this.fa.parent !== l && this.fa.Jd === r && this.kd === r && 0 >= this.he && !gls2.ja.tj) {
      for(f = gls2.Pa.pb.length;gls2.Pa.pb[--f] !== i;) {
        if(b = gls2.Pa.pb[f], b.visible !== r && gls2.Collision.Hd(b, this.fa)) {
          this.fa.Gc();
          0 < this.Gb && this.Oc ? (this.Bb = gls2.ma.clamp(this.Bb - 1, 0, 1), this.Xd(-0.01), gls2.ph(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this)) : this.fi();
          break
        }
      }
      for(f = gls2.ha.pb.length;gls2.ha.pb[--f] !== i;) {
        if(h = gls2.ha.pb[f], !(0 >= h.sa) && !h.Ic && gls2.Collision.Hd(h, this.fa)) {
          this.fa.Gc();
          0 < this.Gb && this.Oc ? (this.Bb = gls2.ma.clamp(this.Bb - 1, 0, 1), this.Xd(-0.01), gls2.ph(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this)) : this.fi();
          break
        }
      }
    }
    this.La && (this.Gd -= 1, 0 >= this.Gd && this.Se());
    this.he = Math.max(this.he - 1, 0);
    this.$a -= gls2.ja.Ii * gls2.ja.Ji;
    0 >= this.$a && (this.$a = 0, this.La || 0 < this.Ta ? this.Pc = this.Oa = this.gb = 0 : (0 < this.Oa && (0 >= this.Pc && (this.Pc = this.Oa * gls2.ja.Hi), this.gb = this.gb * (this.Oa - this.Pc) / this.Oa, this.Oa -= this.Pc), 0 >= this.Oa && (this.Pc = this.Oa = this.gb = 0)));
    this.bf && (this.score += gls2.ja.sj)
  }
}, Fg:function(b) {
  this.Uh(b.Ic, this.La || gls2.Hc(b, this.fa) < gls2.ja.Ki, b.x, b.y, b.star, b instanceof gls2.sd);
  this.yd(gls2.ja.zf[this.hd]);
  for(var a = this.gb, d = ~~(this.Oa / gls2.ja.fh) + 1, f = 0;f < d;f++) {
    a += b.score, this.bd(a)
  }
  this.gb += b.score * d;
  "misumi" === b.name && this.app.Ja("boss1");
  "hyuga" === b.name && this.app.Ja("boss2");
  "momozono" === b.name && this.app.Ja("boss3");
  "aida" === b.name && this.app.Ja("boss4");
  "hojo" === b.name && this.app.Ja("boss5");
  0 === this.ef && 0 === this.Ec && ("misumi" === b.name && this.app.Ja("nomiss1"), "hyuga" === b.name && this.app.Ja("nomiss2"), "momozono" === b.name && this.app.Ja("nomiss3"), "aida" === b.name && this.app.Ja("nomiss4"), "hojo" === b.name && this.app.Ja("nomiss5"))
}, Uh:function(b, a, d, f, h, m) {
  b = b ? gls2.Sj : gls2.wh;
  for(var q = 0;q < h;q++) {
    var v = b(a);
    v.setPosition(d, f);
    m && (v.jd = j)
  }
}, Vk:function(b) {
  gls2.ta("star");
  b.$h ? (this.mf += 1, this.gb += gls2.ja.Ej, this.bd(gls2.ja.Ij + this.gb * gls2.ja.Gj), this.La ? this.xb(gls2.ja.lj) : this.xb(gls2.ja.kj)) : (this.lf += 1, this.gb += gls2.ja.Dj, this.bd(gls2.ja.Hj + this.gb * gls2.ja.Fj), this.La ? this.xb(gls2.ja.jj) : this.xb(gls2.ja.ij))
}, start:function(b, a) {
  this.Lb.Ad.lk().clear();
  this.Ec = this.score = 0;
  this.Xc = gls2.ja.kh;
  this.Gb = this.fd = gls2.ja.jh[a];
  this.Eh = gls2.ja.zi[a];
  this.Ta = this.Bb = this.vc = 0;
  this.Se();
  this.kd = r;
  this.ik = this.ke = this.ef = 0;
  this.fa = gls2.sh(this, b, a);
  this.Rg(gls2.ja.oj);
  H.Sa.Sb.$ex = 2 !== a ? 0 : 1;
  this.ri(0);
  gls2.ta("voLetsGo");
  this.rl();
  0 === b ? gls2.core.Ja("launchA") : 1 === b ? gls2.core.Ja("launchB") : 2 === b && gls2.core.Ja("launchC")
}, ri:function(b) {
  this.tb("3...2...1...");
  this.fa.parent !== l && this.fa.remove();
  gls2.ha.$d();
  gls2.xd.$d();
  gls2.ia.$d();
  this.Ze.removeChildren();
  this.og.removeChildren();
  this.pg.removeChildren();
  this.Lg.removeChildren();
  this.ig.removeChildren();
  this.Ub.removeChildren();
  this.wc = this.Te = this.mf = this.lf = this.je = this.$a = this.Oa = this.gb = 0;
  this.dc = l;
  this.Sk = this.ce = r;
  this.ke = 0;
  this.Lb.vb.ee = 0;
  this.Bb = this.Lb.vb.tc = 0;
  this.ue = b;
  this.te = gls2.$c.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.Bg()
  }.bind(this));
  this.na.tweener.clear()
}, Bg:function() {
  this.tb("Let's go!");
  this.fa.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.fa.Tb.addChildTo(this);
  this.fa.Fc = r;
  this.fa.Jd = j;
  this.fa.Fd = r;
  this.fa.Rb = r;
  this.fa.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Yd = this.Fc = j
  }.bind(this.fa)).wait(gls2.ja.qj).call(function() {
    this.Jd = r
  }.bind(this.fa))
}, fi:function() {
  gls2.ra.Ue(this.fa.x, this.fa.y, this);
  this.tb("I was shot down.");
  this.fa.Fc = r;
  this.fa.remove();
  this.Xc -= 1;
  this.Ta = this.Pc = this.Oa = this.$a = 0;
  this.ke += 1;
  this.ef += 1;
  this.Bb = gls2.ma.clamp(this.Bb - 3, 0, 1);
  this.Xd(-0.03);
  0 < this.Xc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.Oc || !gls2.ja.Yg) {
      this.fd = Math.min(this.fd + 1, this.Eh)
    }
    this.Gb = this.fd;
    this.Bg()
  }.bind(this)) : this.tweener.clear().wait(20).call(function() {
    this.Nd = this.Sg().canvas.toDataURL("image/png");
    gls2.core.fe === this.score && (gls2.core.Kk = this.Nd)
  }.bind(this)).wait(2E3).call(function() {
    this.Ec < gls2.core.Bd ? this.hl() : this.Sh()
  }.bind(this))
}, Rg:function(b) {
  H.Sa.Sb.$rank = gls2.ma.clamp(b, 0, 0.5)
}, Xd:function(b) {
  this.Rg(H.Sa.Sb.$rank + b)
}, Bk:function() {
  this.tb("System rebooted.", j);
  this.score = 0;
  this.Ec += 1;
  this.Xc = gls2.ja.kh;
  this.Gb = this.fd = gls2.ja.jh[this.fa.style];
  this.Bb = 0;
  this.Rg(0);
  this.Bg()
}, mk:function() {
  gls2.Wb("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.Ub);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(gls2.ResultScene(this, this.Sg()));
    b.remove()
  }.bind(this))
}, Sh:function() {
  gls2.of();
  this.app.replaceScene(gls2.Ti())
}, Kl:A(), bd:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < gls2.ja.gh.length;b++) {
    var d = gls2.ja.gh[b];
    a < d && d <= this.score && (this.Oh(), 0 == b && this.app.Ja("extend1"), 1 == b && this.app.Ja("extend2"))
  }
  gls2.core.fe = Math.max(gls2.core.fe, this.score);
  gls2.core.fe === this.score && (gls2.core.Lk = this.ue, gls2.core.Nk = this.fa.type, gls2.core.Mk = this.fa.style, gls2.core.Jk = this.Ec);
  1E8 <= this.score && this.app.Ja("score100M");
  2E9 <= this.score && this.app.Ja("score2G");
  2E10 <= this.score && this.app.Ja("score20G");
  5E10 <= this.score && this.app.Ja("score50G");
  1E11 <= this.score && this.app.Ja("score100G");
  1E12 <= this.score && this.app.Ja("score1T")
}, yd:function(b) {
  this.Pc = 0;
  this.Oa += b;
  this.je = Math.max(this.je, this.Oa);
  1 <= b && (this.$a = 1);
  100 <= this.Oa && this.app.Ja("combo100");
  1E3 <= this.Oa && this.app.Ja("combo1000");
  1E4 <= this.Oa && this.app.Ja("combo10000");
  1E5 <= this.Oa && this.app.Ja("combo100000")
}, xb:function(b) {
  if(this.Ta !== gls2.ja.Af) {
    for(b *= gls2.ja.mj;1 < b;) {
      gls2.xf(this.fa).addChildTo(this), b -= 1, this.vc = 0, this.Ta += 1, 1 === this.Ta ? (this.tb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.tb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady"))
    }
    this.vc = gls2.ma.clamp(this.vc + b, 0, 1);
    1 <= this.vc && (gls2.xf(this.fa).addChildTo(this), this.Ta += 1, this.vc -= 1, 1 === this.Ta ? (this.tb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.tb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady")))
  }
}, ql:function() {
  0.5 > Math.random() ? (this.tb("HYPER SYSTEM start!!", j), gls2.ta("voHyperStart0")) : (this.tb("start counting to system limit.", j), gls2.ta("voHyperStart1"));
  this.Bb = gls2.ma.clamp(this.Bb + 1, 0, 5);
  this.Xd(0.01 * this.Ta);
  H.Sa.Sb.$hyperOff = gls2.ja.Pi * (2 !== this.fa.style ? 1 : 0.5);
  this.Gd = gls2.ja.Be;
  this.he = gls2.ja.Be * gls2.ja.Yi;
  this.fa.$e.Od(this.Ta);
  this.fa.Tb.Od(this.Ta);
  this.fa.Cd = this.fa.$e;
  gls2.ra.Dk(this.fa.x, this.fa.y, this);
  this.La = j;
  this.hd = this.Ta;
  this.vc = this.Ta = 0;
  gls2.ia.erase(j, j);
  this.app.Ja("hyper1");
  10 == this.hd && this.app.Ja("hyper10")
}, Se:function() {
  this.La !== r && (this.La = r, gls2.xf(this.fa, j).addChildTo(this), this.fa.Cd = this.fa.hi, H.Sa.Sb.$hyperOff = 1 * (2 !== this.fa.style ? 1 : 0.5), this.fa.$e.Od(0), this.fa.Tb.Od(0), this.he = gls2.ja.Be * gls2.ja.Xi, this.hd = this.Gd = 0, gls2.ia.erase())
}, gk:function() {
  gls2.ta("decision");
  gls2.ta("voGetBomb");
  this.Gb = Math.min(this.Gb + 1, this.fd);
  this.bf = this.Gb === this.fd
}, Oh:function() {
  gls2.ta("voExtend");
  this.tb("extended.");
  this.Xc += 1
}, tb:function(b, a) {
  this.Lb.Ad.hk(b, a)
}, me:function(b) {
  I(this, "PAUSE", ["resume", "setting", "exit game"], this.cl, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:r})
}, cl:function(b) {
  switch(b) {
    case 1:
      this.Sc();
      break;
    case 2:
      this.gl()
  }
}, Sc:function() {
  I(this, "SETTING", ["bgm volume", "sound volume"], this.Ig, {defaultValue:this.cf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Ig:function(b) {
  3 !== b && (this.cf = b);
  switch(b) {
    case 0:
      this.Jg();
      break;
    case 1:
      this.Kg();
      break;
    default:
      this.me()
  }
}, gl:function() {
  I(this, "REARY?", ["yes", "no"], this.Yk, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:r})
}, Yk:function(b) {
  0 === b ? (gls2.of(), this.app.replaceScene(gls2.TitleScene())) : this.me(1)
}, Jg:function() {
  I(this, "BGM VOLUME", "012345".split(""), this.Gg, {defaultValue:gls2.core.Zd, onCursorMove:function(b) {
    gls2.hb !== l && 6 !== b && (gls2.hb.volume = 0.1 * b)
  }, showExit:r})
}, Gg:function(b) {
  6 !== b && (gls2.core.Zd = b);
  this.Sc(1)
}, Kg:function() {
  I(this, "SE VOLUME", "012345".split(""), this.Hg, {defaultValue:gls2.core.nd, showExit:r})
}, Hg:function(b) {
  6 !== b && (gls2.core.nd = b);
  this.Sc(1)
}, hl:function() {
  I(this, "CONTINUE? (" + this.Ec + "/" + gls2.core.Bd + ")", ["yes", "no"], this.Zk, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:r})
}, Zk:function(b) {
  switch(b) {
    case 0:
      this.Bk();
      break;
    case 1:
      this.Sh()
  }
}, Ed:A(), ol:function() {
  this.Lb.vb.tweener.clear().to({ee:-480}, 1600, "easeInBack").to({tc:30}, 800, "easeInOutBack")
}, Ik:function() {
  this.Lb.vb.tweener.clear().to({tc:0}, 800, "easeInOutBack").to({ee:0}, 1600, "easeOutBack")
}, pe:l, qe:0, ie:l, De:0, rl:function() {
  if(1 === this.De) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.ie = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.pe = [];
    this.qe = 0
  }else {
    if(2 === this.De && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.ie = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.ie.push(d[f])
        }
      }
    }
  }
}, kl:function(b) {
  if(1 === this.De) {
    1E3 < this.pe.length && (console.log("save"), localStorage.setItem("rec" + this.qe, this.pe), localStorage.setItem("recCount", this.qe), this.pe = [], this.qe += 1), this.pe.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.De && this.ie) {
      var a = this.ie.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : r
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : r
      })
    }
  }
}});
gls2.Xa.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.Xa.mh = tm.createClass({superClass:tm.display.CanvasElement, ca:l, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.pk(b);
  this.qk(b)
}, pk:function(b) {
  if(0 < this.ca.$a) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.$a) + "," + ~~Math.min(255, 512 * this.ca.$a) + ",0.5)";
    var a = 500 * this.ca.$a;
    b.fillRect(465, 635 - a, 10, a)
  }
}, qk:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.Ta === gls2.ja.Af ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.vc && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.vc, 9))
}});
gls2.Xa.Td = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ca:l, Nd:l, Ub:l, values:l, labels:l, af:l, ni:[gls2.ja.Bj, gls2.ja.Cj, gls2.ja.yj, gls2.ja.zj, 1], Zh:l, Og:l, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ca.lf, this.ca.mf, ~~(100 * (this.ca.wc / this.ca.Te)), this.ca.je, 0 === this.ca.ke ? gls2.ja.Aj : 0];
  this.af = this.values.map(function(a) {
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
  this.Zh = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.Og = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.Og.visible = r;
  this.Nd = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var h = 0;16 > h;h++) {
      f[d][h] = {Pg:0, Md:0, Kc:gls2.ma.randf(-2, 2), kc:gls2.ma.randf(1, 4)}
    }
  }
  this.Ub = tm.app.Object2D();
  this.Ub.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var h = 0;h < f[d].length;h++) {
        var n = f[d][h];
        640 > 40 * h + n.Md && (a.drawImage(this.Nd.element, 40 * d, 40 * h, 40, 40, 40 * d + n.Pg, 40 * h + n.Md, 40, 40), n.Pg += n.Kc, n.Md += n.kc, n.kc += 0.3, b = r)
      }
    }
    this.wait = 60;
    b && this.Ub.remove();
    a.restore()
  }.bind(this);
  this.Ub.addChildTo(this);
  this.addEventListener("exit", function() {
    gls2.Ve()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.ta("star"), this.values[a] <= this.af[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.bd(this.values[a] * this.ni[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.bd(this.af[a] * this.ni[a]), this.values[a] -= this.af[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.Zh.text = Math.floor(this.ca.score)
    }else {
      if(this.Og.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.ta("decision"), this.ca.ri(this.ca.ue + 1), b.popScene()
      }
    }
    this.frame += 1
  }
}, Ed:A()});
gls2.Ti = tm.createClass({superClass:gls2.Scene, oa:0, ki:r, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.on("enter", function() {
    gls2.Wb("gameover")
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.oa && !this.ki) && this.gf();
  this.oa += 1
}, Ed:function(b) {
  b.clearColor("black")
}, jf:r, wait:r, Qg:l, gf:function() {
  this.wait || (this.ki = j, this.jf ? openConfirmTweetDialog() : I(this, "GAME OVER", ["save score", "tweet result", "back to title"], this.bl, {defaultValue:this.jf ? 1 : 0, menuDescriptions:["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"], showExit:r}))
}, bl:function(b) {
  0 === b ? this.jf || (this.wait = j, this.app.Ng(l, function(a, b, f) {
    this.wait = r;
    a ? this.il(a) : b ? (this.jf = j, this.Qg = f, this.jl()) : this.gf()
  }.bind(this))) : 1 === b ? this.ul() : this.app.replaceScene(gls2.TitleScene())
}, jl:function() {
  I(this, "SUCCESS!", ["ok"], function() {
    this.gf()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:r})
}, il:function() {
  I(this, "ERROR!", ["ok"], function() {
    this.gf()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:r})
}, ul:function() {
  var b = "TM-Shooter SCORE: {score}(stage{stage} {type}-{style} continue:{cont})".format({score:Math.floor(this.app.ca.score), stage:this.app.ca.ue + 1, type:"ABC"[this.app.ca.fa.type], style:["S", "L", "EX"][this.app.ca.fa.style], cont:this.app.ca.Ec}), b = tm.social.Twitter.createURL({type:"tweet", text:b, hashtags:"tmshooter", url:this.Qg ? "http://tmshooter.net/ranking/" + this.Qg : "http://tmshooter.net"});
  window.open(b, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
gls2.zl = tm.createClass({superClass:gls2.Scene, init:function() {
  this.superInit()
}, update:A()});
(function() {
  gls2.ha = tm.createClass({superClass:tm.display.CanvasElement, name:l, fa:l, ca:l, te:l, sa:0, Rc:0, score:0, Ic:r, erase:r, star:1, Rk:r, Hb:j, Qa:r, frame:0, qf:l, direction:0, speed:0, ga:l, init:function(a, d, f) {
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
    this.Hb = j;
    this.ca = a;
    this.fa = a.fa;
    this.score = 100;
    this.erase = r;
    this.fk(f);
    d.setup(this);
    this.altitude = this.Ic ? 1 : 10;
    this.qf = {x:0, y:0}
  }, Kd:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, Ql:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Qa === r && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Qa = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Ic && (this.x += this.ca.na.Fa, this.y += this.ca.na.Ga);
    this.Qa && (this.frame += 1);
    this.qf.x = this.x - a;
    this.qf.y = this.y - b
  }, Gc:function(a) {
    if(!this.Qa) {
      return r
    }
    this.sa -= a;
    if(0 >= this.sa) {
      return a = gls2.ma.randf(0, 5), 2 > a ? this.ca.tb("enemy destroy.") : 4 > a ? this.ca.tb(this.name + " destroy.") : this.ca.tb("ETR reaction gone."), this.erase && gls2.ia.erase(j, this.ca.La, this instanceof gls2.sd), this.dispatchEvent(tm.event.Event("destroy")), this.Ea(), j
    }
    40 > this.sa && this.Ra();
    return r
  }, Ea:function() {
    gls2.ra.Ue(this.x, this.y, this.ca, this.qf);
    this.remove()
  }, hc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, el:function() {
    return this.Hb
  }, Ra:A(), fk:function(a) {
    this.name = a;
    a = gls2.ha.Mi[a];
    this.sa = this.Rc = a[0];
    this.score = a[1];
    this.Ic = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, sc:function() {
    this.remove();
    this.ca.Ph.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Ue(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.qg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Ne:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.ra.Ue(this.x + gls2.ma.rand(-100, 100), this.y + gls2.ma.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.ra.qg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  gls2.ha.$d = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = gls2.ha.pb = []
})();
gls2.sd = tm.createClass({superClass:gls2.ha, Rk:j, Rc:0, kf:l, init:function(b, a, d) {
  this.kf = a;
  this.superInit(b, this.kf[0], d);
  this.Rc = this.sa;
  this.addEventListener("added", function() {
    this.ca.dc = this;
    this.ca.ol();
    this.tweener.wait(1E3).call(function() {
      this.ca.ce = r
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.dc = l;
    this.ca.Ik();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.mk()
    }.bind(this));
    a.addChildTo(this.ca.Ub)
  })
}, Gc:function(b) {
  var a = this.sa;
  if(gls2.ha.prototype.Gc.call(this, b)) {
    return this.ca.ce = j, this.ca.fa.Yd = r, gls2.Ve(), j
  }
  this.sa <= 0.55 * this.Rc && 0.55 * this.Rc < a ? (gls2.da.nf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Ib(this.x, this.y, this.ca), gls2.ia.erase(j, this.ca.La), this.kf[1].setup(this)) : this.sa <= 0.1 * this.Rc && 0.1 * this.Rc < a && (gls2.da.nf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.ra.Ib(this.x, this.y, this.ca), gls2.ia.erase(j, this.ca.La), this.kf[2].setup(this), gls2.ta("voJacms"))
}});
(function() {
  gls2.ha.Mi = {kujo:[2, 300, r, r, 1, {radius:24}], kiryu:[3, 400, r, r, 1, {radius:24}], natsuki:[5, 900, j, r, 1, {radius:24}], kise:[50, 15E3, j, r, 1, {radius:24}], yamabuki:[100, 15E3, j, r, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, r, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, r, r, 5, {width:100, height:20}], kasugano:[6, 1E3, r, r, 1, {radius:24}], 
  kurokawa:[35, 5E3, r, r, 5, {width:100, height:20}], akimoto:[250, 3E5, r, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, r, j, 20, {width:180, heightBottom:40, heightTop:60}], aono:[250, 3E5, r, j, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, r, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, r, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, r, j, 20, {width:300, height:80}], higashi:[1500, 12E5, r, j, 20, {width:256, height:128}], momozono:[6E3, 
  35E5, r, j, 0, {width:256, height:128}], hyuga:[6E3, 3E6, r, j, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, r, j, 20, {radius:130}], aida:[8E3, 4E6, r, j, 0, {width:370, heightBottom:5, heightTop:60}], erika:[30, 500, r, r, 1, {width:24, height:48}], hino:[20, 500, r, r, 1, {width:24, height:48}], hoshizora_y:[100, 2E4, r, j, 30, {width:128, height:64}], hoshizora_t:[100, 2E4, r, j, 30, {width:128, height:64}], yotsuba:[300, 1E5, r, j, 30, {width:64, height:64}], yotsubaLeaf:[100, 3E4, r, 
  r, 10, {width:32, height:32}], midorikawa:[5, 1E3, r, r, 1, {width:32, height:32}], aoki:[5, 1200, r, r, 1, {width:32, height:32}]};
  gls2.ha.pa = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ha.za = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ha.la = tm.createClass({superClass:gls2.ha, cg:l, dg:l, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.cg = b("tex_tank1", 64, 64);
    this.dg = b("tex_tank1", 64, 64);
    this.dd = this.dd || 0;
    this.rc = this.rc || 0
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    for(a = this.dd;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.rc;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.cg.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.dg.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.cg.draw(a);
    this.dg.draw(a)
  }, Ea:function() {
    gls2.ra.uk(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.dh = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.ea = b("tex2", 256, 128).setFrameIndex(7)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Pb = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.ea = b("tex1", 64, 64).setFrameIndex(23)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Db = tm.createClass({superClass:gls2.ha, ea:l, hg:l, init:function(a, d) {
    this.superInit(a, d, "kasugano");
    this.ea = b("tex1", 64, 64).setFrameIndex(23);
    this.qc = gls2.Ua(80, 1, 0.8);
    this.hg = tm.geom.Vector2()
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && this.qc.clone().setPosition(this.x, this.y).addChildTo(this.ca);
    this.rotation = tm.geom.Vector2.sub(this.position, this.hg).toAngle() * gls2.ma.RAD_TO_DEG - 90;
    this.hg.set(this.x, this.y)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Lc = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Bc = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.ea = b("tex1", 256, 128).setFrameIndex(1)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.sc()
  }});
  gls2.ha.Sd = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "aono");
    this.ea = b("tex1", 256, 128);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 128;
    this.setScale(1.2);
    this.Eb = gls2.Ua(70, 1, 0.97)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Eb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca), this.Eb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.sc()
  }});
  gls2.ha.wd = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "yumehara");
    this.ea = b("tex1", 256, 256);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 256;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 256
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.sc()
  }});
  gls2.ha.Na = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Fe = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "hanasaki");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Ra:A(), Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Df = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "myodoin");
    this.ea = b("tex1", 128, 128).setFrameIndex(12)
  }, Ra:A(), Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.lc = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.vf = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "minazuki");
    this.ea = b("tex1", 128, 256);
    this.ea.srcRect.x = 0;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 128;
    this.ea.srcRect.height = 256;
    this.setScale(1.2)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ha.Ka = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hino");
    this.ea = b("tex_stage3", 64, 32).setFrameIndex(0)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.qa = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "midorikawa");
    this.ea = b("tex_stage3", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.ub = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "aoki");
    this.ea = b("tex_stage3", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Kd:function() {
    480 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.Md = this.y
  }});
  gls2.ha.md = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_y");
    this.ea = b("tex_stage3", 256, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Qa === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Qa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.sc()
  }, Kd:function() {
    480 < this.x && (this.velocityX *= -1, this.ea.scaleX = -1)
  }});
  gls2.ha.ld = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hoshizora_t");
    this.ea = b("tex_stage3", 64, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a);
    if(this.Qa === r && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Qa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.sc()
  }, Kd:function() {
    240 < this.x && (this.velocityX *= -1)
  }});
  gls2.ha.rf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "yotsuba");
    this.ea = b("tex_stage3", 128, 128).setFrameIndex(1);
    this.boundingWidth = 128;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.qg(this.x, this.y, this.ca);
    this.sc();
    this.ca.kd || gls2.Qi(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove();
    for(var a = 0;4 > a;a++) {
      this.Jc[a] && this.Jc[a].Ea()
    }
    delete this.Jc
  }, Kd:function() {
    this.Jc = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Jc[a] = this.te.Cg({aa:gls2.ha.sf, ba:gls2.da.sf, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Jc[a].dir = b;
      this.Jc[a].ng = this;
      this.Jc[a].Uk = a;
      this.Jc[a].distance = 64
    }
    gls2.ha.prototype.Kd.call(this);
    return this
  }});
  gls2.ha.sf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "yotsubaLeaf");
    this.ea = b("yotsubaLeaf", 64, 64).setFrameIndex(0);
    this.boundingWidth = 64;
    this.boundingHeightTop = this.boundingHeightBottom = 0
  }, update:function(a) {
    gls2.ha.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    this.ng.Jc[this.Uk] = l;
    this.remove()
  }});
  gls2.ha.Rd = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "erika");
    this.ea = b("tex3", 64, 128);
    this.ea.setFrameIndex(8)
  }, Ra:A(), draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    gls2.ra.Ib(this.x, this.y, this.ca);
    gls2.Gi(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ha.Bf = tm.createClass({superClass:gls2.ha, ea:l, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.ea = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Ea:function() {
    this.sc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Mf = tm.createClass({superClass:gls2.sd, ea:l, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.ea = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Ea:function() {
    this.Ne()
  }});
  gls2.ha.If = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "mishou");
    this.ea = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Eb = gls2.Ua(80, 1, 0.9);
    this.qc = gls2.Ua(256, 1, 0.9)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Eb.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.Eb.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.qc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Ea:function() {
    this.sc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Jj = tm.createClass({superClass:gls2.sd, init:function(a, d) {
    this.superInit(a, d, "hyuga");
    this.ea = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Ea:function() {
    this.Ne()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Wf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "higashi");
    this.ea = b("tex_stage3", 256, 128).setFrameIndex(2)
  }, Ra:A(), Ea:function() {
    this.sc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.rj = tm.createClass({superClass:gls2.sd, init:function(a, d) {
    this.superInit(a, d, "momozono");
    this.ea = b("tex_stage3", 256, 128).setFrameIndex(4);
    this.ea.setScale(2)
  }, Ra:A(), Ea:function() {
    this.Ne()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.Sf = tm.createClass({superClass:gls2.ha, init:function(a, d) {
    this.superInit(a, d, "hishikawa");
    this.ea = b("tex2", 256, 256).setFrameIndex(2);
    this.ea.setScale(2);
    this.Eb = gls2.Ua(60, 1, 0.95);
    this.qc = gls2.Ua(500, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Eb.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Eb.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.qc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Ea:function() {
    this.sc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ha.uj = tm.createClass({superClass:gls2.sd, init:function(a, d) {
    this.superInit(a, d, "aida");
    this.ea = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Eb = gls2.Ua(60, 1, 0.95);
    this.qc = gls2.Ua(500, 1, 0.8)
  }, update:function(a) {
    gls2.ha.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Eb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Eb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Eb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Eb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.qc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Ra:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.kb() : 5 === a.app.frame % 30 && this.ea.jb()
    })
  }, Ea:function() {
    this.Ne()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, Vg:l, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.Vg = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, kb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Vg + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = h
  }, jb:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Vg;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = h
  }})
})();
(function() {
  gls2.da = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      gls2.da.nf(this)
    })
  }});
  gls2.da.Ba = function(a, b) {
    var h = gls2.ia[b].Re();
    a.on("enterframe", h);
    a.on("completeattack", function() {
      h.stop = j
    })
  };
  gls2.da.nf = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, h = a.length;b < h;b++) {
        a[b] && a[b].vg && (a[b].stop = j)
      }
    }
  };
  gls2.da.pa = tm.createClass({superClass:gls2.da, pattern:l, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.tl = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    var b = this.pattern, h = this.tl;
    a.on("launch", function() {
      var a = gls2.ya.randf(640 * (h - 0.1), 640 * (h + 0.1));
      this.tweener.clear().wait(gls2.ya.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.da.Ba(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.da.Ac = gls2.da.pa("basic0-0", 0.2);
  gls2.da.mb = gls2.da.pa("basic0-0", 0.4);
  gls2.da.vd = gls2.da.pa("basic0-0", 0.6);
  gls2.da.lb = gls2.da.pa("basic1-2", 0.2);
  gls2.da.zc = gls2.da.pa("basic1-2", 0.4);
  gls2.da.ud = gls2.da.pa("basic1-2", 0.6);
  gls2.da.za = tm.createClass({superClass:gls2.da, Cb:l, init:function(a) {
    this.superInit();
    this.Cb = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Cb = this.Cb;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      this.speed = 6;
      gls2.da.Ba(this, this.Cb);
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Qa && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.hc() && this.Qa && this.remove();
        if(22500 > gls2.Hc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Hb = r
        }
      })
    }.bind(a))
  }});
  gls2.da.nb = gls2.da.za("basic1-0");
  var b = tm.createClass({superClass:gls2.da, init:function(a, b, h) {
    this.superInit();
    this.Qk = a;
    this.Pk = b;
    this.zd = h
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = this.Qk;
    a.dd = this.Pk;
    this.zd && (a.zd = [].concat(this.zd));
    a.rc = 0;
    a.on("enter", function() {
      gls2.da.Ba(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.dd) * this.speed;
      this.y += Math.sin(this.dd) * this.speed;
      this.Qa && !this.hc() && this.remove();
      for(this.rc = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);0 > this.rc;) {
        this.rc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.rc;) {
        this.rc -= 2 * Math.PI
      }
      this.Hb = this.y < this.fa.y && 4E4 < gls2.Hc(this, this.fa);
      if(this.zd) {
        for(var a = 0;a < this.zd.length;a++) {
          var b = this.zd[a];
          b.frame === this.frame && this.tweener.to({dd:b.dir !== i ? b.dir : this.dd, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.da.nc = b(1, 0.25 * Math.PI);
  gls2.da.Cl = b(1, -1.75 * Math.PI);
  gls2.da.Ud = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.da.ua = b(1.6, 0.5 * Math.PI);
  gls2.da.oc = b(1.6, -0.5 * Math.PI);
  gls2.da.Ei = tm.createClass({superClass:gls2.da, Ma:l, init:function(a) {
    this.superInit();
    this.Ma = a
  }, setup:function(a) {
    gls2.da.Ba(a, this.Ma);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.da.eh = gls2.da.Ei("bukky-4-0");
  b = tm.createClass({superClass:gls2.da, Ma:l, Ih:r, init:function(a, b) {
    this.superInit();
    this.Ma = a;
    this.Ih = !!b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Ma = this.Ma;
    a.on("enter", function() {
      gls2.da.Ba(this, this.Ma)
    });
    a.on("enterframe", function() {
      this.Qa && !this.hc() && this.remove()
    });
    if(!this.Ih) {
      a.on("enterframe", function() {
        this.Hb = this.y < this.fa.y && 4E4 < gls2.Hc(this, this.fa)
      })
    }
  }});
  gls2.da.Nb = b("basic3-0", r);
  gls2.da.Ob = b("basic3-1", r);
  gls2.da.mc = b("cannon2-0", j);
  gls2.da.uf = b("cannon2-3", j);
  gls2.da.xe = b("cannon3-0", j);
  gls2.da.wf = b("cannon5-0", j);
  b = tm.createClass({superClass:gls2.da, velocityY:0, Ma:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Ma = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ga = [this.Ma];
    a.oi = r;
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.da.Ba(this, this.ga[0]);
      this.oi = j
    }.bind(a));
    a.on("enterframe", function() {
      this.oi && (this.y += this.velocityY, 384 < this.y && gls2.da.nf(this), this.Qa && !this.hc() && this.remove(), this.Hb = this.y < this.fa.y)
    })
  }});
  gls2.da.Zc = b(0.5, "kurokawa-1");
  gls2.da.vj = b(0.5, "kurokawa-4");
  gls2.da.ad = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.Ba(this, "yuri-4");
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
      gls2.da.Ba(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.Db = tm.createClass({superClass:gls2.da, gi:0, direction:1, delay:0, init:function(a, b, h) {
    this.superInit();
    this.gi = a;
    this.direction = b;
    this.delay = h
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    tm.app.Tweener(a).wait(this.delay).call(function() {
      gls2.da.Ba(this, "basic1-3")
    }.bind(a));
    var b = 1 == this.direction;
    switch(this.gi) {
      case 0:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * (b ? 0.8 : 1 - 0.8)}, 2E3, "easeOutQuart");
        tm.app.Tweener(a).wait(this.delay).to({y:832}, 2500, "easeInQuad");
        break;
      case 1:
        tm.app.Tweener(a).wait(this.delay).to({x:480 * (b ? 0.3 : 0.7)}, 2E3, "easeOutQuad");
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
      gls2.da.Ba(this, this.ga[0]);
      gls2.ra.Ek(this.x, this.y, this.ca)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Qa && !this.hc() && this.remove();
      this.Hb = this.y < this.fa.y
    })
  }});
  gls2.da.Ka = a(0.5, "akane");
  gls2.da.qa = tm.createClass({superClass:gls2.da, Cb:l, init:function(a, b) {
    this.superInit();
    this.Cb = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Cb = this.Cb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.da.Ba(this, this.Cb);
      var a = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Qa && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.ma.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * a - 90;
        !this.hc() && this.Qa && this.remove();
        if(22500 > gls2.Hc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Hb = r
        }
      })
    }.bind(a))
  }});
  gls2.da.qb = gls2.da.qa(3, 1);
  gls2.da.rb = gls2.da.qa(6, 1);
  gls2.da.sb = gls2.da.qa(12, 1);
  gls2.da.ub = tm.createClass({superClass:gls2.da, Cb:l, init:function(a) {
    this.superInit();
    this.Cb = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Cb = this.Cb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ya.rand(0, 1E3)).call(function() {
      gls2.da.Ba(this, this.Cb);
      this.ic = 0;
      this.on("enterframe", function() {
        this.x += this.speed;
        this.y = this.Md + 16 * Math.sin(this.ic);
        this.ic += 0.05
      })
    }.bind(a))
  }});
  gls2.da.Xb = gls2.da.ub(1);
  gls2.da.Vl = gls2.da.ub(2);
  gls2.da.md = tm.createClass({superClass:gls2.da, velocityX:0, Ma:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ma = "miyuki_y"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Ba(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Qa && !this.hc() && this.remove();
      this.Hb = this.y < this.fa.y
    })
  }});
  gls2.da.md = gls2.da.md(1);
  gls2.da.ld = tm.createClass({superClass:gls2.da, velocityX:0, Ma:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.Ma = "miyuki_t"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ga = [this.Ma];
    a.li = 0;
    a.tweener.clear().call(function() {
      gls2.da.Ba(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      0 == this.li ? (this.y += 0.5, 256 < this.y && this.li++) : this.x += this.velocityX;
      this.Qa && !this.hc() && this.remove()
    })
  }});
  gls2.da.ld = gls2.da.ld(0.5);
  a = tm.createClass({superClass:gls2.da, velocityX:0, Ma:l, init:function() {
    this.superInit();
    this.Ma = "alice"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = 0.5;
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Ba(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Qa && !this.hc() && this.remove();
      this.Hb = this.y < this.fa.y
    })
  }});
  gls2.da.rf = a();
  a = tm.createClass({superClass:gls2.da, Ma:l, init:function() {
    this.superInit();
    this.Ma = "aliceLeaf"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [this.Ma];
    a.tweener.clear().call(function() {
      gls2.da.Ba(this, this.ga[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.ng.x, b = this.ng.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      this.ea.setFrameIndex(~~(11.25 * (~~(180 * Math.atan2(b - this.y, a - this.x) / 3.14159) / 360)), 64, 64);
      this.Qa && !this.hc() && this.remove();
      this.Hb = this.y < this.fa.y
    })
  }});
  gls2.da.sf = a();
  gls2.da.nh = b(0.3, "komachi-1");
  gls2.da.Ce = b(0.5, "komachi-2");
  gls2.da.Ef = b(0.5, "komachi-4");
  gls2.da.Sd = tm.createClass({superClass:gls2.da, qi:0, init:function(a) {
    this.superInit();
    this.qi = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    tm.app.Tweener(a).to({x:480 * this.qi}, 2800, "easeOutQuad").call(function() {
      gls2.da.Ba(this, "mktn-5")
    }.bind(a));
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.da.Qf = b(0.1, "nozomi-4");
  gls2.da.Rf = b(0.3, "nozomi-5");
  gls2.da.Rd = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.Ba(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Hb = this.Qa
    })
  }});
  gls2.da.Rd = gls2.da.Rd();
  b = tm.createClass({superClass:gls2.da, ga:l, df:0, init:function(a, b) {
    this.superInit();
    this.ga = a;
    this.df = b || 1500
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.df = this.df;
    a.cb = r;
    a.Ya = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.cb === r || 0 >= this.sa) && this.df < this.frame && this.Ya === r) {
        this.Ya = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Bf = b(["honoka-1"]);
  gls2.da.Mf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Ya = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.wj = gls2.da.Mf();
  gls2.da.Nf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Nf = gls2.da.Nf();
  gls2.da.Of = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.sa || gls2.da.Ba(this, "nagisa-3-1")
    })
  }});
  gls2.da.Of = gls2.da.Of();
  gls2.da.If = b(["mai-1", "mai-2"]);
  gls2.da.Tf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Ya = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Tf = gls2.da.Tf();
  gls2.da.Uf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Uf = gls2.da.Uf();
  gls2.da.Vf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Vf = gls2.da.Vf();
  a = tm.createClass({superClass:gls2.da, ga:l, init:function(a) {
    this.superInit();
    this.ga = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Ya = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.cb === r || 0 >= this.sa) && 1500 < this.frame && this.Ya === r) {
        this.Ya = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Wf = a(["setsuna-1"]);
  gls2.da.Ff = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Ya = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
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
    a.cb = r;
    a.Ya = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Gf = gls2.da.Gf();
  gls2.da.Hf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Ya = r;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Hf = gls2.da.Hf();
  gls2.da.Sf = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.da.Jf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.cb = r;
    a.Ya = r;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.cb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.ya.randf(-48, 48);
        this.tweener.move(Math.clamp(this.fa.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Jf = gls2.da.Jf();
  gls2.da.Kf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.4 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Kf = gls2.da.Kf();
  gls2.da.Lf = tm.createClass({superClass:gls2.da, ga:l, init:function() {
    this.superInit();
    this.ga = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ga = [].concat(this.ga);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ya.random() * Math.PI, d = gls2.ya.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.ga.shift();
        gls2.da.Ba(this, a);
        this.ga.push(a)
      }
    })
  }});
  gls2.da.Lf = gls2.da.Lf()
})();
(function() {
  var b = gls2.ha, a = gls2.da;
  gls2.hh = {"heri1-left":[{aa:b.za, ba:a.Ac, x:48, y:-100}, {aa:b.za, ba:a.mb, x:96, y:-100}, {aa:b.za, ba:a.Ac, x:144, y:-100}, {aa:b.za, ba:a.mb, x:192, y:-100}, {aa:b.za, ba:a.Ac, x:240, y:-100}], "heri1-center":[{aa:b.za, ba:a.Ac, x:144, y:-100}, {aa:b.za, ba:a.mb, x:192, y:-100}, {aa:b.za, ba:a.Ac, x:240, y:-100}, {aa:b.za, ba:a.mb, x:288, y:-100}, {aa:b.za, ba:a.Ac, x:336, y:-100}], "heri1-right":[{aa:b.za, ba:a.Ac, x:240, y:-100}, {aa:b.za, ba:a.mb, x:288, y:-100}, {aa:b.za, ba:a.Ac, x:336, 
  y:-100}, {aa:b.za, ba:a.mb, x:384, y:-100}, {aa:b.za, ba:a.Ac, x:432, y:-100}], "heri1-left2":[{aa:b.za, ba:a.mb, x:48, y:-100}, {aa:b.za, ba:a.vd, x:96, y:-100}, {aa:b.za, ba:a.mb, x:144, y:-100}, {aa:b.za, ba:a.vd, x:192, y:-100}, {aa:b.za, ba:a.mb, x:240, y:-100}], "heri1-center2":[{aa:b.za, ba:a.mb, x:144, y:-100}, {aa:b.za, ba:a.vd, x:192, y:-100}, {aa:b.za, ba:a.mb, x:240, y:-100}, {aa:b.za, ba:a.vd, x:288, y:-100}, {aa:b.za, ba:a.mb, x:336, y:-100}], "heri1-right2":[{aa:b.za, ba:a.mb, x:240, 
  y:-100}, {aa:b.za, ba:a.vd, x:288, y:-100}, {aa:b.za, ba:a.mb, x:336, y:-100}, {aa:b.za, ba:a.vd, x:384, y:-100}, {aa:b.za, ba:a.mb, x:432, y:-100}], "heri2-left":[{aa:b.pa, ba:a.nb, x:48, y:-100}, {aa:b.pa, ba:a.nb, x:96, y:-100}, {aa:b.pa, ba:a.nb, x:144, y:-100}, {aa:b.pa, ba:a.nb, x:192, y:-100}, {aa:b.pa, ba:a.nb, x:240, y:-100}], "heri2-center":[{aa:b.pa, ba:a.nb, x:144, y:-100}, {aa:b.pa, ba:a.nb, x:192, y:-100}, {aa:b.pa, ba:a.nb, x:240, y:-100}, {aa:b.pa, ba:a.nb, x:288, y:-100}, {aa:b.pa, 
  ba:a.nb, x:336, y:-100}], "heri2-right":[{aa:b.pa, ba:a.nb, x:240, y:-100}, {aa:b.pa, ba:a.nb, x:288, y:-100}, {aa:b.pa, ba:a.nb, x:336, y:-100}, {aa:b.pa, ba:a.nb, x:384, y:-100}, {aa:b.pa, ba:a.nb, x:432, y:-100}], "heri1-4-left":[{aa:b.pa, ba:a.lb, x:48, y:-100}, {aa:b.pa, ba:a.lb, x:96, y:-100}, {aa:b.pa, ba:a.lb, x:144, y:-100}, {aa:b.pa, ba:a.lb, x:192, y:-100}, {aa:b.pa, ba:a.lb, x:240, y:-100}], "heri1-4-center":[{aa:b.pa, ba:a.lb, x:144, y:-100}, {aa:b.pa, ba:a.lb, x:192, y:-100}, {aa:b.pa, 
  ba:a.lb, x:240, y:-100}, {aa:b.pa, ba:a.lb, x:288, y:-100}, {aa:b.pa, ba:a.lb, x:336, y:-100}], "heri1-4-right":[{aa:b.pa, ba:a.lb, x:240, y:-100}, {aa:b.pa, ba:a.lb, x:288, y:-100}, {aa:b.pa, ba:a.lb, x:336, y:-100}, {aa:b.pa, ba:a.lb, x:384, y:-100}, {aa:b.pa, ba:a.lb, x:432, y:-100}], "heri1-4-left2":[{aa:b.pa, ba:a.zc, x:48, y:-100}, {aa:b.pa, ba:a.ud, x:96, y:-100}, {aa:b.pa, ba:a.zc, x:144, y:-100}, {aa:b.pa, ba:a.ud, x:192, y:-100}, {aa:b.pa, ba:a.zc, x:240, y:-100}], "heri1-4-center2":[{aa:b.pa, 
  ba:a.zc, x:144, y:-100}, {aa:b.pa, ba:a.ud, x:192, y:-100}, {aa:b.pa, ba:a.zc, x:240, y:-100}, {aa:b.pa, ba:a.ud, x:288, y:-100}, {aa:b.pa, ba:a.zc, x:336, y:-100}], "heri1-4-right2":[{aa:b.pa, ba:a.zc, x:240, y:-100}, {aa:b.pa, ba:a.ud, x:288, y:-100}, {aa:b.pa, ba:a.zc, x:336, y:-100}, {aa:b.pa, ba:a.ud, x:384, y:-100}, {aa:b.pa, ba:a.zc, x:432, y:-100}], "tankRD-left":[{aa:b.la, ba:a.nc, x:78, y:-50}, {aa:b.la, ba:a.nc, x:28, y:-100}, {aa:b.la, ba:a.nc, x:-22, y:-150}, {aa:b.la, ba:a.nc, x:-72, 
  y:-200}, {aa:b.la, ba:a.nc, x:-122, y:-250}], "tankRD-center":[{aa:b.la, ba:a.nc, x:222, y:-50}, {aa:b.la, ba:a.nc, x:172, y:-100}, {aa:b.la, ba:a.nc, x:122, y:-150}, {aa:b.la, ba:a.nc, x:72, y:-200}, {aa:b.la, ba:a.nc, x:22, y:-250}], "tankL-top":[{aa:b.la, ba:a.Ud, x:550, y:64}, {aa:b.la, ba:a.Ud, x:620, y:64}, {aa:b.la, ba:a.Ud, x:690, y:64}, {aa:b.la, ba:a.Ud, x:760, y:64}, {aa:b.la, ba:a.Ud, x:830, y:64}], "tank5-left":[{aa:b.la, ba:a.ua, x:48, y:-70}, {aa:b.la, ba:a.ua, x:48, y:-140}, {aa:b.la, 
  ba:a.ua, x:48, y:-210}, {aa:b.la, ba:a.ua, x:48, y:-280}, {aa:b.la, ba:a.ua, x:48, y:-350}], "tank5-center":[{aa:b.la, ba:a.ua, x:240, y:-70}, {aa:b.la, ba:a.ua, x:240, y:-140}, {aa:b.la, ba:a.ua, x:240, y:-210}, {aa:b.la, ba:a.ua, x:240, y:-280}, {aa:b.la, ba:a.ua, x:240, y:-350}], "tank15-top":[{aa:b.la, ba:a.ua, x:48, y:-70}, {aa:b.la, ba:a.ua, x:48, y:-140}, {aa:b.la, ba:a.ua, x:48, y:-210}, {aa:b.la, ba:a.ua, x:48, y:-280}, {aa:b.la, ba:a.ua, x:48, y:-350}, {aa:b.la, ba:a.ua, x:240, y:-70}, 
  {aa:b.la, ba:a.ua, x:240, y:-140}, {aa:b.la, ba:a.ua, x:240, y:-210}, {aa:b.la, ba:a.ua, x:240, y:-280}, {aa:b.la, ba:a.ua, x:240, y:-350}, {aa:b.la, ba:a.ua, x:432, y:-70}, {aa:b.la, ba:a.ua, x:432, y:-140}, {aa:b.la, ba:a.ua, x:432, y:-210}, {aa:b.la, ba:a.ua, x:432, y:-280}, {aa:b.la, ba:a.ua, x:432, y:-350}], "tank25-top":[{aa:b.la, ba:a.ua, x:48, y:-70}, {aa:b.la, ba:a.ua, x:48, y:-140}, {aa:b.la, ba:a.ua, x:48, y:-210}, {aa:b.la, ba:a.ua, x:48, y:-280}, {aa:b.la, ba:a.ua, x:48, y:-350}, {aa:b.la, 
  ba:a.ua, x:240, y:-70}, {aa:b.la, ba:a.ua, x:240, y:-140}, {aa:b.la, ba:a.ua, x:240, y:-210}, {aa:b.la, ba:a.ua, x:240, y:-280}, {aa:b.la, ba:a.ua, x:240, y:-350}, {aa:b.la, ba:a.ua, x:432, y:-70}, {aa:b.la, ba:a.ua, x:432, y:-140}, {aa:b.la, ba:a.ua, x:432, y:-210}, {aa:b.la, ba:a.ua, x:432, y:-280}, {aa:b.la, ba:a.ua, x:432, y:-350}, {aa:b.la, ba:a.oc, x:144, y:710}, {aa:b.la, ba:a.oc, x:144, y:780}, {aa:b.la, ba:a.oc, x:144, y:850}, {aa:b.la, ba:a.oc, x:144, y:920}, {aa:b.la, ba:a.oc, x:144, 
  y:990}, {aa:b.la, ba:a.oc, x:336, y:710}, {aa:b.la, ba:a.oc, x:336, y:780}, {aa:b.la, ba:a.oc, x:336, y:850}, {aa:b.la, ba:a.oc, x:336, y:920}, {aa:b.la, ba:a.oc, x:336, y:990}], "bukky-4-r":[{aa:b.dh, ba:a.eh, x:480, y:-50}], "bukky-4-l":[{aa:b.dh, ba:a.eh, x:0, y:-50}], "cannon-0":[{aa:b.Na, ba:a.Nb, x:48, y:-100}], "cannon-1":[{aa:b.Na, ba:a.Nb, x:96, y:-100}], "cannon-2":[{aa:b.Na, ba:a.Nb, x:144, y:-100}], "cannon-3":[{aa:b.Na, ba:a.Nb, x:192, y:-100}], "cannon-4":[{aa:b.Na, ba:a.Nb, x:240, 
  y:-100}], "cannon-5":[{aa:b.Na, ba:a.Nb, x:288, y:-100}], "cannon-6":[{aa:b.Na, ba:a.Nb, x:336, y:-100}], "cannon-7":[{aa:b.Na, ba:a.Nb, x:384, y:-100}], "cannon-8":[{aa:b.Na, ba:a.Nb, x:432, y:-100}], "cannon-R0":[{aa:b.Na, ba:a.Nb, x:550, y:128}], "cannon-R1":[{aa:b.Na, ba:a.Nb, x:550, y:192}], "cannon-R2":[{aa:b.Na, ba:a.Nb, x:550, y:256}], "yayoi-0":[{aa:b.Na, ba:a.Ob, x:48, y:-100}], "yayoi-1":[{aa:b.Na, ba:a.Ob, x:96, y:-100}], "yayoi-2":[{aa:b.Na, ba:a.Ob, x:144, y:-100}], "yayoi-3":[{aa:b.Na, 
  ba:a.Ob, x:192, y:-100}], "yayoi-4":[{aa:b.Na, ba:a.Ob, x:240, y:-100}], "yayoi-5":[{aa:b.Na, ba:a.Ob, x:288, y:-100}], "yayoi-6":[{aa:b.Na, ba:a.Ob, x:336, y:-100}], "yayoi-7":[{aa:b.Na, ba:a.Ob, x:384, y:-100}], "yayoi-8":[{aa:b.Na, ba:a.Ob, x:432, y:-100}], "yayoi-R0":[{aa:b.Na, ba:a.Ob, x:550, y:128}], "yayoi-R1":[{aa:b.Na, ba:a.Ob, x:550, y:192}], "yayoi-R2":[{aa:b.Na, ba:a.Ob, x:550, y:256}], "tsubomi-0":[{aa:b.Fe, ba:a.xe, x:96, y:-100}], "tsubomi-1":[{aa:b.Fe, ba:a.xe, x:240, y:-100}], 
  "tsubomi-2":[{aa:b.Fe, ba:a.xe, x:384, y:-100}], "tsubomi-R0":[{aa:b.Fe, ba:a.xe, x:580, y:128}], "itsuki-0":[{aa:b.Df, ba:a.wf, x:96, y:-100}], "itsuki-1":[{aa:b.Df, ba:a.wf, x:240, y:-100}], "itsuki-2":[{aa:b.Df, ba:a.wf, x:384, y:-100}], "makoto-0":[{aa:b.lc, ba:a.mc, x:48, y:-100}], "makoto-1":[{aa:b.lc, ba:a.mc, x:96, y:-100}], "makoto-2":[{aa:b.lc, ba:a.mc, x:144, y:-100}], "makoto-3":[{aa:b.lc, ba:a.mc, x:192, y:-100}], "makoto-4":[{aa:b.lc, ba:a.mc, x:240, y:-100}], "makoto-5":[{aa:b.lc, 
  ba:a.mc, x:288, y:-100}], "makoto-6":[{aa:b.lc, ba:a.mc, x:336, y:-100}], "makoto-7":[{aa:b.lc, ba:a.mc, x:384, y:-100}], "makoto-8":[{aa:b.lc, ba:a.mc, x:432, y:-100}], "makoto-R0":[{aa:b.lc, ba:a.mc, x:580, y:128}], "karen-3-2":[{aa:b.vf, ba:a.uf, x:96, y:-100}], "karen-3-5":[{aa:b.vf, ba:a.uf, x:240, y:-100}], "karen-3-8":[{aa:b.vf, ba:a.uf, x:384, y:-100}], "fighter-m-0":[{aa:b.Lc, ba:a.Zc, x:96, y:-192}], "fighter-m-1":[{aa:b.Lc, ba:a.Zc, x:144, y:-192}], "fighter-m-2":[{aa:b.Lc, ba:a.Zc, 
  x:192, y:-192}], "fighter-m-3":[{aa:b.Lc, ba:a.Zc, x:240, y:-192}], "fighter-m-4":[{aa:b.Lc, ba:a.Zc, x:288, y:-192}], "fighter-m-5":[{aa:b.Lc, ba:a.Zc, x:336, y:-192}], "fighter-m-6":[{aa:b.Lc, ba:a.Zc, x:384, y:-192}], "fighter-m4-0":[{aa:b.Lc, ba:a.vj, x:96, y:-192}], "tsukikage-r":[{aa:b.Pb, ba:a.ad(700), x:624, y:256}, {aa:b.Pb, ba:a.ad(600), x:720, y:256}, {aa:b.Pb, ba:a.ad(500), x:576, y:320}, {aa:b.Pb, ba:a.ad(400), x:672, y:320}, {aa:b.Pb, ba:a.ad(300), x:768, y:320}, {aa:b.Pb, ba:a.ad(200), 
  x:624, y:384}, {aa:b.Pb, ba:a.ad(100), x:720, y:384}], "tsukikage-l":[{aa:b.Pb, ba:a.Vd(700), x:-144, y:384}, {aa:b.Pb, ba:a.Vd(600), x:-240, y:384}, {aa:b.Pb, ba:a.Vd(500), x:-96, y:320}, {aa:b.Pb, ba:a.Vd(400), x:-192, y:320}, {aa:b.Pb, ba:a.Vd(200), x:-144, y:256}], "urara5-0":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Db, ba:a.Db(0, 1, 200 * f), x:-144, y:128})
    }
    return d
  }(), "urara5-1":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Db, ba:a.Db(0, -1, 200 * f), x:624, y:128})
    }
    return d
  }(), "urara5-2":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Db, ba:a.Db(1, 1, 200 * f), x:-144, y:512})
    }
    return d
  }(), "urara5-3":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Db, ba:a.Db(1, -1, 200 * f), x:624, y:512})
    }
    return d
  }(), "urara5-4":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Db, ba:a.Db(2, 1, 200 * f), x:-144, y:512})
    }
    return d
  }(), "urara5-5":function() {
    for(var d = [], f = 0;20 > f;f++) {
      d.push({aa:b.Db, ba:a.Db(2, -1, 200 * f), x:624, y:512})
    }
    return d
  }(), "komachi-0":[{aa:b.Bc, ba:a.nh, x:144, y:-192}], "komachi-1":[{aa:b.Bc, ba:a.nh, x:336, y:-192}], "komachi2-0":[{aa:b.Bc, ba:a.Ce, x:144, y:-192}], "komachi2-1":[{aa:b.Bc, ba:a.Ce, x:336, y:-192}], "komachi3-0":[{aa:b.Bc, ba:a.Ce, x:144, y:-192}], "komachi3-1":[{aa:b.Bc, ba:a.Ce, x:336, y:-192}], "komachi4-0":[{aa:b.Bc, ba:a.Ef, x:144, y:-192}], "komachi4-1":[{aa:b.Bc, ba:a.Ef, x:336, y:-192}], "komachi4-2":[{aa:b.Bc, ba:a.Ef, x:240, y:-192}], "nozomi4-0":[{aa:b.wd, ba:a.Qf, x:144, y:-192}], 
  "nozomi4-1":[{aa:b.wd, ba:a.Qf, x:240, y:-192}], "nozomi4-2":[{aa:b.wd, ba:a.Qf, x:336, y:-192}], "nozomi5-0":[{aa:b.wd, ba:a.Rf, x:144, y:-320}], "nozomi5-1":[{aa:b.wd, ba:a.Rf, x:240, y:-192}], "nozomi5-2":[{aa:b.wd, ba:a.Rf, x:336, y:-320}], "mktn5-0":[{aa:b.Sd, ba:a.Sd(0.6), x:624, y:128}], "mktn5-1":[{aa:b.Sd, ba:a.Sd(0.4), x:-144, y:320}], "akane-center":[{aa:b.Ka, ba:a.Ka, x:144, y:130}, {aa:b.Ka, ba:a.Ka, x:192, y:80}, {aa:b.Ka, ba:a.Ka, x:240, y:140}, {aa:b.Ka, ba:a.Ka, x:288, y:80}, {aa:b.Ka, 
  ba:a.Ka, x:336, y:130}], "akane-right":[{aa:b.Ka, ba:a.Ka, x:384, y:160}, {aa:b.Ka, ba:a.Ka, x:288, y:120}, {aa:b.Ka, ba:a.Ka, x:288, y:80}, {aa:b.Ka, ba:a.Ka, x:384, y:40}], "akane-left":[{aa:b.Ka, ba:a.Ka, x:96, y:160}, {aa:b.Ka, ba:a.Ka, x:144, y:120}, {aa:b.Ka, ba:a.Ka, x:144, y:80}, {aa:b.Ka, ba:a.Ka, x:96, y:40}], "nao1-left":[{aa:b.qa, ba:a.qb, x:48, y:-100}, {aa:b.qa, ba:a.qb, x:96, y:-100}, {aa:b.qa, ba:a.qb, x:144, y:-100}, {aa:b.qa, ba:a.qb, x:192, y:-100}, {aa:b.qa, ba:a.qb, x:240, 
  y:-100}], "nao1-right":[{aa:b.qa, ba:a.qb, x:240, y:-100}, {aa:b.qa, ba:a.qb, x:288, y:-100}, {aa:b.qa, ba:a.qb, x:336, y:-100}, {aa:b.qa, ba:a.qb, x:384, y:-100}, {aa:b.qa, ba:a.qb, x:432, y:-100}], "nao1-center":[{aa:b.qa, ba:a.qb, x:144, y:-100}, {aa:b.qa, ba:a.qb, x:192, y:-100}, {aa:b.qa, ba:a.qb, x:240, y:-100}, {aa:b.qa, ba:a.qb, x:288, y:-100}, {aa:b.qa, ba:a.qb, x:336, y:-100}], "nao2-left":[{aa:b.qa, ba:a.rb, x:48, y:-100}, {aa:b.qa, ba:a.rb, x:96, y:-100}, {aa:b.qa, ba:a.rb, x:144, y:-100}, 
  {aa:b.qa, ba:a.rb, x:192, y:-100}, {aa:b.qa, ba:a.rb, x:240, y:-100}], "nao2-right":[{aa:b.qa, ba:a.rb, x:240, y:-100}, {aa:b.qa, ba:a.rb, x:288, y:-100}, {aa:b.qa, ba:a.rb, x:336, y:-100}, {aa:b.qa, ba:a.rb, x:384, y:-100}, {aa:b.qa, ba:a.rb, x:432, y:-100}], "nao2-center":[{aa:b.qa, ba:a.rb, x:144, y:-100}, {aa:b.qa, ba:a.rb, x:192, y:-100}, {aa:b.qa, ba:a.rb, x:240, y:-100}, {aa:b.qa, ba:a.rb, x:288, y:-100}, {aa:b.qa, ba:a.rb, x:336, y:-100}], "nao3-left":[{aa:b.qa, ba:a.sb, x:48, y:-100}, 
  {aa:b.qa, ba:a.sb, x:96, y:-100}, {aa:b.qa, ba:a.sb, x:144, y:-100}, {aa:b.qa, ba:a.sb, x:192, y:-100}, {aa:b.qa, ba:a.sb, x:240, y:-100}], "nao3-right":[{aa:b.qa, ba:a.sb, x:240, y:-100}, {aa:b.qa, ba:a.sb, x:288, y:-100}, {aa:b.qa, ba:a.sb, x:336, y:-100}, {aa:b.qa, ba:a.sb, x:384, y:-100}, {aa:b.qa, ba:a.sb, x:432, y:-100}], "nao3-center":[{aa:b.qa, ba:a.sb, x:144, y:-100}, {aa:b.qa, ba:a.sb, x:192, y:-100}, {aa:b.qa, ba:a.sb, x:240, y:-100}, {aa:b.qa, ba:a.sb, x:288, y:-100}, {aa:b.qa, ba:a.sb, 
  x:336, y:-100}], "reika1-left":[{aa:b.ub, ba:a.Xb, x:-48, y:64}, {aa:b.ub, ba:a.Xb, x:-72, y:128}, {aa:b.ub, ba:a.Xb, x:-96, y:64}, {aa:b.ub, ba:a.Xb, x:-120, y:128}, {aa:b.ub, ba:a.Xb, x:-144, y:64}, {aa:b.ub, ba:a.Xb, x:-168, y:128}], "reika1-right":[{aa:b.ub, ba:a.Xb, x:528, y:64}, {aa:b.ub, ba:a.Xb, x:552, y:128}, {aa:b.ub, ba:a.Xb, x:576, y:64}, {aa:b.ub, ba:a.Xb, x:600, y:128}, {aa:b.ub, ba:a.Xb, x:624, y:64}, {aa:b.ub, ba:a.Xb, x:648, y:128}], miyuki_y1:[{aa:b.md, ba:a.md, x:-256, y:140}], 
  miyuki_y2:[{aa:b.md, ba:a.md, x:608, y:60}], miyuki_t1:[{aa:b.ld, ba:a.ld, x:336, y:-128}], miyuki_t2:[{aa:b.ld, ba:a.ld, x:144, y:-128}], alice:[{aa:b.rf, ba:a.rf, x:240, y:-64}], erika:[{aa:b.Rd, ba:a.Rd, x:240, y:-100}], yukishiro:[{aa:b.Bf, ba:a.Bf, x:240, y:-100}], misumi:[{aa:b.Mf, ba:[a.wj, a.Nf, a.Of], x:240, y:-100, dc:j}], mai:[{aa:b.If, ba:a.If, x:780, y:128}], hyuga:[{aa:b.Jj, ba:[a.Tf, a.Uf, a.Vf], x:240, y:-100, dc:j}], higashi:[{aa:b.Wf, ba:a.Wf, x:780, y:128}], momozono:[{aa:b.rj, 
  ba:[a.Ff, a.Gf, a.Hf], x:240, y:-100, dc:j}], rikka:[{aa:b.Sf, ba:a.Sf, x:240, y:-100}], mana:[{aa:b.uj, ba:[a.Jf, a.Kf, a.Lf], x:240, y:-100, dc:j}]}
})();
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, h, k, m) {
    return c.action([c.fire(c.direction(b, "absolute"), f, h || u, k, m), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, h || u, k, m)])])
  }
  function d(a, b, c, d, h) {
    return function(k) {
      return f(a, b, c, k, d, h, i, i)
    }
  }
  function f(a, b, d, f, h, k, m, n) {
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
    return c.Ha(a, {frame:3, le:j})
  }
  function O(a) {
    return c.Ha(a, {frame:2, le:j})
  }
  function C(a) {
    return c.Ha(a, {visible:r})
  }
  function B(a) {
    return c.Ha(a, {frame:4, cc:j})
  }
  function J(a) {
    return c.Ha(a, {frame:3})
  }
  function u(a) {
    return c.Ha(a, {frame:1})
  }
  function t(a) {
    return c.Ha(a, {frame:2})
  }
  function E(a) {
    return c.Ha(a, {frame:0})
  }
  function D(a) {
    return c.Ha(a, {frame:3, cc:j})
  }
  function K(a) {
    return c.Ha(a, {frame:1, cc:j})
  }
  function z(a) {
    return c.Ha(a, {frame:2, cc:j})
  }
  function F(a) {
    return c.Ha(a, {frame:0, cc:j})
  }
  gls2.ia = {};
  var c = H.Ia;
  gls2.ia["basic0-0"] = new H.ka({top:c.action([m])});
  gls2.ia["basic0-1"] = new H.ka({top:c.action([b(w, -0.01, 8, d(3, -15, 15))])});
  gls2.ia["basic1-0"] = new H.ka({top:c.action([c.repeat(999, [k(40), m(n)])])});
  gls2.ia["basic1-1"] = new H.ka({top:c.action([c.repeat(999, [k(20), m(n)])])});
  gls2.ia["basic1-2"] = new H.ka({top:c.action([k("10+$rand*100"), f(3, -20, 20, n)])});
  gls2.ia["basic1-3"] = new H.ka({top:c.action([c.repeat(999, [k("20+$rand*80"), f(3, -20, 20, n)])])});
  gls2.ia["basic2-0"] = new H.ka({top:c.action([c.repeat(999, [k(50), m(n)])])});
  gls2.ia["basic3-0"] = new H.ka({top:c.action([c.wait(20), c.repeat(999, [k(100), b(n, 0.1, 3, h)])])});
  gls2.ia["basic3-1"] = new H.ka({top:c.action([c.wait(20), c.repeat(999, [k(40), b(n, 0.1, 3, h)])])});
  gls2.ia["bukky-4-0"] = new H.ka({top0:c.action([k(30), c.repeat(999, [c.fire(c.direction(-40), n, z), c.repeat(3, [c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(-80, "sequence"), n, z), k(5)]), k(70)])]), top1:c.action([k(20), c.fire(c.direction(180, "absolute"), p, K), c.repeat(999, [c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), 
  p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(-90, "sequence"), p, K), k(5)])])});
  gls2.ia["cannon2-0"] = new H.ka({top0:c.action([c.repeat(999, [k(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", p), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", p), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", p), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", p), k(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", n), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", n), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", n), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", n)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), s, B), c.fire(c.direction(" 90+$loop.index*10", "absolute"), s, B), c.fire(c.direction("180+$loop.index*10", "absolute"), s, B), c.fire(c.direction("270+$loop.index*10", "absolute"), s, B), c.fire(c.direction("  0-$loop.index*10", "absolute"), s, B), c.fire(c.direction(" 90-$loop.index*10", "absolute"), s, B), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), s, B), c.fire(c.direction("270-$loop.index*10", "absolute"), s, B), k(10)])]), top2:c.action([c.repeat(999, [k(43), f(30, 0, 348, n, E)])])});
  gls2.ia["cannon2-3"] = new H.ka({top0:c.action([c.repeat(999, [c.Da("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), C(c.va("ivs0", "$d")))]), k(10), c.fire(c.direction(39, "sequence"), c.speed(1), C(c.va("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.Da("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), C(c.va("ivs1", "$d")))]), k(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), C(c.va("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, E), c.Wa()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), p, function(a) {
    return c.Ha(a, {frame:7, cc:j})
  }), c.fire(c.direction("$1+5", "relative"), p, function(a) {
    return c.Ha(a, {frame:6, cc:j})
  }), c.Wa()])});
  gls2.ia["cannon3-0"] = new H.ka({top0:c.action([c.repeat(999, [k(80), b(p, 0.01, 5, d(5, -30, 30, E, c.offsetX(-60))), b(p, 0.01, 5, d(5, -30, 30, E)), b(p, 0.01, 5, d(5, -30, 30, E, c.offsetX(60)))])])});
  gls2.ia["cannon4-0"] = new H.ka({top0:c.action([k(20), c.repeat(999, [c.fire(p, z), c.repeat(8, [k(10), c.Da("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), p, z), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), p, z)])]), k(120)])])});
  gls2.ia["cannon5-0"] = new H.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), q, C(c.va("b"))), c.repeat(11, [k(5), c.fire(c.direction(10, "sequence"), q, C(c.va("b")))]), k(60)])]), b:c.action([c.wait(5), c.Pe(c.speed(0), 0), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, u)
  }), c.Wa])});
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
  gls2.ia["nozomi-4"] = new H.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.Da("c", "2+$loop.index"), f("$c", "-4-($c-2)*4", "4+($c-2)*4", G("(560-$c*40)*0.03"), D, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), C(c.va("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, E, c.offsetX(-50)), c.wait(3)])
  }), k(90), c.fire(c.direction(-40), C(c.va("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, E, c.offsetX(50)), c.wait(3)])
  }), k(90)])]), noop:c.action([c.wait(1), c.Wa])});
  gls2.ia["nozomi-5"] = new H.ka({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(6, [c.Da("c", "2+$loop.index"), f("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), f("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), f("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), f("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", G("(560-$c*40)*0.02"), D, c.offsetY(-50))]), k(150), c.repeat(6, [c.Da("c", "2+$loop.index"), 
  f("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), f("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), f("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), f("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), f("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", G("(560-$c*40)*0.02"), z, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(5), 
  C(c.va("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(-1, "sequence"), a, E, c.offsetX(-50)), k(3)])
  }), c.fire(c.direction(-5), C(c.va("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(1, "sequence"), a, E, c.offsetX(50)), k(3)])
  })])]), noop:c.action([c.wait(1), c.Wa])});
  gls2.ia["mktn-5"] = new H.ka({top0:c.action([c.repeat(999, [c.fire(c.direction(0), s, C(c.va("noop"))), c.repeat(20, [c.fire(c.direction(0.5, "sequence"), c.speed(0.08, "sequence"), t), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), t)]), k(6)]), c.fire(c.direction(0), s, C(c.va("noop"))), c.repeat(20, [c.fire(c.direction(-0.5, "sequence"), c.speed(0.08, "sequence"), t), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), t)]), k(6)]), k(90)])]), 
  top1:c.action([c.repeat(999, [c.fire(c.direction(0, "absolute"), n, C(c.va("noop"))), c.repeat(5, [c.fire(c.direction(-10, "sequence"), c.speed(0.05, "sequence"), B), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), B)]), k(5)]), c.fire(c.direction(0, "absolute"), n, C(c.va("noop"))), c.repeat(5, [c.fire(c.direction(10, "sequence"), c.speed(0.05, "sequence"), B), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), B)]), k(5)]), k(40)])]), noop:c.action([c.wait(1), 
  c.Wa])});
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
  gls2.ia["nagisa-1-1"] = new H.ka({top0:c.action([k(90), c.repeat(3, [c.Da("way", "5 + $loop.index*6"), b(n, 0.01, "3 + $loop.index*2", function(a) {
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
  gls2.ia["mai-1"] = new H.ka({top0:c.action([k(50), c.repeat(50, [c.Da("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, E), c.Wa]))), c.Da("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, E), c.Wa]))), k(8)])]), top1:c.action([k(50), c.repeat(12, [a(5, -50, 50, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, 
  D), c.Wa]))), a(5, -230, -130, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Wa]))), k(16), a(6, -50, 50, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Wa]))), a(6, -230, -130, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Wa]))), k(16)])])});
  gls2.ia["mai-2"] = new H.ka({top:c.action([k(50), c.repeat(15, [c.fire(c.direction(-10), z(c.va("fireChild", "$loop.index*10"))), k(8)])]), fireChild:c.action([k("40+$1"), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, t)
  }), c.Wa])});
  gls2.ia["saki-1-1"] = new H.ka({top:c.action([k(100), c.repeat(3, [c.va("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Da("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, E), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, E), k(12)]), c.repeat("$2", [f(9, -20, 20, w, J)])])});
  gls2.ia["saki-1-2"] = new H.ka({top:c.action([k(100), c.repeat(5, [c.Da("way", "5+$loop.index*2"), c.repeat(6, [c.Da("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, n("$s"), D, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), k(90)])])});
  gls2.ia["saki-1-3"] = new H.ka({top:c.action([c.Da("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.va("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Pe(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, p, J), c.Wa])});
  gls2.ia["saki-2-1"] = new H.ka({top0:c.action([k(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", p, E, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", p, E, c.offsetX(40)), k(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", p, E, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", p, E, c.offsetX(40)), k(60)])]), top1:c.action([k(100), c.repeat(4, [c.repeat(7, [c.Da("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  v, J), c.repeat(4, [c.Da("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", v("$w*-1.0"), J)])]), k(120)])])});
  gls2.ia["saki-2-2"] = new H.ka({top:c.action([k(60), c.Da("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), z(c.va("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), z(c.va("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Pe(c.speed(0), "10 + $rand*15"), c.wait(65), b(n, 0.14, 6, function(a) {
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
  }), k(2), c.Wa])});
  gls2.ia["saki-2-3"] = new H.ka({top:c.action([k(60), c.Da("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.va("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), D(c.va("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Pe(c.speed(0), "10 + $rand*20"), c.wait(65), b(n, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, J)])
  }), k(2), c.Wa])});
  gls2.ia["saki-3-1"] = new H.ka({top:c.action([c.fire(c.direction(180, "absolute"), G, z(c.va("seed"))), k(60), c.fire(c.direction(180, "absolute"), G, z(c.va("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), G, z(c.va("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, E), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, E), c.fire(c.direction(90, "sequence"), p, E), c.fire(c.direction(90, "sequence"), p, E), k(10), c.fire(c.direction(100, 
  "sequence"), p, E)])])});
  gls2.ia["saki-3-2"] = new H.ka({top:c.action([c.fire(c.direction(180, "absolute"), G, D(c.va("seed"))), k(60), c.fire(c.direction(180, "absolute"), G, D(c.va("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), G, D(c.va("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, u), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), c.fire(c.direction(90, "sequence"), p, u), k(10), c.fire(c.direction(80, 
  "sequence"), p, u)])])});
  gls2.ia["rikka-1"] = new H.ka({top:c.action([c.repeat(5, [c.Da("s", "$loop.index*1.5"), k(30), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), f(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, t, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(-90), c.offsetY(-20)), f(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, t, n("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.ia["rikka-2"] = new H.ka({top0:c.action([c.repeat(10, [c.fire(z(c.va("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(z(c.va("snow")), c.offsetX(90), c.offsetY(-20)), k(8)]), k(10)]), top1:c.action([c.repeat(35, [c.Da("d", "$loop.index*-(20+$ex*10)"), c.Da("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), C(c.va("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), C(c.va("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.Da("d", "$loop.index*+(20+$ex*10)"), c.Da("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), C(c.va("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), C(c.va("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.Da("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), C(c.va("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), C(c.va("snowArm")))])]), c.Wa]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), w, F), c.Wa]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), n("$2"), O), c.fire(c.direction("$1+1", "relative"), n("$2"), O), c.Wa()])});
  gls2.ia["rikka-3"] = new H.ka({top0:c.action([k(40), c.fire(c.direction(-10), C(c.va("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), G("$loop.index*0.5"), t, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(-90), c.offsetY(-20))]), k(5)]), k(40)]), top1:c.action([k(40), c.fire(c.direction(-10), C(c.va("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), G("$loop.index*0.5"), t, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), t, c.offsetX(90), c.offsetY(-20))]), k(5)]), k(40)]), dummy:c.action([c.wait(1), c.Wa])});
  gls2.ia["mana-1-1"] = new H.ka({top0:c.action([c.va("winder", -1)]), top1:c.action([c.va("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), n, N, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [k(20), c.Da("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), n, N, c.offsetX("-145*$1"), c.offsetY(-5))])])]), top2:c.action([c.wait(60), k(300), c.repeat(7, [c.Da("s", "$loop.index"), c.repeat(5, [c.Da("ss", 
  "($s-$loop.index)*0.5"), f(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, w("$ss"), J, c.offsetX(-30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Da("ss", "($s-$loop.index)*0.5"), f(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, w("$ss"), J, c.offsetX(30), c.offsetY(-30))]), k(20), c.repeat(5, [c.Da("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, v("$ss"), t, c.offsetX(30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Da("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, v("$ss"), t, c.offsetX(-30), c.offsetY(-30))]), k(80)])])});
  gls2.ia["mana-1-2"] = new H.ka({top:c.action([c.repeat(5, [c.Da("i", "$loop.index"), c.Da("j", "1/($i+1) * 4"), b(n(6), 0.02, "4+$loop.index*3", function(a) {
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
    a = gls2.ia.Qe = tm.zb.Yc.be;
    a.wg = function(a) {
      return!(a instanceof gls2.Pa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Fh = function(a) {
      var b = M.shift(0);
      if(b) {
        return b.sa = gls2.ja.Bi, L.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.cc ? (b.scaleX = 1, b.scaleY = 1, b.Wc = r) : (a.le ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Tb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.Wc = j), b.visible = a.visible === r ? r : j, b.cc = !!a.cc, b.le = !!a.le, b.Tb = !!a.Tb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Jh = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.pd = gls2.ja.Di;
    H.Sa.Sb.$rank = 0;
    H.Sa.Sb.$hyperOff = 1
  };
  gls2.ia.erase = function(a, b, c) {
    for(var d = [].concat(L), f = 0, h = d.length;f < h;f++) {
      if(a) {
        var k = gls2.wh(!!b);
        k.setPosition(d[f].x, d[f].y);
        c && (k.jd = j)
      }
      d[f].Ea()
    }
  };
  gls2.ia.$d = function() {
    for(var a = [].concat(L), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Pa = tm.createClass({superClass:tm.display.Sprite, sa:0, cc:r, le:r, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      M.push(this);
      var a = L.indexOf(this);
      -1 !== a && L.splice(a, 1)
    })
  }, update:function() {
    this.cc && (this.rotation += 15)
  }, Ea:function() {
    var a = gls2.Pa.de().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Pa.de = function() {
    gls2.Pa.de.jg === l && (gls2.Pa.de.jg = gls2.Ua(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Pa.de.jg.clone()
  };
  gls2.Pa.de.jg = l;
  var M = [], L = gls2.Pa.pb = []
})();
gls2.ma = {};
gls2.ma.clamp = function(b, a, d) {
  return b < a ? a : b > d ? d : b
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
  for(var b = 0, a = 0, d = arguments.length;a < d;++a) {
    b += arguments[a] * arguments[a]
  }
  return b
};
gls2.ma.inside = function(b, a, d) {
  return b >= a && b <= d
};

