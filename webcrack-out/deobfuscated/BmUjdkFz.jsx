import { r as e } from "./CcyWYbDU.js";
import { Fn as t, n } from "./ds95237R.js";
import { i as r } from "./B0PXqnjO.js";
var i = e(r(), 1);
var a = new Map();
function o(e, t) {
  if (e) {
    return {
      ...e,
      ...t
    };
  } else {
    return t;
  }
}
function s({
  providerId: e,
  segmentMap: n,
  children: r
}) {
  let s = (0, i.useRef)(null);
  let c = t();
  let l = o(s.current ?? (e ? a.get(e) ?? null : null), n);
  (0, i.useEffect)(() => {
    s.current = l;
    if (e) {
      a.set(e, l);
    }
  }, [l, e]);
  if (c) {
    return (0, i.createElement)(c.Provider, {
      value: l
    }, r);
  } else {
    return r;
  }
}
n(`34cdd132acf4`, {
  get LayoutSegmentProvider() {
    return s;
  }
});