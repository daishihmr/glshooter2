/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(a) {
  throw a;
}
var i = void 0, j = !0, k = null, m = !1;
function n() {
  return function() {
  }
}
var q = {Fg:this};
(function() {
  function a(b, a) {
    for(var d = 0, g = b.length;d < g;d++) {
      if(b[d].label == a) {
        return b[d]
      }
    }
  }
  q.la = function(b) {
    this.type = "none";
    this.root = this;
    this.Ga = [];
    this.Ad = [];
    this.Hd = [];
    if(b !== i) {
      for(var a in b) {
        b.hasOwnProperty(a) && (b[a].label = a, b[a] instanceof q.bb ? this.Ga.push(b[a]) : b[a] instanceof q.Pb ? this.Ad.push(b[a]) : b[a] instanceof q.uc && this.Hd.push(b[a]))
      }
      b = 0;
      for(a = this.Ga.length;b < a;b++) {
        this.Ga[b].hb(this)
      }
      b = 0;
      for(a = this.Ad.length;b < a;b++) {
        this.Ad[b].hb(this)
      }
      b = 0;
      for(a = this.Hd.length;b < a;b++) {
        this.Hd[b].hb(this)
      }
    }
  };
  q.la.prototype.Pf = function(b) {
    return a(this.Ga, b)
  };
  q.la.prototype.bi = function() {
    for(var b = [], a = 0, d = this.Ga.length;a < d;a++) {
      var g = this.Ga[a];
      g.label && 0 === g.label.indexOf("top") && (b[b.length] = g.label)
    }
    return b
  };
  q.la.prototype.Th = function(b) {
    var a;
    if(a = this.Pf(b)) {
      return a
    }
    h(Error("action labeled '" + b + "' is undefined."))
  };
  q.la.prototype.Uh = function(b) {
    return a(this.Ad, b)
  };
  q.la.prototype.Vh = function(b) {
    var a;
    if(a = this.Uh(b)) {
      return a
    }
    h(Error("bullet labeled '" + b + "' is undefined."))
  };
  q.la.prototype.Wh = function(b) {
    return a(this.Hd, b)
  };
  q.la.prototype.Xh = function(b) {
    var a;
    if(a = this.Wh(b)) {
      return a
    }
    h(Error("fire labeled '" + b + "' is undefined."))
  };
  q.Pb = function() {
    this.root = this.label = k;
    this.direction = new q.Hb(0);
    this.speed = new q.Ib(1);
    this.Ga = [];
    this.Pa = {};
    this.ma = {}
  };
  q.Pb.prototype.clone = function(b) {
    var a = new q.Pb;
    a.label = this.label;
    a.root = this.root;
    a.Ga = this.Ga;
    a.direction = new q.Hb(b.La(this.direction.value));
    a.direction.type = this.direction.type;
    a.speed = new q.Ib(b.La(this.speed.value));
    a.speed.type = this.speed.type;
    a.Pa = this.Pa;
    a.ma = b.ma;
    return a
  };
  q.Pb.prototype.hb = function(b) {
    this.root = b;
    for(var a = 0, d = this.Ga.length;a < d;a++) {
      this.Ga[a].hb(b)
    }
  };
  q.jd = function(b) {
    this.root = k;
    this.label = b;
    this.Da = []
  };
  q.jd.prototype.clone = function(b) {
    var a = b.ma;
    b.ma = b.pe(this.Da);
    var d = this.root.Vh(this.label).clone(b);
    b.ma = a;
    return d
  };
  q.jd.prototype.hb = function(b) {
    this.root = b
  };
  q.Fa = function() {
    this.Wa = ""
  };
  q.Fa.prototype.hb = function(b) {
    this.root = b
  };
  q.bb = function() {
    this.Wa = "action";
    this.root = this.label = k;
    this.ob = [];
    this.Da = []
  };
  q.bb.prototype = new q.Fa;
  q.bb.prototype.hb = function(b) {
    this.root = b;
    for(var a = 0, d = this.ob.length;a < d;a++) {
      this.ob[a].hb(b)
    }
  };
  q.bb.prototype.clone = function() {
    var b = new q.bb;
    b.label = this.label;
    b.root = this.root;
    b.ob = this.ob;
    return b
  };
  q.tc = function(b) {
    this.Wa = "actionRef";
    this.label = b;
    this.root = k;
    this.Da = []
  };
  q.tc.prototype = new q.Fa;
  q.tc.prototype.clone = function() {
    var b = new q.bb;
    b.root = this.root;
    b.ob.push(this);
    return b
  };
  q.uc = function() {
    this.Wa = "fire";
    this.wa = this.speed = this.direction = this.root = this.label = k;
    this.Pa = new q.ae
  };
  q.uc.prototype = new q.Fa;
  q.uc.prototype.hb = function(b) {
    this.root = b;
    this.wa && this.wa.hb(b)
  };
  q.be = function(b) {
    this.Wa = "fireRef";
    this.label = b;
    this.Da = []
  };
  q.be.prototype = new q.Fa;
  q.ld = function() {
    this.Wa = "changeDirection";
    this.direction = new q.Hb;
    this.Sa = 0
  };
  q.ld.prototype = new q.Fa;
  q.md = function() {
    this.Wa = "changeSpeed";
    this.speed = new q.Ib;
    this.Sa = 0
  };
  q.md.prototype = new q.Fa;
  q.hd = function() {
    this.Wa = "accel";
    this.Db = new q.ee;
    this.Gb = new q.ne;
    this.Sa = 0
  };
  q.hd.prototype = new q.Fa;
  q.sd = function(b) {
    this.Wa = "wait";
    this.value = b || 0
  };
  q.sd.prototype = new q.Fa;
  q.me = function() {
    this.Wa = "vanish"
  };
  q.me.prototype = new q.Fa;
  q.qd = function() {
    this.Wa = "repeat";
    this.og = 0;
    this.action = k;
    this.Da = []
  };
  q.qd.prototype = new q.Fa;
  q.qd.prototype.hb = function(b) {
    this.root = b;
    this.action && this.action.hb(b)
  };
  q.Zd = function(b, a) {
    this.Wa = "bind";
    this.Ji = b;
    this.Rh = a
  };
  q.Zd.prototype = new q.Fa;
  q.ke = function(b, a) {
    this.Wa = "notify";
    this.Nh = b;
    this.Da = a || k
  };
  q.ke.prototype = new q.Fa;
  q.Cg = new q.Fa;
  q.Hb = function(b) {
    this.type = "aim";
    this.value = b || 0
  };
  q.Ib = function(b) {
    this.type = "absolute";
    this.value = b === i ? 1 : b
  };
  q.ee = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  q.ne = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  q.ae = function(b) {
    b = b || {};
    this.offsetX = b.offsetX || 0;
    this.offsetY = b.offsetY || 0;
    this.Ha = j;
    b.Ha !== i && (this.Ha = !!b.Ha)
  };
  q.rf = function(b) {
    this.value = b || 0
  };
  q.sf = function(b) {
    this.value = b || 0
  };
  q.hf = function(b) {
    this.value = !!b
  }
})();
q.va = function(a) {
  this.xf = a;
  this.td = [];
  this.Sb = -1;
  this.Ka = k;
  this.ma = {}
};
q.va.prototype.next = function() {
  this.Sb += 1;
  if(this.Ka !== k) {
    var a = this.Ka.ob[this.Sb];
    if(a !== i) {
      if(a instanceof q.bb) {
        return this.Lc(), this.Ka = a, this.ma = this.oe(), this.next()
      }
      if(a instanceof q.tc) {
        return this.Lc(), this.Ka = this.xf.Th(a.label), this.ma = this.pe(a.Da), this.next()
      }
      if(a instanceof q.qd) {
        return this.ma.Ec = 0, this.ma.ag = this.La(a.og) | 0, this.Lc(), this.Ka = a.action.clone(), this.ma = this.oe(), this.next()
      }
      if(a instanceof q.uc) {
        var b = new q.uc;
        b.wa = a.wa.clone(this);
        a.direction !== k && (b.direction = new q.Hb(this.La(a.direction.value)), b.direction.type = a.direction.type);
        a.speed !== k && (b.speed = new q.Ib(this.La(a.speed.value)), b.speed.type = a.speed.type);
        b.Pa = a.Pa;
        return b
      }
      return a instanceof q.be ? (this.Lc(), this.Ka = new q.bb, this.Ka.ob = [this.xf.Xh(a.label)], this.ma = this.pe(a.Da), this.next()) : a instanceof q.ld ? (b = new q.ld, b.direction.type = a.direction.type, b.direction.value = this.La(a.direction.value), b.Sa = this.La(a.Sa), b) : a instanceof q.md ? (b = new q.md, b.speed.type = a.speed.type, b.speed.value = this.La(a.speed.value), b.Sa = this.La(a.Sa), b) : a instanceof q.hd ? (b = new q.hd, b.Db.type = a.Db.type, b.Db.value = this.La(a.Db.value), 
      b.Gb.type = a.Gb.type, b.Gb.value = this.La(a.Gb.value), b.Sa = this.La(a.Sa), b) : a instanceof q.sd ? new q.sd(this.La(a.value)) : a instanceof q.me ? a : a instanceof q.Zd ? (this.ma["$" + a.Ji] = this.La(a.Rh), q.Cg) : a instanceof q.ke ? a : k
    }
    this.Ah();
    if(this.Ka === k) {
      return k
    }
    if((a = this.Ka.ob[this.Sb]) && "repeat" == a.Wa) {
      this.ma.Ec++, this.ma.Ec < this.ma.ag && (this.Lc(), this.Ka = a.action.clone(), this.ma = this.oe())
    }
    return this.next()
  }
  return k
};
q.va.prototype.Lc = function() {
  this.td.push({action:this.Ka, cursor:this.Sb, scope:this.ma});
  this.Sb = -1
};
q.va.prototype.Ah = function() {
  var a = this.td.pop();
  a ? (this.Sb = a.cursor, this.Ka = a.action, this.ma = a.scope) : (this.Sb = -1, this.Ka = k, this.ma = {})
};
q.va.prototype.La = function(a) {
  var b;
  if("number" === typeof a) {
    return a
  }
  if(isNaN(b = Number(a))) {
    if((b = this.ma[a]) || (b = q.va.Oa[a])) {
      return b
    }
    if("$rand" === a) {
      return Math.random()
    }
  }else {
    return b
  }
  b = {};
  for(var c in q.va.Oa) {
    q.va.Oa.hasOwnProperty(c) && (b[c] = q.va.Oa[c])
  }
  for(c in this.ma) {
    this.ma.hasOwnProperty(c) && (b[c] = this.ma[c])
  }
  b.$rand = Math.random();
  (c = this.td[this.td.length - 1]) && (b.$loop = {index:c.scope.Ec, count:c.scope.Ec + 1, first:0 === c.scope.Ec, last:c.scope.Ec + 1 >= c.scope.ag});
  return(new Function("return " + a.split("$").join("this.$"))).apply(b)
};
q.va.prototype.pe = function(a) {
  var b = {};
  if(a) {
    for(var c = 0, d = a.length;c < d;c++) {
      b["$" + (c + 1)] = this.La(a[c])
    }
  }else {
    for(c in this.ma) {
      this.ma.hasOwnProperty(c) && (b[c] = this.ma[c])
    }
  }
  return b
};
q.va.prototype.oe = function() {
  var a = {}, b;
  for(b in this.ma) {
    this.ma.hasOwnProperty(b) && (a[b] = this.ma[b])
  }
  return a
};
q.la.prototype.Ce = function(a) {
  var b = new q.va(this);
  if(a = this.Pf(a)) {
    b.Ka = a
  }
  return b
};
q.Pb.prototype.Ce = function() {
  var a = new q.va(this.root), b = new q.bb;
  b.root = this.root;
  b.ob = this.Ga;
  a.Ka = b;
  a.ma = this.ma;
  return a
};
q.va.Oa = {};
q.qa = function(a) {
  a = a || "";
  for(var b in q.qa) {
    q.qa.hasOwnProperty(b) && (q.Fg[a + b] = q.qa[b])
  }
};
q.qa.action = function(a) {
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
  var d = new q.bb;
  if(a instanceof Array) {
    a.some(function(b) {
      return!(b instanceof q.Fa)
    }) && h(Error("argument type error.")), d.ob = a
  }else {
    b = 0;
    for(c = arguments.length;b < c;b++) {
      arguments[b] instanceof q.Fa ? d.ob[b] = arguments[b] : h(Error("argument type error."))
    }
  }
  return d
};
q.qa.se = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  d = new q.tc(a);
  if(b instanceof Array) {
    d.Da = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.Da.push(arguments[c])
    }
  }
  return d
};
q.qa.wa = function(a, b, c, d) {
  for(var g = 0, l = arguments.length;g < l;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  l = new q.Pb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Hb ? l.direction = arguments[g] : arguments[g] instanceof q.Ib ? l.speed = arguments[g] : arguments[g] instanceof q.bb ? l.Ga.push(arguments[g]) : arguments[g] instanceof q.tc ? l.Ga.push(arguments[g]) : arguments[g] instanceof Array ? l.Ga.push(q.qa.action(arguments[g])) : arguments[g] instanceof Object ? l.Pa = arguments[g] : "string" === typeof arguments[g] && (l.label = arguments[g])
  }
  return l
};
q.qa.Pi = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  d = new q.jd(a);
  if(b instanceof Array) {
    d.Da = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.Da.push(arguments[c])
    }
  }
  return d
};
q.qa.fa = function(a, b, c, d) {
  for(var g = 0, l = arguments.length;g < l;g++) {
    arguments[g] instanceof Function && (arguments[g] = arguments[g]())
  }
  l = new q.uc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Hb ? l.direction = arguments[g] : arguments[g] instanceof q.Ib ? l.speed = arguments[g] : arguments[g] instanceof q.Pb ? l.wa = arguments[g] : arguments[g] instanceof q.jd ? l.wa = arguments[g] : arguments[g] instanceof q.ae ? l.Pa = arguments[g] : arguments[g] instanceof q.rf ? l.Pa.offsetX = arguments[g].value : arguments[g] instanceof q.sf ? l.Pa.offsetY = arguments[g].value : arguments[g] instanceof q.hf && (l.Pa.Ha = arguments[g].value)
  }
  l.wa === i && h(Error("bullet (or bulletRef) is required."));
  return l
};
q.qa.Ti = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  d = new q.be(a);
  if(b instanceof Array) {
    d.Da = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.Da.push(arguments[c])
    }
  }
  return d
};
q.qa.Qi = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("direction is required."));
  b === i && h(Error("term is required."));
  c = new q.ld;
  c.direction = a instanceof q.Hb ? a : new q.Hb(a);
  c.Sa = b;
  return c
};
q.qa.Gh = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("speed is required."));
  b === i && h(Error("term is required."));
  c = new q.md;
  c.speed = a instanceof q.Ib ? a : new q.Ib(a);
  c.Sa = b;
  return c
};
q.qa.Oi = function(a, b, c) {
  for(var d = 0, g = arguments.length;d < g;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  g = new q.hd;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof q.ee ? g.Db = a : arguments[d] instanceof q.ne ? g.Gb = b : g.Sa = arguments[d]
  }
  g.Db === i && g.Gb === i && h(Error("horizontal or vertical is required."));
  g.Sa === i && h(Error("term is required."));
  return g
};
q.qa.wait = function(a) {
  for(var b = 0, c = arguments.length;b < c;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && h(Error("value is required."));
  return new q.sd(a)
};
q.qa.ac = function() {
  return new q.me
};
q.qa.repeat = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("times is required."));
  b === i && h(Error("action is required."));
  d = new q.qd;
  d.og = a;
  if(b instanceof q.bb || b instanceof q.tc) {
    d.action = b
  }else {
    if(b instanceof Array) {
      d.action = q.qa.action(b)
    }else {
      for(var g = [], c = 1;c < arguments.length;c++) {
        g.push(arguments[c])
      }
      d.action = q.qa.action(g)
    }
  }
  return d
};
q.qa.zd = function(a, b) {
  return new q.Zd(a, b)
};
q.qa.bj = function(a, b) {
  return new q.ke(a, b)
};
q.qa.direction = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.Hb(a);
  b !== i && (c.type = b);
  return c
};
q.qa.speed = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.Ib(a);
  b && (c.type = b);
  return c
};
q.qa.Db = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.ee(a);
  b && (c.type = b);
  return c
};
q.qa.Gb = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.ne(a);
  b && (c.type = b);
  return c
};
q.qa.Si = function(a) {
  return new q.ae(a)
};
q.qa.offsetX = function(a) {
  return new q.rf(a)
};
q.qa.offsetY = function(a) {
  return new q.sf(a)
};
q.qa.Ha = function(a) {
  return new q.hf(a)
};
tm.Va = tm.Va || {};
(function() {
  function a(b) {
    for(;b <= -Math.PI;) {
      b += 2 * Math.PI
    }
    for(;Math.PI < b;) {
      b -= 2 * Math.PI
    }
    return b
  }
  function b(b, a) {
    return Math.atan2(a.y - b.y, a.x - b.x)
  }
  tm.Va.cc = tm.createClass({init:function(b) {
    b || h(Error("argument is invalid.", b));
    this.uf = b
  }, Cd:function(b, a) {
    var c = this.uf.bi();
    if(a === i && 0 < c.length) {
      for(var d = [], v = 0, r = c.length;v < r;v++) {
        d[d.length] = this.vf(b, c[v])
      }
      for(var z = function() {
        for(var b = d.length;b--;) {
          d[b].call(this)
        }
        z.ye == d.length && (z.Pc = j, this.dispatchEvent(tm.event.Event("completeattack")))
      }, v = d.length;v--;) {
        d[v].Rd = z
      }
      z.ye = 0;
      z.Ff = function() {
        this.ye++
      };
      z.ye = 0;
      z.Pc = m;
      z.Ge = j;
      return z
    }
    return this.vf(b, a)
  }, vf:function(b, a) {
    function c() {
      c.ia += 1;
      this.ia = c.ia;
      var b = c.Bd, a = c.zh;
      if(a) {
        if(c.ia < c.we ? c.direction += c.zc : c.ia === c.we && (c.direction = c.Wb), c.ia < c.xe ? c.speed += c.fd : c.ia === c.xe && (c.speed = c.Ic), c.ia < c.re ? (c.qc += c.wd, c.sc += c.xd) : c.ia === c.re && (c.qc = c.ud, c.sc = c.vd), this.x += Math.cos(c.direction) * c.speed * b.rc, this.y += Math.sin(c.direction) * c.speed * b.rc, this.x += c.qc * b.rc, this.y += c.sc * b.rc, b.He(this)) {
          if(b.$b || this.$b) {
            this.rotation = (c.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = c.speed
          }
          if(!(c.ia < c.pg || c.Pc)) {
            for(var d;d = c.qg.next();) {
              switch(d.Wa) {
                case "fire":
                  a.wh.call(this, d, b, c, a);
                  break;
                case "wait":
                  b = 0;
                  c.pg = "number" === typeof d.value ? c.ia + d.value : 0 !== (b = ~~d.value) ? c.ia + b : c.ia + eval(d.value);
                  return;
                case "changeDirection":
                  a.rh.call(this, d, b, c);
                  break;
                case "changeSpeed":
                  a.sh.call(this, d, c);
                  break;
                case "accel":
                  a.ph.call(this, d, c);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  a.xh.call(this, d)
              }
            }
            c.Pc = j;
            c.Rd ? c.Rd.Ff() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), c.Pc = j, c.Rd ? c.Rd.Ff() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    b = function(b) {
      var a = {}, c = tm.Va.cc.Qc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (a[d] = c[d])
      }
      for(d in b) {
        b.hasOwnProperty(d) && (a[d] = b[d])
      }
      return a
    }(b);
    b.target || h(Error("target is undefined in config."));
    a = a || "top";
    "string" === typeof a ? c.qg = this.uf.Ce(a) : a instanceof q.Pb ? c.qg = a.Ce() : (window.console.error(b, a), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    c.zh = this;
    c.Bd = b;
    c.pg = -1;
    c.Pc = m;
    c.direction = 0;
    c.Xf = 0;
    c.speed = 0;
    c.Zf = 0;
    c.qc = 0;
    c.sc = 0;
    c.zc = 0;
    c.Wb = 0;
    c.we = -1;
    c.fd = 0;
    c.Ic = 0;
    c.xe = -1;
    c.wd = 0;
    c.ud = 0;
    c.xd = 0;
    c.vd = 0;
    c.re = -1;
    c.ia = -1;
    c.Ge = j;
    return c
  }, vh:function(b) {
    function a() {
      this.x += a.Jf;
      this.y += a.Kf;
      a.Bd.He(this) || this.remove()
    }
    b = function(b) {
      var a = {}, c = tm.Va.cc.Qc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (a[d] = c[d])
      }
      for(d in b) {
        b.hasOwnProperty(d) && (a[d] = b[d])
      }
      return a
    }(b);
    b.target || h(Error("target is undefined in config."));
    a.Bd = b;
    a.direction = 0;
    a.speed = 0;
    a.Jf = 0;
    a.Kf = 0;
    a.Ge = j;
    return a
  }, wh:function(a, c, d, w) {
    if(this.ui === i || this.mc) {
      var v = {label:a.wa.label}, r;
      for(r in a.wa.Pa) {
        v[r] = a.wa.Pa[r]
      }
      if(v = c.Ef(v)) {
        w = (r = 0 === a.wa.Ga.length) ? w.vh(c) : w.Cd(c, a.wa);
        var z = this, p = {x:this.x + a.Pa.offsetX, y:this.y + a.Pa.offsetY};
        d.Xf = w.direction = function(r) {
          var v = eval(r.value) * Math.DEG_TO_RAD;
          switch(r.type) {
            case "aim":
              return c.target ? a.Pa.Ha ? b(p, c.target) + v : b(z, c.target) + v : v - Math.PI / 2;
            case "absolute":
              return v - Math.PI / 2;
            case "relative":
              return d.direction + v;
            default:
              return d.Xf + v
          }
        }(a.direction || a.wa.direction);
        d.Zf = w.speed = function(b) {
          var a = eval(b.value);
          switch(b.type) {
            case "relative":
              return d.speed + a;
            case "sequence":
              return d.Zf + a;
            default:
              return a
          }
        }(a.speed || a.wa.speed);
        v.x = p.x;
        v.y = p.y;
        r && (w.Jf = Math.cos(w.direction) * w.speed * c.rc, w.Kf = Math.sin(w.direction) * w.speed * c.rc);
        v.$b = !!v.$b;
        if(c.$b || v.$b) {
          v.rotation = (w.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, v.speed = w.speed
        }
        v.addEventListener("enterframe", w);
        c.zf ? c.zf.addChild(v) : this.parent && this.parent.addChild(v)
      }
    }
  }, rh:function(c, d, t) {
    var w = eval(c.direction.value) * Math.DEG_TO_RAD, v = eval(c.Sa);
    switch(c.direction.type) {
      case "aim":
        c = d.target;
        if(!c) {
          return
        }
        t.Wb = b(this, c) + w;
        t.zc = a(t.Wb - t.direction) / v;
        break;
      case "absolute":
        t.Wb = w - Math.PI / 2;
        t.zc = a(t.Wb - t.direction) / v;
        break;
      case "relative":
        t.Wb = t.direction + w;
        t.zc = a(t.Wb - t.direction) / v;
        break;
      case "sequence":
        t.zc = w, t.Wb = t.direction + t.zc * (v - 1)
    }
    t.we = t.ia + v
  }, sh:function(b, a) {
    var c = eval(b.speed.value), d = eval(b.Sa);
    switch(b.speed.type) {
      case "absolute":
        a.Ic = c;
        a.fd = (a.Ic - a.speed) / d;
        break;
      case "relative":
        a.Ic = c + a.speed;
        a.fd = (a.Ic - a.speed) / d;
        break;
      case "sequence":
        a.fd = c, a.Ic = a.speed + a.fd * d
    }
    a.xe = a.ia + d
  }, ph:function(b, a) {
    var c = eval(b.Sa);
    a.re = a.ia + c;
    if(b.Db) {
      var d = eval(b.Db.value);
      switch(b.Db.type) {
        case "absolute":
        ;
        case "sequence":
          a.wd = (d - a.qc) / c;
          a.ud = d;
          break;
        case "relative":
          a.wd = d, a.ud = (d - a.qc) * c
      }
    }else {
      a.wd = 0, a.ud = a.qc
    }
    if(b.Gb) {
      switch(d = eval(b.Gb.value), b.Gb.type) {
        case "absolute":
        ;
        case "sequence":
          a.xd = (d - a.sc) / c;
          a.vd = d;
          break;
        case "relative":
          a.xd = d, a.vd = (d - a.sc) * c
      }
    }else {
      a.xd = 0, a.vd = a.sc
    }
  }, xh:function(a) {
    var b = tm.event.Event(a.Nh);
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
  tm.Va.Kh = function(a) {
    var b = tm.app.Sprite(c, 8, 8);
    b.label = a.label;
    return b
  };
  var d = k;
  tm.Va.If = function(a) {
    if(d === k) {
      if(!a.getRoot().app) {
        return j
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Va.Ri = function() {
    return j
  };
  tm.Va.cc.Qc = {Ef:tm.Va.Kh, He:tm.Va.If, dj:0, $b:m, rc:2, target:k};
  q.la.prototype.Cd = function(a) {
    return tm.Va.cc(this).Cd(a)
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
var s = k, u, A, B, C, E, F, ba, da, ea, fa, ha, ia, ja, G, H, J, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, wa, xa, ya, za, Aa, Ba, K, Ca, Da, L, N, Ea, Fa, O, aa = tm.createClass({superClass:tm.app.CanvasApp, Ld:0, Xi:0, Mc:3, pc:3, Lf:1, ca:k, init:function(a) {
  s !== k && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = u.Eg;
  this.background = "rgba(0,0,0,0)";
  this.df = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", 
  "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", 
  "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.yh();
    return A()
  }.bind(this)}))
}, update:function() {
  for(var a = [].concat(this.df), b = 0;b < a.length;b++) {
    a[b].frame === this.frame ? a[b].fn() : this.df.erase(a[b])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, yh:function() {
  B.na(12345);
  C.na();
  E.na();
  this.ca = F()
}, Ph:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Ld, "")
}, df:k, setTimeoutF:function(a, b) {
  timeoutTasks.push({frame:this.frame + b, fn:a})
}});
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Ga(a, b) {
  return(a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
;u = {Eg:60, Zg:0, kf:[1E9, 1E10], ah:3E3, mf:3, lf:[3, 2, 1], tg:[6, 4, 2], tf:1, Yg:0.1, nf:1, $g:0.25, Ki:1, Li:0.25, sg:2, Qg:0.0050, Mg:0.01, Ng:0.0010, Ig:0.015, Jg:0.0020, Sg:0.0010, Ug:0.01, Rg:0, Pg:0, Og:0, Lg:0.03, Kg:0.0040, Tg:0, Vg:0, Wg:0.75, ce:10, nd:800, Hg:0.25, Gg:0.1, Xg:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], yg:0.02, zg:0.5, xg:0.01, jf:1E3, wg:10, ug:1, oh:1E3, nh:100, mh:0, lh:0, kh:1E3, jh:100, Dg:0.5, Ag:22500, vg:50, dh:10, gf:m, rg:j, hh:1E3, ih:2E3, eh:4E3, fh:1E4, 
gh:2E7};
(function() {
  var a = k, b = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  ba = tm.createClass({superClass:tm.app.Sprite, type:0, style:0, $a:0, Lb:j, Fc:m, ca:k, speed:0, Ya:k, yc:k, cg:k, Md:k, Ob:k, De:k, Kb:k, Ee:k, Fe:k, frame:0, init:function(b, d, g) {
    this.superInit("fighter", 64, 64);
    this.ca = b;
    this.type = d;
    this.style = g;
    tm.Va.cc.Qc.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.yc = this.cg = da(d, 100);
    this.Md = da(3, 100);
    this.Ob = ea(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Ob.visible = m;
    this.uh();
    this.Ya = this.th();
    1 === this.style && (this.Ya = [this.Ya[1], this.Ya[2]]);
    this.Kb = tm.app.CanvasElement().addChildTo(this);
    d = 0;
    for(g = this.Ya.length;d < g;d++) {
      var l = this.Ya[d];
      fa(this, l).setPosition(l.x, l.y).addChildTo(this.Kb)
    }
    this.ji = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.ji.blendMode = "lighter";
    this.Ee = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Ee.blendMode = "lighter";
    this.Ee.update = function() {
      this.rotation += 2;
      this.visible = 0 < b.xa && !b.sa
    };
    this.Fe = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Fe.blendMode = "lighter";
    this.Fe.update = function() {
      this.rotation -= 2;
      this.visible = 0 < b.xa && !b.sa
    };
    this.Vc = tm.app.CanvasElement(80, 80).addChildTo(this);
    this.Vc.blendMode = "lighter";
    this.Vc.rotation = -90;
    this.Vc.strokeStyle = "rgba(180,180,255,0.4)";
    this.Vc.update = function() {
      this.visible = b.sa
    };
    this.Vc.draw = function(a) {
      a.lineCap = "round";
      var d = b.Cc / u.nd;
      a.strokeStyle = "rgba(50,50,255,0.4)";
      a.lineWidth = "12";
      a.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, m);
      a.strokeStyle = "rgba(100,100,255,0.4)";
      a.lineWidth = "8";
      a.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, m);
      a.strokeStyle = "rgba(180,180,255,0.4)";
      a.lineWidth = "4";
      a.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, m)
    };
    this.di = tm.app.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.di.update = function() {
      this.visible = b.sa
    };
    a === k && (a = ha(this.ca.ka))
  }, th:function() {
    if(0 === this.type) {
      return[{x:0, lc:0, y:40, d:0, ib:j, fb:-0.7, v:j}, {x:0, lc:0, y:40, d:0, ib:j, fb:0.5, v:j}, {x:0, lc:0, y:40, d:0, ib:j, fb:-0.5, v:j}, {x:0, lc:0, y:40, d:0, ib:j, fb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, ib:m, fb:-0.7, v:j}, {x:-40, y:40, d:0.1, ib:m, fb:-0.5, v:j}, {x:40, y:40, d:0.1, ib:j, fb:0.5, v:j}, {x:70, y:20, d:0.1, ib:j, fb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, ib:m, fb:-0.7, v:j}, {x:-30, y:20, d:0.4, ib:m, fb:-0.5, v:j}, {x:30, y:20, d:0.4, ib:j, fb:0.5, v:j}, {x:60, y:40, d:0.6, ib:j, fb:0.7, v:j}]
    }
  }, uh:function() {
    this.De = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.De.setFrameIndex(5);
    this.De.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, Zb:-1, Ac:m, pb:m, update:function(c) {
    this.visible = this.Fc ? 0 === c.frame / 2 % 2 : j;
    var d = c.keyboard;
    if(this.Lb) {
      var g = d.getKeyAngle();
      g !== k && (g = b[g], this.x += g.x * this.speed * (this.pb ? 0.75 : 1), this.y += g.y * this.speed * (this.pb ? 0.75 : 1));
      this.x = P(this.x, 15, 465);
      this.y = P(this.y, 15, 625);
      var l = d.getKey("c"), g = d.getKey("z");
      this.Zb = l ? this.Zb + 1 : this.Zb - 1;
      this.Zb = P(this.Zb, -1, 10);
      this.pb = g && l || 10 === this.Zb;
      l = this.ca.sa ? 3 : 5;
      this.Ac = !this.pb && (0 <= this.Zb || g) && 0 === c.frame % l;
      g && (this.Zb = 0);
      this.Ob.x = this.x;
      this.Ob.y = this.y - 40;
      d.getKeyDown("x") && (0 < this.ca.xa && !this.ca.sa ? (this.ca.Fi(), ia(this).addChildTo(this.ca)) : !this.ca.Dc && 0 < this.ca.vb && (this.Xa = P(this.Xa - 2, 0, 1), q.va.Oa.$rank = P(q.va.Oa.$rank - 0.02, 0, 1), ja(this, this.ca).setPosition(P(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.pb = this.Ac = m
    }
    this.Ac && (g = Math.sin(0.2 * c.frame), l = this.yc.fa(this.x - 7 - 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca), l = this.yc.fa(this.x + 7 + 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca));
    if(this.pb) {
      g = 0;
      for(l = this.Ya.length;g < l;g++) {
        this.Ya[g].v = m
      }
      this.Kb.rotation = 0
    }else {
      this.Ob.visible = m;
      g = 0;
      for(l = this.Ya.length;g < l;g++) {
        this.Ya[g].v = j
      }
    }
    this.Jh(d);
    this.qh(d, c.frame);
    0 === c.frame % 2 && (a.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), a.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = c.frame
  }, Mb:function() {
    this.pb = this.Ac = m;
    this.ca.Ed();
    this.ca.Ia = 0;
    this.ca.Ca = 0;
    this.ca.ya = 0
  }, Jh:function(a) {
    if(0 === this.type) {
      for(a = this.Ya.length;this.Ya[--a] !== i;) {
        var b = this.Ya[a];
        0 === a ? b.x = b.lc + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.lc + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.lc + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.lc + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Kb, b.rotation = this.Lb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Lb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, qh:function(a, b) {
    this.Lb && a.getKey("left") ? this.$a = P(this.$a - 0.2, -3, 3) : this.Lb && a.getKey("right") ? this.$a = P(this.$a + 0.2, -3, 3) : 0 > this.$a ? this.$a = P(this.$a + 0.2, -3, 3) : 0 < this.$a && (this.$a = P(this.$a - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.$a) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.$a) : 2 === this.type && this.setFrameIndex(31 + ~~this.$a);
    return b
  }});
  fa = tm.createClass({superClass:tm.app.AnimationSprite, kc:k, da:k, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.kc = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.ib ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.kc.v) {
      this.x = this.kc.x * (this.da.ca.sa ? 1.5 : 1);
      this.y = this.kc.y * (this.da.ca.sa ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.kc.d * this.kc.fb);
      var d = this.parent.localToGlobal(this);
      this.kc.v && 0 === b.frame % 2 && a.clone(40).setPosition(d.x, d.y).addChildTo(b.ca);
      this.da.Ac && (d = this.da.yc.fa(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== k && d.addChildTo(b.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = k;
  G = tm.createClass({superClass:tm.app.Sprite, speed:0, ic:0, Eh:1, Uf:0, Za:j, init:function(b) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.ic = u.tf;
    a === k && (a = H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    b !== i && this.ed(b)
  }, update:function() {
    this.x += this.ff;
    this.y += this.gd;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, ed:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Jd:function(b) {
    for(var d = 0;d < b;d++) {
      var g = a.clone().setPosition(this.x, this.y).addChildTo(this.parent), l = R(2, 8), t = 2 * Math.random() * Math.PI;
      g.oa = Math.cos(t) * l;
      g.pa = Math.sin(t) * l;
      g.scaleX = g.scaleY = (R(0.1, 0.5) + R(0.1, 0.5)) / 2;
      g.addEventListener("enterframe", function() {
        this.x += this.oa;
        this.y += this.pa;
        this.oa *= 0.9;
        this.pa *= 0.9
      })
    }
  }});
  G.Oc = function() {
    for(var a = [].concat(b), d = 0, g = a.length;d < g;d++) {
      a[d].remove()
    }
  };
  var b = G.Ma = [];
  da = tm.createClass({Yb:k, Tf:m, init:function(a, d) {
    this.Tf = 3 === a;
    this.Yb = [];
    for(var g = 0;g < d;g++) {
      var l = G(a), t = this;
      l.addEventListener("added", function() {
        this.ra = u.dh;
        b.push(this)
      });
      l.addEventListener("removed", function() {
        var a = b.indexOf(this);
        -1 !== a && b.splice(a, 1);
        t.Yb.push(this)
      });
      this.Tf && l.addEventListener("enterframe", function(a) {
        this.setScale((this.Eh + this.Uf) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Yb.push(l)
    }
  }, fa:function(a, b, g) {
    var l = this.Yb.pop();
    if(l === i) {
      return k
    }
    var t = Ha(g);
    l.ff = Math.cos(t) * l.speed;
    l.gd = Math.sin(t) * l.speed;
    l.setPosition(a, b);
    l.rotation = g + 90;
    return l
  }, Hc:function(a) {
    for(var b = this.Yb.length;this.Yb[--b] !== i;) {
      this.Yb[b].ic = u.tf + u.Yg * a, this.Yb[b].Uf = 0.2 * a
    }
  }})
})();
ea = tm.createClass({superClass:tm.app.Sprite, da:k, ca:k, ub:0, frame:0, ng:k, color:k, Bf:0, ue:0, Fh:m, head:k, Qf:k, Af:k, Za:j, ic:u.nf, Gc:k, init:function(a, b) {
  this.da = a;
  this.ca = a.ca;
  this.Bf = 0 === this.da.style ? 1 : 1.2;
  this.ue = 0 === this.da.style ? 50 : 75;
  var c = this;
  this.ng = b;
  this.superInit(b.redBody, this.ue, 100);
  this.boundingHeightBottom = 1;
  this.ej = 0;
  this.origin.y = 1;
  var d = this.Af = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.Qf = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = c.ub - c.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < c.ub
  };
  this.ed(["red", "green", "blue"][this.da.type]);
  this.Hc(0)
}, ed:function(a) {
  this.color = a;
  this.image = tm.asset.AssetManager.get(this.ng[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Af.gotoAndPlay(this.color);
  this.Qf.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Gc = k;
  return this
}, Hc:function(a) {
  this.boundingWidth = this.width = this.ue + 30 * a / u.ce;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.ic = this.Bf * u.nf + u.$g * a;
  0 === a ? this.ed(["red", "green", "blue"][this.da.type]) : this.ed("hyper")
}, Jd:function(a, b) {
  this.Gc === k && this.Gf();
  b = b || this.ub;
  for(var c = 0;c < a;c++) {
    var d = this.Gc.clone().setPosition(this.x, b).addChildTo(this.ca), g = R(8, 14), l = R(0, Math.PI);
    d.oa = Math.cos(l) * g;
    d.pa = Math.sin(l) * g;
    d.scaleX = d.scaleY = (R(0.5, 1.5) + R(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.oa;
      this.y += this.pa;
      this.oa *= 0.95;
      this.pa *= 0.95
    })
  }
}, $h:function(a, b, c) {
  this.Gc === k && this.Gf();
  for(var d = 0;d < a;d++) {
    var g = this.Gc.clone().setPosition(b, c).addChildTo(this.ca), l = R(12, 20), t = R(0, Math.PI);
    g.oa = Math.cos(t) * l;
    g.pa = Math.sin(t) * l;
    g.scaleX = g.scaleY = (R(1, 3) + R(1, 3)) / 2;
    g.addEventListener("enterframe", function() {
      this.x += this.oa;
      this.y += this.pa;
      this.oa *= 0.95;
      this.pa *= 0.95
    })
  }
}, Gf:function() {
  this.Gc = "hyper" === this.color ? H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(a) {
  (this.visible = this.da.pb) ? (this.ub = Math.max(0, this.ub - 40), this.height = this.y - this.ub, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.ub = this.y - 40;
  this.Fh = this.visible
}, draw:function(a) {
  var b = this.srcRect, c = this._image.element;
  b.x = b.width * this.frame;
  a.context.drawImage(c, b.x, b.height - this.height, b.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Wi:function() {
  return this.ub
}, Ai:function(a) {
  this.ub = a;
  this.head.update()
}});
ea.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.ub
});
(function() {
  ja = tm.createClass({superClass:tm.app.Object2D, Za:j, ca:k, init:function(b, c) {
    this.superInit();
    this.da = b;
    this.ca = c;
    this.ig = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.ig.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.ig));
    this.yf();
    a === k && (a = H(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ia = 0;
    this.bd = 1;
    this.addEventListener("added", function() {
      this.ca.Dc = j;
      this.da.Fc = j;
      this.ca.vb -= 1;
      this.ca.Ed();
      this.ca.Qa("drop BOMBER!!", j);
      J("bomb");
      J("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.Dc = m;
      this.da.Fc = m
    })
  }, yf:function() {
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
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.bd + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.ia;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.ia += 3.6, this.bd = -1) : (this.b = 8, this.ia += 1.8, this.bd = 1)
  }});
  ka = tm.createClass({superClass:ja, init:function(a, c) {
    this.superInit(a, c);
    u.rg && this.addEventListener("added", function() {
      this.ca.vb = 0
    })
  }, yf:function() {
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
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.bd + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.04 * this.ia;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.ia += 1.8, this.bd = 1)
  }});
  var a = k
})();
E = {na:function() {
  Ia(256);
  la = {};
  E.explosion = Array.range(0, 2).map(function(a) {
    return tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explode" + a, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k}}}, 100, 100))
  });
  la.explodeL = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"explodeL", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:k, frequency:3}}}, 100, 100));
  E.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  E.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  E.particle16 = H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, Jd:function(a, b, c) {
  a = E.particle16.clone().setPosition(a, b).addChildTo(c);
  b = R(5, 20);
  c = R(Math.PI, 2 * Math.PI);
  a.oa = Math.cos(c) * b;
  a.pa = Math.sin(c) * b;
  a.scaleX = a.scaleY = (R(0.1, 0.5) + R(0.1, 0.5)) / 2;
  a.addEventListener("enterframe", function() {
    this.x += this.oa;
    this.y += this.pa;
    this.oa *= 0.9;
    this.pa *= 0.9
  })
}, Vi:function(a, b, c) {
  var d = tm.app.Sprite().setPosition(a, b).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  d.image = E.shockwaveImage;
  d.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
}, ai:function(a, b, c) {
  a = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(a, b).setScale(0.1, 0.1);
  a.Za = j;
  a.addChildTo(c);
  a.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(a))
}, Gd:function(a, b, c, d) {
  J("explode");
  a = E.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
  a.Za = j;
  if(d !== i) {
    var g = d.x, l = d.y;
    a.addEventListener("enterframe", function() {
      this.x += g;
      this.y += l;
      g *= 0.99;
      l *= 0.99
    })
  }
  a.addChildTo(c)
}, Qh:function(a, b, c) {
  J("explode");
  var d = E.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(a, b).setRotation(360 * Math.random()).gotoAndPlay();
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
  }).setScale(0.5).setPosition(a + 12, b).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
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
  }).setScale(0.5).setPosition(a - 12, b).setRotation(360 * Math.random()).setBlendMode("lighter").gotoAndPlay();
  d.Za = j;
  d.addChildTo(c)
}, nc:function(a, b, c) {
  J("explode2");
  J("explode3");
  for(var d = ~~(Math.random() * V.length), g = 0;20 > g;g++) {
    var l = E.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setBlendMode(0 === g % 2 ? "lighter" : "source-over").setPosition(a, b).gotoAndPlay();
    l.a = 2 * Math.PI * Math.random();
    l.v = 10 * Math.pow(V.at(~~(V.length * g / 20) + d), 2);
    l.Za = j;
    l.addChildTo(c)
  }
}, Nf:function(a, b, c) {
  J("explode2");
  J("explode3");
  for(var d = ~~(Math.random() * V.length), g = 0;20 > g;g++) {
    for(var l = 2 * Math.PI * g / 20, t = Math.pow(V.at(~~(V.length * g / 20) + d), 2), w = 0;3 > w;w++) {
      var v = 4 * t * (w + 1), r = la.explodeL.clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        32 < this.ia && (this.blendMode = "source-over");
        this.ia += 1
      }).setScale(0.3 * (3 - w)).setBlendMode("lighter").setPosition(a, b).gotoAndPlay();
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
ma = tm.createClass({superClass:tm.app.Object2D, target:k, oc:0, angle:0, alpha:1, Za:j, reverse:m, init:function(a, b) {
  this.superInit();
  this.target = a;
  this.reverse = b;
  this.angle = 0;
  this.oc = b ? 0 : 200;
  this.alpha = b ? 1 : 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var a = 0;9 > a;a++) {
      var b = this.angle + 2 * a / 9 * Math.PI;
      H(80, this.alpha, 0.9).setPosition(Math.cos(b) * this.oc + this.target.x, Math.sin(b) * this.oc + this.target.y).addChildTo(this.target.parent)
    }
    this.angle += 0.05;
    this.oc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.oc || 200 < this.oc) && this.remove()
  }
}});
ia = tm.createClass({superClass:tm.app.Object2D, target:k, angle:0, Za:j, init:function(a) {
  this.superInit();
  this.target = a;
  this.angle = 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var a = 0;5 > a;a++) {
      H(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + W(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + W(-2, 2)).addChildTo(this.target.parent)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
na = tm.createClass({superClass:tm.graphics.Canvas, ca:k, xc:k, Ra:k, init:function(a) {
  this.superInit("#scoreLabel");
  this.ca = a;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.xc = Ja(200);
  this.Ra = oa(this)
}, update:function() {
  this.clear();
  this.ca.Ub !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Ra.yb - 20, 470 * this.ca.Ub.ra / this.ca.Ub.Bc, 20), this.strokeRect(5, this.Ra.yb - 20, 470, 20), this.clear(263.5, this.Ra.yb - 20 + 2, 2, 16), this.clear(52, this.Ra.yb - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var a;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  a = "";
  for(var b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, this.Ra.yb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.Ia)).padding(8, " ");
  a = "";
  for(b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a + "x " + (~~(this.ca.ya / u.jf) + 1), this.Ra.Tc + 192, 22);
  a = [0, 1, 4][this.ca.da.type];
  for(b = 0;b < this.ca.bc - 1;b++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * a, 64, 64, 5 + 32 * b, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.va.Oa.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.Zc + " hit", this.Ra.Tc + 10, 95);
  0 < ~~this.ca.ya && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.ya + " HIT!!", 10, -this.Ra.yb + 115));
  for(b = 0;b < this.ca.vb;b++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (b + 1) - 20, 615, 20, 20)
  }
  this.xc.update();
  this.xc.Xe = this.Ra.yb + 5;
  this.xc.draw(this)
}});
oa = tm.createClass({superClass:tm.app.Object2D, ab:k, Tc:0, yb:0, init:function(a) {
  this.superInit();
  this.ab = a
}});
(function() {
  var a = 16 * Math.sqrt(3), b = 12.8 * Math.sqrt(3);
  pa = tm.createClass({superClass:tm.graphics.Canvas, ga:k, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.ga = qa();
    this.ga.ka = this;
    this.ga.update = function(a) {
      this.update(a.frame)
    }.bind(this);
    this.blendMode = "lighter"
  }, update:function(c) {
    this.ga.oa = Math.cos(this.ga.direction) * this.ga.speed;
    this.ga.pa = Math.sin(this.ga.direction) * this.ga.speed;
    for(this.ga.zb += this.ga.oa;96 < this.ga.zb;) {
      this.ga.zb -= 96
    }
    for(;-96 > this.ga.zb;) {
      this.ga.zb += 96
    }
    for(this.ga.Bb += this.ga.pa;2 * a < this.ga.Bb;) {
      this.ga.Bb -= 2 * a
    }
    for(;this.ga.Bb < 2 * -a;) {
      this.ga.Bb += 2 * a
    }
    for(this.ga.Ab += 0.8 * this.ga.oa;25.6 * 3 < this.ga.Ab;) {
      this.ga.Ab -= 25.6 * 3
    }
    for(;this.ga.Ab < -25.6 * 3;) {
      this.ga.Ab += 25.6 * 3
    }
    for(this.ga.Cb += 0.8 * this.ga.pa;2 * b < this.ga.Cb;) {
      this.ga.Cb -= 2 * b
    }
    for(;this.ga.Cb < 2 * -b;) {
      this.ga.Cb += 2 * b
    }
    0 === c % 2 && this.draw()
  }, draw:function() {
    this.ga.background !== k ? this.clearColor(this.ga.background, 0, 0) : this.clear();
    this.lineWidth = 0.3;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    this.beginPath();
    for(var c = 0, d = this.ga.zb - 96;576 > d;d += 48) {
      for(var c = 0 === c ? a : 0, g = this.ga.Bb - 2 * a + c;g < 640 + 2 * a;g += 2 * a) {
        this.line(d, g, d + 32, g), this.line(d, g, d - 16, g + a), this.line(d, g, d - 16, g - a)
      }
    }
    this.stroke();
    this.lineWidth = 0.2;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,0.6)"}, {offset:1, color:"rgba(255,255,255,0.3)"}]).toStyle();
    this.beginPath();
    c = 0;
    for(d = this.ga.Ab - 25.6 * 3;d < 480 + 25.6 * 3;d += 25.6 * 1.5) {
      c = 0 === c ? b : 0;
      for(g = this.ga.Cb - 2 * b + c;g < 640 + 2 * b;g += 2 * b) {
        this.line(d, g, d + 25.6, g), this.line(d, g, d - 12.8, g + b), this.line(d, g, d - 12.8, g - b)
      }
    }
    this.stroke()
  }});
  qa = tm.createClass({superClass:tm.app.Object2D, zb:0, Bb:0, Ab:0, Cb:0, direction:0, speed:0, oa:0, pa:0, background:k, init:function() {
    this.superInit();
    this.Ab = this.Cb = this.zb = this.Bb = 0;
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.pa = this.oa = 0
  }})
})();
ra = tm.createClass({superClass:tm.app.Sprite, Wf:m, ca:k, da:k, Nb:m, Uc:m, af:m, oa:0, pa:0, init:function(a) {
  this.superInit("star", 20, 20);
  (this.Wf = a) && this.setScale(2, 2);
  this.ca = F.le;
  this.da = this.ca.da;
  this.addChildTo(this.ca);
  a = 0.5 * B.random() * Math.PI - 0.75 * Math.PI;
  this.oa = 30 * Math.cos(a);
  this.pa = 30 * Math.sin(a)
}, update:function() {
  this.da.pb && (this.Uc = j);
  if(this.da.parent === k) {
    this.Uc = m
  }else {
    if(100 > Ga(this, this.da)) {
      this.ca.ki(this);
      this.remove();
      return
    }
    1E4 > Ga(this, this.da) && (this.Uc = j);
    if(this.af && this.Uc) {
      var a = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 10 * Math.cos(a);
      this.y += 10 * Math.sin(a)
    }else {
      this.af || (this.x += this.oa, this.y += this.pa, this.oa *= 0.8, this.pa *= 0.8, -1 < this.oa && (1 > this.oa && -1 < this.pa && 1 > this.pa) && (this.af = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
sa = tm.createClass({superClass:ra, Nb:m, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
ta = tm.createClass({superClass:ra, Nb:j, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.Uc || (this.x += this.ca.ka.oa, this.y += this.ca.ka.pa);
  this.superClass.prototype.update.call(this)
}});
ua = tm.createClass({da:k, ca:k, $:k, frame:0, init:function(a) {
  this.ca = a;
  this.da = a.da;
  this.$e();
  this.$ = wa();
  this.frame = 0
}, $e:n(), update:function() {
  this.Oh(this.frame);
  this.frame += 1
}, Oh:function(a) {
  a = this.$.get(a);
  if(a !== k) {
    if("function" === typeof a.value) {
      a.value.call(this)
    }else {
      if(xa[a.value] !== i) {
        var b = xa[a.value];
        if(b !== k) {
          if(b[0].Ub === j) {
            this.$f(b[0])
          }else {
            for(var c = 0;c < b.length;c++) {
              var d = this.$f(b[c]);
              a.stop && d.addEventListener("enemyconsumed", function() {
                this.$.cf = m
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, $f:function(a) {
  this.ca.Fd += 1;
  return a.aa(this.ca, a.ba).setPosition(a.x, a.y).addChildTo(this.ca).li()
}, Dh:function(a) {
  ya();
  this.ca.Rc = j;
  for(var b = tm.app.Object2D().setPosition(240, 320), c = -4;4 >= c;c++) {
    for(var d = -4;4 >= d;d++) {
      var g = tm.app.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(c, d);
      g.ia = 0;
      g.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.ia) + 0.5;
        this.ia += 1
      };
      g.addChildTo(b)
    }
  }
  b.tweener.wait(3E3).call(a).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = n();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(b)).wait(1E3).call(function() {
    this.remove()
  }.bind(b));
  b.addChildTo(this.ca.Ae);
  J("warning");
  J("voWarning")
}});
ua.create = function(a, b) {
  switch(b) {
    case 0:
      return za(a);
    case 1:
      return Aa(a)
  }
};
wa = tm.createClass({index:0, data:k, cf:m, init:function() {
  this.data = {}
}, add:function(a, b, c) {
  this.index += a;
  this.data[this.index] = {stop:c, value:b}
}, get:function(a) {
  a = this.data[a];
  return a === i ? k : a.stop === j ? (this.cf = j, a) : this.cf ? k : a
}});
za = tm.createClass({superClass:ua, init:function(a) {
  this.superInit(a);
  this.$.add(0, function() {
    Ba("bgm1", j);
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
    this.Dh(function() {
      Ba("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, $e:function() {
  this.ca.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
Aa = tm.createClass({superClass:ua, init:function(a) {
  this.superInit(a);
  this.$.add(0, function() {
    Ba("bgm2", j);
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
  for(a = 0;6 > a;a++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left"), this.$.add(30, "heri1-center2"), this.$.add(30, "heri1-right2"), this.$.add(30, "heri1-center2"), this.$.add(30, "heri1-left2")
  }
  this.$.add(1, function() {
    this.ca.ka.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
  });
  this.$.add(60, "tank5-left");
  this.$.add(60, "tank5-left");
  this.$.add(60, "tank5-left");
  this.$.add(120, "itsuki-2");
  this.$.add(1, "komachi2-0");
  this.$.add(300, "tsubomi-0");
  this.$.add(1, "komachi2-1");
  this.$.add(300, "itsuki-0");
  this.$.add(1, "itsuki-2");
  this.$.add(300, "makoto-4");
  this.$.add(1, "komachi2-0");
  this.$.add(300, "makoto-7");
  this.$.add(90, "makoto-1")
}, $e:function() {
  this.ca.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,20%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
function Ka(a, b) {
  if(a.parent === k || b.parent === k) {
    return m
  }
  var c = a.x + a.boundingWidthRight, d = a.y - a.boundingHeightTop, g = a.y + a.boundingHeightBottom, l = b.x - b.boundingWidthLeft, t = b.y - b.boundingHeightTop, w = b.y + b.boundingHeightBottom;
  return a.x - a.boundingWidthLeft < b.x + b.boundingWidthRight && c > l && d < w && g > t
}
;var X = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:k, init:function() {
  this.superInit()
}, Hi:function(a, b) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = b
}, finish:function(a) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(a)
}});
var La = tm.createClass({superClass:X, titleText:k, menu:k, descriptions:k, showExit:m, title:k, selections:[], description:k, box:k, cursor:k, Pe:k, _selected:0, _opened:m, _finished:m, init:function(a, b, c) {
  this.superInit();
  this.titleText = a;
  this.menu = b;
  this._selected = ~~c.defaultValue;
  this.showExit = c.showExit;
  this.descriptions = c.menuDescriptions;
  this.showExit && (b.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Pe = c.onCursorMove;
  a = Math.max(50 * (1 + b.length), 50) + 40;
  this.box = tm.app.RectangleShape(384, a, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"hsla(220,50%,30%,0.8)"}).setPosition(240, 320);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:384, height:a}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.app.Label("", 14).setPosition(240, 630).addChildTo(this)
}, _onOpen:function() {
  var a = 320 - 25 * this.menu.length;
  this.title = tm.app.Label(this.titleText, 30).setPosition(240, a).addChildTo(this);
  this.selections = this.menu.map(function(b, c) {
    var d = this;
    a += 50;
    var g = tm.app.Label(b).setPosition(240, a).addChildTo(this);
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Pe !== k && this.parent.Pe(this.s))
  }
}, update:function(a) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(a.frame / 2) % 2 : this.showExit && a.keyboard.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.closeDialog(this._selected), J("decision")) : a.keyboard.getKeyDown("down") ? (this._selected += 1, this._selected = P(this._selected, 0, this.selections.length - 1), J("select")) : a.keyboard.getKeyDown("up") && 
  (this._selected -= 1, this._selected = P(this._selected, 0, this.selections.length - 1), J("select")))
}, closeDialog:function(a) {
  this._finished = j;
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
function Y(a, b, c, d, g) {
  g = {}.$extend({menuDescriptions:[].concat(c), showExit:j, defaultValue:0, onCursorMove:n()}, g);
  a.Hi(La(b, c, g), d)
}
;H = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, te:0.85, size:0, image:k, Za:j, init:function(a, b, c, d) {
  this.superInit();
  this.width = this.height = this.size = a;
  b !== i && (this.alpha = b);
  c !== i && (this.te = c);
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.te;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return H(this.size, this.$i, this.te, this.image)
}});
ha = tm.createClass({superClass:H, ka:k, init:function(a, b) {
  b = b || 20;
  this.superInit(b, 1, 0.82, tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element);
  this.ka = a
}, update:function(a) {
  this.superClass.prototype.update.apply(this, a);
  this.x += this.ka.oa;
  this.y += this.ka.pa + 0.3
}, clone:function(a) {
  return ha(this.ka, a)
}});
var Ja = tm.createClass({width:0, label:k, Ua:k, ia:0, fg:0, Xe:0, init:function(a) {
  this.width = a;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Ua = [];
  this.fg = 480 - this.width - 5;
  this.Xe = 5
}, Ch:function(a, b) {
  b === j && (this.Ua.clear(), this.Ua.push(""));
  5 < this.Ua.length && this.Ua.splice(1, this.Ua.length - 4);
  this.Ua.push(a);
  return this
}, Hh:function() {
  this.Ua.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var a = this.label.text, a = a.substring(0, a.length - 1);
  if(0 !== this.Ua.length) {
    if("" !== this.Ua[0]) {
      var b = this.Ua[0][0];
      this.Ua[0] = this.Ua[0].substring(1);
      a += b
    }else {
      this.Ua.shift(), b = a.split("\n"), 3 < b.length && (b.shift(), a = b.join("\n")), a += "\n"
    }
  }
  this.label.text = a + (0 === this.ia % 2 ? "_" : " ");
  this.ia += 1
}, draw:function(a) {
  a.save();
  a.context.globalCompositeOperation = "source-over";
  a.translate(this.fg, this.Xe);
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
function Ia(a) {
  function b(b) {
    if(1 > b) {
      return k
    }
    var d = [], g = Math.random(), l, t;
    for(t = 0;t < a;t += ~~b) {
      l = Math.random();
      for(var w = 0;w < b;w++) {
        d[t + w] = c(g, l, w / b)
      }
      g = l
    }
    g = d[a - ~~b];
    l = d[0];
    for(w = 0;w < b;w++) {
      d[a - ~~b + w] = c(g, l, w / b)
    }
    return d
  }
  function c(a, b, c) {
    c = 0.5 * (1 - Math.cos(c * Math.PI));
    return a * (1 - c) + b * c
  }
  for(var d = [], g = 0, l = Math.pow(2, 4);8 > g;g++, l *= 2) {
    var t = b(a / l);
    if(t === k) {
      break
    }
    d.push(t)
  }
  t = [].concat(d[0]);
  g = 1;
  for(l = 0.5;g < d.length;g++, l *= 0.5) {
    for(var w = 0;w < a;w++) {
      t[w] += d[g][w] * l
    }
  }
  for(g = 0;g < t.length;g++) {
    t[g] /= 2
  }
  return t
}
var V;
B = {index:-1, data:k, na:function(a) {
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
K = k;
Ba = function(a, b) {
  b || Ca();
  var c = tm.asset.AssetManager.get(a);
  c && (K = c.clone(), K.volume = 0.1 * s.Mc, K.loop = j, K.play())
};
Ca = function() {
  K !== k && K.stop()
};
ya = function() {
  if(K !== k) {
    var a = K;
    a.loop = m;
    var b = function() {
      a.volume -= 0.0010;
      0 >= a.volume ? a.stop() : setTimeout(b, 10)
    };
    setTimeout(b, 10)
  }
};
J = function(a) {
  if(0 !== s.pc && J.played[a] !== s.frame) {
    var b = tm.asset.AssetManager.get("sound/" + a);
    b && (b = b.clone().play(), "vo" === a.substring(0, 2) ? (b.volume = 0.5 * s.pc, J.ef !== k && J.ef.stop(), J.ef = b) : b.volume = 0.1 * s.pc);
    J.played[a] = s.frame
  }
};
J.played = {};
J.ef = k;
(function() {
  var a = k, b = k;
  A = tm.createClass({superClass:X, result:k, ia:0, ad:[], Id:m, Sf:k, Yf:0, Od:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Sf = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Id = m;
      for(var a = ("" + Math.floor(s.Ld)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.Sf.text = "HIGH SCORE: " + b.trim()
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.wf(80 * Math.cos(0.01 * this.ia) + 240, 80 * Math.sin(0.01 * this.ia) + 320, 0);
    this.wf(80 * Math.cos(0.01 * this.ia + Math.PI) + 240, 80 * Math.sin(0.01 * this.ia + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Id && this.eg();
    this.ia += 1
  }, wf:function(c, d, g) {
    if(!this.Id) {
      a === k && (a = H(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === k && (b = H(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      g = 0 === g ? a.clone().addChildTo(this) : b.clone().addChildTo(this);
      g.speed = 0.6;
      var l = R(0, 2 * Math.PI), t = W(0, 20);
      g.setPosition(Math.cos(l) * t + c, Math.sin(l) * t + d);
      var w = this;
      g.update = function() {
        this.x += Math.cos(l) * this.speed;
        this.y += Math.sin(l) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var a = w.ad.indexOf(this);
          -1 !== a && w.ad.splice(a, 1)
        }
      };
      this.ad.push(g)
    }
  }, eg:function() {
    Y(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.ri, {defaultValue:this.Yf, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, ri:function(a) {
    4 !== a && (this.Yf = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Id = j;
          for(var a = 0, b = this.ad.length;a < b;a++) {
            this.ad[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.replaceScene(Da())
        }.bind(this));
        break;
      case 2:
        this.Xb();
        break;
      case 3:
        s.Ph()
    }
  }, Xb:function() {
    Y(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Te, {defaultValue:this.Od, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Te:function(a) {
    3 !== a && (this.Od = a);
    switch(a) {
      case 0:
        this.Ue();
        break;
      case 1:
        this.Ve();
        break;
      case 2:
        this.yi();
        break;
      default:
        this.eg()
    }
  }, Ue:function() {
    Y(this, "BGM VOLUME", "012345".split(""), this.Re, {defaultValue:s.Mc, onCursorMove:function(a) {
      K !== k && "exit" !== a && (K.volume = 0.1 * a)
    }, showExit:m})
  }, Re:function(a) {
    6 !== a && (s.Mc = a);
    this.Xb()
  }, Ve:function() {
    Y(this, "SE VOLUME", "012345".split(""), this.Se, {defaultValue:s.pc, showExit:m})
  }, Se:function(a) {
    6 !== a && (s.pc = a);
    this.Xb()
  }, yi:function() {
    Y(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.qi, {defaultValue:s.Lf, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, qi:function(a) {
    5 !== a && (s.Lf = a);
    this.Xb()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  Da = tm.createClass({superClass:X, mode:0, types:k, Xd:k, jb:k, kb:k, lb:k, Ke:k, Ie:k, type:0, style:0, Tb:m, Pd:m, init:function() {
    this.superInit();
    tm.app.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Ci();
    this.Xd = this.Bi();
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
    this.Xd.visible = m;
    this.Oe(-1, j);
    this.jb.update();
    this.kb.update();
    this.lb.update();
    J("voSelectShip")
  }, Ci:function() {
    var a = tm.app.CanvasElement();
    a.addChildTo(this);
    this.Ke = tm.app.Label("Type-A").setPosition(240, 150);
    this.Ke.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u5f37\u529b\u306a\u96d1\u9b5a\u6383\u8a0e\u80fd\u529b"];
    this.Le = tm.app.Label(b[0], 16).setPosition(240, 500);
    this.Le.update = function() {
      this.Le.text = b[this.type]
    }.bind(this);
    this.Le.addChildTo(a);
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
    return a
  }, Bi:function() {
    var b = tm.app.CanvasElement();
    b.addChildTo(this);
    this.Ie = tm.app.Label("Shot Style").setPosition(240, 150);
    this.Ie.addChildTo(b);
    this.Jc = tm.app.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(b);
    this.Kb = tm.app.Object2D();
    this.Kb.addChildTo(this.Jc);
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
    this.Jc.line = a(0, 0, 0, 130, 8);
    this.Jc.line.addChildTo(this.Jc);
    this.ta.each(function(b) {
      b.line = a(0, 0, 0, 130, 5);
      b.line.addChildTo(b);
      b.addChildTo(this.Kb)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3059\u308b\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.Je = tm.app.Label(d[0], 16).setPosition(240, 500);
    this.Je.update = function() {
      this.Je.text = d[this.style]
    }.bind(this);
    this.Je.addChildTo(b);
    return b
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.Xd.visible = m, !this.Pd && a.keyboard.getKeyDown("left")) {
        this.Oe(-1, m), J("select")
      }else {
        if(!this.Pd && a.keyboard.getKeyDown("right")) {
          this.Oe(1, m), J("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, J("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.Xd.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, J("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, J("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (u.gf ? this.vi() : (this.Tb = j, this.dg()), J("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Ii(0 === ~~(a.frame / 60) % 2))
    }
  }, vi:function() {
    Y(this, "AUTO BOMB", ["on", "off"], this.mi, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, mi:function(a) {
    2 !== a && (this.Tb = 0 === a, this.dg())
  }, dg:function() {
    Y(this, "ARE YOU READY?", ["ok"], this.ni, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, ni:function(a) {
    0 === a && this.Ei()
  }, Oe:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.jb, this.kb, this.lb][this.type].remove().addChildTo(this.types);
    b ? (this.jb.Ea -= a, this.jb.scaleX = 0 === this.type ? 5 : 1, this.jb.scaleY = 0 === this.type ? 5 : 1, this.kb.Ea -= a, this.kb.scaleX = 1 === this.type ? 5 : 1, this.kb.scaleY = 1 === this.type ? 5 : 1, this.lb.Ea -= a, this.lb.scaleX = 2 === this.type ? 5 : 1, this.lb.scaleY = 2 === this.type ? 5 : 1) : (this.Pd = j, this.jb.tweener.clear().to({Ea:this.jb.Ea - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.kb.tweener.clear().to({Ea:this.kb.Ea - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.lb.tweener.clear().to({Ea:this.lb.Ea - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.Pd = m
    }.bind(this)));
    this.Ke.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Ei:function() {
    s.ca.Tb = this.Tb;
    s.ca.start(this.type, this.style);
    s.replaceScene(s.ca)
  }, Ii:function(a) {
    this.Ie.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    a ? (this.ta[0].visible = j, this.ta[1].visible = j, 1 === this.style ? (this.ta[2].visible = m, this.ta[3].visible = m) : (this.ta[2].visible = j, this.ta[3].visible = j), this.Jc.line.lineWidth = 5) : (this.ta.each(function(a) {
      a.visible = m
    }), this.Jc.line.lineWidth = 0 === this.style ? 10 : 20)
  }, draw:function(a) {
    a.clearColor(tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle());
    a.lineWidth = 1;
    a.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    a.beginPath();
    for(var d = 0, g = -48;528 > g;g += 24) {
      for(var d = 0 === d ? b : 0, l = 2 * -b + d;l < 640 + 2 * b;l += 2 * b) {
        a.line(g, l, g + 16, l), a.line(g, l, g - 8, l + b), a.line(g, l, g - 8, l - b)
      }
    }
    a.stroke();
    a.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    a.fillRect(10, 10, 460, 620)
  }});
  var a = tm.createClass({superClass:tm.app.CanvasElement, init:function(a, b, g, l, t) {
    this.superInit();
    this.angle = g - 0.5 * Math.PI;
    this.x = a + 10 * Math.cos(this.angle);
    this.y = b + 10 * Math.sin(this.angle);
    this.length = l;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = t
  }, update:function(a) {
    this.i = a.frame % 20 / 20
  }, draw:function(a) {
    a.lineWidth = this.lineWidth;
    a.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
  }}), b = 8 * Math.sqrt(3)
})();
F = tm.createClass({superClass:X, da:k, score:0, Ia:0, ya:0, Zc:0, Ca:0, Vb:0, lg:0, kg:k, ka:k, bc:3, Ud:0, Vd:0, Fb:0, Fd:0, $c:0, Ne:0, Tb:m, vb:0, Nc:0, Cf:0, Dc:m, aj:m, Eb:0, Xa:0, sa:m, Wc:0, Cc:0, xa:0, Dd:0, Zi:0, Yi:0, Kd:k, Of:k, We:k, Mf:k, ze:k, Ae:k, ve:k, ii:k, gb:k, ab:k, Ub:k, Rc:m, hi:m, init:function() {
  F.le !== k && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  F.le = this;
  this.ab = na(this);
  this.ab.Ra.addChildTo(this);
  this.ka = pa().ga;
  this.ka.addChildTo(this);
  this.Kd = F.Rb().addChildTo(this);
  this.Of = F.Rb().addChildTo(this);
  this.Mf = F.Rb().addChildTo(this);
  this.ze = F.Rb().addChildTo(this);
  this.We = F.Rb().addChildTo(this);
  this.Ae = F.Rb().addChildTo(this);
  this.ve = F.Rb().addChildTo(this);
  this.ii = F.of(this).addChildTo(this);
  tm.Va.cc.Qc.zf = this;
  this.gb = tm.app.Object2D();
  this.gb.addChildTo(this);
  this.gb.update = function(a) {
    this.ti(a)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.ab.clear()
  })
}, addChild:function(a) {
  a.Za ? this.ze.addChild(a) : a instanceof L ? this.ve.addChild(a) : a instanceof ra ? this.Kd.addChild(a) : a instanceof N ? a.Nb ? this.Kd.addChild(a) : this.Mf.addChild(a) : a instanceof ba ? this.We.addChild(a) : a === this.gb || a === this.ka || a instanceof F.Rb || a instanceof F.of || a instanceof oa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(a)))
}, update:function(a) {
  this.zi(a.keyboard);
  0 === a.frame % 500 && (V = Ia(512));
  this.kg.update(a.frame);
  0 === a.frame % 2 && this.ab.update();
  a.keyboard.getKeyDown("escape") ? (this.app.replaceScene(A()), Ca()) : a.keyboard.getKeyDown("space") ? this.Qd(0) : a.keyboard.getKeyDown("p") && (this.jg().saveAsImage(), this.Qd(0))
}, jg:function() {
  var a = tm.graphics.Canvas();
  a.resize(480, 640);
  a.clearColor("black");
  a.drawImage(this.ka.ka.element, 0, 0);
  a.drawImage(this.app.canvas.element, 0, 0);
  a.drawImage(this.ab.element, 0, 0);
  return a
}, ti:function() {
  this.da.Lb === m && C.erase();
  var a;
  a = [].concat(N.Ma);
  for(var b = [].concat(G.Ma), c = b.length;b[--c] !== i;) {
    for(var d = a.length;a[--d] !== i;) {
      var g = a[d], l = b[c];
      if(!(0 >= g.ra) && Ka(g, l) && (l.Jd(1), l.remove(), g.Mb(l.ic))) {
        this.Fb += 1;
        this.sa ? this.Ta(u.Rg) : this.Ta(u.Qg);
        this.Qe(g);
        break
      }
    }
  }
  l = this.da.Ob;
  if(this.da.pb) {
    a = [].concat(N.Ma);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(d = a.length;a[--d] !== i;) {
      if(g = a[d], !(0 >= g.ra) && Ka(g, l)) {
        l.Ai(g.y + g.boundingHeightBottom);
        g.Mb(l.ic) ? (this.Fb += 1, this.sa ? this.Ta(u.Pg) : this.Ta(u.Mg), this.Qe(g)) : (this.sa ? this.vc(0.01 * this.xa) : this.vc(0.01), this.Ca = Math.min(this.Ca + 0.02, 1), this.sa ? this.Ta(u.Og) : this.Ta(u.Ng));
        l.Jd(2);
        break
      }
    }
    b = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(N.Ma);
    for(d = a.length;a[--d] !== i;) {
      g = a[d], !(0 >= g.ra) && Ka(g, b) && (g.Mb(l.ic) ? (this.Fb += 1, this.sa ? this.Ta(u.Lg) : this.Ta(u.Ig), this.Qe(g)) : (this.sa ? this.vc(0.01 * this.xa) : this.vc(0.01), this.Ca = Math.min(this.Ca + 0.02, 1), this.sa ? this.Ta(u.Kg) : this.Ta(u.Jg)), l.$h(2, this.da.x, this.da.y - 30))
    }
  }
  if(this.Dc) {
    C.erase();
    a = [].concat(N.Ma);
    for(d = a.length;a[--d] !== i;) {
      g = a[d], !(0 >= g.ra) && (g.Xc() && g.Mb(u.sg)) && (this.gc(g.score), this.Fb += 1)
    }
    this.Ca = this.ya = 0
  }
  if(this.sa) {
    d = [].concat(G.Ma);
    for(g = d.length;d[--g] !== i;) {
      if(l = d[g], !(0 >= l.ra)) {
        b = [].concat(L.Ma);
        for(a = b.length;b[--a] !== i;) {
          c = b[a], c.visible !== m && (0 < l.ra && Ka(l, c)) && (c.ra -= 6 - this.Xa, 0 > c.ra && (c.Na(), this.gc(u.wg), this.vc(u.ug), this.Rf(m, m, c.x, c.y, 1)), l.ra -= 1)
        }
      }
    }
  }
  if(this.Rc) {
    C.erase()
  }else {
    if(this.da.parent !== k && this.da.Fc === m && this.Dc === m && 0 >= this.Wc) {
      for(d = L.Ma.length;L.Ma[--d] !== i;) {
        if(a = L.Ma[d], a.visible !== m && Ka(a, this.da)) {
          this.da.Mb();
          0 < this.vb && this.Tb ? (this.Xa = P(this.Xa - 1, 0, 1), this.yd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.bg();
          break
        }
      }
      for(d = N.Ma.length;N.Ma[--d] !== i;) {
        if(g = N.Ma[d], !(0 >= g.ra) && !g.Nb && Ka(g, this.da)) {
          this.da.Mb();
          0 < this.vb && this.Tb ? (this.Xa = P(this.Xa - 1, 0, 1), this.yd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.bg();
          break
        }
      }
    }
    this.sa && (this.Cc -= 1, 0 >= this.Cc && this.Ed());
    this.Wc = Math.max(this.Wc - 1, 0);
    this.Ca -= u.yg * u.zg;
    0 >= this.Ca && (this.Ca = 0, this.sa || 0 < this.xa ? this.Vb = this.ya = this.Ia = 0 : (0 < this.ya && (0 >= this.Vb && (this.Vb = this.ya * u.xg), this.Ia = this.Ia * (this.ya - this.Vb) / this.ya, this.ya -= this.Vb), 0 >= this.ya && (this.Vb = this.ya = this.Ia = 0)))
  }
}, Qe:function(a) {
  this.Rf(a.Nb, this.sa || Ga(a, this.da) < u.Ag, a.x, a.y, a.star);
  this.vc(u.Xg[this.Dd]);
  for(var b = this.Ia, c = ~~(this.ya / u.jf) + 1, d = 0;d < c;d++) {
    b += a.score, this.gc(b)
  }
  this.Ia += a.score * c
}, Rf:function(a, b, c, d, g) {
  a = a ? ta : sa;
  for(var l = 0;l < g;l++) {
    a(b).setPosition(c, d)
  }
}, ki:function(a) {
  J("star");
  a.Wf ? (this.Vd += 1, this.Ia += u.kh, this.gc(u.oh + this.Ia * u.mh), this.sa ? this.Ta(u.Vg) : this.Ta(u.Ug)) : (this.Ud += 1, this.Ia += u.jh, this.gc(u.nh + this.Ia * u.lh), this.sa ? this.Ta(u.Tg) : this.Ta(u.Sg))
}, start:function(a, b) {
  this.ab.xc.Hh().clear();
  this.score = 0;
  this.bc = u.mf;
  this.vb = this.Nc = u.lf[b];
  this.Cf = u.tg[b];
  this.xa = this.Xa = this.Eb = 0;
  q.va.Oa.$rank = u.Zg;
  this.Ed();
  this.Dc = m;
  this.$c = this.Ne = 0;
  this.da = ba(this, a, b);
  this.mg(0);
  J("voLetsGo");
  this.Gi()
}, mg:function(a) {
  this.Qa("3...2...1...");
  this.da.parent !== k && this.da.remove();
  N.Oc();
  G.Oc();
  C.Oc();
  this.Kd.removeChildren();
  this.ze.removeChildren();
  this.Ae.removeChildren();
  this.We.removeChildren();
  this.ve.removeChildren();
  this.gb.removeChildren();
  this.Fb = this.Fd = this.Vd = this.Ud = this.Zc = this.Ca = this.ya = this.Ia = 0;
  this.Ub = k;
  this.hi = this.Rc = m;
  this.$c = 0;
  this.ab.Ra.Tc = 0;
  this.Xa = this.ab.Ra.yb = 0;
  this.lg = a;
  this.kg = ua.create(this, a);
  this.tweener.clear().wait(1E3).call(function() {
    this.Me()
  }.bind(this));
  this.ka.tweener.clear()
}, Me:function() {
  this.Qa("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Ob.addChildTo(this);
  this.da.Lb = m;
  this.da.Fc = j;
  this.da.Ac = m;
  this.da.pb = m;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Lb = j
  }.bind(this.da)).wait(u.ah).call(function() {
    this.Fc = m
  }.bind(this.da))
}, bg:function() {
  E.Gd(this.da.x, this.da.y, this);
  this.Qa("I was shot down.");
  this.da.Lb = m;
  this.da.remove();
  this.bc -= 1;
  this.xa = this.Vb = this.ya = this.Ca = 0;
  this.$c += 1;
  this.Ne += 1;
  this.Xa = P(this.Xa - 3, 0, 1);
  this.yd(-0.03);
  0 < this.bc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.Tb || !u.gf) {
      this.Nc = Math.min(this.Nc + 1, this.Cf)
    }
    this.vb = this.Nc;
    this.Me()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.xi()
  }.bind(this))
}, yd:function(a) {
  q.va.Oa.$rank = P(q.va.Oa.$rank + a, 0, 0.5)
}, Yh:function() {
  this.Qa("System rebooted.", j);
  this.score = 0;
  this.bc = u.mf;
  this.vb = this.Nc = u.lf[this.da.style];
  this.Xa = 0;
  q.va.Oa.$rank = 0;
  this.Me()
}, Ih:function() {
  Ba("bgmResult");
  var a = tm.app.Object2D();
  a.addChildTo(this.gb);
  a.tweener.wait(1E3).call(function() {
    this.app.pushScene(Ea(this, this.jg()));
    a.remove()
  }.bind(this))
}, Zh:function() {
  Ca();
  this.app.replaceScene(Ma())
}, Ui:n(), gc:function(a) {
  var b = this.score;
  this.score += a;
  for(a = 0;a < u.kf.length;a++) {
    var c = u.kf[a];
    b < c && c <= this.score && this.Sh()
  }
  s.Ld = Math.max(s.Ld, this.score)
}, vc:function(a) {
  this.Vb = 0;
  this.ya += a;
  this.Zc = Math.max(this.Zc, this.ya);
  1 <= a && (this.Ca = 1)
}, Ta:function(a) {
  if(this.xa !== u.ce) {
    for(a *= u.Wg;1 < a;) {
      ma(this.da).addChildTo(this), a -= 1, this.Eb = 0, this.xa += 1, 1 === this.xa ? (this.Qa("HYPER SYSTEM, stand by.", j), J("voHyperStandBy")) : (this.Qa("HYPER SYSTEM, ready.", j), J("voHyperReady"))
    }
    this.Eb = P(this.Eb + a, 0, 1);
    1 <= this.Eb && (ma(this.da).addChildTo(this), this.xa += 1, this.Eb -= 1, 1 === this.xa ? (this.Qa("HYPER SYSTEM, stand by.", j), J("voHyperStandBy")) : (this.Qa("HYPER SYSTEM, ready.", j), J("voHyperReady")))
  }
}, Fi:function() {
  0.5 > Math.random() ? (this.Qa("HYPER SYSTEM start!!", j), J("voHyperStart0")) : (this.Qa("start counting to system limit.", j), J("voHyperStart1"));
  this.Xa = P(this.Xa + 1, 0, 5);
  this.yd(0.01 * this.xa);
  q.va.Oa.$hyperOff = u.Dg;
  this.Cc = u.nd;
  this.Wc = u.nd * u.Hg;
  this.da.Md.Hc(this.xa);
  this.da.Ob.Hc(this.xa);
  this.da.yc = this.da.Md;
  E.ai(this.da.x, this.da.y, this);
  this.sa = j;
  this.Dd = this.xa;
  this.Eb = this.xa = 0;
  C.erase(j, j)
}, Ed:function() {
  this.sa !== m && (this.sa = m, ma(this.da, j).addChildTo(this), this.da.yc = this.da.cg, q.va.Oa.$hyperOff = 1, this.da.Md.Hc(0), this.da.Ob.Hc(0), this.Wc = u.nd * u.Gg, this.Dd = this.Cc = 0, C.erase())
}, Sh:function() {
  J("voExtend");
  this.Qa("extended.");
  this.bc += 1
}, Qa:function(a, b) {
  this.ab.xc.Ch(a, b)
}, Qd:function(a) {
  Y(this, "PAUSE", ["resume", "setting", "exit game"], this.si, {defaultValue:a, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:m})
}, si:function(a) {
  switch(a) {
    case 1:
      this.Xb();
      break;
    case 2:
      this.wi()
  }
}, Xb:function() {
  Y(this, "SETTING", ["bgm volume", "sound volume"], this.Te, {defaultValue:this.Od, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Te:function(a) {
  3 !== a && (this.Od = a);
  switch(a) {
    case 0:
      this.Ue();
      break;
    case 1:
      this.Ve();
      break;
    default:
      this.Qd()
  }
}, wi:function() {
  Y(this, "REARY?", ["yes", "no"], this.oi, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:m})
}, oi:function(a) {
  0 === a ? (Ca(), this.app.replaceScene(A())) : this.Qd(1)
}, Ue:function() {
  Y(this, "BGM VOLUME", "012345".split(""), this.Re, {defaultValue:s.Mc, onCursorMove:function(a) {
    K !== k && 6 !== a && (K.volume = 0.1 * a)
  }, showExit:m})
}, Re:function(a) {
  6 !== a && (s.Mc = a);
  this.Xb(1)
}, Ve:function() {
  Y(this, "SE VOLUME", "012345".split(""), this.Se, {defaultValue:s.pc, showExit:m})
}, Se:function(a) {
  6 !== a && (s.pc = a);
  this.Xb(1)
}, xi:function() {
  Y(this, "CONTINUE?", ["yes", "no"], this.pi, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:m})
}, pi:function(a) {
  switch(a) {
    case 0:
      this.Yh();
      break;
    case 1:
      this.Zh()
  }
}, draw:n(), Di:function() {
  this.ab.Ra.tweener.clear().to({Tc:-480}, 1600, "easeInQuad").to({yb:30}, 800, "easeInOutQuad")
}, ci:function() {
  this.ab.Ra.tweener.clear().to({yb:0}, 800, "easeInOutQuad").to({Tc:0}, 1600, "easeOutQuad")
}, cd:k, dd:0, Yc:k, pd:0, Gi:function() {
  if(1 === this.pd) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.Yc = [];
      for(var a = ~~localStorage.getItem("recCount"), b = 0;b < a;b++) {
        localStorage.removeItem("rec" + b)
      }
      localStorage.removeItem("recCount")
    }
    this.cd = [];
    this.dd = 0
  }else {
    if(2 === this.pd && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.Yc = [];
      a = ~~localStorage.getItem("recCount");
      for(b = 0;b < a;b++) {
        for(var c = localStorage.getItem("rec" + b).split(","), d = 0;d < c.length;d++) {
          this.Yc.push(c[d])
        }
      }
    }
  }
}, zi:function(a) {
  if(1 === this.pd) {
    1E3 < this.cd.length && (console.log("save"), localStorage.setItem("rec" + this.dd, this.cd), localStorage.setItem("recCount", this.dd), this.cd = [], this.dd += 1), this.cd.push("" + ~~a.getKey("up") + ~~a.getKey("down") + ~~a.getKey("left") + ~~a.getKey("right") + ~~a.getKey("z") + ~~a.getKey("x") + ~~a.getKey("c"))
  }else {
    if(2 === this.pd && this.Yc) {
      var b = this.Yc.shift();
      b !== i && (a.getKey = function(a) {
        return"up" === a ? !!~~b[0] : "down" === a ? !!~~b[1] : "left" === a ? !!~~b[2] : "right" === a ? !!~~b[3] : "z" === a ? !!~~b[4] : "x" === a ? !!~~b[5] : "c" === a ? !!~~b[6] : m
      }, a.getKeyDown = function(a) {
        return"up" === a ? !!~~b[0] : "down" === a ? !!~~b[1] : "left" === a ? !!~~b[2] : "right" === a ? !!~~b[3] : "z" === a ? !!~~b[4] : "x" === a ? !!~~b[5] : "c" === a ? !!~~b[6] : m
      })
    }
  }
}});
F.Rb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
F.of = tm.createClass({superClass:tm.app.CanvasElement, ca:k, frame:0, init:function(a) {
  this.superInit();
  this.ca = a;
  this.blendMode = "lighter"
}, update:function(a) {
  this.frame = a.frame
}, draw:function(a) {
  this.Lh(a);
  this.Mh(a)
}, Lh:function(a) {
  if(0 < this.ca.Ca) {
    a.fillStyle = "rgba(255," + ~~(255 * this.ca.Ca) + "," + ~~Math.min(255, 512 * this.ca.Ca) + ",0.5)";
    var b = 500 * this.ca.Ca;
    a.fillRect(465, 635 - b, 10, b)
  }
}, Mh:function(a) {
  a.fillStyle = "rgba(255,255,0,0.1)";
  a.fillRect(5, 628, 200, 9);
  this.xa === u.ce ? 1 === this.frame % 2 && (a.fillStyle = "rgba(255,255,255,0.3)", a.fillRect(5, 628, 200, 9)) : 0 < this.ca.Eb && (a.fillStyle = "rgba(255,255,100,0.3)", a.fillRect(5, 628, 200 * this.ca.Eb, 9));
  0 === this.frame % 2 && (a.strokeStyle = "rgba(255,255,100,0.5)", !this.ca.sa && 0 < this.ca.xa ? (a.setText("bold 24px Orbitron", "left", "bottom"), a.strokeText("HYPER LV " + this.ca.xa, 5, 637)) : this.ca.sa && (a.setText("bold 28px Orbitron", "left", "bottom"), a.strokeText("HYPER LV " + this.ca.Dd, 5, 637)))
}});
F.le = k;
(function() {
  Ea = tm.createClass({superClass:X, ca:k, hg:k, gb:k, values:k, labels:k, Nd:k, gg:[u.hh, u.ih, u.eh, u.fh, 1], Vf:k, Ye:k, cursor:0, wait:0, frame:0, init:function(a, c) {
    this.superInit();
    this.ca = a;
    this.values = [this.ca.Ud, this.ca.Vd, ~~(100 * (this.ca.Fb / this.ca.Fd)), this.ca.Zc, 0 === this.ca.$c ? u.gh : 0];
    this.Nd = this.values.map(function(a) {
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
    this.Vf = tm.app.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
    this.Ye = tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.Ye.visible = m;
    this.background = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle();
    this.hg = c;
    for(var g = [], d = 0;12 > d;d++) {
      g[d] = [];
      for(var l = 0;16 > l;l++) {
        g[d][l] = {Ze:0, Sd:0, ff:R(-2, 2), gd:R(1, 4)}
      }
    }
    this.gb = tm.app.Object2D();
    this.gb.draw = function(a) {
      for(var b = j, c = 0;c < g.length;c++) {
        for(var d = 0;d < g[c].length;d++) {
          var l = g[c][d];
          640 > 40 * d + l.Sd && (a.drawImage(this.hg.element, 40 * c, 40 * d, 40, 40, 40 * c + l.Ze, 40 * d + l.Sd, 40, 40), l.Ze += l.ff, l.Sd += l.gd, l.gd += 0.3, b = m)
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
      var c = this.cursor;
      if(c < this.values.length) {
        J("star"), this.values[c] <= this.Nd[c] || a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.ca.gc(this.values[c] * this.gg[c]), this.values[c] = 0, this.cursor += 1, this.wait = 30) : (this.ca.gc(this.Nd[c] * this.gg[c]), this.values[c] -= this.Nd[c]), this.labels[c].text = "" + Math.floor(this.values[c]) + (2 === c ? "%" : ""), this.Vf.text = Math.floor(this.ca.score)
      }else {
        if(this.Ye.visible = j, a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") || 1800 < this.frame) {
          J("decision"), this.ca.mg(this.ca.lg + 1), a.popScene()
        }
      }
      this.frame += 1
    }
  }, draw:function(b) {
    b.clearColor(this.background);
    b.lineWidth = 1;
    b.strokeStyle = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(200, 90%, 10%)"}, {offset:1, color:"hsl(200, 90%, 60%)"}]).toStyle();
    b.beginPath();
    for(var c = 0, d = -48;528 > d;d += 24) {
      for(var c = 0 === c ? a : 0, g = 2 * -a + c;g < 640 + 2 * a;g += 2 * a) {
        b.line(d, g, d + 16, g), b.line(d, g, d - 8, g + a), b.line(d, g, d - 8, g - a)
      }
    }
    b.stroke();
    b.fillStyle = "hsla(220, 90%, 10%, 0.6)";
    b.fillRect(20, 20, 440, 600)
  }});
  var a = 8 * Math.sqrt(3)
})();
var Ma = tm.createClass({superClass:X, init:function() {
  this.superInit();
  var a = tm.app.Label("GAME OVER");
  a.fillStyle = "red";
  a.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.addEventListener("enter", function() {
    this.tweener.clear().wait(5E3).call(function() {
      this.app.replaceScene(A())
    }.bind(this))
  })
}, update:function(a) {
  (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c")) && a.replaceScene(A())
}, draw:function(a) {
  a.clearColor("black")
}});
tm.createClass({superClass:X, init:function() {
  this.superInit()
}, update:n()});
(function() {
  N = tm.createClass({superClass:tm.app.CanvasElement, name:k, da:k, ca:k, ra:0, score:0, Nb:m, erase:m, star:1, gi:m, mc:j, xb:m, frame:0, Yd:k, direction:0, speed:0, za:k, init:function(b, c, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.xb = m;
      a.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var b = a.indexOf(this);
      -1 !== b && a.splice(b, 1)
    });
    this.mc = j;
    this.ca = b;
    this.da = b.da;
    this.score = 100;
    this.erase = m;
    this.Bh(d);
    c.na(this);
    this.altitude = this.Nb ? 1 : 10;
    this.Yd = {x:0, y:0}
  }, li:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, cj:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.xb === m && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.xb = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, c = this.y;
    this.Nb && (this.x += this.ca.ka.oa, this.y += this.ca.ka.pa);
    this.xb && (this.frame += 1);
    this.Yd.x = this.x - a;
    this.Yd.y = this.y - c
  }, Mb:function(a) {
    if(!this.xb) {
      return m
    }
    this.ra -= a;
    return 0 >= this.ra ? (a = R(0, 5), 2 > a ? this.ca.Qa("enemy destroy.") : 4 > a ? this.ca.Qa(this.name + " destroy.") : this.ca.Qa("ETR reaction gone."), this.erase && C.erase(j, this.ca.sa), this.dispatchEvent(tm.event.Event("destroy")), this.Na(), j) : m
  }, Na:function() {
    E.Gd(this.x, this.y, this.ca, this.Yd);
    this.remove()
  }, Xc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, ui:function() {
    return this.mc
  }, Bh:function(a) {
    this.name = a;
    a = N.Bg[a];
    this.ra = a[0];
    this.score = a[1];
    this.Nb = a[2];
    this.erase = a[3];
    this.star = a[4];
    a[5].radius !== i && (this.boundingRadius = a[5].radius);
    a[5].width !== i && (this.boundingWidth = a[5].width);
    a[5].height !== i && (this.boundingHeight = a[5].height);
    a[5].widthLeft !== i && (this.boundingWidthLeft = a[5].widthLeft);
    a[5].widthRight !== i && (this.boundingWidthRight = a[5].widthRight);
    a[5].heightTop !== i && (this.boundingHeightTop = a[5].heightTop);
    a[5].heightBottom !== i && (this.boundingHeightBottom = a[5].heightBottom)
  }, Be:function() {
    this.remove();
    this.ca.Of.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && E.Gd(this.x + W(-100, 100), this.y + W(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      E.Nf(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Df:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && E.Gd(this.x + W(-100, 100), this.y + W(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      E.Nf(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  N.Oc = function() {
    for(var b = [].concat(a), c = 0, d = b.length;c < d;c++) {
      b[c].remove()
    }
  };
  var a = N.Ma = []
})();
Fa = tm.createClass({superClass:N, gi:j, Bc:0, Td:k, init:function(a, b, c) {
  this.Td = b;
  this.superInit(a, this.Td[0], c);
  this.Bc = this.ra;
  this.addEventListener("added", function() {
    this.ca.Ub = this;
    this.ca.Di();
    this.tweener.wait(1E3).call(function() {
      this.ca.Rc = m
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.Ub = k;
    this.ca.ci();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.Ih()
    }.bind(this));
    a.addChildTo(this.ca.gb)
  })
}, Mb:function(a) {
  var b = this.ra;
  if(N.prototype.Mb.call(this, a)) {
    return this.ca.Rc = j, ya(), j
  }
  this.ra <= 0.55 * this.Bc && 0.55 * this.Bc < b ? (O.bf(this), this.clearEventListener("completeattack"), this.tweener.clear(), E.nc(this.x, this.y, this.ca), C.erase(j, this.ca.sa), this.Td[1].na(this)) : this.ra <= 0.1 * this.Bc && 0.1 * this.Bc < b && (O.bf(this), this.clearEventListener("completeattack"), this.tweener.clear(), E.nc(this.x, this.y, this.ca), C.erase(j, this.ca.sa), this.Td[2].na(this), J("voJacms"))
}});
(function() {
  N.Bg = {kujo:[2, 300, m, m, 1, {radius:24}], kiryu:[3, 400, m, m, 1, {radius:24}], natsuki:[5, 900, j, m, 1, {radius:24}], kise:[50, 15E3, j, m, 1, {radius:24}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, m, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], kurokawa:[35, 5E3, m, m, 5, {width:100, height:20}], akimoto:[250, 3E5, m, j, 10, {width:200, heightBottom:10, heightTop:60}], yukishiro:[750, 8E5, m, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, 
  m, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, m, j, 20, {width:300, height:80}], hyuga:[4E3, 2E6, m, j, 0, {width:240, height:80}]};
  N.Ja = tm.createClass({superClass:N, Aa:k, init:function(b, c) {
    this.superInit(b, c, "kujo");
    this.Aa = a("tex_stage1", 64, 64)
  }, update:function(a) {
    N.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.Aa.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(a)
  }});
  N.ha = tm.createClass({superClass:N, Aa:k, init:function(b, c) {
    this.superInit(b, c, "kiryu");
    this.Aa = a("tex_stage1", 64, 64)
  }, update:function(a) {
    N.prototype.update.call(this, a);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(a) {
    this.Aa.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(a)
  }});
  N.ea = tm.createClass({superClass:N, fc:k, qe:k, init:function(b, c) {
    this.superInit(b, c, "natsuki");
    this.fc = a("tex_tank1", 64, 64);
    this.qe = a("tex_tank1", 64, 64);
    this.jc = this.jc || 0;
    this.wb = this.wb || 0
  }, update:function(a) {
    N.prototype.update.call(this, a);
    for(a = this.jc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var c = this.wb;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.fc.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.qe.setFrameIndex(~~(16 * c / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.fc.draw(a);
    this.qe.draw(a)
  }, Na:function() {
    E.Qh(this.x, this.y, this.ca);
    this.remove()
  }});
  N.dc = tm.createClass({superClass:N, fc:k, init:function(b, c) {
    this.superInit(b, c, "kurokawa");
    this.Aa = a("tex_stage1", 128, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    E.nc(this.x, this.y, this.ca);
    this.remove()
  }});
  N.od = tm.createClass({superClass:N, init:function(b, c) {
    this.superInit(b, c, "akimoto");
    this.Aa = a("tex_stage1", 256, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    this.Be()
  }});
  N.ua = tm.createClass({superClass:N, fc:k, init:function(b, c) {
    this.superInit(b, c, "kise");
    this.Aa = a("tex_stage1", 128, 128).setFrameIndex(5)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    E.nc(this.x, this.y, this.ca);
    this.remove()
  }});
  N.rd = tm.createClass({superClass:N, Aa:k, init:function(a, c) {
    this.superInit(a, c, "hanasaki")
  }, Na:function() {
    E.nc(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.fe = tm.createClass({superClass:N, init:function(a, c) {
    this.superInit(a, c, "myodoin")
  }, Na:function() {
    E.nc(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.qb = tm.createClass({superClass:N, fc:k, init:function(b, c) {
    this.superInit(b, c, "kenzaki");
    this.Aa = a("tex_stage1", 128, 128).setFrameIndex(4)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    E.nc(this.x, this.y, this.ca);
    this.remove()
  }});
  N.de = tm.createClass({superClass:N, Aa:k, init:function(b, c) {
    this.superInit(b, c, "yukishiro");
    this.Aa = a("tex_stage1", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Na:function() {
    this.Be()
  }, draw:function(a) {
    this.Aa.draw(a)
  }});
  N.he = tm.createClass({superClass:Fa, fc:k, init:function(b, c) {
    this.superInit(b, c, "misumi");
    this.Aa = a("tex_stage1", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    this.Df()
  }});
  N.ge = tm.createClass({superClass:N, init:function(a, c) {
    this.superInit(a, c, "mishou")
  }, Na:function() {
    this.Be()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.Mi = tm.createClass({superClass:Fa, init:function(a, c) {
    this.superInit(a, c, "hyuga")
  }, Na:function() {
    this.Df()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  var a = tm.createClass({superClass:tm.app.Sprite, init:function(a, c, d) {
    this.superInit(a, c, d)
  }, draw:function(a) {
    var c = this.srcRect;
    a.context.drawImage(this._image.element, c.x, c.y, c.width, c.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }})
})();
(function() {
  O = tm.createClass({na:function(a) {
    a.on("destroy", function() {
      O.bf(this)
    })
  }});
  O.nb = function(a, c) {
    var d = C[c].Cd();
    a.on("enterframe", d);
    a.on("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  };
  O.bf = function(a) {
    var c = [].concat(a._listeners.enterframe);
    if(c) {
      for(var d = 0, g = c.length;d < g;d++) {
        c[d] && c[d].Ge && a.removeEventListener("enterframe", c[d])
      }
    }
  };
  O.mb = tm.createClass({superClass:O, init:function() {
    this.superInit()
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.on("launch", function() {
      var a = B.randf(64, 192);
      this.tweener.clear().wait(B.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
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
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.on("launch", function() {
      var a = B.randf(192, 320);
      this.tweener.clear().wait(B.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
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
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.on("launch", function() {
      var a = B.randf(448, 576);
      this.tweener.clear().wait(B.rand(10, 500)).move(this.x, a, 5 * a, "easeOutQuad").call(function() {
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
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.tweener.wait(B.rand(0, 1E3)).call(function() {
      this.speed = 6;
      O.nb(this, "basic1-0");
      this.on("enterframe", function() {
        this.y < this.da.y && this.xb && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = P(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.Xc() && this.xb && this.remove();
        if(22500 > Ga(this, this.da) || this.y > this.da.y + 150) {
          this.mc = m
        }
      })
    }.bind(a))
  }});
  O.ha = O.ha();
  var a = tm.createClass({superClass:O, init:function(a, c, d) {
    this.superInit();
    this.fi = a;
    this.ei = c;
    this.wc = d
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.speed = this.fi;
    a.jc = this.ei;
    this.wc && (a.wc = [].concat(this.wc));
    a.wb = 0;
    a.on("enter", function() {
      O.nb(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.jc) * this.speed;
      this.y += Math.sin(this.jc) * this.speed;
      this.xb && !this.Xc() && this.remove();
      for(this.wb = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.wb;) {
        this.wb += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.wb;) {
        this.wb -= 2 * Math.PI
      }
      this.mc = this.y < this.da.y && 4E4 < Ga(this, this.da);
      if(this.wc) {
        for(var a = 0;a < this.wc.length;a++) {
          var b = this.wc[a];
          b.frame === this.frame && this.tweener.to({jc:b.dir !== i ? b.dir : this.jc, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  O.sb = a(1, 0.25 * Math.PI);
  O.Ni = a(1, -1.75 * Math.PI);
  O.Kc = a(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  O.ja = a(1.6, 0.5 * Math.PI);
  O.tb = a(1.6, -0.5 * Math.PI);
  a = tm.createClass({superClass:O, hc:k, Hf:m, init:function(a, c) {
    this.superInit();
    this.hc = a;
    this.Hf = !!c
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.hc = this.hc;
    a.on("enter", function() {
      O.nb(this, this.hc)
    });
    a.on("enterframe", function() {
      this.xb && !this.Xc() && this.remove()
    });
    if(!this.Hf) {
      a.on("enterframe", function() {
        this.mc = this.y < this.da.y && 4E4 < Ga(this, this.da)
      })
    }
  }});
  O.cb = a("basic3-0", m);
  O.eb = a("basic3-1", m);
  O.rb = a("cannon2-0", j);
  O.kd = a("cannon3-0", j);
  O.$d = a("cannon5-0", j);
  a = tm.createClass({superClass:O, velocityY:0, hc:k, init:function(a, c) {
    this.superInit();
    this.velocityY = a;
    this.hc = c
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.velocityY = this.velocityY;
    a.za = [this.hc];
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      O.nb(this, this.za[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.xb && !this.Xc() && this.remove();
      this.mc = this.y < this.da.y
    })
  }});
  O.ec = a(0.5, "kurokawa-1");
  O.pf = a(0.3, "komachi-1");
  O.qf = a(0.5, "komachi-2");
  a = tm.createClass({superClass:O, za:k, init:function(a) {
    this.superInit();
    this.za = a
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.za = [].concat(this.za);
    a.Wd = m;
    a.Sc = m;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Wd = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * B.random() * Math.PI, g = B.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 192 + 0.5 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Wd === m || 0 >= this.ra) && 1500 < this.frame && this.Sc === m) {
        this.Sc = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Sc) {
        var a = this.za.shift();
        O.nb(this, a);
        this.za.push(a)
      }
    })
  }});
  O.de = a(["honoka-1"]);
  O.he = tm.createClass({superClass:O, za:k, init:function() {
    this.superInit();
    this.za = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.za = [].concat(this.za);
    a.Wd = m;
    a.Sc = m;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Wd = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * B.random() * Math.PI, g = B.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Sc) {
        var a = this.za.shift();
        O.nb(this, a);
        this.za.push(a)
      }
    })
  }});
  O.bh = O.he();
  O.ie = tm.createClass({superClass:O, za:k, init:function() {
    this.superInit();
    this.za = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, na:function(a) {
    O.prototype.na.call(this, a);
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
      if(!(0 >= this.ra)) {
        var a = this.za.shift();
        O.nb(this, a);
        this.za.push(a)
      }
    })
  }});
  O.ie = O.ie();
  O.je = tm.createClass({superClass:O, init:function() {
    this.superInit()
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(a));
    a.on("completeattack", function() {
      0 >= this.ra || O.nb(this, "nagisa-3-1")
    })
  }});
  O.je = O.je();
  O.ge = a(["mai-1", "mai-2"])
})();
var Z = N, $ = O;
xa = {"heri1-left":[{aa:Z.ha, ba:$.mb, x:48, y:-100}, {aa:Z.ha, ba:$.Ba, x:96, y:-100}, {aa:Z.ha, ba:$.mb, x:144, y:-100}, {aa:Z.ha, ba:$.Ba, x:192, y:-100}, {aa:Z.ha, ba:$.mb, x:240, y:-100}], "heri1-center":[{aa:Z.ha, ba:$.mb, x:144, y:-100}, {aa:Z.ha, ba:$.Ba, x:192, y:-100}, {aa:Z.ha, ba:$.mb, x:240, y:-100}, {aa:Z.ha, ba:$.Ba, x:288, y:-100}, {aa:Z.ha, ba:$.mb, x:336, y:-100}], "heri1-right":[{aa:Z.ha, ba:$.mb, x:240, y:-100}, {aa:Z.ha, ba:$.Ba, x:288, y:-100}, {aa:Z.ha, ba:$.mb, x:336, y:-100}, 
{aa:Z.ha, ba:$.Ba, x:384, y:-100}, {aa:Z.ha, ba:$.mb, x:432, y:-100}], "heri1-left2":[{aa:Z.ha, ba:$.Ba, x:48, y:-100}, {aa:Z.ha, ba:$.Qb, x:96, y:-100}, {aa:Z.ha, ba:$.Ba, x:144, y:-100}, {aa:Z.ha, ba:$.Qb, x:192, y:-100}, {aa:Z.ha, ba:$.Ba, x:240, y:-100}], "heri1-center2":[{aa:Z.ha, ba:$.Ba, x:144, y:-100}, {aa:Z.ha, ba:$.Qb, x:192, y:-100}, {aa:Z.ha, ba:$.Ba, x:240, y:-100}, {aa:Z.ha, ba:$.Qb, x:288, y:-100}, {aa:Z.ha, ba:$.Ba, x:336, y:-100}], "heri1-right2":[{aa:Z.ha, ba:$.Ba, x:240, y:-100}, 
{aa:Z.ha, ba:$.Qb, x:288, y:-100}, {aa:Z.ha, ba:$.Ba, x:336, y:-100}, {aa:Z.ha, ba:$.Qb, x:384, y:-100}, {aa:Z.ha, ba:$.Ba, x:432, y:-100}], "heri2-left":[{aa:Z.Ja, ba:$.ha, x:48, y:-100}, {aa:Z.Ja, ba:$.ha, x:96, y:-100}, {aa:Z.Ja, ba:$.ha, x:144, y:-100}, {aa:Z.Ja, ba:$.ha, x:192, y:-100}, {aa:Z.Ja, ba:$.ha, x:240, y:-100}], "heri2-center":[{aa:Z.Ja, ba:$.ha, x:144, y:-100}, {aa:Z.Ja, ba:$.ha, x:192, y:-100}, {aa:Z.Ja, ba:$.ha, x:240, y:-100}, {aa:Z.Ja, ba:$.ha, x:288, y:-100}, {aa:Z.Ja, ba:$.ha, 
x:336, y:-100}], "heri2-right":[{aa:Z.Ja, ba:$.ha, x:240, y:-100}, {aa:Z.Ja, ba:$.ha, x:288, y:-100}, {aa:Z.Ja, ba:$.ha, x:336, y:-100}, {aa:Z.Ja, ba:$.ha, x:384, y:-100}, {aa:Z.Ja, ba:$.ha, x:432, y:-100}], "tankRD-left":[{aa:Z.ea, ba:$.sb, x:78, y:-50}, {aa:Z.ea, ba:$.sb, x:28, y:-100}, {aa:Z.ea, ba:$.sb, x:-22, y:-150}, {aa:Z.ea, ba:$.sb, x:-72, y:-200}, {aa:Z.ea, ba:$.sb, x:-122, y:-250}], "tankRD-center":[{aa:Z.ea, ba:$.sb, x:222, y:-50}, {aa:Z.ea, ba:$.sb, x:172, y:-100}, {aa:Z.ea, ba:$.sb, 
x:122, y:-150}, {aa:Z.ea, ba:$.sb, x:72, y:-200}, {aa:Z.ea, ba:$.sb, x:22, y:-250}], "tankL-top":[{aa:Z.ea, ba:$.Kc, x:550, y:64}, {aa:Z.ea, ba:$.Kc, x:620, y:64}, {aa:Z.ea, ba:$.Kc, x:690, y:64}, {aa:Z.ea, ba:$.Kc, x:760, y:64}, {aa:Z.ea, ba:$.Kc, x:830, y:64}], "tank5-left":[{aa:Z.ea, ba:$.ja, x:48, y:-70}, {aa:Z.ea, ba:$.ja, x:48, y:-140}, {aa:Z.ea, ba:$.ja, x:48, y:-210}, {aa:Z.ea, ba:$.ja, x:48, y:-280}, {aa:Z.ea, ba:$.ja, x:48, y:-350}], "tank5-center":[{aa:Z.ea, ba:$.ja, x:240, y:-70}, {aa:Z.ea, 
ba:$.ja, x:240, y:-140}, {aa:Z.ea, ba:$.ja, x:240, y:-210}, {aa:Z.ea, ba:$.ja, x:240, y:-280}, {aa:Z.ea, ba:$.ja, x:240, y:-350}], "tank15-top":[{aa:Z.ea, ba:$.ja, x:48, y:-70}, {aa:Z.ea, ba:$.ja, x:48, y:-140}, {aa:Z.ea, ba:$.ja, x:48, y:-210}, {aa:Z.ea, ba:$.ja, x:48, y:-280}, {aa:Z.ea, ba:$.ja, x:48, y:-350}, {aa:Z.ea, ba:$.ja, x:240, y:-70}, {aa:Z.ea, ba:$.ja, x:240, y:-140}, {aa:Z.ea, ba:$.ja, x:240, y:-210}, {aa:Z.ea, ba:$.ja, x:240, y:-280}, {aa:Z.ea, ba:$.ja, x:240, y:-350}, {aa:Z.ea, ba:$.ja, 
x:432, y:-70}, {aa:Z.ea, ba:$.ja, x:432, y:-140}, {aa:Z.ea, ba:$.ja, x:432, y:-210}, {aa:Z.ea, ba:$.ja, x:432, y:-280}, {aa:Z.ea, ba:$.ja, x:432, y:-350}], "tank25-top":[{aa:Z.ea, ba:$.ja, x:48, y:-70}, {aa:Z.ea, ba:$.ja, x:48, y:-140}, {aa:Z.ea, ba:$.ja, x:48, y:-210}, {aa:Z.ea, ba:$.ja, x:48, y:-280}, {aa:Z.ea, ba:$.ja, x:48, y:-350}, {aa:Z.ea, ba:$.ja, x:240, y:-70}, {aa:Z.ea, ba:$.ja, x:240, y:-140}, {aa:Z.ea, ba:$.ja, x:240, y:-210}, {aa:Z.ea, ba:$.ja, x:240, y:-280}, {aa:Z.ea, ba:$.ja, x:240, 
y:-350}, {aa:Z.ea, ba:$.ja, x:432, y:-70}, {aa:Z.ea, ba:$.ja, x:432, y:-140}, {aa:Z.ea, ba:$.ja, x:432, y:-210}, {aa:Z.ea, ba:$.ja, x:432, y:-280}, {aa:Z.ea, ba:$.ja, x:432, y:-350}, {aa:Z.ea, ba:$.tb, x:144, y:710}, {aa:Z.ea, ba:$.tb, x:144, y:780}, {aa:Z.ea, ba:$.tb, x:144, y:850}, {aa:Z.ea, ba:$.tb, x:144, y:920}, {aa:Z.ea, ba:$.tb, x:144, y:990}, {aa:Z.ea, ba:$.tb, x:336, y:710}, {aa:Z.ea, ba:$.tb, x:336, y:780}, {aa:Z.ea, ba:$.tb, x:336, y:850}, {aa:Z.ea, ba:$.tb, x:336, y:920}, {aa:Z.ea, ba:$.tb, 
x:336, y:990}], "cannon-0":[{aa:Z.ua, ba:$.cb, x:48, y:-100}], "cannon-1":[{aa:Z.ua, ba:$.cb, x:96, y:-100}], "cannon-2":[{aa:Z.ua, ba:$.cb, x:144, y:-100}], "cannon-3":[{aa:Z.ua, ba:$.cb, x:192, y:-100}], "cannon-4":[{aa:Z.ua, ba:$.cb, x:240, y:-100}], "cannon-5":[{aa:Z.ua, ba:$.cb, x:288, y:-100}], "cannon-6":[{aa:Z.ua, ba:$.cb, x:336, y:-100}], "cannon-7":[{aa:Z.ua, ba:$.cb, x:384, y:-100}], "cannon-8":[{aa:Z.ua, ba:$.cb, x:432, y:-100}], "cannon-R0":[{aa:Z.ua, ba:$.cb, x:550, y:128}], "cannon-R1":[{aa:Z.ua, 
ba:$.cb, x:550, y:192}], "cannon-R2":[{aa:Z.ua, ba:$.cb, x:550, y:256}], "yayoi-0":[{aa:Z.ua, ba:$.eb, x:48, y:-100}], "yayoi-1":[{aa:Z.ua, ba:$.eb, x:96, y:-100}], "yayoi-2":[{aa:Z.ua, ba:$.eb, x:144, y:-100}], "yayoi-3":[{aa:Z.ua, ba:$.eb, x:192, y:-100}], "yayoi-4":[{aa:Z.ua, ba:$.eb, x:240, y:-100}], "yayoi-5":[{aa:Z.ua, ba:$.eb, x:288, y:-100}], "yayoi-6":[{aa:Z.ua, ba:$.eb, x:336, y:-100}], "yayoi-7":[{aa:Z.ua, ba:$.eb, x:384, y:-100}], "yayoi-8":[{aa:Z.ua, ba:$.eb, x:432, y:-100}], "yayoi-R0":[{aa:Z.ua, 
ba:$.eb, x:550, y:128}], "yayoi-R1":[{aa:Z.ua, ba:$.eb, x:550, y:192}], "yayoi-R2":[{aa:Z.ua, ba:$.eb, x:550, y:256}], "tsubomi-0":[{aa:Z.rd, ba:$.kd, x:96, y:-100}], "tsubomi-1":[{aa:Z.rd, ba:$.kd, x:240, y:-100}], "tsubomi-2":[{aa:Z.rd, ba:$.kd, x:384, y:-100}], "tsubomi-R0":[{aa:Z.rd, ba:$.kd, x:580, y:128}], "itsuki-0":[{aa:Z.fe, ba:$.$d, x:96, y:-100}], "itsuki-1":[{aa:Z.fe, ba:$.$d, x:240, y:-100}], "itsuki-2":[{aa:Z.fe, ba:$.$d, x:384, y:-100}], "makoto-0":[{aa:Z.qb, ba:$.rb, x:48, y:-100}], 
"makoto-1":[{aa:Z.qb, ba:$.rb, x:96, y:-100}], "makoto-2":[{aa:Z.qb, ba:$.rb, x:144, y:-100}], "makoto-3":[{aa:Z.qb, ba:$.rb, x:192, y:-100}], "makoto-4":[{aa:Z.qb, ba:$.rb, x:240, y:-100}], "makoto-5":[{aa:Z.qb, ba:$.rb, x:288, y:-100}], "makoto-6":[{aa:Z.qb, ba:$.rb, x:336, y:-100}], "makoto-7":[{aa:Z.qb, ba:$.rb, x:384, y:-100}], "makoto-8":[{aa:Z.qb, ba:$.rb, x:432, y:-100}], "makoto-R0":[{aa:Z.qb, ba:$.rb, x:580, y:128}], "fighter-m-0":[{aa:Z.dc, ba:$.ec, x:96, y:-192}], "fighter-m-1":[{aa:Z.dc, 
ba:$.ec, x:144, y:-192}], "fighter-m-2":[{aa:Z.dc, ba:$.ec, x:192, y:-192}], "fighter-m-3":[{aa:Z.dc, ba:$.ec, x:240, y:-192}], "fighter-m-4":[{aa:Z.dc, ba:$.ec, x:288, y:-192}], "fighter-m-5":[{aa:Z.dc, ba:$.ec, x:336, y:-192}], "fighter-m-6":[{aa:Z.dc, ba:$.ec, x:384, y:-192}], "komachi-0":[{aa:Z.od, ba:$.pf, x:144, y:-192}], "komachi-1":[{aa:Z.od, ba:$.pf, x:336, y:-192}], "komachi2-0":[{aa:Z.od, ba:$.qf, x:144, y:-192}], "komachi2-1":[{aa:Z.od, ba:$.qf, x:336, y:-192}], yukishiro:[{aa:Z.de, ba:$.de, 
x:240, y:-100}], misumi:[{aa:Z.he, ba:[$.bh, $.ie, $.je], x:240, y:-100, Ub:j}], mai:[{aa:Z.ge, ba:$.ge, x:780, y:128}]};
(function() {
  function a(a, b, c, d) {
    return f.action([d(a), f.repeat(c + "-1", [d(f.speed(b, "sequence"))])])
  }
  function b(a, b, c, d, g, l, p) {
    return f.action([f.fa(f.direction(b, "absolute"), d, g || D, l, p), f.repeat(a + "-1", [f.fa(f.direction("((" + c + ")-(" + b + "))/(" + a + "-1)", "sequence"), d, g || D, l, p)])])
  }
  function c(a, b, c, f, g) {
    return function(l) {
      return d(a, b, c, l, f, g, i, i)
    }
  }
  function d(a, b, c, d, g, l, p, r) {
    return f.action([f.fa(f.direction(b), d, g || D, l, p, r), f.repeat(a + "-1", [f.fa(f.direction("((" + c + ")-(" + b + "))/(" + a + "-1)", "sequence"), d, g || D, l, p, r)])])
  }
  function g(a) {
    return f.fa(f.direction(0), a || v, Q)
  }
  function l(a) {
    return f.fa(f.direction(0), a || v, D)
  }
  function t(a) {
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
  function p(a) {
    return f.wait(a + "*(1-$rank)*$hyperOff")
  }
  function U(a) {
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
  var f = q.qa;
  C["basic0-0"] = new q.la({top:f.action([l])});
  C["basic0-1"] = new q.la({top:f.action([a(w, -0.01, 8, c(3, -15, 15))])});
  C["basic1-0"] = new q.la({top:f.action([f.repeat(999, [p(20), l(v)])])});
  C["basic2-0"] = new q.la({top:f.action([f.repeat(999, [p(50), l(v)])])});
  C["basic3-0"] = new q.la({top:f.action([f.wait(20), f.repeat(999, [p(100), a(v, 0.1, 3, g)])])});
  C["basic3-1"] = new q.la({top:f.action([f.wait(20), f.repeat(999, [p(40), a(v, 0.1, 3, g)])])});
  C["cannon2-0"] = new q.la({top0:f.action([f.repeat(999, [p(20), b(6, "0-10+$loop.index*15", "0+10+$loop.index*15", r), b(6, "90-10+$loop.index*15", "90+10+$loop.index*15", r), b(6, "180-10+$loop.index*15", "180+10+$loop.index*15", r), b(6, "270-10+$loop.index*15", "270+10+$loop.index*15", r), p(20), b(6, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", v, Q), b(6, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", v, Q), b(6, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", v, Q), 
  b(6, "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", v, Q)])]), top1:f.action([f.repeat(999, [f.fa(f.direction("  0+$loop.index*5", "absolute"), z, I), f.fa(f.direction(" 90+$loop.index*5", "absolute"), z, I), f.fa(f.direction("180+$loop.index*5", "absolute"), z, I), f.fa(f.direction("270+$loop.index*5", "absolute"), z, I), f.fa(f.direction("  0-$loop.index*5", "absolute"), z, I), f.fa(f.direction(" 90-$loop.index*5", "absolute"), z, I), f.fa(f.direction("180-$loop.index*5", "absolute"), 
  z, I), f.fa(f.direction("270-$loop.index*5", "absolute"), z, I), p(5)])])});
  C["cannon3-0"] = new q.la({top0:f.action([f.repeat(999, [p(80), a(r, 0.01, 5, c(5, -30, 30, Q, f.offsetX(-60))), a(r, 0.01, 5, c(5, -30, 30, Q)), a(r, 0.01, 5, c(5, -30, 30, Q, f.offsetX(60)))])])});
  C["cannon4-0"] = new q.la({top0:f.action([p(20), f.repeat(999, [f.fa(r, ca), f.repeat(8, [p(10), f.zd("way", "$loop.count+1"), f.fa(f.direction("-12/2 - 12*($way-2)", "sequence"), r, ca), f.repeat("$way-1", [f.fa(f.direction(12, "sequence"), r, ca)])]), p(120)])])});
  C["cannon5-0"] = new q.la({top0:f.action([f.repeat(999, [f.fa(f.direction(-60), t, U(f.se("b"))), f.repeat(11, [p(5), f.fa(f.direction(10, "sequence"), t, U(f.se("b")))]), p(60)])]), b:f.action([f.wait(5), f.Gh(f.speed(0), 0), a(r, 0.1, 5, function(a) {
    return f.fa(f.direction(0, "relative"), a, D)
  }), f.ac])});
  C["kurokawa-1"] = new q.la({top0:f.action([f.repeat(999, [a(v, -0.01, 4, function(a) {
    return d(4, -45, 45, a, S, f.offsetX(-45), f.Ha(j))
  }), a(v, -0.01, 4, function(a) {
    return d(4, -45, 45, a, S, f.offsetX(45), f.Ha(j))
  }), p(90)])]), top1:f.action([f.repeat(999, [f.fa(f.direction(0), v, T, f.offsetX(-45), f.Ha(j)), p(45), f.fa(f.direction(0), v, T, f.offsetX(45), f.Ha(j)), p(45)])])});
  C["komachi-1"] = new q.la({top0:f.action([f.repeat(20, [f.fa(f.direction(210, "absolute"), z(1), D, f.offsetX(-40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(-40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(-40)), f.repeat(57, [p(8), f.fa(f.direction(-720 / 57, "sequence"), z(1), D, f.offsetX(-40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(-40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(-40))])])]), top1:f.action([f.repeat(20, [f.fa(f.direction(-210, 
  "absolute"), z(1), D, f.offsetX(40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(40)), f.repeat(57, [p(8), f.fa(f.direction(720 / 57, "sequence"), z(1), D, f.offsetX(40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(40)), f.fa(f.direction(120, "sequence"), z(1), D, f.offsetX(40))])])]), top2:f.action([f.repeat(70, [f.fa(f.direction(0), v(0), M, f.offsetX(-110), f.Ha(j)), f.repeat(3, [f.wait(3), f.fa(f.direction(0, 
  "sequence"), v(0), M, f.offsetX(-110), f.Ha(j))]), p(10), f.fa(f.direction(0), v(0), M, f.offsetX(110), f.Ha(j)), f.repeat(3, [f.wait(3), f.fa(f.direction(0, "sequence"), v(0), M, f.offsetX(110), f.Ha(j))]), p(10)])])});
  C["komachi-2"] = new q.la({top0:f.action([f.repeat(999, [a(v, -0.01, 4, function(a) {
    return f.action([d(4, -45, 45, a, S, f.offsetX(-45), f.Ha(j)), p(4)])
  }), a(v, -0.01, 4, function(a) {
    return f.action([p(4), d(4, -45, 45, a, S, f.offsetX(45), f.Ha(j))])
  }), p(90)])]), top1:f.action([f.repeat(999, [p(45), a(r, 0.01, 22, function(a) {
    return f.action([f.repeat("1 + $rand*6", [f.fa(f.direction("-5+$rand*10"), a, Oa)]), p(1)])
  }), p(180)])])});
  C["honoka-1"] = new q.la({top0:f.action([f.wait(60), f.repeat(10, [d(4, -40, 40, r, I, f.offsetX(0), f.offsetY(30)), p(30), d(5, -40, 40, z, I, f.offsetX(0), f.offsetY(30)), p(30)])]), top1:f.action([f.wait(60), f.repeat(5, [d(2, -2, 2, r(0.6), D), d(3, -3, 3, r(1), D), d(4, -4, 4, r(1.4), D), d(5, -5, 5, r(1.8), D), p(110)])]), top2:f.action([f.repeat(20, [b(12, -10, -170, z, M, f.offsetX(-110), f.offsetY(-70)), p(30)])]), top3:f.action([f.repeat(20, [b(12, 10, 170, z, M, f.offsetX(110), f.offsetY(-70)), 
  p(30)])])});
  C["nagisa-1-1"] = new q.la({top0:f.action([p(90), f.repeat(3, [f.zd("way", "5 + $loop.index*6"), a(w, 0.01, "3 + $loop.index*4", function(a) {
    return f.action([d("$way", -110, 110, a, D, f.offsetX(-190), f.offsetY(-20)), d("$way", -110, 110, a, D, f.offsetX(190), f.offsetY(-20)), f.wait(5)])
  }), p(60)]), p(60)])});
  C["nagisa-1-2"] = new q.la({top0:f.action([f.repeat(12, [d(15, -90, 90, z, D), p(40)])]), top1:f.action([f.repeat(3, [f.repeat(3, [d(5, -65, -55, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, -35, -25, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, -5, 5, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, 25, 35, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, 55, 65, r, M, f.offsetX(-190), f.offsetY(-20)), f.wait(2)]), p(60), f.repeat(3, [d(5, -65, -55, r, M, f.offsetX(190), f.offsetY(-20)), d(5, -35, -25, 
  r, M, f.offsetX(190), f.offsetY(-20)), d(5, -5, 5, r, M, f.offsetX(190), f.offsetY(-20)), d(5, 25, 35, r, M, f.offsetX(190), f.offsetY(-20)), d(5, 55, 65, r, M, f.offsetX(190), f.offsetY(-20)), f.wait(2)]), p(60)])])});
  C["nagisa-1-3"] = new q.la({top0:f.action([p(60), f.repeat(3, [f.fa(f.direction(-60), r, S, f.offsetX(-190), f.offsetY(-20)), f.repeat(20, [p(15), f.fa(f.direction(6, "sequence"), r, S, f.offsetX(-190), f.offsetY(-20))])])]), top1:f.action([p(80), f.repeat(3, [f.fa(f.direction(60), r, S, f.offsetX(190), f.offsetY(-20)), f.repeat(20, [p(15), f.fa(f.direction(-6, "sequence"), r, S, f.offsetX(190), f.offsetY(-20))])])]), top2:f.action([f.repeat(6, [f.repeat(3, [d(5, -60, -40, r, I, f.offsetX(-190), 
  f.offsetY(-20)), d(5, -20, -10, r, I, f.offsetX(-190), f.offsetY(-20)), d(5, 10, 20, r, I, f.offsetX(-190), f.offsetY(-20)), d(5, 40, 60, r, I, f.offsetX(-190), f.offsetY(-20)), f.wait(4)]), p(60), f.repeat(3, [d(5, -60, -40, r, I, f.offsetX(190), f.offsetY(-20)), d(5, -20, -10, r, I, f.offsetX(190), f.offsetY(-20)), d(5, 10, 20, r, I, f.offsetX(190), f.offsetY(-20)), d(5, 40, 60, r, I, f.offsetX(190), f.offsetY(-20)), f.wait(4)]), p(60)])])});
  C["nagisa-2-1"] = new q.la({top0:f.action([p(120), f.repeat(36, [b(6, "+$loop.index*10", "+$loop.index*10 + 360", z, Q, f.offsetX(-190), f.offsetY(-20)), b(6, "-$loop.index*10", "-$loop.index*10 + 360", z, Q, f.offsetX(190), f.offsetY(-20)), p(10)])]), top1:f.action([p(120), f.repeat(30, [b(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, T), b(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, T), p(12)])])});
  C["nagisa-2-2"] = new q.la({top0:f.action([p(120), f.repeat(30, [b(4, "+$loop.index*5", "+$loop.index*5 + 270", v, T), p(12)])]), top1:f.action([p(120), f.repeat(6, [b(9, 150, 130, z(0.8), D), b(9, 172, 188, z(0.8), D), b(9, 210, 230, z(0.8), D), p(30), b(9, 170, 150, z(0.8), D), b(9, 190, 210, z(0.8), D), p(30)])])});
  C["nagisa-2-3"] = new q.la({top:f.action([p(120), f.repeat(12, [b(23, 0, 360, z, I, f.offsetX(-190), f.offsetY(-20)), b(23, 0, 360, z, I), b(23, 0, 360, z, I, f.offsetX(190), f.offsetY(-20)), p(30)])])});
  C["nagisa-3-1"] = new q.la({top0:f.action([p(50), f.repeat(999, [a(v, 0.0010, 5, function(a) {
    return f.action([d(41, "-180", "+180", a, ca, f.offsetX(-190), f.offsetY(-20)), d(41, "-180", "+180", a, ca, f.offsetX(190), f.offsetY(-20))])
  }), p(50)])]), top1:f.action([f.repeat(999, [d(2, -2, 0, w, D), p(10), d(2, 0, 2, w, D), p(150)])])});
  C["mai-1"] = new q.la({top0:f.action([p(50), f.repeat(50, [f.zd("from", "+Math.cos($loop.index*0.15)*40-170"), b(3, "$from", "$from+60", t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, Q), f.ac]))), f.zd("from", "-Math.cos($loop.index*0.15)*40-10"), b(3, "$from", "$from-60", t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, Q), f.ac]))), p(8)])]), top1:f.action([p(50), f.repeat(12, [b(5, -50, 50, t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.ac]))), 
  b(5, -230, -130, t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.ac]))), p(16), b(6, -50, 50, t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.ac]))), b(6, -230, -130, t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.ac]))), p(16)])])});
  C["mai-2"] = new q.la({top:f.action([p(50), f.repeat(15, [f.fa(f.direction(-10), ca(f.se("fireChild", "$loop.index*10"))), p(8)])]), fireChild:f.action([p("40+$1"), a(r, 0.1, 5, function(a) {
    return f.fa(f.direction(-90, "absolute"), a, S)
  }), f.ac])});
  C.na = function() {
    for(var a = 0;2E3 > a;a++) {
      va.push(L())
    }
    a = C.Bd = tm.Va.cc.Qc;
    a.He = function(a) {
      return!(a instanceof L) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Ef = function(a) {
      var b = va.shift(0);
      if(b) {
        return b.ra = u.vg, ga.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.Jb ? (b.scaleX = 1, b.scaleY = 1, b.$b = m) : (b.scaleX = 0.8, b.scaleY = 1.5, b.$b = j), b.visible = a.visible === m ? m : j, b.Jb = !!a.Jb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.If = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.rc = 3.5;
    q.va.Oa.$rank = 0;
    q.va.Oa.$hyperOff = 1
  };
  C.erase = function(a, b) {
    for(var c = [].concat(ga), d = 0, f = c.length;d < f;d++) {
      a && sa(!!b).setPosition(c[d].x, c[d].y), c[d].Na()
    }
  };
  C.Oc = function() {
    for(var a = [].concat(ga), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  L = tm.createClass({superClass:tm.app.Sprite, ra:0, Jb:m, init:function() {
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
var P, R, Ha, W, Na;
P = function(a, b, c) {
  return a < b ? b : a > c ? c : a
};
Na = Math.PI / 180;
Ha = function(a) {
  return a * Na
};
W = function(a, b) {
  return window.Math.floor(Math.random() * (b - a + 1)) + a
};
R = function(a, b) {
  return window.Math.random() * (b - a) + a
};

