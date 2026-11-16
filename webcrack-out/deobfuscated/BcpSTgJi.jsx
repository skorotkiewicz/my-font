const __vite__mapDeps = (i, m = __vite__mapDeps, d = m.f ||= ["_next/static/chunks/CEjkeowH.js", "_next/static/chunks/CcyWYbDU.js", "_next/static/chunks/B0PXqnjO.js", "_next/static/chunks/rX6k7kUM.js", "_next/static/chunks/Dmzpm_-y.js"]) => i.map(i => d[i]);
import { r as e } from "./CcyWYbDU.js";
import { i as t, r as n } from "./B0PXqnjO.js";
import { B as r } from "./ds95237R.js";
var i = e(t(), 1);
var a = e => e.dataTransfer?.types.includes(`Files`) ?? false;
function o(e) {
  let [t, n] = (0, i.useState)(false);
  let r = (0, i.useEffectEvent)(e);
  (0, i.useEffect)(() => {
    let e = 0;
    let t = t => {
      if (a(t)) {
        t.preventDefault();
        if (e++ === 0) {
          n(true);
        }
      }
    };
    let i = t => {
      if (a(t) && --e <= 0) {
        e = 0;
        n(false);
      }
    };
    let o = e => {
      if (a(e)) {
        e.preventDefault();
        if (e.dataTransfer) {
          e.dataTransfer.dropEffect = `copy`;
        }
      }
    };
    let s = t => {
      if (!a(t)) {
        return;
      }
      t.preventDefault();
      e = 0;
      n(false);
      let i = t.dataTransfer?.files[0];
      if (i) {
        r(i);
      }
    };
    window.addEventListener(`dragenter`, t);
    window.addEventListener(`dragleave`, i);
    window.addEventListener(`dragover`, o);
    window.addEventListener(`drop`, s);
    return () => {
      window.removeEventListener(`dragenter`, t);
      window.removeEventListener(`dragleave`, i);
      window.removeEventListener(`dragover`, o);
      window.removeEventListener(`drop`, s);
    };
  }, []);
  return t;
}
var s = n();
var c = `size-5.5 shrink-0 lg:size-5`;
var l = {
  viewBox: `0 0 24 24`,
  fill: `none`,
  stroke: `currentColor`,
  strokeWidth: 1.5,
  strokeLinecap: `round`,
  strokeLinejoin: `round`,
  "aria-hidden": true
};
var u = {
  viewBox: `0 0 24 24`,
  fill: `currentColor`,
  "aria-hidden": true
};
const Component = `path`;
const Component2 = `svg`;
var d = ({
  className: e = c
}) => <Component2 {...l} className={e}><Component d={`M15 20 8.41 13.41C7.63 12.63 7.63 11.37 8.41 10.59L15 4`} /></Component2>;
const Component3 = `path`;
const Component4 = `svg`;
var f = ({
  className: e = c
}) => <Component4 {...l} className={e}><Component3 d={`M9 4 15.59 10.59C16.37 11.37 16.37 12.63 15.59 13.41L9 20`} /></Component4>;
const Component5 = `path`;
const Component6 = `svg`;
var p = ({
  className: e = `size-4.5 shrink-0`
}) => <Component6 {...l} strokeWidth={1.75} className={e}><Component5 d={`M8 10 11.29 13.29C11.68 13.68 12.32 13.68 12.71 13.29L16 10`} /></Component6>;
const Component7 = `path`;
const Component8 = `path`;
const Component9 = `svg`;
var m = ({
  className: e = c
}) => <Component9 {...l} className={e}><Component7 d={`M6.75 3.25 3.75 6.25 6.75 9.25`} /><Component8 d={`M4.5 6.25H14.25C17.7 6.25 20.5 9.05 20.5 12.5 20.5 15.95 17.7 18.75 14.25 18.75H5.75`} /></Component9>;
const Component10 = `path`;
const Component11 = `path`;
const Component12 = `path`;
const Component13 = `svg`;
var h = ({
  className: e = c
}) => <Component13 {...l} className={e}><Component10 d={`M4.75 6.5 5.66 19.39C5.73 20.44 6.6 21.25 7.65 21.25H16.35C17.4 21.25 18.27 20.44 18.34 19.39L19.25 6.5`} /><Component11 d={`M3.25 5.75H20.75`} /><Component12 d={`M8.52 5.58C8.73 3.85 10.21 2.5 12 2.5 13.79 2.5 15.27 3.85 15.48 5.58`} /></Component13>;
const Component14 = `path`;
const Component15 = `svg`;
var g = ({
  className: e = c
}) => <Component15 {...l} className={e}><Component14 d={`M20.25 14.75V18.25C20.25 19.35 19.35 20.25 18.25 20.25H5.75C4.65 20.25 3.75 19.35 3.75 18.25V14.75M12 15V3.75M12 15 8.5 11.5M12 15 15.5 11.5`} /></Component15>;
const Component16 = `path`;
const Component17 = `path`;
const Component18 = `path`;
const Component19 = `svg`;
var _ = ({
  className: e = c
}) => <Component19 {...l} className={e}><Component16 d={`M7.75 6.25 12 1.75 16.25 6.25`} /><Component17 d={`M12 2.75V13.25`} /><Component18 d={`M7.75 9.75H6.75C5.65 9.75 4.75 10.65 4.75 11.75V18.25C4.75 19.35 5.65 20.25 6.75 20.25H17.25C18.35 20.25 19.25 19.35 19.25 18.25V11.75C19.25 10.65 18.35 9.75 17.25 9.75H16.25`} /></Component19>;
const Component20 = `path`;
const Component21 = `svg`;
var v = ({
  className: e = c
}) => <Component21 {...l} className={e}><Component20 d={`M4.75 12.78 10 19.25 19.25 4.75`} /></Component21>;
const Component22 = `path`;
const Component23 = `path`;
const Component24 = `svg`;
var _Component6 = ({
  className: e = c
}) => <Component24 {...l} className={e}><Component22 d={`M4.75 3.75H8.93C9.6 3.75 10.22 4.08 10.59 4.64L11.7 6.3C11.89 6.58 12.2 6.75 12.54 6.75H18.25C19.35 6.75 20.25 7.65 20.25 8.75V10.75H20.66C21.33 10.75 21.81 11.39 21.62 12.03L19.92 17.81C19.67 18.67 18.89 19.25 18 19.25H4.32C3.45 19.25 2.75 18.55 2.75 17.68V5.75C2.75 4.65 3.65 3.75 4.75 3.75Z`} /><Component23 d={`M20.25 10.75H9.5C8.61 10.75 7.83 11.33 7.58 12.19L5.83 18.12C5.63 18.79 5.02 19.25 4.32 19.25`} /></Component24>;
const Component25 = `path`;
const Component26 = `path`;
const Component27 = `svg`;
var b = ({
  className: e = c
}) => <Component27 {...l} className={e}><Component25 d={`M11.92 2.75H6.75C5.65 2.75 4.75 3.65 4.75 4.75V19.25C4.75 20.35 5.65 21.25 6.75 21.25H17.25C18.35 21.25 19.25 20.35 19.25 19.25V10.08C19.25 9.55 19.04 9.04 18.66 8.66L13.34 3.34C12.96 2.96 12.45 2.75 11.92 2.75Z`} /><Component26 d={`M12.75 3.25V7.25C12.75 8.35 13.65 9.25 14.75 9.25H18.75`} /></Component27>;
const Component28 = `path`;
const Component29 = `svg`;
var x = ({
  className: e = c
}) => <Component29 {...l} className={e}><Component28 d={`M9.25 11.5 11 13.25 14.75 9.5M20.25 11.91V6.94C20.25 6.08 19.7 5.32 18.88 5.04L12.63 2.96C12.22 2.82 11.78 2.82 11.37 2.96L5.12 5.04C4.3 5.32 3.75 6.08 3.75 6.94V11.91C3.75 16.88 8 19.25 12 21.41 16 19.25 20.25 16.88 20.25 11.91Z`} /></Component29>;
const Component30 = `path`;
const Component31 = `svg`;
var S = ({
  className: e = c
}) => <Component31 {...u} className={e}><Component30 fillRule={`evenodd`} d={`M12 2C6.48 2 2 6.48 2 12S6.48 22 12 22 22 17.52 22 12 17.52 2 12 2ZM15.58 9.97C15.84 9.65 15.8 9.18 15.47 8.92 15.15 8.66 14.68 8.7 14.42 9.03L10.44 13.88 9.03 12.47C8.74 12.18 8.26 12.18 7.97 12.47 7.68 12.76 7.68 13.24 7.97 13.53L9.97 15.53C10.12 15.68 10.33 15.76 10.54 15.75 10.75 15.74 10.95 15.64 11.08 15.47L15.58 9.97Z`} /></Component31>;
const Component32 = `path`;
const Component33 = `svg`;
var C = ({
  className: e = c
}) => <Component33 {...u} className={e}><Component32 fillRule={`evenodd`} d={`M12 2C17.52 2 22 6.48 22 12S17.52 22 12 22 2 17.52 2 12 6.48 2 12 2ZM12 15C11.45 15 11 15.45 11 16S11.45 17 12 17 13 16.55 13 16 12.55 15 12 15ZM12 7C11.59 7 11.25 7.34 11.25 7.75V12.25C11.25 12.66 11.59 13 12 13S12.75 12.66 12.75 12.25V7.75C12.75 7.34 12.41 7 12 7Z`} /></Component33>;
var w = (e, t) => Array.from({
  length: t.charCodeAt(0) - e.charCodeAt(0) + 1
}, (t, n) => e.charCodeAt(0) + n);
var T = `.,!?'"-:;()&@#$%*/+=_<>[]{}\\|^\`~`.split(``).map(e => e.charCodeAt(0));
var E = [{
  id: `lowercase`,
  label: `Lowercase`,
  required: true,
  codepoints: w(`a`, `z`)
}, {
  id: `uppercase`,
  label: `Uppercase`,
  required: false,
  codepoints: w(`A`, `Z`)
}, {
  id: `digits`,
  label: `Numbers`,
  required: false,
  codepoints: w(`0`, `9`)
}, {
  id: `punctuation`,
  label: `Punctuation`,
  required: false,
  codepoints: T
}];
var D = E.flatMap(e => e.codepoints);
E.filter(e => e.required).flatMap(e => e.codepoints);
var ee = e => E.find(t => t.codepoints.includes(e));
var O = {
  ".": `a full stop`,
  ",": `a comma`,
  "!": `an exclamation mark`,
  "?": `a question mark`,
  "'": `an apostrophe`,
  "\"": `a quotation mark`,
  "-": `a hyphen`,
  ":": `a colon`,
  ";": `a semicolon`,
  "(": `an opening bracket`,
  ")": `a closing bracket`,
  "&": `an ampersand`,
  "@": `an at sign`,
  "#": `a hash`,
  $: `a dollar sign`,
  "%": `a percent sign`,
  "*": `an asterisk`,
  "/": `a slash`,
  "+": `a plus sign`,
  "=": `an equals sign`,
  _: `an underscore`,
  "<": `a less-than sign`,
  ">": `a greater-than sign`,
  "[": `an opening square bracket`,
  "]": `a closing square bracket`,
  "{": `an opening brace`,
  "}": `a closing brace`,
  "\\": `a backslash`,
  "|": `a vertical bar`,
  "^": `a caret`,
  "`": `a backtick`,
  "~": `a tilde`
};
var k = e => String.fromCharCode(e);
function A(e) {
  let t = k(e);
  if (t >= `a` && t <= `z`) {
    return `a small ${t}`;
  } else if (t >= `A` && t <= `Z`) {
    return `a capital ${t}`;
  } else if (t >= `0` && t <= `9`) {
    return `the number ${t}`;
  } else {
    return O[t] ?? t;
  }
}
function j(e) {
  let t = A(e).replace(/^(a|an|the) /, ``);
  return t[0].toUpperCase() + t.slice(1);
}
function te(e) {
  let t = 0;
  for (let n = 0, r = e.length - 1; n < e.length; r = n++) {
    t += (e[r][0] - e[n][0]) * (e[r][1] + e[n][1]);
  }
  return t / 2;
}
function M(e) {
  let [t, n, r, i] = [Infinity, Infinity, -Infinity, -Infinity];
  for (let a of e) {
    for (let [e, o] of a) {
      if (e < t) {
        t = e;
      }
      if (o < n) {
        n = o;
      }
      if (e > r) {
        r = e;
      }
      if (o > i) {
        i = o;
      }
    }
  }
  if (t === Infinity) {
    return null;
  } else {
    return {
      xMin: t,
      yMin: n,
      xMax: r,
      yMax: i
    };
  }
}
var N = (e, t, n) => Math.min(n, Math.max(t, e));
function ne(e) {
  let t = e.toSorted((e, t) => e - t);
  let n = t.length >> 1;
  if (t.length % 2) {
    return t[n];
  } else {
    return (t[n - 1] + t[n]) / 2;
  }
}
var {
  PI: re
} = Math;
var P = re + 0.0001;
var ie = 0.5;
var ae = [1, 1];
function oe(e, t, n, r = e => e) {
  return e * r(0.5 - t * (0.5 - n));
}
var {
  min: se
} = Math;
function ce(e, t, n) {
  let r = se(1, t / n);
  return se(1, e + (se(1, 1 - r) - e) * (r * 0.275));
}
function le(e) {
  return [-e[0], -e[1]];
}
function F(e, t) {
  return [e[0] + t[0], e[1] + t[1]];
}
function ue(e, t, n) {
  e[0] = t[0] + n[0];
  e[1] = t[1] + n[1];
  return e;
}
function I(e, t) {
  return [e[0] - t[0], e[1] - t[1]];
}
function de(e, t, n) {
  e[0] = t[0] - n[0];
  e[1] = t[1] - n[1];
  return e;
}
function L(e, t) {
  return [e[0] * t, e[1] * t];
}
function fe(e, t, n) {
  e[0] = t[0] * n;
  e[1] = t[1] * n;
  return e;
}
function pe(e, t) {
  return [e[0] / t, e[1] / t];
}
function me(e) {
  return [e[1], -e[0]];
}
function he(e, t) {
  let n = t[0];
  e[0] = t[1];
  e[1] = -n;
  return e;
}
function ge(e, t) {
  return e[0] * t[0] + e[1] * t[1];
}
function _e(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}
function ve(e) {
  return Math.hypot(e[0], e[1]);
}
function ye(e, t) {
  let n = e[0] - t[0];
  let r = e[1] - t[1];
  return n * n + r * r;
}
function be(e) {
  return pe(e, ve(e));
}
function xe(e, t) {
  return Math.hypot(e[1] - t[1], e[0] - t[0]);
}
function Se(e, t, n) {
  let r = Math.sin(n);
  let i = Math.cos(n);
  let a = e[0] - t[0];
  let o = e[1] - t[1];
  let s = a * i - o * r;
  let c = a * r + o * i;
  return [s + t[0], c + t[1]];
}
function Ce(e, t, n, r) {
  let i = Math.sin(r);
  let a = Math.cos(r);
  let o = t[0] - n[0];
  let s = t[1] - n[1];
  let c = o * a - s * i;
  let l = o * i + s * a;
  e[0] = c + n[0];
  e[1] = l + n[1];
  return e;
}
function we(e, t, n) {
  return F(e, L(I(t, e), n));
}
function Te(e, t, n, r) {
  let i = n[0] - t[0];
  let a = n[1] - t[1];
  e[0] = t[0] + i * r;
  e[1] = t[1] + a * r;
  return e;
}
function Ee(e, t, n) {
  return F(e, L(t, n));
}
var R = [0, 0];
var z = [0, 0];
var B = [0, 0];
function De(e, t) {
  let n = Ee(e, be(me(I(e, F(e, [1, 1])))), -t);
  let r = [];
  let i = 1 / 13;
  for (let t = i; t <= 1; t += i) {
    r.push(Se(n, e, P * 2 * t));
  }
  return r;
}
function Oe(e, t, n) {
  let r = [];
  let i = 1 / n;
  for (let n = i; n <= 1; n += i) {
    r.push(Se(t, e, P * n));
  }
  return r;
}
function ke(e, t, n) {
  let r = I(t, n);
  let i = L(r, 0.5);
  let a = L(r, 0.51);
  return [I(e, i), I(e, a), F(e, a), F(e, i)];
}
function Ae(e, t, n, r) {
  let i = [];
  let a = Ee(e, t, n);
  let o = 1 / r;
  for (let t = o; t < 1; t += o) {
    i.push(Se(a, e, P * 3 * t));
  }
  return i;
}
function je(e, t, n) {
  return [F(e, L(t, n)), F(e, L(t, n * 0.99)), I(e, L(t, n * 0.99)), I(e, L(t, n))];
}
function Me(e, t, n) {
  if (e === false || e === undefined) {
    return 0;
  } else if (e === true) {
    return Math.max(t, n);
  } else {
    return e;
  }
}
function Ne(e, t, n) {
  return e.slice(0, 10).reduce((e, r) => {
    let i = r.pressure;
    if (t) {
      i = ce(e, r.distance, n);
    }
    return (e + i) / 2;
  }, e[0].pressure);
}
function Pe(e, t = {}) {
  let {
    size: n = 16,
    smoothing: r = 0.5,
    thinning: i = 0.5,
    simulatePressure: a = true,
    easing: o = e => e,
    start: s = {},
    end: c = {},
    last: l = false
  } = t;
  let {
    cap: u = true,
    easing: d = e => e * (2 - e)
  } = s;
  let {
    cap: f = true,
    easing: p = e => --e * e * e + 1
  } = c;
  if (e.length === 0 || n <= 0) {
    return [];
  }
  let m = e[e.length - 1].runningLength;
  let h = Me(s.taper, n, m);
  let g = Me(c.taper, n, m);
  let _ = (n * r) ** 2;
  let v = [];
  let y = [];
  let b = Ne(e, a, n);
  let x = oe(n, i, e[e.length - 1].pressure, o);
  let S;
  let C = e[0].vector;
  let w = e[0].point;
  let T = w;
  let E = w;
  let D = T;
  let ee = false;
  for (let t = 0; t < e.length; t++) {
    let {
      pressure: r
    } = e[t];
    let {
      point: s,
      vector: c,
      distance: l,
      runningLength: u
    } = e[t];
    let f = t === e.length - 1;
    if (!f && m - u < 3) {
      continue;
    }
    if (i) {
      if (a) {
        r = ce(b, l, n);
      }
      x = oe(n, i, r, o);
    } else {
      x = n / 2;
    }
    if (S === undefined) {
      S = x;
    }
    let O = u < h ? d(u / h) : 1;
    let k = m - u < g ? p((m - u) / g) : 1;
    x = Math.max(0.01, x * Math.min(O, k));
    let A = (f ? e[t] : e[t + 1]).vector;
    let j = f ? 1 : ge(c, A);
    let te = ge(c, C) < 0 && !ee;
    let M = j !== null && j < 0;
    if (te || M) {
      he(R, C);
      fe(R, R, x);
      for (let e = 0; e <= 1; e += 0.07692307692307693) {
        de(z, s, R);
        Ce(z, z, s, P * e);
        E = [z[0], z[1]];
        v.push(E);
        ue(B, s, R);
        Ce(B, B, s, P * -e);
        D = [B[0], B[1]];
        y.push(D);
      }
      w = E;
      T = D;
      if (M) {
        ee = true;
      }
    } else {
      ee = false;
      if (f) {
        he(R, c);
        fe(R, R, x);
        v.push(I(s, R));
        y.push(F(s, R));
      } else {
        Te(R, A, c, j);
        he(R, R);
        fe(R, R, x);
        de(z, s, R);
        E = [z[0], z[1]];
        if (t <= 1 || ye(w, E) > _) {
          v.push(E);
          w = E;
        }
        ue(B, s, R);
        D = [B[0], B[1]];
        if (t <= 1 || ye(T, D) > _) {
          y.push(D);
          T = D;
        }
        b = r;
        C = c;
      }
    }
  }
  let O = [e[0].point[0], e[0].point[1]];
  let k = e.length > 1 ? [e[e.length - 1].point[0], e[e.length - 1].point[1]] : F(e[0].point, [1, 1]);
  let A = [];
  let j = [];
  if (e.length === 1) {
    if (!h && !g || l) {
      return De(O, S || x);
    }
  } else {
    if (!h && (!g || e.length !== 1)) {
      if (u) {
        A.push(...Oe(O, y[0], 13));
      } else {
        A.push(...ke(O, v[0], y[0]));
      }
    }
    let t = me(le(e[e.length - 1].vector));
    if (g || h && e.length === 1) {
      j.push(k);
    } else if (f) {
      j.push(...Ae(k, t, x, 29));
    } else {
      j.push(...je(k, t, x));
    }
  }
  return v.concat(j, y.reverse(), A);
}
var Fe = [0, 0];
function Ie(e) {
  return e != null && e >= 0;
}
function Le(e, t = {}) {
  let {
    streamline: n = 0.5,
    size: r = 16,
    last: i = false
  } = t;
  if (e.length === 0) {
    return [];
  }
  let a = 0.15 + (1 - n) * 0.85;
  let o = Array.isArray(e[0]) ? e : e.map(({
    x: e,
    y: t,
    pressure: n = ie
  }) => [e, t, n]);
  if (o.length === 2) {
    let e = o[1];
    o = o.slice(0, -1);
    for (let t = 1; t < 5; t++) {
      o.push(we(o[0], e, t / 4));
    }
  }
  if (o.length === 1) {
    o = [...o, [...F(o[0], ae), ...o[0].slice(2)]];
  }
  let s = [{
    point: [o[0][0], o[0][1]],
    pressure: Ie(o[0][2]) ? o[0][2] : 0.25,
    vector: [...ae],
    distance: 0,
    runningLength: 0
  }];
  let c = false;
  let l = 0;
  let u = s[0];
  let d = o.length - 1;
  for (let e = 1; e < o.length; e++) {
    let t = i && e === d ? [o[e][0], o[e][1]] : we(u.point, o[e], a);
    if (_e(u.point, t)) {
      continue;
    }
    let n = xe(t, u.point);
    l += n;
    if (e < d && !c) {
      if (l < r) {
        continue;
      }
      c = true;
    }
    de(Fe, u.point, t);
    u = {
      point: t,
      pressure: Ie(o[e][2]) ? o[e][2] : ie,
      vector: be(Fe),
      distance: n,
      runningLength: l
    };
    s.push(u);
  }
  s[0].vector = s[1]?.vector || [0, 0];
  return s;
}
function Re(e, t = {}) {
  return Pe(Le(e, t), t);
}
var ze = 40;
var Be = e => Math.sin(e * Math.PI / 2);
var Ve = {
  start: {
    cap: true,
    taper: 0
  },
  end: {
    cap: true,
    taper: 0
  }
};
var He = {
  ...Ve,
  size: ze,
  thinning: 0.25,
  smoothing: 0.62,
  streamline: 0.64,
  easing: Be,
  simulatePressure: true
};
var Ue = {
  ...Ve,
  size: ze * 1.2,
  thinning: 0.4,
  smoothing: 0.62,
  streamline: 0.62,
  easing: e => e * 0.65 + Be(e) * 0.35,
  simulatePressure: false
};
var We = 1.25;
var Ge = e => e === `pen` ? Ue : He;
var Ke = {
  real: 0.68,
  simulated: 0.76
};
var qe = e => e === `pen` ? Ke.real : Ke.simulated;
var Je = 0.275;
var Ye = 250;
var Xe = 0.2;
var V = (e, t) => Math.hypot(e[0] - t[0], e[1] - t[1]);
function Ze(e, t, n) {
  let [r, i, a, o] = [t[0] - e[0], t[1] - e[1], n[0] - t[0], n[1] - t[1]];
  let s = Math.hypot(r, i) * Math.hypot(a, o);
  if (s) {
    return (r * a + i * o) / s;
  } else {
    return 1;
  }
}
function Qe(e, t) {
  let n = t / 3;
  let r = e.length;
  let i = 1;
  let a = e[0][2];
  while (i < r - 1 && V(e[i], e[0]) <= n) {
    a = Math.max(a, e[i++][2]);
  }
  let o = r - 2;
  while (o >= i && V(e[o], e[r - 1]) <= n) {
    o--;
  }
  let s = [[e[0][0], e[0][1], a], ...e.slice(i, o + 1)];
  if (r > 1) {
    s.push(e[r - 1]);
  }
  return {
    pts: s,
    trimmedEnd: o < r - 2
  };
}
function $e(e, t, n) {
  let r = t.size;
  let i = e.length;
  let a = n => t.simulatePressure ? 0.5 : Math.min(1, e[n][2] * We);
  let o = 0;
  for (let t = 1; t < i; t++) {
    o += V(e[t - 1], e[t]);
  }
  if (o < r) {
    return e.map(() => n);
  }
  let s = (n, i) => {
    let o = Math.min(1, V(e[i - 1], e[i]) / r);
    let s = t.simulatePressure ? 1 - o : a(i);
    return Math.min(1, n + (s - n) * o * Je);
  };
  let c = a(0);
  for (let t = 1, n = 0; t < i && n < r * 5; t++) {
    n += V(e[t - 1], e[t]);
    c = (c + s(c, t)) / 2;
  }
  let l = [c];
  for (let e = 1; e < i; e++) {
    l.push(c = s(c, e));
  }
  let [u, d] = [0, 0];
  for (let t = 1; t < i && d < r * 5; t++) {
    let n = V(e[t - 1], e[t]);
    u += l[t] * n;
    d += n;
  }
  let f = u / d;
  return l.map((t, r) => {
    if (r) {
      f += (t - f) * (1 - Math.exp(-V(e[r - 1], e[r]) / Ye));
    }
    return Math.min(1, Math.max(0, n + t - f));
  });
}
function et(e, t) {
  let n = e.length;
  let r = [0];
  for (let t = 1; t < n; t++) {
    r.push(r[t - 1] + V(e[t - 1], e[t]));
  }
  let i = [];
  let a = -1;
  let o = Xe;
  for (let s = 1, c = 0, l = 1; s < n - 1; s++) {
    while (c + 1 < s && r[s] - r[c + 1] >= t) {
      c++;
    }
    while (l < n - 1 && r[l] - r[s] < t) {
      l++;
    }
    if (r[s] - r[c] < t) {
      continue;
    }
    if (r[l] - r[s] < t) {
      break;
    }
    let u = Ze(e[c], e[s], e[l]);
    if (u < o) {
      [a, o] = [s, u];
    }
    if (a >= 0 && r[s] - r[a] >= t) {
      i.push(a);
      [a, o] = [-1, Xe];
    }
  }
  if (a >= 0) {
    i.push(a);
  }
  return i;
}
function tt(e, t, n = true) {
  if (!e.length) {
    return [];
  }
  let r = Ge(t);
  let i = r.size;
  let {
    pts: a,
    trimmedEnd: o
  } = Qe(e, i);
  let s = $e(a, r, qe(t));
  let c = a.length;
  let l = n || !r.simulatePressure || o || c < 2 || V(a[c - 2], a[c - 1]) < i;
  let u = [0, ...et(a, i / 2), c - 1];
  let d = [];
  for (let e = 1; e < u.length; e++) {
    let t = [];
    for (let n = u[e - 1]; n <= u[e]; n++) {
      t.push([a[n][0], a[n][1], s[n]]);
    }
    let n = Re(t, {
      ...r,
      simulatePressure: false,
      last: e < u.length - 1 || l
    });
    if (n.length >= 3) {
      d.push(n);
    }
  }
  return d;
}
var nt = new WeakMap();
function rt(e) {
  let t = nt.get(e);
  if (!t) {
    nt.set(e, t = tt(e.pts, e.input));
  }
  return t;
}
var it = -200;
var H = 1200;
var at = H * 2;
var ot = e => 920 - e;
var U = e => 920 - e;
var st = [{
  id: `cap`,
  label: `Cap height`,
  y: U(700)
}, {
  id: `x`,
  label: `x-height`,
  y: U(500)
}, {
  id: `baseline`,
  label: `Baseline`,
  y: U(0)
}, {
  id: `descender`,
  label: `Descender`,
  y: U(it)
}];
var ct = {
  dx: 0,
  dy: 0,
  scale: 1
};
var lt = () => {
  if (typeof crypto.randomUUID == `function`) {
    return crypto.randomUUID();
  }
  let e = crypto.getRandomValues(new Uint8Array(16));
  e[6] = e[6] & 15 | 64;
  e[8] = e[8] & 63 | 128;
  let t = Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``);
  return `${t.slice(0, 8)}-${t.slice(8, 12)}-${t.slice(12, 16)}-${t.slice(16, 20)}-${t.slice(20)}`;
};
var ut = `spike-0000`;
var dt = e => e.id && e.id !== ut ? e : {
  ...e,
  id: lt()
};
function ft(e) {
  let t = e;
  if (t?.schemaVersion !== 1) {
    throw Error(`Unknown project schema: ${t?.schemaVersion}`);
  }
  return {
    ...t,
    settings: {
      ...t.settings,
      tracking: t.settings?.tracking ?? 0,
      tidy: t.settings?.tidy ?? true
    }
  };
}
var pt = e => e?.drawings[0]?.strokes.length ? e.drawings[0] : undefined;
var mt = e => Object.values(e.glyphs).flatMap(e => {
  let t = pt(e);
  if (t) {
    return [{
      cp: e.cp,
      drawing: t
    }];
  } else {
    return [];
  }
});
var W = {
  scale: 1,
  dy: 0
};
var ht = e => Math.round(e * 100) / 100;
var gt = ({
  scale: e,
  dy: t
}, n = 0) => `translate(${ht(n)} ${ht((1 - e) * 920 - t)}) scale(${ht(e)})`;
var _t = {
  xHeight: 500,
  ascender: 700,
  capHeight: 700,
  digitHeight: 700
};
var vt = 0.85;
var yt = 130;
var bt = 70;
var xt = 50;
var St = 4;
var Ct = new Map();
var G = (e, t) => [...e].forEach(e => Ct.set(e.codePointAt(0), t));
G(`acemnorsuvwxz`, {
  top: `xHeight`,
  stands: true
});
G(`i`, {
  top: `xHeight`,
  stands: true,
  stem: true
});
G(`bdfhkl`, {
  top: `ascender`,
  stands: true
});
G(`t`, {
  stands: true
});
G(`gpqy`, {
  top: `xHeight`
});
G(`j`, {
  top: `xHeight`,
  stem: true,
  topReach: xt
});
G(`ABCDEFGHIKLMNOPRSTUVWXYZ`, {
  top: `capHeight`,
  stands: true
});
G(`JQ`, {
  top: `capHeight`
});
G(`0123456789`, {
  top: `digitHeight`,
  stands: true
});
function wt(e) {
  let t = M(rt(e));
  return t && {
    xMin: t.xMin,
    xMax: t.xMax,
    yMin: ot(t.yMax),
    yMax: ot(t.yMin)
  };
}
var Tt = new WeakMap();
function Et(e, t) {
  let n = Tt.get(t);
  if (n !== undefined) {
    return n;
  }
  let r = t.strokes.flatMap(e => wt(e) ?? []);
  if (r.length) {
    let t = r.reduce((e, t) => ({
      xMin: Math.min(e.xMin, t.xMin),
      xMax: Math.max(e.xMax, t.xMax),
      yMin: Math.min(e.yMin, t.yMin),
      yMax: Math.max(e.yMax, t.yMax)
    }));
    let i = e => e.yMax - e.yMin;
    let a = Ct.get(e)?.stem ? r.reduce((e, t) => i(t) > i(e) ? t : e) : t;
    n = {
      ink: t,
      body: {
        yMin: a.yMin,
        yMax: a.yMax
      }
    };
  } else {
    n = null;
  }
  Tt.set(t, n);
  return n;
}
var Dt = (e, t) => Et(e, t)?.ink ?? null;
var Ot = (e, t) => e.length ? t + (ne(e) - t) * Math.min(1, e.length / St) : t;
function kt(e, t, n, r) {
  if (!e || t.yMax - t.yMin < 1) {
    return W;
  }
  let i = e.top ? n + r[e.top] - t.yMax : NaN;
  let a = e.stands ? n - t.yMin : NaN;
  let o = Math.abs(i) <= (e.topReach ?? yt);
  let s = a <= bt && a >= -130;
  if (o && s) {
    let e = t.yMax + i * vt;
    let n = t.yMin + a * vt;
    let r = N((e - n) / (t.yMax - t.yMin), 0.88, 1.12);
    return {
      scale: r,
      dy: n - t.yMin * r
    };
  }
  if (s) {
    return {
      scale: 1,
      dy: a * vt
    };
  } else if (o) {
    return {
      scale: 1,
      dy: i * vt
    };
  } else {
    return W;
  }
}
function At(e, t, {
  scale: n,
  dy: r
}) {
  if (n === 1 && r === 0) {
    return e;
  }
  let i = e.scale * (t.yMin + t.yMax) / 2 + e.dy;
  return {
    scale: e.scale * n,
    dy: e.dy * n + i * (1 - n) - r
  };
}
function jt(e, t) {
  let n = e.flatMap(({
    cp: e,
    drawing: t
  }) => {
    let n = Et(e, t);
    if (n) {
      return [{
        cp: e,
        drawing: t,
        rule: Ct.get(e),
        ...n
      }];
    } else {
      return [];
    }
  });
  let r = new Map();
  if (!t) {
    for (let e of n) {
      r.set(e.cp, At(W, e.ink, e.drawing.fix));
    }
    return {
      place: r,
      lines: _t
    };
  }
  let i = Ot(n.flatMap(e => e.rule?.stands ? [e.body.yMin] : []), 0);
  let a = e => Ot(n.flatMap(t => t.rule?.top === e ? [t.body.yMax - i] : []), _t[e]);
  let o = {
    xHeight: a(`xHeight`),
    ascender: a(`ascender`),
    capHeight: a(`capHeight`),
    digitHeight: a(`digitHeight`)
  };
  for (let e of n) {
    let t = kt(e.rule, e.body, i, o);
    r.set(e.cp, At({
      scale: t.scale,
      dy: t.dy - i
    }, e.ink, e.drawing.fix));
  }
  return {
    place: r,
    lines: o
  };
}
var Mt = e => jt(mt(e), e.settings.tidy);
var Nt = `My Hand`;
function Pt(e, t) {
  let n = ``;
  for (let r of e) {
    if (n.length + r.length > t) {
      break;
    }
    n += r;
  }
  return n;
}
var Ft = e => Pt(e.replace(/\p{Cc}/gu, ` `).replace(/\s+/g, ` `).trim(), 31).trim() || `My Hand`;
function It(e) {
  let t = Ft(e).normalize(`NFC`).replace(/[^\p{L}\p{M}\p{N}]/gu, ``);
  if (/[\p{L}\p{N}]/u.test(t)) {
    return t;
  } else {
    return `Ductus`;
  }
}
var Lt = (e, t) => `${It(e)}-Regular.${t}`;
var Rt = e => `${It(e)}.png`;
var zt;
var Bt = 0;
var Vt = new Map();
function Ht() {
  return zt || (zt = new Worker(new URL(`/_next/static/workers/68c63b8b-Bl6VHrTP.js`, `${import.meta.url}`), {
    type: `module`
  }), zt.onmessage = ({
    data: e
  }) => {
    let t = Vt.get(e.id);
    Vt.delete(e.id);
    if (t) {
      if (e.ok) {
        t.resolve({
          buffer: e.buffer,
          ms: e.ms
        });
      } else {
        t.reject(Error(e.error));
      }
    }
  }, zt);
}
function Ut(e, t = []) {
  let n = Bt++;
  return new Promise((r, i) => {
    Vt.set(n, {
      resolve: r,
      reject: i
    });
    Ht().postMessage({
      ...e,
      id: n
    }, t);
  });
}
var Wt = (e, {
  place: t,
  lines: n
}) => Ut({
  type: `build`,
  familyName: Ft(e.name),
  projectId: e.id,
  tracking: e.settings.tracking,
  metrics: {
    xHeight: n.xHeight,
    capHeight: n.capHeight
  },
  glyphs: mt(e).map(e => ({
    ...e,
    place: t.get(e.cp) ?? W
  }))
});
var Gt = e => {
  let t = e.slice(0);
  return Ut({
    type: `woff2`,
    otf: t
  }, [t]);
};
var Kt = (e, t) => {
  let n = e.slice(0);
  return Ut({
    type: `pack`,
    otf: n,
    project: t,
    exportedAt: Date.now()
  }, [n]);
};
var qt = () => Ut({
  type: `warm`
});
var Jt;
var Yt = 0;
async function Xt(e) {
  let t = `live-font-${Yt++}`;
  let n = new FontFace(t, e);
  await n.load();
  document.fonts.add(n);
  if (Jt) {
    document.fonts.delete(Jt);
  }
  Jt = n;
  return t;
}
var Zt = [{
  id: `carbon`,
  name: `Carbon`,
  ground: `#2b2fe0`,
  hand: `#ffdf3d`,
  type: `#ffffff`,
  rule: 0.22
}, {
  id: `canary`,
  name: `Canary`,
  ground: `#ffdf3d`,
  hand: `#2b2fe0`,
  type: `#111111`,
  rule: 0.16
}, {
  id: `paper`,
  name: `Paper`,
  ground: `#ffffff`,
  hand: `#2b2fe0`,
  type: `#111111`,
  rule: 0.14
}, {
  id: `night`,
  name: `Night`,
  ground: `#111111`,
  hand: `#ffffff`,
  type: `#ffffff`,
  rule: 0.24
}, {
  id: `blush`,
  name: `Blush`,
  ground: `#ffc9dc`,
  hand: `#2b2fe0`,
  type: `#111111`,
  rule: 0.16
}, {
  id: `evergreen`,
  name: `Evergreen`,
  ground: `#0b5d3b`,
  hand: `#ffc9dc`,
  type: `#ffffff`,
  rule: 0.22
}];
var Qt = 0.55;
var $t = [{
  id: `lines`,
  name: `Lines`
}, {
  id: `grid`,
  name: `Grid`
}, {
  id: `dots`,
  name: `Dots`
}, {
  id: `plain`,
  name: `Plain`
}];
var en = {
  paper: `carbon`,
  ruling: `lines`
};
var tn = e => Zt.find(t => t.id === e) ?? Zt[0];
function nn(e) {
  let {
    paper: t,
    ruling: n
  } = typeof e == `object` && e ? e : {};
  return {
    paper: Zt.find(e => e.id === t)?.id ?? en.paper,
    ruling: $t.find(e => e.id === n)?.id ?? en.ruling
  };
}
var rn = new Uint32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);
var K = (e, t) => e >>> t | e << 32 - t;
function an(e) {
  let t = e.length * 8;
  let n = new Uint8Array(e.length + 9 + 63 >> 6 << 6);
  n.set(e);
  n[e.length] = 128;
  let r = new DataView(n.buffer);
  r.setUint32(n.length - 8, Math.floor(t / 4294967296));
  r.setUint32(n.length - 4, t >>> 0);
  let i = new Uint32Array([1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225]);
  let a = new Uint32Array(64);
  for (let e = 0; e < n.length; e += 64) {
    for (let t = 0; t < 16; t++) {
      a[t] = r.getUint32(e + t * 4);
    }
    for (let e = 16; e < 64; e++) {
      let t = K(a[e - 15], 7) ^ K(a[e - 15], 18) ^ a[e - 15] >>> 3;
      let n = K(a[e - 2], 17) ^ K(a[e - 2], 19) ^ a[e - 2] >>> 10;
      a[e] = a[e - 16] + t + a[e - 7] + n;
    }
    let [t, n, o, s, c, l, u, d] = i;
    for (let e = 0; e < 64; e++) {
      let r = d + (K(c, 6) ^ K(c, 11) ^ K(c, 25)) + (c & l ^ ~c & u) + rn[e] + a[e];
      let i = (K(t, 2) ^ K(t, 13) ^ K(t, 22)) + (t & n ^ t & o ^ n & o);
      d = u;
      u = l;
      l = c;
      c = s + r >>> 0;
      s = o;
      o = n;
      n = t;
      t = r + i >>> 0;
    }
    i[0] += t;
    i[1] += n;
    i[2] += o;
    i[3] += s;
    i[4] += c;
    i[5] += l;
    i[6] += u;
    i[7] += d;
  }
  let o = new Uint8Array(32);
  let s = new DataView(o.buffer);
  i.forEach((e, t) => s.setUint32(t * 4, e));
  return o;
}
var on = `DUCT`;
var sn = `DCTS`;
var cn = 1;
var q = 44;
var ln = 50331648;
var un = 2000000;
var dn = `Handwriting font `;
var fn = (e, t) => String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3]);
function pn(e) {
  let t = new DataView(e.buffer, e.byteOffset, e.byteLength);
  let n = t.getUint16(4);
  if (!n || 12 + n * 16 > e.length) {
    return;
  }
  let r = new Map();
  for (let i = 0; i < n; i++) {
    let n = 12 + i * 16;
    let a = t.getUint32(n + 8);
    let o = t.getUint32(n + 12);
    if (a + o <= e.length) {
      r.set(fn(e, n), {
        offset: a,
        length: o
      });
    }
  }
  return r;
}
function mn(e, t) {
  if (!t || t.length < 6) {
    return;
  }
  let n = new DataView(e.buffer, e.byteOffset + t.offset, t.length);
  let r = n.getUint16(2);
  let i = n.getUint16(4);
  if (!(6 + r * 12 > t.length)) {
    for (let a = 0; a < r; a++) {
      let r = 6 + a * 12;
      let [o,,, s, c, l] = [0, 2, 4, 6, 8, 10].map(e => n.getUint16(r + e));
      let u = i + l;
      if (s !== 8 || u + c > t.length || c > 256) {
        continue;
      }
      let d = new Uint8Array(e.buffer, e.byteOffset + t.offset + u, c);
      if (o === 3) {
        return String.fromCharCode(...Array.from({
          length: c >> 1
        }, (e, t) => d[t * 2] << 8 | d[t * 2 + 1]));
      }
      if (o === 1) {
        return String.fromCharCode(...d);
      }
    }
  }
}
async function hn(e, t) {
  let n = new Blob([e]).stream().pipeThrough(new DecompressionStream(`deflate-raw`)).getReader();
  let r = [];
  let i = 0;
  while (true) {
    let {
      done: e,
      value: a
    } = await n.read();
    if (e) {
      break;
    }
    i += a.length;
    if (i > t) {
      await n.cancel();
      throw Error(`Too large`);
    }
    r.push(a);
  }
  let a = new Uint8Array(i);
  let o = 0;
  for (let e of r) {
    a.set(e, o);
    o += e.length;
  }
  return a;
}
var gn = (e, t) => e.length === t.length && e.every((e, n) => e === t[n]);
async function _n(e) {
  let t = e => ({
    ok: false,
    reason: e
  });
  let n = new Uint8Array(e);
  if (n.length < 12 || n.length > 16777216) {
    return t(`not-font`);
  }
  let r = fn(n, 0);
  if (r === `wOFF` || r === `wOF2`) {
    return t(`website`);
  }
  if (r === `ttcf`) {
    return t(`not-ductus`);
  }
  if (r !== `OTTO` && r !== `true` && r !== `\0\0\0`) {
    return t(`not-font`);
  }
  let i = pn(n);
  if (!i) {
    return t(`not-font`);
  }
  let a = i.get(on);
  if (!a) {
    return t(mn(n, i.get(`name`))?.startsWith(dn) ? `legacy` : `not-ductus`);
  }
  try {
    if (a.length < q || fn(n, a.offset) !== sn) {
      return t(`damaged`);
    }
    let e = new DataView(n.buffer, a.offset, a.length);
    if (e.getUint16(4) > cn) {
      return t(`newer`);
    }
    let r = e.getUint32(8);
    if (r !== a.length - q) {
      return t(`damaged`);
    }
    let i = n.slice(a.offset + q, a.offset + q + r);
    if (!gn(an(i), n.subarray(a.offset + 12, a.offset + q))) {
      return t(`damaged`);
    }
    let o = new TextDecoder(`utf-8`, {
      fatal: true
    }).decode(await hn(i, ln));
    let s = JSON.parse(o);
    if (!J(s) || !yn(s.exportedAt)) {
      return t(`damaged`);
    } else if (J(s.project) && yn(s.project.schemaVersion) && s.project.schemaVersion > 1) {
      return t(`newer`);
    } else {
      return {
        ok: true,
        project: Tn(s.project),
        exportedAt: s.exportedAt
      };
    }
  } catch {
    return t(`damaged`);
  }
}
var vn = class extends Error {};
var J = e => typeof e == `object` && !!e && !Array.isArray(e);
var yn = e => typeof e == `number` && Number.isFinite(e);
function Y(e) {
  if (!e) {
    throw new vn();
  }
}
function X(e, t, n) {
  Y(yn(e) && e >= t && e <= n);
  return e;
}
function bn(e, t) {
  Y(typeof e == `string` && e.length <= t);
  return e;
}
function xn(e, t, n = 0) {
  Y(Array.isArray(e) && e.length >= n && e.length <= t);
  return e;
}
var Sn = new Set(D);
var Cn = [`pen`, `touch`, `mouse`];
var wn = 100000;
function Tn(e) {
  Y(J(e) && e.schemaVersion === 1);
  let t = e.settings;
  Y(J(t));
  Y(J(e.glyphs));
  let n = Object.entries(e.glyphs);
  Y(n.length <= Sn.size);
  let r = 0;
  let i = {};
  for (let [e, t] of n) {
    let n = Number(e);
    Y(Sn.has(n) && J(t) && t.cp === n);
    i[n] = {
      cp: n,
      drawings: xn(t.drawings, 8).map(e => {
        Y(J(e) && J(e.fix));
        let t = xn(e.strokes, 500).map(e => {
          Y(J(e) && Cn.includes(e.input));
          let t = xn(e.pts, 20000, 1).map(e => {
            Y(Array.isArray(e) && e.length === 3);
            return [X(e[0], -100000, wn), X(e[1], -100000, wn), X(e[2], 0, 1)];
          });
          r += t.length;
          Y(r <= un);
          return {
            id: bn(e.id, 64),
            pts: t,
            input: e.input
          };
        });
        return {
          id: bn(e.id, 64),
          strokes: t,
          fix: {
            dx: X(e.fix.dx, -100000, wn),
            dy: X(e.fix.dy, -100000, wn),
            scale: X(e.fix.scale, 0.1, 10)
          },
          updatedAt: X(e.updatedAt, 0, 9007199254740991)
        };
      })
    };
  }
  return {
    schemaVersion: 1,
    id: bn(e.id, 64),
    name: bn(e.name, 100),
    createdAt: X(e.createdAt, 0, 9007199254740991),
    updatedAt: X(e.updatedAt, 0, 9007199254740991),
    glyphs: i,
    settings: {
      tracking: X(t.tracking, -1000, 1000),
      tidy: typeof t.tidy != `boolean` || t.tidy
    }
  };
}
function En(e) {
  return new Promise((t, n) => {
    e.oncomplete = e.onsuccess = () => t(e.result);
    e.onabort = e.onerror = () => n(e.error);
  });
}
function Dn(e, t) {
  let n;
  let r = () => {
    if (n) {
      return n;
    }
    let r = indexedDB.open(e);
    r.onupgradeneeded = () => r.result.createObjectStore(t);
    n = En(r);
    n.then(e => {
      e.onclose = () => n = undefined;
    }, () => {
      n = undefined;
    });
    return n;
  };
  return (e, n) => r().then(r => n(r.transaction(t, e).objectStore(t)));
}
var On;
function kn() {
  On ||= Dn(`keyval-store`, `keyval`);
  return On;
}
function An(e, t = kn()) {
  return t(`readonly`, t => En(t.get(e)));
}
function jn(e, t, n = kn()) {
  return n(`readwrite`, n => {
    n.put(t, e);
    return En(n.transaction);
  });
}
var Mn = `project:spike-0000`;
async function Nn() {
  let e = await An(Mn);
  if (e === undefined) {
    return undefined;
  } else {
    return ft(e);
  }
}
var Pn = false;
async function Fn(e) {
  await jn(Mn, e);
  if (!Pn) {
    Pn = true;
    navigator.storage?.persist?.().catch(() => {});
  }
}
var In = `picture-style`;
var Ln = () => An(In).then(e => e === undefined ? undefined : nn(e), () => undefined);
var Rn = e => jn(In, e).catch(() => undefined);
var zn = 400;
function Bn(e, t) {
  let [n, r] = (0, i.useState)(e);
  let [a, o] = (0, i.useState)(`loading`);
  let s = a === `loading`;
  let c = (0, i.useEffectEvent)(e => t?.(e));
  (0, i.useEffect)(() => {
    let t = true;
    Nn().then(n => {
      if (t) {
        r(dt(n ?? e));
        if (n) {
          c(n);
        }
        o(`saved`);
      }
    }, () => {
      if (t) {
        r(dt(e));
        o(`unsaved`);
      }
    });
    return () => {
      t = false;
    };
  }, [e]);
  let l = (0, i.useEffectEvent)(() => {
    if (!s) {
      Fn(n).then(() => o(`saved`), () => o(`unsaved`));
    }
  });
  (0, i.useEffect)(() => {
    if (s) {
      return;
    }
    let e = setTimeout(l, zn);
    return () => clearTimeout(e);
  }, [n, s]);
  (0, i.useEffect)(() => {
    let e = () => {
      if (document.visibilityState === `hidden`) {
        l();
      }
    };
    document.addEventListener(`visibilitychange`, e);
    return () => document.removeEventListener(`visibilitychange`, e);
  }, []);
  return {
    project: n,
    setProject: r,
    status: a
  };
}
var Vn = (0, i.createContext)(null);
function Z() {
  let e = (0, i.use)(Vn);
  if (!e) {
    throw Error(`useWrite must be used inside <WriteProvider>`);
  }
  return e;
}
var Hn = {
  schemaVersion: 1,
  id: ``,
  name: Nt,
  createdAt: 0,
  updatedAt: 0,
  glyphs: {},
  settings: {
    tracking: 0,
    tidy: true
  }
};
var Un = 300;
var Wn = (e, t) => e.glyphs[t]?.drawings[0]?.strokes ?? [];
var Gn = e => D.find(t => !Wn(e, t).length) ?? D[0];
function Kn({
  children: e
}) {
  let [t, n] = (0, i.useState)(D[0]);
  let [r, a] = (0, i.useState)({
    from: undefined,
    by: `jump`
  });
  let {
    project: o,
    setProject: c,
    status: l
  } = Bn(Hn, e => n(Gn(e)));
  let [u, d] = (0, i.useState)({});
  let [f, p] = (0, i.useState)();
  let [m, h] = (0, i.useState)();
  let [g, _] = (0, i.useState)();
  let [v, y] = (0, i.useState)();
  let [b, x] = (0, i.useState)(en);
  let S = (0, i.useRef)(null);
  (0, i.useEffect)(() => {
    let e = true;
    Ln().then(t => e && t && x(t));
    return () => {
      e = false;
    };
  }, []);
  let C = (0, i.useMemo)(() => Mt(o), [o]);
  let w = (0, i.useMemo)(() => new Set(D.filter(e => Wn(o, e).length)), [o]);
  let T = D.indexOf(t);
  let E = D[T - 1];
  let O = D[T + 1];
  let k = Wn(o, t);
  let A = u[t] ?? [];
  let j = e => e === undefined ? undefined : {
    strokes: Wn(o, e),
    place: C.place.get(e)
  };
  let te = {
    before: j(D.slice(0, T).findLast(e => w.has(e))),
    after: j(D.slice(T + 1).find(e => w.has(e)))
  };
  let M = e => c(n => {
    let r = n.glyphs[t]?.drawings[0];
    let i = r?.strokes.length ? r.fix : ct;
    let a = {
      id: r?.id ?? lt(),
      strokes: e,
      fix: i,
      updatedAt: Date.now()
    };
    return {
      ...n,
      updatedAt: Date.now(),
      glyphs: {
        ...n.glyphs,
        [t]: {
          cp: t,
          drawings: [a]
        }
      }
    };
  });
  let N = e => {
    d(e => ({
      ...e,
      [t]: [...(e[t] ?? []), k]
    }));
    M(e);
  };
  let ne = e => {
    c(dt(e));
    d({});
    n(Gn(e));
    _(undefined);
    h(undefined);
  };
  let re = async e => {
    if (l === `loading`) {
      return;
    }
    let t = e.size > 16777216 ? {
      ok: false,
      reason: `not-font`
    } : await e.arrayBuffer().then(_n, () => ({
      ok: false,
      reason: `unreadable`
    }));
    if (t.ok) {
      if (w.size) {
        y({
          kind: `replace`,
          fileName: e.name,
          project: t.project,
          exportedAt: t.exportedAt,
          device: o
        });
        h(`replace`);
      } else {
        ne(t.project);
      }
    } else {
      y({
        kind: `refused`,
        fileName: e.name,
        size: e.size,
        reason: t.reason
      });
      h(`refused`);
    }
  };
  let P = {
    go: (e, r = `press`) => {
      if (e !== undefined && e !== t) {
        a({
          from: t,
          by: r
        });
        n(e);
      }
    },
    addStroke: e => N([...k, e]),
    undo: () => {
      if (A.length) {
        d(e => ({
          ...e,
          [t]: A.slice(0, -1)
        }));
        M(A[A.length - 1]);
      }
    },
    clear: () => k.length && N([]),
    setFix: (e, t) => c(n => {
      let r = n.glyphs[e]?.drawings[0];
      if (r) {
        return {
          ...n,
          updatedAt: Date.now(),
          glyphs: {
            ...n.glyphs,
            [e]: {
              cp: e,
              drawings: [{
                ...r,
                fix: t
              }]
            }
          }
        };
      } else {
        return n;
      }
    }),
    setTidy: e => c(t => ({
      ...t,
      updatedAt: Date.now(),
      settings: {
        ...t.settings,
        tidy: e
      }
    })),
    rename: e => c(t => t.name === e ? t : {
      ...t,
      updatedAt: Date.now(),
      name: e
    }),
    stylePicture: e => {
      let t = {
        ...b,
        ...e
      };
      x(t);
      Rn(t);
    },
    startOver: () => {
      c(e => ({
        ...e,
        id: lt(),
        updatedAt: Date.now(),
        glyphs: {}
      }));
      d({});
      n(D[0]);
      _(undefined);
      h(undefined);
    },
    openSheet: e => {
      if (e === `adjust` && w.has(t)) {
        _(t);
      }
      h(e);
    },
    closeSheet: () => h(undefined),
    pick: _,
    chooseFont: () => S.current?.click(),
    openFont: e => void re(e),
    replace: () => v?.kind === `replace` && ne(v.project)
  };
  let ie = (0, i.useEffectEvent)(e => {
    if (!(e.target instanceof HTMLTextAreaElement) && !(e.target instanceof HTMLInputElement) && !e.defaultPrevented && !m) {
      if (e.key === `ArrowLeft`) {
        P.go(E, `jump`);
      } else if (e.key === `ArrowRight`) {
        P.go(O, `jump`);
      } else if (e.key.toLowerCase() === `z` && (e.metaKey || e.ctrlKey) && !e.shiftKey) {
        P.undo();
      } else {
        return;
      }
      e.preventDefault();
    }
  });
  (0, i.useEffect)(() => {
    let e = e => ie(e);
    window.addEventListener(`keydown`, e);
    return () => window.removeEventListener(`keydown`, e);
  }, []);
  (0, i.useEffect)(() => {
    let e = true;
    let t = setTimeout(async () => {
      let {
        buffer: t
      } = await Wt(o, C);
      let n = await Xt(t.slice(0));
      if (e) {
        p({
          otf: t,
          family: n,
          of: o
        });
      }
    }, Un);
    return () => {
      e = false;
      clearTimeout(t);
    };
  }, [o, C]);
  let ae = {
    project: o,
    status: l,
    cp: t,
    arrival: r,
    set: ee(t),
    prevCp: E,
    nextCp: O,
    strokes: k,
    canUndo: A.length > 0,
    drawn: w,
    alignment: C,
    neighbours: te,
    font: f,
    sheet: m,
    picture: b,
    picked: g,
    opening: v
  };
  const Component34 = `input`;
  return <Vn value={{
    state: ae,
    actions: P
  }}>{e}<Component34 ref={S} type={`file`} accept={`.otf,.ttf,.woff,.woff2,font/otf,font/ttf,font/woff,font/woff2`} hidden={true} tabIndex={-1} aria-hidden={true} onChange={e => {
      let t = e.currentTarget.files?.[0];
      e.currentTarget.value = ``;
      if (t) {
        P.openFont(t);
      }
    }} /></Vn>;
}
var qn = e => e.closest(`dialog`)?.close();
var Jn = 0.25;
var Yn = 0.11;
var Xn = 6;
var Zn = 100;
var Qn = 400;
var $n = (e, t) => e * t * 0.55 / (t + e * 0.55);
var er = () => matchMedia(`(min-width: 64rem)`).matches;
var tr = 352;
var nr = 8;
var rr = 24;
function _Component2({
  open: e,
  onClose: t,
  surface: n,
  wide: r,
  role: a,
  labelledBy: o,
  describedBy: c,
  initialFocus: l,
  anchor: u,
  children: d
}) {
  let f = (0, i.useRef)(null);
  let p = (0, i.useRef)(null);
  let m = (0, i.useRef)(false);
  let h = (0, i.useRef)(0);
  let [g, _] = (0, i.useState)(e);
  if (e && !g) {
    _(true);
  }
  (0, i.useEffect)(() => {
    let t = f.current;
    if (e && !t.open) {
      t.showModal();
      h.current = performance.now();
      let e = t.querySelector(l ?? `[data-autofocus]`);
      e?.scrollIntoView({
        block: `center`
      });
      e?.focus({
        preventScroll: true
      });
    } else if (!e && t.open) {
      t.close();
    }
  }, [e, l]);
  (0, i.useEffect)(() => {
    if (!e || !u) {
      return;
    }
    let t = f.current;
    let n = () => {
      let e = er() ? document.querySelector(u)?.getBoundingClientRect() : undefined;
      if (!e) {
        t.style.removeProperty(`--panel-top`);
        t.style.removeProperty(`--panel-right`);
        return;
      }
      let n = Math.max(rr, Math.min(e.bottom + nr, innerHeight - tr - rr));
      t.style.setProperty(`--panel-top`, `${n.toFixed(0)}px`);
      t.style.setProperty(`--panel-right`, `${Math.max(rr, innerWidth - e.right).toFixed(0)}px`);
    };
    n();
    window.addEventListener(`resize`, n);
    return () => window.removeEventListener(`resize`, n);
  }, [e, u]);
  let v = e => {
    let t = e.target;
    if (p.current || e.pointerType === `mouse` && e.button !== 0 || er() || !t.closest(`[data-sheet-handle]`) || t.closest(`button, a, input, textarea, select, label`)) {
      return;
    }
    let {
      clientY: n,
      timeStamp: r,
      pointerId: i
    } = e;
    p.current = {
      pointerId: i,
      startY: n,
      height: e.currentTarget.offsetHeight,
      moving: false,
      dy: 0,
      lastY: n,
      lastT: r,
      velocity: 0
    };
  };
  let y = e => {
    let t = p.current;
    if (!t || e.pointerId !== t.pointerId) {
      return;
    }
    if (!t.moving) {
      if (Math.abs(e.clientY - t.startY) < Xn) {
        return;
      }
      t.moving = true;
      t.startY = e.clientY;
      e.currentTarget.setPointerCapture(e.pointerId);
      e.currentTarget.style.transition = `none`;
    }
    let n = e.timeStamp - t.lastT;
    if (n > 0) {
      t.velocity = (e.clientY - t.lastY) / n;
    }
    t.lastY = e.clientY;
    t.lastT = e.timeStamp;
    let r = e.clientY - t.startY;
    t.dy = r >= 0 ? r : -$n(-r, t.height / 4);
    e.currentTarget.style.transform = `translateY(${t.dy.toFixed(1)}px)`;
  };
  let b = (e, t) => {
    let n = p.current;
    if (!n || e.pointerId !== n.pointerId || (p.current = null, !n.moving)) {
      return;
    }
    let r = e.currentTarget;
    m.current = true;
    setTimeout(() => m.current = false);
    r.style.transition = ``;
    r.style.transform = ``;
    let i = e.timeStamp - n.lastT < Zn && n.velocity > Yn;
    if (t && n.dy > 0 && (n.dy > n.height * Jn || i)) {
      r.close();
    }
  };
  const Component35 = `span`;
  const Component36 = `div`;
  const Component37 = `dialog`;
  return <Component37 ref={f} role={a} data-wide={r} aria-labelledby={o} aria-describedby={c} onClose={t} onClick={e => {
    if (e.target === e.currentTarget && !m.current && e.timeStamp - h.current > Qn) {
      e.currentTarget.close();
    }
  }} onTransitionEnd={t => t.target === t.currentTarget && !e && _(false)} onPointerDown={v} onPointerMove={y} onPointerUp={e => b(e, true)} onPointerCancel={e => b(e, false)} className={`sheet inset-x-0 top-auto bottom-0 mx-auto mb-0 max-h-[85dvh] w-full max-w-lg flex-col overflow-visible rounded-t-[1.75rem] p-0 open:flex ${n}`}>{g ? <s.Fragment><Component36 data-sheet-handle={true} aria-hidden={true} className={`absolute inset-x-0 top-0 z-10 flex h-6 touch-none justify-center pt-2 lg:hidden`}><Component35 className={`h-1.25 w-9 rounded-full bg-current opacity-(--grabber)`} /></Component36>{d}</s.Fragment> : null}</Component37>;
}
function _Component({
  className: e,
  children: t
}) {
  const Component38 = `div`;
  const Component39 = `div`;
  return <Component39 className={`scroll-edges flex min-h-0 flex-col`}><Component38 className={`edge-scroller relative min-h-0 overflow-y-auto overscroll-contain ${e}`}>{t}</Component38></Component39>;
}
var or = `bg-carbon text-paper shadow-[inset_0_1px_0_rgb(255_255_255/0.2),0_-12px_48px_rgb(4_5_40/0.4)] lg:shadow-[inset_0_0_0_1px_rgb(255_255_255/0.18),0_24px_64px_rgb(4_5_40/0.5)]`;
function _Component8({
  open: e,
  onClose: t,
  title: n,
  onDone: r,
  initialFocus: a,
  anchor: o,
  children: c
}) {
  let l = (0, i.useId)();
  const Component40 = `h2`;
  const Component41 = `button`;
  const Component42 = `div`;
  return <_Component2 open={e} onClose={t} surface={or} wide={`panel`} labelledBy={l} initialFocus={a} anchor={o}><Component42 data-sheet-handle={true} className={`flex touch-none items-center justify-between pt-5.5 pr-2 pb-2 pl-5 lg:pt-3.5 lg:pr-3 lg:pl-6`}><Component40 id={l} className={`text-lg leading-6 font-semibold`}>{n}</Component40><Component41 type={`button`} onClick={e => r ? r() : qn(e.currentTarget)} className={`pressable min-h-11 rounded-full px-3 text-[0.9375rem] font-semibold hover:bg-paper/10 active:bg-paper/14`}>{`Done`}</Component41></Component42><_Component className={`pb-[calc(env(safe-area-inset-bottom)+1.5rem)]`}>{c}</_Component></_Component2>;
}
function cr({
  open: e,
  onClose: t,
  title: n,
  message: r,
  children: a
}) {
  let o = (0, i.useId)();
  let c = (0, i.useId)();
  const Component43 = `h2`;
  const Component44 = `p`;
  const Component45 = `div`;
  return <_Component2 open={e} onClose={t} surface={or} wide={`alert`} role={`alertdialog`} labelledBy={o} describedBy={c}><_Component className={`pt-8 pb-[calc(env(safe-area-inset-bottom)+1.75rem)] lg:pt-7`}><Component45 className={`flex flex-col gap-2 px-5 lg:px-7`}><Component43 id={o} className={`text-[1.375rem] leading-7 font-semibold tracking-[-0.01em] text-balance`}>{n}</Component43><Component44 id={c} className={`text-[0.9375rem] leading-5 text-pretty text-paper/90`}>{r}</Component44></Component45>{a}</_Component></_Component2>;
}
function lr({
  children: e
}) {
  const Component46 = `div`;
  return <Component46 className={`flex flex-col gap-2.5 px-5 pt-5.5 lg:px-7`}>{e}</Component46>;
}
var ur = `pressable flex h-12 shrink-0 items-center justify-center gap-2 rounded-full px-5 text-[0.9375rem] leading-5`;
const Component47 = `button`;
var _Component5 = ({
  className: e = ``,
  ...t
}) => <Component47 type={`button`} {...t} className={`${ur} bg-paper font-semibold text-carbon hover:bg-paper/92 ${e}`} />;
const Component48 = `button`;
var fr = ({
  className: e = ``,
  ...t
}) => <Component48 type={`button`} {...t} className={`${ur} bg-paper font-semibold text-danger hover:bg-paper/92 ${e}`} />;
const Component49 = `button`;
var _Component3 = ({
  className: e = ``,
  ...t
}) => <Component49 type={`button`} {...t} className={`${ur} bg-paper/14 font-medium text-paper hover:bg-paper/20 active:bg-paper/24 ${e}`} />;
var mr = ({
  onClick: e,
  ...t
}) => <_Component3 data-autofocus={true} {...t} onClick={t => {
  e?.(t);
  qn(t.currentTarget);
}} />;
var hr = {
  name: `sorenblank`,
  url: `https://sorenblank.com`
};
function gr(e) {
  return ((e.VERCEL_ENV === `preview` && e.VERCEL_BRANCH_URL ? `https://${e.VERCEL_BRANCH_URL}` : undefined) ?? (e.SITE_URL || undefined) ?? (e.NODE_ENV === `production` ? `https://ductus.sorenblank.com` : `http://localhost:3000`)).replace(/\/+$/, ``);
}
gr({
  NODE_ENV: `production`,
  SITE_URL: ``,
  VERCEL_ENV: ``,
  VERCEL_BRANCH_URL: ``
});
var _r;
var vr;
var yr = new Set();
function br() {
  vr ??= r(() => import(`./CEjkeowH.js`).then(e => {
    _r = e.default;
    yr.forEach(e => e());
  }, e => {
    vr = undefined;
    throw e;
  }), __vite__mapDeps([0, 1, 2, 3, 4]));
  return vr;
}
var xr = () => void br().catch(() => undefined);
var Sr = e => {
  yr.add(e);
  return () => yr.delete(e);
};
var Cr = () => (0, i.useSyncExternalStore)(Sr, () => _r !== undefined, () => false);
function _Component7({
  view: e
}) {
  let _Component4 = _r;
  if (_Component4) {
    return <_Component4 view={e} />;
  } else {
    return null;
  }
}
function Tr() {
  const Component50 = `a`;
  const Component51 = `p`;
  return <Component51 data-credit={true} className={`-mb-[min(env(safe-area-inset-bottom),1.75rem)] pt-2.5 text-center text-caption text-paper/90`}>{`Made with care by`}{` `}<Component50 href={hr.url} target={`_blank`} rel={`noopener author`} draggable={false} className={`relative inline-block rounded-sm font-medium text-paper underline decoration-paper/40 underline-offset-3 before:absolute before:-inset-x-3 before:-top-2.5 before:-bottom-4 hover:decoration-paper`}>{hr.name}</Component50></Component51>;
}
function Er() {
  let {
    actions: e
  } = Z();
  const Component52 = `p`;
  const Component53 = `p`;
  const Component54 = `div`;
  const Component55 = `div`;
  const Component56 = `div`;
  return <Component56 className={`flex flex-col px-5 pt-1 pb-1 lg:px-6`}><Component54 className={`flex flex-col gap-1.5 pb-5.5`}><Component52 className={`text-[1.375rem] leading-7 font-semibold tracking-[-0.01em] text-balance`}>{`Nothing to export yet`}</Component52><Component53 className={`text-[0.9375rem] leading-5 text-pretty text-paper/90`}>{`Write one letter and your font is ready to download. It grows with every letter you add.`}</Component53></Component54><Component55 className={`flex flex-col gap-2.5`}><_Component5 data-autofocus={true} onClick={e => qn(e.currentTarget)}>{`Write your first letter`}</_Component5><_Component3 onClick={e.chooseFont}><_Component6 className={`size-5.5 shrink-0 lg:size-5`} />{`Open a font…`}</_Component3></Component55></Component56>;
}
function Dr() {
  let {
    state: e,
    actions: t
  } = Z();
  let {
    sheet: n
  } = e;
  let r = Cr();
  let a = n === `export` || n === `picture`;
  let o = e.drawn.size === 0;
  let c = a && (o || r);
  let [l, u] = (0, i.useState)(`font`);
  let d = n === `picture` ? `picture` : `font`;
  if (a && l !== d) {
    u(d);
  }
  (0, i.useEffect)(() => {
    let e = (window.requestIdleCallback ?? (e => window.setTimeout(e, 1500)))(xr);
    return () => (window.cancelIdleCallback ?? window.clearTimeout)(e);
  }, []);
  let f = (0, i.useEffectEvent)(() => t.closeSheet());
  (0, i.useEffect)(() => {
    if (a && !o && !r) {
      br().catch(f);
    }
  }, [a, o, r]);
  return <_Component8 open={c} onClose={t.closeSheet} title={l === `picture` ? `Picture` : `Export`} onDone={l === `picture` ? () => t.openSheet(`export`) : undefined} anchor={`[data-anchor="actions"]`}>{o ? <Er /> : r ? <_Component7 view={l} /> : null}<Tr /></_Component8>;
}
var Or = `ductus-v2`;
var kr = e => e.startsWith(`${location.origin}/_next/static/`);
async function Ar(e = []) {
  if (!(`caches` in globalThis)) {
    return;
  }
  let t = performance.getEntriesByType(`resource`).map(e => e.name);
  let n = [...new Set([...t, ...e])].filter(kr);
  let r = await caches.open(Or);
  await Promise.all(n.map(async e => {
    if (!(await r.match(e, {
      ignoreVary: true
    }))) {
      await r.add(e).catch(() => undefined);
    }
  }));
}
function jr() {
  (0, i.useEffect)(() => {
    if (!(`serviceWorker` in navigator)) {
      return;
    }
    let e = false;
    let t = async () => {
      try {
        await navigator.serviceWorker.register(`/sw.js`);
        await navigator.serviceWorker.ready;
        if (e) {
          return;
        }
        await br();
        await Promise.all([Ar(), qt()]);
      } catch {}
    };
    let n = (window.requestIdleCallback ?? (e => window.setTimeout(e, 1500)))(() => void t());
    return () => {
      e = true;
      (window.cancelIdleCallback ?? window.clearTimeout)(n);
    };
  }, []);
  return null;
}
var Mr = e => e.split(`.`).pop()?.toLowerCase() ?? ``;
var Nr = {
  pdf: `PDF document`,
  png: `PNG image`,
  jpg: `JPEG image`,
  jpeg: `JPEG image`,
  heic: `HEIC image`,
  svg: `SVG image`,
  zip: `Zip archive`,
  txt: `Text document`,
  ttc: `Font collection`
};
const Component57 = `span`;
var Pr = {
  "not-ductus": {
    title: `This font wasn’t made with Ductus`,
    message: () => `Ductus only opens its own fonts. They carry the strokes you drew, so every letter stays editable.`,
    about: () => `The font you chose`,
    action: `Choose another font`,
    showExpected: true
  },
  legacy: {
    title: `This font doesn’t carry your strokes`,
    message: () => `It was exported before Ductus kept strokes inside its fonts. Open Ductus in the browser you drew it in, and export it again.`,
    about: () => `Made with an earlier Ductus`,
    action: `Choose another font`
  },
  website: {
    title: `Open the OTF instead`,
    message: ({
      name: e
    }) => `${Mr(e) === `woff` ? `WOFF` : `WOFF2`} files stay small for websites, so they leave your strokes out. The OTF from the same download has them.`,
    about: () => `Website font`,
    action: `Choose the OTF`
  },
  damaged: {
    title: `This font is damaged`,
    message: () => `Part of it is missing or was changed, so Ductus won’t open it. Try another copy, or export it again.`,
    about: () => `Its letters don’t match their checksum`,
    action: `Choose another copy`
  },
  newer: {
    title: `Made with a newer Ductus`,
    message: () => `This copy of Ductus is out of date. Reload the page to update it, then open the font again.`,
    about: () => `Needs a newer version to open`,
    action: `Reload Ductus`
  },
  unreadable: {
    title: `Ductus couldn’t read that file`,
    message: () => `It may have moved, or still be downloading. Choose it again from where it is now.`,
    about: () => `Couldn’t be read`,
    action: `Choose the font again`
  },
  "not-font": {
    title: `That’s not a font`,
    message: ({
      expected: e
    }) => <s.Fragment>{`Choose the OTF you downloaded from Export. It’s named like `}<Component57 className={`cursor-text wrap-anywhere select-text`}>{e}</Component57>{`.`}</s.Fragment>,
    about: ({
      name: e,
      size: t
    }) => t > 16777216 ? `${Math.round(t / 1024 / 1024)} MB, too large to be a font` : Nr[Mr(e)] ?? `Not a font file`,
    action: `Choose a font`
  }
};
var Fr = e => Math.round(e * 10) / 10;
function Ir(e) {
  let t = e.length;
  if (t < 3) {
    return ``;
  }
  let n = n => {
    let [r, i] = [e[n % t], e[(n + 1) % t]];
    return `${Fr((r[0] + i[0]) / 2)} ${Fr((r[1] + i[1]) / 2)}`;
  };
  let r = `M${n(t - 1)}`;
  for (let i = 0; i < t; i++) {
    r += `Q${Fr(e[i][0])} ${Fr(e[i][1])} ${n(i)}`;
  }
  return `${r}Z`;
}
var Lr = e => e.map(e => Ir(te(e) < 0 ? [...e].reverse() : e)).join(``);
var Rr = new WeakMap();
function zr(e) {
  let t = Rr.get(e);
  if (t === undefined) {
    Rr.set(e, t = Lr(rt(e)));
  }
  return t;
}
var Br = `hamburgefonstiv`;
var Vr = 14;
var Hr = 90;
function Ur(e) {
  let {
    place: t,
    lines: n
  } = Mt(e);
  let r = t => pt(e.glyphs[t]);
  let i = [...Br].map(e => e.charCodeAt(0)).filter(r);
  let a = (i.length >= 5 ? i : D.filter(r)).slice(0, Vr);
  let o = 0;
  let s = [];
  for (let e of a) {
    let n = r(e);
    let i = Dt(e, n);
    let a = t.get(e);
    if (i && a) {
      s.push({
        cp: e,
        strokes: n.strokes,
        transform: gt(a, o - i.xMin * a.scale)
      });
      o += (i.xMax - i.xMin) * a.scale + Hr;
    }
  }
  let c = 920 - Math.max(n.ascender, n.capHeight) - 60;
  return {
    letters: s,
    width: Math.max(1, o - Hr),
    top: c,
    bottom: 1180
  };
}
function Wr({
  project: e,
  label: t
}) {
  let {
    letters: n,
    width: r,
    top: a,
    bottom: o
  } = (0, i.useMemo)(() => Ur(e), [e]);
  const Component58 = `path`;
  const Component59 = `g`;
  const Component60 = `svg`;
  return <Component60 role={`img`} aria-label={t} viewBox={`0 ${a.toFixed(0)} ${r.toFixed(0)} ${(o - a).toFixed(0)}`} preserveAspectRatio={`xMinYMid meet`} className={`block h-11.5 w-full fill-hand`}>{n.map(({
      cp: e,
      strokes: t,
      transform: n
    }) => <Component59 transform={n} key={e}>{t.map(e => <Component58 d={zr(e)} key={e.id} />)}</Component59>)}</Component60>;
}
var Gr = e => `${e} ${e === 1 ? `letter` : `letters`}`;
var Kr = 86400000;
var qr = e => new Date(e).setHours(0, 0, 0, 0);
function Jr(e) {
  let t = Math.round((qr(Date.now()) - qr(e)) / Kr);
  if (t === 0) {
    return `today`;
  }
  if (t === 1) {
    return `yesterday`;
  }
  let n = new Date(e).getFullYear() === new Date().getFullYear();
  return new Intl.DateTimeFormat(`en-GB`, {
    day: `numeric`,
    month: `short`,
    year: n ? undefined : `numeric`
  }).format(e);
}
var Yr = e => e[0].toUpperCase() + e.slice(1);
var Q = {
  dy: 300,
  minScale: 0.7,
  maxScale: 1.4
};
var Xr = Math.ceil(H * 44 / 144);
var Zr = 4;
var Qr = 10;
function $r({
  letters: e,
  xHeight: t,
  picked: n,
  onPick: r,
  onFix: a
}) {
  let o = (0, i.useRef)(null);
  (0, i.useEffect)(() => {
    o.current?.scrollIntoView({
      inline: `nearest`,
      block: `nearest`
    });
  }, [n]);
  const Component61 = `div`;
  const Component62 = `div`;
  return <Component62 className={`strip-edges overflow-hidden rounded-[1.125rem] bg-(--strip-surface)`}><Component61 role={`group`} aria-label={`Your letters on one line`} className={`strip-scroller flex h-36 overflow-x-auto`}>{e.map((i, c) => <_Component9 ref={i.cp === n ? o : undefined} letter={i} xHeight={t} picked={i.cp === n} onPick={r} onFix={a} before={e[c - 1]?.cp} after={e[c + 1]?.cp} key={i.cp} />)}</Component61></Component62>;
}
function _Component0({
  width: e
}) {
  let t = e / 2;
  const Component63 = `path`;
  const Component64 = `path`;
  const Component65 = `g`;
  return <Component65 className={`stroke-(color:--accent)`} fill={`none`} strokeWidth={16} strokeLinecap={`round`} strokeLinejoin={`round`}><Component63 d={`M${t - 46} 144L${t} 98L${t + 46} 144`} /><Component64 d={`M${t - 46} 1086L${t} 1132L${t + 46} 1086`} /></Component65>;
}
function _Component9({
  ref: e,
  letter: {
    cp: t,
    strokes: n,
    ink: r,
    place: a,
    fix: o
  },
  xHeight: c,
  picked: l,
  onPick: u,
  onFix: d,
  before: f,
  after: p
}) {
  let m = (0, i.useRef)(null);
  let h = (0, i.useRef)(null);
  let g = String.fromCodePoint(t);
  let _ = (r.xMax - r.xMin) * a.scale;
  let v = Math.max(Xr, _ + 110);
  let y = (v - _) / 2;
  let b = e => d(t, {
    ...o,
    dy: N(Math.round(o.dy + e), -Q.dy, Q.dy)
  });
  let x = e => {
    if (!l || h.current || e.pointerType === `mouse` && e.button !== 0) {
      return;
    }
    e.currentTarget.setPointerCapture(e.pointerId);
    let t = H / e.currentTarget.getBoundingClientRect().height;
    h.current = {
      pointerId: e.pointerId,
      startY: e.clientY,
      unitsPerPx: t,
      moved: 0
    };
  };
  let S = e => {
    let t = h.current;
    if (!t || e.pointerId !== t.pointerId) {
      return;
    }
    let n = e.clientY - t.startY;
    let r = Math.abs(n) <= Zr ? 0 : (n - Math.sign(n) * Zr) * t.unitsPerPx;
    t.moved = N(o.dy + r, -Q.dy, Q.dy) - o.dy;
    m.current?.setAttribute(`transform`, `translate(0 ${t.moved.toFixed(1)})`);
  };
  let C = (e, t) => {
    let n = h.current;
    if (n && e.pointerId === n.pointerId) {
      h.current = null;
      m.current?.removeAttribute(`transform`);
      if (t && n.moved) {
        b(n.moved);
      }
    }
  };
  const Component66 = `line`;
  const Component67 = `line`;
  const Component68 = `path`;
  const Component69 = `g`;
  const Component70 = `g`;
  const Component71 = `svg`;
  const Component72 = `button`;
  return <Component72 ref={e} type={`button`} tabIndex={l ? 0 : -1} aria-pressed={l} aria-label={l ? `${g}, selected. Drag or use the arrow keys to move it up or down` : `Adjust ${g}`} onClick={() => u(t)} onPointerDown={x} onPointerMove={S} onPointerUp={e => C(e, true)} onPointerCancel={e => C(e, false)} onKeyDown={e => {
    let t = e.key === `ArrowLeft` ? f : e.key === `ArrowRight` ? p : undefined;
    if (t !== undefined) {
      u(t);
      (e.key === `ArrowLeft` ? e.currentTarget.previousElementSibling : e.currentTarget.nextElementSibling)?.focus();
    } else if (l && e.key === `ArrowUp`) {
      b(-10);
    } else if (l && e.key === `ArrowDown`) {
      b(Qr);
    } else {
      return;
    }
    e.preventDefault();
  }} style={{
    aspectRatio: `${v.toFixed(0)} / ${H}`,
    touchAction: l ? `none` : undefined
  }} className={`h-full shrink-0 -outline-offset-2 focus-visible:outline-2 focus-visible:outline-(color:--focus) ${l ? `cursor-ns-resize bg-(--strip-picked)` : ``}`}><Component71 viewBox={`0 0 ${v.toFixed(0)} ${H}`} className={`block size-full`} aria-hidden={true}><Component66 x2={v} y1={920 - c} y2={920 - c} stroke={`currentColor`} strokeOpacity={0.22} strokeDasharray={`5 4`} vectorEffect={`non-scaling-stroke`} /><Component67 x2={v} y1={920} y2={920} stroke={`currentColor`} strokeOpacity={0.45} vectorEffect={`non-scaling-stroke`} /><Component70 ref={m}>{l && <_Component0 width={v} />}<Component69 className={`fill-hand`} transform={gt(a, y - r.xMin * a.scale)}>{n.map(e => <Component68 d={zr(e)} key={e.id} />)}</Component69></Component70></Component71></Component72>;
}
var ni = 526;
var ri = 686;
function ii(e, t) {
  if (e >= `a` && e <= `z`) {
    return t.xHeight / ni;
  } else if (e >= `0` && e <= `9`) {
    return t.digitHeight / ri;
  } else {
    return t.capHeight / ri;
  }
}
function ai(e, t, n, r = 1) {
  let i = [];
  for (let a of e) {
    let e = a === ` ` || t(a);
    let o = e ? 1 : ii(a, n) * r;
    let s = i[i.length - 1];
    if (s && s.hand === e && s.scale === o) {
      s.text += a;
    } else {
      i.push({
        text: a,
        hand: e,
        scale: o
      });
    }
  }
  return i;
}
function oi() {
  let {
    state: e
  } = Z();
  if (e.font) {
    return `"${e.font.family}", var(--font-display)`;
  } else {
    return `var(--font-display)`;
  }
}
function si({
  text: e,
  className: t,
  shrink: n = 1
}) {
  let {
    state: r
  } = Z();
  let i = oi();
  let a = ai(e, e => r.drawn.has(e.charCodeAt(0)), r.alignment.lines, n);
  const Component73 = `span`;
  const Component74 = `span`;
  const Component75 = `span`;
  const Component76 = `span`;
  const Component77 = `span`;
  return <Component77 className={t}><Component73 className={`sr-only`}>{e}</Component73><Component76 aria-hidden={true}>{a.map((e, t) => e.hand ? <Component74 className={`text-hand`} style={{
        fontFamily: i
      }} key={t}>{e.text}</Component74> : <Component75 className={`font-display font-normal text-placeholder`} style={{
        fontSize: `${e.scale.toFixed(3)}em`
      }} key={t}>{e.text}</Component75>)}</Component76></Component77>;
}
function ci(e, t, n) {
  let r = t.getBoundingClientRect();
  let i;
  let a = Infinity;
  let o = Infinity;
  for (let t of e) {
    let e = t.getBoundingClientRect();
    let s = (e.top - r.top) * n;
    if (s < 1) {
      continue;
    }
    let c = Math.abs(e.left - r.left);
    if (s < a - 1 || Math.abs(s - a) <= 1 && c < o) {
      i = t;
      a = s;
      o = c;
    }
  }
  return i;
}
function li({
  set: e,
  onSelect: t,
  Tile: _Component1,
  className: r,
  tileClassName: a
}) {
  let {
    state: o
  } = Z();
  let {
    codepoints: c
  } = e;
  let [l, u] = (0, i.useState)();
  let d = l ?? (c.includes(o.cp) ? o.cp : c[0]);
  const Component78 = `div`;
  return <Component78 role={`group`} aria-label={`${e.label} glyphs`} onKeyDown={e => {
    let t = document.activeElement;
    if (!(t instanceof HTMLElement) || t.parentElement !== e.currentTarget) {
      return;
    }
    let n = [...e.currentTarget.children];
    let r = n.indexOf(t);
    let i = e.key === `ArrowLeft` ? n[r - 1] : e.key === `ArrowRight` ? n[r + 1] : e.key === `ArrowUp` ? ci(n, t, -1) : e.key === `ArrowDown` ? ci(n, t, 1) : e.key === `Home` ? n[0] : e.key === `End` ? n[n.length - 1] : null;
    if (i !== null) {
      e.preventDefault();
      e.stopPropagation();
      i?.focus();
    }
  }} onFocus={e => u(Number(e.target.dataset.cp))} onBlur={e => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      u(undefined);
    }
  }} className={r}>{c.map(e => <_Component1 cp={e} drawn={o.drawn.has(e)} current={e === o.cp} tabIndex={e === d ? 0 : -1} onSelect={t} className={a} key={e} />)}</Component78>;
}
var ui = {
  top: 500,
  bottom: 0,
  name: `short letter`
};
var di = {
  top: 700,
  bottom: 0,
  name: `tall letter`
};
var fi = {
  top: 500,
  bottom: it,
  name: `letter with a tail`
};
var pi = {
  top: 700,
  bottom: it,
  name: `tall, with a tail`
};
var $ = (e, t, n) => ({
  top: e,
  bottom: t,
  name: n
});
var mi = {
  ...Object.fromEntries([...`acemnorsuvwxz`].map(e => [e, ui])),
  ...Object.fromEntries([...`bdfhiklt`].map(e => [e, di])),
  ...Object.fromEntries([...`gpqy`].map(e => [e, fi])),
  j: pi,
  ...Object.fromEntries([...`!?&#$%@`].map(e => [e, di])),
  ...Object.fromEntries([...`()[]{}|/\\`].map(e => [e, pi])),
  ".": $(120, 0, `dot on the line`),
  ",": $(120, -120, `mark on the line, dipping below`),
  ":": $(500, 0, `short mark`),
  ";": $(500, -120, `short mark, dipping below`),
  "'": $(700, 480, `mark at the top`),
  "\"": $(700, 480, `mark at the top`),
  "`": $(700, 480, `mark at the top`),
  "^": $(700, 420, `mark at the top`),
  "*": $(700, 380, `mark at the top`),
  "-": $(330, 170, `mark in the middle`),
  "~": $(330, 170, `mark in the middle`),
  "+": $(430, 70, `mark in the middle`),
  "=": $(380, 120, `mark in the middle`),
  "<": $(450, 50, `mark in the middle`),
  ">": $(450, 50, `mark in the middle`),
  _: $(-60, -180, `line below the line`)
};
var hi = e => mi[e] ?? di;
var gi = `about above after again air all also and animal answer any are around away back bad bear because bed been before best big black blue boat book box boy bread bring brown but buy cake call came can car carry cat city clean close cold come could cup cut dark day did dog done door down draw dream drink each early earth eat egg end even every eye face fall family far farm fast father feet few find fine fire fish five fly food foot form found four fox friend from front fruit full game garden gave get girl give glad good got grass great green grow had hand happy hard has have head hear heart help her here high hill him his hold home hope horse hot house how idea into iron island its jacket jam jar jazz job join joke journey joy judge juice jump just keep kept key kick kind king kiss kitchen kite knew know lake land large last late laugh lazy leaf learn left letter life light like line lion little live long look love low lucky made make many map mark may milk mix money moon more most mother move much music must name near never new next night nine noon north now number ocean off often old once only open orange other our out over own page paper park party past pen people picnic piece pink place plant play please pocket puzzle quick quiet quite queen question quiz rain read ready red rest rich ride right river road rock room round run sad said same saw say school sea seven she ship shop show side sing sister sit six sky sleep slow small snow some song soon south start stay still stop story street strong sugar summer sun swim table take talk tall tea tell ten than thank that the then there they thing think this three time today together told took tree try turn two under until upon use very visit voice wait walk warm was watch water wave way well went were west what when where which white who why wind window winter wish with word work world write yard year yellow yes yet you young zebra zero zest zip zone zoo`.split(` `);
var _i = {
  ".": [`Done. Next.`, `3.14`],
  ",": [`yes, no, maybe`],
  "!": [`Wow!`, `Stop!`],
  "?": [`Why?`, `Who?`],
  "'": [`it's`, `don't`],
  "\"": [`"hello"`],
  "-": [`well-made`, `x-ray`],
  ":": [`Note: yes`, `10:30`],
  ";": [`here; there`],
  "(": [`(maybe)`, `f(x)`],
  ")": [`(maybe)`, `f(x)`],
  "&": [`you & me`, `R&D`],
  "@": [`me@home.com`],
  "#": [`#1`, `#hand`],
  $: [`$5`, `$120`],
  "%": [`50%`, `100%`],
  "*": [`note*`, `2*3`],
  "/": [`and/or`, `1/2`],
  "+": [`1+1`, `+44`],
  "=": [`1+1=2`],
  _: [`snake_case`],
  "<": [`a < b`, `<tag>`],
  ">": [`a > b`, `<tag>`],
  "[": [`[note]`],
  "]": [`[note]`],
  "{": [`{ok}`],
  "}": [`{ok}`],
  "\\": [`C:\\files`],
  "|": [`this | that`],
  "^": [`x^2`],
  "`": ["`code`"],
  "~": [`~5 min`]
};
var vi = e => e >= `a` && e <= `z`;
var yi = e => e >= `A` && e <= `Z`;
var bi = e => e >= `0` && e <= `9`;
function xi(e, t, n) {
  let r = e.toLowerCase();
  let i = e => {
    let n = [...e].filter(e => e !== r);
    if (n.length) {
      return n.filter(t).length / n.length;
    } else {
      return 1;
    }
  };
  let a = gi.filter(e => e.includes(r)).map((e, t) => ({
    w: e,
    i: t,
    score: i(e)
  })).sort((e, t) => t.score - e.score || e.i - t.i).slice(0, n).map(({
    w: e
  }) => e);
  if (yi(e)) {
    return a.map(e => e.toUpperCase());
  } else {
    return a;
  }
}
function Si(e, t = () => false) {
  if (vi(e)) {
    return [`n${e}n o${e}o`, ...xi(e, t, 3)];
  } else if (yi(e)) {
    return [`H${e}H O${e}O`, ...xi(e, t, 2)];
  } else if (bi(e)) {
    return [`1${e}1 0${e}0`, `${e}0${e}${e}`, `0123456789`];
  } else {
    return [`n${e}n H${e}H`, ...(_i[e] ?? [])];
  }
}
var Ci = {
  tracking: -0.04,
  hand: {
    width: 1.0714,
    height: 0.857,
    before: 0.0893,
    lift: 0.2143
  },
  viewBox: {
    x: 0,
    y: 175,
    width: 1010,
    height: 800
  },
  paths: [`M174 219Q177 230 183 370Q189 509 193 675Q196 840 219 852Q243 863 249 861Q256 859 263 859Q270 859 277 862Q283 864 289 869Q294 873 298 879Q302 885 304 892Q305 898 305 905Q304 912 301 919Q299 925 294 931Q289 936 283 939Q277 943 270 944Q263 945 256 944Q249 944 243 940Q237 937 232 932Q227 927 224 921Q220 915 220 908Q219 901 220 894Q221 887 225 881Q228 875 233 870Q239 865 245 863Q252 860 259 859Q266 859 272 860Q279 862 285 866Q291 870 295 875Q300 881 302 887Q305 894 305 901Q305 908 303 915Q301 921 297 927Q293 933 279 942Q265 952 234 963Q203 973 170 963Q136 953 114 930Q92 907 79 876Q67 844 64 812Q61 779 60 709Q60 639 61 574Q63 509 68 396Q74 284 77 251Q80 218 83 212Q85 207 93 198Q100 189 106 187Q111 184 123 183Q134 181 140 183Q146 184 155 191Q165 198 168 203Q172 208 174 219Z`, `M24 397Q35 394 52 390Q68 386 100 382Q131 378 199 375Q267 373 274 375Q281 378 287 383Q293 388 297 394Q301 400 302 408Q304 415 303 422Q303 430 300 437Q297 443 292 449Q286 454 280 458Q273 462 266 463Q259 464 251 463Q244 462 237 459Q230 455 225 450Q220 444 217 438Q214 431 213 424Q212 416 213 409Q215 401 219 395Q222 388 228 384Q234 379 241 376Q247 373 255 372Q262 372 270 374Q277 376 283 380Q289 384 294 390Q299 396 301 403Q304 410 304 417Q304 425 301 432Q299 439 295 445Q290 451 284 455Q278 460 271 462Q264 464 202 475Q141 487 108 488Q76 489 53 487Q30 486 25 484Q19 482 11 476Q2 469 -1 464Q-4 459 -6 449Q-8 438 -5 427Q-2 417 2 412Q5 408 9 404Q14 401 24 397Z`, `M387 421Q390 433 396 525Q402 617 405 724Q408 831 428 855Q449 879 469 852Q490 825 492 794Q494 762 496 592Q498 421 504 410Q510 400 515 396Q520 392 531 387Q543 383 549 384Q556 384 567 389Q579 393 583 398Q588 402 593 413Q599 424 603 466Q607 507 610 578Q613 648 614 687Q614 726 612 823Q610 921 608 930Q607 939 603 948Q599 956 592 963Q585 969 577 973Q569 977 559 978Q550 980 541 978Q532 976 524 971Q516 967 509 960Q503 953 500 944Q496 936 495 926Q495 917 497 908Q499 899 504 891Q509 883 517 877Q524 872 533 868Q542 865 551 865Q560 865 569 868Q578 870 586 876Q593 881 599 889Q604 897 607 906Q609 915 609 924Q609 933 605 942Q602 951 596 958Q590 965 582 970Q574 975 565 977Q556 980 547 979Q538 978 529 974Q521 970 514 964Q507 958 502 950Q498 942 496 932Q494 923 488 825Q482 727 484 652Q485 576 492 499Q498 421 500 416Q503 410 511 401Q520 392 531 387Q543 383 555 385Q568 387 573 390Q579 393 587 403Q595 412 597 425Q600 437 594 602Q589 766 586 799Q582 832 573 865Q563 897 543 922Q522 947 492 961Q462 974 428 973Q394 972 366 956Q338 941 319 917Q299 892 290 862Q280 833 277 800Q273 767 271 729Q270 692 270 655Q270 617 272 583Q274 549 281 484Q288 419 290 413Q292 407 301 398Q309 389 315 386Q320 383 333 382Q345 380 351 382Q357 384 367 391Q377 398 381 403Q384 409 387 421Z`, `M827 508Q817 503 807 494Q798 485 766 481Q735 477 754 504Q773 532 802 552Q830 572 857 598Q883 624 894 655Q905 685 906 720Q907 754 901 785Q895 817 882 846Q870 874 848 902Q827 930 798 947Q770 965 734 970Q699 976 668 963Q636 950 629 946Q622 941 616 937Q610 934 606 928Q602 922 599 916Q597 909 597 902Q597 895 599 888Q602 882 606 876Q610 871 616 867Q622 863 629 861Q635 859 642 859Q649 860 656 862Q662 865 668 869Q673 874 677 880Q680 886 682 893Q683 900 683 907Q682 914 679 920Q676 926 671 931Q666 937 660 940Q654 943 647 944Q640 945 633 944Q626 943 620 940Q614 937 609 931Q604 926 601 920Q598 914 597 907Q597 900 598 893Q600 886 603 880Q607 874 612 869Q618 865 624 862Q631 860 638 859Q645 859 661 865Q678 871 711 865Q743 860 759 832Q774 805 779 773Q784 741 773 710Q762 680 709 641Q656 602 635 572Q614 543 611 511Q607 480 619 450Q631 420 658 399Q685 379 718 373Q752 367 784 374Q815 381 840 399Q866 418 878 432Q890 446 892 451Q894 456 895 467Q895 479 894 484Q892 489 885 498Q878 507 874 509Q869 512 858 514Q847 516 842 515Q836 514 827 508Z`, `M1013 873Q1015 881 1017 899Q1018 918 1015 928Q1011 939 1004 948Q997 957 988 963Q979 969 968 972Q957 975 946 974Q935 973 924 969Q914 965 905 958Q897 950 891 941Q886 931 883 920Q881 909 882 898Q884 887 888 877Q893 867 901 859Q909 851 918 845Q928 840 939 839Q951 837 962 839Q973 841 982 846Q992 851 1000 859Q1008 868 1012 878Q1017 888 1018 899Q1019 910 1017 921Q1014 932 1008 942Q1002 951 994 958Q985 966 975 970Q964 974 953 974Q942 975 931 972Q920 969 911 962Q902 956 895 947Q889 938 885 928Q882 918 880 906Q879 895 880 886Q881 878 884 870Q887 863 892 856Q897 849 904 844Q910 838 917 835Q925 831 933 829Q941 827 949 827Q958 828 966 830Q974 832 981 836Q988 840 995 846Q1001 851 1005 858Q1010 865 1013 873Z`]
};
function wi({
  className: e
}) {
  let {
    x: t,
    y: n,
    width: r,
    height: i
  } = Ci.viewBox;
  const Component79 = `span`;
  const Component80 = `path`;
  const Component81 = `svg`;
  const Component82 = `span`;
  return <Component82 role={`img`} aria-label={`Ductus`} className={`inline-flex shrink-0 items-end text-[1.75rem] ${e ?? ``}`}><Component79 aria-hidden={true} className={`font-wide leading-none tracking-[-0.04em]`}>{`duc`}</Component79><Component81 aria-hidden={true} viewBox={`${t} ${n} ${r} ${i}`} className={`mb-[0.2143em] ml-[0.0893em] h-[0.857em] w-[1.0714em] shrink-0 fill-hand`}>{Ci.paths.map(e => <Component80 d={e} key={e} />)}</Component81></Component82>;
}
var Ti = false;
var Ei = typeof navigator < `u` && /iPad|iPhone/.test(navigator.userAgent);
var Di = ({
  pointerType: e,
  pressure: t
}) => e === `pen` && t !== 0 || t > 0 && t < 0.5 || t > 0.5 && t < 1;
var Oi = (e, t) => Math.round(e * 10 ** t) / 10 ** t;
function ki({
  strokes: e,
  onStroke: t,
  label: n,
  className: r,
  children: a
}) {
  let o = (0, i.useRef)(null);
  let c = (0, i.useRef)(null);
  let l = (0, i.useRef)(null);
  let u = (0, i.useRef)(0);
  (0, i.useEffect)(() => {
    let e = o.current;
    let t = e => e.preventDefault();
    e.addEventListener(`touchstart`, t, {
      passive: false
    });
    e.addEventListener(`touchmove`, t, {
      passive: false
    });
    return () => {
      e.removeEventListener(`touchstart`, t);
      e.removeEventListener(`touchmove`, t);
      cancelAnimationFrame(u.current);
    };
  }, []);
  let d = () => {
    u.current = 0;
    let e = l.current;
    c.current?.setAttribute(`d`, e ? Lr(tt(e.pts, e.input, false)) : ``);
  };
  let f = () => {
    u.current ||= requestAnimationFrame(d);
  };
  let p = () => {
    l.current = null;
    cancelAnimationFrame(u.current);
    u.current = 0;
    c.current?.setAttribute(`d`, ``);
  };
  let m = (e, {
    rect: t,
    input: n
  }) => [Oi((e.clientX - t.left) / t.width * at, 1), Oi((e.clientY - t.top) / t.height * H, 1), n === `pen` ? Oi(e.pressure, 2) : 0.5];
  let h = (e, t) => {
    let n = e.pts[e.pts.length - 1];
    if (e.input === `pen` && e.pts.length > 1 && Math.hypot(t[0] - e.anchor[0], t[1] - e.anchor[1]) < e.px) {
      e.pts[e.pts.length - 1] = [t[0], t[1], Math.max(n[2], t[2])];
    } else if (t[0] !== n[0] || t[1] !== n[1]) {
      e.pts.push(t);
      e.anchor = t;
    }
  };
  const Component83 = `path`;
  const Component84 = `path`;
  const Component85 = `g`;
  const Component86 = `svg`;
  return <Component86 ref={o} viewBox={`0 0 ${at} ${H}`} className={`block aspect-2/1 w-full touch-none select-none [-webkit-touch-callout:none] ${r ?? ``}`} onPointerDown={e => {
    let t = e.pointerType === `pen`;
    if (t) {
      Ti = true;
    }
    if (e.pointerType === `touch` && Ti || e.pointerType === `mouse` && e.button !== 0) {
      return;
    }
    if (l.current) {
      if (!t || l.current.pointerType === `pen`) {
        return;
      }
      p();
    }
    e.currentTarget.setPointerCapture(e.pointerId);
    let n = e.currentTarget.getBoundingClientRect();
    let r = Di(e.nativeEvent) ? `pen` : e.pointerType === `touch` ? `touch` : `mouse`;
    let i = m(e.nativeEvent, {
      rect: n,
      input: r
    });
    let {
      pointerId: a,
      pointerType: o
    } = e;
    l.current = {
      pointerId: a,
      pointerType: o,
      input: r,
      rect: n,
      px: at / n.width,
      pts: [i],
      anchor: i
    };
    f();
  }} onPointerMove={e => {
    let t = l.current;
    if (!t || e.pointerId !== t.pointerId) {
      return;
    }
    let n = Ei ? [] : e.nativeEvent.getCoalescedEvents?.() ?? [];
    for (let r of n.length ? n : [e.nativeEvent]) {
      h(t, m(r, t));
    }
    f();
  }} onPointerUp={e => {
    let n = l.current;
    if (n && e.pointerId === n.pointerId) {
      p();
      t({
        id: lt(),
        input: n.input,
        pts: n.pts
      });
    }
  }} onPointerCancel={e => {
    if (l.current?.pointerId === e.pointerId) {
      p();
    }
  }} onContextMenu={e => e.preventDefault()} role={`img`} aria-label={n}>{a}<Component85 className={`fill-hand`}>{e.map(e => <Component83 d={zr(e)} key={e.id} />)}<Component84 ref={c} /></Component85></Component86>;
}
var Ai = () => () => {};
var ji = () => /Mac|iPhone|iPad/.test(navigator.platform) || /Mac OS/.test(navigator.userAgent);
function Mi() {
  return (0, i.useSyncExternalStore)(Ai, () => ji() ? `⌘` : `Ctrl+`, () => `⌘`);
}
export { U as $, _Component2 as A, Kt as B, lr as C, _Component5 as D, fr as E, $t as F, W as G, Lt as H, Qt as I, ct as J, Dt as K, tn as L, Kn as M, Z as N, _Component8 as O, Zt as P, st as Q, Wt as R, xr as S, mr as T, Ft as U, Nt as V, Rt as W, H as X, mt as Y, at as Z, Wr as _, m as _t, Si as a, S as at, jr as b, si as c, d as ct, oi as d, g as dt, D as et, Q as f, C as ft, Gr as g, x as gt, Jr as h, _ as ht, wi as i, j as it, qn as j, _Component as k, ii as l, f as lt, Yr as m, _Component6 as mt, ki as n, k as nt, hi as o, v as ot, $r as p, b as pt, gt as q, Ci as r, A as rt, li as s, p as st, Mi as t, E as tt, ai as u, h as ut, zr as v, o as vt, cr as w, Dr as x, Pr as y, Gt as z };