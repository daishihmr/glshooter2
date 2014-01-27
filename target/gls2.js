/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function g(b) {
  throw b;
}
var i = void 0, j = !0, l = null, s = !1;
function B() {
  return function() {
  }
}
var I = {Ki:this};
(function() {
  function b(a, b) {
    for(var d = 0, h = a.length;d < h;d++) {
      if(a[d].label == b) {
        return a[d]
      }
    }
  }
  I.ja = function(a) {
    this.type = "none";
    this.root = this;
    this.jb = [];
    this.Se = [];
    this.$e = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof I.Qb ? this.jb.push(a[b]) : a[b] instanceof I.Ma ? this.Se.push(a[b]) : a[b] instanceof I.zd && this.$e.push(a[b]))
      }
      a = 0;
      for(b = this.jb.length;a < b;a++) {
        this.jb[a].bc(this)
      }
      a = 0;
      for(b = this.Se.length;a < b;a++) {
        this.Se[a].bc(this)
      }
      a = 0;
      for(b = this.$e.length;a < b;a++) {
        this.$e[a].bc(this)
      }
    }
  };
  I.ja.prototype.Oh = function(a) {
    return b(this.jb, a)
  };
  I.ja.prototype.Qj = function() {
    for(var a = [], b = 0, d = this.jb.length;b < d;b++) {
      var h = this.jb[b];
      h.label && 0 === h.label.indexOf("top") && (a[a.length] = h.label)
    }
    return a
  };
  I.ja.prototype.Fj = function(a) {
    var b;
    if(b = this.Oh(a)) {
      return b
    }
    g(Error("action labeled '" + a + "' is undefined."))
  };
  I.ja.prototype.Gj = function(a) {
    return b(this.Se, a)
  };
  I.ja.prototype.Hj = function(a) {
    var b;
    if(b = this.Gj(a)) {
      return b
    }
    g(Error("bullet labeled '" + a + "' is undefined."))
  };
  I.ja.prototype.Ij = function(a) {
    return b(this.$e, a)
  };
  I.ja.prototype.Jj = function(a) {
    var b;
    if(b = this.Ij(a)) {
      return b
    }
    g(Error("fire labeled '" + a + "' is undefined."))
  };
  I.Ma = function() {
    this.root = this.label = l;
    this.direction = new I.Fc(0);
    this.speed = new I.Ic(1);
    this.jb = [];
    this.Va = {};
    this.Ca = {}
  };
  I.Ma.prototype.clone = function(a) {
    var b = new I.Ma;
    b.label = this.label;
    b.root = this.root;
    b.jb = this.jb;
    b.direction = new I.Fc(a.cb(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new I.Ic(a.cb(this.speed.value));
    b.speed.type = this.speed.type;
    b.Va = this.Va;
    b.Ca = a.Ca;
    return b
  };
  I.Ma.prototype.bc = function(a) {
    this.root = a;
    for(var b = 0, d = this.jb.length;b < d;b++) {
      this.jb[b].bc(a)
    }
  };
  I.De = function(a) {
    this.root = l;
    this.label = a;
    this.fb = []
  };
  I.De.prototype.clone = function(a) {
    var b = a.Ca;
    a.Ca = a.dg(this.fb);
    var d = this.root.Hj(this.label).clone(a);
    a.Ca = b;
    return d
  };
  I.De.prototype.bc = function(a) {
    this.root = a
  };
  I.ib = function() {
    this.Eb = ""
  };
  I.ib.prototype.bc = function(a) {
    this.root = a
  };
  I.Qb = function() {
    this.Eb = "action";
    this.root = this.label = l;
    this.ic = [];
    this.fb = []
  };
  I.Qb.prototype = new I.ib;
  I.Qb.prototype.bc = function(a) {
    this.root = a;
    for(var b = 0, d = this.ic.length;b < d;b++) {
      this.ic[b].bc(a)
    }
  };
  I.Qb.prototype.clone = function() {
    var a = new I.Qb;
    a.label = this.label;
    a.root = this.root;
    a.ic = this.ic;
    return a
  };
  I.xd = function(a) {
    this.Eb = "actionRef";
    this.label = a;
    this.root = l;
    this.fb = []
  };
  I.xd.prototype = new I.ib;
  I.xd.prototype.clone = function() {
    var a = new I.Qb;
    a.root = this.root;
    a.ic.push(this);
    return a
  };
  I.zd = function() {
    this.Eb = "fire";
    this.Ha = this.speed = this.direction = this.root = this.label = l;
    this.Va = new I.He
  };
  I.zd.prototype = new I.ib;
  I.zd.prototype.bc = function(a) {
    this.root = a;
    this.Ha && this.Ha.bc(a)
  };
  I.Bf = function(a) {
    this.Eb = "fireRef";
    this.label = a;
    this.fb = []
  };
  I.Bf.prototype = new I.ib;
  I.Fe = function() {
    this.Eb = "changeDirection";
    this.direction = new I.Fc;
    this.Ab = 0
  };
  I.Fe.prototype = new I.ib;
  I.Ge = function() {
    this.Eb = "changeSpeed";
    this.speed = new I.Ic;
    this.Ab = 0
  };
  I.Ge.prototype = new I.ib;
  I.Ce = function() {
    this.Eb = "accel";
    this.Bc = new I.Df;
    this.Ec = new I.ag;
    this.Ab = 0
  };
  I.Ce.prototype = new I.ib;
  I.Le = function(a) {
    this.Eb = "wait";
    this.value = a || 0
  };
  I.Le.prototype = new I.ib;
  I.$f = function() {
    this.Eb = "vanish"
  };
  I.$f.prototype = new I.ib;
  I.Je = function() {
    this.Eb = "repeat";
    this.ti = 0;
    this.action = l;
    this.fb = []
  };
  I.Je.prototype = new I.ib;
  I.Je.prototype.bc = function(a) {
    this.root = a;
    this.action && this.action.bc(a)
  };
  I.wf = function(a, b) {
    this.Eb = "bind";
    this.Hk = a;
    this.Ej = b
  };
  I.wf.prototype = new I.ib;
  I.Rf = function(a, b) {
    this.Eb = "notify";
    this.Bj = a;
    this.fb = b || l
  };
  I.Rf.prototype = new I.ib;
  I.Hi = new I.ib;
  I.Fc = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  I.Ic = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  I.Df = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  I.ag = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  I.He = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.ra = j;
    a.ra !== i && (this.ra = !!a.ra)
  };
  I.nh = function(a) {
    this.value = a || 0
  };
  I.oh = function(a) {
    this.value = a || 0
  };
  I.Zg = function(a) {
    this.value = !!a
  }
})();
I.Ra = function(b) {
  this.wh = b;
  this.Me = [];
  this.Rc = -1;
  this.sb = l;
  this.Ca = {}
};
I.Ra.prototype.next = function() {
  this.Rc += 1;
  if(this.sb !== l) {
    var b = this.sb.ic[this.Rc];
    if(b !== i) {
      if(b instanceof I.Qb) {
        return this.Zd(), this.sb = b, this.Ca = this.cg(), this.next()
      }
      if(b instanceof I.xd) {
        return this.Zd(), this.sb = this.wh.Fj(b.label), this.Ca = this.dg(b.fb), this.next()
      }
      if(b instanceof I.Je) {
        return this.Ca.Md = 0, this.Ca.ci = this.cb(b.ti) | 0, this.Zd(), this.sb = b.action.clone(), this.Ca = this.cg(), this.next()
      }
      if(b instanceof I.zd) {
        var a = new I.zd;
        a.Ha = b.Ha.clone(this);
        b.direction !== l && (a.direction = new I.Fc(this.cb(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== l && (a.speed = new I.Ic(this.cb(b.speed.value)), a.speed.type = b.speed.type);
        a.Va = new I.He;
        a.Va.offsetX = this.cb(b.Va.offsetX);
        a.Va.offsetY = this.cb(b.Va.offsetY);
        a.Va.ra = b.Va.ra;
        return a
      }
      return b instanceof I.Bf ? (this.Zd(), this.sb = new I.Qb, this.sb.ic = [this.wh.Jj(b.label)], this.Ca = this.dg(b.fb), this.next()) : b instanceof I.Fe ? (a = new I.Fe, a.direction.type = b.direction.type, a.direction.value = this.cb(b.direction.value), a.Ab = this.cb(b.Ab), a) : b instanceof I.Ge ? (a = new I.Ge, a.speed.type = b.speed.type, a.speed.value = this.cb(b.speed.value), a.Ab = this.cb(b.Ab), a) : b instanceof I.Ce ? (a = new I.Ce, a.Bc.type = b.Bc.type, a.Bc.value = this.cb(b.Bc.value), 
      a.Ec.type = b.Ec.type, a.Ec.value = this.cb(b.Ec.value), a.Ab = this.cb(b.Ab), a) : b instanceof I.Le ? new I.Le(this.cb(b.value)) : b instanceof I.$f ? b : b instanceof I.wf ? (this.Ca["$" + b.Hk] = this.cb(b.Ej), I.Hi) : b instanceof I.Rf ? b : l
    }
    this.nj();
    if(this.sb === l) {
      return l
    }
    if((b = this.sb.ic[this.Rc]) && "repeat" == b.Eb) {
      this.Ca.Md++, this.Ca.Md < this.Ca.ci && (this.Zd(), this.sb = b.action.clone(), this.Ca = this.cg())
    }
    return this.next()
  }
  return l
};
I.Ra.prototype.Zd = function() {
  this.Me.push({action:this.sb, cursor:this.Rc, scope:this.Ca});
  this.Rc = -1
};
I.Ra.prototype.nj = function() {
  var b = this.Me.pop();
  b ? (this.Rc = b.cursor, this.sb = b.action, this.Ca = b.scope) : (this.Rc = -1, this.sb = l, this.Ca = {})
};
I.Ra.prototype.cb = function(b) {
  var a;
  if("boolean" === typeof b || "number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.Ca[b]) || (a = I.Ra.Xb[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var f in I.Ra.Xb) {
    I.Ra.Xb.hasOwnProperty(f) && (a[f] = I.Ra.Xb[f])
  }
  for(f in this.Ca) {
    this.Ca.hasOwnProperty(f) && (a[f] = this.Ca[f])
  }
  a.$rand = Math.random();
  (f = this.Me[this.Me.length - 1]) && (a.$loop = {index:f.scope.Md, count:f.scope.Md + 1, first:0 === f.scope.Md, last:f.scope.Md + 1 >= f.scope.ci});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
I.Ra.prototype.dg = function(b) {
  var a = {};
  if(b) {
    for(var f = 0, d = b.length;f < d;f++) {
      a["$" + (f + 1)] = this.cb(b[f])
    }
  }else {
    for(f in this.Ca) {
      this.Ca.hasOwnProperty(f) && (a[f] = this.Ca[f])
    }
  }
  return a
};
I.Ra.prototype.cg = function() {
  var b = {}, a;
  for(a in this.Ca) {
    this.Ca.hasOwnProperty(a) && (b[a] = this.Ca[a])
  }
  return b
};
I.ja.prototype.sg = function(b) {
  var a = new I.Ra(this);
  if(b = this.Oh(b)) {
    a.sb = b
  }
  return a
};
I.Ma.prototype.sg = function() {
  var b = new I.Ra(this.root), a = new I.Qb;
  a.root = this.root;
  a.ic = this.jb;
  b.sb = a;
  b.Ca = this.Ca;
  return b
};
I.Ra.Xb = {};
I.Ia = function(b) {
  b = b || "";
  for(var a in I.Ia) {
    I.Ia.hasOwnProperty(a) && (I.Ki[b + a] = I.Ia[a])
  }
};
I.Ia.action = function(b) {
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
  var d = new I.Qb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof I.ib)
    }) && g(Error("argument type error.")), d.ic = b
  }else {
    a = 0;
    for(f = arguments.length;a < f;a++) {
      arguments[a] instanceof I.ib ? d.ic[a] = arguments[a] : g(Error("argument type error."))
    }
  }
  return d
};
I.Ia.wa = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("label is required."));
  d = new I.xd(b);
  if(a instanceof Array) {
    d.fb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.fb.push(arguments[f])
    }
  }
  return d
};
I.Ia.Ha = function(b, a, f, d) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new I.Ma;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof I.Fc ? m.direction = arguments[h] : arguments[h] instanceof I.Ic ? m.speed = arguments[h] : arguments[h] instanceof I.Qb ? m.jb.push(arguments[h]) : arguments[h] instanceof I.xd ? m.jb.push(arguments[h]) : arguments[h] instanceof Array ? m.jb.push(I.Ia.action(arguments[h])) : arguments[h] instanceof Object ? m.Va = arguments[h] : "string" === typeof arguments[h] && (m.label = arguments[h])
  }
  return m
};
I.Ia.Kk = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("label is required."));
  d = new I.De(b);
  if(a instanceof Array) {
    d.fb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.fb.push(arguments[f])
    }
  }
  return d
};
I.Ia.fire = function(b, a, f, d) {
  for(var h = 0, m = arguments.length;h < m;h++) {
    arguments[h] instanceof Function && (arguments[h] = arguments[h]())
  }
  m = new I.zd;
  for(h = 0;h < arguments.length;h++) {
    arguments[h] instanceof I.Fc ? m.direction = arguments[h] : arguments[h] instanceof I.Ic ? m.speed = arguments[h] : arguments[h] instanceof I.Ma ? m.Ha = arguments[h] : arguments[h] instanceof I.De ? m.Ha = arguments[h] : arguments[h] instanceof I.He ? m.Va = arguments[h] : arguments[h] instanceof I.nh ? m.Va.offsetX = arguments[h].value : arguments[h] instanceof I.oh ? m.Va.offsetY = arguments[h].value : arguments[h] instanceof I.Zg && (m.Va.ra = arguments[h].value)
  }
  m.Ha === i && g(Error("bullet (or bulletRef) is required."));
  return m
};
I.Ia.Pk = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("label is required."));
  d = new I.Bf(b);
  if(a instanceof Array) {
    d.fb = a
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.fb.push(arguments[f])
    }
  }
  return d
};
I.Ia.Lk = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("direction is required."));
  a === i && g(Error("term is required."));
  f = new I.Fe;
  f.direction = b instanceof I.Fc ? b : new I.Fc(b);
  f.Ab = a;
  return f
};
I.Ia.Te = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("speed is required."));
  a === i && g(Error("term is required."));
  f = new I.Ge;
  f.speed = b instanceof I.Ic ? b : new I.Ic(b);
  f.Ab = a;
  return f
};
I.Ia.Jk = function(b, a, f) {
  for(var d = 0, h = arguments.length;d < h;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  h = new I.Ce;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof I.Df ? h.Bc = b : arguments[d] instanceof I.ag ? h.Ec = a : h.Ab = arguments[d]
  }
  h.Bc === i && h.Ec === i && g(Error("horizontal or vertical is required."));
  h.Ab === i && g(Error("term is required."));
  return h
};
I.Ia.wait = function(b) {
  for(var a = 0, f = arguments.length;a < f;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && g(Error("value is required."));
  return new I.Le(b)
};
I.Ia.Wa = function() {
  return new I.$f
};
I.Ia.repeat = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("times is required."));
  a === i && g(Error("action is required."));
  d = new I.Je;
  d.ti = b;
  if(a instanceof I.Qb || a instanceof I.xd) {
    d.action = a
  }else {
    if(a instanceof Array) {
      d.action = I.Ia.action(a)
    }else {
      for(var h = [], f = 1;f < arguments.length;f++) {
        h.push(arguments[f])
      }
      d.action = I.Ia.action(h)
    }
  }
  return d
};
I.Ia.Da = function(b, a) {
  return new I.wf(b, a)
};
I.Ia.Vk = function(b, a) {
  return new I.Rf(b, a)
};
I.Ia.direction = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.Fc(b);
  a !== i && (f.type = a);
  return f
};
I.Ia.speed = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.Ic(b);
  a && (f.type = a);
  return f
};
I.Ia.Bc = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.Df(b);
  a && (f.type = a);
  return f
};
I.Ia.Ec = function(b, a) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  b === i && g(Error("value is required."));
  f = new I.ag(b);
  a && (f.type = a);
  return f
};
I.Ia.Ok = function(b) {
  return new I.He(b)
};
I.Ia.offsetX = function(b) {
  return new I.nh(b)
};
I.Ia.offsetY = function(b) {
  return new I.oh(b)
};
I.Ia.ra = function(b) {
  return new I.Zg(b)
};
tm.Db = tm.Db || {};
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
  tm.Db.bd = tm.createClass({init:function(a) {
    a || g(Error("argument is invalid.", a));
    this.th = a
  }, Ve:function(a, b) {
    var d = this.th.Qj();
    if(b === i && 0 < d.length) {
      for(var f = [], v = 0, n = d.length;v < n;v++) {
        f[f.length] = this.uh(a, d[v])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var a = f.length;a--;) {
            f[a].call(this)
          }
          p.og == f.length && (p.fe = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, v = f.length;v--;) {
        f[v].nf = p
      }
      p.og = 0;
      p.Dh = function() {
        this.og++
      };
      p.og = 0;
      p.fe = s;
      p.wg = j;
      p.stop = s;
      return p
    }
    return this.uh(a, b)
  }, uh:function(a, b) {
    function d() {
      if(!d.stop) {
        d.na += 1;
        this.na = d.na;
        var a = d.Ue, b = d.mj;
        if(b) {
          if(d.na < d.mg ? d.direction += d.Id : d.na === d.mg && (d.direction = d.Tc), d.na < d.ng ? d.speed += d.ze : d.na === d.ng && (d.speed = d.Td), d.na < d.gg ? (d.ud += d.Pe, d.wd += d.Qe) : d.na === d.gg && (d.ud = d.Ne, d.wd = d.Oe), this.x += Math.cos(d.direction) * d.speed * a.vd, this.y += Math.sin(d.direction) * d.speed * a.vd, this.x += d.ud * a.vd, this.y += d.wd * a.vd, a.xg(this)) {
            if(a.$c || this.$c) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.na < d.zi || d.fe)) {
              for(var f;f = d.Ai.next();) {
                switch(f.Eb) {
                  case "fire":
                    b.jj.call(this, f, a, d, b);
                    break;
                  case "wait":
                    a = 0;
                    d.zi = "number" === typeof f.value ? d.na + f.value : 0 !== (a = ~~f.value) ? d.na + a : d.na + eval(f.value);
                    return;
                  case "changeDirection":
                    b.ej.call(this, f, a, d);
                    break;
                  case "changeSpeed":
                    b.fj.call(this, f, d);
                    break;
                  case "accel":
                    b.cj.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    b.kj.call(this, f)
                }
              }
              d.fe = j;
              d.nf ? d.nf.Dh() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.fe = j, d.nf ? d.nf.Dh() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    a = function(a) {
      var b = {}, d = tm.Db.bd.ge, f;
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
    "string" === typeof b ? d.Ai = this.th.sg(b) : b instanceof I.Ma ? d.Ai = b.sg() : (window.console.error(a, b), g(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.mj = this;
    d.Ue = a;
    d.zi = -1;
    d.fe = s;
    d.direction = 0;
    d.Yh = 0;
    d.speed = 0;
    d.$h = 0;
    d.ud = 0;
    d.wd = 0;
    d.Id = 0;
    d.Tc = 0;
    d.mg = -1;
    d.ze = 0;
    d.Td = 0;
    d.ng = -1;
    d.Pe = 0;
    d.Ne = 0;
    d.Qe = 0;
    d.Oe = 0;
    d.gg = -1;
    d.na = -1;
    d.stop = s;
    d.wg = j;
    return d
  }, ij:function(a) {
    function b() {
      b.stop || (this.x += b.Hh, this.y += b.Ih, b.Ue.xg(this) || this.remove())
    }
    a = function(a) {
      var b = {}, d = tm.Db.bd.ge, f;
      for(f in d) {
        d.hasOwnProperty(f) && (b[f] = d[f])
      }
      for(f in a) {
        a.hasOwnProperty(f) && (b[f] = a[f])
      }
      return b
    }(a);
    a.target || g(Error("target is undefined in config."));
    b.Ue = a;
    b.direction = 0;
    b.speed = 0;
    b.Hh = 0;
    b.Ih = 0;
    b.stop = s;
    b.wg = j;
    return b
  }, jj:function(b, d, f, w) {
    if(this.nk === i || this.Mb) {
      var v = {label:b.Ha.label}, n;
      for(n in b.Ha.Va) {
        v[n] = b.Ha.Va[n]
      }
      if(v = d.Bh(v)) {
        w = (n = 0 === b.Ha.jb.length) ? w.ij(d) : w.Ve(d, b.Ha);
        var p = this, r = {x:this.x + b.Va.offsetX, y:this.y + b.Va.offsetY};
        f.Yh = w.direction = function(n) {
          var k = eval(n.value) * Math.DEG_TO_RAD;
          switch(n.type) {
            case "aim":
              return d.target ? b.Va.ra ? a(r, d.target) + k : a(p, d.target) + k : k - Math.PI / 2;
            case "absolute":
              return k - Math.PI / 2;
            case "relative":
              return f.direction + k;
            default:
              return f.Yh + k
          }
        }(b.direction || b.Ha.direction);
        f.$h = w.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return f.speed + b;
            case "sequence":
              return f.$h + b;
            default:
              return b
          }
        }(b.speed || b.Ha.speed);
        v.x = r.x;
        v.y = r.y;
        n && (w.Hh = Math.cos(w.direction) * w.speed * d.vd, w.Ih = Math.sin(w.direction) * w.speed * d.vd);
        v.$c = !!v.$c;
        if(d.$c || v.$c) {
          v.rotation = (w.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, v.speed = w.speed
        }
        v.addEventListener("enterframe", w);
        d.yh ? d.yh.addChild(v) : this.parent && this.parent.addChild(v)
      }
    }
  }, ej:function(d, f, q) {
    var w = eval(d.direction.value) * Math.DEG_TO_RAD, v = eval(d.Ab);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        q.Tc = a(this, d) + w;
        q.Id = b(q.Tc - q.direction) / v;
        break;
      case "absolute":
        q.Tc = w - Math.PI / 2;
        q.Id = b(q.Tc - q.direction) / v;
        break;
      case "relative":
        q.Tc = q.direction + w;
        q.Id = b(q.Tc - q.direction) / v;
        break;
      case "sequence":
        q.Id = w, q.Tc = q.direction + q.Id * (v - 1)
    }
    q.mg = q.na + v
  }, fj:function(a, b) {
    var d = eval(a.speed.value), f = eval(a.Ab);
    switch(a.speed.type) {
      case "absolute":
        b.Td = d;
        b.ze = (b.Td - b.speed) / f;
        break;
      case "relative":
        b.Td = d + b.speed;
        b.ze = (b.Td - b.speed) / f;
        break;
      case "sequence":
        b.ze = d, b.Td = b.speed + b.ze * f
    }
    b.ng = b.na + f
  }, cj:function(a, b) {
    var d = eval(a.Ab);
    b.gg = b.na + d;
    if(a.Bc) {
      var f = eval(a.Bc.value);
      switch(a.Bc.type) {
        case "absolute":
        ;
        case "sequence":
          b.Pe = (f - b.ud) / d;
          b.Ne = f;
          break;
        case "relative":
          b.Pe = f, b.Ne = (f - b.ud) * d
      }
    }else {
      b.Pe = 0, b.Ne = b.ud
    }
    if(a.Ec) {
      switch(f = eval(a.Ec.value), a.Ec.type) {
        case "absolute":
        ;
        case "sequence":
          b.Qe = (f - b.wd) / d;
          b.Oe = f;
          break;
        case "relative":
          b.Qe = f, b.Oe = (f - b.wd) * d
      }
    }else {
      b.Qe = 0, b.Oe = b.wd
    }
  }, kj:function(a) {
    var b = tm.event.Event(a.Bj);
    if(a.fb) {
      for(var d in a.fb) {
        b[d] = a.fb[d]
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
  tm.Db.xj = function(a) {
    var b = tm.app.Sprite(f, 8, 8);
    b.label = a.label;
    return b
  };
  var d = l;
  tm.Db.Gh = function(a) {
    if(d === l) {
      if(!a.getRoot().app) {
        return j
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Db.Mk = function() {
    return j
  };
  tm.Db.bd.ge = {Bh:tm.Db.xj, xg:tm.Db.Gh, cl:0, $c:s, vd:2, target:l};
  I.ja.prototype.Ve = function(a) {
    return tm.Db.bd(this).Ve(a)
  }
})();
/*
 gls2.js v1.0-beta

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(B());
tm.main(function() {
  gls2.Li("#canvas2d");
  gls2.core.run()
});
gls2.Li = tm.createClass({superClass:tm.display.CanvasApp, le:0, Uj:0, Wj:0, Vj:0, Sj:0, Tj:l, de:3, td:3, Jh:1, ca:l, init:function(b) {
  gls2.core !== l && g(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = 60;
  this.background = "rgba(0,0,0,0)";
  this.Xg = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.ui.LoadingScene({assets:{achevements:"assets/achevements.json", tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex4:"assets/tex4.png", tex_tank1:"assets/tex_tank1.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", 
  aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", bgmShipSelect:"assets2/nc44200.mp3", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgm3:"assets2/nc80728.mp3", bgm4:"assets2/nc67876.mp3", bgm5:"assets2/nc60627.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", bgmEnding:"assets2/Blue_Moon_MIKU_Append.mp3", 
  bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/achevement":"assets2/se_maoudamashii_system46.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", 
  "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, nextScene:function() {
    this.lj();
    return gls2.TitleScene()
  }.bind(this)}))
}, Ch:function() {
  var b = window.achevements, a = tm.asset.AssetManager.get("achevements").data;
  return!b ? 0 : Math.floor(b.reduce(function(b, d) {
    return a[d] ? b + J[a[d].grade] : b
  }, 0))
}, update:function() {
  for(var b = [].concat(this.Xg), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.Xg.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, lj:function() {
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
  gls2.ha.setup();
  gls2.oa.setup();
  this.ca = gls2.Xa()
}, Nk:function() {
  this.stop()
}, bi:s, Og:function(b, a) {
  var f = {score:Math.floor(this.ca.score), stage:this.ca.Ib + 1, continueCount:this.ca.Jc, shipType:this.ca.fa.type, shipStyle:this.ca.fa.style, fps:0, screenShot:this.ca.Qd};
  b ? (f.userName = b, this.bi = s) : this.bi = j;
  tm.util.Ajax.load({url:"/api/ranking/post", data:f, type:"POST", dataType:"json", success:function(b) {
    if(b) {
      if(b.success) {
        a(l, j, b.scoreId)
      }else {
        if(b.confirmLogin) {
          if(confirm("\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
            window.onchildclose = function() {
              this.Og(l, a);
              window.onchildclose = i
            }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
          }else {
            if(confirm("\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
              for(b = "";"" === b;) {
                b = window.prompt("\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.Pj())
              }
              b !== l && (b = b.substring(0, 10), this.Og(b + " (\u533f\u540d)", a))
            }else {
              a(l, s)
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
}, Pj:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u5927\u4f50 \u30ec\u30a4\u30cb\u30e3\u30f3\u306b\u3083\u3093 \u30a2\u30a4\u305f\u305d \u3071\u3075\u3047\u2606 \u80fd\u767b\u771f\u7483\u4e9c \u306b\u3083\u3093\u3071\u3059\u30fc(30) \u76f8\u7530\u7dcf\u7406".split(" ").pickup()
}, Xg:l, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}, xa:function(b) {
  if(window.achevements) {
    var a = tm.asset.AssetManager.get("achevements").data;
    if(a[b]) {
      var f = window.achevements;
      -1 == f.indexOf(b) && (f.push(b), tm.util.Ajax.load({url:"/api/achevement/" + b, type:"POST", dataType:"json", success:function(d) {
        console.dir(d);
        a[b] && (gls2.ta("achevement"), this.ca.Vh.addChild(gls2.gh(a[b].title)))
      }.bind(this), error:function() {
        console.warn("error!")
      }}))
    }
  }
}});
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Lc = function(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.Xa.Wd && gls2.Xa.Wd.se(0)
};
var M = [1E9, 1E10], P = [3, 2, 1], Q = [6, 4, 2], S = [1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], J = [0.1, 0.4, 1];
(function() {
  var b = l, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  gls2.ph = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, Ta:0, yc:j, ce:j, Nd:s, ca:l, speed:0, Kb:l, Hd:l, fi:l, ef:l, Yb:l, tg:l, wc:l, ug:l, vg:l, frame:0, init:function(a, d, h) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = d;
    this.style = h;
    tm.Db.bd.ge.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.Hd = this.fi = gls2.rh(d, 100);
    this.ef = gls2.rh(3, 100);
    this.Yb = gls2.lh(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Yb.visible = s;
    this.hj();
    this.Kb = this.gj();
    1 === this.style && (this.Kb = [this.Kb[1], this.Kb[2]]);
    this.wc = tm.display.CanvasElement().addChildTo(this);
    d = 0;
    for(h = this.Kb.length;d < h;d++) {
      var m = this.Kb[d];
      gls2.Ci(this, m).setPosition(m.x, m.y).addChildTo(this.wc)
    }
    this.bk = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.bk.blendMode = "lighter";
    this.ug = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.ug.blendMode = "lighter";
    this.ug.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.Sa && !a.Ka
    };
    this.vg = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.vg.blendMode = "lighter";
    this.vg.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.Sa && !a.Ka
    };
    this.me = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.me.blendMode = "lighter";
    this.me.rotation = -90;
    this.me.strokeStyle = "rgba(180,180,255,0.4)";
    this.me.update = function() {
      this.visible = a.Ka
    };
    this.me.draw = function(b) {
      b.lineCap = "round";
      var d = a.Kd / 800;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, s);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, s);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, s)
    };
    this.Xj = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Xj.update = function() {
      this.visible = a.Ka
    };
    b === l && (b = gls2.$g(this.ca.ka))
  }, gj:function() {
    if(0 === this.type) {
      return[{x:0, md:0, y:40, d:0, cc:j, Vb:-0.7, v:j}, {x:0, md:0, y:40, d:0, cc:j, Vb:0.5, v:j}, {x:0, md:0, y:40, d:0, cc:j, Vb:-0.5, v:j}, {x:0, md:0, y:40, d:0, cc:j, Vb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, cc:s, Vb:-0.7, v:j}, {x:-40, y:40, d:0.1, cc:s, Vb:-0.5, v:j}, {x:40, y:40, d:0.1, cc:j, Vb:0.5, v:j}, {x:70, y:20, d:0.1, cc:j, Vb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, cc:s, Vb:-0.7, v:j}, {x:-30, y:20, d:0.4, cc:s, Vb:-0.5, v:j}, {x:30, y:20, d:0.4, cc:j, Vb:0.5, v:j}, {x:60, y:40, d:0.6, cc:j, Vb:0.7, v:j}]
    }
  }, hj:function() {
    this.tg = tm.display.Sprite("tex0", 20, 20).addChildTo(this);
    this.tg.setFrameIndex(5);
    this.tg.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Xc:-1, Jd:s, Wb:s, update:function(f) {
    this.visible = this.Nd ? 0 === f.frame / 2 % 2 : j;
    var d = f.keyboard;
    if(this.yc) {
      var h = d.getKeyAngle();
      h !== l && (h = a[h], this.x += h.x * this.speed * (this.Wb ? 0.5 : 1), this.y += h.y * this.speed * (this.Wb ? 0.5 : 1));
      this.x = gls2.la.clamp(this.x, 15, 465);
      this.y = gls2.la.clamp(this.y, 15, 625);
      var m = d.getKey("c") && this.ce, h = d.getKey("z") && this.ce;
      this.Xc = m ? this.Xc + 1 : this.Xc - 1;
      this.Xc = gls2.la.clamp(this.Xc, -1, 10);
      this.Wb = h && m || 10 === this.Xc;
      m = this.ca.Ka ? 3 : 5;
      this.Jd = !this.Wb && (0 <= this.Xc || h) && 0 === f.frame % m;
      h && (this.Xc = 0);
      this.Yb.x = this.x;
      this.Yb.y = this.y - 40;
      d.getKeyDown("x") && this.ce && (0 < this.ca.Sa && !this.ca.Ka ? (this.ca.zk(), gls2.bj(this).addChildTo(this.ca)) : !this.ca.qd && 0 < this.ca.Lb && (this.Fb = gls2.la.clamp(this.Fb - 2, 0, 1), this.ca.$d(-0.02), gls2.ah(this, this.ca).setPosition(gls2.la.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca), gls2.core.xa("bomb1")))
    }else {
      this.Wb = this.Jd = s
    }
    this.Jd && (h = Math.sin(0.2 * f.frame), m = this.Hd.fire(this.x - 7 - 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.ca), m = this.Hd.fire(this.x + 7 + 6 * h, this.y - 5, -90), m !== l && m.addChildTo(this.ca));
    if(this.Wb) {
      h = 0;
      for(m = this.Kb.length;h < m;h++) {
        this.Kb[h].v = s
      }
      this.wc.rotation = 0
    }else {
      this.Yb.visible = s;
      h = 0;
      for(m = this.Kb.length;h < m;h++) {
        this.Kb[h].v = j
      }
    }
    this.wj(d);
    this.dj(d, f.frame);
    0 === f.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = f.frame
  }, Kc:function() {
    this.Wb = this.Jd = s;
    this.ca.We();
    this.ca.lb = 0;
    this.ca.eb = 0;
    this.ca.Oa = 0
  }, wj:function(a) {
    if(0 === this.type) {
      for(a = this.Kb.length;this.Kb[--a] !== i;) {
        var b = this.Kb[a];
        0 === a ? b.x = b.md + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.md + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.md + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.md + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.wc, b.rotation = this.Wb ? 0 : this.yc && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.yc && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, dj:function(a, b) {
    this.yc && a.getKey("left") ? this.Ta = gls2.la.clamp(this.Ta - 0.2, -3, 3) : this.yc && a.getKey("right") ? this.Ta = gls2.la.clamp(this.Ta + 0.2, -3, 3) : 0 > this.Ta ? this.Ta = gls2.la.clamp(this.Ta + 0.2, -3, 3) : 0 < this.Ta && (this.Ta = gls2.la.clamp(this.Ta - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.Ta) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.Ta) : 2 === this.type && this.setFrameIndex(31 + ~~this.Ta);
    return b
  }});
  gls2.Ci = tm.createClass({superClass:tm.display.AnimationSprite, kd:l, fa:l, init:function(a, b) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.kd = b;
    this.fa = a;
    this.altitude = 10;
    this.gotoAndPlay(b.cc ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.kd.v) {
      this.x = this.kd.x * (this.fa.ca.Ka ? 1.5 : 1);
      this.y = this.kd.y * (this.fa.ca.Ka ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.kd.d * this.kd.Vb);
      var d = this.parent.localToGlobal(this);
      this.kd.v && 0 === a.frame % 2 && b.clone(40).setPosition(d.x, d.y).addChildTo(this.fa.ca);
      this.fa.Jd && (d = this.fa.Hd.fire(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== l && d.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = l;
  gls2.Dd = tm.createClass({superClass:tm.display.Sprite, speed:0, gd:0, sj:1, Uh:0, mb:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.gd = 1;
    b === l && (b = gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.ye(a)
  }, update:function() {
    this.x += this.Oc;
    this.y += this.nc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, ye:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, bf:function(a) {
    for(var d = 0;d < a;d++) {
      var h = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), m = gls2.la.randf(2, 8), q = 2 * Math.random() * Math.PI;
      h.Fa = Math.cos(q) * m;
      h.Ga = Math.sin(q) * m;
      h.scaleX = h.scaleY = (gls2.la.randf(0.1, 0.5) + gls2.la.randf(0.1, 0.5)) / 2;
      h.addEventListener("enterframe", function() {
        this.x += this.Fa;
        this.y += this.Ga;
        this.Fa *= 0.9;
        this.Ga *= 0.9
      })
    }
  }});
  gls2.Dd.ee = function() {
    for(var b = [].concat(a), d = 0, h = b.length;d < h;d++) {
      b[d].remove()
    }
  };
  var a = gls2.Dd.kb = [];
  gls2.rh = tm.createClass({Wc:l, Th:s, init:function(b, d) {
    this.Th = 3 === b;
    this.Wc = [];
    for(var h = 0;h < d;h++) {
      var m = gls2.Dd(b), q = this;
      m.addEventListener("added", function() {
        this.sa = 10;
        a.push(this)
      });
      m.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        q.Wc.push(this)
      });
      this.Th && m.addEventListener("enterframe", function(a) {
        this.setScale((this.sj + this.Uh) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Wc.push(m)
    }
  }, fire:function(a, b, h) {
    var m = this.Wc.pop();
    if(m === i) {
      return l
    }
    var q = gls2.la.degToRad(h);
    m.Oc = Math.cos(q) * m.speed;
    m.nc = Math.sin(q) * m.speed;
    m.setPosition(a, b);
    m.rotation = h + 90;
    return m
  }, Rd:function(a) {
    for(var b = this.Wc.length;this.Wc[--b] !== i;) {
      this.Wc[b].gd = 1 + 0.1 * a, this.Wc[b].Uh = 0.2 * a
    }
  }})
})();
gls2.lh = tm.createClass({superClass:tm.display.Sprite, fa:l, ca:l, uc:0, frame:0, si:l, color:l, zh:0, ig:0, tj:s, head:l, Ph:l, vc:l, mb:j, gd:1, Pd:l, init:function(b, a) {
  this.fa = b;
  this.ca = b.ca;
  this.zh = 0 === this.fa.style ? 1 : 1.2;
  this.ig = 0 === this.fa.style ? 50 : 75;
  var f = this;
  this.si = a;
  this.superInit(a.redBody, this.ig, 100);
  this.boundingHeightBottom = 1;
  this.el = 0;
  this.origin.y = 1;
  var d = this.vc = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.Ph = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = f.uc - f.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < f.uc
  };
  this.ye(["red", "green", "blue"][this.fa.type]);
  this.Rd(0)
}, ye:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.si[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.vc.gotoAndPlay(this.color);
  this.Ph.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Pd = l;
  return this
}, Rd:function(b) {
  this.boundingWidth = this.width = this.ig + 30 * b / 10;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.gd = 1 * this.zh + 0.25 * b;
  0 === b ? this.ye(["red", "green", "blue"][this.fa.type]) : this.ye("hyper")
}, bf:function(b, a) {
  this.Pd === l && this.Eh();
  a = a || this.uc;
  for(var f = 0;f < b;f++) {
    var d = this.Pd.clone().setPosition(this.x, a).addChildTo(this.ca), h = gls2.la.randf(8, 14), m = gls2.la.randf(0, Math.PI);
    d.Fa = Math.cos(m) * h;
    d.Ga = Math.sin(m) * h;
    d.scaleX = d.scaleY = (gls2.la.randf(0.5, 1.5) + gls2.la.randf(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.Fa;
      this.y += this.Ga;
      this.Fa *= 0.95;
      this.Ga *= 0.95
    })
  }
}, Lj:function(b, a, f) {
  this.Pd === l && this.Eh();
  for(var d = 0;d < b;d++) {
    var h = this.Pd.clone().setPosition(a, f).addChildTo(this.ca), m = gls2.la.randf(12, 20), q = gls2.la.randf(0, Math.PI);
    h.Fa = Math.cos(q) * m;
    h.Ga = Math.sin(q) * m;
    h.scaleX = h.scaleY = (gls2.la.randf(1, 3) + gls2.la.randf(1, 3)) / 2;
    h.addEventListener("enterframe", function() {
      this.x += this.Fa;
      this.y += this.Ga;
      this.Fa *= 0.95;
      this.Ga *= 0.95
    })
  }
}, Eh:function() {
  this.Pd = "hyper" === this.color ? gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.fa.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.fa.Wb) ? (this.uc = Math.max(0, this.uc - 40), this.height = this.y - this.uc, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.uc = this.y - 40;
  this.tj = this.visible
}, draw:function(b) {
  var a = this.srcRect, f = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(f, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Rk:function() {
  return this.uc
}, tk:function(b) {
  this.uc = b;
  this.head.update()
}});
gls2.lh.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.uc
});
(function() {
  gls2.ah = tm.createClass({superClass:tm.app.Object2D, mb:j, ca:l, init:function(a, f) {
    this.superInit();
    this.fa = a;
    this.ca = f;
    this.ni = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.ni.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.ni));
    this.xh();
    b === l && (b = gls2.Ua(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.na = 0;
    this.ve = 1;
    this.addEventListener("added", function() {
      this.ca.qd = j;
      this.fa.Nd = j;
      this.ca.Lb -= 1;
      this.ca.gf = s;
      this.ca.We();
      this.ca.xb("drop BOMBER!!", j);
      gls2.ta("bomb");
      gls2.ta("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.qd = s;
      this.fa.Nd = s
    })
  }, xh:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.la.randf(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.ve + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.na;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.na += 3.6, this.ve = -1) : (this.b = 8, this.na += 1.8, this.ve = 1)
  }});
  gls2.mh = tm.createClass({superClass:gls2.ah, init:function(a, b) {
    this.superInit(a, b);
    this.addEventListener("added", function() {
      this.ca.Lb = 0
    })
  }, xh:function() {
    this.core = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = gls2.la.randf(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var f = this.a * this.ve + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.na;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.na += 1.8, this.ve = 1)
  }});
  var b = l
})();
gls2.Di = tm.createClass({superClass:tm.display.Sprite, Oc:0, nc:0, fa:l, na:0, init:function(b, a, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(b, a);
  this.fa = f;
  this.nc = 1;
  this.Oc = 0.5 > gls2.ua.random() ? -1 : 1;
  this.na = 0
}, update:function() {
  this.x += this.Oc;
  this.y += 2 * this.nc;
  if(2025 > gls2.Lc(this, this.fa)) {
    this.fa.ca.pj(1), this.remove()
  }else {
    if(3E3 > this.na) {
      if(30 > this.x || 450 < this.x) {
        this.Oc *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.nc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.na += 1
}});
gls2.Ji = tm.createClass({superClass:tm.display.Sprite, Oc:0, nc:0, fa:l, na:0, init:function(b, a, f) {
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
  4096 > gls2.Lc(this, this.fa) && (this.fa.ca.Lh(), gls2.core.xa("extend3"), this.remove());
  704 < this.y && this.remove()
}});
gls2.oa = {};
gls2.oa.setup = function() {
  gls2.Aj = {};
  gls2.oa.explosion = Array.range(0, 3).map(function(b) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.Aj.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.oa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.oa.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.oa.particle16 = gls2.Ua(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.oa.bf = function(b, a, f) {
  b = gls2.oa.particle16.clone().setPosition(b, a);
  b.mb = j;
  b.addChildTo(f);
  f = gls2.la.randf(5, 20);
  a = gls2.la.randf(Math.PI, 2 * Math.PI);
  b.Fa = Math.cos(a) * f;
  b.Ga = Math.sin(a) * f;
  b.scaleX = b.scaleY = (gls2.la.randf(0.1, 0.5) + gls2.la.randf(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.Fa;
    this.y += this.Ga;
    this.Fa *= 0.9;
    this.Ga *= 0.9
  })
};
gls2.oa.cf = function(b, a, f, d) {
  d = d || 1.8;
  var h = tm.display.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter");
  h.mb = j;
  h.addChildTo(f);
  h.image = gls2.oa.shockwaveImage;
  h.tweener.clear().to({scaleX:d, scaleY:d, alpha:0}, 800, "easeOutQuad").call(function() {
    h.remove()
  })
};
gls2.oa.Nj = function(b, a, f) {
  var d = tm.display.Sprite().setPosition(b, a).setScale(3).setBlendMode("lighter");
  d.mb = j;
  d.addChildTo(f);
  d.image = gls2.oa.shockwaveImage;
  d.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
};
gls2.oa.Mj = function(b, a, f) {
  b = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.mb = j;
  b.addChildTo(f);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
};
gls2.oa.Ye = function(b, a, f, d) {
  gls2.ta("explode");
  var h = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  h.mb = j;
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
  gls2.oa.cf(b, a, f)
};
gls2.oa.Dj = function(b, a, f) {
  gls2.ta("explode");
  var d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.mb = j;
  d.addChildTo(f);
  d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.mb = j;
  d.addChildTo(f);
  d = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.mb = j;
  d.addChildTo(f)
};
gls2.oa.tb = function(b, a, f) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var d = ~~(Math.random() * gls2.Qc.noise.length), h = 0;20 > h;h++) {
    var m = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
    m.a = 2 * Math.PI * Math.random();
    m.v = 10 * Math.pow(gls2.Qc.noise.at(~~(gls2.Qc.noise.length * h / 20) + d), 2);
    m.mb = j;
    m.addChildTo(f)
  }
  gls2.oa.cf(b, a, f, 5)
};
gls2.oa.je = function(b, a, f) {
  gls2.ta("explode2");
  gls2.ta("explode3");
  for(var d = ~~(Math.random() * gls2.Qc.noise.length), h = 0;20 > h;h++) {
    for(var m = 2 * Math.PI * h / 20, q = Math.pow(gls2.Qc.noise.at(~~(gls2.Qc.noise.length * h / 20) + d), 2), w = 0;3 > w;w++) {
      var v = 4 * q * (w + 1), n = gls2.oa.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.na += 1
      }).setScale(0.3 * (3 - w)).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
      n.rotation = 2 * Math.random() * Math.PI;
      n.mb = j;
      n.na = 0;
      n.a = m;
      n.v = v;
      n.addChildTo(f)
    }
  }
};
gls2.Af = tm.createClass({superClass:tm.app.Object2D, target:l, lc:0, angle:0, alpha:2, mb:j, reverse:s, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.lc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function(b) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === b.frame % 2) {
      for(b = 0;9 > b;b++) {
        var a = this.angle + 2 * b / 9 * Math.PI;
        gls2.Ua(this.reverse ? 100 : 60, this.alpha, 0.9).setPosition(Math.cos(a) * this.lc + this.target.x, Math.sin(a) * this.lc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.lc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.lc || 200 < this.lc) && this.remove()
  }
}});
gls2.bj = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, mb:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      var a = gls2.Ua(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.la.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.la.rand(-2, 2)).on("enterframe", function() {
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
gls2.gh = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(b) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + b + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).setFillStyle("rgba(255, 255, 255, 0.5)").addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, Xk:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.alpha = 576 < gls2.core.ca.fa.y ? 0.1 : 1;
  this.label.x -= 2;
  -960 > this.label.x && this.remove()
}});
gls2.Ti = tm.createClass({superClass:tm.graphics.Canvas, ca:l, Gd:l, zb:l, frame:0, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.Gd = gls2.Ei(200);
  this.zb = gls2.qh(this)
}, update:function() {
  this.clear();
  this.ca.hc !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.zb.Ac - 20, 470 * this.ca.hc.sa / this.ca.hc.Uc, 20), this.strokeRect(5, this.zb.Ac - 20, 470, 20), this.clear(263.5, this.zb.Ac - 20 + 2, 2, 16), this.clear(52, this.zb.Ac - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.zb.Ac + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.lb)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.Oa / 1E3) + 1), this.zb.ke + 192, 22);
  b = [0, 1, 4][this.ca.fa.type];
  for(a = 0;a < this.ca.ad - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * I.Ra.Xb.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.pe + " hit", this.zb.ke + 10, 95);
  0 < ~~this.ca.Oa && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.Oa + " HIT!!", 10, 0.5 * -this.zb.Ac + 115));
  0 === this.frame % 2 && (!this.ca.Ka && 0 < this.ca.Sa ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.Sa, 5, 637)) : this.ca.Ka && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.ca.nd, 5, 637)));
  for(a = 0;a < this.ca.Lb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  0 === this.frame % 2 && this.ca.gf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
  this.Gd.update();
  this.Gd.Ng = this.zb.Ac + 5;
  this.Gd.draw(this);
  this.frame += 1
}});
gls2.qh = tm.createClass({superClass:tm.app.Object2D, Pb:l, ke:0, Ac:0, init:function(b) {
  this.superInit();
  this.Pb = b
}});
(function() {
  var b = Array.range(0, 5).map(function(a) {
    return Math.pow(0.9, a + 1)
  });
  gls2.Mi = tm.createClass({superClass:tm.graphics.Canvas, Ea:l, Ob:l, $b:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ea = gls2.Ni();
    this.Ea.ka = this;
    this.Ea.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Ob = [];
    this.$b = [];
    for(var a = 0;5 > a;a++) {
      this.Ob[a] = 40 * b[a], this.$b[a] = this.Ob[a] / 2 * Math.sqrt(3)
    }
  }, update:function(a) {
    this.Ea.Fa = Math.cos(this.Ea.direction) * this.Ea.speed;
    this.Ea.Ga = Math.sin(this.Ea.direction) * this.Ea.speed;
    for(var b = 0;5 > b;b++) {
      for(this.Ea.jc[b] += this.Ea.Fa * Math.pow(0.8, b);3 * this.Ob[b] < this.Ea.jc[b];) {
        this.Ea.jc[b] -= 3 * this.Ob[b]
      }
      for(;this.Ea.jc[b] < 3 * -this.Ob[b];) {
        this.Ea.jc[b] += 3 * this.Ob[b]
      }
      for(this.Ea.kc[b] += this.Ea.Ga * Math.pow(0.8, b);2 * this.$b[b] < this.Ea.kc[b];) {
        this.Ea.kc[b] -= 2 * this.$b[b]
      }
      for(;this.Ea.kc[b] < 2 * -this.$b[b];) {
        this.Ea.kc[b] += 2 * this.$b[b]
      }
    }
    0 === a % 2 && this.draw()
  }, draw:function() {
    this.Ea.background !== l ? this.clearColor(this.Ea.background, 0, 0) : this.clear();
    for(var a = 0;5 > a;a++) {
      this.lineWidth = 0.3 * Math.pow(0.8, a);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * b[a] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * b[a] + ")"}]).toStyle();
      this.beginPath();
      for(var f = 0, d = this.Ea.jc[a] - 3 * this.Ob[a];d < 480 + 3 * this.Ob[a];d += 1.5 * this.Ob[a]) {
        for(var f = 0 === f ? this.$b[a] : 0, h = this.Ea.kc[a] - 2 * this.$b[a] + f;h < 640 + 2 * this.$b[a];h += 2 * this.$b[a]) {
          this.line(d, h, d + this.Ob[a], h), this.line(d, h, d - this.Ob[a] / 2, h + this.$b[a]), this.line(d, h, d - this.Ob[a] / 2, h - this.$b[a])
        }
      }
      this.stroke()
    }
  }});
  gls2.Ni = tm.createClass({superClass:tm.app.Object2D, jc:0, kc:0, direction:0, speed:0, Fa:0, Ga:0, background:l, init:function() {
    this.superInit();
    this.jc = [];
    this.kc = [];
    for(var a = 0;5 > a;a++) {
      this.jc[a] = 240, this.kc[a] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Ga = this.Fa = 0
  }})
})();
gls2.Zf = tm.createClass({superClass:tm.display.Sprite, Xh:s, ca:l, fa:l, Mc:s, pd:s, Ug:s, Fa:0, Ga:0, init:function(b) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.Xh = b) && this.setScale(2, 2);
  this.ca = gls2.Xa.Wd;
  this.fa = this.ca.fa;
  this.addChildTo(this.ca);
  b = 0.5 * gls2.ua.random() * Math.PI - 0.75 * Math.PI;
  this.Fa = 30 * Math.cos(b);
  this.Ga = 30 * Math.sin(b)
}, update:function() {
  this.fa.Wb && (this.pd = j);
  if(this.fa.parent === l) {
    this.pd = s
  }else {
    if(100 > gls2.Lc(this, this.fa)) {
      this.ca.dk(this);
      this.remove();
      return
    }
    1E4 > gls2.Lc(this, this.fa) && (this.pd = j);
    if(this.Ug && this.pd) {
      var b = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);
      this.x += 8 * Math.cos(b);
      this.y += 8 * Math.sin(b)
    }else {
      this.Ug || (this.x += this.Fa, this.y += this.Ga, this.Fa *= 0.8, this.Ga *= 0.8, -1 < this.Fa && (1 > this.Fa && -1 < this.Ga && 1 > this.Ga) && (this.Ug = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.sh = tm.createClass({superClass:gls2.Zf, Mc:s, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.aj = tm.createClass({superClass:gls2.Zf, Mc:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.pd || (this.x += this.ca.ka.Fa, this.y += this.ca.ka.Ga);
  this.superClass.prototype.update.call(this)
}});
gls2.dd = tm.createClass({fa:l, ca:l, $:l, frame:0, init:function(b) {
  this.ca = b;
  this.fa = b.fa;
  this.Sd();
  this.$ = gls2.$i();
  this.frame = 0
}, Sd:B(), update:function() {
  this.Cj(this.frame);
  this.frame += 1
}, Cj:function(b) {
  b = this.$.get(b);
  if(b !== l) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(gls2.eh[b.value] !== i) {
        var a = gls2.eh[b.value];
        if(a !== l) {
          if(a[0].hc === j) {
            this.Dg(a[0])
          }else {
            for(var f = 0;f < a.length;f++) {
              var d = this.Dg(a[f]);
              b.stop && d.addEventListener("enemyconsumed", function() {
                this.$.Vg = s
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Dg:function(b) {
  this.ca.Xe += 1;
  b = b.aa(this.ca, b.ba).setPosition(b.x, b.y).addChildTo(this.ca);
  b.Ae = this;
  b.Od();
  return b
}, be:function(b) {
  gls2.Ze();
  this.ca.he = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), f = -4;4 >= f;f++) {
    for(var d = -4;4 >= d;d++) {
      var h = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(f, d);
      h.na = 0;
      h.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.na) + 0.5;
        this.na += 1
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
  a.addChildTo(this.ca.rg);
  gls2.ta("warning");
  gls2.ta("voWarning")
}});
gls2.dd.create = function(b, a) {
  switch(a) {
    case 0:
      return gls2.Vi(b);
    case 1:
      return gls2.Wi(b);
    case 2:
      return gls2.Xi(b);
    case 3:
      return gls2.Yi(b);
    case 4:
      return gls2.Zi(b);
    default:
      g(Error("stageNumber = " + a))
  }
};
gls2.$i = tm.createClass({index:0, data:l, Vg:s, init:function() {
  this.data = {}
}, add:function(b, a, f) {
  this.index += b;
  this.data[this.index] = {stop:f, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? l : b.stop === j ? (this.Vg = j, b) : this.Vg ? l : b
}});
gls2.Vi = tm.createClass({superClass:gls2.dd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm1", j);
    this.ca.ka.direction = 0.5 * Math.PI;
    this.ca.ka.speed = 8;
    this.ca.ka.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.ca.ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.ca.ka.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.be(function() {
      gls2.Hb("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, Sd:function() {
  this.ca.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.Wi = tm.createClass({superClass:gls2.dd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm2", j);
    this.ca.ka.direction = 0.5 * Math.PI;
    this.ca.ka.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.ca.ka.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.ca.ka.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.ca.ka.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.ca.ka.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.ca.ka.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", j);
  this.$.add(300, "heri2-left");
  for(b = 0;12 > b;b++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.ca.ka.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
      gls2.Hb("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.ca.ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Sd:function() {
  this.ca.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.Xi = tm.createClass({superClass:gls2.dd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm3", j);
    this.ca.ka.direction = 0.5 * Math.PI;
    this.ca.ka.speed = 2;
    this.ca.ka.tweener.clear().to({speed:5}, 4E3, "easeInOutQuad")
  });
  this.$.add(100, "aguri1");
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
    this.ca.ka.tweener.clear().to({speed:7}, 1E3, "easeInOutQuad")
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
    this.ca.ka.tweener.clear().to({speed:4, direction:0}, 3E3, "easeInOutQuad")
  });
  for(b = 0;3 > b;b++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(60, "miyuki_y1");
  this.$.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:4}, 2E3, "easeInOutQuad").to({direction:0.5 * Math.PI}, 2E3, "easeInOutQuad")
  });
  this.$.add(60, "komachi3-0");
  this.$.add(60, "komachi3-0");
  this.$.add(300, "higashi", j);
  this.$.add(300, "nao1-left");
  for(b = 0;8 > b;b++) {
    this.$.add(60, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(100, "alice");
  for(b = 0;3 > b;b++) {
    this.$.add(60, "reika1-left"), this.$.add(60, "reika1-right")
  }
  this.$.add(600, function() {
    this.be(function() {
      gls2.Hb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.ka.direction = Math.PI / 2;
    this.ca.ka.tweener.clear().to({speed:7}, 8E3, "easeInOutQuad")
  });
  this.$.add(480, "momozono")
}, Sd:function() {
  this.ca.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,30%)"}, {offset:1, color:"hsl(30,50%,15%)"}]).toStyle()
}});
gls2.Yi = tm.createClass({superClass:gls2.dd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm4", j);
    this.ca.ka.direction = 0.5 * Math.PI;
    this.ca.ka.speed = 1
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
    this.ca.ka.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(b = 0;6 > b;b++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.ca.ka.speed = 3;
    this.ca.ka.tweener.clear().to({speed:0.3}, 5E3)
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
    this.ca.ka.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.ca.ka.direction = 0.5 * Math.PI;
    this.ca.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", j);
  this.$.add(1200, B());
  for(b = 0;9 > b;b++) {
    this.$.add(50, 0 === b % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:0.6}, 3E3)
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
      gls2.Hb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Sd:function() {
  this.ca.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,15%)"}, {offset:1, color:"hsl(30,50%, 5%)"}]).toStyle()
}});
gls2.Zi = tm.createClass({superClass:gls2.dd, init:function(b) {
  this.superInit(b);
  this.$.add(0, function() {
    gls2.Hb("bgm5", j);
    this.ca.ka.direction = 0.5 * Math.PI;
    this.ca.ka.speed = 1;
    this.ca.ka.fl = j
  });
  this.$.add(150, "urara5-0");
  this.$.add(260, "urara5-2");
  this.$.add(260, "urara5-1");
  this.$.add(380, "nozomi5-1");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(50, "nozomi5-0");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(100, "nozomi5-2");
  this.$.add(20, "tankRD-left");
  this.$.add(25, "tank5-left");
  this.$.add(25, "tank5-center");
  this.$.add(25, "tankRD-left");
  this.$.add(25, "tank5-left");
  this.$.add(25, "tank5-center");
  this.$.add(25, "tankRD-left");
  this.$.add(25, "tank5-left");
  this.$.add(25, "tank5-center");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(25, "heri2-left");
  this.$.add(25, "heri2-center");
  this.$.add(25, "heri2-right");
  this.$.add(200, "mktn5-0");
  this.$.add(60, "heri1-4-left2");
  this.$.add(10, "heri1-4-left1");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-left1");
  this.$.add(10, "heri1-4-left1");
  this.$.add(10, "heri1-4-left2");
  this.$.add(10, "heri1-4-left1");
  this.$.add(300, "mktn5-1");
  this.$.add(60, "heri1-4-right2");
  this.$.add(10, "heri1-4-right1");
  this.$.add(10, "heri1-4-right2");
  this.$.add(10, "heri1-4-right1");
  this.$.add(10, "heri1-4-right1");
  this.$.add(10, "heri1-4-right2");
  this.$.add(10, "heri1-4-right1");
  this.$.add(300, "urara5-2");
  this.$.add(300, "urara5-3");
  this.$.add(260, "urara5-0");
  this.$.add(260, "urara5-1");
  this.$.add(260, "urara5-4");
  this.$.add(260, "urara5-5");
  this.$.add(200, "milk5-0");
  this.$.add(1, "itsuki-2");
  this.$.add(300, "milk5-1");
  this.$.add(1, "itsuki-0");
  this.$.add(350, "komachi5-0");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right1");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right1");
  this.$.add(80, "komachi5-2");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(80, "komachi5-1");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center1");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center1");
  this.$.add(100, "komachi5-0");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right1");
  this.$.add(30, "heri1-4-right2");
  this.$.add(30, "heri1-4-right1");
  this.$.add(120, "komachi5-2");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(30, "heri1-4-left2");
  this.$.add(30, "heri1-4-left1");
  this.$.add(160, "komachi5-1");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center1");
  this.$.add(30, "heri1-4-center2");
  this.$.add(30, "heri1-4-center1");
  this.$.add(450, "ako5-0");
  this.$.add(250, "ako5-1");
  this.$.add(3E3, function() {
    this.be(function() {
      gls2.Hb("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.ca.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Sd:function() {
  this.ca.ka.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 20%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {Ld:function(b, a) {
  if(b.parent === l || a.parent === l) {
    return s
  }
  var f = b.x + b.boundingWidthRight, d = b.y - b.boundingHeightTop, h = b.y + b.boundingHeightBottom, m = a.x - a.boundingWidthLeft, q = a.y - a.boundingHeightTop, w = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && f > m && d < w && h > q
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Bk:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, draw:function(b) {
  b.globalCompositeOperation = "source-over";
  this.od(b)
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
gls2.Gi = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:s, title:l, selections:[], description:l, box:l, cursor:l, Fg:l, _selected:0, _opened:s, _finished:s, init:function(b, a, f) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~f.defaultValue;
  this.showExit = f.showExit;
  this.descriptions = f.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Fg = f.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Fg !== l && this.parent.Fg(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.ta("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.la.clamp(this._selected, 0, this.selections.length - 1), gls2.ta("select")) : 
  b.keyboard.getKeyDown("up") && (this._selected -= 1, this._selected = gls2.la.clamp(this._selected, 0, this.selections.length - 1), gls2.ta("select")))
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
}, od:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function T(b, a, f, d, h) {
  h = {}.$extend({menuDescriptions:[].concat(f), showExit:j, defaultValue:0, onCursorMove:B()}, h);
  b.Bk(gls2.Gi(a, f, h), d)
}
;gls2.Ua = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, hg:0.85, size:0, image:l, mb:j, init:function(b, a, f, d) {
  this.superInit();
  this.width = this.height = this.size = b;
  this.alpha = a !== i ? a : 1;
  this.hg = f !== i ? f : 0.85;
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.hg;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Ua(this.size, this.Uk, this.hg, this.image)
}});
gls2.$g = tm.createClass({superClass:gls2.Ua, ka:l, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.ka = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.ka.Fa;
  this.y += this.ka.Ga + 0.3
}, clone:function(b) {
  return gls2.$g(this.ka, b)
}});
gls2.Ei = tm.createClass({width:0, label:l, Cb:l, na:0, ki:0, Ng:0, init:function(b) {
  this.width = b;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Cb = [];
  this.ki = 480 - this.width - 5;
  this.Ng = 5
}, qj:function(b, a) {
  a === j && (this.Cb.clear(), this.Cb.push(""));
  5 < this.Cb.length && this.Cb.splice(1, this.Cb.length - 4);
  this.Cb.push(b);
  return this
}, uj:function() {
  this.Cb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.Cb.length) {
    if("" !== this.Cb[0]) {
      var a = this.Cb[0][0];
      this.Cb[0] = this.Cb[0].substring(1);
      b += a
    }else {
      this.Cb.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.na % 2 ? "_" : " ");
  this.na += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.ki, this.Ng);
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
gls2.Qc = {noise:l, Oj:function(b) {
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
gls2.Qc.noise = gls2.Qc.Oj(512);
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
gls2.Za = l;
gls2.Hb = function(b, a, f) {
  a || gls2.Be();
  a = tm.asset.AssetManager.get(b);
  var d = tm.asset.AssetManager.get("bgmLoopInfo");
  a && (gls2.Za = a.clone(), gls2.Za.volume = 0.1 * gls2.core.de, gls2.Za.loop = !f, gls2.Za.play(), d.data[b] && (gls2.Za.source.loopStart = d.data[b].start, gls2.Za.source.loopEnd = d.data[b].end))
};
gls2.Be = function() {
  gls2.Za !== l && gls2.Za.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.Za.stop()
};
gls2.Ze = function() {
  if(gls2.Za !== l) {
    var b = gls2.Za;
    gls2.Za = l;
    b.loop = s;
    var a = function() {
      b.volume -= 0.001;
      0 >= b.volume ? b.bl === AudioBufferSourceNode.PLAYING_STATE && b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
gls2.ta = function(b) {
  if(0 !== gls2.core.td && gls2.ta.played[b] !== gls2.core.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * gls2.core.td, gls2.ta.Yg !== l && gls2.ta.Yg.stop(), gls2.ta.Yg = a) : a.volume = 0.1 * gls2.core.td);
    gls2.ta.played[b] = gls2.core.frame
  }
};
gls2.ta.played = {};
gls2.ta.Yg = l;
(function() {
  var b = l, a = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, na:0, te:[], af:s, Sh:l, Zh:0, hf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Sh = tm.display.Label().setPosition(240, 256);
    tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.af = s;
      this.Fk()
    })
  }, Fk:function() {
    for(var a = ("" + Math.floor(gls2.core.le)).padding(16, " "), b = "", h = 0;h < a.length;h += 4) {
      b += a.substring(h, h + 4) + " "
    }
    this.Sh.text = "HIGH SCORE: " + b.trim()
  }, od:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.vh(80 * Math.cos(0.01 * this.na) + 240, 80 * Math.sin(0.01 * this.na) + 320, 0);
    this.vh(80 * Math.cos(0.01 * this.na + Math.PI) + 240, 80 * Math.sin(0.01 * this.na + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.af && this.hi();
    this.na += 1
  }, vh:function(f, d, h) {
    if(!this.af) {
      b === l && (b = gls2.Ua(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === l && (a = gls2.Ua(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      h = 0 === h ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      h.speed = 0.6;
      var m = gls2.la.randf(0, 2 * Math.PI), q = gls2.la.rand(0, 20);
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
  }, hi:function() {
    T(this, "MAIN MENU", ["start", "setting"], this.jk, {defaultValue:this.Zh, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, jk:function(a) {
    2 !== a && (this.Zh = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.af = j;
          for(var a = 0, b = this.te.length;a < b;a++) {
            this.te[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.Ui())
        }.bind(this));
        break;
      case 1:
        this.Vc()
    }
  }, Vc:function() {
    T(this, "SETTING", ["bgm volume", "sound volume"], this.Jg, {defaultValue:this.hf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Jg:function(a) {
    3 !== a && (this.hf = a);
    switch(a) {
      case 0:
        this.Kg();
        break;
      case 1:
        this.Lg();
        break;
      default:
        this.hi()
    }
  }, Kg:function() {
    T(this, "BGM VOLUME", "012345".split(""), this.Hg, {defaultValue:gls2.core.de, onCursorMove:function(a) {
      gls2.Za !== l && "exit" !== a && (gls2.Za.volume = 0.1 * a)
    }, showExit:s})
  }, Hg:function(a) {
    6 !== a && (gls2.core.de = a);
    this.Vc()
  }, Lg:function() {
    T(this, "SE VOLUME", "012345".split(""), this.Ig, {defaultValue:gls2.core.td, showExit:s})
  }, Ig:function(a) {
    6 !== a && (gls2.core.td = a);
    this.Vc()
  }, al:function() {
    T(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.ik, {defaultValue:gls2.core.Jh, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, ik:function(a) {
    5 !== a && (gls2.core.Jh = a);
    this.Vc()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.Ui = tm.createClass({superClass:gls2.Scene, mode:0, types:l, sf:l, dc:l, ec:l, fc:l, Ag:l, yg:l, type:0, style:0, hd:s, lf:s, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.vk();
    this.sf = this.uk();
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
    this.sf.visible = s;
    this.Eg(-1, j);
    this.dc.update();
    this.ec.update();
    this.fc.update();
    gls2.ta("voSelectShip");
    gls2.Hb("bgmShipSelect", j)
  }, vk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.Ag = tm.display.Label("Type-A").setPosition(240, 150);
    this.Ag.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.Bg = tm.display.Label(b[0], 16).setPosition(240, 500);
    this.Bg.update = function() {
      this.Bg.text = b[this.type]
    }.bind(this);
    this.Bg.addChildTo(a);
    var d = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.dc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.ec = tm.display.AnimationSprite(d, 64, 64).gotoAndPlay("typeB");
    this.fc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.dc.gb = 0;
    this.ec.gb = 1;
    this.fc.gb = 2;
    this.dc.setScale(3).setPosition(0, 320).addChildTo(a);
    this.ec.setPosition(0, 320).addChildTo(a);
    this.fc.setPosition(0, 320).addChildTo(a);
    this.dc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.gb / 3 * Math.PI)
    };
    this.ec.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.gb / 3 * Math.PI)
    };
    this.fc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.gb / 3 * Math.PI)
    };
    return a
  }, uk:function() {
    var a = tm.display.CanvasElement();
    a.addChildTo(this);
    this.yg = tm.display.Label("Shot Style").setPosition(240, 150);
    this.yg.addChildTo(a);
    this.Zc = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.wc = tm.app.Object2D();
    this.wc.addChildTo(this.Zc);
    this.wc.update = function(a) {
      this.wc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
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
    this.Zc.line = b(0, 0, 0, 130, 8);
    this.Zc.line.addChildTo(this.Zc);
    this.ya.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.wc)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.zg = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.zg.update = function() {
      this.zg.text = f[this.style]
    }.bind(this);
    this.zg.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.sf.visible = s, !this.lf && a.keyboard.getKeyDown("left")) {
        this.Eg(-1, s), gls2.ta("select")
      }else {
        if(!this.lf && a.keyboard.getKeyDown("right")) {
          this.Eg(1, s), gls2.ta("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, gls2.ta("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.sf.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, gls2.ta("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.hd = j, this.gi(), gls2.ta("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Gk(0 === ~~(a.frame / 60) % 2))
    }
  }, $k:function() {
    T(this, "AUTO BOMB", ["on", "off"], this.ek, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, ek:function(a) {
    2 !== a && (this.hd = 0 === a, this.gi())
  }, gi:function() {
    T(this, "ARE YOU READY?", ["ok"], this.fk, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, fk:function(a) {
    0 === a && this.yk()
  }, Eg:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.dc, this.ec, this.fc][this.type].remove().addChildTo(this.types);
    b ? (this.dc.gb -= a, this.dc.scaleX = 0 === this.type ? 5 : 1, this.dc.scaleY = 0 === this.type ? 5 : 1, this.ec.gb -= a, this.ec.scaleX = 1 === this.type ? 5 : 1, this.ec.scaleY = 1 === this.type ? 5 : 1, this.fc.gb -= a, this.fc.scaleX = 2 === this.type ? 5 : 1, this.fc.scaleY = 2 === this.type ? 5 : 1) : (this.lf = j, this.dc.tweener.clear().to({gb:this.dc.gb - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.ec.tweener.clear().to({gb:this.ec.gb - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.fc.tweener.clear().to({gb:this.fc.gb - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.lf = s
    }.bind(this)));
    this.Ag.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, yk:function() {
    gls2.core.ca.hd = this.hd;
    gls2.core.replaceScene(gls2.core.ca);
    gls2.core.ca.start(this.type, this.style);
    gls2.Ze()
  }, Gk:function(a) {
    this.yg.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    1 === this.style ? (this.Zc.line.mc = s, this.ya[0].line.mc = s, this.ya[1].line.mc = s, this.ya[2].line.mc = s, this.ya[3].line.mc = s) : (this.Zc.line.mc = j, this.ya[0].line.mc = j, this.ya[1].line.mc = j, this.ya[2].line.mc = j, this.ya[3].line.mc = j);
    a ? (this.ya[0].visible = j, this.ya[1].visible = j, 1 === this.style ? (this.ya[2].visible = s, this.ya[3].visible = s) : (this.ya[2].visible = j, this.ya[3].visible = j), this.Zc.line.lineWidth = 5) : (this.ya.each(function(a) {
      a.visible = s
    }), this.Zc.line.lineWidth = 0 === this.style ? 10 : 25)
  }, od:B()});
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
gls2.Xa = tm.createClass({superClass:gls2.Scene, fa:l, score:0, Jc:0, lb:0, Oa:0, pe:0, eb:0, Sc:0, Ib:0, Ae:l, ka:l, ad:3, pf:0, qf:0, Dc:0, Xe:0, qe:0, kf:0, hd:s, Lb:0, ld:0, Ah:0, qd:s, gf:s, Cc:0, Fb:0, Ka:s, ne:0, Kd:0, Sa:0, nd:0, Tk:0, Sk:0, df:l, Nh:l, Mg:l, Kh:l, qg:l, rg:l, kg:l, Vh:l, Zb:l, Pb:l, hc:l, he:s, ak:s, rj:0, Qd:l, init:function() {
  gls2.Xa.Wd !== l && g(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.Xa.Wd = this;
  this.Pb = gls2.Ti(this);
  this.Pb.zb.addChildTo(this);
  this.ka = gls2.Mi().Ea;
  this.ka.addChildTo(this);
  this.df = gls2.Xa.Layer().addChildTo(this);
  this.Nh = gls2.Xa.Layer().addChildTo(this);
  this.Kh = gls2.Xa.Layer().addChildTo(this);
  this.qg = gls2.Xa.Layer().addChildTo(this);
  this.Mg = gls2.Xa.Layer().addChildTo(this);
  this.rg = gls2.Xa.Layer().addChildTo(this);
  this.kg = gls2.Xa.Layer().addChildTo(this);
  this.Vh = gls2.Xa.hh(this).addChildTo(this);
  tm.Db.bd.ge.yh = this;
  this.Zb = tm.app.Object2D();
  this.Zb.addChildTo(this);
  this.Zb.update = function(b) {
    this.mk(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.Pb.clear()
  })
}, addChild:function(b) {
  b.mb ? this.qg.addChild(b) : b instanceof gls2.Ma ? this.kg.addChild(b) : b instanceof gls2.Zf ? this.df.addChild(b) : b instanceof gls2.ga ? b.Mc ? this.df.addChild(b) : this.Kh.addChild(b) : b instanceof gls2.ph ? this.Mg.addChild(b) : b === this.Zb || b === this.ka || b instanceof gls2.Xa.Layer || b instanceof gls2.Xa.hh || b instanceof gls2.qh || b instanceof gls2.gh ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), g(Error(b)))
}, update:function(b) {
  this.sk(b.keyboard);
  this.Ae.update(b.frame);
  0 === b.frame % 2 && this.Pb.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(gls2.TitleScene()), gls2.Be()) : b.keyboard.getKeyDown("space") ? this.se(0) : b.keyboard.getKeyDown("p") && (this.Tg().saveAsImage(), this.se(0))
}, Tg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.ka.ka.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.Pb.element, 0, 0);
  return b
}, mk:function(b) {
  this.fa.yc === s && gls2.ha.erase();
  var a;
  a = [].concat(gls2.ga.kb);
  for(var f = [].concat(gls2.Dd.kb), d = f.length;f[--d] !== i;) {
    for(var h = a.length;a[--h] !== i;) {
      var m = a[h], q = f[d];
      if(!(0 >= m.sa) && gls2.Collision.Ld(m, q) && (q.bf(1), q.remove(), m.Kc(q.gd))) {
        this.Dc += 1;
        this.Ka ? this.Bb(0) : this.Bb(0.005);
        this.Gg(m);
        break
      }
    }
  }
  q = this.fa.Yb;
  if(this.fa.Wb) {
    a = [].concat(gls2.ga.kb);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(h = a.length;a[--h] !== i;) {
      if(m = a[h], !(0 >= m.sa) && gls2.Collision.Ld(m, q)) {
        q.tk(m.y + m.boundingHeightBottom);
        m.Kc(q.gd) ? (this.Dc += 1, this.Ka ? this.Bb(0) : this.Bb(0.01), this.Gg(m)) : (this.eb = Math.min(this.eb + 0.02, 1), this.Ka ? (this.Ed(0.01 * S[this.nd]), this.Bb(0)) : (this.Ed(0.01), this.Bb(0.001)));
        q.bf(2);
        break
      }
    }
    f = {x:this.fa.x, y:this.fa.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(gls2.ga.kb);
    for(h = a.length;a[--h] !== i;) {
      m = a[h], !(0 >= m.sa) && gls2.Collision.Ld(m, f) && (m.Kc(q.gd) ? (this.Dc += 1, this.Ka ? this.Bb(0.03) : this.Bb(0.015), this.Gg(m)) : (this.eb = Math.min(this.eb + 0.02, 1), this.Ka ? (this.Ed(0.01 * S[this.nd]), this.Bb(0.004)) : (this.Ed(0.01), this.Bb(0.002))), q.Lj(2, this.fa.x, this.fa.y - 30))
    }
  }
  if(this.qd) {
    gls2.ha.erase();
    a = [].concat(gls2.ga.kb);
    for(h = a.length;a[--h] !== i;) {
      m = a[h], !(0 >= m.sa) && (m.Nb() && m.Kc(2)) && (this.fd(m.score), this.Dc += 1)
    }
    this.eb = this.Oa = 0
  }
  if(this.Ka) {
    h = [].concat(gls2.Dd.kb);
    for(m = h.length;h[--m] !== i;) {
      if(q = h[m], !(0 >= q.sa)) {
        f = [].concat(gls2.Ma.kb);
        for(a = f.length;f[--a] !== i;) {
          d = f[a], d.visible !== s && (0 < q.sa && gls2.Collision.Ld(q, d)) && (d.sa -= 6 - this.Fb, 0 > d.sa && (d.Aa(), this.fd(10), this.Ed(1), this.Rh(s, s, d.x, d.y, 1)), q.sa -= 1)
        }
      }
    }
  }
  if(this.he) {
    gls2.ha.erase()
  }else {
    if(this.fa.parent !== l && this.fa.Nd === s && this.qd === s && 0 >= this.ne) {
      for(h = gls2.Ma.kb.length;gls2.Ma.kb[--h] !== i;) {
        if(a = gls2.Ma.kb[h], a.visible !== s && gls2.Collision.Ld(a, this.fa)) {
          this.fa.Kc();
          0 < this.Lb && this.hd ? (this.Fb = gls2.la.clamp(this.Fb - 1, 0, 1), this.$d(-0.01), gls2.mh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this), gls2.core.xa("bomb2")) : this.di();
          break
        }
      }
      for(h = gls2.ga.kb.length;gls2.ga.kb[--h] !== i;) {
        if(m = gls2.ga.kb[h], !(0 >= m.sa) && !m.Mc && gls2.Collision.Ld(m, this.fa)) {
          this.fa.Kc();
          0 < this.Lb && this.hd ? (this.Fb = gls2.la.clamp(this.Fb - 1, 0, 1), this.$d(-0.01), gls2.mh(this.fa, this).setPosition(this.fa.x, this.fa.y).addChildTo(this), gls2.core.xa("bomb2")) : this.di();
          break
        }
      }
    }
    this.Ka && (this.Kd -= 1, 0 >= this.Kd && this.We());
    this.ne = Math.max(this.ne - 1, 0);
    this.eb -= 0.01;
    0 >= this.eb && (this.eb = 0, this.Ka || 0 < this.Sa ? this.Sc = this.Oa = this.lb = 0 : (0 < this.Oa && (0 >= this.Sc && (this.Sc = 0.005 * this.Oa), this.lb = this.lb * (this.Oa - this.Sc) / this.Oa, this.Oa -= this.Sc), 0 >= this.Oa && (this.Sc = this.Oa = this.lb = 0)));
    this.gf && (this.score += 100);
    q = gls2.Ma.kb.length;
    b.fps = 500 < q ? Math.floor(60 * gls2.la.clamp(500 / q, 0.2, 1)) : 60
  }
}, Gg:function(b) {
  this.Rh(b.Mc, this.Ka || 22500 > gls2.Lc(b, this.fa), b.x, b.y, b.star, b instanceof gls2.yd);
  this.Ed(S[this.nd]);
  for(var a = this.lb, f = ~~(this.Oa / 1E3) + 1, d = 0;d < f;d++) {
    a += b.score, this.fd(a)
  }
  this.lb += b.score * f
}, Rh:function(b, a, f, d, h, m) {
  b = b ? gls2.aj : gls2.sh;
  for(var q = 0;q < h;q++) {
    var w = b(a);
    w.setPosition(f, d);
    m && (w.pd = j)
  }
}, dk:function(b) {
  gls2.ta("star");
  b.Xh ? (this.qf += 1, this.lb += 1E3, this.fd(1E3 + 0 * this.lb), this.Ka ? this.Bb(0) : this.Bb(0.01)) : (this.pf += 1, this.lb += 100, this.fd(100 + 0 * this.lb), this.Ka ? this.Bb(0) : this.Bb(0.001))
}, start:function(b, a) {
  this.Pb.Gd.uj().clear();
  this.Jc = this.score = 0;
  this.ad = 3;
  this.Lb = this.ld = P[a];
  this.Ah = Q[a];
  this.Sa = this.Fb = this.Cc = 0;
  this.We();
  this.qd = s;
  this.rj = this.qe = this.kf = 0;
  this.fa = gls2.ph(this, b, a);
  this.Sg(0);
  I.Ra.Xb.$ex = 2 !== a ? 0 : 1;
  this.qi(0);
  gls2.ta("voLetsGo");
  this.Ak();
  0 === b ? gls2.core.xa("launch0") : 1 === b ? gls2.core.xa("launch1") : 2 === b && gls2.core.xa("launch2")
}, qi:function(b) {
  this.xb("3...2...1...");
  this.fa.parent !== l && this.fa.remove();
  gls2.ga.ee();
  gls2.Dd.ee();
  gls2.ha.ee();
  this.df.removeChildren();
  this.qg.removeChildren();
  this.rg.removeChildren();
  this.Mg.removeChildren();
  this.kg.removeChildren();
  this.Zb.removeChildren();
  this.Dc = this.Xe = this.qf = this.pf = this.pe = this.eb = this.Oa = this.lb = 0;
  this.hc = l;
  this.ak = this.he = s;
  this.qe = 0;
  this.Pb.zb.ke = 0;
  this.Fb = this.Pb.zb.Ac = 0;
  this.Ib = b;
  this.Ae = gls2.dd.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.Cg()
  }.bind(this));
  this.ka.tweener.clear()
}, Cg:function() {
  this.xb("Let's go!");
  this.fa.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.fa.Yb.addChildTo(this);
  this.fa.yc = s;
  this.fa.Nd = j;
  this.fa.Jd = s;
  this.fa.Wb = s;
  this.fa.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.ce = this.yc = j
  }.bind(this.fa)).wait(3E3).call(function() {
    this.Nd = s
  }.bind(this.fa))
}, di:function() {
  gls2.oa.Ye(this.fa.x, this.fa.y, this);
  this.xb("I was shot down.");
  this.fa.yc = s;
  this.fa.remove();
  this.ad -= 1;
  this.Sa = this.Sc = this.Oa = this.eb = 0;
  this.qe += 1;
  this.kf += 1;
  this.Fb = gls2.la.clamp(this.Fb - 3, 0, 1);
  this.$d(-0.03);
  0 < this.ad ? this.tweener.clear().wait(1E3).call(function() {
    this.Lb = this.ld = Math.min(this.ld + 1, this.Ah);
    this.Cg()
  }.bind(this)) : (this.Qd = this.Tg().canvas.toDataURL("image/png"), gls2.core.le === this.score && (gls2.core.Tj = this.Qd), this.tweener.clear().wait(2E3).call(function() {
    this.Jc < gls2.core.Ch() ? this.pk() : this.Qh()
  }.bind(this)))
}, Sg:function(b) {
  I.Ra.Xb.$rank = gls2.la.clamp(b, 0, 0.5)
}, $d:function(b) {
  this.Sg(I.Ra.Xb.$rank + b)
}, Kj:function() {
  this.xb("System rebooted.", j);
  this.score = 0;
  this.Jc += 1;
  this.ad = 3;
  this.Lb = this.ld = P[this.fa.style];
  this.Fb = 0;
  this.Sg(0);
  this.Cg()
}, vj:function() {
  gls2.Hb("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.Zb);
  b.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.Tg()));
    b.remove()
  }.bind(this))
}, Qh:function() {
  gls2.Be();
  this.app.replaceScene(gls2.fh())
}, Qk:B(), fd:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < M.length;b++) {
    var f = M[b];
    a < f && f <= this.score && (this.Lh(), 0 == b && this.app.xa("extend1"), 1 == b && this.app.xa("extend2"))
  }
  gls2.core.le = Math.max(gls2.core.le, this.score);
  gls2.core.le === this.score && (gls2.core.Uj = this.Ib, gls2.core.Wj = this.fa.type, gls2.core.Vj = this.fa.style, gls2.core.Sj = this.Jc);
  1E8 <= this.score && gls2.core.xa("score100M");
  2E9 <= this.score && gls2.core.xa("score2G");
  2E10 <= this.score && gls2.core.xa("score20G");
  5E10 <= this.score && gls2.core.xa("score50G");
  1E11 <= this.score && gls2.core.xa("score100G");
  1E12 <= this.score && gls2.core.xa("score1T")
}, Ed:function(b) {
  this.Sc = 0;
  this.Oa += b;
  this.pe = Math.max(this.pe, this.Oa);
  1 <= b && (this.eb = 1);
  100 <= this.Oa && this.app.xa("combo100");
  1E3 <= this.Oa && this.app.xa("combo1000");
  1E4 <= this.Oa && this.app.xa("combo10000");
  1E5 <= this.Oa && this.app.xa("combo100000")
}, Bb:function(b) {
  if(10 !== this.Sa) {
    for(b *= 0.75;1 < b;) {
      gls2.Af(this.fa).addChildTo(this), b -= 1, this.Cc = 0, this.Sa += 1, 1 === this.Sa ? (this.xb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.xb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady"))
    }
    this.Cc = gls2.la.clamp(this.Cc + b, 0, 1);
    1 <= this.Cc && (gls2.Af(this.fa).addChildTo(this), this.Sa += 1, this.Cc -= 1, 1 === this.Sa ? (this.xb("HYPER SYSTEM, stand by.", j), gls2.ta("voHyperStandBy")) : (this.xb("HYPER SYSTEM, ready.", j), gls2.ta("voHyperReady")))
  }
}, zk:function() {
  0.5 > Math.random() ? (this.xb("HYPER SYSTEM start!!", j), gls2.ta("voHyperStart0")) : (this.xb("start counting to system limit.", j), gls2.ta("voHyperStart1"));
  this.Fb = gls2.la.clamp(this.Fb + 1, 0, 5);
  this.$d(0.01 * this.Sa);
  I.Ra.Xb.$hyperOff = 0.5 * (2 !== this.fa.style ? 1 : 0.5);
  this.Kd = 800;
  this.ne = 200;
  this.fa.ef.Rd(this.Sa);
  this.fa.Yb.Rd(this.Sa);
  this.fa.Hd = this.fa.ef;
  gls2.oa.Mj(this.fa.x, this.fa.y, this);
  this.Ka = j;
  this.nd = this.Sa;
  this.Cc = this.Sa = 0;
  gls2.ha.erase(j, j);
  this.app.xa("hyper1");
  10 == this.nd && this.app.xa("hyper10")
}, We:function() {
  this.Ka !== s && (this.Ka = s, gls2.Af(this.fa, j).addChildTo(this), this.fa.Hd = this.fa.fi, I.Ra.Xb.$hyperOff = 1 * (2 !== this.fa.style ? 1 : 0.5), this.fa.ef.Rd(0), this.fa.Yb.Rd(0), this.ne = 80, this.nd = this.Kd = 0, gls2.ha.erase())
}, pj:function() {
  gls2.ta("decision");
  gls2.ta("voGetBomb");
  this.Lb = Math.min(this.Lb + 1, this.ld);
  this.gf = this.Lb === this.ld
}, Lh:function() {
  gls2.ta("voExtend");
  this.xb("extended.");
  this.ad += 1
}, xb:function(b, a) {
  this.Pb.Gd.qj(b, a)
}, se:function(b) {
  T(this, "PAUSE", ["resume", "setting", "exit game"], this.lk, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:s})
}, lk:function(b) {
  switch(b) {
    case 1:
      this.Vc();
      break;
    case 2:
      this.ok()
  }
}, Vc:function() {
  T(this, "SETTING", ["bgm volume", "sound volume"], this.Jg, {defaultValue:this.hf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Jg:function(b) {
  3 !== b && (this.hf = b);
  switch(b) {
    case 0:
      this.Kg();
      break;
    case 1:
      this.Lg();
      break;
    default:
      this.se()
  }
}, ok:function() {
  T(this, "REARY?", ["yes", "no"], this.gk, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:s})
}, gk:function(b) {
  0 === b ? (gls2.Be(), this.app.replaceScene(gls2.TitleScene())) : this.se(1)
}, Kg:function() {
  T(this, "BGM VOLUME", "012345".split(""), this.Hg, {defaultValue:gls2.core.de, onCursorMove:function(b) {
    gls2.Za !== l && 6 !== b && (gls2.Za.volume = 0.1 * b)
  }, showExit:s})
}, Hg:function(b) {
  6 !== b && (gls2.core.de = b);
  this.Vc(1)
}, Lg:function() {
  T(this, "SE VOLUME", "012345".split(""), this.Ig, {defaultValue:gls2.core.td, showExit:s})
}, Ig:function(b) {
  6 !== b && (gls2.core.td = b);
  this.Vc(1)
}, pk:function() {
  T(this, "CONTINUE? (" + this.Jc + "/" + gls2.core.Ch() + ")", ["yes", "no"], this.hk, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:s})
}, hk:function(b) {
  switch(b) {
    case 0:
      this.Kj();
      break;
    case 1:
      this.Qh()
  }
}, od:B(), wk:function() {
  this.Pb.zb.tweener.clear().to({ke:-480}, 1600, "easeInBack").to({Ac:30}, 800, "easeInOutBack")
}, Rj:function() {
  this.Pb.zb.tweener.clear().to({Ac:0}, 800, "easeInOutBack").to({ke:0}, 1600, "easeOutBack")
}, we:l, xe:0, oe:l, Ie:0, Ak:function() {
  if(1 === this.Ie) {
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
    if(2 === this.Ie && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.oe = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var f = localStorage.getItem("rec" + a).split(","), d = 0;d < f.length;d++) {
          this.oe.push(f[d])
        }
      }
    }
  }
}, sk:function(b) {
  if(1 === this.Ie) {
    1E3 < this.we.length && (console.log("save"), localStorage.setItem("rec" + this.xe, this.we), localStorage.setItem("recCount", this.xe), this.we = [], this.xe += 1), this.we.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.Ie && this.oe) {
      var a = this.oe.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : s
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : s
      })
    }
  }
}});
gls2.Xa.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.Xa.hh = tm.createClass({superClass:tm.display.CanvasElement, ca:l, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.yj(b);
  this.zj(b)
}, yj:function(b) {
  if(0 < this.ca.eb) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.eb) + "," + ~~Math.min(255, 512 * this.ca.eb) + ",0.5)";
    var a = 500 * this.ca.eb;
    b.fillRect(465, 635 - a, 10, a)
  }
}, zj:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  10 === this.Sa ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.Cc && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.Cc, 9))
}});
gls2.Xa.Wd = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, ca:l, Qd:l, Zb:l, values:l, labels:l, ff:l, li:[1E3, 2E3, 4E3, 1E4, 1], Wh:l, Pg:l, cursor:0, wait:0, frame:0, init:function(b, a) {
  this.superInit();
  this.ca = b;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.ca.pf, this.ca.qf, ~~(100 * (this.ca.Dc / this.ca.Xe)), this.ca.pe, 0 === this.ca.qe ? 2E7 : 0];
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
  this.Wh = tm.display.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.Pg = tm.display.Label("press space key").setPosition(240, 576).addChildTo(this);
  this.Pg.visible = s;
  this.Qd = a;
  for(var d = [], f = 0;12 > f;f++) {
    d[f] = [];
    for(var h = 0;16 > h;h++) {
      d[f][h] = {Qg:0, Yc:0, Oc:gls2.la.randf(-2, 2), nc:gls2.la.randf(1, 4)}
    }
  }
  this.Zb = tm.app.Object2D();
  this.Zb.draw = function(a) {
    a.save();
    for(var b = j, f = 0;f < d.length;f++) {
      for(var h = 0;h < d[f].length;h++) {
        var n = d[f][h];
        640 > 40 * h + n.Yc && (a.drawImage(this.Qd.element, 40 * f, 40 * h, 40, 40, 40 * f + n.Qg, 40 * h + n.Yc, 40, 40), n.Qg += n.Oc, n.Yc += n.nc, n.nc += 0.3, b = s)
      }
    }
    this.wait = 60;
    b && this.Zb.remove();
    a.restore()
  }.bind(this);
  this.Zb.addChildTo(this);
  this.on("enter", function() {
    0 === this.ca.kf && 0 === this.ca.Jc && (0 === this.ca.Ib ? gls2.core.xa("nomiss1") : 1 === this.ca.Ib ? gls2.core.xa("nomiss2") : 2 === this.ca.Ib ? gls2.core.xa("nomiss3") : 3 === this.ca.Ib ? gls2.core.xa("nomiss4") : 4 === this.ca.Ib && gls2.core.xa("nomiss5"))
  });
  this.on("exit", function() {
    gls2.Ze()
  })
}, update:function(b) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var a = this.cursor;
    if(a < this.values.length) {
      gls2.ta("star"), this.values[a] <= this.ff[a] || b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.ca.fd(this.values[a] * this.li[a]), this.values[a] = 0, this.cursor += 1, this.wait = 30) : (this.ca.fd(this.ff[a] * this.li[a]), this.values[a] -= this.ff[a]), this.labels[a].text = "" + Math.floor(this.values[a]) + (2 === a ? "%" : ""), this.Wh.text = Math.floor(this.ca.score)
    }else {
      if(this.Pg.visible = j, b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") || 1800 < this.frame) {
        gls2.ta("decision"), 5 == this.ca.Ib + 1 ? b.replaceScene(gls2.Ii()) : (this.ca.qi(this.ca.Ib + 1), b.replaceScene(this.ca))
      }
    }
    this.frame += 1
  }
}, od:B()});
gls2.fh = tm.createClass({superClass:gls2.Scene, na:0, ii:s, init:function() {
  this.superInit();
  var b = tm.display.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.on("enter", function() {
    gls2.Hb("gameover")
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || 300 == this.na && !this.ii) && this.mf();
  this.na += 1
}, od:function(b) {
  b.clearColor("black")
}, ue:s, wait:s, Rg:l, mf:function() {
  if(!this.wait) {
    this.ii = j;
    var b = ["save score", "tweet result", "back to title"], a = ["\u30b9\u30b3\u30a2\u3092\u30e9\u30f3\u30ad\u30f3\u30b0\u30b5\u30fc\u30d0\u30fc\u3078\u9001\u4fe1\u3057\u307e\u3059", "\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"];
    this.ue && (b.shift(), a.shift());
    T(this, "GAME OVER", b, this.kk, {defaultValue:this.ue ? 1 : 0, menuDescriptions:a, showExit:s})
  }
}, kk:function(b) {
  this.ue && (b += 1);
  0 === b ? this.ue || (this.wait = j, this.app.Og(l, function(a, b, d) {
    this.wait = s;
    a ? this.qk(a) : b ? (this.ue = j, this.Rg = d, this.rk()) : this.mf()
  }.bind(this))) : 1 === b ? this.Ek() : this.app.replaceScene(gls2.TitleScene())
}, rk:function() {
  T(this, "SUCCESS!", ["ok"], function() {
    this.mf()
  }, {menuDescriptions:["\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:s})
}, qk:function() {
  T(this, "ERROR!", ["ok"], function() {
    this.mf()
  }, {menuDescriptions:["\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:s})
}, Ek:function() {
  var b = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({score:Math.floor(this.app.ca.score), stage:5 > this.app.ca.Ib ? "Stage" + (this.app.ca.Ib + 1) : "ALL", type:"ABC"[this.app.ca.fa.type], style:["S", "L", "EX"][this.app.ca.fa.style], cont:this.app.ca.Jc}), b = tm.social.Twitter.createURL({type:"tweet", text:b, hashtags:"tmshooter", url:this.Rg ? window.location.origin + "/ranking/" + this.Rg : window.location.origin});
  window.open(b, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
(function() {
  var b = "TM-Shooter;2D 'DANMAKU' Shooter on HTML5;;MUSIC;Underworld (select)  by  delf;Feel the universe (stage1)  by  delf;Herod (boss)  by  \u6dbc\u3005;Re-Birth (clear)  by  delf;Remenber (stage2)  by  Ryo;THE NEW CHALLENGER freeVer. (stage3)  by  delf;Aegis (stage4)  by  \u5cf6\u767d;Ancien Ocean (stage5)  by  delf;\u84bc\u3044\u6708 (ending)  by  delf;;SOUND;kouichi_axis (\u9b54\u738b\u9b42);on_jin (\u97f3\u4eba);;GAME ENGINE (tmlib.js);phi_jp;;PROGRAM AND GRAPHICS;minimo(stage3);daishi_hmr;;special respect to...;DODONPACHI series by CAVE;PRECURE series by TOEI;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!".split(";");
  gls2.Ii = tm.createClass({superClass:gls2.Scene, ka:l, fa:l, labels:l, pi:s, speed:0, Mh:s, ai:l, init:function() {
    this.superInit();
    this.ai = tm.display.CanvasElement().addChildTo(this);
    this.ka = gls2.core.ca.ka;
    this.ka.addChildTo(this);
    this.ka.direction = 0.5 * Math.PI;
    this.ka.speed = 1;
    var a = this.fa = gls2.core.ca.fa;
    a.yc = s;
    a.setPosition(240, 448);
    a.ca = this.ai;
    [].concat(a.children).forEach(function(b) {
      b != a.wc && b.remove()
    });
    a.addChildTo(this);
    var f = a.x;
    a.on("enterframe", function() {
      0.2 < a.x - f ? a.Ta += 0.3 : -0.2 > a.x - f ? a.Ta -= 0.3 : 0 < a.x - f ? a.Ta += 0.11 : 0 > a.x - f && (a.Ta -= 0.11);
      f = a.x
    });
    var d = function() {
      var b = gls2.la.randf(0.8, 1.2);
      a.tweener.clear().to({x:gls2.la.randf(48, 432), y:gls2.la.randf(192, 512), scaleX:b, scaleY:b}, 6E3, "easeInOutQuad").call(d)
    }.bind(this);
    d();
    gls2.core.ca.Ib += 1;
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
      gls2.Hb("bgmEnding", j, j);
      this.pi = j
    }.bind(this))
  }, Yk:function() {
    0 === gls2.core.ca.fa.type ? gls2.core.xa("allclear0") : 1 === gls2.core.ca.fa.type ? gls2.core.xa("allclear1") : 2 === gls2.core.ca.fa.type && gls2.core.xa("allclear2")
  }, Zk:function() {
    this.ka.addChildTo(gls2.core.ca)
  }, update:function(a) {
    a.keyboard.getKey("z") || a.keyboard.getKey("x") || a.keyboard.getKey("c") || this.pi && gls2.Za && gls2.Za.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(a) {
      return!!a.parent
    }) ? this.speed = 8 : this.xk() : this.speed = 0.5
  }, xk:function() {
    this.Mh || (this.Mh = j, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 5E3).call(function() {
      gls2.Be();
      this.app.replaceScene(gls2.fh())
    }.bind(this)), this.ka.tweener.clear().to({speed:9}, 2E3), this.fa.tweener.clear().wait(2E3).to({y:-192}, 2E3, "easeInQuad"))
  }, od:B()})
})();
(function() {
  gls2.ga = tm.createClass({superClass:tm.display.CanvasElement, name:l, fa:l, ca:l, Ae:l, sa:0, Uc:0, score:0, Mc:s, erase:s, star:1, $j:s, Mb:j, Qa:s, frame:0, tf:l, direction:0, speed:0, ia:l, init:function(a, f, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Qa = s;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.Mb = j;
    this.ca = a;
    this.fa = a.fa;
    this.score = 100;
    this.erase = s;
    this.oj(d);
    f.setup(this);
    this.altitude = this.Mc ? 1 : 10;
    this.tf = {x:0, y:0}
  }, Od:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, Wk:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Qa === s && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Qa = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Mc && (this.x += this.ca.ka.Fa, this.y += this.ca.ka.Ga);
    this.Qa && (this.frame += 1);
    this.tf.x = this.x - a;
    this.tf.y = this.y - b
  }, Kc:function(a) {
    if(!this.Qa) {
      return s
    }
    this.sa -= a;
    if(0 >= this.sa) {
      return a = gls2.la.randf(0, 5), 2 > a ? this.ca.xb("enemy destroy.") : 4 > a ? this.ca.xb(this.name + " destroy.") : this.ca.xb("ETR reaction gone."), this.erase && gls2.ha.erase(j, this.ca.Ka, this instanceof gls2.yd), this.dispatchEvent(tm.event.Event("destroy")), this.Aa(), "yukishiro" === this.name ? gls2.core.xa("mboss1") : "mishou" === this.name ? gls2.core.xa("mboss2") : "higashi" === this.name ? gls2.core.xa("mboss3") : "hishikawa" === this.name ? gls2.core.xa("mboss4") : "minamino" === 
      this.name ? gls2.core.xa("mboss5") : "misumi" === this.name ? gls2.core.xa("boss1") : "hyuga" === this.name ? gls2.core.xa("boss2") : "momozono" === this.name ? gls2.core.xa("boss3") : "aida" === this.name ? gls2.core.xa("boss4") : "hojo" === this.name && gls2.core.xa("boss5"), j
    }
    40 > this.sa && this.Pa();
    return s
  }, Aa:function() {
    gls2.oa.Ye(this.x, this.y, this.ca, this.tf);
    this.remove()
  }, Nb:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, nk:function() {
    return this.Mb
  }, Pa:B(), oj:function(a) {
    this.name = a;
    a = gls2.ga.Fi[a];
    this.sa = this.Uc = a[0];
    this.score = a[1];
    this.Mc = a[2];
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
    this.ca.Nh.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.oa.Ye(this.x + gls2.la.rand(-100, 100), this.y + gls2.la.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.oa.je(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Re:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.oa.Ye(this.x + gls2.la.rand(-100, 100), this.y + gls2.la.rand(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.oa.je(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  gls2.ga.ee = function() {
    for(var a = [].concat(b), f = 0, d = a.length;f < d;f++) {
      a[f].remove()
    }
  };
  var b = gls2.ga.kb = []
})();
gls2.yd = tm.createClass({superClass:gls2.ga, $j:j, Uc:0, of:l, init:function(b, a, f) {
  this.of = a;
  this.superInit(b, this.of[0], f);
  this.Uc = this.sa;
  this.addEventListener("added", function() {
    this.ca.hc = this;
    this.ca.wk();
    this.tweener.wait(1E3).call(function() {
      this.ca.he = s
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.hc = l;
    this.ca.Rj();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.vj()
    }.bind(this));
    a.addChildTo(this.ca.Zb)
  })
}, Kc:function(b) {
  var a = this.sa;
  if(gls2.ga.prototype.Kc.call(this, b)) {
    return this.ca.he = j, this.ca.fa.ce = s, gls2.Ze(), j
  }
  this.sa <= 0.55 * this.Uc && 0.55 * this.Uc < a ? (gls2.da.rf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.oa.tb(this.x, this.y, this.ca), gls2.ha.erase(j, this.ca.Ka), this.of[1].setup(this)) : this.sa <= 0.1 * this.Uc && 0.1 * this.Uc < a && (gls2.da.rf(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.oa.tb(this.x, this.y, this.ca), gls2.ha.erase(j, this.ca.Ka), this.of[2].setup(this), gls2.ta("voJacms"))
}});
(function() {
  gls2.ga.Fi = {kujo:[2, 300, s, s, 1, {radius:24}], kiryu:[3, 400, s, s, 1, {radius:24}], natsuki:[5, 900, j, s, 1, {radius:24}], kise:[50, 15E3, j, s, 1, {radius:24}], yamabuki:[100, 15E3, j, s, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, s, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, s, s, 5, {width:100, height:20}], kasugano:[6, 1E3, s, s, 1, {radius:24}], 
  kurokawa:[35, 5E3, s, s, 5, {width:100, height:20}], mimino:[35, 5E3, s, s, 5, {width:100, height:20}], shirabe:[35, 5E3, s, s, 5, {width:100, height:20}], akimoto:[250, 3E5, s, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[250, 5E5, s, j, 20, {width:180, heightBottom:40, heightTop:60}], aono:[300, 3E5, s, j, 10, {width:280, heightBottom:30, heightTop:60}], yukishiro:[750, 8E5, s, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, s, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, 
  s, j, 20, {width:300, height:80}], higashi:[1300, 12E5, s, j, 20, {width:256, height:128}], momozono:[6E3, 35E5, s, j, 0, {width:256, height:128}], hyuga:[6E3, 3E6, s, j, 0, {width:240, height:80}], hishikawa:[2E3, 2E6, s, j, 20, {radius:130}], aida:[8E3, 4E6, s, j, 0, {width:370, heightBottom:5, heightTop:60}], erika:[30, 500, s, s, 1, {width:24, height:48}], hino:[20, 500, s, s, 1, {width:24, height:48}], hoshizora_y:[100, 2E4, s, j, 30, {width:128, height:64}], hoshizora_t:[100, 2E4, s, j, 30, 
  {width:128, height:64}], yotsuba:[300, 1E5, s, j, 30, {width:64, height:64}], yotsubaLeaf:[100, 3E4, s, s, 10, {width:64, height:64}], midorikawa:[5, 1E3, s, s, 1, {width:64, height:64}], aoki:[5, 1200, s, s, 1, {width:64, height:64}], madoka:[250, 15E3, s, j, 5, {width:256, height:64}]};
  gls2.ga.pa = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kujo");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  gls2.ga.Ba = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kiryu");
    this.ea = b("tex1", 64, 64)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    this.scaleX = this.x < this.fa.x ? -1 : 1
  }, draw:function(a) {
    this.ea.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  gls2.ga.ma = tm.createClass({superClass:gls2.ga, eg:l, fg:l, init:function(a, f) {
    this.superInit(a, f, "natsuki");
    this.eg = b("tex_tank1", 64, 64);
    this.fg = b("tex_tank1", 64, 64);
    this.jd = this.jd || 0;
    this.xc = this.xc || 0
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    for(a = this.jd;0 > a;) {
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
    this.eg.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.fg.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.eg.draw(a);
    this.fg.draw(a)
  }, Aa:function() {
    gls2.oa.Dj(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.bh = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "yamabuki");
    this.ea = b("tex2", 256, 128).setFrameIndex(7)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Tb = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "tsukikage");
    this.ea = b("tex1", 64, 64).setFrameIndex(23)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.bb = tm.createClass({superClass:gls2.ga, ea:l, jg:l, init:function(a, f) {
    this.superInit(a, f, "kasugano");
    this.ea = b("tex1", 64, 64).setFrameIndex(23);
    this.vc = gls2.Ua(80, 1, 0.8);
    this.jg = tm.geom.Vector2()
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && this.vc.clone().setPosition(this.x, this.y).addChildTo(this.ca);
    this.rotation = tm.geom.Vector2.sub(this.position, this.jg).toAngle() * gls2.la.RAD_TO_DEG - 90;
    this.jg.set(this.x, this.y)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Pc = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kurokawa");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.qc = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "mimino");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.nb = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "shirabe");
    this.ea = b("tex1", 128, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Ub = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "akimoto");
    this.ea = b("tex1", 256, 128).setFrameIndex(1)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    this.zc()
  }});
  gls2.ga.Vd = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "aono");
    this.ea = b("tex1", 256, 128);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 128;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 128;
    this.setScale(1.2);
    this.Jb = gls2.Ua(70, 1, 0.97)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Jb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca), this.Jb.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    this.zc()
  }});
  gls2.ga.Cd = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "yumehara");
    this.ea = b("tex1", 256, 256);
    this.ea.srcRect.x = 128;
    this.ea.srcRect.y = 256;
    this.ea.srcRect.width = 256;
    this.ea.srcRect.height = 256
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    this.zc()
  }});
  gls2.ga.Na = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "kise");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Ke = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "hanasaki");
    this.ea = b("tex1", 64, 128).setFrameIndex(14)
  }, Pa:B(), Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Ef = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "myodoin");
    this.ea = b("tex1", 128, 128).setFrameIndex(12)
  }, Pa:B(), Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
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
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
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
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.remove()
  }});
  gls2.ga.Ja = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hino");
    this.ea = b("tex4", 64, 32).setFrameIndex(0)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.qa = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "midorikawa");
    this.ea = b("tex4", 64, 64).setFrameIndex(8)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.yb = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "aoki");
    this.ea = b("tex4", 64, 64).setFrameIndex(1)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Od:function() {
    240 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.Ck = this.y + 192;
    this.Yc = this.y
  }});
  gls2.ga.ae = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "madoka");
    this.ea = b("tex4", 256, 128).setFrameIndex(3)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.sd = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hoshizora_y");
    this.ea = b("tex4", 256, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    if(this.Qa === s && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Qa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.je(this.x, this.y, this.ca);
    this.zc()
  }, Od:function() {
    480 < this.x && (this.velocityX *= -1, this.ea.scaleX = -1)
  }, Nb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ga.rd = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hoshizora_t");
    this.ea = b("tex4", 64, 128).setFrameIndex(1)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a);
    if(this.Qa === s && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.Qa = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.je(this.x, this.y, this.ca);
    this.zc()
  }, Od:function() {
    240 < this.x && (this.velocityX *= -1)
  }, Nb:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }});
  gls2.ga.uf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "yotsuba");
    this.ea = b("tex4", 128, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.je(this.x, this.y, this.ca);
    this.zc();
    this.ca.qd || gls2.Ji(this.x, this.y, this.fa).addChildTo(this.parent);
    for(var a = 0;4 > a;a++) {
      this.Nc[a] && this.Nc[a].Aa()
    }
    delete this.Nc;
    this.remove()
  }, Od:function() {
    this.Nc = [];
    for(var a = 0;4 > a;a++) {
      var b = 0.5 * Math.PI * a;
      this.Nc[a] = this.Ae.Dg({aa:gls2.ga.vf, ba:gls2.da.vf, x:this.x + 64 * Math.sin(b), y:this.y + 64 * Math.cos(b)});
      this.Nc[a].dir = b;
      this.Nc[a].pg = this;
      this.Nc[a].ck = a;
      this.Nc[a].distance = 64
    }
    gls2.ga.prototype.Od.call(this);
    return this
  }});
  gls2.ga.vf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "yotsubaLeaf");
    this.ea = b("yotsubaLeaf", 64, 64).setFrameIndex(0)
  }, update:function(a) {
    gls2.ga.prototype.update.call(this, a)
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    this.pg.Nc[this.ck] = l;
    this.remove()
  }});
  gls2.ga.Ud = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "erika");
    this.ea = b("tex3", 64, 128);
    this.ea.setFrameIndex(8)
  }, Pa:B(), draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    gls2.oa.tb(this.x, this.y, this.ca);
    gls2.Di(this.x, this.y, this.fa).addChildTo(this.parent);
    this.remove()
  }});
  gls2.ga.Cf = tm.createClass({superClass:gls2.ga, ea:l, init:function(a, f) {
    this.superInit(a, f, "yukishiro");
    this.ea = b("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, Aa:function() {
    this.zc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Of = tm.createClass({superClass:gls2.yd, ea:l, init:function(a, f) {
    this.superInit(a, f, "misumi");
    this.ea = b("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, draw:function(a) {
    this.ea.draw(a)
  }, Aa:function() {
    this.Re()
  }});
  gls2.ga.Kf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "mishou");
    this.ea = b("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.Jb = gls2.Ua(80, 1, 0.9);
    this.vc = gls2.Ua(256, 1, 0.9)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && (this.Jb.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.Jb.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca), this.vc.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, Aa:function() {
    this.zc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Si = tm.createClass({superClass:gls2.yd, init:function(a, f) {
    this.superInit(a, f, "hyuga");
    this.ea = b("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, Aa:function() {
    this.Re()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Yf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "higashi");
    this.ea = b("tex4", 256, 128).setFrameIndex(2);
    this.blendMode = "lighter";
    this.setScale(1.5)
  }, Pa:B(), Aa:function() {
    this.zc()
  }, draw:function(a) {
    this.ea.draw(a)
  }, ri:function(a) {
    if(a) {
      for(a = 0;3 > a;a++) {
        gls2.oa.cf(this.x + gls2.ua.rand(-100, 100), this.y + gls2.ua.rand(-50, 50), this.ca, 2)
      }
      this.alpha = 0
    }else {
      for(a = 0;3 > a;a++) {
        gls2.oa.cf(this.x + gls2.ua.rand(-100, 100), this.y + gls2.ua.rand(-50, 50), this.ca, 2)
      }
      this.alpha = 1
    }
  }});
  gls2.ga.Oi = tm.createClass({superClass:gls2.yd, init:function(a, f) {
    this.superInit(a, f, "momozono");
    this.ea = b("tex4", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, Pa:B(), Aa:function() {
    this.Re()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Uf = tm.createClass({superClass:gls2.ga, init:function(a, f) {
    this.superInit(a, f, "hishikawa");
    this.ea = b("tex2", 256, 256).setFrameIndex(2);
    this.ea.setScale(2);
    this.Jb = gls2.Ua(60, 1, 0.95);
    this.vc = gls2.Ua(500, 1, 0.8)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Jb.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Jb.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.vc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, Aa:function() {
    this.zc()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  gls2.ga.Pi = tm.createClass({superClass:gls2.yd, init:function(a, f) {
    this.superInit(a, f, "aida");
    this.ea = b("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.Jb = gls2.Ua(60, 1, 0.95);
    this.vc = gls2.Ua(500, 1, 0.8)
  }, update:function(a) {
    gls2.ga.prototype.update.apply(this, arguments);
    0 === a.frame % 2 && 0 < this.sa && (this.Jb.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Jb.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Jb.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.Jb.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.ca), this.vc.clone().setPosition(this.x, this.y).addChildTo(this.ca))
  }, Pa:function() {
    this.on("enterframe", function(a) {
      0 === a.app.frame % 30 ? this.ea.ab() : 5 === a.app.frame % 30 && this.ea.$a()
    })
  }, Aa:function() {
    this.Re()
  }, draw:function(a) {
    this.ea.draw(a)
  }});
  var b = tm.createClass({superClass:tm.display.Sprite, Wg:l, init:function(a, b, d) {
    this.superInit(a, b, d);
    "string" === typeof a && (this.Wg = a)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, ab:function() {
    var a = this.srcRect.x, b = this.srcRect.y, d = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Wg + "Red";
    this.srcRect.x = a;
    this.srcRect.y = b;
    this.srcRect.width = d;
    this.srcRect.height = h
  }, $a:function() {
    var a = this.srcRect.x, b = this.srcRect.y, d = this.srcRect.width, h = this.srcRect.height;
    this.image = this.Wg;
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
  gls2.da.za = function(a, b) {
    var f = gls2.ha[b].Ve();
    a.on("enterframe", f);
    a.on("completeattack", function() {
      f.stop = j
    })
  };
  gls2.da.rf = function(a) {
    if(a = [].concat(a._listeners.enterframe)) {
      for(var b = 0, f = a.length;b < f;b++) {
        a[b] && a[b].wg && (a[b].stop = j)
      }
    }
  };
  gls2.da.pa = tm.createClass({superClass:gls2.da, pattern:l, init:function(a, b) {
    this.superInit();
    this.pattern = a;
    this.Dk = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    var b = this.pattern, f = this.Dk;
    a.on("launch", function() {
      var a = gls2.ua.randf(640 * (f - 0.1), 640 * (f + 0.1));
      this.tweener.clear().wait(gls2.ua.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
        gls2.da.za(this, b)
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.da.Hc = gls2.da.pa("basic0-0", 0.2);
  gls2.da.qb = gls2.da.pa("basic0-0", 0.4);
  gls2.da.Bd = gls2.da.pa("basic0-0", 0.6);
  gls2.da.pb = gls2.da.pa("basic1-2", 0.2);
  gls2.da.Gc = gls2.da.pa("basic1-2", 0.4);
  gls2.da.Ad = gls2.da.pa("basic1-2", 0.6);
  gls2.da.Ba = tm.createClass({superClass:gls2.da, Gb:l, init:function(a) {
    this.superInit();
    this.Gb = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Gb = this.Gb;
    a.tweener.wait(gls2.ua.rand(0, 1E3)).call(function() {
      this.speed = 6;
      gls2.da.za(this, this.Gb);
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Qa && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.la.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.Nb() && this.Qa && this.remove();
        if(22500 > gls2.Lc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Mb = s
        }
      })
    }.bind(a))
  }});
  gls2.da.rb = gls2.da.Ba("basic1-0");
  var b = tm.createClass({superClass:gls2.da, init:function(a, b, f) {
    this.superInit();
    this.Zj = a;
    this.Yj = b;
    this.Fd = f
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = this.Zj;
    a.jd = this.Yj;
    this.Fd && (a.Fd = [].concat(this.Fd));
    a.xc = 0;
    a.on("enter", function() {
      gls2.da.za(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.jd) * this.speed;
      this.y += Math.sin(this.jd) * this.speed;
      this.Qa && !this.Nb() && this.remove();
      for(this.xc = Math.atan2(this.fa.y - this.y, this.fa.x - this.x);0 > this.xc;) {
        this.xc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.xc;) {
        this.xc -= 2 * Math.PI
      }
      this.Mb = this.y < this.fa.y && 4E4 < gls2.Lc(this, this.fa);
      if(this.Fd) {
        for(var a = 0;a < this.Fd.length;a++) {
          var b = this.Fd[a];
          b.frame === this.frame && this.tweener.to({jd:b.dir !== i ? b.dir : this.jd, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.da.sc = b(1, 0.25 * Math.PI);
  gls2.da.Ik = b(1, -1.75 * Math.PI);
  gls2.da.Xd = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.da.va = b(1.6, 0.5 * Math.PI);
  gls2.da.tc = b(1.6, -0.5 * Math.PI);
  gls2.da.Bi = tm.createClass({superClass:gls2.da, La:l, init:function(a) {
    this.superInit();
    this.La = a
  }, setup:function(a) {
    gls2.da.za(a, this.La);
    a.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.da.dh = gls2.da.Bi("bukky-4-0");
  b = tm.createClass({superClass:gls2.da, La:l, Fh:s, init:function(a, b) {
    this.superInit();
    this.La = a;
    this.Fh = !!b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.La = this.La;
    a.on("enter", function() {
      gls2.da.za(this, this.La)
    });
    a.on("enterframe", function() {
      this.Qa && !this.Nb() && this.remove()
    });
    if(!this.Fh) {
      a.on("enterframe", function() {
        this.Mb = this.y < this.fa.y && 4E4 < gls2.Lc(this, this.fa)
      })
    }
  }});
  gls2.da.Rb = b("basic3-0", s);
  gls2.da.Sb = b("basic3-1", s);
  gls2.da.pc = b("cannon2-0", j);
  gls2.da.xf = b("cannon2-3", j);
  gls2.da.Ee = b("cannon3-0", j);
  gls2.da.zf = b("cannon5-0", j);
  var a = tm.createClass({superClass:gls2.da, velocityY:0, La:l, delay:0, init:function(a, b, f) {
    this.superInit();
    this.velocityY = a;
    this.La = b;
    this.delay = f || 0
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ia = [this.La];
    a.mi = s;
    a.tweener.clear().wait(this.delay).moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.da.za(this, this.ia[0]);
      this.mi = j
    }.bind(a));
    a.on("enterframe", function() {
      this.mi && (this.y += this.velocityY, 384 < this.y && gls2.da.rf(this), this.Qa && !this.Nb() && this.remove(), this.Mb = this.y < this.fa.y)
    })
  }});
  gls2.da.cd = a(0.5, "kurokawa-1");
  gls2.da.Qi = a(0.5, "kurokawa-4");
  gls2.da.rc = function(b) {
    return a(0.5, "milk-5", b)
  };
  gls2.da.ob = tm.createClass({superClass:gls2.da, vi:0, xi:0, wi:0, yi:0, init:function(a, b, f, q) {
    this.superInit();
    this.vi = a;
    this.xi = b;
    this.wi = f;
    this.yi = q
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.on("enterframe", function() {
      this.rotation = tm.geom.Vector2.sub(this.ca.fa.position, this.position).toAngle() * gls2.la.RAD_TO_DEG - 90
    });
    var b = this;
    a.tweener.clear().to({x:b.vi, y:b.xi}, 1400, "easeInOutQuad").call(function() {
      gls2.da.za(this, "ako-5")
    }.bind(a));
    a.one("completeattack", function() {
      this.tweener.clear().to({x:b.wi, y:b.yi}, 900, "easeInOutQuad").call(function() {
        gls2.da.za(this, "ako-5")
      }.bind(this));
      this.one("completeattack", function() {
        this.tweener.clear().to({y:832}, 1900, "easeInQuad")
      })
    })
  }});
  gls2.da.ed = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.za(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.Yd = tm.createClass({superClass:gls2.da, delay:0, init:function(a) {
    this.superInit();
    this.delay = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.wait(this.delay).call(function() {
      gls2.da.za(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(a)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(a))
  }});
  gls2.da.bb = tm.createClass({superClass:gls2.da, ei:0, direction:1, delay:0, init:function(a, b, f) {
    this.superInit();
    this.ei = a;
    this.direction = b;
    this.delay = f
  }, setup:function(a) {
    function b(a) {
      return f ? a : 1 - a
    }
    gls2.da.prototype.setup.call(this, a);
    tm.app.Tweener(a).wait(this.delay).call(function() {
      gls2.da.za(this, "basic1-3")
    }.bind(a));
    var f = 1 == this.direction;
    switch(this.ei) {
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
  b = tm.createClass({superClass:gls2.da, velocityY:0, La:l, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.La = b
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = this.velocityY;
    a.ia = [this.La];
    a.tweener.clear().call(function() {
      gls2.da.za(this, this.ia[0]);
      gls2.oa.Nj(this.x, this.y, this.ca)
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Qa && !this.Nb() && this.remove();
      this.Mb = this.y < this.fa.y
    })
  }});
  gls2.da.Ja = b(0.5, "akane");
  gls2.da.qa = tm.createClass({superClass:gls2.da, Gb:l, init:function(a, b) {
    this.superInit();
    this.Gb = "nao-" + b;
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Gb = this.Gb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ua.rand(0, 1E3)).call(function() {
      gls2.da.za(this, this.Gb);
      var a = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.fa.y && this.Qa && (this.angle += Math.atan2(this.fa.y - this.y, this.fa.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.la.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * a - 90;
        !this.Nb() && this.Qa && this.remove();
        if(22500 > gls2.Lc(this, this.fa) || this.y > this.fa.y + 150) {
          this.Mb = s
        }
      })
    }.bind(a))
  }});
  gls2.da.ub = gls2.da.qa(3, 1);
  gls2.da.vb = gls2.da.qa(6, 1);
  gls2.da.wb = gls2.da.qa(12, 1);
  gls2.da.yb = tm.createClass({superClass:gls2.da, Gb:l, init:function(a) {
    this.superInit();
    this.Gb = "reika";
    this.speed = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.Gb = this.Gb;
    a.speed = this.speed;
    a.tweener.wait(gls2.ua.rand(0, 1E3)).call(function() {
      gls2.da.za(this, this.Gb);
      this.lc = 0;
      this.on("enterframe", function() {
        this.y < this.Ck && (this.Yc += 1);
        this.x += this.speed;
        this.y = this.Yc + 8 * Math.sin(this.lc);
        this.lc += 0.03
      })
    }.bind(a))
  }});
  gls2.da.ac = gls2.da.yb(1);
  gls2.da.dl = gls2.da.yb(2);
  gls2.da.ae = a(0.5, "aguri");
  gls2.da.sd = tm.createClass({superClass:gls2.da, velocityX:0, La:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.La = "miyuki_y"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ia = [this.La];
    a.tweener.clear().call(function() {
      gls2.da.za(this, this.ia[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.x += this.velocityX;
      this.Qa && !this.Nb() && this.remove();
      this.Mb = this.y < this.fa.y
    })
  }});
  gls2.da.sd = gls2.da.sd(1);
  gls2.da.rd = tm.createClass({superClass:gls2.da, velocityX:0, La:l, init:function(a) {
    this.superInit();
    this.velocityX = a;
    this.La = "miyuki_t"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityX = this.velocityX;
    a.ia = [this.La];
    a.ji = 0;
    a.tweener.clear().call(function() {
      gls2.da.za(this, this.ia[0])
    }.bind(a));
    a.on("enterframe", function() {
      0 == this.ji ? (this.y += 0.5, 256 < this.y && this.ji++) : this.x += this.velocityX;
      this.Qa && !this.Nb() && this.remove()
    })
  }});
  gls2.da.rd = gls2.da.rd(0.5);
  b = tm.createClass({superClass:gls2.da, velocityX:0, La:l, init:function() {
    this.superInit();
    this.La = "alice"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.velocityY = 0.3;
    a.ia = [this.La];
    a.tweener.clear().call(function() {
      gls2.da.za(this, this.ia[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Qa && !this.Nb() && this.remove();
      this.Mb = this.y < this.fa.y
    })
  }});
  gls2.da.uf = b();
  b = tm.createClass({superClass:gls2.da, La:l, init:function() {
    this.superInit();
    this.La = "aliceLeaf"
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [this.La];
    a.tweener.clear().call(function() {
      gls2.da.za(this, this.ia[0])
    }.bind(a));
    a.on("enterframe", function() {
      var a = this.pg.x, b = this.pg.y;
      this.dir += 0.01;
      this.x = a + Math.sin(this.dir) * this.distance;
      this.y = b + Math.cos(this.dir) * this.distance;
      a = ~~(180 * Math.atan2(b - this.y, a - this.x) / 3.14159);
      this.ea.setFrameIndex(~~(22.5 * ((0 > a ? a + 360 : a) / 360)) % 16, 64, 64);
      this.Qa && !this.Nb() && this.remove();
      this.Mb = this.y < this.fa.y;
      this.na++
    })
  }});
  gls2.da.vf = b();
  gls2.da.ih = a(0.3, "komachi-1");
  gls2.da.jh = a(0.5, "komachi-2");
  gls2.da.kh = a(0.5, "komachi-3");
  gls2.da.Gf = a(0.5, "komachi-4");
  gls2.da.Ff = a(0.5, "komachi-5");
  gls2.da.Vd = tm.createClass({superClass:gls2.da, oi:0, init:function(a) {
    this.superInit();
    this.oi = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    tm.app.Tweener(a).to({x:480 * this.oi}, 2800, "easeOutQuad").call(function() {
      gls2.da.za(this, "mktn-5")
    }.bind(a));
    a.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.da.Sf = a(0.1, "nozomi-4");
  gls2.da.Tf = a(0.3, "nozomi-5");
  gls2.da.Ud = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.za(a, "basic3-0");
    a.on("enterframe", function() {
      this.y += 0.8;
      this.Mb = this.Qa
    })
  }});
  gls2.da.Ud = gls2.da.Ud();
  b = tm.createClass({superClass:gls2.da, ia:l, jf:0, init:function(a, b) {
    this.superInit();
    this.ia = a;
    this.jf = b || 1500
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.jf = this.jf;
    a.hb = s;
    a.Ya = s;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.hb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.hb === s || 0 >= this.sa) && this.jf < this.frame && this.Ya === s) {
        this.Ya = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Cf = b(["honoka-1"]);
  gls2.da.Of = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.hb = s;
    a.Ya = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.hb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Ri = gls2.da.Of();
  gls2.da.Pf = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
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
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Pf = gls2.da.Pf();
  gls2.da.Qf = tm.createClass({superClass:gls2.da, init:function() {
    this.superInit()
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.sa || gls2.da.za(this, "nagisa-3-1")
    })
  }});
  gls2.da.Qf = gls2.da.Qf();
  gls2.da.Kf = b(["mai-1", "mai-2"]);
  gls2.da.Vf = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.hb = s;
    a.Ya = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.hb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Vf = gls2.da.Vf();
  gls2.da.Wf = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
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
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Wf = gls2.da.Wf();
  gls2.da.Xf = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-3-1", "saki-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
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
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Xf = gls2.da.Xf();
  var f = tm.createClass({superClass:gls2.da, ia:l, init:function(a) {
    this.superInit();
    this.ia = a
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.hb = s;
    a.Ya = s;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.hb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        if(50 < gls2.ua.rand(0, 100) && 300 < this.frame || this.x - 32 < this.fa.x && this.fa.x < this.x + 32) {
          this.ri(j);
          var b = gls2.ua.rand(48, 432), d = gls2.ua.rand(128, 192);
          this.tweener.move(b, d, 10, "easeInOutQuad").call(this.ri()).call(a)
        }else {
          b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144), this.tweener.move(240 + Math.cos(b) * d, 192 + 0.5 * Math.sin(b) * d, 2E3, "easeInOutQuad").call(a)
        }
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.hb === s || 0 >= this.sa) && 1500 < this.frame && this.Ya === s) {
        this.Ya = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Yf = f(["setsuna-1"]);
  gls2.da.Hf = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.hb = s;
    a.Ya = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.hb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Hf = gls2.da.Hf();
  gls2.da.If = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.hb = s;
    a.Ya = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.hb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.If = gls2.da.If();
  gls2.da.Jf = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.hb = s;
    a.Ya = s;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.hb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * gls2.ua.random() * Math.PI, d = gls2.ua.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * d, 128 + 0.3 * Math.sin(b) * d, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Jf = gls2.da.Jf();
  gls2.da.Uf = b(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.da.Lf = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
    a.hb = s;
    a.Ya = s;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.hb = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = gls2.ua.randf(-48, 48);
        this.tweener.move(Math.clamp(this.fa.x, 48, 432) + 0.3 * b, 128 + 0.3 * b, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Ya) {
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Lf = gls2.da.Lf();
  gls2.da.Mf = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
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
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Mf = gls2.da.Mf();
  gls2.da.Nf = tm.createClass({superClass:gls2.da, ia:l, init:function() {
    this.superInit();
    this.ia = ["mana-3-1", "mana-3-2"]
  }, setup:function(a) {
    gls2.da.prototype.setup.call(this, a);
    a.ia = [].concat(this.ia);
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
        var a = this.ia.shift();
        gls2.da.za(this, a);
        this.ia.push(a)
      }
    })
  }});
  gls2.da.Nf = gls2.da.Nf()
})();
(function() {
  var b = gls2.ga, a = gls2.da;
  gls2.eh = {"heri1-left":[{aa:b.Ba, ba:a.Hc, x:48, y:-100}, {aa:b.Ba, ba:a.qb, x:96, y:-100}, {aa:b.Ba, ba:a.Hc, x:144, y:-100}, {aa:b.Ba, ba:a.qb, x:192, y:-100}, {aa:b.Ba, ba:a.Hc, x:240, y:-100}], "heri1-center":[{aa:b.Ba, ba:a.Hc, x:144, y:-100}, {aa:b.Ba, ba:a.qb, x:192, y:-100}, {aa:b.Ba, ba:a.Hc, x:240, y:-100}, {aa:b.Ba, ba:a.qb, x:288, y:-100}, {aa:b.Ba, ba:a.Hc, x:336, y:-100}], "heri1-right":[{aa:b.Ba, ba:a.Hc, x:240, y:-100}, {aa:b.Ba, ba:a.qb, x:288, y:-100}, {aa:b.Ba, ba:a.Hc, x:336, 
  y:-100}, {aa:b.Ba, ba:a.qb, x:384, y:-100}, {aa:b.Ba, ba:a.Hc, x:432, y:-100}], "heri1-left2":[{aa:b.Ba, ba:a.qb, x:48, y:-100}, {aa:b.Ba, ba:a.Bd, x:96, y:-100}, {aa:b.Ba, ba:a.qb, x:144, y:-100}, {aa:b.Ba, ba:a.Bd, x:192, y:-100}, {aa:b.Ba, ba:a.qb, x:240, y:-100}], "heri1-center2":[{aa:b.Ba, ba:a.qb, x:144, y:-100}, {aa:b.Ba, ba:a.Bd, x:192, y:-100}, {aa:b.Ba, ba:a.qb, x:240, y:-100}, {aa:b.Ba, ba:a.Bd, x:288, y:-100}, {aa:b.Ba, ba:a.qb, x:336, y:-100}], "heri1-right2":[{aa:b.Ba, ba:a.qb, x:240, 
  y:-100}, {aa:b.Ba, ba:a.Bd, x:288, y:-100}, {aa:b.Ba, ba:a.qb, x:336, y:-100}, {aa:b.Ba, ba:a.Bd, x:384, y:-100}, {aa:b.Ba, ba:a.qb, x:432, y:-100}], "heri2-left":[{aa:b.pa, ba:a.rb, x:48, y:-100}, {aa:b.pa, ba:a.rb, x:96, y:-100}, {aa:b.pa, ba:a.rb, x:144, y:-100}, {aa:b.pa, ba:a.rb, x:192, y:-100}, {aa:b.pa, ba:a.rb, x:240, y:-100}], "heri2-center":[{aa:b.pa, ba:a.rb, x:144, y:-100}, {aa:b.pa, ba:a.rb, x:192, y:-100}, {aa:b.pa, ba:a.rb, x:240, y:-100}, {aa:b.pa, ba:a.rb, x:288, y:-100}, {aa:b.pa, 
  ba:a.rb, x:336, y:-100}], "heri2-right":[{aa:b.pa, ba:a.rb, x:240, y:-100}, {aa:b.pa, ba:a.rb, x:288, y:-100}, {aa:b.pa, ba:a.rb, x:336, y:-100}, {aa:b.pa, ba:a.rb, x:384, y:-100}, {aa:b.pa, ba:a.rb, x:432, y:-100}], "heri1-4-left":[{aa:b.pa, ba:a.pb, x:48, y:-100}, {aa:b.pa, ba:a.pb, x:96, y:-100}, {aa:b.pa, ba:a.pb, x:144, y:-100}, {aa:b.pa, ba:a.pb, x:192, y:-100}, {aa:b.pa, ba:a.pb, x:240, y:-100}], "heri1-4-center":[{aa:b.pa, ba:a.pb, x:144, y:-100}, {aa:b.pa, ba:a.pb, x:192, y:-100}, {aa:b.pa, 
  ba:a.pb, x:240, y:-100}, {aa:b.pa, ba:a.pb, x:288, y:-100}, {aa:b.pa, ba:a.pb, x:336, y:-100}], "heri1-4-right":[{aa:b.pa, ba:a.pb, x:240, y:-100}, {aa:b.pa, ba:a.pb, x:288, y:-100}, {aa:b.pa, ba:a.pb, x:336, y:-100}, {aa:b.pa, ba:a.pb, x:384, y:-100}, {aa:b.pa, ba:a.pb, x:432, y:-100}], "heri1-4-left2":[{aa:b.pa, ba:a.Gc, x:48, y:-100}, {aa:b.pa, ba:a.Ad, x:96, y:-100}, {aa:b.pa, ba:a.Gc, x:144, y:-100}, {aa:b.pa, ba:a.Ad, x:192, y:-100}, {aa:b.pa, ba:a.Gc, x:240, y:-100}], "heri1-4-center2":[{aa:b.pa, 
  ba:a.Gc, x:144, y:-100}, {aa:b.pa, ba:a.Ad, x:192, y:-100}, {aa:b.pa, ba:a.Gc, x:240, y:-100}, {aa:b.pa, ba:a.Ad, x:288, y:-100}, {aa:b.pa, ba:a.Gc, x:336, y:-100}], "heri1-4-right2":[{aa:b.pa, ba:a.Gc, x:240, y:-100}, {aa:b.pa, ba:a.Ad, x:288, y:-100}, {aa:b.pa, ba:a.Gc, x:336, y:-100}, {aa:b.pa, ba:a.Ad, x:384, y:-100}, {aa:b.pa, ba:a.Gc, x:432, y:-100}], "tankRD-left":[{aa:b.ma, ba:a.sc, x:78, y:-50}, {aa:b.ma, ba:a.sc, x:28, y:-100}, {aa:b.ma, ba:a.sc, x:-22, y:-150}, {aa:b.ma, ba:a.sc, x:-72, 
  y:-200}, {aa:b.ma, ba:a.sc, x:-122, y:-250}], "tankRD-center":[{aa:b.ma, ba:a.sc, x:222, y:-50}, {aa:b.ma, ba:a.sc, x:172, y:-100}, {aa:b.ma, ba:a.sc, x:122, y:-150}, {aa:b.ma, ba:a.sc, x:72, y:-200}, {aa:b.ma, ba:a.sc, x:22, y:-250}], "tankL-top":[{aa:b.ma, ba:a.Xd, x:550, y:64}, {aa:b.ma, ba:a.Xd, x:620, y:64}, {aa:b.ma, ba:a.Xd, x:690, y:64}, {aa:b.ma, ba:a.Xd, x:760, y:64}, {aa:b.ma, ba:a.Xd, x:830, y:64}], "tank5-left":[{aa:b.ma, ba:a.va, x:48, y:-70}, {aa:b.ma, ba:a.va, x:48, y:-140}, {aa:b.ma, 
  ba:a.va, x:48, y:-210}, {aa:b.ma, ba:a.va, x:48, y:-280}, {aa:b.ma, ba:a.va, x:48, y:-350}], "tank5-center":[{aa:b.ma, ba:a.va, x:240, y:-70}, {aa:b.ma, ba:a.va, x:240, y:-140}, {aa:b.ma, ba:a.va, x:240, y:-210}, {aa:b.ma, ba:a.va, x:240, y:-280}, {aa:b.ma, ba:a.va, x:240, y:-350}], "tank15-top":[{aa:b.ma, ba:a.va, x:48, y:-70}, {aa:b.ma, ba:a.va, x:48, y:-140}, {aa:b.ma, ba:a.va, x:48, y:-210}, {aa:b.ma, ba:a.va, x:48, y:-280}, {aa:b.ma, ba:a.va, x:48, y:-350}, {aa:b.ma, ba:a.va, x:240, y:-70}, 
  {aa:b.ma, ba:a.va, x:240, y:-140}, {aa:b.ma, ba:a.va, x:240, y:-210}, {aa:b.ma, ba:a.va, x:240, y:-280}, {aa:b.ma, ba:a.va, x:240, y:-350}, {aa:b.ma, ba:a.va, x:432, y:-70}, {aa:b.ma, ba:a.va, x:432, y:-140}, {aa:b.ma, ba:a.va, x:432, y:-210}, {aa:b.ma, ba:a.va, x:432, y:-280}, {aa:b.ma, ba:a.va, x:432, y:-350}], "tank25-top":[{aa:b.ma, ba:a.va, x:48, y:-70}, {aa:b.ma, ba:a.va, x:48, y:-140}, {aa:b.ma, ba:a.va, x:48, y:-210}, {aa:b.ma, ba:a.va, x:48, y:-280}, {aa:b.ma, ba:a.va, x:48, y:-350}, {aa:b.ma, 
  ba:a.va, x:240, y:-70}, {aa:b.ma, ba:a.va, x:240, y:-140}, {aa:b.ma, ba:a.va, x:240, y:-210}, {aa:b.ma, ba:a.va, x:240, y:-280}, {aa:b.ma, ba:a.va, x:240, y:-350}, {aa:b.ma, ba:a.va, x:432, y:-70}, {aa:b.ma, ba:a.va, x:432, y:-140}, {aa:b.ma, ba:a.va, x:432, y:-210}, {aa:b.ma, ba:a.va, x:432, y:-280}, {aa:b.ma, ba:a.va, x:432, y:-350}, {aa:b.ma, ba:a.tc, x:144, y:710}, {aa:b.ma, ba:a.tc, x:144, y:780}, {aa:b.ma, ba:a.tc, x:144, y:850}, {aa:b.ma, ba:a.tc, x:144, y:920}, {aa:b.ma, ba:a.tc, x:144, 
  y:990}, {aa:b.ma, ba:a.tc, x:336, y:710}, {aa:b.ma, ba:a.tc, x:336, y:780}, {aa:b.ma, ba:a.tc, x:336, y:850}, {aa:b.ma, ba:a.tc, x:336, y:920}, {aa:b.ma, ba:a.tc, x:336, y:990}], "bukky-4-r":[{aa:b.bh, ba:a.dh, x:480, y:-50}], "bukky-4-l":[{aa:b.bh, ba:a.dh, x:0, y:-50}], "cannon-0":[{aa:b.Na, ba:a.Rb, x:48, y:-100}], "cannon-1":[{aa:b.Na, ba:a.Rb, x:96, y:-100}], "cannon-2":[{aa:b.Na, ba:a.Rb, x:144, y:-100}], "cannon-3":[{aa:b.Na, ba:a.Rb, x:192, y:-100}], "cannon-4":[{aa:b.Na, ba:a.Rb, x:240, 
  y:-100}], "cannon-5":[{aa:b.Na, ba:a.Rb, x:288, y:-100}], "cannon-6":[{aa:b.Na, ba:a.Rb, x:336, y:-100}], "cannon-7":[{aa:b.Na, ba:a.Rb, x:384, y:-100}], "cannon-8":[{aa:b.Na, ba:a.Rb, x:432, y:-100}], "cannon-R0":[{aa:b.Na, ba:a.Rb, x:550, y:128}], "cannon-R1":[{aa:b.Na, ba:a.Rb, x:550, y:192}], "cannon-R2":[{aa:b.Na, ba:a.Rb, x:550, y:256}], "yayoi-0":[{aa:b.Na, ba:a.Sb, x:48, y:-100}], "yayoi-1":[{aa:b.Na, ba:a.Sb, x:96, y:-100}], "yayoi-2":[{aa:b.Na, ba:a.Sb, x:144, y:-100}], "yayoi-3":[{aa:b.Na, 
  ba:a.Sb, x:192, y:-100}], "yayoi-4":[{aa:b.Na, ba:a.Sb, x:240, y:-100}], "yayoi-5":[{aa:b.Na, ba:a.Sb, x:288, y:-100}], "yayoi-6":[{aa:b.Na, ba:a.Sb, x:336, y:-100}], "yayoi-7":[{aa:b.Na, ba:a.Sb, x:384, y:-100}], "yayoi-8":[{aa:b.Na, ba:a.Sb, x:432, y:-100}], "yayoi-R0":[{aa:b.Na, ba:a.Sb, x:550, y:128}], "yayoi-R1":[{aa:b.Na, ba:a.Sb, x:550, y:192}], "yayoi-R2":[{aa:b.Na, ba:a.Sb, x:550, y:256}], "tsubomi-0":[{aa:b.Ke, ba:a.Ee, x:96, y:-100}], "tsubomi-1":[{aa:b.Ke, ba:a.Ee, x:240, y:-100}], 
  "tsubomi-2":[{aa:b.Ke, ba:a.Ee, x:384, y:-100}], "tsubomi-R0":[{aa:b.Ke, ba:a.Ee, x:580, y:128}], "itsuki-0":[{aa:b.Ef, ba:a.zf, x:96, y:-100}], "itsuki-1":[{aa:b.Ef, ba:a.zf, x:240, y:-100}], "itsuki-2":[{aa:b.Ef, ba:a.zf, x:384, y:-100}], "makoto-0":[{aa:b.oc, ba:a.pc, x:48, y:-100}], "makoto-1":[{aa:b.oc, ba:a.pc, x:96, y:-100}], "makoto-2":[{aa:b.oc, ba:a.pc, x:144, y:-100}], "makoto-3":[{aa:b.oc, ba:a.pc, x:192, y:-100}], "makoto-4":[{aa:b.oc, ba:a.pc, x:240, y:-100}], "makoto-5":[{aa:b.oc, 
  ba:a.pc, x:288, y:-100}], "makoto-6":[{aa:b.oc, ba:a.pc, x:336, y:-100}], "makoto-7":[{aa:b.oc, ba:a.pc, x:384, y:-100}], "makoto-8":[{aa:b.oc, ba:a.pc, x:432, y:-100}], "makoto-R0":[{aa:b.oc, ba:a.pc, x:580, y:128}], "karen-3-2":[{aa:b.yf, ba:a.xf, x:96, y:-100}], "karen-3-5":[{aa:b.yf, ba:a.xf, x:240, y:-100}], "karen-3-8":[{aa:b.yf, ba:a.xf, x:384, y:-100}], "fighter-m-0":[{aa:b.Pc, ba:a.cd, x:96, y:-192}], "fighter-m-1":[{aa:b.Pc, ba:a.cd, x:144, y:-192}], "fighter-m-2":[{aa:b.Pc, ba:a.cd, 
  x:192, y:-192}], "fighter-m-3":[{aa:b.Pc, ba:a.cd, x:240, y:-192}], "fighter-m-4":[{aa:b.Pc, ba:a.cd, x:288, y:-192}], "fighter-m-5":[{aa:b.Pc, ba:a.cd, x:336, y:-192}], "fighter-m-6":[{aa:b.Pc, ba:a.cd, x:384, y:-192}], "fighter-m4-0":[{aa:b.Pc, ba:a.Qi, x:96, y:-192}], "tsukikage-r":[{aa:b.Tb, ba:a.ed(700), x:624, y:256}, {aa:b.Tb, ba:a.ed(600), x:720, y:256}, {aa:b.Tb, ba:a.ed(500), x:576, y:320}, {aa:b.Tb, ba:a.ed(400), x:672, y:320}, {aa:b.Tb, ba:a.ed(300), x:768, y:320}, {aa:b.Tb, ba:a.ed(200), 
  x:624, y:384}, {aa:b.Tb, ba:a.ed(100), x:720, y:384}], "tsukikage-l":[{aa:b.Tb, ba:a.Yd(700), x:-144, y:384}, {aa:b.Tb, ba:a.Yd(600), x:-240, y:384}, {aa:b.Tb, ba:a.Yd(500), x:-96, y:320}, {aa:b.Tb, ba:a.Yd(400), x:-192, y:320}, {aa:b.Tb, ba:a.Yd(200), x:-144, y:256}], "urara5-0":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.bb, ba:a.bb(0, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-1":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.bb, ba:a.bb(0, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "urara5-2":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.bb, ba:a.bb(1, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-3":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.bb, ba:a.bb(1, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-4":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.bb, ba:a.bb(2, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-5":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.bb, ba:a.bb(2, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-6":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.bb, ba:a.bb(3, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-7":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({aa:b.bb, ba:a.bb(3, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "milk5-0":[{aa:b.qc, ba:a.rc(2E3), x:384, y:-256}, {aa:b.qc, ba:a.rc(1500), x:312, y:-224}, {aa:b.qc, ba:a.rc(1E3), x:240, y:-192}, {aa:b.qc, ba:a.rc(500), x:168, y:-160}, {aa:b.qc, ba:a.rc(0), x:96, y:-128}], "milk5-1":[{aa:b.qc, ba:a.rc(2E3), x:96, y:-256}, {aa:b.qc, ba:a.rc(1500), x:168, y:-224}, {aa:b.qc, ba:a.rc(1E3), x:240, y:-192}, {aa:b.qc, ba:a.rc(500), x:312, y:-160}, {aa:b.qc, ba:a.rc(0), x:384, y:-128}], "ako5-0":[{aa:b.nb, ba:a.ob(240, 128, 96, 256), x:240, y:-192}, {aa:b.nb, 
  ba:a.ob(384, 256, 240, 128), x:384, y:-192}, {aa:b.nb, ba:a.ob(360, 512, 384, 256), x:360, y:-192}, {aa:b.nb, ba:a.ob(120, 512, 360, 512), x:120, y:-192}, {aa:b.nb, ba:a.ob(96, 256, 120, 512), x:96, y:-192}], "ako5-1":[{aa:b.nb, ba:a.ob(240, 128, 384, 256), x:240, y:-192}, {aa:b.nb, ba:a.ob(384, 256, 360, 512), x:384, y:-192}, {aa:b.nb, ba:a.ob(360, 512, 120, 512), x:360, y:-192}, {aa:b.nb, ba:a.ob(120, 512, 96, 256), x:120, y:-192}, {aa:b.nb, ba:a.ob(96, 256, 240, 128), x:96, y:-192}], "ako5-2":[{aa:b.nb, 
  ba:a.ob(240, 128, 120, 512), x:240, y:-192}, {aa:b.nb, ba:a.ob(384, 256, 96, 256), x:384, y:-192}, {aa:b.nb, ba:a.ob(360, 512, 240, 128), x:360, y:-192}, {aa:b.nb, ba:a.ob(120, 512, 384, 256), x:120, y:-192}, {aa:b.nb, ba:a.ob(96, 256, 360, 512), x:96, y:-192}], "komachi-0":[{aa:b.Ub, ba:a.ih, x:144, y:-192}], "komachi-1":[{aa:b.Ub, ba:a.ih, x:336, y:-192}], "komachi2-0":[{aa:b.Ub, ba:a.jh, x:144, y:-192}], "komachi2-1":[{aa:b.Ub, ba:a.jh, x:336, y:-192}], "komachi3-0":[{aa:b.Ub, ba:a.kh, x:144, 
  y:-192}], "komachi3-1":[{aa:b.Ub, ba:a.kh, x:336, y:-192}], "komachi4-0":[{aa:b.Ub, ba:a.Gf, x:144, y:-192}], "komachi4-1":[{aa:b.Ub, ba:a.Gf, x:336, y:-192}], "komachi4-2":[{aa:b.Ub, ba:a.Gf, x:240, y:-192}], "komachi5-0":[{aa:b.Ub, ba:a.Ff, x:144, y:-192}], "komachi5-1":[{aa:b.Ub, ba:a.Ff, x:336, y:-192}], "komachi5-2":[{aa:b.Ub, ba:a.Ff, x:240, y:-192}], "nozomi4-0":[{aa:b.Cd, ba:a.Sf, x:144, y:-192}], "nozomi4-1":[{aa:b.Cd, ba:a.Sf, x:240, y:-192}], "nozomi4-2":[{aa:b.Cd, ba:a.Sf, x:336, y:-192}], 
  "nozomi5-0":[{aa:b.Cd, ba:a.Tf, x:144, y:-256}], "nozomi5-1":[{aa:b.Cd, ba:a.Tf, x:240, y:-128}], "nozomi5-2":[{aa:b.Cd, ba:a.Tf, x:336, y:-256}], "mktn5-0":[{aa:b.Vd, ba:a.Vd(0.6), x:624, y:128}], "mktn5-1":[{aa:b.Vd, ba:a.Vd(0.4), x:-144, y:64}], "akane-center":[{aa:b.Ja, ba:a.Ja, x:144, y:130}, {aa:b.Ja, ba:a.Ja, x:192, y:80}, {aa:b.Ja, ba:a.Ja, x:240, y:140}, {aa:b.Ja, ba:a.Ja, x:288, y:80}, {aa:b.Ja, ba:a.Ja, x:336, y:130}], "akane-right":[{aa:b.Ja, ba:a.Ja, x:384, y:160}, {aa:b.Ja, ba:a.Ja, 
  x:288, y:120}, {aa:b.Ja, ba:a.Ja, x:288, y:80}, {aa:b.Ja, ba:a.Ja, x:384, y:40}], "akane-left":[{aa:b.Ja, ba:a.Ja, x:96, y:160}, {aa:b.Ja, ba:a.Ja, x:144, y:120}, {aa:b.Ja, ba:a.Ja, x:144, y:80}, {aa:b.Ja, ba:a.Ja, x:96, y:40}], "nao1-left":[{aa:b.qa, ba:a.ub, x:48, y:-100}, {aa:b.qa, ba:a.ub, x:96, y:-100}, {aa:b.qa, ba:a.ub, x:144, y:-100}, {aa:b.qa, ba:a.ub, x:192, y:-100}, {aa:b.qa, ba:a.ub, x:240, y:-100}], "nao1-right":[{aa:b.qa, ba:a.ub, x:240, y:-100}, {aa:b.qa, ba:a.ub, x:288, y:-100}, 
  {aa:b.qa, ba:a.ub, x:336, y:-100}, {aa:b.qa, ba:a.ub, x:384, y:-100}, {aa:b.qa, ba:a.ub, x:432, y:-100}], "nao1-center":[{aa:b.qa, ba:a.ub, x:144, y:-100}, {aa:b.qa, ba:a.ub, x:192, y:-100}, {aa:b.qa, ba:a.ub, x:240, y:-100}, {aa:b.qa, ba:a.ub, x:288, y:-100}, {aa:b.qa, ba:a.ub, x:336, y:-100}], "nao2-left":[{aa:b.qa, ba:a.vb, x:48, y:-100}, {aa:b.qa, ba:a.vb, x:96, y:-100}, {aa:b.qa, ba:a.vb, x:144, y:-100}, {aa:b.qa, ba:a.vb, x:192, y:-100}, {aa:b.qa, ba:a.vb, x:240, y:-100}], "nao2-right":[{aa:b.qa, 
  ba:a.vb, x:240, y:-100}, {aa:b.qa, ba:a.vb, x:288, y:-100}, {aa:b.qa, ba:a.vb, x:336, y:-100}, {aa:b.qa, ba:a.vb, x:384, y:-100}, {aa:b.qa, ba:a.vb, x:432, y:-100}], "nao2-center":[{aa:b.qa, ba:a.vb, x:144, y:-100}, {aa:b.qa, ba:a.vb, x:192, y:-100}, {aa:b.qa, ba:a.vb, x:240, y:-100}, {aa:b.qa, ba:a.vb, x:288, y:-100}, {aa:b.qa, ba:a.vb, x:336, y:-100}], "nao3-left":[{aa:b.qa, ba:a.wb, x:48, y:-100}, {aa:b.qa, ba:a.wb, x:96, y:-100}, {aa:b.qa, ba:a.wb, x:144, y:-100}, {aa:b.qa, ba:a.wb, x:192, 
  y:-100}, {aa:b.qa, ba:a.wb, x:240, y:-100}], "nao3-right":[{aa:b.qa, ba:a.wb, x:240, y:-100}, {aa:b.qa, ba:a.wb, x:288, y:-100}, {aa:b.qa, ba:a.wb, x:336, y:-100}, {aa:b.qa, ba:a.wb, x:384, y:-100}, {aa:b.qa, ba:a.wb, x:432, y:-100}], "nao3-center":[{aa:b.qa, ba:a.wb, x:144, y:-100}, {aa:b.qa, ba:a.wb, x:192, y:-100}, {aa:b.qa, ba:a.wb, x:240, y:-100}, {aa:b.qa, ba:a.wb, x:288, y:-100}, {aa:b.qa, ba:a.wb, x:336, y:-100}], "reika1-left":[{aa:b.yb, ba:a.ac, x:-48, y:-64}, {aa:b.yb, ba:a.ac, x:-72, 
  y:-128}, {aa:b.yb, ba:a.ac, x:-96, y:-64}, {aa:b.yb, ba:a.ac, x:-120, y:-128}, {aa:b.yb, ba:a.ac, x:-144, y:-64}, {aa:b.yb, ba:a.ac, x:-168, y:-128}], "reika1-right":[{aa:b.yb, ba:a.ac, x:528, y:-64}, {aa:b.yb, ba:a.ac, x:552, y:-128}, {aa:b.yb, ba:a.ac, x:576, y:-64}, {aa:b.yb, ba:a.ac, x:600, y:-128}, {aa:b.yb, ba:a.ac, x:624, y:-64}, {aa:b.yb, ba:a.ac, x:648, y:-128}], "madoka-1":[{aa:b.ae, ba:a.ae, x:120, y:-192}], "madoka-2":[{aa:b.ae, ba:a.ae, x:360, y:-192}], miyuki_y1:[{aa:b.sd, ba:a.sd, 
  x:-128, y:140}], miyuki_y2:[{aa:b.sd, ba:a.sd, x:608, y:60}], miyuki_t1:[{aa:b.rd, ba:a.rd, x:336, y:-128}], miyuki_t2:[{aa:b.rd, ba:a.rd, x:144, y:-128}], alice:[{aa:b.uf, ba:a.uf, x:240, y:-64}], erika:[{aa:b.Ud, ba:a.Ud, x:240, y:-100}], yukishiro:[{aa:b.Cf, ba:a.Cf, x:240, y:-100}], misumi:[{aa:b.Of, ba:[a.Ri, a.Pf, a.Qf], x:240, y:-100, hc:j}], mai:[{aa:b.Kf, ba:a.Kf, x:780, y:128}], hyuga:[{aa:b.Si, ba:[a.Vf, a.Wf, a.Xf], x:240, y:-100, hc:j}], higashi:[{aa:b.Yf, ba:a.Yf, x:780, y:128}], 
  momozono:[{aa:b.Oi, ba:[a.Hf, a.If, a.Jf], x:240, y:-100, hc:j}], rikka:[{aa:b.Uf, ba:a.Uf, x:240, y:-100}], mana:[{aa:b.Pi, ba:[a.Lf, a.Mf, a.Nf], x:240, y:-100, hc:j}]}
})();
(function() {
  function b(a, b, d, f) {
    return c.action([f(a), c.repeat(d + "-1", [f(c.speed(b, "sequence"))])])
  }
  function a(a, b, d, f, h, k, m) {
    return c.action([c.fire(c.direction(b, "absolute"), f, h || t, k, m), c.repeat(a + "-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "-1)", "sequence"), f, h || t, k, m)])])
  }
  function f(a, b, c, f, h) {
    return function(k) {
      return d(a, b, c, k, f, h, i, i)
    }
  }
  function d(a, b, d, f, h, k, m, n) {
    return c.action([c.fire(c.direction(b), f, h || t, k, m, n), c.repeat(a + "+($ex*2)-1", [c.fire(c.direction("((" + d + ")-(" + b + "))/(" + a + "+($ex*2)-1)", "sequence"), f, h || t, k, m, n)])])
  }
  function h(a) {
    return c.fire(c.direction(0), a || n, F)
  }
  function m(a) {
    return c.fire(c.direction(0), a || n, t)
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
  function r(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function G(a) {
    return c.speed("($rank + $ex*0.2)*1.5 + 0.20 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function k(a) {
    return c.wait(a + "*(1-$rank)*$hyperOff")
  }
  function R(a) {
    return c.Ha(a, {frame:3, re:j})
  }
  function N(a) {
    return c.Ha(a, {frame:2, re:j})
  }
  function C(a) {
    return c.Ha(a, {visible:s})
  }
  function A(a) {
    return c.Ha(a, {frame:4, gc:j})
  }
  function H(a) {
    return c.Ha(a, {frame:3})
  }
  function t(a) {
    return c.Ha(a, {frame:1})
  }
  function u(a) {
    return c.Ha(a, {frame:2})
  }
  function F(a) {
    return c.Ha(a, {frame:0})
  }
  function D(a) {
    return c.Ha(a, {frame:3, gc:j})
  }
  function K(a) {
    return c.Ha(a, {frame:1, gc:j})
  }
  function z(a) {
    return c.Ha(a, {frame:2, gc:j})
  }
  function E(a) {
    return c.Ha(a, {frame:0, gc:j})
  }
  gls2.ha = {};
  var c = I.Ia;
  gls2.ha["basic0-0"] = new I.ja({top:c.action([m])});
  gls2.ha["basic0-1"] = new I.ja({top:c.action([b(v, -0.01, 8, f(3, -15, 15))])});
  gls2.ha["basic1-0"] = new I.ja({top:c.action([c.repeat(999, [k(40), m(n)])])});
  gls2.ha["basic1-1"] = new I.ja({top:c.action([c.repeat(999, [k(20), m(n)])])});
  gls2.ha["basic1-2"] = new I.ja({top:c.action([k("10+$rand*100"), d(3, -20, 20, n)])});
  gls2.ha["basic1-3"] = new I.ja({top:c.action([c.repeat(999, [k("20+$rand*80"), d(3, -20, 20, n)])])});
  gls2.ha["basic2-0"] = new I.ja({top:c.action([c.repeat(999, [k(50), m(n)])])});
  gls2.ha["basic3-0"] = new I.ja({top:c.action([c.wait(20), c.repeat(999, [k(100), b(n, 0.1, 3, h)])])});
  gls2.ha["basic3-1"] = new I.ja({top:c.action([c.wait(20), c.repeat(999, [k(40), b(n, 0.1, 3, h)])])});
  gls2.ha["bukky-4-0"] = new I.ja({top0:c.action([k(30), c.repeat(999, [c.fire(c.direction(-40), n, z), c.repeat(3, [c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(20, "sequence"), n, z), c.fire(c.direction(-80, "sequence"), n, z), k(5)]), k(70)])]), top1:c.action([k(20), c.fire(c.direction(180, "absolute"), p, K), c.repeat(999, [c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), 
  p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(15, "sequence"), p, K), c.fire(c.direction(-90, "sequence"), p, K), k(5)])])});
  gls2.ha["cannon2-0"] = new I.ja({top0:c.action([c.repeat(999, [k(20), a(4, "0-10+$loop.index*15", "0+10+$loop.index*15", p), a(4, "90-10+$loop.index*15", "90+10+$loop.index*15", p), a(4, "180-10+$loop.index*15", "180+10+$loop.index*15", p), a(4, "270-10+$loop.index*15", "270+10+$loop.index*15", p), k(20), a(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", n), a(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", n), a(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", n), a(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", n)])]), top1:c.action([c.repeat(999, [c.fire(c.direction("  0+$loop.index*10", "absolute"), r, A), c.fire(c.direction(" 90+$loop.index*10", "absolute"), r, A), c.fire(c.direction("180+$loop.index*10", "absolute"), r, A), c.fire(c.direction("270+$loop.index*10", "absolute"), r, A), c.fire(c.direction("  0-$loop.index*10", "absolute"), r, A), c.fire(c.direction(" 90-$loop.index*10", "absolute"), r, A), c.fire(c.direction("180-$loop.index*10", 
  "absolute"), r, A), c.fire(c.direction("270-$loop.index*10", "absolute"), r, A), k(10)])]), top2:c.action([c.repeat(999, [k(43), d(30, 0, 348, n, F)])])});
  gls2.ha["cannon2-3"] = new I.ja({top0:c.action([c.repeat(999, [c.Da("d", "$loop.index*-6"), c.repeat(9, [c.fire(c.direction(36, "sequence"), c.speed(1), C(c.wa("ivs0", "$d")))]), k(10), c.fire(c.direction(39, "sequence"), c.speed(1), C(c.wa("ivs0", "$d")))])]), top1:c.action([c.repeat(999, [c.Da("d", "($loop.index)*+12"), c.repeat(12, [c.fire(c.direction(360 / 13, "sequence"), c.speed(1), C(c.wa("ivs1", "$d")))]), k(10), c.fire(c.direction(360 / 13 - 4, "sequence"), c.speed(1), C(c.wa("ivs1", "$d")))])]), 
  ivs0:c.action([c.wait(5), c.fire(c.direction("$1", "relative"), p, F), c.Wa()]), ivs1:c.action([c.wait(10), c.fire(c.direction("$1-5", "relative"), p, function(a) {
    return c.Ha(a, {frame:7, gc:j})
  }), c.fire(c.direction("$1+5", "relative"), p, function(a) {
    return c.Ha(a, {frame:6, gc:j})
  }), c.Wa()])});
  gls2.ha["cannon3-0"] = new I.ja({top0:c.action([c.repeat(999, [k(80), b(p, 0.01, 5, f(5, -30, 30, F, c.offsetX(-60))), b(p, 0.01, 5, f(5, -30, 30, F)), b(p, 0.01, 5, f(5, -30, 30, F, c.offsetX(60)))])])});
  gls2.ha["cannon4-0"] = new I.ja({top0:c.action([k(20), c.repeat(999, [c.fire(p, z), c.repeat(8, [k(10), c.Da("way", "$loop.count+1"), c.fire(c.direction("-12/2 - 12*($way-2)", "sequence"), p, z), c.repeat("$way-1", [c.fire(c.direction(12, "sequence"), p, z)])]), k(120)])])});
  gls2.ha["cannon5-0"] = new I.ja({top0:c.action([c.repeat(999, [c.fire(c.direction(-60), q, C(c.wa("b"))), c.repeat(11, [k(5), c.fire(c.direction(10, "sequence"), q, C(c.wa("b")))]), k(60)])]), b:c.action([c.wait(5), c.Te(c.speed(0), 0), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(0, "relative"), a, t)
  }), c.Wa])});
  gls2.ha["yuri-4"] = new I.ja({top:c.action([k(60), c.repeat(7, [a(7, 120, 240, r, F), k(8)])])});
  gls2.ha["kurokawa-1"] = new I.ja({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(-45), c.ra(j))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(45), c.ra(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.ra(j)), k(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.ra(j)), k(45)])])});
  gls2.ha["milk-5"] = new I.ja({top0:c.action([c.repeat(999, [d(5, -90, 90, n, H, c.offsetX(-45)), c.wait(27), d(5, -90, 90, n, H, c.offsetX(45)), k(120)])]), top1:c.action([c.repeat(999, [k(30), d(6, -90, 90, v, z, c.offsetX(-45)), c.wait(21), d(6, -90, 90, v, z, c.offsetX(45)), k(90)])]), top2:c.action([c.repeat(999, [k(55), d(13, -90, 90, r, A, c.offsetX(-45)), c.wait(20), d(13, -90, 90, r, A, c.offsetX(45)), k(21)])])});
  gls2.ha["ako-5"] = new I.ja({top:c.action([c.repeat(8, [d(3, -20, 20, v, t), k(2)])])});
  gls2.ha["kurokawa-4"] = new I.ja({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(-45), c.ra(j))
  }), b(n, -0.01, 4, function(a) {
    return d(4, -45, 45, a, u, c.offsetX(45), c.ra(j))
  }), k(90)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(0), n, D, c.offsetX(-45), c.ra(j)), k(45), c.fire(c.direction(0), n, D, c.offsetX(45), c.ra(j)), k(45)])])});
  gls2.ha["komachi-1"] = new I.ja({top0:c.action([c.repeat(20, [c.fire(c.direction(210, "absolute"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.repeat(57, [k(8), c.fire(c.direction(-720 / 57, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40))])])]), top1:c.action([c.repeat(20, 
  [c.fire(c.direction(-210, "absolute"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.repeat(57, [k(8), c.fire(c.direction(720 / 57, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40))])])]), top2:c.action([c.repeat(70, [c.fire(c.direction(0), n(0), E, c.offsetX(-110), c.ra(j)), c.repeat(6, 
  [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), E, c.offsetX(-110), c.ra(j))]), k(10), c.fire(c.direction(0), n(0), E, c.offsetX(110), c.ra(j)), c.repeat(6, [c.wait(1), c.fire(c.direction(0, "sequence"), n(0), E, c.offsetX(110), c.ra(j))]), k(10)])])});
  gls2.ha["komachi-2"] = new I.ja({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(4, -45, 45, a, u, c.offsetX(-45), c.ra(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), d(4, -45, 45, a, u, c.offsetX(45), c.ra(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), k(1)])
  }), k(180)])])});
  gls2.ha["komachi-3"] = new I.ja({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(8, -60, 60, a, u, c.offsetX(-45), c.ra(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), d(8, -60, 60, a, u, c.offsetX(45), c.ra(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), k(1)])
  }), k(180)])])});
  gls2.ha["komachi-4"] = new I.ja({top0:c.action([c.repeat(999, [c.repeat(4, [c.fire(c.direction("220+-1+$rand*2", "absolute"), n, H, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, H, c.offsetX(-45)), c.fire(c.direction("180+-1+$rand*2", "absolute"), n, H, c.offsetX(45)), c.fire(c.direction("140+-1+$rand*2", "absolute"), n, H, c.offsetX(45)), k(4)]), k(60)])]), top1:c.action([c.repeat(70, [c.fire(c.direction(0), n(5), E, c.offsetX(-110), c.ra(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), n(5), E, c.offsetX(-110), c.ra(j))]), k(30), c.fire(c.direction(0), n(5), E, c.offsetX(110), c.ra(j)), c.repeat(12, [c.wait(1), c.fire(c.direction(0, "sequence"), n(5), E, c.offsetX(110), c.ra(j))]), k(30)])])});
  gls2.ha["komachi-5"] = new I.ja({top0:c.action([c.repeat(999, [c.fire(c.direction(210, "absolute"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.repeat(60, [k(4), c.fire(c.direction(-6, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(-40))])])]), top1:c.action([c.repeat(999, [c.fire(c.direction(-210, 
  "absolute"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.repeat(60, [k(4), c.fire(c.direction(6, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40)), c.fire(c.direction(120, "sequence"), r(1), t, c.offsetX(40))])])]), top2:c.action([c.repeat(999, [c.fire(c.direction(0), v(0), E, c.offsetX(-110), c.ra(j)), c.repeat(30, [c.wait(1), c.fire(c.direction(0, 
  "sequence"), v(0), E, c.offsetX(-110), c.ra(j))]), k(5), c.fire(c.direction(0), v(0), E, c.offsetX(110), c.ra(j)), c.repeat(30, [c.wait(1), c.fire(c.direction(0, "sequence"), v(0), E, c.offsetX(110), c.ra(j))]), k(5)])])});
  gls2.ha["nozomi-4"] = new I.ja({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(12, [c.Da("c", "2+$loop.index"), d("$c", "-4-($c-2)*4", "4+($c-2)*4", G("(560-$c*40)*0.03"), D, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(40), C(c.wa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(-5, "sequence"), a, F, c.offsetX(-50)), c.wait(3)])
  }), k(90), c.fire(c.direction(-40), C(c.wa("noop"))), b(n, 0.03, 16, function(a) {
    return c.action([c.fire(c.direction(5, "sequence"), a, F, c.offsetX(50)), c.wait(3)])
  }), k(90)])]), noop:c.action([c.wait(1), c.Wa])});
  gls2.ha["nozomi-5"] = new I.ja({top0:c.action([c.wait(60), c.repeat(999, [c.repeat(6, [c.Da("c", "2+$loop.index"), d("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", G("(560-$c*40)*0.02"), D, c.offsetY(-50)), d("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", G("(560-$c*40)*0.02"), D, c.offsetY(-50))]), k(150), c.repeat(6, [c.Da("c", "2+$loop.index"), 
  d("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), d("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), d("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), d("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", G("(560-$c*40)*0.02"), z, c.offsetY(-50)), d("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", G("(560-$c*40)*0.02"), z, c.offsetY(-50))]), k(150)])]), top1:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(5), 
  C(c.wa("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(-1, "sequence"), a, F, c.offsetX(-50)), k(3)])
  }), c.fire(c.direction(-5), C(c.wa("noop"))), b(n, 0.06, 15, function(a) {
    return c.action([c.fire(c.direction(1, "sequence"), a, F, c.offsetX(50)), k(3)])
  })])]), noop:c.action([c.wait(1), c.Wa])});
  gls2.ha["mktn-5"] = new I.ja({top0:c.action([c.repeat(999, [c.fire(c.direction(0), r, C(c.wa("noop"))), c.repeat(20, [c.fire(c.direction(0.5, "sequence"), c.speed(0.08, "sequence"), u), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), u)]), k(6)]), c.fire(c.direction(0), r, C(c.wa("noop"))), c.repeat(20, [c.fire(c.direction(-0.5, "sequence"), c.speed(0.08, "sequence"), u), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), u)]), k(6)]), k(60)])]), 
  top1:c.action([c.repeat(999, [c.fire(c.direction(0, "absolute"), n, C(c.wa("noop"))), c.repeat(5, [c.fire(c.direction(-10, "sequence"), c.speed(0.05, "sequence"), A), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), A)]), k(5)]), c.fire(c.direction(0, "absolute"), n, C(c.wa("noop"))), c.repeat(5, [c.fire(c.direction(10, "sequence"), c.speed(0.05, "sequence"), A), c.repeat(12, [c.fire(c.direction(30, "sequence"), c.speed(0, "sequence"), A)]), k(5)]), k(40)])]), top2:c.action([c.repeat(999, 
  [c.Da("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"), d(5, -30, 30, n(7), N, c.offsetX("$gun"), c.offsetY(20)), k(21)])]), noop:c.action([c.wait(1), c.Wa])});
  gls2.ha.akane = new I.ja({top:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [k(60), d(1, 1, 1, r, u, c.offsetX(-16), c.offsetY(6), c.ra(j)), d(1, 1, 1, r, u, c.offsetX(16), c.offsetY(6), c.ra(j))]), k(120)])])});
  gls2.ha["nao-1"] = new I.ja({top:c.action([c.repeat(999, [k(30), c.fire(c.direction(0), v, D)])])});
  gls2.ha["nao-2"] = new I.ja({top:c.action([c.repeat(999, [k(30), d(2, -5, 5, v, D, c.offsetX(0), c.offsetY(0), c.ra(j))])])});
  gls2.ha["nao-3"] = new I.ja({top:c.action([c.repeat(999, [k(30), d(2, -1, 1, v, D, c.offsetX(0), c.offsetY(0), c.ra(j))])])});
  gls2.ha.reika = new I.ja({top:c.action([c.repeat(999, [k(30), c.fire(c.direction(0), n, z)])])});
  gls2.ha.aguri = new I.ja({top0:c.action([c.repeat(999, [b(n, -0.01, 4, function(a) {
    return c.action([d(8, -60, 60, a, u, c.offsetX(-45), c.ra(j)), k(4)])
  }), b(n, -0.01, 4, function(a) {
    return c.action([k(4), d(8, -60, 60, a, u, c.offsetX(45), c.ra(j))])
  }), k(90)])]), top1:c.action([c.repeat(999, [k(45), b(p, 0.01, 22, function(a) {
    return c.action([c.repeat("1 + $rand*6", [c.fire(c.direction("-5+$rand*10"), a, K)]), k(1)])
  }), k(180)])])});
  gls2.ha.miyuki_y = new I.ja({top:c.action([c.wait("40"), c.repeat(999, [k(30), d(3, -45, 45, r, u, c.offsetX(-64), c.offsetY(16), c.ra(j)), d(3, -45, 45, r, u, c.offsetX(0), c.offsetY(16), c.ra(j)), d(3, -45, 45, r, u, c.offsetX(16), c.offsetY(16), c.ra(j)), d(3, -45, 45, r, u, c.offsetX(32), c.offsetY(16), c.ra(j)), b(r, 0.001, 5, function(a) {
    return c.action([d(3, "-45", "+45", a, z, c.offsetX(0), c.offsetY(0))])
  })])])});
  gls2.ha.miyuki_t = new I.ja({top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(3, [a(3, -20, 20, n, z, c.offsetX(32), c.offsetY(32)), k(30)]), c.repeat(3, [a(3, -10, 10, n, z, c.offsetX(-32), c.offsetY(-32)), k(30)]), c.repeat(3, [a(3, -5, 5, n, z, c.offsetX(-16), c.offsetY(-16)), k(30)]), k(120)])]), top0:c.action([c.wait("40"), c.repeat(999, [c.repeat(5, [a(5, -30, 30, n, z, c.offsetX(-32), c.offsetY(32)), k(45)]), c.repeat(5, [a(5, -30, 30, n, z, c.offsetX(32), c.offsetY(32)), k(45)]), k(120)])])});
  gls2.ha.alice = new I.ja({top0:c.action([c.repeat(999, [a(8, 0, 180, r, z), a(8, 0, -180, r, z), k(60), a(9, 0, 180, r, D), a(9, 0, -180, r, D), k(60)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(5, "sequence"), r, E, c.offsetX(0), c.ra(j)), k(10)])]), top1:c.action([c.repeat(999, [c.fire(c.direction(10, "sequence"), p, K, c.offsetX(0), c.ra(j)), k(10)])])});
  gls2.ha.aliceLeaf = new I.ja({top:c.action([c.wait(20), c.repeat(999, [c.fire(c.direction(10, "sequence"), n(5), A, c.offsetX(0), c.ra(j)), k(10)])])});
  gls2.ha["honoka-1"] = new I.ja({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, A, c.offsetX(0), c.offsetY(30)), k(30), d(5, -40, 40, r, A, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), t), d(3, -3, 3, p(1), t), d(4, -4, 4, p(1.4), t), d(5, -5, 5, p(1.8), t), k(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, r, E, c.offsetX(-110), c.offsetY(-70)), k(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, r, E, c.offsetX(110), 
  c.offsetY(-70)), k(30)])])});
  gls2.ha["nagisa-1-1"] = new I.ja({top0:c.action([k(90), c.repeat(3, [c.Da("way", "5 + $loop.index*6"), b(n, 0.01, "3 + $loop.index*2", function(a) {
    return c.action([d("$way", -110, 110, a, t, c.offsetX(-190), c.offsetY(-20)), d("$way", -110, 110, a, t, c.offsetX(190), c.offsetY(-20)), c.wait(10)])
  }), k(60)]), k(60)])});
  gls2.ha["nagisa-1-2"] = new I.ja({top0:c.action([c.repeat(12, [d(15, -90, 90, r, t), k(40)])]), top1:c.action([c.repeat(3, [c.repeat(3, [d(5, -65, -55, p, E, c.offsetX(-190), c.offsetY(-20)), d(5, -35, -25, p, E, c.offsetX(-190), c.offsetY(-20)), d(5, -5, 5, p, E, c.offsetX(-190), c.offsetY(-20)), d(5, 25, 35, p, E, c.offsetX(-190), c.offsetY(-20)), d(5, 55, 65, p, E, c.offsetX(-190), c.offsetY(-20)), c.wait(2)]), k(60), c.repeat(3, [d(5, -65, -55, p, E, c.offsetX(190), c.offsetY(-20)), d(5, -35, 
  -25, p, E, c.offsetX(190), c.offsetY(-20)), d(5, -5, 5, p, E, c.offsetX(190), c.offsetY(-20)), d(5, 25, 35, p, E, c.offsetX(190), c.offsetY(-20)), d(5, 55, 65, p, E, c.offsetX(190), c.offsetY(-20)), c.wait(2)]), k(60)])])});
  gls2.ha["nagisa-1-3"] = new I.ja({top0:c.action([k(60), c.repeat(3, [c.fire(c.direction(-60), p, u, c.offsetX(-190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(6, "sequence"), p, u, c.offsetX(-190), c.offsetY(-20))])])]), top1:c.action([k(80), c.repeat(3, [c.fire(c.direction(60), p, u, c.offsetX(190), c.offsetY(-20)), c.repeat(20, [k(15), c.fire(c.direction(-6, "sequence"), p, u, c.offsetX(190), c.offsetY(-20))])])]), top2:c.action([c.repeat(6, [c.repeat(3, [d(5, -60, -40, p, A, c.offsetX(-190), 
  c.offsetY(-20)), d(5, -20, -10, p, A, c.offsetX(-190), c.offsetY(-20)), d(5, 10, 20, p, A, c.offsetX(-190), c.offsetY(-20)), d(5, 40, 60, p, A, c.offsetX(-190), c.offsetY(-20)), c.wait(4)]), k(60), c.repeat(3, [d(5, -60, -40, p, A, c.offsetX(190), c.offsetY(-20)), d(5, -20, -10, p, A, c.offsetX(190), c.offsetY(-20)), d(5, 10, 20, p, A, c.offsetX(190), c.offsetY(-20)), d(5, 40, 60, p, A, c.offsetX(190), c.offsetY(-20)), c.wait(4)]), k(60)])])});
  gls2.ha["nagisa-2-1"] = new I.ja({top0:c.action([k(120), c.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", r, F, c.offsetX(-190), c.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", r, F, c.offsetX(190), c.offsetY(-20)), k(10)])]), top1:c.action([k(120), c.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", p, D), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", p, D), k(12)])])});
  gls2.ha["nagisa-2-2"] = new I.ja({top0:c.action([k(120), c.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", n, D), k(12)])]), top1:c.action([k(120), c.repeat(6, [a(9, 150, 130, r(0.8), t), a(9, 172, 188, r(0.8), t), a(9, 210, 230, r(0.8), t), k(30), a(9, 170, 150, r(0.8), t), a(9, 190, 210, r(0.8), t), k(30)])])});
  gls2.ha["nagisa-2-3"] = new I.ja({top:c.action([k(120), c.repeat(12, [a(23, 0, 360, r, A, c.offsetX(-190), c.offsetY(-20)), a(23, 0, 360, r, A), a(23, 0, 360, r, A, c.offsetX(190), c.offsetY(-20)), k(30)])])});
  gls2.ha["nagisa-3-1"] = new I.ja({top0:c.action([k(50), c.repeat(999, [b(n, 0.001, 5, function(a) {
    return c.action([d(41, "-180", "+180", a, z, c.offsetX(-190), c.offsetY(-20)), d(41, "-180", "+180", a, z, c.offsetX(190), c.offsetY(-20))])
  }), k(50)])]), top1:c.action([c.repeat(999, [d(2, -2, 0, v, t), k(10), d(2, 0, 2, v, t), k(150)])])});
  gls2.ha["mai-1"] = new I.ja({top0:c.action([k(50), c.repeat(50, [c.Da("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, F), c.Wa]))), c.Da("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, F), c.Wa]))), k(8)])]), top1:c.action([k(50), c.repeat(12, [a(5, -50, 50, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, 
  D), c.Wa]))), a(5, -230, -130, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Wa]))), k(16), a(6, -50, 50, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Wa]))), a(6, -230, -130, q, C(c.action([c.wait(8), c.fire(c.direction(0, "relative"), p, D), c.Wa]))), k(16)])])});
  gls2.ha["mai-2"] = new I.ja({top:c.action([k(50), c.repeat(15, [c.fire(c.direction(-10), z(c.wa("fireChild", "$loop.index*10"))), k(8)])]), fireChild:c.action([k("40+$1"), b(p, 0.1, 5, function(a) {
    return c.fire(c.direction(-90, "absolute"), a, u)
  }), c.Wa])});
  gls2.ha["saki-1-1"] = new I.ja({top:c.action([k(100), c.repeat(3, [c.wa("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:c.action([c.Da("way", "$1"), c.repeat("30", [d("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", n, F), d("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", n, F), k(12)]), c.repeat("$2", [d(9, -20, 20, v, H)])])});
  gls2.ha["saki-1-2"] = new I.ja({top:c.action([k(100), c.repeat(5, [c.Da("way", "5+$loop.index*2"), c.repeat(6, [c.Da("s", "$loop.index*0.6"), c.action(function() {
    for(var a = [], b = 0;5 > b;b++) {
      a.push(d("$way", -30, 30, n("$s"), D, c.offsetX(-120 + 60 * b)))
    }
    return a
  }())]), k(90)])])});
  gls2.ha["saki-1-3"] = new I.ja({top:c.action([c.Da("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.wa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Te(c.speed(0), 50), c.wait(90), d(13, 0, 360 - 360 / 13, p, H), c.Wa])});
  gls2.ha["saki-2-1"] = new I.ja({top0:c.action([k(100), c.repeat(4, [d(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", p, F, c.offsetX(-40)), d(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", p, F, c.offsetX(40)), k(60), d(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", p, F, c.offsetX(-40)), d(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", p, F, c.offsetX(40)), k(60)])]), top1:c.action([k(100), c.repeat(4, [c.repeat(7, [c.Da("o", "$loop.index*20 - 60"), c.fire(c.direction("$o"), 
  w, H), c.repeat(4, [c.Da("w", "$loop.count"), d("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", w("$w*-1.0"), H)])]), k(120)])])});
  gls2.ha["saki-2-2"] = new I.ja({top:c.action([k(60), c.Da("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(12, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), z(c.wa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), z(c.wa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Te(c.speed(0), "10 + $rand*15"), c.wait(65), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-48), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-36), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-24), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(-12), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(0), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(12), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(24), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(36), a, u)])
  }), b(n, 0.14, 6, function(a) {
    return c.action([c.fire(c.direction(48), a, u)])
  }), k(2), c.Wa])});
  gls2.ha["saki-2-3"] = new I.ja({top:c.action([k(60), c.Da("dir", "$rand < 0.5 ? -1 : 1"), c.repeat(24, [c.fire(c.direction("120*$dir + $loop.index*10*-$dir"), c.speed(2), D(c.wa("seed"))), k(8), c.fire(c.direction("120*-$dir + $loop.index*10*$dir"), c.speed(2), D(c.wa("seed"))), k(8)]), k(60)]), seed:c.action([c.wait(10), c.Te(c.speed(0), "10 + $rand*20"), c.wait(65), b(n, 0.18, 7, function(a) {
    return c.action([c.fire(c.direction(180, "absolute"), a, H)])
  }), k(2), c.Wa])});
  gls2.ha["saki-3-1"] = new I.ja({top:c.action([c.fire(c.direction(180, "absolute"), G, z(c.wa("seed"))), k(60), c.fire(c.direction(180, "absolute"), G, z(c.wa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), G, z(c.wa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, F), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, F), c.fire(c.direction(90, "sequence"), p, F), c.fire(c.direction(90, "sequence"), p, F), k(10), c.fire(c.direction(100, 
  "sequence"), p, F)])])});
  gls2.ha["saki-3-2"] = new I.ja({top:c.action([c.fire(c.direction(180, "absolute"), G, D(c.wa("seed"))), k(60), c.fire(c.direction(180, "absolute"), G, D(c.wa("seed")), c.offsetX(-80)), c.fire(c.direction(180, "absolute"), G, D(c.wa("seed")), c.offsetX(80)), k(60)]), seed:c.action([c.fire(c.direction(0, "absolute"), n, p, t), c.repeat(999, [c.fire(c.direction(90, "sequence"), p, t), c.fire(c.direction(90, "sequence"), p, t), c.fire(c.direction(90, "sequence"), p, t), k(10), c.fire(c.direction(80, 
  "sequence"), p, t)])])});
  gls2.ha["rikka-1"] = new I.ja({top:c.action([c.repeat(5, [c.Da("s", "$loop.index*1.5"), k(30), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), d(41, -180 + 180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, -180 + 
  180 / 41 / 2 - 1, 180 - 180 / 41 / 2 - 1, u, n("$s"), c.offsetX(90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -179, 180 - 180 / 41 / 2 + 1, u, n("$s"), c.offsetX(90), c.offsetY(-20)), k(3), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(-90), c.offsetY(-20)), d(41, 180 / 41 / 2 + -180, 180 - 180 / 41 / 2 + 0, u, n("$s"), c.offsetX(90), c.offsetY(-20))])])});
  gls2.ha["rikka-2"] = new I.ja({top0:c.action([c.repeat(10, [c.fire(z(c.wa("snow")), c.offsetX(-90), c.offsetY(-20)), c.fire(z(c.wa("snow")), c.offsetX(90), c.offsetY(-20)), k(8)]), k(10)]), top1:c.action([c.repeat(35, [c.Da("d", "$loop.index*-(20+$ex*10)"), c.Da("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), C(c.wa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 + (30+$ex*10)", "sequence"), c.speed(1), C(c.wa("ivs", "$d", "$s")))]), c.repeat(35, 
  [c.Da("d", "$loop.index*+(20+$ex*10)"), c.Da("s", "($loop.index+1)*0.2"), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(1), C(c.wa("ivs", "$d", "$s")))]), k(5), c.fire(c.direction("360/6 - (30+$ex*10)", "sequence"), c.speed(1), C(c.wa("ivs", "$d", "$s")))])]), snow:c.action([c.repeat("3+$ex*3", [c.Da("s", "$loop.index+1"), c.fire(c.direction(0, "absolute"), c.speed("$s"), C(c.wa("snowArm"))), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed("$s"), C(c.wa("snowArm")))])]), c.Wa]), 
  snowArm:c.action([c.wait(2), c.fire(c.direction(0), v, E), c.Wa]), ivs:c.action([c.wait(10), c.fire(c.direction("$1-1", "relative"), n("$2"), N), c.fire(c.direction("$1+1", "relative"), n("$2"), N), c.Wa()])});
  gls2.ha["rikka-3"] = new I.ja({top0:c.action([k(40), c.fire(c.direction(-10), C(c.wa("dummy")), c.offsetX(-90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, "sequence"), G("$loop.index*0.5"), u, c.offsetX(-90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), u, c.offsetX(-90), c.offsetY(-20))]), k(5)]), k(40)]), top1:c.action([k(40), c.fire(c.direction(-10), C(c.wa("dummy")), c.offsetX(90), c.offsetY(-20)), c.repeat(12, [c.fire(c.direction(10, 
  "sequence"), G("$loop.index*0.5"), u, c.offsetX(90), c.offsetY(-20)), c.repeat(5, [c.fire(c.direction(60, "sequence"), c.speed(0, "sequence"), u, c.offsetX(90), c.offsetY(-20))]), k(5)]), k(40)]), dummy:c.action([c.wait(1), c.Wa])});
  gls2.ha["mana-1-1"] = new I.ja({top0:c.action([c.wa("winder", -1)]), top1:c.action([c.wa("winder", 1)]), winder:c.action([c.wait(60), c.repeat(8, [c.fire(c.direction("(-190+$loop.index*30)*$1"), n, R, c.offsetX("-145*$1"), c.offsetY(-5))]), c.repeat(50, [k(20), c.Da("a", "$loop.index*3"), c.repeat(8, [c.fire(c.direction("(-190+$a+$loop.index*30)*$1"), n, R, c.offsetX("-145*$1"), c.offsetY(-5))])])]), top2:c.action([c.wait(60), k(300), c.repeat(7, [c.Da("s", "$loop.index"), c.repeat(5, [c.Da("ss", 
  "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, v("$ss"), H, c.offsetX(-30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Da("ss", "($s-$loop.index)*0.5"), d(41, -180 + 360 / 41 / 2, 180 - 360 / 41 / 2, v("$ss"), H, c.offsetX(30), c.offsetY(-30))]), k(20), c.repeat(5, [c.Da("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 180 - 360 / 42 / 2, w("$ss"), u, c.offsetX(30), c.offsetY(-30))]), k(5), c.repeat(5, [c.Da("ss", "($s-$loop.index)*0.5"), a(42, -180 + 360 / 42 / 2, 
  180 - 360 / 42 / 2, w("$ss"), u, c.offsetX(-30), c.offsetY(-30))]), k(80)])])});
  gls2.ha["mana-1-2"] = new I.ja({top:c.action([c.repeat(5, [c.Da("i", "$loop.index"), c.Da("j", "1/($i+1) * 4"), b(n(6), 0.02, "4+$loop.index*3", function(a) {
    return c.action([c.fire(c.direction("(12-$i)*(-3*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, H, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, H, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+3*$j)"), 
    a, u, c.offsetX(-145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-3*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-2*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(-1*$j)"), a, H, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*( 0*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+1*$j)"), a, H, c.offsetX(145), c.offsetY(-50)), c.fire(c.direction("(12-$i)*(+2*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), 
    c.fire(c.direction("(12-$i)*(+3*$j)"), a, u, c.offsetX(145), c.offsetY(-50)), k(5)])
  }), k(60)])])});
  gls2.ha["mana-1-3"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-2-1"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-2-2"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-2-3"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-3-1"] = gls2.ha["mana-1-1"];
  gls2.ha["mana-3-2"] = gls2.ha["mana-1-1"];
  gls2.ha["setsuna-1"] = new I.ja({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, A, c.offsetX(0), c.offsetY(30)), k(30), d(5, -40, 40, r, A, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), t), d(3, -3, 3, p(1), t), d(4, -4, 4, p(1.4), t), d(5, -5, 5, p(1.8), t), k(110)])]), top2:c.action([c.repeat(20, [a(12, -10, -170, r, E, c.offsetX(-110), c.offsetY(-70)), k(30)])]), top3:c.action([c.repeat(20, [a(12, 10, 170, r, E, c.offsetX(110), 
  c.offsetY(-70)), k(30)])])});
  gls2.ha["love-1-1"] = new I.ja({top0:c.action([c.wait(60), c.repeat(10, [d(4, -40, 40, p, A, c.offsetX(0), c.offsetY(30)), k(30), d(5, -40, 40, r, A, c.offsetX(0), c.offsetY(30)), k(30)])]), top1:c.action([c.wait(60), c.repeat(5, [d(2, -2, 2, p(0.6), t), d(3, -3, 3, p(1), t), d(4, -4, 4, p(1.4), t), d(5, -5, 5, p(1.8), t), k(110)])])});
  gls2.ha.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      O.push(gls2.Ma())
    }
    a = gls2.ha.Ue = tm.Db.bd.ge;
    a.xg = function(a) {
      return!(a instanceof gls2.Ma) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Bh = function(a) {
      var b = O.shift(0);
      if(b) {
        return b.sa = 50, L.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.gc ? (b.scaleX = 1, b.scaleY = 1, b.$c = s) : (a.re ? (b.scaleX = 0.4, b.scaleY = 1.5) : a.Yb ? (b.scaleX = 1, b.scaleY = 10, b.blendMode = "lighter") : (b.scaleX = 0.8, b.scaleY = 1.5), b.$c = j), b.visible = a.visible === s ? s : j, b.gc = !!a.gc, b.re = !!a.re, b.Yb = !!a.Yb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Gh = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.vd = 3;
    I.Ra.Xb.$rank = 0;
    I.Ra.Xb.$hyperOff = 1
  };
  gls2.ha.erase = function(a, b, c) {
    for(var d = [].concat(L), f = 0, h = d.length;f < h;f++) {
      if(a) {
        var k = gls2.sh(!!b);
        k.setPosition(d[f].x, d[f].y);
        c && (k.pd = j)
      }
      d[f].Aa()
    }
  };
  gls2.ha.ee = function() {
    for(var a = [].concat(L), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.Ma = tm.createClass({superClass:tm.display.Sprite, sa:0, gc:s, re:s, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      O.push(this);
      var a = L.indexOf(this);
      -1 !== a && L.splice(a, 1)
    })
  }, update:function() {
    this.gc && (this.rotation += 15)
  }, Aa:function() {
    var a = gls2.Ma.ie().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  gls2.Ma.ie = function() {
    gls2.Ma.ie.lg === l && (gls2.Ma.ie.lg = gls2.Ua(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return gls2.Ma.ie.lg.clone()
  };
  gls2.Ma.ie.lg = l;
  var O = [], L = gls2.Ma.kb = []
})();
gls2.la = {};
gls2.la.clamp = function(b, a, f) {
  return b < a ? a : b > f ? f : b
};
gls2.la.DEG_TO_RAD = Math.PI / 180;
gls2.la.RAD_TO_DEG = 180 / Math.PI;
gls2.la.degToRad = function(b) {
  return b * gls2.la.DEG_TO_RAD
};
gls2.la.radToDeg = function(b) {
  return b * gls2.la.RAD_TO_DEG
};
gls2.la.rand = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
gls2.la.randf = function(b, a) {
  return window.Math.random() * (a - b) + b
};
gls2.la.magnitude = function() {
  return Math.sqrt(gls2.la.magnitudeSq.apply(l, arguments))
};
gls2.la.magnitudeSq = function() {
  for(var b = 0, a = 0, f = arguments.length;a < f;++a) {
    b += arguments[a] * arguments[a]
  }
  return b
};
gls2.la.inside = function(b, a, f) {
  return b >= a && b <= f
};

