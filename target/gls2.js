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
var p = {Ag:this};
(function() {
  function b(a, b) {
    for(var d = 0, g = a.length;d < g;d++) {
      if(a[d].label == b) {
        return a[d]
      }
    }
  }
  p.ma = function(a) {
    this.type = "none";
    this.root = this;
    this.Ga = [];
    this.yd = [];
    this.Ed = [];
    if(a !== i) {
      for(var b in a) {
        a.hasOwnProperty(b) && (a[b].label = b, a[b] instanceof p.bb ? this.Ga.push(a[b]) : a[b] instanceof p.Pb ? this.yd.push(a[b]) : a[b] instanceof p.tc && this.Ed.push(a[b]))
      }
      a = 0;
      for(b = this.Ga.length;a < b;a++) {
        this.Ga[a].hb(this)
      }
      a = 0;
      for(b = this.yd.length;a < b;a++) {
        this.yd[a].hb(this)
      }
      a = 0;
      for(b = this.Ed.length;a < b;a++) {
        this.Ed[a].hb(this)
      }
    }
  };
  p.ma.prototype.Mf = function(a) {
    return b(this.Ga, a)
  };
  p.ma.prototype.Wh = function() {
    for(var a = [], b = 0, d = this.Ga.length;b < d;b++) {
      var g = this.Ga[b];
      g.label && 0 === g.label.indexOf("top") && (a[a.length] = g.label)
    }
    return a
  };
  p.ma.prototype.Nh = function(a) {
    var b;
    if(b = this.Mf(a)) {
      return b
    }
    h(Error("action labeled '" + a + "' is undefined."))
  };
  p.ma.prototype.Oh = function(a) {
    return b(this.yd, a)
  };
  p.ma.prototype.Ph = function(a) {
    var b;
    if(b = this.Oh(a)) {
      return b
    }
    h(Error("bullet labeled '" + a + "' is undefined."))
  };
  p.ma.prototype.Qh = function(a) {
    return b(this.Ed, a)
  };
  p.ma.prototype.Rh = function(a) {
    var b;
    if(b = this.Qh(a)) {
      return b
    }
    h(Error("fire labeled '" + a + "' is undefined."))
  };
  p.Pb = function() {
    this.root = this.label = k;
    this.direction = new p.Hb(0);
    this.speed = new p.Ib(1);
    this.Ga = [];
    this.Pa = {};
    this.ka = {}
  };
  p.Pb.prototype.clone = function(a) {
    var b = new p.Pb;
    b.label = this.label;
    b.root = this.root;
    b.Ga = this.Ga;
    b.direction = new p.Hb(a.La(this.direction.value));
    b.direction.type = this.direction.type;
    b.speed = new p.Ib(a.La(this.speed.value));
    b.speed.type = this.speed.type;
    b.Pa = this.Pa;
    b.ka = a.ka;
    return b
  };
  p.Pb.prototype.hb = function(a) {
    this.root = a;
    for(var b = 0, d = this.Ga.length;b < d;b++) {
      this.Ga[b].hb(a)
    }
  };
  p.gd = function(a) {
    this.root = k;
    this.label = a;
    this.Da = []
  };
  p.gd.prototype.clone = function(a) {
    var b = a.ka;
    a.ka = a.ne(this.Da);
    var d = this.root.Ph(this.label).clone(a);
    a.ka = b;
    return d
  };
  p.gd.prototype.hb = function(a) {
    this.root = a
  };
  p.Fa = function() {
    this.Wa = ""
  };
  p.Fa.prototype.hb = function(a) {
    this.root = a
  };
  p.bb = function() {
    this.Wa = "action";
    this.root = this.label = k;
    this.ob = [];
    this.Da = []
  };
  p.bb.prototype = new p.Fa;
  p.bb.prototype.hb = function(a) {
    this.root = a;
    for(var b = 0, d = this.ob.length;b < d;b++) {
      this.ob[b].hb(a)
    }
  };
  p.bb.prototype.clone = function() {
    var a = new p.bb;
    a.label = this.label;
    a.root = this.root;
    a.ob = this.ob;
    return a
  };
  p.sc = function(a) {
    this.Wa = "actionRef";
    this.label = a;
    this.root = k;
    this.Da = []
  };
  p.sc.prototype = new p.Fa;
  p.sc.prototype.clone = function() {
    var a = new p.bb;
    a.root = this.root;
    a.ob.push(this);
    return a
  };
  p.tc = function() {
    this.Wa = "fire";
    this.wa = this.speed = this.direction = this.root = this.label = k;
    this.Pa = new p.Zd
  };
  p.tc.prototype = new p.Fa;
  p.tc.prototype.hb = function(a) {
    this.root = a;
    this.wa && this.wa.hb(a)
  };
  p.$d = function(a) {
    this.Wa = "fireRef";
    this.label = a;
    this.Da = []
  };
  p.$d.prototype = new p.Fa;
  p.jd = function() {
    this.Wa = "changeDirection";
    this.direction = new p.Hb;
    this.Sa = 0
  };
  p.jd.prototype = new p.Fa;
  p.kd = function() {
    this.Wa = "changeSpeed";
    this.speed = new p.Ib;
    this.Sa = 0
  };
  p.kd.prototype = new p.Fa;
  p.fd = function() {
    this.Wa = "accel";
    this.Cb = new p.ce;
    this.Gb = new p.le;
    this.Sa = 0
  };
  p.fd.prototype = new p.Fa;
  p.qd = function(a) {
    this.Wa = "wait";
    this.value = a || 0
  };
  p.qd.prototype = new p.Fa;
  p.ke = function() {
    this.Wa = "vanish"
  };
  p.ke.prototype = new p.Fa;
  p.od = function() {
    this.Wa = "repeat";
    this.jg = 0;
    this.action = k;
    this.Da = []
  };
  p.od.prototype = new p.Fa;
  p.od.prototype.hb = function(a) {
    this.root = a;
    this.action && this.action.hb(a)
  };
  p.Xd = function(a, b) {
    this.Wa = "bind";
    this.Ei = a;
    this.Lh = b
  };
  p.Xd.prototype = new p.Fa;
  p.ie = function(a, b) {
    this.Wa = "notify";
    this.Hh = a;
    this.Da = b || k
  };
  p.ie.prototype = new p.Fa;
  p.xg = new p.Fa;
  p.Hb = function(a) {
    this.type = "aim";
    this.value = a || 0
  };
  p.Ib = function(a) {
    this.type = "absolute";
    this.value = a === i ? 1 : a
  };
  p.ce = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  p.le = function(a) {
    this.type = "absolute";
    this.value = a || 0
  };
  p.Zd = function(a) {
    a = a || {};
    this.offsetX = a.offsetX || 0;
    this.offsetY = a.offsetY || 0;
    this.Ha = j;
    a.Ha !== i && (this.Ha = !!a.Ha)
  };
  p.pf = function(a) {
    this.value = a || 0
  };
  p.qf = function(a) {
    this.value = a || 0
  };
  p.ff = function(a) {
    this.value = !!a
  }
})();
p.va = function(b) {
  this.uf = b;
  this.rd = [];
  this.Sb = -1;
  this.Ka = k;
  this.ka = {}
};
p.va.prototype.next = function() {
  this.Sb += 1;
  if(this.Ka !== k) {
    var b = this.Ka.ob[this.Sb];
    if(b !== i) {
      if(b instanceof p.bb) {
        return this.Kc(), this.Ka = b, this.ka = this.me(), this.next()
      }
      if(b instanceof p.sc) {
        return this.Kc(), this.Ka = this.uf.Nh(b.label), this.ka = this.ne(b.Da), this.next()
      }
      if(b instanceof p.od) {
        return this.ka.Cc = 0, this.ka.Xf = this.La(b.jg) | 0, this.Kc(), this.Ka = b.action.clone(), this.ka = this.me(), this.next()
      }
      if(b instanceof p.tc) {
        var a = new p.tc;
        a.wa = b.wa.clone(this);
        b.direction !== k && (a.direction = new p.Hb(this.La(b.direction.value)), a.direction.type = b.direction.type);
        b.speed !== k && (a.speed = new p.Ib(this.La(b.speed.value)), a.speed.type = b.speed.type);
        a.Pa = b.Pa;
        return a
      }
      return b instanceof p.$d ? (this.Kc(), this.Ka = new p.bb, this.Ka.ob = [this.uf.Rh(b.label)], this.ka = this.ne(b.Da), this.next()) : b instanceof p.jd ? (a = new p.jd, a.direction.type = b.direction.type, a.direction.value = this.La(b.direction.value), a.Sa = this.La(b.Sa), a) : b instanceof p.kd ? (a = new p.kd, a.speed.type = b.speed.type, a.speed.value = this.La(b.speed.value), a.Sa = this.La(b.Sa), a) : b instanceof p.fd ? (a = new p.fd, a.Cb.type = b.Cb.type, a.Cb.value = this.La(b.Cb.value), 
      a.Gb.type = b.Gb.type, a.Gb.value = this.La(b.Gb.value), a.Sa = this.La(b.Sa), a) : b instanceof p.qd ? new p.qd(this.La(b.value)) : b instanceof p.ke ? b : b instanceof p.Xd ? (this.ka["$" + b.Ei] = this.La(b.Lh), p.xg) : b instanceof p.ie ? b : k
    }
    this.vh();
    if(this.Ka === k) {
      return k
    }
    if((b = this.Ka.ob[this.Sb]) && "repeat" == b.Wa) {
      this.ka.Cc++, this.ka.Cc < this.ka.Xf && (this.Kc(), this.Ka = b.action.clone(), this.ka = this.me())
    }
    return this.next()
  }
  return k
};
p.va.prototype.Kc = function() {
  this.rd.push({action:this.Ka, cursor:this.Sb, scope:this.ka});
  this.Sb = -1
};
p.va.prototype.vh = function() {
  var b = this.rd.pop();
  b ? (this.Sb = b.cursor, this.Ka = b.action, this.ka = b.scope) : (this.Sb = -1, this.Ka = k, this.ka = {})
};
p.va.prototype.La = function(b) {
  var a;
  if("number" === typeof b) {
    return b
  }
  if(isNaN(a = Number(b))) {
    if((a = this.ka[b]) || (a = p.va.Oa[b])) {
      return a
    }
    if("$rand" === b) {
      return Math.random()
    }
  }else {
    return a
  }
  a = {};
  for(var c in p.va.Oa) {
    p.va.Oa.hasOwnProperty(c) && (a[c] = p.va.Oa[c])
  }
  for(c in this.ka) {
    this.ka.hasOwnProperty(c) && (a[c] = this.ka[c])
  }
  a.$rand = Math.random();
  (c = this.rd[this.rd.length - 1]) && (a.$loop = {index:c.scope.Cc, count:c.scope.Cc + 1, first:0 === c.scope.Cc, last:c.scope.Cc + 1 >= c.scope.Xf});
  return(new Function("return " + b.split("$").join("this.$"))).apply(a)
};
p.va.prototype.ne = function(b) {
  var a = {};
  if(b) {
    for(var c = 0, d = b.length;c < d;c++) {
      a["$" + (c + 1)] = this.La(b[c])
    }
  }else {
    for(c in this.ka) {
      this.ka.hasOwnProperty(c) && (a[c] = this.ka[c])
    }
  }
  return a
};
p.va.prototype.me = function() {
  var b = {}, a;
  for(a in this.ka) {
    this.ka.hasOwnProperty(a) && (b[a] = this.ka[a])
  }
  return b
};
p.ma.prototype.Be = function(b) {
  var a = new p.va(this);
  if(b = this.Mf(b)) {
    a.Ka = b
  }
  return a
};
p.Pb.prototype.Be = function() {
  var b = new p.va(this.root), a = new p.bb;
  a.root = this.root;
  a.ob = this.Ga;
  b.Ka = a;
  b.ka = this.ka;
  return b
};
p.va.Oa = {};
p.ra = function(b) {
  b = b || "";
  for(var a in p.ra) {
    p.ra.hasOwnProperty(a) && (p.Ag[b + a] = p.ra[a])
  }
};
p.ra.action = function(b) {
  if(0 < arguments.length) {
    for(var a = 0, c = arguments.length;a < c;a++) {
      arguments[a] instanceof Function && (arguments[a] = arguments[a]())
    }
  }
  if(b instanceof Array) {
    a = 0;
    for(c = b.length;a < c;a++) {
      b[a] instanceof Function && (b[a] = b[a]())
    }
  }
  var d = new p.bb;
  if(b instanceof Array) {
    b.some(function(a) {
      return!(a instanceof p.Fa)
    }) && h(Error("argument type error.")), d.ob = b
  }else {
    a = 0;
    for(c = arguments.length;a < c;a++) {
      arguments[a] instanceof p.Fa ? d.ob[a] = arguments[a] : h(Error("argument type error."))
    }
  }
  return d
};
p.ra.xh = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("label is required."));
  d = new p.sc(b);
  if(a instanceof Array) {
    d.Da = a
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.Da.push(arguments[c])
    }
  }
  return d
};
p.ra.wa = function(b, a, c, d) {
  for(var g = 0, l = arguments.length;g < l;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  l = new p.Pb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof p.Hb ? l.direction = arguments[g] : arguments[g] instanceof p.Ib ? l.speed = arguments[g] : arguments[g] instanceof p.bb ? l.Ga.push(arguments[g]) : arguments[g] instanceof p.sc ? l.Ga.push(arguments[g]) : arguments[g] instanceof Array ? l.Ga.push(p.ra.action(arguments[g])) : arguments[g] instanceof Object ? l.Pa = arguments[g] : "string" === typeof arguments[g] && (l.label = arguments[g])
  }
  return l
};
p.ra.Li = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("label is required."));
  d = new p.gd(b);
  if(a instanceof Array) {
    d.Da = a
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.Da.push(arguments[c])
    }
  }
  return d
};
p.ra.fa = function(b, a, c, d) {
  for(var g = 0, l = arguments.length;g < l;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  l = new p.tc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof p.Hb ? l.direction = arguments[g] : arguments[g] instanceof p.Ib ? l.speed = arguments[g] : arguments[g] instanceof p.Pb ? l.wa = arguments[g] : arguments[g] instanceof p.gd ? l.wa = arguments[g] : arguments[g] instanceof p.Zd ? l.Pa = arguments[g] : arguments[g] instanceof p.pf ? l.Pa.offsetX = arguments[g].value : arguments[g] instanceof p.qf ? l.Pa.offsetY = arguments[g].value : arguments[g] instanceof p.ff && (l.Pa.Ha = arguments[g].value)
  }
  l.wa === i && h(Error("bullet (or bulletRef) is required."));
  return l
};
p.ra.Qi = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("label is required."));
  d = new p.$d(b);
  if(a instanceof Array) {
    d.Da = a
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.Da.push(arguments[c])
    }
  }
  return d
};
p.ra.Mi = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("direction is required."));
  a === i && h(Error("term is required."));
  c = new p.jd;
  c.direction = b instanceof p.Hb ? b : new p.Hb(b);
  c.Sa = a;
  return c
};
p.ra.Ni = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("speed is required."));
  a === i && h(Error("term is required."));
  c = new p.kd;
  c.speed = b instanceof p.Ib ? b : new p.Ib(b);
  c.Sa = a;
  return c
};
p.ra.Ki = function(b, a, c) {
  for(var d = 0, g = arguments.length;d < g;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  g = new p.fd;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof p.ce ? g.Cb = b : arguments[d] instanceof p.le ? g.Gb = a : g.Sa = arguments[d]
  }
  g.Cb === i && g.Gb === i && h(Error("horizontal or vertical is required."));
  g.Sa === i && h(Error("term is required."));
  return g
};
p.ra.wait = function(b) {
  for(var a = 0, c = arguments.length;a < c;a++) {
    arguments[a] instanceof Function && (arguments[a] = arguments[a]())
  }
  b === i && h(Error("value is required."));
  return new p.qd(b)
};
p.ra.rc = function() {
  return new p.ke
};
p.ra.repeat = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("times is required."));
  a === i && h(Error("action is required."));
  d = new p.od;
  d.jg = b;
  if(a instanceof p.bb || a instanceof p.sc) {
    d.action = a
  }else {
    if(a instanceof Array) {
      d.action = p.ra.action(a)
    }else {
      for(var g = [], c = 1;c < arguments.length;c++) {
        g.push(arguments[c])
      }
      d.action = p.ra.action(g)
    }
  }
  return d
};
p.ra.xd = function(b, a) {
  return new p.Xd(b, a)
};
p.ra.Zi = function(b, a) {
  return new p.ie(b, a)
};
p.ra.direction = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("value is required."));
  c = new p.Hb(b);
  a !== i && (c.type = a);
  return c
};
p.ra.speed = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("value is required."));
  c = new p.Ib(b);
  a && (c.type = a);
  return c
};
p.ra.Cb = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("value is required."));
  c = new p.ce(b);
  a && (c.type = a);
  return c
};
p.ra.Gb = function(b, a) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  b === i && h(Error("value is required."));
  c = new p.le(b);
  a && (c.type = a);
  return c
};
p.ra.Pi = function(b) {
  return new p.Zd(b)
};
p.ra.offsetX = function(b) {
  return new p.pf(b)
};
p.ra.offsetY = function(b) {
  return new p.qf(b)
};
p.ra.Ha = function(b) {
  return new p.ff(b)
};
tm.Va = tm.Va || {};
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
  tm.Va.ac = tm.createClass({init:function(a) {
    a || h(Error("argument is invalid.", a));
    this.rf = a
  }, Ad:function(a, b) {
    var c = this.rf.Wh();
    if(b === i && 0 < c.length) {
      for(var d = [], v = 0, r = c.length;v < r;v++) {
        d[d.length] = this.sf(a, c[v])
      }
      for(var z = function() {
        for(var a = d.length;a--;) {
          d[a].call(this)
        }
        z.we == d.length && (z.Oc = j, this.dispatchEvent(tm.event.Event("completeattack")))
      }, v = d.length;v--;) {
        d[v].Od = z
      }
      z.we = 0;
      z.Cf = function() {
        this.we++
      };
      z.we = 0;
      z.Oc = m;
      z.Fe = j;
      return z
    }
    return this.sf(a, b)
  }, sf:function(a, b) {
    function c() {
      c.ia += 1;
      this.ia = c.ia;
      var a = c.zd, b = c.uh;
      if(b) {
        if(c.ia < c.ue ? c.direction += c.xc : c.ia === c.ue && (c.direction = c.Wb), c.ia < c.ve ? c.speed += c.dd : c.ia === c.ve && (c.speed = c.Hc), c.ia < c.pe ? (c.oc += c.ud, c.qc += c.vd) : c.ia === c.pe && (c.oc = c.sd, c.qc = c.td), this.x += Math.cos(c.direction) * c.speed * a.pc, this.y += Math.sin(c.direction) * c.speed * a.pc, this.x += c.oc * a.pc, this.y += c.qc * a.pc, a.Ge(this)) {
          if(a.Zb || this.Zb) {
            this.rotation = (c.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = c.speed
          }
          if(!(c.ia < c.kg || c.Oc)) {
            for(var d;d = c.lg.next();) {
              switch(d.Wa) {
                case "fire":
                  b.rh.call(this, d, a, c, b);
                  break;
                case "wait":
                  a = 0;
                  c.kg = "number" === typeof d.value ? c.ia + d.value : 0 !== (a = ~~d.value) ? c.ia + a : c.ia + eval(d.value);
                  return;
                case "changeDirection":
                  b.mh.call(this, d, a, c);
                  break;
                case "changeSpeed":
                  b.nh.call(this, d, c);
                  break;
                case "accel":
                  b.kh.call(this, d, c);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  b.sh.call(this, d)
              }
            }
            c.Oc = j;
            c.Od ? c.Od.Cf() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), c.Oc = j, c.Od ? c.Od.Cf() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    a = function(a) {
      var b = {}, c = tm.Va.ac.Pc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b = b || "top";
    "string" === typeof b ? c.lg = this.rf.Be(b) : b instanceof p.Pb ? c.lg = b.Be() : (window.console.error(a, b), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    c.uh = this;
    c.zd = a;
    c.kg = -1;
    c.Oc = m;
    c.direction = 0;
    c.Tf = 0;
    c.speed = 0;
    c.Vf = 0;
    c.oc = 0;
    c.qc = 0;
    c.xc = 0;
    c.Wb = 0;
    c.ue = -1;
    c.dd = 0;
    c.Hc = 0;
    c.ve = -1;
    c.ud = 0;
    c.sd = 0;
    c.vd = 0;
    c.td = 0;
    c.pe = -1;
    c.ia = -1;
    c.Fe = j;
    return c
  }, qh:function(a) {
    function b() {
      this.x += b.Gf;
      this.y += b.Hf;
      b.zd.Ge(this) || this.remove()
    }
    a = function(a) {
      var b = {}, c = tm.Va.ac.Pc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (b[d] = c[d])
      }
      for(d in a) {
        a.hasOwnProperty(d) && (b[d] = a[d])
      }
      return b
    }(a);
    a.target || h(Error("target is undefined in config."));
    b.zd = a;
    b.direction = 0;
    b.speed = 0;
    b.Gf = 0;
    b.Hf = 0;
    b.Fe = j;
    return b
  }, rh:function(b, c, d, w) {
    if(this.oi === i || this.kc) {
      var v = {label:b.wa.label}, r;
      for(r in b.wa.Pa) {
        v[r] = b.wa.Pa[r]
      }
      if(v = c.Bf(v)) {
        w = (r = 0 === b.wa.Ga.length) ? w.qh(c) : w.Ad(c, b.wa);
        var z = this, q = {x:this.x + b.Pa.offsetX, y:this.y + b.Pa.offsetY};
        d.Tf = w.direction = function(r) {
          var v = eval(r.value) * Math.DEG_TO_RAD;
          switch(r.type) {
            case "aim":
              return c.target ? b.Pa.Ha ? a(q, c.target) + v : a(z, c.target) + v : v - Math.PI / 2;
            case "absolute":
              return v - Math.PI / 2;
            case "relative":
              return d.direction + v;
            default:
              return d.Tf + v
          }
        }(b.direction || b.wa.direction);
        d.Vf = w.speed = function(a) {
          var b = eval(a.value);
          switch(a.type) {
            case "relative":
              return d.speed + b;
            case "sequence":
              return d.Vf + b;
            default:
              return b
          }
        }(b.speed || b.wa.speed);
        v.x = q.x;
        v.y = q.y;
        r && (w.Gf = Math.cos(w.direction) * w.speed * c.pc, w.Hf = Math.sin(w.direction) * w.speed * c.pc);
        v.Zb = !!v.Zb;
        if(c.Zb || v.Zb) {
          v.rotation = (w.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, v.speed = w.speed
        }
        v.addEventListener("enterframe", w);
        c.wf ? c.wf.addChild(v) : this.parent && this.parent.addChild(v)
      }
    }
  }, mh:function(c, d, u) {
    var w = eval(c.direction.value) * Math.DEG_TO_RAD, v = eval(c.Sa);
    switch(c.direction.type) {
      case "aim":
        c = d.target;
        if(!c) {
          return
        }
        u.Wb = a(this, c) + w;
        u.xc = b(u.Wb - u.direction) / v;
        break;
      case "absolute":
        u.Wb = w - Math.PI / 2;
        u.xc = b(u.Wb - u.direction) / v;
        break;
      case "relative":
        u.Wb = u.direction + w;
        u.xc = b(u.Wb - u.direction) / v;
        break;
      case "sequence":
        u.xc = w, u.Wb = u.direction + u.xc * (v - 1)
    }
    u.ue = u.ia + v
  }, nh:function(a, b) {
    var c = eval(a.speed.value), d = eval(a.Sa);
    switch(a.speed.type) {
      case "absolute":
        b.Hc = c;
        b.dd = (b.Hc - b.speed) / d;
        break;
      case "relative":
        b.Hc = c + b.speed;
        b.dd = (b.Hc - b.speed) / d;
        break;
      case "sequence":
        b.dd = c, b.Hc = b.speed + b.dd * d
    }
    b.ve = b.ia + d
  }, kh:function(a, b) {
    var c = eval(a.Sa);
    b.pe = b.ia + c;
    if(a.Cb) {
      var d = eval(a.Cb.value);
      switch(a.Cb.type) {
        case "absolute":
        ;
        case "sequence":
          b.ud = (d - b.oc) / c;
          b.sd = d;
          break;
        case "relative":
          b.ud = d, b.sd = (d - b.oc) * c
      }
    }else {
      b.ud = 0, b.sd = b.oc
    }
    if(a.Gb) {
      switch(d = eval(a.Gb.value), a.Gb.type) {
        case "absolute":
        ;
        case "sequence":
          b.vd = (d - b.qc) / c;
          b.td = d;
          break;
        case "relative":
          b.vd = d, b.td = (d - b.qc) * c
      }
    }else {
      b.vd = 0, b.td = b.qc
    }
  }, sh:function(a) {
    var b = tm.event.Event(a.Hh);
    if(a.Da) {
      for(var c in a.Da) {
        b[c] = a.Da[c]
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
  tm.Va.Eh = function(a) {
    var b = tm.app.Sprite(c, 8, 8);
    b.label = a.label;
    return b
  };
  var d = k;
  tm.Va.Ff = function(a) {
    if(d === k) {
      if(!a.getRoot().app) {
        return j
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Va.Oi = function() {
    return j
  };
  tm.Va.ac.Pc = {Bf:tm.Va.Eh, Ge:tm.Va.Ff, aj:0, Zb:m, pc:2, target:k};
  p.ma.prototype.Ad = function(a) {
    return tm.Va.ac(this).Ad(a)
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
var s = k, t, A, B, C, E, F, ba, da, ea, fa, ha, ia, ja, G, H, J, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, wa, xa, ya, za, Aa, Ba, K, Ca, Da, L, N, Ea, Fa, O, aa = tm.createClass({superClass:tm.app.CanvasApp, Id:0, Ui:0, Lc:3, nc:3, If:1, ca:k, init:function(b) {
  s !== k && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(b);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = t.zg;
  this.background = "rgba(0,0,0,0)";
  this.cf = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", 
  "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", 
  "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.th();
    return A()
  }.bind(this)}))
}, update:function() {
  for(var b = [].concat(this.cf), a = 0;a < b.length;a++) {
    b[a].frame === this.frame ? b[a].fn() : this.cf.erase(b[a])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, th:function() {
  B.oa(12345);
  C.oa();
  E.oa();
  this.ca = F()
}, Jh:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Id, "")
}, cf:k, setTimeoutF:function(b, a) {
  timeoutTasks.push({frame:this.frame + a, fn:b})
}});
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Ga(b, a) {
  return(b.x - a.x) * (b.x - a.x) + (b.y - a.y) * (b.y - a.y)
}
;t = {zg:60, Tg:0, hf:[1E9, 1E10], Vg:3E3, kf:3, jf:[3, 2, 1], og:[6, 4, 2], Xg:1, Sg:1, lf:1, Ug:0.25, Fi:1, Hi:0.25, ng:4, Lg:0.0050, Hg:0.01, Ig:0.0010, Dg:0.015, Eg:0.0020, Ng:0.0010, Pg:0.01, Mg:0, Kg:0, Jg:0, Gg:0.03, Fg:0.0040, Og:0, Qg:0, Rg:0.75, ae:10, ld:800, Cg:0.25, Bg:0.1, Gi:5, tg:0.02, ug:0.5, sg:0.01, gf:1E3, rg:10, pg:1, jh:1E3, ih:100, hh:0, gh:0, fh:1E3, eh:100, yg:0.5, vg:22500, qg:50, Yg:10, mg:j, bh:1E3, dh:2E3, Zg:4E3, $g:1E4, ah:2E7};
(function() {
  var b = k, a = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  ba = tm.createClass({superClass:tm.app.Sprite, type:0, style:0, $a:0, Lb:j, Dc:m, ca:k, speed:0, Ya:k, wc:k, Zf:k, Jd:k, Fb:k, Ce:k, Kb:k, De:k, Ee:k, frame:0, init:function(a, d, g) {
    this.superInit("fighter", 64, 64);
    this.ca = a;
    this.type = d;
    this.style = g;
    tm.Va.ac.Pc.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.wc = this.Zf = da(d, 100);
    this.Jd = da(3, 100);
    this.Fb = ea(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Fb.visible = m;
    this.ph();
    this.Ya = this.oh();
    1 === this.style && (this.Ya = [this.Ya[1], this.Ya[2]]);
    this.Kb = tm.app.CanvasElement().addChildTo(this);
    d = 0;
    for(g = this.Ya.length;d < g;d++) {
      var l = this.Ya[d];
      fa(this, l).setPosition(l.x, l.y).addChildTo(this.Kb)
    }
    this.di = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.di.blendMode = "lighter";
    this.De = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.De.blendMode = "lighter";
    this.De.update = function() {
      this.rotation += 2;
      this.visible = 0 < a.xa && !a.na
    };
    this.Ee = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Ee.blendMode = "lighter";
    this.Ee.update = function() {
      this.rotation -= 2;
      this.visible = 0 < a.xa && !a.na
    };
    this.Uc = tm.app.CanvasElement(80, 80).addChildTo(this);
    this.Uc.blendMode = "lighter";
    this.Uc.rotation = -90;
    this.Uc.strokeStyle = "rgba(180,180,255,0.4)";
    this.Uc.update = function() {
      this.visible = a.na
    };
    this.Uc.draw = function(b) {
      b.lineCap = "round";
      var d = a.Ac / t.ld;
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "12";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, m);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, m);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, m)
    };
    this.Yh = tm.app.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.Yh.update = function() {
      this.visible = a.na
    };
    b === k && (b = ha(this.ca.la))
  }, oh:function() {
    if(0 === this.type) {
      return[{x:0, jc:0, y:40, d:0, ib:j, fb:-0.7, v:j}, {x:0, jc:0, y:40, d:0, ib:j, fb:0.5, v:j}, {x:0, jc:0, y:40, d:0, ib:j, fb:-0.5, v:j}, {x:0, jc:0, y:40, d:0, ib:j, fb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, ib:m, fb:-0.7, v:j}, {x:-40, y:40, d:0.1, ib:m, fb:-0.5, v:j}, {x:40, y:40, d:0.1, ib:j, fb:0.5, v:j}, {x:70, y:20, d:0.1, ib:j, fb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, ib:m, fb:-0.7, v:j}, {x:-30, y:20, d:0.4, ib:m, fb:-0.5, v:j}, {x:30, y:20, d:0.4, ib:j, fb:0.5, v:j}, {x:60, y:40, d:0.6, ib:j, fb:0.7, v:j}]
    }
  }, ph:function() {
    this.Ce = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.Ce.setFrameIndex(5);
    this.Ce.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Yb:-1, yc:m, pb:m, update:function(c) {
    this.visible = this.Dc ? 0 === c.frame / 2 % 2 : j;
    var d = c.keyboard;
    if(this.Lb) {
      var g = d.getKeyAngle();
      g !== k && (g = a[g], this.x += g.x * this.speed * (this.pb ? 0.75 : 1), this.y += g.y * this.speed * (this.pb ? 0.75 : 1));
      this.x = P(this.x, 15, 465);
      this.y = P(this.y, 15, 625);
      var l = d.getKey("c"), g = d.getKey("z");
      this.Yb = l ? this.Yb + 1 : this.Yb - 1;
      this.Yb = P(this.Yb, -1, 10);
      this.pb = g && l || 10 === this.Yb;
      l = this.ca.na ? 3 : 5;
      this.yc = !this.pb && (0 <= this.Yb || g) && 0 === c.frame % l;
      g && (this.Yb = 0);
      this.Fb.x = this.x;
      this.Fb.y = this.y - 40;
      d.getKeyDown("x") && (0 < this.ca.xa && !this.ca.na ? (this.ca.Ai(), ia(this).addChildTo(this.ca)) : !this.ca.Bc && 0 < this.ca.vb && (this.Xa = P(this.Xa - 2, 0, 1), p.va.Oa.$rank = P(p.va.Oa.$rank - 0.02, 0, 1), ja(this, this.ca).setPosition(P(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.pb = this.yc = m
    }
    this.yc && (g = Math.sin(0.2 * c.frame), l = this.wc.fa(this.x - 7 - 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca), l = this.wc.fa(this.x + 7 + 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca));
    if(this.pb) {
      g = 0;
      for(l = this.Ya.length;g < l;g++) {
        this.Ya[g].v = m
      }
      this.Kb.rotation = 0
    }else {
      this.Fb.visible = m;
      g = 0;
      for(l = this.Ya.length;g < l;g++) {
        this.Ya[g].v = j
      }
    }
    this.Dh(d);
    this.lh(d, c.frame);
    0 === c.frame % 2 && (b.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), b.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = c.frame
  }, Mb:function() {
    this.pb = this.yc = m;
    this.ca.Bd();
    this.ca.Ia = 0;
    this.ca.Ca = 0;
    this.ca.ya = 0
  }, Dh:function(a) {
    if(0 === this.type) {
      for(a = this.Ya.length;this.Ya[--a] !== i;) {
        var b = this.Ya[a];
        0 === a ? b.x = b.jc + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.jc + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.jc + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.jc + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Kb, b.rotation = this.Lb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Lb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, lh:function(a, b) {
    this.Lb && a.getKey("left") ? this.$a = P(this.$a - 0.2, -3, 3) : this.Lb && a.getKey("right") ? this.$a = P(this.$a + 0.2, -3, 3) : 0 > this.$a ? this.$a = P(this.$a + 0.2, -3, 3) : 0 < this.$a && (this.$a = P(this.$a - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.$a) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.$a) : 2 === this.type && this.setFrameIndex(31 + ~~this.$a);
    return b
  }});
  fa = tm.createClass({superClass:tm.app.AnimationSprite, ic:k, da:k, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.ic = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.ib ? "anim0" : "anim1")
  }, update:function(a) {
    if(this.ic.v) {
      this.x = this.ic.x * (this.da.ca.na ? 1.5 : 1);
      this.y = this.ic.y * (this.da.ca.na ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.ic.d * this.ic.fb);
      var d = this.parent.localToGlobal(this);
      this.ic.v && 0 === a.frame % 2 && b.clone(40).setPosition(d.x, d.y).addChildTo(a.ca);
      this.da.yc && (d = this.da.wc.fa(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== k && d.addChildTo(a.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var b = k;
  G = tm.createClass({superClass:tm.app.Sprite, speed:0, Za:j, init:function(a) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    b === k && (b = H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    a !== i && this.Fc(a)
  }, update:function() {
    this.x += this.ef;
    this.y += this.ed;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, Fc:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Gd:function(a) {
    for(var d = 0;d < a;d++) {
      var g = b.clone().setPosition(this.x, this.y).addChildTo(this.parent), l = R(2, 8), u = 2 * Math.random() * Math.PI;
      g.pa = Math.cos(u) * l;
      g.qa = Math.sin(u) * l;
      g.scaleX = g.scaleY = (R(0.1, 0.5) + R(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.pa;
        this.y += this.qa;
        this.pa *= 0.9;
        this.qa *= 0.9
      })
    }
  }});
  G.Nc = function() {
    for(var b = [].concat(a), d = 0, g = b.length;d < g;d++) {
      b[d].remove()
    }
  };
  var a = G.Ma = [];
  da = tm.createClass({Pd:k, Qf:m, init:function(b, d) {
    this.Qf = 3 === b;
    this.Pd = [];
    for(var g = 0;g < d;g++) {
      var l = G(b), u = this;
      l.addEventListener("added", function() {
        this.sa = t.Yg;
        a.push(this)
      });
      l.addEventListener("removed", function() {
        var b = a.indexOf(this);
        -1 !== b && a.splice(b, 1);
        u.Pd.push(this)
      });
      this.Qf && l.addEventListener("enterframe", function(a) {
        this.setScale(0 === a.app.frame % 2 ? 2 : 1)
      });
      this.Pd.push(l)
    }
  }, fa:function(a, b, g) {
    var l = this.Pd.pop();
    if(l === i) {
      return k
    }
    var u = Ha(g);
    l.ef = Math.cos(u) * l.speed;
    l.ed = Math.sin(u) * l.speed;
    l.setPosition(a, b);
    l.rotation = g + 90;
    return l
  }, Gc:n()})
})();
ea = tm.createClass({superClass:tm.app.Sprite, da:k, ca:k, ub:0, frame:0, ig:k, color:k, yf:0, se:0, Ah:m, head:k, Nf:k, xf:k, Za:j, re:t.lf, Ec:k, init:function(b, a) {
  this.da = b;
  this.ca = b.ca;
  this.yf = 0 === this.da.style ? 1 : 1.5;
  this.se = 0 === this.da.style ? 50 : 75;
  var c = this;
  this.ig = a;
  this.superInit(a.redBody, this.se, 100);
  this.boundingHeightBottom = 1;
  this.bj = 0;
  this.origin.y = 1;
  var d = this.xf = tm.app.AnimationSprite(tm.app.SpriteSheet({image:a.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.Nf = tm.app.AnimationSprite(tm.app.SpriteSheet({image:a.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:a.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = c.ub - c.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < c.ub
  };
  this.Fc(["red", "green", "blue"][this.da.type]);
  this.Gc(0)
}, Fc:function(b) {
  this.color = b;
  this.image = tm.asset.AssetManager.get(this.ig[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.xf.gotoAndPlay(this.color);
  this.Nf.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Ec = k;
  return this
}, Gc:function(b) {
  this.boundingWidth = this.width = this.se + 30 * b / t.ae;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.re = this.yf * t.lf + t.Ug * b;
  0 === b ? this.Fc(["red", "green", "blue"][this.da.type]) : this.Fc("hyper")
}, Gd:function(b, a) {
  this.Ec === k && this.Df();
  a = a || this.ub;
  for(var c = 0;c < b;c++) {
    var d = this.Ec.clone().setPosition(this.x, a).addChildTo(this.ca), g = R(8, 14), l = R(0, Math.PI);
    d.pa = Math.cos(l) * g;
    d.qa = Math.sin(l) * g;
    d.scaleX = d.scaleY = (R(0.5, 1.5) + R(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.pa;
      this.y += this.qa;
      this.pa *= 0.95;
      this.qa *= 0.95
    })
  }
}, Uh:function(b, a, c) {
  this.Ec === k && this.Df();
  for(var d = 0;d < b;d++) {
    var g = this.Ec.clone().setPosition(a, c).addChildTo(this.ca), l = R(12, 20), u = R(0, Math.PI);
    g.pa = Math.cos(u) * l;
    g.qa = Math.sin(u) * l;
    g.scaleX = g.scaleY = (R(1, 3) + R(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.pa;
      this.y += this.qa;
      this.pa *= 0.95;
      this.qa *= 0.95
    })
  }
}, Df:function() {
  this.Ec = "hyper" === this.color ? H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(b) {
  (this.visible = this.da.pb) ? (this.ub = Math.max(0, this.ub - 40), this.height = this.y - this.ub, 0 === b.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.ub = this.y - 40;
  this.Ah = this.visible
}, draw:function(b) {
  var a = this.srcRect, c = this._image.element;
  a.x = a.width * this.frame;
  b.context.drawImage(c, a.x, a.height - this.height, a.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Ti:function() {
  return this.ub
}, vi:function(b) {
  this.ub = b;
  this.head.update()
}});
ea.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.ub
});
(function() {
  ja = tm.createClass({superClass:tm.app.Object2D, Za:j, ca:k, init:function(a, c) {
    this.superInit();
    this.da = a;
    this.ca = c;
    this.dg = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.dg.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.dg));
    this.vf();
    b === k && (b = H(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ia = 0;
    this.ad = 1;
    this.addEventListener("added", function() {
      this.ca.Bc = j;
      this.da.Dc = j;
      this.ca.vb -= 1;
      this.ca.Bd();
      this.ca.Qa("drop BOMBER!!", j);
      J("bomb");
      J("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.Bc = m;
      this.da.Dc = m
    })
  }, vf:function() {
    this.core = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = R(0.9, 1.1)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var c = this.a * this.ad + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.015 * this.ia;
    this.r = 250 * Math.sin(a);
    2 * Math.PI < a ? this.remove() : Math.PI < a ? (this.b = 16, this.ia += 3.6, this.ad = -1) : (this.b = 8, this.ia += 1.8, this.ad = 1)
  }});
  ka = tm.createClass({superClass:ja, init:function(a, b) {
    this.superInit(a, b);
    t.mg && this.addEventListener("added", function() {
      this.ca.vb = 0
    })
  }, vf:function() {
    this.core = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.core.gotoAndPlay("animation");
    this.core.blendMode = "lighter";
    this.core.setScale(0.1, 0.1);
    this.core.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = R(0.4, 0.6)
      }
    }.bind(this.core))
  }, update:function() {
    for(var a = 0;a < this.b;a++) {
      var c = this.a * this.ad + 2 * a * Math.PI / this.b;
      b.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    a = 0.04 * this.ia;
    this.r = 100 * Math.sin(a);
    Math.PI < a ? this.remove() : (this.b = 8, this.ia += 1.8, this.ad = 1)
  }});
  var b = k
})();
E = {oa:function() {
  Ia(256);
  la = {};
  E.explosion = Array.range(0, 2).map(function(b) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + b, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  la.explodeL = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k, frequency:3}}}, 100, 100));
  E.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  E.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  E.particle16 = H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Gd:function(b, a, c) {
  b = E.particle16.clone().setPosition(b, a).addChildTo(c);
  a = R(5, 20);
  c = R(Math.PI, 2 * Math.PI);
  b.pa = Math.cos(c) * a;
  b.qa = Math.sin(c) * a;
  b.scaleX = b.scaleY = (R(0.1, 0.5) + R(0.1, 0.5)) / 2;
  b.addEventListener("enterframe", function() {
    this.x += this.pa;
    this.y += this.qa;
    this.pa *= 0.9;
    this.qa *= 0.9
  })
}, Si:function(b, a, c) {
  var d = tm.app.Sprite().setPosition(b, a).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  d.image = E.shockwaveImage;
  d.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
}, Vh:function(b, a, c) {
  b = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(b, a).setScale(0.1, 0.1);
  b.Za = j;
  b.addChildTo(c);
  b.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(b))
}, Dd:function(b, a, c, d) {
  J("explode");
  b = E.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  b.Za = j;
  if(d !== i) {
    var g = d.x, l = d.y;
    b.addEventListener("enterframe", function() {
      this.x += g;
      this.y += l;
      g *= 0.99;
      l *= 0.99
    })
  }
  b.addChildTo(c)
}, Kh:function(b, a, c) {
  J("explode");
  var d = E.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b, a).setRotation(360 * Math.random()).gotoAndPlay();
  d.Za = j;
  d.addChildTo(c);
  d = E.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b + 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  d.Za = j;
  d.addChildTo(c);
  d = E.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(b - 12, a).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  d.Za = j;
  d.addChildTo(c)
}, lc:function(b, a, c) {
  J("explode2");
  J("explode3");
  for(var d = ~~(Math.random() * U.length), g = 0;20 > g;g++) {
    var l = E.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === g % 2 ? "lighter" : "source-over").setPosition(b, a).gotoAndPlay();
    l.a = 2 * Math.PI * Math.random();
    l.v = 10 * Math.pow(U.at(~~(U.length * g / 20) + d), 2);
    l.Za = j;
    l.addChildTo(c)
  }
}, Kf:function(b, a, c) {
  J("explode2");
  J("explode3");
  for(var d = ~~(Math.random() * U.length), g = 0;20 > g;g++) {
    for(var l = 2 * Math.PI * g / 20, u = Math.pow(U.at(~~(U.length * g / 20) + d), 2), w = 0;3 > w;w++) {
      var v = 4 * u * (w + 1), r = la.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ia && (this.blendMode = "source-over");
        this.ia += 1
      }).setScale(0.3 * (3 - w)).setBlendMode("lighter").setPosition(b, a).gotoAndPlay();
      r.rotation = 2 * Math.random() * Math.PI;
      r.Za = j;
      r.alpha = 0.2;
      r.ia = 0;
      r.a = l;
      r.v = v;
      r.addChildTo(c)
    }
  }
}};
ma = tm.createClass({superClass:tm.app.Object2D, target:k, mc:0, angle:0, alpha:1, Za:j, reverse:m, init:function(b, a) {
  this.superInit();
  this.target = b;
  this.reverse = a;
  this.angle = 0;
  this.mc = a ? 0 : 200;
  this.alpha = a ? 1 : 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var b = 0;9 > b;b++) {
      var a = this.angle + 2 * b / 9 * Math.PI;
      H(80, this.alpha, 0.9).setPosition(Math.cos(a) * this.mc + this.target.x, Math.sin(a) * this.mc + this.target.y).addChildTo(this.target.parent)
    }
    this.angle += 0.05;
    this.mc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.mc || 200 < this.mc) && this.remove()
  }
}});
ia = tm.createClass({superClass:tm.app.Object2D, target:k, angle:0, Za:j, init:function(b) {
  this.superInit();
  this.target = b;
  this.angle = 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var b = 0;5 > b;b++) {
      H(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + V(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + V(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
na = tm.createClass({superClass:tm.graphics.Canvas, ca:k, vc:k, Ra:k, init:function(b) {
  this.superInit("#scoreLabel");
  this.ca = b;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.vc = Ja(200);
  this.Ra = oa(this)
}, update:function() {
  this.clear();
  this.ca.Ub !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Ra.xb - 20, 470 * this.ca.Ub.sa / this.ca.Ub.zc, 20), this.strokeRect(5, this.Ra.xb - 20, 470, 20), this.clear(263.5, this.Ra.xb - 20 + 2, 2, 16), this.clear(52, this.Ra.xb - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var b;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  b = "";
  for(var a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b, 192, this.Ra.xb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.Ia)).padding(8, " ");
  b = "";
  for(a = 0;a < score.length;a += 4) {
    b += score.substring(a, a + 4) + " "
  }
  this.fillText(b + "x " + (~~(this.ca.ya / t.gf) + 1), this.Ra.Sc + 192, 22);
  b = [0, 1, 4][this.ca.da.type];
  for(a = 0;a < this.ca.$b - 1;a++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * b, 64, 64, 5 + 32 * a, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * p.va.Oa.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.Yc + " hit", this.Ra.Sc + 10, 95);
  0 < ~~this.ca.ya && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.ya + " HIT!!", 10, -this.Ra.xb + 115));
  for(a = 0;a < this.ca.vb;a++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (a + 1) - 20, 615, 20, 20)
  }
  this.vc.update();
  this.vc.We = this.Ra.xb + 5;
  this.vc.draw(this)
}});
oa = tm.createClass({superClass:tm.app.Object2D, ab:k, Sc:0, xb:0, init:function(b) {
  this.superInit();
  this.ab = b
}});
(function() {
  var b = 16 * Math.sqrt(3), a = 12.8 * Math.sqrt(3);
  pa = tm.createClass({superClass:tm.graphics.Canvas, ga:k, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.ga = qa();
    this.ga.la = this;
    this.ga.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(c) {
    this.ga.pa = Math.cos(this.ga.direction) * this.ga.speed;
    this.ga.qa = Math.sin(this.ga.direction) * this.ga.speed;
    for(this.ga.yb += this.ga.pa;96 < this.ga.yb;) {
      this.ga.yb -= 96
    }
    for(;-96 > this.ga.yb;) {
      this.ga.yb += 96
    }
    for(this.ga.Ab += this.ga.qa;2 * b < this.ga.Ab;) {
      this.ga.Ab -= 2 * b
    }
    for(;this.ga.Ab < 2 * -b;) {
      this.ga.Ab += 2 * b
    }
    for(this.ga.zb += 0.8 * this.ga.pa;25.6 * 3 < this.ga.zb;) {
      this.ga.zb -= 25.6 * 3
    }
    for(;this.ga.zb < -25.6 * 3;) {
      this.ga.zb += 25.6 * 3
    }
    for(this.ga.Bb += 0.8 * this.ga.qa;2 * a < this.ga.Bb;) {
      this.ga.Bb -= 2 * a
    }
    for(;this.ga.Bb < 2 * -a;) {
      this.ga.Bb += 2 * a
    }
    0 === c % 2 && this.draw()
  }, draw:function() {
    this.ga.background !== k ? this.clearColor(this.ga.background, 0, 0) : this.clear();
    this.lineWidth = 0.3;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    this.beginPath();
    for(var c = 0, d = this.ga.yb - 96;576 > d;d += 48) {
      for(var c = 0 === c ? b : 0, g = this.ga.Ab - 2 * b + c;g < 640 + 2 * b;g += 2 * b) {
        this.line(d, g, d + 32, g), this.line(d, g, d - 16, g + b), this.line(d, g, d - 16, g - b)
      }
    }
    this.stroke();
    this.lineWidth = 0.2;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,0.6)"}, {offset:1, color:"rgba(255,255,255,0.3)"}]).toStyle();
    this.beginPath();
    c = 0;
    for(d = this.ga.zb - 25.6 * 3;d < 480 + 25.6 * 3;d += 25.6 * 1.5) {
      c = 0 === c ? a : 0;
      for(g = this.ga.Bb - 2 * a + c;g < 640 + 2 * a;g += 2 * a) {
        this.line(d, g, d + 25.6, g), this.line(d, g, d - 12.8, g + a), this.line(d, g, d - 12.8, g - a)
      }
    }
    this.stroke()
  }});
  qa = tm.createClass({superClass:tm.app.Object2D, yb:0, Ab:0, zb:0, Bb:0, direction:0, speed:0, pa:0, qa:0, background:k, init:function() {
    this.superInit();
    this.zb = this.Bb = this.yb = this.Ab = 0;
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.qa = this.pa = 0
  }})
})();
ra = tm.createClass({superClass:tm.app.Sprite, Sf:m, ca:k, da:k, Ob:m, Tc:m, $e:m, pa:0, qa:0, init:function(b) {
  this.superInit("star", 20, 20);
  (this.Sf = b) && this.setScale(2, 2);
  this.ca = F.je;
  this.da = this.ca.da;
  this.addChildTo(this.ca);
  b = 0.5 * B.random() * Math.PI - 0.75 * Math.PI;
  this.pa = 30 * Math.cos(b);
  this.qa = 30 * Math.sin(b)
}, update:function() {
  this.da.pb && (this.Tc = j);
  if(this.da.parent === k) {
    this.Tc = m
  }else {
    if(100 > Ga(this, this.da)) {
      this.ca.ei(this);
      this.remove();
      return
    }
    1E4 > Ga(this, this.da) && (this.Tc = j);
    if(this.$e && this.Tc) {
      var b = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 10 * Math.cos(b);
      this.y += 10 * Math.sin(b)
    }else {
      this.$e || (this.x += this.pa, this.y += this.qa, this.pa *= 0.8, this.qa *= 0.8, -1 < this.pa && (1 > this.pa && -1 < this.qa && 1 > this.qa) && (this.$e = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
sa = tm.createClass({superClass:ra, Ob:m, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
ta = tm.createClass({superClass:ra, Ob:j, init:function(b) {
  this.superInit(b)
}, update:function() {
  this.Tc || (this.x += this.ca.la.pa, this.y += this.ca.la.qa);
  this.superClass.prototype.update.call(this)
}});
ua = tm.createClass({da:k, ca:k, ba:k, frame:0, init:function(b) {
  this.ca = b;
  this.da = b.da;
  this.Ze();
  this.ba = wa();
  this.frame = 0
}, Ze:n(), update:function() {
  this.Ih(this.frame);
  this.frame += 1
}, Ih:function(b) {
  b = this.ba.get(b);
  if(b !== k) {
    if("function" === typeof b.value) {
      b.value.call(this)
    }else {
      if(xa[b.value] !== i) {
        var a = xa[b.value];
        if(a !== k) {
          if(a[0].Ub === j) {
            this.Wf(a[0])
          }else {
            for(var c = 0;c < a.length;c++) {
              var d = this.Wf(a[c]);
              b.stop && d.addEventListener("enemyconsumed", function() {
                this.ba.bf = m
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Wf:function(b) {
  this.ca.Cd += 1;
  return b.$(this.ca, b.aa).setPosition(b.x, b.y).addChildTo(this.ca).fi()
}, zh:function(b) {
  ya();
  this.ca.Qc = j;
  for(var a = tm.app.Object2D().setPosition(240, 320), c = -4;4 >= c;c++) {
    for(var d = -4;4 >= d;d++) {
      var g = tm.app.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(c, d);
      g.ia = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.ia) + 0.5;
        this.ia += 1
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
  a.addChildTo(this.ca.ze);
  J("warning");
  J("voWarning")
}});
ua.create = function(b, a) {
  switch(a) {
    case 0:
      return za(b);
    case 1:
      return Aa(b)
  }
};
wa = tm.createClass({index:0, data:k, bf:m, init:function() {
  this.data = {}
}, add:function(b, a, c) {
  this.index += b;
  this.data[this.index] = {stop:c, value:a}
}, get:function(b) {
  b = this.data[b];
  return b === i ? k : b.stop === j ? (this.bf = j, b) : this.bf ? k : b
}});
za = tm.createClass({superClass:ua, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    Ba("bgm1", j);
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
    this.zh(function() {
      Ba("bgmBoss", j)
    })
  });
  this.ba.add(600, "misumi")
}, Ze:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
Aa = tm.createClass({superClass:ua, init:function(b) {
  this.superInit(b);
  this.ba.add(0, function() {
    Ba("bgm2", j);
    this.ca.la.direction = 0.5 * Math.PI;
    this.ca.la.speed = 0.3
  });
  this.ba.add(200, "tank25-top");
  this.ba.add(160, "heri1-left");
  this.ba.add(100, "heri1-right");
  this.ba.add(190, "komachi2-0");
  this.ba.add(10, "itsuki-1");
  this.ba.add(80, "komachi2-1");
  this.ba.add(600, "tank15-top");
  this.ba.add(1, function() {
    this.ca.la.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
  });
  this.ba.add(60, "heri2-center");
  this.ba.add(60, "heri2-center");
  this.ba.add(60, "heri2-center");
  this.ba.add(20, "tankRD-center");
  this.ba.add(20, "tankL-top");
  this.ba.add(20, "yayoi-R0");
  this.ba.add(1, "yayoi-R2");
  this.ba.add(40, "heri2-center");
  this.ba.add(60, "heri2-center");
  this.ba.add(60, "heri2-center");
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
  this.ba.add(90, "heri2-left");
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
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-center");
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri1-left2");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-center");
  this.ba.add(40, "heri2-right");
  this.ba.add(40, "tank5-left");
  this.ba.add(40, "heri2-right");
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
  this.ba.add(1, "mai", j)
}, Ze:function() {
  this.ca.la.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
function Ka(b, a) {
  if(b.parent === k || a.parent === k) {
    return m
  }
  var c = b.x + b.boundingWidthRight, d = b.y - b.boundingHeightTop, g = b.y + b.boundingHeightBottom, l = a.x - a.boundingWidthLeft, u = a.y - a.boundingHeightTop, w = a.y + a.boundingHeightBottom;
  return b.x - b.boundingWidthLeft < a.x + a.boundingWidthRight && c > l && d < w && g > u
}
;var W = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, Ci:function(b, a) {
  "function" === typeof b ? this.app.pushScene(b()) : b instanceof tm.app.Scene && this.app.pushScene(b);
  this._sceneResultCallback = a
}, finish:function(b) {
  var a = this.app;
  a.popScene();
  (a = a.currentScene) && a._sceneResultCallback && a._sceneResultCallback.bind(a)(b)
}});
var La = tm.createClass({superClass:W, titleText:k, menu:k, descriptions:k, showExit:m, title:k, selections:[], description:k, box:k, cursor:k, Oe:k, _selected:0, _opened:m, _finished:m, init:function(b, a, c) {
  this.superInit();
  this.titleText = b;
  this.menu = a;
  this._selected = ~~c.defaultValue;
  this.showExit = c.showExit;
  this.descriptions = c.menuDescriptions;
  this.showExit && (a.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Oe = c.onCursorMove;
  b = Math.max(50 * (1 + a.length), 50) + 40;
  this.box = tm.app.RectangleShape(384, b, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"hsla(220,50%,30%,0.8)"}).setPosition(240, 320);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:384, height:b}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.app.Label("", 14).setPosition(240, 630).addChildTo(this)
}, _onOpen:function() {
  var b = 320 - 25 * this.menu.length;
  this.title = tm.app.Label(this.titleText, 30).setPosition(240, b).addChildTo(this);
  this.selections = this.menu.map(function(a, c) {
    var d = this;
    b += 50;
    var g = tm.app.Label(a).setPosition(240, b).addChildTo(this);
    g.interactive = j;
    g.addEventListener("touchend", function() {
      d._selected === c ? d.closeDialog(d._selected) : d._selected = c
    });
    g.width = 336;
    return g
  }.bind(this));
  this._createCursor();
  this._opened = j
}, _createCursor:function() {
  this.cursor = tm.app.RectangleShape(336, 10, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.LinearGradient(0, 0, 336, 0).addColorStopList([{offset:0, color:"rgba(  0,255,100,0.0)"}, {offset:0.2, color:"rgba(  0,255,100,0.3)"}, {offset:0.5, color:"rgba(  0,255,255,0.5)"}, {offset:0.8, color:"rgba(  0,255,100,0.3)"}, {offset:1, color:"rgba(  0,255,100,0.0)"}]).toStyle()}).addChildTo(this);
  this.cursor.blendMode = "lighter";
  this.cursor.x = 240;
  this.cursor.s = this._selected;
  this.cursor.y = this.selections[this._selected].y;
  this.cursor.update = function() {
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Oe !== k && this.parent.Oe(this.s))
  }
}, update:function(b) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(b.frame / 2) % 2 : this.showExit && b.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c") || b.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), J("decision")) : b.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = P(this._selected, 0, this.selections.length - 1), J("select")) : b.keyboard.getKeyDown("up") && 
  (this._selected -= 1, this._selected = P(this._selected, 0, this.selections.length - 1), J("select")))
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
}, draw:function(b) {
  b.fillStyle = "rgba(0,0,0,0.8)";
  b.fillRect(0, 0, 480, 640)
}});
function X(b, a, c, d, g) {
  g = {}.$extend({menuDescriptions:[].concat(c), showExit:j, defaultValue:0, onCursorMove:n()}, g);
  b.Ci(La(a, c, g), d)
}
;H = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, qe:0.85, size:0, image:k, Za:j, init:function(b, a, c, d) {
  this.superInit();
  this.width = this.height = this.size = b;
  a !== i && (this.alpha = a);
  c !== i && (this.qe = c);
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element
}, update:function() {
  this.alpha *= this.qe;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(b) {
  b.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return H(this.size, this.Xi, this.qe, this.image)
}});
ha = tm.createClass({superClass:H, la:k, init:function(b, a) {
  a = a || 20;
  this.superInit(a, 1, 0.82, tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element);
  this.la = b
}, update:function(b) {
  this.superClass.prototype.update.apply(this, b);
  this.x += this.la.pa;
  this.y += this.la.qa + 0.3
}, clone:function(b) {
  return ha(this.la, b)
}});
var Ja = tm.createClass({width:0, label:k, Ua:k, ia:0, ag:0, We:0, init:function(b) {
  this.width = b;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Ua = [];
  this.ag = 480 - this.width - 5;
  this.We = 5
}, yh:function(b, a) {
  a === j && (this.Ua.clear(), this.Ua.push(""));
  5 < this.Ua.length && this.Ua.splice(1, this.Ua.length - 4);
  this.Ua.push(b);
  return this
}, Bh:function() {
  this.Ua.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var b = this.label.text, b = b.substring(0, b.length - 1);
  if(0 !== this.Ua.length) {
    if("" !== this.Ua[0]) {
      var a = this.Ua[0][0];
      this.Ua[0] = this.Ua[0].substring(1);
      b += a
    }else {
      this.Ua.shift(), a = b.split("\n"), 3 < a.length && (a.shift(), b = a.join("\n")), b += "\n"
    }
  }
  this.label.text = b + (0 === this.ia % 2 ? "_" : " ");
  this.ia += 1
}, draw:function(b) {
  b.save();
  b.context.globalCompositeOperation = "source-over";
  b.translate(this.ag, this.We);
  b.fillStyle = "rgba(1,2,48,0.5)";
  b.fillRect(0, 0, this.width, 64);
  b.translate(5, 5);
  b.fillStyle = "rgba(255,255,255,0.5)";
  b.setText(this.label.fontStyle, this.label.align, this.label.baseline);
  this.label._lines.each(function(a, c) {
    b.fillText(a, 0, this.label.textSize * c)
  }.bind(this));
  b.restore()
}});
function Ia(b) {
  function a(a) {
    if(1 > a) {
      return k
    }
    var d = [], g = Math.random(), l, u;
    for(u = 0;u < b;u += ~~a) {
      l = Math.random();
      for(var w = 0;w < a;w++) {
        d[u + w] = c(g, l, w / a)
      }
      g = l
    }
    g = d[b - ~~a];
    l = d[0];
    for(w = 0;w < a;w++) {
      d[b - ~~a + w] = c(g, l, w / a)
    }
    return d
  }
  function c(a, b, c) {
    c = 0.5 * (1 - Math.cos(c * Math.PI));
    return a * (1 - c) + b * c
  }
  for(var d = [], g = 0, l = Math.pow(2, 4);8 > g;g++, l *= 2) {
    var u = a(b / l);
    if(u === k) {
      break
    }
    d.push(u)
  }
  u = [].concat(d[0]);
  g = 1;
  for(l = 0.5;g < d.length;g++, l *= 0.5) {
    for(var w = 0;w < b;w++) {
      u[w] += d[g][w] * l
    }
  }
  for(g = 0;g < u.length;g++) {
    u[g] /= 2
  }
  return u
}
var U;
B = {index:-1, data:k, oa:function(b) {
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
K = k;
Ba = function(b, a) {
  a || Ca();
  var c = tm.asset.AssetManager.get(b);
  c && (K = c.clone(), K.volume = 0.1 * s.Lc, K.loop = j, K.play())
};
Ca = function() {
  K !== k && K.stop()
};
ya = function() {
  if(K !== k) {
    var b = K;
    b.loop = m;
    var a = function() {
      b.volume -= 0.0010;
      0 >= b.volume ? b.stop() : setTimeout(a, 10)
    };
    setTimeout(a, 10)
  }
};
J = function(b) {
  if(0 !== s.nc && J.played[b] !== s.frame) {
    var a = tm.asset.AssetManager.get("sound/" + b);
    a && (a = a.clone().play(), "vo" === b.substring(0, 2) ? (a.volume = 0.5 * s.nc, J.df !== k && J.df.stop(), J.df = a) : a.volume = 0.1 * s.nc);
    J.played[b] = s.frame
  }
};
J.played = {};
J.df = k;
(function() {
  var b = k, a = k;
  A = tm.createClass({superClass:W, result:k, ia:0, $c:[], Fd:m, Pf:k, Uf:0, Ld:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Pf = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Fd = m;
      for(var a = ("" + Math.floor(s.Id)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.Pf.text = "HIGH SCORE: " + b.trim()
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.tf(80 * Math.cos(0.01 * this.ia) + 240, 80 * Math.sin(0.01 * this.ia) + 320, 0);
    this.tf(80 * Math.cos(0.01 * this.ia + Math.PI) + 240, 80 * Math.sin(0.01 * this.ia + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Fd && this.$f();
    this.ia += 1
  }, tf:function(c, d, g) {
    if(!this.Fd) {
      b === k && (b = H(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      a === k && (a = H(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? b.clone().addChildTo(this) : a.clone().addChildTo(this);
      g.speed = 0.6;
      var l = R(0, 2 * Math.PI), u = V(0, 20);
      g.setPosition(Math.cos(l) * u + c, Math.sin(l) * u + d);
      var w = this;
      g.update = function() {
        this.x += Math.cos(l) * this.speed;
        this.y += Math.sin(l) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = w.$c.indexOf(this);
          -1 !== a && w.$c.splice(a, 1)
        }
      };
      this.$c.push(g)
    }
  }, $f:function() {
    X(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.li, {defaultValue:this.Uf, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, li:function(a) {
    4 !== a && (this.Uf = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Fd = j;
          for(var a = 0, b = this.$c.length;a < b;a++) {
            this.$c[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.replaceScene(Da())
        }.bind(this));
        break;
      case 2:
        this.Xb();
        break;
      case 3:
        s.Jh()
    }
  }, Xb:function() {
    X(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Se, {defaultValue:this.Ld, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Se:function(a) {
    3 !== a && (this.Ld = a);
    switch(a) {
      case 0:
        this.Te();
        break;
      case 1:
        this.Ue();
        break;
      case 2:
        this.ti();
        break;
      default:
        this.$f()
    }
  }, Te:function() {
    X(this, "BGM VOLUME", "012345".split(""), this.Qe, {defaultValue:s.Lc, onCursorMove:function(a) {
      K !== k && "exit" !== a && (K.volume = 0.1 * a)
    }, showExit:m})
  }, Qe:function(a) {
    6 !== a && (s.Lc = a);
    this.Xb()
  }, Ue:function() {
    X(this, "SE VOLUME", "012345".split(""), this.Re, {defaultValue:s.nc, showExit:m})
  }, Re:function(a) {
    6 !== a && (s.nc = a);
    this.Xb()
  }, ti:function() {
    X(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.ki, {defaultValue:s.If, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, ki:function(a) {
    5 !== a && (s.If = a);
    this.Xb()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  Da = tm.createClass({superClass:W, mode:0, types:k, Vd:k, jb:k, kb:k, lb:k, Je:k, He:k, type:0, style:0, gc:m, Md:m, init:function() {
    this.superInit();
    tm.app.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.xi();
    this.Vd = this.wi();
    var a = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(48, 320).setRotation(-90);
    a.update = function(a) {
      this.setScale(a.keyboard.getKey("left") ? 2 : 1);
      this.alpha = 1 + 0.5 * Math.sin(0.1 * a)
    };
    a.addChildTo(this);
    a = tm.app.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(432, 320).setRotation(90);
    a.update = function(a) {
      this.setScale(a.keyboard.getKey("right") ? 2 : 1);
      this.alpha = 1 + 0.5 * Math.sin(0.1 * a)
    };
    a.addChildTo(this);
    this.mode = 0;
    this.Vd.visible = m;
    this.Ne(-1, j);
    J("voSelectShip")
  }, xi:function() {
    var a = tm.app.CanvasElement();
    a.addChildTo(this);
    this.Je = tm.app.Label("Type-A").setPosition(240, 150);
    this.Je.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u5f37\u529b\u306a\u96d1\u9b5a\u6383\u8a0e\u80fd\u529b"];
    this.Ke = tm.app.Label(b[0], 16).setPosition(240, 500);
    this.Ke.update = function() {
      this.Ke.text = b[this.type]
    }.bind(this);
    this.Ke.addChildTo(a);
    var g = tm.app.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.jb = tm.app.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.kb = tm.app.AnimationSprite(g, 64, 64).gotoAndPlay("typeB");
    this.lb = tm.app.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.jb.Ea = 0;
    this.kb.Ea = 1;
    this.lb.Ea = 2;
    this.jb.setScale(3).setPosition(0, 320).addChildTo(a);
    this.kb.setPosition(0, 320).addChildTo(a);
    this.lb.setPosition(0, 320).addChildTo(a);
    this.jb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ea / 3 * Math.PI)
    };
    this.kb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ea / 3 * Math.PI)
    };
    this.lb.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.Ea / 3 * Math.PI)
    };
    this.jb.update();
    this.kb.update();
    this.lb.update();
    return a
  }, wi:function() {
    var a = tm.app.CanvasElement();
    a.addChildTo(this);
    this.He = tm.app.Label("Shot Style").setPosition(240, 150);
    this.He.addChildTo(a);
    this.Ic = tm.app.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(a);
    this.Kb = tm.app.Object2D();
    this.Kb.addChildTo(this.Ic);
    this.Kb.update = function(a) {
      this.Kb.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
    }.bind(this);
    this.ta = [];
    this.ta[0] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ta[0].update = function() {
      0 === this.type ? this.ta[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.ta[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.ta[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.ta[1] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ta[1].update = function() {
      0 === this.type ? this.ta[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.ta[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.ta[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.ta[2] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ta[2].update = function() {
      0 === this.type ? this.ta[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.ta[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.ta[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.ta[3] = tm.app.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.ta[3].update = function() {
      0 === this.type ? this.ta[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.ta[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.ta[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.Ic.line = b(0, 0, 0, 130, 8);
    this.Ic.line.addChildTo(this.Ic);
    this.ta.each(function(a) {
      a.line = b(0, 0, 0, 130, 5);
      a.line.addChildTo(a);
      a.addChildTo(this.Kb)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3059\u308b\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.Ie = tm.app.Label(d[0], 16).setPosition(240, 500);
    this.Ie.update = function() {
      this.Ie.text = d[this.style]
    }.bind(this);
    this.Ie.addChildTo(a);
    return a
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.Vd.visible = m, !this.Md && a.keyboard.getKeyDown("left")) {
        this.Ne(-1, m), J("select")
      }else {
        if(!this.Md && a.keyboard.getKeyDown("right")) {
          this.Ne(1, m), J("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, J("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.Vd.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, J("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, J("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.pi(), J("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Di(0 === ~~(a.frame / 60) % 2))
    }
  }, pi:function() {
    X(this, "AUTO BOMB", ["on", "off"], this.gi, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, gi:function(a) {
    2 !== a && (this.gc = 0 === a, this.qi())
  }, qi:function() {
    X(this, "ARE YOU READY?", ["ok"], this.hi, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, hi:function(a) {
    0 === a && this.zi()
  }, Ne:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.jb, this.kb, this.lb][this.type].remove().addChildTo(this.types);
    b ? (this.jb.Ea -= a, this.jb.scaleX = 0 === this.type ? 5 : 1, this.jb.scaleY = 0 === this.type ? 5 : 1, this.kb.Ea -= a, this.kb.scaleX = 1 === this.type ? 5 : 1, this.kb.scaleY = 1 === this.type ? 5 : 1, this.lb.Ea -= a, this.lb.scaleX = 2 === this.type ? 5 : 1, this.lb.scaleY = 2 === this.type ? 5 : 1) : (this.Md = j, this.jb.tweener.clear().to({Ea:this.jb.Ea - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.kb.tweener.clear().to({Ea:this.kb.Ea - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.lb.tweener.clear().to({Ea:this.lb.Ea - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.Md = m
    }.bind(this)));
    this.Je.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, zi:function() {
    s.ca.gc = this.gc;
    s.ca.start(this.type, this.style);
    s.replaceScene(s.ca)
  }, Di:function(a) {
    this.He.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    a ? (this.ta[0].visible = j, this.ta[1].visible = j, 1 === this.style ? (this.ta[2].visible = m, this.ta[3].visible = m) : (this.ta[2].visible = j, this.ta[3].visible = j), this.Ic.line.lineWidth = 5) : (this.ta.each(function(a) {
      a.visible = m
    }), this.Ic.line.lineWidth = 0 === this.style ? 10 : 20)
  }, draw:function(b) {
    b.clearColor(tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle());
    b.lineWidth = 1;
    b.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    b.beginPath();
    for(var d = 0, g = -48;528 > g;g += 24) {
      for(var d = 0 === d ? a : 0, l = 2 * -a + d;l < 640 + 2 * a;l += 2 * a) {
        b.line(g, l, g + 16, l), b.line(g, l, g - 8, l + a), b.line(g, l, g - 8, l - a)
      }
    }
    b.stroke();
    b.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    b.fillRect(10, 10, 460, 620)
  }});
  var b = tm.createClass({superClass:tm.app.CanvasElement, init:function(a, b, g, l, u) {
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
F = tm.createClass({superClass:W, da:k, score:0, Ia:0, ya:0, Yc:0, Ca:0, Vb:0, gg:0, fg:k, la:k, $b:3, Sd:0, Td:0, Eb:0, Cd:0, Zc:0, Me:0, gc:m, vb:0, Mc:0, zf:0, Bc:m, Yi:m, Db:0, Xa:0, na:m, Vc:0, Ac:0, xa:0, xe:0, Wi:0, Vi:0, Hd:k, Lf:k, Ve:k, Jf:k, ye:k, ze:k, te:k, ci:k, gb:k, ab:k, Ub:k, Qc:m, bi:m, init:function() {
  F.je !== k && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  F.je = this;
  this.ab = na(this);
  this.ab.Ra.addChildTo(this);
  this.la = pa().ga;
  this.la.addChildTo(this);
  this.Hd = F.Rb().addChildTo(this);
  this.Lf = F.Rb().addChildTo(this);
  this.Jf = F.Rb().addChildTo(this);
  this.ye = F.Rb().addChildTo(this);
  this.Ve = F.Rb().addChildTo(this);
  this.ze = F.Rb().addChildTo(this);
  this.te = F.Rb().addChildTo(this);
  this.ci = F.mf(this).addChildTo(this);
  tm.Va.ac.Pc.wf = this;
  this.gb = tm.app.Object2D();
  this.gb.addChildTo(this);
  this.gb.update = function(b) {
    this.ni(b)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.ab.clear()
  })
}, addChild:function(b) {
  b.Za ? this.ye.addChild(b) : b instanceof L ? this.te.addChild(b) : b instanceof ra ? this.Hd.addChild(b) : b instanceof N ? b.Ob ? this.Hd.addChild(b) : this.Jf.addChild(b) : b instanceof ba ? this.Ve.addChild(b) : b === this.gb || b === this.la || b instanceof F.Rb || b instanceof F.mf || b instanceof oa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(b)))
}, update:function(b) {
  this.ui(b.keyboard);
  0 === b.frame % 500 && (U = Ia(512));
  this.fg.update(b.frame);
  0 === b.frame % 2 && this.ab.update();
  b.keyboard.getKeyDown("escape") ? (this.app.replaceScene(A()), Ca()) : b.keyboard.getKeyDown("space") ? this.Nd(0) : b.keyboard.getKeyDown("p") && (this.eg().saveAsImage(), this.Nd(0))
}, eg:function() {
  var b = tm.graphics.Canvas();
  b.resize(480, 640);
  b.clearColor("black");
  b.drawImage(this.la.la.element, 0, 0);
  b.drawImage(this.app.canvas.element, 0, 0);
  b.drawImage(this.ab.element, 0, 0);
  return b
}, ni:function() {
  this.da.Lb === m && C.erase();
  var b;
  b = [].concat(N.Ma);
  for(var a = [].concat(G.Ma), c = a.length;a[--c] !== i;) {
    for(var d = b.length;b[--d] !== i;) {
      var g = b[d], l = a[c];
      if(!(0 >= g.sa) && Ka(g, l) && (l.Gd(1), l.remove(), g.Mb(this.na ? t.Sg : t.Xg))) {
        this.Eb += 1;
        this.na ? this.Ta(t.Mg) : this.Ta(t.Lg);
        this.Pe(g);
        break
      }
    }
  }
  l = this.da.Fb;
  if(this.da.pb) {
    b = [].concat(N.Ma);
    b.sort(function(a, b) {
      return a.y - b.y
    });
    for(d = b.length;b[--d] !== i;) {
      if(g = b[d], !(0 >= g.sa) && Ka(g, l)) {
        l.vi(g.y + g.boundingHeightBottom);
        g.Mb(l.re) ? (this.Eb += 1, this.na ? this.Ta(t.Kg) : this.Ta(t.Hg), this.Pe(g)) : (this.na ? this.Tb(0.01 * this.xa) : this.Tb(0.01), this.Ca = Math.min(this.Ca + 0.02, 1), this.na ? this.Ta(t.Jg) : this.Ta(t.Ig));
        l.Gd(2);
        break
      }
    }
    a = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(N.Ma);
    for(d = b.length;b[--d] !== i;) {
      g = b[d], !(0 >= g.sa) && Ka(g, a) && (g.Mb(l.re) ? (this.Eb += 1, this.na ? this.Ta(t.Gg) : this.Ta(t.Dg), this.Pe(g)) : (this.na ? this.Tb(0.01 * this.xa) : this.Tb(0.01), this.Ca = Math.min(this.Ca + 0.02, 1), this.na ? this.Ta(t.Fg) : this.Ta(t.Eg)), l.Uh(2, this.da.x, this.da.y - 30))
    }
  }
  if(this.Bc) {
    C.erase();
    b = [].concat(N.Ma);
    for(d = b.length;b[--d] !== i;) {
      g = b[d], !(0 >= g.sa) && (g.Wc() && g.Mb(t.ng)) && (this.ec(g.score), this.Eb += 1)
    }
    this.Ca = this.ya = 0
  }
  if(this.na) {
    d = [].concat(G.Ma);
    for(g = d.length;d[--g] !== i;) {
      if(l = d[g], !(0 >= l.sa)) {
        a = [].concat(L.Ma);
        for(b = a.length;a[--b] !== i;) {
          c = a[b], c.visible !== m && (0 < l.sa && Ka(l, c)) && (c.sa -= 6 - this.Xa, 0 > c.sa && (c.Na(), this.ec(t.rg), this.Tb(t.pg), this.Of(m, m, c.x, c.y, 1)), l.sa -= 1)
        }
      }
    }
  }
  if(this.Qc) {
    C.erase()
  }else {
    if(this.da.parent !== k && this.da.Dc === m && this.Bc === m && 0 >= this.Vc) {
      for(d = L.Ma.length;L.Ma[--d] !== i;) {
        if(b = L.Ma[d], b.visible !== m && Ka(b, this.da)) {
          this.da.Mb();
          0 < this.vb && this.gc ? (this.Xa = P(this.Xa - 1, 0, 1), this.wd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.Yf();
          break
        }
      }
      for(d = N.Ma.length;N.Ma[--d] !== i;) {
        if(g = N.Ma[d], !(0 >= g.sa) && !g.Ob && Ka(g, this.da)) {
          this.da.Mb();
          0 < this.vb && this.gc ? (this.Xa = P(this.Xa - 1, 0, 1), this.wd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.Yf();
          break
        }
      }
    }
    this.na && (this.Ac -= 1, 0 >= this.Ac && this.Bd());
    this.Vc = Math.max(this.Vc - 1, 0);
    this.Ca -= t.tg * t.ug;
    0 >= this.Ca && (this.Ca = 0, this.na || 0 < this.xa ? this.Vb = this.ya = this.Ia = 0 : (0 < this.ya && (0 >= this.Vb && (this.Vb = this.ya * t.sg), this.Ia = this.Ia * (this.ya - this.Vb) / this.ya, this.ya -= this.Vb), 0 >= this.ya && (this.Vb = this.ya = this.Ia = 0)))
  }
}, Pe:function(b) {
  this.Of(b.Ob, this.na || Ga(b, this.da) < t.vg, b.x, b.y, b.star);
  this.na ? 6 > this.xa ? this.Tb(10) : this.Tb(20) : this.Tb(1);
  for(var a = this.Ia, c = ~~(this.ya / t.gf) + 1, d = 0;d < c;d++) {
    a += b.score, this.ec(a)
  }
  this.Ia += b.score * c
}, Of:function(b, a, c, d, g) {
  b = b ? ta : sa;
  for(var l = 0;l < g;l++) {
    b(a).setPosition(c, d)
  }
}, ei:function(b) {
  J("star");
  b.Sf ? (this.Td += 1, this.Ia += t.fh, this.ec(t.jh + this.Ia * t.hh), this.na ? this.Ta(t.Qg) : this.Ta(t.Pg)) : (this.Sd += 1, this.Ia += t.eh, this.ec(t.ih + this.Ia * t.gh), this.na ? this.Ta(t.Og) : this.Ta(t.Ng))
}, start:function(b, a) {
  this.ab.vc.Bh().clear();
  this.score = 0;
  this.$b = t.kf;
  this.vb = this.Mc = t.jf[a];
  this.zf = t.og[a];
  this.xa = this.Xa = this.Db = 0;
  p.va.Oa.$rank = t.Tg;
  this.Bd();
  this.Bc = m;
  this.Zc = this.Me = 0;
  this.da = ba(this, b, a);
  this.hg(0);
  J("voLetsGo");
  this.Bi()
}, hg:function(b) {
  this.Qa("3...2...1...");
  this.da.parent !== k && this.da.remove();
  N.Nc();
  G.Nc();
  C.Nc();
  this.Hd.removeChildren();
  this.ye.removeChildren();
  this.ze.removeChildren();
  this.Ve.removeChildren();
  this.te.removeChildren();
  this.gb.removeChildren();
  this.Eb = this.Cd = this.Td = this.Sd = this.Yc = this.Ca = this.ya = this.Ia = 0;
  this.Ub = k;
  this.bi = this.Qc = m;
  this.Zc = 0;
  this.ab.Ra.Sc = 0;
  this.Xa = this.ab.Ra.xb = 0;
  this.gg = b;
  this.fg = ua.create(this, b);
  this.tweener.clear().wait(1E3).call(function() {
    this.Le()
  }.bind(this));
  this.la.tweener.clear()
}, Le:function() {
  this.Qa("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Fb.addChildTo(this);
  this.da.Lb = m;
  this.da.Dc = j;
  this.da.yc = m;
  this.da.pb = m;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Lb = j
  }.bind(this.da)).wait(t.Vg).call(function() {
    this.Dc = m
  }.bind(this.da))
}, Yf:function() {
  E.Dd(this.da.x, this.da.y, this);
  this.Qa("I was shot down.");
  this.da.Lb = m;
  this.da.remove();
  this.$b -= 1;
  this.xa = this.Vb = this.ya = this.Ca = 0;
  this.Zc += 1;
  this.Me += 1;
  this.Xa = P(this.Xa - 3, 0, 1);
  this.wd(-0.03);
  0 < this.$b ? this.tweener.clear().wait(1E3).call(function() {
    this.gc || (this.Mc = Math.min(this.Mc + 1, this.zf));
    this.vb = this.Mc;
    this.Le()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.si()
  }.bind(this))
}, wd:function(b) {
  p.va.Oa.$rank = P(p.va.Oa.$rank + b, 0, 0.5)
}, Sh:function() {
  this.Qa("System rebooted.", j);
  this.score = 0;
  this.$b = t.kf;
  this.vb = this.Mc = t.jf[this.da.style];
  this.Xa = 0;
  p.va.Oa.$rank = 0;
  this.Le()
}, Ch:function() {
  Ba("bgmResult");
  var b = tm.app.Object2D();
  b.addChildTo(this.gb);
  b.tweener.wait(1E3).call(function() {
    this.app.pushScene(Ea(this, this.eg()));
    b.remove()
  }.bind(this))
}, Th:function() {
  Ca();
  this.app.replaceScene(Ma())
}, Ri:n(), ec:function(b) {
  var a = this.score;
  this.score += b;
  for(b = 0;b < t.hf.length;b++) {
    var c = t.hf[b];
    a < c && c <= this.score && this.Mh()
  }
  s.Id = Math.max(s.Id, this.score)
}, Tb:function(b) {
  this.Vb = 0;
  this.ya += b;
  this.Yc = Math.max(this.Yc, this.ya);
  1 <= b && (this.Ca = 1)
}, Ta:function(b) {
  if(this.xa !== t.ae) {
    for(b *= t.Rg;1 < b;) {
      ma(this.da).addChildTo(this), b -= 1, this.Db = 0, this.xa += 1, 1 === this.xa ? (this.Qa("HYPER SYSTEM, stand by.", j), J("voHyperStandBy")) : (this.Qa("HYPER SYSTEM, ready.", j), J("voHyperReady"))
    }
    this.Db = P(this.Db + b, 0, 1);
    1 <= this.Db && (ma(this.da).addChildTo(this), this.xa += 1, this.Db -= 1, 1 === this.xa ? (this.Qa("HYPER SYSTEM, stand by.", j), J("voHyperStandBy")) : (this.Qa("HYPER SYSTEM, ready.", j), J("voHyperReady")))
  }
}, Ai:function() {
  0.5 > Math.random() ? (this.Qa("HYPER SYSTEM start!!", j), J("voHyperStart0")) : (this.Qa("start counting to system limit.", j), J("voHyperStart1"));
  this.Xa = P(this.Xa + 1, 0, 5);
  this.wd(0.01 * this.xa);
  p.va.Oa.$hyperOff = t.yg;
  this.Ac = t.ld;
  this.Vc = t.ld * t.Cg;
  this.da.Jd.Gc(this.xa);
  this.da.Fb.Gc(this.xa);
  this.da.wc = this.da.Jd;
  E.Vh(this.da.x, this.da.y, this);
  this.na = j;
  this.xe = this.xa;
  this.Db = this.xa = 0;
  C.erase(j, j)
}, Bd:function() {
  this.na !== m && (this.na = m, ma(this.da, j).addChildTo(this), this.da.wc = this.da.Zf, this.da.Fb.Fc("blue"), p.va.Oa.$hyperOff = 1, this.da.Jd.Gc(0), this.da.Fb.Gc(0), this.Vc = t.ld * t.Bg, this.xe = this.Ac = 0, C.erase())
}, Mh:function() {
  J("voExtend");
  this.Qa("extended.");
  this.$b += 1
}, Qa:function(b, a) {
  this.ab.vc.yh(b, a)
}, Nd:function(b) {
  X(this, "PAUSE", ["resume", "setting", "exit game"], this.mi, {defaultValue:b, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:m})
}, mi:function(b) {
  switch(b) {
    case 1:
      this.Xb();
      break;
    case 2:
      this.ri()
  }
}, Xb:function() {
  X(this, "SETTING", ["bgm volume", "sound volume"], this.Se, {defaultValue:this.Ld, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Se:function(b) {
  3 !== b && (this.Ld = b);
  switch(b) {
    case 0:
      this.Te();
      break;
    case 1:
      this.Ue();
      break;
    default:
      this.Nd()
  }
}, ri:function() {
  X(this, "REARY?", ["yes", "no"], this.ii, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:m})
}, ii:function(b) {
  0 === b ? (Ca(), this.app.replaceScene(A())) : this.Nd(1)
}, Te:function() {
  X(this, "BGM VOLUME", "012345".split(""), this.Qe, {defaultValue:s.Lc, onCursorMove:function(b) {
    K !== k && 6 !== b && (K.volume = 0.1 * b)
  }, showExit:m})
}, Qe:function(b) {
  6 !== b && (s.Lc = b);
  this.Xb(1)
}, Ue:function() {
  X(this, "SE VOLUME", "012345".split(""), this.Re, {defaultValue:s.nc, showExit:m})
}, Re:function(b) {
  6 !== b && (s.nc = b);
  this.Xb(1)
}, si:function() {
  X(this, "CONTINUE?", ["yes", "no"], this.ji, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:m})
}, ji:function(b) {
  switch(b) {
    case 0:
      this.Sh();
      break;
    case 1:
      this.Th()
  }
}, draw:n(), yi:function() {
  this.ab.Ra.tweener.clear().to({Sc:-480}, 1600, "easeInQuad").to({xb:30}, 800, "easeInOutQuad")
}, Xh:function() {
  this.ab.Ra.tweener.clear().to({xb:0}, 800, "easeInOutQuad").to({Sc:0}, 1600, "easeOutQuad")
}, bd:k, cd:0, Xc:k, nd:0, Bi:function() {
  if(1 === this.nd) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.Xc = [];
      for(var b = ~~localStorage.getItem("recCount"), a = 0;a < b;a++) {
        localStorage.removeItem("rec" + a)
      }
      localStorage.removeItem("recCount")
    }
    this.bd = [];
    this.cd = 0
  }else {
    if(2 === this.nd && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.Xc = [];
      b = ~~localStorage.getItem("recCount");
      for(a = 0;a < b;a++) {
        for(var c = localStorage.getItem("rec" + a).split(","), d = 0;d < c.length;d++) {
          this.Xc.push(c[d])
        }
      }
    }
  }
}, ui:function(b) {
  if(1 === this.nd) {
    1E3 < this.bd.length && (console.log("save"), localStorage.setItem("rec" + this.cd, this.bd), localStorage.setItem("recCount", this.cd), this.bd = [], this.cd += 1), this.bd.push("" + ~~b.getKey("up") + ~~b.getKey("down") + ~~b.getKey("left") + ~~b.getKey("right") + ~~b.getKey("z") + ~~b.getKey("x") + ~~b.getKey("c"))
  }else {
    if(2 === this.nd && this.Xc) {
      var a = this.Xc.shift();
      a !== i && (b.getKey = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : m
      }, b.getKeyDown = function(b) {
        return"up" === b ? !!~~a[0] : "down" === b ? !!~~a[1] : "left" === b ? !!~~a[2] : "right" === b ? !!~~a[3] : "z" === b ? !!~~a[4] : "x" === b ? !!~~a[5] : "c" === b ? !!~~a[6] : m
      })
    }
  }
}});
F.Rb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
F.mf = tm.createClass({superClass:tm.app.CanvasElement, ca:k, frame:0, init:function(b) {
  this.superInit();
  this.ca = b;
  this.blendMode = "lighter"
}, update:function(b) {
  this.frame = b.frame
}, draw:function(b) {
  this.Fh(b);
  this.Gh(b)
}, Fh:function(b) {
  if(0 < this.ca.Ca) {
    b.fillStyle = "rgba(255," + ~~(255 * this.ca.Ca) + "," + ~~Math.min(255, 512 * this.ca.Ca) + ",0.5)";
    var a = 500 * this.ca.Ca;
    b.fillRect(465, 635 - a, 10, a)
  }
}, Gh:function(b) {
  b.fillStyle = "rgba(255,255,0,0.1)";
  b.fillRect(5, 628, 200, 9);
  this.xa === t.ae ? 1 === this.frame % 2 && (b.fillStyle = "rgba(255,255,255,0.3)", b.fillRect(5, 628, 200, 9)) : 0 < this.ca.Db && (b.fillStyle = "rgba(255,255,100,0.3)", b.fillRect(5, 628, 200 * this.ca.Db, 9));
  0 === this.frame % 2 && (b.strokeStyle = "rgba(255,255,100,0.5)", !this.ca.na && 0 < this.ca.xa ? (b.setText("bold 24px Orbitron", "left", "bottom"), b.strokeText("HYPER LV " + this.ca.xa, 5, 637)) : this.ca.na && (b.setText("bold 28px Orbitron", "left", "bottom"), b.strokeText("HYPER LV " + this.ca.xe, 5, 637)))
}});
F.je = k;
(function() {
  Ea = tm.createClass({superClass:W, ca:k, cg:k, gb:k, values:k, labels:k, Kd:k, bg:[t.bh, t.dh, t.Zg, t.$g, 1], Rf:k, Xe:k, cursor:0, wait:0, frame:0, init:function(a, b) {
    this.superInit();
    this.ca = a;
    this.values = [this.ca.Sd, this.ca.Td, ~~(100 * (this.ca.Eb / this.ca.Cd)), this.ca.Yc, 0 === this.ca.Zc ? t.ah : 0];
    this.Kd = this.values.map(function(a) {
      return 0.01 * a
    });
    tm.app.Label("RESULT", 40).setPosition(240, 64).addChildTo(this);
    tm.app.Label("STAR (S)").setAlign("right").setBaseline("middle").setPosition(240, 128).addChildTo(this);
    tm.app.Label("STAR (L)").setAlign("right").setBaseline("middle").setPosition(240, 192).addChildTo(this);
    tm.app.Label("KILL RATIO").setAlign("right").setBaseline("middle").setPosition(240, 256).addChildTo(this);
    tm.app.Label("MAX HIT").setAlign("right").setBaseline("middle").setPosition(240, 320).addChildTo(this);
    tm.app.Label("NO MISS BONUS", 20).setAlign("right").setBaseline("middle").setPosition(240, 384).addChildTo(this);
    tm.app.Label("TOTAL SCORE").setAlign("right").setBaseline("middle").setPosition(240, 448).addChildTo(this);
    this.labels = [];
    for(var d = 0;d < this.values.length;d++) {
      this.labels[d] = tm.app.Label("" + Math.floor(this.values[d]) + (2 === d ? "%" : ""), 30).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 640 * (0.2 + 0.1 * d)).addChildTo(this)
    }
    this.Rf = tm.app.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
    this.Xe = tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.Xe.visible = m;
    this.background = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle();
    this.cg = b;
    for(var g = [], d = 0;12 > d;d++) {
      g[d] = [];
      for(var l = 0;16 > l;l++) {
        g[d][l] = {Ye:0, Qd:0, ef:R(-2, 2), ed:R(1, 4)}
      }
    }
    this.gb = tm.app.Object2D();
    this.gb.draw = function(a) {
      for(var b = j, c = 0;c < g.length;c++) {
        for(var d = 0;d < g[c].length;d++) {
          var l = g[c][d];
          640 > 40 * d + l.Qd && (a.drawImage(this.cg.element, 40 * c, 40 * d, 40, 40, 40 * c + l.Ye, 40 * d + l.Qd, 40, 40), l.Ye += l.ef, l.Qd += l.ed, l.ed += 0.3, b = m)
        }
      }
      b ? (this.gb.remove(), this.wait = 60) : this.wait = 100
    }.bind(this);
    this.gb.addChildTo(this);
    this.addEventListener("exit", function() {
      ya()
    })
  }, update:function(a) {
    this.wait -= 1;
    if(!(0 < this.wait)) {
      var b = this.cursor;
      if(b < this.values.length) {
        J("star"), this.values[b] <= this.Kd[b] || a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.ca.ec(this.values[b] * this.bg[b]), this.values[b] = 0, this.cursor += 1, this.wait = 30) : (this.ca.ec(this.Kd[b] * this.bg[b]), this.values[b] -= this.Kd[b]), this.labels[b].text = "" + Math.floor(this.values[b]) + (2 === b ? "%" : ""), this.Rf.text = Math.floor(this.ca.score)
      }else {
        if(this.Xe.visible = j, a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") || 1800 < this.frame) {
          J("decision"), this.ca.hg(this.ca.gg + 1), a.popScene()
        }
      }
      this.frame += 1
    }
  }, draw:function(a) {
    a.clearColor(this.background);
    a.lineWidth = 1;
    a.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    a.beginPath();
    for(var c = 0, d = -48;528 > d;d += 24) {
      for(var c = 0 === c ? b : 0, g = 2 * -b + c;g < 640 + 2 * b;g += 2 * b) {
        a.line(d, g, d + 16, g), a.line(d, g, d - 8, g + b), a.line(d, g, d - 8, g - b)
      }
    }
    a.stroke();
    a.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    a.fillRect(20, 20, 440, 600)
  }});
  var b = 8 * Math.sqrt(3)
})();
var Ma = tm.createClass({superClass:W, init:function() {
  this.superInit();
  var b = tm.app.Label("GAME OVER");
  b.fillStyle = "red";
  b.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(A())
    }.bind(this))
  })
}, update:function(b) {
  (b.keyboard.getKeyDown("z") || b.keyboard.getKeyDown("c")) && b.replaceScene(A())
}, draw:function(b) {
  b.clearColor("black")
}});
tm.createClass({superClass:W, init:function() {
  this.superInit()
}, update:n()});
(function() {
  N = tm.createClass({superClass:tm.app.CanvasElement, name:k, da:k, ca:k, sa:0, score:0, Ob:m, erase:m, star:1, ai:m, kc:j, Nb:m, frame:0, Wd:k, direction:0, speed:0, za:k, init:function(a, c, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.Nb = m;
      b.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var a = b.indexOf(this);
      -1 !== a && b.splice(a, 1)
    });
    this.kc = j;
    this.ca = a;
    this.da = a.da;
    this.score = 100;
    this.erase = m;
    this.wh(d);
    c.oa(this);
    this.altitude = this.Ob ? 1 : 10;
    this.Wd = {x:0, y:0}
  }, fi:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, $i:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.Nb === m && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.Nb = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, b = this.y;
    this.Ob && (this.x += this.ca.la.pa, this.y += this.ca.la.qa);
    this.Nb && (this.frame += 1);
    this.Wd.x = this.x - a;
    this.Wd.y = this.y - b
  }, Mb:function(a) {
    if(!this.Nb) {
      return m
    }
    this.sa -= a;
    return 0 >= this.sa ? (a = R(0, 5), 2 > a ? this.ca.Qa("enemy destroy.") : 4 > a ? this.ca.Qa(this.name + " destroy.") : this.ca.Qa("ETR reaction gone."), this.erase && C.erase(j, this.ca.na), this.dispatchEvent(tm.event.Event("destroy")), this.Na(), j) : m
  }, Na:function() {
    E.Dd(this.x, this.y, this.ca, this.Wd);
    this.remove()
  }, Wc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, oi:function() {
    return this.kc
  }, wh:function(a) {
    this.name = a;
    a = N.wg[a];
    this.sa = a[0];
    this.score = a[1];
    this.Ob = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, Ae:function() {
    this.remove();
    this.ca.Lf.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && E.Dd(this.x + V(-100, 100), this.y + V(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      E.Kf(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Af:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && E.Dd(this.x + V(-100, 100), this.y + V(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      E.Kf(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  N.Nc = function() {
    for(var a = [].concat(b), c = 0, d = a.length;c < d;c++) {
      a[c].remove()
    }
  };
  var b = N.Ma = []
})();
Fa = tm.createClass({superClass:N, ai:j, zc:0, Rd:k, init:function(b, a, c) {
  this.Rd = a;
  this.superInit(b, this.Rd[0], c);
  this.zc = this.sa;
  this.addEventListener("added", function() {
    this.ca.Ub = this;
    this.ca.yi();
    this.tweener.wait(1E3).call(function() {
      this.ca.Qc = m
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.Ub = k;
    this.ca.Xh();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.Ch()
    }.bind(this));
    a.addChildTo(this.ca.gb)
  })
}, Mb:function(b) {
  var a = this.sa;
  if(N.prototype.Mb.call(this, b)) {
    return this.ca.Qc = j, ya(), j
  }
  this.sa <= 0.55 * this.zc && 0.55 * this.zc < a ? (O.af(this), this.clearEventListener("completeattack"), this.tweener.clear(), E.lc(this.x, this.y, this.ca), C.erase(j, this.ca.na), this.Rd[1].oa(this)) : this.sa <= 0.1 * this.zc && 0.1 * this.zc < a && (O.af(this), this.clearEventListener("completeattack"), this.tweener.clear(), E.lc(this.x, this.y, this.ca), C.erase(j, this.ca.na), this.Rd[2].oa(this), J("voJacms"))
}});
(function() {
  N.wg = {kujo:[2, 300, m, m, 1, {radius:24}], kiryu:[3, 400, m, m, 1, {radius:24}], natsuki:[5, 900, j, m, 1, {radius:24}], kise:[50, 15E3, j, m, 1, {radius:24}], hanasaki:[150, 2E5, j, m, 10, {radius:24}], myodoin:[50, 15E3, j, m, 1, {radius:24}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], kurokawa:[35, 5E3, m, m, 5, {width:100, height:20}], akimoto:[250, 3E5, m, j, 10, {width:200, heightBottom:10, heightTop:60}], yukishiro:[750, 8E5, m, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, 
  m, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, m, j, 20, {width:300, height:80}], hyuga:[4E3, 2E6, m, j, 0, {width:240, height:80}]};
  N.Ja = tm.createClass({superClass:N, Aa:k, init:function(a, c) {
    this.superInit(a, c, "kujo");
    this.Aa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    N.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.Aa.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  N.ha = tm.createClass({superClass:N, Aa:k, init:function(a, c) {
    this.superInit(a, c, "kiryu");
    this.Aa = b("tex_stage1", 64, 64)
  }, update:function(a) {
    N.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.Aa.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  N.ea = tm.createClass({superClass:N, dc:k, oe:k, init:function(a, c) {
    this.superInit(a, c, "natsuki");
    this.dc = b("tex_tank1", 64, 64);
    this.oe = b("tex_tank1", 64, 64);
    this.hc = this.hc || 0;
    this.wb = this.wb || 0
  }, update:function(a) {
    N.prototype.update.call(this, a);
    for(a = this.hc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var b = this.wb;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    this.dc.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.oe.setFrameIndex(~~(16 * b / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.dc.draw(a);
    this.oe.draw(a)
  }, Na:function() {
    E.Kh(this.x, this.y, this.ca);
    this.remove()
  }});
  N.bc = tm.createClass({superClass:N, dc:k, init:function(a, c) {
    this.superInit(a, c, "kurokawa");
    this.Aa = b("tex_stage1", 128, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    E.lc(this.x, this.y, this.ca);
    this.remove()
  }});
  N.md = tm.createClass({superClass:N, init:function(a, c) {
    this.superInit(a, c, "akimoto");
    this.Aa = b("tex_stage1", 256, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    this.Ae()
  }});
  N.ua = tm.createClass({superClass:N, dc:k, init:function(a, c) {
    this.superInit(a, c, "kise");
    this.Aa = b("tex_stage1", 128, 128).setFrameIndex(5)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    E.lc(this.x, this.y, this.ca);
    this.remove()
  }});
  N.pd = tm.createClass({superClass:N, Aa:k, init:function(a, b) {
    this.superInit(a, b, "hanasaki")
  }, Na:function() {
    E.lc(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.de = tm.createClass({superClass:N, init:function(a, b) {
    this.superInit(a, b, "myodoin")
  }, Na:function() {
    E.lc(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.qb = tm.createClass({superClass:N, dc:k, init:function(a, c) {
    this.superInit(a, c, "kenzaki");
    this.Aa = b("tex_stage1", 128, 128).setFrameIndex(4)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    E.lc(this.x, this.y, this.ca);
    this.remove()
  }});
  N.be = tm.createClass({superClass:N, Aa:k, init:function(a, c) {
    this.superInit(a, c, "yukishiro");
    this.Aa = b("tex_stage1", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Na:function() {
    this.Ae()
  }, draw:function(a) {
    this.Aa.draw(a)
  }});
  N.fe = tm.createClass({superClass:Fa, dc:k, init:function(a, c) {
    this.superInit(a, c, "misumi");
    this.Aa = b("tex_stage1", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    this.Af()
  }});
  N.ee = tm.createClass({superClass:N, init:function(a, b) {
    this.superInit(a, b, "mishou")
  }, Na:function() {
    this.Ae()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.Ii = tm.createClass({superClass:Fa, init:function(a, b) {
    this.superInit(a, b, "hyuga")
  }, Na:function() {
    this.Af()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  var b = tm.createClass({superClass:tm.app.Sprite, init:function(a, b, d) {
    this.superInit(a, b, d)
  }, draw:function(a) {
    var b = this.srcRect;
    a.context.drawImage(this._image.element, b.x, b.y, b.width, b.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }})
})();
(function() {
  O = tm.createClass({oa:function(a) {
    a.on("destroy", function() {
      O.af(this)
    })
  }});
  O.nb = function(a, b) {
    var d = C[b].Ad();
    a.on("enterframe", d);
    a.on("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  };
  O.af = function(a) {
    var b = [].concat(a._listeners.enterframe);
    if(b) {
      for(var d = 0, g = b.length;d < g;d++) {
        b[d] && b[d].Fe && a.removeEventListener("enterframe", b[d])
      }
    }
  };
  O.mb = tm.createClass({superClass:O, init:function() {
    this.superInit()
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.on("launch", function() {
      var a = B.randf(64, 192);
      this.tweener.clear().wait(B.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
        O.nb(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  O.mb = O.mb();
  O.Ba = tm.createClass({superClass:O, init:function() {
    this.superInit()
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.on("launch", function() {
      var a = B.randf(192, 320);
      this.tweener.clear().wait(B.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
        O.nb(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  O.Ba = O.Ba();
  O.Qb = tm.createClass({superClass:O, init:function() {
    this.superInit()
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.on("launch", function() {
      var a = B.randf(448, 576);
      this.tweener.clear().wait(B.rand(10, 500)).move(this.x, a, 7 * a, "easeOutQuad").call(function() {
        O.nb(this, "basic0-0")
      }.bind(this))
    });
    a.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  O.Qb = O.Qb();
  O.ha = tm.createClass({superClass:O, init:function() {
    this.superInit()
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.tweener.wait(B.rand(0, 1E3)).call(function() {
      this.speed = 8;
      O.nb(this, "basic1-0");
      this.on("enterframe", function() {
        this.y < this.da.y && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = P(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.Wc() && this.Nb && this.remove();
        if(9E4 > Ga(this, this.da) || this.y > this.da.y) {
          this.kc = m
        }
      })
    }.bind(a))
  }});
  O.ha = O.ha();
  var b = tm.createClass({superClass:O, init:function(a, b, d) {
    this.superInit();
    this.$h = a;
    this.Zh = b;
    this.uc = d
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.speed = this.$h;
    a.hc = this.Zh;
    this.uc && (a.uc = [].concat(this.uc));
    a.wb = 0;
    a.on("enter", function() {
      O.nb(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.hc) * this.speed;
      this.y += Math.sin(this.hc) * this.speed;
      this.Nb && !this.Wc() && this.remove();
      for(this.wb = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.wb;) {
        this.wb += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.wb;) {
        this.wb -= 2 * Math.PI
      }
      this.kc = this.y < this.da.y && 4E4 < Ga(this, this.da);
      if(this.uc) {
        for(var a = 0;a < this.uc.length;a++) {
          var b = this.uc[a];
          b.frame === this.frame && this.tweener.to({hc:b.dir !== i ? b.dir : this.hc, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  O.sb = b(1, 0.25 * Math.PI);
  O.Ji = b(1, -1.75 * Math.PI);
  O.Jc = b(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  O.ja = b(1.6, 0.5 * Math.PI);
  O.tb = b(1.6, -0.5 * Math.PI);
  b = tm.createClass({superClass:O, fc:k, Ef:m, init:function(a, b) {
    this.superInit();
    this.fc = a;
    this.Ef = !!b
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.fc = this.fc;
    a.on("enter", function() {
      O.nb(this, this.fc)
    });
    a.on("enterframe", function() {
      this.Nb && !this.Wc() && this.remove()
    });
    if(!this.Ef) {
      a.on("enterframe", function() {
        this.kc = this.y < this.da.y && 4E4 < Ga(this, this.da)
      })
    }
  }});
  O.cb = b("basic3-0", m);
  O.eb = b("basic3-1", m);
  O.rb = b("cannon2-0", j);
  O.hd = b("cannon3-0", j);
  O.Yd = b("cannon4-0", j);
  b = tm.createClass({superClass:O, velocityY:0, fc:k, init:function(a, b) {
    this.superInit();
    this.velocityY = a;
    this.fc = b
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.velocityY = this.velocityY;
    a.za = [this.fc];
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      O.nb(this, this.za[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.Nb && !this.Wc() && this.remove();
      this.kc = this.y < this.da.y
    })
  }});
  O.cc = b(0.5, "kurokawa-1");
  O.nf = b(0.3, "komachi-1");
  O.of = b(0.5, "komachi-2");
  b = tm.createClass({superClass:O, za:k, init:function(a) {
    this.superInit();
    this.za = a
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.za = [].concat(this.za);
    a.Ud = m;
    a.Rc = m;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Ud = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * B.random() * Math.PI, g = B.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 192 + 0.5 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Ud === m || 0 >= this.sa) && 1500 < this.frame && this.Rc === m) {
        this.Rc = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Rc) {
        var a = this.za.shift();
        O.nb(this, a);
        this.za.push(a)
      }
    })
  }});
  O.be = b(["honoka-1"]);
  O.fe = tm.createClass({superClass:O, za:k, init:function() {
    this.superInit();
    this.za = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.za = [].concat(this.za);
    a.Ud = m;
    a.Rc = m;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Ud = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * B.random() * Math.PI, g = B.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa) && !this.Rc) {
        var a = this.za.shift();
        O.nb(this, a);
        this.za.push(a)
      }
    })
  }});
  O.Wg = O.fe();
  O.ge = tm.createClass({superClass:O, za:k, init:function() {
    this.superInit();
    this.za = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.za = [].concat(this.za);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * B.random() * Math.PI, g = B.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.sa)) {
        var a = this.za.shift();
        O.nb(this, a);
        this.za.push(a)
      }
    })
  }});
  O.ge = O.ge();
  O.he = tm.createClass({superClass:O, init:function() {
    this.superInit()
  }, oa:function(a) {
    O.prototype.oa.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.sa || O.nb(this, "nagisa-3-1")
    })
  }});
  O.he = O.he();
  O.ee = b(["mai-1", "mai-2"])
})();
var Y = N, $ = O;
xa = {"heri1-left":[{$:Y.ha, aa:$.mb, x:48, y:-100}, {$:Y.ha, aa:$.Ba, x:96, y:-100}, {$:Y.ha, aa:$.mb, x:144, y:-100}, {$:Y.ha, aa:$.Ba, x:192, y:-100}, {$:Y.ha, aa:$.mb, x:240, y:-100}], "heri1-center":[{$:Y.ha, aa:$.mb, x:144, y:-100}, {$:Y.ha, aa:$.Ba, x:192, y:-100}, {$:Y.ha, aa:$.mb, x:240, y:-100}, {$:Y.ha, aa:$.Ba, x:288, y:-100}, {$:Y.ha, aa:$.mb, x:336, y:-100}], "heri1-right":[{$:Y.ha, aa:$.mb, x:240, y:-100}, {$:Y.ha, aa:$.Ba, x:288, y:-100}, {$:Y.ha, aa:$.mb, x:336, y:-100}, {$:Y.ha, 
aa:$.Ba, x:384, y:-100}, {$:Y.ha, aa:$.mb, x:432, y:-100}], "heri1-left2":[{$:Y.ha, aa:$.Ba, x:48, y:-100}, {$:Y.ha, aa:$.Qb, x:96, y:-100}, {$:Y.ha, aa:$.Ba, x:144, y:-100}, {$:Y.ha, aa:$.Qb, x:192, y:-100}, {$:Y.ha, aa:$.Ba, x:240, y:-100}], "heri1-center2":[{$:Y.ha, aa:$.Ba, x:144, y:-100}, {$:Y.ha, aa:$.Qb, x:192, y:-100}, {$:Y.ha, aa:$.Ba, x:240, y:-100}, {$:Y.ha, aa:$.Qb, x:288, y:-100}, {$:Y.ha, aa:$.Ba, x:336, y:-100}], "heri1-right2":[{$:Y.ha, aa:$.Ba, x:240, y:-100}, {$:Y.ha, aa:$.Qb, x:288, 
y:-100}, {$:Y.ha, aa:$.Ba, x:336, y:-100}, {$:Y.ha, aa:$.Qb, x:384, y:-100}, {$:Y.ha, aa:$.Ba, x:432, y:-100}], "heri2-left":[{$:Y.Ja, aa:$.ha, x:48, y:-100}, {$:Y.Ja, aa:$.ha, x:96, y:-100}, {$:Y.Ja, aa:$.ha, x:144, y:-100}, {$:Y.Ja, aa:$.ha, x:192, y:-100}, {$:Y.Ja, aa:$.ha, x:240, y:-100}], "heri2-center":[{$:Y.Ja, aa:$.ha, x:144, y:-100}, {$:Y.Ja, aa:$.ha, x:192, y:-100}, {$:Y.Ja, aa:$.ha, x:240, y:-100}, {$:Y.Ja, aa:$.ha, x:288, y:-100}, {$:Y.Ja, aa:$.ha, x:336, y:-100}], "heri2-right":[{$:Y.Ja, 
aa:$.ha, x:240, y:-100}, {$:Y.Ja, aa:$.ha, x:288, y:-100}, {$:Y.Ja, aa:$.ha, x:336, y:-100}, {$:Y.Ja, aa:$.ha, x:384, y:-100}, {$:Y.Ja, aa:$.ha, x:432, y:-100}], "tankRD-left":[{$:Y.ea, aa:$.sb, x:78, y:-50}, {$:Y.ea, aa:$.sb, x:28, y:-100}, {$:Y.ea, aa:$.sb, x:-22, y:-150}, {$:Y.ea, aa:$.sb, x:-72, y:-200}, {$:Y.ea, aa:$.sb, x:-122, y:-250}], "tankRD-center":[{$:Y.ea, aa:$.sb, x:222, y:-50}, {$:Y.ea, aa:$.sb, x:172, y:-100}, {$:Y.ea, aa:$.sb, x:122, y:-150}, {$:Y.ea, aa:$.sb, x:72, y:-200}, {$:Y.ea, 
aa:$.sb, x:22, y:-250}], "tankL-top":[{$:Y.ea, aa:$.Jc, x:550, y:64}, {$:Y.ea, aa:$.Jc, x:620, y:64}, {$:Y.ea, aa:$.Jc, x:690, y:64}, {$:Y.ea, aa:$.Jc, x:760, y:64}, {$:Y.ea, aa:$.Jc, x:830, y:64}], "tank5-left":[{$:Y.ea, aa:$.ja, x:48, y:-70}, {$:Y.ea, aa:$.ja, x:48, y:-140}, {$:Y.ea, aa:$.ja, x:48, y:-210}, {$:Y.ea, aa:$.ja, x:48, y:-280}, {$:Y.ea, aa:$.ja, x:48, y:-350}], "tank5-center":[{$:Y.ea, aa:$.ja, x:240, y:-70}, {$:Y.ea, aa:$.ja, x:240, y:-140}, {$:Y.ea, aa:$.ja, x:240, y:-210}, {$:Y.ea, 
aa:$.ja, x:240, y:-280}, {$:Y.ea, aa:$.ja, x:240, y:-350}], "tank15-top":[{$:Y.ea, aa:$.ja, x:48, y:-70}, {$:Y.ea, aa:$.ja, x:48, y:-140}, {$:Y.ea, aa:$.ja, x:48, y:-210}, {$:Y.ea, aa:$.ja, x:48, y:-280}, {$:Y.ea, aa:$.ja, x:48, y:-350}, {$:Y.ea, aa:$.ja, x:240, y:-70}, {$:Y.ea, aa:$.ja, x:240, y:-140}, {$:Y.ea, aa:$.ja, x:240, y:-210}, {$:Y.ea, aa:$.ja, x:240, y:-280}, {$:Y.ea, aa:$.ja, x:240, y:-350}, {$:Y.ea, aa:$.ja, x:432, y:-70}, {$:Y.ea, aa:$.ja, x:432, y:-140}, {$:Y.ea, aa:$.ja, x:432, y:-210}, 
{$:Y.ea, aa:$.ja, x:432, y:-280}, {$:Y.ea, aa:$.ja, x:432, y:-350}], "tank25-top":[{$:Y.ea, aa:$.ja, x:48, y:-70}, {$:Y.ea, aa:$.ja, x:48, y:-140}, {$:Y.ea, aa:$.ja, x:48, y:-210}, {$:Y.ea, aa:$.ja, x:48, y:-280}, {$:Y.ea, aa:$.ja, x:48, y:-350}, {$:Y.ea, aa:$.ja, x:240, y:-70}, {$:Y.ea, aa:$.ja, x:240, y:-140}, {$:Y.ea, aa:$.ja, x:240, y:-210}, {$:Y.ea, aa:$.ja, x:240, y:-280}, {$:Y.ea, aa:$.ja, x:240, y:-350}, {$:Y.ea, aa:$.ja, x:432, y:-70}, {$:Y.ea, aa:$.ja, x:432, y:-140}, {$:Y.ea, aa:$.ja, 
x:432, y:-210}, {$:Y.ea, aa:$.ja, x:432, y:-280}, {$:Y.ea, aa:$.ja, x:432, y:-350}, {$:Y.ea, aa:$.tb, x:144, y:710}, {$:Y.ea, aa:$.tb, x:144, y:780}, {$:Y.ea, aa:$.tb, x:144, y:850}, {$:Y.ea, aa:$.tb, x:144, y:920}, {$:Y.ea, aa:$.tb, x:144, y:990}, {$:Y.ea, aa:$.tb, x:336, y:710}, {$:Y.ea, aa:$.tb, x:336, y:780}, {$:Y.ea, aa:$.tb, x:336, y:850}, {$:Y.ea, aa:$.tb, x:336, y:920}, {$:Y.ea, aa:$.tb, x:336, y:990}], "cannon-0":[{$:Y.ua, aa:$.cb, x:48, y:-100}], "cannon-1":[{$:Y.ua, aa:$.cb, x:96, y:-100}], 
"cannon-2":[{$:Y.ua, aa:$.cb, x:144, y:-100}], "cannon-3":[{$:Y.ua, aa:$.cb, x:192, y:-100}], "cannon-4":[{$:Y.ua, aa:$.cb, x:240, y:-100}], "cannon-5":[{$:Y.ua, aa:$.cb, x:288, y:-100}], "cannon-6":[{$:Y.ua, aa:$.cb, x:336, y:-100}], "cannon-7":[{$:Y.ua, aa:$.cb, x:384, y:-100}], "cannon-8":[{$:Y.ua, aa:$.cb, x:432, y:-100}], "cannon-R0":[{$:Y.ua, aa:$.cb, x:550, y:128}], "cannon-R1":[{$:Y.ua, aa:$.cb, x:550, y:192}], "cannon-R2":[{$:Y.ua, aa:$.cb, x:550, y:256}], "yayoi-0":[{$:Y.ua, aa:$.eb, x:48, 
y:-100}], "yayoi-1":[{$:Y.ua, aa:$.eb, x:96, y:-100}], "yayoi-2":[{$:Y.ua, aa:$.eb, x:144, y:-100}], "yayoi-3":[{$:Y.ua, aa:$.eb, x:192, y:-100}], "yayoi-4":[{$:Y.ua, aa:$.eb, x:240, y:-100}], "yayoi-5":[{$:Y.ua, aa:$.eb, x:288, y:-100}], "yayoi-6":[{$:Y.ua, aa:$.eb, x:336, y:-100}], "yayoi-7":[{$:Y.ua, aa:$.eb, x:384, y:-100}], "yayoi-8":[{$:Y.ua, aa:$.eb, x:432, y:-100}], "yayoi-R0":[{$:Y.ua, aa:$.eb, x:550, y:128}], "yayoi-R1":[{$:Y.ua, aa:$.eb, x:550, y:192}], "yayoi-R2":[{$:Y.ua, aa:$.eb, x:550, 
y:256}], "tsubomi-0":[{$:Y.pd, aa:$.hd, x:96, y:-100}], "tsubomi-1":[{$:Y.pd, aa:$.hd, x:240, y:-100}], "tsubomi-2":[{$:Y.pd, aa:$.hd, x:384, y:-100}], "tsubomi-R0":[{$:Y.pd, aa:$.hd, x:580, y:128}], "itsuki-0":[{$:Y.de, aa:$.Yd, x:96, y:-100}], "itsuki-1":[{$:Y.de, aa:$.Yd, x:240, y:-100}], "itsuki-2":[{$:Y.de, aa:$.Yd, x:384, y:-100}], "makoto-0":[{$:Y.qb, aa:$.rb, x:48, y:-100}], "makoto-1":[{$:Y.qb, aa:$.rb, x:96, y:-100}], "makoto-2":[{$:Y.qb, aa:$.rb, x:144, y:-100}], "makoto-3":[{$:Y.qb, aa:$.rb, 
x:192, y:-100}], "makoto-4":[{$:Y.qb, aa:$.rb, x:240, y:-100}], "makoto-5":[{$:Y.qb, aa:$.rb, x:288, y:-100}], "makoto-6":[{$:Y.qb, aa:$.rb, x:336, y:-100}], "makoto-7":[{$:Y.qb, aa:$.rb, x:384, y:-100}], "makoto-8":[{$:Y.qb, aa:$.rb, x:432, y:-100}], "makoto-R0":[{$:Y.qb, aa:$.rb, x:580, y:128}], "fighter-m-0":[{$:Y.bc, aa:$.cc, x:96, y:-192}], "fighter-m-1":[{$:Y.bc, aa:$.cc, x:144, y:-192}], "fighter-m-2":[{$:Y.bc, aa:$.cc, x:192, y:-192}], "fighter-m-3":[{$:Y.bc, aa:$.cc, x:240, y:-192}], "fighter-m-4":[{$:Y.bc, 
aa:$.cc, x:288, y:-192}], "fighter-m-5":[{$:Y.bc, aa:$.cc, x:336, y:-192}], "fighter-m-6":[{$:Y.bc, aa:$.cc, x:384, y:-192}], "komachi-0":[{$:Y.md, aa:$.nf, x:144, y:-192}], "komachi-1":[{$:Y.md, aa:$.nf, x:336, y:-192}], "komachi2-0":[{$:Y.md, aa:$.of, x:144, y:-192}], "komachi2-1":[{$:Y.md, aa:$.of, x:336, y:-192}], yukishiro:[{$:Y.be, aa:$.be, x:240, y:-100}], misumi:[{$:Y.fe, aa:[$.Wg, $.ge, $.he], x:240, y:-100, Ub:j}], mai:[{$:Y.ee, aa:$.ee, x:780, y:128}]};
(function() {
  function b(a, b, c, d) {
    return f.action([d(a), f.repeat(c + "-1", [d(f.speed(b, "sequence"))])])
  }
  function a(a, b, c, d, g, l, q) {
    return f.action([f.fa(f.direction(b, "absolute"), d, g || D, l, q), f.repeat(a + "-1", [f.fa(f.direction("((" + c + ")-(" + b + "))/(" + a + "-1)", "sequence"), d, g || D, l, q)])])
  }
  function c(a, b, c, f, g) {
    return function(l) {
      return d(a, b, c, l, f, g, i, i)
    }
  }
  function d(a, b, c, d, g, l, q, r) {
    return f.action([f.fa(f.direction(b), d, g || D, l, q, r), f.repeat(a + "-1", [f.fa(f.direction("((" + c + ")-(" + b + "))/(" + a + "-1)", "sequence"), d, g || D, l, q, r)])])
  }
  function g(a) {
    return f.fa(f.direction(0), a || v, Q)
  }
  function l(a) {
    return f.fa(f.direction(0), a || v, D)
  }
  function u(a) {
    return f.speed("$rank*2.0 + 2.00 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function w(a) {
    return f.speed("$rank*2.0 + 1.40 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function v(a) {
    return f.speed("$rank*2.0 + 1.10 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function r(a) {
    return f.speed("$rank*2.0 + 0.80 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function z(a) {
    return f.speed("$rank*2.0 + 0.50 + (" + (a === i ? 0 : a) + "*0.1)")
  }
  function q(a) {
    return f.wait(a + "*(1-$rank)*$hyperOff")
  }
  function Z(a) {
    return f.wa(a, {visible:m})
  }
  function I(a) {
    return f.wa(a, {frame:4, Jb:j})
  }
  function D(a) {
    return f.wa(a, {frame:1})
  }
  function S(a) {
    return f.wa(a, {frame:2})
  }
  function Q(a) {
    return f.wa(a, {frame:0})
  }
  function T(a) {
    return f.wa(a, {frame:3, Jb:j})
  }
  function Oa(a) {
    return f.wa(a, {frame:1, Jb:j})
  }
  function ca(a) {
    return f.wa(a, {frame:2, Jb:j})
  }
  function M(a) {
    return f.wa(a, {frame:0, Jb:j})
  }
  C = {};
  var f = p.ra;
  C["basic0-0"] = new p.ma({top:f.action([l])});
  C["basic0-1"] = new p.ma({top:f.action([b(w, -0.01, 8, c(3, -15, 15))])});
  C["basic1-0"] = new p.ma({top:f.action([f.repeat(999, [q(20), l(w)])])});
  C["basic2-0"] = new p.ma({top:f.action([f.repeat(999, [q(50), l(v)])])});
  C["basic3-0"] = new p.ma({top:f.action([f.wait(20), f.repeat(999, [q(100), b(v, 0.1, 3, g)])])});
  C["basic3-1"] = new p.ma({top:f.action([f.wait(20), f.repeat(999, [q(40), b(v, 0.1, 3, g)])])});
  C["cannon2-0"] = new p.ma({top0:f.action([f.repeat(999, [q(20), a(6, "0-10+$loop.index*15", "0+10+$loop.index*15", r), a(6, "90-10+$loop.index*15", "90+10+$loop.index*15", r), a(6, "180-10+$loop.index*15", "180+10+$loop.index*15", r), a(6, "270-10+$loop.index*15", "270+10+$loop.index*15", r), q(20), a(6, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", v, Q), a(6, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", v, Q), a(6, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", v, Q), 
  a(6, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", v, Q)])]), top1:f.action([f.repeat(999, [f.fa(f.direction("  0+$loop.index*5", "absolute"), z, I), f.fa(f.direction(" 90+$loop.index*5", "absolute"), z, I), f.fa(f.direction("180+$loop.index*5", "absolute"), z, I), f.fa(f.direction("270+$loop.index*5", "absolute"), z, I), f.fa(f.direction("  0-$loop.index*5", "absolute"), z, I), f.fa(f.direction(" 90-$loop.index*5", "absolute"), z, I), f.fa(f.direction("180-$loop.index*5", "absolute"), 
  z, I), f.fa(f.direction("270-$loop.index*5", "absolute"), z, I), q(5)])])});
  C["cannon3-0"] = new p.ma({top0:f.action([f.repeat(999, [q(80), b(r, 0.01, 5, c(5, -30, 30, Q, f.offsetX(-60))), b(r, 0.01, 5, c(5, -30, 30, Q)), b(r, 0.01, 5, c(5, -30, 30, Q, f.offsetX(60)))])])});
  C["cannon4-0"] = new p.ma({top0:f.action([q(20), f.repeat(999, [f.fa(r, ca), f.repeat(8, [q(10), f.xd("way", "$loop.count+1"), f.fa(f.direction("-12/2 - 12*($way-2)", "sequence"), r, ca), f.repeat("$way-1", [f.fa(f.direction(12, "sequence"), r, ca)])]), q(120)])])});
  C["kurokawa-1"] = new p.ma({top0:f.action([f.repeat(999, [b(v, -0.01, 4, function(a) {
    return d(4, -45, 45, a, S, f.offsetX(-45), f.Ha(j))
  }), b(v, -0.01, 4, function(a) {
    return d(4, -45, 45, a, S, f.offsetX(45), f.Ha(j))
  }), q(90)])]), top1:f.action([f.repeat(999, [f.fa(f.direction(0), v, T, f.offsetX(-45), f.Ha(j)), q(45), f.fa(f.direction(0), v, T, f.offsetX(45), f.Ha(j)), q(45)])])});
  C["komachi-1"] = new p.ma({top0:f.action([f.repeat(20, [f.fa(f.direction(210, "absolute"), z(1), D, f.offsetX(-40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(-40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(-40)), f.repeat(57, [q(8), f.fa(f.direction(-720 / 57, "sequence"), z(1), D, f.offsetX(-40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(-40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(-40))])])]), top1:f.action([f.repeat(20, [f.fa(f.direction(-210, 
  "absolute"), z(1), D, f.offsetX(40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(40)), f.repeat(57, [q(8), f.fa(f.direction(720 / 57, "sequence"), z(1), D, f.offsetX(40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(40))])])]), top2:f.action([f.repeat(70, [f.fa(f.direction(0), v(0), M, f.offsetX(-110), f.Ha(j)), f.repeat(3, [f.wait(3), f.fa(f.direction(0, 
  "sequence"), v(0), M, f.offsetX(-110), f.Ha(j))]), q(10), f.fa(f.direction(0), v(0), M, f.offsetX(110), f.Ha(j)), f.repeat(3, [f.wait(3), f.fa(f.direction(0, "sequence"), v(0), M, f.offsetX(110), f.Ha(j))]), q(10)])])});
  C["komachi-2"] = new p.ma({top0:f.action([f.repeat(999, [b(v, -0.01, 4, function(a) {
    return f.action([d(4, -45, 45, a, S, f.offsetX(-45), f.Ha(j)), q(4)])
  }), b(v, -0.01, 4, function(a) {
    return f.action([q(4), d(4, -45, 45, a, S, f.offsetX(45), f.Ha(j))])
  }), q(90)])]), top1:f.action([f.repeat(999, [q(45), b(r, 0.01, 22, function(a) {
    return f.action([f.repeat("1 + $rand*6", [f.fa(f.direction("-5+$rand*10"), a, Oa)]), q(1)])
  }), q(180)])])});
  C["honoka-1"] = new p.ma({top0:f.action([f.wait(60), f.repeat(10, [d(4, -40, 40, r, I, f.offsetX(0), f.offsetY(30)), q(30), d(5, -40, 40, z, I, f.offsetX(0), f.offsetY(30)), q(30)])]), top1:f.action([f.wait(60), f.repeat(5, [d(2, -2, 2, r(0.6), D), d(3, -3, 3, r(1), D), d(4, -4, 4, r(1.4), D), d(5, -5, 5, r(1.8), D), q(110)])]), top2:f.action([f.repeat(20, [a(12, -10, -170, z, M, f.offsetX(-110), f.offsetY(-70)), q(30)])]), top3:f.action([f.repeat(20, [a(12, 10, 170, z, M, f.offsetX(110), f.offsetY(-70)), 
  q(30)])])});
  C["nagisa-1-1"] = new p.ma({top0:f.action([q(90), f.repeat(3, [f.xd("way", "5 + $loop.index*6"), b(w, 0.01, "3 + $loop.index*4", function(a) {
    return f.action([d("$way", -110, 110, a, D, f.offsetX(-190), f.offsetY(-20)), d("$way", -110, 110, a, D, f.offsetX(190), f.offsetY(-20)), f.wait(5)])
  }), q(60)]), q(60)])});
  C["nagisa-1-2"] = new p.ma({top0:f.action([f.repeat(12, [d(15, -90, 90, z, D), q(40)])]), top1:f.action([f.repeat(3, [f.repeat(3, [d(5, -65, -55, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, -35, -25, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, -5, 5, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, 25, 35, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, 55, 65, r, M, f.offsetX(-190), f.offsetY(-20)), f.wait(2)]), q(60), f.repeat(3, [d(5, -65, -55, r, M, f.offsetX(190), f.offsetY(-20)), d(5, -35, -25, 
  r, M, f.offsetX(190), f.offsetY(-20)), d(5, -5, 5, r, M, f.offsetX(190), f.offsetY(-20)), d(5, 25, 35, r, M, f.offsetX(190), f.offsetY(-20)), d(5, 55, 65, r, M, f.offsetX(190), f.offsetY(-20)), f.wait(2)]), q(60)])])});
  C["nagisa-1-3"] = new p.ma({top0:f.action([q(60), f.repeat(3, [f.fa(f.direction(-60), r, S, f.offsetX(-190), f.offsetY(-20)), f.repeat(20, [q(15), f.fa(f.direction(6, "sequence"), r, S, f.offsetX(-190), f.offsetY(-20))])])]), top1:f.action([q(80), f.repeat(3, [f.fa(f.direction(60), r, S, f.offsetX(190), f.offsetY(-20)), f.repeat(20, [q(15), f.fa(f.direction(-6, "sequence"), r, S, f.offsetX(190), f.offsetY(-20))])])]), top2:f.action([f.repeat(6, [f.repeat(3, [d(5, -60, -40, r, I, f.offsetX(-190), 
  f.offsetY(-20)), d(5, -20, -10, r, I, f.offsetX(-190), f.offsetY(-20)), d(5, 10, 20, r, I, f.offsetX(-190), f.offsetY(-20)), d(5, 40, 60, r, I, f.offsetX(-190), f.offsetY(-20)), f.wait(4)]), q(60), f.repeat(3, [d(5, -60, -40, r, I, f.offsetX(190), f.offsetY(-20)), d(5, -20, -10, r, I, f.offsetX(190), f.offsetY(-20)), d(5, 10, 20, r, I, f.offsetX(190), f.offsetY(-20)), d(5, 40, 60, r, I, f.offsetX(190), f.offsetY(-20)), f.wait(4)]), q(60)])])});
  C["nagisa-2-1"] = new p.ma({top0:f.action([q(120), f.repeat(36, [a(6, "+$loop.index*10", "+$loop.index*10 + 360", z, Q, f.offsetX(-190), f.offsetY(-20)), a(6, "-$loop.index*10", "-$loop.index*10 + 360", z, Q, f.offsetX(190), f.offsetY(-20)), q(10)])]), top1:f.action([q(120), f.repeat(30, [a(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, T), a(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, T), q(12)])])});
  C["nagisa-2-2"] = new p.ma({top0:f.action([q(120), f.repeat(30, [a(4, "+$loop.index*5", "+$loop.index*5 + 270", v, T), q(12)])]), top1:f.action([q(120), f.repeat(6, [a(9, 150, 130, z(0.8), D), a(9, 172, 188, z(0.8), D), a(9, 210, 230, z(0.8), D), q(30), a(9, 170, 150, z(0.8), D), a(9, 190, 210, z(0.8), D), q(30)])])});
  C["nagisa-2-3"] = new p.ma({top:f.action([q(120), f.repeat(12, [a(23, 0, 360, z, I, f.offsetX(-190), f.offsetY(-20)), a(23, 0, 360, z, I), a(23, 0, 360, z, I, f.offsetX(190), f.offsetY(-20)), q(30)])])});
  C["nagisa-3-1"] = new p.ma({top0:f.action([q(50), f.repeat(999, [b(v, 0.0010, 5, function(a) {
    return f.action([d(41, "-180", "+180", a, ca, f.offsetX(-190), f.offsetY(-20)), d(41, "-180", "+180", a, ca, f.offsetX(190), f.offsetY(-20))])
  }), q(50)])]), top1:f.action([f.repeat(999, [d(2, -2, 0, w, D), q(10), d(2, 0, 2, w, D), q(150)])])});
  C["mai-1"] = new p.ma({top0:f.action([q(50), f.repeat(50, [f.xd("from", "+Math.cos($loop.index*0.15)*40-170"), a(3, "$from", "$from+60", u, Z(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, Q), f.rc]))), f.xd("from", "-Math.cos($loop.index*0.15)*40-10"), a(3, "$from", "$from-60", u, Z(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, Q), f.rc]))), q(8)])]), top1:f.action([q(50), f.repeat(12, [a(5, -50, 50, u, Z(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.rc]))), 
  a(5, -230, -130, u, Z(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.rc]))), q(16), a(6, -50, 50, u, Z(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.rc]))), a(6, -230, -130, u, Z(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.rc]))), q(16)])])});
  C["mai-2"] = new p.ma({top:f.action([q(50), f.repeat(15, [f.fa(f.direction(-10), ca(f.xh("fireChild", "$loop.index*10"))), q(8)])]), fireChild:f.action([q("40+$1"), b(r, 0.1, 5, function(a) {
    return f.fa(f.direction(-90, "absolute"), a, S)
  }), f.rc])});
  C.oa = function() {
    for(var a = 0;2E3 > a;a++) {
      va.push(L())
    }
    a = C.zd = tm.Va.ac.Pc;
    a.Ge = function(a) {
      return!(a instanceof L) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Bf = function(a) {
      var b = va.shift(0);
      if(b) {
        return b.sa = t.qg, ga.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.Jb ? (b.scaleX = 1, b.scaleY = 1, b.Zb = m) : (b.scaleX = 0.8, b.scaleY = 1.5, b.Zb = j), b.visible = a.visible === m ? m : j, b.Jb = !!a.Jb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Ff = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.pc = 4;
    p.va.Oa.$rank = 0;
    p.va.Oa.$hyperOff = 1
  };
  C.erase = function(a, b) {
    for(var c = [].concat(ga), d = 0, f = c.length;d < f;d++) {
      a && sa(!!b).setPosition(c[d].x, c[d].y), c[d].Na()
    }
  };
  C.Nc = function() {
    for(var a = [].concat(ga), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  L = tm.createClass({superClass:tm.app.Sprite, sa:0, Jb:m, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      va.push(this);
      var a = ga.indexOf(this);
      -1 !== a && ga.splice(a, 1)
    })
  }, update:function() {
    this.Jb && (this.rotation += 15)
  }, Na:function() {
    var a = H(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element).setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove()
  }});
  var va = [], ga = L.Ma = []
})();
var P, R, Ha, V, Na;
P = function(b, a, c) {
  return b < a ? a : b > c ? c : b
};
Na = Math.PI / 180;
Ha = function(b) {
  return b * Na
};
V = function(b, a) {
  return window.Math.floor(Math.random() * (a - b + 1)) + b
};
R = function(b, a) {
  return window.Math.random() * (a - b) + b
};

