//# allFunctionsCalledOnLoad
import { t as e } from "./CcyWYbDU.js";
var t = e(e => {
  var t = Symbol.for(`react.transitional.element`);
  var n = Symbol.for(`react.portal`);
  var r = Symbol.for(`react.fragment`);
  var i = Symbol.for(`react.strict_mode`);
  var a = Symbol.for(`react.profiler`);
  var o = Symbol.for(`react.consumer`);
  var s = Symbol.for(`react.context`);
  var c = Symbol.for(`react.forward_ref`);
  var l = Symbol.for(`react.suspense`);
  var u = Symbol.for(`react.memo`);
  var d = Symbol.for(`react.lazy`);
  var f = Symbol.for(`react.activity`);
  var p = Symbol.for(`react.view_transition`);
  var m = Symbol.iterator;
  function h(e) {
    if (typeof e != `object` || !e) {
      return null;
    } else {
      e = m && e[m] || e[`@@iterator`];
      if (typeof e == `function`) {
        return e;
      } else {
        return null;
      }
    }
  }
  var g = {
    isMounted: function () {
      return false;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {}
  };
  var _ = Object.assign;
  var v = {};
  function y(e, t, n) {
    this.props = e;
    this.context = t;
    this.refs = v;
    this.updater = n || g;
  }
  y.prototype.isReactComponent = {};
  y.prototype.setState = function (e, t) {
    if (typeof e != `object` && typeof e != `function` && e != null) {
      throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);
    }
    this.updater.enqueueSetState(this, e, t, `setState`);
  };
  y.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
  };
  function b() {}
  b.prototype = y.prototype;
  function ee(e, t, n) {
    this.props = e;
    this.context = t;
    this.refs = v;
    this.updater = n || g;
  }
  var te = ee.prototype = new b();
  te.constructor = ee;
  _(te, y.prototype);
  te.isPureReactComponent = true;
  var ne = Array.isArray;
  function re() {}
  var x = {
    H: null,
    A: null,
    T: null,
    S: null
  };
  var ie = Object.prototype.hasOwnProperty;
  function S(e, n, r) {
    var i = r.ref;
    return {
      $$typeof: t,
      type: e,
      key: n,
      ref: i === undefined ? null : i,
      props: r
    };
  }
  function ae(e, t) {
    return S(e.type, t, e.props);
  }
  function oe(e) {
    return typeof e == `object` && !!e && e.$$typeof === t;
  }
  function se(e) {
    var t = {
      "=": `=0`,
      ":": `=2`
    };
    return `$${e.replace(/[=:]/g, function (e) {
      return t[e];
    })}`;
  }
  var ce = /\/+/g;
  function le(e, t) {
    if (typeof e == `object` && e && e.key != null) {
      return se(`${e.key}`);
    } else {
      return t.toString(36);
    }
  }
  function ue(e) {
    switch (e.status) {
      case `fulfilled`:
        return e.value;
      case `rejected`:
        throw e.reason;
      default:
        if (typeof e.status == `string`) {
          e.then(re, re);
        } else {
          e.status = `pending`;
          e.then(function (t) {
            if (e.status === `pending`) {
              e.status = `fulfilled`;
              e.value = t;
            }
          }, function (t) {
            if (e.status === `pending`) {
              e.status = `rejected`;
              e.reason = t;
            }
          });
        }
        switch (e.status) {
          case `fulfilled`:
            return e.value;
          case `rejected`:
            throw e.reason;
        }
    }
    throw e;
  }
  function de(e, r, i, a, o) {
    var s = typeof e;
    if (s === `undefined` || s === `boolean`) {
      e = null;
    }
    var c = false;
    if (e === null) {
      c = true;
    } else {
      switch (s) {
        case `bigint`:
        case `string`:
        case `number`:
          c = true;
          break;
        case `object`:
          switch (e.$$typeof) {
            case t:
            case n:
              c = true;
              break;
            case d:
              c = e._init;
              return de(c(e._payload), r, i, a, o);
          }
      }
    }
    if (c) {
      o = o(e);
      c = a === `` ? `.${le(e, 0)}` : a;
      if (ne(o)) {
        i = ``;
        if (c != null) {
          i = `${c.replace(ce, `$&/`)}/`;
        }
        de(o, r, i, ``, function (e) {
          return e;
        });
      } else if (o != null) {
        if (oe(o)) {
          o = ae(o, i + (o.key == null || e && e.key === o.key ? `` : `${`${o.key}`.replace(ce, `$&/`)}/`) + c);
        }
        r.push(o);
      }
      return 1;
    }
    c = 0;
    var l = a === `` ? `.` : `${a}:`;
    if (ne(e)) {
      for (var u = 0; u < e.length; u++) {
        a = e[u];
        s = l + le(a, u);
        c += de(a, r, i, s, o);
      }
    } else {
      u = h(e);
      if (typeof u == `function`) {
        e = u.call(e);
        u = 0;
        while (!(a = e.next()).done) {
          a = a.value;
          s = l + le(a, u++);
          c += de(a, r, i, s, o);
        }
      } else if (s === `object`) {
        if (typeof e.then == `function`) {
          return de(ue(e), r, i, a, o);
        }
        r = String(e);
        throw Error(`Objects are not valid as a React child (found: ${r === `[object Object]` ? `object with keys {${Object.keys(e).join(`, `)}}` : r}). If you meant to render a collection of children, use an array instead.`);
      }
    }
    return c;
  }
  function fe(e, t, n) {
    if (e == null) {
      return e;
    }
    var r = [];
    var i = 0;
    de(e, r, ``, ``, function (e) {
      return t.call(n, e, i++);
    });
    return r;
  }
  function pe(e) {
    if (e._status === -1) {
      var t = e._result;
      var n = t();
      n.then(function (t) {
        if (e._status === 0 || e._status === -1) {
          e._status = 1;
          e._result = t;
          if (n.status === undefined) {
            n.status = `fulfilled`;
            n.value = t;
          }
        }
      }, function (t) {
        if (e._status === 0 || e._status === -1) {
          e._status = 2;
          e._result = t;
          if (n.status === undefined) {
            n.status = `rejected`;
            n.reason = t;
          }
        }
      });
      if (e._status === -1) {
        e._status = 0;
        e._result = n;
      }
    }
    if (e._status === 1) {
      return e._result.default;
    }
    throw e._result;
  }
  var me = typeof reportError == `function` ? reportError : function (e) {
    if (typeof window.ErrorEvent == `function`) {
      var t = new window.ErrorEvent(`error`, {
        bubbles: true,
        cancelable: true,
        message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) {
        return;
      }
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e);
      return;
    }
    console.error(e);
  };
  function he(e) {
    var t = x.T;
    var n = {};
    n.types = t === null ? null : t.types;
    x.T = n;
    try {
      var r = e();
      var i = x.S;
      if (i !== null) {
        i(n, r);
      }
      if (typeof r == `object` && r && typeof r.then == `function`) {
        r.then(re, me);
      }
    } catch (e) {
      me(e);
    } finally {
      if (t !== null && n.types !== null) {
        t.types = n.types;
      }
      x.T = t;
    }
  }
  function ge(e) {
    var t = x.T;
    if (t !== null) {
      var n = t.types;
      if (n === null) {
        t.types = [e];
      } else if (n.indexOf(e) === -1) {
        n.push(e);
      }
    } else {
      he(ge.bind(null, e));
    }
  }
  var _e = {
    map: fe,
    forEach: function (e, t, n) {
      fe(e, function () {
        t.apply(this, arguments);
      }, n);
    },
    count: function (e) {
      var t = 0;
      fe(e, function () {
        t++;
      });
      return t;
    },
    toArray: function (e) {
      return fe(e, function (e) {
        return e;
      }) || [];
    },
    only: function (e) {
      if (!oe(e)) {
        throw Error(`React.Children.only expected to receive a single React element child.`);
      }
      return e;
    }
  };
  e.Activity = f;
  e.Children = _e;
  e.Component = y;
  e.Fragment = r;
  e.Profiler = a;
  e.PureComponent = ee;
  e.StrictMode = i;
  e.Suspense = l;
  e.ViewTransition = p;
  e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = x;
  e.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function (e) {
      return x.H.useMemoCache(e);
    }
  };
  e.addTransitionType = ge;
  e.cache = function (e) {
    return function () {
      return e.apply(null, arguments);
    };
  };
  e.cacheSignal = function () {
    return null;
  };
  e.cloneElement = function (e, t, n) {
    if (e == null) {
      throw Error(`The argument must be a React element, but you passed ${e}.`);
    }
    var r = _({}, e.props);
    var i = e.key;
    if (t != null) {
      if (t.key !== undefined) {
        i = `${t.key}`;
      }
      for (a in t) {
        if (!!ie.call(t, a) && a !== `key` && a !== `__self` && a !== `__source` && (a !== `ref` || t.ref !== undefined)) {
          r[a] = t[a];
        }
      }
    }
    var a = arguments.length - 2;
    if (a === 1) {
      r.children = n;
    } else if (a > 1) {
      var o = Array(a);
      for (var s = 0; s < a; s++) {
        o[s] = arguments[s + 2];
      }
      r.children = o;
    }
    return S(e.type, i, r);
  };
  e.createContext = function (e) {
    e = {
      $$typeof: s,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    };
    e.Provider = e;
    e.Consumer = {
      $$typeof: o,
      _context: e
    };
    return e;
  };
  e.createElement = function (e, t, n) {
    var r;
    var i = {};
    var a = null;
    if (t != null) {
      if (t.key !== undefined) {
        a = `${t.key}`;
      }
      for (r in t) {
        if (ie.call(t, r) && r !== `key` && r !== `__self` && r !== `__source`) {
          i[r] = t[r];
        }
      }
    }
    var o = arguments.length - 2;
    if (o === 1) {
      i.children = n;
    } else if (o > 1) {
      var s = Array(o);
      for (var c = 0; c < o; c++) {
        s[c] = arguments[c + 2];
      }
      i.children = s;
    }
    if (e && e.defaultProps) {
      o = e.defaultProps;
      for (r in o) {
        if (i[r] === undefined) {
          i[r] = o[r];
        }
      }
    }
    return S(e, a, i);
  };
  e.createRef = function () {
    return {
      current: null
    };
  };
  e.forwardRef = function (e) {
    return {
      $$typeof: c,
      render: e
    };
  };
  e.isValidElement = oe;
  e.lazy = function (e) {
    return {
      $$typeof: d,
      _payload: {
        _status: -1,
        _result: e
      },
      _init: pe
    };
  };
  e.memo = function (e, t) {
    return {
      $$typeof: u,
      type: e,
      compare: t === undefined ? null : t
    };
  };
  e.startTransition = he;
  e.unstable_useCacheRefresh = function () {
    return x.H.useCacheRefresh();
  };
  e.use = function (e) {
    return x.H.use(e);
  };
  e.useActionState = function (e, t, n) {
    return x.H.useActionState(e, t, n);
  };
  e.useCallback = function (e, t) {
    return x.H.useCallback(e, t);
  };
  e.useContext = function (e) {
    return x.H.useContext(e);
  };
  e.useDebugValue = function () {};
  e.useDeferredValue = function (e, t) {
    return x.H.useDeferredValue(e, t);
  };
  e.useEffect = function (e, t) {
    return x.H.useEffect(e, t);
  };
  e.useEffectEvent = function (e) {
    return x.H.useEffectEvent(e);
  };
  e.useId = function () {
    return x.H.useId();
  };
  e.useImperativeHandle = function (e, t, n) {
    return x.H.useImperativeHandle(e, t, n);
  };
  e.useInsertionEffect = function (e, t) {
    return x.H.useInsertionEffect(e, t);
  };
  e.useLayoutEffect = function (e, t) {
    return x.H.useLayoutEffect(e, t);
  };
  e.useMemo = function (e, t) {
    return x.H.useMemo(e, t);
  };
  e.useOptimistic = function (e, t) {
    return x.H.useOptimistic(e, t);
  };
  e.useReducer = function (e, t, n) {
    return x.H.useReducer(e, t, n);
  };
  e.useRef = function (e) {
    return x.H.useRef(e);
  };
  e.useState = function (e) {
    return x.H.useState(e);
  };
  e.useSyncExternalStore = function (e, t, n) {
    return x.H.useSyncExternalStore(e, t, n);
  };
  e.useTransition = function () {
    return x.H.useTransition();
  };
  e.version = `19.3.1`;
});
var n = e((e, n) => {
  n.exports = t();
});
var r = e(e => {
  var t = Symbol.for(`react.transitional.element`);
  var n = Symbol.for(`react.fragment`);
  function r(e, n, r) {
    var i = null;
    if (r !== undefined) {
      i = `${r}`;
    }
    if (n.key !== undefined) {
      i = `${n.key}`;
    }
    if (`key` in n) {
      r = {};
      for (var a in n) {
        if (a !== `key`) {
          r[a] = n[a];
        }
      }
    } else {
      r = n;
    }
    n = r.ref;
    return {
      $$typeof: t,
      type: e,
      key: i,
      ref: n === undefined ? null : n,
      props: r
    };
  }
  e.Fragment = n;
  e.jsx = r;
  e.jsxs = r;
});
var i = e((e, t) => {
  t.exports = r();
});
var a = e(e => {
  var t = n();
  function r(e) {
    var t = `https://react.dev/errors/${e}`;
    if (arguments.length > 1) {
      t += `?args[]=${encodeURIComponent(arguments[1])}`;
      for (var n = 2; n < arguments.length; n++) {
        t += `&args[]=${encodeURIComponent(arguments[n])}`;
      }
    }
    return `Minified React error #${e}; visit ${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function i() {}
  var a = {
    d: {
      f: i,
      r: function () {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  };
  var o = Symbol.for(`react.portal`);
  var s = Symbol.for(`react.recoverable`);
  var c = Symbol.for(`react.optimistic_key`);
  function l(e, t, n, r = null) {
    return {
      $$typeof: o,
      key: r == null ? null : r === c ? c : `${r}`,
      children: e,
      containerInfo: t,
      implementation: n
    };
  }
  var u = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function d(e, t) {
    if (e === `font`) {
      return ``;
    }
    if (typeof t == `string`) {
      if (t === `use-credentials`) {
        return t;
      } else {
        return ``;
      }
    }
  }
  e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = a;
  e.browser = function (e) {
    return {
      $$typeof: s,
      _reason: e
    };
  };
  e.createPortal = function (e, t, n = null) {
    if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11) {
      throw Error(r(299));
    }
    return l(e, t, null, n);
  };
  e.flushSync = function (e) {
    var t = u.T;
    var n = a.p;
    try {
      u.T = null;
      a.p = 2;
      if (e) {
        return e();
      }
    } finally {
      u.T = t;
      a.p = n;
      a.d.f();
    }
  };
  e.preconnect = function (e, t) {
    if (typeof e == `string`) {
      if (t) {
        t = t.crossOrigin;
        t = typeof t == `string` ? t === `use-credentials` ? t : `` : undefined;
      } else {
        t = null;
      }
      a.d.C(e, t);
    }
  };
  e.prefetchDNS = function (e) {
    if (typeof e == `string`) {
      a.d.D(e);
    }
  };
  e.preinit = function (e, t) {
    if (typeof e == `string` && t && typeof t.as == `string`) {
      var n = t.as;
      var r = d(n, t.crossOrigin);
      var i = typeof t.integrity == `string` ? t.integrity : undefined;
      var o = typeof t.fetchPriority == `string` ? t.fetchPriority : undefined;
      if (n === `style`) {
        a.d.S(e, typeof t.precedence == `string` ? t.precedence : undefined, {
          crossOrigin: r,
          integrity: i,
          fetchPriority: o
        });
      } else if (n === `script`) {
        a.d.X(e, {
          crossOrigin: r,
          integrity: i,
          fetchPriority: o,
          nonce: typeof t.nonce == `string` ? t.nonce : undefined
        });
      }
    }
  };
  e.preinitModule = function (e, t) {
    if (typeof e == `string`) {
      if (typeof t == `object` && t) {
        if (t.as == null || t.as === `script`) {
          var n = d(t.as, t.crossOrigin);
          a.d.M(e, {
            crossOrigin: n,
            integrity: typeof t.integrity == `string` ? t.integrity : undefined,
            nonce: typeof t.nonce == `string` ? t.nonce : undefined,
            fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : undefined
          });
        }
      } else {
        t ?? a.d.M(e);
      }
    }
  };
  e.preload = function (e, t) {
    if (typeof e == `string` && typeof t == `object` && t && typeof t.as == `string`) {
      var n = t.as;
      var r = d(n, t.crossOrigin);
      a.d.L(e, n, {
        crossOrigin: r,
        integrity: typeof t.integrity == `string` ? t.integrity : undefined,
        nonce: typeof t.nonce == `string` ? t.nonce : undefined,
        type: typeof t.type == `string` ? t.type : undefined,
        fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : undefined,
        referrerPolicy: typeof t.referrerPolicy == `string` ? t.referrerPolicy : undefined,
        imageSrcSet: typeof t.imageSrcSet == `string` ? t.imageSrcSet : undefined,
        imageSizes: typeof t.imageSizes == `string` ? t.imageSizes : undefined,
        media: typeof t.media == `string` ? t.media : undefined
      });
    }
  };
  e.preloadModule = function (e, t) {
    if (typeof e == `string`) {
      if (t) {
        var n = d(t.as, t.crossOrigin);
        a.d.m(e, {
          as: typeof t.as == `string` && t.as !== `script` ? t.as : undefined,
          crossOrigin: n,
          integrity: typeof t.integrity == `string` ? t.integrity : undefined,
          nonce: typeof t.nonce == `string` ? t.nonce : undefined,
          fetchPriority: typeof t.fetchPriority == `string` ? t.fetchPriority : undefined
        });
      } else {
        a.d.m(e);
      }
    }
  };
  e.requestFormReset = function (e) {
    a.d.r(e);
  };
  e.unstable_batchedUpdates = function (e, t) {
    return e(t);
  };
  e.useFormState = function (e, t, n) {
    return u.H.useFormState(e, t, n);
  };
  e.useFormStatus = function () {
    return u.H.useHostTransitionStatus();
  };
  e.version = `19.3.1`;
});
var o = e((e, t) => {
  function n() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (e) {
        console.error(e);
      }
    }
  }
  n();
  t.exports = a();
});
var s = e(e => {
  function t(e, t) {
    var n = e.length;
    e.push(t);
    a: while (n > 0) {
      var r = n - 1 >>> 1;
      var a = e[r];
      if (i(a, t) > 0) {
        e[r] = t;
        e[n] = a;
        n = r;
      } else {
        break a;
      }
    }
  }
  function n(e) {
    if (e.length === 0) {
      return null;
    } else {
      return e[0];
    }
  }
  function r(e) {
    if (e.length === 0) {
      return null;
    }
    var t = e[0];
    var n = e.pop();
    if (n !== t) {
      e[0] = n;
      a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
        var s = (r + 1) * 2 - 1;
        var c = e[s];
        var l = s + 1;
        var u = e[l];
        if (i(c, n) < 0) {
          if (l < a && i(u, c) < 0) {
            e[r] = u;
            e[l] = n;
            r = l;
          } else {
            e[r] = c;
            e[s] = n;
            r = s;
          }
        } else if (l < a && i(u, n) < 0) {
          e[r] = u;
          e[l] = n;
          r = l;
        } else {
          break a;
        }
      }
    }
    return t;
  }
  function i(e, t) {
    var n = e.sortIndex - t.sortIndex;
    if (n === 0) {
      return e.id - t.id;
    } else {
      return n;
    }
  }
  e.unstable_now = undefined;
  if (typeof performance == `object` && typeof performance.now == `function`) {
    var a = performance;
    e.unstable_now = function () {
      return a.now();
    };
  } else {
    var o = Date;
    var s = o.now();
    e.unstable_now = function () {
      return o.now() - s;
    };
  }
  var c = [];
  var l = [];
  var u = 1;
  var d = null;
  var f = 3;
  var p = false;
  var m = false;
  var h = false;
  var g = false;
  var _ = typeof setTimeout == `function` ? setTimeout : null;
  var v = typeof clearTimeout == `function` ? clearTimeout : null;
  var y = typeof setImmediate < `u` ? setImmediate : null;
  function b(e) {
    for (var i = n(l); i !== null;) {
      if (i.callback === null) {
        r(l);
      } else if (i.startTime <= e) {
        r(l);
        i.sortIndex = i.expirationTime;
        t(c, i);
      } else {
        break;
      }
      i = n(l);
    }
  }
  function ee(e) {
    h = false;
    b(e);
    if (!m) {
      if (n(c) !== null) {
        m = true;
        if (!te) {
          te = true;
          ae();
        }
      } else {
        var t = n(l);
        if (t !== null) {
          ce(ee, t.startTime - e);
        }
      }
    }
  }
  var te = false;
  var ne = -1;
  var re = 5;
  var x = -1;
  function ie() {
    if (g) {
      return true;
    } else {
      return !(e.unstable_now() - x < re);
    }
  }
  function S() {
    g = false;
    if (te) {
      var t = e.unstable_now();
      x = t;
      var i = true;
      try {
        a: {
          m = false;
          if (h) {
            h = false;
            v(ne);
            ne = -1;
          }
          p = true;
          var a = f;
          try {
            b: {
              b(t);
              d = n(c);
              while (d !== null && (!(d.expirationTime > t) || !ie())) {
                var o = d.callback;
                if (typeof o == `function`) {
                  d.callback = null;
                  f = d.priorityLevel;
                  var s = o(d.expirationTime <= t);
                  t = e.unstable_now();
                  if (typeof s == `function`) {
                    d.callback = s;
                    b(t);
                    i = true;
                    break b;
                  }
                  if (d === n(c)) {
                    r(c);
                  }
                  b(t);
                } else {
                  r(c);
                }
                d = n(c);
              }
              if (d !== null) {
                i = true;
              } else {
                var u = n(l);
                if (u !== null) {
                  ce(ee, u.startTime - t);
                }
                i = false;
              }
            }
            break a;
          } finally {
            d = null;
            f = a;
            p = false;
          }
          i = undefined;
        }
      } finally {
        if (i) {
          ae();
        } else {
          te = false;
        }
      }
    }
  }
  var ae;
  if (typeof y == `function`) {
    ae = function () {
      y(S);
    };
  } else if (typeof MessageChannel < `u`) {
    var oe = new MessageChannel();
    var se = oe.port2;
    oe.port1.onmessage = S;
    ae = function () {
      se.postMessage(null);
    };
  } else {
    ae = function () {
      _(S, 0);
    };
  }
  function ce(t, n) {
    ne = _(function () {
      t(e.unstable_now());
    }, n);
  }
  e.unstable_IdlePriority = 5;
  e.unstable_ImmediatePriority = 1;
  e.unstable_LowPriority = 4;
  e.unstable_NormalPriority = 3;
  e.unstable_Profiling = null;
  e.unstable_UserBlockingPriority = 2;
  e.unstable_cancelCallback = function (e) {
    e.callback = null;
  };
  e.unstable_forceFrameRate = function (e) {
    if (e < 0 || e > 125) {
      console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`);
    } else {
      re = e > 0 ? Math.floor(1000 / e) : 5;
    }
  };
  e.unstable_getCurrentPriorityLevel = function () {
    return f;
  };
  e.unstable_next = function (e) {
    switch (f) {
      case 1:
      case 2:
      case 3:
        var t = 3;
        break;
      default:
        t = f;
    }
    var n = f;
    f = t;
    try {
      return e();
    } finally {
      f = n;
    }
  };
  e.unstable_requestPaint = function () {
    g = true;
  };
  e.unstable_runWithPriority = function (e, t) {
    switch (e) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        e = 3;
    }
    var n = f;
    f = e;
    try {
      return t();
    } finally {
      f = n;
    }
  };
  e.unstable_scheduleCallback = function (r, i, a) {
    var o = e.unstable_now();
    if (typeof a == `object` && a) {
      a = a.delay;
      a = typeof a == `number` && a > 0 ? o + a : o;
    } else {
      a = o;
    }
    switch (r) {
      case 1:
        var s = -1;
        break;
      case 2:
        s = 250;
        break;
      case 5:
        s = 1073741823;
        break;
      case 4:
        s = 10000;
        break;
      default:
        s = 5000;
    }
    s = a + s;
    r = {
      id: u++,
      callback: i,
      priorityLevel: r,
      startTime: a,
      expirationTime: s,
      sortIndex: -1
    };
    if (a > o) {
      r.sortIndex = a;
      t(l, r);
      if (n(c) === null && r === n(l)) {
        if (h) {
          v(ne);
          ne = -1;
        } else {
          h = true;
        }
        ce(ee, a - o);
      }
    } else {
      r.sortIndex = s;
      t(c, r);
      if (!m && !p) {
        m = true;
        if (!te) {
          te = true;
          ae();
        }
      }
    }
    return r;
  };
  e.unstable_shouldYield = ie;
  e.unstable_wrapCallback = function (e) {
    var t = f;
    return function () {
      var n = f;
      f = t;
      try {
        return e.apply(this, arguments);
      } finally {
        f = n;
      }
    };
  };
});
var c = e((e, t) => {
  t.exports = s();
});
var l = e(e => {
  var t = c();
  var r = n();
  var i = o();
  function a(e) {
    var t = `https://react.dev/errors/${e}`;
    if (arguments.length > 1) {
      t += `?args[]=${encodeURIComponent(arguments[1])}`;
      for (var n = 2; n < arguments.length; n++) {
        t += `&args[]=${encodeURIComponent(arguments[n])}`;
      }
    }
    return `Minified React error #${e}; visit ${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  function s(e) {
    return !!e && (e.nodeType === 1 || e.nodeType === 9 || e.nodeType === 11);
  }
  function l(e) {
    var t = e;
    for (var n = t; n && !n.alternate;) {
      t = n;
      if (t.flags & 4098) {
        e = t.return;
      }
      n = t.return;
    }
    while (t.return) {
      t = t.return;
    }
    if (t.tag === 3) {
      return e;
    } else {
      return null;
    }
  }
  function u(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null) {
        e = e.alternate;
        if (e !== null) {
          t = e.memoizedState;
        }
      }
      if (t !== null) {
        return t.dehydrated;
      }
    }
    return null;
  }
  function d(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null) {
        e = e.alternate;
        if (e !== null) {
          t = e.memoizedState;
        }
      }
      if (t !== null) {
        return t.dehydrated;
      }
    }
    return null;
  }
  function f(e) {
    if (l(e) !== e) {
      throw Error(a(188));
    }
  }
  function p(e) {
    var t = e.alternate;
    if (!t) {
      t = l(e);
      if (t === null) {
        throw Error(a(188));
      }
      if (t === e) {
        return e;
      } else {
        return null;
      }
    }
    var n = e;
    var r = t;
    while (true) {
      var i = n.return;
      if (i === null) {
        break;
      }
      var o = i.alternate;
      if (o === null) {
        r = i.return;
        if (r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (i.child === o.child) {
        for (o = i.child; o;) {
          if (o === n) {
            f(i);
            return e;
          }
          if (o === r) {
            f(i);
            return t;
          }
          o = o.sibling;
        }
        throw Error(a(188));
      }
      if (n.return !== r.return) {
        n = i;
        r = o;
      } else {
        var s = false;
        for (var c = i.child; c;) {
          if (c === n) {
            s = true;
            n = i;
            r = o;
            break;
          }
          if (c === r) {
            s = true;
            r = i;
            n = o;
            break;
          }
          c = c.sibling;
        }
        if (!s) {
          for (c = o.child; c;) {
            if (c === n) {
              s = true;
              n = o;
              r = i;
              break;
            }
            if (c === r) {
              s = true;
              r = o;
              n = i;
              break;
            }
            c = c.sibling;
          }
          if (!s) {
            throw Error(a(189));
          }
        }
      }
      if (n.alternate !== r) {
        throw Error(a(190));
      }
    }
    if (n.tag !== 3) {
      throw Error(a(188));
    }
    if (n.stateNode.current === n) {
      return e;
    } else {
      return t;
    }
  }
  function m(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) {
      return e;
    }
    for (e = e.child; e !== null;) {
      t = m(e);
      if (t !== null) {
        return t;
      }
      e = e.sibling;
    }
    return null;
  }
  function h(e, t, n, r, i, a) {
    while (e !== null) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && h(e.child, t, n, r, i, a)) {
        return true;
      }
      e = e.sibling;
    }
    return false;
  }
  function g(e) {
    for (e = e.return; e !== null;) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) {
        return e;
      }
      e = e.return;
    }
    return null;
  }
  function _(e) {
    var t = false;
    for (e = e.return; e !== null && (e.tag === 4 && (t = true), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);) {
      e = e.return;
    }
    return t;
  }
  function v(e) {
    var t = [null, null];
    var n = g(e);
    if (n !== null) {
      y(t, e, n.child, {
        foundSelf: false
      });
    }
    return t;
  }
  function y(e, t, n, r) {
    while (n !== null) {
      if (n === t) {
        r.foundSelf = true;
      } else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (r.foundSelf) {
          e[1] = n;
          return true;
        }
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && y(e, t, n.child, r)) {
        return true;
      }
      n = n.sibling;
    }
    return false;
  }
  function b(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(a(559));
    }
  }
  var ee = null;
  var te = null;
  function ne(e, t, n) {
    return e === n || e === t && (ee = e, true);
  }
  function re(e, t, n) {
    if (e === n) {
      te = e;
      return false;
    } else {
      return e === t && (te !== null && (ee = e), true);
    }
  }
  function x(e) {
    if (e === null) {
      return null;
    }
    do {
      e = e === null ? null : e.return;
    } while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function ie(e, t, n) {
    var r = 0;
    for (var i = e; i; i = n(i)) {
      r++;
    }
    i = 0;
    for (var a = t; a; a = n(a)) {
      i++;
    }
    while (r - i > 0) {
      e = n(e);
      r--;
    }
    while (i - r > 0) {
      t = n(t);
      i--;
    }
    while (r--) {
      if (e === t || t !== null && e === t.alternate) {
        return e;
      }
      e = n(e);
      t = n(t);
    }
    return null;
  }
  var S = Object.assign;
  var ae = Symbol.for(`react.element`);
  var oe = Symbol.for(`react.transitional.element`);
  var se = Symbol.for(`react.portal`);
  var ce = Symbol.for(`react.fragment`);
  var le = Symbol.for(`react.strict_mode`);
  var ue = Symbol.for(`react.profiler`);
  var de = Symbol.for(`react.consumer`);
  var fe = Symbol.for(`react.context`);
  var pe = Symbol.for(`react.forward_ref`);
  var me = Symbol.for(`react.suspense`);
  var he = Symbol.for(`react.suspense_list`);
  var ge = Symbol.for(`react.memo`);
  var _e = Symbol.for(`react.lazy`);
  var ve = Symbol.for(`react.activity`);
  var ye = Symbol.for(`react.legacy_hidden`);
  var be = Symbol.for(`react.memo_cache_sentinel`);
  var xe = Symbol.for(`react.view_transition`);
  var Se = Symbol.for(`react.recoverable`);
  var Ce = Symbol.iterator;
  function we(e) {
    if (typeof e != `object` || !e) {
      return null;
    } else {
      e = Ce && e[Ce] || e[`@@iterator`];
      if (typeof e == `function`) {
        return e;
      } else {
        return null;
      }
    }
  }
  var Te = Symbol.for(`react.client.reference`);
  function Ee(e) {
    if (e == null) {
      return null;
    }
    if (typeof e == `function`) {
      if (e.$$typeof === Te) {
        return null;
      } else {
        return e.displayName || e.name || null;
      }
    }
    if (typeof e == `string`) {
      return e;
    }
    switch (e) {
      case ce:
        return `Fragment`;
      case ue:
        return `Profiler`;
      case le:
        return `StrictMode`;
      case me:
        return `Suspense`;
      case he:
        return `SuspenseList`;
      case ve:
        return `Activity`;
      case xe:
        return `ViewTransition`;
    }
    if (typeof e == `object`) {
      switch (e.$$typeof) {
        case se:
          return `Portal`;
        case fe:
          return e.displayName || `Context`;
        case de:
          return `${e._context.displayName || `Context`}.Consumer`;
        case pe:
          var t = e.render;
          e = e.displayName;
          e ||= (e = t.displayName || t.name || ``, e === `` ? `ForwardRef` : `ForwardRef(${e})`);
          return e;
        case ge:
          t = e.displayName || null;
          if (t === null) {
            return Ee(e.type) || `Memo`;
          } else {
            return t;
          }
        case _e:
          t = e._payload;
          e = e._init;
          try {
            return Ee(e(t));
          } catch {}
      }
    }
    return null;
  }
  var De = Array.isArray;
  var C = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  var w = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  var Oe = {
    pending: false,
    data: null,
    method: null,
    action: null
  };
  var ke = [];
  var Ae = -1;
  function je(e) {
    return {
      current: e
    };
  }
  function Me(e) {
    if (!(Ae < 0)) {
      e.current = ke[Ae];
      ke[Ae] = null;
      Ae--;
    }
  }
  function T(e, t) {
    Ae++;
    ke[Ae] = e.current;
    e.current = t;
  }
  var Ne = je(null);
  var Pe = je(null);
  var Fe = je(null);
  var Ie = je(null);
  function Le(e, t) {
    T(Fe, t);
    T(Pe, e);
    T(Ne, null);
    switch (t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
        break;
      default:
        e = t.tagName;
        if (t = t.namespaceURI) {
          t = up(t);
          e = dp(t, e);
        } else {
          switch (e) {
            case `svg`:
              e = 1;
              break;
            case `math`:
              e = 2;
              break;
            default:
              e = 0;
          }
        }
    }
    Me(Ne);
    T(Ne, e);
  }
  function Re() {
    Me(Ne);
    Me(Pe);
    Me(Fe);
  }
  function ze(e) {
    var t = e.memoizedState;
    if (t !== null) {
      sh._currentValue = t.memoizedState;
      T(Ie, e);
    }
    t = Ne.current;
    var n = dp(t, e.type);
    if (t !== n) {
      T(Pe, e);
      T(Ne, n);
    }
  }
  function Be(e) {
    if (Pe.current === e) {
      Me(Ne);
      Me(Pe);
    }
    if (Ie.current === e) {
      Me(Ie);
      sh._currentValue = Oe;
    }
  }
  var Ve;
  var He;
  function Ue(e) {
    if (Ve === undefined) {
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Ve = t && t[1] || ``;
        He = e.stack.indexOf(`
    at`) > -1 ? ` (<anonymous>)` : e.stack.indexOf(`@`) > -1 ? `@unknown:0:0` : ``;
      }
    }
    return `
${Ve}${e}${He}`;
  }
  var We = false;
  function Ge(e, t) {
    if (!e || We) {
      return ``;
    }
    We = true;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = undefined;
    try {
      var r = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              function n() {
                throw Error();
              }
              Object.defineProperty(n.prototype, "props", {
                set: function () {
                  throw Error();
                }
              });
              if (typeof Reflect == `object` && Reflect.construct) {
                try {
                  Reflect.construct(n, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], n);
              } else {
                try {
                  n.call();
                } catch (e) {
                  r = e;
                }
                n = false;
                try {
                  var i = Object.getOwnPropertyDescriptor(e.prototype, `props`);
                  Object.defineProperty(e.prototype, "props", {
                    configurable: true,
                    set: function () {
                      throw Error();
                    }
                  });
                  n = true;
                  new e();
                } finally {
                  if (n) {
                    if (i === undefined) {
                      delete e.prototype.props;
                    } else {
                      Object.defineProperty(e.prototype, "props", i);
                    }
                  }
                }
              }
            } else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              if ((n = e()) && typeof n.catch == `function`) {
                n.catch(function () {});
              }
            }
          } catch (e) {
            if (e && r && typeof e.stack == `string`) {
              return [e.stack, r.stack];
            }
          }
          return [null, null];
        }
      };
      r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
      var i = Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot, `name`);
      if (i && i.configurable) {
        Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
          value: `DetermineComponentFrameRoot`
        });
      }
      var a = r.DetermineComponentFrameRoot();
      var o = a[0];
      var s = a[1];
      if (o && s) {
        var c = o.split(`
`);
        var l = s.split(`
`);
        for (i = r = 0; r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);) {
          r++;
        }
        while (i < l.length && !l[i].includes(`DetermineComponentFrameRoot`)) {
          i++;
        }
        if (r === c.length || i === l.length) {
          r = c.length - 1;
          i = l.length - 1;
          while (r >= 1 && i >= 0 && c[r] !== l[i]) {
            i--;
          }
        }
        for (; r >= 1 && i >= 0; r--, i--) {
          if (c[r] !== l[i]) {
            if (r !== 1 || i !== 1) {
              do {
                r--;
                i--;
                if (i < 0 || c[r] !== l[i]) {
                  var u = `
${c[r].replace(` at new `, ` at `)}`;
                  if (e.displayName && u.includes(`<anonymous>`)) {
                    u = u.replace(`<anonymous>`, e.displayName);
                  }
                  return u;
                }
              } while (r >= 1 && i >= 0);
            }
            break;
          }
        }
      }
    } finally {
      We = false;
      Error.prepareStackTrace = n;
    }
    if (n = e ? e.displayName || e.name : ``) {
      return Ue(n);
    } else {
      return ``;
    }
  }
  function Ke(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ue(e.type);
      case 16:
        return Ue(`Lazy`);
      case 13:
        if (e.child !== t && t !== null) {
          return Ue(`Suspense Fallback`);
        } else {
          return Ue(`Suspense`);
        }
      case 19:
        return Ue(`SuspenseList`);
      case 0:
      case 15:
        return Ge(e.type, false);
      case 11:
        return Ge(e.type.render, false);
      case 1:
        return Ge(e.type, true);
      case 31:
        return Ue(`Activity`);
      case 30:
        return Ue(`ViewTransition`);
      default:
        return ``;
    }
  }
  function qe(e) {
    try {
      var t = ``;
      var n = null;
      do {
        t += Ke(e, n);
        n = e;
        e = e.return;
      } while (e);
      return t;
    } catch (e) {
      return `
Error generating stack: ${e.message}
${e.stack}`;
    }
  }
  var Je = Object.prototype.hasOwnProperty;
  var Ye = t.unstable_scheduleCallback;
  var Xe = t.unstable_cancelCallback;
  var Ze = t.unstable_shouldYield;
  var Qe = t.unstable_requestPaint;
  var $e = t.unstable_now;
  var et = t.unstable_getCurrentPriorityLevel;
  var tt = t.unstable_ImmediatePriority;
  var nt = t.unstable_UserBlockingPriority;
  var rt = t.unstable_NormalPriority;
  var it = t.unstable_LowPriority;
  var at = t.unstable_IdlePriority;
  var ot = t.log;
  var st = t.unstable_setDisableYieldValue;
  var ct = null;
  var lt = null;
  function ut(e) {
    if (typeof ot == `function`) {
      st(e);
    }
    if (lt && typeof lt.setStrictMode == `function`) {
      try {
        lt.setStrictMode(ct, e);
      } catch {}
    }
  }
  var dt = Math.clz32 ? Math.clz32 : mt;
  var ft = Math.log;
  var pt = Math.LN2;
  function mt(e) {
    e >>>= 0;
    if (e === 0) {
      return 32;
    } else {
      return 31 - (ft(e) / pt | 0) | 0;
    }
  }
  var ht = 256;
  var gt = 262144;
  var _t = 4194304;
  function vt(e) {
    var t = e & 42;
    if (t !== 0) {
      return t;
    }
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function yt(e, t, n) {
    var r = e.pendingLanes;
    if (r === 0) {
      return 0;
    }
    var i = 0;
    var a = e.suspendedLanes;
    var o = e.pingedLanes;
    e = e.warmLanes;
    var s = r & 134217727;
    if (s === 0) {
      s = r & ~a;
      if (s === 0) {
        if (o === 0) {
          if (!n) {
            n = r & ~e;
            if (n !== 0) {
              i = vt(n);
            }
          }
        } else {
          i = vt(o);
        }
      } else {
        i = vt(s);
      }
    } else {
      r = s & ~a;
      if (r === 0) {
        o &= s;
        if (o === 0) {
          if (!n) {
            n = s & ~e;
            if (n !== 0) {
              i = vt(n);
            }
          }
        } else {
          i = vt(o);
        }
      } else {
        i = vt(r);
      }
    }
    if (i === 0) {
      return 0;
    } else if (t !== 0 && t !== i && (t & a) === 0 && (a = i & -i, n = t & -t, a >= n || a === 32 && n & 4194048)) {
      return t;
    } else {
      return i;
    }
  }
  function bt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function xt(e, t) {
    if (t & 8) {
      t |= t & 32;
    }
    var n = e.entangledLanes;
    if (n !== 0) {
      e = e.entanglements;
      n &= t;
      while (n > 0) {
        var r = 31 - dt(n);
        var i = 1 << r;
        t |= e[r];
        n &= ~i;
      }
    }
    return t;
  }
  function St(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5000;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ct() {
    var e = _t;
    _t <<= 1;
    if (!(_t & 62914560)) {
      _t = 4194304;
    }
    return e;
  }
  function wt(e) {
    var t = [];
    for (var n = 0; n < 31; n++) {
      t.push(e);
    }
    return t;
  }
  function Tt(e, t) {
    e.pendingLanes |= t;
    if (t !== 268435456) {
      e.suspendedLanes = 0;
      e.pingedLanes = 0;
      e.warmLanes = 0;
    }
  }
  function Et(e, t, n, r, i, a) {
    var o = e.pendingLanes;
    e.pendingLanes = n;
    e.suspendedLanes = 0;
    e.pingedLanes = 0;
    e.warmLanes = 0;
    e.expiredLanes &= n;
    e.entangledLanes &= n;
    e.errorRecoveryDisabledLanes &= n;
    e.shellSuspendCounter = 0;
    var s = e.entanglements;
    var c = e.expirationTimes;
    var l = e.hiddenUpdates;
    for (n = o & ~n; n > 0;) {
      var u = 31 - dt(n);
      var d = 1 << u;
      s[u] = 0;
      c[u] = -1;
      var f = l[u];
      if (f !== null) {
        l[u] = null;
        u = 0;
        for (; u < f.length; u++) {
          var p = f[u];
          if (p !== null) {
            p.lane &= -536870913;
          }
        }
      }
      n &= ~d;
    }
    if (r !== 0) {
      Dt(e, r, 0);
    }
    if (a !== 0 && i === 0 && e.tag !== 0) {
      e.suspendedLanes |= a & ~(o & ~t);
    }
  }
  function Dt(e, t, n) {
    e.pendingLanes |= t;
    e.suspendedLanes &= ~t;
    var r = 31 - dt(t);
    e.entangledLanes |= t;
    e.entanglements[r] = e.entanglements[r] | 1073741824 | n & 261930;
  }
  function Ot(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
      var r = 31 - dt(n);
      var i = 1 << r;
      if (i & t | e[r] & t) {
        e[r] |= t;
      }
      n &= ~i;
    }
  }
  function kt(e, t) {
    var n = t & -t;
    n = n & 42 ? 1 : At(n);
    if ((n & (e.suspendedLanes | t)) === 0) {
      return n;
    } else {
      return 0;
    }
  }
  function At(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function jt(e) {
    e &= -e;
    if (e > 2) {
      if (e > 8) {
        if (e & 134217727) {
          return 32;
        } else {
          return 268435456;
        }
      } else {
        return 8;
      }
    } else {
      return 2;
    }
  }
  function Mt() {
    var e = w.p;
    if (e === 0) {
      e = window.event;
      if (e === undefined) {
        return 32;
      } else {
        return Ch(e.type);
      }
    } else {
      return e;
    }
  }
  function Nt(e, t) {
    var n = w.p;
    try {
      w.p = e;
      return t();
    } finally {
      w.p = n;
    }
  }
  var Pt = Math.random().toString(36).slice(2);
  var Ft = `__reactFiber$${Pt}`;
  var It = `__reactProps$${Pt}`;
  var Lt = `__reactContainer$${Pt}`;
  var Rt = `__reactEvents$${Pt}`;
  var zt = `__reactListeners$${Pt}`;
  var Bt = `__reactHandles$${Pt}`;
  var Vt = `__reactResources$${Pt}`;
  var Ht = `__reactMarker$${Pt}`;
  var Ut = `__reactLoad$${Pt}`;
  function Wt(e) {
    delete e[Ft];
    delete e[It];
    delete e[zt];
    delete e[Bt];
  }
  function Gt(e) {
    var t;
    if (t = e[Ft]) {
      return t;
    }
    for (var n = e.parentNode; n;) {
      if (t = n[Lt] || n[Ft]) {
        n = t.alternate;
        if (t.child !== null || n !== null && n.child !== null) {
          for (e = fm(e); e !== null;) {
            if (n = e[Ft]) {
              return n;
            }
            e = fm(e);
          }
        }
        return t;
      }
      e = n;
      n = e.parentNode;
    }
    return null;
  }
  function Kt(e) {
    if (e = e[Ft] || e[Lt]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) {
        return e;
      }
    }
    return null;
  }
  function qt(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) {
      return e.stateNode;
    }
    throw Error(a(33));
  }
  function Jt(e) {
    var t = e[Vt];
    t ||= e[Vt] = {
      hoistableStyles: new Map(),
      hoistableScripts: new Map()
    };
    return t;
  }
  function E(e) {
    e[Ht] = true;
  }
  function Yt(e) {
    e[Ut] = undefined;
  }
  var Xt = new Set();
  var Zt = {};
  function Qt(e, t) {
    $t(e, t);
    $t(`${e}Capture`, t);
  }
  function $t(e, t) {
    Zt[e] = t;
    e = 0;
    for (; e < t.length; e++) {
      Xt.add(t[e]);
    }
  }
  var en = RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`);
  var tn = {};
  var nn = {};
  function rn(e) {
    if (Je.call(nn, e)) {
      return true;
    } else if (Je.call(tn, e)) {
      return false;
    } else if (en.test(e)) {
      return nn[e] = true;
    } else {
      tn[e] = true;
      return false;
    }
  }
  var D = false;
  function an() {
    var e = D;
    D = false;
    return e;
  }
  function on(e, t, n) {
    if (rn(t)) {
      if (n === null) {
        e.removeAttribute(t);
      } else {
        switch (typeof n) {
          case `undefined`:
          case `function`:
          case `symbol`:
            e.removeAttribute(t);
            return;
          case `boolean`:
            var r = t.toLowerCase().slice(0, 5);
            if (r !== `data-` && r !== `aria-`) {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, n);
      }
    }
  }
  function sn(e, t, n) {
    if (n === null) {
      e.removeAttribute(t);
    } else {
      switch (typeof n) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, n);
    }
  }
  function cn(e, t, n, r) {
    if (r === null) {
      e.removeAttribute(n);
    } else {
      switch (typeof r) {
        case `undefined`:
        case `function`:
        case `symbol`:
        case `boolean`:
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, r);
    }
  }
  function ln(e) {
    switch (typeof e) {
      case `bigint`:
      case `boolean`:
      case `number`:
      case `string`:
      case `undefined`:
        return e;
      case `object`:
        return e;
      default:
        return ``;
    }
  }
  function un(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === `input` && (t === `checkbox` || t === `radio`);
  }
  function dn(e, t, n) {
    var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
    if (!e.hasOwnProperty(t) && r !== undefined && typeof r.get == `function` && typeof r.set == `function`) {
      var i = r.get;
      var a = r.set;
      Object.defineProperty(e, t, {
        configurable: true,
        get: function () {
          return i.call(this);
        },
        set: function (e) {
          n = `${e}`;
          a.call(this, e);
        }
      });
      Object.defineProperty(e, t, {
        enumerable: r.enumerable
      });
      return {
        getValue: function () {
          return n;
        },
        setValue: function (e) {
          n = `${e}`;
        },
        stopTracking: function () {
          e._valueTracker = null;
          delete e[t];
        }
      };
    }
  }
  function fn(e) {
    if (!e._valueTracker) {
      var t = un(e) ? `checked` : `value`;
      e._valueTracker = dn(e, t, `${e[t]}`);
    }
  }
  function pn(e) {
    if (!e) {
      return false;
    }
    var t = e._valueTracker;
    if (!t) {
      return true;
    }
    var n = t.getValue();
    var r = ``;
    if (e) {
      r = un(e) ? e.checked ? `true` : `false` : e.value;
    }
    e = r;
    return e !== n && (t.setValue(e), true);
  }
  var mn = /[\n"\\]/g;
  function hn(e) {
    return e.replace(mn, function (e) {
      return `\\${e.charCodeAt(0).toString(16)} `;
    });
  }
  function gn(e, t, n, r, i, a, o, s) {
    e.name = ``;
    if (o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`) {
      e.type = o;
    } else {
      e.removeAttribute(`type`);
    }
    if (t == null) {
      if (o === `submit` || o === `reset`) {
        e.removeAttribute(`value`);
      }
    } else if (o === `number`) {
      if (t === 0 && e.value === `` || e.value != t) {
        e.value = `${ln(t)}`;
      }
    } else if (e.value !== `${ln(t)}`) {
      e.value = `${ln(t)}`;
    }
    if (t == null) {
      if (n == null) {
        if (r != null) {
          e.removeAttribute(`value`);
        }
      } else {
        vn(e, ln(n));
      }
    } else if (o === `number` && e.value == t) {
      vn(e, ln(e.value));
    } else {
      vn(e, ln(t));
    }
    if (i == null && a != null) {
      e.defaultChecked = !!a;
    }
    if (i != null) {
      e.checked = i && typeof i != `function` && typeof i != `symbol`;
    }
    if (s != null && typeof s != `function` && typeof s != `symbol` && typeof s != `boolean`) {
      e.name = `${ln(s)}`;
    } else {
      e.removeAttribute(`name`);
    }
  }
  function _n(e, t, n, r, i, a, o, s) {
    if (a != null && typeof a != `function` && typeof a != `symbol` && typeof a != `boolean`) {
      e.type = a;
    }
    if (t != null || n != null) {
      if ((a === `submit` || a === `reset`) && t == null) {
        fn(e);
        return;
      }
      n = n == null ? `` : `${ln(n)}`;
      t = t == null ? n : `${ln(t)}`;
      if (!s && t !== e.value) {
        e.value = t;
      }
      e.defaultValue = t;
    }
    r ??= i;
    r = typeof r != `function` && typeof r != `symbol` && !!r;
    e.checked = s ? e.checked : !!r;
    e.defaultChecked = !!r;
    if (o != null && typeof o != `function` && typeof o != `symbol` && typeof o != `boolean`) {
      e.name = o;
    }
    fn(e);
  }
  function vn(e, t) {
    if (e.defaultValue !== `${t}`) {
      e.defaultValue = `${t}`;
    }
  }
  function yn(e, t, n, r) {
    e = e.options;
    if (t) {
      t = {};
      for (var i = 0; i < n.length; i++) {
        t[`$${n[i]}`] = true;
      }
      for (n = 0; n < e.length; n++) {
        i = t.hasOwnProperty(`$${e[n].value}`);
        if (e[n].selected !== i) {
          e[n].selected = i;
        }
        if (i && r) {
          e[n].defaultSelected = true;
        }
      }
    } else {
      n = `${ln(n)}`;
      t = null;
      i = 0;
      for (; i < e.length; i++) {
        if (e[i].value === n) {
          e[i].selected = true;
          if (r) {
            e[i].defaultSelected = true;
          }
          return;
        }
        if (t === null && !e[i].disabled) {
          t = e[i];
        }
      }
      if (t !== null) {
        t.selected = true;
      }
    }
  }
  function bn(e, t, n) {
    if (t != null && (t = `${ln(t)}`, t !== e.value && (e.value = t), n == null)) {
      if (e.defaultValue !== t) {
        e.defaultValue = t;
      }
    } else {
      e.defaultValue = n == null ? `` : `${ln(n)}`;
    }
  }
  function xn(e, t, n, r) {
    if (t == null) {
      if (r != null) {
        if (n != null) {
          throw Error(a(92));
        }
        if (De(r)) {
          if (r.length > 1) {
            throw Error(a(93));
          }
          r = r[0];
        }
        n = r;
      }
      n ??= ``;
      t = n;
    }
    n = ln(t);
    e.defaultValue = n;
    r = e.textContent;
    if (r === n && r !== `` && r !== null) {
      e.value = r;
    }
    fn(e);
  }
  function Sn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Cn = new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));
  function wn(e, t, n) {
    var r = t.indexOf(`--`) === 0;
    if (n == null || typeof n == `boolean` || n === ``) {
      if (r) {
        e.setProperty(t, ``);
      } else if (t === `float`) {
        e.cssFloat = ``;
      } else {
        e[t] = ``;
      }
    } else if (r) {
      e.setProperty(t, n);
    } else if (typeof n != `number` || n === 0 || Cn.has(t)) {
      if (t === `float`) {
        e.cssFloat = n;
      } else {
        e[t] = `${n}`.trim();
      }
    } else {
      e[t] = `${n}px`;
    }
  }
  function Tn(e, t, n) {
    if (t != null && typeof t != `object`) {
      throw Error(a(62));
    }
    e = e.style;
    if (n != null) {
      for (var r in n) {
        if (!!n.hasOwnProperty(r) && (t == null || !t.hasOwnProperty(r))) {
          if (r.indexOf(`--`) === 0) {
            e.setProperty(r, ``);
          } else if (r === `float`) {
            e.cssFloat = ``;
          } else {
            e[r] = ``;
          }
          D = true;
        }
      }
      for (var i in t) {
        r = t[i];
        if (t.hasOwnProperty(i) && n[i] !== r) {
          wn(e, i, r);
          D = true;
        }
      }
    } else {
      for (var o in t) {
        if (t.hasOwnProperty(o)) {
          wn(e, o, t[o]);
        }
      }
    }
  }
  function En(e) {
    if (e.indexOf(`-`) === -1) {
      return false;
    }
    switch (e) {
      case `annotation-xml`:
      case `color-profile`:
      case `font-face`:
      case `font-face-src`:
      case `font-face-uri`:
      case `font-face-format`:
      case `font-face-name`:
      case `missing-glyph`:
        return false;
      default:
        return true;
    }
  }
  var Dn = new Map([[`acceptCharset`, `accept-charset`], [`htmlFor`, `for`], [`httpEquiv`, `http-equiv`], [`crossOrigin`, `crossorigin`], [`accentHeight`, `accent-height`], [`alignmentBaseline`, `alignment-baseline`], [`arabicForm`, `arabic-form`], [`baselineShift`, `baseline-shift`], [`capHeight`, `cap-height`], [`clipPath`, `clip-path`], [`clipRule`, `clip-rule`], [`colorInterpolation`, `color-interpolation`], [`colorInterpolationFilters`, `color-interpolation-filters`], [`colorProfile`, `color-profile`], [`colorRendering`, `color-rendering`], [`dominantBaseline`, `dominant-baseline`], [`enableBackground`, `enable-background`], [`fillOpacity`, `fill-opacity`], [`fillRule`, `fill-rule`], [`floodColor`, `flood-color`], [`floodOpacity`, `flood-opacity`], [`fontFamily`, `font-family`], [`fontSize`, `font-size`], [`fontSizeAdjust`, `font-size-adjust`], [`fontStretch`, `font-stretch`], [`fontStyle`, `font-style`], [`fontVariant`, `font-variant`], [`fontWeight`, `font-weight`], [`glyphName`, `glyph-name`], [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`], [`glyphOrientationVertical`, `glyph-orientation-vertical`], [`horizAdvX`, `horiz-adv-x`], [`horizOriginX`, `horiz-origin-x`], [`imageRendering`, `image-rendering`], [`letterSpacing`, `letter-spacing`], [`lightingColor`, `lighting-color`], [`markerEnd`, `marker-end`], [`markerMid`, `marker-mid`], [`markerStart`, `marker-start`], [`maskType`, `mask-type`], [`overlinePosition`, `overline-position`], [`overlineThickness`, `overline-thickness`], [`paintOrder`, `paint-order`], [`panose-1`, `panose-1`], [`pointerEvents`, `pointer-events`], [`renderingIntent`, `rendering-intent`], [`shapeRendering`, `shape-rendering`], [`stopColor`, `stop-color`], [`stopOpacity`, `stop-opacity`], [`strikethroughPosition`, `strikethrough-position`], [`strikethroughThickness`, `strikethrough-thickness`], [`strokeDasharray`, `stroke-dasharray`], [`strokeDashoffset`, `stroke-dashoffset`], [`strokeLinecap`, `stroke-linecap`], [`strokeLinejoin`, `stroke-linejoin`], [`strokeMiterlimit`, `stroke-miterlimit`], [`strokeOpacity`, `stroke-opacity`], [`strokeWidth`, `stroke-width`], [`textAnchor`, `text-anchor`], [`textDecoration`, `text-decoration`], [`textRendering`, `text-rendering`], [`transformOrigin`, `transform-origin`], [`underlinePosition`, `underline-position`], [`underlineThickness`, `underline-thickness`], [`unicodeBidi`, `unicode-bidi`], [`unicodeRange`, `unicode-range`], [`unitsPerEm`, `units-per-em`], [`vAlphabetic`, `v-alphabetic`], [`vHanging`, `v-hanging`], [`vIdeographic`, `v-ideographic`], [`vMathematical`, `v-mathematical`], [`vectorEffect`, `vector-effect`], [`vertAdvY`, `vert-adv-y`], [`vertOriginX`, `vert-origin-x`], [`vertOriginY`, `vert-origin-y`], [`wordSpacing`, `word-spacing`], [`writingMode`, `writing-mode`], [`xmlnsXlink`, `xmlns:xlink`], [`xHeight`, `x-height`]]);
  var On = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function kn(e) {
    if (On.test(`${e}`)) {
      return `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`;
    } else {
      return e;
    }
  }
  function An() {}
  var jn = null;
  function Mn(e) {
    e = e.target || e.srcElement || window;
    if (e.correspondingUseElement) {
      e = e.correspondingUseElement;
    }
    if (e.nodeType === 3) {
      return e.parentNode;
    } else {
      return e;
    }
  }
  var Nn = null;
  var Pn = null;
  function Fn(e) {
    var t = Kt(e);
    if (t && (e = t.stateNode)) {
      var n = e[It] || null;
      e = t.stateNode;
      a: switch (t.type) {
        case `input`:
          gn(e, n.value, n.defaultValue, n.defaultValue, n.checked, n.defaultChecked, n.type, n.name);
          t = n.name;
          if (n.type === `radio` && t != null) {
            for (n = e; n.parentNode;) {
              n = n.parentNode;
            }
            n = n.querySelectorAll(`input[name="${hn(`${t}`)}"][type="radio"]`);
            t = 0;
            for (; t < n.length; t++) {
              var r = n[t];
              if (r !== e && r.form === e.form) {
                var i = r[It] || null;
                if (!i) {
                  throw Error(a(90));
                }
                gn(r, i.value, i.defaultValue, i.defaultValue, i.checked, i.defaultChecked, i.type, i.name);
              }
            }
            for (t = 0; t < n.length; t++) {
              r = n[t];
              if (r.form === e.form) {
                pn(r);
              }
            }
          }
          break a;
        case `textarea`:
          bn(e, n.value, n.defaultValue);
          break a;
        case `select`:
          t = n.value;
          if (t != null) {
            yn(e, !!n.multiple, t, false);
          }
      }
    }
  }
  var In = false;
  function Ln(e, t, n) {
    if (In) {
      return e(t, n);
    }
    In = true;
    try {
      return e(t);
    } finally {
      In = false;
      if ((Nn !== null || Pn !== null) && (zd(), Nn && (t = Nn, e = Pn, Pn = Nn = null, Fn(t), e))) {
        for (t = 0; t < e.length; t++) {
          Fn(e[t]);
        }
      }
    }
  }
  function Rn(e, t) {
    var n = e.stateNode;
    if (n === null) {
      return null;
    }
    var r = n[It] || null;
    if (r === null) {
      return null;
    }
    n = r[t];
    a: switch (t) {
      case `onClick`:
      case `onClickCapture`:
      case `onDoubleClick`:
      case `onDoubleClickCapture`:
      case `onMouseDown`:
      case `onMouseDownCapture`:
      case `onMouseMove`:
      case `onMouseMoveCapture`:
      case `onMouseUp`:
      case `onMouseUpCapture`:
      case `onMouseEnter`:
        if (!(r = !r.disabled)) {
          e = e.type;
          r = e !== `button` && e !== `input` && e !== `select` && e !== `textarea`;
        }
        e = !r;
        break a;
      default:
        e = false;
    }
    if (e) {
      return null;
    }
    if (n && typeof n != `function`) {
      throw Error(a(231, t, typeof n));
    }
    return n;
  }
  var zn = window.document !== undefined && window.document.createElement !== undefined;
  var Bn = false;
  if (zn) {
    try {
      var Vn = {};
      Object.defineProperty(Vn, "passive", {
        get: function () {
          Bn = true;
        }
      });
      window.addEventListener(`test`, Vn, Vn);
      window.removeEventListener(`test`, Vn, Vn);
    } catch {
      Bn = false;
    }
  }
  var Hn = null;
  var Un = null;
  var Wn = null;
  function Gn() {
    if (Wn) {
      return Wn;
    }
    var e;
    var t = Un;
    var n = t.length;
    var r;
    var i = `value` in Hn ? Hn.value : Hn.textContent;
    var a = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
    return Wn = i.slice(e, r > 1 ? 1 - r : undefined);
  }
  function Kn(e) {
    var t = e.keyCode;
    if (`charCode` in e) {
      e = e.charCode;
      if (e === 0 && t === 13) {
        e = 13;
      }
    } else {
      e = t;
    }
    if (e === 10) {
      e = 13;
    }
    if (e >= 32 || e === 13) {
      return e;
    } else {
      return 0;
    }
  }
  function qn() {
    return true;
  }
  function Jn() {
    return false;
  }
  function Yn(e) {
    function t(t, n, r, i, a) {
      this._reactName = t;
      this._targetInst = r;
      this.type = n;
      this.nativeEvent = i;
      this.target = a;
      this.currentTarget = null;
      for (var o in e) {
        if (e.hasOwnProperty(o)) {
          t = e[o];
          this[o] = t ? t(i) : i[o];
        }
      }
      this.isDefaultPrevented = (i.defaultPrevented == null ? i.returnValue === false : i.defaultPrevented) ? qn : Jn;
      this.isPropagationStopped = Jn;
      return this;
    }
    S(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = true;
        var e = this.nativeEvent;
        if (e) {
          if (e.preventDefault) {
            e.preventDefault();
          } else if (typeof e.returnValue != `unknown`) {
            e.returnValue = false;
          }
          this.isDefaultPrevented = qn;
        }
      },
      stopPropagation: function () {
        var e = this.nativeEvent;
        if (e) {
          if (e.stopPropagation) {
            e.stopPropagation();
          } else if (typeof e.cancelBubble != `unknown`) {
            e.cancelBubble = true;
          }
          this.isPropagationStopped = qn;
        }
      },
      persist: function () {},
      isPersistent: qn
    });
    return t;
  }
  var Xn = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  };
  var Zn = Yn(Xn);
  var Qn = S({}, Xn, {
    view: 0,
    detail: 0
  });
  var $n = Yn(Qn);
  var er;
  var tr;
  var nr;
  var rr = S({}, Qn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: mr,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      if (e.relatedTarget === undefined) {
        if (e.fromElement === e.srcElement) {
          return e.toElement;
        } else {
          return e.fromElement;
        }
      } else {
        return e.relatedTarget;
      }
    },
    movementX: function (e) {
      if (`movementX` in e) {
        return e.movementX;
      } else {
        if (e !== nr) {
          if (nr && e.type === `mousemove`) {
            er = e.screenX - nr.screenX;
            tr = e.screenY - nr.screenY;
          } else {
            tr = er = 0;
          }
          nr = e;
        }
        return er;
      }
    },
    movementY: function (e) {
      if (`movementY` in e) {
        return e.movementY;
      } else {
        return tr;
      }
    }
  });
  var ir = Yn(rr);
  var ar = Yn(S({}, rr, {
    dataTransfer: 0
  }));
  var or = Yn(S({}, Qn, {
    relatedTarget: 0
  }));
  var sr = Yn(S({}, Xn, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }));
  var cr = Yn(S({}, Xn, {
    clipboardData: function (e) {
      if (`clipboardData` in e) {
        return e.clipboardData;
      } else {
        return window.clipboardData;
      }
    }
  }));
  var lr = Yn(S({}, Xn, {
    data: 0
  }));
  var ur = {
    Esc: `Escape`,
    Spacebar: ` `,
    Left: `ArrowLeft`,
    Up: `ArrowUp`,
    Right: `ArrowRight`,
    Down: `ArrowDown`,
    Del: `Delete`,
    Win: `OS`,
    Menu: `ContextMenu`,
    Apps: `ContextMenu`,
    Scroll: `ScrollLock`,
    MozPrintableKey: `Unidentified`
  };
  var dr = {
    8: `Backspace`,
    9: `Tab`,
    12: `Clear`,
    13: `Enter`,
    16: `Shift`,
    17: `Control`,
    18: `Alt`,
    19: `Pause`,
    20: `CapsLock`,
    27: `Escape`,
    32: ` `,
    33: `PageUp`,
    34: `PageDown`,
    35: `End`,
    36: `Home`,
    37: `ArrowLeft`,
    38: `ArrowUp`,
    39: `ArrowRight`,
    40: `ArrowDown`,
    45: `Insert`,
    46: `Delete`,
    112: `F1`,
    113: `F2`,
    114: `F3`,
    115: `F4`,
    116: `F5`,
    117: `F6`,
    118: `F7`,
    119: `F8`,
    120: `F9`,
    121: `F10`,
    122: `F11`,
    123: `F12`,
    144: `NumLock`,
    145: `ScrollLock`,
    224: `Meta`
  };
  var fr = {
    Alt: `altKey`,
    Control: `ctrlKey`,
    Meta: `metaKey`,
    Shift: `shiftKey`
  };
  function pr(e) {
    var t = this.nativeEvent;
    if (t.getModifierState) {
      return t.getModifierState(e);
    } else if (e = fr[e]) {
      return !!t[e];
    } else {
      return false;
    }
  }
  function mr() {
    return pr;
  }
  var hr = Yn(S({}, Qn, {
    key: function (e) {
      if (e.key) {
        var t = ur[e.key] || e.key;
        if (t !== `Unidentified`) {
          return t;
        }
      }
      if (e.type === `keypress`) {
        e = Kn(e);
        if (e === 13) {
          return `Enter`;
        } else {
          return String.fromCharCode(e);
        }
      } else if (e.type === `keydown` || e.type === `keyup`) {
        return dr[e.keyCode] || `Unidentified`;
      } else {
        return ``;
      }
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: mr,
    charCode: function (e) {
      if (e.type === `keypress`) {
        return Kn(e);
      } else {
        return 0;
      }
    },
    keyCode: function (e) {
      if (e.type === `keydown` || e.type === `keyup`) {
        return e.keyCode;
      } else {
        return 0;
      }
    },
    which: function (e) {
      if (e.type === `keypress`) {
        return Kn(e);
      } else if (e.type === `keydown` || e.type === `keyup`) {
        return e.keyCode;
      } else {
        return 0;
      }
    }
  }));
  var gr = Yn(S({}, rr, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }));
  var _r = Yn(S({}, Xn, {
    submitter: 0
  }));
  var vr = Yn(S({}, Qn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: mr
  }));
  var yr = Yn(S({}, Xn, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }));
  var br = Yn(S({}, rr, {
    deltaX: function (e) {
      if (`deltaX` in e) {
        return e.deltaX;
      } else if (`wheelDeltaX` in e) {
        return -e.wheelDeltaX;
      } else {
        return 0;
      }
    },
    deltaY: function (e) {
      if (`deltaY` in e) {
        return e.deltaY;
      } else if (`wheelDeltaY` in e) {
        return -e.wheelDeltaY;
      } else if (`wheelDelta` in e) {
        return -e.wheelDelta;
      } else {
        return 0;
      }
    },
    deltaZ: 0,
    deltaMode: 0
  }));
  var xr = Yn(S({}, Xn, {
    newState: 0,
    oldState: 0,
    source: 0
  }));
  var Sr = [9, 13, 27, 32];
  var Cr = zn && `CompositionEvent` in window;
  var wr = null;
  if (zn && `documentMode` in document) {
    wr = document.documentMode;
  }
  var Tr = zn && `TextEvent` in window && !wr;
  var Er = zn && (!Cr || wr && wr > 8 && wr <= 11);
  var Dr = ` `;
  var Or = false;
  function kr(e, t) {
    switch (e) {
      case `keyup`:
        return Sr.indexOf(t.keyCode) !== -1;
      case `keydown`:
        return t.keyCode !== 229;
      case `keypress`:
      case `mousedown`:
      case `focusout`:
        return true;
      default:
        return false;
    }
  }
  function Ar(e) {
    e = e.detail;
    if (typeof e == `object` && `data` in e) {
      return e.data;
    } else {
      return null;
    }
  }
  var jr = false;
  function Mr(e, t) {
    switch (e) {
      case `compositionend`:
        return Ar(t);
      case `keypress`:
        if (t.which === 32) {
          Or = true;
          return Dr;
        } else {
          return null;
        }
      case `textInput`:
        e = t.data;
        if (e === Dr && Or) {
          return null;
        } else {
          return e;
        }
      default:
        return null;
    }
  }
  function Nr(e, t) {
    if (jr) {
      if (e === `compositionend` || !Cr && kr(e, t)) {
        e = Gn();
        Wn = Un = Hn = null;
        jr = false;
        return e;
      } else {
        return null;
      }
    }
    switch (e) {
      case `paste`:
        return null;
      case `keypress`:
        if (!t.ctrlKey && !t.altKey && !t.metaKey || t.ctrlKey && t.altKey) {
          if (t.char && t.char.length > 1) {
            return t.char;
          }
          if (t.which) {
            return String.fromCharCode(t.which);
          }
        }
        return null;
      case `compositionend`:
        if (Er && t.locale !== `ko`) {
          return null;
        } else {
          return t.data;
        }
      default:
        return null;
    }
  }
  var Pr = {
    color: true,
    date: true,
    datetime: true,
    "datetime-local": true,
    email: true,
    month: true,
    number: true,
    password: true,
    range: true,
    search: true,
    tel: true,
    text: true,
    time: true,
    url: true,
    week: true
  };
  function Fr(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    if (t === `input`) {
      return !!Pr[e.type];
    } else {
      return t === `textarea`;
    }
  }
  function Ir(e, t, n, r) {
    if (Nn) {
      if (Pn) {
        Pn.push(r);
      } else {
        Pn = [r];
      }
    } else {
      Nn = r;
    }
    t = Jf(t, `onChange`);
    if (t.length > 0) {
      n = new Zn(`onChange`, `change`, null, n, r);
      e.push({
        event: n,
        listeners: t
      });
    }
  }
  var Lr = null;
  var Rr = null;
  function zr(e) {
    Vf(e, 0);
  }
  function Br(e) {
    if (pn(qt(e))) {
      return e;
    }
  }
  function Vr(e, t) {
    if (e === `change`) {
      return t;
    }
  }
  var Hr = false;
  if (zn) {
    var Ur;
    if (zn) {
      var Wr = `oninput` in document;
      if (!Wr) {
        var Gr = document.createElement(`div`);
        Gr.setAttribute(`oninput`, `return;`);
        Wr = typeof Gr.oninput == `function`;
      }
      Ur = Wr;
    } else {
      Ur = false;
    }
    Hr = Ur && (!document.documentMode || document.documentMode > 9);
  }
  function Kr() {
    if (Lr) {
      Lr.detachEvent(`onpropertychange`, qr);
      Rr = Lr = null;
    }
  }
  function qr(e) {
    if (e.propertyName === `value` && Br(Rr)) {
      var t = [];
      Ir(t, Rr, e, Mn(e));
      Ln(zr, t);
    }
  }
  function Jr(e, t, n) {
    if (e === `focusin`) {
      Kr();
      Lr = t;
      Rr = n;
      Lr.attachEvent(`onpropertychange`, qr);
    } else if (e === `focusout`) {
      Kr();
    }
  }
  function Yr(e) {
    if (e === `selectionchange` || e === `keyup` || e === `keydown`) {
      return Br(Rr);
    }
  }
  function Xr(e, t) {
    if (e === `click`) {
      return Br(t);
    }
  }
  function Zr(e, t) {
    if (e === `input` || e === `change`) {
      return Br(t);
    }
  }
  function Qr(e, t) {
    return e === t && (e !== 0 || 1 / e == 1 / t) || e !== e && t !== t;
  }
  var $r = typeof Object.is == `function` ? Object.is : Qr;
  function ei(e, t) {
    if ($r(e, t)) {
      return true;
    }
    if (typeof e != `object` || !e || typeof t != `object` || !t) {
      return false;
    }
    var n = Object.keys(e);
    var r = Object.keys(t);
    if (n.length !== r.length) {
      return false;
    }
    for (r = 0; r < n.length; r++) {
      var i = n[r];
      if (!Je.call(t, i) || !$r(e[i], t[i])) {
        return false;
      }
    }
    return true;
  }
  function ti(e) {
    e ||= typeof document < `u` ? document : undefined;
    if (e === undefined) {
      return null;
    }
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function ni(e) {
    while (e && e.firstChild) {
      e = e.firstChild;
    }
    return e;
  }
  function ri(e, t) {
    var n = ni(e);
    e = 0;
    var r;
    for (; n;) {
      if (n.nodeType === 3) {
        r = e + n.textContent.length;
        if (e <= t && r >= t) {
          return {
            node: n,
            offset: t - e
          };
        }
        e = r;
      }
      a: {
        while (n) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break a;
          }
          n = n.parentNode;
        }
        n = undefined;
      }
      n = ni(n);
    }
  }
  function ii(e, t) {
    if (e && t) {
      if (e === t) {
        return true;
      } else if (e && e.nodeType === 3) {
        return false;
      } else if (t && t.nodeType === 3) {
        return ii(e, t.parentNode);
      } else if (`contains` in e) {
        return e.contains(t);
      } else if (e.compareDocumentPosition) {
        return !!(e.compareDocumentPosition(t) & 16);
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
  function ai(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ti(e.document); t instanceof e.HTMLIFrameElement;) {
      try {
        var n = typeof t.contentWindow.location.href == `string`;
      } catch {
        n = false;
      }
      if (n) {
        e = t.contentWindow;
      } else {
        break;
      }
      t = ti(e.document);
    }
    return t;
  }
  function oi(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === `input` && (e.type === `text` || e.type === `search` || e.type === `tel` || e.type === `url` || e.type === `password`) || t === `textarea` || e.contentEditable === `true`);
  }
  var si = zn && `documentMode` in document && document.documentMode <= 11;
  var ci = null;
  var li = null;
  var ui = null;
  var di = false;
  function fi(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    if (!di && ci != null && ci === ti(r)) {
      r = ci;
      if (`selectionStart` in r && oi(r)) {
        r = {
          start: r.selectionStart,
          end: r.selectionEnd
        };
      } else {
        r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection();
        r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset
        };
      }
      if (!ui || !ei(ui, r)) {
        ui = r;
        r = Jf(li, `onSelect`);
        if (r.length > 0) {
          t = new Zn(`onSelect`, `select`, null, t, n);
          e.push({
            event: t,
            listeners: r
          });
          t.target = ci;
        }
      }
    }
  }
  function pi(e, t) {
    var n = {};
    n[e.toLowerCase()] = t.toLowerCase();
    n[`Webkit${e}`] = `webkit${t}`;
    n[`Moz${e}`] = `moz${t}`;
    return n;
  }
  var mi = {
    animationend: pi(`Animation`, `AnimationEnd`),
    animationiteration: pi(`Animation`, `AnimationIteration`),
    animationstart: pi(`Animation`, `AnimationStart`),
    transitionrun: pi(`Transition`, `TransitionRun`),
    transitionstart: pi(`Transition`, `TransitionStart`),
    transitioncancel: pi(`Transition`, `TransitionCancel`),
    transitionend: pi(`Transition`, `TransitionEnd`)
  };
  var hi = {};
  var gi = {};
  if (zn) {
    gi = document.createElement(`div`).style;
    if (!(`AnimationEvent` in window)) {
      delete mi.animationend.animation;
      delete mi.animationiteration.animation;
      delete mi.animationstart.animation;
    }
    if (!(`TransitionEvent` in window)) {
      delete mi.transitionend.transition;
    }
  }
  function _i(e) {
    if (hi[e]) {
      return hi[e];
    }
    if (!mi[e]) {
      return e;
    }
    var t = mi[e];
    var n;
    for (n in t) {
      if (t.hasOwnProperty(n) && n in gi) {
        return hi[e] = t[n];
      }
    }
    return e;
  }
  var vi = _i(`animationend`);
  var yi = _i(`animationiteration`);
  var bi = _i(`animationstart`);
  var xi = _i(`transitionrun`);
  var Si = _i(`transitionstart`);
  var Ci = _i(`transitioncancel`);
  var wi = _i(`transitionend`);
  var Ti = new Map();
  var Ei = `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);
  Ei.push(`scrollEnd`);
  function Di(e, t) {
    Ti.set(e, t);
    Qt(t, [e]);
  }
  var Oi = 0;
  function ki(e, t) {
    if (e.name != null && e.name !== `auto`) {
      return e.name;
    }
    if (t.autoName !== null) {
      return t.autoName;
    }
    e = bd.identifierPrefix;
    var n = Oi++;
    e = `_${e}t_${n.toString(32)}_`;
    return t.autoName = e;
  }
  function Ai(e) {
    if (e == null || typeof e == `string`) {
      return e;
    }
    var t = null;
    var n = Od;
    if (n !== null) {
      for (var r = 0; r < n.length; r++) {
        var i = e[n[r]];
        if (i != null) {
          if (i === `none`) {
            return `none`;
          }
          t = t == null ? i : `${t} ${i}`;
        }
      }
    }
    return t ?? e.default;
  }
  function ji(e, t) {
    e = Ai(e);
    t = Ai(t);
    if (t == null) {
      if (e === `auto`) {
        return null;
      } else {
        return e;
      }
    } else if (t === `auto`) {
      return null;
    } else {
      return t;
    }
  }
  var Mi = typeof reportError == `function` ? reportError : function (e) {
    if (typeof window.ErrorEvent == `function`) {
      var t = new window.ErrorEvent(`error`, {
        bubbles: true,
        cancelable: true,
        message: typeof e == `object` && e && typeof e.message == `string` ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) {
        return;
      }
    } else if (typeof process == `object` && typeof process.emit == `function`) {
      process.emit(`uncaughtException`, e);
      return;
    }
    console.error(e);
  };
  var Ni = [];
  var Pi = 0;
  var Fi = 0;
  function Ii() {
    for (var e = Pi, t = Fi = Pi = 0; t < e;) {
      var n = Ni[t];
      Ni[t++] = null;
      var r = Ni[t];
      Ni[t++] = null;
      var i = Ni[t];
      Ni[t++] = null;
      var a = Ni[t];
      Ni[t++] = null;
      if (r !== null && i !== null) {
        var o = r.pending;
        if (o === null) {
          i.next = i;
        } else {
          i.next = o.next;
          o.next = i;
        }
        r.pending = i;
      }
      if (a !== 0) {
        Bi(n, i, a);
      }
    }
  }
  function Li(e, t, n, r) {
    Ni[Pi++] = e;
    Ni[Pi++] = t;
    Ni[Pi++] = n;
    Ni[Pi++] = r;
    Fi |= r;
    e.lanes |= r;
    e = e.alternate;
    if (e !== null) {
      e.lanes |= r;
    }
  }
  function Ri(e, t, n, r) {
    Li(e, t, n, r);
    return Vi(e);
  }
  function zi(e, t) {
    Li(e, null, null, t);
    return Vi(e);
  }
  function Bi(e, t, n) {
    e.lanes |= n;
    var r = e.alternate;
    if (r !== null) {
      r.lanes |= n;
    }
    var i = false;
    for (var a = e.return; a !== null;) {
      a.childLanes |= n;
      r = a.alternate;
      if (r !== null) {
        r.childLanes |= n;
      }
      if (a.tag === 22) {
        e = a.stateNode;
        if (e !== null && !(e._visibility & 1)) {
          i = true;
        }
      }
      e = a;
      a = a.return;
    }
    if (e.tag === 3) {
      a = e.stateNode;
      if (i && t !== null) {
        i = 31 - dt(n);
        e = a.hiddenUpdates;
        r = e[i];
        if (r === null) {
          e[i] = [t];
        } else {
          r.push(t);
        }
        t.lane = n | 536870912;
      }
      return a;
    } else {
      return null;
    }
  }
  function Vi(e) {
    if (kd > 50) {
      kd = 0;
      Ad = null;
      throw Error(a(185));
    }
    for (var t = e.return; t !== null;) {
      e = t;
      t = e.return;
    }
    if (e.tag === 3) {
      return e.stateNode;
    } else {
      return null;
    }
  }
  var Hi = {};
  function Ui(e, t, n, r) {
    this.tag = e;
    this.key = n;
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
    this.index = 0;
    this.refCleanup = this.ref = null;
    this.pendingProps = t;
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
    this.mode = r;
    this.subtreeFlags = this.flags = 0;
    this.deletions = null;
    this.childLanes = this.lanes = 0;
    this.alternate = null;
  }
  function Wi(e, t, n, r) {
    return new Ui(e, t, n, r);
  }
  function Gi(e) {
    e = e.prototype;
    return !!e && !!e.isReactComponent;
  }
  function Ki(e, t) {
    var n = e.alternate;
    if (n === null) {
      n = Wi(e.tag, t, e.key, e.mode);
      n.elementType = e.elementType;
      n.type = e.type;
      n.stateNode = e.stateNode;
      n.alternate = e;
      e.alternate = n;
    } else {
      n.pendingProps = t;
      n.type = e.type;
      n.flags = 0;
      n.subtreeFlags = 0;
      n.deletions = null;
    }
    n.flags = e.flags & 1206910976;
    n.childLanes = e.childLanes;
    n.lanes = e.lanes;
    n.child = e.child;
    n.memoizedProps = e.memoizedProps;
    n.memoizedState = e.memoizedState;
    n.updateQueue = e.updateQueue;
    t = e.dependencies;
    n.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    };
    n.sibling = e.sibling;
    n.index = e.index;
    n.ref = e.ref;
    n.refCleanup = e.refCleanup;
    return n;
  }
  function qi(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    if (n === null) {
      e.childLanes = 0;
      e.lanes = t;
      e.child = null;
      e.subtreeFlags = 0;
      e.memoizedProps = null;
      e.memoizedState = null;
      e.updateQueue = null;
      e.dependencies = null;
      e.stateNode = null;
    } else {
      e.childLanes = n.childLanes;
      e.lanes = n.lanes;
      e.child = n.child;
      e.subtreeFlags = 0;
      e.deletions = null;
      e.memoizedProps = n.memoizedProps;
      e.memoizedState = n.memoizedState;
      e.updateQueue = n.updateQueue;
      e.type = n.type;
      t = n.dependencies;
      e.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
      };
    }
    return e;
  }
  function Ji(e, t, n, r, i, o) {
    var s = 0;
    r = e;
    if (typeof r == `function`) {
      if (Gi(r)) {
        s = 1;
      }
    } else if (typeof r == `string`) {
      s = qm(e, n, Ne.current) ? 26 : e === `html` || e === `head` || e === `body` ? 27 : 5;
    } else {
      a: switch (r) {
        case ve:
          e = Wi(31, n, t, i);
          e.elementType = ve;
          e.lanes = o;
          return e;
        case ce:
          return Yi(n.children, i, o, t);
        case le:
          s = 8;
          i |= 24;
          break;
        case ue:
          e = Wi(12, n, t, i | 2);
          e.elementType = ue;
          e.lanes = o;
          return e;
        case me:
          e = Wi(13, n, t, i);
          e.elementType = me;
          e.lanes = o;
          return e;
        case he:
          e = Wi(19, n, t, i);
          e.elementType = he;
          e.lanes = o;
          return e;
        case ye:
        case xe:
          e = i | 32;
          e = Wi(30, n, t, e);
          e.elementType = xe;
          e.lanes = o;
          e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          };
          return e;
        default:
          if (typeof r == `object` && r) {
            switch (r.$$typeof) {
              case fe:
                s = 10;
                break a;
              case de:
                s = 9;
                break a;
              case pe:
                s = 11;
                break a;
              case ge:
                s = 14;
                break a;
              case _e:
                s = 16;
                r = null;
                break a;
            }
          }
          s = 29;
          n = Error(a(130, e === null ? `null` : typeof e, ``));
          r = null;
      }
    }
    t = Wi(s, n, t, i);
    t.elementType = e;
    t.type = r;
    t.lanes = o;
    return t;
  }
  function Yi(e, t, n, r) {
    e = Wi(7, e, r, t);
    e.lanes = n;
    return e;
  }
  function Xi(e, t, n) {
    e = Wi(6, e, null, t);
    e.lanes = n;
    return e;
  }
  function Zi(e) {
    var t = Wi(18, null, null, 0);
    t.stateNode = e;
    return t;
  }
  function Qi(e, t, n) {
    t = Wi(4, e.children === null ? [] : e.children, e.key, t);
    t.lanes = n;
    t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    };
    return t;
  }
  var $i = new WeakMap();
  function ea(e, t) {
    if (typeof e == `object` && e) {
      var n = $i.get(e);
      if (n === undefined) {
        t = {
          value: e,
          source: t,
          stack: qe(t)
        };
        $i.set(e, t);
        return t;
      } else {
        return n;
      }
    }
    return {
      value: e,
      source: t,
      stack: qe(t)
    };
  }
  var ta = [];
  var na = 0;
  var ra = null;
  var ia = 0;
  var aa = [];
  var oa = 0;
  var sa = null;
  var ca = 1;
  var la = ``;
  function ua(e, t) {
    ta[na++] = ia;
    ta[na++] = ra;
    ra = e;
    ia = t;
  }
  function da(e, t, n) {
    aa[oa++] = ca;
    aa[oa++] = la;
    aa[oa++] = sa;
    sa = e;
    var r = ca;
    e = la;
    var i = 32 - dt(r) - 1;
    r &= ~(1 << i);
    n += 1;
    var a = 32 - dt(t) + i;
    if (a > 30) {
      var o = i - i % 5;
      a = (r & (1 << o) - 1).toString(32);
      r >>= o;
      i -= o;
      ca = 1 << 32 - dt(t) + i | n << i | r;
      la = a + e;
    } else {
      ca = 1 << a | n << i | r;
      la = e;
    }
  }
  function fa(e) {
    if (e.return !== null) {
      ua(e, 1);
      da(e, 1, 0);
    }
  }
  function pa(e) {
    while (e === ra) {
      ra = ta[--na];
      ta[na] = null;
      ia = ta[--na];
      ta[na] = null;
    }
    while (e === sa) {
      sa = aa[--oa];
      aa[oa] = null;
      la = aa[--oa];
      aa[oa] = null;
      ca = aa[--oa];
      aa[oa] = null;
    }
  }
  function ma(e, t) {
    aa[oa++] = ca;
    aa[oa++] = la;
    aa[oa++] = sa;
    ca = t.id;
    la = t.overflow;
    sa = e;
  }
  var O = null;
  var k = null;
  var A = false;
  var ha = null;
  var ga = false;
  var _a = Error(a(519));
  function va(e) {
    wa(ea(Error(a(418, arguments.length > 1 && arguments[1] !== undefined && arguments[1] ? `text` : `HTML`, ``)), e));
    throw _a;
  }
  function ya(e) {
    var t = e.stateNode;
    var n = e.type;
    var r = e.memoizedProps;
    t[Ft] = e;
    t[It] = r;
    switch (n) {
      case `dialog`:
        Q(`cancel`, t);
        Q(`close`, t);
        break;
      case `iframe`:
      case `object`:
      case `embed`:
        Q(`load`, t);
        break;
      case `video`:
      case `audio`:
        for (n = 0; n < zf.length; n++) {
          Q(zf[n], t);
        }
        break;
      case `source`:
        Q(`error`, t);
        break;
      case `img`:
      case `image`:
      case `link`:
        Q(`error`, t);
        Q(`load`, t);
        break;
      case `details`:
        Q(`toggle`, t);
        break;
      case `input`:
        Q(`invalid`, t);
        _n(t, r.value, r.defaultValue, r.checked, r.defaultChecked, r.type, r.name, true);
        break;
      case `select`:
        Q(`invalid`, t);
        break;
      case `textarea`:
        Q(`invalid`, t);
        xn(t, r.value, r.defaultValue, r.children);
    }
    n = r.children;
    if (typeof n != `string` && typeof n != `number` && typeof n != `bigint` || t.textContent === `${n}` || r.suppressHydrationWarning === true || ep(t.textContent, n)) {
      if (r.popover != null) {
        Q(`beforetoggle`, t);
        Q(`toggle`, t);
      }
      if (r.onScroll != null) {
        Q(`scroll`, t);
      }
      if (r.onScrollEnd != null) {
        Q(`scrollend`, t);
      }
      if (r.onClick != null) {
        t.onclick = An;
      }
      t = true;
    } else {
      t = false;
    }
    if (!t) {
      va(e, true);
    }
  }
  function ba(e) {
    for (O = e.return; O;) {
      switch (O.tag) {
        case 5:
        case 31:
        case 13:
          ga = false;
          return;
        case 27:
        case 3:
          ga = true;
          return;
        default:
          O = O.return;
      }
    }
  }
  function xa(e) {
    if (e !== O) {
      return false;
    }
    if (!A) {
      ba(e);
      A = true;
      return false;
    }
    var t = e.tag;
    var n;
    if (n = t !== 3 && t !== 27) {
      if (n = t === 5) {
        n = e.type;
        n = n === `form` || n === `button` || pp(e.type, e.memoizedProps);
      }
      n = !n;
    }
    if (n && k) {
      va(e);
    }
    ba(e);
    if (t === 13) {
      e = e.memoizedState;
      e = e === null ? null : e.dehydrated;
      if (!e) {
        throw Error(a(317));
      }
      k = dm(e);
    } else if (t === 31) {
      e = e.memoizedState;
      e = e === null ? null : e.dehydrated;
      if (!e) {
        throw Error(a(317));
      }
      k = dm(e);
    } else if (t === 27) {
      t = k;
      if (Sp(e.type)) {
        e = um;
        um = null;
        k = e;
      } else {
        k = t;
      }
    } else {
      k = O ? lm(e.stateNode.nextSibling) : null;
    }
    return true;
  }
  function Sa() {
    k = O = null;
    A = false;
  }
  function Ca() {
    var e = ha;
    if (e !== null) {
      if (pd === null) {
        pd = e;
      } else {
        pd.push.apply(pd, e);
      }
      ha = null;
    }
    return e;
  }
  function wa(e) {
    if (ha === null) {
      ha = [e];
    } else {
      ha.push(e);
    }
  }
  var Ta = je(null);
  var Ea = null;
  var Da = null;
  function Oa(e, t, n) {
    T(Ta, t._currentValue);
    t._currentValue = n;
  }
  function ka(e) {
    e._currentValue = Ta.current;
    Me(Ta);
  }
  function Aa(e, t, n) {
    while (e !== null) {
      var r = e.alternate;
      if ((e.childLanes & t) === t) {
        if (r !== null && (r.childLanes & t) !== t) {
          r.childLanes |= t;
        }
      } else {
        e.childLanes |= t;
        if (r !== null) {
          r.childLanes |= t;
        }
      }
      if (e === n) {
        break;
      }
      e = e.return;
    }
  }
  function ja(e, t, n, r) {
    var i = e.child;
    for (i !== null && (i.return = e); i !== null;) {
      var o = i.dependencies;
      if (o !== null) {
        var s = i.child;
        o = o.firstContext;
        a: while (o !== null) {
          var c = o;
          o = i;
          for (var l = 0; l < t.length; l++) {
            if (c.context === t[l]) {
              o.lanes |= n;
              c = o.alternate;
              if (c !== null) {
                c.lanes |= n;
              }
              Aa(o.return, n, e);
              if (!r) {
                s = null;
              }
              break a;
            }
          }
          o = c.next;
        }
      } else if (i.tag === 18) {
        s = i.return;
        if (s === null) {
          throw Error(a(341));
        }
        s.lanes |= n;
        o = s.alternate;
        if (o !== null) {
          o.lanes |= n;
        }
        Aa(s, n, e);
        s = null;
      } else if (i.tag === 13 && i.memoizedState !== null && i.memoizedState.dehydrated === null) {
        i.lanes |= n;
        s = i.alternate;
        if (s !== null) {
          s.lanes |= n;
        }
        Aa(i.return, n, e);
        s = i.child;
        s = s === null ? null : s.sibling;
      } else {
        s = i.child;
      }
      if (s !== null) {
        s.return = i;
      } else {
        for (s = i; s !== null;) {
          if (s === e) {
            s = null;
            break;
          }
          i = s.sibling;
          if (i !== null) {
            i.return = s.return;
            s = i;
            break;
          }
          s = s.return;
        }
      }
      i = s;
    }
  }
  function Ma(e, t, n, r) {
    e = null;
    for (var i = t, o = false; i !== null;) {
      if (!o) {
        if (i.flags & 524288) {
          o = true;
        } else if (i.flags & 262144) {
          break;
        }
      }
      if (i.tag === 10) {
        var s = i.alternate;
        if (s === null) {
          throw Error(a(387));
        }
        s = s.memoizedProps;
        if (s !== null) {
          var c = i.type;
          if (!$r(i.pendingProps.value, s.value)) {
            if (e === null) {
              e = [c];
            } else {
              e.push(c);
            }
          }
        }
      } else if (i === Ie.current) {
        s = i.alternate;
        if (s === null) {
          throw Error(a(387));
        }
        if (s.memoizedState.memoizedState !== i.memoizedState.memoizedState) {
          if (e === null) {
            e = [sh];
          } else {
            e.push(sh);
          }
        }
      }
      i = i.return;
    }
    if (e !== null) {
      ja(t, e, n, r);
    }
    t.flags |= 262144;
    return e !== null;
  }
  function Na(e) {
    for (e = e.firstContext; e !== null;) {
      if (!$r(e.context._currentValue, e.memoizedValue)) {
        return true;
      }
      e = e.next;
    }
    return false;
  }
  function Pa(e) {
    Ea = e;
    Da = null;
    e = e.dependencies;
    if (e !== null) {
      e.firstContext = null;
    }
  }
  function Fa(e) {
    return La(Ea, e);
  }
  function Ia(e, t) {
    if (Ea === null) {
      Pa(e);
    }
    return La(e, t);
  }
  function La(e, t) {
    var n = t._currentValue;
    t = {
      context: t,
      memoizedValue: n,
      next: null
    };
    if (Da === null) {
      if (e === null) {
        throw Error(a(308));
      }
      Da = t;
      e.dependencies = {
        lanes: 0,
        firstContext: t
      };
      e.flags |= 524288;
    } else {
      Da = Da.next = t;
    }
    return n;
  }
  var Ra = typeof AbortController < `u` ? AbortController : function () {
    var e = [];
    var t = this.signal = {
      aborted: false,
      addEventListener: function (t, n) {
        e.push(n);
      }
    };
    this.abort = function () {
      t.aborted = true;
      e.forEach(function (e) {
        return e();
      });
    };
  };
  var za = t.unstable_scheduleCallback;
  var Ba = t.unstable_NormalPriority;
  var j = {
    $$typeof: fe,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Va() {
    return {
      controller: new Ra(),
      data: new Map(),
      refCount: 0
    };
  }
  function Ha(e) {
    e.refCount--;
    if (e.refCount === 0) {
      za(Ba, function () {
        e.controller.abort();
      });
    }
  }
  function Ua(e, t) {
    if (e.pendingLanes & 4194048) {
      var n = e.transitionTypes;
      if (n === null) {
        n = e.transitionTypes = [];
      }
      e = 0;
      for (; e < t.length; e++) {
        var r = t[e];
        if (n.indexOf(r) === -1) {
          n.push(r);
        }
      }
    }
  }
  var Wa = null;
  function Ga(e) {
    var t = e.transitionTypes;
    e.transitionTypes = null;
    return t;
  }
  var Ka = null;
  var qa = 0;
  var Ja = 0;
  var Ya = null;
  function Xa(e, t) {
    if (Ka === null) {
      var n = Ka = [];
      qa = 0;
      Ja = Pf();
      Ya = {
        status: `pending`,
        value: undefined,
        then: function (e) {
          n.push(e);
        }
      };
    }
    qa++;
    t.then(Za, Za);
    return t;
  }
  function Za() {
    if (--qa === 0 && (Wa = null, Ka !== null)) {
      if (Ya !== null) {
        Ya.status = `fulfilled`;
      }
      var e = Ka;
      Ka = null;
      Ja = 0;
      Ya = null;
      for (var t = 0; t < e.length; t++) {
        (0, e[t])();
      }
    }
  }
  function Qa(e, t) {
    var n = [];
    var r = {
      status: `pending`,
      value: null,
      reason: null,
      then: function (e) {
        n.push(e);
      }
    };
    e.then(function () {
      r.status = `fulfilled`;
      r.value = t;
      for (var e = 0; e < n.length; e++) {
        (0, n[e])(t);
      }
    }, function (e) {
      r.status = `rejected`;
      r.reason = e;
      e = 0;
      for (; e < n.length; e++) {
        (0, n[e])(undefined);
      }
    });
    return r;
  }
  var $a = C.S;
  C.S = function (e, t) {
    gd = $e();
    if (typeof t == `object` && t && typeof t.then == `function`) {
      Xa(e, t);
    }
    if (Wa !== null) {
      for (var n = bf; n !== null;) {
        Ua(n, Wa);
        n = n.next;
      }
    }
    n = e.types;
    if (n !== null) {
      for (var r = bf; r !== null;) {
        Ua(r, n);
        r = r.next;
      }
      if (Ja !== 0) {
        r = Wa;
        if (r === null) {
          r = Wa = [];
        }
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          if (r.indexOf(a) === -1) {
            r.push(a);
          }
        }
      }
    }
    if ($a !== null) {
      $a(e, t);
    }
  };
  var eo = je(null);
  function to() {
    var e = eo.current;
    if (e === null) {
      return G.pooledCache;
    } else {
      return e;
    }
  }
  function no(e, t) {
    if (t === null) {
      T(eo, eo.current);
    } else {
      T(eo, t.pool);
    }
  }
  function ro() {
    var e = to();
    if (e === null) {
      return null;
    } else {
      return {
        parent: j._currentValue,
        pool: e
      };
    }
  }
  var io = Error(a(460));
  var ao = Error(a(474));
  var oo = Error(a(542));
  var so = {
    then: function () {}
  };
  function co(e) {
    e = e.status;
    return e === `fulfilled` || e === `rejected`;
  }
  function lo(e, t, n) {
    n = e[n];
    if (n === undefined) {
      e.push(t);
    } else if (n !== t) {
      t.then(An, An);
      t = n;
    }
    switch (t.status) {
      case `fulfilled`:
        return t.value;
      case `rejected`:
        e = t.reason;
        mo(e);
        throw e === undefined && !(`reason` in t) ? Error(a(600)) : e;
      default:
        if (typeof t.status == `string`) {
          t.then(An, An);
        } else {
          e = G;
          if (e !== null && e.shellSuspendCounter > 100) {
            throw Error(a(482));
          }
          e = t;
          e.status = `pending`;
          e.then(function (e) {
            if (t.status === `pending`) {
              var n = t;
              n.status = `fulfilled`;
              n.value = e;
            }
          }, function (e) {
            if (t.status === `pending`) {
              var n = t;
              n.status = `rejected`;
              n.reason = e;
            }
          });
        }
        switch (t.status) {
          case `fulfilled`:
            return t.value;
          case `rejected`:
            e = t.reason;
            mo(e);
            throw e;
        }
        fo = t;
        throw io;
    }
  }
  function uo(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (e) {
      throw typeof e == `object` && e && typeof e.then == `function` ? (fo = e, io) : e;
    }
  }
  var fo = null;
  function po() {
    if (fo === null) {
      throw Error(a(459));
    }
    var e = fo;
    fo = null;
    return e;
  }
  function mo(e) {
    if (e === io || e === oo) {
      throw Error(a(483));
    }
  }
  var ho = null;
  var go = 0;
  function _o(e) {
    var t = go;
    go += 1;
    if (ho === null) {
      ho = [];
    }
    return lo(ho, e, t);
  }
  function vo(e, t) {
    t = t.props.ref;
    e.ref = t === undefined ? null : t;
  }
  function yo(e, t) {
    throw t.$$typeof === ae ? Error(a(525)) : (e = Object.prototype.toString.call(t), Error(a(31, e === `[object Object]` ? `object with keys {${Object.keys(t).join(`, `)}}` : e)));
  }
  function bo(e) {
    function t(t, n) {
      if (e) {
        var r = t.deletions;
        if (r === null) {
          t.deletions = [n];
          t.flags |= 16;
        } else {
          r.push(n);
        }
      }
    }
    function n(n, r) {
      if (!e) {
        return null;
      }
      while (r !== null) {
        t(n, r);
        r = r.sibling;
      }
      return null;
    }
    function r(e) {
      var t = new Map();
      for (; e !== null;) {
        if (e.key === null) {
          t.set(e.index, e);
        } else {
          t.set(e.key, e);
        }
        e = e.sibling;
      }
      return t;
    }
    function i(e, t) {
      e = Ki(e, t);
      e.index = 0;
      e.sibling = null;
      return e;
    }
    function o(t, n, r) {
      t.index = r;
      if (e) {
        r = t.alternate;
        if (r === null) {
          t.flags |= 134217730;
          return n;
        } else {
          r = r.index;
          if (r < n) {
            t.flags |= 2;
            return n;
          } else {
            return r;
          }
        }
      } else {
        t.flags |= 1048576;
        return n;
      }
    }
    function s(t) {
      if (e && t.alternate === null) {
        t.flags |= 134217730;
      }
      return t;
    }
    function c(e, t, n, r) {
      if (t === null || t.tag !== 6) {
        t = Xi(n, e.mode, r);
        t.return = e;
        return t;
      } else {
        t = i(t, n);
        t.return = e;
        return t;
      }
    }
    function l(e, t, n, r) {
      var a = n.type;
      if (a === ce) {
        e = d(e, t, n.props.children, r, n.key);
        vo(e, n);
        return e;
      } else if (t !== null && (t.elementType === a || typeof a == `object` && a && a.$$typeof === _e && uo(a) === t.type)) {
        t = i(t, n.props);
        vo(t, n);
        t.return = e;
        return t;
      } else {
        t = Ji(n.type, n.key, n.props, null, e.mode, r);
        vo(t, n);
        t.return = e;
        return t;
      }
    }
    function u(e, t, n, r) {
      if (t === null || t.tag !== 4 || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation) {
        t = Qi(n, e.mode, r);
        t.return = e;
        return t;
      } else {
        t = i(t, n.children || []);
        t.return = e;
        return t;
      }
    }
    function d(e, t, n, r, a) {
      if (t === null || t.tag !== 7) {
        t = Yi(n, e.mode, r, a);
        t.return = e;
        return t;
      } else {
        t = i(t, n);
        t.return = e;
        return t;
      }
    }
    function f(e, t, n) {
      if (typeof t == `string` && t !== `` || typeof t == `number` || typeof t == `bigint`) {
        t = Xi(`${t}`, e.mode, n);
        t.return = e;
        return t;
      }
      if (typeof t == `object` && t) {
        switch (t.$$typeof) {
          case oe:
            n = Ji(t.type, t.key, t.props, null, e.mode, n);
            vo(n, t);
            n.return = e;
            return n;
          case se:
            t = Qi(t, e.mode, n);
            t.return = e;
            return t;
          case _e:
            t = uo(t);
            return f(e, t, n);
        }
        if (De(t) || we(t)) {
          t = Yi(t, e.mode, n, null);
          t.return = e;
          return t;
        }
        if (typeof t.then == `function`) {
          return f(e, _o(t), n);
        }
        if (t.$$typeof === fe) {
          return f(e, Ia(e, t), n);
        }
        yo(e, t);
      }
      return null;
    }
    function p(e, t, n, r) {
      var i = t === null ? null : t.key;
      if (typeof n == `string` && n !== `` || typeof n == `number` || typeof n == `bigint`) {
        if (i === null) {
          return c(e, t, `${n}`, r);
        } else {
          return null;
        }
      }
      if (typeof n == `object` && n) {
        switch (n.$$typeof) {
          case oe:
            if (n.key === i) {
              return l(e, t, n, r);
            } else {
              return null;
            }
          case se:
            if (n.key === i) {
              return u(e, t, n, r);
            } else {
              return null;
            }
          case _e:
            n = uo(n);
            return p(e, t, n, r);
        }
        if (De(n) || we(n)) {
          if (i === null) {
            return d(e, t, n, r, null);
          } else {
            return null;
          }
        }
        if (typeof n.then == `function`) {
          return p(e, t, _o(n), r);
        }
        if (n.$$typeof === fe) {
          return p(e, t, Ia(e, n), r);
        }
        yo(e, n);
      }
      return null;
    }
    function m(e, t, n, r, i) {
      if (typeof r == `string` && r !== `` || typeof r == `number` || typeof r == `bigint`) {
        e = e.get(n) || null;
        return c(t, e, `${r}`, i);
      }
      if (typeof r == `object` && r) {
        switch (r.$$typeof) {
          case oe:
            e = e.get(r.key === null ? n : r.key) || null;
            return l(t, e, r, i);
          case se:
            e = e.get(r.key === null ? n : r.key) || null;
            return u(t, e, r, i);
          case _e:
            r = uo(r);
            return m(e, t, n, r, i);
        }
        if (De(r) || we(r)) {
          e = e.get(n) || null;
          return d(t, e, r, i, null);
        }
        if (typeof r.then == `function`) {
          return m(e, t, n, _o(r), i);
        }
        if (r.$$typeof === fe) {
          return m(e, t, n, Ia(t, r), i);
        }
        yo(t, r);
      }
      return null;
    }
    function h(i, a, s, c) {
      var l = null;
      var u = null;
      for (var d = a, h = a = 0, g = null; d !== null && h < s.length; h++) {
        if (d.index > h) {
          g = d;
          d = null;
        } else {
          g = d.sibling;
        }
        var _ = p(i, d, s[h], c);
        if (_ === null) {
          if (d === null) {
            d = g;
          }
          break;
        }
        if (e && d && _.alternate === null) {
          t(i, d);
        }
        a = o(_, a, h);
        if (u === null) {
          l = _;
        } else {
          u.sibling = _;
        }
        u = _;
        d = g;
      }
      if (h === s.length) {
        n(i, d);
        if (A) {
          ua(i, h);
        }
        return l;
      }
      if (d === null) {
        for (; h < s.length; h++) {
          d = f(i, s[h], c);
          if (d !== null) {
            a = o(d, a, h);
            if (u === null) {
              l = d;
            } else {
              u.sibling = d;
            }
            u = d;
          }
        }
        if (A) {
          ua(i, h);
        }
        return l;
      }
      for (d = r(d); h < s.length; h++) {
        g = m(d, i, h, s[h], c);
        if (g !== null) {
          if (e) {
            _ = g.alternate;
            if (_ !== null) {
              d.delete(_.key === null ? h : _.key);
            }
          }
          a = o(g, a, h);
          if (u === null) {
            l = g;
          } else {
            u.sibling = g;
          }
          u = g;
        }
      }
      if (e) {
        d.forEach(function (e) {
          return t(i, e);
        });
      }
      if (A) {
        ua(i, h);
      }
      return l;
    }
    function g(i, s, c, l) {
      if (c == null) {
        throw Error(a(151));
      }
      var u = null;
      var d = null;
      for (var h = s, g = s = 0, _ = null, v = c.next(); h !== null && !v.done; g++, v = c.next()) {
        if (h.index > g) {
          _ = h;
          h = null;
        } else {
          _ = h.sibling;
        }
        var y = p(i, h, v.value, l);
        if (y === null) {
          if (h === null) {
            h = _;
          }
          break;
        }
        if (e && h && y.alternate === null) {
          t(i, h);
        }
        s = o(y, s, g);
        if (d === null) {
          u = y;
        } else {
          d.sibling = y;
        }
        d = y;
        h = _;
      }
      if (v.done) {
        n(i, h);
        if (A) {
          ua(i, g);
        }
        return u;
      }
      if (h === null) {
        for (; !v.done; g++, v = c.next()) {
          v = f(i, v.value, l);
          if (v !== null) {
            s = o(v, s, g);
            if (d === null) {
              u = v;
            } else {
              d.sibling = v;
            }
            d = v;
          }
        }
        if (A) {
          ua(i, g);
        }
        return u;
      }
      for (h = r(h); !v.done; g++, v = c.next()) {
        v = m(h, i, g, v.value, l);
        if (v !== null) {
          if (e) {
            _ = v.alternate;
            if (_ !== null) {
              h.delete(_.key === null ? g : _.key);
            }
          }
          s = o(v, s, g);
          if (d === null) {
            u = v;
          } else {
            d.sibling = v;
          }
          d = v;
        }
      }
      if (e) {
        h.forEach(function (e) {
          return t(i, e);
        });
      }
      if (A) {
        ua(i, g);
      }
      return u;
    }
    function _(e, r, o, c) {
      if (typeof o == `object` && o && o.type === ce && o.key === null && o.props.ref === undefined) {
        o = o.props.children;
      }
      if (typeof o == `object` && o) {
        switch (o.$$typeof) {
          case oe:
            a: {
              var l = o.key;
              for (; r !== null;) {
                if (r.key === l) {
                  l = o.type;
                  if (l === ce) {
                    if (r.tag === 7) {
                      n(e, r.sibling);
                      c = i(r, o.props.children);
                      vo(c, o);
                      c.return = e;
                      e = c;
                      break a;
                    }
                  } else if (r.elementType === l || typeof l == `object` && l && l.$$typeof === _e && uo(l) === r.type) {
                    n(e, r.sibling);
                    c = i(r, o.props);
                    vo(c, o);
                    c.return = e;
                    e = c;
                    break a;
                  }
                  n(e, r);
                  break;
                }
                t(e, r);
                r = r.sibling;
              }
              if (o.type === ce) {
                c = Yi(o.props.children, e.mode, c, o.key);
                vo(c, o);
                c.return = e;
                e = c;
              } else {
                c = Ji(o.type, o.key, o.props, null, e.mode, c);
                vo(c, o);
                c.return = e;
                e = c;
              }
            }
            return s(e);
          case se:
            a: {
              for (l = o.key; r !== null;) {
                if (r.key === l) {
                  if (r.tag === 4 && r.stateNode.containerInfo === o.containerInfo && r.stateNode.implementation === o.implementation) {
                    n(e, r.sibling);
                    c = i(r, o.children || []);
                    c.return = e;
                    e = c;
                    break a;
                  }
                  n(e, r);
                  break;
                }
                t(e, r);
                r = r.sibling;
              }
              c = Qi(o, e.mode, c);
              c.return = e;
              e = c;
            }
            return s(e);
          case _e:
            o = uo(o);
            return _(e, r, o, c);
        }
        if (De(o)) {
          return h(e, r, o, c);
        }
        if (we(o)) {
          l = we(o);
          if (typeof l != `function`) {
            throw Error(a(150));
          }
          o = l.call(o);
          return g(e, r, o, c);
        }
        if (typeof o.then == `function`) {
          return _(e, r, _o(o), c);
        }
        if (o.$$typeof === fe) {
          return _(e, r, Ia(e, o), c);
        }
        yo(e, o);
      }
      if (typeof o == `string` && o !== `` || typeof o == `number` || typeof o == `bigint`) {
        o = `${o}`;
        if (r !== null && r.tag === 6) {
          n(e, r.sibling);
          c = i(r, o);
          c.return = e;
          e = c;
        } else {
          n(e, r);
          c = Xi(o, e.mode, c);
          c.return = e;
          e = c;
        }
        return s(e);
      } else {
        return n(e, r);
      }
    }
    return function (e, t, n, r) {
      try {
        go = 0;
        var i = _(e, t, n, r);
        ho = null;
        return i;
      } catch (t) {
        if (t === io || t === oo) {
          throw t;
        }
        var a = Wi(29, t, null, e.mode);
        a.lanes = r;
        a.return = e;
        return a;
      }
    };
  }
  var xo = bo(true);
  var So = bo(false);
  var Co = false;
  function wo(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    };
  }
  function To(e, t) {
    e = e.updateQueue;
    if (t.updateQueue === e) {
      t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        callbacks: null
      };
    }
  }
  function Eo(e) {
    return {
      lane: e,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    };
  }
  function Do(e, t, n) {
    var r = e.updateQueue;
    if (r === null) {
      return null;
    }
    r = r.shared;
    if (W & 2) {
      var i = r.pending;
      if (i === null) {
        t.next = t;
      } else {
        t.next = i.next;
        i.next = t;
      }
      r.pending = t;
      t = Vi(e);
      Bi(e, null, n);
      return t;
    }
    Li(e, r, t, n);
    return Vi(e);
  }
  function Oo(e, t, n) {
    t = t.updateQueue;
    if (t !== null && (t = t.shared, n & 4194048)) {
      var r = t.lanes;
      r &= e.pendingLanes;
      n |= r;
      t.lanes = n;
      Ot(e, n);
    }
  }
  function ko(e, t) {
    var n = e.updateQueue;
    var r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var i = null;
      var a = null;
      n = n.firstBaseUpdate;
      if (n !== null) {
        do {
          var o = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          if (a === null) {
            i = a = o;
          } else {
            a = a.next = o;
          }
          n = n.next;
        } while (n !== null);
        if (a === null) {
          i = a = t;
        } else {
          a = a.next = t;
        }
      } else {
        i = a = t;
      }
      n = {
        baseState: r.baseState,
        firstBaseUpdate: i,
        lastBaseUpdate: a,
        shared: r.shared,
        callbacks: r.callbacks
      };
      e.updateQueue = n;
    } else {
      e = n.lastBaseUpdate;
      if (e === null) {
        n.firstBaseUpdate = t;
      } else {
        e.next = t;
      }
      n.lastBaseUpdate = t;
    }
  }
  var Ao = false;
  function jo() {
    if (Ao) {
      var e = Ya;
      if (e !== null) {
        throw e;
      }
    }
  }
  function Mo(e, t, n, r) {
    Ao = false;
    var i = e.updateQueue;
    Co = false;
    var a = i.firstBaseUpdate;
    var o = i.lastBaseUpdate;
    var s = i.shared.pending;
    if (s !== null) {
      i.shared.pending = null;
      var c = s;
      var l = c.next;
      c.next = null;
      if (o === null) {
        a = l;
      } else {
        o.next = l;
      }
      o = c;
      var u = e.alternate;
      if (u !== null) {
        u = u.updateQueue;
        s = u.lastBaseUpdate;
        if (s !== o) {
          if (s === null) {
            u.firstBaseUpdate = l;
          } else {
            s.next = l;
          }
          u.lastBaseUpdate = c;
        }
      }
    }
    if (a !== null) {
      var d = i.baseState;
      o = 0;
      u = l = c = null;
      s = a;
      do {
        var f = s.lane & -536870913;
        var p = f !== s.lane;
        if (p ? (q & f) === f : (r & f) === f) {
          if (f !== 0 && f === Ja) {
            Ao = true;
          }
          if (u !== null) {
            u = u.next = {
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: null,
              next: null
            };
          }
          a: {
            var m = e;
            var h = s;
            f = t;
            var g = n;
            switch (h.tag) {
              case 1:
                m = h.payload;
                if (typeof m == `function`) {
                  d = m.call(g, d, f);
                  break a;
                }
                d = m;
                break a;
              case 3:
                m.flags = m.flags & -65537 | 128;
              case 0:
                m = h.payload;
                f = typeof m == `function` ? m.call(g, d, f) : m;
                if (f == null) {
                  break a;
                }
                d = S({}, d, f);
                break a;
              case 2:
                Co = true;
            }
          }
          f = s.callback;
          if (f !== null) {
            e.flags |= 64;
            if (p) {
              e.flags |= 8192;
            }
            p = i.callbacks;
            if (p === null) {
              i.callbacks = [f];
            } else {
              p.push(f);
            }
          }
        } else {
          p = {
            lane: f,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null
          };
          if (u === null) {
            l = u = p;
            c = d;
          } else {
            u = u.next = p;
          }
          o |= f;
        }
        s = s.next;
        if (s === null) {
          s = i.shared.pending;
          if (s === null) {
            break;
          }
          p = s;
          s = p.next;
          p.next = null;
          i.lastBaseUpdate = p;
          i.shared.pending = null;
        }
      } while (1);
      if (u === null) {
        c = d;
      }
      i.baseState = c;
      i.firstBaseUpdate = l;
      i.lastBaseUpdate = u;
      if (a === null) {
        i.shared.lanes = 0;
      }
      sd |= o;
      e.lanes = o;
      e.memoizedState = d;
    }
  }
  function No(e, t) {
    if (typeof e != `function`) {
      throw Error(a(191, e));
    }
    e.call(t);
  }
  function Po(e, t) {
    var n = e.callbacks;
    if (n !== null) {
      e.callbacks = null;
      e = 0;
      for (; e < n.length; e++) {
        No(n[e], t);
      }
    }
  }
  var Fo = je(null);
  var Io = je(0);
  function Lo(e, t) {
    e = od;
    T(Io, e);
    T(Fo, t);
    od = e | t.baseLanes;
  }
  function Ro() {
    T(Io, od);
    T(Fo, Fo.current);
  }
  function zo() {
    od = Io.current;
    Me(Fo);
    Me(Io);
  }
  var Bo = je(null);
  var Vo = null;
  function Ho(e) {
    var t = e.alternate;
    T(qo, qo.current & 1);
    T(Bo, e);
    if (Vo === null && (t === null || Fo.current !== null || t.memoizedState !== null)) {
      Vo = e;
    }
  }
  function Uo(e) {
    T(qo, qo.current);
    T(Bo, e);
    if (Vo === null) {
      Vo = e;
    }
  }
  function Wo(e) {
    if (e.tag === 22) {
      T(qo, qo.current);
      T(Bo, e);
      if (Vo === null) {
        Vo = e;
      }
    } else {
      Go();
    }
  }
  function Go() {
    T(qo, qo.current);
    T(Bo, Bo.current);
  }
  function Ko(e) {
    Me(Bo);
    if (Vo === e) {
      Vo = null;
    }
    Me(qo);
  }
  var qo = je(0);
  function Jo(e, t) {
    T(Bo, Bo.current);
    T(qo, t);
  }
  function Yo(e) {
    Me(qo);
    Me(Bo);
    if (Vo === e) {
      Vo = null;
    }
  }
  function Xo(e) {
    for (var t = e; t !== null;) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || om(n) || sm(n))) {
          return t;
        }
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== `independent`) {
        if (t.flags & 128) {
          return t;
        }
      } else if (t.child !== null) {
        t.child.return = t;
        t = t.child;
        continue;
      }
      if (t === e) {
        break;
      }
      while (t.sibling === null) {
        if (t.return === null || t.return === e) {
          return null;
        }
        t = t.return;
      }
      t.sibling.return = t.return;
      t = t.sibling;
    }
    return null;
  }
  var Zo = 0;
  var M = null;
  var N = null;
  var P = null;
  var Qo = false;
  var $o = false;
  var es = false;
  var ts = 0;
  var ns = 0;
  var rs = null;
  var is = 0;
  function F() {
    throw Error(a(321));
  }
  function as(e, t) {
    if (t === null) {
      return false;
    }
    for (var n = 0; n < t.length && n < e.length; n++) {
      if (!$r(e[n], t[n])) {
        return false;
      }
    }
    return true;
  }
  function os(e, t, n, r, i, a) {
    Zo = a;
    M = t;
    t.memoizedState = null;
    t.updateQueue = null;
    t.lanes = 0;
    C.H = e === null || e.memoizedState === null ? Sc : Cc;
    es = false;
    a = n(r, i);
    es = false;
    if ($o) {
      a = cs(t, n, r, i);
    }
    ss(e);
    return a;
  }
  function ss(e) {
    C.H = xc;
    var t = N !== null && N.next !== null;
    Zo = 0;
    P = N = M = null;
    Qo = false;
    ns = 0;
    rs = null;
    if (t) {
      throw Error(a(300));
    }
    if (e !== null && !L) {
      e = e.dependencies;
      if (e !== null && Na(e)) {
        L = true;
      }
    }
  }
  function cs(e, t, n, r) {
    M = e;
    var i = 0;
    do {
      if ($o) {
        rs = null;
      }
      ns = 0;
      $o = false;
      if (i >= 25) {
        throw Error(a(301));
      }
      i += 1;
      P = N = null;
      if (e.updateQueue != null) {
        var o = e.updateQueue;
        o.lastEffect = null;
        o.events = null;
        o.stores = null;
        if (o.memoCache != null) {
          o.memoCache.index = 0;
        }
      }
      C.H = wc;
      o = t(n, r);
    } while ($o);
    return o;
  }
  function ls() {
    var e = C.H;
    var t = e.useState()[0];
    t = typeof t.then == `function` ? hs(t) : t;
    e = e.useState()[0];
    if ((N === null ? null : N.memoizedState) !== e) {
      M.flags |= 1024;
    }
    return t;
  }
  function us() {
    var e = ts !== 0;
    ts = 0;
    return e;
  }
  function ds(e, t, n) {
    t.updateQueue = e.updateQueue;
    t.flags &= -2053;
    e.lanes &= ~n;
  }
  function fs(e) {
    if (Qo) {
      for (e = e.memoizedState; e !== null;) {
        var t = e.queue;
        if (t !== null) {
          t.pending = null;
        }
        e = e.next;
      }
      Qo = false;
    }
    Zo = 0;
    P = N = M = null;
    $o = false;
    ns = ts = 0;
    rs = null;
  }
  function ps() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    if (P === null) {
      M.memoizedState = P = e;
    } else {
      P = P.next = e;
    }
    return P;
  }
  function I() {
    if (N === null) {
      var e = M.alternate;
      e = e === null ? null : e.memoizedState;
    } else {
      e = N.next;
    }
    var t = P === null ? M.memoizedState : P.next;
    if (t !== null) {
      P = t;
      N = e;
    } else {
      if (e === null) {
        throw M.alternate === null ? Error(a(467)) : Error(a(310));
      }
      N = e;
      e = {
        memoizedState: N.memoizedState,
        baseState: N.baseState,
        baseQueue: N.baseQueue,
        queue: N.queue,
        next: null
      };
      if (P === null) {
        M.memoizedState = P = e;
      } else {
        P = P.next = e;
      }
    }
    return P;
  }
  function ms() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    };
  }
  function hs(e) {
    var t = ns;
    ns += 1;
    if (rs === null) {
      rs = [];
    }
    e = lo(rs, e, t);
    t = M;
    if ((P === null ? t.memoizedState : P.next) === null) {
      t = t.alternate;
      C.H = t === null || t.memoizedState === null ? Sc : Cc;
    }
    return e;
  }
  function gs(e) {
    if (typeof e == `object` && e) {
      if (typeof e.then == `function`) {
        return hs(e);
      }
      if (e.$$typeof === Se) {
        return;
      }
      if (e.$$typeof === fe) {
        return Fa(e);
      }
    }
    throw Error(a(438, String(e)));
  }
  function _s(e) {
    var t = null;
    var n = M.updateQueue;
    if (n !== null) {
      t = n.memoCache;
    }
    if (t == null) {
      var r = M.alternate;
      if (r !== null) {
        r = r.updateQueue;
        if (r !== null) {
          r = r.memoCache;
          if (r != null) {
            t = {
              data: r.data.map(function (e) {
                return e.slice();
              }),
              index: 0
            };
          }
        }
      }
    }
    t ??= {
      data: [],
      index: 0
    };
    if (n === null) {
      n = ms();
      M.updateQueue = n;
    }
    n.memoCache = t;
    n = t.data[t.index];
    if (n === undefined) {
      n = t.data[t.index] = Array(e);
      r = 0;
      for (; r < e; r++) {
        n[r] = be;
      }
    }
    t.index++;
    return n;
  }
  function vs(e, t) {
    if (typeof t == `function`) {
      return t(e);
    } else {
      return t;
    }
  }
  function ys(e) {
    return bs(I(), N, e);
  }
  function bs(e, t, n) {
    var r = e.queue;
    if (r === null) {
      throw Error(a(311));
    }
    r.lastRenderedReducer = n;
    var i = e.baseQueue;
    var o = r.pending;
    if (o !== null) {
      if (i !== null) {
        var s = i.next;
        i.next = o.next;
        o.next = s;
      }
      t.baseQueue = i = o;
      r.pending = null;
    }
    o = e.baseState;
    if (i === null) {
      e.memoizedState = o;
    } else {
      t = i.next;
      var c = s = null;
      var l = null;
      var u = t;
      var d = false;
      do {
        var f = u.lane & -536870913;
        if (f === u.lane ? (Zo & f) === f : (q & f) === f) {
          var p = u.revertLane;
          if (p === 0) {
            if (l !== null) {
              l = l.next = {
                lane: 0,
                revertLane: 0,
                gesture: null,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
              };
            }
            if (f === Ja) {
              d = true;
            }
          } else if ((Zo & p) === p) {
            u = u.next;
            if (p === Ja) {
              d = true;
            }
            continue;
          } else {
            f = {
              lane: 0,
              revertLane: u.revertLane,
              gesture: null,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null
            };
            if (l === null) {
              c = l = f;
              s = o;
            } else {
              l = l.next = f;
            }
            M.lanes |= p;
            sd |= p;
          }
          f = u.action;
          if (es) {
            n(o, f);
          }
          o = u.hasEagerState ? u.eagerState : n(o, f);
        } else {
          p = {
            lane: f,
            revertLane: u.revertLane,
            gesture: u.gesture,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null
          };
          if (l === null) {
            c = l = p;
            s = o;
          } else {
            l = l.next = p;
          }
          M.lanes |= f;
          sd |= f;
        }
        u = u.next;
      } while (u !== null && u !== t);
      if (l === null) {
        s = o;
      } else {
        l.next = c;
      }
      if (!$r(o, e.memoizedState) && (L = true, d && (n = Ya, n !== null))) {
        throw n;
      }
      e.memoizedState = o;
      e.baseState = s;
      e.baseQueue = l;
      r.lastRenderedState = o;
    }
    if (i === null) {
      r.lanes = 0;
    }
    return [e.memoizedState, r.dispatch];
  }
  function xs(e) {
    var t = I();
    var n = t.queue;
    if (n === null) {
      throw Error(a(311));
    }
    n.lastRenderedReducer = e;
    var r = n.dispatch;
    var i = n.pending;
    var o = t.memoizedState;
    if (i !== null) {
      n.pending = null;
      var s = i = i.next;
      do {
        o = e(o, s.action);
        s = s.next;
      } while (s !== i);
      if (!$r(o, t.memoizedState)) {
        L = true;
      }
      t.memoizedState = o;
      if (t.baseQueue === null) {
        t.baseState = o;
      }
      n.lastRenderedState = o;
    }
    return [o, r];
  }
  function Ss(e, t, n) {
    var r = M;
    var i = I();
    var o = A;
    if (o) {
      if (n === undefined) {
        throw Error(a(407));
      }
      n = n();
    } else {
      n = t();
    }
    var s = !$r((N || i).memoizedState, n);
    if (s) {
      i.memoizedState = n;
      L = true;
    }
    i = i.queue;
    qs(Ts.bind(null, r, i, e), [e]);
    e = i.getSnapshot !== t || s || P !== null && !!(P.memoizedState.tag & 1);
    Hs(e ? 9 : 8, {
      destroy: undefined
    }, ws.bind(null, r, i, n, t), null);
    if (e) {
      r.flags |= 2048;
      if (G === null) {
        throw Error(a(349));
      }
      if (!o && !(Zo & 127)) {
        Cs(r, t, n);
      }
    }
    return n;
  }
  function Cs(e, t, n) {
    e.flags |= 16384;
    e = {
      getSnapshot: t,
      value: n
    };
    t = M.updateQueue;
    if (t === null) {
      t = ms();
      M.updateQueue = t;
      t.stores = [e];
    } else {
      n = t.stores;
      if (n === null) {
        t.stores = [e];
      } else {
        n.push(e);
      }
    }
  }
  function ws(e, t, n, r) {
    t.value = n;
    t.getSnapshot = r;
    if (Es(t)) {
      Ds(e);
    }
  }
  function Ts(e, t, n) {
    return n(function () {
      if (Es(t)) {
        Ds(e);
      }
    });
  }
  function Es(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !$r(e, n);
    } catch {
      return true;
    }
  }
  function Ds(e) {
    var t = zi(e, 2);
    if (t !== null) {
      Pd(t, e, 2);
    }
  }
  function Os(e) {
    var t = ps();
    if (typeof e == `function`) {
      var n = e;
      e = n();
      if (es) {
        ut(true);
        try {
          n();
        } finally {
          ut(false);
        }
      }
    }
    t.memoizedState = t.baseState = e;
    t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: vs,
      lastRenderedState: e
    };
    return t;
  }
  function ks(e, t, n, r) {
    e.baseState = n;
    return bs(e, N, typeof r == `function` ? r : vs);
  }
  function As(e, t, n, r, i) {
    if (vc(e)) {
      throw Error(a(485));
    }
    e = t.action;
    if (e !== null) {
      var o = {
        payload: i,
        action: e,
        next: null,
        isTransition: true,
        status: `pending`,
        value: null,
        reason: null,
        listeners: [],
        then: function (e) {
          o.listeners.push(e);
        }
      };
      if (C.T === null) {
        o.isTransition = false;
      } else {
        n(true);
      }
      r(o);
      n = t.pending;
      if (n === null) {
        o.next = t.pending = o;
        js(t, o);
      } else {
        o.next = n.next;
        t.pending = n.next = o;
      }
    }
  }
  function js(e, t) {
    var n = t.action;
    var r = t.payload;
    var i = e.state;
    if (t.isTransition) {
      var a = C.T;
      var o = {};
      o.types = a === null ? null : a.types;
      C.T = o;
      try {
        var s = n(i, r);
        var c = C.S;
        if (c !== null) {
          c(o, s);
        }
        Ms(e, t, s);
      } catch (n) {
        Ps(e, t, n);
      } finally {
        if (a !== null && o.types !== null) {
          a.types = o.types;
        }
        C.T = a;
      }
    } else {
      try {
        a = n(i, r);
        Ms(e, t, a);
      } catch (n) {
        Ps(e, t, n);
      }
    }
  }
  function Ms(e, t, n) {
    if (typeof n == `object` && n && typeof n.then == `function`) {
      n.then(function (n) {
        Ns(e, t, n);
      }, function (n) {
        return Ps(e, t, n);
      });
    } else {
      Ns(e, t, n);
    }
  }
  function Ns(e, t, n) {
    t.status = `fulfilled`;
    t.value = n;
    Fs(t);
    e.state = n;
    t = e.pending;
    if (t !== null) {
      n = t.next;
      if (n === t) {
        e.pending = null;
      } else {
        n = n.next;
        t.next = n;
        js(e, n);
      }
    }
  }
  function Ps(e, t, n) {
    var r = e.pending;
    e.pending = null;
    if (r !== null) {
      r = r.next;
      do {
        t.status = `rejected`;
        t.reason = n;
        Fs(t);
        t = t.next;
      } while (t !== r);
    }
    e.action = null;
  }
  function Fs(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) {
      (0, e[t])();
    }
  }
  function Is(e, t) {
    return t;
  }
  function Ls(e, t) {
    if (A) {
      var n = G.formState;
      if (n !== null) {
        a: {
          var r = M;
          if (A) {
            if (k) {
              b: {
                for (var i = k, a = ga; i.nodeType !== 8;) {
                  if (!a || (i = lm(i.nextSibling), i === null)) {
                    i = null;
                    break b;
                  }
                }
                a = i.data;
                i = a === `F!` || a === `F` ? i : null;
              }
              if (i) {
                k = lm(i.nextSibling);
                r = i.data === `F!`;
                break a;
              }
            }
            va(r);
          }
          r = false;
        }
        if (r) {
          t = n[0];
        }
      }
    }
    n = ps();
    n.memoizedState = n.baseState = t;
    r = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Is,
      lastRenderedState: t
    };
    n.queue = r;
    n = hc.bind(null, M, r);
    r.dispatch = n;
    r = Os(false);
    a = _c.bind(null, M, false, r.queue);
    r = ps();
    i = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    };
    r.queue = i;
    n = As.bind(null, M, i, a, n);
    i.dispatch = n;
    r.memoizedState = e;
    return [t, n, false];
  }
  function Rs(e) {
    return zs(I(), N, e);
  }
  function zs(e, t, n) {
    t = bs(e, t, Is)[0];
    e = ys(vs)[0];
    if (typeof t == `object` && t && typeof t.then == `function`) {
      try {
        var r = hs(t);
      } catch (e) {
        throw e === io ? oo : e;
      }
    } else {
      r = t;
    }
    t = I();
    var i = t.queue;
    var a = i.dispatch;
    if (n !== t.memoizedState) {
      M.flags |= 2048;
      Hs(9, {
        destroy: undefined
      }, Bs.bind(null, i, n), null);
    }
    return [r, a, e];
  }
  function Bs(e, t) {
    e.action = t;
  }
  function Vs(e) {
    var t = I();
    var n = N;
    if (n !== null) {
      return zs(t, n, e);
    }
    I();
    t = t.memoizedState;
    n = I();
    var r = n.queue.dispatch;
    n.memoizedState = e;
    return [t, r, false];
  }
  function Hs(e, t, n, r) {
    e = {
      tag: e,
      create: n,
      deps: r,
      inst: t,
      next: null
    };
    t = M.updateQueue;
    if (t === null) {
      t = ms();
      M.updateQueue = t;
    }
    n = t.lastEffect;
    if (n === null) {
      t.lastEffect = e.next = e;
    } else {
      r = n.next;
      n.next = e;
      e.next = r;
      t.lastEffect = e;
    }
    return e;
  }
  function Us() {
    return I().memoizedState;
  }
  function Ws(e, t, n, r) {
    var i = ps();
    M.flags |= e;
    i.memoizedState = Hs(t | 1, {
      destroy: undefined
    }, n, r === undefined ? null : r);
  }
  function Gs(e, t, n, r) {
    var i = I();
    r = r === undefined ? null : r;
    var a = i.memoizedState.inst;
    if (N !== null && r !== null && as(r, N.memoizedState.deps)) {
      i.memoizedState = Hs(t, a, n, r);
    } else {
      M.flags |= e;
      i.memoizedState = Hs(t | 1, a, n, r);
    }
  }
  function Ks(e, t) {
    Ws(8390656, 8, e, t);
  }
  function qs(e, t) {
    Gs(2048, 8, e, t);
  }
  function Js(e) {
    M.flags |= 4;
    var t = M.updateQueue;
    if (t === null) {
      t = ms();
      M.updateQueue = t;
      t.events = [e];
    } else {
      var n = t.events;
      if (n === null) {
        t.events = [e];
      } else {
        n.push(e);
      }
    }
  }
  function Ys(e) {
    var t = I().memoizedState;
    Js({
      ref: t,
      nextImpl: e
    });
    return function () {
      if (W & 2) {
        throw Error(a(440));
      }
      return t.impl.apply(undefined, arguments);
    };
  }
  function Xs(e, t) {
    return Gs(4, 2, e, t);
  }
  function Zs(e, t) {
    return Gs(4, 4, e, t);
  }
  function Qs(e, t) {
    if (typeof t == `function`) {
      e = e();
      var n = t(e);
      return function () {
        if (typeof n == `function`) {
          n();
        } else {
          t(null);
        }
      };
    }
    if (t != null) {
      e = e();
      t.current = e;
      return function () {
        t.current = null;
      };
    }
  }
  function $s(e, t, n) {
    n = n == null ? null : n.concat([e]);
    Gs(4, 4, Qs.bind(null, t, e), n);
  }
  function ec() {}
  function tc(e, t) {
    var n = I();
    t = t === undefined ? null : t;
    var r = n.memoizedState;
    if (t !== null && as(t, r[1])) {
      return r[0];
    } else {
      n.memoizedState = [e, t];
      return e;
    }
  }
  function nc(e, t) {
    var n = I();
    t = t === undefined ? null : t;
    var r = n.memoizedState;
    if (t !== null && as(t, r[1])) {
      return r[0];
    }
    r = e();
    if (es) {
      ut(true);
      try {
        e();
      } finally {
        ut(false);
      }
    }
    n.memoizedState = [r, t];
    return r;
  }
  function rc(e, t, n) {
    if (n === undefined || Zo & 1073741824 && !(q & 261930)) {
      return e.memoizedState = t;
    } else {
      e.memoizedState = n;
      e = Md();
      M.lanes |= e;
      sd |= e;
      return n;
    }
  }
  function ic(e, t, n, r) {
    if ($r(n, t)) {
      return n;
    } else if (Fo.current === null) {
      if (!(Zo & 106) || Zo & 1073741824 && !(q & 261930)) {
        L = true;
        return e.memoizedState = n;
      } else {
        e = Md();
        M.lanes |= e;
        sd |= e;
        return t;
      }
    } else {
      e = rc(e, n, r);
      if (!$r(e, t)) {
        L = true;
      }
      return e;
    }
  }
  function ac(e, t, n, r, i) {
    var a = w.p;
    w.p = a !== 0 && a < 8 ? a : 8;
    var o = C.T;
    var s = {};
    s.types = o === null ? null : o.types;
    C.T = s;
    _c(e, false, t, n);
    try {
      var c = i();
      var l = C.S;
      if (l !== null) {
        l(s, c);
      }
      if (typeof c == `object` && c && typeof c.then == `function`) {
        gc(e, t, Qa(c, r), jd(e));
      } else {
        gc(e, t, r, jd(e));
      }
    } catch (n) {
      gc(e, t, {
        then: function () {},
        status: `rejected`,
        reason: n
      }, jd());
    } finally {
      w.p = a;
      if (o !== null && s.types !== null) {
        o.types = s.types;
      }
      C.T = o;
    }
  }
  function oc() {}
  function sc(e, t, n, r) {
    if (e.tag !== 5) {
      throw Error(a(476));
    }
    var i = cc(e).queue;
    ac(e, i, t, Oe, n === null ? oc : function () {
      lc(e);
      return n(r);
    });
  }
  function cc(e) {
    var t = e.memoizedState;
    if (t !== null) {
      return t;
    }
    t = {
      memoizedState: Oe,
      baseState: Oe,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vs,
        lastRenderedState: Oe
      },
      next: null
    };
    var n = {};
    t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: vs,
        lastRenderedState: n
      },
      next: null
    };
    e.memoizedState = t;
    e = e.alternate;
    if (e !== null) {
      e.memoizedState = t;
    }
    return t;
  }
  function lc(e) {
    var t = cc(e);
    if (t.next === null) {
      t = e.alternate.memoizedState;
    }
    gc(e, t.next.queue, {}, jd());
  }
  function uc() {
    return Fa(sh);
  }
  function dc() {
    return I().memoizedState;
  }
  function fc() {
    return I().memoizedState;
  }
  function pc(e) {
    for (var t = e.return; t !== null;) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = jd();
          e = Eo(n);
          var r = Do(t, e, n);
          if (r !== null) {
            Pd(r, t, n);
            Oo(r, t, n);
          }
          t = {
            cache: Va()
          };
          e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function mc(e, t, n) {
    var r = jd();
    n = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (vc(e)) {
      yc(t, n);
    } else {
      n = Ri(e, t, n, r);
      if (n !== null) {
        Pd(n, e, r);
        bc(n, t, r);
      }
    }
  }
  function hc(e, t, n) {
    gc(e, t, n, jd());
  }
  function gc(e, t, n, r) {
    var i = {
      lane: r,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (vc(e)) {
      yc(t, i);
    } else {
      var a = e.alternate;
      if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) {
        try {
          var o = t.lastRenderedState;
          var s = a(o, n);
          i.hasEagerState = true;
          i.eagerState = s;
          if ($r(s, o)) {
            Li(e, t, i, 0);
            if (G === null) {
              Ii();
            }
            return false;
          }
        } catch {}
      }
      n = Ri(e, t, i, r);
      if (n !== null) {
        Pd(n, e, r);
        bc(n, t, r);
        return true;
      }
    }
    return false;
  }
  function _c(e, t, n, r) {
    r = {
      lane: 2,
      revertLane: Pf(),
      gesture: null,
      action: r,
      hasEagerState: false,
      eagerState: null,
      next: null
    };
    if (vc(e)) {
      if (t) {
        throw Error(a(479));
      }
    } else {
      t = Ri(e, n, r, 2);
      if (t !== null) {
        Pd(t, e, 2);
      }
    }
  }
  function vc(e) {
    var t = e.alternate;
    return e === M || t !== null && t === M;
  }
  function yc(e, t) {
    $o = Qo = true;
    var n = e.pending;
    if (n === null) {
      t.next = t;
    } else {
      t.next = n.next;
      n.next = t;
    }
    e.pending = t;
  }
  function bc(e, t, n) {
    if (n & 4194048) {
      var r = t.lanes;
      r &= e.pendingLanes;
      n |= r;
      t.lanes = n;
      Ot(e, n);
    }
  }
  var xc = {
    readContext: Fa,
    use: gs,
    useCallback: F,
    useContext: F,
    useEffect: F,
    useImperativeHandle: F,
    useLayoutEffect: F,
    useInsertionEffect: F,
    useMemo: F,
    useReducer: F,
    useRef: F,
    useState: F,
    useDebugValue: F,
    useDeferredValue: F,
    useTransition: F,
    useSyncExternalStore: F,
    useId: F,
    useHostTransitionStatus: F,
    useFormState: F,
    useActionState: F,
    useOptimistic: F,
    useMemoCache: F,
    useCacheRefresh: F,
    useEffectEvent: F
  };
  var Sc = {
    readContext: Fa,
    use: gs,
    useCallback: function (e, t) {
      ps().memoizedState = [e, t === undefined ? null : t];
      return e;
    },
    useContext: Fa,
    useEffect: Ks,
    useImperativeHandle: function (e, t, n) {
      n = n == null ? null : n.concat([e]);
      Ws(4194308, 4, Qs.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return Ws(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      Ws(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = ps();
      t = t === undefined ? null : t;
      var r = e();
      if (es) {
        ut(true);
        try {
          e();
        } finally {
          ut(false);
        }
      }
      n.memoizedState = [r, t];
      return r;
    },
    useReducer: function (e, t, n) {
      var r = ps();
      if (n !== undefined) {
        var i = n(t);
        if (es) {
          ut(true);
          try {
            n(t);
          } finally {
            ut(false);
          }
        }
      } else {
        i = t;
      }
      r.memoizedState = r.baseState = i;
      e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: i
      };
      r.queue = e;
      e = e.dispatch = mc.bind(null, M, e);
      return [r.memoizedState, e];
    },
    useRef: function (e) {
      var t = ps();
      e = {
        current: e
      };
      return t.memoizedState = e;
    },
    useState: function (e) {
      e = Os(e);
      var t = e.queue;
      var n = hc.bind(null, M, t);
      t.dispatch = n;
      return [e.memoizedState, n];
    },
    useDebugValue: ec,
    useDeferredValue: function (e, t) {
      return rc(ps(), e, t);
    },
    useTransition: function () {
      var e = Os(false);
      e = ac.bind(null, M, e.queue, true, false);
      ps().memoizedState = e;
      return [false, e];
    },
    useSyncExternalStore: function (e, t, n) {
      var r = M;
      var i = ps();
      if (A) {
        if (n === undefined) {
          throw Error(a(407));
        }
        n = n();
      } else {
        n = t();
        if (G === null) {
          throw Error(a(349));
        }
        if (!(q & 127)) {
          Cs(r, t, n);
        }
      }
      i.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t
      };
      i.queue = o;
      Ks(Ts.bind(null, r, o, e), [e]);
      r.flags |= 2048;
      Hs(9, {
        destroy: undefined
      }, ws.bind(null, r, o, n, t), null);
      return n;
    },
    useId: function () {
      var e = ps();
      var t = G.identifierPrefix;
      if (A) {
        var n = la;
        var r = ca;
        n = (r & ~(1 << 32 - dt(r) - 1)).toString(32) + n;
        t = `_${t}R_${n}`;
        n = ts++;
        if (n > 0) {
          t += `H${n.toString(32)}`;
        }
        t += `_`;
      } else {
        n = is++;
        t = `_${t}r_${n.toString(32)}_`;
      }
      return e.memoizedState = t;
    },
    useHostTransitionStatus: uc,
    useFormState: Ls,
    useActionState: Ls,
    useOptimistic: function (e) {
      var t = ps();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      t.queue = n;
      t = _c.bind(null, M, true, n);
      n.dispatch = t;
      return [e, t];
    },
    useMemoCache: _s,
    useCacheRefresh: function () {
      return ps().memoizedState = pc.bind(null, M);
    },
    useEffectEvent: function (e) {
      var t = ps();
      var n = {
        impl: e
      };
      t.memoizedState = n;
      return function () {
        if (W & 2) {
          throw Error(a(440));
        }
        return n.impl.apply(undefined, arguments);
      };
    }
  };
  var Cc = {
    readContext: Fa,
    use: gs,
    useCallback: tc,
    useContext: Fa,
    useEffect: qs,
    useImperativeHandle: $s,
    useInsertionEffect: Xs,
    useLayoutEffect: Zs,
    useMemo: nc,
    useReducer: ys,
    useRef: Us,
    useState: function () {
      return ys(vs);
    },
    useDebugValue: ec,
    useDeferredValue: function (e, t) {
      return ic(I(), N.memoizedState, e, t);
    },
    useTransition: function () {
      var e = ys(vs)[0];
      var t = I().memoizedState;
      return [typeof e == `boolean` ? e : hs(e), t];
    },
    useSyncExternalStore: Ss,
    useId: dc,
    useHostTransitionStatus: uc,
    useFormState: Rs,
    useActionState: Rs,
    useOptimistic: function (e, t) {
      return ks(I(), N, e, t);
    },
    useMemoCache: _s,
    useCacheRefresh: fc,
    useEffectEvent: Ys
  };
  var wc = {
    readContext: Fa,
    use: gs,
    useCallback: tc,
    useContext: Fa,
    useEffect: qs,
    useImperativeHandle: $s,
    useInsertionEffect: Xs,
    useLayoutEffect: Zs,
    useMemo: nc,
    useReducer: xs,
    useRef: Us,
    useState: function () {
      return xs(vs);
    },
    useDebugValue: ec,
    useDeferredValue: function (e, t) {
      var n = I();
      if (N === null) {
        return rc(n, e, t);
      } else {
        return ic(n, N.memoizedState, e, t);
      }
    },
    useTransition: function () {
      var e = xs(vs)[0];
      var t = I().memoizedState;
      return [typeof e == `boolean` ? e : hs(e), t];
    },
    useSyncExternalStore: Ss,
    useId: dc,
    useHostTransitionStatus: uc,
    useFormState: Vs,
    useActionState: Vs,
    useOptimistic: function (e, t) {
      var n = I();
      if (N === null) {
        n.baseState = e;
        return [e, n.queue.dispatch];
      } else {
        return ks(n, N, e, t);
      }
    },
    useMemoCache: _s,
    useCacheRefresh: fc,
    useEffectEvent: Ys
  };
  function Tc(e, t, n, r) {
    t = e.memoizedState;
    n = n(r, t);
    n = n == null ? t : S({}, t, n);
    e.memoizedState = n;
    if (e.lanes === 0) {
      e.updateQueue.baseState = n;
    }
  }
  var Ec = {
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = jd();
      var i = Eo(r);
      i.payload = t;
      if (n != null) {
        i.callback = n;
      }
      t = Do(e, i, r);
      if (t !== null) {
        Pd(t, e, r);
        Oo(t, e, r);
      }
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = jd();
      var i = Eo(r);
      i.tag = 1;
      i.payload = t;
      if (n != null) {
        i.callback = n;
      }
      t = Do(e, i, r);
      if (t !== null) {
        Pd(t, e, r);
        Oo(t, e, r);
      }
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = jd();
      var r = Eo(n);
      r.tag = 2;
      if (t != null) {
        r.callback = t;
      }
      t = Do(e, r, n);
      if (t !== null) {
        Pd(t, e, n);
        Oo(t, e, n);
      }
    }
  };
  function Dc(e, t, n, r, i, a, o) {
    e = e.stateNode;
    if (typeof e.shouldComponentUpdate == `function`) {
      return e.shouldComponentUpdate(r, a, o);
    } else if (t.prototype && t.prototype.isPureReactComponent) {
      return !ei(n, r) || !ei(i, a);
    } else {
      return true;
    }
  }
  function Oc(e, t, n, r) {
    e = t.state;
    if (typeof t.componentWillReceiveProps == `function`) {
      t.componentWillReceiveProps(n, r);
    }
    if (typeof t.UNSAFE_componentWillReceiveProps == `function`) {
      t.UNSAFE_componentWillReceiveProps(n, r);
    }
    if (t.state !== e) {
      Ec.enqueueReplaceState(t, t.state, null);
    }
  }
  function kc(e, t) {
    var n = t;
    if (`ref` in t) {
      n = {};
      for (var r in t) {
        if (r !== `ref`) {
          n[r] = t[r];
        }
      }
    }
    if (e = e.defaultProps) {
      if (n === t) {
        n = S({}, n);
      }
      for (var i in e) {
        if (n[i] === undefined) {
          n[i] = e[i];
        }
      }
    }
    return n;
  }
  function Ac(e) {
    Mi(e);
  }
  function jc(e) {
    console.error(e);
  }
  function Mc(e) {
    Mi(e);
  }
  function Nc(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, {
        componentStack: t.stack
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Pc(e, t, n) {
    try {
      var r = e.onCaughtError;
      r(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function Fc(e, t, n) {
    n = Eo(n);
    n.tag = 3;
    n.payload = {
      element: null
    };
    n.callback = function () {
      Nc(e, t);
    };
    return n;
  }
  function Ic(e) {
    e = Eo(e);
    e.tag = 3;
    return e;
  }
  function Lc(e, t, n, r) {
    var i = n.type.getDerivedStateFromError;
    if (typeof i == `function`) {
      var a = r.value;
      e.payload = function () {
        return i(a);
      };
      e.callback = function () {
        Pc(t, n, r);
      };
    }
    var o = n.stateNode;
    if (o !== null && typeof o.componentDidCatch == `function`) {
      e.callback = function () {
        Pc(t, n, r);
        if (typeof i != `function`) {
          if (yd === null) {
            yd = new Set([this]);
          } else {
            yd.add(this);
          }
        }
        var e = r.stack;
        this.componentDidCatch(r.value, {
          componentStack: e === null ? `` : e
        });
      };
    }
  }
  function Rc(e, t, n, r, i) {
    n.flags |= 32768;
    if (typeof r == `object` && r && typeof r.then == `function`) {
      t = n.alternate;
      if (t !== null) {
        Ma(t, n, i, true);
      }
      n = Bo.current;
      if (n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            if (Vo === null) {
              Kd();
            } else if (n.alternate === null && Y === 0) {
              Y = 3;
            }
            n.flags &= -257;
            n.flags |= 65536;
            n.lanes = i;
            if (r === so) {
              n.flags |= 16384;
            } else {
              t = n.updateQueue;
              if (t === null) {
                n.updateQueue = new Set([r]);
              } else {
                t.add(r);
              }
              mf(e, r, i);
            }
            return false;
          case 22:
            n.flags |= 65536;
            if (r === so) {
              n.flags |= 16384;
            } else {
              t = n.updateQueue;
              if (t === null) {
                t = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: new Set([r])
                };
                n.updateQueue = t;
              } else {
                n = t.retryQueue;
                if (n === null) {
                  t.retryQueue = new Set([r]);
                } else {
                  n.add(r);
                }
              }
              mf(e, r, i);
            }
            return false;
        }
        throw Error(a(435, n.tag));
      }
      mf(e, r, i);
      Kd();
      return false;
    }
    if (A) {
      t = Bo.current;
      if (t === null) {
        if (r !== _a) {
          t = Error(a(423), {
            cause: r
          });
          wa(ea(t, n));
        }
        e = e.current.alternate;
        e.flags |= 65536;
        i &= -i;
        e.lanes |= i;
        r = ea(r, n);
        i = Fc(e.stateNode, r, i);
        ko(e, i);
        if (Y !== 4) {
          Y = 2;
        }
      } else {
        if (!(t.flags & 65536)) {
          t.flags |= 256;
        }
        t.flags |= 65536;
        t.lanes = i;
        if (r !== _a) {
          e = Error(a(422), {
            cause: r
          });
          wa(ea(e, n));
        }
      }
      return false;
    }
    var o = Error(a(520), {
      cause: r
    });
    o = ea(o, n);
    if (fd === null) {
      fd = [o];
    } else {
      fd.push(o);
    }
    if (Y !== 4) {
      Y = 2;
    }
    if (t === null) {
      return true;
    }
    r = ea(r, n);
    n = t;
    do {
      switch (n.tag) {
        case 3:
          n.flags |= 65536;
          e = i & -i;
          n.lanes |= e;
          e = Fc(n.stateNode, r, e);
          ko(n, e);
          return false;
        case 1:
          t = n.type;
          o = n.stateNode;
          if (!(n.flags & 128) && (typeof t.getDerivedStateFromError == `function` || o !== null && typeof o.componentDidCatch == `function` && (yd === null || !yd.has(o)))) {
            n.flags |= 65536;
            i &= -i;
            n.lanes |= i;
            i = Ic(i);
            Lc(i, e, n, r);
            ko(n, i);
            return false;
          }
          break;
        case 22:
          if (n.memoizedState !== null) {
            n.flags |= 65536;
            return false;
          }
      }
      n = n.return;
    } while (n !== null);
    return false;
  }
  var zc = Error(a(461));
  var L = false;
  function R(e, t, n, r) {
    t.child = e === null ? So(t, null, n, r) : xo(t, e.child, n, r);
  }
  function Bc(e, t, n, r, i) {
    n = n.render;
    var a = t.ref;
    if (`ref` in r) {
      var o = {};
      for (var s in r) {
        if (s !== `ref`) {
          o[s] = r[s];
        }
      }
    } else {
      o = r;
    }
    Pa(t);
    r = os(e, t, n, o, a, i);
    s = us();
    if (e !== null && !L) {
      ds(e, t, i);
      return ml(e, t, i);
    } else {
      if (A && s) {
        fa(t);
      }
      t.flags |= 1;
      R(e, t, r, i);
      return t.child;
    }
  }
  function Vc(e, t, n, r, i) {
    if (e === null) {
      var a = n.type;
      if (typeof a == `function` && !Gi(a) && a.defaultProps === undefined && n.compare === null) {
        t.tag = 15;
        t.type = a;
        return Hc(e, t, a, r, i);
      } else {
        e = Ji(n.type, null, r, t, t.mode, i);
        e.ref = t.ref;
        e.return = t;
        return t.child = e;
      }
    }
    a = e.child;
    if (!hl(e, i)) {
      var o = a.memoizedProps;
      n = n.compare;
      n = n === null ? ei : n;
      if (n(o, r) && e.ref === t.ref) {
        return ml(e, t, i);
      }
    }
    t.flags |= 1;
    e = Ki(a, r);
    e.ref = t.ref;
    e.return = t;
    return t.child = e;
  }
  function Hc(e, t, n, r, i) {
    if (e !== null) {
      var a = e.memoizedProps;
      if (ei(a, r) && e.ref === t.ref) {
        L = false;
        t.pendingProps = r = a;
        if (hl(e, i)) {
          if (e.flags & 131072) {
            L = true;
          }
        } else {
          t.lanes = e.lanes;
          return ml(e, t, i);
        }
      }
    }
    return Xc(e, t, n, r, i);
  }
  function Uc(e, t, n, r) {
    var i = r.children;
    var a = e === null ? null : e.memoizedState;
    if (e === null && t.stateNode === null) {
      t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      };
    }
    if (r.mode === `hidden`) {
      if (t.flags & 128) {
        a = a === null ? n : a.baseLanes | n;
        if (e !== null) {
          r = t.child = e.child;
          i = 0;
          while (r !== null) {
            i = i | r.lanes | r.childLanes;
            r = r.sibling;
          }
          r = i & ~a;
        } else {
          r = 0;
          t.child = null;
        }
        return Gc(e, t, a, n, r);
      }
      if (n & 536870912) {
        t.memoizedState = {
          baseLanes: 0,
          cachePool: null
        };
        if (e !== null) {
          no(t, a === null ? null : a.cachePool);
        }
        if (a === null) {
          Ro();
        } else {
          Lo(t, a);
        }
        Wo(t);
      } else {
        r = t.lanes = 536870912;
        return Gc(e, t, a === null ? n : a.baseLanes | n, n, r);
      }
    } else if (a === null) {
      if (e !== null) {
        no(t, null);
      }
      Ro();
      Go();
    } else {
      no(t, a.cachePool);
      Lo(t, a);
      Go();
      t.memoizedState = null;
    }
    R(e, t, i, n);
    return t.child;
  }
  function Wc(e, t) {
    if ((e === null || e.tag !== 22) && t.stateNode === null) {
      t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      };
    }
    return t.sibling;
  }
  function Gc(e, t, n, r, i) {
    var a = to();
    a = a === null ? null : {
      parent: j._currentValue,
      pool: a
    };
    t.memoizedState = {
      baseLanes: n,
      cachePool: a
    };
    if (e !== null) {
      no(t, null);
    }
    Ro();
    Wo(t);
    if (e !== null) {
      Ma(e, t, r, true);
    }
    t.childLanes = i;
    return null;
  }
  function Kc(e, t) {
    t = al({
      mode: t.mode,
      children: t.children
    }, e.mode);
    t.ref = e.ref;
    e.child = t;
    t.return = e;
    return t;
  }
  function qc(e, t, n) {
    xo(t, e.child, null, n);
    e = Kc(t, t.pendingProps);
    e.flags |= 2;
    Ko(t);
    t.memoizedState = null;
    return e;
  }
  function Jc(e, t, n) {
    var r = t.pendingProps;
    var i = !!(t.flags & 128);
    t.flags &= -129;
    if (e === null) {
      if (A) {
        if (r.mode === `hidden`) {
          e = Kc(t, r);
          t.lanes = 536870912;
          e.memoizedState = {
            baseLanes: 0,
            cachePool: null
          };
          return Wc(null, e);
        }
        Uo(t);
        if (e = k) {
          e = am(e, ga);
          e = e !== null && e.data === `&` ? e : null;
          if (e !== null) {
            t.memoizedState = {
              dehydrated: e,
              treeContext: sa === null ? null : {
                id: ca,
                overflow: la
              },
              retryLane: 536870912,
              hydrationErrors: null
            };
            n = Zi(e);
            n.return = t;
            t.child = n;
            O = t;
            k = null;
          }
        } else {
          e = null;
        }
        if (e === null) {
          throw va(t);
        }
        t.lanes = 536870912;
        return null;
      }
      return Kc(t, r);
    }
    var o = e.memoizedState;
    if (o !== null) {
      var s = o.dehydrated;
      Uo(t);
      if (i) {
        if (t.flags & 256) {
          t.flags &= -257;
          t = qc(e, t, n);
        } else if (t.memoizedState !== null) {
          t.child = e.child;
          t.flags |= 128;
          t = null;
        } else {
          throw Error(a(558));
        }
      } else {
        if (!L) {
          Ma(e, t, n, false);
        }
        i = (n & e.childLanes) !== 0;
        if (L || i) {
          if (Fo.current === null) {
            r = G;
            if (r !== null && (s = kt(r, n), s !== 0 && s !== o.retryLane)) {
              o.retryLane = s;
              zi(e, s);
              Pd(r, e, s);
              throw zc;
            }
            Kd();
          }
          t = qc(e, t, n);
        } else {
          e = o.treeContext;
          k = lm(s.nextSibling);
          O = t;
          A = true;
          ha = null;
          ga = false;
          if (e !== null) {
            ma(t, e);
          }
          t = Kc(t, r);
          t.flags |= 134221824;
        }
      }
      return t;
    }
    e = Ki(e.child, {
      mode: r.mode,
      children: r.children
    });
    e.ref = t.ref;
    t.child = e;
    e.return = t;
    return e;
  }
  function Yc(e, t) {
    var n = t.ref;
    if (n === null) {
      if (e !== null && e.ref !== null) {
        t.flags |= 4194816;
      }
    } else {
      if (typeof n != `function` && typeof n != `object`) {
        throw Error(a(284));
      }
      if (e === null || e.ref !== n) {
        t.flags |= 4194816;
      }
    }
  }
  function Xc(e, t, n, r, i) {
    Pa(t);
    n = os(e, t, n, r, undefined, i);
    r = us();
    if (e !== null && !L) {
      ds(e, t, i);
      return ml(e, t, i);
    } else {
      if (A && r) {
        fa(t);
      }
      t.flags |= 1;
      R(e, t, n, i);
      return t.child;
    }
  }
  function Zc(e, t, n, r, i, a) {
    Pa(t);
    t.updateQueue = null;
    n = cs(t, r, n, i);
    ss(e);
    r = us();
    if (e !== null && !L) {
      ds(e, t, a);
      return ml(e, t, a);
    } else {
      if (A && r) {
        fa(t);
      }
      t.flags |= 1;
      R(e, t, n, a);
      return t.child;
    }
  }
  function Qc(e, t, n, r, i) {
    Pa(t);
    if (t.stateNode === null) {
      var a = Hi;
      var o = n.contextType;
      if (typeof o == `object` && o) {
        a = Fa(o);
      }
      a = new n(r, a);
      t.memoizedState = a.state ?? null;
      a.updater = Ec;
      t.stateNode = a;
      a._reactInternals = t;
      a = t.stateNode;
      a.props = r;
      a.state = t.memoizedState;
      a.refs = {};
      wo(t);
      o = n.contextType;
      a.context = typeof o == `object` && o ? Fa(o) : Hi;
      a.state = t.memoizedState;
      o = n.getDerivedStateFromProps;
      if (typeof o == `function`) {
        Tc(t, n, o, r);
        a.state = t.memoizedState;
      }
      if (typeof n.getDerivedStateFromProps != `function` && typeof a.getSnapshotBeforeUpdate != `function` && (typeof a.UNSAFE_componentWillMount == `function` || typeof a.componentWillMount == `function`)) {
        o = a.state;
        if (typeof a.componentWillMount == `function`) {
          a.componentWillMount();
        }
        if (typeof a.UNSAFE_componentWillMount == `function`) {
          a.UNSAFE_componentWillMount();
        }
        if (o !== a.state) {
          Ec.enqueueReplaceState(a, a.state, null);
        }
        Mo(t, r, a, i);
        jo();
        a.state = t.memoizedState;
      }
      if (typeof a.componentDidMount == `function`) {
        t.flags |= 4194308;
      }
      r = true;
    } else if (e === null) {
      a = t.stateNode;
      var s = t.memoizedProps;
      var c = kc(n, s);
      a.props = c;
      var l = a.context;
      var u = n.contextType;
      o = Hi;
      if (typeof u == `object` && u) {
        o = Fa(u);
      }
      var d = n.getDerivedStateFromProps;
      u = typeof d == `function` || typeof a.getSnapshotBeforeUpdate == `function`;
      s = t.pendingProps !== s;
      if (!u && (typeof a.UNSAFE_componentWillReceiveProps == `function` || typeof a.componentWillReceiveProps == `function`)) {
        if (s || l !== o) {
          Oc(t, a, r, o);
        }
      }
      Co = false;
      var f = t.memoizedState;
      a.state = f;
      Mo(t, r, a, i);
      jo();
      l = t.memoizedState;
      if (s || f !== l || Co) {
        if (typeof d == `function`) {
          Tc(t, n, d, r);
          l = t.memoizedState;
        }
        if (c = Co || Dc(t, n, c, r, f, l, o)) {
          if (!u && (typeof a.UNSAFE_componentWillMount == `function` || typeof a.componentWillMount == `function`)) {
            if (typeof a.componentWillMount == `function`) {
              a.componentWillMount();
            }
            if (typeof a.UNSAFE_componentWillMount == `function`) {
              a.UNSAFE_componentWillMount();
            }
          }
          if (typeof a.componentDidMount == `function`) {
            t.flags |= 4194308;
          }
        } else {
          if (typeof a.componentDidMount == `function`) {
            t.flags |= 4194308;
          }
          t.memoizedProps = r;
          t.memoizedState = l;
        }
        a.props = r;
        a.state = l;
        a.context = o;
        r = c;
      } else {
        if (typeof a.componentDidMount == `function`) {
          t.flags |= 4194308;
        }
        r = false;
      }
    } else {
      a = t.stateNode;
      To(e, t);
      o = t.memoizedProps;
      u = kc(n, o);
      a.props = u;
      d = t.pendingProps;
      f = a.context;
      l = n.contextType;
      c = Hi;
      if (typeof l == `object` && l) {
        c = Fa(l);
      }
      s = n.getDerivedStateFromProps;
      if (!(l = typeof s == `function` || typeof a.getSnapshotBeforeUpdate == `function`) && (typeof a.UNSAFE_componentWillReceiveProps == `function` || typeof a.componentWillReceiveProps == `function`)) {
        if (o !== d || f !== c) {
          Oc(t, a, r, c);
        }
      }
      Co = false;
      f = t.memoizedState;
      a.state = f;
      Mo(t, r, a, i);
      jo();
      var p = t.memoizedState;
      if (o !== d || f !== p || Co || e !== null && e.dependencies !== null && Na(e.dependencies)) {
        if (typeof s == `function`) {
          Tc(t, n, s, r);
          p = t.memoizedState;
        }
        if (u = Co || Dc(t, n, u, r, f, p, c) || e !== null && e.dependencies !== null && Na(e.dependencies)) {
          if (!l && (typeof a.UNSAFE_componentWillUpdate == `function` || typeof a.componentWillUpdate == `function`)) {
            if (typeof a.componentWillUpdate == `function`) {
              a.componentWillUpdate(r, p, c);
            }
            if (typeof a.UNSAFE_componentWillUpdate == `function`) {
              a.UNSAFE_componentWillUpdate(r, p, c);
            }
          }
          if (typeof a.componentDidUpdate == `function`) {
            t.flags |= 4;
          }
          if (typeof a.getSnapshotBeforeUpdate == `function`) {
            t.flags |= 1024;
          }
        } else {
          if (typeof a.componentDidUpdate == `function` && (o !== e.memoizedProps || f !== e.memoizedState)) {
            t.flags |= 4;
          }
          if (typeof a.getSnapshotBeforeUpdate == `function` && (o !== e.memoizedProps || f !== e.memoizedState)) {
            t.flags |= 1024;
          }
          t.memoizedProps = r;
          t.memoizedState = p;
        }
        a.props = r;
        a.state = p;
        a.context = c;
        r = u;
      } else {
        if (typeof a.componentDidUpdate == `function` && (o !== e.memoizedProps || f !== e.memoizedState)) {
          t.flags |= 4;
        }
        if (typeof a.getSnapshotBeforeUpdate == `function` && (o !== e.memoizedProps || f !== e.memoizedState)) {
          t.flags |= 1024;
        }
        r = false;
      }
    }
    a = r;
    Yc(e, t);
    r = !!(t.flags & 128);
    if (a || r) {
      a = t.stateNode;
      n = r && typeof n.getDerivedStateFromError != `function` ? null : a.render();
      t.flags |= 1;
      if (e !== null && r) {
        t.child = xo(t, e.child, null, i);
        t.child = xo(t, null, n, i);
      } else {
        R(e, t, n, i);
      }
      t.memoizedState = a.state;
      e = t.child;
    } else {
      e = ml(e, t, i);
    }
    return e;
  }
  function $c(e, t, n, r) {
    Sa();
    t.flags |= 256;
    R(e, t, n, r);
    return t.child;
  }
  var el = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function tl(e) {
    return {
      baseLanes: e,
      cachePool: ro()
    };
  }
  function nl(e, t, n) {
    e = e === null ? 0 : e.childLanes & ~n;
    if (t) {
      e |= ud;
    }
    return e;
  }
  function rl(e, t, n) {
    var r = t.pendingProps;
    var i = false;
    var a = !!(t.flags & 128);
    var o;
    if (!(o = a)) {
      o = e !== null && e.memoizedState === null ? false : !!(qo.current & 2);
    }
    if (o) {
      i = true;
      t.flags &= -129;
    }
    o = !!(t.flags & 32);
    t.flags &= -33;
    if (e === null) {
      if (A) {
        if (i) {
          Ho(t);
        } else {
          Go();
        }
        if (e = k) {
          e = am(e, ga);
          e = e !== null && e.data !== `&` ? e : null;
          if (e !== null) {
            t.memoizedState = {
              dehydrated: e,
              treeContext: sa === null ? null : {
                id: ca,
                overflow: la
              },
              retryLane: 536870912,
              hydrationErrors: null
            };
            n = Zi(e);
            n.return = t;
            t.child = n;
            O = t;
            k = null;
          }
        } else {
          e = null;
        }
        if (e === null) {
          throw va(t);
        }
        t.lanes = sm(e) ? 32 : 536870912;
        return null;
      }
      a = r.children;
      r = r.fallback;
      if (i) {
        Go();
        i = t.mode;
        a = al({
          mode: `hidden`,
          children: a
        }, i);
        r = Yi(r, i, n, null);
        a.return = t;
        r.return = t;
        a.sibling = r;
        t.child = a;
        r = t.child;
        r.memoizedState = tl(n);
        r.childLanes = nl(e, o, n);
        t.memoizedState = el;
        return Wc(null, r);
      } else {
        Ho(t);
        return il(t, a);
      }
    }
    var s = e.memoizedState;
    if (s !== null) {
      var c = s.dehydrated;
      if (c !== null) {
        return sl(e, t, a, o, r, c, s, n);
      }
    }
    if (i) {
      Go();
      i = r.fallback;
      a = t.mode;
      s = e.child;
      c = s.sibling;
      r = Ki(s, {
        mode: `hidden`,
        children: r.children
      });
      r.subtreeFlags = s.subtreeFlags & 1206910976;
      if (c === null) {
        i = Yi(i, a, n, null);
        i.flags |= 2;
      } else {
        i = Ki(c, i);
      }
      i.return = t;
      r.return = t;
      r.sibling = i;
      t.child = r;
      Wc(null, r);
      r = t.child;
      i = e.child.memoizedState;
      if (i === null) {
        i = tl(n);
      } else {
        a = i.cachePool;
        if (a === null) {
          a = ro();
        } else {
          s = j._currentValue;
          a = a.parent === s ? a : {
            parent: s,
            pool: s
          };
        }
        i = {
          baseLanes: i.baseLanes | n,
          cachePool: a
        };
      }
      r.memoizedState = i;
      r.childLanes = nl(e, o, n);
      t.memoizedState = el;
      return Wc(e.child, r);
    } else {
      Ho(t);
      n = e.child;
      e = n.sibling;
      n = Ki(n, {
        mode: `visible`,
        children: r.children
      });
      n.return = t;
      n.sibling = null;
      if (e !== null) {
        o = t.deletions;
        if (o === null) {
          t.deletions = [e];
          t.flags |= 16;
        } else {
          o.push(e);
        }
      }
      t.child = n;
      t.memoizedState = null;
      return n;
    }
  }
  function il(e, t) {
    t = al({
      mode: `visible`,
      children: t
    }, e.mode);
    t.return = e;
    return e.child = t;
  }
  function al(e, t) {
    e = Wi(22, e, null, t);
    e.lanes = 0;
    return e;
  }
  function ol(e, t, n) {
    xo(t, e.child, null, n);
    e = il(t, t.pendingProps.children);
    e.flags |= 2;
    t.memoizedState = null;
    return e;
  }
  function sl(e, t, n, r, i, o, s, c) {
    if (n) {
      if (t.flags & 256) {
        Ho(t);
        t.flags &= -257;
        return ol(e, t, c);
      } else if (t.memoizedState === null) {
        Go();
        o = i.fallback;
        s = t.mode;
        i = al({
          mode: `visible`,
          children: i.children
        }, s);
        o = Yi(o, s, c, null);
        o.flags |= 2;
        i.return = t;
        o.return = t;
        i.sibling = o;
        t.child = i;
        xo(t, e.child, null, c);
        i = t.child;
        i.memoizedState = tl(c);
        i.childLanes = nl(e, r, c);
        t.memoizedState = el;
        return Wc(null, i);
      } else {
        Go();
        t.child = e.child;
        t.flags |= 128;
        return null;
      }
    }
    Ho(t);
    if (sm(o)) {
      r = o.nextSibling && o.nextSibling.dataset;
      if (r) {
        var l = r.dgst;
      }
      r = l;
      if (r !== ``) {
        i = Error(a(419));
        i.stack = ``;
        i.digest = r;
        wa({
          value: i,
          source: null,
          stack: null
        });
      }
      return ol(e, t, c);
    }
    if (!L) {
      Ma(e, t, c, false);
    }
    r = (c & e.childLanes) !== 0;
    if (L || r) {
      if (Fo.current !== null) {
        return ol(e, t, c);
      }
      r = G;
      if (r !== null && (i = kt(r, c), i !== 0 && i !== s.retryLane)) {
        s.retryLane = i;
        zi(e, i);
        Pd(r, e, i);
        throw zc;
      }
      if (!om(o)) {
        Kd();
      }
      return ol(e, t, c);
    }
    if (om(o)) {
      t.flags |= 192;
      t.child = e.child;
      return null;
    } else {
      e = s.treeContext;
      k = lm(o.nextSibling);
      O = t;
      A = true;
      ha = null;
      ga = false;
      if (e !== null) {
        ma(t, e);
      }
      t = il(t, i.children);
      t.flags |= 134221824;
      return t;
    }
  }
  function cl(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    if (r !== null) {
      r.lanes |= t;
    }
    Aa(e.return, t, n);
  }
  function ll(e) {
    var t = null;
    for (; e !== null;) {
      var n = e.alternate;
      if (n !== null && Xo(n) === null) {
        t = e;
      }
      e = e.sibling;
    }
    return t;
  }
  function ul(e, t, n, r, i, a) {
    var o = e.memoizedState;
    if (o === null) {
      e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
        treeForkCount: a
      };
    } else {
      o.isBackwards = t;
      o.rendering = null;
      o.renderingStartTime = 0;
      o.last = r;
      o.tail = n;
      o.tailMode = i;
      o.treeForkCount = a;
    }
  }
  function dl(e) {
    var t = e.child;
    for (e.child = null; t !== null;) {
      var n = t.sibling;
      t.sibling = e.child;
      e.child = t;
      t = n;
    }
  }
  function fl(e, t, n) {
    var r = t.pendingProps;
    var i = r.revealOrder;
    var a = r.tail;
    r = r.children;
    var o = qo.current;
    if (t.flags & 128) {
      Jo(t, o);
      return null;
    }
    var s = !!(o & 2);
    if (s) {
      o = o & 1 | 2;
      t.flags |= 128;
    } else {
      o &= 1;
    }
    Jo(t, o);
    if (i === `backwards` && e !== null) {
      dl(e);
      R(e, t, r, n);
      dl(e);
    } else {
      R(e, t, r, n);
    }
    r = A ? ia : 0;
    if (!s && e !== null && e.flags & 128) {
      a: for (e = t.child; e !== null;) {
        if (e.tag === 13) {
          if (e.memoizedState !== null) {
            cl(e, n, t);
          }
        } else if (e.tag === 19) {
          cl(e, n, t);
        } else if (e.child !== null) {
          e.child.return = e;
          e = e.child;
          continue;
        }
        if (e === t) {
          break a;
        }
        while (e.sibling === null) {
          if (e.return === null || e.return === t) {
            break a;
          }
          e = e.return;
        }
        e.sibling.return = e.return;
        e = e.sibling;
      }
    }
    switch (i) {
      case `backwards`:
        n = ll(t.child);
        if (n === null) {
          i = t.child;
          t.child = null;
        } else {
          i = n.sibling;
          n.sibling = null;
          dl(t);
        }
        ul(t, true, i, null, a, r);
        break;
      case `unstable_legacy-backwards`:
        n = null;
        i = t.child;
        t.child = null;
        while (i !== null) {
          e = i.alternate;
          if (e !== null && Xo(e) === null) {
            t.child = i;
            break;
          }
          e = i.sibling;
          i.sibling = n;
          n = i;
          i = e;
        }
        ul(t, true, n, null, a, r);
        break;
      case `together`:
        ul(t, false, null, null, undefined, r);
        break;
      case `independent`:
        t.memoizedState = null;
        break;
      default:
        n = ll(t.child);
        if (n === null) {
          i = t.child;
          t.child = null;
        } else {
          i = n.sibling;
          n.sibling = null;
        }
        ul(t, false, i, n, a, r);
    }
    return t.child;
  }
  function pl(e, t, n) {
    var r = t.pendingProps;
    Oa(t, t.type, r.value);
    R(e, t, r.children, n);
    return t.child;
  }
  function ml(e, t, n) {
    if (e !== null) {
      t.dependencies = e.dependencies;
    }
    sd |= t.lanes;
    if ((n & t.childLanes) === 0) {
      if (e !== null) {
        Ma(e, t, n, false);
        if ((n & t.childLanes) === 0) {
          return null;
        }
      } else {
        return null;
      }
    }
    if (e !== null && t.child !== e.child) {
      throw Error(a(153));
    }
    if (t.child !== null) {
      e = t.child;
      n = Ki(e, e.pendingProps);
      t.child = n;
      n.return = t;
      while (e.sibling !== null) {
        e = e.sibling;
        n = n.sibling = Ki(e, e.pendingProps);
        n.return = t;
      }
      n.sibling = null;
    }
    return t.child;
  }
  function hl(e, t) {
    return (e.lanes & t) !== 0 || (e = e.dependencies, e !== null && !!Na(e));
  }
  function gl(e, t, n) {
    switch (t.tag) {
      case 3:
        Le(t, t.stateNode.containerInfo);
        Oa(t, j, e.memoizedState.cache);
        Sa();
        break;
      case 27:
      case 5:
        ze(t);
        break;
      case 4:
        Le(t, t.stateNode.containerInfo);
        break;
      case 10:
        Oa(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) {
          t.flags |= 128;
          Uo(t);
          return null;
        }
        break;
      case 13:
        var r = t.memoizedState;
        if (r !== null) {
          if (r.dehydrated !== null) {
            Ho(t);
            t.flags |= 128;
            return null;
          }
          r = Ma(e, t, n, false);
          var i = t.child.childLanes;
          if (r || (n & i) !== 0) {
            return rl(e, t, n);
          } else {
            Ho(t);
            e = ml(e, t, n);
            if (e === null) {
              return null;
            } else {
              return e.sibling;
            }
          }
        }
        Ho(t);
        break;
      case 19:
        if (t.flags & 128) {
          return fl(e, t, n);
        }
        i = !!(e.flags & 128);
        r = (n & t.childLanes) !== 0;
        r ||= (Ma(e, t, n, false), (n & t.childLanes) !== 0);
        if (i) {
          if (r) {
            return fl(e, t, n);
          }
          t.flags |= 128;
        }
        i = t.memoizedState;
        if (i !== null) {
          i.rendering = null;
          i.tail = null;
          i.lastEffect = null;
        }
        Jo(t, qo.current);
        if (r) {
          break;
        }
        return null;
      case 22:
        t.lanes = 0;
        return Uc(e, t, n, t.pendingProps);
      case 24:
        Oa(t, j, e.memoizedState.cache);
    }
    return ml(e, t, n);
  }
  function _l(e, t, n) {
    if (e !== null) {
      if (e.memoizedProps !== t.pendingProps) {
        L = true;
      } else {
        if (!hl(e, n) && !(t.flags & 128)) {
          L = false;
          return gl(e, t, n);
        }
        L = !!(e.flags & 131072);
      }
    } else {
      L = false;
      if (A && t.flags & 1048576) {
        da(t, ia, t.index);
      }
    }
    t.lanes = 0;
    switch (t.tag) {
      case 16:
        a: {
          var r = t.pendingProps;
          e = uo(t.elementType);
          t.type = e;
          if (typeof e == `function`) {
            if (Gi(e)) {
              r = kc(e, r);
              t.tag = 1;
              t = Qc(null, t, e, r, n);
            } else {
              t.tag = 0;
              t = Xc(null, t, e, r, n);
            }
          } else {
            if (e != null) {
              var i = e.$$typeof;
              if (i === pe) {
                t.tag = 11;
                t = Bc(null, t, e, r, n);
                break a;
              }
              if (i === ge) {
                t.tag = 14;
                t = Vc(null, t, e, r, n);
                break a;
              }
              if (i === fe) {
                t.tag = 10;
                t.type = e;
                t = pl(null, t, n);
                break a;
              }
            }
            t = Ee(e) || e;
            throw Error(a(306, t, ``));
          }
        }
        return t;
      case 0:
        return Xc(e, t, t.type, t.pendingProps, n);
      case 1:
        r = t.type;
        i = kc(r, t.pendingProps);
        return Qc(e, t, r, i, n);
      case 3:
        a: {
          Le(t, t.stateNode.containerInfo);
          if (e === null) {
            throw Error(a(387));
          }
          r = t.pendingProps;
          var o = t.memoizedState;
          i = o.element;
          To(e, t);
          Mo(t, r, null, n);
          var s = t.memoizedState;
          r = s.cache;
          Oa(t, j, r);
          if (r !== o.cache) {
            ja(t, [j], n, true);
          }
          jo();
          r = s.element;
          if (o.isDehydrated) {
            o = {
              element: r,
              isDehydrated: false,
              cache: s.cache
            };
            t.updateQueue.baseState = o;
            t.memoizedState = o;
            if (t.flags & 256) {
              t = $c(e, t, r, n);
              break a;
            }
            if (r !== i) {
              i = ea(Error(a(424)), t);
              wa(i);
              t = $c(e, t, r, n);
              break a;
            }
            e = t.stateNode.containerInfo;
            switch (e.nodeType) {
              case 9:
                e = e.body;
                break;
              default:
                e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
            }
            k = lm(e.firstChild);
            O = t;
            A = true;
            ha = null;
            ga = true;
            n = So(t, null, r, n);
            t.child = n;
            while (n) {
              n.flags = n.flags & -3 | 134221824;
              n = n.sibling;
            }
          } else {
            Sa();
            if (r === i) {
              t = ml(e, t, n);
              break a;
            }
            R(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        Yc(e, t);
        if (e === null) {
          if (n = Nm(t.type, null, t.pendingProps, null)) {
            t.memoizedState = n;
          } else if (!A) {
            t.stateNode = fp(t.type, t.pendingProps, Fe.current, t);
          }
        } else {
          t.memoizedState = Nm(t.type, e.memoizedProps, t.pendingProps, e.memoizedState);
        }
        return null;
      case 27:
        ze(t);
        if (e === null && A) {
          r = t.stateNode = hm(t.type, t.pendingProps, Fe.current);
          O = t;
          ga = true;
          i = k;
          if (Sp(t.type)) {
            um = i;
            k = lm(r.firstChild);
          } else {
            k = i;
          }
        }
        R(e, t, t.pendingProps.children, n);
        Yc(e, t);
        if (e === null) {
          t.flags |= 4194304;
        }
        return t.child;
      case 5:
        if (e === null && A) {
          if (i = r = k) {
            r = rm(r, t.type, t.pendingProps, ga);
            if (r === null) {
              i = false;
            } else {
              t.stateNode = r;
              O = t;
              k = lm(r.firstChild);
              ga = false;
              i = true;
            }
          }
          if (!i) {
            va(t);
          }
        }
        ze(t);
        i = t.type;
        o = t.pendingProps;
        s = e === null ? null : e.memoizedProps;
        r = o.children;
        if (pp(i, o)) {
          r = null;
        } else if (s !== null && pp(i, s)) {
          t.flags |= 32;
        }
        if (t.memoizedState !== null) {
          i = os(e, t, ls, null, null, n);
          sh._currentValue = i;
        }
        Yc(e, t);
        R(e, t, r, n);
        return t.child;
      case 6:
        if (e === null && A) {
          if (e = n = k) {
            n = im(n, t.pendingProps, ga);
            if (n === null) {
              e = false;
            } else {
              t.stateNode = n;
              O = t;
              k = null;
              e = true;
            }
          }
          if (!e) {
            va(t);
          }
        }
        return null;
      case 13:
        return rl(e, t, n);
      case 4:
        Le(t, t.stateNode.containerInfo);
        r = t.pendingProps;
        if (e === null) {
          t.child = xo(t, null, r, n);
        } else {
          R(e, t, r, n);
        }
        return t.child;
      case 11:
        return Bc(e, t, t.type, t.pendingProps, n);
      case 7:
        r = t.pendingProps;
        Yc(e, t);
        R(e, t, r, n);
        return t.child;
      case 8:
        R(e, t, t.pendingProps.children, n);
        return t.child;
      case 12:
        R(e, t, t.pendingProps.children, n);
        return t.child;
      case 10:
        return pl(e, t, n);
      case 9:
        i = t.type._context;
        r = t.pendingProps.children;
        Pa(t);
        i = Fa(i);
        r = r(i);
        t.flags |= 1;
        R(e, t, r, n);
        return t.child;
      case 14:
        return Vc(e, t, t.type, t.pendingProps, n);
      case 15:
        return Hc(e, t, t.type, t.pendingProps, n);
      case 19:
        return fl(e, t, n);
      case 31:
        return Jc(e, t, n);
      case 22:
        return Uc(e, t, n, t.pendingProps);
      case 24:
        Pa(t);
        r = Fa(j);
        if (e === null) {
          i = to();
          if (i === null) {
            i = G;
            o = Va();
            i.pooledCache = o;
            o.refCount++;
            if (o !== null) {
              i.pooledCacheLanes |= n;
            }
            i = o;
          }
          t.memoizedState = {
            parent: r,
            cache: i
          };
          wo(t);
          Oa(t, j, i);
        } else {
          if ((e.lanes & n) !== 0) {
            To(e, t);
            Mo(t, null, null, n);
            jo();
          }
          i = e.memoizedState;
          o = t.memoizedState;
          if (i.parent === r) {
            r = o.cache;
            Oa(t, j, r);
            if (r !== i.cache) {
              ja(t, [j], n, true);
            }
          } else {
            i = {
              parent: r,
              cache: r
            };
            t.memoizedState = i;
            if (t.lanes === 0) {
              t.memoizedState = t.updateQueue.baseState = i;
            }
            Oa(t, j, r);
          }
        }
        R(e, t, t.pendingProps.children, n);
        return t.child;
      case 30:
        if (t.stateNode === null) {
          t.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          };
        }
        r = t.pendingProps;
        if (r.name != null && r.name !== `auto`) {
          t.flags |= e === null ? 18882560 : 18874368;
        } else if (A) {
          fa(t);
        }
        if (e !== null && e.memoizedProps.name !== r.name) {
          t.flags |= 4194816;
        } else {
          Yc(e, t);
        }
        R(e, t, r.children, n);
        return t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(a(156, t.tag));
  }
  function vl(e) {
    e.flags |= 4;
  }
  function yl(e, t, n, r, i) {
    var a;
    if (a = !!(e.mode & 32)) {
      a = n === null ? Jm(t, r) : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet);
    }
    if (a) {
      e.flags |= 16777216;
      if ((i & 335544128) === i) {
        if (e.stateNode.complete) {
          e.flags |= 8192;
        } else if (Ud()) {
          e.flags |= 8192;
        } else {
          fo = so;
          throw ao;
        }
      }
    } else {
      e.flags &= -16777217;
    }
  }
  function bl(e, t) {
    if (t.type !== `stylesheet` || t.state.loading & 4) {
      e.flags &= -16777217;
    } else {
      e.flags |= 16777216;
      if (!Ym(t)) {
        if (Ud()) {
          e.flags |= 8192;
        } else {
          fo = so;
          throw ao;
        }
      }
    }
  }
  function xl(e, t) {
    if (t !== null) {
      e.flags |= 4;
    }
    if (e.flags & 16384) {
      t = e.tag === 22 ? 536870912 : Ct();
      e.lanes |= t;
      dd |= t;
    }
  }
  function Sl(e, t) {
    if (!A) {
      switch (e.tailMode) {
        case `visible`:
          break;
        case `collapsed`:
          for (var n = e.tail, r = null; n !== null;) {
            if (n.alternate !== null) {
              r = n;
            }
            n = n.sibling;
          }
          if (r === null) {
            if (t || e.tail === null) {
              e.tail = null;
            } else {
              e.tail.sibling = null;
            }
          } else {
            r.sibling = null;
          }
          break;
        default:
          t = e.tail;
          n = null;
          while (t !== null) {
            if (t.alternate !== null) {
              n = t;
            }
            t = t.sibling;
          }
          if (n === null) {
            e.tail = null;
          } else {
            n.sibling = null;
          }
      }
    }
  }
  function z(e) {
    var t = e.alternate !== null && e.alternate.child === e.child;
    var n = 0;
    var r = 0;
    if (t) {
      for (var i = e.child; i !== null;) {
        n |= i.lanes | i.childLanes;
        r |= i.subtreeFlags & 1206910976;
        r |= i.flags & 1206910976;
        i.return = e;
        i = i.sibling;
      }
    } else {
      for (i = e.child; i !== null;) {
        n |= i.lanes | i.childLanes;
        r |= i.subtreeFlags;
        r |= i.flags;
        i.return = e;
        i = i.sibling;
      }
    }
    e.subtreeFlags |= r;
    e.childLanes = n;
    return t;
  }
  function Cl(e, t, n) {
    var r = t.pendingProps;
    pa(t);
    switch (t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        z(t);
        return null;
      case 1:
        z(t);
        return null;
      case 3:
        n = t.stateNode;
        r = null;
        if (e !== null) {
          r = e.memoizedState.cache;
        }
        if (t.memoizedState.cache !== r) {
          t.flags |= 2048;
        }
        ka(j);
        Re();
        if (n.pendingContext) {
          n.context = n.pendingContext;
          n.pendingContext = null;
        }
        if (e === null || e.child === null) {
          if (xa(t)) {
            vl(t);
          } else if (e !== null && (!e.memoizedState.isDehydrated || !!(t.flags & 256))) {
            t.flags |= 1024;
            Ca();
          }
        }
        z(t);
        return null;
      case 26:
        var i = t.type;
        var o = t.memoizedState;
        if (e === null) {
          vl(t);
          if (o === null) {
            z(t);
            yl(t, i, null, r, n);
          } else {
            z(t);
            bl(t, o);
          }
        } else if (o) {
          if (o === e.memoizedState) {
            z(t);
            t.flags &= -16777217;
          } else {
            vl(t);
            z(t);
            bl(t, o);
          }
        } else {
          e = e.memoizedProps;
          if (e !== r) {
            vl(t);
          }
          z(t);
          yl(t, i, e, r, n);
        }
        return null;
      case 27:
        Be(t);
        n = Fe.current;
        i = t.type;
        if (e !== null && t.stateNode != null) {
          if (e.memoizedProps !== r) {
            vl(t);
          }
        } else {
          if (!r) {
            if (t.stateNode === null) {
              throw Error(a(166));
            }
            z(t);
            t.subtreeFlags &= -33554433;
            return null;
          }
          e = Ne.current;
          if (xa(t)) {
            ya(t, e);
          } else {
            e = hm(i, r, n);
            t.stateNode = e;
            vl(t);
          }
        }
        z(t);
        t.subtreeFlags &= -33554433;
        return null;
      case 5:
        Be(t);
        i = t.type;
        if (e !== null && t.stateNode != null) {
          if (e.memoizedProps !== r) {
            vl(t);
          }
        } else {
          if (!r) {
            if (t.stateNode === null) {
              throw Error(a(166));
            }
            z(t);
            t.subtreeFlags &= -33554433;
            return null;
          }
          o = Ne.current;
          if (xa(t)) {
            ya(t, o);
          } else {
            var s = lp(Fe.current);
            switch (o) {
              case 1:
                o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                break;
              case 2:
                o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                break;
              default:
                switch (i) {
                  case `svg`:
                    o = s.createElementNS(`http://www.w3.org/2000/svg`, i);
                    break;
                  case `math`:
                    o = s.createElementNS(`http://www.w3.org/1998/Math/MathML`, i);
                    break;
                  case `script`:
                    o = s.createElement(`div`);
                    o.innerHTML = `<script><\/script>`;
                    o = o.removeChild(o.firstChild);
                    break;
                  case `select`:
                    o = typeof r.is == `string` ? s.createElement(`select`, {
                      is: r.is
                    }) : s.createElement(`select`);
                    if (r.multiple) {
                      o.multiple = true;
                    } else if (r.size) {
                      o.size = r.size;
                    }
                    break;
                  default:
                    o = typeof r.is == `string` ? s.createElement(i, {
                      is: r.is
                    }) : s.createElement(i);
                }
            }
            o[Ft] = t;
            o[It] = r;
            a: for (s = t.child; s !== null;) {
              if (s.tag === 5 || s.tag === 6) {
                o.appendChild(s.stateNode);
              } else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s;
                s = s.child;
                continue;
              }
              if (s === t) {
                break a;
              }
              while (s.sibling === null) {
                if (s.return === null || s.return === t) {
                  break a;
                }
                s = s.return;
              }
              s.sibling.return = s.return;
              s = s.sibling;
            }
            t.stateNode = o;
            np(o, i, r);
            a: switch (i) {
              case `button`:
              case `input`:
              case `select`:
              case `textarea`:
                r = !!r.autoFocus;
                break a;
              case `img`:
                r = true;
                break a;
              default:
                r = false;
            }
            if (r) {
              vl(t);
            }
          }
        }
        z(t);
        t.subtreeFlags &= -33554433;
        yl(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, n);
        return null;
      case 6:
        if (e && t.stateNode != null) {
          if (e.memoizedProps !== r) {
            vl(t);
          }
        } else {
          if (typeof r != `string` && t.stateNode === null) {
            throw Error(a(166));
          }
          e = Fe.current;
          if (xa(t)) {
            e = t.stateNode;
            n = t.memoizedProps;
            r = null;
            i = O;
            if (i !== null) {
              switch (i.tag) {
                case 27:
                case 5:
                  r = i.memoizedProps;
              }
            }
            e[Ft] = t;
            e = e.nodeValue === n || r !== null && r.suppressHydrationWarning === true || !!ep(e.nodeValue, n);
            if (!e) {
              va(t, true);
            }
          } else {
            e = lp(e).createTextNode(r);
            e[Ft] = t;
            t.stateNode = e;
          }
        }
        z(t);
        return null;
      case 31:
        n = t.memoizedState;
        if (e === null || e.memoizedState !== null) {
          r = xa(t);
          if (n !== null) {
            if (e === null) {
              if (!r) {
                throw Error(a(318));
              }
              e = t.memoizedState;
              e = e === null ? null : e.dehydrated;
              if (!e) {
                throw Error(a(557));
              }
              e[Ft] = t;
            } else {
              Sa();
              if (!(t.flags & 128)) {
                t.memoizedState = null;
              }
              t.flags |= 4;
            }
            z(t);
            e = false;
          } else {
            n = Ca();
            if (e !== null && e.memoizedState !== null) {
              e.memoizedState.hydrationErrors = n;
            }
            e = true;
          }
          if (!e) {
            if (t.flags & 256) {
              Ko(t);
              return t;
            } else {
              Ko(t);
              return null;
            }
          }
          if (t.flags & 128) {
            throw Error(a(558));
          }
        }
        z(t);
        return null;
      case 13:
        r = t.memoizedState;
        if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          i = xa(t);
          if (r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!i) {
                throw Error(a(318));
              }
              i = t.memoizedState;
              i = i === null ? null : i.dehydrated;
              if (!i) {
                throw Error(a(317));
              }
              i[Ft] = t;
            } else {
              Sa();
              if (!(t.flags & 128)) {
                t.memoizedState = null;
              }
              t.flags |= 4;
            }
            z(t);
            i = false;
          } else {
            i = Ca();
            if (e !== null && e.memoizedState !== null) {
              e.memoizedState.hydrationErrors = i;
            }
            i = true;
          }
          if (!i) {
            if (t.flags & 256) {
              Ko(t);
              return t;
            } else {
              Ko(t);
              return null;
            }
          }
        }
        Ko(t);
        if (t.flags & 128) {
          t.lanes = n;
          return t;
        } else {
          n = r !== null;
          e = e !== null && e.memoizedState !== null;
          if (n) {
            r = t.child;
            i = null;
            if (r.alternate !== null && r.alternate.memoizedState !== null && r.alternate.memoizedState.cachePool !== null) {
              i = r.alternate.memoizedState.cachePool.pool;
            }
            o = null;
            if (r.memoizedState !== null && r.memoizedState.cachePool !== null) {
              o = r.memoizedState.cachePool.pool;
            }
            if (o !== i) {
              r.flags |= 2048;
            }
          }
          if (n !== e && n) {
            t.child.flags |= 8192;
          }
          xl(t, t.updateQueue);
          z(t);
          return null;
        }
      case 4:
        Re();
        if (e === null) {
          Wf(t.stateNode.containerInfo);
        }
        t.flags |= 67108864;
        z(t);
        return null;
      case 10:
        ka(t.type);
        z(t);
        return null;
      case 19:
        Yo(t);
        r = t.memoizedState;
        if (r === null) {
          z(t);
          return null;
        }
        i = !!(t.flags & 128);
        o = r.rendering;
        if (o === null) {
          if (i) {
            Sl(r, false);
          } else {
            if (Y !== 0 || e !== null && e.flags & 128) {
              for (e = t.child; e !== null;) {
                o = Xo(e);
                if (o !== null) {
                  t.flags |= 128;
                  Sl(r, false);
                  e = o.updateQueue;
                  t.updateQueue = e;
                  xl(t, e);
                  t.subtreeFlags = 0;
                  e = n;
                  n = t.child;
                  while (n !== null) {
                    qi(n, e);
                    n = n.sibling;
                  }
                  Jo(t, qo.current & 1 | 2);
                  if (A) {
                    ua(t, r.treeForkCount);
                  }
                  return t.child;
                }
                e = e.sibling;
              }
            }
            if (r.tail !== null && $e() > _d) {
              t.flags |= 128;
              i = true;
              Sl(r, false);
              t.lanes = 4194304;
            }
          }
        } else {
          if (!i) {
            e = Xo(o);
            if (e !== null) {
              t.flags |= 128;
              i = true;
              e = e.updateQueue;
              t.updateQueue = e;
              xl(t, e);
              Sl(r, true);
              if (r.tail === null && r.tailMode !== `collapsed` && r.tailMode !== `visible` && !o.alternate && !A) {
                z(t);
                return null;
              }
            } else if ($e() * 2 - r.renderingStartTime > _d && n !== 536870912) {
              t.flags |= 128;
              i = true;
              Sl(r, false);
              t.lanes = 4194304;
            }
          }
          if (r.isBackwards) {
            o.sibling = t.child;
            t.child = o;
          } else {
            e = r.last;
            if (e === null) {
              t.child = o;
            } else {
              e.sibling = o;
            }
            r.last = o;
          }
        }
        if (r.tail !== null) {
          e = r.tail;
          a: {
            for (n = e; n !== null;) {
              if (n.alternate !== null) {
                n = false;
                break a;
              }
              n = n.sibling;
            }
            n = true;
          }
          r.rendering = e;
          r.tail = e.sibling;
          r.renderingStartTime = $e();
          e.sibling = null;
          o = qo.current;
          o = i ? o & 1 | 2 : o & 1;
          if (r.tailMode === `visible` || r.tailMode === `collapsed` || !n || A) {
            Jo(t, o);
          } else {
            n = o;
            T(Bo, t);
            T(qo, n);
            if (Vo === null) {
              Vo = t;
            }
          }
          if (A) {
            ua(t, r.treeForkCount);
          }
          return e;
        }
        z(t);
        return null;
      case 22:
      case 23:
        Ko(t);
        zo();
        r = t.memoizedState !== null;
        if (e === null) {
          if (r) {
            t.flags |= 8192;
          }
        } else if (e.memoizedState !== null !== r) {
          t.flags |= 8192;
        }
        if (r) {
          if (n & 536870912 && !(t.flags & 128)) {
            z(t);
            if (t.subtreeFlags & 6) {
              t.flags |= 8192;
            }
          }
        } else {
          z(t);
        }
        n = t.updateQueue;
        if (n !== null) {
          xl(t, n.retryQueue);
        }
        n = null;
        if (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null) {
          n = e.memoizedState.cachePool.pool;
        }
        r = null;
        if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
          r = t.memoizedState.cachePool.pool;
        }
        if (r !== n) {
          t.flags |= 2048;
        }
        if (e !== null) {
          Me(eo);
        }
        return null;
      case 24:
        n = null;
        if (e !== null) {
          n = e.memoizedState.cache;
        }
        if (t.memoizedState.cache !== n) {
          t.flags |= 2048;
        }
        ka(j);
        z(t);
        return null;
      case 25:
        return null;
      case 30:
        t.flags |= 33554432;
        z(t);
        return null;
    }
    throw Error(a(156, t.tag));
  }
  function wl(e, t) {
    pa(t);
    switch (t.tag) {
      case 1:
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          return t;
        } else {
          return null;
        }
      case 3:
        ka(j);
        Re();
        e = t.flags;
        if (e & 65536 && !(e & 128)) {
          t.flags = e & -65537 | 128;
          return t;
        } else {
          return null;
        }
      case 26:
      case 27:
      case 5:
        Be(t);
        return null;
      case 31:
        if (t.memoizedState !== null) {
          Ko(t);
          if (t.alternate === null) {
            throw Error(a(340));
          }
          Sa();
        }
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          return t;
        } else {
          return null;
        }
      case 13:
        Ko(t);
        e = t.memoizedState;
        if (e !== null && e.dehydrated !== null) {
          if (t.alternate === null) {
            throw Error(a(340));
          }
          Sa();
        }
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          return t;
        } else {
          return null;
        }
      case 19:
        Yo(t);
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          e = t.memoizedState;
          if (e !== null) {
            e.rendering = null;
            e.tail = null;
          }
          t.flags |= 4;
          return t;
        } else {
          return null;
        }
      case 4:
        Re();
        return null;
      case 10:
        ka(t.type);
        return null;
      case 22:
      case 23:
        Ko(t);
        zo();
        if (e !== null) {
          Me(eo);
        }
        e = t.flags;
        if (e & 65536) {
          t.flags = e & -65537 | 128;
          return t;
        } else {
          return null;
        }
      case 24:
        ka(j);
        return null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Tl(e, t) {
    pa(t);
    switch (t.tag) {
      case 3:
        ka(j);
        Re();
        break;
      case 26:
      case 27:
      case 5:
        Be(t);
        break;
      case 4:
        Re();
        break;
      case 31:
        if (t.memoizedState !== null) {
          Ko(t);
        }
        break;
      case 13:
        Ko(t);
        break;
      case 19:
        Yo(t);
        break;
      case 10:
        ka(t.type);
        break;
      case 22:
      case 23:
        Ko(t);
        zo();
        if (e !== null) {
          Me(eo);
        }
        break;
      case 24:
        ka(j);
    }
  }
  function El(e, t) {
    try {
      var n = t.updateQueue;
      var r = n === null ? null : n.lastEffect;
      if (r !== null) {
        var i = r.next;
        n = i;
        do {
          if ((n.tag & e) === e) {
            r = undefined;
            var a = n.create;
            var o = n.inst;
            r = a();
            o.destroy = r;
          }
          n = n.next;
        } while (n !== i);
      }
    } catch (e) {
      Z(t, t.return, e);
    }
  }
  function Dl(e, t, n) {
    try {
      var r = t.updateQueue;
      var i = r === null ? null : r.lastEffect;
      if (i !== null) {
        var a = i.next;
        r = a;
        do {
          if ((r.tag & e) === e) {
            var o = r.inst;
            var s = o.destroy;
            if (s !== undefined) {
              o.destroy = undefined;
              i = t;
              var c = n;
              var l = s;
              try {
                l();
              } catch (e) {
                Z(i, c, e);
              }
            }
          }
          r = r.next;
        } while (r !== a);
      }
    } catch (e) {
      Z(t, t.return, e);
    }
  }
  function Ol(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Po(t, n);
      } catch (t) {
        Z(e, e.return, t);
      }
    }
  }
  function kl(e, t, n) {
    n.props = kc(e.type, e.memoizedProps);
    n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (n) {
      Z(e, t, n);
    }
  }
  function Al(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var r = e.stateNode;
            break;
          case 30:
            var i = e.stateNode;
            var a = ki(e.memoizedProps, i);
            if (i.ref === null || i.ref.name !== a) {
              i.ref = Pp(a);
            }
            r = i.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var o = new Fp(e);
              h(e.child, false, Qp, o, undefined, undefined);
              e.stateNode = o;
            }
            r = e.stateNode;
            break;
          default:
            r = e.stateNode;
        }
        if (typeof n == `function`) {
          e.refCleanup = n(r);
        } else {
          n.current = r;
        }
      }
    } catch (n) {
      Z(e, t, n);
    }
  }
  function jl(e, t) {
    var n = e.ref;
    var r = e.refCleanup;
    if (n !== null) {
      if (typeof r == `function`) {
        try {
          r();
        } catch (n) {
          Z(e, t, n);
        } finally {
          e.refCleanup = null;
          e = e.alternate;
          if (e != null) {
            e.refCleanup = null;
          }
        }
      } else if (typeof n == `function`) {
        try {
          n(null);
        } catch (n) {
          Z(e, t, n);
        }
      } else {
        n.current = null;
      }
    }
  }
  function Ml(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null) {
      for (var n = 0; n < t.length; n++) {
        em(e.stateNode, t[n]);
      }
    }
  }
  function Nl(e) {
    for (var t = e.return; t !== null && (Il(t) && em(e.stateNode, t.stateNode), !Fl(t));) {
      t = t.return;
    }
  }
  function Pl(e) {
    for (var t = e.return; t !== null && (Il(t) && tm(e.stateNode, t.stateNode), !Fl(t));) {
      t = t.return;
    }
  }
  function Fl(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function Il(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function Ll(e) {
    var t = e.type;
    var n = e.memoizedProps;
    var r = e.stateNode;
    try {
      a: switch (t) {
        case `button`:
        case `input`:
        case `select`:
        case `textarea`:
          if (n.autoFocus) {
            r.focus();
          }
          break a;
        case `img`:
          if (n.src) {
            r.src = n.src;
          } else if (n.srcSet) {
            r.srcset = n.srcSet;
          }
      }
    } catch (t) {
      Z(e, e.return, t);
    }
  }
  function Rl(e, t, n) {
    try {
      var r = e.stateNode;
      ip(r, e.type, n, t);
      r[It] = t;
    } catch (t) {
      Z(e, e.return, t);
    }
  }
  function zl(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Sp(e.type) || e.tag === 4;
  }
  function Bl(e) {
    a: while (true) {
      while (e.sibling === null) {
        if (e.return === null || zl(e.return)) {
          return null;
        }
        e = e.return;
      }
      e.sibling.return = e.return;
      e = e.sibling;
      while (e.tag !== 5 && e.tag !== 6 && e.tag !== 18) {
        if (e.tag === 27 && Sp(e.type) || e.flags & 2 || e.child === null || e.tag === 4) {
          continue a;
        }
        e.child.return = e;
        e = e.child;
      }
      if (!(e.flags & 2)) {
        return e.stateNode;
      }
    }
  }
  function Vl(e, t, n, r) {
    var i = e.tag;
    if (i === 5 || i === 6) {
      i = e.stateNode;
      if (t) {
        (n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n).insertBefore(i, t);
      } else {
        t = n.nodeType === 9 ? n.body : n.nodeName === `HTML` ? n.ownerDocument.body : n;
        t.appendChild(i);
        n = n._reactRootContainer;
        if (n == null && t.onclick === null) {
          t.onclick = An;
        }
      }
      Ml(e, r);
      D = true;
    } else if (i !== 4 && (i === 27 && (Ml(e, r), r = null, Sp(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null)) {
      Vl(e, t, n, r);
      e = e.sibling;
      while (e !== null) {
        Vl(e, t, n, r);
        e = e.sibling;
      }
    }
  }
  function Hl(e, t, n, r) {
    var i = e.tag;
    if (i === 5 || i === 6) {
      i = e.stateNode;
      if (t) {
        n.insertBefore(i, t);
      } else {
        n.appendChild(i);
      }
      Ml(e, r);
      D = true;
    } else if (i !== 4 && (i === 27 && (Ml(e, r), r = null, Sp(e.type) && (n = e.stateNode)), e = e.child, e !== null)) {
      Hl(e, t, n, r);
      e = e.sibling;
      while (e !== null) {
        Hl(e, t, n, r);
        e = e.sibling;
      }
    }
  }
  function Ul(e) {
    var t = e.stateNode;
    var n = e.memoizedProps;
    try {
      var r = e.type;
      for (var i = t.attributes; i.length;) {
        t.removeAttributeNode(i[0]);
      }
      np(t, r, n);
      t[Ft] = e;
      t[It] = n;
    } catch (t) {
      Z(e, e.return, t);
    }
  }
  var Wl = false;
  var Gl = null;
  function Kl(e) {
    if (e.tag === 30 || e.subtreeFlags & 33554432) {
      Wl = true;
    }
  }
  var ql = null;
  function Jl() {
    var e = ql;
    ql = null;
    return e;
  }
  var Yl = 0;
  function Xl(e, t, n, r, i) {
    Yl = 0;
    return Zl(e.child, t, n, r, i);
  }
  function Zl(e, t, n, r, i) {
    var a = false;
    for (; e !== null;) {
      if (e.tag === 5) {
        var o = e.stateNode;
        if (r !== null) {
          var s = Op(o);
          r.push(s);
          if (s.view) {
            a = true;
          }
        } else if (!a) {
          if (Op(o).view) {
            a = true;
          }
        }
        Wl = true;
        Tp(o, Yl === 0 ? t : `${t}_${Yl}`, n);
        Yl++;
      } else if ((e.tag !== 22 || e.memoizedState === null) && (e.tag !== 30 || !i)) {
        if (Zl(e.child, t, n, r, i)) {
          a = true;
        }
      }
      e = e.sibling;
    }
    return a;
  }
  function Ql(e, t) {
    while (e !== null) {
      if (e.tag === 5) {
        Ep(e.stateNode, e.memoizedProps);
      } else if ((e.tag !== 22 || e.memoizedState === null) && (e.tag !== 30 || !t)) {
        Ql(e.child, t);
      }
      e = e.sibling;
    }
  }
  function $l(e) {
    if (e.subtreeFlags & 18874368) {
      for (e = e.child; e !== null;) {
        if ((e.tag !== 22 || e.memoizedState === null) && ($l(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === `auto`) {
            throw Error(a(544));
          }
          var n = t.name;
          t = ji(t.default, t.share);
          if (t !== `none`) {
            if (!Xl(e, n, t, null, false)) {
              Ql(e.child, false);
            }
          }
        }
        e = e.sibling;
      }
    }
  }
  function eu(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode;
      var r = e.memoizedProps;
      var i = ki(r, n);
      var a = ji(r.default, n.paired ? r.share : r.enter);
      if (a === `none`) {
        $l(e);
      } else if (Xl(e, i, a, null, false)) {
        $l(e);
        if (!n.paired && !t) {
          Nd(e, r.onEnter);
        }
      } else {
        Ql(e.child, false);
      }
    } else if (e.subtreeFlags & 33554432) {
      for (e = e.child; e !== null;) {
        eu(e, t);
        e = e.sibling;
      }
    } else {
      $l(e);
    }
  }
  function tu(e) {
    if (Gl !== null && Gl.size !== 0) {
      var t = Gl;
      if (e.subtreeFlags & 18874368) {
        for (e = e.child; e !== null;) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && e.flags & 18874368) {
              var n = e.memoizedProps;
              var r = n.name;
              if (r != null && r !== `auto`) {
                var i = t.get(r);
                if (i !== undefined) {
                  var a = ji(n.default, n.share);
                  if (a !== `none`) {
                    if (Xl(e, r, a, null, false)) {
                      a = e.stateNode;
                      i.paired = a;
                      a.paired = i;
                      Nd(e, n.onShare);
                    } else {
                      Ql(e.child, false);
                    }
                  }
                  t.delete(r);
                  if (t.size === 0) {
                    break;
                  }
                }
              }
            }
            tu(e);
          }
          e = e.sibling;
        }
      }
    }
  }
  function nu(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps;
      var n = ki(t, e.stateNode);
      var r = Gl === null ? undefined : Gl.get(n);
      var i = ji(t.default, r === undefined ? t.exit : t.share);
      if (i !== `none`) {
        if (Xl(e, n, i, null, false)) {
          if (r === undefined) {
            Nd(e, t.onExit);
          } else {
            i = e.stateNode;
            r.paired = i;
            i.paired = r;
            Gl.delete(n);
            Nd(e, t.onShare);
          }
        } else {
          Ql(e.child, false);
        }
      }
      if (Gl !== null) {
        tu(e);
      }
    } else if (e.subtreeFlags & 33554432) {
      for (e = e.child; e !== null;) {
        nu(e);
        e = e.sibling;
      }
    } else if (Gl !== null) {
      tu(e);
    }
  }
  function ru(e) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var t = e.memoizedProps;
        var n = ki(t, e.stateNode);
        t = ji(t.default, t.update);
        e.flags &= -5;
        if (t !== `none`) {
          Xl(e, n, t, e.memoizedState = [], false);
        }
      } else if (e.subtreeFlags & 33554432) {
        ru(e);
      }
      e = e.sibling;
    }
  }
  function iu(e) {
    if (e.subtreeFlags & 18874368) {
      for (e = e.child; e !== null;) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && e.flags & 18874368) {
            var t = e.stateNode;
            if (t.paired !== null) {
              t.paired = null;
              Ql(e.child, false);
            }
          }
          iu(e);
        }
        e = e.sibling;
      }
    }
  }
  function au(e) {
    if (e.tag === 30) {
      e.stateNode.paired = null;
      Ql(e.child, false);
      iu(e);
    } else if (e.subtreeFlags & 33554432) {
      for (e = e.child; e !== null;) {
        au(e);
        e = e.sibling;
      }
    } else {
      iu(e);
    }
  }
  function ou(e) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        Ql(e.child, false);
      } else if (e.subtreeFlags & 33554432) {
        ou(e);
      }
      e = e.sibling;
    }
  }
  function su(e, t, n, r, i, a, o) {
    var s = false;
    for (; t !== null;) {
      if (t.tag === 5) {
        var c = t.stateNode;
        if (a !== null && Yl < a.length) {
          var l = a[Yl];
          var u = Op(c);
          if (l.view || u.view) {
            s = true;
          }
          var d;
          if (d = !(e.flags & 4)) {
            if (u.clip) {
              d = true;
            } else {
              d = l.rect;
              var f = u.rect;
              d = d.y !== f.y || d.x !== f.x || d.height !== f.height || d.width !== f.width;
            }
          }
          if (d) {
            e.flags |= 4;
          }
          if (u.abs) {
            u = !l.abs;
          } else {
            l = l.rect;
            u = u.rect;
            u = l.height !== u.height || l.width !== u.width;
          }
          if (u) {
            e.flags |= 32;
          }
        } else {
          e.flags |= 32;
        }
        if (e.flags & 4) {
          Tp(c, Yl === 0 ? n : `${n}_${Yl}`, i);
        }
        if (!s || !(e.flags & 4)) {
          if (ql === null) {
            ql = [];
          }
          ql.push(c, Yl === 0 ? r : `${r}_${Yl}`, t.memoizedProps);
        }
        Yl++;
      } else if (t.tag !== 22 || t.memoizedState === null) {
        if (t.tag === 30 && o) {
          e.flags |= t.flags & 32;
        } else if (su(e, t.child, n, r, i, a, o)) {
          s = true;
        }
      }
      t = t.sibling;
    }
    return s;
  }
  function cu(e, t) {
    for (e = e.child; e !== null;) {
      if (e.tag === 30) {
        var n = e.memoizedProps;
        var r = e.stateNode;
        var i = ki(n, r);
        var a = ji(n.default, n.update);
        if (t) {
          r = r.clones;
          var o = r === null ? null : r.map(kp);
        } else {
          o = e.memoizedState;
          e.memoizedState = null;
        }
        r = e;
        var s = e.child;
        Yl = 0;
        i = su(r, s, i, i, a, o, false);
        if (e.flags & 4 && i) {
          if (!t) {
            Nd(e, n.onUpdate);
          }
        }
      } else if (e.subtreeFlags & 33554432) {
        cu(e, t);
      }
      e = e.sibling;
    }
  }
  var B = false;
  var V = false;
  var lu = false;
  var uu = false;
  var du = typeof WeakSet == `function` ? WeakSet : Set;
  var H = null;
  var fu = false;
  var pu = false;
  var mu = false;
  var hu = false;
  function gu(e, t, n) {
    e = e.containerInfo;
    sp = gh;
    e = ai(e);
    if (oi(e)) {
      if (`selectionStart` in e) {
        var r = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      } else {
        a: {
          r = (r = e.ownerDocument) && r.defaultView || window;
          var i = r.getSelection && r.getSelection();
          if (i && i.rangeCount !== 0) {
            r = i.anchorNode;
            var a = i.anchorOffset;
            var o = i.focusNode;
            i = i.focusOffset;
            try {
              r.nodeType;
              o.nodeType;
            } catch {
              r = null;
              break a;
            }
            var s = 0;
            var c = -1;
            var l = -1;
            var u = 0;
            var d = 0;
            var f = e;
            var p = null;
            b: while (true) {
              for (var m; f !== r || a !== 0 && f.nodeType !== 3 || (c = s + a), f !== o || i !== 0 && f.nodeType !== 3 || (l = s + i), f.nodeType === 3 && (s += f.nodeValue.length), (m = f.firstChild) !== null;) {
                p = f;
                f = m;
              }
              while (true) {
                if (f === e) {
                  break b;
                }
                if (p === r && ++u === a) {
                  c = s;
                }
                if (p === o && ++d === i) {
                  l = s;
                }
                if ((m = f.nextSibling) !== null) {
                  break;
                }
                f = p;
                p = f.parentNode;
              }
              f = m;
            }
            r = c === -1 || l === -1 ? null : {
              start: c,
              end: l
            };
          } else {
            r = null;
          }
        }
      }
      r ||= {
        start: 0,
        end: 0
      };
    } else {
      r = null;
    }
    cp = {
      focusedElem: e,
      selectionRange: r
    };
    gh = false;
    n = (n & 335544064) === n;
    H = t;
    t = n ? 9270 : 1024;
    while (H !== null) {
      e = H;
      if (n && (r = e.deletions, r !== null)) {
        for (a = 0; a < r.length; a++) {
          if (n) {
            nu(r[a]);
          }
        }
      }
      if (e.alternate === null && e.flags & 2) {
        if (n) {
          Kl(e);
        }
        _u(n);
      } else {
        if (e.tag === 22) {
          r = e.alternate;
          if (e.memoizedState !== null) {
            if (r !== null && r.memoizedState === null && n) {
              nu(r);
            }
            _u(n);
            continue;
          }
          if (r !== null && r.memoizedState !== null) {
            if (n) {
              Kl(e);
            }
            _u(n);
            continue;
          }
        }
        r = e.child;
        if ((e.subtreeFlags & t) !== 0 && r !== null) {
          r.return = e;
          H = r;
        } else {
          if (n) {
            ru(e);
          }
          _u(n);
        }
      }
    }
    Gl = null;
  }
  function _u(e) {
    while (H !== null) {
      var t = H;
      var n = e;
      var r = t.alternate;
      var i = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (i & 1024 && r !== null) {
            n = undefined;
            i = r.memoizedProps;
            r = r.memoizedState;
            var o = t.stateNode;
            try {
              var s = kc(t.type, i);
              n = o.getSnapshotBeforeUpdate(s, r);
              o.__reactInternalSnapshotBeforeUpdate = n;
            } catch (e) {
              Z(t, t.return, e);
            }
          }
          break;
        case 3:
          if (i & 1024) {
            r = t.stateNode.containerInfo;
            n = r.nodeType;
            if (n === 9) {
              nm(r);
            } else if (n === 1) {
              switch (r.nodeName) {
                case `HEAD`:
                case `HTML`:
                case `BODY`:
                  nm(r);
                  break;
                default:
                  r.textContent = ``;
              }
            }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          if (n && r !== null) {
            n = ki(r.memoizedProps, r.stateNode);
            i = t.memoizedProps;
            i = ji(i.default, i.update);
            if (i !== `none`) {
              Xl(r, n, i, r.memoizedState = [], true);
            }
          }
          break;
        default:
          if (i & 1024) {
            throw Error(a(163));
          }
      }
      r = t.sibling;
      if (r !== null) {
        r.return = t.return;
        H = r;
        break;
      }
      H = t.return;
    }
  }
  function vu(e, t, n) {
    var r = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Lu(e, n);
        if (r & 4) {
          El(5, n);
        }
        break;
      case 1:
        Lu(e, n);
        if (r & 4) {
          e = n.stateNode;
          if (t === null) {
            try {
              e.componentDidMount();
            } catch (e) {
              Z(n, n.return, e);
            }
          } else {
            var i = kc(n.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(i, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (e) {
              Z(n, n.return, e);
            }
          }
        }
        if (r & 64) {
          Ol(n);
        }
        if (r & 512) {
          Al(n, n.return);
        }
        break;
      case 3:
        Lu(e, n);
        if (r & 64 && (e = n.updateQueue, e !== null)) {
          t = null;
          if (n.child !== null) {
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          }
          try {
            Po(e, t);
          } catch (e) {
            Z(n, n.return, e);
          }
        }
        break;
      case 27:
        if (t === null && r & 4) {
          Ul(n);
        }
      case 26:
      case 5:
        Lu(e, n);
        if (t === null && r & 4) {
          Ll(n);
        }
        if (r & 512) {
          Al(n, n.return);
        }
        break;
      case 12:
        Lu(e, n);
        break;
      case 31:
        Lu(e, n);
        if (r & 4) {
          Eu(e, n);
        }
        break;
      case 13:
        Lu(e, n);
        if (r & 4) {
          Du(e, n);
        }
        if (r & 64) {
          e = n.memoizedState;
          if (e !== null) {
            e = e.dehydrated;
            if (e !== null) {
              n = _f.bind(null, n);
              cm(e, n);
            }
          }
        }
        break;
      case 22:
        r = n.memoizedState !== null || B;
        if (!r) {
          var a = t !== null && t.memoizedState !== null || V;
          t = B;
          i = V;
          B = r;
          if ((V = a) && !i) {
            r = 2;
            if (n.subtreeFlags & 8772) {
              r |= 1;
            }
            zu(e, n, r);
          } else {
            Lu(e, n);
          }
          B = t;
          V = i;
        }
        break;
      case 30:
        Lu(e, n);
        if (r & 512) {
          Al(n, n.return);
        }
        break;
      case 7:
        if (r & 512) {
          Al(n, n.return);
        }
      default:
        Lu(e, n);
    }
  }
  function yu(e, t) {
    for (e = e.child; e !== null;) {
      bu(e, t);
      e = e.sibling;
    }
  }
  function bu(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var n = e.stateNode;
          if (t) {
            var r = n.style;
            if (typeof r.setProperty == `function`) {
              r.setProperty(`display`, `none`, `important`);
            } else {
              r.display = `none`;
            }
          } else {
            var i = e.stateNode;
            var a = e.memoizedProps.style;
            var o = a != null && a.hasOwnProperty(`display`) ? a.display : null;
            i.style.display = o == null || typeof o == `boolean` ? `` : `${o}`.trim();
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        xu(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? `` : e.memoizedProps;
          D = true;
        } catch (t) {
          Z(e, e.return, t);
        }
        break;
      case 18:
        try {
          var s = e.stateNode;
          if (t) {
            wp(s, true);
          } else {
            wp(e.stateNode, false);
          }
        } catch (t) {
          Z(e, e.return, t);
        }
        break;
      case 22:
      case 23:
        if (e.memoizedState === null) {
          yu(e, t);
        }
        break;
      default:
        yu(e, t);
    }
  }
  function xu(e, t) {
    if (e.subtreeFlags & 67108864) {
      for (e = e.child; e !== null;) {
        a: {
          var n = e;
          var r = t;
          switch (n.tag) {
            case 4:
              bu(n, r);
              break a;
            case 22:
              if (n.memoizedState === null) {
                xu(n, r);
              }
              break a;
            default:
              xu(n, r);
          }
        }
        e = e.sibling;
      }
    }
  }
  function Su(e) {
    var t = e.alternate;
    if (t !== null) {
      e.alternate = null;
      Su(t);
    }
    e.child = null;
    e.deletions = null;
    e.sibling = null;
    if (e.tag === 5) {
      t = e.stateNode;
      if (t !== null) {
        Wt(t);
      }
    }
    e.stateNode = null;
    e.return = null;
    e.dependencies = null;
    e.memoizedProps = null;
    e.memoizedState = null;
    e.pendingProps = null;
    e.stateNode = null;
    e.updateQueue = null;
  }
  var U = null;
  var Cu = false;
  function wu(e, t, n) {
    for (n = n.child; n !== null;) {
      Tu(e, t, n);
      n = n.sibling;
    }
  }
  function Tu(e, t, n) {
    if (lt && typeof lt.onCommitFiberUnmount == `function`) {
      try {
        lt.onCommitFiberUnmount(ct, n);
      } catch {}
    }
    switch (n.tag) {
      case 26:
        if (!V) {
          jl(n, t);
        }
        wu(e, t, n);
        if (n.memoizedState) {
          n.memoizedState.count--;
        } else if (n.stateNode && !V) {
          n = n.stateNode;
          n.parentNode.removeChild(n);
        }
        break;
      case 27:
        if (!V) {
          jl(n, t);
        }
        Pl(n);
        var r = U;
        var i = Cu;
        if (Sp(n.type)) {
          U = n.stateNode;
          Cu = false;
        }
        wu(e, t, n);
        gm(n.stateNode, n.type, n.memoizedProps);
        U = r;
        Cu = i;
        break;
      case 5:
        if (!V) {
          jl(n, t);
        }
        Pl(n);
      case 6:
        if (n.tag === 6) {
          Pl(n);
        }
        r = U;
        i = Cu;
        U = null;
        wu(e, t, n);
        U = r;
        Cu = i;
        if (U !== null) {
          if (Cu) {
            try {
              (U.nodeType === 9 ? U.body : U.nodeName === `HTML` ? U.ownerDocument.body : U).removeChild(n.stateNode);
              D = true;
            } catch (e) {
              Z(n, t, e);
            }
          } else {
            try {
              U.removeChild(n.stateNode);
              D = true;
            } catch (e) {
              Z(n, t, e);
            }
          }
        }
        break;
      case 18:
        if (U !== null) {
          if (Cu) {
            e = U;
            Cp(e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e, n.stateNode);
            Hh(e);
          } else {
            Cp(U, n.stateNode);
          }
        }
        break;
      case 4:
        r = U;
        i = Cu;
        U = n.stateNode.containerInfo;
        Cu = true;
        wu(e, t, n);
        U = r;
        Cu = i;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Dl(2, n, t);
        if (!V) {
          Dl(4, n, t);
        }
        wu(e, t, n);
        break;
      case 1:
        if (!V) {
          jl(n, t);
          r = n.stateNode;
          if (typeof r.componentWillUnmount == `function`) {
            kl(n, t, r);
          }
        }
        wu(e, t, n);
        break;
      case 21:
        wu(e, t, n);
        break;
      case 22:
        V = (r = V) || n.memoizedState !== null;
        wu(e, t, n);
        V = r;
        break;
      case 30:
        jl(n, t);
        wu(e, t, n);
        break;
      case 7:
        if (!V) {
          jl(n, t);
        }
        wu(e, t, n);
        break;
      default:
        wu(e, t, n);
    }
  }
  function Eu(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Hh(e);
      } catch (e) {
        Z(t, t.return, e);
      }
    }
  }
  function Du(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) {
      try {
        Hh(e);
      } catch (e) {
        Z(t, t.return, e);
      }
    }
  }
  function Ou(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        if (t === null) {
          t = e.stateNode = new du();
        }
        return t;
      case 22:
        e = e.stateNode;
        t = e._retryCache;
        if (t === null) {
          t = e._retryCache = new du();
        }
        return t;
      default:
        throw Error(a(435, e.tag));
    }
  }
  function ku(e, t) {
    var n = Ou(e);
    t.forEach(function (t) {
      if (!n.has(t)) {
        n.add(t);
        var r = vf.bind(null, e, t);
        t.then(r, r);
      }
    });
  }
  function Au(e, t, n) {
    var r = t.deletions;
    if (r !== null) {
      for (var i = 0; i < r.length; i++) {
        var o = r[i];
        var s = e;
        var c = t;
        var l = c;
        a: while (l !== null) {
          switch (l.tag) {
            case 27:
              if (Sp(l.type)) {
                U = l.stateNode;
                Cu = false;
                break a;
              }
              break;
            case 5:
              U = l.stateNode;
              Cu = false;
              break a;
            case 3:
            case 4:
              U = l.stateNode.containerInfo;
              Cu = true;
              break a;
          }
          l = l.return;
        }
        if (U === null) {
          throw Error(a(160));
        }
        Tu(s, c, o);
        U = null;
        Cu = false;
        s = o.alternate;
        if (s !== null) {
          s.return = null;
        }
        o.return = null;
      }
    }
    if (t.subtreeFlags & 13886) {
      for (t = t.child; t !== null;) {
        Mu(t, e, n);
        t = t.sibling;
      }
    }
  }
  var ju = null;
  function Mu(e, t, n) {
    var r = e.alternate;
    var i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (i & 4 && (r = e.updateQueue, r = r === null ? null : r.events, r !== null)) {
          for (var o = 0; o < r.length; o++) {
            var s = r[o];
            s.ref.impl = s.nextImpl;
          }
        }
        Au(t, e, n);
        Nu(e);
        if (i & 4) {
          Dl(3, e, e.return);
          El(3, e);
          Dl(5, e, e.return);
        }
        break;
      case 1:
        Au(t, e, n);
        Nu(e);
        if (i & 512) {
          if (!V && r !== null) {
            jl(r, r.return);
          }
        }
        if (i & 64 && B) {
          e = e.updateQueue;
          if (e !== null) {
            t = e.callbacks;
            if (t !== null) {
              n = e.shared.hiddenCallbacks;
              e.shared.hiddenCallbacks = n === null ? t : n.concat(t);
            }
          }
        }
        break;
      case 26:
        o = ju;
        Au(t, e, n);
        Nu(e);
        if (i & 512) {
          if (!V && r !== null) {
            jl(r, r.return);
          }
        }
        if (i & 4) {
          i = r === null ? null : r.memoizedState;
          n = e.memoizedState;
          if (r === null) {
            if (n === null) {
              if (e.stateNode === null) {
                if (B) {
                  e.stateNode = fp(e.type, e.memoizedProps, t.containerInfo, e);
                } else {
                  a: {
                    t = e.type;
                    n = e.memoizedProps;
                    i = o.ownerDocument || o;
                    b: switch (t) {
                      case `title`:
                        r = i.getElementsByTagName(`title`)[0];
                        if (!r || r[Ht] || r[Ft] || r.namespaceURI === `http://www.w3.org/2000/svg` || r.hasAttribute(`itemprop`)) {
                          r = i.createElement(t);
                          i.head.insertBefore(r, i.querySelector(`head > title`));
                        }
                        np(r, t, n);
                        r[Ft] = e;
                        E(r);
                        t = r;
                        break a;
                      case `link`:
                        if (o = Gm(`link`, `href`, i).get(t + (n.href || ``))) {
                          for (s = 0; s < o.length; s++) {
                            r = o[s];
                            if (r.getAttribute(`href`) === (n.href == null || n.href === `` ? null : n.href) && r.getAttribute(`rel`) === (n.rel == null ? null : n.rel) && r.getAttribute(`title`) === (n.title == null ? null : n.title) && r.getAttribute(`crossorigin`) === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              o.splice(s, 1);
                              break b;
                            }
                          }
                        }
                        r = i.createElement(t);
                        np(r, t, n);
                        i.head.appendChild(r);
                        break;
                      case `meta`:
                        if (o = Gm(`meta`, `content`, i).get(t + (n.content || ``))) {
                          for (s = 0; s < o.length; s++) {
                            r = o[s];
                            if (r.getAttribute(`content`) === (n.content == null ? null : `${n.content}`) && r.getAttribute(`name`) === (n.name == null ? null : n.name) && r.getAttribute(`property`) === (n.property == null ? null : n.property) && r.getAttribute(`http-equiv`) === (n.httpEquiv == null ? null : n.httpEquiv) && r.getAttribute(`charset`) === (n.charSet == null ? null : n.charSet)) {
                              o.splice(s, 1);
                              break b;
                            }
                          }
                        }
                        r = i.createElement(t);
                        np(r, t, n);
                        i.head.appendChild(r);
                        break;
                      default:
                        throw Error(a(468, t));
                    }
                    r[Ft] = e;
                    E(r);
                    t = r;
                  }
                  e.stateNode = t;
                }
              } else if (!B) {
                Km(o, e.type, e.stateNode);
              }
            } else {
              e.stateNode = Bm(o, n, e.memoizedProps);
            }
          } else if (i === n) {
            if (n === null && e.stateNode !== null) {
              Rl(e, e.memoizedProps, r.memoizedProps);
            }
          } else {
            if (i === null) {
              t = r.stateNode;
              if (t !== null && !V) {
                t.parentNode.removeChild(t);
              }
            } else {
              i.count--;
            }
            if (n === null) {
              if (!B) {
                Km(o, e.type, e.stateNode);
              }
            } else {
              Bm(o, n, e.memoizedProps);
            }
          }
        }
        break;
      case 27:
        Au(t, e, n);
        Nu(e);
        if (i & 512) {
          if (!V && r !== null) {
            jl(r, r.return);
          }
        }
        if (r !== null && i & 4) {
          Rl(e, e.memoizedProps, r.memoizedProps);
        }
        break;
      case 5:
        o = lu;
        lu = false;
        Au(t, e, n);
        lu = o;
        Nu(e);
        if (i & 512) {
          if (!V && r !== null) {
            jl(r, r.return);
          }
        }
        if (e.flags & 32) {
          t = e.stateNode;
          try {
            Sn(t, ``);
            D = true;
          } catch (t) {
            Z(e, e.return, t);
          }
        }
        if (i & 4 && e.stateNode != null) {
          t = e.memoizedProps;
          Rl(e, t, r === null ? t : r.memoizedProps);
        }
        if (i & 1024) {
          uu = true;
        }
        break;
      case 6:
        Au(t, e, n);
        Nu(e);
        if (i & 4) {
          if (e.stateNode === null) {
            throw Error(a(162));
          }
          t = e.memoizedProps;
          n = e.stateNode;
          try {
            n.nodeValue = t;
            D = true;
          } catch (t) {
            Z(e, e.return, t);
          }
        }
        break;
      case 3:
        D = false;
        Wm = null;
        o = ju;
        ju = bm(t.containerInfo);
        Au(t, e, n);
        ju = o;
        Nu(e);
        if (i & 4 && r !== null && r.memoizedState.isDehydrated) {
          try {
            Hh(t.containerInfo);
          } catch (t) {
            Z(e, e.return, t);
          }
        }
        if (uu) {
          uu = false;
          Pu(e);
        }
        D = false;
        break;
      case 4:
        i = lu;
        lu = B;
        r = an();
        o = ju;
        ju = bm(e.stateNode.containerInfo);
        Au(t, e, n);
        Nu(e);
        ju = o;
        if (D && pu) {
          mu = true;
        }
        D = r;
        lu = i;
        break;
      case 12:
        Au(t, e, n);
        Nu(e);
        break;
      case 31:
        Au(t, e, n);
        Nu(e);
        if (i & 4) {
          t = e.updateQueue;
          if (t !== null) {
            e.updateQueue = null;
            ku(e, t);
          }
        }
        break;
      case 13:
        Au(t, e, n);
        Nu(e);
        if (e.child.flags & 8192 && e.memoizedState !== null != (r !== null && r.memoizedState !== null)) {
          hd = $e();
        }
        if (i & 4) {
          t = e.updateQueue;
          if (t !== null) {
            e.updateQueue = null;
            ku(e, t);
          }
        }
        break;
      case 22:
        o = e.memoizedState !== null;
        s = r !== null && r.memoizedState !== null;
        var c = B;
        var l = V;
        var u = lu;
        B = c || o;
        lu = u || o;
        V = l || s;
        Au(t, e, n);
        V = l;
        lu = u;
        B = c;
        Nu(e);
        if (i & 8192) {
          t = e.stateNode;
          t._visibility = o ? t._visibility & -2 : t._visibility | 1;
          if (!!o && r !== null && !s && !B && !V) {
            t = s || V;
            n = B;
            r = V;
            B = o || B;
            V = t;
            Ru(e, 2);
            B = n;
            V = r;
          }
          if (!!o || !lu) {
            yu(e, o);
          }
        }
        if (i & 4) {
          t = e.updateQueue;
          if (t !== null) {
            n = t.retryQueue;
            if (n !== null) {
              t.retryQueue = null;
              ku(e, n);
            }
          }
        }
        break;
      case 19:
        Au(t, e, n);
        Nu(e);
        if (i & 4) {
          t = e.updateQueue;
          if (t !== null) {
            e.updateQueue = null;
            ku(e, t);
          }
        }
        break;
      case 30:
        if (i & 512) {
          if (!V && r !== null) {
            jl(r, r.return);
          }
        }
        i = an();
        o = pu;
        s = (n & 335544064) === n;
        c = e.memoizedProps;
        pu = s && ji(c.default, c.update) !== `none`;
        Au(t, e, n);
        Nu(e);
        if (s && r !== null && D) {
          e.flags |= 4;
        }
        pu = o;
        D = i;
        break;
      case 21:
        break;
      case 7:
        if (i & 512) {
          if (!V && r !== null) {
            jl(r, r.return);
          }
        }
        if (r && r.stateNode !== null) {
          r.stateNode._fragmentFiber = e;
        }
      default:
        Au(t, e, n);
        Nu(e);
    }
  }
  function Nu(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        var n;
        for (var r = e.return; r !== null;) {
          if (zl(r)) {
            n = r;
            break;
          }
          r = r.return;
        }
        r = null;
        for (var i = e.return; i !== null;) {
          if (Il(i)) {
            var o = i.stateNode;
            if (r === null) {
              r = [o];
            } else {
              r.push(o);
            }
          }
          if (Fl(i)) {
            break;
          }
          i = i.return;
        }
        var s = r;
        if (n == null) {
          throw Error(a(160));
        }
        switch (n.tag) {
          case 27:
            var c = n.stateNode;
            Hl(e, Bl(e), c, s);
            break;
          case 5:
            var l = n.stateNode;
            if (n.flags & 32) {
              Sn(l, ``);
              n.flags &= -33;
            }
            Hl(e, Bl(e), l, s);
            break;
          case 3:
          case 4:
            var u = n.stateNode.containerInfo;
            Vl(e, Bl(e), u, s);
            break;
          default:
            throw Error(a(161));
        }
      } catch (t) {
        Z(e, e.return, t);
      }
      e.flags &= -3;
    }
    if (t & 4096) {
      e.flags &= -4097;
    }
  }
  function Pu(e) {
    if (e.subtreeFlags & 1024) {
      for (e = e.child; e !== null;) {
        var t = e;
        Pu(t);
        if (t.tag === 5 && t.flags & 1024) {
          t = t.stateNode;
          gh = true;
          t.reset();
          gh = false;
        }
        e = e.sibling;
      }
    }
  }
  function Fu(e, t) {
    if (t.subtreeFlags & 9270) {
      for (t = t.child; t !== null;) {
        Iu(t, e);
        t = t.sibling;
      }
    } else {
      cu(t, false);
    }
  }
  function Iu(e, t) {
    var n = e.alternate;
    if (n === null) {
      eu(e, false);
    } else {
      switch (e.tag) {
        case 3:
          hu = fu = false;
          Jl();
          Fu(t, e);
          if (!fu && !mu) {
            e = ql;
            if (e !== null) {
              for (var r = 0; r < e.length; r += 3) {
                n = e[r];
                var i = e[r + 1];
                Ep(n, e[r + 2]);
                n = n.ownerDocument.documentElement;
                if (n !== null) {
                  n.animate({
                    opacity: [0, 0],
                    pointerEvents: [`none`, `none`]
                  }, {
                    duration: 0,
                    fill: `forwards`,
                    pseudoElement: `::view-transition-group(${i})`
                  });
                }
              }
            }
            e = t.containerInfo;
            e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement;
            if (e !== null && e.style.viewTransitionName === ``) {
              e.style.viewTransitionName = `none`;
              e.animate({
                opacity: [0, 0],
                pointerEvents: [`none`, `none`]
              }, {
                duration: 0,
                fill: `forwards`,
                pseudoElement: `::view-transition-group(root)`
              });
              e.animate({
                width: [0, 0],
                height: [0, 0]
              }, {
                duration: 0,
                fill: `forwards`,
                pseudoElement: `::view-transition`
              });
            }
            hu = true;
          }
          ql = null;
          break;
        case 5:
          Fu(t, e);
          break;
        case 4:
          r = fu;
          fu = false;
          Fu(t, e);
          if (fu) {
            mu = true;
          }
          fu = r;
          break;
        case 22:
          if (e.memoizedState === null) {
            if (n.memoizedState === null) {
              Fu(t, e);
            } else {
              eu(e, false);
            }
          }
          break;
        case 30:
          r = fu;
          i = Jl();
          fu = false;
          Fu(t, e);
          if (fu) {
            e.flags |= 4;
          }
          var a = e.memoizedProps;
          var o = e.stateNode;
          t = ki(a, o);
          o = ki(n.memoizedProps, o);
          var s = ji(a.default, a.update);
          if (s === `none`) {
            t = false;
          } else {
            a = n.memoizedState;
            n.memoizedState = null;
            n = e.child;
            Yl = 0;
            t = su(e, n, t, o, s, a, true);
            if (Yl !== (a === null ? 0 : a.length)) {
              e.flags |= 32;
            }
          }
          if (e.flags & 4 && t) {
            Nd(e, e.memoizedProps.onUpdate);
            ql = i;
          } else if (i !== null) {
            i.push.apply(i, ql);
            ql = i;
          }
          fu = e.flags & 32 ? true : r;
          break;
        default:
          Fu(t, e);
      }
    }
  }
  function Lu(e, t) {
    if (t.subtreeFlags & 8772) {
      for (t = t.child; t !== null;) {
        vu(e, t.alternate, t);
        t = t.sibling;
      }
    }
  }
  function Ru(e, t) {
    for (e = e.child; e !== null;) {
      var n = e;
      var r = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Dl(4, n, n.return);
          Ru(n, r);
          break;
        case 1:
          jl(n, n.return);
          var i = n.stateNode;
          if (typeof i.componentWillUnmount == `function`) {
            kl(n, n.return, i);
          }
          Ru(n, r);
          break;
        case 27:
          if (r & 2) {
            gm(n.stateNode, n.type, n.memoizedProps);
          }
        case 5:
          jl(n, n.return);
          if (n.tag === 5 || n.tag === 27) {
            Pl(n);
          }
          Ru(n, r);
          break;
        case 6:
          Pl(n);
          break;
        case 26:
          jl(n, n.return);
          i = n.stateNode;
          if (n.memoizedState === null && i !== null && !V) {
            i.parentNode.removeChild(i);
          }
          Ru(n, r);
          break;
        case 22:
          if (n.memoizedState === null) {
            Ru(n, r);
          }
          break;
        case 30:
          jl(n, n.return);
          Ru(n, r);
          break;
        case 7:
          jl(n, n.return);
        default:
          Ru(n, r);
      }
      e = e.sibling;
    }
  }
  function zu(e, t, n) {
    n = t.subtreeFlags & 8772 ? n : n & -2;
    t = t.child;
    while (t !== null) {
      var r = t.alternate;
      var i = e;
      var a = t;
      var o = a.flags;
      var s = !!(n & 1);
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          zu(i, a, n);
          El(4, a);
          break;
        case 1:
          zu(i, a, n);
          r = a;
          i = r.stateNode;
          if (typeof i.componentDidMount == `function`) {
            try {
              i.componentDidMount();
            } catch (e) {
              Z(r, r.return, e);
            }
          }
          r = a;
          i = r.updateQueue;
          if (i !== null) {
            var c = r.stateNode;
            try {
              var l = i.shared.hiddenCallbacks;
              if (l !== null) {
                i.shared.hiddenCallbacks = null;
                i = 0;
                for (; i < l.length; i++) {
                  No(l[i], c);
                }
              }
            } catch (e) {
              Z(r, r.return, e);
            }
          }
          if (s && o & 64) {
            Ol(a);
          }
          Al(a, a.return);
          break;
        case 27:
          if (n & 2) {
            Ul(a);
          }
        case 5:
          if (a.tag === 5 || a.tag === 27) {
            Nl(a);
          }
          zu(i, a, n);
          if (s && r === null && o & 4) {
            Ll(a);
          }
          Al(a, a.return);
          break;
        case 6:
          Nl(a);
          break;
        case 26:
          c = a.stateNode;
          if (a.memoizedState === null && c !== null && !B) {
            Km(bm(c.ownerDocument), a.type, c);
          }
          zu(i, a, n);
          if (s && r === null && o & 4) {
            Ll(a);
          }
          Al(a, a.return);
          break;
        case 12:
          zu(i, a, n);
          break;
        case 31:
          zu(i, a, n);
          if (s && o & 4) {
            Eu(i, a);
          }
          break;
        case 13:
          zu(i, a, n);
          if (s && o & 4) {
            Du(i, a);
          }
          break;
        case 22:
          if (a.memoizedState === null) {
            zu(i, a, n);
          }
          Al(a, a.return);
          break;
        case 30:
          zu(i, a, n);
          Al(a, a.return);
          break;
        case 7:
          Al(a, a.return);
        default:
          zu(i, a, n);
      }
      t = t.sibling;
    }
  }
  function Bu(e, t) {
    var n = null;
    if (e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null) {
      n = e.memoizedState.cachePool.pool;
    }
    e = null;
    if (t.memoizedState !== null && t.memoizedState.cachePool !== null) {
      e = t.memoizedState.cachePool.pool;
    }
    if (e !== n) {
      if (e != null) {
        e.refCount++;
      }
      if (n != null) {
        Ha(n);
      }
    }
  }
  function Vu(e, t) {
    e = null;
    if (t.alternate !== null) {
      e = t.alternate.memoizedState.cache;
    }
    t = t.memoizedState.cache;
    if (t !== e) {
      t.refCount++;
      if (e != null) {
        Ha(e);
      }
    }
  }
  function Hu(e, t, n, r) {
    var i = (n & 335544064) === n;
    if (t.subtreeFlags & (i ? 10262 : 10256)) {
      for (t = t.child; t !== null;) {
        Uu(e, t, n, r);
        t = t.sibling;
      }
    } else if (i) {
      ou(t);
    }
  }
  function Uu(e, t, n, r) {
    var i = (n & 335544064) === n;
    if (i && t.alternate === null && t.return !== null && t.return.alternate !== null) {
      au(t);
    }
    var a = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Hu(e, t, n, r);
        if (a & 2048) {
          El(9, t);
        }
        break;
      case 1:
        Hu(e, t, n, r);
        break;
      case 3:
        Hu(e, t, n, r);
        if (i && hu) {
          e = e.containerInfo;
          e = e.nodeType === 9 ? e.body : e.nodeName === `HTML` ? e.ownerDocument.body : e;
          if (e.style.viewTransitionName === `root`) {
            e.style.viewTransitionName = ``;
          }
          e = e.ownerDocument.documentElement;
          if (e !== null && e.style.viewTransitionName === `none`) {
            e.style.viewTransitionName = ``;
          }
        }
        if (a & 2048) {
          a = null;
          if (t.alternate !== null) {
            a = t.alternate.memoizedState.cache;
          }
          t = t.memoizedState.cache;
          if (t !== a) {
            t.refCount++;
            if (a != null) {
              Ha(a);
            }
          }
        }
        break;
      case 12:
        if (a & 2048) {
          Hu(e, t, n, r);
          a = t.stateNode;
          try {
            var o = t.memoizedProps;
            var s = o.id;
            var c = o.onPostCommit;
            if (typeof c == `function`) {
              c(s, t.alternate === null ? `mount` : `update`, a.passiveEffectDuration, -0);
            }
          } catch (e) {
            Z(t, t.return, e);
          }
        } else {
          Hu(e, t, n, r);
        }
        break;
      case 31:
        Hu(e, t, n, r);
        break;
      case 13:
        Hu(e, t, n, r);
        break;
      case 23:
        break;
      case 22:
        o = t.stateNode;
        s = t.alternate;
        if (t.memoizedState === null) {
          if (i && s !== null && s.memoizedState !== null) {
            au(t);
          }
          if (o._visibility & 2) {
            Hu(e, t, n, r);
          } else {
            o._visibility |= 2;
            Wu(e, t, n, r, !!(t.subtreeFlags & 10256) || false);
          }
        } else {
          if (i && s !== null && s.memoizedState === null) {
            au(s);
          }
          if (o._visibility & 2) {
            Hu(e, t, n, r);
          } else {
            Gu(e, t);
          }
        }
        if (a & 2048) {
          Bu(s, t);
        }
        break;
      case 24:
        Hu(e, t, n, r);
        if (a & 2048) {
          Vu(t.alternate, t);
        }
        break;
      case 30:
        if (i) {
          a = t.alternate;
          if (a !== null) {
            Ql(a.child, true);
            Ql(t.child, true);
          }
        }
        Hu(e, t, n, r);
        break;
      default:
        Hu(e, t, n, r);
    }
  }
  function Wu(e, t, n, r, i) {
    i &&= !!(t.subtreeFlags & 10256) || false;
    t = t.child;
    while (t !== null) {
      var a = e;
      var o = t;
      var s = n;
      var c = r;
      var l = o.flags;
      switch (o.tag) {
        case 0:
        case 11:
        case 15:
          Wu(a, o, s, c, i);
          El(8, o);
          break;
        case 23:
          break;
        case 22:
          var u = o.stateNode;
          if (o.memoizedState === null) {
            u._visibility |= 2;
            Wu(a, o, s, c, i);
          } else if (u._visibility & 2) {
            Wu(a, o, s, c, i);
          } else {
            Gu(a, o);
          }
          if (i && l & 2048) {
            Bu(o.alternate, o);
          }
          break;
        case 24:
          Wu(a, o, s, c, i);
          if (i && l & 2048) {
            Vu(o.alternate, o);
          }
          break;
        default:
          Wu(a, o, s, c, i);
      }
      t = t.sibling;
    }
  }
  function Gu(e, t) {
    if (t.subtreeFlags & 10256) {
      for (t = t.child; t !== null;) {
        var n = e;
        var r = t;
        var i = r.flags;
        switch (r.tag) {
          case 22:
            Gu(n, r);
            if (i & 2048) {
              Bu(r.alternate, r);
            }
            break;
          case 24:
            Gu(n, r);
            if (i & 2048) {
              Vu(r.alternate, r);
            }
            break;
          default:
            Gu(n, r);
        }
        t = t.sibling;
      }
    }
  }
  var Ku = 8192;
  function qu(e, t, n) {
    if (e.subtreeFlags & Ku) {
      for (e = e.child; e !== null;) {
        Ju(e, t, n);
        e = e.sibling;
      }
    }
  }
  function Ju(e, t, n) {
    switch (e.tag) {
      case 26:
        qu(e, t, n);
        if (e.flags & Ku) {
          if (e.memoizedState === null) {
            e = e.stateNode;
            if ((t & 335544128) === t) {
              Zm(n, e);
            }
          } else {
            Qm(n, ju, e.memoizedState, e.memoizedProps);
          }
        }
        break;
      case 5:
        qu(e, t, n);
        if (e.flags & Ku) {
          e = e.stateNode;
          if ((t & 335544128) === t) {
            Zm(n, e);
          }
        }
        break;
      case 3:
      case 4:
        var r = ju;
        ju = bm(e.stateNode.containerInfo);
        qu(e, t, n);
        ju = r;
        break;
      case 22:
        if (e.memoizedState === null) {
          r = e.alternate;
          if (r !== null && r.memoizedState !== null) {
            r = Ku;
            Ku = 16777216;
            qu(e, t, n);
            Ku = r;
          } else {
            qu(e, t, n);
          }
        }
        break;
      case 30:
        if ((e.flags & Ku) !== 0 && (r = e.memoizedProps.name, r != null && r !== `auto`)) {
          var i = e.stateNode;
          i.paired = null;
          if (Gl === null) {
            Gl = new Map();
          }
          Gl.set(r, i);
        }
        qu(e, t, n);
        break;
      default:
        qu(e, t, n);
    }
  }
  function Yu(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do {
        t = e.sibling;
        e.sibling = null;
        e = t;
      } while (e !== null);
    }
  }
  function Xu(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          H = r;
          $u(r, e);
        }
      }
      Yu(e);
    }
    if (e.subtreeFlags & 10256) {
      for (e = e.child; e !== null;) {
        Zu(e);
        e = e.sibling;
      }
    }
  }
  function Zu(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Xu(e);
        if (e.flags & 2048) {
          Dl(9, e, e.return);
        }
        break;
      case 3:
        Xu(e);
        break;
      case 12:
        Xu(e);
        break;
      case 22:
        var t = e.stateNode;
        if (e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13)) {
          t._visibility &= -3;
          Qu(e);
        } else {
          Xu(e);
        }
        break;
      default:
        Xu(e);
    }
  }
  function Qu(e) {
    var t = e.deletions;
    if (e.flags & 16) {
      if (t !== null) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          H = r;
          $u(r, e);
        }
      }
      Yu(e);
    }
    for (e = e.child; e !== null;) {
      t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          Dl(8, t, t.return);
          Qu(t);
          break;
        case 22:
          n = t.stateNode;
          if (n._visibility & 2) {
            n._visibility &= -3;
            Qu(t);
          }
          break;
        default:
          Qu(t);
      }
      e = e.sibling;
    }
  }
  function $u(e, t) {
    while (H !== null) {
      var n = H;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Dl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var r = n.memoizedState.cachePool.pool;
            if (r != null) {
              r.refCount++;
            }
          }
          break;
        case 24:
          Ha(n.memoizedState.cache);
      }
      r = n.child;
      if (r !== null) {
        r.return = n;
        H = r;
      } else {
        a: for (n = e; H !== null;) {
          r = H;
          var i = r.sibling;
          var a = r.return;
          Su(r);
          if (r === n) {
            H = null;
            break a;
          }
          if (i !== null) {
            i.return = a;
            H = i;
            break a;
          }
          H = a;
        }
      }
    }
  }
  var ed = {
    getCacheForType: function (e) {
      var t = Fa(j);
      var n = t.data.get(e);
      if (n === undefined) {
        n = e();
        t.data.set(e, n);
      }
      return n;
    },
    cacheSignal: function () {
      return Fa(j).controller.signal;
    }
  };
  var td = typeof WeakMap == `function` ? WeakMap : Map;
  var W = 0;
  var G = null;
  var K = null;
  var q = 0;
  var J = 0;
  var nd = null;
  var rd = false;
  var id = false;
  var ad = false;
  var od = 0;
  var Y = 0;
  var sd = 0;
  var cd = 0;
  var ld = 0;
  var ud = 0;
  var dd = 0;
  var fd = null;
  var pd = null;
  var md = false;
  var hd = 0;
  var gd = 0;
  var _d = Infinity;
  var vd = null;
  var yd = null;
  var X = 0;
  var bd = null;
  var xd = null;
  var Sd = 0;
  var Cd = 0;
  var wd = null;
  var Td = null;
  var Ed = null;
  var Dd = null;
  var Od = null;
  var kd = 0;
  var Ad = null;
  function jd() {
    if (W & 2 && q !== 0) {
      return q & -q;
    } else if (C.T === null) {
      return Mt();
    } else {
      return Pf();
    }
  }
  function Md() {
    if (ud === 0) {
      if (!(q & 536870912) || A) {
        var e = gt;
        gt <<= 1;
        if (!(gt & 3932160)) {
          gt = 262144;
        }
        ud = e;
      } else {
        ud = 536870912;
      }
    }
    e = Bo.current;
    if (e !== null) {
      e.flags |= 32;
    }
    return ud;
  }
  function Nd(e, t) {
    if (t != null) {
      var n = e.stateNode;
      var r = n.ref;
      if (r === null) {
        r = n.ref = Pp(ki(e.memoizedProps, n));
      }
      if (Dd === null) {
        Dd = [];
      }
      Dd.push(t.bind(null, r));
    }
  }
  function Pd(e, t, n) {
    if (e === G && (J === 2 || J === 9) || e.cancelPendingCommit !== null) {
      Vd(e, 0);
      Rd(e, q, ud, false);
    }
    Tt(e, n);
    if (!(W & 2) || e !== G) {
      if (e === G) {
        if (!(W & 2)) {
          cd |= n;
        }
        if (Y === 4) {
          Rd(e, q, ud, false);
        }
      }
      Ef(e);
    }
  }
  function Fd(e, t, n) {
    if (W & 6) {
      throw Error(a(327));
    }
    var r = !n && !(t & 127) && (t & e.expiredLanes) === 0 || bt(e, t);
    var i = r ? Yd(e, t) : qd(e, t, true);
    var o = r;
    do {
      if (i === 0) {
        if (id && !r) {
          Rd(e, t, 0, false);
        }
        break;
      }
      n = e.current.alternate;
      if (o && !Ld(n)) {
        i = qd(e, t, false);
        o = false;
      } else {
        if (i === 2) {
          o = t;
          if (e.errorRecoveryDisabledLanes & o) {
            var s = 0;
          } else {
            s = e.pendingLanes & -536870913;
            s = s === 0 ? s & 536870912 ? 536870912 : 0 : s;
          }
          if (s !== 0) {
            t = s;
            a: {
              var c = e;
              i = fd;
              var l = c.current.memoizedState.isDehydrated;
              if (l) {
                Vd(c, s).flags |= 256;
              }
              s = qd(c, s, false);
              if (s !== 2 && s !== 6) {
                if (ad && !l) {
                  c.errorRecoveryDisabledLanes |= o;
                  cd |= o;
                  i = 4;
                  break a;
                }
                o = pd;
                pd = i;
                if (o !== null) {
                  if (pd === null) {
                    pd = o;
                  } else {
                    pd.push.apply(pd, o);
                  }
                }
              }
              i = s;
            }
            o = false;
            if (i !== 2) {
              continue;
            }
          }
        }
        if (i === 1) {
          Vd(e, 0);
          Rd(e, t, 0, true);
          break;
        }
        a: {
          r = e;
          o = i;
          switch (o) {
            case 0:
            case 1:
              throw Error(a(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t) {
                break;
              }
            case 6:
              Rd(r, t, ud, !rd);
              break a;
            case 2:
              pd = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(a(329));
          }
          if ((t & 62914560) === t && (i = hd + 300 - $e(), i > 10)) {
            Rd(r, t, ud, !rd);
            if (yt(r, 0, true) !== 0) {
              break a;
            }
            Sd = t;
            r.timeoutHandle = gp(Id.bind(null, r, n, pd, vd, md, t, ud, cd, dd, rd, o, `Throttled`, -0, 0), i);
            break a;
          }
          Id(r, n, pd, vd, md, t, ud, cd, dd, rd, o, null, -0, 0);
        }
        break;
      }
    } while (1);
    Ef(e);
  }
  function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
    e.timeoutHandle = -1;
    var m = t.subtreeFlags;
    var h = (a & 335544064) === a;
    d = null;
    if ((h || m & 8192 || (m & 16785408) == 16785408) && (d = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: true,
      waitingForViewTransition: false,
      unsuspend: An
    }, Gl = null, Ju(t, a, d), h && (m = d, h = e.containerInfo, h = (h.nodeType === 9 ? h : h.ownerDocument).__reactViewTransition, h != null && (m.count++, m.waitingForViewTransition = true, m = nh.bind(m), h.finished.then(m, m))), m = (a & 62914560) === a ? hd - $e() : (a & 4194048) === a ? gd - $e() : 0, m = eh(d, m), m !== null)) {
      Sd = a;
      e.cancelPendingCommit = m(nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p));
      Rd(e, a, o, !l);
    } else {
      nf(e, t, a, n, r, i, o, s, c, l, u, d);
    }
  }
  function Ld(e) {
    var t = e;
    for (;;) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null))) {
        for (var r = 0; r < n.length; r++) {
          var i = n[r];
          var a = i.getSnapshot;
          i = i.value;
          try {
            if (!$r(a(), i)) {
              return false;
            }
          } catch {
            return false;
          }
        }
      }
      n = t.child;
      if (t.subtreeFlags & 16384 && n !== null) {
        n.return = t;
        t = n;
      } else {
        if (t === e) {
          break;
        }
        while (t.sibling === null) {
          if (t.return === null || t.return === e) {
            return true;
          }
          t = t.return;
        }
        t.sibling.return = t.return;
        t = t.sibling;
      }
    }
    return true;
  }
  function Rd(e, t, n, r) {
    t = xt(e, t);
    t &= ~ld;
    t &= ~cd;
    e.suspendedLanes |= t;
    e.pingedLanes &= ~t;
    if (r) {
      e.warmLanes |= t;
    }
    r = e.expirationTimes;
    for (var i = t; i > 0;) {
      var a = 31 - dt(i);
      var o = 1 << a;
      r[a] = -1;
      i &= ~o;
    }
    if (n !== 0) {
      Dt(e, n, t);
    }
  }
  function zd() {
    if (W & 6) {
      return true;
    } else {
      Df(0, false);
      return false;
    }
  }
  function Bd() {
    if (K !== null) {
      if (J === 0) {
        var e = K.return;
      } else {
        e = K;
        Da = Ea = null;
        fs(e);
        ho = null;
        go = 0;
        e = K;
      }
      while (e !== null) {
        Tl(e.alternate, e);
        e = e.return;
      }
      K = null;
    }
  }
  function Vd(e, t) {
    var n = e.timeoutHandle;
    if (n !== -1) {
      e.timeoutHandle = -1;
      _p(n);
    }
    n = e.cancelPendingCommit;
    if (n !== null) {
      e.cancelPendingCommit = null;
      n();
    }
    Sd = 0;
    Bd();
    G = e;
    K = n = Ki(e.current, null);
    q = t;
    J = 0;
    nd = null;
    rd = false;
    id = bt(e, t);
    ad = false;
    dd = ud = ld = cd = sd = Y = 0;
    pd = fd = null;
    md = false;
    od = xt(e, t);
    Ii();
    return n;
  }
  function Hd(e, t) {
    M = null;
    C.H = xc;
    if (t === io || t === oo) {
      t = po();
      J = 3;
    } else if (t === ao) {
      t = po();
      J = 4;
    } else {
      J = t === zc ? 8 : typeof t == `object` && t && typeof t.then == `function` ? 6 : 1;
    }
    nd = t;
    if (K === null) {
      Y = 1;
      Nc(e, ea(t, e.current));
    }
  }
  function Ud() {
    var e = Bo.current;
    if (e === null) {
      return true;
    } else if ((q & 4194048) === q) {
      return Vo === null;
    } else if ((q & 62914560) === q || q & 536870912) {
      return e === Vo;
    } else {
      return false;
    }
  }
  function Wd() {
    var e = C.H;
    C.H = xc;
    if (e === null) {
      return xc;
    } else {
      return e;
    }
  }
  function Gd() {
    var e = C.A;
    C.A = ed;
    return e;
  }
  function Kd() {
    Y = 4;
    if (!rd && ((q & 4194048) === q || Bo.current === null)) {
      id = true;
    }
    if ((!!(sd & 134217727) || !!(cd & 134217727)) && G !== null) {
      Rd(G, q, ud, false);
    }
  }
  function qd(e, t, n) {
    var r = W;
    W |= 2;
    var i = Wd();
    var a = Gd();
    if (G !== e || q !== t) {
      vd = null;
      Vd(e, t);
    }
    t = false;
    var o = Y;
    a: do {
      try {
        if (J !== 0 && K !== null) {
          var s = K;
          var c = nd;
          switch (J) {
            case 8:
              Bd();
              o = 6;
              break a;
            case 3:
            case 2:
            case 9:
            case 6:
              if (Bo.current === null) {
                t = true;
              }
              var l = J;
              J = 0;
              nd = null;
              $d(e, s, c, l);
              if (n && id) {
                o = 0;
                break a;
              }
              break;
            default:
              l = J;
              J = 0;
              nd = null;
              $d(e, s, c, l);
          }
        }
        Jd();
        o = Y;
        break;
      } catch (t) {
        Hd(e, t);
      }
    } while (1);
    if (t) {
      e.shellSuspendCounter++;
    }
    Da = Ea = null;
    W = r;
    C.H = i;
    C.A = a;
    if (K === null) {
      G = null;
      q = 0;
      Ii();
    }
    return o;
  }
  function Jd() {
    while (K !== null) {
      Zd(K);
    }
  }
  function Yd(e, t) {
    var n = W;
    W |= 2;
    var r = Wd();
    var i = Gd();
    if (G !== e || q !== t) {
      vd = null;
      _d = $e() + 500;
      Vd(e, t);
    } else {
      id = bt(e, t);
    }
    a: do {
      try {
        if (J !== 0 && K !== null) {
          t = K;
          var o = nd;
          b: switch (J) {
            case 1:
              J = 0;
              nd = null;
              $d(e, t, o, 1);
              break;
            case 2:
            case 9:
              if (co(o)) {
                J = 0;
                nd = null;
                Qd(t);
                break;
              }
              t = function () {
                if ((J === 2 || J === 9) && G === e) {
                  J = 7;
                }
                Ef(e);
              };
              o.then(t, t);
              break a;
            case 3:
              J = 7;
              break a;
            case 4:
              J = 5;
              break a;
            case 7:
              if (co(o)) {
                J = 0;
                nd = null;
                Qd(t);
              } else {
                J = 0;
                nd = null;
                $d(e, t, o, 7);
              }
              break;
            case 5:
              var s = null;
              switch (K.tag) {
                case 26:
                  s = K.memoizedState;
                case 5:
                case 27:
                  var c = K;
                  if (s ? Ym(s) : c.stateNode.complete) {
                    J = 0;
                    nd = null;
                    var l = c.sibling;
                    if (l !== null) {
                      K = l;
                    } else {
                      var u = c.return;
                      if (u === null) {
                        K = null;
                      } else {
                        K = u;
                        ef(u);
                      }
                    }
                    break b;
                  }
              }
              J = 0;
              nd = null;
              $d(e, t, o, 5);
              break;
            case 6:
              J = 0;
              nd = null;
              $d(e, t, o, 6);
              break;
            case 8:
              Bd();
              Y = 6;
              break a;
            default:
              throw Error(a(462));
          }
        }
        Xd();
        break;
      } catch (t) {
        Hd(e, t);
      }
    } while (1);
    Da = Ea = null;
    C.H = r;
    C.A = i;
    W = n;
    if (K === null) {
      G = null;
      q = 0;
      Ii();
      return Y;
    } else {
      return 0;
    }
  }
  function Xd() {
    while (K !== null && !Ze()) {
      Zd(K);
    }
  }
  function Zd(e) {
    var t = _l(e.alternate, e, od);
    e.memoizedProps = e.pendingProps;
    if (t === null) {
      ef(e);
    } else {
      K = t;
    }
  }
  function Qd(e) {
    var t = e;
    var n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Zc(n, t, t.pendingProps, t.type, undefined, q);
        break;
      case 11:
        t = Zc(n, t, t.pendingProps, t.type.render, t.ref, q);
        break;
      case 5:
        fs(t);
        var r = t;
        if (r === O) {
          if (A) {
            ba(r);
            if (r.tag === 5 && r.stateNode != null) {
              k = r.stateNode;
            }
          } else {
            ba(r);
            A = true;
          }
        }
      default:
        Tl(n, t);
        t = K = qi(t, od);
        t = _l(n, t, od);
    }
    e.memoizedProps = e.pendingProps;
    if (t === null) {
      ef(e);
    } else {
      K = t;
    }
  }
  function $d(e, t, n, r) {
    Da = Ea = null;
    fs(t);
    ho = null;
    go = 0;
    var i = t.return;
    try {
      if (Rc(e, i, t, n, q)) {
        Y = 1;
        Nc(e, ea(n, e.current));
        K = null;
        return;
      }
    } catch (t) {
      if (i !== null) {
        K = i;
        throw t;
      }
      Y = 1;
      Nc(e, ea(n, e.current));
      K = null;
      return;
    }
    if (t.flags & 32768) {
      if (A || r === 1) {
        e = true;
      } else if (id || q & 536870912) {
        e = false;
      } else {
        rd = e = true;
        if (r === 2 || r === 9 || r === 3 || r === 6) {
          r = Bo.current;
          if (r !== null && r.tag === 13) {
            r.flags |= 16384;
          }
        }
      }
      tf(t, e);
    } else {
      ef(t);
    }
  }
  function ef(e) {
    var t = e;
    do {
      if (t.flags & 32768) {
        tf(t, rd);
        return;
      }
      e = t.return;
      var n = Cl(t.alternate, t, od);
      if (n !== null) {
        K = n;
        return;
      }
      t = t.sibling;
      if (t !== null) {
        K = t;
        return;
      }
      K = t = e;
    } while (t !== null);
    if (Y === 0) {
      Y = 5;
    }
  }
  function tf(e, t) {
    do {
      var n = wl(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767;
        K = n;
        return;
      }
      n = e.return;
      if (n !== null) {
        n.flags |= 32768;
        n.subtreeFlags = 0;
        n.deletions = null;
      }
      if (!t && (e = e.sibling, e !== null)) {
        K = e;
        return;
      }
      K = e = n;
    } while (e !== null);
    Y = 6;
    K = null;
  }
  function nf(e, t, n, r, i, o, s, c, l, u, d, f) {
    e.cancelPendingCommit = null;
    do {
      df();
    } while (X !== 0);
    if (W & 6) {
      throw Error(a(327));
    }
    if (t !== null) {
      if (t === e.current) {
        throw Error(a(177));
      }
      if (e === G) {
        K = G = null;
        q = 0;
      }
      xd = t;
      bd = e;
      Sd = n;
      wd = i;
      Td = r;
      rf(e, t, n, s, c, l, f);
    }
  }
  function rf(e, t, n, r, i, a, o) {
    var s = t.lanes | t.childLanes;
    Cd = s;
    s |= Fi;
    Et(e, n, s, r, i, a);
    Dd = null;
    if ((n & 335544064) === n) {
      Od = Ga(e);
      r = 10262;
    } else {
      Od = null;
      r = 10256;
    }
    if ((t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0) {
      e.callbackNode = null;
      e.callbackPriority = 0;
      yf(rt, function () {
        ff();
        return null;
      });
    } else {
      e.callbackNode = null;
      e.callbackPriority = 0;
    }
    Wl = false;
    r = !!(t.flags & 13878);
    if (t.subtreeFlags & 13878 || r) {
      r = C.T;
      C.T = null;
      i = w.p;
      w.p = 2;
      a = W;
      W |= 4;
      try {
        gu(e, t, n);
      } finally {
        W = a;
        w.p = i;
        C.T = r;
      }
    }
    X = 1;
    if (Wl) {
      Ed = Mp(o, e.containerInfo, Od, sf, cf, of, lf, ff, af, null, null);
    } else {
      sf();
      cf();
      lf();
    }
  }
  function af(e) {
    if (X !== 0) {
      var t = bd.onRecoverableError;
      t(e, {
        componentStack: null
      });
    }
  }
  function of() {
    if (X === 3) {
      X = 0;
      Iu(xd, bd);
      X = 4;
    }
  }
  function sf() {
    if (X === 1) {
      X = 0;
      var e = bd;
      var t = xd;
      var n = Sd;
      var r = !!(t.flags & 13878);
      if (t.subtreeFlags & 13878 || r) {
        r = C.T;
        C.T = null;
        var i = w.p;
        w.p = 2;
        var a = W;
        W |= 4;
        try {
          pu = mu = false;
          Mu(t, e, n);
          n = cp;
          var o = ai(e.containerInfo);
          var s = n.focusedElem;
          var c = n.selectionRange;
          if (o !== s && s && s.ownerDocument && ii(s.ownerDocument.documentElement, s)) {
            if (c !== null && oi(s)) {
              var l = c.start;
              var u = c.end;
              if (u === undefined) {
                u = l;
              }
              if (`selectionStart` in s) {
                s.selectionStart = l;
                s.selectionEnd = Math.min(u, s.value.length);
              } else {
                var d = s.ownerDocument || document;
                var f = d && d.defaultView || window;
                if (f.getSelection) {
                  var p = f.getSelection();
                  var m = s.textContent.length;
                  var h = Math.min(c.start, m);
                  var g = c.end === undefined ? h : Math.min(c.end, m);
                  if (!p.extend && h > g) {
                    o = g;
                    g = h;
                    h = o;
                  }
                  var _ = ri(s, h);
                  var v = ri(s, g);
                  if (_ && v && (p.rangeCount !== 1 || p.anchorNode !== _.node || p.anchorOffset !== _.offset || p.focusNode !== v.node || p.focusOffset !== v.offset)) {
                    var y = d.createRange();
                    y.setStart(_.node, _.offset);
                    p.removeAllRanges();
                    if (h > g) {
                      p.addRange(y);
                      p.extend(v.node, v.offset);
                    } else {
                      y.setEnd(v.node, v.offset);
                      p.addRange(y);
                    }
                  }
                }
              }
            }
            d = [];
            p = s;
            while (p = p.parentNode) {
              if (p.nodeType === 1) {
                d.push({
                  element: p,
                  left: p.scrollLeft,
                  top: p.scrollTop
                });
              }
            }
            if (typeof s.focus == `function`) {
              s.focus();
            }
            s = 0;
            for (; s < d.length; s++) {
              var b = d[s];
              b.element.scrollLeft = b.left;
              b.element.scrollTop = b.top;
            }
          }
          gh = !!sp;
          cp = sp = null;
        } finally {
          W = a;
          w.p = i;
          C.T = r;
        }
      }
      e.current = t;
      X = 2;
    }
  }
  function cf() {
    if (X === 2) {
      X = 0;
      var e = bd;
      var t = xd;
      var n = !!(t.flags & 8772);
      if (t.subtreeFlags & 8772 || n) {
        n = C.T;
        C.T = null;
        var r = w.p;
        w.p = 2;
        var i = W;
        W |= 4;
        try {
          vu(e, t.alternate, t);
        } finally {
          W = i;
          w.p = r;
          C.T = n;
        }
      }
      X = 3;
    }
  }
  function lf() {
    if (X === 4 || X === 3) {
      X = 0;
      var e = Ed;
      Ed = null;
      Qe();
      var t = bd;
      var n = xd;
      var r = Sd;
      var i = Td;
      var a = (r & 335544064) === r ? 10262 : 10256;
      if ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0) {
        X = 5;
      } else {
        X = 0;
        xd = bd = null;
        uf(t, t.pendingLanes);
      }
      a = t.pendingLanes;
      if (a === 0) {
        yd = null;
      }
      jt(r);
      n = n.stateNode;
      if (lt && typeof lt.onCommitFiberRoot == `function`) {
        try {
          lt.onCommitFiberRoot(ct, n, undefined, (n.current.flags & 128) == 128);
        } catch {}
      }
      if (i !== null) {
        n = C.T;
        a = w.p;
        w.p = 2;
        C.T = null;
        try {
          var o = t.onRecoverableError;
          for (var s = 0; s < i.length; s++) {
            var c = i[s];
            o(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          C.T = n;
          w.p = a;
        }
      }
      i = Dd;
      o = Od;
      Od = null;
      if (i !== null && (Dd = null, o === null && (o = []), e !== null)) {
        for (c = 0; c < i.length; c++) {
          n = (0, i[c])(o);
          if (n !== undefined) {
            e.finished.finally(n);
          }
        }
      }
      if (Sd & 3) {
        df();
      }
      Ef(t);
      a = t.pendingLanes;
      if (r & 261930 && a & 42) {
        if (t === Ad) {
          kd++;
        } else {
          kd = 0;
          Ad = t;
        }
      } else {
        kd = 0;
        Ad = null;
      }
      Df(0, false);
    }
  }
  function uf(e, t) {
    if ((e.pooledCacheLanes &= t) === 0) {
      t = e.pooledCache;
      if (t != null) {
        e.pooledCache = null;
        Ha(t);
      }
    }
  }
  function df() {
    if (Ed !== null) {
      Ed.skipTransition();
      Ed = null;
    }
    sf();
    cf();
    lf();
    return ff();
  }
  function ff() {
    if (X !== 5) {
      return false;
    }
    var e = bd;
    var t = Cd;
    Cd = 0;
    var n = jt(Sd);
    var r = C.T;
    var i = w.p;
    try {
      w.p = n < 32 ? 32 : n;
      C.T = null;
      n = wd;
      wd = null;
      var o = bd;
      var s = Sd;
      X = 0;
      xd = bd = null;
      Sd = 0;
      if (W & 6) {
        throw Error(a(331));
      }
      var c = W;
      W |= 4;
      Zu(o.current);
      Uu(o, o.current, s, n);
      W = c;
      Df(0, false);
      if (lt && typeof lt.onPostCommitFiberRoot == `function`) {
        try {
          lt.onPostCommitFiberRoot(ct, o);
        } catch {}
      }
      return true;
    } finally {
      w.p = i;
      C.T = r;
      uf(e, t);
    }
  }
  function pf(e, t, n) {
    t = ea(n, t);
    t = Fc(e.stateNode, t, 2);
    e = Do(e, t, 2);
    if (e !== null) {
      Tt(e, 2);
      Ef(e);
    }
  }
  function Z(e, t, n) {
    if (e.tag === 3) {
      pf(e, e, n);
    } else {
      while (t !== null) {
        if (t.tag === 3) {
          pf(t, e, n);
          break;
        }
        if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == `function` || typeof r.componentDidCatch == `function` && (yd === null || !yd.has(r))) {
            e = ea(n, e);
            n = Ic(2);
            r = Do(t, n, 2);
            if (r !== null) {
              Lc(n, r, t, e);
              Tt(r, 2);
              Ef(r);
            }
            break;
          }
        }
        t = t.return;
      }
    }
  }
  function mf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new td();
      var i = new Set();
      r.set(t, i);
    } else {
      i = r.get(t);
      if (i === undefined) {
        i = new Set();
        r.set(t, i);
      }
    }
    if (!i.has(n)) {
      ad = true;
      i.add(n);
      e = hf.bind(null, e, t, n);
      t.then(e, e);
    }
  }
  function hf(e, t, n) {
    var r = e.pingCache;
    if (r !== null) {
      r.delete(t);
    }
    e.pingedLanes |= e.suspendedLanes & n;
    e.warmLanes &= ~n;
    if (G === e && (q & n) === n) {
      if (Y === 4 || Y === 3 && (q & 62914560) === q && $e() - hd < 300) {
        if (W & 2) {
          ld |= n;
        } else {
          Vd(e, 0);
        }
      } else {
        ld |= n;
      }
      if (dd === q) {
        dd = 0;
      }
    }
    Ef(e);
  }
  function gf(e, t) {
    if (t === 0) {
      t = Ct();
    }
    e = zi(e, t);
    if (e !== null) {
      Tt(e, t);
      Ef(e);
    }
  }
  function _f(e) {
    var t = e.memoizedState;
    var n = 0;
    if (t !== null) {
      n = t.retryLane;
    }
    gf(e, n);
  }
  function vf(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var r = e.stateNode;
        var i = e.memoizedState;
        if (i !== null) {
          n = i.retryLane;
        }
        break;
      case 19:
        r = e.stateNode;
        break;
      case 22:
        r = e.stateNode._retryCache;
        break;
      default:
        throw Error(a(314));
    }
    if (r !== null) {
      r.delete(t);
    }
    gf(e, n);
  }
  function yf(e, t) {
    return Ye(e, t);
  }
  var bf = null;
  var xf = null;
  var Sf = false;
  var Cf = false;
  var wf = false;
  var Tf = 0;
  function Ef(e) {
    if (e !== xf && e.next === null) {
      if (xf === null) {
        bf = xf = e;
      } else {
        xf = xf.next = e;
      }
    }
    Cf = true;
    if (!Sf) {
      Sf = true;
      Nf();
    }
  }
  function Df(e, t) {
    if (!wf && Cf) {
      wf = true;
      do {
        for (var n = false, r = bf; r !== null;) {
          if (!t) {
            if (e !== 0) {
              var i = r.pendingLanes;
              if (i === 0) {
                var a = 0;
              } else {
                var o = r.suspendedLanes;
                var s = r.pingedLanes;
                a = (1 << 31 - dt(e | 42) + 1) - 1;
                a &= i & ~(o & ~s);
                a = a & 201326741 ? a & 201326741 | 1 : a ? a | 2 : 0;
              }
              if (a !== 0) {
                n = true;
                Mf(r, a);
              }
            } else {
              a = q;
              a = yt(r, r === G ? a : 0, r.cancelPendingCommit !== null || r.timeoutHandle !== -1);
              if (!!(a & 3) && !bt(r, a)) {
                n = true;
                Mf(r, a);
              }
            }
          }
          r = r.next;
        }
      } while (n);
      wf = false;
    }
  }
  function Of() {
    kf();
  }
  function kf() {
    Cf = Sf = false;
    var e = 0;
    if (Tf !== 0 && hp()) {
      e = Tf;
    }
    var t = $e();
    for (var n = null, r = bf; r !== null;) {
      var i = r.next;
      var a = Af(r, t);
      if (a === 0) {
        r.next = null;
        if (n === null) {
          bf = i;
        } else {
          n.next = i;
        }
        if (i === null) {
          xf = n;
        }
      } else {
        n = r;
        if (e !== 0 || a & 3) {
          Cf = true;
        }
      }
      r = i;
    }
    if (X === 0 || X === 5) {
      Df(e, false);
    }
    if (Tf !== 0) {
      Tf = 0;
    }
  }
  function Af(e, t) {
    var n = e.suspendedLanes;
    var r = e.pingedLanes;
    var i = e.expirationTimes;
    for (var a = e.pendingLanes & -62914561; a > 0;) {
      var o = 31 - dt(a);
      var s = 1 << o;
      var c = i[o];
      if (c === -1) {
        if ((s & n) === 0 || (s & r) !== 0) {
          i[o] = St(s, t);
        }
      } else if (c <= t) {
        e.expiredLanes |= s;
      }
      a &= ~s;
    }
    t = G;
    n = q;
    n = yt(e, e === t ? n : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1);
    r = e.callbackNode;
    if (n === 0 || e === t && (J === 2 || J === 9) || e.cancelPendingCommit !== null) {
      if (r !== null && r !== null) {
        Xe(r);
      }
      e.callbackNode = null;
      return e.callbackPriority = 0;
    }
    if (!(n & 3) || bt(e, n)) {
      t = n & -n;
      if (t === e.callbackPriority) {
        return t;
      }
      if (r !== null) {
        Xe(r);
      }
      switch (jt(n)) {
        case 2:
        case 8:
          n = nt;
          break;
        case 32:
          n = rt;
          break;
        case 268435456:
          n = at;
          break;
        default:
          n = rt;
      }
      r = jf.bind(null, e);
      n = Ye(n, r);
      e.callbackPriority = t;
      e.callbackNode = n;
      return t;
    }
    if (r !== null && r !== null) {
      Xe(r);
    }
    e.callbackPriority = 2;
    e.callbackNode = null;
    return 2;
  }
  function jf(e, t) {
    if (X !== 0 && X !== 5) {
      e.callbackNode = null;
      e.callbackPriority = 0;
      return null;
    }
    var n = e.callbackNode;
    if (df() && e.callbackNode !== n) {
      return null;
    }
    var r = q;
    r = yt(e, e === G ? r : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1);
    if (r === 0) {
      return null;
    } else {
      Fd(e, r, t);
      Af(e, $e());
      if (e.callbackNode != null && e.callbackNode === n) {
        return jf.bind(null, e);
      } else {
        return null;
      }
    }
  }
  function Mf(e, t) {
    if (df()) {
      return null;
    }
    Fd(e, t, true);
  }
  function Nf() {
    bp(function () {
      if (W & 6) {
        Ye(tt, Of);
      } else {
        kf();
      }
    });
  }
  function Pf() {
    if (Tf === 0) {
      var e = Ja;
      if (e === 0) {
        e = ht;
        ht <<= 1;
        if (!(ht & 261888)) {
          ht = 256;
        }
      }
      Tf = e;
    }
    return Tf;
  }
  function Ff(e) {
    if (e == null || typeof e == `symbol` || typeof e == `boolean`) {
      return null;
    } else if (typeof e == `function`) {
      return e;
    } else {
      return kn(e);
    }
  }
  function If(e, t, n, r, i) {
    if (t === `submit` && n && n.stateNode === i) {
      var a = Ff((i[It] || null).action);
      var o = r.submitter;
      if (o) {
        t = (t = o[It] || null) ? Ff(t.formAction) : o.getAttribute(`formAction`);
        if (t !== null) {
          a = t;
          o = null;
        }
      }
      var s = new Zn(`action`, `action`, null, r, i);
      e.push({
        event: s,
        listeners: [{
          instance: null,
          listener: function () {
            if (r.defaultPrevented) {
              if (Tf !== 0) {
                var e = new FormData(i, o);
                sc(n, {
                  pending: true,
                  data: e,
                  method: i.method,
                  action: a
                }, null, e);
              }
            } else if (typeof a == `function`) {
              s.preventDefault();
              e = new FormData(i, o);
              sc(n, {
                pending: true,
                data: e,
                method: i.method,
                action: a
              }, a, e);
            }
          },
          currentTarget: i
        }]
      });
    }
  }
  for (var Lf = 0; Lf < Ei.length; Lf++) {
    var Rf = Ei[Lf];
    Di(Rf.toLowerCase(), `on${Rf[0].toUpperCase() + Rf.slice(1)}`);
  }
  Di(vi, `onAnimationEnd`);
  Di(yi, `onAnimationIteration`);
  Di(bi, `onAnimationStart`);
  Di(`dblclick`, `onDoubleClick`);
  Di(`focusin`, `onFocus`);
  Di(`focusout`, `onBlur`);
  Di(xi, `onTransitionRun`);
  Di(Si, `onTransitionStart`);
  Di(Ci, `onTransitionCancel`);
  Di(wi, `onTransitionEnd`);
  $t(`onMouseEnter`, [`mouseout`, `mouseover`]);
  $t(`onMouseLeave`, [`mouseout`, `mouseover`]);
  $t(`onPointerEnter`, [`pointerout`, `pointerover`]);
  $t(`onPointerLeave`, [`pointerout`, `pointerover`]);
  Qt(`onChange`, `change click focusin focusout input keydown keyup selectionchange`.split(` `));
  Qt(`onSelect`, `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `));
  Qt(`onBeforeInput`, [`compositionend`, `keypress`, `textInput`, `paste`]);
  Qt(`onCompositionEnd`, `compositionend focusout keydown keypress keyup mousedown`.split(` `));
  Qt(`onCompositionStart`, `compositionstart focusout keydown keypress keyup mousedown`.split(` `));
  Qt(`onCompositionUpdate`, `compositionupdate focusout keydown keypress keyup mousedown`.split(` `));
  var zf = `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `);
  var Bf = new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(zf));
  function Vf(e, t) {
    t = !!(t & 4);
    for (var n = 0; n < e.length; n++) {
      var r = e[n];
      var i = r.event;
      r = r.listeners;
      a: {
        var a = undefined;
        if (t) {
          for (var o = r.length - 1; o >= 0; o--) {
            var s = r[o];
            var c = s.instance;
            var l = s.currentTarget;
            s = s.listener;
            if (c !== a && i.isPropagationStopped()) {
              break a;
            }
            a = s;
            i.currentTarget = l;
            try {
              a(i);
            } catch (e) {
              Mi(e);
            }
            i.currentTarget = null;
            a = c;
          }
        } else {
          for (o = 0; o < r.length; o++) {
            s = r[o];
            c = s.instance;
            l = s.currentTarget;
            s = s.listener;
            if (c !== a && i.isPropagationStopped()) {
              break a;
            }
            a = s;
            i.currentTarget = l;
            try {
              a(i);
            } catch (e) {
              Mi(e);
            }
            i.currentTarget = null;
            a = c;
          }
        }
      }
    }
  }
  function Q(e, t) {
    var n = t[Rt];
    if (n === undefined) {
      n = t[Rt] = new Set();
    }
    var r = `${e}__bubble`;
    if (!n.has(r)) {
      Gf(t, e, 2, false);
      n.add(r);
    }
  }
  function Hf(e, t, n) {
    var r = 0;
    if (t) {
      r |= 4;
    }
    Gf(n, e, r, t);
  }
  var Uf = `_reactListening${Math.random().toString(36).slice(2)}`;
  function Wf(e) {
    if (!e[Uf]) {
      e[Uf] = true;
      Xt.forEach(function (t) {
        if (t !== `selectionchange`) {
          if (!Bf.has(t)) {
            Hf(t, false, e);
          }
          Hf(t, true, e);
        }
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      if (t !== null && !t[Uf]) {
        t[Uf] = true;
        Hf(`selectionchange`, false, t);
      }
    }
  }
  function Gf(e, t, n, r) {
    switch (Ch(t)) {
      case 2:
        var i = _h;
        break;
      case 8:
        i = vh;
        break;
      default:
        i = yh;
    }
    n = i.bind(null, t, n, e);
    i = undefined;
    if (!!Bn && (t === `touchstart` || t === `touchmove` || t === `wheel`)) {
      i = true;
    }
    if (r) {
      if (i === undefined) {
        e.addEventListener(t, n, true);
      } else {
        e.addEventListener(t, n, {
          capture: true,
          passive: i
        });
      }
    } else if (i === undefined) {
      e.addEventListener(t, n, false);
    } else {
      e.addEventListener(t, n, {
        passive: i
      });
    }
  }
  function Kf(e, t, n, r, i) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null) {
      a: while (true) {
        if (r === null) {
          return;
        }
        var o = r.tag;
        if (o === 3 || o === 4) {
          var s = r.stateNode.containerInfo;
          if (s === i) {
            break;
          }
          if (o === 4) {
            for (o = r.return; o !== null;) {
              var c = o.tag;
              if ((c === 3 || c === 4) && o.stateNode.containerInfo === i) {
                return;
              }
              o = o.return;
            }
          }
          while (s !== null) {
            o = Gt(s);
            if (o === null) {
              return;
            }
            c = o.tag;
            if (c === 5 || c === 6 || c === 26 || c === 27) {
              r = a = o;
              continue a;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    }
    Ln(function () {
      var r = a;
      var i = Mn(n);
      var o = [];
      a: {
        var s = Ti.get(e);
        if (s !== undefined) {
          var c = Zn;
          var u = e;
          switch (e) {
            case `keypress`:
              if (Kn(n) === 0) {
                break a;
              }
            case `keydown`:
            case `keyup`:
              c = hr;
              break;
            case `focusin`:
              u = `focus`;
              c = or;
              break;
            case `focusout`:
              u = `blur`;
              c = or;
              break;
            case `beforeblur`:
            case `afterblur`:
              c = or;
              break;
            case `click`:
              if (n.button === 2) {
                break a;
              }
            case `auxclick`:
            case `dblclick`:
            case `mousedown`:
            case `mousemove`:
            case `mouseup`:
            case `mouseout`:
            case `mouseover`:
            case `contextmenu`:
              c = ir;
              break;
            case `drag`:
            case `dragend`:
            case `dragenter`:
            case `dragexit`:
            case `dragleave`:
            case `dragover`:
            case `dragstart`:
            case `drop`:
              c = ar;
              break;
            case `touchcancel`:
            case `touchend`:
            case `touchmove`:
            case `touchstart`:
              c = vr;
              break;
            case vi:
            case yi:
            case bi:
              c = sr;
              break;
            case wi:
              c = yr;
              break;
            case `scroll`:
            case `scrollend`:
              c = $n;
              break;
            case `wheel`:
              c = br;
              break;
            case `copy`:
            case `cut`:
            case `paste`:
              c = cr;
              break;
            case `gotpointercapture`:
            case `lostpointercapture`:
            case `pointercancel`:
            case `pointerdown`:
            case `pointermove`:
            case `pointerout`:
            case `pointerover`:
            case `pointerup`:
              c = gr;
              break;
            case `submit`:
              c = _r;
              break;
            case `toggle`:
            case `beforetoggle`:
              c = xr;
          }
          var d = !!(t & 4);
          var f = !d && (e === `scroll` || e === `scrollend`);
          var p = d ? s === null ? null : `${s}Capture` : s;
          d = [];
          for (var m = r, h; m !== null;) {
            var g = m;
            h = g.stateNode;
            g = g.tag;
            if ((g === 5 || g === 26 || g === 27) && h !== null && p !== null) {
              g = Rn(m, p);
              if (g != null) {
                d.push(qf(m, g, h));
              }
            }
            if (f) {
              break;
            }
            m = m.return;
          }
          if (d.length > 0) {
            s = new c(s, u, null, n, i);
            o.push({
              event: s,
              listeners: d
            });
          }
        }
      }
      if (!(t & 7)) {
        a: {
          c = e === `mouseover` || e === `pointerover`;
          s = e === `mouseout` || e === `pointerout`;
          if (c && n !== jn && (u = n.relatedTarget || n.fromElement) && (Gt(u) || u[Lt])) {
            break a;
          }
          if (s || c) {
            u = i.window === i ? i : (c = i.ownerDocument) ? c.defaultView || c.parentWindow : window;
            if (s) {
              c = n.relatedTarget || n.toElement;
              s = r;
              c = c ? Gt(c) : null;
              if (c !== null && (f = l(c), d = c.tag, c !== f || d !== 5 && d !== 27 && d !== 6)) {
                c = null;
              }
            } else {
              s = null;
              c = r;
            }
            if (s !== c) {
              d = ir;
              g = `onMouseLeave`;
              p = `onMouseEnter`;
              m = `mouse`;
              if (e === `pointerout` || e === `pointerover`) {
                d = gr;
                g = `onPointerLeave`;
                p = `onPointerEnter`;
                m = `pointer`;
              }
              f = s == null ? u : qt(s);
              h = c == null ? u : qt(c);
              u = new d(g, `${m}leave`, s, n, i);
              u.target = f;
              u.relatedTarget = h;
              g = null;
              if (Gt(i) === r) {
                d = new d(p, `${m}enter`, c, n, i);
                d.target = h;
                d.relatedTarget = f;
                g = d;
              }
              f = g;
              d = s && c ? ie(s, c, Yf) : null;
              if (s !== null) {
                Xf(o, u, s, d, false);
              }
              if (c !== null && f !== null) {
                Xf(o, f, c, d, true);
              }
            }
          }
        }
        a: {
          s = r ? qt(r) : window;
          c = s.nodeName && s.nodeName.toLowerCase();
          if (c === `select` || c === `input` && s.type === `file`) {
            var _ = Vr;
          } else if (Fr(s)) {
            if (Hr) {
              _ = Zr;
            } else {
              _ = Yr;
              var v = Jr;
            }
          } else {
            c = s.nodeName;
            if (!c || c.toLowerCase() !== `input` || s.type !== `checkbox` && s.type !== `radio`) {
              if (r && En(r.elementType)) {
                _ = Vr;
              }
            } else {
              _ = Xr;
            }
          }
          if (_ &&= _(e, r)) {
            Ir(o, _, n, i);
            break a;
          }
          if (v) {
            v(e, s, r);
          }
        }
        v = r ? qt(r) : window;
        switch (e) {
          case `focusin`:
            if (Fr(v) || v.contentEditable === `true`) {
              ci = v;
              li = r;
              ui = null;
            }
            break;
          case `focusout`:
            ui = li = ci = null;
            break;
          case `mousedown`:
            di = true;
            break;
          case `contextmenu`:
          case `mouseup`:
          case `dragend`:
            di = false;
            fi(o, n, i);
            break;
          case `selectionchange`:
            if (si) {
              break;
            }
          case `keydown`:
          case `keyup`:
            fi(o, n, i);
        }
        var y;
        if (Cr) {
          b: {
            switch (e) {
              case `compositionstart`:
                var b = `onCompositionStart`;
                break b;
              case `compositionend`:
                b = `onCompositionEnd`;
                break b;
              case `compositionupdate`:
                b = `onCompositionUpdate`;
                break b;
            }
            b = undefined;
          }
        } else if (jr) {
          if (kr(e, n)) {
            b = `onCompositionEnd`;
          }
        } else if (e === `keydown` && n.keyCode === 229) {
          b = `onCompositionStart`;
        }
        if (b) {
          if (Er && n.locale !== `ko`) {
            if (jr || b !== `onCompositionStart`) {
              if (b === `onCompositionEnd` && jr) {
                y = Gn();
              }
            } else {
              Hn = i;
              Un = `value` in Hn ? Hn.value : Hn.textContent;
              jr = true;
            }
          }
          v = Jf(r, b);
          if (v.length > 0) {
            b = new lr(b, e, null, n, i);
            o.push({
              event: b,
              listeners: v
            });
            if (y) {
              b.data = y;
            } else {
              y = Ar(n);
              if (y !== null) {
                b.data = y;
              }
            }
          }
        }
        if (y = Tr ? Mr(e, n) : Nr(e, n)) {
          b = Jf(r, `onBeforeInput`);
          if (b.length > 0) {
            v = new lr(`onBeforeInput`, `beforeinput`, null, n, i);
            o.push({
              event: v,
              listeners: b
            });
            v.data = y;
          }
        }
        If(o, e, r, n, i);
      }
      Vf(o, t);
    });
  }
  function qf(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Jf(e, t) {
    var n = `${t}Capture`;
    var r = [];
    for (; e !== null;) {
      var i = e;
      var a = i.stateNode;
      i = i.tag;
      if ((i === 5 || i === 26 || i === 27) && a !== null) {
        i = Rn(e, n);
        if (i != null) {
          r.unshift(qf(e, i, a));
        }
        i = Rn(e, t);
        if (i != null) {
          r.push(qf(e, i, a));
        }
      }
      if (e.tag === 3) {
        return r;
      }
      e = e.return;
    }
    return [];
  }
  function Yf(e) {
    if (e === null) {
      return null;
    }
    do {
      e = e.return;
    } while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Xf(e, t, n, r, i) {
    var a = t._reactName;
    var o = [];
    for (; n !== null && n !== r;) {
      var s = n;
      var c = s.alternate;
      var l = s.stateNode;
      s = s.tag;
      if (c !== null && c === r) {
        break;
      }
      if ((s === 5 || s === 26 || s === 27) && l !== null) {
        c = l;
        if (i) {
          l = Rn(n, a);
          if (l != null) {
            o.unshift(qf(n, l, c));
          }
        } else if (!i) {
          l = Rn(n, a);
          if (l != null) {
            o.push(qf(n, l, c));
          }
        }
      }
      n = n.return;
    }
    if (o.length !== 0) {
      e.push({
        event: t,
        listeners: o
      });
    }
  }
  var Zf = /\r\n?/g;
  var Qf = /\u0000|\uFFFD/g;
  function $f(e) {
    return (typeof e == `string` ? e : `${e}`).replace(Zf, `
`).replace(Qf, ``);
  }
  function ep(e, t) {
    t = $f(t);
    return $f(e) === t;
  }
  function $(e, t, n, r, i, o) {
    switch (n) {
      case `children`:
        if (typeof r == `string`) {
          if (t !== `body` && (t !== `textarea` || r !== ``)) {
            Sn(e, r);
          }
        } else if (typeof r == `number` || typeof r == `bigint`) {
          if (t !== `body`) {
            Sn(e, `${r}`);
          }
        } else {
          return;
        }
        break;
      case `className`:
        sn(e, `class`, r);
        break;
      case `tabIndex`:
        sn(e, `tabindex`, r);
        break;
      case `dir`:
      case `role`:
      case `viewBox`:
      case `width`:
      case `height`:
        sn(e, n, r);
        break;
      case `style`:
        Tn(e, r, o);
        return;
      case `data`:
        if (t !== `object`) {
          sn(e, `data`, r);
          break;
        }
      case `src`:
      case `href`:
        if (r === `` && (t !== `a` || n !== `href`) || r == null || typeof r == `function` || typeof r == `symbol` || typeof r == `boolean`) {
          e.removeAttribute(n);
          break;
        }
        r = kn(r);
        e.setAttribute(n, r);
        break;
      case `action`:
      case `formAction`:
        if (typeof r == `function`) {
          e.setAttribute(n, `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);
          break;
        }
        if (typeof o == `function`) {
          if (n === `formAction`) {
            if (t !== `input`) {
              $(e, t, `name`, i.name, i, null);
            }
            $(e, t, `formEncType`, i.formEncType, i, null);
            $(e, t, `formMethod`, i.formMethod, i, null);
            $(e, t, `formTarget`, i.formTarget, i, null);
          } else {
            $(e, t, `encType`, i.encType, i, null);
            $(e, t, `method`, i.method, i, null);
            $(e, t, `target`, i.target, i, null);
          }
        }
        if (r == null || typeof r == `symbol` || typeof r == `boolean`) {
          e.removeAttribute(n);
          break;
        }
        r = kn(r);
        e.setAttribute(n, r);
        break;
      case `onClick`:
        if (r != null) {
          e.onclick = An;
        }
        return;
      case `onScroll`:
        if (r != null) {
          Q(`scroll`, e);
        }
        return;
      case `onScrollEnd`:
        if (r != null) {
          Q(`scrollend`, e);
        }
        return;
      case `dangerouslySetInnerHTML`:
        if (r != null) {
          if (typeof r != `object` || !(`__html` in r)) {
            throw Error(a(61));
          }
          n = r.__html;
          if (n != null) {
            if (i.children != null) {
              throw Error(a(60));
            }
            if (o?.__html !== n) {
              e.innerHTML = n;
            }
          }
        }
        break;
      case `multiple`:
        e.multiple = r && typeof r != `function` && typeof r != `symbol`;
        break;
      case `muted`:
        e.muted = r && typeof r != `function` && typeof r != `symbol`;
        break;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `defaultValue`:
      case `defaultChecked`:
      case `innerHTML`:
      case `ref`:
        break;
      case `autoFocus`:
        break;
      case `xlinkHref`:
        if (r == null || typeof r == `function` || typeof r == `boolean` || typeof r == `symbol`) {
          e.removeAttribute(`xlink:href`);
          break;
        }
        n = kn(r);
        e.setAttributeNS(`http://www.w3.org/1999/xlink`, `xlink:href`, n);
        break;
      case `contentEditable`:
      case `spellCheck`:
      case `draggable`:
      case `value`:
      case `autoReverse`:
      case `externalResourcesRequired`:
      case `focusable`:
      case `preserveAlpha`:
        if (r != null && typeof r != `function` && typeof r != `symbol`) {
          e.setAttribute(n, r);
        } else {
          e.removeAttribute(n);
        }
        break;
      case `inert`:
      case `allowFullScreen`:
      case `async`:
      case `autoPlay`:
      case `controls`:
      case `credentialless`:
      case `default`:
      case `defer`:
      case `disabled`:
      case `disablePictureInPicture`:
      case `disableRemotePlayback`:
      case `formNoValidate`:
      case `hidden`:
      case `loop`:
      case `noModule`:
      case `noValidate`:
      case `open`:
      case `playsInline`:
      case `readOnly`:
      case `required`:
      case `reversed`:
      case `scoped`:
      case `seamless`:
      case `itemScope`:
        if (r && typeof r != `function` && typeof r != `symbol`) {
          e.setAttribute(n, ``);
        } else {
          e.removeAttribute(n);
        }
        break;
      case `capture`:
      case `download`:
        if (r === true) {
          e.setAttribute(n, ``);
        } else if (r !== false && r != null && typeof r != `function` && typeof r != `symbol`) {
          e.setAttribute(n, r);
        } else {
          e.removeAttribute(n);
        }
        break;
      case `cols`:
      case `rows`:
      case `size`:
      case `span`:
        if (r != null && typeof r != `function` && typeof r != `symbol` && !isNaN(r) && r >= 1) {
          e.setAttribute(n, r);
        } else {
          e.removeAttribute(n);
        }
        break;
      case `rowSpan`:
      case `start`:
        if (r == null || typeof r == `function` || typeof r == `symbol` || isNaN(r)) {
          e.removeAttribute(n);
        } else {
          e.setAttribute(n, r);
        }
        break;
      case `popover`:
        Q(`beforetoggle`, e);
        Q(`toggle`, e);
        on(e, `popover`, r);
        break;
      case `xlinkActuate`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
        break;
      case `xlinkArcrole`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
        break;
      case `xlinkRole`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
        break;
      case `xlinkShow`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
        break;
      case `xlinkTitle`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
        break;
      case `xlinkType`:
        cn(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
        break;
      case `xmlBase`:
        cn(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
        break;
      case `xmlLang`:
        cn(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
        break;
      case `xmlSpace`:
        cn(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
        break;
      case `is`:
        on(e, `is`, r);
        break;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!(n.length > 2) || n[0] !== `o` && n[0] !== `O` || n[1] !== `n` && n[1] !== `N`) {
          n = Dn.get(n) || n;
          on(e, n, r);
        } else {
          return;
        }
    }
    D = true;
  }
  function tp(e, t, n, r, i, o) {
    switch (n) {
      case `style`:
        Tn(e, r, o);
        return;
      case `dangerouslySetInnerHTML`:
        if (r != null) {
          if (typeof r != `object` || !(`__html` in r)) {
            throw Error(a(61));
          }
          n = r.__html;
          if (n != null) {
            if (i.children != null) {
              throw Error(a(60));
            }
            if (o?.__html !== n) {
              e.innerHTML = n;
            }
          }
        }
        break;
      case `children`:
        if (typeof r == `string`) {
          Sn(e, r);
        } else if (typeof r == `number` || typeof r == `bigint`) {
          Sn(e, `${r}`);
        } else {
          return;
        }
        break;
      case `onScroll`:
        if (r != null) {
          Q(`scroll`, e);
        }
        return;
      case `onScrollEnd`:
        if (r != null) {
          Q(`scrollend`, e);
        }
        return;
      case `onClick`:
        if (r != null) {
          e.onclick = An;
        }
        return;
      case `suppressContentEditableWarning`:
      case `suppressHydrationWarning`:
      case `innerHTML`:
      case `ref`:
        return;
      case `innerText`:
      case `textContent`:
        return;
      default:
        if (!Zt.hasOwnProperty(n)) {
          a: {
            if (n[0] === `o` && n[1] === `n` && (i = n.endsWith(`Capture`), o = n.slice(2, i ? n.length - 7 : undefined), t = e[It] || null, t = t == null ? null : t[n], typeof t == `function` && e.removeEventListener(o, t, i), typeof r == `function`)) {
              if (typeof t != `function` && t !== null) {
                if (n in e) {
                  e[n] = null;
                } else if (e.hasAttribute(n)) {
                  e.removeAttribute(n);
                }
              }
              e.addEventListener(o, r, i);
              break a;
            }
            D = true;
            if (n in e) {
              e[n] = r;
            } else if (r === true) {
              e.setAttribute(n, ``);
            } else {
              on(e, n, r);
            }
          }
        }
        return;
    }
    D = true;
  }
  function np(e, t, n) {
    switch (t) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `img`:
        Q(`error`, e);
        Q(`load`, e);
        var r = false;
        var i = false;
        var o;
        for (o in n) {
          if (n.hasOwnProperty(o)) {
            var s = n[o];
            if (s != null) {
              switch (o) {
                case `src`:
                  r = true;
                  break;
                case `srcSet`:
                  i = true;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  throw Error(a(137, t));
                default:
                  $(e, t, o, s, n, null);
              }
            }
          }
        }
        if (i) {
          $(e, t, `srcSet`, n.srcSet, n, null);
        }
        if (r) {
          $(e, t, `src`, n.src, n, null);
        }
        return;
      case `input`:
        Q(`invalid`, e);
        var c = o = s = i = null;
        var l = null;
        var u = null;
        for (r in n) {
          if (n.hasOwnProperty(r)) {
            var d = n[r];
            if (d != null) {
              switch (r) {
                case `name`:
                  i = d;
                  break;
                case `type`:
                  s = d;
                  break;
                case `checked`:
                  l = d;
                  break;
                case `defaultChecked`:
                  u = d;
                  break;
                case `value`:
                  o = d;
                  break;
                case `defaultValue`:
                  c = d;
                  break;
                case `children`:
                case `dangerouslySetInnerHTML`:
                  if (d != null) {
                    throw Error(a(137, t));
                  }
                  break;
                default:
                  $(e, t, r, d, n, null);
              }
            }
          }
        }
        _n(e, o, c, l, u, s, i, false);
        return;
      case `select`:
        Q(`invalid`, e);
        r = s = o = null;
        for (i in n) {
          if (n.hasOwnProperty(i) && (c = n[i], c != null)) {
            switch (i) {
              case `value`:
                o = c;
                break;
              case `defaultValue`:
                s = c;
                break;
              case `multiple`:
                r = c;
              default:
                $(e, t, i, c, n, null);
            }
          }
        }
        t = o;
        n = s;
        e.multiple = !!r;
        if (t == null) {
          if (n != null) {
            yn(e, !!r, n, true);
          }
        } else {
          yn(e, !!r, t, false);
        }
        return;
      case `textarea`:
        Q(`invalid`, e);
        o = i = r = null;
        for (s in n) {
          if (n.hasOwnProperty(s) && (c = n[s], c != null)) {
            switch (s) {
              case `value`:
                r = c;
                break;
              case `defaultValue`:
                i = c;
                break;
              case `children`:
                o = c;
                break;
              case `dangerouslySetInnerHTML`:
                if (c != null) {
                  throw Error(a(91));
                }
                break;
              default:
                $(e, t, s, c, n, null);
            }
          }
        }
        xn(e, r, i, o);
        return;
      case `option`:
        for (l in n) {
          if (n.hasOwnProperty(l) && (r = n[l], r != null)) {
            switch (l) {
              case `selected`:
                e.selected = r && typeof r != `function` && typeof r != `symbol`;
                break;
              default:
                $(e, t, l, r, n, null);
            }
          }
        }
        return;
      case `dialog`:
        Q(`beforetoggle`, e);
        Q(`toggle`, e);
        Q(`cancel`, e);
        Q(`close`, e);
        break;
      case `iframe`:
      case `object`:
        Q(`load`, e);
        break;
      case `video`:
      case `audio`:
        for (r = 0; r < zf.length; r++) {
          Q(zf[r], e);
        }
        break;
      case `image`:
        Q(`error`, e);
        Q(`load`, e);
        break;
      case `details`:
        Q(`toggle`, e);
        break;
      case `embed`:
      case `source`:
      case `link`:
        Q(`error`, e);
        Q(`load`, e);
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (u in n) {
          if (n.hasOwnProperty(u) && (r = n[u], r != null)) {
            switch (u) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                throw Error(a(137, t));
              default:
                $(e, t, u, r, n, null);
            }
          }
        }
        return;
      default:
        if (En(t)) {
          for (d in n) {
            if (n.hasOwnProperty(d)) {
              r = n[d];
              if (r !== undefined) {
                tp(e, t, d, r, n, undefined);
              }
            }
          }
          return;
        }
    }
    for (c in n) {
      if (n.hasOwnProperty(c)) {
        r = n[c];
        if (r != null) {
          $(e, t, c, r, n, null);
        }
      }
    }
  }
  var rp = {};
  function ip(e, t, n, r) {
    switch (t) {
      case `div`:
      case `span`:
      case `svg`:
      case `path`:
      case `a`:
      case `g`:
      case `p`:
      case `li`:
        break;
      case `input`:
        var i = null;
        var o = null;
        var s = null;
        var c = null;
        var l = null;
        var u = null;
        var d = null;
        for (m in n) {
          var f = n[m];
          if (n.hasOwnProperty(m) && f != null) {
            switch (m) {
              case `checked`:
                break;
              case `value`:
                break;
              case `defaultValue`:
                l = f;
              default:
                if (!r.hasOwnProperty(m)) {
                  $(e, t, m, null, r, f);
                }
            }
          }
        }
        for (var p in r) {
          var m = r[p];
          f = n[p];
          if (r.hasOwnProperty(p) && (m != null || f != null)) {
            switch (p) {
              case `type`:
                if (m !== f) {
                  D = true;
                }
                o = m;
                break;
              case `name`:
                if (m !== f) {
                  D = true;
                }
                i = m;
                break;
              case `checked`:
                if (m !== f) {
                  D = true;
                }
                u = m;
                break;
              case `defaultChecked`:
                if (m !== f) {
                  D = true;
                }
                d = m;
                break;
              case `value`:
                if (m !== f) {
                  D = true;
                }
                s = m;
                break;
              case `defaultValue`:
                if (m !== f) {
                  D = true;
                }
                c = m;
                break;
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (m != null) {
                  throw Error(a(137, t));
                }
                break;
              default:
                if (m !== f) {
                  $(e, t, p, m, r, f);
                }
            }
          }
        }
        gn(e, s, c, l, u, d, o, i);
        return;
      case `select`:
        m = s = c = p = null;
        for (o in n) {
          l = n[o];
          if (n.hasOwnProperty(o) && l != null) {
            switch (o) {
              case `value`:
                break;
              case `multiple`:
                m = l;
              default:
                if (!r.hasOwnProperty(o)) {
                  $(e, t, o, null, r, l);
                }
            }
          }
        }
        for (i in r) {
          o = r[i];
          l = n[i];
          if (r.hasOwnProperty(i) && (o != null || l != null)) {
            switch (i) {
              case `value`:
                if (o !== l) {
                  D = true;
                }
                p = o;
                break;
              case `defaultValue`:
                if (o !== l) {
                  D = true;
                }
                c = o;
                break;
              case `multiple`:
                if (o !== l) {
                  D = true;
                }
                s = o;
              default:
                if (o !== l) {
                  $(e, t, i, o, r, l);
                }
            }
          }
        }
        t = c;
        n = s;
        r = m;
        if (p == null) {
          if (!!r != !!n) {
            if (t == null) {
              yn(e, !!n, n ? [] : ``, false);
            } else {
              yn(e, !!n, t, true);
            }
          }
        } else {
          yn(e, !!n, p, false);
        }
        return;
      case `textarea`:
        m = p = null;
        for (c in n) {
          i = n[c];
          if (n.hasOwnProperty(c) && i != null && !r.hasOwnProperty(c)) {
            switch (c) {
              case `value`:
                break;
              case `children`:
                break;
              default:
                $(e, t, c, null, r, i);
            }
          }
        }
        for (s in r) {
          i = r[s];
          o = n[s];
          if (r.hasOwnProperty(s) && (i != null || o != null)) {
            switch (s) {
              case `value`:
                if (i !== o) {
                  D = true;
                }
                p = i;
                break;
              case `defaultValue`:
                if (i !== o) {
                  D = true;
                }
                m = i;
                break;
              case `children`:
                break;
              case `dangerouslySetInnerHTML`:
                if (i != null) {
                  throw Error(a(91));
                }
                break;
              default:
                if (i !== o) {
                  $(e, t, s, i, r, o);
                }
            }
          }
        }
        bn(e, p, m);
        return;
      case `option`:
        for (var h in n) {
          p = n[h];
          if (n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h)) {
            switch (h) {
              case `selected`:
                e.selected = false;
                break;
              default:
                $(e, t, h, null, r, p);
            }
          }
        }
        for (l in r) {
          p = r[l];
          m = n[l];
          if (r.hasOwnProperty(l) && p !== m && (p != null || m != null)) {
            switch (l) {
              case `selected`:
                if (p !== m) {
                  D = true;
                }
                e.selected = p && typeof p != `function` && typeof p != `symbol`;
                break;
              default:
                $(e, t, l, p, r, m);
            }
          }
        }
        return;
      case `img`:
      case `link`:
      case `area`:
      case `base`:
      case `br`:
      case `col`:
      case `embed`:
      case `hr`:
      case `keygen`:
      case `meta`:
      case `param`:
      case `source`:
      case `track`:
      case `wbr`:
      case `menuitem`:
        for (var g in n) {
          p = n[g];
          if (n.hasOwnProperty(g) && p != null && !r.hasOwnProperty(g)) {
            $(e, t, g, null, r, p);
          }
        }
        for (u in r) {
          p = r[u];
          m = n[u];
          if (r.hasOwnProperty(u) && p !== m && (p != null || m != null)) {
            switch (u) {
              case `children`:
              case `dangerouslySetInnerHTML`:
                if (p != null) {
                  throw Error(a(137, t));
                }
                break;
              default:
                $(e, t, u, p, r, m);
            }
          }
        }
        return;
      default:
        if (En(t)) {
          for (var _ in n) {
            p = n[_];
            if (n.hasOwnProperty(_) && p !== undefined && !r.hasOwnProperty(_)) {
              tp(e, t, _, undefined, r, p);
            }
          }
          for (d in r) {
            p = r[d];
            m = n[d];
            if (!!r.hasOwnProperty(d) && p !== m && (p !== undefined || m !== undefined)) {
              tp(e, t, d, p, r, m);
            }
          }
          return;
        }
    }
    for (var v in n) {
      p = n[v];
      if (n.hasOwnProperty(v) && p != null && !r.hasOwnProperty(v)) {
        $(e, t, v, null, r, p);
      }
    }
    for (f in r) {
      p = r[f];
      m = n[f];
      if (!!r.hasOwnProperty(f) && p !== m && (p != null || m != null)) {
        $(e, t, f, p, r, m);
      }
    }
  }
  function ap(e) {
    switch (e) {
      case `css`:
      case `script`:
      case `font`:
      case `img`:
      case `image`:
      case `input`:
      case `link`:
        return true;
      default:
        return false;
    }
  }
  function op() {
    if (typeof performance.getEntriesByType == `function`) {
      var e = 0;
      var t = 0;
      for (var n = performance.getEntriesByType(`resource`), r = 0; r < n.length; r++) {
        var i = n[r];
        var a = i.transferSize;
        var o = i.initiatorType;
        var s = i.duration;
        if (a && s && ap(o)) {
          o = 0;
          s = i.responseEnd;
          r += 1;
          for (; r < n.length; r++) {
            var c = n[r];
            var l = c.startTime;
            if (l > s) {
              break;
            }
            var u = c.transferSize;
            var d = c.initiatorType;
            if (u && ap(d)) {
              c = c.responseEnd;
              o += u * (c < s ? 1 : (s - l) / (c - l));
            }
          }
          --r;
          t += (a + o) * 8 / (i.duration / 1000);
          e++;
          if (e > 10) {
            break;
          }
        }
      }
      if (e > 0) {
        return t / e / 1000000;
      }
    }
    if (navigator.connection && (e = navigator.connection.downlink, typeof e == `number`)) {
      return e;
    } else {
      return 5;
    }
  }
  var sp = null;
  var cp = null;
  function lp(e) {
    if (e.nodeType === 9) {
      return e;
    } else {
      return e.ownerDocument;
    }
  }
  function up(e) {
    switch (e) {
      case `http://www.w3.org/2000/svg`:
        return 1;
      case `http://www.w3.org/1998/Math/MathML`:
        return 2;
      default:
        return 0;
    }
  }
  function dp(e, t) {
    if (e === 0) {
      switch (t) {
        case `svg`:
          return 1;
        case `math`:
          return 2;
        default:
          return 0;
      }
    }
    if (e === 1 && t === `foreignObject`) {
      return 0;
    } else {
      return e;
    }
  }
  function fp(e, t, n, r) {
    n = lp(n).createElement(e);
    n[Ft] = r;
    n[It] = t;
    np(n, e, t);
    E(n);
    return n;
  }
  function pp(e, t) {
    return e === `textarea` || e === `noscript` || typeof t.children == `string` || typeof t.children == `number` || typeof t.children == `bigint` || typeof t.dangerouslySetInnerHTML == `object` && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var mp = null;
  function hp() {
    var e = window.event;
    if (e && e.type === `popstate`) {
      return e !== mp && (mp = e, true);
    } else {
      mp = null;
      return false;
    }
  }
  var gp = typeof setTimeout == `function` ? setTimeout : undefined;
  var _p = typeof clearTimeout == `function` ? clearTimeout : undefined;
  var vp = typeof Promise == `function` ? Promise : undefined;
  var yp = typeof requestAnimationFrame == `function` ? requestAnimationFrame : gp;
  var bp = typeof queueMicrotask == `function` ? queueMicrotask : vp === undefined ? gp : function (e) {
    return vp.resolve(null).then(e).catch(xp);
  };
  function xp(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Sp(e) {
    return e === `head`;
  }
  function Cp(e, t) {
    var n = t;
    var r = 0;
    do {
      var i = n.nextSibling;
      e.removeChild(n);
      if (i && i.nodeType === 8) {
        n = i.data;
        if (n === `/$` || n === `/&`) {
          if (r === 0) {
            e.removeChild(i);
            Hh(t);
            return;
          }
          r--;
        } else if (n === `$` || n === `$?` || n === `$~` || n === `$!` || n === `&`) {
          r++;
        } else if (n === `html`) {
          _m(e.ownerDocument.documentElement);
        } else if (n === `head`) {
          n = e.ownerDocument.head;
          _m(n);
          for (var a = n.firstChild; a;) {
            var o = a.nextSibling;
            var s = a.nodeName;
            if (!a[Ht] && s !== `SCRIPT` && s !== `STYLE` && (s !== `LINK` || a.rel.toLowerCase() !== `stylesheet`)) {
              n.removeChild(a);
            }
            a = o;
          }
        } else if (n === `body`) {
          _m(e.ownerDocument.body);
        }
      }
      n = i;
    } while (n);
    Hh(t);
  }
  function wp(e, t) {
    var n = e;
    e = 0;
    do {
      var r = n.nextSibling;
      if (n.nodeType === 1) {
        if (t) {
          n._stashedDisplay = n.style.display;
          n.style.display = `none`;
        } else {
          n.style.display = n._stashedDisplay || ``;
          if (n.getAttribute(`style`) === ``) {
            n.removeAttribute(`style`);
          }
        }
      } else if (n.nodeType === 3) {
        if (t) {
          n._stashedText = n.nodeValue;
          n.nodeValue = ``;
        } else {
          n.nodeValue = n._stashedText || ``;
        }
      }
      if (r && r.nodeType === 8) {
        n = r.data;
        if (n === `/$`) {
          if (e === 0) {
            break;
          }
          e--;
        } else if (n === `$` || n === `$?` || n === `$~` || n === `$!`) {
          e++;
        }
      }
      n = r;
    } while (n);
  }
  function Tp(e, t, n) {
    t = CSS.escape(t) === t ? t : `r-${btoa(t).replace(/=/g, ``)}`;
    e.style.viewTransitionName = t;
    if (n != null) {
      e.style.viewTransitionClass = n;
    }
    n = getComputedStyle(e);
    if (n.display === `inline`) {
      t = e.getClientRects();
      if (t.length === 1) {
        var r = 1;
      } else {
        for (var i = r = 0; i < t.length; i++) {
          var a = t[i];
          if (a.width > 0 && a.height > 0) {
            r++;
          }
        }
      }
      if (r === 1) {
        e = e.style;
        e.display = t.length === 1 ? `inline-block` : `block`;
        e.marginTop = `-${n.paddingTop}`;
        e.marginBottom = `-${n.paddingBottom}`;
      }
    }
  }
  function Ep(e, t) {
    e = e.style;
    t = t.style;
    var n = t == null ? null : t.hasOwnProperty(`viewTransitionName`) ? t.viewTransitionName : t.hasOwnProperty(`view-transition-name`) ? t[`view-transition-name`] : null;
    e.viewTransitionName = n == null || typeof n == `boolean` ? `` : `${n}`.trim();
    n = t == null ? null : t.hasOwnProperty(`viewTransitionClass`) ? t.viewTransitionClass : t.hasOwnProperty(`view-transition-class`) ? t[`view-transition-class`] : null;
    e.viewTransitionClass = n == null || typeof n == `boolean` ? `` : `${n}`.trim();
    if (e.display === `inline-block`) {
      if (t == null) {
        e.display = e.margin = ``;
      } else {
        n = t.display;
        e.display = n == null || typeof n == `boolean` ? `` : n;
        n = t.margin;
        if (n == null) {
          n = t.hasOwnProperty(`marginTop`) ? t.marginTop : t[`margin-top`];
          e.marginTop = n == null || typeof n == `boolean` ? `` : n;
          t = t.hasOwnProperty(`marginBottom`) ? t.marginBottom : t[`margin-bottom`];
          e.marginBottom = t == null || typeof t == `boolean` ? `` : t;
        } else {
          e.margin = n;
        }
      }
    }
  }
  function Dp(e, t, n) {
    n = n.ownerDocument.defaultView;
    return {
      rect: e,
      abs: t.position === `absolute` || t.position === `fixed`,
      clip: t.clipPath !== `none` || t.overflow !== `visible` || t.filter !== `none` || t.mask !== `none` || t.mask !== `none` || t.borderRadius !== `0px`,
      view: e.bottom >= 0 && e.right >= 0 && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function Op(e) {
    return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
  }
  function kp(e) {
    var t = e.getBoundingClientRect();
    t = new DOMRect(t.x + 20000, t.y + 20000, t.width, t.height);
    var n = getComputedStyle(e);
    return Dp(t, n, e);
  }
  function Ap(e) {
    return e.documentElement.clientHeight;
  }
  function jp(e) {
    this.addEventListener(`load`, e);
    this.addEventListener(`error`, e);
  }
  function Mp(e, t, n, r, i, a, o, s, c) {
    var l = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var u = l.startViewTransition({
        update: function () {
          var t = l.defaultView;
          var n = t.navigation && t.navigation.transition;
          var o = l.fonts.status;
          r();
          var s = [];
          if (o === `loaded`) {
            Ap(l);
            if (l.fonts.status === `loading`) {
              s.push(l.fonts.ready);
            }
          }
          o = s.length;
          if (e !== null) {
            for (var c = e.suspenseyImages, u = 0, d = 0; d < c.length; d++) {
              var f = c[d];
              if (!f.complete) {
                var p = f.getBoundingClientRect();
                if (p.bottom > 0 && p.right > 0 && p.top < t.innerHeight && p.left < t.innerWidth) {
                  u += Xm(f);
                  if (u > $m) {
                    s.length = o;
                    break;
                  }
                  f = new Promise(jp.bind(f));
                  s.push(f);
                }
              }
            }
          }
          if (s.length > 0) {
            t = Promise.race([Promise.all(s), new Promise(function (e) {
              return setTimeout(e, 500);
            })]).then(i, i);
            return (n ? Promise.allSettled([n.finished, t]) : t).then(a, a);
          }
          i();
          if (n) {
            return n.finished.then(a, a);
          }
          a();
        },
        types: n
      });
      l.__reactViewTransition = u;
      var d = [];
      u.ready.then(function () {
        for (var e = l.documentElement.getAnimations({
            subtree: true
          }), t = 0; t < e.length; t++) {
          var n = e[t];
          var r = n.effect;
          var i = r.pseudoElement;
          if (i != null && i.startsWith(`::view-transition`)) {
            d.push(n);
            n = r.getKeyframes();
            var a = i = undefined;
            var s = true;
            for (var c = 0; c < n.length; c++) {
              var u = n[c];
              var f = u.width;
              if (i === undefined) {
                i = f;
              } else if (i !== f) {
                s = false;
                break;
              }
              f = u.height;
              if (a === undefined) {
                a = f;
              } else if (a !== f) {
                s = false;
                break;
              }
              delete u.width;
              delete u.height;
              if (u.transform === `none`) {
                delete u.transform;
              }
            }
            if (s && i !== undefined && a !== undefined && (r.setKeyframes(n), s = getComputedStyle(r.target, r.pseudoElement), s.width !== i || s.height !== a)) {
              s = n[0];
              s.width = i;
              s.height = a;
              s = n[n.length - 1];
              s.width = i;
              s.height = a;
              r.setKeyframes(n);
            }
          }
        }
        o();
      }, function (e) {
        if (l.__reactViewTransition === u) {
          l.__reactViewTransition = null;
        }
        try {
          if (typeof e == `object` && e) {
            switch (e.name) {
              case `InvalidStateError`:
                if (e.message === `View transition was skipped because document visibility state is hidden.` || e.message === `Skipping view transition because document visibility state has become hidden.` || e.message === `Skipping view transition because viewport size changed.` || e.message === `Transition was aborted because of invalid state`) {
                  e = null;
                }
            }
          }
          if (e !== null) {
            c(e);
          }
        } finally {
          r();
          i();
          o();
        }
      });
      u.finished.finally(function () {
        for (var e = 0; e < d.length; e++) {
          d[e].cancel();
        }
        if (l.__reactViewTransition === u) {
          l.__reactViewTransition = null;
        }
        s();
      });
      return u;
    } catch {
      r();
      i();
      o();
      return null;
    }
  }
  function Np(e, t) {
    this._scope = document.documentElement;
    this._selector = `::view-transition-${e}(${t})`;
  }
  Np.prototype.animate = function (e, t) {
    t = typeof t == `number` ? {
      duration: t
    } : S({}, t);
    t.pseudoElement = this._selector;
    return this._scope.animate(e, t);
  };
  Np.prototype.getAnimations = function () {
    var e = this._scope;
    var t = this._selector;
    for (var n = e.getAnimations({
        subtree: true
      }), r = [], i = 0; i < n.length; i++) {
      var a = n[i].effect;
      if (a !== null && a.target === e && a.pseudoElement === t) {
        r.push(n[i]);
      }
    }
    return r;
  };
  Np.prototype.getComputedStyle = function () {
    return getComputedStyle(this._scope, this._selector);
  };
  function Pp(e) {
    return {
      name: e,
      group: new Np(`group`, e),
      imagePair: new Np(`image-pair`, e),
      old: new Np(`old`, e),
      new: new Np(`new`, e)
    };
  }
  function Fp(e) {
    this._fragmentFiber = e;
    this._observers = this._eventListeners = null;
  }
  Fp.prototype.addEventListener = function (e, t, n) {
    var r = null;
    var i = null;
    if (n == null || typeof n == `boolean` || !(r = n.signal || null, r !== null && r.aborted)) {
      if (this._eventListeners === null) {
        this._eventListeners = [];
      }
      var a = this._eventListeners;
      if (Bp(a, e, t, n) === -1) {
        var o = this;
        var s = t;
        if (n != null && typeof n != `boolean` && n.once === true) {
          s = function (r) {
            o.removeEventListener(e, t, n);
            if (typeof t == `function`) {
              t.call(this, r);
            } else {
              t.handleEvent(r);
            }
          };
        }
        if (r !== null) {
          i = o.removeEventListener.bind(o, e, t, n);
          r.addEventListener(`abort`, i, {
            once: true
          });
          i = r.removeEventListener.bind(r, `abort`, i);
        }
        r = Rp(n);
        a.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: s,
          cleanup: i
        });
        h(this._fragmentFiber.child, false, Ip, e, s, r);
      }
      this._eventListeners = a;
    }
  };
  function Ip(e, t, n, r) {
    b(e).addEventListener(t, n, r);
    return false;
  }
  Fp.prototype.removeEventListener = function (e, t, n) {
    var r = this._eventListeners;
    if (r !== null && (t = Bp(r, e, t, n), t !== -1)) {
      var i = r[t];
      n = i.attachedListener;
      var a = i.cleanup;
      i = Rp(i.optionsOrUseCapture);
      h(this._fragmentFiber.child, false, Lp, e, n, i);
      r.splice(t, 1);
      if (a !== null) {
        a();
      }
    }
  };
  function Lp(e, t, n, r) {
    b(e).removeEventListener(t, n, r);
    return false;
  }
  function Rp(e) {
    if (e != null && typeof e != `boolean` && (e.once === true || e.signal instanceof AbortSignal)) {
      return {
        capture: e.capture,
        passive: e.passive
      };
    } else {
      return e;
    }
  }
  function zp(e) {
    if (e == null) {
      return `c=0`;
    } else if (typeof e == `boolean`) {
      return `c=${e ? `1` : `0`}`;
    } else {
      return `c=${e.capture ? `1` : `0`}`;
    }
  }
  function Bp(e, t, n, r) {
    if (e.length === 0) {
      return -1;
    }
    r = zp(r);
    for (var i = 0; i < e.length; i++) {
      var a = e[i];
      if (a.type === t && a.listener === n && zp(a.optionsOrUseCapture) === r) {
        return i;
      }
    }
    return -1;
  }
  Fp.prototype.dispatchEvent = function (e) {
    var t = g(this._fragmentFiber);
    if (t === null) {
      return true;
    }
    t = b(t);
    var n = this._eventListeners;
    if (n !== null && n.length > 0 || !e.bubbles) {
      var r = t.nodeType === 9 ? t.createComment(``) : document.createTextNode(``);
      if (n) {
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          r.addEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
        }
      }
      t.appendChild(r);
      e = r.dispatchEvent(e);
      if (n) {
        for (i = 0; i < n.length; i++) {
          a = n[i];
          r.removeEventListener(a.type, a.attachedListener, Rp(a.optionsOrUseCapture));
        }
      }
      t.removeChild(r);
      return e;
    }
    return t.dispatchEvent(e);
  };
  Fp.prototype.focus = function (e) {
    h(this._fragmentFiber.child, true, Vp, e, undefined, undefined);
  };
  function Vp(e, t) {
    return e.tag !== 6 && (e = b(e), pm(e, t));
  }
  Fp.prototype.focusLast = function (e) {
    var t = [];
    h(this._fragmentFiber.child, true, Hp, t, undefined, undefined);
    for (var n = t.length - 1; n >= 0 && !Vp(t[n], e); n--);
  };
  function Hp(e, t) {
    t.push(e);
    return false;
  }
  Fp.prototype.blur = function () {
    var e = g(this._fragmentFiber);
    if (e !== null) {
      e = b(e);
      e = lp(e).activeElement;
      if (e !== null) {
        h(this._fragmentFiber.child, false, Up, e, undefined, undefined);
      }
    }
  };
  function Up(e, t) {
    return e.tag !== 6 && (e = b(e), e === t || e.contains(t) ? (t.blur(), true) : false);
  }
  Fp.prototype.observeUsing = function (e) {
    if (this._observers === null) {
      this._observers = new Set();
    }
    this._observers.add(e);
    h(this._fragmentFiber.child, false, Wp, e, undefined, undefined);
  };
  function Wp(e, t) {
    if (e.tag !== 6) {
      e = b(e);
      t.observe(e);
    }
    return false;
  }
  Fp.prototype.unobserveUsing = function (e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e);
      h(this._fragmentFiber.child, false, Gp, e, undefined, undefined);
      for (var n = t = 0; n < Kp.length; n++) {
        var r = Kp[n];
        if (r.fragmentInstance === this && r.observer === e) {
          e.unobserve(r.instance);
        } else {
          Kp[t++] = r;
        }
      }
      Kp.length = t;
    }
  };
  function Gp(e, t) {
    if (e.tag !== 6) {
      e = b(e);
      t.unobserve(e);
    }
    return false;
  }
  var Kp = [];
  var qp = false;
  function Jp(e, t, n) {
    Kp.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    });
    if (!qp) {
      qp = true;
      mm(function () {
        qp = false;
        var e = Kp;
        Kp = [];
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          n.observer.unobserve(n.instance);
        }
      });
    }
  }
  Fp.prototype.getClientRects = function () {
    var e = [];
    h(this._fragmentFiber.child, false, Yp, e, undefined, undefined);
    return e;
  };
  function Yp(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e);
      t.push.apply(t, n.getClientRects());
    } else {
      e = b(e);
      t.push.apply(t, e.getClientRects());
    }
    return false;
  }
  Fp.prototype.getRootNode = function (e) {
    var t = g(this._fragmentFiber);
    if (t === null) {
      return this;
    } else {
      return b(t).getRootNode(e);
    }
  };
  Fp.prototype.compareDocumentPosition = function (e) {
    var t = g(this._fragmentFiber);
    if (t === null) {
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    }
    var n = [];
    h(this._fragmentFiber.child, false, Hp, n, undefined, undefined);
    var r = b(t);
    if (n.length === 0) {
      n = r;
      if (_(this._fragmentFiber)) {
        a: {
          for (t = this._fragmentFiber.return; t !== null;) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break a;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27) {
              break;
            }
            t = t.return;
          }
          t = null;
        }
        if (t != null) {
          n = t;
        }
      }
      t = this._fragmentFiber;
      var i = r = n.compareDocumentPosition(e);
      if (n === e) {
        i = Node.DOCUMENT_POSITION_CONTAINS;
      } else if (r & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        n = v(t)[1];
        if (n === null) {
          i = Node.DOCUMENT_POSITION_PRECEDING;
        } else {
          e = b(n).compareDocumentPosition(e);
          i = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING;
        }
      }
      return i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = b(n[0]);
    i = b(n[n.length - 1]);
    var a = _(this._fragmentFiber) ? t.parentElement : r;
    if (a == null) {
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    }
    r = a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    a = a.compareDocumentPosition(i) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var o = t.compareDocumentPosition(e);
    var s = i.compareDocumentPosition(e);
    var c = o & Node.DOCUMENT_POSITION_CONTAINED_BY || s & Node.DOCUMENT_POSITION_CONTAINED_BY;
    s = r && a && o & Node.DOCUMENT_POSITION_FOLLOWING && s & Node.DOCUMENT_POSITION_PRECEDING;
    t = r && t === e || a && i === e || c || s ? Node.DOCUMENT_POSITION_CONTAINED_BY : !r && t === e || !a && i === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : o;
    if (t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e)) {
      return t;
    } else {
      return Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
  };
  function Xp(e, t, n, r, i) {
    var a = Gt(i);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!a) {
        a: {
          while (a !== null) {
            if (a.tag === 7 && (a === t || a.alternate === t)) {
              n = true;
              break a;
            }
            a = a.return;
          }
          n = false;
        }
      }
      return n;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (a === null) {
        a = i.ownerDocument;
        return i === a || i === a.documentElement || i === a.body;
      }
      a: {
        a = t;
        t = g(t);
        while (a !== null) {
          if ((a.tag === 5 || a.tag === 3 || a.tag === 27) && (a === t || a.alternate === t)) {
            a = true;
            break a;
          }
          a = a.return;
        }
        a = false;
      }
      return a;
    }
    if (e & Node.DOCUMENT_POSITION_PRECEDING) {
      if ((t = !!a) && !(t = a === n)) {
        t = ie(n, a, x);
        if (t === null) {
          t = false;
        } else {
          h(t, true, ne, a, n);
          a = ee;
          ee = null;
          t = a !== null;
        }
      }
      return t;
    } else if (e & Node.DOCUMENT_POSITION_FOLLOWING) {
      if ((t = !!a) && !(t = a === r)) {
        t = ie(r, a, x);
        if (t === null) {
          t = false;
        } else {
          h(t, true, re, a, r);
          a = ee;
          te = ee = null;
          t = a !== null;
        }
      }
      return t;
    } else {
      return false;
    }
  }
  function Zp(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e);
    e = n.getBoundingClientRect();
    window.scrollTo(window.scrollX + e.left, t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight);
  }
  Fp.prototype.scrollIntoView = function (e) {
    if (typeof e == `object`) {
      throw Error(a(566));
    }
    var t = [];
    h(this._fragmentFiber.child, false, Hp, t, undefined, undefined);
    var n = e !== false;
    if (t.length === 0) {
      var r = v(this._fragmentFiber);
      r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1];
      if (r === null) {
        return;
      }
      if (r.tag === 6) {
        e = b(r);
        Zp(e, n);
        return;
      }
      r = b(r);
      if (r.nodeType !== 9) {
        if (r.nodeType === 11) {
          n = `host` in r ? r.host : null;
          if (n !== null) {
            n.scrollIntoView(e);
          }
          return;
        }
        r.scrollIntoView(e);
      }
    }
    for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
      var i = t[r];
      if (i.tag === 6) {
        i = b(i);
        Zp(i, n);
      } else {
        b(i).scrollIntoView(e);
      }
      r += n ? -1 : 1;
    }
  };
  function Qp(e, t) {
    e = b(e);
    $p(e, t);
    return false;
  }
  function $p(e, t) {
    e.reactFragments ??= new Set();
    e.reactFragments.add(t);
  }
  function em(e, t) {
    var n = t._eventListeners;
    if (n !== null) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        e.addEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
      }
    }
    if (e.nodeType !== 3) {
      n = t._observers;
      if (n !== null) {
        n.forEach(function (n) {
          var r = 0;
          for (var i = 0; i < Kp.length; i++) {
            var a = Kp[i];
            if (a.fragmentInstance !== t || a.observer !== n || a.instance !== e) {
              Kp[r++] = a;
            }
          }
          Kp.length = r;
          n.observe(e);
        });
      }
      $p(e, t);
    }
  }
  function tm(e, t) {
    var n = t._eventListeners;
    if (n !== null) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r];
        e.removeEventListener(i.type, i.attachedListener, Rp(i.optionsOrUseCapture));
      }
    }
    if (e.nodeType !== 3) {
      n = t._observers;
      if (n !== null) {
        n.forEach(function (n) {
          if (typeof n.rootMargin == `string`) {
            Jp(t, n, e);
          } else {
            n.unobserve(e);
          }
        });
      }
      if (e.reactFragments != null) {
        e.reactFragments.delete(t);
      }
    }
  }
  function nm(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
      var n = t;
      t = t.nextSibling;
      switch (n.nodeName) {
        case `HTML`:
        case `HEAD`:
        case `BODY`:
          nm(n);
          Wt(n);
          continue;
        case `SCRIPT`:
        case `STYLE`:
          continue;
        case `LINK`:
          if (n.rel.toLowerCase() === `stylesheet`) {
            continue;
          }
      }
      e.removeChild(n);
    }
  }
  function rm(e, t, n, r) {
    while (e.nodeType === 1) {
      var i = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) {
          break;
        }
      } else if (!r) {
        if (t === `input` && e.type === `hidden`) {
          var a = i.name == null ? null : `${i.name}`;
          if (i.type === `hidden` && e.getAttribute(`name`) === a) {
            return e;
          }
        } else {
          return e;
        }
      } else if (!e[Ht]) {
        switch (t) {
          case `meta`:
            if (!e.hasAttribute(`itemprop`)) {
              break;
            }
            return e;
          case `link`:
            a = e.getAttribute(`rel`);
            if (a === `stylesheet` && e.hasAttribute(`data-precedence`) || a !== i.rel || e.getAttribute(`href`) !== (i.href == null || i.href === `` ? null : i.href) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin) || e.getAttribute(`title`) !== (i.title == null ? null : i.title)) {
              break;
            }
            return e;
          case `style`:
            if (e.hasAttribute(`data-precedence`)) {
              break;
            }
            return e;
          case `script`:
            a = e.getAttribute(`src`);
            if ((a !== (i.src == null ? null : i.src) || e.getAttribute(`type`) !== (i.type == null ? null : i.type) || e.getAttribute(`crossorigin`) !== (i.crossOrigin == null ? null : i.crossOrigin)) && a && e.hasAttribute(`async`) && !e.hasAttribute(`itemprop`)) {
              break;
            }
            return e;
          default:
            return e;
        }
      }
      e = lm(e.nextSibling);
      if (e === null) {
        break;
      }
    }
    return null;
  }
  function im(e, t, n) {
    if (t === ``) {
      return null;
    }
    while (e.nodeType !== 3) {
      if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !n || (e = lm(e.nextSibling), e === null)) {
        return null;
      }
    }
    return e;
  }
  function am(e, t) {
    while (e.nodeType !== 8) {
      if ((e.nodeType !== 1 || e.nodeName !== `INPUT` || e.type !== `hidden`) && !t || (e = lm(e.nextSibling), e === null)) {
        return null;
      }
    }
    return e;
  }
  function om(e) {
    return e.data === `$?` || e.data === `$~`;
  }
  function sm(e) {
    return e.data === `$!` || e.data === `$?` && e.ownerDocument.readyState !== `loading`;
  }
  function cm(e, t) {
    var n = e.ownerDocument;
    if (e.data === `$~`) {
      e._reactRetry = t;
    } else if (e.data !== `$?` || n.readyState !== `loading`) {
      t();
    } else {
      function r() {
        t();
        n.removeEventListener(`DOMContentLoaded`, r);
      }
      n.addEventListener(`DOMContentLoaded`, r);
      e._reactRetry = r;
    }
  }
  function lm(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) {
        break;
      }
      if (t === 8) {
        t = e.data;
        if (t === `$` || t === `$!` || t === `$?` || t === `$~` || t === `&` || t === `F!` || t === `F`) {
          break;
        }
        if (t === `/$` || t === `/&`) {
          return null;
        }
      }
    }
    return e;
  }
  var um = null;
  function dm(e) {
    e = e.nextSibling;
    var t = 0;
    for (; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === `/$` || n === `/&`) {
          if (t === 0) {
            return lm(e.nextSibling);
          }
          t--;
        } else if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
          t++;
        }
      }
      e = e.nextSibling;
    }
    return null;
  }
  function fm(e) {
    e = e.previousSibling;
    var t = 0;
    for (; e;) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === `$` || n === `$!` || n === `$?` || n === `$~` || n === `&`) {
          if (t === 0) {
            return e;
          }
          t--;
        } else if (n === `/$` || n === `/&`) {
          t++;
        }
      }
      e = e.previousSibling;
    }
    return null;
  }
  function pm(e, t) {
    function n() {
      r = true;
    }
    if (e.ownerDocument.activeElement === e) {
      return true;
    }
    var r = false;
    try {
      e.ownerDocument.addEventListener(`focus`, n, true);
      (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener(`focus`, n, true);
    }
    return r;
  }
  function mm(e) {
    yp(function () {
      yp(function (t) {
        return e(t);
      });
    });
  }
  function hm(e, t, n) {
    t = lp(n);
    switch (e) {
      case `html`:
        e = t.documentElement;
        if (!e) {
          throw Error(a(452));
        }
        return e;
      case `head`:
        e = t.head;
        if (!e) {
          throw Error(a(453));
        }
        return e;
      case `body`:
        e = t.body;
        if (!e) {
          throw Error(a(454));
        }
        return e;
      default:
        throw Error(a(451));
    }
  }
  function gm(e, t, n) {
    for (var r in n) {
      var i = n[r];
      if (n.hasOwnProperty(r) && i != null) {
        $(e, t, r, null, rp, i);
      }
    }
    if (n.dangerouslySetInnerHTML != null) {
      e.textContent = ``;
    }
    if (e.onclick === An) {
      e.onclick = null;
    }
    Wt(e);
  }
  function _m(e) {
    for (var t = e.attributes; t.length;) {
      e.removeAttributeNode(t[0]);
    }
    Wt(e);
  }
  var vm = new Map();
  var ym = new Set();
  function bm(e) {
    if (typeof e.getRootNode == `function`) {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) {
        return t;
      }
    }
    if (e.nodeType === 9) {
      return e;
    } else {
      return e.ownerDocument;
    }
  }
  var xm = w.d;
  w.d = {
    f: Sm,
    r: Cm,
    D: Em,
    C: Dm,
    L: Om,
    m: km,
    X: jm,
    S: Am,
    M: Mm
  };
  function Sm() {
    var e = xm.f();
    var t = zd();
    return e || t;
  }
  function Cm(e) {
    var t = Kt(e);
    if (t !== null && t.tag === 5 && t.type === `form`) {
      lc(t);
    } else {
      xm.r(e);
    }
  }
  var wm = typeof document > `u` ? null : document;
  function Tm(e, t, n) {
    var r = wm;
    if (r && typeof t == `string` && t) {
      var i = hn(t);
      i = `link[rel="${e}"][href="${i}"]`;
      if (typeof n == `string`) {
        i += `[crossorigin="${n}"]`;
      }
      if (!ym.has(i)) {
        ym.add(i);
        e = {
          rel: e,
          crossOrigin: n,
          href: t
        };
        if (r.querySelector(i) === null) {
          t = r.createElement(`link`);
          np(t, `link`, e);
          E(t);
          r.head.appendChild(t);
        }
      }
    }
  }
  function Em(e) {
    xm.D(e);
    Tm(`dns-prefetch`, e, null);
  }
  function Dm(e, t) {
    xm.C(e, t);
    Tm(`preconnect`, e, t);
  }
  function Om(e, t, n) {
    xm.L(e, t, n);
    var r = wm;
    if (r && e && t) {
      var i = `link[rel="preload"][as="${hn(t)}"]`;
      if (t === `image` && n && n.imageSrcSet) {
        i += `[imagesrcset="${hn(n.imageSrcSet)}"]`;
        if (typeof n.imageSizes == `string`) {
          i += `[imagesizes="${hn(n.imageSizes)}"]`;
        }
      } else {
        i += `[href="${hn(e)}"]`;
      }
      var a = i;
      switch (t) {
        case `style`:
          a = Pm(e);
          break;
        case `script`:
          a = Rm(e);
      }
      if (!vm.has(a) && !(e = S({
        rel: `preload`,
        href: t === `image` && n && n.imageSrcSet ? undefined : e,
        as: t
      }, n), vm.set(a, e), r.querySelector(i) !== null || t === `style` && r.querySelector(Fm(a)) || t === `script` && r.querySelector(zm(a)))) {
        var o = r.createElement(`link`);
        np(o, `link`, e);
        if (t === `style`) {
          o[Ut] = true;
          o.onload = o.onerror = function () {
            Yt(o);
          };
        }
        E(o);
        r.head.appendChild(o);
      }
    }
  }
  function km(e, t) {
    xm.m(e, t);
    var n = wm;
    if (n && e) {
      var r = t && typeof t.as == `string` ? t.as : `script`;
      var i = `link[rel="modulepreload"][as="${hn(r)}"][href="${hn(e)}"]`;
      var a = i;
      switch (r) {
        case `audioworklet`:
        case `paintworklet`:
        case `serviceworker`:
        case `sharedworker`:
        case `worker`:
        case `script`:
          a = Rm(e);
      }
      if (!vm.has(a) && (e = S({
        rel: `modulepreload`,
        href: e
      }, t), vm.set(a, e), n.querySelector(i) === null)) {
        switch (r) {
          case `audioworklet`:
          case `paintworklet`:
          case `serviceworker`:
          case `sharedworker`:
          case `worker`:
          case `script`:
            if (n.querySelector(zm(a))) {
              return;
            }
        }
        r = n.createElement(`link`);
        np(r, `link`, e);
        E(r);
        n.head.appendChild(r);
      }
    }
  }
  function Am(e, t, n) {
    xm.S(e, t, n);
    var r = wm;
    if (r && e) {
      var i = Jt(r).hoistableStyles;
      var a = Pm(e);
      t ||= `default`;
      var o = i.get(a);
      if (!o) {
        var s = {
          loading: 0,
          preload: null
        };
        if (o = r.querySelector(Fm(a))) {
          s.loading = 5;
        } else {
          e = S({
            rel: `stylesheet`,
            href: e,
            "data-precedence": t
          }, n);
          if (n = vm.get(a)) {
            Hm(e, n);
          }
          var c = o = r.createElement(`link`);
          E(c);
          np(c, `link`, e);
          c._p = new Promise(function (e, t) {
            c.onload = e;
            c.onerror = t;
          });
          c.addEventListener(`load`, function () {
            s.loading |= 1;
          });
          c.addEventListener(`error`, function () {
            s.loading |= 2;
          });
          s.loading |= 4;
          Vm(o, t, r);
        }
        o = {
          type: `stylesheet`,
          instance: o,
          count: 1,
          state: s
        };
        i.set(a, o);
      }
    }
  }
  function jm(e, t) {
    xm.X(e, t);
    var n = wm;
    if (n && e) {
      var r = Jt(n).hoistableScripts;
      var i = Rm(e);
      var a = r.get(i);
      if (!a) {
        a = n.querySelector(zm(i));
        if (!a) {
          e = S({
            src: e,
            async: true
          }, t);
          if (t = vm.get(i)) {
            Um(e, t);
          }
          a = n.createElement(`script`);
          E(a);
          np(a, `link`, e);
          n.head.appendChild(a);
        }
        a = {
          type: `script`,
          instance: a,
          count: 1,
          state: null
        };
        r.set(i, a);
      }
    }
  }
  function Mm(e, t) {
    xm.M(e, t);
    var n = wm;
    if (n && e) {
      var r = Jt(n).hoistableScripts;
      var i = Rm(e);
      var a = r.get(i);
      if (!a) {
        a = n.querySelector(zm(i));
        if (!a) {
          e = S({
            src: e,
            async: true,
            type: `module`
          }, t);
          if (t = vm.get(i)) {
            Um(e, t);
          }
          a = n.createElement(`script`);
          E(a);
          np(a, `link`, e);
          n.head.appendChild(a);
        }
        a = {
          type: `script`,
          instance: a,
          count: 1,
          state: null
        };
        r.set(i, a);
      }
    }
  }
  function Nm(e, t, n, r) {
    var i = (i = Fe.current) ? bm(i) : null;
    if (!i) {
      throw Error(a(446));
    }
    switch (e) {
      case `meta`:
      case `title`:
        return null;
      case `style`:
        if (typeof n.precedence == `string` && typeof n.href == `string`) {
          n = Pm(n.href);
          t = Jt(i).hoistableStyles;
          r = t.get(n);
          if (!r) {
            r = {
              type: `style`,
              instance: null,
              count: 0,
              state: null
            };
            t.set(n, r);
          }
          return r;
        } else {
          return {
            type: `void`,
            instance: null,
            count: 0,
            state: null
          };
        }
      case `link`:
        if (n.rel === `stylesheet` && typeof n.href == `string` && typeof n.precedence == `string`) {
          e = Pm(n.href);
          var o = Jt(i).hoistableStyles;
          var s = o.get(e);
          if (!s) {
            i = i.ownerDocument || i;
            s = {
              type: `stylesheet`,
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            };
            o.set(e, s);
            if (o = i.querySelector(Fm(e))) {
              if (!o._p) {
                s.instance = o;
                s.state.loading = 5;
              }
            } else {
              o = vm.get(e);
              if (!o) {
                o = {
                  rel: `preload`,
                  as: `style`,
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy
                };
                vm.set(e, o);
              }
              Lm(i, e, o, s.state);
            }
          }
          if (t && r === null) {
            throw Error(a(528, ``));
          }
          return s;
        }
        if (t && r !== null) {
          throw Error(a(529, ``));
        }
        return null;
      case `script`:
        t = n.async;
        n = n.src;
        if (typeof n == `string` && t && typeof t != `function` && typeof t != `symbol`) {
          n = Rm(n);
          t = Jt(i).hoistableScripts;
          r = t.get(n);
          if (!r) {
            r = {
              type: `script`,
              instance: null,
              count: 0,
              state: null
            };
            t.set(n, r);
          }
          return r;
        } else {
          return {
            type: `void`,
            instance: null,
            count: 0,
            state: null
          };
        }
      default:
        throw Error(a(444, e));
    }
  }
  function Pm(e) {
    return `href="${hn(e)}"`;
  }
  function Fm(e) {
    return `link[rel="stylesheet"][${e}]`;
  }
  function Im(e) {
    return S({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Lm(e, t, n, r) {
    if (t = e.querySelector(`link[rel="preload"][as="style"][${t}]`)) {
      if (t[Ut] !== true) {
        r.loading = 1;
        return;
      }
    } else {
      t = e.createElement(`link`);
      t[Ut] = true;
      t.onload = t.onerror = Yt.bind(null, t);
      np(t, `link`, n);
      E(t);
      e.head.appendChild(t);
    }
    r.preload = t;
    t.addEventListener(`load`, function () {
      return r.loading |= 1;
    });
    t.addEventListener(`error`, function () {
      return r.loading |= 2;
    });
  }
  function Rm(e) {
    return `[src="${hn(e)}"]`;
  }
  function zm(e) {
    return `script[async]${e}`;
  }
  function Bm(e, t, n) {
    t.count++;
    if (t.instance === null) {
      switch (t.type) {
        case `style`:
          var r = e.querySelector(`style[data-href~="${hn(n.href)}"]`);
          if (r) {
            t.instance = r;
            E(r);
            return r;
          }
          var i = S({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          r = (e.ownerDocument || e).createElement(`style`);
          E(r);
          np(r, `style`, i);
          Vm(r, n.precedence, e);
          return t.instance = r;
        case `stylesheet`:
          i = Pm(n.href);
          var o = e.querySelector(Fm(i));
          if (o) {
            t.state.loading |= 4;
            t.instance = o;
            E(o);
            return o;
          }
          r = Im(n);
          if (i = vm.get(i)) {
            Hm(r, i);
          }
          o = (e.ownerDocument || e).createElement(`link`);
          E(o);
          var s = o;
          s._p = new Promise(function (e, t) {
            s.onload = e;
            s.onerror = t;
          });
          np(o, `link`, r);
          t.state.loading |= 4;
          Vm(o, n.precedence, e);
          return t.instance = o;
        case `script`:
          o = Rm(n.src);
          if (i = e.querySelector(zm(o))) {
            t.instance = i;
            E(i);
            return i;
          } else {
            r = n;
            if (i = vm.get(o)) {
              r = S({}, n);
              Um(r, i);
            }
            e = e.ownerDocument || e;
            i = e.createElement(`script`);
            E(i);
            np(i, `link`, r);
            e.head.appendChild(i);
            return t.instance = i;
          }
        case `void`:
          return null;
        default:
          throw Error(a(443, t.type));
      }
    } else if (t.type === `stylesheet` && !(t.state.loading & 4)) {
      r = t.instance;
      t.state.loading |= 4;
      Vm(r, n.precedence, e);
    }
    return t.instance;
  }
  function Vm(e, t, n) {
    for (var r = n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`), i = r.length ? r[r.length - 1] : null, a = i, o = 0; o < r.length; o++) {
      var s = r[o];
      if (s.dataset.precedence === t) {
        a = s;
      } else if (a !== i) {
        break;
      }
    }
    if (a) {
      a.parentNode.insertBefore(e, a.nextSibling);
    } else {
      t = n.nodeType === 9 ? n.head : n;
      t.insertBefore(e, t.firstChild);
    }
  }
  function Hm(e, t) {
    e.crossOrigin ??= t.crossOrigin;
    e.referrerPolicy ??= t.referrerPolicy;
    e.title ??= t.title;
  }
  function Um(e, t) {
    e.crossOrigin ??= t.crossOrigin;
    e.referrerPolicy ??= t.referrerPolicy;
    e.integrity ??= t.integrity;
  }
  var Wm = null;
  function Gm(e, t, n) {
    if (Wm === null) {
      var r = new Map();
      var i = Wm = new Map();
      i.set(n, r);
    } else {
      i = Wm;
      r = i.get(n);
      if (!r) {
        r = new Map();
        i.set(n, r);
      }
    }
    if (r.has(e)) {
      return r;
    }
    r.set(e, null);
    n = n.getElementsByTagName(e);
    i = 0;
    for (; i < n.length; i++) {
      var a = n[i];
      if (!a[Ht] && !a[Ft] && (e !== `link` || a.getAttribute(`rel`) !== `stylesheet`) && a.namespaceURI !== `http://www.w3.org/2000/svg`) {
        var o = a.getAttribute(t) || ``;
        o = e + o;
        var s = r.get(o);
        if (s) {
          s.push(a);
        } else {
          r.set(o, [a]);
        }
      }
    }
    return r;
  }
  function Km(e, t, n) {
    e = e.ownerDocument || e;
    e.head.insertBefore(n, t === `title` ? e.querySelector(`head > title`) : null);
  }
  function qm(e, t, n) {
    if (n === 1 || t.itemProp != null) {
      return false;
    }
    switch (e) {
      case `meta`:
      case `title`:
        return true;
      case `style`:
        if (typeof t.precedence != `string` || typeof t.href != `string` || t.href === ``) {
          break;
        }
        return true;
      case `link`:
        if (typeof t.rel != `string` || typeof t.href != `string` || t.href === `` || t.onLoad || t.onError) {
          break;
        }
        switch (t.rel) {
          case `stylesheet`:
            e = t.disabled;
            return typeof t.precedence == `string` && e == null;
          default:
            return true;
        }
      case `script`:
        if (t.async && typeof t.async != `function` && typeof t.async != `symbol` && !t.onLoad && !t.onError && t.src && typeof t.src == `string`) {
          return true;
        }
    }
    return false;
  }
  function Jm(e, t) {
    return e === `img` && t.src != null && t.src !== `` && t.onLoad == null && t.loading !== `lazy`;
  }
  function Ym(e) {
    return e.type !== `stylesheet` || !!(e.state.loading & 3);
  }
  function Xm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) * 0.25;
  }
  function Zm(e, t) {
    if (typeof t.decode == `function`) {
      e.imgCount++;
      if (!t.complete) {
        e.imgBytes += Xm(t);
        e.suspenseyImages.push(t);
      }
      e = rh.bind(e);
      t.decode().then(e, e);
    }
  }
  function Qm(e, t, n, r) {
    if (n.type === `stylesheet` && (typeof r.media != `string` || matchMedia(r.media).matches !== false) && !(n.state.loading & 4)) {
      if (n.instance === null) {
        var i = Pm(r.href);
        var a = t.querySelector(Fm(i));
        if (a) {
          t = a._p;
          if (typeof t == `object` && t && typeof t.then == `function`) {
            e.count++;
            e = nh.bind(e);
            t.then(e, e);
          }
          n.state.loading |= 4;
          n.instance = a;
          E(a);
          return;
        }
        a = t.ownerDocument || t;
        r = Im(r);
        if (i = vm.get(i)) {
          Hm(r, i);
        }
        a = a.createElement(`link`);
        E(a);
        var o = a;
        o._p = new Promise(function (e, t) {
          o.onload = e;
          o.onerror = t;
        });
        np(a, `link`, r);
        n.instance = a;
      }
      if (e.stylesheets === null) {
        e.stylesheets = new Map();
      }
      e.stylesheets.set(n, t);
      if ((t = n.state.preload) && !(n.state.loading & 3)) {
        e.count++;
        n = nh.bind(e);
        t.addEventListener(`load`, n);
        t.addEventListener(`error`, n);
      }
    }
  }
  var $m = 0;
  function eh(e, t) {
    if (e.stylesheets && e.count === 0) {
      ah(e, e.stylesheets);
    }
    if (e.count > 0 || e.imgCount > 0) {
      return function (n) {
        var r = setTimeout(function () {
          if (e.stylesheets) {
            ah(e, e.stylesheets);
          }
          if (e.unsuspend) {
            var t = e.unsuspend;
            e.unsuspend = null;
            t();
          }
        }, 60000 + t);
        if (e.imgBytes > 0 && $m === 0) {
          $m = op() * 62500;
        }
        var i = setTimeout(function () {
          e.waitingForImages = false;
          if (e.count === 0 && (e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
            var t = e.unsuspend;
            e.unsuspend = null;
            t();
          }
        }, (e.imgBytes > $m ? 50 : 800) + t);
        e.unsuspend = n;
        return function () {
          e.unsuspend = null;
          clearTimeout(r);
          clearTimeout(i);
        };
      };
    } else {
      return null;
    }
  }
  function th(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) {
        ah(e, e.stylesheets);
      } else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null;
        t();
      }
    }
  }
  function nh() {
    this.count--;
    th(this);
  }
  function rh() {
    this.imgCount--;
    th(this);
  }
  var ih = null;
  function ah(e, t) {
    e.stylesheets = null;
    if (e.unsuspend !== null) {
      e.count++;
      ih = new Map();
      t.forEach(oh, e);
      ih = null;
      nh.call(e);
    }
  }
  function oh(e, t) {
    if (!(t.state.loading & 4)) {
      var n = ih.get(e);
      if (n) {
        var r = n.get(null);
      } else {
        n = new Map();
        ih.set(e, n);
        for (var i = e.querySelectorAll(`link[data-precedence],style[data-precedence]`), a = 0; a < i.length; a++) {
          var o = i[a];
          if (o.nodeName === `LINK` || o.getAttribute(`media`) !== `not all`) {
            n.set(o.dataset.precedence, o);
            r = o;
          }
        }
        if (r) {
          n.set(null, r);
        }
      }
      i = t.instance;
      o = i.getAttribute(`data-precedence`);
      a = n.get(o) || r;
      if (a === r) {
        n.set(null, i);
      }
      n.set(o, i);
      this.count++;
      r = nh.bind(this);
      i.addEventListener(`load`, r);
      i.addEventListener(`error`, r);
      if (a) {
        a.parentNode.insertBefore(i, a.nextSibling);
      } else {
        e = e.nodeType === 9 ? e.head : e;
        e.insertBefore(i, e.firstChild);
      }
      t.state.loading |= 4;
    }
  }
  var sh = {
    $$typeof: fe,
    Provider: null,
    Consumer: null,
    _currentValue: Oe,
    _currentValue2: Oe,
    _threadCount: 0
  };
  function ch(e, t, n, r, i, a, o, s, c) {
    this.tag = 1;
    this.containerInfo = e;
    this.pingCache = this.current = this.pendingChildren = null;
    this.timeoutHandle = -1;
    this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null;
    this.callbackPriority = 0;
    this.expirationTimes = wt(-1);
    this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
    this.entanglements = wt(0);
    this.hiddenUpdates = wt(null);
    this.identifierPrefix = r;
    this.onUncaughtError = i;
    this.onCaughtError = a;
    this.onRecoverableError = o;
    this.pooledCache = null;
    this.pooledCacheLanes = 0;
    this.formState = c;
    this.transitionTypes = null;
    this.incompleteTransitions = new Map();
  }
  function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
    e = new ch(e, t, n, o, c, l, u, d, s);
    t = 1;
    if (a === true) {
      t |= 24;
    }
    a = Wi(3, null, null, t);
    e.current = a;
    a.stateNode = e;
    t = Va();
    t.refCount++;
    e.pooledCache = t;
    t.refCount++;
    a.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: t
    };
    wo(a);
    return e;
  }
  function uh(e) {
    if (e) {
      e = Hi;
      return e;
    } else {
      return Hi;
    }
  }
  function dh(e, t, n, r, i, a) {
    i = uh(i);
    if (r.context === null) {
      r.context = i;
    } else {
      r.pendingContext = i;
    }
    r = Eo(t);
    r.payload = {
      element: n
    };
    a = a === undefined ? null : a;
    if (a !== null) {
      r.callback = a;
    }
    n = Do(e, r, t);
    if (n !== null) {
      Pd(n, e, t);
      Oo(n, e, t);
    }
  }
  function fh(e, t) {
    e = e.memoizedState;
    if (e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ph(e, t) {
    fh(e, t);
    if (e = e.alternate) {
      fh(e, t);
    }
  }
  function mh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = zi(e, 67108864);
      if (t !== null) {
        Pd(t, e, 67108864);
      }
      ph(e, 67108864);
    }
  }
  function hh(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = jd();
      t = At(t);
      var n = zi(e, t);
      if (n !== null) {
        Pd(n, e, t);
      }
      ph(e, t);
    }
  }
  var gh = true;
  function _h(e, t, n, r) {
    var i = C.T;
    C.T = null;
    var a = w.p;
    try {
      w.p = 2;
      yh(e, t, n, r);
    } finally {
      w.p = a;
      C.T = i;
    }
  }
  function vh(e, t, n, r) {
    var i = C.T;
    C.T = null;
    var a = w.p;
    try {
      w.p = 8;
      yh(e, t, n, r);
    } finally {
      w.p = a;
      C.T = i;
    }
  }
  function yh(e, t, n, r) {
    if (gh) {
      var i = bh(r);
      if (i === null) {
        Kf(e, t, r, xh, n);
        Mh(e, r);
      } else if (Ph(i, e, t, n, r)) {
        r.stopPropagation();
      } else {
        Mh(e, r);
        if (t & 4 && jh.indexOf(e) > -1) {
          while (i !== null) {
            var a = Kt(i);
            if (a !== null) {
              switch (a.tag) {
                case 3:
                  a = a.stateNode;
                  if (a.current.memoizedState.isDehydrated) {
                    var o = vt(a.pendingLanes);
                    if (o !== 0) {
                      var s = a;
                      s.pendingLanes |= 2;
                      s.entangledLanes |= 2;
                      while (o) {
                        var c = 1 << 31 - dt(o);
                        s.entanglements[1] |= c;
                        o &= ~c;
                      }
                      Ef(a);
                      if (!(W & 6)) {
                        _d = $e() + 500;
                        Df(0, false);
                      }
                    }
                  }
                  break;
                case 31:
                case 13:
                  s = zi(a, 2);
                  if (s !== null) {
                    Pd(s, a, 2);
                  }
                  zd();
                  ph(a, 2);
              }
            }
            a = bh(r);
            if (a === null) {
              Kf(e, t, r, xh, n);
            }
            if (a === i) {
              break;
            }
            i = a;
          }
          if (i !== null) {
            r.stopPropagation();
          }
        } else {
          Kf(e, t, r, null, n);
        }
      }
    }
  }
  function bh(e) {
    e = Mn(e);
    return Sh(e);
  }
  var xh = null;
  function Sh(e) {
    xh = null;
    e = Gt(e);
    if (e !== null) {
      var t = l(e);
      if (t === null) {
        e = null;
      } else {
        var n = t.tag;
        if (n === 13) {
          e = u(t);
          if (e !== null) {
            return e;
          }
          e = null;
        } else if (n === 31) {
          e = d(t);
          if (e !== null) {
            return e;
          }
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated) {
            if (t.tag === 3) {
              return t.stateNode.containerInfo;
            } else {
              return null;
            }
          }
          e = null;
        } else if (t !== e) {
          e = null;
        }
      }
    }
    xh = e;
    return null;
  }
  function Ch(e) {
    switch (e) {
      case `beforetoggle`:
      case `cancel`:
      case `click`:
      case `close`:
      case `contextmenu`:
      case `copy`:
      case `cut`:
      case `auxclick`:
      case `dblclick`:
      case `dragend`:
      case `dragstart`:
      case `drop`:
      case `focusin`:
      case `focusout`:
      case `input`:
      case `invalid`:
      case `keydown`:
      case `keypress`:
      case `keyup`:
      case `mousedown`:
      case `mouseup`:
      case `paste`:
      case `pause`:
      case `play`:
      case `pointercancel`:
      case `pointerdown`:
      case `pointerup`:
      case `ratechange`:
      case `reset`:
      case `seeked`:
      case `submit`:
      case `toggle`:
      case `touchcancel`:
      case `touchend`:
      case `touchstart`:
      case `volumechange`:
      case `change`:
      case `selectionchange`:
      case `textInput`:
      case `compositionstart`:
      case `compositionend`:
      case `compositionupdate`:
      case `beforeblur`:
      case `afterblur`:
      case `beforeinput`:
      case `blur`:
      case `fullscreenchange`:
      case `fullscreenerror`:
      case `focus`:
      case `hashchange`:
      case `popstate`:
      case `select`:
      case `selectstart`:
        return 2;
      case `drag`:
      case `dragenter`:
      case `dragexit`:
      case `dragleave`:
      case `dragover`:
      case `mousemove`:
      case `mouseout`:
      case `mouseover`:
      case `pointermove`:
      case `pointerout`:
      case `pointerover`:
      case `resize`:
      case `scroll`:
      case `touchmove`:
      case `wheel`:
      case `mouseenter`:
      case `mouseleave`:
      case `pointerenter`:
      case `pointerleave`:
        return 8;
      case `message`:
        switch (et()) {
          case tt:
            return 2;
          case nt:
            return 8;
          case rt:
          case it:
            return 32;
          case at:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wh = false;
  var Th = null;
  var Eh = null;
  var Dh = null;
  var Oh = new Map();
  var kh = new Map();
  var Ah = [];
  var jh = `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);
  function Mh(e, t) {
    switch (e) {
      case `focusin`:
      case `focusout`:
        Th = null;
        break;
      case `dragenter`:
      case `dragleave`:
        Eh = null;
        break;
      case `mouseover`:
      case `mouseout`:
        Dh = null;
        break;
      case `pointerover`:
      case `pointerout`:
        Oh.delete(t.pointerId);
        break;
      case `gotpointercapture`:
      case `lostpointercapture`:
        kh.delete(t.pointerId);
    }
  }
  function Nh(e, t, n, r, i, a) {
    if (e === null || e.nativeEvent !== a) {
      e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [i]
      };
      if (t !== null) {
        t = Kt(t);
        if (t !== null) {
          mh(t);
        }
      }
      return e;
    } else {
      e.eventSystemFlags |= r;
      t = e.targetContainers;
      if (i !== null && t.indexOf(i) === -1) {
        t.push(i);
      }
      return e;
    }
  }
  function Ph(e, t, n, r, i) {
    switch (t) {
      case `focusin`:
        Th = Nh(Th, e, t, n, r, i);
        return true;
      case `dragenter`:
        Eh = Nh(Eh, e, t, n, r, i);
        return true;
      case `mouseover`:
        Dh = Nh(Dh, e, t, n, r, i);
        return true;
      case `pointerover`:
        var a = i.pointerId;
        Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i));
        return true;
      case `gotpointercapture`:
        a = i.pointerId;
        kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i));
        return true;
    }
    return false;
  }
  function Fh(e) {
    var t = Gt(e.target);
    if (t !== null) {
      var n = l(t);
      if (n !== null) {
        t = n.tag;
        if (t === 13) {
          t = u(n);
          if (t !== null) {
            e.blockedOn = t;
            Nt(e.priority, function () {
              hh(n);
            });
            return;
          }
        } else if (t === 31) {
          t = d(n);
          if (t !== null) {
            e.blockedOn = t;
            Nt(e.priority, function () {
              hh(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ih(e) {
    if (e.blockedOn !== null) {
      return false;
    }
    for (var t = e.targetContainers; t.length > 0;) {
      var n = bh(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        jn = r;
        n.target.dispatchEvent(r);
        jn = null;
      } else {
        t = Kt(n);
        if (t !== null) {
          mh(t);
        }
        e.blockedOn = n;
        return false;
      }
      t.shift();
    }
    return true;
  }
  function Lh(e, t, n) {
    if (Ih(e)) {
      n.delete(t);
    }
  }
  function Rh() {
    wh = false;
    if (Th !== null && Ih(Th)) {
      Th = null;
    }
    if (Eh !== null && Ih(Eh)) {
      Eh = null;
    }
    if (Dh !== null && Ih(Dh)) {
      Dh = null;
    }
    Oh.forEach(Lh);
    kh.forEach(Lh);
  }
  function zh(e, n) {
    if (e.blockedOn === n) {
      e.blockedOn = null;
      if (!wh) {
        wh = true;
        t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh);
      }
    }
  }
  var Bh = null;
  function Vh(e) {
    if (Bh !== e) {
      Bh = e;
      t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
        if (Bh === e) {
          Bh = null;
        }
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t];
          var r = e[t + 1];
          var i = e[t + 2];
          if (typeof r != `function`) {
            if (Sh(r || n) === null) {
              continue;
            }
            break;
          }
          var a = Kt(n);
          if (a !== null) {
            e.splice(t, 3);
            t -= 3;
            sc(a, {
              pending: true,
              data: i,
              method: n.method,
              action: r
            }, r, i);
          }
        }
      });
    }
  }
  function Hh(e) {
    function t(t) {
      return zh(t, e);
    }
    if (Th !== null) {
      zh(Th, e);
    }
    if (Eh !== null) {
      zh(Eh, e);
    }
    if (Dh !== null) {
      zh(Dh, e);
    }
    Oh.forEach(t);
    kh.forEach(t);
    for (var n = 0; n < Ah.length; n++) {
      var r = Ah[n];
      if (r.blockedOn === e) {
        r.blockedOn = null;
      }
    }
    while (Ah.length > 0 && (n = Ah[0], n.blockedOn === null)) {
      Fh(n);
      if (n.blockedOn === null) {
        Ah.shift();
      }
    }
    n = (e.ownerDocument || e).$$reactFormReplay;
    if (n != null) {
      for (r = 0; r < n.length; r += 3) {
        var i = n[r];
        var a = n[r + 1];
        var o = i[It] || null;
        if (typeof a == `function`) {
          if (!o) {
            Vh(n);
          }
        } else if (o) {
          var s = null;
          if (a && a.hasAttribute(`formAction`)) {
            i = a;
            if (o = a[It] || null) {
              s = o.formAction;
            } else if (Sh(i) !== null) {
              continue;
            }
          } else {
            s = o.action;
          }
          if (typeof s == `function`) {
            n[r + 1] = s;
          } else {
            n.splice(r, 3);
            r -= 3;
          }
          Vh(n);
        }
      }
    }
  }
  function Uh() {
    function e(e) {
      if (e.canIntercept && e.info === `react-transition`) {
        e.intercept({
          handler: function () {
            return new Promise(function (e) {
              return i = e;
            });
          },
          focusReset: `manual`,
          scroll: `manual`
        });
      }
    }
    function t() {
      if (i !== null) {
        i();
        i = null;
      }
      if (!r) {
        setTimeout(n, 20);
      }
    }
    function n() {
      if (!r && !navigation.transition) {
        var e = navigation.currentEntry;
        if (e && e.url != null) {
          navigation.navigate(e.url, {
            state: e.getState(),
            info: `react-transition`,
            history: `replace`
          });
        }
      }
    }
    if (typeof navigation == `object`) {
      var r = false;
      var i = null;
      navigation.addEventListener(`navigate`, e);
      navigation.addEventListener(`navigatesuccess`, t);
      navigation.addEventListener(`navigateerror`, t);
      setTimeout(n, 100);
      return function () {
        r = true;
        navigation.removeEventListener(`navigate`, e);
        navigation.removeEventListener(`navigatesuccess`, t);
        navigation.removeEventListener(`navigateerror`, t);
        if (i !== null) {
          i();
          i = null;
        }
      };
    }
  }
  function Wh(e) {
    this._internalRoot = e;
  }
  Gh.prototype.render = Wh.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) {
      throw Error(a(409));
    }
    var n = t.current;
    dh(n, jd(), e, t, null, null);
  };
  Gh.prototype.unmount = Wh.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      dh(e.current, 2, null, e, null, null);
      zd();
      t[Lt] = null;
    }
  };
  function Gh(e) {
    this._internalRoot = e;
  }
  Gh.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Mt();
      e = {
        blockedOn: null,
        target: e,
        priority: t
      };
      for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
      Ah.splice(n, 0, e);
      if (n === 0) {
        Fh(e);
      }
    }
  };
  var Kh = r.version;
  if (Kh !== `19.3.1`) {
    throw Error(a(527, Kh, `19.3.1`));
  }
  w.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === undefined) {
      throw typeof e.render == `function` ? Error(a(188)) : (e = Object.keys(e).join(`,`), Error(a(268, e)));
    }
    e = p(t);
    e = e === null ? null : m(e);
    e = e === null ? null : e.stateNode;
    return e;
  };
  var qh = {
    bundleType: 0,
    version: `19.3.1`,
    rendererPackageName: `react-dom`,
    currentDispatcherRef: C,
    reconcilerVersion: `19.3.1`
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
    var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Jh.isDisabled && Jh.supportsFiber) {
      try {
        ct = Jh.inject(qh);
        lt = Jh;
      } catch {}
    }
  }
  e.createRoot = function (e, t) {
    if (!s(e)) {
      throw Error(a(299));
    }
    var n = false;
    var r = ``;
    var i = Ac;
    var o = jc;
    var c = Mc;
    if (t != null) {
      if (t.unstable_strictMode === true) {
        n = true;
      }
      if (t.identifierPrefix !== undefined) {
        r = t.identifierPrefix;
      }
      if (t.onUncaughtError !== undefined) {
        i = t.onUncaughtError;
      }
      if (t.onCaughtError !== undefined) {
        o = t.onCaughtError;
      }
      if (t.onRecoverableError !== undefined) {
        c = t.onRecoverableError;
      }
    }
    t = lh(e, 1, false, null, null, n, r, null, i, o, c, Uh);
    e[Lt] = t.current;
    Wf(e);
    return new Wh(t);
  };
  e.hydrateRoot = function (e, t, n) {
    if (!s(e)) {
      throw Error(a(299));
    }
    var r = false;
    var i = ``;
    var o = Ac;
    var c = jc;
    var l = Mc;
    var u = null;
    if (n != null) {
      if (n.unstable_strictMode === true) {
        r = true;
      }
      if (n.identifierPrefix !== undefined) {
        i = n.identifierPrefix;
      }
      if (n.onUncaughtError !== undefined) {
        o = n.onUncaughtError;
      }
      if (n.onCaughtError !== undefined) {
        c = n.onCaughtError;
      }
      if (n.onRecoverableError !== undefined) {
        l = n.onRecoverableError;
      }
      if (n.formState !== undefined) {
        u = n.formState;
      }
    }
    t = lh(e, 1, true, t, n ?? null, r, i, u, o, c, l, Uh);
    t.context = uh(null);
    n = t.current;
    r = jd();
    r = At(r);
    i = Eo(r);
    i.callback = null;
    Do(n, i, r);
    n = r;
    t.current.lanes = n;
    Tt(t, n);
    Ef(t);
    e[Lt] = t.current;
    Wf(e);
    return new Gh(t);
  };
});
var u = e((e, t) => {
  function n() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`) {
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
      } catch (e) {
        console.error(e);
      }
    }
  }
  n();
  t.exports = l();
});
export { n as i, o as n, i as r, u as t };