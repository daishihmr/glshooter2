/*
 bulletml.js v0.5.0-SNAPSHOT

 License
 http://daishihmr.mit-license.org/
*/
function h(c) {
  throw c;
}
var i = void 0, j = !0, l = null, z = !1;
function L() {
  return function() {
  }
}
var M = {$j:this};
(function() {
  function c(b, c) {
    for(var d = 0, k = b.length;d < k;d++) {
      if(b[d].label == c) {
        return b[d]
      }
    }
  }
  M.ia = function(b) {
    this.type = "none";
    this.root = this;
    this.tb = [];
    this.Nf = [];
    this.Rf = [];
    if(b !== i) {
      for(var c in b) {
        b.hasOwnProperty(c) && (b[c].label = c, b[c] instanceof M.ac ? this.tb.push(b[c]) : b[c] instanceof M.Wa ? this.Nf.push(b[c]) : b[c] instanceof M.be && this.Rf.push(b[c]))
      }
      b = 0;
      for(c = this.tb.length;b < c;b++) {
        this.tb[b].oc(this)
      }
      b = 0;
      for(c = this.Nf.length;b < c;b++) {
        this.Nf[b].oc(this)
      }
      b = 0;
      for(c = this.Rf.length;b < c;b++) {
        this.Rf[b].oc(this)
      }
    }
  };
  M.ia.prototype.dj = function(b) {
    return c(this.tb, b)
  };
  M.ia.prototype.il = function() {
    for(var b = [], c = 0, d = this.tb.length;c < d;c++) {
      var k = this.tb[c];
      k.label && 0 === k.label.indexOf("top") && (b[b.length] = k.label)
    }
    return b
  };
  M.ia.prototype.Xk = function(b) {
    var c;
    if(c = this.dj(b)) {
      return c
    }
    h(Error("action labeled '" + b + "' is undefined."))
  };
  M.ia.prototype.Yk = function(b) {
    return c(this.Nf, b)
  };
  M.ia.prototype.Zk = function(b) {
    var c;
    if(c = this.Yk(b)) {
      return c
    }
    h(Error("bullet labeled '" + b + "' is undefined."))
  };
  M.ia.prototype.$k = function(b) {
    return c(this.Rf, b)
  };
  M.ia.prototype.al = function(b) {
    var c;
    if(c = this.$k(b)) {
      return c
    }
    h(Error("fire labeled '" + b + "' is undefined."))
  };
  M.Wa = function() {
    this.root = this.label = l;
    this.direction = new M.Rc(0);
    this.speed = new M.Xc(1);
    this.tb = [];
    this.fb = {};
    this.Ga = {}
  };
  M.Wa.prototype.clone = function(b) {
    var c = new M.Wa;
    c.label = this.label;
    c.root = this.root;
    c.tb = this.tb;
    c.direction = new M.Rc(b.nb(this.direction.value));
    c.direction.type = this.direction.type;
    c.speed = new M.Xc(b.nb(this.speed.value));
    c.speed.type = this.speed.type;
    c.fb = this.fb;
    c.Ga = b.Ga;
    return c
  };
  M.Wa.prototype.oc = function(b) {
    this.root = b;
    for(var c = 0, d = this.tb.length;c < d;c++) {
      this.tb[c].oc(b)
    }
  };
  M.vf = function(b) {
    this.root = l;
    this.label = b;
    this.pb = []
  };
  M.vf.prototype.clone = function(b) {
    var c = b.Ga;
    b.Ga = b.$g(this.pb);
    var d = this.root.Zk(this.label).clone(b);
    b.Ga = c;
    return d
  };
  M.vf.prototype.oc = function(b) {
    this.root = b
  };
  M.sb = function() {
    this.Pb = ""
  };
  M.sb.prototype.oc = function(b) {
    this.root = b
  };
  M.ac = function() {
    this.Pb = "action";
    this.root = this.label = l;
    this.tc = [];
    this.pb = []
  };
  M.ac.prototype = new M.sb;
  M.ac.prototype.oc = function(b) {
    this.root = b;
    for(var c = 0, d = this.tc.length;c < d;c++) {
      this.tc[c].oc(b)
    }
  };
  M.ac.prototype.clone = function() {
    var b = new M.ac;
    b.label = this.label;
    b.root = this.root;
    b.tc = this.tc;
    return b
  };
  M.ae = function(b) {
    this.Pb = "actionRef";
    this.label = b;
    this.root = l;
    this.pb = []
  };
  M.ae.prototype = new M.sb;
  M.ae.prototype.clone = function() {
    var b = new M.ac;
    b.root = this.root;
    b.tc.push(this);
    return b
  };
  M.be = function() {
    this.Pb = "fire";
    this.Ha = this.speed = this.direction = this.root = this.label = l;
    this.fb = new M.zf
  };
  M.be.prototype = new M.sb;
  M.be.prototype.oc = function(b) {
    this.root = b;
    this.Ha && this.Ha.oc(b)
  };
  M.rg = function(b) {
    this.Pb = "fireRef";
    this.label = b;
    this.pb = []
  };
  M.rg.prototype = new M.sb;
  M.xf = function() {
    this.Pb = "changeDirection";
    this.direction = new M.Rc;
    this.Mb = 0
  };
  M.xf.prototype = new M.sb;
  M.yf = function() {
    this.Pb = "changeSpeed";
    this.speed = new M.Xc;
    this.Mb = 0
  };
  M.yf.prototype = new M.sb;
  M.tf = function() {
    this.Pb = "accel";
    this.Nc = new M.wg;
    this.Qc = new M.Xg;
    this.Mb = 0
  };
  M.tf.prototype = new M.sb;
  M.Ff = function(b) {
    this.Pb = "wait";
    this.value = b || 0
  };
  M.Ff.prototype = new M.sb;
  M.Wg = function() {
    this.Pb = "vanish"
  };
  M.Wg.prototype = new M.sb;
  M.Df = function() {
    this.Pb = "repeat";
    this.Ij = 0;
    this.action = l;
    this.pb = []
  };
  M.Df.prototype = new M.sb;
  M.Df.prototype.oc = function(b) {
    this.root = b;
    this.action && this.action.oc(b)
  };
  M.ng = function(b, c) {
    this.Pb = "bind";
    this.cm = b;
    this.Wk = c
  };
  M.ng.prototype = new M.sb;
  M.Mg = function(b, c) {
    this.Pb = "notify";
    this.Tk = b;
    this.pb = c || l
  };
  M.Mg.prototype = new M.sb;
  M.Yj = new M.sb;
  M.Rc = function(b) {
    this.type = "aim";
    this.value = b || 0
  };
  M.Xc = function(b) {
    this.type = "absolute";
    this.value = b === i ? 1 : b
  };
  M.wg = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  M.Xg = function(b) {
    this.type = "absolute";
    this.value = b || 0
  };
  M.zf = function(b) {
    b = b || {};
    this.offsetX = b.offsetX || 0;
    this.offsetY = b.offsetY || 0;
    this.ra = j;
    b.ra !== i && (this.ra = !!b.ra)
  };
  M.Fi = function(b) {
    this.value = b || 0
  };
  M.Gi = function(b) {
    this.value = b || 0
  };
  M.ni = function(b) {
    this.value = !!b
  }
})();
M.Qa = function(c) {
  this.Oi = c;
  this.Gf = [];
  this.ld = -1;
  this.Bb = l;
  this.Ga = {}
};
M.Qa.prototype.next = function() {
  this.ld += 1;
  if(this.Bb !== l) {
    var c = this.Bb.tc[this.ld];
    if(c !== i) {
      if(c instanceof M.ac) {
        return this.Me(), this.Bb = c, this.Ga = this.Yg(), this.next()
      }
      if(c instanceof M.ae) {
        return this.Me(), this.Bb = this.Oi.Xk(c.label), this.Ga = this.$g(c.pb), this.next()
      }
      if(c instanceof M.Df) {
        return this.Ga.we = 0, this.Ga.rj = this.nb(c.Ij) | 0, this.Me(), this.Bb = c.action.clone(), this.Ga = this.Yg(), this.next()
      }
      if(c instanceof M.be) {
        var b = new M.be;
        b.Ha = c.Ha.clone(this);
        c.direction !== l && (b.direction = new M.Rc(this.nb(c.direction.value)), b.direction.type = c.direction.type);
        c.speed !== l && (b.speed = new M.Xc(this.nb(c.speed.value)), b.speed.type = c.speed.type);
        b.fb = new M.zf;
        b.fb.offsetX = this.nb(c.fb.offsetX);
        b.fb.offsetY = this.nb(c.fb.offsetY);
        b.fb.ra = c.fb.ra;
        return b
      }
      return c instanceof M.rg ? (this.Me(), this.Bb = new M.ac, this.Bb.tc = [this.Oi.al(c.label)], this.Ga = this.$g(c.pb), this.next()) : c instanceof M.xf ? (b = new M.xf, b.direction.type = c.direction.type, b.direction.value = this.nb(c.direction.value), b.Mb = this.nb(c.Mb), b) : c instanceof M.yf ? (b = new M.yf, b.speed.type = c.speed.type, b.speed.value = this.nb(c.speed.value), b.Mb = this.nb(c.Mb), b) : c instanceof M.tf ? (b = new M.tf, b.Nc.type = c.Nc.type, b.Nc.value = this.nb(c.Nc.value), 
      b.Qc.type = c.Qc.type, b.Qc.value = this.nb(c.Qc.value), b.Mb = this.nb(c.Mb), b) : c instanceof M.Ff ? new M.Ff(this.nb(c.value)) : c instanceof M.Wg ? c : c instanceof M.ng ? (this.Ga["$" + c.cm] = this.nb(c.Wk), M.Yj) : c instanceof M.Mg ? c : l
    }
    this.Fk();
    if(this.Bb === l) {
      return l
    }
    if((c = this.Bb.tc[this.ld]) && "repeat" == c.Pb) {
      this.Ga.we++, this.Ga.we < this.Ga.rj && (this.Me(), this.Bb = c.action.clone(), this.Ga = this.Yg())
    }
    return this.next()
  }
  return l
};
M.Qa.prototype.Me = function() {
  this.Gf.push({action:this.Bb, cursor:this.ld, scope:this.Ga});
  this.ld = -1
};
M.Qa.prototype.Fk = function() {
  var c = this.Gf.pop();
  c ? (this.ld = c.cursor, this.Bb = c.action, this.Ga = c.scope) : (this.ld = -1, this.Bb = l, this.Ga = {})
};
M.Qa.prototype.nb = function(c) {
  var b;
  if("boolean" === typeof c || "number" === typeof c) {
    return c
  }
  if(isNaN(b = Number(c))) {
    if((b = this.Ga[c]) || (b = M.Qa.ob[c])) {
      return b
    }
    if("$rand" === c) {
      return Math.random()
    }
  }else {
    return b
  }
  b = {};
  for(var f in M.Qa.ob) {
    M.Qa.ob.hasOwnProperty(f) && (b[f] = M.Qa.ob[f])
  }
  for(f in this.Ga) {
    this.Ga.hasOwnProperty(f) && (b[f] = this.Ga[f])
  }
  b.$rand = Math.random();
  (f = this.Gf[this.Gf.length - 1]) && (b.$loop = {index:f.scope.we, count:f.scope.we + 1, first:0 === f.scope.we, last:f.scope.we + 1 >= f.scope.rj});
  return(new Function("return " + c.split("$").join("this.$"))).apply(b)
};
M.Qa.prototype.$g = function(c) {
  var b = {};
  if(c) {
    for(var f = 0, d = c.length;f < d;f++) {
      b["$" + (f + 1)] = this.nb(c[f])
    }
  }else {
    for(f in this.Ga) {
      this.Ga.hasOwnProperty(f) && (b[f] = this.Ga[f])
    }
  }
  return b
};
M.Qa.prototype.Yg = function() {
  var c = {}, b;
  for(b in this.Ga) {
    this.Ga.hasOwnProperty(b) && (c[b] = this.Ga[b])
  }
  return c
};
M.ia.prototype.zh = function(c) {
  var b = new M.Qa(this);
  if(c = this.dj(c)) {
    b.Bb = c
  }
  return b
};
M.Wa.prototype.zh = function() {
  var c = new M.Qa(this.root), b = new M.ac;
  b.root = this.root;
  b.tc = this.tb;
  c.Bb = b;
  c.Ga = this.Ga;
  return c
};
M.Qa.ob = {};
M.La = function(c) {
  c = c || "";
  for(var b in M.La) {
    M.La.hasOwnProperty(b) && (M.$j[c + b] = M.La[b])
  }
};
M.La.action = function(c) {
  if(0 < arguments.length) {
    for(var b = 0, f = arguments.length;b < f;b++) {
      arguments[b] instanceof Function && (arguments[b] = arguments[b]())
    }
  }
  if(c instanceof Array) {
    b = 0;
    for(f = c.length;b < f;b++) {
      c[b] instanceof Function && (c[b] = c[b]())
    }
  }
  var d = new M.ac;
  if(c instanceof Array) {
    c.some(function(b) {
      return!(b instanceof M.sb)
    }) && h(Error("argument type error.")), d.tc = c
  }else {
    b = 0;
    for(f = arguments.length;b < f;b++) {
      arguments[b] instanceof M.sb ? d.tc[b] = arguments[b] : h(Error("argument type error."))
    }
  }
  return d
};
M.La.ga = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("label is required."));
  d = new M.ae(c);
  if(b instanceof Array) {
    d.pb = b
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.pb.push(arguments[f])
    }
  }
  return d
};
M.La.Ha = function(c, b, f, d) {
  for(var k = 0, n = arguments.length;k < n;k++) {
    arguments[k] instanceof Function && (arguments[k] = arguments[k]())
  }
  n = new M.Wa;
  for(k = 0;k < arguments.length;k++) {
    arguments[k] instanceof M.Rc ? n.direction = arguments[k] : arguments[k] instanceof M.Xc ? n.speed = arguments[k] : arguments[k] instanceof M.ac ? n.tb.push(arguments[k]) : arguments[k] instanceof M.ae ? n.tb.push(arguments[k]) : arguments[k] instanceof Array ? n.tb.push(M.La.action(arguments[k])) : arguments[k] instanceof Object ? n.fb = arguments[k] : "string" === typeof arguments[k] && (n.label = arguments[k])
  }
  return n
};
M.La.gm = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("label is required."));
  d = new M.vf(c);
  if(b instanceof Array) {
    d.pb = b
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.pb.push(arguments[f])
    }
  }
  return d
};
M.La.fire = function(c, b, f, d) {
  for(var k = 0, n = arguments.length;k < n;k++) {
    arguments[k] instanceof Function && (arguments[k] = arguments[k]())
  }
  n = new M.be;
  for(k = 0;k < arguments.length;k++) {
    arguments[k] instanceof M.Rc ? n.direction = arguments[k] : arguments[k] instanceof M.Xc ? n.speed = arguments[k] : arguments[k] instanceof M.Wa ? n.Ha = arguments[k] : arguments[k] instanceof M.vf ? n.Ha = arguments[k] : arguments[k] instanceof M.zf ? n.fb = arguments[k] : arguments[k] instanceof M.Fi ? n.fb.offsetX = arguments[k].value : arguments[k] instanceof M.Gi ? n.fb.offsetY = arguments[k].value : arguments[k] instanceof M.ni && (n.fb.ra = arguments[k].value)
  }
  n.Ha === i && h(Error("bullet (or bulletRef) is required."));
  return n
};
M.La.mm = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("label is required."));
  d = new M.rg(c);
  if(b instanceof Array) {
    d.pb = b
  }else {
    for(f = 1;f < arguments.length;f++) {
      d.pb.push(arguments[f])
    }
  }
  return d
};
M.La.hm = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("direction is required."));
  b === i && h(Error("term is required."));
  f = new M.xf;
  f.direction = c instanceof M.Rc ? c : new M.Rc(c);
  f.Mb = b;
  return f
};
M.La.pd = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("speed is required."));
  b === i && h(Error("term is required."));
  f = new M.yf;
  f.speed = c instanceof M.Xc ? c : new M.Xc(c);
  f.Mb = b;
  return f
};
M.La.em = function(c, b, f) {
  for(var d = 0, k = arguments.length;d < k;d++) {
    arguments[d] instanceof Function && (arguments[d] = arguments[d]())
  }
  k = new M.tf;
  for(d = 0;d < arguments.length;d++) {
    arguments[d] instanceof M.wg ? k.Nc = c : arguments[d] instanceof M.Xg ? k.Qc = b : k.Mb = arguments[d]
  }
  k.Nc === i && k.Qc === i && h(Error("horizontal or vertical is required."));
  k.Mb === i && h(Error("term is required."));
  return k
};
M.La.wait = function(c) {
  for(var b = 0, f = arguments.length;b < f;b++) {
    arguments[b] instanceof Function && (arguments[b] = arguments[b]())
  }
  c === i && h(Error("value is required."));
  return new M.Ff(c)
};
M.La.xa = function() {
  return new M.Wg
};
M.La.repeat = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("times is required."));
  b === i && h(Error("action is required."));
  d = new M.Df;
  d.Ij = c;
  if(b instanceof M.ac || b instanceof M.ae) {
    d.action = b
  }else {
    if(b instanceof Array) {
      d.action = M.La.action(b)
    }else {
      for(var k = [], f = 1;f < arguments.length;f++) {
        k.push(arguments[f])
      }
      d.action = M.La.action(k)
    }
  }
  return d
};
M.La.ma = function(c, b) {
  return new M.ng(c, b)
};
M.La.tm = function(c, b) {
  return new M.Mg(c, b)
};
M.La.direction = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new M.Rc(c);
  b !== i && (f.type = b);
  return f
};
M.La.speed = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new M.Xc(c);
  b && (f.type = b);
  return f
};
M.La.Nc = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new M.wg(c);
  b && (f.type = b);
  return f
};
M.La.Qc = function(c, b) {
  for(var f = 0, d = arguments.length;f < d;f++) {
    arguments[f] instanceof Function && (arguments[f] = arguments[f]())
  }
  c === i && h(Error("value is required."));
  f = new M.Xg(c);
  b && (f.type = b);
  return f
};
M.La.lm = function(c) {
  return new M.zf(c)
};
M.La.offsetX = function(c) {
  return new M.Fi(c)
};
M.La.offsetY = function(c) {
  return new M.Gi(c)
};
M.La.ra = function(c) {
  return new M.ni(c)
};
tm.Ob = tm.Ob || {};
(function() {
  function c(b) {
    for(;b <= -Math.PI;) {
      b += 2 * Math.PI
    }
    for(;Math.PI < b;) {
      b -= 2 * Math.PI
    }
    return b
  }
  function b(b, c) {
    return Math.atan2(c.y - b.y, c.x - b.x)
  }
  tm.Ob.Dd = tm.createClass({init:function(b) {
    b || h(Error("argument is invalid.", b));
    this.Mi = b
  }, Ve:function(b, c) {
    var d = this.Mi.il();
    if(c === i && 0 < d.length) {
      for(var f = [], C = 0, q = d.length;C < q;C++) {
        f[f.length] = this.Ni(b, d[C])
      }
      for(var p = function() {
        if(!p.stop) {
          for(var b = f.length;b--;) {
            f[b].call(this)
          }
          p.qh == f.length && (p.Te = j, this.dispatchEvent(tm.event.Event("completeattack")))
        }
      }, C = f.length;C--;) {
        f[C].eg = p
      }
      p.qh = 0;
      p.Wi = function() {
        this.qh++
      };
      p.qh = 0;
      p.Te = z;
      p.Yf = j;
      p.stop = z;
      return p
    }
    return this.Ni(b, c)
  }, Ni:function(b, c) {
    function d() {
      if(!d.stop) {
        d.pa += 1;
        this.pa = d.pa;
        var b = d.Of, c = d.Ek;
        if(c) {
          if(d.pa < d.oh ? d.direction += d.ne : d.pa === d.oh && (d.direction = d.rd), d.pa < d.ph ? d.speed += d.rf : d.pa === d.ph && (d.speed = d.Ce), d.pa < d.dh ? (d.Xd += d.Jf, d.Zd += d.Kf) : d.pa === d.dh && (d.Xd = d.Hf, d.Zd = d.If), this.x += Math.cos(d.direction) * d.speed * b.Yd, this.y += Math.sin(d.direction) * d.speed * b.Yd, this.x += d.Xd * b.Yd, this.y += d.Zd * b.Yd, b.Dh(this)) {
            if(b.Ad || this.Ad) {
              this.rotation = (d.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, this.speed = d.speed
            }
            if(!(d.pa < d.Rj || d.Te)) {
              for(var f;f = d.Sj.next();) {
                switch(f.Pb) {
                  case "fire":
                    c.Bk.call(this, f, b, d, c);
                    break;
                  case "wait":
                    b = 0;
                    d.Rj = "number" === typeof f.value ? d.pa + f.value : 0 !== (b = ~~f.value) ? d.pa + b : d.pa + eval(f.value);
                    return;
                  case "changeDirection":
                    c.wk.call(this, f, b, d);
                    break;
                  case "changeSpeed":
                    c.xk.call(this, f, d);
                    break;
                  case "accel":
                    c.uk.call(this, f, d);
                    break;
                  case "vanish":
                    this.remove();
                    break;
                  case "notify":
                    c.Ck.call(this, f)
                }
              }
              d.Te = j;
              d.eg ? d.eg.Wi() : this.dispatchEvent(tm.event.Event("completeattack"))
            }
          }else {
            this.remove(), d.Te = j, d.eg ? d.eg.Wi() : this.dispatchEvent(tm.event.Event("completeattack"))
          }
        }
      }
    }
    b = function(b) {
      var c = {}, d = tm.Ob.Dd.We, f;
      for(f in d) {
        d.hasOwnProperty(f) && (c[f] = d[f])
      }
      for(f in b) {
        b.hasOwnProperty(f) && (c[f] = b[f])
      }
      return c
    }(b);
    b.target || h(Error("target is undefined in config."));
    c = c || "top";
    "string" === typeof c ? d.Sj = this.Mi.zh(c) : c instanceof M.Wa ? d.Sj = c.zh() : (window.console.error(b, c), h(Error("\u5f15\u6570\u304c\u4e0d\u6b63")));
    d.Ek = this;
    d.Of = b;
    d.Rj = -1;
    d.Te = z;
    d.direction = 0;
    d.nj = 0;
    d.speed = 0;
    d.pj = 0;
    d.Xd = 0;
    d.Zd = 0;
    d.ne = 0;
    d.rd = 0;
    d.oh = -1;
    d.rf = 0;
    d.Ce = 0;
    d.ph = -1;
    d.Jf = 0;
    d.Hf = 0;
    d.Kf = 0;
    d.If = 0;
    d.dh = -1;
    d.pa = -1;
    d.stop = z;
    d.Yf = j;
    return d
  }, Ak:function(b) {
    function c() {
      c.stop || (this.x += c.$i, this.y += c.aj, c.Of.Dh(this) || this.remove())
    }
    b = function(b) {
      var c = {}, d = tm.Ob.Dd.We, f;
      for(f in d) {
        d.hasOwnProperty(f) && (c[f] = d[f])
      }
      for(f in b) {
        b.hasOwnProperty(f) && (c[f] = b[f])
      }
      return c
    }(b);
    b.target || h(Error("target is undefined in config."));
    c.Of = b;
    c.direction = 0;
    c.speed = 0;
    c.$i = 0;
    c.aj = 0;
    c.stop = z;
    c.Yf = j;
    return c
  }, Bk:function(c, d, f, A) {
    if(this.Hl === i || this.Qb) {
      var C = {label:c.Ha.label}, q;
      for(q in c.Ha.fb) {
        C[q] = c.Ha.fb[q]
      }
      if(C = d.Si(C)) {
        A = (q = 0 === c.Ha.tb.length) ? A.Ak(d) : A.Ve(d, c.Ha);
        var p = this, r = {x:this.x + c.fb.offsetX, y:this.y + c.fb.offsetY};
        f.nj = A.direction = function(m) {
          var q = eval(m.value) * Math.DEG_TO_RAD;
          switch(m.type) {
            case "aim":
              return d.target ? c.fb.ra ? b(r, d.target) + q : b(p, d.target) + q : q - Math.PI / 2;
            case "absolute":
              return q - Math.PI / 2;
            case "relative":
              return f.direction + q;
            default:
              return f.nj + q
          }
        }(c.direction || c.Ha.direction);
        f.pj = A.speed = function(b) {
          var c = eval(b.value);
          switch(b.type) {
            case "relative":
              return f.speed + c;
            case "sequence":
              return f.pj + c;
            default:
              return c
          }
        }(c.speed || c.Ha.speed);
        C.x = r.x;
        C.y = r.y;
        q && (A.$i = Math.cos(A.direction) * A.speed * d.Yd, A.aj = Math.sin(A.direction) * A.speed * d.Yd);
        C.Ad = !!C.Ad;
        if(d.Ad || C.Ad) {
          C.rotation = (A.direction + 0.5 * Math.PI) * Math.RAD_TO_DEG, C.speed = A.speed
        }
        C.addEventListener("enterframe", A);
        d.ie ? d.ie.addChild(C) : this.parent && this.parent.addChild(C)
      }
    }
  }, wk:function(d, f, s) {
    var A = eval(d.direction.value) * Math.DEG_TO_RAD, C = eval(d.Mb);
    switch(d.direction.type) {
      case "aim":
        d = f.target;
        if(!d) {
          return
        }
        s.rd = b(this, d) + A;
        s.ne = c(s.rd - s.direction) / C;
        break;
      case "absolute":
        s.rd = A - Math.PI / 2;
        s.ne = c(s.rd - s.direction) / C;
        break;
      case "relative":
        s.rd = s.direction + A;
        s.ne = c(s.rd - s.direction) / C;
        break;
      case "sequence":
        s.ne = A, s.rd = s.direction + s.ne * (C - 1)
    }
    s.oh = s.pa + C
  }, xk:function(b, c) {
    var d = eval(b.speed.value), f = eval(b.Mb);
    switch(b.speed.type) {
      case "absolute":
        c.Ce = d;
        c.rf = (c.Ce - c.speed) / f;
        break;
      case "relative":
        c.Ce = d + c.speed;
        c.rf = (c.Ce - c.speed) / f;
        break;
      case "sequence":
        c.rf = d, c.Ce = c.speed + c.rf * f
    }
    c.ph = c.pa + f
  }, uk:function(b, c) {
    var d = eval(b.Mb);
    c.dh = c.pa + d;
    if(b.Nc) {
      var f = eval(b.Nc.value);
      switch(b.Nc.type) {
        case "absolute":
        ;
        case "sequence":
          c.Jf = (f - c.Xd) / d;
          c.Hf = f;
          break;
        case "relative":
          c.Jf = f, c.Hf = (f - c.Xd) * d
      }
    }else {
      c.Jf = 0, c.Hf = c.Xd
    }
    if(b.Qc) {
      switch(f = eval(b.Qc.value), b.Qc.type) {
        case "absolute":
        ;
        case "sequence":
          c.Kf = (f - c.Zd) / d;
          c.If = f;
          break;
        case "relative":
          c.Kf = f, c.If = (f - c.Zd) * d
      }
    }else {
      c.Kf = 0, c.If = c.Zd
    }
  }, Ck:function(b) {
    var c = tm.event.Event(b.Tk);
    if(b.pb) {
      for(var d in b.pb) {
        c[d] = b.pb[d]
      }
    }
    this.dispatchEvent(c)
  }});
  var f = function() {
    var b = tm.graphics.Canvas();
    b.resize(8, 8);
    b.setTransformCenter();
    b.setLineStyle(0).setStrokeStyle("rgba(0,0,0,0)");
    b.setFillStyle(tm.graphics.RadialGradient(0, 0, 0, 0, 0, 4).addColorStopList([{offset:0, color:"white"}, {offset:0.5, color:"white"}, {offset:1, color:"red"}]).toStyle()).fillCircle(0, 0, 4);
    return tm.asset.Texture(b.canvas.toDataURL())
  }();
  tm.Ob.Ok = function(b) {
    var c = tm.app.Sprite(f, 8, 8);
    c.label = b.label;
    return c
  };
  var d = l;
  tm.Ob.Zi = function(b) {
    if(d === l) {
      if(!b.getRoot().app) {
        return j
      }
      d = b.getRoot().app;
      console.log(d instanceof tm.app.BaseApp)
    }
    return 0 <= b.x && b.x < d.width && 0 <= b.y && b.y < d.height
  };
  tm.Ob.im = function() {
    return j
  };
  tm.Ob.Dd.We = {Si:tm.Ob.Ok, Dh:tm.Ob.Zi, xm:0, Ad:z, Yd:2, target:l};
  M.ia.prototype.Ve = function(b) {
    return tm.Ob.Dd(this).Ve(b)
  }
})();
/*
 TM-Shooter

 License
 http://daishihmr.mit-license.org/
*/
tm.preload(L());
tm.main(function() {
  gls2.ak("#canvas2d");
  gls2.core.run()
});
gls2.ak = tm.createClass({superClass:tm.display.CanvasApp, mode:0, ei:0, af:0, ml:0, ol:0, nl:0, kl:0, ll:l, od:3, zc:3, Pc:0, Cb:z, aa:l, init:function(c) {
  gls2.core !== l && h(Error("class 'gls2.GlShooter2' is singleton!!"));
  this.superInit(c);
  gls2.core = this;
  this.resize(480, 640).fitWindow();
  this.fps = FPS;
  this.background = "rgba(0,0,0,0)";
  this.li = [];
  this.keyboard = tm.input.Keyboard(window);
  this.xh = tm.input.GamepadManager();
  this.gamepad = l;
  this.Sf = {}.$extend(gls2.gamepadConfigDefault);
  c = tm.ui.LoadingScene({assets:{achevements:"assets/achevements.json", tex0:"assets/tex0.png", tex_bit:"assets/tex_bit.png", tex1:"assets/tex1.png", tex2:"assets/tex2.png", tex3:"assets/tex3.png", tex4:"assets/tex4.png", tex5:"assets/tex5.png", tex_tank1:"assets/tex_tank1.png", yotsubaLeaf:"assets/tex_yotsubaLeaf.png", "kanade-cannon":"assets/kanade-cannon.png", fighter:"assets/fighters.png", laserR:"assets/laser_r.png", laserG:"assets/laser_g.png", laserB:"assets/laser_b.png", laserH:"assets/laser_h.png", 
  laserHead:"assets/laser_head.png", laserFoot:"assets/laser_foot.png", aura:"assets/aura.png", explode0:"assets/explode0.png", explode1:"assets/explode1.png", explode2:"assets/explode2.png", shotbullet:"assets/shotbullet.png", bomb:"assets/bomb.png", bombIcon:"assets/bomb_icon.png", result_bg:"assets/result_bg.png", keyDown:"assets/arrow-down-icon.png", keyLeft:"assets/arrow-left-icon.png", keyRight:"assets/arrow-right-icon.png", keyUp:"assets/arrow-up-icon.png", keyC:"assets/letter-uppercase-C-icon.png", 
  keyZ:"assets/letter-uppercase-Z-icon.png", keyX:"assets/letter-uppercase-X-icon.png", exboss:"assets/exboss.png", bgmLoopInfo:"assets2/loop.json", "sound/explode":"assets2/sen_ge_taihou03.mp3", "sound/explode2":"assets2/sen_ge_bom13.mp3", "sound/explode3":"assets2/sen_ge_bom02.mp3", "sound/explode4":"assets2/sen_ge_bom14.mp3", "sound/explode5":"assets2/sen_ge_bom17.mp3", "sound/explode6":"assets2/nc17909.mp3", "sound/star":"assets2/se_maoudamashii_system24.mp3", "sound/bomb":"assets2/sen_ge_bom17.mp3", 
  "sound/warning":"assets2/meka_ge_keihou06.mp3", "sound/select":"assets2/se_maoudamashii_system36.mp3", "sound/decision":"assets2/se_maoudamashii_system03.mp3", "sound/achevement":"assets2/se_maoudamashii_system46.mp3", "sound/voHyperStandBy":"assets/vo_hyper_standby.mp3", "sound/voHyperReady":"assets/vo_hyper_ready.mp3", "sound/voHyperStart0":"assets/vo_hyper_start.mp3", "sound/voHyperStart1":"assets/vo_hyper_start2.mp3", "sound/voBomb":"assets/vo_bomb.mp3", "sound/voExtend":"assets/vo_extend.mp3", 
  "sound/voGetBomb":"assets/vo_getbomb.mp3", "sound/voJacms":"assets/vo_jacms.mp3", "sound/voLetsGo":"assets/vo_letsgo.mp3", "sound/voSelectShip":"assets/vo_select_your_machine.mp3", "sound/voWarning":"assets/vo_warning.mp3"}, width:480, height:640, nextScene:function() {
    this.Dk();
    return gls2.TitleScene()
  }.bind(this)});
  c.bg.canvas.clearColor("black");
  this.replaceScene(c);
  if(c = localStorage.getItem("tmshooter.config")) {
    c = JSON.parse(c), this.od = c.bgmVolume, this.zc = c.seVolume, this.Pc = c.particleEffectLevel, this.Cb = c.bulletBig
  }
}, Ti:function() {
  var c = window.achevements, b = tm.asset.AssetManager.get("achevements").data;
  return!c ? 3 : Math.floor(c.reduce(function(c, d) {
    return b[d] ? c + O[b[d].grade] : c
  }, 3))
}, update:function() {
  this.xh._update();
  if(this.gamepad === l) {
    for(var c = 0;4 > c;c++) {
      if(this.xh.isConnected(c)) {
        this.gamepad = this.xh.get(c);
        break
      }
    }
  }
  for(var b = [].concat(this.li), c = 0;c < b.length;c++) {
    b[c].frame === this.frame ? b[c].fn() : this.li.erase(b[c])
  }
}, draw:function() {
  this.canvas.globalCompositeOperation = "copy"
}, Dk:function() {
  gls2.Ba.setup(12345);
  "tex1 tex2 tex3 tex4 tex5 tex_tank1 yotsubaLeaf kanade-cannon exboss".split(" ").forEach(function(c) {
    var b = tm.asset.AssetManager.get(c), f = tm.graphics.Canvas();
    f.resize(b.width, b.height);
    f.drawTexture(b, 0, 0);
    var d = f.getBitmap();
    d.filter({calc:function(b, c, d, f, k) {
      k.setPixelIndex(c, b[0], 0, 0)
    }});
    var k = tm.graphics.Canvas();
    k.resize(b.width, b.height);
    k.drawBitmap(d, 0, 0);
    tm.asset.AssetManager.set(c + "Red", k);
    f = f.getBitmap();
    f.filter({calc:function(b, c, d, f, k) {
      k.setPixelIndex(c, b[2], b[0], b[1])
    }});
    d = tm.graphics.Canvas();
    d.resize(b.width, b.height);
    d.drawBitmap(f, 0, 0);
    tm.asset.AssetManager.set(c, d)
  });
  gls2.fa.setup();
  gls2.na.setup();
  this.aa = gls2.cb()
}, km:function() {
  this.stop()
}, qj:z, $h:function(c, b) {
  if(0 === this.mode) {
    var f = this.aa.Ze.slice(0, this.aa.Aa + 1).average(), f = {score:Math.floor(this.aa.score), stage:this.aa.Aa + 1, continueCount:this.aa.Zc, shipType:this.aa.da.type, shipStyle:this.aa.da.style, fps:f, screenShot:this.aa.yd, scoreByStage:this.aa.fd, fpsAvgByStage:this.aa.Ze, missCountByStage:this.aa.gf, continueCountByStage:this.aa.Ue, bombCountByStage:this.aa.je, autoBombCountByStage:this.aa.nd, hyperCountByStage:this.aa.Sd, hyperLevelHistory:this.aa.Ch, game:1};
    c ? (f.userName = c, this.qj = z) : this.qj = j;
    tm.util.Ajax.load({url:"/api/ranking/post", data:f, type:"POST", dataType:"json", success:function(c) {
      if(c) {
        if(c.success) {
          b(l, j, c.scoreId)
        }else {
          if(c.confirmLogin) {
            if(window.confirm("login (or sign up) ?\n\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u307e\u305b\u3093\u3002\u30ed\u30b0\u30a4\u30f3\u3057\u307e\u3059\u304b\uff1f")) {
              window.onchildclose = function() {
                this.$h(l, b);
                window.onchildclose = i
              }.bind(this), window.open("/loginByPopup", "login", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
            }else {
              if(window.confirm("try anonymous submit?\n\u533f\u540d\u3067\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3059\u304b\uff1f")) {
                for(c = "";"" === c;) {
                  c = window.prompt("user name\n\u4eee\u306e\u30e6\u30fc\u30b6\u30fc\u540d:", this.hl())
                }
                c !== l && (c = c.substring(0, 10), this.$h(c + " (\u533f\u540d)", b))
              }else {
                b(l, z)
              }
            }
          }else {
            b("\u30b9\u30b3\u30a2\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c")
          }
        }
      }else {
        b("\u30b9\u30b3\u30a2\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c")
      }
    }.bind(this), error:function() {
      b("\u30b9\u30b3\u30a2\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c")
    }})
  }
}, hl:function() {
  return"\u540d\u7121\u3057\u30b7\u30e5\u30fc\u30bf\u30fc \u540d\u7121\u3057\u5927\u4f50 \u540d\u7121\u3057\u306b\u3083\u3093 \u540d\u7121\u3057\u305f\u305d \u540d\u7121\u3057\u2606 \u80fd\u767b\u540d\u7121\u3057 \u540d\u7121\u3057(30) \u540d\u7121\u3057\u7dcf\u7406".split(" ").pickup()
}, li:l, setTimeoutF:function(c, b) {
  timeoutTasks.push({frame:this.frame + b, fn:c})
}, ta:function(c) {
  if(0 === this.mode && window.achevements && -1 === window.achevements.indexOf(c)) {
    var b = tm.asset.AssetManager.get("achevements").data;
    if(b[c]) {
      var f = window.achevements;
      -1 == f.indexOf(c) && (f.push(c), tm.util.Ajax.load({url:"/api/achevement/" + c, type:"POST", dataType:"json", success:function() {
        b[c] && (gls2.wa("achevement"), this.aa.kj.addChild(gls2.yi(b[c].title)))
      }.bind(this), error:function() {
        console.warn("error!")
      }}))
    }
  }
}, Sf:l, getKeyDirection:function() {
  var c = this.gamepad.getStickDirection();
  0.0625 > c.lengthSquared() && c.set(0, 0);
  c = tm.geom.Vector2.add(c, this.keyboard.getKeyDirection());
  c = tm.geom.Vector2.add(c, this.gamepad.getKeyDirection());
  return tm.geom.Vector2.add(this.keyboard.getKeyDirection(), c).normalize()
}, getKey:function(c) {
  return this.keyboard.getKey(c) || this.gamepad.getKey(this.Sf[c])
}, getKeyDown:function(c) {
  return this.keyboard.getKeyDown(c) || this.gamepad.getKeyDown(this.Sf[c])
}, getKeyUp:function(c) {
  return this.keyboard.getKeyUp(c) || this.gamepad.getKeyUp(this.Sf[c])
}});
gls2.gamepadConfigDefault = {z:"r2", x:"a", c:"x", up:"up", down:"down", left:"left", right:"right", space:"start"};
tm.display.AnimationSprite.prototype.clone = function() {
  return tm.app.AnimationSprite(this.ss, this.width, this.height)
};
gls2.Wb = function(c, b) {
  return(c.x - b.x) * (c.x - b.x) + (c.y - b.y) * (c.y - b.y)
};
gls2.pause = function() {
  gls2.core && gls2.core.currentScene === gls2.cb.Je && gls2.cb.Je.kf(0)
};
var FPS = 60, T = [2E9, 2E10], U = [3, 2, 1, 5], X = [6, 4, 2, 99], Z = [1, 10, 20, 30, 45, 60, 85, 110, 150, 180, 300], aa = [1, 2, 4, 8, 10, 15, 20, 25, 30, 35, 40], O = [0.1, 0.4, 1];
(function() {
  var c = l;
  gls2.Hi = tm.createClass({superClass:tm.display.Sprite, type:0, style:0, bb:0, Lc:j, Oe:j, eb:z, aa:l, speed:0, Ub:l, me:l, uj:l, Wf:l, Yb:l, bf:l, Jc:l, Ah:l, Bh:l, frame:0, za:0, init:function(b, f, d) {
    this.superInit("fighter", 64, 64);
    this.aa = b;
    this.type = f;
    this.style = d;
    tm.Ob.Dd.We.target = this;
    this.speed = 1.2 * [6, 5, 4.5][f];
    this.boundingRadius = 2 === d || 3 === d ? 2 : 7;
    this.altitude = 10;
    this.me = this.uj = gls2.Ki(f, 100);
    this.Wf = gls2.Ki(3, 100);
    this.Yb = gls2.Di(this, {redBody:"laserR", greenBody:"laserG", blueBody:"laserB", hyperBody:"laserH", head:"laserHead", foot:"laserFoot", aura:"aura"});
    this.Yb.visible = z;
    this.zk();
    this.Ub = this.yk();
    1 === this.style && (this.Ub = [this.Ub[1], this.Ub[2]]);
    this.Jc = tm.display.CanvasElement().addChildTo(this);
    f = 0;
    for(d = this.Ub.length;f < d;f++) {
      var k = this.Ub[f];
      gls2.Uj(this, k).setPosition(k.x, k.y).addChildTo(this.Jc)
    }
    this.ul = tm.display.CircleShape(140, 140, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(70, 70, 0, 70, 70, 70).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:0.5, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(255,255,255,0.0)"}]).toStyle()}).addChildTo(this);
    this.ul.blendMode = "lighter";
    this.Ah = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Ah.blendMode = "lighter";
    this.Ah.update = function() {
      this.rotation += 2;
      this.visible = 0 < b.Ta && !b.ab
    };
    this.Bh = tm.display.CircleShape(80, 80, {fillStyle:"rgba(0,0,0,0)", strokeStyle:tm.graphics.LinearGradient(0, 0, 0, 80).addColorStopList([{offset:0, color:"rgba(255,255,100,0.0)"}, {offset:0.4, color:"rgba(255,255,100,0.1)"}, {offset:0.5, color:"rgba(255,255,255,1.0)"}, {offset:0.6, color:"rgba(255,255,100,0.1)"}, {offset:1, color:"rgba(255,255,100,0.0)"}]).toStyle(), lineWidth:4}).addChildTo(this);
    this.Bh.blendMode = "lighter";
    this.Bh.update = function() {
      this.rotation -= 2;
      this.visible = 0 < b.Ta && !b.ab
    };
    this.Rb = tm.display.CanvasElement(80, 80).addChildTo(this);
    this.Rb.blendMode = "lighter";
    this.Rb.rotation = -90;
    this.Rb.strokeStyle = "rgba(180,180,255,0.4)";
    this.Rb.update = function() {
      this.visible = b.ab
    };
    this.Rb.draw = function(c) {
      c.lineCap = "round";
      var d = b.ue / 600;
      c.strokeStyle = "rgba(50,50,255,0.4)";
      c.lineWidth = "15";
      c.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, z);
      c.strokeStyle = "rgba(100,100,255,0.4)";
      c.lineWidth = "8";
      c.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, z);
      c.strokeStyle = "rgba(180,180,255,0.4)";
      c.lineWidth = "4";
      c.strokeArc(0, 0, 40, 0, 2 * d * Math.PI, z)
    };
    this.se = tm.display.CircleShape(80, 80, {fillStyle:tm.graphics.RadialGradient(40, 40, 0, 40, 40, 35).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.se.update = function() {
      this.visible = b.ab
    };
    c === l && (c = gls2.oi(this.aa.ka))
  }, yk:function() {
    if(0 === this.type) {
      return[{x:0, Od:0, y:40, d:0, pc:j, hc:-0.7, v:j}, {x:0, Od:0, y:40, d:0, pc:j, hc:0.5, v:j}, {x:0, Od:0, y:40, d:0, pc:j, hc:-0.5, v:j}, {x:0, Od:0, y:40, d:0, pc:j, hc:0.7, v:j}]
    }
    if(1 === this.type) {
      return[{x:-70, y:20, d:0.1, pc:z, hc:-0.7, v:j}, {x:-40, y:40, d:0.1, pc:z, hc:-0.5, v:j}, {x:40, y:40, d:0.1, pc:j, hc:0.5, v:j}, {x:70, y:20, d:0.1, pc:j, hc:0.7, v:j}]
    }
    if(2 === this.type) {
      return[{x:-60, y:40, d:0.6, pc:z, hc:-0.7, v:j}, {x:-30, y:20, d:0.4, pc:z, hc:-0.5, v:j}, {x:30, y:20, d:0.4, pc:j, hc:0.5, v:j}, {x:60, y:40, d:0.6, pc:j, hc:0.7, v:j}]
    }
  }, zk:function() {
    this.bf = tm.display.Sprite("tex0", 20, 20);
    this.bf.setFrameIndex(5);
    this.bf.position = this.position;
    this.bf.update = function(b) {
      b = 1.2 + 0.15 * Math.sin(0.2 * b.frame);
      this.scale.set(b, b)
    }
  }, wd:-1, Qd:z, Xb:z, update:function(b) {
    this.alpha = this.eb ? 0 === b.frame / 2 % 2 ? 0.5 : 1 : 1;
    var f = 2 === gls2.core.mode ? this.aa.va.keyboard : b, d = this.x;
    if(this.Lc || 2 === gls2.core.mode) {
      var k = f.getKeyDirection();
      this.x += k.x * this.speed * (this.Xb ? 0.5 : 1);
      this.y += k.y * this.speed * (this.Xb ? 0.5 : 1);
      this.x = gls2.la.clamp(this.x, 15, 465);
      this.y = gls2.la.clamp(this.y, 15, 625);
      var n = f.getKey("c") && this.Oe;
      if(k = f.getKey("z") && this.Oe) {
        this.aa.ai = j
      }
      this.wd = n ? this.wd + 1 : this.wd - 1;
      this.wd = gls2.la.clamp(this.wd, -1, 1);
      this.Xb = k && n || 1 === this.wd;
      n = this.aa.ab ? 3 : 4;
      this.Qd = !this.Xb && (0 <= this.wd || k) && 0 === b.frame % n;
      k && (this.wd = 0);
      3 === this.style && this.Xb && (this.Qd = 0 === b.frame % n);
      this.Yb.x = this.x;
      this.Yb.y = this.y - 40;
      if(f.getKeyDown("x") && this.Oe) {
        if(0 < this.aa.Ta && !this.aa.ab) {
          this.aa.Wl(), gls2.sk(this).addChildTo(this.aa)
        }else {
          if(!this.aa.sd && 0 < this.aa.Vb) {
            this.Eb = gls2.la.clamp(this.Eb - 2, 0, 1);
            this.aa.Ne(-0.02);
            gls2.qi(this, this.aa).setPosition(gls2.la.clamp(this.x, 96, 384), Math.max(this.y - 320, 192)).addChildTo(this.aa);
            gls2.core.ta("bomb1");
            for(k = 0;k < gls2.Wa.gb.length;k++) {
              n = gls2.Wa.gb[k], n.visible !== z && 225 > (this.x - n.x) * (this.x - n.x) + (this.y - n.y) * (this.y - n.y) && gls2.core.ta("nicebomb")
            }
            this.aa.je[this.aa.Aa] += 1
          }
        }
      }
    }else {
      this.Xb = this.Qd = z
    }
    this.za = this.x - d;
    this.Qd && (d = Math.sin(0.2 * b.frame), k = this.me.fire(this.x - 7 - 6 * d, this.y - 5, -90), k !== l && k.addChildTo(this.aa), k = this.me.fire(this.x + 7 + 6 * d, this.y - 5, -90), k !== l && k.addChildTo(this.aa));
    if(this.Xb && 3 !== this.style) {
      k = 0;
      for(d = this.Ub.length;k < d;k++) {
        this.Ub[k].v = z
      }
      this.Jc.rotation = 0
    }else {
      k = 0;
      for(d = this.Ub.length;k < d;k++) {
        this.Ub[k].v = j
      }
    }
    this.Nk(f);
    this.vk(f, b.frame);
    0 === b.frame % 2 && (c.clone(20).setPosition(this.x - 5, this.y + 20).addChildTo(this.aa), c.clone(20).setPosition(this.x + 5, this.y + 20).addChildTo(this.aa));
    this.frame = b.frame
  }, ad:function() {
    this.Xb = this.Qd = z;
    this.aa.Pf();
    this.aa.ub = 0;
    this.aa.vb = 0;
    this.aa.Ua = 0
  }, Nk:function() {
    if(0 === this.type) {
      for(var b = this.Ub.length;this.Ub[--b] !== i;) {
        var c = this.Ub[b];
        0 === b ? c.x = c.Od + 60 * Math.cos(0.1 * this.frame) : 1 === b ? c.x = c.Od + -60 * Math.cos(0.1 * this.frame) : 2 === b ? c.x = c.Od + 60 * Math.sin(0.1 * this.frame) : 3 === b && (c.x = c.Od + -60 * Math.sin(0.1 * this.frame))
      }
    }else {
      1 === this.type && (b = this.Jc, b.rotation = !this.Xb || 3 !== this.style ? this.Lc && 0 > this.za ? Math.max(b.rotation - 3, -50) : this.Lc && 0 < this.za ? Math.min(b.rotation + 3, 50) : 3 < b.rotation ? b.rotation - 3 : -3 > b.rotation ? b.rotation + 3 : 0 : 0)
    }
  }, vk:function(b, c) {
    (this.Lc || 2 === gls2.core.mode) && 0 > this.za ? this.bb = gls2.la.clamp(this.bb - 0.2, -3, 3) : (this.Lc || 2 === gls2.core.mode) && 0 < this.za ? this.bb = gls2.la.clamp(this.bb + 0.2, -3, 3) : 0 > this.bb ? this.bb = gls2.la.clamp(this.bb + 0.2, -3, 3) : 0 < this.bb && (this.bb = gls2.la.clamp(this.bb - 0.2, -3, 3));
    0 === this.type ? this.setFrameIndex(3 + ~~this.bb) : 1 === this.type ? this.setFrameIndex(10 + 7 * (~~(c / 2) % 3) + ~~this.bb) : 2 === this.type && this.setFrameIndex(31 + ~~this.bb);
    return c
  }});
  gls2.Uj = tm.createClass({superClass:tm.display.AnimationSprite, Ld:l, da:l, init:function(b, c) {
    this.superInit(tm.asset.SpriteSheet({image:"tex_bit", frame:{width:32, height:32}, animations:{anim0:{frames:[0, 1, 2, 3, 4, 5], next:"anim0", frequency:3}, anim1:{frames:[1, 2, 3, 4, 5, 0].reverse(), next:"anim1", frequency:3}}}), 32, 32);
    this.Ld = c;
    this.da = b;
    this.altitude = 10;
    this.gotoAndPlay(c.pc ? "anim0" : "anim1")
  }, update:function(b) {
    if(this.Ld.v) {
      this.x = this.Ld.x * (this.da.aa.ab ? 1.5 : 1);
      this.y = this.Ld.y * (this.da.aa.ab ? 1.5 : 1);
      this.rotation = Math.radToDeg(this.Ld.d * this.Ld.hc);
      var f = this.parent.localToGlobal(this);
      this.Ld.v && 0 === b.frame % 2 && c.clone(40).setPosition(f.x, f.y).addChildTo(this.da.aa);
      this.da.Qd && (f = this.da.me.fire(f.x, f.y, this.parent.rotation + this.rotation - 90), f !== l && f.addChildTo(b.aa))
    }else {
      this.x = 0, this.y = -40, this.currentFrameIndex = 3
    }
  }})
})();
(function() {
  var c = l;
  gls2.ge = tm.createClass({superClass:tm.display.Sprite, speed:0, Id:0, Jk:1, jj:0, lb:j, init:function(b) {
    this.superInit("shotbullet", 64, 64);
    this.blendMode = "lighter";
    this.alpha = 0.5;
    this.Id = 1.2;
    c === l && (c = gls2.Ma(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element));
    b !== i && this.pf(b)
  }, update:function() {
    this.x += this.gd;
    this.y += this.Bc;
    (-60 > this.x || 540 < this.x || -60 > this.y || 700 < this.y) && this.remove()
  }, pf:function(b) {
    3 === b ? (this.speed = 60, this.boundingRadius = 52) : (this.speed = 45, this.boundingRadius = 36)
  }, Tf:function(b) {
    for(var d = 0;d < b;d++) {
      var k = c.clone().setPosition(this.x, this.y).addChildTo(this.parent), n = gls2.la.randf(2, 8), s = 2 * Math.random() * Math.PI;
      k.za = Math.cos(s) * n;
      k.Fa = Math.sin(s) * n;
      k.scaleX = k.scaleY = (gls2.la.randf(0.1, 0.5) + gls2.la.randf(0.1, 0.5)) / 2;
      k.addEventListener("enterframe", function() {
        this.x += this.za;
        this.y += this.Fa;
        this.za *= 0.9;
        this.Fa *= 0.9
      })
    }
  }});
  gls2.ge.Se = function() {
    for(var c = [].concat(b), d = 0, k = c.length;d < k;d++) {
      c[d].remove()
    }
  };
  var b = gls2.ge.gb = [];
  gls2.Ki = tm.createClass({vd:l, hj:z, color:0, init:function(c, d) {
    this.color = c;
    this.hj = 3 === c;
    this.vd = [];
    for(var k = 0;k < d;k++) {
      var n = gls2.ge(c), s = this;
      n.addEventListener("added", function() {
        this.qa = 20;
        b.push(this)
      });
      n.addEventListener("removed", function() {
        var c = b.indexOf(this);
        -1 !== c && b.splice(c, 1);
        s.vd.push(this)
      });
      this.hj && n.addEventListener("enterframe", function(b) {
        this.setScale((this.Jk + this.jj) * (0 === b.app.frame % 2 ? 1 : 1.2))
      });
      this.vd.push(n)
    }
  }, fire:function(b, c, k) {
    var n = this.vd.pop();
    if(n === i) {
      return l
    }
    var s = gls2.la.degToRad(k);
    n.gd = Math.cos(s) * n.speed;
    n.Bc = Math.sin(s) * n.speed;
    n.setPosition(b, c);
    n.rotation = k + 90;
    n.setFrameIndex(this.color + 4 * gls2.la.rand(0, 3), 64, 64);
    return n
  }, Be:function(b) {
    for(var c = this.vd.length;this.vd[--c] !== i;) {
      this.vd[c].Id = 1.2 + 0.5 * b, this.vd[c].jj = 0.2 * b
    }
  }})
})();
gls2.Di = tm.createClass({superClass:tm.display.Sprite, da:l, aa:l, Ic:0, frame:0, Hj:l, color:l, Qi:0, lh:0, Kk:z, head:l, ej:l, hb:l, lb:j, Id:1.2, xe:l, init:function(c, b) {
  this.da = c;
  this.aa = c.aa;
  this.Qi = 0 === this.da.style ? 1 : 1.2;
  this.lh = 0 === this.da.style ? 50 : 75;
  var f = this;
  this.Hj = b;
  this.superInit(b.redBody, this.lh, 100);
  this.boundingHeightBottom = 1;
  this.Am = 0;
  this.origin.y = 1;
  var d = this.hb = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:b.aura, frame:{width:100, height:100}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:1}, green:{frames:[4, 5, 6, 7], next:"green", frequency:1}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:1}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:1}}}), 140, 140);
  d.y = 60;
  d.addChildTo(this);
  (this.ej = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:b.foot, frame:{width:120, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:1}, green:{frames:[4, 5, 6, 7], next:"green", frequency:1}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:1}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:1}}}), 140, 80)).addChildTo(this);
  d = this.head = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:b.head, frame:{width:80, height:80}, animations:{red:{frames:[0, 1, 2, 3], next:"red", frequency:1}, green:{frames:[4, 5, 6, 7], next:"green", frequency:1}, blue:{frames:[8, 9, 10, 11], next:"blue", frequency:1}, hyper:{frames:[12, 13, 14, 15], next:"hyper", frequency:1}}}), 130, 130);
  d.addChildTo(this);
  d.update = function() {
    this.y = f.Ic - f.y;
    -10 < this.y && (this.y = -10);
    this.visible = 0 < f.Ic
  };
  this.pf(["red", "green", "blue"][this.da.type]);
  this.Be(0)
}, pf:function(c) {
  this.color = c;
  this.image = tm.asset.AssetManager.get(this.Hj[this.color + "Body"]);
  this.srcRect.x = 0;
  this.srcRect.y = 0;
  this.srcRect.width = this.image.width / 16;
  this.hb.gotoAndPlay(this.color);
  this.ej.gotoAndPlay(this.color);
  this.head.gotoAndPlay(this.color);
  this.xe = l;
  return this
}, Be:function(c) {
  this.boundingWidth = this.width = this.lh + 30 * c / 10;
  this.head.setScale(0.02 * this.width, 0.02 * this.width);
  this.Id = 1.2 * this.Qi + 0.25 * c;
  0 === c ? this.pf(["red", "green", "blue"][this.da.type]) : this.pf("hyper")
}, Tf:function(c, b) {
  this.xe === l && this.Xi();
  b = b || this.Ic;
  for(var f = 0;f < c;f++) {
    var d = this.xe.clone().setPosition(this.x, b).addChildTo(this.aa), k = gls2.la.randf(8, 14), n = gls2.la.randf(0, Math.PI);
    d.za = Math.cos(n) * k;
    d.Fa = Math.sin(n) * k;
    d.scaleX = d.scaleY = (gls2.la.randf(0.5, 1.5) + gls2.la.randf(0.5, 1.5)) / 2;
    d.addEventListener("enterframe", function() {
      this.x += this.za;
      this.y += this.Fa;
      this.za *= 0.95;
      this.Fa *= 0.95
    })
  }
}, dl:function(c, b, f) {
  this.xe === l && this.Xi();
  for(var d = 0;d < c;d++) {
    var k = this.xe.clone().setPosition(b, f).addChildTo(this.aa), n = gls2.la.randf(12, 20), s = gls2.la.randf(0, Math.PI);
    k.za = Math.cos(s) * n;
    k.Fa = Math.sin(s) * n;
    k.scaleX = k.scaleY = (gls2.la.randf(1, 3) + gls2.la.randf(1, 3)) / 2;
    k.addEventListener("enterframe", function() {
      this.x += this.za;
      this.y += this.Fa;
      this.za *= 0.95;
      this.Fa *= 0.95
    })
  }
}, Xi:function() {
  this.xe = "hyper" === this.color ? gls2.Ma(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,255,0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element) : gls2.Ma(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:["rgba(255,0,0,0.0)", 
  "rgba(0,255,0,0.0)", "rgba(0,0,255,0.0)"][this.da.type]}]).toStyle()).fillRect(0, 0, 16, 16).element)
}, update:function(c) {
  (this.visible = this.da.Xb) ? (this.Ic = Math.max(0, this.Ic - 40), this.height = this.y - this.Ic, 0 === c.frame % 3 && (this.frame = (this.frame + 1) % 16)) : this.Ic = this.y - 40;
  this.Kk = this.visible
}, draw:function(c) {
  var b = this.srcRect, f = this._image.element;
  b.x = b.width * this.frame;
  c.context.drawImage(f, b.x, b.height - this.height, b.width, this.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, om:function() {
  return this.Ic
}, Ql:function(c) {
  this.Ic = c;
  this.head.update()
}});
gls2.Di.prototype.getter("boundingHeightTop", function() {
  return this.position.y - this.Ic
});
(function() {
  gls2.qi = tm.createClass({superClass:tm.app.Object2D, lb:j, aa:l, init:function(b, f) {
    this.superInit();
    this.da = b;
    this.aa = f;
    this.Cj = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setScale(0.1, 0.1).addChildTo(this);
    this.Cj.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
      this.remove()
    }.bind(this.Cj));
    this.Pi();
    c === l && (c = gls2.Ma(60, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(  0,  0,255,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    this.r = this.a = 0;
    this.b = 8;
    this.pa = 0;
    this.lf = 1;
    this.addEventListener("added", function() {
      this.aa.sd = j;
      this.da.eb = j;
      this.aa.Vb -= 1;
      this.aa.cf = z;
      this.aa.Pf();
      this.aa.Jb("drop BOMBER!!", j);
      gls2.wa("bomb");
      gls2.wa("voBomb")
    });
    this.addEventListener("removed", function() {
      this.aa.sd = z;
      this.da.eb = z
    })
  }, Pi:function() {
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
    for(var b = 0;b < this.b;b++) {
      var f = this.a * this.lf + 2 * b * Math.PI / this.b;
      c.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.015 * this.pa;
    this.r = 250 * Math.sin(b);
    2 * Math.PI < b ? this.remove() : Math.PI < b ? (this.b = 16, this.pa += 3.6, this.lf = -1) : (this.b = 8, this.pa += 1.8, this.lf = 1)
  }});
  gls2.Ei = tm.createClass({superClass:gls2.qi, init:function(b, c) {
    this.superInit(b, c);
    this.addEventListener("added", function() {
      this.aa.Vb = 0
    })
  }, Pi:function() {
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
    for(var b = 0;b < this.b;b++) {
      var f = this.a * this.lf + 2 * b * Math.PI / this.b;
      c.clone().setPosition(Math.cos(f) * this.r + this.x, Math.sin(f) * this.r + this.y).setScale(0.7, 0.7).addChildTo(this.parent)
    }
    this.a += 0.04;
    b = 0.02 * this.pa;
    this.r = 100 * Math.sin(b);
    Math.PI < b ? this.remove() : (this.b = 8, this.pa += 1.8, this.lf = 1)
  }});
  var c = l
})();
gls2.ri = tm.createClass({superClass:tm.display.Sprite, gd:0, Bc:0, da:l, pa:0, init:function(c, b, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(1, 64, 64);
  this.setPosition(c, b);
  this.da = f;
  this.Bc = 1;
  this.gd = 0.5 > gls2.Ba.random() ? -1 : 1;
  this.pa = 0
}, update:function() {
  this.x += this.gd;
  this.y += 2 * this.Bc;
  if(2025 > gls2.Wb(this, this.da)) {
    this.da.aa.Hk(1), this.remove()
  }else {
    if(3E3 > this.pa) {
      if(30 > this.x || 450 < this.x) {
        this.gd *= -1
      }
      if(30 > this.y || 610 < this.y) {
        this.Bc *= -1
      }
    }else {
      (-20 > this.x || 500 < this.x || -20 > this.y || 660 < this.y) && this.remove()
    }
  }
  this.pa += 1
}});
gls2.wi = tm.createClass({superClass:tm.display.Sprite, gd:0, Bc:0, da:l, pa:0, labels:l, init:function(c, b, f) {
  this.superInit("tex3", 64, 64);
  this.setFrameIndex(8, 64, 64);
  this.labels = [];
  for(var d = -1;1 >= d;d++) {
    for(var k = -1;1 >= k;k++) {
      this.labels.push(tm.display.Label("1 up", 30).setFillStyle("hsla(180, 60%, 60%, 0.2)").setPosition(d, k).addChildTo(this))
    }
  }
  this.setPosition(c, b);
  this.da = f
}, update:function(c) {
  this.y += 0.5;
  4096 > gls2.Wb(this, this.da) && (this.da.aa.bj(), gls2.core.ta("extend3"), this.remove());
  704 < this.y && this.remove();
  this.labels.forEach(function(b) {
    b.setScale(1 + 0.3 * Math.sin(0.2 * c.frame))
  })
}});
gls2.na = {};
gls2.na.setup = function() {
  gls2.Sk = {};
  gls2.na.explosion = Array.range(0, 3).map(function(c) {
    return tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode" + c, frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l}}}, 100, 100))
  });
  gls2.Sk.explodeL = tm.display.AnimationSprite(tm.asset.SpriteSheet({image:"explode0", frame:{width:100, height:100}, animations:{"default":{frame:Array.range(0, 64), next:l, frequency:3}}}, 100, 100));
  gls2.na.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.na.shockwaveImage = tm.graphics.Canvas().resize(100, 100).setStrokeStyle("rgba(0,0,0,0)").setFillStyle(tm.graphics.RadialGradient(50, 50, 0, 50, 50, 50).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.7, color:"rgba(255,255,255,0)"}, {offset:0.95, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()).fillCircle(50, 50, 50);
  gls2.na.particle16 = gls2.Ma(16, 1, 0.9, tm.graphics.Canvas().resize(16, 16).setFillStyle(tm.graphics.RadialGradient(8, 8, 0, 8, 8, 8).addColorStopList([{offset:0, color:"rgba(255,255,255,1.0)"}, {offset:1, color:"rgba(255,128,  0,0.0)"}]).toStyle()).fillRect(0, 0, 16, 16).element)
};
gls2.na.Tf = function(c, b, f) {
  c = gls2.na.particle16.clone().setPosition(c, b);
  c.lb = j;
  c.addChildTo(f);
  f = gls2.la.randf(5, 20);
  b = gls2.la.randf(Math.PI, 2 * Math.PI);
  c.za = Math.cos(b) * f;
  c.Fa = Math.sin(b) * f;
  c.scaleX = c.scaleY = (gls2.la.randf(0.1, 0.5) + gls2.la.randf(0.1, 0.5)) / 2;
  c.addEventListener("enterframe", function() {
    this.x += this.za;
    this.y += this.Fa;
    this.za *= 0.9;
    this.Fa *= 0.9
  })
};
gls2.na.yh = function(c, b, f, d) {
  d = d || 1.8;
  var k = tm.display.Sprite().setPosition(c, b).setScale(0.1).setBlendMode("lighter");
  k.lb = j;
  k.addChildTo(f);
  k.image = gls2.na.shockwaveImage;
  k.tweener.clear().to({scaleX:d, scaleY:d, alpha:0}, 800, "easeOutQuad").call(function() {
    k.remove()
  })
};
gls2.na.fl = function(c, b, f) {
  var d = tm.display.Sprite().setPosition(c, b).setScale(3).setBlendMode("lighter");
  d.lb = j;
  d.addChildTo(f);
  d.image = gls2.na.shockwaveImage;
  d.tweener.clear().to({scaleX:0.1, scaleY:0.1, alpha:0}, 800, "easeOutQuad").call(function() {
    d.remove()
  })
};
gls2.na.el = function(c, b, f) {
  c = tm.display.CircleShape(300, 300, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.RadialGradient(150, 150, 0, 150, 150, 150).addColorStopList([{offset:0, color:"rgba(255,255,255,0)"}, {offset:0.5, color:"rgba(255,255,255,0)"}, {offset:0.9, color:"rgba(255,255,255,1)"}, {offset:1, color:"rgba(255,255,255,0)"}]).toStyle()}).setPosition(c, b).setScale(0.1, 0.1);
  c.lb = j;
  c.addChildTo(f);
  c.tweener.clear().to({scaleX:5, scaleY:5, alpha:0}, 500, "easeOutQuad").call(function() {
    this.remove()
  }.bind(c))
};
gls2.na.Qf = function(c, b, f, d) {
  gls2.wa("explode");
  var k = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).setScale(0.75).setPosition(c, b).setRotation(360 * Math.random()).gotoAndPlay();
  k.lb = j;
  if(d !== i) {
    var n = d.x, s = d.y;
    k.addEventListener("enterframe", function() {
      this.x += n;
      this.y += s;
      n *= 0.99;
      s *= 0.99
    })
  }
  k.addChildTo(f);
  gls2.na.yh(c, b, f)
};
gls2.na.Vk = function(c, b, f) {
  gls2.wa("explode");
  var d = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c, b).setRotation(360 * Math.random()).gotoAndPlay();
  d.lb = j;
  d.addChildTo(f);
  d = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation += 2;
    this.x += 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c + 12, b).setRotation(360 * Math.random()).gotoAndPlay();
  d.lb = j;
  d.addChildTo(f);
  d = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
    this.remove()
  }).addEventListener("enterframe", function() {
    this.rotation -= 2;
    this.x -= 0.7;
    this.y -= 0.3;
    this.scaleX += 0.01;
    this.scaleY += 0.01
  }).setScale(0.5).setPosition(c - 12, b).setRotation(360 * Math.random()).gotoAndPlay();
  d.lb = j;
  d.addChildTo(f)
};
gls2.na.kb = function(c, b, f) {
  gls2.wa("explode2");
  gls2.wa("explode3");
  for(var d = ~~(Math.random() * gls2.fc.noise.length), k = 0;20 > k;k++) {
    var n = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
      this.remove()
    }).addEventListener("enterframe", function() {
      this.x += Math.cos(this.a) * this.v;
      this.y += Math.sin(this.a) * this.v;
      this.scaleX += 0.01;
      this.scaleY += 0.01
    }).setScale(0.7).setPosition(c, b).setRotation(360 * Math.random()).gotoAndPlay();
    n.a = 2 * Math.PI * Math.random();
    n.v = 10 * Math.pow(gls2.fc.noise.at(~~(gls2.fc.noise.length * k / 20) + d), 2);
    n.lb = j;
    n.addChildTo(f)
  }
  gls2.na.yh(c, b, f, 5)
};
gls2.na.Db = function(c, b, f) {
  gls2.wa("explode2");
  gls2.wa("explode3");
  for(var d = ~~(Math.random() * gls2.fc.noise.length), k = 0;20 > k;k++) {
    for(var n = 2 * Math.PI * k / 20, s = Math.pow(gls2.fc.noise.at(~~(gls2.fc.noise.length * k / 20) + d), 2), A = 0;3 > A;A++) {
      var C = 4 * s * (A + 1), q = gls2.na.explosion.random().clone().addEventListener("animationend", function() {
        this.remove()
      }).addEventListener("enterframe", function() {
        this.x += Math.cos(this.a) * this.v;
        this.y += Math.sin(this.a) * this.v;
        this.scaleX += 0.01;
        this.scaleY += 0.01;
        this.pa += 1
      }).setScale(0.3 * (3 - A)).setPosition(c, b).setRotation(360 * Math.random()).gotoAndPlay();
      q.rotation = 2 * Math.random() * Math.PI;
      q.lb = j;
      q.pa = 0;
      q.a = n;
      q.v = C;
      q.addChildTo(f)
    }
  }
};
gls2.Ed = tm.createClass({superClass:tm.app.Object2D, target:l, yc:0, angle:0, lb:j, alpha:1, reverse:z, init:function(c, b) {
  this.superInit();
  this.target = c;
  this.reverse = b;
  this.angle = 0;
  this.yc = b ? 0 : 200;
  this.alpha = b ? 1 : 0;
  this.on("added", function() {
    gls2.Ed.wh ? this.remove() : gls2.Ed.wh = j
  });
  this.on("removed", function() {
    gls2.Ed.wh = z
  })
}, update:function(c) {
  if(this.target.parent === l) {
    this.remove()
  }else {
    if(0 === c.frame % 3) {
      for(c = 0;8 > c;c++) {
        var b = this.angle + 2 * c / 6 * Math.PI;
        gls2.Ma(120, this.alpha, 0.9).setPosition(Math.cos(b) * this.yc + this.target.x, Math.sin(b) * this.yc + this.target.y).addChildTo(this.target.parent)
      }
    }
    this.angle += 0.05;
    this.yc += 4 * (this.reverse ? 1 : -1);
    this.alpha += 0.02 * (this.reverse ? -1 : 1);
    (0 > this.yc || 600 < this.yc) && this.remove()
  }
}});
gls2.Ed.wh = z;
gls2.sk = tm.createClass({superClass:tm.app.Object2D, target:l, angle:0, lb:j, init:function(c) {
  this.superInit();
  this.target = c;
  this.angle = 0
}, update:function() {
  if(this.target.parent === l) {
    this.remove()
  }else {
    for(var c = 0;5 > c;c++) {
      var b = gls2.Ma(80, 1, 0.9).setPosition(40 * Math.cos(this.angle - 0.5 * Math.PI) + this.target.x + gls2.la.rand(-2, 2), 40 * Math.sin(this.angle - 0.5 * Math.PI) + this.target.y + gls2.la.rand(-2, 2)).on("enterframe", function() {
        this.x += this.za;
        this.y += this.Fa
      }).addChildTo(this.target.parent);
      b.za = 3 * Math.cos(this.angle);
      b.Fa = 3 * Math.sin(this.angle)
    }
    this.angle += 0.2;
    2 * Math.PI < this.angle && this.remove()
  }
}});
gls2.yi = tm.createClass({superClass:tm.display.RectangleShape, label:l, init:function(c) {
  this.superInit(480, 40, {fillStyle:"rgba(0, 0, 0, 0.3)", strokeStyle:"transparent"});
  this.setPosition(0.5 * this.width, 640 - 0.5 * this.height);
  this.label = tm.display.Label("\u30c8\u30ed\u30d5\u30a3\u30fc\u300c" + c + "\u300d\u3092\u7372\u5f97\uff01", 20).setFontWeight("bold").setAlign("left").setBaseline("middle").setPosition(480, 0).setFillStyle("rgba(255, 255, 255, 0.5)").addChildTo(this);
  this.star = tm.display.Sprite("tex3", 64, 64).setScale(0.3).setFrameIndex(0).setPosition(-20, 0).addChildTo(this.label)
}, onadded:function() {
  if(this.parent instanceof tm.app.Scene) {
    this.parent.one("exit", function() {
      this.parent && this.remove()
    }.bind(this))
  }
}, update:function() {
  this.alpha = 576 < gls2.core.aa.da.y ? 0.1 : 1;
  this.label.x -= 2;
  -960 > this.label.x && this.remove()
}});
gls2.Bf = tm.createClass({superClass:tm.app.Object2D, lb:j, ie:l, pa:0, init:function(c, b, f) {
  this.superInit();
  this.ie = f;
  this.setPosition(c, b);
  this.addChildTo(f)
}, onadded:function() {
  for(var c = z, b = 0;30 > b;b++) {
    var f = 360 * Math.random(), d = 50 * gls2.fc.noise[Math.floor(gls2.fc.noise.length * f / 360)];
    tm.geom.Vector2(this.x, this.y);
    f = tm.geom.Vector2().setAngle(f, d);
    for(d = 0;7 > d;d++) {
      var k = tm.display.Sprite("explode" + Math.floor(3 * Math.random()), 100, 100).setPosition(this.x, this.y).setScale(1 + 3 * Math.random()).setRotation(360 * Math.random());
      k.za = 0.02 * f.x * (8 - d);
      k.Fa = 0.02 * f.y * (8 - d);
      k.qe = 3 * -d + Math.floor(-10 * Math.random() - 7);
      k.update = function() {
        this.qe += 0.3;
        0 > this.qe ? this.visible = z : 64 <= this.qe ? this.remove() : (c || (c = j, gls2.wa("explode6")), this.setFrameIndex(Math.floor(this.qe)), this.visible = j, this.x += this.za, this.y += this.Fa, this.blendMode = 10 > this.qe ? "lighter" : "source-over")
      };
      k.lb = j;
      k.addChildTo(this.ie)
    }
  }
  k = gls2.Ma(500, 0.001, 1.003);
  for(b = 0;80 > b;b++) {
    var f = 360 * Math.random(), d = 15 * gls2.fc.noise[Math.floor(gls2.fc.noise.length * f / 360)], n = k.clone().setPosition(this.x, this.y).addChildTo(this.ie);
    n.$d = tm.geom.Vector2().setAngle(f, d);
    n.position.add(tm.geom.Vector2.mul(n.$d, -40));
    n.setScale(0.1, 0.1);
    n.pa = 0;
    n.on("enterframe", function() {
      this.pa += 1;
      this.position.add(this.$d);
      this.scaleX += 0.01;
      this.scaleY += 0.01;
      80 < this.pa && (this.md = 0.99)
    })
  }
  this.remove()
}});
gls2.kk = tm.createClass({superClass:tm.graphics.Canvas, aa:l, le:l, Lb:l, frame:0, init:function(c) {
  this.superInit("#scoreLabel");
  this.aa = c;
  this.resize(480, 640).fitWindow();
  this.setText("20px Orbitron", "left", "top");
  this.fillStyle = "rgba(255,255,255,0.01)";
  this.le = gls2.Vj(200);
  this.Lb = gls2.Ii(this)
}, update:function() {
  this.clear();
  if(gls2.core.currentScene === this.aa) {
    this.aa.Nd !== l && (this.fillStyle = tm.graphics.LinearGradient(0, 0, 480, 0).addColorStopList([{offset:0, color:"rgba(255,255,0,0.4)"}, {offset:1, color:"rgba(0,255,255,0.4)"}]).toStyle(), this.strokeStyle = "rgba(255,255,255,0.8)", this.lineWidth = 2, this.fillRect(5, this.Lb.Mc - 20, 470 * this.aa.Nd.qa / this.aa.Nd.ic, 20), this.strokeRect(5, this.Lb.Mc - 20, 470, 20), this.clear(263.5, this.Lb.Mc - 20 + 2, 2, 16), this.clear(52, this.Lb.Mc - 20 + 2, 2, 16));
    this.strokeStyle = this.fillStyle = "rgba(255,255,255,0.4)";
    this.lineWidth = 1;
    var c;
    this.setText("20px 'Ubuntu Mono'", "right", "top");
    score = ("" + Math.floor(this.aa.score)).padding(16, " ");
    c = "";
    for(var b = 0;b < score.length;b += 4) {
      c += score.substring(b, b + 4) + " "
    }
    this.fillText(c, 192, this.Lb.Mc + 5);
    this.setText("18px 'Ubuntu Mono'", "right", "top");
    score = ("+" + Math.floor(this.aa.ub)).padding(8, " ");
    c = "";
    for(b = 0;b < score.length;b += 4) {
      c += score.substring(b, b + 4) + " "
    }
    this.fillText(c + "x " + (~~(this.aa.Ua / 500) + 1), this.Lb.$e + 192, 22);
    c = [0, 1, 4][this.aa.da.type];
    for(b = 0;b < this.aa.Bd - 1;b++) {
      this.drawTexture(tm.asset.AssetManager.get("fighter"), 192, 64 * c, 64, 64, 5 + 32 * b, 40, 32, 32)
    }
    this.setText("bold 18px Orbitron", "left", "top");
    this.strokeText("rank " + ~~(100 * M.Qa.ob.$rank), 10, 75);
    this.setText("bold 18px Orbitron", "left", "top");
    this.strokeText("max " + ~~this.aa.ef + " hit", this.Lb.$e + 10, 95);
    0 < ~~this.aa.Ua && (this.setText("bold 45px Orbitron", "left", "top"), this.strokeText(~~this.aa.Ua + " HIT!!", 10, 0.5 * -this.Lb.Mc + 115));
    0 === this.frame % 2 && (!this.aa.ab && 0 < this.aa.Ta ? (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 24px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.aa.Ta, 5, 637)) : this.aa.ab && (this.strokeStyle = "rgba(255,255,100,0.5)", this.setText("bold 28px Orbitron", "left", "bottom"), this.strokeText("HYPER LV " + this.aa.$c, 5, 637)));
    for(b = 0;b < this.aa.Vb;b++) {
      this.drawTexture(tm.asset.AssetManager.get("bombIcon"), 480 - 25 * (b + 1) - 20, 615, 20, 20)
    }
    0 === this.frame % 2 && this.aa.cf && (this.strokeStyle = "rgba(255,255,255,0.5)", this.setText("bold 28px Orbitron", "right", "bottom"), this.strokeText("MAXIMUM", 460, 637));
    this.le.update();
    this.le.Yh = this.Lb.Mc + 5;
    this.le.draw(this);
    this.frame += 1;
    2 === gls2.core.mode && (this.fillStyle = "rgba(0,0,0, 0.5)", this.aa.va.lines.forEach(function(b, c) {
      this.fillRect(0, 192 + 32 * c - 18, 480, 30)
    }.bind(this)), this.fillStyle = "rgb(255,255,255)", this.setText("bold 20px Orbitron", "center", "middle"), this.aa.va.lines.forEach(function(b, c) {
      this.fillText(b, 240, 192 + 32 * c)
    }.bind(this)), this.ih = this.aa.va.keyboard.getKey("up") ? 1 : Math.max(this.ih - 0.2, 0.2), this.fh = this.aa.va.keyboard.getKey("down") ? 1 : Math.max(this.fh - 0.2, 0.2), this.gh = this.aa.va.keyboard.getKey("left") ? 1 : Math.max(this.gh - 0.2, 0.2), this.hh = this.aa.va.keyboard.getKey("right") ? 1 : Math.max(this.hh - 0.2, 0.2), this.kh = this.aa.va.keyboard.getKey("z") ? 1 : Math.max(this.kh - 0.2, 0.2), this.jh = this.aa.va.keyboard.getKey("x") ? 1 : Math.max(this.jh - 0.2, 0.2), this.eh = 
    this.aa.va.keyboard.getKey("c") ? 1 : Math.max(this.eh - 0.2, 0.2), this.globalAlpha = this.ih, this.drawTexture(tm.asset.AssetManager.get("keyUp"), 328, 224, 64, 64), this.globalAlpha = this.fh, this.drawTexture(tm.asset.AssetManager.get("keyDown"), 328, 288, 64, 64), this.globalAlpha = this.gh, this.drawTexture(tm.asset.AssetManager.get("keyLeft"), 270.4, 288, 64, 64), this.globalAlpha = this.hh, this.drawTexture(tm.asset.AssetManager.get("keyRight"), 385.6, 288, 64, 64), this.globalAlpha = 
    this.kh, this.drawTexture(tm.asset.AssetManager.get("keyZ"), 40, 288, 64, 64), this.globalAlpha = this.jh, this.drawTexture(tm.asset.AssetManager.get("keyX"), 480 * 0.27 - 32, 288, 64, 64), this.globalAlpha = this.eh, this.drawTexture(tm.asset.AssetManager.get("keyC"), 480 * 0.39 - 32, 288, 64, 64), this.globalAlpha = 1)
  }
}, ih:0.2, fh:0.2, gh:0.2, hh:0.2, kh:0.2, jh:0.2, eh:0.2});
gls2.Ii = tm.createClass({superClass:tm.app.Object2D, $b:l, $e:0, Mc:0, init:function(c) {
  this.superInit();
  this.$b = c
}});
(function() {
  var c = Array.range(0, 5).map(function(b) {
    return Math.pow(0.9, b + 1)
  });
  gls2.bk = tm.createClass({superClass:tm.graphics.Canvas, Ia:l, Zb:l, mc:l, init:function() {
    this.superInit("#background");
    this.resize(480, 640).fitWindow();
    this.Ia = gls2.ck();
    this.Ia.ka = this;
    this.Ia.update = function(b) {
      this.update(b.frame)
    }.bind(this);
    this.blendMode = "lighter";
    this.Zb = [];
    this.mc = [];
    for(var b = 0;5 > b;b++) {
      this.Zb[b] = 40 * c[b], this.mc[b] = this.Zb[b] / 2 * Math.sqrt(3)
    }
  }, update:function(b) {
    this.Ia.za = Math.cos(this.Ia.direction) * this.Ia.speed;
    this.Ia.Fa = Math.sin(this.Ia.direction) * this.Ia.speed;
    for(var c = 0;5 > c;c++) {
      for(this.Ia.vc[c] += this.Ia.za * Math.pow(0.8, c);3 * this.Zb[c] < this.Ia.vc[c];) {
        this.Ia.vc[c] -= 3 * this.Zb[c]
      }
      for(;this.Ia.vc[c] < 3 * -this.Zb[c];) {
        this.Ia.vc[c] += 3 * this.Zb[c]
      }
      for(this.Ia.wc[c] += this.Ia.Fa * Math.pow(0.8, c);2 * this.mc[c] < this.Ia.wc[c];) {
        this.Ia.wc[c] -= 2 * this.mc[c]
      }
      for(;this.Ia.wc[c] < 2 * -this.mc[c];) {
        this.Ia.wc[c] += 2 * this.mc[c]
      }
    }
    0 === b % 2 && this.draw()
  }, draw:function() {
    this.Ia.background !== l ? this.clearColor(this.Ia.background, 0, 0) : this.clear();
    for(var b = 0;5 > b;b++) {
      this.lineWidth = 0.3 * Math.pow(0.8, b);
      this.strokeStyle = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"rgba(255,255,255," + 0.8 * c[b] + ")"}, {offset:1, color:"rgba(255,255,255," + 0.6 * c[b] + ")"}]).toStyle();
      this.beginPath();
      for(var f = 0, d = this.Ia.vc[b] - 3 * this.Zb[b];d < 480 + 3 * this.Zb[b];d += 1.5 * this.Zb[b]) {
        for(var f = 0 === f ? this.mc[b] : 0, k = this.Ia.wc[b] - 2 * this.mc[b] + f;k < 640 + 2 * this.mc[b];k += 2 * this.mc[b]) {
          this.line(d, k, d + this.Zb[b], k), this.line(d, k, d - this.Zb[b] / 2, k + this.mc[b]), this.line(d, k, d - this.Zb[b] / 2, k - this.mc[b])
        }
      }
      this.stroke()
    }
  }});
  gls2.ck = tm.createClass({superClass:tm.app.Object2D, vc:0, wc:0, direction:0, speed:0, za:0, Fa:0, background:l, init:function() {
    this.superInit();
    this.vc = [];
    this.wc = [];
    for(var b = 0;5 > b;b++) {
      this.vc[b] = 240, this.wc[b] = 320
    }
    this.direction = 0.5 * Math.PI;
    this.speed = 1;
    this.Fa = this.za = 0
  }})
})();
gls2.Vg = tm.createClass({superClass:tm.display.Sprite, mj:z, aa:l, da:l, bd:z, Rd:z, fi:z, za:0, Fa:0, init:function(c) {
  this.superInit("tex3", 20, 20);
  this.setFrameIndex(0, 64, 64);
  (this.mj = c) && this.setScale(2.5, 2.5);
  this.aa = gls2.cb.Je;
  this.da = this.aa.da;
  this.addChildTo(this.aa);
  c = 0.5 * gls2.Ba.random() * Math.PI - 0.75 * Math.PI;
  var b = 10 + 30 * Math.random();
  this.za = Math.cos(c) * b;
  this.Fa = Math.sin(c) * b
}, update:function() {
  this.da.Xb && (this.Rd = j);
  if(this.da.parent === l) {
    this.Rd = z
  }else {
    if(100 > gls2.Wb(this, this.da)) {
      this.aa.wl(this);
      this.remove();
      return
    }
    1E4 > gls2.Wb(this, this.da) && (this.Rd = j);
    if(this.fi && this.Rd) {
      var c = Math.atan2(this.da.y - this.y, this.da.x - this.x);
      this.x += 12 * Math.cos(c);
      this.y += 12 * Math.sin(c)
    }else {
      this.fi || (this.x += this.za, this.y += this.Fa, this.za *= 0.8, this.Fa *= 0.8, -1 < this.za && (1 > this.za && -1 < this.Fa && 1 > this.Fa) && (this.fi = j))
    }
  }
  (-200 > this.x || 680 < this.x || -200 > this.y || 690 < this.y) && this.remove()
}});
gls2.Li = tm.createClass({superClass:gls2.Vg, bd:z, init:function(c) {
  this.superInit(c)
}, update:function() {
  this.y += 4;
  this.rotation += 10;
  this.superClass.prototype.update.call(this)
}});
gls2.rk = tm.createClass({superClass:gls2.Vg, bd:j, init:function(c) {
  this.superInit(c)
}, update:function() {
  this.Rd || (this.x += this.aa.ka.za, this.y += this.aa.ka.Fa);
  this.superClass.prototype.update.call(this)
}});
gls2.kd = tm.createClass({da:l, aa:l, $:l, frame:0, assets:l, init:function(c) {
  this.aa = c;
  this.da = c.da;
  this.Wd();
  this.$ = gls2.qk();
  this.frame = 0
}, Wd:L(), update:function() {
  this.Uk(this.frame);
  this.frame += 1
}, Uk:function(c) {
  c = this.$.get(c);
  if(c !== l) {
    if("function" === typeof c.value) {
      c.value.call(this)
    }else {
      if(gls2.vi[c.value] !== i) {
        var b = gls2.vi[c.value];
        if(b !== l) {
          if(b[0].Nd === j) {
            this.Na(b[0])
          }else {
            for(var f = 0;f < b.length;f++) {
              var d = this.Na(b[f]);
              c.stop && d.addEventListener("enemyconsumed", function() {
                this.$.De = z
              }.bind(this))
            }
          }
        }
      }
    }
  }
}, Na:function(c) {
  this.aa.oe += 1;
  c = c.hard(this.aa, c.soft).setPosition(c.x, c.y).addChildTo(this.aa);
  c.va = this;
  c.jf();
  return c
}, Lf:function(c) {
  gls2.pe();
  this.aa.Xe = j;
  for(var b = tm.app.Object2D().setPosition(240, 320), f = -4;4 >= f;f++) {
    for(var d = -4;4 >= d;d++) {
      var k = tm.display.Label("WARNING!!", 75).setFillStyle(tm.graphics.LinearGradient(0, 0, 0, 20).addColorStopList([{offset:0, color:"hsla( 0, 100%, 50%, 0.07)"}, {offset:1, color:"hsla(50, 100%, 50%, 0.07)"}]).toStyle()).setBlendMode("lighter").setPosition(f, d);
      k.pa = 0;
      k.update = function() {
        this.alpha = -0.5 * Math.cos(0.08 * this.pa) + 0.5;
        this.pa += 1
      };
      k.addChildTo(b)
    }
  }
  b.tweener.wait(3E3).call(c).wait(2E3).call(function() {
    this.execChildren(function() {
      this.update = L();
      this.tweener.clear().fadeOut(500)
    })
  }.bind(b)).wait(1E3).call(function() {
    this.remove()
  }.bind(b));
  b.addChildTo(this.aa.uh);
  gls2.wa("warning");
  gls2.wa("voWarning")
}});
gls2.kd.create = function(c, b) {
  switch(b) {
    case -1:
      return gls2.tk(c);
    case 0:
      return gls2.lk(c);
    case 1:
      return gls2.mk(c);
    case 2:
      return gls2.nk(c);
    case 3:
      return gls2.ok(c);
    case 4:
      return gls2.pk(c);
    default:
      h(Error("stageNumber = " + b))
  }
};
gls2.qk = tm.createClass({index:0, data:l, De:z, init:function() {
  this.data = {}
}, add:function(c, b, f) {
  this.index += c;
  this.data[this.index] = {stop:f, value:b}
}, get:function(c) {
  c = this.data[c];
  return c === i ? l : c.stop === j ? (this.De = j, c) : this.De ? l : c
}});
gls2.tk = tm.createClass({superClass:gls2.kd, keyboard:l, lines:l, init:function(c) {
  function b(b, c) {
    return function() {
      k.clearKey();
      k.setKey(b, c);
      k._update()
    }
  }
  function f(b) {
    return function() {
      d.splice(0);
      for(var c = 0;c < b.length;c++) {
        d.push(b[c])
      }
    }
  }
  this.superInit(c);
  var d = this.lines = [], k = this.keyboard = tm.input.Keyboard(l, j);
  this.$.add(0, function() {
    c.ka.direction = 0.5 * Math.PI;
    c.ka.speed = 1
  });
  this.$.add(300, b("down", j));
  this.$.add(20, b("down", z));
  this.$.add(30, f(["\u30ab\u30fc\u30bd\u30eb\u30ad\u30fc\u3067\u79fb\u52d5\uff01"]));
  this.$.add(1, b("left", j));
  this.$.add(30, b("up", j));
  this.$.add(30, b("right", j));
  this.$.add(30, b("right", j));
  this.$.add(30, b("down", j));
  this.$.add(30, b("left", j));
  this.$.add(30, b("left", j));
  this.$.add(30, b("up", j));
  this.$.add(30, b("right", j));
  this.$.add(30, b("right", j));
  this.$.add(30, b("down", j));
  this.$.add(30, b("left", j));
  this.$.add(30, b("left", j));
  this.$.add(30, b("up", j));
  this.$.add(30, b("right", j));
  this.$.add(30, b("right", j));
  this.$.add(30, b("down", j));
  this.$.add(30, b("left", j));
  this.$.add(30, b("left", z));
  this.$.add(30, f(["C\u30ad\u30fc\u9023\u6253\u3067\u30b7\u30e7\u30c3\u30c8\u767a\u5c04\uff01"]));
  for(var n = 0;40 > n;n++) {
    this.$.add(4, b("c", j)), this.$.add(4, b("c", z))
  }
  this.$.add(1, f([]));
  this.$.add(30, f(["C\u30ad\u30fc\u30db\u30fc\u30eb\u30c9\u3067\u30ec\u30fc\u30b6\u30fc\u767a\u5c04\uff01"]));
  this.$.add(1, b("c", j));
  this.$.add(220, b("c", z));
  this.$.add(1, f([]));
  this.$.add(30, f(["Z\u30ad\u30fc\u30db\u30fc\u30eb\u30c9\u3067\u30b7\u30e7\u30c3\u30c8\u30d5\u30eb\u30aa\u30fc\u30c8\u767a\u5c04"]));
  this.$.add(1, b("z", j));
  this.$.add(220, b("z", z));
  this.$.add(1, f([]));
  this.$.add(50, f(["X\u30ad\u30fc\u3067\u30dc\u30e0\u767a\u5c04\uff01"]));
  this.$.add(10, b("x", j));
  this.$.add(1, b("x", z));
  this.$.add(90, f([]));
  this.$.add(150, f(["\u30fb\u6575\u3092\u5012\u3059", "\u30fb\u661f\u30a2\u30a4\u30c6\u30e0\u3092\u53d6\u308b", "\u306a\u3069\u3067\u30cf\u30a4\u30d1\u30fc\u30b2\u30fc\u30b8\u304c\u4e0a\u6607\uff01"]));
  this.$.add(1, b("c", j));
  for(n = 0;35 > n;n++) {
    this.$.add(20, "heri2-T-center")
  }
  this.$.add(200, b("c", z));
  this.$.add(1, f([]));
  this.$.add(60, b("z", j));
  this.$.add(150, f(["\u30cf\u30a4\u30d1\u30fc\u30b2\u30fc\u30b8\u304c\u6e9c\u307e\u3063\u305f\u72b6\u614b\u3067", "X\u30ad\u30fc\u3092\u62bc\u3059\u3068\u30cf\u30a4\u30d1\u30fc\u30e2\u30fc\u30c9\u767a\u52d5\uff01"]));
  this.$.add(1, b("x", j));
  this.$.add(1, b("x", z));
  this.$.add(1, b("z", j));
  for(n = 0;3 > n;n++) {
    this.$.add(40, "heri1-4-left"), this.$.add(40, "heri1-4-center"), this.$.add(40, "heri1-4-right")
  }
  this.$.add(1, f(["\u30cf\u30a4\u30d1\u30fc\u30e2\u30fc\u30c9\u4e2d\u306f", "\u30b7\u30e7\u30c3\u30c8\u3067\u6575\u5f3e\u3092\u7834\u58ca\u53ef\u80fd\uff01"]));
  for(n = 0;2 > n;n++) {
    this.$.add(40, "heri1-4-left"), this.$.add(40, "heri1-4-center"), this.$.add(40, "heri1-4-right")
  }
  this.$.add(200, b("z", z));
  this.$.add(1, f([]));
  this.$.add(180, function() {
    gls2.core.mode = 0;
    gls2.core.replaceScene(gls2.TitleScene())
  })
}, Wd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,20%)"}, {offset:1, color:"hsl(230,50%,10%)"}]).toStyle()
}});
gls2.lk = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.assets = l;
  this.$.add(0, function() {
    gls2.Ib("bgm1", j);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 8;
    this.aa.ka.tweener.clear().to({speed:1}, 4E3, "easeInOutQuad")
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
    this.aa.ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
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
    this.aa.ka.tweener.clear().to({speed:10}, 5E3, "easeInOutQuad")
  });
  this.$.add(100, "komachi-0");
  this.$.add(160, "komachi-1");
  this.$.add(600, function() {
    this.Lf(function() {
      gls2.Ib("bgmBoss", j)
    })
  });
  this.$.add(600, "misumi")
}, Wd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(230,50%,10%)"}, {offset:1, color:"hsl(230,50%, 5%)"}]).toStyle()
}});
gls2.mk = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.assets = {bgm2:"assets2/nc67881.mp3"};
  this.$.add(0, function() {
    gls2.Ib("bgm2", j);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 0.3
  });
  this.$.add(200, "tank25-top");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(190, "komachi2-0");
  this.$.add(10, "itsuki-1");
  this.$.add(400, "tank15-top");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:1}, 5E3, "easeInOutQuad").to({direction:Math.PI}, 5E3, "easeInOutQuad")
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
    this.aa.ka.tweener.clear().to({speed:0.3}, 6E3, "easeInOutQuad").to({direction:0.25 * Math.PI, speed:1}, 12E3, "easeInOutQuad")
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
    this.aa.ka.tweener.clear().to({direction:0.5 * Math.PI}, 1E4, "easeInOutQuad")
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
    this.aa.ka.tweener.clear().to({speed:0.5}, 3E3, "easeInOutQuad")
  });
  this.$.add(400, function() {
    this.aa.ka.tweener.clear().to({direction:0, speed:1}, 5E3, "easeInOutQuad")
  });
  this.$.add(430, function() {
    this.aa.ka.tweener.clear().to({speed:3}, 5E3, "easeInOutQuad")
  });
  this.$.add(1, "mai", j);
  this.$.add(300, "heri2-left");
  for(c = 0;12 > c;c++) {
    this.$.add(30, "heri2-center"), this.$.add(30, "heri2-right"), this.$.add(30, "heri2-center"), this.$.add(30, "heri2-left")
  }
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({direction:0.5 * Math.PI, speed:0.8}, 5E3, "easeInOutQuad")
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
    this.Lf(function() {
      gls2.Ib("bgmBoss", j)
    })
  });
  this.$.add(300, function() {
    this.aa.ka.tweener.clear().to({speed:5}, 5E3, "easeInOutQuad")
  });
  this.$.add(300, "hyuga")
}, Wd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(130,30%,10%)"}, {offset:1, color:"hsl(130,30%, 5%)"}]).toStyle()
}});
gls2.nk = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.assets = {bgm3:"assets2/nc70057.mp3"};
  this.$.add(0, function() {
    gls2.Ib("bgm3", j);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 2;
    this.aa.ka.tweener.clear().to({speed:6}, 5E3, "easeInOutQuad")
  });
  this.$.add(150, "nao2-center");
  this.$.add(45, "nao2-left");
  this.$.add(45, "nao2-right");
  this.$.add(45, "nao2-center");
  this.$.add(45, "nao2-left");
  this.$.add(45, "nao2-right");
  for(c = 0;3 > c;c++) {
    this.$.add(60, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(60, function() {
    this.aa.ka.tweener.clear().to({speed:3}, 1E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(120, "akane-right");
  this.$.add(60, "akane-left");
  this.$.add(60, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(120, "akane-center");
  this.$.add(60, "akane-left");
  this.$.add(60, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(240, "akane-center");
  this.$.add(60, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, function() {
    this.aa.ka.tweener.clear().to({speed:4, direction:0.2 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-center");
  this.$.add(60, "akane-right");
  this.$.add(60, "akane-left");
  for(c = 0;3 > c;c++) {
    this.$.add(60, "nao2-center"), this.$.add(60, "nao2-left"), this.$.add(60, "nao2-right")
  }
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:4, direction:0}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "miyuki-1");
  this.$.add(60, "reika1-right");
  this.$.add(180, "reika1-right");
  this.$.add(120, "nao2-right");
  this.$.add(120, "nao2-left");
  this.$.add(60, function() {
    this.aa.ka.tweener.clear().to({speed:5, direction:0.2 * -Math.PI}, 5E3, "easeInOutQuad")
  });
  this.$.add(120, "komachi3-0");
  this.$.add(60, "reika1-left");
  this.$.add(60, "reika1-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(120, "madoka-1");
  this.$.add(120, "reika1-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(120, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:2, direction:0.2 * Math.PI}, 4E3, "easeInOutQuad")
  });
  this.$.add(60, "komachi3-1");
  this.$.add(120, "reika1-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-right");
  this.$.add(60, "madoka-0");
  this.$.add(120, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(60, "madoka-0");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(180, "madoka-1");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(120, "erika");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:7, direction:0.5 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(300, "higashi", j);
  this.$.add(900, L());
  for(c = 0;6 > c;c++) {
    this.$.add(90, "nao1-center"), this.$.add(60, "nao1-right"), this.$.add(60, "nao1-left")
  }
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:2, direction:0.5 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(60, "miyuki-2");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(120, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(120, "heri1-left");
  this.$.add(60, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(60, "komachi3-0");
  this.$.add(120, "akane-right");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:4, direction:0.5 * Math.PI}, 3E3, "easeInOutQuad")
  });
  this.$.add(120, "reika1-left");
  this.$.add(120, "reika1-left");
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(60, "madoka-1");
  this.$.add(120, "akane-left");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(60, "komachi3-1");
  this.$.add(240, "komachi3-0");
  this.$.add(30, "heri1-right2");
  this.$.add(30, "heri1-left2");
  this.$.add(30, "heri1-right2");
  this.$.add(30, "heri1-left2");
  this.$.add(120, "alice");
  this.$.add(300, L());
  this.$.add(160, "heri1-left");
  this.$.add(100, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(120, "heri1-left");
  this.$.add(90, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(180, "madoka-1");
  this.$.add(90, "nao2-center");
  this.$.add(90, "nao2-left");
  this.$.add(90, "nao2-right");
  this.$.add(90, "nao2-center");
  this.$.add(90, "nao2-left");
  this.$.add(90, "nao2-right");
  this.$.add(180, "komachi3-0");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:5, direction:0.5 * Math.PI}, 5E3, "easeInOutQuad")
  });
  this.$.add(120, "akane-right");
  this.$.add(120, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(120, "akane-left");
  this.$.add(120, "heri1-left");
  this.$.add(60, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(180, "komachi3-1");
  this.$.add(60, "nao2-center");
  this.$.add(60, "nao2-left");
  this.$.add(60, "nao2-right");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:7, direction:0.5 * Math.PI}, 5E3, "easeInOutQuad")
  });
  this.$.add(90, "madoka-1");
  this.$.add(120, "reika1-right");
  this.$.add(120, "reika1-right");
  this.$.add(60, "akane-right");
  this.$.add(120, "heri1-left");
  this.$.add(40, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(180, "madoka-0");
  this.$.add(40, "nao2-center");
  this.$.add(40, "nao2-left");
  this.$.add(40, "nao2-right");
  this.$.add(120, "heri1-left");
  this.$.add(40, "heri1-right");
  this.$.add(40, "heri1-right2");
  this.$.add(40, "heri1-left2");
  this.$.add(30, "erika");
  this.$.add(300, function() {
    this.Lf(function() {
      gls2.Ib("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:10, direction:0.5 * Math.PI}, 8E3, "easeInOutQuad")
  });
  this.$.add(480, "momozono")
}, Wd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,50%,15%)"}, {offset:1, color:"hsl(30,50%, 7%)"}]).toStyle()
}});
gls2.ok = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.assets = {bgm4:"assets2/nc67880.mp3"};
  this.$.add(0, function() {
    gls2.Ib("bgm4", j);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 1
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
    this.aa.ka.tweener.clear().to({speed:5, direction:0.5 * -Math.PI}, 1E4).to({speed:3, direction:1.5 * -Math.PI}, 9E3)
  });
  for(c = 0;6 > c;c++) {
    this.$.add(20, "heri2-center"), this.$.add(20, "heri2-right"), this.$.add(20, "heri2-left"), this.$.add(1, "tank5-center"), this.$.add(15, "heri1-4-center"), this.$.add(15, "heri1-4-right"), this.$.add(15, "heri1-4-left"), this.$.add(1, "tank5-left"), this.$.add(90, "tank25-top")
  }
  this.$.add(1, function() {
    this.aa.ka.speed = 3;
    this.aa.ka.tweener.clear().to({speed:0.3}, 5E3)
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
    this.aa.ka.tweener.clear().to({speed:3}, 5E3)
  });
  this.$.add(250, function() {
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(1, "rikka", j);
  this.$.add(1200, L());
  for(c = 0;9 > c;c++) {
    this.$.add(50, 0 === c % 2 ? "komachi4-0" : "komachi4-1"), this.$.add(35, "heri1-4-left2"), this.$.add(35, "heri1-4-center2"), this.$.add(35, "heri1-4-right2"), this.$.add(35, "heri1-4-left"), this.$.add(35, "heri1-4-center"), this.$.add(35, "heri1-4-right")
  }
  this.$.add(80, "erika");
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:0.6}, 3E3)
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
    this.Lf(function() {
      gls2.Ib("bgmBoss", j)
    })
  });
  this.$.add(1, function() {
    this.aa.ka.tweener.clear().to({speed:9}, 2E3)
  });
  this.$.add(600, "mana")
}, Wd:function() {
  this.aa.ka.background = tm.graphics.LinearGradient(0, 0, 0, 640).addColorStopList([{offset:0, color:"hsl(30,30%,10%)"}, {offset:1, color:"hsl(30,50%, 2%)"}]).toStyle()
}});
gls2.pk = tm.createClass({superClass:gls2.kd, init:function(c) {
  this.superInit(c);
  this.$.add(0, function() {
    gls2.Ib("bgm5", j);
    this.aa.ka.direction = 0.5 * Math.PI;
    this.aa.ka.speed = 1;
    this.aa.ka.Cm = j
  });
  this.$.add(60, "ayumi")
}, Wd:function() {
  this.aa.ka.background = tm.graphics.RadialGradient(240, 0, 0, 240, 384, 640).addColorStopList([{offset:0, color:"hsl(200, 30%, 25%)"}, {offset:0.33, color:"hsl(240, 10%,  5%)"}, {offset:0.66, color:"hsl(280, 10%,  5%)"}, {offset:1, color:"hsl(340, 10%,  5%)"}]).toStyle()
}});
gls2.Collision = {ve:function(c, b) {
  if(c.parent === l || b.parent === l) {
    return z
  }
  var f = c.x + c.boundingWidthRight, d = c.y - c.boundingHeightTop, k = c.y + c.boundingHeightBottom, n = b.x - b.boundingWidthLeft, s = b.y - b.boundingHeightTop, A = b.y + b.boundingHeightBottom;
  return c.x - c.boundingWidthLeft < b.x + b.boundingWidthRight && f > n && d < A && k > s
}};
gls2.Scene = tm.createClass({superClass:tm.app.Scene, _sceneResultCallback:l, init:function() {
  this.superInit()
}, Yl:function(c, b) {
  "function" === typeof c ? this.app.pushScene(c()) : c instanceof tm.app.Scene && this.app.pushScene(c);
  this._sceneResultCallback = b
}, draw:function(c) {
  c.globalCompositeOperation = "source-over";
  this.Pd(c)
}, finish:function(c) {
  var b = this.app;
  b.popScene();
  (b = b.currentScene) && b._sceneResultCallback && b._sceneResultCallback.bind(b)(c)
}});
gls2.Xj = tm.createClass({superClass:gls2.Scene, titleText:l, menu:l, descriptions:l, showExit:z, title:l, selections:[], description:l, box:l, cursor:l, Lh:l, _selected:0, _opened:z, _finished:z, init:function(c, b, f) {
  this.superInit();
  this.titleText = c;
  this.menu = b;
  this._selected = ~~f.defaultValue;
  this.showExit = f.showExit;
  this.descriptions = f.menuDescriptions;
  this.showExit && (b.push("back"), this.descriptions.push("\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"));
  this.Lh = f.onCursorMove;
  c = Math.max(50 * (1 + b.length), 50) + 40;
  this.box = tm.display.RectangleShape(384, c, {strokeStyle:"rgba(0,0,0,0)", fillStyle:"hsla(220,50%,15%,0.8)"}).setPosition(240, 320);
  this.box.width = 1;
  this.box.height = 1;
  this.box.tweener.to({width:384, height:c}, 200, "easeOutExpo").call(this._onOpen.bind(this));
  this.box.addChildTo(this);
  this.description = tm.display.Label("", 14).setPosition(240, 630).addChildTo(this)
}, _onOpen:function() {
  var c = 320 - 25 * this.menu.length;
  this.title = tm.display.Label(this.titleText, 30).setPosition(240, c).addChildTo(this);
  this.selections = this.menu.map(function(b, f) {
    var d = this;
    c += 50;
    var k = tm.display.Label(b).setPosition(240, c).addChildTo(this);
    k.interactive = j;
    k.addEventListener("touchend", function() {
      d._selected === f ? d.closeDialog(d._selected) : d._selected = f
    });
    k.width = 336;
    return k
  }.bind(this));
  this._createCursor();
  this._opened = j
}, _createCursor:function() {
  this.cursor = tm.display.RectangleShape(336, 10, {strokeStyle:"rgba(0,0,0,0)", fillStyle:tm.graphics.LinearGradient(0, 0, 336, 0).addColorStopList([{offset:0, color:"rgba(  0,100,255,0.0)"}, {offset:0.2, color:"rgba(  0,100,255,0.3)"}, {offset:0.5, color:"rgba(  0,255,255,0.5)"}, {offset:0.8, color:"rgba(  0,100,255,0.3)"}, {offset:1, color:"rgba(  0,100,255,0.0)"}]).toStyle()}).addChildTo(this);
  this.cursor.blendMode = "lighter";
  this.cursor.x = 240;
  this.cursor.s = this._selected;
  this.cursor.y = this.selections[this._selected].y;
  this.cursor.update = function() {
    this.s !== this.parent._selected && (this.s = this.parent._selected, this.tweener.clear(), this.tweener.to({y:this.parent.selections[this.parent._selected].y}, 200, "easeOutExpo"), this.parent.Lh !== l && this.parent.Lh(this.s))
  }
}, update:function(c) {
  this.description.text = this.descriptions[this._selected];
  this._opened && (this._finished ? this.cursor.visible = 0 === ~~(c.frame / 2) % 2 : this.showExit && c.getKeyDown("x") ? (this._selected = this.selections.length - 1, this.closeDialog(this._selected)) : c.getKeyDown("z") || c.getKeyDown("c") || c.getKeyDown("space") ? (this.closeDialog(this._selected), gls2.wa("decision")) : c.getKeyDown("down") ? (this._selected += 1, this._selected = gls2.la.clamp(this._selected, 0, this.selections.length - 1), gls2.wa("select")) : c.getKeyDown("up") && (this._selected -= 
  1, this._selected = gls2.la.clamp(this._selected, 0, this.selections.length - 1), gls2.wa("select")))
}, closeDialog:function(c) {
  this._finished = j;
  this.tweener.clear().wait(200).call(function() {
    this.cursor.remove();
    this.title.remove();
    this.selections.each(function(b) {
      b.remove()
    });
    this.box.tweener.clear();
    this.box.tweener.to({width:1, height:1}, 200, "easeInExpo").call(function() {
      this.finish(c)
    }.bind(this))
  }.bind(this))
}, Pd:function(c) {
  c.fillStyle = "rgba(0,0,0,0.8)";
  c.fillRect(0, 0, 480, 640)
}});
function $(c, b, f, d, k) {
  k = {}.$extend({menuDescriptions:[].concat(f), showExit:j, defaultValue:0, onCursorMove:L()}, k);
  c.Yl(gls2.Xj(b, f, k), d)
}
;gls2.Ma = tm.createClass({superClass:tm.display.CanvasElement, alpha:1, md:0.85, size:0, image:l, lb:j, init:function(c, b, f, d) {
  this.superInit();
  b === i && (b = 1);
  f === i && (f = 0.85);
  1 === gls2.core.Pc && (this.size *= 0.7, this.md *= 0.9);
  this.width = this.height = this.size = c;
  this.alpha = b;
  this.md = f;
  this.blendMode = "lighter";
  1 === gls2.core.Pc && (this.md *= 0.9);
  this.image = d ? d : tm.graphics.Canvas().resize(c, c).setFillStyle(tm.graphics.RadialGradient(0.5 * c, 0.5 * c, 0, 0.5 * c, 0.5 * c, 0.5 * c).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, c, c).element;
  if(2 === gls2.core.Pc) {
    this.on("added", function() {
      this.remove()
    })
  }
}, update:function() {
  this.alpha *= this.md;
  0.01 > this.alpha ? this.remove() : 1 < this.alpha && (this.alpha = 1)
}, draw:function(c) {
  c.context.drawImage(this.image, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
}, clone:function() {
  return gls2.Ma(this.size, this.sm, this.md, this.image)
}});
gls2.oi = tm.createClass({superClass:gls2.Ma, ka:l, init:function(c, b) {
  b = b || 20;
  this.superInit(b, 1, 0.82, tm.graphics.Canvas().resize(b, b).setFillStyle(tm.graphics.RadialGradient(0.5 * b, 0.5 * b, 0, 0.5 * b, 0.5 * b, 0.5 * b).addColorStopList([{offset:0, color:"rgba(255,255,255,0.5)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, b, b).element);
  this.ka = c
}, update:function(c) {
  this.superClass.prototype.update.apply(this, c);
  this.x += this.ka.za;
  this.y += this.ka.Fa + 0.3
}, clone:function(c) {
  return gls2.oi(this.ka, c)
}});
gls2.Vj = tm.createClass({width:0, label:l, Nb:l, pa:0, yj:0, Yh:0, init:function(c) {
  this.width = c;
  this.label = tm.display.Label("_", 10).setAlign("left").setBaseline("top").setPosition(-this.width / 2 + 4, -this.height / 2 + 4).setFillStyle("rgba(255,255,255,0.5)");
  this.Nb = [];
  this.yj = 480 - this.width - 5;
  this.Yh = 5
}, Ik:function(c, b) {
  b === j && (this.Nb.clear(), this.Nb.push(""));
  5 < this.Nb.length && this.Nb.splice(1, this.Nb.length - 4);
  this.Nb.push(c);
  return this
}, Lk:function() {
  this.Nb.clear();
  return this
}, clear:function() {
  this.label.text = "_";
  return this
}, update:function() {
  var c = this.label.text, c = c.substring(0, c.length - 1);
  if(0 !== this.Nb.length) {
    if("" !== this.Nb[0]) {
      var b = this.Nb[0][0];
      this.Nb[0] = this.Nb[0].substring(1);
      c += b
    }else {
      this.Nb.shift(), b = c.split("\n"), 3 < b.length && (b.shift(), c = b.join("\n")), c += "\n"
    }
  }
  this.label.text = c + (0 === this.pa % 2 ? "_" : " ");
  this.pa += 1
}, draw:function(c) {
  c.save();
  c.context.globalCompositeOperation = "source-over";
  c.translate(this.yj, this.Yh);
  c.fillStyle = "rgba(1,2,48,0.5)";
  c.fillRect(0, 0, this.width, 64);
  c.translate(5, 5);
  c.fillStyle = "rgba(255,255,255,0.5)";
  c.setText(this.label.fontStyle, this.label.align, this.label.baseline);
  this.label._lines.each(function(b, f) {
    c.fillText(b, 0, this.label.textSize * f)
  }.bind(this));
  c.restore()
}});
gls2.fc = {noise:l, gl:function(c) {
  function b(b) {
    if(1 > b) {
      return l
    }
    var d = [], k = Math.random(), n, m;
    for(m = 0;m < c;m += ~~b) {
      n = Math.random();
      for(var s = 0;s < b;s++) {
        d[m + s] = f(k, n, s / b)
      }
      k = n
    }
    k = d[c - ~~b];
    n = d[0];
    for(s = 0;s < b;s++) {
      d[c - ~~b + s] = f(k, n, s / b)
    }
    return d
  }
  function f(b, c, d) {
    d = 0.5 * (1 - Math.cos(d * Math.PI));
    return b * (1 - d) + c * d
  }
  for(var d = [], k = 0, n = Math.pow(2, 4);8 > k;k++, n *= 2) {
    var s = b(c / n);
    if(s === l) {
      break
    }
    d.push(s)
  }
  s = [].concat(d[0]);
  k = 1;
  for(n = 0.5;k < d.length;k++, n *= 0.5) {
    for(var A = 0;A < c;A++) {
      s[A] += d[k][A] * n
    }
  }
  for(k = 0;k < s.length;k++) {
    s[k] /= 2
  }
  return s
}};
gls2.fc.noise = gls2.fc.gl(512);
gls2.Ba = {index:-1, data:l, setup:function(c) {
  this.data = [];
  c = new MersenneTwister(c);
  for(var b = 0;1E3 > b;b++) {
    this.data[b] = c.next()
  }
}, random:function() {
  this.index += 1;
  1E3 <= this.index && (this.index %= 1E3);
  return this.data[this.index]
}, rand:function(c, b) {
  return Math.floor(this.random() * (b - c + 1)) + c
}, randf:function(c, b) {
  return this.random() * (b - c) + c
}};
gls2.jb = l;
gls2.Ib = function(c, b, f) {
  b || gls2.sf();
  b = tm.asset.AssetManager.get(c);
  var d = tm.asset.AssetManager.get("bgmLoopInfo");
  b && (gls2.jb = b.clone(), gls2.jb.volume = 0.1 * gls2.core.od, gls2.jb.loop = !f, gls2.jb.play(), d.data[c] && (gls2.jb.source.loopStart = d.data[c].start, gls2.jb.source.loopEnd = d.data[c].end))
};
gls2.sf = function() {
  gls2.jb !== l && gls2.jb.source.playbackState === AudioBufferSourceNode.PLAYING_STATE && gls2.jb.stop()
};
gls2.pe = function() {
  if(gls2.jb !== l) {
    var c = gls2.jb;
    gls2.jb = l;
    c.loop = z;
    var b = function() {
      c.volume -= 0.001;
      0 >= c.volume ? c.wm === AudioBufferSourceNode.PLAYING_STATE && c.stop() : setTimeout(b, 10)
    };
    setTimeout(b, 10)
  }
};
gls2.wa = function(c) {
  if(0 !== gls2.core.zc && gls2.wa.played[c] !== gls2.core.frame) {
    var b = tm.asset.AssetManager.get("sound/" + c);
    b && (b = b.clone().play(), "vo" === c.substring(0, 2) ? (b.volume = 0.5 * gls2.core.zc, gls2.wa.mi !== l && gls2.wa.mi.stop(), gls2.wa.mi = b) : b.volume = "explode6" === c ? 0.2 * gls2.core.zc : 0.1 * gls2.core.zc);
    gls2.wa.played[c] = gls2.core.frame
  }
};
gls2.wa.played = {};
gls2.wa.mi = l;
(function() {
  var c = l, b = l, f = l;
  gls2.TitleScene = tm.createClass({superClass:gls2.Scene, result:l, pa:0, dd:[], re:z, oj:0, Zf:0, init:function() {
    this.superInit();
    tm.display.Label("TM-Shooter", 50).setPosition(240, 160).addChildTo(this);
    tm.display.Label("cure black label", 40).setPosition(240, 640 * 0.33).addChildTo(this);
    tm.display.Label("version ", 22).setPosition(432, 256).setAlign("right").addChildTo(this);
    tm.display.Label("1st ", 22).setPosition(72, 448).setAlign("left").addChildTo(this);
    tm.display.Label(T[0] + " PTS", 22).setPosition(408, 448).setAlign("right").addChildTo(this);
    tm.display.Label("2nd ", 22).setPosition(72, 480).setAlign("left").addChildTo(this);
    tm.display.Label(T[1] + " PTS", 22).setPosition(408, 480).setAlign("right").addChildTo(this);
    tm.display.Label("press button").setPosition(240, 576).addChildTo(this);
    this.addEventListener("enter", function() {
      gls2.core.fps = FPS;
      this.re = z
    })
  }, Dm:function() {
    for(var b = ("" + Math.floor(gls2.core.af)).padding(16, " "), c = 0;c < b.length;c += 4) {
    }
  }, Pd:function(b) {
    b.fillStyle = "black";
    b.fillRect(0, 0, 480, 640)
  }, update:function(b) {
    0 === b.frame % 2 && (this.Zg(100 * Math.cos(-0.01 * this.pa) + 240, 100 * Math.sin(-0.01 * this.pa) + 320, 0), this.Zg(100 * Math.cos(-0.01 * this.pa + 2 * Math.PI / 3) + 240, 100 * Math.sin(-0.01 * this.pa + 2 * Math.PI / 3) + 320, 1), this.Zg(100 * Math.cos(-0.01 * this.pa + 4 * Math.PI / 3) + 240, 100 * Math.sin(-0.01 * this.pa + 4 * Math.PI / 3) + 320, 2));
    (b.getKeyDown("z") || b.getKeyDown("c") || b.getKeyDown("space")) && !this.re && this.Uh();
    this.pa += 1
  }, Zg:function(d, k, n) {
    if(!this.re) {
      c === l && (c = gls2.Ma(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(155,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      b === l && (b = gls2.Ma(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,  0,155,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      f === l && (f = gls2.Ma(80, 1, 0.8, tm.graphics.Canvas().resize(80, 80).setFillStyle(tm.graphics.RadialGradient(40, 40, 0, 40, 40, 40).addColorStopList([{offset:0, color:"rgba(255,255,255,0.1)"}, {offset:1, color:"rgba(  0,155,  0,0.0)"}]).toStyle()).fillRect(0, 0, 80, 80).element));
      n = [c, b, f][n].clone().addChildTo(this);
      n.speed = 0.7;
      var s = gls2.la.randf(0, 2 * Math.PI), A = gls2.la.rand(0, 20);
      n.setPosition(Math.cos(s) * A + d, Math.sin(s) * A + k);
      var C = this;
      n.update = function() {
        this.x += Math.cos(s) * this.speed;
        this.y += Math.sin(s) * this.speed;
        if(-50 > this.x || 530 < this.x || -50 > this.y || 690 < this.y) {
          this.remove();
          var b = C.dd.indexOf(this);
          -1 !== b && C.dd.splice(b, 1)
        }
      };
      this.dd.push(n)
    }
  }, Uh:function() {
    $(this, "MAIN MENU", ["arcade mode", "training mode", "tutorial", "setting"], this.Bl, {defaultValue:this.oj, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c8\u30ec\u30fc\u30cb\u30f3\u30b0\u3092\u958b\u59cb\u3057\u307e\u3059", "\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u958b\u59cb\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059"]})
  }, Bl:function(b) {
    2 !== b && (this.oj = b);
    switch(b) {
      case 0:
        gls2.core.mode = 0;
        this.tweener.clear().call(function() {
          this.re = j;
          for(var b = 0, c = this.dd.length;b < c;b++) {
            this.dd[b].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.Ji())
        }.bind(this));
        break;
      case 1:
        this.wj();
        break;
      case 2:
        gls2.core.mode = 2;
        this.tweener.clear().call(function() {
          this.re = j;
          for(var b = 0, c = this.dd.length;b < c;b++) {
            this.dd[b].speed = 8
          }
        }.bind(this)).wait(1E3).call(function() {
          gls2.core.replaceScene(gls2.core.aa);
          gls2.core.aa.start(2, 0)
        }.bind(this));
        break;
      case 3:
        this.xc()
    }
  }, wj:function(b) {
    $(this, "STAGE", ["stage 1", "stage 2", "stage 3", "stage 4", "stage 5"], this.Fl, {defaultValue:b || 0})
  }, Fl:function(b) {
    5 === b ? this.Uh() : (gls2.core.mode = 1, gls2.core.ei = b, this.Ll())
  }, Ll:function() {
    $(this, "RANK", "0 10 20 30 40 50".split(" "), this.El, {})
  }, El:function(b) {
    6 === b ? this.wj(gls2.core.ei) : (gls2.core.aa.fg(0.1 * b), this.tweener.clear().call(function() {
      this.re = j;
      for(var b = 0, c = this.dd.length;b < c;b++) {
        this.dd[b].speed = 8
      }
    }.bind(this)).wait(1E3).call(function() {
      gls2.core.replaceScene(gls2.Ji())
    }.bind(this)))
  }, xc:function() {
    $(this, "SETTING", ["bgm volume", "sound volume", "particle", "bullet appearance"], this.Rh, {defaultValue:this.Zf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u306eON/OFF\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u6575\u5f3e\u306e\u898b\u305f\u76ee\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3067\u3059"]})
  }, Rh:function(b) {
    4 !== b && (this.Zf = b);
    switch(b) {
      case 0:
        this.Sh();
        break;
      case 1:
        this.Wh();
        break;
      case 2:
        this.Vh();
        break;
      case 3:
        this.Th();
        break;
      default:
        this.Uh()
    }
  }, Sh:function() {
    $(this, "BGM VOLUME", "012345".split(""), this.Nh, {defaultValue:gls2.core.od, onCursorMove:function(b) {
      gls2.jb !== l && "exit" !== b && (gls2.jb.volume = 0.1 * b)
    }, showExit:z})
  }, Nh:function(b) {
    6 !== b && (gls2.core.od = b);
    this.ed();
    this.xc()
  }, Wh:function() {
    $(this, "SE VOLUME", "012345".split(""), this.Qh, {defaultValue:gls2.core.zc, showExit:z})
  }, Qh:function(b) {
    6 !== b && (gls2.core.zc = b);
    this.ed();
    this.xc()
  }, Vh:function() {
    $(this, "PARTICLES", ["ON", "LITE", "OFF"], this.Ph, {defaultValue:gls2.core.Pc, showExit:z})
  }, Ph:function(b) {
    gls2.core.Pc = b;
    this.ed();
    this.xc()
  }, Th:function() {
    $(this, "BULLET", ["NORMAL", "LARGE"], this.Oh, {defaultValue:gls2.core.Cb, showExit:z, menuDescriptions:["\u901a\u5e38\u30b5\u30a4\u30ba\u3067\u8868\u793a\u3057\u307e\u3059", "\u5927\u304d\u3081\u306b\u8868\u793a\u3057\u307e\u3059"]})
  }, Oh:function(b) {
    gls2.core.Cb = b;
    this.ed();
    this.xc()
  }, ed:function() {
    localStorage.setItem("tmshooter.config", JSON.stringify({bgmVolume:gls2.core.od, seVolume:gls2.core.zc, particleEffectLevel:gls2.core.Pc, bulletBig:gls2.core.Cb}))
  }, toString:function() {
    return"gls2.TitleScene"
  }})
})();
(function() {
  gls2.Ji = tm.createClass({superClass:gls2.Scene, mode:0, types:l, kg:l, qc:l, rc:l, sc:l, Gh:l, Eh:l, type:0, style:0, Jd:z, cg:z, init:function() {
    this.superInit();
    tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
    tm.display.Label("PLAYER SELECT", 40).setPosition(240, 64).addChildTo(this);
    this.types = this.Sl();
    this.kg = this.Rl();
    var b = tm.display.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(48, 320).setRotation(-90);
    b.update = function(b) {
      this.setScale(b.getKey("left") ? 2 : 1);
      this.alpha = 1 + 0.5 * Math.sin(0.1 * b)
    };
    b.addChildTo(this);
    b = tm.display.TriangleShape(20, 20, {fillStyle:"rgba(255,255,255,0.7)", strokeStyle:"transparent"}).setPosition(432, 320).setRotation(90);
    b.update = function(b) {
      this.setScale(b.getKey("right") ? 2 : 1);
      this.alpha = 1 + 0.5 * Math.sin(0.1 * b)
    };
    b.addChildTo(this);
    this.mode = 0;
    this.kg.visible = z;
    this.Kh(-1, j);
    this.qc.update();
    this.rc.update();
    this.sc.update();
    gls2.wa("voSelectShip");
    gls2.Ib("bgmShipSelect", j)
  }, Sl:function() {
    var b = tm.display.CanvasElement();
    b.addChildTo(this);
    this.Gh = tm.display.Label("Type-A").setPosition(240, 150);
    this.Gh.addChildTo(b);
    var c = ["\u4e00\u70b9\u96c6\u4e2d\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u6700\u901f\n\n\u7d76\u5927\u306a\u5a01\u529b\u3092\u8a87\u308b\n\u6b63\u9762\u706b\u529b\u3068\n\u30b9\u30d4\u30fc\u30c9\u3067\n\u6575\u3092\u8e42\u8e99\u3059\u308b", "\u53ef\u5909\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u4e2d\n\n\u6b63\u9762\u3068\u4e21\u30b5\u30a4\u30c9\u306b\n\u6483\u3061\u5206\u3051\u3067\u304d\u308b\n\u53ef\u5909\u578b\u30d3\u30c3\u30c8\u3092\u6301\u3064\n\u30c6\u30af\u30cb\u30ab\u30eb\u306a\u6a5f\u4f53", 
    "\u5e83\u7bc4\u56f2\u578b\n\u30b9\u30d4\u30fc\u30c9\uff1a\u9045\n\n\u5e83\u7bc4\u56f2\u306b\u653b\u6483\u53ef\u80fd\u306a\n\u30ef\u30a4\u30c9\u30b7\u30e7\u30c3\u30c8\u3092\n\u6301\u3064\u6a5f\u4f53\n\u9ad8\u3044\u6383\u8a0e\u80fd\u529b"];
    this.Hh = tm.display.Label(c[0], 16).setPosition(240, 500);
    this.Hh.update = function() {
      this.Hh.text = c[this.type]
    }.bind(this);
    this.Hh.addChildTo(b);
    var d = tm.asset.SpriteSheet({image:"fighter", frame:{width:64, height:64}, animations:{typeB:{frames:[10, 17, 24], next:"typeB", frequency:2}}});
    this.qc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(3);
    this.rc = tm.display.AnimationSprite(d, 64, 64).gotoAndPlay("typeB");
    this.sc = tm.display.Sprite("fighter", 64, 64).setFrameIndex(31);
    this.qc.rb = 0;
    this.rc.rb = 1;
    this.sc.rb = 2;
    this.qc.setScale(3).setPosition(0, 320).addChildTo(b);
    this.rc.setPosition(0, 320).addChildTo(b);
    this.sc.setPosition(0, 320).addChildTo(b);
    this.qc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.rb / 3 * Math.PI)
    };
    this.rc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.rb / 3 * Math.PI)
    };
    this.sc.update = function() {
      this.x = 240 + 90 * Math.sin(2 * this.rb / 3 * Math.PI)
    };
    return b
  }, Rl:function() {
    var b = tm.display.CanvasElement();
    b.addChildTo(this);
    this.Eh = tm.display.Label("Shot Style").setPosition(240, 150);
    this.Eh.addChildTo(b);
    this.zd = tm.display.TriangleShape(40, 40, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"}).setPosition(240, 384).addChildTo(b);
    this.Jc = tm.app.Object2D();
    this.Jc.addChildTo(this.zd);
    this.Jc.update = function(b) {
      this.Jc.rotation = 1 === this.type ? 45 * Math.sin(0.1 * b.frame) : 0
    }.bind(this);
    this.Da = [];
    this.Da[0] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Da[0].update = function() {
      0 === this.type ? this.Da[0].setPosition(-30, 20).setRotation(0) : 1 === this.type ? this.Da[0].setPosition(-30, 20).setRotation(-5) : 2 === this.type && this.Da[0].setPosition(-30, 10).setRotation(-10)
    }.bind(this);
    this.Da[1] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Da[1].update = function() {
      0 === this.type ? this.Da[1].setPosition(30, 20).setRotation(0) : 1 === this.type ? this.Da[1].setPosition(30, 20).setRotation(5) : 2 === this.type && this.Da[1].setPosition(30, 10).setRotation(10)
    }.bind(this);
    this.Da[2] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Da[2].update = function() {
      0 === this.type ? this.Da[2].setPosition(-50, 10).setRotation(0) : 1 === this.type ? this.Da[2].setPosition(-50, 10).setRotation(-10) : 2 === this.type && this.Da[2].setPosition(-50, 20).setRotation(-20)
    }.bind(this);
    this.Da[3] = tm.display.TriangleShape(20, 20, {fillStyle:"hsla(180, 80%, 80%, 0.5)", strokeStyle:"transparent"});
    this.Da[3].update = function() {
      0 === this.type ? this.Da[3].setPosition(50, 10).setRotation(0) : 1 === this.type ? this.Da[3].setPosition(50, 10).setRotation(10) : 2 === this.type && this.Da[3].setPosition(50, 20).setRotation(20)
    }.bind(this);
    this.zd.line = c(0, 0, 0, 130, 8);
    this.zd.line.addChildTo(this.zd);
    this.Da.each(function(b) {
      b.line = c(0, 0, 0, 130, 5);
      b.line.addChildTo(b);
      b.addChildTo(this.Jc)
    }.bind(this));
    var f = ["\u30b7\u30e7\u30c3\u30c8\u5f37\u5316\u578b\n\n\u30d3\u30c3\u30c8\u3092\uff14\u3064\u88c5\u5099\u3057\u305f\n\u30b7\u30e7\u30c3\u30c8\u91cd\u8996\u306e\u30b9\u30bf\u30a4\u30eb", "\u30ec\u30fc\u30b6\u30fc\u5f37\u5316\u578b\n\n\u30ec\u30fc\u30b6\u30fc\u306e\u5a01\u529b\u306b\u512a\u308c\n\u5bfe\u5927\u578b\u6a5f\u6226\u3067\n\u6709\u5229\u306a\u30b9\u30bf\u30a4\u30eb", "\u30a8\u30ad\u30b9\u30d1\u30fc\u30c8\u5f37\u5316\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\n\u4e21\u65b9\u304c\u5f37\u5316\u3055\u308c\u305f\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b2\u30fc\u30e0\u96e3\u6613\u5ea6\u304c\u4e0a\u6607\u3057\u307e\u3059\uff01>>\n<<\u4e0a\u7d1a\u8005\u5411\u3051>>", 
    "\u30d3\u30ae\u30ca\u30fc\u990a\u6210\u578b\n\n\u30b7\u30e7\u30c3\u30c8\u3068\u30ec\u30fc\u30b6\u30fc\u306e\u4e21\u65b9\u3092\n\u540c\u6642\u306b\u767a\u5c04\u3067\u304d\u308b\u30b9\u30bf\u30a4\u30eb\n\n<<\u30b9\u30b3\u30a2\u304c1/10\u306b\u306a\u308a\u307e\u3059\uff01>>\n<<\u521d\u5fc3\u8005\u5411\u3051>>"];
    this.Fh = tm.display.Label(f[0], 16).setPosition(240, 500);
    this.Fh.update = function() {
      this.Fh.text = f[this.style]
    }.bind(this);
    this.Fh.addChildTo(b);
    return b
  }, update:function(b) {
    if(0 === this.mode) {
      if(this.types.alpha = 1, this.kg.visible = z, !this.cg && b.getKeyDown("left")) {
        this.Kh(-1, z), gls2.wa("select")
      }else {
        if(!this.cg && b.getKeyDown("right")) {
          this.Kh(1, z), gls2.wa("select")
        }else {
          if(b.getKeyDown("z") || b.getKeyDown("c") || b.getKeyDown("space")) {
            this.mode = 1, gls2.wa("decision")
          }
        }
      }
    }else {
      1 === this.mode && (this.types.alpha = 0.1, this.kg.visible = j, b.getKeyDown("left") ? (this.style = (this.style - 1 + 4) % 4, gls2.wa("select")) : b.getKeyDown("right") ? (this.style = (this.style + 1 + 4) % 4, gls2.wa("select")) : b.getKeyDown("z") || b.getKeyDown("c") || b.getKeyDown("space") ? (this.Jd = j, this.vj(), gls2.wa("decision")) : b.getKeyDown("x") && (this.mode = 0), this.bm(0 === ~~(b.frame / 60) % 2))
    }
  }, vm:function() {
    $(this, "AUTO BOMB", ["on", "off"], this.xl, {defaultValue:0, menuDescriptions:["\u88ab\u5f3e\u6642\u306b\u81ea\u52d5\u3067\u30dc\u30f3\u30d0\u30fc\u3092\u6295\u4e0b\u3057\u307e\u3059", "\u30dc\u30f3\u30d0\u30fc\u306e\u6295\u4e0b\u306f\u624b\u52d5\u3067\u306e\u307f\u884c\u3044\u307e\u3059\u3002\u30df\u30b9\u6642\u306b\u6700\u5927\u30dc\u30e0\u6570\u304c\u5897\u52a0\u3057\u307e\u3059"], showExit:j})
  }, xl:function(b) {
    2 !== b && (this.Jd = 0 === b, this.vj())
  }, vj:function() {
    $(this, "ARE YOU READY?", ["ok"], this.yl, {defaultValue:0, menuDescriptions:["\u51fa\u6483\u3057\u307e\u3059"], showExit:j})
  }, yl:function(b) {
    0 === b && this.Vl()
  }, Kh:function(b, c) {
    this.type = (this.type + b + 3) % 3;
    [this.qc, this.rc, this.sc][this.type].remove().addChildTo(this.types);
    c ? (this.qc.rb -= b, this.qc.scaleX = 0 === this.type ? 5 : 1, this.qc.scaleY = 0 === this.type ? 5 : 1, this.rc.rb -= b, this.rc.scaleX = 1 === this.type ? 5 : 1, this.rc.scaleY = 1 === this.type ? 5 : 1, this.sc.rb -= b, this.sc.scaleX = 2 === this.type ? 5 : 1, this.sc.scaleY = 2 === this.type ? 5 : 1) : (this.cg = j, this.qc.tweener.clear().to({rb:this.qc.rb - b, scaleX:0 === this.type ? 5 : 1, scaleY:0 === this.type ? 5 : 1}, 300), this.rc.tweener.clear().to({rb:this.rc.rb - b, scaleX:1 === 
    this.type ? 5 : 1, scaleY:1 === this.type ? 5 : 1}, 300), this.sc.tweener.clear().to({rb:this.sc.rb - b, scaleX:2 === this.type ? 5 : 1, scaleY:2 === this.type ? 5 : 1}, 300), this.tweener.clear().wait(310).call(function() {
      this.cg = z
    }.bind(this)));
    this.Gh.text = ["Type-A", "Type-B", "Type-C"][this.type]
  }, Vl:function() {
    gls2.core.aa.Jd = this.Jd;
    gls2.core.aa.start(this.type, this.style);
    if(gls2.core.aa.va.assets) {
      var b = tm.ui.LoadingScene({assets:gls2.core.aa.va.assets, width:480, height:640, nextScene:function() {
        gls2.core.aa.assets = l;
        return gls2.core.aa
      }.bind(this)});
      b.bg.canvas.clearColor("black");
      gls2.core.replaceScene(b)
    }else {
      gls2.core.replaceScene(gls2.core.aa)
    }
    gls2.pe()
  }, bm:function(b) {
    this.Eh.text = ["Shot", "Laser", "Expert", "Beginner"][this.style] + " Style";
    1 === this.style ? (this.zd.line.Ac = z, this.Da[0].line.Ac = z, this.Da[1].line.Ac = z, this.Da[2].line.Ac = z, this.Da[3].line.Ac = z) : (this.zd.line.Ac = j, this.Da[0].line.Ac = j, this.Da[1].line.Ac = j, this.Da[2].line.Ac = j, this.Da[3].line.Ac = j);
    b ? (this.Da[0].visible = j, this.Da[1].visible = j, 1 === this.style ? (this.Da[2].visible = z, this.Da[3].visible = z) : (this.Da[2].visible = j, this.Da[3].visible = j), this.zd.line.lineWidth = 5) : (3 !== this.style && this.Da.each(function(b) {
      b.visible = z
    }), this.zd.line.lineWidth = 0 === this.style ? 10 : 25)
  }, Pd:L()});
  var c = tm.createClass({superClass:tm.display.CanvasElement, Ac:j, init:function(b, c, d, k, n) {
    this.superInit();
    this.angle = d - 0.5 * Math.PI;
    this.x = b + 10 * Math.cos(this.angle);
    this.y = c + 10 * Math.sin(this.angle);
    this.length = k;
    this.fillStyle = this.strokeStyle = "hsla(180, 80%, 80%, 1.0)";
    this.i = 0;
    this.lineWidth = n
  }, update:function(b) {
    this.i = b.frame % 20 / 20
  }, draw:function(b) {
    b.lineWidth = this.lineWidth;
    if(this.Ac && 5 === this.lineWidth) {
      var c = 5 * Math.cos(this.angle - Math.PI / 2), d = 5 * Math.sin(this.angle - Math.PI / 2);
      b.drawArrow(this.x - c, this.y - d, Math.cos(this.angle) * this.length * this.i + this.x - c, Math.sin(this.angle) * this.length * this.i + this.y - d, 1.2 * this.lineWidth);
      b.drawArrow(this.x + c, this.y + d, Math.cos(this.angle) * this.length * this.i + this.x + c, Math.sin(this.angle) * this.length * this.i + this.y + d, 1.2 * this.lineWidth)
    }else {
      b.drawArrow(this.x, this.y, Math.cos(this.angle) * this.length * this.i + this.x, Math.sin(this.angle) * this.length * this.i + this.y, 1.2 * this.lineWidth)
    }
  }})
})();
gls2.cb = tm.createClass({superClass:gls2.Scene, da:l, score:0, Zc:0, ub:0, Ua:0, ef:0, vb:0, qd:0, Aa:0, va:l, ka:l, Bd:3, hg:0, ig:0, kc:0, oe:0, ff:0, ag:0, Jd:z, Vb:0, Md:0, Ri:0, sd:z, cf:z, Oc:0, Eb:0, ab:z, te:0, ue:0, Ta:0, $c:0, rm:0, qm:0, Uf:l, Ye:l, Xh:l, vh:l, th:l, uh:l, nh:l, kj:l, lc:l, $b:l, Nd:l, Xe:z, sl:z, yd:l, ij:0, fd:l, Ze:l, gf:l, Ue:l, je:l, nd:l, Sd:l, Ch:l, ii:0, gi:0, Ej:0, hi:0, Ae:0, Vd:0, ud:0, ze:0, Ud:0, td:0, Mf:0, ai:z, init:function() {
  gls2.cb.Je !== l && h(Error("class 'gls2.GameScene' is singleton!!"));
  this.superInit();
  gls2.cb.Je = this;
  this.$b = gls2.kk(this);
  this.$b.Lb.addChildTo(this);
  this.ka = gls2.bk().Ia;
  this.ka.addChildTo(this);
  this.Uf = gls2.cb.Layer().addChildTo(this);
  this.Ye = gls2.cb.Layer().addChildTo(this);
  this.vh = gls2.cb.Layer().addChildTo(this);
  this.th = gls2.cb.Layer().addChildTo(this);
  this.Xh = gls2.cb.Layer().addChildTo(this);
  this.uh = gls2.cb.Layer().addChildTo(this);
  this.nh = Array.range(3).map(function() {
    return gls2.cb.Layer().addChildTo(this)
  }.bind(this));
  this.Jj = gls2.cb.Layer().addChildTo(this);
  this.kj = gls2.cb.zi(this).addChildTo(this);
  tm.Ob.Dd.We.ie = this;
  this.lc = tm.app.Object2D();
  this.lc.addChildTo(this);
  this.lc.update = function(c) {
    this.Gl(c)
  }.bind(this);
  this.addEventListener("exit", function() {
    this.$b.clear()
  })
}, addChild:function(c) {
  c.lb ? this.th.addChild(c) : c instanceof gls2.Wa ? this.nh[c.Va].addChild(c) : c instanceof gls2.Vg || c instanceof gls2.ri || c instanceof gls2.wi ? this.Uf.addChild(c) : c instanceof gls2.ea ? c.bd ? this.Uf.addChild(c) : this.vh.addChild(c) : c instanceof gls2.Hi ? (this.Xh.addChild(c), c.bf.addChildTo(this.Jj)) : c === this.lc || c === this.ka || c instanceof gls2.cb.Layer || c instanceof gls2.cb.zi || c instanceof gls2.Ii || c instanceof gls2.yi ? this.superClass.prototype.addChild.apply(this, 
  arguments) : (console.error("unknown type child."), h(Error(c)))
}, update:function(c) {
  this.va.update(c.frame);
  0 === c.frame % 2 && this.$b.update();
  c.getKeyDown("space") ? this.kf(0) : c.getKeyDown("p") && (this.qf().saveAsImage(), this.kf(0))
}, qf:function() {
  var c = tm.graphics.Canvas();
  c.resize(480, 640);
  c.clearColor("black");
  c.drawImage(this.ka.ka.element, 0, 0);
  c.drawImage(this.app.canvas.element, 0, 0);
  c.drawImage(this.$b.element, 0, 0);
  return c
}, Gl:function(c) {
  this.da.Lc === z && 2 !== gls2.core.mode && gls2.fa.erase();
  var b;
  b = [].concat(gls2.ea.gb);
  for(var f = [].concat(gls2.ge.gb), d = f.length;f[--d] !== i;) {
    for(var k = b.length;b[--k] !== i;) {
      var n = b[k], s = f[d];
      if(!(0 >= n.qa || n.eb) && gls2.Collision.ve(n, s)) {
        if(s.Tf(1), s.remove(), n.ad(s.Id)) {
          this.kc += 1;
          this.ab ? this.Tb(0) : this.Tb(0.0025);
          this.Mh(n);
          break
        }
      }
    }
  }
  s = this.da.Yb;
  if(this.da.Xb) {
    b = [].concat(gls2.ea.gb);
    b.sort(function(b, c) {
      return b.y - c.y
    });
    for(k = b.length;b[--k] !== i;) {
      if(n = b[k], !(0 >= n.qa || n.eb) && gls2.Collision.ve(n, s)) {
        s.Ql(n.y + n.boundingHeightBottom);
        n.ad(s.Id) ? (this.kc += 1, this.ab ? this.Tb(0) : this.Tb(0.005), this.Mh(n)) : (this.vb = Math.min(this.vb + 0.02, 1), this.ab ? (this.he(0.01 * Z[this.$c]), this.Tb(0)) : (this.he(0.01), this.Tb(5E-4)));
        s.Tf(2);
        break
      }
    }
    f = {x:this.da.x, y:this.da.y, boundingWidthLeft:50, boundingWidthRight:50, boundingHeightTop:100, boundingHeightBottom:40};
    b = [].concat(gls2.ea.gb);
    for(k = b.length;b[--k] !== i;) {
      if(n = b[k], !(0 >= n.qa || n.eb) && gls2.Collision.ve(n, f)) {
        n.ad(s.Id) ? (this.kc += 1, this.Tb(0.03), this.Mh(n)) : (this.vb = Math.min(this.vb + 0.02, 1), this.ab ? (this.he(0.01 * Z[this.$c]), this.Tb(0.008)) : (this.he(0.01), this.Tb(0.004))), s.dl(2, this.da.x, this.da.y - 30), this.Mf += 1, 300 < this.Mf && gls2.core.ta("aura300")
      }
    }
  }
  if(this.sd) {
    gls2.fa.erase();
    b = [].concat(gls2.ea.gb);
    for(k = b.length;b[--k] !== i;) {
      if(n = b[k], !(0 >= n.qa || n.eb) && n.jc() && n.ad(2)) {
        this.Hd(n.score), this.kc += 1
      }
    }
  }
  if(this.ab) {
    k = [].concat(gls2.ge.gb);
    for(n = k.length;k[--n] !== i;) {
      if(s = k[n], !(0 >= s.qa)) {
        f = [].concat(gls2.Wa.gb);
        for(b = f.length;f[--b] !== i;) {
          if(d = f[b], d.visible !== z && 0 < s.qa && gls2.Collision.ve(s, d)) {
            d.qa -= 6 - this.Eb;
            if(0 > d.qa) {
              var A = d.Ca(), n = this.Eb;
              gls2.la.rand(0, 40) < n && 14400 < gls2.Wb(A, this.da) && gls2.fa.bl(A);
              this.Hd(10);
              this.he(10);
              this.gj(z, z, d.x, d.y, 1)
            }
            s.qa -= 1
          }
        }
      }
    }
  }
  if(this.Xe) {
    gls2.fa.erase()
  }else {
    if(this.da.parent !== l && this.da.eb === z && this.sd === z && 0 >= this.te) {
      s = z;
      for(k = gls2.Wa.gb.length;gls2.Wa.gb[--k] !== i;) {
        if(b = gls2.Wa.gb[k], b.visible !== z && gls2.Collision.ve(b, this.da)) {
          this.da.ad();
          s = j;
          0 < this.Vb && this.Jd ? (this.Eb = gls2.la.clamp(this.Eb - 1, 0, 1), this.Ne(-0.01), gls2.Ei(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this), gls2.core.ta("bomb2"), this.nd[this.Aa] += 1) : this.sj();
          break
        }
      }
      if(!s) {
        for(k = gls2.ea.gb.length;gls2.ea.gb[--k] !== i;) {
          if(n = gls2.ea.gb[k], !(0 >= n.qa || n.eb) && !n.bd && gls2.Collision.ve(n, this.da)) {
            this.da.ad();
            0 < this.Vb && this.Jd ? (this.Eb = gls2.la.clamp(this.Eb - 1, 0, 1), this.Ne(-0.01), gls2.Ei(this.da, this).setPosition(this.da.x, this.da.y).addChildTo(this), gls2.core.ta("bomb2"), this.nd[this.Aa] += 1) : this.sj();
            break
          }
        }
      }
    }
    this.ab && (this.ue -= 1, 0 >= this.ue && this.Pf());
    this.te = Math.max(this.te - 1, 0);
    this.vb -= 0.012;
    0 >= this.vb && (this.vb = 0, 0 < this.Ta ? this.qd = this.Ua = this.ub = 0 : (0 < this.Ua && (0 >= this.qd && (this.qd = 0.0025 * this.Ua), this.ub = this.ub * (this.Ua - this.qd) / this.Ua, this.Ua -= this.qd), 0 >= this.Ua && (this.qd = this.Ua = this.ub = 0)));
    this.cf && (this.score += 1E3);
    s = gls2.Wa.gb.length;
    c.fps = 500 < s ? Math.floor(gls2.la.clamp(500 / s, 0.2, 1) * FPS) : FPS
  }
}, Mh:function(c) {
  this.gj(c.bd, 62500 > gls2.Wb(c, this.da), c.x, c.y, c.star * aa[this.$c], c instanceof gls2.hd);
  this.he(Z[this.$c]);
  for(var b = this.ub, f = ~~(this.Ua / 500) + 1, d = 0;d < f;d++) {
    b += c.score, this.Hd(b)
  }
  this.ub += c.score * f
}, gj:function(c, b, f, d, k, n) {
  c = c ? gls2.rk : gls2.Li;
  for(var s = 0;s < k;s++) {
    var A = c(b);
    A.setPosition(f, d);
    n && (A.Rd = j)
  }
}, wl:function(c) {
  gls2.wa("star");
  c.mj ? (this.ig += 1, this.ub += 1E3, this.Hd(1E3 + 0 * this.ub), this.ab ? this.Tb(0) : this.Tb(0.01)) : (this.hg += 1, this.ub += 100, this.Hd(100 + 0 * this.ub), this.ab ? this.Tb(0) : this.Tb(5E-4))
}, start:function(c, b) {
  this.$b.le.Lk().clear();
  this.Zc = this.score = 0;
  this.Bd = 3;
  this.Vb = this.Md = U[b];
  this.Ri = X[b];
  this.cf = z;
  this.Ta = this.Eb = this.Oc = 0;
  this.Pf();
  this.sd = z;
  this.ff = this.ag = 0;
  this.fd = [];
  this.Ze = [];
  this.gf = [];
  this.Ue = [];
  this.je = [];
  this.nd = [];
  this.Sd = [];
  for(var f = 0;5 > f;f++) {
    this.fd.push(0), this.Ze.push(0), this.gf.push(0), this.Ue.push(0), this.je.push(0), this.nd.push(0), this.Sd.push(0)
  }
  this.Ch = [];
  this.da = gls2.Hi(this, c, b);
  0 === gls2.core.mode && this.fg(0);
  M.Qa.ob.$bg = 3 !== b ? 0 : 1;
  M.Qa.ob.$ex = 2 !== b ? 0 : 1;
  0 === gls2.core.mode ? this.jg(4) : 1 === gls2.core.mode ? this.jg(gls2.core.ei) : 2 === gls2.core.mode && this.jg(-1);
  this.Xl();
  0 === c ? gls2.core.ta("launch0") : 1 === c ? gls2.core.ta("launch1") : 2 === c && gls2.core.ta("launch2")
}, jg:function(c) {
  this.da.parent !== l && this.da.remove();
  gls2.ea.Se();
  gls2.ge.Se();
  gls2.fa.Se();
  this.Uf.removeChildren();
  this.th.removeChildren();
  this.uh.removeChildren();
  this.Xh.removeChildren();
  this.Jj.removeChildren();
  this.nh.forEach(function(b) {
    b.removeChildren()
  });
  this.lc.removeChildren();
  this.kc = this.oe = this.ig = this.hg = this.ef = this.vb = this.Ua = this.ub = 0;
  this.Nd = l;
  this.sl = this.Xe = z;
  this.ff = 0;
  this.$b.Lb.$e = 0;
  this.Eb = this.$b.Lb.Mc = 0;
  this.Aa = c;
  this.va = gls2.kd.create(this, c);
  this.tweener.clear().wait(1E3).call(function() {
    0 === c && gls2.wa("voLetsGo");
    this.Ih()
  }.bind(this));
  this.ka.tweener.clear();
  this.Mf = this.td = this.Ud = this.ze = this.ud = this.Vd = this.Ae = this.hi = this.gi = this.ii = 0;
  this.ai = z;
  this.ii = gls2.core.frame;
  this.Ej = Date.now()
}, Ih:function() {
  this.Jb("3...2...1...");
  this.Jb("Let's go!");
  this.da.setPosition(240, 740).setFrameIndex(3).addChildTo(this);
  this.da.Yb.addChildTo(this);
  this.da.Lc = z;
  this.da.eb = j;
  this.da.Qd = z;
  this.da.Xb = z;
  this.da.tweener.clear().moveBy(0, -180, 1E3, "easeOutBack").call(function() {
    2 !== gls2.core.mode && (this.Oe = this.Lc = j)
  }.bind(this.da)).wait(3E3).call(function() {
    this.eb = z
  }.bind(this.da))
}, sj:function() {
  gls2.na.Qf(this.da.x, this.da.y, this);
  this.Jb("I was shot down.");
  this.da.Lc = z;
  this.da.remove();
  this.Bd -= 1;
  this.qd = this.Ua = this.vb = 0;
  this.Ta = ~~(this.Ta / 2 + 0.5);
  this.ff += 1;
  this.ag += 1;
  this.gf[this.Aa] += 1;
  this.Eb = gls2.la.clamp(this.Eb - 3, 0, 1);
  this.Ne(-0.03);
  0 < this.Bd ? this.tweener.clear().wait(1E3).call(function() {
    this.Vb = this.Md = Math.min(this.Md + 1, this.Ri);
    this.Ih()
  }.bind(this)) : (this.yd = this.qf().canvas.toDataURL("image/png"), gls2.core.af === this.score && (gls2.core.ll = this.yd), this.tweener.clear().wait(2E3).call(function() {
    this.Zc < gls2.core.Ti() || 1 === gls2.core.mode ? this.Jl() : this.fj()
  }.bind(this)))
}, fg:function(c) {
  M.Qa.ob.$rank = 1 * gls2.la.clamp(c, 0, 0.5);
  M.Qa.ob.$difficulty = 0.5 * M.Qa.ob.$rank
}, Ne:function(c) {
  this.fg(M.Qa.ob.$rank / 1 + c)
}, cl:function() {
  this.Vd = Date.now();
  this.ud += this.Vd - this.Ae;
  this.Ud = gls2.core.frame;
  this.td += this.Ud - this.ze;
  this.Jb("System rebooted.", j);
  for(var c = this.score = 0;c < this.fd.length;c++) {
    this.fd[c] = 0
  }
  this.Zc += 1;
  this.Ue[this.Aa] += 1;
  this.Bd = 3;
  this.Vb = this.Md = U[this.da.style];
  this.Eb = 0;
  this.fg(0);
  this.Ih()
}, Mk:function() {
  this.Ui();
  gls2.Ib("bgmResult");
  var c = tm.app.Object2D();
  c.addChildTo(this.lc);
  c.tweener.wait(1E3).call(function() {
    this.app.replaceScene(gls2.ResultScene(this, this.qf()));
    c.remove()
  }.bind(this))
}, fj:function() {
  this.fd[this.Aa] = 0 === this.Aa ? this.score : this.score - this.fd[this.Aa - 1];
  this.Ui();
  gls2.sf();
  this.app.replaceScene(gls2.xi())
}, Ui:function() {
  this.hi = Date.now();
  var c = this.hi - this.Ej - this.ud;
  this.gi = gls2.core.frame;
  this.Ze[this.Aa] = 1E3 * ((this.gi - this.ii - this.td) / c)
}, Hd:function(c) {
  3 === this.da.style && (c *= 0.1);
  var b = this.score;
  this.score += c;
  for(c = 0;c < T.length;c++) {
    var f = T[c];
    b < f && f <= this.score && (this.bj(), 0 == c && this.app.ta("extend1"), 1 == c && this.app.ta("extend2"))
  }
  gls2.core.af = Math.max(gls2.core.af, this.score);
  gls2.core.af === this.score && (gls2.core.ml = this.Aa, gls2.core.ol = this.da.type, gls2.core.nl = this.da.style, gls2.core.kl = this.Zc);
  1E12 <= this.score ? gls2.core.ta("score1T") : 1E11 <= this.score ? gls2.core.ta("score100G") : 5E10 <= this.score ? gls2.core.ta("score50G") : 2E10 <= this.score ? gls2.core.ta("score20G") : 2E9 <= this.score ? gls2.core.ta("score2G") : 1E8 <= this.score && gls2.core.ta("score100M")
}, he:function(c) {
  this.qd = 0;
  this.Ua += c;
  this.ef = Math.max(this.ef, this.Ua);
  1 <= c && (this.vb = 1);
  1E5 <= this.Ua ? this.app.ta("combo100000") : 1E4 <= this.Ua ? this.app.ta("combo10000") : 1E3 <= this.Ua ? this.app.ta("combo1000") : 100 <= this.Ua && this.app.ta("combo100")
}, Tb:function(c) {
  if(10 !== this.Ta) {
    0 === this.Ta && (this.ij = gls2.core.frame);
    for(c *= 0.75;1 < c;) {
      gls2.Ed(this.da).addChildTo(this), c -= 1, this.Oc = 0, this.Ta += 1, 1 === this.Ta ? (this.Jb("HYPER SYSTEM, stand by.", j), gls2.wa("voHyperStandBy")) : (this.Jb("HYPER SYSTEM, ready.", j), gls2.wa("voHyperReady"))
    }
    5 < this.Ta && 60 >= gls2.core.frame - this.ij && gls2.core.ta("hyperAndHyperAndHyper");
    this.Oc = gls2.la.clamp(this.Oc + c, 0, 1);
    1 <= this.Oc && (gls2.Ed(this.da).addChildTo(this), this.Ta += 1, this.Oc -= 1, 1 === this.Ta ? (this.Jb("HYPER SYSTEM, stand by.", j), gls2.wa("voHyperStandBy")) : (this.Jb("HYPER SYSTEM, ready.", j), gls2.wa("voHyperReady")))
  }
}, Wl:function() {
  0.5 > Math.random() ? (this.Jb("HYPER SYSTEM start!!", j), gls2.wa("voHyperStart0")) : (this.Jb("start counting to system limit.", j), gls2.wa("voHyperStart1"));
  this.Eb = gls2.la.clamp(this.Eb + 1, 0, 5);
  this.Ne(0.01 * this.Ta);
  M.Qa.ob.$hyperOff = 0.8 * (2 !== this.da.style ? 1 : 0.5);
  this.ue = 600;
  this.te = 72;
  this.da.Wf.Be(this.Ta);
  this.da.Yb.Be(this.Ta);
  this.da.me = this.da.Wf;
  gls2.na.el(this.da.x, this.da.y, this);
  this.ab = j;
  this.$c = this.Ta;
  this.Oc = this.Ta = 0;
  gls2.fa.erase(j);
  this.app.ta("hyper1");
  10 == this.$c && this.app.ta("hyper10");
  this.Sd[this.Aa] += 1;
  this.Ch.push(this.$c)
}, Pf:function() {
  this.ab !== z && (this.ab = z, gls2.Ed(this.da, j).addChildTo(this), this.da.me = this.da.uj, M.Qa.ob.$hyperOff = 1 * (2 !== this.da.style ? 1 : 0.5), this.da.Wf.Be(0), this.da.Yb.Be(0), this.te = 60, this.$c = this.ue = 0, gls2.fa.erase())
}, Hk:function() {
  gls2.wa("decision");
  gls2.wa("voGetBomb");
  this.Vb = Math.min(this.Vb + 1, this.Md);
  this.cf = this.Vb === this.Md
}, bj:function() {
  gls2.fa.erase(j);
  gls2.wa("voExtend");
  gls2.wa("decision");
  this.Jb("extended.");
  this.Bd += 1
}, Jb:function(c, b) {
  this.$b.le.Ik(c, b)
}, kf:function(c) {
  this.Ae = Date.now();
  this.ze = gls2.core.frame;
  $(this, "PAUSE", ["resume", "setting", "exit game"], this.Dl, {defaultValue:c, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u518d\u958b\u3057\u307e\u3059", "\u8a2d\u5b9a\u3092\u5909\u66f4\u3057\u307e\u3059", "\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059"], showExit:z})
}, Dl:function(c) {
  switch(c) {
    case 0:
      this.Vd = Date.now();
      this.ud += this.Vd - this.Ae;
      this.Ud = gls2.core.frame;
      this.td += this.Ud - this.ze;
      break;
    case 1:
      this.xc();
      break;
    case 2:
      this.Il()
  }
}, xc:function() {
  $(this, "SETTING", ["bgm volume", "sound volume", "particle", "bullet appearance"], this.Rh, {defaultValue:this.Zf, menuDescriptions:["BGM\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u52b9\u679c\u97f3\u30dc\u30ea\u30e5\u30fc\u30e0\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u306eON/OFF\u3092\u8a2d\u5b9a\u3057\u307e\u3059", "\u6575\u5f3e\u306e\u898b\u305f\u76ee\u306b\u95a2\u3059\u308b\u8a2d\u5b9a\u3067\u3059"]})
}, Rh:function(c) {
  4 !== c && (this.Zf = c);
  switch(c) {
    case 0:
      this.Sh();
      break;
    case 1:
      this.Wh();
      break;
    case 2:
      this.Vh();
      break;
    case 3:
      this.Th();
      break;
    default:
      this.kf(0)
  }
}, Il:function() {
  $(this, "REARY?", ["yes", "no"], this.zl, {defaultValue:1, menuDescriptions:["\u30b2\u30fc\u30e0\u3092\u4e2d\u65ad\u3057\u3001\u30bf\u30a4\u30c8\u30eb\u753b\u9762\u306b\u623b\u308a\u307e\u3059", "\u524d\u306e\u753b\u9762\u3078\u623b\u308a\u307e\u3059"], showExit:z})
}, zl:function(c) {
  0 === c ? (gls2.sf(), this.app.replaceScene(gls2.TitleScene())) : this.kf(1)
}, Sh:function() {
  $(this, "BGM VOLUME", "012345".split(""), this.Nh, {defaultValue:gls2.core.od, onCursorMove:function(c) {
    gls2.jb !== l && 6 !== c && (gls2.jb.volume = 0.1 * c)
  }, showExit:z})
}, Nh:function(c) {
  6 !== c && (gls2.core.od = c);
  this.ed();
  this.xc(1)
}, Wh:function() {
  $(this, "SE VOLUME", "012345".split(""), this.Qh, {defaultValue:gls2.core.zc, showExit:z})
}, Qh:function(c) {
  6 !== c && (gls2.core.zc = c);
  this.ed();
  this.xc(1)
}, Vh:function() {
  $(this, "PARTICLES", ["ON", "LITE", "OFF"], this.Ph, {defaultValue:gls2.core.Pc, showExit:z})
}, Ph:function(c) {
  gls2.core.Pc = c;
  this.ed();
  this.xc(1)
}, Th:function() {
  $(this, "BULLET", ["NORMAL", "LARGE"], this.Oh, {defaultValue:gls2.core.Cb, showExit:z, menuDescriptions:["\u901a\u5e38\u30b5\u30a4\u30ba\u3067\u8868\u793a\u3057\u307e\u3059", "\u5927\u304d\u3081\u306b\u8868\u793a\u3057\u307e\u3059"]})
}, Oh:function(c) {
  gls2.core.Cb = c;
  this.ed();
  this.xc(1)
}, ed:function() {
  localStorage.setItem("tmshooter.config", JSON.stringify({bgmVolume:gls2.core.od, seVolume:gls2.core.zc, particleEffectLevel:gls2.core.Pc, bulletBig:gls2.core.Cb}))
}, Jl:function() {
  this.Ae = Date.now();
  this.ze = gls2.core.frame;
  $(this, "CONTINUE? (" + this.Zc + "/" + gls2.core.Ti() + ")", ["yes", "no"], this.Al, {defaultValue:0, menuDescriptions:["\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u8d77\u52d5\u3057\u3066\u51fa\u6483\u3057\u307e\u3059", "\u4f5c\u6226\u5931\u6557\u3002\u9000\u5374\u3057\u307e\u3059"], showExit:z})
}, Al:function(c) {
  switch(c) {
    case 0:
      this.cl();
      break;
    case 1:
      this.Vd = Date.now(), this.ud += this.Vd - this.Ae, this.Ud = gls2.core.frame, this.td += this.Ud - this.ze, this.fj()
  }
}, Pd:L(), Tl:function() {
  this.$b.Lb.tweener.clear().to({$e:-480}, 1600, "easeInBack").to({Mc:30}, 800, "easeInOutBack")
}, jl:function() {
  this.$b.Lb.tweener.clear().to({Mc:0}, 800, "easeInOutBack").to({$e:0}, 1600, "easeOutBack")
}, nf:l, of:0, df:l, Cf:0, Xl:function() {
  if(1 === this.Cf) {
    if(localStorage.getItem("recCount") !== i) {
      this.df = [];
      for(var c = ~~localStorage.getItem("recCount"), b = 0;b < c;b++) {
        localStorage.removeItem("rec" + b)
      }
      localStorage.removeItem("recCount")
    }
    this.nf = [];
    this.of = 0
  }else {
    if(2 === this.Cf && localStorage.getItem("recCount") !== i) {
      this.df = [];
      c = ~~localStorage.getItem("recCount");
      for(b = 0;b < c;b++) {
        for(var f = localStorage.getItem("rec" + b).split(","), d = 0;d < f.length;d++) {
          this.df.push(f[d])
        }
      }
    }
  }
}, ym:function(c) {
  if(1 === this.Cf) {
    1E3 < this.nf.length && (localStorage.setItem("rec" + this.of, this.nf), localStorage.setItem("recCount", this.of), this.nf = [], this.of += 1), this.nf.push("" + ~~c.getKey("up") + ~~c.getKey("down") + ~~c.getKey("left") + ~~c.getKey("right") + ~~c.getKey("z") + ~~c.getKey("x") + ~~c.getKey("c"))
  }else {
    if(2 === this.Cf && this.df) {
      var b = this.df.shift();
      b !== i && (c.getKey = function(c) {
        return"up" === c ? !!~~b[0] : "down" === c ? !!~~b[1] : "left" === c ? !!~~b[2] : "right" === c ? !!~~b[3] : "z" === c ? !!~~b[4] : "x" === c ? !!~~b[5] : "c" === c ? !!~~b[6] : z
      }, c.getKeyDown = function(c) {
        return"up" === c ? !!~~b[0] : "down" === c ? !!~~b[1] : "left" === c ? !!~~b[2] : "right" === c ? !!~~b[3] : "z" === c ? !!~~b[4] : "x" === c ? !!~~b[5] : "c" === c ? !!~~b[6] : z
      })
    }
  }
}});
gls2.cb.Layer = tm.createClass({superClass:tm.app.Object2D, init:function() {
  this.superInit()
}});
gls2.cb.zi = tm.createClass({superClass:tm.display.CanvasElement, aa:l, frame:0, init:function(c) {
  this.superInit();
  this.aa = c;
  this.blendMode = "lighter"
}, update:function(c) {
  this.frame = c.frame
}, draw:function(c) {
  this.Qk(c);
  this.Rk(c)
}, Qk:function(c) {
  if(0 < this.aa.vb) {
    c.fillStyle = "rgba(255," + ~~(255 * this.aa.vb) + "," + ~~Math.min(255, 512 * this.aa.vb) + ",0.5)";
    var b = 500 * this.aa.vb;
    c.fillRect(465, 635 - b, 10, b)
  }
}, Rk:function(c) {
  c.fillStyle = "rgba(255,255,0,0.1)";
  c.fillRect(5, 628, 200, 9);
  10 === this.Ta ? 1 === this.frame % 2 && (c.fillStyle = "rgba(255,255,255,0.3)", c.fillRect(5, 628, 200, 9)) : 0 < this.aa.Oc && (c.fillStyle = "rgba(255,255,100,0.3)", c.fillRect(5, 628, 200 * this.aa.Oc, 9))
}});
gls2.cb.Je = l;
gls2.ResultScene = tm.createClass({superClass:gls2.Scene, aa:l, yd:l, lc:l, values:l, labels:l, Xf:l, Aj:[1E3, 2E3, 4E3, 1E4, 1], lj:l, bi:l, cursor:0, wait:0, frame:0, init:function(c, b) {
  this.superInit();
  this.aa = c;
  tm.display.Sprite("result_bg", 528, 704).setPosition(240, 320).addChildTo(this);
  this.values = [this.aa.hg, this.aa.ig, ~~(100 * (this.aa.kc / this.aa.oe)), this.aa.ef, 0 === this.aa.ff ? 5E7 : 0];
  this.Xf = this.values.map(function(b) {
    return 0.01 * b
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
  this.lj = tm.display.Label(Math.floor(this.aa.score), 34).setFontFamily("'Ubuntu Mono'").setAlign("right").setBaseline("middle").setPosition(384, 512).addChildTo(this);
  this.bi = tm.display.Label("press button").setPosition(240, 576).addChildTo(this);
  this.bi.visible = z;
  this.yd = b;
  for(var d = [], f = 0;12 > f;f++) {
    d[f] = [];
    for(var k = 0;16 > k;k++) {
      d[f][k] = {ci:0, xd:0, gd:gls2.la.randf(-2, 2), Bc:gls2.la.randf(1, 4)}
    }
  }
  this.lc = tm.app.Object2D();
  this.lc.draw = function(b) {
    b.save();
    for(var c = j, f = 0;f < d.length;f++) {
      for(var k = 0;k < d[f].length;k++) {
        var q = d[f][k];
        640 > 40 * k + q.xd && (b.drawImage(this.yd.element, 40 * f, 40 * k, 40, 40, 40 * f + q.ci, 40 * k + q.xd, 40, 40), q.ci += q.gd, q.xd += q.Bc, q.Bc += 0.3, c = z)
      }
    }
    this.wait = 60;
    c && this.lc.remove();
    b.restore()
  }.bind(this);
  this.lc.addChildTo(this);
  this.on("enter", function() {
    this.aa.kc === this.aa.oe ? gls2.core.ta("kill100") : 0.4 > this.aa.kc / this.aa.oe && gls2.core.ta("kill40");
    0 === this.aa.ag && 0 === this.aa.Zc && (0 === this.aa.Aa ? gls2.core.ta("nomiss1") : 1 === this.aa.Aa ? gls2.core.ta("nomiss2") : 2 === this.aa.Aa ? gls2.core.ta("nomiss3") : 3 === this.aa.Aa ? gls2.core.ta("nomiss4") : 4 === this.aa.Aa && gls2.core.ta("nomiss5"));
    0 === this.aa.Sd[this.aa.Aa] ? gls2.core.ta("nohyper") : 5 <= this.aa.Sd[this.aa.Aa] && gls2.core.ta("hyperAndHyper");
    0 === this.aa.je[this.aa.Aa] && 0 === this.aa.nd[this.aa.Aa] && gls2.core.ta("nobomb");
    this.aa.ai || gls2.core.ta("manpower")
  });
  this.on("exit", function() {
    gls2.pe()
  })
}, update:function(c) {
  this.wait -= 1;
  if(!(0 < this.wait)) {
    var b = this.cursor;
    if(b < this.values.length) {
      gls2.wa("star"), this.values[b] <= this.Xf[b] || c.getKeyDown("z") || c.getKeyDown("c") || c.getKeyDown("space") ? (this.aa.Hd(this.values[b] * this.Aj[b]), this.values[b] = 0, this.cursor += 1, this.wait = 30) : (this.aa.Hd(this.Xf[b] * this.Aj[b]), this.values[b] -= this.Xf[b]), this.labels[b].text = "" + Math.floor(this.values[b]) + (2 === b ? "%" : ""), this.lj.text = Math.floor(this.aa.score)
    }else {
      if(this.bi.visible = j, c.getKeyDown("z") || c.getKeyDown("c") || c.getKeyDown("space") || 1800 < this.frame) {
        gls2.wa("decision"), this.aa.fd[this.aa.Aa] = 0 === this.aa.Aa ? this.aa.score : this.aa.score - this.aa.fd[this.aa.Aa - 1], 0 === gls2.core.mode ? 5 == this.aa.Aa + 1 ? c.replaceScene(gls2.Zj()) : (this.aa.jg(this.aa.Aa + 1), this.aa.va.assets ? (b = tm.ui.LoadingScene({assets:this.aa.va.assets, width:480, height:640, nextScene:function() {
          return this.aa
        }.bind(this)}), b.bg.canvas.clearColor("black"), c.replaceScene(b)) : c.replaceScene(this.aa)) : 1 === gls2.core.mode && (gls2.sf(), c.replaceScene(gls2.TitleScene()))
      }
    }
    this.frame += 1
  }
}, Pd:L()});
gls2.xi = tm.createClass({superClass:gls2.Scene, pa:0, xj:z, init:function() {
  this.superInit();
  var c = tm.display.Label("GAME OVER");
  c.fillStyle = "red";
  c.setPosition(240, 320).addChildTo(this);
  this.interactive = j;
  this.on("enter", function() {
    gls2.Ib("gameover");
    this.Kj || this.Bj()
  })
}, update:function(c) {
  (c.getKeyDown("z") || c.getKeyDown("c") || 300 == this.pa && !this.xj) && this.dg();
  this.pa += 1
}, Pd:function(c) {
  c.clearColor("black")
}, Kj:z, zj:z, wait:z, di:l, Bj:function() {
  1 !== gls2.core.mode && (this.Kj = this.wait = j, this.app.$h(l, function(c, b, f) {
    this.wait = z;
    c ? this.Kl(c) : b ? (this.zj = j, this.di = f, this.Ml()) : this.dg()
  }.bind(this)))
}, dg:function() {
  if(!this.wait) {
    this.xj = j;
    var c = ["tweet result", "back to title"], b = ["\u30b9\u30b3\u30a2\u3092Twitter\u3078\u6295\u7a3f\u3057\u307e\u3059", "\u30bf\u30a4\u30c8\u30eb\u3078\u623b\u308a\u307e\u3059"];
    !this.zj && 0 === gls2.core.mode && (c.push("save score"), b.push("\u30b9\u30b3\u30a2\u3092\u767b\u9332\u3057\u307e\u3059"));
    $(this, "GAME OVER", c, this.Cl, {defaultValue:1, menuDescriptions:b, showExit:z})
  }
}, Cl:function(c) {
  0 === c ? this.am() : 1 === c ? this.app.replaceScene(gls2.TitleScene()) : this.Bj()
}, Ml:function() {
  $(this, "SUCCESS!", ["ok"], function() {
    this.dg()
  }, {menuDescriptions:["\u30b9\u30b3\u30a2\u767b\u9332\u3057\u307e\u3057\u305f\uff01"], showExit:z})
}, Kl:function() {
  $(this, "ERROR!", ["ok"], function() {
    this.dg()
  }, {menuDescriptions:["\u30b9\u30b3\u30a2\u767b\u9332\u306b\u5931\u6557\u3057\u307e\u3057\u305f\uff01\uff1e\uff1c"], showExit:z})
}, am:function() {
  var c = "TM-Shooter SCORE: {score} {stage} {type}-{style} continue:{cont}".format({score:Math.floor(this.app.aa.score), stage:5 > this.app.aa.Aa ? "Stage" + (this.app.aa.Aa + 1) : "ALL", type:"ABC"[this.app.aa.da.type], style:["S", "L", "EX", "BG"][this.app.aa.da.style], cont:this.app.aa.Zc}), c = tm.social.Twitter.createURL({type:"tweet", text:c, hashtags:"tmshooter", url:this.di ? window.location.origin + "/ranking/" + this.di : window.location.origin});
  window.open(c, "tweet", "menubar=no,location=no,resizable=no,scrollbars=no,status=no,width=400,height=400")
}});
(function() {
  var c = "TM-Shooter cure black label;2D 'DANMAKU' Shooter on HTML5;;MUSIC by \u5cf6\u767d;JUNXXXXX\nas select;flow blue\nas stage1;FORCE\uff08MP3\uff09\nas boss;Stand by\nas result;\u611b\u3057\u3055\u3068\u5207\u306a\u3055\u3068\u30e0\u30fc\u30f3\u30d5\u30a7\u30a4\u30b9\u3068\u9aa8\u7c97\u9b06\u75c7\u3068\nas stage2;C of Cloud\nas stage3;\u5c55\u958b\u30e1\u30ac\u30d1\u30fc\u30bb\u30af\nas stage4;Tearing the stratus\nas stage5;\u65b0\u661f\u30ce\u30f4\u30a1\nas last boss;evoke\nas ex boss;\u307b\u3057\u306e\u3053\u3048\nas ending;;SOUND;kouichi_axis (\u9b54\u738b\u9b42);on_jin (\u97f3\u4eba);;GAME ENGINE (tmlib.js);phi_jp;;TEST PLAY;manofac;;SPECIAL THANKS;simiraaaa;;Stage3 PROGRAM AND GRAPHICS;minimo;;(\u4ee5\u4e0a \u656c\u79f0\u7565);;MAIN PROGRAM;daishi_hmr;;special respect to...;DODONPACHI series by CAVE;PRECURE series by TOEI;;;;Thank You for Playing!;Let's play more other STG!!;and;Create Game with tmlib.js!!;;GOKIGENYO!".split(";");
  gls2.Zj = tm.createClass({superClass:gls2.Scene, ka:l, da:l, labels:l, Fj:z, speed:0, cj:z, Va:l, init:function() {
    this.superInit();
    this.Va = tm.display.CanvasElement().addChildTo(this);
    this.ka = gls2.core.aa.ka;
    this.ka.addChildTo(this);
    this.ka.direction = 0.5 * Math.PI;
    this.ka.speed = 1;
    var b = this.da = gls2.core.aa.da;
    b.Lc = z;
    b.setPosition(240, 448);
    b.aa = this.Va;
    [].concat(b.children).forEach(function(c) {
      c != b.Jc && c.remove()
    });
    b.addChildTo(this);
    var f = b.x;
    b.on("enterframe", function() {
      0.2 < b.x - f ? b.bb += 0.3 : -0.2 > b.x - f ? b.bb -= 0.3 : 0 < b.x - f ? b.bb += 0.11 : 0 > b.x - f && (b.bb -= 0.11);
      f = b.x
    });
    var d = function() {
      var c = gls2.la.randf(0.8, 1.2);
      b.tweener.clear().to({x:gls2.la.randf(48, 432), y:gls2.la.randf(192, 512), scaleX:c, scaleY:c}, 6E3, "easeInOutQuad").call(d)
    }.bind(this);
    d();
    gls2.core.aa.Aa += 1;
    var k = this;
    this.labels = c.map(function(b, c) {
      return tm.display.Label(b, 16).setPosition(240, 960 + 64 * c).addChildTo(k).on("enterframe", function() {
        this.y -= k.speed;
        -192 > this.y && this.remove()
      })
    });
    tm.display.Label("dev7.jp", 24).setPosition(240, 960 + 64 * (c.length + 3)).addChildTo(this).on("enterframe", function() {
      320 < this.y && (this.y -= k.speed)
    });
    this.tweener.wait(2E3).call(function() {
      gls2.Ib("bgmEnding", j, j);
      this.Fj = j
    }.bind(this))
  }, onenter:function() {
    0 === gls2.core.aa.da.type ? gls2.core.ta("allclear0") : 1 === gls2.core.aa.da.type ? gls2.core.ta("allclear1") : 2 === gls2.core.aa.da.type && gls2.core.ta("allclear2")
  }, onexit:function() {
    this.ka.addChildTo(gls2.core.aa)
  }, update:function(b) {
    b.getKey("z") || b.getKey("x") || b.getKey("c") || this.Fj && gls2.jb && gls2.jb.source.playbackState !== AudioBufferSourceNode.PLAYING_STATE ? this.labels.some(function(b) {
      return!!b.parent
    }) ? this.speed = 8 : this.Ul() : this.speed = 0.5
  }, Ul:function() {
    this.cj || (this.cj = j, tm.display.RectangleShape(480, 640, {fillStyle:"black", strokeStyle:"black"}).setPosition(240, 320).addChildTo(this).tweener.set({alpha:0}).to({alpha:1}, 5E3).call(function() {
      gls2.sf();
      this.app.replaceScene(gls2.xi())
    }.bind(this)), this.ka.tweener.clear().to({speed:9}, 2E3), this.da.tweener.clear().wait(2E3).to({y:-192}, 2E3, "easeInQuad"))
  }, Pd:L()})
})();
(function() {
  gls2.ea = tm.createClass({superClass:tm.display.CanvasElement, name:l, da:l, aa:l, va:l, qa:0, ic:0, score:0, bd:z, erase:z, star:1, rl:z, Qb:j, $a:z, frame:0, eb:z, Pe:z, $d:l, direction:0, speed:0, ha:l, init:function(b, f, d) {
    this.superInit();
    this.addEventListener("added", function() {
      this.frame = 0;
      this.$a = z;
      c.push(this)
    });
    this.addEventListener("removed", function() {
      this.dispatchEvent(tm.event.Event("enemyconsumed"));
      var b = c.indexOf(this);
      -1 !== b && c.splice(b, 1)
    });
    this.Qb = j;
    this.aa = b;
    this.da = b.da;
    this.score = 100;
    this.erase = z;
    this.Gk(d);
    f.setup(this);
    this.altitude = this.bd ? 1 : 10;
    this.$d = {x:0, y:0};
    this.eb = z
  }, jf:function() {
    this.dispatchEvent(tm.event.Event("launch"));
    return this
  }, um:function() {
    this.dispatchEvent(tm.event.Event("completeattack"))
  }, update:function() {
    this.$a === z && (0 <= this.x - this.boundingWidthLeft && 480 > this.x + this.boundingWidthRight && 0 <= this.y - this.boundingHeightTop && 640 > this.y + this.boundingHeightBottom) && (this.$a = j, this.dispatchEvent(tm.event.Event("enter")));
    var b = this.x, c = this.y;
    this.bd && (this.x += this.aa.ka.za, this.y += this.aa.ka.Fa);
    this.$a && (this.frame += 1);
    this.$d.x = this.x - b;
    this.$d.y = this.y - c
  }, ad:function(b) {
    if(!this.$a || this.Pe) {
      return z
    }
    this.qa -= b;
    if(0 >= this.qa) {
      return b = gls2.la.randf(0, 5), 2 > b ? this.aa.Jb("enemy destroy.") : 4 > b ? this.aa.Jb(this.name + " destroy.") : this.aa.Jb("ETR reaction gone."), this.erase && gls2.fa.erase(j, 62500 > gls2.Wb(this, this.da), this instanceof gls2.hd), this.dispatchEvent(tm.event.Event("destroy")), this.Ca(), "yukishiro" === this.name ? gls2.core.ta("mboss1") : "mishou" === this.name ? gls2.core.ta("mboss2") : "higashi" === this.name ? gls2.core.ta("mboss3") : "hishikawa" === this.name ? gls2.core.ta("mboss4") : 
      "minamino" === this.name ? gls2.core.ta("mboss5") : "misumi" === this.name ? gls2.core.ta("boss1") : "hyuga" === this.name ? gls2.core.ta("boss2") : "momozono" === this.name ? gls2.core.ta("boss3") : "aida" === this.name ? gls2.core.ta("boss4") : "houjou" === this.name && gls2.core.ta("boss5"), j
    }
    40 > this.qa && this.Ja();
    return z
  }, Ca:function() {
    gls2.na.Qf(this.x, this.y, this.aa, this.$d);
    this.remove()
  }, jc:function() {
    return 0 <= this.x + this.width / 2 && 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 && 640 > this.y - this.height / 2
  }, Hl:function() {
    return this.Qb
  }, Ja:L(), Gk:function(b) {
    this.name = b;
    b = gls2.ea.Wj[b];
    this.qa = this.ic = b[0];
    this.score = b[1];
    this.bd = b[2];
    this.erase = b[3];
    this.star = b[4];
    b[5].radius !== i && (this.boundingRadius = b[5].radius);
    b[5].width !== i && (this.boundingWidth = b[5].width);
    b[5].height !== i && (this.boundingHeight = b[5].height);
    b[5].widthLeft !== i && (this.boundingWidthLeft = b[5].widthLeft);
    b[5].widthRight !== i && (this.boundingWidthRight = b[5].widthRight);
    b[5].heightTop !== i && (this.boundingHeightTop = b[5].heightTop);
    b[5].heightBottom !== i && (this.boundingHeightBottom = b[5].heightBottom)
  }, uc:function() {
    this.remove();
    this.aa.Ye.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.na.Qf(this.x + gls2.la.rand(-100, 100), this.y + gls2.la.rand(-40, 40), this.aa, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.na.Db(this.x, this.y, this.aa);
      this.remove()
    }.bind(this))
  }, Qe:function() {
    function b() {
      (0 === c % 23 || 0 === c % 37) && gls2.na.kb(this.x + gls2.la.rand(-100, 100), this.y + gls2.la.rand(-40, 40), this.aa);
      c++
    }
    var c = 0;
    this.on("enterframe", b);
    this.on("enterframe", function() {
      this.x += 3 * Math.random() - 1.5;
      this.y += 3 * Math.random() - 1.5 + 1
    });
    this.tweener.clear().wait(2E3).call(function() {
      this.off("enterframe", b)
    }.bind(this)).wait(500).call(function() {
      gls2.Bf(this.x, this.y, this.aa)
    }.bind(this)).wait(2E3).call(function() {
      this.remove()
    }.bind(this))
  }, tl:function() {
    function b() {
      (0 === c % 23 || 0 === c % 37 || 0 === c % 53) && gls2.na.Db(this.x + gls2.la.rand(-100, 100), this.y + gls2.la.rand(-40, 40), this.aa);
      c++
    }
    var c = 0;
    this.on("enterframe", b);
    var d = this.x, k = this.y, n = 0;
    this.on("enterframe", function() {
      this.x = d + (3 * Math.random() - 1.5);
      this.y = k + (3 * Math.random() - 1.5) + n;
      n += 1
    });
    this.tweener.clear().wait(2E3).call(function() {
      this.off("enterframe", b)
    }.bind(this)).wait(500).call(function() {
      for(var b = 0;8 > b;b++) {
        gls2.Bf(this.x + 80 * Math.cos(2 * Math.PI * b / 8), this.y + 80 * Math.sin(2 * Math.PI * b / 8), this.aa, j)
      }
    }.bind(this)).wait(2E3).call(function() {
      this.remove()
    }.bind(this))
  }});
  gls2.ea.Se = function() {
    for(var b = [].concat(c), f = 0, d = b.length;f < d;f++) {
      b[f].remove()
    }
  };
  var c = gls2.ea.gb = []
})();
gls2.hd = tm.createClass({superClass:gls2.ea, rl:j, ic:0, gg:l, init:function(c, b, f) {
  this.gg = b;
  this.superInit(c, this.gg[0], f);
  this.ic = this.qa;
  this.addEventListener("added", function() {
    this.aa.Nd = this;
    this.aa.Tl();
    this.tweener.wait(1E3).call(function() {
      this.aa.Xe = z
    }.bind(this))
  });
  this.addEventListener("removed", function() {
    this.aa.Nd = l;
    this.aa.jl();
    var b = tm.app.Object2D();
    b.tweener.wait(7E3).call(function() {
      this.aa.Mk()
    }.bind(this));
    b.addChildTo(this.aa.lc)
  })
}, ad:function(c) {
  var b = this.qa;
  if(gls2.ea.prototype.ad.call(this, c)) {
    return this.aa.Xe = j, this.aa.da.Oe = z, gls2.pe(), j
  }
  this.qa <= 0.55 * this.ic && 0.55 * this.ic < b ? (gls2.ba.ye(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.na.kb(this.x, this.y, this.aa), gls2.fa.erase(j, 62500 > gls2.Wb(this, this.da)), this.gg[1].setup(this)) : this.qa <= 0.1 * this.ic && 0.1 * this.ic < b && (gls2.ba.ye(this), this.clearEventListener("completeattack"), this.tweener.clear(), gls2.na.kb(this.x, this.y, this.aa), gls2.fa.erase(j, 62500 > gls2.Wb(this, this.da)), this.gg[2].setup(this), gls2.wa("voJacms"))
}});
(function() {
  gls2.ea.Wj = {kujo:[2, 300, z, z, 1, {radius:24}], kiryu:[3, 400, z, z, 1, {radius:24}], natsuki:[5, 900, j, z, 1, {radius:24}], kise:[50, 15E3, j, z, 1, {radius:24}], yamabuki:[100, 15E3, j, z, 1, {width:140, height:70}], hanasaki:[150, 2E5, j, j, 10, {radius:40}], myodoin:[50, 15E3, j, z, 1, {radius:40}], kenzaki:[200, 3E5, j, j, 10, {width:100, height:40}], minazuki:[300, 3E5, j, j, 10, {width:100, height:40}], tsukikage:[8, 1E3, z, z, 5, {width:100, height:20}], kasugano:[6, 1E3, z, z, 1, {radius:24}], 
  kurokawa:[35, 5E3, z, z, 5, {width:100, height:20}], mimino:[35, 5E3, z, z, 5, {width:100, height:20}], shirabe:[35, 5E3, z, z, 5, {width:100, height:20}], akimoto:[250, 3E5, z, j, 10, {width:200, heightBottom:10, heightTop:60}], yumehara:[300, 5E5, z, j, 20, {width:180, heightBottom:40, heightTop:120}], aono:[230, 3E5, z, j, 10, {width:280, heightBottom:30, heightTop:60}], hino:[20, 1E4, z, z, 1, {width:64, height:64}], hoshizora:[300, 3E5, z, j, 30, {width:128, height:64}], yotsuba:[300, 5E5, 
  z, j, 40, {width:64, height:64}], yotsubaLeaf:[30, 1E5, z, z, 10, {width:64, height:64}], midorikawa:[5, 2E3, z, z, 1, {width:64, height:64}], aoki:[5, 3200, z, z, 1, {width:64, height:64}], madoka:[250, 4E5, z, j, 10, {width:256, height:64}], yukishiro:[750, 8E5, z, j, 20, {width:240, height:80}], misumi:[3E3, 2E6, z, j, 0, {width:240, height:80}], mishou:[1E3, 1E6, z, j, 20, {width:300, height:80}], higashi:[1E3, 12E5, z, j, 20, {width:256, height:128}], momozono:[5700, 35E5, z, j, 0, {width:256, 
  height:128}], hyuga:[4500, 3E6, z, j, 0, {width:240, height:80}], hishikawa:[1900, 2E6, z, j, 20, {radius:130}], aida:[6E3, 4E6, z, j, 0, {width:370, heightBottom:5, heightTop:60}], minamino:[1500, 5E6, j, j, 30, {width:180, heightTop:375, heightBottom:-325}], houjou:[9E3, 5E8, z, j, 0, {width:220, heightBottom:100, heightTop:60}], dory:[150, 2E3, z, j, 5, {radius:24}], rery:[250, 2E3, j, z, 5, {radius:24}], miry:[150, 2E3, z, j, 5, {radius:24}], fary:[200, 2E3, j, z, 5, {radius:24}], sory:[350, 
  2E3, j, z, 5, {radius:24}], lary:[300, 2E3, j, j, 5, {radius:24}], shiry:[250, 2E3, j, j, 5, {radius:24}], dodory:[120, 2E3, j, z, 5, {radius:24}], sakagami:[9E3, 5E9, z, j, 0, {radius:90}], kurumi:[30, 500, z, z, 1, {width:24, height:48}]};
  gls2.ea.ja = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "kujo");
    this.ca = c("tex1", 64, 64)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(b) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 0 : 1).draw(b)
  }});
  gls2.ea.Ea = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "kiryu");
    this.ca = c("tex1", 64, 64)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    this.scaleX = this.x < this.da.x ? -1 : 1
  }, draw:function(b) {
    this.ca.setFrameIndex(2 > this.frame % 4 ? 8 : 9).draw(b)
  }});
  gls2.ea.oa = tm.createClass({superClass:gls2.ea, ah:l, bh:l, init:function(b, f) {
    this.superInit(b, f, "natsuki");
    this.ah = c("tex_tank1", 64, 64);
    this.bh = c("tex_tank1", 64, 64);
    this.Kd = this.Kd || 0;
    this.Kc = this.Kc || 0
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    for(b = this.Kd;0 > b;) {
      b += 2 * Math.PI
    }
    for(;2 * Math.PI <= b;) {
      b -= 2 * Math.PI
    }
    for(var c = this.Kc;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.ah.setFrameIndex(~~(16 * b / (2 * Math.PI)), 64, 64);
    this.bh.setFrameIndex(~~(16 * c / (2 * Math.PI)) + 16, 64, 64)
  }, draw:function(b) {
    this.ah.draw(b);
    this.bh.draw(b)
  }, Ca:function() {
    gls2.na.Vk(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.uf = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "yamabuki");
    this.ca = c("tex2", 256, 128).setFrameIndex(7)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.dc = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "tsukikage");
    this.ca = c("tex1", 64, 64).setFrameIndex(23)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.mb = tm.createClass({superClass:gls2.ea, ca:l, mh:l, init:function(b, f) {
    this.superInit(b, f, "kasugano");
    this.ca = c("tex5", 64, 64).setFrameIndex(1);
    this.hb = gls2.Ma(80, 1, 0.8);
    this.mh = tm.geom.Vector2()
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && 0 < this.qa && this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa);
    this.rotation = tm.geom.Vector2.sub(this.position, this.mh).toAngle() * gls2.la.RAD_TO_DEG - 90;
    this.mh.set(this.x, this.y)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.jd = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "kurokawa");
    this.ca = c("tex1", 128, 128).setFrameIndex(1)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.Ec = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "mimino");
    this.ca = c("tex4", 128, 128).setFrameIndex(10)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.wb = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "shirabe");
    this.ca = c("tex5", 128, 128).setFrameIndex(4)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.ec = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "akimoto");
    this.ca = c("tex1", 256, 128).setFrameIndex(1)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc()
  }});
  gls2.ea.Ie = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "aono");
    this.ca = c("tex1", 256, 128);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 128;
    this.setScale(1.2);
    this.ib = gls2.Ma(70, 1, 0.97)
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && (this.ib.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.aa), this.ib.clone().setScale(Math.randf(0.9, 1.5)).setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 2
    }).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc()
  }});
  gls2.ea.fe = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "yumehara");
    this.ca = c("tex1", 256, 256);
    this.ca.srcRect.x = 128;
    this.ca.srcRect.y = 256;
    this.ca.srcRect.width = 256;
    this.ca.srcRect.height = 256
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc()
  }});
  gls2.ea.Sa = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "kise");
    this.ca = c("tex1", 64, 128).setFrameIndex(14)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.Ef = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "hanasaki");
    this.ca = c("tex1", 128, 128).setFrameIndex(12)
  }, Ja:L(), Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.xg = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "myodoin");
    this.ca = c("tex5", 64, 128).setFrameIndex(0)
  }, Ja:L(), Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Cc = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "kenzaki");
    this.ca = c("tex1", 128, 256);
    this.ca.srcRect.x = 0;
    this.ca.srcRect.y = 128;
    this.ca.srcRect.width = 128;
    this.ca.srcRect.height = 256
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.pg = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "minazuki");
    this.ca = c("tex5", 128, 256);
    this.ca.setFrameIndex(1);
    this.setScale(1.2)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }});
  gls2.ea.Ya = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "hino");
    this.ca = c("tex4", 64, 32).setFrameIndex(0);
    this.setScale(1.5)
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.sa = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "midorikawa");
    this.ca = c("tex4", 64, 64).setFrameIndex(8)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b)
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Kb = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "aoki");
    this.ca = c("tex4", 64, 64).setFrameIndex(1)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b)
  }, draw:function(b) {
    this.ca.draw(b)
  }, jf:function() {
    240 < this.x && (this.speed *= -1, this.scaleX = -1);
    this.Zl = this.y + 192;
    this.xd = this.y
  }});
  gls2.ea.Yc = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "madoka");
    this.ca = c("tex4", 256, 128).setFrameIndex(3)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b)
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc()
  }});
  gls2.ea.Td = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "hoshizora");
    this.ca = c("tex4", 256, 128).setFrameIndex(1);
    this.boundingWidth = 384;
    this.setScale(1.5)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    if(this.$a === z && (0 <= this.x - this.boundingWidthLeft || 480 > this.x + this.boundingWidthRight || 0 <= this.y - this.boundingHeightTop || 640 > this.y + this.boundingHeightBottom)) {
      this.$a = j, this.dispatchEvent(tm.event.Event("enter"))
    }
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc()
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, jf:function() {
    this.tweener.move(240, this.y, 7E3, "easeInOutQuad").moveBy(0, 64, 5E3, "easeInOutQuad");
    240 < this.x ? (this.scaleX = -1.5, this.tweener.moveBy(-496, 0, 8E3, "easeInOutQuad")) : this.tweener.moveBy(496, 0, 8E3, "easeInOutQuad")
  }, jc:function() {
    return 0 <= this.x + this.width / 2 || 480 > this.x - this.width / 2 && 0 <= this.y + this.height / 2 || 640 > this.y - this.height / 2
  }, uc:function() {
    this.remove();
    this.aa.Ye.addChild(this);
    this.addEventListener("enterframe", function() {
      0.2 > Math.random() && gls2.na.Qf(this.x + gls2.la.rand(-100, 100), this.y + gls2.la.rand(-40, 40), this.aa, {x:0, y:-3})
    });
    this.tweener.clear().to({altitude:4, y:this.y + 200}, 2E3).call(function() {
      gls2.na.Db(this.x, this.y, this.aa);
      gls2.na.Db(this.x + 64, this.y, this.aa);
      gls2.na.Db(this.x - 64, this.y, this.aa);
      this.remove()
    }.bind(this))
  }});
  gls2.ea.lg = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "yotsuba");
    this.ca = c("tex4", 128, 128).setFrameIndex(1);
    this.boundingHeight = this.boundingWidth = 192;
    this.setScale(1.5)
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc();
    this.aa.sd || gls2.wi(this.x, this.y, this.da).addChildTo(this.aa);
    for(var b = 0;4 > b;b++) {
      this.cd[b] && this.cd[b].Ca()
    }
    delete this.cd;
    this.remove()
  }, jf:function() {
    this.cd = [];
    for(var b = 0;4 > b;b++) {
      var c = 0.5 * Math.PI * b;
      this.cd[b] = this.va.Na({hard:gls2.ea.Cd, soft:gls2.ba.Cd[b], x:this.x + 96 * Math.sin(c), y:this.y + 96 * Math.cos(c)});
      this.cd[b].dir = c;
      this.cd[b].rh = this;
      this.cd[b].vl = b;
      this.cd[b].distance = 96
    }
    gls2.ea.prototype.jf.call(this);
    return this
  }});
  gls2.ea.Cd = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "yotsubaLeaf");
    this.ca = c("yotsubaLeaf", 64, 64).setFrameIndex(0);
    this.boundingHeight = this.boundingWidth = 96;
    this.setScale(1.5)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b)
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.rh.cd[this.vl] = l;
    this.remove()
  }});
  gls2.ea.Fe = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "kurumi");
    this.ca = c("tex3", 64, 128);
    this.ca.setFrameIndex(8)
  }, Ja:L(), draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    gls2.ri(this.x, this.y, this.da).addChildTo(this.aa);
    this.remove()
  }});
  gls2.ea.vg = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "yukishiro");
    this.ca = c("tex2", 256, 128).setFrameIndex(0);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Jg = tm.createClass({superClass:gls2.hd, ca:l, init:function(b, f) {
    this.superInit(b, f, "misumi");
    this.ca = c("tex2", 256, 128).setFrameIndex(1);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, draw:function(b) {
    this.ca.draw(b)
  }, Ca:function() {
    this.Qe();
    gls2.core.fps = FPS
  }});
  gls2.ea.Fg = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "mishou");
    this.ca = c("tex2", 256, 128).setFrameIndex(2);
    this.setScale(1.2);
    this.ib = gls2.Ma(80, 1, 0.9);
    this.hb = gls2.Ma(256, 1, 0.9)
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && (this.ib.clone().setPosition(this.x + 120, this.y - 30).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 120, this.y + 25).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.aa), this.hb.clone().setPosition(this.x - 30, this.y).on("enterframe", function() {
      this.x += 5
    }).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.jk = tm.createClass({superClass:gls2.hd, init:function(b, f) {
    this.superInit(b, f, "hyuga");
    this.ca = c("tex2", 256, 128).setFrameIndex(3);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.Qe();
    gls2.core.fps = FPS
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Tg = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "higashi");
    this.ca = c("tex4", 256, 128).setFrameIndex(2);
    this.blendMode = "lighter";
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.fk = tm.createClass({superClass:gls2.hd, init:function(b, f) {
    this.superInit(b, f, "momozono");
    this.ca = c("tex4", 256, 128).setFrameIndex(4);
    this.setScale(1.5)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.Qe();
    gls2.core.fps = FPS
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Pg = tm.createClass({superClass:gls2.ea, init:function(b, f) {
    this.superInit(b, f, "hishikawa");
    this.ca = c("tex2", 256, 256).setFrameIndex(2);
    this.ca.setScale(2);
    this.ib = gls2.Ma(60, 1, 0.95);
    this.hb = gls2.Ma(500, 1, 0.8)
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && 0 < this.qa && (this.ib.clone().setPosition(this.x - 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 45, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.Db(this.x, this.y, this.aa);
    this.uc()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.gk = tm.createClass({superClass:gls2.hd, init:function(b, f) {
    this.superInit(b, f, "aida");
    this.ca = c("tex2", 256, 128).setFrameIndex(5);
    this.setScale(1.5);
    this.ib = gls2.Ma(60, 1, 0.95);
    this.hb = gls2.Ma(500, 1, 0.8)
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && 0 < this.qa && (this.ib.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.Qe();
    gls2.core.fps = FPS
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.ek = tm.createClass({superClass:gls2.ea, Re:l, Vi:[{x:-60, y:-426}, {x:60, y:-426}, {x:-72, y:-72}, {x:72, y:-72}, {x:-72, y:-348}, {x:72, y:-348}, {x:-48, y:-264}, {x:48, y:-264}, {x:-48, y:108}, {x:48, y:108}, {x:-78, y:-168}, {x:78, y:-168}, {x:-96, y:-228}, {x:96, y:-228}, {x:0, y:-336}, {x:0, y:-168}, {x:-120, y:144}, {x:120, y:144}, {x:-60, y:168}, {x:60, y:168}], init:function(b, f) {
    this.superInit(b, f, "minamino");
    this.altitude = 10;
    this.eb = j;
    this.ca = c("tex5", 256, 512).setFrameIndex(1);
    this.setScale(2.16);
    this.Re = [];
    this.on("launch", function() {
      Array.prototype.push.apply(this.Re, [this.va.Na({hard:gls2.ea.Vc, soft:gls2.ba.Vc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Vc, soft:gls2.ba.Vc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Vc, soft:gls2.ba.Vc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Vc, soft:gls2.ba.Vc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Sb, soft:gls2.ba.Sb(), x:0, y:0}), this.va.Na({hard:gls2.ea.Sb, soft:gls2.ba.Sb(), x:0, y:0}), this.va.Na({hard:gls2.ea.Sb, soft:gls2.ba.Sb(), x:0, y:0}), this.va.Na({hard:gls2.ea.Sb, soft:gls2.ba.Sb(), 
      x:0, y:0}), this.va.Na({hard:gls2.ea.Sb, soft:gls2.ba.Sb(), x:0, y:0}), this.va.Na({hard:gls2.ea.Sb, soft:gls2.ba.Sb(), x:0, y:0}), this.va.Na({hard:gls2.ea.Wc, soft:gls2.ba.Wc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Wc, soft:gls2.ba.Wc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Wc, soft:gls2.ba.Wc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Wc, soft:gls2.ba.Wc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Bg, soft:gls2.ba.Bg(), x:0, y:0}), this.va.Na({hard:gls2.ea.Ug, soft:gls2.ba.Ug(), x:0, y:0}), this.va.Na({hard:gls2.ea.Sc, 
      soft:gls2.ba.Sc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Sc, soft:gls2.ba.Sc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Sc, soft:gls2.ba.Sc(), x:0, y:0}), this.va.Na({hard:gls2.ea.Sc, soft:gls2.ba.Sc(), x:0, y:0})])
    })
  }, update:function() {
    this.Re.forEach(function(b, c) {
      b.setPosition(this.x + this.Vi[c].x, this.y + this.Vi[c].y)
    }.bind(this))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    function b() {
      (0 === c % 23 || 0 === c % 37) && gls2.na.kb(this.x + gls2.la.rand(-200, 200), this.y + gls2.la.rand(-300, 300), this.aa);
      c++
    }
    this.dispatchEvent(tm.event.Event("enemyconsumed"));
    this.Re.forEach(function(b) {
      b.parent && b.remove()
    }.bind(this));
    this.tweener.clear();
    this.Lj.clear();
    this.Mj.clear();
    var c = 0;
    this.on("enterframe", b);
    this.on("enterframe", function() {
      this.x += 3 * Math.random() - 1.5;
      this.y += 1
    });
    this.tweener.clear().wait(4E3).call(function() {
      this.off("enterframe", b)
    }.bind(this)).call(function() {
      gls2.Bf(this.x, this.y - 300, this.aa.Ye);
      gls2.Bf(this.x, this.y + 0, this.aa.Ye)
    }.bind(this)).wait(2E3).call(function() {
      this.remove()
    }.bind(this))
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.ee = tm.createClass({superClass:gls2.ea, ca:l, Gj:0, init:function(b, f, d, k, n) {
    this.superInit(b, f, d);
    this.ca = c(k, 64, 64);
    this.Gj = n
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    for(var c = tm.geom.Vector2.sub(this.aa.da.position, this.position).toAngle() + 2 * Math.PI / 32;0 > c;) {
      c += 2 * Math.PI
    }
    for(;2 * Math.PI <= c;) {
      c -= 2 * Math.PI
    }
    this.ca.setFrameIndex(16 * this.Gj + Math.floor(16 * (c / (2 * Math.PI))))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    gls2.na.kb(this.x, this.y, this.aa);
    this.remove()
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Vc = tm.createClass({superClass:gls2.ea.ee, init:function(b, c) {
    this.superInit(b, c, "rery", "kanade-cannon", 0);
    this.setScale(1.92)
  }});
  gls2.ea.Sb = tm.createClass({superClass:gls2.ea.ee, init:function(b, c) {
    this.superInit(b, c, "rery", "kanade-cannon", 1);
    this.setScale(1.2)
  }});
  gls2.ea.Wc = tm.createClass({superClass:gls2.ea.ee, init:function(b, c) {
    this.superInit(b, c, "sory", "yotsubaLeaf", 0);
    this.setScale(1.2)
  }});
  gls2.ea.Bg = tm.createClass({superClass:gls2.ea.ee, init:function(b, c) {
    this.superInit(b, c, "lary", "yotsubaLeaf", 0);
    this.setScale(1.44)
  }});
  gls2.ea.Ug = tm.createClass({superClass:gls2.ea.ee, init:function(b, c) {
    this.superInit(b, c, "shiry", "kanade-cannon", 1);
    this.setScale(1.68)
  }});
  gls2.ea.Sc = tm.createClass({superClass:gls2.ea.ee, init:function(b, c) {
    this.superInit(b, c, "dodory", "tex_tank1", 1);
    this.setScale(1.44)
  }});
  gls2.ea.dk = tm.createClass({superClass:gls2.hd, sh:l, Jh:l, init:function(b, f) {
    this.superInit(b, f, "houjou");
    this.ca = c("tex5", 256, 256).setFrameIndex(2);
    this.setScale(1.5);
    this.ib = gls2.Ma(60, 1, 0.95);
    this.hb = gls2.Ma(500, 1, 0.8)
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    0 === b.frame % 2 && 0 < this.qa && (this.ib.clone().setPosition(this.x - 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x - 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 35, this.y + 40).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.ib.clone().setPosition(this.x + 60, this.y + 30).on("enterframe", function() {
      this.y += 10
    }).addChildTo(this.aa), this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa))
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.tl();
    gls2.core.fps = FPS;
    this.aa.yd = this.aa.qf().canvas.toDataURL("image/png")
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Ee = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "dory");
    this.ca = c("tex4", 64, 64).setFrameIndex(48);
    this.setScale(1.5);
    this.hb = gls2.Ma(80, 1, 0.8)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    this.ca.setFrameIndex(48 + Math.floor(b.frame / 5) % 3);
    0 === b.frame % 2 && 0 < this.qa && this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa)
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.He = tm.createClass({superClass:gls2.ea, ca:l, init:function(b, f) {
    this.superInit(b, f, "miry");
    this.ca = c("tex4", 64, 64).setFrameIndex(56);
    this.setScale(1.5);
    this.hb = gls2.Ma(80, 1, 0.8)
  }, update:function(b) {
    gls2.ea.prototype.update.call(this, b);
    this.ca.setFrameIndex(56 + Math.floor(b.frame / 5) % 3);
    0 === b.frame % 2 && 0 < this.qa && this.hb.clone().setPosition(this.x, this.y).addChildTo(this.aa)
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  gls2.ea.Tj = tm.createClass({superClass:gls2.hd, nm:l, jm:l, pm:l, Pe:z, init:function(b, f) {
    this.superInit(b, f, "sakagami");
    var d = this;
    this.ca = c("exboss", 128, 128);
    this.hb = gls2.Ma(300, 1, 0.9, tm.graphics.Canvas().resize(32, 32).setFillStyle(tm.graphics.RadialGradient(16, 16, 0, 16, 16, 16).addColorStopList([{offset:0, color:"rgba(255,  0,  0,0.1)"}, {offset:1, color:"rgba(  0,  0,  0,0.0)"}]).toStyle()).fillRect(0, 0, 32, 32).element);
    this.Rb = tm.display.CanvasElement(160, 160).addChildTo(this);
    this.Rb.blendMode = "lighter";
    this.Rb.rotation = -90;
    this.Rb.strokeStyle = "rgba(180,180,255,0.4)";
    this.Rb.alpha = 0;
    this.Rb.draw = function(b) {
      b.lineCap = "round";
      var c = d.qa / (0.1 * d.ic);
      b.strokeStyle = "rgba(50,50,255,0.4)";
      b.lineWidth = "15";
      b.strokeArc(0, 0, 80, 0, 2 * c * Math.PI, z);
      b.strokeStyle = "rgba(100,100,255,0.4)";
      b.lineWidth = "8";
      b.strokeArc(0, 0, 80, 0, 2 * c * Math.PI, z);
      b.strokeStyle = "rgba(180,180,255,0.4)";
      b.lineWidth = "4";
      b.strokeArc(0, 0, 80, 0, 2 * c * Math.PI, z)
    };
    this.se = tm.display.CircleShape(160, 160, {fillStyle:tm.graphics.RadialGradient(80, 80, 0, 80, 80, 70).addColorStopList([{offset:0, color:"rgba(0,0,50,0.0)"}, {offset:0.9, color:"rgba(0,0,50,0.8)"}, {offset:1, color:"rgba(0,0,50,0.0)"}]).toStyle(), strokeStyle:"rgba(0,0,0,0)"}).addChildTo(this);
    this.se.alpha = 0
  }, update:function(b) {
    gls2.ea.prototype.update.apply(this, arguments);
    var c = this.Pe;
    (this.Pe = this.aa.sd || 0 < this.aa.te || this.da.eb) ? !c && this.qa > 0.1 * this.ic && (this.Rb.tweener.clear().fadeIn(100), this.se.tweener.clear().fadeIn(100)) : c && this.qa > 0.1 * this.ic && (this.Rb.tweener.clear().fadeOut(1E3), this.se.tweener.clear().fadeOut(1E3));
    this.qa < 0.1 * this.ic && (this.Rb.alpha = 1, this.se.alpha = 1);
    var d = tm.geom.Vector2(0, 0).setRandom(l, l, 6);
    this.hb.clone().on("enterframe", function() {
      this.position.add(d)
    }).setPosition(this.x, this.y).addChildTo(this.aa)
  }, Ja:function() {
    this.on("enterframe", function(b) {
      0 === b.app.frame % 13 ? this.ca.Pa() : 5 === b.app.frame % 13 && this.ca.Oa()
    })
  }, Ca:function() {
    this.Qe();
    gls2.core.fps = FPS;
    this.aa.yd = this.aa.qf().canvas.toDataURL("image/png")
  }, draw:function(b) {
    this.ca.draw(b)
  }});
  var c = tm.createClass({superClass:tm.display.Sprite, ki:l, init:function(b, c, d) {
    this.superInit(b, c, d);
    "string" === typeof b && (this.ki = b)
  }, draw:function(b) {
    var c = this.srcRect;
    b.context.drawImage(this._image.element, c.x, c.y, c.width, c.height, -this.width * this.origin.x, -this.height * this.origin.y, this.width, this.height)
  }, Pa:function() {
    var b = this.srcRect.x, c = this.srcRect.y, d = this.srcRect.width, k = this.srcRect.height;
    this.image = this.ki + "Red";
    this.srcRect.x = b;
    this.srcRect.y = c;
    this.srcRect.width = d;
    this.srcRect.height = k
  }, Oa:function() {
    var b = this.srcRect.x, c = this.srcRect.y, d = this.srcRect.width, k = this.srcRect.height;
    this.image = this.ki;
    this.srcRect.x = b;
    this.srcRect.y = c;
    this.srcRect.width = d;
    this.srcRect.height = k
  }})
})();
(function() {
  gls2.ba = tm.createClass({setup:function(b) {
    b.on("destroy", function() {
      gls2.ba.ye(this)
    })
  }});
  gls2.ba.ua = function(b, c) {
    if(gls2.fa[c] === i) {
      console.warn("Danmaku[" + c + "] is undefined!")
    }else {
      var f = gls2.fa[c].Ve();
      b.on("enterframe", f);
      b.on("completeattack", function() {
        f.stop = j
      })
    }
  };
  gls2.ba.ye = function(b) {
    if(b = [].concat(b._listeners.enterframe)) {
      for(var c = 0, f = b.length;c < f;c++) {
        b[c] && b[c].Yf && (b[c].stop = j)
      }
    }
  };
  gls2.ba.Pl = function(b) {
    if(b = [].concat(b._listeners.enterframe)) {
      for(var c = 0, f = b.length;c < f;c++) {
        b[c] && b[c].Yf && (b[c].stop = z)
      }
    }
  };
  gls2.ba.ja = tm.createClass({superClass:gls2.ba, pattern:l, init:function(b, c) {
    this.superInit();
    this.pattern = b;
    this.$l = c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    var c = this.pattern, f = this.$l;
    b.on("launch", function() {
      var b = gls2.Ba.randf(640 * (f - 0.1), 640 * (f + 0.1));
      this.tweener.clear().wait(gls2.Ba.rand(10, 500)).move(this.x, b, 5 * b, "easeOutQuad").call(function() {
        gls2.ba.ua(this, c)
      }.bind(this))
    });
    b.on("completeattack", function() {
      this.tweener.clear().wait(1E3).moveBy(0, -640, 2E3, "easeInQuad").call(function() {
        this.remove()
      }.bind(this))
    })
  }});
  gls2.ba.Uc = gls2.ba.ja("basic0-0", 0.2);
  gls2.ba.zb = gls2.ba.ja("basic0-0", 0.4);
  gls2.ba.de = gls2.ba.ja("basic0-0", 0.6);
  gls2.ba.yb = gls2.ba.ja("basic1-2", 0.2);
  gls2.ba.Tc = gls2.ba.ja("basic1-2", 0.4);
  gls2.ba.ce = gls2.ba.ja("basic1-2", 0.6);
  gls2.ba.Ea = tm.createClass({superClass:gls2.ba, qb:l, init:function(b, c) {
    this.superInit();
    this.qb = b;
    this.delay = c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.angle = 0.5 * Math.PI;
    b.qb = this.qb;
    b.tweener.wait(this.delay === i ? gls2.la.rand(0, 1E3) : this.delay).call(function() {
      this.speed = 6;
      gls2.ba.ua(this, this.qb);
      this.on("enterframe", function() {
        this.y < this.da.y && this.$a && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.la.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        !this.jc() && this.$a && this.remove();
        if(22500 > gls2.Wb(this, this.da) || this.y > this.da.y + 150) {
          this.Qb = z
        }
      })
    }.bind(b))
  }});
  gls2.ba.Ab = gls2.ba.Ea("basic1-0");
  gls2.ba.Ge = gls2.ba.Ea("donothing");
  gls2.ba.Ka = function(b) {
    return gls2.ba.Ea("basic1-3", b * (2 * Math.random() + 1))
  };
  var c = tm.createClass({superClass:gls2.ba, init:function(b, c, f) {
    this.superInit();
    this.ql = b;
    this.pl = c;
    this.ke = f
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.speed = this.ql;
    b.Kd = this.pl;
    this.ke && (b.ke = [].concat(this.ke));
    b.Kc = 0;
    b.on("enter", function() {
      gls2.ba.ua(this, "basic2-0")
    });
    b.on("enterframe", function() {
      this.x += Math.cos(this.Kd) * this.speed;
      this.y += Math.sin(this.Kd) * this.speed;
      this.$a && !this.jc() && this.remove();
      for(this.Kc = Math.atan2(this.da.y - this.y, this.da.x - this.x);0 > this.Kc;) {
        this.Kc += 2 * Math.PI
      }
      for(;2 * Math.PI <= this.Kc;) {
        this.Kc -= 2 * Math.PI
      }
      this.Qb = this.y < this.da.y && 4E4 < gls2.Wb(this, this.da);
      if(this.ke) {
        for(var b = 0;b < this.ke.length;b++) {
          var c = this.ke[b];
          c.frame === this.frame && this.tweener.to({Kd:c.dir !== i ? c.dir : this.Kd, speed:c.speed !== i ? c.speed : this.speed}, 500)
        }
      }
    })
  }});
  gls2.ba.Gc = c(1, 0.25 * Math.PI);
  gls2.ba.dm = c(1, -1.75 * Math.PI);
  gls2.ba.Ke = c(1, Math.PI, [{frame:200, dir:1.5 * Math.PI, speed:1}]);
  gls2.ba.ya = c(1.6, 0.5 * Math.PI);
  gls2.ba.Hc = c(1.6, -0.5 * Math.PI);
  gls2.ba.pi = tm.createClass({superClass:gls2.ba, Ra:l, init:function(b) {
    this.superInit();
    this.Ra = b
  }, setup:function(b) {
    gls2.ba.ua(b, this.Ra);
    b.tweener.clear().to({x:240}, 8E3, "easeInOutQuad")
  }});
  gls2.ba.si = gls2.ba.pi("bukky-4-0");
  gls2.ba.ti = gls2.ba.pi("bukky-5-0");
  c = tm.createClass({superClass:gls2.ba, Ra:l, Yi:z, init:function(b, c) {
    this.superInit();
    this.Ra = b;
    this.Yi = !!c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.speed = 1;
    b.dir = Math.PI;
    b.Ra = this.Ra;
    b.on("enter", function() {
      gls2.ba.ua(this, this.Ra)
    });
    b.on("enterframe", function() {
      this.$a && !this.jc() && this.remove()
    });
    if(!this.Yi) {
      b.on("enterframe", function() {
        this.Qb = this.y < this.da.y && 4E4 < gls2.Wb(this, this.da)
      })
    }
  }});
  gls2.ba.bc = c("basic3-0", z);
  gls2.ba.cc = c("basic3-1", z);
  gls2.ba.Dc = c("cannon2-0", j);
  gls2.ba.og = c("cannon2-3", j);
  gls2.ba.wf = c("cannon3-0", j);
  gls2.ba.qg = c("cannon5-0", j);
  var b = tm.createClass({superClass:gls2.ba, velocityY:0, Ra:l, delay:0, init:function(b, c, f) {
    this.superInit();
    this.velocityY = b;
    this.Ra = c;
    this.delay = f || 0
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.velocityY = this.velocityY;
    b.ha = [this.Ra];
    b.mf = z;
    b.tweener.clear().wait(this.delay).moveBy(0, 320, 800, "easeOutQuad").call(function() {
      gls2.ba.ua(this, this.ha[0]);
      this.mf = j
    }.bind(b));
    b.on("enterframe", function() {
      this.mf && (this.y += this.velocityY, 384 < this.y && gls2.ba.ye(this), this.$a && !this.jc() && this.remove(), this.Qb = this.y < this.da.y)
    })
  }});
  gls2.ba.Fd = b(0.5, "kurokawa-1");
  gls2.ba.hk = b(0.5, "kurokawa-4");
  gls2.ba.Fc = function(c) {
    return b(0.5, "milk-5", c)
  };
  gls2.ba.xb = tm.createClass({superClass:gls2.ba, Nj:0, Pj:0, Oj:0, Qj:0, init:function(b, c, f, s) {
    this.superInit();
    this.Nj = b;
    this.Pj = c;
    this.Oj = f;
    this.Qj = s
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.on("enterframe", function() {
      this.rotation = tm.geom.Vector2.sub(this.aa.da.position, this.position).toAngle() * gls2.la.RAD_TO_DEG - 90
    });
    var c = this;
    b.tweener.clear().to({x:c.Nj, y:c.Pj}, 1400, "easeInOutQuad").call(function() {
      gls2.ba.ua(this, "ako-5")
    }.bind(b));
    b.one("completeattack", function() {
      this.tweener.clear().to({x:c.Oj, y:c.Qj}, 900, "easeInOutQuad").call(function() {
        gls2.ba.ua(this, "ako-5")
      }.bind(this));
      this.one("completeattack", function() {
        this.tweener.clear().to({y:832}, 1900, "easeInQuad")
      })
    })
  }});
  gls2.ba.Gd = tm.createClass({superClass:gls2.ba, delay:0, init:function(b) {
    this.superInit();
    this.delay = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.tweener.wait(this.delay).call(function() {
      gls2.ba.ua(this, "yuri-4");
      this.timeline.by({x:-480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(b)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(b))
  }});
  gls2.ba.Le = tm.createClass({superClass:gls2.ba, delay:0, init:function(b) {
    this.superInit();
    this.delay = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.tweener.wait(this.delay).call(function() {
      gls2.ba.ua(this, "yuri-4");
      this.timeline.by({x:480}, 2E3, 0).by({y:-192}, 2E3, 0, "easeInOutQuad")
    }.bind(b)).wait(2500).by({y:640}, 4E3, "easeInQuad").call(function() {
      this.remove()
    }.bind(b))
  }});
  gls2.ba.mb = tm.createClass({superClass:gls2.ba, tj:0, direction:1, delay:0, init:function(b, c, f) {
    this.superInit();
    this.tj = b;
    this.direction = c;
    this.delay = f
  }, setup:function(b) {
    function c(b) {
      return f ? b : 1 - b
    }
    gls2.ba.prototype.setup.call(this, b);
    tm.app.Tweener(b).wait(this.delay).call(function() {
      gls2.ba.ua(this, "basic1-3")
    }.bind(b));
    var f = 1 == this.direction;
    switch(this.tj) {
      case 0:
        tm.app.Tweener(b).wait(this.delay).to({x:480 * c(0.8)}, 1600, "easeOutQuart");
        tm.app.Tweener(b).wait(this.delay).to({y:832}, 2E3, "easeInQuad");
        break;
      case 1:
        tm.app.Tweener(b).wait(this.delay).to({x:480 * c(0.2)}, 1040, "easeInOutQuad").wait(700).to({x:480 * c(0.4)}, 800, "easeInOutQuad");
        tm.app.Tweener(b).wait(this.delay).to({y:192}, 1840, "easeInOutQuad").to({y:832}, 1840, "easeInQuad");
        break;
      case 2:
        tm.app.Tweener(b).wait(this.delay).to({x:480 * c(0.2)}, 1040, "easeInOutQuad").wait(560).to({x:480 * c(0.4)}, 1360, "easeInOutQuad").to({x:480 * c(1.4)}, 1600, "easeInOutQuad");
        tm.app.Tweener(b).wait(this.delay).to({y:192}, 1840, "easeInOutQuad").to({y:512}, 1760, "easeInOutQuad");
        break;
      case 3:
        tm.app.Tweener(b).wait(this.delay).to({x:480 * c(0.2)}, 1040, "easeInOutQuad").wait(560).to({x:480 * c(0.4)}, 1360, "easeInOutQuad").to({x:480 * c(1.4)}, 1600, "easeInOutQuad"), tm.app.Tweener(b).wait(this.delay).to({y:448}, 1840, "easeInOutQuad").to({y:128}, 1760, "easeInOutQuad")
    }
  }});
  c = tm.createClass({superClass:gls2.ba, velocityY:0, Ra:l, init:function(b, c) {
    this.superInit();
    this.velocityY = b;
    this.Ra = c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.velocityY = this.velocityY;
    b.ha = [this.Ra];
    b.tweener.clear().call(function() {
      gls2.ba.ua(this, this.ha[0]);
      gls2.na.fl(this.x, this.y, this.aa)
    }.bind(b));
    b.on("enterframe", function() {
      this.y += this.velocityY;
      this.$a && !this.jc() && this.remove();
      this.Qb = this.y < this.da.y
    })
  }});
  gls2.ba.Ya = c(0.5, "akane");
  gls2.ba.sa = tm.createClass({superClass:gls2.ba, qb:l, init:function(b, c) {
    this.superInit();
    this.qb = "nao-" + c;
    this.speed = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.angle = 0.5 * Math.PI;
    b.qb = this.qb;
    b.speed = this.speed;
    b.tweener.wait(gls2.Ba.rand(0, 1E3)).call(function() {
      gls2.ba.ua(this, this.qb);
      var b = 180 / Math.PI;
      this.on("enterframe", function() {
        this.y < this.da.y && this.$a && (this.angle += Math.atan2(this.da.y - this.y, this.da.x - this.x) < this.angle ? -0.02 : 0.02, this.angle = gls2.la.clamp(this.angle, 0.5, Math.PI - 0.5));
        this.x += Math.cos(this.angle) * this.speed;
        this.y += Math.sin(this.angle) * this.speed;
        this.rotation = this.angle * b - 90;
        !this.jc() && this.$a && this.remove();
        if(22500 > gls2.Wb(this, this.da) || this.y > this.da.y + 150) {
          this.Qb = z
        }
      })
    }.bind(b))
  }});
  gls2.ba.Fb = gls2.ba.sa(5, 1);
  gls2.ba.Gb = gls2.ba.sa(8, 1);
  gls2.ba.Hb = gls2.ba.sa(14, 1);
  gls2.ba.Kb = tm.createClass({superClass:gls2.ba, qb:l, init:function(b) {
    this.superInit();
    this.qb = "reika";
    this.speed = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.angle = 0.5 * Math.PI;
    b.qb = this.qb;
    b.speed = this.speed;
    b.tweener.wait(gls2.Ba.rand(0, 1E3)).call(function() {
      gls2.ba.ua(this, this.qb);
      this.yc = 0;
      this.on("enterframe", function() {
        this.y < this.Zl && (this.xd += 1);
        this.x += this.speed;
        this.y = this.xd + 8 * Math.sin(this.yc);
        this.yc += 0.06
      })
    }.bind(b))
  }});
  gls2.ba.nc = gls2.ba.Kb(1);
  gls2.ba.zm = gls2.ba.Kb(2);
  gls2.ba.Yc = tm.createClass({superClass:gls2.ba, velocityY:0, Ra:l, delay:0, init:function() {
    this.superInit();
    this.velocityY = 0.5;
    this.Ra = "aguri";
    this.delay = 0
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.velocityY = this.velocityY;
    b.ha = [this.Ra];
    b.mf = z;
    b.tweener.clear().wait(this.delay).moveBy(0, 192, 800, "easeOutQuad").call(function() {
      gls2.ba.ua(this, this.ha[0]);
      this.mf = j
    }.bind(b));
    b.on("enterframe", function() {
      this.mf && (this.y += this.velocityY, 384 < this.y && gls2.ba.ye(this), this.$a && !this.jc() && this.remove(), this.Qb = this.y < this.da.y)
    })
  }});
  gls2.ba.Yc = gls2.ba.Yc();
  gls2.ba.Td = tm.createClass({superClass:gls2.ba, velocityX:0, Ra:l, init:function(b) {
    this.superInit();
    this.velocityX = b;
    this.Ra = "miyuki"
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [this.Ra];
    b.Bm = b.y;
    b.tweener.clear().call(function() {
      gls2.ba.ua(this, this.ha[0])
    }.bind(b));
    b.on("enterframe", function() {
      this.$a && !this.jc() && this.remove();
      this.Qb = this.y < this.da.y
    })
  }});
  gls2.ba.Td = gls2.ba.Td(1);
  c = tm.createClass({superClass:gls2.ba, velocityX:0, Ra:l, init:function() {
    this.superInit();
    this.Ra = "alice"
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.velocityY = 0.3;
    b.ha = [this.Ra];
    b.tweener.clear().call(function() {
      gls2.ba.ua(this, this.ha[0])
    }.bind(b));
    b.on("enterframe", function() {
      this.y += this.velocityY;
      this.$a && !this.jc() && this.remove();
      this.Qb = this.y < this.da.y
    })
  }});
  gls2.ba.lg = c();
  c = tm.createClass({superClass:gls2.ba, Ra:l, init:function(b) {
    this.superInit();
    this.Ra = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [this.Ra];
    b.tweener.clear().call(function() {
      gls2.ba.ua(this, this.ha[0])
    }.bind(b));
    b.on("enterframe", function() {
      var b = this.rh.x, c = this.rh.y;
      this.dir += 0.01;
      this.x = b + Math.sin(this.dir) * this.distance;
      this.y = c + Math.cos(this.dir) * this.distance;
      b = ~~(180 * Math.atan2(c - this.y, b - this.x) / 3.14159);
      this.ca.setFrameIndex(~~(22.5 * ((0 > b ? b + 360 : b) / 360)) % 16, 64, 64);
      this.$a && !this.jc() && this.remove();
      this.Qb = this.y < this.da.y;
      this.pa++
    })
  }});
  gls2.ba.Cd = [];
  gls2.ba.Cd[0] = c("aliceLeaf-1");
  gls2.ba.Cd[1] = c("aliceLeaf-2");
  gls2.ba.Cd[2] = c("aliceLeaf-1");
  gls2.ba.Cd[3] = c("aliceLeaf-2");
  gls2.ba.Ai = b(0.3, "komachi-1");
  gls2.ba.Bi = b(0.5, "komachi-2");
  gls2.ba.Ci = b(0.5, "komachi-3");
  gls2.ba.Ag = b(0.5, "komachi-4");
  gls2.ba.zg = b(0.5, "komachi-5");
  gls2.ba.Ie = tm.createClass({superClass:gls2.ba, Dj:0, init:function(b) {
    this.superInit();
    this.Dj = b
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    tm.app.Tweener(b).to({x:480 * this.Dj}, 2800, "easeOutQuad").call(function() {
      gls2.ba.ua(this, "mktn-5")
    }.bind(b));
    b.on("enterframe", function() {
      this.y += 0.1
    })
  }});
  gls2.ba.Ng = b(0.1, "nozomi-4");
  gls2.ba.Og = b(0.3, "nozomi-5");
  gls2.ba.Fe = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.ua(b, "basic3-0");
    b.on("enterframe", function() {
      this.y += 0.8;
      this.Qb = this.$a
    })
  }});
  gls2.ba.Fe = gls2.ba.Fe();
  c = tm.createClass({superClass:gls2.ba, ha:l, $f:0, init:function(b, c) {
    this.superInit();
    this.ha = b;
    this.$f = c || 1500
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.$f = this.$f;
    b.Xa = z;
    b.Za = z;
    b.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Xa = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.5 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("enterframe", function() {
      if(!(this.Xa === z || 0 >= this.qa) && this.$f < this.frame && this.Za === z) {
        this.Za = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))
      }
    });
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Za) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.vg = c(["honoka-1"]);
  gls2.ba.Jg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["nagisa-1-1", "nagisa-1-2", "nagisa-1-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.Xa = z;
    b.Za = z;
    b.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Xa = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Za) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.ik = gls2.ba.Jg();
  gls2.ba.Kg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["nagisa-2-1", "nagisa-2-2", "nagisa-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Kg = gls2.ba.Kg();
  gls2.ba.Lg = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      this.tweener.clear().move(240, 128, 3E3, "easeInOutQuad").move(240, 448, 2E4, "easeInOutQuad")
    }.bind(b));
    b.on("completeattack", function() {
      0 >= this.qa || gls2.ba.ua(this, "nagisa-3-1")
    })
  }});
  gls2.ba.Lg = gls2.ba.Lg();
  gls2.ba.Fg = c(["mai-1", "mai-2"]);
  gls2.ba.Qg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["saki-1-1", "saki-1-2", "saki-1-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.Xa = z;
    b.Za = z;
    b.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Xa = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Za) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Qg = gls2.ba.Qg();
  gls2.ba.Rg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["saki-2-1", "saki-2-2", "saki-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Rg = gls2.ba.Rg();
  gls2.ba.Sg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["saki-3-1", "saki-3-2"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Sg = gls2.ba.Sg();
  var f = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = "setsuna-1"
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.Xa = z;
    b.Za = z;
    b.ji = z;
    b.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Xa = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        this.ji = z;
        this.alpha = 1;
        this.eb = z;
        if(50 < gls2.Ba.rand(0, 100) && 300 < this.frame || this.x - 76 < this.da.x && this.da.x < this.x + 76) {
          gls2.na.yh(this.x, this.y, this.aa, 8);
          this.ji = j;
          this.alpha = 0.3;
          this.eb = j;
          var c = gls2.Ba.rand(48, 432), d = gls2.Ba.rand(128, 192);
          this.tweener.move(c, d, 250, "easeInOutQuad").call(b)
        }else {
          c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144), this.tweener.move(240 + Math.cos(c) * d, 192 + 0.5 * Math.sin(c) * d, 2E3, "easeInOutQuad").call(b)
        }
      }.bind(this);
      b()
    }.bind(b));
    b.on("enterframe", function() {
      if(!(this.Xa === z || 0 >= this.qa)) {
        if(1800 < this.frame && this.Za === z && (this.Za = j, this.tweener.clear().wait(500).move(this.x, -100, 1200, "easeInQuad").call(function() {
          this.remove()
        }.bind(this))), this.ji && 0 == this.frame % 5) {
          var b = tm.display.Sprite("tex4", 256, 128).setFrameIndex(2);
          b.alpha = 0.3;
          b.x = this.x;
          b.y = this.y;
          b.setScale(1.5);
          b.update = function() {
            this.alpha -= 0.01;
            0 > this.alpha && this.remove()
          };
          this.aa.vh.addChild(b)
        }
      }
    });
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Za) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Tg = f();
  gls2.ba.Cg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["love-1-1", "love-1-2", "love-1-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.Xa = z;
    b.Za = z;
    b.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Xa = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Za) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Cg = gls2.ba.Cg();
  gls2.ba.Dg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["love-2-1", "love-2-2", "love-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.Xa = z;
    b.Za = z;
    b.tweener.clear().move(240, 128, 1200, "easeOutQuad").call(function() {
      this.Xa = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 128 + 0.3 * Math.sin(c) * d, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Za) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Dg = gls2.ba.Dg();
  gls2.ba.Eg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["love-3-1", "love-3-2"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        if("love-3-1" == [].concat(this.ha).pop()) {
          var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(24, 48);
          this.tweener.move(240 + Math.cos(c) * d, 128 + 0.2 * Math.sin(c) * d, 2E3, "easeInOutQuad").call(b)
        }else {
          this.tweener.move(240, 128, 1E3, "easeInOutQuad").call(b)
        }
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Eg = gls2.ba.Eg();
  gls2.ba.Pg = c(["rikka-1", "rikka-2", "rikka-3"], 3E3);
  gls2.ba.Gg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["mana-1-1", "mana-1-2", "mana-1-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.Xa = z;
    b.Za = z;
    b.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Xa = j;
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = gls2.Ba.randf(-48, 48);
        this.tweener.move(Math.clamp(this.da.x, 48, 432) + 0.3 * c, 128 + 0.3 * c, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Za) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Gg = gls2.ba.Gg();
  gls2.ba.Hg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["mana-2-1", "mana-2-2", "mana-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192, 3E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Hg = gls2.ba.Hg();
  gls2.ba.Ig = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["mana-3-1"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.tweener.clear().wait(800).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        var c = 2 * gls2.Ba.random() * Math.PI, d = gls2.Ba.randf(48, 144);
        this.tweener.move(240 + Math.cos(c) * d, 192 + 0.3 * Math.sin(c) * d, 1500, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.Ig = gls2.ba.Ig();
  gls2.ba.yg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.on("enemyconsumed", function() {
      this.va.$.De = z
    });
    b.Lj = tm.app.Tweener(b).to({x:432}, 3E4, "easeInOutQuad").to({x:48}, 3E4, "easeInOutQuad").call(function() {
      this.va.$.De = j
    }.bind(b)).setLoop(j);
    b.Mj = tm.app.Tweener(b).to({y:576}, 16E4, "easeInOutQuad").call(function() {
      tm.app.Tweener(this).to({y:448}, 2E4, "easeInOutQuad").to({y:576}, 2E4, "easeInOutQuad").setLoop(j)
    }.bind(b));
    b.tweener.wait(22E4).call(function() {
      this.va.$.De = z;
      this.Lj.clear();
      this.Mj.clear();
      this.tweener.clear().to({x:960}, 1E4, "easeInQuad")
    }.bind(b));
    b.Xa = z;
    b.on("enterframe", function() {
      this.eb = 3 < this.Re.filter(function(b) {
        return!!b.parent
      }).length;
      this.$a = !this.eb;
      !this.Xa && !this.eb && (gls2.ba.ua(this, "kanade"), this.Xa = j)
    })
  }});
  gls2.ba.yg = gls2.ba.yg();
  gls2.ba.Vc = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "rery");
    b.on("enterframe", function() {
      this.position.y > this.aa.da.y ? gls2.ba.ye(this) : gls2.ba.Pl(this)
    })
  }});
  gls2.ba.Sb = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "fary")
  }});
  gls2.ba.Wc = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "sory")
  }});
  gls2.ba.Bg = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "lary")
  }});
  gls2.ba.Ug = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "shiry")
  }});
  gls2.ba.Sc = tm.createClass({superClass:gls2.ba, init:function() {
    this.superInit()
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, "dodory")
  }});
  gls2.ba.sg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = "hibiki-1-1a hibiki-1-2 hibiki-1-3a hibiki-1-1b hibiki-1-2 hibiki-1-3b".split(" ")
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.Xa = z;
    b.Za = z;
    b.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      this.Xa = j;
      this.dispatchEvent(tm.event.Event("completeattack"))
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Za) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.sg = gls2.ba.sg();
  gls2.ba.tg = tm.createClass({superClass:gls2.ba, ha:l, Nl:[262, 267, 320, 107, 407, 149, 306, 319, 301, 149, 248, 201, 378], Ol:[257, 167, 268, 209, 233, 113, 268, 231, 92, 235, 170, 122, 87], init:function() {
    this.superInit();
    this.ha = ["hibiki-2-1", "hibiki-2-2", "hibiki-2-3"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    var c = this.Nl, f = this.Ol, s = 0;
    b.tweener.clear().wait(10).call(function() {
      gls2.pe();
      this.va.Na({hard:gls2.ea.Ee, soft:gls2.ba.Ee(this, "dory"), x:240, y:-192});
      this.va.Na({hard:gls2.ea.He, soft:gls2.ba.He(this, "miry"), x:240, y:-192});
      this.aa.ka.tweener.clear().to({speed:16}, 5E3)
    }.bind(b)).wait(120).call(function() {
      gls2.Ib("bgmBoss", j)
    }).wait(680).call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"));
      var b = function() {
        this.tweener.move(c[s], f[s], 3E3, "easeInOutQuad").call(b);
        s = (s + 1) % c.length
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.tg = gls2.ba.tg();
  gls2.ba.ug = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["hibiki-3-1", "hibiki-3-2"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.tweener.clear().to({x:240, y:128}, 1E3, "easeOutQuad").call(function() {
      this.dispatchEvent(tm.event.Event("completeattack"))
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa)) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    });
    b.on("destroy", function() {
      this.sh.parent && this.sh.remove();
      this.Jh.parent && this.Jh.remove();
      this.aa.ka.tweener.clear().to({speed:1}, 5E3)
    })
  }});
  gls2.ba.ug = gls2.ba.ug();
  gls2.ba.Af = tm.createClass({superClass:gls2.ba, Vf:l, qb:l, Zh:l, init:function(b, c) {
    this.superInit();
    this.Vf = b;
    this.qb = c
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    gls2.ba.ua(b, this.qb);
    var c = 0, f = this.Zh, s = this.Vf, A = function() {
      this.tweener.clear().to({x:f[c].x + s.x, y:f[c].y + s.y}, 5E3, "easeInOutSine").call(A);
      c = (c + 1) % f.length
    }.bind(b);
    A()
  }});
  gls2.ba.Ee = tm.createClass({superClass:gls2.ba.Af, init:function(b, c) {
    this.superInit(b, c);
    this.Zh = [{x:-140, y:-100}, {x:140, y:-100}, {x:140, y:120}, {x:-140, y:120}]
  }, setup:function(b) {
    gls2.ba.Af.prototype.setup.call(this, b);
    var c = this.Vf;
    c.sh = b;
    b.on("destroy", function() {
      0 < c.qa && this.va.Na({hard:gls2.ea.Ee, soft:gls2.ba.Ee(c, "dory"), x:240, y:-192})
    })
  }});
  gls2.ba.He = tm.createClass({superClass:gls2.ba.Af, init:function(b, c) {
    this.superInit(b, c);
    this.Zh = [{x:140, y:120}, {x:-140, y:120}, {x:-140, y:-100}, {x:140, y:-100}]
  }, setup:function(b) {
    gls2.ba.Af.prototype.setup.call(this, b);
    var c = this.Vf;
    c.Jh = b;
    b.on("destroy", function() {
      0 < c.qa && this.va.Na({hard:gls2.ea.He, soft:gls2.ba.He(c, "miry"), x:240, y:-192})
    })
  }});
  gls2.ba.mg = tm.createClass({superClass:gls2.ba, ha:l, init:function() {
    this.superInit();
    this.ha = ["ayumi-1-1", "ayumi-1-2", "ayumi-1-3", "ayumi-1-4"]
  }, setup:function(b) {
    gls2.ba.prototype.setup.call(this, b);
    b.ha = [].concat(this.ha);
    b.Xa = z;
    b.Za = z;
    b.tweener.clear().move(240, 192, 1200, "easeOutQuad").call(function() {
      gls2.pe();
      gls2.Ib("bgmExBoss", j);
      this.aa.ka.direction = -0.5 * Math.PI;
      this.aa.ka.tweener.clear().to({speed:10}, 120)
    }.bind(b)).call(function() {
      this.Xa = j;
      this.dispatchEvent(tm.event.Event("completeattack"))
    }.bind(b)).call(function() {
      var b = function() {
        var c = gls2.Ba.randf(0, 48), d = gls2.Ba.randf(0, 2 * Math.PI);
        this.tweener.clear().move(240 + Math.cos(d) * c, 192 + 0.25 * Math.sin(d) * c, 2E3, "easeInOutQuad").call(b)
      }.bind(this);
      b()
    }.bind(b));
    b.on("completeattack", function() {
      if(!(0 >= this.qa) && !this.Za) {
        var b = this.ha.shift();
        gls2.ba.ua(this, b);
        this.ha.push(b)
      }
    })
  }});
  gls2.ba.mg = gls2.ba.mg()
})();
(function() {
  var c = gls2.ea, b = gls2.ba;
  gls2.vi = {"heri1-left":[{hard:c.Ea, soft:b.Uc, x:48, y:-100}, {hard:c.Ea, soft:b.zb, x:96, y:-100}, {hard:c.Ea, soft:b.Uc, x:144, y:-100}, {hard:c.Ea, soft:b.zb, x:192, y:-100}, {hard:c.Ea, soft:b.Uc, x:240, y:-100}], "heri1-center":[{hard:c.Ea, soft:b.Uc, x:144, y:-100}, {hard:c.Ea, soft:b.zb, x:192, y:-100}, {hard:c.Ea, soft:b.Uc, x:240, y:-100}, {hard:c.Ea, soft:b.zb, x:288, y:-100}, {hard:c.Ea, soft:b.Uc, x:336, y:-100}], "heri1-right":[{hard:c.Ea, soft:b.Uc, x:240, y:-100}, {hard:c.Ea, soft:b.zb, 
  x:288, y:-100}, {hard:c.Ea, soft:b.Uc, x:336, y:-100}, {hard:c.Ea, soft:b.zb, x:384, y:-100}, {hard:c.Ea, soft:b.Uc, x:432, y:-100}], "heri1-left2":[{hard:c.Ea, soft:b.zb, x:48, y:-100}, {hard:c.Ea, soft:b.de, x:96, y:-100}, {hard:c.Ea, soft:b.zb, x:144, y:-100}, {hard:c.Ea, soft:b.de, x:192, y:-100}, {hard:c.Ea, soft:b.zb, x:240, y:-100}], "heri1-center2":[{hard:c.Ea, soft:b.zb, x:144, y:-100}, {hard:c.Ea, soft:b.de, x:192, y:-100}, {hard:c.Ea, soft:b.zb, x:240, y:-100}, {hard:c.Ea, soft:b.de, 
  x:288, y:-100}, {hard:c.Ea, soft:b.zb, x:336, y:-100}], "heri1-right2":[{hard:c.Ea, soft:b.zb, x:240, y:-100}, {hard:c.Ea, soft:b.de, x:288, y:-100}, {hard:c.Ea, soft:b.zb, x:336, y:-100}, {hard:c.Ea, soft:b.de, x:384, y:-100}, {hard:c.Ea, soft:b.zb, x:432, y:-100}], "heri2-left":[{hard:c.ja, soft:b.Ab, x:48, y:-100}, {hard:c.ja, soft:b.Ab, x:96, y:-100}, {hard:c.ja, soft:b.Ab, x:144, y:-100}, {hard:c.ja, soft:b.Ab, x:192, y:-100}, {hard:c.ja, soft:b.Ab, x:240, y:-100}], "heri2-center":[{hard:c.ja, 
  soft:b.Ab, x:144, y:-100}, {hard:c.ja, soft:b.Ab, x:192, y:-100}, {hard:c.ja, soft:b.Ab, x:240, y:-100}, {hard:c.ja, soft:b.Ab, x:288, y:-100}, {hard:c.ja, soft:b.Ab, x:336, y:-100}], "heri2-right":[{hard:c.ja, soft:b.Ab, x:240, y:-100}, {hard:c.ja, soft:b.Ab, x:288, y:-100}, {hard:c.ja, soft:b.Ab, x:336, y:-100}, {hard:c.ja, soft:b.Ab, x:384, y:-100}, {hard:c.ja, soft:b.Ab, x:432, y:-100}], "heri2-T-center":[{hard:c.ja, soft:b.Ge, x:144, y:-100}, {hard:c.ja, soft:b.Ge, x:192, y:-100}, {hard:c.ja, 
  soft:b.Ge, x:240, y:-100}, {hard:c.ja, soft:b.Ge, x:288, y:-100}, {hard:c.ja, soft:b.Ge, x:336, y:-100}], "heri2-5-left":[{hard:c.ja, soft:b.Ka(0), x:48, y:-100}, {hard:c.ja, soft:b.Ka(100), x:96, y:-100}, {hard:c.ja, soft:b.Ka(200), x:144, y:-100}, {hard:c.ja, soft:b.Ka(300), x:192, y:-100}, {hard:c.ja, soft:b.Ka(400), x:240, y:-100}, {hard:c.ja, soft:b.Ka(500), x:48, y:-100}, {hard:c.ja, soft:b.Ka(600), x:96, y:-100}, {hard:c.ja, soft:b.Ka(700), x:144, y:-100}, {hard:c.ja, soft:b.Ka(800), x:192, 
  y:-100}, {hard:c.ja, soft:b.Ka(900), x:240, y:-100}], "heri2-5-center":[{hard:c.ja, soft:b.Ka(0), x:144, y:-100}, {hard:c.ja, soft:b.Ka(100), x:192, y:-100}, {hard:c.ja, soft:b.Ka(200), x:240, y:-100}, {hard:c.ja, soft:b.Ka(300), x:288, y:-100}, {hard:c.ja, soft:b.Ka(400), x:336, y:-100}, {hard:c.ja, soft:b.Ka(500), x:144, y:-100}, {hard:c.ja, soft:b.Ka(600), x:192, y:-100}, {hard:c.ja, soft:b.Ka(700), x:240, y:-100}, {hard:c.ja, soft:b.Ka(800), x:288, y:-100}, {hard:c.ja, soft:b.Ka(900), x:336, 
  y:-100}], "heri2-5-right":[{hard:c.ja, soft:b.Ka(0), x:240, y:-100}, {hard:c.ja, soft:b.Ka(100), x:288, y:-100}, {hard:c.ja, soft:b.Ka(200), x:336, y:-100}, {hard:c.ja, soft:b.Ka(300), x:384, y:-100}, {hard:c.ja, soft:b.Ka(400), x:432, y:-100}, {hard:c.ja, soft:b.Ka(500), x:240, y:-100}, {hard:c.ja, soft:b.Ka(600), x:288, y:-100}, {hard:c.ja, soft:b.Ka(700), x:336, y:-100}, {hard:c.ja, soft:b.Ka(800), x:384, y:-100}, {hard:c.ja, soft:b.Ka(900), x:432, y:-100}], "heri1-4-left":[{hard:c.ja, soft:b.yb, 
  x:48, y:-100}, {hard:c.ja, soft:b.yb, x:96, y:-100}, {hard:c.ja, soft:b.yb, x:144, y:-100}, {hard:c.ja, soft:b.yb, x:192, y:-100}, {hard:c.ja, soft:b.yb, x:240, y:-100}], "heri1-4-center":[{hard:c.ja, soft:b.yb, x:144, y:-100}, {hard:c.ja, soft:b.yb, x:192, y:-100}, {hard:c.ja, soft:b.yb, x:240, y:-100}, {hard:c.ja, soft:b.yb, x:288, y:-100}, {hard:c.ja, soft:b.yb, x:336, y:-100}], "heri1-4-right":[{hard:c.ja, soft:b.yb, x:240, y:-100}, {hard:c.ja, soft:b.yb, x:288, y:-100}, {hard:c.ja, soft:b.yb, 
  x:336, y:-100}, {hard:c.ja, soft:b.yb, x:384, y:-100}, {hard:c.ja, soft:b.yb, x:432, y:-100}], "heri1-4-left2":[{hard:c.ja, soft:b.Tc, x:48, y:-100}, {hard:c.ja, soft:b.ce, x:96, y:-100}, {hard:c.ja, soft:b.Tc, x:144, y:-100}, {hard:c.ja, soft:b.ce, x:192, y:-100}, {hard:c.ja, soft:b.Tc, x:240, y:-100}], "heri1-4-center2":[{hard:c.ja, soft:b.Tc, x:144, y:-100}, {hard:c.ja, soft:b.ce, x:192, y:-100}, {hard:c.ja, soft:b.Tc, x:240, y:-100}, {hard:c.ja, soft:b.ce, x:288, y:-100}, {hard:c.ja, soft:b.Tc, 
  x:336, y:-100}], "heri1-4-right2":[{hard:c.ja, soft:b.Tc, x:240, y:-100}, {hard:c.ja, soft:b.ce, x:288, y:-100}, {hard:c.ja, soft:b.Tc, x:336, y:-100}, {hard:c.ja, soft:b.ce, x:384, y:-100}, {hard:c.ja, soft:b.Tc, x:432, y:-100}], "tankRD-left":[{hard:c.oa, soft:b.Gc, x:78, y:-50}, {hard:c.oa, soft:b.Gc, x:28, y:-100}, {hard:c.oa, soft:b.Gc, x:-22, y:-150}, {hard:c.oa, soft:b.Gc, x:-72, y:-200}, {hard:c.oa, soft:b.Gc, x:-122, y:-250}], "tankRD-center":[{hard:c.oa, soft:b.Gc, x:222, y:-50}, {hard:c.oa, 
  soft:b.Gc, x:172, y:-100}, {hard:c.oa, soft:b.Gc, x:122, y:-150}, {hard:c.oa, soft:b.Gc, x:72, y:-200}, {hard:c.oa, soft:b.Gc, x:22, y:-250}], "tankL-top":[{hard:c.oa, soft:b.Ke, x:550, y:64}, {hard:c.oa, soft:b.Ke, x:620, y:64}, {hard:c.oa, soft:b.Ke, x:690, y:64}, {hard:c.oa, soft:b.Ke, x:760, y:64}, {hard:c.oa, soft:b.Ke, x:830, y:64}], "tank5-left":[{hard:c.oa, soft:b.ya, x:48, y:-70}, {hard:c.oa, soft:b.ya, x:48, y:-140}, {hard:c.oa, soft:b.ya, x:48, y:-210}, {hard:c.oa, soft:b.ya, x:48, y:-280}, 
  {hard:c.oa, soft:b.ya, x:48, y:-350}], "tank5-center":[{hard:c.oa, soft:b.ya, x:240, y:-70}, {hard:c.oa, soft:b.ya, x:240, y:-140}, {hard:c.oa, soft:b.ya, x:240, y:-210}, {hard:c.oa, soft:b.ya, x:240, y:-280}, {hard:c.oa, soft:b.ya, x:240, y:-350}], "tank15-top":[{hard:c.oa, soft:b.ya, x:48, y:-70}, {hard:c.oa, soft:b.ya, x:48, y:-140}, {hard:c.oa, soft:b.ya, x:48, y:-210}, {hard:c.oa, soft:b.ya, x:48, y:-280}, {hard:c.oa, soft:b.ya, x:48, y:-350}, {hard:c.oa, soft:b.ya, x:240, y:-70}, {hard:c.oa, 
  soft:b.ya, x:240, y:-140}, {hard:c.oa, soft:b.ya, x:240, y:-210}, {hard:c.oa, soft:b.ya, x:240, y:-280}, {hard:c.oa, soft:b.ya, x:240, y:-350}, {hard:c.oa, soft:b.ya, x:432, y:-70}, {hard:c.oa, soft:b.ya, x:432, y:-140}, {hard:c.oa, soft:b.ya, x:432, y:-210}, {hard:c.oa, soft:b.ya, x:432, y:-280}, {hard:c.oa, soft:b.ya, x:432, y:-350}], "tank25-top":[{hard:c.oa, soft:b.ya, x:48, y:-70}, {hard:c.oa, soft:b.ya, x:48, y:-140}, {hard:c.oa, soft:b.ya, x:48, y:-210}, {hard:c.oa, soft:b.ya, x:48, y:-280}, 
  {hard:c.oa, soft:b.ya, x:48, y:-350}, {hard:c.oa, soft:b.ya, x:240, y:-70}, {hard:c.oa, soft:b.ya, x:240, y:-140}, {hard:c.oa, soft:b.ya, x:240, y:-210}, {hard:c.oa, soft:b.ya, x:240, y:-280}, {hard:c.oa, soft:b.ya, x:240, y:-350}, {hard:c.oa, soft:b.ya, x:432, y:-70}, {hard:c.oa, soft:b.ya, x:432, y:-140}, {hard:c.oa, soft:b.ya, x:432, y:-210}, {hard:c.oa, soft:b.ya, x:432, y:-280}, {hard:c.oa, soft:b.ya, x:432, y:-350}, {hard:c.oa, soft:b.Hc, x:144, y:710}, {hard:c.oa, soft:b.Hc, x:144, y:780}, 
  {hard:c.oa, soft:b.Hc, x:144, y:850}, {hard:c.oa, soft:b.Hc, x:144, y:920}, {hard:c.oa, soft:b.Hc, x:144, y:990}, {hard:c.oa, soft:b.Hc, x:336, y:710}, {hard:c.oa, soft:b.Hc, x:336, y:780}, {hard:c.oa, soft:b.Hc, x:336, y:850}, {hard:c.oa, soft:b.Hc, x:336, y:920}, {hard:c.oa, soft:b.Hc, x:336, y:990}], "bukky-4-r":[{hard:c.uf, soft:b.si, x:480, y:-50}], "bukky-4-l":[{hard:c.uf, soft:b.si, x:0, y:-50}], "bukky-5-r":[{hard:c.uf, soft:b.ti, x:480, y:-50}], "bukky-5-l":[{hard:c.uf, soft:b.ti, x:0, 
  y:-50}], "cannon-0":[{hard:c.Sa, soft:b.bc, x:48, y:-100}], "cannon-1":[{hard:c.Sa, soft:b.bc, x:96, y:-100}], "cannon-2":[{hard:c.Sa, soft:b.bc, x:144, y:-100}], "cannon-3":[{hard:c.Sa, soft:b.bc, x:192, y:-100}], "cannon-4":[{hard:c.Sa, soft:b.bc, x:240, y:-100}], "cannon-5":[{hard:c.Sa, soft:b.bc, x:288, y:-100}], "cannon-6":[{hard:c.Sa, soft:b.bc, x:336, y:-100}], "cannon-7":[{hard:c.Sa, soft:b.bc, x:384, y:-100}], "cannon-8":[{hard:c.Sa, soft:b.bc, x:432, y:-100}], "cannon-R0":[{hard:c.Sa, 
  soft:b.bc, x:550, y:128}], "cannon-R1":[{hard:c.Sa, soft:b.bc, x:550, y:192}], "cannon-R2":[{hard:c.Sa, soft:b.bc, x:550, y:256}], "yayoi-0":[{hard:c.Sa, soft:b.cc, x:48, y:-100}], "yayoi-1":[{hard:c.Sa, soft:b.cc, x:96, y:-100}], "yayoi-2":[{hard:c.Sa, soft:b.cc, x:144, y:-100}], "yayoi-3":[{hard:c.Sa, soft:b.cc, x:192, y:-100}], "yayoi-4":[{hard:c.Sa, soft:b.cc, x:240, y:-100}], "yayoi-5":[{hard:c.Sa, soft:b.cc, x:288, y:-100}], "yayoi-6":[{hard:c.Sa, soft:b.cc, x:336, y:-100}], "yayoi-7":[{hard:c.Sa, 
  soft:b.cc, x:384, y:-100}], "yayoi-8":[{hard:c.Sa, soft:b.cc, x:432, y:-100}], "yayoi-R0":[{hard:c.Sa, soft:b.cc, x:550, y:128}], "yayoi-R1":[{hard:c.Sa, soft:b.cc, x:550, y:192}], "yayoi-R2":[{hard:c.Sa, soft:b.cc, x:550, y:256}], "tsubomi-0":[{hard:c.Ef, soft:b.wf, x:96, y:-100}], "tsubomi-1":[{hard:c.Ef, soft:b.wf, x:240, y:-100}], "tsubomi-2":[{hard:c.Ef, soft:b.wf, x:384, y:-100}], "tsubomi-R0":[{hard:c.Ef, soft:b.wf, x:580, y:128}], "itsuki-0":[{hard:c.xg, soft:b.qg, x:96, y:-100}], "itsuki-1":[{hard:c.xg, 
  soft:b.qg, x:240, y:-100}], "itsuki-2":[{hard:c.xg, soft:b.qg, x:384, y:-100}], "makoto-0":[{hard:c.Cc, soft:b.Dc, x:48, y:-100}], "makoto-1":[{hard:c.Cc, soft:b.Dc, x:96, y:-100}], "makoto-2":[{hard:c.Cc, soft:b.Dc, x:144, y:-100}], "makoto-3":[{hard:c.Cc, soft:b.Dc, x:192, y:-100}], "makoto-4":[{hard:c.Cc, soft:b.Dc, x:240, y:-100}], "makoto-5":[{hard:c.Cc, soft:b.Dc, x:288, y:-100}], "makoto-6":[{hard:c.Cc, soft:b.Dc, x:336, y:-100}], "makoto-7":[{hard:c.Cc, soft:b.Dc, x:384, y:-100}], "makoto-8":[{hard:c.Cc, 
  soft:b.Dc, x:432, y:-100}], "makoto-R0":[{hard:c.Cc, soft:b.Dc, x:580, y:128}], "karen-3-2":[{hard:c.pg, soft:b.og, x:96, y:-100}], "karen-3-5":[{hard:c.pg, soft:b.og, x:240, y:-100}], "karen-3-8":[{hard:c.pg, soft:b.og, x:384, y:-100}], "fighter-m-0":[{hard:c.jd, soft:b.Fd, x:96, y:-192}], "fighter-m-1":[{hard:c.jd, soft:b.Fd, x:144, y:-192}], "fighter-m-2":[{hard:c.jd, soft:b.Fd, x:192, y:-192}], "fighter-m-3":[{hard:c.jd, soft:b.Fd, x:240, y:-192}], "fighter-m-4":[{hard:c.jd, soft:b.Fd, x:288, 
  y:-192}], "fighter-m-5":[{hard:c.jd, soft:b.Fd, x:336, y:-192}], "fighter-m-6":[{hard:c.jd, soft:b.Fd, x:384, y:-192}], "fighter-m4-0":[{hard:c.jd, soft:b.hk, x:96, y:-192}], "tsukikage-r":[{hard:c.dc, soft:b.Gd(700), x:624, y:256}, {hard:c.dc, soft:b.Gd(600), x:720, y:256}, {hard:c.dc, soft:b.Gd(500), x:576, y:320}, {hard:c.dc, soft:b.Gd(400), x:672, y:320}, {hard:c.dc, soft:b.Gd(300), x:768, y:320}, {hard:c.dc, soft:b.Gd(200), x:624, y:384}, {hard:c.dc, soft:b.Gd(100), x:720, y:384}], "tsukikage-l":[{hard:c.dc, 
  soft:b.Le(700), x:-144, y:384}, {hard:c.dc, soft:b.Le(600), x:-240, y:384}, {hard:c.dc, soft:b.Le(500), x:-96, y:320}, {hard:c.dc, soft:b.Le(400), x:-192, y:320}, {hard:c.dc, soft:b.Le(200), x:-144, y:256}], "urara5-0":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(0, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-1":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(0, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "urara5-2":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(1, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-3":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(1, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-4":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(2, 1, 200 * d), x:-144, y:512})
    }
    return f
  }(), "urara5-5":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(2, -1, 200 * d), x:624, y:512})
    }
    return f
  }(), "urara5-6":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(3, 1, 200 * d), x:-144, y:128})
    }
    return f
  }(), "urara5-7":function() {
    for(var f = [], d = 0;20 > d;d++) {
      f.push({hard:c.mb, soft:b.mb(3, -1, 200 * d), x:624, y:128})
    }
    return f
  }(), "milk5-0":[{hard:c.Ec, soft:b.Fc(2E3), x:384, y:-256}, {hard:c.Ec, soft:b.Fc(1500), x:312, y:-224}, {hard:c.Ec, soft:b.Fc(1E3), x:240, y:-192}, {hard:c.Ec, soft:b.Fc(500), x:168, y:-160}, {hard:c.Ec, soft:b.Fc(0), x:96, y:-128}], "milk5-1":[{hard:c.Ec, soft:b.Fc(2E3), x:96, y:-256}, {hard:c.Ec, soft:b.Fc(1500), x:168, y:-224}, {hard:c.Ec, soft:b.Fc(1E3), x:240, y:-192}, {hard:c.Ec, soft:b.Fc(500), x:312, y:-160}, {hard:c.Ec, soft:b.Fc(0), x:384, y:-128}], "ako5-0":[{hard:c.wb, soft:b.xb(240, 
  128, 96, 256), x:240, y:-192}, {hard:c.wb, soft:b.xb(384, 256, 240, 128), x:384, y:-192}, {hard:c.wb, soft:b.xb(360, 512, 384, 256), x:360, y:-192}, {hard:c.wb, soft:b.xb(120, 512, 360, 512), x:120, y:-192}, {hard:c.wb, soft:b.xb(96, 256, 120, 512), x:96, y:-192}], "ako5-1":[{hard:c.wb, soft:b.xb(240, 128, 384, 256), x:240, y:-192}, {hard:c.wb, soft:b.xb(384, 256, 360, 512), x:384, y:-192}, {hard:c.wb, soft:b.xb(360, 512, 120, 512), x:360, y:-192}, {hard:c.wb, soft:b.xb(120, 512, 96, 256), x:120, 
  y:-192}, {hard:c.wb, soft:b.xb(96, 256, 240, 128), x:96, y:-192}], "ako5-2":[{hard:c.wb, soft:b.xb(240, 128, 120, 512), x:240, y:-192}, {hard:c.wb, soft:b.xb(384, 256, 96, 256), x:384, y:-192}, {hard:c.wb, soft:b.xb(360, 512, 240, 128), x:360, y:-192}, {hard:c.wb, soft:b.xb(120, 512, 384, 256), x:120, y:-192}, {hard:c.wb, soft:b.xb(96, 256, 360, 512), x:96, y:-192}], "komachi-0":[{hard:c.ec, soft:b.Ai, x:144, y:-192}], "komachi-1":[{hard:c.ec, soft:b.Ai, x:336, y:-192}], "komachi2-0":[{hard:c.ec, 
  soft:b.Bi, x:144, y:-192}], "komachi2-1":[{hard:c.ec, soft:b.Bi, x:336, y:-192}], "komachi3-0":[{hard:c.ec, soft:b.Ci, x:144, y:-192}], "komachi3-1":[{hard:c.ec, soft:b.Ci, x:336, y:-192}], "komachi4-0":[{hard:c.ec, soft:b.Ag, x:144, y:-192}], "komachi4-1":[{hard:c.ec, soft:b.Ag, x:336, y:-192}], "komachi4-2":[{hard:c.ec, soft:b.Ag, x:240, y:-192}], "komachi5-0":[{hard:c.ec, soft:b.zg, x:144, y:-192}], "komachi5-1":[{hard:c.ec, soft:b.zg, x:336, y:-192}], "komachi5-2":[{hard:c.ec, soft:b.zg, x:240, 
  y:-192}], "nozomi4-0":[{hard:c.fe, soft:b.Ng, x:144, y:-192}], "nozomi4-1":[{hard:c.fe, soft:b.Ng, x:240, y:-192}], "nozomi4-2":[{hard:c.fe, soft:b.Ng, x:336, y:-192}], "nozomi5-0":[{hard:c.fe, soft:b.Og, x:144, y:-256}], "nozomi5-1":[{hard:c.fe, soft:b.Og, x:240, y:-128}], "nozomi5-2":[{hard:c.fe, soft:b.Og, x:336, y:-256}], "mktn5-0":[{hard:c.Ie, soft:b.Ie(0.6), x:624, y:128}], "mktn5-1":[{hard:c.Ie, soft:b.Ie(0.4), x:-144, y:64}], "akane-center":[{hard:c.Ya, soft:b.Ya, x:168, y:256}, {hard:c.Ya, 
  soft:b.Ya, x:192, y:128}, {hard:c.Ya, soft:b.Ya, x:288, y:128}, {hard:c.Ya, soft:b.Ya, x:312, y:256}], "akane-right":[{hard:c.Ya, soft:b.Ya, x:384, y:64}, {hard:c.Ya, soft:b.Ya, x:336, y:160}, {hard:c.Ya, soft:b.Ya, x:384, y:256}], "akane-left":[{hard:c.Ya, soft:b.Ya, x:96, y:64}, {hard:c.Ya, soft:b.Ya, x:144, y:160}, {hard:c.Ya, soft:b.Ya, x:96, y:256}], "nao1-left":[{hard:c.sa, soft:b.Fb, x:48, y:-100}, {hard:c.sa, soft:b.Fb, x:96, y:-100}, {hard:c.sa, soft:b.Fb, x:144, y:-100}, {hard:c.sa, soft:b.Fb, 
  x:192, y:-100}, {hard:c.sa, soft:b.Fb, x:240, y:-100}], "nao1-right":[{hard:c.sa, soft:b.Fb, x:240, y:-100}, {hard:c.sa, soft:b.Fb, x:288, y:-100}, {hard:c.sa, soft:b.Fb, x:336, y:-100}, {hard:c.sa, soft:b.Fb, x:384, y:-100}, {hard:c.sa, soft:b.Fb, x:432, y:-100}], "nao1-center":[{hard:c.sa, soft:b.Fb, x:144, y:-100}, {hard:c.sa, soft:b.Fb, x:192, y:-100}, {hard:c.sa, soft:b.Fb, x:240, y:-100}, {hard:c.sa, soft:b.Fb, x:288, y:-100}, {hard:c.sa, soft:b.Fb, x:336, y:-100}], "nao2-left":[{hard:c.sa, 
  soft:b.Gb, x:48, y:-100}, {hard:c.sa, soft:b.Gb, x:96, y:-100}, {hard:c.sa, soft:b.Gb, x:144, y:-100}, {hard:c.sa, soft:b.Gb, x:192, y:-100}, {hard:c.sa, soft:b.Gb, x:240, y:-100}], "nao2-right":[{hard:c.sa, soft:b.Gb, x:240, y:-100}, {hard:c.sa, soft:b.Gb, x:288, y:-100}, {hard:c.sa, soft:b.Gb, x:336, y:-100}, {hard:c.sa, soft:b.Gb, x:384, y:-100}, {hard:c.sa, soft:b.Gb, x:432, y:-100}], "nao2-center":[{hard:c.sa, soft:b.Gb, x:144, y:-100}, {hard:c.sa, soft:b.Gb, x:192, y:-100}, {hard:c.sa, soft:b.Gb, 
  x:240, y:-100}, {hard:c.sa, soft:b.Gb, x:288, y:-100}, {hard:c.sa, soft:b.Gb, x:336, y:-100}], "nao3-left":[{hard:c.sa, soft:b.Hb, x:48, y:-100}, {hard:c.sa, soft:b.Hb, x:96, y:-100}, {hard:c.sa, soft:b.Hb, x:144, y:-100}, {hard:c.sa, soft:b.Hb, x:192, y:-100}, {hard:c.sa, soft:b.Hb, x:240, y:-100}], "nao3-right":[{hard:c.sa, soft:b.Hb, x:240, y:-100}, {hard:c.sa, soft:b.Hb, x:288, y:-100}, {hard:c.sa, soft:b.Hb, x:336, y:-100}, {hard:c.sa, soft:b.Hb, x:384, y:-100}, {hard:c.sa, soft:b.Hb, x:432, 
  y:-100}], "nao3-center":[{hard:c.sa, soft:b.Hb, x:144, y:-100}, {hard:c.sa, soft:b.Hb, x:192, y:-100}, {hard:c.sa, soft:b.Hb, x:240, y:-100}, {hard:c.sa, soft:b.Hb, x:288, y:-100}, {hard:c.sa, soft:b.Hb, x:336, y:-100}], "reika1-left":[{hard:c.Kb, soft:b.nc, x:-48, y:-64}, {hard:c.Kb, soft:b.nc, x:-72, y:-128}, {hard:c.Kb, soft:b.nc, x:-96, y:-64}, {hard:c.Kb, soft:b.nc, x:-120, y:-128}, {hard:c.Kb, soft:b.nc, x:-144, y:-64}, {hard:c.Kb, soft:b.nc, x:-168, y:-128}], "reika1-right":[{hard:c.Kb, 
  soft:b.nc, x:528, y:-64}, {hard:c.Kb, soft:b.nc, x:552, y:-128}, {hard:c.Kb, soft:b.nc, x:576, y:-64}, {hard:c.Kb, soft:b.nc, x:600, y:-128}, {hard:c.Kb, soft:b.nc, x:624, y:-64}, {hard:c.Kb, soft:b.nc, x:648, y:-128}], "madoka-0":[{hard:c.Yc, soft:b.Yc, x:144, y:-128}], "madoka-1":[{hard:c.Yc, soft:b.Yc, x:336, y:-128}], "madoka-2":[{hard:c.Yc, soft:b.Yc, x:240, y:-128}], "miyuki-1":[{hard:c.Td, soft:b.Td, x:-256, y:140}], "miyuki-2":[{hard:c.Td, soft:b.Td, x:736, y:60}], alice:[{hard:c.lg, soft:b.lg, 
  x:240, y:-64}], erika:[{hard:c.Fe, soft:b.Fe, x:240, y:-100}], yukishiro:[{hard:c.vg, soft:b.vg, x:240, y:-100}], misumi:[{hard:c.Jg, soft:[b.ik, b.Kg, b.Lg], x:240, y:-100, boss:j}], mai:[{hard:c.Fg, soft:b.Fg, x:780, y:128}], hyuga:[{hard:c.jk, soft:[b.Qg, b.Rg, b.Sg], x:240, y:-100, boss:j}], higashi:[{hard:c.Tg, soft:b.Tg, x:240, y:-100}], momozono:[{hard:c.fk, soft:[b.Cg, b.Dg, b.Eg], x:240, y:-100, boss:j}], rikka:[{hard:c.Pg, soft:b.Pg, x:240, y:-100}], mana:[{hard:c.gk, soft:[b.Gg, b.Hg, 
  b.Ig], x:240, y:-100, boss:j}], kanade:[{hard:c.ek, soft:b.yg, x:432, y:-448}], hibiki:[{hard:c.dk, soft:[b.sg, b.tg, b.ug], x:240, y:-200, boss:j}], ayumi:[{hard:c.Tj, soft:[b.mg], x:240, y:512, boss:j}]}
})();
(function() {
  function c(b, c, d, f) {
    return a.action([f(b), a.repeat(d + "-1", [f(a.speed(c, "sequence"))])])
  }
  function b(b, c, d, f, g, k, m) {
    return a.action([a.fire(a.direction(c, "absolute"), f, g || u, k, m), a.ma("way", "Math.max(2, " + b + "-$bg*2+$ex*2)"), a.repeat("$way-1", [a.fire(a.direction("((" + d + ")-(" + c + "))/($way-1)", "sequence"), f, g || u, k, m)])])
  }
  function f(a, b, c, f, g) {
    return function(k) {
      return d(a, b, c, k, f, g, i, i)
    }
  }
  function d(b, c, d, f, g, k, m, n) {
    return a.action([a.fire(a.direction(c), f, g || u, k, m, n), a.ma("way", "Math.max(2, " + b + "-$bg*2+$ex*2)"), a.repeat("$way-1", [a.fire(a.direction("((" + d + ")-(" + c + "))/($way-1)", "sequence"), f, g || u, k, m, n)])])
  }
  function k(b) {
    return a.fire(a.direction(Math.randf(-2, 2)), b || p, D)
  }
  function n(b) {
    return a.fire(a.direction(Math.randf(-2, 2)), b || p, u)
  }
  function s(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 2.60 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function A(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 2.00 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function C(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 1.70 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function q(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 1.40 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function p(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 1.10 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function r(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 0.80 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function m(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 0.50 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function N(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 0.20 + (" + (b === i ? 0 : b) + "*0.1)")
  }
  function g(b) {
    return a.wait(b + "*(1.1-$difficulty)*$hyperOff + $bg*5")
  }
  function R(b) {
    return a.Ha(b, {frame:1, gc:j, Va:2, qa:10})
  }
  function Q(b) {
    return a.Ha(b, {frame:3, Yb:j, Va:0})
  }
  function Y(b) {
    return a.Ha(b, {frame:2, Yb:j, Va:0})
  }
  function P(b) {
    return a.Ha(b, {frame:0, hf:j, Va:2})
  }
  function G(b) {
    return a.Ha(b, {frame:1, hf:j, Va:2})
  }
  function I(b) {
    return a.Ha(b, {frame:7, gc:j, Va:1})
  }
  function H(b) {
    return a.Ha(b, {frame:6, gc:j, Va:1})
  }
  function t(b) {
    return a.Ha(b, {visible:z, Va:1})
  }
  function J(b) {
    return a.Ha(b, {frame:4, gc:j, Va:2})
  }
  function E(b) {
    return a.Ha(b, {frame:2, Va:1})
  }
  function u(b) {
    return a.Ha(b, {frame:0, Va:2})
  }
  function v(b) {
    return a.Ha(b, {frame:3, Va:1})
  }
  function D(b) {
    return a.Ha(b, {frame:1, Va:2})
  }
  function K(b) {
    return a.Ha(b, {frame:2, gc:j, Va:1})
  }
  function B(b) {
    return a.Ha(b, {frame:0, gc:j, Va:2})
  }
  function w(b) {
    return a.Ha(b, {frame:3, gc:j, Va:1})
  }
  function F(b) {
    return a.Ha(b, {frame:1, gc:j, Va:2})
  }
  gls2.fa = {};
  var a = M.La;
  gls2.fa.donothing = new M.ia({top:a.action([a.wait(5E3)])});
  gls2.fa["basic0-0"] = new M.ia({top:a.action([n])});
  gls2.fa["basic0-1"] = new M.ia({top:a.action([c(q, -0.01, 8, f(3, -15, 15))])});
  gls2.fa["basic1-0"] = new M.ia({top:a.action([a.repeat(999, [g(40), n(p)])])});
  gls2.fa["basic1-1"] = new M.ia({top:a.action([a.repeat(999, [g(20), n(p)])])});
  gls2.fa["basic1-2"] = new M.ia({top:a.action([g("10+$rand*100"), d(3, -20, 20, p)])});
  gls2.fa["basic1-3"] = new M.ia({top:a.action([a.repeat(999, [g("20+$rand*80"), d(3, -20, 20, p)])])});
  gls2.fa["basic2-0"] = new M.ia({top:a.action([a.repeat(999, [g(50), n(p)])])});
  gls2.fa["basic3-0"] = new M.ia({top:a.action([a.wait(20), a.repeat(999, [g(100), c(p, 0.1, 3, k)])])});
  gls2.fa["basic3-1"] = new M.ia({top:a.action([a.wait(20), a.repeat(999, [g(40), c(p, 0.1, 3, k)])])});
  gls2.fa["bukky-4-0"] = new M.ia({top0:a.action([g(30), a.repeat(999, [a.fire(a.direction(-40), p, w), a.repeat(3, [a.fire(a.direction(20, "sequence"), p, w), a.fire(a.direction(20, "sequence"), p, w), a.fire(a.direction(20, "sequence"), p, w), a.fire(a.direction(20, "sequence"), p, w), a.fire(a.direction(-80, "sequence"), p, w), g(5)]), g(70)])]), top1:a.action([g(20), a.fire(a.direction(180, "absolute"), r, B), a.repeat(999, [a.fire(a.direction(15, "sequence"), r, B), a.fire(a.direction(15, "sequence"), 
  r, B), a.fire(a.direction(15, "sequence"), r, B), a.fire(a.direction(15, "sequence"), r, B), a.fire(a.direction(15, "sequence"), r, B), a.fire(a.direction(15, "sequence"), r, B), a.fire(a.direction(15, "sequence"), r, B), a.fire(a.direction(15, "sequence"), r, B), a.fire(a.direction(15, "sequence"), r, B), a.fire(a.direction(-90, "sequence"), r, B), g(5)])])});
  gls2.fa["bukky-5-0"] = new M.ia({top0:a.action([g(30), a.repeat(999, [a.fire(a.direction(-40), p, w), a.repeat(3, [a.fire(a.direction(10, "sequence"), p, w), a.fire(a.direction(10, "sequence"), p, w), a.fire(a.direction(10, "sequence"), p, w), a.fire(a.direction(10, "sequence"), p, w), a.fire(a.direction(10, "sequence"), p, w), a.fire(a.direction(10, "sequence"), p, w), a.fire(a.direction(10, "sequence"), p, w), a.fire(a.direction(10, "sequence"), p, w), a.fire(a.direction(-80, "sequence"), p, 
  w), g(5)]), g(70)])]), top1:a.action([g(20), a.fire(a.direction(180, "absolute"), r, B), a.repeat(999, [a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), 
  a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(7.5, "sequence"), r, B), a.fire(a.direction(-90, "sequence"), r, B), g(5)])])});
  gls2.fa["cannon2-0"] = new M.ia({top0:a.action([a.repeat(999, [g(20), b(4, "0-10+$loop.index*15", "0+10+$loop.index*15", r), b(4, "90-10+$loop.index*15", "90+10+$loop.index*15", r), b(4, "180-10+$loop.index*15", "180+10+$loop.index*15", r), b(4, "270-10+$loop.index*15", "270+10+$loop.index*15", r), g(20), b(3, "0-10+45+$loop.index*15", "0+10+45+$loop.index*15", p), b(3, "90-10+45+$loop.index*15", "90+10+45+$loop.index*15", p), b(3, "180-10+45+$loop.index*15", "180+10+45+$loop.index*15", p), b(3, 
  "270-10+45+$loop.index*15", "270+10+45+$loop.index*15", p)])]), top1:a.action([a.repeat(999, [a.fire(a.direction("  0+$loop.index*10", "absolute"), m, J), a.fire(a.direction(" 90+$loop.index*10", "absolute"), m, J), a.fire(a.direction("180+$loop.index*10", "absolute"), m, J), a.fire(a.direction("270+$loop.index*10", "absolute"), m, J), a.fire(a.direction("  0-$loop.index*10", "absolute"), m, J), a.fire(a.direction(" 90-$loop.index*10", "absolute"), m, J), a.fire(a.direction("180-$loop.index*10", 
  "absolute"), m, J), a.fire(a.direction("270-$loop.index*10", "absolute"), m, J), g(10)])]), top2:a.action([a.repeat(999, [g(43), d(30, 0, 348, p, D)])])});
  gls2.fa["cannon2-3"] = new M.ia({top0:a.action([a.repeat(999, [a.ma("d", "$loop.index*-6"), a.repeat(9, [a.fire(a.direction(36, "sequence"), a.speed(1), t(a.ga("ivs0", "$d")))]), g(10), a.fire(a.direction(39, "sequence"), a.speed(1), t(a.ga("ivs0", "$d")))])]), top1:a.action([a.repeat(999, [a.ma("d", "($loop.index)*+12"), a.repeat(12, [a.fire(a.direction(360 / 13, "sequence"), a.speed(1), t(a.ga("ivs1", "$d")))]), g(10), a.fire(a.direction(360 / 13 - 4, "sequence"), a.speed(1), t(a.ga("ivs1", "$d")))])]), 
  ivs0:a.action([a.wait(5), a.fire(a.direction("$1", "relative"), r, D), a.xa()]), ivs1:a.action([a.wait(10), a.fire(a.direction("$1-5", "relative"), r, H), a.fire(a.direction("$1+5", "relative"), r, I), a.xa()])});
  gls2.fa["cannon3-0"] = new M.ia({top0:a.action([a.repeat(999, [g(80), c(r, 0.01, 5, f(5, -30, 30, D, a.offsetX(-60))), c(r, 0.01, 5, f(5, -30, 30, D)), c(r, 0.01, 5, f(5, -30, 30, D, a.offsetX(60)))])])});
  gls2.fa["cannon4-0"] = new M.ia({top0:a.action([g(20), a.repeat(999, [a.fire(r, w), a.repeat(8, [g(10), a.ma("way", "$loop.count+1"), a.fire(a.direction("-12/2 - 12*($way-2)", "sequence"), r, w), a.repeat("$way-1", [a.fire(a.direction(12, "sequence"), r, w)])]), g(120)])])});
  gls2.fa["cannon5-0"] = new M.ia({top0:a.action([a.repeat(999, [a.fire(a.direction(-60), A, t(a.ga("b"))), a.repeat(11, [g(5), a.fire(a.direction(10, "sequence"), A, t(a.ga("b")))]), g(60)])]), b:a.action([a.wait(5), a.pd(a.speed(0), 0), c(r, 0.1, 5, function(b) {
    return a.fire(a.direction(0, "relative"), b, u)
  }), a.xa])});
  gls2.fa["yuri-4"] = new M.ia({top:a.action([g(60), a.repeat(7, [b(7, 120, 240, m, D), g(8)])])});
  gls2.fa["kurokawa-1"] = new M.ia({top0:a.action([a.repeat(999, [c(p, -0.01, 4, function(b) {
    return d(4, -45, 45, b, v, a.offsetX(-45), a.ra(j))
  }), c(p, -0.01, 4, function(b) {
    return d(4, -45, 45, b, v, a.offsetX(45), a.ra(j))
  }), g(90)])]), top1:a.action([a.repeat(999, [a.fire(a.direction(0), p, K, a.offsetX(-45), a.ra(j)), g(45), a.fire(a.direction(0), p, K, a.offsetX(45), a.ra(j)), g(45)])])});
  gls2.fa["milk-5"] = new M.ia({top0:a.action([a.repeat(999, [d(5, -90, 90, p, E, a.offsetX(-45)), a.wait(27), d(5, -90, 90, p, E, a.offsetX(45)), g(120)])]), top1:a.action([a.repeat(999, [g(30), d(6, -90, 90, q, w, a.offsetX(-45)), a.wait(21), d(6, -90, 90, q, w, a.offsetX(45)), g(90)])]), top2:a.action([a.repeat(999, [g(55), d(13, -90, 90, m, J, a.offsetX(-45)), a.wait(20), d(13, -90, 90, m, J, a.offsetX(45)), g(21)])])});
  gls2.fa["ako-5"] = new M.ia({top:a.action([a.repeat(8, [d(3, -20, 20, q, u), g(2)])])});
  gls2.fa["kurokawa-4"] = new M.ia({top0:a.action([a.repeat(999, [c(p, -0.01, 4, function(b) {
    return d(4, -45, 45, b, v, a.offsetX(-45), a.ra(j))
  }), c(p, -0.01, 4, function(b) {
    return d(4, -45, 45, b, v, a.offsetX(45), a.ra(j))
  }), g(90)])]), top1:a.action([a.repeat(999, [a.fire(a.direction(0), p, K, a.offsetX(-45), a.ra(j)), g(45), a.fire(a.direction(0), p, K, a.offsetX(45), a.ra(j)), g(45)])])});
  gls2.fa["komachi-1"] = new M.ia({top0:a.action([a.repeat(20, [a.fire(a.direction(210, "absolute"), m(1), u, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), m(1), u, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), m(1), u, a.offsetX(-40)), a.repeat(57, [g(8), a.fire(a.direction(-720 / 57, "sequence"), m(1), u, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), m(1), u, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), m(1), u, a.offsetX(-40))])])]), top1:a.action([a.repeat(20, 
  [a.fire(a.direction(-210, "absolute"), m(1), u, a.offsetX(40)), a.fire(a.direction(120, "sequence"), m(1), u, a.offsetX(40)), a.fire(a.direction(120, "sequence"), m(1), u, a.offsetX(40)), a.repeat(57, [g(8), a.fire(a.direction(720 / 57, "sequence"), m(1), u, a.offsetX(40)), a.fire(a.direction(120, "sequence"), m(1), u, a.offsetX(40)), a.fire(a.direction(120, "sequence"), m(1), u, a.offsetX(40))])])]), top2:a.action([a.repeat(70, [a.fire(a.direction(0), p(0), F, a.offsetX(-110), a.ra(j)), a.repeat(6, 
  [a.wait(1), a.fire(a.direction(0, "sequence"), p(0), F, a.offsetX(-110), a.ra(j))]), g(10), a.fire(a.direction(0), p(0), F, a.offsetX(110), a.ra(j)), a.repeat(6, [a.wait(1), a.fire(a.direction(0, "sequence"), p(0), F, a.offsetX(110), a.ra(j))]), g(10)])])});
  gls2.fa["komachi-2"] = new M.ia({top0:a.action([a.repeat(999, [c(p, -0.01, 4, function(b) {
    return a.action([d(4, -45, 45, b, v, a.offsetX(-45), a.ra(j)), g(4)])
  }), c(p, -0.01, 4, function(b) {
    return a.action([g(4), d(4, -45, 45, b, v, a.offsetX(45), a.ra(j))])
  }), g(90)])]), top1:a.action([a.repeat(999, [g(45), c(r, 0.01, 22, function(b) {
    return a.action([a.repeat("1 + $rand*6", [a.fire(a.direction("-5+$rand*10"), b, B)]), g(1)])
  }), g(180)])])});
  gls2.fa["komachi-3"] = new M.ia({top0:a.action([a.repeat(999, [c(p, -0.01, 4, function(b) {
    return a.action([d(8, -60, 60, b, v, a.offsetX(-45), a.ra(j)), g(4)])
  }), c(p, -0.01, 4, function(b) {
    return a.action([g(4), d(8, -60, 60, b, v, a.offsetX(45), a.ra(j))])
  }), g(90)])]), top1:a.action([a.repeat(999, [g(45), c(r, 0.01, 22, function(b) {
    return a.action([a.repeat("1 + $rand*6", [a.fire(a.direction("-5+$rand*10"), b, B)]), g(1)])
  }), g(180)])])});
  gls2.fa["komachi-4"] = new M.ia({top0:a.action([a.repeat(999, [a.repeat(4, [a.fire(a.direction("220+-1+$rand*2", "absolute"), p, E, a.offsetX(-45)), a.fire(a.direction("180+-1+$rand*2", "absolute"), p, E, a.offsetX(-45)), a.fire(a.direction("180+-1+$rand*2", "absolute"), p, E, a.offsetX(45)), a.fire(a.direction("140+-1+$rand*2", "absolute"), p, E, a.offsetX(45)), g(4)]), g(60)])]), top1:a.action([a.repeat(70, [a.fire(a.direction(0), p(5), F, a.offsetX(-110), a.ra(j)), a.repeat(12, [a.wait(1), a.fire(a.direction(0, 
  "sequence"), p(5), F, a.offsetX(-110), a.ra(j))]), g(30), a.fire(a.direction(0), p(5), F, a.offsetX(110), a.ra(j)), a.repeat(12, [a.wait(1), a.fire(a.direction(0, "sequence"), p(5), F, a.offsetX(110), a.ra(j))]), g(30)])])});
  gls2.fa["komachi-5"] = new M.ia({top0:a.action([a.repeat(999, [a.fire(a.direction(210, "absolute"), m(1), E, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), m(1), E, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), m(1), E, a.offsetX(-40)), a.repeat(50 / 3, [g(2), a.fire(a.direction(-7.2, "sequence"), m(1), E, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), m(1), E, a.offsetX(-40)), a.fire(a.direction(120, "sequence"), m(1), E, a.offsetX(-40))]), g(60)])]), top1:a.action([a.repeat(999, 
  [a.fire(a.direction(-210, "absolute"), m(1), E, a.offsetX(40)), a.fire(a.direction(120, "sequence"), m(1), E, a.offsetX(40)), a.fire(a.direction(120, "sequence"), m(1), E, a.offsetX(40)), a.repeat(50 / 3, [g(2), a.fire(a.direction(7.2, "sequence"), m(1), E, a.offsetX(40)), a.fire(a.direction(120, "sequence"), m(1), E, a.offsetX(40)), a.fire(a.direction(120, "sequence"), m(1), E, a.offsetX(40))]), g(60)])]), top2:a.action([a.repeat(999, [a.fire(a.direction(-10), q(0), F, a.offsetX(-110), a.ra(j)), 
  a.fire(a.direction(10, "sequence"), q(0), F, a.offsetX(-110), a.ra(j)), a.fire(a.direction(10, "sequence"), q(0), F, a.offsetX(-110), a.ra(j)), a.repeat(30, [a.wait(1), a.fire(a.direction(-20, "sequence"), q(0), F, a.offsetX(-110), a.ra(j)), a.fire(a.direction(10, "sequence"), q(0), F, a.offsetX(-110), a.ra(j)), a.fire(a.direction(10, "sequence"), q(0), F, a.offsetX(-110), a.ra(j))]), g(5), a.fire(a.direction(-10), q(0), F, a.offsetX(110), a.ra(j)), a.fire(a.direction(10, "sequence"), q(0), F, 
  a.offsetX(110), a.ra(j)), a.fire(a.direction(10, "sequence"), q(0), F, a.offsetX(110), a.ra(j)), a.repeat(30, [a.wait(1), a.fire(a.direction(-20, "sequence"), q(0), F, a.offsetX(110), a.ra(j)), a.fire(a.direction(10, "sequence"), q(0), F, a.offsetX(110), a.ra(j)), a.fire(a.direction(10, "sequence"), q(0), F, a.offsetX(110), a.ra(j))]), g(5)])])});
  gls2.fa["nozomi-4"] = new M.ia({top0:a.action([a.wait(60), a.repeat(999, [a.repeat(12, [a.ma("c", "2+$loop.index"), d("$c", "-4-($c-2)*4", "4+($c-2)*4", N("(560-$c*40)*0.03"), K, a.offsetY(-50))]), g(150)])]), top1:a.action([a.wait(20), a.repeat(999, [a.fire(a.direction(40), t(a.ga("noop"))), c(p, 0.03, 16, function(b) {
    return a.action([a.fire(a.direction(-5, "sequence"), b, D, a.offsetX(-50)), a.wait(3)])
  }), g(90), a.fire(a.direction(-40), t(a.ga("noop"))), c(p, 0.03, 16, function(b) {
    return a.action([a.fire(a.direction(5, "sequence"), b, D, a.offsetX(50)), a.wait(3)])
  }), g(90)])]), noop:a.action([a.wait(1), a.xa])});
  gls2.fa["nozomi-5"] = new M.ia({top0:a.action([a.wait(60), a.repeat(999, [a.repeat(6, [a.ma("c", "2+$loop.index"), d("$c", "-4-($c-2)*2-60", "4+($c-2)*2-60", N("(560-$c*40)*0.02"), K, a.offsetY(-50)), d("$c", "-4-($c-2)*2-20", "4+($c-2)*2-20", N("(560-$c*40)*0.02"), K, a.offsetY(-50)), d("$c", "-4-($c-2)*2+20", "4+($c-2)*2+20", N("(560-$c*40)*0.02"), K, a.offsetY(-50)), d("$c", "-4-($c-2)*2+60", "4+($c-2)*2+60", N("(560-$c*40)*0.02"), K, a.offsetY(-50))]), g(150), a.repeat(6, [a.ma("c", "2+$loop.index"), 
  d("$c", "-4-($c-2)*2-80", "4+($c-2)*2-80", N("(560-$c*40)*0.02"), w, a.offsetY(-50)), d("$c", "-4-($c-2)*2-40", "4+($c-2)*2-40", N("(560-$c*40)*0.02"), w, a.offsetY(-50)), d("$c", "-4-($c-2)*2+ 0", "4+($c-2)*2+ 0", N("(560-$c*40)*0.02"), w, a.offsetY(-50)), d("$c", "-4-($c-2)*2+40", "4+($c-2)*2+40", N("(560-$c*40)*0.02"), w, a.offsetY(-50)), d("$c", "-4-($c-2)*2+80", "4+($c-2)*2+80", N("(560-$c*40)*0.02"), w, a.offsetY(-50))]), g(150)])]), top1:a.action([a.repeat(999, [a.wait(20), a.fire(a.direction(5), 
  t(a.ga("noop"))), c(r(1.5), 0.05, 15, function(b) {
    return a.action([a.fire(a.direction(-1, "sequence"), b, D, a.offsetX(-50)), g(3)])
  }), a.wait(20), a.fire(a.direction(-5), t(a.ga("noop"))), c(r(1.5), 0.05, 15, function(b) {
    return a.action([a.fire(a.direction(1, "sequence"), b, D, a.offsetX(50)), g(3)])
  })])]), noop:a.action([a.wait(1), a.xa])});
  gls2.fa["mktn-5"] = new M.ia({top0:a.action([a.repeat(999, [a.fire(a.direction(0), m, t(a.ga("noop"))), a.repeat(20, [a.fire(a.direction(0.5, "sequence"), a.speed(0.08, "sequence"), v), a.repeat(12, [a.fire(a.direction(30, "sequence"), a.speed(0, "sequence"), v)]), g(6)]), a.fire(a.direction(0), m, t(a.ga("noop"))), a.repeat(20, [a.fire(a.direction(-0.5, "sequence"), a.speed(0.08, "sequence"), v), a.repeat(12, [a.fire(a.direction(30, "sequence"), a.speed(0, "sequence"), v)]), g(6)]), g(60)])]), 
  top1:a.action([a.repeat(999, [a.fire(a.direction(0, "absolute"), p, t(a.ga("noop"))), a.repeat(5, [a.fire(a.direction(-10, "sequence"), a.speed(0.05, "sequence"), J), a.repeat(12, [a.fire(a.direction(30, "sequence"), a.speed(0, "sequence"), J)]), g(5)]), a.fire(a.direction(0, "absolute"), p, t(a.ga("noop"))), a.repeat(5, [a.fire(a.direction(10, "sequence"), a.speed(0.05, "sequence"), J), a.repeat(12, [a.fire(a.direction(30, "sequence"), a.speed(0, "sequence"), J)]), g(5)]), g(40)])]), top2:a.action([a.repeat(999, 
  [a.ma("gun", "[-120, -40, 120, 0, -80, 40, 80][$loop.index%7]"), d(5, -30, 30, p(7), G, a.offsetX("$gun"), a.offsetY(20)), a.ma("gun", "[-40, -120, 0, 120, 80, 40, -80][$loop.index%7]"), d(5, -30, 30, p(7), G, a.offsetX("$gun"), a.offsetY(20)), g(21)])]), noop:a.action([a.wait(1), a.xa])});
  gls2.fa.akane = new M.ia({top:a.action([a.wait("40"), a.repeat(999, [a.repeat(5, [g(60), d(1, 1, 1, m, v, a.offsetX(-16), a.offsetY(6), a.ra(j)), d(1, 1, 1, m, v, a.offsetX(16), a.offsetY(6), a.ra(j))]), g(120)])])});
  gls2.fa["nao-1"] = new M.ia({top:a.action([a.repeat(999, [g(30), a.fire(a.direction(0), q, u)])])});
  gls2.fa["nao-2"] = new M.ia({top:a.action([a.repeat(999, [g(30), d(2, -5, 5, q, u, a.offsetX(0), a.offsetY(0), a.ra(j))])])});
  gls2.fa["nao-3"] = new M.ia({top:a.action([a.repeat(999, [g(30), d(2, -1, 1, q, u, a.offsetX(0), a.offsetY(0), a.ra(j))])])});
  gls2.fa.reika = new M.ia({top:a.action([a.repeat(999, [g(60), a.fire(a.direction(0), p, w)])])});
  gls2.fa.aguri = new M.ia({top0:a.action([a.repeat(999, [a.repeat(3, [c(p, 0.001, 4, function(b) {
    return a.action([d(3, -30, 30, b, w, a.offsetX(-32), a.offsetY(-20)), d(2, -30, 30, b, w, a.offsetX(-120), a.offsetY(10)), d(2, -30, 30, b, w, a.offsetX(-80), a.offsetY(12)), d(3, -30, 30, b, w, a.offsetX(32), a.offsetY(-20)), d(2, -30, 30, b, w, a.offsetX(120), a.offsetY(10)), d(2, -30, 30, b, w, a.offsetX(80), a.offsetY(12)), a.wait(1)])
  }), g(10)]), g(120)])]), top1:a.action([a.repeat(999, [a.repeat(3, [d(3, -15, 15, q, B, a.offsetX(0), a.offsetY(0)), d(3, -15, 15, q, B, a.offsetX(0), a.offsetY(30)), d(3, -15, 15, q, B, a.offsetX(-10), a.offsetY(-10)), d(3, -15, 15, q, B, a.offsetX(-20), a.offsetY(0)), d(3, -15, 15, q, B, a.offsetX(-20), a.offsetY(10)), d(3, -15, 15, q, B, a.offsetX(-10), a.offsetY(20)), d(3, -15, 15, q, B, a.offsetX(10), a.offsetY(-10)), d(3, -15, 15, q, B, a.offsetX(20), a.offsetY(0)), d(3, -15, 15, q, B, a.offsetX(20), 
  a.offsetY(10)), d(3, -15, 15, q, B, a.offsetX(10), a.offsetY(20)), g(40)]), g(180)])])});
  gls2.fa.miyuki = new M.ia({top0:a.action([a.wait(300), a.repeat(10, [a.fire(a.direction(210, "absolute"), p, Q, a.offsetX(-64), a.offsetY(32)), g(2), a.fire(a.direction(200, "absolute"), p, Q, a.offsetX(-64), a.offsetY(32)), g(2), a.fire(a.direction(190, "absolute"), p, Q, a.offsetX(-32), a.offsetY(32)), g(2), a.fire(a.direction(180, "absolute"), p, Q, a.offsetX(0), a.offsetY(32)), g(2), a.fire(a.direction(170, "absolute"), p, Q, a.offsetX(32), a.offsetY(32)), g(2), a.fire(a.direction(160, "absolute"), 
  p, Q, a.offsetX(64), a.offsetY(32)), g(2), a.fire(a.direction(150, "absolute"), p, Q, a.offsetX(64), a.offsetY(32)), g(180)])]), top1:a.action([a.wait("40"), a.repeat(999, [g(30), d(3, -45, 45, m, I, a.offsetX(-64), a.offsetY(16)), d(3, -45, 45, m, I, a.offsetX(0), a.offsetY(16)), d(3, -45, 45, m, I, a.offsetX(16), a.offsetY(16)), d(3, -45, 45, m, I, a.offsetX(32), a.offsetY(16)), c(m, 0.001, 5, function(b) {
    return a.action([d(3, "-45", "+45", b, I, a.offsetX(0), a.offsetY(0))])
  })])])});
  gls2.fa.alice = new M.ia({top0:a.action([a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(999, [a.fire(a.direction(7, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), g(10)])]), top1:a.action([a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(999, [a.fire(a.direction(11, 
  "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), g(10)])]), top2:a.action([a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(999, [a.fire(a.direction(17, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), 
  a.fire(a.direction(90, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), g(10)])]), top3:a.action([a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(999, [a.fire(a.direction(-11, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, I, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, 
  I, a.offsetX(0), a.offsetY(-16)), g(10)])]), top4:a.action([a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(999, [a.fire(a.direction(-9, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), g(10)])]), top4:a.action([a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), 
  a.repeat(999, [a.fire(a.direction(-5, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), a.fire(a.direction(90, "sequence"), m, H, a.offsetX(0), a.offsetY(-16)), g(10)])])});
  gls2.fa["aliceLeaf-1"] = new M.ia({top0:a.action([a.repeat(999, [a.repeat(1, [d(3, -10, 10, q, B, a.offsetX(0), a.offsetY(0)), d(3, -10, 10, q, F, a.offsetX(10), a.offsetY(-10)), d(3, -10, 10, q, F, a.offsetX(10), a.offsetY(-20)), d(3, -10, 10, q, F, a.offsetX(20), a.offsetY(-10)), d(3, -10, 10, q, F, a.offsetX(10), a.offsetY(10)), d(3, -10, 10, q, F, a.offsetX(10), a.offsetY(20)), d(3, -10, 10, q, F, a.offsetX(20), a.offsetY(10)), d(3, -10, 10, q, F, a.offsetX(-10), a.offsetY(-10)), d(3, -10, 
  10, q, F, a.offsetX(-10), a.offsetY(-20)), d(3, -10, 10, q, F, a.offsetX(-20), a.offsetY(-10)), d(3, -10, 10, q, F, a.offsetX(-10), a.offsetY(10)), d(3, -10, 10, q, F, a.offsetX(-10), a.offsetY(20)), d(3, -10, 10, q, F, a.offsetX(-20), a.offsetY(10)), g(20)]), g(60)])])});
  gls2.fa["aliceLeaf-2"] = new M.ia({top0:a.action([a.wait(30), a.repeat(999, [a.repeat(1, [d(3, -10, 10, q, F, a.offsetX(0), a.offsetY(0)), d(3, -10, 10, q, B, a.offsetX(10), a.offsetY(-10)), d(3, -10, 10, q, B, a.offsetX(10), a.offsetY(-20)), d(3, -10, 10, q, B, a.offsetX(20), a.offsetY(-10)), d(3, -10, 10, q, B, a.offsetX(10), a.offsetY(10)), d(3, -10, 10, q, B, a.offsetX(10), a.offsetY(20)), d(3, -10, 10, q, B, a.offsetX(20), a.offsetY(10)), d(3, -10, 10, q, B, a.offsetX(-10), a.offsetY(-10)), 
  d(3, -10, 10, q, B, a.offsetX(-10), a.offsetY(-20)), d(3, -10, 10, q, B, a.offsetX(-20), a.offsetY(-10)), d(3, -10, 10, q, B, a.offsetX(-10), a.offsetY(10)), d(3, -10, 10, q, B, a.offsetX(-10), a.offsetY(20)), d(3, -10, 10, q, B, a.offsetX(-20), a.offsetY(10)), g(20)]), g(60)])])});
  gls2.fa["honoka-1"] = new M.ia({top0:a.action([a.wait(60), a.repeat(10, [d(4, -40, 40, r, J, a.offsetX(0), a.offsetY(30)), g(30), d(5, -40, 40, m, J, a.offsetX(0), a.offsetY(30)), g(30)])]), top1:a.action([a.wait(60), a.repeat(5, [d(2, -2, 2, r(0.6), u), d(3, -3, 3, r(1), u), d(4, -4, 4, r(1.4), u), d(5, -5, 5, r(1.8), u), g(110)])]), top2:a.action([a.repeat(20, [b(12, -10, -170, m, F, a.offsetX(-110), a.offsetY(-70)), g(30)])]), top3:a.action([a.repeat(20, [b(12, 10, 170, m, F, a.offsetX(110), 
  a.offsetY(-70)), g(30)])])});
  gls2.fa["nagisa-1-1"] = new M.ia({top0:a.action([g(90), a.repeat(3, [a.ma("way", "5 + $loop.index*6"), c(p, 0.01, "3 + $loop.index*2", function(b) {
    return a.action([d("$way", -110, 110, b, u, a.offsetX(-190), a.offsetY(-20)), d("$way", -110, 110, b, u, a.offsetX(190), a.offsetY(-20)), a.wait(10)])
  }), g(60)]), g(60)])});
  gls2.fa["nagisa-1-2"] = new M.ia({top0:a.action([a.repeat(12, [d(15, -90, 90, m, u), g(40)])]), top1:a.action([a.repeat(3, [a.repeat(3, [d(5, -65, -55, r, F, a.offsetX(-190), a.offsetY(-20)), d(5, -35, -25, r, F, a.offsetX(-190), a.offsetY(-20)), d(5, -5, 5, r, F, a.offsetX(-190), a.offsetY(-20)), d(5, 25, 35, r, F, a.offsetX(-190), a.offsetY(-20)), d(5, 55, 65, r, F, a.offsetX(-190), a.offsetY(-20)), a.wait(2)]), g(60), a.repeat(3, [d(5, -65, -55, r, F, a.offsetX(190), a.offsetY(-20)), d(5, -35, 
  -25, r, F, a.offsetX(190), a.offsetY(-20)), d(5, -5, 5, r, F, a.offsetX(190), a.offsetY(-20)), d(5, 25, 35, r, F, a.offsetX(190), a.offsetY(-20)), d(5, 55, 65, r, F, a.offsetX(190), a.offsetY(-20)), a.wait(2)]), g(60)])])});
  gls2.fa["nagisa-1-3"] = new M.ia({top0:a.action([g(60), a.repeat(3, [a.fire(a.direction(-60), r, v, a.offsetX(-190), a.offsetY(-20)), a.repeat(20, [g(15), a.fire(a.direction(6, "sequence"), r, v, a.offsetX(-190), a.offsetY(-20))])])]), top1:a.action([g(80), a.repeat(3, [a.fire(a.direction(60), r, v, a.offsetX(190), a.offsetY(-20)), a.repeat(20, [g(15), a.fire(a.direction(-6, "sequence"), r, v, a.offsetX(190), a.offsetY(-20))])])]), top2:a.action([a.repeat(6, [a.repeat(3, [d(5, -60, -40, r, J, a.offsetX(-190), 
  a.offsetY(-20)), d(5, -20, -10, r, J, a.offsetX(-190), a.offsetY(-20)), d(5, 10, 20, r, J, a.offsetX(-190), a.offsetY(-20)), d(5, 40, 60, r, J, a.offsetX(-190), a.offsetY(-20)), a.wait(4)]), g(60), a.repeat(3, [d(5, -60, -40, r, J, a.offsetX(190), a.offsetY(-20)), d(5, -20, -10, r, J, a.offsetX(190), a.offsetY(-20)), d(5, 10, 20, r, J, a.offsetX(190), a.offsetY(-20)), d(5, 40, 60, r, J, a.offsetX(190), a.offsetY(-20)), a.wait(4)]), g(60)])])});
  gls2.fa["nagisa-2-1"] = new M.ia({top0:a.action([g(120), a.repeat(36, [b(6, "+$loop.index*10", "+$loop.index*10 + 360", m, D, a.offsetX(-190), a.offsetY(-20)), b(6, "-$loop.index*10", "-$loop.index*10 + 360", m, D, a.offsetX(190), a.offsetY(-20)), g(10)])]), top1:a.action([g(120), a.repeat(30, [b(3, "+$loop.index*10", "+$loop.index * 10 + 360", r, K), b(3, "-$loop.index*14", "-$loop.index * 14 + 360", r, K), g(12)])])});
  gls2.fa["nagisa-2-2"] = new M.ia({top0:a.action([g(120), a.repeat(30, [b(4, "+$loop.index*5", "+$loop.index*5 + 270", p, K), g(12)])]), top1:a.action([g(120), a.repeat(6, [b(9, 150, 130, m(0.8), u), b(9, 172, 188, m(0.8), u), b(9, 210, 230, m(0.8), u), g(50), b(9, 170, 150, m(0.8), u), b(9, 190, 210, m(0.8), u), g(50)])])});
  gls2.fa["nagisa-2-3"] = new M.ia({top:a.action([g(120), a.repeat(12, [b(23, 0, 360, m, J, a.offsetX(-190), a.offsetY(-20)), b(23, 0, 360, m, J), b(23, 0, 360, m, J, a.offsetX(190), a.offsetY(-20)), g(30)])])});
  gls2.fa["nagisa-3-1"] = new M.ia({top0:a.action([g(50), a.repeat(999, [c(p, 0.001, 5, function(b) {
    return a.action([d(41, "-180", "+180", b, w, a.offsetX(-190), a.offsetY(-20)), d(41, "-180", "+180", b, w, a.offsetX(190), a.offsetY(-20))])
  }), g(50)])]), top1:a.action([a.repeat(999, [d(2, -2, 0, q, u), g(10), d(2, 0, 2, q, u), g(150)])])});
  gls2.fa["mai-1"] = new M.ia({top0:a.action([g(50), a.repeat(50, [a.ma("from", "+Math.cos($loop.index*0.15)*40-170"), b(3, "$from", "$from+60", A, t(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, D), a.xa]))), a.ma("from", "-Math.cos($loop.index*0.15)*40-10"), b(3, "$from", "$from-60", A, t(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, D), a.xa]))), g(8)])]), top1:a.action([g(50), a.repeat(12, [b(5, -50, 50, A, t(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, 
  K), a.xa]))), b(5, -230, -130, A, t(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, K), a.xa]))), g(16), b(6, -50, 50, A, t(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, K), a.xa]))), b(6, -230, -130, A, t(a.action([a.wait(8), a.fire(a.direction(0, "relative"), r, K), a.xa]))), g(16)])])});
  gls2.fa["mai-2"] = new M.ia({top:a.action([g(50), a.repeat(15, [a.fire(a.direction(-10), w(a.ga("fireChild", "$loop.index*10"))), g(8)])]), fireChild:a.action([g("40+$1"), c(r, 0.1, 5, function(b) {
    return a.fire(a.direction(-90, "absolute"), b, v)
  }), a.xa])});
  gls2.fa["saki-1-1"] = new M.ia({top:a.action([g(100), a.repeat(3, [a.ga("oneround", "9 + $loop.index * 4", "$loop.index > 0 ? 0 : 1")])]), oneround:a.action([a.ma("way", "$1"), a.repeat("10", [d("$way", "3 * $loop.index*+1", "3 * $loop.index*+1 + 360", p, D), d("$way", "3 * $loop.index*-1", "3 * $loop.index*-1 + 360", p, D), g(12)]), a.repeat("$2", [d(9, -20, 20, q, E)])])});
  gls2.fa["saki-1-2"] = new M.ia({top:a.action([g(100), a.repeat(5, [a.ma("way", "5+$loop.index*2"), a.repeat(6, [a.ma("s", "$loop.index*0.6"), a.action(function() {
    for(var b = [], c = 0;5 > c;c++) {
      b.push(d("$way", -30, 30, p("$s"), K, a.offsetX(-120 + 60 * c)))
    }
    return b
  }())]), g(90)])])});
  gls2.fa["saki-1-3"] = new M.ia({top:a.action([a.ma("dir", "$rand < 0.5 ? -1 : 1"), a.repeat(24, [a.fire(a.direction("120*$dir + $loop.index*10*-$dir"), a.speed(2), K(a.ga("seed"))), g(8)]), g(60)]), seed:a.action([a.wait(10), a.pd(a.speed(0), 50), a.wait(90), d(13, 0, 360 - 360 / 13, r, E), a.xa])});
  gls2.fa["saki-2-1"] = new M.ia({top0:a.action([g(100), a.repeat(4, [d(60, "$loop.index*+5+0", "$loop.index*+5+360 - 360/60", r, D, a.offsetX(-40)), d(60, "$loop.index*-5+0", "$loop.index*-5+360 - 360/60", r, D, a.offsetX(40)), g(60), d(59, "$loop.index*+5+0", "$loop.index*+5+360 - 360/59", r, D, a.offsetX(-40)), d(59, "$loop.index*-5+0", "$loop.index*-5+360 - 360/59", r, D, a.offsetX(40)), g(60)])]), top1:a.action([g(100), a.repeat(4, [a.repeat(7, [a.ma("o", "$loop.index*20 - 60"), a.fire(a.direction("$o"), 
  C, E), a.repeat(4, [a.ma("w", "$loop.count"), d("$w+1", "$w*-0.6 + $o", "$w*+0.6 + $o", C("$w*-1.0"), E)])]), g(120)])])});
  gls2.fa["saki-2-2"] = new M.ia({top:a.action([g(60), a.ma("dir", "$rand < 0.5 ? -1 : 1"), a.repeat(12, [a.fire(a.direction("120*$dir + $loop.index*10*-$dir"), a.speed(2), w(a.ga("seed"))), g(8), a.fire(a.direction("120*-$dir + $loop.index*10*$dir"), a.speed(2), w(a.ga("seed"))), g(8)]), g(60)]), seed:a.action([a.wait(10), a.pd(a.speed(0), "10 + $rand*15"), a.wait(65), c(p, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(-48), b, v)])
  }), c(p, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(-36), b, v)])
  }), c(p, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(-24), b, v)])
  }), c(p, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(-12), b, v)])
  }), c(p, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(0), b, v)])
  }), c(p, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(12), b, v)])
  }), c(p, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(24), b, v)])
  }), c(p, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(36), b, v)])
  }), c(p, 0.14, 6, function(b) {
    return a.action([a.fire(a.direction(48), b, v)])
  }), g(2), a.xa])});
  gls2.fa["saki-2-3"] = new M.ia({top:a.action([g(60), a.ma("dir", "$rand < 0.5 ? -1 : 1"), a.repeat(24, [a.fire(a.direction("120*$dir + $loop.index*10*-$dir"), a.speed(2), K(a.ga("seed"))), g(8), a.fire(a.direction("120*-$dir + $loop.index*10*$dir"), a.speed(2), K(a.ga("seed"))), g(8)]), g(60)]), seed:a.action([a.wait(10), a.pd(a.speed(0), "10 + $rand*20"), a.wait(65), c(p, 0.18, 7, function(b) {
    return a.action([a.fire(a.direction(180, "absolute"), b, E)])
  }), g(2), a.xa])});
  gls2.fa["saki-3-1"] = new M.ia({top:a.action([a.fire(a.direction(180, "absolute"), m, w(a.ga("seed0")), a.offsetX(-100)), a.fire(a.direction(180, "absolute"), m, w(a.ga("seed1")), a.offsetX(100)), g(120)]), seed0:a.action([a.fire(a.direction(20, "absolute"), m(0.1), D), a.repeat(999, [a.fire(a.direction(72, "sequence"), m(0.1), D), a.fire(a.direction(72, "sequence"), m(0.1), D), a.fire(a.direction(72, "sequence"), m(0.1), D), a.fire(a.direction(72, "sequence"), m(0.1), D), g(10), a.fire(a.direction(92, 
  "sequence"), m(0.1), D)])]), seed1:a.action([a.fire(a.direction(-20, "absolute"), m(0.1), D), a.repeat(999, [a.fire(a.direction(72, "sequence"), m(0.1), D), a.fire(a.direction(72, "sequence"), m(0.1), D), a.fire(a.direction(72, "sequence"), m(0.1), D), a.fire(a.direction(72, "sequence"), m(0.1), D), g(10), a.fire(a.direction(52, "sequence"), m(0.1), D)])])});
  gls2.fa["saki-3-2"] = new M.ia({top:a.action([a.fire(a.direction(180, "absolute"), m, K(a.ga("seed1")), a.offsetX(-120)), a.fire(a.direction(180, "absolute"), m, K(a.ga("seed0")), a.offsetX(120)), g(120)]), seed0:a.action([a.fire(a.direction(20, "absolute"), m(0.1), u), a.repeat(999, [a.fire(a.direction(72, "sequence"), m(0.1), u), a.fire(a.direction(72, "sequence"), m(0.1), u), a.fire(a.direction(72, "sequence"), m(0.1), u), a.fire(a.direction(72, "sequence"), m(0.1), u), g(10), a.fire(a.direction(92, 
  "sequence"), m(0.1), u)])]), seed1:a.action([a.fire(a.direction(-20, "absolute"), m(0.1), u), a.repeat(999, [a.fire(a.direction(72, "sequence"), m(0.1), u), a.fire(a.direction(72, "sequence"), m(0.1), u), a.fire(a.direction(72, "sequence"), m(0.1), u), a.fire(a.direction(72, "sequence"), m(0.1), u), g(10), a.fire(a.direction(52, "sequence"), m(0.1), u)])])});
  gls2.fa["rikka-1"] = new M.ia({top:a.action([a.repeat(5, [a.ma("s", "$loop.index*1.5"), g(30), d(33, 180 / 33 / 2 + -180, 180 - 180 / 33 / 2 + 0, v, p("$s"), a.offsetX(-90), a.offsetY(-20)), d(33, 180 / 33 / 2 + -180, 180 - 180 / 33 / 2 + 0, v, p("$s"), a.offsetX(90), a.offsetY(-20)), g(3), d(33, -180 + 180 / 33 / 2 - 1, 180 - 180 / 33 / 2 - 1, v, p("$s"), a.offsetX(-90), a.offsetY(-20)), d(33, 180 / 33 / 2 + -179, 180 - 180 / 33 / 2 + 1, v, p("$s"), a.offsetX(-90), a.offsetY(-20)), d(33, -180 + 
  180 / 33 / 2 - 1, 180 - 180 / 33 / 2 - 1, v, p("$s"), a.offsetX(90), a.offsetY(-20)), d(33, 180 / 33 / 2 + -179, 180 - 180 / 33 / 2 + 1, v, p("$s"), a.offsetX(90), a.offsetY(-20)), g(3), d(33, 180 / 33 / 2 + -180, 180 - 180 / 33 / 2 + 0, v, p("$s"), a.offsetX(-90), a.offsetY(-20)), d(33, 180 / 33 / 2 + -180, 180 - 180 / 33 / 2 + 0, v, p("$s"), a.offsetX(90), a.offsetY(-20))])])});
  gls2.fa["rikka-2"] = new M.ia({top0:a.action([a.repeat(10, [a.fire(w(a.ga("snow")), a.offsetX(-90), a.offsetY(-20)), a.fire(w(a.ga("snow")), a.offsetX(90), a.offsetY(-20)), g(8)]), g(60)]), top1:a.action([a.repeat(35, [a.ma("dir", "$loop.index*-20"), a.ma("spd", "($loop.index+1)*0.2"), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed(1), t(a.ga("ivs1", "$dir", "$spd")))]), g(5), a.fire(a.direction("360/6 + 30", "sequence"), a.speed(1), t(a.ga("ivs1", "$dir", "$spd")))]), a.repeat(35, [a.ma("dir", 
  "$loop.index*+20"), a.ma("spd", "($loop.index+1)*0.2"), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed(1), t(a.ga("ivs1", "$dir", "$spd")))]), g(5), a.fire(a.direction("360/6 - 30", "sequence"), a.speed(1), t(a.ga("ivs1", "$dir", "$spd")))])]), snow:a.action([a.repeat("3+$ex*3", [a.ma("s", "$loop.index+1"), a.fire(a.direction(0, "absolute"), a.speed("$s"), t(a.ga("snowArm"))), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed("$s"), t(a.ga("snowArm")))])]), a.xa]), snowArm:a.action([a.wait(2), 
  a.fire(a.direction(0), q, w), a.xa]), ivs1:a.action([a.wait(10), a.fire(a.direction("$1-1", "relative"), p("$2"), G), a.fire(a.direction("$1+1", "relative"), p("$2"), G), a.xa()])});
  gls2.fa["rikka-3"] = new M.ia({top0:a.action([g(40), a.fire(a.direction(-10), t(a.ga("dummy")), a.offsetX(-90), a.offsetY(-20)), a.repeat(12, [a.fire(a.direction(10, "sequence"), N("$loop.index*0.5"), v, a.offsetX(-90), a.offsetY(-20)), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed(0, "sequence"), v, a.offsetX(-90), a.offsetY(-20))]), g(5)]), g(120)]), top1:a.action([g(40), a.fire(a.direction(-10), t(a.ga("dummy")), a.offsetX(90), a.offsetY(-20)), a.repeat(12, [a.fire(a.direction(10, 
  "sequence"), N("$loop.index*0.5"), v, a.offsetX(90), a.offsetY(-20)), a.repeat(5, [a.fire(a.direction(60, "sequence"), a.speed(0, "sequence"), v, a.offsetX(90), a.offsetY(-20))]), g(5)]), g(120)]), dummy:a.action([a.wait(1), a.xa])});
  gls2.fa["mana-1-1"] = new M.ia({top0:a.action([a.ga("winder", -1)]), top1:a.action([a.ga("winder", 1)]), winder:a.action([a.wait(60), a.repeat(8, [a.fire(a.direction("(-190+$loop.index*30)*$1"), p, P, a.offsetX("-145*$1"), a.offsetY(-5))]), a.repeat(50, [g(20), a.ma("a", "$loop.index*3"), a.repeat(8, [a.fire(a.direction("(-190+$a+$loop.index*30)*$1"), p, P, a.offsetX("-145*$1"), a.offsetY(-5))])])]), top2:a.action([a.wait(60), g(300), a.repeat(7, [a.ma("s", "$loop.index"), a.repeat(5, [a.ma("ss", 
  "($s-$loop.index)*0.5"), d(25, -172.8, 172.8, q("$ss"), E, a.offsetX(-30), a.offsetY(-30))]), g(5), a.repeat(5, [a.ma("ss", "($s-$loop.index)*0.5"), d(25, -172.8, 172.8, q("$ss"), E, a.offsetX(30), a.offsetY(-30))]), g(20), a.repeat(5, [a.ma("ss", "($s-$loop.index)*0.5"), b(26, -180 + 360 / 26 / 2, 180 - 360 / 26 / 2, C("$ss"), v, a.offsetX(30), a.offsetY(-30))]), g(5), a.repeat(5, [a.ma("ss", "($s-$loop.index)*0.5"), b(26, -180 + 360 / 26 / 2, 180 - 360 / 26 / 2, C("$ss"), v, a.offsetX(-30), a.offsetY(-30))]), 
  g(80)])])});
  gls2.fa["mana-1-2"] = new M.ia({top:a.action([a.repeat(5, [a.ma("i", "$loop.index"), a.ma("j", "1/($i+1) * 4"), a.ma("k", "6+$i*3"), c(p("$k"), 0.02, "4+$loop.index*3", function(b) {
    return a.action([a.fire(a.direction("(12-$i)*(-3*$j)"), b, v, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-2*$j)"), b, v, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-1*$j)"), b, E, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*( 0*$j)"), b, v, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+1*$j)"), b, E, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+2*$j)"), b, v, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+3*$j)"), 
    b, v, a.offsetX(-145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-3*$j)"), b, v, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-2*$j)"), b, v, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(-1*$j)"), b, E, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*( 0*$j)"), b, v, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+1*$j)"), b, E, a.offsetX(145), a.offsetY(-50)), a.fire(a.direction("(12-$i)*(+2*$j)"), b, v, a.offsetX(145), a.offsetY(-50)), 
    a.fire(a.direction("(12-$i)*(+3*$j)"), b, v, a.offsetX(145), a.offsetY(-50)), g(5)])
  }), g(30)])])});
  gls2.fa["mana-1-3"] = new M.ia({top0:a.action([g(20), a.ga("fire", -145)]), top1:a.action([g(40), a.ga("fire", 145)]), top2:a.action([a.repeat(8, [g(30), a.ma("d", "-3*($rand*2-1)"), a.ma("s", "$loop.index*2"), a.fire(a.direction("$d"), t(a.ga("dmy"))), a.fire(a.direction(0, "sequence"), C("$s"), P), a.repeat(5, [a.wait(5), a.ma("way", "$loop.index+2"), a.fire(a.direction("-$way*0.8*0.5", "sequence"), C("$s"), P), a.repeat("$way", [a.fire(a.direction(0.8, "sequence"), C("$s"), P)]), a.fire(a.direction("-$way*0.8*0.5", 
  "sequence"), t(a.ga("dmy")))])])]), fire:a.action([a.repeat(8, [d(36, -175, 175, r, v, a.offsetX("$1"), a.offsetY(-50)), g(50)])]), dmy:a.action([a.wait(1), a.xa()])});
  gls2.fa["mana-2-1"] = new M.ia({top0:a.action([a.repeat(60, [a.ma("d", "Math.sin($loop.index*0.3)*40"), a.ma("s", "$loop.index*0.2"), d(7, "-90+$d", "+90+$d", p("$s"), K, a.offsetX(-145), a.offsetY(-50)), g(5)]), a.repeat(60, [a.ma("d", "Math.sin($loop.index*0.3)*40"), a.ma("s", "$loop.index*0.2"), d(7, "-90-$d", "+90-$d", p("$s"), K, a.offsetX(145), a.offsetY(-50)), g(5)])])});
  gls2.fa["mana-2-2"] = new M.ia({top0:a.action([a.repeat(5, [d(15, -90, 90, p(2), v, a.offsetX(-145), a.offsetY(-50)), g(20), d(15, -90, 90, p(2), E, a.offsetX(145), a.offsetY(-50)), g(20), d(14, -90, 90, p(6), v, a.offsetX(-145), a.offsetY(-50)), g(20), d(14, -90, 90, p(6), E, a.offsetX(145), a.offsetY(-50)), g(20)])]), top1:a.action([a.repeat(15, [g(13), d(15, -90, 90, q(3), J), g(10), d(16, -90, 90, q(1), J), g(11), d(10, -90, 90, q(2), J)])]), top2:a.action([a.fire(a.direction(20), A(3), P, 
  a.offsetX(-145), a.offsetY(-50)), a.repeat(100, [a.fire(a.direction(0, "sequence"), A(3), P, a.offsetX(-145), a.offsetY(-50)), g(5)])]), top3:a.action([a.fire(a.direction(-20), A(3), G, a.offsetX(145), a.offsetY(-50)), a.repeat(100, [a.fire(a.direction(0, "sequence"), A(3), G, a.offsetX(145), a.offsetY(-50)), g(5)])])});
  gls2.fa["mana-2-3"] = new M.ia({top0:a.action([a.repeat(30, [a.ma("ptn", "[41, 35, 27, 15, 11][Math.floor($loop.index/5) % 5]"), a.fire(a.direction(180, "absolute"), a.speed(3), I(a.ga("child", "$ptn")), a.offsetX(-185), a.offsetY(-50)), a.fire(a.direction(180, "absolute"), a.speed(3), I(a.ga("child", "$ptn")), a.offsetX(185), a.offsetY(-50)), g(20)])]), child:a.action([a.repeat(999, [a.wait("$1"), a.repeat(8, [a.fire(a.direction("360*$loop.index/8", "absolute"), A, t(a.ga("ring"))), a.fire(a.direction("360*$loop.index/8", 
  "absolute"), A, t(a.ga("ring")))])])]), ring:a.action([a.wait(2), a.fire(a.direction(90, "absolute"), p, J), a.fire(a.direction(-90, "absolute"), p, J), a.xa])});
  gls2.fa["mana-3-1"] = new M.ia({top0:a.action([a.repeat(999, [g(20), a.ma("w", "5+$rand*15"), d("$w", -90, 90, m, J, a.offsetX(-145), a.offsetY(-50)), d("$w", -90, 90, m, J, a.offsetX(145), a.offsetY(-50))])]), top1:a.action([a.repeat(999, [a.repeat(3, [g(43), d(12, -25, -15, q, G), d(12, -5, 5, q, G), d(12, 15, 25, q, G)]), g(55)])])});
  gls2.fa.kanade = new M.ia({top0:a.action([a.repeat(999, [a.repeat(13, [a.fire(a.direction(360 / 14, "sequence"), a.speed(2), t(a.ga("ivs0", -110)), a.offsetY(-350))]), g(20), a.fire(a.direction(360 / 14 - 3, "sequence"), a.speed(2), t(a.ga("ivs0", -110)), a.offsetY(-350))])]), top1:a.action([a.repeat(999, [a.repeat(11, [a.fire(a.direction(30, "sequence"), a.speed(2), t(a.ga("ivs0", 110)), a.offsetY(-350))]), g(20), a.fire(a.direction(36, "sequence"), a.speed(2), t(a.ga("ivs0", 110)), a.offsetY(-350))])]), 
  ivs0:a.action([a.wait(5), a.fire(a.direction("$1", "relative"), m, H), a.xa()]), top2:a.action([a.repeat(999, [d(3, -12, 12, m, v, a.offsetY(-350)), d(3, 78, 102, m, v, a.offsetY(-350)), d(3, 168, 192, m, v, a.offsetY(-350)), d(3, 258, 282, m, v, a.offsetY(-350)), g(114)])]), top3:a.action([a.repeat(999, [d(3, -3, 3, p, P, a.offsetY(-350)), g(91)])])});
  gls2.fa.rery = new M.ia({top:a.action([g("$rand*120"), a.repeat(999, [g(180), a.repeat(10, [a.fire(a.direction(-90), a.speed(2), t(a.ga("fire", 90, "$loop.index"))), a.fire(a.direction(90), a.speed(2), t(a.ga("fire", -90, "$loop.index")))])])]), fire:a.action([a.wait(3), a.fire(a.direction("$1", "relative"), q("$2*0.25"), E), a.xa()])});
  gls2.fa.fary = new M.ia({top:a.action([g("$rand*120"), a.repeat(999, [g(120), a.repeat(3, [d(3, -30, 30, p, u), g(15)])])])});
  gls2.fa.sory = new M.ia({top:a.action([a.ma("d", "$rand<0.5 ? -5 : 5"), a.ma("s", "1+$rand*0.5"), a.repeat(999, [a.fire(a.direction("360/8+$d*$s", "sequence"), a.speed(2), t(a.ga("fire"))), a.repeat(3, [a.fire(a.direction(90, "sequence"), a.speed(2), t(a.ga("fire")))]), g(60)])]), fire:a.action([a.wait(2), a.fire(a.direction(0, "relative"), m, J), a.xa()])});
  gls2.fa.lary = new M.ia({top0:a.action([a.fire(a.direction(0, "absolute"), a.speed(1), t(a.ga("fire"))), a.repeat(999, [g(10), a.fire(a.direction(98, "sequence"), a.speed(1), t(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), t(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), t(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), t(a.ga("fire")))])]), top1:a.action([a.fire(a.direction(47, "absolute"), a.speed(1), t(a.ga("fire"))), a.repeat(999, [g(10), a.fire(a.direction(76, 
  "sequence"), a.speed(1), t(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), t(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), t(a.ga("fire"))), a.fire(a.direction(90, "sequence"), a.speed(1), t(a.ga("fire")))])]), fire:a.action([a.wait(5), a.fire(a.direction(-1, "relative"), r, G), a.fire(a.direction(1, "relative"), r, G), a.xa()])});
  gls2.fa.shiry = new M.ia({top0:a.action([a.repeat(999, [a.ma("d", "$loop.index*-6"), a.repeat(23, [a.fire(a.direction(15, "sequence"), a.speed(1), t(a.ga("ivs0", "$d")))]), g(30), a.fire(a.direction(16, "sequence"), a.speed(1), t(a.ga("ivs0", "$d")))])]), ivs0:a.action([a.wait(5), a.fire(a.direction("$1", "relative"), r, K), a.xa()])});
  gls2.fa.dodory = new M.ia({top:a.action([g("$rand*40"), a.repeat(999, [g(30), c(q, -0.1, 3, function(b) {
    return a.action([a.fire(b, D)])
  })])])});
  gls2.fa["hibiki-1-1a"] = new M.ia({top0:a.action([g(60), a.repeat(100, [a.ma("d", "Math.sin($loop.index*0.3)*30"), a.fire(a.direction(2, "sequence"), N, t(a.ga("dummy"))), a.repeat(6, [a.fire(a.direction(30, "sequence"), a.speed(5), t(a.ga("ivsR", "$d")), a.offsetY(-25)), a.fire(a.direction(30, "sequence"), a.speed(5), t(a.ga("ivsB", "$d")), a.offsetY(-25))]), g(4)])]), dummy:a.action([a.wait(1), a.xa()]), ivsR:a.action([a.wait(1), a.fire(a.direction("$1", "relative"), p, H), a.xa()]), ivsB:a.action([a.wait(1), 
  a.fire(a.direction("$1", "relative"), p, I), a.xa()]), top1:a.action([g(60), g(120), a.repeat(3, [d(3, -45, -35, m(0.8), G, a.offsetY(-25)), d(3, -25, -15, m(0.8), G, a.offsetY(-25)), d(3, -5, 5, m(0.8), G, a.offsetY(-25)), d(3, 15, 25, m(0.8), G, a.offsetY(-25)), d(3, 35, 45, m(0.8), G, a.offsetY(-25)), g(40), d(3, -55, -45, m(0.8), G, a.offsetY(-25)), d(3, -35, -25, m(0.8), G, a.offsetY(-25)), d(3, -15, -5, m(0.8), G, a.offsetY(-25)), d(3, 5, 15, m(0.8), G, a.offsetY(-25)), d(3, 25, 35, m(0.8), 
  G, a.offsetY(-25)), d(3, 45, 55, m(0.8), G, a.offsetY(-25)), g(40)])])});
  gls2.fa["hibiki-1-1b"] = new M.ia({top0:a.action([a.repeat(100, [a.ma("d", "Math.sin($loop.index*0.3)*30"), a.fire(a.direction(2, "sequence"), N, t(a.ga("dummy"))), a.repeat(12, [a.fire(a.direction(15, "sequence"), a.speed(5), t(a.ga("ivsR", "$d")), a.offsetY(-25)), a.fire(a.direction(15, "sequence"), a.speed(5), t(a.ga("ivsB", "$d")), a.offsetY(-25))]), g(4)])]), dummy:a.action([a.wait(1), a.xa()]), ivsR:a.action([a.wait(1), a.fire(a.direction("$1", "relative"), p, H), a.xa()]), ivsB:a.action([a.wait(1), 
  a.fire(a.direction("$1", "relative"), p, I), a.xa()]), top1:a.action([g(120), a.repeat(3, [d(5, -45, -35, m(0.8), G, a.offsetX(-110), a.offsetY(-70)), d(5, -25, -15, m(0.8), G, a.offsetX(-110), a.offsetY(-70)), d(5, -5, 5, m(0.8), G, a.offsetX(-110), a.offsetY(-70)), d(5, 15, 25, m(0.8), G, a.offsetX(-110), a.offsetY(-70)), d(5, 35, 45, m(0.8), G, a.offsetX(-110), a.offsetY(-70)), g(40), d(5, -45, -35, m(0.8), G, a.offsetX(110), a.offsetY(-70)), d(5, -25, -15, m(0.8), G, a.offsetX(110), a.offsetY(-70)), 
  d(5, -5, 5, m(0.8), G, a.offsetX(110), a.offsetY(-70)), d(5, 15, 25, m(0.8), G, a.offsetX(110), a.offsetY(-70)), d(5, 35, 45, m(0.8), G, a.offsetX(110), a.offsetY(-70)), g(40)])])});
  gls2.fa["hibiki-1-2"] = new M.ia({top0:a.action([g(30), a.fire(a.direction(-20), a.speed(5), t(a.ga("ivs")), a.offsetY(-25)), a.repeat(210, [a.ma("rs", "Math.sin(Math.PI*2 * $loop.index/300 * 1.5)*16"), a.repeat(9, [a.fire(a.direction(36, "sequence"), a.speed(8), t(a.ga("ivs")), a.offsetY(-25))]), a.fire(a.direction("360/10+$rs", "sequence"), a.speed(8), t(a.ga("ivs")), a.offsetY(-25)), g(8)])]), ivs:a.action([a.wait(1), a.fire(a.direction(90, "relative"), q, K), a.xa()]), top1:a.action([g(120), 
  a.repeat(24, [a.ma("s", "$loop.index*0.5"), d(39, -150.74, 148.74, r("$s"), G, a.offsetX(-110), a.offsetY(-70)), d(39, -149.74, 149.74, r("$s"), G, a.offsetX(-110), a.offsetY(-70)), d(39, -148.74, 150.74, r("$s"), G, a.offsetX(-110), a.offsetY(-70)), d(39, -150.74, 148.74, r("$s"), G, a.offsetX(110), a.offsetY(-70)), d(39, -149.74, 149.74, r("$s"), G, a.offsetX(110), a.offsetY(-70)), d(39, -148.74, 150.74, r("$s"), G, a.offsetX(110), a.offsetY(-70)), g(60)])])});
  gls2.fa["hibiki-1-3a"] = new M.ia({top0:a.action([g(30), a.repeat(90, [a.ma("d", "2+(1-$loop.index/90)*60"), a.ma("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), q("$s"), u, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("-$d*1"), q("$s"), u, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), q("$s"), u, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), q("$s"), u, a.offsetX(-110), a.offsetY(-70)), g(6)])]), top1:a.action([g(41), a.repeat(80, [a.ma("d", "2+(1-$loop.index/80)*60"), 
  a.ma("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), q("$s"), u, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("-$d*1"), q("$s"), u, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), q("$s"), u, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), q("$s"), u, a.offsetX(110), a.offsetY(-70)), g(6)])]), top2:a.action([g(53), a.repeat(70, [a.ma("d", "2+(1-$loop.index/70)*60"), a.ma("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), q("$s"), u, a.offsetX(-110), a.offsetY(-70)), 
  a.fire(a.direction("-$d*1"), q("$s"), u, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), q("$s"), u, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), q("$s"), u, a.offsetX(-110), a.offsetY(-70)), g(6)])]), top3:a.action([a.repeat(12, [g(23), a.ma("r", "Math.floor($rand*5)"), c(p, 0.1, 7, function(b) {
    return a.action([a.fire(a.direction(0), b, v, a.offsetX("[-110, -60, 0, 60, -110][$r]"), a.offsetY("[-70, -20, 0, -20, -70][$r]")), g(2)])
  })])])});
  gls2.fa["hibiki-1-3b"] = new M.ia({top0:a.action([g(30), a.repeat(45, [a.ma("d", "-30+$loop.index*2"), a.ma("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), p("$s"), u, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("-$d*1"), p("$s"), u, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), p("$s"), u, a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), p("$s"), u, a.offsetX(-110), a.offsetY(-70)), g(12)])]), top1:a.action([g(41), a.repeat(40, [a.ma("d", "-30+$loop.index*2"), 
  a.ma("s", "$loop.index*0.1"), a.fire(a.direction("-$d*2"), p("$s"), u, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("-$d*1"), p("$s"), u, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("+$d*1"), p("$s"), u, a.offsetX(110), a.offsetY(-70)), a.fire(a.direction("+$d*2"), p("$s"), u, a.offsetX(110), a.offsetY(-70)), g(12)])]), top3:a.action([a.repeat(12, [g(23), a.ma("r", "Math.floor($rand*5)"), c(p, 0.1, 7, function(b) {
    return a.action([a.fire(a.direction(0), b, v, a.offsetX("[-110, -60, 0, 60, -110][$r]"), a.offsetY("[-70, -20, 0, -20, -70][$r]")), g(2)])
  })])])});
  gls2.fa["hibiki-2-1"] = new M.ia({top0:a.action([g(90), a.repeat(7, [g(40), a.fire(r, t(a.ga("bit", "5+$loop.index", "$loop.index*2")), a.offsetX(-110), a.offsetY(-70)), g(40)])]), top1:a.action([g(90), a.repeat(7, [g(80), a.fire(r, t(a.ga("bit", "5+$loop.index", "$loop.index*2")), a.offsetX(110), a.offsetY(-70))])]), bit:a.action([a.wait(5), a.ga("way", "$1", "$2"), a.xa()]), way:a.action([a.fire(a.direction(30), p("$2"), t(a.ga("dummy"))), a.repeat(30, [a.fire(a.direction(-60, "sequence"), p("$2"), 
  v), a.repeat("$1-1", [a.fire(a.direction("60/($1-1)", "sequence"), p("$2"), v)]), a.wait(1)])]), dummy:a.action([a.wait(1), a.xa()])});
  gls2.fa["hibiki-2-2"] = new M.ia({top0:a.action([g(90), a.repeat(5, [a.repeat(8, [d(16, -110, 110, q, F), g(20)]), a.ma("w", "30+$loop.index*10"), d(16, -110, 110, q, w(a.ga("bit", "$w"))), g(20)])]), bit:a.action([g("$1"), a.fire(p, E)])});
  gls2.fa["hibiki-2-3"] = new M.ia({top0:a.action([g(40), a.repeat(30, [a.ma("d", "$loop.index+2"), a.ma("s", "$loop.index*0.8"), d(19, "-180+180/19+$d", "+180-180/19+$d", p("$s"), w), g(17)])]), top1:a.action([g(40), a.repeat(30, [a.ma("d", "$loop.index-2"), a.ma("s", "$loop.index*0.8"), b(19, "-180+180/19+$d", "+180-180/19+$d", p("$s"), K), g(17)])])});
  gls2.fa["hibiki-3-1"] = new M.ia({top0:a.action([g(41), a.repeat(45, [a.ma("s", "$loop.index"), a.repeat(6, [a.fire(a.direction("360/6*$loop.index"), a.speed(5), t(a.ga("ivsB", "360/6*$loop.index", "$s")), a.offsetY(-25))]), a.repeat(6, [a.fire(a.direction("360/6*$loop.index+180/6"), a.speed(5), t(a.ga("ivsR", "360/6*$loop.index+180/6", "$s")), a.offsetY(-25))]), a.wait(1)])]), ivsR:a.action([a.wait(1), a.fire(a.direction("-$1+$rand*10-5", "relative"), N("$2"), K), a.xa()]), ivsB:a.action([a.wait(1), 
  a.fire(a.direction("-$1+$rand*10-5", "relative"), N("$2"), w), a.xa()])});
  gls2.fa["hibiki-3-2"] = new M.ia({top0:a.action([g(90), a.repeat(3, [a.fire(a.direction(-10), C, w(a.ga("bit", "5")), a.offsetX(-110), a.offsetY(-70)), g(45), a.fire(a.direction(10), C, w(a.ga("bit", "7")), a.offsetX(110), a.offsetY(-70)), g(45), a.fire(a.direction(10), C, w(a.ga("bit", "11")), a.offsetX(-110), a.offsetY(-70)), g(45), a.fire(a.direction(-10), C, w(a.ga("bit", "13")), a.offsetX(110), a.offsetY(-70)), g(45)]), g(45), a.fire(a.direction(-10), C, w(a.ga("bit", "17")), a.offsetX(-110), 
  a.offsetY(-70)), a.fire(a.direction(10), C, w(a.ga("bit", "11")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(-10), C, w(a.ga("bit", "7")), a.offsetX(110), a.offsetY(-70)), a.fire(a.direction(10), C, w(a.ga("bit", "5")), a.offsetX(110), a.offsetY(-70)), g(45), a.fire(a.direction(-10), C, w(a.ga("bit", "17")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(10), C, w(a.ga("bit", "11")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(-10), C, w(a.ga("bit", "7")), a.offsetX(110), 
  a.offsetY(-70)), a.fire(a.direction(10), C, w(a.ga("bit", "5")), a.offsetX(110), a.offsetY(-70)), g(45), a.fire(a.direction(-10), C, w(a.ga("bit", "17")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(10), C, w(a.ga("bit", "11")), a.offsetX(-110), a.offsetY(-70)), a.fire(a.direction(-10), C, w(a.ga("bit", "7")), a.offsetX(110), a.offsetY(-70)), a.fire(a.direction(10), C, w(a.ga("bit", "5")), a.offsetX(110), a.offsetY(-70))]), bit:a.action([a.wait("$1"), a.repeat(999, [g(5), a.fire(a.direction(-90, 
  "relative"), p, D), a.fire(a.direction(90, "relative"), p, D)])])});
  gls2.fa.dory = new M.ia({top:a.action([a.repeat(999, [g(80), a.ga("attack0"), g(160), a.ga("attack1"), g(80)])]), attack0:a.action([a.fire(a.direction(0), a.speed(5), t(a.ga("ivs"))), a.repeat(20, [a.repeat(4, [g(2), a.fire(a.direction(72, "sequence"), a.speed(5), t(a.ga("ivs")))]), a.fire(a.direction(83, "sequence"), a.speed(5), t(a.ga("ivs")))])]), attack1:a.action([a.fire(a.direction(0), a.speed(5), t(a.ga("ivs"))), a.repeat(20, [a.repeat(4, [g(2), a.fire(a.direction(72, "sequence"), a.speed(5), 
  t(a.ga("ivs")))]), a.fire(a.direction(61, "sequence"), a.speed(5), t(a.ga("ivs")))])]), ivs:a.action([a.wait(1), a.fire(a.direction(0, "relative"), r, u), a.xa()])});
  gls2.fa.miry = new M.ia({top:a.action([a.repeat(999, [g(160), a.ga("attack0"), g(160), a.ga("attack1")])]), attack0:a.action([a.fire(a.direction(0), a.speed(5), t(a.ga("ivs"))), a.repeat(20, [a.repeat(4, [g(2), a.fire(a.direction(72, "sequence"), a.speed(5), t(a.ga("ivs")))]), a.fire(a.direction(83, "sequence"), a.speed(5), t(a.ga("ivs")))])]), attack1:a.action([a.fire(a.direction(0), a.speed(5), t(a.ga("ivs"))), a.repeat(20, [a.repeat(4, [g(2), a.fire(a.direction(72, "sequence"), a.speed(5), t(a.ga("ivs")))]), 
  a.fire(a.direction(61, "sequence"), a.speed(5), t(a.ga("ivs")))])]), ivs:a.action([a.wait(1), a.fire(a.direction(0, "relative"), r, D), a.xa()])});
  gls2.fa["setsuna-1"] = new M.ia({top0:a.action([a.wait(60), a.repeat(5, [d(3, -2, 2, r(1.8), D, a.offsetX(0), a.offsetX(0)), d(3, -4, 4, r(1.4), D, a.offsetX(0), a.offsetX(0)), d(3, -6, 6, r(1), D, a.offsetX(0), a.offsetX(0)), d(3, -8, 8, r(0.6), D, a.offsetX(0), a.offsetX(0)), g(110)])]), top1:a.action([a.wait(60), a.repeat(10, [d(4, -40, 40, p, K, a.offsetX(0), a.offsetY(30)), g(15), d(5, -40, 40, r, K, a.offsetX(0), a.offsetY(30)), g(15), d(6, -40, 40, m, K, a.offsetX(0), a.offsetY(30)), g(15)])])});
  gls2.fa["love-1-1"] = new M.ia({top0:a.action([g(30), a.fire(a.direction(-10), t, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(17, "sequence"), m("$loop.index*0.1"), v, a.offsetX(-105), a.offsetY(0)), g(1)]), g(30), a.fire(a.direction(-10), t, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(-17, "sequence"), m("$loop.index*0.1"), E, a.offsetX(-105), a.offsetY(0)), g(1)]), g(120)]), top1:a.action([a.wait(30), a.fire(a.direction(-10), t, a.offsetX(0), a.offsetY(0)), 
  a.repeat(90, [a.fire(a.direction(11, "sequence"), m("$loop.index*0.1"), v, a.offsetX(-85), a.offsetY(0)), g(1)]), g(30), a.fire(a.direction(-10), t, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(-11, "sequence"), m("$loop.index*0.1"), E, a.offsetX(-85), a.offsetY(0)), g(1)])]), top2:a.action([a.wait(30), a.fire(a.direction(-10), t, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(-19, "sequence"), m("$loop.index*0.1"), v, a.offsetX(105), a.offsetY(0)), g(1)]), g(30), 
  a.fire(a.direction(-10), t, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(19, "sequence"), m("$loop.index*0.1"), E, a.offsetX(105), a.offsetY(0)), g(1)])]), top3:a.action([a.wait(30), a.fire(a.direction(-10), t, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(-23, "sequence"), m("$loop.index*0.1"), v, a.offsetX(85), a.offsetY(0)), g(1)]), g(30), a.fire(a.direction(-10), t, a.offsetX(0), a.offsetY(0)), a.repeat(90, [a.fire(a.direction(23, "sequence"), m("$loop.index*0.1"), 
  E, a.offsetX(85), a.offsetY(0)), g(1)])])});
  gls2.fa["love-1-2"] = new M.ia({top0:a.action([a.wait(30), a.repeat(4, [c(r, 0.01, 6, function(b) {
    return a.action([d(5, -80, 80, b, P, a.offsetX(-85), a.offsetY(0)), d(5, -80, 80, b, P, a.offsetX(85), a.offsetY(0)), a.wait(3)])
  }), g(90)])]), top1:a.action([a.wait(60), a.repeat(4, [c(r, 0.01, 6, function(b) {
    return a.action([d(6, -50, 50, b, G, a.offsetX(-170), a.offsetY(40)), d(6, -50, 50, b, G, a.offsetX(170), a.offsetY(40)), a.wait(3)])
  }), g(90)])]), top2:a.action([a.wait(60), a.repeat(10, [d(6, -40, 40, r, H, a.offsetX(-130), a.offsetY(30)), g(45), d(7, -40, 40, m, H, a.offsetX(-130), a.offsetY(30)), g(45)])]), top3:a.action([a.wait(60), a.repeat(10, [d(6, -40, 40, r, H, a.offsetX(130), a.offsetY(30)), g(45), d(7, -40, 40, m, H, a.offsetX(130), a.offsetY(30)), g(45)])])});
  gls2.fa["love-1-3"] = new M.ia({top0:a.action([a.wait(120), a.repeat(2, [a.repeat(5, [a.repeat(10, [a.ma("c", "$loop.index*10"), d(2, "-30+$c", "30-$c", p(5), Y, a.offsetX(0), a.offsetY(0)), g(6)])]), g(120)])]), top1:a.action([a.wait(60), a.repeat(10, [d(4, -40, 40, r, H, a.offsetX(-130), a.offsetY(30)), g(30), d(5, -40, 40, m, H, a.offsetX(-130), a.offsetY(30)), g(30)])]), top2:a.action([a.wait(60), a.repeat(10, [d(4, -40, 40, r, H, a.offsetX(130), a.offsetY(30)), g(30), d(5, -40, 40, m, H, a.offsetX(130), 
  a.offsetY(30)), g(30)])])});
  gls2.fa["love-2-1"] = new M.ia({top0:a.action([a.wait(60), a.repeat(2, [a.repeat(5, [a.repeat(36, [a.fire(a.direction(" $loop.index*10"), r, w, a.offsetX(-130), a.offsetY(40)), a.fire(a.direction("-$loop.index*10"), r, w, a.offsetX(130), a.offsetY(40))]), g(12)]), g(120)])]), top1:a.action([a.wait(30), a.repeat(2, [a.repeat(5, [a.repeat(36, [a.fire(a.direction(" $loop.index*10"), m, K, a.offsetX(0), a.offsetY(-30))]), g(12)]), g(120)])])});
  gls2.fa["love-2-2"] = new M.ia({top0:a.action([a.wait(60), a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(60, [a.fire(a.direction(21, "sequence"), m, E, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), m, E, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), m, E, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), m, E, a.offsetX(-85), a.offsetY(0)), g(10)])]), top1:a.action([a.wait(60), a.fire(a.direction(0), m, D, a.offsetX(0), 
  a.ra(j)), a.repeat(60, [a.fire(a.direction(-21, "sequence"), m, E, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), m, E, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), m, E, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(90, "sequence"), m, E, a.offsetX(85), a.offsetY(0)), g(10)])]), top9:a.action([a.wait(200), a.repeat(5, [a.repeat(36, [a.fire(a.direction("$loop.index*10"), a.speed(1), t(a.ga("seed")))]), g(120)])]), seed:a.action([a.wait(10), a.pd(a.speed(0), 
  30), a.wait(30), d(5, -40, 40, r, Y), a.xa])});
  gls2.fa["love-2-3"] = new M.ia({top8:a.action([a.wait(120), a.repeat(3, [a.repeat(5, [a.fire(a.direction("-$loop.index*30", "absolute"), m, w(a.ga("seed1")), a.offsetX(-130), a.offsetY(40)), g(6), a.fire(a.direction("-$loop.index*30+15", "absolute"), m, K(a.ga("seed2")), a.offsetX(-130), a.offsetY(40)), g(6)]), g(90)])]), top9:a.action([a.wait(120), a.repeat(3, [a.repeat(5, [a.fire(a.direction("$loop.index*30", "absolute"), m, w(a.ga("seed1")), a.offsetX(130), a.offsetY(40)), g(6), a.fire(a.direction("$loop.index*30+15", 
  "absolute"), m, K(a.ga("seed2")), a.offsetX(130), a.offsetY(40)), g(6)]), g(90)])]), seed1:a.action([a.wait(10), a.pd(a.speed(0), 90), a.wait(60), a.fire(a.direction(0), p, t), a.repeat(5, [a.fire(a.direction(-30, "sequence"), q, E), a.fire(a.direction(20, "sequence"), q, E), a.fire(a.direction(20, "sequence"), q, E), a.fire(a.direction(20, "sequence"), q, E), a.fire(a.direction(-30, "sequence"), q, t), g(4)]), a.xa]), seed2:a.action([a.wait(10), a.pd(a.speed(0), 90), a.wait(120), a.fire(a.direction(0), 
  p, t), a.repeat(5, [a.fire(a.direction(-30, "sequence"), q, v), a.fire(a.direction(15, "sequence"), q, v), a.fire(a.direction(15, "sequence"), q, v), a.fire(a.direction(15, "sequence"), q, v), a.fire(a.direction(15, "sequence"), q, v), a.fire(a.direction(-30, "sequence"), q, t), g(4)]), a.xa])});
  gls2.fa["love-3-1"] = new M.ia({top0:a.action([a.wait(60), a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(5, [a.repeat(30, [a.fire(a.direction(11, "sequence"), m, I, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(-85), a.offsetY(0)), 
  a.fire(a.direction(45, "sequence"), m, I, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(-85), a.offsetY(0)), g(3)]), g(10)])]), top1:a.action([a.wait(60), a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(5, [a.repeat(30, [a.fire(a.direction(-11, "sequence"), m, I, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, 
  "sequence"), m, I, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, I, a.offsetX(85), a.offsetY(0)), g(3)])]), g(10)]), top2:a.action([a.wait(120), a.repeat(2, [c(q, 0.005, 10, function(b) {
    return a.action([d(20, -90, 90, b, u, a.offsetX(-85), a.offsetY(0)), d(20, -90, 90, b, u, a.offsetX(85), a.offsetY(0))])
  }), g(240)])])});
  gls2.fa["love-3-2"] = new M.ia({top0:a.action([a.wait(60), a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(5, [a.repeat(30, [a.fire(a.direction(-11, "sequence"), m, H, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(-85), a.offsetY(0)), 
  a.fire(a.direction(45, "sequence"), m, H, a.offsetX(-85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(-85), a.offsetY(0)), g(3)]), g(10)])]), top1:a.action([a.wait(60), a.fire(a.direction(0), m, D, a.offsetX(0), a.ra(j)), a.repeat(5, [a.repeat(30, [a.fire(a.direction(11, "sequence"), m, H, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, 
  "sequence"), m, H, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(85), a.offsetY(0)), a.fire(a.direction(45, "sequence"), m, H, a.offsetX(85), a.offsetY(0)), g(3)])]), g(10)]), top2:a.action([a.wait(120), a.repeat(2, [c(q, 0.002, 10, function(b) {
    return a.action([d(21, -90, 90, b, D, a.offsetX(-85), a.offsetY(0)), d(21, -90, 90, b, D, a.offsetX(85), a.offsetY(0))])
  }), g(240)])])});
  gls2.fa["ayumi-1-1"] = new M.ia({top0:a.action([a.wait(30), a.fire(a.direction(0, "absolute"), s, t), a.repeat(60, [a.fire(a.direction("360/18 + $loop.index * 0.06", "sequence"), a.speed(0, "sequence"), G), a.repeat(17, [a.fire(a.direction("360/18", "sequence"), a.speed(0, "sequence"), G)]), g(6)]), g(90)]), top1:a.action([a.wait(33), a.fire(a.direction(0, "absolute"), s, t), a.repeat(60, [a.fire(a.direction("360/18 + $loop.index * -0.06", "sequence"), a.speed(0, "sequence"), P), a.repeat(17, [a.fire(a.direction("360/18", 
  "sequence"), a.speed(0, "sequence"), P)]), g(6)]), g(90)])});
  gls2.fa["ayumi-1-2"] = new M.ia({top0:a.action([a.wait(30), a.action([-47, -42, 12, 1, 31, 2, -81, 0, -78, -32, 2, -80, 40, -89, -55, 18, -46, 16, -89, 57].map(function(c) {
    return a.action([b(20, c - 30 + 0, c + 30 + 0, r, w), b(20, c - 30 + 90, c + 30 + 90, r, w), b(20, c - 30 + 180, c + 30 + 180, r, w), b(20, c - 30 + 270, c + 30 + 270, r, w), g(40)])
  })), g(90)]), top1:a.action([a.wait(30), a.fire(a.direction(0, "absolute"), C, t), a.repeat(110, [a.fire(a.direction("360/9 + 5", "sequence"), a.speed(0, "sequence"), a.offsetX(-20), u), a.repeat(8, [a.fire(a.direction("360/9", "sequence"), a.speed(0, "sequence"), a.offsetX(-20), u)]), g(6)]), g(90)]), top2:a.action([a.wait(30), a.fire(a.direction(0, "absolute"), C, t), a.repeat(110, [a.fire(a.direction("360/9 - 5", "sequence"), a.speed(0, "sequence"), a.offsetX(20), u), a.repeat(8, [a.fire(a.direction("360/9", 
  "sequence"), a.speed(0, "sequence"), a.offsetX(20), u)]), g(6)]), g(90)])});
  gls2.fa["ayumi-1-3"] = new M.ia({top0:a.action([a.wait(30), a.action([107, 103, 99, 79, 88, 104, 98, 81].map(function(b, c) {
    return 0 === c % 2 ? a.action([a.fire(a.direction(-b, "absolute"), a.speed(4), w(a.ga("seed", "(2+$rand*10)", c + 5))), a.wait(60 - 2 * c)]) : a.action([a.fire(a.direction(+b, "absolute"), a.speed(4), w(a.ga("seed", "(2+$rand*10)", c + 5))), a.wait(60 - 2 * c)])
  })), a.wait(24), a.wait(90)]), seed:a.action([a.wait("$1"), a.pd(a.speed(0.4), 1), a.wait(20), a.fire(a.direction(-20), q, t), a.repeat("$2", [a.repeat(3, [a.fire(a.direction(5, "sequence"), a.speed(0, "sequence"), G), a.fire(a.direction(5, "sequence"), a.speed(0, "sequence"), P)]), a.fire(a.direction(5, "sequence"), a.speed(0, "sequence"), G), a.fire(a.direction(-20), a.speed(0, "sequence"), t), g(3)])])});
  gls2.fa["ayumi-1-4"] = new M.ia({top0:a.action([a.wait(30), a.fire(a.direction(0), A, t), a.repeat(70, [a.repeat(6, [a.fire(a.direction(60, "sequence"), a.speed(0, "sequence"), F)]), a.fire(a.direction(-1, "sequence"), a.speed(0, "sequence"), t), g(3)]), a.wait(90)]), top1:a.action([a.wait(25), a.fire(a.direction(0), A, t), a.repeat(70, [a.repeat(5, [a.fire(a.direction(72, "sequence"), a.speed(0, "sequence"), B)]), a.fire(a.direction(1.3, "sequence"), a.speed(0, "sequence"), t), g(3)]), a.wait(90)]), 
  top2:a.action([a.wait(25), a.repeat(3, [a.wait(41), d(41, -180, 180, function(b) {
    return a.speed("((0.1+$difficulty)*1.6 - $bg*0.05 + $ex*0.2)*1.5 + 2.30 + (" + (b === i ? 0 : b) + "*0.1)")
  }, F)]), a.wait(90)]), top3:a.action([a.wait(25), a.repeat(3, [a.wait(48), d(41, -180, 180, s(2), B)]), a.wait(90)])});
  gls2.fa.setup = function() {
    for(var a = 0;2E3 > a;a++) {
      V.push(gls2.Wa())
    }
    a = gls2.fa.Of = tm.Ob.Dd.We;
    a.Dh = function(a) {
      return!(a instanceof gls2.Wa) || !(-50 > a.x || 530 < a.x || -50 > a.y || 690 < a.y)
    };
    a.Si = function(a) {
      var b = V.shift(0);
      if(b) {
        return b.rotation = 0, b.qa = 5 * (a.qa || 1), S.push(b), b.setFrameIndex(a.frame === i ? 1 : a.frame), b.blendMode = "source-over", a.gc ? (b.scaleX = 1 * (gls2.core.Cb ? 1.5 : 1), b.scaleY = 1 * (gls2.core.Cb ? 1.5 : 1), b.Ad = z) : (a.hf ? (b.scaleX = 0.4 * (gls2.core.Cb ? 1.5 : 1), b.scaleY = 2.5 * (gls2.core.Cb ? 1.5 : 1)) : a.Yb ? (b.scaleX = 1 * (gls2.core.Cb ? 1.5 : 1), b.scaleY = 10 * (gls2.core.Cb ? 1.5 : 1), b.blendMode = "lighter") : (b.scaleX = 0.8 * (gls2.core.Cb ? 1.5 : 1), 
        b.scaleY = 2 * (gls2.core.Cb ? 1.5 : 1)), b.Ad = j), b.visible = a.visible === z ? z : j, b.gc = !!a.gc, b.hf = !!a.hf, b.Yb = !!a.Yb, b.Va = ~~a.Va, b
      }
      console.warn("\u5f3e\u304c\u8db3\u308a\u306a\u3044\uff01")
    };
    a.Zi = function(a) {
      return-0 <= a.x && 480 > a.x && -0 <= a.y && 640 > a.y
    };
    a.Yd = 3;
    M.Qa.ob.$rank = 0;
    M.Qa.ob.$hyperOff = 1;
    M.Qa.ob.$bg = 0;
    M.Qa.ob.$ex = 0
  };
  gls2.fa.erase = function(a, b, c) {
    for(var d = [].concat(S), f = 0, g = d.length;f < g;f++) {
      if(a) {
        var k = gls2.Li(!!b);
        k.setPosition(d[f].x, d[f].y);
        c && (k.Rd = j)
      }
      d[f].Ca()
    }
  };
  gls2.fa.Se = function() {
    for(var a = [].concat(S), b = 0, c = a.length;b < c;b++) {
      a[b].remove()
    }
  };
  gls2.fa.bl = function(a) {
    var b = gls2.fa.fireback.Ve();
    a.on("enterframe", b)
  };
  gls2.fa.fireback = new M.ia({top:a.action([a.fire(a.direction(Math.randf(-2, 2)), a.speed(1.2), R), a.fire(a.direction(0, "sequence"), a.speed(1.17), R), a.fire(a.direction(0, "sequence"), a.speed(1.14), R), a.fire(a.direction(0, "sequence"), a.speed(1.11), R), a.fire(a.direction(0, "sequence"), a.speed(1.08), R)])});
  gls2.Wa = tm.createClass({superClass:tm.display.Sprite, qa:0, gc:z, hf:z, Va:0, init:function() {
    this.superInit("tex0", 20, 20);
    this.boundingRadius = 3;
    this.addEventListener("removed", function() {
      this.clearEventListener("enterframe");
      V.push(this);
      var a = S.indexOf(this);
      -1 !== a && S.splice(a, 1)
    })
  }, update:function() {
    this.gc && (this.rotation += 15)
  }, Ca:function() {
    var a = gls2.Wa.Pk().setScale(0.1, 0.1).setPosition(this.x, this.y);
    a.addEventListener("enterframe", function() {
      this.scaleX += 0.1;
      this.scaleY += 0.1
    });
    a.addChildTo(this.parent);
    this.remove();
    return a
  }});
  gls2.Wa.Pk = function() {
    W === l && (W = gls2.Ma(10, 1, 0.92, tm.graphics.Canvas().resize(10, 10).setFillStyle(tm.graphics.RadialGradient(5, 5, 0, 5, 5, 5).addColorStopList([{offset:0, color:"rgba(255,100,100,0.0)"}, {offset:0.3, color:"rgba(255,100,100,0.0)"}, {offset:0.7, color:"rgba(255,100,180,1.0)"}, {offset:0.9, color:"rgba(255,180,180,1.0)"}, {offset:1, color:"rgba(255,100,100,0.0)"}]).toStyle()).fillRect(0, 0, 10, 10).element));
    return W.clone()
  };
  var W = l, V = gls2.fa.fm = [], S = gls2.Wa.gb = []
})();
gls2.la = {};
gls2.la.clamp = function(c, b, f) {
  return c < b ? b : c > f ? f : c
};
gls2.la.DEG_TO_RAD = Math.PI / 180;
gls2.la.RAD_TO_DEG = 180 / Math.PI;
gls2.la.degToRad = function(c) {
  return c * gls2.la.DEG_TO_RAD
};
gls2.la.radToDeg = function(c) {
  return c * gls2.la.RAD_TO_DEG
};
gls2.la.rand = function(c, b) {
  return window.Math.floor(window.Math.random() * (b - c + 1)) + c
};
gls2.la.randf = function(c, b) {
  return window.Math.random() * (b - c) + c
};
gls2.la.magnitude = function() {
  return Math.sqrt(gls2.la.magnitudeSq.apply(l, arguments))
};
gls2.la.magnitudeSq = function() {
  for(var c = 0, b = 0, f = arguments.length;b < f;++b) {
    c += arguments[b] * arguments[b]
  }
  return c
};
gls2.la.inside = function(c, b, f) {
  return c >= b && c <= f
};

