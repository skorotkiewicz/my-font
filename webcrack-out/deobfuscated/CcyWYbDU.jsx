//# allFunctionsCalledOnLoad
var e = Object.create;
var t = Object.defineProperty;
var n = Object.getOwnPropertyDescriptor;
var r = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf;
var a = Object.prototype.hasOwnProperty;
var o = (e, t) => () => {
  if (!t) {
    e((t = {
      exports: {}
    }).exports, t, t.exports);
    e = null;
  }
  return t.exports;
};
var s = (e, n) => {
  let r = {};
  for (var i in e) {
    t(r, i, {
      get: e[i],
      enumerable: true
    });
  }
  if (!n) {
    t(r, Symbol.toStringTag, {
      value: `Module`
    });
  }
  return r;
};
var c = (e, i, o, s) => {
  if (i && typeof i == `object` || typeof i == `function`) {
    var c = r(i);
    for (var l = 0, u = c.length, d; l < u; l++) {
      d = c[l];
      if (!a.call(e, d) && d !== o) {
        t(e, d, {
          get: (e => i[e]).bind(null, d),
          enumerable: !(s = n(i, d)) || s.enumerable
        });
      }
    }
  }
  return e;
};
var l = (n, r, o) => {
  o = n == null ? {} : e(i(n));
  return c(r || !n || !n.__esModule || !a.call(n, `default`) ? t(o, `default`, {
    value: n,
    enumerable: true
  }) : o, n);
};
export { s as n, l as r, o as t };