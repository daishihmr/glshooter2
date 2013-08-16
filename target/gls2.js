/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(a) {
  throw a;
}
var i = void 0, k = !0, l = null, m = !1;
function n() {
  return function() {
  }
}
var q = {vf:this};
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
    this.Ea = [];
    this.cd = [];
    this.hd = [];
    if(a !== i) {
      for(var c in a) {
        a.hasOwnProperty(c) && (a[c].label = c, a[c] instanceof q.Ua ? this.Ea.push(a[c]) : a[c] instanceof q.Bb ? this.cd.push(a[c]) : a[c] instanceof q.bc && this.hd.push(a[c]))
      }
      a = 0;
      for(c = this.Ea.length;a < c;a++) {
        this.Ea[a].Ya(this)
      }
      a = 0;
      for(c = this.cd.length;a < c;a++) {
        this.cd[a].Ya(this)
      }
      a = 0;
      for(c = this.hd.length;a < c;a++) {
        this.hd[a].Ya(this)
      }
    }
  };
  q.za.prototype.Ie = function(b) {
    return a(this.Ea, b)
  };
  q.za.prototype.Ag = function() {
    for(var a = [], c = 0, f = this.Ea.length;c < f;c++) {
      var d = this.Ea[c];
      d.label && 0 === d.label.indexOf("top") && (a[a.length] = d.label)
    }
    return a
  };
  q.za.prototype.rg = function(a) {
    var c;
    if(c = this.Ie(a)) {
      return c
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  q.za.prototype.sg = function(b) {
    return a(this.cd, b)
  };
  q.za.prototype.tg = function(a) {
    var c;
    if(c = this.sg(a)) {
      return c
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  q.za.prototype.ug = function(b) {
    return a(this.hd, b)
  };
  q.za.prototype.vg = function(a) {
    var c;
    if(c = this.ug(a)) {
      return c
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  q.Bb = function() {
    this.root = this.label = l;
    this.direction = new q.tb(0);
    this.speed = new q.wb(1);
    this.Ea = [];
    this.Ka = {};
    this.ja = {}
  };
  q.Bb.prototype.clone = function(a) {
    var c = new q.Bb;
    c.label = this.label;
    c.root = this.root;
    c.Ea = this.Ea;
    c.direction = new q.tb(a.Ha(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new q.wb(a.Ha(this.speed.value));
    c.speed.type = this.speed.type;
    c.Ka = this.Ka;
    c.ja = a.ja;
    return c
  };
  q.Bb.prototype.Ya = function(a) {
    this.root = a;
    for(var c = 0, f = this.Ea.length;c < f;c++) {
      this.Ea[c].Ya(a)
    }
  };
  q.Mc = function(a) {
    this.root = l;
    this.label = a;
    this.Ca = []
  };
  q.Mc.prototype.clone = function(a) {
    var c = a.ja;
    a.ja = a.Kd(this.Ca);
    var f = this.root.tg(this.label).clone(a);
    a.ja = c;
    return f
  };
  q.Mc.prototype.Ya = function(a) {
    this.root = a
  };
  q.Da = function() {
    this.Pa = ""
  };
  q.Da.prototype.Ya = function(a) {
    this.root = a
  };
  q.Ua = function() {
    this.Pa = "action";
    this.root = this.label = l;
    this.ab = [];
    this.Ca = []
  };
  q.Ua.prototype = new q.Da;
  q.Ua.prototype.Ya = function(a) {
    this.root = a;
    for(var c = 0, f = this.ab.length;c < f;c++) {
      this.ab[c].Ya(a)
    }
  };
  q.Ua.prototype.clone = function() {
    var a = new q.Ua;
    a.label = this.label;
    a.root = this.root;
    a.ab = this.ab;
    return a
  };
  q.ac = function(a) {
    this.Pa = "actionRef";
    this.label = a;
    this.root = l;
    this.Ca = []
  };
  q.ac.prototype = new q.Da;
  q.ac.prototype.clone = function() {
    var a = new q.Ua;
    a.root = this.root;
    a.ab.push(this);
    return a
  };
  q.bc = function() {
    this.Pa = "fire";
    this.ga = this.speed = this.direction = this.root = this.label = l;
    this.Ka = new q.Bd
  };
  q.bc.prototype = new q.Da;
  q.bc.prototype.Ya = function(a) {
    this.root = a;
    this.ga && this.ga.Ya(a)
  };
  q.Cd = function(a) {
    this.Pa = "fireRef";
    this.label = a;
    this.Ca = []
  };
  q.Cd.prototype = new q.Da;
  q.Nc = function() {
    this.Pa = "changeDirection";
    this.direction = new q.tb;
    this.La = 0
  };
  q.Nc.prototype = new q.Da;
  q.Oc = function() {
    this.Pa = "changeSpeed";
    this.speed = new q.wb;
    this.La = 0
  };
  q.Oc.prototype = new q.Da;
  q.Lc = function() {
    this.Pa = "accel";
    this.ob = new q.Dd;
    this.sb = new q.Id;
    this.La = 0
  };
  q.Lc.prototype = new q.Da;
  q.Vc = function(a) {
    this.Pa = "wait";
    this.value = a || 0
  };
  q.Vc.prototype = new q.Da;
  q.Hd = function() {
    this.Pa = "vanish"
  };
  q.Hd.prototype = new q.Da;
  q.Tc = function() {
    this.Pa = "repeat";
    this.ef = 0;
    this.action = l;
    this.Ca = []
  };
  q.Tc.prototype = new q.Da;
  q.Tc.prototype.Ya = function(a) {
    this.root = a;
    this.action && this.action.Ya(a)
  };
  q.Ad = function(a, c) {
    this.Pa = "bind";
    this.$g = a;
    this.pg = c
  };
  q.Ad.prototype = new q.Da;
  q.Gd = function(a, c) {
    this.Pa = "notify";
    this.lg = a;
    this.Ca = c || l
  };
  q.Gd.prototype = new q.Da;
  q.tf = new q.Da;
  q.tb = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  q.wb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  q.Dd = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.Id = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.Bd = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.Ma = k;
    a.Ma !== i && (this.Ma = !!a.Ma)
  };
  q.pe = function(a) {
    this.value = a || 0
  };
  q.qe = function(a) {
    this.value = a || 0
  };
  q.le = function(a) {
    this.value = !!a
  }
})();
q.la = function(a) {
  this.ue = a;
  this.Wc = [];
  this.Db = -1;
  this.Ga = l;
  this.ja = {}
};
q.la.prototype.next = function() {
  this.Db += 1;
  if(this.Ga !== l) {
    var a = this.Ga.ab[this.Db];
    if(a !== i) {
      if(a instanceof q.Ua) {
        return this.pc(), this.Ga = a, this.ja = this.Jd(), this.next()
      }
      if(a instanceof q.ac) {
        return this.pc(), this.Ga = this.ue.rg(a.label), this.ja = this.Kd(a.Ca), this.next()
      }
      if(a instanceof q.Tc) {
        return this.ja.jc = 0, this.ja.Se = this.Ha(a.ef) | 0, this.pc(), this.Ga = a.action.clone(), this.ja = this.Jd(), this.next()
      }
      if(a instanceof q.bc) {
        var b = new q.bc;
        b.ga = a.ga.clone(this);
        a.direction !== l && (b.direction = new q.tb(this.Ha(a.direction.value)), b.direction.type = a.direction.type);
        a.speed !== l && (b.speed = new q.wb(this.Ha(a.speed.value)), b.speed.type = a.speed.type);
        b.Ka = a.Ka;
        return b
      }
      return a instanceof q.Cd ? (this.pc(), this.Ga = new q.Ua, this.Ga.ab = [this.ue.vg(a.label)], this.ja = this.Kd(a.Ca), this.next()) : a instanceof q.Nc ? (b = new q.Nc, b.direction.type = a.direction.type, b.direction.value = this.Ha(a.direction.value), b.La = this.Ha(a.La), b) : a instanceof q.Oc ? (b = new q.Oc, b.speed.type = a.speed.type, b.speed.value = this.Ha(a.speed.value), b.La = this.Ha(a.La), b) : a instanceof q.Lc ? (b = new q.Lc, b.ob.type = a.ob.type, b.ob.value = this.Ha(a.ob.value), 
      b.sb.type = a.sb.type, b.sb.value = this.Ha(a.sb.value), b.La = this.Ha(a.La), b) : a instanceof q.Vc ? new q.Vc(this.Ha(a.value)) : a instanceof q.Hd ? a : a instanceof q.Ad ? (this.ja["$" + a.$g] = this.Ha(a.pg), q.tf) : a instanceof q.Gd ? a : l
    }
    this.ag();
    if(this.Ga === l) {
      return l
    }
    if((a = this.Ga.ab[this.Db]) && "repeat" == a.Pa) {
      this.ja.jc++, this.ja.jc < this.ja.Se && (this.pc(), this.Ga = a.action.clone(), this.ja = this.Jd())
    }
    return this.next()
  }
  return l
};
q.la.prototype.pc = function() {
  this.Wc.push({action:this.Ga, cursor:this.Db, scope:this.ja});
  this.Db = -1
};
q.la.prototype.ag = function() {
  var a = this.Wc.pop();
  a ? (this.Db = a.cursor, this.Ga = a.action, this.ja = a.scope) : (this.Db = -1, this.Ga = l, this.ja = {})
};
q.la.prototype.Ha = function(a) {
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
  (c = this.Wc[this.Wc.length - 1]) && (b.$loop = {index:c.scope.jc, count:c.scope.jc + 1, first:0 === c.scope.jc, last:c.scope.jc + 1 >= c.scope.Se});
  return(new Function("return " + a.split("$").join("this.$"))).apply(b)
};
q.la.prototype.Kd = function(a) {
  var b = {};
  if(a) {
    for(var c = 0, f = a.length;c < f;c++) {
      b["$" + (c + 1)] = this.Ha(a[c])
    }
  }else {
    for(c in this.ja) {
      this.ja.hasOwnProperty(c) && (b[c] = this.ja[c])
    }
  }
  return b
};
q.la.prototype.Jd = function() {
  var a = {}, b;
  for(b in this.ja) {
    this.ja.hasOwnProperty(b) && (a[b] = this.ja[b])
  }
  return a
};
q.za.prototype.Td = function(a) {
  var b = new q.la(this);
  if(a = this.Ie(a)) {
    b.Ga = a
  }
  return b
};
q.Bb.prototype.Td = function() {
  var a = new q.la(this.root), b = new q.Ua;
  b.root = this.root;
  b.ab = this.Ea;
  a.Ga = b;
  a.ja = this.ja;
  return a
};
q.la.ua = {};
q.pa = function(a) {
  a = a || "";
  for(var b in q.pa) {
    q.pa.hasOwnProperty(b) && (q.vf[a + b] = q.pa[b])
  }
};
q.pa.action = function(a) {
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
  var f = new q.Ua;
  if(a instanceof Array) {
    a.some(function(a) {
      return!(a instanceof q.Da)
    }) && g(Error("argument type error.")), f.ab = a
  }else {
    b = 0;
    for(c = arguments.length;b < c;b++) {
      arguments[b] instanceof q.Da ? f.ab[b] = arguments[b] : g(Error("argument type error."))
    }
  }
  return f
};
q.pa.hh = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("label is required."));
  f = new q.ac(a);
  if(b instanceof Array) {
    f.Ca = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ca.push(arguments[c])
    }
  }
  return f
};
q.pa.ga = function(a, b, c, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new q.Bb;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof q.tb ? j.direction = arguments[d] : arguments[d] instanceof q.wb ? j.speed = arguments[d] : arguments[d] instanceof q.Ua ? j.Ea.push(arguments[d]) : arguments[d] instanceof q.ac ? j.Ea.push(arguments[d]) : arguments[d] instanceof Array ? j.Ea.push(q.pa.action(arguments[d])) : arguments[d] instanceof Object ? j.Ka = arguments[d] : "string" === typeof arguments[d] && (j.label = arguments[d])
  }
  return j
};
q.pa.jh = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("label is required."));
  f = new q.Mc(a);
  if(b instanceof Array) {
    f.Ca = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ca.push(arguments[c])
    }
  }
  return f
};
q.pa.ka = function(a, b, c, f) {
  for(var d = 0, j = arguments.length;d < j;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  j = new q.bc;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof q.tb ? j.direction = arguments[d] : arguments[d] instanceof q.wb ? j.speed = arguments[d] : arguments[d] instanceof q.Bb ? j.ga = arguments[d] : arguments[d] instanceof q.Mc ? j.ga = arguments[d] : arguments[d] instanceof q.Bd ? j.Ka = arguments[d] : arguments[d] instanceof q.pe ? j.Ka.offsetX = arguments[d].value : arguments[d] instanceof q.qe ? j.Ka.offsetY = arguments[d].value : arguments[d] instanceof q.le && (j.Ka.Ma = arguments[d].value)
  }
  j.ga === i && g(Error("bullet (or bulletRef) is required."));
  return j
};
q.pa.oh = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("label is required."));
  f = new q.Cd(a);
  if(b instanceof Array) {
    f.Ca = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      f.Ca.push(arguments[c])
    }
  }
  return f
};
q.pa.kh = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("direction is required."));
  b === i && g(Error("term is required."));
  c = new q.Nc;
  c.direction = a instanceof q.tb ? a : new q.tb(a);
  c.La = b;
  return c
};
q.pa.lh = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("speed is required."));
  b === i && g(Error("term is required."));
  c = new q.Oc;
  c.speed = a instanceof q.wb ? a : new q.wb(a);
  c.La = b;
  return c
};
q.pa.gh = function(a, b, c) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  d = new q.Lc;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof q.Dd ? d.ob = a : arguments[f] instanceof q.Id ? d.sb = b : d.La = arguments[f]
  }
  d.ob === i && d.sb === i && g(Error("horizontal or vertical is required."));
  d.La === i && g(Error("term is required."));
  return d
};
q.pa.wait = function(a) {
  for(var b = 0, c = arguments.length;b < c;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && g(Error("value is required."));
  return new q.Vc(a)
};
q.pa.xh = function() {
  return new q.Hd
};
q.pa.repeat = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("times is required."));
  b === i && g(Error("action is required."));
  f = new q.Tc;
  f.ef = a;
  if(b instanceof q.Ua || b instanceof q.ac) {
    f.action = b
  }else {
    if(b instanceof Array) {
      f.action = q.pa.action(b)
    }else {
      for(var d = [], c = 1;c < arguments.length;c++) {
        d.push(arguments[c])
      }
      f.action = q.pa.action(d)
    }
  }
  return f
};
q.pa.ih = function(a, b) {
  return new q.Ad(a, b)
};
q.pa.uh = function(a, b) {
  return new q.Gd(a, b)
};
q.pa.direction = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.tb(a);
  b !== i && (c.type = b);
  return c
};
q.pa.speed = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.wb(a);
  b && (c.type = b);
  return c
};
q.pa.ob = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.Dd(a);
  b && (c.type = b);
  return c
};
q.pa.sb = function(a, b) {
  for(var c = 0, f = arguments.length;c < f;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && g(Error("value is required."));
  c = new q.Id(a);
  b && (c.type = b);
  return c
};
q.pa.nh = function(a) {
  return new q.Bd(a)
};
q.pa.offsetX = function(a) {
  return new q.pe(a)
};
q.pa.offsetY = function(a) {
  return new q.qe(a)
};
q.pa.Ma = function(a) {
  return new q.le(a)
};
tm.Oa = tm.Oa || {};
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
  tm.Oa.Pb = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.re = a
  }, ed:function(a, c) {
    var b = this.re.Ag();
    if(c === i && 0 < b.length) {
      for(var f = [], s = 0, w = b.length;s < w;s++) {
        f[f.length] = this.se(a, b[s])
      }
      for(var h = function() {
        for(var a = f.length;a--;) {
          f[a].call(this)
        }
        h.Qd == f.length && (h.uc = k, this.dispatchEvent(tm.event.Event("completeattack")))
      }, s = f.length;s--;) {
        f[s].td = h
      }
      h.Qd = 0;
      h.ze = function() {
        this.Qd++
      };
      h.Qd = 0;
      h.uc = m;
      h.pd = k;
      return h
    }
    return this.se(a, c)
  }, se:function(a, c) {
    function b() {
      b.ha += 1;
      this.ha = b.ha;
      var a = b.dd, c = b.$f;
      if(c) {
        if(b.ha < b.Od ? b.direction += b.ec : b.ha === b.Od && (b.direction = b.Gb), b.ha < b.Pd ? b.speed += b.Kc : b.ha === b.Pd && (b.speed = b.mc), b.ha < b.Ld ? (b.Yb += b.Zc, b.$b += b.$c) : b.ha === b.Ld && (b.Yb = b.Xc, b.$b = b.Yc), this.x += Math.cos(b.direction) * b.speed * a.Zb, this.y += Math.sin(b.direction) * b.speed * a.Zb, this.x += b.Yb * a.Zb, this.y += b.$b * a.Zb, a.Wd(this)) {
          if(a.Nb || this.Nb) {
            this.rotation = (b.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = b.speed
          }
          if(!(b.ha < b.ff || b.uc)) {
            for(var d;d = b.gf.next();) {
              switch(d.Pa) {
                case "fire":
                  c.Xf.call(this, d, a, b, c);
                  break;
                case "wait":
                  a = 0;
                  b.ff = "number" === typeof d.value ? b.ha + d.value : 0 !== (a = ~~d.value) ? b.ha + a : b.ha + eval(d.value);
                  return;
                case "changeDirection":
                  c.Tf.call(this, d, a, b);
                  break;
                case "changeSpeed":
                  c.Uf.call(this, d, b);
                  break;
                case "accel":
                  c.Rf.call(this, d, b);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  c.Yf.call(this, d)
              }
            }
            b.uc = k;
            b.td ? b.td.ze() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), b.uc = k, b.td ? b.td.ze() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    a = function(a) {
      var b = {}, c = tm.Oa.Pb.vc, d;
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
    "string" === typeof c ? b.gf = this.re.Td(c) : c instanceof q.Bb ? b.gf = c.Td() : (window.console.error(a, c), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    b.$f = this;
    b.dd = a;
    b.ff = -1;
    b.uc = m;
    b.direction = 0;
    b.Pe = 0;
    b.speed = 0;
    b.Re = 0;
    b.Yb = 0;
    b.$b = 0;
    b.ec = 0;
    b.Gb = 0;
    b.Od = -1;
    b.Kc = 0;
    b.mc = 0;
    b.Pd = -1;
    b.Zc = 0;
    b.Xc = 0;
    b.$c = 0;
    b.Yc = 0;
    b.Ld = -1;
    b.ha = -1;
    b.pd = k;
    return b
  }, Wf:function(a) {
    function b() {
      this.x += b.Be;
      this.y += b.Ce;
      b.dd.Wd(this) || (this.remove(), this.dispatchEvent(tm.event.Event("removed")))
    }
    a = function(a) {
      var b = {}, c = tm.Oa.Pb.vc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.dd = a;
    b.direction = 0;
    b.speed = 0;
    b.Be = 0;
    b.Ce = 0;
    b.pd = k;
    return b
  }, Xf:function(a, c, f, u) {
    if(this.Qg === i || this.jb) {
      var s = {label:a.ga.label}, w;
      for(w in a.ga.Ka) {
        s[w] = a.ga.Ka[w]
      }
      if(s = c.ye(s)) {
        var h = (w = !!a.ga.Ea.length) ? u.Wf(c) : u.ed(c, a.ga), X = this, N = {x:this.x + a.Ka.offsetX, y:this.y + a.Ka.offsetY};
        f.Pe = h.direction = function(h) {
          var u = eval(h.value) * Math.DEG_TO_RAD;
          switch(h.type) {
            case "aim":
              return c.target ? a.Ka.Ma ? b(N, c.target) + u : b(X, c.target) + u : u - Math.PI / 2;
            case "absolute":
              return u - Math.PI / 2;
            case "relative":
              return f.direction + u;
            default:
              return f.Pe + u
          }
        }(a.direction || a.ga.direction);
        f.Re = h.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.Re + b;
            default:
              return b
          }
        }(a.speed || a.ga.speed);
        s.x = N.x;
        s.y = N.y;
        w && (h.Be = Math.cos(h.direction) * h.speed * c.Zb, h.Ce = Math.sin(h.direction) * h.speed * c.Zb);
        s.Nb = !!s.Nb;
        if(c.Nb || s.Nb) {
          s.rotation = (h.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, s.speed = h.speed
        }
        s.addEventListener("enterframe", h);
        s.addEventListener("removed", function() {
          this.removeEventListener("enterframe", h);
          this.removeEventListener("removed", arguments.callee)
        });
        c.we ? c.we.addChild(s) : this.parent && this.parent.addChild(s)
      }
    }
  }, Tf:function(c, f, p) {
    var u = eval(c.direction.value) * Math.DEG_TO_RAD, s = eval(c.La);
    switch(c.direction.type) {
      case "aim":
        c = f.target;
        if(!c) {
          return
        }
        p.Gb = b(this, c) + u;
        p.ec = a(p.Gb - p.direction) / s;
        break;
      case "absolute":
        p.Gb = u - Math.PI / 2;
        p.ec = a(p.Gb - p.direction) / s;
        break;
      case "relative":
        p.Gb = p.direction + u;
        p.ec = a(p.Gb - p.direction) / s;
        break;
      case "sequence":
        p.ec = u, p.Gb = p.direction + p.ec * (s - 1)
    }
    p.Od = p.ha + s
  }, Uf:function(a, b) {
    var c = eval(a.speed.value), f = eval(a.La);
    switch(a.speed.type) {
      case "absolute":
        b.mc = c;
        b.Kc = (b.mc - b.speed) / f;
        break;
      case "relative":
        b.mc = c + b.speed;
        b.Kc = (b.mc - b.speed) / f;
        break;
      case "sequence":
        b.Kc = c, b.mc = b.speed + b.Kc * f
    }
    b.Pd = b.ha + f
  }, Rf:function(a, b) {
    var c = eval(a.La);
    b.Ld = b.ha + c;
    if(a.ob) {
      var f = eval(a.ob.value);
      switch(a.ob.type) {
        case "absolute":
        ;
        case "sequence":
          b.Zc = (f - b.Yb) / c;
          b.Xc = f;
          break;
        case "relative":
          b.Zc = f, b.Xc = (f - b.Yb) * c
      }
    }else {
      b.Zc = 0, b.Xc = b.Yb
    }
    if(a.sb) {
      switch(f = eval(a.sb.value), a.sb.type) {
        case "absolute":
        ;
        case "sequence":
          b.$c = (f - b.$b) / c;
          b.Yc = f;
          break;
        case "relative":
          b.$c = f, b.Yc = (f - b.$b) * c
      }
    }else {
      b.$c = 0, b.Yc = b.$b
    }
  }, Yf:function(a) {
    var b = tm.event.Event(a.lg);
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
    return tm.asset.Texture(a.canvas.toDataURL())
  }();
  tm.Oa.ig = function(a) {
    var b = tm.app.Sprite(c, 8, 8);
    b.label = a.label;
    return b
  };
  var f = l;
  tm.Oa.Ae = function(a) {
    if(f === l) {
      if(!a.getRoot().app) {
        return k
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.Oa.mh = function() {
    return k
  };
  tm.Oa.Pb.vc = {ye:tm.Oa.ig, Wd:tm.Oa.Ae, vh:0, Nb:m, Zb:2, target:l};
  q.za.prototype.ed = function(a) {
    return tm.Oa.Pb(this).ed(a)
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
var r = l, ba = {}, t, v, z, A, B, C, ca, da, ea, fa, ga, ha, ia, D, E, ja, F, ka, la, G, ma, na, oa, pa, qa, ra, sa, ta, H, ua, va, I, wa, J, K, aa = tm.createClass({superClass:tm.app.CanvasApp, md:0, sh:0, rc:3, Xb:3, De:1, He:[1E9, 1E10], $:l, init:function(a) {
  r !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  r = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bgm1:"assets2/nc54073.mp3", bgmBoss:"assets2/nc29206.mp3", 
  "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", star:"assets/star.png"}, nextScene:function() {
    this.Zf();
    return t()
  }.bind(this)}))
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Zf:function() {
  v.oa(12345);
  z.oa();
  A.oa();
  this.$ = B()
}, ng:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.md, "")
}}), L = l;
function xa(a, b) {
  b || M();
  var c = tm.asset.AssetManager.get(a);
  c && (L = c.clone(), L.volume = 0.1 * r.rc, L.loop = k, L.play())
}
function M() {
  L !== l && L.stop()
}
function ya() {
  if(L !== l) {
    var a = L;
    a.loop = m;
    B.Uc.addEventListener("enterframe", function() {
      a.volume -= 0.002;
      0 >= a.volume && (a.stop(), this.removeEventListener("enterframe", arguments.callee))
    })
  }
}
function P(a) {
  if(0 !== r.Xb && za["sound/" + a] !== r.frame) {
    var b = tm.asset.AssetManager.get("sound/" + a);
    b && (b.volume = "vo" === a.substring(0, 2) ? 0.5 * r.Xb : 0.1 * r.Xb, b.clone().play());
    za["sound/" + a] = r.frame
  }
}
var za = {};
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Q(a, b) {
  return(a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
;C = {ne:3, me:3, Lf:1, Hf:1, If:1, Gf:2, hf:1, yf:2, kf:8, Df:0.01, Bf:0.015, Cf:0.001, zf:0.015, Af:0.002, Ef:0.75, Ff:2, Pc:800, xf:0.25, wf:0.1, rf:5, pf:0.02, qf:0.5, of:0.01, nf:200, mf:10, Qf:500, Pf:250, Of:100, Nf:50, uf:0.3, sf:4E4, lf:50, Mf:10, jf:m};
(function() {
  var a = l, b = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  ca = tm.createClass({superClass:tm.app.Sprite, type:0, fb:0, xb:k, kc:m, $:l, speed:4.5, Tb:l, dc:l, Ue:l, Me:l, rb:l, nd:l, bd:l, Ud:l, Vd:l, init:function(b, f) {
    this.superInit("tex1", 64, 64);
    this.type = f;
    this.$ = b;
    tm.Oa.Pb.vc.target = this;
    this.boundingRadius = 3;
    this.altitude = 10;
    this.dc = this.Ue = da(f, 100);
    this.Me = da(3, 100);
    this.rb = ea(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.rb.visible = m;
    this.Vf();
    this.Tb = [{x:-70, y:20, d:0.1, Mb:m, Hb:-0.7, v:k}, {x:-40, y:40, d:0.1, Mb:m, Hb:-0.5, v:k}, {x:40, y:40, d:0.1, Mb:k, Hb:0.5, v:k}, {x:70, y:20, d:0.1, Mb:k, Hb:0.7, v:k}];
    this.bd = tm.app.CanvasElement().addChildTo(this);
    for(var d = 0, j = this.Tb.length;d < j;d++) {
      var p = this.Tb[d];
      fa(this, p).setPosition(p.x, p.y).addChildTo(this.bd)
    }
    this.Ig = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Ig.blendMode = "lighter";
    this.Ud = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Ud.blendMode = "lighter";
    this.Ud.update = function() {
      this.rotation += 2;
      this.visible = 1 === b.Fa && !b.ra
    };
    this.Vd = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Vd.blendMode = "lighter";
    this.Vd.update = function() {
      this.rotation -= 2;
      this.visible = 1 === b.Fa && !b.ra
    };
    this.Bc = tm.app.CanvasElement(80, 80).addChildTo(this);
    this.Bc.blendMode = "lighter";
    this.Bc.rotation = -90;
    this.Bc.strokeStyle = "rgba(180,180,255,0.4)";
    this.Bc.update = function() {
      this.visible = b.ra
    };
    this.Bc.draw = function(a) {
      a.lineCap = "round";
      var f = b.hc / C.Pc;
      a.strokeStyle = "rgba(50,50,255,0.4)";
      a.lineWidth = "12";
      a.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, m);
      a.strokeStyle = "rgba(100,100,255,0.4)";
      a.lineWidth = "8";
      a.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, m);
      a.strokeStyle = "rgba(180,180,255,0.4)";
      a.lineWidth = "4";
      a.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, m)
    };
    this.Cg = tm.app.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Cg.update = function() {
      this.visible = b.ra
    };
    a === l && (a = ga(this.$.ta))
  }, fh:function() {
    return[{x:-70, y:20, d:0.1, Mb:m, Hb:-0.7, v:k}, {x:-40, y:40, d:0.1, Mb:m, Hb:-0.5, v:k}, {x:40, y:40, d:0.1, Mb:k, Hb:0.5, v:k}, {x:70, y:20, d:0.1, Mb:k, Hb:0.7, v:k}]
  }, Vf:function() {
    this.nd = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.nd.setFrameIndex(5);
    this.nd.blendMode = "lighter";
    this.nd.update = function(a) {
      a = 0.75 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Lb:-1, gd:m, Ib:m, update:function(c) {
    this.visible = this.kc ? 0 === c.frame / 2 % 2 : k;
    var f = c.keyboard;
    if(this.xb) {
      var d = f.getKeyAngle();
      d !== l && (d = b[d], this.x += d.x * this.speed * (this.Ib ? 0.75 : 1), this.y += d.y * this.speed * (this.Ib ? 0.75 : 1));
      this.x = R(this.x, 15, 465);
      this.y = R(this.y, 15, 625);
      var j = f.getKey("c"), d = f.getKey("z");
      this.Lb = j ? this.Lb + 1 : this.Lb - 1;
      this.Lb = R(this.Lb, -1, 10);
      this.Ib = d && j || 10 === this.Lb;
      j = this.$.ra ? 3 : 5;
      this.gd = !this.Ib && (0 <= this.Lb || d) && 0 === c.frame % j;
      d && (this.Lb = 0);
      this.rb.x = this.x;
      this.rb.y = this.y - 40;
      if(this.Ib) {
        d = 0;
        for(j = this.Tb.length;d < j;d++) {
          this.Tb[d].v = m
        }
        this.bd.rotation = 0
      }else {
        this.rb.visible = m;
        d = 0;
        for(j = this.Tb.length;d < j;d++) {
          this.Tb[d].v = k
        }
      }
      this.gd && (d = Math.sin(0.2 * c.frame), j = this.dc.ka(this.x - 7 - 6 * d, this.y - 5, -90), j !== l && j.addChildTo(this.$), j = this.dc.ka(this.x + 7 + 6 * d, this.y - 5, -90), j !== l && j.addChildTo(this.$));
      f.getKeyDown("x") && (1 === this.$.Fa && !this.$.ra ? (this.$.Xg(), ha(this).addChildTo(this.$)) : !this.$.ic && 0 < this.$.ib && (this.Ja = R(this.Ja - 2, 0, 1), q.la.ua.$rank = R(q.la.ua.$rank - 0.02, 0, 1), ia(this, this.$).setPosition(R(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.$)))
    }
    this.hg(f);
    this.Sf(f);
    0 === c.frame % 2 && (a.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.$), a.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.$))
  }, yb:function() {
    this.Ib = this.gd = m;
    this.$.yc();
    this.$.va = 0;
    this.$.Ba = 0;
    this.$.wa = 0
  }, hg:function(a) {
    var b = this.bd;
    b.rotation = this.xb && a.getKey("left") ? Math.max(b.rotation - 3, -40) : this.xb && a.getKey("right") ? Math.min(b.rotation + 3, 40) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0
  }, Sf:function(a) {
    this.xb && a.getKey("left") ? this.fb = R(this.fb - 0.2, -3, 3) : this.xb && a.getKey("right") ? this.fb = R(this.fb + 0.2, -3, 3) : 0 > this.fb ? this.fb = R(this.fb + 0.2, -3, 3) : 0 < this.fb && (this.fb = R(this.fb - 0.2, -3, 3));
    a = 3 + ~~this.fb;
    this.setFrameIndex(a);
    return a
  }});
  fa = tm.createClass({superClass:tm.app.AnimationSprite, Sb:l, da:l, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Sb = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.Mb ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.Sb.v) {
      this.x = this.Sb.x * (this.da.$.ra ? 1.5 : 1);
      this.y = this.Sb.y * (this.da.$.ra ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Sb.d * this.Sb.Hb);
      var f = this.parent.localToGlobal(this);
      this.Sb.v && 0 === b.frame % 2 && a.clone(40).setPosition(f.x, f.y).addChildTo(b.$);
      this.da.gd && (f = this.da.dc.ka(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== l && f.addChildTo(b.$))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = l;
  D = tm.createClass({superClass:tm.app.Sprite, speed:0, Ra:k, init:function(b) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    a === l && (a = E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    b !== i && this.Jc(b)
  }, update:function() {
    this.x += this.ah;
    this.y += this.bh;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, Jc:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48, this.setScale(2, 2)) : (this.speed = 30, this.boundingRadius = 32, this.setScale(1.5, 1.5))
  }, kd:function(b) {
    for(var f = 0;f < b;f++) {
      var d = a.clone().setPosition(this.x, this.y).addChildTo(this.parent), j = S(2, 8), p = 2 * Math.random() * Math.PI;
      d.ma = Math.cos(p) * j;
      d.na = Math.sin(p) * j;
      d.scaleX = d.scaleY = (S(0.1, 0.5) + S(0.1, 0.5)) / 2;
      d.addEventListener("enterframe", function() {
        this.x += this.ma;
        this.y += this.na;
        this.ma *= 0.9;
        this.na *= 0.9
      })
    }
  }});
  D.tc = function() {
    for(var a = [].concat(b), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var b = D.Ia = [];
  da = tm.createClass({ud:l, init:function(a, f) {
    this.ud = [];
    for(var d = 0;d < f;d++) {
      var j = D(a), p = this;
      j.addEventListener("added", function() {
        this.qa = C.Mf;
        b.push(this)
      });
      j.addEventListener("removed", function() {
        var a = b.indexOf(this);
        -1 !== a && b.splice(a, 1);
        p.ud.push(this)
      });
      3 === a && j.addEventListener("enterframe", function(a) {
        this.scaleX = 0 === a.app.frame % 2 ? 3 : 2
      });
      this.ud.push(j)
    }
  }, ka:function(a, b, d) {
    var j = this.ud.pop();
    if(j === i) {
      return l
    }
    var p = Aa(d);
    j.ah = Math.cos(p) * j.speed;
    j.bh = Math.sin(p) * j.speed;
    j.setPosition(a, b);
    j.rotation = d + 90;
    return j
  }})
})();
(function() {
  var a = l;
  ea = tm.createClass({superClass:tm.app.Sprite, da:l, $:l, $a:0, frame:0, df:l, color:l, dg:m, head:l, Je:l, xe:l, Ra:k, init:function(a, c) {
    this.da = a;
    this.$ = a.$;
    var f = this;
    this.df = c;
    this.superInit(c.redBody, 50, 100);
    this.boundingHeightBottom = 1;
    this.wh = 0;
    this.origin.y = 1;
    var d = this.xe = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
    d.y = 60;
    d.addChildTo(this);
    (this.Je = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
    d = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:c.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
    d.addChildTo(this);
    d.update = function() {
      this.y = f.$a - f.y;
      -10 < this.y && (this.y = -10);
      this.visible = 0 < f.$a
    };
    this.Jc("blue")
  }, Jc:function(b) {
    this.color = b;
    this.image = tm.asset.AssetManager.get(this.df[this.color + "Body"]);
    this.srcRect.x = 0;
    this.srcRect.y = 0;
    this.srcRect.width = this.image.width / 16;
    this.xe.gotoAndPlay(this.color);
    this.Je.gotoAndPlay(this.color);
    this.head.gotoAndPlay(this.color);
    a = E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element);
    "hyper" === b ? (this.boundingWidth = this.width = 75, this.head.setScale(1.5, 1.5)) : (this.boundingWidth = this.width = 50, this.head.setScale(1, 1));
    return this
  }, kd:function(b, c) {
    c = c || this.$a;
    for(var f = 0;f < b;f++) {
      var d = a.clone().setPosition(this.x, c).addChildTo(this.$), j = S(8, 14), p = S(0, Math.PI);
      d.ma = Math.cos(p) * j;
      d.na = Math.sin(p) * j;
      d.scaleX = d.scaleY = (S(0.5, 1.5) + S(0.5, 1.5)) / 2;
      d.addEventListener("enterframe", function() {
        this.x += this.ma;
        this.y += this.na;
        this.ma *= 0.95;
        this.na *= 0.95
      })
    }
  }, yg:function(b, c, f) {
    c = c || this.x;
    f = f || this.$a;
    for(var d = 0;d < b;d++) {
      var j = a.clone().setPosition(c, f).addChildTo(this.$), p = S(12, 20), u = S(0, Math.PI);
      j.ma = Math.cos(u) * p;
      j.na = Math.sin(u) * p;
      j.scaleX = j.scaleY = (S(1, 3) + S(1, 3)) / 2;
      j.addEventListener("enterframe", function() {
        this.x += this.ma;
        this.y += this.na;
        this.ma *= 0.95;
        this.na *= 0.95
      })
    }
  }, update:function(a) {
    (this.visible = this.da.Ib) ? (this.$a = Math.max(0, this.$a - 40), this.height = this.y - this.$a, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.$a = this.y - 40;
    this.dg = this.visible
  }, draw:function(a) {
    var c = this.srcRect, f = this._image.element;
    c.x = c.width * this.frame;
    a.context.drawImage(f, c.x, c.height - this.height, c.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, rh:function() {
    return this.$a
  }, Vg:function(a) {
    this.$a = a;
    this.head.update()
  }});
  ea.prototype.getter("boundingHeightTop", function() {
    return this.position.y - this.$a
  })
})();
(function() {
  ia = tm.createClass({superClass:tm.app.Object2D, Ra:k, $:l, init:function(b, c) {
    this.superInit();
    this.da = b;
    this.$ = c;
    this.Ze = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Ze.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Ze));
    this.ve();
    a === l && (a = E(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ha = 0;
    this.Gc = 1;
    this.addEventListener("added", function() {
      this.$.ic = k;
      this.da.kc = k;
      this.$.ib -= 1;
      this.$.yc();
      this.$.Sa("drop BOMBER!!", k);
      P("bomb");
      P("voBomb")
    });
    this.addEventListener("removed", function() {
      this.$.ic = m;
      this.da.kc = m
    })
  }, ve:function() {
    this.bb = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.bb.gotoAndPlay("animation");
    this.bb.blendMode = "lighter";
    this.bb.setScale(0.1, 0.1);
    this.bb.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.9, 1.1)
      }
    }.bind(this.bb))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.Gc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.ha;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.ha += 3.6, this.Gc = -1) : (this.b = 8, this.ha += 1.8, this.Gc = 1)
  }});
  ja = tm.createClass({superClass:ia, init:function(a, c) {
    this.superInit(a, c);
    C.jf && this.addEventListener("added", function() {
      this.$.ib = 0
    })
  }, ve:function() {
    this.bb = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.bb.gotoAndPlay("animation");
    this.bb.blendMode = "lighter";
    this.bb.setScale(0.1, 0.1);
    this.bb.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = S(0.4, 0.6)
      }
    }.bind(this.bb))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.Gc + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.04 * this.ha;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.ha += 1.8, this.Gc = 1)
  }});
  var a = l
})();
F = tm.createClass({da:l, $:l, ba:l, frame:0, init:function(a) {
  this.$ = a;
  this.da = a.da;
  this.Ye();
  this.ba = ka();
  this.frame = 0
}, Ye:n(), update:function() {
  this.mg(this.frame);
  this.frame += 1
}, mg:function(a) {
  a = this.ba.get(a);
  if(a !== l) {
    if("function" === typeof a.value) {
      a.value.call(this)
    }else {
      if(la[a.value] !== i) {
        var b = la[a.value];
        if(b !== l) {
          if(b[0].Eb === k) {
            this.Gg(b[0])
          }else {
            for(var c = 0;c < b.length;c++) {
              var f = this.Hg(b[c]);
              a.stop && f.addEventListener("enemyconsumed", function() {
                this.ba.ke = m
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Hg:function(a) {
  this.$.fc += 1;
  return G(this.$, a.aa, a.ca).setPosition(a.x, a.y).addChildTo(this.$).Ab()
}, Gg:function(a) {
  this.$.fc += 1;
  return ma(this.$, a.aa, a.ca).setPosition(a.x, a.y).addChildTo(this.$).Ab()
}, cg:function(a) {
  ya();
  this.$.wc = k;
  P("warning");
  for(var b = tm.app.Object2D().setPosition(240, 320), c = -4;4 >= c;c++) {
    for(var f = -4;4 >= f;f++) {
      var d = tm.app.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(c, f);
      d.ha = 0;
      d.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.ha) + 0.5;
        this.ha += 1
      };
      d.addChildTo(b)
    }
  }
  b.tweener.wait(3E3).call(a).wait(3E3).call(function() {
    this.remove()
  }.bind(b));
  b.addChildTo(this.$.Sd)
}});
F.create = function(a, b) {
  return 0 === b ? na(a) : 1 === b ? ba.dh(a) : na(a)
};
ka = tm.createClass({index:0, data:l, ke:m, init:function() {
  this.data = {}
}, add:function(a, b, c) {
  this.index += a;
  this.data[this.index] = {stop:c, value:b}
}, get:function(a) {
  a = this.data[a];
  return a === i ? l : a.stop === k ? (this.ke = k, a) : this.ke ? l : a
}});
na = tm.createClass({superClass:F, init:function(a) {
  this.superInit(a);
  this.ba.add(0, function() {
    xa("bgm1");
    this.$.ta.direction = 0.5 * Math.PI;
    this.$.ta.speed = 8;
    this.$.ta.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.$.ta.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.ba.add(150, "yukishiro", k);
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
    this.$.ta.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.ba.add(100, "komachi-0");
  this.ba.add(160, "komachi-1");
  this.ba.add(600, function() {
    this.cg(function() {
      xa("bgmBoss", k)
    })
  });
  this.ba.add(600, "misumi")
}, Ye:function() {
  this.$.ta.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,30%)"}, {offset:1, color:"hsl(230,50%,15%)"}]).toStyle()
}});
A = {oa:function() {
  Ba(256);
  oa = {};
  A.explosion = Array.range(0, 2).map(function(a) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + a, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  oa.explodeL = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  A.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  A.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  A.particle16 = E(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, kd:function(a, b, c) {
  a = A.particle16.clone().setPosition(a, b).addChildTo(c);
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
}, qh:function(a, b, c) {
  var f = tm.app.Sprite().setPosition(a, b).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  f.image = A.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, zg:function(a, b, c) {
  a = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(a, b).setScale(0.1, 0.1);
  a.Ra = k;
  a.addChildTo(c);
  a.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(a))
}, fd:function(a, b, c, f) {
  P("explode");
  a = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  a.Ra = k;
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
}, og:function(a, b, c) {
  P("explode");
  var f = A.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  f.Ra = k;
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
  f.Ra = k;
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
  f.Ra = k;
  f.addChildTo(c)
}, Ge:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), d = 0;20 > d;d++) {
    var j = A.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === d % 2 ? "lighter" : "source-over").setPosition(a, b).gotoAndPlay();
    j.a = 2 * Math.PI * Math.random();
    j.v = 10 * Math.pow(T.at(~~(T.length * d / 20) + f), 2);
    j.Ra = k;
    j.addChildTo(c)
  }
}, Fe:function(a, b, c) {
  P("explode2");
  P("explode3");
  for(var f = ~~(Math.random() * T.length), d = 0;20 > d;d++) {
    for(var j = 2 * Math.PI * d / 20, p = Math.pow(T.at(~~(T.length * d / 20) + f), 2), u = 0;3 > u;u++) {
      var s = 4 * p * (u + 1), w = oa.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ha && (this.blendMode = "source-over");
        this.ha += 1
      }).setScale(0.3 * (3 - u)).setBlendMode("lighter").setPosition(a, b).gotoAndPlay();
      w.rotation = 2 * Math.random() * Math.PI;
      w.Ra = k;
      w.alpha = 0.2;
      w.ha = 0;
      w.a = j;
      w.v = s;
      w.addChildTo(c)
    }
  }
}};
pa = tm.createClass({superClass:tm.app.Object2D, target:l, Wb:0, angle:0, alpha:1, Ra:k, reverse:m, init:function(a, b) {
  this.superInit();
  this.target = a;
  this.reverse = b;
  this.angle = 0;
  this.Wb = b ? 0 : 200;
  this.alpha = b ? 1 : 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var a = 0;9 > a;a++) {
      var b = this.angle + 2 * a / 9 * Math.PI;
      E(80, this.alpha, 0.9).setPosition(Math.cos(b) * this.Wb + this.target.x, Math.sin(b) * this.Wb + this.target.y).addChildTo(this.target.parent)
    }
    this.angle += 0.05;
    this.Wb += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.Wb || 200 < this.Wb) && this.remove()
  }
}});
ha = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, Ra:k, init:function(a) {
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
qa = tm.createClass({superClass:tm.graphics.Canvas, $:l, cc:l, Qa:l, init:function(a) {
  this.superInit("#scoreLabel");
  this.$ = a;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.cc = Ca(200);
  this.Qa = ra(this)
}, update:function() {
  this.clear();
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.$.Eb !== l && (this.fillRect(5, this.Qa.zb - 20, 470 * this.$.Eb.qa / this.$.Eb.gc, 10), this.clear(287, this.Qa.zb - 20, 2, 10), this.clear(99, this.Qa.zb - 20, 2, 10));
  var a;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.$.score)).padding(16, " ");
  a = "";
  for(var b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, this.Qa.zb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.$.va)).padding(8, " ");
  a = "";
  for(b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, this.Qa.zc + 192, 22);
  for(b = 0;b < this.$.Ob - 1;b++) {
    this.drawTexture(tm.asset.AssetManager.get("tex1"), 192, 0, 64, 64, 5 + 32 * b, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.la.ua.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.$.rd + " hit", this.Qa.zc + 10, 95);
  0 < ~~this.$.wa && (this.setText("bold 40px Orbitron", "left", "top"), this.strokeText(~~this.$.wa + " HIT!!", 10, -this.Qa.zb + 115));
  for(b = 0;b < this.$.ib;b++) {
    this.fillRect(5 + 25 * b, 601, 20, 20)
  }
  this.cc.update();
  this.cc.ge = this.Qa.zb + 5;
  this.cc.draw(this)
}});
ra = tm.createClass({superClass:tm.app.Object2D, Ta:l, zc:0, zb:0, init:function(a) {
  this.superInit();
  this.Ta = a
}});
(function() {
  var a = 16 * Math.sqrt(3), b = 12.8 * Math.sqrt(3);
  sa = tm.createClass({superClass:tm.graphics.Canvas, ea:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.ea = ta();
    this.ea.ta = this;
    this.ea.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(c) {
    this.ea.ma = Math.cos(this.ea.direction) * this.ea.speed;
    this.ea.na = Math.sin(this.ea.direction) * this.ea.speed;
    for(this.ea.kb += this.ea.ma;96 < this.ea.kb;) {
      this.ea.kb -= 96
    }
    for(;-96 > this.ea.kb;) {
      this.ea.kb += 96
    }
    for(this.ea.mb += this.ea.na;2 * a < this.ea.mb;) {
      this.ea.mb -= 2 * a
    }
    for(;this.ea.mb < 2 * -a;) {
      this.ea.mb += 2 * a
    }
    for(this.ea.lb += 0.8 * this.ea.ma;25.6 * 3 < this.ea.lb;) {
      this.ea.lb -= 25.6 * 3
    }
    for(;this.ea.lb < -25.6 * 3;) {
      this.ea.lb += 25.6 * 3
    }
    for(this.ea.nb += 0.8 * this.ea.na;2 * b < this.ea.nb;) {
      this.ea.nb -= 2 * b
    }
    for(;this.ea.nb < 2 * -b;) {
      this.ea.nb += 2 * b
    }
    0 === c % 2 && this.draw()
  }, draw:function() {
    this.ea.background !== l ? this.clearColor(this.ea.background, 0, 0) : this.clear();
    this.lineWidth = 0.3;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    this.beginPath();
    for(var c = 0, f = this.ea.kb - 96;576 > f;f += 48) {
      for(var c = 0 === c ? a : 0, d = this.ea.mb - 2 * a + c;d < 640 + 2 * a;d += 2 * a) {
        this.line(f, d, f + 32, d), this.line(f, d, f - 16, d + a), this.line(f, d, f - 16, d - a)
      }
    }
    this.stroke();
    this.lineWidth = 0.2;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,0.6)"}, {offset:1, color:"rgba(255,255,255,0.3)"}]).toStyle();
    this.beginPath();
    c = 0;
    for(f = this.ea.lb - 25.6 * 3;f < 480 + 25.6 * 3;f += 25.6 * 1.5) {
      c = 0 === c ? b : 0;
      for(d = this.ea.nb - 2 * b + c;d < 640 + 2 * b;d += 2 * b) {
        this.line(f, d, f + 25.6, d), this.line(f, d, f - 12.8, d + b), this.line(f, d, f - 12.8, d - b)
      }
    }
    this.stroke()
  }});
  ta = tm.createClass({superClass:tm.app.Object2D, kb:0, mb:0, lb:0, nb:0, direction:0, speed:0, ma:0, na:0, background:l, init:function() {
    this.superInit();
    this.lb = this.nb = this.kb = this.mb = 0;
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.na = this.ma = 0
  }})
})();
H = tm.createClass({superClass:tm.app.Sprite, Oe:m, $:l, da:l, pb:m, Ac:m, ie:m, ma:0, na:0, init:function(a) {
  this.superInit("star", 20, 20);
  (this.Oe = a) && this.setScale(2, 2);
  this.$ = B.Uc;
  this.da = this.$.da;
  this.addChildTo(this.$);
  a = 0.5 * v.random() * Math.PI - 0.75 * Math.PI;
  this.ma = 30 * Math.cos(a);
  this.na = 30 * Math.sin(a)
}, update:function() {
  this.da.Ib && (this.Ac = k);
  if(this.da.parent === l) {
    this.Ac = m
  }else {
    if(100 > Q(this, this.da)) {
      this.$.Jg(this);
      this.remove();
      return
    }
    1E4 > Q(this, this.da) && (this.Ac = k);
    if(this.ie && this.Ac) {
      var a = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 10 * Math.cos(a);
      this.y += 10 * Math.sin(a)
    }else {
      this.ie || (this.x += this.ma, this.y += this.na, this.ma *= 0.8, this.na *= 0.8, -1 < this.ma && (1 > this.ma && -1 < this.na && 1 > this.na) && (this.ie = k))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
ua = tm.createClass({superClass:H, pb:m, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
va = tm.createClass({superClass:H, pb:k, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.Ac || (this.x += this.$.ta.ma, this.y += this.$.ta.na);
  this.superClass.prototype.update.call(this)
}});
function V(a, b) {
  if(a.parent === l || b.parent === l) {
    return m
  }
  var c = a.x + a.boundingWidthRight, f = a.y - a.boundingHeightTop, d = a.y + a.boundingHeightBottom, j = b.x - b.boundingWidthLeft, p = b.y - b.boundingHeightTop, u = b.y + b.boundingHeightBottom;
  return a.x - a.boundingWidthLeft < b.x + b.boundingWidthRight && c > j && f < u && d > p
}
;var W = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Zg:function(a, b) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = b
}, finish:function(a) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(a)
}});
var Da = tm.createClass({superClass:W, titleText:l, menu:l, descriptions:l, showExit:m, title:l, selections:[], description:l, box:l, cursor:l, Zd:l, _selected:0, _opened:m, _finished:m, init:function(a, b, c) {
  this.superInit();
  this.titleText = a;
  this.menu = b;
  this._selected = ~~c.defaultValue;
  this.showExit = c.showExit;
  this.descriptions = c.menuDescriptions;
  this.showExit && (b.push("exit"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Zd = c.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Zd !== l && this.parent.Zd(this.s))
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
  d = {}.$extend({menuDescriptions:[].concat(c), showExit:k, defaultValue:0, onCursorMove:n()}, d);
  a.Zg(Da(b, c, d), f)
}
;E = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, Md:0.85, size:0, image:l, Ra:k, init:function(a, b, c, f) {
  this.superInit();
  this.width = this.height = this.size = a;
  b !== i && (this.alpha = b);
  c !== i && (this.Md = c);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.Md;
  0.001 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return E(this.size, this.th, this.Md, this.image)
}});
ga = tm.createClass({superClass:E, ta:l, init:function(a, b) {
  b = b || 20;
  this.superInit(b, 1, 0.82, tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element);
  this.ta = a
}, update:function(a) {
  this.superClass.prototype.update.apply(this, a);
  this.x += this.ta.ma;
  this.y += this.ta.na + 0.3
}, clone:function(a) {
  return ga(this.ta, a)
}});
var Ca = tm.createClass({width:0, label:l, Na:l, ha:0, We:0, ge:0, init:function(a) {
  this.width = a;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Na = [];
  this.We = 480 - this.width - 5;
  this.ge = 5
}, bg:function(a, b) {
  b === k && (this.Na.clear(), this.Na.push(""));
  5 < this.Na.length && this.Na.splice(1, this.Na.length - 4);
  this.Na.push(a);
  return this
}, fg:function() {
  this.Na.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var a = this.label.text, a = a.substring(0, a.length - 1);
  if(0 !== this.Na.length) {
    if("" !== this.Na[0]) {
      var b = this.Na[0][0];
      this.Na[0] = this.Na[0].substring(1);
      a += b
    }else {
      this.Na.shift(), b = a.split("\n"), 3 < b.length && (b.shift(), a = b.join("\n")), a += "\n"
    }
  }
  this.label.text = a + (0 === this.ha % 2 ? "_" : " ");
  this.ha += 1
}, draw:function(a) {
  a.save();
  a.context.globalCompositeOperation = "source-over";
  a.translate(this.We, this.ge);
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
function Ba(a) {
  function b(b) {
    if(1 > b) {
      return l
    }
    var d = [], f = Math.random(), j, p;
    for(p = 0;p < a;p += ~~b) {
      j = Math.random();
      for(var O = 0;O < b;O++) {
        d[p + O] = c(f, j, O / b)
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
    var p = b(a / j);
    if(p === l) {
      break
    }
    f.push(p)
  }
  p = [].concat(f[0]);
  d = 1;
  for(j = 0.5;d < f.length;d++, j *= 0.5) {
    for(var u = 0;u < a;u++) {
      p[u] += f[d][u] * j
    }
  }
  for(d = 0;d < p.length;d++) {
    p[d] /= 2
  }
  return p
}
var T;
v = {index:-1, data:l, oa:function(a) {
  this.data = [];
  a = new MersenneTwister(a);
  for(var b = 0;1E3 > b;b++) {
    this.data[b] = a.next()
  }
}, random:function() {
  this.index += 1;
  1E3 <= this.index && (this.index %= 1E3);
  return this.data[this.index]
}, rand:function(a, b) {
  return Math.floor(this.random() * (b - a + 1)) + a
}, randf:function(a, b) {
  return this.random() * (b - a) + a
}};
(function() {
  var a = l, b = l;
  t = tm.createClass({superClass:W, result:l, ha:0, Fc:[], jd:m, Le:l, Qe:0, qd:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Le = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.jd = m;
      for(var a = ("" + Math.floor(r.md)).padding(16, " "), b = "", d = 0;d < a.length;d += 4) {
        b += a.substring(d, d + 4) + " "
      }
      this.Le.text = "HIGH SCORE: " + b.trim()
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.te(80 * Math.cos(0.01 * this.ha) + 240, 80 * Math.sin(0.01 * this.ha) + 320, 0);
    this.te(80 * Math.cos(0.01 * this.ha + Math.PI) + 240, 80 * Math.sin(0.01 * this.ha + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) && !this.jd && this.Ve();
    this.ha += 1
  }, te:function(c, f, d) {
    if(!this.jd) {
      a === l && (a = E(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === l && (b = E(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      d = 0 === d ? a.clone().addChildTo(this) : b.clone().addChildTo(this);
      d.speed = 0.6;
      var j = S(0, 2 * Math.PI), p = U(0, 20);
      d.setPosition(Math.cos(j) * p + c, Math.sin(j) * p + f);
      var u = this;
      d.update = function() {
        this.x += Math.cos(j) * this.speed;
        this.y += Math.sin(j) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = u.Fc.indexOf(this);
          -1 !== a && u.Fc.splice(a, 1)
        }
      };
      this.Fc.push(d)
    }
  }, Ve:function() {
    Y(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.Ng, {defaultValue:this.Qe, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, Ng:function(a) {
    4 !== a && (this.Qe = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.jd = k;
          for(var a = 0, b = this.Fc.length;a < b;a++) {
            this.Fc[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          r.$.start(2);
          r.replaceScene(r.$)
        }.bind(this));
        break;
      case 2:
        this.Kb();
        break;
      case 3:
        r.ng()
    }
  }, Kb:function() {
    Y(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.ce, {defaultValue:this.qd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, ce:function(a) {
    3 !== a && (this.qd = a);
    switch(a) {
      case 0:
        this.de();
        break;
      case 1:
        this.ee();
        break;
      case 2:
        this.Tg();
        break;
      default:
        this.Ve()
    }
  }, de:function() {
    Y(this, "BGM VOLUME", "012345".split(""), this.ae, {defaultValue:r.rc, onCursorMove:function(a) {
      L !== l && "exit" !== a && (L.volume = 0.1 * a)
    }, showExit:m})
  }, ae:function(a) {
    6 !== a && (r.rc = a);
    this.Kb()
  }, ee:function() {
    Y(this, "SE VOLUME", "012345".split(""), this.be, {defaultValue:r.Xb, showExit:m})
  }, be:function(a) {
    6 !== a && (r.Xb = a);
    this.Kb()
  }, Tg:function() {
    Y(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Mg, {defaultValue:r.De, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Mg:function(a) {
    5 !== a && (r.De = a);
    this.Kb()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
tm.createClass({superClass:W, init:function() {
  this.superInit();
  tm.app.Label("This is ShipSelectScene").setAlign("center").setBaseline("middle").setPosition(240, 320).addChildTo(this)
}});
B = tm.createClass({superClass:W, da:l, score:0, va:0, wa:0, rd:0, Ba:0, Fb:0, bf:0, af:l, ta:l, Ob:3, wd:0, xd:0, qb:0, fc:0, Ec:0, Yd:0, ib:0, sc:0, eg:6, ic:m, Fa:0, Ja:0, ra:m, Cc:0, hc:0, ld:l, fe:l, Ee:l, Rd:l, Sd:l, Nd:l, Fg:l, eb:l, Ta:l, Eb:l, wc:m, Eg:m, init:function() {
  B.Uc !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  B.Uc = this;
  this.Ta = qa(this);
  this.Ta.Qa.addChildTo(this);
  this.ta = sa().ea;
  this.ta.addChildTo(this);
  this.ld = B.Qb().addChildTo(this);
  this.Ee = B.Qb().addChildTo(this);
  this.Rd = B.Qb().addChildTo(this);
  this.fe = B.Qb().addChildTo(this);
  this.Sd = B.Qb().addChildTo(this);
  this.Nd = B.Qb().addChildTo(this);
  this.Fg = B.oe(this).addChildTo(this);
  tm.Oa.Pb.vc.we = this;
  this.eb = tm.app.Object2D();
  this.eb.addChildTo(this);
  this.eb.update = function(a) {
    this.Pg(a)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Ta.clear()
  })
}, addChild:function(a) {
  a.Ra ? this.Rd.addChild(a) : a instanceof I ? this.Nd.addChild(a) : a instanceof H ? this.ld.addChild(a) : a instanceof G ? a.pb ? this.ld.addChild(a) : this.Ee.addChild(a) : a instanceof ca ? this.fe.addChild(a) : a === this.eb || a === this.ta || a instanceof B.Qb || a instanceof B.oe || a instanceof ra ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(a)))
}, update:function(a) {
  this.Ug(a.keyboard);
  0 === a.frame % 500 && (T = Ba(512));
  this.af.update(a.frame);
  0 === a.frame % 2 && this.Ta.update();
  a.keyboard.getKeyDown("escape") ? (this.app.replaceScene(t()), M()) : a.keyboard.getKeyDown("space") ? this.sd(0) : a.keyboard.getKeyDown("p") && (this.$e().saveAsImage(), this.sd(0))
}, $e:function() {
  var a = tm.graphics.Canvas();
  a.resize(480, 640);
  a.clearColor("black");
  a.drawImage(this.ta.ta.element, 0, 0);
  a.drawImage(this.app.canvas.element, 0, 0);
  a.drawImage(this.Ta.element, 0, 0);
  return a
}, Pg:function() {
  this.da.xb === m && z.erase();
  var a;
  a = [].concat(G.Ia);
  for(var b = [].concat(D.Ia), c = b.length;b[--c] !== i;) {
    for(var f = a.length;a[--f] !== i;) {
      var d = a[f], j = b[c];
      if(!(0 >= d.qa) && V(d, j) && (j.kd(1), j.remove(), d.yb(this.ra ? C.Hf : C.Lf))) {
        this.qb += 1;
        this.ra === m && this.qc(C.Df);
        this.$d(d);
        break
      }
    }
  }
  j = this.da.rb;
  if(this.da.rb.visible) {
    a = [].concat(G.Ia);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = a.length;a[--f] !== i;) {
      if(d = a[f], !(0 >= d.qa) && V(d, j)) {
        j.Vg(d.y + d.boundingHeightBottom);
        d.yb(this.ra ? C.Gf : C.If) ? (this.qb += 1, this.ra === m && this.qc(C.Bf), this.$d(d)) : (this.ad(0.01), this.Ba = Math.max(this.Ba, 0.05), this.ra === m && this.qc(C.Cf));
        j.kd(2);
        break
      }
    }
    b = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(G.Ia);
    for(f = a.length;a[--f] !== i;) {
      d = a[f], !(0 >= d.qa) && V(d, b) && (d.yb(this.ra ? C.yf : C.hf) ? (this.qb += 1, this.qc(C.zf), this.$d(d)) : (this.ad(0.01), this.Ba = Math.max(this.Ba, 0.05), this.qc(C.Af)), j.yg(2, this.da.x, this.da.y - 30))
    }
  }
  if(this.ic) {
    z.erase();
    a = [].concat(G.Ia);
    for(f = a.length;a[--f] !== i;) {
      d = a[f], !(0 >= d.qa) && (d.Jb() && d.yb(C.kf)) && (this.gb(d.score), this.qb += 1)
    }
    this.Ba = this.wa = 0
  }
  if(this.ra) {
    f = [].concat(D.Ia);
    for(d = f.length;f[--d] !== i;) {
      if(j = f[d], !(0 >= j.qa)) {
        b = [].concat(I.Ia);
        for(a = b.length;b[--a] !== i;) {
          c = b[a], 0 < j.qa && V(j, c) && (c.qa -= 6 - this.Ja, 0 > c.qa && (c.Wa(), this.gb(C.mf), this.ad(1), this.Ke(m, m, c.x, c.y, 1)), j.qa -= 1)
        }
      }
    }
  }
  if(this.wc) {
    z.erase()
  }else {
    if(this.da.parent !== l && this.da.kc === m && this.ic === m && 0 >= this.Cc) {
      for(f = I.Ia.length;I.Ia[--f] !== i;) {
        if(a = I.Ia[f], V(a, this.da)) {
          this.da.yb();
          0 < this.ib ? (this.Ja = R(this.Ja - 1, 0, 1), q.la.ua.$rank = R(q.la.ua.$rank - 0.01, 0, 1), ja(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.Te();
          break
        }
      }
      for(f = G.Ia.length;G.Ia[--f] !== i;) {
        if(d = G.Ia[f], !(0 >= d.qa) && !d.pb && V(d, this.da)) {
          this.da.yb();
          0 < this.ib ? (this.Ja = R(this.Ja - 1, 0, 1), q.la.ua.$rank = R(q.la.ua.$rank - 0.01, 0, 1), ja(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.Te();
          break
        }
      }
    }
    this.ra && (this.hc -= 1, 0 >= this.hc && this.yc());
    this.Cc = Math.max(this.Cc - 1, 0);
    this.Ba -= C.pf * C.qf;
    0 >= this.Ba && (this.Ba = 0, this.ra || 1 === this.Fa ? this.Fb = this.wa = this.va = 0 : (0 < this.wa && (0 >= this.Fb && (this.Fb = this.wa * C.of), this.va = this.va * (this.wa - this.Fb) / this.wa, this.wa -= this.Fb), 0 >= this.wa && (this.Fb = this.wa = this.va = 0)))
  }
}, $d:function(a) {
  this.Ke(a.pb, this.ra || Q(a, this.da) < C.sf, a.x, a.y, a.star);
  this.ad(1);
  if(!this.ra && 1 === this.Fa) {
    for(var b = this.va, c = ~~(this.wa / C.nf) + 1;0 < c;c--) {
      b += a.score, this.gb(b)
    }
    this.va += a.score * c
  }else {
    this.gb(this.va + a.score), this.va += a.score
  }
}, Ke:function(a, b, c, f, d) {
  a = a ? va : ua;
  for(var j = 0;j < d;j++) {
    a(b).setPosition(c, f)
  }
}, Jg:function(a) {
  P("star");
  a.Oe ? (this.xd += 1, this.gb(C.Qf), this.gb(0.2 * this.va), this.va += C.Of) : (this.wd += 1, this.gb(C.Pf), this.gb(0.1 * this.va), this.va += C.Nf)
}, start:function(a) {
  this.Ta.cc.fg().clear();
  this.score = 0;
  this.Ob = C.ne;
  this.ib = this.sc = C.me;
  this.Ja = this.Fa = 0;
  q.la.ua.$rank = 0;
  this.yc();
  this.ic = m;
  this.Ec = this.Yd = 0;
  this.da = ca(this, a);
  this.cf(0);
  this.Yg()
}, cf:function(a) {
  this.Sa("3...2...1...");
  this.da.parent !== l && this.da.remove();
  G.tc();
  D.tc();
  z.tc();
  this.ld.removeChildren();
  this.Rd.removeChildren();
  this.Sd.removeChildren();
  this.fe.removeChildren();
  this.Nd.removeChildren();
  this.eb.removeChildren();
  this.qb = this.fc = this.xd = this.wd = this.rd = this.Ba = this.wa = this.va = 0;
  this.Eb = l;
  this.Eg = this.wc = m;
  this.Ec = 0;
  this.Ta.Qa.zc = 0;
  this.Ta.Qa.zb = 0;
  this.bf = a;
  this.af = F.create(this, a);
  this.tweener.clear().wait(1E3).call(function() {
    this.Xd()
  }.bind(this))
}, Xd:function() {
  this.Sa("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.rb.addChildTo(this);
  this.da.xb = m;
  this.da.kc = k;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.xb = k
  }.bind(this.da)).wait(2E3).call(function() {
    this.kc = m
  }.bind(this.da))
}, Te:function() {
  A.fd(this.da.x, this.da.y, this);
  this.Sa("I was shot down.");
  this.da.xb = m;
  this.da.remove();
  this.Ob -= 1;
  this.Fb = this.wa = this.Ba = 0;
  this.Ec += 1;
  this.Yd += 1;
  this.Ja = R(this.Ja - 3, 0, 1);
  q.la.ua.$rank = R(q.la.ua.$rank - 0.03, 0, 1);
  0 < this.Ob ? this.tweener.clear().wait(1E3).call(function() {
    this.ib = this.sc = Math.min(this.sc + 1, this.eg);
    this.Xd()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.Sg()
  }.bind(this))
}, wg:function() {
  this.Sa("System rebooted.", k);
  this.score = 0;
  this.Ob = C.ne;
  this.ib = this.sc = C.me;
  this.Ja = 0;
  q.la.ua.$rank = 0;
  this.Xd()
}, gg:function() {
  M();
  this.app.pushScene(wa(this, this.$e()))
}, xg:function() {
  M();
  this.app.replaceScene(Ea())
}, ph:n(), gb:function(a) {
  var b = this.score;
  this.score += a;
  for(a = 0;a < r.He.length;a++) {
    var c = r.He[a];
    b < c && c <= this.score && this.qg()
  }
  r.md = Math.max(r.md, this.score)
}, ad:function(a) {
  this.ra && (a *= C.rf * this.Ja);
  this.Fb = 0;
  this.wa += a;
  this.rd = Math.max(this.rd, this.wa);
  1 <= a && (this.Ba = 1)
}, qc:function(a) {
  !(0 < a && 1 === this.Fa) && !(0 > a && 0 === this.Fa) && (this.ra && (a *= C.Ff), this.Fa = R(this.Fa + a * C.Ef, 0, 1), 1 === this.Fa ? (0.5 > Math.random() ? this.Sa("HYPER SYSTEM, ready.", k) : this.Sa("HYPER SYSTEM, stand by.", k), pa(this.da).addChildTo(this), P("voHyperReady")) : 0 === this.Fa && this.yc())
}, Xg:function() {
  0.5 > Math.random() ? (this.Sa("HYPER SYSTEM start!!", k), P("voHyperStart0")) : (this.Sa("start counting to system limit.", k), P("voHyperStart1"));
  this.ra = k;
  this.Fa = 0;
  this.Ja = R(this.Ja + 1, 0, 5);
  q.la.ua.$rank = R(q.la.ua.$rank + 0.02 * this.Ja, 0, 1);
  q.la.ua.$hyperOff = C.uf;
  this.hc = C.Pc;
  this.Cc = C.Pc * C.xf;
  this.da.dc = this.da.Me;
  this.da.rb.Jc("hyper");
  A.zg(this.da.x, this.da.y, this)
}, yc:function() {
  this.ra !== m && (this.ra = m, pa(this.da, k).addChildTo(this), this.da.dc = this.da.Ue, this.da.rb.Jc("blue"), q.la.ua.$hyperOff = 1, this.Cc = C.Pc * C.wf, this.hc = 0, z.erase())
}, qg:function() {
  this.Sa("extended.");
  this.Ob += 1
}, Sa:function(a, b) {
  this.Ta.cc.bg(a, b)
}, sd:function(a) {
  Y(this, "PAUSE", ["resume", "setting", "exit game"], this.Og, {defaultValue:a, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:m})
}, Og:function(a) {
  switch(a) {
    case 1:
      this.Kb();
      break;
    case 2:
      this.Rg()
  }
}, Kb:function() {
  Y(this, "SETTING", ["bgm volume", "sound volume"], this.ce, {defaultValue:this.qd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, ce:function(a) {
  3 !== a && (this.qd = a);
  switch(a) {
    case 0:
      this.de();
      break;
    case 1:
      this.ee();
      break;
    default:
      this.sd()
  }
}, Rg:function() {
  Y(this, "REARY?", ["yes", "no"], this.Kg, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:m})
}, Kg:function(a) {
  0 === a ? (M(), this.app.replaceScene(t())) : this.sd(1)
}, de:function() {
  Y(this, "BGM VOLUME", "012345".split(""), this.ae, {defaultValue:r.rc, onCursorMove:function(a) {
    L !== l && 6 !== a && (L.volume = 0.1 * a)
  }, showExit:m})
}, ae:function(a) {
  6 !== a && (r.rc = a);
  this.Kb(1)
}, ee:function() {
  Y(this, "SE VOLUME", "012345".split(""), this.be, {defaultValue:r.Xb, showExit:m})
}, be:function(a) {
  6 !== a && (r.Xb = a);
  this.Kb(1)
}, Sg:function() {
  Y(this, "CONTINUE?", ["yes", "no"], this.Lg, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:m})
}, Lg:function(a) {
  switch(a) {
    case 0:
      this.wg();
      break;
    case 1:
      this.xg()
  }
}, draw:n(), Wg:function() {
  this.Ta.Qa.tweener.clear().to({zc:-480}, 1600, "easeInQuad").to({zb:22}, 800, "easeInOutQuad")
}, Bg:function() {
  this.Ta.Qa.tweener.clear().to({zb:0}, 800, "easeInOutQuad").to({zc:0}, 1600, "easeOutQuad")
}, Hc:l, Ic:0, Dc:l, Sc:0, Yg:function() {
  if(1 === this.Sc) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.Dc = [];
      for(var a = ~~localStorage.getItem("recCount"), b = 0;b < a;b++) {
        localStorage.removeItem("rec" + b)
      }
      localStorage.removeItem("recCount")
    }
    this.Hc = [];
    this.Ic = 0
  }else {
    if(2 === this.Sc && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.Dc = [];
      a = ~~localStorage.getItem("recCount");
      for(b = 0;b < a;b++) {
        for(var c = localStorage.getItem("rec" + b).split(","), f = 0;f < c.length;f++) {
          this.Dc.push(c[f])
        }
      }
    }
  }
}, Ug:function(a) {
  if(1 === this.Sc) {
    1E3 < this.Hc.length && (console.log("save"), localStorage.setItem("rec" + this.Ic, this.Hc), localStorage.setItem("recCount", this.Ic), this.Hc = [], this.Ic += 1), this.Hc.push("" + ~~a.getKey("up") + ~~a.getKey("down") + ~~a.getKey("left") + ~~a.getKey("right") + ~~a.getKey("z") + ~~a.getKey("x") + ~~a.getKey("c"))
  }else {
    if(2 === this.Sc && this.Dc) {
      var b = this.Dc.shift();
      b !== i && (a.getKey = function(a) {
        if("up" === a) {
          return!!~~b[0]
        }
        if("down" === a) {
          return!!~~b[1]
        }
        if("left" === a) {
          return!!~~b[2]
        }
        if("right" === a) {
          return!!~~b[3]
        }
        if("z" === a) {
          return!!~~b[4]
        }
        if("x" === a) {
          return!!~~b[5]
        }
        if("c" === a) {
          return!!~~b[6]
        }
        m
      }, a.getKeyDown = function(a) {
        if("up" === a) {
          return!!~~b[0]
        }
        if("down" === a) {
          return!!~~b[1]
        }
        if("left" === a) {
          return!!~~b[2]
        }
        if("right" === a) {
          return!!~~b[3]
        }
        if("z" === a) {
          return!!~~b[4]
        }
        if("x" === a) {
          return!!~~b[5]
        }
        if("c" === a) {
          return!!~~b[6]
        }
        m
      })
    }
  }
}});
B.Qb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
B.oe = tm.createClass({superClass:tm.app.CanvasElement, $:l, frame:0, init:function(a) {
  this.superInit();
  this.$ = a
}, update:function(a) {
  this.frame = a.frame
}, draw:function(a) {
  this.jg(a);
  this.kg(a)
}, jg:function(a) {
  if(0 < this.$.Ba) {
    a.fillStyle = "rgba(255," + ~~(255 * this.$.Ba) + "," + ~~Math.min(255, 512 * this.$.Ba) + ",0.5)";
    var b = 500 * this.$.Ba;
    a.fillRect(465, 635 - b, 10, b)
  }
}, kg:function(a) {
  1 === this.$.Fa ? 0 === this.frame % 2 && (a.fillStyle = "rgba(255,255,255,0.8)", a.fillRect(5, 628, 200, 9)) : (a.fillStyle = "rgba(255,255,0,0.3)", a.fillRect(5, 628, 200, 9), 0 < this.$.Fa && (a.fillStyle = "rgba(255,255,100,1.0)", a.fillRect(5, 628, 200 * this.$.Fa, 9)))
}});
B.Uc = l;
wa = tm.createClass({superClass:W, $:l, Xe:l, lc:l, eb:l, values:l, labels:l, od:l, Ne:l, he:l, cursor:0, wait:0, init:function(a, b) {
  this.superInit();
  this.$ = a;
  this.values = [this.$.wd, this.$.xd, ~~(100 * (this.$.qb / this.$.fc)), 0 === this.$.Ec ? 1E5 : 0];
  this.od = this.values.map(function(a) {
    return 0.01 * a
  });
  tm.app.Label("RESULT", 40).setPosition(240, 64).addChildTo(this);
  tm.app.Label("STAR (S)").setAlign("right").setBaseline("middle").setPosition(192, 192).addChildTo(this);
  tm.app.Label("STAR (L)").setAlign("right").setBaseline("middle").setPosition(192, 256).addChildTo(this);
  tm.app.Label("KILL RATIO").setAlign("right").setBaseline("middle").setPosition(192, 320).addChildTo(this);
  tm.app.Label("NO MISS BONUS", 20).setAlign("right").setBaseline("middle").setPosition(192, 384).addChildTo(this);
  tm.app.Label("TOTAL").setAlign("right").setBaseline("middle").setPosition(192, 512).addChildTo(this);
  this.labels = [];
  for(var c = 0;c < this.values.length;c++) {
    this.labels[c] = tm.app.Label("" + this.values[c]).setAlign("right").setBaseline("middle").setPosition(432, 640 * (0.3 + 0.1 * c)).addChildTo(this)
  }
  this.Ne = tm.app.Label(Math.floor(this.$.score)).setAlign("right").setBaseline("middle").setPosition(432, 512).addChildTo(this);
  this.he = tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.he.visible = m;
  this.background = tm.graphics.RadialGradient(240, 320, 0, 240, 320, 640).addColorStopList([{offset:0, color:"hsl(208, 90%, 40%)"}, {offset:1, color:"hsl(208, 90%, 10%)"}]).toStyle();
  this.Xe = b;
  this.lc = [];
  for(c = 0;12 > c;c++) {
    this.lc[c] = [];
    for(var f = 0;16 > f;f++) {
      this.lc[c][f] = {p:0, v:S(2, 8)}
    }
  }
  this.eb = tm.app.Object2D();
  this.eb.draw = function(a) {
    for(var b = k, c = 0;c < this.lc.length;c++) {
      for(var f = 0;f < this.lc[c].length;f++) {
        var s = this.lc[c][f];
        640 > 40 * f + s.p && (a.drawImage(this.Xe.element, 40 * c, 40 * f, 40, 40, 40 * c, 40 * f + s.p, 40, 40), s.p += s.v, s.v += 0.2, b = m)
      }
    }
    b ? (this.eb.remove(), this.wait = 60) : this.wait = 100
  }.bind(this);
  this.eb.addChildTo(this);
  this.addEventListener("enter", function() {
    xa("")
  });
  this.addEventListener("exit", function() {
    M()
  })
}, update:function(a) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var b = this.cursor;
    if(4 > b) {
      P("star"), this.values[b] <= this.od[b] || a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space") ? (this.$.gb(this.values[b]), this.values[b] = 0, this.cursor += 1, this.wait = 30) : (this.$.gb(this.od[b]), this.values[b] -= this.od[b]), this.labels[b].text = "" + Math.floor(this.values[b]), this.Ne.text = Math.floor(this.$.score)
    }else {
      if(this.he.visible = k, a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("space")) {
        this.$.cf(this.$.bf + 1), a.popScene()
      }
    }
  }
}, draw:function(a) {
  a.clearColor(this.background)
}});
var Ea = tm.createClass({superClass:W, init:function() {
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
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:n()});
(function() {
  G = tm.createClass({superClass:tm.app.CanvasElement, frame:0, direction:0, speed:0, da:l, $:l, ca:l, aa:l, qa:0, score:0, pb:m, erase:m, star:1, Dg:m, jb:k, cb:m, zd:l, init:function(b, c, f) {
    this.superInit();
    this.addEventListener("completeattack", function() {
      this.Xa()
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
    this.jb = k;
    this.cb = m;
    this.$ = b;
    this.da = b.da;
    this.aa = c;
    this.ca = f;
    this.score = 100;
    this.erase = m;
    this.aa.oa.apply(this);
    this.ca.oa.apply(this);
    this.altitude = this.pb ? 1 : 10;
    this.zd = {x:0, y:0}
  }, Ab:function() {
    this.aa.Ab.apply(this);
    this.ca.Ab.apply(this);
    return this
  }, Xa:function() {
    this.aa.Xa.apply(this);
    this.ca.Xa.apply(this)
  }, update:function() {
    this.cb === m && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.cb = k, this.aa.Ub.apply(this), this.ca.Ub.apply(this));
    var a = this.x, c = this.y;
    this.aa.update.apply(this);
    this.ca.update.apply(this);
    this.pb && (this.x += this.$.ta.ma, this.y += this.$.ta.na);
    this.frame += 1;
    this.zd.x = this.x - a;
    this.zd.y = this.y - c
  }, yb:function(a) {
    if(!this.cb) {
      return m
    }
    this.qa -= a;
    return 0 >= this.qa ? (a = S(0, 5), 2 > a ? this.$.Sa("enemy destroy.") : 4 > a ? this.$.Sa(this.name + " destroy.") : this.$.Sa("ETR reaction gone."), this.erase && z.erase(k), this.aa.Wa.apply(this), this.ca.Wa.apply(this), k) : m
  }, draw:function(a) {
    this.ca.draw.call(this, a)
  }, Jb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Qg:function() {
    return this.jb
  }});
  G.tc = function() {
    for(var b = [].concat(a), c = 0, f = b.length;c < f;c++) {
      b[c].remove()
    }
  };
  var a = G.Ia = []
})();
(function() {
  function a() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && A.fd(this.x + U(-100, 100), this.y + U(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:2, y:this.y + 200}, 2E3).call(function() {
      A.Fe(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }
  function b() {
    this.remove();
    this.pb = k;
    this.$.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && A.fd(this.x + U(-100, 100), this.y + U(-40, 40), this.$, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:2, y:this.y + 200, scaleX:0.9, scaleY:0.9, rotation:Math.rand(-10, 10)}, 2E3).call(function() {
      A.Fe(this.x, this.y, this.$);
      this.remove()
    }.bind(this))
  }
  function c(a, b) {
    b.name = a;
    b.qa = f[a][0];
    b.score = f[a][1];
    b.pb = f[a][2];
    b.erase = f[a][3];
    b.star = f[a][4]
  }
  var f = {kujo:[2, 300, m, m, 1], kiryu:[3, 400, m, m, 1], natsuki:[5, 900, k, m, 1], kise:[35, 15E3, k, m, 1], kurokawa:[35, 5E3, m, m, 5], akimoto:[250, 3E5, m, k, 10], yukishiro:[750, 8E5, m, k, 20], misumi:[3E3, 2E6, m, k, 0]};
  J = tm.createClass({oa:function() {
    this.name = "abstract enemy";
    this.qa = 9999
  }, Ab:n(), Xa:n(), update:n(), Ub:n(), draw:n(), Wa:function() {
    A.fd(this.x, this.y, this.$, this.zd);
    this.remove()
  }});
  J.xa = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, oa:function() {
    c("kujo", this);
    this.ia = d("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.ia.setFrameIndex(7) : this.ia.setFrameIndex(8);
    this.ia.draw(a)
  }});
  J.xa = J.xa();
  J.fa = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, oa:function() {
    c("kiryu", this);
    this.ia = d("tex1", 64, 64);
    this.boundingRadius = 24
  }, update:function() {
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    2 > this.frame % 4 ? this.ia.setFrameIndex(9) : this.ia.setFrameIndex(10);
    this.ia.draw(a)
  }});
  J.fa = J.fa();
  J.Aa = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, oa:function() {
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
  }, Wa:function() {
    A.og(this.x, this.y, this.$);
    this.remove()
  }});
  J.Aa = J.Aa();
  J.ub = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, oa:function() {
    c("kurokawa", this);
    this.ia = d("tex1", 128, 128);
    this.ia.srcRect.x = 320;
    this.ia.srcRect.y = 128;
    this.ia.srcRect.width = 128;
    this.ia.srcRect.height = 128;
    this.boundingWidth = 100;
    this.boundingHeight = 20
  }, update:n(), draw:function(a) {
    this.ia.draw(a)
  }, Wa:function() {
    A.Ge(this.x, this.y, this.$);
    this.remove()
  }});
  J.ub = J.ub();
  J.Qc = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, oa:function() {
    c("akimoto", this);
    this.ia = d("tex1", 256, 128);
    this.ia.srcRect.x = 64;
    this.ia.srcRect.y = 128;
    this.ia.srcRect.width = 256;
    this.ia.srcRect.height = 128;
    this.boundingWidth = 200;
    this.boundingHeightBottom = 10;
    this.boundingHeightTop = 60
  }, update:n(), draw:function(a) {
    this.ia.draw(a)
  }, Wa:function() {
    b.call(this)
  }});
  J.Qc = J.Qc();
  J.sa = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, oa:function() {
    c("kise", this);
    this.ia = d("tex1", 128, 128);
    this.ia.srcRect.x = 128;
    this.ia.srcRect.y = 256;
    this.ia.srcRect.width = 128;
    this.ia.srcRect.height = 128;
    this.boundingHeight = this.boundingWidth = 20
  }, draw:function(a) {
    this.ia.draw(a)
  }, Wa:function() {
    A.Ge(this.x, this.y, this.$);
    this.remove()
  }});
  J.sa = J.sa();
  J.nc = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, oa:function() {
    c("yukishiro", this);
    this.boundingWidth = 200;
    this.boundingHeight = 80
  }, Wa:function() {
    b.call(this)
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-100, -40, 200, 80)
  }});
  J.nc = J.nc();
  J.oc = tm.createClass({superClass:J, init:function() {
    this.superInit()
  }, oa:function() {
    c("misumi", this);
    this.boundingWidth = 200;
    this.boundingHeight = 150
  }, draw:function(a) {
    a.strokeStyle = "yellow";
    a.strokeRect(-100, -75, 200, 150)
  }, Wa:function() {
    a.call(this)
  }});
  J.oc = J.oc();
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
        b[d] && b[d].pd && a.removeEventListener("enterframe", b[d])
      }
    }
  }
  function b(a, b) {
    var d = z[b].ed();
    a.addEventListener("enterframe", d);
    a.addEventListener("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  }
  K = tm.createClass({oa:n(), Ab:n(), Xa:n(), update:n(), Ub:n(), Wa:function() {
    a(this)
  }});
  K.Za = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, Ab:function() {
    var a = v.randf(64, 192);
    this.tweener.clear().wait(v.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, Xa:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  K.Za = K.Za();
  K.ya = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, Ab:function() {
    var a = v.randf(192, 320);
    this.tweener.clear().wait(v.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, Xa:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  K.ya = K.ya();
  K.Cb = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, Ab:function() {
    var a = v.randf(448, 576);
    this.tweener.clear().wait(v.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
      b(this, "basic0-0")
    }.bind(this))
  }, Xa:function() {
    this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(this))
  }});
  K.Cb = K.Cb();
  K.fa = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, oa:function() {
    this.angle = 0.5 * Math.PI;
    this.je = v.rand(0, 60);
    this.speed = 0
  }, update:function() {
    this.frame === this.je ? this.speed = 8 : this.frame === this.je + 10 ? b(this, "basic1-0") : this.je < this.frame && this.y < this.da.y && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = R(this.angle, 0.5, Math.PI - 0.5));
    this.x += Math.cos(this.angle) * this.speed;
    this.y += Math.sin(this.angle) * this.speed;
    !this.Jb() && this.cb && this.remove();
    if(9E4 > Q(this, this.da) || this.y > this.da.y) {
      this.jb = m
    }
  }});
  K.fa = K.fa();
  K.eh = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, oa:function() {
    this.speed = 0.8;
    this.dir = 0
  }, Ub:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.cb && !this.Jb() && this.remove();
    this.jb = this.y < this.da.y
  }});
  K.Va = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, oa:function() {
    this.speed = 0.7;
    this.dir = 0.25 * Math.PI
  }, Ub:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.cb && !this.Jb() && this.remove();
    this.jb = this.y < this.da.y
  }});
  K.Va = K.Va();
  K.Rb = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, oa:function() {
    this.speed = 1;
    this.dir = Math.PI
  }, Ub:function() {
    b(this, "basic2-0")
  }, update:function() {
    this.x += Math.cos(this.dir) * this.speed;
    this.y += Math.sin(this.dir) * this.speed;
    this.cb && !this.Jb() && this.remove();
    this.jb = this.y < this.da.y
  }});
  K.Rb = K.Rb();
  K.sa = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, oa:function() {
    this.speed = 1;
    this.dir = Math.PI
  }, Ub:function() {
    b(this, "basic3-0")
  }, update:function() {
    this.cb && !this.Jb() && this.remove();
    this.jb = this.y < this.da.y
  }});
  K.sa = K.sa();
  K.vb = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, oa:function() {
    this.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      b(this, "kurokawa-1")
    }.bind(this))
  }, update:function() {
    this.y += 0.5;
    this.cb && !this.Jb() && this.remove();
    this.jb = this.y < this.da.y
  }});
  K.vb = K.vb();
  K.Rc = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, oa:function() {
    this.tweener.clear().moveBy(0, 320, 1800, "easeOutQuad").call(function() {
      b(this, "komachi-1")
    }.bind(this))
  }, update:function() {
    this.y += 0.3;
    this.cb && !this.Jb() && this.remove();
    this.jb = this.y < this.da.y
  }});
  K.Rc = K.Rc();
  K.Jf = tm.createClass({superClass:K, Vb:l, init:function(a) {
    this.superInit();
    this.Vb = a
  }, oa:function() {
    this.xc = this.yd = m;
    this.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.yd = k;
      this.Xa();
      var a = function() {
        var b = 2 * v.random() * Math.PI, d = v.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(this))
  }, update:function() {
    if(!(this.yd === m || 0 >= this.qa) && 1500 < this.frame && this.xc === m) {
      this.xc = k, a(this), this.tweener.clear().move(this.x, -100, 1200, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    }
  }, Xa:function() {
    if(!this.xc) {
      var a = this.aa.Vb.shift();
      b(this, a);
      this.aa.Vb.push(a)
    }
  }});
  K.nc = K.Jf(["honoka-1"]);
  K.oc = tm.createClass({superClass:K, Vb:l, init:function(a) {
    this.superInit();
    this.Vb = a
  }, oa:function() {
    this.xc = this.yd = m;
    this.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.yd = k;
      this.Xa();
      var a = function() {
        var b = 2 * v.random() * Math.PI, d = v.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 64 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(this))
  }, Xa:function() {
    if(!this.xc) {
      var a = this.aa.Vb.shift();
      b(this, a);
      this.aa.Vb.push(a)
    }
  }});
  K.Kf = K.oc(["honoka-1"]);
  K.Ed = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, oa:function() {
    this.d = -1
  }, update:function() {
    this.x += this.d;
    10 > this.x ? this.d = 1 : 470 < this.x && (this.d = -1)
  }});
  K.Ed = K.Ed();
  K.Fd = tm.createClass({superClass:K, init:function() {
    this.superInit()
  }, oa:function() {
    this.d = -1
  }, update:function() {
    this.y += this.d;
    10 > this.y ? this.d = 1 : 470 < this.x && (this.d = -1)
  }});
  K.Fd = K.Fd()
})();
var Z = K, $ = J;
la = {"heri1-left":[{aa:Z.Za, ca:$.fa, x:48, y:-100}, {aa:Z.ya, ca:$.fa, x:96, y:-100}, {aa:Z.Za, ca:$.fa, x:144, y:-100}, {aa:Z.ya, ca:$.fa, x:192, y:-100}, {aa:Z.Za, ca:$.fa, x:240, y:-100}], "heri1-center":[{aa:Z.Za, ca:$.fa, x:144, y:-100}, {aa:Z.ya, ca:$.fa, x:192, y:-100}, {aa:Z.Za, ca:$.fa, x:240, y:-100}, {aa:Z.ya, ca:$.fa, x:288, y:-100}, {aa:Z.Za, ca:$.fa, x:336, y:-100}], "heri1-right":[{aa:Z.Za, ca:$.fa, x:240, y:-100}, {aa:Z.ya, ca:$.fa, x:288, y:-100}, {aa:Z.Za, ca:$.fa, x:336, y:-100}, 
{aa:Z.ya, ca:$.fa, x:384, y:-100}, {aa:Z.Za, ca:$.fa, x:432, y:-100}], "heri1-left2":[{aa:Z.ya, ca:$.fa, x:48, y:-100}, {aa:Z.Cb, ca:$.fa, x:96, y:-100}, {aa:Z.ya, ca:$.fa, x:144, y:-100}, {aa:Z.Cb, ca:$.fa, x:192, y:-100}, {aa:Z.ya, ca:$.fa, x:240, y:-100}], "heri1-center2":[{aa:Z.ya, ca:$.fa, x:144, y:-100}, {aa:Z.Cb, ca:$.fa, x:192, y:-100}, {aa:Z.ya, ca:$.fa, x:240, y:-100}, {aa:Z.Cb, ca:$.fa, x:288, y:-100}, {aa:Z.ya, ca:$.fa, x:336, y:-100}], "heri1-right2":[{aa:Z.ya, ca:$.fa, x:240, y:-100}, 
{aa:Z.Cb, ca:$.fa, x:288, y:-100}, {aa:Z.ya, ca:$.fa, x:336, y:-100}, {aa:Z.Cb, ca:$.fa, x:384, y:-100}, {aa:Z.ya, ca:$.fa, x:432, y:-100}], "heri2-left":[{aa:Z.fa, ca:$.xa, x:48, y:-100}, {aa:Z.fa, ca:$.xa, x:96, y:-100}, {aa:Z.fa, ca:$.xa, x:144, y:-100}, {aa:Z.fa, ca:$.xa, x:192, y:-100}, {aa:Z.fa, ca:$.xa, x:240, y:-100}], "heri2-center":[{aa:Z.fa, ca:$.xa, x:144, y:-100}, {aa:Z.fa, ca:$.xa, x:192, y:-100}, {aa:Z.fa, ca:$.xa, x:240, y:-100}, {aa:Z.fa, ca:$.xa, x:288, y:-100}, {aa:Z.fa, ca:$.xa, 
x:336, y:-100}], "heri2-right":[{aa:Z.fa, ca:$.xa, x:240, y:-100}, {aa:Z.fa, ca:$.xa, x:288, y:-100}, {aa:Z.fa, ca:$.xa, x:336, y:-100}, {aa:Z.fa, ca:$.xa, x:384, y:-100}, {aa:Z.fa, ca:$.xa, x:432, y:-100}], "tankRD-left":[{aa:Z.Va, ca:$.Aa, x:78, y:-50}, {aa:Z.Va, ca:$.Aa, x:28, y:-100}, {aa:Z.Va, ca:$.Aa, x:-22, y:-150}, {aa:Z.Va, ca:$.Aa, x:-72, y:-200}, {aa:Z.Va, ca:$.Aa, x:-122, y:-250}], "tankRD-center":[{aa:Z.Va, ca:$.Aa, x:222, y:-50}, {aa:Z.Va, ca:$.Aa, x:172, y:-100}, {aa:Z.Va, ca:$.Aa, 
x:122, y:-150}, {aa:Z.Va, ca:$.Aa, x:72, y:-200}, {aa:Z.Va, ca:$.Aa, x:22, y:-250}], "tankL-top":[{aa:Z.Rb, ca:$.Aa, x:550, y:-128}, {aa:Z.Rb, ca:$.Aa, x:620, y:-128}, {aa:Z.Rb, ca:$.Aa, x:690, y:-128}, {aa:Z.Rb, ca:$.Aa, x:760, y:-128}, {aa:Z.Rb, ca:$.Aa, x:830, y:-128}], "cannon-0":[{aa:Z.sa, ca:$.sa, x:48, y:-100}], "cannon-1":[{aa:Z.sa, ca:$.sa, x:96, y:-100}], "cannon-2":[{aa:Z.sa, ca:$.sa, x:144, y:-100}], "cannon-3":[{aa:Z.sa, ca:$.sa, x:192, y:-100}], "cannon-4":[{aa:Z.sa, ca:$.sa, x:240, 
y:-100}], "cannon-5":[{aa:Z.sa, ca:$.sa, x:288, y:-100}], "cannon-6":[{aa:Z.sa, ca:$.sa, x:336, y:-100}], "cannon-7":[{aa:Z.sa, ca:$.sa, x:384, y:-100}], "cannon-8":[{aa:Z.sa, ca:$.sa, x:432, y:-100}], "fighter-m-0":[{aa:Z.vb, ca:$.ub, x:96, y:-192}], "fighter-m-1":[{aa:Z.vb, ca:$.ub, x:144, y:-192}], "fighter-m-2":[{aa:Z.vb, ca:$.ub, x:192, y:-192}], "fighter-m-3":[{aa:Z.vb, ca:$.ub, x:240, y:-192}], "fighter-m-4":[{aa:Z.vb, ca:$.ub, x:288, y:-192}], "fighter-m-5":[{aa:Z.vb, ca:$.ub, x:336, y:-192}], 
"fighter-m-6":[{aa:Z.vb, ca:$.ub, x:384, y:-192}], "komachi-0":[{aa:Z.Rc, ca:$.Qc, x:144, y:-192}], "komachi-1":[{aa:Z.Rc, ca:$.Qc, x:336, y:-192}], yukishiro:[{aa:Z.nc, ca:$.nc, x:240, y:-100}], misumi:[{aa:[Z.Kf, Z.Ed, Z.Fd], ca:$.oc, x:240, y:-100, Eb:k}]};
(function() {
  function a(a, b) {
    return h.action([b(a), h.repeat(4, [b(h.speed(0.01, "sequence"))])])
  }
  function b(a, b, c, d, f) {
    return h.action([h.ka(h.direction(a, "absolute"), c, d, f, i, i), h.repeat(11, [h.ka(h.direction((b - a) / 11, "sequence"), c, d, f, i, i)])])
  }
  function c(a, b, c, d, f, j, p) {
    return h.action([h.ka(h.direction(b), d, f, j, p, i), h.repeat(a - 1, [h.ka(h.direction((c - b) / (a - 1), "sequence"), d, f, j, p, i)])])
  }
  function f(a) {
    return h.ka(h.direction(0), a || p, h.ga({frame:0}))
  }
  function d(a) {
    return h.ka(h.direction(0), a || p, h.ga)
  }
  function j(a) {
    return h.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return h.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function u(a) {
    return h.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return h.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function w(a) {
    return h.wait(a + "*(1-$rank)*$hyperOff")
  }
  z = {};
  var h = q.pa;
  z["basic0-0"] = new q.za({top:h.action([d])});
  z["basic0-4"] = new q.za({top:h.action([h.repeat(3, [h.repeat(5, [h.ka(h.direction(-20), h.speed("$loop.count*0.06+0.75"), h.ga), h.ka(h.direction(0), h.speed("$loop.count*0.06+0.75"), h.ga), h.ka(h.direction(20), h.speed("$loop.count*0.06+0.75"), h.ga)]), w(40)])])});
  z["basic1-0"] = new q.za({top:h.action([h.repeat(999, [w(20), d(function(a) {
    return h.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  })])])});
  z["basic2-0"] = new q.za({top:h.action([h.wait("120"), h.repeat(999, [w(50), d(j)])])});
  z["basic3-0"] = new q.za({top:h.action([h.wait(20), h.repeat(999, [w(100), f(j(0)), f(j(1)), f(j(2))])])});
  z["kurokawa-1"] = new q.za({top0:h.action([h.repeat(999, [a(j, function(a) {
    return c(4, -45, 45, a, h.ga({frame:2}), h.offsetX(-45), h.Ma(k))
  }), a(j, function(a) {
    return c(4, -45, 45, a, h.ga({frame:2}), h.offsetX(45), h.Ma(k))
  }), w(90)])]), top1:h.action([h.repeat(999, [h.ka(h.direction(0), j, h.ga({hb:k, frame:3}), h.offsetX(-45), h.Ma(k)), w(45), h.ka(h.direction(0), j, h.ga({hb:k, frame:3}), h.offsetX(45), h.Ma(k)), w(45)])])});
  z["komachi-1"] = new q.za({top0:h.action([h.repeat(20, [h.ka(h.direction(210, "absolute"), s(1), h.ga, h.offsetX(-40)), h.ka(h.direction(120, "sequence"), s(1), h.ga, h.offsetX(-40)), h.ka(h.direction(120, "sequence"), s(1), h.ga, h.offsetX(-40)), h.repeat(57, [w(8), h.ka(h.direction(-720 / 57, "sequence"), s(1), h.ga, h.offsetX(-40)), h.ka(h.direction(120, "sequence"), s(1), h.ga, h.offsetX(-40)), h.ka(h.direction(120, "sequence"), s(1), h.ga, h.offsetX(-40))])])]), top1:h.action([h.repeat(20, 
  [h.ka(h.direction(-210, "absolute"), s(1), h.ga, h.offsetX(40)), h.ka(h.direction(120, "sequence"), s(1), h.ga, h.offsetX(40)), h.ka(h.direction(120, "sequence"), s(1), h.ga, h.offsetX(40)), h.repeat(57, [w(8), h.ka(h.direction(720 / 57, "sequence"), s(1), h.ga, h.offsetX(40)), h.ka(h.direction(120, "sequence"), s(1), h.ga, h.offsetX(40)), h.ka(h.direction(120, "sequence"), s(1), h.ga, h.offsetX(40))])])]), top2:h.action([h.repeat(70, [h.ka(h.direction(0), p(0), h.ga({hb:k, frame:0}), h.offsetX(-110), 
  h.Ma(k)), h.repeat(3, [h.wait(3), h.ka(h.direction(0, "sequence"), p(0), h.ga({hb:k, frame:0}), h.offsetX(-110), h.Ma(k))]), w(10), h.ka(h.direction(0), p(0), h.ga({hb:k, frame:0}), h.offsetX(110), h.Ma(k)), h.repeat(3, [h.wait(3), h.ka(h.direction(0, "sequence"), p(0), h.ga({hb:k, frame:0}), h.offsetX(110), h.Ma(k))]), w(10)])])});
  z["honoka-1"] = new q.za({top0:h.action([h.wait(60), h.repeat(10, [c(6, -40, 40, p, h.ga({hb:k, frame:4})), w(30), c(7, -40, 40, u, h.ga({hb:k, frame:4})), w(30)])]), top1:h.action([h.wait(60), h.repeat(5, [c(2, -2, 2, u(2), h.ga({frame:1})), c(3, -3, 3, u(3), h.ga({frame:1})), c(4, -4, 4, u(4), h.ga({frame:1})), c(5, -5, 5, u(5), h.ga({frame:1})), w(110)])]), top2:h.action([h.repeat(20, [b(-10, -170, s, h.ga({hb:k, frame:0}), h.offsetX(-80)), w(30)])]), top3:h.action([h.repeat(20, [b(10, 170, 
  s, h.ga({hb:k, frame:0}), h.offsetX(80)), w(30)])])});
  z.oa = function() {
    for(var a = 0;800 > a;a++) {
      X.push(I())
    }
    a = z.dd = tm.Oa.Pb.vc;
    a.Wd = function(a) {
      return!(a instanceof I) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.ye = function(a) {
      var b = X.shift(0);
      if(b) {
        return N.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.hb ? (b.scaleX = 1, b.scaleY = 1, b.Nb = m, b.update = function() {
          this.rotation += 15
        }) : (b.scaleX = 0.8, b.scaleY = 1.5, b.Nb = k), b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Ae = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.Zb = 4;
    q.la.ua.$rank = 0;
    q.la.ua.$hyperOff = 1
  };
  z.erase = function(a) {
    for(var b = [].concat(N), c = 0, d = b.length;c < d;c++) {
      a && ua(m).setPosition(b[c].x, b[c].y), b[c].Wa()
    }
  };
  z.tc = function() {
    for(var a = [].concat(N), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  I = tm.createClass({superClass:tm.app.Sprite, qa:0, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("added", function() {
      this.qa = C.lf
    });
    this.addEventListener("removed", function() {
      X.push(this);
      var a = N.indexOf(this);
      -1 !== a && N.splice(a, 1);
      this.clearEventListener("enterframe")
    })
  }, Wa:function() {
    var a = E(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var X = [], N = I.Ia = []
})();
(function() {
  function a(a) {
    var c = [].concat(a._listeners.enterframe);
    if(c) {
      for(var f = 0, d = c.length;f < d;f++) {
        c[f] && c[f].pd && a.removeEventListener("enterframe", c[f])
      }
    }
  }
  ma = tm.createClass({superClass:G, Dg:k, gc:0, vd:l, init:function(a, c, f) {
    this.vd = c;
    this.superInit(a, this.vd[0], f);
    this.gc = this.qa;
    this.addEventListener("added", function() {
      this.$.Eb = this;
      this.$.Wg();
      this.tweener.wait(1E3).call(function() {
        this.$.wc = m
      }.bind(this))
    });
    this.addEventListener("removed", function() {
      this.$.Eb = l;
      this.$.Bg();
      var a = tm.app.Object2D();
      a.tweener.wait(7E3).call(function() {
        this.$.gg()
      }.bind(this));
      a.addChildTo(this.$.eb)
    })
  }, yb:function(b) {
    var c = this.qa;
    if(this.superClass.prototype.yb.call(this, b)) {
      return this.$.wc = k, M(), k
    }
    this.qa <= 0.6 * this.gc && 0.6 * this.gc < c ? (a(this), this.tweener.clear(), this.aa = this.vd[1], this.aa.oa.call(this)) : this.qa <= 0.2 * this.gc && 0.2 * this.gc < c && (a(this), this.tweener.clear(), this.aa = this.vd[2], this.aa.oa.call(this))
  }})
})();
var R, S, Aa, U, Fa;
R = function(a, b, c) {
  return a < b ? b : a > c ? c : a
};
Fa = Math.PI / 180;
Aa = function(a) {
  return a * Fa
};
U = function(a, b) {
  return window.Math.floor(Math.random() * (b - a + 1)) + a
};
S = function(a, b) {
  return window.Math.random() * (b - a) + a
};

