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
var q = {Gg:this};
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
    this.Bd = [];
    this.Id = [];
    if(b !== i) {
      for(var a in b) {
        b.hasOwnProperty(a) && (b[a].label = a, b[a] instanceof q.bb ? this.Ga.push(b[a]) : b[a] instanceof q.Qb ? this.Bd.push(b[a]) : b[a] instanceof q.vc && this.Id.push(b[a]))
      }
      b = 0;
      for(a = this.Ga.length;b < a;b++) {
        this.Ga[b].hb(this)
      }
      b = 0;
      for(a = this.Bd.length;b < a;b++) {
        this.Bd[b].hb(this)
      }
      b = 0;
      for(a = this.Id.length;b < a;b++) {
        this.Id[b].hb(this)
      }
    }
  };
  q.la.prototype.Qf = function(b) {
    return a(this.Ga, b)
  };
  q.la.prototype.ci = function() {
    for(var b = [], a = 0, d = this.Ga.length;a < d;a++) {
      var g = this.Ga[a];
      g.label && 0 === g.label.indexOf("top") && (b[b.length] = g.label)
    }
    return b
  };
  q.la.prototype.Uh = function(b) {
    var a;
    if(a = this.Qf(b)) {
      return a
    }
    h(Error("action labeled '" + b + "' is undefined."))
  };
  q.la.prototype.Vh = function(b) {
    return a(this.Bd, b)
  };
  q.la.prototype.Wh = function(b) {
    var a;
    if(a = this.Vh(b)) {
      return a
    }
    h(Error("bullet labeled '" + b + "' is undefined."))
  };
  q.la.prototype.Xh = function(b) {
    return a(this.Id, b)
  };
  q.la.prototype.Yh = function(b) {
    var a;
    if(a = this.Xh(b)) {
      return a
    }
    h(Error("fire labeled '" + b + "' is undefined."))
  };
  q.Qb = function() {
    this.root = this.label = k;
    this.direction = new q.Ib(0);
    this.speed = new q.Jb(1);
    this.Ga = [];
    this.Pa = {};
    this.ma = {}
  };
  q.Qb.prototype.clone = function(b) {
    var a = new q.Qb;
    a.label = this.label;
    a.root = this.root;
    a.Ga = this.Ga;
    a.direction = new q.Ib(b.La(this.direction.value));
    a.direction.type = this.direction.type;
    a.speed = new q.Jb(b.La(this.speed.value));
    a.speed.type = this.speed.type;
    a.Pa = this.Pa;
    a.ma = b.ma;
    return a
  };
  q.Qb.prototype.hb = function(b) {
    this.root = b;
    for(var a = 0, d = this.Ga.length;a < d;a++) {
      this.Ga[a].hb(b)
    }
  };
  q.kd = function(b) {
    this.root = k;
    this.label = b;
    this.Da = []
  };
  q.kd.prototype.clone = function(b) {
    var a = b.ma;
    b.ma = b.qe(this.Da);
    var d = this.root.Wh(this.label).clone(b);
    b.ma = a;
    return d
  };
  q.kd.prototype.hb = function(b) {
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
  q.uc = function(b) {
    this.Wa = "actionRef";
    this.label = b;
    this.root = k;
    this.Da = []
  };
  q.uc.prototype = new q.Fa;
  q.uc.prototype.clone = function() {
    var b = new q.bb;
    b.root = this.root;
    b.ob.push(this);
    return b
  };
  q.vc = function() {
    this.Wa = "fire";
    this.wa = this.speed = this.direction = this.root = this.label = k;
    this.Pa = new q.be
  };
  q.vc.prototype = new q.Fa;
  q.vc.prototype.hb = function(b) {
    this.root = b;
    this.wa && this.wa.hb(b)
  };
  q.ce = function(b) {
    this.Wa = "fireRef";
    this.label = b;
    this.Da = []
  };
  q.ce.prototype = new q.Fa;
  q.md = function() {
    this.Wa = "changeDirection";
    this.direction = new q.Ib;
    this.Sa = 0
  };
  q.md.prototype = new q.Fa;
  q.nd = function() {
    this.Wa = "changeSpeed";
    this.speed = new q.Jb;
    this.Sa = 0
  };
  q.nd.prototype = new q.Fa;
  q.jd = function() {
    this.Wa = "accel";
    this.Eb = new q.fe;
    this.Hb = new q.oe;
    this.Sa = 0
  };
  q.jd.prototype = new q.Fa;
  q.td = function(b) {
    this.Wa = "wait";
    this.value = b || 0
  };
  q.td.prototype = new q.Fa;
  q.ne = function() {
    this.Wa = "vanish"
  };
  q.ne.prototype = new q.Fa;
  q.rd = function() {
    this.Wa = "repeat";
    this.pg = 0;
    this.action = k;
    this.Da = []
  };
  q.rd.prototype = new q.Fa;
  q.rd.prototype.hb = function(b) {
    this.root = b;
    this.action && this.action.hb(b)
  };
  q.$d = function(b, a) {
    this.Wa = "bind";
    this.Ki = b;
    this.Sh = a
  };
  q.$d.prototype = new q.Fa;
  q.le = function(b, a) {
    this.Wa = "notify";
    this.Oh = b;
    this.Da = a || k
  };
  q.le.prototype = new q.Fa;
  q.Dg = new q.Fa;
  q.Ib = function(b) {
    this.type = "aim";
    this.value = b || 0
  };
  q.Jb = function(b) {
    this.type = "absolute";
    this.value = b === i ? 1 : b
  };
  q.fe = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  q.oe = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  q.be = function(b) {
    b = b || {};
    this.offsetX = b.offsetX || 0;
    this.offsetY = b.offsetY || 0;
    this.Ha = j;
    b.Ha !== i && (this.Ha = !!b.Ha)
  };
  q.sf = function(b) {
    this.value = b || 0
  };
  q.tf = function(b) {
    this.value = b || 0
  };
  q.jf = function(b) {
    this.value = !!b
  }
})();
q.va = function(a) {
  this.yf = a;
  this.ud = [];
  this.Tb = -1;
  this.Ka = k;
  this.ma = {}
};
q.va.prototype.next = function() {
  this.Tb += 1;
  if(this.Ka !== k) {
    var a = this.Ka.ob[this.Tb];
    if(a !== i) {
      if(a instanceof q.bb) {
        return this.Mc(), this.Ka = a, this.ma = this.pe(), this.next()
      }
      if(a instanceof q.uc) {
        return this.Mc(), this.Ka = this.yf.Uh(a.label), this.ma = this.qe(a.Da), this.next()
      }
      if(a instanceof q.rd) {
        return this.ma.Fc = 0, this.ma.bg = this.La(a.pg) | 0, this.Mc(), this.Ka = a.action.clone(), this.ma = this.pe(), this.next()
      }
      if(a instanceof q.vc) {
        var b = new q.vc;
        b.wa = a.wa.clone(this);
        a.direction !== k && (b.direction = new q.Ib(this.La(a.direction.value)), b.direction.type = a.direction.type);
        a.speed !== k && (b.speed = new q.Jb(this.La(a.speed.value)), b.speed.type = a.speed.type);
        b.Pa = a.Pa;
        return b
      }
      return a instanceof q.ce ? (this.Mc(), this.Ka = new q.bb, this.Ka.ob = [this.yf.Yh(a.label)], this.ma = this.qe(a.Da), this.next()) : a instanceof q.md ? (b = new q.md, b.direction.type = a.direction.type, b.direction.value = this.La(a.direction.value), b.Sa = this.La(a.Sa), b) : a instanceof q.nd ? (b = new q.nd, b.speed.type = a.speed.type, b.speed.value = this.La(a.speed.value), b.Sa = this.La(a.Sa), b) : a instanceof q.jd ? (b = new q.jd, b.Eb.type = a.Eb.type, b.Eb.value = this.La(a.Eb.value), 
      b.Hb.type = a.Hb.type, b.Hb.value = this.La(a.Hb.value), b.Sa = this.La(a.Sa), b) : a instanceof q.td ? new q.td(this.La(a.value)) : a instanceof q.ne ? a : a instanceof q.$d ? (this.ma["$" + a.Ki] = this.La(a.Sh), q.Dg) : a instanceof q.le ? a : k
    }
    this.Bh();
    if(this.Ka === k) {
      return k
    }
    if((a = this.Ka.ob[this.Tb]) && "repeat" == a.Wa) {
      this.ma.Fc++, this.ma.Fc < this.ma.bg && (this.Mc(), this.Ka = a.action.clone(), this.ma = this.pe())
    }
    return this.next()
  }
  return k
};
q.va.prototype.Mc = function() {
  this.ud.push({action:this.Ka, cursor:this.Tb, scope:this.ma});
  this.Tb = -1
};
q.va.prototype.Bh = function() {
  var a = this.ud.pop();
  a ? (this.Tb = a.cursor, this.Ka = a.action, this.ma = a.scope) : (this.Tb = -1, this.Ka = k, this.ma = {})
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
  (c = this.ud[this.ud.length - 1]) && (b.$loop = {index:c.scope.Fc, count:c.scope.Fc + 1, first:0 === c.scope.Fc, last:c.scope.Fc + 1 >= c.scope.bg});
  return(new Function("return " + a.split("$").join("this.$"))).apply(b)
};
q.va.prototype.qe = function(a) {
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
q.va.prototype.pe = function() {
  var a = {}, b;
  for(b in this.ma) {
    this.ma.hasOwnProperty(b) && (a[b] = this.ma[b])
  }
  return a
};
q.la.prototype.De = function(a) {
  var b = new q.va(this);
  if(a = this.Qf(a)) {
    b.Ka = a
  }
  return b
};
q.Qb.prototype.De = function() {
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
    q.qa.hasOwnProperty(b) && (q.Gg[a + b] = q.qa[b])
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
q.qa.te = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  d = new q.uc(a);
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
  l = new q.Qb;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Ib ? l.direction = arguments[g] : arguments[g] instanceof q.Jb ? l.speed = arguments[g] : arguments[g] instanceof q.bb ? l.Ga.push(arguments[g]) : arguments[g] instanceof q.uc ? l.Ga.push(arguments[g]) : arguments[g] instanceof Array ? l.Ga.push(q.qa.action(arguments[g])) : arguments[g] instanceof Object ? l.Pa = arguments[g] : "string" === typeof arguments[g] && (l.label = arguments[g])
  }
  return l
};
q.qa.Qi = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  d = new q.kd(a);
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
  l = new q.vc;
  for(g = 0;g < arguments.length;g++) {
    arguments[g] instanceof q.Ib ? l.direction = arguments[g] : arguments[g] instanceof q.Jb ? l.speed = arguments[g] : arguments[g] instanceof q.Qb ? l.wa = arguments[g] : arguments[g] instanceof q.kd ? l.wa = arguments[g] : arguments[g] instanceof q.be ? l.Pa = arguments[g] : arguments[g] instanceof q.sf ? l.Pa.offsetX = arguments[g].value : arguments[g] instanceof q.tf ? l.Pa.offsetY = arguments[g].value : arguments[g] instanceof q.jf && (l.Pa.Ha = arguments[g].value)
  }
  l.wa === i && h(Error("bullet (or bulletRef) is required."));
  return l
};
q.qa.Ui = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("label is required."));
  d = new q.ce(a);
  if(b instanceof Array) {
    d.Da = b
  }else {
    for(c = 1;c < arguments.length;c++) {
      d.Da.push(arguments[c])
    }
  }
  return d
};
q.qa.Ri = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("direction is required."));
  b === i && h(Error("term is required."));
  c = new q.md;
  c.direction = a instanceof q.Ib ? a : new q.Ib(a);
  c.Sa = b;
  return c
};
q.qa.Hh = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("speed is required."));
  b === i && h(Error("term is required."));
  c = new q.nd;
  c.speed = a instanceof q.Jb ? a : new q.Jb(a);
  c.Sa = b;
  return c
};
q.qa.Pi = function(a, b, c) {
  for(var d = 0, g = arguments.length;d < g;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  g = new q.jd;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof q.fe ? g.Eb = a : arguments[d] instanceof q.oe ? g.Hb = b : g.Sa = arguments[d]
  }
  g.Eb === i && g.Hb === i && h(Error("horizontal or vertical is required."));
  g.Sa === i && h(Error("term is required."));
  return g
};
q.qa.wait = function(a) {
  for(var b = 0, c = arguments.length;b < c;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  a === i && h(Error("value is required."));
  return new q.td(a)
};
q.qa.bc = function() {
  return new q.ne
};
q.qa.repeat = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("times is required."));
  b === i && h(Error("action is required."));
  d = new q.rd;
  d.pg = a;
  if(b instanceof q.bb || b instanceof q.uc) {
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
q.qa.Ad = function(a, b) {
  return new q.$d(a, b)
};
q.qa.cj = function(a, b) {
  return new q.le(a, b)
};
q.qa.direction = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.Ib(a);
  b !== i && (c.type = b);
  return c
};
q.qa.speed = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.Jb(a);
  b && (c.type = b);
  return c
};
q.qa.Eb = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.fe(a);
  b && (c.type = b);
  return c
};
q.qa.Hb = function(a, b) {
  for(var c = 0, d = arguments.length;c < d;c++) {
    arguments[c] instanceof Function && (arguments[c] = arguments[c]())
  }
  a === i && h(Error("value is required."));
  c = new q.oe(a);
  b && (c.type = b);
  return c
};
q.qa.Ti = function(a) {
  return new q.be(a)
};
q.qa.offsetX = function(a) {
  return new q.sf(a)
};
q.qa.offsetY = function(a) {
  return new q.tf(a)
};
q.qa.Ha = function(a) {
  return new q.jf(a)
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
  tm.Va.dc = tm.createClass({init:function(b) {
    b || h(Error("argument is invalid.", b));
    this.vf = b
  }, Dd:function(b, a) {
    var c = this.vf.ci();
    if(a === i && 0 < c.length) {
      for(var d = [], v = 0, r = c.length;v < r;v++) {
        d[d.length] = this.wf(b, c[v])
      }
      for(var z = function() {
        for(var b = d.length;b--;) {
          d[b].call(this)
        }
        z.ze == d.length && (z.Qc = j, this.dispatchEvent(tm.event.Event("completeattack")))
      }, v = d.length;v--;) {
        d[v].Sd = z
      }
      z.ze = 0;
      z.Gf = function() {
        this.ze++
      };
      z.ze = 0;
      z.Qc = m;
      z.He = j;
      return z
    }
    return this.wf(b, a)
  }, wf:function(b, a) {
    function c() {
      c.ia += 1;
      this.ia = c.ia;
      var b = c.Cd, a = c.Ah;
      if(a) {
        if(c.ia < c.xe ? c.direction += c.Ac : c.ia === c.xe && (c.direction = c.Xb), c.ia < c.ye ? c.speed += c.gd : c.ia === c.ye && (c.speed = c.Jc), c.ia < c.se ? (c.rc += c.xd, c.tc += c.yd) : c.ia === c.se && (c.rc = c.vd, c.tc = c.wd), this.x += Math.cos(c.direction) * c.speed * b.sc, this.y += Math.sin(c.direction) * c.speed * b.sc, this.x += c.rc * b.sc, this.y += c.tc * b.sc, b.Ie(this)) {
          if(b.ac || this.ac) {
            this.rotation = (c.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = c.speed
          }
          if(!(c.ia < c.qg || c.Qc)) {
            for(var d;d = c.rg.next();) {
              switch(d.Wa) {
                case "fire":
                  a.xh.call(this, d, b, c, a);
                  break;
                case "wait":
                  b = 0;
                  c.qg = "number" === typeof d.value ? c.ia + d.value : 0 !== (b = ~~d.value) ? c.ia + b : c.ia + eval(d.value);
                  return;
                case "changeDirection":
                  a.sh.call(this, d, b, c);
                  break;
                case "changeSpeed":
                  a.th.call(this, d, c);
                  break;
                case "accel":
                  a.qh.call(this, d, c);
                  break;
                case "vanish":
                  this.remove();
                  break;
                case "notify":
                  a.yh.call(this, d)
              }
            }
            c.Qc = j;
            c.Sd ? c.Sd.Gf() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }else {
          this.remove(), c.Qc = j, c.Sd ? c.Sd.Gf() : this.dispatchEvent(tm.event.Event("completeattack"))
        }
      }
    }
    b = function(b) {
      var a = {}, c = tm.Va.dc.Rc, d;
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
    "string" === typeof a ? c.rg = this.vf.De(a) : a instanceof q.Qb ? c.rg = a.De() : (window.console.error(b, a), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    c.Ah = this;
    c.Cd = b;
    c.qg = -1;
    c.Qc = m;
    c.direction = 0;
    c.Yf = 0;
    c.speed = 0;
    c.$f = 0;
    c.rc = 0;
    c.tc = 0;
    c.Ac = 0;
    c.Xb = 0;
    c.xe = -1;
    c.gd = 0;
    c.Jc = 0;
    c.ye = -1;
    c.xd = 0;
    c.vd = 0;
    c.yd = 0;
    c.wd = 0;
    c.se = -1;
    c.ia = -1;
    c.He = j;
    return c
  }, wh:function(b) {
    function a() {
      this.x += a.Kf;
      this.y += a.Lf;
      a.Cd.Ie(this) || this.remove()
    }
    b = function(b) {
      var a = {}, c = tm.Va.dc.Rc, d;
      for(d in c) {
        c.hasOwnProperty(d) && (a[d] = c[d])
      }
      for(d in b) {
        b.hasOwnProperty(d) && (a[d] = b[d])
      }
      return a
    }(b);
    b.target || h(Error("target is undefined in config."));
    a.Cd = b;
    a.direction = 0;
    a.speed = 0;
    a.Kf = 0;
    a.Lf = 0;
    a.He = j;
    return a
  }, xh:function(a, c, d, w) {
    if(this.vi === i || this.nc) {
      var v = {label:a.wa.label}, r;
      for(r in a.wa.Pa) {
        v[r] = a.wa.Pa[r]
      }
      if(v = c.Ff(v)) {
        w = (r = 0 === a.wa.Ga.length) ? w.wh(c) : w.Dd(c, a.wa);
        var z = this, p = {x:this.x + a.Pa.offsetX, y:this.y + a.Pa.offsetY};
        d.Yf = w.direction = function(r) {
          var v = eval(r.value) * Math.DEG_TO_RAD;
          switch(r.type) {
            case "aim":
              return c.target ? a.Pa.Ha ? b(p, c.target) + v : b(z, c.target) + v : v - Math.PI / 2;
            case "absolute":
              return v - Math.PI / 2;
            case "relative":
              return d.direction + v;
            default:
              return d.Yf + v
          }
        }(a.direction || a.wa.direction);
        d.$f = w.speed = function(b) {
          var a = eval(b.value);
          switch(b.type) {
            case "relative":
              return d.speed + a;
            case "sequence":
              return d.$f + a;
            default:
              return a
          }
        }(a.speed || a.wa.speed);
        v.x = p.x;
        v.y = p.y;
        r && (w.Kf = Math.cos(w.direction) * w.speed * c.sc, w.Lf = Math.sin(w.direction) * w.speed * c.sc);
        v.ac = !!v.ac;
        if(c.ac || v.ac) {
          v.rotation = (w.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, v.speed = w.speed
        }
        v.addEventListener("enterframe", w);
        c.Af ? c.Af.addChild(v) : this.parent && this.parent.addChild(v)
      }
    }
  }, sh:function(c, d, t) {
    var w = eval(c.direction.value) * Math.DEG_TO_RAD, v = eval(c.Sa);
    switch(c.direction.type) {
      case "aim":
        c = d.target;
        if(!c) {
          return
        }
        t.Xb = b(this, c) + w;
        t.Ac = a(t.Xb - t.direction) / v;
        break;
      case "absolute":
        t.Xb = w - Math.PI / 2;
        t.Ac = a(t.Xb - t.direction) / v;
        break;
      case "relative":
        t.Xb = t.direction + w;
        t.Ac = a(t.Xb - t.direction) / v;
        break;
      case "sequence":
        t.Ac = w, t.Xb = t.direction + t.Ac * (v - 1)
    }
    t.xe = t.ia + v
  }, th:function(b, a) {
    var c = eval(b.speed.value), d = eval(b.Sa);
    switch(b.speed.type) {
      case "absolute":
        a.Jc = c;
        a.gd = (a.Jc - a.speed) / d;
        break;
      case "relative":
        a.Jc = c + a.speed;
        a.gd = (a.Jc - a.speed) / d;
        break;
      case "sequence":
        a.gd = c, a.Jc = a.speed + a.gd * d
    }
    a.ye = a.ia + d
  }, qh:function(b, a) {
    var c = eval(b.Sa);
    a.se = a.ia + c;
    if(b.Eb) {
      var d = eval(b.Eb.value);
      switch(b.Eb.type) {
        case "absolute":
        ;
        case "sequence":
          a.xd = (d - a.rc) / c;
          a.vd = d;
          break;
        case "relative":
          a.xd = d, a.vd = (d - a.rc) * c
      }
    }else {
      a.xd = 0, a.vd = a.rc
    }
    if(b.Hb) {
      switch(d = eval(b.Hb.value), b.Hb.type) {
        case "absolute":
        ;
        case "sequence":
          a.yd = (d - a.tc) / c;
          a.wd = d;
          break;
        case "relative":
          a.yd = d, a.wd = (d - a.tc) * c
      }
    }else {
      a.yd = 0, a.wd = a.tc
    }
  }, yh:function(a) {
    var b = tm.event.Event(a.Oh);
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
  tm.Va.Lh = function(a) {
    var b = tm.app.Sprite(c, 8, 8);
    b.label = a.label;
    return b
  };
  var d = k;
  tm.Va.Jf = function(a) {
    if(d === k) {
      if(!a.getRoot().app) {
        return j
      }
      d = a.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= a.x && a.x < d.width && 0 <= a.y && a.y < d.height
  };
  tm.Va.Si = function() {
    return j
  };
  tm.Va.dc.Rc = {Ff:tm.Va.Lh, Ie:tm.Va.Jf, ej:0, ac:m, sc:2, target:k};
  q.la.prototype.Dd = function(a) {
    return tm.Va.dc(this).Dd(a)
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
var s = k, u, A, B, C, E, F, ba, da, ea, fa, ha, ia, ja, G, H, J, ka, la, ma, na, oa, pa, qa, ra, sa, ta, ua, wa, xa, ya, za, Aa, Ba, K, Ca, Da, L, N, Ea, Fa, O, aa = tm.createClass({superClass:tm.app.CanvasApp, Md:0, Yi:0, Nc:3, qc:3, Mf:1, ca:k, init:function(a) {
  s !== k && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(a);
  s = this;
  this.resize(480, 640).fitWindow();
  this.fps = u.Fg;
  this.background = "rgba(0,0,0,0)";
  this.ef = [];
  this.keyboard = tm.input.Keyboard(window);
  this.replaceScene(tm.app.LoadingScene({assets:{tex0:"assets/tex0.png", tex1:"assets/tex1.png", tex_stage1:"assets/tex_stage1.png", tex_tank1:"assets/tex_tank1.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explodeL:"assets/explode2.png", 
  shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", bgm1:"assets2/nc54073.mp3", bgm2:"assets2/nc28687.mp3", bgmBoss:"assets2/nc29206.mp3", bgmResult:"assets2/nc54077.mp3", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", 
  "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_battle_ship.mp3", 
  "sound/voWarning":"assets/vo_warning.mp3", star:"assets/star.png"}, nextScene:function() {
    this.zh();
    return A()
  }.bind(this)}))
}, update:function() {
  for(var a = [].concat(this.ef), b = 0;b < a.length;b++) {
    a[b].frame === this.frame ? a[b].fn() : this.ef.erase(a[b])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, zh:function() {
  B.na(12345);
  C.na();
  E.na();
  this.ca = F()
}, Qh:function() {
  this.stop();
  tm.social.Nineleap.postRanking(this.Md, "")
}, ef:k, gj:function(a, b) {
  timeoutTasks.push({frame:this.frame + b, fn:a})
}});
tm.app.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
function Ga(a, b) {
  return(a.x - b.x) * (a.x - b.x) + (a.y - b.y) * (a.y - b.y)
}
;u = {Fg:60, $g:0, lf:[1E9, 1E10], bh:3E3, nf:3, mf:[3, 2, 1], ug:[6, 4, 2], uf:1, Zg:0.1, of:1, ah:0.25, Li:1, Mi:0.25, tg:4, Rg:0.005, Ng:0.01, Og:0.001, Jg:0.015, Kg:0.002, Tg:0.001, Vg:0.01, Sg:0, Qg:0, Pg:0, Mg:0.03, Lg:0.004, Ug:0, Wg:0, Xg:20, de:10, od:800, Ig:0.25, Hg:0.1, Yg:[1, 3, 5, 10, 18, 26, 42, 66, 90, 130, 200], zg:0.02, Ag:0.5, yg:0.01, kf:1E3, xg:10, vg:1, ph:1E3, oh:100, nh:0, mh:0, lh:1E3, kh:100, Eg:0.5, Bg:22500, wg:50, eh:10, hf:m, sg:j, ih:1E3, jh:2E3, fh:4E3, gh:1E4, hh:2E7};
(function() {
  var a = k, b = {"0":{x:1, y:0}, 45:{x:0.7, y:-0.7}, 90:{x:0, y:-1}, 135:{x:-0.7, y:-0.7}, 180:{x:-1, y:0}, 225:{x:-0.7, y:0.7}, 270:{x:0, y:1}, 315:{x:0.7, y:0.7}};
  ba = tm.createClass({superClass:tm.app.Sprite, type:0, style:0, $a:0, Mb:j, Gc:m, ca:k, speed:0, Ya:k, zc:k, dg:k, Nd:k, Pb:k, Ee:k, Lb:k, Fe:k, Ge:k, frame:0, init:function(b, d, g) {
    this.superInit("fighter", 64, 64);
    this.ca = b;
    this.type = d;
    this.style = g;
    tm.Va.dc.Rc.target = this;
    this.speed = [6, 5, 4.5][d];
    this.boundingRadius = 3;
    this.altitude = 10;
    this.zc = this.dg = da(d, 100);
    this.Nd = da(3, 100);
    this.Pb = ea(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Pb.visible = m;
    this.vh();
    this.Ya = this.uh();
    1 === this.style && (this.Ya = [this.Ya[1], this.Ya[2]]);
    this.Lb = tm.app.CanvasElement().addChildTo(this);
    d = 0;
    for(g = this.Ya.length;d < g;d++) {
      var l = this.Ya[d];
      fa(this, l).setPosition(l.x, l.y).addChildTo(this.Lb)
    }
    this.ki = tm.app.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.ki.blendMode = "lighter";
    this.Fe = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Fe.blendMode = "lighter";
    this.Fe.update = function() {
      this.rotation += 2;
      this.visible = 0 < b.xa && !b.sa
    };
    this.Ge = tm.app.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Ge.blendMode = "lighter";
    this.Ge.update = function() {
      this.rotation -= 2;
      this.visible = 0 < b.xa && !b.sa
    };
    this.Wc = tm.app.CanvasElement(80, 80).addChildTo(this);
    this.Wc.blendMode = "lighter";
    this.Wc.rotation = -90;
    this.Wc.strokeStyle = "rgba(180,180,255,0.4)";
    this.Wc.update = function() {
      this.visible = b.sa
    };
    this.Wc.draw = function(a) {
      a.lineCap = "round";
      var d = b.Dc / u.od;
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
    this.ei = tm.app.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.ei.update = function() {
      this.visible = b.sa
    };
    a === k && (a = ha(this.ca.ka))
  }, uh:function() {
    if(0 === this.type) {
      return[{x:0, mc:0, y:40, d:0, ib:j, fb:-0.7, v:j}, {x:0, mc:0, y:40, d:0, ib:j, fb:0.5, v:j}, {x:0, mc:0, y:40, d:0, ib:j, fb:-0.5, v:j}, {x:0, mc:0, y:40, d:0, ib:j, fb:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, ib:m, fb:-0.7, v:j}, {x:-40, y:40, d:0.1, ib:m, fb:-0.5, v:j}, {x:40, y:40, d:0.1, ib:j, fb:0.5, v:j}, {x:70, y:20, d:0.1, ib:j, fb:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, ib:m, fb:-0.7, v:j}, {x:-30, y:20, d:0.4, ib:m, fb:-0.5, v:j}, {x:30, y:20, d:0.4, ib:j, fb:0.5, v:j}, {x:60, y:40, d:0.6, ib:j, fb:0.7, v:j}]
    }
  }, vh:function() {
    this.Ee = tm.app.Sprite("tex0", 20, 20).addChildTo(this);
    this.Ee.setFrameIndex(5);
    this.Ee.update = function(a) {
      a = 1.2 + 0.15 * Math.sin(0.2 * a.frame);
      this.scale.set(a, a)
    }
  }, $b:-1, Bc:m, qb:m, update:function(c) {
    this.visible = this.Gc ? 0 === c.frame / 2 % 2 : j;
    var d = c.keyboard;
    if(this.Mb) {
      var g = d.getKeyAngle();
      g !== k && (g = b[g], this.x += g.x * this.speed * (this.qb ? 0.75 : 1), this.y += g.y * this.speed * (this.qb ? 0.75 : 1));
      this.x = P(this.x, 15, 465);
      this.y = P(this.y, 15, 625);
      var l = d.getKey("c"), g = d.getKey("z");
      this.$b = l ? this.$b + 1 : this.$b - 1;
      this.$b = P(this.$b, -1, 10);
      this.qb = g && l || 10 === this.$b;
      l = this.ca.sa ? 3 : 5;
      this.Bc = !this.qb && (0 <= this.$b || g) && 0 === c.frame % l;
      g && (this.$b = 0);
      this.Pb.x = this.x;
      this.Pb.y = this.y - 40;
      d.getKeyDown("x") && (0 < this.ca.xa && !this.ca.sa ? (this.ca.Gi(), ia(this).addChildTo(this.ca)) : !this.ca.Ec && 0 < this.ca.wb && (this.Xa = P(this.Xa - 2, 0, 1), q.va.Oa.$rank = P(q.va.Oa.$rank - 0.02, 0, 1), ja(this, this.ca).setPosition(P(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.ca)))
    }else {
      this.qb = this.Bc = m
    }
    this.Bc && (g = Math.sin(0.2 * c.frame), l = this.zc.fa(this.x - 7 - 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca), l = this.zc.fa(this.x + 7 + 6 * g, this.y - 5, -90), l !== k && l.addChildTo(this.ca));
    if(this.qb) {
      g = 0;
      for(l = this.Ya.length;g < l;g++) {
        this.Ya[g].v = m
      }
      this.Lb.rotation = 0
    }else {
      this.Pb.visible = m;
      g = 0;
      for(l = this.Ya.length;g < l;g++) {
        this.Ya[g].v = j
      }
    }
    this.Kh(d);
    this.rh(d, c.frame);
    0 === c.frame % 2 && (a.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.ca), a.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.ca));
    this.frame = c.frame
  }, Nb:function() {
    this.qb = this.Bc = m;
    this.ca.Fd();
    this.ca.Ia = 0;
    this.ca.Ca = 0;
    this.ca.ya = 0
  }, Kh:function(a) {
    if(0 === this.type) {
      for(a = this.Ya.length;this.Ya[--a] !== i;) {
        var b = this.Ya[a];
        0 === a ? b.x = b.mc + 60 * Math.cos(0.1 * this.frame) : 1 === a ? b.x = b.mc + -60 * Math.cos(0.1 * this.frame) : 2 === a ? b.x = b.mc + 60 * Math.sin(0.1 * this.frame) : 3 === a && (b.x = b.mc + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Lb, b.rotation = this.Mb && a.getKey("left") ? Math.max(b.rotation - 3, -50) : this.Mb && a.getKey("right") ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0)
    }
  }, rh:function(a, b) {
    this.Mb && a.getKey("left") ? this.$a = P(this.$a - 0.2, -3, 3) : this.Mb && a.getKey("right") ? this.$a = P(this.$a + 0.2, -3, 3) : 0 > this.$a ? this.$a = P(this.$a + 0.2, -3, 3) : 0 < this.$a && (this.$a = P(this.$a - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.$a) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(b / 2) % 3) + ~~this.$a) : 2 === this.type && this.setFrameIndex(31 + ~~this.$a);
    return b
  }});
  fa = tm.createClass({superClass:tm.app.AnimationSprite, lc:k, da:k, init:function(a, b) {
    this.superInit(tm.app.SpriteSheet({image:"tex1", frame:{width:32, height:32}, animations:{anim0:{frames:[136, 137, 138, 152, 153, 154], next:"anim0", frequency:3}, anim1:{frames:[137, 138, 152, 153, 154, 136].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.lc = b;
    this.da = a;
    this.altitude = 10;
    this.gotoAndPlay(b.ib ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.lc.v) {
      this.x = this.lc.x * (this.da.ca.sa ? 1.5 : 1);
      this.y = this.lc.y * (this.da.ca.sa ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.lc.d * this.lc.fb);
      var d = this.parent.localToGlobal(this);
      this.lc.v && 0 === b.frame % 2 && a.clone(40).setPosition(d.x, d.y).addChildTo(b.ca);
      this.da.Bc && (d = this.da.zc.fa(d.x, d.y, this.parent.rotation + this.rotation - 90), d !== k && d.addChildTo(b.ca))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var a = k;
  G = tm.createClass({superClass:tm.app.Sprite, speed:0, jc:0, Fh:1, Vf:0, Za:j, init:function(b) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.jc = u.uf;
    a === k && (a = H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    b !== i && this.fd(b)
  }, update:function() {
    this.x += this.gf;
    this.y += this.hd;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, fd:function(a) {
    this.setFrameIndex(a, 64, 64);
    3 === a ? (this.speed = 45, this.boundingRadius = 48) : (this.speed = 30, this.boundingRadius = 32)
  }, Kd:function(b) {
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
  G.Pc = function() {
    for(var a = [].concat(b), d = 0, g = a.length;d < g;d++) {
      a[d].remove()
    }
  };
  var b = G.Ma = [];
  da = tm.createClass({Zb:k, Uf:m, init:function(a, d) {
    this.Uf = 3 === a;
    this.Zb = [];
    for(var g = 0;g < d;g++) {
      var l = G(a), t = this;
      l.addEventListener("added", function() {
        this.ra = u.eh;
        b.push(this)
      });
      l.addEventListener("removed", function() {
        var a = b.indexOf(this);
        -1 !== a && b.splice(a, 1);
        t.Zb.push(this)
      });
      this.Uf && l.addEventListener("enterframe", function(a) {
        this.setScale((this.Fh + this.Vf) * (0 === a.app.frame % 2 ? 1 : 1.2))
      });
      this.Zb.push(l)
    }
  }, fa:function(a, b, g) {
    var l = this.Zb.pop();
    if(l === i) {
      return k
    }
    var t = Ha(g);
    l.gf = Math.cos(t) * l.speed;
    l.hd = Math.sin(t) * l.speed;
    l.setPosition(a, b);
    l.rotation = g + 90;
    return l
  }, Ic:function(a) {
    for(var b = this.Zb.length;this.Zb[--b] !== i;) {
      this.Zb[b].jc = u.uf + u.Zg * a, this.Zb[b].Vf = 0.2 * a
    }
  }})
})();
ea = tm.createClass({superClass:tm.app.Sprite, da:k, ca:k, vb:0, frame:0, og:k, color:k, Cf:0, ve:0, Gh:m, head:k, Rf:k, Bf:k, Za:j, jc:u.of, Hc:k, init:function(a, b) {
  this.da = a;
  this.ca = a.ca;
  this.Cf = 0 === this.da.style ? 1 : 1.5;
  this.ve = 0 === this.da.style ? 50 : 75;
  var c = this;
  this.og = b;
  this.superInit(b.redBody, this.ve, 100);
  this.boundingHeightBottom = 1;
  this.fj = 0;
  this.origin.y = 1;
  var d = this.Bf = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.Rf = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.app.AnimationSprite(tm.app.SpriteSheet({image:b.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:2}, green:{frames:[4, 5, 6, 7], next:"green", frequency:2}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:2}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:2}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = c.vb - c.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < c.vb
  };
  this.fd(["red", "green", "blue"][this.da.type]);
  this.Ic(0)
}, fd:function(a) {
  this.color = a;
  this.image = tm.asset.AssetManager.get(this.og[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.Bf.gotoAndPlay(this.color);
  this.Rf.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.Hc = k;
  return this
}, Ic:function(a) {
  this.boundingWidth = this.width = this.ve + 30 * a / u.de;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.jc = this.Cf * u.of + u.ah * a;
  0 === a ? this.fd(["red", "green", "blue"][this.da.type]) : this.fd("hyper")
}, Kd:function(a, b) {
  this.Hc === k && this.Hf();
  b = b || this.vb;
  for(var c = 0;c < a;c++) {
    var d = this.Hc.clone().setPosition(this.x, b).addChildTo(this.ca), g = R(8, 14), l = R(0, Math.PI);
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
}, ai:function(a, b, c) {
  this.Hc === k && this.Hf();
  for(var d = 0;d < a;d++) {
    var g = this.Hc.clone().setPosition(b, c).addChildTo(this.ca), l = R(12, 20), t = R(0, Math.PI);
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
}, Hf:function() {
  this.Hc = "hyper" === this.color ? H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : H(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(a) {
  (this.visible = this.da.qb) ? (this.vb = Math.max(0, this.vb - 40), this.height = this.y - this.vb, 0 === a.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.vb = this.y - 40;
  this.Gh = this.visible
}, draw:function(a) {
  var b = this.srcRect, c = this._image.element;
  b.x = b.width * this.frame;
  a.context.drawImage(c, b.x, b.height - this.height, b.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, Xi:function() {
  return this.vb
}, Bi:function(a) {
  this.vb = a;
  this.head.update()
}});
ea.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.vb
});
(function() {
  ja = tm.createClass({superClass:tm.app.Object2D, Za:j, ca:k, init:function(b, c) {
    this.superInit();
    this.da = b;
    this.ca = c;
    this.jg = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.jg.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.jg));
    this.zf();
    a === k && (a = H(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.ia = 0;
    this.cd = 1;
    this.addEventListener("added", function() {
      this.ca.Ec = j;
      this.da.Gc = j;
      this.ca.wb -= 1;
      this.ca.Fd();
      this.ca.Qa("drop BOMBER!!", j);
      J("bomb");
      J("voBomb")
    });
    this.addEventListener("removed", function() {
      this.ca.Ec = m;
      this.da.Gc = m
    })
  }, zf:function() {
    this.pb = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.pb.gotoAndPlay("animation");
    this.pb.blendMode = "lighter";
    this.pb.setScale(0.1, 0.1);
    this.pb.tweener.clear().to({scaleX:1, scaleY:1}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = R(0.9, 1.1)
      }
    }.bind(this.pb))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.cd + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.ia;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.ia += 3.6, this.cd = -1) : (this.b = 8, this.ia += 1.8, this.cd = 1)
  }});
  ka = tm.createClass({superClass:ja, init:function(a, c) {
    this.superInit(a, c);
    u.sg && this.addEventListener("added", function() {
      this.ca.wb = 0
    })
  }, zf:function() {
    this.pb = tm.app.AnimationSprite(tm.app.SpriteSheet({image:"bomb", frame:{width:280, height:280}, animations:{animation:{frames:Array.range(0, 8), next:"animation", frequency:3}}}), 400, 400).addChildTo(this);
    this.pb.gotoAndPlay("animation");
    this.pb.blendMode = "lighter";
    this.pb.setScale(0.1, 0.1);
    this.pb.tweener.clear().to({scaleX:0.5, scaleY:0.5}, 200, "easeOutBack").call(function() {
      this.update = function() {
        this.scaleX = this.scaleY = R(0.4, 0.6)
      }
    }.bind(this.pb))
  }, update:function() {
    for(var b = 0;b < this.b;b++) {
      var c = this.a * this.cd + 2 * b * Math.PI / this.b;
      a.clone().setPosition(Math.cos(c) * this.r + this.x, Math.sin(c) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.04 * this.ia;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.ia += 1.8, this.cd = 1)
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
}, Kd:function(a, b, c) {
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
}, Wi:function(a, b, c) {
  var d = tm.app.Sprite().setPosition(a, b).setScale(0.1).setBlendMode("lighter").addChildTo(c);
  d.image = E.shockwaveImage;
  d.tweener.clear().to({scaleX:1.4, scaleY:1.4, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
}, bi:function(a, b, c) {
  a = tm.app.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(a, b).setScale(0.1, 0.1);
  a.Za = j;
  a.addChildTo(c);
  a.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(a))
}, Hd:function(a, b, c, d) {
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
}, Rh:function(a, b, c) {
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
}, oc:function(a, b, c) {
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
}, Of:function(a, b, c) {
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
ma = tm.createClass({superClass:tm.app.Object2D, target:k, pc:0, angle:0, alpha:1, Za:j, reverse:m, init:function(a, b) {
  this.superInit();
  this.target = a;
  this.reverse = b;
  this.angle = 0;
  this.pc = b ? 0 : 200;
  this.alpha = b ? 1 : 0
}, update:function() {
  if(this.target.parent === k) {
    this.remove()
  }else {
    for(var a = 0;9 > a;a++) {
      var b = this.angle + 2 * a / 9 * Math.PI;
      H(80, this.alpha, 0.9).setPosition(Math.cos(b) * this.pc + this.target.x, Math.sin(b) * this.pc + this.target.y).addChildTo(this.target.parent)
    }
    this.angle += 0.05;
    this.pc += this.reverse ? 4 : -4;
    this.alpha += this.reverse ? -0.02 : 0.05;
    (0 > this.pc || 200 < this.pc) && this.remove()
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
na = tm.createClass({superClass:tm.graphics.Canvas, ca:k, yc:k, Ra:k, init:function(a) {
  this.superInit("#scoreLabel");
  this.ca = a;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.yc = Ja(200);
  this.Ra = oa(this)
}, update:function() {
  this.clear();
  this.ca.Vb !== k && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Ra.zb - 20, 470 * this.ca.Vb.ra / this.ca.Vb.Cc, 20), this.strokeRect(5, this.Ra.zb - 20, 470, 20), this.clear(263.5, this.Ra.zb - 20 + 2, 2, 16), this.clear(52, this.Ra.zb - 20 + 2, 2, 16));
  this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
  this.lineWidth = 1;
  var a;
  this.setText("20px 'Ubuntu Mono'", "right", "top");
  score = ("" + Math.floor(this.ca.score)).padding(16, " ");
  a = "";
  for(var b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a, 192, this.Ra.zb + 5);
  this.setText("18px 'Ubuntu Mono'", "right", "top");
  score = ("+" + Math.floor(this.ca.Ia)).padding(8, " ");
  a = "";
  for(b = 0;b < score.length;b += 4) {
    a += score.substring(b, b + 4) + " "
  }
  this.fillText(a + "x " + (~~(this.ca.ya / u.kf) + 1), this.Ra.Uc + 192, 22);
  a = [0, 1, 4][this.ca.da.type];
  for(b = 0;b < this.ca.cc - 1;b++) {
    this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * a, 64, 64, 5 + 32 * b, 40, 32, 32)
  }
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("rank " + ~~(100 * q.va.Oa.$rank), 10, 75);
  this.setText("bold 18px Orbitron", "left", "top");
  this.strokeText("max " + ~~this.ca.$c + " hit", this.Ra.Uc + 10, 95);
  0 < ~~this.ca.ya && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.ca.ya + " HIT!!", 10, -this.Ra.zb + 115));
  for(b = 0;b < this.ca.wb;b++) {
    this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (b + 1) - 20, 615, 20, 20)
  }
  this.yc.update();
  this.yc.Ye = this.Ra.zb + 5;
  this.yc.draw(this)
}});
oa = tm.createClass({superClass:tm.app.Object2D, ab:k, Uc:0, zb:0, init:function(a) {
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
    for(this.ga.Ab += this.ga.oa;96 < this.ga.Ab;) {
      this.ga.Ab -= 96
    }
    for(;-96 > this.ga.Ab;) {
      this.ga.Ab += 96
    }
    for(this.ga.Cb += this.ga.pa;2 * a < this.ga.Cb;) {
      this.ga.Cb -= 2 * a
    }
    for(;this.ga.Cb < 2 * -a;) {
      this.ga.Cb += 2 * a
    }
    for(this.ga.Bb += 0.8 * this.ga.oa;25.6 * 3 < this.ga.Bb;) {
      this.ga.Bb -= 25.6 * 3
    }
    for(;this.ga.Bb < -25.6 * 3;) {
      this.ga.Bb += 25.6 * 3
    }
    for(this.ga.Db += 0.8 * this.ga.pa;2 * b < this.ga.Db;) {
      this.ga.Db -= 2 * b
    }
    for(;this.ga.Db < 2 * -b;) {
      this.ga.Db += 2 * b
    }
    0 === c % 2 && this.draw()
  }, draw:function() {
    this.ga.background !== k ? this.clearColor(this.ga.background, 0, 0) : this.clear();
    this.lineWidth = 0.3;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,255,0.5)"}]).toStyle();
    this.beginPath();
    for(var c = 0, d = this.ga.Ab - 96;576 > d;d += 48) {
      for(var c = 0 === c ? a : 0, g = this.ga.Cb - 2 * a + c;g < 640 + 2 * a;g += 2 * a) {
        this.line(d, g, d + 32, g), this.line(d, g, d - 16, g + a), this.line(d, g, d - 16, g - a)
      }
    }
    this.stroke();
    this.lineWidth = 0.2;
    this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255,0.6)"}, {offset:1, color:"rgba(255,255,255,0.3)"}]).toStyle();
    this.beginPath();
    c = 0;
    for(d = this.ga.Bb - 25.6 * 3;d < 480 + 25.6 * 3;d += 25.6 * 1.5) {
      c = 0 === c ? b : 0;
      for(g = this.ga.Db - 2 * b + c;g < 640 + 2 * b;g += 2 * b) {
        this.line(d, g, d + 25.6, g), this.line(d, g, d - 12.8, g + b), this.line(d, g, d - 12.8, g - b)
      }
    }
    this.stroke()
  }});
  qa = tm.createClass({superClass:tm.app.Object2D, Ab:0, Cb:0, Bb:0, Db:0, direction:0, speed:0, oa:0, pa:0, background:k, init:function() {
    this.superInit();
    this.Bb = this.Db = this.Ab = this.Cb = 0;
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.pa = this.oa = 0
  }})
})();
ra = tm.createClass({superClass:tm.app.Sprite, Xf:m, ca:k, da:k, Ob:m, Vc:m, bf:m, oa:0, pa:0, init:function(a) {
  this.superInit("star", 20, 20);
  (this.Xf = a) && this.setScale(2, 2);
  this.ca = F.me;
  this.da = this.ca.da;
  this.addChildTo(this.ca);
  a = 0.5 * B.random() * Math.PI - 0.75 * Math.PI;
  this.oa = 30 * Math.cos(a);
  this.pa = 30 * Math.sin(a)
}, update:function() {
  this.da.qb && (this.Vc = j);
  if(this.da.parent === k) {
    this.Vc = m
  }else {
    if(100 > Ga(this, this.da)) {
      this.ca.li(this);
      this.remove();
      return
    }
    1E4 > Ga(this, this.da) && (this.Vc = j);
    if(this.bf && this.Vc) {
      var a = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 10 * Math.cos(a);
      this.y += 10 * Math.sin(a)
    }else {
      this.bf || (this.x += this.oa, this.y += this.pa, this.oa *= 0.8, this.pa *= 0.8, -1 < this.oa && (1 > this.oa && -1 < this.pa && 1 > this.pa) && (this.bf = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
sa = tm.createClass({superClass:ra, Ob:m, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
ta = tm.createClass({superClass:ra, Ob:j, init:function(a) {
  this.superInit(a)
}, update:function() {
  this.Vc || (this.x += this.ca.ka.oa, this.y += this.ca.ka.pa);
  this.superClass.prototype.update.call(this)
}});
ua = tm.createClass({da:k, ca:k, $:k, frame:0, init:function(a) {
  this.ca = a;
  this.da = a.da;
  this.af();
  this.$ = wa();
  this.frame = 0
}, af:n(), update:function() {
  this.Ph(this.frame);
  this.frame += 1
}, Ph:function(a) {
  a = this.$.get(a);
  if(a !== k) {
    if("function" === typeof a.value) {
      a.value.call(this)
    }else {
      if(xa[a.value] !== i) {
        var b = xa[a.value];
        if(b !== k) {
          if(b[0].Vb === j) {
            this.ag(b[0])
          }else {
            for(var c = 0;c < b.length;c++) {
              var d = this.ag(b[c]);
              a.stop && d.addEventListener("enemyconsumed", function() {
                this.$.df = m
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, ag:function(a) {
  this.ca.Gd += 1;
  return a.aa(this.ca, a.ba).setPosition(a.x, a.y).addChildTo(this.ca).mi()
}, Eh:function(a) {
  ya();
  this.ca.Sc = j;
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
  b.addChildTo(this.ca.Be);
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
wa = tm.createClass({index:0, data:k, df:m, init:function() {
  this.data = {}
}, add:function(a, b, c) {
  this.index += a;
  this.data[this.index] = {stop:c, value:b}
}, get:function(a) {
  a = this.data[a];
  return a === i ? k : a.stop === j ? (this.df = j, a) : this.df ? k : a
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
    this.Eh(function() {
      Ba("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, af:function() {
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
}, af:function() {
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
}, Ii:function(a, b) {
  "function" === typeof a ? this.app.pushScene(a()) : a instanceof tm.app.Scene && this.app.pushScene(a);
  this._sceneResultCallback = b
}, finish:function(a) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(a)
}});
var La = tm.createClass({superClass:X, titleText:k, menu:k, descriptions:k, showExit:m, title:k, selections:[], description:k, box:k, cursor:k, Qe:k, _selected:0, _opened:m, _finished:m, init:function(a, b, c) {
  this.superInit();
  this.titleText = a;
  this.menu = b;
  this._selected = ~~c.defaultValue;
  this.showExit = c.showExit;
  this.descriptions = c.menuDescriptions;
  this.showExit && (b.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Qe = c.onCursorMove;
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
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Qe !== k && this.parent.Qe(this.s))
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
  a.Ii(La(b, c, g), d)
}
;H = tm.createClass({superClass:tm.app.CanvasElement, alpha:1, ue:0.85, size:0, image:k, Za:j, init:function(a, b, c, d) {
  this.superInit();
  this.width = this.height = this.size = a;
  b !== i && (this.alpha = b);
  c !== i && (this.ue = c);
  this.blendMode = "lighter";
  this.image = d ? d : tm.graphics.Canvas().resize(a, a).setFillStyle(tm.graphics.RadialGradient(0.5 * a, 0.5 * a, 0, 0.5 * a, 0.5 * a, 0.5 * a).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, a, a).element
}, update:function() {
  this.alpha *= this.ue;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(a) {
  a.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return H(this.size, this.aj, this.ue, this.image)
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
var Ja = tm.createClass({width:0, label:k, Ua:k, ia:0, gg:0, Ye:0, init:function(a) {
  this.width = a;
  this.label = tm.app.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Ua = [];
  this.gg = 480 - this.width - 5;
  this.Ye = 5
}, Dh:function(a, b) {
  b === j && (this.Ua.clear(), this.Ua.push(""));
  5 < this.Ua.length && this.Ua.splice(1, this.Ua.length - 4);
  this.Ua.push(a);
  return this
}, Ih:function() {
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
  a.translate(this.gg, this.Ye);
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
  c && (K = c.clone(), K.volume = 0.1 * s.Nc, K.loop = j, K.play())
};
Ca = function() {
  K !== k && K.stop()
};
ya = function() {
  if(K !== k) {
    var a = K;
    a.loop = m;
    var b = function() {
      a.volume -= 0.001;
      0 >= a.volume ? a.stop() : setTimeout(b, 10)
    };
    setTimeout(b, 10)
  }
};
J = function(a) {
  if(0 !== s.qc && J.played[a] !== s.frame) {
    var b = tm.asset.AssetManager.get("sound/" + a);
    b && (b = b.clone().play(), "vo" === a.substring(0, 2) ? (b.volume = 0.5 * s.qc, J.ff !== k && J.ff.stop(), J.ff = b) : b.volume = 0.1 * s.qc);
    J.played[a] = s.frame
  }
};
J.played = {};
J.ff = k;
(function() {
  var a = k, b = k;
  A = tm.createClass({superClass:X, result:k, ia:0, bd:[], Jd:m, Tf:k, Zf:0, Pd:0, init:function() {
    this.superInit();
    tm.app.Label("GL-Shooter 2", 50).setPosition(240, 160).addChildTo(this);
    tm.app.Label("version 1.0-beta", 22).setPosition(432, 192).setAlign("right").addChildTo(this);
    this.Tf = tm.app.Label().setPosition(240, 256).addChildTo(this);
    tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      this.Jd = m;
      for(var a = ("" + Math.floor(s.Md)).padding(16, " "), b = "", g = 0;g < a.length;g += 4) {
        b += a.substring(g, g + 4) + " "
      }
      this.Tf.text = "HIGH SCORE: " + b.trim()
    })
  }, draw:function(a) {
    a.fillStyle = "black";
    a.fillRect(0, 0, 480, 640)
  }, update:function(a) {
    this.xf(80 * Math.cos(0.01 * this.ia) + 240, 80 * Math.sin(0.01 * this.ia) + 320, 0);
    this.xf(80 * Math.cos(0.01 * this.ia + Math.PI) + 240, 80 * Math.sin(0.01 * this.ia + Math.PI) + 320, 1);
    (a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) && !this.Jd && this.fg();
    this.ia += 1
  }, xf:function(c, d, g) {
    if(!this.Jd) {
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
          var a = w.bd.indexOf(this);
          -1 !== a && w.bd.splice(a, 1)
        }
      };
      this.bd.push(g)
    }
  }, fg:function() {
    Y(this, "MAIN MENU", ["start", "tutorial", "setting", "save score"], this.si, {defaultValue:this.Zf, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u7d42\u4e86\u30579leap\u306b\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"]})
  }, si:function(a) {
    4 !== a && (this.Zf = a);
    switch(a) {
      case 0:
        this.tweener.clear().call(function() {
          this.Jd = j;
          for(var a = 0, b = this.bd.length;a < b;a++) {
            this.bd[a].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          s.replaceScene(Da())
        }.bind(this));
        break;
      case 2:
        this.Yb();
        break;
      case 3:
        s.Qh()
    }
  }, Yb:function() {
    Y(this, "SETTING", ["bgm volume", "sound volume", "difficulty"], this.Ue, {defaultValue:this.Pd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u96e3\u6613\u5ea6\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
  }, Ue:function(a) {
    3 !== a && (this.Pd = a);
    switch(a) {
      case 0:
        this.Ve();
        break;
      case 1:
        this.We();
        break;
      case 2:
        this.zi();
        break;
      default:
        this.fg()
    }
  }, Ve:function() {
    Y(this, "BGM VOLUME", "012345".split(""), this.Se, {defaultValue:s.Nc, onCursorMove:function(a) {
      K !== k && "exit" !== a && (K.volume = 0.1 * a)
    }, showExit:m})
  }, Se:function(a) {
    6 !== a && (s.Nc = a);
    this.Yb()
  }, We:function() {
    Y(this, "SE VOLUME", "012345".split(""), this.Te, {defaultValue:s.qc, showExit:m})
  }, Te:function(a) {
    6 !== a && (s.qc = a);
    this.Yb()
  }, zi:function() {
    Y(this, "DIFFICULTY", ["easy", "normal", "hard", "very hard", "hell"], this.ri, {defaultValue:s.Mf, menuDescriptions:["\u521d\u5fc3\u8005\u3067\u3082\u5b89\u5fc3\u3057\u3066\u6311\u6226\u53ef\u80fd\u306a\u5165\u9580\u30b3\u30fc\u30b9", "\u666e\u901a\u306e\u96e3\u6613\u5ea6\u3002easy\u3067\u306f\u7269\u8db3\u308a\u306a\u3044\u4eba\u3078", "\u4e00\u822c\u7684\u306a\u5f3e\u5e55STG\u306e\u96e3\u6613\u5ea6", "hard\u306f\u30cc\u30eb\u3059\u304e\u308b\u3068\u3044\u3046\u4eba\u5411\u3051", "\u6b7b\u306c\u304c\u3088\u3044"]})
  }, ri:function(a) {
    5 !== a && (s.Mf = a);
    this.Yb()
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  Da = tm.createClass({superClass:X, mode:0, types:k, Yd:k, jb:k, kb:k, lb:k, Le:k, Je:k, type:0, style:0, Ub:m, Qd:m, init:function() {
    this.superInit();
    tm.app.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Di();
    this.Yd = this.Ci();
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
    this.Yd.visible = m;
    this.Pe(-1, j);
    this.jb.update();
    this.kb.update();
    this.lb.update();
    J("voSelectShip")
  }, Di:function() {
    var a = tm.app.CanvasElement();
    a.addChildTo(this);
    this.Le = tm.app.Label("Type-A").setPosition(240, 150);
    this.Le.addChildTo(a);
    var b = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u5f37\u529b\u306a\u96d1\u9b5a\u6383\u8a0e\u80fd\u529b"];
    this.Me = tm.app.Label(b[0], 16).setPosition(240, 500);
    this.Me.update = function() {
      this.Me.text = b[this.type]
    }.bind(this);
    this.Me.addChildTo(a);
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
  }, Ci:function() {
    var b = tm.app.CanvasElement();
    b.addChildTo(this);
    this.Je = tm.app.Label("Shot Style").setPosition(240, 150);
    this.Je.addChildTo(b);
    this.Kc = tm.app.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(b);
    this.Lb = tm.app.Object2D();
    this.Lb.addChildTo(this.Kc);
    this.Lb.update = function(a) {
      this.Lb.rotation = 1 === this.type ? 45 * Math.sin(0.1 * a.frame) : 0
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
    this.Kc.line = a(0, 0, 0, 130, 8);
    this.Kc.line.addChildTo(this.Kc);
    this.ta.each(function(b) {
      b.line = a(0, 0, 0, 130, 5);
      b.line.addChildTo(b);
      b.addChildTo(this.Lb)
    }.bind(this));
    var d = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3059\u308b\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>"];
    this.Ke = tm.app.Label(d[0], 16).setPosition(240, 500);
    this.Ke.update = function() {
      this.Ke.text = d[this.style]
    }.bind(this);
    this.Ke.addChildTo(b);
    return b
  }, update:function(a) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.Yd.visible = m, !this.Qd && a.keyboard.getKeyDown("left")) {
        this.Pe(-1, m), J("select")
      }else {
        if(!this.Qd && a.keyboard.getKeyDown("right")) {
          this.Pe(1, m), J("select")
        }else {
          if(a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space")) {
            this.mode = 1, J("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.Yd.visible = j, a.keyboard.getKeyDown("left") ? (this.style = (this.style - 1 + 3) % 3, J("select")) : a.keyboard.getKeyDown("right") ? (this.style = (this.style + 1 + 3) % 3, J("select")) : a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (u.hf ? this.wi() : (this.Ub = j, this.eg()), J("decision")) : a.keyboard.getKeyDown("x") && (this.mode = 0), this.Ji(0 === ~~(a.frame / 60) % 2))
    }
  }, wi:function() {
    Y(this, "AUTO BOMB", ["on", "off"], this.ni, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, ni:function(a) {
    2 !== a && (this.Ub = 0 === a, this.eg())
  }, eg:function() {
    Y(this, "ARE YOU READY?", ["ok"], this.oi, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, oi:function(a) {
    0 === a && this.Fi()
  }, Pe:function(a, b) {
    this.type = (this.type + a + 3) % 3;
    [this.jb, this.kb, this.lb][this.type].remove().addChildTo(this.types);
    b ? (this.jb.Ea -= a, this.jb.scaleX = 0 === this.type ? 5 : 1, this.jb.scaleY = 0 === this.type ? 5 : 1, this.kb.Ea -= a, this.kb.scaleX = 1 === this.type ? 5 : 1, this.kb.scaleY = 1 === this.type ? 5 : 1, this.lb.Ea -= a, this.lb.scaleX = 2 === this.type ? 5 : 1, this.lb.scaleY = 2 === this.type ? 5 : 1) : (this.Qd = j, this.jb.tweener.clear().to({Ea:this.jb.Ea - a, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.kb.tweener.clear().to({Ea:this.kb.Ea - a, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.lb.tweener.clear().to({Ea:this.lb.Ea - a, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.Qd = m
    }.bind(this)));
    this.Le.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Fi:function() {
    s.ca.Ub = this.Ub;
    s.ca.start(this.type, this.style);
    s.replaceScene(s.ca)
  }, Ji:function(a) {
    this.Je.text = ["Shot", "Laser", "Expert"][this.style] + " Style";
    a ? (this.ta[0].visible = j, this.ta[1].visible = j, 1 === this.style ? (this.ta[2].visible = m, this.ta[3].visible = m) : (this.ta[2].visible = j, this.ta[3].visible = j), this.Kc.line.lineWidth = 5) : (this.ta.each(function(a) {
      a.visible = m
    }), this.Kc.line.lineWidth = 0 === this.style ? 10 : 20)
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
F = tm.createClass({superClass:X, da:k, score:0, Ia:0, ya:0, $c:0, Ca:0, Wb:0, mg:0, lg:k, ka:k, cc:3, Vd:0, Wd:0, Gb:0, Gd:0, ad:0, Oe:0, Ub:m, wb:0, Oc:0, Df:0, Ec:m, bj:m, Fb:0, Xa:0, sa:m, Xc:0, Dc:0, xa:0, Ed:0, $i:0, Zi:0, Ld:k, Pf:k, Xe:k, Nf:k, Ae:k, Be:k, we:k, ji:k, gb:k, ab:k, Vb:k, Sc:m, ii:m, init:function() {
  F.me !== k && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  F.me = this;
  this.ab = na(this);
  this.ab.Ra.addChildTo(this);
  this.ka = pa().ga;
  this.ka.addChildTo(this);
  this.Ld = F.Sb().addChildTo(this);
  this.Pf = F.Sb().addChildTo(this);
  this.Nf = F.Sb().addChildTo(this);
  this.Ae = F.Sb().addChildTo(this);
  this.Xe = F.Sb().addChildTo(this);
  this.Be = F.Sb().addChildTo(this);
  this.we = F.Sb().addChildTo(this);
  this.ji = F.pf(this).addChildTo(this);
  tm.Va.dc.Rc.Af = this;
  this.gb = tm.app.Object2D();
  this.gb.addChildTo(this);
  this.gb.update = function(a) {
    this.ui(a)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.ab.clear()
  })
}, addChild:function(a) {
  a.Za ? this.Ae.addChild(a) : a instanceof L ? this.we.addChild(a) : a instanceof ra ? this.Ld.addChild(a) : a instanceof N ? a.Ob ? this.Ld.addChild(a) : this.Nf.addChild(a) : a instanceof ba ? this.Xe.addChild(a) : a === this.gb || a === this.ka || a instanceof F.Sb || a instanceof F.pf || a instanceof oa ? this.superClass.prototype.addChild.apply(this, arguments) : (console.error("unknown type child."), h(Error(a)))
}, update:function(a) {
  this.Ai(a.keyboard);
  0 === a.frame % 500 && (V = Ia(512));
  this.lg.update(a.frame);
  0 === a.frame % 2 && this.ab.update();
  a.keyboard.getKeyDown("escape") ? (this.app.replaceScene(A()), Ca()) : a.keyboard.getKeyDown("space") ? this.Rd(0) : a.keyboard.getKeyDown("p") && (this.kg().saveAsImage(), this.Rd(0))
}, kg:function() {
  var a = tm.graphics.Canvas();
  a.resize(480, 640);
  a.clearColor("black");
  a.drawImage(this.ka.ka.element, 0, 0);
  a.drawImage(this.app.canvas.element, 0, 0);
  a.drawImage(this.ab.element, 0, 0);
  return a
}, ui:function() {
  this.da.Mb === m && C.erase();
  var a;
  a = [].concat(N.Ma);
  for(var b = [].concat(G.Ma), c = b.length;b[--c] !== i;) {
    for(var d = a.length;a[--d] !== i;) {
      var g = a[d], l = b[c];
      if(!(0 >= g.ra) && Ka(g, l) && (l.Kd(1), l.remove(), g.Nb(l.jc))) {
        this.Gb += 1;
        this.sa ? this.Ta(u.Sg) : this.Ta(u.Rg);
        this.Re(g);
        break
      }
    }
  }
  l = this.da.Pb;
  if(this.da.qb) {
    a = [].concat(N.Ma);
    a.sort(function(a, b) {
      return a.y - b.y
    });
    for(d = a.length;a[--d] !== i;) {
      if(g = a[d], !(0 >= g.ra) && Ka(g, l)) {
        l.Bi(g.y + g.boundingHeightBottom);
        g.Nb(l.jc) ? (this.Gb += 1, this.sa ? this.Ta(u.Qg) : this.Ta(u.Ng), this.Re(g)) : (this.sa ? this.wc(0.01 * this.xa) : this.wc(0.01), this.Ca = Math.min(this.Ca + 0.02, 1), this.sa ? this.Ta(u.Pg) : this.Ta(u.Og));
        l.Kd(2);
        break
      }
    }
    b = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    a = [].concat(N.Ma);
    for(d = a.length;a[--d] !== i;) {
      g = a[d], !(0 >= g.ra) && Ka(g, b) && (g.Nb(l.jc) ? (this.Gb += 1, this.sa ? this.Ta(u.Mg) : this.Ta(u.Jg), this.Re(g)) : (this.sa ? this.wc(0.01 * this.xa) : this.wc(0.01), this.Ca = Math.min(this.Ca + 0.02, 1), this.sa ? this.Ta(u.Lg) : this.Ta(u.Kg)), l.ai(2, this.da.x, this.da.y - 30))
    }
  }
  if(this.Ec) {
    C.erase();
    a = [].concat(N.Ma);
    for(d = a.length;a[--d] !== i;) {
      g = a[d], !(0 >= g.ra) && (g.Yc() && g.Nb(u.tg)) && (this.hc(g.score), this.Gb += 1)
    }
    this.Ca = this.ya = 0
  }
  if(this.sa) {
    d = [].concat(G.Ma);
    for(g = d.length;d[--g] !== i;) {
      if(l = d[g], !(0 >= l.ra)) {
        b = [].concat(L.Ma);
        for(a = b.length;b[--a] !== i;) {
          c = b[a], c.visible !== m && (0 < l.ra && Ka(l, c)) && (c.ra -= 6 - this.Xa, 0 > c.ra && (c.Na(), this.hc(u.xg), this.wc(u.vg), this.Sf(m, m, c.x, c.y, 1)), l.ra -= 1)
        }
      }
    }
  }
  if(this.Sc) {
    C.erase()
  }else {
    if(this.da.parent !== k && this.da.Gc === m && this.Ec === m && 0 >= this.Xc) {
      for(d = L.Ma.length;L.Ma[--d] !== i;) {
        if(a = L.Ma[d], a.visible !== m && Ka(a, this.da)) {
          this.da.Nb();
          0 < this.wb && this.Ub ? (this.Xa = P(this.Xa - 1, 0, 1), this.zd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.cg();
          break
        }
      }
      for(d = N.Ma.length;N.Ma[--d] !== i;) {
        if(g = N.Ma[d], !(0 >= g.ra) && !g.Ob && Ka(g, this.da)) {
          this.da.Nb();
          0 < this.wb && this.Ub ? (this.Xa = P(this.Xa - 1, 0, 1), this.zd(-0.01), ka(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this)) : this.cg();
          break
        }
      }
    }
    this.sa && (this.Dc -= 1, 0 >= this.Dc && this.Fd());
    this.Xc = Math.max(this.Xc - 1, 0);
    this.Ca -= u.zg * u.Ag;
    0 >= this.Ca && (this.Ca = 0, this.sa || 0 < this.xa ? this.Wb = this.ya = this.Ia = 0 : (0 < this.ya && (0 >= this.Wb && (this.Wb = this.ya * u.yg), this.Ia = this.Ia * (this.ya - this.Wb) / this.ya, this.ya -= this.Wb), 0 >= this.ya && (this.Wb = this.ya = this.Ia = 0)))
  }
}, Re:function(a) {
  this.Sf(a.Ob, this.sa || Ga(a, this.da) < u.Bg, a.x, a.y, a.star);
  this.wc(u.Yg[this.Ed]);
  for(var b = this.Ia, c = ~~(this.ya / u.kf) + 1, d = 0;d < c;d++) {
    b += a.score, this.hc(b)
  }
  this.Ia += a.score * c
}, Sf:function(a, b, c, d, g) {
  a = a ? ta : sa;
  for(var l = 0;l < g;l++) {
    a(b).setPosition(c, d)
  }
}, li:function(a) {
  J("star");
  a.Xf ? (this.Wd += 1, this.Ia += u.lh, this.hc(u.ph + this.Ia * u.nh), this.sa ? this.Ta(u.Wg) : this.Ta(u.Vg)) : (this.Vd += 1, this.Ia += u.kh, this.hc(u.oh + this.Ia * u.mh), this.sa ? this.Ta(u.Ug) : this.Ta(u.Tg))
}, start:function(a, b) {
  this.ab.yc.Ih().clear();
  this.score = 0;
  this.cc = u.nf;
  this.wb = this.Oc = u.mf[b];
  this.Df = u.ug[b];
  this.xa = this.Xa = this.Fb = 0;
  q.va.Oa.$rank = u.$g;
  this.Fd();
  this.Ec = m;
  this.ad = this.Oe = 0;
  this.da = ba(this, a, b);
  this.ng(0);
  J("voLetsGo");
  this.Hi()
}, ng:function(a) {
  this.Qa("3...2...1...");
  this.da.parent !== k && this.da.remove();
  N.Pc();
  G.Pc();
  C.Pc();
  this.Ld.removeChildren();
  this.Ae.removeChildren();
  this.Be.removeChildren();
  this.Xe.removeChildren();
  this.we.removeChildren();
  this.gb.removeChildren();
  this.Gb = this.Gd = this.Wd = this.Vd = this.$c = this.Ca = this.ya = this.Ia = 0;
  this.Vb = k;
  this.ii = this.Sc = m;
  this.ad = 0;
  this.ab.Ra.Uc = 0;
  this.Xa = this.ab.Ra.zb = 0;
  this.mg = a;
  this.lg = ua.create(this, a);
  this.tweener.clear().wait(1E3).call(function() {
    this.Ne()
  }.bind(this));
  this.ka.tweener.clear()
}, Ne:function() {
  this.Qa("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Pb.addChildTo(this);
  this.da.Mb = m;
  this.da.Gc = j;
  this.da.Bc = m;
  this.da.qb = m;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    this.Mb = j
  }.bind(this.da)).wait(u.bh).call(function() {
    this.Gc = m
  }.bind(this.da))
}, cg:function() {
  E.Hd(this.da.x, this.da.y, this);
  this.Qa("I was shot down.");
  this.da.Mb = m;
  this.da.remove();
  this.cc -= 1;
  this.xa = this.Wb = this.ya = this.Ca = 0;
  this.ad += 1;
  this.Oe += 1;
  this.Xa = P(this.Xa - 3, 0, 1);
  this.zd(-0.03);
  0 < this.cc ? this.tweener.clear().wait(1E3).call(function() {
    if(!this.Ub || !u.hf) {
      this.Oc = Math.min(this.Oc + 1, this.Df)
    }
    this.wb = this.Oc;
    this.Ne()
  }.bind(this)) : this.tweener.clear().wait(2E3).call(function() {
    this.yi()
  }.bind(this))
}, zd:function(a) {
  q.va.Oa.$rank = P(q.va.Oa.$rank + a, 0, 0.5)
}, Zh:function() {
  this.Qa("System rebooted.", j);
  this.score = 0;
  this.cc = u.nf;
  this.wb = this.Oc = u.mf[this.da.style];
  this.Xa = 0;
  q.va.Oa.$rank = 0;
  this.Ne()
}, Jh:function() {
  Ba("bgmResult");
  var a = tm.app.Object2D();
  a.addChildTo(this.gb);
  a.tweener.wait(1E3).call(function() {
    this.app.pushScene(Ea(this, this.kg()));
    a.remove()
  }.bind(this))
}, $h:function() {
  Ca();
  this.app.replaceScene(Ma())
}, Vi:n(), hc:function(a) {
  var b = this.score;
  this.score += a;
  for(a = 0;a < u.lf.length;a++) {
    var c = u.lf[a];
    b < c && c <= this.score && this.Th()
  }
  s.Md = Math.max(s.Md, this.score)
}, wc:function(a) {
  this.Wb = 0;
  this.ya += a;
  this.$c = Math.max(this.$c, this.ya);
  1 <= a && (this.Ca = 1)
}, Ta:function(a) {
  if(this.xa !== u.de) {
    for(a *= u.Xg;1 < a;) {
      ma(this.da).addChildTo(this), a -= 1, this.Fb = 0, this.xa += 1, 1 === this.xa ? (this.Qa("HYPER SYSTEM, stand by.", j), J("voHyperStandBy")) : (this.Qa("HYPER SYSTEM, ready.", j), J("voHyperReady"))
    }
    this.Fb = P(this.Fb + a, 0, 1);
    1 <= this.Fb && (ma(this.da).addChildTo(this), this.xa += 1, this.Fb -= 1, 1 === this.xa ? (this.Qa("HYPER SYSTEM, stand by.", j), J("voHyperStandBy")) : (this.Qa("HYPER SYSTEM, ready.", j), J("voHyperReady")))
  }
}, Gi:function() {
  0.5 > Math.random() ? (this.Qa("HYPER SYSTEM start!!", j), J("voHyperStart0")) : (this.Qa("start counting to system limit.", j), J("voHyperStart1"));
  this.Xa = P(this.Xa + 1, 0, 5);
  this.zd(0.01 * this.xa);
  q.va.Oa.$hyperOff = u.Eg;
  this.Dc = u.od;
  this.Xc = u.od * u.Ig;
  this.da.Nd.Ic(this.xa);
  this.da.Pb.Ic(this.xa);
  this.da.zc = this.da.Nd;
  E.bi(this.da.x, this.da.y, this);
  this.sa = j;
  this.Ed = this.xa;
  this.Fb = this.xa = 0;
  C.erase(j, j)
}, Fd:function() {
  this.sa !== m && (this.sa = m, ma(this.da, j).addChildTo(this), this.da.zc = this.da.dg, q.va.Oa.$hyperOff = 1, this.da.Nd.Ic(0), this.da.Pb.Ic(0), this.Xc = u.od * u.Hg, this.Ed = this.Dc = 0, C.erase())
}, Th:function() {
  J("voExtend");
  this.Qa("extended.");
  this.cc += 1
}, Qa:function(a, b) {
  this.ab.yc.Dh(a, b)
}, Rd:function(a) {
  Y(this, "PAUSE", ["resume", "setting", "exit game"], this.ti, {defaultValue:a, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:m})
}, ti:function(a) {
  switch(a) {
    case 1:
      this.Yb();
      break;
    case 2:
      this.xi()
  }
}, Yb:function() {
  Y(this, "SETTING", ["bgm volume", "sound volume"], this.Ue, {defaultValue:this.Pd, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059"]})
}, Ue:function(a) {
  3 !== a && (this.Pd = a);
  switch(a) {
    case 0:
      this.Ve();
      break;
    case 1:
      this.We();
      break;
    default:
      this.Rd()
  }
}, xi:function() {
  Y(this, "REARY?", ["yes", "no"], this.pi, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:m})
}, pi:function(a) {
  0 === a ? (Ca(), this.app.replaceScene(A())) : this.Rd(1)
}, Ve:function() {
  Y(this, "BGM VOLUME", "012345".split(""), this.Se, {defaultValue:s.Nc, onCursorMove:function(a) {
    K !== k && 6 !== a && (K.volume = 0.1 * a)
  }, showExit:m})
}, Se:function(a) {
  6 !== a && (s.Nc = a);
  this.Yb(1)
}, We:function() {
  Y(this, "SE VOLUME", "012345".split(""), this.Te, {defaultValue:s.qc, showExit:m})
}, Te:function(a) {
  6 !== a && (s.qc = a);
  this.Yb(1)
}, yi:function() {
  Y(this, "CONTINUE?", ["yes", "no"], this.qi, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:m})
}, qi:function(a) {
  switch(a) {
    case 0:
      this.Zh();
      break;
    case 1:
      this.$h()
  }
}, draw:n(), Ei:function() {
  this.ab.Ra.tweener.clear().to({Uc:-480}, 1600, "easeInQuad").to({zb:30}, 800, "easeInOutQuad")
}, di:function() {
  this.ab.Ra.tweener.clear().to({zb:0}, 800, "easeInOutQuad").to({Uc:0}, 1600, "easeOutQuad")
}, dd:k, ed:0, Zc:k, qd:0, Hi:function() {
  if(1 === this.qd) {
    console.log("rec start");
    if(localStorage.getItem("recCount") !== i) {
      this.Zc = [];
      for(var a = ~~localStorage.getItem("recCount"), b = 0;b < a;b++) {
        localStorage.removeItem("rec" + b)
      }
      localStorage.removeItem("recCount")
    }
    this.dd = [];
    this.ed = 0
  }else {
    if(2 === this.qd && (console.log("replay start"), localStorage.getItem("recCount") !== i)) {
      this.Zc = [];
      a = ~~localStorage.getItem("recCount");
      for(b = 0;b < a;b++) {
        for(var c = localStorage.getItem("rec" + b).split(","), d = 0;d < c.length;d++) {
          this.Zc.push(c[d])
        }
      }
    }
  }
}, Ai:function(a) {
  if(1 === this.qd) {
    1E3 < this.dd.length && (console.log("save"), localStorage.setItem("rec" + this.ed, this.dd), localStorage.setItem("recCount", this.ed), this.dd = [], this.ed += 1), this.dd.push("" + ~~a.getKey("up") + ~~a.getKey("down") + ~~a.getKey("left") + ~~a.getKey("right") + ~~a.getKey("z") + ~~a.getKey("x") + ~~a.getKey("c"))
  }else {
    if(2 === this.qd && this.Zc) {
      var b = this.Zc.shift();
      b !== i && (a.getKey = function(a) {
        return"up" === a ? !!~~b[0] : "down" === a ? !!~~b[1] : "left" === a ? !!~~b[2] : "right" === a ? !!~~b[3] : "z" === a ? !!~~b[4] : "x" === a ? !!~~b[5] : "c" === a ? !!~~b[6] : m
      }, a.getKeyDown = function(a) {
        return"up" === a ? !!~~b[0] : "down" === a ? !!~~b[1] : "left" === a ? !!~~b[2] : "right" === a ? !!~~b[3] : "z" === a ? !!~~b[4] : "x" === a ? !!~~b[5] : "c" === a ? !!~~b[6] : m
      })
    }
  }
}});
F.Sb = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
F.pf = tm.createClass({superClass:tm.app.CanvasElement, ca:k, frame:0, init:function(a) {
  this.superInit();
  this.ca = a;
  this.blendMode = "lighter"
}, update:function(a) {
  this.frame = a.frame
}, draw:function(a) {
  this.Mh(a);
  this.Nh(a)
}, Mh:function(a) {
  if(0 < this.ca.Ca) {
    a.fillStyle = "rgba(255," + ~~(255 * this.ca.Ca) + "," + ~~Math.min(255, 512 * this.ca.Ca) + ",0.5)";
    var b = 500 * this.ca.Ca;
    a.fillRect(465, 635 - b, 10, b)
  }
}, Nh:function(a) {
  a.fillStyle = "rgba(255,255,0,0.1)";
  a.fillRect(5, 628, 200, 9);
  this.xa === u.de ? 1 === this.frame % 2 && (a.fillStyle = "rgba(255,255,255,0.3)", a.fillRect(5, 628, 200, 9)) : 0 < this.ca.Fb && (a.fillStyle = "rgba(255,255,100,0.3)", a.fillRect(5, 628, 200 * this.ca.Fb, 9));
  0 === this.frame % 2 && (a.strokeStyle = "rgba(255,255,100,0.5)", !this.ca.sa && 0 < this.ca.xa ? (a.setText("bold 24px Orbitron", "left", "bottom"), a.strokeText("HYPER LV " + this.ca.xa, 5, 637)) : this.ca.sa && (a.setText("bold 28px Orbitron", "left", "bottom"), a.strokeText("HYPER LV " + this.ca.Ed, 5, 637)))
}});
F.me = k;
(function() {
  Ea = tm.createClass({superClass:X, ca:k, ig:k, gb:k, values:k, labels:k, Od:k, hg:[u.ih, u.jh, u.fh, u.gh, 1], Wf:k, Ze:k, cursor:0, wait:0, frame:0, init:function(a, c) {
    this.superInit();
    this.ca = a;
    this.values = [this.ca.Vd, this.ca.Wd, ~~(100 * (this.ca.Gb / this.ca.Gd)), this.ca.$c, 0 === this.ca.ad ? u.hh : 0];
    this.Od = this.values.map(function(a) {
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
    this.Wf = tm.app.Label(Math.floor(this.ca.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
    this.Ze = tm.app.Label("press space key").setPosition(240, 576).addChildTo(this);
    this.Ze.visible = m;
    this.background = tm.graphics.LinearGradient(0, 0, 480, 640).addColorStopList([{offset:0, color:"hsl(220, 90%, 60%)"}, {offset:1, color:"hsl(220, 90%, 10%)"}]).toStyle();
    this.ig = c;
    for(var g = [], d = 0;12 > d;d++) {
      g[d] = [];
      for(var l = 0;16 > l;l++) {
        g[d][l] = {$e:0, Td:0, gf:R(-2, 2), hd:R(1, 4)}
      }
    }
    this.gb = tm.app.Object2D();
    this.gb.draw = function(a) {
      for(var b = j, c = 0;c < g.length;c++) {
        for(var d = 0;d < g[c].length;d++) {
          var l = g[c][d];
          640 > 40 * d + l.Td && (a.drawImage(this.ig.element, 40 * c, 40 * d, 40, 40, 40 * c + l.$e, 40 * d + l.Td, 40, 40), l.$e += l.gf, l.Td += l.hd, l.hd += 0.3, b = m)
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
        J("star"), this.values[c] <= this.Od[c] || a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") ? (this.ca.hc(this.values[c] * this.hg[c]), this.values[c] = 0, this.cursor += 1, this.wait = 30) : (this.ca.hc(this.Od[c] * this.hg[c]), this.values[c] -= this.Od[c]), this.labels[c].text = "" + Math.floor(this.values[c]) + (2 === c ? "%" : ""), this.Wf.text = Math.floor(this.ca.score)
      }else {
        if(this.Ze.visible = j, a.keyboard.getKeyDown("z") || a.keyboard.getKeyDown("c") || a.keyboard.getKeyDown("space") || 1800 < this.frame) {
          J("decision"), this.ca.ng(this.ca.mg + 1), a.popScene()
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
  N = tm.createClass({superClass:tm.app.CanvasElement, name:k, da:k, ca:k, ra:0, score:0, Ob:m, erase:m, star:1, hi:m, nc:j, yb:m, frame:0, Zd:k, direction:0, speed:0, za:k, init:function(b, c, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.yb = m;
      a.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var b = a.indexOf(this);
      -1 !== b && a.splice(b, 1)
    });
    this.nc = j;
    this.ca = b;
    this.da = b.da;
    this.score = 100;
    this.erase = m;
    this.Ch(d);
    c.na(this);
    this.altitude = this.Ob ? 1 : 10;
    this.Zd = {x:0, y:0}
  }, mi:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, dj:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.yb === m && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.yb = j, this.dispatchEvent(tm.event.Event("enter")));
    var a = this.x, c = this.y;
    this.Ob && (this.x += this.ca.ka.oa, this.y += this.ca.ka.pa);
    this.yb && (this.frame += 1);
    this.Zd.x = this.x - a;
    this.Zd.y = this.y - c
  }, Nb:function(a) {
    if(!this.yb) {
      return m
    }
    this.ra -= a;
    return 0 >= this.ra ? (a = R(0, 5), 2 > a ? this.ca.Qa("enemy destroy.") : 4 > a ? this.ca.Qa(this.name + " destroy.") : this.ca.Qa("ETR reaction gone."), this.erase && C.erase(j, this.ca.sa), this.dispatchEvent(tm.event.Event("destroy")), this.Na(), j) : m
  }, Na:function() {
    E.Hd(this.x, this.y, this.ca, this.Zd);
    this.remove()
  }, Yc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, vi:function() {
    return this.nc
  }, Ch:function(a) {
    this.name = a;
    a = N.Cg[a];
    this.ra = a[0];
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
  }, Ce:function() {
    this.remove();
    this.ca.Pf.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && E.Hd(this.x + W(-100, 100), this.y + W(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      E.Of(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }, Ef:function() {
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && E.Hd(this.x + W(-100, 100), this.y + W(-40, 40), this.ca, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      E.Of(this.x, this.y, this.ca);
      this.remove()
    }.bind(this))
  }});
  N.Pc = function() {
    for(var b = [].concat(a), c = 0, d = b.length;c < d;c++) {
      b[c].remove()
    }
  };
  var a = N.Ma = []
})();
Fa = tm.createClass({superClass:N, hi:j, Cc:0, Ud:k, init:function(a, b, c) {
  this.Ud = b;
  this.superInit(a, this.Ud[0], c);
  this.Cc = this.ra;
  this.addEventListener("added", function() {
    this.ca.Vb = this;
    this.ca.Ei();
    this.tweener.wait(1E3).call(function() {
      this.ca.Sc = m
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.ca.Vb = k;
    this.ca.di();
    var a = tm.app.Object2D();
    a.tweener.wait(7E3).call(function() {
      this.ca.Jh()
    }.bind(this));
    a.addChildTo(this.ca.gb)
  })
}, Nb:function(a) {
  var b = this.ra;
  if(N.prototype.Nb.call(this, a)) {
    return this.ca.Sc = j, ya(), j
  }
  this.ra <= 0.55 * this.Cc && 0.55 * this.Cc < b ? (O.cf(this), this.clearEventListener("completeattack"), this.tweener.clear(), E.oc(this.x, this.y, this.ca), C.erase(j, this.ca.sa), this.Ud[1].na(this)) : this.ra <= 0.1 * this.Cc && 0.1 * this.Cc < b && (O.cf(this), this.clearEventListener("completeattack"), this.tweener.clear(), E.oc(this.x, this.y, this.ca), C.erase(j, this.ca.sa), this.Ud[2].na(this), J("voJacms"))
}});
(function() {
  N.Cg = {kujo:[2, 300, m, m, 1, {radius:24}], kiryu:[3, 400, m, m, 1, {radius:24}], natsuki:[5, 900, j, m, 1, {radius:24}], kise:[50, 15E3, j, m, 1, {radius:24}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, m, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], kurokawa:[35, 5E3, m, m, 5, {width:100, height:20}], akimoto:[250, 3E5, m, j, 10, {width:200, heightBottom:10, heightTop:60}], yukishiro:[750, 8E5, m, j, 20, {width:240, height:80}], misumi:[4E3, 2E6, 
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
  N.ea = tm.createClass({superClass:N, gc:k, re:k, init:function(b, c) {
    this.superInit(b, c, "natsuki");
    this.gc = a("tex_tank1", 64, 64);
    this.re = a("tex_tank1", 64, 64);
    this.kc = this.kc || 0;
    this.xb = this.xb || 0
  }, update:function(a) {
    N.prototype.update.call(this, a);
    for(a = this.kc;0 > a;) {
      a += 2 * Math.PI
    }
    for(;2 * Math.PI <= a;) {
      a -= 2 * Math.PI
    }
    for(var c = this.xb;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.gc.setFrameIndex(~~(16 * a / (2 * Math.PI)), 64, 64);
    this.re.setFrameIndex(~~(16 * c / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(a) {
    this.gc.draw(a);
    this.re.draw(a)
  }, Na:function() {
    E.Rh(this.x, this.y, this.ca);
    this.remove()
  }});
  N.ec = tm.createClass({superClass:N, gc:k, init:function(b, c) {
    this.superInit(b, c, "kurokawa");
    this.Aa = a("tex_stage1", 128, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    E.oc(this.x, this.y, this.ca);
    this.remove()
  }});
  N.pd = tm.createClass({superClass:N, init:function(b, c) {
    this.superInit(b, c, "akimoto");
    this.Aa = a("tex_stage1", 256, 128).setFrameIndex(1)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    this.Ce()
  }});
  N.ua = tm.createClass({superClass:N, gc:k, init:function(b, c) {
    this.superInit(b, c, "kise");
    this.Aa = a("tex_stage1", 128, 128).setFrameIndex(5)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    E.oc(this.x, this.y, this.ca);
    this.remove()
  }});
  N.sd = tm.createClass({superClass:N, Aa:k, init:function(a, c) {
    this.superInit(a, c, "hanasaki")
  }, Na:function() {
    E.oc(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.ge = tm.createClass({superClass:N, init:function(a, c) {
    this.superInit(a, c, "myodoin")
  }, Na:function() {
    E.oc(this.x, this.y, this.ca);
    this.remove()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.rb = tm.createClass({superClass:N, gc:k, init:function(b, c) {
    this.superInit(b, c, "kenzaki");
    this.Aa = a("tex_stage1", 128, 128).setFrameIndex(4)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    E.oc(this.x, this.y, this.ca);
    this.remove()
  }});
  N.ee = tm.createClass({superClass:N, Aa:k, init:function(b, c) {
    this.superInit(b, c, "yukishiro");
    this.Aa = a("tex_stage1", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Na:function() {
    this.Ce()
  }, draw:function(a) {
    this.Aa.draw(a)
  }});
  N.ie = tm.createClass({superClass:Fa, gc:k, init:function(b, c) {
    this.superInit(b, c, "misumi");
    this.Aa = a("tex_stage1", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, draw:function(a) {
    this.Aa.draw(a)
  }, Na:function() {
    this.Ef()
  }});
  N.he = tm.createClass({superClass:N, init:function(a, c) {
    this.superInit(a, c, "mishou")
  }, Na:function() {
    this.Ce()
  }, draw:function(a) {
    a.fillStyle = "yellow";
    a.fillRect(-this.boundingWidthLeft, -this.boundingHeightTop, this.boundingWidthLeft + this.boundingWidthRight, this.boundingHeightTop + this.boundingHeightBottom)
  }});
  N.Ni = tm.createClass({superClass:Fa, init:function(a, c) {
    this.superInit(a, c, "hyuga")
  }, Na:function() {
    this.Ef()
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
      O.cf(this)
    })
  }});
  O.nb = function(a, c) {
    var d = C[c].Dd();
    a.on("enterframe", d);
    a.on("completeattack", function() {
      this.removeEventListener("enterframe", d)
    })
  };
  O.cf = function(a) {
    var c = [].concat(a._listeners.enterframe);
    if(c) {
      for(var d = 0, g = c.length;d < g;d++) {
        c[d] && c[d].He && a.removeEventListener("enterframe", c[d])
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
  O.Rb = tm.createClass({superClass:O, init:function() {
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
  O.Rb = O.Rb();
  O.ha = tm.createClass({superClass:O, init:function() {
    this.superInit()
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.angle = 0.5 * Math.PI;
    a.tweener.wait(B.rand(0, 1E3)).call(function() {
      this.speed = 6;
      O.nb(this, "basic1-0");
      this.on("enterframe", function() {
        this.y < this.da.y && this.yb && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = P(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.Yc() && this.yb && this.remove();
        if(22500 > Ga(this, this.da) || this.y > this.da.y + 150) {
          this.nc = m
        }
      })
    }.bind(a))
  }});
  O.ha = O.ha();
  var a = tm.createClass({superClass:O, init:function(a, c, d) {
    this.superInit();
    this.gi = a;
    this.fi = c;
    this.xc = d
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.speed = this.gi;
    a.kc = this.fi;
    this.xc && (a.xc = [].concat(this.xc));
    a.xb = 0;
    a.on("enter", function() {
      O.nb(this, "basic2-0")
    });
    a.on("enterframe", function() {
      this.x += Math.cos(this.kc) * this.speed;
      this.y += Math.sin(this.kc) * this.speed;
      this.yb && !this.Yc() && this.remove();
      for(this.xb = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.xb;) {
        this.xb += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.xb;) {
        this.xb -= 2 * Math.PI
      }
      this.nc = this.y < this.da.y && 4E4 < Ga(this, this.da);
      if(this.xc) {
        for(var a = 0;a < this.xc.length;a++) {
          var b = this.xc[a];
          b.frame === this.frame && this.tweener.to({kc:b.dir !== i ? b.dir : this.kc, speed:b.speed !== i ? b.speed : this.speed}, 500)
        }
      }
    })
  }});
  O.tb = a(1, 0.25 * Math.PI);
  O.Oi = a(1, -1.75 * Math.PI);
  O.Lc = a(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  O.ja = a(1.6, 0.5 * Math.PI);
  O.ub = a(1.6, -0.5 * Math.PI);
  a = tm.createClass({superClass:O, ic:k, If:m, init:function(a, c) {
    this.superInit();
    this.ic = a;
    this.If = !!c
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.speed = 1;
    a.dir = Math.PI;
    a.ic = this.ic;
    a.on("enter", function() {
      O.nb(this, this.ic)
    });
    a.on("enterframe", function() {
      this.yb && !this.Yc() && this.remove()
    });
    if(!this.If) {
      a.on("enterframe", function() {
        this.nc = this.y < this.da.y && 4E4 < Ga(this, this.da)
      })
    }
  }});
  O.cb = a("basic3-0", m);
  O.eb = a("basic3-1", m);
  O.sb = a("cannon2-0", j);
  O.ld = a("cannon3-0", j);
  O.ae = a("cannon5-0", j);
  a = tm.createClass({superClass:O, velocityY:0, ic:k, init:function(a, c) {
    this.superInit();
    this.velocityY = a;
    this.ic = c
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.velocityY = this.velocityY;
    a.za = [this.ic];
    a.tweener.clear().moveBy(0, 320, 800, "easeOutQuad").call(function() {
      O.nb(this, this.za[0])
    }.bind(a));
    a.on("enterframe", function() {
      this.y += this.velocityY;
      this.yb && !this.Yc() && this.remove();
      this.nc = this.y < this.da.y
    })
  }});
  O.fc = a(0.5, "kurokawa-1");
  O.qf = a(0.3, "komachi-1");
  O.rf = a(0.5, "komachi-2");
  a = tm.createClass({superClass:O, za:k, init:function(a) {
    this.superInit();
    this.za = a
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.za = [].concat(this.za);
    a.Xd = m;
    a.Tc = m;
    a.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Xd = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * B.random() * Math.PI, g = B.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 192 + 0.5 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("enterframe", function() {
      if(!(this.Xd === m || 0 >= this.ra) && 1500 < this.frame && this.Tc === m) {
        this.Tc = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Tc) {
        var a = this.za.shift();
        O.nb(this, a);
        this.za.push(a)
      }
    })
  }});
  O.ee = a(["honoka-1"]);
  O.ie = tm.createClass({superClass:O, za:k, init:function() {
    this.superInit();
    this.za = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, na:function(a) {
    O.prototype.na.call(this, a);
    a.za = [].concat(this.za);
    a.Xd = m;
    a.Tc = m;
    a.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Xd = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var a = function() {
        var b = 2 * B.random() * Math.PI, g = B.randf(48, 144);
        this.tweener.move(240 + Math.cos(b) * g, 128 + 0.3 * Math.sin(b) * g, 3E3, "easeInOutQuad").call(a)
      }.bind(this);
      a()
    }.bind(a));
    a.on("completeattack", function() {
      if(!(0 >= this.ra) && !this.Tc) {
        var a = this.za.shift();
        O.nb(this, a);
        this.za.push(a)
      }
    })
  }});
  O.dh = O.ie();
  O.je = tm.createClass({superClass:O, za:k, init:function() {
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
  O.je = O.je();
  O.ke = tm.createClass({superClass:O, init:function() {
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
  O.ke = O.ke();
  O.he = a(["mai-1", "mai-2"])
})();
var Z = N, $ = O;
xa = {"heri1-left":[{aa:Z.ha, ba:$.mb, x:48, y:-100}, {aa:Z.ha, ba:$.Ba, x:96, y:-100}, {aa:Z.ha, ba:$.mb, x:144, y:-100}, {aa:Z.ha, ba:$.Ba, x:192, y:-100}, {aa:Z.ha, ba:$.mb, x:240, y:-100}], "heri1-center":[{aa:Z.ha, ba:$.mb, x:144, y:-100}, {aa:Z.ha, ba:$.Ba, x:192, y:-100}, {aa:Z.ha, ba:$.mb, x:240, y:-100}, {aa:Z.ha, ba:$.Ba, x:288, y:-100}, {aa:Z.ha, ba:$.mb, x:336, y:-100}], "heri1-right":[{aa:Z.ha, ba:$.mb, x:240, y:-100}, {aa:Z.ha, ba:$.Ba, x:288, y:-100}, {aa:Z.ha, ba:$.mb, x:336, y:-100}, 
{aa:Z.ha, ba:$.Ba, x:384, y:-100}, {aa:Z.ha, ba:$.mb, x:432, y:-100}], "heri1-left2":[{aa:Z.ha, ba:$.Ba, x:48, y:-100}, {aa:Z.ha, ba:$.Rb, x:96, y:-100}, {aa:Z.ha, ba:$.Ba, x:144, y:-100}, {aa:Z.ha, ba:$.Rb, x:192, y:-100}, {aa:Z.ha, ba:$.Ba, x:240, y:-100}], "heri1-center2":[{aa:Z.ha, ba:$.Ba, x:144, y:-100}, {aa:Z.ha, ba:$.Rb, x:192, y:-100}, {aa:Z.ha, ba:$.Ba, x:240, y:-100}, {aa:Z.ha, ba:$.Rb, x:288, y:-100}, {aa:Z.ha, ba:$.Ba, x:336, y:-100}], "heri1-right2":[{aa:Z.ha, ba:$.Ba, x:240, y:-100}, 
{aa:Z.ha, ba:$.Rb, x:288, y:-100}, {aa:Z.ha, ba:$.Ba, x:336, y:-100}, {aa:Z.ha, ba:$.Rb, x:384, y:-100}, {aa:Z.ha, ba:$.Ba, x:432, y:-100}], "heri2-left":[{aa:Z.Ja, ba:$.ha, x:48, y:-100}, {aa:Z.Ja, ba:$.ha, x:96, y:-100}, {aa:Z.Ja, ba:$.ha, x:144, y:-100}, {aa:Z.Ja, ba:$.ha, x:192, y:-100}, {aa:Z.Ja, ba:$.ha, x:240, y:-100}], "heri2-center":[{aa:Z.Ja, ba:$.ha, x:144, y:-100}, {aa:Z.Ja, ba:$.ha, x:192, y:-100}, {aa:Z.Ja, ba:$.ha, x:240, y:-100}, {aa:Z.Ja, ba:$.ha, x:288, y:-100}, {aa:Z.Ja, ba:$.ha, 
x:336, y:-100}], "heri2-right":[{aa:Z.Ja, ba:$.ha, x:240, y:-100}, {aa:Z.Ja, ba:$.ha, x:288, y:-100}, {aa:Z.Ja, ba:$.ha, x:336, y:-100}, {aa:Z.Ja, ba:$.ha, x:384, y:-100}, {aa:Z.Ja, ba:$.ha, x:432, y:-100}], "tankRD-left":[{aa:Z.ea, ba:$.tb, x:78, y:-50}, {aa:Z.ea, ba:$.tb, x:28, y:-100}, {aa:Z.ea, ba:$.tb, x:-22, y:-150}, {aa:Z.ea, ba:$.tb, x:-72, y:-200}, {aa:Z.ea, ba:$.tb, x:-122, y:-250}], "tankRD-center":[{aa:Z.ea, ba:$.tb, x:222, y:-50}, {aa:Z.ea, ba:$.tb, x:172, y:-100}, {aa:Z.ea, ba:$.tb, 
x:122, y:-150}, {aa:Z.ea, ba:$.tb, x:72, y:-200}, {aa:Z.ea, ba:$.tb, x:22, y:-250}], "tankL-top":[{aa:Z.ea, ba:$.Lc, x:550, y:64}, {aa:Z.ea, ba:$.Lc, x:620, y:64}, {aa:Z.ea, ba:$.Lc, x:690, y:64}, {aa:Z.ea, ba:$.Lc, x:760, y:64}, {aa:Z.ea, ba:$.Lc, x:830, y:64}], "tank5-left":[{aa:Z.ea, ba:$.ja, x:48, y:-70}, {aa:Z.ea, ba:$.ja, x:48, y:-140}, {aa:Z.ea, ba:$.ja, x:48, y:-210}, {aa:Z.ea, ba:$.ja, x:48, y:-280}, {aa:Z.ea, ba:$.ja, x:48, y:-350}], "tank5-center":[{aa:Z.ea, ba:$.ja, x:240, y:-70}, {aa:Z.ea, 
ba:$.ja, x:240, y:-140}, {aa:Z.ea, ba:$.ja, x:240, y:-210}, {aa:Z.ea, ba:$.ja, x:240, y:-280}, {aa:Z.ea, ba:$.ja, x:240, y:-350}], "tank15-top":[{aa:Z.ea, ba:$.ja, x:48, y:-70}, {aa:Z.ea, ba:$.ja, x:48, y:-140}, {aa:Z.ea, ba:$.ja, x:48, y:-210}, {aa:Z.ea, ba:$.ja, x:48, y:-280}, {aa:Z.ea, ba:$.ja, x:48, y:-350}, {aa:Z.ea, ba:$.ja, x:240, y:-70}, {aa:Z.ea, ba:$.ja, x:240, y:-140}, {aa:Z.ea, ba:$.ja, x:240, y:-210}, {aa:Z.ea, ba:$.ja, x:240, y:-280}, {aa:Z.ea, ba:$.ja, x:240, y:-350}, {aa:Z.ea, ba:$.ja, 
x:432, y:-70}, {aa:Z.ea, ba:$.ja, x:432, y:-140}, {aa:Z.ea, ba:$.ja, x:432, y:-210}, {aa:Z.ea, ba:$.ja, x:432, y:-280}, {aa:Z.ea, ba:$.ja, x:432, y:-350}], "tank25-top":[{aa:Z.ea, ba:$.ja, x:48, y:-70}, {aa:Z.ea, ba:$.ja, x:48, y:-140}, {aa:Z.ea, ba:$.ja, x:48, y:-210}, {aa:Z.ea, ba:$.ja, x:48, y:-280}, {aa:Z.ea, ba:$.ja, x:48, y:-350}, {aa:Z.ea, ba:$.ja, x:240, y:-70}, {aa:Z.ea, ba:$.ja, x:240, y:-140}, {aa:Z.ea, ba:$.ja, x:240, y:-210}, {aa:Z.ea, ba:$.ja, x:240, y:-280}, {aa:Z.ea, ba:$.ja, x:240, 
y:-350}, {aa:Z.ea, ba:$.ja, x:432, y:-70}, {aa:Z.ea, ba:$.ja, x:432, y:-140}, {aa:Z.ea, ba:$.ja, x:432, y:-210}, {aa:Z.ea, ba:$.ja, x:432, y:-280}, {aa:Z.ea, ba:$.ja, x:432, y:-350}, {aa:Z.ea, ba:$.ub, x:144, y:710}, {aa:Z.ea, ba:$.ub, x:144, y:780}, {aa:Z.ea, ba:$.ub, x:144, y:850}, {aa:Z.ea, ba:$.ub, x:144, y:920}, {aa:Z.ea, ba:$.ub, x:144, y:990}, {aa:Z.ea, ba:$.ub, x:336, y:710}, {aa:Z.ea, ba:$.ub, x:336, y:780}, {aa:Z.ea, ba:$.ub, x:336, y:850}, {aa:Z.ea, ba:$.ub, x:336, y:920}, {aa:Z.ea, ba:$.ub, 
x:336, y:990}], "cannon-0":[{aa:Z.ua, ba:$.cb, x:48, y:-100}], "cannon-1":[{aa:Z.ua, ba:$.cb, x:96, y:-100}], "cannon-2":[{aa:Z.ua, ba:$.cb, x:144, y:-100}], "cannon-3":[{aa:Z.ua, ba:$.cb, x:192, y:-100}], "cannon-4":[{aa:Z.ua, ba:$.cb, x:240, y:-100}], "cannon-5":[{aa:Z.ua, ba:$.cb, x:288, y:-100}], "cannon-6":[{aa:Z.ua, ba:$.cb, x:336, y:-100}], "cannon-7":[{aa:Z.ua, ba:$.cb, x:384, y:-100}], "cannon-8":[{aa:Z.ua, ba:$.cb, x:432, y:-100}], "cannon-R0":[{aa:Z.ua, ba:$.cb, x:550, y:128}], "cannon-R1":[{aa:Z.ua, 
ba:$.cb, x:550, y:192}], "cannon-R2":[{aa:Z.ua, ba:$.cb, x:550, y:256}], "yayoi-0":[{aa:Z.ua, ba:$.eb, x:48, y:-100}], "yayoi-1":[{aa:Z.ua, ba:$.eb, x:96, y:-100}], "yayoi-2":[{aa:Z.ua, ba:$.eb, x:144, y:-100}], "yayoi-3":[{aa:Z.ua, ba:$.eb, x:192, y:-100}], "yayoi-4":[{aa:Z.ua, ba:$.eb, x:240, y:-100}], "yayoi-5":[{aa:Z.ua, ba:$.eb, x:288, y:-100}], "yayoi-6":[{aa:Z.ua, ba:$.eb, x:336, y:-100}], "yayoi-7":[{aa:Z.ua, ba:$.eb, x:384, y:-100}], "yayoi-8":[{aa:Z.ua, ba:$.eb, x:432, y:-100}], "yayoi-R0":[{aa:Z.ua, 
ba:$.eb, x:550, y:128}], "yayoi-R1":[{aa:Z.ua, ba:$.eb, x:550, y:192}], "yayoi-R2":[{aa:Z.ua, ba:$.eb, x:550, y:256}], "tsubomi-0":[{aa:Z.sd, ba:$.ld, x:96, y:-100}], "tsubomi-1":[{aa:Z.sd, ba:$.ld, x:240, y:-100}], "tsubomi-2":[{aa:Z.sd, ba:$.ld, x:384, y:-100}], "tsubomi-R0":[{aa:Z.sd, ba:$.ld, x:580, y:128}], "itsuki-0":[{aa:Z.ge, ba:$.ae, x:96, y:-100}], "itsuki-1":[{aa:Z.ge, ba:$.ae, x:240, y:-100}], "itsuki-2":[{aa:Z.ge, ba:$.ae, x:384, y:-100}], "makoto-0":[{aa:Z.rb, ba:$.sb, x:48, y:-100}], 
"makoto-1":[{aa:Z.rb, ba:$.sb, x:96, y:-100}], "makoto-2":[{aa:Z.rb, ba:$.sb, x:144, y:-100}], "makoto-3":[{aa:Z.rb, ba:$.sb, x:192, y:-100}], "makoto-4":[{aa:Z.rb, ba:$.sb, x:240, y:-100}], "makoto-5":[{aa:Z.rb, ba:$.sb, x:288, y:-100}], "makoto-6":[{aa:Z.rb, ba:$.sb, x:336, y:-100}], "makoto-7":[{aa:Z.rb, ba:$.sb, x:384, y:-100}], "makoto-8":[{aa:Z.rb, ba:$.sb, x:432, y:-100}], "makoto-R0":[{aa:Z.rb, ba:$.sb, x:580, y:128}], "fighter-m-0":[{aa:Z.ec, ba:$.fc, x:96, y:-192}], "fighter-m-1":[{aa:Z.ec, 
ba:$.fc, x:144, y:-192}], "fighter-m-2":[{aa:Z.ec, ba:$.fc, x:192, y:-192}], "fighter-m-3":[{aa:Z.ec, ba:$.fc, x:240, y:-192}], "fighter-m-4":[{aa:Z.ec, ba:$.fc, x:288, y:-192}], "fighter-m-5":[{aa:Z.ec, ba:$.fc, x:336, y:-192}], "fighter-m-6":[{aa:Z.ec, ba:$.fc, x:384, y:-192}], "komachi-0":[{aa:Z.pd, ba:$.qf, x:144, y:-192}], "komachi-1":[{aa:Z.pd, ba:$.qf, x:336, y:-192}], "komachi2-0":[{aa:Z.pd, ba:$.rf, x:144, y:-192}], "komachi2-1":[{aa:Z.pd, ba:$.rf, x:336, y:-192}], yukishiro:[{aa:Z.ee, ba:$.ee, 
x:240, y:-100}], misumi:[{aa:Z.ie, ba:[$.dh, $.je, $.ke], x:240, y:-100, Vb:j}], mai:[{aa:Z.he, ba:$.he, x:780, y:128}]};
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
    return f.wa(a, {frame:4, Kb:j})
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
    return f.wa(a, {frame:3, Kb:j})
  }
  function Oa(a) {
    return f.wa(a, {frame:1, Kb:j})
  }
  function ca(a) {
    return f.wa(a, {frame:2, Kb:j})
  }
  function M(a) {
    return f.wa(a, {frame:0, Kb:j})
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
  C["cannon4-0"] = new q.la({top0:f.action([p(20), f.repeat(999, [f.fa(r, ca), f.repeat(8, [p(10), f.Ad("way", "$loop.count+1"), f.fa(f.direction("-12/2 - 12*($way-2)", "sequence"), r, ca), f.repeat("$way-1", [f.fa(f.direction(12, "sequence"), r, ca)])]), p(120)])])});
  C["cannon5-0"] = new q.la({top0:f.action([f.repeat(999, [f.fa(f.direction(-60), t, U(f.te("b"))), f.repeat(11, [p(5), f.fa(f.direction(10, "sequence"), t, U(f.te("b")))]), p(60)])]), b:f.action([f.wait(5), f.Hh(f.speed(0), 0), a(r, 0.1, 5, function(a) {
    return f.fa(f.direction(0, "relative"), a, D)
  }), f.bc])});
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
  C["nagisa-1-1"] = new q.la({top0:f.action([p(90), f.repeat(3, [f.Ad("way", "5 + $loop.index*6"), a(w, 0.01, "3 + $loop.index*4", function(a) {
    return f.action([d("$way", -110, 110, a, D, f.offsetX(-190), f.offsetY(-20)), d("$way", -110, 110, a, D, f.offsetX(190), f.offsetY(-20)), f.wait(5)])
  }), p(60)]), p(60)])});
  C["nagisa-1-2"] = new q.la({top0:f.action([f.repeat(12, [d(15, -90, 90, z, D), p(40)])]), top1:f.action([f.repeat(3, [f.repeat(3, [d(5, -65, -55, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, -35, -25, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, -5, 5, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, 25, 35, r, M, f.offsetX(-190), f.offsetY(-20)), d(5, 55, 65, r, M, f.offsetX(-190), f.offsetY(-20)), f.wait(2)]), p(60), f.repeat(3, [d(5, -65, -55, r, M, f.offsetX(190), f.offsetY(-20)), d(5, -35, -25, 
  r, M, f.offsetX(190), f.offsetY(-20)), d(5, -5, 5, r, M, f.offsetX(190), f.offsetY(-20)), d(5, 25, 35, r, M, f.offsetX(190), f.offsetY(-20)), d(5, 55, 65, r, M, f.offsetX(190), f.offsetY(-20)), f.wait(2)]), p(60)])])});
  C["nagisa-1-3"] = new q.la({top0:f.action([p(60), f.repeat(3, [f.fa(f.direction(-60), r, S, f.offsetX(-190), f.offsetY(-20)), f.repeat(20, [p(15), f.fa(f.direction(6, "sequence"), r, S, f.offsetX(-190), f.offsetY(-20))])])]), top1:f.action([p(80), f.repeat(3, [f.fa(f.direction(60), r, S, f.offsetX(190), f.offsetY(-20)), f.repeat(20, [p(15), f.fa(f.direction(-6, "sequence"), r, S, f.offsetX(190), f.offsetY(-20))])])]), top2:f.action([f.repeat(6, [f.repeat(3, [d(5, -60, -40, r, I, f.offsetX(-190), 
  f.offsetY(-20)), d(5, -20, -10, r, I, f.offsetX(-190), f.offsetY(-20)), d(5, 10, 20, r, I, f.offsetX(-190), f.offsetY(-20)), d(5, 40, 60, r, I, f.offsetX(-190), f.offsetY(-20)), f.wait(4)]), p(60), f.repeat(3, [d(5, -60, -40, r, I, f.offsetX(190), f.offsetY(-20)), d(5, -20, -10, r, I, f.offsetX(190), f.offsetY(-20)), d(5, 10, 20, r, I, f.offsetX(190), f.offsetY(-20)), d(5, 40, 60, r, I, f.offsetX(190), f.offsetY(-20)), f.wait(4)]), p(60)])])});
  C["nagisa-2-1"] = new q.la({top0:f.action([p(120), f.repeat(36, [b(6, "+$loop.index*10", "+$loop.index*10 + 360", z, Q, f.offsetX(-190), f.offsetY(-20)), b(6, "-$loop.index*10", "-$loop.index*10 + 360", z, Q, f.offsetX(190), f.offsetY(-20)), p(10)])]), top1:f.action([p(120), f.repeat(30, [b(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, T), b(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, T), p(12)])])});
  C["nagisa-2-2"] = new q.la({top0:f.action([p(120), f.repeat(30, [b(4, "+$loop.index*5", "+$loop.index*5 + 270", v, T), p(12)])]), top1:f.action([p(120), f.repeat(6, [b(9, 150, 130, z(0.8), D), b(9, 172, 188, z(0.8), D), b(9, 210, 230, z(0.8), D), p(30), b(9, 170, 150, z(0.8), D), b(9, 190, 210, z(0.8), D), p(30)])])});
  C["nagisa-2-3"] = new q.la({top:f.action([p(120), f.repeat(12, [b(23, 0, 360, z, I, f.offsetX(-190), f.offsetY(-20)), b(23, 0, 360, z, I), b(23, 0, 360, z, I, f.offsetX(190), f.offsetY(-20)), p(30)])])});
  C["nagisa-3-1"] = new q.la({top0:f.action([p(50), f.repeat(999, [a(v, 0.001, 5, function(a) {
    return f.action([d(41, "-180", "+180", a, ca, f.offsetX(-190), f.offsetY(-20)), d(41, "-180", "+180", a, ca, f.offsetX(190), f.offsetY(-20))])
  }), p(50)])]), top1:f.action([f.repeat(999, [d(2, -2, 0, w, D), p(10), d(2, 0, 2, w, D), p(150)])])});
  C["mai-1"] = new q.la({top0:f.action([p(50), f.repeat(50, [f.Ad("from", "+Math.cos($loop.index*0.15)*40-170"), b(3, "$from", "$from+60", t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, Q), f.bc]))), f.Ad("from", "-Math.cos($loop.index*0.15)*40-10"), b(3, "$from", "$from-60", t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, Q), f.bc]))), p(8)])]), top1:f.action([p(50), f.repeat(12, [b(5, -50, 50, t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.bc]))), 
  b(5, -230, -130, t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.bc]))), p(16), b(6, -50, 50, t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.bc]))), b(6, -230, -130, t, U(f.action([f.wait(8), f.fa(f.direction(0, "relative"), r, T), f.bc]))), p(16)])])});
  C["mai-2"] = new q.la({top:f.action([p(50), f.repeat(15, [f.fa(f.direction(-10), ca(f.te("fireChild", "$loop.index*10"))), p(8)])]), fireChild:f.action([p("40+$1"), a(r, 0.1, 5, function(a) {
    return f.fa(f.direction(-90, "absolute"), a, S)
  }), f.bc])});
  C.na = function() {
    for(var a = 0;2E3 > a;a++) {
      va.push(L())
    }
    a = C.Cd = tm.Va.dc.Rc;
    a.Ie = function(a) {
      return!(a instanceof L) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Ff = function(a) {
      var b = va.shift(0);
      if(b) {
        return b.ra = u.wg, ga.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), a.Kb ? (b.scaleX = 1, b.scaleY = 1, b.ac = m) : (b.scaleX = 0.8, b.scaleY = 1.5, b.ac = j), b.visible = a.visible === m ? m : j, b.Kb = !!a.Kb, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Jf = function(a) {
      return-80 <= a.x && 560 > a.x && -80 <= a.y && 720 > a.y
    };
    a.sc = 3.5;
    q.va.Oa.$rank = 0;
    q.va.Oa.$hyperOff = 1
  };
  C.erase = function(a, b) {
    for(var c = [].concat(ga), d = 0, f = c.length;d < f;d++) {
      a && sa(!!b).setPosition(c[d].x, c[d].y), c[d].Na()
    }
  };
  C.Pc = function() {
    for(var a = [].concat(ga), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  L = tm.createClass({superClass:tm.app.Sprite, ra:0, Kb:m, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 7;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      va.push(this);
      var a = ga.indexOf(this);
      -1 !== a && ga.splice(a, 1)
    })
  }, update:function() {
    this.Kb && (this.rotation += 15)
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

