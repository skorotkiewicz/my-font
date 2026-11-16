import { r as e } from "./CcyWYbDU.js";
import { n as t } from "./ds95237R.js";
import { $ as n, C as _Component4, D as _Component2, E as _Component7, H as o, J as s, K as c, M as _Component26, N as u, O as _Component0, Q as ee, S as f, T as _Component3, X as m, Y as h, _ as _Component6, a as te, at as _, b as _Component25, c as _Component1, dt as _Component19, et as x, f as S, ft as _Component12, g as C, gt as _Component5, h as T, i as _Component13, l as E, m as D, mt as O, n as _Component17, nt as A, o as ie, p as _Component8, pt as _Component, q as se, rt as j, s as _Component11, st as _Component16, t as ue, tt as de, v as fe, vt as M, w as N, x as P, y as F } from "./BcpSTgJi.js";
import { i as I, r as L } from "./B0PXqnjO.js";
import { a as R, i as _Component9, n as B, t as V } from "./rX6k7kUM.js";
var H = L();
function _Component24() {
  let {
    actions: e
  } = u();
  let t = M(e.openFont);
  const Component = `span`;
  const Component2 = `span`;
  const Component3 = `span`;
  const Component4 = `span`;
  const Component5 = `span`;
  const Component6 = `p`;
  const Component7 = `div`;
  const Component8 = `div`;
  return <Component8 aria-hidden={!t} className={`pointer-events-none fixed inset-0 z-50 flex bg-carbon/80 p-4 backdrop-blur-[6px] transition-[opacity,visibility] duration-150 ease-out ${t ? `visible opacity-100` : `invisible opacity-0`}`}><Component7 className={`flex flex-1 flex-col items-center justify-center gap-4.5 rounded-[1.75rem] border-2 border-dashed border-paper/70 bg-paper/6 px-6 text-center`}><Component className={`flex size-16 items-center justify-center rounded-full bg-paper text-carbon`}><O className={`size-7.5`} /></Component><Component6 className={`flex flex-col items-center gap-2`}><Component2 className={`text-[2rem] leading-9.5 font-semibold tracking-[-0.01em] text-balance`}>{`Drop to open your font`}</Component2><Component5 className={`text-base leading-6 text-pretty text-paper/90`}>{`Fonts made with Ductus only. It’s checked on this`}{` `}<Component3 className={`hidden pointer-fine:inline`}>{`computer`}</Component3><Component4 className={`pointer-fine:hidden`}>{`device`}</Component4>{`, never uploaded.`}</Component5></Component6></Component7></Component8>;
}
function U({
  name: e,
  about: t,
  tile: n
}) {
  const Component9 = `span`;
  const Component10 = `span`;
  const Component11 = `span`;
  const Component12 = `span`;
  const Component13 = `div`;
  return <Component13 className={`flex items-center gap-3 px-4 py-3`}><Component9 className={`flex size-10 shrink-0 items-center justify-center rounded-[0.625rem] ${n}`}><_Component className={`size-5.5`} /></Component9><Component12 className={`flex min-w-0 flex-1 flex-col gap-px`}><Component10 className={`cursor-text text-[0.9375rem] leading-5 font-medium wrap-anywhere select-text`}>{e}</Component10><Component11 className={`text-caption text-paper/90`}>{t}</Component11></Component12></Component13>;
}
function _Component23() {
  let {
    state: e,
    actions: t
  } = u();
  let n = e.opening?.kind === `refused` ? e.opening : undefined;
  let a = F[n?.reason ?? `not-ductus`];
  let s = o(e.project.name, `otf`);
  let c = {
    name: n?.fileName ?? ``,
    size: n?.size ?? 0,
    expected: s
  };
  const Component14 = `div`;
  const Component15 = `div`;
  const Component16 = `div`;
  const Component17 = `p`;
  return <N open={e.sheet === `refused`} onClose={t.closeSheet} title={a.title} message={a.message(c)}><Component16 className={`px-5 pt-4.5 lg:px-7`}><Component15 className={`flex flex-col rounded-2xl bg-paper/8`}><U name={c.name} about={a.about(c)} tile={`bg-paper/14`} />{a.showExpected && <H.Fragment><Component14 aria-hidden={true} className={`ms-17 h-px bg-paper/14`} /><U name={s} about={`What yours is called, from Export`} tile={`bg-paper text-carbon`} /></H.Fragment>}</Component15></Component16><_Component4>{n?.reason === `newer` ? <_Component2 onClick={() => location.reload()}>{a.action}</_Component2> : <_Component2 onClick={t.chooseFont}><O className={`size-5.5 shrink-0 lg:size-5`} />{a.action}</_Component2>}<_Component3>{`Close`}</_Component3></_Component4><Component17 className={`flex items-center justify-center gap-1.5 px-5 pt-4 text-caption text-paper/90`}><_Component5 className={`size-4`} />{`Checked on this device. Nothing was uploaded.`}</Component17></N>;
}
function W({
  name: e,
  badge: t,
  project: n,
  when: r
}) {
  const Component18 = `span`;
  const Component19 = `div`;
  const Component20 = `span`;
  const Component21 = `div`;
  const Component22 = `span`;
  const Component23 = `div`;
  return <Component23 className={`flex flex-col gap-2 rounded-2xl bg-paper/8 px-4 pt-3.5 pb-3`}><Component21 className={`flex items-center justify-between gap-3`}><Component19 className={`flex min-w-0 items-center gap-2`}><Component18 className={`min-w-0 text-[0.9375rem] leading-5 font-medium wrap-anywhere`}>{e}</Component18>{t}</Component19><Component20 className={`shrink-0 text-caption text-paper/90 tabular-nums`}>{C(h(n).length)}</Component20></Component21><_Component6 project={n} label={`Handwriting sample from ${e}`} /><Component22 className={`text-caption text-paper/90`}>{r}</Component22></Component23>;
}
function _Component22() {
  let {
    state: e,
    actions: t
  } = u();
  let n = e.opening?.kind === `replace` ? e.opening : undefined;
  let i = C(n ? h(n.device).length : 0);
  let o = n ? n.device.updatedAt > n.exportedAt : false;
  const Component24 = `button`;
  const Component25 = `span`;
  const Component26 = `div`;
  return <N open={e.sheet === `replace`} onClose={t.closeSheet} title={`Replace your ${i}?`} message={<H.Fragment>{`This replaces what’s on this device and can’t be undone.`}{` `}<Component24 type={`button`} onClick={() => t.openSheet(`export`)} className={`rounded-sm font-semibold text-paper underline underline-offset-2 hover:decoration-2`}>{`Export yours first`}</Component24>{` `}{`to keep a copy.`}</H.Fragment>}>{n && <Component26 className={`flex flex-col gap-2 px-5 pt-4.5 lg:px-7`}><W name={n.fileName} project={n.project} when={`Made ${T(n.exportedAt)}`} /><W name={`On this device`} project={n.device} badge={o && <Component25 className={`shrink-0 rounded-md bg-canary px-1.75 py-0.5 text-tag font-semibold text-ink`}>{`Newer`}</Component25>} when={`${D(`edited ${T(n.device.updatedAt)}`)}${o ? `, after the file was made` : ``}`} /></Component26>}<_Component4><_Component7 onClick={t.replace}>{`Replace `}{i}</_Component7><_Component3>{`Keep my letters`}</_Component3></_Component4></N>;
}
var G = e => (e - S.minScale) / (S.maxScale - S.minScale);
var K = 24;
var ge = 0.02;
function _e() {
  let {
    state: e,
    actions: t
  } = u();
  let {
    project: n,
    alignment: r,
    picked: i
  } = e;
  let a = x.flatMap(e => {
    let t = n.glyphs[e]?.drawings[0];
    let i = t && c(e, t);
    let a = r.place.get(e);
    if (t && i && a) {
      return [{
        cp: e,
        strokes: t.strokes,
        ink: i,
        place: a,
        fix: t.fix
      }];
    } else {
      return [];
    }
  });
  let o = a.find(e => e.cp === i) ?? a[0];
  if (!o) {
    const Component27 = `p`;
    return <Component27 className={`px-5 pb-2 text-[0.9375rem] leading-5 text-pretty text-paper/90 lg:px-6`}>{`Write a letter first. Your letters line up here, ready to adjust.`}</Component27>;
  }
  let {
    fix: l
  } = o;
  let d = A(o.cp);
  const Component28 = `span`;
  const Component29 = `p`;
  const Component30 = `span`;
  const Component31 = `span`;
  const Component32 = `input`;
  const Component33 = `span`;
  const Component34 = `output`;
  const Component35 = `label`;
  const Component36 = `div`;
  const Component37 = `div`;
  return <Component37 className={`flex flex-col gap-3.5 px-5 pt-1.5 pb-4 lg:px-6`}><_Component8 letters={a} xHeight={r.lines.xHeight} picked={o.cp} onPick={t.pick} onFix={t.setFix} /><Component29 className={`text-caption text-pretty text-paper/90`}>{`Drag `}<Component28 className={`font-bold text-paper`}>{d}</Component28>{` up or down. Tap another letter to adjust it instead.`}</Component29><Component35 className={`flex items-center gap-3.5`}><Component30 className={`w-8.5 shrink-0 text-[0.9375rem] font-medium`}>{`Size`}</Component30><Component33 className={`relative flex min-w-0 flex-1`}><Component31 aria-hidden={true} className={`absolute top-1/2 h-3 w-0.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-paper/60`} style={{
          left: `calc(${K / 2}px + (100% - ${K}px) * ${G(1).toFixed(4)})`
        }} /><Component32 type={`range`} min={S.minScale} max={S.maxScale} step={0.01} value={l.scale} onChange={e => {
          let n = Number(e.target.value);
          t.setFix(o.cp, {
            ...l,
            scale: Math.abs(n - 1) < ge ? 1 : n
          });
        }} className={`range relative min-w-0 flex-1`} style={{
          "--fill": `${G(l.scale) * 100}%`
        }} /></Component33><Component34 className={`w-11 shrink-0 text-right text-caption text-paper/90 tabular-nums`}>{Math.round(l.scale * 100)}{`%`}</Component34></Component35><Component36 className={`grid grid-cols-2 gap-2`}><_Component9 onClick={() => t.setFix(o.cp, s)} disabled={l.dy === 0 && l.scale === 1} className={`justify-center`}>{`Reset `}{d}</_Component9><_Component9 onClick={() => {
        t.go(o.cp, `jump`);
        t.closeSheet();
      }} className={`justify-center`}>{`Redraw `}{d}</_Component9></Component36></Component37>;
}
function _Component21() {
  let {
    state: e,
    actions: t
  } = u();
  const Component38 = `span`;
  const Component39 = `span`;
  const Component40 = `span`;
  const Component41 = `input`;
  const Component42 = `label`;
  return <_Component0 open={e.sheet === `adjust`} onClose={t.closeSheet} title={`Adjust letters`} anchor={`[data-anchor="actions"]`}><_e /><Component42 className={`flex min-h-11 items-center gap-4 px-5 pt-2 lg:px-6`}><Component40 className={`flex flex-1 flex-col gap-0.5`}><Component38 className={`text-[0.9375rem] leading-5 font-semibold`}>{`Line up letters for me`}</Component38><Component39 className={`text-caption text-pretty text-paper/90`}>{`Evens out baseline and size. Off keeps every letter exactly as drawn.`}</Component39></Component40><Component41 type={`checkbox`} role={`switch`} checked={e.project.settings.tidy} onChange={e => t.setTidy(e.target.checked)} className={`switch shrink-0`} /></Component42></_Component0>;
}
function ye({
  cp: e,
  drawn: t,
  current: n,
  tabIndex: r,
  onSelect: i,
  className: a
}) {
  let o = n ? `bg-paper [--color-hand:var(--color-carbon)] [--color-placeholder:var(--color-carbon)]` : t ? `bg-paper/14 hover:bg-paper/20` : `inset-ring-[1.5px] inset-ring-paper/35 hover:bg-paper/8`;
  const Component43 = `button`;
  return <Component43 type={`button`} data-cp={e} tabIndex={r} onClick={() => i(e)} aria-current={n ? `true` : undefined} aria-label={`${j(e)}${t ? `, written` : ``}`} className={`pressable flex aspect-square items-center justify-center leading-none ${o} ${a}`}><_Component1 text={A(e)} shrink={0.72} /></Component43>;
}
function _Component10({
  written: e,
  total: t
}) {
  const Component44 = `span`;
  return <Component44 className={`flex shrink-0 items-center gap-1.5 text-caption text-paper/90 tabular-nums`}>{e === t ? <_ className={`size-4.5 shrink-0 text-paper`} /> : null}{e}{` of `}{t}</Component44>;
}
function _Component20() {
  let {
    state: e,
    actions: t
  } = u();
  let n = e => {
    t.go(e, `jump`);
    t.closeSheet();
  };
  const Component45 = `h3`;
  const Component46 = `div`;
  const Component47 = `section`;
  const Component48 = `div`;
  return <_Component0 open={e.sheet === `glyphs`} onClose={t.closeSheet} title={`All glyphs`} initialFocus={`[aria-current="true"]`} anchor={`[data-anchor="picker"]`}><Component48 className={`flex flex-col gap-7 px-5 pt-1.5 lg:px-6`}>{de.map(t => <Component47 aria-labelledby={`set-${t.id}`} className={`flex flex-col gap-2.5`} key={t.id}><Component46 className={`flex items-baseline justify-between`}><Component45 id={`set-${t.id}`} className={`text-[0.9375rem] leading-5 font-semibold`}>{t.label}</Component45><_Component10 written={t.codepoints.filter(t => e.drawn.has(t)).length} total={t.codepoints.length} /></Component46><_Component11 set={t} onSelect={n} Tile={ye} className={`grid grid-cols-[repeat(auto-fill,minmax(3.125rem,1fr))] gap-2.5 lg:gap-2`} tileClassName={`rounded-xl text-[2.5rem]`} /></Component47>)}</Component48></_Component0>;
}
const Component49 = `span`;
const Component50 = `span`;
const Component51 = `span`;
var q = <H.Fragment><Component49 className={`md:hidden pointer-fine:hidden`}>{`phone`}</Component49><Component50 className={`hidden md:pointer-coarse:inline`}>{`device`}</Component50><Component51 className={`hidden pointer-fine:inline`}>{`computer`}</Component51></H.Fragment>;
const Component52 = `circle`;
const Component53 = `path`;
const Component54 = `svg`;
const Component55 = `span`;
var Se = {
  loading: {
    icon: <Component55 className={`size-4 shrink-0 motion-safe:animate-spin`}><Component54 viewBox={`0 0 20 20`} aria-hidden={true} className={`block size-4`} fill={`none`} strokeWidth={2.5}><Component52 cx={`10`} cy={`10`} r={`8.5`} className={`stroke-paper/30`} /><Component53 d={`M10 1.5A8.5 8.5 0 0 1 18.5 10`} strokeLinecap={`round`} className={`stroke-paper`} /></Component54></Component55>,
    text: `Finding your letters`
  },
  fresh: {
    icon: <_Component5 className={`size-4 shrink-0`} />,
    text: <H.Fragment>{`Your letters stay on this `}{q}</H.Fragment>
  },
  saved: {
    icon: <_ className={`icon-in size-4 shrink-0`} />,
    text: <H.Fragment>{`Saved on this `}{q}</H.Fragment>
  }
};
function J({
  className: e = ``
}) {
  let {
    state: t
  } = u();
  let {
    status: n,
    drawn: r
  } = t;
  if (n === `unsaved`) {
    const Component56 = `p`;
    return <Component56 role={`status`} className={`h-8 items-center gap-1.5 rounded-full bg-paper pr-3.5 pl-2.5 text-caption font-medium text-ink ${e}`}><_Component12 className={`icon-in size-4.5 shrink-0 text-danger`} />{`Not saved. Export to keep your letters.`}</Component56>;
  }
  let {
    icon: i,
    text: a
  } = Se[n === `loading` ? `loading` : r.size ? `saved` : `fresh`];
  const Component57 = `span`;
  const Component58 = `p`;
  return <Component58 role={`status`} className={`h-8 items-center gap-1.5 text-caption font-medium text-paper/90 ${e}`}>{i}<Component57>{a}</Component57></Component58>;
}
function Ce() {
  let {
    state: e,
    actions: t
  } = u();
  let n = e.status !== `loading` && e.drawn.size === 0;
  const Component59 = `span`;
  const Component60 = `div`;
  const Component61 = `div`;
  const Component62 = `header`;
  return <Component62 className={`flex shrink-0 items-center justify-between gap-3 px-5 pt-[calc(env(safe-area-inset-top)+0.5rem)] compact:px-4 lg:gap-6 lg:px-20 lg:pt-8`}><_Component13 className={`lg:text-4xl`} /><Component61 className={`flex min-w-0 items-center gap-5`}><J className={`hidden min-w-0 lg:flex short-landscape:flex`} /><Component60 data-anchor={`actions`} className={`flex shrink-0 gap-2`}>{n ? <Component59 className={`hidden lg:block`}><_Component9 onClick={t.chooseFont} aria-label={`Open a font you made with Ductus`} className={`pl-3.5`}><O className={`size-5 shrink-0`} />{`Open a font…`}</_Component9></Component59> : null}<_Component9 aria-haspopup={`dialog`} onClick={() => t.openSheet(`adjust`)} className={`lg:px-4.5`}>{`Adjust`}</_Component9><_Component9 aria-haspopup={`dialog`} onClick={() => t.openSheet(`export`)} onPointerEnter={f} onFocus={f} className={`lg:px-4.5`}>{`Export`}</_Component9></Component60></Component61></Component62>;
}
function _Component14() {
  let {
    actions: e
  } = u();
  const Component63 = `p`;
  const Component64 = `div`;
  return <Component64 className={`flex w-full shrink-0 items-center justify-between gap-3 pt-3 short:hidden lg:hidden`}><Component63 className={`min-w-0 truncate text-[0.9375rem] leading-5 text-paper/90`}>{`Made a font here before?`}</Component63><_Component9 onClick={e.chooseFont} aria-label={`Open a font you made with Ductus`} className={`pl-3.5`}><O className={`size-5.5 shrink-0`} />{`Open a font…`}</_Component9></Component64>;
}
function Te() {
  let {
    state: e
  } = u();
  let {
    cp: t,
    drawn: n,
    status: r
  } = e;
  let [i, ...a] = te(A(t), e => n.has(e.charCodeAt(0)));
  let o = r !== `loading` && n.size === 0;
  const Component65 = `p`;
  const Component66 = `div`;
  const Component67 = `section`;
  return <Component67 aria-label={`${A(t)} in your font`} className={`preview flex min-h-0 flex-1 flex-col px-5 pt-5 compact:px-4 short-landscape:hidden md:items-center md:justify-center md:pt-0 md:text-center ${o ? `[--reserve:5.75rem] short:[--reserve:2.25rem] lg:[--reserve:2.25rem]` : ``}`}><Component65 className={`shrink-0 pb-1.5 text-caption font-medium text-paper/90 lg:pb-2`}>{`In your font`}</Component65><Component66 className={`preview-lines relative w-full shrink-0 overflow-hidden text-[3.875rem] leading-[0.92] md:text-[5rem] lg:text-[6.75rem] lg:leading-[1.02]`}><_Component1 text={i} className={`block whitespace-nowrap`} /><_Component1 text={a.join(` `)} className={`block text-balance`} /></Component66>{o ? <_Component14 /> : null}</Component67>;
}
var Ee = e(I(), 1);
var Y = 8;
var X = 150;
var De = 100;
var Oe = 260;
var Z = e => `${(e / m * 100).toFixed(3)}%`;
var Q = e => `calc(var(--u) * ${e.toFixed(0)})`;
function _Component15({
  strokes: e,
  ink: t,
  place: n
}) {
  let r = Math.max(1, (t.xMax - t.xMin) * n.scale);
  const Component68 = `path`;
  const Component69 = `g`;
  const Component70 = `svg`;
  return <Component70 viewBox={`0 0 ${r.toFixed(0)} ${m}`} className={`block h-full shrink-0 fill-hand`} style={{
    width: Q(r)
  }}><Component69 transform={se(n, -t.xMin * n.scale)}>{e.map(e => <Component68 d={fe(e)} key={e.id} />)}</Component69></Component70>;
}
function Ae({
  char: e,
  lines: t
}) {
  const Component71 = `span`;
  const Component72 = `text`;
  const Component73 = `svg`;
  const Component74 = `span`;
  return <Component74 className={`relative block h-full shrink-0 font-display font-normal`} style={{
    fontSize: Q(E(e, t) * 1000)
  }}><Component71 className={`invisible block h-0 leading-none whitespace-pre`}>{e}</Component71><Component73 className={`absolute inset-0 size-full overflow-visible fill-placeholder`}><Component72 y={Z(n(0))}>{e}</Component72></Component73></Component74>;
}
function $({
  cps: e,
  side: t
}) {
  let {
    state: n,
    actions: r
  } = u();
  let {
    project: i,
    alignment: a
  } = n;
  let o = `calc(50% + var(--tape-slot) / 2 + ${Q(De)})`;
  const Component76 = `div`;
  return <Component76 aria-hidden={true} className={`absolute inset-y-0 flex ${t === `before` ? `flex-row-reverse` : ``}`} style={{
    [t === `before` ? `right` : `left`]: o,
    gap: Q(X)
  }}>{e.map(e => {
      let t = i.glyphs[e]?.drawings[0];
      let n = t?.strokes.length ? c(e, t) : null;
      let o = a.place.get(e);
      const Component75 = `button`;
      return <Component75 type={`button`} tabIndex={-1} onClick={() => r.go(e)} className={`pressable flex h-full min-w-11 shrink-0 justify-center rounded-2xl hover:bg-paper/6 max-md:pointer-events-none`} key={e}>{t && n && o ? <_Component15 strokes={t.strokes} ink={n} place={o} /> : <Ae char={A(e)} lines={a.lines} />}</Component75>;
    })}</Component76>;
}
function _Component18({
  cp: e,
  zone: t
}) {
  const Component77 = `span`;
  const Component78 = `span`;
  const Component79 = `span`;
  const Component80 = `p`;
  return <Component80 aria-hidden={true} className={`pointer-events-none absolute left-1/2 z-20 w-(--tape-slot) -translate-x-1/2 -translate-y-1/2 px-3 text-center text-[0.9375rem] leading-5 font-medium text-balance lg:text-lg lg:leading-6`} style={{
    top: Z(n((t.top + t.bottom) / 2))
  }}>{`Write your `}<Component77 className={`font-bold`}>{A(e)}</Component77>{` here`}<Component78 className={`pointer-fine:hidden`}>{`, with a finger or pen`}</Component78><Component79 className={`hidden pointer-fine:inline`}>{`. A mouse, trackpad or pen will do.`}</Component79></Component80>;
}
function Me() {
  let {
    state: e,
    actions: t
  } = u();
  let {
    cp: n,
    set: r
  } = e;
  let i = r.codepoints.indexOf(n) + 1;
  const Component81 = `span`;
  const Component82 = `h1`;
  const Component83 = `div`;
  const Component84 = `span`;
  const Component85 = `span`;
  const Component86 = `button`;
  const Component87 = `div`;
  return <Component87 className={`flex shrink-0 items-center justify-between gap-3 px-5 pb-3 compact:px-4 short-landscape:pt-2 md:mx-auto md:w-(--tape-stage) md:px-0 lg:pb-2`}><Component83 className={`flex min-w-0 items-center gap-3 lg:gap-3.5`}><Component81 aria-hidden={true} className={`flex size-11 shrink-0 items-center justify-center rounded-xl bg-paper pb-0.5 font-wide text-[1.625rem] leading-none text-carbon lg:size-13 lg:rounded-[0.875rem] lg:text-3xl`}>{A(n)}</Component81><Component82 className={`truncate text-base leading-5.5 font-medium lg:text-lg lg:leading-6`}>{`Write `}{j(n)}</Component82></Component83><Component86 type={`button`} data-anchor={`picker`} aria-haspopup={`dialog`} onClick={() => t.openSheet(`glyphs`)} aria-label={`${r.label}, ${i} of ${r.codepoints.length}. Show all glyphs`} className={`pressable flex h-11 shrink-0 items-center gap-2 rounded-full bg-paper/14 pr-2.5 pl-4 text-[0.9375rem] leading-5 hover:bg-paper/20 active:bg-paper/24 lg:pl-4.5`}><Component84 className={`hidden font-medium lg:inline`}>{r.label}</Component84><Component85 className={`font-medium tabular-nums lg:font-normal lg:text-paper/90`}>{i}{` of `}{r.codepoints.length}</Component85><_Component16 /></Component86></Component87>;
}
function Ne() {
  let {
    state: e,
    actions: t
  } = u();
  let {
    cp: r,
    strokes: i,
    status: a,
    drawn: o,
    arrival: s
  } = e;
  let c = ie(A(r));
  let [l, d] = (0, Ee.useState)(false);
  let f = x.indexOf(r);
  let p = x.slice(Math.max(0, f - Y), f).reverse();
  let m = x.slice(f + 1, f + 1 + Y);
  let h = s.by === `press` && s.from !== undefined;
  let g = h && x.indexOf(s.from) < f;
  const Component88 = `span`;
  const Component89 = `span`;
  const Component90 = `div`;
  const Component91 = `div`;
  const Component92 = `div`;
  const Component93 = `section`;
  return <Component93 aria-label={`Writing strip`} className={`flex shrink-0 flex-col lg:bg-paper/6 lg:pt-4 lg:pb-4`}><Me /><Component92 className={`relative h-[calc(var(--tape-stage)/2)] overflow-hidden bg-paper/6 lg:bg-transparent`}><Component88 aria-hidden={true} className={`pointer-events-none absolute left-1/2 w-(--tape-slot) -translate-x-1/2 bg-paper/10`} style={{
        top: Z(n(c.top)),
        height: Z(c.top - c.bottom)
      }} />{ee.map(e => <Component89 aria-hidden={true} className={`pointer-events-none absolute inset-x-0 h-[1.5px] -translate-y-1/2 ${e.id === `baseline` ? `bg-paper/65` : `bg-paper/22`}`} style={{
        top: Z(e.y)
      }} key={e.id} />)}<Component90 className={`absolute inset-0 ${h ? `tape-arrive` : ``}`} style={{
        "--tape-from": Q(g ? Oe : -260)
      }} key={r}><$ cps={p} side={`before`} /><$ cps={m} side={`after`} /></Component90><Component91 aria-busy={a === `loading`} onPointerDownCapture={() => d(true)} className={`absolute inset-y-0 left-1/2 z-10 w-(--tape-stage) -translate-x-1/2 ${a === `loading` ? `pointer-events-none` : ``}`}><_Component17 strokes={i} onStroke={t.addStroke} label={`Drawing area for ${A(r)}, a ${c.name}`} key={r} /></Component91>{a !== `loading` && !l && o.size === 0 ? <_Component18 cp={r} zone={c} /> : null}</Component92></Component93>;
}
function Pe() {
  let {
    state: e,
    actions: t
  } = u();
  let {
    prevCp: n,
    nextCp: r,
    strokes: i,
    canUndo: a
  } = e;
  let o = ue();
  const Component94 = `span`;
  const Component95 = `div`;
  const Component96 = `nav`;
  return <Component96 aria-label={`Glyph tools`} className={`flex shrink-0 items-center justify-between gap-2 px-5 pt-4.5 compact:px-4 short-landscape:pt-3 short-landscape:pb-[max(env(safe-area-inset-bottom),0.75rem)] md:mx-auto md:w-(--tape-stage) md:px-0 lg:pt-6 lg:pb-9`}><Component95 className={`flex gap-1.5 compact:gap-1 lg:gap-2`}><R onClick={() => t.go(n)} disabled={n === undefined} aria-label={n === undefined ? `Previous glyph` : `Back to ${j(n)}`} title={`Back (←)`} aria-keyshortcuts={`ArrowLeft`} className={n === undefined ? `` : `pl-2 narrow:pr-2 lg:gap-2.5 lg:pl-2.5`}>{n === undefined ? `Back` : <H.Fragment><V cp={n} className={`bg-paper/18`} /><Component94 className={`narrow:hidden`}>{`Back`}</Component94></H.Fragment>}</R><R onClick={t.undo} disabled={!a} title={`Undo (${o}Z)`} aria-keyshortcuts={`Meta+Z Control+Z`}>{`Undo`}</R><R onClick={t.clear} disabled={!i.length}>{`Clear`}</R></Component95>{r === undefined ? <B aria-haspopup={`dialog`} onClick={() => t.openSheet(`export`)} className={`pl-4 lg:h-12 lg:px-5.5 lg:pl-4.5`}><_Component19 className={`size-5 shrink-0`} />{`Export`}</B> : <B onClick={() => t.go(r)} aria-label={`Next: ${j(r)}`} title={`Next (→)`} aria-keyshortcuts={`ArrowRight`} className={`pr-2 pl-4.5 lg:h-12 lg:gap-3 lg:pr-2.5 lg:pl-5.5`}>{`Next`}<V cp={r} className={`ms-0.5 bg-carbon/12`} /></B>}</Component96>;
}
function Fe() {
  let {
    state: e
  } = u();
  let t = e.set.codepoints.indexOf(e.cp) + 1;
  const Component97 = `p`;
  return <Component97 className={`sr-only`} aria-live={`polite`}>{`Write ${j(e.cp)}, ${t} of ${e.set.codepoints.length} ${e.set.label.toLowerCase()}`}</Component97>;
}
function Ie() {
  const Component98 = `main`;
  const Component99 = `div`;
  return <_Component26><Component99 className={`write-app flex h-dvh flex-col overflow-hidden pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)]`}><Ce /><Component98 className={`flex min-h-0 flex-1 flex-col short-landscape:justify-end`}><Te /><Ne /><Pe /><J className={`mt-2.5 mb-[max(env(safe-area-inset-bottom),0.5rem)] flex shrink-0 self-center lg:hidden short-landscape:hidden`} /></Component98></Component99><_Component20 /><_Component21 /><P /><_Component22 /><_Component23 /><_Component24 /><Fe /><_Component25 /></_Component26>;
}
t(`9523d74ab19c`, {
  get WriteApp() {
    return Ie;
  }
});