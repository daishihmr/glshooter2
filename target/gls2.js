/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(b) {
  throw b;
}
var i = void 0, j = !0, k = null, l = !1;
function n() {
  return function() {
  }
}
var q = {$g:this};
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
    this.Sd = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof q.hb ? this.Ka.push(a[b]) : a[b] instanceof q.Wb ? this.Kd.push(a[b]) : a[b] instanceof q.Fc && this.Sd.push(a[b]))
      }
      a = 0;
      for(b = this.Ka.length;a < b;a++) {
        this.Ka[a].ob(this)
      }
      a = 0;
      for(b = this.Kd.length;a < b;a++) {
        this.Kd[a].ob(this)
      }
      a = 0;
      for(b = this.Sd.length;a < b;a++) {
        this.Sd[a].ob(this)
      }
    }
  };
  q.ga.prototype.ig = function(a) {
    return b(this.Ka, a)
  };
  q.ga.prototype.yi = function() {
    for(var a = [], b = 0, f = this.Ka.length;b < f;b++) {
      var g = this.Ka[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  q.ga.prototype.oi = function(a) {
    var b;
    if(b = this.ig(a)) {
      return b
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  q.ga.prototype.pi = function(a) {
    return b(this.Kd, a)
  };
  q.ga.prototype.qi = function(a) {
    var b;
    if(b = this.pi(a)) {
      return b
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  q.ga.prototype.ri = function(a) {
    return b(this.Sd, a)
  };
  q.ga.prototype.si = function(a) {
    var b;
    if(b = this.ri(a)) {
      return b
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  q.Wb = function() {
    this.root = this.label = k;
    this.direction = new q.Nb(0);
    this.speed = new q.Ob(1);
    this.Ka = [];
    this.Aa = {};
    this.oa = {}
  };
  q.Wb.prototype.clone = function(a) {
    var b = new q.Wb;
    b.label = this.label;
    b.root = this.root;
    b.Ka = this.Ka;
    b.direction = new q.Nb(a.Fa(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new q.Ob(a.Fa(this.speed.value));
    b.speed.type = this.speed.type;
    b.Aa = this.Aa;
    b.oa = a.oa;
    return b
  };
  q.Wb.prototype.ob = function(a) {
    this.root = a;
    for(var b = 0, f = this.Ka.length;b < f;b++) {
      this.Ka[b].ob(a)
    }
  };
  q.td = function(a) {
    this.root = k;
    this.label = a;
    this.Ha = []
  };
  q.td.prototype.clone = function(a) {
    var b = a.oa;
    a.oa = a.De(this.Ha);
    var f = this.root.qi(this.label).clone(a);
    a.oa = b;
    return f
  };
  q.td.prototype.ob = function(a) {
    this.root = a
  };
  q.Ja = function() {
    this.Za = ""
  };
  q.Ja.prototype.ob = function(a) {
    this.root = a
  };
  q.hb = function() {
    this.Za = "action";
    this.root = this.label = k;
    this.ub = [];
    this.Ha = []
  };
  q.hb.prototype = new q.Ja;
  q.hb.prototype.ob = function(a) {
    this.root = a;
    for(var b = 0, f = this.ub.length;b < f;b++) {
      this.ub[b].ob(a)
    }
  };
  q.hb.prototype.clone = function() {
    var a = new q.hb;
    a.label = this.label;
    a.root = this.root;
    a.ub = this.ub;
    return a
  };
  q.Ec = function(a) {
    this.Za = "actionRef";
    this.label = a;
    this.root = k;
    this.Ha = []
  };
  q.Ec.prototype = new q.Ja;
  q.Ec.prototype.clone = function() {
    var a = new q.hb;
    a.root = this.root;
    a.ub.push(this);
    return a
  };
  q.Fc = function() {
    this.Za = "fire";
    this.va = this.speed = this.direction = this.root = this.label = k;
    this.Aa = new q.xd
  };
  q.Fc.prototype = new q.Ja;
  q.Fc.prototype.ob = function(a) {
    this.root = a;
    this.va && this.va.ob(a)
  };
  q.me = function(a) {
    this.Za = "fireRef";
    this.label = a;
    this.Ha = []
  };
  q.me.prototype = new q.Ja;
  q.vd = function() {
    this.Za = "changeDirection";
    this.direction = new q.Nb;
    this.Ua = 0
  };
  q.vd.prototype = new q.Ja;
  q.wd = function() {
    this.Za = "changeSpeed";
    this.speed = new q.Ob;
    this.Ua = 0
  };
  q.wd.prototype = new q.Ja;
  q.sd = function() {
    this.Za = "accel";
    this.Jb = new q.pe;
    this.Mb = new q.Be;
    this.Ua = 0
  };
  q.sd.prototype = new q.Ja;
  q.Dd = function(a) {
    this.Za = "wait";
    this.value = a || 0
  };
  q.Dd.prototype = new q.Ja;
  q.Ae = function() {
    this.Za = "vanish"
  };
  q.Ae.prototype = new q.Ja;
  q.Bd = function() {
    this.Za = "repeat";
    this.Hg = 0;
    this.action = k;
    this.Ha = []
  };
  q.Bd.prototype = new q.Ja;
  q.Bd.prototype.ob = function(a) {
    this.root = a;
    this.action && this.action.ob(a)
  };
  q.ke = function(a, b) {
    this.Za = "bind";
    this.fj = a;
    this.mi = b
  };
  q.ke.prototype = new q.Ja;
  q.ve = function(a, b) {
    this.Za = "notify";
    this.ii = a;
    this.Ha = b || k
  };
  q.ve.prototype = new q.Ja;
  q.Xg = new q.Ja;
  q.Nb = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  q.Ob = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  q.pe = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  q.Be = function(a) {
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
  q.Jf = function(a) {
    this.value = a || 0
  };
  q.Kf = function(a) {
    this.value = a || 0
  };
  q.yf = function(a) {
    this.value = !!a
  }
})();
q.xa = function(b) {
  this.Pf = b;
  this.Ed = [];
  this.Zb = -1;
  this.Oa = k;
  this.oa = {}
};
q.xa.prototype.next = function() {
  this.Zb += 1;
  if(this.Oa !== k) {
    var b = this.Oa.ub[this.Zb];
    if(b !== i) {
      if(b instanceof q.hb) {
        return this.Xc(), this.Oa = b, this.oa = this.Ce(), this.next()
      }
      if(b instanceof q.Ec) {
        return this.Xc(), this.Oa = this.Pf.oi(b.label), this.oa = this.De(b.Ha), this.next()
      }
      if(b instanceof q.Bd) {
        return this.oa.Pc = 0, this.oa.ug = this.Fa(b.Hg) | 0, this.Xc(), this.Oa = b.action.clone(), this.oa = this.Ce(), this.next()
      }
      if(b instanceof q.Fc) {
        var a = new q.Fc;
        a.va = b.va.clone(this);
        b.direction !== k && (a.direction = new q.Nb(this.Fa(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== k && (a.speed = new q.Ob(this.Fa(b.speed.value)), a.speed.type = b.speed.type);
        a.Aa = new q.xd;
        a.Aa.offsetX = this.Fa(b.Aa.offsetX);
        a.Aa.offsetY = this.Fa(b.Aa.offsetY);
        a.Aa.Ca = b.Aa.Ca;
        return a
      }
      return b instanceof q.me ? (this.Xc(), this.Oa = new q.hb, this.Oa.ub = [this.Pf.si(b.label)], this.oa = this.De(b.Ha), this.next()) : b instanceof q.vd ? (a = new q.vd, a.direction.type = b.direction.type, a.direction.value = this.Fa(b.direction.value), a.Ua = this.Fa(b.Ua), a) : b instanceof q.wd ? (a = new q.wd, a.speed.type = b.speed.type, a.speed.value = this.Fa(b.speed.value), a.Ua = this.Fa(b.Ua), a) : b instanceof q.sd ? (a = new q.sd, a.Jb.type = b.Jb.type, a.Jb.value = this.Fa(b.Jb.value), 
      a.Mb.type = b.Mb.type, a.Mb.value = this.Fa(b.Mb.value), a.Ua = this.Fa(b.Ua), a) : b instanceof q.Dd ? new q.Dd(this.Fa(b.value)) : b instanceof q.Ae ? b : b instanceof q.ke ? (this.oa["$" + b.fj] = this.Fa(b.mi), q.Xg) : b instanceof q.ve ? b : k
    }
    this.Yh();
    if(this.Oa === k) {
      return k
    }
    if((b = this.Oa.ub[this.Zb]) && "repeat" == b.Za) {
      this.oa.Pc++, this.oa.Pc < this.oa.ug && (this.Xc(), this.Oa = b.action.clone(), this.oa = this.Ce())
    }
    return this.next()
  }
  return k
};
q.xa.prototype.Xc = function() {
  this.Ed.push({action:this.Oa, cursor:this.Zb, scope:this.oa});
  this.Zb = -1
};
q.xa.prototype.Yh = function() {
  var b = this.Ed.pop();
  b ? (this.Zb = b.cursor, this.Oa = b.action, this.oa = b.scope) : (this.Zb = -1, this.Oa = k, this.oa = {})
};
q.xa.prototype.Fa = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.oa[b]) || (a = q.xa.Ra[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var d in q.xa.Ra) {
    q.xa.Ra.hasOwnProperty(d) && (a[d] = q.xa.Ra[d])
  }
  for(d in this.oa) {
    this.oa.hasOwnProperty(d) && (a[d] = this.oa[d])
  }
  a.$rand = Math.random();
  (d = this.Ed[this.Ed.length - 1]) && (a.$loop = {index:d.scope.Pc, count:d.scope.Pc + 1, first:0 === d.scope.Pc, last:d.scope.Pc + 1 >= d.scope.ug});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
q.xa.prototype.De = function(b) {
  var a = {};
  if(b) {
    for(var d = 0, f = b.length;d < f;d++) {
      a["$" + (d + 1)] = this.Fa(b[d])
    }
  }else {
    for(d in this.oa) {
      this.oa.hasOwnProperty(d) && (a[d] = this.oa[d])
    }
  }
  return a
};
q.xa.prototype.Ce = function() {
  var b = {}, a;
  for(a in this.oa) {
    this.oa.hasOwnProperty(a) && (b[a] = this.oa[a])
  }
  return b
};
q.ga.prototype.Qe = function(b) {
  var a = new q.xa(this);
  if(b = this.ig(b)) {
    a.Oa = b
  }
  return a
};
q.Wb.prototype.Qe = function() {
  var b = new q.xa(this.root), a = new q.hb;
  a.root = this.root;
  a.ub = this.Ka;
  b.Oa = a;
  b.oa = this.oa;
  return b
};
q.xa.Ra = {};
q.ra = function(b) {
  b = b || "";
  for(var a in q.ra) {
    q.ra.hasOwnProperty(a) && (q.$g[b + a] = q.ra[a])
  }
};
q.ra.action = function(b) {
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
  var f = new q.hb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof q.Ja)
    }) && h(Error("argument type error.")), f.ub = b
  }else {
    a = 0;
    for(d = arguments.length;a < d;a++) {
      arguments[a] instanceof q.Ja ? f.ub[a] = arguments[a] : h(Error("argument type error."))
    }
  }
  return f
};
q.ra.Pa = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.Ec(b);
  if(a instanceof Array) {
    f.Ha = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ha.push(arguments[d])
    }
  }
  return f
};
q.ra.va = function(b, a, d, f) {
  for(var g = 0, m = arguments.length;g < m;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  m = new q.Wb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Nb ? m.direction = arguments[g] : arguments[g] instanceof q.Ob ? m.speed = arguments[g] : arguments[g] instanceof q.hb ? m.Ka.push(arguments[g]) : arguments[g] instanceof q.Ec ? m.Ka.push(arguments[g]) : arguments[g] instanceof Array ? m.Ka.push(q.ra.action(arguments[g])) : arguments[g] instanceof Object ? m.Aa = arguments[g] : "string" === typeof arguments[g] && (m.label = arguments[g])
  }
  return m
};
q.ra.mj = function(b, a) {
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
q.ra.fire = function(b, a, d, f) {
  for(var g = 0, m = arguments.length;g < m;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  m = new q.Fc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Nb ? m.direction = arguments[g] : arguments[g] instanceof q.Ob ? m.speed = arguments[g] : arguments[g] instanceof q.Wb ? m.va = arguments[g] : arguments[g] instanceof q.td ? m.va = arguments[g] : arguments[g] instanceof q.xd ? m.Aa = arguments[g] : arguments[g] instanceof q.Jf ? m.Aa.offsetX = arguments[g].value : arguments[g] instanceof q.Kf ? m.Aa.offsetY = arguments[g].value : arguments[g] instanceof q.yf && (m.Aa.Ca = arguments[g].value)
  }
  m.va === i && h(Error("bullet (or bulletRef) is required."));
  return m
};
q.ra.qj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("label is required."));
  f = new q.me(b);
  if(a instanceof Array) {
    f.Ha = a
  }else {
    for(d = 1;d < arguments.length;d++) {
      f.Ha.push(arguments[d])
    }
  }
  return f
};
q.ra.nj = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("direction is required."));
  a === i && h(Error("term is required."));
  d = new q.vd;
  d.direction = b instanceof q.Nb ? b : new q.Nb(b);
  d.Ua = a;
  return d
};
q.ra.Ld = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("speed is required."));
  a === i && h(Error("term is required."));
  d = new q.wd;
  d.speed = b instanceof q.Ob ? b : new q.Ob(b);
  d.Ua = a;
  return d
};
q.ra.kj = function(b, a, d) {
  for(var f = 0, g = arguments.length;f < g;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  g = new q.sd;
  for(f = 0;f < arguments.length;f++) {
    arguments[f] instanceof q.pe ? g.Jb = b : arguments[f] instanceof q.Be ? g.Mb = a : g.Ua = arguments[f]
  }
  g.Jb === i && g.Mb === i && h(Error("horizontal or vertical is required."));
  g.Ua === i && h(Error("term is required."));
  return g
};
q.ra.wait = function(b) {
  for(var a = 0, d = arguments.length;a < d;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && h(Error("value is required."));
  return new q.Dd(b)
};
q.ra.zb = function() {
  return new q.Ae
};
q.ra.repeat = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("times is required."));
  a === i && h(Error("action is required."));
  f = new q.Bd;
  f.Hg = b;
  if(a instanceof q.hb || a instanceof q.Ec) {
    f.action = a
  }else {
    if(a instanceof Array) {
      f.action = q.ra.action(a)
    }else {
      for(var g = [], d = 1;d < arguments.length;d++) {
        g.push(arguments[d])
      }
      f.action = q.ra.action(g)
    }
  }
  return f
};
q.ra.kb = function(b, a) {
  return new q.ke(b, a)
};
q.ra.yj = function(b, a) {
  return new q.ve(b, a)
};
q.ra.direction = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Nb(b);
  a !== i && (d.type = a);
  return d
};
q.ra.speed = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Ob(b);
  a && (d.type = a);
  return d
};
q.ra.Jb = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.pe(b);
  a && (d.type = a);
  return d
};
q.ra.Mb = function(b, a) {
  for(var d = 0, f = arguments.length;d < f;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  b === i && h(Error("value is required."));
  d = new q.Be(b);
  a && (d.type = a);
  return d
};
q.ra.pj = function(b) {
  return new q.xd(b)
};
q.ra.offsetX = function(b) {
  return new q.Jf(b)
};
q.ra.offsetY = function(b) {
  return new q.Kf(b)
};
q.ra.Ca = function(b) {
  return new q.yf(b)
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
  tm.Ya.mc = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.Mf = a
  }, Nd:function(a, b) {
    var d = this.Mf.yi();
    if(b === i && 0 < d.length) {
      for(var f = [], E = 0, t = d.length;E < t;E++) {
        f[f.length] = this.Nf(a, d[E])
      }
      for(var r = function() {
        if(!r.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          r.Me == f.length && (r.ad = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, E = f.length;E--;) {
        f[E].be = r
      }
      r.Me = 0;
      r.Yf = function() {
        this.Me++
      };
      r.Me = 0;
      r.ad = l;
      r.Ve = j;
      r.stop = l;
      return r
    }
    return this.Nf(a, b)
  }, Nf:function(a, b) {
    function d() {
      if(!d.stop) {
        d.ha += 1;
        this.ha = d.ha;
        var a = d.Md, b = d.Xh;
        if(b) {
          if(d.ha < d.Ke ? d.direction += d.Kc : d.ha === d.Ke && (d.direction = d.bc), d.ha < d.Le ? d.speed += d.qd : d.ha === d.Le && (d.speed = d.Tc), d.ha < d.Ge ? (d.Bc += d.Hd, d.Dc += d.Id) : d.ha === d.Ge && (d.Bc = d.Fd, d.Dc = d.Gd), this.x += Math.cos(d.direction) * d.speed * a.Cc, this.y += Math.sin(d.direction) * d.speed * a.Cc, this.x += d.Bc * a.Cc, this.y += d.Dc * a.Cc, a.We(this)) {
            if(a.kc || this.kc) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.ha < d.Ig || d.ad)) {
              for(var f;f = d.Jg.next();) {
                switch(f.Za) {
                  case "fire":
                    b.Uh.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.Ig = "number" === typeof f.value ? d.ha + f.value : 0 !== (a = ~~f.value) ? d.ha + a : d.ha + eval(f.value);
                    return;
                  case "changeDirection":
                    b.Ph.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.Qh.call(this, f, d);
                    break;
                  case "accel":
                    b.Nh.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.Vh.call(this, f)
                }
              }
              d.ad = j;
              d.be ? d.be.Yf() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.ad = j, d.be ? d.be.Yf() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Ya.mc.bd, f;
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
    "string" === typeof b ? d.Jg = this.Mf.Qe(b) : b instanceof q.Wb ? d.Jg = b.Qe() : (window.console.error(a, b), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Xh = this;
    d.Md = a;
    d.Ig = -1;
    d.ad = l;
    d.direction = 0;
    d.qg = 0;
    d.speed = 0;
    d.sg = 0;
    d.Bc = 0;
    d.Dc = 0;
    d.Kc = 0;
    d.bc = 0;
    d.Ke = -1;
    d.qd = 0;
    d.Tc = 0;
    d.Le = -1;
    d.Hd = 0;
    d.Fd = 0;
    d.Id = 0;
    d.Gd = 0;
    d.Ge = -1;
    d.ha = -1;
    d.stop = l;
    d.Ve = j;
    return d
  }, Th:function(a) {
    function b() {
      b.stop || (this.x += b.cg, this.y += b.dg, b.Md.We(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Ya.mc.bd, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b.Md = a;
    b.direction = 0;
    b.speed = 0;
    b.cg = 0;
    b.dg = 0;
    b.stop = l;
    b.Ve = j;
    return b
  }, Uh:function(b, d, f, C) {
    if(this.Ri === i || this.cc) {
      var E = {label:b.va.label}, t;
      for(t in b.va.Aa) {
        E[t] = b.va.Aa[t]
      }
      if(E = d.Xf(E)) {
        C = (t = 0 === b.va.Ka.length) ? C.Th(d) : C.Nd(d, b.va);
        var r = this, A = {x:this.x + b.Aa.offsetX, y:this.y + b.Aa.offsetY};
        f.qg = C.direction = function(t) {
          var p = eval(t.value) * Math.DEG_TO_RAD;
          switch(t.type) {
            case "aim":
              return d.target ? b.Aa.Ca ? a(A, d.target) + p : a(r, d.target) + p : p - Math.PI / 2;
            case "absolute":
              return p - Math.PI / 2;
            case "relative":
              return f.direction + p;
            default:
              return f.qg + p
          }
        }(b.direction || b.va.direction);
        f.sg = C.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.sg + b;
            default:
              return b
          }
        }(b.speed || b.va.speed);
        E.x = A.x;
        E.y = A.y;
        t && (C.cg = Math.cos(C.direction) * C.speed * d.Cc, C.dg = Math.sin(C.direction) * C.speed * d.Cc);
        E.kc = !!E.kc;
        if(d.kc || E.kc) {
          E.rotation = (C.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, E.speed = C.speed
        }
        E.addEventListener("enterframe", C);
        d.Rf ? d.Rf.addChild(E) : this.parent && this.parent.addChild(E)
      }
    }
  }, Ph:function(d, f, s) {
    var C = eval(d.direction.value) * Math.DEG_TO_RAD, E = eval(d.Ua);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        s.bc = a(this, d) + C;
        s.Kc = b(s.bc - s.direction) / E;
        break;
      case "absolute":
        s.bc = C - Math.PI / 2;
        s.Kc = b(s.bc - s.direction) / E;
        break;
      case "relative":
        s.bc = s.direction + C;
        s.Kc = b(s.bc - s.direction) / E;
        break;
      case "sequence":
        s.Kc = C, s.bc = s.direction + s.Kc * (E - 1)
    }
    s.Ke = s.ha + E
  }, Qh:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.Ua);
    switch(a.speed.type) {
      case "absolute":
        b.Tc = d;
        b.qd = (b.Tc - b.speed) / f;
        break;
      case "relative":
        b.Tc = d + b.speed;
        b.qd = (b.Tc - b.speed) / f;
        break;
      case "sequence":
        b.qd = d, b.Tc = b.speed + b.qd * f
    }
    b.Le = b.ha + f
  }, Nh:function(a, b) {
    var d = eval(a.Ua);
    b.Ge = b.ha + d;
    if(a.Jb) {
      var f = eval(a.Jb.value);
      switch(a.Jb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Hd = (f - b.Bc) / d;
          b.Fd = f;
          break;
        case "relative":
          b.Hd = f, b.Fd = (f - b.Bc) * d
      }
    }else {
      b.Hd = 0, b.Fd = b.Bc
    }
    if(a.Mb) {
      switch(f = eval(a.Mb.value), a.Mb.type) {
        case "absolute":
        ;
        case "sequence":
          b.Id = (f - b.Dc) / d;
          b.Gd = f;
          break;
        case "relative":
          b.Id = f, b.Gd = (f - b.Dc) * d
      }
    }else {
      b.Id = 0, b.Gd = b.Dc
    }
  }, Vh:function(a) {
    var b = tm.event.Event(a.ii);
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
  tm.Ya.fi = function(a) {
    var b = tm.app.Sprite(d, 8, 8);
    b.label = a.label;
    return b
  };
  var f = k;
  tm.Ya.ag = function(a) {
    if(f === k) {
      if(!a.getRoot().app) {
        return j
      }
      f = a.getRoot().app;
      console.log(f instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < f.width && 0 <= a.y && a.y < f.height
  };
  tm.Ya.oj = function() {
    return j
  };
  tm.Ya.mc.bd = {Xf:tm.Ya.fi, We:tm.Ya.ag, Aj:0, kc:l, Cc:2, target:k};
  q.ga.prototype.Nd = function(a) {
    return tm.Ya.mc(this).Nd(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(n());
tm.main(function() {
  ba("#canvas2d").run()
});
var u = k, gls2 = {}, v, ca, w, z, B, F, da, ea, fa, ga, ha, ia, la, G, J, K, ma, na, oa, pa, qa, ra, sa, ta, ua, va, wa, xa, za, Aa, Ba, Ca, Da, L, Ea, Fa, M, N, Ga, Ha, R, ba = tm.createClass({superClass:tm.display.CanvasApp, Wd:0, uj:0, Zc:3, Ac:3, eg:1, ca:k, init:function(b) {
  u !== k && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  u = this;
  this.resize(480, 640).fitWindow();
  this.fps = v.Zg;
  this.background = "rgba(0,0,0,0)";
  this.uf = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm4:"assets2/nc31173.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/nc44202.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", 
  "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", 
  "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.Wh();
    return ca()
  }.bind(this)}))
}, update:function() {
  for(var b = [].concat(this.uf), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.uf.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Wh:function() {
  w.setup(12345);
  ["tex_stage1", "tex_tank1"].forEach(function(b) {
    var a = tm.asset.AssetManager.get(b), d = tm.graphics.Canvas();
    d.resize(a.width, a.height);
    d.drawTexture(a, 0, 0);
    d = d.getBitmap();
    d.filter({calc:function(a, b, d, f, E) {
      E.setPixelIndex(b, a[0], 0, 0)
    }});
    var f = tm.graphics.Canvas();
    f.resize(a.width, a.height);
    f.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(b + "Red", f)
  });
  z.setup();
  B.setup();
  this.ca = F()
}, ki:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Wd, "")
}, uf:k, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Ia(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
}
;v = {xh:l, Zg:60, uh:0, Cf:[1E9, 1E10], wh:3E3, Ef:3, Df:[3, 2, 1], Mg:[6, 4, 2], Lf:1, th:0.1, Ff:1, vh:0.25, gj:1, ij:0.25, Lg:2, lh:0.0050, hh:0.01, ih:0.0010, dh:0.015, eh:0.0020, nh:0.0010, ph:0.01, mh:0, kh:0, jh:0, gh:0.03, fh:0.0040, oh:0, qh:0, rh:0.75, ne:10, yd:800, bh:0.25, ah:0.1, sh:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], Tg:0.02, Ug:0.5, Sg:0.01, Bf:1E3, Pg:10, Ng:1, Kh:1E3, Jh:100, Ih:0, Hh:0, Gh:1E3, Fh:100, Yg:0.5, Qg:4, Vg:22500, Og:50, zh:10, xf:l, Kg:j, Dh:1E3, Eh:2E3, Ah:4E3, 
Bh:1E4, Ch:2E7};
(function() {
  var b = k, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  da = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, fb:0, Sb:j, Yc:j, Qc:l, ca:k, speed:0, bb:k, Jc:k, wg:k, Xd:k, Vb:k, Re:k, Qb:k, Se:k, Te:k, frame:0, init:function(a, f, g) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = f;
    this.style = g;
    tm.Ya.mc.bd.target = this;
    this.speed = [6, 5, 4.5][f];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Jc = this.wg = ea(f, 100);
    this.Xd = ea(3, 100);
    this.Vb = fa(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Vb.visible = l;
    this.Sh();
    this.bb = this.Rh();
    1 === this.style && (this.bb = [this.bb[1], this.bb[2]]);
    this.Qb = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(g = this.bb.length;f < g;f++) {
      var m = this.bb[f];
      ga(this, m).setPosition(m.x, m.y).addChildTo(this.Qb)
    }
    this.Gi = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.Gi.blendMode = "lighter";
    this.Se = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Se.blendMode = "lighter";
    this.Se.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.ya && !a.ua
    };
    this.Te = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Te.blendMode = "lighter";
    this.Te.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.ya && !a.ua
    };
    this.ed = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.ed.blendMode = "lighter";
    this.ed.rotation = -90;
    this.ed.strokeStyle = "rgba(180,180,255,0.4)";
    this.ed.update = function() {
      this.visible = a.ua
    };
    this.ed.draw = function(b) {
      b.lineCap = "round";
      var f = a.Nc / v.yd;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, l);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, l);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * f * Math.PI, l)
    };
    this.Ai = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Ai.update = function() {
      this.visible = a.ua
    };
    b === k && (b = ha(this.ca.la))
  }, Rh:function() {
    if(0 === this.type) {
      return[{x:0, wc:0, y:40, d:0, pb:j, lb:-0.7, v:j}, {x:0, wc:0, y:40, d:0, pb:j, lb:0.5, v:j}, {x:0, wc:0, y:40, d:0, pb:j, lb:-0.5, v:j}, {x:0, wc:0, y:40, d:0, pb:j, lb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, pb:l, lb:-0.7, v:j}, {x:-40, y:40, d:0.1, pb:l, lb:-0.5, v:j}, {x:40, y:40, d:0.1, pb:j, lb:0.5, v:j}, {x:70, y:20, d:0.1, pb:j, lb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, pb:l, lb:-0.7, v:j}, {x:-30, y:20, d:0.4, pb:l, lb:-0.5, v:j}, {x:30, y:20, d:0.4, pb:j, lb:0.5, v:j}, {x:60, y:40, d:0.6, pb:j, lb:0.7, v:j}]
    }
  }, Sh:function() {
    this.Re = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.Re.setFrameIndex(5);
    this.Re.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, gc:-1, Mc:l, mb:l, update:function(d) {
    this.visible = this.Qc ? 0 === d.frame / 2 % 2 : j;
    var f = d.keyboard;
    if(this.Sb) {
      var g = f.getKeyAngle();
      g !== k && (g = a[g], this.x += g.x * this.speed * (this.mb ? 0.75 : 1), this.y += g.y * this.speed * (this.mb ? 0.75 : 1));
      this.x = S(this.x, 15, 465);
      this.y = S(this.y, 15, 625);
      var m = f.getKey("c") && this.Yc, g = f.getKey("z") && this.Yc;
      this.gc = m ? this.gc + 1 : this.gc - 1;
      this.gc = S(this.gc, -1, 10);
      this.mb = g && m || 10 === this.gc;
      m = this.ca.ua ? 3 : 5;
      this.Mc = !this.mb && (0 <= this.gc || g) && 0 === d.frame % m;
      g && (this.gc = 0);
      this.Vb.x = this.x;
      this.Vb.y = this.y - 40;
      f.getKeyDown("x") && this.Yc && (0 < this.ca.ya && !this.ca.ua ? (this.ca.bj(), ia(this).addChildTo(this.ca)) : !this.ca.Oc && 0 < this.ca.cb && (this.$a = S(this.$a - 2, 0, 1), q.xa.Ra.$rank = S(q.xa.Ra.$rank - 0.02, 0, 1), la(this, this.ca).setPosition(S(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.mb = this.Mc = l
    }
    this.Mc && (g = Math.sin(0.2 * d.frame), m = this.Jc.fire(this.x - 7 - 6 * g, this.y - 5, -90), m !== k && m.addChildTo(this.ca), m = this.Jc.fire(this.x + 7 + 6 * g, this.y - 5, -90), m !== k && m.addChildTo(this.ca));
    if(this.mb) {
      g = 0;
      for(m = this.bb.length;g < m;g++) {
        this.bb[g].v = l
      }
      this.Qb.rotation = 0
    }else {
      this.Vb.visible = l;
      g = 0;
      for(m = this.bb.length;g < m;g++) {
        this.bb[g].v = j
      }
    }
    this.ei(f);
    this.Oh(f, d.frame);
    0 === d.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = d.frame
  }, Tb:function() {
    this.mb = this.Mc = l;
    this.ca.Pd();
    this.ca.La = 0;
    this.ca.Ga = 0;
    this.ca.za = 0
  }, ei:function(a) {
    if(0 === this.type) {
      for(a = this.bb.length;this.bb[--a] !== i;) {
        var b = this.bb[a];
        0 === a ? b.x = b.wc + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.wc + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.wc + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.wc + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Qb, b.rotation = this.mb ? 0 : this.Sb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Sb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, Oh:function(a, b) {
    this.Sb && a.getKey("left") ? this.fb = S(this.fb - 0.2, -3, 3) : this.Sb && a.getKey("right") ? this.fb = S(this.fb + 0.2, -3, 3) : 0 > this.fb ? this.fb = S(this.fb + 0.2, -3, 3) : 0 < this.fb && (this.fb = S(this.fb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.fb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.fb) : 2 === this.type && this.setFrameIndex(31 + ~~this.fb);
    return b
  }});
  ga = tm.createClass({superClass:tm.display.AnimationSprite, uc:k, da:k, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.uc = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.pb ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.uc.v) {
      this.x = this.uc.x * (this.da.ca.ua ? 1.5 : 1);
      this.y = this.uc.y * (this.da.ca.ua ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.uc.d * this.uc.lb);
      var f = this.parent.localToGlobal(this);
      this.uc.v && 0 === a.frame % 2 && b.clone(40).setPosition(f.x, f.y).addChildTo(a.ca);
      this.da.Mc && (f = this.da.Jc.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== k && f.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = k;
  G = tm.createClass({superClass:tm.display.Sprite, speed:0, sc:0, ai:1, ng:0, eb:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.sc = v.Lf;
    b === k && (b = J(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.pd(a)
  }, update:function() {
    this.x += this.wf;
    this.y += this.rd;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, pd:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Ud:function(a) {
    for(var f = 0;f < a;f++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = T(2, 8), s = 2 * Math.random() * Math.PI;
      g.sa = Math.cos(s) * m;
      g.ta = Math.sin(s) * m;
      g.scaleX = g.scaleY = (T(0.1, 0.5) + T(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.sa;
        this.y += this.ta;
        this.sa *= 0.9;
        this.ta *= 0.9
      })
    }
  }});
  G.$c = function() {
    for(var b = [].concat(a), f = 0, g = b.length;f < g;f++) {
      b[f].remove()
    }
  };
  var a = G.Qa = [];
  ea = tm.createClass({fc:k, mg:l, init:function(b, f) {
    this.mg = 3 === b;
    this.fc = [];
    for(var g = 0;g < f;g++) {
      var m = G(b), s = this;
      m.addEventListener("added", function() {
        this.na = v.zh;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        s.fc.push(this)
      });
      this.mg && m.addEventListener("enterframe", function(a) {
        this.setScale((this.ai + this.ng) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.fc.push(m)
    }
  }, fire:function(a, b, g) {
    var m = this.fc.pop();
    if(m === i) {
      return k
    }
    var s = Ja(g);
    m.wf = Math.cos(s) * m.speed;
    m.rd = Math.sin(s) * m.speed;
    m.setPosition(a, b);
    m.rotation = g + 90;
    return m
  }, Sc:function(a) {
    for(var b = this.fc.length;this.fc[--b] !== i;) {
      this.fc[b].sc = v.Lf + v.th * a, this.fc[b].ng = 0.2 * a
    }
  }})
})();
fa = tm.createClass({superClass:tm.display.Sprite, da:k, ca:k, Eb:0, frame:0, Gg:k, color:k, Uf:0, Ie:0, bi:l, head:k, jg:k, Tf:k, eb:j, sc:v.Ff, Rc:k, init:function(b, a) {
  this.da = b;
  this.ca = b.ca;
  this.Uf = 0 === this.da.style ? 1 : 1.2;
  this.Ie = 0 === this.da.style ? 50 : 75;
  var d = this;
  this.Gg = a;
  this.superInit(a.redBody, this.Ie, 100);
  this.boundingHeightBottom = 1;
  this.Bj = 0;
  this.origin.y = 1;
  var f = this.Tf = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  f.y = 60;
  f.addChildTo(this);
  (this.jg = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  f = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  f.addChildTo(this);
  f.update = function() {
    this.y = d.Eb - d.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < d.Eb
  };
  this.pd(["red", "green", "blue"][this.da.type]);
  this.Sc(0)
}, pd:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.Gg[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Tf.gotoAndPlay(this.color);
  this.jg.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Rc = k;
  return this
}, Sc:function(b) {
  this.boundingWidth = this.width = this.Ie + 30 * b / v.ne;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.sc = this.Uf * v.Ff + v.vh * b;
  0 === b ? this.pd(["red", "green", "blue"][this.da.type]) : this.pd("hyper")
}, Ud:function(b, a) {
  this.Rc === k && this.Zf();
  a = a || this.Eb;
  for(var d = 0;d < b;d++) {
    var f = this.Rc.clone().setPosition(this.x, a).addChildTo(this.ca), g = T(8, 14), m = T(0, Math.PI);
    f.sa = Math.cos(m) * g;
    f.ta = Math.sin(m) * g;
    f.scaleX = f.scaleY = (T(0.5, 1.5) + T(0.5, 1.5)) / 2;
    f.addEventListener("enterframe", function() {
      this.x += this.sa;
      this.y += this.ta;
      this.sa *= 0.95;
      this.ta *= 0.95
    })
  }
}, wi:function(b, a, d) {
  this.Rc === k && this.Zf();
  for(var f = 0;f < b;f++) {
    var g = this.Rc.clone().setPosition(a, d).addChildTo(this.ca), m = T(12, 20), s = T(0, Math.PI);
    g.sa = Math.cos(s) * m;
    g.ta = Math.sin(s) * m;
    g.scaleX = g.scaleY = (T(1, 3) + T(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.sa;
      this.y += this.ta;
      this.sa *= 0.95;
      this.ta *= 0.95
    })
  }
}, Zf:function() {
  this.Rc = "hyper" === this.color ? J(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : J(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.da.mb) ? (this.Eb = Math.max(0, this.Eb - 40), this.height = this.y - this.Eb, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Eb = this.y - 40;
  this.bi = this.visible
}, draw:function(b) {
  var a = this.srcRect, d = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(d, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, tj:function() {
  return this.Eb
}, Xi:function(b) {
  this.Eb = b;
  this.head.update()
}});
fa.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.Eb
});
(function() {
  la = tm.createClass({superClass:tm.app.Object2D, eb:j, ca:k, init:function(a, d) {
    this.superInit();
    this.da = a;
    this.ca = d;
    this.Cg = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Cg.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Cg));
    this.Qf();
    b === k && (b = J(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ha = 0;
    this.md = 1;
    this.addEventListener("added", function() {
      this.ca.Oc = j;
      this.da.Qc = j;
      this.ca.cb -= 1;
      this.ca.Ue = l;
      this.ca.Pd();
      this.ca.Sa("drop BOMBER!!", j);
      K("bomb");
      K("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.Oc = l;
      this.da.Qc = l
    })
  }, Qf:function() {
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
  ma = tm.createClass({superClass:la, init:function(a, b) {
    this.superInit(a, b);
    v.Kg && this.addEventListener("added", function() {
      this.ca.cb = 0
    })
  }, Qf:function() {
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
  na = {};
  B.explosion = Array.range(0, 2).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  na.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k, frequency:3}}}, 100, 100));
  B.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  B.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  B.particle16 = J(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Ud:function(b, a, d) {
  b = B.particle16.clone().setPosition(b, a).addChildTo(d);
  a = T(5, 20);
  d = T(Math.PI, 2 * Math.PI);
  b.sa = Math.cos(d) * a;
  b.ta = Math.sin(d) * a;
  b.scaleX = b.scaleY = (T(0.1, 0.5) + T(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.sa;
    this.y += this.ta;
    this.sa *= 0.9;
    this.ta *= 0.9
  })
}, sj:function(b, a, d) {
  var f = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter").addChildTo(d);
  f.image = B.shockwaveImage;
  f.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    f.remove()
  })
}, xi:function(b, a, d) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.eb = j;
  b.addChildTo(d);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
}, Rd:function(b, a, d, f) {
  K("explode");
  b = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  b.eb = j;
  if(f !== i) {
    var g = f.x, m = f.y;
    b.addEventListener("enterframe", function() {
      this.x += g;
      this.y += m;
      g *= 0.99;
      m *= 0.99
    })
  }
  b.addChildTo(d)
}, li:function(b, a, d) {
  K("explode");
  var f = B.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  f.eb = j;
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
  f.eb = j;
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
  f.eb = j;
  f.addChildTo(d)
}, Hb:function(b, a, d) {
  K("explode2");
  K("explode3");
  for(var f = ~~(Math.random() * Ka.length), g = 0;20 > g;g++) {
    var m = B.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === g % 2 ? "lighter" : "source-over").setPosition(b, a).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(Ka.at(~~(Ka.length * g / 20) + f), 2);
    m.eb = j;
    m.addChildTo(d)
  }
}, gg:function(b, a, d) {
  K("explode2");
  K("explode3");
  for(var f = ~~(Math.random() * Ka.length), g = 0;20 > g;g++) {
    for(var m = 2 * Math.PI * g / 20, s = Math.pow(Ka.at(~~(Ka.length * g / 20) + f), 2), C = 0;3 > C;C++) {
      var E = 4 * s * (C + 1), t = na.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ha && (this.blendMode = "source-over");
        this.ha += 1
      }).setScale(0.3 * (3 - C)).setBlendMode("lighter").setPosition(b, a).gotoAndPlay();
      t.rotation = 2 * Math.random() * Math.PI;
      t.eb = j;
      t.alpha = 0.2;
      t.ha = 0;
      t.a = m;
      t.v = E;
      t.addChildTo(d)
    }
  }
}};
oa = tm.createClass({superClass:tm.app.Object2D, target:k, zc:0, angle:0, alpha:2, eb:j, reverse:l, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.zc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === k) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        J(60, this.alpha, 0.9).setPosition(Math.cos(a) * this.zc + this.target.x, Math.sin(a) * this.zc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.zc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.zc || 200 < this.zc) && this.remove()
  }
}});
ia = tm.createClass({superClass:tm.app.Object2D, target:k, angle:0, eb:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      J(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + U(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + U(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
pa = tm.createClass({superClass:tm.graphics.Canvas, ca:k, Ic:k, Ta:k, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Ic = La(200);
  this.Ta = qa(this)
}, update:function() {
  this.clear();
  this.ca.Rb !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Ta.Ib - 20, 470 * this.ca.Rb.na / this.ca.Rb.dc, 20), this.strokeRect(5, this.Ta.Ib - 20, 470, 20), this.clear(263.5, this.Ta.Ib - 20 + 2, 2, 16), this.clear(52, this.Ta.Ib - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.Ta.Ib + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.La)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.za / v.Bf) + 1), this.Ta.dd + 192, 22);
  b = [0, 1, 4][this.ca.da.type];
  for(a = 0;a < this.ca.lc - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.xa.Ra.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.jd + " hit", this.Ta.dd + 10, 95);
  0 < ~~this.ca.za && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.za + " HIT!!", 10, -this.Ta.Ib + 115));
  0 === this.frame % 2 && (!this.ca.ua && 0 < this.ca.ya ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.ya, 5, 637)) : this.ca.ua && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Od, 5, 637)));
  for(a = 0;a < this.ca.cb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.Ue && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Ic.update();
  this.Ic.mf = this.Ta.Ib + 5;
  this.Ic.draw(this);
  this.frame += 1
}});
qa = tm.createClass({superClass:tm.app.Object2D, gb:k, dd:0, Ib:0, init:function(b) {
  this.superInit();
  this.gb = b
}});
(function() {
  for(var b = [], a = [], d = 0;3 > d;d++) {
    b[d] = 40 * Math.pow(0.8, d), a[d] = b[d] / 2 * Math.sqrt(3)
  }
  ra = tm.createClass({superClass:tm.graphics.Canvas, pa:k, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.pa = sa();
    this.pa.la = this;
    this.pa.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(d) {
    this.pa.sa = Math.cos(this.pa.direction) * this.pa.speed;
    this.pa.ta = Math.sin(this.pa.direction) * this.pa.speed;
    for(var g = 0;3 > g;g++) {
      for(this.pa.wb[g] += this.pa.sa * Math.pow(0.8, g);3 * b[g] < this.pa.wb[g];) {
        this.pa.wb[g] -= 3 * b[g]
      }
      for(;this.pa.wb[g] < 3 * -b[g];) {
        this.pa.wb[g] += 3 * b[g]
      }
      for(this.pa.xb[g] += this.pa.ta * Math.pow(0.8, g);2 * a[g] < this.pa.xb[g];) {
        this.pa.xb[g] -= 2 * a[g]
      }
      for(;this.pa.xb[g] < 2 * -a[g];) {
        this.pa.xb[g] += 2 * a[g]
      }
    }
    0 === d % 2 && this.draw()
  }, draw:function() {
    this.pa.background !== k ? this.clearColor(this.pa.background, 0, 0) : this.clear();
    for(var d = 0;3 > d;d++) {
      this.lineWidth = 0.3 * Math.pow(0.8, d);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.6 * Math.pow(0.8, d) + ")"}, {offset:1, color:"rgba(255,255,255," + 0.4 * Math.pow(0.8, d) + ")"}]).toStyle();
      this.beginPath();
      for(var g = 0, m = this.pa.wb[d] - 3 * b[d];m < 480 + 3 * b[d];m += 1.5 * b[d]) {
        for(var g = 0 === g ? a[d] : 0, s = this.pa.xb[d] - 2 * a[d] + g;s < 640 + 2 * a[d];s += 2 * a[d]) {
          this.line(m, s, m + b[d], s), this.line(m, s, m - b[d] / 2, s + a[d]), this.line(m, s, m - b[d] / 2, s - a[d])
        }
      }
      this.stroke()
    }
  }});
  sa = tm.createClass({superClass:tm.app.Object2D, wb:0, xb:0, direction:0, speed:0, sa:0, ta:0, background:k, init:function() {
    this.superInit();
    this.wb = [];
    this.xb = [];
    for(var a = 0;3 > a;a++) {
      this.wb[a] = 240, this.xb[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.ta = this.sa = 0
  }})
})();
ta = tm.createClass({superClass:tm.display.Sprite, pg:l, ca:k, da:k, Ub:l, yc:l, qf:l, sa:0, ta:0, init:function(b) {
  this.superInit("star", 20, 20);
  (this.pg = b) && this.setScale(2, 2);
  this.ca = F.we;
  this.da = this.ca.da;
  this.addChildTo(this.ca);
  b = 0.5 * w.random() * Math.PI - 0.75 * Math.PI;
  this.sa = 30 * Math.cos(b);
  this.ta = 30 * Math.sin(b)
}, update:function() {
  this.da.mb && (this.yc = j);
  if(this.da.parent === k) {
    this.yc = l
  }else {
    if(100 > Ia(this, this.da)) {
      this.ca.Hi(this);
      this.remove();
      return
    }
    1E4 > Ia(this, this.da) && (this.yc = j);
    if(this.qf && this.yc) {
      var b = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 10 * Math.cos(b);
      this.y += 10 * Math.sin(b)
    }else {
      this.qf || (this.x += this.sa, this.y += this.ta, this.sa *= 0.8, this.ta *= 0.8, -1 < this.sa && (1 > this.sa && -1 < this.ta && 1 > this.ta) && (this.qf = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
ua = tm.createClass({superClass:ta, Ub:l, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
va = tm.createClass({superClass:ta, Ub:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.yc || (this.x += this.ca.la.sa, this.y += this.ca.la.ta);
  this.superClass.prototype.update.call(this)
}});
wa = tm.createClass({da:k, ca:k, ba:k, frame:0, init:function(b) {
  this.ca = b;
  this.da = b.da;
  this.pf();
  this.ba = xa();
  this.frame = 0
}, pf:n(), update:function() {
  this.ji(this.frame);
  this.frame += 1
}, ji:function(b) {
  b = this.ba.get(b);
  if(b !== k) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(za[b.value] !== i) {
        var a = za[b.value];
        if(a !== k) {
          if(a[0].Rb === j) {
            this.tg(a[0])
          }else {
            for(var d = 0;d < a.length;d++) {
              var f = this.tg(a[d]);
              b.stop && f.addEventListener("enemyconsumed", function() {
                this.ba.sf = l
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, tg:function(b) {
  this.ca.Qd += 1;
  b = b.$(this.ca, b.aa).setPosition(b.x, b.y).addChildTo(this.ca).Ii();
  b.fe = this;
  return b
}, Sf:function(b) {
  Aa();
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
  a.addChildTo(this.ca.Oe);
  K("warning");
  K("voWarning")
}});
wa.create = function(b, a) {
  switch(a) {
    case 0:
      return Ba(b);
    case 1:
      return Ca(b);
    case 2:
      return gls2.Mh(b);
    case 3:
      return gls2.Mh(b);
    default:
      h(Error("stageNumber = " + a))
  }
};
xa = tm.createClass({index:0, data:k, sf:l, init:function() {
  this.data = {}
}, add:function(b, a, d) {
  this.index += b;
  this.data[this.index] = {stop:d, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? k : b.stop === j ? (this.sf = j, b) : this.sf ? k : b
}});
Ba = tm.createClass({superClass:wa, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    Da("bgm1", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 8;
    this.ca.la.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.ba.add(100, "komachi-0");
  this.ba.add(160, "komachi-1");
  this.ba.add(600, function() {
    this.Sf(function() {
      Da("bgmBoss", j)
    })
  });
  this.ba.add(600, "misumi")
}, pf:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
Ca = tm.createClass({superClass:wa, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    Da("bgm2", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 0.3
  });
  this.ba.add(200, "tank25-top");
  this.ba.add(160, "heri1-left");
  this.ba.add(100, "heri1-right");
  this.ba.add(190, "komachi2-0");
  this.ba.add(10, "itsuki-1");
  this.ba.add(400, "tank15-top");
  this.ba.add(1, function() {
    this.ca.la.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.ca.la.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.ba.add(400, function() {
    this.ca.la.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.ba.add(430, function() {
    this.ca.la.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.ba.add(1, "mai", j);
  this.ba.add(300, "heri2-left");
  for(b = 0;24 > b;b++) {
    this.ba.add(15, "heri2-center"), this.ba.add(15, "heri2-right"), this.ba.add(15, "heri2-center"), this.ba.add(15, "heri2-left")
  }
  this.ba.add(1, function() {
    this.ca.la.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
    this.Sf(function() {
      Da("bgmBoss", j)
    })
  });
  this.ba.add(300, function() {
    this.ca.la.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.ba.add(300, "hyuga")
}, pf:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
function Ma(b, a) {
  if(b.parent === k || a.parent === k) {
    return l
  }
  var d = b.x + b.boundingWidthRight, f = b.y - b.boundingHeightTop, g = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, s = a.y - a.boundingHeightTop, C = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && d > m && f < C && g > s
}
;var W = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, dj:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.Lc(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
var Na = tm.createClass({superClass:W, titleText:k, menu:k, descriptions:k, showExit:l, title:k, selections:[], description:k, box:k, cursor:k, df:k, _selected:0, _opened:l, _finished:l, init:function(b, a, d) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~d.defaultValue;
  this.showExit = d.showExit;
  this.descriptions = d.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.df = d.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.df !== k && this.parent.df(this.s))
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
}, Lc:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function X(b, a, d, f, g) {
  g = {}.$extend({menuDescriptions:[].concat(d), showExit:j, defaultValue:0, onCursorMove:n()}, g);
  b.dj(Na(a, d, g), f)
}
;J = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, He:0.85, size:0, image:k, eb:j, init:function(b, a, d, f) {
  this.superInit();
  this.width = this.height = this.size = b;
  a !== i && (this.alpha = a);
  d !== i && (this.He = d);
  this.blendMode = "lighter";
  this.image = f ? f : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.He;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return J(this.size, this.xj, this.He, this.image)
}});
ha = tm.createClass({superClass:J, la:k, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.la = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.la.sa;
  this.y += this.la.ta + 0.3
}, clone:function(b) {
  return ha(this.la, b)
}});
var La = tm.createClass({width:0, label:k, Xa:k, ha:0, zg:0, mf:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Xa = [];
  this.zg = 480 - this.width - 5;
  this.mf = 5
}, $h:function(b, a) {
  a === j && (this.Xa.clear(), this.Xa.push(""));
  5 < this.Xa.length && this.Xa.splice(1, this.Xa.length - 4);
  this.Xa.push(b);
  return this
}, ci:function() {
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
  b.translate(this.zg, this.mf);
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
var Ka = function(b) {
  function a(a) {
    if(1 > a) {
      return k
    }
    var f = [], g = Math.random(), m, s;
    for(s = 0;s < b;s += ~~a) {
      m = Math.random();
      for(var p = 0;p < a;p++) {
        f[s + p] = d(g, m, p / a)
      }
      g = m
    }
    g = f[b - ~~a];
    m = f[0];
    for(p = 0;p < a;p++) {
      f[b - ~~a + p] = d(g, m, p / a)
    }
    return f
  }
  function d(a, b, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return a * (1 - d) + b * d
  }
  for(var f = [], g = 0, m = Math.pow(2, 4);8 > g;g++, m *= 2) {
    var s = a(b / m);
    if(s === k) {
      break
    }
    f.push(s)
  }
  s = [].concat(f[0]);
  g = 1;
  for(m = 0.5;g < f.length;g++, m *= 0.5) {
    for(var C = 0;C < b;C++) {
      s[C] += f[g][C] * m
    }
  }
  for(g = 0;g < s.length;g++) {
    s[g] /= 2
  }
  return s
}(512);
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
Da = function(b, a) {
  a || Ea();
  var d = tm.asset.AssetManager.get(b);
  d && (L = d.clone(), L.volume = 0.1 * u.Zc, L.loop = j, L.play())
};
Ea = function() {
  L !== k && L.stop()
};
Aa = function() {
  if(L !== k) {
    var b = L;
    b.loop = l;
    var a = function() {
      b.volume -= 0.0010;
      0 >= b.volume ? b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
K = function(b) {
  if(0 !== u.Ac && K.played[b] !== u.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * u.Ac, K.vf !== k && K.vf.stop(), K.vf = a) : a.volume = 0.1 * u.Ac);
    K.played[b] = u.frame
  }
};
K.played = {};
K.vf = k;
(function() {
  var b = k, a = k;
  ca = tm.createClass({superClass:W, result:k, ha:0, ld:[], Td:l, lg:k, rg:0, Zd:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.lg = tm.display.Label().setPosition(240, 256).addChildTo(this);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Td = l;
      for(var a = ("" + Math.floor(u.Wd)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.lg.text = "HIGH SCORE: " + b.trim()
    })
  }, Lc:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.Of(80 * Math.cos(0.01 * this.ha) + 240, 80 * Math.sin(0.01 * this.ha) + 320, 0);
    this.Of(80 * Math.cos(0.01 * this.ha + Math.PI) + 240, 80 * Math.sin(0.01 * this.ha + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Td && this.yg();
    this.ha += 1
  }, Of:function(d, f, g) {
    if(!this.Td) {
      b === k && (b = J(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === k && (a = J(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      g.speed = 0.6;
      var m = T(0, 2 * Math.PI), s = U(0, 20);
      g.setPosition(Math.cos(m) * s + d, Math.sin(m) * s + f);
      var C = this;
      g.update = function() {
        this.x += Math.cos(m) * this.speed;
        this.y += Math.sin(m) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = C.ld.indexOf(this);
          -1 !== a && C.ld.splice(a, 1)
        }
      };
      this.ld.push(g)
    }
  }, yg:function() {
    X(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.Oi, {defaultValue:this.rg, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, Oi:function(a) {
    4 !== a && (this.rg = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Td = j;
          for(var a = 0, b = this.ld.length;a < b;a++) {
            this.ld[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          u.replaceScene(Fa())
        }.bind(this));
        break;
      case 2:
        this.ec();
        break;
      case 3:
        u.ki()
    }
  }, ec:function() {
    X(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.hf, {defaultValue:this.Zd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, hf:function(a) {
    3 !== a && (this.Zd = a);
    switch(a) {
      case 0:
        this.jf();
        break;
      case 1:
        this.kf();
        break;
      case 2:
        this.Vi();
        break;
      default:
        this.yg()
    }
  }, jf:function() {
    X(this, "BGM VOLUME", "012345".split(""), this.ff, {defaultValue:u.Zc, onCursorMove:function(a) {
      L !== k && "exit" !== a && (L.volume = 0.1 * a)
    }, showExit:l})
  }, ff:function(a) {
    6 !== a && (u.Zc = a);
    this.ec()
  }, kf:function() {
    X(this, "SE VOLUME", "012345".split(""), this.gf, {defaultValue:u.Ac, showExit:l})
  }, gf:function(a) {
    6 !== a && (u.Ac = a);
    this.ec()
  }, Vi:function() {
    X(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.Ni, {defaultValue:u.eg, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, Ni:function(a) {
    5 !== a && (u.eg = a);
    this.ec()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  Fa = tm.createClass({superClass:W, mode:0, types:k, ie:k, qb:k, rb:k, sb:k, Ze:k, Xe:k, type:0, style:0, $b:l, $d:l, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Zi();
    this.ie = this.Yi();
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
    this.ie.visible = l;
    this.cf(-1, j);
    this.qb.update();
    this.rb.update();
    this.sb.update();
    K("voSelectShip")
  }, Zi:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Ze = tm.display.Label("Type-A").setPosition(240, 150);
    this.Ze.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.$e = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.$e.update = function() {
      this.$e.text = b[this.type]
    }.bind(this);
    this.$e.addChildTo(a);
    var f = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.qb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.rb = tm.display.AnimationSprite(f, 64, 64).gotoAndPlay("typeB");
    this.sb = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.qb.Ia = 0;
    this.rb.Ia = 1;
    this.sb.Ia = 2;
    this.qb.setScale(3).setPosition(0, 320).addChildTo(a);
    this.rb.setPosition(0, 320).addChildTo(a);
    this.sb.setPosition(0, 320).addChildTo(a);
    this.qb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ia / 3 * Math.PI)
    };
    this.rb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ia / 3 * Math.PI)
    };
    this.sb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ia / 3 * Math.PI)
    };
    return a
  }, Yi:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Xe = tm.display.Label("Shot Style").setPosition(240, 150);
    this.Xe.addChildTo(a);
    this.hc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Qb = tm.app.Object2D();
    this.Qb.addChildTo(this.hc);
    this.Qb.update = function(a) {
      this.Qb.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.ka = [];
    this.ka[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ka[0].update = function() {
      0 === this.type ? this.ka[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.ka[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.ka[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.ka[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ka[1].update = function() {
      0 === this.type ? this.ka[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.ka[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.ka[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.ka[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ka[2].update = function() {
      0 === this.type ? this.ka[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.ka[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.ka[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.ka[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ka[3].update = function() {
      0 === this.type ? this.ka[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.ka[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.ka[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.hc.line = b(0, 0, 0, 130, 8);
    this.hc.line.addChildTo(this.hc);
    this.ka.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Qb)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.Ye = tm.display.Label(d[0], 16).setPosition(240, 500);
    this.Ye.update = function() {
      this.Ye.text = d[this.style]
    }.bind(this);
    this.Ye.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.ie.visible = l, !this.$d && a.keyboard.getKeyDown("left")) {
        this.cf(-1, l), K("select")
      }else {
        if(!this.$d && a.keyboard.getKeyDown("right")) {
          this.cf(1, l), K("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, K("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.ie.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, K("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, K("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (v.xf ? this.Si() : (this.$b = j, this.xg()), K("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.ej(0 === ~~(a.frame / 60) % 2))
    }
  }, Si:function() {
    X(this, "AUTO BOMB", ["on", "off"], this.Ji, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, Ji:function(a) {
    2 !== a && (this.$b = 0 === a, this.xg())
  }, xg:function() {
    X(this, "ARE YOU READY?", ["ok"], this.Ki, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, Ki:function(a) {
    0 === a && this.aj()
  }, cf:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.qb, this.rb, this.sb][this.type].remove().addChildTo(this.types);
    b ? (this.qb.Ia -= a, this.qb.scaleX = 0 === this.type ? 5 : 1, this.qb.scaleY = 0 === this.type ? 5 : 1, this.rb.Ia -= a, this.rb.scaleX = 1 === this.type ? 5 : 1, this.rb.scaleY = 1 === this.type ? 5 : 1, this.sb.Ia -= a, this.sb.scaleX = 2 === this.type ? 5 : 1, this.sb.scaleY = 2 === this.type ? 5 : 1) : (this.$d = j, this.qb.tweener.clear().to({Ia:this.qb.Ia - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.rb.tweener.clear().to({Ia:this.rb.Ia - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.sb.tweener.clear().to({Ia:this.sb.Ia - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.$d = l
    }.bind(this)));
    this.Ze.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, aj:function() {
    u.ca.$b = this.$b;
    u.ca.start(this.type, this.style);
    u.replaceScene(u.ca)
  }, ej:function(a) {
    this.Xe.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.hc.line.yb = l, this.ka[0].line.yb = l, this.ka[1].line.yb = l, this.ka[2].line.yb = l, this.ka[3].line.yb = l) : (this.hc.line.yb = j, this.ka[0].line.yb = j, this.ka[1].line.yb = j, this.ka[2].line.yb = j, this.ka[3].line.yb = j);
    a ? (this.ka[0].visible = j, this.ka[1].visible = j, 1 === this.style ? (this.ka[2].visible = l, this.ka[3].visible = l) : (this.ka[2].visible = j, this.ka[3].visible = j), this.hc.line.lineWidth = 5) : (this.ka.each(function(a) {
      a.visible = l
    }), this.hc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, Lc:n()});
  var b = tm.createClass({superClass:tm.display.CanvasElement, yb:j, init:function(a, b, f, g, m) {
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
    if(this.yb && 5 === this.lineWidth) {
      var b = 5 * Math.cos(this.angle - Math.PI / 2), f = 5 * Math.sin(this.angle - Math.PI / 2);
      a.drawArrow(this.x - b, this.y - f, Math.cos(this.angle) * this.length * this.i + this.x - b, Math.sin(this.angle) * this.length * this.i + this.y - f, 1.2 * this.lineWidth);
      a.drawArrow(this.x + b, this.y + f, Math.cos(this.angle) * this.length * this.i + this.x + b, Math.sin(this.angle) * this.length * this.i + this.y + f, 1.2 * this.lineWidth)
    }else {
      a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
F = tm.createClass({superClass:W, da:k, score:0, La:0, za:0, jd:0, Ga:0, ac:0, Eg:0, fe:k, la:k, lc:3, ge:0, he:0, Lb:0, Qd:0, kd:0, bf:0, $b:l, cb:0, vc:0, Vf:0, Oc:l, Ue:l, Kb:0, $a:0, ua:l, fd:0, Nc:0, ya:0, Od:0, wj:0, vj:0, Vd:k, hg:k, lf:k, fg:k, Ne:k, Oe:k, Je:k, Fi:k, nb:k, gb:k, Rb:k, cd:l, Ei:l, init:function() {
  F.we !== k && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  F.we = this;
  this.gb = pa(this);
  this.gb.Ta.addChildTo(this);
  this.la = ra().pa;
  this.la.addChildTo(this);
  this.Vd = F.Yb().addChildTo(this);
  this.hg = F.Yb().addChildTo(this);
  this.fg = F.Yb().addChildTo(this);
  this.Ne = F.Yb().addChildTo(this);
  this.lf = F.Yb().addChildTo(this);
  this.Oe = F.Yb().addChildTo(this);
  this.Je = F.Yb().addChildTo(this);
  this.Fi = F.Gf(this).addChildTo(this);
  tm.Ya.mc.bd.Rf = this;
  this.nb = tm.app.Object2D();
  this.nb.addChildTo(this);
  this.nb.update = function(b) {
    this.Qi(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.gb.clear()
  })
}, addChild:function(b) {
  b.eb ? this.Ne.addChild(b) : b instanceof M ? this.Je.addChild(b) : b instanceof ta ? this.Vd.addChild(b) : b instanceof N ? b.Ub ? this.Vd.addChild(b) : this.fg.addChild(b) : b instanceof da ? this.lf.addChild(b) : b === this.nb || b === this.la || b instanceof F.Yb || b instanceof F.Gf || b instanceof qa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(b)))
}, update:function(b) {
  this.Wi(b.keyboard);
  this.fe.update(b.frame);
  0 === b.frame % 2 && this.gb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(ca()), Ea()) : b.keyboard.getKeyDown("space") ? this.ae(0) : b.keyboard.getKeyDown("p") && (this.Dg().saveAsImage(), this.ae(0))
}, Dg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.la.la.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.gb.element, 0, 0);
  return b
}, Qi:function() {
  this.da.Sb === l && z.erase();
  var b;
  b = [].concat(N.Qa);
  for(var a = [].concat(G.Qa), d = a.length;a[--d] !== i;) {
    for(var f = b.length;b[--f] !== i;) {
      var g = b[f], m = a[d];
      if(!(0 >= g.na) && Ma(g, m) && (m.Ud(1), m.remove(), g.Tb(m.sc))) {
        this.Lb += 1;
        this.ua ? this.Wa(v.mh) : this.Wa(v.lh);
        this.ef(g);
        break
      }
    }
  }
  m = this.da.Vb;
  if(this.da.mb) {
    b = [].concat(N.Qa);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(f = b.length;b[--f] !== i;) {
      if(g = b[f], !(0 >= g.na) && Ma(g, m)) {
        m.Xi(g.y + g.boundingHeightBottom);
        g.Tb(m.sc) ? (this.Lb += 1, this.ua ? this.Wa(v.kh) : this.Wa(v.hh), this.ef(g)) : (this.ua ? this.Gc(0.01 * this.ya) : this.Gc(0.01), this.Ga = Math.min(this.Ga + 0.02, 1), this.ua ? this.Wa(v.jh) : this.Wa(v.ih));
        m.Ud(2);
        break
      }
    }
    a = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(N.Qa);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.na) && Ma(g, a) && (g.Tb(m.sc) ? (this.Lb += 1, this.ua ? this.Wa(v.gh) : this.Wa(v.dh), this.ef(g)) : (this.ua ? this.Gc(0.01 * this.ya) : this.Gc(0.01), this.Ga = Math.min(this.Ga + 0.02, 1), this.ua ? this.Wa(v.fh) : this.Wa(v.eh)), m.wi(2, this.da.x, this.da.y - 30))
    }
  }
  if(this.Oc) {
    z.erase();
    b = [].concat(N.Qa);
    for(f = b.length;b[--f] !== i;) {
      g = b[f], !(0 >= g.na) && (g.gd() && g.Tb(v.Lg)) && (this.rc(g.score), this.Lb += 1)
    }
    this.Ga = this.za = 0
  }
  if(this.ua) {
    f = [].concat(G.Qa);
    for(g = f.length;f[--g] !== i;) {
      if(m = f[g], !(0 >= m.na)) {
        a = [].concat(M.Qa);
        for(b = a.length;a[--b] !== i;) {
          d = a[b], d.visible !== l && (0 < m.na && Ma(m, d)) && (d.na -= 6 - this.$a, 0 > d.na && (d.Da(), this.rc(v.Pg), this.Gc(v.Ng), this.kg(l, l, d.x, d.y, 1)), m.na -= 1)
        }
      }
    }
  }
  if(this.cd) {
    z.erase()
  }else {
    if(this.da.parent !== k && this.da.Qc === l && this.Oc === l && 0 >= this.fd && !v.xh) {
      for(f = M.Qa.length;M.Qa[--f] !== i;) {
        if(b = M.Qa[f], b.visible !== l && Ma(b, this.da)) {
          this.da.Tb();
          0 < this.cb && this.$b ? (this.$a = S(this.$a - 1, 0, 1), this.Jd(-0.01), ma(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.vg();
          break
        }
      }
      for(f = N.Qa.length;N.Qa[--f] !== i;) {
        if(g = N.Qa[f], !(0 >= g.na) && !g.Ub && Ma(g, this.da)) {
          this.da.Tb();
          0 < this.cb && this.$b ? (this.$a = S(this.$a - 1, 0, 1), this.Jd(-0.01), ma(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.vg();
          break
        }
      }
    }
    this.ua && (this.Nc -= 1, 0 >= this.Nc && this.Pd());
    this.fd = Math.max(this.fd - 1, 0);
    this.Ga -= v.Tg * v.Ug;
    0 >= this.Ga && (this.Ga = 0, this.ua || 0 < this.ya ? this.ac = this.za = this.La = 0 : (0 < this.za && (0 >= this.ac && (this.ac = this.za * v.Sg), this.La = this.La * (this.za - this.ac) / this.za, this.za -= this.ac), 0 >= this.za && (this.ac = this.za = this.La = 0)))
  }
}, ef:function(b) {
  this.kg(b.Ub, this.ua || Ia(b, this.da) < v.Vg, b.x, b.y, b.star, b instanceof Ga);
  this.Gc(v.sh[this.Od]);
  for(var a = this.La, d = ~~(this.za / v.Bf) + 1, f = 0;f < d;f++) {
    a += b.score, this.rc(a)
  }
  this.La += b.score * d
}, kg:function(b, a, d, f, g, m) {
  b = b ? va : ua;
  for(var s = 0;s < g;s++) {
    var C = b(a);
    C.setPosition(d, f);
    m && (C.yc = j)
  }
}, Hi:function(b) {
  K("star");
  b.pg ? (this.he += 1, this.La += v.Gh, this.rc(v.Kh + this.La * v.Ih), this.ua ? this.Wa(v.qh) : this.Wa(v.ph)) : (this.ge += 1, this.La += v.Fh, this.rc(v.Jh + this.La * v.Hh), this.ua ? this.Wa(v.oh) : this.Wa(v.nh))
}, start:function(b, a) {
  this.gb.Ic.ci().clear();
  this.score = 0;
  this.lc = v.Ef;
  this.cb = this.vc = v.Df[a];
  this.Vf = v.Mg[a];
  this.ya = this.$a = this.Kb = 0;
  q.xa.Ra.$rank = v.uh;
  this.Pd();
  this.Oc = l;
  this.kd = this.bf = 0;
  this.da = da(this, b, a);
  this.Fg(0);
  K("voLetsGo");
  this.cj()
}, Fg:function(b) {
  this.Sa("3...2...1...");
  this.da.parent !== k && this.da.remove();
  N.$c();
  G.$c();
  z.$c();
  this.Vd.removeChildren();
  this.Ne.removeChildren();
  this.Oe.removeChildren();
  this.lf.removeChildren();
  this.Je.removeChildren();
  this.nb.removeChildren();
  this.Lb = this.Qd = this.he = this.ge = this.jd = this.Ga = this.za = this.La = 0;
  this.Rb = k;
  this.Ei = this.cd = l;
  this.kd = 0;
  this.gb.Ta.dd = 0;
  this.$a = this.gb.Ta.Ib = 0;
  this.Eg = b;
  this.fe = wa.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.af()
  }.bind(this));
  this.la.tweener.clear()
}, af:function() {
  this.Sa("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Vb.addChildTo(this);
  this.da.Sb = l;
  this.da.Qc = j;
  this.da.Mc = l;
  this.da.mb = l;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Yc = this.Sb = j
  }.bind(this.da)).wait(v.wh).call(function() {
    this.Qc = l
  }.bind(this.da))
}, vg:function() {
  B.Rd(this.da.x, this.da.y, this);
  this.Sa("I was shot down.");
  this.da.Sb = l;
  this.da.remove();
  this.lc -= 1;
  this.ya = this.ac = this.za = this.Ga = 0;
  this.kd += 1;
  this.bf += 1;
  this.$a = S(this.$a - 3, 0, 1);
  this.Jd(-0.03);
  0 < this.lc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.$b || !v.xf) {
      this.vc = Math.min(this.vc + 1, this.Vf)
    }
    this.cb = this.vc;
    this.af()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.Ui()
  }.bind(this))
}, Jd:function(b) {
  q.xa.Ra.$rank = S(q.xa.Ra.$rank + b, 0, 0.5)
}, ti:function() {
  this.Sa("System rebooted.", j);
  this.score = 0;
  this.lc = v.Ef;
  this.cb = this.vc = v.Df[this.da.style];
  this.$a = 0;
  q.xa.Ra.$rank = 0;
  this.af()
}, di:function() {
  Da("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.nb);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(Ha(this, this.Dg()));
    b.remove()
  }.bind(this))
}, vi:function() {
  Ea();
  this.app.replaceScene(Oa())
}, rj:n(), rc:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < v.Cf.length;b++) {
    var d = v.Cf[b];
    a < d && d <= this.score && this.ni()
  }
  u.Wd = Math.max(u.Wd, this.score)
}, Gc:function(b) {
  this.ac = 0;
  this.za += b;
  this.jd = Math.max(this.jd, this.za);
  1 <= b && (this.Ga = 1)
}, Wa:function(b) {
  if(this.ya !== v.ne) {
    for(b *= v.rh;1 < b;) {
      oa(this.da).addChildTo(this), b -= 1, this.Kb = 0, this.ya += 1, 1 === this.ya ? (this.Sa("HYPER SYSTEM, stand by.", j), K("voHyperStandBy")) : (this.Sa("HYPER SYSTEM, ready.", j), K("voHyperReady"))
    }
    this.Kb = S(this.Kb + b, 0, 1);
    1 <= this.Kb && (oa(this.da).addChildTo(this), this.ya += 1, this.Kb -= 1, 1 === this.ya ? (this.Sa("HYPER SYSTEM, stand by.", j), K("voHyperStandBy")) : (this.Sa("HYPER SYSTEM, ready.", j), K("voHyperReady")))
  }
}, bj:function() {
  0.5 > Math.random() ? (this.Sa("HYPER SYSTEM start!!", j), K("voHyperStart0")) : (this.Sa("start counting to system limit.", j), K("voHyperStart1"));
  this.$a = S(this.$a + 1, 0, 5);
  this.Jd(0.01 * this.ya);
  q.xa.Ra.$hyperOff = v.Yg;
  this.Nc = v.yd;
  this.fd = v.yd * v.bh;
  this.da.Xd.Sc(this.ya);
  this.da.Vb.Sc(this.ya);
  this.da.Jc = this.da.Xd;
  B.xi(this.da.x, this.da.y, this);
  this.ua = j;
  this.Od = this.ya;
  this.Kb = this.ya = 0;
  z.erase(j, j)
}, Pd:function() {
  this.ua !== l && (this.ua = l, oa(this.da, j).addChildTo(this), this.da.Jc = this.da.wg, q.xa.Ra.$hyperOff = 1, this.da.Xd.Sc(0), this.da.Vb.Sc(0), this.fd = v.yd * v.ah, this.Od = this.Nc = 0, z.erase())
}, lj:function() {
  K("decision");
  K("voGetBomb");
  this.cb = Math.min(this.cb + 1, this.vc);
  this.Ue = this.cb === this.vc
}, ni:function() {
  K("voExtend");
  this.Sa("extended.");
  this.lc += 1
}, Sa:function(b, a) {
  this.gb.Ic.$h(b, a)
}, ae:function(b) {
  X(this, "PAUSE", ["resume", "setting", "exit game"], this.Pi, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:l})
}, Pi:function(b) {
  switch(b) {
    case 1:
      this.ec();
      break;
    case 2:
      this.Ti()
  }
}, ec:function() {
  X(this, "SETTING", ["bgm volume", "sound volume"], this.hf, {defaultValue:this.Zd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, hf:function(b) {
  3 !== b && (this.Zd = b);
  switch(b) {
    case 0:
      this.jf();
      break;
    case 1:
      this.kf();
      break;
    default:
      this.ae()
  }
}, Ti:function() {
  X(this, "REARY?", ["yes", "no"], this.Li, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:l})
}, Li:function(b) {
  0 === b ? (Ea(), this.app.replaceScene(ca())) : this.ae(1)
}, jf:function() {
  X(this, "BGM VOLUME", "012345".split(""), this.ff, {defaultValue:u.Zc, onCursorMove:function(b) {
    L !== k && 6 !== b && (L.volume = 0.1 * b)
  }, showExit:l})
}, ff:function(b) {
  6 !== b && (u.Zc = b);
  this.ec(1)
}, kf:function() {
  X(this, "SE VOLUME", "012345".split(""), this.gf, {defaultValue:u.Ac, showExit:l})
}, gf:function(b) {
  6 !== b && (u.Ac = b);
  this.ec(1)
}, Ui:function() {
  X(this, "CONTINUE?", ["yes", "no"], this.Mi, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:l})
}, Mi:function(b) {
  switch(b) {
    case 0:
      this.ti();
      break;
    case 1:
      this.vi()
  }
}, Lc:n(), $i:function() {
  this.gb.Ta.tweener.clear().to({dd:-480}, 1600, "easeInQuad").to({Ib:30}, 800, "easeInOutQuad")
}, zi:function() {
  this.gb.Ta.tweener.clear().to({Ib:0}, 800, "easeInOutQuad").to({dd:0}, 1600, "easeOutQuad")
}, nd:k, od:0, hd:k, Ad:0, cj:function() {
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
}, Wi:function(b) {
  if(1 === this.Ad) {
    1E3 < this.nd.length && (console.log("save"), localStorage.setItem("rec" + this.od, this.nd), localStorage.setItem("recCount", this.od), this.nd = [], this.od += 1), this.nd.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Ad && this.hd) {
      var a = this.hd.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : l
      })
    }
  }
}});
F.Yb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
F.Gf = tm.createClass({superClass:tm.display.CanvasElement, ca:k, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.gi(b);
  this.hi(b)
}, gi:function(b) {
  if(0 < this.ca.Ga) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.Ga) + "," + ~~Math.min(255, 512 * this.ca.Ga) + ",0.5)";
    var a = 500 * this.ca.Ga;
    b.fillRect(465, 635 - a, 10, a)
  }
}, hi:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.ya === v.ne ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.Kb && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.Kb, 9))
}});
F.we = k;
Ha = tm.createClass({superClass:W, ca:k, Bg:k, nb:k, values:k, labels:k, Yd:k, Ag:[v.Dh, v.Eh, v.Ah, v.Bh, 1], og:k, nf:k, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ca.ge, this.ca.he, ~~(100 * (this.ca.Lb / this.ca.Qd)), this.ca.jd, 0 === this.ca.kd ? v.Ch : 0];
  this.Yd = this.values.map(function(a) {
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
  this.og = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.nf = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.nf.visible = l;
  this.Bg = a;
  for(var f = [], d = 0;12 > d;d++) {
    f[d] = [];
    for(var g = 0;16 > g;g++) {
      f[d][g] = {of:0, de:0, wf:T(-2, 2), rd:T(1, 4)}
    }
  }
  this.nb = tm.app.Object2D();
  this.nb.draw = function(a) {
    a.save();
    for(var b = j, d = 0;d < f.length;d++) {
      for(var g = 0;g < f[d].length;g++) {
        var t = f[d][g];
        640 > 40 * g + t.de && (a.drawImage(this.Bg.element, 40 * d, 40 * g, 40, 40, 40 * d + t.of, 40 * g + t.de, 40, 40), t.of += t.wf, t.de += t.rd, t.rd += 0.3, b = l)
      }
    }
    this.wait = 60;
    b && this.nb.remove();
    a.restore()
  }.bind(this);
  this.nb.addChildTo(this);
  this.addEventListener("exit", function() {
    Aa()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      K("star"), this.values[a] <= this.Yd[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.rc(this.values[a] * this.Ag[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.rc(this.Yd[a] * this.Ag[a]), this.values[a] -= this.Yd[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.og.text = Math.floor(this.ca.score)
    }else {
      if(this.nf.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        K("decision"), this.ca.Fg(this.ca.Eg + 1), b.popScene()
      }
    }
    this.frame += 1
  }
}, Lc:n()});
var Oa = tm.createClass({superClass:W, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(ca())
    }.bind(this))
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c")) && b.replaceScene(ca())
}, Lc:function(b) {
  b.clearColor("black")
}});
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:n()});
(function() {
  N = tm.createClass({superClass:tm.display.CanvasElement, name:k, da:k, ca:k, fe:k, na:0, dc:0, score:0, Ub:l, erase:l, star:1, Di:l, cc:j, vb:l, frame:0, je:k, direction:0, speed:0, ja:k, init:function(a, d, f) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.vb = l;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.cc = j;
    this.ca = a;
    this.da = a.da;
    this.score = 100;
    this.erase = l;
    this.Zh(f);
    d.setup(this);
    this.altitude = this.Ub ? 1 : 10;
    this.je = {x:0, y:0}
  }, Ii:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, zj:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.vb === l && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.vb = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Ub && (this.x += this.ca.la.sa, this.y += this.ca.la.ta);
    this.vb && (this.frame += 1);
    this.je.x = this.x - a;
    this.je.y = this.y - b
  }, Tb:function(a) {
    if(!this.vb) {
      return l
    }
    this.na -= a;
    if(0 >= this.na) {
      return a = T(0, 5), 2 > a ? this.ca.Sa("enemy destroy.") : 4 > a ? this.ca.Sa(this.name + " destroy.") : this.ca.Sa("ETR reaction gone."), this.erase && z.erase(j, this.ca.ua, this instanceof Ga), this.dispatchEvent(tm.event.Event("destroy")), this.Da(), j
    }
    40 > this.na && this.ab();
    return l
  }, Da:function() {
    B.Rd(this.x, this.y, this.ca, this.je);
    this.remove()
  }, gd:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Ri:function() {
    return this.cc
  }, ab:n(), Zh:function(a) {
    this.name = a;
    a = N.Wg[a];
    this.na = this.dc = a[0];
    this.score = a[1];
    this.Ub = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, Pe:function() {
    this.remove();
    this.ca.hg.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && B.Rd(this.x + U(-100, 100), this.y + U(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      B.gg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Wf:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && B.Rd(this.x + U(-100, 100), this.y + U(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      B.gg(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  N.$c = function() {
    for(var a = [].concat(b), d = 0, f = a.length;d < f;d++) {
      a[d].remove()
    }
  };
  var b = N.Qa = []
})();
Ga = tm.createClass({superClass:N, Di:j, dc:0, ee:k, init:function(b, a, d) {
  this.ee = a;
  this.superInit(b, this.ee[0], d);
  this.dc = this.na;
  this.addEventListener("added", function() {
    this.ca.Rb = this;
    this.ca.$i();
    this.tweener.wait(1E3).call(function() {
      this.ca.cd = l
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.Rb = k;
    this.ca.zi();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.di()
    }.bind(this));
    a.addChildTo(this.ca.nb)
  })
}, Tb:function(b) {
  var a = this.na;
  if(N.prototype.Tb.call(this, b)) {
    return this.ca.cd = j, this.ca.da.Yc = l, Aa(), j
  }
  this.na <= 0.55 * this.dc && 0.55 * this.dc < a ? (R.rf(this), this.clearEventListener("completeattack"), this.tweener.clear(), B.Hb(this.x, this.y, this.ca), z.erase(j, this.ca.ua), this.ee[1].setup(this)) : this.na <= 0.1 * this.dc && 0.1 * this.dc < a && (R.rf(this), this.clearEventListener("completeattack"), this.tweener.clear(), B.Hb(this.x, this.y, this.ca), z.erase(j, this.ca.ua), this.ee[2].setup(this), K("voJacms"))
}});
(function() {
  N.Wg = {kujo:[2, 300, l, l, 1, {radius:24}], kiryu:[3, 400, l, l, 1, {radius:24}], natsuki:[5, 900, j, l, 1, {radius:24}], kise:[50, 15E3, j, l, 1, {radius:24}], yamabuki:[100, 15E3, j, l, 1, {width:70, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, l, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, l, l, 5, {width:100, height:20}], kurokawa:[35, 5E3, l, l, 5, {width:100, height:20}], akimoto:[250, 3E5, l, j, 10, {width:200, 
  heightBottom:10, heightTop:60}], yukishiro:[750, 8E5, l, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, l, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, l, j, 20, {width:300, height:80}], hyuga:[6E3, 3E6, l, j, 0, {width:240, height:80}], erika:[30, 500, l, l, 1, {width:24, height:48}]};
  N.qa = tm.createClass({superClass:N, fa:k, init:function(a, d) {
    this.superInit(a, d, "kujo");
    this.fa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    N.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  N.ma = tm.createClass({superClass:N, fa:k, init:function(a, d) {
    this.superInit(a, d, "kiryu");
    this.fa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    N.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.fa.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  N.ea = tm.createClass({superClass:N, Ee:k, Fe:k, init:function(a, d) {
    this.superInit(a, d, "natsuki");
    this.Ee = b("tex_tank1", 64, 64);
    this.Fe = b("tex_tank1", 64, 64);
    this.tc = this.tc || 0;
    this.Gb = this.Gb || 0
  }, update:function(a) {
    N.prototype.update.call(this, a);
    for(a = this.tc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.Gb;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.Ee.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.Fe.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.Ee.draw(a);
    this.Fe.draw(a)
  }, Da:function() {
    B.li(this.x, this.y, this.ca);
    this.remove()
  }});
  N.zf = tm.createClass({superClass:N, fa:k, init:function(a, d) {
    this.superInit(a, d, "yamabuki");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.jc() : 5 === a.app.frame % 30 && this.fa.ic()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  N.Va = tm.createClass({superClass:N, fa:k, init:function(a, d) {
    this.superInit(a, d, "tsukikage");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.jc() : 5 === a.app.frame % 30 && this.fa.ic()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  N.nc = tm.createClass({superClass:N, fa:k, init:function(a, d) {
    this.superInit(a, d, "kurokawa");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.jc() : 5 === a.app.frame % 30 && this.fa.ic()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  N.zd = tm.createClass({superClass:N, fa:k, init:function(a, d) {
    this.superInit(a, d, "akimoto");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(1)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.jc() : 5 === a.app.frame % 30 && this.fa.ic()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    this.Pe()
  }});
  N.wa = tm.createClass({superClass:N, fa:k, init:function(a, d) {
    this.superInit(a, d, "kise");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.jc() : 5 === a.app.frame % 30 && this.fa.ic()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  N.Cd = tm.createClass({superClass:N, fa:k, init:function(a, b) {
    this.superInit(a, b, "hanasaki")
  }, ab:n(), Da:function() {
    B.Hb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.qe = tm.createClass({superClass:N, init:function(a, b) {
    this.superInit(a, b, "myodoin")
  }, ab:n(), Da:function() {
    B.Hb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.Ab = tm.createClass({superClass:N, fa:k, init:function(a, d) {
    this.superInit(a, d, "kenzaki");
    this.fa = b("tex_stage1", 128, 128).setFrameIndex(4)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.jc() : 5 === a.app.frame % 30 && this.fa.ic()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    B.Hb(this.x, this.y, this.ca);
    this.remove()
  }});
  N.Vc = tm.createClass({superClass:N, init:function(a, b) {
    this.superInit(a, b, "erika")
  }, ab:n(), draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }, Da:function() {
    B.Hb(this.x, this.y, this.ca);
    gls2.hj(this.x, this.y, this.da).addChildTo(this.parent);
    this.remove()
  }});
  N.oe = tm.createClass({superClass:N, fa:k, init:function(a, d) {
    this.superInit(a, d, "yukishiro");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.jc() : 5 === a.app.frame % 30 && this.fa.ic()
    })
  }, Da:function() {
    this.Pe()
  }, draw:function(a) {
    this.fa.draw(a)
  }});
  N.se = tm.createClass({superClass:Ga, fa:k, init:function(a, d) {
    this.superInit(a, d, "misumi");
    this.fa = b("tex_stage1", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, ab:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.fa.jc() : 5 === a.app.frame % 30 && this.fa.ic()
    })
  }, draw:function(a) {
    this.fa.draw(a)
  }, Da:function() {
    this.Wf()
  }});
  N.re = tm.createClass({superClass:N, init:function(a, b) {
    this.superInit(a, b, "mishou")
  }, ab:n(), Da:function() {
    this.Pe()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.Lh = tm.createClass({superClass:Ga, init:function(a, b) {
    this.superInit(a, b, "hyuga")
  }, ab:n(), Da:function() {
    this.Wf()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, tf:k, init:function(a, b, f) {
    this.superInit(a, b, f);
    "string" === typeof a && (this.tf = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, jc:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.tf + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }, ic:function() {
    var a = this.srcRect.x, b = this.srcRect.y, f = this.srcRect.width, g = this.srcRect.height;
    this.image = this.tf;
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = f;
    this.srcRect.height = g
  }})
})();
(function() {
  R = tm.createClass({setup:function(a) {
    a.on("destroy", function() {
      R.rf(this)
    })
  }});
  R.Ba = function(a, b) {
    var f = z[b].Nd();
    a.on("enterframe", f);
    a.on("completeattack", function() {
      f.stop = j
    })
  };
  R.rf = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].Ve && (a[b].stop = j)
      }
    }
  };
  R.tb = tm.createClass({superClass:R, init:function() {
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
  R.tb = R.tb();
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
  R.Xb = tm.createClass({superClass:R, init:function() {
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
  R.Xb = R.Xb();
  R.ma = tm.createClass({superClass:R, ce:k, init:function(a) {
    this.superInit();
    this.ce = a
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.ce = this.ce;
    a.tweener.wait(w.rand(0, 1E3)).call(function() {
      this.speed = 6;
      R.Ba(this, this.ce);
      this.on("enterframe", function() {
        this.y < this.da.y && this.vb && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = S(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.gd() && this.vb && this.remove();
        if(22500 > Ia(this, this.da) || this.y > this.da.y + 150) {
          this.cc = l
        }
      })
    }.bind(a))
  }});
  R.Ma = R.ma("basic1-0");
  R.Na = R.ma("basic1-2");
  var b = tm.createClass({superClass:R, init:function(a, b, f) {
    this.superInit();
    this.Ci = a;
    this.Bi = b;
    this.Hc = f
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.speed = this.Ci;
    a.tc = this.Bi;
    this.Hc && (a.Hc = [].concat(this.Hc));
    a.Gb = 0;
    a.on("enter", function() {
      R.Ba(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.tc) * this.speed;
      this.y += Math.sin(this.tc) * this.speed;
      this.vb && !this.gd() && this.remove();
      for(this.Gb = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.Gb;) {
        this.Gb += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.Gb;) {
        this.Gb -= 2 * Math.PI
      }
      this.cc = this.y < this.da.y && 4E4 < Ia(this, this.da);
      if(this.Hc) {
        for(var a = 0;a < this.Hc.length;a++) {
          var b = this.Hc[a];
          b.frame === this.frame && this.tweener.to({tc:b.dir !== i ? b.dir : this.tc, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  R.Cb = b(1, 0.25 * Math.PI);
  R.jj = b(1, -1.75 * Math.PI);
  R.Wc = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  R.ia = b(1.6, 0.5 * Math.PI);
  R.Db = b(1.6, -0.5 * Math.PI);
  R.Rg = tm.createClass({superClass:R, Fb:k, init:function(a) {
    this.superInit();
    this.Fb = a
  }, setup:function(a) {
    R.Ba(a, this.Fb);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  R.Af = R.Rg("bukky-4-0");
  b = tm.createClass({superClass:R, Fb:k, $f:l, init:function(a, b) {
    this.superInit();
    this.Fb = a;
    this.$f = !!b
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.Fb = this.Fb;
    a.on("enter", function() {
      R.Ba(this, this.Fb)
    });
    a.on("enterframe", function() {
      this.vb && !this.gd() && this.remove()
    });
    if(!this.$f) {
      a.on("enterframe", function() {
        this.cc = this.y < this.da.y && 4E4 < Ia(this, this.da)
      })
    }
  }});
  R.ib = b("basic3-0", l);
  R.jb = b("basic3-1", l);
  R.Bb = b("cannon2-0", j);
  R.ud = b("cannon3-0", j);
  R.le = b("cannon5-0", j);
  b = tm.createClass({superClass:R, velocityY:0, Fb:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.Fb = b
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ja = [this.Fb];
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      R.Ba(this, this.ja[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.vb && !this.gd() && this.remove();
      this.cc = this.y < this.da.y
    })
  }});
  R.oc = b(0.5, "kurokawa-1");
  R.qc = tm.createClass({superClass:R, delay:0, init:function(a) {
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
  R.pc = tm.createClass({superClass:R, delay:0, init:function(a) {
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
  R.Hf = b(0.3, "komachi-1");
  R.If = b(0.5, "komachi-2");
  R.Vc = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, setup:function(a) {
    R.Ba(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.cc = this.vb
    })
  }});
  R.Vc = R.Vc();
  b = tm.createClass({superClass:R, ja:k, init:function(a) {
    this.superInit();
    this.ja = a
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.Uc = l;
    a.xc = l;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Uc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 192 + 0.5 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Uc === l || 0 >= this.na) && 1500 < this.frame && this.xc === l) {
        this.xc = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.na) && !this.xc) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.oe = b(["honoka-1"]);
  R.se = tm.createClass({superClass:R, ja:k, init:function() {
    this.superInit();
    this.ja = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.Uc = l;
    a.xc = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Uc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.na) && !this.xc) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.yh = R.se();
  R.te = tm.createClass({superClass:R, ja:k, init:function() {
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
      if(!(0 >= this.na)) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.te = R.te();
  R.ue = tm.createClass({superClass:R, init:function() {
    this.superInit()
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.na || R.Ba(this, "nagisa-3-1")
    })
  }});
  R.ue = R.ue();
  R.re = b(["mai-1", "mai-2"]);
  R.xe = tm.createClass({superClass:R, ja:k, init:function() {
    this.superInit();
    this.ja = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    R.prototype.setup.call(this, a);
    a.ja = [].concat(this.ja);
    a.Uc = l;
    a.xc = l;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Uc = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * w.random() * Math.PI, g = w.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.na) && !this.xc) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.xe = R.xe();
  R.ye = tm.createClass({superClass:R, ja:k, init:function() {
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
      if(!(0 >= this.na)) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.ye = R.ye();
  R.ze = tm.createClass({superClass:R, ja:k, init:function() {
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
      if(!(0 >= this.na)) {
        var a = this.ja.shift();
        R.Ba(this, a);
        this.ja.push(a)
      }
    })
  }});
  R.ze = R.ze()
})();
var Z = N, $ = R;
za = {"heri1-left":[{$:Z.ma, aa:$.tb, x:48, y:-100}, {$:Z.ma, aa:$.Ea, x:96, y:-100}, {$:Z.ma, aa:$.tb, x:144, y:-100}, {$:Z.ma, aa:$.Ea, x:192, y:-100}, {$:Z.ma, aa:$.tb, x:240, y:-100}], "heri1-center":[{$:Z.ma, aa:$.tb, x:144, y:-100}, {$:Z.ma, aa:$.Ea, x:192, y:-100}, {$:Z.ma, aa:$.tb, x:240, y:-100}, {$:Z.ma, aa:$.Ea, x:288, y:-100}, {$:Z.ma, aa:$.tb, x:336, y:-100}], "heri1-right":[{$:Z.ma, aa:$.tb, x:240, y:-100}, {$:Z.ma, aa:$.Ea, x:288, y:-100}, {$:Z.ma, aa:$.tb, x:336, y:-100}, {$:Z.ma, 
aa:$.Ea, x:384, y:-100}, {$:Z.ma, aa:$.tb, x:432, y:-100}], "heri1-left2":[{$:Z.ma, aa:$.Ea, x:48, y:-100}, {$:Z.ma, aa:$.Xb, x:96, y:-100}, {$:Z.ma, aa:$.Ea, x:144, y:-100}, {$:Z.ma, aa:$.Xb, x:192, y:-100}, {$:Z.ma, aa:$.Ea, x:240, y:-100}], "heri1-center2":[{$:Z.ma, aa:$.Ea, x:144, y:-100}, {$:Z.ma, aa:$.Xb, x:192, y:-100}, {$:Z.ma, aa:$.Ea, x:240, y:-100}, {$:Z.ma, aa:$.Xb, x:288, y:-100}, {$:Z.ma, aa:$.Ea, x:336, y:-100}], "heri1-right2":[{$:Z.ma, aa:$.Ea, x:240, y:-100}, {$:Z.ma, aa:$.Xb, x:288, 
y:-100}, {$:Z.ma, aa:$.Ea, x:336, y:-100}, {$:Z.ma, aa:$.Xb, x:384, y:-100}, {$:Z.ma, aa:$.Ea, x:432, y:-100}], "heri2-left":[{$:Z.qa, aa:$.Ma, x:48, y:-100}, {$:Z.qa, aa:$.Ma, x:96, y:-100}, {$:Z.qa, aa:$.Ma, x:144, y:-100}, {$:Z.qa, aa:$.Ma, x:192, y:-100}, {$:Z.qa, aa:$.Ma, x:240, y:-100}], "heri2-center":[{$:Z.qa, aa:$.Ma, x:144, y:-100}, {$:Z.qa, aa:$.Ma, x:192, y:-100}, {$:Z.qa, aa:$.Ma, x:240, y:-100}, {$:Z.qa, aa:$.Ma, x:288, y:-100}, {$:Z.qa, aa:$.Ma, x:336, y:-100}], "heri2-right":[{$:Z.qa, 
aa:$.Ma, x:240, y:-100}, {$:Z.qa, aa:$.Ma, x:288, y:-100}, {$:Z.qa, aa:$.Ma, x:336, y:-100}, {$:Z.qa, aa:$.Ma, x:384, y:-100}, {$:Z.qa, aa:$.Ma, x:432, y:-100}], "heri2-4-left":[{$:Z.qa, aa:$.Na, x:48, y:-100}, {$:Z.qa, aa:$.Na, x:96, y:-100}, {$:Z.qa, aa:$.Na, x:144, y:-100}, {$:Z.qa, aa:$.Na, x:192, y:-100}, {$:Z.qa, aa:$.Na, x:240, y:-100}], "heri2-4-center":[{$:Z.qa, aa:$.Na, x:144, y:-100}, {$:Z.qa, aa:$.Na, x:192, y:-100}, {$:Z.qa, aa:$.Na, x:240, y:-100}, {$:Z.qa, aa:$.Na, x:288, y:-100}, 
{$:Z.qa, aa:$.Na, x:336, y:-100}], "heri2-4-right":[{$:Z.qa, aa:$.Na, x:240, y:-100}, {$:Z.qa, aa:$.Na, x:288, y:-100}, {$:Z.qa, aa:$.Na, x:336, y:-100}, {$:Z.qa, aa:$.Na, x:384, y:-100}, {$:Z.qa, aa:$.Na, x:432, y:-100}], "tankRD-left":[{$:Z.ea, aa:$.Cb, x:78, y:-50}, {$:Z.ea, aa:$.Cb, x:28, y:-100}, {$:Z.ea, aa:$.Cb, x:-22, y:-150}, {$:Z.ea, aa:$.Cb, x:-72, y:-200}, {$:Z.ea, aa:$.Cb, x:-122, y:-250}], "tankRD-center":[{$:Z.ea, aa:$.Cb, x:222, y:-50}, {$:Z.ea, aa:$.Cb, x:172, y:-100}, {$:Z.ea, aa:$.Cb, 
x:122, y:-150}, {$:Z.ea, aa:$.Cb, x:72, y:-200}, {$:Z.ea, aa:$.Cb, x:22, y:-250}], "tankL-top":[{$:Z.ea, aa:$.Wc, x:550, y:64}, {$:Z.ea, aa:$.Wc, x:620, y:64}, {$:Z.ea, aa:$.Wc, x:690, y:64}, {$:Z.ea, aa:$.Wc, x:760, y:64}, {$:Z.ea, aa:$.Wc, x:830, y:64}], "tank5-left":[{$:Z.ea, aa:$.ia, x:48, y:-70}, {$:Z.ea, aa:$.ia, x:48, y:-140}, {$:Z.ea, aa:$.ia, x:48, y:-210}, {$:Z.ea, aa:$.ia, x:48, y:-280}, {$:Z.ea, aa:$.ia, x:48, y:-350}], "tank5-center":[{$:Z.ea, aa:$.ia, x:240, y:-70}, {$:Z.ea, aa:$.ia, 
x:240, y:-140}, {$:Z.ea, aa:$.ia, x:240, y:-210}, {$:Z.ea, aa:$.ia, x:240, y:-280}, {$:Z.ea, aa:$.ia, x:240, y:-350}], "tank15-top":[{$:Z.ea, aa:$.ia, x:48, y:-70}, {$:Z.ea, aa:$.ia, x:48, y:-140}, {$:Z.ea, aa:$.ia, x:48, y:-210}, {$:Z.ea, aa:$.ia, x:48, y:-280}, {$:Z.ea, aa:$.ia, x:48, y:-350}, {$:Z.ea, aa:$.ia, x:240, y:-70}, {$:Z.ea, aa:$.ia, x:240, y:-140}, {$:Z.ea, aa:$.ia, x:240, y:-210}, {$:Z.ea, aa:$.ia, x:240, y:-280}, {$:Z.ea, aa:$.ia, x:240, y:-350}, {$:Z.ea, aa:$.ia, x:432, y:-70}, {$:Z.ea, 
aa:$.ia, x:432, y:-140}, {$:Z.ea, aa:$.ia, x:432, y:-210}, {$:Z.ea, aa:$.ia, x:432, y:-280}, {$:Z.ea, aa:$.ia, x:432, y:-350}], "tank25-top":[{$:Z.ea, aa:$.ia, x:48, y:-70}, {$:Z.ea, aa:$.ia, x:48, y:-140}, {$:Z.ea, aa:$.ia, x:48, y:-210}, {$:Z.ea, aa:$.ia, x:48, y:-280}, {$:Z.ea, aa:$.ia, x:48, y:-350}, {$:Z.ea, aa:$.ia, x:240, y:-70}, {$:Z.ea, aa:$.ia, x:240, y:-140}, {$:Z.ea, aa:$.ia, x:240, y:-210}, {$:Z.ea, aa:$.ia, x:240, y:-280}, {$:Z.ea, aa:$.ia, x:240, y:-350}, {$:Z.ea, aa:$.ia, x:432, y:-70}, 
{$:Z.ea, aa:$.ia, x:432, y:-140}, {$:Z.ea, aa:$.ia, x:432, y:-210}, {$:Z.ea, aa:$.ia, x:432, y:-280}, {$:Z.ea, aa:$.ia, x:432, y:-350}, {$:Z.ea, aa:$.Db, x:144, y:710}, {$:Z.ea, aa:$.Db, x:144, y:780}, {$:Z.ea, aa:$.Db, x:144, y:850}, {$:Z.ea, aa:$.Db, x:144, y:920}, {$:Z.ea, aa:$.Db, x:144, y:990}, {$:Z.ea, aa:$.Db, x:336, y:710}, {$:Z.ea, aa:$.Db, x:336, y:780}, {$:Z.ea, aa:$.Db, x:336, y:850}, {$:Z.ea, aa:$.Db, x:336, y:920}, {$:Z.ea, aa:$.Db, x:336, y:990}], "bukky-4-r":[{$:Z.zf, aa:$.Af, x:480, 
y:-50}], "bukky-4-l":[{$:Z.zf, aa:$.Af, x:0, y:-50}], "cannon-0":[{$:Z.wa, aa:$.ib, x:48, y:-100}], "cannon-1":[{$:Z.wa, aa:$.ib, x:96, y:-100}], "cannon-2":[{$:Z.wa, aa:$.ib, x:144, y:-100}], "cannon-3":[{$:Z.wa, aa:$.ib, x:192, y:-100}], "cannon-4":[{$:Z.wa, aa:$.ib, x:240, y:-100}], "cannon-5":[{$:Z.wa, aa:$.ib, x:288, y:-100}], "cannon-6":[{$:Z.wa, aa:$.ib, x:336, y:-100}], "cannon-7":[{$:Z.wa, aa:$.ib, x:384, y:-100}], "cannon-8":[{$:Z.wa, aa:$.ib, x:432, y:-100}], "cannon-R0":[{$:Z.wa, aa:$.ib, 
x:550, y:128}], "cannon-R1":[{$:Z.wa, aa:$.ib, x:550, y:192}], "cannon-R2":[{$:Z.wa, aa:$.ib, x:550, y:256}], "yayoi-0":[{$:Z.wa, aa:$.jb, x:48, y:-100}], "yayoi-1":[{$:Z.wa, aa:$.jb, x:96, y:-100}], "yayoi-2":[{$:Z.wa, aa:$.jb, x:144, y:-100}], "yayoi-3":[{$:Z.wa, aa:$.jb, x:192, y:-100}], "yayoi-4":[{$:Z.wa, aa:$.jb, x:240, y:-100}], "yayoi-5":[{$:Z.wa, aa:$.jb, x:288, y:-100}], "yayoi-6":[{$:Z.wa, aa:$.jb, x:336, y:-100}], "yayoi-7":[{$:Z.wa, aa:$.jb, x:384, y:-100}], "yayoi-8":[{$:Z.wa, aa:$.jb, 
x:432, y:-100}], "yayoi-R0":[{$:Z.wa, aa:$.jb, x:550, y:128}], "yayoi-R1":[{$:Z.wa, aa:$.jb, x:550, y:192}], "yayoi-R2":[{$:Z.wa, aa:$.jb, x:550, y:256}], "tsubomi-0":[{$:Z.Cd, aa:$.ud, x:96, y:-100}], "tsubomi-1":[{$:Z.Cd, aa:$.ud, x:240, y:-100}], "tsubomi-2":[{$:Z.Cd, aa:$.ud, x:384, y:-100}], "tsubomi-R0":[{$:Z.Cd, aa:$.ud, x:580, y:128}], "itsuki-0":[{$:Z.qe, aa:$.le, x:96, y:-100}], "itsuki-1":[{$:Z.qe, aa:$.le, x:240, y:-100}], "itsuki-2":[{$:Z.qe, aa:$.le, x:384, y:-100}], "makoto-0":[{$:Z.Ab, 
aa:$.Bb, x:48, y:-100}], "makoto-1":[{$:Z.Ab, aa:$.Bb, x:96, y:-100}], "makoto-2":[{$:Z.Ab, aa:$.Bb, x:144, y:-100}], "makoto-3":[{$:Z.Ab, aa:$.Bb, x:192, y:-100}], "makoto-4":[{$:Z.Ab, aa:$.Bb, x:240, y:-100}], "makoto-5":[{$:Z.Ab, aa:$.Bb, x:288, y:-100}], "makoto-6":[{$:Z.Ab, aa:$.Bb, x:336, y:-100}], "makoto-7":[{$:Z.Ab, aa:$.Bb, x:384, y:-100}], "makoto-8":[{$:Z.Ab, aa:$.Bb, x:432, y:-100}], "makoto-R0":[{$:Z.Ab, aa:$.Bb, x:580, y:128}], "fighter-m-0":[{$:Z.nc, aa:$.oc, x:96, y:-192}], "fighter-m-1":[{$:Z.nc, 
aa:$.oc, x:144, y:-192}], "fighter-m-2":[{$:Z.nc, aa:$.oc, x:192, y:-192}], "fighter-m-3":[{$:Z.nc, aa:$.oc, x:240, y:-192}], "fighter-m-4":[{$:Z.nc, aa:$.oc, x:288, y:-192}], "fighter-m-5":[{$:Z.nc, aa:$.oc, x:336, y:-192}], "fighter-m-6":[{$:Z.nc, aa:$.oc, x:384, y:-192}], "tsukikage-r":[{$:Z.Va, aa:$.qc(700), x:624, y:256}, {$:Z.Va, aa:$.qc(600), x:720, y:256}, {$:Z.Va, aa:$.qc(500), x:576, y:320}, {$:Z.Va, aa:$.qc(400), x:672, y:320}, {$:Z.Va, aa:$.qc(300), x:768, y:320}, {$:Z.Va, aa:$.qc(200), 
x:624, y:384}, {$:Z.Va, aa:$.qc(100), x:720, y:384}], "tsukikage-l":[{$:Z.Va, aa:$.pc(700), x:-144, y:384}, {$:Z.Va, aa:$.pc(600), x:-240, y:384}, {$:Z.Va, aa:$.pc(500), x:-96, y:320}, {$:Z.Va, aa:$.pc(400), x:-192, y:320}, {$:Z.Va, aa:$.pc(300), x:-288, y:320}, {$:Z.Va, aa:$.pc(200), x:-144, y:256}, {$:Z.Va, aa:$.pc(100), x:-240, y:256}], "komachi-0":[{$:Z.zd, aa:$.Hf, x:144, y:-192}], "komachi-1":[{$:Z.zd, aa:$.Hf, x:336, y:-192}], "komachi2-0":[{$:Z.zd, aa:$.If, x:144, y:-192}], "komachi2-1":[{$:Z.zd, 
aa:$.If, x:336, y:-192}], erika:[{$:Z.Vc, aa:$.Vc, x:240, y:-100}], yukishiro:[{$:Z.oe, aa:$.oe, x:240, y:-100}], misumi:[{$:Z.se, aa:[$.yh, $.te, $.ue], x:240, y:-100, Rb:j}], mai:[{$:Z.re, aa:$.re, x:780, y:128}], hyuga:[{$:Z.Lh, aa:[$.xe, $.ye, $.ze], x:240, y:-100, Rb:j}]};
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, g, m, p) {
    return c.action([c.fire(c.direction(b, "absolute"), f, g || D, m, p), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || D, m, p)])])
  }
  function d(a, b, c, d, g) {
    return function(m) {
      return f(a, b, c, m, d, g, i, i)
    }
  }
  function f(a, b, d, f, g, m, p, r) {
    return c.action([c.fire(c.direction(b), f, g || D, m, p, r), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, g || D, m, p, r)])])
  }
  function g(a) {
    return c.fire(c.direction(0), a || t, I)
  }
  function m(a) {
    return c.fire(c.direction(0), a || t, D)
  }
  function s(a) {
    return c.speed("$rank*2.0 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function C(a) {
    return c.speed("$rank*2.0 + 1.70 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function E(a) {
    return c.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function t(a) {
    return c.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return c.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function A(a) {
    return c.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function aa(a) {
    return c.speed("$rank*2.0 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function p(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function Y(a) {
    return c.va(a, {visible:l})
  }
  function H(a) {
    return c.va(a, {frame:4, Pb:j})
  }
  function ja(a) {
    return c.va(a, {frame:3})
  }
  function D(a) {
    return c.va(a, {frame:1})
  }
  function O(a) {
    return c.va(a, {frame:2})
  }
  function I(a) {
    return c.va(a, {frame:0})
  }
  function Q(a) {
    return c.va(a, {frame:3, Pb:j})
  }
  function Qa(a) {
    return c.va(a, {frame:1, Pb:j})
  }
  function V(a) {
    return c.va(a, {frame:2, Pb:j})
  }
  function P(a) {
    return c.va(a, {frame:0, Pb:j})
  }
  z = {};
  var c = q.ra;
  z["basic0-0"] = new q.ga({top:c.action([m])});
  z["basic0-1"] = new q.ga({top:c.action([b(E, -0.01, 8, d(3, -15, 15))])});
  z["basic1-0"] = new q.ga({top:c.action([c.repeat(999, [p(40), m(t)])])});
  z["basic1-1"] = new q.ga({top:c.action([c.repeat(999, [p(20), m(t)])])});
  z["basic1-2"] = new q.ga({top:c.action([p("10+$rand*20"), f(3, -10, 10, t)])});
  z["basic2-0"] = new q.ga({top:c.action([c.repeat(999, [p(50), m(t)])])});
  z["basic3-0"] = new q.ga({top:c.action([c.wait(20), c.repeat(999, [p(100), b(t, 0.1, 3, g)])])});
  z["basic3-1"] = new q.ga({top:c.action([c.wait(20), c.repeat(999, [p(40), b(t, 0.1, 3, g)])])});
  z["bukky-4-0"] = new q.ga({top0:c.action([p(30), c.repeat(999, [c.repeat(5, [f(7, -55, 55, r, P), p(7)]), p(70)])]), top1:c.action([p(50), c.repeat(999, [c.repeat(5, [f(6, -55, 55, r(2), V), p(5)]), p(90)])])});
  z["cannon2-0"] = new q.ga({top0:c.action([c.repeat(999, [p(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", r), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", r), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", r), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", r), p(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", t, I), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", t, I), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", t, I), 
  a(3, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", t, I)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), A, H), c.fire(c.direction(" 90+$loop.index*10", "absolute"), A, H), c.fire(c.direction("180+$loop.index*10", "absolute"), A, H), c.fire(c.direction("270+$loop.index*10", "absolute"), A, H), c.fire(c.direction("  0-$loop.index*10", "absolute"), A, H), c.fire(c.direction(" 90-$loop.index*10", "absolute"), A, H), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), A, H), c.fire(c.direction("270-$loop.index*10", "absolute"), A, H), p(10)])])});
  z["cannon2-1"] = new q.ga({top0:c.action([c.repeat(999, [p(20), a(6, "0-10+$loop.index*15", "0+10+$loop.index*15", r), a(6, "90-10+$loop.index*15", "90+10+$loop.index*15", r), a(6, "180-10+$loop.index*15", "180+10+$loop.index*15", r), a(6, "270-10+$loop.index*15", "270+10+$loop.index*15", r), p(20), a(7, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", t, I), a(7, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", t, I), a(7, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", t, I), 
  a(7, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", t, I)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*5", "absolute"), A, H), c.fire(c.direction(" 90+$loop.index*5", "absolute"), A, H), c.fire(c.direction("180+$loop.index*5", "absolute"), A, H), c.fire(c.direction("270+$loop.index*5", "absolute"), A, H), c.fire(c.direction("  0-$loop.index*5", "absolute"), A, H), c.fire(c.direction(" 90-$loop.index*5", "absolute"), A, H), c.fire(c.direction("180-$loop.index*5", 
  "absolute"), A, H), c.fire(c.direction("270-$loop.index*5", "absolute"), A, H), p(5)])])});
  z["cannon3-0"] = new q.ga({top0:c.action([c.repeat(999, [p(80), b(r, 0.01, 5, d(5, -30, 30, I, c.offsetX(-60))), b(r, 0.01, 5, d(5, -30, 30, I)), b(r, 0.01, 5, d(5, -30, 30, I, c.offsetX(60)))])])});
  z["cannon4-0"] = new q.ga({top0:c.action([p(20), c.repeat(999, [c.fire(r, V), c.repeat(8, [p(10), c.kb("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), r, V), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), r, V)])]), p(120)])])});
  z["cannon5-0"] = new q.ga({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), s, Y(c.Pa("b"))), c.repeat(11, [p(5), c.fire(c.direction(10, "sequence"), s, Y(c.Pa("b")))]), p(60)])]), b:c.action([c.wait(5), c.Ld(c.speed(0), 0), b(r, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, D)
  }), c.zb])});
  z["yuri-4"] = new q.ga({top:c.action([p(60), c.repeat(7, [a(7, 120, 240, A, I), p(8)])])});
  z["kurokawa-1"] = new q.ga({top0:c.action([c.repeat(999, [b(t, -0.01, 4, function(a) {
    return f(4, -45, 45, a, O, c.offsetX(-45), c.Ca(j))
  }), b(t, -0.01, 4, function(a) {
    return f(4, -45, 45, a, O, c.offsetX(45), c.Ca(j))
  }), p(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), t, Q, c.offsetX(-45), c.Ca(j)), p(45), c.fire(c.direction(0), t, Q, c.offsetX(45), c.Ca(j)), p(45)])])});
  z["komachi-1"] = new q.ga({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), A(1), D, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(-40)), c.repeat(57, [p(8), c.fire(c.direction(-720 / 57, "sequence"), A(1), D, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, [c.fire(c.direction(-210, 
  "absolute"), A(1), D, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(40)), c.repeat(57, [p(8), c.fire(c.direction(720 / 57, "sequence"), A(1), D, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(40)), c.fire(c.direction(120, "sequence"), A(1), D, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), t(0), P, c.offsetX(-110), c.Ca(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), t(0), P, c.offsetX(-110), c.Ca(j))]), p(10), c.fire(c.direction(0), t(0), P, c.offsetX(110), c.Ca(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), t(0), P, c.offsetX(110), c.Ca(j))]), p(10)])])});
  z["komachi-2"] = new q.ga({top0:c.action([c.repeat(999, [b(t, -0.01, 4, function(a) {
    return c.action([f(4, -45, 45, a, O, c.offsetX(-45), c.Ca(j)), p(4)])
  }), b(t, -0.01, 4, function(a) {
    return c.action([p(4), f(4, -45, 45, a, O, c.offsetX(45), c.Ca(j))])
  }), p(90)])]), top1:c.action([c.repeat(999, [p(45), b(r, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, Qa)]), p(1)])
  }), p(180)])])});
  z["honoka-1"] = new q.ga({top0:c.action([c.wait(60), c.repeat(10, [f(4, -40, 40, r, H, c.offsetX(0), c.offsetY(30)), p(30), f(5, -40, 40, A, H, c.offsetX(0), c.offsetY(30)), p(30)])]), top1:c.action([c.wait(60), c.repeat(5, [f(2, -2, 2, r(0.6), D), f(3, -3, 3, r(1), D), f(4, -4, 4, r(1.4), D), f(5, -5, 5, r(1.8), D), p(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, A, P, c.offsetX(-110), c.offsetY(-70)), p(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, A, P, c.offsetX(110), c.offsetY(-70)), 
  p(30)])])});
  z["nagisa-1-1"] = new q.ga({top0:c.action([p(90), c.repeat(3, [c.kb("way", "5 + $loop.index*6"), b(r, 0.01, "3 + $loop.index*4", function(a) {
    return c.action([f("$way", -110, 110, a, D, c.offsetX(-190), c.offsetY(-20)), f("$way", -110, 110, a, D, c.offsetX(190), c.offsetY(-20)), c.wait(5)])
  }), p(60)]), p(60)])});
  z["nagisa-1-2"] = new q.ga({top0:c.action([c.repeat(12, [f(15, -90, 90, A, D), p(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [f(5, -65, -55, r, P, c.offsetX(-190), c.offsetY(-20)), f(5, -35, -25, r, P, c.offsetX(-190), c.offsetY(-20)), f(5, -5, 5, r, P, c.offsetX(-190), c.offsetY(-20)), f(5, 25, 35, r, P, c.offsetX(-190), c.offsetY(-20)), f(5, 55, 65, r, P, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), p(60), c.repeat(3, [f(5, -65, -55, r, P, c.offsetX(190), c.offsetY(-20)), f(5, -35, -25, 
  r, P, c.offsetX(190), c.offsetY(-20)), f(5, -5, 5, r, P, c.offsetX(190), c.offsetY(-20)), f(5, 25, 35, r, P, c.offsetX(190), c.offsetY(-20)), f(5, 55, 65, r, P, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), p(60)])])});
  z["nagisa-1-3"] = new q.ga({top0:c.action([p(60), c.repeat(3, [c.fire(c.direction(-60), r, O, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [p(15), c.fire(c.direction(6, "sequence"), r, O, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([p(80), c.repeat(3, [c.fire(c.direction(60), r, O, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [p(15), c.fire(c.direction(-6, "sequence"), r, O, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [f(5, -60, -40, r, H, c.offsetX(-190), 
  c.offsetY(-20)), f(5, -20, -10, r, H, c.offsetX(-190), c.offsetY(-20)), f(5, 10, 20, r, H, c.offsetX(-190), c.offsetY(-20)), f(5, 40, 60, r, H, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), p(60), c.repeat(3, [f(5, -60, -40, r, H, c.offsetX(190), c.offsetY(-20)), f(5, -20, -10, r, H, c.offsetX(190), c.offsetY(-20)), f(5, 10, 20, r, H, c.offsetX(190), c.offsetY(-20)), f(5, 40, 60, r, H, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), p(60)])])});
  z["nagisa-2-1"] = new q.ga({top0:c.action([p(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", A, I, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", A, I, c.offsetX(190), c.offsetY(-20)), p(10)])]), top1:c.action([p(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, Q), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, Q), p(12)])])});
  z["nagisa-2-2"] = new q.ga({top0:c.action([p(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", t, Q), p(12)])]), top1:c.action([p(120), c.repeat(6, [a(9, 150, 130, A(0.8), D), a(9, 172, 188, A(0.8), D), a(9, 210, 230, A(0.8), D), p(30), a(9, 170, 150, A(0.8), D), a(9, 190, 210, A(0.8), D), p(30)])])});
  z["nagisa-2-3"] = new q.ga({top:c.action([p(120), c.repeat(12, [a(23, 0, 360, A, H, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, A, H), a(23, 0, 360, A, H, c.offsetX(190), c.offsetY(-20)), p(30)])])});
  z["nagisa-3-1"] = new q.ga({top0:c.action([p(50), c.repeat(999, [b(t, 0.0010, 5, function(a) {
    return c.action([f(41, "-180", "+180", a, V, c.offsetX(-190), c.offsetY(-20)), f(41, "-180", "+180", a, V, c.offsetX(190), c.offsetY(-20))])
  }), p(50)])]), top1:c.action([c.repeat(999, [f(2, -2, 0, E, D), p(10), f(2, 0, 2, E, D), p(150)])])});
  z["mai-1"] = new q.ga({top0:c.action([p(50), c.repeat(50, [c.kb("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", s, Y(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, I), c.zb]))), c.kb("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", s, Y(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, I), c.zb]))), p(8)])]), top1:c.action([p(50), c.repeat(12, [a(5, -50, 50, s, Y(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, Q), c.zb]))), 
  a(5, -230, -130, s, Y(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, Q), c.zb]))), p(16), a(6, -50, 50, s, Y(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, Q), c.zb]))), a(6, -230, -130, s, Y(c.action([c.wait(8), c.fire(c.direction(0, "relative"), r, Q), c.zb]))), p(16)])])});
  z["mai-2"] = new q.ga({top:c.action([p(50), c.repeat(15, [c.fire(c.direction(-10), V(c.Pa("fireChild", "$loop.index*10"))), p(8)])]), fireChild:c.action([p("40+$1"), b(r, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, O)
  }), c.zb])});
  z["saki-1-1"] = new q.ga({top:c.action([p(100), c.repeat(3, [c.Pa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.kb("way", "$1"), c.repeat("30", [f("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", t, I), f("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", t, I), p(12)]), c.repeat("$2", [f(9, -20, 20, E, ja)])])});
  z["saki-1-2"] = new q.ga({top:c.action([p(100), c.repeat(5, [c.kb("way", "5+$loop.index*2"), c.repeat(6, [c.kb("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(f("$way", -30, 30, t("$s"), Q, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), p(90)])])});
  z["saki-1-3"] = new q.ga({top:c.action([c.kb("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), Q(c.Pa("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Ld(c.speed(0), 50), c.wait(90), f(13, 0, 360 - 360 / 13, r, ja), c.zb])});
  z["saki-2-1"] = new q.ga({top0:c.action([p(100), c.repeat(4, [f(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", r, I, c.offsetX(-40)), f(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", r, I, c.offsetX(40)), p(60), f(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", r, I, c.offsetX(-40)), f(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", r, I, c.offsetX(40)), p(60)])]), top1:c.action([p(100), c.repeat(4, [c.repeat(7, [c.kb("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  C, ja), c.repeat(4, [c.kb("w", "$loop.count"), f("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", C("$w*-1.0"), ja)])]), p(120)])])});
  z["saki-2-2"] = new q.ga({top:c.action([p(60), c.kb("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), V(c.Pa("seed"))), p(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), V(c.Pa("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Ld(c.speed(0), "10 + $rand*15"), c.wait(65), b(t, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, O)])
  }), b(t, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, O)])
  }), b(t, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, O)])
  }), b(t, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, O)])
  }), b(t, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, O)])
  }), b(t, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, O)])
  }), b(t, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, O)])
  }), b(t, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, O)])
  }), b(t, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, O)])
  }), p(2), c.zb])});
  z["saki-2-3"] = new q.ga({top:c.action([p(60), c.kb("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), Q(c.Pa("seed"))), p(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), Q(c.Pa("seed"))), p(8)]), p(60)]), seed:c.action([c.wait(10), c.Ld(c.speed(0), "10 + $rand*20"), c.wait(65), b(t, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, ja)])
  }), p(2), c.zb])});
  z["saki-3-1"] = new q.ga({top:c.action([c.fire(c.direction(180, "absolute"), aa, V(c.Pa("seed"))), p(60), c.fire(c.direction(180, "absolute"), aa, V(c.Pa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), aa, V(c.Pa("seed")), c.offsetX(80)), p(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), t, r, I), c.repeat(999, [c.fire(c.direction(90, "sequence"), r, I), c.fire(c.direction(90, "sequence"), r, I), c.fire(c.direction(90, "sequence"), r, I), p(10), c.fire(c.direction(100, 
  "sequence"), r, I)])])});
  z["saki-3-2"] = new q.ga({top:c.action([c.fire(c.direction(180, "absolute"), aa, Q(c.Pa("seed"))), p(60), c.fire(c.direction(180, "absolute"), aa, Q(c.Pa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), aa, Q(c.Pa("seed")), c.offsetX(80)), p(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), t, r, D), c.repeat(999, [c.fire(c.direction(90, "sequence"), r, D), c.fire(c.direction(90, "sequence"), r, D), c.fire(c.direction(90, "sequence"), r, D), p(10), c.fire(c.direction(80, "sequence"), 
  r, D)])])});
  z.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      ya.push(M())
    }
    a = z.Md = tm.Ya.mc.bd;
    a.We = function(a) {
      return!(a instanceof M) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Xf = function(a) {
      var b = ya.shift(0);
      if(b) {
        return b.na = v.Og, ka.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.Pb ? (b.scaleX = 1, b.scaleY = 1, b.kc = l) : (b.scaleX = 0.8, b.scaleY = 1.5, b.kc = j), b.visible = a.visible === l ? l : j, b.Pb = !!a.Pb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.ag = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.Cc = v.Qg;
    q.xa.Ra.$rank = 0;
    q.xa.Ra.$hyperOff = 1
  };
  z.erase = function(a, b, c) {
    for(var d = [].concat(ka), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var m = ua(!!b);
        m.setPosition(d[f].x, d[f].y);
        c && (m.yc = j)
      }
      d[f].Da()
    }
  };
  z.$c = function() {
    for(var a = [].concat(ka), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  M = tm.createClass({superClass:tm.display.Sprite, na:0, Pb:l, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      ya.push(this);
      var a = ka.indexOf(this);
      -1 !== a && ka.splice(a, 1)
    })
  }, update:function() {
    this.Pb && (this.rotation += 15)
  }, Da:function() {
    var a = J(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var ya = [], ka = M.Qa = []
})();
var S, T, Ja, U, Pa;
S = function(b, a, d) {
  return b < a ? a : b > d ? d : b
};
Pa = Math.PI / 180;
Ja = function(b) {
  return b * Pa
};
U = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
T = function(b, a) {
  return window.Math.random() * (a - b) + b
};

