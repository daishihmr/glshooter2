/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(b) {
  throw b;
}
var i = void 0, j = !0, k = null, m = !1;
function n() {
  return function() {
  }
}
var q = {Zg:this};
(function() {
  function b(a, b) {
    for(var f = 0, g = a.length;f < g;f++) {
      if(a[f].label == b) {
        return a[f]
      }
    }
  }
  q.ga = function(a) {
    this.type = "none";
    this.root = this;
    this.Ka = [];
    this.Kd = [];
    this.Rd = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof q.jb ? this.Ka.push(a[b]) : a[b] instanceof q.Vb ? this.Kd.push(a[b]) : a[b] instanceof q.Dc && this.Rd.push(a[b]))
      }
      a = 0;
      for(b = this.Ka.length;a < b;a++) {
        this.Ka[a].pb(this)
      }
      a = 0;
      for(b = this.Kd.length;a < b;a++) {
        this.Kd[a].pb(this)
      }
      a = 0;
      for(b = this.Rd.length;a < b;a++) {
        this.Rd[a].pb(this)
      }
    }
  };
  q.ga.prototype.hg = function(a) {
    return b(this.Ka, a)
  };
  q.ga.prototype.xi = function() {
    for(var a = [], b = 0, f = this.Ka.length;b < f;b++) {
      var g = this.Ka[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  q.ga.prototype.ni = function(a) {
    var b;
    if(b = this.hg(a)) {
      return b
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  q.ga.prototype.oi = function(a) {
    return b(this.Kd, a)
  };
  q.ga.prototype.pi = function(a) {
    var b;
    if(b = this.oi(a)) {
      return b
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  q.ga.prototype.qi = function(a) {
    return b(this.Rd, a)
  };
  q.ga.prototype.ri = function(a) {
    var b;
    if(b = this.qi(a)) {
      return b
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  q.Vb = function() {
    this.root = this.label = k;
    this.direction = new q.Mb(0);
    this.speed = new q.Nb(1);
    this.Ka = [];
    this.Aa = {};
    this.na = {}
  };
  q.Vb.prototype.clone = function(a) {
    var b = new q.Vb;
    b.label = this.label;
    b.root = this.root;
    b.Ka = this.Ka;
    b.direction = new q.Mb(a.Fa(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new q.Nb(a.Fa(this.speed.value));
    b.speed.type = this.speed.type;
    b.Aa = this.Aa;
    b.na = a.na;
    return b
  };
  q.Vb.prototype.pb = function(a) {
    this.root = a;
    for(var b = 0, f = this.Ka.length;b < f;b++) {
      this.Ka[b].pb(a)
    }
  };
  q.td = function(a) {
    this.root = k;
    this.label = a;
    this.Ha = []
  };
  q.td.prototype.clone = function(a) {
    var b = a.na;
    a.na = a.Ce(this.Ha);
    var f = this.root.pi(this.label).clone(a);
    a.na = b;
    return f
  };
  q.td.prototype.pb = function(a) {
    this.root = a
  };
  q.Ja = function() {
    this.Za = ""
  };
  q.Ja.prototype.pb = function(a) {
    this.root = a
  };
  q.jb = function() {
    this.Za = "action";
    this.root = this.label = k;
    this.vb = [];
    this.Ha = []
  };
  q.jb.prototype = new q.Ja;
  q.jb.prototype.pb = function(a) {
    this.root = a;
    for(var b = 0, f = this.vb.length;b < f;b++) {
      this.vb[b].pb(a)
    }
  };
  q.jb.prototype.clone = function() {
    var a = new q.jb;
    a.label = this.label;
    a.root = this.root;
    a.vb = this.vb;
    return a
  };
  q.Cc = function(a) {
    this.Za = "actionRef";
    this.label = a;
    this.root = k;
    this.Ha = []
  };
  q.Cc.prototype = new q.Ja;
  q.Cc.prototype.clone = function() {
    var a = new q.jb;
    a.root = this.root;
    a.vb.push(this);
    return a
  };
  q.Dc = function() {
    this.Za = "fire";
    this.va = this.speed = this.direction = this.root = this.label = k;
    this.Aa = new q.xd
  };
  q.Dc.prototype = new q.Ja;
  q.Dc.prototype.pb = function(a) {
    this.root = a;
    this.va && this.va.pb(a)
  };
  q.le = function(a) {
    this.Za = "fireRef";
    this.label = a;
    this.Ha = []
  };
  q.le.prototype = new q.Ja;
  q.vd = function() {
    this.Za = "changeDirection";
    this.direction = new q.Mb;
    this.Ta = 0
  };
  q.vd.prototype = new q.Ja;
  q.wd = function() {
    this.Za = "changeSpeed";
    this.speed = new q.Nb;
    this.Ta = 0
  };
  q.wd.prototype = new q.Ja;
  q.sd = function() {
    this.Za = "accel";
    this.Ib = new q.oe;
    this.Lb = new q.Ae;
    this.Ta = 0
  };
  q.sd.prototype = new q.Ja;
  q.Dd = function(a) {
    this.Za = "wait";
    this.value = a || 0
  };
  q.Dd.prototype = new q.Ja;
  q.ze = function() {
    this.Za = "vanish"
  };
  q.ze.prototype = new q.Ja;
  q.Bd = function() {
    this.Za = "repeat";
    this.Gg = 0;
    this.action = k;
    this.Ha = []
  };
  q.Bd.prototype = new q.Ja;
  q.Bd.prototype.pb = function(a) {
    this.root = a;
    this.action && this.action.pb(a)
  };
  q.je = function(a, b) {
    this.Za = "bind";
    this.ej = a;
    this.li = b
  };
  q.je.prototype = new q.Ja;
  q.ue = function(a, b) {
    this.Za = "notify";
    this.hi = a;
    this.Ha = b || k
  };
  q.ue.prototype = new q.Ja;
  q.Wg = new q.Ja;
  q.Mb = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  q.Nb = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  q.oe = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.Ae = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.xd = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.Ca = j;
    a.Ca !== i && (this.Ca = !!a.Ca)
  };
  q.If = function(a) {
    this.value = a || 0
  };
  q.Jf = function(a) {
    this.value = a || 0
  };
  q.xf = function(a) {
    this.value = !!a
  }
})();
q.xa = function(b) {
  this.Of = b;
  this.Ed = [];
  this.Yb = -1;
  this.Oa = k;
  this.na = {}
};
q.xa.prototype.next = function() {
  this.Yb += 1;
  if(this.Oa !== k) {
    var b = this.Oa.vb[this.Yb];
    if(b !== i) {
      if(b instanceof q.jb) {
        return this.Xc(), this.Oa = b, this.na = this.Be(), this.next()
      }
      if(b instanceof q.Cc) {
        return this.Xc(), this.Oa = this.Of.ni(b.label), this.na = this.Ce(b.Ha), this.next()
      }
      if(b instanceof q.Bd) {
        return this.na.Oc = 0, this.na.tg = this.Fa(b.Gg) | 0, this.Xc(), this.Oa = b.action.clone(), this.na = this.Be(), this.next()
      }
      if(b instanceof q.Dc) {
        var a = new q.Dc;
        a.va = b.va.clone(this);
        b.direction !== k && (a.direction = new q.Mb(this.Fa(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== k && (a.speed = new q.Nb(this.Fa(b.speed.value)), a.speed.type = b.speed.type);
        a.Aa = new q.xd;
        a.Aa.offsetX = this.Fa(b.Aa.offsetX);
        a.Aa.offsetY = this.Fa(b.Aa.offsetY);
        a.Aa.Ca = b.Aa.Ca;
        return a
      }
      return b instanceof q.le ? (this.Xc(), this.Oa = new q.jb, this.Oa.vb = [this.Of.ri(b.label)], this.na = this.Ce(b.Ha), this.next()) : b instanceof q.vd ? (a = new q.vd, a.direction.type = b.direction.type, a.direction.value = this.Fa(b.direction.value), a.Ta = this.Fa(b.Ta), a) : b instanceof q.wd ? (a = new q.wd, a.speed.type = b.speed.type, a.speed.value = this.Fa(b.speed.value), a.Ta = this.Fa(b.Ta), a) : b instanceof q.sd ? (a = new q.sd, a.Ib.type = b.Ib.type, a.Ib.value = this.Fa(b.Ib.value), 
      a.Lb.type = b.Lb.type, a.Lb.value = this.Fa(b.Lb.value), a.Ta = this.Fa(b.Ta), a) : b instanceof q.Dd ? new q.Dd(this.Fa(b.value)) : b instanceof q.ze ? b : b instanceof q.je ? (this.na["$" + b.ej] = this.Fa(b.li), q.Wg) : b instanceof q.ue ? b : k
    }
    this.Xh();
    if(this.Oa === k) {
      return k
    }
    if((b = this.Oa.vb[this.Yb]) && "repeat" == b.Za) {
      this.na.Oc++, this.na.Oc < this.na.tg && (this.Xc(), this.Oa = b.action.clone(), this.na = this.Be())
    }
    return this.next()
  }
  return k
};
q.xa.prototype.Xc = function() {
  this.Ed.push({action:this.Oa, cursor:this.Yb, scope:this.na});
  this.Yb = -1
};
q.xa.prototype.Xh = function() {
  var b = this.Ed.pop();
  b ? (this.Yb = b.cursor, this.Oa = b.action, this.na = b.scope) : (this.Yb = -1, this.Oa = k, this.na = {})
};
q.xa.prototype.Fa = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.na[b]) || (a = q.xa.Qa[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in q.xa.Qa) {
    q.xa.Qa.hasOwnProperty(d) && (a[d] = q.xa.Qa[d])
  }
  for(d in this.na) {
    this.na.hasOwnProperty(d) && (a[d] = this.na[d])
  }
  a.$rand = Math.random();
  (d = this.Ed[this.Ed.length - 1]) && (a.$loop = {index:d.scope.Oc, count:d.scope.Oc + 1, first:0 === d.scope.Oc, last:d.scope.Oc + 1 >= d.scope.tg});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
q.xa.prototype.Ce = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.Fa(b[d])
    }
  }else {
    for(d in this.na) {
      this.na.hasOwnProperty(d) && (a[d] = this.na[d])
    }
  }
  return a
};
q.xa.prototype.Be = function() {
  var b = {}, a;
  for(a in this.na) {
    this.na.hasOwnProperty(a) && (b[a] = this.na[a])
  }
  return b
};
q.ga.prototype.Pe = function(b) {
  var a = new q.xa(this);
  if(b = this.hg(b)) {
    a.Oa = b
  }
  return a
};
q.Vb.prototype.Pe = function() {
  var b = new q.xa(this.root), a = new q.jb;
  a.root = this.root;
  a.vb = this.Ka;
  b.Oa = a;
  b.na = this.na;
  return b
};
q.xa.Qa = {};
q.qa = function(b) {
  b = b || "";
  for(var a in q.qa) {
    q.qa.hasOwnProperty(a) && (q.Zg[b + a] = q.qa[a])
  }
};
q.qa.action = function(b) {
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
  var f = new q.jb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof q.Ja)
    }) && h(Error("argument type error.")), f.vb = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof q.Ja ? f.vb[a] = arguments[a] : h(Error("argument type error."))
    }
  }
  return f
};
q.qa.bb = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.Cc(b);
  if(a instanceof Array) {
    f.Ha = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ha.push(arguments[d])
    }
  }
  return f
};
q.qa.va = function(b, a, d, f) {
  for(var g = 0, l = arguments.length;g < l;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  l = new q.Vb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Mb ? l.direction = arguments[g] : arguments[g] instanceof q.Nb ? l.speed = arguments[g] : arguments[g] instanceof q.jb ? l.Ka.push(arguments[g]) : arguments[g] instanceof q.Cc ? l.Ka.push(arguments[g]) : arguments[g] instanceof Array ? l.Ka.push(q.qa.action(arguments[g])) : arguments[g] instanceof Object ? l.Aa = arguments[g] : "string" === typeof arguments[g] && (l.label = arguments[g])
  }
  return l
};
q.qa.lj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.td(b);
  if(a instanceof Array) {
    f.Ha = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ha.push(arguments[d])
    }
  }
  return f
};
q.qa.fire = function(b, a, d, f) {
  for(var g = 0, l = arguments.length;g < l;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  l = new q.Dc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Mb ? l.direction = arguments[g] : arguments[g] instanceof q.Nb ? l.speed = arguments[g] : arguments[g] instanceof q.Vb ? l.va = arguments[g] : arguments[g] instanceof q.td ? l.va = arguments[g] : arguments[g] instanceof q.xd ? l.Aa = arguments[g] : arguments[g] instanceof q.If ? l.Aa.offsetX = arguments[g].value : arguments[g] instanceof q.Jf ? l.Aa.offsetY = arguments[g].value : arguments[g] instanceof q.xf && (l.Aa.Ca = arguments[g].value)
  }
  l.va === i && h(Error("bullet (or bulletRef) is required."));
  return l
};
q.qa.pj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.le(b);
  if(a instanceof Array) {
    f.Ha = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ha.push(arguments[d])
    }
  }
  return f
};
q.qa.mj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("direction is required."));
  a === i && h(Error("term is required."));
  d = new q.vd;
  d.direction = b instanceof q.Mb ? b : new q.Mb(b);
  d.Ta = a;
  return d
};
q.qa.Fc = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("speed is required."));
  a === i && h(Error("term is required."));
  d = new q.wd;
  d.speed = b instanceof q.Nb ? b : new q.Nb(b);
  d.Ta = a;
  return d
};
q.qa.jj = function(b, a, d) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new q.sd;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof q.oe ? g.Ib = b : arguments[f] instanceof q.Ae ? g.Lb = a : g.Ta = arguments[f]
  }
  g.Ib === i && g.Lb === i && h(Error("horizontal or vertical is required."));
  g.Ta === i && h(Error("term is required."));
  return g
};
q.qa.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && h(Error("value is required."));
  return new q.Dd(b)
};
q.qa.ib = function() {
  return new q.ze
};
q.qa.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("times is required."));
  a === i && h(Error("action is required."));
  f = new q.Bd;
  f.Gg = b;
  if(a instanceof q.jb || a instanceof q.Cc) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = q.qa.action(a)
    }else {
      for(var g = [], d = 1;d < arguments.length;d++) {
        g.push(arguments[d])
      }
      f.action = q.qa.action(g)
    }
  }
  return f
};
q.qa.Wa = function(b, a) {
  return new q.je(b, a)
};
q.qa.xj = function(b, a) {
  return new q.ue(b, a)
};
q.qa.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Mb(b);
  a !== i && (d.type = a);
  return d
};
q.qa.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Nb(b);
  a && (d.type = a);
  return d
};
q.qa.Ib = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.oe(b);
  a && (d.type = a);
  return d
};
q.qa.Lb = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Ae(b);
  a && (d.type = a);
  return d
};
q.qa.oj = function(b) {
  return new q.xd(b)
};
q.qa.offsetX = function(b) {
  return new q.If(b)
};
q.qa.offsetY = function(b) {
  return new q.Jf(b)
};
q.qa.Ca = function(b) {
  return new q.xf(b)
};
tm.Ya = tm.Ya || {};
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
  tm.Ya.kc = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.Lf = a
  }, Md:function(a, b) {
    var d = this.Lf.xi();
    if(b === i && 0 < d.length) {
      for(var f = [], C = 0, r = d.length;C < r;C++) {
        f[f.length] = this.Mf(a, d[C])
      }
      for(var s = function() {
        if(!s.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          s.Le == f.length && (s.ad = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, C = f.length;C--;) {
        f[C].ae = s
      }
      s.Le = 0;
      s.Xf = function() {
        this.Le++
      };
      s.Le = 0;
      s.ad = m;
      s.Ue = j;
      s.stop = m;
      return s
    }
    return this.Mf(a, b)
  }, Mf:function(a, b) {
    function d() {
      if(!d.stop) {
        d.ha += 1;
        this.ha = d.ha;
        var a = d.Ld, b = d.Wh;
        if(b) {
          if(d.ha < d.Je ? d.direction += d.Jc : d.ha === d.Je && (d.direction = d.ac), d.ha < d.Ke ? d.speed += d.qd : d.ha === d.Ke && (d.speed = d.Sc), d.ha < d.Fe ? (d.zc += d.Hd, d.Bc += d.Id) : d.ha === d.Fe && (d.zc = d.Fd, d.Bc = d.Gd), this.x += Math.cos(d.direction) * d.speed * a.Ac, this.y += Math.sin(d.direction) * d.speed * a.Ac, this.x += d.zc * a.Ac, this.y += d.Bc * a.Ac, a.Ve(this)) {
            if(a.ic || this.ic) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.ha < d.Hg || d.ad)) {
              for(var f;f = d.Ig.next();) {
                switch(f.Za) {
                  case "fire":
                    b.Th.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Hg = "number" === typeof f.value ? d.ha + f.value : 0 !== (a = ~~f.value) ? d.ha + a : d.ha + eval(f.value);
                    return;
                  case "changeDirection":
                    b.Oh.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.Ph.call(this, f, d);
                    break;
                  case "accel":
                    b.Mh.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.Uh.call(this, f)
                }
              }
              d.ad = j;
              d.ae ? d.ae.Xf() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.ad = j, d.ae ? d.ae.Xf() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Ya.kc.bd, f;
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
    "string" === typeof b ? d.Ig = this.Lf.Pe(b) : b instanceof q.Vb ? d.Ig = b.Pe() : (window.console.error(a, b), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Wh = this;
    d.Ld = a;
    d.Hg = -1;
    d.ad = m;
    d.direction = 0;
    d.pg = 0;
    d.speed = 0;
    d.rg = 0;
    d.zc = 0;
    d.Bc = 0;
    d.Jc = 0;
    d.ac = 0;
    d.Je = -1;
    d.qd = 0;
    d.Sc = 0;
    d.Ke = -1;
    d.Hd = 0;
    d.Fd = 0;
    d.Id = 0;
    d.Gd = 0;
    d.Fe = -1;
    d.ha = -1;
    d.stop = m;
    d.Ue = j;
    return d
  }, Sh:function(a) {
    function b() {
      b.stop || (this.x += b.ag, this.y += b.cg, b.Ld.Ve(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Ya.kc.bd, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b.Ld = a;
    b.direction = 0;
    b.speed = 0;
    b.ag = 0;
    b.cg = 0;
    b.stop = m;
    b.Ue = j;
    return b
  }, Th:function(b, d, f, D) {
    if(this.Qi === i || this.bc) {
      var C = {label:b.va.label}, r;
      for(r in b.va.Aa) {
        C[r] = b.va.Aa[r]
      }
      if(C = d.Wf(C)) {
        D = (r = 0 === b.va.Ka.length) ? D.Sh(d) : D.Md(d, b.va);
        var s = this, A = {x:this.x + b.Aa.offsetX, y:this.y + b.Aa.offsetY};
        f.pg = D.direction = function(p) {
          var r = eval(p.value) * Math.DEG_TO_RAD;
          switch(p.type) {
            case "aim":
              return d.target ? b.Aa.Ca ? a(A, d.target) + r : a(s, d.target) + r : r - Math.PI / 2;
            case "absolute":
              return r - Math.PI / 2;
            case "relative":
              return f.direction + r;
            default:
              return f.pg + r
          }
        }(b.direction || b.va.direction);
        f.rg = D.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.rg + b;
            default:
              return b
          }
        }(b.speed || b.va.speed);
        C.x = A.x;
        C.y = A.y;
        r && (D.ag = Math.cos(D.direction) * D.speed * d.Ac, D.cg = Math.sin(D.direction) * D.speed * d.Ac);
        C.ic = !!C.ic;
        if(d.ic || C.ic) {
          C.rotation = (D.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, C.speed = D.speed
        }
        C.addEventListener("enterframe", D);
        d.Qf ? d.Qf.addChild(C) : this.parent && this.parent.addChild(C)
      }
    }
  }, Oh:function(d, f, u) {
    var D = eval(d.direction.value) * Math.DEG_TO_RAD, C = eval(d.Ta);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        u.ac = a(this, d) + D;
        u.Jc = b(u.ac - u.direction) / C;
        break;
      case "absolute":
        u.ac = D - Math.PI / 2;
        u.Jc = b(u.ac - u.direction) / C;
        break;
      case "relative":
        u.ac = u.direction + D;
        u.Jc = b(u.ac - u.direction) / C;
        break;
      case "sequence":
        u.Jc = D, u.ac = u.direction + u.Jc * (C - 1)
    }
    u.Je = u.ha + C
  }, Ph:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.Ta);
    switch(a.speed.type) {
      case "absolute":
        b.Sc = d;
        b.qd = (b.Sc - b.speed) / f;
        break;
      case "relative":
        b.Sc = d + b.speed;
        b.qd = (b.Sc - b.speed) / f;
        break;
      case "sequence":
        b.qd = d, b.Sc = b.speed + b.qd * f
    }
    b.Ke = b.ha + f
  }, Mh:function(a, b) {
    var d = eval(a.Ta);
    b.Fe = b.ha + d;
    if(a.Ib) {
      var f = eval(a.Ib.value);
      switch(a.Ib.type) {
        case "absolute":
        ;
        case "sequence":
          b.Hd = (f - b.zc) / d;
          b.Fd = f;
          break;
        case "relative":
          b.Hd = f, b.Fd = (f - b.zc) * d
      }
    }else {
      b.Hd = 0, b.Fd = b.zc
    }
    if(a.Lb) {
      switch(f = eval(a.Lb.value), a.Lb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Id = (f - b.Bc) / d;
          b.Gd = f;
          break;
        case "relative":
          b.Id = f, b.Gd = (f - b.Bc) * d
      }
    }else {
      b.Id = 0, b.Gd = b.Bc
    }
  }, Uh:function(a) {
    var b = tm.event.Event(a.hi);
    if(a.Ha) {
      for(var d in a.Ha) {
        b[d] = a.Ha[d]
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
  tm.Ya.ei = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = k;
  tm.Ya.$f = function(a) {
    if(f === k) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.Ya.nj = function() {
    return j
  };
  tm.Ya.kc.bd = {Wf:tm.Ya.ei, Ve:tm.Ya.$f, zj:0, ic:m, Ac:2, target:k};
  q.ga.prototype.Md = function(a) {
    return tm.Ya.kc(this).Md(a)
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
var t = k, gls2 = {}, v, ba, w, z, B, F, ca, da, ea, fa, ga, ha, ia, G, I, K, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, ya, za, Aa, Ba, L, Ca, Da, N, O, Ea, Fa, R, aa = tm.createClass({superClass:tm.display.CanvasApp, Vd:0, tj:0, Zc:3, yc:3, dg:1, ca:k, init:function(b) {
  t !== k && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  t = this;
  this.resize(480, 640).fitWindow();
  this.fps = v.Yg;
  this.background = "rgba(0,0,0,0)";
  this.tf = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm4:"assets2/nc31173.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/nc44202.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", 
  "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", 
  "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.Vh();
    return ba()
  }.bind(this)}))
}, update:function() {
  for(var b = [].concat(this.tf), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.tf.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Vh:function() {
  w.setup(12345);
  ["tex_stage1", "tex_tank1"].forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawTexture(a, 0, 0);
    d = d.getBitmap();
    d.filter({calc:function(a, b, d, f, C) {
      C.setPixelIndex(b, a[0], 0, 0)
    }});
    var f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(b + "Red", f)
  });
  z.setup();
  B.setup();
  this.ca = F()
}, ji:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Vd, "")
}, tf:k, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Ga(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
}
;v = {wh:m, Yg:60, th:0, Bf:[1E9, 1E10], vh:3E3, Df:3, Cf:[3, 2, 1], Lg:[6, 4, 2], Kf:1, sh:0.1, Ef:1, uh:0.25, fj:1, hj:0.25, Kg:2, kh:0.005, gh:0.01, hh:0.001, bh:0.015, dh:0.002, mh:0.001, oh:0.01, lh:0, jh:0, ih:0, fh:0.03, eh:0.004, nh:0, ph:0, qh:0.75, me:10, yd:800, ah:0.25, $g:0.1, rh:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], Sg:0.02, Tg:0.5, Rg:0.01, Af:1E3, Og:10, Mg:1, Jh:1E3, Ih:100, Hh:0, Gh:0, Fh:1E3, Eh:100, Xg:0.5, Pg:4, Ug:22500, Ng:50, yh:10, wf:m, Jg:j, Ch:1E3, Dh:2E3, zh:4E3, 
Ah:1E4, Bh:2E7};
(function() {
  var b = k, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  ca = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, gb:0, Rb:j, Yc:j, Pc:m, ca:k, speed:0, cb:k, Ic:k, vg:k, Wd:k, Ub:k, Qe:k, Pb:k, Re:k, Se:k, frame:0, init:function(a, f, g) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = f;
    this.style = g;
    tm.Ya.kc.bd.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Ic = this.vg = da(f, 100);
    this.Wd = da(3, 100);
    this.Ub = ea(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Ub.visible = m;
    this.Rh();
    this.cb = this.Qh();
    1 === this.style && (this.cb = [this.cb[1], this.cb[2]]);
    this.Pb = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(g = this.cb.length;f < g;f++) {
      var l = this.cb[f];
      fa(this, l).setPosition(l.x, l.y).addChildTo(this.Pb)
    }
    this.Fi = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Fi.blendMode = "lighter";
    this.Re = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Re.blendMode = "lighter";
    this.Re.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.ya && !a.ta
    };
    this.Se = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Se.blendMode = "lighter";
    this.Se.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.ya && !a.ta
    };
    this.ed = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.ed.blendMode = "lighter";
    this.ed.rotation = -90;
    this.ed.strokeStyle = "rgba(180,180,255,0.4)";
    this.ed.update = function() {
      this.visible = a.ta
    };
    this.ed.draw = function(b) {
      b.lineCap = "round";
      var f = a.Mc / v.yd;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, m);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, m);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, m)
    };
    this.zi = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.zi.update = function() {
      this.visible = a.ta
    };
    b === k && (b = ga(this.ca.ka))
  }, Qh:function() {
    if(0 === this.type) {
      return[{x:0, uc:0, y:40, d:0, qb:j, mb:-0.7, v:j}, {x:0, uc:0, y:40, d:0, qb:j, mb:0.5, v:j}, {x:0, uc:0, y:40, d:0, qb:j, mb:-0.5, v:j}, {x:0, uc:0, y:40, d:0, qb:j, mb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, qb:m, mb:-0.7, v:j}, {x:-40, y:40, d:0.1, qb:m, mb:-0.5, v:j}, {x:40, y:40, d:0.1, qb:j, mb:0.5, v:j}, {x:70, y:20, d:0.1, qb:j, mb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, qb:m, mb:-0.7, v:j}, {x:-30, y:20, d:0.4, qb:m, mb:-0.5, v:j}, {x:30, y:20, d:0.4, qb:j, mb:0.5, v:j}, {x:60, y:40, d:0.6, qb:j, mb:0.7, v:j}]
    }
  }, Rh:function() {
    this.Qe = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Qe.setFrameIndex(5);
    this.Qe.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, fc:-1, Lc:m, nb:m, update:function(d) {
    this.visible = this.Pc ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.Rb) {
      var g = f.getKeyAngle();
      g !== k && (g = a[g], this.x += g.x * this.speed * (this.nb ? 0.75 : 1), this.y += g.y * this.speed * (this.nb ? 0.75 : 1));
      this.x = S(this.x, 15, 465);
      this.y = S(this.y, 15, 625);
      var l = f.getKey("c") && this.Yc, g = f.getKey("z") && this.Yc;
      this.fc = l ? this.fc + 1 : this.fc - 1;
      this.fc = S(this.fc, -1, 10);
      this.nb = g && l || 10 === this.fc;
      l = this.ca.ta ? 3 : 5;
      this.Lc = !this.nb && (0 <= this.fc || g) && 0 === d.frame % l;
      g && (this.fc = 0);
      this.Ub.x = this.x;
      this.Ub.y = this.y - 40;
      f.getKeyDown("x") && this.Yc && (0 < this.ca.ya && !this.ca.ta ? (this.ca.aj(), ha(this).addChildTo(this.ca)) : !this.ca.Nc && 0 < this.ca.eb && (this.$a = S(this.$a - 2, 0, 1), q.xa.Qa.$rank = S(q.xa.Qa.$rank - 0.02, 0, 1), ia(this, this.ca).setPosition(S(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.nb = this.Lc = m
    }
    this.Lc && (g = Math.sin(0.2 * d.frame), l = this.Ic.fire(this.x - 7 - 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca), l = this.Ic.fire(this.x + 7 + 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca));
    if(this.nb) {
      g = 0;
      for(l = this.cb.length;g < l;g++) {
        this.cb[g].v = m
      }
      this.Pb.rotation = 0
    }else {
      this.Ub.visible = m;
      g = 0;
      for(l = this.cb.length;g < l;g++) {
        this.cb[g].v = j
      }
    }
    this.di(f);
    this.Nh(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = d.frame
  }, Sb:function() {
    this.nb = this.Lc = m;
    this.ca.Od();
    this.ca.La = 0;
    this.ca.Ga = 0;
    this.ca.za = 0
  }, di:function(a) {
    if(0 === this.type) {
      for(a = this.cb.length;this.cb[--a] !== i;) {
        var b = this.cb[a];
        0 === a ? b.x = b.uc + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.uc + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.uc + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.uc + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Pb, b.rotation = this.nb ? 0 : this.Rb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Rb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, Nh:function(a, b) {
    this.Rb && a.getKey("left") ? this.gb = S(this.gb - 0.2, -3, 3) : this.Rb && a.getKey("right") ? this.gb = S(this.gb + 0.2, -3, 3) : 0 > this.gb ? this.gb = S(this.gb + 0.2, -3, 3) : 0 < this.gb && (this.gb = S(this.gb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.gb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.gb) : 2 === this.type && this.setFrameIndex(31 + ~~this.gb);
    return b
  }});
  fa = tm.createClass({superClass:tm.display.AnimationSprite, sc:k, da:k, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.sc = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.qb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.sc.v) {
      this.x = this.sc.x * (this.da.ca.ta ? 1.5 : 1);
      this.y = this.sc.y * (this.da.ca.ta ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.sc.d * this.sc.mb);
      var f = this.parent.localToGlobal(this);
      this.sc.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.ca);
      this.da.Lc && (f = this.da.Ic.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== k && f.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = k;
  G = tm.createClass({superClass:tm.display.Sprite, speed:0, qc:0, $h:1, mg:0, fb:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.qc = v.Kf;
    b === k && (b = I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.pd(a)
  }, update:function() {
    this.x += this.vf;
    this.y += this.rd;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, pd:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Td:function(a) {
    for(var f = 0;f < a;f++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), l = T(2, 8), u = 2 * Math.random() * Math.PI;
      g.ra = Math.cos(u) * l;
      g.sa = Math.sin(u) * l;
      g.scaleX = g.scaleY = (T(0.1, 0.5) + T(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.ra;
        this.y += this.sa;
        this.ra *= 0.9;
        this.sa *= 0.9
      })
    }
  }});
  G.$c = function() {
    for(var b = [].concat(a), f = 0, g = b.length;f < g;f++) {
      b[f].remove()
    }
  };
  var a = G.Pa = [];
  da = tm.createClass({ec:k, lg:m, init:function(b, f) {
    this.lg = 3 === b;
    this.ec = [];
    for(var g = 0;g < f;g++) {
      var l = G(b), u = this;
      l.addEventListener("added", function() {
        this.ma = v.yh;
        a.push(this)
      });
      l.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        u.ec.push(this)
      });
      this.lg && l.addEventListener("enterframe", function(a) {
        this.setScale((this.$h + this.mg) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.ec.push(l)
    }
  }, fire:function(a, b, g) {
    var l = this.ec.pop();
    if(l === i) {
      return k
    }
    var u = Ha(g);
    l.vf = Math.cos(u) * l.speed;
    l.rd = Math.sin(u) * l.speed;
    l.setPosition(a, b);
    l.rotation = g + 90;
    return l
  }, Rc:function(a) {
    for(var b = this.ec.length;this.ec[--b] !== i;) {
      this.ec[b].qc = v.Kf + v.sh * a, this.ec[b].mg = 0.2 * a
    }
  }})
})();
ea = tm.createClass({superClass:tm.display.Sprite, da:k, ca:k, Db:0, frame:0, Fg:k, color:k, Tf:0, He:0, ai:m, head:k, ig:k, Sf:k, fb:j, qc:v.Ef, Qc:k, init:function(b, a) {
  this.da = b;
  this.ca = b.ca;
  this.Tf = 0 === this.da.style ? 1 : 1.2;
  this.He = 0 === this.da.style ? 50 : 75;
  var d = this;
  this.Fg = a;
  this.superInit(a.redBody, this.He, 100);
  this.boundingHeightBottom = 1;
  this.Aj = 0;
  this.origin.y = 1;
  var f = this.Sf = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.ig = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.Db - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.Db
  };
  this.pd(["red", "green", "blue"][this.da.type]);
  this.Rc(0)
}, pd:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.Fg[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Sf.gotoAndPlay(this.color);
  this.ig.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Qc = k;
  return this
}, Rc:function(b) {
  this.boundingWidth = this.width = this.He + 30 * b / v.me;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.qc = this.Tf * v.Ef + v.uh * b;
  0 === b ? this.pd(["red", "green", "blue"][this.da.type]) : this.pd("hyper")
}, Td:function(b, a) {
  this.Qc === k && this.Yf();
  a = a || this.Db;
  for(var d = 0;d < b;d++) {
    var f = this.Qc.clone().setPosition(this.x, a).addChildTo(this.ca), g = T(8, 14), l = T(0, Math.PI);
    f.ra = Math.cos(l) * g;
    f.sa = Math.sin(l) * g;
    f.scaleX = f.scaleY = (T(0.5, 1.5) + T(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.ra;
      this.y += this.sa;
      this.ra *= 0.95;
      this.sa *= 0.95
    })
  }
}, vi:function(b, a, d) {
  this.Qc === k && this.Yf();
  for(var f = 0;f < b;f++) {
    var g = this.Qc.clone().setPosition(a, d).addChildTo(this.ca), l = T(12, 20), u = T(0, Math.PI);
    g.ra = Math.cos(u) * l;
    g.sa = Math.sin(u) * l;
    g.scaleX = g.scaleY = (T(1, 3) + T(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.ra;
      this.y += this.sa;
      this.ra *= 0.95;
      this.sa *= 0.95
    })
  }
}, Yf:function() {
  this.Qc = "hyper" === this.color ? I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.da.nb) ? (this.Db = Math.max(0, this.Db - 40), this.height = this.y - this.Db, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Db = this.y - 40;
  this.ai = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, sj:function() {
  return this.Db
}, Wi:function(b) {
  this.Db = b;
  this.head.update()
}});
ea.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.Db
});
(function() {
  ia = tm.createClass({superClass:tm.app.Object2D, fb:j, ca:k, init:function(a, d) {
    this.superInit();
    this.da = a;
    this.ca = d;
    this.Bg = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Bg.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Bg));
    this.Pf();
    b === k && (b = I(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ha = 0;
    this.md = 1;
    this.addEventListener("added", function() {
      this.ca.Nc = j;
      this.da.Pc = j;
      this.ca.eb -= 1;
      this.ca.Te = m;
      this.ca.Od();
      this.ca.Ra("drop BOMBER!!", j);
      K("bomb");
      K("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.Nc = m;
      this.da.Pc = m
    })
  }, Pf:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = T(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.md + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.ha;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.ha += 3.6, this.md = -1) : (this.b = 8, this.ha += 1.8, this.md = 1)
  }});
  ka = tm.createClass({superClass:ia, init:function(a, b) {
    this.superInit(a, b);
    v.Jg && this.addEventListener("added", function() {
      this.ca.eb = 0
    })
  }, Pf:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = T(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var d = this.a * this.md + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(d) * this.r + this.x, Math.sin(d) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.ha;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.ha += 1.8, this.md = 1)
  }});
  var b = k
})();
B = {setup:function() {
  Ia();
  la = {};
  B.explosion = Array.range(0, 2).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  la.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k, frequency:3}}}, 100, 100));
  B.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  B.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  B.particle16 = I(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Td:function(b, a, d) {
  b = B.particle16.clone().setPosition(b, a).addChildTo(d);
  a = T(5, 20);
  d = T(Math.PI, 2 * Math.PI);
  b.ra = Math.cos(d) * a;
  b.sa = Math.sin(d) * a;
  b.scaleX = b.scaleY = (T(0.1, 0.5) + T(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.ra;
    this.y += this.sa;
    this.ra *= 0.9;
    this.sa *= 0.9
  })
}, rj:function(b, a, d) {
  var f = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter").addChildTo(d);
  f.image = B.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, wi:function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.fb = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
}, Qd:function(b, a, d, f) {
  K("explode");
  b = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  b.fb = j;
  if(f !== i) {
    var g = f.x, l = f.y;
    b.addEventListener("enterframe", function() {
      this.x += g;
      this.y += l;
      g *= 0.99;
      l *= 0.99
    })
  }
  b.addChildTo(d)
}, ki:function(b, a, d) {
  K("explode");
  var f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.fb = j;
  f.addChildTo(d);
  f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.fb = j;
  f.addChildTo(d);
  f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  f.fb = j;
  f.addChildTo(d)
}, Gb:function(b, a, d) {
  K("explode2");
  K("explode3");
  for(var f = ~~(Math.random() * Ja.length), g = 0;20 > g;g++) {
    var l = B.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === g % 2 ? "lighter" : "source-over").setPosition(b, a).gotoAndPlay();
    l.a = 2 * Math.PI * Math.random();
    l.v = 10 * Math.pow(Ja.at(~~(Ja.length * g / 20) + f), 2);
    l.fb = j;
    l.addChildTo(d)
  }
}, fg:function(b, a, d) {
  K("explode2");
  K("explode3");
  for(var f = ~~(Math.random() * Ja.length), g = 0;20 > g;g++) {
    for(var l = 2 * Math.PI * g / 20, u = Math.pow(Ja.at(~~(Ja.length * g / 20) + f), 2), D = 0;3 > D;D++) {
      var C = 4 * u * (D + 1), r = la.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ha && (this.blendMode = "source-over");
        this.ha += 1
      }).setScale(0.3 * (3 - D)).setBlendMode("lighter").setPosition(b, a).gotoAndPlay();
      r.rotation = 2 * Math.random() * Math.PI;
      r.fb = j;
      r.alpha = 0.2;
      r.ha = 0;
      r.a = l;
      r.v = C;
      r.addChildTo(d)
    }
  }
}};
ma = tm.createClass({superClass:tm.app.Object2D, target:k, xc:0, angle:0, alpha:2, fb:j, reverse:m, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.xc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === k) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        I(60, this.alpha, 0.9).setPosition(Math.cos(a) * this.xc + this.target.x, Math.sin(a) * this.xc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.xc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.xc || 200 < this.xc) && this.remove()
  }
}});
ha = tm.createClass({superClass:tm.app.Object2D, target:k, angle:0, fb:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      I(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + U(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + U(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
na = tm.createClass({superClass:tm.graphics.Canvas, ca:k, Hc:k, Sa:k, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Hc = Ka(200);
  this.Sa = oa(this)
}, update:function() {
  this.clear();
  this.ca.Qb !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Sa.Hb - 20, 470 * this.ca.Qb.ma / this.ca.Qb.cc, 20), this.strokeRect(5, this.Sa.Hb - 20, 470, 20), this.clear(263.5, this.Sa.Hb - 20 + 2, 2, 16), this.clear(52, this.Sa.Hb - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.Sa.Hb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.La)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.za / v.Af) + 1), this.Sa.dd + 192, 22);
  b = [0, 1, 4][this.ca.da.type];
  for(a = 0;a < this.ca.jc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.xa.Qa.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.jd + " hit", this.Sa.dd + 10, 95);
  0 < ~~this.ca.za && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.za + " HIT!!", 10, -this.Sa.Hb + 115));
  0 === this.frame % 2 && (!this.ca.ta && 0 < this.ca.ya ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.ya, 5, 637)) : this.ca.ta && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Nd, 5, 637)));
  for(a = 0;a < this.ca.eb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.Te && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Hc.update();
  this.Hc.lf = this.Sa.Hb + 5;
  this.Hc.draw(this);
  this.frame += 1
}});
oa = tm.createClass({superClass:tm.app.Object2D, hb:k, dd:0, Hb:0, init:function(b) {
  this.superInit();
  this.hb = b
}});
(function() {
  for(var b = [], a = [], d = 0;3 > d;d++) {
    b[d] = 40 * Math.pow(0.8, d), a[d] = b[d] / 2 * Math.sqrt(3)
  }
  pa = tm.createClass({superClass:tm.graphics.Canvas, oa:k, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.oa = qa();
    this.oa.ka = this;
    this.oa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(d) {
    this.oa.ra = Math.cos(this.oa.direction) * this.oa.speed;
    this.oa.sa = Math.sin(this.oa.direction) * this.oa.speed;
    for(var g = 0;3 > g;g++) {
      for(this.oa.xb[g] += this.oa.ra * Math.pow(0.8, g);3 * b[g] < this.oa.xb[g];) {
        this.oa.xb[g] -= 3 * b[g]
      }
      for(;this.oa.xb[g] < 3 * -b[g];) {
        this.oa.xb[g] += 3 * b[g]
      }
      for(this.oa.yb[g] += this.oa.sa * Math.pow(0.8, g);2 * a[g] < this.oa.yb[g];) {
        this.oa.yb[g] -= 2 * a[g]
      }
      for(;this.oa.yb[g] < 2 * -a[g];) {
        this.oa.yb[g] += 2 * a[g]
      }
    }
    0 === d % 2 && this.draw()
  }, draw:function() {
    this.oa.background !== k ? this.clearColor(this.oa.background, 0, 0) : this.clear();
    for(var d = 0;3 > d;d++) {
      this.lineWidth = 0.3 * Math.pow(0.8, d);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.6 * Math.pow(0.8, d) + ")"}, {offset:1, color:"rgba(255,255,255," + 0.4 * Math.pow(0.8, d) + ")"}]).toStyle();
      this.beginPath();
      for(var g = 0, l = this.oa.xb[d] - 3 * b[d];l < 480 + 3 * b[d];l += 1.5 * b[d]) {
        for(var g = 0 === g ? a[d] : 0, u = this.oa.yb[d] - 2 * a[d] + g;u < 640 + 2 * a[d];u += 2 * a[d]) {
          this.line(l, u, l + b[d], u), this.line(l, u, l - b[d] / 2, u + a[d]), this.line(l, u, l - b[d] / 2, u - a[d])
        }
      }
      this.stroke()
    }
  }});
  qa = tm.createClass({superClass:tm.app.Object2D, xb:0, yb:0, direction:0, speed:0, ra:0, sa:0, background:k, init:function() {
    this.superInit();
    this.xb = [];
    this.yb = [];
    for(var a = 0;3 > a;a++) {
      this.xb[a] = 240, this.yb[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.sa = this.ra = 0
  }})
})();
ra = tm.createClass({superClass:tm.display.Sprite, og:m, ca:k, da:k, Tb:m, wc:m, pf:m, ra:0, sa:0, init:function(b) {
  this.superInit("star", 20, 20);
  (this.og = b) && this.setScale(2, 2);
  this.ca = F.ve;
  this.da = this.ca.da;
  this.addChildTo(this.ca);
  b = 0.5 * w.random() * Math.PI - 0.75 * Math.PI;
  this.ra = 30 * Math.cos(b);
  this.sa = 30 * Math.sin(b)
}, update:function() {
  this.da.nb && (this.wc = j);
  if(this.da.parent === k) {
    this.wc = m
  }else {
    if(100 > Ga(this, this.da)) {
      this.ca.Gi(this);
      this.remove();
      return
    }
    1E4 > Ga(this, this.da) && (this.wc = j);
    if(this.pf && this.wc) {
      var b = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 10 * Math.cos(b);
      this.y += 10 * Math.sin(b)
    }else {
      this.pf || (this.x += this.ra, this.y += this.sa, this.ra *= 0.8, this.sa *= 0.8, -1 < this.ra && (1 > this.ra && -1 < this.sa && 1 > this.sa) && (this.pf = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
sa = tm.createClass({superClass:ra, Tb:m, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
ta = tm.createClass({superClass:ra, Tb:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.wc || (this.x += this.ca.ka.ra, this.y += this.ca.ka.sa);
  this.superClass.prototype.update.call(this)
}});
ua = tm.createClass({da:k, ca:k, ba:k, frame:0, init:function(b) {
  this.ca = b;
  this.da = b.da;
  this.of();
  this.ba = va();
  this.frame = 0
}, of:n(), update:function() {
  this.ii(this.frame);
  this.frame += 1
}, ii:function(b) {
  b = this.ba.get(b);
  if(b !== k) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(wa[b.value] !== i) {
        var a = wa[b.value];
        if(a !== k) {
          if(a[0].Qb === j) {
            this.sg(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.sg(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.ba.rf = m
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, sg:function(b) {
  this.ca.Pd += 1;
  b = b.$(this.ca, b.aa).setPosition(b.x, b.y).addChildTo(this.ca).Hi();
  b.ee = this;
  return b
}, Rf:function(b) {
  ya();
  this.ca.cd = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), d = -4;4 >= d;d++) {
    for(var f = -4;4 >= f;f++) {
      var g = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(d, f);
      g.ha = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.ha) + 0.5;
        this.ha += 1
      };
      g.addChildTo(a)
    }
  }
  a.tweener.wait(3E3).call(b).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = n();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(a)).wait(1E3).call(function() {
    this.remove()
  }.bind(a));
  a.addChildTo(this.ca.Ne);
  K("warning");
  K("voWarning")
}});
ua.create = function(b, a) {
  switch(a) {
    case 0:
      return za(b);
    case 1:
      return Aa(b);
    case 2:
      return gls2.Lh(b);
    case 3:
      return gls2.Lh(b);
    default:
      h(Error("stageNumber = " + a))
  }
};
va = tm.createClass({index:0, data:k, rf:m, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? k : b.stop === j ? (this.rf = j, b) : this.rf ? k : b
}});
za = tm.createClass({superClass:ua, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    Ba("bgm1", j);
    this.ca.ka.direction = 0.5 * Math.PI;
    this.ca.ka.speed = 8;
    this.ca.ka.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
  });
  this.ba.add(200, "tankRD-center");
  this.ba.add(200, "tankRD-left");
  this.ba.add(20, "heri1-right");
  this.ba.add(60, "heri1-center");
  this.ba.add(10, "cannon-0");
  this.ba.add(30, "heri1-left");
  this.ba.add(10, "cannon-1");
  this.ba.add(30, "tankL-top");
  this.ba.add(50, "heri1-right");
  this.ba.add(20, "tankRD-center");
  this.ba.add(80, "heri1-center");
  this.ba.add(150, "komachi-1");
  this.ba.add(230, "heri1-right");
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
  this.ba.add(30, "heri1-center");
  this.ba.add(50, "heri1-left");
  this.ba.add(20, "tankL-top");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "fighter-m-1");
  this.ba.add(50, "fighter-m-5");
  this.ba.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
  this.ba.add(50, "heri2-center");
  this.ba.add(50, "heri2-right");
  this.ba.add(50, "heri2-left");
  this.ba.add(1, "cannon-6");
  this.ba.add(30, "heri1-left");
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
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-left");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-left");
  this.ba.add(1, "cannon-1");
  this.ba.add(30, "heri1-center");
  this.ba.add(50, "heri1-left");
  this.ba.add(50, "heri1-right");
  this.ba.add(30, "heri1-center");
  this.ba.add(50, "heri1-left");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "fighter-m-6");
  this.ba.add(50, "fighter-m-5");
  this.ba.add(50, "fighter-m-4");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right");
  this.ba.add(50, "heri1-left2");
  this.ba.add(50, "heri1-center2");
  this.ba.add(50, "heri1-center");
  this.ba.add(50, "heri1-right2");
  this.ba.add(50, "heri1-center");
  this.ba.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.ba.add(100, "komachi-0");
  this.ba.add(160, "komachi-1");
  this.ba.add(600, function() {
    this.Rf(function() {
      Ba("bgmBoss", j)
    })
  });
  this.ba.add(600, "misumi")
}, of:function() {
  this.ca.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
Aa = tm.createClass({superClass:ua, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    Ba("bgm2", j);
    this.ca.ka.direction = 0.5 * Math.PI;
    this.ca.ka.speed = 0.3
  });
  this.ba.add(200, "tank25-top");
  this.ba.add(160, "heri1-left");
  this.ba.add(100, "heri1-right");
  this.ba.add(190, "komachi2-0");
  this.ba.add(10, "itsuki-1");
  this.ba.add(400, "tank15-top");
  this.ba.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
  });
  this.ba.add(60, "heri2-left");
  this.ba.add(60, "heri2-center");
  this.ba.add(60, "heri2-right");
  this.ba.add(20, "tankRD-center");
  this.ba.add(20, "tankL-top");
  this.ba.add(20, "yayoi-R0");
  this.ba.add(1, "yayoi-R2");
  this.ba.add(40, "heri2-left");
  this.ba.add(60, "heri2-center");
  this.ba.add(60, "heri2-right");
  this.ba.add(60, "yayoi-R1");
  this.ba.add(1, "heri2-center");
  this.ba.add(1, "heri2-left");
  this.ba.add(1, "heri2-right");
  this.ba.add(30, "makoto-R0");
  this.ba.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
  });
  this.ba.add(600, "tank5-center");
  this.ba.add(1, "yayoi-3");
  this.ba.add(90, "heri2-left");
  this.ba.add(1, "yayoi-2");
  this.ba.add(90, "tank5-left");
  this.ba.add(1, "yayoi-1");
  this.ba.add(90, "heri2-right");
  this.ba.add(1, "yayoi-0");
  this.ba.add(90, "heri2-left");
  this.ba.add(60, "tank5-left");
  this.ba.add(1, function() {
    this.ca.ka.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
  });
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri1-left2");
  this.ba.add(40, "tank5-center");
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri2-left");
  this.ba.add(40, "tank5-center");
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri1-left2");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri2-left");
  this.ba.add(40, "tank5-center");
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri2-left");
  this.ba.add(90, "makoto-4");
  this.ba.add(1, "tsubomi-0");
  this.ba.add(1, "tsubomi-2");
  this.ba.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.ba.add(400, function() {
    this.ca.ka.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.ba.add(430, function() {
    this.ca.ka.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.ba.add(1, "mai", j);
  this.ba.add(300, "heri2-left");
  for(b = 0;24 > b;b++) {
    this.ba.add(15, "heri2-center"), this.ba.add(15, "heri2-right"), this.ba.add(15, "heri2-center"), this.ba.add(15, "heri2-left")
  }
  this.ba.add(1, function() {
    this.ca.ka.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
  });
  this.ba.add(60, "tank5-left");
  this.ba.add(60, "tank5-left");
  this.ba.add(60, "tank5-left");
  this.ba.add(120, "itsuki-2");
  this.ba.add(1, "komachi2-0");
  this.ba.add(380, "tsubomi-0");
  this.ba.add(1, "komachi2-1");
  this.ba.add(380, "itsuki-1");
  this.ba.add(380, "makoto-4");
  this.ba.add(1, "komachi2-0");
  this.ba.add(380, "makoto-1");
  this.ba.add(580, "erika");
  this.ba.add(520, function() {
    this.Rf(function() {
      Ba("bgmBoss", j)
    })
  });
  this.ba.add(300, function() {
    this.ca.ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.ba.add(300, "hyuga")
}, of:function() {
  this.ca.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
function La(b, a) {
  if(b.parent === k || a.parent === k) {
    return m
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, g = b.y + b.boundingHeightBottom, l = a.x - a.boundingWidthLeft, u = a.y - a.boundingHeightTop, D = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > l && f < D && g > u
}
;var Ma = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, cj:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.Kc(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
var Na = tm.createClass({superClass:Ma, titleText:k, menu:k, descriptions:k, showExit:m, title:k, selections:[], description:k, box:k, cursor:k, cf:k, _selected:0, _opened:m, _finished:m, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.cf = d.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.cf !== k && this.parent.cf(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), K("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = S(this._selected, 0, this.selections.length - 1), K("select")) : b.keyboard.getKeyDown("up") && 
  (this._selected -= 1, this._selected = S(this._selected, 0, this.selections.length - 1), K("select")))
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
}, Kc:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function W(b, a, d, f, g) {
  g = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:n()}, g);
  b.cj(Na(a, d, g), f)
}
;I = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, Ge:0.85, size:0, image:k, fb:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  a !== i && (this.alpha = a);
  d !== i && (this.Ge = d);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.Ge;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return I(this.size, this.wj, this.Ge, this.image)
}});
ga = tm.createClass({superClass:I, ka:k, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.ka = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.ka.ra;
  this.y += this.ka.sa + 0.3
}, clone:function(b) {
  return ga(this.ka, b)
}});
var Ka = tm.createClass({width:0, label:k, Xa:k, ha:0, yg:0, lf:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Xa = [];
  this.yg = 480 - this.width - 5;
  this.lf = 5
}, Zh:function(b, a) {
  a === j && (this.Xa.clear(), this.Xa.push(""));
  5 < this.Xa.length && this.Xa.splice(1, this.Xa.length - 4);
  this.Xa.push(b);
  return this
}, bi:function() {
  this.Xa.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.Xa.length) {
    if("" !== this.Xa[0]) {
      var a = this.Xa[0][0];
      this.Xa[0] = this.Xa[0].substring(1);
      b += a
    }else {
      this.Xa.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.ha % 2 ? "_" : " ");
  this.ha += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.yg, this.lf);
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
function Ia() {
  function b(b) {
    if(1 > b) {
      return k
    }
    var d = [], f = Math.random(), g, l;
    for(l = 0;512 > l;l += ~~b) {
      g = Math.random();
      for(var p = 0;p < b;p++) {
        d[l + p] = a(f, g, p / b)
      }
      f = g
    }
    f = d[512 - ~~b];
    g = d[0];
    for(p = 0;p < b;p++) {
      d[512 - ~~b + p] = a(f, g, p / b)
    }
    return d
  }
  function a(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var d = [], f = 0, g = Math.pow(2, 4);8 > f;f++, g *= 2) {
    var l = b(512 / g);
    if(l === k) {
      break
    }
    d.push(l)
  }
  l = [].concat(d[0]);
  f = 1;
  for(g = 0.5;f < d.length;f++, g *= 0.5) {
    for(var u = 0;512 > u;u++) {
      l[u] += d[f][u] * g
    }
  }
  for(f = 0;f < l.length;f++) {
    l[f] /= 2
  }
  return l
}
var Ja;
w = {index:-1, data:k, setup:function(b) {
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
L = k;
Ba = function(b, a) {
  a || Ca();
  var d = tm.asset.AssetManager.get(b);
  d && (L = d.clone(), L.volume = 0.1 * t.Zc, L.loop = j, L.play())
};
Ca = function() {
  L !== k && L.stop()
};
ya = function() {
  if(L !== k) {
    var b = L;
    b.loop = m;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
K = function(b) {
  if(0 !== t.yc && K.played[b] !== t.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * t.yc, K.uf !== k && K.uf.stop(), K.uf = a) : a.volume = 0.1 * t.yc);
    K.played[b] = t.frame
  }
};
K.played = {};
K.uf = k;
(function() {
  var b = k, a = k;
  ba = tm.createClass({superClass:Ma, result:k, ha:0, ld:[], Sd:m, kg:k, qg:0, Yd:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.kg = tm.display.Label().setPosition(240, 256).addChildTo(this);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Sd = m;
      for(var a = ("" + Math.floor(t.Vd)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.kg.text = "HIGH SCORE: " + b.trim()
    })
  }, Kc:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Nf(80 * Math.cos(0.01 * this.ha) + 240, 80 * Math.sin(0.01 * this.ha) + 320, 0);
    this.Nf(80 * Math.cos(0.01 * this.ha + Math.PI) + 240, 80 * Math.sin(0.01 * this.ha + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Sd && this.xg();
    this.ha += 1
  }, Nf:function(d, f, g) {
    if(!this.Sd) {
      b === k && (b = I(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === k && (a = I(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      g.speed = 0.6;
      var l = T(0, 2 * Math.PI), u = U(0, 20);
      g.setPosition(Math.cos(l) * u + d, Math.sin(l) * u + f);
      var D = this;
      g.update = function() {
        this.x += Math.cos(l) * this.speed;
        this.y += Math.sin(l) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = D.ld.indexOf(this);
          -1 !== a && D.ld.splice(a, 1)
        }
      };
      this.ld.push(g)
    }
  }, xg:function() {
    W(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.Ni, {defaultValue:this.qg, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, Ni:function(a) {
    4 !== a && (this.qg = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Sd = j;
          for(var a = 0, b = this.ld.length;a < b;a++) {
            this.ld[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          t.replaceScene(Da())
        }.bind(this));
        break;
      case 2:
        this.dc();
        break;
      case 3:
        t.ji()
    }
  }, dc:function() {
    W(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.gf, {defaultValue:this.Yd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, gf:function(a) {
    3 !== a && (this.Yd = a);
    switch(a) {
      case 0:
        this.hf();
        break;
      case 1:
        this.jf();
        break;
      case 2:
        this.Ui();
        break;
      default:
        this.xg()
    }
  }, hf:function() {
    W(this, "BGM VOLUME", "012345".split(""), this.ef, {defaultValue:t.Zc, onCursorMove:function(a) {
      L !== k && "exit" !== a && (L.volume = 0.1 * a)
    }, showExit:m})
  }, ef:function(a) {
    6 !== a && (t.Zc = a);
    this.dc()
  }, jf:function() {
    W(this, "SE VOLUME", "012345".split(""), this.ff, {defaultValue:t.yc, showExit:m})
  }, ff:function(a) {
    6 !== a && (t.yc = a);
    this.dc()
  }, Ui:function() {
    W(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Mi, {defaultValue:t.dg, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Mi:function(a) {
    5 !== a && (t.dg = a);
    this.dc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  Da = tm.createClass({superClass:Ma, mode:0, types:k, he:k, rb:k, sb:k, tb:k, Ye:k, We:k, type:0, style:0, Zb:m, Zd:m, init:function() {
    this.superInit();
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Yi();
    this.he = this.Xi();
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
    this.he.visible = m;
    this.bf(-1, j);
    this.rb.update();
    this.sb.update();
    this.tb.update();
    K("voSelectShip")
  }, Yi:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Ye = tm.display.Label("Type-A").setPosition(240, 150);
    this.Ye.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.Ze = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.Ze.update = function() {
      this.Ze.text = b[this.type]
    }.bind(this);
    this.Ze.addChildTo(a);
    var g = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.rb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.sb = tm.display.AnimationSprite(g, 64, 64).gotoAndPlay("typeB");
    this.tb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.rb.Ia = 0;
    this.sb.Ia = 1;
    this.tb.Ia = 2;
    this.rb.setScale(3).setPosition(0, 320).addChildTo(a);
    this.sb.setPosition(0, 320).addChildTo(a);
    this.tb.setPosition(0, 320).addChildTo(a);
    this.rb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ia / 3 * Math.PI)
    };
    this.sb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ia / 3 * Math.PI)
    };
    this.tb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ia / 3 * Math.PI)
    };
    return a
  }, Xi:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.We = tm.display.Label("Shot Style").setPosition(240, 150);
    this.We.addChildTo(a);
    this.Uc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Pb = tm.app.Object2D();
    this.Pb.addChildTo(this.Uc);
    this.Pb.update = function(a) {
      this.Pb.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.ua = [];
    this.ua[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ua[0].update = function() {
      0 === this.type ? this.ua[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.ua[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.ua[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.ua[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ua[1].update = function() {
      0 === this.type ? this.ua[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.ua[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.ua[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.ua[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ua[2].update = function() {
      0 === this.type ? this.ua[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.ua[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.ua[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.ua[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ua[3].update = function() {
      0 === this.type ? this.ua[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.ua[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.ua[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.Uc.line = b(0, 0, 0, 130, 8);
    this.Uc.line.addChildTo(this.Uc);
    this.ua.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Pb)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3059\u308b\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.Xe = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.Xe.update = function() {
      this.Xe.text = f[this.style]
    }.bind(this);
    this.Xe.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.he.visible = m, !this.Zd && a.keyboard.getKeyDown("left")) {
        this.bf(-1, m), K("select")
      }else {
        if(!this.Zd && a.keyboard.getKeyDown("right")) {
          this.bf(1, m), K("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, K("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.he.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, K("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, K("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (v.wf ? this.Ri() : (this.Zb = j, this.wg()), K("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.dj(0 === ~~(a.frame / 60) % 2))
    }
  }, Ri:function() {
    W(this, "AUTO BOMB", ["on", "off"], this.Ii, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, Ii:function(a) {
    2 !== a && (this.Zb = 0 === a, this.wg())
  }, wg:function() {
    W(this, "ARE YOU READY?", ["ok"], this.Ji, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, Ji:function(a) {
    0 === a && this.$i()
  }, bf:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.rb, this.sb, this.tb][this.type].remove().addChildTo(this.types);
    b ? (this.rb.Ia -= a, this.rb.scaleX = 0 === this.type ? 5 : 1, this.rb.scaleY = 0 === this.type ? 5 : 1, this.sb.Ia -= a, this.sb.scaleX = 1 === this.type ? 5 : 1, this.sb.scaleY = 1 === this.type ? 5 : 1, this.tb.Ia -= a, this.tb.scaleX = 2 === this.type ? 5 : 1, this.tb.scaleY = 2 === this.type ? 5 : 1) : (this.Zd = j, this.rb.tweener.clear().to({Ia:this.rb.Ia - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.sb.tweener.clear().to({Ia:this.sb.Ia - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.tb.tweener.clear().to({Ia:this.tb.Ia - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.Zd = m
    }.bind(this)));
    this.Ye.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, $i:function() {
    t.ca.Zb = this.Zb;
    t.ca.start(this.type, this.style);
    t.replaceScene(t.ca)
  }, dj:function(a) {
    this.We.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    a ? (this.ua[0].visible = j, this.ua[1].visible = j, 1 === this.style ? (this.ua[2].visible = m, this.ua[3].visible = m) : (this.ua[2].visible = j, this.ua[3].visible = j), this.Uc.line.lineWidth = 5) : (this.ua.each(function(a) {
      a.visible = m
    }), this.Uc.line.lineWidth = 0 === this.style ? 10 : 20)
  }, Kc:function(b) {
    b.clearColor(tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle());
    b.lineWidth = 1;
    b.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    b.beginPath();
    for(var f = 0, g = -48;528 > g;g += 24) {
      for(var f = 0 === f ? a : 0, l = 2 * -a + f;l < 640 + 2 * a;l += 2 * a) {
        b.line(g, l, g + 16, l), b.line(g, l, g - 8, l + a), b.line(g, l, g - 8, l - a)
      }
    }
    b.stroke();
    b.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    b.fillRect(10, 10, 460, 620)
  }});
  var b = tm.createClass({superClass:tm.display.CanvasElement, init:function(a, b, g, l, u) {
    this.superInit();
    this.angle = g - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = l;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = u
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
  }}), a = 8 * Math.sqrt(3)
})();
F = tm.createClass({superClass:Ma, da:k, score:0, La:0, za:0, jd:0, Ga:0, $b:0, Dg:0, ee:k, ka:k, jc:3, fe:0, ge:0, Kb:0, Pd:0, kd:0, af:0, Zb:m, eb:0, tc:0, Uf:0, Nc:m, Te:m, Jb:0, $a:0, ta:m, fd:0, Mc:0, ya:0, Nd:0, vj:0, uj:0, Ud:k, gg:k, kf:k, eg:k, Me:k, Ne:k, Ie:k, Ei:k, ob:k, hb:k, Qb:k, cd:m, Di:m, init:function() {
  F.ve !== k && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  F.ve = this;
  this.hb = na(this);
  this.hb.Sa.addChildTo(this);
  this.ka = pa().oa;
  this.ka.addChildTo(this);
  this.Ud = F.Xb().addChildTo(this);
  this.gg = F.Xb().addChildTo(this);
  this.eg = F.Xb().addChildTo(this);
  this.Me = F.Xb().addChildTo(this);
  this.kf = F.Xb().addChildTo(this);
  this.Ne = F.Xb().addChildTo(this);
  this.Ie = F.Xb().addChildTo(this);
  this.Ei = F.Ff(this).addChildTo(this);
  tm.Ya.kc.bd.Qf = this;
  this.ob = tm.app.Object2D();
  this.ob.addChildTo(this);
  this.ob.update = function(b) {
    this.Pi(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.hb.clear()
  })
}, addChild:function(b) {
  b.fb ? this.Me.addChild(b) : b instanceof N ? this.Ie.addChild(b) : b instanceof ra ? this.Ud.addChild(b) : b instanceof O ? b.Tb ? this.Ud.addChild(b) : this.eg.addChild(b) : b instanceof ca ? this.kf.addChild(b) : b === this.ob || b === this.ka || b instanceof F.Xb || b instanceof F.Ff || b instanceof oa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(b)))
}, update:function(b) {
  this.Vi(b.keyboard);
  0 === b.frame % 500 && (Ja = Ia());
  this.ee.update(b.frame);
  0 === b.frame % 2 && this.hb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(ba()), Ca()) : b.keyboard.getKeyDown("space") ? this.$d(0) : b.keyboard.getKeyDown("p") && (this.Cg().saveAsImage(), this.$d(0))
}, Cg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.ka.ka.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.hb.element, 0, 0);
  return b
}, Pi:function() {
  this.da.Rb === m && z.erase();
  var b;
  b = [].concat(O.Pa);
  for(var a = [].concat(G.Pa), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var g = b[f], l = a[d];
      if(!(0 >= g.ma) && La(g, l) && (l.Td(1), l.remove(), g.Sb(l.qc))) {
        this.Kb += 1;
        this.ta ? this.Va(v.lh) : this.Va(v.kh);
        this.df(g);
        break
      }
    }
  }
  l = this.da.Ub;
  if(this.da.nb) {
    b = [].concat(O.Pa);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(g = b[f], !(0 >= g.ma) && La(g, l)) {
        l.Wi(g.y + g.boundingHeightBottom);
        g.Sb(l.qc) ? (this.Kb += 1, this.ta ? this.Va(v.jh) : this.Va(v.gh), this.df(g)) : (this.ta ? this.Ec(0.01 * this.ya) : this.Ec(0.01), this.Ga = Math.min(this.Ga + 0.02, 1), this.ta ? this.Va(v.ih) : this.Va(v.hh));
        l.Td(2);
        break
      }
    }
    a = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(O.Pa);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.ma) && La(g, a) && (g.Sb(l.qc) ? (this.Kb += 1, this.ta ? this.Va(v.fh) : this.Va(v.bh), this.df(g)) : (this.ta ? this.Ec(0.01 * this.ya) : this.Ec(0.01), this.Ga = Math.min(this.Ga + 0.02, 1), this.ta ? this.Va(v.eh) : this.Va(v.dh)), l.vi(2, this.da.x, this.da.y - 30))
    }
  }
  if(this.Nc) {
    z.erase();
    b = [].concat(O.Pa);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.ma) && (g.gd() && g.Sb(v.Kg)) && (this.pc(g.score), this.Kb += 1)
    }
    this.Ga = this.za = 0
  }
  if(this.ta) {
    f = [].concat(G.Pa);
    for(g = f.length;f[--g] !== i;) {
      if(l = f[g], !(0 >= l.ma)) {
        a = [].concat(N.Pa);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== m && (0 < l.ma && La(l, d)) && (d.ma -= 6 - this.$a, 0 > d.ma && (d.Da(), this.pc(v.Og), this.Ec(v.Mg), this.jg(m, m, d.x, d.y, 1)), l.ma -= 1)
        }
      }
    }
  }
  if(this.cd) {
    z.erase()
  }else {
    if(this.da.parent !== k && this.da.Pc === m && this.Nc === m && 0 >= this.fd && !v.wh) {
      for(f = N.Pa.length;N.Pa[--f] !== i;) {
        if(b = N.Pa[f], b.visible !== m && La(b, this.da)) {
          this.da.Sb();
          0 < this.eb && this.Zb ? (this.$a = S(this.$a - 1, 0, 1), this.Jd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.ug();
          break
        }
      }
      for(f = O.Pa.length;O.Pa[--f] !== i;) {
        if(g = O.Pa[f], !(0 >= g.ma) && !g.Tb && La(g, this.da)) {
          this.da.Sb();
          0 < this.eb && this.Zb ? (this.$a = S(this.$a - 1, 0, 1), this.Jd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.ug();
          break
        }
      }
    }
    this.ta && (this.Mc -= 1, 0 >= this.Mc && this.Od());
    this.fd = Math.max(this.fd - 1, 0);
    this.Ga -= v.Sg * v.Tg;
    0 >= this.Ga && (this.Ga = 0, this.ta || 0 < this.ya ? this.$b = this.za = this.La = 0 : (0 < this.za && (0 >= this.$b && (this.$b = this.za * v.Rg), this.La = this.La * (this.za - this.$b) / this.za, this.za -= this.$b), 0 >= this.za && (this.$b = this.za = this.La = 0)))
  }
}, df:function(b) {
  this.jg(b.Tb, this.ta || Ga(b, this.da) < v.Ug, b.x, b.y, b.star, b instanceof Ea);
  this.Ec(v.rh[this.Nd]);
  for(var a = this.La, d = ~~(this.za / v.Af) + 1, f = 0;f < d;f++) {
    a += b.score, this.pc(a)
  }
  this.La += b.score * d
}, jg:function(b, a, d, f, g, l) {
  b = b ? ta : sa;
  for(var u = 0;u < g;u++) {
    var D = b(a);
    D.setPosition(d, f);
    l && (D.wc = j)
  }
}, Gi:function(b) {
  K("star");
  b.og ? (this.ge += 1, this.La += v.Fh, this.pc(v.Jh + this.La * v.Hh), this.ta ? this.Va(v.ph) : this.Va(v.oh)) : (this.fe += 1, this.La += v.Eh, this.pc(v.Ih + this.La * v.Gh), this.ta ? this.Va(v.nh) : this.Va(v.mh))
}, start:function(b, a) {
  this.hb.Hc.bi().clear();
  this.score = 0;
  this.jc = v.Df;
  this.eb = this.tc = v.Cf[a];
  this.Uf = v.Lg[a];
  this.ya = this.$a = this.Jb = 0;
  q.xa.Qa.$rank = v.th;
  this.Od();
  this.Nc = m;
  this.kd = this.af = 0;
  this.da = ca(this, b, a);
  this.Eg(0);
  K("voLetsGo");
  this.bj()
}, Eg:function(b) {
  this.Ra("3...2...1...");
  this.da.parent !== k && this.da.remove();
  O.$c();
  G.$c();
  z.$c();
  this.Ud.removeChildren();
  this.Me.removeChildren();
  this.Ne.removeChildren();
  this.kf.removeChildren();
  this.Ie.removeChildren();
  this.ob.removeChildren();
  this.Kb = this.Pd = this.ge = this.fe = this.jd = this.Ga = this.za = this.La = 0;
  this.Qb = k;
  this.Di = this.cd = m;
  this.kd = 0;
  this.hb.Sa.dd = 0;
  this.$a = this.hb.Sa.Hb = 0;
  this.Dg = b;
  this.ee = ua.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.$e()
  }.bind(this));
  this.ka.tweener.clear()
}, $e:function() {
  this.Ra("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Ub.addChildTo(this);
  this.da.Rb = m;
  this.da.Pc = j;
  this.da.Lc = m;
  this.da.nb = m;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Yc = this.Rb = j
  }.bind(this.da)).wait(v.vh).call(function() {
    this.Pc = m
  }.bind(this.da))
}, ug:function() {
  B.Qd(this.da.x, this.da.y, this);
  this.Ra("I was shot down.");
  this.da.Rb = m;
  this.da.remove();
  this.jc -= 1;
  this.ya = this.$b = this.za = this.Ga = 0;
  this.kd += 1;
  this.af += 1;
  this.$a = S(this.$a - 3, 0, 1);
  this.Jd(-0.03);
  0 < this.jc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.Zb || !v.wf) {
      this.tc = Math.min(this.tc + 1, this.Uf)
    }
    this.eb = this.tc;
    this.$e()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.Ti()
  }.bind(this))
}, Jd:function(b) {
  q.xa.Qa.$rank = S(q.xa.Qa.$rank + b, 0, 0.5)
}, si:function() {
  this.Ra("System rebooted.", j);
  this.score = 0;
  this.jc = v.Df;
  this.eb = this.tc = v.Cf[this.da.style];
  this.$a = 0;
  q.xa.Qa.$rank = 0;
  this.$e()
}, ci:function() {
  Ba("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.ob);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(Fa(this, this.Cg()));
    b.remove()
  }.bind(this))
}, ti:function() {
  Ca();
  this.app.replaceScene(Oa())
}, qj:n(), pc:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < v.Bf.length;b++) {
    var d = v.Bf[b];
    a < d && d <= this.score && this.mi()
  }
  t.Vd = Math.max(t.Vd, this.score)
}, Ec:function(b) {
  this.$b = 0;
  this.za += b;
  this.jd = Math.max(this.jd, this.za);
  1 <= b && (this.Ga = 1)
}, Va:function(b) {
  if(this.ya !== v.me) {
    for(b *= v.qh;1 < b;) {
      ma(this.da).addChildTo(this), b -= 1, this.Jb = 0, this.ya += 1, 1 === this.ya ? (this.Ra("HYPER SYSTEM, stand by.", j), K("voHyperStandBy")) : (this.Ra("HYPER SYSTEM, ready.", j), K("voHyperReady"))
    }
    this.Jb = S(this.Jb + b, 0, 1);
    1 <= this.Jb && (ma(this.da).addChildTo(this), this.ya += 1, this.Jb -= 1, 1 === this.ya ? (this.Ra("HYPER SYSTEM, stand by.", j), K("voHyperStandBy")) : (this.Ra("HYPER SYSTEM, ready.", j), K("voHyperReady")))
  }
}, aj:function() {
  0.5 > Math.random() ? (this.Ra("HYPER SYSTEM start!!", j), K("voHyperStart0")) : (this.Ra("start counting to system limit.", j), K("voHyperStart1"));
  this.$a = S(this.$a + 1, 0, 5);
  this.Jd(0.01 * this.ya);
  q.xa.Qa.$hyperOff = v.Xg;
  this.Mc = v.yd;
  this.fd = v.yd * v.ah;
  this.da.Wd.Rc(this.ya);
  this.da.Ub.Rc(this.ya);
  this.da.Ic = this.da.Wd;
  B.wi(this.da.x, this.da.y, this);
  this.ta = j;
  this.Nd = this.ya;
  this.Jb = this.ya = 0;
  z.erase(j, j)
}, Od:function() {
  this.ta !== m && (this.ta = m, ma(this.da, j).addChildTo(this), this.da.Ic = this.da.vg, q.xa.Qa.$hyperOff = 1, this.da.Wd.Rc(0), this.da.Ub.Rc(0), this.fd = v.yd * v.$g, this.Nd = this.Mc = 0, z.erase())
}, kj:function() {
  K("decision");
  K("voGetBomb");
  this.eb = Math.min(this.eb + 1, this.tc);
  this.Te = this.eb === this.tc
}, mi:function() {
  K("voExtend");
  this.Ra("extended.");
  this.jc += 1
}, Ra:function(b, a) {
  this.hb.Hc.Zh(b, a)
}, $d:function(b) {
  W(this, "PAUSE", ["resume", "setting", "exit game"], this.Oi, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:m})
}, Oi:function(b) {
  switch(b) {
    case 1:
      this.dc();
      break;
    case 2:
      this.Si()
  }
}, dc:function() {
  W(this, "SETTING", ["bgm volume", "sound volume"], this.gf, {defaultValue:this.Yd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, gf:function(b) {
  3 !== b && (this.Yd = b);
  switch(b) {
    case 0:
      this.hf();
      break;
    case 1:
      this.jf();
      break;
    default:
      this.$d()
  }
}, Si:function() {
  W(this, "REARY?", ["yes", "no"], this.Ki, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:m})
}, Ki:function(b) {
  0 === b ? (Ca(), this.app.replaceScene(ba())) : this.$d(1)
}, hf:function() {
  W(this, "BGM VOLUME", "012345".split(""), this.ef, {defaultValue:t.Zc, onCursorMove:function(b) {
    L !== k && 6 !== b && (L.volume = 0.1 * b)
  }, showExit:m})
}, ef:function(b) {
  6 !== b && (t.Zc = b);
  this.dc(1)
}, jf:function() {
  W(this, "SE VOLUME", "012345".split(""), this.ff, {defaultValue:t.yc, showExit:m})
}, ff:function(b) {
  6 !== b && (t.yc = b);
  this.dc(1)
}, Ti:function() {
  W(this, "CONTINUE?", ["yes", "no"], this.Li, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:m})
}, Li:function(b) {
  switch(b) {
    case 0:
      this.si();
      break;
    case 1:
      this.ti()
  }
}, Kc:n(), Zi:function() {
  this.hb.Sa.tweener.clear().to({dd:-480}, 1600, "easeInQuad").to({Hb:30}, 800, "easeInOutQuad")
}, yi:function() {
  this.hb.Sa.tweener.clear().to({Hb:0}, 800, "easeInOutQuad").to({dd:0}, 1600, "easeOutQuad")
}, nd:k, od:0, hd:k, Ad:0, bj:function() {
  if(1 === this.Ad) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.hd = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.nd = [];
    this.od = 0
  }else {
    if(2 === this.Ad && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.hd = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var d = localStorage.getItem("rec" + a).split(","), f = 0;f < d.length;f++) {
          this.hd.push(d[f])
        }
      }
    }
  }
}, Vi:function(b) {
  if(1 === this.Ad) {
    1E3 < this.nd.length && (console.log("save"), localStorage.setItem("rec" + this.od, this.nd), localStorage.setItem("recCount", this.od), this.nd = [], this.od += 1), this.nd.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Ad && this.hd) {
      var a = this.hd.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : m
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : m
      })
    }
  }
}});
F.Xb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
F.Ff = tm.createClass({superClass:tm.display.CanvasElement, ca:k, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.fi(b);
  this.gi(b)
}, fi:function(b) {
  if(0 < this.ca.Ga) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.Ga) + "," + ~~Math.min(255, 512 * this.ca.Ga) + ",0.5)";
    var a = 500 * this.ca.Ga;
    b.fillRect(465, 635 - a, 10, a)
  }
}, gi:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.ya === v.me ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.Jb && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.Jb, 9))
}});
F.ve = k;
Fa = tm.createClass({superClass:Ma, ca:k, Ag:k, ob:k, values:k, labels:k, Xd:k, zg:[v.Ch, v.Dh, v.zh, v.Ah, 1], ng:k, mf:k, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  this.values = [this.ca.fe, this.ca.ge, ~~(100 * (this.ca.Kb / this.ca.Pd)), this.ca.jd, 0 === this.ca.kd ? v.Bh : 0];
  this.Xd = this.values.map(function(a) {
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
  this.ng = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.mf = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.mf.visible = m;
  this.background = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle();
  this.Ag = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var g = 0;16 > g;g++) {
      f[d][g] = {nf:0, ce:0, vf:T(-2, 2), rd:T(1, 4)}
    }
  }
  this.ob = tm.app.Object2D();
  this.ob.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var g = 0;g < f[d].length;g++) {
        var r = f[d][g];
        640 > 40 * g + r.ce && (a.drawImage(this.Ag.element, 40 * d, 40 * g, 40, 40, 40 * d + r.nf, 40 * g + r.ce, 40, 40), r.nf += r.vf, r.ce += r.rd, r.rd += 0.3, b = m)
      }
    }
    this.wait = 60;
    b && this.ob.remove();
    a.restore()
  }.bind(this);
  this.ob.addChildTo(this);
  this.addEventListener("exit", function() {
    ya()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      K("star"), this.values[a] <= this.Xd[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.pc(this.values[a] * this.zg[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.pc(this.Xd[a] * this.zg[a]), this.values[a] -= this.Xd[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.ng.text = Math.floor(this.ca.score)
    }else {
      if(this.mf.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        K("decision"), this.ca.Eg(this.ca.Dg + 1), b.popScene()
      }
    }
    this.frame += 1
  }
}, Kc:function(b) {
  b.clearColor(this.background)
}});
var Oa = tm.createClass({superClass:Ma, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(ba())
    }.bind(this))
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c")) && b.replaceScene(ba())
}, Kc:function(b) {
  b.clearColor("black")
}});
tm.createClass({superClass:Ma, init:function() {
  this.superInit()
}, update:n()});
(function() {
  O = tm.createClass({superClass:tm.display.CanvasElement, name:k, da:k, ca:k, ee:k, ma:0, cc:0, score:0, Tb:m, erase:m, star:1, Ci:m, bc:j, wb:m, frame:0, ie:k, direction:0, speed:0, ja:k, init:function(a, d, f) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.wb = m;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.bc = j;
    this.ca = a;
    this.da = a.da;
    this.score = 100;
    this.erase = m;
    this.Yh(f);
    d.setup(this);
    this.altitude = this.Tb ? 1 : 10;
    this.ie = {x:0, y:0}
  }, Hi:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, yj:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.wb === m && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.wb = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Tb && (this.x += this.ca.ka.ra, this.y += this.ca.ka.sa);
    this.wb && (this.frame += 1);
    this.ie.x = this.x - a;
    this.ie.y = this.y - b
  }, Sb:function(a) {
    if(!this.wb) {
      return m
    }
    this.ma -= a;
    if(0 >= this.ma) {
      return a = T(0, 5), 2 > a ? this.ca.Ra("enemy destroy.") : 4 > a ? this.ca.Ra(this.name + " destroy.") : this.ca.Ra("ETR reaction gone."), this.erase && z.erase(j, this.ca.ta, this instanceof Ea), this.dispatchEvent(tm.event.Event("destroy")), this.Da(), j
    }
    40 > this.ma && this.ab();
    return m
  }, Da:function() {
    B.Qd(this.x, this.y, this.ca, this.ie);
    this.remove()
  }, gd:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Qi:function() {
    return this.bc
  }, ab:n(), Yh:function(a) {
    this.name = a;
    a = O.Vg[a];
    this.ma = this.cc = a[0];
    this.score = a[1];
    this.Tb = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, Oe:function() {
    this.remove();
    this.ca.gg.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && B.Qd(this.x + U(-100, 100), this.y + U(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      B.fg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Vf:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && B.Qd(this.x + U(-100, 100), this.y + U(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      B.fg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  O.$c = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = O.Pa = []
})();
Ea = tm.createClass({superClass:O, Ci:j, cc:0, de:k, init:function(b, a, d) {
  this.de = a;
  this.superInit(b, this.de[0], d);
  this.cc = this.ma;
  this.addEventListener("added", function() {
    this.ca.Qb = this;
    this.ca.Zi();
    this.tweener.wait(1E3).call(function() {
      this.ca.cd = m
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.Qb = k;
    this.ca.yi();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.ci()
    }.bind(this));
    a.addChildTo(this.ca.ob)
  })
}, Sb:function(b) {
  var a = this.ma;
  if(O.prototype.Sb.call(this, b)) {
    return this.ca.cd = j, this.ca.da.Yc = m, ya(), j
  }
  this.ma <= 0.55 * this.cc && 0.55 * this.cc < a ? (R.qf(this), this.clearEventListener("completeattack"), this.tweener.clear(), B.Gb(this.x, this.y, this.ca), z.erase(j, this.ca.ta), this.de[1].setup(this)) : this.ma <= 0.1 * this.cc && 0.1 * this.cc < a && (R.qf(this), this.clearEventListener("completeattack"), this.tweener.clear(), B.Gb(this.x, this.y, this.ca), z.erase(j, this.ca.ta), this.de[2].setup(this), K("voJacms"))
}});
(function() {
  O.Vg = {kujo:[2, 300, m, m, 1, {radius:24}], kiryu:[3, 400, m, m, 1, {radius:24}], natsuki:[5, 900, j, m, 1, {radius:24}], kise:[50, 15E3, j, m, 1, {radius:24}], yamabuki:[100, 15E3, j, m, 1, {width:70, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, m, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, m, m, 5, {width:100, height:20}], kurokawa:[35, 5E3, m, m, 5, {width:100, height:20}], akimoto:[250, 3E5, m, j, 10, {width:200, 
  heightBottom:10, heightTop:60}], yukishiro:[750, 8E5, m, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, m, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, m, j, 20, {width:300, height:80}], hyuga:[4E3, 3E6, m, j, 0, {width:240, height:80}], erika:[30, 500, m, m, 1, {width:24, height:48}]};
  O.pa = tm.createClass({superClass:O, fa:k, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.fa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    O.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  O.la = tm.createClass({superClass:O, fa:k, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.fa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    O.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  O.ea = tm.createClass({superClass:O, De:k, Ee:k, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.De = b("tex_tank1", 64, 64);
    this.Ee = b("tex_tank1", 64, 64);
    this.rc = this.rc || 0;
    this.Fb = this.Fb || 0
  }, update:function(a) {
    O.prototype.update.call(this, a);
    for(a = this.rc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.Fb;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.De.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.Ee.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.De.draw(a);
    this.Ee.draw(a)
  }, Da:function() {
    B.ki(this.x, this.y, this.ca);
    this.remove()
  }});
  O.yf = tm.createClass({superClass:O, fa:k, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.hc() : 5 === a.app.frame % 30 && this.fa.gc()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.Ua = tm.createClass({superClass:O, fa:k, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.hc() : 5 === a.app.frame % 30 && this.fa.gc()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.lc = tm.createClass({superClass:O, fa:k, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.hc() : 5 === a.app.frame % 30 && this.fa.gc()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.zd = tm.createClass({superClass:O, fa:k, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(1)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.hc() : 5 === a.app.frame % 30 && this.fa.gc()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    this.Oe()
  }});
  O.wa = tm.createClass({superClass:O, fa:k, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.hc() : 5 === a.app.frame % 30 && this.fa.gc()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.Cd = tm.createClass({superClass:O, fa:k, init:function(a, b) {
    this.superInit(a, b, "hanasaki")
  }, ab:n(), Da:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  O.pe = tm.createClass({superClass:O, init:function(a, b) {
    this.superInit(a, b, "myodoin")
  }, ab:n(), Da:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  O.zb = tm.createClass({superClass:O, fa:k, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(4)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.hc() : 5 === a.app.frame % 30 && this.fa.gc()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Gb(this.x, this.y, this.ca);
    this.remove()
  }});
  O.Vc = tm.createClass({superClass:O, init:function(a, b) {
    this.superInit(a, b, "erika")
  }, ab:n(), draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, Da:function() {
    B.Gb(this.x, this.y, this.ca);
    gls2.gj(this.x, this.y, this.da).addChildTo(this.parent);
    this.remove()
  }});
  O.ne = tm.createClass({superClass:O, fa:k, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.hc() : 5 === a.app.frame % 30 && this.fa.gc()
    })
  }, Da:function() {
    this.Oe()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  O.re = tm.createClass({superClass:Ea, fa:k, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.hc() : 5 === a.app.frame % 30 && this.fa.gc()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    this.Vf()
  }});
  O.qe = tm.createClass({superClass:O, init:function(a, b) {
    this.superInit(a, b, "mishou")
  }, ab:n(), Da:function() {
    this.Oe()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  O.Kh = tm.createClass({superClass:Ea, init:function(a, b) {
    this.superInit(a, b, "hyuga")
  }, ab:n(), Da:function() {
    this.Vf()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, sf:k, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.sf = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, hc:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.sf + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }, gc:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.sf;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }})
})();
(function() {
  R = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      R.qf(this)
    })
  }});
  R.Ba = function(a, b) {
    var f = z[b].Md();
    a.on("enterframe", f);
    a.on("completeattack", function() {
      f.stop = j
    })
  };
  R.qf = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].Ue && (a[b].stop = j)
      }
    }
  };
  R.ub = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.on("launch", function() {
      var a = w.randf(64, 192);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        R.Ba(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  R.ub = R.ub();
  R.Ea = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.on("launch", function() {
      var a = w.randf(192, 320);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        R.Ba(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  R.Ea = R.Ea();
  R.Wb = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.on("launch", function() {
      var a = w.randf(448, 576);
      this.tweener.clear().wait(w.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        R.Ba(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  R.Wb = R.Wb();
  R.la = tm.createClass({superClass:R, be:k, init:function(a) {
    this.superInit();
    this.be = a
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.be = this.be;
    a.tweener.wait(w.rand(0, 1E3)).call(function() {
      this.speed = 6;
      R.Ba(this, this.be);
      this.on("enterframe", function() {
        this.y < this.da.y && this.wb && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = S(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.gd() && this.wb && this.remove();
        if(22500 > Ga(this, this.da) || this.y > this.da.y + 150) {
          this.bc = m
        }
      })
    }.bind(a))
  }});
  R.Ma = R.la("basic1-0");
  R.Na = R.la("basic1-2");
  var b = tm.createClass({superClass:R, init:function(a, b, f) {
    this.superInit();
    this.Bi = a;
    this.Ai = b;
    this.Gc = f
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.speed = this.Bi;
    a.rc = this.Ai;
    this.Gc && (a.Gc = [].concat(this.Gc));
    a.Fb = 0;
    a.on("enter", function() {
      R.Ba(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.rc) * this.speed;
      this.y += Math.sin(this.rc) * this.speed;
      this.wb && !this.gd() && this.remove();
      for(this.Fb = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.Fb;) {
        this.Fb += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.Fb;) {
        this.Fb -= 2 * Math.PI
      }
      this.bc = this.y < this.da.y && 4E4 < Ga(this, this.da);
      if(this.Gc) {
        for(var a = 0;a < this.Gc.length;a++) {
          var b = this.Gc[a];
          b.frame === this.frame && this.tweener.to({rc:b.dir !== i ? b.dir : this.rc, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  R.Bb = b(1, 0.25 * Math.PI);
  R.ij = b(1, -1.75 * Math.PI);
  R.Wc = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  R.ia = b(1.6, 0.5 * Math.PI);
  R.Cb = b(1.6, -0.5 * Math.PI);
  R.Qg = tm.createClass({superClass:R, Eb:k, init:function(a) {
    this.superInit();
    this.Eb = a
  }, setup:function(a) {
    R.Ba(a, this.Eb);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  R.zf = R.Qg("bukky-4-0");
  b = tm.createClass({superClass:R, Eb:k, Zf:m, init:function(a, b) {
    this.superInit();
    this.Eb = a;
    this.Zf = !!b
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Eb = this.Eb;
    a.on("enter", function() {
      R.Ba(this, this.Eb)
    });
    a.on("enterframe", function() {
      this.wb && !this.gd() && this.remove()
    });
    if(!this.Zf) {
      a.on("enterframe", function() {
        this.bc = this.y < this.da.y && 4E4 < Ga(this, this.da)
      })
    }
  }});
  R.kb = b("basic3-0", m);
  R.lb = b("basic3-1", m);
  R.Ab = b("cannon2-0", j);
  R.ud = b("cannon3-0", j);
  R.ke = b("cannon5-0", j);
  b = tm.createClass({superClass:R, velocityY:0, Eb:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Eb = b
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ja = [this.Eb];
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      R.Ba(this, this.ja[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.wb && !this.gd() && this.remove();
      this.bc = this.y < this.da.y
    })
  }});
  R.mc = b(0.5, "kurokawa-1");
  R.oc = tm.createClass({superClass:R, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      R.Ba(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  R.nc = tm.createClass({superClass:R, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      R.Ba(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  R.Gf = b(0.3, "komachi-1");
  R.Hf = b(0.5, "komachi-2");
  R.Vc = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, setup:function(a) {
    R.Ba(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.bc = this.wb
    })
  }});
  R.Vc = R.Vc();
  b = tm.createClass({superClass:R, ja:k, init:function(a) {
    this.superInit();
    this.ja = a
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.Tc = m;
    a.vc = m;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Tc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 192 + 0.5 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Tc === m || 0 >= this.ma) && 1500 < this.frame && this.vc === m) {
        this.vc = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ma) && !this.vc) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.ne = b(["honoka-1"]);
  R.re = tm.createClass({superClass:R, ja:k, init:function() {
    this.superInit();
    this.ja = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.Tc = m;
    a.vc = m;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Tc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ma) && !this.vc) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.xh = R.re();
  R.se = tm.createClass({superClass:R, ja:k, init:function() {
    this.superInit();
    this.ja = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ma)) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.se = R.se();
  R.te = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.ma || R.Ba(this, "nagisa-3-1")
    })
  }});
  R.te = R.te();
  R.qe = b(["mai-1", "mai-2"]);
  R.we = tm.createClass({superClass:R, ja:k, init:function() {
    this.superInit();
    this.ja = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.Tc = m;
    a.vc = m;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Tc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ma) && !this.vc) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.we = R.we();
  R.xe = tm.createClass({superClass:R, ja:k, init:function() {
    this.superInit();
    this.ja = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ma)) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.xe = R.xe();
  R.ye = tm.createClass({superClass:R, ja:k, init:function() {
    this.superInit();
    this.ja = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ma)) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.ye = R.ye()
})();
var Y = O, $ = R;
wa = {"heri1-left":[{$:Y.la, aa:$.ub, x:48, y:-100}, {$:Y.la, aa:$.Ea, x:96, y:-100}, {$:Y.la, aa:$.ub, x:144, y:-100}, {$:Y.la, aa:$.Ea, x:192, y:-100}, {$:Y.la, aa:$.ub, x:240, y:-100}], "heri1-center":[{$:Y.la, aa:$.ub, x:144, y:-100}, {$:Y.la, aa:$.Ea, x:192, y:-100}, {$:Y.la, aa:$.ub, x:240, y:-100}, {$:Y.la, aa:$.Ea, x:288, y:-100}, {$:Y.la, aa:$.ub, x:336, y:-100}], "heri1-right":[{$:Y.la, aa:$.ub, x:240, y:-100}, {$:Y.la, aa:$.Ea, x:288, y:-100}, {$:Y.la, aa:$.ub, x:336, y:-100}, {$:Y.la, 
aa:$.Ea, x:384, y:-100}, {$:Y.la, aa:$.ub, x:432, y:-100}], "heri1-left2":[{$:Y.la, aa:$.Ea, x:48, y:-100}, {$:Y.la, aa:$.Wb, x:96, y:-100}, {$:Y.la, aa:$.Ea, x:144, y:-100}, {$:Y.la, aa:$.Wb, x:192, y:-100}, {$:Y.la, aa:$.Ea, x:240, y:-100}], "heri1-center2":[{$:Y.la, aa:$.Ea, x:144, y:-100}, {$:Y.la, aa:$.Wb, x:192, y:-100}, {$:Y.la, aa:$.Ea, x:240, y:-100}, {$:Y.la, aa:$.Wb, x:288, y:-100}, {$:Y.la, aa:$.Ea, x:336, y:-100}], "heri1-right2":[{$:Y.la, aa:$.Ea, x:240, y:-100}, {$:Y.la, aa:$.Wb, x:288, 
y:-100}, {$:Y.la, aa:$.Ea, x:336, y:-100}, {$:Y.la, aa:$.Wb, x:384, y:-100}, {$:Y.la, aa:$.Ea, x:432, y:-100}], "heri2-left":[{$:Y.pa, aa:$.Ma, x:48, y:-100}, {$:Y.pa, aa:$.Ma, x:96, y:-100}, {$:Y.pa, aa:$.Ma, x:144, y:-100}, {$:Y.pa, aa:$.Ma, x:192, y:-100}, {$:Y.pa, aa:$.Ma, x:240, y:-100}], "heri2-center":[{$:Y.pa, aa:$.Ma, x:144, y:-100}, {$:Y.pa, aa:$.Ma, x:192, y:-100}, {$:Y.pa, aa:$.Ma, x:240, y:-100}, {$:Y.pa, aa:$.Ma, x:288, y:-100}, {$:Y.pa, aa:$.Ma, x:336, y:-100}], "heri2-right":[{$:Y.pa, 
aa:$.Ma, x:240, y:-100}, {$:Y.pa, aa:$.Ma, x:288, y:-100}, {$:Y.pa, aa:$.Ma, x:336, y:-100}, {$:Y.pa, aa:$.Ma, x:384, y:-100}, {$:Y.pa, aa:$.Ma, x:432, y:-100}], "heri2-4-left":[{$:Y.pa, aa:$.Na, x:48, y:-100}, {$:Y.pa, aa:$.Na, x:96, y:-100}, {$:Y.pa, aa:$.Na, x:144, y:-100}, {$:Y.pa, aa:$.Na, x:192, y:-100}, {$:Y.pa, aa:$.Na, x:240, y:-100}], "heri2-4-center":[{$:Y.pa, aa:$.Na, x:144, y:-100}, {$:Y.pa, aa:$.Na, x:192, y:-100}, {$:Y.pa, aa:$.Na, x:240, y:-100}, {$:Y.pa, aa:$.Na, x:288, y:-100}, 
{$:Y.pa, aa:$.Na, x:336, y:-100}], "heri2-4-right":[{$:Y.pa, aa:$.Na, x:240, y:-100}, {$:Y.pa, aa:$.Na, x:288, y:-100}, {$:Y.pa, aa:$.Na, x:336, y:-100}, {$:Y.pa, aa:$.Na, x:384, y:-100}, {$:Y.pa, aa:$.Na, x:432, y:-100}], "tankRD-left":[{$:Y.ea, aa:$.Bb, x:78, y:-50}, {$:Y.ea, aa:$.Bb, x:28, y:-100}, {$:Y.ea, aa:$.Bb, x:-22, y:-150}, {$:Y.ea, aa:$.Bb, x:-72, y:-200}, {$:Y.ea, aa:$.Bb, x:-122, y:-250}], "tankRD-center":[{$:Y.ea, aa:$.Bb, x:222, y:-50}, {$:Y.ea, aa:$.Bb, x:172, y:-100}, {$:Y.ea, aa:$.Bb, 
x:122, y:-150}, {$:Y.ea, aa:$.Bb, x:72, y:-200}, {$:Y.ea, aa:$.Bb, x:22, y:-250}], "tankL-top":[{$:Y.ea, aa:$.Wc, x:550, y:64}, {$:Y.ea, aa:$.Wc, x:620, y:64}, {$:Y.ea, aa:$.Wc, x:690, y:64}, {$:Y.ea, aa:$.Wc, x:760, y:64}, {$:Y.ea, aa:$.Wc, x:830, y:64}], "tank5-left":[{$:Y.ea, aa:$.ia, x:48, y:-70}, {$:Y.ea, aa:$.ia, x:48, y:-140}, {$:Y.ea, aa:$.ia, x:48, y:-210}, {$:Y.ea, aa:$.ia, x:48, y:-280}, {$:Y.ea, aa:$.ia, x:48, y:-350}], "tank5-center":[{$:Y.ea, aa:$.ia, x:240, y:-70}, {$:Y.ea, aa:$.ia, 
x:240, y:-140}, {$:Y.ea, aa:$.ia, x:240, y:-210}, {$:Y.ea, aa:$.ia, x:240, y:-280}, {$:Y.ea, aa:$.ia, x:240, y:-350}], "tank15-top":[{$:Y.ea, aa:$.ia, x:48, y:-70}, {$:Y.ea, aa:$.ia, x:48, y:-140}, {$:Y.ea, aa:$.ia, x:48, y:-210}, {$:Y.ea, aa:$.ia, x:48, y:-280}, {$:Y.ea, aa:$.ia, x:48, y:-350}, {$:Y.ea, aa:$.ia, x:240, y:-70}, {$:Y.ea, aa:$.ia, x:240, y:-140}, {$:Y.ea, aa:$.ia, x:240, y:-210}, {$:Y.ea, aa:$.ia, x:240, y:-280}, {$:Y.ea, aa:$.ia, x:240, y:-350}, {$:Y.ea, aa:$.ia, x:432, y:-70}, {$:Y.ea, 
aa:$.ia, x:432, y:-140}, {$:Y.ea, aa:$.ia, x:432, y:-210}, {$:Y.ea, aa:$.ia, x:432, y:-280}, {$:Y.ea, aa:$.ia, x:432, y:-350}], "tank25-top":[{$:Y.ea, aa:$.ia, x:48, y:-70}, {$:Y.ea, aa:$.ia, x:48, y:-140}, {$:Y.ea, aa:$.ia, x:48, y:-210}, {$:Y.ea, aa:$.ia, x:48, y:-280}, {$:Y.ea, aa:$.ia, x:48, y:-350}, {$:Y.ea, aa:$.ia, x:240, y:-70}, {$:Y.ea, aa:$.ia, x:240, y:-140}, {$:Y.ea, aa:$.ia, x:240, y:-210}, {$:Y.ea, aa:$.ia, x:240, y:-280}, {$:Y.ea, aa:$.ia, x:240, y:-350}, {$:Y.ea, aa:$.ia, x:432, y:-70}, 
{$:Y.ea, aa:$.ia, x:432, y:-140}, {$:Y.ea, aa:$.ia, x:432, y:-210}, {$:Y.ea, aa:$.ia, x:432, y:-280}, {$:Y.ea, aa:$.ia, x:432, y:-350}, {$:Y.ea, aa:$.Cb, x:144, y:710}, {$:Y.ea, aa:$.Cb, x:144, y:780}, {$:Y.ea, aa:$.Cb, x:144, y:850}, {$:Y.ea, aa:$.Cb, x:144, y:920}, {$:Y.ea, aa:$.Cb, x:144, y:990}, {$:Y.ea, aa:$.Cb, x:336, y:710}, {$:Y.ea, aa:$.Cb, x:336, y:780}, {$:Y.ea, aa:$.Cb, x:336, y:850}, {$:Y.ea, aa:$.Cb, x:336, y:920}, {$:Y.ea, aa:$.Cb, x:336, y:990}], "bukky-4-r":[{$:Y.yf, aa:$.zf, x:480, 
y:-50}], "bukky-4-l":[{$:Y.yf, aa:$.zf, x:0, y:-50}], "cannon-0":[{$:Y.wa, aa:$.kb, x:48, y:-100}], "cannon-1":[{$:Y.wa, aa:$.kb, x:96, y:-100}], "cannon-2":[{$:Y.wa, aa:$.kb, x:144, y:-100}], "cannon-3":[{$:Y.wa, aa:$.kb, x:192, y:-100}], "cannon-4":[{$:Y.wa, aa:$.kb, x:240, y:-100}], "cannon-5":[{$:Y.wa, aa:$.kb, x:288, y:-100}], "cannon-6":[{$:Y.wa, aa:$.kb, x:336, y:-100}], "cannon-7":[{$:Y.wa, aa:$.kb, x:384, y:-100}], "cannon-8":[{$:Y.wa, aa:$.kb, x:432, y:-100}], "cannon-R0":[{$:Y.wa, aa:$.kb, 
x:550, y:128}], "cannon-R1":[{$:Y.wa, aa:$.kb, x:550, y:192}], "cannon-R2":[{$:Y.wa, aa:$.kb, x:550, y:256}], "yayoi-0":[{$:Y.wa, aa:$.lb, x:48, y:-100}], "yayoi-1":[{$:Y.wa, aa:$.lb, x:96, y:-100}], "yayoi-2":[{$:Y.wa, aa:$.lb, x:144, y:-100}], "yayoi-3":[{$:Y.wa, aa:$.lb, x:192, y:-100}], "yayoi-4":[{$:Y.wa, aa:$.lb, x:240, y:-100}], "yayoi-5":[{$:Y.wa, aa:$.lb, x:288, y:-100}], "yayoi-6":[{$:Y.wa, aa:$.lb, x:336, y:-100}], "yayoi-7":[{$:Y.wa, aa:$.lb, x:384, y:-100}], "yayoi-8":[{$:Y.wa, aa:$.lb, 
x:432, y:-100}], "yayoi-R0":[{$:Y.wa, aa:$.lb, x:550, y:128}], "yayoi-R1":[{$:Y.wa, aa:$.lb, x:550, y:192}], "yayoi-R2":[{$:Y.wa, aa:$.lb, x:550, y:256}], "tsubomi-0":[{$:Y.Cd, aa:$.ud, x:96, y:-100}], "tsubomi-1":[{$:Y.Cd, aa:$.ud, x:240, y:-100}], "tsubomi-2":[{$:Y.Cd, aa:$.ud, x:384, y:-100}], "tsubomi-R0":[{$:Y.Cd, aa:$.ud, x:580, y:128}], "itsuki-0":[{$:Y.pe, aa:$.ke, x:96, y:-100}], "itsuki-1":[{$:Y.pe, aa:$.ke, x:240, y:-100}], "itsuki-2":[{$:Y.pe, aa:$.ke, x:384, y:-100}], "makoto-0":[{$:Y.zb, 
aa:$.Ab, x:48, y:-100}], "makoto-1":[{$:Y.zb, aa:$.Ab, x:96, y:-100}], "makoto-2":[{$:Y.zb, aa:$.Ab, x:144, y:-100}], "makoto-3":[{$:Y.zb, aa:$.Ab, x:192, y:-100}], "makoto-4":[{$:Y.zb, aa:$.Ab, x:240, y:-100}], "makoto-5":[{$:Y.zb, aa:$.Ab, x:288, y:-100}], "makoto-6":[{$:Y.zb, aa:$.Ab, x:336, y:-100}], "makoto-7":[{$:Y.zb, aa:$.Ab, x:384, y:-100}], "makoto-8":[{$:Y.zb, aa:$.Ab, x:432, y:-100}], "makoto-R0":[{$:Y.zb, aa:$.Ab, x:580, y:128}], "fighter-m-0":[{$:Y.lc, aa:$.mc, x:96, y:-192}], "fighter-m-1":[{$:Y.lc, 
aa:$.mc, x:144, y:-192}], "fighter-m-2":[{$:Y.lc, aa:$.mc, x:192, y:-192}], "fighter-m-3":[{$:Y.lc, aa:$.mc, x:240, y:-192}], "fighter-m-4":[{$:Y.lc, aa:$.mc, x:288, y:-192}], "fighter-m-5":[{$:Y.lc, aa:$.mc, x:336, y:-192}], "fighter-m-6":[{$:Y.lc, aa:$.mc, x:384, y:-192}], "tsukikage-r":[{$:Y.Ua, aa:$.oc(700), x:624, y:256}, {$:Y.Ua, aa:$.oc(600), x:720, y:256}, {$:Y.Ua, aa:$.oc(500), x:576, y:320}, {$:Y.Ua, aa:$.oc(400), x:672, y:320}, {$:Y.Ua, aa:$.oc(300), x:768, y:320}, {$:Y.Ua, aa:$.oc(200), 
x:624, y:384}, {$:Y.Ua, aa:$.oc(100), x:720, y:384}], "tsukikage-l":[{$:Y.Ua, aa:$.nc(700), x:-144, y:384}, {$:Y.Ua, aa:$.nc(600), x:-240, y:384}, {$:Y.Ua, aa:$.nc(500), x:-96, y:320}, {$:Y.Ua, aa:$.nc(400), x:-192, y:320}, {$:Y.Ua, aa:$.nc(300), x:-288, y:320}, {$:Y.Ua, aa:$.nc(200), x:-144, y:256}, {$:Y.Ua, aa:$.nc(100), x:-240, y:256}], "komachi-0":[{$:Y.zd, aa:$.Gf, x:144, y:-192}], "komachi-1":[{$:Y.zd, aa:$.Gf, x:336, y:-192}], "komachi2-0":[{$:Y.zd, aa:$.Hf, x:144, y:-192}], "komachi2-1":[{$:Y.zd, 
aa:$.Hf, x:336, y:-192}], erika:[{$:Y.Vc, aa:$.Vc, x:240, y:-100}], yukishiro:[{$:Y.ne, aa:$.ne, x:240, y:-100}], misumi:[{$:Y.re, aa:[$.xh, $.se, $.te], x:240, y:-100, Qb:j}], mai:[{$:Y.qe, aa:$.qe, x:780, y:128}], hyuga:[{$:Y.Kh, aa:[$.we, $.xe, $.ye], x:240, y:-100, Qb:j}]};
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, g, l, p) {
    return c.action([c.fire(c.direction(b, "absolute"), f, g || E, l, p), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || E, l, p)])])
  }
  function d(a, b, c, d, g) {
    return function(l) {
      return f(a, b, c, l, d, g, i, i)
    }
  }
  function f(a, b, d, f, g, l, p, r) {
    return c.action([c.fire(c.direction(b), f, g || E, l, p, r), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || E, l, p, r)])])
  }
  function g(a) {
    return c.fire(c.direction(0), a || r, J)
  }
  function l(a) {
    return c.fire(c.direction(0), a || r, E)
  }
  function u(a) {
    return c.speed("$rank*2.0 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function D(a) {
    return c.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function C(a) {
    return c.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function s(a) {
    return c.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function A(a) {
    return c.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function X(a) {
    return c.va(a, {visible:m})
  }
  function H(a) {
    return c.va(a, {frame:4, Ob:j})
  }
  function Z(a) {
    return c.va(a, {frame:3})
  }
  function E(a) {
    return c.va(a, {frame:1})
  }
  function M(a) {
    return c.va(a, {frame:2})
  }
  function J(a) {
    return c.va(a, {frame:0})
  }
  function Q(a) {
    return c.va(a, {frame:3, Ob:j})
  }
  function Qa(a) {
    return c.va(a, {frame:1, Ob:j})
  }
  function V(a) {
    return c.va(a, {frame:2, Ob:j})
  }
  function P(a) {
    return c.va(a, {frame:0, Ob:j})
  }
  z = {};
  var c = q.qa;
  z["basic0-0"] = new q.ga({top:c.action([l])});
  z["basic0-1"] = new q.ga({top:c.action([b(C, -0.01, 8, d(3, -15, 15))])});
  z["basic1-0"] = new q.ga({top:c.action([c.repeat(999, [p(40), l(r)])])});
  z["basic1-1"] = new q.ga({top:c.action([c.repeat(999, [p(20), l(r)])])});
  z["basic1-2"] = new q.ga({top:c.action([p("10+$rand*20"), f(3, -10, 10, r)])});
  z["basic2-0"] = new q.ga({top:c.action([c.repeat(999, [p(50), l(r)])])});
  z["basic3-0"] = new q.ga({top:c.action([c.wait(20), c.repeat(999, [p(100), b(r, 0.1, 3, g)])])});
  z["basic3-1"] = new q.ga({top:c.action([c.wait(20), c.repeat(999, [p(40), b(r, 0.1, 3, g)])])});
  z["bukky-4-0"] = new q.ga({top0:c.action([p(30), c.repeat(999, [c.repeat(5, [f(7, -55, 55, s, P), p(7)]), p(70)])]), top1:c.action([p(50), c.repeat(999, [c.repeat(5, [f(6, -55, 55, s(2), V), p(5)]), p(90)])])});
  z["cannon2-0"] = new q.ga({top0:c.action([c.repeat(999, [p(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", s), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", s), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", s), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", s), p(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", r, J), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", r, J), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", r, J), 
  a(3, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", r, J)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), A, H), c.fire(c.direction(" 90+$loop.index*10", "absolute"), A, H), c.fire(c.direction("180+$loop.index*10", "absolute"), A, H), c.fire(c.direction("270+$loop.index*10", "absolute"), A, H), c.fire(c.direction("  0-$loop.index*10", "absolute"), A, H), c.fire(c.direction(" 90-$loop.index*10", "absolute"), A, H), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), A, H), c.fire(c.direction("270-$loop.index*10", "absolute"), A, H), p(10)])])});
  z["cannon2-1"] = new q.ga({top0:c.action([c.repeat(999, [p(20), a(6, "0-10+$loop.index*15", "0+10+$loop.index*15", s), a(6, "90-10+$loop.index*15", "90+10+$loop.index*15", s), a(6, "180-10+$loop.index*15", "180+10+$loop.index*15", s), a(6, "270-10+$loop.index*15", "270+10+$loop.index*15", s), p(20), a(7, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", r, J), a(7, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", r, J), a(7, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", r, J), 
  a(7, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", r, J)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*5", "absolute"), A, H), c.fire(c.direction(" 90+$loop.index*5", "absolute"), A, H), c.fire(c.direction("180+$loop.index*5", "absolute"), A, H), c.fire(c.direction("270+$loop.index*5", "absolute"), A, H), c.fire(c.direction("  0-$loop.index*5", "absolute"), A, H), c.fire(c.direction(" 90-$loop.index*5", "absolute"), A, H), c.fire(c.direction("180-$loop.index*5", 
  "absolute"), A, H), c.fire(c.direction("270-$loop.index*5", "absolute"), A, H), p(5)])])});
  z["cannon3-0"] = new q.ga({top0:c.action([c.repeat(999, [p(80), b(s, 0.01, 5, d(5, -30, 30, J, c.offsetX(-60))), b(s, 0.01, 5, d(5, -30, 30, J)), b(s, 0.01, 5, d(5, -30, 30, J, c.offsetX(60)))])])});
  z["cannon4-0"] = new q.ga({top0:c.action([p(20), c.repeat(999, [c.fire(s, V), c.repeat(8, [p(10), c.Wa("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), s, V), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), s, V)])]), p(120)])])});
  z["cannon5-0"] = new q.ga({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), u, X(c.bb("b"))), c.repeat(11, [p(5), c.fire(c.direction(10, "sequence"), u, X(c.bb("b")))]), p(60)])]), b:c.action([c.wait(5), c.Fc(c.speed(0), 0), b(s, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, E)
  }), c.ib])});
  z["yuri-4"] = new q.ga({top:c.action([p(60), c.repeat(7, [a(7, 120, 240, A, J), p(8)])])});
  z["kurokawa-1"] = new q.ga({top0:c.action([c.repeat(999, [b(r, -0.01, 4, function(a) {
    return f(4, -45, 45, a, M, c.offsetX(-45), c.Ca(j))
  }), b(r, -0.01, 4, function(a) {
    return f(4, -45, 45, a, M, c.offsetX(45), c.Ca(j))
  }), p(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), r, Q, c.offsetX(-45), c.Ca(j)), p(45), c.fire(c.direction(0), r, Q, c.offsetX(45), c.Ca(j)), p(45)])])});
  z["komachi-1"] = new q.ga({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), A(1), E, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(-40)), c.repeat(57, [p(8), c.fire(c.direction(-720 / 57, "sequence"), A(1), E, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, [c.fire(c.direction(-210, 
  "absolute"), A(1), E, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(40)), c.repeat(57, [p(8), c.fire(c.direction(720 / 57, "sequence"), A(1), E, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), E, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), r(0), P, c.offsetX(-110), c.Ca(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), r(0), P, c.offsetX(-110), c.Ca(j))]), p(10), c.fire(c.direction(0), r(0), P, c.offsetX(110), c.Ca(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), r(0), P, c.offsetX(110), c.Ca(j))]), p(10)])])});
  z["komachi-2"] = new q.ga({top0:c.action([c.repeat(999, [b(r, -0.01, 4, function(a) {
    return c.action([f(4, -45, 45, a, M, c.offsetX(-45), c.Ca(j)), p(4)])
  }), b(r, -0.01, 4, function(a) {
    return c.action([p(4), f(4, -45, 45, a, M, c.offsetX(45), c.Ca(j))])
  }), p(90)])]), top1:c.action([c.repeat(999, [p(45), b(s, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, Qa)]), p(1)])
  }), p(180)])])});
  z["honoka-1"] = new q.ga({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, s, H, c.offsetX(0), c.offsetY(30)), p(30), f(5, -40, 40, A, H, c.offsetX(0), c.offsetY(30)), p(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, s(0.6), E), f(3, -3, 3, s(1), E), f(4, -4, 4, s(1.4), E), f(5, -5, 5, s(1.8), E), p(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, A, P, c.offsetX(-110), c.offsetY(-70)), p(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, A, P, c.offsetX(110), c.offsetY(-70)), 
  p(30)])])});
  z["nagisa-1-1"] = new q.ga({top0:c.action([p(90), c.repeat(3, [c.Wa("way", "5 + $loop.index*6"), b(s, 0.01, "3 + $loop.index*4", function(a) {
    return c.action([f("$way", -110, 110, a, E, c.offsetX(-190), c.offsetY(-20)), f("$way", -110, 110, a, E, c.offsetX(190), c.offsetY(-20)), c.wait(5)])
  }), p(60)]), p(60)])});
  z["nagisa-1-2"] = new q.ga({top0:c.action([c.repeat(12, [f(15, -90, 90, A, E), p(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [f(5, -65, -55, s, P, c.offsetX(-190), c.offsetY(-20)), f(5, -35, -25, s, P, c.offsetX(-190), c.offsetY(-20)), f(5, -5, 5, s, P, c.offsetX(-190), c.offsetY(-20)), f(5, 25, 35, s, P, c.offsetX(-190), c.offsetY(-20)), f(5, 55, 65, s, P, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), p(60), c.repeat(3, [f(5, -65, -55, s, P, c.offsetX(190), c.offsetY(-20)), f(5, -35, -25, 
  s, P, c.offsetX(190), c.offsetY(-20)), f(5, -5, 5, s, P, c.offsetX(190), c.offsetY(-20)), f(5, 25, 35, s, P, c.offsetX(190), c.offsetY(-20)), f(5, 55, 65, s, P, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), p(60)])])});
  z["nagisa-1-3"] = new q.ga({top0:c.action([p(60), c.repeat(3, [c.fire(c.direction(-60), s, M, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [p(15), c.fire(c.direction(6, "sequence"), s, M, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([p(80), c.repeat(3, [c.fire(c.direction(60), s, M, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [p(15), c.fire(c.direction(-6, "sequence"), s, M, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [f(5, -60, -40, s, H, c.offsetX(-190), 
  c.offsetY(-20)), f(5, -20, -10, s, H, c.offsetX(-190), c.offsetY(-20)), f(5, 10, 20, s, H, c.offsetX(-190), c.offsetY(-20)), f(5, 40, 60, s, H, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), p(60), c.repeat(3, [f(5, -60, -40, s, H, c.offsetX(190), c.offsetY(-20)), f(5, -20, -10, s, H, c.offsetX(190), c.offsetY(-20)), f(5, 10, 20, s, H, c.offsetX(190), c.offsetY(-20)), f(5, 40, 60, s, H, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), p(60)])])});
  z["nagisa-2-1"] = new q.ga({top0:c.action([p(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", A, J, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", A, J, c.offsetX(190), c.offsetY(-20)), p(10)])]), top1:c.action([p(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", s, Q), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", s, Q), p(12)])])});
  z["nagisa-2-2"] = new q.ga({top0:c.action([p(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", r, Q), p(12)])]), top1:c.action([p(120), c.repeat(6, [a(9, 150, 130, A(0.8), E), a(9, 172, 188, A(0.8), E), a(9, 210, 230, A(0.8), E), p(30), a(9, 170, 150, A(0.8), E), a(9, 190, 210, A(0.8), E), p(30)])])});
  z["nagisa-2-3"] = new q.ga({top:c.action([p(120), c.repeat(12, [a(23, 0, 360, A, H, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, A, H), a(23, 0, 360, A, H, c.offsetX(190), c.offsetY(-20)), p(30)])])});
  z["nagisa-3-1"] = new q.ga({top0:c.action([p(50), c.repeat(999, [b(r, 0.001, 5, function(a) {
    return c.action([f(41, "-180", "+180", a, V, c.offsetX(-190), c.offsetY(-20)), f(41, "-180", "+180", a, V, c.offsetX(190), c.offsetY(-20))])
  }), p(50)])]), top1:c.action([c.repeat(999, [f(2, -2, 0, C, E), p(10), f(2, 0, 2, C, E), p(150)])])});
  z["mai-1"] = new q.ga({top0:c.action([p(50), c.repeat(50, [c.Wa("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", u, X(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, J), c.ib]))), c.Wa("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", u, X(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, J), c.ib]))), p(8)])]), top1:c.action([p(50), c.repeat(12, [a(5, -50, 50, u, X(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, Q), c.ib]))), 
  a(5, -230, -130, u, X(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, Q), c.ib]))), p(16), a(6, -50, 50, u, X(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, Q), c.ib]))), a(6, -230, -130, u, X(c.action([c.wait(8), c.fire(c.direction(0, "relative"), s, Q), c.ib]))), p(16)])])});
  z["mai-2"] = new q.ga({top:c.action([p(50), c.repeat(15, [c.fire(c.direction(-10), V(c.bb("fireChild", "$loop.index*10"))), p(8)])]), fireChild:c.action([p("40+$1"), b(s, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, M)
  }), c.ib])});
  z["saki-1-1"] = new q.ga({top:c.action([p(100), c.repeat(3, [c.bb("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Wa("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", r, J), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", r, J), p(12)]), c.repeat("$2", [f(9, -20, 20, C, Z)])])});
  z["saki-1-2"] = new q.ga({top:c.action([p(100), c.repeat(5, [c.Wa("way", "5+$loop.index*2"), c.repeat(6, [c.Wa("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, r("$s"), Q, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), p(90)])])});
  z["saki-1-3"] = new q.ga({top:c.action([c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), Q(c.bb("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Fc(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, s, Z), c.ib])});
  z["saki-2-1"] = new q.ga({top0:c.action([p(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", s, J, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", s, J, c.offsetX(40)), p(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", s, J, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", s, J, c.offsetX(40)), p(60)])]), top1:c.action([p(100), c.repeat(4, [c.repeat(7, [c.Wa("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  D, Z), c.repeat(4, [c.Wa("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", D("$w*-1.0"), Z)])]), p(120)])])});
  z["saki-2-2"] = new q.ga({top:c.action([p(60), c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), V(c.bb("seed"))), p(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), V(c.bb("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Fc(c.speed(0), "10 + $rand*15"), c.wait(65), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, M)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, M)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, M)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, M)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, M)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, M)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, M)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, M)])
  }), b(r, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, M)])
  }), p(2), c.ib])});
  z["saki-2-3"] = new q.ga({top:c.action([p(60), c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), Q(c.bb("seed"))), p(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), Q(c.bb("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Fc(c.speed(0), "10 + $rand*20"), c.wait(65), b(r, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, Z)])
  }), p(2), c.ib])});
  z["saki-3-1"] = new q.ga({top:c.action([c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("60*$dir + $loop.index*5*-$dir"), c.speed(2), V(c.bb("seed"))), p(8), c.fire(c.direction("60*-$dir + $loop.index*5*$dir"), c.speed(2), V(c.bb("seed"))), p(8)])]), seed:c.action([c.wait(10), c.Fc(c.speed(0), "30 + $rand*40"), c.wait(65), a(4, 0, 270, C, M), a(4, 0, 270, r, M), a(4, 0, 270, s, M), p(2), c.ib])});
  z["saki-3-2"] = new q.ga({top:c.action([c.Wa("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("60*$dir + $loop.index*5*-$dir"), c.speed(2), Q(c.bb("seed"))), p(8), c.fire(c.direction("60*-$dir + $loop.index*5*$dir"), c.speed(2), Q(c.bb("seed"))), p(8)])]), seed:c.action([c.wait(10), c.Fc(c.speed(0), "30 + $rand*40"), c.wait(65), a(4, 45, 315, C, Z), a(4, 45, 315, r, Z), a(4, 45, 315, s, Z), p(2), c.ib])});
  z.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      xa.push(N())
    }
    a = z.Ld = tm.Ya.kc.bd;
    a.Ve = function(a) {
      return!(a instanceof N) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Wf = function(a) {
      var b = xa.shift(0);
      if(b) {
        return b.ma = v.Ng, ja.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.Ob ? (b.scaleX = 1, b.scaleY = 1, b.ic = m) : (b.scaleX = 0.8, b.scaleY = 1.5, b.ic = j), b.visible = a.visible === m ? m : j, b.Ob = !!a.Ob, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.$f = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.Ac = v.Pg;
    q.xa.Qa.$rank = 0;
    q.xa.Qa.$hyperOff = 1
  };
  z.erase = function(a, b, c) {
    for(var d = [].concat(ja), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var l = sa(!!b);
        l.setPosition(d[f].x, d[f].y);
        c && (l.wc = j)
      }
      d[f].Da()
    }
  };
  z.$c = function() {
    for(var a = [].concat(ja), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  N = tm.createClass({superClass:tm.display.Sprite, ma:0, Ob:m, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      xa.push(this);
      var a = ja.indexOf(this);
      -1 !== a && ja.splice(a, 1)
    })
  }, update:function() {
    this.Ob && (this.rotation += 15)
  }, Da:function() {
    var a = I(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var xa = [], ja = N.Pa = []
})();
var S, T, Ha, U, Pa;
S = function(b, a, d) {
  return b < a ? a : b > d ? d : b
};
Pa = Math.PI / 180;
Ha = function(b) {
  return b * Pa
};
U = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
T = function(b, a) {
  return window.Math.random() * (a - b) + b
};

