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
var q = {He:this};
(function() {
  function a(a, c) {
    for(var f = 0, d = a.length;f < d;f++) {
      if(a[f].label == c) {
        return a[f]
      }
    }
  }
  q.za = function(a) {
    this.type = "none";
    this.root = this;
    this.Aa = [];
    this.Fc = [];
    this.Jc = [];
    if(a !== i) {
      for(var c in a) {
        a.hasOwnProperty(c) && (a[c].label = c, a[c] instanceof q.Oa ? this.Aa.push(a[c]) : a[c] instanceof q.ma ? this.Fc.push(a[c]) : a[c] instanceof q.Qb && this.Jc.push(a[c]))
      }
      a = 0;
      for(c = this.Aa.length;a < c;a++) {
        this.Aa[a].Ra(this)
      }
      a = 0;
      for(c = this.Fc.length;a < c;a++) {
        this.Fc[a].Ra(this)
      }
      a = 0;
      for(c = this.Jc.length;a < c;a++) {
        this.Jc[a].Ra(this)
      }
    }
  };
  q.za.prototype.de = function(b) {
    return a(this.Aa, b)
  };
  q.za.prototype.Hf = function() {
    for(var a = [], c = 0, f = this.Aa.length;c < f;c++) {
      var d = this.Aa[c];
      d.label && 0 === d.label.indexOf("top") && (a[a.length] = d.label)
    }
    return a
  };
  q.za.prototype.yf = function(a) {
    var c;
    if(c = this.de(a)) {
      return c
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  q.za.prototype.zf = function(b) {
    return a(this.Fc, b)
  };
  q.za.prototype.Af = function(a) {
    var c;
    if(c = this.zf(a)) {
      return c
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  q.za.prototype.Bf = function(b) {
    return a(this.Jc, b)
  };
  q.za.prototype.Cf = function(a) {
    var c;
    if(c = this.Bf(a)) {
      return c
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  q.ma = function() {
    this.root = this.label = l;
    this.direction = new q.hb(0);
    this.speed = new q.kb(1);
    this.Aa = [];
    this.Ha = {};
    this.ia = {}
  };
  q.ma.prototype.clone = function(a) {
    var c = new q.ma;
    c.label = this.label;
    c.root = this.root;
    c.Aa = this.Aa;
    c.direction = new q.hb(a.Fa(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new q.kb(a.Fa(this.speed.value));
    c.speed.type = this.speed.type;
    c.Ha = this.Ha;
    c.ia = a.ia;
    return c
  };
  q.ma.prototype.Ra = function(a) {
    this.root = a;
    for(var c = 0, f = this.Aa.length;c < f;c++) {
      this.Aa[c].Ra(a)
    }
  };
  q.tc = function(a) {
    this.root = l;
    this.label = a;
    this.xa = []
  };
  q.tc.prototype.clone = function(a) {
    var c = a.ia;
    a.ia = a.hd(this.xa);
    var f = this.root.Af(this.label).clone(a);
    a.ia = c;
    return f
  };
  q.tc.prototype.Ra = function(a) {
    this.root = a
  };
  q.ya = function() {
    this.Ma = ""
  };
  q.ya.prototype.Ra = function(a) {
    this.root = a
  };
  q.Oa = function() {
    this.Ma = "action";
    this.root = this.label = l;
    this.Ua = [];
    this.xa = []
  };
  q.Oa.prototype = new q.ya;
  q.Oa.prototype.Ra = function(a) {
    this.root = a;
    for(var c = 0, f = this.Ua.length;c < f;c++) {
      this.Ua[c].Ra(a)
    }
  };
  q.Oa.prototype.clone = function() {
    var a = new q.Oa;
    a.label = this.label;
    a.root = this.root;
    a.Ua = this.Ua;
    return a
  };
  q.Pb = function(a) {
    this.Ma = "actionRef";
    this.label = a;
    this.root = l;
    this.xa = []
  };
  q.Pb.prototype = new q.ya;
  q.Pb.prototype.clone = function() {
    var a = new q.Oa;
    a.root = this.root;
    a.Ua.push(this);
    return a
  };
  q.Qb = function() {
    this.Ma = "fire";
    this.fa = this.speed = this.direction = this.root = this.label = l;
    this.Ha = new q.$c
  };
  q.Qb.prototype = new q.ya;
  q.Qb.prototype.Ra = function(a) {
    this.root = a;
    this.fa && this.fa.Ra(a)
  };
  q.ad = function(a) {
    this.Ma = "fireRef";
    this.label = a;
    this.xa = []
  };
  q.ad.prototype = new q.ya;
  q.uc = function() {
    this.Ma = "changeDirection";
    this.direction = new q.hb;
    this.Ia = 0
  };
  q.uc.prototype = new q.ya;
  q.vc = function() {
    this.Ma = "changeSpeed";
    this.speed = new q.kb;
    this.Ia = 0
  };
  q.vc.prototype = new q.ya;
  q.sc = function() {
    this.Ma = "accel";
    this.eb = new q.bd;
    this.gb = new q.fd;
    this.Ia = 0
  };
  q.sc.prototype = new q.ya;
  q.xc = function(a) {
    this.Ma = "wait";
    this.value = a || 0
  };
  q.xc.prototype = new q.ya;
  q.ed = function() {
    this.Ma = "vanish"
  };
  q.ed.prototype = new q.ya;
  q.wc = function() {
    this.Ma = "repeat";
    this.ve = 0;
    this.action = l;
    this.xa = []
  };
  q.wc.prototype = new q.ya;
  q.wc.prototype.Ra = function(a) {
    this.root = a;
    this.action && this.action.Ra(a)
  };
  q.Yc = function(a, c) {
    this.Ma = "bind";
    this.cg = a;
    this.wf = c
  };
  q.Yc.prototype = new q.ya;
  q.cd = function(a, c) {
    this.Ma = "notify";
    this.sf = a;
    this.xa = c || l
  };
  q.cd.prototype = new q.ya;
  q.Fe = new q.ya;
  q.hb = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  q.kb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  q.bd = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.fd = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.$c = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.Ba = k;
    a.Ba !== i && (this.Ba = !!a.Ba)
  };
  q.Id = function(a) {
    this.value = a || 0
  };
  q.Jd = function(a) {
    this.value = a || 0
  };
  q.Gd = function(a) {
    this.value = !!a
  }
})();
q.sb = function(a) {
  this.Nd = a;
  this.yc = [];
  this.tb = -1;
  this.Ea = l;
  this.ia = {}
};
q.sb.prototype.next = function() {
  this.tb += 1;
  if(this.Ea !== l) {
    var a = this.Ea.Ua[this.tb];
    if(a !== i) {
      if(a instanceof q.Oa) {
        return this.ec(), this.Ea = a, this.ia = this.gd(), this.next()
      }
      if(a instanceof q.Pb) {
        return this.ec(), this.Ea = this.Nd.yf(a.label), this.ia = this.hd(a.xa), this.next()
      }
      if(a instanceof q.wc) {
        return this.ia.Yb = 0, this.ia.me = this.Fa(a.ve) | 0, this.ec(), this.Ea = a.action.clone(), this.ia = this.gd(), this.next()
      }
      if(a instanceof q.Qb) {
        var b = new q.Qb;
        b.fa = a.fa.clone(this);
        a.direction !== l && (b.direction = new q.hb(this.Fa(a.direction.value)), b.direction.type = a.direction.type);
        a.speed !== l && (b.speed = new q.kb(this.Fa(a.speed.value)), b.speed.type = a.speed.type);
        b.Ha = a.Ha;
        return b
      }
      return a instanceof q.ad ? (this.ec(), this.Ea = new q.Oa, this.Ea.Ua = [this.Nd.Cf(a.label)], this.ia = this.hd(a.xa), this.next()) : a instanceof q.uc ? (b = new q.uc, b.direction.type = a.direction.type, b.direction.value = this.Fa(a.direction.value), b.Ia = this.Fa(a.Ia), b) : a instanceof q.vc ? (b = new q.vc, b.speed.type = a.speed.type, b.speed.value = this.Fa(a.speed.value), b.Ia = this.Fa(a.Ia), b) : a instanceof q.sc ? (b = new q.sc, b.eb.type = a.eb.type, b.eb.value = this.Fa(a.eb.value), 
      b.gb.type = a.gb.type, b.gb.value = this.Fa(a.gb.value), b.Ia = this.Fa(a.Ia), b) : a instanceof q.xc ? new q.xc(this.Fa(a.value)) : a instanceof q.ed ? a : a instanceof q.Yc ? (this.ia["$" + a.cg] = this.Fa(a.wf), q.Fe) : a instanceof q.cd ? a : l
    }
    this.jf();
    if(this.Ea === l) {
      return l
    }
    if((a = this.Ea.Ua[this.tb]) && "repeat" == a.Ma) {
      this.ia.Yb++, this.ia.Yb < this.ia.me && (this.ec(), this.Ea = a.action.clone(), this.ia = this.gd())
    }
    return this.next()
  }
  return l
};
q.sb.prototype.ec = function() {
  this.yc.push({action:this.Ea, cursor:this.tb, scope:this.ia});
  this.tb = -1
};
q.sb.prototype.jf = function() {
  var a = this.yc.pop();
  a ? (this.tb = a.cursor, this.Ea = a.action, this.ia = a.scope) : (this.tb = -1, this.Ea = l, this.ia = {})
};
q.sb.prototype.Fa = function(a) {
  var b;
  if("number" === typeof a) {
    return a
  }
  if(isNaN(b = Number(a))) {
    if((b = this.ia[a]) || (b = q.ma.sa[a])) {
      return b
    }
    if("$rand" === a) {
      return Math.random()
    }
  }else {
    return b
  }
  b = {};
  for(var c in q.ma.sa) {
    q.ma.sa.hasOwnProperty(c) && (b[c] = q.ma.sa[c])
  }
  for(c in this.ia) {
    this.ia.hasOwnProperty(c) && (b[c] = this.ia[c])
  }
  b.$rand = Math.random();
  (c = this.yc[this.yc.length - 1]) && (b.$loop = {index:c.scope.Yb, count:c.scope.Yb + 1, first:0 === c.scope.Yb, last:c.scope.Yb + 1 >= c.scope.me});
  return(new Function("return " + a.split("$").join("this.$"))).apply(b)
};
q.sb.prototype.hd = function(a) {
  var b = {};
  if(a) {
    for(var c = 0, f = a.length;c < f;c++) {
      b["$" + (c + 1)] = this.Fa(a[c])
    }
  }else {
    for(c in this.ia) {
      this.ia.hasOwnProperty(c) && (b[c] = this.ia[c])
    }
  }
  return b
};
q.sb.prototype.gd = function() {
  var a = {}, b;
  for(b in this.ia) {
    this.ia.hasOwnProperty(b) && (a[b] = this.ia[b])
  }
  return a
};
q.za.prototype.rd = function(a) {
  var b = new q.sb(this);
  if(a = this.de(a)) {
    b.Ea = a
  }
  return b
};
q.ma.prototype.rd = function() {
  var a = new q.sb(this.root), b = new q.Oa;
  b.root = this.root;
  b.Ua = this.Aa;
  a.Ea = b;
  a.ia = this.ia;
  return a
};
q.ma.sa = {};
q.la = function(a) {
  a = a || "";
  for(var b in q.la) {
    q.la.hasOwnProperty(b) && (q.He[a + b] = q.la[b])
  }
};
q.la.action = function(a) {
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
  var f = new q.Oa;
  if(a instanceof Array) {
    a.some(function(a) {
      return!(a instanceof q.ya)
    }) && g(Error("argument type error.")), f.Ua = a
  }else {
    b = 0;
    for(c = arguments.length;b < c;b++) {
      arguments[b] instanceof q.ya ? f.Ua[b] = arguments[b] : g(Error("argument type error."))
    }
  }
  return f
};
q.la.ig = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("label is required."));
  f = new q.Pb(a);
  if(b instanceof Array) {
    f.xa = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.xa.push(arguments[c])
    }
  }
  return f
};
q.la.fa = function(a, b, c, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new q.ma;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof q.hb ? j.direction = arguments[d] : arguments[d] instanceof q.kb ? j.speed = arguments[d] : arguments[d] instanceof q.Oa ? j.Aa.push(arguments[d]) : arguments[d] instanceof q.Pb ? j.Aa.push(arguments[d]) : arguments[d] instanceof Array ? j.Aa.push(q.la.action(arguments[d])) : arguments[d] instanceof Object ? j.Ha = arguments[d] : "string" === typeof arguments[d] && (j.label = arguments[d])
  }
  return j
};
q.la.kg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("label is required."));
  f = new q.tc(a);
  if(b instanceof Array) {
    f.xa = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.xa.push(arguments[c])
    }
  }
  return f
};
q.la.pa = function(a, b, c, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new q.Qb;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof q.hb ? j.direction = arguments[d] : arguments[d] instanceof q.kb ? j.speed = arguments[d] : arguments[d] instanceof q.ma ? j.fa = arguments[d] : arguments[d] instanceof q.tc ? j.fa = arguments[d] : arguments[d] instanceof q.$c ? j.Ha = arguments[d] : arguments[d] instanceof q.Id ? j.Ha.offsetX = arguments[d].value : arguments[d] instanceof q.Jd ? j.Ha.offsetY = arguments[d].value : arguments[d] instanceof q.Gd && (j.Ha.Ba = arguments[d].value)
  }
  j.fa === i && g(Error("bullet (or bulletRef) is required."));
  return j
};
q.la.qg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("label is required."));
  f = new q.ad(a);
  if(b instanceof Array) {
    f.xa = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.xa.push(arguments[c])
    }
  }
  return f
};
q.la.lg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("direction is required."));
  b === i && g(Error("term is required."));
  c = new q.uc;
  c.direction = a instanceof q.hb ? a : new q.hb(a);
  c.Ia = b;
  return c
};
q.la.mg = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("speed is required."));
  b === i && g(Error("term is required."));
  c = new q.vc;
  c.speed = a instanceof q.kb ? a : new q.kb(a);
  c.Ia = b;
  return c
};
q.la.hg = function(a, b, c) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  d = new q.sc;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof q.bd ? d.eb = a : arguments[f] instanceof q.fd ? d.gb = b : d.Ia = arguments[f]
  }
  d.eb === i && d.gb === i && g(Error("horizontal or vertical is required."));
  d.Ia === i && g(Error("term is required."));
  return d
};
q.la.wait = function(a) {
  for(var b = 0, c = arguments.length;b < c;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && g(Error("value is required."));
  return new q.xc(a)
};
q.la.Ag = function() {
  return new q.ed
};
q.la.repeat = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("times is required."));
  b === i && g(Error("action is required."));
  f = new q.wc;
  f.ve = a;
  if(b instanceof q.Oa || b instanceof q.Pb) {
    f.action = b
  }else {
    if(b instanceof Array) {
      f.action = q.la.action(b)
    }else {
      for(var d = [], c = 1;c < arguments.length;c++) {
        d.push(arguments[c])
      }
      f.action = q.la.action(d)
    }
  }
  return f
};
q.la.jg = function(a, b) {
  return new q.Yc(a, b)
};
q.la.wg = function(a, b) {
  return new q.cd(a, b)
};
q.la.direction = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.hb(a);
  b !== i && (c.type = b);
  return c
};
q.la.speed = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.kb(a);
  b && (c.type = b);
  return c
};
q.la.eb = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.bd(a);
  b && (c.type = b);
  return c
};
q.la.gb = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.fd(a);
  b && (c.type = b);
  return c
};
q.la.pg = function(a) {
  return new q.$c(a)
};
q.la.offsetX = function(a) {
  return new q.Id(a)
};
q.la.offsetY = function(a) {
  return new q.Jd(a)
};
q.la.Ba = function(a) {
  return new q.Gd(a)
};
tm.La = tm.La || {};
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
  tm.La.Cb = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.Kd = a
  }, Hc:function(a, c) {
    var b = this.Kd.Hf();
    if(c === i && 0 < b.length) {
      for(var f = [], r = 0, h = b.length;r < h;r++) {
        f[f.length] = this.Ld(a, b[r])
      }
      for(var v = function() {
        for(var a = f.length;a--;) {
          f[a].call(this)
        }
        v.nd == f.length && (v.ic = k, this.dispatchEvent(tm.event.Event("completeattack")))
      }, r = f.length;r--;) {
        f[r].Vc = v
      }
      v.nd = 0;
      v.Ud = function() {
        this.nd++
      };
      v.nd = 0;
      v.ic = n;
      v.vd = k;
      return v
    }
    return this.Ld(a, c)
  }, Ld:function(a, c) {
    function b() {
      b.ga += 1;
      this.ga = b.ga;
      var a = b.Gc, c = b.hf;
      if(c) {
        if(b.ga < b.ld ? b.direction += b.Vb : b.ga === b.ld && (b.direction = b.ub), b.ga < b.md ? b.speed += b.rc : b.ga === b.md && (b.speed = b.bc), b.ga < b.jd ? (b.Mb += b.Bc, b.Ob += b.Cc) : b.ga === b.jd && (b.Mb = b.zc, b.Ob = b.Ac), this.x += Math.cos(b.direction) * b.speed * a.Nb, this.y += Math.sin(b.direction) * b.speed * a.Nb, this.x += b.Mb * a.Nb, this.y += b.Ob * a.Nb, a.wd(this)) {
          if(a.Ab || this.Ab) {
            this.rotation = (b.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = b.speed
          }
          if(!(b.ga < b.we || b.ic)) {
            for(var d;d = b.xe.next();) {
              switch(d.Ma) {
                case "fire":
                  c.ef.call(this, d, a, b, c);
                  break;
                case "wait":
                  a = 0;
                  b.we = "number" === typeof d.value ? b.ga + d.value : 0 !== (a = ~~d.value) ? b.ga + a : b.ga + eval(d.value);
                  return;
                case "changeDirection":
                  c.af.call(this, d, a, b);
                  break;
                case "changeSpeed":
                  c.bf.call(this, d, b);
                  break;
                case "accel":
                  c.Ze.call(this, d, b);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  c.ff.call(this, d)
              }
            }
            b.ic = k;
            b.Vc ? b.Vc.Ud() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), b.ic = k, b.Vc ? b.Vc.Ud() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    a = function(a) {
      var b = {}, c = tm.La.Cb.kc, d;
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
    "string" === typeof c ? b.xe = this.Kd.rd(c) : c instanceof q.ma ? b.xe = c.rd() : (window.console.error(a, c), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    b.hf = this;
    b.Gc = a;
    b.we = -1;
    b.ic = n;
    b.direction = 0;
    b.je = 0;
    b.speed = 0;
    b.le = 0;
    b.Mb = 0;
    b.Ob = 0;
    b.Vb = 0;
    b.ub = 0;
    b.ld = -1;
    b.rc = 0;
    b.bc = 0;
    b.md = -1;
    b.Bc = 0;
    b.zc = 0;
    b.Cc = 0;
    b.Ac = 0;
    b.jd = -1;
    b.ga = -1;
    b.vd = k;
    return b
  }, df:function(a) {
    function b() {
      this.x += b.Wd;
      this.y += b.Xd;
      b.Gc.wd(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    }
    a = function(a) {
      var b = {}, c = tm.La.Cb.kc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.Gc = a;
    b.direction = 0;
    b.speed = 0;
    b.Wd = 0;
    b.Xd = 0;
    b.vd = k;
    return b
  }, ef:function(a, c, f, z) {
    if(this.Uf === i || this.nb) {
      var r = {label:a.fa.label}, h;
      for(h in a.fa.Ha) {
        r[h] = a.fa.Ha[h]
      }
      if(r = c.Sd(r)) {
        var v = (h = !!a.fa.Aa.length) ? z.df(c) : z.Hc(c, a.fa), L = this, U = {x:this.x + a.Ha.offsetX, y:this.y + a.Ha.offsetY};
        f.je = v.direction = function(h) {
          var z = eval(h.value) * Math.DEG_TO_RAD;
          switch(h.type) {
            case "aim":
              return c.target ? a.Ha.Ba ? b(U, c.target) + z : b(L, c.target) + z : z - Math.PI / 2;
            case "absolute":
              return z - Math.PI / 2;
            case "relative":
              return f.direction + z;
            default:
              return f.je + z
          }
        }(a.direction || a.fa.direction);
        f.le = v.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.le + b;
            default:
              return b
          }
        }(a.speed || a.fa.speed);
        r.x = U.x;
        r.y = U.y;
        h && (v.Wd = Math.cos(v.direction) * v.speed * c.Nb, v.Xd = Math.sin(v.direction) * v.speed * c.Nb);
        r.Ab = !!r.Ab;
        if(c.Ab || r.Ab) {
          r.rotation = (v.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, r.speed = v.speed
        }
        r.addEventListener("enterframe", v);
        r.addEventListener("removed", function() {
          this.removeEventListener("enterframe", v);
          this.removeEventListener("removed", arguments.callee)
        });
        c.Pd ? c.Pd.addChild(r) : this.parent && this.parent.addChild(r)
      }
    }
  }, af:function(c, f, m) {
    var z = eval(c.direction.value) * Math.DEG_TO_RAD, r = eval(c.Ia);
    switch(c.direction.type) {
      case "aim":
        c = f.target;
        if(!c) {
          return
        }
        m.ub = b(this, c) + z;
        m.Vb = a(m.ub - m.direction) / r;
        break;
      case "absolute":
        m.ub = z - Math.PI / 2;
        m.Vb = a(m.ub - m.direction) / r;
        break;
      case "relative":
        m.ub = m.direction + z;
        m.Vb = a(m.ub - m.direction) / r;
        break;
      case "sequence":
        m.Vb = z, m.ub = m.direction + m.Vb * (r - 1)
    }
    m.ld = m.ga + r
  }, bf:function(a, b) {
    var c = eval(a.speed.value), f = eval(a.Ia);
    switch(a.speed.type) {
      case "absolute":
        b.bc = c;
        b.rc = (b.bc - b.speed) / f;
        break;
      case "relative":
        b.bc = c + b.speed;
        b.rc = (b.bc - b.speed) / f;
        break;
      case "sequence":
        b.rc = c, b.bc = b.speed + b.rc * f
    }
    b.md = b.ga + f
  }, Ze:function(a, b) {
    var c = eval(a.Ia);
    b.jd = b.ga + c;
    if(a.eb) {
      var f = eval(a.eb.value);
      switch(a.eb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Bc = (f - b.Mb) / c;
          b.zc = f;
          break;
        case "relative":
          b.Bc = f, b.zc = (f - b.Mb) * c
      }
    }else {
      b.Bc = 0, b.zc = b.Mb
    }
    if(a.gb) {
      switch(f = eval(a.gb.value), a.gb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Cc = (f - b.Ob) / c;
          b.Ac = f;
          break;
        case "relative":
          b.Cc = f, b.Ac = (f - b.Ob) * c
      }
    }else {
      b.Cc = 0, b.Ac = b.Ob
    }
  }, ff:function(a) {
    var b = tm.event.Event(a.sf);
    if(a.xa) {
      for(var c in a.xa) {
        b[c] = a.xa[c]
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
  tm.La.pf = function(a) {
    var b = tm.app.Sprite(8, 8, c);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.La.Vd = function(a) {
    f === l && (f = a.getRoot());
    return 0 <= a.x && a.x < APP.width && 0 <= a.y && a.y < APP.height
  };
  tm.La.og = function() {
    return k
  };
  tm.La.Cb.kc = {Sd:tm.La.pf, wd:tm.La.Vd, xg:0, Ab:n, Nb:2, target:l, sa:{}};
  q.za.prototype.Hc = function(a) {
    return tm.La.Cb(this).Hc(a)
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
var s = l, t, u, w, A, B, C, D, E, ba, F, ca, G, H, I, J, K, da, ea, M, fa, ga, ha, ia, ja, N, ka, la, O, P, Q, aa = tm.createClass({superClass:tm.app.CanvasApp, Oc:0, ug:0, Dc:1, ac:1, Yd:1, ce:[1E9, 1E10], ba:l, init:function(a) {
  s !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", soundExplode:"assets/sen_ge_taihou03.mp3", soundExplode2:"assets/sen_ge_bom13.mp3", 
  soundExplode3:"assets/sen_ge_bom02.mp3", star:"assets/star.png"}, nextScene:function() {
    this.gf();
    return t()
  }.bind(this)}))
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, gf:function() {
  u.ta();
  w.ta();
  this.ba = A()
}, uf:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Oc, "")
}});
function R(a) {
  if(0 !== s.ac && ma[a] !== s.frame) {
    var b = tm.asset.AssetManager.get(a);
    b.volume = 0.1 * s.ac;
    b && b.clone().play();
    ma[a] = s.frame
  }
}
var ma = {};
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function na(a, b) {
  return(a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
;B = {We:1, Te:2, Ue:2, Se:4, ye:2, Ke:4, ze:8, Pe:0.01, Ne:0.015, Oe:0.0010, Le:0.015, Me:0.0020, Qe:0.75, Re:2, Hd:800, Je:200, Ie:120, Ee:7, Ce:0.02, De:0.5, Be:0.01, Zc:200, Ae:50, Ye:200, Xe:100, Ge:0.3};
(function() {
  var a = l, b = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  C = tm.createClass({superClass:tm.app.Sprite, type:0, Xa:0, lb:k, Zb:n, ba:l, speed:4.5, Fb:l, Ub:l, oe:l, ge:l, fb:l, Pc:l, Ec:l, td:l, ud:l, init:function(b, f) {
    this.superInit("tex1", 64, 64);
    this.type = f;
    this.ba = b;
    tm.La.Cb.kc.target = this;
    this.boundingRadius = 2;
    this.altitude = 10;
    this.Ub = this.oe = D(f, 100);
    this.ge = D(3, 100);
    this.fb = E(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.fb.visible = n;
    this.fb.addChildTo(b);
    this.cf();
    this.Fb = [{x:-70, y:20, d:0.1, zb:n, vb:-0.7, v:k}, {x:-40, y:40, d:0.1, zb:n, vb:-0.5, v:k}, {x:40, y:40, d:0.1, zb:k, vb:0.5, v:k}, {x:70, y:20, d:0.1, zb:k, vb:0.7, v:k}];
    this.Ec = tm.app.CanvasElement().addChildTo(this);
    for(var d = 0, j = this.Fb.length;d < j;d++) {
      var m = this.Fb[d];
      ba(this, m).setPosition(m.x, m.y).addChildTo(this.Ec)
    }
    this.Lf = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Lf.blendMode = "lighter";
    this.td = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.td.blendMode = "lighter";
    this.td.update = function() {
      this.rotation += 2;
      this.visible = 1 === b.Na && !b.ua
    };
    this.ud = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.ud.blendMode = "lighter";
    this.ud.update = function() {
      this.rotation -= 2;
      this.visible = 1 === b.Na && !b.ua
    };
    this.mc = tm.app.CanvasElement(80, 80).addChildTo(this);
    this.mc.blendMode = "lighter";
    this.mc.rotation = -90;
    this.mc.strokeStyle = "rgba(180,180,255,0.4)";
    this.mc.update = function() {
      this.visible = b.ua
    };
    this.mc.draw = function(a) {
      a.lineCap = "round";
      var f = b.Wb / B.Hd;
      a.strokeStyle = "rgba(50,50,255,0.4)";
      a.lineWidth = "10";
      a.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, n);
      a.strokeStyle = "rgba(100,100,255,0.4)";
      a.lineWidth = "6";
      a.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, n);
      a.strokeStyle = "rgba(180,180,255,0.4)";
      a.lineWidth = "2";
      a.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, n)
    };
    this.If = tm.app.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.If.update = function() {
      this.visible = b.ua
    };
    a === l && (a = F(this.ba.ra))
  }, gg:function() {
    return[{x:-70, y:20, d:0.1, zb:n, vb:-0.7, v:k}, {x:-40, y:40, d:0.1, zb:n, vb:-0.5, v:k}, {x:40, y:40, d:0.1, zb:k, vb:0.5, v:k}, {x:70, y:20, d:0.1, zb:k, vb:0.7, v:k}]
  }, cf:function() {
    this.Pc = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.Pc.setFrameIndex(5);
    this.Pc.blendMode = "lighter";
    this.Pc.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, yb:-1, Ic:n, wb:n, update:function(c) {
    this.visible = this.Zb ? 0 === c.frame % 2 : k;
    var f = c.keyboard;
    if(this.lb) {
      var d = f.getKeyAngle();
      d !== l && (d = b[d], this.x += d.x * this.speed * (this.wb ? 0.75 : 1), this.y += d.y * this.speed * (this.wb ? 0.75 : 1));
      this.x = S(this.x, 15, 465);
      this.y = S(this.y, 15, 625);
      var j = f.getKey("c"), d = f.getKey("z");
      this.yb = j ? this.yb + 1 : this.yb - 1;
      this.yb = S(this.yb, -1, 10);
      this.wb = d && j || 10 === this.yb;
      j = this.ba.ua ? 3 : 5;
      this.Ic = !this.wb && (0 <= this.yb || d) && 0 === c.frame % j;
      d && (this.yb = 0);
      this.fb.x = this.x;
      this.fb.y = this.y - 40;
      if(this.wb) {
        d = 0;
        for(j = this.Fb.length;d < j;d++) {
          this.Fb[d].v = n
        }
        this.Ec.rotation = 0
      }else {
        this.fb.visible = n;
        d = 0;
        for(j = this.Fb.length;d < j;d++) {
          this.Fb[d].v = k
        }
      }
      this.Ic && (d = Math.sin(0.2 * c.frame), j = this.Ub.pa(this.x - 7 - 6 * d, this.y - 5, -90), j !== l && j.addChildTo(this.ba), j = this.Ub.pa(this.x + 7 + 6 * d, this.y - 5, -90), j !== l && j.addChildTo(this.ba));
      f.getKeyDown("x") && (1 === this.ba.Na && !this.ba.ua ? (this.ba.$f(), ca(this).addChildTo(this.ba)) : !this.ba.Xb && 0 < this.ba.Ya && (q.ma.sa.$rank = Math.clamp(q.ma.sa.$rank - 0.02, 0, 1), G(this, this.ba).setPosition(Math.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ba)))
    }
    this.of(f);
    this.$e(f);
    0 === c.frame % 2 && (a.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ba), a.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ba))
  }, Hb:function() {
    this.wb = this.Ic = n;
    this.ba.lc()
  }, of:function(a) {
    var b = this.Ec;
    b.rotation = this.lb && a.getKey("left") ? Math.max(b.rotation - 3, -40) : this.lb && a.getKey("right") ? Math.min(b.rotation + 3, 40) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0
  }, $e:function(a) {
    this.lb && a.getKey("left") ? this.Xa = S(this.Xa - 0.2, -3, 3) : this.lb && a.getKey("right") ? this.Xa = S(this.Xa + 0.2, -3, 3) : 0 > this.Xa ? this.Xa = S(this.Xa + 0.2, -3, 3) : 0 < this.Xa && (this.Xa = S(this.Xa - 0.2, -3, 3));
    a = 3 + ~~this.Xa;
    this.setFrameIndex(a);
    return a
  }});
  ba = tm.createClass({superClass:tm.app.AnimationSprite, Eb:l, aa:l, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Eb = b;
    this.aa = a;
    this.altitude = 10;
    this.gotoAndPlay(b.zb ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.Eb.v) {
      this.x = this.Eb.x * (this.aa.ba.ua ? 1.5 : 1);
      this.y = this.Eb.y * (this.aa.ba.ua ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Eb.d * this.Eb.vb);
      var f = this.parent.localToGlobal(this);
      this.Eb.v && 0 === b.frame % 2 && a.clone(40).setPosition(f.x, f.y).addChildTo(b.ba);
      this.aa.Ic && (f = this.aa.Ub.pa(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== l && f.addChildTo(b.ba))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = l;
  H = tm.createClass({superClass:tm.app.Sprite, speed:0, Qa:k, init:function(b) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    a === l && (a = I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    b !== i && this.qc(b)
  }, update:function() {
    this.x += this.dg;
    this.y += this.eg;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, qc:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48, this.setScale(2, 2)) : (this.speed = 30, this.boundingRadius = 32, this.setScale(1.5, 1.5))
  }, Lc:function(b) {
    for(var f = 0;f < b;f++) {
      var d = a.clone().setPosition(this.x, this.y).addChildTo(this.parent), j = T(2, 8), m = 2 * Math.random() * Math.PI;
      d.ja = Math.cos(m) * j;
      d.ka = Math.sin(m) * j;
      d.scaleX = d.scaleY = (T(0.1, 0.5) + T(0.1, 0.5)) / 2;
      d.addEventListener("enterframe", function() {
        this.x += this.ja;
        this.y += this.ka;
        this.ja *= 0.9;
        this.ka *= 0.9
      })
    }
  }});
  H.hc = function() {
    for(var a = [].concat(b), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var b = H.Ga = [];
  D = tm.createClass({Wc:l, init:function(a, f) {
    this.Wc = [];
    for(var d = 0;d < f;d++) {
      var j = H(a), m = this;
      j.addEventListener("added", function() {
        b.push(this)
      });
      j.addEventListener("removed", function() {
        var a = b.indexOf(this);
        -1 !== a && b.splice(a, 1);
        m.Wc.push(this)
      });
      this.Wc.push(j)
    }
  }, pa:function(a, b, d) {
    var j = this.Wc.pop();
    if(j === i) {
      return l
    }
    var m = oa(d);
    j.dg = Math.cos(m) * j.speed;
    j.eg = Math.sin(m) * j.speed;
    j.setPosition(a, b);
    j.rotation = d + 90;
    return j
  }})
})();
(function() {
  var a = l;
  E = tm.createClass({superClass:tm.app.Sprite, aa:l, ba:l, Ta:0, frame:0, ue:l, color:l, lf:n, head:l, ee:l, Qd:l, Qa:k, init:function(a, c) {
    this.aa = a;
    this.ba = a.ba;
    var f = this;
    this.ue = c;
    this.superInit(c.redBody, 50, 100);
    this.boundingHeightBottom = 1;
    this.yg = 0;
    this.origin.y = 1;
    var d = this.Qd = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
    d.y = 60;
    d.addChildTo(this);
    (this.ee = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
    d = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
    d.addChildTo(this);
    d.update = function() {
      this.y = f.Ta - f.y;
      -10 < this.y && (this.y = -10);
      this.visible = 0 < f.Ta
    };
    this.qc("blue")
  }, qc:function(b) {
    this.color = b;
    this.image = tm.asset.AssetManager.get(this.ue[this.color + "Body"]);
    this.srcRect.x = 0;
    this.srcRect.y = 0;
    this.srcRect.width = this.image.width / 16;
    this.Qd.gotoAndPlay(this.color);
    this.ee.gotoAndPlay(this.color);
    this.head.gotoAndPlay(this.color);
    a = I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element);
    "hyper" === b ? (this.boundingWidth = this.width = 75, this.head.setScale(1.5, 1.5)) : (this.boundingWidth = this.width = 50, this.head.setScale(1, 1));
    return this
  }, Lc:function(b, c) {
    c = c || this.Ta;
    for(var f = 0;f < b;f++) {
      var d = a.clone().setPosition(this.x, c).addChildTo(this.ba), j = T(8, 14), m = T(0, Math.PI);
      d.ja = Math.cos(m) * j;
      d.ka = Math.sin(m) * j;
      d.scaleX = d.scaleY = (T(0.5, 1.5) + T(0.5, 1.5)) / 2;
      d.addEventListener("enterframe", function() {
        this.x += this.ja;
        this.y += this.ka;
        this.ja *= 0.95;
        this.ka *= 0.95
      })
    }
  }, Ff:function(b, c, f) {
    c = c || this.x;
    f = f || this.Ta;
    for(var d = 0;d < b;d++) {
      var j = a.clone().setPosition(c, f).addChildTo(this.ba), m = T(12, 20), z = T(0, Math.PI);
      j.ja = Math.cos(z) * m;
      j.ka = Math.sin(z) * m;
      j.scaleX = j.scaleY = (T(1, 3) + T(1, 3)) / 2;
      j.addEventListener("enterframe", function() {
        this.x += this.ja;
        this.y += this.ka;
        this.ja *= 0.95;
        this.ka *= 0.95
      })
    }
  }, update:function(a) {
    (this.visible = this.aa.wb) ? (this.Ta = Math.max(0, this.Ta - 40), this.height = this.y - this.Ta, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Ta = this.y - 40;
    this.lf = this.visible
  }, draw:function(a) {
    var c = this.srcRect, f = this._image.element;
    c.x = c.width * this.frame;
    a.context.drawImage(f, c.x, c.height - this.height, c.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, tg:function() {
    return this.Ta
  }, Yf:function(a) {
    this.Ta = a;
    this.head.update()
  }});
  E.prototype.getter("boundingHeightTop", function() {
    return this.position.y - this.Ta
  })
})();
(function() {
  G = tm.createClass({superClass:tm.app.Object2D, Qa:k, ba:l, init:function(b, c) {
    this.superInit();
    this.aa = b;
    this.ba = c;
    this.re = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.re.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.re));
    this.Od();
    a === l && (a = I(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ga = 0;
    this.pc = 1;
    this.addEventListener("added", function() {
      this.ba.Xb = k;
      this.aa.Zb = k;
      this.ba.Ya -= 1;
      this.ba.lc();
      this.ba.Wa("drop 'BOMBER'!!", k)
    });
    this.addEventListener("removed", function() {
      this.ba.Xb = n;
      this.aa.Zb = n
    })
  }, Od:function() {
    this.Va = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.Va.gotoAndPlay("animation");
    this.Va.blendMode = "lighter";
    this.Va.setScale(0.1, 0.1);
    this.Va.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = Math.randf(0.9, 1.1)
      }
    }.bind(this.Va))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.pc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.ga;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.ga += 3.6, this.pc = -1) : (this.b = 8, this.ga += 1.8, this.pc = 1)
  }});
  J = tm.createClass({superClass:G, init:function(a, c) {
    this.superInit(a, c);
    this.addEventListener("added", function() {
      this.ba.Ya = 0
    })
  }, Od:function() {
    this.Va = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.Va.gotoAndPlay("animation");
    this.Va.blendMode = "lighter";
    this.Va.setScale(0.1, 0.1);
    this.Va.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = Math.randf(0.4, 0.6)
      }
    }.bind(this.Va))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.pc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.04 * this.ga;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.ga += 1.8, this.pc = 1)
  }});
  var a = l
})();
K = tm.createClass({zg:0, he:0, $d:0, aa:l, ba:l, $:l, frame:0, init:function(a) {
  this.ba = a;
  this.aa = a.aa;
  this.Zf();
  this.$ = da();
  this.frame = 0
}, Zf:function() {
  this.ba.ra.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(51,51,136,0.5)"}, {offset:1, color:"rgba(17,17, 68,0.5)"}]).toStyle()
}, update:function() {
  this.tf(this.frame);
  this.frame += 1
}, tf:function(a) {
  a = this.$.get(a);
  if(a !== l) {
    if("function" === typeof a.value) {
      a.value.call(this)
    }else {
      if(ea[a.value] !== i) {
        var b = ea[a.value];
        if(b !== l) {
          for(var c = 0;c < b.length;c++) {
            var f = this.Kf(b[c]);
            a.stop && f.addEventListener("enemyconsumed", function() {
              this.$.Fd = n
            }.bind(this))
          }
        }
      }
    }
  }
}, Kf:function(a) {
  this.$d += 1;
  return M(this.ba, this, a.ca, a.da).setPosition(a.x, a.y).addChildTo(this.ba).Jb()
}, Mf:function() {
  this.he += 1
}});
K.create = function(a, b) {
  if(0 === b) {
    return fa(a)
  }
};
da = tm.createClass({index:0, data:l, Fd:n, init:function() {
  this.data = {}
}, add:function(a, b, c) {
  this.index += a;
  this.data[this.index] = {stop:c, value:b}
}, get:function(a) {
  a = this.data[a];
  return a === i ? l : a.stop === k ? (this.Fd = k, a) : this.Fd ? l : a
}});
fa = tm.createClass({superClass:K, init:function(a) {
  this.superInit(a);
  this.$.add(0, function() {
    this.ba.ra.direction = 0.5 * Math.PI;
    this.ba.ra.speed = 1
  });
  this.$.add(200, "tankRD-center");
  this.$.add(200, "tankRD-left");
  this.$.add(20, "heri1-right");
  this.$.add(60, "heri1-center");
  this.$.add(10, "cannon-0");
  this.$.add(60, "heri1-left");
  this.$.add(10, "cannon-1");
  this.$.add(60, "tankL-top");
  this.$.add(10, "cannon-1");
  this.$.add(50, "heri1-right");
  this.$.add(20, "tankRD-center");
  this.$.add(80, "heri1-center");
  this.$.add(10, "cannon-8");
  this.$.add(50, "heri1-left");
  this.$.add(10, "cannon-7");
  this.$.add(1, "cannon-8");
  this.$.add(50, "heri1-center");
  this.$.add(50, "fighter-m-1");
  this.$.add(70, "heri1-right");
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
  this.$.add(1, "cannon-6");
  this.$.add(1, "cannon-5");
  this.$.add(50, "heri1-center");
  this.$.add(50, "heri1-left");
  this.$.add(20, "tankL-top");
  this.$.add(50, "heri1-right");
  this.$.add(50, "fighter-m-1");
  this.$.add(50, "fighter-m-5");
  this.$.add(1, function() {
    this.ba.ra.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(150, "yukishiro", k);
  this.$.add(50, "heri2-left");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(60, "heri1-center");
  this.$.add(50, "heri2-left");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(50, "fighter-m-0");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(50, "heri2-left");
  this.$.add(10, "cannon-6");
  this.$.add(1, "cannon-5");
  this.$.add(1, "cannon-4");
  this.$.add(60, "heri1-center");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(50, "fighter-m-6");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(50, "heri2-left");
  this.$.add(60, "heri1-center");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(50, "fighter-m-0");
  this.$.add(50, "fighter-m-1");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(10, "cannon-1");
  this.$.add(1, "cannon-2");
  this.$.add(1, "cannon-3");
  this.$.add(50, "heri2-left");
  this.$.add(60, "heri1-center");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(50, "fighter-m-6");
  this.$.add(50, "fighter-m-5");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(50, "heri2-left");
  this.$.add(60, "heri1-center");
  this.$.add(50, "heri2-center");
  this.$.add(50, "heri2-right");
  this.$.add(100, "fighter-m-0");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "fighter-m-6");
  this.$.add(50, "fighter-m-4");
  this.$.add(50, "fighter-m-2");
  this.$.add(50, "fighter-m-0")
}});
w = {ta:function() {
  pa();
  w.explosion = Array.range(0, 2).map(function(a) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + a, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  w.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  w.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  w.particle16 = I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Lc:function(a, b, c) {
  a = w.particle16.clone().setPosition(a, b).addChildTo(c);
  b = T(5, 20);
  c = T(Math.PI, 2 * Math.PI);
  a.ja = Math.cos(c) * b;
  a.ka = Math.sin(c) * b;
  a.scaleX = a.scaleY = (T(0.1, 0.5) + T(0.1, 0.5)) / 2;
  a.addEventListener("enterframe", function() {
    this.x += this.ja;
    this.y += this.ka;
    this.ja *= 0.9;
    this.ka *= 0.9
  })
}, sg:function(a, b, c) {
  var f = tm.app.Sprite().setPosition(a, b).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  f.image = w.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, Gf:function(a, b, c) {
  a = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(a, b).setScale(0.1, 0.1);
  a.Qa = k;
  a.addChildTo(c);
  a.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(a))
}, qd:function(a, b, c, f) {
  R("soundExplode");
  a = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  a.Qa = k;
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
}, vf:function(a, b, c) {
  R("soundExplode");
  var f = w.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  f.Qa = k;
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
  f.Qa = k;
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
  f.Qa = k;
  f.addChildTo(c)
}, be:function(a, b, c) {
  R("soundExplode2");
  R("soundExplode3");
  for(var f = 0;10 > f;f++) {
    var d = w.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += 2 * Math.cos(this.a);
      this.y += 2 * Math.sin(this.a);
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === f % 2 ? "lighter" : "source-over").setPosition(a, b).gotoAndPlay();
    d.a = 2 * Math.PI * Math.random();
    d.Qa = k;
    d.addChildTo(c)
  }
}};
ga = tm.createClass({superClass:tm.app.Object2D, target:l, Lb:0, angle:0, alpha:1, Qa:k, reverse:n, init:function(a, b) {
  this.superInit();
  this.target = a;
  this.reverse = b;
  this.angle = 0;
  this.Lb = b ? 0 : 200;
  this.alpha = b ? 1 : 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;9 > a;a++) {
      var b = this.angle + 2 * a / 9 * Math.PI;
      I(80, this.alpha, 0.9).setPosition(Math.cos(b) * this.Lb + this.target.x, Math.sin(b) * this.Lb + this.target.y).addChildTo(this.target.parent)
    }
    this.angle += 0.05;
    this.Lb += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.01 : 0.05;
    (0 > this.Lb || 200 < this.Lb) && this.remove()
  }
}});
ca = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, Qa:k, init:function(a) {
  this.superInit();
  this.target = a;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;5 > a;a++) {
      I(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + Math.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + Math.rand(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
ha = tm.createClass({superClass:tm.graphics.Canvas, ba:l, jc:l, init:function(a) {
  this.superInit("#scoreLabel");
  this.ba = a;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.jc = qa(200)
}, update:function() {
  this.clear();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  var a;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ba.score)).padding(16, " ");
  a = "";
  for(var b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ba.Ja)).padding(8, " ");
  a = "";
  for(b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, 22);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.ma.sa.$rank), 10, 85);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ba.Tc + " hit", 10, 105);
  0 < ~~this.ba.qa && (this.setText("bold 40px Orbitron", "left", "top"), this.strokeText(~~this.ba.qa + " HIT!!", 10, 125));
  for(b = 0;b < this.ba.Bb - 1;b++) {
    this.drawTexture(tm.asset.AssetManager.get("tex1"), 192, 0, 64, 64, 5 + 32 * b, 40, 32, 32)
  }
  this.fillStyle = "rgba(255,255,255,0.5)";
  for(b = 0;b < this.ba.Ya;b++) {
    this.fillRect(5 + 25 * b, 601, 20, 20)
  }
  this.jc.update();
  this.jc.draw(this)
}});
(function() {
  var a = 16 * Math.sqrt(3), b = 12.8 * Math.sqrt(3);
  ia = tm.createClass({superClass:tm.graphics.Canvas, ea:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.ea = ja();
    this.ea.ra = this;
    this.ea.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(c) {
    this.ea.ja = Math.cos(this.ea.direction) * this.ea.speed;
    this.ea.ka = Math.sin(this.ea.direction) * this.ea.speed;
    for(this.ea.$a += this.ea.ja;96 < this.ea.$a;) {
      this.ea.$a -= 96
    }
    for(;-96 > this.ea.$a;) {
      this.ea.$a += 96
    }
    for(this.ea.bb += this.ea.ka;2 * a < this.ea.bb;) {
      this.ea.bb -= 2 * a
    }
    for(;this.ea.bb < 2 * -a;) {
      this.ea.bb += 2 * a
    }
    for(this.ea.ab += 0.8 * this.ea.ja;25.6 * 3 < this.ea.ab;) {
      this.ea.ab -= 25.6 * 3
    }
    for(;this.ea.ab < -25.6 * 3;) {
      this.ea.ab += 25.6 * 3
    }
    for(this.ea.cb += 0.8 * this.ea.ka;2 * b < this.ea.cb;) {
      this.ea.cb -= 2 * b
    }
    for(;this.ea.cb < 2 * -b;) {
      this.ea.cb += 2 * b
    }
    0 === c % 2 && this.draw()
  }, draw:function() {
    this.clear();
    this.lineWidth = 0.2;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    this.beginPath();
    for(var c = 0, f = this.ea.$a - 96;576 > f;f += 48) {
      for(var c = 0 === c ? a : 0, d = this.ea.bb - 2 * a + c;d < 640 + 2 * a;d += 2 * a) {
        this.line(f, d, f + 32, d), this.line(f, d, f - 16, d + a), this.line(f, d, f - 16, d - a)
      }
    }
    this.stroke();
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(128,128,128,1.0)"}, {offset:1, color:"rgba(128,128,128,0.5)"}]).toStyle();
    this.beginPath();
    c = 0;
    for(f = this.ea.ab - 25.6 * 3;f < 480 + 25.6 * 3;f += 25.6 * 1.5) {
      c = 0 === c ? b : 0;
      for(d = this.ea.cb - 2 * b + c;d < 640 + 2 * b;d += 2 * b) {
        this.line(f, d, f + 25.6, d), this.line(f, d, f - 12.8, d + b), this.line(f, d, f - 12.8, d - b)
      }
    }
    this.stroke()
  }});
  ja = tm.createClass({superClass:tm.app.Object2D, $a:0, bb:0, ab:0, cb:0, direction:0, speed:0, ja:0, ka:0, background:l, init:function() {
    this.superInit();
    this.ab = this.cb = this.$a = this.bb = 0;
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.ka = this.ja = 0
  }})
})();
N = tm.createClass({superClass:tm.app.Sprite, ie:n, ba:l, aa:l, Nc:n, se:n, ja:0, ka:0, init:function(a) {
  this.superInit("star", 20, 20);
  (this.ie = a) && this.setScale(2, 2);
  this.ba = A.dd;
  this.aa = this.ba.aa;
  this.addChildTo(this.ba);
  a = 0.5 * Math.random() * Math.PI - 0.75 * Math.PI;
  this.ja = 20 * Math.cos(a);
  this.ka = 20 * Math.sin(a)
}, update:function() {
  this.aa.wb && (this.Nc = k);
  if(this.aa.parent === l) {
    this.Nc = n
  }else {
    if(100 > na(this, this.aa)) {
      this.ba.Nf(this);
      this.remove();
      return
    }
    1E4 > na(this, this.aa) && (this.Nc = k);
    if(this.Nc) {
      var a = Math.atan2(this.aa.y - this.y, this.aa.x - this.x);
      this.x += 10 * Math.cos(a);
      this.y += 10 * Math.sin(a)
    }else {
      this.se || (this.x += this.ja, this.y += this.ka, this.ja *= 0.8, this.ka *= 0.8, -1 < this.ja && (1 > this.ja && -1 < this.ka && 1 > this.ka) && (this.se = k))
    }
  }
  (-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) && this.remove()
}});
ka = tm.createClass({superClass:N, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
la = tm.createClass({superClass:N, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.x += this.ba.ra.ja;
  this.y += this.ba.ra.ka;
  this.superClass.prototype.update.call(this)
}});
function V(a, b) {
  if(a.parent === l || b.parent === l) {
    return n
  }
  var c = a.x + a.boundingWidthRight, f = a.y - a.boundingHeightTop, d = a.y + a.boundingHeightBottom, j = b.x - b.boundingWidthLeft, m = b.y - b.boundingHeightTop, z = b.y + b.boundingHeightBottom;
  return a.x - a.boundingWidthLeft < b.x + b.boundingWidthRight && c > j && f < z && d > m
}
;var W = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, ag:function(a, b) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = b
}, finish:function(a) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(a)
}});
var ra = tm.createClass({superClass:W, titleText:l, menu:l, descriptions:l, showExit:n, title:l, selections:[], description:l, box:l, cursor:l, _selected:0, _opened:n, _finished:n, init:function(a, b, c, f, d) {
  this.superInit();
  this.titleText = a;
  this.menu = b;
  this._selected = ~~c;
  this.showExit = !!d;
  this.descriptions = f ? f : [].concat(b);
  this.showExit && (b.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"))
  }
}, update:function(a) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(a.frame / 2) % 2 : this.showExit && a.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") ? this.closeDialog(this._selected) : a.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = S(this._selected, 0, this.selections.length - 1)) : a.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = 
  S(this._selected, 0, this.selections.length - 1)))
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
function X(a, b, c, f, d, j, m) {
  m === i && (m = k);
  a.ag(ra(b, c, d, j, m), f)
}
;I = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, kd:0.85, size:0, image:l, Qa:k, init:function(a, b, c, f) {
  this.superInit();
  this.width = this.height = this.size = a;
  b !== i && (this.alpha = b);
  c !== i && (this.kd = c);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.kd;
  0.0010 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return I(this.size, this.vg, this.kd, this.image)
}});
F = tm.createClass({superClass:I, ra:l, init:function(a, b) {
  b = b || 20;
  this.superInit(b, 1, 0.82, tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element);
  this.ra = a
}, update:function(a) {
  this.superClass.prototype.update.apply(this, a);
  this.x += this.ra.ja;
  this.y += this.ra.ka + 0.3
}, clone:function(a) {
  return F(this.ra, a)
}});
var qa = tm.createClass({width:0, label:l, Ka:l, ga:0, init:function(a) {
  this.width = a;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Ka = []
}, kf:function(a, b) {
  b === k && (this.Ka.clear(), this.Ka.push(""));
  5 < this.Ka.length && this.Ka.splice(1, this.Ka.length - 4);
  this.Ka.push(a);
  return this
}, nf:function() {
  this.Ka.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var a = this.label.text, a = a.substring(0, a.length - 1);
  if(0 !== this.Ka.length) {
    if("" !== this.Ka[0]) {
      var b = this.Ka[0][0];
      this.Ka[0] = this.Ka[0].substring(1);
      a += b
    }else {
      this.Ka.shift(), b = a.split("\n"), 3 < b.length && (b.shift(), a = b.join("\n")), a += "\n"
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
function pa() {
  function a(a) {
    if(1 > a) {
      return l
    }
    var c = [], f = Math.random(), d, j;
    for(j = 0;256 > j;j += ~~a) {
      d = Math.random();
      for(var m = 0;m < a;m++) {
        c[j + m] = b(f, d, m / a)
      }
      f = d
    }
    f = c[256 - ~~a];
    d = c[0];
    for(m = 0;m < a;m++) {
      c[256 - ~~a + m] = b(f, d, m / a)
    }
    return c
  }
  function b(a, b, c) {
    c = 0.5 * (1 - Math.cos(c * Math.PI));
    return a * (1 - c) + b * c
  }
  for(var c = [], f = 0, d = Math.pow(2, 4);8 > f;f++, d *= 2) {
    var j = a(256 / d);
    if(j === l) {
      break
    }
    c.push(j)
  }
  j = [].concat(c[0]);
  f = 1;
  for(d = 0.5;f < c.length;f++, d *= 0.5) {
    for(var m = 0;256 > m;m++) {
      j[m] += c[f][m] * d
    }
  }
  for(f = 0;f < j.length;f++) {
    j[f] /= 2
  }
}
;(function() {
  var a = l, b = l;
  t = tm.createClass({superClass:W, result:l, ga:0, oc:[], Kc:n, fe:l, ke:0, Sc:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.fe = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Kc = n;
      for(var a = ("" + Math.floor(s.Oc)).padding(16, " "), b = "", d = 0;d < a.length;d += 4) {
        b += a.substring(d, d + 4) + " "
      }
      this.fe.text = "HIGH SCORE: " + b
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Md(80 * Math.cos(0.01 * this.ga) + 240, 80 * Math.sin(0.01 * this.ga) + 320, 0);
    this.Md(80 * Math.cos(0.01 * this.ga + Math.PI) + 240, 80 * Math.sin(0.01 * this.ga + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) && !this.Kc && this.pe();
    this.ga += 1
  }, Md:function(c, f, d) {
    if(!this.Kc) {
      a === l && (a = I(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === l && (b = I(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      d = 0 === d ? a.clone().addChildTo(this) : b.clone().addChildTo(this);
      d.speed = 0.6;
      var j = T(0, 2 * Math.PI), m = Y(0, 20);
      d.setPosition(Math.cos(j) * m + c, Math.sin(j) * m + f);
      var z = this;
      d.update = function() {
        this.x += Math.cos(j) * this.speed;
        this.y += Math.sin(j) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = z.oc.indexOf(this);
          -1 !== a && z.oc.splice(a, 1)
        }
      };
      this.oc.push(d)
    }
  }, pe:function() {
    X(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.Rf, this.ke, ["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"])
  }, Rf:function(a) {
    4 !== a && (this.ke = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Kc = k;
          for(var a = 0, b = this.oc.length;a < b;a++) {
            this.oc[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.ba.start(2);
          s.replaceScene(s.ba)
        }.bind(this));
        break;
      case 2:
        this.xb();
        break;
      case 3:
        s.uf()
    }
  }, xb:function() {
    X(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Ad, this.Sc, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
  }, Ad:function(a) {
    3 !== a && (this.Sc = a);
    switch(a) {
      case 0:
        this.Bd();
        break;
      case 1:
        this.Cd();
        break;
      case 2:
        this.Xf();
        break;
      default:
        this.pe()
    }
  }, Bd:function() {
    X(this, "BGM VOLUME", "012345".split(""), this.yd, s.Dc)
  }, yd:function(a) {
    6 !== a && (s.Dc = a);
    this.xb()
  }, Cd:function() {
    X(this, "SE VOLUME", "012345".split(""), this.zd, s.ac)
  }, zd:function(a) {
    6 !== a && (s.ac = a);
    this.xb()
  }, Xf:function() {
    X(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Qf, s.Yd, ["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"])
  }, Qf:function(a) {
    5 !== a && (s.Yd = a);
    this.xb()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
tm.createClass({superClass:W, init:function() {
  this.superInit();
  tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(240, 320).addChildTo(this)
}});
A = tm.createClass({superClass:W, aa:l, score:0, Ja:0, qa:0, Tc:0, Ca:0, Gb:0, cc:l, ra:l, Bb:3, Ya:0, gc:0, Rd:3, mf:6, Xb:n, Na:0, Qc:0, ua:n, nc:0, Wb:0, sd:l, qe:l, ae:l, od:l, Zd:l, Td:l, Jf:l, Rc:l, $b:l, init:function() {
  A.dd !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  A.dd = this;
  this.$b = ha(this);
  this.ra = ia().ea;
  this.ra.addChildTo(this);
  this.sd = A.rb().addChildTo(this);
  this.ae = A.rb().addChildTo(this);
  this.od = A.rb().addChildTo(this);
  this.qe = A.rb().addChildTo(this);
  this.Zd = A.rb().addChildTo(this);
  this.Td = A.rb().addChildTo(this);
  this.Jf = A.rb().addChildTo(this);
  tm.La.Cb.kc.Pd = this;
  this.Rc = tm.app.Object2D();
  this.Rc.addChildTo(this);
  this.Rc.update = function(a) {
    this.Tf(a)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.$b.clear()
  })
}, addChild:function(a) {
  a instanceof C ? this.qe.addChild(a) : a instanceof N ? this.sd.addChild(a) : a instanceof M ? a.ob ? this.sd.addChild(a) : this.ae.addChild(a) : a.Qa ? this.od.addChild(a) : a instanceof O ? this.Td.addChild(a) : a === this.Rc || a === this.ra || a instanceof A.rb ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(a)))
}, update:function(a) {
  this.cc.update(a.frame);
  this.ua && (this.Wb -= 1, 0 >= this.Wb && this.lc());
  this.nc = Math.max(this.nc - 1, 0);
  0 === a.frame % 5 && this.$b.update();
  this.Ca -= B.Ce * B.De;
  0 >= this.Ca && (this.Ca = 0, 0 < this.qa && (0 === this.Gb && (this.Gb = this.qa * B.Be), this.Ja = this.Ja * (this.qa - this.Gb) / this.qa, this.qa -= this.Gb, 0 > this.qa && (this.Gb = this.qa = this.Ja = 0)));
  if(a.keyboard.getKeyDown("escape")) {
    this.app.replaceScene(t())
  }else {
    if(a.keyboard.getKeyDown("space")) {
      this.Uc(0)
    }else {
      if(a.keyboard.getKeyDown("p")) {
        var b = tm.graphics.Canvas();
        b.resize(480, 640);
        b.clearColor("black");
        b.drawImage(this.ra.ra.element, 0, 0);
        b.drawImage(a.canvas.element, 0, 0);
        b.drawImage(this.$b.element, 0, 0);
        b.saveAsImage();
        this.Uc(0)
      }
    }
  }
}, Tf:function() {
  this.aa.lb === n && u.erase();
  var a;
  a = [].concat(M.Ga);
  for(var b = [].concat(H.Ga), c = b.length;b[--c] !== i;) {
    for(var f = a.length;a[--f] !== i;) {
      var d = a[f], j = b[c];
      if(!(0 >= d.Da) && V(d, j) && (j.Lc(1), j.remove(), d.Hb(this.ua ? B.Te : B.We))) {
        this.ua === n && this.fc(B.Pe);
        this.Mc(d.ob, n, d.x, d.y);
        this.Rb(1);
        this.Ja += d.score * (~~(this.qa / B.Zc) + 1);
        this.Sb(this.Ja);
        a.erase(d);
        break
      }
    }
  }
  j = this.aa.fb;
  if(this.aa.fb.visible) {
    a = [].concat(M.Ga);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = a.length;a[--f] !== i;) {
      if(d = a[f], !(0 >= d.Da) && V(d, j)) {
        j.Yf(d.y + d.boundingHeightBottom);
        d.Hb(this.ua ? B.Se : B.Ue) ? (this.fc(B.Ne), this.Mc(d.ob, n, d.x, d.y), this.Rb(1), this.Ja += d.score * (~~(this.qa / B.Zc) + 1), this.Sb(this.Ja)) : (this.Rb(0.01), this.Ca = Math.max(this.Ca, 0.05), this.fc(B.Oe));
        j.Lc(2);
        break
      }
    }
    b = {x:this.aa.x, y:this.aa.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(M.Ga);
    for(f = a.length;a[--f] !== i;) {
      d = a[f], !(0 >= d.Da) && V(d, b) && (d.Hb(this.ua ? B.Ke : B.ye) ? (this.fc(B.Le), this.Mc(d.ob, n, d.x, d.y), this.Rb(1), this.Ja += d.score * (~~(this.qa / B.Zc) + 1), this.Sb(this.Ja)) : (this.Rb(0.01), this.Ca = Math.max(this.Ca, 0.05), this.fc(B.Me)), j.Ff(2, this.aa.x, this.aa.y - 30))
    }
  }
  if(this.Xb) {
    u.erase();
    a = [].concat(M.Ga);
    for(f = a.length;a[--f] !== i;) {
      d = a[f], 0 >= d.Da || d.Ib() && d.Hb(B.ze)
    }
    this.Ca = this.qa = 0
  }
  if(this.ua) {
    f = [].concat(H.Ga);
    for(d = f.length;f[--d] !== i;) {
      j = f[d];
      b = [].concat(O.Ga);
      for(a = b.length;b[--a] !== i;) {
        c = b[a], V(j, c) && (c.Da -= 6 - this.Qc, 0 > c.Da && (j.remove(), c.mb(), this.Sb(B.Ae * this.qa), this.Rb(1), this.Mc(n, n, c.x, c.y)))
      }
    }
  }
  if(this.aa.Zb === n && this.Xb === n && 0 >= this.nc) {
    for(f = O.Ga.length;O.Ga[--f] !== i;) {
      if(a = O.Ga[f], V(a, this.aa)) {
        this.aa.Hb();
        0 < this.Ya ? (q.ma.sa.$rank = Math.clamp(q.ma.sa.$rank - 0.01, 0, 1), J(this.aa, this).setPosition(this.aa.x, this.aa.y).addChildTo(this)) : this.ne();
        break
      }
    }
    for(f = M.Ga.length;M.Ga[--f] !== i;) {
      if(d = M.Ga[f], !(0 >= d.Da) && !d.ob && V(d, this.aa)) {
        this.aa.Hb();
        0 < this.Ya ? (q.ma.sa.$rank = Math.clamp(q.ma.sa.$rank - 0.01, 0, 1), J(this.aa, this).setPosition(this.aa.x, this.aa.y).addChildTo(this)) : this.ne();
        break
      }
    }
  }
}, Mc:function(a, b, c, f) {
  a ? la(b).setPosition(c, f) : ka(b).setPosition(c, f)
}, start:function(a) {
  this.$b.jc.nf().clear();
  this.score = 0;
  this.Bb = 3;
  this.Ya = this.gc = this.Rd;
  this.Na = 0;
  this.aa !== l && this.aa.parent !== l && this.aa.remove();
  M.hc();
  H.hc();
  u.hc();
  for(var b = [].concat(this.od.children), c = 0;c < b.length;c++) {
    b[c].remove()
  }
  b = [].concat(this.Zd.children);
  for(c = 0;c < b.length;c++) {
    b[c].remove()
  }
  this.aa = C(this, a);
  this.bg(0);
  this.lc();
  this.Xb = n
}, bg:function(a) {
  this.Wa("3...2...1...");
  this.Qc = this.Tc = this.Ca = this.qa = this.Ja = 0;
  this.cc = K.create(this, a);
  this.tweener.clear().wait(1E3).call(function() {
    this.xd()
  }.bind(this))
}, xd:function() {
  this.Wa("Let's go!");
  this.aa.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.aa.lb = n;
  this.aa.Zb = k;
  this.aa.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.lb = k
  }.bind(this.aa)).wait(2E3).call(function() {
    this.Zb = n
  }.bind(this.aa));
  this.Ya = this.gc
}, ne:function() {
  w.qd(this.aa.x, this.aa.y, this);
  this.Wa("I was shot down.");
  this.aa.lb = n;
  this.aa.remove();
  this.Bb -= 1;
  this.Gb = this.qa = this.Ca = 0;
  q.ma.sa.$rank = Math.clamp(q.ma.sa.$rank - 0.03, 0, 1);
  0 < this.Bb ? this.tweener.clear().wait(1E3).call(function() {
    this.gc = Math.min(this.gc + 1, this.mf);
    this.xd()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.Wf()
  }.bind(this))
}, Df:function() {
  this.Wa("System rebooted.", k);
  this.Bb = 3;
  this.Ya = this.gc = this.Rd;
  this.xd()
}, ng:p(), Ef:function() {
  this.app.replaceScene(sa())
}, rg:p(), Sb:function(a) {
  var b = this.score;
  this.score += a;
  for(a = 0;a < s.ce.length;a++) {
    var c = s.ce[a];
    b < c && c <= this.score && this.xf()
  }
  s.Oc = Math.max(s.Oc, this.score)
}, Rb:function(a) {
  this.ua && (a *= B.Ee);
  this.Gb = 0;
  this.qa += a;
  this.Tc = Math.max(this.Tc, this.qa);
  1 <= a && (this.Ca = 1)
}, fc:function(a) {
  !(0 < a && 1 === this.Na) && !(0 > a && 0 === this.Na) && (this.ua && (a *= B.Re), this.Na = Math.clamp(this.Na + a * B.Qe, 0, 1), 1 === this.Na ? (this.Wa("hyper system, ready.", k), ga(this.aa).addChildTo(this)) : 0 === this.Na && this.lc())
}, $f:function() {
  this.Wa("'HYPER SYSTEM' start!!", k);
  this.ua = k;
  this.Na = 0;
  this.Qc = Math.min(this.Qc + 1, 5);
  q.ma.sa.$rank = Math.clamp(q.ma.sa.$rank + 0.01, 0, 1);
  q.ma.sa.$hyperOff = B.Ge;
  this.Wb = B.Hd;
  this.nc = B.Je;
  this.aa.Ub = this.aa.ge;
  this.aa.fb.qc("hyper");
  w.Gf(this.aa.x, this.aa.y, this)
}, lc:function() {
  this.ua !== n && (this.ua = n, ga(this.aa, k).addChildTo(this), this.aa.Ub = this.aa.oe, this.aa.fb.qc("blue"), q.ma.sa.$hyperOff = 1, this.nc = B.Ie, this.Wb = 0, u.erase())
}, xf:function() {
  this.Wa("Extended.");
  this.Bb += 1
}, Nf:function(a) {
  a.ie ? this.Sb(B.Ye * this.qa) : this.Sb(B.Xe * this.qa)
}, Wa:function(a, b) {
  this.$b.jc.kf(a, b)
}, Uc:function(a) {
  X(this, "PAUSE", ["resume", "setting", "exit game"], this.Sf, a, ["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], n)
}, Sf:function(a) {
  switch(a) {
    case 1:
      this.xb();
      break;
    case 2:
      this.Vf()
  }
}, xb:function() {
  X(this, "SETTING", ["bgm volume", "sound volume"], this.Ad, this.Sc, ["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"])
}, Ad:function(a) {
  3 !== a && (this.Sc = a);
  switch(a) {
    case 0:
      this.Bd();
      break;
    case 1:
      this.Cd();
      break;
    default:
      this.Uc()
  }
}, Vf:function() {
  X(this, "REARY?", ["yes", "no"], this.Of, 1, ["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], n)
}, Of:function(a) {
  0 === a ? this.app.replaceScene(t()) : this.Uc(1)
}, Bd:function() {
  X(this, "BGM VOLUME", "012345".split(""), this.yd, s.Dc)
}, yd:function(a) {
  6 !== a && (s.Dc = a);
  this.xb(1)
}, Cd:function() {
  X(this, "SE VOLUME", "012345".split(""), this.zd, s.ac)
}, zd:function(a) {
  6 !== a && (s.ac = a);
  this.xb(1)
}, Wf:function() {
  X(this, "CONTINUE?", ["yes", "no"], this.Pf, 0, ["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], n)
}, Pf:function(a) {
  switch(a) {
    case 0:
      this.Df();
      break;
    case 1:
      this.Ef()
  }
}, draw:function(a) {
  this.cc !== l && (a.clearColor(this.ra.background, 0, 0), this.qf(a), this.rf(a))
}, qf:function(a) {
  if(0 < this.Ca) {
    a.fillStyle = "rgba(255," + ~~(255 * this.Ca) + "," + ~~Math.min(255, 512 * this.Ca) + ",0.5)";
    var b = 500 * this.Ca;
    a.fillRect(465, 635 - b, 10, b)
  }
}, rf:function(a) {
  1 === this.Na ? 0 === this.app.frame % 2 && (a.fillStyle = "rgba(255,255,255,0.6)", a.fillRect(5, 628, 200, 9)) : (a.fillStyle = "rgba(255,255,0,0.3)", a.fillRect(5, 628, 200, 9), 0 < this.Na && (a.fillStyle = "rgba(255,255,100,1.0)", a.fillRect(5, 628, 200 * this.Na, 9)))
}});
A.rb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
A.dd = l;
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:p()});
var sa = tm.createClass({superClass:W, init:function() {
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
  a.clear()
}});
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:p()});
(function() {
  M = tm.createClass({superClass:tm.app.CanvasElement, frame:0, direction:0, speed:0, aa:l, ba:l, cc:l, da:l, ca:l, Da:0, nb:k, ob:n, score:0, Za:n, Xc:l, init:function(b, c, f, d) {
    this.superInit();
    this.addEventListener("completeattack", function() {
      this.pb()
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
    this.nb = k;
    this.Za = n;
    this.ba = b;
    this.aa = b.aa;
    this.cc = c;
    this.ca = f;
    this.da = d;
    this.score = 100;
    this.erase = n;
    this.ca.ta.apply(this);
    this.da.ta.apply(this);
    this.altitude = this.ob ? 1 : 10;
    this.Xc = {x:0, y:0}
  }, Jb:function() {
    this.ca.Jb.apply(this);
    this.da.Jb.apply(this);
    return this
  }, pb:function() {
    this.ca.pb.apply(this);
    this.da.pb.apply(this)
  }, update:function() {
    this.Za === n && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Za = k, this.ca.Kb.apply(this), this.da.Kb.apply(this));
    var a = this.x, c = this.y;
    this.ca.update.apply(this);
    this.da.update.apply(this);
    this.ob && (this.x += this.ba.ra.ja, this.y += this.ba.ra.ka);
    this.frame += 1;
    this.Xc.x = this.x - a;
    this.Xc.y = this.y - c
  }, Hb:function(a) {
    if(!this.Za) {
      return n
    }
    this.Da -= a;
    return 0 >= this.Da ? (a = T(0, 5), 2 > a ? this.ba.Wa("enemy destroy.") : 4 > a ? this.ba.Wa(this.name + " destroy.") : this.ba.Wa("ETR reaction gone."), this.cc.Mf(this), this.erase && u.erase(k), this.ca.mb.apply(this), this.da.mb.apply(this), k) : n
  }, draw:function(a) {
    this.da.draw.call(this, a)
  }, Ib:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Uf:function() {
    return this.nb
  }});
  M.hc = function() {
    for(var b = [].concat(a), c = 0, f = b.length;c < f;c++) {
      b[c].remove()
    }
  };
  var a = M.Ga = []
})();
(function() {
  function a(a, c) {
    c.name = a;
    c.Da = b[a][0];
    c.score = b[a][1];
    c.ob = b[a][2];
    c.erase = b[a][3]
  }
  var b = {kujo:[2, 100, n, n], kiryu:[3, 300, n, n], natsuki:[5, 300, k, n], kise:[30, 300, k, n], kurokawa:[60, 3E3, n, n], yukishiro:[1500, 5E4, n, k]};
  P = tm.createClass({ta:function() {
    this.name = "abstract enemy";
    this.Da = 9999
  }, Jb:p(), pb:p(), update:p(), Kb:p(), draw:p(), mb:function() {
    w.qd(this.x, this.y, this.ba, this.Xc);
    this.remove()
  }});
  P.va = tm.createClass({superClass:P, init:function() {
    this.superInit()
  }, ta:function() {
    a("kujo", this);
    this.oa = c("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.aa.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.oa.setFrameIndex(7) : this.oa.setFrameIndex(8);
    this.oa.draw(a)
  }});
  P.va = P.va();
  P.ha = tm.createClass({superClass:P, init:function() {
    this.superInit()
  }, ta:function() {
    a("kiryu", this);
    this.oa = c("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.aa.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.oa.setFrameIndex(9) : this.oa.setFrameIndex(10);
    this.oa.draw(a)
  }});
  P.ha = P.ha();
  P.wa = tm.createClass({superClass:P, init:function() {
    this.superInit()
  }, ta:function() {
    a("natsuki", this);
    this.oa = c("tex1", 48, 48);
    this.boundingRadius = 24
  }, update:function() {
    switch(~~(this.dir / (0.25 * Math.PI))) {
      case 0:
        this.oa.setFrameIndex(16, 64, 64);
        break;
      case 1:
        this.oa.setFrameIndex(24, 64, 64);
        break;
      case 2:
        this.oa.setFrameIndex(23, 64, 64);
        break;
      case 3:
        this.oa.setFrameIndex(11, 64, 64);
        break;
      case 4:
        this.oa.setFrameIndex(12, 64, 64);
        break;
      case 5:
        this.oa.setFrameIndex(13, 64, 64);
        break;
      case 6:
        this.oa.setFrameIndex(14, 64, 64);
        break;
      case 7:
        this.oa.setFrameIndex(15, 64, 64)
    }
  }, draw:function(a) {
    this.oa.draw(a)
  }, mb:function() {
    w.vf(this.x, this.y, this.ba);
    this.remove()
  }});
  P.wa = P.wa();
  P.ib = tm.createClass({superClass:P, init:function() {
    this.superInit()
  }, ta:function() {
    a("kurokawa", this);
    this.oa = c("tex1", 128, 128);
    this.oa.srcRect.x = 320;
    this.oa.srcRect.y = 128;
    this.oa.srcRect.width = 128;
    this.oa.srcRect.height = 128;
    this.boundingWidth = 100;
    this.boundingHeight = 20
  }, update:p(), draw:function(a) {
    this.oa.draw(a)
  }, mb:function() {
    w.be(this.x, this.y, this.ba);
    this.remove()
  }});
  P.ib = P.ib();
  P.na = tm.createClass({superClass:P, init:function() {
    this.superInit()
  }, ta:function() {
    a("kise", this);
    this.boundingHeight = this.boundingWidth = 20
  }, draw:function(a) {
    a.strokeStyle = "yellow";
    a.strokeRect(-10, -10, 20, 20)
  }});
  P.na = P.na();
  P.dc = tm.createClass({superClass:P, init:function() {
    this.superInit()
  }, ta:function() {
    a("yukishiro", this);
    this.boundingWidth = 200;
    this.boundingHeight = 80
  }, mb:function() {
    this.remove();
    this.ob = k;
    this.ba.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && w.qd(this.x + Math.rand(-100, 100), this.y + Math.rand(-40, 40), this.ba, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:0, y:this.y + 200, rotation:10}, 2E3).call(function() {
      w.be(this.x, this.y, this.ba);
      this.remove()
    }.bind(this))
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-100, -40, 200, 80)
  }});
  P.dc = P.dc();
  var c = tm.createClass({superClass:tm.app.Sprite, init:function(a, b, c) {
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
        b[d] && b[d].vd && a.removeEventListener("enterframe", b[d])
      }
    }
  }
  function b(a, b) {
    var d = u[b].Hc();
    a.addEventListener("enterframe", d);
    a.addEventListener("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  }
  Q = tm.createClass({ta:p(), Jb:p(), pb:p(), update:p(), Kb:p(), mb:function() {
    a(this)
  }});
  Q.Sa = tm.createClass({superClass:Q, init:function() {
    this.superInit()
  }, Jb:function() {
    var a = T(64, 192);
    this.tweener.clear().wait(Y(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, pb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  Q.Sa = Q.Sa();
  Q.qb = tm.createClass({superClass:Q, init:function() {
    this.superInit()
  }, Jb:function() {
    var a = T(192, 320);
    this.tweener.clear().wait(Y(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, pb:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  Q.qb = Q.qb();
  Q.ha = tm.createClass({superClass:Q, init:function() {
    this.superInit()
  }, ta:function() {
    this.angle = 0.5 * Math.PI;
    this.Ed = Y(0, 60);
    this.speed = 0
  }, update:function() {
    this.frame === this.Ed ? this.speed = 8 : this.frame === this.Ed + 10 ? b(this, "basic1-0") : this.Ed < this.frame && this.y < this.aa.y && (this.angle += Math.atan2(this.aa.y - this.y, this.aa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = S(this.angle, 0.5, Math.PI - 0.5));
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    !this.Ib() && this.Za && this.remove();
    if(9E4 > na(this, this.aa) || this.y > this.aa.y) {
      this.nb = n
    }
  }});
  Q.ha = Q.ha();
  Q.fg = tm.createClass({superClass:Q, init:function() {
    this.superInit()
  }, ta:function() {
    this.speed = 0.8;
    this.dir = 0
  }, Kb:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.Za && !this.Ib() && this.remove();
    this.nb = this.y < this.aa.y
  }});
  Q.Pa = tm.createClass({superClass:Q, init:function() {
    this.superInit()
  }, ta:function() {
    this.speed = 0.7;
    this.dir = 0.25 * Math.PI
  }, Kb:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.Za && !this.Ib() && this.remove();
    this.nb = this.y < this.aa.y
  }});
  Q.Pa = Q.Pa();
  Q.Db = tm.createClass({superClass:Q, init:function() {
    this.superInit()
  }, ta:function() {
    this.speed = 1;
    this.dir = Math.PI
  }, Kb:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.Za && !this.Ib() && this.remove();
    this.nb = this.y < this.aa.y
  }});
  Q.Db = Q.Db();
  Q.na = tm.createClass({superClass:Q, init:function() {
    this.superInit()
  }, ta:function() {
    this.speed = 1;
    this.dir = Math.PI
  }, Kb:function() {
    b(this, "basic3-0")
  }, update:function() {
    this.Za && !this.Ib() && this.remove();
    this.nb = this.y < this.aa.y
  }});
  Q.na = Q.na();
  Q.jb = tm.createClass({superClass:Q, init:function() {
    this.superInit()
  }, ta:function() {
    this.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      b(this, "kurokawa-1")
    }.bind(this))
  }, update:function() {
    this.y += 0.5;
    this.Za && !this.Ib() && this.remove();
    this.nb = this.y < this.aa.y
  }});
  Q.jb = Q.jb();
  Q.Ve = tm.createClass({superClass:Q, Dd:l, init:function(a) {
    this.superInit();
    this.Dd = a
  }, ta:function() {
    this.pd = this.te = n;
    this.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.te = k;
      this.pb();
      var a = function() {
        var b = 2 * Math.random() * Math.PI, d = Math.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(this))
  }, update:function() {
    if(!(this.te === n || 0 >= this.Da) && 1500 < this.frame && this.pd === n) {
      console.log("end"), this.pd = k, a(this), this.tweener.clear().move(this.x, -100, 1200, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    }
  }, pb:function() {
    if(!this.pd) {
      var a = this.ca.Dd.shift();
      b(this, a);
      this.ca.Dd.push(a)
    }
  }});
  Q.dc = Q.Ve(["honoka-1"])
})();
var Z = Q, $ = P;
ea = {"heri1-left":[{ca:Z.Sa, da:$.ha, x:48, y:-100}, {ca:Z.qb, da:$.ha, x:96, y:-100}, {ca:Z.Sa, da:$.ha, x:144, y:-100}, {ca:Z.qb, da:$.ha, x:192, y:-100}, {ca:Z.Sa, da:$.ha, x:240, y:-100}], "heri1-center":[{ca:Z.Sa, da:$.ha, x:144, y:-100}, {ca:Z.qb, da:$.ha, x:192, y:-100}, {ca:Z.Sa, da:$.ha, x:240, y:-100}, {ca:Z.qb, da:$.ha, x:288, y:-100}, {ca:Z.Sa, da:$.ha, x:336, y:-100}], "heri1-right":[{ca:Z.Sa, da:$.ha, x:240, y:-100}, {ca:Z.qb, da:$.ha, x:288, y:-100}, {ca:Z.Sa, da:$.ha, x:336, y:-100}, 
{ca:Z.qb, da:$.ha, x:384, y:-100}, {ca:Z.Sa, da:$.ha, x:432, y:-100}], "heri2-left":[{ca:Z.ha, da:$.va, x:48, y:-100}, {ca:Z.ha, da:$.va, x:96, y:-100}, {ca:Z.ha, da:$.va, x:144, y:-100}, {ca:Z.ha, da:$.va, x:192, y:-100}, {ca:Z.ha, da:$.va, x:240, y:-100}], "heri2-center":[{ca:Z.ha, da:$.va, x:144, y:-100}, {ca:Z.ha, da:$.va, x:192, y:-100}, {ca:Z.ha, da:$.va, x:240, y:-100}, {ca:Z.ha, da:$.va, x:288, y:-100}, {ca:Z.ha, da:$.va, x:336, y:-100}], "heri2-right":[{ca:Z.ha, da:$.va, x:240, y:-100}, 
{ca:Z.ha, da:$.va, x:288, y:-100}, {ca:Z.ha, da:$.va, x:336, y:-100}, {ca:Z.ha, da:$.va, x:384, y:-100}, {ca:Z.ha, da:$.va, x:432, y:-100}], "tankRD-left":[{ca:Z.Pa, da:$.wa, x:78, y:-50}, {ca:Z.Pa, da:$.wa, x:28, y:-100}, {ca:Z.Pa, da:$.wa, x:-22, y:-150}, {ca:Z.Pa, da:$.wa, x:-72, y:-200}, {ca:Z.Pa, da:$.wa, x:-122, y:-250}], "tankRD-center":[{ca:Z.Pa, da:$.wa, x:222, y:-50}, {ca:Z.Pa, da:$.wa, x:172, y:-100}, {ca:Z.Pa, da:$.wa, x:122, y:-150}, {ca:Z.Pa, da:$.wa, x:72, y:-200}, {ca:Z.Pa, da:$.wa, 
x:22, y:-250}], "tankL-top":[{ca:Z.Db, da:$.wa, x:550, y:-128}, {ca:Z.Db, da:$.wa, x:620, y:-128}, {ca:Z.Db, da:$.wa, x:690, y:-128}, {ca:Z.Db, da:$.wa, x:760, y:-128}, {ca:Z.Db, da:$.wa, x:830, y:-128}], "cannon-0":[{ca:Z.na, da:$.na, x:48, y:-100}], "cannon-1":[{ca:Z.na, da:$.na, x:96, y:-100}], "cannon-2":[{ca:Z.na, da:$.na, x:144, y:-100}], "cannon-3":[{ca:Z.na, da:$.na, x:192, y:-100}], "cannon-4":[{ca:Z.na, da:$.na, x:240, y:-100}], "cannon-5":[{ca:Z.na, da:$.na, x:288, y:-100}], "cannon-6":[{ca:Z.na, 
da:$.na, x:336, y:-100}], "cannon-7":[{ca:Z.na, da:$.na, x:384, y:-100}], "cannon-8":[{ca:Z.na, da:$.na, x:432, y:-100}], "fighter-m-0":[{ca:Z.jb, da:$.ib, x:96, y:-192}], "fighter-m-1":[{ca:Z.jb, da:$.ib, x:144, y:-192}], "fighter-m-2":[{ca:Z.jb, da:$.ib, x:192, y:-192}], "fighter-m-3":[{ca:Z.jb, da:$.ib, x:240, y:-192}], "fighter-m-4":[{ca:Z.jb, da:$.ib, x:288, y:-192}], "fighter-m-5":[{ca:Z.jb, da:$.ib, x:336, y:-192}], "fighter-m-6":[{ca:Z.jb, da:$.ib, x:384, y:-192}], yukishiro:[{ca:Z.dc, da:$.dc, 
x:240, y:-100}]};
(function() {
  function a(a, b, c, d, f) {
    return h.action([h.pa(h.direction(a, "absolute"), c, d, f, i, i), h.repeat(12, [h.pa(h.direction((b - a) / 12, "sequence"), c, d, f, i, i)])])
  }
  function b(a, b, c, d, f) {
    return h.action([h.pa(h.direction(b), d, f, i, i, i), h.repeat(a, [h.pa(h.direction((c - b) / a, "sequence"), d, f, i, i, i)])])
  }
  function c(a) {
    return h.pa(h.direction(0), a || j, h.fa({frame:0}))
  }
  function f(a) {
    return h.pa(h.direction(0), a || j, h.fa)
  }
  function d(a) {
    return h.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function j(a) {
    return h.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function m(a) {
    return h.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function z(a) {
    return h.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return h.wait(a + "*(1-$rank)*$hyperOff")
  }
  u = {};
  var h = q.la;
  u["basic0-0"] = new q.za({top:h.action([f])});
  u["basic0-4"] = new q.za({top:h.action([h.repeat(3, [h.repeat(5, [h.pa(h.direction(-20), h.speed("$loop.count*0.06+0.75"), h.fa), h.pa(h.direction(0), h.speed("$loop.count*0.06+0.75"), h.fa), h.pa(h.direction(20), h.speed("$loop.count*0.06+0.75"), h.fa)]), r(40)])])});
  u["basic1-0"] = new q.za({top:h.action([h.repeat(999, [r(20), f(function(a) {
    return h.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  })])])});
  u["basic2-0"] = new q.za({top:h.action([h.wait("120"), h.repeat(999, [r(50), f(d)])])});
  u["basic3-0"] = new q.za({top:h.action([h.wait(20), h.repeat(999, [r(100), c(d(0)), c(d(1)), c(d(2))])])});
  u["kurokawa-1"] = new q.za({top0:h.action([h.repeat(3, [h.repeat(3, [h.repeat(3, [h.pa(h.direction(-45), d("$loop.count"), h.fa({frame:2}), h.offsetX(-45), h.Ba(k)), h.pa(h.direction(-15), d("$loop.count"), h.fa({frame:2}), h.offsetX(-45), h.Ba(k)), h.pa(h.direction(15), d("$loop.count"), h.fa({frame:2}), h.offsetX(-45), h.Ba(k)), h.pa(h.direction(45), d("$loop.count"), h.fa({frame:2}), h.offsetX(-45), h.Ba(k)), h.pa(h.direction(-45), d("$loop.count"), h.fa({frame:2}), h.offsetX(45), h.Ba(k)), 
  h.pa(h.direction(-15), d("$loop.count"), h.fa({frame:2}), h.offsetX(45), h.Ba(k)), h.pa(h.direction(15), d("$loop.count"), h.fa({frame:2}), h.offsetX(45), h.Ba(k)), h.pa(h.direction(45), d("$loop.count"), h.fa({frame:2}), h.offsetX(45), h.Ba(k))]), r(90)]), r(120)])]), top1:h.action([h.repeat(3, [h.pa(h.direction(0), d, h.fa({Tb:k, frame:3}), h.offsetX(-45), h.Ba(k)), r(45), h.pa(h.direction(0), d, h.fa({Tb:k, frame:3}), h.offsetX(45), h.Ba(k)), r(45)])])});
  u["honoka-1"] = new q.za({top0:h.action([h.wait(60), h.repeat(10, [b(6, -40, 40, j, h.fa({Tb:k, frame:4})), r(30), b(7, -40, 40, m, h.fa({Tb:k, frame:4})), r(30)])]), top1:h.action([h.wait(60), h.repeat(5, [b(2, -2, 2, m(2), h.fa({frame:1})), b(3, -3, 3, m(3), h.fa({frame:1})), b(4, -4, 4, m(4), h.fa({frame:1})), b(5, -5, 5, m(5), h.fa({frame:1})), r(110)])]), top2:h.action([h.repeat(20, [a(-10, -170, z, h.fa({Tb:k, frame:0}), h.offsetX(-80)), r(30)])]), top3:h.action([h.repeat(20, [a(10, 170, 
  z, h.fa({Tb:k, frame:0}), h.offsetX(80)), r(30)])])});
  u.ta = function() {
    for(var a = 0;500 > a;a++) {
      v.push(O())
    }
    a = u.Gc = tm.La.Cb.kc;
    a.wd = function(a) {
      return!(a instanceof O) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Sd = function(a) {
      var b = v.shift(0);
      if(b) {
        return L.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.Tb ? (b.scaleX = 1, b.scaleY = 1, b.Ab = n, b.update = function() {
          this.rotation += 15
        }) : (b.scaleX = 0.8, b.scaleY = 1.5, b.Ab = k), b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Vd = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.Nb = 4;
    q.ma.sa.$rank = 0;
    q.ma.sa.$hyperOff = 1
  };
  u.erase = function(a) {
    for(var b = [].concat(L), c = 0, d = b.length;c < d;c++) {
      a && ka(n).setPosition(b[c].x, b[c].y), b[c].mb()
    }
  };
  u.hc = function() {
    for(var a = [].concat(L), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  O = tm.createClass({superClass:tm.app.Sprite, Da:0, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("added", function() {
      this.Da = 40
    });
    this.addEventListener("removed", function() {
      v.push(this);
      var a = L.indexOf(this);
      -1 !== a && L.splice(a, 1);
      this.clearEventListener("enterframe")
    })
  }, mb:function() {
    var a = I(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var v = [], L = O.Ga = []
})();
var S, T, oa, Y, ta;
S = function(a, b, c) {
  return a < b ? b : a > c ? c : a
};
ta = Math.PI / 180;
oa = function(a) {
  return a * ta
};
Y = function(a, b) {
  return window.Math.floor(Math.random() * (b - a + 1)) + a
};
T = function(a, b) {
  return window.Math.random() * (b - a) + a
};

