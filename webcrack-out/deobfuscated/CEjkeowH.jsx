import { r as e } from "./CcyWYbDU.js";
import { i as t, n, r } from "./B0PXqnjO.js";
import { i as _Component8, r as _Component4 } from "./rX6k7kUM.js";
import { D as _Component1, F as s, H as c, I as l, L as u, N as d, P as f, U as p, V as m, W as h, d as g, dt as _, ht as _Component7, mt as _Component5, ot as _Component3, r as x, u as S } from "./BcpSTgJi.js";
import { a as C, i as w, n as T, r as E, t as ee } from "./Dmzpm_-y.js";
var D = e(t(), 1);
var te = (0, D.createContext)({});
function O(e) {
  let t = (0, D.useRef)(null);
  if (t.current === null) {
    t.current = e();
  }
  return t.current;
}
var ne = D.useLayoutEffect;
var re = (0, D.createContext)(null);
function ie(e, t) {
  if (e.indexOf(t) === -1) {
    e.push(t);
  }
}
function ae(e, t) {
  let n = e.indexOf(t);
  if (n > -1) {
    e.splice(n, 1);
  }
}
var k = (e, t, n) => n > t ? t : n < e ? e : n;
var A = {};
var oe = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
var se = e => typeof e == `object` && !!e;
var ce = e => /^0[^.\s]+$/u.test(e);
function le(e) {
  let t;
  return () => {
    if (t === undefined) {
      t = e();
    }
    return t;
  };
}
var j = e => e;
var ue = (...e) => e.reduce((e, t) => n => t(e(n)));
var de = (e, t, n) => {
  let r = t - e;
  if (r) {
    return (n - e) / r;
  } else {
    return 1;
  }
};
var fe = class {
  constructor() {
    this.subscriptions = [];
  }
  add(e) {
    ie(this.subscriptions, e);
    return () => this.remove(e);
  }
  remove(e) {
    ae(this.subscriptions, e);
  }
  notify(e, t, n) {
    let r = this.subscriptions.length;
    if (r) {
      if (r === 1) {
        this.subscriptions[0](e, t, n);
      } else {
        for (let i = 0; i < r; i++) {
          let r = this.subscriptions[i];
          if (r) {
            r(e, t, n);
          }
        }
      }
    }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
};
var M = e => e * 1000;
var N = e => e / 1000;
var pe = (e, t) => t ? 1000 / t * e : 0;
var me = (e, t, n) => {
  let r = t - e;
  return ((n - e) % r + r) % r + e;
};
var he = (e, t, n) => e * ((1 - e) * 3 * ((1 - e) * t + e * n) + e * e);
function ge(e, t, n, r) {
  if (e === t && n === r) {
    return j;
  } else {
    return i => {
      let a = 0;
      let o = 1;
      let s = i;
      for (let t = 0;; t++) {
        if (!(s >= a) || !(s <= o)) {
          s = (a + o) / 2;
        }
        let r = he(s, e, n) - i;
        if (r * r < 1e-28 || t === 40) {
          break;
        }
        if (r > 0) {
          o = s;
        } else {
          a = s;
        }
        s -= r * 1e-7 / (he(s + 1e-7, e, n) - i - r);
      }
      return he(s, t, r);
    };
  }
}
var _e = e => t => t <= 0.5 ? e(t * 2) / 2 : (2 - e((1 - t) * 2)) / 2;
var ve = e => t => 1 - e(1 - t);
var ye = ge(0.33, 1.53, 0.69, 0.99);
var be = ve(ye);
var xe = _e(be);
var Se = e => e >= 1 ? 1 : (e *= 2) < 1 ? be(e) * 0.5 : (2 - 2 ** ((e - 1) * -10)) * 0.5;
var Ce = e => 1 - Math.sin(Math.acos(e));
var we = ve(Ce);
var Te = _e(Ce);
var Ee = ge(0.42, 0, 1, 1);
var De = ge(0, 0, 0.58, 1);
var Oe = ge(0.42, 0, 0.58, 1);
var ke = e => Array.isArray(e) && typeof e[0] != `number`;
function Ae(e, t) {
  if (ke(e)) {
    return e[me(0, e.length, t)];
  } else {
    return e;
  }
}
var je = e => Array.isArray(e) && typeof e[0] == `number`;
var Me = {
  linear: j,
  easeIn: Ee,
  easeInOut: Oe,
  easeOut: De,
  circIn: Ce,
  circInOut: Te,
  circOut: we,
  backIn: be,
  backInOut: xe,
  backOut: ye,
  anticipate: Se
};
var Ne = e => typeof e == `string`;
var Pe = e => {
  if (je(e)) {
    let [t, n, r, i] = e;
    return ge(t, n, r, i);
  }
  if (Ne(e)) {
    return Me[e];
  } else {
    return e;
  }
};
var P = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
};
var Fe;
function Ie() {
  Fe = undefined;
}
var F = {
  now: () => {
    if (Fe === undefined) {
      F.set(P.isProcessing || A.useManualTiming ? P.timestamp : performance.now());
    }
    return Fe;
  },
  set: e => {
    Fe = e;
    queueMicrotask(Ie);
  }
};
var Le = e => Math.round(e * 100000) / 100000;
var Re = e => t => typeof t == `string` && t.startsWith(e);
var ze = Re(`--`);
var Be = Re(`var(--`);
var Ve = e => Be(e) ? He.test(e.split(`/*`)[0].trim()) : false;
var He = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Ue(e) {
  return typeof e == `string` && e.split(`/*`)[0].includes(`var(--`);
}
var We = {
  test: e => typeof e == `number`,
  parse: parseFloat,
  transform: e => e
};
var Ge = {
  ...We,
  transform: e => k(0, 1, e)
};
var Ke = {
  ...We,
  default: 1
};
var qe = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Je(e) {
  return e == null;
}
var Ye = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu;
var Xe = (e, t) => n => typeof n == `string` && !!Ye.test(n) && !!n.startsWith(e) || !!t && !Je(n) && !!Object.prototype.hasOwnProperty.call(n, t);
var Ze = (e, t, n) => r => {
  if (typeof r != `string`) {
    return r;
  }
  let [i, a, o, s] = r.match(qe);
  return {
    [e]: parseFloat(i),
    [t]: parseFloat(a),
    [n]: parseFloat(o),
    alpha: s === undefined ? 1 : parseFloat(s)
  };
};
var Qe = e => k(0, 255, e);
var $e = {
  ...We,
  transform: e => Math.round(Qe(e))
};
var et = {
  test: Xe(`rgb`, `red`),
  parse: Ze(`red`, `green`, `blue`),
  transform: ({
    red: e,
    green: t,
    blue: n,
    alpha: r = 1
  }) => `rgba(${$e.transform(e)}, ${$e.transform(t)}, ${$e.transform(n)}, ${Le(Ge.transform(r))})`
};
var tt = (e, t, n) => {
  let r = e.substring(1 + t * n, 1 + (t + 1) * n);
  if (n > 1) {
    return r;
  } else {
    return r + r;
  }
};
function nt(e) {
  let t = e.length > 5 ? 2 : 1;
  let n = tt(e, 3, t);
  return {
    red: parseInt(tt(e, 0, t), 16),
    green: parseInt(tt(e, 1, t), 16),
    blue: parseInt(tt(e, 2, t), 16),
    alpha: n ? parseInt(n, 16) / 255 : 1
  };
}
var rt = {
  test: Xe(`#`),
  parse: nt,
  transform: et.transform
};
var it = e => ({
  test: t => typeof t == `string` && t.endsWith(e) && t.split(` `).length === 1,
  parse: parseFloat,
  transform: t => `${t}${e}`
});
var at = it(`deg`);
var I = it(`%`);
var L = it(`px`);
var ot = it(`vh`);
var st = it(`vw`);
var ct = {
  ...I,
  parse: e => I.parse(e) / 100,
  transform: e => I.transform(e * 100)
};
var lt = {
  test: Xe(`hsl`, `hue`),
  parse: Ze(`hue`, `saturation`, `lightness`),
  transform: ({
    hue: e,
    saturation: t,
    lightness: n,
    alpha: r = 1
  }) => `hsla(${Math.round(e)}, ${I.transform(Le(t))}, ${I.transform(Le(n))}, ${Le(Ge.transform(r))})`
};
var R = {
  test: e => et.test(e) || rt.test(e) || lt.test(e),
  parse: e => et.test(e) ? et.parse(e) : lt.test(e) ? lt.parse(e) : rt.parse(e),
  transform: e => typeof e == `string` ? e : e.hasOwnProperty(`red`) ? et.transform(e) : lt.transform(e),
  getAnimatableNone: e => {
    let t = R.parse(e);
    t.alpha = 0;
    return R.transform(t);
  }
};
var ut = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
var dt = new RegExp(qe.source);
var ft = new RegExp(ut.source, `i`);
function pt(e) {
  return isNaN(e) && typeof e == `string` && (dt.test(e) || ft.test(e));
}
var mt = `number`;
var ht = `color`;
var gt = `var`;
var _t = `var(`;
var vt = "${}";
var yt = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)(?![a-z]*\()/giu;
function bt(e) {
  let t = e.toString();
  return dt.test(t) || ft.test(t);
}
function xt(e) {
  let t = e.toString();
  let n = [];
  let r = {
    color: [],
    number: [],
    var: []
  };
  let i = [];
  let a = 0;
  return {
    values: n,
    split: t.replace(yt, e => {
      if (R.test(e)) {
        r.color.push(a);
        i.push(ht);
        n.push(R.parse(e));
      } else if (e.startsWith(_t)) {
        r.var.push(a);
        i.push(gt);
        n.push(e);
      } else {
        r.number.push(a);
        i.push(mt);
        n.push(parseFloat(e));
      }
      ++a;
      return vt;
    }).split(vt),
    indexes: r,
    types: i
  };
}
function St(e) {
  return xt(e).values;
}
function Ct({
  split: e,
  types: t
}) {
  let n = e.length;
  return r => {
    let i = ``;
    for (let a = 0; a < n; a++) {
      i += e[a];
      if (r[a] !== undefined) {
        let e = t[a];
        i += e === mt ? Le(r[a]) : e === ht ? R.transform(r[a]) : r[a];
      }
    }
    return i;
  };
}
function wt(e) {
  return Ct(xt(e));
}
var Tt = e => typeof e == `number` ? 0 : R.test(e) ? R.getAnimatableNone(e) : e;
var Et = (e, t) => typeof e == `number` ? t?.trim().endsWith(`/`) ? e : 0 : Tt(e);
function Dt(e) {
  let t = xt(e);
  return Ct(t)(t.values.map((e, n) => Et(e, t.split[n])));
}
var z = {
  test: pt,
  parse: St,
  createTransformer: wt,
  getAnimatableNone: Dt
};
function Ot(e, t, n) {
  if (n < 0) {
    n += 1;
  }
  if (n > 1) {
    --n;
  }
  if (n < 1 / 6) {
    return e + (t - e) * 6 * n;
  } else if (n < 1 / 2) {
    return t;
  } else if (n < 2 / 3) {
    return e + (t - e) * (2 / 3 - n) * 6;
  } else {
    return e;
  }
}
function kt({
  hue: e,
  saturation: t,
  lightness: n,
  alpha: r
}) {
  e /= 360;
  t /= 100;
  n /= 100;
  let i = 0;
  let a = 0;
  let o = 0;
  if (!t) {
    i = a = o = n;
  } else {
    let r = n < 0.5 ? n * (1 + t) : n + t - n * t;
    let s = n * 2 - r;
    i = Ot(s, r, e + 1 / 3);
    a = Ot(s, r, e);
    o = Ot(s, r, e - 1 / 3);
  }
  return {
    red: Math.round(i * 255),
    green: Math.round(a * 255),
    blue: Math.round(o * 255),
    alpha: r
  };
}
function At(e, t) {
  return n => n > 0 ? t : e;
}
var B = (e, t, n) => e + (t - e) * n;
var jt = (e, t, n) => {
  let r = e * e;
  let i = n * (t * t - r) + r;
  if (i < 0) {
    return 0;
  } else {
    return Math.sqrt(i);
  }
};
var Mt = [rt, et, lt];
var Nt = e => Mt.find(t => t.test(e));
function Pt(e) {
  let t = Nt(e);
  if (!t) {
    return false;
  }
  let n = t.parse(e);
  if (t === lt) {
    n = kt(n);
  }
  return n;
}
var Ft = (e, t) => {
  let n = Pt(e);
  let r = Pt(t);
  if (!n || !r) {
    return At(e, t);
  }
  let i = {
    ...n
  };
  return e => {
    i.red = jt(n.red, r.red, e);
    i.green = jt(n.green, r.green, e);
    i.blue = jt(n.blue, r.blue, e);
    i.alpha = B(n.alpha, r.alpha, e);
    return et.transform(i);
  };
};
var It = new Set([`none`, `hidden`]);
function Lt(e, t) {
  if (It.has(e)) {
    return n => n <= 0 ? e : t;
  } else {
    return n => n >= 1 ? t : e;
  }
}
function Rt(e, t) {
  return n => B(e, t, n);
}
function zt(e) {
  if (typeof e == `number`) {
    return Rt;
  } else if (typeof e == `string`) {
    if (Ve(e)) {
      return At;
    } else if (R.test(e)) {
      return Ft;
    } else {
      return Ut;
    }
  } else if (Array.isArray(e)) {
    return Bt;
  } else if (typeof e == `object`) {
    if (R.test(e)) {
      return Ft;
    } else {
      return Vt;
    }
  } else {
    return At;
  }
}
function Bt(e, t) {
  let n = [...e];
  let r = n.length;
  let i = e.map((e, n) => zt(e)(e, t[n]));
  return e => {
    for (let t = 0; t < r; t++) {
      n[t] = i[t](e);
    }
    return n;
  };
}
function Vt(e, t) {
  let n = {
    ...e,
    ...t
  };
  let r = {};
  for (let i in n) {
    if (e[i] !== undefined && t[i] !== undefined) {
      r[i] = zt(e[i])(e[i], t[i]);
    }
  }
  return e => {
    for (let t in r) {
      n[t] = r[t](e);
    }
    return n;
  };
}
function Ht(e, t) {
  let n = [];
  let r = {
    color: 0,
    var: 0,
    number: 0
  };
  for (let i = 0; i < t.values.length; i++) {
    let a = t.types[i];
    let o = e.indexes[a][r[a]];
    let s = e.values[o] ?? 0;
    n[i] = s;
    r[a]++;
  }
  return n;
}
var Ut = (e, t) => {
  let n = xt(e);
  let r = xt(t);
  if (n.indexes.var.length === r.indexes.var.length && n.indexes.color.length === r.indexes.color.length && n.indexes.number.length >= r.indexes.number.length) {
    if (It.has(e) && !r.values.length || It.has(t) && !n.values.length) {
      return Lt(e, t);
    } else {
      return ue(Bt(Ht(n, r), r.values), Ct(r));
    }
  } else {
    return At(e, t);
  }
};
var Wt = /^(-?(?:\d+(?:\.\d*)?|\.\d+))([a-z%]*)$/iu;
function Gt(e, t) {
  let n = Wt.exec(e);
  if (!n) {
    return;
  }
  let r = Wt.exec(t);
  if (!r || n[2] !== r[2]) {
    return;
  }
  let i = n[2];
  let a = parseFloat(n[1]);
  let o = parseFloat(r[1]);
  return e => Le(B(a, o, e)) + i;
}
function Kt(e, t, n) {
  if (typeof e == `number` && typeof t == `number` && typeof n == `number`) {
    return B(e, t, n);
  }
  if (typeof e == `string` && typeof t == `string`) {
    let n = Gt(e, t);
    if (n) {
      return n;
    }
  }
  return zt(e)(e, t);
}
var qt = [`setup`, `read`, `resolveKeyframes`, `preUpdate`, `update`, `preRender`, `render`, `postRender`];
function Jt(e) {
  let t = new Set();
  let n = new Set();
  let r = false;
  let i = false;
  let a;
  let o = new Set();
  let s = {
    delta: 0,
    timestamp: 0,
    isProcessing: false
  };
  function c(t) {
    if (o.has(t)) {
      n.add(t);
      e();
    }
    (a = t)(s);
  }
  let l = {
    schedule: (e, i = false, s = false) => {
      let c = s && r;
      let l = c ? t : n;
      if (i) {
        o.add(e);
      }
      if (c && e !== a) {
        l.delete(e);
      }
      l.add(e);
      return e;
    },
    cancel: e => {
      n.delete(e);
      o.delete(e);
    },
    process: e => {
      s = e;
      if (r) {
        i = true;
        return;
      }
      r = true;
      let o = t;
      t = n;
      n = o;
      t.forEach(c);
      t.clear();
      a = undefined;
      r = false;
      if (i) {
        i = false;
        l.process(e);
      }
    }
  };
  return l;
}
var Yt = 40;
function Xt(e, t, n = {
  delta: 0,
  timestamp: 0,
  isProcessing: false
}) {
  let r = false;
  let i = true;
  let a = () => r = true;
  let o = qt.reduce((e, t) => {
    e[t] = Jt(a);
    return e;
  }, {});
  let {
    setup: s,
    read: c,
    resolveKeyframes: l,
    preUpdate: u,
    update: d,
    preRender: f,
    render: p,
    postRender: m
  } = o;
  let h = () => {
    let a = A.useManualTiming;
    let o = a ? n.timestamp : performance.now();
    r = false;
    if (!a) {
      n.delta = i ? 1000 / 60 : Math.max(Math.min(o - n.timestamp, Yt), 1);
    }
    n.timestamp = o;
    n.isProcessing = true;
    s.process(n);
    c.process(n);
    l.process(n);
    u.process(n);
    d.process(n);
    f.process(n);
    p.process(n);
    m.process(n);
    n.isProcessing = false;
    if (r && t) {
      i = false;
      e(h);
    }
  };
  let g = () => {
    r = true;
    i = true;
    if (!n.isProcessing) {
      e(h);
    }
  };
  return {
    schedule: qt.reduce((e, t) => {
      let n = o[t];
      e[t] = (e, t = false, i = false) => {
        if (!r) {
          g();
        }
        return n.schedule(e, t, i);
      };
      return e;
    }, {}),
    cancel: e => {
      for (let t = 0; t < qt.length; t++) {
        o[qt[t]].cancel(e);
      }
    },
    state: n,
    steps: o
  };
}
var {
  schedule: V,
  cancel: H,
  steps: Zt
} = Xt(typeof requestAnimationFrame < `u` ? requestAnimationFrame : j, true, P);
var Qt = e => {
  let t = ({
    timestamp: t
  }) => e(t);
  return {
    start: (e = true) => V.update(t, e),
    stop: () => H(t),
    now: () => P.isProcessing ? P.timestamp : F.now()
  };
};
var $t = (e, t, n = 10) => {
  let r = ``;
  let i = Math.max(Math.round(t / n), 2);
  for (let t = 0; t < i; t++) {
    r += `${Math.round(e(t / (i - 1)) * 10000) / 10000}, `;
  }
  return `linear(${r.substring(0, r.length - 2)})`;
};
var en = 20000;
function tn(e, t = 50, n = en, r) {
  let i = 0;
  let a = e.next(i);
  for (r?.push(a.value); !a.done && i < n;) {
    i += t;
    a = e.next(i);
    r?.push(a.value);
  }
  if (i >= n) {
    return Infinity;
  } else {
    return i;
  }
}
function nn(e, t = 100, n) {
  let {
    keyframes: r,
    velocity: i
  } = e;
  let a = r && r[r.length - 1] - r[0];
  let o = n({
    ...e,
    velocity: i && a ? i * t / a : i,
    keyframes: [0, t]
  });
  let s = Math.min(tn(o), en);
  return {
    type: `keyframes`,
    ease: e => o.next(s * e).value / t,
    duration: N(s)
  };
}
var rn = 100;
var an = 10;
var on = 1;
var sn = 800;
var cn = 0.3;
var ln = 0.3;
var un = 0.01;
var dn = 2;
var fn = 0.005;
var pn = 0.5;
var mn = 0.01;
var hn = 10;
var gn = 0.05;
var _n = e => e < 0 ? 1 / Math.max(1 + e, gn) : Math.max(1 - e, gn);
function vn(e, t) {
  if (!(e > 1)) {
    return 1;
  }
  let n = Math.sqrt(e * e - 1);
  let r = e - n;
  let i = e + n;
  let a = n * 2 * Math.exp(-t) * (1 + t);
  return xn(e => i * Math.exp(-r * e) - r * Math.exp(-i * e) - a, e => Math.exp(-i * e) - Math.exp(-r * e), t) / t;
}
function yn(e, t) {
  return e * Math.sqrt(1 - t * t);
}
var bn = 12;
function xn(e, t, n) {
  let r = n;
  for (let n = 1; n < bn; n++) {
    r -= e(r) / t(r);
  }
  return r;
}
var Sn = 0.001;
function Cn({
  duration: e = sn,
  bounce: t = cn
}) {
  let n;
  let r;
  let i = _n(t);
  e = k(mn, hn, N(e));
  if (i < 1) {
    n = t => {
      let n = t * i;
      let r = n * e;
      let a = yn(t, i);
      let o = Math.exp(-r);
      return Sn - n / a * o;
    };
    r = t => {
      let r = t * i * e;
      let a = i * i * t * t * e;
      let o = Math.exp(-r);
      let s = yn(t * t, i);
      return (-n(t) + Sn > 0 ? -1 : 1) * -a * o / s;
    };
  } else {
    n = t => -0.001 + Math.exp(-t * e) * (t * e + 1);
    r = t => Math.exp(-t * e) * (-t * (e * e));
  }
  let a = 5 / e;
  let o = xn(n, r, a);
  let s = o * vn(i, o * e);
  let c = s * s;
  return {
    stiffness: c,
    damping: i * 2 * Math.sqrt(c),
    duration: M(e)
  };
}
var wn = (e, t) => (t ? e >= 0 : e > 0) && e < Infinity;
function Tn(e, t) {
  if (wn(e, t)) {
    return e;
  }
}
function En(e) {
  let t = Tn(e.stiffness);
  let n = Tn(e.damping, true);
  let r = Tn(e.mass);
  let i = {
    ...e,
    stiffness: t ?? rn,
    damping: n ?? an,
    mass: r ?? on,
    isResolvedFromDuration: false,
    isTimeDefined: (t ?? n ?? r) === undefined && (e.duration !== undefined || e.bounce !== undefined)
  };
  if (i.isTimeDefined) {
    if (e.visualDuration) {
      let t = _n(e.bounce || 0);
      let n = Math.PI * 2 / (e.visualDuration * 1.2) * vn(t, Math.PI * 2 / 1.2);
      i.stiffness = n * n;
      i.damping = t * 2 * Math.sqrt(i.stiffness);
    } else {
      Object.assign(i, Cn(i));
      i.isResolvedFromDuration = true;
    }
    if (!wn(i.stiffness) || !wn(i.damping, true)) {
      i.stiffness = rn;
      i.damping = an;
    }
  }
  return i;
}
function Dn(e = ln, t = cn) {
  let n = typeof e == `object` ? e : {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: t
  };
  let r = n.keyframes[0];
  let i = n.keyframes[n.keyframes.length - 1];
  let a = {
    done: false,
    value: r
  };
  let {
    stiffness: o,
    damping: s,
    mass: c,
    duration: l,
    isResolvedFromDuration: u,
    isTimeDefined: d
  } = En({
    ...n
  });
  let f = e => u ? 0 : -N(e);
  let p = s / (Math.sqrt(o * c) * 2);
  let m = N(Math.sqrt(o / c));
  let h = p * m;
  let g = {
    target: i,
    delta: i - r,
    velocity: f(n.velocity) || 0,
    restSpeed: 0,
    restDelta: 0
  };
  let _ = () => {
    let e = Math.abs(g.delta) < 5;
    g.restSpeed = n.restSpeed || (e ? un : dn);
    g.restDelta = n.restDelta || (e ? fn : pn);
  };
  _();
  let v;
  let y;
  let b;
  if (p < 1) {
    let e = yn(m, p);
    let t = {
      A: 0,
      sinC: 0,
      cosC: 0,
      t: -1,
      env: 0,
      sin: 0,
      cos: 0
    };
    b = () => {
      t.A = (g.velocity + h * g.delta) / e;
      t.sinC = h * t.A + g.delta * e;
      t.cosC = h * g.delta - t.A * e;
    };
    let n = n => {
      if (n !== t.t) {
        t.t = n;
        t.env = Math.exp(-h * n);
        t.sin = Math.sin(e * n);
        t.cos = Math.cos(e * n);
      }
    };
    v = e => {
      n(e);
      return g.target - t.env * (t.A * t.sin + g.delta * t.cos);
    };
    y = e => {
      n(e);
      return t.env * (t.sinC * t.sin + t.cosC * t.cos);
    };
  } else if (p === 1) {
    v = e => g.target - Math.exp(-m * e) * (g.delta + (g.velocity + m * g.delta) * e);
    let e = {
      C: 0
    };
    b = () => {
      e.C = g.velocity + m * g.delta;
    };
    y = t => Math.exp(-m * t) * (m * e.C * t - g.velocity);
  } else {
    let e = m * Math.sqrt(p * p - 1);
    let t = h - e;
    let n = h + e;
    let r = e < 1 || d ? Infinity : 300 / e;
    let i = (e, t) => Math.exp(t > r ? (h - e) * r - h * t : -e * t);
    let a = {
      S: 0,
      F: 0
    };
    b = () => {
      let t = (g.velocity + h * g.delta) / e;
      a.S = (g.delta + t) / 2;
      a.F = (g.delta - t) / 2;
    };
    v = e => g.target - a.S * i(t, e) - a.F * i(n, e);
    y = e => t * a.S * i(t, e) + n * a.F * i(n, e);
  }
  b();
  let x = u && l || null;
  let S = {
    calculatedDuration: x,
    retarget: (e, t) => {
      g.target = e[e.length - 1];
      g.delta = g.target - e[0];
      g.velocity = f(t);
      if (!n.restSpeed || !n.restDelta) {
        _();
      }
      S.calculatedDuration = x;
      a.done = false;
      b();
    },
    velocity: e => M(y(e)),
    next: e => {
      let t = v(e);
      if (u) {
        a.done = e >= l;
      } else {
        let n = M(y(e));
        a.done = Math.abs(n) <= g.restSpeed && Math.abs(g.target - t) <= g.restDelta;
      }
      a.value = a.done ? g.target : t;
      return a;
    },
    toString: () => {
      let e = Math.min(tn(S), en);
      let t = $t(t => S.next(e * t).value, e, 30);
      return `${e}ms ${t}`;
    }
  };
  return S;
}
var On = Object.assign(Dn, {
  applyToOptions: e => {
    let t = nn(e, 100, Dn);
    e.ease = t.ease;
    e.duration = M(t.duration);
    e.type = `keyframes`;
    return e;
  }
});
function kn({
  keyframes: e,
  velocity: t = 0,
  power: n = 0.8,
  timeConstant: r = 325,
  bounceDamping: i = 10,
  bounceStiffness: a = 500,
  modifyTarget: o,
  min: s,
  max: c,
  restDelta: l = 0.5,
  restSpeed: u
}) {
  let d = e[0];
  let f = {
    done: false,
    value: d
  };
  let p = e => e < s || e > c;
  let m = e => s === undefined ? c : c === undefined || Math.abs(s - e) < Math.abs(c - e) ? s : c;
  let h = n * t;
  let g = d + h;
  let _ = o ? o(g) : g;
  if (_ !== g) {
    h = _ - d;
  }
  let v = e => -h * Math.exp(-e / r);
  let y = e => {
    let t = v(e);
    f.done = Math.abs(t) <= l;
    f.value = f.done ? _ : e ? _ + t : d;
  };
  let b;
  let x;
  let S = e => {
    if (p(f.value)) {
      b = e;
      x = On({
        keyframes: [f.value, m(f.value)],
        velocity: -v(e) / r * 1000,
        damping: i,
        stiffness: a,
        restDelta: l,
        restSpeed: u
      });
    }
  };
  S(0);
  return {
    calculatedDuration: null,
    next: e => {
      let t = false;
      if (!x && b === undefined) {
        t = true;
        y(e);
        S(e);
      }
      if (b !== undefined && e >= b) {
        return x.next(e - b);
      } else {
        if (!t) {
          y(e);
        }
        return f;
      }
    }
  };
}
function An(e, t, n) {
  let r = [];
  let i = A.mix || Kt;
  let a = e.length - 1;
  for (let o = 0; o < a; o++) {
    let a = n?.(e[o], e[o + 1]) || i(e[o], e[o + 1]);
    if (t) {
      a = ue(Array.isArray(t) ? t[o] || j : t, a);
    }
    r.push(a);
  }
  return r;
}
function jn(e, t, {
  clamp: n = true,
  ease: r,
  mixer: i
} = {}) {
  let a = e.length;
  if (a === 1) {
    return () => t[0];
  }
  if (a === 2 && t[0] === t[1]) {
    return () => t[1];
  }
  let o = e[0] === e[1];
  if (e[0] > e[a - 1]) {
    e = [...e].reverse();
    t = [...t].reverse();
  }
  let s = An(t, r, i);
  let c = s.length;
  let l = n => {
    if (o && n < e[0]) {
      return t[0];
    }
    let r = 0;
    if (c > 1) {
      for (; r < e.length - 2 && !(n < e[r + 1]); r++);
    }
    let i = de(e[r], e[r + 1], n);
    return s[r](i);
  };
  if (n) {
    return t => l(k(e[0], e[a - 1], t));
  } else {
    return l;
  }
}
function Mn(e, t) {
  let n = e[e.length - 1];
  for (let r = 1; r <= t; r++) {
    let i = de(0, t, r);
    e.push(B(n, 1, i));
  }
}
function Nn(e) {
  let t = [0];
  Mn(t, e.length - 1);
  return t;
}
function Pn(e, t) {
  return e.map(e => e * t);
}
function Fn(e, t) {
  return e.map(() => t || Oe).splice(0, e.length - 1);
}
function In({
  duration: e = 300,
  keyframes: t,
  times: n,
  ease: r = `easeInOut`,
  mixer: i
}) {
  let a = typeof t[0] == `number` ? undefined : i;
  let o = ke(r) ? r.map(Pe) : Pe(r) || Oe;
  let s = {
    done: false,
    value: t[0]
  };
  let c = -1;
  if (!a) {
    for (let e = 1; e < t.length; e++) {
      if (t[e] !== t[e - 1]) {
        if (c >= 0) {
          c = -2;
          break;
        }
        c = e - 1;
      }
    }
  }
  if (c >= 0) {
    let r = n && n.length === t.length ? n : Nn(t);
    let i = r[c] * e;
    let a = r[c + 1] * e;
    let l = t[c];
    let u = t[c + 1];
    let d = Array.isArray(o) ? o[c] : o;
    let f = (A.mix || Kt)(l, u);
    let p = t.length - 2;
    return {
      calculatedDuration: e,
      next: t => {
        s.value = c && t < i ? f(0) : c < p && (t >= a || !e) ? typeof u == `number` ? u : f(1) : f(d(t >= a || !e ? 1 : t <= i ? 0 : (t - i) / (a - i)));
        s.done = t >= e;
        return s;
      }
    };
  }
  let l = jn(Pn(n && n.length === t.length ? n : Nn(t), e), t, {
    ease: Array.isArray(o) ? o : Fn(t, o),
    mixer: a
  });
  return {
    calculatedDuration: e,
    next: t => {
      s.value = l(t);
      s.done = t >= e;
      return s;
    }
  };
}
var Ln = 5;
function Rn(e, t, n) {
  let r = Math.max(t - Ln, 0);
  return pe(n - e(r), t - r);
}
function zn(e, t, n = 0) {
  if (t <= 0) {
    return n;
  } else if (e.velocity) {
    return e.velocity(t);
  } else {
    return Rn(t => e.next(t).value, t, e.next(t).value);
  }
}
function Bn(e, {
  repeat: t,
  repeatType: n = `loop`
}, r, i = 1) {
  let a;
  let o;
  let s = 0;
  for (let t = 0; t < e.length; t++) {
    let n = e[t];
    if (n !== null) {
      if (!s++) {
        a = n;
      }
      o = n;
    }
  }
  let c = i < 0 || t && n !== `loop` && t % 2 == 1 ? 0 : s - 1;
  if (!c || r === undefined) {
    if (c) {
      return o;
    } else {
      return a;
    }
  } else {
    return r;
  }
}
var Vn = {
  decay: kn,
  inertia: kn,
  tween: In,
  keyframes: In,
  spring: On
};
function Hn(e) {
  if (typeof e.type == `string`) {
    e.type = Vn[e.type];
  }
}
var Un = 40;
var Wn = (e, t) => t - e > Un && !A.useManualTiming ? t : e;
function Gn(e, t) {
  return {
    kind: e,
    animation: t,
    timestamp: F.now(),
    frameTimestamp: P.timestamp,
    frameIsProcessing: P.isProcessing
  };
}
function Kn(e, t, n) {
  let r = globalThis.__MOTION_INSPECT__;
  if (r) {
    try {
      r({
        ...Gn(`animation-start`, e),
        options: n ? {
          ...t,
          ...n
        } : t
      });
    } catch {}
  }
}
function qn(e, t) {
  let n = globalThis.__MOTION_INSPECT__;
  if (n) {
    try {
      n({
        ...Gn(`layout-animation-start`, e),
        node: t
      });
    } catch {}
  }
}
var Jn = class {
  constructor() {
    this.isResolved = false;
  }
  get finished() {
    this._finished ||= this.isResolved ? Promise.resolve() : new Promise(e => {
      this._resolve = e;
    });
    return this._finished;
  }
  updateFinished() {
    this._finished = this._resolve = undefined;
    this.isResolved = false;
  }
  notifyFinished() {
    this.isResolved = true;
    this._resolve?.();
  }
  then(e, t) {
    return this.finished.then(e, t);
  }
};
var Yn = e => e / 100;
var Xn = e => Math.round(e * 10000) / 10000;
var Zn = class extends Jn {
  constructor(e) {
    super();
    this.state = `idle`;
    this.startTime = null;
    this.isStopped = false;
    this.currentTime = 0;
    this.holdTime = null;
    this.playbackSpeed = 1;
    this.delayState = {
      done: false,
      value: undefined
    };
    this.stop = () => {
      let {
        motionValue: e
      } = this.options;
      let t = F.now();
      if (e && e.updatedAt !== t) {
        this.tick(e.updatedAt = t);
      }
      this.isStopped = true;
      if (this.state !== `idle`) {
        this.teardown();
        this.options.onStop?.();
      }
    };
    this.options = e;
    this.initAnimation();
    this.play();
    if (e.autoplay === false) {
      this.pause();
    }
    Kn(this, this.options);
  }
  initAnimation() {
    let {
      options: e
    } = this;
    Hn(e);
    let {
      type: t = In,
      repeat: n = 0,
      repeatDelay: r = 0,
      repeatType: i,
      velocity: a = 0
    } = e;
    let {
      keyframes: o
    } = e;
    let s = t || In;
    this.mixKeyframes = undefined;
    if (s !== In && typeof o[0] != `number`) {
      this.mixKeyframes = ue(Yn, e.mixer?.(o[0], o[1]) || Kt(o[0], o[1]));
      o = [0, 100];
    }
    let c = s(o === e.keyframes ? e : {
      ...e,
      keyframes: o
    });
    if (i === `mirror`) {
      this.mirroredGenerator = s({
        ...e,
        keyframes: [...o].reverse(),
        velocity: -a
      });
    }
    if (c.calculatedDuration === null) {
      c.calculatedDuration = tn(c);
    }
    let {
      calculatedDuration: l
    } = c;
    this.calculatedDuration = l;
    this.resolvedDuration = l + r;
    this.totalDuration = this.resolvedDuration * (n + 1) - r;
    this.generator = c;
  }
  updateTime(e) {
    this.currentTime = this.holdTime ?? Math.round(e - this.startTime) * this.playbackSpeed;
  }
  tick(e, t = false) {
    let {
      generator: n,
      totalDuration: r,
      calculatedDuration: i
    } = this;
    if (this.startTime === null) {
      return n.next(0);
    }
    let {
      delay: a = 0,
      keyframes: o,
      type: s,
      onUpdate: c,
      finalKeyframe: l
    } = this.options;
    if (this.startTime === this.pendingStartTime) {
      this.startTime = Wn(this.startTime, e);
    }
    this.pendingStartTime = undefined;
    if (this.speed > 0) {
      this.startTime = Math.min(this.startTime, e);
    } else if (this.speed < 0) {
      this.startTime = Math.min(e - r / this.speed, this.startTime);
    }
    if (t) {
      this.currentTime = e;
    } else {
      this.updateTime(e);
    }
    let u = this.currentTime - a * (this.playbackSpeed >= 0 ? 1 : -1);
    let d = this.playbackSpeed >= 0 ? u < 0 : u > r;
    this.currentTime = Math.max(u, 0);
    if (this.state === `finished` && this.holdTime === null) {
      this.currentTime = r;
    }
    let f = this.generate(this.currentTime, d);
    let {
      done: p
    } = f;
    if (!d) {
      p = this.playbackSpeed >= 0 ? i < Infinity ? this.currentTime >= r : p : this.currentTime <= 0;
    }
    let m = this.holdTime === null && (this.state === `finished` || this.state === `running` && p);
    if (m && s !== kn) {
      f.value = Bn(o, this.options, l, this.speed);
    }
    if (c) {
      c(f.value);
    }
    if (m) {
      this.finish();
    }
    return f;
  }
  at(e) {
    return this.holdTime ?? Xn((e - this.startTime) * this.playbackSpeed);
  }
  sampleAt(e, t) {
    let {
      options: n,
      totalDuration: r
    } = this;
    let i = this.at(e) - (n.delay || 0);
    if (i >= r && n.type !== kn) {
      return Bn(n.keyframes, n, t ? undefined : n.finalKeyframe);
    } else {
      return this.generate(Math.max(i, 0), i < 0).value;
    }
  }
  generate(e, t) {
    let {
      generator: n,
      totalDuration: r,
      mixKeyframes: i,
      mirroredGenerator: a,
      resolvedDuration: o
    } = this;
    let {
      keyframes: s,
      repeat: c,
      repeatType: l,
      repeatDelay: u
    } = this.options;
    let d = e;
    let f = n;
    if (c) {
      let t = Math.min(e, r) / o;
      let n = Math.floor(t);
      let i = t % 1;
      if (!i && t >= 1) {
        i = 1;
      }
      if (i === 1) {
        n--;
      }
      n = Math.min(n, c + 1);
      if (n % 2) {
        if (l === `reverse`) {
          i = 1 - i;
          if (u) {
            i -= u / o;
          }
        } else if (l === `mirror`) {
          f = a;
        }
      }
      d = k(0, 1, i) * o;
    }
    let p;
    if (t) {
      this.delayState.value = s[0];
      p = this.delayState;
    } else {
      p = f.next(d);
    }
    if (i && !t) {
      p.value = i(p.value);
    }
    return p;
  }
  get duration() {
    return N(this.calculatedDuration);
  }
  get iterationDuration() {
    return this.duration + N(this.options.delay ?? 0);
  }
  get time() {
    return N(this.currentTime);
  }
  set time(e) {
    if (this.state === `finished`) {
      this.updateFinished();
    }
    e = M(e);
    this.currentTime = e;
    if (this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0) {
      this.holdTime = e;
    } else if (this.driver) {
      this.startTime = this.driver.now() - e / this.playbackSpeed;
    }
    if (this.driver) {
      this.driver.start(false);
    } else {
      this.startTime = 0;
      this.state = `paused`;
      this.holdTime = e;
      this.tick(e);
    }
  }
  getGeneratorVelocity() {
    return zn(this.generator, this.currentTime, this.options.velocity);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    let t = this.playbackSpeed !== e;
    if (t && this.driver) {
      this.updateTime(F.now());
    }
    this.playbackSpeed = e;
    if (t && this.driver) {
      this.time = N(this.currentTime);
    }
  }
  play() {
    if (this.isStopped) {
      return;
    }
    let {
      driver: e = Qt,
      startTime: t
    } = this.options;
    this.driver ||= e(e => this.tick(e));
    this.options.onPlay?.();
    let n = this.driver.now();
    if (this.state === `finished`) {
      this.updateFinished();
      this.startTime = n;
    } else if (this.holdTime === null) {
      this.startTime ||= t ?? (this.pendingStartTime = n);
    } else {
      this.startTime = n - this.holdTime / (this.playbackSpeed || 1);
    }
    if (this.state === `finished` && this.speed < 0) {
      this.startTime += this.calculatedDuration;
    }
    this.holdTime = null;
    this.state = `running`;
    this.driver.start();
  }
  pause() {
    this.state = `paused`;
    this.updateTime(F.now());
    this.holdTime = this.currentTime;
  }
  complete() {
    if (this.state !== `running`) {
      this.play();
    }
    this.state = `finished`;
    this.holdTime = null;
  }
  finish() {
    this.notifyFinished();
    this.teardown();
    this.state = `finished`;
    this.options.onComplete?.();
  }
  cancel() {
    this.holdTime = null;
    this.startTime = 0;
    this.tick(0);
    this.teardown();
    this.options.onCancel?.();
  }
  teardown() {
    this.state = `idle`;
    this.driver?.stop();
    this.driver = undefined;
    this.startTime = this.holdTime = null;
  }
  sample(e) {
    this.startTime = 0;
    return this.tick(e, true);
  }
  attachTimeline(e) {
    if (this.options.allowFlatten) {
      this.options.type = `keyframes`;
      this.options.ease = `linear`;
      this.initAnimation();
    }
    this.driver?.stop();
    return e.observe(this);
  }
};
var Qn = new Set([`brightness`, `contrast`, `saturate`, `opacity`]);
function $n(e) {
  let [t, n] = e.slice(0, -1).split(`(`);
  if (t === `drop-shadow`) {
    return e;
  }
  let [r] = n.match(qe) || [];
  if (!r) {
    return e;
  }
  let i = n.replace(r, ``);
  let a = +!!Qn.has(t);
  if (r !== n) {
    a *= 100;
  }
  return `${t}(${a}${i})`;
}
var er = /\b([a-z-]*)\(.*?\)/gu;
var tr = {
  ...z,
  getAnimatableNone: e => {
    let t = e.match(er);
    if (t) {
      return t.map($n).join(` `);
    } else {
      return e;
    }
  }
};
var nr = {
  ...z,
  getAnimatableNone: e => {
    let t = z.parse(e);
    return z.createTransformer(e)(t.map(e => typeof e == `number` ? 0 : typeof e == `object` ? {
      ...e,
      alpha: 1
    } : e));
  }
};
var rr = {
  ...We,
  transform: Math.round
};
var ir = {
  rotate: at,
  pathRotation: at,
  rotateX: at,
  rotateY: at,
  rotateZ: at,
  scale: Ke,
  scaleX: Ke,
  scaleY: Ke,
  scaleZ: Ke,
  skew: at,
  skewX: at,
  skewY: at,
  distance: L,
  translateX: L,
  translateY: L,
  translateZ: L,
  x: L,
  y: L,
  z: L,
  perspective: L,
  transformPerspective: L,
  opacity: Ge,
  originX: ct,
  originY: ct,
  originZ: L
};
var ar = {
  borderWidth: L,
  borderTopWidth: L,
  borderRightWidth: L,
  borderBottomWidth: L,
  borderLeftWidth: L,
  borderRadius: L,
  borderTopLeftRadius: L,
  borderTopRightRadius: L,
  borderBottomRightRadius: L,
  borderBottomLeftRadius: L,
  width: L,
  maxWidth: L,
  height: L,
  maxHeight: L,
  top: L,
  right: L,
  bottom: L,
  left: L,
  inset: L,
  insetBlock: L,
  insetBlockStart: L,
  insetBlockEnd: L,
  insetInline: L,
  insetInlineStart: L,
  insetInlineEnd: L,
  padding: L,
  paddingTop: L,
  paddingRight: L,
  paddingBottom: L,
  paddingLeft: L,
  paddingBlock: L,
  paddingBlockStart: L,
  paddingBlockEnd: L,
  paddingInline: L,
  paddingInlineStart: L,
  paddingInlineEnd: L,
  margin: L,
  marginTop: L,
  marginRight: L,
  marginBottom: L,
  marginLeft: L,
  marginBlock: L,
  marginBlockStart: L,
  marginBlockEnd: L,
  marginInline: L,
  marginInlineStart: L,
  marginInlineEnd: L,
  fontSize: L,
  backgroundPositionX: L,
  backgroundPositionY: L,
  ...ir,
  zIndex: rr,
  fillOpacity: Ge,
  strokeOpacity: Ge,
  numOctaves: rr
};
var or = {
  ...ar,
  color: R,
  backgroundColor: R,
  outlineColor: R,
  fill: R,
  stroke: R,
  borderColor: R,
  borderTopColor: R,
  borderRightColor: R,
  borderBottomColor: R,
  borderLeftColor: R,
  filter: tr,
  WebkitFilter: tr,
  mask: nr,
  WebkitMask: nr
};
var sr = e => or[e];
var cr = new Set([tr, nr]);
var lr;
var ur;
var dr;
function fr(e, t) {
  if (e === lr && t === ur) {
    return dr;
  }
  let n = sr(e);
  if (!cr.has(n)) {
    n = z;
  }
  dr = n.getAnimatableNone ? n.getAnimatableNone(t) : undefined;
  lr = e;
  ur = t;
  return dr;
}
function pr(e) {
  for (let t = 1; t < e.length; t++) {
    e[t] ??= e[t - 1];
  }
}
var mr = e => e * 180 / Math.PI;
var hr = e => _r(mr(Math.atan2(e[1], e[0])));
var gr = {
  x: 4,
  y: 5,
  translateX: 4,
  translateY: 5,
  scaleX: 0,
  scaleY: 3,
  scaleZ: () => 1,
  scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
  rotate: hr,
  rotateZ: hr,
  skewX: e => mr(Math.atan(e[1])),
  skewY: e => mr(Math.atan(e[2])),
  skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
};
var _r = e => {
  e %= 360;
  if (e < 0) {
    e += 360;
  }
  return e;
};
var vr = hr;
var yr = e => Math.hypot(e[0], e[1]);
var br = e => Math.hypot(e[4], e[5]);
var xr = {
  x: 12,
  y: 13,
  z: 14,
  translateX: 12,
  translateY: 13,
  translateZ: 14,
  scaleX: yr,
  scaleY: br,
  scaleZ: e => Math.hypot(e[8], e[9], e[10]),
  scale: e => (yr(e) + br(e)) / 2,
  rotateX: e => _r(mr(Math.atan2(e[6], e[5]))),
  rotateY: e => _r(mr(Math.atan2(-e[2], e[0]))),
  rotateZ: vr,
  rotate: vr,
  skewX: e => mr(Math.atan(e[4])),
  skewY: e => mr(Math.atan(e[1])),
  skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
};
function Sr(e) {
  return +!!e.includes(`scale`);
}
function Cr(e, t) {
  if (!e || e === `none`) {
    return Sr(t);
  }
  let n = e.match(/^matrix(3d)?\(([-\d.e\s,]+)\)$/u);
  if (!n) {
    return Sr(t);
  }
  let r = (n[1] ? xr : gr)[t];
  let i = n[2].split(`,`).map(e => parseFloat(e));
  if (typeof r == `function`) {
    return r(i);
  } else {
    return i[r];
  }
}
var wr = (e, t) => {
  let {
    transform: n = `none`
  } = getComputedStyle(e);
  return Cr(n, t);
};
var U = [`transformPerspective`, `x`, `y`, `z`, `translateX`, `translateY`, `translateZ`, `scale`, `scaleX`, `scaleY`, `scaleZ`, `rotate`, `rotateX`, `rotateY`, `rotateZ`, `skew`, `skewX`, `skewY`];
var W = new Set([...U, `pathRotation`]);
var Tr = e => e === We || e === L;
var Er = new Set([`x`, `y`, `z`]);
var Dr = U.filter(e => !Er.has(e));
function Or(e) {
  let t = [];
  Dr.forEach(n => {
    let r = e.getValue(n);
    if (r !== undefined) {
      let e = r.get();
      let i = +!!n.startsWith(`scale`);
      if (e === i) {
        return;
      }
      t.push([n, e]);
      r.set(i);
    }
  });
  return t;
}
var kr = new Set([`bottom`, `right`]);
function Ar(e, t, n, r, i, a) {
  let o = parseFloat(e);
  if (!isNaN(o)) {
    return o;
  }
  let {
    min: s,
    max: c
  } = t()[n];
  let l = c - s;
  if (a === `border-box`) {
    return l;
  } else {
    return l - parseFloat(r) - parseFloat(i);
  }
}
var jr = ({
  transform: e
}) => Cr(e, `x`);
var Mr = ({
  transform: e
}) => Cr(e, `y`);
var Nr = {
  width: ({
    width: e,
    paddingLeft: t = `0`,
    paddingRight: n = `0`,
    boxSizing: r
  }, i) => Ar(e, i, `x`, t, n, r),
  height: ({
    height: e,
    paddingTop: t = `0`,
    paddingBottom: n = `0`,
    boxSizing: r
  }, i) => Ar(e, i, `y`, t, n, r),
  top: ({
    top: e
  }) => parseFloat(e),
  left: ({
    left: e
  }) => parseFloat(e),
  bottom: ({
    top: e
  }, t) => {
    let {
      y: n
    } = t();
    return parseFloat(e) + (n.max - n.min);
  },
  right: ({
    left: e
  }, t) => {
    let {
      x: n
    } = t();
    return parseFloat(e) + (n.max - n.min);
  },
  x: jr,
  y: Mr,
  translateX: jr,
  translateY: Mr
};
var Pr = new Set();
var Fr = false;
var Ir = false;
var Lr = false;
function Rr() {
  if (Ir) {
    let e = [];
    let t = new Set();
    let n = new Set();
    Pr.forEach(r => {
      if (r.needsMeasurement) {
        e.push(r);
        t.add(r.element);
        if (kr.has(r.name)) {
          n.add(r.element);
        }
      }
    });
    let r = new Map();
    n.forEach(e => {
      let t = Or(e);
      if (t.length) {
        r.set(e, t);
        e.render();
      }
    });
    e.forEach(e => e.measureInitialState());
    t.forEach(e => {
      e.render();
      let t = r.get(e);
      if (t) {
        t.forEach(([t, n]) => {
          e.getValue(t)?.set(n);
        });
      }
    });
    e.forEach(e => e.measureEndState());
    e.forEach(e => {
      if (e.suspendedScrollY !== undefined) {
        window.scrollTo(0, e.suspendedScrollY);
      }
    });
  }
  Ir = false;
  Fr = false;
  Pr.forEach(e => e.complete(Lr));
  Pr.clear();
}
function zr() {
  Pr.forEach(e => {
    e.readKeyframes();
    if (e.needsMeasurement) {
      Ir = true;
    }
  });
}
function Br() {
  Lr = true;
  zr();
  Rr();
  Lr = false;
}
function Vr(e, t, n) {
  if (typeof e == `string`) {
    if (oe(e) || ce(e)) {
      return parseFloat(e);
    }
    if (!z.test(e) && z.test(n)) {
      return fr(t, n);
    }
  }
  return e ?? undefined;
}
var Hr = class {
  constructor(e, t, n, r, i, a = false) {
    this.state = `pending`;
    this.isAsync = false;
    this.needsMeasurement = false;
    this.unresolvedKeyframes = [...e];
    this.onComplete = t;
    this.name = n;
    this.motionValue = r;
    this.element = i;
    this.isAsync = a;
  }
  scheduleResolve() {
    this.state = `scheduled`;
    if (this.isAsync) {
      Pr.add(this);
      if (!Fr) {
        Fr = true;
        V.read(zr);
        V.resolveKeyframes(Rr);
      }
    } else {
      this.readKeyframes();
      this.complete();
    }
  }
  readKeyframes() {
    let {
      unresolvedKeyframes: e,
      name: t,
      element: n,
      motionValue: r
    } = this;
    if (e[0] === null) {
      let i = r?.get();
      let a = e[e.length - 1];
      if (i !== undefined) {
        e[0] = i;
      } else if (n && t) {
        let r = Vr(n.readValue(t, a), t, a);
        if (r !== undefined) {
          e[0] = r;
        }
      }
      if (e[0] === undefined) {
        e[0] = a;
      }
      if (r && i === undefined) {
        r.set(e[0]);
      }
    }
    pr(e);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(e = false) {
    this.state = `complete`;
    this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, e);
    Pr.delete(this);
  }
  cancel() {
    if (this.state === `scheduled`) {
      Pr.delete(this);
      this.state = `pending`;
    }
  }
  resume() {
    if (this.state === `pending`) {
      this.scheduleResolve();
    }
  }
};
var Ur = e => e.startsWith(`--`);
function Wr(e, t, n) {
  if (Ur(t)) {
    e.style.setProperty(t, n);
  } else {
    e.style[t] = n;
  }
}
var Gr = {};
function Kr(e, t) {
  let n = le(e);
  return () => Gr[t] ?? n();
}
var qr = Kr(() => window.ScrollTimeline !== undefined, `scrollTimeline`);
var Jr = Kr(() => {
  try {
    document.createElement(`div`).animate({
      opacity: 0
    }, {
      easing: `linear(0, 1)`
    });
  } catch {
    return false;
  }
  return true;
}, `linearEasing`);
var Yr = ([e, t, n, r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`;
var Xr = {
  linear: `linear`,
  ease: `ease`,
  easeIn: `ease-in`,
  easeOut: `ease-out`,
  easeInOut: `ease-in-out`,
  circIn: Yr([0, 0.65, 0.55, 1]),
  circOut: Yr([0.55, 0, 1, 0.45]),
  backIn: Yr([0.31, 0.01, 0.66, -0.59]),
  backOut: Yr([0.33, 1.53, 0.69, 0.99])
};
function Zr(e, t) {
  if (e) {
    if (typeof e == `function`) {
      if (Jr()) {
        return $t(e, t);
      } else {
        return `ease-out`;
      }
    } else if (je(e)) {
      return Yr(e);
    } else if (Array.isArray(e)) {
      return e.map(e => Zr(e, t) || Xr.easeOut);
    } else {
      return Xr[e];
    }
  }
}
function Qr(e, t, n, {
  delay: r = 0,
  duration: i = 300,
  repeat: a = 0,
  repeatType: o = `loop`,
  ease: s = `easeOut`,
  times: c
} = {}, l = undefined) {
  let u = {
    [t]: n
  };
  if (c) {
    u.offset = c;
  }
  let d = Zr(s, i);
  if (Array.isArray(d)) {
    u.easing = d;
  }
  let f = {
    delay: r,
    duration: i,
    easing: Array.isArray(d) ? `linear` : d,
    fill: `both`,
    iterations: a + 1,
    direction: o === `reverse` ? `alternate` : `normal`
  };
  if (l) {
    f.pseudoElement = l;
  }
  return e.animate(u, f);
}
function $r(e) {
  return typeof e == `function` && `applyToOptions` in e;
}
function ei({
  type: e,
  ...t
}) {
  if ($r(e) && Jr()) {
    return e.applyToOptions(t);
  } else {
    t.duration ??= 300;
    t.ease ??= `easeOut`;
    return t;
  }
}
var ti = class extends Jn {
  constructor(e) {
    super();
    this.finishedTime = null;
    this.isStopped = false;
    this.manualStartTime = null;
    if (!e) {
      return;
    }
    let {
      element: t,
      name: n,
      keyframes: r,
      pseudoElement: i,
      allowFlatten: a = false,
      finalKeyframe: o,
      onComplete: s
    } = e;
    this.isPseudoElement = !!i;
    this.allowFlatten = a;
    this.options = e;
    let c = ei(e);
    this.animation = Qr(t, n, r, c, i);
    if (c.autoplay === false) {
      this.animation.pause();
    }
    this.animation.onfinish = this.onFinish = () => {
      this.animation.onfinish = null;
      this.finishedTime = this.time;
      if (!i) {
        let e = Bn(r, this.options, o, this.speed);
        this.updateMotionValue?.(e);
        Wr(t, n, e);
        this.animation.cancel();
      }
      s?.();
      this.notifyFinished();
    };
    Kn(this, e, c);
  }
  play() {
    if (!this.isStopped) {
      this.manualStartTime = null;
      this.animation.onfinish = this.onFinish;
      this.animation.play();
      if (this.state === `finished`) {
        this.updateFinished();
      }
    }
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    if (!this.isStopped) {
      this.animation.onfinish = this.onFinish;
    }
    this.animation.finish?.();
  }
  cancel() {
    this.animation.onfinish = null;
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (!this.isStopped) {
      this.isStopped = true;
      if (this.state !== `idle` && this.finishedTime === null) {
        if (this.updateMotionValue) {
          this.updateMotionValue();
        } else {
          this.commitStyles();
        }
        if (!this.isPseudoElement) {
          this.cancel();
        }
      }
    }
  }
  commitStyles() {
    let e = this.options?.element;
    if (!this.isPseudoElement && e?.isConnected) {
      this.animation.commitStyles?.();
    }
  }
  get duration() {
    let e = this.animation.effect?.getComputedTiming?.().duration || 0;
    return N(Number(e));
  }
  get iterationDuration() {
    let {
      delay: e = 0
    } = this.options || {};
    return this.duration + N(e);
  }
  get time() {
    return N(Number(this.animation.currentTime) || 0);
  }
  set time(e) {
    let t = this.finishedTime !== null;
    this.manualStartTime = null;
    this.finishedTime = null;
    this.animation.currentTime = M(e);
    if (t) {
      this.animation.pause();
      this.updateFinished();
    }
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(e) {
    if (e < 0) {
      this.finishedTime = null;
    }
    this.animation.playbackRate = e;
  }
  get state() {
    if (this.finishedTime === null) {
      return this.animation.playState;
    } else {
      return `finished`;
    }
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(e) {
    this.manualStartTime = this.animation.startTime = e;
  }
  attachTimeline({
    timeline: e,
    onAttach: t,
    observe: n
  }) {
    if (this.allowFlatten) {
      this.animation.effect?.updateTiming({
        easing: `linear`
      });
    }
    this.animation.onfinish = this.onFinish = null;
    if (e && qr()) {
      this.animation.timeline = e;
      t?.(this.animation);
      return j;
    } else {
      return n(this);
    }
  }
};
var ni = {
  anticipate: Se,
  backInOut: xe,
  circInOut: Te
};
function ri(e) {
  return e in ni;
}
function ii(e) {
  if (typeof e.ease == `string` && ri(e.ease)) {
    e.ease = ni[e.ease];
  }
}
var ai = class extends ti {
  constructor(e) {
    ii(e);
    Hn(e);
    super(e);
    if (e.startTime !== undefined && e.autoplay !== false) {
      this.startTime = e.startTime;
    }
    this.options = e;
  }
  elapsed() {
    if (this.state === `running`) {
      return (F.now() - this.startTime) * this.speed;
    } else {
      return this.time * 1000;
    }
  }
  sample(e) {
    if (!this.sampler) {
      let {
        motionValue: e,
        onUpdate: t,
        onComplete: n,
        onPlay: r,
        onStop: i,
        element: a,
        ...o
      } = this.options;
      this.sampler = new Zn({
        ...o,
        autoplay: false
      });
      this.sampler.stop();
    }
    return this.sampler.sample(Math.max(0, e)).value;
  }
  liveValue() {
    let {
      state: e
    } = this;
    if (e === `running` || e === `paused`) {
      return this.sample(this.elapsed());
    }
  }
  updateMotionValue(e) {
    let {
      motionValue: t,
      element: n,
      name: r
    } = this.options;
    if (!t) {
      return;
    }
    if (e !== undefined) {
      t.set(e);
      return;
    }
    let {
      speed: i
    } = this;
    let a = this.elapsed();
    let o = this.state === `running` && i ? k(0, 10, a) : 0;
    let s = this.sample(a);
    if (n && r) {
      Wr(n, r, s);
    }
    t.setWithVelocity(this.sample(a - o * Math.sign(i)), s, o / Math.abs(i || 1));
  }
};
var oi = (e, t) => t !== `zIndex` && (typeof e == `number` || !!Array.isArray(e) || typeof e == `string` && (!!z.test(e) || e === `0`) && !e.startsWith(`url(`));
function si(e) {
  let t = e[0];
  if (e.length === 1) {
    return true;
  }
  for (let n = 0; n < e.length; n++) {
    if (e[n] !== t) {
      return true;
    }
  }
}
function ci(e, t, n, r) {
  let i = e[0];
  if (i === null) {
    return false;
  }
  if (t === `display` || t === `visibility`) {
    return true;
  }
  let a = e[e.length - 1];
  let o = oi(i, t);
  let s = oi(a, t);
  if (!o || !s) {
    return false;
  } else {
    return si(e) || (n === `spring` || $r(n)) && r;
  }
}
function li(e) {
  e.duration = 0;
  e.type = `keyframes`;
}
var ui = new Set([`opacity`, `clipPath`, `filter`, `transform`]);
var di = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function fi(e) {
  for (let t = 0; t < e.length; t++) {
    if (typeof e[t] == `string` && di.test(e[t])) {
      return true;
    }
  }
  return false;
}
var pi = ({
  mixer: e,
  keyframes: t
}) => e && typeof t[0] != `number` && t.some((n, r) => r && e(t[r - 1], n));
var mi = new Set([`color`, `backgroundColor`, `outlineColor`, `fill`, `stroke`, `borderColor`, `borderTopColor`, `borderRightColor`, `borderBottomColor`, `borderLeftColor`]);
var hi = () => !A.useManualTiming && Object.hasOwnProperty.call(Element.prototype, `animate`);
function gi(e) {
  let {
    motionValue: t,
    name: n,
    repeatDelay: r,
    repeatType: i,
    damping: a,
    type: o,
    keyframes: s
  } = e;
  if (!n || !ui.has(n) && !mi.has(n)) {
    return false;
  }
  let c = t?.owner?.current;
  if (!(c instanceof HTMLElement) && !(c instanceof SVGElement)) {
    return false;
  }
  let {
    onUpdate: l,
    transformTemplate: u
  } = t.owner.getProps();
  return hi() && (ui.has(n) || mi.has(n) && fi(s)) && (n !== `transform` || !u) && !l && !r && i !== `mirror` && a !== 0 && o !== `inertia` && !pi(e);
}
var _i = (e, t) => t && typeof e == `number` ? t.transform(e) : e;
var vi = {
  x: `translateX`,
  y: `translateY`,
  z: `translateZ`,
  transformPerspective: `perspective`
};
var yi = U.length;
var bi = {};
var xi = (e, t, n = _i(t, ir[e])) => `${(bi[e] ||= `${vi[e] || e}(`) + n})`;
var Si = (e, t) => (typeof t == `number` ? t : parseFloat(t)) === +!!e.startsWith(`scale`);
function Ci(e, t, n) {
  let r = ``;
  for (let i = 0; i < yi; i++) {
    let a = U[i];
    let o = e[a];
    if (o === undefined) {
      continue;
    }
    let s = n && (t[a] = _i(o, ar[a]));
    if (!Si(a, o)) {
      r += `${xi(a, o, s || undefined)} `;
    }
  }
  let i = e.pathRotation;
  if (i) {
    r += xi(`rotate`, i);
  }
  r = r.trim();
  if (n) {
    return n(t, r);
  } else {
    return r || `none`;
  }
}
var wi = new WeakMap();
var Ti = 200;
var Ei = 0.001;
var Di = 0.1;
var Oi = 0.001;
var ki = 100;
var Ai = 100;
var ji = new Set([`linear`, `easeIn`, `easeOut`, `easeInOut`]);
var Mi = e => ji.has(e);
var Ni = new WeakMap();
var Pi = (e, t) => {
  let n = Ni.get(e);
  if (n?.[0] !== t) {
    n = [t, `linear(${Nn(Array(t + 1)).map(t => `${Xn(e(t))} ${Xn(t * 100)}%`)})`];
    Ni.set(e, n);
  }
  return n[1];
};
var Fi = (e, t) => Math.min(Ti, Math.max(2, Math.ceil((t - e) / 10)));
var Ii = (e, t) => Math.abs(e - t) <= Ei;
var Li = (e, t) => e - t;
var Ri = (e, t, n) => Nn(Array(n + 1)).map(n => B(e, t, n));
var zi = e => e.motionValue.owner;
var Bi = e => wi.get(e);
var Vi = ({
  state: e
}) => e === `idle` || e === `finished`;
var Hi = (e, t) => e.latestValues ? e.latestValues[t] : e.getValue(t)?.get();
var Ui = ({
  name: e,
  motionValue: t
}) => e && U.includes(e) && t?.owner?.current instanceof HTMLElement && hi() && Jr();
function Wi(e) {
  let t = zi(e);
  let {
    onUpdate: n,
    transformTemplate: r
  } = t.getProps();
  return !e.isHandoff && !n && !e.hasOnUpdate && !r && e.type !== `inertia` && (Hi(t, `transform`) || `none`) === `none` && !Hi(t, `pathRotation`) && !t.projection?.isProjecting() && !pi(e);
}
var Gi = class {
  constructor(e, t, n, r) {
    this.element = e;
    this.update = t;
    this.makeDriver = n;
    this.animation = r;
  }
  get js() {
    return this.driver ||= this.makeDriver(this.update);
  }
  now() {
    if (this.driver || this.makeDriver !== Qt) {
      return this.js.now();
    } else if (P.isProcessing) {
      return P.timestamp;
    } else {
      return F.now();
    }
  }
  start(e = true) {
    let t = Bi(this.element);
    if (!t || t.isJS) {
      this.js.start(e);
    } else {
      t.schedule(false, !e);
    }
  }
  stopJS() {
    this.driver?.stop();
  }
  stop() {
    this.stopJS();
    let e = Bi(this.element);
    if (e && !e.isFinishing) {
      e.release(this.animation);
    }
  }
};
var Ki;
var qi = class extends Zn {
  constructor(e) {
    let t = zi(e).current;
    let {
      driver: n = Qt
    } = e;
    let r;
    let i = Wi(e);
    e.driver = e => new Gi(t, e, n, r);
    super(e);
    r = this;
    let a = this.driver;
    if (a) {
      a.animation = this;
    }
    this.canAccelerate = i;
    let {
      stop: o
    } = this;
    this.stop = () => {
      if (this.isAccelerated()) {
        this.sync();
      }
      o();
    };
  }
  offsets() {
    let {
      keyframes: e,
      times: t
    } = this.options;
    return t || (this.offsetsOf !== e && (this.offsetsOf = e, this.cachedOffsets = Nn(e)), this.cachedOffsets);
  }
  get group() {
    return Bi(zi(this.options).current);
  }
  get js() {
    return this.driver?.js;
  }
  stopJS() {
    this.driver?.stopJS();
  }
  get name() {
    return this.options.name;
  }
  timing() {
    let {
      startTime: e,
      speed: t,
      totalDuration: n
    } = this;
    let {
      delay: r = 0,
      repeatType: i
    } = this.options;
    if (this.holdTime === null) {
      if (n === Infinity) {
        return [e + r / t, this.resolvedDuration * (i === `loop` ? 1 : 2) / t || 1];
      } else {
        return [e + (r + n) / t, 0];
      }
    } else {
      return [Infinity, 0];
    }
  }
  isAccelerated() {
    let {
      group: e,
      state: t
    } = this;
    return e?.tracks.has(this) && !e.isJS && this.canAccelerate && (t === `running` || t === `paused`);
  }
  liveValue() {
    if (this.isAccelerated()) {
      return this.sampleAt(F.now());
    } else {
      return undefined;
    }
  }
  tween() {
    let {
      keyframes: e,
      type: t,
      repeat: n,
      delay: r = 0
    } = this.options;
    let i = -1;
    if (n || t !== In || this.holdTime !== null) {
      return;
    }
    for (let t = 1; t < e.length; t++) {
      if (e[t] !== e[t - 1]) {
        if (i >= 0) {
          return;
        }
        i = t - 1;
      }
    }
    let {
      ease: a
    } = this.options;
    if (ke(a)) {
      a = a[i];
    }
    let o = this.offsets();
    let s = e => this.startTime + (r + o[e] * this.totalDuration) / this.speed;
    if (i >= 0) {
      let e = je(a) ? Yr(a) : Mi(a) ? Xr[a] : Pe(a);
      return [s(i), s(i + 1), typeof e == `string` || Ii(e(0), 0) && Ii(e(1), 1) ? e : undefined];
    }
  }
  boundaries(e, t) {
    let {
      startTime: n,
      speed: r,
      resolvedDuration: i,
      options: a
    } = this;
    let {
      delay: o = 0,
      repeat: s = 0,
      repeatDelay: c = 0,
      repeatType: l,
      type: u
    } = a;
    let d = (u || In) === In ? this.offsets() : [0, 1];
    let f = n + o / r;
    let p = [];
    if (this.holdTime !== null || !(i > 0)) {
      return p;
    }
    for (let n = Math.max(0, Math.floor((e - f) * r / i)); n <= s; n++) {
      let a = f + n * i / r;
      if (a > t) {
        break;
      }
      for (let o of d) {
        let s = a + (n % 2 && l && l !== `loop` ? 1 - o : o) * (i - c) / r;
        if (s > e && s < t) {
          p.push(s);
        }
      }
    }
    return p;
  }
  numberAt(e) {
    return parseFloat(this.sampleAt(e, true));
  }
  sync() {
    let e = F.now();
    let t = this.sampleAt(e, true);
    this.options.motionValue.setWithVelocity(this.holdTime === null ? this.sampleAt(e - 10, true) : t, t, 10);
  }
  play() {
    if (!this.isStopped) {
      (this.group || Xi(zi(this.options))).tracks.add(this);
      super.play();
    }
  }
  pause() {
    super.pause();
    if (this.isAccelerated()) {
      this.group.schedule(false);
    }
  }
  complete() {
    super.complete();
    let {
      group: e
    } = this;
    if (e && !e.isJS) {
      this.tick(F.now());
    }
  }
  get time() {
    if (this.isAccelerated()) {
      return N(k(0, this.totalDuration, this.at(F.now()) - (this.options.delay || 0)));
    } else {
      return super.time;
    }
  }
  set time(e) {
    (Ki ??= Object.getOwnPropertyDescriptor(Zn.prototype, `time`).set).call(this, e);
  }
  attachTimeline(e) {
    this.canAccelerate = false;
    this.group?.demote(true);
    return super.attachTimeline(e);
  }
};
var Ji;
var Yi = e => {
  if (!Ji) {
    queueMicrotask(() => {
      let e = Ji;
      Ji = undefined;
      e.forEach(e => e());
    });
  }
  (Ji ||= []).push(e);
};
function Xi(e) {
  let t = e.current;
  let n = new Set();
  let r = new Map();
  let i = {};
  let a = [];
  let o = new Map();
  let s = [];
  let c = false;
  let l = false;
  let u = false;
  let d = false;
  let f = -Infinity;
  let p;
  let m = Infinity;
  let h;
  let g = e => {
    for (let t of n) {
      if (t.name === e) {
        return true;
      }
    }
  };
  let _ = (t, n) => {
    let o = {};
    for (let s of t === undefined ? U : a) {
      let a = r.get(s);
      let c = t === undefined ? Hi(e, s) : a ? a.sampleAt(n > t && !a.timing()[1] ? n : t) : i[s];
      if (c !== undefined) {
        o[s] = c;
      }
    }
    return o;
  };
  let v = (e, t) => {
    let n = ``;
    for (let r in e) {
      let i = e[r];
      if (!t || !Si(r, i)) {
        n += `${xi(r, i)} `;
      }
    }
    return (t ? n.trim() : n) || `none`;
  };
  let y = (e, t) => v(_(e, t));
  let b = (e = _()) => {
    t.style.transform = v(e, true);
  };
  let x = e => {
    e.onfinish = e.oncancel = null;
    e.cancel();
  };
  let S = (e = true) => {
    clearTimeout(p);
    m = Infinity;
    h = undefined;
    if (e) {
      b();
    }
    s.forEach(({
      animation: e
    }) => x(e));
    s = [];
  };
  let C = (e, n) => new Animation(new KeyframeEffect(t, e, n));
  let w = (e, t, n = Infinity) => {
    let r = {
      animation: e,
      offset: t,
      end: n
    };
    e.startTime = F.now() + t;
    if (n < Infinity) {
      e.onfinish = () => {
        r.isDone = true;
        if (s.some(e => e.end === Infinity)) {
          x(e);
          s = s.filter(e => e !== r);
        }
        k.schedule(false);
      };
    }
    e.oncancel = () => s.includes(r) && k.demote();
    s.push(r);
  };
  let T = (e, t, n) => {
    let r = (t, n) => Math.abs(e(n) - e(t));
    let i = r(t, n);
    while (n - t > 0.01) {
      let e = (t + n) / 2;
      if (r(t, e) > r(e, n)) {
        n = e;
      } else {
        t = e;
      }
    }
    if (r(t, n) > i / 2) {
      return [t, n];
    } else {
      return [];
    }
  };
  let E = (e, t, n, r) => {
    let i = Fi(t, n);
    if (r.length * 4 > i) {
      return;
    }
    let a;
    for (let r of e) {
      let e = r.numberAt(t);
      let i = (r.numberAt((t + n) / 2) - e) / (r.numberAt(n) - e);
      if (i === i) {
        if (a === undefined) {
          a = i;
        } else if (!Ii(i, a)) {
          return;
        }
      }
    }
    let o = Ri(t, n, i).concat(r).sort(Li);
    let s = e => de(t, n, e);
    let c;
    let l;
    for (let n of e) {
      let e = n.numberAt(t);
      let r = o.map(t => n.numberAt(t) - e);
      let i = r[r.length - 1];
      let a = r.some(e => Math.abs(e) * Ei > Math.abs(i)) ? 0 : i;
      let s = r.map(e => a ? e / a : e);
      if (a && !c) {
        c = s;
        l = t => (n.numberAt(t) - e) / a;
      } else if (s.some((e, t) => !Ii(e, a && c[t]))) {
        return;
      }
    }
    if (!c || c.every((e, t) => Ii(e, s(o[t])))) {
      return `linear`;
    }
    let u = [];
    let d = (e, t = l(e)) => u.push(`${Xn(t)} ${Xn(s(e) * 100)}%`);
    c.forEach((e, t) => {
      if (t && Math.abs(e - c[t - 1]) > 0.2) {
        T(l, o[t - 1], o[t]).forEach(e => d(e));
      }
      d(o[t], e);
    });
    return `linear(${u})`;
  };
  let ee = (e, t, n, r) => {
    let i = [t];
    let a = [];
    let o = n;
    let s = t;
    for (let r of e) {
      let e = r.tween();
      if (e?.[2] !== `linear`) {
        let [i, c] = r.timing();
        let [l, u] = e || [t, c ? n : i];
        o = Math.min(o, l);
        s = Math.max(s, u);
        a.push(r);
      }
    }
    o = Math.max(t, o);
    s = Math.min(n, s);
    let c = (e, t) => a.every(n => !(Math.abs(n.numberAt((e + t) / 2) - (n.numberAt(e) + n.numberAt(t)) / 2) > (n.name.startsWith(`scale`) ? Oi : Di)));
    let l = (t, n, r) => {
      if (n - t < 1 || c(t, n)) {
        i.push(n);
      } else if (r < 4) {
        l(t, (t + n) / 2, r + 1);
        l((t + n) / 2, n, r + 1);
      } else {
        for (let r of e) {
          i.push(...T(e => r.numberAt(e), t, n));
        }
        i.push(n);
      }
    };
    let u = s > o ? Ri(o, s, Math.ceil((s - o) / 100)) : [];
    u.push(n);
    for (let e of r) {
      u.push(e, Math.min(e + 0.01, n));
    }
    let d = t;
    for (let e of u.sort(Li)) {
      if (e > d) {
        l(d, e, 0);
      }
      d = e;
    }
    return i.sort(Li);
  };
  let D = e => {
    let t;
    for (let n of e) {
      let e = n.tween();
      if (!e || t && (Math.abs(e[0] - t[0]) > 1 || Math.abs(e[1] - t[1]) > 1)) {
        return;
      }
      t = [e[0], e[1], !t || e[2] === t[2] ? e[2] : undefined];
    }
    return t;
  };
  let te = (e, t, n, r, i = {
    fill: `both`
  }, a) => {
    let o = r ? [] : e.flatMap(e => e.boundaries(t, n));
    let s = r || E(e, t, n, o);
    let c = s ? [t, n] : ee(e, t, n, o);
    let l = c.map(e => y(e, a));
    let u = {
      transform: l
    };
    if (!s) {
      u.offset = c.map(e => de(t, n, e));
    }
    if (l.every(e => e === l[0])) {
      b(_(t, a));
      u = null;
    }
    return C(u, {
      ...i,
      duration: n - t,
      easing: s || `linear`
    });
  };
  let O = e => {
    let t = F.now() + e;
    if (t < m) {
      clearTimeout(p);
      m = t;
      p = setTimeout(() => {
        m = Infinity;
        k.schedule(false);
      }, e);
    }
  };
  let ne = t => {
    let c = t;
    let l = 0;
    let u = 0;
    let d = [];
    let f = [];
    let p = new Set();
    r.clear();
    o = new Map();
    for (let e of n) {
      r.set(e.name, e);
      let [n, i] = e.timing();
      let a = n === Infinity;
      o.set(e, [e.at(t), e.speed, a]);
      if (!a) {
        if (e.speed < 0) {
          return;
        }
        if (i) {
          if (l) {
            let e = (n - u) / i;
            if (Math.abs(i - l) > 1 || Math.abs(e - Math.round(e)) * l > 1) {
              return;
            }
          } else {
            l = i;
            u = n;
          }
          f.push(e);
        } else {
          p.add(n);
        }
        d.push(e);
        c = Math.max(c, n);
      }
    }
    i = {};
    a = U.filter(t => {
      if (r.has(t)) {
        return true;
      }
      let n = i[t] = Hi(e, t);
      return n !== undefined && !Si(t, n);
    });
    S(false);
    let m = !l && D(d);
    try {
      if (c > t) {
        let e;
        if (m && m[1] > t) {
          let [n, r, i] = m;
          if (n - t > Ai) {
            d.forEach(e => e.sync());
            O(h = n - t - Ai);
            return true;
          }
          e = typeof i == `string` ? i : i ? Pi(i, Fi(n, r)) : E(d, n, r, []);
          if (e) {
            w(te(d, n, r, e, {
              fill: `both`,
              endDelay: c - r
            }), n - t, c - n);
          }
        }
        if (!e) {
          w(te(d, t, c), 0, c - t);
        }
        p.forEach(e => e < c - 1 && w(C(null, {
          duration: e - t
        }), 0, e - t));
      }
      if (l) {
        let e = u + Math.floor((c - u) / l) * l;
        w(te(f, e, e + l, undefined, {
          iterations: Infinity,
          iterationStart: (c - e) / l,
          fill: `forwards`
        }, c), c - t);
      }
    } catch {
      return;
    }
    if (!s.length) {
      S();
    }
    return true;
  };
  let re = (e, t) => {
    let r;
    let i = 0;
    for (let t of n) {
      let n = o.get(t);
      if (!n) {
        return false;
      }
      let [a, c, l] = n;
      let u = t.at(e);
      let d = t.timing()[0] === Infinity;
      if (l) {
        if (d && (u === a || !s.length)) {
          continue;
        }
        return false;
      }
      let f = (u - a) / c;
      let p = d ? 0 : t.speed / c;
      if (r === undefined) {
        r = f;
        i = p;
      } else if (Math.abs(f - r) > 1 || p !== i) {
        return false;
      }
    }
    if (r === undefined) {
      return true;
    }
    if (!s.length) {
      if (h === undefined || t && i) {
        return false;
      }
      if (i) {
        let e = (h - r) / i;
        if (e < 1) {
          return false;
        }
        O(e);
      }
      return true;
    }
    for (let {
      offset: e,
      end: n,
      isDone: i
    } of s) {
      let a = r - e;
      if (n < Infinity && (i ? a < n - 1 : a < 0 && (t || e <= 0) || a >= n)) {
        return false;
      }
    }
    for (let {
      animation: t,
      offset: n,
      isDone: a
    } of s) {
      if (a) {
        continue;
      }
      let o = r - n;
      if (i && t.updatePlaybackRate && t.playState === `running` && Math.abs(Number(t.currentTime) - o) < 20) {
        if (t.playbackRate !== i) {
          t.updatePlaybackRate(i);
        }
      } else if (i) {
        if (t.playbackRate !== i) {
          t.playbackRate = i;
        }
        t.startTime = e - o / i;
      } else {
        t.startTime = null;
        t.currentTime = o;
      }
    }
    return true;
  };
  let ie = () => !n.size && (u = true, Bi(t) === k && wi.delete(t), k.isJS || S(), true);
  let ae = () => {
    let t = F.now();
    if (!k.isJS) {
      k.isFinishing = true;
      n.forEach(n => {
        let [r, a] = n.timing();
        if (n.state === `running` && n.speed > 0 && !a && r <= t + 1) {
          n.complete();
          i[n.name] = Hi(e, n.name);
          if (!o.has(n)) {
            c = true;
          }
        }
      });
      k.isFinishing = false;
    }
    l = false;
    if (u || (n.forEach(e => Vi(e) && n.delete(e)), ie())) {
      return;
    }
    for (let e of n) {
      if (!e.canAccelerate) {
        return k.demote(true);
      }
    }
    if (k.isJS) {
      k.isJS = false;
      c = true;
      n.forEach(e => e.stopJS());
    }
    let r = c;
    let a = d;
    c = d = false;
    if (r || !re(t, a)) {
      if (a) {
        if (t - f < ki) {
          return k.demote();
        }
        f = t;
      }
      if (!ne(t)) {
        return k.demote();
      }
    } else if (h !== undefined && !a) {
      return;
    }
    n.forEach(e => e.timing()[0] === Infinity && e.sync());
  };
  let k = {
    tracks: n,
    isJS: false,
    isFinishing: false,
    schedule(e, t) {
      if (!u) {
        c ||= e;
        d ||= !!t;
        if (!l) {
          l = true;
          if (P.isProcessing) {
            V.render(ae, false, true);
          } else {
            Yi(ae);
          }
        }
      }
    },
    release(e) {
      if (Vi(e)) {
        n.delete(e);
      }
      if (!ie()) {
        k.schedule(true);
      }
    },
    check() {
      if (!k.isJS) {
        for (let t in i) {
          if (Hi(e, t) !== i[t] && !g(t)) {
            return k.schedule(true, true);
          }
        }
      }
    },
    demote(e) {
      if (!k.isJS && !u) {
        n.forEach(t => {
          if (t.isAccelerated()) {
            t.sync();
          }
          if (!e) {
            t.canAccelerate = false;
          }
        });
        k.isJS = true;
        o = new Map();
        S();
        n.forEach(e => e.state === `running` && e.js?.start());
        return true;
      }
    }
  };
  wi.set(t, k);
  return k;
}
var Zi = class extends Jn {
  constructor(e) {
    super();
    this.stop = () => {
      if (this._animation) {
        this._animation.stop();
        this.stopTimeline?.();
      }
      this.keyframeResolver?.cancel();
    };
    this.createdAt = F.now();
    let {
      keyframes: t,
      name: n,
      motionValue: r,
      element: i
    } = e;
    let a = e;
    a.autoplay ??= true;
    a.delay ??= 0;
    a.type ??= `keyframes`;
    a.repeat ??= 0;
    a.repeatDelay ??= 0;
    a.repeatType ??= `loop`;
    let o = i?.KeyframeResolver || Hr;
    this.keyframeResolver = new o(t, (e, t, n) => this.onKeyframesResolved(e, t, a, !n), n, r, i);
    this.keyframeResolver?.scheduleResolve();
  }
  onKeyframesResolved(e, t, n, r) {
    this.keyframeResolver = undefined;
    let {
      name: i,
      type: a,
      velocity: o,
      delay: s,
      isHandoff: c,
      onUpdate: l
    } = n;
    this.resolvedAt = F.now();
    let u = ci(e, i, a, o);
    if (!u) {
      if (A.instantAnimations || !s) {
        l?.(Bn(e, n, t));
      }
      e[0] = e[e.length - 1];
      li(n);
      n.repeat = 0;
    }
    let {
      onComplete: d
    } = n;
    n.finalKeyframe = t;
    n.keyframes = e;
    n.onComplete = () => {
      d?.();
      this.notifyFinished();
    };
    let f = u && !c && gi(n);
    let p = !f && Ui(n);
    if (r && (f || p || this.resolvedAt !== this.createdAt)) {
      n.startTime ??= Wn(this.createdAt, this.resolvedAt);
    }
    let m;
    if (f) {
      n.element = n.motionValue?.owner?.current;
      try {
        m = new ai(n);
      } catch {
        m = new Zn(n);
      }
    } else {
      m = p ? new qi(n) : new Zn(n);
    }
    this.pendingTimeline &&= (this.stopTimeline = m.attachTimeline(this.pendingTimeline), undefined);
    this._animation = m;
  }
  get finished() {
    if (this._animation) {
      return this._animation.finished;
    } else {
      return super.finished;
    }
  }
  then(e, t) {
    return this.finished.finally(e).then(() => {});
  }
  liveValue() {
    return this._animation?.liveValue?.();
  }
  get animation() {
    if (!this._animation) {
      this.keyframeResolver?.resume();
      Br();
    }
    return this._animation;
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(e) {
    this.animation.time = e;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(e) {
    this.animation.speed = e;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(e) {
    if (this._animation) {
      this.stopTimeline = this.animation.attachTimeline(e);
    } else {
      this.pendingTimeline = e;
    }
    return () => this.stop();
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    this._animation?.cancel();
    this.keyframeResolver?.cancel();
  }
};
var Qi = class {
  constructor(e) {
    this.stop = () => {
      for (let e of this.animations) {
        e.stop();
      }
    };
    this.animations = e.filter(Boolean);
  }
  get finished() {
    return Promise.all(this.animations.map(e => e.finished));
  }
  getAll(e) {
    return this.animations[0][e];
  }
  attachTimeline(e) {
    let t = this.animations.map(t => t.attachTimeline(e));
    return () => {
      t.forEach((e, t) => {
        if (e) {
          e();
        }
        this.animations[t].stop();
      });
    };
  }
  get time() {
    return this.getAll(`time`);
  }
  set time(e) {
    for (let t of this.animations) {
      t.time = e;
    }
  }
  get speed() {
    return this.getAll(`speed`);
  }
  set speed(e) {
    for (let t of this.animations) {
      t.speed = e;
    }
  }
  get state() {
    return this.getAll(`state`);
  }
  get startTime() {
    return this.getAll(`startTime`);
  }
  get duration() {
    return $i(this.animations, `duration`);
  }
  get iterationDuration() {
    return $i(this.animations, `iterationDuration`);
  }
  play() {
    for (let e of this.animations) {
      e.play();
    }
  }
  pause() {
    for (let e of this.animations) {
      e.pause();
    }
  }
  cancel() {
    for (let e of this.animations) {
      e.cancel();
    }
  }
  complete() {
    for (let e of this.animations) {
      e.complete();
    }
  }
};
function $i(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r++) {
    let i = e[r][t];
    if (i !== null && i > n) {
      n = i;
    }
  }
  return n;
}
var ea = class extends Qi {
  then(e, t) {
    return this.finished.finally(e).then(() => {});
  }
};
function ta(e, t, n, r = 0, i = 1) {
  let a = Array.from(e).sort((e, t) => e.sortNodePosition(t)).indexOf(t);
  let o = e.size;
  let s = (o - 1) * r;
  if (typeof n == `function`) {
    return n(a, o);
  } else if (i === 1) {
    return a * r;
  } else {
    return s - a * r;
  }
}
var na = 30;
var ra = e => !isNaN(parseFloat(e));
var ia = {
  current: undefined
};
var aa = class {
  constructor(e, t = {}) {
    this.canTrackVelocity = null;
    this.events = {};
    this.updateAndNotify = e => {
      let t = F.now();
      if (this.updatedAt !== t) {
        this.setPrevFrameValue();
      }
      this.prev = this.current;
      this.setCurrent(e);
      if (this.current !== this.prev && (this.dirty(), this.dependents)) {
        for (let e of this.dependents) {
          e.dirty();
        }
      }
    };
    this.hasAnimated = false;
    this.setCurrent(e);
    this.owner = t.owner;
  }
  setCurrent(e) {
    this.current = e;
    this.updatedAt = F.now();
    if (this.canTrackVelocity === null && e !== undefined) {
      this.canTrackVelocity = ra(this.current);
    }
  }
  setPrevFrameValue(e = this.current) {
    this.prevFrameValue = e;
    this.prevUpdatedAt = this.updatedAt;
  }
  onChange(e) {
    return this.on(`change`, e);
  }
  on(e, t) {
    if (e === `change`) {
      return this.onChangeSubscribe(t);
    } else {
      return (this.events[e] ||= new fe()).add(t);
    }
  }
  onChangeSubscribe(e) {
    let {
      events: t
    } = this;
    if (!t.change && !this.changeSubscriber) {
      this.changeSubscriber = e;
    } else {
      if (!t.change) {
        t.change = new fe();
        t.change.add(this.changeSubscriber);
        this.changeSubscriber = undefined;
      }
      t.change.add(e);
    }
    return () => {
      if (this.changeSubscriber === e) {
        this.changeSubscriber = undefined;
      } else {
        t.change?.remove(e);
      }
      this.stopIfUnobserved();
    };
  }
  stopIfUnobserved() {
    V.read(() => {
      if (!this.changeSubscriber && !this.events.change?.getSize()) {
        this.stop();
      }
    });
  }
  clearListeners() {
    this.changeSubscriber = undefined;
    for (let e in this.events) {
      this.events[e].clear();
    }
  }
  attach(e, t) {
    this.passiveEffect = e;
    this.stopPassiveEffect = t;
  }
  set(e) {
    if (this.passiveEffect) {
      this.passiveEffect(e, this.updateAndNotify);
    } else {
      this.updateAndNotify(e);
    }
  }
  setWithVelocity(e, t, n) {
    this.set(t);
    this.prev = undefined;
    this.prevFrameValue = e;
    this.prevUpdatedAt = this.updatedAt - n;
  }
  jump(e, t = true) {
    if (t) {
      this.updatedAt = F.now();
      this.stop();
    }
    this.updateAndNotify(e);
    this.prev = e;
    this.prevUpdatedAt = this.prevFrameValue = undefined;
    this.stopPassiveEffect?.();
  }
  dirty() {
    let {
      current: e,
      changeSubscriber: t
    } = this;
    if (t) {
      t(e);
    } else {
      this.events.change?.notify(e);
    }
  }
  addDependent(e) {
    (this.dependents ||= new Set()).add(e);
  }
  removeDependent(e) {
    this.dependents?.delete(e);
  }
  get() {
    ia.current?.push(this);
    let e = this.animation?.liveValue?.();
    if (e === undefined) {
      return this.current;
    } else {
      return e;
    }
  }
  getCurrent() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    let e = F.now();
    if (!this.canTrackVelocity || this.prevFrameValue === undefined || e - this.updatedAt > na) {
      return 0;
    }
    let t = Math.min(this.updatedAt - this.prevUpdatedAt, na);
    return pe(parseFloat(this.current) - parseFloat(this.prevFrameValue), t);
  }
  start(e) {
    return new Promise(t => this.run(e, t));
  }
  run(e, t) {
    this.stop();
    this.hasAnimated = true;
    let n = false;
    let r;
    r = e(() => {
      n = true;
      this.events.animationComplete?.notify();
      if (this.animation === r) {
        this.animation = undefined;
      }
      t?.();
    });
    if (!n) {
      this.animation = r;
    }
    this.events.animationStart?.notify();
  }
  stop() {
    if (this.animation) {
      this.animation.stop();
      this.events.animationCancel?.notify();
    }
    this.animation = undefined;
  }
  isAnimating() {
    return !!this.animation;
  }
  destroy() {
    this.dependents?.clear();
    this.events.destroy?.notify();
    this.clearListeners();
    this.stop();
    this.stopPassiveEffect?.();
  }
};
function G(e, t) {
  return new aa(e, t);
}
function oa(e, t) {
  if (e?.inherit && t) {
    let {
      inherit: n,
      ...r
    } = e;
    return {
      ...t,
      ...r
    };
  }
  return e;
}
function sa(e, t) {
  let n = e?.[t] ?? e?.default ?? e;
  if (n === e) {
    return n;
  } else {
    return oa(n, e);
  }
}
var ca = {
  type: `spring`,
  stiffness: 500,
  damping: 25,
  restSpeed: 10
};
var la = e => ({
  type: `spring`,
  stiffness: 550,
  damping: e === 0 ? Math.sqrt(550) * 2 : 30,
  restSpeed: 10
});
var ua = {
  type: `keyframes`,
  duration: 0.8
};
var da = {
  type: `keyframes`,
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
};
var fa = (e, {
  keyframes: t
}) => t.length > 2 ? ua : W.has(e) ? e.startsWith(`scale`) ? la(t[1]) : ca : da;
var pa = new Set([`when`, `delay`, `delayChildren`, `staggerChildren`, `staggerDirection`, `repeat`, `repeatType`, `repeatDelay`, `from`, `elapsed`, `out`, `mixer`]);
function ma(e) {
  for (let t in e) {
    if (!pa.has(t)) {
      return true;
    }
  }
  return false;
}
var ha = (e, t, n, r = {}, i, a) => o => {
  let s = sa(r, e) || {};
  let c = s.delay || r.delay || 0;
  let {
    elapsed: l = 0
  } = r;
  l -= M(c);
  let u = {
    keyframes: Array.isArray(n) ? n : [null, n],
    ease: `easeOut`,
    velocity: t.getVelocity(),
    ...s,
    delay: -l,
    onUpdate: e => {
      t.set(e);
      if (s.onUpdate) {
        s.onUpdate(e);
      }
    },
    onComplete: () => {
      o();
      if (s.onComplete) {
        s.onComplete();
      }
    },
    name: e,
    motionValue: t,
    element: a ? undefined : i,
    hasOnUpdate: !!s.onUpdate
  };
  if (!ma(s)) {
    Object.assign(u, fa(e, u));
  }
  u.duration &&= M(u.duration);
  u.repeatDelay &&= M(u.repeatDelay);
  if (u.from !== undefined) {
    u.keyframes[0] = u.from;
  }
  let d = false;
  if (u.type === false || u.duration === 0 && !u.repeatDelay) {
    li(u);
    if (u.delay === 0) {
      d = true;
    }
  }
  if (A.instantAnimations || A.skipAnimations || i?.shouldSkipAnimations || s.skipAnimations) {
    d = true;
    li(u);
    u.delay = 0;
  }
  u.allowFlatten = !s.type && !s.ease;
  if (d && !a && t.get() !== undefined) {
    let e = Bn(u.keyframes, s);
    if (e !== undefined) {
      V.update(() => {
        u.onUpdate(e);
        u.onComplete();
      });
      return;
    }
  }
  if (s.isSync) {
    return new Zn(u);
  } else {
    return new Zi(u);
  }
};
var ga = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function _a(e) {
  let t = ga.exec(e);
  if (!t) {
    return [,];
  }
  let [, n, r, i] = t;
  return [`--${n ?? r}`, i];
}
function va(e, t, n = 1) {
  let [r, i] = _a(e);
  if (!r) {
    return;
  }
  let a = window.getComputedStyle(t).getPropertyValue(r);
  if (a) {
    let e = a.trim();
    if (oe(e)) {
      return parseFloat(e);
    } else {
      return e;
    }
  }
  if (Ve(i)) {
    return va(i, t, n + 1);
  } else {
    return i;
  }
}
function ya(e) {
  let t = [{}, {}];
  e?.values.forEach((e, n) => {
    t[0][n] = e.get();
    t[1][n] = e.getVelocity();
  });
  return t;
}
function ba(e, t, n, r) {
  let i = t => typeof t == `function` ? t(n === undefined ? e.custom : n, ...ya(r)) : t;
  t = i(t);
  if (typeof t == `string`) {
    t = e.variants && e.variants[t];
  }
  return i(t);
}
function xa(e, t, n) {
  return ba(e.getProps(), t, n, e);
}
var Sa = (e, t) => t === `exit` ? e.presenceContext?.custom : undefined;
var Ca = new Set([`width`, `height`, `top`, `left`, `right`, `bottom`, ...U]);
var wa = e => Array.isArray(e);
function Ta(e, t, n) {
  if (e.hasValue(t)) {
    e.getValue(t).set(n);
  } else {
    e.addValue(t, G(n));
  }
}
function Ea(e) {
  if (wa(e)) {
    return e[e.length - 1] || 0;
  } else {
    return e;
  }
}
function Da(e, t) {
  let {
    transitionEnd: n = {},
    transition: r = {},
    ...i
  } = xa(e, t) || {};
  i = {
    ...i,
    ...n
  };
  for (let t in i) {
    Ta(e, t, Ea(i[t]));
  }
}
var K = e => !!e && !!e.getVelocity;
function Oa(e) {
  return !!K(e) && !!e.add;
}
function ka(e, t) {
  let n = e.getValue(`willChange`);
  if (Oa(n)) {
    return n.add(t);
  }
  if (!n && A.WillChange) {
    let n = new A.WillChange(`auto`);
    e.addValue(`willChange`, n);
    n.add(t);
  }
}
var Aa = `data-framer-appear-id`;
function ja(e) {
  return e.props[Aa];
}
function Ma({
  protectedKeys: e,
  needsAnimating: t
}, n) {
  let r = n in e && !t[n];
  t[n] = false;
  return r;
}
function Na(e, t, {
  delay: n = 0,
  transitionOverride: r,
  type: i
} = {}) {
  let {
    transition: a,
    transitionEnd: o,
    ...s
  } = t;
  let c = e.getDefaultTransition();
  a = a ? oa(a, c) : c;
  let l = a?.reduceMotion;
  let u = a?.skipAnimations;
  if (r) {
    a = r;
  }
  let d = [];
  let f = i && e.animationState?.getState()[i];
  let p = a?.path;
  if (p) {
    if (p.animateValues) {
      p.animateValues(t => e.getValue(t, e.latestValues[t] ?? 0), s, a, n, d);
    } else {
      p.animateVisualElement?.(e, s, a, n, d);
    }
  }
  for (let t in s) {
    let r = e.getValue(t, e.latestValues[t] ?? null);
    let i = s[t];
    if (i === undefined || f && Ma(f, t)) {
      continue;
    }
    let o = {
      delay: n,
      ...sa(f?.out[t] || a || {}, t)
    };
    if (u) {
      o.skipAnimations = true;
    }
    let c = r.get();
    if (c !== undefined && !r.isAnimating() && !Array.isArray(i) && i === c && !o.velocity) {
      V.update(() => r.set(i));
      continue;
    }
    let p = false;
    if (window.MotionHandoffAnimation) {
      let n = ja(e);
      if (n) {
        let e = window.MotionHandoffAnimation(n, t, V);
        if (e !== null) {
          o.startTime = e;
          p = true;
        }
      }
    }
    ka(e, t);
    let m = l ?? e.shouldReduceMotion;
    r.run(ha(t, r, i, m && Ca.has(t) ? {
      type: false
    } : o, e, p));
    let h = r.animation;
    if (h) {
      d.push(h);
    }
  }
  if (o) {
    let t = () => V.update(() => {
      if (o) {
        Da(e, o);
      }
    });
    if (d.length) {
      Promise.all(d).then(t);
    } else {
      t();
    }
  }
  return d;
}
function Pa(e, t, n = {}) {
  let r = xa(e, t, Sa(e, n.type));
  let i = n.transitionOverride || (r?.transition ?? (e.getDefaultTransition() || {}));
  let a = () => Promise.all(r ? Na(e, r, n) : []);
  let o = (r = 0) => {
    let {
      variantChildren: a
    } = e;
    let {
      delayChildren: o = 0,
      staggerChildren: s,
      staggerDirection: c
    } = i;
    let l = [];
    a?.forEach(e => {
      e.notify(`AnimationStart`, t);
      l.push(Pa(e, t, {
        ...n,
        delay: r + (typeof o == `function` ? 0 : o) + ta(a, e, o, s, c)
      }).then(() => e.notify(`AnimationComplete`, t)));
    });
    return Promise.all(l);
  };
  let {
    when: s
  } = i;
  if (s) {
    if (s === `beforeChildren`) {
      return a().then(() => o());
    } else {
      return o().then(a);
    }
  } else {
    return Promise.all([a(), o(n.delay)]);
  }
}
function Fa(e, t, n = {}) {
  e.notify(`AnimationStart`, t);
  return (Array.isArray(t) ? Promise.all(t.map(t => Pa(e, t, n))) : typeof t == `string` ? Pa(e, t, n) : Promise.all(Na(e, xa(e, t, n.custom), n))).then(() => {
    e.notify(`AnimationComplete`, t);
  });
}
var Ia = {
  test: e => e === `auto`,
  parse: e => e
};
var La = e => t => t.test(e);
var Ra = [We, L, I, at, st, ot, Ia];
var za = e => Ra.find(La(e));
function Ba(e) {
  if (typeof e == `number`) {
    return e === 0;
  } else {
    return e === null || e === `none` || e === `0` || ce(e);
  }
}
var Va = new Set([`auto`, `none`, `0`]);
function Ha(e, t, n) {
  let r = 0;
  let i;
  while (r < e.length && !i) {
    let t = e[r];
    if (typeof t == `string` && !Va.has(t) && bt(t)) {
      i = e[r];
    }
    r++;
  }
  if (i && n) {
    for (let r of t) {
      if (e[r] !== i) {
        e[r] = fr(n, i);
      }
    }
  }
}
var Ua = class extends Hr {
  constructor(e, t, n, r, i) {
    super(e, t, n, r, i, true);
  }
  scheduleResolve() {
    if (this.canReadNow() && (this.readKeyframes(), !this.needsMeasurement)) {
      return this.complete();
    }
    super.scheduleResolve();
  }
  canReadNow() {
    let {
      unresolvedKeyframes: e,
      element: t,
      motionValue: n
    } = this;
    let r = e[0] ?? n?.get();
    if (!t?.current || r === undefined) {
      return false;
    }
    for (let t = 0; t < e.length; t++) {
      if (Ue(t ? e[t] : r)) {
        return false;
      }
    }
    return true;
  }
  readKeyframes() {
    let {
      unresolvedKeyframes: e,
      element: t,
      name: n
    } = this;
    if (!t?.current) {
      return;
    }
    super.readKeyframes();
    for (let n = 0; n < e.length; n++) {
      let r = e[n];
      if (typeof r == `string` && (r = r.trim(), Ve(r))) {
        let i = va(r, t.current);
        if (i !== undefined) {
          e[n] = i;
        }
        if (n === e.length - 1) {
          this.finalKeyframe = r;
        }
      }
    }
    this.resolveNoneKeyframes();
    if (!Ca.has(n) || e.length !== 2) {
      return;
    }
    let [r, i] = e;
    if (typeof r == `number` && typeof i == `number`) {
      return;
    }
    let a = za(r);
    let o = za(i);
    if (Ue(r) !== Ue(i) && Nr[n]) {
      this.needsMeasurement = true;
    } else if (a !== o) {
      if (Tr(a) && Tr(o)) {
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (typeof n == `string`) {
            e[t] = parseFloat(n);
          }
        }
      } else if (Nr[n]) {
        this.needsMeasurement = true;
      }
    }
  }
  resolveNoneKeyframes() {
    let {
      unresolvedKeyframes: e,
      name: t
    } = this;
    let n = [];
    for (let t = 0; t < e.length; t++) {
      if (e[t] === null || Ba(e[t])) {
        n.push(t);
      }
    }
    if (n.length) {
      Ha(e, n, t);
    }
  }
  measure() {
    let {
      element: e,
      name: t
    } = this;
    return Nr[t](window.getComputedStyle(e.current), () => e.measureViewportBox());
  }
  measureInitialState() {
    let {
      element: e,
      unresolvedKeyframes: t,
      name: n
    } = this;
    if (!e?.current) {
      return;
    }
    if (n === `height`) {
      this.suspendedScrollY = window.pageYOffset;
    }
    this.measuredOrigin = this.measure();
    t[0] = this.measuredOrigin;
    let r = t[t.length - 1];
    if (r !== undefined) {
      this.motionValue?.jump(r, false);
    }
  }
  measureEndState() {
    let {
      element: e,
      unresolvedKeyframes: t
    } = this;
    if (!e?.current) {
      return;
    }
    this.motionValue?.jump(this.measuredOrigin, false);
    let n = t.length - 1;
    let r = t[n];
    t[n] = this.measure();
    if (r !== null && this.finalKeyframe === undefined) {
      this.finalKeyframe = r;
    }
    this.resolveNoneKeyframes();
  }
};
var Wa = [`borderTopLeftRadius`, `borderTopRightRadius`, `borderBottomRightRadius`, `borderBottomLeftRadius`];
var Ga = [];
function Ka(e) {
  qa(e);
  Ga.unshift(e);
}
function qa(e) {
  ae(Ga, e);
}
function Ja(e) {
  return Ga.find(t => t.test(e));
}
function Ya(e, t, n = {}, r) {
  let i = [];
  let {
    velocity: a,
    path: o
  } = n;
  let s = n.reduceMotion ?? r?.shouldReduceMotion;
  if (o?.animateValues && r) {
    t = {
      ...t
    };
    o.animateValues(e, t, n, 0, i);
  }
  for (let o in t) {
    if (o === `transition` || o === `transitionEnd`) {
      continue;
    }
    let c = t[o];
    if (c === undefined) {
      continue;
    }
    let l = e(o);
    let u = l.get();
    if (u !== undefined && !l.isAnimating() && !Array.isArray(c) && c === u && !a) {
      V.update(() => l.set(c));
    } else {
      l.run(ha(o, l, c, s && Ca.has(o) ? {
        type: false
      } : n, r));
      if (l.animation) {
        i.push(l.animation);
      }
    }
  }
  let {
    transitionEnd: c
  } = t;
  if (c) {
    let t = () => V.update(() => {
      for (let t in c) {
        e(t).set(c[t]);
      }
    });
    if (i.length) {
      Promise.all(i).then(t);
    } else {
      t();
    }
  }
  return i;
}
function Xa(e, t, n, r, i) {
  let a;
  let o = false;
  let s = Ya(r => {
    let s = a?.[r] ?? e.get(t, r);
    if (!s) {
      let c;
      if (!i) {
        let i = n[r];
        c = Za(i) ?? e.read(t, r, i);
      }
      s = G(c, {
        owner: i
      });
      if (o) {
        e(t, {
          [r]: s
        });
      } else {
        (a ||= {})[r] = s;
      }
    }
    return s;
  }, n, r, i);
  o = true;
  if (a) {
    e(t, a);
  }
  return s;
}
function Za(e) {
  let t = Array.isArray(e) ? e[0] : undefined;
  if (t === null) {
    return undefined;
  } else {
    return t;
  }
}
function Qa(e) {
  return se(e) && `offsetHeight` in e && !(`ownerSVGElement` in e);
}
function $a(e) {
  return se(e) && `ownerSVGElement` in e;
}
var eo = {};
function to(e) {
  eo.current?.add(e);
  return e;
}
var no = e => eo.current ? eo.current.bind(e) : e;
function ro(e, t, n) {
  if (e == null) {
    return [];
  }
  if (e instanceof EventTarget) {
    return [e];
  }
  if (typeof e == `string`) {
    let r = t ? t.current : eo.current?.root || document;
    let i = n?.[e] ?? r.querySelectorAll(e);
    if (i) {
      return Array.from(i);
    } else {
      return [];
    }
  }
  return Array.from(e).filter(e => e != null);
}
var io = class {
  constructor(e = V.render) {
    this.step = e;
    this.values = new Map();
    this.pending = [];
    this.numPending = 0;
    this.flush = () => {
      let {
        pending: e,
        numPending: t
      } = this;
      this.numPending = 0;
      for (let n = 0; n < t; n++) {
        e[n]();
      }
    };
  }
  set(e, t, n, r) {
    this.values.get(e)?.onRemove();
    if (r) {
      for (let e of this.values.values()) {
        if (e.value === r) {
          n = e.render;
        }
      }
    }
    let i = () => n && this.schedule(n);
    if (t.get() !== undefined) {
      i();
    }
    let a = t.on(`change`, i);
    let o = () => {
      a();
      if (n && !r) {
        this.cancel(n);
      }
      if (this.values.get(e)?.onRemove === o) {
        this.values.delete(e);
      }
    };
    this.values.set(e, {
      value: t,
      render: r ? undefined : n,
      onRemove: o
    });
    return o;
  }
  get(e) {
    return this.values.get(e)?.value;
  }
  release() {
    let e = new Map();
    this.values.forEach((t, n) => {
      e.set(n, t.value);
      t.onRemove();
    });
    this.transformKeys = this.transformValues = undefined;
    return e;
  }
  schedule(e) {
    let {
      pending: t,
      numPending: n
    } = this;
    for (let r = 0; r < n; r++) {
      if (t[r] === e) {
        return;
      }
    }
    if (!n) {
      this.step(this.flush);
    }
    t[this.numPending++] = e;
  }
  cancel(e) {
    let {
      pending: t
    } = this;
    for (let n = 0; n < this.numPending; n++) {
      if (t[n] === e) {
        t[n] = t[--this.numPending];
        return;
      }
    }
  }
};
function ao(e, {
  step: t,
  ...n
} = {}) {
  let r = new WeakMap();
  return Object.assign((n, i) => {
    let a = r.get(n) ?? new io(t);
    r.set(n, a);
    let o = [];
    for (let t in i) {
      let r = i[t];
      let s = e(n, a, t, r);
      o.push(s);
    }
    return () => {
      for (let e of o) {
        e();
      }
    };
  }, n, {
    get: (e, t) => r.get(e)?.get(t),
    flush: e => r.get(e)?.flush(),
    state: e => r.get(e)
  });
}
function oo(e) {
  let t = ``;
  let {
    transformKeys: n = [],
    transformValues: r = {}
  } = e;
  for (let e = 0; e < n.length; e++) {
    let i = n[e];
    let a = r[i].getCurrent();
    if (a !== undefined) {
      if (!Si(i, a)) {
        t += (t && ` `) + xi(i, a);
      }
    }
  }
  let i = e.get(`pathRotation`)?.get();
  if (i) {
    t += (t && ` `) + xi(`rotate`, i);
  }
  return t || `none`;
}
var so = new Set([`originX`, `originY`, `originZ`]);
var co = (e, t) => _i(e.get(t)?.get(), ar[t]);
var lo = (e, t, n, r) => {
  let i;
  let a;
  if (W.has(n)) {
    if (n !== `pathRotation`) {
      let e = t.transformKeys ??= [];
      (t.transformValues ??= {})[n] = r;
      if (!e.includes(n)) {
        e.push(n);
        e.sort((e, t) => U.indexOf(e) - U.indexOf(t));
      }
    }
    if (!t.get(`transform`)) {
      if (!Qa(e) && !t.get(`transformBox`)) {
        lo(e, t, `transformBox`, new aa(`fill-box`));
      }
      t.set(`transform`, new aa(`none`), () => {
        wi.get(e)?.check();
        e.style.transform = oo(t);
      });
    }
    a = t.get(`transform`);
  } else if (so.has(n)) {
    if (!t.get(`transformOrigin`)) {
      t.set(`transformOrigin`, new aa(``), () => {
        let n = co(t, `originX`) ?? `50%`;
        let r = co(t, `originY`) ?? `50%`;
        let i = co(t, `originZ`) ?? 0;
        e.style.transformOrigin = `${n} ${r} ${i}`;
      });
    }
    a = t.get(`transformOrigin`);
  } else {
    i = Ur(n) ? () => {
      e.style.setProperty(n, r.getCurrent());
    } : () => {
      e.style[n] = _i(r.getCurrent(), ar[n]);
    };
  }
  return t.set(n, r, i, a);
};
var uo = e => Qa(e) || $a(e);
var fo = (e, t) => {
  if (W.has(t)) {
    return wr(e, t);
  }
  let n = getComputedStyle(e);
  let r = Ur(t) ? n.getPropertyValue(t) : n[t];
  return typeof r == `string` && r.trim() || 0;
};
var po = ao(lo, {
  test: uo,
  read: fo
});
function mo(e) {
  return e.replace(/([A-Z])/g, e => `-${e.toLowerCase()}`);
}
function ho(e, t, n) {
  let {
    style: r,
    vars: i,
    transformOrigin: a
  } = e;
  let o = false;
  let s = false;
  for (let e in t) {
    let n = t[e];
    if (W.has(e)) {
      o = true;
    } else if (ze(e)) {
      i[e] = n;
    } else {
      let t = _i(n, ar[e]);
      if (e.startsWith(`origin`)) {
        s = true;
        a[e] = t;
      } else {
        r[e] = t;
      }
    }
  }
  if (!t.transform) {
    if (o || n) {
      r.transform = Ci(t, e.transform, n);
    } else {
      r.transform &&= `none`;
    }
  }
  if (s) {
    let {
      originX: e = `50%`,
      originY: t = `50%`,
      originZ: n = 0
    } = a;
    r.transformOrigin = `${e} ${t} ${n}`;
  }
}
var go = {
  offset: `stroke-dashoffset`,
  array: `stroke-dasharray`
};
var _o = {
  offset: `strokeDashoffset`,
  array: `strokeDasharray`
};
function vo(e, t, n = 1, r = 0, i = true) {
  e.pathLength = 1;
  let a = i ? go : _o;
  e[a.offset] = `${-r}`;
  e[a.array] = `${t} ${n}`;
}
var yo = [`transform`, `opacity`, `clipPath`, `filter`, `offsetDistance`, `offsetPath`, `offsetRotate`, `offsetAnchor`];
function bo(e, {
  attrX: t,
  attrY: n,
  attrScale: r,
  pathLength: i,
  pathSpacing: a = 1,
  pathOffset: o = 0,
  ...s
}, c, l, u) {
  ho(e, s, l);
  if (c) {
    if (e.style.viewBox) {
      e.attrs.viewBox = e.style.viewBox;
    }
    return;
  }
  e.attrs = e.style;
  e.style = {};
  let {
    attrs: d,
    style: f
  } = e;
  for (let e of yo) {
    if (d[e] !== undefined) {
      f[e] = d[e];
      delete d[e];
    }
  }
  if (f.transform || d.transformOrigin) {
    f.transformOrigin = d.transformOrigin ?? `50% 50%`;
    delete d.transformOrigin;
  }
  if (f.transform) {
    f.transformBox = u?.transformBox ?? `fill-box`;
    delete d.transformBox;
  }
  if (t !== undefined) {
    d.x = t;
  }
  if (n !== undefined) {
    d.y = n;
  }
  if (r !== undefined) {
    d.scale = r;
  }
  if (i !== undefined) {
    vo(d, i, a, o, false);
  }
}
function xo(e, t) {
  if (!(t in e)) {
    return false;
  }
  let n = Object.getOwnPropertyDescriptor(Object.getPrototypeOf(e), t) || Object.getOwnPropertyDescriptor(e, t);
  return n && typeof n.set == `function`;
}
var So = (e, t, n, r, i = n) => {
  let a = xo(e, i);
  if (!a && (i.startsWith(`data`) || i.startsWith(`aria`))) {
    i = mo(i);
  }
  let o = ar[n] || ar[i];
  let s = a ? () => {
    e[i] = _i(r.get(), ar[n]);
  } : () => {
    let t = _i(r.get(), o);
    if (t == null) {
      e.removeAttribute(i);
    } else {
      e.setAttribute(i, String(t));
    }
  };
  return t.set(n, r, s);
};
function Co(e, t, n, r) {
  V.render(() => e.setAttribute(`pathLength`, `1`));
  if (n === `pathOffset`) {
    return t.set(n, r, () => {
      let t = r.get();
      e.setAttribute(`stroke-dashoffset`, `${-t}`);
    });
  } else {
    if (!t.get(`stroke-dasharray`)) {
      t.set(`stroke-dasharray`, new aa(`1 1`), () => {
        let n = t.get(`pathLength`)?.get() ?? 1;
        let r = t.get(`pathSpacing`)?.get();
        e.setAttribute(`stroke-dasharray`, `${n} ${r ?? 1 - Number(n)}`);
      });
    }
    return t.set(n, r, undefined, t.get(`stroke-dasharray`));
  }
}
var wo = ao((e, t, n, r) => n.startsWith(`path`) && !W.has(n) ? Co(e, t, n, r) : n.startsWith(`attr`) ? So(e, t, n, r, To(n)) : n === `d` ? t.set(n, r, () => {
  let t = r.get()?.replace(/path\(|["')]/g, ``);
  if (t === undefined) {
    e.removeAttribute(n);
  } else {
    e.setAttribute(n, t);
  }
}) : (W.has(n) || so.has(n) || Ur(n) || n in e.style ? lo : So)(e, t, n, r), {
  test: $a,
  read: (e, t) => W.has(t) ? ar[t]?.default || 0 : Ur(t) || yo.includes(t) ? fo(e, t) || e.getAttribute(mo(t)) || 0 : (t = To(t), e.getAttribute(mo(t)) ?? e.getAttribute(t) ?? undefined)
});
function To(e) {
  return e.replace(/^attr([A-Z])/, (e, t) => t.toLowerCase());
}
function Eo({
  top: e,
  left: t,
  right: n,
  bottom: r
}) {
  return {
    x: {
      min: t,
      max: n
    },
    y: {
      min: e,
      max: r
    }
  };
}
function Do({
  x: e,
  y: t
}) {
  return {
    top: t.min,
    right: e.max,
    bottom: t.max,
    left: e.min
  };
}
function Oo(e, t) {
  if (!t) {
    return e;
  }
  let n = t({
    x: e.left,
    y: e.top
  });
  let r = t({
    x: e.right,
    y: e.bottom
  });
  return {
    top: n.y,
    left: n.x,
    bottom: r.y,
    right: r.x
  };
}
function ko(e) {
  return e === undefined || e === 1;
}
function Ao({
  scale: e,
  scaleX: t,
  scaleY: n
}) {
  return !ko(e) || !ko(t) || !ko(n);
}
var jo = [`rotate`, `rotateX`, `rotateY`, `rotateZ`, `skewX`, `skewY`];
function Mo(e) {
  return Ao(e) || Po(e) || No(e);
}
function No(e) {
  return e.z || e.rotate || e.rotateX || e.rotateY || e.rotateZ || e.skewX || e.skewY;
}
function Po(e) {
  return Fo(e.x) || Fo(e.y);
}
function Fo(e) {
  return e && e !== `0%`;
}
function Io(e, t, n) {
  return n + t * (e - n);
}
function Lo(e, t, n, r, i) {
  if (i !== undefined) {
    e = Io(e, i, r);
  }
  return Io(e, n, r) + t;
}
function Ro(e, t = 0, n = 1, r, i) {
  e.min = Lo(e.min, t, n, r, i);
  e.max = Lo(e.max, t, n, r, i);
}
function zo(e, {
  x: t,
  y: n
}) {
  Ro(e.x, t.translate, t.scale, t.originPoint);
  Ro(e.y, n.translate, n.scale, n.originPoint);
}
var Bo = 0.999999999999;
var Vo = 1.0000000000001;
function Ho(e, t, n, r = false) {
  let i = n.length;
  if (!i) {
    return;
  }
  t.x = t.y = 1;
  let a;
  let o;
  for (let s = 0; s < i; s++) {
    a = n[s];
    o = a.projectionDelta;
    if (a.options.visualElement?.props.style?.display !== `contents`) {
      if (r === true && a.options.layoutScroll && a.scroll && a !== a.root) {
        q(e.x, -a.scroll.offset.x);
        q(e.y, -a.scroll.offset.y);
      }
      if (o) {
        t.x *= o.x.scale;
        t.y *= o.y.scale;
        zo(e, o);
      }
      if (r && (r.path?.[s] || r) !== a && Mo(a.latestValues)) {
        Go(e, a.latestValues, a.layout?.layoutBox);
      }
    }
  }
  if (t.x < Vo && t.x > Bo) {
    t.x = 1;
  }
  if (t.y < Vo && t.y > Bo) {
    t.y = 1;
  }
}
function q(e, t) {
  e.min += t;
  e.max += t;
}
function Uo(e, t, n, r, i = 0.5) {
  Ro(e, t, n, B(e.min, e.max, i), r);
}
function Wo(e, t) {
  if (typeof e == `string`) {
    return parseFloat(e) / 100 * (t.max - t.min);
  } else {
    return e;
  }
}
function Go(e, t, n) {
  let r = n ?? e;
  Uo(e.x, Wo(t.x, r.x), t.scaleX, t.scale, t.originX);
  Uo(e.y, Wo(t.y, r.y), t.scaleY, t.scale, t.originY);
}
function Ko(e, t) {
  return Eo(Oo(e.getBoundingClientRect(), t));
}
function qo(e, t, n) {
  let r = Ko(e, n);
  let {
    scroll: i
  } = t;
  if (i) {
    q(r.x, i.offset.x);
    q(r.y, i.offset.y);
  }
  return r;
}
var Jo = () => ({
  x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
  y: document.documentElement.scrollTop || document.body?.scrollTop || 0
});
var Yo = {};
var Xo = e => $a(e) ? wo : po;
var Zo = class {
  constructor(e, t) {
    this.effect = e;
    this.current = t;
    this.KeyframeResolver = Ua;
  }
  getValue(e) {
    return this.effect.get(this.current, e);
  }
  readValue(e, t) {
    return this.effect.read(this.current, e, t);
  }
  render() {
    this.effect.flush(this.current);
  }
  measureViewportBox() {
    return Ko(this.current);
  }
  getProps() {
    return Yo;
  }
};
function Qo(e, t, n, r) {
  eo.current?.track(e);
  if (r) {
    return Ya(e => r.getValue(e, null), t, n, r);
  }
  let i = Xo(e);
  return Xa(i, e, t, n, new Zo(i, e));
}
var $o = ao((e, t, n, r) => t.set(n, r, () => {
  e[n] = r.get();
}), {
  test: e => se(e),
  read: (e, t) => {
    let n = e[t];
    if (typeof n == `string` || typeof n == `number`) {
      return n;
    } else {
      return undefined;
    }
  }
});
var {
  schedule: es,
  cancel: ts
} = Xt(queueMicrotask, false);
function ns(e, t, n) {
  let r = K(e) ? e : G(e);
  r.run(ha(``, r, t, n));
  return r.animation;
}
var rs = {};
var is = {
  value: null,
  addProjectionMetrics: null,
  countProjection: undefined
};
function as(e, t) {
  let n = F.now();
  e = no(e);
  let r = ({
    timestamp: i
  }) => {
    let a = i - n;
    if (a >= t) {
      H(r);
      e(a - t);
    }
  };
  V.setup(r, true);
  return to(() => H(r));
}
function os(e) {
  return e && typeof e == `object` && Object.prototype.hasOwnProperty.call(e, `current`);
}
function ss(e) {
  return $a(e) && e.tagName === `svg`;
}
function cs(e) {
  if (K(e)) {
    return e.get();
  } else {
    return e;
  }
}
var ls = e => typeof e == `number` ? e : parseFloat(e);
var us = Wa.length;
var ds = e => typeof e == `number` || L.test(e);
function fs(e, t, n, r, i, a) {
  if (i) {
    e.opacity = B(0, n.opacity ?? 1, ms(r));
    e.opacityExit = B(t.opacity ?? 1, 0, hs(r));
  } else if (a) {
    e.opacity = B(t.opacity ?? 1, n.opacity ?? 1, r);
  }
  for (let i = 0; i < us; i++) {
    let a = Wa[i];
    let o = ps(t, a);
    let s = ps(n, a);
    if (o !== undefined || s !== undefined) {
      o ||= 0;
      s ||= 0;
      if (o === 0 || s === 0 || ds(o) === ds(s)) {
        e[a] = Math.max(B(ls(o), ls(s), r), 0);
        if (I.test(s) || I.test(o)) {
          e[a] += `%`;
        }
      } else {
        e[a] = s;
      }
    }
  }
  for (let i = 0; i < jo.length; i++) {
    let a = jo[i];
    if (t[a] || n[a]) {
      e[a] = B(t[a] || 0, n[a] || 0, r);
    }
  }
}
function ps(e, t) {
  if (e[t] === undefined) {
    return e.borderRadius;
  } else {
    return e[t];
  }
}
var ms = gs(0, 0.5, we);
var hs = gs(0.5, 0.95, j);
function gs(e, t, n) {
  return r => r < e ? 0 : r > t ? 1 : n(de(e, t, r));
}
var _s = (e, t, {
  x: n,
  y: r
}) => {
  let i = e * e + t * t;
  if (i < 1) {
    return 0;
  } else {
    return (n * e + r * t) * -1000 / i;
  }
};
var vs = (e, t = 300) => {
  let n = k(0.25, 2, t / 300);
  let {
    stiffness: r,
    damping: i
  } = En({
    ...e,
    duration: e.duration && M(e.duration)
  });
  return {
    ...e,
    stiffness: r,
    damping: i * Math.sqrt(n),
    mass: n
  };
};
function ys(e, t) {
  e.min = t.min;
  e.max = t.max;
}
function J(e, t) {
  ys(e.x, t.x);
  ys(e.y, t.y);
}
function bs(e, t) {
  e.translate = t.translate;
  e.scale = t.scale;
  e.originPoint = t.originPoint;
  e.origin = t.origin;
}
var xs = 0.9999;
var Ss = 1.0001;
var Cs = -0.01;
var ws = 0.01;
function Y(e) {
  return e.max - e.min;
}
function Ts(e, t, n) {
  return Math.abs(e - t) <= n;
}
function Es(e, t, n, r = 0.5) {
  e.origin = r;
  e.originPoint = B(t.min, t.max, e.origin);
  e.scale = Y(n) / Y(t);
  e.translate = B(n.min, n.max, e.origin) - e.originPoint;
  if (e.scale >= xs && e.scale <= Ss || isNaN(e.scale)) {
    e.scale = 1;
  }
  if (e.translate >= Cs && e.translate <= ws || isNaN(e.translate)) {
    e.translate = 0;
  }
}
function Ds(e, t, n, r) {
  Es(e.x, t.x, n.x, r?.originX);
  Es(e.y, t.y, n.y, r?.originY);
}
function Os(e, t, n, r = 0) {
  e.min = (r ? B(n.min, n.max, r) : n.min) + t.min;
  e.max = e.min + Y(t);
}
function ks(e, t, n, r) {
  Os(e.x, t.x, n.x, r?.x);
  Os(e.y, t.y, n.y, r?.y);
}
function As(e, t, n, r = 0) {
  let i = r ? B(n.min, n.max, r) : n.min;
  e.min = t.min - i;
  e.max = e.min + Y(t);
}
function js(e, t, n, r) {
  As(e.x, t.x, n.x, r?.x);
  As(e.y, t.y, n.y, r?.y);
}
function Ms(e, t, n, r, i) {
  e -= t;
  e = Io(e, 1 / n, r);
  if (i !== undefined) {
    e = Io(e, 1 / i, r);
  }
  return e;
}
function Ns(e, t = 0, n = 1, r = 0.5, i, a = e, o = e) {
  if (I.test(t)) {
    t = parseFloat(t);
    t = B(o.min, o.max, t / 100) - o.min;
  }
  if (typeof t != `number`) {
    return;
  }
  let s = B(a.min, a.max, r);
  if (e === a) {
    s -= t;
  }
  e.min = Ms(e.min, t, n, s, i);
  e.max = Ms(e.max, t, n, s, i);
}
function Ps(e, t, [n, r, i], a, o) {
  Ns(e, t[n], t[r], t[i], t.scale, a, o);
}
var Fs = [`x`, `scaleX`, `originX`];
var Is = [`y`, `scaleY`, `originY`];
function Ls(e, t, n, r) {
  Ps(e.x, t, Fs, n?.x, r?.x);
  Ps(e.y, t, Is, n?.y, r?.y);
}
var Rs = e => typeof navigator < `u` && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e);
var zs = Rs(`applewebkit/`) && !Rs(`chrome/`) ? Math.round : j;
function Bs(e) {
  e.min = zs(e.min);
  e.max = zs(e.max);
}
function Vs(e) {
  Bs(e.x);
  Bs(e.y);
}
var Hs = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
});
var Us = () => ({
  x: Hs(),
  y: Hs()
});
var Ws = () => ({
  min: 0,
  max: 0
});
var X = () => ({
  x: Ws(),
  y: Ws()
});
function Gs(e) {
  return e.translate === 0 && e.scale === 1;
}
function Ks(e) {
  return Gs(e.x) && Gs(e.y);
}
function qs(e, t) {
  return e.min === t.min && e.max === t.max;
}
function Js(e, t) {
  return qs(e.x, t.x) && qs(e.y, t.y);
}
function Ys(e, t) {
  return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max);
}
function Xs(e, t) {
  return Ys(e.x, t.x) && Ys(e.y, t.y);
}
function Zs(e) {
  return Y(e.x) / Y(e.y);
}
function Qs(e, t) {
  return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint;
}
var $s = class {
  constructor() {
    this.members = [];
  }
  add(e) {
    ie(this.members, e);
    for (let t = this.members.length - 1; t >= 0; t--) {
      let n = this.members[t];
      if (n === e || n === this.lead || n === this.prevLead) {
        continue;
      }
      let r = n.instance;
      if ((!r || r.isConnected === false) && !n.snapshot) {
        ae(this.members, n);
        n.unmount();
      }
    }
    e.scheduleRender();
  }
  remove(e) {
    ae(this.members, e);
    if (e === this.prevLead) {
      this.prevLead = undefined;
    }
    if (e === this.lead) {
      let e = this.members[this.members.length - 1];
      if (e) {
        this.promote(e);
      }
    }
  }
  relegate(e) {
    for (let t = this.members.indexOf(e) - 1; t >= 0; t--) {
      let e = this.members[t];
      if (e.isPresent !== false && e.instance?.isConnected !== false) {
        this.promote(e);
        return true;
      }
    }
    return false;
  }
  promote(e, t) {
    let n = this.lead;
    if (e !== n && (this.prevLead = n, this.lead = e, e.show(), n)) {
      n.updateSnapshot();
      e.scheduleRender();
      let {
        layoutDependency: r
      } = n.options;
      let {
        layoutDependency: i
      } = e.options;
      if (r === undefined || r !== i) {
        e.resumeFrom = n;
        if (t) {
          n.preserveOpacity = true;
        }
        if (n.snapshot) {
          e.snapshot = n.snapshot;
          e.snapshot.latestValues = n.animationValues || n.latestValues;
        }
        if (e.root?.isUpdating) {
          e.isLayoutDirty = true;
        }
      }
      if (e.options.crossfade === false) {
        n.hide();
      }
    }
  }
  exitAnimationComplete() {
    this.members.forEach(e => {
      e.options.onExitComplete?.();
      e.resumingFrom?.options.onExitComplete?.();
    });
  }
  scheduleRender() {
    this.members.forEach(e => e.instance && e.scheduleRender(false));
  }
  removeLeadSnapshot() {
    if (this.lead?.snapshot) {
      this.lead.snapshot = undefined;
    }
  }
};
function ec(e, t) {
  if (t.max === t.min) {
    return 0;
  } else {
    return e / (t.max - t.min) * 100;
  }
}
var tc = {
  correct: (e, t) => {
    if (!t.target) {
      return e;
    }
    if (typeof e == `string`) {
      if (L.test(e)) {
        e = parseFloat(e);
      } else {
        return e;
      }
    }
    return `${ec(e, t.target.x)}% ${ec(e, t.target.y)}%`;
  }
};
var nc = {
  borderRadius: Object.assign({}, tc, {
    applyTo: Wa.slice()
  }),
  borderTopLeftRadius: tc,
  borderTopRightRadius: tc,
  borderBottomLeftRadius: tc,
  borderBottomRightRadius: tc,
  boxShadow: {
    correct: (e, {
      treeScale: t,
      projectionDelta: n
    }) => {
      let r = e;
      let i = z.parse(e);
      if (i.length > 5) {
        return r;
      }
      let a = z.createTransformer(e);
      let o = typeof i[0] == `number` ? 0 : 1;
      let s = n.x.scale * t.x;
      let c = n.y.scale * t.y;
      i[0 + o] /= s;
      i[1 + o] /= c;
      let l = B(s, c, 0.5);
      if (typeof i[2 + o] == `number`) {
        i[2 + o] /= l;
      }
      if (typeof i[3 + o] == `number`) {
        i[3 + o] /= l;
      }
      return a(i);
    }
  }
};
function rc(e, t, n) {
  let r = ``;
  let i = e.x.translate / t.x;
  let a = e.y.translate / t.y;
  let o = n?.z || 0;
  if (i || a || o) {
    r = `translate3d(${i}px, ${a}px, ${o}px) `;
  }
  let s = ``;
  if (n) {
    let {
      transformPerspective: e
    } = n;
    if (e) {
      r = `perspective(${e}px) ${r}`;
    }
    for (let e = 0; e < jo.length; e++) {
      let t = jo[e];
      let r = n[t];
      if (r) {
        s += `${t}(${r}deg) `;
      }
      if (!e && n.pathRotation) {
        s += `rotate(${n.pathRotation}deg) `;
      }
    }
  }
  if (s) {
    if (t.x !== 1 || t.y !== 1) {
      r += `scale(${1 / t.x}, ${1 / t.y}) `;
    }
    r += s;
    let n = e.x.scale * t.x;
    let i = e.y.scale * t.y;
    if (n !== 1 || i !== 1) {
      r += `scale(${n}, ${i})`;
    }
  } else if (e.x.scale !== 1 || e.y.scale !== 1) {
    r += `scale(${e.x.scale}, ${e.y.scale})`;
  } else if (!r && (t.x !== 1 || t.y !== 1)) {
    r = `scale(1, 1)`;
  }
  return r || `none`;
}
function Z(e) {
  return [e(`x`), e(`y`)];
}
var ic = (e, t) => e.depth - t.depth;
var ac = class {
  constructor() {
    this.children = [];
    this.isDirty = false;
  }
  add(e) {
    ie(this.children, e);
    this.isDirty = true;
  }
  remove(e) {
    ae(this.children, e);
    this.isDirty = true;
  }
  forEach(e) {
    if (this.isDirty) {
      this.children.sort(ic);
    }
    this.isDirty = false;
    this.children.forEach(e);
  }
};
var oc = {
  hasAnimatedSinceResize: true,
  hasEverUpdated: false
};
var sc = [`z`, `skew`, `skewZ`];
var cc = 1000;
var lc = 0;
function uc(e, t, n, r) {
  let {
    latestValues: i
  } = t;
  if (i[e]) {
    n[e] = i[e];
    t.setStaticValue(e, 0);
    if (r) {
      r[e] = 0;
    }
  }
}
var dc = e => e.instance && wi.get(e.instance)?.demote() && e.resetSkewAndRotation();
function fc(e) {
  e.hasCheckedOptimisedAppear = true;
  if (e.root === e) {
    return;
  }
  let {
    visualElement: t
  } = e.options;
  if (!t) {
    return;
  }
  let n = ja(t);
  if (window.MotionHasOptimisedAnimation(n, `transform`)) {
    let {
      layout: t,
      layoutId: r
    } = e.options;
    window.MotionCancelOptimisedAnimation(n, `transform`, V, !t && !r);
  }
  let {
    parent: r
  } = e;
  if (r && !r.hasCheckedOptimisedAppear) {
    fc(r);
  }
}
function pc(e) {
  if (e) {
    if (e.options.allowProjection === false) {
      return pc(e.parent);
    } else {
      return e.projection;
    }
  }
}
function mc({
  attachResizeListener: e,
  defaultParent: t,
  measureScroll: n,
  checkIsScrollRoot: r,
  resetTransform: i
}) {
  Object.assign(rs, {
    ...nc,
    ...rs
  });
  return class {
    static create(e, t, n) {
      let {
        layoutId: r,
        layout: i,
        drag: a,
        dragConstraints: o,
        layoutScroll: s,
        layoutRoot: c,
        layoutAnchor: l,
        layoutCrossfade: u
      } = t;
      let d = e.projection = new this(e.latestValues, t[`data-framer-portal-id`] ? undefined : pc(e.parent));
      d.setOptions({
        layoutId: r,
        layout: i,
        alwaysMeasureLayout: !!a || o && os(o),
        visualElement: e,
        animationType: typeof i == `string` ? i : `both`,
        initialPromotionConfig: n,
        crossfade: u,
        layoutScroll: s,
        layoutRoot: c,
        layoutAnchor: l
      });
      let f = d.getStack()?.lead;
      if (f && !d.root.isUpdateBlocked()) {
        f.willUpdate();
        f.scheduleCheckAfterUnmount();
      }
    }
    constructor(e = {}, n = t?.()) {
      this.id = lc++;
      this.animationId = 0;
      this.animationCommitId = 0;
      this.children = new Set();
      this.options = {};
      this.isTreeAnimating = false;
      this.isAnimationBlocked = false;
      this.isLayoutDirty = false;
      this.isProjectionDirty = false;
      this.isSharedProjectionDirty = false;
      this.isTransformDirty = false;
      this.updateManuallyBlocked = false;
      this.updateBlockedByResize = false;
      this.isUpdating = false;
      this.isSVG = false;
      this.needsReset = false;
      this.shouldResetTransform = false;
      this.hasCheckedOptimisedAppear = false;
      this.treeScale = {
        x: 1,
        y: 1
      };
      this.eventHandlers = new Map();
      this.hasTreeAnimated = false;
      this.updateScheduled = false;
      this.scheduleUpdate = () => this.update();
      this.projectionUpdateScheduled = false;
      this.checkUpdateFailed = () => {
        if (this.isUpdating) {
          this.isUpdating = false;
          this.clearAllSnapshots();
        }
      };
      this.updateProjection = () => {
        this.projectionUpdateScheduled = false;
        this.nodes.forEach(_c);
        this.nodes.forEach(Oc);
        this.nodes.forEach(kc);
        this.nodes.forEach(vc);
        is.countProjection?.();
      };
      this.resolvedRelativeTargetAt = 0;
      this.hasProjected = false;
      this.isVisible = true;
      this.animationProgress = 0;
      this.sharedNodes = new Map();
      this.latestValues = e;
      this.root = n ? n.root || n : this;
      this.path = n ? [...n.path, n] : [];
      this.parent = n;
      this.depth = n ? n.depth + 1 : 0;
      for (let e = 0; e < this.path.length; e++) {
        this.path[e].shouldResetTransform = true;
      }
      if (this.root === this) {
        this.nodes = new ac();
      }
    }
    addEventListener(e, t) {
      if (!this.eventHandlers.has(e)) {
        this.eventHandlers.set(e, new fe());
      }
      return this.eventHandlers.get(e).add(t);
    }
    notifyListeners(e, ...t) {
      this.eventHandlers.get(e)?.notify(...t);
    }
    hasListeners(e) {
      return this.eventHandlers.has(e);
    }
    mount(t) {
      if (this.instance) {
        return;
      }
      this.isSVG = $a(t) && !ss(t);
      this.instance = t;
      let {
        layoutId: n,
        layout: r,
        visualElement: i
      } = this.options;
      if (i && !i.current) {
        i.mount(t);
      }
      this.root.nodes.add(this);
      this.parent?.children.add(this);
      if (this.root.hasTreeAnimated && (r || n)) {
        this.isLayoutDirty = true;
      }
      if (e) {
        let n;
        let r = 0;
        let i = () => this.root.updateBlockedByResize = false;
        V.read(() => {
          r = window.innerWidth;
        });
        e(t, () => {
          let e = window.innerWidth;
          if (e !== r) {
            r = e;
            this.root.updateBlockedByResize = true;
            n?.();
            n = as(i, 250);
            if (oc.hasAnimatedSinceResize) {
              oc.hasAnimatedSinceResize = false;
              this.nodes.forEach(Dc);
            }
          }
        });
      }
      if (n) {
        this.root.registerSharedNode(n, this);
      }
      this.addLayoutListener();
    }
    addLayoutListener() {
      let {
        layoutId: e,
        layout: t,
        visualElement: n,
        animate: r
      } = this.options;
      if (this.instance && !this.hasLayoutListener && r !== false && n && (e || t)) {
        this.hasLayoutListener = true;
        this.addEventListener(`didUpdate`, ({
          delta: e,
          hasLayoutChanged: t,
          hasRelativeLayoutChanged: r,
          layout: i
        }) => {
          if (this.isAnimationBlocked) {
            this.target = undefined;
            this.relativeTarget = undefined;
            return;
          }
          let a = this.options.transition || n.getDefaultTransition() || Ic;
          let {
            onLayoutAnimationStart: o,
            onLayoutAnimationComplete: s
          } = n.getProps();
          let c = !this.targetLayout || !Xs(this.targetLayout, i);
          let l = !t && r;
          if (this.options.layoutRoot || this.resumeFrom || l || t && (c || !this.currentAnimation)) {
            if (this.resumeFrom) {
              this.resumingFrom = this.resumeFrom;
              this.resumingFrom.resumingFrom = undefined;
            }
            let t = {
              ...sa(a, `layout`),
              onPlay: o,
              onComplete: s
            };
            if (n.shouldReduceMotion || this.options.layoutRoot) {
              t.delay = 0;
              t.type = false;
            }
            this.startAnimation(t);
            this.setAnimationOrigin(e, l, t.path);
          } else {
            if (!t) {
              Dc(this);
            }
            if (this.isLead()) {
              this.options.onExitComplete?.();
            }
          }
          this.targetLayout = i;
        });
      }
    }
    unmount() {
      if (this.options.layoutId) {
        this.willUpdate();
      }
      this.root.nodes.remove(this);
      this.getStack()?.remove(this);
      this.parent?.children.delete(this);
      this.instance = undefined;
      this.eventHandlers.clear();
      this.hasLayoutListener = false;
      H(this.updateProjection);
    }
    blockUpdate() {
      this.updateManuallyBlocked = true;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = false;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    startUpdate() {
      if (!this.isUpdateBlocked()) {
        this.isUpdating = true;
        this.nodes?.forEach(Ac);
        this.animationId++;
      }
    }
    getTransformTemplate() {
      let {
        visualElement: e
      } = this.options;
      return e && e.getProps().transformTemplate;
    }
    willUpdate(e = true) {
      this.root.hasTreeAnimated = true;
      if (this.root.isUpdateBlocked()) {
        this.options.onExitComplete?.();
        return;
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear) {
        fc(this);
      }
      if (!this.root.isUpdating) {
        this.root.startUpdate();
      }
      if (this.isLayoutDirty) {
        return;
      }
      dc(this);
      this.isLayoutDirty = true;
      for (let e = 0; e < this.path.length; e++) {
        let t = this.path[e];
        t.shouldResetTransform = true;
        dc(t);
        if (typeof t.latestValues.x == `string` || typeof t.latestValues.y == `string`) {
          t.isLayoutDirty = true;
        }
        t.updateScroll(`snapshot`);
        if (t.options.layoutRoot) {
          t.willUpdate(false);
        }
        if (t.isAnimationBlocked) {
          t.dragSnapshot ||= t.measure();
          this.dragAncestor = t;
        }
      }
      let {
        layoutId: t,
        layout: n
      } = this.options;
      if (t === undefined && !n) {
        return;
      }
      let r = this.getTransformTemplate();
      this.prevTransformTemplateValue = r ? r(this.latestValues, ``) : undefined;
      this.updateSnapshot();
      if (e) {
        this.notifyListeners(`willUpdate`);
      }
    }
    update() {
      this.updateScheduled = false;
      if (this.isUpdateBlocked()) {
        let e = this.updateBlockedByResize;
        this.unblockUpdate();
        this.updateBlockedByResize = false;
        this.clearAllSnapshots();
        if (e) {
          this.nodes.forEach(xc);
        }
        this.nodes.forEach(bc);
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Sc);
        return;
      }
      this.animationCommitId = this.animationId;
      if (this.isUpdating) {
        this.isUpdating = false;
        this.nodes.forEach(wc);
        this.nodes.forEach(Tc);
        this.nodes.forEach(Ec);
        this.nodes.forEach(hc);
        this.nodes.forEach(gc);
      } else {
        this.nodes.forEach(Sc);
      }
      this.clearAllSnapshots();
      let e = F.now();
      P.delta = k(0, 1000 / 60, e - P.timestamp);
      P.timestamp = e;
      P.isProcessing = true;
      Zt.update.process(P);
      Zt.preRender.process(P);
      Zt.render.process(P);
      P.isProcessing = false;
    }
    didUpdate() {
      if (!this.updateScheduled) {
        this.updateScheduled = true;
        es.read(this.scheduleUpdate);
      }
    }
    clearAllSnapshots() {
      this.nodes.forEach(yc);
      this.sharedNodes.forEach((e, t) => e.members.length ? e.removeLeadSnapshot() : this.sharedNodes.delete(t));
    }
    scheduleUpdateProjection() {
      if (!this.projectionUpdateScheduled) {
        this.projectionUpdateScheduled = true;
        V.preRender(this.updateProjection, false, true);
      }
    }
    scheduleCheckAfterUnmount() {
      V.postRender(() => {
        if (this.isLayoutDirty) {
          this.root.didUpdate();
        } else {
          this.root.checkUpdateFailed();
        }
      });
    }
    updateSnapshot() {
      if (!this.snapshot && this.instance && (this.snapshot = this.measure(), this.snapshot && !Y(this.snapshot.measuredBox.x) && !Y(this.snapshot.measuredBox.y) && (this.snapshot = undefined), this.snapshot)) {
        let {
          visualElement: e
        } = this.options;
        let t = this.currentAnimation?.state === `running`;
        let n = t && this.animationEdges;
        if (t && this.relativeTarget) {
          this.snapshot.relativeVelocity = this.relativeVelocity?.slice() || [];
        }
        let r = n && this.motionValue?.getVelocity() || 0;
        let i = [0, 1, 2, 3, 4, 5].map(t => (t < 4 ? n && (this.edgeValues ? this.edgeVelocity(t) : -n[t] * r / 1000) : e?.getValue(t < 5 ? `x` : `y`)?.getVelocity()) || 0);
        if (i.some(Boolean)) {
          this.snapshot.velocity = i;
        }
      }
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), (!this.options.alwaysMeasureLayout || !this.isLead()) && !this.isLayoutDirty)) {
        return;
      }
      if (this.resumeFrom && !this.resumeFrom.instance) {
        for (let e = 0; e < this.path.length; e++) {
          this.path[e].updateScroll();
        }
      }
      let e = this.layout;
      this.layout = this.measure(false);
      this.layoutCorrected ||= X();
      this.isLayoutDirty = false;
      this.projectionDelta = undefined;
      this.notifyListeners(`measure`, this.layout.layoutBox);
      let {
        visualElement: t
      } = this.options;
      t?.notify(`LayoutMeasure`, this.layout.layoutBox, e?.layoutBox);
    }
    updateScroll(e = `measure`) {
      let {
        scroll: t,
        instance: i
      } = this;
      let {
        animationId: a
      } = this.root;
      if (this.options.layoutScroll && i && (!t || t.animationId !== a || t.phase !== e)) {
        let o = r(i);
        this.scroll = {
          animationId: a,
          phase: e,
          isRoot: o,
          offset: n(i),
          wasRoot: t ? t.isRoot : o
        };
      }
    }
    resetTransform() {
      if (!i) {
        return;
      }
      let e = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout;
      if (e) {
        dc(this);
      }
      let t = this.projectionDelta && !Ks(this.projectionDelta);
      let n = this.getTransformTemplate();
      let r = n ? n(this.latestValues, ``) : undefined;
      let a = r !== this.prevTransformTemplateValue;
      if (e && this.instance && (t || Mo(this.latestValues) || a)) {
        i(this.instance, r);
        this.shouldResetTransform = false;
        this.scheduleRender();
      }
    }
    measure(e = true) {
      let t = this.measurePageBox();
      let n = this.removeElementScroll(t);
      if (e) {
        n = this.removeTransform(n);
      }
      Vs(n);
      return {
        animationId: this.root.animationId,
        measuredBox: t,
        layoutBox: n,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      let {
        visualElement: e
      } = this.options;
      if (!e) {
        return X();
      }
      let t = e.measureViewportBox();
      if (!this.scroll?.wasRoot && !this.path.some(zc)) {
        let {
          scroll: e
        } = this.root;
        if (e) {
          q(t.x, e.offset.x);
          q(t.y, e.offset.y);
        }
      }
      return t;
    }
    removeElementScroll(e) {
      let t = X();
      J(t, e);
      if (this.scroll?.wasRoot) {
        return t;
      }
      for (let n = 0; n < this.path.length; n++) {
        let r = this.path[n];
        let {
          scroll: i,
          options: a
        } = r;
        if (r !== this.root && i && a.layoutScroll) {
          if (i.wasRoot) {
            J(t, e);
          }
          q(t.x, i.offset.x);
          q(t.y, i.offset.y);
        }
      }
      return t;
    }
    applyTransform(e, t = false, n, r, i = 0) {
      let a = n || X();
      J(a, e);
      for (let e = i; e < this.path.length; e++) {
        let n = this.path[e];
        if (!t && n.options.layoutScroll && n.scroll && n !== n.root) {
          q(a.x, -n.scroll.offset.x);
          q(a.y, -n.scroll.offset.y);
        }
        if (Mo(n.latestValues)) {
          Go(a, n.latestValues, n.layout?.layoutBox);
        }
      }
      if (!r && Mo(this.latestValues)) {
        Go(a, this.latestValues, this.layout?.layoutBox);
      }
      return a;
    }
    removeTransform(e) {
      let t = X();
      J(t, e);
      for (let e = 0; e < this.path.length; e++) {
        let n = this.path[e];
        if (!Mo(n.latestValues)) {
          continue;
        }
        let r;
        if (n.instance) {
          if (Ao(n.latestValues)) {
            n.updateSnapshot();
          }
          r = X();
          J(r, n.measurePageBox());
        }
        Ls(t, n.latestValues, n.snapshot?.layoutBox, r);
      }
      if (Mo(this.latestValues)) {
        Ls(t, this.latestValues);
      }
      return t;
    }
    setTargetDelta(e) {
      this.targetDelta = e;
      this.root.scheduleUpdateProjection();
      this.isProjectionDirty = true;
    }
    setOptions(e) {
      this.options = {
        ...this.options,
        ...e,
        crossfade: e.crossfade === undefined || e.crossfade
      };
      this.addLayoutListener();
    }
    clearMeasurements() {
      this.scroll = undefined;
      this.layout = undefined;
      this.snapshot = undefined;
      this.prevTransformTemplateValue = undefined;
      this.targetDelta = undefined;
      this.target = undefined;
      this.isLayoutDirty = false;
    }
    forceRelativeParentToResolveTarget() {
      if (this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== P.timestamp) {
        this.relativeParent.resolveTargetDelta(true);
      }
    }
    resolveTargetDelta(e = false) {
      let t = this.getLead();
      this.isProjectionDirty ||= t.isProjectionDirty;
      this.isTransformDirty ||= t.isTransformDirty;
      this.isSharedProjectionDirty ||= t.isSharedProjectionDirty;
      let n = !!this.resumingFrom || this !== t;
      if (!e && (!n || !this.isSharedProjectionDirty) && !this.isProjectionDirty && !this.parent?.isProjectionDirty && !this.attemptToResolveRelativeTarget && !this.root.updateBlockedByResize) {
        return;
      }
      let {
        layout: r,
        layoutId: i
      } = this.options;
      if (!this.layout || !r && !i) {
        return;
      }
      this.resolvedRelativeTargetAt = P.timestamp;
      let a = this.getClosestProjectingParent();
      if (!this.targetDelta && !this.relativeTarget) {
        if (this.options.layoutAnchor !== false && a && a.layout) {
          this.createRelativeTarget(a, this.layout.layoutBox, a.layout.layoutBox);
        } else {
          this.removeRelativeTarget();
        }
      }
      if (this.relativeTarget || this.targetDelta) {
        if (!this.target) {
          this.target = X();
          this.targetWithTransforms = X();
        }
        if (this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target) {
          this.forceRelativeParentToResolveTarget();
          ks(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || undefined);
        } else if (this.targetDelta) {
          if (this.resumingFrom) {
            this.applyTransform(this.layout.layoutBox, false, this.target, true);
          } else {
            J(this.target, this.layout.layoutBox);
          }
          zo(this.target, this.targetDelta);
        } else {
          J(this.target, this.layout.layoutBox);
        }
        if (this.attemptToResolveRelativeTarget) {
          this.attemptToResolveRelativeTarget = false;
          if (this.options.layoutAnchor !== false && a && (!a.resumingFrom == !this.resumingFrom || a.options.layoutRoot && !a.resumingFrom) && !a.options.layoutScroll && a.target && this.animationProgress !== 1) {
            this.createRelativeTarget(a, this.target, a.target);
          } else {
            this.relativeParent = this.relativeTarget = undefined;
          }
        }
        is.countProjection?.(1);
      }
    }
    getClosestProjectingParent() {
      if (!!this.parent && !Ao(this.parent.latestValues) && !Po(this.parent.latestValues)) {
        if (this.parent.isProjecting()) {
          return this.parent;
        } else {
          return this.parent.getClosestProjectingParent();
        }
      }
    }
    isProjecting() {
      return (!!this.relativeTarget || !!this.targetDelta || !!this.options.layoutRoot) && !!this.layout;
    }
    createRelativeTarget(e, t, n) {
      this.relativeParent = e;
      this.forceRelativeParentToResolveTarget();
      this.relativeTarget = X();
      this.relativeTargetOrigin = X();
      js(this.relativeTargetOrigin, t, n, this.options.layoutAnchor || undefined);
      J(this.relativeTarget, this.relativeTargetOrigin);
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = undefined;
    }
    calcProjection() {
      let e = this.getLead();
      let t = !!this.resumingFrom || this !== e;
      let n = true;
      if (this.isProjectionDirty || this.parent?.isProjectionDirty) {
        n = false;
      }
      if (t && (this.isSharedProjectionDirty || this.isTransformDirty)) {
        n = false;
      }
      if (this.resolvedRelativeTargetAt === P.timestamp) {
        n = false;
      }
      if (n) {
        return;
      }
      let {
        layout: r,
        layoutId: i
      } = this.options;
      this.isTreeAnimating = !!this.parent?.isTreeAnimating || !!this.currentAnimation || !!this.pendingAnimation;
      if (!this.isTreeAnimating) {
        this.targetDelta = this.relativeTarget = undefined;
      }
      if (!this.layout || !r && !i) {
        return;
      }
      J(this.layoutCorrected, this.layout.layoutBox);
      let a = this.treeScale.x;
      let o = this.treeScale.y;
      Ho(this.layoutCorrected, this.treeScale, this.path, t && (e.relativeTarget && !e.relativeParent.resumingFrom ? e.relativeParent : true));
      if (e.layout && !e.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1)) {
        e.target = e.layout.layoutBox;
        e.targetWithTransforms = X();
      }
      let {
        target: s
      } = e;
      if (s) {
        if (!this.projectionDelta || !this.prevProjectionDelta) {
          this.createProjectionDeltas();
        } else {
          bs(this.prevProjectionDelta.x, this.projectionDelta.x);
          bs(this.prevProjectionDelta.y, this.projectionDelta.y);
        }
        Ds(this.projectionDelta, this.layoutCorrected, s, this.latestValues);
        if (this.treeScale.x !== a || this.treeScale.y !== o || !Qs(this.projectionDelta.x, this.prevProjectionDelta.x) || !Qs(this.projectionDelta.y, this.prevProjectionDelta.y)) {
          this.hasProjected = true;
          this.scheduleRender();
          this.notifyListeners(`projectionUpdate`, s);
        }
        is.countProjection?.(2);
      } else if (this.prevProjectionDelta) {
        this.createProjectionDeltas();
        this.scheduleRender();
      }
    }
    hide() {
      this.isVisible = false;
    }
    show() {
      this.isVisible = true;
    }
    scheduleRender(e = true) {
      this.options.visualElement?.scheduleRender();
      if (e) {
        this.getStack()?.scheduleRender();
      }
      if (this.resumingFrom && !this.resumingFrom.instance) {
        this.resumingFrom = undefined;
      }
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = Us();
      this.projectionDelta = Us();
      this.projectionDeltaWithTransform = Us();
    }
    setAnimationOrigin(e, t = false, n) {
      let r = this.snapshot;
      let i = r ? r.latestValues : {};
      let a = {
        ...this.latestValues
      };
      let o = Us();
      if (!this.relativeParent || !this.relativeParent.options.layoutRoot) {
        this.relativeTarget = this.relativeTargetOrigin = undefined;
      }
      this.attemptToResolveRelativeTarget = !t;
      let s = X();
      let c = r?.source !== this.layout?.source;
      let l = this.getStack();
      let u = !l || l.members.length <= 1;
      let d = !!c && !u && this.options.crossfade === true && !this.path.some(Fc);
      this.animationProgress = 0;
      let f;
      let p = n?.interpolateProjection(e);
      let m = this.layout?.layoutBox;
      let h = m && [m.x.min, m.x.max, m.y.min, m.y.max].map((t, n) => {
        let {
          translate: r,
          scale: i,
          originPoint: a
        } = e[n < 2 ? `x` : `y`];
        return (t - a) * (i - 1) + r;
      });
      if (!h?.every(isFinite)) {
        h = undefined;
      }
      this.animationEdges = h;
      this.edgeValues = this.startVelocity = this.impulse = this.relativeVelocity = this.relativeStart = undefined;
      let g = r?.velocity;
      let _ = r?.relativeVelocity || g;
      if (_?.slice(0, 4).some(Boolean) && this.getClosestProjectingParent()) {
        this.relativeStart = _;
      }
      if (g && h) {
        let t = g.slice(0, 4).map((e, t) => e + (c ? g[4 + (t >> 1)] : 0));
        if (t.some(Boolean)) {
          this.startVelocity = p ? _s(e.x.translate, e.y.translate, {
            x: (t[0] + t[1]) / 2,
            y: (t[2] + t[3]) / 2
          }) : t;
        }
      }
      this.mixTargetDelta = t => {
        let n = t / 1000;
        let r = p?.(n);
        let l = this.edgeValues;
        for (let t = 0; t < 2; t++) {
          let r = t ? `y` : `x`;
          if (l) {
            jc(o[r], e[r], this.layout.layoutBox[r], l[t * 2], l[t * 2 + 1]);
          } else {
            Mc(o[r], e[r], n);
          }
        }
        if (r) {
          o.x.translate = r.x;
          o.y.translate = r.y;
        }
        this.setTargetDelta(o);
        if (this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout) {
          js(s, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || undefined);
          let e = this.relativeTargetOrigin;
          let t = s;
          Pc(this.relativeTarget, e, t, n);
          if (this.isSpringLayout) {
            let e = this.relativeTarget;
            let t = this.impulse || 0;
            let n = this.relativeStart;
            let r = F.now();
            let i = (r - this.relativeTime) / 1000;
            this.relativeTime = r;
            let a = this.relativeVelocity ||= [0, 0, 0, 0];
            for (let r = 0; r < 4; r++) {
              let o = r < 2 ? `x` : `y`;
              let s = r & 1 ? `max` : `min`;
              if (n) {
                e[o][s] += n[r] * t;
              }
              if (f && i > 0) {
                a[r] = (e[o][s] - f[o][s]) / i;
              }
            }
          }
          if (f && Js(this.relativeTarget, f)) {
            this.isProjectionDirty = false;
          }
          f ||= X();
          J(f, this.relativeTarget);
        }
        if (c) {
          this.animationValues = a;
          fs(a, i, this.latestValues, n, d, u);
        }
        if (r?.rotate !== undefined) {
          this.animationValues ||= a;
          this.animationValues.pathRotation = r.rotate;
        }
        this.root.scheduleUpdateProjection();
        this.scheduleRender();
        this.animationProgress = n;
      };
      this.mixTargetDelta(this.options.layoutRoot ? 1000 : 0);
    }
    startAnimation(e) {
      this.notifyListeners(`animationStart`);
      let t = this.isSpringLayout = e.type === `spring`;
      this.currentAnimation?.stop();
      this.resumingFrom?.currentAnimation?.stop();
      if (this.resumingFrom) {
        this.resumingFrom.edgeValues = undefined;
      }
      this.pendingAnimation &&= (H(this.pendingAnimation), undefined);
      this.pendingAnimation = V.update(() => {
        oc.hasAnimatedSinceResize = true;
        this.motionValue ||= G(0);
        this.motionValue.jump(0, false);
        let n = this.startVelocity;
        this.startVelocity = undefined;
        let r = e;
        let i = 0;
        if (t) {
          if (e.mass === `auto`) {
            let t = this.layout?.layoutBox;
            r = vs(e, t && Math.sqrt(Y(t.x) * Y(t.y)));
          }
          let t = this.relativeStart;
          if ((n || t) && !e.repeat) {
            if (typeof n == `number`) {
              i = n;
            } else {
              let e = n && this.animationEdges;
              r = {
                ...r,
                type: r => {
                  let i = [r.velocity, ...(n || [])].map((t, n) => On({
                    ...r,
                    keyframes: n ? [e[n - 1], 0] : r.keyframes,
                    velocity: t
                  }));
                  let a = i.length;
                  if (t) {
                    i.push(On({
                      ...r,
                      keyframes: [0, 0],
                      velocity: 1000,
                      restDelta: 0.5,
                      restSpeed: 5
                    }));
                  }
                  let o = 0;
                  let s = [];
                  let c = {
                    calculatedDuration: null,
                    next: t => {
                      o = t;
                      let n = i[0].next(t);
                      let r = n.done;
                      for (let e = 1; e < i.length; e++) {
                        let {
                          value: n,
                          done: o
                        } = i[e].next(t);
                        if (e < a) {
                          s[e - 1] = n;
                        } else {
                          this.impulse = n / 1000;
                        }
                        r &&= o;
                      }
                      if (e) {
                        this.edgeValues = s;
                      }
                      n.done = r;
                      return n;
                    }
                  };
                  c.calculatedDuration = tn(c);
                  c.next(0);
                  this.edgeVelocity = e => i[e + 1].velocity(o);
                  return c;
                }
              };
            }
          }
        }
        let a = ns(this.motionValue, [0, 1000], {
          ...r,
          velocity: i,
          isSync: true,
          onUpdate: t => {
            this.mixTargetDelta(t);
            if (e.onUpdate) {
              e.onUpdate(t);
            }
          },
          onComplete: () => {
            if (e.onComplete) {
              e.onComplete();
            }
            this.completeAnimation();
          }
        });
        this.currentAnimation = a;
        qn(this.currentAnimation, this);
        if (this.resumingFrom) {
          this.resumingFrom.currentAnimation = this.currentAnimation;
        }
        this.pendingAnimation = undefined;
      });
    }
    completeAnimation() {
      if (this.resumingFrom) {
        this.resumingFrom.currentAnimation = undefined;
        this.resumingFrom.preserveOpacity = undefined;
      }
      let e = this.getStack();
      if (e) {
        e.exitAnimationComplete();
      }
      this.resumingFrom = this.currentAnimation = this.animationValues = this.edgeValues = this.edgeVelocity = this.impulse = undefined;
      this.notifyListeners(`animationComplete`);
    }
    finishAnimation() {
      if (this.currentAnimation) {
        this.edgeValues = this.impulse = undefined;
        this.mixTargetDelta?.(cc);
        this.currentAnimation.stop();
      }
      this.completeAnimation();
    }
    applyTransformsToTarget() {
      let e = this.getLead();
      let {
        targetWithTransforms: t,
        layout: n,
        latestValues: r
      } = e;
      let {
        target: i
      } = e;
      if (t && i && n) {
        if (this !== e && this.layout && n && Rc(this.options.animationType, this.layout.layoutBox, n.layoutBox)) {
          let {
            layoutBox: e
          } = this.layout;
          let t = i;
          i = this.target || X();
          Lc(i.x, t.x, e.x);
          Lc(i.y, t.y, e.y);
        }
        J(t, i);
        Go(t, r);
        Ds(this.projectionDeltaWithTransform, this.layoutCorrected, t, r);
      }
    }
    registerSharedNode(e, t) {
      if (!this.sharedNodes.has(e)) {
        this.sharedNodes.set(e, new $s());
      }
      this.sharedNodes.get(e).add(t);
      let n = t.options.initialPromotionConfig;
      t.promote({
        transition: n?.transition,
        preserveFollowOpacity: n?.shouldPreserveFollowOpacity ? n.shouldPreserveFollowOpacity(t) : undefined
      });
    }
    isLead() {
      let e = this.getStack();
      return !e || e.lead === this;
    }
    getLead() {
      let {
        layoutId: e
      } = this.options;
      return e && this.getStack()?.lead || this;
    }
    getPrevLead() {
      let {
        layoutId: e
      } = this.options;
      if (e) {
        return this.getStack()?.prevLead;
      } else {
        return undefined;
      }
    }
    getStack() {
      let {
        layoutId: e
      } = this.options;
      if (e) {
        return this.root.sharedNodes.get(e);
      }
    }
    promote({
      needsReset: e,
      transition: t,
      preserveFollowOpacity: n
    } = {}) {
      this.getStack()?.promote(this, n);
      if (e) {
        this.projectionDelta = undefined;
        this.needsReset = true;
      }
      if (t) {
        this.setOptions({
          transition: t
        });
      }
    }
    relegate() {
      return this.getStack()?.relegate(this) || false;
    }
    resetSkewAndRotation() {
      let {
        visualElement: e
      } = this.options;
      if (!e) {
        return;
      }
      let {
        latestValues: t
      } = e;
      if (!No(t)) {
        return;
      }
      let n = {};
      for (let t = 0; t < sc.length; t++) {
        uc(sc[t], e, n, this.animationValues);
      }
      for (let t = 0; t < jo.length; t++) {
        uc(jo[t], e, n, this.animationValues);
      }
      e.render();
      for (let t in n) {
        e.setStaticValue(t, n[t]);
        if (this.animationValues) {
          this.animationValues[t] = n[t];
        }
      }
      e.scheduleRender();
    }
    applyProjectionStyles(e, t) {
      if (!this.instance || this.isSVG) {
        return;
      }
      let n = this.getLead();
      if (!this.isVisible && n !== this) {
        e.visibility = `hidden`;
        return;
      }
      let r = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = false;
        e.visibility = ``;
        e.opacity = ``;
        e.pointerEvents = cs(t?.pointerEvents) || ``;
        e.transform = r ? r(this.latestValues, ``) : `none`;
        return;
      }
      if (!this.projectionDelta || !this.layout || !n.target) {
        if (this.options.layoutId || this.needsShow) {
          this.needsShow = false;
          e.visibility = ``;
          e.opacity = this.latestValues.opacity === undefined ? 1 : this.latestValues.opacity;
          e.pointerEvents = cs(t?.pointerEvents) || ``;
        }
        if (this.hasProjected && !Mo(this.latestValues)) {
          e.transform = r ? r({}, ``) : `none`;
          this.hasProjected = false;
        }
        return;
      }
      e.visibility = ``;
      let i = n.animationValues || n.latestValues;
      this.applyTransformsToTarget();
      let a = rc(this.projectionDeltaWithTransform, this.treeScale, i);
      if (r) {
        a = r(i, a);
      }
      e.transform = a;
      let {
        x: o,
        y: s
      } = this.projectionDelta;
      e.transformOrigin = `${o.origin * 100}% ${s.origin * 100}% 0`;
      e.opacity = n.animationValues ? n === this ? i.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : i.opacityExit : n === this ? i.opacity === undefined ? `` : i.opacity : i.opacityExit === undefined ? 0 : i.opacityExit;
      for (let t in rs) {
        if (i[t] === undefined) {
          continue;
        }
        let {
          correct: r,
          applyTo: o,
          isCSSVariable: s
        } = rs[t];
        let c = a === `none` ? i[t] : r(i[t], n);
        if (o) {
          let t = o.length;
          for (let n = 0; n < t; n++) {
            e[o[n]] = c;
          }
        } else if (s) {
          this.options.visualElement.renderState.vars[t] = c;
        } else {
          e[t] = c;
        }
      }
      if (this.options.layoutId) {
        e.pointerEvents = n === this ? cs(t?.pointerEvents) || `` : `none`;
      }
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = this.dragSnapshot = this.dragAncestor = undefined;
    }
    resetTree() {
      this.root.nodes.forEach(e => e.currentAnimation?.stop());
      this.root.nodes.forEach(bc);
      this.root.sharedNodes.clear();
    }
  };
}
function hc(e) {
  e.updateLayout();
  Cc(e);
}
function gc(e) {
  let t = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && t && e.hasListeners(`didUpdate`)) {
    let {
      layoutBox: n,
      measuredBox: r
    } = e.layout;
    let {
      animationType: i
    } = e.options;
    let a = t.source !== e.layout.source;
    let o = (r, a) => {
      if (i === `size`) {
        Z(e => {
          let t = Y(r[e]);
          r[e].min = a[e].min;
          r[e].max = r[e].min + t;
        });
      } else if (i === `x` || i === `y`) {
        let e = i === `x` ? `y` : `x`;
        ys(r[e], a[e]);
      } else if (Rc(i, t.layoutBox, n)) {
        Z(t => {
          let n = Y(a[t]);
          r[t].max = r[t].min + n;
          if (e.relativeTarget && !e.currentAnimation) {
            e.isProjectionDirty = true;
            e.relativeTarget[t].max = e.relativeTarget[t].min + n;
          }
        });
      }
    };
    let s = a ? t.measuredBox : t.layoutBox;
    o(s, n);
    let c = Us();
    Ds(c, n, t.layoutBox);
    let l = Us();
    Ds(l, a ? e.applyTransform(r, true) : n, s);
    let u = !Ks(c);
    let d = false;
    let f = e.getClosestProjectingParent();
    if ((!a || f?.options.layoutRoot && e.resumeFrom?.path.includes(f)) && f && !f.resumeFrom) {
      let {
        snapshot: r,
        layout: i
      } = f;
      if (r && i) {
        let s = e.options.layoutAnchor || undefined;
        let c = X();
        js(c, a ? e.resumeFrom.applyTransform(t.layoutBox, true, undefined, true, f.depth + 1) : t.layoutBox, r.layoutBox, s);
        let l = X();
        js(l, n, i.layoutBox, s);
        if (a) {
          o(c, l);
        }
        if (!Xs(c, l)) {
          d = true;
        }
        if (f.options.layoutRoot) {
          e.relativeTarget = l;
          e.relativeTargetOrigin = c;
          e.relativeParent = f;
        }
      }
    }
    e.notifyListeners(`didUpdate`, {
      layout: n,
      snapshot: t,
      delta: l,
      layoutDelta: c,
      hasLayoutChanged: u,
      hasRelativeLayoutChanged: d
    });
  } else if (e.isLead()) {
    e.options.onExitComplete?.();
  }
  e.options.transition = undefined;
}
function _c(e) {
  is.countProjection?.(0);
  if (e.parent) {
    if (!e.isProjecting()) {
      e.isProjectionDirty = e.parent.isProjectionDirty;
    }
    e.isSharedProjectionDirty ||= !!e.isProjectionDirty || !!e.parent.isProjectionDirty || !!e.parent.isSharedProjectionDirty;
    e.isTransformDirty ||= e.parent.isTransformDirty;
  }
}
function vc(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = false;
}
function yc(e) {
  e.clearSnapshot();
}
function bc(e) {
  e.clearMeasurements();
}
function xc(e) {
  e.isLayoutDirty = true;
  e.updateLayout();
}
function Sc(e) {
  e.isLayoutDirty = false;
}
function Cc(e) {
  let {
    snapshot: t,
    dragAncestor: n
  } = e;
  let r = n?.isAnimationBlocked && n.layout;
  if (!t || !r || e.resumeFrom || e.isAnimationBlocked) {
    return;
  }
  let i = n.dragSnapshot;
  Z(e => q(t.layoutBox[e], r.layoutBox[e].min - i.layoutBox[e].min));
}
function wc(e) {
  if (e.isAnimationBlocked && e.layout && !e.isLayoutDirty) {
    e.snapshot = e.dragSnapshot || e.layout;
    e.isLayoutDirty = true;
  }
}
function Tc(e) {
  if (e.relativeTarget && e.relativeParent?.isLayoutDirty) {
    if (e.currentAnimation) {
      e.isLayoutDirty = true;
    } else {
      e.targetDelta = undefined;
      e.removeRelativeTarget();
    }
  }
}
function Ec(e) {
  let {
    visualElement: t
  } = e.options;
  if (t?.getProps().onBeforeLayoutMeasure) {
    t.notify(`BeforeLayoutMeasure`);
  }
  e.resetTransform();
}
function Dc(e) {
  e.finishAnimation();
  e.targetDelta = e.relativeTarget = e.target = undefined;
  e.isProjectionDirty = true;
}
function Oc(e) {
  e.resolveTargetDelta();
}
function kc(e) {
  e.calcProjection();
}
function Ac(e) {
  e.resetSkewAndRotation();
}
function jc(e, t, n, r, i) {
  let a = n.max - n.min;
  let o = a ? Math.max(0, (a + i - r) / a) : 1;
  let s = e.originPoint = t.originPoint;
  e.origin = t.origin;
  e.scale = o;
  e.translate = n.min + r - (s + (n.min - s) * o);
}
function Mc(e, t, n) {
  e.translate = B(t.translate, 0, n);
  e.scale = B(t.scale, 1, n);
  e.origin = t.origin;
  e.originPoint = t.originPoint;
}
function Nc(e, t, n, r) {
  e.min = B(t.min, n.min, r);
  e.max = B(t.max, n.max, r);
}
function Pc(e, t, n, r) {
  Nc(e.x, t.x, n.x, r);
  Nc(e.y, t.y, n.y, r);
}
function Fc(e) {
  return e.animationValues?.opacityExit !== undefined;
}
var Ic = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function Lc(e, t, n) {
  e.max = Y(n) + (e.min = t.min);
}
function Rc(e, t, n) {
  return e === `position` || e === `preserve-aspect` && !Ts(Zs(t), Zs(n), 0.2);
}
function zc(e) {
  return e !== e.root && e.scroll?.wasRoot;
}
function Bc(e, t, n, r = {
  passive: true
}) {
  e.addEventListener(t, n, r);
  return () => e.removeEventListener(t, n, r);
}
var Vc = mc({
  attachResizeListener: (e, t) => Bc(e, `resize`, t),
  measureScroll: Jo,
  checkIsScrollRoot: () => true
});
var Hc = {
  current: undefined
};
var Uc = mc({
  measureScroll: e => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Hc.current) {
      let e = new Vc({});
      e.mount(window);
      e.setOptions({
        layoutScroll: true
      });
      Hc.current = e;
    }
    return Hc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t === undefined ? `none` : t;
  },
  checkIsScrollRoot: e => window.getComputedStyle(e).position === `fixed`
});
var Wc = new WeakMap();
function Gc(e) {
  return typeof e == `object` && !!e && typeof e.start == `function`;
}
function Kc(e) {
  return typeof e == `string` || Array.isArray(e);
}
var qc = [`animate`, `whileInView`, `whileFocus`, `whileHover`, `whileTap`, `whileDrag`, `whilePinch`, `exit`];
var Jc = [`initial`].concat(qc);
function Yc(e) {
  if (Gc(e.animate)) {
    return true;
  }
  for (let t = 0; t < Jc.length; t++) {
    if (Kc(e[Jc[t]])) {
      return true;
    }
  }
  return false;
}
function Xc(e) {
  return !!Yc(e) || !!e.variants;
}
function Zc(e, t, n) {
  for (let r in t) {
    let i = t[r];
    let a = n[r];
    if (K(i)) {
      e.addValue(r, i);
    } else if (K(a)) {
      e.addValue(r, G(i, {
        owner: e
      }));
    } else if (a !== i) {
      if (e.hasValue(r)) {
        let t = e.getValue(r);
        if (t.liveStyle === true) {
          t.jump(i);
        } else if (!t.hasAnimated) {
          t.set(i);
        }
      } else {
        let t = e.getStaticValue(r);
        e.addValue(r, G(t === undefined ? i : t, {
          owner: e
        }));
      }
    }
  }
  for (let r in n) {
    if (t[r] === undefined) {
      e.removeValue(r);
    }
  }
  return t;
}
var Qc = {
  current: null
};
var $c = {
  current: false
};
function el() {
  $c.current = true;
  if (window.matchMedia) {
    let e = window.matchMedia(`(prefers-reduced-motion)`);
    let t = () => Qc.current = e.matches;
    e.addEventListener(`change`, t);
    t();
  } else {
    Qc.current = false;
  }
}
var tl = [`AnimationStart`, `AnimationComplete`, `Update`, `BeforeLayoutMeasure`, `LayoutMeasure`, `LayoutAnimationStart`, `LayoutAnimationComplete`];
var nl = {};
function rl(e) {
  nl = e;
}
function il() {
  return nl;
}
var al = class {
  scrapeMotionValuesFromProps(e, t, n) {
    return {};
  }
  constructor({
    parent: e,
    props: t,
    presenceContext: n,
    reducedMotionConfig: r,
    skipAnimations: i,
    blockInitialAnimation: a,
    visualState: o
  }, s = {}) {
    this.current = null;
    this.children = new Set();
    this.isVariantNode = false;
    this.isControllingVariants = false;
    this.shouldReduceMotion = null;
    this.shouldSkipAnimations = false;
    this.values = new Map();
    this.KeyframeResolver = Hr;
    this.features = {};
    this.valueSubscriptions = new Map();
    this.prevMotionValues = {};
    this.hasBeenMounted = false;
    this.events = {};
    this.propEventSubscriptions = {};
    this.notifyUpdate = () => this.notify(`Update`, this.latestValues);
    this.render = () => {
      if (this.current) {
        this.triggerBuild();
        this.renderInstance(this.current, this.renderState, this.props.style, this.projection);
      }
    };
    this.renderScheduledAt = 0;
    this.scheduleRender = () => {
      let e = F.now();
      if (this.renderScheduledAt < e) {
        this.renderScheduledAt = e;
        V.render(this.render, false, true);
      }
    };
    let {
      latestValues: c,
      renderState: l
    } = o;
    this.latestValues = c;
    this.baseTarget = {
      ...c
    };
    this.initialValues = t.initial ? {
      ...c
    } : {};
    this.renderState = l;
    this.parent = e;
    this.props = t;
    this.presenceContext = n;
    this.depth = e ? e.depth + 1 : 0;
    this.reducedMotionConfig = r;
    this.skipAnimationsConfig = i;
    this.options = s;
    this.blockInitialAnimation = !!a;
    this.isControllingVariants = Yc(t);
    this.isVariantNode = Xc(t);
    if (this.isVariantNode) {
      this.variantChildren = new Set();
    }
    this.manuallyAnimateOnMount = !!e && !!e.current;
    let {
      willChange: u,
      ...d
    } = this.scrapeMotionValuesFromProps(t, {}, this);
    for (let e in d) {
      let t = d[e];
      if (c[e] !== undefined && K(t)) {
        t.set(c[e]);
      }
    }
  }
  mount(e) {
    let t = this.presenceContext;
    if (this.hasBeenMounted && t?.isPresent !== false && !t?.keepValuesOnRemount) {
      for (let e in this.initialValues) {
        this.values.get(e)?.jump(this.initialValues[e]);
        this.latestValues[e] = this.initialValues[e];
      }
    }
    this.current = e;
    Wc.set(e, this);
    if (!this.projection?.instance) {
      this.projection?.mount(e);
    }
    if (this.isVariantNode && !this.isControllingVariants) {
      let e = this;
      do {
        e = e.props.inherit !== false && e.parent;
      } while (e && !e.isVariantNode);
      if (e) {
        let {
          variantChildren: t
        } = e;
        t.add(this);
        this.removeFromVariantTree = () => t.delete(this);
      }
    }
    this.values.forEach((e, t) => this.bindToMotionValue(t, e));
    if (this.reducedMotionConfig === `never`) {
      this.shouldReduceMotion = false;
    } else if (this.reducedMotionConfig === `always`) {
      this.shouldReduceMotion = true;
    } else {
      if (!$c.current) {
        el();
      }
      this.shouldReduceMotion = Qc.current;
    }
    this.shouldSkipAnimations = this.skipAnimationsConfig ?? false;
    this.parent?.addChild(this);
    this.update(this.props, this.presenceContext);
    this.hasBeenMounted = true;
  }
  unmount() {
    this.projection?.unmount();
    H(this.notifyUpdate);
    H(this.render);
    this.valueSubscriptions.forEach(e => e());
    this.valueSubscriptions.clear();
    this.removeFromVariantTree?.();
    this.parent?.removeChild(this);
    for (let e in this.events) {
      this.events[e].clear();
    }
    for (let e in this.features) {
      let t = this.features[e];
      if (t) {
        t.unmount();
        t.isMounted = false;
      }
    }
    this.current = null;
  }
  addChild(e) {
    this.children.add(e);
    (this.enteringChildren ||= new Set()).add(e);
  }
  removeChild(e) {
    this.children.delete(e);
    this.enteringChildren?.delete(e);
  }
  bindToMotionValue(e, t) {
    this.valueSubscriptions.get(e)?.();
    if (t.accelerate && ui.has(e) && this.current instanceof HTMLElement) {
      let {
        factory: n,
        keyframes: r,
        times: i,
        ease: a,
        duration: o
      } = t.accelerate;
      let s = new ti({
        element: this.current,
        name: e,
        keyframes: r,
        times: i,
        ease: a,
        duration: M(o)
      });
      let c = n(s);
      this.valueSubscriptions.set(e, () => {
        c();
        s.cancel();
      });
      return;
    }
    let n = W.has(e);
    if (n && this.onBindTransform) {
      this.onBindTransform();
    }
    let r = t.on(`change`, t => {
      this.latestValues[e] = t;
      if (this.props.onUpdate) {
        V.preRender(this.notifyUpdate);
      }
      if (n) {
        if (this.projection) {
          this.projection.isTransformDirty = true;
        }
        wi.get(this.current)?.check();
      }
      this.scheduleRender();
    });
    let i;
    if (window.MotionCheckAppearSync) {
      i = window.MotionCheckAppearSync(this, e, t);
    }
    this.valueSubscriptions.set(e, () => {
      r();
      i?.();
    });
  }
  sortNodePosition(e) {
    if (!this.current || !e.current || !this.sortInstanceNodePosition || this.type !== e.type) {
      return 0;
    } else {
      return this.sortInstanceNodePosition(this.current, e.current);
    }
  }
  updateFeatures() {
    let e = `animation`;
    for (e in nl) {
      let t = nl[e];
      if (!t) {
        continue;
      }
      let {
        isEnabled: n,
        Feature: r
      } = t;
      if (!this.features[e] && r && n(this.props)) {
        this.features[e] = new r(this);
      }
      if (this.features[e]) {
        let t = this.features[e];
        if (t.isMounted) {
          t.update();
        } else {
          t.mount();
          t.isMounted = true;
        }
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    if (this.current) {
      return this.measureInstanceViewportBox(this.current, this.props);
    } else {
      return X();
    }
  }
  getStaticValue(e) {
    return this.latestValues[e];
  }
  setStaticValue(e, t) {
    this.latestValues[e] = t;
  }
  update(e, t) {
    let {
      transformTemplate: n,
      onUpdate: r
    } = this.props;
    if (e.transformTemplate || n) {
      this.scheduleRender();
    }
    if (e.transformTemplate && !n || e.onUpdate && !r) {
      wi.get(this.current)?.demote();
    }
    this.prevProps = this.props;
    this.props = e;
    this.prevPresenceContext = this.presenceContext;
    this.presenceContext = t;
    for (let t = 0; t < tl.length; t++) {
      let n = tl[t];
      this.propEventSubscriptions[n]?.();
      delete this.propEventSubscriptions[n];
      let r = e[`on${n}`];
      if (r) {
        this.propEventSubscriptions[n] = this.on(n, r);
      }
    }
    this.prevMotionValues = Zc(this, this.scrapeMotionValuesFromProps(e, this.prevProps || {}, this), this.prevMotionValues);
    this.handleChildMotionValue?.();
  }
  getProps() {
    return this.props;
  }
  getVariant(e) {
    return this.props.variants?.[e];
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  addValue(e, t) {
    let n = this.values.get(e);
    if (t !== n) {
      if (n) {
        this.removeValue(e);
      }
      this.bindToMotionValue(e, t);
      this.values.set(e, t);
      let r = t.get();
      if (r !== undefined) {
        this.latestValues[e] = r;
      }
    }
  }
  removeValue(e) {
    this.values.delete(e);
    this.valueSubscriptions.get(e)?.();
    this.valueSubscriptions.delete(e);
    delete this.latestValues[e];
    this.removeValueFromRenderState(e, this.renderState);
  }
  hasValue(e) {
    return this.values.has(e);
  }
  getValue(e, t) {
    let n = this.props.values?.[e];
    return n || (n = this.values.get(e), n === undefined && t !== undefined && (n = G(t ?? this.getDefaultValue?.(e), {
      owner: this
    }), this.addValue(e, n)), n);
  }
  readValue(e, t) {
    let n = this.latestValues[e] !== undefined || !this.current ? this.latestValues[e] : this.getBaseTargetFromProps(this.props, e) ?? this.readValueFromInstance(this.current, e, this.options);
    if (n != null) {
      if (typeof n == `string` && (oe(n) || ce(n))) {
        n = parseFloat(n);
      } else if (typeof n != `number` && !z.test(n) && z.test(t)) {
        n = fr(e, t);
      }
      this.setBaseTarget(e, K(n) ? n.get() : n);
    }
    if (K(n)) {
      return n.get();
    } else {
      return n;
    }
  }
  setBaseTarget(e, t) {
    this.baseTarget[e] = t;
  }
  on(e, t) {
    return (this.events[e] ||= new fe()).add(t);
  }
  notify(e, ...t) {
    this.events[e]?.notify(...t);
  }
  scheduleRenderMicrotask() {
    es.render(this.render);
  }
};
var ol = class extends al {
  constructor() {
    super(...arguments);
    this.KeyframeResolver = Ua;
  }
  sortInstanceNodePosition(e, t) {
    if (e.compareDocumentPosition(t) & 2) {
      return 1;
    } else {
      return -1;
    }
  }
  getBaseTargetFromProps(e, t) {
    let n = e.style;
    if (n) {
      return n[t];
    } else {
      return undefined;
    }
  }
  removeValueFromRenderState(e, {
    vars: t,
    style: n
  }) {
    delete t[e];
    delete n[e];
  }
  handleChildMotionValue() {
    if (this.childSubscription) {
      this.childSubscription();
      delete this.childSubscription;
    }
    let {
      children: e
    } = this.props;
    if (K(e)) {
      this.childSubscription = e.on(`change`, e => {
        if (this.current) {
          this.current.textContent = `${e}`;
        }
      });
    }
  }
};
function sl(e, {
  style: t,
  vars: n
}, r, i) {
  let a = e.style;
  let o;
  for (o in t) {
    a[o] = t[o];
  }
  i?.applyProjectionStyles(a, r);
  for (o in n) {
    a.setProperty(o, n[o]);
  }
}
function cl(e, {
  layout: t,
  layoutId: n
}) {
  return W.has(e) || e.startsWith(`origin`) || (t || n !== undefined) && (!!rs[e] || e === `opacity`);
}
function ll(e, t, n) {
  let r = e.style;
  let i = t?.style;
  let a = {};
  if (!r) {
    return a;
  }
  for (let t in r) {
    if (K(r[t]) || i && K(i[t]) || cl(t, e) || n?.getValue(t)?.liveStyle !== undefined) {
      a[t] = r[t];
    }
  }
  return a;
}
function ul(e) {
  return window.getComputedStyle(e);
}
var dl = class extends ol {
  constructor() {
    super(...arguments);
    this.type = `html`;
    this.renderInstance = sl;
  }
  mount(e) {
    super.mount(e);
  }
  readValueFromInstance(e, t) {
    if (W.has(t)) {
      if (this.projection?.isProjecting) {
        return Sr(t);
      } else {
        return wr(e, t);
      }
    }
    {
      let n = ul(e);
      let r = (ze(t) ? n.getPropertyValue(t) : n[t]) || 0;
      if (typeof r == `string`) {
        return r.trim();
      } else {
        return r;
      }
    }
  }
  measureInstanceViewportBox(e, {
    transformPagePoint: t
  }) {
    return Ko(e, t);
  }
  build(e, t, n) {
    ho(e, t, n.transformTemplate);
  }
  scrapeMotionValuesFromProps(e, t, n) {
    return ll(e, t, n);
  }
};
var fl = e => e.pointerType === `mouse` ? typeof e.button != `number` || e.button <= 0 : e.isPrimary !== false;
function pl(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  };
}
var ml = e => t => fl(t) && e(t, pl(t));
function hl(e, t, n, r) {
  return Bc(e, t, ml(n), r);
}
var gl = new WeakMap();
var _l;
var vl = (e, t, n) => (r, i) => i && i[0] ? i[0][`${e}Size`] : $a(r) && `getBBox` in r ? r.getBBox()[t] : r[n];
var yl = vl(`inline`, `width`, `offsetWidth`);
var bl = vl(`block`, `height`, `offsetHeight`);
function xl({
  target: e,
  borderBoxSize: t
}) {
  gl.get(e)?.forEach(n => {
    n(e, {
      get width() {
        return yl(e, t);
      },
      get height() {
        return bl(e, t);
      }
    });
  });
}
function Sl(e) {
  e.forEach(xl);
}
function Cl() {
  if (typeof ResizeObserver < `u`) {
    _l = new ResizeObserver(Sl);
  }
}
function wl(e, t) {
  if (!_l) {
    Cl();
  }
  let n = ro(e);
  n.forEach(e => {
    let n = gl.get(e);
    if (!n) {
      n = new Set();
      gl.set(e, n);
    }
    n.add(t);
    _l?.observe(e);
  });
  return () => {
    n.forEach(e => {
      let n = gl.get(e);
      n?.delete(t);
      if (!n?.size) {
        _l?.unobserve(e);
      }
    });
  };
}
var Tl = new Set();
var El;
function Dl() {
  El = () => {
    let e = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      }
    };
    Tl.forEach(t => t(e));
  };
  window.addEventListener(`resize`, El);
}
function Ol(e) {
  Tl.add(e);
  if (!El) {
    Dl();
  }
  return () => {
    Tl.delete(e);
    if (!Tl.size && typeof El == `function`) {
      window.removeEventListener(`resize`, El);
      El = undefined;
    }
  };
}
function kl(e, t) {
  return to(typeof e == `function` ? Ol(e) : wl(e, t));
}
var Al = (e, t) => Math.abs(e - t);
function jl(e, t) {
  let n = Al(e.x, t.x);
  let r = Al(e.y, t.y);
  return Math.sqrt(n ** 2 + r ** 2);
}
var Ml = new Set([`auto`, `scroll`]);
var Nl = class {
  constructor(e, t, {
    transformPagePoint: n,
    contextWindow: r = window,
    dragSnapToOrigin: i = false,
    distanceThreshold: a = 3,
    element: o,
    immediate: s
  } = {}) {
    this.startEvent = null;
    this.lastMoveEvent = null;
    this.lastMoveEventInfo = null;
    this.lastRawMoveEventInfo = null;
    this.handlers = {};
    this.contextWindow = window;
    this.scrollPositions = new Map();
    this.onElementScroll = e => {
      this.handleScroll(e.target);
    };
    this.onWindowScroll = () => {
      this.handleScroll(window);
    };
    this.updatePoint = () => {
      if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
        return;
      }
      this.hasPendingMove = false;
      if (this.lastRawMoveEventInfo) {
        this.lastMoveEventInfo = Fl(this.lastRawMoveEventInfo, this.transformPagePoint);
      }
      let e = Ll(this.lastMoveEventInfo, this.history);
      let t = this.startEvent !== null;
      let n = jl(e.offset, {
        x: 0,
        y: 0
      }) >= this.distanceThreshold;
      if (!t && !n) {
        return;
      }
      let {
        point: r
      } = e;
      this.history.push({
        ...r,
        timestamp: F.now()
      });
      let {
        onStart: i,
        onMove: a
      } = this.handlers;
      if (!t) {
        i?.(this.lastMoveEvent, e);
        this.startEvent = this.lastMoveEvent;
      }
      a?.(this.lastMoveEvent, e);
    };
    this.handlePointerMove = (e, t) => {
      this.handleScroll(window);
      this.lastMoveEvent = e;
      this.lastRawMoveEventInfo = t;
      this.lastMoveEventInfo = Fl(t, this.transformPagePoint);
      this.hasPendingMove = true;
      V.update(this.updatePoint, true);
    };
    this.handlePointerUp = (e, t) => {
      if (this.hasPendingMove) {
        this.updatePoint();
      }
      this.end();
      let {
        onEnd: n,
        onSessionEnd: r,
        resumeAnimation: i
      } = this.handlers;
      if (this.dragSnapToOrigin || !this.startEvent) {
        i?.();
      }
      if (!this.lastMoveEvent || !this.lastMoveEventInfo) {
        return;
      }
      let a = Ll(e.type === `pointercancel` ? this.lastMoveEventInfo : Fl(t, this.transformPagePoint), this.history);
      if (this.startEvent) {
        n?.(e, a);
      }
      r?.(e, a);
    };
    if (!fl(e)) {
      return;
    }
    this.dragSnapToOrigin = i;
    this.handlers = t;
    this.transformPagePoint = n;
    this.distanceThreshold = s ? 0 : a;
    this.contextWindow = r || window;
    let c = pl(e);
    let l = Fl(c, this.transformPagePoint);
    let {
      point: u
    } = l;
    this.history = [{
      ...u,
      timestamp: F.now()
    }];
    let {
      onSessionStart: d
    } = t;
    if (d) {
      d(e, Ll(l, this.history));
    }
    let f = {
      passive: true,
      capture: true
    };
    this.removeListeners = ue(hl(this.contextWindow, `pointermove`, this.handlePointerMove, f), hl(this.contextWindow, `pointerup`, this.handlePointerUp, f), hl(this.contextWindow, `pointercancel`, this.handlePointerUp, f));
    if (o) {
      this.startScrollTracking(o);
    }
    if (s) {
      this.handlePointerMove(e, c);
      this.updatePoint();
    }
  }
  startScrollTracking(e) {
    let t = e.parentElement;
    while (t) {
      let e = getComputedStyle(t);
      if (Ml.has(e.overflowX) || Ml.has(e.overflowY)) {
        this.scrollPositions.set(t, Pl(t));
      }
      t = t.parentElement;
    }
    this.scrollPositions.set(window, Pl(window));
    this.removeScrollListeners = ue(Bc(window, `scroll`, this.onElementScroll, {
      capture: true
    }), Bc(window, `scroll`, this.onWindowScroll, {}));
  }
  handleScroll(e) {
    let t = this.scrollPositions.get(e);
    if (!t) {
      return;
    }
    let n = e === window;
    let r = Pl(e);
    let i = {
      x: r.x - t.x,
      y: r.y - t.y
    };
    if (i.x !== 0 || i.y !== 0) {
      if (n) {
        if (this.lastMoveEventInfo) {
          this.lastMoveEventInfo.point.x += i.x;
          this.lastMoveEventInfo.point.y += i.y;
        }
      } else if (this.history.length > 0) {
        this.history[0].x -= i.x;
        this.history[0].y -= i.y;
      }
      this.scrollPositions.set(e, r);
      V.update(this.updatePoint, true);
    }
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    this.removeListeners?.();
    this.removeScrollListeners?.();
    this.scrollPositions.clear();
    H(this.updatePoint);
  }
};
var Pl = e => e === window ? {
  x: window.scrollX,
  y: window.scrollY
} : {
  x: e.scrollLeft,
  y: e.scrollTop
};
function Fl(e, t) {
  if (t) {
    return {
      point: t(e.point)
    };
  } else {
    return e;
  }
}
function Il(e, t) {
  return {
    x: e.x - t.x,
    y: e.y - t.y
  };
}
function Ll({
  point: e
}, t) {
  return {
    point: e,
    delta: Il(e, zl(t)),
    offset: Il(e, Rl(t)),
    velocity: Bl(t, 0.1)
  };
}
function Rl(e) {
  return e[0];
}
function zl(e) {
  return e[e.length - 1];
}
function Bl(e, t) {
  if (e.length < 2) {
    return {
      x: 0,
      y: 0
    };
  }
  let n = e.length - 1;
  let r = null;
  let i = zl(e);
  while (n >= 0 && (r = e[n], !(i.timestamp - r.timestamp > M(t)))) {
    n--;
  }
  if (!r) {
    return {
      x: 0,
      y: 0
    };
  }
  if (r === e[0] && e.length > 2 && i.timestamp - r.timestamp > M(t) * 2) {
    r = e[1];
  }
  let a = N(i.timestamp - r.timestamp);
  if (a === 0) {
    return {
      x: 0,
      y: 0
    };
  }
  let o = {
    x: (i.x - r.x) / a,
    y: (i.y - r.y) / a
  };
  if (o.x === Infinity) {
    o.x = 0;
  }
  if (o.y === Infinity) {
    o.y = 0;
  }
  return o;
}
var Vl = new Set([`BUTTON`, `INPUT`, `SELECT`, `TEXTAREA`, `A`]);
function Hl(e) {
  return Vl.has(e.tagName) || e.isContentEditable === true;
}
var Ul = new Set([`INPUT`, `SELECT`, `TEXTAREA`]);
function Wl(e) {
  return Ul.has(e.tagName) || e.isContentEditable === true;
}
var Q = {
  x: false,
  y: false
};
function Gl() {
  return Q.x || Q.y;
}
function Kl(e) {
  if (e === `x` || e === `y`) {
    if (Q[e]) {
      return null;
    } else {
      Q[e] = true;
      return () => {
        Q[e] = false;
      };
    }
  } else if (Q.x || Q.y) {
    return null;
  } else {
    Q.x = Q.y = true;
    return () => {
      Q.x = Q.y = false;
    };
  }
}
function ql(e, {
  min: t,
  max: n
}, r) {
  if (t !== undefined && e < t) {
    e = r ? B(t, e, r.min) : Math.max(e, t);
  } else if (n !== undefined && e > n) {
    e = r ? B(n, e, r.max) : Math.min(e, n);
  }
  return e;
}
function Jl(e, t, n) {
  return {
    min: t === undefined ? undefined : e.min + t,
    max: n === undefined ? undefined : e.max + n - (e.max - e.min)
  };
}
function Yl(e, {
  top: t,
  left: n,
  bottom: r,
  right: i
}) {
  return {
    x: Jl(e.x, n, i),
    y: Jl(e.y, t, r)
  };
}
function Xl(e, t) {
  let n = t.min - e.min;
  let r = t.max - e.max;
  if (t.max - t.min < e.max - e.min) {
    [n, r] = [r, n];
  }
  return {
    min: n,
    max: r
  };
}
function Zl(e, t) {
  return {
    x: Xl(e.x, t.x),
    y: Xl(e.y, t.y)
  };
}
function Ql(e, t) {
  let n = 0.5;
  let r = Y(e);
  let i = Y(t);
  if (i > r) {
    n = de(t.min, t.max - r, e.min);
  } else if (r > i) {
    n = de(e.min, e.max - i, t.min);
  }
  return k(0, 1, n);
}
function $l(e, t) {
  let n = {};
  if (t.min !== undefined) {
    n.min = t.min - e.min;
  }
  if (t.max !== undefined) {
    n.max = t.max - e.min;
  }
  return n;
}
var eu = 0.35;
function tu(e = eu) {
  if (e === false) {
    e = 0;
  } else if (e === true) {
    e = eu;
  }
  return {
    x: nu(e, `left`, `right`),
    y: nu(e, `top`, `bottom`)
  };
}
function nu(e, t, n) {
  return {
    min: ru(e, t),
    max: ru(e, n)
  };
}
function ru(e, t) {
  if (typeof e == `number`) {
    return e;
  } else {
    return e[t] || 0;
  }
}
function iu(e) {
  let t = ``;
  for (let n of e.path) {
    n.scroll = undefined;
    n.updateScroll();
    let {
      scroll: r
    } = n;
    if (n !== e.root && r) {
      t += `${r.offset.x},${r.offset.y},`;
    }
  }
  return t;
}
var au = new WeakMap();
var ou = class {
  constructor(e, t = () => e.getProps()) {
    this.openDragLock = null;
    this.isDragging = false;
    this.currentDirection = null;
    this.originPoint = {
      x: 0,
      y: 0
    };
    this.constraints = false;
    this.hasMutatedConstraints = false;
    this.elastic = X();
    this.latestPointerEvent = null;
    this.latestPanInfo = null;
    this.visualElement = e;
    this.readProps = t;
  }
  start(e, t = {}) {
    if (this.visualElement.presenceContext?.isPresent === false) {
      return;
    }
    let n = e => {
      if (t.snapToCursor) {
        this.snapToCursor(e);
      }
      this.stopAnimation();
    };
    let r = (e, t) => {
      let {
        drag: n,
        dragConstraints: r,
        dragPropagation: i,
        onDragStart: a
      } = this.getProps();
      if (n && !i && (this.openDragLock?.(), this.openDragLock = Kl(n), !this.openDragLock)) {
        return;
      }
      this.latestPointerEvent = e;
      this.latestPanInfo = t;
      this.isDragging = true;
      this.currentDirection = null;
      this.resolveConstraints();
      let {
        projection: o
      } = this.visualElement;
      if (o) {
        o.isAnimationBlocked = true;
        o.target = undefined;
      }
      Z(e => {
        let t = this.getAxisMotionValue(e).get() || 0;
        if (Ve(t)) {
          t = va(t, this.visualElement.current) || 0;
        }
        if (L.test(t)) {
          t = parseFloat(t);
        } else if (I.test(t)) {
          let n = o?.layout?.layoutBox[e];
          if (n) {
            t = Y(n) * (parseFloat(t) / 100);
          }
        }
        this.originPoint[e] = t;
      });
      this.point = typeof r == `function` && r(this);
      if (a) {
        V.update(() => a(e, t), false, true);
      }
      ka(this.visualElement, `transform`);
      this.visualElement.animationState?.setActive(`whileDrag`, true);
    };
    let i = (e, t) => {
      this.latestPointerEvent = e;
      this.latestPanInfo = t;
      let {
        dragPropagation: n,
        dragDirectionLock: r,
        onDirectionLock: i,
        onDrag: a
      } = this.getProps();
      if (!n && !this.openDragLock) {
        return;
      }
      let {
        offset: o
      } = t;
      if (r && this.currentDirection === null) {
        this.currentDirection = fu(o);
        if (this.currentDirection === null) {
          return;
        }
        if (i) {
          i(this.currentDirection);
        }
      }
      this.updateAxis(`x`, o);
      this.updateAxis(`y`, o);
      if (this.point) {
        this.point.move();
      }
      this.visualElement.render();
      if (a) {
        V.update(() => a(e, t), false, true);
      }
    };
    let a = (e, t) => {
      this.latestPointerEvent = e;
      this.latestPanInfo = t;
      this.stop(e, t);
      this.latestPointerEvent = null;
      this.latestPanInfo = null;
    };
    let o = () => {
      let {
        dragSnapToOrigin: e
      } = this.getProps();
      if (e || this.constraints || this.point) {
        this.startAnimation({
          x: 0,
          y: 0
        });
      }
    };
    let {
      dragSnapToOrigin: s
    } = this.getProps();
    this.panSession = new Nl(e, {
      onSessionStart: n,
      onStart: r,
      onMove: i,
      onSessionEnd: a,
      resumeAnimation: o
    }, {
      ...t,
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: s,
      contextWindow: this.visualElement.current?.ownerDocument.defaultView,
      element: this.visualElement.current
    });
  }
  stop(e, t, n) {
    let r = e || this.latestPointerEvent;
    let i = t || this.latestPanInfo;
    let a = this.isDragging;
    this.cancel();
    if (!a || !i || !r) {
      return;
    }
    let {
      velocity: o
    } = i;
    this.startAnimation(o, n);
    let {
      onDragEnd: s
    } = this.getProps();
    if (s) {
      V.postRender(() => s(r, i));
    }
  }
  cancel() {
    this.isDragging = false;
    let {
      projection: e,
      animationState: t
    } = this.visualElement;
    if (e) {
      e.isAnimationBlocked = false;
    }
    this.endPanSession();
    if (!this.getProps().dragPropagation && this.openDragLock) {
      this.openDragLock();
      this.openDragLock = null;
    }
    t?.setActive(`whileDrag`, false);
  }
  endPanSession() {
    this.panSession?.end();
    this.panSession = undefined;
  }
  updateAxis(e, t) {
    let {
      drag: n
    } = this.readProps();
    if (!t || !du(e, n, this.currentDirection)) {
      return;
    }
    let r = this.getAxisMotionValue(e);
    let i = this.originPoint[e] + t[e];
    let a = this.constraints && this.constraints[e];
    if (a) {
      i = ql(i, a, this.elastic[e]);
    }
    if (this.point) {
      this.point[e] = i;
    } else {
      r.set(i);
    }
  }
  resolveConstraints() {
    let {
      dragConstraints: e,
      dragElastic: t
    } = this.getProps();
    let {
      projection: n
    } = this.visualElement;
    let r = n && (n.layout || n.measure(false));
    let i = this.constraints;
    if (su(e)) {
      if (!this.constraints || this.scroll !== iu(n)) {
        this.constraints = this.resolveRefConstraints();
      }
    } else {
      this.constraints = e && r && typeof e == `object` ? Yl(r.layoutBox, e) : false;
    }
    this.elastic = tu(t);
    if (i !== this.constraints && !su(e) && r && this.constraints && !this.hasMutatedConstraints) {
      Z(e => {
        if (this.constraints !== false && this.getAxisMotionValue(e)) {
          this.constraints[e] = $l(r.layoutBox[e], this.constraints[e]);
        }
      });
    }
  }
  resolveRefConstraints() {
    let {
      dragConstraints: e,
      onMeasureDragConstraints: t
    } = this.getProps();
    if (!su(e)) {
      return false;
    }
    let n = cu(e);
    let {
      projection: r
    } = this.visualElement;
    if (!r || !r.layout) {
      return false;
    }
    this.scroll = iu(r);
    let i = qo(n, r.root, this.visualElement.getTransformPagePoint());
    let a = Zl(r.layout.layoutBox, r.removeElementScroll(i));
    if (t) {
      let e = t(Do(a));
      this.hasMutatedConstraints = !!e;
      if (e) {
        a = Eo(e);
      }
    }
    return a;
  }
  startAnimation(e, t) {
    let {
      drag: n,
      dragMomentum: r,
      dragElastic: i,
      dragTransition: a,
      dragSnapToOrigin: o,
      onDragTransitionEnd: s
    } = this.getProps();
    let c = {
      bounceStiffness: i ? 200 : 1000000,
      bounceDamping: i ? 40 : 10000000,
      timeConstant: 750,
      restDelta: 1,
      restSpeed: 10,
      ...a
    };
    let l = i => r && (!this.point || !o) && du(i, t || n, this.currentDirection) ? e[i] : 0;
    if (this.point && !o) {
      return this.point.release({
        x: l(`x`),
        y: l(`y`)
      }, c).then(s);
    }
    let u = this.constraints || {};
    let d = Z(e => {
      if (!du(e, t || n, this.currentDirection)) {
        return;
      }
      let r = u[e] || {};
      if (o === true || o === e) {
        r = {
          min: 0,
          max: 0
        };
      }
      let i = {
        type: `inertia`,
        velocity: l(e),
        ...c,
        ...r
      };
      return this.startAxisValueAnimation(e, i);
    });
    return Promise.all(d).then(s);
  }
  startAxisValueAnimation(e, t) {
    let n = this.getAxisMotionValue(e);
    ka(this.visualElement, e);
    return n.start(ha(e, n, 0, t, this.visualElement, false));
  }
  stopAnimation() {
    Z(e => this.getAxisMotionValue(e).stop());
  }
  getAxisMotionValue(e) {
    let t = `_drag${e.toUpperCase()}`;
    return this.readProps()[t] || this.visualElement.getValue(e, this.visualElement.latestValues[e] ?? 0);
  }
  snapToCursor({
    clientX: e,
    clientY: t
  }) {
    let {
      drag: n
    } = this.getProps();
    let r = {
      x: e,
      y: t
    };
    let i = this.visualElement.getTransformPagePoint()?.(r) || r;
    let a = this.visualElement.measureViewportBox();
    Z(e => {
      if (!du(e, n, this.currentDirection)) {
        return;
      }
      let t = this.getAxisMotionValue(e);
      let {
        min: r,
        max: o
      } = a[e];
      t.set((t.get() || 0) + i[e] - B(r, o, 0.5));
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) {
      return;
    }
    let {
      drag: e,
      dragConstraints: t
    } = this.getProps();
    let {
      projection: n
    } = this.visualElement;
    if (!su(t) || !n || !this.constraints) {
      return;
    }
    this.stopAnimation();
    let r = this.constraints;
    let i = {
      x: 0,
      y: 0
    };
    Z(e => {
      let t = this.getAxisMotionValue(e).get();
      i[e] = Ql({
        min: t,
        max: t
      }, r[e]);
    });
    let {
      transformTemplate: a
    } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, ``) : `none`;
    n.root?.updateScroll();
    n.updateLayout();
    this.constraints = false;
    this.resolveConstraints();
    Z(t => {
      let n = this.getAxisMotionValue(t);
      if (!du(t, e, null) || !n.get()) {
        return;
      }
      let {
        min: r,
        max: a
      } = this.constraints[t];
      n.set(B(r, a, i[t]));
    });
    this.visualElement.render();
  }
  addListeners() {
    if (!this.visualElement.current) {
      return;
    }
    au.set(this.visualElement, this);
    let e = this.visualElement.current;
    let t = hl(e, `pointerdown`, t => {
      let {
        drag: n,
        dragListener: r = true
      } = this.getProps();
      let i = t.target;
      let a = i !== e && Wl(i);
      if (n && r && !a) {
        this.start(t);
      }
    });
    let n;
    let r = () => {
      let {
        dragConstraints: t
      } = this.getProps();
      let r = su(t) && cu(t);
      if (r) {
        this.constraints = this.resolveRefConstraints();
        n ||= uu(e, r, () => this.scalePositionWithinConstraints());
      }
    };
    let {
      projection: i
    } = this.visualElement;
    let a = i.addEventListener(`measure`, r);
    if (!i.layout) {
      i.root?.updateScroll();
      i.updateLayout();
    }
    V.read(r);
    let o = Bc(window, `resize`, () => this.scalePositionWithinConstraints());
    let s = i.addEventListener(`didUpdate`, ({
      delta: e,
      hasLayoutChanged: t
    }) => {
      if (this.isDragging && t) {
        Z(t => {
          if (!du(t, this.getProps().drag, this.currentDirection)) {
            return;
          }
          let n = this.getAxisMotionValue(t);
          this.originPoint[t] += e[t].translate;
          n.set(n.get() + e[t].translate);
        });
        this.visualElement.render();
      }
    });
    return () => {
      o();
      t();
      a();
      s();
      n?.();
    };
  }
  getProps() {
    let e = this.readProps();
    let {
      dragElastic: t = eu,
      dragMomentum: n = true
    } = e;
    return {
      ...e,
      dragElastic: t,
      dragMomentum: n
    };
  }
};
function su(e) {
  return !!e && typeof e == `object` && (`current` in e || `nodeType` in e);
}
var cu = e => `current` in e ? e.current : e;
function lu(e) {
  let t = true;
  return () => {
    if (t) {
      t = false;
    } else {
      e();
    }
  };
}
function uu(e, t, n) {
  let r = kl(e, lu(n));
  let i = kl(t, lu(n));
  return () => {
    r();
    i();
  };
}
function du(e, t, n) {
  return (t === true || t === e) && (n === null || n === e);
}
function fu(e, t = 10) {
  let n = null;
  if (Math.abs(e.y) > t) {
    n = `y`;
  } else if (Math.abs(e.x) > t) {
    n = `x`;
  }
  return n;
}
function pu(e, t) {
  let n = ro(e);
  let r = new AbortController();
  return [n, {
    passive: true,
    ...t,
    signal: r.signal
  }, to(() => r.abort())];
}
function mu(e) {
  return e.pointerType !== `touch` && !Gl();
}
function hu(e, t, n = {}) {
  t = no(t);
  let [r, i, a] = pu(e, n);
  r.forEach(e => {
    let n = false;
    let r = false;
    let a;
    let o = () => {
      e.removeEventListener(`pointerleave`, u);
    };
    let s = e => {
      a &&= (a(e), undefined);
      o();
    };
    let c = e => {
      n = false;
      window.removeEventListener(`pointerup`, c);
      window.removeEventListener(`pointercancel`, c);
      if (r) {
        r = false;
        s(e);
      }
    };
    let l = () => {
      n = true;
      window.addEventListener(`pointerup`, c, i);
      window.addEventListener(`pointercancel`, c, i);
    };
    let u = e => {
      if (e.pointerType !== `touch`) {
        if (n) {
          r = true;
        } else {
          s(e);
        }
      }
    };
    e.addEventListener(`pointerenter`, n => {
      if (!mu(n)) {
        return;
      }
      r = false;
      let o = t(e, n);
      if (typeof o == `function`) {
        a = o;
        e.addEventListener(`pointerleave`, u, i);
      }
    }, i);
    e.addEventListener(`pointerdown`, l, i);
  });
  return a;
}
var gu = (e, t) => t ? e === t || gu(e, t.parentElement) : false;
var _u = new WeakSet();
function vu(e) {
  return t => {
    if (t.key === `Enter`) {
      e(t);
    }
  };
}
function yu(e, t) {
  e.dispatchEvent(new PointerEvent(`pointer${t}`, {
    isPrimary: true,
    bubbles: true
  }));
}
var bu = (e, t) => {
  let n = false;
  let r = vu(() => {
    if (!n && !_u.has(e)) {
      n = true;
      yu(e, `down`);
    }
  });
  let i = vu(() => {
    if (n) {
      n = false;
      yu(e, `up`);
    }
  });
  e.addEventListener(`keydown`, r, t);
  e.addEventListener(`keyup`, i, t);
  e.addEventListener(`blur`, () => {
    e.removeEventListener(`keydown`, r);
    e.removeEventListener(`keyup`, i);
    if (n) {
      yu(e, `cancel`);
    }
  }, {
    ...t,
    once: true
  });
};
function xu(e) {
  return fl(e) && !Gl();
}
var Su = new WeakSet();
var Cu = 100;
var wu = 8;
var Tu = (e, t, n) => Math.hypot(e.clientX - t.clientX, e.clientY - t.clientY) > n;
var Eu = e => e.preventDefault();
function Du(e, t, n = {}) {
  t = no(t);
  let [r, i, a] = pu(e, n);
  let o = new WeakMap();
  let s = e => {
    let r = e.currentTarget;
    if (!xu(e) || Su.has(e)) {
      return;
    }
    if (n.stopPropagation) {
      Su.add(e);
    }
    let {
      count: a = 1,
      countTimeout: s = 0.3,
      hold: c = 0,
      repeat: l
    } = n;
    let u = F.now();
    let d = M(c);
    let f = M(s);
    let p = o.get(r);
    if (p?.expire(Tu(p.event, e, Cu))) {
      p = undefined;
    } else if (p) {
      H(p.expire);
      o.delete(r);
    }
    let m = p ? p.count + 1 : 1;
    let h = m >= a;
    let g = h && (c || l);
    let _ = !c;
    let v = 0;
    let y;
    _u.add(r);
    if (p) {
      y = p.handlers;
    } else {
      let n = t(r, e);
      y = typeof n == `function` ? {
        onComplete: n
      } : n || {};
    }
    if (h && _) {
      y.onActive?.();
    }
    let b = M(l);
    let x = d || b;
    let S = u + x;
    let C = true;
    let w = () => {
      if (i.signal.aborted) {
        return H(w);
      }
      let e = Math.min(1 - (S - F.now()) / x, 1);
      if (C && e < 1) {
        e = 0;
      }
      C = false;
      y.onHold?.(e);
      if (!(e < 1)) {
        if (_) {
          y.onRepeat?.(++v);
        } else {
          _ = true;
          y.onActive?.();
        }
        if (l) {
          C = true;
          S += x = b;
        } else {
          H(w);
        }
      }
    };
    let T = {
      ...i,
      capture: true
    };
    let E = (t, n) => {
      if (fl(t)) {
        window.removeEventListener(`pointerup`, ee, T);
        window.removeEventListener(`pointercancel`, D, T);
        window.removeEventListener(`pointermove`, te, T);
        r.removeEventListener(`contextmenu`, Eu);
        H(w);
        _u.delete(r);
        if (Gl()) {
          n = false;
        }
        if (n && !h) {
          let n = F.now();
          let a = e => {
            let s = i.signal.aborted;
            if (s || e === true || F.now() - n > f) {
              H(a);
              o.delete(r);
              if (!s) {
                y.onComplete?.(t, {
                  success: false
                });
              }
              return true;
            }
          };
          o.set(r, {
            count: m,
            event: e,
            handlers: y,
            expire: a
          });
          V.update(a, true);
        } else {
          y.onComplete?.(t, {
            success: n && _
          });
        }
      }
    };
    let ee = e => {
      E(e, r === window || r === document || n.useGlobalTarget || gu(r, e.target));
    };
    let D = e => {
      E(e, false);
    };
    let te = t => {
      if (fl(t) && ((l || !_) && Tu(e, t, wu) || a > 1 && Gl())) {
        D(t);
      }
    };
    window.addEventListener(`pointerup`, ee, T);
    window.addEventListener(`pointercancel`, D, T);
    if (g || a > 1) {
      window.addEventListener(`pointermove`, te, T);
    }
    if (g) {
      V.update(w, true);
      r.addEventListener(`contextmenu`, Eu, {
        ...i,
        passive: false
      });
    }
  };
  r.forEach(e => {
    (n.useGlobalTarget ? window : e).addEventListener(`pointerdown`, s, i);
    if (Qa(e)) {
      e.addEventListener(`focus`, () => bu(e, i), i);
      if (!Hl(e) && !e.hasAttribute(`tabindex`)) {
        e.tabIndex = 0;
      }
    }
  });
  return a;
}
function Ou(...e) {
  let t = !Array.isArray(e[0]);
  let n = t ? 0 : -1;
  let r = e[0 + n];
  let i = e[1 + n];
  let a = e[2 + n];
  let o = e[3 + n];
  let s = jn(i, a, o);
  if (t) {
    return s(r);
  } else {
    return s;
  }
}
var ku = class {
  constructor(e) {
    this.isMounted = false;
    this.node = e;
  }
  update() {}
};
var Au = new Set([`baseFrequency`, `diffuseConstant`, `kernelMatrix`, `kernelUnitLength`, `keySplines`, `keyTimes`, `limitingConeAngle`, `markerHeight`, `markerWidth`, `numOctaves`, `targetX`, `targetY`, `surfaceScale`, `specularConstant`, `specularExponent`, `stdDeviation`, `tableValues`, `viewBox`, `gradientTransform`, `pathLength`, `startOffset`, `textLength`, `lengthAdjust`]);
var ju = e => typeof e == `string` && e.toLowerCase() === `svg`;
function Mu(e, t, n, r) {
  sl(e, t, undefined, r);
  for (let n in t.attrs) {
    e.setAttribute(Au.has(n) ? n : mo(n), t.attrs[n]);
  }
}
function Nu(e, t, n) {
  let r = ll(e, t, n);
  for (let n in e) {
    if (n !== `children` && (K(e[n]) || K(t[n]))) {
      let t = U.indexOf(n) === -1 ? n : `attr${n.charAt(0).toUpperCase()}${n.substring(1)}`;
      r[t] = e[n];
    }
  }
  return r;
}
var Pu = class extends ol {
  constructor() {
    super(...arguments);
    this.type = `svg`;
    this.isSVGTag = false;
    this.measureInstanceViewportBox = X;
  }
  getBaseTargetFromProps(e, t) {
    if (W.has(t)) {
      return super.getBaseTargetFromProps(e, t) ?? Sr(t);
    } else {
      return e[t];
    }
  }
  getDefaultValue(e) {
    if (W.has(e)) {
      return this.latestValues[e] ?? Sr(e);
    } else {
      return undefined;
    }
  }
  readValueFromInstance(e, t) {
    if (W.has(t)) {
      let e = sr(t);
      return e && e.default || 0;
    }
    if (yo.includes(t)) {
      let n = getComputedStyle(e)[t];
      if (typeof n == `string` && n) {
        return n.trim();
      }
    }
    t = Au.has(t) ? t : mo(t);
    return e.getAttribute(t);
  }
  scrapeMotionValuesFromProps(e, t, n) {
    return Nu(e, t, n);
  }
  build(e, t, n) {
    bo(e, t, this.isSVGTag, n.transformTemplate, n.style);
  }
  renderInstance(e, t, n, r) {
    Mu(e, t, n, r);
  }
  mount(e) {
    this.isSVGTag = ju(e.tagName);
    super.mount(e);
  }
};
function Fu(e, t) {
  if (!Array.isArray(t)) {
    return false;
  }
  let n = t.length;
  if (n !== e.length) {
    return false;
  }
  for (let r = 0; r < n; r++) {
    if (t[r] !== e[r]) {
      return false;
    }
  }
  return true;
}
var Iu = [...qc].reverse();
var Lu = e => e?.out === true ? e : e?.out;
function Ru(e) {
  let t = t => Promise.all(t.map(({
    animation: t,
    options: n
  }) => Fa(e, t, n)));
  let n = Bu();
  let r = true;
  let i = false;
  function a(a) {
    let {
      props: o,
      parent: s,
      manuallyAnimateOnMount: c
    } = e;
    let {
      initial: l
    } = o;
    let u = r || i;
    let d = [];
    let f = (t = l) => typeof t != `boolean` && xa(e, Array.isArray(t) ? t[0] : t, e.presenceContext?.custom) || undefined;
    let p = new Map();
    let m = {};
    let h = Infinity;
    let g = e;
    do {
      g = g.props.inherit !== false && g.parent;
    } while (g && !g.isControllingVariants);
    let _ = u && Lu(f(l ?? (g && g.props.initial))?.transition);
    Iu.forEach((t, r) => {
      let i = n[t];
      let l = o[t];
      let f = g && g.props[t];
      let v = l === undefined ? Kc(f) || f === false ? f : undefined : l;
      let y = Kc(v);
      let b = t === a ? i.isActive : null;
      let x = y && l === undefined && (!u || !c);
      i.protectedKeys = {
        ...m
      };
      if (!i.isActive && b === null || !v && !i.prevProp || Gc(v) || typeof v == `boolean`) {
        return;
      }
      if (b === false) {
        h = r;
      }
      if (t === `exit` && i.isActive && b !== true) {
        m = {
          ...m,
          ...i.prevResolvedValues
        };
        return;
      }
      let S = zu(i.prevProp, v);
      let C = S || y && (b && !x || r > h);
      let w = false;
      let T = Array.isArray(v) ? v : [v];
      let E = {};
      let ee;
      if (b !== false) {
        for (let n of T) {
          let {
            transition: r,
            transitionEnd: i,
            ...a
          } = xa(e, n, Sa(e, t)) || {};
          E = {
            ...E,
            ...a,
            ...i
          };
          ee = Lu(r) || ee;
        }
      }
      let {
        prevResolvedValues: D
      } = i;
      for (let t in {
        ...D,
        ...E
      }) {
        if (t in m) {
          continue;
        }
        let n = E[t];
        let r = D[t];
        let a = Array.isArray(n) && Array.isArray(r) ? !Fu(n, r) || S : n !== r;
        let o;
        if (a && n == null) {
          if (!p.has(t)) {
            p.set(t, i.prevOut);
          }
        } else if (a || n !== undefined && p.has(t)) {
          C = true;
          o = p.get(t) || _;
          if (p.delete(t)) {
            w = true;
          }
          i.needsAnimating[t] = true;
          let n = e.getValue(t);
          if (n) {
            n.liveStyle = false;
          }
        } else {
          i.protectedKeys[t] = true;
        }
        i.out[t] = o;
      }
      i.prevProp = v;
      i.prevResolvedValues = E;
      i.prevOut = ee;
      if (i.isActive) {
        m = {
          ...m,
          ...E
        };
      }
      if (C && (!x || !S || w)) {
        for (let n of T) {
          let r = {
            type: t
          };
          if (typeof n == `string` && u && c && s?.enteringChildren) {
            let t = xa(s, n)?.transition?.delayChildren;
            r.delay = ta(s.enteringChildren, e, t);
          }
          d.push({
            animation: n,
            options: r
          });
        }
      }
    });
    if (p.size) {
      let t = {};
      let n = f();
      let r = n?.transition;
      p.forEach((i, a) => {
        if (i) {
          r = {
            ...(r || e.getDefaultTransition()),
            [a]: i
          };
        }
        let s = e.getValue(a);
        if (s) {
          s.liveStyle = true;
        }
        let c = n && !Array.isArray(l) ? n[a] : undefined;
        let u = e.getBaseTargetFromProps(o, a);
        t[a] = (c === undefined ? u !== undefined && !K(u) ? u : e.initialValues[a] === undefined ? e.baseTarget[a] : undefined : c) ?? null;
      });
      if (r) {
        t.transition = r;
      }
      d.push({
        animation: t
      });
    }
    let v = u && e.blockInitialAnimation || r && !c && (o.initial === false || o.initial === o.animate);
    r = i = false;
    if (!v && d.length) {
      return t(d);
    } else {
      return Promise.resolve();
    }
  }
  function o(t, r) {
    if (n[t].isActive === r) {
      return Promise.resolve();
    }
    e.variantChildren?.forEach(e => e.animationState?.setActive(t, r));
    n[t].isActive = r;
    let i = a(t);
    for (let e in n) {
      n[e].protectedKeys = {};
    }
    return i;
  }
  return {
    animateChanges: a,
    setActive: o,
    setAnimateFunction: n => {
      t = n(e);
    },
    getState: () => n,
    reset: () => {
      n = Bu();
      i = true;
    }
  };
}
function zu(e, t) {
  if (typeof t == `string`) {
    return t !== e;
  } else if (Array.isArray(t)) {
    return !Fu(t, e);
  } else {
    return false;
  }
}
function Bu() {
  let e = {};
  for (let t of qc) {
    e[t] = {
      isActive: t === `animate`,
      protectedKeys: {},
      needsAnimating: {},
      prevResolvedValues: {},
      out: {}
    };
  }
  return e;
}
var Vu = (0, D.createContext)({
  transformPagePoint: e => e,
  isStatic: false,
  reducedMotion: `never`
});
function Hu(e, t) {
  if (typeof e == `function`) {
    return e(t);
  }
  if (e != null) {
    e.current = t;
  }
}
function Uu(...e) {
  return t => {
    let n = false;
    let r = e.map(e => {
      let r = Hu(e, t);
      if (!n && typeof r == `function`) {
        n = true;
      }
      return r;
    });
    if (n) {
      return () => {
        for (let t = 0; t < r.length; t++) {
          let n = r[t];
          if (typeof n == `function`) {
            n();
          } else {
            Hu(e[t], null);
          }
        }
      };
    }
  };
}
function Wu(...e) {
  return D.useCallback(Uu(...e), e);
}
var $ = r();
var Gu = e => {
  let {
    width: t,
    height: n
  } = e?.getBoundingClientRect() || {};
  return [t / e?.offsetWidth || 1, n / e?.offsetHeight || 1];
};
var Ku = e => {
  let {
    left: t,
    top: n
  } = e.getBoundingClientRect();
  let r = e;
  while (r = r.parentElement || r.parentNode?.host) {
    let {
      scrollLeft: e,
      scrollTop: i
    } = r;
    if (e || i) {
      let [a, o] = Gu(r);
      t += e * a;
      n += i * o;
    }
    if (getComputedStyle(r).position === `fixed`) {
      break;
    }
  }
  let [i, a] = Gu(e.offsetParent);
  return [t / i, n / a];
};
var _Component = class extends D.Component {
  getSnapshotBeforeUpdate(e) {
    let t = this.props.getElement();
    if (Qa(t) && e.isPresent && !this.props.isPresent && this.props.pop !== false) {
      let e = t.offsetParent;
      let n = Qa(e) && e.offsetWidth || 0;
      let r = Qa(e) && e.offsetHeight || 0;
      let i = getComputedStyle(t);
      let a = this.props.sizeRef.current;
      a.height = parseFloat(i.height);
      a.width = parseFloat(i.width);
      a.top = t.offsetTop;
      a.left = t.offsetLeft;
      a.right = n - a.width - a.left;
      a.bottom = r - a.height - a.top;
      a.direction = i.direction;
      a.point = Ku(t);
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
};
function Ju({
  children: e,
  isPresent: t,
  anchorX: n,
  anchorY: r,
  root: i,
  pop: a,
  popNode: o
}) {
  let s = (0, D.useId)();
  let c = (0, D.useRef)(null);
  let l = (0, D.useRef)({
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    direction: `ltr`
  });
  let {
    nonce: u
  } = (0, D.useContext)(Vu);
  let d = Wu(c, a === false ? undefined : e.props?.ref ?? e?.ref);
  let f = () => c.current || o?.current?.current;
  let p = e => {
    let {
      width: t,
      height: i,
      top: a,
      left: o,
      right: c,
      bottom: u,
      direction: d
    } = l.current;
    let f = d === `rtl`;
    let p = n === `left` ? f ? `right:${c}` : `left:${o}` : f ? `left:${o}` : `right:${c}`;
    let m = r === `bottom` ? `bottom:${u}` : `top:${a}`;
    e?.insertRule(`[data-motion-pop-id="${s}"]{position:absolute!important;width:${t}px!important;height:${i}px!important;${p}px!important;${m}px!important}`);
  };
  (0, D.useInsertionEffect)(() => {
    let {
      width: e,
      height: n
    } = l.current;
    let r = f();
    if (t || a === false || !r || !e || !n) {
      return;
    }
    r.dataset.motionPopId = s;
    let o = r.ownerDocument;
    let c = o.createElement(`style`);
    if (u) {
      c.nonce = u;
    }
    let d = i ?? o.head;
    d.appendChild(c);
    p(c.sheet);
    let m = 0;
    let h = 0;
    es.setup(() => {
      let [e, t] = Ku(r);
      m = l.current.point[0] - e;
      h = l.current.point[1] - t;
    });
    es.read(() => {
      let {
        sheet: e
      } = c;
      if (!e || !m && !h) {
        return;
      }
      let t = l.current;
      t.left += m;
      t.right -= m;
      t.top += h;
      t.bottom -= h;
      e.deleteRule(0);
      p(e);
    });
    return () => {
      r.removeAttribute(`data-motion-pop-id`);
      if (d.contains(c)) {
        d.removeChild(c);
      }
    };
  }, [t]);
  return <_Component isPresent={t} getElement={f} sizeRef={l} pop={a}>{a === false ? e : D.cloneElement(e, {
      ref: d
    })}</_Component>;
}
var Yu = ({
  children: e,
  initial: t,
  isPresent: n,
  onExitComplete: r,
  custom: i,
  presenceAffectsLayout: a,
  mode: o,
  anchorX: s,
  anchorY: c,
  root: l
}) => {
  let u = O(Xu);
  let d = (0, D.useId)();
  let f = (0, D.useRef)();
  let p = (0, D.useRef)(n);
  let m = (0, D.useRef)(r);
  ne(() => {
    p.current = n;
    m.current = r;
  });
  let h = true;
  let g = (0, D.useMemo)(() => {
    h = false;
    return {
      id: d,
      initial: t,
      isPresent: n,
      custom: i,
      onExitComplete: e => {
        u.set(e, true);
        for (let e of u.values()) {
          if (!e) {
            return;
          }
        }
        if (r) {
          r();
        }
      },
      register: (e, t) => {
        u.set(e, false);
        if (t && t.parent?.presenceContext?.id !== d) {
          f.current = t;
        }
        return () => {
          u.delete(e);
          if (!p.current && !u.size) {
            m.current?.();
          }
        };
      }
    };
  }, [n, u, r]);
  if (a && h) {
    g = {
      ...g
    };
  }
  (0, D.useMemo)(() => {
    u.forEach((e, t) => u.set(t, false));
  }, [n]);
  D.useEffect(() => {
    if (!n && !u.size && r) {
      r();
    }
  }, [n]);
  e = <Ju pop={o === `popLayout`} isPresent={n} anchorX={s} anchorY={c} root={l} popNode={f}>{e}</Ju>;
  return <re.Provider value={g}>{e}</re.Provider>;
};
function Xu() {
  return new Map();
}
function Zu(e = true) {
  let t = (0, D.useContext)(re);
  if (t === null) {
    return [true, null];
  }
  let {
    isPresent: n,
    onExitComplete: r,
    register: i
  } = t;
  let a = (0, D.useId)();
  (0, D.useEffect)(() => {
    if (e) {
      return i(a);
    }
  }, [e]);
  let o = (0, D.useCallback)(() => e && r && r(a), [a, r, e]);
  if (!n && r) {
    return [false, o];
  } else {
    return [true];
  }
}
function Qu() {
  return $u((0, D.useContext)(re));
}
function $u(e) {
  return e === null || e.isPresent;
}
var ed = e => e.key || ``;
function td(e) {
  let t = [];
  D.Children.forEach(e, e => {
    if ((0, D.isValidElement)(e)) {
      t.push(e);
    }
  });
  return t;
}
var _Component0 = ({
  children: e,
  custom: t,
  initial: n = true,
  onExitComplete: r,
  presenceAffectsLayout: i = true,
  mode: a = `sync`,
  propagate: o = false,
  anchorX: s = `left`,
  anchorY: c = `top`,
  root: l
}) => {
  let [u, d] = Zu(o);
  let f = (0, D.useMemo)(() => td(e), [e]);
  let p = o && !u ? [] : f.map(ed);
  let m = (0, D.useRef)(true);
  let h = O(() => new Map());
  let g = (0, D.useRef)(new Set());
  let [_, v] = (0, D.useState)(f);
  let [y, b] = (0, D.useState)(f);
  ne(() => {
    if (o && !u && !y.length) {
      d?.();
    }
  }, [u, o, y.length, d]);
  let x = (0, D.useRef)();
  (0, D.useEffect)(() => () => {
    let e = x.current;
    x.current = undefined;
    e?.();
  }, [y]);
  ne(() => {
    m.current = false;
    for (let e = 0; e < y.length; e++) {
      let t = ed(y[e]);
      if (p.includes(t)) {
        h.delete(t);
        g.current.delete(t);
      } else if (h.get(t) !== true) {
        h.set(t, false);
      }
    }
  }, [y, p.length, p.join(`-`)]);
  let S = [];
  if (f !== _) {
    let e = [...f];
    let t = 0;
    for (let n of y) {
      let r = p.indexOf(ed(n));
      if (r === -1) {
        e.splice(t++, 0, n);
        S.push(n);
      } else {
        t = r + S.length + 1;
      }
    }
    if (S.every(e => h.get(ed(e)))) {
      e = f;
    } else if (a === `wait`) {
      e = S;
    }
    b(td(e));
    v(f);
    return null;
  }
  let {
    forceRender: C
  } = (0, D.useContext)(te);
  return <$.Fragment>{y.map(e => {
      let _ = ed(e);
      let b = o && !u ? false : f === y || p.includes(_);
      return <Yu isPresent={b} initial={!m.current || n ? undefined : false} custom={t} presenceAffectsLayout={i} mode={a} root={l} onExitComplete={b ? undefined : () => {
        if (g.current.has(_)) {
          return;
        }
        if (h.has(_)) {
          g.current.add(_);
          h.set(_, true);
        } else {
          return;
        }
        let e = true;
        h.forEach(t => {
          if (!t) {
            e = false;
          }
        });
        if (e) {
          C?.();
          v([]);
          if (o) {
            d?.();
          }
          x.current = r;
        }
      }} anchorX={s} anchorY={c} key={_}>{e}</Yu>;
    })}</$.Fragment>;
};
var rd = (0, D.createContext)({
  strict: false
});
var id = {
  animation: [`variants`, ...qc],
  exit: [`exit`],
  drag: [`drag`, `dragControls`],
  focus: [`whileFocus`],
  hover: [`whileHover`, `onHoverStart`, `onHoverEnd`],
  tap: [`whileTap`, `onTap`, `onTapStart`, `onTapCancel`],
  pan: [`onPan`, `onPanStart`, `onPanSessionStart`, `onPanEnd`],
  inView: [`whileInView`, `onViewportEnter`, `onViewportLeave`],
  layout: [`layout`, `layoutId`]
};
var ad = false;
function od() {
  if (ad) {
    return;
  }
  let e = {};
  for (let t in id) {
    e[t] = {
      isEnabled: e => id[t].some(t => !!e[t])
    };
  }
  rl(e);
  ad = true;
}
function sd() {
  od();
  return il();
}
function cd(e) {
  let t = sd();
  for (let n in e) {
    t[n] = {
      ...t[n],
      ...e[n]
    };
  }
  rl(t);
}
function _Component11({
  children: e,
  ...t
}) {
  let n = (0, D.useContext)(Vu);
  t = {
    ...n,
    ...t
  };
  t.transition = oa(t.transition, n.transition);
  t.isStatic = O(() => t.isStatic);
  let r = (0, D.useMemo)(() => t, [JSON.stringify(t.transition), t.transformPagePoint, t.reducedMotion, t.skipAnimations, t.isValidProp]);
  return <Vu.Provider value={r}>{e}</Vu.Provider>;
}
var ud = (0, D.createContext)({});
function dd(e, t) {
  if (Yc(e)) {
    let {
      initial: t,
      animate: n
    } = e;
    return {
      initial: t === false || Kc(t) ? t : undefined,
      animate: Kc(n) ? n : undefined
    };
  }
  if (e.inherit === false) {
    return {};
  } else {
    return t;
  }
}
function fd(e) {
  let {
    initial: t,
    animate: n
  } = dd(e, (0, D.useContext)(ud));
  return (0, D.useMemo)(() => ({
    initial: t,
    animate: n
  }), [pd(t), pd(n)]);
}
function pd(e) {
  if (Array.isArray(e)) {
    return e.join(` `);
  } else {
    return e;
  }
}
var md = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function hd(e, t, n) {
  for (let r in t) {
    if (!K(t[r]) && !cl(r, n)) {
      e[r] = t[r];
    }
  }
}
function gd({
  transformTemplate: e
}, t) {
  return (0, D.useMemo)(() => {
    let n = md();
    ho(n, t, e);
    return Object.assign({}, n.vars, n.style);
  }, [t]);
}
function _d(e, t) {
  let n = e.style || {};
  let r = {};
  hd(r, n, e);
  Object.assign(r, gd(e, t));
  return r;
}
function vd(e, t) {
  let n = {};
  let r = _d(e, t);
  if (e.drag && e.dragListener !== false) {
    n.draggable = false;
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = `none`;
    r.touchAction = e.drag === true ? `none` : `pan-${e.drag === `x` ? `y` : `x`}`;
  }
  if (e.tabIndex === undefined && (e.onTap || e.onTapStart || e.whileTap)) {
    n.tabIndex = 0;
  }
  n.style = r;
  return n;
}
var yd = () => ({
  ...md(),
  attrs: {}
});
function bd(e, t, n, r) {
  let i = (0, D.useMemo)(() => {
    let n = yd();
    bo(n, t, ju(r), e.transformTemplate, e.style);
    return {
      ...n.attrs,
      style: {
        ...n.style
      }
    };
  }, [t]);
  if (e.style) {
    let t = {};
    hd(t, e.style, e);
    return {
      ...i,
      style: {
        ...t,
        ...i.style
      }
    };
  }
  return i;
}
var xd = new Set(`animate.exit.variants.initial.style.values.transition.transformTemplate.custom.inherit.onBeforeLayoutMeasure.onAnimationStart.onAnimationComplete.onUpdate.onDragStart.onDrag.onDragEnd.onMeasureDragConstraints.onDirectionLock.onDragTransitionEnd._dragX._dragY.onHoverStart.onHoverEnd.onViewportEnter.onViewportLeave.globalTapTarget.tap.propagate.ignoreStrict.viewport.pinch`.split(`.`));
function Sd(e) {
  return e.startsWith(`while`) || e.startsWith(`drag`) && e !== `draggable` || e.startsWith(`layout`) || e.startsWith(`onTap`) || e.startsWith(`onPan`) || e.startsWith(`onLayout`) || xd.has(e);
}
function Cd(e, t) {
  if (e.startsWith(`on`)) {
    return !Sd(e);
  } else {
    return t?.(e) ?? !Sd(e);
  }
}
function wd(e, t, n, r) {
  let i = {};
  for (let a in e) {
    if ((a !== `values` || typeof e.values != `object`) && !K(e[a])) {
      if (a === `fx`) {
        if (e.fx) {
          i.fx = ``;
        }
      } else if (Cd(a, r) || n === true && Sd(a) || !t && !Sd(a) || e.draggable && a.startsWith(`onDrag`)) {
        i[a] = e[a];
      }
    }
  }
  return i;
}
var Td = [`animate`, `circle`, `defs`, `desc`, `ellipse`, `g`, `image`, `line`, `filter`, `marker`, `mask`, `metadata`, `path`, `pattern`, `polygon`, `polyline`, `rect`, `stop`, `switch`, `symbol`, `svg`, `text`, `tspan`, `use`, `view`];
function Ed(e) {
  if (typeof e != `string` || e.includes(`-`)) {
    return false;
  } else {
    return !!(Td.indexOf(e) > -1) || !!/[A-Z]/u.test(e);
  }
}
function Dd(e, t, n, {
  latestValues: r
}, i, a = false, o, s) {
  let c = (o ?? Ed(e) ? bd : vd)(t, r, i, e);
  let l = wd(t, typeof e == `string`, a, s);
  let u = e === D.Fragment ? {} : {
    ...l,
    ...c,
    ref: n
  };
  let {
    children: d
  } = t;
  let f = (0, D.useMemo)(() => K(d) ? d.get() : d, [d]);
  return (0, D.createElement)(e, {
    ...u,
    children: f
  });
}
function Od({
  scrapeMotionValuesFromProps: e,
  createRenderState: t
}, n, r, i) {
  return {
    latestValues: kd(n, r, i, e),
    renderState: t()
  };
}
function kd(e, t, n, r) {
  let i = {};
  let a = r(e, {});
  for (let e in a) {
    i[e] = cs(a[e]);
  }
  let {
    initial: o,
    animate: s
  } = e;
  let c = Yc(e);
  let l = Xc(e);
  if (t && l && !c && e.inherit !== false) {
    if (o === undefined) {
      o = t.initial;
    }
    if (s === undefined) {
      s = t.animate;
    }
  }
  let u = n ? n.initial === false : false;
  u ||= o === false;
  let d = u ? s : o;
  if (d && typeof d != `boolean` && !Gc(d)) {
    let t = Array.isArray(d) ? d : [d];
    for (let n = 0; n < t.length; n++) {
      let r = ba(e, t[n]);
      if (r) {
        let {
          transitionEnd: e,
          transition: t,
          ...n
        } = r;
        for (let e in n) {
          let t = n[e];
          if (Array.isArray(t)) {
            let e = u ? t.length - 1 : 0;
            t = t[e];
          }
          if (t !== null) {
            i[e] = t;
          }
        }
        for (let t in e) {
          i[t] = e[t];
        }
      }
    }
  }
  return i;
}
var Ad = e => (t, n) => {
  let r = (0, D.useContext)(ud);
  let i = (0, D.useContext)(re);
  let a = () => Od(e, t, r, i);
  if (n) {
    return a();
  } else {
    return O(a);
  }
};
var jd = Ad({
  scrapeMotionValuesFromProps: ll,
  createRenderState: md
});
var Md = Ad({
  scrapeMotionValuesFromProps: Nu,
  createRenderState: yd
});
var Nd = Symbol.for(`motionComponentSymbol`);
function Pd(e, t, n) {
  let r = (0, D.useRef)(n);
  (0, D.useInsertionEffect)(() => {
    r.current = n;
  });
  let i = (0, D.useRef)(null);
  return (0, D.useCallback)(n => {
    if (n) {
      e.onMount?.(n);
    }
    if (t) {
      if (n) {
        t.mount(n);
      } else {
        t.unmount();
      }
    }
    let a = r.current;
    if (typeof a == `function`) {
      if (n) {
        let e = a(n);
        if (typeof e == `function`) {
          i.current = e;
        }
      } else if (i.current) {
        i.current();
        i.current = null;
      } else {
        a(n);
      }
    } else if (a) {
      a.current = n;
    }
  }, [t]);
}
var Fd = (0, D.createContext)({});
function Id(e, t, n, r, i, a) {
  let {
    visualElement: o
  } = (0, D.useContext)(ud);
  let s = (0, D.useContext)(rd);
  let c = (0, D.useContext)(re);
  let l = (0, D.useContext)(Vu);
  let u = l.reducedMotion;
  let d = l.skipAnimations;
  let f = (0, D.useRef)(null);
  let p = (0, D.useRef)(false);
  r ||= s.renderer;
  if (!f.current && r) {
    f.current = r(e, {
      visualState: t,
      parent: o,
      props: n,
      presenceContext: c,
      blockInitialAnimation: c ? c.initial === false : false,
      reducedMotionConfig: u,
      skipAnimations: d,
      isSVG: a
    });
    if (p.current && f.current) {
      f.current.manuallyAnimateOnMount = true;
    }
  }
  let m = f.current;
  let h = (0, D.useContext)(Fd);
  if (m && !m.projection && i && (m.type === `html` || m.type === `svg`)) {
    i.create(m, n, h);
  }
  (0, D.useInsertionEffect)(() => {
    if (m && m.props !== n) {
      m.update(n, c);
    }
  });
  let g = n[Aa];
  let _ = (0, D.useRef)(!!g && !window.MotionHandoffIsComplete?.(g) && window.MotionHasOptimisedAnimation?.(g));
  ne(() => {
    if (p.current && m) {
      m.animationState?.animateChanges();
      m.enteringChildren = undefined;
    }
  }, []);
  ne(() => {
    p.current = true;
    if (m) {
      window.MotionIsMounted = true;
      m.updateFeatures();
      m.scheduleRenderMicrotask();
      if (_.current && m.animationState) {
        m.animationState.animateChanges();
      }
    }
  });
  (0, D.useEffect)(() => {
    if (m) {
      if (!_.current && m.animationState) {
        m.animationState.animateChanges();
      }
      _.current &&= (queueMicrotask(() => {
        window.MotionHandoffMarkAsComplete?.(g);
      }), false);
      m.enteringChildren = undefined;
    }
  });
  return m;
}
function Ld(e, {
  forwardMotionProps: t = false,
  type: n
} = {}, r, i) {
  if (r) {
    cd(r);
  }
  let a = n ? n === `svg` : Ed(e);
  let o = a ? Md : jd;
  function s(n, s) {
    let _Component2;
    let l = Rd(n);
    if (O(() => !!Hc.current?.sharedNodes.get(l)?.lead && n.initial)) {
      n = {
        ...n,
        initial: false
      };
    }
    let u = {
      ...(0, D.useContext)(Vu),
      ...n,
      layoutId: l
    };
    let {
      isStatic: d,
      isValidProp: f
    } = u;
    let p = fd(n);
    let m = o(n, d);
    if (!d) {
      zd(u, r);
      let t = Bd(u);
      p.visualElement = Id(e, m, u, i, t.ProjectionNode, a);
      if (t.isEnabled || p.visualElement?.projection?.options.layoutId) {
        _Component2 = t.MeasureLayout;
      }
    }
    return <ud.Provider value={p}>{_Component2 && p.visualElement ? <_Component2 visualElement={p.visualElement} {...u} /> : null}{Dd(e, n, Pd(m, p.visualElement, s), m, d, t, a, f)}</ud.Provider>;
  }
  s.displayName = `motion.${typeof e == `string` ? e : `create(${e.displayName ?? e.name ?? ``})`}`;
  let c = (0, D.forwardRef)(s);
  c[Nd] = e;
  return c;
}
function Rd({
  layoutId: e
}) {
  let t = (0, D.useContext)(te).id;
  if (t && e !== undefined) {
    return `${t}-${e}`;
  } else {
    return e;
  }
}
function zd(e, t) {
  (0, D.useContext)(rd).strict;
}
function Bd(e) {
  let {
    drag: t,
    layout: n
  } = sd();
  if (!t && !n) {
    return {};
  }
  let r = {
    ...t,
    ...n
  };
  return {
    MeasureLayout: r.MeasureLayout,
    isEnabled: t?.isEnabled(e) || n?.isEnabled(e),
    ProjectionNode: r.ProjectionNode
  };
}
function Vd(e, t) {
  if (typeof Proxy > `u`) {
    return Ld;
  }
  let n = new Map();
  let r = (n, r) => Ld(n, r, e, t);
  return new Proxy((e, t) => r(e, t), {
    get: (i, a) => a === `create` ? r : (n.has(a) || n.set(a, Ld(a, undefined, e, t)), n.get(a))
  });
}
var Hd = (e, t) => t.isSVG ?? Ed(e) ? new Pu(t) : new dl(t, {
  allowProjection: e !== D.Fragment
});
var Ud = class extends ku {
  constructor(e) {
    super(e);
    e.animationState ||= Ru(e);
  }
  updateAnimationControlsSubscription() {
    let {
      animate: e
    } = this.node.getProps();
    if (Gc(e)) {
      this.unmountControls = e.subscribe(this.node);
    }
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    if (this.node.getProps().animate !== this.node.prevProps?.animate) {
      this.updateAnimationControlsSubscription();
    }
  }
  unmount() {
    this.node.animationState.reset();
    this.unmountControls?.();
  }
};
var Wd = 0;
var Gd = {
  animation: {
    Feature: Ud
  },
  exit: {
    Feature: class extends ku {
      constructor() {
        super(...arguments);
        this.id = Wd++;
      }
      update() {
        let {
          presenceContext: e,
          animationState: t
        } = this.node;
        if (!e || !t) {
          return;
        }
        let {
          isPresent: n,
          onExitComplete: r
        } = e;
        if (n === !this.exit) {
          return;
        }
        if (n) {
          if (this.exit === true) {
            let {
              initial: e
            } = this.node.getProps();
            if (e && !Array.isArray(e)) {
              let {
                transition: t,
                transitionEnd: n,
                ...r
              } = xa(this.node, e) || {};
              for (let e in r) {
                this.node.getValue(e)?.jump(r[e]);
              }
            }
            this.node.blockInitialAnimation = false;
            t.reset();
            t.animateChanges();
          } else {
            t.setActive(`exit`, false);
          }
          this.exit = undefined;
          return;
        }
        let i = this.exit = t.setActive(`exit`, true);
        if (r) {
          i.then(() => {
            if (this.exit === i) {
              this.exit = true;
              r(this.id);
            }
          });
        }
      }
      mount() {
        let {
          register: e
        } = this.node.presenceContext || {};
        if (e) {
          this.unmount = e(this.id, this.node);
        }
        this.update();
      }
      unmount() {}
    }
  }
};
var Kd = class extends ku {
  constructor(e) {
    super(e);
    this.removeGroupControls = j;
    this.removeListeners = j;
    this.controls = new ou(e);
  }
  mount() {
    let {
      dragControls: e
    } = this.node.getProps();
    if (e) {
      this.removeGroupControls = e.subscribe(this.controls);
    }
    this.removeListeners = this.controls.addListeners() || j;
  }
  update() {
    let {
      dragControls: e,
      drag: t
    } = this.node.getProps();
    let {
      dragControls: n,
      drag: r
    } = this.node.prevProps || {};
    if (e !== n) {
      this.removeGroupControls();
      if (e) {
        this.removeGroupControls = e.subscribe(this.controls);
      }
    }
    if (r && !t) {
      this.controls.stop(undefined, undefined, r);
    }
  }
  unmount() {
    this.removeGroupControls();
    this.removeListeners();
    if (!this.controls.isDragging) {
      this.controls.endPanSession();
    }
  }
};
var qd = e => (t, n) => {
  if (e) {
    V.update(() => e(t, n), false, true);
  }
};
var Jd = class extends ku {
  constructor() {
    super(...arguments);
    this.removePointerDownListener = j;
  }
  onPointerDown(e) {
    this.session = new Nl(e, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: this.node.current?.ownerDocument.defaultView
    });
  }
  createPanHandlers() {
    let {
      onPanSessionStart: e,
      onPanStart: t,
      onPan: n,
      onPanEnd: r
    } = this.node.getProps();
    return {
      onSessionStart: qd(e),
      onStart: qd(t),
      onMove: qd(n),
      onEnd: (e, t) => {
        delete this.session;
        if (r) {
          V.postRender(() => r(e, t));
        }
      }
    };
  }
  mount() {
    this.removePointerDownListener = hl(this.node.current, `pointerdown`, e => this.onPointerDown(e));
  }
  update() {
    this.session?.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener();
    this.session?.end();
  }
};
var Yd = false;
var Xd = ({
  layout: e,
  layoutDependency: t,
  layoutAnchor: n
}) => ({
  layout: e,
  layoutDependency: t,
  layoutAnchor: n,
  animationType: typeof e == `string` ? e : `both`
});
var Zd = (e, t) => {
  let {
    snapshot: n
  } = e;
  let r = e.getStack();
  r?.remove(e);
  let i = r?.lead;
  if (r?.prevLead === e && i.resumeFrom === e) {
    i.resumeFrom = i.currentAnimation = e.resumingFrom = undefined;
  }
  e.options.layoutId = t;
  if (!t) {
    e.needsShow = true;
  } else {
    e.root.registerSharedNode(t, e);
    return () => {
      let {
        resumeFrom: t
      } = e;
      if (t?.isPresent !== false && e.getStack().members.includes(t)) {
        t.hide();
        e.resumeFrom = undefined;
        e.snapshot = n;
      }
    };
  }
};
var Qd = class extends D.Component {
  componentDidMount() {
    let {
      visualElement: e,
      layoutGroup: t,
      switchLayoutGroup: n,
      layoutId: r
    } = this.props;
    let {
      projection: i
    } = e;
    if (i) {
      t.group?.add(i);
      if (r) {
        n?.register?.(i);
      }
      if (Yd) {
        i.root.didUpdate();
      }
      if (i.options.layoutId !== r) {
        Zd(i, r)?.();
      }
      i.addEventListener(`animationComplete`, () => this.safeToRemove());
      i.setOptions({
        ...i.options,
        ...Xd(this.props),
        onExitComplete: () => this.safeToRemove()
      });
    }
    oc.hasEverUpdated = true;
  }
  getSnapshotBeforeUpdate(e) {
    let {
      layoutDependency: t,
      layoutId: n,
      visualElement: r,
      drag: i,
      isPresent: a
    } = this.props;
    let {
      projection: o
    } = r;
    if (o) {
      o.isPresent = a;
      this.takeOver = e.layoutId === n ? undefined : (o.willUpdate(), Zd(o, n));
      o.setOptions({
        ...o.options,
        ...Xd(this.props)
      });
      Yd = true;
      if (i || e.layoutDependency !== t || t === undefined || e.isPresent !== a) {
        o.willUpdate();
      } else {
        this.safeToRemove();
      }
      if (e.isPresent !== a) {
        if (a) {
          o.promote();
        } else if (!o.relegate()) {
          V.postRender(() => {
            if (!o.getStack()?.members.length) {
              this.safeToRemove();
            }
          });
        }
      }
    }
    return null;
  }
  componentDidUpdate() {
    let {
      projection: e
    } = this.props.visualElement;
    if (e) {
      this.takeOver?.();
      e.root.didUpdate();
      es.postRender(() => {
        if (!e.currentAnimation && e.isLead()) {
          this.safeToRemove();
        }
      });
    }
  }
  componentWillUnmount() {
    let {
      visualElement: e,
      layoutGroup: t,
      switchLayoutGroup: n
    } = this.props;
    let {
      projection: r
    } = e;
    Yd = true;
    if (r) {
      r.scheduleCheckAfterUnmount();
      t.group?.remove(r);
      n?.deregister?.(r);
    }
  }
  safeToRemove() {
    this.props.safeToRemove?.();
  }
  render() {
    return null;
  }
};
function $d(e) {
  let [t, n] = Zu();
  let r = (0, D.useContext)(te);
  return <Qd {...e} layoutGroup={r} switchLayoutGroup={(0, D.useContext)(Fd)} isPresent={t} safeToRemove={n} />;
}
var ef = {
  pan: {
    Feature: Jd
  },
  drag: {
    Feature: Kd,
    ProjectionNode: Uc,
    MeasureLayout: $d
  }
};
function tf(e, t, n, r, i) {
  let {
    props: a
  } = e;
  let o = `while${n}`;
  if (!i && e.animationState && a[o]) {
    e.animationState.setActive(o, r === `Start`);
  }
  let s = a[`on${n}${r}`];
  if (s) {
    V.postRender(() => s(t, pl(t)));
  }
}
var nf = class extends ku {
  mount() {
    let {
      current: e
    } = this.node;
    if (e) {
      this.unmount = hu(e, (e, t) => {
        tf(this.node, t, `Hover`, `Start`);
        return e => tf(this.node, e, `Hover`, `End`);
      });
    }
  }
  unmount() {}
};
var rf = class extends ku {
  constructor() {
    super(...arguments);
    this.isActive = false;
  }
  onFocus() {
    let e = false;
    try {
      e = this.node.current.matches(`:focus-visible`);
    } catch {
      e = true;
    }
    if (e && this.node.animationState) {
      this.node.animationState.setActive(`whileFocus`, true);
      this.isActive = true;
    }
  }
  onBlur() {
    if (this.isActive && this.node.animationState) {
      this.node.animationState.setActive(`whileFocus`, false);
      this.isActive = false;
    }
  }
  mount() {
    this.unmount = ue(Bc(this.node.current, `focus`, () => this.onFocus()), Bc(this.node.current, `blur`, () => this.onBlur()));
  }
  unmount() {}
};
function af(e, t, n, r) {
  if (!(e.current instanceof HTMLButtonElement) || !e.current.disabled) {
    tf(e, t, `Tap`, n, r);
  }
}
var of = class extends ku {
  constructor() {
    super(...arguments);
    this.options = {};
  }
  mount() {
    let {
      current: e
    } = this.node;
    if (e) {
      this.update();
      this.unmount = Du(e, (e, t) => {
        af(this.node, t, `Start`);
        return {
          onComplete: (e, {
            success: t
          }) => af(this.node, e, t ? `` : `Cancel`),
          onRepeat: () => af(this.node, t, ``, true)
        };
      }, this.options);
    }
  }
  update() {
    let {
      options: e,
      node: t
    } = this;
    let {
      globalTapTarget: n,
      propagate: r,
      tap: i
    } = t.props;
    for (let t in e) {
      delete e[t];
    }
    Object.assign(e, i, {
      useGlobalTarget: n,
      stopPropagation: r?.tap === false
    });
  }
  unmount() {}
};
var sf = new WeakMap();
var cf = new WeakMap();
var lf = e => {
  let t = sf.get(e.target);
  if (t) {
    t(e);
  }
};
var uf = e => {
  e.forEach(lf);
};
function df({
  root: e,
  ...t
}) {
  let n = e || document;
  if (!cf.has(n)) {
    cf.set(n, {});
  }
  let r = cf.get(n);
  let i = JSON.stringify(t);
  r[i] ||= new IntersectionObserver(uf, {
    root: e,
    ...t
  });
  return r[i];
}
function ff(e, t, n) {
  let r = df(t);
  sf.set(e, n);
  r.observe(e);
  return () => {
    sf.delete(e);
    r.unobserve(e);
  };
}
var pf = {
  some: 0,
  all: 1
};
var mf = class extends ku {
  constructor() {
    super(...arguments);
    this.hasEnteredView = false;
    this.isInView = false;
  }
  startObserver() {
    this.stopObserver?.();
    let {
      viewport: e = {}
    } = this.node.getProps();
    let {
      root: t,
      margin: n,
      amount: r = `some`,
      once: i
    } = e;
    let a = {
      root: t ? t.current : undefined,
      rootMargin: n,
      threshold: typeof r == `number` ? r : pf[r]
    };
    let o = e => {
      let {
        isIntersecting: t
      } = e;
      if (this.isInView === t || (this.isInView = t, i && !t && this.hasEnteredView)) {
        return;
      }
      if (t) {
        this.hasEnteredView = true;
      }
      if (this.node.animationState) {
        this.node.animationState.setActive(`whileInView`, t);
      }
      let {
        onViewportEnter: n,
        onViewportLeave: r
      } = this.node.getProps();
      let a = t ? n : r;
      if (a) {
        a(e);
      }
    };
    this.stopObserver = ff(this.node.current, a, o);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > `u`) {
      return;
    }
    let {
      props: e,
      prevProps: t
    } = this.node;
    if ([`amount`, `margin`, `root`].some(hf(e, t))) {
      this.startObserver();
    }
  }
  unmount() {
    this.stopObserver?.();
    this.hasEnteredView = false;
    this.isInView = false;
  }
};
function hf({
  viewport: e = {}
}, {
  viewport: t = {}
} = {}) {
  return n => e[n] !== t[n];
}
var gf = Vd(Object.assign({}, Gd, {
  inView: {
    Feature: mf
  },
  tap: {
    Feature: of
  },
  focus: {
    Feature: rf
  },
  hover: {
    Feature: nf
  }
}, ef, {
  layout: {
    ProjectionNode: Uc,
    MeasureLayout: $d
  }
}), Hd);
function _f(e) {
  let t = O(() => G(e));
  let {
    isStatic: n
  } = (0, D.useContext)(Vu);
  if (n) {
    let [, n] = (0, D.useState)(e);
    (0, D.useEffect)(() => t.on(`change`, n), []);
  }
  return t;
}
function vf(e, t) {
  let n = _f(t());
  let r = () => n.set(t());
  r();
  ne(() => {
    let t = () => V.preRender(r, false, true);
    let n = e.map(e => e.on(`change`, t));
    r();
    return () => {
      n.forEach(e => e());
      H(r);
    };
  });
  return n;
}
function yf(e) {
  ia.current = [];
  e();
  let t = vf(ia.current, e);
  ia.current = undefined;
  return t;
}
function bf(e, t, n, r) {
  if (typeof e == `function`) {
    return yf(e);
  }
  if (n !== undefined && !Array.isArray(n) && typeof t != `function`) {
    return Sf(e, t, n, r);
  }
  let i = typeof t == `function` ? t : Ou(t, n, r);
  let a = Array.isArray(e) ? xf(e, i) : xf([e], ([e]) => i(e));
  let o = Array.isArray(e) ? undefined : e.accelerate;
  if (o && !o.isTransformed && typeof t != `function` && Array.isArray(n) && r?.clamp !== false && !r?.mixer) {
    let e = r?.ease;
    a.accelerate = {
      ...o,
      times: [0, ...t, 1],
      keyframes: [n[0], ...n, n[n.length - 1]],
      isTransformed: true,
      ...(e ? {
        ease: Array.isArray(e) ? [e[0], ...e] : e
      } : {})
    };
  }
  return a;
}
function xf(e, t) {
  let n = O(() => []);
  return vf(e, () => {
    n.length = 0;
    let r = e.length;
    for (let t = 0; t < r; t++) {
      n[t] = e[t].get();
    }
    return t(n);
  });
}
function Sf(e, t, n, r) {
  let i = O(() => Object.keys(n));
  let a = O(() => ({}));
  for (let o of i) {
    a[o] = bf(e, t, n[o], r);
  }
  return a;
}
function Cf() {
  if (!$c.current) {
    el();
  }
  let [e] = (0, D.useState)(Qc.current);
  return e;
}
function wf(e) {
  return typeof e == `object` && !Array.isArray(e);
}
function Tf(e, t, n, r) {
  if (e == null) {
    return [];
  } else if (typeof e == `string` && wf(t)) {
    return ro(e, n, r);
  } else if (e instanceof NodeList) {
    return Array.from(e);
  } else if (Array.isArray(e)) {
    return e.filter(e => e != null);
  } else {
    return [e];
  }
}
function Ef(e, t, n) {
  return e * (t + 1) + n * t;
}
function Df(e, t) {
  if (t.has(e)) {
    return t.get(e);
  }
  let [, n, r] = e.match(/^(.+?)([+-][\d.]+)$/) || [];
  if (t.has(n)) {
    return Math.max(0, t.get(n) + parseFloat(r));
  } else {
    return undefined;
  }
}
function Of(e, t, n, r) {
  if (typeof t == `number`) {
    return t;
  } else if (t.startsWith(`-`) || t.startsWith(`+`)) {
    return Math.max(0, e + parseFloat(t));
  } else if (t === `<`) {
    return n;
  } else if (t.startsWith(`<`)) {
    return Math.max(0, n + parseFloat(t.slice(1)));
  } else {
    return Df(t, r) ?? e;
  }
}
function kf(e, t, n) {
  for (let r = 0; r < e.length; r++) {
    let i = e[r];
    if (i.at > t && i.at < n) {
      ae(e, i);
      r--;
    }
  }
}
function Af(e, t, n, r, i, a) {
  kf(e, i, a);
  for (let o = 0; o < t.length; o++) {
    e.push({
      value: t[o],
      at: B(i, a, r[o]),
      easing: Ae(n, o)
    });
  }
}
function jf(e, t, n = 0) {
  let r = t + 1 + t * n;
  for (let t = 0; t < e.length; t++) {
    e[t] = e[t] / r;
  }
}
function Mf(e, t) {
  if (e.at === t.at) {
    if (e.value === null) {
      return 1;
    } else if (t.value === null) {
      return -1;
    } else {
      return 0;
    }
  } else {
    return e.at - t.at;
  }
}
var Nf = `easeInOut`;
var Pf = 20;
function Ff(e, {
  defaultTransition: t = {},
  ...n
} = {}, r, i, a) {
  let o = t.duration || 0.3;
  let s = new Map();
  let c = new Map();
  let l = {};
  let u = new Map();
  let d = 0;
  let f = 0;
  let p = 0;
  let m = (e, n) => {
    let a = n;
    let s = e => typeof e == `number` ? n + e : Of(f, e, d, u);
    for (let n = 0; n < e.length; n++) {
      let h = e[n];
      if (typeof h == `string`) {
        u.set(h, f);
        continue;
      }
      if (!Array.isArray(h)) {
        let e = h.at === undefined ? f : s(h.at);
        if (`sequence` in h) {
          d = f = e;
          f = m(h.sequence, e);
          d = e;
          a = Math.max(a, f);
        } else {
          u.set(h.name, e);
        }
        continue;
      }
      let [g, _, v = {}] = h;
      if (v.at !== undefined) {
        f = s(v.at);
      }
      let y = 0;
      let b = (e, n, r, a = 0, s = 0) => {
        let c = Rf(e);
        let {
          delay: l = 0,
          times: u = Nn(c),
          type: d = t.type || `keyframes`,
          repeat: m,
          repeatType: h,
          repeatDelay: g = 0,
          ..._
        } = n;
        let {
          ease: v = t.ease || `easeOut`,
          duration: b
        } = n;
        r.mixer ||= n.mixer;
        let x = typeof l == `function` ? l(a, s) : l;
        let S = c.length;
        let C = $r(d) ? d : i?.[d || `keyframes`];
        if (S <= 2 && C) {
          let e = 100;
          if (S === 2 && Vf(c)) {
            let t = c[1] - c[0];
            e = Math.abs(t);
          }
          let n = {
            ...t,
            ..._
          };
          if (b !== undefined) {
            n.duration = M(b);
          }
          let r = nn(n, e, C);
          v = r.ease;
          b = r.duration;
        }
        b ??= o;
        let w = f + x;
        if (u.length === 1 && u[0] === 0) {
          u[1] = 1;
        }
        let T = u.length - c.length;
        if (T > 0) {
          Mn(u, T);
        }
        if (c.length === 1) {
          c.unshift(null);
        }
        if (m && m < Pf) {
          let e = b > 0 ? g / b : 0;
          b = Ef(b, m, g);
          let t = [...c];
          let n = [...u];
          v = Array.isArray(v) ? [...v] : [v];
          let r = [...v];
          let i = h === `reverse` || h === `mirror`;
          let a = t;
          let o = r;
          if (i) {
            a = [...t].reverse();
            if (h === `reverse`) {
              o = [...r].reverse().map(e => typeof e == `function` ? ve(e) : e);
            }
          }
          for (let s = 0; s < m; s++) {
            let l = i && s % 2 == 0;
            let d = l ? a : t;
            let f = l ? o : r;
            let p = (s + 1) * (1 + e);
            if (e > 0) {
              c.push(c[c.length - 1]);
              u.push(p);
              v.push(`linear`);
            }
            c.push(...d);
            for (let e = 0; e < d.length; e++) {
              u.push(n[e] + p);
              v.push(e === 0 ? `linear` : Ae(f, e - 1));
            }
          }
          jf(u, m, e);
        }
        let E = w + b;
        Af(r, c, v, u, w, E);
        y = Math.max(x + b, y);
        p = Math.max(E, p);
      };
      if (K(g)) {
        let e = If(g, c);
        b(_, v, Lf(`default`, e));
      } else {
        let e = Tf(g, _, r, l);
        let t = e.length;
        for (let n = 0; n < t; n++) {
          _ = _;
          v = v;
          let r = e[n];
          let i = If(r, c);
          for (let e in _) {
            b(_[e], zf(v, e), Lf(e, i), n, t);
          }
        }
      }
      d = f;
      f += y;
      a = Math.max(a, f);
    }
    return a;
  };
  m(e, 0);
  if (a) {
    a.duration = p;
    a.labels = u;
  }
  let {
    type: h,
    ...g
  } = t;
  c.forEach((e, r) => {
    for (let i in e) {
      let a = e[i];
      a.sort(Mf);
      let o = [];
      let c = [];
      let l = [];
      for (let e = 0; e < a.length; e++) {
        let {
          at: t,
          value: n,
          easing: r
        } = a[e];
        o.push(n);
        c.push(de(0, p, t));
        l.push(r || `easeOut`);
      }
      if (c[0] !== 0) {
        c.unshift(0);
        o.unshift(o[0]);
        l.unshift(Nf);
      }
      if (c[c.length - 1] !== 1) {
        c.push(1);
        o.push(null);
      }
      if (!s.has(r)) {
        s.set(r, {
          keyframes: {},
          transition: {}
        });
      }
      let u = s.get(r);
      u.keyframes[i] = o;
      u.transition[i] = {
        ...g,
        duration: p,
        ease: l,
        times: c,
        mixer: a.mixer || t.mixer,
        ...n
      };
    }
  });
  return s;
}
function If(e, t) {
  if (!t.has(e)) {
    t.set(e, {});
  }
  return t.get(e);
}
function Lf(e, t) {
  t[e] ||= [];
  return t[e];
}
function Rf(e) {
  if (Array.isArray(e)) {
    return e;
  } else {
    return [e];
  }
}
function zf(e, t) {
  if (e && e[t]) {
    return {
      ...e,
      ...e[t]
    };
  } else {
    return {
      ...e
    };
  }
}
var Bf = e => typeof e == `number`;
var Vf = e => e.every(Bf);
function Hf(e, t) {
  return K(e) || typeof e == `number` || typeof e == `string` && !wf(t);
}
function Uf(e, t, n, r) {
  let i = [];
  if (Hf(e, t)) {
    i.push(ns(e, wf(t) && t.default || t, n && (n.default || n)));
  } else {
    if (e == null) {
      return i;
    }
    let a = Tf(e, t, r);
    let o = a.length;
    for (let e = 0; e < o; e++) {
      let r = a[e];
      let s = {
        ...n
      };
      if (`delay` in s && typeof s.delay == `function`) {
        s.delay = s.delay(e, o);
      }
      if (r instanceof Element) {
        i.push(...Qo(r, t, s, Wc.get(r)));
      } else {
        i.push(...Xa(Ja(r) ?? $o, r, t, s));
      }
    }
  }
  return i;
}
function Wf(e, t, n, r) {
  let i = [];
  let a = Ff(e.map(e => {
    if (Array.isArray(e) && typeof e[0] == `function`) {
      let t = e[0];
      let n = G(0);
      n.on(`change`, t);
      if (e.length === 1) {
        return [n, [0, 1]];
      } else if (e.length === 2) {
        return [n, [0, 1], e[1]];
      } else {
        return [n, e[1], e[2]];
      }
    }
    return e;
  }), t, n, {
    spring: On
  }, r);
  let o = t?.reduceMotion ?? t?.defaultTransition?.reduceMotion;
  a.forEach(({
    keyframes: e,
    transition: t
  }, n) => {
    i.push(...Uf(n, e, {
      ...t,
      reduceMotion: o
    }));
  });
  return i;
}
var Gf = 0;
function Kf({
  repeat: e = 0,
  repeatDelay: t = 0,
  repeatType: n = `loop`,
  delay: r = 0
}, i, a, o) {
  let s = i + t;
  let c = o === undefined;
  if (c) {
    let t = Math.max(0, a - r);
    o = s && t > 0 ? Math.min(e, Math.ceil(t / s - 1e-9) - 1) : 0;
    a = Math.min(t - o * s, i);
  }
  if (n !== `loop` && o % 2) {
    a = i - a;
  }
  return [o, c ? a : r + o * s + a];
}
function qf(e, t) {
  let n = [...e];
  let r = typeof n[0] == `function` ? Math.max(1, n.length - 1) : 2;
  n[r] = {
    ...n[r],
    at: t
  };
  return n;
}
var Jf = (e, t) => t === undefined ? e : {
  name: e,
  at: t
};
function Yf(e) {
  e.pause();
  e.time = 0;
  e.stop();
}
var Xf = class e {
  constructor(e = [], t = {}, n) {
    this.options = t;
    this.entries = [];
    this.repeatIndex = 0;
    this.prevTime = 0;
    this.markers = [];
    this.labels = new Map();
    this.totalDuration = 0;
    this.isDirty = false;
    this.isDone = false;
    this.isRebuilding = false;
    this.playbackSpeed = 1;
    this.motionScope = eo.current;
    this.isKilled = false;
    this.isWrapped = false;
    this.stop = () => {
      this.flush();
      this.group?.stop();
    };
    this.isPaused = t.autoplay === false;
    this.newFinished();
    e.forEach(e => this.add(e));
    if (n) {
      this.isDirty = false;
      this.isWrapped = true;
      this.group = new ea(n);
      this.watch();
    } else {
      this.invalidate();
      this.flush();
    }
  }
  add(t, n) {
    if (t instanceof e) {
      t.adopt(this);
    }
    return this.push({
      item: t,
      at: n
    });
  }
  call(e, t) {
    return this.push({
      item: e,
      at: t,
      marker: {
        name: `_m${Gf++}`,
        time: 0,
        callback: e
      }
    });
  }
  addPause(e, t) {
    return this.push({
      item: t || {},
      at: e,
      marker: {
        name: `_m${Gf++}`,
        time: 0,
        callback: t,
        pause: true
      }
    });
  }
  move(e, t) {
    this.entries.forEach(n => {
      if (n.item === e) {
        n.at = t;
      }
    });
    return this.invalidate();
  }
  remove(t) {
    if (t instanceof e) {
      t.parent = undefined;
    }
    this.entries = this.entries.filter(e => e.item !== t);
    return this.invalidate();
  }
  clear() {
    this.entries = [];
    return this.invalidate();
  }
  getLabelTime(e) {
    this.flush();
    return this.labels.get(e);
  }
  seek(e) {
    this.time = this.resolve(e);
    return this;
  }
  playTo(e) {
    let t = this.resolve(e);
    let n = this.iterationDuration;
    let r = this.time;
    let [i] = Kf(this.options, n, r);
    let a = Kf(this.options, n, t, i)[1];
    let o = Math.abs(this.speed);
    this.speed = a < r ? -o : o;
    this.stopAt = t;
    if (!this.clock) {
      this.invalidate();
    }
    this.play();
    return this;
  }
  reverse() {
    this.speed = -this.speed;
    this.play();
    return this;
  }
  get progress() {
    if (this.duration) {
      return this.time / this.duration;
    } else {
      return 0;
    }
  }
  set progress(e) {
    this.time = e * this.duration;
  }
  get time() {
    return this.active()?.time ?? 0;
  }
  set time(e) {
    this.flush();
    this.prevTime = e;
    if (this.group) {
      this.group.time = e;
    }
    this.repeatIndex = this.currentRepeat();
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(e) {
    this.playbackSpeed = e;
    if (this.group) {
      this.group.speed = e;
    }
  }
  get duration() {
    this.flush();
    if (this.isWrapped) {
      return this.group.duration;
    } else {
      return this.totalDuration;
    }
  }
  get iterationDuration() {
    this.flush();
    if (this.isWrapped) {
      return this.group.iterationDuration;
    } else {
      return this.totalDuration;
    }
  }
  get state() {
    return this.active()?.state ?? `idle`;
  }
  get startTime() {
    return this.active()?.startTime ?? null;
  }
  play() {
    this.flush();
    this.isPaused = false;
    this.group?.play();
    if (this.isDone) {
      this.newFinished();
      this.watch();
    }
  }
  pause() {
    this.flush();
    this.isPaused = true;
    this.group?.pause();
  }
  cancel() {
    this.flush();
    this.group?.cancel();
  }
  complete() {
    this.flush();
    this.group?.complete();
  }
  attachTimeline(e) {
    this.flush();
    this.scrollTimeline = e;
    this.detachScroll = this.group?.attachTimeline(e);
    return () => {
      this.scrollTimeline = undefined;
      this.detachScroll?.();
    };
  }
  then(e, t) {
    return this.finished.then(e, t);
  }
  active() {
    this.flush();
    if (this.group?.animations.length) {
      return this.group;
    } else {
      return undefined;
    }
  }
  push(e) {
    this.entries.push(e);
    return this.invalidate();
  }
  invalidate() {
    if (this.parent) {
      this.parent.invalidate();
    } else if (!this.isDirty) {
      this.isDirty = true;
      queueMicrotask(() => this.flush());
    }
    return this;
  }
  flush() {
    if (this.isDirty && !this.parent && !this.isKilled) {
      this.build();
    }
  }
  adopt(e) {
    this.group &&= (Yf(this.group), undefined);
    this.isDirty = false;
    this.parent = e;
  }
  build() {
    let e = this.isWrapped ? this.group.iterationDuration : this.totalDuration;
    this.isDirty = false;
    this.isWrapped = false;
    let t = this.group;
    let n = 0;
    if (t) {
      this.isRebuilding = true;
      if (this.scrollTimeline) {
        this.detachScroll?.();
        t.cancel();
      } else {
        n = t.animations.length ? t.time : 0;
        Yf(t);
      }
      this.isRebuilding = false;
    }
    let {
      defaultTransition: r,
      onComplete: i,
      onUpdate: a,
      onRepeat: o,
      onReverseComplete: s,
      autoplay: c,
      scope: l,
      ...u
    } = this.options;
    let d = {};
    if (l?.reduceMotion !== undefined) {
      d.reduceMotion = l.reduceMotion;
    }
    if (l?.skipAnimations !== undefined) {
      d.skipAnimations = l.skipAnimations;
    }
    Object.assign(d, u);
    let f = new Map();
    let p = {};
    let m = eo.current;
    eo.current = this.motionScope;
    let h;
    try {
      h = Wf(this.toSequence(f), {
        defaultTransition: r,
        ...d
      }, l, p);
    } finally {
      eo.current = m;
    }
    let g = p.labels;
    let _ = d.duration ?? p.duration;
    let v = p.duration ? _ / p.duration : 1;
    g.forEach((e, t) => g.set(t, e * v));
    this.markers = [];
    f.forEach((e, t) => {
      e.time = g.get(t);
      g.delete(t);
      _ = Math.max(_, e.time);
      this.markers.push(e);
    });
    this.markers.sort((e, t) => e.time - t.time);
    this.labels = g;
    this.totalDuration = _;
    this.clock = this.clockAnimation = undefined;
    if (this.markers.length || this.stopAt !== undefined || a || o) {
      let e = this.clock = G(0);
      e.on(`change`, t => e === this.clock && this.onClock(t));
      h.unshift(this.clockAnimation = ns(e, [0, _], {
        ...d,
        duration: _,
        ease: `linear`
      }));
    }
    let y = this.group = new ea(h);
    let {
      delay: b = 0,
      repeat: x = 0,
      repeatDelay: S = 0
    } = this.options;
    let [C, w] = Kf(this.options, e, n);
    if (n > b) {
      n = Kf(this.options, _, Math.min(w, _), C)[1];
    }
    if (this.isDone && n < b + (x + 1) * (_ + S) - S) {
      this.newFinished();
    }
    if (this.scrollTimeline) {
      this.detachScroll = y.attachTimeline(this.scrollTimeline);
    } else {
      y.speed = this.playbackSpeed;
      if (this.isPaused) {
        y.pause();
      }
      if (n) {
        y.time = n;
      }
    }
    this.repeatIndex = this.currentRepeat();
    this.prevTime = n || -1;
    this.watch();
  }
  toSequence(t) {
    return this.entries.map(({
      item: n,
      at: r,
      marker: i
    }) => i ? (t.set(i.name, i), Jf(i.name, r)) : n instanceof e ? {
      sequence: n.toSequence(t),
      at: r
    } : typeof n == `string` ? Jf(n, r) : r === undefined ? n : Array.isArray(n) ? qf(n, r) : {
      ...n,
      at: r
    });
  }
  resolve(e) {
    this.flush();
    if (typeof e == `number`) {
      return e;
    } else {
      return Df(e, this.labels) ?? this.time;
    }
  }
  currentRepeat() {
    return Kf(this.options, this.totalDuration, this.clockAnimation?.time ?? 0)[0];
  }
  onClock(e) {
    let t = this.prevTime;
    this.prevTime = e;
    if (this.isRebuilding) {
      return;
    }
    let {
      onUpdate: n,
      onRepeat: r,
      repeatType: i = `loop`
    } = this.options;
    n?.(e);
    let a = this.currentRepeat();
    let o = a > this.repeatIndex ? 1 : -1;
    while (a !== this.repeatIndex) {
      let e = this.speed > 0 == (i === `loop` || !(this.repeatIndex % 2));
      let n = e ? this.totalDuration : 0;
      if (this.cross(t, n)) {
        return;
      }
      this.repeatIndex += o;
      r?.();
      t = i === `loop` ? e ? -1 : Infinity : n;
    }
    this.cross(t, e);
  }
  cross(e, t) {
    if (e === t) {
      return;
    }
    let n = t > e;
    let r = r => n ? r > e && r <= t : r < e && r >= t;
    let i = n ? this.markers : [...this.markers].reverse();
    for (let e of i) {
      if (r(e.time) && (e.callback?.(n ? 1 : -1), e.pause)) {
        return this.pauseAt(e.time);
      }
    }
    if (this.stopAt !== undefined && r(this.stopAt)) {
      this.pauseAt(this.stopAt);
      this.stopAt = undefined;
      return true;
    }
  }
  pauseAt(e) {
    this.pause();
    this.time = Kf(this.options, this.totalDuration, e, this.repeatIndex)[1];
    return true;
  }
  watch() {
    let e = this.group;
    e.finished.then(() => {
      if (e !== this.group || this.isDone) {
        return;
      }
      this.isDone = true;
      let {
        onComplete: t,
        onReverseComplete: n
      } = this.options;
      let r = this.speed < 0 && n || t;
      let i = this.resolveFinished;
      r?.();
      i();
    });
  }
  newFinished() {
    this.isDone = false;
    this.finished = new Promise(e => {
      this.resolveFinished = e;
    });
    let {
      scope: e
    } = this.options;
    let t = this.motionScope?.add(() => {
      this.isKilled = true;
      this.stop();
    });
    e?.animations.push(this);
    this.finished.then(() => {
      t?.();
      if (e) {
        ae(e.animations, this);
      }
    });
  }
};
function Zf(e) {
  return Array.isArray(e) && e.some(e => Array.isArray(e) || e?.sequence);
}
function Qf(e = {}) {
  let {
    scope: t,
    reduceMotion: n,
    skipAnimations: r
  } = e;
  function i(e, i, a) {
    let o = eo.current?.transition;
    let s = {};
    if (n !== undefined) {
      s.reduceMotion = n;
    }
    if (r !== undefined) {
      s.skipAnimations = r;
    }
    let c;
    if (Zf(e)) {
      let r = {
        ...s,
        ...i,
        scope: t
      };
      if (o) {
        r.defaultTransition = {
          ...o,
          ...r.defaultTransition
        };
      }
      r.reduceMotion = i?.reduceMotion ?? r.defaultTransition?.reduceMotion ?? n;
      c = new Xf(e, r);
    } else {
      let {
        onComplete: n,
        ...r
      } = a || {};
      let l = {
        ...s,
        ...o,
        ...r
      };
      let {
        onUpdate: u
      } = r;
      c = new Xf([typeof e == `number` || typeof e == `string` && (typeof i == `string` || Array.isArray(i)) ? [u || (() => {}), Array.isArray(i) ? i : [e, i], {
        ...l,
        onUpdate: undefined
      }] : [e, i, l]], {
        ...s,
        onComplete: n,
        scope: t
      }, Uf(e, i, l, t));
    }
    return c;
  }
  return i;
}
var $f = Object.assign(Qf(), {
  addEffect: Ka,
  removeEffect: qa
});
var ep = gf;
var tp = e(n(), 1);
var np = 1.2;
var rp = 0.92;
var ip = [200, 176, 154, 136, 120, 106, 94, 84, 74, 66, 58];
function ap(e, t, n) {
  let r = [...e];
  let i = 1;
  while (i < r.length && n(r.slice(0, i + 1).join(``)) <= t) {
    i++;
  }
  return r.slice(0, i).join(``);
}
function op(e, t, n) {
  let r = [];
  for (let i of e.split(`
`)) {
    let e = ``;
    for (let a of i.split(/\s+/).filter(Boolean)) {
      let i = e ? `${e} ${a}` : a;
      if (n(i) <= t) {
        e = i;
        continue;
      }
      if (e) {
        r.push(e);
      }
      let o = a;
      for (let e = ap(o, t, n); e.length < o.length; e = ap(o, t, n)) {
        r.push(e);
        o = o.slice(e.length);
      }
      e = o;
    }
    r.push(e);
  }
  return r;
}
function sp(e, t, n, r) {
  let i = e.slice(0, t);
  let a = [...i[t - 1]];
  while (a.length && r(`${a.join(``)}…`) > n) {
    a = a.slice(0, -1);
  }
  i[t - 1] = `${a.join(``).trimEnd()}…`;
  return i;
}
function cp(e, t, n) {
  let r = ip[ip.length - 1];
  for (let i of ip) {
    let a = Math.floor(t.height / (i * np));
    let o = t.width / i;
    let s = op(e.trim(), o, n);
    let c = s.length <= a;
    if (!c && i !== r) {
      continue;
    }
    let l = c ? s : sp(s, a, o, n);
    return {
      size: i,
      rows: a,
      first: Math.floor((a - l.length) / 2),
      lines: l
    };
  }
  throw Error(`unreachable: the smallest size always sets a page`);
}
var lp = 1080;
var up = {
  x: 96,
  y: 100,
  width: 888,
  height: 760
};
var dp = {
  baseline: 984,
  edge: 96
};
var fp = 54;
var pp = 34;
var mp = 3;
var hp = 4;
var gp = 100;
function _p() {
  let e = getComputedStyle(document.documentElement);
  return {
    display: e.getPropertyValue(`--font-display`).trim(),
    sans: e.getPropertyValue(`--font-sans`).trim()
  };
}
function vp(e, t, n, r, i, a) {
  e.font = `900 expanded ${r}px ${i}`;
  e.fillStyle = a.type;
  let {
    fontBoundingBoxAscent: o,
    fontBoundingBoxDescent: s
  } = e.measureText(`duc`);
  for (let i of `duc`) {
    e.fillText(i, t, n);
    t += e.measureText(i).width + x.tracking * r;
  }
  let c = n + s + (r - o - s) / 2;
  let {
    hand: l,
    viewBox: u,
    paths: d
  } = x;
  let f = Math.min(l.width * r / u.width, l.height * r / u.height);
  let p = t + l.before * r + (l.width * r - u.width * f) / 2;
  let m = c - (l.lift + l.height) * r + (l.height * r - u.height * f) / 2;
  e.save();
  e.translate(p - u.x * f, m - u.y * f);
  e.scale(f, f);
  e.fillStyle = a.hand;
  for (let t of d) {
    e.fill(new Path2D(t));
  }
  e.restore();
}
function yp(e, t, n, r, i) {
  if (t === `plain`) {
    return;
  }
  e.fillStyle = n.type;
  if (t === `lines`) {
    e.globalAlpha = n.rule;
    for (let t = 0; t < r.rows; t++) {
      e.fillRect(0, i(t) - mp / 2, lp, mp);
    }
    e.globalAlpha = 1;
    return;
  }
  let a = r.size * np / hp;
  let o = i(r.rows - 1) + a;
  let s = [];
  for (let e = i(0) % a; e <= o + 0.5; e += a) {
    s.push(Math.round(e));
  }
  let c = [];
  for (let e = up.x % a; e < lp; e += a) {
    c.push(Math.round(e));
  }
  if (t === `grid`) {
    e.globalAlpha = n.rule * 0.75;
    for (let t of s) {
      e.fillRect(0, t - 1, lp, 2);
    }
    for (let t of c) {
      e.fillRect(t - 1, 0, 2, o);
    }
  } else {
    e.globalAlpha = Math.min(1, n.rule * 1.6);
    let t = Math.max(3, a / 15);
    e.beginPath();
    for (let n of s) {
      for (let r of c) {
        e.moveTo(r + t, n);
        e.arc(r, n, t, 0, Math.PI * 2);
      }
    }
    e.fill();
  }
  e.globalAlpha = 1;
}
function bp(e, {
  text: t,
  name: n,
  family: r,
  isDrawn: i,
  lines: a,
  style: o
}) {
  let s = e.getContext(`2d`);
  if (!s) {
    return;
  }
  let c = u(o.paper);
  let d = _p();
  let f = e.width / lp;
  s.setTransform(f, 0, 0, f, 0, 0);
  let p = r ? `"${r}", ${d.display}` : d.display;
  let m = (e, t) => e.hand ? `${t}px ${p}` : `400 ${(t * e.scale).toFixed(2)}px ${d.display}`;
  let h = new Map();
  let g = e => {
    let t = h.get(e);
    if (t === undefined) {
      t = 0;
      for (let n of S(e, i, a)) {
        s.font = m(n, gp);
        t += s.measureText(n.text).width / gp;
      }
      h.set(e, t);
    }
    return t;
  };
  s.globalAlpha = 1;
  s.textAlign = `left`;
  s.textBaseline = `alphabetic`;
  s.fillStyle = c.ground;
  s.fillRect(0, 0, lp, lp);
  let _ = cp(t, up, g);
  let v = _.size * np;
  let y = up.y + (up.height - _.rows * v) / 2;
  let b = e => Math.round(y + e * v + _.size * rp);
  yp(s, o.ruling, c, _, b);
  _.lines.forEach((e, t) => {
    let n = up.x;
    for (let r of S(e, i, a)) {
      s.font = m(r, _.size);
      s.fillStyle = r.hand ? c.hand : c.type;
      s.globalAlpha = r.hand ? 1 : l;
      s.fillText(r.text, n, b(_.first + t));
      n += s.measureText(r.text).width;
    }
  });
  s.globalAlpha = 1;
  vp(s, dp.edge, dp.baseline, fp, d.display, c);
  s.font = `500 ${pp}px ${d.sans}`;
  s.fillStyle = c.type;
  s.globalAlpha = 0.9;
  s.textAlign = `right`;
  s.fillText(n, lp - dp.edge, dp.baseline);
  s.globalAlpha = 1;
}
function xp(e, t) {
  let n = document.createElement(`canvas`);
  n.width = n.height = lp;
  bp(n, e);
  return new Promise((e, r) => n.toBlob(n => n ? e(new File([n], t, {
    type: `image/png`
  })) : r(Error(`No picture`)), `image/png`));
}
var Sp = {
  39: [8216, 8217],
  34: [8220, 8221],
  45: [8208, 8209, 8722]
};
var Cp = [{
  cp: 8211,
  stretch: 1.6
}, {
  cp: 8212,
  stretch: 2.4
}];
var wp = 8230;
var Tp = [32, 160];
var Ep = new Map([...Object.entries(Sp).flatMap(([e, t]) => t.map(t => [t, Number(e)])), ...Cp.map(({
  cp: e
}) => [e, 45]), [wp, 46]]);
var Dp = (e, t) => Tp.includes(e) || t.has(Ep.get(e) ?? e);
function Op(e) {
  let {
    state: t
  } = d();
  let {
    drawn: n,
    picture: r
  } = t;
  let i = p(t.project.name);
  let a = t.font?.family;
  let o = t.alignment.lines;
  return (0, D.useMemo)(() => ({
    text: e,
    name: i,
    family: a,
    lines: o,
    style: r,
    isDrawn: e => Dp(e.codePointAt(0), n)
  }), [e, i, a, o, r, n]);
}
function _Component6({
  input: e,
  paper: t,
  pixels: n,
  label: r,
  className: i
}) {
  let a = (0, D.useRef)(null);
  (0, D.useEffect)(() => {
    let n = a.current;
    let r = true;
    let i = () => bp(n, t ? {
      ...e,
      style: {
        ...e.style,
        paper: t
      }
    } : e);
    i();
    if (document.fonts.status === `loading`) {
      document.fonts.ready.then(() => r && i());
    }
    return () => {
      r = false;
    };
  }, [e, t]);
  const Component = `canvas`;
  return <Component ref={a} width={n} height={n} role={r ? `img` : undefined} aria-label={r} aria-hidden={!r || undefined} className={i} />;
}
var Ap = {
  otf: {
    surface: `bg-paper text-carbon enabled:hover:bg-paper/92`,
    small: `text-carbon`
  },
  woff2: {
    surface: `bg-paper/14 text-paper enabled:hover:bg-paper/20 enabled:active:bg-paper/24`,
    small: `text-paper/90`
  }
};
function _Component9({
  kind: e,
  buffer: t,
  done: n,
  onDownload: r
}) {
  let {
    label: i,
    use: a
  } = ee[e];
  let {
    surface: o,
    small: s
  } = Ap[e];
  const Component2 = `span`;
  const Component3 = `span`;
  const Component4 = `span`;
  const Component5 = `span`;
  const Component6 = `span`;
  const Component7 = `button`;
  return <Component7 type={`button`} onClick={r} disabled={!t} className={`pressable flex h-16 items-center gap-3.5 rounded-[1.25rem] px-4.5 text-left disabled:opacity-60 ${o}`}><Component2 className={n ? `icon-in flex shrink-0` : `flex shrink-0`} key={String(n)}>{n ? <_Component3 /> : <_ />}</Component2><Component5 className={`flex min-w-0 flex-1 flex-col gap-px`}><Component3 className={`text-base leading-5.5 font-semibold`}>{i}</Component3><Component4 className={`truncate text-caption ${s}`}>{n ? `Sent to your downloads` : a}</Component4></Component5><Component6 className={`text-caption tabular-nums ${s}`}>{t ? T(t.byteLength) : `…`}</Component6></Component7>;
}
function Mp() {
  let {
    state: e,
    actions: t
  } = d();
  let [n, r] = (0, D.useState)(false);
  let i = (0, D.useRef)(null);
  let o = () => {
    (0, tp.flushSync)(() => r(false));
    i.current?.focus();
  };
  let s = e.drawn.size;
  if (n) {
    const Component8 = `span`;
    const Component9 = `button`;
    const Component10 = `div`;
    return <Component10 role={`group`} aria-labelledby={`start-over-warning`} className={`flex items-center gap-2 px-5 pt-4 lg:px-6`}><Component8 id={`start-over-warning`} className={`min-w-0 flex-1 text-caption text-paper/90`}>{`Can’t be undone`}</Component8><Component9 type={`button`} onClick={t.startOver} className={`pressable h-11 shrink-0 rounded-full bg-paper px-4 text-[0.9375rem] leading-5 font-semibold text-danger hover:bg-paper/92`}>{`Erase all `}{s}</Component9><_Component4 autoFocus={true} onClick={o}>{`Keep them`}</_Component4></Component10>;
  } else {
    const Component11 = `div`;
    return <Component11 className={`flex items-center justify-between gap-2 px-5 pt-4 lg:px-6`}><_Component4 onClick={t.chooseFont} className={`pl-3.5`}><_Component5 className={`size-5.5 shrink-0 lg:size-5`} />{`Open font…`}</_Component4><_Component4 ref={i} onClick={() => r(true)}>{`Start over`}</_Component4></Component11>;
  }
}
function Np() {
  let {
    state: e,
    actions: t
  } = d();
  let n = (0, D.useId)();
  let {
    name: r
  } = e.project;
  const Component12 = `span`;
  const Component13 = `span`;
  const Component14 = `input`;
  const Component15 = `label`;
  return <Component15 className={`flex flex-col gap-2 px-5 pb-2 lg:px-6`}><Component13 className={`flex items-baseline justify-between gap-3 text-caption font-medium text-paper/90`}>{`Font name`}<Component12 id={n} className={`font-normal`}>{`How font menus will list it`}</Component12></Component13><Component14 type={`text`} name={`font-name`} value={r} onChange={e => t.rename(e.target.value)} onBlur={() => t.rename(p(r))} onKeyDown={e => e.key === `Enter` && e.currentTarget.blur()} maxLength={31} placeholder={m} aria-describedby={n} autoComplete={`off`} autoCorrect={`off`} autoCapitalize={`words`} spellCheck={false} enterKeyHint={`done`} className={`h-12 w-full rounded-2xl bg-paper/8 px-4 text-base font-medium text-paper transition-colors duration-150 placeholder:text-placeholder hover:bg-paper/12 focus:bg-paper/12`} /></Component15>;
}
function Pp({
  input: e,
  picture: t,
  focusStyle: n
}) {
  let {
    actions: r
  } = d();
  let o = (0, D.useRef)(null);
  let s = () => r.openSheet(`picture`);
  (0, D.useEffect)(() => {
    if (n) {
      o.current?.focus({
        preventScroll: true
      });
    }
  }, [n]);
  const Component16 = `button`;
  const Component17 = `span`;
  const Component18 = `span`;
  const Component19 = `p`;
  const Component20 = `span`;
  const Component21 = `div`;
  const Component22 = `div`;
  const Component23 = `div`;
  return <Component23 className={`flex gap-4 px-5 pb-5 lg:px-6`}><Component16 type={`button`} onClick={s} aria-label={`Change the picture’s colour and paper`} className={`pressable size-28 shrink-0 rounded-2xl`}><_Component6 input={e} pixels={540} className={`size-full rounded-[inherit] ${e.style.paper === `carbon` ? `outline-1 -outline-offset-1 outline-paper/20` : ``}`} /></Component16><Component22 className={`flex min-w-0 flex-1 flex-col items-start justify-between gap-2 py-0.5`}><Component19 className={`flex flex-col gap-0.5`}><Component17 className={`text-[0.9375rem] leading-5 font-semibold`}>{`Send it as a picture`}</Component17><Component18 role={`status`} className={`text-caption text-pretty text-paper/90`}>{t.sent ? `Sent to your downloads` : `What you typed, in your handwriting`}</Component18></Component19><Component21 className={`flex flex-wrap gap-2`}><_Component8 onClick={t.send} disabled={t.empty} className={`pl-3.5`}><Component20 className={t.sent ? `icon-in flex shrink-0` : `flex shrink-0`} key={String(t.sent)}>{t.sent ? <_Component3 /> : t.shares ? <_Component7 /> : <_ />}</Component20>{t.shares ? `Share` : `Save picture`}</_Component8><_Component4 ref={o} onClick={s} aria-haspopup={`dialog`}>{`Style…`}</_Component4></Component21></Component22></Component23>;
}
function Fp({
  text: e,
  onText: t,
  input: n,
  picture: r,
  focusStyle: i
}) {
  let {
    state: a
  } = d();
  let {
    project: o
  } = a;
  let s = g();
  let [l, u] = (0, D.useState)();
  let f = C(o, a.alignment, a.font);
  let p = (0, D.useRef)(false);
  let m = async e => {
    if (!p.current) {
      p.current = true;
      try {
        E(await f.get(e), c(o.name, e), e);
        u({
          kind: e,
          of: o
        });
      } finally {
        p.current = false;
      }
    }
  };
  let h = e => l?.kind === e && l.of === o;
  const Component24 = `span`;
  const Component25 = `span`;
  const Component26 = `span`;
  const Component27 = `span`;
  const Component28 = `textarea`;
  const Component29 = `span`;
  const Component30 = `label`;
  const Component31 = `div`;
  const Component32 = `p`;
  const Component33 = `div`;
  return <Component33 className={`flex flex-col pb-1`}><Component30 className={`flex flex-col gap-2.5 pt-1 pb-3.5`}><Component27 className={`flex items-baseline justify-between gap-3 px-5 text-caption font-medium text-paper/90 lg:px-6`}>{`Try your font`}<Component26 aria-hidden={true} className={`font-normal`}><Component24 className={`pointer-fine:hidden`}>{`Tap`}</Component24><Component25 className={`hidden pointer-fine:inline`}>{`Click`}</Component25>{` to type your own`}</Component26></Component27><Component29 className={`scroll-edges block bg-paper/6 [--edge-size:1.25rem] [--surface:var(--strip-surface)]`}><Component28 value={e} onChange={e => t(e.target.value)} spellCheck={false} autoCapitalize={`none`} rows={3} className={`edge-scroller ruled block w-full resize-none bg-transparent px-5 py-1.5 text-[2.5rem] leading-[1.2] text-hand caret-paper -outline-offset-2 placeholder:text-paper/72 lg:px-6`} style={{
          fontFamily: s
        }} placeholder={`Type something`} /></Component29></Component30><Pp input={n} picture={r} focusStyle={i} /><Np /><Component31 className={`flex flex-col gap-2 px-5 lg:px-6`}><_Component9 kind={`otf`} buffer={f.otf} done={h(`otf`)} onDownload={() => void m(`otf`)} /><_Component9 kind={`woff2`} buffer={f.woff2} done={h(`woff2`)} onDownload={() => void m(`woff2`)} /></Component31><Component32 className={`hidden px-5 pt-2.5 text-caption text-pretty text-paper/90 pointer-fine:block lg:px-6`}>{`To install your font, open the OTF and choose Install.`}</Component32><Mp /></Component33>;
}
var Ip = 248;
var Lp = 200;
var Rp = 240;
var zp = 1 - Lp / Ip;
var Bp = 720;
var Vp = {
  type: `spring`,
  stiffness: 300,
  damping: 32
};
var Hp = 0.998;
var Up = e => e / 1000 * Hp / 0.0020000000000000018;
var Wp = (e, t, n) => Math.min(n, Math.max(t, e));
function Gp({
  paper: e,
  at: t,
  x: n,
  input: r,
  onPick: i
}) {
  let a = bf(n, e => 1 - zp * Math.min(1, Math.abs(e + t * Rp) / Rp));
  return <ep.button type={`button`} tabIndex={-1} onClick={i} style={{
    left: t * Rp,
    scale: a
  }} className={`absolute top-0 size-62 cursor-[inherit] rounded-[1.375rem] shadow-[0_16px_40px_rgb(4_5_40/0.4)]`}><_Component6 input={r} paper={e.id} pixels={Bp} className={`size-full rounded-[inherit] ${e.id === `carbon` ? `outline-1 -outline-offset-1 outline-paper/20` : ``}`} /></ep.button>;
}
function Kp({
  input: e,
  onPick: t
}) {
  let n = f.findIndex(t => t.id === e.style.paper);
  let r = f.length - 1;
  let i = Cf();
  let a = _f(-n * Rp);
  let o = (0, D.useRef)(undefined);
  let s = (0, D.useRef)(false);
  let c = (0, D.useRef)(0);
  let l = e => {
    o.current?.stop();
    let t = c.current;
    c.current = 0;
    o.current = $f(a, -e * Rp, i ? {
      duration: 0
    } : {
      ...Vp,
      velocity: t
    });
  };
  let u = (0, D.useEffectEvent)(l);
  (0, D.useEffect)(() => {
    u(n);
    return () => o.current?.stop();
  }, [n]);
  const Component34 = `div`;
  return <Component34 aria-hidden={true} onMouseDown={e => e.preventDefault()} className={`relative h-69 touch-pan-y`}><ep.div drag={`x`} style={{
      x: a
    }} dragConstraints={{
      left: -r * Rp,
      right: 0
    }} dragElastic={0.2} dragMomentum={false} onPointerDown={() => s.current = false} onDragStart={() => s.current = true} onDragEnd={(e, {
      velocity: i
    }) => {
      c.current = i.x;
      let o = Wp(Math.round(-(a.get() + Up(i.x)) / Rp), 0, r);
      if (o === n) {
        l(n);
      } else {
        t(f[o].id);
      }
    }} onPointerUp={() => s.current || l(n)} className={`absolute top-2 left-1/2 -ml-31 size-62 cursor-grab active:cursor-grabbing`}>{f.map((n, r) => <Gp paper={n} at={r} x={a} input={e} onPick={() => s.current || t(n.id)} key={n.id} />)}</ep.div></Component34>;
}
var qp = `text-caption font-medium text-paper/90`;
function Jp({
  paper: e
}) {
  const Component35 = `span`;
  return <Component35 className={`relative font-normal`}><_Component0 mode={`popLayout`} initial={false}><ep.span initial={{
        opacity: 0,
        y: 6
      }} animate={{
        opacity: 1,
        y: 0
      }} exit={{
        opacity: 0,
        y: -6
      }} transition={{
        type: `spring`,
        duration: 0.25,
        bounce: 0
      }} className={`inline-block`} key={e.id}>{e.name}</ep.span></_Component0></Component35>;
}
function Yp({
  picked: e,
  onPick: t
}) {
  let n = (0, D.useId)();
  const Component36 = `span`;
  const Component37 = `div`;
  const Component38 = `input`;
  const Component39 = `span`;
  const Component40 = `span`;
  const Component41 = `span`;
  const Component42 = `span`;
  const Component43 = `label`;
  const Component44 = `div`;
  const Component45 = `div`;
  return <Component45 role={`radiogroup`} aria-labelledby={n} className={`flex flex-col gap-2 px-5 pb-4.5 lg:px-6`}><Component37 className={`flex items-baseline justify-between ${qp}`}><Component36 id={n}>{`Colour`}</Component36><Jp paper={u(e)} /></Component37><Component44 className={`flex justify-between`}>{f.map(n => <Component43 className={`pressable relative grid size-11 cursor-pointer place-items-center rounded-full has-focus-visible:outline-2 has-focus-visible:outline-offset-4 has-focus-visible:outline-(--focus)`} key={n.id}><Component38 type={`radio`} name={`picture-paper`} value={n.id} checked={n.id === e} onChange={() => t(n.id)} className={`peer sr-only`} /><Component39 className={`sr-only`}>{n.name}</Component39><Component41 aria-hidden={true} className={`grid size-10 place-items-center rounded-full ${n.id === `carbon` ? `inset-ring-[1.5px] inset-ring-paper/45` : ``}`} style={{
          backgroundColor: n.ground
        }}><Component40 className={`size-3.5 rounded-full`} style={{
            backgroundColor: n.hand
          }} /></Component41><Component42 aria-hidden={true} className={`absolute -inset-0.5 scale-90 rounded-full border-2 border-paper opacity-0 transition-[opacity,scale] duration-200 ease-out peer-checked:scale-100 peer-checked:opacity-100 motion-reduce:transition-none`} /></Component43>)}</Component44></Component45>;
}
function Xp({
  picked: e,
  onPick: t
}) {
  let n = (0, D.useId)();
  let r = s.findIndex(t => t.id === e);
  const Component46 = `span`;
  const Component47 = `span`;
  const Component48 = `input`;
  const Component49 = `label`;
  const Component50 = `div`;
  const Component51 = `div`;
  return <Component51 role={`radiogroup`} aria-labelledby={n} className={`flex flex-col gap-2.5 px-5 pb-5.5 lg:px-6`}><Component46 id={n} className={qp}>{`Paper`}</Component46><Component50 className={`relative grid h-11 grid-cols-4 rounded-full bg-paper/14 p-1`}><Component47 aria-hidden={true} className={`absolute inset-y-1 left-1 w-[calc((100%-0.5rem)/4)] rounded-full bg-paper transition-transform duration-200 ease-out motion-reduce:transition-none`} style={{
        transform: `translateX(${r * 100}%)`
      }} />{s.map(n => <Component49 className={`pressable relative grid cursor-pointer place-items-center rounded-full text-[0.9375rem] leading-5 font-medium text-paper transition-colors duration-200 has-checked:font-semibold has-checked:text-carbon has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-(--focus)`} key={n.id}><Component48 type={`radio`} name={`picture-ruling`} value={n.id} checked={n.id === e} onChange={() => t(n.id)} className={`sr-only`} />{n.name}</Component49>)}</Component50></Component51>;
}
function Zp({
  picture: e
}) {
  let {
    shares: t,
    sent: n,
    empty: r,
    send: i
  } = e;
  const Component52 = `span`;
  const Component53 = `span`;
  return <_Component1 onClick={i} disabled={r} className={`w-full disabled:opacity-40`}><Component52 className={n ? `icon-in flex shrink-0` : `flex shrink-0`} key={String(n)}>{n ? <_Component3 /> : t ? <_Component7 /> : <_ />}</Component52><Component53 role={`status`}>{n ? `Sent to your downloads` : t ? `Share picture` : `Save picture`}</Component53></_Component1>;
}
function Qp({
  input: e,
  picture: t
}) {
  let {
    actions: n
  } = d();
  let r = (0, D.useRef)(null);
  let {
    paper: i,
    ruling: a
  } = e.style;
  (0, D.useEffect)(() => {
    r.current?.querySelector(`input[name="picture-paper"]:checked`)?.focus({
      preventScroll: true
    });
  }, []);
  const Component54 = `div`;
  const Component55 = `div`;
  return <Component55 ref={r} className={`flex flex-col pb-1`}><Kp input={e} onPick={e => n.stylePicture({
      paper: e
    })} /><Yp picked={i} onPick={e => n.stylePicture({
      paper: e
    })} /><Xp picked={a} onPick={e => n.stylePicture({
      ruling: e
    })} /><Component54 className={`px-5 lg:px-6`}><Zp picture={t} /></Component54></Component55>;
}
var $p = 250;
var em = () => typeof navigator.canShare == `function` && matchMedia(`(pointer: coarse)`).matches && navigator.canShare({
  files: [new File([``], `picture.png`, {
    type: `image/png`
  })]
});
function tm(e) {
  let [t] = (0, D.useState)(em);
  let [n, r] = (0, D.useState)();
  let [i, a] = (0, D.useState)();
  let o = h(e.name);
  (0, D.useEffect)(() => {
    let t = true;
    let n = setTimeout(() => {
      xp(e, o).then(n => t && r({
        of: e,
        file: n
      }));
    }, $p);
    return () => {
      t = false;
      clearTimeout(n);
    };
  }, [e, o]);
  let s = async () => {
    let r = n?.of === e ? n.file : await xp(e, o);
    if (t) {
      try {
        await navigator.share({
          files: [r]
        });
        return;
      } catch (e) {
        if (e instanceof DOMException && e.name === `AbortError`) {
          return;
        }
      }
    }
    w(r, r.name);
    a(e);
  };
  return {
    shares: t,
    send: () => void s(),
    sent: i === e,
    empty: !e.text.trim()
  };
}
var nm = {
  type: `spring`,
  duration: 0.4,
  bounce: 0
};
var rm = {
  enter: e => ({
    x: `${e * 100}%`,
    opacity: 0
  }),
  rest: {
    x: `0%`,
    opacity: 1
  },
  exit: e => ({
    x: `${e * -100}%`,
    opacity: 0
  })
};
var im = {
  enter: {
    opacity: 0
  },
  rest: {
    opacity: 1
  },
  exit: {
    opacity: 0
  }
};
function am(e, t) {
  let n = (0, D.useRef)(null);
  let r = (0, D.useRef)(null);
  let i = (0, D.useRef)(undefined);
  let a = (0, D.useRef)(undefined);
  let o = (0, D.useRef)(e);
  (0, D.useEffect)(() => {
    let e = new ResizeObserver(([e]) => {
      let t = e.borderBoxSize[0].blockSize;
      if (t > 0 && !a.current) {
        i.current = t;
      }
    });
    e.observe(r.current);
    return () => e.disconnect();
  }, []);
  (0, D.useLayoutEffect)(() => {
    if (o.current === e) {
      return;
    }
    o.current = e;
    let s = n.current;
    let c = a.current ? s.offsetHeight : i.current;
    let l = r.current.offsetHeight;
    a.current?.stop();
    a.current = undefined;
    i.current = l;
    if (t || c === undefined || c === l) {
      s.style.height = ``;
      return;
    }
    s.style.height = `${c}px`;
    let u = $f(s, {
      height: [c, l]
    }, nm);
    a.current = u;
    u.then(() => {
      if (a.current === u) {
        a.current = undefined;
        s.style.height = ``;
      }
    });
  }, [e, t]);
  return {
    box: n,
    content: r
  };
}
function _Component10({
  direction: e,
  children: t
}) {
  let n = Qu();
  let r = Cf();
  return <ep.div custom={e} variants={r ? im : rm} initial={`enter`} animate={`rest`} exit={`exit`} transition={nm} inert={!n}>{t}</ep.div>;
}
var sm = `hamburgefonstiv the quick brown fox jumps over`;
function cm({
  view: e
}) {
  let [t, n] = (0, D.useState)(sm);
  let r = Op(t);
  let i = tm(r);
  let {
    box: a,
    content: o
  } = am(e, Cf());
  let s = e === `picture` ? 1 : -1;
  let [c, l] = (0, D.useState)(false);
  if (e === `picture` && !c) {
    l(true);
  }
  const Component56 = `div`;
  const Component57 = `div`;
  return <_Component11 reducedMotion={`user`}><Component57 ref={a} className={`relative overflow-clip`}><Component56 ref={o}><_Component0 mode={`popLayout`} initial={false} custom={s}><_Component10 direction={s} key={e}>{e === `picture` ? <Qp input={r} picture={i} /> : <Fp text={t} onText={n} input={r} picture={i} focusStyle={c} />}</_Component10></_Component0></Component56></Component57></_Component11>;
}
export { cm as default };
