//# allFunctionsCalledOnLoad
import { n as e, r as t, t as n } from "./CcyWYbDU.js";
import { i as r, n as i, t as a } from "./B0PXqnjO.js";
import { $ as o, $t as s, A as c, An as l, At as u, B as d, Bn as f, Bt as p, C as m, Cn as h, Ct as g, D as _, Dn as v, Dt as y, En as b, Et as x, F as S, Ft as C, G as ee, Gn as w, Gt as T, H as E, Hn as D, Ht as O, In as te, It as k, J as A, Jt as ne, K as re, Kn as j, Kt as M, L as ie, Ln as N, Lt as P, M as F, Mn as ae, Mt as oe, N as se, Nn as I, Nt as ce, O as le, On as L, Ot as R, P as ue, Pn as de, Pt as z, Q as B, Qt as fe, R as V, Rn as pe, Rt as me, S as H, Sn as he, St as U, T as ge, Tn as _e, Tt as W, U as ve, Un as ye, Ut as be, Vn as xe, Vt as Se, W as Ce, Wn as we, Wt as G, X as K, Xt as Te, Y as Ee, Yt as De, Z as Oe, Zt as ke, _ as Ae, _n as je, _t as Me, a as Ne, an as Pe, at as Fe, b as Ie, bn as Le, bt as Re, c as ze, cn as Be, ct as Ve, d as He, dn as Ue, dt as We, en as q, et as Ge, f as Ke, fn as qe, ft as Je, g as Ye, gn as Xe, gt as Ze, h as Qe, hn as $e, ht as et, i as tt, in as nt, it as rt, j as it, jn as at, jt as ot, k as st, kn as ct, kt as lt, l as ut, ln as dt, lt as ft, m as pt, mn as mt, mt as ht, nn as gt, nt as _t, o as vt, on as yt, ot as bt, p as xt, pn as St, pt as Ct, q as wt, qn as Tt, qt as Et, r as Dt, rn as Ot, rt as kt, s as At, sn as jt, st as Mt, t as Nt, tn as Pt, tt as Ft, u as It, un as Lt, ut as Rt, v as zt, vn as Bt, vt as Vt, w as Ht, wn as Ut, wt as Wt, x as Gt, xn as Kt, xt as qt, y as Jt, yn as Yt, yt as Xt, z as Zt, zn as Qt, zt as $t } from "./ds95237R.js";
var en = Symbol.for(`vinext.client.react`);
function tn(e) {
  let t = Reflect.get(globalThis, en);
  if (t === undefined) {
    Reflect.set(globalThis, en, e);
    return e;
  } else {
    return t;
  }
}
var J = t(r(), 1);
tn(J);
Tt(w(e({})));
var nn = new TextEncoder();
function rn(e) {
  let t = atob(e);
  let n = new Uint8Array(t.length);
  for (let e = 0; e < t.length; e++) {
    n[e] = t.charCodeAt(e);
  }
  return n;
}
function an(e) {
  if (typeof e == `string`) {
    return nn.encode(e);
  } else {
    return rn(e[1]);
  }
}
function on() {
  return globalThis;
}
function sn() {
  return Error(`The connection to the page was unexpectedly closed, possibly due to the stop button being clicked, loss of Wi-Fi, or an unstable internet connection.`);
}
function cn(e) {
  return new ReadableStream({
    start(t) {
      for (let n of e) {
        t.enqueue(an(n));
      }
      t.close();
    }
  });
}
function ln() {
  return Ue()?.bootstrap.rsc ?? null;
}
function un() {
  let e;
  return new ReadableStream({
    start(t) {
      let n = on();
      let r = ln();
      let i = r?.rsc ?? n.__VINEXT_RSC_CHUNKS__ ?? [];
      for (let e of i) {
        t.enqueue(an(e));
      }
      if (r?.done || n.__VINEXT_RSC_DONE__) {
        t.close();
        return;
      }
      let a = false;
      let o;
      let s = () => {
        let e = o;
        o = undefined;
        e?.();
      };
      let c = () => {
        if (!a) {
          a = true;
          s();
          t.close();
        }
      };
      let l = () => {
        if (typeof queueMicrotask == `function`) {
          queueMicrotask(c);
        } else {
          Promise.resolve().then(c);
        }
      };
      let u = () => {
        if (!a) {
          a = true;
          s();
          t.error(sn());
        }
      };
      e = () => {
        if (!a) {
          a = true;
          s();
        }
      };
      let d = Ue() === null ? null : Lt();
      let f = d?.rsc ?? (n.__VINEXT_RSC_CHUNKS__ ??= []);
      f.push = function (...e) {
        let r = Array.prototype.push.apply(this, e);
        if (a) {
          return r;
        }
        for (let n of e) {
          t.enqueue(an(n));
        }
        if (d?.done || n.__VINEXT_RSC_DONE__) {
          c();
        }
        return r;
      };
      if (d) {
        let e = !!d.done;
        Object.defineProperty(d, "done", {
          configurable: true,
          enumerable: true,
          get() {
            return e;
          },
          set(t) {
            e = !!t;
            if (e) {
              l();
            }
          }
        });
      } else {
        let e = !!n.__VINEXT_RSC_DONE__;
        Object.defineProperty(n, "__VINEXT_RSC_DONE__", {
          configurable: true,
          enumerable: true,
          get() {
            return e;
          },
          set(t) {
            e = !!t;
            if (e) {
              l();
            }
          }
        });
      }
      if (typeof document < `u`) {
        if (document.readyState === `loading`) {
          document.addEventListener(`DOMContentLoaded`, u);
          o = () => document.removeEventListener(`DOMContentLoaded`, u);
        } else {
          let e = setTimeout(u);
          o = () => clearTimeout(e);
        }
      }
    },
    cancel() {
      e?.();
    }
  });
}
var dn = 64;
function fn(e) {
  return Ot(e);
}
function pn(e) {
  if (e.length === 0) {
    return null;
  } else {
    return e.slice(0, dn).map(fn).join(`,`);
  }
}
function mn(e, t) {
  let n = q.readMetadata(e).bfcacheSegmentIdentities;
  let r = [];
  for (let i of t) {
    let t = n[i];
    if (t === undefined || !Object.hasOwn(e, i)) {
      break;
    }
    r.push(t);
  }
  return pn(r);
}
function hn(e, t) {
  let n = q.readMetadata(t);
  if (n.skippedLayoutIds.length === 0) {
    return true;
  }
  let r = q.readMetadata(e.elements).bfcacheSegmentIdentities;
  let i = new Set(e.layoutIds);
  for (let t of n.skippedLayoutIds) {
    if (!i.has(t) || !Object.hasOwn(e.elements, t)) {
      return false;
    }
    let a = n.bfcacheSegmentIdentities[t];
    if (a === undefined || a !== r[t]) {
      return false;
    }
  }
  return true;
}
function gn(e) {
  throw Error(`Unhandled cache proof variant: ${String(e)}`);
}
function _n(e) {
  if (e === null) {
    return {
      kind: `runtime-cache-entry`,
      decision: null
    };
  }
  switch (e.kind) {
    case `reuse`:
      return {
        kind: `runtime-cache-entry`,
        decision: {
          canReuse: true,
          code: e.proof.code,
          kind: `reuse`,
          reuseClass: e.proof.reuseClass
        }
      };
    case `fallback`:
      return {
        kind: `runtime-cache-entry`,
        decision: {
          canReuse: false,
          code: e.fallback.code,
          kind: `reject`,
          mode: e.fallback.mode,
          scope: e.fallback.scope
        }
      };
    default:
      return gn(e);
  }
}
var vn = {
  origin: `committed-cache`
};
var yn = {
  origin: `fresh`
};
var bn = {
  origin: `visited-cache`
};
function xn(e) {
  return {
    id: e.id,
    lane: e.lane,
    ...(e.navigationCommitKind === undefined ? {} : {
      navigationCommitKind: e.navigationCommitKind
    }),
    ...(e.navigationId === undefined ? {} : {
      navigationId: e.navigationId
    }),
    startedVisibleCommitVersion: e.startedVisibleCommitVersion,
    state: `pending`
  };
}
function Sn(e) {
  return e.skippedLayoutIds.length === 0;
}
function Cn(e) {
  return e.cacheEntryReuseProof !== undefined && Sn(e);
}
function wn(e) {
  switch (e.origin) {
    case `committed-cache`:
    case `fresh`:
      return false;
    case `visited-cache`:
      return true;
    default:
      throw Error(`[vinext] Unknown App Router payload origin: ${String(e)}`);
  }
}
function Tn(e) {
  return gt(he(e));
}
function En(e) {
  if (e.interception !== null) {
    return e.routeId;
  }
  let t = q.parseElementKey(e.routeId);
  if (t?.kind !== `route` || t.interceptionContext === null) {
    return e.routeId;
  } else {
    return q.encodeRouteId(t.path, null);
  }
}
function Dn(e, t = ``) {
  if (e === null) {
    return null;
  }
  let n = new URL(e, `http://localhost`);
  return we(n.pathname, t);
}
function On(e) {
  let t = kn(e);
  let n = Mn(e.pending);
  let r = Nn({
    pending: e.pending,
    routeManifest: e.routeManifest ?? null,
    startedNavigationId: e.startedNavigationId,
    targetSnapshot: n
  });
  if (e.pending.action.operation.navigationCommitKind === `detached` && e.currentState.activeOperation?.navigationId === e.startedNavigationId && e.currentState.activeOperation.navigationCommitKind === `authoritative`) {
    return {
      disposition: `skip`,
      preserveElementIds: [],
      trace: o(K.staleOperation, t)
    };
  }
  let i = e.currentState.activeOperation?.navigationId === e.startedNavigationId && e.currentState.activeOperation.navigationCommitKind === `detached` && e.pending.action.operation.navigationCommitKind === `authoritative`;
  let a = e.pending.action.operation.navigationId === e.startedNavigationId && e.currentState.activeOperation?.lane === `navigation` && e.currentState.activeOperation.navigationId !== undefined && e.currentState.activeOperation.navigationId < e.startedNavigationId;
  let s = i || a ? e.pending.action.operation.startedVisibleCommitVersion : e.currentState.visibleCommitVersion;
  let c = Ee(r, {
    activeNavigationId: e.activeNavigationId,
    visibleCommitVersion: s
  });
  if (!c.authorized) {
    return {
      disposition: `skip`,
      preserveElementIds: [],
      trace: o(K.staleOperation, t)
    };
  }
  let l = In(Fn({
    currentState: e.currentState,
    pending: e.pending,
    routeManifest: e.routeManifest ?? null,
    targetHref: e.targetHref,
    targetSnapshot: n,
    token: c.token,
    traceFields: t
  }));
  return Ln({
    currentState: e.currentState,
    decision: l,
    pending: e.pending
  });
}
function kn(e) {
  return {
    ...B({
      activeNavigationId: e.activeNavigationId,
      currentRootLayoutTreePath: e.currentState.rootLayoutTreePath,
      currentVisibleCommitVersion: e.currentState.visibleCommitVersion,
      nextRootLayoutTreePath: e.pending.rootLayoutTreePath,
      startedNavigationId: e.startedNavigationId,
      startedVisibleCommitVersion: e.pending.action.operation.startedVisibleCommitVersion
    }),
    ...(e.targetHref === undefined ? {} : {
      targetHref: e.targetHref
    })
  };
}
function An(e) {
  let t = [];
  for (let n of M(e)) {
    let e = q.parseElementKey(n);
    if (e?.kind === `slot`) {
      t.push({
        ownerLayoutId: q.encodeLayoutId(e.treePath),
        slotId: n
      });
    }
  }
  return t;
}
function jn(e) {
  let t = L(e.navigationSnapshot);
  let n = e.interception?.targetMatchedUrl ?? Tn(e.navigationSnapshot.pathname);
  return {
    displayUrl: t,
    interception: e.interception,
    interceptionContext: e.interceptionContext,
    layoutIds: e.layoutIds,
    matchedUrl: n,
    mountedParallelSlots: An(e.elements),
    rootBoundaryId: e.rootLayoutTreePath,
    routeId: En({
      interception: e.interception,
      routeId: e.routeId
    }),
    slotBindings: e.slotBindings
  };
}
function Mn(e) {
  let t = L(e.action.navigationSnapshot);
  let n = e.action.interception?.targetMatchedUrl ?? Tn(e.action.navigationSnapshot.pathname);
  return {
    displayUrl: t,
    interception: e.action.interception,
    interceptionContext: e.action.interceptionContext,
    layoutIds: e.action.layoutIds,
    matchedUrl: n,
    mountedParallelSlots: An(e.action.elements),
    rootBoundaryId: e.rootLayoutTreePath,
    routeId: En({
      interception: e.action.interception,
      routeId: e.routeId
    }),
    slotBindings: e.action.slotBindings
  };
}
function Nn(e) {
  return {
    baseVisibleCommitVersion: e.pending.action.operation.startedVisibleCommitVersion,
    deploymentVersion: null,
    graphVersion: e.routeManifest?.graphVersion ?? null,
    lane: e.pending.action.operation.lane,
    navigationId: e.startedNavigationId,
    operationId: e.pending.action.operation.id,
    targetSnapshotFingerprint: Pn(e.targetSnapshot)
  };
}
function Pn(e) {
  return `${e.routeId}|root:${e.rootBoundaryId ?? `unknown`}`;
}
function Fn(e) {
  let t = e.pending.cacheEntryReuseProof;
  return wt.plan({
    routeManifest: e.routeManifest,
    state: {
      nextOperationToken: e.token,
      traceFields: e.traceFields,
      visibleCommitVersion: e.currentState.visibleCommitVersion,
      visibleSnapshot: jn(e.currentState)
    },
    event: {
      kind: `flightResponseArrived`,
      result: {
        ...(t ? {
          cacheEntryReuseProof: t
        } : {}),
        ...(e.pending.restoredHistorySnapshot ? {
          restoredHistorySnapshot: true
        } : {}),
        href: e.targetHref ?? e.targetSnapshot.displayUrl,
        targetSnapshot: e.targetSnapshot
      },
      token: e.token
    }
  });
}
function In(e) {
  switch (e.kind) {
    case `proposeCommit`:
      return {
        disposition: `dispatch`,
        preserveAbsentSlots: e.proposal.preserveAbsentSlots,
        preserveElementIds: e.proposal.preserveElementIds,
        preservePreviousSlotIds: e.proposal.preservePreviousSlotIds,
        trace: e.trace
      };
    case `hardNavigate`:
      return {
        disposition: `hard-navigate`,
        preserveElementIds: [],
        trace: e.trace
      };
    case `noCommit`:
      return {
        disposition: `skip`,
        preserveElementIds: [],
        trace: e.trace
      };
    case `requestWork`:
      throw Error(`[vinext] Root-boundary commit planning returned requestWork (${e.work.kind}); flightResponseArrived should never request work`);
    default:
      throw Error(`[vinext] Unknown navigation decision: ${String(e)}`);
  }
}
function Ln(e) {
  if (e.decision.disposition !== `dispatch` || e.pending.skippedLayoutIds.length === 0) {
    return e.decision;
  }
  if (!hn(e.currentState, e.pending.action.elements)) {
    return {
      disposition: `hard-navigate`,
      preserveElementIds: [],
      trace: e.decision.trace
    };
  }
  let t = new Set(e.currentState.layoutIds);
  let n = new Set(e.pending.action.layoutIds);
  let r = [...e.decision.preserveElementIds];
  let i = new Set(r);
  let a = [];
  for (let o of e.pending.skippedLayoutIds) {
    if (!i.has(o)) {
      if (q.parseElementKey(o)?.kind === `layout` && t.has(o) && n.has(o) && Object.hasOwn(e.currentState.elements, o)) {
        r.push(o);
        i.add(o);
        a.push(o);
      }
    }
  }
  if (a.length === 0) {
    return e.decision;
  }
  let o = Rn({
    currentSlotBindings: e.currentState.slotBindings,
    preservePreviousSlotIds: e.decision.preservePreviousSlotIds,
    skippedLayoutIds: a,
    targetSlotBindings: e.pending.action.slotBindings
  });
  return {
    ...e.decision,
    preserveElementIds: r,
    preservePreviousSlotIds: o
  };
}
function Rn(e) {
  let t = A({
    currentSlotBindings: e.currentSlotBindings,
    preservedLayoutIds: e.skippedLayoutIds,
    targetSlotBindings: e.targetSlotBindings
  });
  if (t.length === 0) {
    return e.preservePreviousSlotIds;
  }
  let n = [...e.preservePreviousSlotIds];
  let r = new Set(n);
  for (let e of t) {
    if (!r.has(e)) {
      n.push(e);
      r.add(e);
    }
  }
  return n;
}
function zn(e) {
  let t = e.nextElements;
  It(t, e.navigationSnapshot);
  let n = q.readMetadata(t);
  let r = n.cacheEntryReuseProof ?? (wn(e.payloadOrigin) ? _n(null) : undefined);
  let i = e.previousNextUrl === undefined ? e.currentState.previousNextUrl : e.previousNextUrl;
  let a = n.interception === null ? null : i;
  return {
    action: {
      bfcacheIds: k({
        current: e.currentState.bfcacheIds,
        currentElements: e.currentState.elements,
        elements: t,
        restored: e.restoredBfcacheIds,
        reuseCurrent: e.reuseCurrentBfcacheIds
      }),
      ...(r ? {
        cacheEntryReuseProof: r
      } : {}),
      elements: t,
      interception: n.interception,
      interceptionContext: n.interceptionContext,
      layoutIds: n.layoutIds,
      slotBindings: n.slotBindings,
      navigationSnapshot: e.navigationSnapshot,
      operation: xn({
        id: e.renderId,
        lane: e.operationLane,
        navigationCommitKind: e.navigationCommitKind,
        navigationId: e.navigationId,
        startedVisibleCommitVersion: e.currentState.visibleCommitVersion
      }),
      previousNextUrl: a,
      renderId: e.renderId,
      rootLayoutTreePath: n.rootLayoutTreePath,
      reuseCurrentBfcacheIds: e.reuseCurrentBfcacheIds ?? true,
      routeId: n.routeId,
      skippedLayoutIds: n.skippedLayoutIds,
      type: e.type
    },
    ...(r ? {
      cacheEntryReuseProof: r
    } : {}),
    interception: n.interception,
    interceptionContext: n.interceptionContext,
    previousNextUrl: a,
    rootLayoutTreePath: n.rootLayoutTreePath,
    routeId: n.routeId,
    skippedLayoutIds: n.skippedLayoutIds
  };
}
async function Bn(e) {
  return zn({
    ...e,
    nextElements: await e.nextElements
  });
}
var Vn = `__PAGE__`;
var Hn = `__DEFAULT__`;
function Un(e) {
  return e.startsWith(`[`) && e.endsWith(`]`) && !e.includes(`.`);
}
function Wn(e) {
  return e.startsWith(`(`) && e.endsWith(`)`);
}
function Gn(e) {
  try {
    return encodeURIComponent(decodeURIComponent(e));
  } catch {
    return e;
  }
}
function Kn(e) {
  for (let t of Object.keys(e)) {
    let n = e[t];
    e[t] = Array.isArray(n) ? n.map(Gn) : Gn(n);
  }
}
function qn(e) {
  if (Array.isArray(e)) {
    return e.join(`/`);
  } else {
    return e;
  }
}
function Jn(e) {
  if (Kt(e)) {
    return {
      name: e.slice(5, -2),
      type: `oc`
    };
  } else if (Le(e)) {
    return {
      name: e.slice(4, -1),
      type: `c`
    };
  } else if (Un(e)) {
    return {
      name: e.slice(1, -1),
      type: `d`
    };
  } else {
    return null;
  }
}
function Yn(e, t, n) {
  let r = t[e.name];
  if (e.type === `oc` && (r === undefined || Array.isArray(r) && r.length === 0)) {
    return ``;
  } else {
    return qn(r) ?? n;
  }
}
function Xn(e, t) {
  let n = Jn(e);
  if (n) {
    return `${n.name}|${Yn(n, t, e)}|${n.type}`;
  } else {
    return e;
  }
}
var Zn = [`d`, `c`, `oc`];
function Qn(e) {
  if (e.type === `oc`) {
    return `[[...${e.name}]]`;
  } else if (e.type === `c`) {
    return `[...${e.name}]`;
  } else {
    return `[${e.name}]`;
  }
}
function $n(e, t) {
  let n = new Map();
  for (let r of new Set([...Object.keys(e), ...Object.keys(t)])) {
    for (let i of Zn) {
      let a = {
        name: r,
        type: i
      };
      let o = Qn(a);
      let s = Yn(a, e, o);
      let c = Yn(a, t, o);
      if (s !== c) {
        n.set(`${r}|${s}|${i}`, `${r}|${c}|${i}`);
      }
    }
  }
  if (n.size === 0) {
    return null;
  }
  let r = e => {
    let t = n.get(e);
    if (t !== undefined) {
      return t;
    }
    if (!e.startsWith(`[`)) {
      return e;
    }
    let i;
    try {
      i = JSON.parse(e);
    } catch {
      return e;
    }
    if (!Array.isArray(i)) {
      return e;
    }
    let a = false;
    let o = i.map(e => {
      if (typeof e != `string`) {
        return e;
      }
      let t = r(e);
      if (t !== e) {
        a = true;
      }
      return t;
    });
    if (a) {
      return JSON.stringify(o);
    } else {
      return e;
    }
  };
  return r;
}
function er(e, t) {
  let {
    marker: n,
    segment: r
  } = e;
  if (Wn(r)) {
    return r;
  }
  let i = Xn(r, t);
  if (n) {
    return JSON.stringify([n, i]);
  } else {
    return i;
  }
}
function tr(e, t) {
  let n = [];
  for (let r of e) {
    if (!Wn(r)) {
      n.push(Xn(r, t));
    }
  }
  if (n.length > 0) {
    return JSON.stringify(n);
  } else {
    return ``;
  }
}
function nr(e, t) {
  return tr(e.map(e => e.startsWith(`:`) ? e.endsWith(`*`) ? `[[...${e.slice(1, -1)}]]` : e.endsWith(`+`) ? `[...${e.slice(1, -1)}]` : `[${e.slice(1)}]` : e), t);
}
var rr = Symbol(`ApprovedVisibleCommit`);
function ir(e, t, n) {
  let r = q.parseElementKey(e);
  if (r?.kind !== `template`) {
    return false;
  }
  let i = r.treePath.split(`/`).filter(Boolean);
  return tr(i, t.params) === tr(i, n.params);
}
function ar(e, t) {
  or(t);
  return ur(e, t);
}
function or(e) {
  if (e[rr] !== true) {
    throw Error(`[vinext] Visible router state mutation requires ApprovedVisibleCommit`);
  }
}
function sr(e, t) {
  return {
    id: e.id,
    lane: e.lane,
    ...(e.navigationCommitKind === undefined ? {} : {
      navigationCommitKind: e.navigationCommitKind
    }),
    ...(e.navigationId === undefined ? {} : {
      navigationId: e.navigationId
    }),
    startedVisibleCommitVersion: e.startedVisibleCommitVersion,
    state: `committed`,
    visibleCommitVersion: t
  };
}
function cr(e, t, n) {
  let r = e.visibleCommitVersion + 1;
  return {
    ...t,
    activeOperation: sr(n, r),
    visibleCommitVersion: r
  };
}
function lr(e, t, n, r, i, a) {
  let o = new Set(a);
  let s = new Map();
  for (let t of e) {
    if (o.has(t.slotId) || i && t.state === `active` && !Object.hasOwn(n, t.slotId)) {
      s.set(t.slotId, t);
    }
  }
  if (s.size === 0) {
    return t;
  }
  let c = [];
  let l = new Set();
  for (let e of t) {
    let t = s.get(e.slotId);
    c.push(t ?? e);
    l.add(e.slotId);
  }
  for (let e of a) {
    if (l.has(e)) {
      continue;
    }
    let t = s.get(e);
    if (t) {
      c.push(t);
    }
  }
  return Pt(c, {
    layoutIds: r
  });
}
function ur(e, t) {
  let {
    action: n
  } = t;
  switch (n.type) {
    case `traverse`:
    case `navigate`:
    case `replace`:
      {
        let r = n.reuseCurrentBfcacheIds && n.operation.lane !== `refresh` ? t.decision.preserveElementIds.filter(t => {
          let r = e.bfcacheIds[t];
          return r !== undefined && n.bfcacheIds[t] === r;
        }) : [];
        let i = new Set(r);
        let a = n.reuseCurrentBfcacheIds ? t.decision.preservePreviousSlotIds.filter(t => {
          let r = n.slotBindings.find(e => e.slotId === t) ?? e.slotBindings.find(e => e.slotId === t);
          return r?.ownerLayoutId !== null && r?.ownerLayoutId !== undefined && i.has(r.ownerLayoutId);
        }) : [];
        let o = n.operation.lane === `refresh` ? new Set(n.slotBindings.filter(e => e.state === `active` && Object.hasOwn(n.elements, e.slotId)).map(e => e.slotId)) : new Set();
        let s = a.filter(e => !o.has(e));
        let c = z({
          elements: e.elements
        });
        let l = s.filter(e => c[e] !== undefined);
        let u = n.operation.lane === `hmr` ? r.filter(e => s.some(t => n.slotBindings.find(e => e.slotId === t)?.ownerLayoutId === e)) : [];
        let d = n.operation.lane === `hmr` && e.routeId === n.routeId && Object.hasOwn(e.elements, e.routeId) ? [e.routeId, ...u] : u;
        let f = d.length > 1 ? [...new Set(d)] : d;
        let p = n.operation.lane === `hmr` ? f : r;
        let m = n.reuseCurrentBfcacheIds && (n.operation.lane === `navigation` || n.operation.lane === `traverse` || n.operation.lane === `server-action`) ? Object.keys(e.elements).filter(t => Object.hasOwn(n.elements, t) && ir(t, e.navigationSnapshot, n.navigationSnapshot)) : [];
        let h = Ke(e.elements, n.elements, {
          clearAbsentSlots: n.type === `traverse` || !n.reuseCurrentBfcacheIds,
          preserveAbsentSlots: n.reuseCurrentBfcacheIds && t.decision.preserveAbsentSlots,
          preserveElementIds: p,
          preserveElementSeedIds: m,
          preservePreviousSlotIds: s
        });
        return cr(e, {
          bfcacheIds: P({
            elements: h,
            next: n.bfcacheIds,
            previous: n.reuseCurrentBfcacheIds ? e.bfcacheIds : {},
            preservedElementIds: s,
            preservePreviousIds: l
          }),
          elements: h,
          interception: n.interception,
          interceptionContext: n.interceptionContext,
          layoutIds: n.layoutIds,
          navigationSnapshot: n.navigationSnapshot,
          previousNextUrl: n.previousNextUrl,
          renderId: n.renderId,
          rootLayoutTreePath: n.rootLayoutTreePath,
          routeId: n.routeId,
          slotBindings: lr(e.slotBindings, n.slotBindings, n.elements, n.layoutIds, n.reuseCurrentBfcacheIds && t.decision.preserveAbsentSlots, s)
        }, n.operation);
      }
    default:
      {
        let e = n.type;
        throw Error(`[vinext] Unknown router action: ${String(e)}`);
      }
  }
}
function dr(e) {
  let t = On(e);
  switch (t.disposition) {
    case `skip`:
      return {
        disposition: `no-commit`,
        trace: t.trace
      };
    case `hard-navigate`:
      return {
        disposition: `hard-navigate`,
        trace: t.trace
      };
    case `dispatch`:
      return fr(t.trace, t.preserveElementIds, t.preserveAbsentSlots, t.preservePreviousSlotIds);
    default:
      throw Error(`[vinext] Unknown navigation commit disposition: ${String(t)}`);
  }
}
function fr(e = o(K.commitCurrent), t = [], n = false, r = []) {
  return {
    disposition: `commit`,
    preserveAbsentSlots: n,
    preserveElementIds: [...t],
    preservePreviousSlotIds: [...r],
    trace: e
  };
}
function pr(e) {
  return {
    [rr]: true,
    action: e.pending.action,
    decision: e.decision,
    interception: e.pending.interception,
    interceptionContext: e.pending.interceptionContext,
    previousNextUrl: e.pending.previousNextUrl,
    rootLayoutTreePath: e.pending.rootLayoutTreePath,
    routeId: e.pending.routeId
  };
}
function mr(e) {
  return {
    operationLane: e.action.operation.lane,
    pendingOperationId: e.action.operation.id,
    startedVisibleCommitVersion: e.action.operation.startedVisibleCommitVersion
  };
}
function hr(e, t, n) {
  return Ge(e, t, mr(n));
}
function gr(e, t) {
  switch (e.disposition) {
    case `commit`:
      return {
        ...e,
        trace: hr(e.trace, Oe.visibleCommit, t)
      };
    case `hard-navigate`:
      return {
        ...e,
        trace: hr(e.trace, Oe.hardNavigate, t)
      };
    case `no-commit`:
      return {
        ...e,
        trace: hr(e.trace, Oe.noCommit, t)
      };
    default:
      throw Error(`[vinext] Unknown commit decision: ${String(e)}`);
  }
}
function _r(e) {
  let {
    currentState: t,
    pending: n
  } = e;
  if (n.action.operation.lane !== `hmr`) {
    throw Error(`[vinext] HMR visible commit approval requires an HMR pending operation`);
  }
  let r = gr(dr({
    activeNavigationId: n.action.operation.id,
    currentState: t,
    pending: n,
    routeManifest: e.routeManifest,
    startedNavigationId: n.action.operation.id,
    targetHref: e.targetHref
  }), n);
  if (r.disposition === `commit`) {
    return {
      approvedCommit: pr({
        decision: r,
        pending: n
      }),
      decision: r
    };
  } else {
    return {
      approvedCommit: null,
      decision: r
    };
  }
}
function vr(e) {
  let t = gr(dr({
    activeNavigationId: e.activeNavigationId,
    currentState: e.currentState,
    pending: e.pending,
    routeManifest: e.routeManifest ?? null,
    startedNavigationId: e.startedNavigationId,
    targetHref: e.targetHref
  }), e.pending);
  switch (t.disposition) {
    case `commit`:
      return {
        approvedCommit: pr({
          decision: t,
          pending: e.pending
        }),
        decision: t
      };
    case `hard-navigate`:
    case `no-commit`:
      return {
        approvedCommit: null,
        decision: t
      };
    default:
      throw Error(`[vinext] Unknown commit decision: ${String(t)}`);
  }
}
async function yr(e) {
  let t = await Bn({
    currentState: e.currentState,
    navigationCommitKind: undefined,
    navigationId: e.startedNavigationId,
    nextElements: e.nextElements,
    navigationSnapshot: e.navigationSnapshot,
    operationLane: e.operationLane,
    payloadOrigin: e.payloadOrigin,
    previousNextUrl: e.previousNextUrl,
    renderId: e.renderId,
    type: e.type
  });
  let n = e.getCurrentStateForApproval?.() ?? e.currentState;
  let r = vr({
    activeNavigationId: e.getActiveNavigationId?.() ?? e.activeNavigationId,
    currentState: n,
    pending: t,
    routeManifest: e.routeManifest ?? null,
    startedNavigationId: e.startedNavigationId,
    targetHref: e.targetHref
  });
  return {
    approvedCommit: r.approvedCommit,
    decision: r.decision,
    pending: t,
    trace: r.decision.trace
  };
}
function br(e) {
  if (e === `none`) {
    return `server-action`;
  } else {
    return `refresh`;
  }
}
function xr(e) {
  return e !== `none`;
}
var Sr = t(i(), 1);
var Cr = `__vinext_hard_navigation_target__`;
function wr(e) {
  try {
    return new URL(e, window.location.href).href;
  } catch {
    return e;
  }
}
function Tr() {
  try {
    return window.sessionStorage.getItem(Cr);
  } catch {
    return null;
  }
}
function Er(e) {
  try {
    window.sessionStorage.setItem(Cr, e);
    return window.sessionStorage.getItem(Cr) === e;
  } catch {
    return false;
  }
}
function Dr() {
  try {
    window.sessionStorage.removeItem(Cr);
  } catch {}
}
function Or(e, t) {
  if (t === `replace`) {
    window.location.replace(e);
  } else {
    window.location.assign(e);
  }
}
function kr(e, t = `assign`, n = Or) {
  let r = wr(e);
  let i = wr(window.location.href);
  if (Tr() === r && i === r) {
    Dr();
    console.error(`[vinext] Prevented repeated hard navigation to ${r}; leaving the current document in place to avoid a reload loop.`);
    return false;
  } else if (!Er(r) && i === r) {
    console.error(`[vinext] Hard navigation to ${r} requires a reload-loop guard, but sessionStorage is unavailable; leaving the current document in place.`);
    return false;
  } else {
    n(e, t);
    return true;
  }
}
function Ar(e, t) {
  let n = we(e.pathname, t);
  let r = new URLSearchParams(e.search).toString();
  if (r === ``) {
    return n;
  } else {
    return `${n}?${r}`;
  }
}
function jr(e, t, n) {
  try {
    let r = window.location.href;
    return Ar(new URL(n, r), e) === L(t);
  } catch {
    return false;
  }
}
function Mr(e = {}) {
  let t = e.basePath ?? ``;
  let n = e.commitClientNavigationState ?? b;
  let r = e.performHardNavigation ?? ((t, n) => kr(t, n, e.navigateDocument));
  let i = e.getRouteManifest ?? (() => null);
  let a = e.loadRouteManifest ?? (() => null);
  let o = e.syncHistoryStatePreviousNextUrl ?? (() => {});
  let s = 0;
  let c = 0;
  let l = null;
  let u = null;
  let d = null;
  let f = false;
  let p = 0;
  let m = new Map();
  let h = new Map();
  let g = new Map();
  let _ = new Set();
  let v = null;
  let y = null;
  let x = null;
  let S = null;
  let C = null;
  let ee = null;
  let w = null;
  let T = false;
  function D() {
    if (!x) {
      throw Error(`[vinext] Browser router state setter is not initialized`);
    }
    return x;
  }
  function O() {
    if (!S) {
      throw Error(`[vinext] Browser router state is not initialized`);
    }
    return S.current;
  }
  function te() {
    if (S || T) {
      return Promise.resolve();
    } else {
      w ||= new Promise(e => {
        ee = e;
      });
      return w;
    }
  }
  function k() {
    T = true;
    let e = ee;
    ee = null;
    w = null;
    e?.();
  }
  function A() {
    p += 1;
    c += 1;
    l = c;
    u = null;
    f = false;
    v = null;
    y = null;
    return c;
  }
  function ne() {
    return c;
  }
  function re() {
    s += 1;
    return s;
  }
  function j() {
    return S !== null;
  }
  function M(e) {
    return e === c;
  }
  function ie() {
    let e = D();
    if (C && !C.settled) {
      C.settled = true;
      C.resolve(O());
    }
    let t;
    let n = new Promise(e => {
      t = e;
    });
    if (!t) {
      throw Error(`[vinext] Failed to initialize browser router promise`);
    }
    let r = {
      promise: n,
      resolve: t,
      settled: false
    };
    C = r;
    e(n);
    return r;
  }
  function N(e) {
    if (e && !e.settled) {
      e.settled = true;
      e.resolve(O());
      if (C === e) {
        C = null;
      }
    }
  }
  function P(e) {
    if (e && !e.settled) {
      e.settled = true;
      if (C === e) {
        C = null;
      }
    }
  }
  function F(e, t) {
    N(t);
    if (M(e)) {
      l = null;
      u = null;
      v = null;
      y = null;
      _e(e);
    }
  }
  function ae(e) {
    if (l === null || f) {
      return false;
    }
    if (v !== null) {
      y = {
        navigationId: l,
        href: v
      };
      for (let e of g.keys()) {
        I(e);
      }
      return false;
    }
    c += 1;
    l = null;
    u = null;
    ve();
    for (let e of g.keys()) {
      g.delete(e);
      I(e);
    }
    B(s);
    ue(s, false);
    if (e && x) {
      let t = x;
      (0, J.startTransition)(() => {
        t(e);
      });
    }
    return true;
  }
  function se() {
    if (d !== null) {
      R(d);
    }
  }
  function I(e) {
    if (_.delete(e)) {
      n(undefined, {
        releaseSnapshot: true
      });
    }
  }
  function ce(e, t) {
    return y !== null && y.navigationId === e && y.href === wr(t);
  }
  function le(e) {
    let t = g.get(e);
    let n = t?.writeHistory;
    if (t && n) {
      t.writeHistory = null;
      n();
    }
  }
  function R(e) {
    for (let [t, n] of g) {
      if (!(t > e)) {
        g.delete(t);
        if (t === e) {
          n.writeHistory?.();
          n.publish();
        } else {
          I(t);
        }
      }
    }
  }
  function ue(e, t) {
    for (let [n, r] of m) {
      if (n > e) {
        continue;
      }
      m.delete(n);
      let i = t && n === e;
      if (i && r.committedState !== null) {
        r.onCommittedState?.(r.committedState);
      }
      r.resolve(i);
    }
  }
  function de(e) {
    d = e;
    let t = m.get(e);
    let n = t?.committedState?.activeOperation;
    if (t && n?.navigationCommitKind === `detached` && n.navigationId === l) {
      v = wr(t.targetHref);
    } else {
      f = true;
    }
    B(e);
    le(e);
  }
  function z(e) {
    d = null;
    R(e);
    ue(e, true);
  }
  function B(e) {
    for (let [t, n] of h) {
      if (!(t > e)) {
        h.delete(t);
        nt(n);
      }
    }
  }
  async function fe(n, i) {
    let o = ++p;
    let s = u === `navigation`;
    if (!j()) {
      return;
    }
    let c = O();
    let l = re();
    let [d,, f] = await Promise.all([i, n, a()]);
    let m = await Bn({
      currentState: c,
      nextElements: n,
      navigationSnapshot: d,
      operationLane: `hmr`,
      payloadOrigin: yn,
      renderId: l,
      type: `replace`
    });
    if (o !== p || s || !j()) {
      return;
    }
    if (f === false) {
      r(_t(L(d), t));
      return;
    }
    let h = _r({
      currentState: O(),
      pending: m,
      routeManifest: e.getRouteManifest?.() ?? null,
      targetHref: L(d)
    });
    if (h.approvedCommit) {
      let e = h.approvedCommit;
      (0, J.startTransition)(() => {
        H(e);
      });
    } else if (h.decision.disposition === `hard-navigate`) {
      r(L(d));
    }
  }
  function V({
    renderId: e
  }) {
    (0, J.useInsertionEffect)(() => {
      de(e);
    }, [e]);
    return null;
  }
  function pe({
    renderId: e,
    children: t
  }) {
    (0, J.useLayoutEffect)(() => {
      z(e);
      return () => {
        ue(e, false);
      };
    }, [e]);
    return t;
  }
  function me(e, t, n, r, i) {
    let a = D();
    let o = m.get(e);
    let s = e => {
      if (o) {
        o.committedState = e;
      }
      return e;
    };
    if (n) {
      if (n.settled) {
        return;
      }
      let e = s(ar(O(), t));
      n.settled = true;
      n.resolve(e);
      if (C === n) {
        C = null;
      }
      if (i) {
        (0, J.startTransition)(() => {
          a(e);
        });
      }
    } else if (r === `synchronous`) {
      (0, Sr.flushSync)(() => {
        let e = s(ar(O(), t));
        a(e);
      });
    } else {
      (0, J.startTransition)(() => {
        let e = s(ar(O(), t));
        a(e);
      });
    }
  }
  function H(e) {
    D()(ar(O(), e));
  }
  function he(e) {
    let t = {
      id: e.renderId,
      lane: `traverse`,
      startedVisibleCommitVersion: e.currentState.visibleCommitVersion,
      state: `pending`
    };
    return {
      action: {
        bfcacheIds: e.restoredState.bfcacheIds,
        elements: e.restoredState.elements,
        interception: e.restoredState.interception,
        interceptionContext: e.restoredState.interceptionContext,
        layoutIds: e.restoredState.layoutIds,
        navigationSnapshot: e.restoredState.navigationSnapshot,
        operation: t,
        previousNextUrl: e.restoredState.previousNextUrl,
        renderId: e.renderId,
        rootLayoutTreePath: e.restoredState.rootLayoutTreePath,
        reuseCurrentBfcacheIds: false,
        routeId: e.restoredState.routeId,
        skippedLayoutIds: [],
        slotBindings: e.restoredState.slotBindings,
        type: `traverse`
      },
      interception: e.restoredState.interception,
      interceptionContext: e.restoredState.interceptionContext,
      previousNextUrl: e.restoredState.previousNextUrl,
      rootLayoutTreePath: e.restoredState.rootLayoutTreePath,
      routeId: e.restoredState.routeId,
      restoredHistorySnapshot: true,
      skippedLayoutIds: []
    };
  }
  function U(e) {
    if (!e.restoreCopiedExternalHistoryEntry && !jr(t, e.state.navigationSnapshot, e.targetHref)) {
      return false;
    }
    let n = e.restoreCopiedExternalHistoryEntry ? L(e.state.navigationSnapshot) : e.targetHref;
    let r = O();
    let a = he({
      currentState: r,
      renderId: re(),
      restoredState: e.state
    });
    let o = vr({
      activeNavigationId: c,
      currentState: r,
      pending: a,
      routeManifest: i(),
      startedNavigationId: e.navId,
      targetHref: n
    });
    return o.approvedCommit !== null && (e.beforeCommit?.(), H(o.approvedCommit), true);
  }
  function ge(e) {
    if (xr(e?.revalidation ?? `none`)) {
      e?.onDiscardedRevalidation?.();
    }
  }
  function W(e) {
    try {
      let t = new URL(window.location.href);
      let n = new URL(e, t.href);
      return n.origin === t.origin && n.pathname === t.pathname && n.search !== t.search && n.hash !== ``;
    } catch {
      return false;
    }
  }
  function ye(e) {
    if (e.actionType === `traverse` || e.historyUpdateMode === undefined || e.scrollIntent?.hash == null) {
      return false;
    } else {
      return W(e.targetHref);
    }
  }
  async function be(e) {
    let t = a();
    if (t !== null && !(await t)) {
      N(e.pendingRouterState);
      Ce(e.scrollIntent ?? null);
      if (M(e.navId)) {
        r(e.targetHref, e.historyUpdateMode === `push` ? `assign` : `replace`);
      }
      return `no-commit`;
    }
    if (e.navId === l) {
      u = e.operationLane;
    }
    let o = re();
    let s = Pe(e.targetHref);
    if (s) {
      h.set(o, s);
    }
    let d;
    let f = new Promise(t => {
      d = t;
      m.set(o, {
        committedState: null,
        onCommittedState: e.onCommittedState,
        resolve: t,
        targetHref: e.targetHref
      });
    });
    try {
      let t = {
        currentState: e.navigationInitiationState,
        navigationCommitKind: e.navigationCommitKind,
        navigationId: e.navId,
        navigationSnapshot: e.navigationSnapshot,
        operationLane: e.operationLane,
        payloadOrigin: e.payloadOrigin,
        previousNextUrl: e.previousNextUrl,
        renderId: o,
        restoredBfcacheIds: e.restoredBfcacheIds,
        reuseCurrentBfcacheIds: e.reuseCurrentBfcacheIds,
        type: e.actionType
      };
      let n = e.nextElements instanceof Promise ? await Bn({
        ...t,
        nextElements: e.nextElements
      }) : zn({
        ...t,
        nextElements: e.nextElements
      });
      let a = vr({
        activeNavigationId: c,
        currentState: O(),
        pending: n,
        routeManifest: i(),
        startedNavigationId: e.navId,
        targetHref: e.targetHref
      });
      if (a.decision.disposition === `no-commit`) {
        N(e.pendingRouterState);
        h.delete(o);
        if (s) {
          nt(s);
        }
        m.delete(o);
        d?.(false);
        Ce(e.scrollIntent ?? null);
        return `no-commit`;
      }
      if (a.decision.disposition === `hard-navigate`) {
        h.delete(o);
        m.delete(o);
        Ce(e.scrollIntent ?? null);
        if (r(e.targetHref, e.historyUpdateMode === `push` ? `assign` : `replace`)) {
          P(e.pendingRouterState);
          return `hard-navigate`;
        } else {
          N(e.pendingRouterState);
          if (s) {
            nt(s);
          }
          return `no-commit`;
        }
      }
      let l = a.approvedCommit;
      if (l === null) {
        throw Error(`[vinext] Commit decision did not approve a visible commit`);
      }
      let u = ar(O(), l);
      let f = e.createNavigationCommitEffect({
        activeRoutePaths: oe(u.slotBindings),
        bfcacheIds: u.bfcacheIds,
        href: e.targetHref,
        historyUpdateMode: e.historyUpdateMode,
        navId: e.navId,
        params: e.params,
        previousNextUrl: l.previousNextUrl,
        targetHistoryIndex: e.targetHistoryIndex
      });
      g.set(o, {
        writeHistory: () => {
          f.writeHistory({
            keepCurrentUrl: ce(e.navId, e.targetHref)
          });
        },
        publish: () => {
          f.publish({
            releaseSnapshot: _.delete(o)
          });
        }
      });
      E(e.scrollIntent, o);
      if (!ce(e.navId, e.targetHref)) {
        Ut();
        _.add(o);
      }
      me(o, l, e.pendingRouterState, e.visibleCommitMode ?? `transition`, ye(e));
      if (e.navigationResponseCompletion) {
        e.navigationResponseCompletion.then(() => {
          if (!M(e.navId) || !j()) {
            return;
          }
          let t = m.get(o)?.committedState;
          if (t) {
            (0, J.startTransition)(() => {
              D()(t);
            });
          }
        }, () => {});
      }
    } catch (t) {
      h.delete(o);
      g.delete(o);
      m.delete(o);
      if (_.delete(o)) {
        n(e.navId);
      }
      N(e.pendingRouterState);
      d?.(false);
      throw t;
    }
    return f.then(e => e ? `committed` : `no-commit`);
  }
  async function xe(e, t, n, s, l) {
    let u = s ?? O();
    let d = l?.startedNavigationId ?? c;
    let f = l?.targetHref ?? window.location.href;
    let p = a();
    if (p !== null && !(await p)) {
      if (M(d)) {
        r(f);
        return;
      }
      ge(l);
      return Se(n);
    }
    let {
      approvedCommit: m,
      decision: h,
      pending: g,
      trace: _
    } = await yr({
      activeNavigationId: c,
      currentState: u,
      getActiveNavigationId: () => c,
      getCurrentStateForApproval: O,
      navigationSnapshot: t,
      nextElements: e,
      renderId: re(),
      operationLane: br(l?.revalidation ?? `none`),
      payloadOrigin: yn,
      startedNavigationId: d,
      routeManifest: i(),
      targetHref: f,
      type: `navigate`
    });
    if (h.disposition === `hard-navigate`) {
      r(f);
    } else {
      if (m) {
        let e = vr({
          activeNavigationId: c,
          currentState: O(),
          pending: g,
          routeManifest: i(),
          startedNavigationId: d,
          targetHref: f
        });
        if (e.decision.disposition === `hard-navigate`) {
          r(f);
          return;
        }
        if (e.approvedCommit) {
          let t = e.approvedCommit;
          (0, J.startTransition)(() => {
            H(t);
          });
          o(t.previousNextUrl, t.action.bfcacheIds);
        } else {
          ge(l);
        }
      } else if (h.disposition === `no-commit`) {
        ge(l);
      }
      return Se(n);
    }
  }
  async function Se(e) {
    if (e) {
      if (!e.ok) {
        throw await e.data;
      }
      return e.data;
    }
  }
  function we(e, t) {
    x = e;
    S = t;
    k();
    return () => {
      if (x === e) {
        x = null;
      }
      if (S === t) {
        S = null;
        T = false;
      }
    };
  }
  return {
    beginNavigation: A,
    getActiveNavigationId: ne,
    hasBrowserRouterState: j,
    getBrowserRouterState: O,
    isCurrentNavigation: M,
    performHardNavigation: r,
    waitForBrowserRouterStateReady: te,
    attachBrowserRouterState: we,
    beginPendingBrowserRouterState: ie,
    abandonPendingBrowserRouterState: P,
    finalizeNavigation: F,
    discardPendingNavigation: ae,
    flushCommittingNavigationUrl: se,
    restoreHistorySnapshotVisibleState: U,
    renderNavigationPayload: be,
    commitSameUrlNavigatePayload: xe,
    hmrReplaceTree: fe,
    drainPrePaintEffects: R,
    beginNavigationRenderCommit: de,
    commitNavigationRender: z,
    clearCommittedNavigationFailureTargets: B,
    NavigationCommitSignal: pe,
    NavigationHistoryCommit: V
  };
}
function Nr(e) {
  return (0, J.createElement)(J.Fragment, null, e.historyCommit, (0, J.createElement)(ze.Provider, {
    value: e.elements
  }, (0, J.createElement)(ut, {
    id: e.routeId
  })));
}
function Pr(e) {
  if (!e.programmaticTransition || e.navigationKind !== `navigate`) {
    return false;
  } else {
    return e.currentSnapshot.pathname === we(e.targetUrl.pathname, e.basePath) && e.currentSnapshot.search !== e.targetUrl.search;
  }
}
var Fr = 10000;
var Ir = class extends Error {
  reason;
  constructor(e) {
    super(`[vinext] Supplemental parallel-route refresh ${e}`);
    this.name = `SupplementalRefreshError`;
    this.reason = e;
  }
};
function Lr(e) {
  if (e.degraded) {
    throw new Ir(e.reason);
  }
  return e.value;
}
function Rr(e, t) {
  let n = q.readMetadata(t);
  let r = n.interception;
  if (r === null) {
    let r = n.slotBindings.filter(e => e.state === `active` && Object.hasOwn(t, e.slotId));
    if (r.length === 0) {
      return e;
    }
    let i = q.readMetadata(e);
    if (r.some(e => {
      let t = q.parseElementKey(e.slotId);
      return t?.kind === `slot` && t.name === `children`;
    })) {
      let a = new Set(r.map(e => e.slotId));
      let o = r.filter(e => {
        let t = q.parseElementKey(e.slotId);
        return t?.kind === `slot` && t.name === `children`;
      });
      let c = i.slotBindings.filter(t => {
        let n = q.parseElementKey(t.slotId);
        return t.state === `active` && n?.kind === `slot` && !a.has(t.slotId) && Object.hasOwn(e, t.slotId);
      });
      let l = i.slotBindings.filter(e => {
        let t = q.parseElementKey(e.slotId);
        return e.state === `unmatched` && t?.kind === `slot` && t.name === `children` && !a.has(e.slotId);
      });
      let u = o.length === 1 && l.length === 1 ? [{
        ...l[0],
        activeRouteId: o[0].activeRouteId,
        state: `active`
      }] : [];
      let d = new Set([...c, ...u].map(e => e.slotId));
      let f = n.slotBindings.filter(e => !d.has(e.slotId));
      f.push(...c, ...u);
      let p = {
        ...t,
        ...(i.interception === null ? {} : {
          [fe]: i.interception,
          [ke]: i.interceptionContext
        }),
        [s]: Pt(f, {
          layoutIds: n.layoutIds
        })
      };
      for (let t of c) {
        p[t.slotId] = e[t.slotId];
      }
      zr(p, t, e, c.map(e => e.slotId));
      if (u.length === 1) {
        p[u[0].slotId] = t[o[0].slotId];
      }
      Br(p, e, {
        overwrite: false
      });
      return p;
    }
    let a = new Set(r.map(e => e.slotId));
    let o = i.slotBindings.filter(e => !a.has(e.slotId));
    o.push(...r);
    let c = {
      ...e,
      [s]: Pt(o, {
        layoutIds: i.layoutIds
      })
    };
    for (let e of r) {
      c[e.slotId] = t[e.slotId];
    }
    zr(c, e, t, r.map(e => e.slotId));
    Br(c, t);
    return c;
  }
  let i = t[r.slotId];
  if (i === undefined) {
    return e;
  }
  let a = q.readMetadata(e);
  let o = n.slotBindings.find(e => e.slotId === r.slotId);
  let c = a.slotBindings.filter(e => e.slotId !== r.slotId);
  if (o) {
    c.push(o);
  }
  let l = {
    ...e,
    [r.slotId]: i,
    [s]: Pt(c, {
      layoutIds: a.layoutIds
    })
  };
  zr(l, e, t, [r.slotId]);
  Br(l, t);
  return l;
}
function zr(e, t, n, r) {
  let i = e => r.some(t => e === t || Se(e, t));
  let a = e => !r.includes(e) && i(e);
  for (let n of Object.keys(t)) {
    if (a(n)) {
      delete e[n];
    }
  }
  for (let [t, r] of Object.entries(n)) {
    if (a(t)) {
      e[t] = r;
    }
  }
  let o = {};
  for (let [e, n] of Object.entries(q.readMetadata(t).bfcacheSegmentIdentities)) {
    if (!i(e)) {
      o[e] = n;
    }
  }
  for (let [e, t] of Object.entries(q.readMetadata(n).bfcacheSegmentIdentities)) {
    if (i(e)) {
      o[e] = t;
    }
  }
  if (Object.keys(o).length > 0) {
    e[Te] = o;
  } else {
    delete e[Te];
  }
}
function Br(e, t, n = {}) {
  for (let [r, i] of Object.entries(t)) {
    let t = q.parseElementKey(r);
    if ((t?.kind === `page` || t?.kind === `route`) && (n.overwrite !== false || !Object.hasOwn(e, r))) {
      e[r] = i;
    }
  }
}
function Vr(e) {
  let t = new Map();
  let n = D(gt(he(we(e.refreshUrl.pathname, e.basePath))));
  if (e.state.previousNextUrl !== null) {
    let n = new URL(e.state.previousNextUrl, e.refreshUrl);
    t.set(n.pathname, n);
  }
  let r = e.activeRoutePaths ?? e.state.slotBindings.flatMap(e => {
    if (e.state !== `active` || e.activeRouteId == null) {
      return [];
    }
    let t = q.parseElementKey(e.activeRouteId);
    if (t?.kind === `route` && t.interceptionContext === null) {
      return [t.path];
    } else {
      return [];
    }
  });
  for (let i of r) {
    if (i !== n && (n === `/` || i.startsWith(`${n}/`))) {
      continue;
    }
    let r = ye(i, e.basePath);
    if (t.has(r)) {
      continue;
    }
    let a = new URL(r, e.refreshUrl);
    a.search = e.refreshUrl.search;
    t.set(r, a);
  }
  let i = `${e.refreshUrl.pathname}${e.refreshUrl.search}`;
  let a = [];
  for (let e of t.values()) {
    let t = `${e.pathname}${e.search}`;
    if (t !== i) {
      a.push(t);
    }
  }
  return a;
}
function Hr(e) {
  return new URL(e, `https://vinext.local`).pathname;
}
function Ur(e) {
  let {
    basePath: t,
    refreshUrl: n,
    requestInterceptionContext: r,
    routeManifest: i,
    state: a
  } = e;
  if (i === null) {
    return [];
  }
  let o = we(n.pathname, t);
  let s = h(o);
  let c = [];
  for (let e of a.slotBindings) {
    if (e.state !== `active` || !e.activeRouteId || !e.interceptionId || !e.interceptionSourceMatchedUrl) {
      continue;
    }
    let o = q.parseElementKey(e.activeRouteId);
    if (o?.kind !== `route`) {
      continue;
    }
    let l = i.segmentGraph.interceptions.get(e.interceptionId);
    if (!l) {
      continue;
    }
    let u = a.interception?.slotId === e.slotId && T(h(Hr(a.interception.targetMatchedUrl)), l.targetPatternParts) !== null ? a.interception : null;
    let d = u?.targetMatchedUrl ?? o.path;
    let f = h(Hr(d));
    if (r !== null && a.interception?.slotId === e.slotId && T(s, l.targetPatternParts) !== null && T(f, l.targetPatternParts) !== null) {
      continue;
    }
    let p = new URL(d, n);
    p.pathname = ye(p.pathname, t);
    p.search = n.search;
    c.push({
      interception: l,
      interceptionContext: u?.sourceMatchedUrl ?? e.interceptionSourceMatchedUrl,
      targetPathname: `${p.pathname}${p.search}`
    });
  }
  return c;
}
function Wr() {
  let e = new Set();
  return {
    abortAll() {
      for (let t of e) {
        t.abort();
      }
    },
    begin(t) {
      let n = new AbortController();
      e.add(n);
      if (t.activeNavigationId !== t.startedNavigationId) {
        n.abort();
      }
      return {
        finish() {
          e.delete(n);
        },
        signal: n.signal
      };
    }
  };
}
async function Gr(e) {
  if (e.supplemental.length === 0) {
    return {
      degraded: false,
      value: await e.primary
    };
  }
  let t = new AbortController();
  let n = () => t.abort(e.signal.reason);
  if (e.signal.aborted) {
    n();
  } else {
    e.signal.addEventListener(`abort`, n, {
      once: true
    });
  }
  let r = setTimeout(() => t.abort(new DOMException(`Supplemental refresh timed out`, `TimeoutError`)), e.timeoutMs ?? Fr);
  try {
    if (t.signal.aborted) {
      return {
        degraded: true,
        reason: `aborted`,
        value: await e.primary
      };
    }
    let n = e.supplemental.map(e => e(t.signal));
    let [r, i] = await Promise.all([e.primary, Promise.all(n)]);
    let a = r;
    for (let t of i) {
      a = e.merge(a, t);
    }
    return {
      degraded: false,
      value: a
    };
  } catch {
    let n = e.signal.aborted ? `aborted` : t.signal.reason instanceof DOMException && t.signal.reason.name === `TimeoutError` ? `timeout` : `failed`;
    t.abort();
    return {
      degraded: true,
      reason: n,
      value: await e.primary
    };
  } finally {
    clearTimeout(r);
    e.signal.removeEventListener(`abort`, n);
  }
}
function Kr() {
  let e = null;
  let t = () => {
    e?.abort();
    e = null;
  };
  return {
    abortActive: t,
    begin() {
      t();
      let n = new AbortController();
      e = n;
      return {
        release() {
          if (e === n) {
            e = null;
          }
        },
        signal: n.signal
      };
    }
  };
}
function qr(e) {
  let t = e.__VINEXT_RSC_FORM_STATE__ ?? null;
  delete e[$e];
  return t;
}
function Jr(e) {
  let t = {
    formState: e.formState,
    ...(e.onRecoverableError ? {
      onRecoverableError: e.onRecoverableError
    } : {}),
    onUncaughtError: e.onUncaughtError
  };
  if (e.onCaughtError) {
    return {
      ...t,
      onCaughtError: e.onCaughtError
    };
  } else {
    return t;
  }
}
function Yr(e) {
  let t;
  e.startTransition(() => {
    t = e.hydrateRoot(e.container, e.children, e.options);
  });
  if (t === undefined) {
    throw Error(`[vinext] React.startTransition did not synchronously start hydration`);
  }
  return t;
}
function Xr(e, t) {
  return {
    pathname: t.pathname,
    search: e === null ? t.search : new URL(e, t.origin).search
  };
}
function Zr(e) {
  let t = new URL(e);
  return `${t.pathname}${t.search}${t.hash}`;
}
function Qr(e) {
  if (!e || typeof e != `object`) {
    return e;
  }
  let t = {};
  for (let [n, r] of Object.entries(e)) {
    if (n !== `__vinext_scrollX` && n !== `__vinext_scrollY`) {
      t[n] = r;
    }
  }
  if (Object.keys(t).length > 0) {
    return t;
  } else {
    return null;
  }
}
var $r = class {
  #e;
  #t = new Map();
  #n = new Map();
  #r = new Map();
  #i = ei();
  #a;
  #o;
  #s;
  #c;
  #l;
  #u;
  #d;
  #f = null;
  #p = 0;
  #m = null;
  #h = new Set();
  #g = true;
  #_ = null;
  constructor(e) {
    this.#a = e.readHistoryState;
    this.#o = e.readCurrentHref;
    this.#s = e.pushHistoryState;
    this.#c = e.replaceHistoryState;
    this.#l = e.readVisibleNavigationMetadata;
    this.#e = new Vt({
      initialHistoryState: e.initialHistoryState,
      maxHistoryStateSnapshots: e.maxHistoryStateSnapshots
    });
    this.#u = u(e.initialHistoryState) ?? 0;
    this.#d = this.#u;
  }
  get currentHistoryTraversalIndex() {
    return this.#u;
  }
  allocateNavigationHistoryTraversalIndex(e) {
    switch (e) {
      case `push`:
        return this.#d + 1;
      case `replace`:
        return this.#u;
      case undefined:
        return null;
      default:
        throw Error(`[vinext] Unknown history update mode: ${String(e)}`);
    }
  }
  commitHistoryTraversalIndex(e) {
    this.#u = e;
    if (e !== null) {
      this.#d = Math.max(this.#d, e);
    }
  }
  commitTraversalIndexFromHistoryState(e) {
    this.commitHistoryTraversalIndex(u(e));
  }
  resolveTraversalIntent(e) {
    return ce({
      currentHistoryIndex: this.#u,
      historyState: e
    });
  }
  readCurrentBfcacheVersionHistoryIds(e) {
    return this.#e.readCurrentBfcacheVersionHistoryIds(e);
  }
  isCacheInvalidationGuarded() {
    return this.#e.isCacheInvalidationGuarded();
  }
  isCurrentBfcacheVersion(e) {
    return this.#e.isCurrentBfcacheVersion(e);
  }
  beginCacheInvalidationGuard() {
    return this.#e.beginCacheInvalidationGuard();
  }
  invalidateRestorableClientState() {
    this.#e.invalidateClientState();
    let e = ot(this.#a());
    this.#m = e !== null && this.#t.has(e) ? e : null;
  }
  rememberHistoryStateSnapshot(e) {
    let t = this.readCurrentTreeSnapshot();
    let n = t?.activeOperation;
    if (t && n?.navigationCommitKind === `detached` && e.activeOperation?.navigationCommitKind === `authoritative` && e.activeOperation.navigationId === n.navigationId) {
      this.#e.replaceHistoryStateSnapshots(t, e);
    }
    for (let t of this.#h) {
      this.#e.rememberHistoryStateSnapshot({
        historyIndex: t,
        state: e
      });
    }
    this.#h.clear();
    this.#e.rememberHistoryStateSnapshot({
      historyIndex: this.#u,
      state: e
    });
    this.#g = false;
    let r = ot(this.#a());
    let i = r !== null && this.#t.has(r) && (r === this.#m || this.#n.has(r)) ? r : `${this.#i}:${this.#p++}`;
    this.#m = null;
    let a = this.#f;
    this.#f = i;
    this.#t.set(i, e);
    let o = this.#_;
    this.#_ = null;
    let s = o !== null && o === this.#u && o === u(this.#a());
    if (s) {
      this.#v(o, i);
    }
    if (a !== null && a !== i && !this.#n.has(a)) {
      this.#t.delete(a);
    }
    if (s) {
      this.#c(g(Wt(this.#a(), i), true));
    } else if (r !== i) {
      this.#c(Wt(this.#a(), i));
    }
  }
  readCurrentTreeSnapshot() {
    if (this.#f === null) {
      return null;
    } else {
      return this.#t.get(this.#f) ?? null;
    }
  }
  isCurrentExternalHistoryTree(e) {
    let t = ot(e);
    return t !== null && t === this.#f;
  }
  claimCurrentHistoryTreeSnapshot(e, t) {
    let n = this.#a();
    let r = ot(n);
    if (r === null || !this.#t.has(r)) {
      if (e === `push`) {
        let e = u(t);
        if (e !== null && this.#g) {
          this.#h.add(e);
        }
        this.#b();
        let r = this.#d + 1;
        this.#c(U(n, {
          previousNextUrl: lt(n),
          traversalIndex: r
        }));
        this.commitHistoryTraversalIndex(r);
        this.#_ = this.#g ? r : null;
      }
      return;
    }
    let i;
    if (e === `push`) {
      this.#b();
      i = this.#d + 1;
    } else {
      i = u(t) ?? this.#u;
    }
    if (i !== null) {
      n = g(U(n, {
        previousNextUrl: lt(n),
        traversalIndex: i
      }), true);
      this.#c(n);
      this.#v(i, r);
      this.commitHistoryTraversalIndex(i);
    }
  }
  commitAppOwnedHistoryStateWrite(e, t) {
    if (e === `push`) {
      this.#b();
      return;
    }
    if (!W(t) && !x(t)) {
      return;
    }
    let n = u(t) ?? this.#u;
    if (n !== null) {
      this.#y(n);
    }
  }
  #v(e, t) {
    let n = this.#r.get(e);
    if (n !== t) {
      if (n !== undefined) {
        this.#x(n);
      }
      this.#r.set(e, t);
      this.#n.set(t, (this.#n.get(t) ?? 0) + 1);
    }
  }
  #y(e) {
    let t = this.#r.get(e);
    if (t !== undefined) {
      this.#r.delete(e);
      this.#x(t);
    }
  }
  #b() {
    let e = this.#u;
    if (e !== null) {
      for (let t of this.#r.keys()) {
        if (t > e) {
          this.#y(t);
        }
      }
    }
  }
  #x(e) {
    let t = this.#n.get(e);
    if (t !== undefined) {
      if (t > 1) {
        this.#n.set(e, t - 1);
      } else {
        this.#n.delete(e);
        if (e !== this.#f) {
          this.#t.delete(e);
        }
      }
    }
  }
  commitHashOnlyNavigation(e, t, n) {
    let r = this.allocateNavigationHistoryTraversalIndex(t);
    let i = this.#a();
    let a = this.#l();
    let o = a ? a.previousNextUrl : lt(i);
    let s = a ? a.bfcacheIds : this.#e.readCurrentBfcacheVersionHistoryIds(i);
    let c = a ? a.activeRoutePaths : y(i);
    let l = g(U(this.#C(t, n), {
      activeRoutePaths: c,
      bfcacheIds: s,
      bfcacheVersion: s === null ? undefined : this.#e.currentBfcacheVersion,
      previousNextUrl: o,
      traversalIndex: r
    }), true);
    let u = this.#S(t, l, e, r, false);
    let d = ot(l);
    if (u !== null && d !== null) {
      this.#v(u, d);
    }
  }
  #S(e, t, n, r, i) {
    let a = this.#u;
    let o = this.#d;
    let s = t => {
      if (e === `push`) {
        this.#b();
        return;
      }
      if (!i) {
        return;
      }
      let n = u(t) ?? this.#u;
      if (n !== null) {
        this.#y(n);
      }
    };
    let c;
    let l = false;
    let d = t => {
      l = true;
      let n = this.#u !== a || this.#d !== o ? this.allocateNavigationHistoryTraversalIndex(e) : r;
      let u = this.#a();
      return {
        data: n === r ? t : U(t, {
          previousNextUrl: lt(t),
          traversalIndex: n
        }),
        commit: () => {
          s(u);
          if (i) {
            this.#g = true;
          }
          c = n;
          this.commitHistoryTraversalIndex(n);
        }
      };
    };
    let f = this.#a();
    if (e === `push`) {
      this.#s(t, n, d);
    } else {
      this.#c(t, n, d);
    }
    if (c === undefined) {
      if (l) {
        return null;
      } else {
        s(f);
        if (i) {
          this.#g = true;
        }
        this.commitHistoryTraversalIndex(r);
        return r;
      }
    } else {
      return c;
    }
  }
  #C(e, t) {
    let n = this.#a();
    if (e !== `replace`) {
      let e = Wt(null, ot(n));
      if (W(n)) {
        return qt(e, n);
      } else {
        return e;
      }
    }
    if (t) {
      return Qr(n);
    } else {
      return n;
    }
  }
  commitNavigationHistory(e) {
    let t = this.#o();
    let n = this.#a();
    let r = new URL(t).origin;
    let i = new URL(e.href, r).href;
    let a = e.historyUpdateMode === `replace`;
    let o = a && (W(n) || x(n));
    let s = e.targetHistoryIndex === undefined ? this.allocateNavigationHistoryTraversalIndex(e.historyUpdateMode) : e.targetHistoryIndex;
    let c = Xt(Re(U(a ? n : null, {
      activeRoutePaths: e.activeRoutePaths,
      bfcacheIds: e.bfcacheIds,
      bfcacheVersion: this.#e.currentBfcacheVersion,
      previousNextUrl: e.previousNextUrl,
      traversalIndex: s
    })));
    let l = false;
    if (e.historyUpdateMode === `replace` && (t !== i || o)) {
      e.stageClientParams();
      this.#S(`replace`, c, e.href, s, true);
      l = true;
    } else if (e.historyUpdateMode === `push` && t !== i) {
      e.stageClientParams();
      this.#S(`push`, c, e.href, s, true);
      l = true;
    }
    if (!l) {
      this.#g = true;
      this.syncCurrentHistoryStatePreviousNextUrl(e.previousNextUrl, e.bfcacheIds, e.activeRoutePaths);
      e.stageClientParams();
      if (e.targetHistoryIndex !== undefined) {
        this.commitHistoryTraversalIndex(e.targetHistoryIndex);
      }
    }
  }
  syncCurrentHistoryStatePreviousNextUrl(e, t, n) {
    if (this.#w(this.#a(), e, t, n)) {
      return;
    }
    let r = U(this.#a(), {
      activeRoutePaths: n,
      bfcacheIds: t,
      bfcacheVersion: t === undefined ? undefined : this.#e.currentBfcacheVersion,
      previousNextUrl: e
    });
    this.#c(r);
    if (!this.#w(this.#a(), e, t, n)) {
      this.#c(r);
    }
  }
  #w(e, t, n, r) {
    return lt(e) === t && (r === undefined || ti(y(e), r)) && (n === undefined || ni(R(e), n) && this.#e.isCurrentBfcacheVersion(e));
  }
  writeBootstrapHistoryMetadata() {
    this.#c(Xt(Re(U(this.#a(), {
      previousNextUrl: null,
      traversalIndex: this.#u
    }))), Zr(this.#o()));
  }
  writeHydratedHistoryMetadata(e) {
    this.#c(Re(U(this.#a(), {
      activeRoutePaths: e.activeRoutePaths,
      bfcacheIds: e.bfcacheIds,
      bfcacheVersion: this.#e.currentBfcacheVersion,
      previousNextUrl: e.previousNextUrl,
      traversalIndex: this.#u
    })));
  }
  restoreHistorySnapshot(e) {
    let t = () => {
      let t = ot(e.historyState);
      let n = t === null ? undefined : this.#t.get(t);
      if (n) {
        return e.approveVisibleRestore({
          state: n,
          beforeCommit: () => {
            this.commitTraversalIndexFromHistoryState(e.historyState);
            this.#g = true;
            e.stageClientParams(n.navigationSnapshot.params);
          }
        });
      } else {
        return false;
      }
    };
    if (e.preferExternalSnapshot) {
      return t();
    }
    let n = this.#e.resolveHistoryStateSnapshotRestore(e.historyState);
    if (n.kind === `skip`) {
      return t();
    } else {
      return e.approveVisibleRestore({
        state: n.state,
        beforeCommit: () => {
          this.commitHistoryTraversalIndex(n.targetHistoryIndex);
          this.#g = true;
          e.stageClientParams(n.state.navigationSnapshot.params);
        }
      });
    }
  }
};
function ei() {
  let e = crypto.getRandomValues(new Uint8Array(8));
  return Array.from(e, e => e.toString(16).padStart(2, `0`)).join(``);
}
function ti(e, t) {
  if (e === t) {
    return true;
  } else if (e === null || t === null || e.length !== t.length) {
    return false;
  } else {
    return e.every((e, n) => t[n] === e);
  }
}
function ni(e, t) {
  if (e === t) {
    return true;
  }
  if (e === null || t === null) {
    return false;
  }
  let n = Object.entries(e);
  let r = Object.entries(t);
  return n.length === r.length && n.every(([e, n]) => t[e] === n);
}
var ri = 1800000;
function ii(e) {
  let t = e.completedDynamicStaleTimeSeconds ?? e.dynamicStaleTimeSeconds;
  if (t === undefined) {
    return e.serverStaleTime !== undefined;
  } else {
    return t > 0;
  }
}
function ai(e) {
  return {
    createdAt: e.now,
    ...(e.elements ? {
      elements: e.elements
    } : {}),
    expiresAt: se(e.now, e.response, e.fallbackTtlMs ?? 300000),
    ...(e.fromHydration === true ? {
      fromHydration: true
    } : {}),
    mountedSlotsHeader: e.mountedSlotsHeader ?? null,
    params: e.params,
    response: e.response,
    reuseAfterHistoryRestore: e.reuseAfterHistoryRestore === true
  };
}
function oi(e, t) {
  if (t.navigationKind === `refresh`) {
    return false;
  } else if (t.navigationKind === `traverse`) {
    return t.now - e.createdAt < ri;
  } else {
    return e.expiresAt > t.now;
  }
}
function si(e) {
  try {
    let t = We(e);
    Je(t);
    return `${t.pathname}${t.search}`;
  } catch {
    return null;
  }
}
function ci(e, t, n) {
  let r = q.encodeCacheKey(t, n);
  let i = e.get(r);
  if (i) {
    return {
      cacheKey: r,
      entry: i
    };
  }
  let a = si(t);
  if (a === null) {
    return null;
  }
  for (let [t, r] of e) {
    let e = q.decodeCacheKey(t);
    if (e.interceptionContext === n && si(e.rscUrl) === a) {
      return {
        cacheKey: t,
        entry: r
      };
    }
  }
  return null;
}
function li(e, t, n) {
  let r = ci(e, t, n);
  if (r) {
    return e.delete(r.cacheKey);
  } else {
    return false;
  }
}
function ui(e, t, n) {
  let r = 0;
  while (li(e, t, n)) {
    r++;
  }
  return r;
}
function di(e) {
  for (let t of e.values()) {
    if (!t.reuseAfterHistoryRestore) {
      t.navigationReuseRevoked = true;
    }
  }
}
function fi(e, t, n, r) {
  for (let i of t) {
    let t = ci(e, i, n);
    if (t === null) {
      continue;
    }
    let {
      entry: a
    } = t;
    if (a.elements === undefined && a.mountedSlotsHeader !== r && (a.response.mountedSlotsHeader ?? null) !== r) {
      continue;
    }
    let o = a.fromHydration !== true && a.navigationReuseRevoked !== true && (a.elements !== undefined || a.mountedSlotsHeader === r) && oi(a, {
      navigationKind: `navigate`,
      now: Date.now()
    });
    return {
      navigatedAt: a.response.receivedAt ?? a.createdAt,
      navigationFreshUntil: o ? a.expiresAt : null,
      response: a.elements === undefined ? a.response : {
        ...a.response,
        preparedElements: a.elements
      }
    };
  }
  return null;
}
function pi(e) {
  return !!e && typeof e == `object` && !!(`__vinext_scrollY` in e);
}
function mi(e, t) {
  let n = e.getActiveNavigationId();
  e.markScrollRestoreConsumed(n);
  e.restorePopstateScrollPosition(t, {
    shouldContinue: () => e.isCurrentNavigation(n)
  });
}
function hi(e) {
  if (typeof window.requestAnimationFrame == `function`) {
    window.requestAnimationFrame(e);
  } else {
    queueMicrotask(e);
  }
}
function gi(e) {
  return {
    direction: `unknown`,
    historyState: e,
    targetHistoryIndex: u(e)
  };
}
function _i(e) {
  if (W(e.historyState)) {
    return e.isCurrentExternalHistoryTree;
  } else {
    return e.isSameAppRouteTarget;
  }
}
function vi(e) {
  return t => {
    e.notifyAppRouterTransitionStart(window.location.href);
    let n = e.getNavigate()?.(window.location.href, 0, `traverse`, undefined, undefined, false, gi(t.state)) ?? Promise.resolve();
    let r = e.getActiveNavigationId();
    e.setPendingNavigation(n);
    let i = pi(t.state);
    let a = () => e.isCurrentNavigation(r) && !e.shouldSkipScrollRestore(r);
    if (i) {
      hi(() => {
        if (a()) {
          e.restorePopstateScrollPosition(t.state, {
            shouldContinue: a
          });
        }
      });
    }
    n.finally(() => {
      if (a() && !i) {
        e.restorePopstateScrollPosition(t.state);
      }
      if (e.getPendingNavigation() === n) {
        e.setPendingNavigation(null);
      }
    });
  };
}
function yi(e) {
  if (!Xe(e.errorBoundary)) {
    return {};
  }
  let t = e.errorBoundary.props;
  if (Xe(t)) {
    return t;
  } else {
    return {};
  }
}
function bi(e) {
  return yi(e).isImplicitRootErrorBoundary === true;
}
function xi(e, t) {
  console.error(e);
  if (t?.componentStack) {
    console.error(`The above error occurred in a React component:
${t.componentStack}`);
  }
}
function Si(e) {
  if (typeof globalThis.reportError == `function`) {
    globalThis.reportError(e);
  } else {
    console.error(e);
  }
}
function Ci(e) {
  if (Ne(e) || typeof e == `object` && e && `name` in e && `message` in e) {
    return e;
  } else {
    return Error(String(e));
  }
}
function wi(e = {}) {
  return t => {
    Si(e.coerceToError ? Ci(t) : t);
  };
}
function Ti(e) {
  return (t, n) => {
    if (!Ne(t)) {
      if (bi(n)) {
        e(t, n);
      } else {
        xi(t, n);
      }
    }
  };
}
function Ei(e) {
  return t => {
    let n = t instanceof Error && t.cause !== undefined ? t.cause : t;
    if (!f(n)) {
      e();
      Si(n);
    }
  };
}
function Di() {
  let e = `pending`;
  let t = null;
  let n = null;
  let r = () => {
    if (e !== `committed` && e !== `complete` || t === null) {
      return;
    }
    let r = t;
    t = null;
    n = r();
  };
  return {
    commit() {
      if (e === `pending`) {
        e = `committed`;
        r();
      }
    },
    complete() {
      if (e === `committed`) {
        e = `complete`;
      }
    },
    fail() {
      if (e !== `complete` && e !== `invalidated`) {
        e = `invalidated`;
        t = null;
        n?.();
        n = null;
      }
    },
    invalidate() {
      if (e !== `invalidated`) {
        e = `invalidated`;
        t = null;
        n?.();
        n = null;
      }
    },
    publish(n) {
      if (e !== `invalidated`) {
        t = n;
        r();
      }
    }
  };
}
function Oi(e) {
  if (e.navigationKind !== `navigate` || e.bypassNavigationCache) {
    return null;
  } else {
    return (e.peek ?? c)(e.targetPathAndSearch, e.interceptionContext, e.mountedSlotsHeader, {
      additionalRscUrls: e.additionalRscUrls
    });
  }
}
function ki(e, t) {
  if (!e) {
    return null;
  }
  try {
    let n = new URL(e, t);
    Je(n);
    return `${n.pathname}${n.search}`;
  } catch {
    return null;
  }
}
function Ai(e, t) {
  try {
    return new URL(e, t).origin === new URL(t).origin;
  } catch {
    return false;
  }
}
function ji(e, t) {
  try {
    let n = new URL(e, t);
    if (n.origin === new URL(t).origin) {
      return ft(n);
    }
  } catch {}
  return e;
}
function Mi(e) {
  let t = ki(e.responseUrl, e.origin);
  if (t !== null && Ai(e.responseUrl, e.origin) && e.additionalRscUrls.some(n => ki(n, e.origin) === t)) {
    return e.visibleRscUrl;
  } else {
    return ji(e.responseUrl, e.origin);
  }
}
function Ni(e, t) {
  let {
    expiresAt: n,
    preparedElements: r,
    ...i
  } = e;
  return {
    expiresAt: n,
    preparedElements: r,
    snapshot: {
      ...i,
      url: t
    }
  };
}
function Pi(e, t) {
  if (t === undefined) {
    return e;
  } else {
    return {
      ...e,
      expiresAt: t
    };
  }
}
var Fi = new WeakMap();
var Ii = new Promise(() => {});
function Li(e) {
  return `${e.routeId}\0${e.interceptionContext ?? ``}\0${e.mountedSlotsHeader ?? ``}`;
}
function Ri(e) {
  return `${e.cacheKey}\0${e.interceptionContext ?? ``}\0${e.mountedSlotsHeader ?? ``}`;
}
function zi(e) {
  return je(e.segmentGraph.routes.values(), undefined);
}
function Bi(e) {
  let t = Fi.get(e);
  if (t) {
    return t;
  }
  let n = zi(e);
  Fi.set(e, n);
  return n;
}
function Vi(e, t) {
  let n;
  try {
    n = new URL(e, `https://vinext.local`);
  } catch {
    return null;
  }
  Je(n);
  let r = we(n.pathname, t);
  let i = r === `` ? `/` : r;
  return {
    normalized: h(i),
    raw: i.split(`/`).filter(Boolean)
  };
}
function Hi(e) {
  let t = Vi(e.href, e.basePath);
  if (t === null) {
    return null;
  }
  let n = Bt(Bi(e.routeManifest), t.normalized);
  if (n === null) {
    return null;
  } else {
    Yt(n.params);
    return n;
  }
}
function Ui(e, t) {
  for (let [n, r] of Object.entries(t)) {
    e[n] = r;
  }
}
function Wi(e) {
  let t = G(e.match.route.patternParts, e.rawUrlParts);
  Kn(t);
  let n = {
    ...t
  };
  let r = new Set(e.match.route.paramNames);
  for (let t of e.routeManifest.segmentGraph.slotBindings.values()) {
    if (t.routeId !== e.match.route.id || t.state !== `active`) {
      continue;
    }
    let i = t.slotPatternParts;
    if (!i || t.slotParamNames?.every(e => r.has(e))) {
      continue;
    }
    let a = T(e.urlParts, i);
    if (a) {
      Ui(n, a);
    }
  }
  return {
    navigationParams: n,
    routeParams: t
  };
}
function Gi(e, t, n, r = 0) {
  if (r > 100) {
    return;
  }
  if (Array.isArray(e)) {
    for (let i of e) {
      Gi(i, t, n, r + 1);
    }
    return;
  }
  if (!(0, J.isValidElement)(e)) {
    return;
  }
  let i = Reflect.get(e, `props`);
  if (!Xe(i)) {
    return;
  }
  let a = Reflect.get(i, `id`);
  if (typeof a == `string` && t.has(a)) {
    n.add(a);
  }
  for (let e of Object.values(i)) {
    Gi(e, t, n, r + 1);
  }
}
function Ki(e) {
  let t = q.readMetadata(e).bfcacheSegmentIdentities;
  let n = new Set(Object.keys(t).filter(t => p(t) && Object.hasOwn(e, t)));
  if (n.size === 0) {
    return [];
  }
  let r = new Set();
  for (let t of Object.values(e)) {
    Gi(t, n, r);
  }
  return [...n].filter(e => !r.has(e));
}
function qi(e) {
  let t = e.routeManifest.segmentGraph.routes.get(e.routeId);
  if (!t) {
    return;
  }
  let n = new Set(t.paramNames);
  for (let t of e.routeManifest.segmentGraph.slotBindings.values()) {
    if (t.routeId !== e.routeId) {
      continue;
    }
    let r = t.state === `active` && t.slotPatternParts !== undefined && t.slotPatternParts.length > 0 && !t.slotParamNames?.every(e => n.has(e)) ? T(e.targetUrlParts, t.slotPatternParts) ?? e.targetRouteParams : e.targetRouteParams;
    let i = t.ownerLayoutId ? e.routeManifest.segmentGraph.layouts.get(t.ownerLayoutId) : undefined;
    let a = i ? nr(i.patternParts, e.targetRouteParams) : ``;
    let o = e => {
      let n = JSON.stringify(e);
      return $t({
        activeRouteGraphId: null,
        boundSegmentKey: a ? JSON.stringify([a, n]) : n,
        interceptionTargetRouteGraphId: null,
        kind: `slot`,
        ownerLayoutGraphId: t.ownerLayoutId,
        slotGraphId: t.slotId,
        state: t.state
      });
    };
    let s = [];
    let c = 0;
    for (let n of t.routeSegments ?? []) {
      if (!n.startsWith(`@`) && (c += 1, s.push(er({
        marker: null,
        paramSource: `slot`,
        segment: n
      }, r)), me(t.slotId, c) === e.segmentId)) {
        return o(s);
      }
    }
    if (c > 0 && me(t.slotId, c + 1) === e.segmentId) {
      return o([...s, t.state === "default" ? Hn : Vn]);
    }
    if (c === 0 && me(t.slotId, 1) === e.segmentId) {
      return $t({
        activeRouteGraphId: null,
        boundSegmentKey: a ? JSON.stringify([a, ``]) : ``,
        interceptionTargetRouteGraphId: null,
        kind: `slot`,
        ownerLayoutGraphId: t.ownerLayoutId,
        slotGraphId: t.slotId,
        state: t.state
      });
    }
  }
}
function Ji(e, t = 0) {
  if (t > 100) {
    return false;
  }
  if (Array.isArray(e)) {
    return e.some(e => Ji(e, t + 1));
  }
  if (!(0, J.isValidElement)(e)) {
    return false;
  }
  let n = Reflect.get(e, `props`);
  if (e.type === J.Suspense && Xe(n) && Reflect.get(n, `fallback`) != null) {
    return true;
  } else if (Xe(n)) {
    return Ji(Reflect.get(n, `children`), t + 1);
  } else {
    return false;
  }
}
function Yi(e, t) {
  let n = new Set();
  if (t.pageId && Object.hasOwn(e, t.pageId)) {
    n.add(t.pageId);
  }
  for (let r of t.slotIds) {
    let t = q.parseElementKey(r);
    if (t?.kind === `slot` && t.name === `children` && Object.hasOwn(e, r)) {
      n.add(r);
    }
  }
  for (let t of Object.keys(e)) {
    if (q.parseElementKey(t)?.kind === `page`) {
      n.add(t);
    }
  }
  return Array.from(n).sort();
}
function Xi() {
  throw Ii;
}
function Zi(e) {
  let t = Hi({
    basePath: e.basePath,
    href: e.href,
    routeManifest: e.routeManifest
  });
  if (t === null || !e.allowLoadingShell && !t.route.isDynamic || e.interceptionContext !== null) {
    return null;
  }
  let n = q.readMetadata(e.elements);
  if (n.interception !== null || n.interceptionContext !== null) {
    return null;
  }
  let r = e.elements[n.routeId];
  if (!e.allowLoadingShell && !Ji(r) || e.allowLoadingShell && e.elements.__prefetchLoadingShell !== `LoadingBoundary` || e.allowLoadingShell && r == null) {
    return null;
  }
  let i = Yi(e.elements, t.route);
  if (i.length === 0) {
    return null;
  }
  let a = Vi(e.href, e.basePath);
  if (a === null) {
    return null;
  } else {
    return {
      elements: e.elements,
      mountedSlotsHeader: e.mountedSlotsHeader,
      omittedBfcacheSegmentIds: e.elements.__prefetchLoadingShell === `LoadingBoundary` ? Ki(e.elements) : [],
      omittedLayoutIds: e.elements.__prefetchLoadingShell === `LoadingBoundary` ? n.layoutIds.filter(t => !Object.hasOwn(e.elements, t)) : [],
      pageElementIds: i,
      params: Wi({
        match: t,
        rawUrlParts: a.raw,
        routeManifest: e.routeManifest,
        urlParts: a.normalized
      }).navigationParams,
      routeId: t.route.id
    };
  }
}
function Qi(e, t = e.params) {
  let n = {
    ...e.elements
  };
  for (let t of e.pageElementIds) {
    n[t] = (0, J.createElement)(Xi);
  }
  let r = $n(e.params, t);
  if (r === null) {
    return n;
  }
  De(n, r);
  let i = q.readMetadata(e.elements).bfcacheSegmentIdentities;
  if (Object.keys(i).length > 0) {
    n[Te] = Object.fromEntries(Object.entries(i).map(([e, t]) => [e, r(t)]));
  }
  return n;
}
function $i(e) {
  for (let t of Object.keys(e)) {
    if (t.startsWith(`__vinext_streaming_metadata_body:`)) {
      return t;
    }
  }
  return null;
}
function ea(e, t, n) {
  let r = $i(e);
  let i = $i(t);
  if (r === null || i === null) {
    return e;
  }
  let a = t[i];
  if (a == null) {
    return e;
  } else {
    return {
      ...e,
      [r]: (0, J.createElement)(J.Suspense, {
        fallback: a,
        key: n
      }, e[r])
    };
  }
}
function ta(e) {
  let t = q.readMetadata(e.currentElements).bfcacheSegmentIdentities;
  let {
    isBfcacheIdentityRetained: n,
    targetElements: r
  } = e;
  if (n && r) {
    let i = new Set(Object.values(e.shownElements ? q.readMetadata(e.shownElements).bfcacheSegmentIdentities : t));
    for (let e of Object.values(q.readMetadata(r).bfcacheSegmentIdentities)) {
      if (!i.has(e) && n(e)) {
        return false;
      }
    }
  }
  if (e.template.omittedLayoutIds.length === 0 && e.template.omittedBfcacheSegmentIds.length === 0) {
    return true;
  }
  let i = new Set(e.currentLayoutIds);
  for (let n of e.template.omittedLayoutIds) {
    if (!i.has(n) || !Object.hasOwn(e.currentElements, n)) {
      continue;
    }
    let r = e.routeManifest.segmentGraph.layouts.get(n);
    if (r === undefined) {
      continue;
    }
    let a = t[n];
    if (a !== undefined) {
      if (a === $t({
        boundSegmentKey: nr(r.patternParts, e.targetRouteParams),
        graphId: r.id,
        kind: `layout`,
        rootBoundaryId: r.rootBoundaryId
      })) {
        return false;
      }
    } else if (nr(r.patternParts, e.currentParams) === nr(r.patternParts, e.targetRouteParams)) {
      return false;
    }
  }
  for (let n of e.template.omittedBfcacheSegmentIds) {
    if (!Object.hasOwn(e.currentElements, n)) {
      continue;
    }
    let r = t[n];
    let i = qi({
      routeId: e.template.routeId,
      routeManifest: e.routeManifest,
      segmentId: n,
      targetRouteParams: e.targetRouteParams,
      targetUrlParts: e.targetUrlParts
    });
    if (r !== undefined && i !== undefined && r === i) {
      return false;
    }
  }
  return true;
}
function na(e) {
  if (e.interceptionContext !== null) {
    return null;
  }
  let t = Vi(e.href, e.basePath);
  if (t === null) {
    return null;
  }
  let n = Hi({
    basePath: e.basePath,
    href: e.href,
    routeManifest: e.routeManifest
  });
  if (n === null) {
    return null;
  }
  let r = e.templates.get(Li({
    interceptionContext: e.interceptionContext,
    mountedSlotsHeader: e.mountedSlotsHeader,
    routeId: n.route.id
  }));
  if (r === undefined || r.mountedSlotsHeader !== e.mountedSlotsHeader) {
    return null;
  }
  let {
    navigationParams: i,
    routeParams: a
  } = Wi({
    match: n,
    rawUrlParts: t.raw,
    routeManifest: e.routeManifest,
    urlParts: t.normalized
  });
  return {
    elements: Qi(r, i),
    params: i,
    routeParams: a,
    template: r,
    urlParts: t.normalized
  };
}
function ra() {
  let e = new Map();
  let t = new Set();
  let n = new Map();
  let r = 0;
  return {
    templates: e,
    clear() {
      r += 1;
      e.clear();
      t.clear();
      n.clear();
    },
    hasSource(e) {
      return t.has(e) || n.has(e);
    },
    learn(i, a) {
      let o = r;
      let s = a().then(n => {
        if (n !== null && o === r) {
          e.set(n.key, n.template);
          t.add(i);
        }
      }).finally(() => {
        if (n.get(i) === s) {
          n.delete(i);
        }
      });
      n.set(i, s);
      return s;
    },
    pendingLearning() {
      return [...n.values()];
    }
  };
}
var ia = /[\t\n\f\r ]+/;
function aa(e, t) {
  return e !== null && e.split(ia).some(e => e.length > 0 && e.toLowerCase() === t.toLowerCase());
}
function oa(e, t) {
  for (let n of e.split(/\s+/)) {
    if (n === t) {
      return true;
    }
    try {
      let e = new URL(n, window.location.href);
      let r = new URL(t, window.location.href);
      if (e.href === r.href) {
        return true;
      }
    } catch {}
  }
  return false;
}
function sa(e) {
  return aa(e.getAttribute(`rel`), `stylesheet`) && e.hasAttribute(`href`) && (e.hasAttribute(`data-precedence`) || e.hasAttribute(`precedence`));
}
function ca() {
  let e = document.head.querySelectorAll(`style[data-vinext-inline-css][data-href]`);
  if (e.length === 0) {
    return;
  }
  let t = document.head.querySelectorAll(`link[rel][href]`);
  for (let n of t) {
    if (!sa(n)) {
      continue;
    }
    let t = n.getAttribute(`href`);
    if (t) {
      for (let r of e) {
        let e = r.getAttribute(`data-href`);
        if (e && oa(e, t)) {
          n.remove();
          break;
        }
      }
    }
  }
}
var la = a();
function ua(e) {
  let t = new Map();
  return function (n) {
    if (t.has(n)) {
      return t.get(n);
    }
    let r = e.call(this, n);
    t.set(n, r);
    return r;
  };
}
function da(e) {
  return e.split(`$$cache=`)[0];
}
function fa() {
  globalThis.__vite_rsc_require__ = e => e.startsWith(`$$server:`) ? (e = e.slice(9), globalThis.__vite_rsc_server_require__(e)) : globalThis.__vite_rsc_client_require__(e);
}
var pa = false;
function ma(e) {
  if (pa) {
    return;
  }
  pa = true;
  let t = ua(t => e.load(da(t)));
  globalThis.__vite_rsc_client_require__ = t;
  fa();
}
var ha = n(e => {
  var t = i();
  function n(e) {
    var t = `https://react.dev/errors/${e}`;
    if (arguments.length > 1) {
      t += `?args[]=${encodeURIComponent(arguments[1])}`;
      for (var n = 2; n < arguments.length; n++) {
        t += `&args[]=${encodeURIComponent(arguments[n])}`;
      }
    }
    return `Minified React error #${e}; visit ${t} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`;
  }
  var r = {
    stream: true
  };
  var a = Object.prototype.hasOwnProperty;
  function o(e, t) {
    if (e) {
      var r = e[t[0]];
      if (e = r && r[t[2]]) {
        r = e.name;
      } else {
        e = r && r[`*`];
        if (!e) {
          throw Error(n(588, t[0]));
        }
        r = t[2];
      }
      if (t.length === 4) {
        return [e.id, e.chunks, r, 1];
      } else {
        return [e.id, e.chunks, r];
      }
    }
    return t;
  }
  function s(e, t) {
    var r = ``;
    var i = e[t];
    if (i) {
      r = i.name;
    } else {
      var a = t.lastIndexOf(`#`);
      if (a !== -1) {
        r = t.slice(a + 1);
        i = e[t.slice(0, a)];
      }
      if (!i) {
        throw Error(n(589, t));
      }
    }
    if (i.async) {
      return [i.id, i.chunks, r, 1];
    } else {
      return [i.id, i.chunks, r];
    }
  }
  var c = new Map();
  function l(e) {
    var t = __vite_rsc_require__(e);
    if (typeof t.then != `function` || t.status === `fulfilled`) {
      return null;
    } else {
      t.then(function (e) {
        t.status = `fulfilled`;
        t.value = e;
      }, function (e) {
        t.status = `rejected`;
        t.reason = e;
      });
      return t;
    }
  }
  function u() {}
  function d(e) {
    for (var t = e[1], n = [], r = 0; r < t.length;) {
      var i = t[r++];
      var a = t[r++];
      var o = c.get(i);
      if (o === undefined) {
        p.set(i, a);
        a = __webpack_chunk_load__(i);
        n.push(a);
        o = c.set.bind(c, i, null);
        a.then(o, u);
        c.set(i, a);
      } else if (o !== null) {
        n.push(o);
      }
    }
    if (e.length === 4) {
      if (n.length === 0) {
        return l(e[0]);
      } else {
        return Promise.all(n).then(function () {
          return l(e[0]);
        });
      }
    } else if (n.length > 0) {
      return Promise.all(n);
    } else {
      return null;
    }
  }
  function f(e) {
    var t = __vite_rsc_require__(e[0]);
    if (e.length === 4 && typeof t.then == `function`) {
      if (t.status === `fulfilled`) {
        t = t.value;
      } else {
        throw t.reason;
      }
    }
    if (e[2] === `*`) {
      return t;
    }
    if (e[2] === ``) {
      if (t.__esModule) {
        return t.default;
      } else {
        return t;
      }
    }
    if (a.call(t, e[2])) {
      return t[e[2]];
    }
  }
  var p = new Map();
  var m = {}.u;
  ({}).u = function (e) {
    var t = p.get(e);
    if (t === undefined) {
      return m(e);
    } else {
      return t;
    }
  };
  var h = t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  var g = Symbol.for(`react.transitional.element`);
  var _ = Symbol.for(`react.lazy`);
  var v = Symbol.asyncIterator;
  var y = Array.isArray;
  var b = Object.getPrototypeOf;
  var x = new WeakMap();
  function S(e, t, n) {
    if (!x.has(e)) {
      x.set(e, {
        id: t,
        originalBind: e.bind,
        bound: n
      });
    }
  }
  function C(e, t) {
    function n() {
      var e = Array.prototype.slice.call(arguments);
      if (i) {
        if (i.status === `fulfilled`) {
          return t(r, i.value.concat(e));
        } else {
          return Promise.resolve(i).then(function (n) {
            return t(r, n.concat(e));
          });
        }
      } else {
        return t(r, e);
      }
    }
    var r = e.id;
    var i = e.bound;
    S(n, r, i);
    return n;
  }
  var ee = Object.prototype;
  var w = Array.prototype;
  var T = Symbol();
  function E(e, t, n) {
    this.status = e;
    this.value = t;
    this.reason = n;
  }
  E.prototype = Object.create(Promise.prototype);
  Object.defineProperty(E.prototype, "then", {
    writable: true,
    enumerable: true,
    configurable: true,
    value: function (e, t) {
      switch (this.status) {
        case `resolved_model`:
          F(this);
          break;
        case `resolved_module`:
          ae(this);
      }
      switch (this.status) {
        case `fulfilled`:
          if (typeof e == `function`) {
            e(this.value);
          }
          break;
        case `pending`:
        case `pending_weak`:
        case `blocked`:
          if (typeof e == `function`) {
            if (this.value === null) {
              this.value = [];
            }
            this.value.push(e);
          }
          if (typeof t == `function`) {
            if (this.reason === null) {
              this.reason = [];
            }
            this.reason.push(t);
          }
          break;
        case `halted`:
          break;
        default:
          if (typeof t == `function`) {
            t(this.reason);
          }
      }
    }
  });
  function D(e) {
    switch (e.status) {
      case `resolved_model`:
        F(e);
        break;
      case `resolved_module`:
        ae(e);
    }
    switch (e.status) {
      case `fulfilled`:
        return e.value;
      case `pending`:
      case `pending_weak`:
      case `blocked`:
      case `halted`:
        throw e;
      default:
        throw e.reason;
    }
  }
  function O(e, t, n, r) {
    for (var i = 0; i < t.length; i++) {
      var a = t[i];
      if (typeof a == `function`) {
        a(n);
      } else {
        L(e, a, n, r);
      }
    }
  }
  function te(e, t, n) {
    for (var r = 0; r < t.length; r++) {
      var i = t[r];
      if (typeof i == `function`) {
        i(n);
      } else {
        R(e, i.handler, n);
      }
    }
  }
  function k(e, t) {
    var n = t.handler.chunk;
    if (n === null) {
      return null;
    }
    if (n === e) {
      return t.handler;
    }
    t = n.value;
    if (t !== null) {
      for (n = 0; n < t.length; n++) {
        var r = t[n];
        if (typeof r != `function` && (r = k(e, r), r !== null)) {
          return r;
        }
      }
    }
    return null;
  }
  function A(e, t, n, r) {
    switch (t.status) {
      case `fulfilled`:
        O(e, n, t.value, t);
        break;
      case `blocked`:
        for (var i = 0; i < n.length; i++) {
          var a = n[i];
          if (typeof a != `function`) {
            var o = k(t, a);
            if (o !== null) {
              L(e, a, o.value, t);
              n.splice(i, 1);
              i--;
              if (r !== null) {
                a = r.indexOf(a);
                if (a !== -1) {
                  r.splice(a, 1);
                }
              }
              switch (t.status) {
                case `fulfilled`:
                  O(e, n, t.value, t);
                  return;
                case `rejected`:
                  if (r !== null) {
                    te(e, r, t.reason);
                  }
                  return;
              }
            }
          }
        }
      case `pending`:
        if (t.value) {
          for (e = 0; e < n.length; e++) {
            t.value.push(n[e]);
          }
        } else {
          t.value = n;
        }
        if (t.reason) {
          if (r) {
            for (n = 0; n < r.length; n++) {
              t.reason.push(r[n]);
            }
          }
        } else {
          t.reason = r;
        }
        break;
      case `rejected`:
        if (r) {
          te(e, r, t.reason);
        }
    }
  }
  function ne(e, t, n) {
    if (t.status !== `pending` && t.status !== `pending_weak` && t.status !== `blocked`) {
      t.reason.error(n);
    } else {
      var r = t.reason;
      t.status = `rejected`;
      t.reason = n;
      if (r !== null) {
        te(e, r, n);
      }
    }
  }
  function re(e, t) {
    var n = {};
    return new E(`resolved_model`, t, (n[T] = e, n));
  }
  function j(e, t, n) {
    var r = {};
    return new E(`resolved_model`, `${(n ? `{"done":true,"value":` : `{"done":false,"value":`) + t}}`, (r[T] = e, r));
  }
  function M(e, t, n, r) {
    ie(e, t, `${(r ? `{"done":true,"value":` : `{"done":false,"value":`) + n}}`);
  }
  function ie(e, t, n) {
    if (t.status !== `pending` && t.status !== `pending_weak`) {
      t.reason.enqueueModel(n);
    } else {
      var r = t.value;
      var i = t.reason;
      t.status = `resolved_model`;
      t.value = n;
      n = {};
      n[T] = e;
      t.reason = n;
      if (r !== null) {
        F(t);
        A(e, t, r, i);
      }
    }
  }
  function N(e, t, n) {
    if (t.status === `pending` || t.status === `pending_weak` || t.status === `blocked`) {
      var r = t.value;
      var i = t.reason;
      t.status = `resolved_module`;
      t.value = n;
      t.reason = null;
      if (r !== null) {
        ae(t);
        A(e, t, r, i);
      }
    }
  }
  var P = null;
  function F(e) {
    var t = P;
    P = null;
    var n = e.value;
    var r = e.reason[T];
    e.status = `blocked`;
    e.value = null;
    e.reason = null;
    try {
      var i = Ee(r, n);
      n = P;
      if (n !== null) {
        if (n.errored) {
          if (e.status === `blocked`) {
            ne(r, e, n.reason);
          }
          return;
        }
        n.value = i;
        n.chunk = e;
      }
      var a = e.value;
      var o = e.reason;
      e.value = null;
      e.reason = null;
      if (a !== null) {
        var s = null;
        var c = null;
        for (var l = 0; l < a.length; l++) {
          var u = a[l];
          if (typeof u != `function` && k(e, u) !== null) {
            if (s === null) {
              s = [];
            }
            s.push(u);
            if (o !== null) {
              var d = o.indexOf(u);
              if (d !== -1) {
                o.splice(d, 1);
              }
            }
          } else {
            if (c === null) {
              c = [];
            }
            c.push(u);
          }
        }
        if (c !== null) {
          e.value = c;
          e.reason = o;
        }
        if (s !== null) {
          for (a = 0; a < s.length; a++) {
            L(r, s[a], i, e);
          }
        }
      }
      if (e.status === `blocked` && (n === null || !(n.deps > 0))) {
        ce(r, e, i, null);
      }
    } catch (t) {
      e.status = `rejected`;
      e.reason = t;
    } finally {
      P = t;
    }
  }
  function ae(e) {
    try {
      var t = f(e.value);
      e.status = `fulfilled`;
      e.value = t;
      e.reason = null;
    } catch (t) {
      e.status = `rejected`;
      e.reason = t;
    }
  }
  function oe(e, t) {
    e._closed = true;
    e._closedReason = t;
    e._chunks.forEach(function (n) {
      if (n.status === `pending`) {
        ne(e, n, t);
      } else if (n.status === `fulfilled` && n.reason !== null) {
        n.reason.error(t);
      }
    });
  }
  function se(e) {
    return {
      $$typeof: _,
      _payload: e,
      _init: D
    };
  }
  function I(e, t) {
    var n = e._chunks;
    var r = n.get(t);
    if (!r) {
      r = e._closed ? e._allowPartialStream ? new E(`halted`, null, null) : new E(`rejected`, null, e._closedReason) : new E(`pending`, null, null);
      n.set(t, r);
    }
    return r;
  }
  function ce(e, t, n, r) {
    var i = t.value;
    t.status = `fulfilled`;
    t.value = n;
    t.reason = r;
    if (i !== null) {
      O(e, i, n, t);
    }
  }
  function le(e, t) {
    if (t.deps === 0 && !t.errored) {
      var n = t.chunk;
      if (n !== null && n.status === `blocked`) {
        ce(e, n, t.value, t.reason);
      }
    }
  }
  function L(e, t, r) {
    var i = t.handler;
    var o = t.parentObject;
    var s = t.key;
    var c = t.map;
    var l = t.path;
    try {
      for (var u = 1; u < l.length; u++) {
        while (typeof r == `object` && r && r.$$typeof === _) {
          var d = r._payload;
          if (d === i.chunk) {
            r = i.value;
          } else {
            switch (d.status) {
              case `resolved_model`:
                F(d);
                break;
              case `resolved_module`:
                ae(d);
            }
            switch (d.status) {
              case `fulfilled`:
                r = d.value;
                continue;
              case `blocked`:
                var f = k(d, t);
                if (f !== null) {
                  r = f.value;
                  continue;
                }
              case `pending`:
              case `pending_weak`:
                l.splice(0, u - 1);
                if (d.value === null) {
                  d.value = [t];
                } else {
                  d.value.push(t);
                }
                if (d.reason === null) {
                  d.reason = [t];
                } else {
                  d.reason.push(t);
                }
                return;
              case `halted`:
                return;
              default:
                R(e, t.handler, d.reason);
                return;
            }
          }
        }
        var p = l[u];
        if (typeof r == `object` && r && a.call(r, p)) {
          r = r[p];
        } else {
          throw Error(n(570));
        }
      }
      while (typeof r == `object` && r && r.$$typeof === _) {
        var m = r._payload;
        if (m === i.chunk) {
          r = i.value;
        } else {
          switch (m.status) {
            case `resolved_model`:
              F(m);
              break;
            case `resolved_module`:
              ae(m);
          }
          if (m.status === `fulfilled`) {
            r = m.value;
            continue;
          }
          break;
        }
      }
      var h = c(e, r, o, s);
      if (s !== `__proto__`) {
        o[s] = h;
      }
      if (s === `` && i.value === null) {
        i.value = h;
      }
      if (o[0] === g && typeof i.value == `object` && i.value !== null && i.value.$$typeof === g) {
        var v = i.value;
        if (s === `3`) {
          v.props = h;
        }
      }
    } catch (n) {
      R(e, t.handler, n);
      return;
    }
    i.deps--;
    le(e, i);
  }
  function R(e, t, n) {
    if (!t.errored) {
      t.errored = true;
      t.value = null;
      t.reason = n;
      t = t.chunk;
      if (t !== null && t.status === `blocked`) {
        ne(e, t, n);
      }
    }
  }
  function ue(e, t, n, r, i, a) {
    if (P) {
      r = P;
      r.deps++;
    } else {
      r = P = {
        parent: null,
        chunk: null,
        value: null,
        reason: null,
        deps: 1,
        errored: false
      };
    }
    t = {
      handler: r,
      parentObject: t,
      key: n,
      map: i,
      path: a
    };
    if (e.value === null) {
      e.value = [t];
    } else {
      e.value.push(t);
    }
    if (e.reason === null) {
      e.reason = [t];
    } else {
      e.reason.push(t);
    }
    return null;
  }
  function de(e, t, n, r) {
    if (r === `then`) {
      return null;
    }
    var i = t.id;
    if (typeof i != `string`) {
      return null;
    }
    if (!e._serverReferenceConfig) {
      return C(t, e._callServer);
    }
    var a = s(e._serverReferenceConfig, i);
    var o = t.bound;
    if (t = d(a)) {
      if (o instanceof E) {
        t = Promise.all([t, o]);
      }
    } else if (o instanceof E) {
      t = Promise.resolve(o);
    } else {
      t = f(a);
      S(t, i, o);
      return t;
    }
    if (P) {
      var c = P;
      c.deps++;
    } else {
      c = P = {
        parent: null,
        chunk: null,
        value: null,
        reason: null,
        deps: 1,
        errored: false
      };
    }
    t.then(function () {
      var t = f(a);
      if (o) {
        var s = o.value;
        s = y(s) ? s.slice(0) : [];
        s.unshift(null);
        t = t.bind.apply(t, s);
      }
      S(t, i, o);
      if (r !== `__proto__`) {
        n[r] = t;
      }
      if (r === `` && c.value === null) {
        c.value = t;
      }
      if (n[0] === g && typeof c.value == `object` && c.value !== null && c.value.$$typeof === g) {
        s = c.value;
        switch (r) {
          case `3`:
            s.props = t;
        }
      }
      c.deps--;
      le(e, c);
    }, function (t) {
      if (!c.errored) {
        var n = c;
        n.errored = true;
        n.value = null;
        n.reason = t;
        n = c.chunk;
        if (n !== null && n.status === `blocked`) {
          ne(e, n, t);
        }
      }
    });
    return null;
  }
  var z = [];
  function B(e, t, r, i, o) {
    var s = parseInt(t, 16);
    t = t.indexOf(`:`) === -1 ? z : t.split(`:`);
    s = I(e, s);
    switch (s.status) {
      case `resolved_model`:
        F(s);
        break;
      case `resolved_module`:
        ae(s);
    }
    switch (s.status) {
      case `fulfilled`:
        s = s.value;
        for (var c = 1; c < t.length; c++) {
          while (typeof s == `object` && s && s.$$typeof === _) {
            s = s._payload;
            switch (s.status) {
              case `resolved_model`:
                F(s);
                break;
              case `resolved_module`:
                ae(s);
            }
            switch (s.status) {
              case `fulfilled`:
                s = s.value;
                break;
              case `blocked`:
              case `pending`:
              case `pending_weak`:
                return ue(s, r, i, e, o, t.slice(c - 1));
              case `halted`:
                if (P) {
                  e = P;
                  e.deps++;
                } else {
                  P = {
                    parent: null,
                    chunk: null,
                    value: null,
                    reason: null,
                    deps: 1,
                    errored: false
                  };
                }
                return null;
              default:
                if (P) {
                  e = P;
                  e.errored = true;
                  e.value = null;
                  e.reason = s.reason;
                } else {
                  P = {
                    parent: null,
                    chunk: null,
                    value: null,
                    reason: s.reason,
                    deps: 0,
                    errored: true
                  };
                }
                return null;
            }
          }
          var l = t[c];
          if (typeof s != `object` || !s || b(s) !== ee && b(s) !== w || !a.call(s, l)) {
            throw Error(n(570));
          }
          s = s[l];
        }
        while (typeof s == `object` && s && s.$$typeof === _) {
          t = s._payload;
          switch (t.status) {
            case `resolved_model`:
              F(t);
              break;
            case `resolved_module`:
              ae(t);
          }
          if (t.status === `fulfilled`) {
            s = t.value;
          } else {
            break;
          }
        }
        return o(e, s, r, i);
      case `pending`:
      case `pending_weak`:
      case `blocked`:
        return ue(s, r, i, e, o, t);
      case `halted`:
        if (P) {
          e = P;
          e.deps++;
        } else {
          P = {
            parent: null,
            chunk: null,
            value: null,
            reason: null,
            deps: 1,
            errored: false
          };
        }
        return null;
      default:
        if (P) {
          e = P;
          e.errored = true;
          e.value = null;
          e.reason = s.reason;
        } else {
          P = {
            parent: null,
            chunk: null,
            value: null,
            reason: s.reason,
            deps: 0,
            errored: true
          };
        }
        return null;
    }
  }
  function fe(e, t) {
    return new Map(t);
  }
  function V(e, t) {
    return new Set(t);
  }
  function pe(e, t) {
    return new Blob(t.slice(1), {
      type: t[0]
    });
  }
  function me(e, t) {
    e = new FormData();
    for (var n = 0; n < t.length; n++) {
      e.append(t[n][0], t[n][1]);
    }
    return e;
  }
  function H(e, t) {
    return t[Symbol.iterator]();
  }
  function he(e, t, n, r) {
    if (r === `then` && typeof t == `function`) {
      return null;
    } else {
      return t;
    }
  }
  function U(e, t, r, i) {
    if (i[0] === `$`) {
      if (i === `$`) {
        if (P !== null && r === `0`) {
          P = {
            parent: P,
            chunk: null,
            value: null,
            reason: null,
            deps: 0,
            errored: false
          };
        }
        return g;
      }
      switch (i[1]) {
        case `$`:
          return i.slice(1);
        case `L`:
          t = parseInt(i.slice(2), 16);
          e = I(e, t);
          return se(e);
        case `@`:
          t = parseInt(i.slice(2), 16);
          return I(e, t);
        case `w`:
          return;
        case `S`:
          return Symbol.for(i.slice(2));
        case `h`:
          i = i.slice(2);
          return B(e, i, t, r, de);
        case `T`:
          t = `$${i.slice(2)}`;
          e = e._tempRefs;
          if (e == null) {
            throw Error(n(511));
          }
          return e.get(t);
        case `Q`:
          i = i.slice(2);
          return B(e, i, t, r, fe);
        case `W`:
          i = i.slice(2);
          return B(e, i, t, r, V);
        case `B`:
          i = i.slice(2);
          return B(e, i, t, r, pe);
        case `K`:
          i = i.slice(2);
          return B(e, i, t, r, me);
        case `Z`:
          return we();
        case `i`:
          i = i.slice(2);
          return B(e, i, t, r, H);
        case `I`:
          return Infinity;
        case `-`:
          if (i === `$-0`) {
            return -0;
          } else {
            return -Infinity;
          }
        case `N`:
          return NaN;
        case `u`:
          return;
        case `D`:
          return new Date(Date.parse(i.slice(2)));
        case `n`:
          return BigInt(i.slice(2));
        default:
          i = i.slice(1);
          return B(e, i, t, r, he);
      }
    }
    return i;
  }
  function ge() {
    throw Error(n(466));
  }
  function _e(e, t, n, r, i, a, o, s) {
    var c = new Map();
    this._bundlerConfig = e;
    this._serverReferenceConfig = t;
    this._moduleLoading = n;
    this._callServer = r === undefined ? ge : r;
    this._encodeFormAction = i;
    this._nonce = a;
    this._chunks = c;
    this._stringDecoder = new TextDecoder();
    this._closed = false;
    this._closedReason = null;
    this._allowPartialStream = s;
    this._tempRefs = o;
  }
  function W(e, t, n) {
    e = e._chunks;
    var r = e.get(t);
    if (r && r.status !== `pending`) {
      r.reason.enqueueValue(n);
    } else {
      n = new E(`fulfilled`, n, null);
      e.set(t, n);
    }
  }
  function ve(e, t, r) {
    var i = e._chunks;
    var a = i.get(t);
    var s = P;
    P = null;
    try {
      var c = Ee(e, r);
      if (P !== null) {
        throw Error(n(608));
      }
    } finally {
      P = s;
    }
    var l = o(e._bundlerConfig, c);
    if (r = d(l)) {
      if (a) {
        var u = a;
        u.status = `blocked`;
      } else {
        u = new E(`blocked`, null, null);
        i.set(t, u);
      }
      r.then(function () {
        return N(e, u, l);
      }, function (t) {
        return ne(e, u, t);
      });
    } else if (a) {
      N(e, a, l);
    } else {
      a = new E(`resolved_module`, l, null);
      i.set(t, a);
    }
  }
  function ye(e, t, n, r) {
    var i = e._chunks;
    var a = i.get(t);
    if (a) {
      if (a.status === `pending`) {
        t = a.value;
        a.status = `fulfilled`;
        a.value = n;
        a.reason = r;
        if (t !== null) {
          O(e, t, a.value, a);
        }
      }
    } else {
      e = new E(`fulfilled`, n, r);
      i.set(t, e);
    }
  }
  function be(e, t, n) {
    var r = null;
    var i = false;
    n = new ReadableStream({
      type: n,
      start: function (e) {
        r = e;
      }
    });
    var a = null;
    ye(e, t, n, {
      enqueueValue: function (e) {
        if (a === null) {
          r.enqueue(e);
        } else {
          a.then(function () {
            r.enqueue(e);
          });
        }
      },
      enqueueModel: function (t) {
        if (a === null) {
          var n = re(e, t);
          F(n);
          if (n.status === `fulfilled`) {
            r.enqueue(n.value);
          } else {
            n.then(function (e) {
              return r.enqueue(e);
            }, function (e) {
              return r.error(e);
            });
            a = n;
          }
        } else {
          n = a;
          var i = new E(`pending`, null, null);
          i.then(function (e) {
            return r.enqueue(e);
          }, function (e) {
            return r.error(e);
          });
          a = i;
          n.then(function () {
            if (a === i) {
              a = null;
            }
            ie(e, i, t);
          });
        }
      },
      close: function () {
        if (!i) {
          i = true;
          if (a === null) {
            r.close();
          } else {
            var e = a;
            a = null;
            e.then(function () {
              return r.close();
            });
          }
        }
      },
      error: function (e) {
        if (!i) {
          i = true;
          if (a === null) {
            r.error(e);
          } else {
            var t = a;
            a = null;
            t.then(function () {
              return r.error(e);
            });
          }
        }
      }
    });
  }
  function xe() {
    return this;
  }
  function Se(e) {
    e = {
      next: e
    };
    e[v] = xe;
    return e;
  }
  function Ce(e, t, r) {
    var i = [];
    var a = false;
    var o = 0;
    var s = {};
    s[v] = function () {
      var e = 0;
      return Se(function (t) {
        if (t !== undefined) {
          throw Error(n(524));
        }
        if (e === i.length) {
          if (a) {
            return new E(`fulfilled`, {
              done: true,
              value: undefined
            }, null);
          }
          i[e] = new E(`pending`, null, null);
        }
        return i[e++];
      });
    };
    ye(e, t, r ? s[v]() : s, {
      enqueueValue: function (t) {
        if (o === i.length) {
          i[o] = new E(`fulfilled`, {
            done: false,
            value: t
          }, null);
        } else {
          var n = i[o];
          var r = n.value;
          var a = n.reason;
          n.status = `fulfilled`;
          n.value = {
            done: false,
            value: t
          };
          n.reason = null;
          if (r !== null) {
            A(e, n, r, a);
          }
        }
        o++;
      },
      enqueueModel: function (t) {
        if (o === i.length) {
          i[o] = j(e, t, false);
        } else {
          M(e, i[o], t, false);
        }
        o++;
      },
      close: function (t) {
        if (!a) {
          a = true;
          if (o === i.length) {
            i[o] = j(e, t, true);
          } else {
            M(e, i[o], t, true);
          }
          o++;
          while (o < i.length) {
            M(e, i[o++], `"$undefined"`, true);
          }
        }
      },
      error: function (t) {
        if (!a) {
          a = true;
          if (o === i.length) {
            i[o] = new E(`pending`, null, null);
          }
          while (o < i.length) {
            ne(e, i[o++], t);
          }
        }
      }
    });
  }
  function we() {
    var e = Error(n(441));
    e.stack = `Error: ${e.message}`;
    return e;
  }
  function G(e, t) {
    for (var n = e.length, r = t.length, i = 0; i < n; i++) {
      r += e[i].byteLength;
    }
    r = new Uint8Array(r);
    for (var a = i = 0; a < n; a++) {
      var o = e[a];
      r.set(o, i);
      i += o.byteLength;
    }
    r.set(t, i);
    return r;
  }
  function K(e, t, n, r, i, a) {
    n = n.length === 0 && r.byteOffset % a === 0 ? r : G(n, r);
    i = new i(n.buffer, n.byteOffset, n.byteLength / a);
    W(e, t, i);
  }
  function Te(e, t, i, a, o, s) {
    switch (a) {
      case 65:
        W(e, i, G(o, s).buffer);
        return;
      case 79:
        K(e, i, o, s, Int8Array, 1);
        return;
      case 111:
        W(e, i, o.length === 0 ? s : G(o, s));
        return;
      case 85:
        K(e, i, o, s, Uint8ClampedArray, 1);
        return;
      case 83:
        K(e, i, o, s, Int16Array, 2);
        return;
      case 115:
        K(e, i, o, s, Uint16Array, 2);
        return;
      case 76:
        K(e, i, o, s, Int32Array, 4);
        return;
      case 108:
        K(e, i, o, s, Uint32Array, 4);
        return;
      case 71:
        K(e, i, o, s, Float32Array, 4);
        return;
      case 103:
        K(e, i, o, s, Float64Array, 8);
        return;
      case 77:
        K(e, i, o, s, BigInt64Array, 8);
        return;
      case 109:
        K(e, i, o, s, BigUint64Array, 8);
        return;
      case 86:
        K(e, i, o, s, DataView, 1);
        return;
    }
    t = e._stringDecoder;
    var c = ``;
    for (var l = 0; l < o.length; l++) {
      c += t.decode(o[l], r);
    }
    o = c += t.decode(s);
    switch (a) {
      case 73:
        ve(e, i, o);
        break;
      case 72:
        i = o[0];
        o = o.slice(1);
        e = Ee(e, o);
        o = h.d;
        switch (i) {
          case `D`:
            o.D(e);
            break;
          case `C`:
            if (typeof e == `string`) {
              o.C(e);
            } else {
              o.C(e[0], e[1]);
            }
            break;
          case `L`:
            i = e[0];
            a = e[1];
            if (e.length === 3) {
              o.L(i, a, e[2]);
            } else {
              o.L(i, a);
            }
            break;
          case `m`:
            if (typeof e == `string`) {
              o.m(e);
            } else {
              o.m(e[0], e[1]);
            }
            break;
          case `X`:
            if (typeof e == `string`) {
              o.X(e);
            } else {
              o.X(e[0], e[1]);
            }
            break;
          case `S`:
            if (typeof e == `string`) {
              o.S(e);
            } else {
              o.S(e[0], e[1] === 0 ? undefined : e[1], e.length === 3 ? e[2] : undefined);
            }
            break;
          case `M`:
            if (typeof e == `string`) {
              o.M(e);
            } else {
              o.M(e[0], e[1]);
            }
        }
        break;
      case 69:
        a = e._chunks;
        s = a.get(i);
        o = JSON.parse(o);
        t = we();
        t.digest = o.digest;
        if (s) {
          ne(e, s, t);
        } else {
          e = new E(`rejected`, null, t);
          a.set(i, e);
        }
        break;
      case 84:
        e = e._chunks;
        if ((a = e.get(i)) && a.status !== `pending`) {
          a.reason.enqueueValue(o);
        } else {
          o = new E(`fulfilled`, o, null);
          e.set(i, o);
        }
        break;
      case 78:
      case 68:
      case 74:
      case 87:
        throw Error(n(504));
      case 82:
        be(e, i, undefined);
        break;
      case 114:
        be(e, i, `bytes`);
        break;
      case 88:
        Ce(e, i, false);
        break;
      case 120:
        Ce(e, i, true);
        break;
      case 67:
        if ((i = e._chunks.get(i)) && i.status === `fulfilled`) {
          i.reason.close(o === `` ? `"$undefined"` : o);
        }
        break;
      default:
        a = e._chunks;
        if (s = a.get(i)) {
          ie(e, s, o);
        } else {
          e = re(e, o);
          a.set(i, e);
        }
    }
  }
  function Ee(e, t) {
    t = JSON.parse(t);
    return De(e, t, {
      "": t
    }, ``);
  }
  function De(e, t, n, r) {
    if (typeof t == `string`) {
      if (t[0] === `$`) {
        return U(e, n, r, t);
      } else {
        return t;
      }
    }
    if (typeof t != `object` || !t) {
      return t;
    }
    if (y(t)) {
      for (var i = 0; i < t.length; i++) {
        t[i] = De(e, t[i], t, `${i}`);
      }
      if (t[0] === g) {
        if (t[0] === g) {
          e = {
            $$typeof: g,
            type: t[1],
            key: t[2],
            ref: null,
            props: t[3]
          };
          if (P !== null) {
            t = P;
            P = t.parent;
            if (t.errored) {
              e = new E(`rejected`, null, t.reason);
              e = se(e);
            } else if (t.deps > 0) {
              i = new E(`blocked`, null, null);
              t.value = e;
              t.chunk = i;
              e = se(i);
            }
          }
        } else {
          e = t;
        }
        return e;
      } else {
        return t;
      }
    }
    for (i in t) {
      if (a.call(t, i)) {
        if (i === `__proto__`) {
          delete t[i];
        } else {
          n = De(e, t[i], t, i);
          if (n === undefined) {
            delete t[i];
          } else {
            t[i] = n;
          }
        }
      }
    }
    return t;
  }
  function Oe(e) {
    if (e._allowPartialStream) {
      e._closed = true;
      e._chunks.forEach(function (e) {
        if (e.status === `pending`) {
          e.status = `halted`;
          e.value = null;
          e.reason = null;
        } else if (e.status === `fulfilled` && e.reason !== null) {
          e.reason.close(`"$undefined"`);
        }
      });
    } else {
      oe(e, Error(n(412)));
    }
  }
  function ke(e) {
    return new _e(null, null, null, e && e.callServer ? e.callServer : undefined, undefined, undefined, e && e.temporaryReferences ? e.temporaryReferences : undefined, e && e.unstable_allowPartialStream ? e.unstable_allowPartialStream : false);
  }
  function Ae(e, t, n) {
    function r(t) {
      var s = t.value;
      if (t.done) {
        return n();
      }
      var c = 0;
      var l = a._rowState;
      t = a._rowID;
      for (var u = a._rowTag, d = a._rowLength, f = a._buffer, p = s.length; c < p;) {
        var m = -1;
        switch (l) {
          case 0:
            m = s[c++];
            if (m === 58) {
              l = 1;
            } else {
              t = t << 4 | (m > 96 ? m - 87 : m - 48);
            }
            continue;
          case 1:
            l = s[c];
            if (l === 84 || l === 65 || l === 79 || l === 111 || l === 98 || l === 85 || l === 83 || l === 115 || l === 76 || l === 108 || l === 71 || l === 103 || l === 77 || l === 109 || l === 86) {
              u = l;
              l = 2;
              c++;
            } else if (l > 64 && l < 91 || l === 35 || l === 114 || l === 120) {
              u = l;
              l = 3;
              c++;
            } else {
              u = 0;
              l = 3;
            }
            continue;
          case 2:
            m = s[c++];
            if (m === 44) {
              l = 4;
            } else {
              d = d << 4 | (m > 96 ? m - 87 : m - 48);
            }
            continue;
          case 3:
            m = s.indexOf(10, c);
            break;
          case 4:
            m = c + d;
            if (m > s.length) {
              m = -1;
            }
        }
        var h = s.byteOffset + c;
        if (m > -1) {
          d = new Uint8Array(s.buffer, h, m - c);
          if (u === 98) {
            W(e, t, m === p ? d : d.slice());
          } else {
            Te(e, a, t, u, f, d);
          }
          c = m;
          if (l === 3) {
            c++;
          }
          d = t = u = l = 0;
          f.length = 0;
        } else {
          s = new Uint8Array(s.buffer, h, s.byteLength - c);
          if (u === 98) {
            d -= s.byteLength;
            W(e, t, s);
          } else {
            f.push(s);
            d -= s.byteLength;
          }
          break;
        }
      }
      a._rowState = l;
      a._rowID = t;
      a._rowTag = u;
      a._rowLength = d;
      return o.read().then(r).catch(i);
    }
    function i(t) {
      oe(e, t);
    }
    var a = {
      _rowState: 0,
      _rowID: 0,
      _rowTag: 0,
      _rowLength: 0,
      _buffer: []
    };
    var o = t.getReader();
    o.read().then(r).catch(i);
  }
  e.createFromFetch = function (e, t) {
    var n = ke(t);
    e.then(function (e) {
      Ae(n, e.body, Oe.bind(null, n));
    }, function (e) {
      oe(n, e);
    });
    return I(n, 0);
  };
  e.createFromReadableStream = function (e, t) {
    t = ke(t);
    Ae(t, e, Oe.bind(null, t));
    return I(t, 0);
  };
});
var ga = t(n((e, t) => {
  t.exports = ha();
})(), 1);
function _a(e, t = {}) {
  return ga.createFromReadableStream(e, {
    callServer: ya,
    findSourceMapURL: ba,
    ...t
  });
}
function va(e, t = {}) {
  return ga.createFromFetch(e, {
    callServer: ya,
    findSourceMapURL: ba,
    ...t
  });
}
function ya(...e) {
  return globalThis.__viteRscCallServer(...e);
}
function ba(e, t) {
  let n = new URL(`/__vite_rsc_findSourceMapURL`, import.meta.url);
  n.searchParams.set(`filename`, e);
  n.searchParams.set(`environmentName`, t);
  return n.toString();
}
xa();
function xa() {
  ma({
    load: async e => {
      {
        let t = Nt[e];
        if (!t) {
          throw Error(`client reference not found '${e}'`);
        }
        return t();
      }
    }
  });
}
function Sa(e) {
  if (e === `traverse`) {
    return `traverse`;
  } else {
    return `navigate`;
  }
}
function Ca(e) {
  switch (e) {
    case `navigate`:
      return `navigation`;
    case `refresh`:
      return `refresh`;
    case `traverse`:
      return `traverse`;
    default:
      throw Error(`[vinext] Unknown navigation kind: ${String(e)}`);
  }
}
var wa = 50;
var Ta = false;
var Ea = `vinext:missing`;
function Da(e) {
  return Rt(e, Ea);
}
function Oa(e) {
  if (e) {
    Ea = e;
  }
}
var ka = ra();
function Aa() {
  if (window.__VINEXT_RSC_ROOT__ || window.__VINEXT_RSC_BOOTSTRAP_STATE__) {
    return false;
  } else {
    window.__VINEXT_RSC_BOOTSTRAP_STATE__ = `starting`;
    return true;
  }
}
function ja() {
  window.__VINEXT_RSC_BOOTSTRAP_STATE__ = `hydrated`;
}
mt({
  loadRouteManifest: dt(() => d(() => import(`./CkNGcHpb.js`), []))
});
function Ma() {
  return Ue()?.bootstrap.routeManifest ?? null;
}
var Y = new $r({
  initialHistoryState: window.history.state,
  maxHistoryStateSnapshots: 50,
  readHistoryState: () => window.history.state,
  readCurrentHref: () => window.location.href,
  pushHistoryState: (e, t, n) => it(e, ``, t, n),
  replaceHistoryState: (e, t, n) => F(e, ``, t, n),
  readVisibleNavigationMetadata: () => {
    if (!eo()) {
      return null;
    }
    let e = $();
    return {
      activeRoutePaths: oe(e.slotBindings),
      bfcacheIds: e.bfcacheIds,
      previousNextUrl: e.previousNextUrl
    };
  }
});
var X = Mr({
  basePath: ``,
  getRouteManifest: Ma,
  loadRouteManifest: qe,
  navigateDocument: (e, t) => {
    if (Ka) {
      Ka.enter(e, t === `replace` ? `replace` : `push`);
    } else {
      Or(e, t);
    }
  },
  syncHistoryStatePreviousNextUrl: (e, t) => Y.syncCurrentHistoryStatePreviousNextUrl(e, t)
});
var Na = {
  markNavigationSettled() {},
  markNavigationStart() {},
  schedule() {}
};
var Pa = Wr();
var Fa = X.NavigationCommitSignal;
var Ia = X.NavigationHistoryCommit;
var La = `data-vinext-action-http-fallback`;
function Ra(e) {
  document.head.querySelectorAll(`meta[${La}="robots"]`).forEach(e => e.remove());
  if (e !== 404) {
    return;
  }
  let t = document.createElement(`meta`);
  t.name = `robots`;
  t.content = `noindex`;
  t.setAttribute(La, `robots`);
  document.head.appendChild(t);
}
var za = de();
function Ba(e) {
  if (!e) {
    return null;
  }
  try {
    return JSON.parse(decodeURIComponent(e));
  } catch {
    return null;
  }
}
function Va(e) {
  return e instanceof Promise;
}
var Ha = {};
var Z = new Map();
var Q = 0;
var Ua = null;
var Wa = new rt();
var Ga = new Promise(() => {});
var Ka = null;
var qa = null;
function Ja() {
  if (!qa) {
    let e = () => {};
    qa = {
      promise: new Promise(t => {
        e = t;
      }),
      resolve: e
    };
  }
  return qa.promise;
}
var Ya = vt;
var Xa = null;
var Za = null;
function Qa() {
  let e = Za;
  Za = null;
  e?.();
}
function $a(e, t, n, r = false) {
  let i = false;
  (0, Sr.flushSync)(() => {
    i = Y.restoreHistorySnapshot({
      historyState: e,
      preferExternalSnapshot: r,
      stageClientParams: io,
      approveVisibleRestore: ({
        state: e,
        beforeCommit: i
      }) => X.restoreHistorySnapshotVisibleState({
        restoreCopiedExternalHistoryEntry: r,
        beforeCommit: () => {
          n?.();
          i();
          if (!r) {
            Ut();
            Za = () => b(t);
          }
        },
        navId: t,
        state: e,
        targetHref: window.location.href
      })
    });
  });
  if (i) {
    Q += 1;
    di(Z);
    H();
    if (r) {
      b(t, {
        releaseSnapshot: false
      });
    } else {
      Qa();
    }
    return true;
  } else {
    return false;
  }
}
function $() {
  return X.getBrowserRouterState();
}
function eo() {
  return X.hasBrowserRouterState();
}
function to() {
  return X.waitForBrowserRouterStateReady();
}
function no() {
  return X.beginPendingBrowserRouterState();
}
function ro(e) {
  Ha = e;
  at(e);
}
function io(e) {
  Ha = e;
  l(e);
}
function ao() {
  Z.clear();
  le();
}
function oo(e) {
  _(e);
  ka.clear();
}
function so(e) {
  Q += 1;
  ao();
  oo(e);
  Y.invalidateRestorableClientState();
}
async function co(e) {
  let t = Mt({
    interceptionContext: e.interceptionContext,
    interceptionId: e.interceptionId,
    mountedSlotsHeader: e.mountedSlotsHeader
  });
  return uo(await fetch(await Ve(e.targetPathname, t), {
    credentials: `include`,
    headers: t,
    signal: e.signal
  }), e.targetPathname);
}
async function lo(e) {
  let t = Mt({
    mountedSlotsHeader: e.mountedSlotsHeader
  });
  return uo(await fetch(await Ve(e.targetPathname, t), {
    credentials: `include`,
    headers: t,
    signal: e.signal
  }), e.targetPathname);
}
async function uo(e, t) {
  if (!Da(e.headers.get(`X-Vinext-RSC-Compatibility-Id`))) {
    e.body?.cancel().catch(() => {});
    throw Error(`[vinext] Refreshed another deployment's payload`);
  }
  let n = await Oo(va(Promise.resolve(e)));
  let r = st(e.headers.get(et));
  xt(n, new URL(r ?? t, window.location.origin).search);
  return n;
}
function fo(e) {
  return e.outcome === `cache-seeded` && e.pending === undefined && e.snapshot !== undefined;
}
async function po(e) {
  let t = q.decodeCacheKey(e.cacheKey);
  if (t.interceptionContext !== e.interceptionContext || ue(e.entry) !== e.mountedSlotsHeader || e.interceptionContext !== null || !Da(e.entry.snapshot.compatibilityIdHeader)) {
    return null;
  }
  let n = await Oo(va(Promise.resolve(S(e.entry.snapshot))));
  let r = Zi({
    allowLoadingShell: e.entry.optimisticRouteShell === true,
    basePath: ``,
    elements: n,
    href: e.entry.snapshot.url || t.rscUrl,
    interceptionContext: e.interceptionContext,
    mountedSlotsHeader: e.mountedSlotsHeader,
    routeManifest: e.routeManifest
  });
  if (r === null) {
    return null;
  } else {
    return {
      key: Li({
        interceptionContext: e.interceptionContext,
        mountedSlotsHeader: e.mountedSlotsHeader,
        routeId: r.routeId
      }),
      template: r
    };
  }
}
async function mo(e) {
  let {
    routeManifest: t
  } = e;
  if (t === null) {
    return;
  }
  let n = ka.pendingLearning();
  for (let [r, i] of Ht()) {
    let a = Ri({
      cacheKey: r,
      interceptionContext: e.interceptionContext,
      mountedSlotsHeader: e.mountedSlotsHeader
    });
    if (!ka.hasSource(a)) {
      if (fo(i) && i.prefetchKind !== `route-tree`) {
        n.push(ka.learn(a, () => po({
          cacheKey: r,
          entry: i,
          interceptionContext: e.interceptionContext,
          mountedSlotsHeader: e.mountedSlotsHeader,
          routeManifest: t
        })));
      }
    }
  }
  if (n.length !== 0) {
    await Promise.allSettled(n);
  }
}
function ho(e) {
  let {
    activeRoutePaths: t,
    bfcacheIds: n,
    href: r,
    historyUpdateMode: i,
    navId: a,
    params: o,
    previousNextUrl: s,
    targetHistoryIndex: c
  } = e;
  let l = false;
  return {
    writeHistory({
      keepCurrentUrl: e
    }) {
      if (X.isCurrentNavigation(a)) {
        Y.commitNavigationHistory({
          activeRoutePaths: t,
          bfcacheIds: n,
          href: r,
          historyUpdateMode: e ? undefined : i,
          previousNextUrl: s,
          stageClientParams: () => io(o),
          targetHistoryIndex: c
        });
        l = true;
      }
    },
    publish({
      releaseSnapshot: e
    }) {
      if (l) {
        nt(r);
        b(a, {
          releaseSnapshot: e
        });
      } else {
        b(undefined, {
          releaseSnapshot: e
        });
      }
    }
  };
}
async function go(e) {
  Ra(null);
  return X.renderNavigationPayload({
    actionType: e.actionType ?? `navigate`,
    createNavigationCommitEffect: ho,
    historyUpdateMode: e.historyUpdateMode,
    navigationCommitKind: e.navigationCommitKind,
    navigationInitiationState: e.navigationInitiationState,
    navigationResponseCompletion: e.navigationResponseCompletion,
    navigationSnapshot: e.navigationSnapshot,
    navId: e.navId,
    nextElements: e.payload,
    onCommittedState: e.onCommittedState,
    operationLane: e.operationLane ?? `navigation`,
    params: e.params,
    payloadOrigin: e.payloadOrigin,
    pendingRouterState: e.pendingRouterState,
    previousNextUrl: e.previousNextUrl,
    restoredBfcacheIds: e.restoredBfcacheIds ?? null,
    reuseCurrentBfcacheIds: e.reuseCurrentBfcacheIds ?? true,
    scrollIntent: e.scrollIntent ?? null,
    targetHistoryIndex: e.traversalIntent?.targetHistoryIndex,
    targetHref: e.targetHref,
    visibleCommitMode: e.visibleCommitMode ?? `transition`
  });
}
function _o() {
  while (Z.size >= wa) {
    let e = Z.keys().next().value;
    if (e === undefined) {
      return;
    }
    Z.delete(e);
  }
}
function vo(e, t, n, r) {
  let i = q.encodeCacheKey(e, t);
  let a = ci(Z, e, t);
  if (!a || a.entry.navigationReuseRevoked) {
    return {
      cacheKey: i,
      entry: null,
      facts: {
        candidate: `missing`,
        navigationKind: r
      }
    };
  } else {
    return {
      cacheKey: a.cacheKey,
      entry: a.entry,
      facts: {
        candidate: `present`,
        fresh: oi(a.entry, {
          navigationKind: r,
          now: Date.now()
        }),
        mountedSlotsMatch: a.entry.elements !== undefined || a.entry.mountedSlotsHeader === n,
        navigationKind: r
      }
    };
  }
}
function yo(e, t) {
  if (e.entry === null) {
    return null;
  } else if (t.kind === `reuse`) {
    Z.delete(e.cacheKey);
    Z.set(e.cacheKey, e.entry);
    return e.entry;
  } else {
    Z.delete(e.cacheKey);
    return null;
  }
}
function bo(e, t) {
  li(Z, e, t);
}
function xo(e, t, n, r, i = Qe, a = n.mountedSlotsHeader ?? null, o, s = true, c = n, l = false, u = false) {
  let d = q.encodeCacheKey(e, t);
  ui(Z, e, t);
  _o();
  let f = ai({
    fallbackTtlMs: i,
    elements: o,
    fromHydration: u,
    now: Date.now(),
    mountedSlotsHeader: a,
    params: r,
    response: n,
    reuseAfterHistoryRestore: l
  });
  Z.set(d, f);
  if (s) {
    ie(e, c, t, a, i, l);
  }
  return () => {
    if (Z.get(d) === f) {
      Z.delete(d);
    }
    if (s) {
      Gt(e, c, t);
    }
  };
}
function So(e) {
  return `${window.location.origin}${L(e)}`;
}
function Co() {
  let e = q.parseElementKey($().routeId);
  if (e?.kind === `route`) {
    return e.path;
  } else {
    return null;
  }
}
function wo(e, t, n, r) {
  if (n !== undefined) {
    return {
      interceptionContext: Dn(n, ``),
      previousNextUrl: n
    };
  }
  switch (e) {
    case `navigate`:
      {
        let e = $().previousNextUrl;
        if (e !== null) {
          return {
            interceptionContext: Dn(e, ``),
            previousNextUrl: e
          };
        }
        let n = O({
          basePath: ``,
          currentPathname: window.location.pathname,
          routeManifest: Ma(),
          targetPathname: t
        });
        if (n !== null) {
          return {
            interceptionContext: n,
            previousNextUrl: window.location.pathname + window.location.search
          };
        }
        let r = be({
          basePath: ``,
          currentMatchedPathname: Co(),
          currentPathname: window.location.pathname,
          routeManifest: Ma(),
          targetPathname: t
        });
        if (r === null) {
          return {
            interceptionContext: null,
            previousNextUrl: null
          };
        } else {
          return {
            interceptionContext: r,
            previousNextUrl: window.location.pathname + window.location.search
          };
        }
      }
    case `traverse`:
      {
        let e = lt(r ?? window.history.state);
        return {
          interceptionContext: Dn(e, ``),
          previousNextUrl: e
        };
      }
    case `refresh`:
      {
        let e = $().previousNextUrl;
        return {
          interceptionContext: Dn(e, ``),
          previousNextUrl: e
        };
      }
    default:
      throw Error(`[vinext] Unknown navigation kind: ${String(e)}`);
  }
}
function To(e) {
  return typeof e == `object` && !!e && `kind` in e && e.kind === `mpa-navigation`;
}
function Eo(e, t) {
  Wa.navigate(window, e, t);
}
function Do({
  children: e
}) {
  let t = I();
  (0, J.useEffect)(() => {
    let e = e => {
      let n = `reason` in e ? e.reason : e.error;
      if (!xe(n)) {
        return;
      }
      if (`handled` in n && n.handled === true) {
        e.preventDefault();
        return;
      }
      let r = Qt(n.digest);
      if (r) {
        e.preventDefault();
        (0, J.startTransition)(() => {
          if (r.type === `push`) {
            t.push(r.url);
          } else {
            t.replace(r.url);
          }
        });
      }
    };
    window.addEventListener(`error`, e);
    window.addEventListener(`unhandledrejection`, e);
    return () => {
      window.removeEventListener(`error`, e);
      window.removeEventListener(`unhandledrejection`, e);
    };
  }, [t]);
  return e ?? null;
}
function Oo(e) {
  return Promise.resolve(e).then(e => q.decode(e));
}
function ko({
  hydrationCachePublication: e,
  initialElements: t,
  initialNavigationSnapshot: n
}) {
  let r = (0, J.use)(t);
  let i = q.readMetadata(r);
  let [a, o] = (0, J.useState)(() => ({
    activeOperation: null,
    bfcacheIds: C(r),
    elements: r,
    interception: i.interception,
    interceptionContext: i.interceptionContext,
    layoutIds: i.layoutIds,
    navigationSnapshot: n,
    previousNextUrl: null,
    renderId: 0,
    rootLayoutTreePath: i.rootLayoutTreePath,
    routeId: i.routeId,
    slotBindings: i.slotBindings,
    visibleCommitVersion: 0
  }));
  if (To(a)) {
    Eo(a.href, a.historyUpdateMode);
    throw Ga;
  }
  let s = Va(a) ? (0, J.use)(a) : a;
  let c = (0, J.useRef)(s);
  c.current = s;
  let l = (0, J.useRef)(s);
  (0, J.useLayoutEffect)(() => {
    l.current = s;
  }, [s]);
  (0, J.useLayoutEffect)(() => {
    let t = X.attachBrowserRouterState(e => {
      o(e);
    }, c);
    let n = (e, t) => {
      (0, J.startTransition)(() => {
        o({
          href: e,
          historyUpdateMode: t,
          kind: `mpa-navigation`
        });
      });
    };
    let r = {
      enter: n,
      restore() {
        o(e => To(e) ? l.current : e);
      }
    };
    Ka = r;
    mt({
      navigateExternal: (e, t) => {
        n(e, t);
        return Ja();
      }
    });
    e.commit();
    return () => {
      e.invalidate();
      if (Ka === r) {
        Ka = null;
      }
      mt({
        navigateExternal: undefined
      });
      t();
      V(null);
    };
  }, [e, o]);
  (0, J.useEffect)(() => {
    e.complete();
    let t = performance.now();
    window.__VINEXT_HYDRATED_AT = t;
    window.__NEXT_HYDRATED = true;
    window.__NEXT_HYDRATED_AT = t;
    window.__NEXT_HYDRATED_CB?.();
  }, [e]);
  (0, J.useLayoutEffect)(() => {
    Y.rememberHistoryStateSnapshot(s);
  }, [s]);
  (0, J.useEffect)(() => {
    Be(q.readMetadata(s.elements).sourcePage);
  }, [s.elements]);
  (0, J.useLayoutEffect)(() => {
    let e = m();
    let t = Et(c.current.elements);
    V(t);
    ca();
    if (e === t) {
      return;
    }
    let n = window.setTimeout(() => {
      Ue()?.functions.pingVisibleLinks?.();
    }, 0);
    return () => {
      window.clearTimeout(n);
    };
  }, [s.elements]);
  (0, J.useLayoutEffect)(() => {
    if (s.renderId === 0) {
      Y.writeHydratedHistoryMetadata({
        activeRoutePaths: oe(s.slotBindings),
        bfcacheIds: s.bfcacheIds,
        previousNextUrl: s.previousNextUrl
      });
    }
  }, [s.bfcacheIds, s.previousNextUrl, s.renderId, s.slotBindings]);
  let u = (0, J.createElement)(tt, null, (0, J.createElement)(Fa, {
    renderId: s.renderId
  }, Nr({
    elements: s.elements,
    historyCommit: (0, J.createElement)(Ia, {
      renderId: s.renderId
    }),
    routeId: s.routeId
  })));
  let d = (0, J.useMemo)(() => z({
    elements: s.elements
  }), [s.elements]);
  let f = (0, J.createElement)(At.Provider, {
    value: d
  }, u);
  let p = za ? (0, J.createElement)(za.Provider, {
    value: s.bfcacheIds
  }, f) : f;
  let h = (0, J.createElement)(Do, null, p);
  let g = pe ? (0, J.createElement)(pe.Provider, {
    value: Ae
  }, h) : h;
  let _ = (0, J.createElement)(pt, {
    commitId: s.renderId
  }, g);
  let v = (0, J.createElement)(Dt, {
    fallback: Ya,
    children: _
  });
  let y = ct();
  if (y) {
    return (0, J.createElement)(y.Provider, {
      value: s.navigationSnapshot
    }, v);
  } else {
    return v;
  }
}
function Ao(e, t, n) {
  N({
    pathname: e,
    searchParams: new URLSearchParams(t),
    params: n
  });
}
function jo(e, t, n, r) {
  Ao(e, r ? window.location.search : t, n);
}
function Mo() {
  let e = te();
  if (!e) {
    return null;
  }
  let t = e.searchParams.toString();
  if (t) {
    return `${e.pathname}?${t}`;
  } else {
    return e.pathname;
  }
}
function No(e, t) {
  if (!t) {
    return e;
  }
  let n = e.renderedSearch;
  return Object.defineProperty(e, "renderedSearch", {
    configurable: true,
    enumerable: true,
    get: () => t.renderedSearch ?? n
  });
}
function Po(e, t) {
  let n = t?.shouldContinue ?? (() => true);
  if (!n()) {
    return;
  }
  if (!e || typeof e != `object` || !(`__vinext_scrollY` in e)) {
    if (window.location.hash) {
      re(window.location.hash);
    }
    return;
  }
  let r = Number(e.__vinext_scrollY);
  let i = `__vinext_scrollX` in e ? Number(e.__vinext_scrollX) : 0;
  ee(i, r, {
    minFrames: 1,
    shouldContinue: n
  });
}
function Fo(e) {
  if (!eo()) {
    return false;
  }
  let t = new URL(e, window.location.origin);
  let n = $();
  return Ar(t, ``) === L(n.navigationSnapshot);
}
var Io = false;
var Lo = `__vinext_rsc_initial_reload__`;
function Ro() {
  try {
    return sessionStorage.getItem(Lo);
  } catch {
    return null;
  }
}
function zo(e) {
  try {
    sessionStorage.setItem(Lo, e);
  } catch {}
}
function Bo() {
  try {
    sessionStorage.removeItem(Lo);
  } catch {}
}
function Vo(e) {
  let t = window.location.pathname + window.location.search;
  if (Ro() === t) {
    Bo();
    console.error(`[vinext] Initial RSC fetch ${e} after reload; aborting hydration. Server-rendered HTML remains visible; client components will not hydrate.`);
    return null;
  } else {
    zo(t);
    if (Ro() === t) {
      console.warn(`[vinext] Initial RSC fetch ${e}; reloading once to let the server render the HTML error page`);
      window.location.reload();
      return null;
    } else {
      console.error(`[vinext] Initial RSC fetch ${e}; sessionStorage unavailable so the reload-loop guard cannot persist — aborting hydration. Server-rendered HTML remains visible; client components will not hydrate.`);
      return null;
    }
  }
}
async function Ho() {
  let e = on();
  let t = Ue()?.bootstrap.rsc;
  if (t || e.__VINEXT_RSC_CHUNKS__ || e.__VINEXT_RSC_DONE__) {
    Bo();
    Dr();
    if (t) {
      Uo(t);
      if (t.done) {
        St({
          rsc: undefined
        });
        return cn(t.rsc);
      } else {
        return un();
      }
    } else {
      if (e.__VINEXT_RSC_PARAMS__) {
        ro(e.__VINEXT_RSC_PARAMS__);
      }
      return un();
    }
  }
  let n = Mt();
  let r = await fetch(await Ve(window.location.pathname + window.location.search, n), {
    credentials: `include`,
    headers: n
  });
  if (!r.ok) {
    return Vo(`returned ${r.status}`);
  }
  let i = r.headers.get(`content-type`) ?? ``;
  if (!i.startsWith(`text/x-component`)) {
    return Vo(`returned non-RSC content-type "${i || `(missing)`}"`);
  }
  if (!r.body) {
    return Vo(`returned empty body`);
  }
  Bo();
  Dr();
  Oa(r.headers.get(Fe));
  let a = Ba(r.headers.get(ht));
  let o = a ?? {};
  if (a) {
    try {
      ro(a);
    } catch {}
  }
  let s = Xr(st(r.headers.get(et)), window.location);
  Ao(s.pathname, s.search, o);
  return r.body;
}
function Uo(e) {
  Oa(e.compatibilityId);
  let t = e.params ?? {};
  if (e.params) {
    ro(e.params);
  }
  if (e.nav) {
    jo(e.nav.pathname, e.nav.searchParams, t, e.searchParamsFromBrowser === true);
  }
}
async function Wo() {
  if (!Aa()) {
    return;
  }
  qe();
  yt();
  let e = Ue()?.bootstrap.rsc;
  let t = await Ho();
  if (t !== null) {
    Go(t, null, e);
  }
}
function Go(e, t, n) {
  let r = Di();
  let i = Q;
  let [a, o] = e.tee();
  let s = No(v(window.location.href, Ha, Mo()), n);
  let c = L(s);
  let l = Oo(_a(a)).then(e => {
    It(e, s);
    Ua = {
      pathAndSearch: c,
      routeId: q.readMetadata(e).routeId
    };
    return e;
  });
  let u = s.params;
  let d = new Response(o).arrayBuffer();
  Promise.all([l, d]).then(async ([e, t]) => {
    if (i !== Q) {
      return;
    }
    let a = q.readMetadata(e);
    if (!Sn(a)) {
      return;
    }
    let o = Et(e);
    let s = Mt({
      mountedSlotsHeader: o
    });
    let l = await Ve(c, s);
    if (i !== Q) {
      return;
    }
    let d = {
      compatibilityIdHeader: Ea,
      buffer: t,
      contentType: bt,
      ...(n?.dynamicStaleTimeSeconds === undefined ? {} : {
        dynamicStaleTimeSeconds: n.dynamicStaleTimeSeconds
      }),
      ...(n?.staleTimeSeconds === undefined ? {} : {
        serverStaleTime: {
          kind: `resolved`,
          seconds: n.staleTimeSeconds
        }
      }),
      mountedSlotsHeader: o,
      paramsHeader: encodeURIComponent(JSON.stringify(u)),
      renderedPathAndSearch: null,
      url: l
    };
    let f = n?.initialCacheKind === `static` ? Ye : Qe;
    r.publish(() => i === Q ? xo(l, a.interceptionContext, d, u, f, o, e, false, d, n?.initialCacheKind === `static` || a.interceptionContext !== null, true) : () => {});
  }).catch(() => {});
  Y.writeBootstrapHistoryMetadata();
  let f = wi({
    coerceToError: false
  });
  let p = (...e) => {
    r.fail();
    f(...e);
  };
  let m = Ei(() => {
    r.fail();
  });
  let h = Jr({
    formState: qr(on()),
    onCaughtError: (e => (...t) => {
      r.fail();
      e(...t);
    })(Ti(p)),
    onRecoverableError: m,
    onUncaughtError: p
  });
  let g = (0, J.createElement)(ko, {
    hydrationCachePublication: r,
    initialElements: l,
    initialNavigationSnapshot: s
  });
  let _ = document.querySelectorAll(`style[data-vinext-error-shell-style]`);
  if (document.documentElement.id === `__next_error__`) {
    let {
      formState: e,
      ...t
    } = h;
    for (let e of _) {
      e.remove();
    }
    (0, J.startTransition)(() => {
      let e = (0, la.createRoot)(document, t);
      e.render(g);
      window.__VINEXT_RSC_ROOT__ = e;
    });
  } else {
    window.__VINEXT_RSC_ROOT__ = Yr({
      children: g,
      container: document,
      hydrateRoot: la.hydrateRoot,
      options: h,
      startTransition: J.startTransition
    });
  }
  ja();
  let x = Kr();
  mt({
    clearNavigationCaches: so,
    commitHashNavigation: (e, t, n) => Y.commitHashOnlyNavigation(e, t, n),
    getPrefetchRouterState: () => {
      if (!X.hasBrowserRouterState()) {
        return Ua;
      }
      let e = X.getBrowserRouterState();
      return {
        pathAndSearch: L(e.navigationSnapshot),
        routeId: e.routeId
      };
    },
    navigate: async function (e, t = 0, n = `navigate`, r, i, a = false, o, s, c = `transition`, l) {
      Pa.abortAll();
      let u = x.begin();
      let d = null;
      let f = X.beginNavigation();
      let p = Q;
      Na.markNavigationStart();
      let m = e;
      let h = r;
      let g = i;
      let _ = t;
      let b = false;
      let C = null;
      let ee = e => {
        let t = C;
        if (t === null) {
          return e;
        } else if (e instanceof Promise) {
          return e.then(e => ea(e, t, String(f)));
        } else {
          return ea(e, t, String(f));
        }
      };
      let w = n === `traverse` ? o ?? Y.resolveTraversalIntent(window.history.state) : null;
      let T = false;
      let E = (e, t) => {
        Ce(s ?? null);
        let n = X.performHardNavigation(e, t ?? (h === `push` ? `assign` : `replace`));
        if (n) {
          T = true;
          X.abandonPendingBrowserRouterState(d);
        } else {
          nt(e);
        }
        return n;
      };
      let D = n === `traverse` ? Y.readCurrentBfcacheVersionHistoryIds(w?.historyState ?? window.history.state) : null;
      let O = n !== `traverse` || !Y.isCacheInvalidationGuarded() && Y.isCurrentBfcacheVersion(w?.historyState ?? window.history.state);
      let te = Zt();
      try {
        let r = a;
        if (eo()) {
          if (r) {
            d = no();
          }
        } else {
          await to();
          if (!X.isCurrentNavigation(f)) {
            return;
          }
          if (r) {
            d = no();
          }
        }
        let i = qe();
        if (i !== null) {
          let e = await i;
          if (!X.isCurrentNavigation(f)) {
            return;
          }
          if (!e) {
            E(m);
            return;
          }
        }
        let o = $();
        let x = Et(o.elements);
        let te = n === `navigate` ? mn(o.elements, o.layoutIds) : null;
        while (true) {
          let r = new URL(m, window.location.origin);
          let i = wo(n, r.pathname, g, w?.historyState);
          let k = i.interceptionContext;
          let A = i.previousNextUrl;
          let re = n === `refresh` || n === `traverse` && !O;
          let j = n === `refresh` ? Ur({
            basePath: ``,
            refreshUrl: r,
            requestInterceptionContext: k,
            routeManifest: Ma(),
            state: o
          }) : [];
          let M = re ? Vr({
            activeRoutePaths: n === `traverse` ? y(w?.historyState) ?? [] : undefined,
            basePath: ``,
            refreshUrl: r,
            state: n === `traverse` ? {
              previousNextUrl: A,
              slotBindings: []
            } : o
          }).filter(e => !j.some(t => t.targetPathname === e)) : [];
          let ie = j.length > 0 || M.length > 0;
          if (n === `refresh`) {
            Y.syncCurrentHistoryStatePreviousNextUrl(A, $().bfcacheIds, oe($().slotBindings));
          }
          ae(r.pathname, f);
          let N = n === `navigate` && m === e && _ === t && l !== undefined;
          let P = n === `navigate` && !N ? wt.classifyEarlyNavigationIntent({
            basePath: ``,
            currentUrlSpace: `appRelativeSnapshot`,
            currentHref: So(o.navigationSnapshot),
            mode: `push`,
            scroll: false,
            targetHref: r.href
          }) : null;
          let F = N ? l : P?.kind === `flightNavigation` && P.bypassNavigationCache;
          let se = Mt({
            fetchPriority: `auto`,
            interceptionContext: k,
            mountedSlotsHeader: x,
            routerState: {
              pathAndSearch: L(o.navigationSnapshot),
              routeId: o.routeId
            }
          });
          let I = ft(r);
          let ce = [];
          let le = Oi({
            additionalRscUrls: ce,
            bypassNavigationCache: F,
            interceptionContext: k,
            mountedSlotsHeader: x,
            navigationKind: n,
            targetPathAndSearch: I
          });
          let R = le ? Mi({
            additionalRscUrls: ce,
            origin: window.location.origin,
            responseUrl: le.url,
            visibleRscUrl: I
          }) : await Ve(I, se);
          let ue = le ? ce : await Promise.all(ce.map(e => Ve(e, se)));
          let de = F ? {
            cacheKey: q.encodeCacheKey(R, k),
            entry: null,
            facts: {
              candidate: `missing`,
              navigationKind: n
            }
          } : vo(R, k, x, n);
          let z = yo(de, wt.classifyVisitedResponseCacheCandidate(de.facts));
          let B = z === null ? {
            status: `unavailable`
          } : {
            status: `available`
          };
          let fe = wt.classifyNavigationPrefetchProbe({
            bypassNavigationCache: F,
            navigationKind: n,
            visitedResponse: B
          });
          let V = n === `navigate` ? Ma() : null;
          let pe = le !== null || fe.kind === `probe` && ge(R, k, x, {
            additionalRscUrls: ue,
            notifyInvalidation: false
          });
          let me = wt.classifyNavigationReuse({
            bypassNavigationCache: F,
            navigationKind: n,
            optimisticRouteShell: V === null ? {
              reason: `routeManifestMissing`,
              status: `unavailable`
            } : {
              status: `available`
            },
            prefetch: pe ? {
              status: `available`
            } : {
              status: `unavailable`
            },
            targetHref: m,
            visitedResponse: B
          });
          if (me.kind === `reuseVisitedResponse` && z) {
            let e = wt.classifyRscFetchResult({
              clientCompatibilityId: Ea,
              compatibilityIdHeader: z.response.compatibilityIdHeader ?? null,
              currentHref: m,
              effectiveHistoryUpdateMode: h ?? `replace`,
              hasBody: true,
              isRscContentType: true,
              origin: window.location.origin,
              redirectDepth: _,
              requestPreviousNextUrl: A,
              responseOk: true,
              responseUrl: z.response.url,
              source: `cached`,
              streamedRedirectTarget: null
            });
            if (e.kind === `hardNavigate`) {
              if (e.reason === `redirectDepthExhausted`) {
                console.error(`[vinext] Too many RSC redirects — aborting navigation to prevent infinite loop.`);
              }
              E(e.url);
              return;
            }
            if (e.kind === `followRedirect`) {
              if (n === `traverse`) {
                D = null;
              }
              m = e.redirect.href;
              h = e.redirect.historyUpdateMode;
              g = e.redirect.previousNextUrl;
              _ = e.redirect.redirectDepth;
              continue;
            }
            if (!X.isCurrentNavigation(f)) {
              return;
            }
            let t = z.params;
            let r = v(m, t, z.response.renderedPathAndSearch);
            let i = z.elements ? Promise.resolve(z.elements) : Oo(va(Promise.resolve(S(z.response))));
            if (!X.isCurrentNavigation(f)) {
              return;
            }
            let a = await go({
              actionType: Sa(n),
              historyUpdateMode: h,
              navigationCommitKind: b ? `authoritative` : undefined,
              navigationInitiationState: o,
              navigationSnapshot: r,
              navId: f,
              operationLane: Ca(n),
              params: t,
              payload: ee(i),
              payloadOrigin: z.elements ? vn : bn,
              pendingRouterState: b ? null : d,
              previousNextUrl: A,
              restoredBfcacheIds: D,
              reuseCurrentBfcacheIds: O,
              scrollIntent: s,
              targetHref: m,
              traversalIntent: w,
              visibleCommitMode: c
            });
            if (a === `hard-navigate`) {
              T = true;
              X.abandonPendingBrowserRouterState(d);
            }
            if (a === `no-commit`) {
              if (!X.isCurrentNavigation(f)) {
                return;
              }
              bo(R, k);
              continue;
            }
            return;
          }
          let H;
          let he;
          let U = null;
          let _e;
          let W;
          let ve = me;
          if (me.kind === `consumePrefetch`) {
            let e = le ? zt(I, k, x, {
              additionalRscUrls: ce
            }) : await Jt(R, k, x, {
              additionalRscUrls: ue,
              shouldConsume: () => X.isCurrentNavigation(f)
            });
            if (!X.isCurrentNavigation(f)) {
              return;
            }
            if (e) {
              H = S(e, false);
              U = Mi({
                additionalRscUrls: ue,
                origin: window.location.origin,
                responseUrl: e.url,
                visibleRscUrl: R
              });
              let t = Ni(e, U);
              _e = t.snapshot;
              W = t.preparedElements;
              he = t.expiresAt;
            }
            if (!H) {
              V = n === `navigate` ? Ma() : null;
              ve = wt.classifyNavigationReuse({
                bypassNavigationCache: F,
                navigationKind: n,
                optimisticRouteShell: V === null ? {
                  reason: `routeManifestMissing`,
                  status: `unavailable`
                } : {
                  status: `available`
                },
                prefetch: {
                  status: `unavailable`
                },
                targetHref: m,
                visitedResponse: {
                  status: `unavailable`
                }
              });
            }
          }
          if (!H && ve.kind === `attemptOptimisticRouteShell`) {
            await mo({
              interceptionContext: k,
              mountedSlotsHeader: x,
              routeManifest: V
            });
            if (!X.isCurrentNavigation(f)) {
              return;
            }
            if (V !== null) {
              let e = na({
                basePath: ``,
                href: m,
                interceptionContext: k,
                mountedSlotsHeader: x,
                routeManifest: V,
                templates: ka.templates
              });
              if (e !== null && ta({
                currentElements: o.elements,
                currentLayoutIds: o.layoutIds,
                currentParams: o.navigationSnapshot.params,
                isBfcacheIdentityRetained: He,
                routeManifest: V,
                shownElements: $().elements,
                targetElements: e.elements,
                targetRouteParams: e.routeParams,
                targetUrlParts: e.urlParts,
                template: e.template
              })) {
                b = true;
                C = e.elements;
                let t = v(m, e.params);
                go({
                  actionType: Sa(n),
                  historyUpdateMode: h,
                  navigationCommitKind: `detached`,
                  navigationInitiationState: o,
                  navigationSnapshot: t,
                  navId: f,
                  operationLane: Ca(n),
                  params: e.params,
                  payload: Promise.resolve(e.elements),
                  payloadOrigin: yn,
                  pendingRouterState: null,
                  previousNextUrl: A,
                  restoredBfcacheIds: D,
                  reuseCurrentBfcacheIds: O,
                  scrollIntent: s,
                  targetHref: m,
                  traversalIntent: w,
                  visibleCommitMode: c
                }).catch(e => {
                  if (X.isCurrentNavigation(f)) {
                    console.error(`[vinext] Optimistic RSC navigation error:`, e);
                  }
                });
              }
            }
          }
          let ye = false;
          if (!H) {
            let e = se;
            if (te !== null && k === null) {
              e = new Headers(se);
              e.set(Ct, te);
              ye = true;
            }
            H = await fetch(R, {
              headers: e,
              credentials: `include`,
              priority: `auto`,
              signal: u.signal
            });
          }
          if (!X.isCurrentNavigation(f)) {
            return;
          }
          let be = (H.headers.get(`content-type`) ?? ``).startsWith(`text/x-component`) || Ta;
          let xe = U ?? H.url;
          let Se = H.headers.get(Ze);
          let Ce = H.headers.get(Me);
          let we = Ce === `push` || Ce === `replace` ? Ce : null;
          if (Ft(H, Se)) {
            return;
          }
          let G = wt.classifyRscFetchResult({
            clientCompatibilityId: Ea,
            compatibilityIdHeader: H.headers.get(Fe),
            currentHref: m,
            effectiveHistoryUpdateMode: h ?? `replace`,
            hasBody: H.body !== null,
            isRscContentType: be,
            origin: window.location.origin,
            redirectDepth: _,
            requestPreviousNextUrl: A,
            responseOk: H.ok,
            responseUrl: xe,
            source: `live`,
            streamedRedirectTarget: Se,
            streamedRedirectType: we
          });
          if (G.kind === `hardNavigate`) {
            if (G.discardBody) {
              H.body?.cancel().catch(() => {});
            }
            if (G.reason === `redirectDepthExhausted`) {
              console.error(`[vinext] Too many RSC redirects — aborting navigation to prevent infinite loop.`);
            }
            if (G.reason === `streamedRedirectLoop`) {
              console.error(`[vinext] RSC streamed redirect resolved to the current URL — aborting navigation to prevent infinite loop.`);
            }
            E(G.url, G.hardNavigationMode);
            return;
          }
          if (G.kind === `followRedirect`) {
            if (G.discardBody) {
              H.body?.cancel().catch(() => {});
            }
            if (n === `traverse`) {
              D = null;
            }
            m = G.redirect.href;
            h = G.redirect.historyUpdateMode;
            g = G.redirect.previousNextUrl;
            _ = G.redirect.redirectDepth;
            continue;
          }
          if (!ie) {
            u.release();
          }
          let K = Ba(H.headers.get(`X-Vinext-Params`)) ?? {};
          let Te = v(m, K, st(H.headers.get(et)));
          let Ee = H.body;
          if (!Ee) {
            return;
          }
          let [De, Oe] = Ee.tee();
          let ke = kt(new Response(De, {
            status: H.status,
            headers: H.headers
          }));
          let Ae = new Response(Oe).arrayBuffer();
          Ae.catch(() => {});
          if (!X.isCurrentNavigation(f)) {
            return;
          }
          if (W) {
            ke.body?.cancel().catch(() => {});
          }
          let je = W || Oo(va(Promise.resolve(ke)));
          if (ie) {
            let e = j.map(e => t => co({
              interceptionContext: e.interceptionContext,
              interceptionId: e.interception.id,
              mountedSlotsHeader: x,
              signal: t,
              targetPathname: e.targetPathname
            }));
            for (let t of M) {
              e.push(e => lo({
                mountedSlotsHeader: x,
                signal: e,
                targetPathname: t
              }));
            }
            je = Gr({
              merge: Rr,
              primary: Promise.resolve(je),
              signal: u.signal,
              supplemental: e
            }).finally(() => {
              u.release();
            }).then(Lr);
          }
          if (ye) {
            let e = await je;
            if (!X.isCurrentNavigation(f)) {
              return;
            }
            if (!hn(o, e) || !hn($(), e)) {
              te = null;
              continue;
            }
            je = Promise.resolve(e);
          }
          if (!X.isCurrentNavigation(f)) {
            return;
          }
          let Ne = null;
          let Pe = await go({
            actionType: Sa(n),
            historyUpdateMode: h,
            navigationCommitKind: b ? `authoritative` : undefined,
            navigationInitiationState: o,
            navigationSnapshot: Te,
            navigationResponseCompletion: Pr({
              basePath: ``,
              currentSnapshot: o.navigationSnapshot,
              navigationKind: n,
              programmaticTransition: a,
              targetUrl: r
            }) ? Ae : undefined,
            navId: f,
            onCommittedState: e => {
              Ne = e;
              u.release();
            },
            operationLane: Ca(n),
            params: K,
            payload: ee(je),
            payloadOrigin: yn,
            pendingRouterState: b ? null : d,
            previousNextUrl: A,
            restoredBfcacheIds: D,
            reuseCurrentBfcacheIds: O,
            scrollIntent: s,
            targetHref: m,
            traversalIntent: w,
            visibleCommitMode: c
          });
          if (Pe === `hard-navigate`) {
            T = true;
            X.abandonPendingBrowserRouterState(d);
          }
          if (Pe !== `committed`) {
            return;
          }
          if (ie) {
            ao();
            return;
          }
          Ne ??= $();
          try {
            let e = await je;
            if (p !== Q) {
              return;
            }
            let t = q.readMetadata(e);
            if (p !== Q) {
              return;
            }
            let n = _e ?? Ie(H, await Ae, xe);
            let r = n.completedDynamicStaleTimeSeconds === undefined && Cn(t);
            let {
              completedDynamicStaleTimeSeconds: i,
              dynamicStaleTimeSeconds: a,
              ...o
            } = n;
            let s = {
              ...(r ? o : {
                ...n,
                ...(n.dynamicStaleTimeSeconds === undefined && t.dynamicStaleTimeSeconds !== undefined ? {
                  dynamicStaleTimeSeconds: t.dynamicStaleTimeSeconds
                } : {})
              }),
              mountedSlotsHeader: Et(e)
            };
            let c = Pi(s, he);
            let l = ne(k, t.interceptionContext);
            if (r) {
              if (p !== Q) {
                return;
              }
              xo(R, l, s, K, Ye, x, undefined, true, c, true);
            } else {
              let e = Ne;
              let n = {
                ...e.elements,
                [q.keys.layoutIds]: e.layoutIds,
                [q.keys.skippedLayoutIds]: [],
                [q.keys.slotBindings]: e.slotBindings
              };
              if (p !== Q) {
                return;
              }
              xo(R, l, s, K, Qe, x, n, Sn(t), c, l !== null || ii(s));
            }
          } catch {}
          return;
        }
      } catch (e) {
        if (!X.isCurrentNavigation(f)) {
          return;
        }
        if (!Io) {
          console.error(`[vinext] RSC navigation error:`, e);
        }
        E(wt.classifyRscNavigationError({
          currentHref: m
        }).url);
      } finally {
        u.release();
        X.finalizeNavigation(f, d);
        Na.markNavigationSettled();
        te();
        if (T) {
          await Ja();
        }
      }
    },
    readVisitedResponseForFullPrefetch: (e, t, n) => fi(Z, e, t, n),
    preparePrefetchResponse: e => Da(e.headers.get(`X-Vinext-RSC-Compatibility-Id`)) ? Oo(va(Promise.resolve(e))) : Promise.reject(Error(`[vinext] Prefetched another deployment's payload`)),
    claimCurrentHistoryTreeSnapshot: (e, t) => Y.claimCurrentHistoryTreeSnapshot(e, t),
    commitAppOwnedHistoryStateWrite: (e, t) => Y.commitAppOwnedHistoryStateWrite(e, t),
    discardPendingNavigation: () => {
      if (X.discardPendingNavigation(Y.readCurrentTreeSnapshot())) {
        x.abortActive();
      }
    },
    flushCommittingNavigationUrl: () => {
      Qa();
      X.flushCommittingNavigationUrl();
    }
  });
  let C = vi({
    getActiveNavigationId: X.getActiveNavigationId.bind(X),
    getPendingNavigation: () => window.__VINEXT_RSC_PENDING__,
    getNavigate: () => Ue()?.functions.navigate,
    isCurrentNavigation: X.isCurrentNavigation.bind(X),
    notifyAppRouterTransitionStart: e => {
      j(e, `traverse`);
    },
    restorePopstateScrollPosition: Po,
    setPendingNavigation: e => {
      window.__VINEXT_RSC_PENDING__ = e;
    },
    shouldSkipScrollRestore: e => Xa === e
  });
  window.addEventListener(`popstate`, e => {
    let t = window.location.href;
    let n = W(e.state);
    if (_i({
      historyState: e.state,
      isCurrentExternalHistoryTree: Y.isCurrentExternalHistoryTree(e.state),
      isSameAppRouteTarget: Fo(t)
    })) {
      j(t, `traverse`);
      Y.commitTraversalIndexFromHistoryState(e.state);
      b();
      Po(e.state);
      return;
    }
    let r = X.beginNavigation();
    if ($a(e.state, r, () => {
      x.abortActive();
      j(t, `traverse`);
    }, n)) {
      window.__VINEXT_RSC_PENDING__ = null;
      mi({
        getActiveNavigationId: () => X.getActiveNavigationId(),
        isCurrentNavigation: e => X.isCurrentNavigation(e),
        markScrollRestoreConsumed: e => {
          Xa = e;
        },
        restorePopstateScrollPosition: Po
      }, e.state);
      X.finalizeNavigation(r, null);
    } else {
      X.finalizeNavigation(r, null);
      C(e);
    }
  });
}
if (typeof document < `u`) {
  jt({
    appDir: true,
    router: Ae
  });
  window.addEventListener(`pagehide`, () => {
    Io = true;
  });
  window.addEventListener(`pageshow`, e => {
    Io = false;
    if (e.persisted) {
      Wa.reset();
      Ka?.restore();
      qa?.resolve();
      qa = null;
    }
  });
  Wo();
}
window.__VINEXT_LINK_PREFETCH_ROUTES__ = [{
  canPrefetchLoadingShell: false,
  patternParts: [],
  isDynamic: false
}, {
  canPrefetchLoadingShell: false,
  patternParts: [`old`],
  isDynamic: false
}];
window.__VINEXT_APP_ROUTE_HANDLERS__ = [];
window.__VINEXT_PAGES_LINK_PREFETCH_ROUTES__ = [];
window.__VINEXT_CLIENT_REWRITES__ = {
  beforeFiles: [],
  afterFiles: [],
  fallback: []
};
window.__VINEXT_LOCALES__ = [];