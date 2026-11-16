//# allFunctionsCalledOnLoad
import { n as e, r as t } from "./CcyWYbDU.js";
import { i as n, n as r, r as i } from "./B0PXqnjO.js";
var a = t(n(), 1);
var o = Symbol.for(`vinext.client.instrumentationHooks`);
function s(e) {
  if (Object.values(e).some(e => typeof e == `function`)) {
    return e;
  } else {
    return null;
  }
}
function c(e) {
  Reflect.set(globalThis, o, e);
  return e;
}
function l() {
  return Reflect.get(globalThis, o) ?? null;
}
function u(e, t) {
  l()?.onRouterTransitionStart?.(e, t);
}
var d = `_b_0_`;
function f(e, t) {
  if (t) {
    return e === t || e.startsWith(`${t}/`);
  } else {
    return false;
  }
}
function p(e, t) {
  if (f(e, t)) {
    return e.slice(t.length) || `/`;
  } else {
    return e;
  }
}
function m(e, t) {
  if (t) {
    if (e === `/`) {
      return t;
    } else {
      return `${t}${e}`;
    }
  } else {
    return e;
  }
}
function ee(e) {
  if (e === `/`) {
    return `/`;
  }
  let t = e.length;
  while (t > 0 && e.charCodeAt(t - 1) === 47) {
    t--;
  }
  if (t === 0) {
    return `/`;
  } else {
    return e.slice(0, t);
  }
}
var te = class extends Error {
  constructor() {
    super("Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams");
  }
};
var h = class extends URLSearchParams {
  append() {
    throw new te();
  }
  delete() {
    throw new te();
  }
  set() {
    throw new te();
  }
  sort() {
    throw new te();
  }
};
var g = class {
  run(e, t, ...n) {
    return t(...n);
  }
  getStore() {}
  enterWith() {}
  exit(e, ...t) {
    return e(...t);
  }
  disable() {}
};
var ne = globalThis;
var re = Symbol.for(`vinext.als.registry`);
var ie = ne[re] ??= new Set();
var ae = class {
  getStore() {}
  run(e, t, ...n) {
    return t(...n);
  }
  exit(e, ...t) {
    return e(...t);
  }
  enterWith(e) {}
  disable() {}
};
function oe(e) {
  let t = Symbol.for(e);
  let n = ne[t] ??= typeof g == `function` ? new g() : new ae();
  ie.add(n);
  return n;
}
oe(`vinext.pprFallbackShell.als`);
oe(`vinext.pprFallbackShell.cacheTaskStack.als`);
var se = `NEXT_REDIRECT;`;
function ce(e) {
  if (!e.startsWith(se)) {
    return null;
  }
  let t = e.indexOf(`;`, 14);
  if (t === -1) {
    return null;
  }
  let n = e.slice(t + 1);
  let r = n.match(/;(303|307|308);?$/);
  let i = n !== `` && e.endsWith(`;`);
  if (i && !r) {
    return null;
  }
  let a = r ? n.slice(0, -r[0].length) : n;
  let o = a;
  if (!i) {
    try {
      o = decodeURIComponent(a);
    } catch {
      return null;
    }
  }
  return {
    status: r ? Number(r[1]) : 307,
    type: e.slice(14, t) || null,
    url: o
  };
}
var le = `NEXT_HTTP_ERROR_FALLBACK`;
var ue = Symbol.for(`vinext.navigationError.thrown`);
var de = class extends Error {
  digest;
  [ue] = true;
  constructor(e, t) {
    super(e);
    this.digest = t;
  }
};
function fe() {
  throw new de(`NEXT_NOT_FOUND`, `${le};404`);
}
function pe() {
  throw new de(`NEXT_FORBIDDEN`, `${le};403`);
}
function me() {
  throw new de(`NEXT_UNAUTHORIZED`, `${le};401`);
}
function he(e) {
  return !!e && typeof e == `object` && `digest` in e && typeof e.digest == `string` && e.digest.startsWith(`NEXT_REDIRECT;`);
}
function ge(e) {
  let t = ce(e);
  if (t) {
    return {
      url: t.url,
      type: t.type === `push` ? `push` : `replace`
    };
  } else {
    return null;
  }
}
var _e = `BAILOUT_TO_CLIENT_SIDE_RENDERING`;
function ve(e) {
  return !!e && typeof e == `object` && `digest` in e && e.digest === _e;
}
var ye = Symbol.for(`vinext.appRouterContext`);
var be = Symbol.for(`vinext.globalLayoutRouterContext`);
var xe = Symbol.for(`vinext.layoutRouterContext`);
var Se = Symbol.for(`vinext.missingSlotContext`);
var Ce = Symbol.for(`vinext.templateContext`);
function _(e, t) {
  if (typeof a.createContext != `function`) {
    return null;
  }
  let n = globalThis;
  n[e] ||= a.createContext(t);
  return n[e] ?? null;
}
var we = _(ye, null);
_(be, null);
_(xe, null);
_(Se, new Set());
_(Ce, null);
var Te = Symbol.for(`vinext.navigation.pagesNavigationContextAccessor`);
function Ee() {
  let e = globalThis[Te];
  if (!e) {
    return null;
  }
  try {
    return e();
  } catch {
    return null;
  }
}
var De = Symbol.for(`vinext.layoutSegmentContext`);
var Oe = Symbol.for(`vinext.serverInsertedHTMLContext`);
var ke = Symbol.for(`vinext.bfcacheIdMapContext`);
var Ae = Symbol.for(`vinext.bfcacheSegmentIdContext`);
var je = Symbol.for(`vinext.navigation.clientHydrationContext`);
var Me = Symbol.for(`vinext.navigation.fallback`);
function Ne(e) {
  if (typeof a.createContext == `function`) {
    return a.createContext(e);
  } else {
    return null;
  }
}
function Pe() {
  let e = globalThis;
  e[Oe] ||= Ne(null);
  return e[Oe] ?? null;
}
Pe();
function Fe() {
  let e = globalThis;
  e[De] ||= Ne({
    children: []
  });
  return e[De] ?? null;
}
function Ie() {
  let e = globalThis;
  e[ke] ||= Ne(null);
  return e[ke] ?? null;
}
function Le() {
  let e = globalThis;
  e[Ae] ||= Ne(null);
  return e[Ae] ?? null;
}
function Re() {
  let e = globalThis;
  return e[Me] ??= {
    serverContext: null,
    serverInsertedHTMLCallbacks: []
  };
}
function ze() {
  let e = globalThis;
  if (Object.prototype.hasOwnProperty.call(e, je)) {
    return e[je] ?? null;
  }
}
function Be(e) {
  globalThis[je] = e;
}
function Ve() {
  Be(null);
}
var He = () => {
  {
    let e = ze();
    if (e === undefined) {
      return Re().serverContext;
    } else {
      return e;
    }
  }
};
var Ue = e => {
  Re().serverContext = e;
  Be(e);
};
function We() {
  return He();
}
function Ge(e) {
  Ue(e);
}
var Ke = Symbol.for(`vinext.navigation.readonlySearchParams`);
var qe = Symbol.for(`vinext.navigation.readonlySearchParamsSource`);
var Je = Symbol.for(`vinext.navigation.readonlySearchParamsSourceKey`);
var Ye = Symbol.for(`vinext.navigation.pagesNavigationNotify`);
var Xe = Symbol.for(`vinext.clientNavigationState`);
function v() {
  let e = window;
  e[Xe] ??= {
    listeners: new Set(),
    cachedSearch: window.location.search,
    cachedReadonlySearchParams: new h(window.location.search),
    cachedPathname: p(window.location.pathname, ``),
    clientParams: {},
    clientParamsJson: `{}`,
    pendingClientParams: null,
    pendingClientParamsJson: null,
    pendingPathname: null,
    pendingPathnameNavId: null,
    originalPushState: window.history.pushState.bind(window.history),
    originalReplaceState: window.history.replaceState.bind(window.history),
    patchInstalled: false,
    routerHistoryWriteDepth: 0,
    routerHistoryWrite: null,
    hasPendingNavigationUpdate: false,
    suppressUrlNotifyCount: 0,
    navigationSnapshotActiveCount: 0
  };
  return e[Xe];
}
function Ze() {
  let e = v();
  if (e) {
    for (let t of e.listeners) {
      t();
    }
  }
}
globalThis[Ye] = Ze;
var Qe = null;
var $e = new WeakMap();
var et = null;
var tt = null;
function nt(e) {
  let t = $e.get(e);
  if (t) {
    return t;
  }
  let n = e.toString();
  if (et === n && tt) {
    $e.set(e, tt);
    return tt;
  }
  let r = new h(e);
  $e.set(e, r);
  et = n;
  tt = r;
  return r;
}
var rt = null;
function it() {
  let e = We() !== null;
  let t = Ee();
  if (!e && t) {
    return nt(t.searchParams);
  }
  let n = v();
  if (n) {
    if (e) {
      ot(n);
    }
    return n.cachedReadonlySearchParams;
  } else {
    if (rt === null) {
      rt = new h();
    }
    return rt;
  }
}
var at = null;
function ot(e) {
  let t = ct();
  if (t !== e.cachedReadonlySearchParams && t !== at) {
    at = t;
    if (t.toString() === e.cachedReadonlySearchParams.toString()) {
      e.cachedReadonlySearchParams = t;
    }
  }
}
function st() {
  let e = v();
  if (!e) {
    return false;
  }
  let t = false;
  let n = p(window.location.pathname, ``);
  if (n !== e.cachedPathname) {
    e.cachedPathname = n;
    t = true;
  }
  let r = window.location.search;
  if (r !== e.cachedSearch) {
    e.cachedSearch = r;
    e.cachedReadonlySearchParams = new h(r);
    t = true;
  }
  return t;
}
function ct() {
  let e = We();
  if (!e) {
    let e = Ee();
    if (e) {
      return nt(e.searchParams);
    } else {
      if (Qe === null) {
        Qe = new h();
      }
      return Qe;
    }
  }
  let t = e.searchParams;
  let n = e[Ke];
  let r = e[qe];
  if (n && r === t) {
    return n;
  }
  let i = t.toString();
  if (n && e[Je] === i) {
    e[qe] = t;
    return n;
  }
  let a = new h(t);
  e[Ke] = a;
  e[qe] = t;
  e[Je] = i;
  return a;
}
function lt() {
  let e = v();
  if (e) {
    e.navigationSnapshotActiveCount++;
  }
}
var ut = Symbol.for(`vinext.clientNavigationRenderContext`);
function dt() {
  if (typeof a.createContext != `function`) {
    return null;
  }
  let e = globalThis;
  e[ut] ||= a.createContext(null);
  return e[ut] ?? null;
}
function ft() {
  let e = dt();
  if (!e || typeof a.useContext != `function`) {
    return null;
  }
  try {
    return a.useContext(e);
  } catch {
    return null;
  }
}
function pt(e, t, n) {
  let r = window.location.origin;
  let i = new URL(e, r);
  return {
    pathname: p(i.pathname, ``),
    search: i.search,
    searchParams: new h(i.search),
    params: t,
    ...(n == null ? {} : {
      renderedSearch: new URL(n, r).search
    })
  };
}
function mt(e) {
  return e.pathname + e.search;
}
var ht = `{}`;
function gt(e) {
  let t = v();
  if (!t) {
    let t = JSON.stringify(e);
    if (t !== ht) {
      ht = t;
    }
    return;
  }
  let n = JSON.stringify(e);
  if (n !== t.clientParamsJson) {
    t.clientParams = e;
    t.clientParamsJson = n;
    t.pendingClientParams = null;
    t.pendingClientParamsJson = null;
    Ze();
  }
}
function _t(e) {
  let t = v();
  if (!t) {
    return;
  }
  let n = JSON.stringify(e);
  if (n !== t.clientParamsJson && n !== t.pendingClientParamsJson) {
    t.pendingClientParams = e;
    t.pendingClientParamsJson = n;
    t.hasPendingNavigationUpdate = true;
  }
}
function vt(e, t) {
  let n = v();
  if (n) {
    n.pendingPathname = p(e, ``);
    n.pendingPathnameNavId = t;
  }
}
function yt(e) {
  let t = v();
  if (t && (t.pendingPathnameNavId === null || t.pendingPathnameNavId === e)) {
    t.pendingPathname = null;
    t.pendingPathnameNavId = null;
  }
}
function bt(e) {
  let t = v();
  if (t) {
    t.listeners.add(e);
    return () => {
      t.listeners.delete(e);
    };
  } else {
    return () => {};
  }
}
function xt() {
  let e = ft();
  let t = a.useSyncExternalStore(bt, it, ct);
  if (e && (v()?.navigationSnapshotActiveCount ?? 0) > 0) {
    return e.searchParams;
  } else {
    return t;
  }
}
function y(e, t) {
  let n = v();
  if (!n) {
    return;
  }
  if ((t?.releaseSnapshot ?? e !== undefined) && n.navigationSnapshotActiveCount > 0) {
    --n.navigationSnapshotActiveCount;
  }
  let r = st();
  let i = false;
  if (n.pendingClientParams !== null && n.pendingClientParamsJson !== null) {
    n.clientParams = n.pendingClientParams;
    n.clientParamsJson = n.pendingClientParamsJson;
    n.pendingClientParams = null;
    n.pendingClientParamsJson = null;
    i = true;
  }
  if (n.pendingPathnameNavId === null || e !== undefined && n.pendingPathnameNavId === e) {
    n.pendingPathname = null;
    n.pendingPathnameNavId = null;
  }
  let a = r || n.hasPendingNavigationUpdate;
  n.hasPendingNavigationUpdate = false;
  if (r || i) {
    Ve();
  }
  if (a) {
    Ze();
  }
}
function St(e) {
  if (!e || e === `0`) {
    return d;
  } else {
    return e;
  }
}
function Ct() {
  let e = Le();
  let t = Ie();
  if (!e || !t || typeof a.useContext != `function`) {
    return St(null);
  }
  try {
    let n = a.useContext(e);
    let r = a.useContext(t);
    return St(n === null ? null : r?.[n]);
  } catch {
    return St(null);
  }
}
function wt() {
  if (!we || typeof a.useContext != `function` || typeof a.useMemo != `function`) {
    throw Error(`invariant expected app router to be mounted`);
  }
  let e = a.useContext(we);
  if (e === null) {
    throw Error(`invariant expected app router to be mounted`);
  }
  let t = Ct();
  return a.useMemo(() => ({
    ...e,
    bfcacheId: t
  }), [e, t]);
}
var Tt = /([/#?\\]|%(2f|23|3f|5c))/gi;
function Et(e) {
  return e.replace(Tt, e => encodeURIComponent(e));
}
function Dt(e) {
  try {
    return Et(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function Ot(e) {
  return e.split(`/`).map(e => Dt(e)).join(`/`);
}
function b(e) {
  return Ot(e).split(`/`).filter(Boolean);
}
function kt(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function x(e) {
  let t = Object.create(null);
  for (let [n, r] of e) {
    t[n] = r;
  }
  return t;
}
function At(e) {
  for (let t of Object.keys(e)) {
    let n = e[t];
    e[t] = Array.isArray(n) ? n.map(kt) : kt(n);
  }
}
function jt(e) {
  return e.split(`/`).filter(Boolean);
}
function Mt(e) {
  return e.startsWith(`[...`) && e.endsWith(`]`) && e.length > 5;
}
function Nt(e) {
  return e.startsWith(`[[...`) && e.endsWith(`]]`) && e.length > 7;
}
function Pt() {
  return {
    catchAllChild: null,
    dynamicChild: null,
    optionalCatchAllChild: null,
    route: null,
    staticChildren: new Map()
  };
}
function Ft(e, t) {
  let n = Pt();
  for (let r of e) {
    let e = n;
    let i = r.patternParts;
    if (i.length === 0) {
      e.route ??= r;
    } else {
      for (let [n, a] of i.entries()) {
        let o = n === i.length - 1;
        if (a.startsWith(`:`) && a.endsWith(`+`)) {
          if (o && e.catchAllChild === null) {
            e.catchAllChild = {
              paramName: a.slice(1, -1),
              route: r
            };
          }
          break;
        }
        if (a.startsWith(`:`) && a.endsWith(`*`)) {
          if (o && e.optionalCatchAllChild === null) {
            e.optionalCatchAllChild = {
              paramName: a.slice(1, -1),
              route: r
            };
          }
          break;
        }
        if (a.startsWith(`:`)) {
          let n = a.slice(1);
          if (e.dynamicChild === null) {
            e.dynamicChild = {
              node: Pt(),
              paramName: n
            };
          } else if (e.dynamicChild.paramName !== n) {
            t?.(e.dynamicChild.paramName, a);
          }
          e = e.dynamicChild.node;
          if (o) {
            e.route ??= r;
          }
          continue;
        }
        let s = e.staticChildren.get(a);
        if (s === undefined) {
          s = Pt();
          e.staticChildren.set(a, s);
        }
        e = s;
        if (o) {
          e.route ??= r;
        }
      }
    }
  }
  return n;
}
function It(e, t, n, r) {
  if (n === t.length) {
    if (e.route === null) {
      if (e.optionalCatchAllChild === null) {
        return null;
      } else {
        return {
          route: e.optionalCatchAllChild.route,
          params: x(r)
        };
      }
    } else {
      return {
        route: e.route,
        params: x(r)
      };
    }
  }
  let i = t[n];
  let a = e.staticChildren.get(i);
  if (a !== undefined) {
    return It(a, t, n + 1, r);
  }
  if (e.dynamicChild !== null) {
    r.push([e.dynamicChild.paramName, i]);
    let a = It(e.dynamicChild.node, t, n + 1, r);
    if (a !== null) {
      return a;
    }
    r.pop();
  }
  if (e.catchAllChild !== null) {
    let i = x(r);
    i[e.catchAllChild.paramName] = t.slice(n);
    return {
      route: e.catchAllChild.route,
      params: i
    };
  }
  if (e.optionalCatchAllChild !== null) {
    let i = x(r);
    i[e.optionalCatchAllChild.paramName] = t.slice(n);
    return {
      route: e.optionalCatchAllChild.route,
      params: i
    };
  }
  return null;
}
function Lt(e, t) {
  return It(e, t, 0, []);
}
function Rt(e) {
  return `route:/${e.join(`/`)}`;
}
function S(e) {
  return new Map(e.map(e => [e.id, e]));
}
function zt(e) {
  let t = S(e.interceptions);
  return {
    graphVersion: e.graphVersion,
    segmentGraph: {
      routes: S(e.routes.map(e => ({
        ...e,
        id: e.id ?? Rt(e.patternParts)
      }))),
      layouts: S(e.layouts),
      slotBindings: S(e.slotBindings),
      interceptions: t,
      interceptionsBySlotId: new Map(e.interceptionsBySlotId.map(([e, n]) => [e, n.flatMap(e => t.get(e) ?? [])])),
      rootBoundaries: S(e.rootBoundaries)
    }
  };
}
function C(e) {
  return typeof e == `object` && !!e && !Array.isArray(e);
}
var Bt = `__VINEXT_RSC_FORM_STATE__`;
var Vt = Symbol.for(`vinext.navigationRuntime`);
var Ht = [`interceptions`, `interceptionsBySlotId`, `layouts`, `rootBoundaries`, `routes`, `slotBindings`];
function Ut() {
  return {
    bootstrap: {
      routeManifest: null,
      rsc: undefined
    },
    functions: {}
  };
}
function Wt() {
  return window;
}
function Gt(e) {
  if (C(e)) {
    return w(Reflect.get(e, `clearNavigationCaches`)) && w(Reflect.get(e, `commitHashNavigation`)) && w(Reflect.get(e, `navigateExternal`)) && w(Reflect.get(e, `navigate`)) && w(Reflect.get(e, `getPrefetchRouterState`)) && w(Reflect.get(e, `notifyLinkNavigationStart`)) && w(Reflect.get(e, `pingVisibleLinks`)) && w(Reflect.get(e, `preparePrefetchResponse`)) && w(Reflect.get(e, `readVisitedResponseForFullPrefetch`)) && w(Reflect.get(e, `claimCurrentHistoryTreeSnapshot`)) && w(Reflect.get(e, `commitAppOwnedHistoryStateWrite`)) && w(Reflect.get(e, `discardPendingNavigation`)) && w(Reflect.get(e, `flushCommittingNavigationUrl`)) && w(Reflect.get(e, `loadRouteManifest`));
  } else {
    return false;
  }
}
function Kt(e) {
  return typeof e == `string` || Array.isArray(e) && e.length === 2 && e[0] === 3 && typeof e[1] == `string`;
}
function qt(e) {
  if (!C(e)) {
    return false;
  }
  let t = Reflect.get(e, `pathname`);
  let n = Reflect.get(e, `searchParams`);
  return typeof t == `string` && Array.isArray(n) && n.every(e => Array.isArray(e) && e.length === 2 && typeof e[0] == `string` && typeof e[1] == `string`);
}
function Jt(e) {
  if (C(e)) {
    return Object.values(e).every(e => typeof e == `string` || Array.isArray(e) && e.every(e => typeof e == `string`));
  } else {
    return false;
  }
}
function Yt(e) {
  if (!C(e)) {
    return false;
  }
  let t = Reflect.get(e, `compatibilityId`);
  let n = Reflect.get(e, `done`);
  let r = Reflect.get(e, `dynamicStaleTimeSeconds`);
  let i = Reflect.get(e, `initialCacheKind`);
  let a = Reflect.get(e, `searchParamsFromBrowser`);
  let o = Reflect.get(e, `nav`);
  let s = Reflect.get(e, `params`);
  let c = Reflect.get(e, `renderedSearch`);
  let l = Reflect.get(e, `rsc`);
  let u = Reflect.get(e, `staleTimeSeconds`);
  return (t === undefined || typeof t == `string`) && (n === undefined || typeof n == `boolean`) && Xt(r) && (i === undefined || i === `dynamic` || i === `static`) && (a === undefined || typeof a == `boolean`) && (o === undefined || qt(o)) && (s === undefined || Jt(s)) && (c === undefined || typeof c == `string`) && Array.isArray(l) && l.every(Kt) && Xt(u);
}
function Xt(e) {
  return e === undefined || typeof e == `number` && Number.isFinite(e) && e >= 0;
}
function Zt(e) {
  return Array.isArray(e) && e.every(e => typeof e == `string`);
}
function Qt(e) {
  return e === null || typeof e == `string`;
}
function $t(e) {
  if (C(e)) {
    return typeof e.id == `string` && Zt(e.sourcePatternParts) && Zt(e.targetPatternParts) && typeof e.slotId == `string` && Qt(e.ownerLayoutId) && Qt(e.targetRouteId);
  } else {
    return false;
  }
}
function en(e) {
  return Array.isArray(e) && e.every($t);
}
function tn(e) {
  if (!C(e)) {
    return false;
  }
  let t = Reflect.get(e, `graphVersion`);
  let n = Reflect.get(e, `segmentGraph`);
  if (typeof t != `string` || !C(n)) {
    return false;
  }
  let r = Reflect.get(n, `interceptions`);
  let i = Reflect.get(n, `interceptionsBySlotId`);
  if (!Ht.every(e => Reflect.get(n, e) instanceof Map) || !(r instanceof Map) || !(i instanceof Map)) {
    return false;
  }
  for (let e of r.values()) {
    if (!$t(e)) {
      return false;
    }
  }
  for (let e of i.values()) {
    if (!en(e)) {
      return false;
    }
  }
  return true;
}
function nn(e) {
  if (!C(e)) {
    return false;
  }
  let t = Reflect.get(e, `routeManifest`);
  let n = Reflect.get(e, `rsc`);
  return (t === null || tn(t)) && (n === undefined || Yt(n));
}
function rn(e) {
  if (!C(e) || !(`bootstrap` in e) || !(`functions` in e)) {
    return false;
  }
  let {
    bootstrap: t,
    functions: n
  } = e;
  return nn(t) && Gt(n);
}
function w(e) {
  return e === undefined || typeof e == `function`;
}
function T() {
  let e = Wt();
  if (e === null) {
    return null;
  }
  let t = Reflect.get(e, Vt);
  if (rn(t)) {
    return t;
  } else {
    return null;
  }
}
function an() {
  let e = Wt();
  if (e === null) {
    return Ut();
  }
  let t = Reflect.get(e, Vt);
  let n = rn(t) ? t : Ut();
  Reflect.set(e, Vt, n);
  return n;
}
function on(e) {
  let t = an();
  t.bootstrap = {
    ...t.bootstrap,
    ...e
  };
  return t;
}
function sn(e) {
  let t = an();
  t.functions = {
    ...t.functions,
    ...e
  };
  return t;
}
function cn() {
  return ln(an());
}
function ln(e) {
  let t = e.bootstrap.rsc;
  if (t === undefined) {
    let t = {
      rsc: []
    };
    e.bootstrap.rsc = t;
    return t;
  }
  return t;
}
function un(e) {
  let t = false;
  let n = false;
  let r = null;
  return () => t ? null : (r ??= e().then(({
    default: e
  }) => {
    on({
      routeManifest: e === null ? null : zt(e)
    });
    t = true;
    return true;
  }).catch(e => {
    r = null;
    if (!n) {
      n = true;
      console.error(`[vinext] Failed to load the App Router route manifest:`, e);
    }
    return false;
  }), r);
}
function dn() {
  return T()?.functions.loadRouteManifest?.() ?? null;
}
function fn() {
  return typeof T()?.functions.navigate == `function`;
}
var pn = `Next-Router-State-Tree`;
var E = `Next-Router-Prefetch`;
var mn = `Next-Router-Segment-Prefetch`;
var hn = `Next-Url`;
var gn = `X-Vinext-Interception-Context`;
var _n = `X-Vinext-Interception-Id`;
var vn = `X-Vinext-Mounted-Slots`;
var yn = `X-Vinext-Rsc-Render-Mode`;
var bn = `X-Vinext-Rsc-State-Fingerprint`;
var xn = [`RSC`, pn, E, mn, hn, gn, _n, vn, yn, bn].join(`, `);
new Set(xn.split(`,`).map(e => e.trim().toLowerCase()));
var Sn = `1.4.5`;
function Cn(e) {
  let t = window.next;
  if (t) {
    if (e.version !== undefined) {
      t.version = e.version;
    }
    if (e.appDir !== undefined) {
      t.appDir = e.appDir;
    }
    if (e.router !== undefined) {
      t.router = e.router;
    }
    if (e.__pendingUrl !== undefined) {
      t.__pendingUrl = e.__pendingUrl;
    }
    if (e.__internal_src_page !== undefined) {
      t.__internal_src_page = e.__internal_src_page;
    }
  } else {
    window.next = {
      version: e.version ?? Sn,
      ...e
    };
  }
}
function wn(e) {
  Cn({});
  if (e === null) {
    delete window.next?.__internal_src_page;
    return;
  }
  let t = window.next;
  if (t) {
    t.__internal_src_page = e;
  }
}
function Tn() {
  return window.next?.__pendingUrl ?? null;
}
function En(e) {
  let t = Tn();
  if (t === null) {
    return null;
  } else if (t.href === new URL(e, window.location.href).href) {
    return t;
  } else {
    return null;
  }
}
function Dn(e) {
  if (window.next?.__pendingUrl !== undefined) {
    if (e instanceof URL) {
      if (window.next.__pendingUrl !== e) {
        return;
      }
    } else if (e !== undefined && window.next.__pendingUrl.href !== new URL(e, window.location.href).href) {
      return;
    }
    delete window.next.__pendingUrl;
  }
}
function On(e) {
  return false;
}
function kn() {
  return () => {};
}
function An(e, t) {
  return `slot:${e}:${t}`;
}
function jn(e) {
  if (!e.startsWith(`slot:`)) {
    return false;
  }
  let t = e.slice(5);
  let n = t.indexOf(`:`);
  return n > 0 && t.charCodeAt(n + 1) === 47;
}
function Mn(e) {
  let t = e.indexOf(`\0`);
  let n = t === -1 ? e : e.slice(0, t);
  if (n.startsWith(`/`)) {
    return {
      interceptionContext: t === -1 ? null : e.slice(t + 1),
      path: n
    };
  } else {
    return null;
  }
}
function Nn(e) {
  if (e.startsWith(`/`)) {
    return e;
  } else {
    return null;
  }
}
function D(e) {
  if (e.startsWith(`route:`)) {
    let t = Mn(e.slice(6));
    if (t) {
      return {
        interceptionContext: t.interceptionContext,
        kind: `route`,
        path: t.path
      };
    } else {
      return null;
    }
  }
  if (e.startsWith(`page:`)) {
    let t = Mn(e.slice(5));
    if (t) {
      return {
        interceptionContext: t.interceptionContext,
        kind: `page`,
        path: t.path
      };
    } else {
      return null;
    }
  }
  if (e.startsWith(`layout:`)) {
    let t = Nn(e.slice(7));
    if (t) {
      return {
        kind: `layout`,
        treePath: t
      };
    } else {
      return null;
    }
  }
  if (e.startsWith(`template:`)) {
    let t = Nn(e.slice(9));
    if (t) {
      return {
        kind: `template`,
        treePath: t
      };
    } else {
      return null;
    }
  }
  if (e.startsWith(`slot:`)) {
    let t = e.slice(5);
    let n = t.indexOf(`:`);
    if (n <= 0) {
      return null;
    }
    let r = Nn(t.slice(n + 1));
    if (r) {
      return {
        kind: `slot`,
        name: t.slice(0, n),
        treePath: r
      };
    } else {
      return null;
    }
  }
  return null;
}
var Pn = 4096;
var Fn = 256;
var In = 16;
function Ln(e) {
  if (e.length === 0 || e.length > Fn) {
    return false;
  } else {
    return jn(e);
  }
}
function Rn(e) {
  if (!e || e.length > Pn) {
    return null;
  }
  let t = e.split(/\s+/).filter(e => e && Ln(e));
  if (t.length === 0) {
    return null;
  } else {
    return Array.from(new Set(t)).sort().slice(0, In).join(` `) || null;
  }
}
function zn(e) {
  let t = 2166136261;
  for (let n = 0; n < e.length; n++) {
    t ^= e.charCodeAt(n);
    t = t * 16777619 >>> 0;
  }
  let n = 84696351;
  for (let t = 0; t < e.length; t++) {
    n ^= e.charCodeAt(t);
    n = n * 16777619 >>> 0;
  }
  return t.toString(16).padStart(8, `0`) + n.toString(16).padStart(8, `0`);
}
function Bn(e = {}) {
  return {
    schemaVersion: 1,
    graphVersion: e.graphVersion ?? null,
    deploymentVersion: e.deploymentVersion ?? null,
    appElementsSchemaVersion: 1,
    rscPayloadSchemaVersion: 1,
    rootBoundaryId: e.rootBoundaryId ?? null,
    renderEpoch: e.renderEpoch ?? null
  };
}
function Vn(e) {
  return typeof e == `string` || e === null;
}
function Hn(e) {
  return e.schemaVersion === 1 && e.appElementsSchemaVersion === 1 && e.rscPayloadSchemaVersion === 1;
}
function Un(e) {
  if (!C(e) || !Hn(e) || !Vn(e.graphVersion) || !Vn(e.deploymentVersion) || !Vn(e.rootBoundaryId) || !Vn(e.renderEpoch)) {
    return null;
  } else {
    return {
      schemaVersion: 1,
      graphVersion: e.graphVersion,
      deploymentVersion: e.deploymentVersion,
      appElementsSchemaVersion: 1,
      rscPayloadSchemaVersion: 1,
      rootBoundaryId: e.rootBoundaryId,
      renderEpoch: e.renderEpoch
    };
  }
}
function Wn(e) {
  return e.startsWith(`/`) && !e.startsWith(`//`) && !e.includes(`?`) && !e.includes(`#`) && !e.includes(`\\`) && !e.includes(`\0`);
}
function Gn(e) {
  if (e === `/` || e.length > 1 && e[0] === `/` && !e.includes(`//`) && !e.includes(`/./`) && !e.includes(`/../`) && !e.endsWith(`/.`) && !e.endsWith(`/..`)) {
    return e;
  }
  let t = e.split(`/`);
  let n = [];
  for (let e of t) {
    if (e !== `` && e !== `.`) {
      if (e === `..`) {
        n.pop();
      } else {
        n.push(e);
      }
    }
  }
  return `/${n.join(`/`)}`;
}
var Kn = (e, t) => e < t ? -1 : +(e > t);
var qn = `\0`;
var Jn = `__sourcePage`;
var Yn = `__artifactCompatibility`;
var Xn = `__cacheEntryReuseProof`;
var Zn = `__dynamicStaleTime`;
var Qn = `__interception`;
var $n = `__interceptionContext`;
var er = `__layoutIds`;
var tr = `__route`;
var nr = `__rootLayout`;
var rr = `__skippedLayoutIds`;
var ir = `__srcPage`;
var ar = `__slotBindings`;
var O = `__bfcacheSegmentIdentities`;
var or = `__VINEXT_UNMATCHED_SLOT__`;
var sr = Symbol.for(`vinext.unmatchedSlot`);
function cr(e) {
  return new Set(e);
}
var lr = cr(`CP_CACHE_ENTRY_PROOF_MISSING.CP_MODEL_DISABLED.CP_ARTIFACT_COMPATIBILITY_INCOMPATIBLE.CP_ARTIFACT_COMPATIBILITY_UNKNOWN.CP_DIMENSION_COUNT_EXCEEDED.CP_DIMENSION_NAME_MISSING.CP_DIMENSION_NAME_TOO_LONG.CP_DIMENSION_VALUE_COUNT_EXCEEDED.CP_DIMENSION_VALUE_TOO_LONG.CP_DIMENSION_VALUES_MISSING.CP_ENCODED_VARIANT_TOO_LONG.CP_INVALID_VARIANT_BUDGET.CP_ROUTE_VARIANT_BUDGET_ROUTE_MISMATCH.CP_ROUTE_VARIANT_CEILING_EXCEEDED.CP_UNSAFE_PUBLIC_DIMENSION.CP_BOUNDARY_OUTCOME_MISMATCH.CP_BOUNDARY_OUTCOME_UNKNOWN.CP_PRIVATE_DYNAMIC_DOWNGRADE.CP_STATIC_LAYOUT_CANDIDATE_OUTPUT_KIND.CP_STATIC_LAYOUT_CURRENT_OUTPUT_KIND.CP_STATIC_LAYOUT_ID_MISMATCH.CP_STATIC_LAYOUT_OBSERVATION_OUTPUT_KIND.CP_STATIC_LAYOUT_OBSERVATION_OUTPUT_MISMATCH.CP_STATIC_LAYOUT_PRIVATE_DYNAMIC_DOWNGRADE.CP_STATIC_LAYOUT_REQUEST_API_OBSERVED.CP_STATIC_LAYOUT_REQUEST_API_UNKNOWN.CP_STATIC_LAYOUT_ROOT_BOUNDARY_MISMATCH.CP_STATIC_LAYOUT_ROOT_BOUNDARY_UNKNOWN.CP_STATIC_LAYOUT_VARIANT_DIMENSION_UNPROVEN`.split(`.`));
var k = Kn;
function ur(e, t) {
  return k(e.slotId, t.slotId);
}
function dr(e, t = {}) {
  let n = t.layoutIds ? new Set(t.layoutIds) : null;
  let r = new Set();
  let i = [];
  for (let t of e) {
    if (r.has(t.slotId)) {
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: duplicate slot id`);
    }
    r.add(t.slotId);
    if (n && t.ownerLayoutId !== null && !n.has(t.ownerLayoutId)) {
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: owner layout id missing from __layoutIds`);
    }
    i.push({
      ...t
    });
  }
  return i.sort(ur);
}
function fr(e, t) {
  if (t === null) {
    return e;
  } else {
    return `${e}${qn}${t}`;
  }
}
function pr(e, t) {
  return fr(`route:${e}`, t);
}
function mr(e, t) {
  return fr(`page:${e}`, t);
}
function hr(e) {
  return `layout:${e}`;
}
function gr(e) {
  return `template:${e}`;
}
function _r(e, t) {
  return fr(e, t);
}
function vr(e) {
  let t = e.indexOf(qn);
  if (t === -1) {
    return {
      interceptionContext: null,
      rscUrl: e
    };
  } else {
    return {
      interceptionContext: e.slice(t + 1),
      rscUrl: e.slice(0, t)
    };
  }
}
function yr(e) {
  let t = D(e)?.kind;
  return t === `page` || t === `layout` || t === `template` || t === `slot`;
}
function br(e) {
  return Array.isArray(e) && e.length > 0 && e.every(e => typeof e == `string` && e.length > 0 && !e.includes(`/`));
}
function xr(e) {
  if (typeof e != `string` || !e.startsWith(`/`)) {
    return null;
  }
  let t = e.slice(1).split(`/`);
  if (br(t)) {
    return t;
  } else {
    return null;
  }
}
function Sr(e) {
  let t = [...(e.layoutIds ?? [])];
  let n = xr(e.sourcePage);
  let r = {
    [tr]: e.routeId,
    [$n]: e.interceptionContext,
    [er]: t,
    [nr]: e.rootLayoutTreePath,
    ...(e.dynamicStaleTimeSeconds === undefined ? {} : {
      [Zn]: e.dynamicStaleTimeSeconds
    }),
    ...(e.bfcacheSegmentIdentities && Object.keys(e.bfcacheSegmentIdentities).length > 0 ? {
      [O]: e.bfcacheSegmentIdentities
    } : {}),
    ...(n === null ? {} : {
      [ir]: n
    })
  };
  let i = e.interception ? {
    ...r,
    [Qn]: e.interception
  } : r;
  if (e.slotBindings && e.slotBindings.length > 0) {
    return {
      ...i,
      [ar]: dr(e.slotBindings, {
        layoutIds: t
      })
    };
  } else {
    return i;
  }
}
function Cr(e) {
  let t = false;
  for (let [n, r] of Object.entries(e)) {
    if (jn(n) && r === `__VINEXT_UNMATCHED_SLOT__`) {
      t = true;
      break;
    }
  }
  if (!t) {
    return e;
  }
  let n = {};
  for (let [t, r] of Object.entries(e)) {
    n[t] = jn(t) && r === `__VINEXT_UNMATCHED_SLOT__` ? sr : r;
  }
  return n;
}
function wr(e, t) {
  if (e === undefined) {
    return [];
  }
  if (!Array.isArray(e)) {
    throw Error(`[vinext] Invalid ${t} in App Router payload: expected layout id string[]`);
  }
  let n = [];
  for (let r of e) {
    if (typeof r != `string`) {
      throw Error(`[vinext] Invalid ${t} in App Router payload: expected layout id string[]`);
    }
    if (D(r)?.kind !== `layout`) {
      throw Error(`[vinext] Invalid ${t} in App Router payload: expected layout ids`);
    }
    n.push(r);
  }
  return n;
}
function Tr(e) {
  return wr(e, er);
}
function Er(e) {
  return wr(e, rr);
}
function Dr(e) {
  return e === `active` || e === "default" || e === `unmatched`;
}
function Or(e, t = {}) {
  if (e === undefined) {
    return [];
  }
  if (!Array.isArray(e)) {
    throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected array`);
  }
  let n = [];
  for (let t of e) {
    if (!C(t)) {
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected objects`);
    }
    let e = t.slotId;
    if (typeof e != `string` || D(e)?.kind !== `slot`) {
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected slot ids`);
    }
    let r = t.ownerLayoutId;
    if (r !== null && (typeof r != `string` || D(r)?.kind !== `layout`)) {
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected owner layout ids`);
    }
    let i = t.state;
    if (!Dr(i)) {
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected state`);
    }
    let a = t.activeRouteId;
    if (a != null && (typeof a != `string` || D(a)?.kind !== `route`)) {
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected route ids`);
    }
    let o = t.interceptionId;
    if (o != null && (typeof o != `string` || o.length === 0)) {
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected interception ids`);
    }
    let s = t.interceptionSourceMatchedUrl;
    if (s != null && typeof s != `string`) {
      throw Error(`[vinext] Invalid __slotBindings in App Router payload: expected interception source URLs`);
    }
    if (typeof s == `string`) {
      kr(s);
    }
    n.push({
      ...(a === undefined ? {} : {
        activeRouteId: a
      }),
      ...(o === undefined ? {} : {
        interceptionId: o
      }),
      ...(s === undefined ? {} : {
        interceptionSourceMatchedUrl: s
      }),
      ownerLayoutId: r,
      slotId: e,
      state: i
    });
  }
  return dr(n, t);
}
function A(e, t) {
  let n = e[t];
  if (typeof n != `string`) {
    throw Error(`[vinext] Invalid __interception in App Router payload: expected strings`);
  }
  return n;
}
function kr(e) {
  if (!Wn(e)) {
    throw Error(`[vinext] Invalid __interception in App Router payload: expected path URLs`);
  }
  return e;
}
function Ar(e, t) {
  let n = D(e);
  if (n?.kind !== `route` || n.path !== t || n.interceptionContext !== null) {
    throw Error(`[vinext] Invalid __interception in App Router payload: expected route ids`);
  }
  return e;
}
function jr(e) {
  if (D(e)?.kind !== `slot`) {
    throw Error(`[vinext] Invalid __interception in App Router payload: expected slot id`);
  }
  return e;
}
function Mr(e) {
  if (e == null) {
    return null;
  }
  if (!C(e)) {
    throw Error(`[vinext] Invalid __interception in App Router payload: expected object`);
  }
  let t = kr(A(e, `sourceMatchedUrl`));
  let n = kr(A(e, `targetMatchedUrl`));
  return {
    sourceMatchedUrl: t,
    sourceRouteId: Ar(A(e, `sourceRouteId`), t),
    slotId: jr(A(e, `slotId`)),
    targetMatchedUrl: n,
    targetRouteId: Ar(A(e, `targetRouteId`), n)
  };
}
function Nr(e) {
  return typeof e == `object` && !!e && !Array.isArray(e) && !(0, a.isValidElement)(e);
}
function Pr(e) {
  if (!Nr(e.element)) {
    return e.element;
  }
  let t = {};
  for (let [n, r] of Object.entries(e.element)) {
    t[n] = r === sr ? or : r;
  }
  t[Yn] = e.artifactCompatibility ?? Bn();
  if (e.cacheEntryReuseProof) {
    t[Xn] = e.cacheEntryReuseProof;
  }
  if (e.dynamicStaleTimeSeconds !== undefined) {
    t[Zn] = e.dynamicStaleTimeSeconds;
  }
  return t;
}
function Fr(e) {
  if (e === undefined) {
    return Bn();
  } else {
    return Un(e) ?? Bn();
  }
}
function Ir(e) {
  if (e == null) {
    return null;
  } else if (typeof e == `string`) {
    if (e.startsWith(`/`)) {
      return e;
    } else {
      return null;
    }
  } else if (br(e)) {
    return `/${e.join(`/`)}`;
  } else {
    return null;
  }
}
function Lr() {
  return {
    kind: `runtime-cache-entry`,
    decision: null
  };
}
function Rr(e) {
  return typeof e == `string` && lr.has(e);
}
function zr(e) {
  return e === `renderFresh` || e === `privateUncacheable`;
}
function Br(e) {
  return e === `affectedOutput` || e === `route`;
}
function Vr(e) {
  if (e === undefined) {
    return null;
  }
  if (!C(e) || e.kind !== `runtime-cache-entry`) {
    return Lr();
  }
  let t = e.decision;
  if (t === null || !C(t)) {
    return Lr();
  } else if (t.kind === `reuse` && t.canReuse === true && t.code === `CP_STATIC_LAYOUT_REUSE_PROVEN` && t.reuseClass === `static-layout`) {
    return {
      kind: `runtime-cache-entry`,
      decision: {
        canReuse: true,
        code: t.code,
        kind: `reuse`,
        reuseClass: t.reuseClass
      }
    };
  } else if (t.kind === `reject` && t.canReuse === false && Rr(t.code) && zr(t.mode) && Br(t.scope)) {
    return {
      kind: `runtime-cache-entry`,
      decision: {
        canReuse: false,
        code: t.code,
        kind: `reject`,
        mode: t.mode,
        scope: t.scope
      }
    };
  } else {
    return Lr();
  }
}
function Hr(e) {
  if (!C(e)) {
    return {};
  }
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (typeof r != `string` || !yr(n)) {
      return {};
    }
    t[n] = r;
  }
  return t;
}
function Ur(e) {
  let t = e[tr];
  if (typeof t != `string`) {
    throw Error(`[vinext] Missing __route string in App Router payload`);
  }
  let n = e[$n];
  if (n != null && typeof n != `string`) {
    throw Error(`[vinext] Invalid __interceptionContext in App Router payload`);
  }
  let r = e[nr];
  if (r === undefined) {
    throw Error(`[vinext] Missing __rootLayout key in App Router payload`);
  }
  if (r !== null && typeof r != `string`) {
    throw Error(`[vinext] Invalid __rootLayout in App Router payload: expected string or null`);
  }
  let i = Tr(e[er]);
  let a = Er(e[rr]);
  let o = Or(e[ar], {
    layoutIds: i
  });
  let s = Mr(e[Qn]);
  let c = Fr(e[Yn]);
  let l = Vr(e[Xn]);
  let u = e[Zn];
  let d = typeof u == `number` && Number.isFinite(u) && u >= 0 ? u : undefined;
  let f = Object.hasOwn(e, `__srcPage`) ? Ir(e[ir]) : Ir(e[Jn]);
  let p = Hr(e[O]);
  return {
    artifactCompatibility: c,
    ...(l ? {
      cacheEntryReuseProof: l
    } : {}),
    ...(d === undefined ? {} : {
      dynamicStaleTimeSeconds: d
    }),
    interception: s,
    interceptionContext: n ?? null,
    layoutIds: i,
    routeId: t,
    rootLayoutTreePath: r,
    bfcacheSegmentIdentities: p,
    skippedLayoutIds: a,
    slotBindings: o,
    sourcePage: f
  };
}
var j = {
  keys: {
    artifactCompatibility: Yn,
    cacheEntryReuseProof: Xn,
    dynamicStaleTime: Zn,
    interception: Qn,
    interceptionContext: $n,
    layoutIds: er,
    rootLayout: nr,
    route: tr,
    bfcacheSegmentIdentities: O,
    skippedLayoutIds: rr,
    slotBindings: ar,
    sourcePageSegments: ir
  },
  unmatchedSlotValue: or,
  createMetadataEntries: Sr,
  decode: Cr,
  decodeCacheKey: vr,
  encodeCacheKey: _r,
  encodeLayoutId: hr,
  encodeOutgoingPayload: Pr,
  encodePageId: mr,
  encodeRouteId: pr,
  encodeSlotId: An,
  encodeTemplateId: gr,
  isSlotId: jn,
  parseElementKey: D,
  readMetadata: Ur
};
var Wr = `__optimisticStateKeyRebinder`;
function Gr(e, t) {
  e[Wr] = t;
}
function Kr(e) {
  let t = Reflect.get(e, Wr);
  if (typeof t == `function`) {
    return t;
  } else {
    return null;
  }
}
function qr(e) {
  return Object.keys(e).filter(t => {
    let n = e[t];
    let r = j.parseElementKey(t);
    return r?.kind === `slot` && r.name !== `children` && n != null && n !== sr;
  }).sort();
}
function Jr(e) {
  return Rn(qr(e).join(` `));
}
function Yr(e, t) {
  return t ?? e;
}
function Xr(e, t) {
  let n = Zr(e, t);
  if (n) {
    At(n);
  }
  return n;
}
function Zr(e, t) {
  let n = Object.create(null);
  function r(i, a) {
    if (a === t.length) {
      return i === e.length;
    }
    let o = t[a];
    if (o.startsWith(`:`) && (o.endsWith(`+`) || o.endsWith(`*`))) {
      let t = o.slice(1, -1);
      let s = +!!o.endsWith(`+`);
      for (let o = i + s; o <= e.length; o++) {
        let s = e.slice(i, o);
        if (s.length > 0) {
          n[t] = s;
        } else {
          delete n[t];
        }
        if (r(o, a + 1)) {
          return true;
        }
      }
      delete n[t];
      return false;
    }
    if (o.startsWith(`:`)) {
      if (i >= e.length) {
        return false;
      }
      let t = o.slice(1);
      n[t] = e[i];
      if (r(i + 1, a + 1)) {
        return true;
      } else {
        delete n[t];
        return false;
      }
    }
    if (i >= e.length || e[i] !== o) {
      return false;
    } else {
      return r(i + 1, a + 1);
    }
  }
  if (r(0, 0)) {
    return n;
  } else {
    return null;
  }
}
function Qr(e, t) {
  let n = Object.create(null);
  let r = 0;
  for (let i of e) {
    if (!i.startsWith(`:`)) {
      r += 1;
      continue;
    }
    let e = i.endsWith(`+`) || i.endsWith(`*`);
    let a = i.slice(1, e ? -1 : undefined);
    if (e) {
      let e = t.slice(r);
      if (e.length > 0) {
        n[a] = [...e];
      }
      break;
    }
    let o = t[r];
    if (o !== undefined) {
      n[a] = o;
    }
    r += 1;
  }
  return n;
}
function $r(e, t) {
  let n = 0;
  for (let r = 0; r < t.length; r++) {
    let i = t[r];
    let a = r === t.length - 1;
    if (i.startsWith(`:`) && i.endsWith(`+`)) {
      return a && e.length - n >= 1;
    }
    if (i.startsWith(`:`) && i.endsWith(`*`)) {
      return a;
    }
    if (n >= e.length) {
      return false;
    }
    if (i.startsWith(`:`)) {
      n++;
    } else {
      if (e[n] !== i) {
        return false;
      }
      n++;
    }
  }
  return true;
}
function ei(e, t) {
  function n(r, i) {
    if (i === t.length) {
      return r === e.length;
    }
    let a = t[i];
    if (a.startsWith(`:`) && (a.endsWith(`+`) || a.endsWith(`*`))) {
      let t = +!!a.endsWith(`+`);
      for (let a = r + t; a <= e.length; a++) {
        if (n(a, i + 1)) {
          return true;
        }
      }
      return false;
    }
    if (a.startsWith(`:`)) {
      return n(r, i + 1) || r < e.length && n(r + 1, i + 1);
    } else if (r >= e.length || e[r] !== a) {
      return false;
    } else {
      return n(r + 1, i + 1);
    }
  }
  return n(0, 0);
}
function ti(e) {
  if (e.routeManifest === null) {
    return null;
  }
  let t = p(e.currentPathname, e.basePath);
  let n = p(e.targetPathname, e.basePath);
  let r = b(t);
  let i = b(n);
  for (let n of e.routeManifest.segmentGraph.interceptions.values()) {
    if ($r(r, n.sourcePatternParts) && Xr(i, n.targetPatternParts) !== null) {
      return t;
    }
  }
  return null;
}
function ni(e) {
  if (e.routeManifest === null) {
    return null;
  }
  let t = p(e.currentPathname, e.basePath);
  let n = e.currentMatchedPathname ? p(e.currentMatchedPathname, e.basePath) : null;
  let r = p(e.targetPathname, e.basePath);
  let i = b(t);
  let a = n ? b(n) : null;
  let o = b(r);
  for (let r of e.routeManifest.segmentGraph.interceptions.values()) {
    if (ei(o, r.targetPatternParts)) {
      if ($r(i, r.sourcePatternParts)) {
        return t;
      }
      if (n !== null && a !== null && $r(a, r.sourcePatternParts)) {
        return ri(n);
      }
    }
  }
  return null;
}
function ri(e) {
  if (/%25(?:2f|23|3f|5c)/i.test(e)) {
    return null;
  }
  let t;
  try {
    t = new URL(e.replace(/%(?!(?:25)?(?:2f|23|3f|5c))/gi, `%25`), `http://n`).pathname;
  } catch {
    return null;
  }
  if (Gn(Ot(t)) === e) {
    return t;
  } else {
    return null;
  }
}
function ii(e) {
  return typeof e == `number` && Number.isSafeInteger(e) && e >= 0;
}
var ai = `slot:\0vinext_bfcache_segment_`;
function oi(e) {
  let t = encodeURIComponent(e);
  return `${ai}${t.length}_${t}_`;
}
function si(e, t) {
  return `${oi(e)}${t}:/`;
}
function ci(e) {
  return e.startsWith(ai);
}
function li(e, t) {
  return ci(e) && e.startsWith(oi(t));
}
function ui(e) {
  switch (e.kind) {
    case `page`:
    case `layout`:
    case `template`:
      return JSON.stringify([e.kind, e.graphId, e.rootBoundaryId, e.boundSegmentKey]);
    case `slot-shell`:
      return JSON.stringify([`slot-shell`, e.slotGraphId, e.ownerLayoutGraphId, e.boundOwnerSegmentKey]);
    case `slot`:
      return JSON.stringify([`slot`, e.slotGraphId, e.ownerLayoutGraphId, e.state, e.activeRouteGraphId, e.interceptionTargetRouteGraphId, e.boundSegmentKey]);
    case `sibling-interception`:
      return JSON.stringify([`sibling-interception`, e.sourceRouteGraphId, e.interceptionGraphId, e.rootBoundaryId, e.boundSegmentKey, e.sourceBoundSegmentKey]);
  }
}
function di(e) {
  let t = j.parseElementKey(e);
  return t?.kind === `layout` || t?.kind === `page` || t?.kind === `slot` || t?.kind === `template`;
}
var fi = 0;
function pi(e) {
  let t = /^_b_(\d+)_$/.exec(e);
  if (t) {
    fi = Math.max(fi, Number(t[1]));
  }
}
function mi() {
  fi += 1;
  return `_b_${fi}_`;
}
function hi(e) {
  try {
    return j.readMetadata(e);
  } catch {
    return null;
  }
}
function gi(e, t) {
  let n = new Set(Object.keys(e));
  let r = t === undefined ? hi(e) : t;
  for (let e of r?.layoutIds ?? []) {
    n.add(e);
  }
  for (let e of Object.keys(r?.bfcacheSegmentIdentities ?? {})) {
    n.add(e);
  }
  return Array.from(n).filter(di);
}
function _i(e) {
  let t = {};
  for (let n of gi(e)) {
    t[n] = `0`;
  }
  return t;
}
function vi(e) {
  return hi(e.elements)?.bfcacheSegmentIdentities ?? {};
}
function yi(e) {
  let t = e.reuseCurrent === false ? {} : e.current;
  for (let e of Object.values(t)) {
    pi(e);
  }
  for (let t of Object.values(e.restored ?? {})) {
    pi(t);
  }
  let n = hi(e.currentElements);
  let r = hi(e.elements);
  let i = {};
  for (let a of gi(e.elements, r)) {
    let o = n?.bfcacheSegmentIdentities[a];
    let s = r?.bfcacheSegmentIdentities[a];
    let c = o !== undefined && o === s ? t[a] : undefined;
    let l = (s === undefined ? undefined : e.restored?.[a]) ?? c ?? mi();
    i[a] = l;
    pi(l);
  }
  return i;
}
function bi(e) {
  let t = {};
  let n = new Set(e.preservePreviousIds ?? []);
  let r = new Set(e.preservedElementIds ?? []);
  let i = [...r];
  let a = vi({
    elements: e.elements
  });
  for (let o of gi(e.elements)) {
    let s = i.some(e => li(o, e));
    let c = (r.has(o) || s) && a[o] === undefined ? mi() : n.has(o) || s ? e.previous[o] ?? e.next[o] : e.next[o] ?? e.previous[o];
    if (c !== undefined) {
      t[o] = c;
      pi(c);
    }
  }
  return t;
}
var xi = `__vinext_previousNextUrl`;
var Si = `__vinext_historyIndex`;
var Ci = `__vinext_bfcacheIds`;
var wi = `__vinext_bfcacheVersion`;
var Ti = `__vinext_externalHistoryState`;
var Ei = `__vinext_treeSnapshotId`;
var M = `__vinext_treeSnapshotClaimed`;
var Di = `__vinext_activeRoutePaths`;
var Oi = class {
  #e;
  #t = new Map();
  constructor(e) {
    this.#e = e.maxEntries;
  }
  clear() {
    this.#t.clear();
  }
  remember(e) {
    if (e.historyIndex === null || (this.#t.delete(e.historyIndex), this.#t.set(e.historyIndex, {
      bfcacheVersion: e.bfcacheVersion,
      state: e.state
    }), this.#t.size <= this.#e)) {
      return;
    }
    let t = this.#t.keys().next().value;
    if (typeof t == `number`) {
      this.#t.delete(t);
    }
  }
  replaceState(e, t) {
    for (let n of this.#t.values()) {
      if (n.state === e) {
        n.state = t;
      }
    }
  }
  resolveRestore(e) {
    let t = P(e.historyState);
    if (t === null) {
      return {
        kind: `skip`,
        reason: `missing-history-index`,
        targetHistoryIndex: t
      };
    }
    let n = this.#t.get(t);
    if (n) {
      if (e.guarded) {
        return {
          kind: `skip`,
          reason: `guarded`,
          targetHistoryIndex: t
        };
      } else if (n.bfcacheVersion === e.currentBfcacheVersion) {
        return {
          kind: `restore`,
          state: n.state,
          targetHistoryIndex: t
        };
      } else {
        this.#t.delete(t);
        return {
          kind: `skip`,
          reason: `stale-bfcache-version`,
          targetHistoryIndex: t
        };
      }
    } else {
      return {
        kind: `skip`,
        reason: `missing-snapshot`,
        targetHistoryIndex: t
      };
    }
  }
};
var ki = class {
  #e;
  #t = 0;
  #n;
  constructor(e) {
    let t = qi(e.initialHistoryState);
    this.#e = t === null ? 0 : t + 1;
    this.#n = new Oi({
      maxEntries: e.maxHistoryStateSnapshots
    });
  }
  get currentBfcacheVersion() {
    return this.#e;
  }
  beginCacheInvalidationGuard() {
    this.#t += 1;
    let e = false;
    return () => {
      if (!e) {
        e = true;
        this.#t = Math.max(0, this.#t - 1);
      }
    };
  }
  isCacheInvalidationGuarded() {
    return this.#t > 0;
  }
  isCurrentBfcacheVersion(e) {
    return Ji(e, this.#e);
  }
  readCurrentBfcacheVersionHistoryIds(e) {
    if (this.isCacheInvalidationGuarded()) {
      return null;
    }
    let t = Ki(e);
    if (t === null) {
      return null;
    } else if (this.isCurrentBfcacheVersion(e)) {
      return t;
    } else {
      return null;
    }
  }
  #r() {
    this.#e += 1;
  }
  invalidateClientState() {
    this.#n.clear();
    this.#r();
  }
  rememberHistoryStateSnapshot(e) {
    this.#n.remember({
      bfcacheVersion: this.#e,
      historyIndex: e.historyIndex,
      state: e.state
    });
  }
  replaceHistoryStateSnapshots(e, t) {
    this.#n.replaceState(e, t);
  }
  resolveHistoryStateSnapshotRestore(e) {
    return this.#n.resolveRestore({
      currentBfcacheVersion: this.#e,
      guarded: this.isCacheInvalidationGuarded(),
      historyState: e
    });
  }
};
function Ai(e) {
  if (!e || typeof e != `object`) {
    return {};
  }
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    t[n] = r;
  }
  return t;
}
function N(e) {
  if (!e || typeof e != `object` || Array.isArray(e)) {
    return null;
  } else {
    return e;
  }
}
function ji(e, t) {
  let n = Ai(e);
  let r = t.bfcacheIds !== undefined && (t.bfcacheIds === null || Object.keys(t.bfcacheIds).length === 0);
  if (t.activeRoutePaths !== undefined) {
    if (t.activeRoutePaths === null || t.activeRoutePaths.length === 0) {
      delete n[Di];
    } else {
      n[Di] = [...new Set(t.activeRoutePaths)];
    }
  }
  if (t.previousNextUrl === null) {
    delete n[xi];
  } else {
    n[xi] = t.previousNextUrl;
  }
  if (t.traversalIndex !== undefined) {
    if (ii(t.traversalIndex)) {
      n[Si] = t.traversalIndex;
    } else {
      delete n[Si];
    }
  }
  if (t.bfcacheIds !== undefined) {
    if (r) {
      delete n[Ci];
      delete n[wi];
    } else {
      n[Ci] = {
        ...t.bfcacheIds
      };
    }
  }
  if (t.bfcacheVersion !== undefined) {
    if (r) {
      delete n[wi];
    } else if (ii(t.bfcacheVersion)) {
      n[wi] = t.bfcacheVersion;
    } else {
      delete n[wi];
    }
  }
  if (Object.keys(n).length > 0) {
    return n;
  } else {
    return null;
  }
}
function Mi(e, t) {
  let n = Gi(t);
  let r = P(t);
  let i = Ki(t);
  let a = qi(t);
  let o = Vi(t);
  return {
    ...ji(e, {
      activeRoutePaths: Ui(t),
      bfcacheIds: i,
      bfcacheVersion: i === null ? undefined : a,
      previousNextUrl: n,
      traversalIndex: r
    }),
    ...Ni(),
    ...(o === null ? {} : {
      [M]: true,
      [Ei]: o
    })
  };
}
function Ni() {
  return {
    [Ti]: true
  };
}
function Pi(e) {
  return N(e)?.[Ti] === true;
}
function Fi(e) {
  return !Pi(e) && P(e) !== null;
}
function Ii(e) {
  let t = Ai(e);
  delete t[Ti];
  if (Object.keys(t).length > 0) {
    return t;
  } else {
    return null;
  }
}
function Li(e, t) {
  let n = Ai(e);
  let r = Vi(n);
  if (Hi(t)) {
    n[Ei] = t;
    if (r !== t) {
      delete n[M];
    }
  } else {
    delete n[Ei];
    delete n[M];
  }
  if (Object.keys(n).length > 0) {
    return n;
  } else {
    return null;
  }
}
function Ri(e, t) {
  let n = Ai(e);
  if (t && Vi(n) !== null) {
    n[M] = true;
  } else {
    delete n[M];
  }
  if (Object.keys(n).length > 0) {
    return n;
  } else {
    return null;
  }
}
function zi(e) {
  return N(e)?.[M] === true;
}
function Bi(e) {
  return Li(e, null);
}
function Vi(e) {
  let t = N(e)?.[Ei];
  if (Hi(t)) {
    return t;
  } else {
    return null;
  }
}
function Hi(e) {
  return typeof e == `string` && e.length > 0;
}
function Ui(e) {
  let t = N(e)?.[Di];
  if (!Array.isArray(t)) {
    return null;
  }
  let n = [];
  for (let e of t) {
    if (typeof e != `string` || !e.startsWith(`/`) || e.startsWith(`//`) || e.includes(`?`) || e.includes(`#`) || e.includes(`\\`) || e.includes(`\0`)) {
      return null;
    }
    n.push(e);
  }
  if (n.length > 0) {
    return [...new Set(n)];
  } else {
    return null;
  }
}
function Wi(e) {
  let t = new Set();
  for (let n of e) {
    if (n.state !== `active` || n.activeRouteId == null) {
      continue;
    }
    let e = j.parseElementKey(n.activeRouteId);
    if (e?.kind === `route` && e.interceptionContext === null) {
      t.add(e.path);
    }
  }
  return [...t];
}
function Gi(e) {
  let t = N(e)?.[xi];
  if (typeof t == `string`) {
    return t;
  } else {
    return null;
  }
}
function Ki(e) {
  let t = N(e)?.[Ci];
  if (!t || typeof t != `object` || Array.isArray(t)) {
    return null;
  }
  let n = {};
  for (let [e, r] of Object.entries(t)) {
    if (!di(e) || typeof r != `string`) {
      return null;
    }
    n[e] = r;
  }
  return n;
}
function qi(e) {
  let t = N(e)?.[wi];
  if (ii(t)) {
    return t;
  } else {
    return null;
  }
}
function Ji(e, t) {
  let n = qi(e);
  return n !== null && n === t;
}
function Yi(e) {
  let t = Gi(e);
  let n = Ki(e);
  let r = qi(e);
  let i = Ui(e);
  if (t === null && n === null && i === null) {
    return null;
  } else {
    return ji(null, {
      activeRoutePaths: i,
      bfcacheIds: n,
      bfcacheVersion: n === null ? undefined : r,
      previousNextUrl: t
    });
  }
}
function P(e) {
  let t = N(e)?.[Si];
  if (ii(t)) {
    return t;
  } else {
    return null;
  }
}
function Xi(e) {
  let t = P(e.historyState);
  let n = `unknown`;
  if (e.currentHistoryIndex !== null && t !== null) {
    if (t < e.currentHistoryIndex) {
      n = `back`;
    } else if (t > e.currentHistoryIndex) {
      n = `forward`;
    }
  }
  return {
    direction: n,
    historyState: e.historyState,
    targetHistoryIndex: t
  };
}
function Zi(e) {
  return zn(JSON.stringify([e.pathAndSearch, e.routeId]));
}
var Qi = `navigation`;
var $i = `prefetch-empty`;
var ea = `prefetch-dynamic-shell`;
var ta = `prefetch-loading-shell`;
function na(e) {
  switch (e) {
    case $i:
      return $i;
    case ea:
      return ea;
    case ta:
      return ta;
    default:
      return Qi;
  }
}
var ra = `X-Vinext-Trace-Route`;
var ia = `X-Vinext-Trace-Error`;
var aa = `X-Vinext-Trace-Buffered-Body`;
var oa = `X-Vinext-Expected-Worker-Version`;
var sa = `X-Vinext-Cacheability-Probe`;
var ca = `X-Vinext-Cacheability-Probe-Route`;
var la = `X-Vinext-Params`;
var ua = `X-Vinext-Dynamic-Stale-Time`;
var da = `X-Vinext-Rsc-Completion-Metadata`;
var fa = `X-Vinext-Rendered-Path-And-Search`;
var pa = `X-Vinext-Mounted-Layouts`;
var ma = `X-Vinext-Rsc-Redirect`;
var ha = `X-Vinext-Rsc-Redirect-Type`;
var ga = `x-nextjs-stale-time`;
var _a = `X-Vinext-Stale-Time-Pending`;
sa.toLowerCase();
ca.toLowerCase();
oa.toLowerCase();
ia.toLowerCase();
aa.toLowerCase();
ra.toLowerCase();
var va = `x-deployment-id`;
function ya(e, t = undefined) {
  if (t) {
    e.set(va, t);
  }
}
var ba = `_rsc`;
var xa = `X-Vinext-RSC-Compatibility-Id`;
var Sa = `text/x-component`;
var Ca = 12;
var wa = new TextEncoder();
function Ta(e) {
  let t = ``;
  for (let n of e) {
    t += String.fromCharCode(n);
  }
  return btoa(t).replaceAll(`+`, `-`).replaceAll(`/`, `_`).replace(/=+$/, ``);
}
function Ea(e) {
  if (e === null) {
    return `0`;
  } else if (e === `0`) {
    return `\\0`;
  } else {
    return e.replaceAll(`\\`, `\\\\`).replaceAll(`,`, `\\,`);
  }
}
function Da(e) {
  if (e && e.length > 0) {
    return e;
  } else {
    return null;
  }
}
function Oa() {
  return Da(``);
}
function ka(e, t = Oa()) {
  let n = Da(e);
  let r = Da(t);
  return r === null || n !== null && n === r;
}
function Aa(e, t, n) {
  if (!e) {
    return t;
  }
  let r = new URL(e, n);
  za(r);
  let i = new URL(t, n);
  let a = r.pathname;
  if (i.pathname.length > 1 && i.pathname.endsWith(`/`) && !a.endsWith(`/`)) {
    a += `/`;
  }
  let o = Wa(a) + r.search;
  if (i.hash) {
    o += i.hash;
  }
  return o;
}
function ja(e) {
  if (ka(e.responseCompatibilityId, e.clientCompatibilityId)) {
    return {
      kind: `compatible`
    };
  } else {
    return {
      hardNavigationTarget: Aa(e.responseUrl, e.currentHref, e.origin),
      kind: `hard-navigate`
    };
  }
}
function Ma(e) {
  let t = na(e);
  if (t === `navigation`) {
    return null;
  } else {
    return t;
  }
}
function Na(e) {
  let t = [e.get(E), e.get(mn), e.get(pn), e.get(hn), e.get(gn), e.get(_n), e.get(vn), Ma(e.get(yn))];
  let n = e.get(bn);
  if (n !== null) {
    t.push(n);
  }
  if (t.every(e => e === null)) {
    return null;
  } else {
    return t.map(Ea).join(`,`);
  }
}
async function Pa(e) {
  let t = globalThis.crypto?.subtle;
  if (!t) {
    return zn(e);
  }
  let n = await t.digest(`SHA-256`, wa.encode(e));
  return Ta(new Uint8Array(n).subarray(0, Ca));
}
function Fa(e) {
  return (e.search.startsWith(`?`) ? e.search.slice(1) : e.search).split(`&`).filter(e => e.length > 0 && !Ia(e));
}
function Ia(e) {
  let t = e.indexOf(`=`);
  let n = t === -1 ? e : e.slice(0, t);
  try {
    return decodeURIComponent(n.replaceAll(`+`, ` `)) === ba;
  } catch {
    return n === ba;
  }
}
async function La(e) {
  let t = Na(e);
  if (t === null) {
    return ``;
  } else {
    return Pa(t);
  }
}
function Ra(e, t) {
  let n = Fa(e);
  n.push(t.length > 0 ? `${ba}=${t}` : ba);
  e.search = `?${n.join(`&`)}`;
}
function za(e) {
  let t = Fa(e);
  e.search = t.length > 0 ? `?${t.join(`&`)}` : ``;
}
function Ba(e = undefined) {
  let t = new Headers({
    Accept: Sa,
    RSC: `1`
  });
  ya(t, e ?? undefined);
  return t;
}
function Va(e = {}) {
  let t = Ba(e.deploymentId);
  if (e.prefetchRouterState) {
    if (e.includePrefetchHeader !== false) {
      t.set(E, `1`);
    }
    t.set(pn, encodeURIComponent(JSON.stringify(e.prefetchRouterState)));
  }
  let n = e.routerState ?? e.prefetchRouterState;
  if (n) {
    t.set(bn, Zi(n));
  }
  if (e.nextUrl) {
    t.set(hn, e.nextUrl);
  }
  if (e.interceptionContext !== undefined && e.interceptionContext !== null) {
    t.set(gn, e.interceptionContext);
  }
  if (e.interceptionId !== undefined && e.interceptionId !== null) {
    t.set(_n, e.interceptionId);
  }
  if (e.mountedSlotsHeader !== undefined && e.mountedSlotsHeader !== null) {
    t.set(vn, e.mountedSlotsHeader);
  }
  if (e.mountedLayoutsHeader !== undefined && e.mountedLayoutsHeader !== null) {
    t.set(pa, e.mountedLayoutsHeader);
  }
  let r = e.renderMode ?? `navigation`;
  if (r !== `navigation`) {
    t.set(yn, r);
  }
  return t;
}
var Ha = `http://vinext.local`;
function Ua(e) {
  let t = e.indexOf(`#`);
  let n = t === -1 ? e : e.slice(0, t);
  if (n.startsWith(`/`) || n.startsWith(`\\`)) {
    return new URL(`${Ha}${n}`);
  } else {
    return new URL(n, Ha);
  }
}
function Wa(e) {
  if (e.startsWith(`//`)) {
    return `/.${e}`;
  } else {
    return e;
  }
}
function Ga(e) {
  return `${Wa(e.pathname)}${e.search}`;
}
async function Ka(e, t) {
  let n = Ua(e);
  Ra(n, await La(t));
  return Ga(n);
}
var qa = `__next-page-redirect`;
function Ja(e) {
  if (typeof e != `object` || !e || !(`getElementById` in e)) {
    return false;
  }
  let {
    getElementById: t
  } = e;
  return typeof t == `function` && t.call(e, qa) !== null;
}
var Ya = class {
  #e = null;
  #t = 0;
  reset() {
    this.#e = null;
  }
  navigate(e, t, n) {
    if (this.#e?.href === t) {
      return;
    }
    let r = this.#t + 1;
    this.#t = r;
    this.#e = {
      href: t,
      token: r
    };
    let i = () => {
      if (this.#e?.token === r) {
        if (n === `replace`) {
          e.location.replace(t);
        } else {
          e.location.assign(t);
        }
      }
    };
    if (e.document?.visibilityState === `hidden`) {
      i();
    } else if (typeof e.requestAnimationFrame == `function`) {
      e.requestAnimationFrame(() => {
        e.setTimeout(i, 0);
      });
    } else {
      e.setTimeout(i, 0);
    }
  }
};
new TextEncoder();
var Xa = new TextDecoder();
var F = 255;
var Za = 0;
var Qa = 2;
var $a = 4;
var eo = 256;
function to(e) {
  return typeof e == `number` && Number.isFinite(e) && e >= 0;
}
function I() {
  throw Error(`Invalid or truncated RSC completion metadata footer`);
}
function no(e) {
  if (e.byteLength > eo) {
    throw Error(`RSC completion metadata exceeded its framing limit`);
  }
  if (e.byteLength < 6 || e[0] !== F || e[1] !== Za) {
    return I();
  }
  let t = e.byteLength - $a;
  if (new DataView(e.buffer, e.byteOffset + t, $a).getUint32(0) !== t - Qa) {
    return I();
  }
  try {
    let n = JSON.parse(Xa.decode(e.subarray(Qa, t)));
    if (typeof n != `object` || !n) {
      return I();
    }
    let r = n;
    if (!to(r.dynamicStaleTimeSeconds)) {
      return I();
    }
    let i = Object.hasOwn(r, `serverStaleTimeSeconds`);
    let a = r.serverStaleTimeSeconds;
    if (i && a !== null && !to(a)) {
      return I();
    } else {
      return {
        dynamicStaleTimeSeconds: r.dynamicStaleTimeSeconds,
        ...(i ? {
          serverStaleTimeSeconds: a
        } : {})
      };
    }
  } catch {
    return I();
  }
}
function ro(e) {
  let t = new Uint8Array(e);
  let n = t.indexOf(F);
  if (n === -1) {
    return {
      buffer: e
    };
  }
  let r = new Uint8Array(t.byteLength);
  r.set(t.subarray(0, n));
  let i = n;
  for (let e = n; e < t.byteLength; e++) {
    let n = t[e];
    if (n !== F) {
      r[i++] = n;
      continue;
    }
    let a = t[++e];
    if (a === undefined) {
      throw Error(`Truncated RSC completion metadata escape sequence`);
    }
    if (a === F) {
      r[i++] = F;
    } else {
      if (a !== Za) {
        throw Error(`Invalid RSC completion metadata escape sequence`);
      }
      return {
        buffer: r.buffer.slice(0, i),
        metadata: no(t.subarray(e - 1))
      };
    }
  }
  return {
    buffer: r.buffer.slice(0, i)
  };
}
function io(e) {
  let t = false;
  let n;
  return e.pipeThrough(new TransformStream({
    transform(e, r) {
      let i = [];
      let a = () => {
        if (i.length !== 0) {
          r.enqueue(Uint8Array.from(i));
          i.length = 0;
        }
      };
      let o = 0;
      while (o < e.byteLength) {
        if (n) {
          n.push(e[o++]);
          if (n.length > eo) {
            r.error(Error(`RSC completion metadata exceeded its framing limit`));
            return;
          }
          continue;
        }
        if (t) {
          let a = e[o++];
          t = false;
          if (a === F) {
            i.push(F);
            continue;
          }
          if (a === Za) {
            n = [F, Za];
            continue;
          }
          r.error(Error(`Invalid RSC completion metadata escape sequence`));
          return;
        }
        let s = e.indexOf(F, o);
        if (s === -1) {
          a();
          r.enqueue(e.subarray(o));
          return;
        }
        if (s > o) {
          a();
          r.enqueue(e.subarray(o, s));
        }
        t = true;
        o = s + 1;
      }
      a();
    },
    flush(e) {
      if (t) {
        e.error(Error(`Truncated RSC completion metadata escape sequence`));
      } else if (n) {
        let t = Uint8Array.from(n);
        try {
          no(t);
        } catch (t) {
          e.error(t);
        }
      }
    }
  }));
}
function ao(e) {
  if (e.headers.get(`X-Vinext-Rsc-Completion-Metadata`) !== `1` || !e.body) {
    return e;
  } else {
    return new Response(io(e.body), {
      headers: e.headers,
      status: e.status,
      statusText: e.statusText
    });
  }
}
var oo = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
function so(e) {
  let t = e.charCodeAt(0);
  return (t >= 65 && t <= 90 || t >= 97 && t <= 122) && oo.test(e);
}
function co(e) {
  return so(e) || e.startsWith(`//`);
}
function lo() {
  let {
    origin: e,
    href: t
  } = window.location;
  if (e) {
    return e;
  }
  try {
    return new URL(t).origin;
  } catch {
    return null;
  }
}
function uo(e) {
  return e.replace(/^\/{2,}/, `/`);
}
function fo(e) {
  let t = lo();
  if (!t) {
    return null;
  }
  try {
    let n = e.startsWith(`//`) ? new URL(e, t) : new URL(e);
    if (n.origin === t) {
      return uo(n.pathname) + n.search + n.hash;
    }
  } catch {}
  return null;
}
function po(e, t) {
  let n = fo(e);
  if (n == null || !t) {
    return n;
  }
  try {
    let e = new URL(n, `http://vinext.local`);
    if (f(e.pathname, t)) {
      return uo(p(e.pathname, t)) + e.search + e.hash;
    } else {
      return null;
    }
  } catch {
    return n;
  }
}
function mo(e) {
  let t = e.indexOf(`#`);
  let n = e.indexOf(`?`);
  let r = n > -1 && (t < 0 || n < t);
  if (r || t > -1) {
    return {
      pathname: e.substring(0, r ? n : t),
      query: r ? e.substring(n, t > -1 ? t : undefined) : ``,
      hash: t > -1 ? e.slice(t) : ``
    };
  } else {
    return {
      pathname: e,
      query: ``,
      hash: ``
    };
  }
}
function ho(e) {
  return e.replace(/\/$/, ``) || `/`;
}
function go(e, t) {
  if (!e.startsWith(`/`) || e.startsWith(`//`)) {
    return e;
  }
  let {
    pathname: n,
    query: r,
    hash: i
  } = mo(e);
  if (t) {
    if (_o(n)) {
      return `${ho(n)}${r}${i}`;
    } else if (n.endsWith(`/`)) {
      return `${n}${r}${i}`;
    } else {
      return `${n}/${r}${i}`;
    }
  } else {
    return `${ho(n)}${r}${i}`;
  }
}
function _o(e) {
  let t = e.endsWith(`/`) ? e.length - 1 : e.length;
  let n = e.indexOf(`.`, e.lastIndexOf(`/`, t - 1) + 1);
  return n !== -1 && n < t - 1;
}
function vo(e, t) {
  if (!t || !e.startsWith(`/`) || co(e)) {
    return e;
  } else {
    return t + e;
  }
}
function yo(e, t, n = ``) {
  let r = t ?? window.location.href;
  if (!r || e.startsWith(`/`) || co(e)) {
    return e;
  }
  try {
    let t = new URL(e, r);
    return (n && t.pathname === n ? `` : n ? p(t.pathname, n) : t.pathname) + t.search + t.hash;
  } catch {
    return e;
  }
}
function bo(e, t, n = ``) {
  let r = yo(e, t, n);
  if (n) {
    if (r === ``) {
      return n;
    } else if (r.startsWith(`?`) || r.startsWith(`#`)) {
      return n + r;
    } else {
      return vo(r, n);
    }
  } else {
    return vo(r, n);
  }
}
function xo(e, t, n, r) {
  return go(bo(e, t, n), r);
}
function So(e, t, n = ``) {
  try {
    let r = new URL(t);
    let i = new URL(e, t);
    return p(r.pathname, n) === p(i.pathname, n) && r.search === i.search && i.hash !== ``;
  } catch {
    return false;
  }
}
var Co = `[\\u0000-\\u001F \\u200B\\uFEFF]*`;
var wo = `[\\r\\n\\t]*`;
function To(e) {
  let t = e.split(``).join(wo);
  return RegExp(`^${Co}${t}${wo}:`, `i`);
}
var Eo = [To(`javascript`), To(`data`), To(`vbscript`)];
var Do = `Next.js has blocked a javascript: URL as a security precaution.`;
function Oo(e) {
  let t = `${e}`;
  return Eo.some(e => e.test(t));
}
function ko() {
  console.error(Do);
}
function Ao(e, t = Error) {
  if (Oo(e)) {
    ko();
    throw new t(Do);
  }
}
var jo = 10;
function Mo(e, t) {
  if (t === null || !Oo(t)) {
    return false;
  } else {
    e.body?.cancel().catch(() => {});
    ko();
    return true;
  }
}
function No(e, t) {
  let n = new URL(e, t);
  za(n);
  return `${Wa(n.pathname)}${n.search}${n.hash}`;
}
function Po(e) {
  return `${Wa(e.pathname)}${e.search}${e.hash}`;
}
function Fo(e) {
  if (e.targetUrl.origin !== e.origin) {
    return {
      href: e.targetUrl.href,
      kind: `terminal-hard-navigation`,
      reason: `externalRedirect`,
      redirectDepth: e.redirectDepth
    };
  }
  let t = e.redirectedHref;
  if (t === No(e.currentHref, e.origin)) {
    return {
      href: t,
      kind: `no-redirect`
    };
  }
  let n = e.maxRedirectDepth ?? jo;
  if (e.redirectDepth >= n) {
    return {
      href: t,
      kind: `terminal-hard-navigation`,
      reason: `maxRedirectsExceeded`,
      redirectDepth: e.redirectDepth
    };
  } else {
    return {
      href: t,
      historyUpdateMode: e.historyUpdateMode,
      kind: `follow`,
      previousNextUrl: e.requestPreviousNextUrl,
      redirectDepth: e.redirectDepth + 1
    };
  }
}
function Io(e) {
  let t = new URL(e.responseUrl, e.origin);
  return Fo({
    ...e,
    redirectedHref: Aa(t.href, e.currentHref, e.origin),
    targetUrl: t
  });
}
function Lo(e) {
  let t = new URL(e.currentHref, e.origin);
  let n = new URL(e.streamedRedirectTarget, t);
  return Fo({
    ...e,
    redirectedHref: Po(n),
    targetUrl: n
  });
}
var L = {
  cacheProofRejected: `NC_CACHE_REJECT`,
  cacheReuseTokenRejected: `NC_CACHE_TOKEN_REJECT`,
  commitCurrent: `NC_COMMIT`,
  crossDocumentFlight: `NC_CROSS_DOC_FLIGHT`,
  fetchFresh: `NC_FETCH_FRESH`,
  invalidRscPayload: `NC_RSC_INVALID`,
  interceptedCommitCurrent: `NC_INTERCEPT_COMMIT`,
  interceptedRejectedIncompatibleRoot: `NC_INTERCEPT_REJECT_ROOT`,
  interceptedRejectedMissingProof: `NC_INTERCEPT_REJECT_MISSING_PROOF`,
  interceptedRejectedMissingSlotProof: `NC_INTERCEPT_REJECT_SLOT`,
  interceptedRejectedTargetMismatch: `NC_INTERCEPT_REJECT_TARGET`,
  interceptedRejectedUndeclaredTopology: `NC_INTERCEPT_REJECT_GRAPH`,
  interceptedRejectedUnknownSource: `NC_INTERCEPT_REJECT_SOURCE`,
  optimisticRouteShell: `NC_OPTIMISTIC_SHELL`,
  prefetchOnly: `NC_PREFETCH_ONLY`,
  prefetchResponseReuse: `NC_PREFETCH_REUSE`,
  proceedToCommit: `NC_RSC_PROCEED`,
  redirectFollow: `NC_RSC_REDIRECT_FOLLOW`,
  redirectTerminalDepth: `NC_RSC_REDIRECT_DEPTH`,
  redirectTerminalExternal: `NC_RSC_REDIRECT_EXTERNAL`,
  requestWork: `NC_REQUEST`,
  rootBoundaryChanged: `NC_ROOT`,
  rootBoundaryUnknown: `NC_ROOT_UNKNOWN`,
  rscCompatibilityMismatch: `NC_RSC_COMPAT_MISMATCH`,
  rscNavigationError: `NC_RSC_NAV_ERROR`,
  sameDocumentScroll: `NC_SAME_DOC_SCROLL`,
  samePageRefresh: `NC_SAME_PAGE_REFRESH`,
  samePageSearch: `NC_SAME_PAGE_SEARCH`,
  serverActionRedirectCompatibilityMismatch: `NC_SA_REDIRECT_COMPAT`,
  serverActionRscCompatibilityMismatch: `NC_SA_RSC_COMPAT`,
  staleOperation: `NC_STALE`,
  streamedRedirectLoop: `NC_RSC_STREAMED_REDIRECT_LOOP`,
  visitedResponseReuse: `NC_VISITED_REUSE`
};
var Ro = {
  hardNavigate: `NT_HARD_NAVIGATE`,
  noCommit: `NT_NO_COMMIT`,
  visibleCommit: `NT_VISIBLE_COMMIT`
};
function zo(e) {
  return {
    ...(e.activeNavigationId === undefined ? {} : {
      activeNavigationId: e.activeNavigationId
    }),
    currentRootLayoutTreePath: e.currentRootLayoutTreePath,
    currentVisibleCommitVersion: e.currentVisibleCommitVersion,
    nextRootLayoutTreePath: e.nextRootLayoutTreePath,
    ...(e.startedNavigationId === undefined ? {} : {
      startedNavigationId: e.startedNavigationId
    }),
    startedVisibleCommitVersion: e.startedVisibleCommitVersion
  };
}
function Bo(e, t = {}) {
  return {
    code: e,
    fields: {
      ...t
    }
  };
}
function R(e, t = {}) {
  return {
    schemaVersion: 0,
    entries: [Bo(e, t)]
  };
}
function Vo(e, t, n = {}) {
  return {
    schemaVersion: e.schemaVersion,
    entries: [Bo(t, n), ...e.entries]
  };
}
var Ho = [`navigation`, `visibleCommit`, `graphVersion`, `cacheVariant`];
function Uo(e, t, n) {
  switch (e) {
    case `navigation`:
      if (t.navigationId === n.activeNavigationId) {
        return {
          kind: `satisfied`
        };
      } else {
        return {
          kind: `mismatch`,
          reason: `staleNavigation`
        };
      }
    case `visibleCommit`:
      if (t.baseVisibleCommitVersion === n.visibleCommitVersion) {
        return {
          kind: `satisfied`
        };
      } else {
        return {
          kind: `mismatch`,
          reason: `staleVisibleCommit`
        };
      }
    case `graphVersion`:
      if (t.graphVersion === null || n.graphVersion === null) {
        return {
          kind: `absent`,
          missingReason: `graphVersionMissing`
        };
      } else if (t.graphVersion === n.graphVersion) {
        return {
          kind: `satisfied`
        };
      } else {
        return {
          kind: `mismatch`,
          reason: `graphVersionMismatch`
        };
      }
    case `cacheVariant`:
      {
        let e = t.cacheVariantFingerprint;
        let r = n.installedCacheVariantFingerprint;
        if (e === undefined || r === null) {
          return {
            kind: `absent`,
            missingReason: `cacheVariantMissing`
          };
        } else if (e === r) {
          return {
            kind: `satisfied`
          };
        } else {
          return {
            kind: `mismatch`,
            reason: `cacheVariantMismatch`
          };
        }
      }
    default:
      throw Error(`[vinext] Unknown operation-token dimension: ${String(e)}`);
  }
}
function Wo(e, t, n) {
  let r = new Set(n.require);
  let i = new Set([...n.check, ...n.require]);
  for (let n of Ho) {
    if (!i.has(n)) {
      continue;
    }
    let a = Uo(n, e, t);
    if (a.kind === `mismatch`) {
      return {
        authorized: false,
        reason: a.reason
      };
    }
    if (a.kind === `absent` && r.has(n)) {
      return {
        authorized: false,
        reason: a.missingReason
      };
    }
  }
  return {
    authorized: true,
    token: e
  };
}
function Go(e, t) {
  return Wo(e, {
    activeNavigationId: t.activeNavigationId,
    visibleCommitVersion: t.visibleCommitVersion,
    graphVersion: e.graphVersion,
    installedCacheVariantFingerprint: e.cacheVariantFingerprint ?? null
  }, {
    check: [`navigation`, `visibleCommit`],
    require: [`navigation`, `visibleCommit`]
  });
}
function Ko(e, t) {
  return Wo(e, {
    activeNavigationId: e.navigationId,
    visibleCommitVersion: e.baseVisibleCommitVersion,
    graphVersion: t.graphVersion,
    installedCacheVariantFingerprint: t.installedCacheVariantFingerprint
  }, {
    check: [`graphVersion`, `cacheVariant`],
    require: []
  });
}
function qo(e, t) {
  if (e === `push` || t === `push`) {
    return `push`;
  } else {
    return `replace`;
  }
}
var Jo = `\0`;
var Yo = `CP_CACHE_ENTRY_PROOF_MISSING`;
function Xo(e) {
  let t = e.work.kind === `traverseFlight` ? {
    traverseDirection: e.work.direction
  } : {};
  return {
    kind: `requestWork`,
    token: e.state.nextOperationToken,
    work: e.work,
    trace: R(L.requestWork, {
      eventKind: e.eventKind,
      targetHref: Zo(e.work),
      ...t
    })
  };
}
function Zo(e) {
  switch (e.kind) {
    case `flight`:
    case `prefetch`:
      return e.href;
    case `traverseFlight`:
      return null;
    default:
      throw Error(`[vinext] Unknown requested navigation work: ${String(e)}`);
  }
}
function Qo(e, t = {}) {
  return {
    fetchResultSource: e.source,
    ...t
  };
}
function $o(e) {
  return {
    discardBody: e.discardBody,
    kind: `hardNavigate`,
    ...(e.hardNavigationMode === undefined ? {} : {
      hardNavigationMode: e.hardNavigationMode
    }),
    reason: e.reason,
    trace: R(e.reasonCode, Qo(e.facts, {
      ...(e.redirectSignal === undefined ? {} : {
        redirectSignal: e.redirectSignal
      }),
      redirectDepth: e.facts.redirectDepth,
      targetHref: e.url
    })),
    url: e.url
  };
}
function es(e) {
  return {
    discardBody: e.discardBody,
    kind: `followRedirect`,
    redirect: e.redirect,
    trace: R(L.redirectFollow, Qo(e.facts, {
      redirectDepth: e.redirect.redirectDepth,
      redirectSignal: e.redirectSignal,
      targetHref: e.redirect.href
    }))
  };
}
function ts(e) {
  switch (e) {
    case `externalRedirect`:
      return {
        hardNavigationReason: `externalRedirectTarget`,
        traceReasonCode: L.redirectTerminalExternal
      };
    case `maxRedirectsExceeded`:
      return {
        hardNavigationReason: `redirectDepthExhausted`,
        traceReasonCode: L.redirectTerminalDepth
      };
    default:
      throw Error(`[vinext] Unknown RSC redirect terminal reason: ${String(e)}`);
  }
}
function ns(e) {
  if (!e.responseOk || !e.isRscContentType || !e.hasBody) {
    let t = Aa(e.responseUrl, e.currentHref, e.origin);
    return $o({
      discardBody: false,
      facts: e,
      reason: `invalidRscPayload`,
      reasonCode: L.invalidRscPayload,
      url: t
    });
  }
  let t = ja({
    clientCompatibilityId: e.clientCompatibilityId,
    currentHref: e.currentHref,
    origin: e.origin,
    responseCompatibilityId: e.compatibilityIdHeader,
    responseUrl: e.responseUrl
  });
  if (t.kind === `hard-navigate`) {
    return $o({
      discardBody: false,
      facts: e,
      reason: `rscCompatibilityMismatch`,
      reasonCode: L.rscCompatibilityMismatch,
      url: t.hardNavigationTarget
    });
  }
  if (e.responseUrl !== null) {
    let t = Io({
      currentHref: e.currentHref,
      historyUpdateMode: e.effectiveHistoryUpdateMode,
      origin: e.origin,
      redirectDepth: e.redirectDepth,
      requestPreviousNextUrl: e.requestPreviousNextUrl,
      responseUrl: e.responseUrl
    });
    if (t.kind === `terminal-hard-navigation`) {
      let n = ts(t.reason);
      return $o({
        discardBody: false,
        facts: e,
        reason: n.hardNavigationReason,
        reasonCode: n.traceReasonCode,
        redirectSignal: `response-url`,
        url: t.href
      });
    }
    if (t.kind === `follow`) {
      return es({
        discardBody: false,
        facts: e,
        redirect: {
          href: t.href,
          historyUpdateMode: e.effectiveHistoryUpdateMode,
          previousNextUrl: t.previousNextUrl,
          redirectDepth: t.redirectDepth
        },
        redirectSignal: `response-url`
      });
    }
  }
  if (e.streamedRedirectTarget !== null) {
    let t = qo(e.effectiveHistoryUpdateMode, e.streamedRedirectType);
    let n = Lo({
      currentHref: e.currentHref,
      historyUpdateMode: t,
      origin: e.origin,
      redirectDepth: e.redirectDepth,
      requestPreviousNextUrl: e.requestPreviousNextUrl,
      streamedRedirectTarget: e.streamedRedirectTarget
    });
    if (n.kind === `terminal-hard-navigation`) {
      let r = ts(n.reason);
      return $o({
        discardBody: true,
        facts: e,
        reason: r.hardNavigationReason,
        reasonCode: r.traceReasonCode,
        redirectSignal: `streamed-header`,
        hardNavigationMode: t === `push` ? `assign` : `replace`,
        url: n.href
      });
    }
    if (n.kind === `follow`) {
      return es({
        discardBody: true,
        facts: e,
        redirect: {
          href: n.href,
          historyUpdateMode: t,
          previousNextUrl: n.previousNextUrl,
          redirectDepth: n.redirectDepth
        },
        redirectSignal: `streamed-header`
      });
    } else {
      return $o({
        discardBody: true,
        facts: e,
        reason: `streamedRedirectLoop`,
        reasonCode: L.streamedRedirectLoop,
        redirectSignal: `streamed-header`,
        url: n.href
      });
    }
  }
  return {
    discardBody: false,
    kind: `proceedToCommit`,
    trace: R(L.proceedToCommit, Qo(e))
  };
}
function rs(e, t) {
  return R(e, {
    targetHref: t.targetHref
  });
}
function is(e, t, n) {
  if (n === `browser`) {
    return p(e, t);
  } else {
    return e;
  }
}
function as(e) {
  let t;
  let n;
  try {
    t = new URL(e.currentHref);
    n = new URL(e.targetHref, e.currentHref);
  } catch {
    return {
      bypassNavigationCache: false,
      kind: `flightNavigation`,
      trace: rs(L.crossDocumentFlight, e)
    };
  }
  let r = is(t.pathname, e.basePath, e.currentUrlSpace);
  let i = is(n.pathname, e.basePath, `browser`);
  let a = t.origin === n.origin && r === i;
  let o = t.searchParams.toString() === n.searchParams.toString();
  if (a && t.search === n.search && t.hash === n.hash) {
    return {
      bypassNavigationCache: true,
      kind: `flightNavigation`,
      trace: rs(L.samePageRefresh, e)
    };
  } else if (a && o && t.hash !== n.hash) {
    return {
      hash: n.hash,
      kind: `sameDocumentScroll`,
      mode: e.mode,
      scroll: e.scroll,
      trace: rs(L.sameDocumentScroll, e)
    };
  } else if (a && !o) {
    return {
      bypassNavigationCache: true,
      kind: `flightNavigation`,
      trace: rs(L.samePageSearch, e)
    };
  } else {
    return {
      bypassNavigationCache: false,
      kind: `flightNavigation`,
      trace: rs(L.crossDocumentFlight, e)
    };
  }
}
function os(e) {
  if (e.candidate === `missing`) {
    return {
      kind: `miss`
    };
  } else if (e.mountedSlotsMatch) {
    if (e.navigationKind === `refresh`) {
      return {
        kind: `evict`,
        reason: `refresh`
      };
    } else if (e.fresh) {
      return {
        kind: `reuse`
      };
    } else {
      return {
        kind: `evict`,
        reason: `stale`
      };
    }
  } else {
    return {
      kind: `evict`,
      reason: `mountedSlotsMismatch`
    };
  }
}
function ss(e, t, n = {}) {
  return R(e, {
    eventKind: t.navigationKind,
    targetHref: t.targetHref,
    ...n
  });
}
function cs(e, t) {
  return {
    kind: `fetchFresh`,
    reason: t,
    trace: ss(L.fetchFresh, e, {
      freshFetchReason: t
    })
  };
}
function ls(e) {
  if (e.navigationKind === `refresh`) {
    return cs(e, `refresh`);
  } else if (e.bypassNavigationCache) {
    return cs(e, `cacheBypassed`);
  } else if (e.visitedResponse.status === `available`) {
    return {
      kind: `reuseVisitedResponse`,
      trace: ss(L.visitedResponseReuse, e)
    };
  } else if (e.prefetch.status === `available`) {
    return {
      kind: `consumePrefetch`,
      trace: ss(L.prefetchResponseReuse, e)
    };
  } else if (e.navigationKind === `navigate`) {
    if (e.optimisticRouteShell.status === `available`) {
      return {
        kind: `attemptOptimisticRouteShell`,
        trace: ss(L.optimisticRouteShell, e)
      };
    } else {
      return cs(e, e.optimisticRouteShell.reason);
    }
  } else {
    return cs(e, `cacheMiss`);
  }
}
function us(e) {
  if (e.visitedResponse.status === `available`) {
    return {
      kind: `skip`,
      reason: `visitedResponseAvailable`
    };
  } else if (e.navigationKind === `refresh`) {
    return {
      kind: `skip`,
      reason: `refresh`
    };
  } else if (e.bypassNavigationCache) {
    return {
      kind: `skip`,
      reason: `cacheBypassed`
    };
  } else {
    return {
      kind: `probe`
    };
  }
}
function ds(e) {
  return {
    layoutIds: e.layoutIds,
    rootBoundaryId: e.rootBoundaryId,
    rootLayoutTreePath: e.rootBoundaryId,
    slotBindings: e.slotBindings
  };
}
function fs(e) {
  let t = e.indexOf(Jo);
  if (t === -1) {
    return e;
  } else {
    return e.slice(0, t);
  }
}
function ps(e) {
  let t = fs(e);
  if (t.startsWith(`route:/`)) {
    return t.slice(6);
  } else {
    return null;
  }
}
function ms(e) {
  try {
    return new URL(e, `https://vinext.local`).pathname;
  } catch {
    let [t = ``] = e.split(`#`);
    let [n = ``] = t.split(`?`);
    if (n === ``) {
      return `/`;
    } else {
      return n;
    }
  }
}
function hs(e) {
  return b(ms(e));
}
function gs(e, t) {
  let n = hs(t);
  for (let t of e.segmentGraph.routes.values()) {
    if (Xr(n, t.patternParts) !== null) {
      return t;
    }
  }
  return null;
}
function _s(e, t) {
  return Xr(hs(t), e.patternParts) !== null;
}
function vs(e) {
  let t = fs(e.routeId);
  let n = e.routeManifest.segmentGraph.routes.get(t);
  if (n && _s(n, e.matchedUrl)) {
    return n;
  }
  let r = n === undefined ? ps(e.routeId) : null;
  if (r !== null) {
    let t = gs(e.routeManifest, r);
    if (t !== null) {
      return t;
    }
  }
  return gs(e.routeManifest, e.matchedUrl);
}
function ys(e, t) {
  if (t.interception === null) {
    return vs({
      matchedUrl: t.matchedUrl,
      routeId: t.routeId,
      routeManifest: e
    });
  } else {
    return vs({
      matchedUrl: t.interception.sourceMatchedUrl,
      routeId: t.interception.sourceRouteId,
      routeManifest: e
    });
  }
}
function bs(e, t) {
  let n = [];
  for (let r of t.slotIds) {
    let i = e.segmentGraph.slotBindings.get(`${t.id}::${r}`);
    if (i) {
      n.push({
        ownerLayoutId: i.ownerLayoutId,
        slotId: i.slotId,
        state: i.state
      });
    }
  }
  return n.sort((e, t) => k(e.slotId, t.slotId));
}
function xs(e, t) {
  if (t.rootBoundaryId === null) {
    return null;
  } else {
    return e.segmentGraph.rootBoundaries.get(t.rootBoundaryId)?.treePath ?? null;
  }
}
function Ss(e) {
  let t = e.routeManifest === null ? null : ys(e.routeManifest, e.snapshot);
  if (t === null || e.routeManifest === null) {
    return {
      kind: `unknown`
    };
  }
  let n = e.slotBindingSource === `manifestTarget` && e.snapshot.interception === null;
  return {
    kind: `known`,
    topology: {
      layoutIds: t.layoutIds,
      rootBoundaryId: t.rootBoundaryId,
      rootLayoutTreePath: xs(e.routeManifest, t),
      slotBindings: n ? bs(e.routeManifest, t) : e.snapshot.slotBindings
    }
  };
}
function Cs(e, t) {
  let n = hs(t.sourceMatchedUrl);
  let r = hs(t.targetMatchedUrl);
  let i = vs({
    matchedUrl: t.targetMatchedUrl,
    routeId: t.targetRouteId,
    routeManifest: e
  });
  let a = e.segmentGraph.interceptionsBySlotId.get(t.slotId) ?? [];
  for (let e of a) {
    if (!$r(n, e.sourcePatternParts)) {
      continue;
    }
    let t = Xr(r, e.targetPatternParts);
    let a = t === null && ei(r, e.targetPatternParts);
    if ((t !== null || a) && (a || e.targetRouteId === null || i?.id === e.targetRouteId)) {
      return e;
    }
  }
  return null;
}
function ws(e) {
  if (e.state.traceFields) {
    return {
      ...e.state.traceFields,
      currentRootLayoutTreePath: e.currentRootLayoutTreePath,
      nextRootLayoutTreePath: e.nextRootLayoutTreePath
    };
  } else {
    return zo({
      currentRootLayoutTreePath: e.currentRootLayoutTreePath,
      currentVisibleCommitVersion: e.state.visibleCommitVersion,
      nextRootLayoutTreePath: e.nextRootLayoutTreePath,
      startedVisibleCommitVersion: e.event.token.baseVisibleCommitVersion
    });
  }
}
function Ts(e, t) {
  if (e === null || t === null) {
    return `rootBoundaryUnknown`;
  } else if (e === t) {
    return `currentRootBoundary`;
  } else {
    return `rootBoundaryChanged`;
  }
}
function Es(e, t) {
  return Ds(ds(e), ds(t));
}
function Ds(e, t) {
  if (Ts(e.rootBoundaryId, t.rootBoundaryId) !== `currentRootBoundary`) {
    return [];
  }
  let n = [];
  let r = Math.min(e.layoutIds.length, t.layoutIds.length);
  for (let i = 0; i < r; i++) {
    let r = e.layoutIds[i];
    if (r !== t.layoutIds[i]) {
      break;
    }
    n.push(r);
  }
  return n;
}
function Os(e, t) {
  return ks(e, Es(e, t));
}
function ks(e, t) {
  if (t.length === 0) {
    return [];
  }
  let n = new Set(t);
  let r = [];
  let i = new Set();
  for (let t of e.mountedParallelSlots) {
    if (t.ownerLayoutId !== null && n.has(t.ownerLayoutId)) {
      if (!i.has(t.slotId)) {
        r.push(t.slotId);
        i.add(t.slotId);
      }
    }
  }
  return r;
}
function As(e, t) {
  let n = Es(e, t);
  return [...n, ...ks(e, n)];
}
function js(e) {
  return Ds(e.currentTopology, e.targetTopology);
}
function Ms(e) {
  if (e.lane === `traverse`) {
    return [];
  }
  let t = Ds(e.currentTopology, e.targetTopology);
  if (t.length === 0) {
    return [];
  }
  let n = Ps({
    currentSlotBindings: e.currentTopology.slotBindings,
    preservedLayoutIds: t,
    targetSlotBindings: e.targetTopology.slotBindings
  });
  let r = Ns({
    currentSlotBindings: e.currentTopology.slotBindings,
    preservedLayoutIds: t,
    targetSlotBindings: e.targetTopology.slotBindings
  });
  return [...new Set([...n, ...r])].sort(k);
}
function Ns(e) {
  let t = new Set(e.preservedLayoutIds);
  let n = new Set(e.targetSlotBindings.map(e => e.slotId));
  return e.currentSlotBindings.filter(e => {
    let r = j.parseElementKey(e.slotId);
    return e.state === `active` && e.ownerLayoutId !== null && t.has(e.ownerLayoutId) && r?.kind === `slot` && r.name === `children` && !n.has(e.slotId);
  }).map(e => e.slotId).sort(k);
}
function Ps(e) {
  let t = new Set(e.preservedLayoutIds);
  let n = new Set();
  for (let t of e.currentSlotBindings) {
    if (t.state !== `unmatched`) {
      n.add(t.slotId);
    }
  }
  let r = [];
  let i = new Set();
  for (let a of e.targetSlotBindings) {
    if (a.ownerLayoutId !== null && t.has(a.ownerLayoutId) && a.state !== `active` && n.has(a.slotId)) {
      if (!i.has(a.slotId)) {
        r.push(a.slotId);
        i.add(a.slotId);
      }
    }
  }
  return r.sort(k);
}
function Fs(e) {
  let t = new Map(e.currentSlotBindings.map(e => [e.slotId, e]));
  let n = new Set(e.preservedLayoutIds);
  let r = [];
  for (let i of e.targetSlotBindings) {
    if (i.slotId === e.targetInterceptionSlotId || i.state !== `active` || i.ownerLayoutId === null || !n.has(i.ownerLayoutId)) {
      continue;
    }
    let a = t.get(i.slotId);
    if (a?.state === `active` && a.ownerLayoutId === i.ownerLayoutId) {
      if (!a.activeRouteId || !i.activeRouteId || a.activeRouteId === i.activeRouteId) {
        r.push(i.slotId);
      }
    }
  }
  return r.sort(k);
}
function Is(e) {
  if (e.interception) {
    return {
      matchedUrl: e.interception.sourceMatchedUrl,
      routeId: e.interception.sourceRouteId
    };
  } else {
    return {
      matchedUrl: ps(e.routeId) ?? e.matchedUrl,
      routeId: e.routeId
    };
  }
}
function Ls(e) {
  return {
    kind: `hardNavigate`,
    reason: `interceptionProofRejected`,
    token: e.event.token,
    trace: R(e.reasonCode, e.traceFields),
    url: e.event.result.href
  };
}
function Rs(e) {
  if (e === undefined) {
    return {
      kind: `accepted`,
      decision: null
    };
  } else if (e.decision === null) {
    return {
      kind: `rejected`,
      decision: null
    };
  } else if (e.decision.canReuse) {
    return {
      kind: `accepted`,
      decision: e.decision
    };
  } else {
    return {
      kind: `rejected`,
      decision: e.decision
    };
  }
}
function zs(e, t) {
  if (t === null) {
    return {
      ...e,
      cacheProofCode: Yo
    };
  } else {
    return {
      ...e,
      cacheProofCode: t.code,
      cacheProofMode: t.mode,
      cacheProofScope: t.scope
    };
  }
}
function Bs(e) {
  return {
    kind: `hardNavigate`,
    reason: `cacheProofRejected`,
    token: e.event.token,
    trace: R(L.cacheProofRejected, zs(e.traceFields, e.rejection.decision)),
    url: e.event.result.href
  };
}
function Vs(e) {
  return {
    kind: `hardNavigate`,
    reason: `cacheReuseTokenRejected`,
    token: e.event.token,
    trace: R(L.cacheReuseTokenRejected, {
      ...e.traceFields,
      cacheReuseTokenReason: e.reason
    }),
    url: e.event.result.href
  };
}
function Hs(e, t) {
  if (t === null) {
    return e;
  } else {
    return {
      ...e,
      cacheProofCode: t.code,
      cacheProofReuseClass: t.reuseClass
    };
  }
}
function Us(e) {
  if (e === null) {
    return {};
  } else {
    return {
      cacheEntryReuseDecision: e
    };
  }
}
function Ws(e) {
  let t = e.targetSnapshot.interception;
  if (!t) {
    return {
      kind: `rejected`,
      reasonCode: L.interceptedRejectedMissingProof
    };
  }
  if (t.targetMatchedUrl !== e.targetSnapshot.matchedUrl) {
    return {
      kind: `rejected`,
      reasonCode: L.interceptedRejectedTargetMismatch
    };
  }
  let n = Is(e.currentSnapshot);
  if (!e.restoredHistorySnapshot && (t.sourceMatchedUrl !== n.matchedUrl || t.sourceRouteId !== n.routeId)) {
    return {
      kind: `rejected`,
      reasonCode: L.interceptedRejectedUnknownSource
    };
  }
  let r = e.routeManifest === null ? null : Cs(e.routeManifest, t);
  if (e.routeManifest !== null && r === null) {
    return {
      kind: `rejected`,
      reasonCode: L.interceptedRejectedUndeclaredTopology
    };
  }
  let i = Ds(e.currentTopology, e.targetTopology);
  if (i.length === 0) {
    return {
      kind: `rejected`,
      reasonCode: L.interceptedRejectedIncompatibleRoot
    };
  }
  let a = new Set(i);
  let o = e.targetTopology.slotBindings.find(e => e.slotId === t.slotId);
  if (!o || o.state !== `active` || o.ownerLayoutId === null || !a.has(o.ownerLayoutId)) {
    return {
      kind: `rejected`,
      reasonCode: L.interceptedRejectedMissingSlotProof
    };
  }
  if (r !== null && o.ownerLayoutId !== r.ownerLayoutId) {
    return {
      kind: `rejected`,
      reasonCode: L.interceptedRejectedUndeclaredTopology
    };
  }
  let s = Ps({
    currentSlotBindings: e.currentTopology.slotBindings,
    preservedLayoutIds: i,
    targetSlotBindings: e.targetTopology.slotBindings
  }).filter(e => e !== t.slotId);
  let c = e.lane === `navigation` ? Fs({
    currentSlotBindings: e.currentTopology.slotBindings,
    preservedLayoutIds: i,
    targetInterceptionSlotId: t.slotId,
    targetSlotBindings: e.targetTopology.slotBindings
  }) : [];
  return {
    kind: `approved`,
    preserveElementIds: i,
    preservePreviousSlotIds: [...new Set([...s, ...c])].sort(k)
  };
}
function Gs(e) {
  let t = e.event.result.targetSnapshot;
  let n = Ss({
    routeManifest: e.routeManifest,
    slotBindingSource: `snapshot`,
    snapshot: e.state.visibleSnapshot
  });
  let r = Ss({
    routeManifest: e.routeManifest,
    slotBindingSource: `manifestTarget`,
    snapshot: t
  });
  let i = Ts(e.state.visibleSnapshot.rootBoundaryId, t.rootBoundaryId) === `rootBoundaryChanged`;
  let a = ws({
    currentRootLayoutTreePath: i ? e.state.visibleSnapshot.rootBoundaryId : n.kind === `known` ? n.topology.rootLayoutTreePath : null,
    event: e.event,
    nextRootLayoutTreePath: i ? t.rootBoundaryId : r.kind === `known` ? r.topology.rootLayoutTreePath : null,
    state: e.state
  });
  if (e.event.token.lane === `prefetch`) {
    return {
      kind: `noCommit`,
      reason: `prefetchOnly`,
      token: e.event.token,
      trace: R(L.prefetchOnly, a)
    };
  }
  let o = Rs(e.event.result.cacheEntryReuseProof);
  if (o.kind === `rejected`) {
    return Bs({
      event: e.event,
      rejection: o,
      traceFields: a
    });
  }
  let s = o.decision;
  if (s !== null) {
    let t = Ko(e.event.token, {
      graphVersion: e.routeManifest?.graphVersion ?? null,
      installedCacheVariantFingerprint: null
    });
    if (!t.authorized) {
      return Vs({
        event: e.event,
        reason: t.reason,
        traceFields: a
      });
    }
  }
  let c = Hs(a, s);
  let l = Us(s);
  if (i) {
    return {
      kind: `hardNavigate`,
      reason: `rootBoundaryChanged`,
      token: e.event.token,
      trace: R(L.rootBoundaryChanged, c),
      url: e.event.result.href
    };
  }
  if (t.interception !== null) {
    if (n.kind === `unknown` || r.kind === `unknown`) {
      return Ls({
        event: e.event,
        reasonCode: L.interceptedRejectedUndeclaredTopology,
        traceFields: c
      });
    }
    let i = Ws({
      currentSnapshot: e.state.visibleSnapshot,
      currentTopology: n.topology,
      lane: e.event.token.lane,
      restoredHistorySnapshot: e.event.result.restoredHistorySnapshot === true,
      routeManifest: e.routeManifest,
      targetSnapshot: t,
      targetTopology: r.topology
    });
    if (i.kind === `rejected`) {
      return Ls({
        event: e.event,
        reasonCode: i.reasonCode,
        traceFields: c
      });
    } else {
      return {
        kind: `proposeCommit`,
        proposal: {
          ...l,
          preserveAbsentSlots: false,
          preserveElementIds: i.preserveElementIds,
          preservePreviousSlotIds: i.preservePreviousSlotIds,
          reason: `interceptedCurrentRootBoundary`,
          targetSnapshot: t
        },
        token: e.event.token,
        trace: R(L.interceptedCommitCurrent, c)
      };
    }
  }
  let u = n.kind === `unknown` || r.kind === `unknown` ? `rootBoundaryUnknown` : Ts(n.topology.rootBoundaryId, r.topology.rootBoundaryId);
  if (u === `rootBoundaryChanged`) {
    return {
      kind: `hardNavigate`,
      reason: `rootBoundaryChanged`,
      token: e.event.token,
      trace: R(L.rootBoundaryChanged, c),
      url: e.event.result.href
    };
  }
  if (u === `rootBoundaryUnknown`) {
    return {
      kind: `proposeCommit`,
      proposal: {
        ...l,
        preserveAbsentSlots: false,
        preserveElementIds: [],
        preservePreviousSlotIds: [],
        reason: `unprovenTopologyFallback`,
        targetSnapshot: t
      },
      token: e.event.token,
      trace: R(L.rootBoundaryUnknown, c)
    };
  }
  if (n.kind !== `known` || r.kind !== `known`) {
    throw Error(`[vinext] Current-root navigation planning requires manifest topology`);
  }
  return {
    kind: `proposeCommit`,
    proposal: {
      ...l,
      preserveAbsentSlots: false,
      preserveElementIds: js({
        currentTopology: n.topology,
        lane: e.event.token.lane,
        targetTopology: r.topology
      }),
      preservePreviousSlotIds: Ms({
        currentTopology: n.topology,
        lane: e.event.token.lane,
        targetTopology: r.topology
      }),
      reason: `currentRootBoundary`,
      targetSnapshot: t
    },
    token: e.event.token,
    trace: R(L.commitCurrent, c)
  };
}
function Ks(e) {
  switch (e.event.kind) {
    case `navigate`:
      return Xo({
        eventKind: e.event.kind,
        state: e.state,
        work: {
          href: e.event.href,
          kind: `flight`,
          mode: e.event.mode
        }
      });
    case `refresh`:
      return Xo({
        eventKind: e.event.kind,
        state: e.state,
        work: {
          href: e.state.visibleSnapshot.displayUrl,
          kind: `flight`,
          mode: `refresh`
        }
      });
    case `traverse`:
      return Xo({
        eventKind: e.event.kind,
        state: e.state,
        work: {
          direction: e.event.direction,
          historyState: e.event.historyState,
          kind: `traverseFlight`
        }
      });
    case `prefetch`:
      return Xo({
        eventKind: e.event.kind,
        state: e.state,
        work: {
          href: e.event.href,
          kind: `prefetch`
        }
      });
    case `flightResponseArrived`:
      return Gs({
        event: e.event,
        routeManifest: e.routeManifest,
        state: e.state
      });
    default:
      {
        let t = e.event;
        throw Error(`[vinext] Unknown navigation event: ${String(t)}`);
      }
  }
}
function qs(e) {
  if (e.clientCompatibilityId === null || !e.isRscContentType || ja({
    clientCompatibilityId: e.clientCompatibilityId,
    currentHref: e.currentHref,
    origin: e.origin,
    responseCompatibilityId: e.compatibilityIdHeader,
    responseUrl: e.responseUrl
  }).kind === `compatible`) {
    return {
      kind: `proceed`,
      trace: R(L.proceedToCommit, {})
    };
  }
  if (e.actionRedirectHref !== null) {
    return {
      kind: `hardNavigate`,
      url: e.actionRedirectHref,
      historyMode: e.actionRedirectType === `push` ? `assign` : `replace`,
      clearClientNavigationCaches: true,
      reason: `serverActionRedirectCompatibilityMismatch`,
      trace: R(L.serverActionRedirectCompatibilityMismatch, {
        targetHref: e.actionRedirectHref
      })
    };
  }
  let t = e.currentHref;
  return {
    kind: `hardNavigate`,
    url: t,
    clearClientNavigationCaches: false,
    reason: `serverActionRscCompatibilityMismatch`,
    trace: R(L.serverActionRscCompatibilityMismatch, {
      targetHref: t
    })
  };
}
function Js(e) {
  return {
    kind: `hardNavigate`,
    url: e.currentHref,
    reason: `rscNavigationError`,
    trace: R(L.rscNavigationError, {
      targetHref: e.currentHref
    })
  };
}
var Ys = {
  classifyEarlyNavigationIntent: as,
  classifyNavigationPrefetchProbe: us,
  classifyNavigationReuse: ls,
  classifyRscFetchResult: ns,
  classifyRscNavigationError: Js,
  classifyRootBoundaryTransition: Ts,
  classifyServerActionResult: qs,
  classifyVisitedResponseCacheCandidate: os,
  plan: Ks,
  resolveCurrentRootBoundaryElementPersistence: As,
  resolveMountedParallelSlotPersistence: Os,
  resolveSameLayoutAncestorPersistence: Es
};
var Xs = String.raw`(?:^|[^\w-])[\w-]+-Google|Google-[\w-]+|Chrome-Lighthouse|Slurp|DuckDuckBot|baiduspider|yandex|sogou|bitlybot|tumblr|vkShare|quora link preview|redditbot|ia_archiver|Bingbot|BingPreview|applebot|facebookexternalhit|facebookcatalog|meta-externalagent|meta-externalfetcher|Twitterbot|LinkedInBot|Slackbot|Discordbot|WhatsApp|SkypeUriPreview|Yeti|googleweblight`;
var Zs = /Googlebot(?!-)|Googlebot$/i;
var Qs = new Map();
function $s(e) {
  let t = e || Xs;
  let n = Qs.get(t);
  if (n) {
    return n;
  }
  let r = new RegExp(t, `i`);
  Qs.set(t, r);
  return r;
}
function ec(e, t) {
  if (e) {
    if (Zs.test(e)) {
      return true;
    } else {
      return $s(t).test(e);
    }
  } else {
    return false;
  }
}
function tc(e) {
  return /^[a-z][a-z0-9+.-]*:/i.test(e) || e.startsWith(`//`);
}
function nc() {
  return {
    staticChildren: new Map(),
    dynamicChild: null,
    catchAllChild: null,
    optionalCatchAllChild: null,
    route: null
  };
}
function rc(e) {
  let t = nc();
  for (let n of e) {
    let e = n.patternParts;
    if (e.length === 0) {
      if (t.route === null) {
        t.route = n;
      }
      continue;
    }
    let r = t;
    for (let t = 0; t < e.length; t++) {
      let i = e[t];
      if (i.endsWith(`+`) && i.startsWith(`:`)) {
        if (t !== e.length - 1) {
          break;
        }
        let a = i.slice(1, -1);
        if (r.catchAllChild === null) {
          r.catchAllChild = {
            paramName: a,
            route: n
          };
        }
        break;
      }
      if (i.endsWith(`*`) && i.startsWith(`:`)) {
        if (t !== e.length - 1) {
          break;
        }
        let a = i.slice(1, -1);
        if (r.optionalCatchAllChild === null) {
          r.optionalCatchAllChild = {
            paramName: a,
            route: n
          };
        }
        break;
      }
      if (i.startsWith(`:`)) {
        let a = i.slice(1);
        if (r.dynamicChild === null) {
          r.dynamicChild = {
            paramName: a,
            node: nc()
          };
        }
        r = r.dynamicChild.node;
        if (t === e.length - 1 && r.route === null) {
          r.route = n;
        }
        continue;
      }
      let a = r.staticChildren.get(i);
      if (!a) {
        a = nc();
        r.staticChildren.set(i, a);
      }
      r = a;
      if (t === e.length - 1 && r.route === null) {
        r.route = n;
      }
    }
  }
  return t;
}
function ic(e, t) {
  let n = ac(e, t);
  if (n) {
    At(n.params);
  }
  return n;
}
function ac(e, t) {
  return oc(e, t, 0, []);
}
function oc(e, t, n, r) {
  if (n === t.length) {
    if (e.route === null) {
      if (e.optionalCatchAllChild === null) {
        return null;
      } else {
        return {
          route: e.optionalCatchAllChild.route,
          params: x(r)
        };
      }
    } else {
      return {
        route: e.route,
        params: x(r)
      };
    }
  }
  let i = t[n];
  let a = e.staticChildren.get(i);
  if (a) {
    let e = oc(a, t, n + 1, r);
    if (e !== null) {
      return e;
    }
  }
  if (e.dynamicChild !== null) {
    r.push([e.dynamicChild.paramName, i]);
    let a = oc(e.dynamicChild.node, t, n + 1, r);
    if (a !== null) {
      return a;
    }
    r.pop();
  }
  if (e.catchAllChild !== null) {
    let i = t.slice(n);
    let a = x(r);
    a[e.catchAllChild.paramName] = i;
    return {
      route: e.catchAllChild.route,
      params: a
    };
  }
  if (e.optionalCatchAllChild !== null) {
    let i = x(r);
    i[e.optionalCatchAllChild.paramName] = t.slice(n);
    return {
      route: e.optionalCatchAllChild.route,
      params: i
    };
  }
  return null;
}
function sc() {
  return new WeakMap();
}
function cc(e, t) {
  let n = e.get(t);
  if (!n) {
    n = rc(t);
    e.set(t, n);
  }
  return n;
}
function lc(e, t, n) {
  let r = e.split(`?`)[0];
  let i = r === `/` ? `/` : r.replace(/\/$/, ``);
  i = Ot(i);
  let a = i.split(`/`).filter(Boolean);
  return ic(cc(n, t), a);
}
function uc(e, t, n) {
  let r = e.split(`?`)[0];
  let i = (r === `/` ? `/` : r.replace(/\/$/, ``)).split(`/`).filter(Boolean);
  return ic(cc(n, t), i);
}
function dc(e) {
  let t = document.documentElement;
  if (t.dataset.scrollBehavior !== `smooth`) {
    e();
    return;
  }
  let n = t.style.scrollBehavior;
  t.style.scrollBehavior = `auto`;
  t.getClientRects();
  try {
    e();
  } finally {
    t.style.scrollBehavior = n;
  }
}
function fc(e) {
  try {
    return decodeURIComponent(e);
  } catch {
    return e;
  }
}
function pc(e) {
  let t = fc(e.startsWith(`#`) ? e.slice(1) : e);
  if (t === `` || t === `top`) {
    window.scrollTo(0, 0);
    return;
  }
  let n = document.getElementById(t);
  if (n) {
    n.scrollIntoView({
      behavior: `auto`
    });
    return;
  }
  let r = document.getElementsByName(t)[0];
  if (r) {
    r.scrollIntoView({
      behavior: `auto`
    });
  } else {
    window.scrollTo(0, 0);
  }
}
function mc(e, t) {
  requestAnimationFrame(() => {
    if (!t || t()) {
      pc(e);
    }
  });
}
function hc(e, t, n) {
  let r = n?.minFrames ?? 0;
  let i = n?.shouldContinue ?? (() => true);
  let a = 0;
  let o = () => {
    if (!i()) {
      return;
    }
    window.scrollTo(e, t);
    let n = Math.abs(window.scrollY - t) <= 1;
    if (!!i() && (!n || !(a >= r)) && !(a >= 60)) {
      a += 1;
      requestAnimationFrame(o);
    }
  };
  o();
}
var gc = Symbol.for(`vinext.appRouterScrollIntent`);
function z() {
  let e = globalThis;
  e[gc] ??= {
    nextId: 0,
    pending: null
  };
  return e[gc];
}
function _c(e) {
  let t = z();
  t.nextId += 1;
  let n = {
    commitId: null,
    hash: e,
    headElements: typeof document > `u` ? null : new Set(document.head?.children ?? []),
    id: t.nextId,
    targetHoistedInHead: false
  };
  t.pending = n;
  return n;
}
function vc() {
  let e = z();
  e.nextId += 1;
  e.pending = null;
}
function yc() {
  return z().pending;
}
function bc(e) {
  return e != null && z().nextId === e.id;
}
function xc(e, t) {
  let n = z();
  let r = n.pending;
  if (e != null && r !== null && r.id === e.id) {
    n.pending = {
      ...r,
      commitId: t
    };
  }
}
function Sc(e, t) {
  let n = z();
  let r = n.pending;
  if (e != null && r !== null && r.id === e.id && r.commitId === t) {
    n.pending = {
      ...r,
      targetHoistedInHead: true
    };
  }
}
function Cc(e, t) {
  if (e == null) {
    return null;
  }
  let n = z();
  let r = n.pending;
  if (r === null || r.id !== e.id || t !== undefined && r.commitId !== t) {
    return null;
  } else {
    n.pending = null;
    return r;
  }
}
var wc = Symbol.for(`vinext.appPrefetchFetchSlotRelease`);
var Tc = 4;
var B = [];
var V = new WeakMap();
var Ec = new WeakMap();
var Dc = 0;
var Oc = 0;
var kc = false;
function Ac() {
  for (kc = false; Oc < Tc;) {
    let e = B.shift();
    if (!e) {
      return;
    }
    Oc += 1;
    e();
  }
}
function jc() {
  if (!kc) {
    kc = true;
    queueMicrotask(Ac);
  }
}
function Mc(e) {
  let t = e[wc];
  if (t !== undefined) {
    e[wc] = undefined;
    t();
  }
}
function Nc(e, t, n) {
  let r = new AbortController();
  if (t === `high`) {
    let t = e(r.signal);
    V.set(t, {
      cancel: () => r.abort()
    });
    t.then(e => {
      e[wc] = () => V.delete(t);
    }, () => V.delete(t));
    return t;
  }
  let i;
  let a;
  let o = false;
  let s = new Promise((t, c) => {
    a = c;
    i = (i = false) => {
      if (!i && n?.() === false) {
        V.delete(s);
        --Oc;
        c(new DOMException(`Prefetch is no longer wanted`, `AbortError`));
        return;
      }
      o = true;
      let a = false;
      let l = () => {
        if (!a) {
          a = true;
          V.delete(s);
          --Oc;
          Ac();
        }
      };
      try {
        e(r.signal).then(e => {
          e[wc] = l;
          t(e);
        }, e => {
          V.delete(s);
          l();
          c(e);
        });
      } catch (e) {
        V.delete(s);
        l();
        c(e);
      }
    };
  });
  let c = () => {
    if (o) {
      return;
    }
    let e = B.indexOf(i);
    if (e !== -1) {
      B.splice(e, 1);
      V.delete(s);
      r.abort();
      a(r.signal.reason);
    }
  };
  B.push(i);
  V.set(s, {
    runner: i,
    cancelQueued: c,
    cancel: () => {
      if (o) {
        r.abort();
      } else {
        c();
      }
    }
  });
  jc();
  return s;
}
function Pc(e) {
  if (e !== undefined) {
    V.get(e)?.cancel();
  }
}
function Fc(e, t = () => true) {
  if (e === undefined) {
    return () => {};
  }
  let n = Ec.get(e);
  if (n === undefined) {
    n = new Map();
    Ec.set(e, n);
  }
  n.set(t, ++Dc);
  let r = () => {
    n.delete(t);
  };
  let i = V.get(e)?.runner;
  if (i === undefined) {
    return r;
  }
  let a = B.indexOf(i);
  if (a !== -1) {
    B.splice(a, 1);
    Oc += 1;
    i(true);
  }
  return r;
}
var Ic = `modulepreload`;
function Lc(e) {
  return `/${e}`;
}
var Rc = {};
function zc(e, t, n) {
  let r = Promise.resolve();
  if (t && t.length > 0) {
    let e = document.getElementsByTagName(`link`);
    let i = document.querySelector(`meta[property=csp-nonce]`);
    let a = i?.nonce || i?.getAttribute(`nonce`);
    function o(e) {
      return Promise.all(e.map(e => Promise.resolve(e).then(e => ({
        status: `fulfilled`,
        value: e
      }), e => ({
        status: `rejected`,
        reason: e
      }))));
    }
    function s(e) {
      if (import.meta.resolve) {
        return import.meta.resolve(e);
      } else {
        return new URL(e, import.meta.url).href;
      }
    }
    r = o(t.map(t => {
      t = Lc(t, n);
      t = s(t);
      if (t in Rc) {
        return;
      }
      Rc[t] = true;
      let r = t.endsWith(`.css`);
      for (let n = e.length - 1; n >= 0; n--) {
        let i = e[n];
        if (i.href === t && (!r || i.rel === `stylesheet`)) {
          return;
        }
      }
      let i = document.createElement(`link`);
      i.rel = r ? `stylesheet` : Ic;
      if (!r) {
        i.as = `script`;
      }
      i.crossOrigin = ``;
      i.href = t;
      if (a) {
        i.setAttribute(`nonce`, a);
      }
      document.head.appendChild(i);
      if (r) {
        return new Promise((e, n) => {
          i.addEventListener(`load`, e);
          i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`)));
        });
      }
    }).filter(e => e !== undefined));
  }
  function i(e) {
    let t = new Event(`vite:preloadError`, {
      cancelable: true
    });
    t.payload = e;
    window.dispatchEvent(t);
    if (!t.defaultPrevented) {
      throw e;
    }
  }
  return r.then(t => {
    for (let e of t || []) {
      if (e.status === `rejected`) {
        i(e.reason);
      }
    }
    return e().catch(i);
  });
}
function Bc(e) {
  return null;
}
var Vc = false;
var Hc = 47185920;
function Uc(e, t) {
  if (e === undefined || e === ``) {
    return t;
  }
  let n = Number(e);
  if (!Number.isFinite(n) || n < 0) {
    return t;
  } else {
    return n * 1000;
  }
}
var Wc = Uc(`0`, 30000);
var H = Uc(`300`, 30000);
var Gc = 30;
var Kc = Gc * 1000;
function qc(e, t) {
  let n;
  try {
    n = new URL(e, window.location.href);
  } catch {
    return null;
  }
  return ti({
    basePath: ``,
    currentPathname: t ?? window.location.pathname,
    routeManifest: T()?.bootstrap.routeManifest ?? null,
    targetPathname: n.pathname
  });
}
function Jc() {
  return window.location.pathname + window.location.search;
}
function Yc(e) {
  let t = T()?.functions.getPrefetchRouterState?.() ?? null;
  return Va({
    ...e,
    nextUrl: Jc(),
    includePrefetchHeader: e.prefetchKind !== `full`,
    prefetchRouterState: t
  });
}
function U() {
  window.__VINEXT_RSC_PREFETCH_CACHE__ ||= new Map();
  return window.__VINEXT_RSC_PREFETCH_CACHE__;
}
function Xc(e) {
  let t = U();
  let n = t.get(e);
  if (n === undefined || n.pending || K(n) > Date.now()) {
    return n;
  }
  q(t, W(), e, n, true);
}
function W() {
  window.__VINEXT_RSC_PREFETCHED_URLS__ ||= new Set();
  return window.__VINEXT_RSC_PREFETCHED_URLS__;
}
function G(e) {
  return typeof e == `number` && Number.isFinite(e) && Number.isInteger(e) && e >= 0;
}
function Zc(e) {
  return typeof e == `number` && Number.isFinite(e) && e >= 0;
}
function Qc(e) {
  if (e === null || e === ``) {
    return;
  }
  let t = Number(e);
  if (G(t)) {
    return t;
  } else {
    return undefined;
  }
}
function $c(e) {
  if (e !== undefined) {
    if (e.kind === `pending`) {
      return Gc;
    } else {
      return Math.max(e.seconds, Gc);
    }
  }
}
function el(e) {
  let t = e.dynamicStaleTimeSeconds;
  let n = $c(e.serverStaleTime);
  if (G(t)) {
    if (n === undefined) {
      return t;
    } else {
      return Math.min(t, n);
    }
  } else {
    return n;
  }
}
function tl(e, t) {
  let n = el(e);
  if (n === undefined) {
    return t;
  } else {
    return n * 1000;
  }
}
function nl(e, t, n) {
  if (Zc(t.expiresAt)) {
    return t.expiresAt;
  } else {
    return e + tl(t, n);
  }
}
function rl(e, t, n, r) {
  if (Zc(t.expiresAt)) {
    return t.expiresAt;
  }
  let i = t.serverStaleTime?.kind === `pending` && r !== `verbatim` ? undefined : $c(t.serverStaleTime);
  if (i !== undefined) {
    return e + i * 1000;
  }
  if (r === `ignore`) {
    return e + Math.max(n, Kc);
  }
  let a = G(t.dynamicStaleTimeSeconds) ? t.dynamicStaleTimeSeconds : undefined;
  if (a === undefined) {
    return e + Math.max(n, Kc);
  } else if (r === `verbatim`) {
    return e + a * 1000;
  } else {
    return e + Math.max(a === 0 ? n : a * 1000, Kc);
  }
}
function K(e) {
  if (e.expiresAt === undefined) {
    if (e.snapshot) {
      return nl(e.timestamp, e.snapshot, H);
    } else {
      return e.timestamp + H;
    }
  } else {
    return e.expiresAt;
  }
}
function il(e) {
  if (e.mountedSlotsHeader === undefined) {
    return e.snapshot?.mountedSlotsHeader ?? null;
  } else {
    return e.mountedSlotsHeader;
  }
}
function al(e) {
  try {
    let t = Ua(e);
    za(t);
    return `${t.pathname}${t.search}`;
  } catch {
    return null;
  }
}
function ol(e, t) {
  return il(e) === t || (e.snapshot?.mountedSlotsHeader ?? null) === t;
}
function sl(e, t, n, r = []) {
  let i = U();
  let a = [e, ...r];
  for (let e of a) {
    let r = j.encodeCacheKey(e, t);
    let a = i.get(r);
    if (a && a.cacheForNavigation !== false && ol(a, n)) {
      return {
        cacheKey: r,
        entry: a
      };
    }
  }
  let o = new Set(a.map(e => al(e)).filter(e => e !== null));
  if (o.size === 0) {
    return null;
  }
  for (let [e, r] of i) {
    if (r.cacheForNavigation === false) {
      continue;
    }
    let i = j.decodeCacheKey(e);
    if (i.interceptionContext !== t) {
      continue;
    }
    let a = al(i.rscUrl);
    if (a !== null && o.has(a) && ol(r, n)) {
      return {
        cacheKey: e,
        entry: r
      };
    }
  }
  return null;
}
function cl(e, t = null, n = null, r = {}) {
  let i = sl(e, t, n, r.additionalRscUrls);
  if (i === null || i.entry.pending !== undefined && r.reusePending === false) {
    return false;
  } else if (i.entry.pending !== undefined || K(i.entry) > Date.now()) {
    hl(U(), i.cacheKey, i.entry);
    Nl(i.cacheKey, i.entry, r.onInvalidate);
    r.onReuse?.(i.entry, i.cacheKey);
    return true;
  } else {
    q(U(), W(), i.cacheKey, i.entry, r.notifyInvalidation ?? true);
    return false;
  }
}
function ll(e, t = null) {
  let n = j.encodeCacheKey(e, t);
  let r = U();
  let i = r.get(n);
  if (i?.cacheForNavigation === false) {
    if (i.pending !== undefined || K(i) > Date.now()) {
      hl(r, n, i);
      return true;
    } else {
      q(r, W(), n, i, true);
      return false;
    }
  } else {
    return false;
  }
}
function ul(e) {
  return e.snapshot?.buffer.byteLength ?? e.size ?? 0;
}
var dl = null;
var fl = 0;
function pl(e) {
  if (dl === e) {
    return fl;
  }
  let t = 0;
  let n = new Set();
  for (let r of e.values()) {
    if (!n.has(r)) {
      n.add(r);
      t += ul(r);
    }
  }
  dl = e;
  fl = t;
  return t;
}
function ml(e, t) {
  if (dl === e) {
    fl = Math.max(0, fl + t);
  }
}
function hl(e, t, n) {
  if (e.get(t) === n) {
    e.delete(t);
    e.set(t, n);
    for (let r of n.cacheKeys ?? []) {
      if (r !== t && e.get(r) === n) {
        e.delete(r);
        e.set(r, n);
      }
    }
  }
}
function gl() {
  let e = U();
  let t = pl(e);
  if (t <= 52428800) {
    return;
  }
  let n = Date.now();
  let r = W();
  for (let [t, i] of e) {
    if (K(i) <= n) {
      q(e, r, t, i, true);
    }
  }
  t = pl(e);
  if (t <= 52428800) {
    return;
  }
  let i = 0;
  while (t > Hc && i < e.size) {
    let n = e.keys().next().value;
    if (n !== undefined) {
      let a = e.get(n);
      if (a) {
        let o = ul(a);
        if (a.pending !== undefined && o === 0) {
          hl(e, n, a);
          i += 1;
          continue;
        }
        t -= o;
        q(e, r, n, a, true);
        i = 0;
      } else {
        e.delete(n);
        r.delete(n);
        i += 1;
      }
    } else {
      break;
    }
  }
}
var _l = new Set();
function vl(e) {
  let t = {
    destination: e,
    cancelled: false
  };
  _l.add(t);
  return t;
}
function yl(e) {
  for (let t of _l) {
    if (e === null || t.destination === e) {
      t.cancelled = true;
    }
  }
}
function bl(e) {
  let t = e;
  if (tc(e)) {
    let n = po(e, ``);
    if (n == null) {
      return null;
    }
    t = n;
  }
  let n = xo(t, window.location.href, ``, Vc);
  try {
    return Ga(new URL(n, window.location.href));
  } catch {
    return n.split(`#`, 1)[0];
  }
}
function xl(e) {
  if (e.invalidationTimer !== undefined) {
    clearTimeout(e.invalidationTimer);
    e.invalidationTimer = undefined;
  }
}
function Sl(e) {
  try {
    e();
  } catch (e) {
    if (typeof reportError == `function`) {
      reportError(e);
    } else {
      console.error(e);
    }
  }
}
function Cl(e) {
  xl(e);
  let t = e.onInvalidateCallbacks;
  e.onInvalidateCallbacks = undefined;
  if (t !== undefined) {
    for (let e of t) {
      Sl(e);
    }
  }
}
var wl = new Set();
function Tl(e) {
  let t = e.onInvalidateCallbacks;
  if (t !== undefined && t.size !== 0) {
    El(t, K(e));
  }
}
function El(e, t, n = false) {
  let r = Math.max(0, t - Date.now());
  let i = {
    callbacks: e,
    ...(n ? {
      forVisitedResponse: true
    } : {}),
    timer: setTimeout(() => Dl(i), r)
  };
  wl.add(i);
}
function Dl(e) {
  if (wl.delete(e)) {
    clearTimeout(e.timer);
    for (let t of e.callbacks) {
      Sl(t);
    }
  }
}
function q(e, t, n, r, i) {
  let a = r.cacheKeys ?? new Set([n]);
  let o = false;
  for (let n of a) {
    if (e.get(n) === r) {
      e.delete(n);
      t.delete(n);
      o = true;
    }
  }
  if (o) {
    ml(e, -ul(r));
    r.cacheKeys = undefined;
    if (i) {
      Cl(r);
    } else {
      xl(r);
      r.onInvalidateCallbacks = undefined;
    }
  }
}
function Ol(e, t = null, n = null) {
  let r = U();
  let i = W();
  let a = al(e);
  if (a === null) {
    return false;
  }
  let o = [];
  for (let [e, i] of r) {
    if (i.cacheForNavigation !== false || i.prefetchKind !== `navigation`) {
      continue;
    }
    let r = j.decodeCacheKey(e);
    if (r.interceptionContext === t && al(r.rscUrl) === a && ol(i, n)) {
      o.push([e, i]);
    }
  }
  for (let [e, t] of o) {
    Pc(t.fetchPromise);
    q(r, i, e, t, true);
  }
  return o.length > 0;
}
function kl(e, t) {
  if (t.dynamicStaleTime === `learning-only`) {
    if (t.cacheForNavigation !== false) {
      t.dynamicStaleTime = `full-prefetch`;
      if (t.snapshot !== undefined) {
        t.expiresAt = rl(t.timestamp, t.snapshot, t.fallbackTtlMs ?? H, `full-prefetch`);
        jl(e, t);
      }
    }
  } else {
    t.cacheForNavigation = true;
  }
}
function Al(e) {
  let t = U();
  let n = t.get(e);
  if (n) {
    q(t, W(), e, n, true);
  }
}
function jl(e, t) {
  if (t.onInvalidateCallbacks === undefined || t.onInvalidateCallbacks.size === 0) {
    return;
  }
  xl(t);
  let n = Math.max(0, K(t) - Date.now());
  t.invalidationTimer = setTimeout(() => {
    Al(e);
  }, n);
}
function Ml(e, t) {
  if (t !== undefined) {
    if (e.onInvalidateCallbacks === undefined) {
      e.onInvalidateCallbacks = new Set();
    }
    e.onInvalidateCallbacks.add(t);
  }
}
function Nl(e, t, n) {
  if (n !== undefined) {
    Ml(t, n);
    if (t.outcome === `cache-seeded`) {
      jl(e, t);
    }
  }
}
function Pl(e, t) {
  if (t === undefined) {
    return;
  }
  let n = U().get(e);
  if (n) {
    Nl(e, n, t);
  }
}
function Fl(e = {}) {
  yl(null);
  let t = U();
  let n = W();
  for (let [e, r] of t) {
    q(t, n, e, r, true);
  }
  n.clear();
  for (let e of wl) {
    Dl(e);
  }
  if (e.pingVisibleLinks !== false) {
    T()?.functions.pingVisibleLinks?.();
  }
}
function Il() {
  let e = U();
  let t = W();
  let n = [];
  for (let [t, r] of e) {
    if (r.prefetchKind !== `route-tree` && (r.prefetchKind === undefined || r.dynamicStaleTime !== `full-prefetch` && (r.snapshot === undefined || !!G(r.snapshot.dynamicStaleTimeSeconds)))) {
      n.push([t, r]);
    }
  }
  for (let [r, i] of n) {
    q(e, t, r, i, true);
  }
}
function Ll() {
  for (let e of wl) {
    if (e.forVisitedResponse === true) {
      Dl(e);
    }
  }
}
function Rl() {
  let e = false;
  for (let t of new Set(U().values())) {
    if (t.prefetchKind === undefined && t.reuseAfterHistoryRestore !== true) {
      e ||= t.cacheForNavigation !== false;
      t.cacheForNavigation = false;
    }
  }
  if (e) {
    T()?.functions.pingVisibleLinks?.();
  }
}
function zl(e, t, n = null, r = null, i = Wc, a = false, o = nl(Date.now(), t, i)) {
  let s = j.encodeCacheKey(e, n);
  let c = U();
  let l = c.get(s);
  if (l) {
    q(c, W(), s, l, false);
  }
  let u = Date.now();
  let d = {
    cacheForNavigation: true,
    cacheKeys: new Set([s]),
    expiresAt: o,
    mountedSlotsHeader: r,
    outcome: `cache-seeded`,
    reuseAfterHistoryRestore: a,
    size: t.buffer.byteLength,
    snapshot: t,
    timestamp: u
  };
  c.set(s, d);
  ml(c, t.buffer.byteLength);
  W().add(s);
  jl(s, d);
  gl();
}
function Bl(e, t, n, r = [], i) {
  let a = T()?.functions.readVisitedResponseForFullPrefetch?.([e, ...r], t, n);
  if (!a) {
    return false;
  }
  let o = a.navigatedAt + Math.max(H, Kc);
  if (o <= Date.now()) {
    return false;
  }
  zl(e, a.response, t, n, undefined, true, o);
  let s = j.encodeCacheKey(e, t);
  return U().get(s)?.snapshot === a.response && (Pl(s, i), true);
}
function Vl(e, t, n, r = [], i) {
  let a = T()?.functions.readVisitedResponseForFullPrefetch?.([e, ...r], t, n)?.navigationFreshUntil;
  return a != null && (i !== undefined && El(new Set([i]), a, true), true);
}
function Hl(e, t, n = null) {
  let r = j.encodeCacheKey(e, n);
  let i = U();
  let a = i.get(r);
  if (a?.snapshot === t) {
    q(i, W(), r, a, false);
  }
}
function Ul(e, t, n = null) {
  let r = Qc(e.headers.get(ua));
  let i = e.headers.get(da);
  let a = i === `1` ? ro(t) : {
    buffer: t
  };
  let o = i === `resolved` ? r : a.metadata?.dynamicStaleTimeSeconds ?? r;
  let s = o ?? r;
  let c = Wl(e.headers);
  let l = a.metadata !== undefined && Object.hasOwn(a.metadata, `serverStaleTimeSeconds`) ? a.metadata?.serverStaleTimeSeconds === null ? undefined : {
    kind: `resolved`,
    seconds: a.metadata.serverStaleTimeSeconds
  } : c;
  let u = e.headers.get(ma);
  let d = e.headers.get(ha);
  return {
    compatibilityIdHeader: e.headers.get(xa),
    buffer: a.buffer,
    ...(o === undefined ? {} : {
      completedDynamicStaleTimeSeconds: o
    }),
    contentType: e.headers.get(`content-type`) ?? `text/x-component`,
    ...(s === undefined ? {} : {
      dynamicStaleTimeSeconds: s
    }),
    mountedSlotsHeader: e.headers.get(vn),
    paramsHeader: e.headers.get(la),
    receivedAt: Date.now(),
    ...(u === null ? {} : {
      redirectHeader: u
    }),
    ...(d === null ? {} : {
      redirectTypeHeader: d
    }),
    renderedPathAndSearch: Gl(e.headers.get(fa)),
    ...(l === undefined ? {} : {
      serverStaleTime: l
    }),
    url: n ?? e.url
  };
}
function Wl(e) {
  if (e.get(`X-Vinext-Stale-Time-Pending`) === `1`) {
    return {
      kind: `pending`
    };
  }
  let t = Qc(e.get(ga));
  if (t === undefined) {
    return undefined;
  } else {
    return {
      kind: `resolved`,
      seconds: t
    };
  }
}
function Gl(e) {
  if (e === null || e === ``) {
    return null;
  }
  try {
    let t = decodeURIComponent(e);
    if (t.startsWith(`/`)) {
      return t;
    } else {
      return null;
    }
  } catch {
    return null;
  }
}
async function Kl(e) {
  try {
    let t = Ul(e, await e.arrayBuffer());
    let n = ql.get(e);
    if (n === undefined) {
      return t;
    } else {
      return {
        ...t,
        expiresAt: n
      };
    }
  } finally {
    Mc(e);
  }
}
var ql = new WeakMap();
function Jl(e, t = true) {
  let n = new Headers({
    "content-type": e.contentType
  });
  if (e.mountedSlotsHeader != null) {
    n.set(vn, e.mountedSlotsHeader);
  }
  if (e.compatibilityIdHeader != null) {
    n.set(xa, e.compatibilityIdHeader);
  }
  if (G(e.dynamicStaleTimeSeconds)) {
    n.set(ua, String(e.dynamicStaleTimeSeconds));
  }
  if (G(e.completedDynamicStaleTimeSeconds)) {
    n.set(da, `resolved`);
  }
  if (e.serverStaleTime?.kind === `pending`) {
    n.set(_a, `1`);
  } else if (e.serverStaleTime !== undefined) {
    n.set(ga, String(e.serverStaleTime.seconds));
  }
  if (e.paramsHeader != null) {
    n.set(la, e.paramsHeader);
  }
  if (e.redirectHeader !== undefined) {
    n.set(ma, e.redirectHeader);
  }
  if (e.redirectTypeHeader !== undefined) {
    n.set(ha, e.redirectTypeHeader);
  }
  if (e.renderedPathAndSearch != null) {
    n.set(fa, encodeURIComponent(e.renderedPathAndSearch));
  }
  let r = new Response(t ? e.buffer.slice(0) : e.buffer, {
    status: 200,
    headers: n
  });
  if (Zc(e.expiresAt)) {
    ql.set(r, e.expiresAt);
  }
  return r;
}
async function Yl(e) {
  let t = T()?.functions.preparePrefetchResponse;
  if (!t) {
    throw Error(`App Router prefetch preparation is unavailable`);
  }
  return await t(Jl(e));
}
async function Xl(e) {
  let {
    fetchFullRscPayload: t,
    fetchRouteTree: n,
    fullHref: r,
    headers: i,
    interceptionContext: a,
    mountedSlotsHeader: o
  } = e;
  let s = new Headers(i);
  s.set(E, `1`);
  s.set(mn, `/_tree`);
  let c = await Ka(r, s);
  let l = j.encodeCacheKey(c, a);
  let u = Xc(l);
  if (u === undefined) {
    W().add(l);
    Ql(c, n(c, s), a, o, undefined, {
      cacheForNavigation: false,
      optimisticRouteShell: false,
      prefetchKind: `route-tree`
    });
    u = Xc(l);
  }
  await u?.pending?.catch(() => {});
  u = Xc(l);
  let d = u?.snapshot?.renderedPathAndSearch;
  if (d) {
    let e = eu(await Ka(d, i), a, o);
    if (e) {
      return Jl(e);
    }
  }
  return t();
}
function Zl(e) {
  if (e.ok) {
    return e.headers.get(`content-type`)?.toLowerCase().startsWith(Sa) === true;
  } else {
    return false;
  }
}
function Ql(e, t, n = null, r = null, i, a = {}) {
  let o = j.encodeCacheKey(e, n);
  let s = U();
  let c = W();
  let l = Date.now();
  let u = s.get(o);
  let d = a.cacheForNavigation ?? true;
  if (u) {
    q(s, c, o, u, false);
  }
  let f = {
    cacheForNavigation: d,
    cacheKeys: new Set([o]),
    mountedSlotsHeader: r,
    optimisticRouteShell: a.optimisticRouteShell === true,
    outcome: `pending`,
    prefetchKind: a.prefetchKind ?? (a.optimisticRouteShell === true ? `loading-shell` : `navigation`),
    searchAgnosticShell: a.searchAgnosticShell === true,
    timestamp: l
  };
  if (a.dynamicStaleTime === `learning-only` && a.searchAgnosticShell !== true) {
    f.dynamicStaleTime = `learning-only`;
    f.fallbackTtlMs = a.fallbackTtlMs ?? H;
  } else if (a.dynamicStaleTime === `full-prefetch`) {
    f.dynamicStaleTime = `full-prefetch`;
  }
  Ml(f, i?.onInvalidate);
  f.fetchPromise = t;
  f.pending = t.then(async e => {
    if (Zl(e)) {
      let t = await Kl(e);
      if (s.get(o) !== f) {
        return;
      }
      let n = ul(f);
      f.snapshot = t;
      f.size = t.buffer.byteLength;
      ml(s, f.size - n);
      let r = a.fallbackTtlMs ?? H;
      let i = a.searchAgnosticShell === true ? `ignore` : f.dynamicStaleTime ?? a.dynamicStaleTime ?? (a.optimisticRouteShell === true ? `ignore` : `verbatim`);
      if (i === `learning-only` && G(t.dynamicStaleTimeSeconds)) {
        f.cacheForNavigation = false;
        f.expiresAt = f.timestamp + Math.max(r, Kc);
      } else {
        f.expiresAt = rl(f.timestamp, f.snapshot, r, i === `learning-only` ? `verbatim` : i);
      }
      if (a.prepareSnapshot && f.cacheForNavigation && t.redirectHeader === undefined) {
        try {
          let e = await a.prepareSnapshot(t);
          if (s.get(o) !== f) {
            return;
          }
          f.preparedElements = e;
        } catch {}
      }
      $l(s, c, o, f);
      gl();
    } else {
      Mc(e);
      e.body?.cancel().catch(() => {});
      q(s, c, o, f, false);
    }
  }).catch(() => {
    q(s, c, o, f, false);
  }).finally(() => {
    if (s.get(o) === f) {
      f.pending = undefined;
      f.fetchPromise = undefined;
      if (f.snapshot) {
        f.outcome = `cache-seeded`;
        jl(o, f);
      }
    }
  });
  s.set(o, f);
  gl();
}
function $l(e, t, n, r) {
  if (r.cacheForNavigation === false) {
    return;
  }
  let i = r.snapshot?.renderedPathAndSearch;
  if (!i) {
    return;
  }
  let a = j.decodeCacheKey(n);
  let o = j.encodeCacheKey(i, a.interceptionContext);
  if (o === n) {
    return;
  }
  let s = e.get(o);
  if (s && s !== r) {
    q(e, t, o, s, false);
  }
  r.cacheKeys ??= new Set([n]);
  r.cacheKeys.add(o);
  e.set(o, r);
  t.add(o);
}
function eu(e, t = null, n = null, r) {
  let i = sl(e, t, n, r?.additionalRscUrls);
  if (!i) {
    return null;
  }
  let {
    cacheKey: a,
    entry: o
  } = i;
  if (o.pending || o.outcome !== `cache-seeded` || o.cacheForNavigation === false || !o.snapshot) {
    return null;
  } else if (K(o) <= Date.now()) {
    q(U(), W(), a, o, true);
    return null;
  } else if (o.expiresAt !== undefined || o.snapshot.expiresAt !== undefined) {
    return {
      ...o.snapshot,
      expiresAt: K(o)
    };
  } else {
    return o.snapshot;
  }
}
function tu(e, t = null, n = null, r) {
  let i = U();
  let a = j.encodeCacheKey(e, t);
  let o = i.get(a);
  if (o && o.cacheForNavigation !== false && !ol(o, n)) {
    q(i, W(), a, o, false);
  }
  let s = sl(e, t, n, r?.additionalRscUrls);
  if (!s) {
    return null;
  }
  let {
    cacheKey: c,
    entry: l
  } = s;
  return nu(c, l, n);
}
function nu(e, t, n, r = false) {
  let i = U();
  if (t.pending || t.outcome !== `cache-seeded` || t.cacheForNavigation === false) {
    return null;
  }
  if (t.snapshot) {
    if (!ol(t, n)) {
      return null;
    }
    if (!r && K(t) <= Date.now()) {
      q(i, W(), e, t, true);
      return null;
    }
    Tl(t);
    q(i, W(), e, t, false);
    let a = t.snapshot;
    if (t.expiresAt !== undefined || t.snapshot.expiresAt !== undefined) {
      return {
        ...a,
        expiresAt: K(t),
        ...(t.preparedElements ? {
          preparedElements: t.preparedElements
        } : {})
      };
    } else if (t.preparedElements) {
      return {
        ...a,
        preparedElements: t.preparedElements
      };
    } else {
      return a;
    }
  }
  return null;
}
async function ru(e, t = null, n = null, r) {
  let i = U();
  let a = sl(e, t, n, r?.additionalRscUrls);
  if (!a) {
    return null;
  }
  let {
    cacheKey: o,
    entry: s
  } = a;
  if (r?.shouldConsume?.() === false) {
    return null;
  }
  let c = s.pending !== undefined;
  if (s.pending !== undefined) {
    let e = Fc(s.fetchPromise, r?.shouldConsume);
    try {
      await s.pending.catch(() => {});
    } finally {
      e();
    }
    if (i.get(o) !== s || r?.shouldConsume?.() === false) {
      return null;
    }
  }
  return nu(o, s, n, c);
}
var iu = Symbol.for(`vinext.mountedSlotsHeader`);
function au(e) {
  let t = window;
  t[iu] = e;
}
function ou() {
  return window[iu] ?? null;
}
function su(e) {
  let t = v();
  if (!t) {
    return e();
  }
  t.suppressUrlNotifyCount += 1;
  try {
    return e();
  } finally {
    --t.suppressUrlNotifyCount;
  }
}
function cu(e, t) {
  try {
    return JSON.stringify(e) === JSON.stringify(t);
  } catch {
    return false;
  }
}
function lu(e, t, n, r, i) {
  let a = e.routerHistoryWrite;
  if (a?.method !== t) {
    return false;
  }
  if (a.threw) {
    if (i == null || new URL(i, window.location.href).href !== a.href || a.data !== n && (!Fi(n) || P(n) !== P(a.data))) {
      return false;
    }
  } else if (a.data !== n || a.url !== i) {
    return false;
  }
  if (a.landed) {
    return true;
  }
  e.routerHistoryWrite = null;
  let o = a.land?.(n);
  let s = t === `pushState` ? e.originalPushState : e.originalReplaceState;
  let c = o ? o.data : n;
  let l = window.history.state;
  try {
    s.call(window.history, c, r, i);
  } catch (t) {
    let n = window.history.state !== l && window.location.href === a.href && cu(window.history.state, c);
    if (n) {
      o?.commit();
    }
    e.routerHistoryWrite = {
      ...a,
      threw: true,
      landed: n
    };
    throw t;
  }
  o?.commit();
  if (a.threw) {
    e.routerHistoryWrite = {
      ...a,
      landed: true
    };
  }
  return true;
}
function uu(e, t, n, r, i) {
  su(() => {
    let a = v();
    if (!a) {
      return;
    }
    if (r == null) {
      (e === `pushState` ? a.originalPushState : a.originalReplaceState).call(window.history, t, n, r);
      return;
    }
    let o = a.routerHistoryWrite;
    a.routerHistoryWriteDepth += 1;
    a.routerHistoryWrite = {
      method: e,
      data: t,
      url: r,
      href: new URL(r, window.location.href).href,
      land: i,
      threw: false,
      landed: false
    };
    try {
      window.history[e](t, n, r);
    } finally {
      --a.routerHistoryWriteDepth;
      a.routerHistoryWrite = o;
    }
  });
}
function du(e, t, n, r) {
  uu(`pushState`, e, t, n, r);
}
function fu(e, t, n, r) {
  uu(`replaceState`, e, t, n, r);
}
function pu() {
  fu({
    ...(window.history.state ?? {}),
    __vinext_scrollX: window.scrollX,
    __vinext_scrollY: window.scrollY
  }, ``);
}
function mu(e, t, n) {
  let r = T()?.functions.commitHashNavigation;
  if (r) {
    r(e, t, n);
    return;
  }
  let i = Yi(window.history.state);
  if (t === `replace`) {
    fu(i, ``, e);
  } else {
    du(i, ``, e);
  }
}
function hu(e) {
  if (typeof document < `u`) {
    if (e.hash !== null) {
      let t = e.hash;
      requestAnimationFrame(() => {
        if (bc(e)) {
          dc(() => {
            pc(t);
          });
        }
      });
    } else if (!e.targetHoistedInHead) {
      dc(() => {
        document.documentElement.scrollTop = 0;
      });
    }
  }
}
function gu(e) {
  queueMicrotask(() => {
    let t = yc();
    if (t === null || t.id !== e.id) {
      return;
    }
    let n = Cc(e);
    if (n) {
      hu(n);
    }
  });
}
function _u(e) {
  if (e && typeof e == `object` && `__vinext_scrollY` in e) {
    let {
      __vinext_scrollX: t,
      __vinext_scrollY: n
    } = e;
    Promise.resolve().then(() => {
      let e = window.__VINEXT_RSC_PENDING__ ?? null;
      if (e) {
        e.then(() => hc(t, n));
      } else {
        hc(t, n);
      }
    });
  }
}
function vu(e, t) {
  if (t === `replace`) {
    window.location.replace(e);
  } else {
    window.location.assign(e);
  }
}
function yu() {
  T()?.functions.notifyLinkNavigationStart?.();
}
function bu(e) {
  let t = bl(e);
  if (t !== null && !So(e, window.location.href, ``)) {
    yl(t);
  }
  yu();
}
function xu() {
  let e = bl(window.location.href);
  if (e !== null) {
    yl(e);
  }
  yu();
}
async function Su(e, t, n, r = false, i = `transition`) {
  bu(e);
  let a = e;
  if (tc(e)) {
    let n = po(e, ``);
    if (n == null) {
      u(e, t);
      let n = T()?.functions.navigateExternal;
      if (n) {
        await n(e, t);
        return;
      }
      vu(e, t);
      await new Promise(() => {});
      return;
    }
    a = n;
  }
  let o = Bc(a);
  if (o === `pages` || o === `document`) {
    let e = xo(a, window.location.href, ``, Vc);
    u(e, t);
    if (t === `push`) {
      pu();
    }
    let n = T()?.functions.navigateExternal;
    if (n) {
      await n(e, t);
      return;
    }
    vu(e, t);
    await new Promise(() => {});
    return;
  }
  let s = xo(a, window.location.href, ``, Vc);
  u(s, t);
  if (t === `push`) {
    pu();
  }
  let c = Ys.classifyEarlyNavigationIntent({
    basePath: ``,
    currentUrlSpace: `browser`,
    currentHref: window.location.href,
    mode: t,
    scroll: n,
    targetHref: s
  });
  if (c.kind === `sameDocumentScroll`) {
    vc();
    mu(s, c.mode, c.scroll);
    Dn(s);
    y();
    if (c.scroll) {
      pc(c.hash);
    }
    return;
  }
  if (Ja(typeof document > `u` ? undefined : document)) {
    let e = T()?.functions.navigateExternal;
    if (e) {
      await e(s, t);
      return;
    }
    vu(s, t);
    await new Promise(() => {});
    return;
  }
  let l = s.indexOf(`#`);
  let d = l === -1 ? `` : s.slice(l);
  let f = n ? _c(d || null) : null;
  if (!n) {
    vc();
  }
  let p = T()?.functions.navigate;
  try {
    if (p) {
      await p(s, 0, `navigate`, t, undefined, r, undefined, f, i, c.bypassNavigationCache);
    } else {
      if (t === `replace`) {
        fu(null, ``, s);
      } else {
        du(null, ``, s);
      }
      y();
    }
  } catch (e) {
    if (f) {
      Cc(f);
    }
    throw e;
  }
  if (f) {
    gu(f);
  }
}
var Cu = 0;
function wu() {
  Cu += 1;
  let e = false;
  return () => {
    if (!e) {
      e = true;
      Cu = Math.max(0, Cu - 1);
    }
  };
}
function Tu() {
  return Cu > 0;
}
function Eu(e) {
  queueMicrotask(e);
}
var Du = 0;
var Ou = false;
function ku() {
  Du += 1;
  let e = false;
  return () => {
    if (!e) {
      e = true;
      Du = Math.max(0, Du - 1);
      if (Du === 0 && Ou) {
        Ou = false;
        T()?.functions.pingVisibleLinks?.();
      }
    }
  };
}
function Au() {
  if (Du > 0) {
    Ou = true;
  } else {
    T()?.functions.pingVisibleLinks?.();
  }
}
var ju = {
  bfcacheId: `0`,
  push(e, t) {
    Ao(e);
    bu(e);
    let n = wu();
    try {
      a.startTransition(() => {
        Su(e, `push`, t?.scroll !== false, true);
      });
    } catch (e) {
      n();
      throw e;
    }
    Eu(n);
  },
  replace(e, t) {
    Ao(e);
    bu(e);
    let n = wu();
    try {
      a.startTransition(() => {
        Su(e, `replace`, t?.scroll !== false, true);
      });
    } catch (e) {
      n();
      throw e;
    }
    Eu(n);
  },
  back() {
    window.history.back();
  },
  forward() {
    window.history.forward();
  },
  refresh() {
    T()?.functions.clearNavigationCaches?.({
      pingVisibleLinks: false
    });
    let e = T()?.functions.navigate;
    if (Tu() || !e) {
      T()?.functions.pingVisibleLinks?.();
    } else {
      a.startTransition(() => {
        e(window.location.href, 0, `refresh`, undefined, undefined, true).finally(Au);
      });
    }
  },
  prefetch(e, t) {
    Ao(e);
    if (ec(window.navigator?.userAgent ?? ``)) {
      return;
    }
    try {
      new URL(vo(e, ``), window.location.href);
    } catch {
      throw Error(`Cannot prefetch '${e}' because it cannot be converted to a URL.`);
    }
    let n = tc(e) ? po(e, ``) : e;
    if (n == null) {
      return;
    }
    let r = bl(n);
    if (r === null) {
      return;
    }
    let i = window.location.pathname;
    let a = qc(r, i);
    let o = ou();
    let s = Yc({
      fetchPriority: `low`,
      interceptionContext: a,
      mountedSlotsHeader: o || null
    });
    let c = vl(r);
    (async () => {
      let e = dn();
      if (e !== null) {
        if (!(await e) || c.cancelled) {
          return;
        }
        a = qc(r, i);
        if (a !== null) {
          s.set(gn, a);
        }
      }
      let n = Bc(r);
      if (n === `pages` || n === `document`) {
        return;
      }
      let l = t?.kind === `full` ? `full` : `auto`;
      let [{
        resolveAutoAppRoutePrefetch: u,
        resolveFullAppRoutePrefetch: d
      }, {
        resolveAppPrefetchRscRequest: f
      }] = await Promise.all([zc(() => Promise.resolve().then(() => $f), []), zc(() => Promise.resolve().then(() => Zf), undefined)]);
      if (c.cancelled) {
        return;
      }
      let p = l === `full` ? d() : u(r, a);
      let m = p.shouldPrefetch && p.cacheForNavigation;
      let ee = p.requiresRouteTreePrefetch === true;
      if (m && l === `full`) {
        s.delete(E);
      }
      if (m && l === `auto`) {
        s.set(E, `1`);
        s.set(mn, ee ? `/__PAGE__` : `1`);
      }
      let te = new URL(r, window.location.href).search !== ``;
      if (!m && l === `auto`) {
        s.set(E, `1`);
        s.set(mn, `1`);
        s.set(yn, te && p.rendersDynamically !== true ? ea : ta);
      }
      let {
        additionalRscUrls: h,
        rscUrl: g
      } = await f({
        fullHref: r,
        headers: s,
        rewrittenPrefetchHref: null
      });
      if (c.cancelled) {
        return;
      }
      let ne = j.encodeCacheKey(g, a);
      let re = W();
      if (p.dynamicStaleTime !== `full-prefetch` && ll(g, a)) {
        Pl(ne, t?.onInvalidate);
        return;
      }
      if (m && (Ol(g, a, o), cl(g, a, o, {
        additionalRscUrls: h,
        onInvalidate: t?.onInvalidate,
        onReuse: p.dynamicStaleTime === `full-prefetch` ? (e, t) => kl(t, e) : undefined
      }) || p.dynamicStaleTime === `full-prefetch` && Bl(g, a, o, h, t?.onInvalidate)) || p.dynamicStaleTime !== `full-prefetch` && Vl(g, a, o, h, t?.onInvalidate)) {
        return;
      }
      re.add(ne);
      let ie = () => Nc(e => fetch(g, {
        headers: s,
        credentials: `include`,
        priority: `low`,
        signal: e
      }), `low`);
      let ae = m && l === `auto` && ee ? Xl({
        fetchFullRscPayload: ie,
        fetchRouteTree: (e, t) => Nc(n => fetch(e, {
          headers: t,
          credentials: `include`,
          priority: `low`,
          signal: n
        }), `low`),
        fullHref: r,
        headers: s,
        interceptionContext: a,
        mountedSlotsHeader: o
      }) : ie();
      let oe = {
        fallbackTtlMs: p.fallbackTtl === `dynamic` ? Wc : H,
        dynamicStaleTime: p.dynamicStaleTime,
        prefetchKind: `navigation`
      };
      Ql(g, ae, a, o, t, m ? {
        ...oe,
        cacheForNavigation: true,
        optimisticRouteShell: false,
        prepareSnapshot: Yl
      } : {
        ...oe,
        cacheForNavigation: false,
        optimisticRouteShell: true
      });
    })().catch(e => {
      console.error(`[vinext] RSC prefetch setup error:`, e);
    }).finally(() => {
      _l.delete(c);
    });
  }
};
{
  let e = v();
  if (e && !e.patchInstalled) {
    e.patchInstalled = true;
    e.originalPushState = window.history.pushState.bind(window.history);
    e.originalReplaceState = window.history.replaceState.bind(window.history);
    window.addEventListener(`popstate`, () => {
      xu();
    });
    window.addEventListener(`popstate`, e => {
      if (!fn()) {
        y();
        _u(e.state);
      }
    });
    window.history.pushState = function (t, n, r) {
      if (lu(e, `pushState`, t, n, r)) {
        return;
      }
      if (e.routerHistoryWriteDepth === 0) {
        T()?.functions.flushCommittingNavigationUrl?.();
      }
      if (Fi(t)) {
        let i = window.history.state;
        e.originalPushState.call(window.history, t, n, r);
        T()?.functions.commitAppOwnedHistoryStateWrite?.(`push`, i);
        return;
      }
      let i = window.history.state;
      e.originalPushState.call(window.history, Mi(t, window.history.state), n, r);
      T()?.functions.claimCurrentHistoryTreeSnapshot?.(`push`, i);
      if (e.suppressUrlNotifyCount === 0) {
        yu();
        if (r) {
          T()?.functions.discardPendingNavigation?.();
        }
        y();
      }
    };
    window.history.replaceState = function (t, n, r) {
      if (lu(e, `replaceState`, t, n, r)) {
        return;
      }
      if (e.routerHistoryWriteDepth === 0) {
        T()?.functions.flushCommittingNavigationUrl?.();
      }
      if (Fi(t)) {
        let i = window.history.state;
        e.originalReplaceState.call(window.history, t, n, r);
        T()?.functions.commitAppOwnedHistoryStateWrite?.(`replace`, i);
        return;
      }
      let i = window.history.state;
      e.originalReplaceState.call(window.history, Mi(t, window.history.state), n, r);
      T()?.functions.claimCurrentHistoryTreeSnapshot?.(`replace`, i);
      if (e.suppressUrlNotifyCount === 0) {
        yu();
        if (r) {
          T()?.functions.discardPendingNavigation?.();
        }
        y();
      }
    };
  }
}
var J = i();
var Mu = t(r(), 1);
var Nu = a.createContext(null);
var Pu = `__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE`;
var Fu = [`bottom`, `height`, `left`, `right`, `top`, `width`, `x`, `y`];
function Iu() {
  let e = Reflect.get(Mu, Pu);
  if (typeof e != `object` || !e) {
    return null;
  }
  let t = Reflect.get(e, `findDOMNode`);
  if (typeof t == `function`) {
    return t;
  } else {
    return null;
  }
}
function Lu(e) {
  let t = Iu();
  if (!t) {
    return null;
  }
  let n = t(e);
  if (n instanceof Element || n instanceof Text) {
    return n;
  } else {
    return null;
  }
}
function Ru(e) {
  let t = getComputedStyle(e).position;
  if (t === `fixed` || t === `sticky`) {
    return true;
  }
  let n = e.getBoundingClientRect();
  return Fu.every(e => n[e] === 0);
}
function zu(e, t) {
  let n = e.getClientRects();
  if (n.length === 0) {
    return false;
  }
  let r = Infinity;
  for (let e of n) {
    if (e.top < r) {
      r = e.top;
    }
  }
  return r >= 0 && r <= t;
}
function Bu(e) {
  let t = fc(e.startsWith(`#`) ? e.slice(1) : e);
  if (t === `top`) {
    return document.body;
  } else {
    return document.getElementById(t) ?? document.getElementsByName(t)[0] ?? null;
  }
}
function Vu(e) {
  let t = e.ownerDocument?.head;
  return t != null && t.contains(e);
}
function Hu(e) {
  if (!(e instanceof Element) || Vu(e)) {
    return null;
  }
  let t = e;
  while (!(t instanceof HTMLElement) || Ru(t)) {
    if (t.nextElementSibling === null) {
      return null;
    }
    t = t.nextElementSibling;
  }
  return {
    kind: `element`,
    element: t
  };
}
function Uu(e, t) {
  if (t !== null) {
    e.scrollIntoView({
      behavior: `auto`
    });
    return;
  }
  let n = document.documentElement;
  let r = n.clientHeight;
  if (!zu(e, r)) {
    n.scrollTop = 0;
    if (!zu(e, r)) {
      e.scrollIntoView({
        behavior: `auto`,
        block: `start`,
        inline: `nearest`
      });
    }
  }
}
var Wu = class extends a.Component {
  scheduledCommitId = null;
  schedulePotentialScroll = () => {
    let e = this.props.commitId;
    this.scheduledCommitId = e;
    queueMicrotask(() => {
      if (this.scheduledCommitId === e) {
        this.handlePotentialScroll();
      }
    });
  };
  handlePotentialScroll = () => {
    let e = yc();
    if (e === null || this.props.commitId === null || e.commitId !== this.props.commitId) {
      return;
    }
    let t;
    t = e.hash === null ? null : Bu(e.hash);
    if (t === null) {
      t = Lu(this);
      let n = t instanceof Element ? t : t?.parentElement;
      if (t !== null && n != null && Vu(t) && !e.headElements?.has(n)) {
        Sc(e, this.props.commitId);
        return;
      }
    }
    let n = Hu(t);
    if (n === null) {
      return;
    }
    let r = n.element;
    let i = Cc(e, this.props.commitId);
    if (i !== null) {
      dc(() => {
        Uu(r, i.hash);
      });
      r.focus();
    }
  };
  componentDidMount() {
    this.schedulePotentialScroll();
  }
  componentDidUpdate() {
    this.schedulePotentialScroll();
  }
  componentWillUnmount() {
    this.scheduledCommitId = null;
  }
  render() {
    return this.props.children;
  }
};
function Gu({
  children: e,
  commitId: t
}) {
  return <Nu.Provider value={t}>{e}</Nu.Provider>;
}
function Ku({
  children: e
}) {
  let t = a.useContext(Nu);
  return <Wu commitId={t}>{e}</Wu>;
}
var qu = Object.freeze({});
var Y = a.createContext(qu);
var Ju = a.createContext(null);
var Yu = a.createContext(null);
var Xu = a.createContext(undefined);
var Zu = new WeakMap();
function Qu(e, t) {
  for (let n of Object.values(e)) {
    if (typeof n == `object` && n) {
      Zu.set(n, t);
    }
  }
}
function $u(e, t) {
  for (let n of Object.values(e)) {
    if (typeof n == `object` && n && !Zu.has(n)) {
      Zu.set(n, t);
    }
  }
}
function ed(e) {
  if (typeof e != `object` || !e) {
    return;
  }
  let t = Zu.get(e);
  if (typeof t == `object`) {
    return t.renderedSearch ?? t.search;
  } else {
    return t;
  }
}
var td = Ie();
var X = Le();
var nd = Object.freeze({});
var rd = 3;
var id = 1;
var ad = new Map();
function od(e) {
  return sd(ad, e);
}
function sd(e, t) {
  for (let n of e.values()) {
    if (n.keys.includes(t) || n.hiddenKeys.includes(t) || sd(n.activeReports, t)) {
      return true;
    }
  }
  return false;
}
var cd = a.createContext(ad);
function ld(e, t) {
  for (let n of e.values()) {
    for (let e of n.keys) {
      t.add(e);
    }
    for (let e of n.hiddenKeys) {
      t.add(e);
    }
    ld(n.activeReports, t);
  }
}
var ud = a.createContext(nd);
function dd() {
  return true;
}
function fd() {
  if (dd()) {
    return rd;
  } else {
    return id;
  }
}
function pd(e) {
  if (Number.isFinite(e)) {
    return Math.max(1, Math.trunc(e));
  } else {
    return 1;
  }
}
function md(e, t, n = fd()) {
  let r = pd(n);
  let i = [t];
  for (let n of e) {
    if (i.length >= r) {
      break;
    }
    if (n !== t) {
      i.push(n);
    }
  }
  return i;
}
function hd(e, t) {
  let n = new Set(t);
  for (let t of e.keys()) {
    if (!n.has(t)) {
      e.delete(t);
    }
  }
}
function gd(e, t) {
  if (e.length !== t.length) {
    return false;
  }
  for (let n = 0; n < e.length; n++) {
    if (e[n] !== t[n]) {
      return false;
    }
  }
  return true;
}
function _d(e, t, n, r = fd()) {
  let i = new Map(e);
  i.set(n.stateKey, n);
  let a = md(t, n.stateKey, r);
  hd(i, a);
  return {
    entries: a.map(e => i.get(e)).filter(e => e !== undefined),
    order: a,
    snapshots: i
  };
}
function vd(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) {
    return false;
  } else {
    return `schemaVersion` in e && `appElementsSchemaVersion` in e && `rscPayloadSchemaVersion` in e && `graphVersion` in e && `deploymentVersion` in e && `rootBoundaryId` in e && `renderEpoch` in e;
  }
}
function yd(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) {
    return false;
  } else {
    return `ownerLayoutId` in e && `slotId` in e && `state` in e;
  }
}
function bd(e) {
  return Array.isArray(e) && e.length > 0 && e.every(yd);
}
function xd(e, t) {
  return e === `__skippedLayoutIds` && Array.isArray(t) && t.every(e => typeof e == `string`);
}
function Sd(e, t) {
  if (e !== `__bfcacheSegmentIdentities` || typeof t != `object` || !t || Array.isArray(t)) {
    return false;
  } else {
    return Object.entries(t).every(([e, t]) => {
      let n = j.parseElementKey(e);
      return n !== null && n.kind !== `route` && typeof t == `string`;
    });
  }
}
function Cd(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) {
    return false;
  } else {
    return `sourceMatchedUrl` in e && typeof e.sourceMatchedUrl == `string` && `sourceRouteId` in e && typeof e.sourceRouteId == `string` && `slotId` in e && typeof e.slotId == `string` && `targetMatchedUrl` in e && typeof e.targetMatchedUrl == `string` && `targetRouteId` in e && typeof e.targetRouteId == `string`;
  }
}
function wd(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) {
    return false;
  } else {
    return `kind` in e && e.kind === `runtime-cache-entry` && `decision` in e;
  }
}
function Td(e, t) {
  return Sd(e, t) || vd(t) || wd(t) || Cd(t) || xd(e, t) || bd(t);
}
function Ed({
  entry: e,
  fallbackElements: t,
  fallbackSegmentId: n,
  fallbackStateKeyMap: r,
  retainedKeysReports: i,
  SegmentContext: a
}) {
  return <ud.Provider value={e.stateKeyMap ?? r}><Y.Provider value={e.elements ?? t}><a.Provider value={e.segmentId ?? n}><cd.Provider value={i}>{e.content}</cd.Provider></a.Provider></Y.Provider></ud.Provider>;
}
function Dd(e, t) {
  let n = a.useRef(new Map());
  let [r, i] = a.useState(() => [t.stateKey]);
  let [o] = a.useState(() => new Map());
  let s = e => {
    let t = o.get(e);
    if (!t) {
      t = new Map();
      o.set(e, t);
    }
    return t;
  };
  let c = n.current;
  let l = _d(c, r, t);
  for (let [e, n] of l.entries.entries()) {
    if (n.stateKey === t.stateKey || n.retainedKeys) {
      continue;
    }
    let r = new Set([n.stateKey]);
    ld(s(n.stateKey), r);
    let i = {
      ...n,
      retainedKeys: [...r]
    };
    l.entries[e] = i;
    l.snapshots.set(n.stateKey, i);
  }
  let u = l.order;
  let d = !gd(r, u);
  a.useLayoutEffect(() => {
    n.current = l.snapshots;
    for (let e of o.keys()) {
      if (!l.snapshots.has(e)) {
        o.delete(e);
      }
    }
  }, [o, l.snapshots]);
  let f = [...new Set(l.entries.flatMap(e => e.retainedKeys ?? []))];
  let p = a.useContext(cd);
  let m = {
    activeReports: s(t.stateKey),
    hiddenKeys: f,
    keys: l.entries.map(e => e.stateKey)
  };
  a.useLayoutEffect(() => {
    p.set(e, m);
  });
  if (d) {
    i(u);
  }
  return {
    entries: l.entries,
    getRetainedKeysReports: s
  };
}
function Od({
  activeStateKey: e,
  content: t,
  elements: n,
  id: r,
  SegmentContext: i,
  stateKeyMap: o
}) {
  let {
    entries: s,
    getRetainedKeysReports: c
  } = Dd(r, {
    content: t,
    elements: n,
    segmentId: r,
    stateKey: e,
    stateKeyMap: o
  });
  return <J.Fragment>{s.map(t => <a.Activity mode={t.stateKey === e ? `visible` : `hidden`} key={t.stateKey}><Ed entry={t} fallbackElements={n} fallbackSegmentId={r} fallbackStateKeyMap={o} retainedKeysReports={c(t.stateKey)} SegmentContext={i} /></a.Activity>)}</J.Fragment>;
}
function kd({
  children: e,
  id: t,
  stateKey: n
}) {
  let r = a.useContext(Y);
  let i = a.useContext(ud);
  let o = Nd(t, i, a.useContext(td));
  if (!X || o === undefined) {
    return <a.Fragment key={n}>{e}</a.Fragment>;
  } else if (dd()) {
    return <Od activeStateKey={o} content={e} elements={r} id={t} SegmentContext={X} stateKeyMap={i} />;
  } else {
    return <X.Provider value={t} key={o}>{e}</X.Provider>;
  }
}
function Ad({
  children: e,
  id: t,
  stateKey: n
}) {
  if (!td || !X || !dd()) {
    return <J.Fragment>{e}</J.Fragment>;
  } else {
    return <_Component id={t} IdMapContext={td} SegmentContext={X} stateKey={n}>{e}</_Component>;
  }
}
function _Component({
  children: e,
  id: t,
  IdMapContext: n,
  SegmentContext: r,
  stateKey: i
}) {
  let o = a.useContext(Y);
  let s = a.useContext(ud);
  let c = a.useContext(n);
  let l = a.useContext(r);
  let u = Kr(o);
  let d = i === undefined ? t === undefined ? undefined : Nd(t, s, c) : u?.(i) ?? i;
  if (l === null || d === undefined) {
    return <J.Fragment>{e}</J.Fragment>;
  } else {
    return <Od activeStateKey={d} content={e} elements={o} id={l} SegmentContext={r} stateKeyMap={s} />;
  }
}
function Md(e, t) {
  let n = j.parseElementKey(e);
  if (n !== null && n.kind !== `route`) {
    return t;
  } else {
    return undefined;
  }
}
function Nd(e, t, n) {
  return t[e] ?? n?.[e];
}
function Pd({
  content: e,
  id: t
}) {
  let n = X;
  let r = a.useContext(Y);
  let i = a.useContext(ud);
  let o = Nd(t, i, a.useContext(td));
  if (n) {
    if (o === undefined) {
      return <n.Provider value={t}>{e}</n.Provider>;
    } else if (dd()) {
      return <Od activeStateKey={o} content={e} elements={r} id={t} SegmentContext={n} stateKeyMap={i} />;
    } else {
      return <n.Provider value={t} key={Md(t, o)}>{e}</n.Provider>;
    }
  } else {
    return <J.Fragment>{e}</J.Fragment>;
  }
}
function Fd(e, t, n = {}) {
  let r = typeof n == `boolean` ? n : n.clearAbsentSlots ?? false;
  let i = typeof n == `boolean` ? !n : n.preserveAbsentSlots ?? true;
  let a = typeof n == `boolean` ? [] : n.preserveElementIds ?? [];
  let o = typeof n == `boolean` ? [] : n.preserveElementSeedIds ?? [];
  let s = typeof n == `boolean` ? [] : n.preservePreviousSlotIds ?? [];
  let c = {
    ...t
  };
  let l = new Set();
  for (let t of a) {
    if (Object.hasOwn(e, t)) {
      let n = e[t];
      if (n !== undefined) {
        c[t] = n;
        l.add(t);
      }
    }
  }
  for (let t of o) {
    if (l.has(t) || !Object.hasOwn(e, t)) {
      continue;
    }
    let n = e[t];
    if (n !== undefined) {
      c[t] = n;
    }
  }
  let u = new Set([...Object.keys(e), ...Object.keys(t)].filter(e => j.isSlotId(e) && !ci(e)));
  if (r) {
    for (let e of u) {
      if (!Object.hasOwn(t, e)) {
        delete c[e];
      }
    }
  } else if (i) {
    for (let t of u) {
      if (!Object.hasOwn(c, t) && Object.hasOwn(e, t)) {
        let n = e[t];
        if (n !== undefined) {
          c[t] = n;
          l.add(t);
        }
      }
    }
  }
  for (let t of s) {
    if (!j.isSlotId(t) || !Object.hasOwn(e, t)) {
      continue;
    }
    let n = e[t];
    if (n !== undefined && n !== sr) {
      c[t] = n;
      l.add(t);
      for (let n of Object.keys(e)) {
        if (!li(n, t)) {
          continue;
        }
        let r = e[n];
        if (r !== undefined) {
          c[n] = r;
        }
        l.add(n);
      }
    }
  }
  if (l.size > 0) {
    let n = e[O];
    let r = t[O];
    let i = Sd(O, n);
    let a = Sd(O, r);
    let o = i ? {
      ...n
    } : {};
    let s = a ? {
      ...r
    } : {};
    let u = new Set([...Object.keys(o), ...Object.keys(s)]);
    let d = new Set(l);
    for (let e of d) {
      for (let t of u) {
        if (li(t, e)) {
          l.add(t);
        }
      }
    }
    for (let e of l) {
      let t = o[e];
      if (t === undefined) {
        delete s[e];
      } else {
        s[e] = t;
      }
    }
    if (i || a) {
      c[O] = s;
    }
  }
  return c;
}
function Id({
  id: e,
  children: t,
  parallelSlots: n
}) {
  let r = a.useContext(Y);
  if (!Object.hasOwn(r, e)) {
    return null;
  }
  let i = r[e];
  if (Td(e, i) || (i === sr && fe(), i === null)) {
    return null;
  }
  let o = <Xu.Provider value={ed(i)}><Yu.Provider value={n ?? null}><Ju.Provider value={t ?? null}>{i}</Ju.Provider></Yu.Provider></Xu.Provider>;
  if (td && X) {
    return <Pd id={e} content={o} />;
  } else {
    return o;
  }
}
function Ld() {
  return a.useContext(Ju);
}
function Rd({
  name: e
}) {
  return a.useContext(Yu)?.[e] ?? null;
}
var zd = Symbol.for(`vinext.clientNavigationState`);
var Bd = Symbol.for(`vinext.clientNavigationRenderContext`);
var Vd = ``;
var Hd = false;
function Ud() {
  return globalThis[zd];
}
function Wd() {
  return Ud()?.cachedPathname ?? p(window.location.pathname, Vd);
}
function Gd() {
  return We()?.pathname ?? `/`;
}
function Kd(e) {
  let t = Ud();
  if (t) {
    t.listeners.add(e);
    return () => t.listeners.delete(e);
  } else {
    return () => {};
  }
}
function qd() {
  let e = globalThis;
  return e[Bd] ??= a.createContext(null);
}
function Jd() {
  let e = a.useContext(qd());
  let t = a.useSyncExternalStore(Kd, Wd, Gd);
  if (e && (Ud()?.navigationSnapshotActiveCount ?? 0) > 0) {
    return e.pathname;
  } else {
    return t;
  }
}
function Yd() {
  if (!we || typeof a.useContext != `function`) {
    throw Error(`invariant expected app router to be mounted`);
  }
  let e = a.useContext(we);
  if (e === null) {
    throw Error(`invariant expected app router to be mounted`);
  }
  return e;
}
function Xd(e) {
  try {
    let t = new URL(window.location.href);
    let n = new URL(xo(po(e, Vd) ?? e, t.href, Vd, Hd), t.href);
    return n.hash === t.hash && n.origin === t.origin && n.pathname === t.pathname && n.search === t.search;
  } catch {
    return false;
  }
}
var Z = {
  container: {
    fontFamily: `system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
    height: `100vh`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`
  },
  card: {
    marginTop: `-32px`,
    maxWidth: `325px`,
    padding: `32px 28px`,
    textAlign: `left`
  },
  icon: {
    marginBottom: `24px`
  },
  title: {
    fontSize: `24px`,
    fontWeight: 500,
    letterSpacing: `-0.02em`,
    lineHeight: `32px`,
    margin: `0 0 12px 0`,
    color: `var(--next-error-title)`
  },
  message: {
    fontSize: `14px`,
    fontWeight: 400,
    lineHeight: `21px`,
    margin: `0 0 20px 0`,
    color: `var(--next-error-message)`
  },
  form: {
    margin: 0
  },
  buttonGroup: {
    display: `flex`,
    gap: `8px`,
    alignItems: `center`
  },
  button: {
    display: `inline-flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: `32px`,
    padding: `0 12px`,
    fontSize: `14px`,
    fontWeight: 500,
    lineHeight: `20px`,
    borderRadius: `6px`,
    cursor: `pointer`,
    color: `var(--next-error-btn-text)`,
    background: `var(--next-error-btn-bg)`,
    border: `var(--next-error-btn-border)`
  },
  buttonSecondary: {
    display: `inline-flex`,
    alignItems: `center`,
    justifyContent: `center`,
    height: `32px`,
    padding: `0 12px`,
    fontSize: `14px`,
    fontWeight: 500,
    lineHeight: `20px`,
    borderRadius: `6px`,
    cursor: `pointer`,
    color: `var(--next-error-btn-secondary-text)`,
    background: `var(--next-error-btn-secondary-bg)`,
    border: `var(--next-error-btn-secondary-border)`
  },
  digestFooter: {
    position: `fixed`,
    bottom: `32px`,
    left: `0`,
    right: `0`,
    textAlign: `center`,
    fontFamily: `ui-monospace,SFMono-Regular,"SF Mono",Menlo,Consolas,monospace`,
    fontSize: `12px`,
    lineHeight: `18px`,
    fontWeight: 400,
    margin: `0`,
    color: `var(--next-error-digest)`
  }
};
var Zd = `
:root {
  --next-error-bg: #fff;
  --next-error-text: #171717;
  --next-error-title: #171717;
  --next-error-message: #171717;
  --next-error-digest: #666666;
  --next-error-btn-text: #fff;
  --next-error-btn-bg: #171717;
  --next-error-btn-border: none;
  --next-error-btn-secondary-text: #171717;
  --next-error-btn-secondary-bg: transparent;
  --next-error-btn-secondary-border: 1px solid rgba(0,0,0,0.08);
}
@media (prefers-color-scheme: dark) {
  :root {
    --next-error-bg: #0a0a0a;
    --next-error-text: #ededed;
    --next-error-title: #ededed;
    --next-error-message: #ededed;
    --next-error-digest: #a0a0a0;
    --next-error-btn-text: #0a0a0a;
    --next-error-btn-bg: #ededed;
    --next-error-btn-border: none;
    --next-error-btn-secondary-text: #ededed;
    --next-error-btn-secondary-bg: transparent;
    --next-error-btn-secondary-border: 1px solid rgba(255,255,255,0.14);
  }
}
body { margin: 0; color: var(--next-error-text); background: var(--next-error-bg); }
`.replace(/\n\s*/g, ``);
function Qd() {
  const Component = `path`;
  const Component2 = `svg`;
  return <Component2 width={`32`} height={`32`} viewBox={`-0.2 -1.5 32 32`} fill={`none`} style={Z.icon}><Component d={`M16.9328 0C18.0839 0.000116771 19.1334 0.658832 19.634 1.69531L31.4299 26.1309C32.0708 27.4588 31.1036 28.9999 29.6291 29H2.00215C0.527541 29 -0.439628 27.4588 0.201371 26.1309L11.9973 1.69531C12.4979 0.658823 13.5474 7.75066e-05 14.6984 0H16.9328ZM3.59493 26H28.0363L16.9328 3H14.6984L3.59493 26ZM15.8156 19C16.9202 19.0001 17.8156 19.8955 17.8156 21C17.8156 22.1045 16.9202 22.9999 15.8156 23C14.7111 23 13.8156 22.1046 13.8156 21C13.8156 19.8954 14.7111 19 15.8156 19ZM17.3156 16.5H14.3156V8.5H17.3156V16.5Z`} fill={`var(--next-error-title)`} /></Component2>;
}
function $d() {
  if (window.history.length > 1) {
    window.history.back();
  } else {
    window.location.href = `/`;
  }
}
function ef({
  error: e
}) {
  let t = e?.digest;
  let n = !!t;
  let r = n ? `A server error occurred. Reload to try again.` : `Reload to try again, or go back.`;
  const Component3 = `style`;
  const Component4 = `head`;
  const Component5 = `h1`;
  const Component6 = `p`;
  const Component7 = `button`;
  const Component8 = `form`;
  const Component9 = `button`;
  const Component10 = `div`;
  const Component11 = `div`;
  const Component12 = `div`;
  const Component13 = `p`;
  const Component14 = `body`;
  const Component15 = `html`;
  return <Component15 id={`__next_error__`}><Component4><Component3 dangerouslySetInnerHTML={{
        __html: Zd
      }} /></Component4><Component14><Component12 style={Z.container}><Component11 style={Z.card}><Qd /><Component5 style={Z.title}>{`This page couldn’t load`}</Component5><Component6 style={Z.message}>{r}</Component6><Component10 style={Z.buttonGroup}><Component8 style={Z.form}><Component7 type={`submit`} style={Z.button}>{`Reload`}</Component7></Component8>{!n && <Component9 type={`button`} style={Z.buttonSecondary} onClick={$d}>{`Back`}</Component9>}</Component10></Component11></Component12>{t && <Component13 style={Z.digestFooter}>{`ERROR `}{t}</Component13>}</Component14></Component15>;
}
var tf = `vinext:dev-error-recovery`;
function nf(e) {
  if (!e || typeof e != `object` || !(`digest` in e)) {
    return null;
  } else {
    return String(e.digest);
  }
}
function rf(e) {
  let t = nf(e);
  if (t === null) {
    return false;
  } else {
    return t === `NEXT_NOT_FOUND` || t.startsWith(`NEXT_HTTP_ERROR_FALLBACK;`) || t.startsWith(`NEXT_REDIRECT;`);
  }
}
var af = Symbol.for(`vinext.caughtNotFoundBoundariesContext`);
var of = `__VINEXT_CAUGHT_NOT_FOUND__`;
function sf() {
  if (typeof a.createContext != `function`) {
    return null;
  }
  let e = globalThis;
  e[af] ??= a.createContext(null);
  return e[af];
}
var cf = sf();
function lf(e) {
  a.useContext(cf);
  return e !== undefined && globalThis[of]?.includes(e) === true;
}
function uf(e) {
  if (e === undefined) {
    return;
  }
  let t = globalThis[of];
  let n = t?.indexOf(e) ?? -1;
  if (n !== -1) {
    t.splice(n, 1);
  }
}
function df({
  fallback: _Component2,
  error: t
}) {
  let n = Object.assign(Error(t.message), {
    digest: t.digest,
    name: t.name ?? `Error`,
    stack: t.stack
  });
  return <_Component2 error={n} reset={() => globalThis.location?.reload()} />;
}
function ff(e) {
  if (e == null || e === ``) {
    return null;
  } else {
    return e;
  }
}
function Q(e) {
  return {
    previousPathname: e.pathname,
    previousResetKey: ff(e.resetKey)
  };
}
function pf(e, t) {
  return e.previousPathname !== t.previousPathname || ff(e.previousResetKey) !== ff(t.previousResetKey);
}
function mf(e) {
  window.addEventListener(tf, e);
}
function hf(e) {
  window.removeEventListener(tf, e);
}
function _Component3({
  redirect: e,
  redirectType: t,
  reset: n,
  stopsSelfRedirect: r
}) {
  let i = Yd();
  a.useEffect(() => {
    if (r && Xd(e)) {
      console.error(`[vinext] redirect() resolved to the current URL — not following it, to prevent an infinite loop.`);
    } else {
      a.startTransition(() => {
        if (t === `push`) {
          i.push(e);
        } else {
          i.replace(e);
        }
        n();
      });
    }
  }, [e, t, n, i, r]);
  return null;
}
var _f = class extends a.Component {
  constructor(e) {
    super(e);
    this.state = {
      redirect: null,
      redirectType: null,
      previousResetKey: ff(e.resetKey)
    };
  }
  static getDerivedStateFromProps(e, t) {
    let n = ff(e.resetKey);
    if (n === t.previousResetKey) {
      return null;
    } else {
      return {
        redirect: null,
        redirectType: null,
        previousResetKey: n
      };
    }
  }
  static getDerivedStateFromError(e) {
    if (he(e)) {
      if (`handled` in e && e.handled) {
        return {
          redirect: null,
          redirectType: null
        };
      }
      let t = ge(e.digest);
      if (!t) {
        throw e;
      }
      return {
        redirect: t.url,
        redirectType: t.type
      };
    }
    throw e;
  }
  render() {
    let {
      redirect: e,
      redirectType: t
    } = this.state;
    if (e !== null && t !== null) {
      return <_Component3 redirect={e} redirectType={t} reset={() => this.setState({
        redirect: null,
        redirectType: null
      })} stopsSelfRedirect={this.props.resetKey !== undefined} />;
    } else {
      return this.props.children;
    }
  }
};
function vf({
  children: e,
  resetKey: t
}) {
  return <_f resetKey={t}>{e}</_f>;
}
var _Component5 = class extends a.Component {
  constructor(e) {
    super(e);
    this.state = {
      error: null,
      ...Q(e)
    };
  }
  static getDerivedStateFromProps(e, t) {
    let n = Q(e);
    if (t.error && On(t.error.thrownValue) || t.error && pf(n, t)) {
      return {
        error: null,
        ...n
      };
    } else {
      return {
        error: t.error,
        ...n
      };
    }
  }
  static getDerivedStateFromError(e) {
    if (rf(e)) {
      throw e;
    }
    return {
      error: {
        thrownValue: e
      }
    };
  }
  handleDevErrorRecovery = () => {
    if (this.state.error) {
      this.setState({
        error: null,
        ...Q(this.props)
      });
    }
  };
  componentDidMount() {
    mf(this.handleDevErrorRecovery);
  }
  componentWillUnmount() {
    hf(this.handleDevErrorRecovery);
  }
  reset = () => {
    this.setState({
      error: null
    });
  };
  render() {
    if (this.state.error) {
      let _Component4 = this.props.fallback;
      return <_Component4 error={this.state.error.thrownValue} reset={this.reset} />;
    }
    return this.props.children;
  }
};
function bf({
  fallback: e,
  children: t,
  isGlobalErrorBoundary: n,
  resetKey: r
}) {
  let i = Jd();
  return <_Component5 pathname={i} resetKey={r} fallback={e} isGlobalErrorBoundary={n}>{t}</_Component5>;
}
function xf({
  fallback: e,
  children: t,
  wrapsGlobalErrorBoundary: n
}) {
  let r = Jd();
  return <_Component5 pathname={r} fallback={e} isImplicitRootErrorBoundary={e === ef} wrapsGlobalErrorBoundary={n}>{t}</_Component5>;
}
var Sf = class extends a.Component {
  constructor(e) {
    super(e);
    this.state = {
      notFound: e.initiallyNotFound === true,
      ...Q(e)
    };
  }
  componentDidMount() {
    if (this.props.initiallyNotFound === true) {
      uf(this.props.caughtId);
    }
  }
  static getDerivedStateFromProps(e, t) {
    let n = Q(e);
    if (t.notFound && pf(n, t)) {
      return {
        notFound: false,
        ...n
      };
    } else {
      return {
        notFound: t.notFound,
        ...n
      };
    }
  }
  static getDerivedStateFromError(e) {
    if (e && typeof e == `object` && `digest` in e) {
      let t = String(e.digest);
      if (t === `NEXT_NOT_FOUND` || t === `NEXT_HTTP_ERROR_FALLBACK;404`) {
        return {
          notFound: true
        };
      }
    }
    throw e;
  }
  render() {
    if (this.state.notFound) {
      const Component16 = `meta`;
      return <J.Fragment><Component16 name={`robots`} content={`noindex`} />{this.props.fallback}</J.Fragment>;
    } else {
      return this.props.children;
    }
  }
};
function Cf({
  status: e
}) {
  if (e === 403) {
    pe();
  }
  if (e === 401) {
    me();
  }
  fe();
}
function wf({
  fallback: e,
  children: t,
  resetKey: n,
  caughtId: r
}) {
  let i = Jd();
  let a = lf(r);
  return <Sf pathname={i} resetKey={n} fallback={e} caughtId={r} initiallyNotFound={a}>{t}</Sf>;
}
var Tf = class extends a.Component {
  constructor(e) {
    super(e);
    this.state = {
      forbidden: false,
      ...Q(e)
    };
  }
  static getDerivedStateFromProps(e, t) {
    let n = Q(e);
    if (t.forbidden && pf(n, t)) {
      return {
        forbidden: false,
        ...n
      };
    } else {
      return {
        forbidden: t.forbidden,
        ...n
      };
    }
  }
  static getDerivedStateFromError(e) {
    if (e && typeof e == `object` && `digest` in e && String(e.digest) === `NEXT_HTTP_ERROR_FALLBACK;403`) {
      return {
        forbidden: true
      };
    }
    throw e;
  }
  render() {
    if (this.state.forbidden) {
      const Component17 = `meta`;
      return <J.Fragment><Component17 name={`robots`} content={`noindex`} />{this.props.fallback}</J.Fragment>;
    } else {
      return this.props.children;
    }
  }
};
function Ef({
  fallback: e,
  children: t,
  resetKey: n
}) {
  let r = Jd();
  return <Tf pathname={r} resetKey={n} fallback={e}>{t}</Tf>;
}
var Df = class extends a.Component {
  constructor(e) {
    super(e);
    this.state = {
      unauthorized: false,
      ...Q(e)
    };
  }
  static getDerivedStateFromProps(e, t) {
    let n = Q(e);
    if (t.unauthorized && pf(n, t)) {
      return {
        unauthorized: false,
        ...n
      };
    } else {
      return {
        unauthorized: t.unauthorized,
        ...n
      };
    }
  }
  static getDerivedStateFromError(e) {
    if (e && typeof e == `object` && `digest` in e && String(e.digest) === `NEXT_HTTP_ERROR_FALLBACK;401`) {
      return {
        unauthorized: true
      };
    }
    throw e;
  }
  render() {
    if (this.state.unauthorized) {
      const Component18 = `meta`;
      return <J.Fragment><Component18 name={`robots`} content={`noindex`} />{this.props.fallback}</J.Fragment>;
    } else {
      return this.props.children;
    }
  }
};
function Of({
  fallback: e,
  children: t,
  resetKey: n
}) {
  let r = Jd();
  return <Df pathname={r} resetKey={n} fallback={e}>{t}</Df>;
}
a.Component;
var kf = {
  module: `m`,
  preload: `p`
};
var Af = new Map();
function $(e, t) {
  Af.set(e, t);
}
var jf = new Proxy({}, {
  get(e, t) {
    if (typeof t == `string` && t !== `then`) {
      return async () => {
        let e = Af.get(t);
        if (!e) {
          throw Error(`client reference not found '${t}'`);
        }
        return e;
      };
    }
  }
});
function Mf(e, t) {
  for (let n of document.getElementsByTagName(`link`)) {
    if (n.href === e && (!t || n.rel === `stylesheet`)) {
      return true;
    }
  }
  return false;
}
function Nf(e, t) {
  let n = new URL(e, document.baseURI).href;
  if (Mf(n, t)) {
    return null;
  }
  let r = document.createElement(`link`);
  r.rel = t ? `stylesheet` : `modulepreload`;
  if (!t) {
    r.as = `script`;
  }
  r.crossOrigin = ``;
  r.href = n;
  let i = document.querySelector(`meta[property=csp-nonce]`);
  let a = i?.nonce || i?.getAttribute(`nonce`);
  if (a) {
    r.setAttribute(`nonce`, a);
  }
  document.head.appendChild(r);
  return r;
}
var Pf = new Map();
function Ff(e) {
  let t = new URL(e, document.baseURI).href;
  let n = Pf.get(t);
  if (n) {
    return n;
  }
  let r = Nf(e, true);
  n = r ? new Promise(t => {
    r.addEventListener(`load`, () => t());
    r.addEventListener(`error`, () => {
      let n = new Event(`vite:preloadError`, {
        cancelable: true
      });
      n.payload = Error(`Unable to preload CSS for ${e}`);
      window.dispatchEvent(n);
      t();
    });
  }) : Promise.resolve();
  Pf.set(t, n);
  return n;
}
function If(e) {
  let t = e.slice(1);
  switch (e[0]) {
    case kf.module:
      {
        let [e, ...n] = t.split(`
`);
        return Promise.all(n.map(Ff)).then(() => import(e));
      }
    case kf.preload:
      Nf(t, false);
      return Promise.resolve();
    default:
      return Promise.reject(Error(`[vinext] Unknown client reference chunk '${e}'`));
  }
}
globalThis.__webpack_chunk_load__ = If;
function Lf(e) {
  let t = Object.create(null);
  e?.forEach((e, n) => {
    let r = t[n];
    if (Array.isArray(r)) {
      t[n] = [...r, e];
    } else if (r === undefined) {
      t[n] = e;
    } else {
      t[n] = [r, e];
    }
  });
  return t;
}
var Rf = new Set([`hasOwnProperty`, `isPrototypeOf`, `propertyIsEnumerable`, `toString`, `valueOf`, `toLocaleString`, `then`, `catch`, `finally`, `status`, `value`, `error`, `displayName`, `_debugInfo`, `toJSON`, `$$typeof`, `__esModule`, `@@iterator`]);
function zf(e) {
  return Rf.has(e);
}
function Bf(e) {
  return e === `hasOwnProperty` || e === `propertyIsEnumerable`;
}
function Vf() {
  return true;
}
function Hf(e) {
  let t = {
    ...Lf(e)
  };
  let n = Promise.resolve(t);
  let r = e => typeof e == `string` && !zf(e) && Object.hasOwn(t, e);
  return new Proxy(n, {
    get(e, n, i) {
      if (r(n)) {
        return t[n];
      }
      let a = Reflect.get(e, n);
      if (typeof a == `function`) {
        return a.bind(Bf(n) ? i : e);
      } else {
        return a;
      }
    },
    getOwnPropertyDescriptor(e, n) {
      if (r(n)) {
        return {
          configurable: true,
          enumerable: true,
          value: t[n],
          writable: true
        };
      } else {
        return Reflect.getOwnPropertyDescriptor(e, n);
      }
    },
    has(e, t) {
      return r(t) || Reflect.has(e, t);
    },
    ownKeys() {
      return Object.keys(t).filter(e => !zf(e));
    }
  });
}
var Uf = new WeakMap();
function Wf(e, t) {
  let n = Uf.get(e);
  if (n) {
    return n;
  }
  let r = null;
  if (!t) {
    let e = dt();
    let t = e ? (0, a.use)(e) : null;
    r = (0, a.use)(Xu) ?? (t ? t.renderedSearch ?? t.search : window.location.search);
  }
  let i = Hf(r === null ? null : new URLSearchParams(r));
  Uf.set(e, i);
  return i;
}
function Gf(e) {
  let t = xt();
  return (0, a.useMemo)(() => Hf(e ? null : t), [e, t]);
}
function Kf({
  Component: e,
  pageProps: t,
  emptySearchParams: n
}) {
  let r;
  r = Vf() ? Gf(n === true) : Wf(t, n === true);
  return (0, a.useMemo)(() => (0, a.createElement)(e, {
    ...t,
    searchParams: r
  }), [e, t, r]);
}
var qf = `data-vinext-streamed-icon`;
function Jf(e, t) {
  let n = e.getAttribute(qf);
  let r = `${t}:`;
  if (!n?.startsWith(r)) {
    return null;
  }
  let i = Number(n.slice(r.length));
  if (Number.isInteger(i) && i >= 0) {
    return i;
  } else {
    return null;
  }
}
function Yf(e) {
  document.querySelectorAll(`body link[${qf}]`).forEach(e => document.head.appendChild(e));
  let t = [...document.querySelectorAll(`head link[${qf}]`)];
  let n = new Map();
  for (let r of t) {
    let t = Jf(r, e);
    if (t === null) {
      r.remove();
      continue;
    }
    let i = n.get(t);
    if (i) {
      i.remove();
    }
    n.set(t, r);
  }
  for (let [, e] of [...n].sort(([e], [t]) => e - t)) {
    document.head.appendChild(e);
  }
}
function Xf({
  metadataKey: e
}) {
  (0, a.useLayoutEffect)(() => Yf(e), [e]);
  return null;
}
$(`fcc1b7a44601`, {
  get AppRouterScrollTarget() {
    return Ku;
  }
});
$(`9f2459ec539c`, {
  get ClientPageRoot() {
    return Kf;
  }
});
$(`9141b0a6a2ce`, {
  get default() {
    return ef;
  }
});
$(`027a83fc390c`, {
  get ErrorBoundary() {
    return bf;
  },
  get ForbiddenBoundary() {
    return Ef;
  },
  get GlobalErrorBoundary() {
    return xf;
  },
  get HttpAccessFallbackPassthrough() {
    return Cf;
  },
  get NotFoundBoundary() {
    return wf;
  },
  get RedirectBoundary() {
    return vf;
  },
  get SerializedErrorBoundary() {
    return df;
  },
  get UnauthorizedBoundary() {
    return Of;
  }
});
$(`46435678a8a9`, {
  get BfcacheChildrenBoundary() {
    return Ad;
  },
  get BfcacheSegmentBoundary() {
    return kd;
  },
  get Children() {
    return Ld;
  },
  get ParallelSlot() {
    return Rd;
  },
  get Slot() {
    return Id;
  }
});
$(`be512eea6aa1`, {
  get StreamedIconsInsertion() {
    return Xf;
  }
});
var Zf = e({
  resolveAppPrefetchRscRequest: () => Qf
});
async function Qf({
  fullHref: e,
  headers: t,
  rewrittenPrefetchHref: n
}) {
  let [r, ...i] = await Promise.all([Ka(e, t), ...(n !== null && n !== e ? [Ka(n, t)] : [])]);
  return {
    additionalRscUrls: i,
    rscUrl: r
  };
}
var $f = e({
  canAutoPrefetchFullAppRoute: () => ap,
  resolveAutoAppRoutePrefetch: () => sp,
  resolveFullAppRoutePrefetch: () => cp
});
var ep = ``;
var tp = sc();
var np = /%(?:2f|5c)/i;
function rp(e) {
  let t;
  try {
    t = new URL(e, window.location.href);
  } catch {
    return null;
  }
  if (t.origin === window.location.origin) {
    return `${p(t.pathname, ep)}${t.search}`;
  } else {
    return null;
  }
}
var ip = {
  cacheForNavigation: false,
  dynamicStaleTime: `verbatim`,
  fallbackTtl: `static`,
  prefetchShellFirst: false,
  shouldPrefetch: false
};
function ap(e) {
  return sp(e).cacheForNavigation;
}
function op(e, t, n, r) {
  if (n !== null && t.intercepts) {
    let i = jt(r);
    let a = jt(n);
    let o = t.intercepts.filter(e => Zr(i, e.targetPatternParts) !== null && $r(a, e.sourcePatternParts));
    if (o.length > 0) {
      return o.some(e => e.rendersDynamically === true) || uc(n, e, tp)?.route.rendersDynamically === true;
    }
  }
  return t.rendersDynamically === true;
}
function sp(e, t = null) {
  let n = window.__VINEXT_LINK_PREFETCH_ROUTES__;
  if (!n) {
    return ip;
  }
  let r = rp(e);
  if (r === null) {
    return ip;
  }
  let i = lc(r, n, tp);
  if (!i) {
    return ip;
  }
  let a = i.route;
  let o = a.hasRootParams === true;
  let s = new URL(r, `http://vinext.local`);
  let c = s.search !== ``;
  let l = a.patternParts.length === 1 && a.patternParts[0]?.startsWith(`:`);
  let u = a.isDynamic && (np.test(s.pathname) || l && !o);
  let d = op(n, a, t, s.pathname);
  let f = !c && !u && (o || !a.canPrefetchLoadingShell && a.requiresDynamicNavigationRequest !== true && !d);
  return {
    cacheForNavigation: f,
    dynamicStaleTime: f ? `verbatim` : `ignore`,
    fallbackTtl: `static`,
    prefetchShellFirst: o || c || !a.isDynamic,
    ...(d ? {
      rendersDynamically: true
    } : {}),
    ...(o ? {
      requiresRouteTreePrefetch: true
    } : {}),
    shouldPrefetch: true
  };
}
function cp() {
  return {
    cacheForNavigation: true,
    dynamicStaleTime: `full-prefetch`,
    fallbackTtl: `static`,
    prefetchShellFirst: true,
    shouldPrefetch: true
  };
}
export { R as $, ar as $t, eu as A, _t as An, P as At, zc as B, ve as Bn, ci as Bt, ou as C, b as Cn, Ri as Ct, Fl as D, pt as Dn, Ui as Dt, Il as E, y as En, zi as Et, Jl as F, Fe as Fn, _i as Ft, hc as G, s as Gn, Xr as Gt, xc as H, ee as Hn, ti as Ht, pu as I, We as In, yi as It, Ps as J, Yr as Jt, mc as K, u as Kn, qr as Kt, zl as L, Ge as Ln, bi as Lt, fu as M, vt as Mn, Wi as Mt, nl as N, wt as Nn, Xi as Nt, Ll as O, mt as On, Ki as Ot, il as P, Ie as Pn, vi as Pt, zo as Q, Qn as Qt, au as R, we as Rn, si as Rt, Rl as S, Ot as Sn, ji as St, cl as T, yt as Tn, Pi as Tt, vc as U, m as Un, ni as Ut, _c as V, he as Vn, li as Vt, Cc as W, p as Wn, Qr as Wt, L as X, O as Xt, Go as Y, Gr as Yt, Ro as Z, $n as Zt, ju as _, Ft as _n, ha as _t, rf as a, En as an, xa as at, Ul as b, Mt as bn, Ii as bt, Y as c, wn as cn, Ka as ct, od as d, T as dn, Ua as dt, j as en, Vo as et, Fd as f, dn as fn, za as ft, H as g, C as gn, ma as gt, Wc as h, Bt as hn, fa as ht, vf as i, Dn as in, Ya as it, du as j, gt as jn, Vi as jt, Gl as k, dt as kn, Gi as kt, Id as l, un as ln, Ga as lt, Gu as m, sn as mn, la as mt, $ as n, Gn as nn, vo as nt, ef as o, kn as on, Sa as ot, Qu as p, on as pn, pa as pt, Ys as q, c as qn, Jr as qt, xf as r, zn as rn, ao as rt, ud as s, Cn as sn, Va as st, jf as t, dr as tn, Mo as tt, $u as u, cn as un, ka as ut, tu as v, Lt as vn, ki as vt, U as w, lt as wn, Li as wt, Hl as x, Nt as xn, Mi as xt, ru as y, At as yn, Bi as yt, ku as z, ge as zn, ui as zt };