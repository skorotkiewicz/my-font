import { r as e } from "./CcyWYbDU.js";
import { i as t } from "./B0PXqnjO.js";
import { B as n, R as r, z as i } from "./BcpSTgJi.js";
var a = e(t(), 1);
var o = {
  otf: {
    label: `Download OTF`,
    use: `Install it, or reopen it here to edit`
  },
  woff2: {
    label: `Download WOFF2`,
    use: `Use it on a website`
  }
};
var s = e => `${Math.max(1, Math.round(e / 1024))} KB`;
function c(e, t) {
  let n = URL.createObjectURL(e);
  Object.assign(document.createElement(`a`), {
    href: n,
    download: t
  }).click();
  setTimeout(() => URL.revokeObjectURL(n), 10000);
}
var l = (e, t, n) => c(new Blob([e], {
  type: `font/${n}`
}), t);
function u(e, t) {
  let [n, r] = (0, a.useState)();
  let i = (0, a.useEffectEvent)(t);
  (0, a.useEffect)(() => {
    if (!e) {
      return;
    }
    let t = true;
    i(e).then(({
      buffer: n
    }) => t && r({
      from: e,
      buffer: n
    }));
    return () => {
      t = false;
    };
  }, [e]);
  return {
    buffer: n?.buffer,
    fresh: n !== undefined && n.from === e
  };
}
var d = ({
  buffer: e,
  fresh: t
}) => t ? e : undefined;
var f = (e, t) => d(u(e, e => n(e, t)));
var p = e => d(u(e, i));
function m(e, t, a) {
  let o = a?.of === e ? a.otf : undefined;
  let s = u(o, t => n(t, e));
  let c = u(o, i);
  return {
    otf: s.buffer,
    woff2: c.buffer,
    get: async a => {
      let o = d(a === `otf` ? s : c);
      if (o) {
        return o;
      }
      let l = await r(e, t);
      return (await (a === `otf` ? n(l.buffer, e) : i(l.buffer))).buffer;
    }
  };
}
export { m as a, c as i, s as n, f as o, l as r, p as s, o as t };
