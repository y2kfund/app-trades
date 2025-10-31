var ll = Object.defineProperty;
var Cr = (r) => {
  throw TypeError(r);
};
var hl = (r, e, t) => e in r ? ll(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var F = (r, e, t) => hl(r, typeof e != "symbol" ? e + "" : e, t), qs = (r, e, t) => e.has(r) || Cr("Cannot " + t);
var D = (r, e, t) => (qs(r, e, "read from private field"), t ? t.call(r) : e.get(r)), fe = (r, e, t) => e.has(r) ? Cr("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(r) : e.set(r, t), Z = (r, e, t, i) => (qs(r, e, "write to private field"), i ? i.call(r, t) : e.set(r, t), t), ve = (r, e, t) => (qs(r, e, "access private method"), t);
import { isRef as Ca, unref as _i, hasInjectionContext as ul, inject as lr, getCurrentScope as dl, computed as Ea, shallowReactive as cl, reactive as fl, watch as ht, onScopeDispose as ml, shallowReadonly as pl, readonly as gl, toRefs as bl, defineComponent as vl, ref as ye, onMounted as wl, nextTick as Dt, onBeforeUnmount as Er, resolveComponent as yl, createElementBlock as Ee, openBlock as Ce, createElementVNode as V, createCommentVNode as Lt, Fragment as ms, renderList as ps, normalizeClass as Cl, toDisplayString as it, createTextVNode as Xt, createBlock as El, withCtx as Tl, withModifiers as Tr, withDirectives as Hi, vModelCheckbox as kl, vModelSelect as kr, createStaticVNode as Rl, withKeys as xl, vModelText as Rr } from "vue";
class Ut extends Error {
}
class Ml extends Ut {
  constructor(e) {
    super(`Invalid DateTime: ${e.toMessage()}`);
  }
}
class Sl extends Ut {
  constructor(e) {
    super(`Invalid Interval: ${e.toMessage()}`);
  }
}
class Dl extends Ut {
  constructor(e) {
    super(`Invalid Duration: ${e.toMessage()}`);
  }
}
class ii extends Ut {
}
class Ta extends Ut {
  constructor(e) {
    super(`Invalid unit ${e}`);
  }
}
class ke extends Ut {
}
class ct extends Ut {
  constructor() {
    super("Zone is an abstract class");
  }
}
const H = "numeric", Qe = "short", Be = "long", Ds = {
  year: H,
  month: H,
  day: H
}, ka = {
  year: H,
  month: Qe,
  day: H
}, Ll = {
  year: H,
  month: Qe,
  day: H,
  weekday: Qe
}, Ra = {
  year: H,
  month: Be,
  day: H
}, xa = {
  year: H,
  month: Be,
  day: H,
  weekday: Be
}, Ma = {
  hour: H,
  minute: H
}, Sa = {
  hour: H,
  minute: H,
  second: H
}, Da = {
  hour: H,
  minute: H,
  second: H,
  timeZoneName: Qe
}, La = {
  hour: H,
  minute: H,
  second: H,
  timeZoneName: Be
}, Fa = {
  hour: H,
  minute: H,
  hourCycle: "h23"
}, Oa = {
  hour: H,
  minute: H,
  second: H,
  hourCycle: "h23"
}, za = {
  hour: H,
  minute: H,
  second: H,
  hourCycle: "h23",
  timeZoneName: Qe
}, Ha = {
  hour: H,
  minute: H,
  second: H,
  hourCycle: "h23",
  timeZoneName: Be
}, Pa = {
  year: H,
  month: H,
  day: H,
  hour: H,
  minute: H
}, Aa = {
  year: H,
  month: H,
  day: H,
  hour: H,
  minute: H,
  second: H
}, _a = {
  year: H,
  month: Qe,
  day: H,
  hour: H,
  minute: H
}, Ia = {
  year: H,
  month: Qe,
  day: H,
  hour: H,
  minute: H,
  second: H
}, Fl = {
  year: H,
  month: Qe,
  day: H,
  weekday: Qe,
  hour: H,
  minute: H
}, Na = {
  year: H,
  month: Be,
  day: H,
  hour: H,
  minute: H,
  timeZoneName: Qe
}, Va = {
  year: H,
  month: Be,
  day: H,
  hour: H,
  minute: H,
  second: H,
  timeZoneName: Qe
}, Ba = {
  year: H,
  month: Be,
  day: H,
  weekday: Be,
  hour: H,
  minute: H,
  timeZoneName: Be
}, Wa = {
  year: H,
  month: Be,
  day: H,
  weekday: Be,
  hour: H,
  minute: H,
  second: H,
  timeZoneName: Be
};
class es {
  /**
   * The type of zone
   * @abstract
   * @type {string}
   */
  get type() {
    throw new ct();
  }
  /**
   * The name of this zone.
   * @abstract
   * @type {string}
   */
  get name() {
    throw new ct();
  }
  /**
   * The IANA name of this zone.
   * Defaults to `name` if not overwritten by a subclass.
   * @abstract
   * @type {string}
   */
  get ianaName() {
    return this.name;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year.
   * @abstract
   * @type {boolean}
   */
  get isUniversal() {
    throw new ct();
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, t) {
    throw new ct();
  }
  /**
   * Returns the offset's value as a string
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    throw new ct();
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @abstract
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    throw new ct();
  }
  /**
   * Return whether this Zone is equal to another zone
   * @abstract
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    throw new ct();
  }
  /**
   * Return whether this Zone is valid.
   * @abstract
   * @type {boolean}
   */
  get isValid() {
    throw new ct();
  }
}
let Zs = null;
class Ps extends es {
  /**
   * Get a singleton instance of the local zone
   * @return {SystemZone}
   */
  static get instance() {
    return Zs === null && (Zs = new Ps()), Zs;
  }
  /** @override **/
  get type() {
    return "system";
  }
  /** @override **/
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName(e, { format: t, locale: i }) {
    return Qa(e, t, i);
  }
  /** @override **/
  formatOffset(e, t) {
    return Wi(this.offset(e), t);
  }
  /** @override **/
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  /** @override **/
  equals(e) {
    return e.type === "system";
  }
  /** @override **/
  get isValid() {
    return !0;
  }
}
const cn = /* @__PURE__ */ new Map();
function Ol(r) {
  let e = cn.get(r);
  return e === void 0 && (e = new Intl.DateTimeFormat("en-US", {
    hour12: !1,
    timeZone: r,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    era: "short"
  }), cn.set(r, e)), e;
}
const zl = {
  year: 0,
  month: 1,
  day: 2,
  era: 3,
  hour: 4,
  minute: 5,
  second: 6
};
function Hl(r, e) {
  const t = r.format(e).replace(/\u200E/g, ""), i = /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(t), [, s, n, a, o, l, h, u] = i;
  return [a, s, n, o, l, h, u];
}
function Pl(r, e) {
  const t = r.formatToParts(e), i = [];
  for (let s = 0; s < t.length; s++) {
    const { type: n, value: a } = t[s], o = zl[n];
    n === "era" ? i[o] = a : j(o) || (i[o] = parseInt(a, 10));
  }
  return i;
}
const Js = /* @__PURE__ */ new Map();
class ut extends es {
  /**
   * @param {string} name - Zone name
   * @return {IANAZone}
   */
  static create(e) {
    let t = Js.get(e);
    return t === void 0 && Js.set(e, t = new ut(e)), t;
  }
  /**
   * Reset local caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCache() {
    Js.clear(), cn.clear();
  }
  /**
   * Returns whether the provided string is a valid specifier. This only checks the string's format, not that the specifier identifies a known zone; see isValidZone for that.
   * @param {string} s - The string to check validity on
   * @example IANAZone.isValidSpecifier("America/New_York") //=> true
   * @example IANAZone.isValidSpecifier("Sport~~blorp") //=> false
   * @deprecated For backward compatibility, this forwards to isValidZone, better use `isValidZone()` directly instead.
   * @return {boolean}
   */
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  /**
   * Returns whether the provided string identifies a real zone
   * @param {string} zone - The string to check
   * @example IANAZone.isValidZone("America/New_York") //=> true
   * @example IANAZone.isValidZone("Fantasia/Castle") //=> false
   * @example IANAZone.isValidZone("Sport~~blorp") //=> false
   * @return {boolean}
   */
  static isValidZone(e) {
    if (!e)
      return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch {
      return !1;
    }
  }
  constructor(e) {
    super(), this.zoneName = e, this.valid = ut.isValidZone(e);
  }
  /**
   * The type of zone. `iana` for all instances of `IANAZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "iana";
  }
  /**
   * The name of this zone (i.e. the IANA zone name).
   * @override
   * @type {string}
   */
  get name() {
    return this.zoneName;
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns false for all IANA zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !1;
  }
  /**
   * Returns the offset's common name (such as EST) at the specified timestamp
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the name
   * @param {Object} opts - Options to affect the format
   * @param {string} opts.format - What style of offset to return. Accepts 'long' or 'short'.
   * @param {string} opts.locale - What locale to return the offset name in.
   * @return {string}
   */
  offsetName(e, { format: t, locale: i }) {
    return Qa(e, t, i, this.name);
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    return Wi(this.offset(e), t);
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   * @override
   * @param {number} ts - Epoch milliseconds for which to compute the offset
   * @return {number}
   */
  offset(e) {
    if (!this.valid) return NaN;
    const t = new Date(e);
    if (isNaN(t)) return NaN;
    const i = Ol(this.name);
    let [s, n, a, o, l, h, u] = i.formatToParts ? Pl(i, t) : Hl(i, t);
    o === "BC" && (s = -Math.abs(s) + 1);
    const f = _s({
      year: s,
      month: n,
      day: a,
      hour: l === 24 ? 0 : l,
      minute: h,
      second: u,
      millisecond: 0
    });
    let b = +t;
    const T = b % 1e3;
    return b -= T >= 0 ? T : 1e3 + T, (f - b) / (60 * 1e3);
  }
  /**
   * Return whether this Zone is equal to another zone
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "iana" && e.name === this.name;
  }
  /**
   * Return whether this Zone is valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return this.valid;
  }
}
let xr = {};
function Al(r, e = {}) {
  const t = JSON.stringify([r, e]);
  let i = xr[t];
  return i || (i = new Intl.ListFormat(r, e), xr[t] = i), i;
}
const fn = /* @__PURE__ */ new Map();
function mn(r, e = {}) {
  const t = JSON.stringify([r, e]);
  let i = fn.get(t);
  return i === void 0 && (i = new Intl.DateTimeFormat(r, e), fn.set(t, i)), i;
}
const pn = /* @__PURE__ */ new Map();
function _l(r, e = {}) {
  const t = JSON.stringify([r, e]);
  let i = pn.get(t);
  return i === void 0 && (i = new Intl.NumberFormat(r, e), pn.set(t, i)), i;
}
const gn = /* @__PURE__ */ new Map();
function Il(r, e = {}) {
  const { base: t, ...i } = e, s = JSON.stringify([r, i]);
  let n = gn.get(s);
  return n === void 0 && (n = new Intl.RelativeTimeFormat(r, e), gn.set(s, n)), n;
}
let Ii = null;
function Nl() {
  return Ii || (Ii = new Intl.DateTimeFormat().resolvedOptions().locale, Ii);
}
const bn = /* @__PURE__ */ new Map();
function ja(r) {
  let e = bn.get(r);
  return e === void 0 && (e = new Intl.DateTimeFormat(r).resolvedOptions(), bn.set(r, e)), e;
}
const vn = /* @__PURE__ */ new Map();
function Vl(r) {
  let e = vn.get(r);
  if (!e) {
    const t = new Intl.Locale(r);
    e = "getWeekInfo" in t ? t.getWeekInfo() : t.weekInfo, "minimalDays" in e || (e = { ...Ua, ...e }), vn.set(r, e);
  }
  return e;
}
function Bl(r) {
  const e = r.indexOf("-x-");
  e !== -1 && (r = r.substring(0, e));
  const t = r.indexOf("-u-");
  if (t === -1)
    return [r];
  {
    let i, s;
    try {
      i = mn(r).resolvedOptions(), s = r;
    } catch {
      const l = r.substring(0, t);
      i = mn(l).resolvedOptions(), s = l;
    }
    const { numberingSystem: n, calendar: a } = i;
    return [s, n, a];
  }
}
function Wl(r, e, t) {
  return (t || e) && (r.includes("-u-") || (r += "-u"), t && (r += `-ca-${t}`), e && (r += `-nu-${e}`)), r;
}
function jl(r) {
  const e = [];
  for (let t = 1; t <= 12; t++) {
    const i = U.utc(2009, t, 1);
    e.push(r(i));
  }
  return e;
}
function Ul(r) {
  const e = [];
  for (let t = 1; t <= 7; t++) {
    const i = U.utc(2016, 11, 13 + t);
    e.push(r(i));
  }
  return e;
}
function gs(r, e, t, i) {
  const s = r.listingMode();
  return s === "error" ? null : s === "en" ? t(e) : i(e);
}
function Gl(r) {
  return r.numberingSystem && r.numberingSystem !== "latn" ? !1 : r.numberingSystem === "latn" || !r.locale || r.locale.startsWith("en") || ja(r.locale).numberingSystem === "latn";
}
class $l {
  constructor(e, t, i) {
    this.padTo = i.padTo || 0, this.floor = i.floor || !1;
    const { padTo: s, floor: n, ...a } = i;
    if (!t || Object.keys(a).length > 0) {
      const o = { useGrouping: !1, ...i };
      i.padTo > 0 && (o.minimumIntegerDigits = i.padTo), this.inf = _l(e, o);
    }
  }
  format(e) {
    if (this.inf) {
      const t = this.floor ? Math.floor(e) : e;
      return this.inf.format(t);
    } else {
      const t = this.floor ? Math.floor(e) : fr(e, 3);
      return we(t, this.padTo);
    }
  }
}
class Yl {
  constructor(e, t, i) {
    this.opts = i, this.originalZone = void 0;
    let s;
    if (this.opts.timeZone)
      this.dt = e;
    else if (e.zone.type === "fixed") {
      const a = -1 * (e.offset / 60), o = a >= 0 ? `Etc/GMT+${a}` : `Etc/GMT${a}`;
      e.offset !== 0 && ut.create(o).valid ? (s = o, this.dt = e) : (s = "UTC", this.dt = e.offset === 0 ? e : e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    } else e.zone.type === "system" ? this.dt = e : e.zone.type === "iana" ? (this.dt = e, s = e.zone.name) : (s = "UTC", this.dt = e.setZone("UTC").plus({ minutes: e.offset }), this.originalZone = e.zone);
    const n = { ...this.opts };
    n.timeZone = n.timeZone || s, this.dtf = mn(t, n);
  }
  format() {
    return this.originalZone ? this.formatToParts().map(({ value: e }) => e).join("") : this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    const e = this.dtf.formatToParts(this.dt.toJSDate());
    return this.originalZone ? e.map((t) => {
      if (t.type === "timeZoneName") {
        const i = this.originalZone.offsetName(this.dt.ts, {
          locale: this.dt.locale,
          format: this.opts.timeZoneName
        });
        return {
          ...t,
          value: i
        };
      } else
        return t;
    }) : e;
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class ql {
  constructor(e, t, i) {
    this.opts = { style: "long", ...i }, !t && Ka() && (this.rtf = Il(e, i));
  }
  format(e, t) {
    return this.rtf ? this.rtf.format(e, t) : gh(t, e, this.opts.numeric, this.opts.style !== "long");
  }
  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
const Ua = {
  firstDay: 1,
  minimalDays: 4,
  weekend: [6, 7]
};
class oe {
  static fromOpts(e) {
    return oe.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.weekSettings,
      e.defaultToEN
    );
  }
  static create(e, t, i, s, n = !1) {
    const a = e || pe.defaultLocale, o = a || (n ? "en-US" : Nl()), l = t || pe.defaultNumberingSystem, h = i || pe.defaultOutputCalendar, u = yn(s) || pe.defaultWeekSettings;
    return new oe(o, l, h, u, a);
  }
  static resetCache() {
    Ii = null, fn.clear(), pn.clear(), gn.clear(), bn.clear(), vn.clear();
  }
  static fromObject({ locale: e, numberingSystem: t, outputCalendar: i, weekSettings: s } = {}) {
    return oe.create(e, t, i, s);
  }
  constructor(e, t, i, s, n) {
    const [a, o, l] = Bl(e);
    this.locale = a, this.numberingSystem = t || o || null, this.outputCalendar = i || l || null, this.weekSettings = s, this.intl = Wl(this.locale, this.numberingSystem, this.outputCalendar), this.weekdaysCache = { format: {}, standalone: {} }, this.monthsCache = { format: {}, standalone: {} }, this.meridiemCache = null, this.eraCache = {}, this.specifiedLocale = n, this.fastNumbersCached = null;
  }
  get fastNumbers() {
    return this.fastNumbersCached == null && (this.fastNumbersCached = Gl(this)), this.fastNumbersCached;
  }
  listingMode() {
    const e = this.isEnglish(), t = (this.numberingSystem === null || this.numberingSystem === "latn") && (this.outputCalendar === null || this.outputCalendar === "gregory");
    return e && t ? "en" : "intl";
  }
  clone(e) {
    return !e || Object.getOwnPropertyNames(e).length === 0 ? this : oe.create(
      e.locale || this.specifiedLocale,
      e.numberingSystem || this.numberingSystem,
      e.outputCalendar || this.outputCalendar,
      yn(e.weekSettings) || this.weekSettings,
      e.defaultToEN || !1
    );
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(e, t = !1) {
    return gs(this, e, io, () => {
      const i = this.intl === "ja" || this.intl.startsWith("ja-");
      t &= !i;
      const s = t ? { month: e, day: "numeric" } : { month: e }, n = t ? "format" : "standalone";
      if (!this.monthsCache[n][e]) {
        const a = i ? (o) => this.dtFormatter(o, s).format() : (o) => this.extract(o, s, "month");
        this.monthsCache[n][e] = jl(a);
      }
      return this.monthsCache[n][e];
    });
  }
  weekdays(e, t = !1) {
    return gs(this, e, ro, () => {
      const i = t ? { weekday: e, year: "numeric", month: "long", day: "numeric" } : { weekday: e }, s = t ? "format" : "standalone";
      return this.weekdaysCache[s][e] || (this.weekdaysCache[s][e] = Ul(
        (n) => this.extract(n, i, "weekday")
      )), this.weekdaysCache[s][e];
    });
  }
  meridiems() {
    return gs(
      this,
      void 0,
      () => ao,
      () => {
        if (!this.meridiemCache) {
          const e = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [U.utc(2016, 11, 13, 9), U.utc(2016, 11, 13, 19)].map(
            (t) => this.extract(t, e, "dayperiod")
          );
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e) {
    return gs(this, e, oo, () => {
      const t = { era: e };
      return this.eraCache[e] || (this.eraCache[e] = [U.utc(-40, 1, 1), U.utc(2017, 1, 1)].map(
        (i) => this.extract(i, t, "era")
      )), this.eraCache[e];
    });
  }
  extract(e, t, i) {
    const s = this.dtFormatter(e, t), n = s.formatToParts(), a = n.find((o) => o.type.toLowerCase() === i);
    return a ? a.value : null;
  }
  numberFormatter(e = {}) {
    return new $l(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, t = {}) {
    return new Yl(e, this.intl, t);
  }
  relFormatter(e = {}) {
    return new ql(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return Al(this.intl, e);
  }
  isEnglish() {
    return this.locale === "en" || this.locale.toLowerCase() === "en-us" || ja(this.intl).locale.startsWith("en-us");
  }
  getWeekSettings() {
    return this.weekSettings ? this.weekSettings : Xa() ? Vl(this.locale) : Ua;
  }
  getStartOfWeek() {
    return this.getWeekSettings().firstDay;
  }
  getMinDaysInFirstWeek() {
    return this.getWeekSettings().minimalDays;
  }
  getWeekendDays() {
    return this.getWeekSettings().weekend;
  }
  equals(e) {
    return this.locale === e.locale && this.numberingSystem === e.numberingSystem && this.outputCalendar === e.outputCalendar;
  }
  toString() {
    return `Locale(${this.locale}, ${this.numberingSystem}, ${this.outputCalendar})`;
  }
}
let Ks = null;
class Fe extends es {
  /**
   * Get a singleton instance of UTC
   * @return {FixedOffsetZone}
   */
  static get utcInstance() {
    return Ks === null && (Ks = new Fe(0)), Ks;
  }
  /**
   * Get an instance with a specified offset
   * @param {number} offset - The offset in minutes
   * @return {FixedOffsetZone}
   */
  static instance(e) {
    return e === 0 ? Fe.utcInstance : new Fe(e);
  }
  /**
   * Get an instance of FixedOffsetZone from a UTC offset string, like "UTC+6"
   * @param {string} s - The offset string to parse
   * @example FixedOffsetZone.parseSpecifier("UTC+6")
   * @example FixedOffsetZone.parseSpecifier("UTC+06")
   * @example FixedOffsetZone.parseSpecifier("UTC-6:00")
   * @return {FixedOffsetZone}
   */
  static parseSpecifier(e) {
    if (e) {
      const t = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (t)
        return new Fe(Is(t[1], t[2]));
    }
    return null;
  }
  constructor(e) {
    super(), this.fixed = e;
  }
  /**
   * The type of zone. `fixed` for all instances of `FixedOffsetZone`.
   * @override
   * @type {string}
   */
  get type() {
    return "fixed";
  }
  /**
   * The name of this zone.
   * All fixed zones' names always start with "UTC" (plus optional offset)
   * @override
   * @type {string}
   */
  get name() {
    return this.fixed === 0 ? "UTC" : `UTC${Wi(this.fixed, "narrow")}`;
  }
  /**
   * The IANA name of this zone, i.e. `Etc/UTC` or `Etc/GMT+/-nn`
   *
   * @override
   * @type {string}
   */
  get ianaName() {
    return this.fixed === 0 ? "Etc/UTC" : `Etc/GMT${Wi(-this.fixed, "narrow")}`;
  }
  /**
   * Returns the offset's common name at the specified timestamp.
   *
   * For fixed offset zones this equals to the zone name.
   * @override
   */
  offsetName() {
    return this.name;
  }
  /**
   * Returns the offset's value as a string
   * @override
   * @param {number} ts - Epoch milliseconds for which to get the offset
   * @param {string} format - What style of offset to return.
   *                          Accepts 'narrow', 'short', or 'techie'. Returning '+6', '+06:00', or '+0600' respectively
   * @return {string}
   */
  formatOffset(e, t) {
    return Wi(this.fixed, t);
  }
  /**
   * Returns whether the offset is known to be fixed for the whole year:
   * Always returns true for all fixed offset zones.
   * @override
   * @type {boolean}
   */
  get isUniversal() {
    return !0;
  }
  /**
   * Return the offset in minutes for this zone at the specified timestamp.
   *
   * For fixed offset zones, this is constant and does not depend on a timestamp.
   * @override
   * @return {number}
   */
  offset() {
    return this.fixed;
  }
  /**
   * Return whether this Zone is equal to another zone (i.e. also fixed and same offset)
   * @override
   * @param {Zone} otherZone - the zone to compare
   * @return {boolean}
   */
  equals(e) {
    return e.type === "fixed" && e.fixed === this.fixed;
  }
  /**
   * Return whether this Zone is valid:
   * All fixed offset zones are valid.
   * @override
   * @type {boolean}
   */
  get isValid() {
    return !0;
  }
}
class Zl extends es {
  constructor(e) {
    super(), this.zoneName = e;
  }
  /** @override **/
  get type() {
    return "invalid";
  }
  /** @override **/
  get name() {
    return this.zoneName;
  }
  /** @override **/
  get isUniversal() {
    return !1;
  }
  /** @override **/
  offsetName() {
    return null;
  }
  /** @override **/
  formatOffset() {
    return "";
  }
  /** @override **/
  offset() {
    return NaN;
  }
  /** @override **/
  equals() {
    return !1;
  }
  /** @override **/
  get isValid() {
    return !1;
  }
}
function yt(r, e) {
  if (j(r) || r === null)
    return e;
  if (r instanceof es)
    return r;
  if (th(r)) {
    const t = r.toLowerCase();
    return t === "default" ? e : t === "local" || t === "system" ? Ps.instance : t === "utc" || t === "gmt" ? Fe.utcInstance : Fe.parseSpecifier(t) || ut.create(r);
  } else return Rt(r) ? Fe.instance(r) : typeof r == "object" && "offset" in r && typeof r.offset == "function" ? r : new Zl(r);
}
const hr = {
  arab: "[٠-٩]",
  arabext: "[۰-۹]",
  bali: "[᭐-᭙]",
  beng: "[০-৯]",
  deva: "[०-९]",
  fullwide: "[０-９]",
  gujr: "[૦-૯]",
  hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
  khmr: "[០-៩]",
  knda: "[೦-೯]",
  laoo: "[໐-໙]",
  limb: "[᥆-᥏]",
  mlym: "[൦-൯]",
  mong: "[᠐-᠙]",
  mymr: "[၀-၉]",
  orya: "[୦-୯]",
  tamldec: "[௦-௯]",
  telu: "[౦-౯]",
  thai: "[๐-๙]",
  tibt: "[༠-༩]",
  latn: "\\d"
}, Mr = {
  arab: [1632, 1641],
  arabext: [1776, 1785],
  bali: [6992, 7001],
  beng: [2534, 2543],
  deva: [2406, 2415],
  fullwide: [65296, 65303],
  gujr: [2790, 2799],
  khmr: [6112, 6121],
  knda: [3302, 3311],
  laoo: [3792, 3801],
  limb: [6470, 6479],
  mlym: [3430, 3439],
  mong: [6160, 6169],
  mymr: [4160, 4169],
  orya: [2918, 2927],
  tamldec: [3046, 3055],
  telu: [3174, 3183],
  thai: [3664, 3673],
  tibt: [3872, 3881]
}, Jl = hr.hanidec.replace(/[\[|\]]/g, "").split("");
function Kl(r) {
  let e = parseInt(r, 10);
  if (isNaN(e)) {
    e = "";
    for (let t = 0; t < r.length; t++) {
      const i = r.charCodeAt(t);
      if (r[t].search(hr.hanidec) !== -1)
        e += Jl.indexOf(r[t]);
      else
        for (const s in Mr) {
          const [n, a] = Mr[s];
          i >= n && i <= a && (e += i - n);
        }
    }
    return parseInt(e, 10);
  } else
    return e;
}
const wn = /* @__PURE__ */ new Map();
function Xl() {
  wn.clear();
}
function qe({ numberingSystem: r }, e = "") {
  const t = r || "latn";
  let i = wn.get(t);
  i === void 0 && (i = /* @__PURE__ */ new Map(), wn.set(t, i));
  let s = i.get(e);
  return s === void 0 && (s = new RegExp(`${hr[t]}${e}`), i.set(e, s)), s;
}
let Sr = () => Date.now(), Dr = "system", Lr = null, Fr = null, Or = null, zr = 60, Hr, Pr = null;
class pe {
  /**
   * Get the callback for returning the current timestamp.
   * @type {function}
   */
  static get now() {
    return Sr;
  }
  /**
   * Set the callback for returning the current timestamp.
   * The function should return a number, which will be interpreted as an Epoch millisecond count
   * @type {function}
   * @example Settings.now = () => Date.now() + 3000 // pretend it is 3 seconds in the future
   * @example Settings.now = () => 0 // always pretend it's Jan 1, 1970 at midnight in UTC time
   */
  static set now(e) {
    Sr = e;
  }
  /**
   * Set the default time zone to create DateTimes in. Does not affect existing instances.
   * Use the value "system" to reset this value to the system's time zone.
   * @type {string}
   */
  static set defaultZone(e) {
    Dr = e;
  }
  /**
   * Get the default time zone object currently used to create DateTimes. Does not affect existing instances.
   * The default value is the system's time zone (the one set on the machine that runs this code).
   * @type {Zone}
   */
  static get defaultZone() {
    return yt(Dr, Ps.instance);
  }
  /**
   * Get the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultLocale() {
    return Lr;
  }
  /**
   * Set the default locale to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultLocale(e) {
    Lr = e;
  }
  /**
   * Get the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultNumberingSystem() {
    return Fr;
  }
  /**
   * Set the default numbering system to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultNumberingSystem(e) {
    Fr = e;
  }
  /**
   * Get the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static get defaultOutputCalendar() {
    return Or;
  }
  /**
   * Set the default output calendar to create DateTimes with. Does not affect existing instances.
   * @type {string}
   */
  static set defaultOutputCalendar(e) {
    Or = e;
  }
  /**
   * @typedef {Object} WeekSettings
   * @property {number} firstDay
   * @property {number} minimalDays
   * @property {number[]} weekend
   */
  /**
   * @return {WeekSettings|null}
   */
  static get defaultWeekSettings() {
    return Pr;
  }
  /**
   * Allows overriding the default locale week settings, i.e. the start of the week, the weekend and
   * how many days are required in the first week of a year.
   * Does not affect existing instances.
   *
   * @param {WeekSettings|null} weekSettings
   */
  static set defaultWeekSettings(e) {
    Pr = yn(e);
  }
  /**
   * Get the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   */
  static get twoDigitCutoffYear() {
    return zr;
  }
  /**
   * Set the cutoff year for whether a 2-digit year string is interpreted in the current or previous century. Numbers higher than the cutoff will be considered to mean 19xx and numbers lower or equal to the cutoff will be considered 20xx.
   * @type {number}
   * @example Settings.twoDigitCutoffYear = 0 // all 'yy' are interpreted as 20th century
   * @example Settings.twoDigitCutoffYear = 99 // all 'yy' are interpreted as 21st century
   * @example Settings.twoDigitCutoffYear = 50 // '49' -> 2049; '50' -> 1950
   * @example Settings.twoDigitCutoffYear = 1950 // interpreted as 50
   * @example Settings.twoDigitCutoffYear = 2050 // ALSO interpreted as 50
   */
  static set twoDigitCutoffYear(e) {
    zr = e % 100;
  }
  /**
   * Get whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static get throwOnInvalid() {
    return Hr;
  }
  /**
   * Set whether Luxon will throw when it encounters invalid DateTimes, Durations, or Intervals
   * @type {boolean}
   */
  static set throwOnInvalid(e) {
    Hr = e;
  }
  /**
   * Reset Luxon's global caches. Should only be necessary in testing scenarios.
   * @return {void}
   */
  static resetCaches() {
    oe.resetCache(), ut.resetCache(), U.resetCache(), Xl();
  }
}
class Xe {
  constructor(e, t) {
    this.reason = e, this.explanation = t;
  }
  toMessage() {
    return this.explanation ? `${this.reason}: ${this.explanation}` : this.reason;
  }
}
const Ga = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334], $a = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Ue(r, e) {
  return new Xe(
    "unit out of range",
    `you specified ${e} (of type ${typeof e}) as a ${r}, which is invalid`
  );
}
function ur(r, e, t) {
  const i = new Date(Date.UTC(r, e - 1, t));
  r < 100 && r >= 0 && i.setUTCFullYear(i.getUTCFullYear() - 1900);
  const s = i.getUTCDay();
  return s === 0 ? 7 : s;
}
function Ya(r, e, t) {
  return t + (ts(r) ? $a : Ga)[e - 1];
}
function qa(r, e) {
  const t = ts(r) ? $a : Ga, i = t.findIndex((n) => n < e), s = e - t[i];
  return { month: i + 1, day: s };
}
function dr(r, e) {
  return (r - e + 7) % 7 + 1;
}
function Ls(r, e = 4, t = 1) {
  const { year: i, month: s, day: n } = r, a = Ya(i, s, n), o = dr(ur(i, s, n), t);
  let l = Math.floor((a - o + 14 - e) / 7), h;
  return l < 1 ? (h = i - 1, l = Ji(h, e, t)) : l > Ji(i, e, t) ? (h = i + 1, l = 1) : h = i, { weekYear: h, weekNumber: l, weekday: o, ...Ns(r) };
}
function Ar(r, e = 4, t = 1) {
  const { weekYear: i, weekNumber: s, weekday: n } = r, a = dr(ur(i, 1, e), t), o = li(i);
  let l = s * 7 + n - a - 7 + e, h;
  l < 1 ? (h = i - 1, l += li(h)) : l > o ? (h = i + 1, l -= li(i)) : h = i;
  const { month: u, day: d } = qa(h, l);
  return { year: h, month: u, day: d, ...Ns(r) };
}
function Xs(r) {
  const { year: e, month: t, day: i } = r, s = Ya(e, t, i);
  return { year: e, ordinal: s, ...Ns(r) };
}
function _r(r) {
  const { year: e, ordinal: t } = r, { month: i, day: s } = qa(e, t);
  return { year: e, month: i, day: s, ...Ns(r) };
}
function Ir(r, e) {
  if (!j(r.localWeekday) || !j(r.localWeekNumber) || !j(r.localWeekYear)) {
    if (!j(r.weekday) || !j(r.weekNumber) || !j(r.weekYear))
      throw new ii(
        "Cannot mix locale-based week fields with ISO-based week fields"
      );
    return j(r.localWeekday) || (r.weekday = r.localWeekday), j(r.localWeekNumber) || (r.weekNumber = r.localWeekNumber), j(r.localWeekYear) || (r.weekYear = r.localWeekYear), delete r.localWeekday, delete r.localWeekNumber, delete r.localWeekYear, {
      minDaysInFirstWeek: e.getMinDaysInFirstWeek(),
      startOfWeek: e.getStartOfWeek()
    };
  } else
    return { minDaysInFirstWeek: 4, startOfWeek: 1 };
}
function Ql(r, e = 4, t = 1) {
  const i = As(r.weekYear), s = Ge(
    r.weekNumber,
    1,
    Ji(r.weekYear, e, t)
  ), n = Ge(r.weekday, 1, 7);
  return i ? s ? n ? !1 : Ue("weekday", r.weekday) : Ue("week", r.weekNumber) : Ue("weekYear", r.weekYear);
}
function eh(r) {
  const e = As(r.year), t = Ge(r.ordinal, 1, li(r.year));
  return e ? t ? !1 : Ue("ordinal", r.ordinal) : Ue("year", r.year);
}
function Za(r) {
  const e = As(r.year), t = Ge(r.month, 1, 12), i = Ge(r.day, 1, Fs(r.year, r.month));
  return e ? t ? i ? !1 : Ue("day", r.day) : Ue("month", r.month) : Ue("year", r.year);
}
function Ja(r) {
  const { hour: e, minute: t, second: i, millisecond: s } = r, n = Ge(e, 0, 23) || e === 24 && t === 0 && i === 0 && s === 0, a = Ge(t, 0, 59), o = Ge(i, 0, 59), l = Ge(s, 0, 999);
  return n ? a ? o ? l ? !1 : Ue("millisecond", s) : Ue("second", i) : Ue("minute", t) : Ue("hour", e);
}
function j(r) {
  return typeof r > "u";
}
function Rt(r) {
  return typeof r == "number";
}
function As(r) {
  return typeof r == "number" && r % 1 === 0;
}
function th(r) {
  return typeof r == "string";
}
function ih(r) {
  return Object.prototype.toString.call(r) === "[object Date]";
}
function Ka() {
  try {
    return typeof Intl < "u" && !!Intl.RelativeTimeFormat;
  } catch {
    return !1;
  }
}
function Xa() {
  try {
    return typeof Intl < "u" && !!Intl.Locale && ("weekInfo" in Intl.Locale.prototype || "getWeekInfo" in Intl.Locale.prototype);
  } catch {
    return !1;
  }
}
function sh(r) {
  return Array.isArray(r) ? r : [r];
}
function Nr(r, e, t) {
  if (r.length !== 0)
    return r.reduce((i, s) => {
      const n = [e(s), s];
      return i && t(i[0], n[0]) === i[0] ? i : n;
    }, null)[1];
}
function nh(r, e) {
  return e.reduce((t, i) => (t[i] = r[i], t), {});
}
function wi(r, e) {
  return Object.prototype.hasOwnProperty.call(r, e);
}
function yn(r) {
  if (r == null)
    return null;
  if (typeof r != "object")
    throw new ke("Week settings must be an object");
  if (!Ge(r.firstDay, 1, 7) || !Ge(r.minimalDays, 1, 7) || !Array.isArray(r.weekend) || r.weekend.some((e) => !Ge(e, 1, 7)))
    throw new ke("Invalid week settings");
  return {
    firstDay: r.firstDay,
    minimalDays: r.minimalDays,
    weekend: Array.from(r.weekend)
  };
}
function Ge(r, e, t) {
  return As(r) && r >= e && r <= t;
}
function rh(r, e) {
  return r - e * Math.floor(r / e);
}
function we(r, e = 2) {
  const t = r < 0;
  let i;
  return t ? i = "-" + ("" + -r).padStart(e, "0") : i = ("" + r).padStart(e, "0"), i;
}
function ft(r) {
  if (!(j(r) || r === null || r === ""))
    return parseInt(r, 10);
}
function Ft(r) {
  if (!(j(r) || r === null || r === ""))
    return parseFloat(r);
}
function cr(r) {
  if (!(j(r) || r === null || r === "")) {
    const e = parseFloat("0." + r) * 1e3;
    return Math.floor(e);
  }
}
function fr(r, e, t = "round") {
  const i = 10 ** e;
  switch (t) {
    case "expand":
      return r > 0 ? Math.ceil(r * i) / i : Math.floor(r * i) / i;
    case "trunc":
      return Math.trunc(r * i) / i;
    case "round":
      return Math.round(r * i) / i;
    case "floor":
      return Math.floor(r * i) / i;
    case "ceil":
      return Math.ceil(r * i) / i;
    default:
      throw new RangeError(`Value rounding ${t} is out of range`);
  }
}
function ts(r) {
  return r % 4 === 0 && (r % 100 !== 0 || r % 400 === 0);
}
function li(r) {
  return ts(r) ? 366 : 365;
}
function Fs(r, e) {
  const t = rh(e - 1, 12) + 1, i = r + (e - t) / 12;
  return t === 2 ? ts(i) ? 29 : 28 : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t - 1];
}
function _s(r) {
  let e = Date.UTC(
    r.year,
    r.month - 1,
    r.day,
    r.hour,
    r.minute,
    r.second,
    r.millisecond
  );
  return r.year < 100 && r.year >= 0 && (e = new Date(e), e.setUTCFullYear(r.year, r.month - 1, r.day)), +e;
}
function Vr(r, e, t) {
  return -dr(ur(r, 1, e), t) + e - 1;
}
function Ji(r, e = 4, t = 1) {
  const i = Vr(r, e, t), s = Vr(r + 1, e, t);
  return (li(r) - i + s) / 7;
}
function Cn(r) {
  return r > 99 ? r : r > pe.twoDigitCutoffYear ? 1900 + r : 2e3 + r;
}
function Qa(r, e, t, i = null) {
  const s = new Date(r), n = {
    hourCycle: "h23",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit"
  };
  i && (n.timeZone = i);
  const a = { timeZoneName: e, ...n }, o = new Intl.DateTimeFormat(t, a).formatToParts(s).find((l) => l.type.toLowerCase() === "timezonename");
  return o ? o.value : null;
}
function Is(r, e) {
  let t = parseInt(r, 10);
  Number.isNaN(t) && (t = 0);
  const i = parseInt(e, 10) || 0, s = t < 0 || Object.is(t, -0) ? -i : i;
  return t * 60 + s;
}
function eo(r) {
  const e = Number(r);
  if (typeof r == "boolean" || r === "" || !Number.isFinite(e))
    throw new ke(`Invalid unit value ${r}`);
  return e;
}
function Os(r, e) {
  const t = {};
  for (const i in r)
    if (wi(r, i)) {
      const s = r[i];
      if (s == null) continue;
      t[e(i)] = eo(s);
    }
  return t;
}
function Wi(r, e) {
  const t = Math.trunc(Math.abs(r / 60)), i = Math.trunc(Math.abs(r % 60)), s = r >= 0 ? "+" : "-";
  switch (e) {
    case "short":
      return `${s}${we(t, 2)}:${we(i, 2)}`;
    case "narrow":
      return `${s}${t}${i > 0 ? `:${i}` : ""}`;
    case "techie":
      return `${s}${we(t, 2)}${we(i, 2)}`;
    default:
      throw new RangeError(`Value format ${e} is out of range for property format`);
  }
}
function Ns(r) {
  return nh(r, ["hour", "minute", "second", "millisecond"]);
}
const ah = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], to = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
], oh = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function io(r) {
  switch (r) {
    case "narrow":
      return [...oh];
    case "short":
      return [...to];
    case "long":
      return [...ah];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    default:
      return null;
  }
}
const so = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
], no = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], lh = ["M", "T", "W", "T", "F", "S", "S"];
function ro(r) {
  switch (r) {
    case "narrow":
      return [...lh];
    case "short":
      return [...no];
    case "long":
      return [...so];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const ao = ["AM", "PM"], hh = ["Before Christ", "Anno Domini"], uh = ["BC", "AD"], dh = ["B", "A"];
function oo(r) {
  switch (r) {
    case "narrow":
      return [...dh];
    case "short":
      return [...uh];
    case "long":
      return [...hh];
    default:
      return null;
  }
}
function ch(r) {
  return ao[r.hour < 12 ? 0 : 1];
}
function fh(r, e) {
  return ro(e)[r.weekday - 1];
}
function mh(r, e) {
  return io(e)[r.month - 1];
}
function ph(r, e) {
  return oo(e)[r.year < 0 ? 0 : 1];
}
function gh(r, e, t = "always", i = !1) {
  const s = {
    years: ["year", "yr."],
    quarters: ["quarter", "qtr."],
    months: ["month", "mo."],
    weeks: ["week", "wk."],
    days: ["day", "day", "days"],
    hours: ["hour", "hr."],
    minutes: ["minute", "min."],
    seconds: ["second", "sec."]
  }, n = ["hours", "minutes", "seconds"].indexOf(r) === -1;
  if (t === "auto" && n) {
    const d = r === "days";
    switch (e) {
      case 1:
        return d ? "tomorrow" : `next ${s[r][0]}`;
      case -1:
        return d ? "yesterday" : `last ${s[r][0]}`;
      case 0:
        return d ? "today" : `this ${s[r][0]}`;
    }
  }
  const a = Object.is(e, -0) || e < 0, o = Math.abs(e), l = o === 1, h = s[r], u = i ? l ? h[1] : h[2] || h[1] : l ? s[r][0] : r;
  return a ? `${o} ${u} ago` : `in ${o} ${u}`;
}
function Br(r, e) {
  let t = "";
  for (const i of r)
    i.literal ? t += i.val : t += e(i.val);
  return t;
}
const bh = {
  D: Ds,
  DD: ka,
  DDD: Ra,
  DDDD: xa,
  t: Ma,
  tt: Sa,
  ttt: Da,
  tttt: La,
  T: Fa,
  TT: Oa,
  TTT: za,
  TTTT: Ha,
  f: Pa,
  ff: _a,
  fff: Na,
  ffff: Ba,
  F: Aa,
  FF: Ia,
  FFF: Va,
  FFFF: Wa
};
class Me {
  static create(e, t = {}) {
    return new Me(e, t);
  }
  static parseFormat(e) {
    let t = null, i = "", s = !1;
    const n = [];
    for (let a = 0; a < e.length; a++) {
      const o = e.charAt(a);
      o === "'" ? ((i.length > 0 || s) && n.push({
        literal: s || /^\s+$/.test(i),
        val: i === "" ? "'" : i
      }), t = null, i = "", s = !s) : s || o === t ? i += o : (i.length > 0 && n.push({ literal: /^\s+$/.test(i), val: i }), i = o, t = o);
    }
    return i.length > 0 && n.push({ literal: s || /^\s+$/.test(i), val: i }), n;
  }
  static macroTokenToFormatOpts(e) {
    return bh[e];
  }
  constructor(e, t) {
    this.opts = t, this.loc = e, this.systemLoc = null;
  }
  formatWithSystemDefault(e, t) {
    return this.systemLoc === null && (this.systemLoc = this.loc.redefaultToSystem()), this.systemLoc.dtFormatter(e, { ...this.opts, ...t }).format();
  }
  dtFormatter(e, t = {}) {
    return this.loc.dtFormatter(e, { ...this.opts, ...t });
  }
  formatDateTime(e, t) {
    return this.dtFormatter(e, t).format();
  }
  formatDateTimeParts(e, t) {
    return this.dtFormatter(e, t).formatToParts();
  }
  formatInterval(e, t) {
    return this.dtFormatter(e.start, t).dtf.formatRange(e.start.toJSDate(), e.end.toJSDate());
  }
  resolvedOptions(e, t) {
    return this.dtFormatter(e, t).resolvedOptions();
  }
  num(e, t = 0, i = void 0) {
    if (this.opts.forceSimple)
      return we(e, t);
    const s = { ...this.opts };
    return t > 0 && (s.padTo = t), i && (s.signDisplay = i), this.loc.numberFormatter(s).format(e);
  }
  formatDateTimeFromString(e, t) {
    const i = this.loc.listingMode() === "en", s = this.loc.outputCalendar && this.loc.outputCalendar !== "gregory", n = (b, T) => this.loc.extract(e, b, T), a = (b) => e.isOffsetFixed && e.offset === 0 && b.allowZ ? "Z" : e.isValid ? e.zone.formatOffset(e.ts, b.format) : "", o = () => i ? ch(e) : n({ hour: "numeric", hourCycle: "h12" }, "dayperiod"), l = (b, T) => i ? mh(e, b) : n(T ? { month: b } : { month: b, day: "numeric" }, "month"), h = (b, T) => i ? fh(e, b) : n(
      T ? { weekday: b } : { weekday: b, month: "long", day: "numeric" },
      "weekday"
    ), u = (b) => {
      const T = Me.macroTokenToFormatOpts(b);
      return T ? this.formatWithSystemDefault(e, T) : b;
    }, d = (b) => i ? ph(e, b) : n({ era: b }, "era"), f = (b) => {
      switch (b) {
        case "S":
          return this.num(e.millisecond);
        case "u":
        case "SSS":
          return this.num(e.millisecond, 3);
        case "s":
          return this.num(e.second);
        case "ss":
          return this.num(e.second, 2);
        case "uu":
          return this.num(Math.floor(e.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(e.millisecond / 100));
        case "m":
          return this.num(e.minute);
        case "mm":
          return this.num(e.minute, 2);
        case "h":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12);
        case "hh":
          return this.num(e.hour % 12 === 0 ? 12 : e.hour % 12, 2);
        case "H":
          return this.num(e.hour);
        case "HH":
          return this.num(e.hour, 2);
        case "Z":
          return a({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return a({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return a({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return e.zone.offsetName(e.ts, { format: "short", locale: this.loc.locale });
        case "ZZZZZ":
          return e.zone.offsetName(e.ts, { format: "long", locale: this.loc.locale });
        case "z":
          return e.zoneName;
        case "a":
          return o();
        case "d":
          return s ? n({ day: "numeric" }, "day") : this.num(e.day);
        case "dd":
          return s ? n({ day: "2-digit" }, "day") : this.num(e.day, 2);
        case "c":
          return this.num(e.weekday);
        case "ccc":
          return h("short", !0);
        case "cccc":
          return h("long", !0);
        case "ccccc":
          return h("narrow", !0);
        case "E":
          return this.num(e.weekday);
        case "EEE":
          return h("short", !1);
        case "EEEE":
          return h("long", !1);
        case "EEEEE":
          return h("narrow", !1);
        case "L":
          return s ? n({ month: "numeric", day: "numeric" }, "month") : this.num(e.month);
        case "LL":
          return s ? n({ month: "2-digit", day: "numeric" }, "month") : this.num(e.month, 2);
        case "LLL":
          return l("short", !0);
        case "LLLL":
          return l("long", !0);
        case "LLLLL":
          return l("narrow", !0);
        case "M":
          return s ? n({ month: "numeric" }, "month") : this.num(e.month);
        case "MM":
          return s ? n({ month: "2-digit" }, "month") : this.num(e.month, 2);
        case "MMM":
          return l("short", !1);
        case "MMMM":
          return l("long", !1);
        case "MMMMM":
          return l("narrow", !1);
        case "y":
          return s ? n({ year: "numeric" }, "year") : this.num(e.year);
        case "yy":
          return s ? n({ year: "2-digit" }, "year") : this.num(e.year.toString().slice(-2), 2);
        case "yyyy":
          return s ? n({ year: "numeric" }, "year") : this.num(e.year, 4);
        case "yyyyyy":
          return s ? n({ year: "numeric" }, "year") : this.num(e.year, 6);
        case "G":
          return d("short");
        case "GG":
          return d("long");
        case "GGGGG":
          return d("narrow");
        case "kk":
          return this.num(e.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(e.weekYear, 4);
        case "W":
          return this.num(e.weekNumber);
        case "WW":
          return this.num(e.weekNumber, 2);
        case "n":
          return this.num(e.localWeekNumber);
        case "nn":
          return this.num(e.localWeekNumber, 2);
        case "ii":
          return this.num(e.localWeekYear.toString().slice(-2), 2);
        case "iiii":
          return this.num(e.localWeekYear, 4);
        case "o":
          return this.num(e.ordinal);
        case "ooo":
          return this.num(e.ordinal, 3);
        case "q":
          return this.num(e.quarter);
        case "qq":
          return this.num(e.quarter, 2);
        case "X":
          return this.num(Math.floor(e.ts / 1e3));
        case "x":
          return this.num(e.ts);
        default:
          return u(b);
      }
    };
    return Br(Me.parseFormat(t), f);
  }
  formatDurationFromString(e, t) {
    const i = this.opts.signMode === "negativeLargestOnly" ? -1 : 1, s = (u) => {
      switch (u[0]) {
        case "S":
          return "milliseconds";
        case "s":
          return "seconds";
        case "m":
          return "minutes";
        case "h":
          return "hours";
        case "d":
          return "days";
        case "w":
          return "weeks";
        case "M":
          return "months";
        case "y":
          return "years";
        default:
          return null;
      }
    }, n = (u, d) => (f) => {
      const b = s(f);
      if (b) {
        const T = d.isNegativeDuration && b !== d.largestUnit ? i : 1;
        let E;
        return this.opts.signMode === "negativeLargestOnly" && b !== d.largestUnit ? E = "never" : this.opts.signMode === "all" ? E = "always" : E = "auto", this.num(u.get(b) * T, f.length, E);
      } else
        return f;
    }, a = Me.parseFormat(t), o = a.reduce(
      (u, { literal: d, val: f }) => d ? u : u.concat(f),
      []
    ), l = e.shiftTo(...o.map(s).filter((u) => u)), h = {
      isNegativeDuration: l < 0,
      // this relies on "collapsed" being based on "shiftTo", which builds up the object
      // in order
      largestUnit: Object.keys(l.values)[0]
    };
    return Br(a, n(l, h));
  }
}
const lo = /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
function yi(...r) {
  const e = r.reduce((t, i) => t + i.source, "");
  return RegExp(`^${e}$`);
}
function Ci(...r) {
  return (e) => r.reduce(
    ([t, i, s], n) => {
      const [a, o, l] = n(e, s);
      return [{ ...t, ...a }, o || i, l];
    },
    [{}, null, 1]
  ).slice(0, 2);
}
function Ei(r, ...e) {
  if (r == null)
    return [null, null];
  for (const [t, i] of e) {
    const s = t.exec(r);
    if (s)
      return i(s);
  }
  return [null, null];
}
function ho(...r) {
  return (e, t) => {
    const i = {};
    let s;
    for (s = 0; s < r.length; s++)
      i[r[s]] = ft(e[t + s]);
    return [i, null, t + s];
  };
}
const uo = /(?:([Zz])|([+-]\d\d)(?::?(\d\d))?)/, vh = `(?:${uo.source}?(?:\\[(${lo.source})\\])?)?`, mr = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/, co = RegExp(`${mr.source}${vh}`), pr = RegExp(`(?:[Tt]${co.source})?`), wh = /([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, yh = /(\d{4})-?W(\d\d)(?:-?(\d))?/, Ch = /(\d{4})-?(\d{3})/, Eh = ho("weekYear", "weekNumber", "weekDay"), Th = ho("year", "ordinal"), kh = /(\d{4})-(\d\d)-(\d\d)/, fo = RegExp(
  `${mr.source} ?(?:${uo.source}|(${lo.source}))?`
), Rh = RegExp(`(?: ${fo.source})?`);
function hi(r, e, t) {
  const i = r[e];
  return j(i) ? t : ft(i);
}
function xh(r, e) {
  return [{
    year: hi(r, e),
    month: hi(r, e + 1, 1),
    day: hi(r, e + 2, 1)
  }, null, e + 3];
}
function Ti(r, e) {
  return [{
    hours: hi(r, e, 0),
    minutes: hi(r, e + 1, 0),
    seconds: hi(r, e + 2, 0),
    milliseconds: cr(r[e + 3])
  }, null, e + 4];
}
function is(r, e) {
  const t = !r[e] && !r[e + 1], i = Is(r[e + 1], r[e + 2]), s = t ? null : Fe.instance(i);
  return [{}, s, e + 3];
}
function ss(r, e) {
  const t = r[e] ? ut.create(r[e]) : null;
  return [{}, t, e + 1];
}
const Mh = RegExp(`^T?${mr.source}$`), Sh = /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function Dh(r) {
  const [e, t, i, s, n, a, o, l, h] = r, u = e[0] === "-", d = l && l[0] === "-", f = (b, T = !1) => b !== void 0 && (T || b && u) ? -b : b;
  return [
    {
      years: f(Ft(t)),
      months: f(Ft(i)),
      weeks: f(Ft(s)),
      days: f(Ft(n)),
      hours: f(Ft(a)),
      minutes: f(Ft(o)),
      seconds: f(Ft(l), l === "-0"),
      milliseconds: f(cr(h), d)
    }
  ];
}
const Lh = {
  GMT: 0,
  EDT: -4 * 60,
  EST: -5 * 60,
  CDT: -5 * 60,
  CST: -6 * 60,
  MDT: -6 * 60,
  MST: -7 * 60,
  PDT: -7 * 60,
  PST: -8 * 60
};
function gr(r, e, t, i, s, n, a) {
  const o = {
    year: e.length === 2 ? Cn(ft(e)) : ft(e),
    month: to.indexOf(t) + 1,
    day: ft(i),
    hour: ft(s),
    minute: ft(n)
  };
  return a && (o.second = ft(a)), r && (o.weekday = r.length > 3 ? so.indexOf(r) + 1 : no.indexOf(r) + 1), o;
}
const Fh = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function Oh(r) {
  const [
    ,
    e,
    t,
    i,
    s,
    n,
    a,
    o,
    l,
    h,
    u,
    d
  ] = r, f = gr(e, s, i, t, n, a, o);
  let b;
  return l ? b = Lh[l] : h ? b = 0 : b = Is(u, d), [f, new Fe(b)];
}
function zh(r) {
  return r.replace(/\([^()]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim();
}
const Hh = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/, Ph = /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/, Ah = /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Wr(r) {
  const [, e, t, i, s, n, a, o] = r;
  return [gr(e, s, i, t, n, a, o), Fe.utcInstance];
}
function _h(r) {
  const [, e, t, i, s, n, a, o] = r;
  return [gr(e, o, t, i, s, n, a), Fe.utcInstance];
}
const Ih = yi(wh, pr), Nh = yi(yh, pr), Vh = yi(Ch, pr), Bh = yi(co), mo = Ci(
  xh,
  Ti,
  is,
  ss
), Wh = Ci(
  Eh,
  Ti,
  is,
  ss
), jh = Ci(
  Th,
  Ti,
  is,
  ss
), Uh = Ci(
  Ti,
  is,
  ss
);
function Gh(r) {
  return Ei(
    r,
    [Ih, mo],
    [Nh, Wh],
    [Vh, jh],
    [Bh, Uh]
  );
}
function $h(r) {
  return Ei(zh(r), [Fh, Oh]);
}
function Yh(r) {
  return Ei(
    r,
    [Hh, Wr],
    [Ph, Wr],
    [Ah, _h]
  );
}
function qh(r) {
  return Ei(r, [Sh, Dh]);
}
const Zh = Ci(Ti);
function Jh(r) {
  return Ei(r, [Mh, Zh]);
}
const Kh = yi(kh, Rh), Xh = yi(fo), Qh = Ci(
  Ti,
  is,
  ss
);
function eu(r) {
  return Ei(
    r,
    [Kh, mo],
    [Xh, Qh]
  );
}
const jr = "Invalid Duration", po = {
  weeks: {
    days: 7,
    hours: 7 * 24,
    minutes: 7 * 24 * 60,
    seconds: 7 * 24 * 60 * 60,
    milliseconds: 7 * 24 * 60 * 60 * 1e3
  },
  days: {
    hours: 24,
    minutes: 24 * 60,
    seconds: 24 * 60 * 60,
    milliseconds: 24 * 60 * 60 * 1e3
  },
  hours: { minutes: 60, seconds: 60 * 60, milliseconds: 60 * 60 * 1e3 },
  minutes: { seconds: 60, milliseconds: 60 * 1e3 },
  seconds: { milliseconds: 1e3 }
}, tu = {
  years: {
    quarters: 4,
    months: 12,
    weeks: 52,
    days: 365,
    hours: 365 * 24,
    minutes: 365 * 24 * 60,
    seconds: 365 * 24 * 60 * 60,
    milliseconds: 365 * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: 13,
    days: 91,
    hours: 91 * 24,
    minutes: 91 * 24 * 60,
    seconds: 91 * 24 * 60 * 60,
    milliseconds: 91 * 24 * 60 * 60 * 1e3
  },
  months: {
    weeks: 4,
    days: 30,
    hours: 30 * 24,
    minutes: 30 * 24 * 60,
    seconds: 30 * 24 * 60 * 60,
    milliseconds: 30 * 24 * 60 * 60 * 1e3
  },
  ...po
}, We = 146097 / 400, Qt = 146097 / 4800, iu = {
  years: {
    quarters: 4,
    months: 12,
    weeks: We / 7,
    days: We,
    hours: We * 24,
    minutes: We * 24 * 60,
    seconds: We * 24 * 60 * 60,
    milliseconds: We * 24 * 60 * 60 * 1e3
  },
  quarters: {
    months: 3,
    weeks: We / 28,
    days: We / 4,
    hours: We * 24 / 4,
    minutes: We * 24 * 60 / 4,
    seconds: We * 24 * 60 * 60 / 4,
    milliseconds: We * 24 * 60 * 60 * 1e3 / 4
  },
  months: {
    weeks: Qt / 7,
    days: Qt,
    hours: Qt * 24,
    minutes: Qt * 24 * 60,
    seconds: Qt * 24 * 60 * 60,
    milliseconds: Qt * 24 * 60 * 60 * 1e3
  },
  ...po
}, _t = [
  "years",
  "quarters",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
  "milliseconds"
], su = _t.slice(0).reverse();
function rt(r, e, t = !1) {
  const i = {
    values: t ? e.values : { ...r.values, ...e.values || {} },
    loc: r.loc.clone(e.loc),
    conversionAccuracy: e.conversionAccuracy || r.conversionAccuracy,
    matrix: e.matrix || r.matrix
  };
  return new Q(i);
}
function go(r, e) {
  let t = e.milliseconds ?? 0;
  for (const i of su.slice(1))
    e[i] && (t += e[i] * r[i].milliseconds);
  return t;
}
function Ur(r, e) {
  const t = go(r, e) < 0 ? -1 : 1;
  _t.reduceRight((i, s) => {
    if (j(e[s]))
      return i;
    if (i) {
      const n = e[i] * t, a = r[s][i], o = Math.floor(n / a);
      e[s] += o * t, e[i] -= o * a * t;
    }
    return s;
  }, null), _t.reduce((i, s) => {
    if (j(e[s]))
      return i;
    if (i) {
      const n = e[i] % 1;
      e[i] -= n, e[s] += n * r[i][s];
    }
    return s;
  }, null);
}
function Gr(r) {
  const e = {};
  for (const [t, i] of Object.entries(r))
    i !== 0 && (e[t] = i);
  return e;
}
class Q {
  /**
   * @private
   */
  constructor(e) {
    const t = e.conversionAccuracy === "longterm" || !1;
    let i = t ? iu : tu;
    e.matrix && (i = e.matrix), this.values = e.values, this.loc = e.loc || oe.create(), this.conversionAccuracy = t ? "longterm" : "casual", this.invalid = e.invalid || null, this.matrix = i, this.isLuxonDuration = !0;
  }
  /**
   * Create Duration from a number of milliseconds.
   * @param {number} count of milliseconds
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  static fromMillis(e, t) {
    return Q.fromObject({ milliseconds: e }, t);
  }
  /**
   * Create a Duration from a JavaScript object with keys like 'years' and 'hours'.
   * If this object is empty then a zero milliseconds duration is returned.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.years
   * @param {number} obj.quarters
   * @param {number} obj.months
   * @param {number} obj.weeks
   * @param {number} obj.days
   * @param {number} obj.hours
   * @param {number} obj.minutes
   * @param {number} obj.seconds
   * @param {number} obj.milliseconds
   * @param {Object} [opts=[]] - options for creating this Duration
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the custom conversion system to use
   * @return {Duration}
   */
  static fromObject(e, t = {}) {
    if (e == null || typeof e != "object")
      throw new ke(
        `Duration.fromObject: argument expected to be an object, got ${e === null ? "null" : typeof e}`
      );
    return new Q({
      values: Os(e, Q.normalizeUnit),
      loc: oe.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
      matrix: t.matrix
    });
  }
  /**
   * Create a Duration from DurationLike.
   *
   * @param {Object | number | Duration} durationLike
   * One of:
   * - object with keys like 'years' and 'hours'.
   * - number representing milliseconds
   * - Duration instance
   * @return {Duration}
   */
  static fromDurationLike(e) {
    if (Rt(e))
      return Q.fromMillis(e);
    if (Q.isDuration(e))
      return e;
    if (typeof e == "object")
      return Q.fromObject(e);
    throw new ke(
      `Unknown duration argument ${e} of type ${typeof e}`
    );
  }
  /**
   * Create a Duration from an ISO 8601 duration string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the preset conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromISO('P3Y6M1W4DT12H30M5S').toObject() //=> { years: 3, months: 6, weeks: 1, days: 4, hours: 12, minutes: 30, seconds: 5 }
   * @example Duration.fromISO('PT23H').toObject() //=> { hours: 23 }
   * @example Duration.fromISO('P5Y3M').toObject() //=> { years: 5, months: 3 }
   * @return {Duration}
   */
  static fromISO(e, t) {
    const [i] = qh(e);
    return i ? Q.fromObject(i, t) : Q.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create a Duration from an ISO 8601 time string.
   * @param {string} text - text to parse
   * @param {Object} opts - options for parsing
   * @param {string} [opts.locale='en-US'] - the locale to use
   * @param {string} opts.numberingSystem - the numbering system to use
   * @param {string} [opts.conversionAccuracy='casual'] - the preset conversion system to use
   * @param {string} [opts.matrix=Object] - the conversion system to use
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @example Duration.fromISOTime('11:22:33.444').toObject() //=> { hours: 11, minutes: 22, seconds: 33, milliseconds: 444 }
   * @example Duration.fromISOTime('11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T11:00').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @example Duration.fromISOTime('T1100').toObject() //=> { hours: 11, minutes: 0, seconds: 0 }
   * @return {Duration}
   */
  static fromISOTime(e, t) {
    const [i] = Jh(e);
    return i ? Q.fromObject(i, t) : Q.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Create an invalid Duration.
   * @param {string} reason - simple string of why this datetime is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Duration}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new ke("need to specify a reason the Duration is invalid");
    const i = e instanceof Xe ? e : new Xe(e, t);
    if (pe.throwOnInvalid)
      throw new Dl(i);
    return new Q({ invalid: i });
  }
  /**
   * @private
   */
  static normalizeUnit(e) {
    const t = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds"
    }[e && e.toLowerCase()];
    if (!t) throw new Ta(e);
    return t;
  }
  /**
   * Check if an object is a Duration. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDuration(e) {
    return e && e.isLuxonDuration || !1;
  }
  /**
   * Get  the locale of a Duration, such 'en-GB'
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a Duration, such 'beng'. The numbering system is used when formatting the Duration
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Returns a string representation of this Duration formatted according to the specified format string. You may use these tokens:
   * * `S` for milliseconds
   * * `s` for seconds
   * * `m` for minutes
   * * `h` for hours
   * * `d` for days
   * * `w` for weeks
   * * `M` for months
   * * `y` for years
   * Notes:
   * * Add padding by repeating the token, e.g. "yy" pads the years to two digits, "hhhh" pads the hours out to four digits
   * * Tokens can be escaped by wrapping with single quotes.
   * * The duration will be converted to the set of units in the format string using {@link Duration#shiftTo} and the Durations's conversion accuracy setting.
   * @param {string} fmt - the format string
   * @param {Object} opts - options
   * @param {boolean} [opts.floor=true] - floor numerical values
   * @param {'negative'|'all'|'negativeLargestOnly'} [opts.signMode=negative] - How to handle signs
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("y d s") //=> "1 6 2"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("yy dd sss") //=> "01 06 002"
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toFormat("M S") //=> "12 518402000"
   * @example Duration.fromObject({ days: 6, seconds: 2 }).toFormat("d s", { signMode: "all" }) //=> "+6 +2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "all" }) //=> "-6 -2"
   * @example Duration.fromObject({ days: -6, seconds: -2 }).toFormat("d s", { signMode: "negativeLargestOnly" }) //=> "-6 2"
   * @return {string}
   */
  toFormat(e, t = {}) {
    const i = {
      ...t,
      floor: t.round !== !1 && t.floor !== !1
    };
    return this.isValid ? Me.create(this.loc, i).formatDurationFromString(this, e) : jr;
  }
  /**
   * Returns a string representation of a Duration with all units included.
   * To modify its behavior, use `listStyle` and any Intl.NumberFormat option, though `unitDisplay` is especially relevant.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#options
   * @param {Object} opts - Formatting options. Accepts the same keys as the options parameter of the native `Intl.NumberFormat` constructor, as well as `listStyle`.
   * @param {string} [opts.listStyle='narrow'] - How to format the merged list. Corresponds to the `style` property of the options parameter of the native `Intl.ListFormat` constructor.
   * @param {boolean} [opts.showZeros=true] - Show all units previously used by the duration even if they are zero
   * @example
   * ```js
   * var dur = Duration.fromObject({ months: 1, weeks: 0, hours: 5, minutes: 6 })
   * dur.toHuman() //=> '1 month, 0 weeks, 5 hours, 6 minutes'
   * dur.toHuman({ listStyle: "long" }) //=> '1 month, 0 weeks, 5 hours, and 6 minutes'
   * dur.toHuman({ unitDisplay: "short" }) //=> '1 mth, 0 wks, 5 hr, 6 min'
   * dur.toHuman({ showZeros: false }) //=> '1 month, 5 hours, 6 minutes'
   * ```
   */
  toHuman(e = {}) {
    if (!this.isValid) return jr;
    const t = e.showZeros !== !1, i = _t.map((s) => {
      const n = this.values[s];
      return j(n) || n === 0 && !t ? null : this.loc.numberFormatter({ style: "unit", unitDisplay: "long", ...e, unit: s.slice(0, -1) }).format(n);
    }).filter((s) => s);
    return this.loc.listFormatter({ type: "conjunction", style: e.listStyle || "narrow", ...e }).format(i);
  }
  /**
   * Returns a JavaScript object with this Duration's values.
   * @example Duration.fromObject({ years: 1, days: 6, seconds: 2 }).toObject() //=> { years: 1, days: 6, seconds: 2 }
   * @return {Object}
   */
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Durations
   * @example Duration.fromObject({ years: 3, seconds: 45 }).toISO() //=> 'P3YT45S'
   * @example Duration.fromObject({ months: 4, seconds: 45 }).toISO() //=> 'P4MT45S'
   * @example Duration.fromObject({ months: 5 }).toISO() //=> 'P5M'
   * @example Duration.fromObject({ minutes: 5 }).toISO() //=> 'PT5M'
   * @example Duration.fromObject({ milliseconds: 6 }).toISO() //=> 'PT0.006S'
   * @return {string}
   */
  toISO() {
    if (!this.isValid) return null;
    let e = "P";
    return this.years !== 0 && (e += this.years + "Y"), (this.months !== 0 || this.quarters !== 0) && (e += this.months + this.quarters * 3 + "M"), this.weeks !== 0 && (e += this.weeks + "W"), this.days !== 0 && (e += this.days + "D"), (this.hours !== 0 || this.minutes !== 0 || this.seconds !== 0 || this.milliseconds !== 0) && (e += "T"), this.hours !== 0 && (e += this.hours + "H"), this.minutes !== 0 && (e += this.minutes + "M"), (this.seconds !== 0 || this.milliseconds !== 0) && (e += fr(this.seconds + this.milliseconds / 1e3, 3) + "S"), e === "P" && (e += "T0S"), e;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Duration, formatted as a time of day.
   * Note that this will return null if the duration is invalid, negative, or equal to or greater than 24 hours.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Times
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @example Duration.fromObject({ hours: 11 }).toISOTime() //=> '11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressMilliseconds: true }) //=> '11:00:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ suppressSeconds: true }) //=> '11:00'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ includePrefix: true }) //=> 'T11:00:00.000'
   * @example Duration.fromObject({ hours: 11 }).toISOTime({ format: 'basic' }) //=> '110000.000'
   * @return {string}
   */
  toISOTime(e = {}) {
    if (!this.isValid) return null;
    const t = this.toMillis();
    return t < 0 || t >= 864e5 ? null : (e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
      includeOffset: !1
    }, U.fromMillis(t, { zone: "UTC" }).toISOTime(e));
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns an ISO 8601 representation of this Duration appropriate for use in debugging.
   * @return {string}
   */
  toString() {
    return this.toISO();
  }
  /**
   * Returns a string representation of this Duration appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Duration { values: ${JSON.stringify(this.values)} }` : `Duration { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns an milliseconds value of this Duration.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? go(this.matrix, this.values) : NaN;
  }
  /**
   * Returns an milliseconds value of this Duration. Alias of {@link toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Make this Duration longer by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  plus(e) {
    if (!this.isValid) return this;
    const t = Q.fromDurationLike(e), i = {};
    for (const s of _t)
      (wi(t.values, s) || wi(this.values, s)) && (i[s] = t.get(s) + this.get(s));
    return rt(this, { values: i }, !0);
  }
  /**
   * Make this Duration shorter by the specified amount. Return a newly-constructed Duration.
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @return {Duration}
   */
  minus(e) {
    if (!this.isValid) return this;
    const t = Q.fromDurationLike(e);
    return this.plus(t.negate());
  }
  /**
   * Scale this Duration by the specified amount. Return a newly-constructed Duration.
   * @param {function} fn - The function to apply to each unit. Arity is 1 or 2: the value of the unit and, optionally, the unit name. Must return a number.
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits(x => x * 2) //=> { hours: 2, minutes: 60 }
   * @example Duration.fromObject({ hours: 1, minutes: 30 }).mapUnits((x, u) => u === "hours" ? x * 2 : x) //=> { hours: 2, minutes: 30 }
   * @return {Duration}
   */
  mapUnits(e) {
    if (!this.isValid) return this;
    const t = {};
    for (const i of Object.keys(this.values))
      t[i] = eo(e(this.values[i], i));
    return rt(this, { values: t }, !0);
  }
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example Duration.fromObject({years: 2, days: 3}).get('years') //=> 2
   * @example Duration.fromObject({years: 2, days: 3}).get('months') //=> 0
   * @example Duration.fromObject({years: 2, days: 3}).get('days') //=> 3
   * @return {number}
   */
  get(e) {
    return this[Q.normalizeUnit(e)];
  }
  /**
   * "Set" the values of specified units. Return a newly-constructed Duration.
   * @param {Object} values - a mapping of units to numbers
   * @example dur.set({ years: 2017 })
   * @example dur.set({ hours: 8, minutes: 30 })
   * @return {Duration}
   */
  set(e) {
    if (!this.isValid) return this;
    const t = { ...this.values, ...Os(e, Q.normalizeUnit) };
    return rt(this, { values: t });
  }
  /**
   * "Set" the locale and/or numberingSystem.  Returns a newly-constructed Duration.
   * @example dur.reconfigure({ locale: 'en-GB' })
   * @return {Duration}
   */
  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: i, matrix: s } = {}) {
    const a = { loc: this.loc.clone({ locale: e, numberingSystem: t }), matrix: s, conversionAccuracy: i };
    return rt(this, a);
  }
  /**
   * Return the length of the duration in the specified unit.
   * @param {string} unit - a unit such as 'minutes' or 'days'
   * @example Duration.fromObject({years: 1}).as('days') //=> 365
   * @example Duration.fromObject({years: 1}).as('months') //=> 12
   * @example Duration.fromObject({hours: 60}).as('days') //=> 2.5
   * @return {number}
   */
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  /**
   * Reduce this Duration to its canonical representation in its current units.
   * Assuming the overall value of the Duration is positive, this means:
   * - excessive values for lower-order units are converted to higher-order units (if possible, see first and second example)
   * - negative lower-order units are converted to higher order units (there must be such a higher order unit, otherwise
   *   the overall value would be negative, see third example)
   * - fractional values for higher-order units are converted to lower-order units (if possible, see fourth example)
   *
   * If the overall value is negative, the result of this method is equivalent to `this.negate().normalize().negate()`.
   * @example Duration.fromObject({ years: 2, days: 5000 }).normalize().toObject() //=> { years: 15, days: 255 }
   * @example Duration.fromObject({ days: 5000 }).normalize().toObject() //=> { days: 5000 }
   * @example Duration.fromObject({ hours: 12, minutes: -45 }).normalize().toObject() //=> { hours: 11, minutes: 15 }
   * @example Duration.fromObject({ years: 2.5, days: 0, hours: 0 }).normalize().toObject() //=> { years: 2, days: 182, hours: 12 }
   * @return {Duration}
   */
  normalize() {
    if (!this.isValid) return this;
    const e = this.toObject();
    return Ur(this.matrix, e), rt(this, { values: e }, !0);
  }
  /**
   * Rescale units to its largest representation
   * @example Duration.fromObject({ milliseconds: 90000 }).rescale().toObject() //=> { minutes: 1, seconds: 30 }
   * @return {Duration}
   */
  rescale() {
    if (!this.isValid) return this;
    const e = Gr(this.normalize().shiftToAll().toObject());
    return rt(this, { values: e }, !0);
  }
  /**
   * Convert this Duration into its representation in a different set of units.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).shiftTo('minutes', 'milliseconds').toObject() //=> { minutes: 60, milliseconds: 30000 }
   * @return {Duration}
   */
  shiftTo(...e) {
    if (!this.isValid) return this;
    if (e.length === 0)
      return this;
    e = e.map((a) => Q.normalizeUnit(a));
    const t = {}, i = {}, s = this.toObject();
    let n;
    for (const a of _t)
      if (e.indexOf(a) >= 0) {
        n = a;
        let o = 0;
        for (const h in i)
          o += this.matrix[h][a] * i[h], i[h] = 0;
        Rt(s[a]) && (o += s[a]);
        const l = Math.trunc(o);
        t[a] = l, i[a] = (o * 1e3 - l * 1e3) / 1e3;
      } else Rt(s[a]) && (i[a] = s[a]);
    for (const a in i)
      i[a] !== 0 && (t[n] += a === n ? i[a] : i[a] / this.matrix[n][a]);
    return Ur(this.matrix, t), rt(this, { values: t }, !0);
  }
  /**
   * Shift this Duration to all available units.
   * Same as shiftTo("years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds")
   * @return {Duration}
   */
  shiftToAll() {
    return this.isValid ? this.shiftTo(
      "years",
      "months",
      "weeks",
      "days",
      "hours",
      "minutes",
      "seconds",
      "milliseconds"
    ) : this;
  }
  /**
   * Return the negative of this Duration.
   * @example Duration.fromObject({ hours: 1, seconds: 30 }).negate().toObject() //=> { hours: -1, seconds: -30 }
   * @return {Duration}
   */
  negate() {
    if (!this.isValid) return this;
    const e = {};
    for (const t of Object.keys(this.values))
      e[t] = this.values[t] === 0 ? 0 : -this.values[t];
    return rt(this, { values: e }, !0);
  }
  /**
   * Removes all units with values equal to 0 from this Duration.
   * @example Duration.fromObject({ years: 2, days: 0, hours: 0, minutes: 0 }).removeZeros().toObject() //=> { years: 2 }
   * @return {Duration}
   */
  removeZeros() {
    if (!this.isValid) return this;
    const e = Gr(this.values);
    return rt(this, { values: e }, !0);
  }
  /**
   * Get the years.
   * @type {number}
   */
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  /**
   * Get the quarters.
   * @type {number}
   */
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  /**
   * Get the months.
   * @type {number}
   */
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  /**
   * Get the weeks
   * @type {number}
   */
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  /**
   * Get the days.
   * @type {number}
   */
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  /**
   * Get the hours.
   * @type {number}
   */
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  /**
   * Get the minutes.
   * @type {number}
   */
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  /**
   * Get the seconds.
   * @return {number}
   */
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  /**
   * Get the milliseconds.
   * @return {number}
   */
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  /**
   * Returns whether the Duration is invalid. Invalid durations are returned by diff operations
   * on invalid DateTimes or Intervals.
   * @return {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this Duration became invalid, or null if the Duration is valid
   * @return {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Duration became invalid, or null if the Duration is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Equality check
   * Two Durations are equal iff they have the same units and the same values for each unit.
   * @param {Duration} other
   * @return {boolean}
   */
  equals(e) {
    if (!this.isValid || !e.isValid || !this.loc.equals(e.loc))
      return !1;
    function t(i, s) {
      return i === void 0 || i === 0 ? s === void 0 || s === 0 : i === s;
    }
    for (const i of _t)
      if (!t(this.values[i], e.values[i]))
        return !1;
    return !0;
  }
}
const ei = "Invalid Interval";
function nu(r, e) {
  return !r || !r.isValid ? me.invalid("missing or invalid start") : !e || !e.isValid ? me.invalid("missing or invalid end") : e < r ? me.invalid(
    "end before start",
    `The end of an interval must be after its start, but you had start=${r.toISO()} and end=${e.toISO()}`
  ) : null;
}
class me {
  /**
   * @private
   */
  constructor(e) {
    this.s = e.start, this.e = e.end, this.invalid = e.invalid || null, this.isLuxonInterval = !0;
  }
  /**
   * Create an invalid Interval.
   * @param {string} reason - simple string of why this Interval is invalid. Should not contain parameters or anything else data-dependent
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {Interval}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new ke("need to specify a reason the Interval is invalid");
    const i = e instanceof Xe ? e : new Xe(e, t);
    if (pe.throwOnInvalid)
      throw new Sl(i);
    return new me({ invalid: i });
  }
  /**
   * Create an Interval from a start DateTime and an end DateTime. Inclusive of the start but not the end.
   * @param {DateTime|Date|Object} start
   * @param {DateTime|Date|Object} end
   * @return {Interval}
   */
  static fromDateTimes(e, t) {
    const i = Pi(e), s = Pi(t), n = nu(i, s);
    return n ?? new me({
      start: i,
      end: s
    });
  }
  /**
   * Create an Interval from a start DateTime and a Duration to extend to.
   * @param {DateTime|Date|Object} start
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static after(e, t) {
    const i = Q.fromDurationLike(t), s = Pi(e);
    return me.fromDateTimes(s, s.plus(i));
  }
  /**
   * Create an Interval from an end DateTime and a Duration to extend backwards to.
   * @param {DateTime|Date|Object} end
   * @param {Duration|Object|number} duration - the length of the Interval.
   * @return {Interval}
   */
  static before(e, t) {
    const i = Q.fromDurationLike(t), s = Pi(e);
    return me.fromDateTimes(s.minus(i), s);
  }
  /**
   * Create an Interval from an ISO 8601 string.
   * Accepts `<start>/<end>`, `<start>/<duration>`, and `<duration>/<end>` formats.
   * @param {string} text - the ISO string to parse
   * @param {Object} [opts] - options to pass {@link DateTime#fromISO} and optionally {@link Duration#fromISO}
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {Interval}
   */
  static fromISO(e, t) {
    const [i, s] = (e || "").split("/", 2);
    if (i && s) {
      let n, a;
      try {
        n = U.fromISO(i, t), a = n.isValid;
      } catch {
        a = !1;
      }
      let o, l;
      try {
        o = U.fromISO(s, t), l = o.isValid;
      } catch {
        l = !1;
      }
      if (a && l)
        return me.fromDateTimes(n, o);
      if (a) {
        const h = Q.fromISO(s, t);
        if (h.isValid)
          return me.after(n, h);
      } else if (l) {
        const h = Q.fromISO(i, t);
        if (h.isValid)
          return me.before(o, h);
      }
    }
    return me.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  /**
   * Check if an object is an Interval. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isInterval(e) {
    return e && e.isLuxonInterval || !1;
  }
  /**
   * Returns the start of the Interval
   * @type {DateTime}
   */
  get start() {
    return this.isValid ? this.s : null;
  }
  /**
   * Returns the end of the Interval. This is the first instant which is not part of the interval
   * (Interval is half-open).
   * @type {DateTime}
   */
  get end() {
    return this.isValid ? this.e : null;
  }
  /**
   * Returns the last DateTime included in the interval (since end is not part of the interval)
   * @type {DateTime}
   */
  get lastDateTime() {
    return this.isValid && this.e ? this.e.minus(1) : null;
  }
  /**
   * Returns whether this Interval's end is at least its start, meaning that the Interval isn't 'backwards'.
   * @type {boolean}
   */
  get isValid() {
    return this.invalidReason === null;
  }
  /**
   * Returns an error code if this Interval is invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this Interval became invalid, or null if the Interval is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Returns the length of the Interval in the specified unit.
   * @param {string} unit - the unit (such as 'hours' or 'days') to return the length in.
   * @return {number}
   */
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  /**
   * Returns the count of minutes, hours, days, months, or years included in the Interval, even in part.
   * Unlike {@link Interval#length} this counts sections of the calendar, not periods of time, e.g. specifying 'day'
   * asks 'what dates are included in this interval?', not 'how many days long is this interval?'
   * @param {string} [unit='milliseconds'] - the unit of time to count.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; this operation will always use the locale of the start DateTime
   * @return {number}
   */
  count(e = "milliseconds", t) {
    if (!this.isValid) return NaN;
    const i = this.start.startOf(e, t);
    let s;
    return t != null && t.useLocaleWeeks ? s = this.end.reconfigure({ locale: i.locale }) : s = this.end, s = s.startOf(e, t), Math.floor(s.diff(i, e).get(e)) + (s.valueOf() !== this.end.valueOf());
  }
  /**
   * Returns whether this Interval's start and end are both in the same unit of time
   * @param {string} unit - the unit of time to check sameness on
   * @return {boolean}
   */
  hasSame(e) {
    return this.isValid ? this.isEmpty() || this.e.minus(1).hasSame(this.s, e) : !1;
  }
  /**
   * Return whether this Interval has the same start and end DateTimes.
   * @return {boolean}
   */
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  /**
   * Return whether this Interval's start is after the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isAfter(e) {
    return this.isValid ? this.s > e : !1;
  }
  /**
   * Return whether this Interval's end is before the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  isBefore(e) {
    return this.isValid ? this.e <= e : !1;
  }
  /**
   * Return whether this Interval contains the specified DateTime.
   * @param {DateTime} dateTime
   * @return {boolean}
   */
  contains(e) {
    return this.isValid ? this.s <= e && this.e > e : !1;
  }
  /**
   * "Sets" the start and/or end dates. Returns a newly-constructed Interval.
   * @param {Object} values - the values to set
   * @param {DateTime} values.start - the starting DateTime
   * @param {DateTime} values.end - the ending DateTime
   * @return {Interval}
   */
  set({ start: e, end: t } = {}) {
    return this.isValid ? me.fromDateTimes(e || this.s, t || this.e) : this;
  }
  /**
   * Split this Interval at each of the specified DateTimes
   * @param {...DateTime} dateTimes - the unit of time to count.
   * @return {Array}
   */
  splitAt(...e) {
    if (!this.isValid) return [];
    const t = e.map(Pi).filter((a) => this.contains(a)).sort((a, o) => a.toMillis() - o.toMillis()), i = [];
    let { s } = this, n = 0;
    for (; s < this.e; ) {
      const a = t[n] || this.e, o = +a > +this.e ? this.e : a;
      i.push(me.fromDateTimes(s, o)), s = o, n += 1;
    }
    return i;
  }
  /**
   * Split this Interval into smaller Intervals, each of the specified length.
   * Left over time is grouped into a smaller interval
   * @param {Duration|Object|number} duration - The length of each resulting interval.
   * @return {Array}
   */
  splitBy(e) {
    const t = Q.fromDurationLike(e);
    if (!this.isValid || !t.isValid || t.as("milliseconds") === 0)
      return [];
    let { s: i } = this, s = 1, n;
    const a = [];
    for (; i < this.e; ) {
      const o = this.start.plus(t.mapUnits((l) => l * s));
      n = +o > +this.e ? this.e : o, a.push(me.fromDateTimes(i, n)), i = n, s += 1;
    }
    return a;
  }
  /**
   * Split this Interval into the specified number of smaller intervals.
   * @param {number} numberOfParts - The number of Intervals to divide the Interval into.
   * @return {Array}
   */
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  /**
   * Return whether this Interval overlaps with the specified Interval
   * @param {Interval} other
   * @return {boolean}
   */
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  /**
   * Return whether this Interval's end is adjacent to the specified Interval's start.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsStart(e) {
    return this.isValid ? +this.e == +e.s : !1;
  }
  /**
   * Return whether this Interval's start is adjacent to the specified Interval's end.
   * @param {Interval} other
   * @return {boolean}
   */
  abutsEnd(e) {
    return this.isValid ? +e.e == +this.s : !1;
  }
  /**
   * Returns true if this Interval fully contains the specified Interval, specifically if the intersect (of this Interval and the other Interval) is equal to the other Interval; false otherwise.
   * @param {Interval} other
   * @return {boolean}
   */
  engulfs(e) {
    return this.isValid ? this.s <= e.s && this.e >= e.e : !1;
  }
  /**
   * Return whether this Interval has the same start and end as the specified Interval.
   * @param {Interval} other
   * @return {boolean}
   */
  equals(e) {
    return !this.isValid || !e.isValid ? !1 : this.s.equals(e.s) && this.e.equals(e.e);
  }
  /**
   * Return an Interval representing the intersection of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the maximum start time and the minimum end time of the two Intervals.
   * Returns null if the intersection is empty, meaning, the intervals don't intersect.
   * @param {Interval} other
   * @return {Interval}
   */
  intersection(e) {
    if (!this.isValid) return this;
    const t = this.s > e.s ? this.s : e.s, i = this.e < e.e ? this.e : e.e;
    return t >= i ? null : me.fromDateTimes(t, i);
  }
  /**
   * Return an Interval representing the union of this Interval and the specified Interval.
   * Specifically, the resulting Interval has the minimum start time and the maximum end time of the two Intervals.
   * @param {Interval} other
   * @return {Interval}
   */
  union(e) {
    if (!this.isValid) return this;
    const t = this.s < e.s ? this.s : e.s, i = this.e > e.e ? this.e : e.e;
    return me.fromDateTimes(t, i);
  }
  /**
   * Merge an array of Intervals into an equivalent minimal set of Intervals.
   * Combines overlapping and adjacent Intervals.
   * The resulting array will contain the Intervals in ascending order, that is, starting with the earliest Interval
   * and ending with the latest.
   *
   * @param {Array} intervals
   * @return {Array}
   */
  static merge(e) {
    const [t, i] = e.sort((s, n) => s.s - n.s).reduce(
      ([s, n], a) => n ? n.overlaps(a) || n.abutsStart(a) ? [s, n.union(a)] : [s.concat([n]), a] : [s, a],
      [[], null]
    );
    return i && t.push(i), t;
  }
  /**
   * Return an array of Intervals representing the spans of time that only appear in one of the specified Intervals.
   * @param {Array} intervals
   * @return {Array}
   */
  static xor(e) {
    let t = null, i = 0;
    const s = [], n = e.map((l) => [
      { time: l.s, type: "s" },
      { time: l.e, type: "e" }
    ]), a = Array.prototype.concat(...n), o = a.sort((l, h) => l.time - h.time);
    for (const l of o)
      i += l.type === "s" ? 1 : -1, i === 1 ? t = l.time : (t && +t != +l.time && s.push(me.fromDateTimes(t, l.time)), t = null);
    return me.merge(s);
  }
  /**
   * Return an Interval representing the span of time in this Interval that doesn't overlap with any of the specified Intervals.
   * @param {...Interval} intervals
   * @return {Array}
   */
  difference(...e) {
    return me.xor([this].concat(e)).map((t) => this.intersection(t)).filter((t) => t && !t.isEmpty());
  }
  /**
   * Returns a string representation of this Interval appropriate for debugging.
   * @return {string}
   */
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : ei;
  }
  /**
   * Returns a string representation of this Interval appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `Interval { start: ${this.s.toISO()}, end: ${this.e.toISO()} }` : `Interval { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns a localized string representing this Interval. Accepts the same options as the
   * Intl.DateTimeFormat constructor and any presets defined by Luxon, such as
   * {@link DateTime.DATE_FULL} or {@link DateTime.TIME_SIMPLE}. The exact behavior of this method
   * is browser-specific, but in general it will return an appropriate representation of the
   * Interval in the assigned locale. Defaults to the system's locale if no locale has been
   * specified.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {Object} [formatOpts=DateTime.DATE_SHORT] - Either a DateTime preset or
   * Intl.DateTimeFormat constructor options.
   * @param {Object} opts - Options to override the configuration of the start DateTime.
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(); //=> 11/7/2022 – 11/8/2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL); //=> November 7 – 8, 2022
   * @example Interval.fromISO('2022-11-07T09:00Z/2022-11-08T09:00Z').toLocaleString(DateTime.DATE_FULL, { locale: 'fr-FR' }); //=> 7–8 novembre 2022
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString(DateTime.TIME_SIMPLE); //=> 6:00 – 8:00 PM
   * @example Interval.fromISO('2022-11-07T17:00Z/2022-11-07T19:00Z').toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> Mon, Nov 07, 6:00 – 8:00 p
   * @return {string}
   */
  toLocaleString(e = Ds, t = {}) {
    return this.isValid ? Me.create(this.s.loc.clone(t), e).formatInterval(this) : ei;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this Interval.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISO(e) {
    return this.isValid ? `${this.s.toISO(e)}/${this.e.toISO(e)}` : ei;
  }
  /**
   * Returns an ISO 8601-compliant string representation of date of this Interval.
   * The time components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @return {string}
   */
  toISODate() {
    return this.isValid ? `${this.s.toISODate()}/${this.e.toISODate()}` : ei;
  }
  /**
   * Returns an ISO 8601-compliant string representation of time of this Interval.
   * The date components are ignored.
   * @see https://en.wikipedia.org/wiki/ISO_8601#Time_intervals
   * @param {Object} opts - The same options as {@link DateTime#toISO}
   * @return {string}
   */
  toISOTime(e) {
    return this.isValid ? `${this.s.toISOTime(e)}/${this.e.toISOTime(e)}` : ei;
  }
  /**
   * Returns a string representation of this Interval formatted according to the specified format
   * string. **You may not want this.** See {@link Interval#toLocaleString} for a more flexible
   * formatting tool.
   * @param {string} dateFormat - The format string. This string formats the start and end time.
   * See {@link DateTime#toFormat} for details.
   * @param {Object} opts - Options.
   * @param {string} [opts.separator =  ' – '] - A separator to place between the start and end
   * representations.
   * @return {string}
   */
  toFormat(e, { separator: t = " – " } = {}) {
    return this.isValid ? `${this.s.toFormat(e)}${t}${this.e.toFormat(e)}` : ei;
  }
  /**
   * Return a Duration representing the time spanned by this interval.
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example Interval.fromDateTimes(dt1, dt2).toDuration().toObject() //=> { milliseconds: 88489257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('days').toObject() //=> { days: 1.0241812152777778 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes']).toObject() //=> { hours: 24, minutes: 34.82095 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration(['hours', 'minutes', 'seconds']).toObject() //=> { hours: 24, minutes: 34, seconds: 49.257 }
   * @example Interval.fromDateTimes(dt1, dt2).toDuration('seconds').toObject() //=> { seconds: 88489.257 }
   * @return {Duration}
   */
  toDuration(e, t) {
    return this.isValid ? this.e.diff(this.s, e, t) : Q.invalid(this.invalidReason);
  }
  /**
   * Run mapFn on the interval start and end, returning a new Interval from the resulting DateTimes
   * @param {function} mapFn
   * @return {Interval}
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.toUTC())
   * @example Interval.fromDateTimes(dt1, dt2).mapEndpoints(endpoint => endpoint.plus({ hours: 2 }))
   */
  mapEndpoints(e) {
    return me.fromDateTimes(e(this.s), e(this.e));
  }
}
class bs {
  /**
   * Return whether the specified zone contains a DST.
   * @param {string|Zone} [zone='local'] - Zone to check. Defaults to the environment's local zone.
   * @return {boolean}
   */
  static hasDST(e = pe.defaultZone) {
    const t = U.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  /**
   * Return whether the specified zone is a valid IANA specifier.
   * @param {string} zone - Zone to check
   * @return {boolean}
   */
  static isValidIANAZone(e) {
    return ut.isValidZone(e);
  }
  /**
   * Converts the input into a {@link Zone} instance.
   *
   * * If `input` is already a Zone instance, it is returned unchanged.
   * * If `input` is a string containing a valid time zone name, a Zone instance
   *   with that name is returned.
   * * If `input` is a string that doesn't refer to a known time zone, a Zone
   *   instance with {@link Zone#isValid} == false is returned.
   * * If `input is a number, a Zone instance with the specified fixed offset
   *   in minutes is returned.
   * * If `input` is `null` or `undefined`, the default zone is returned.
   * @param {string|Zone|number} [input] - the value to be converted
   * @return {Zone}
   */
  static normalizeZone(e) {
    return yt(e, pe.defaultZone);
  }
  /**
   * Get the weekday on which the week starts according to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number} the start of the week, 1 for Monday through 7 for Sunday
   */
  static getStartOfWeek({ locale: e = null, locObj: t = null } = {}) {
    return (t || oe.create(e)).getStartOfWeek();
  }
  /**
   * Get the minimum number of days necessary in a week before it is considered part of the next year according
   * to the given locale.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number}
   */
  static getMinimumDaysInFirstWeek({ locale: e = null, locObj: t = null } = {}) {
    return (t || oe.create(e)).getMinDaysInFirstWeek();
  }
  /**
   * Get the weekdays, which are considered the weekend according to the given locale
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @returns {number[]} an array of weekdays, 1 for Monday through 7 for Sunday
   */
  static getWeekendWeekdays({ locale: e = null, locObj: t = null } = {}) {
    return (t || oe.create(e)).getWeekendDays().slice();
  }
  /**
   * Return an array of standalone month names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @example Info.months()[0] //=> 'January'
   * @example Info.months('short')[0] //=> 'Jan'
   * @example Info.months('numeric')[0] //=> '1'
   * @example Info.months('short', { locale: 'fr-CA' } )[0] //=> 'janv.'
   * @example Info.months('numeric', { locale: 'ar' })[0] //=> '١'
   * @example Info.months('long', { outputCalendar: 'islamic' })[0] //=> 'Rabiʻ I'
   * @return {Array}
   */
  static months(e = "long", { locale: t = null, numberingSystem: i = null, locObj: s = null, outputCalendar: n = "gregory" } = {}) {
    return (s || oe.create(t, i, n)).months(e);
  }
  /**
   * Return an array of format month names.
   * Format months differ from standalone months in that they're meant to appear next to the day of the month. In some languages, that
   * changes the string.
   * See {@link Info#months}
   * @param {string} [length='long'] - the length of the month representation, such as "numeric", "2-digit", "narrow", "short", "long"
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @param {string} [opts.outputCalendar='gregory'] - the calendar
   * @return {Array}
   */
  static monthsFormat(e = "long", { locale: t = null, numberingSystem: i = null, locObj: s = null, outputCalendar: n = "gregory" } = {}) {
    return (s || oe.create(t, i, n)).months(e, !0);
  }
  /**
   * Return an array of standalone week names.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param {string} [length='long'] - the length of the weekday representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @example Info.weekdays()[0] //=> 'Monday'
   * @example Info.weekdays('short')[0] //=> 'Mon'
   * @example Info.weekdays('short', { locale: 'fr-CA' })[0] //=> 'lun.'
   * @example Info.weekdays('short', { locale: 'ar' })[0] //=> 'الاثنين'
   * @return {Array}
   */
  static weekdays(e = "long", { locale: t = null, numberingSystem: i = null, locObj: s = null } = {}) {
    return (s || oe.create(t, i, null)).weekdays(e);
  }
  /**
   * Return an array of format week names.
   * Format weekdays differ from standalone weekdays in that they're meant to appear next to more date information. In some languages, that
   * changes the string.
   * See {@link Info#weekdays}
   * @param {string} [length='long'] - the length of the month representation, such as "narrow", "short", "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale=null] - the locale code
   * @param {string} [opts.numberingSystem=null] - the numbering system
   * @param {string} [opts.locObj=null] - an existing locale object to use
   * @return {Array}
   */
  static weekdaysFormat(e = "long", { locale: t = null, numberingSystem: i = null, locObj: s = null } = {}) {
    return (s || oe.create(t, i, null)).weekdays(e, !0);
  }
  /**
   * Return an array of meridiems.
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.meridiems() //=> [ 'AM', 'PM' ]
   * @example Info.meridiems({ locale: 'my' }) //=> [ 'နံနက်', 'ညနေ' ]
   * @return {Array}
   */
  static meridiems({ locale: e = null } = {}) {
    return oe.create(e).meridiems();
  }
  /**
   * Return an array of eras, such as ['BC', 'AD']. The locale can be specified, but the calendar system is always Gregorian.
   * @param {string} [length='short'] - the length of the era representation, such as "short" or "long".
   * @param {Object} opts - options
   * @param {string} [opts.locale] - the locale code
   * @example Info.eras() //=> [ 'BC', 'AD' ]
   * @example Info.eras('long') //=> [ 'Before Christ', 'Anno Domini' ]
   * @example Info.eras('long', { locale: 'fr' }) //=> [ 'avant Jésus-Christ', 'après Jésus-Christ' ]
   * @return {Array}
   */
  static eras(e = "short", { locale: t = null } = {}) {
    return oe.create(t, null, "gregory").eras(e);
  }
  /**
   * Return the set of available features in this environment.
   * Some features of Luxon are not available in all environments. For example, on older browsers, relative time formatting support is not available. Use this function to figure out if that's the case.
   * Keys:
   * * `relative`: whether this environment supports relative time formatting
   * * `localeWeek`: whether this environment supports different weekdays for the start of the week based on the locale
   * @example Info.features() //=> { relative: false, localeWeek: true }
   * @return {Object}
   */
  static features() {
    return { relative: Ka(), localeWeek: Xa() };
  }
}
function $r(r, e) {
  const t = (s) => s.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(), i = t(e) - t(r);
  return Math.floor(Q.fromMillis(i).as("days"));
}
function ru(r, e, t) {
  const i = [
    ["years", (l, h) => h.year - l.year],
    ["quarters", (l, h) => h.quarter - l.quarter + (h.year - l.year) * 4],
    ["months", (l, h) => h.month - l.month + (h.year - l.year) * 12],
    [
      "weeks",
      (l, h) => {
        const u = $r(l, h);
        return (u - u % 7) / 7;
      }
    ],
    ["days", $r]
  ], s = {}, n = r;
  let a, o;
  for (const [l, h] of i)
    t.indexOf(l) >= 0 && (a = l, s[l] = h(r, e), o = n.plus(s), o > e ? (s[l]--, r = n.plus(s), r > e && (o = r, s[l]--, r = n.plus(s))) : r = o);
  return [r, s, o, a];
}
function au(r, e, t, i) {
  let [s, n, a, o] = ru(r, e, t);
  const l = e - s, h = t.filter(
    (d) => ["hours", "minutes", "seconds", "milliseconds"].indexOf(d) >= 0
  );
  h.length === 0 && (a < e && (a = s.plus({ [o]: 1 })), a !== s && (n[o] = (n[o] || 0) + l / (a - s)));
  const u = Q.fromObject(n, i);
  return h.length > 0 ? Q.fromMillis(l, i).shiftTo(...h).plus(u) : u;
}
const ou = "missing Intl.DateTimeFormat.formatToParts support";
function ie(r, e = (t) => t) {
  return { regex: r, deser: ([t]) => e(Kl(t)) };
}
const lu = " ", bo = `[ ${lu}]`, vo = new RegExp(bo, "g");
function hu(r) {
  return r.replace(/\./g, "\\.?").replace(vo, bo);
}
function Yr(r) {
  return r.replace(/\./g, "").replace(vo, " ").toLowerCase();
}
function Ze(r, e) {
  return r === null ? null : {
    regex: RegExp(r.map(hu).join("|")),
    deser: ([t]) => r.findIndex((i) => Yr(t) === Yr(i)) + e
  };
}
function qr(r, e) {
  return { regex: r, deser: ([, t, i]) => Is(t, i), groups: e };
}
function vs(r) {
  return { regex: r, deser: ([e]) => e };
}
function uu(r) {
  return r.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
}
function du(r, e) {
  const t = qe(e), i = qe(e, "{2}"), s = qe(e, "{3}"), n = qe(e, "{4}"), a = qe(e, "{6}"), o = qe(e, "{1,2}"), l = qe(e, "{1,3}"), h = qe(e, "{1,6}"), u = qe(e, "{1,9}"), d = qe(e, "{2,4}"), f = qe(e, "{4,6}"), b = (S) => ({ regex: RegExp(uu(S.val)), deser: ([k]) => k, literal: !0 }), E = ((S) => {
    if (r.literal)
      return b(S);
    switch (S.val) {
      case "G":
        return Ze(e.eras("short"), 0);
      case "GG":
        return Ze(e.eras("long"), 0);
      case "y":
        return ie(h);
      case "yy":
        return ie(d, Cn);
      case "yyyy":
        return ie(n);
      case "yyyyy":
        return ie(f);
      case "yyyyyy":
        return ie(a);
      case "M":
        return ie(o);
      case "MM":
        return ie(i);
      case "MMM":
        return Ze(e.months("short", !0), 1);
      case "MMMM":
        return Ze(e.months("long", !0), 1);
      case "L":
        return ie(o);
      case "LL":
        return ie(i);
      case "LLL":
        return Ze(e.months("short", !1), 1);
      case "LLLL":
        return Ze(e.months("long", !1), 1);
      case "d":
        return ie(o);
      case "dd":
        return ie(i);
      case "o":
        return ie(l);
      case "ooo":
        return ie(s);
      case "HH":
        return ie(i);
      case "H":
        return ie(o);
      case "hh":
        return ie(i);
      case "h":
        return ie(o);
      case "mm":
        return ie(i);
      case "m":
        return ie(o);
      case "q":
        return ie(o);
      case "qq":
        return ie(i);
      case "s":
        return ie(o);
      case "ss":
        return ie(i);
      case "S":
        return ie(l);
      case "SSS":
        return ie(s);
      case "u":
        return vs(u);
      case "uu":
        return vs(o);
      case "uuu":
        return ie(t);
      case "a":
        return Ze(e.meridiems(), 0);
      case "kkkk":
        return ie(n);
      case "kk":
        return ie(d, Cn);
      case "W":
        return ie(o);
      case "WW":
        return ie(i);
      case "E":
      case "c":
        return ie(t);
      case "EEE":
        return Ze(e.weekdays("short", !1), 1);
      case "EEEE":
        return Ze(e.weekdays("long", !1), 1);
      case "ccc":
        return Ze(e.weekdays("short", !0), 1);
      case "cccc":
        return Ze(e.weekdays("long", !0), 1);
      case "Z":
      case "ZZ":
        return qr(new RegExp(`([+-]${o.source})(?::(${i.source}))?`), 2);
      case "ZZZ":
        return qr(new RegExp(`([+-]${o.source})(${i.source})?`), 2);
      case "z":
        return vs(/[a-z_+-/]{1,256}?/i);
      case " ":
        return vs(/[^\S\n\r]/);
      default:
        return b(S);
    }
  })(r) || {
    invalidReason: ou
  };
  return E.token = r, E;
}
const cu = {
  year: {
    "2-digit": "yy",
    numeric: "yyyyy"
  },
  month: {
    numeric: "M",
    "2-digit": "MM",
    short: "MMM",
    long: "MMMM"
  },
  day: {
    numeric: "d",
    "2-digit": "dd"
  },
  weekday: {
    short: "EEE",
    long: "EEEE"
  },
  dayperiod: "a",
  dayPeriod: "a",
  hour12: {
    numeric: "h",
    "2-digit": "hh"
  },
  hour24: {
    numeric: "H",
    "2-digit": "HH"
  },
  minute: {
    numeric: "m",
    "2-digit": "mm"
  },
  second: {
    numeric: "s",
    "2-digit": "ss"
  },
  timeZoneName: {
    long: "ZZZZZ",
    short: "ZZZ"
  }
};
function fu(r, e, t) {
  const { type: i, value: s } = r;
  if (i === "literal") {
    const l = /^\s+$/.test(s);
    return {
      literal: !l,
      val: l ? " " : s
    };
  }
  const n = e[i];
  let a = i;
  i === "hour" && (e.hour12 != null ? a = e.hour12 ? "hour12" : "hour24" : e.hourCycle != null ? e.hourCycle === "h11" || e.hourCycle === "h12" ? a = "hour12" : a = "hour24" : a = t.hour12 ? "hour12" : "hour24");
  let o = cu[a];
  if (typeof o == "object" && (o = o[n]), o)
    return {
      literal: !1,
      val: o
    };
}
function mu(r) {
  return [`^${r.map((t) => t.regex).reduce((t, i) => `${t}(${i.source})`, "")}$`, r];
}
function pu(r, e, t) {
  const i = r.match(e);
  if (i) {
    const s = {};
    let n = 1;
    for (const a in t)
      if (wi(t, a)) {
        const o = t[a], l = o.groups ? o.groups + 1 : 1;
        !o.literal && o.token && (s[o.token.val[0]] = o.deser(i.slice(n, n + l))), n += l;
      }
    return [i, s];
  } else
    return [i, {}];
}
function gu(r) {
  const e = (n) => {
    switch (n) {
      case "S":
        return "millisecond";
      case "s":
        return "second";
      case "m":
        return "minute";
      case "h":
      case "H":
        return "hour";
      case "d":
        return "day";
      case "o":
        return "ordinal";
      case "L":
      case "M":
        return "month";
      case "y":
        return "year";
      case "E":
      case "c":
        return "weekday";
      case "W":
        return "weekNumber";
      case "k":
        return "weekYear";
      case "q":
        return "quarter";
      default:
        return null;
    }
  };
  let t = null, i;
  return j(r.z) || (t = ut.create(r.z)), j(r.Z) || (t || (t = new Fe(r.Z)), i = r.Z), j(r.q) || (r.M = (r.q - 1) * 3 + 1), j(r.h) || (r.h < 12 && r.a === 1 ? r.h += 12 : r.h === 12 && r.a === 0 && (r.h = 0)), r.G === 0 && r.y && (r.y = -r.y), j(r.u) || (r.S = cr(r.u)), [Object.keys(r).reduce((n, a) => {
    const o = e(a);
    return o && (n[o] = r[a]), n;
  }, {}), t, i];
}
let Qs = null;
function bu() {
  return Qs || (Qs = U.fromMillis(1555555555555)), Qs;
}
function vu(r, e) {
  if (r.literal)
    return r;
  const t = Me.macroTokenToFormatOpts(r.val), i = Eo(t, e);
  return i == null || i.includes(void 0) ? r : i;
}
function wo(r, e) {
  return Array.prototype.concat(...r.map((t) => vu(t, e)));
}
class yo {
  constructor(e, t) {
    if (this.locale = e, this.format = t, this.tokens = wo(Me.parseFormat(t), e), this.units = this.tokens.map((i) => du(i, e)), this.disqualifyingUnit = this.units.find((i) => i.invalidReason), !this.disqualifyingUnit) {
      const [i, s] = mu(this.units);
      this.regex = RegExp(i, "i"), this.handlers = s;
    }
  }
  explainFromTokens(e) {
    if (this.isValid) {
      const [t, i] = pu(e, this.regex, this.handlers), [s, n, a] = i ? gu(i) : [null, null, void 0];
      if (wi(i, "a") && wi(i, "H"))
        throw new ii(
          "Can't include meridiem when specifying 24-hour format"
        );
      return {
        input: e,
        tokens: this.tokens,
        regex: this.regex,
        rawMatches: t,
        matches: i,
        result: s,
        zone: n,
        specificOffset: a
      };
    } else
      return { input: e, tokens: this.tokens, invalidReason: this.invalidReason };
  }
  get isValid() {
    return !this.disqualifyingUnit;
  }
  get invalidReason() {
    return this.disqualifyingUnit ? this.disqualifyingUnit.invalidReason : null;
  }
}
function Co(r, e, t) {
  return new yo(r, t).explainFromTokens(e);
}
function wu(r, e, t) {
  const { result: i, zone: s, specificOffset: n, invalidReason: a } = Co(r, e, t);
  return [i, s, n, a];
}
function Eo(r, e) {
  if (!r)
    return null;
  const i = Me.create(e, r).dtFormatter(bu()), s = i.formatToParts(), n = i.resolvedOptions();
  return s.map((a) => fu(a, r, n));
}
const en = "Invalid DateTime", Zr = 864e13;
function Ni(r) {
  return new Xe("unsupported zone", `the zone "${r.name}" is not supported`);
}
function tn(r) {
  return r.weekData === null && (r.weekData = Ls(r.c)), r.weekData;
}
function sn(r) {
  return r.localWeekData === null && (r.localWeekData = Ls(
    r.c,
    r.loc.getMinDaysInFirstWeek(),
    r.loc.getStartOfWeek()
  )), r.localWeekData;
}
function Ot(r, e) {
  const t = {
    ts: r.ts,
    zone: r.zone,
    c: r.c,
    o: r.o,
    loc: r.loc,
    invalid: r.invalid
  };
  return new U({ ...t, ...e, old: t });
}
function To(r, e, t) {
  let i = r - e * 60 * 1e3;
  const s = t.offset(i);
  if (e === s)
    return [i, e];
  i -= (s - e) * 60 * 1e3;
  const n = t.offset(i);
  return s === n ? [i, s] : [r - Math.min(s, n) * 60 * 1e3, Math.max(s, n)];
}
function ws(r, e) {
  r += e * 60 * 1e3;
  const t = new Date(r);
  return {
    year: t.getUTCFullYear(),
    month: t.getUTCMonth() + 1,
    day: t.getUTCDate(),
    hour: t.getUTCHours(),
    minute: t.getUTCMinutes(),
    second: t.getUTCSeconds(),
    millisecond: t.getUTCMilliseconds()
  };
}
function ks(r, e, t) {
  return To(_s(r), e, t);
}
function Jr(r, e) {
  const t = r.o, i = r.c.year + Math.trunc(e.years), s = r.c.month + Math.trunc(e.months) + Math.trunc(e.quarters) * 3, n = {
    ...r.c,
    year: i,
    month: s,
    day: Math.min(r.c.day, Fs(i, s)) + Math.trunc(e.days) + Math.trunc(e.weeks) * 7
  }, a = Q.fromObject({
    years: e.years - Math.trunc(e.years),
    quarters: e.quarters - Math.trunc(e.quarters),
    months: e.months - Math.trunc(e.months),
    weeks: e.weeks - Math.trunc(e.weeks),
    days: e.days - Math.trunc(e.days),
    hours: e.hours,
    minutes: e.minutes,
    seconds: e.seconds,
    milliseconds: e.milliseconds
  }).as("milliseconds"), o = _s(n);
  let [l, h] = To(o, t, r.zone);
  return a !== 0 && (l += a, h = r.zone.offset(l)), { ts: l, o: h };
}
function ti(r, e, t, i, s, n) {
  const { setZone: a, zone: o } = t;
  if (r && Object.keys(r).length !== 0 || e) {
    const l = e || o, h = U.fromObject(r, {
      ...t,
      zone: l,
      specificOffset: n
    });
    return a ? h : h.setZone(o);
  } else
    return U.invalid(
      new Xe("unparsable", `the input "${s}" can't be parsed as ${i}`)
    );
}
function ys(r, e, t = !0) {
  return r.isValid ? Me.create(oe.create("en-US"), {
    allowZ: t,
    forceSimple: !0
  }).formatDateTimeFromString(r, e) : null;
}
function nn(r, e, t) {
  const i = r.c.year > 9999 || r.c.year < 0;
  let s = "";
  if (i && r.c.year >= 0 && (s += "+"), s += we(r.c.year, i ? 6 : 4), t === "year") return s;
  if (e) {
    if (s += "-", s += we(r.c.month), t === "month") return s;
    s += "-";
  } else if (s += we(r.c.month), t === "month") return s;
  return s += we(r.c.day), s;
}
function Kr(r, e, t, i, s, n, a) {
  let o = !t || r.c.millisecond !== 0 || r.c.second !== 0, l = "";
  switch (a) {
    case "day":
    case "month":
    case "year":
      break;
    default:
      if (l += we(r.c.hour), a === "hour") break;
      if (e) {
        if (l += ":", l += we(r.c.minute), a === "minute") break;
        o && (l += ":", l += we(r.c.second));
      } else {
        if (l += we(r.c.minute), a === "minute") break;
        o && (l += we(r.c.second));
      }
      if (a === "second") break;
      o && (!i || r.c.millisecond !== 0) && (l += ".", l += we(r.c.millisecond, 3));
  }
  return s && (r.isOffsetFixed && r.offset === 0 && !n ? l += "Z" : r.o < 0 ? (l += "-", l += we(Math.trunc(-r.o / 60)), l += ":", l += we(Math.trunc(-r.o % 60))) : (l += "+", l += we(Math.trunc(r.o / 60)), l += ":", l += we(Math.trunc(r.o % 60)))), n && (l += "[" + r.zone.ianaName + "]"), l;
}
const ko = {
  month: 1,
  day: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, yu = {
  weekNumber: 1,
  weekday: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Cu = {
  ordinal: 1,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0
}, Rs = ["year", "month", "day", "hour", "minute", "second", "millisecond"], Eu = [
  "weekYear",
  "weekNumber",
  "weekday",
  "hour",
  "minute",
  "second",
  "millisecond"
], Tu = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function xs(r) {
  const e = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal"
  }[r.toLowerCase()];
  if (!e) throw new Ta(r);
  return e;
}
function Xr(r) {
  switch (r.toLowerCase()) {
    case "localweekday":
    case "localweekdays":
      return "localWeekday";
    case "localweeknumber":
    case "localweeknumbers":
      return "localWeekNumber";
    case "localweekyear":
    case "localweekyears":
      return "localWeekYear";
    default:
      return xs(r);
  }
}
function ku(r) {
  if (Vi === void 0 && (Vi = pe.now()), r.type !== "iana")
    return r.offset(Vi);
  const e = r.name;
  let t = En.get(e);
  return t === void 0 && (t = r.offset(Vi), En.set(e, t)), t;
}
function Qr(r, e) {
  const t = yt(e.zone, pe.defaultZone);
  if (!t.isValid)
    return U.invalid(Ni(t));
  const i = oe.fromObject(e);
  let s, n;
  if (j(r.year))
    s = pe.now();
  else {
    for (const l of Rs)
      j(r[l]) && (r[l] = ko[l]);
    const a = Za(r) || Ja(r);
    if (a)
      return U.invalid(a);
    const o = ku(t);
    [s, n] = ks(r, o, t);
  }
  return new U({ ts: s, zone: t, loc: i, o: n });
}
function ea(r, e, t) {
  const i = j(t.round) ? !0 : t.round, s = j(t.rounding) ? "trunc" : t.rounding, n = (o, l) => (o = fr(o, i || t.calendary ? 0 : 2, t.calendary ? "round" : s), e.loc.clone(t).relFormatter(t).format(o, l)), a = (o) => t.calendary ? e.hasSame(r, o) ? 0 : e.startOf(o).diff(r.startOf(o), o).get(o) : e.diff(r, o).get(o);
  if (t.unit)
    return n(a(t.unit), t.unit);
  for (const o of t.units) {
    const l = a(o);
    if (Math.abs(l) >= 1)
      return n(l, o);
  }
  return n(r > e ? -0 : 0, t.units[t.units.length - 1]);
}
function ta(r) {
  let e = {}, t;
  return r.length > 0 && typeof r[r.length - 1] == "object" ? (e = r[r.length - 1], t = Array.from(r).slice(0, r.length - 1)) : t = Array.from(r), [e, t];
}
let Vi;
const En = /* @__PURE__ */ new Map();
class U {
  /**
   * @access private
   */
  constructor(e) {
    const t = e.zone || pe.defaultZone;
    let i = e.invalid || (Number.isNaN(e.ts) ? new Xe("invalid input") : null) || (t.isValid ? null : Ni(t));
    this.ts = j(e.ts) ? pe.now() : e.ts;
    let s = null, n = null;
    if (!i)
      if (e.old && e.old.ts === this.ts && e.old.zone.equals(t))
        [s, n] = [e.old.c, e.old.o];
      else {
        const o = Rt(e.o) && !e.old ? e.o : t.offset(this.ts);
        s = ws(this.ts, o), i = Number.isNaN(s.year) ? new Xe("invalid input") : null, s = i ? null : s, n = i ? null : o;
      }
    this._zone = t, this.loc = e.loc || oe.create(), this.invalid = i, this.weekData = null, this.localWeekData = null, this.c = s, this.o = n, this.isLuxonDateTime = !0;
  }
  // CONSTRUCT
  /**
   * Create a DateTime for the current instant, in the system's time zone.
   *
   * Use Settings to override these default values if needed.
   * @example DateTime.now().toISO() //~> now in the ISO format
   * @return {DateTime}
   */
  static now() {
    return new U({});
  }
  /**
   * Create a local DateTime
   * @param {number} [year] - The calendar year. If omitted (as in, call `local()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month, 1-indexed
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @example DateTime.local()                                  //~> now
   * @example DateTime.local({ zone: "America/New_York" })      //~> now, in US east coast time
   * @example DateTime.local(2017)                              //~> 2017-01-01T00:00:00
   * @example DateTime.local(2017, 3)                           //~> 2017-03-01T00:00:00
   * @example DateTime.local(2017, 3, 12, { locale: "fr" })     //~> 2017-03-12T00:00:00, with a French locale
   * @example DateTime.local(2017, 3, 12, 5)                    //~> 2017-03-12T05:00:00
   * @example DateTime.local(2017, 3, 12, 5, { zone: "utc" })   //~> 2017-03-12T05:00:00, in UTC
   * @example DateTime.local(2017, 3, 12, 5, 45)                //~> 2017-03-12T05:45:00
   * @example DateTime.local(2017, 3, 12, 5, 45, 10)            //~> 2017-03-12T05:45:10
   * @example DateTime.local(2017, 3, 12, 5, 45, 10, 765)       //~> 2017-03-12T05:45:10.765
   * @return {DateTime}
   */
  static local() {
    const [e, t] = ta(arguments), [i, s, n, a, o, l, h] = t;
    return Qr({ year: i, month: s, day: n, hour: a, minute: o, second: l, millisecond: h }, e);
  }
  /**
   * Create a DateTime in UTC
   * @param {number} [year] - The calendar year. If omitted (as in, call `utc()` with no arguments), the current time will be used
   * @param {number} [month=1] - The month, 1-indexed
   * @param {number} [day=1] - The day of the month
   * @param {number} [hour=0] - The hour of the day, in 24-hour time
   * @param {number} [minute=0] - The minute of the hour, meaning a number between 0 and 59
   * @param {number} [second=0] - The second of the minute, meaning a number between 0 and 59
   * @param {number} [millisecond=0] - The millisecond of the second, meaning a number between 0 and 999
   * @param {Object} options - configuration options for the DateTime
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} [options.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [options.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [options.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.utc()                                              //~> now
   * @example DateTime.utc(2017)                                          //~> 2017-01-01T00:00:00Z
   * @example DateTime.utc(2017, 3)                                       //~> 2017-03-01T00:00:00Z
   * @example DateTime.utc(2017, 3, 12)                                   //~> 2017-03-12T00:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5)                                //~> 2017-03-12T05:00:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45)                            //~> 2017-03-12T05:45:00Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, { locale: "fr" })          //~> 2017-03-12T05:45:00Z with a French locale
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10)                        //~> 2017-03-12T05:45:10Z
   * @example DateTime.utc(2017, 3, 12, 5, 45, 10, 765, { locale: "fr" }) //~> 2017-03-12T05:45:10.765Z with a French locale
   * @return {DateTime}
   */
  static utc() {
    const [e, t] = ta(arguments), [i, s, n, a, o, l, h] = t;
    return e.zone = Fe.utcInstance, Qr({ year: i, month: s, day: n, hour: a, minute: o, second: l, millisecond: h }, e);
  }
  /**
   * Create a DateTime from a JavaScript Date object. Uses the default zone.
   * @param {Date} date - a JavaScript Date object
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @return {DateTime}
   */
  static fromJSDate(e, t = {}) {
    const i = ih(e) ? e.valueOf() : NaN;
    if (Number.isNaN(i))
      return U.invalid("invalid input");
    const s = yt(t.zone, pe.defaultZone);
    return s.isValid ? new U({
      ts: i,
      zone: s,
      loc: oe.fromObject(t)
    }) : U.invalid(Ni(s));
  }
  /**
   * Create a DateTime from a number of milliseconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} milliseconds - a number of milliseconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromMillis(e, t = {}) {
    if (Rt(e))
      return e < -Zr || e > Zr ? U.invalid("Timestamp out of range") : new U({
        ts: e,
        zone: yt(t.zone, pe.defaultZone),
        loc: oe.fromObject(t)
      });
    throw new ke(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ${e}`
    );
  }
  /**
   * Create a DateTime from a number of seconds since the epoch (meaning since 1 January 1970 00:00:00 UTC). Uses the default zone.
   * @param {number} seconds - a number of seconds since 1970 UTC
   * @param {Object} options - configuration options for the DateTime
   * @param {string|Zone} [options.zone='local'] - the zone to place the DateTime into
   * @param {string} [options.locale] - a locale to set on the resulting DateTime instance
   * @param {string} options.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} options.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} options.weekSettings - the week settings to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromSeconds(e, t = {}) {
    if (Rt(e))
      return new U({
        ts: e * 1e3,
        zone: yt(t.zone, pe.defaultZone),
        loc: oe.fromObject(t)
      });
    throw new ke("fromSeconds requires a numerical input");
  }
  /**
   * Create a DateTime from a JavaScript object with keys like 'year' and 'hour' with reasonable defaults.
   * @param {Object} obj - the object to create the DateTime from
   * @param {number} obj.year - a year, such as 1987
   * @param {number} obj.month - a month, 1-12
   * @param {number} obj.day - a day of the month, 1-31, depending on the month
   * @param {number} obj.ordinal - day of the year, 1-365 or 366
   * @param {number} obj.weekYear - an ISO week year
   * @param {number} obj.weekNumber - an ISO week number, between 1 and 52 or 53, depending on the year
   * @param {number} obj.weekday - an ISO weekday, 1-7, where 1 is Monday and 7 is Sunday
   * @param {number} obj.localWeekYear - a week year, according to the locale
   * @param {number} obj.localWeekNumber - a week number, between 1 and 52 or 53, depending on the year, according to the locale
   * @param {number} obj.localWeekday - a weekday, 1-7, where 1 is the first and 7 is the last day of the week, according to the locale
   * @param {number} obj.hour - hour of the day, 0-23
   * @param {number} obj.minute - minute of the hour, 0-59
   * @param {number} obj.second - second of the minute, 0-59
   * @param {number} obj.millisecond - millisecond of the second, 0-999
   * @param {Object} opts - options for creating this DateTime
   * @param {string|Zone} [opts.zone='local'] - interpret the numbers in the context of a particular zone. Can take any value taken as the first argument to setZone()
   * @param {string} [opts.locale='system\'s locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromObject({ year: 1982, month: 5, day: 25}).toISODate() //=> '1982-05-25'
   * @example DateTime.fromObject({ year: 1982 }).toISODate() //=> '1982-01-01'
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }) //~> today at 10:26:06
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'utc' }),
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'local' })
   * @example DateTime.fromObject({ hour: 10, minute: 26, second: 6 }, { zone: 'America/New_York' })
   * @example DateTime.fromObject({ weekYear: 2016, weekNumber: 2, weekday: 3 }).toISODate() //=> '2016-01-13'
   * @example DateTime.fromObject({ localWeekYear: 2022, localWeekNumber: 1, localWeekday: 1 }, { locale: "en-US" }).toISODate() //=> '2021-12-26'
   * @return {DateTime}
   */
  static fromObject(e, t = {}) {
    e = e || {};
    const i = yt(t.zone, pe.defaultZone);
    if (!i.isValid)
      return U.invalid(Ni(i));
    const s = oe.fromObject(t), n = Os(e, Xr), { minDaysInFirstWeek: a, startOfWeek: o } = Ir(n, s), l = pe.now(), h = j(t.specificOffset) ? i.offset(l) : t.specificOffset, u = !j(n.ordinal), d = !j(n.year), f = !j(n.month) || !j(n.day), b = d || f, T = n.weekYear || n.weekNumber;
    if ((b || u) && T)
      throw new ii(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (f && u)
      throw new ii("Can't mix ordinal dates with month/day");
    const E = T || n.weekday && !b;
    let S, k, z = ws(l, h);
    E ? (S = Eu, k = yu, z = Ls(z, a, o)) : u ? (S = Tu, k = Cu, z = Xs(z)) : (S = Rs, k = ko);
    let N = !1;
    for (const ae of S) {
      const Oe = n[ae];
      j(Oe) ? N ? n[ae] = k[ae] : n[ae] = z[ae] : N = !0;
    }
    const J = E ? Ql(n, a, o) : u ? eh(n) : Za(n), q = J || Ja(n);
    if (q)
      return U.invalid(q);
    const te = E ? Ar(n, a, o) : u ? _r(n) : n, [ne, B] = ks(te, h, i), re = new U({
      ts: ne,
      zone: i,
      o: B,
      loc: s
    });
    return n.weekday && b && e.weekday !== re.weekday ? U.invalid(
      "mismatched weekday",
      `you can't specify both a weekday of ${n.weekday} and a date of ${re.toISO()}`
    ) : re.isValid ? re : U.invalid(re.invalid);
  }
  /**
   * Create a DateTime from an ISO 8601 string
   * @param {string} text - the ISO string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the time to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} [opts.outputCalendar] - the output calendar to set on the resulting DateTime instance
   * @param {string} [opts.numberingSystem] - the numbering system to set on the resulting DateTime instance
   * @param {string} [opts.weekSettings] - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromISO('2016-05-25T09:08:34.123')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00')
   * @example DateTime.fromISO('2016-05-25T09:08:34.123+06:00', {setZone: true})
   * @example DateTime.fromISO('2016-05-25T09:08:34.123', {zone: 'utc'})
   * @example DateTime.fromISO('2016-W05-4')
   * @return {DateTime}
   */
  static fromISO(e, t = {}) {
    const [i, s] = Gh(e);
    return ti(i, s, t, "ISO 8601", e);
  }
  /**
   * Create a DateTime from an RFC 2822 string
   * @param {string} text - the RFC 2822 string
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since the offset is always specified in the string itself, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with a fixed-offset zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23:12 GMT')
   * @example DateTime.fromRFC2822('Fri, 25 Nov 2016 13:23:12 +0600')
   * @example DateTime.fromRFC2822('25 Nov 2016 13:23 Z')
   * @return {DateTime}
   */
  static fromRFC2822(e, t = {}) {
    const [i, s] = $h(e);
    return ti(i, s, t, "RFC 2822", e);
  }
  /**
   * Create a DateTime from an HTTP header date
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @param {string} text - the HTTP header date
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - convert the time to this zone. Since HTTP dates are always in UTC, this has no effect on the interpretation of string, merely the zone the resulting DateTime is expressed in.
   * @param {boolean} [opts.setZone=false] - override the zone with the fixed-offset zone specified in the string. For HTTP dates, this is always UTC, so this option is equivalent to setting the `zone` option to 'utc', but this option is included for consistency with similar methods.
   * @param {string} [opts.locale='system's locale'] - a locale to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @param {string} opts.numberingSystem - the numbering system to set on the resulting DateTime instance
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @example DateTime.fromHTTP('Sun, 06 Nov 1994 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sunday, 06-Nov-94 08:49:37 GMT')
   * @example DateTime.fromHTTP('Sun Nov  6 08:49:37 1994')
   * @return {DateTime}
   */
  static fromHTTP(e, t = {}) {
    const [i, s] = Yh(e);
    return ti(i, s, t, "HTTP", t);
  }
  /**
   * Create a DateTime from an input string and format string.
   * Defaults to en-US if no locale has been specified, regardless of the system's locale. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/parsing?id=table-of-tokens).
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see the link below for the formats)
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @return {DateTime}
   */
  static fromFormat(e, t, i = {}) {
    if (j(e) || j(t))
      throw new ke("fromFormat requires an input string and a format");
    const { locale: s = null, numberingSystem: n = null } = i, a = oe.fromOpts({
      locale: s,
      numberingSystem: n,
      defaultToEN: !0
    }), [o, l, h, u] = wu(a, e, t);
    return u ? U.invalid(u) : ti(o, l, i, `format ${t}`, e, h);
  }
  /**
   * @deprecated use fromFormat instead
   */
  static fromString(e, t, i = {}) {
    return U.fromFormat(e, t, i);
  }
  /**
   * Create a DateTime from a SQL date, time, or datetime
   * Defaults to en-US if no locale has been specified, regardless of the system's locale
   * @param {string} text - the string to parse
   * @param {Object} opts - options to affect the creation
   * @param {string|Zone} [opts.zone='local'] - use this zone if no offset is specified in the input string itself. Will also convert the DateTime to this zone
   * @param {boolean} [opts.setZone=false] - override the zone with a zone specified in the string itself, if it specifies one
   * @param {string} [opts.locale='en-US'] - a locale string to use when parsing. Will also set the DateTime to this locale
   * @param {string} opts.numberingSystem - the numbering system to use when parsing. Will also set the resulting DateTime to this numbering system
   * @param {string} opts.weekSettings - the week settings to set on the resulting DateTime instance
   * @param {string} opts.outputCalendar - the output calendar to set on the resulting DateTime instance
   * @example DateTime.fromSQL('2017-05-15')
   * @example DateTime.fromSQL('2017-05-15 09:12:34')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342+06:00')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles')
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342 America/Los_Angeles', { setZone: true })
   * @example DateTime.fromSQL('2017-05-15 09:12:34.342', { zone: 'America/Los_Angeles' })
   * @example DateTime.fromSQL('09:12:34.342')
   * @return {DateTime}
   */
  static fromSQL(e, t = {}) {
    const [i, s] = eu(e);
    return ti(i, s, t, "SQL", e);
  }
  /**
   * Create an invalid DateTime.
   * @param {string} reason - simple string of why this DateTime is invalid. Should not contain parameters or anything else data-dependent.
   * @param {string} [explanation=null] - longer explanation, may include parameters and other useful debugging information
   * @return {DateTime}
   */
  static invalid(e, t = null) {
    if (!e)
      throw new ke("need to specify a reason the DateTime is invalid");
    const i = e instanceof Xe ? e : new Xe(e, t);
    if (pe.throwOnInvalid)
      throw new Ml(i);
    return new U({ invalid: i });
  }
  /**
   * Check if an object is an instance of DateTime. Works across context boundaries
   * @param {object} o
   * @return {boolean}
   */
  static isDateTime(e) {
    return e && e.isLuxonDateTime || !1;
  }
  /**
   * Produce the format string for a set of options
   * @param formatOpts
   * @param localeOpts
   * @returns {string}
   */
  static parseFormatForOpts(e, t = {}) {
    const i = Eo(e, oe.fromObject(t));
    return i ? i.map((s) => s ? s.val : null).join("") : null;
  }
  /**
   * Produce the the fully expanded format token for the locale
   * Does NOT quote characters, so quoted tokens will not round trip correctly
   * @param fmt
   * @param localeOpts
   * @returns {string}
   */
  static expandFormat(e, t = {}) {
    return wo(Me.parseFormat(e), oe.fromObject(t)).map((s) => s.val).join("");
  }
  static resetCache() {
    Vi = void 0, En.clear();
  }
  // INFO
  /**
   * Get the value of unit.
   * @param {string} unit - a unit such as 'minute' or 'day'
   * @example DateTime.local(2017, 7, 4).get('month'); //=> 7
   * @example DateTime.local(2017, 7, 4).get('day'); //=> 4
   * @return {number}
   */
  get(e) {
    return this[e];
  }
  /**
   * Returns whether the DateTime is valid. Invalid DateTimes occur when:
   * * The DateTime was created from invalid calendar information, such as the 13th month or February 30
   * * The DateTime was created by an operation on another invalid date
   * @type {boolean}
   */
  get isValid() {
    return this.invalid === null;
  }
  /**
   * Returns an error code if this DateTime is invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  /**
   * Returns an explanation of why this DateTime became invalid, or null if the DateTime is valid
   * @type {string}
   */
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  /**
   * Get the locale of a DateTime, such 'en-GB'. The locale is used when formatting the DateTime
   *
   * @type {string}
   */
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  /**
   * Get the numbering system of a DateTime, such 'beng'. The numbering system is used when formatting the DateTime
   *
   * @type {string}
   */
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  /**
   * Get the output calendar of a DateTime, such 'islamic'. The output calendar is used when formatting the DateTime
   *
   * @type {string}
   */
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  /**
   * Get the time zone associated with this DateTime.
   * @type {Zone}
   */
  get zone() {
    return this._zone;
  }
  /**
   * Get the name of the time zone.
   * @type {string}
   */
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  /**
   * Get the year
   * @example DateTime.local(2017, 5, 25).year //=> 2017
   * @type {number}
   */
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  /**
   * Get the quarter
   * @example DateTime.local(2017, 5, 25).quarter //=> 2
   * @type {number}
   */
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  /**
   * Get the month (1-12).
   * @example DateTime.local(2017, 5, 25).month //=> 5
   * @type {number}
   */
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  /**
   * Get the day of the month (1-30ish).
   * @example DateTime.local(2017, 5, 25).day //=> 25
   * @type {number}
   */
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  /**
   * Get the hour of the day (0-23).
   * @example DateTime.local(2017, 5, 25, 9).hour //=> 9
   * @type {number}
   */
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  /**
   * Get the minute of the hour (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30).minute //=> 30
   * @type {number}
   */
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  /**
   * Get the second of the minute (0-59).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52).second //=> 52
   * @type {number}
   */
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  /**
   * Get the millisecond of the second (0-999).
   * @example DateTime.local(2017, 5, 25, 9, 30, 52, 654).millisecond //=> 654
   * @type {number}
   */
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  /**
   * Get the week year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 12, 31).weekYear //=> 2015
   * @type {number}
   */
  get weekYear() {
    return this.isValid ? tn(this).weekYear : NaN;
  }
  /**
   * Get the week number of the week year (1-52ish).
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2017, 5, 25).weekNumber //=> 21
   * @type {number}
   */
  get weekNumber() {
    return this.isValid ? tn(this).weekNumber : NaN;
  }
  /**
   * Get the day of the week.
   * 1 is Monday and 7 is Sunday
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2014, 11, 31).weekday //=> 4
   * @type {number}
   */
  get weekday() {
    return this.isValid ? tn(this).weekday : NaN;
  }
  /**
   * Returns true if this date is on a weekend according to the locale, false otherwise
   * @returns {boolean}
   */
  get isWeekend() {
    return this.isValid && this.loc.getWeekendDays().includes(this.weekday);
  }
  /**
   * Get the day of the week according to the locale.
   * 1 is the first day of the week and 7 is the last day of the week.
   * If the locale assigns Sunday as the first day of the week, then a date which is a Sunday will return 1,
   * @returns {number}
   */
  get localWeekday() {
    return this.isValid ? sn(this).weekday : NaN;
  }
  /**
   * Get the week number of the week year according to the locale. Different locales assign week numbers differently,
   * because the week can start on different days of the week (see localWeekday) and because a different number of days
   * is required for a week to count as the first week of a year.
   * @returns {number}
   */
  get localWeekNumber() {
    return this.isValid ? sn(this).weekNumber : NaN;
  }
  /**
   * Get the week year according to the locale. Different locales assign week numbers (and therefor week years)
   * differently, see localWeekNumber.
   * @returns {number}
   */
  get localWeekYear() {
    return this.isValid ? sn(this).weekYear : NaN;
  }
  /**
   * Get the ordinal (meaning the day of the year)
   * @example DateTime.local(2017, 5, 25).ordinal //=> 145
   * @type {number|DateTime}
   */
  get ordinal() {
    return this.isValid ? Xs(this.c).ordinal : NaN;
  }
  /**
   * Get the human readable short month name, such as 'Oct'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthShort //=> Oct
   * @type {string}
   */
  get monthShort() {
    return this.isValid ? bs.months("short", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable long month name, such as 'October'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).monthLong //=> October
   * @type {string}
   */
  get monthLong() {
    return this.isValid ? bs.months("long", { locObj: this.loc })[this.month - 1] : null;
  }
  /**
   * Get the human readable short weekday, such as 'Mon'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayShort //=> Mon
   * @type {string}
   */
  get weekdayShort() {
    return this.isValid ? bs.weekdays("short", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the human readable long weekday, such as 'Monday'.
   * Defaults to the system's locale if no locale has been specified
   * @example DateTime.local(2017, 10, 30).weekdayLong //=> Monday
   * @type {string}
   */
  get weekdayLong() {
    return this.isValid ? bs.weekdays("long", { locObj: this.loc })[this.weekday - 1] : null;
  }
  /**
   * Get the UTC offset of this DateTime in minutes
   * @example DateTime.now().offset //=> -240
   * @example DateTime.utc().offset //=> 0
   * @type {number}
   */
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  /**
   * Get the short human name for the zone's current offset, for example "EST" or "EDT".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameShort() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "short",
      locale: this.locale
    }) : null;
  }
  /**
   * Get the long human name for the zone's current offset, for example "Eastern Standard Time" or "Eastern Daylight Time".
   * Defaults to the system's locale if no locale has been specified
   * @type {string}
   */
  get offsetNameLong() {
    return this.isValid ? this.zone.offsetName(this.ts, {
      format: "long",
      locale: this.locale
    }) : null;
  }
  /**
   * Get whether this zone's offset ever changes, as in a DST.
   * @type {boolean}
   */
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  /**
   * Get whether the DateTime is in a DST.
   * @type {boolean}
   */
  get isInDST() {
    return this.isOffsetFixed ? !1 : this.offset > this.set({ month: 1, day: 1 }).offset || this.offset > this.set({ month: 5 }).offset;
  }
  /**
   * Get those DateTimes which have the same local time as this DateTime, but a different offset from UTC
   * in this DateTime's zone. During DST changes local time can be ambiguous, for example
   * `2023-10-29T02:30:00` in `Europe/Berlin` can have offset `+01:00` or `+02:00`.
   * This method will return both possible DateTimes if this DateTime's local time is ambiguous.
   * @returns {DateTime[]}
   */
  getPossibleOffsets() {
    if (!this.isValid || this.isOffsetFixed)
      return [this];
    const e = 864e5, t = 6e4, i = _s(this.c), s = this.zone.offset(i - e), n = this.zone.offset(i + e), a = this.zone.offset(i - s * t), o = this.zone.offset(i - n * t);
    if (a === o)
      return [this];
    const l = i - a * t, h = i - o * t, u = ws(l, a), d = ws(h, o);
    return u.hour === d.hour && u.minute === d.minute && u.second === d.second && u.millisecond === d.millisecond ? [Ot(this, { ts: l }), Ot(this, { ts: h })] : [this];
  }
  /**
   * Returns true if this DateTime is in a leap year, false otherwise
   * @example DateTime.local(2016).isInLeapYear //=> true
   * @example DateTime.local(2013).isInLeapYear //=> false
   * @type {boolean}
   */
  get isInLeapYear() {
    return ts(this.year);
  }
  /**
   * Returns the number of days in this DateTime's month
   * @example DateTime.local(2016, 2).daysInMonth //=> 29
   * @example DateTime.local(2016, 3).daysInMonth //=> 31
   * @type {number}
   */
  get daysInMonth() {
    return Fs(this.year, this.month);
  }
  /**
   * Returns the number of days in this DateTime's year
   * @example DateTime.local(2016).daysInYear //=> 366
   * @example DateTime.local(2013).daysInYear //=> 365
   * @type {number}
   */
  get daysInYear() {
    return this.isValid ? li(this.year) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's year
   * @see https://en.wikipedia.org/wiki/ISO_week_date
   * @example DateTime.local(2004).weeksInWeekYear //=> 53
   * @example DateTime.local(2013).weeksInWeekYear //=> 52
   * @type {number}
   */
  get weeksInWeekYear() {
    return this.isValid ? Ji(this.weekYear) : NaN;
  }
  /**
   * Returns the number of weeks in this DateTime's local week year
   * @example DateTime.local(2020, 6, {locale: 'en-US'}).weeksInLocalWeekYear //=> 52
   * @example DateTime.local(2020, 6, {locale: 'de-DE'}).weeksInLocalWeekYear //=> 53
   * @type {number}
   */
  get weeksInLocalWeekYear() {
    return this.isValid ? Ji(
      this.localWeekYear,
      this.loc.getMinDaysInFirstWeek(),
      this.loc.getStartOfWeek()
    ) : NaN;
  }
  /**
   * Returns the resolved Intl options for this DateTime.
   * This is useful in understanding the behavior of formatting methods
   * @param {Object} opts - the same options as toLocaleString
   * @return {Object}
   */
  resolvedLocaleOptions(e = {}) {
    const { locale: t, numberingSystem: i, calendar: s } = Me.create(
      this.loc.clone(e),
      e
    ).resolvedOptions(this);
    return { locale: t, numberingSystem: i, outputCalendar: s };
  }
  // TRANSFORM
  /**
   * "Set" the DateTime's zone to UTC. Returns a newly-constructed DateTime.
   *
   * Equivalent to {@link DateTime#setZone}('utc')
   * @param {number} [offset=0] - optionally, an offset from UTC in minutes
   * @param {Object} [opts={}] - options to pass to `setZone()`
   * @return {DateTime}
   */
  toUTC(e = 0, t = {}) {
    return this.setZone(Fe.instance(e), t);
  }
  /**
   * "Set" the DateTime's zone to the host's local zone. Returns a newly-constructed DateTime.
   *
   * Equivalent to `setZone('local')`
   * @return {DateTime}
   */
  toLocal() {
    return this.setZone(pe.defaultZone);
  }
  /**
   * "Set" the DateTime's zone to specified zone. Returns a newly-constructed DateTime.
   *
   * By default, the setter keeps the underlying time the same (as in, the same timestamp), but the new instance will report different local times and consider DSTs when making computations, as with {@link DateTime#plus}. You may wish to use {@link DateTime#toLocal} and {@link DateTime#toUTC} which provide simple convenience wrappers for commonly used zones.
   * @param {string|Zone} [zone='local'] - a zone identifier. As a string, that can be any IANA zone supported by the host environment, or a fixed-offset name of the form 'UTC+3', or the strings 'local' or 'utc'. You may also supply an instance of a {@link DateTime#Zone} class.
   * @param {Object} opts - options
   * @param {boolean} [opts.keepLocalTime=false] - If true, adjust the underlying time so that the local time stays the same, but in the target zone. You should rarely need this.
   * @return {DateTime}
   */
  setZone(e, { keepLocalTime: t = !1, keepCalendarTime: i = !1 } = {}) {
    if (e = yt(e, pe.defaultZone), e.equals(this.zone))
      return this;
    if (e.isValid) {
      let s = this.ts;
      if (t || i) {
        const n = e.offset(this.ts), a = this.toObject();
        [s] = ks(a, n, e);
      }
      return Ot(this, { ts: s, zone: e });
    } else
      return U.invalid(Ni(e));
  }
  /**
   * "Set" the locale, numberingSystem, or outputCalendar. Returns a newly-constructed DateTime.
   * @param {Object} properties - the properties to set
   * @example DateTime.local(2017, 5, 25).reconfigure({ locale: 'en-GB' })
   * @return {DateTime}
   */
  reconfigure({ locale: e, numberingSystem: t, outputCalendar: i } = {}) {
    const s = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: i });
    return Ot(this, { loc: s });
  }
  /**
   * "Set" the locale. Returns a newly-constructed DateTime.
   * Just a convenient alias for reconfigure({ locale })
   * @example DateTime.local(2017, 5, 25).setLocale('en-GB')
   * @return {DateTime}
   */
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  /**
   * "Set" the values of specified units. Returns a newly-constructed DateTime.
   * You can only set units with this method; for "setting" metadata, see {@link DateTime#reconfigure} and {@link DateTime#setZone}.
   *
   * This method also supports setting locale-based week units, i.e. `localWeekday`, `localWeekNumber` and `localWeekYear`.
   * They cannot be mixed with ISO-week units like `weekday`.
   * @param {Object} values - a mapping of units to numbers
   * @example dt.set({ year: 2017 })
   * @example dt.set({ hour: 8, minute: 30 })
   * @example dt.set({ weekday: 5 })
   * @example dt.set({ year: 2005, ordinal: 234 })
   * @return {DateTime}
   */
  set(e) {
    if (!this.isValid) return this;
    const t = Os(e, Xr), { minDaysInFirstWeek: i, startOfWeek: s } = Ir(t, this.loc), n = !j(t.weekYear) || !j(t.weekNumber) || !j(t.weekday), a = !j(t.ordinal), o = !j(t.year), l = !j(t.month) || !j(t.day), h = o || l, u = t.weekYear || t.weekNumber;
    if ((h || a) && u)
      throw new ii(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (l && a)
      throw new ii("Can't mix ordinal dates with month/day");
    let d;
    n ? d = Ar(
      { ...Ls(this.c, i, s), ...t },
      i,
      s
    ) : j(t.ordinal) ? (d = { ...this.toObject(), ...t }, j(t.day) && (d.day = Math.min(Fs(d.year, d.month), d.day))) : d = _r({ ...Xs(this.c), ...t });
    const [f, b] = ks(d, this.o, this.zone);
    return Ot(this, { ts: f, o: b });
  }
  /**
   * Add a period of time to this DateTime and return the resulting DateTime
   *
   * Adding hours, minutes, seconds, or milliseconds increases the timestamp by the right number of milliseconds. Adding days, months, or years shifts the calendar, accounting for DSTs and leap years along the way. Thus, `dt.plus({ hours: 24 })` may result in a different time than `dt.plus({ days: 1 })` if there's a DST shift in between.
   * @param {Duration|Object|number} duration - The amount to add. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   * @example DateTime.now().plus(123) //~> in 123 milliseconds
   * @example DateTime.now().plus({ minutes: 15 }) //~> in 15 minutes
   * @example DateTime.now().plus({ days: 1 }) //~> this time tomorrow
   * @example DateTime.now().plus({ days: -1 }) //~> this time yesterday
   * @example DateTime.now().plus({ hours: 3, minutes: 13 }) //~> in 3 hr, 13 min
   * @example DateTime.now().plus(Duration.fromObject({ hours: 3, minutes: 13 })) //~> in 3 hr, 13 min
   * @return {DateTime}
   */
  plus(e) {
    if (!this.isValid) return this;
    const t = Q.fromDurationLike(e);
    return Ot(this, Jr(this, t));
  }
  /**
   * Subtract a period of time to this DateTime and return the resulting DateTime
   * See {@link DateTime#plus}
   * @param {Duration|Object|number} duration - The amount to subtract. Either a Luxon Duration, a number of milliseconds, the object argument to Duration.fromObject()
   @return {DateTime}
   */
  minus(e) {
    if (!this.isValid) return this;
    const t = Q.fromDurationLike(e).negate();
    return Ot(this, Jr(this, t));
  }
  /**
   * "Set" this DateTime to the beginning of a unit of time.
   * @param {string} unit - The unit to go to the beginning of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).startOf('month').toISODate(); //=> '2014-03-01'
   * @example DateTime.local(2014, 3, 3).startOf('year').toISODate(); //=> '2014-01-01'
   * @example DateTime.local(2014, 3, 3).startOf('week').toISODate(); //=> '2014-03-03', weeks always start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('day').toISOTime(); //=> '00:00.000-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).startOf('hour').toISOTime(); //=> '05:00:00.000-05:00'
   * @return {DateTime}
   */
  startOf(e, { useLocaleWeeks: t = !1 } = {}) {
    if (!this.isValid) return this;
    const i = {}, s = Q.normalizeUnit(e);
    switch (s) {
      case "years":
        i.month = 1;
      case "quarters":
      case "months":
        i.day = 1;
      case "weeks":
      case "days":
        i.hour = 0;
      case "hours":
        i.minute = 0;
      case "minutes":
        i.second = 0;
      case "seconds":
        i.millisecond = 0;
        break;
    }
    if (s === "weeks")
      if (t) {
        const n = this.loc.getStartOfWeek(), { weekday: a } = this;
        a < n && (i.weekNumber = this.weekNumber - 1), i.weekday = n;
      } else
        i.weekday = 1;
    if (s === "quarters") {
      const n = Math.ceil(this.month / 3);
      i.month = (n - 1) * 3 + 1;
    }
    return this.set(i);
  }
  /**
   * "Set" this DateTime to the end (meaning the last millisecond) of a unit of time
   * @param {string} unit - The unit to go to the end of. Can be 'year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', or 'millisecond'.
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week
   * @example DateTime.local(2014, 3, 3).endOf('month').toISO(); //=> '2014-03-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('year').toISO(); //=> '2014-12-31T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3).endOf('week').toISO(); // => '2014-03-09T23:59:59.999-05:00', weeks start on Mondays
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('day').toISO(); //=> '2014-03-03T23:59:59.999-05:00'
   * @example DateTime.local(2014, 3, 3, 5, 30).endOf('hour').toISO(); //=> '2014-03-03T05:59:59.999-05:00'
   * @return {DateTime}
   */
  endOf(e, t) {
    return this.isValid ? this.plus({ [e]: 1 }).startOf(e, t).minus(1) : this;
  }
  // OUTPUT
  /**
   * Returns a string representation of this DateTime formatted according to the specified format string.
   * **You may not want this.** See {@link DateTime#toLocaleString} for a more flexible formatting tool. For a table of tokens and their interpretations, see [here](https://moment.github.io/luxon/#/formatting?id=table-of-tokens).
   * Defaults to en-US if no locale has been specified, regardless of the system's locale.
   * @param {string} fmt - the format string
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toFormat('yyyy LLL dd') //=> '2017 Apr 22'
   * @example DateTime.now().setLocale('fr').toFormat('yyyy LLL dd') //=> '2017 avr. 22'
   * @example DateTime.now().toFormat('yyyy LLL dd', { locale: "fr" }) //=> '2017 avr. 22'
   * @example DateTime.now().toFormat("HH 'hours and' mm 'minutes'") //=> '20 hours and 55 minutes'
   * @return {string}
   */
  toFormat(e, t = {}) {
    return this.isValid ? Me.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e) : en;
  }
  /**
   * Returns a localized string representing this date. Accepts the same options as the Intl.DateTimeFormat constructor and any presets defined by Luxon, such as `DateTime.DATE_FULL` or `DateTime.TIME_SIMPLE`.
   * The exact behavior of this method is browser-specific, but in general it will return an appropriate representation
   * of the DateTime in the assigned locale.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat
   * @param formatOpts {Object} - Intl.DateTimeFormat constructor options and configuration options
   * @param {Object} opts - opts to override the configuration options on this DateTime
   * @example DateTime.now().toLocaleString(); //=> 4/20/2017
   * @example DateTime.now().setLocale('en-gb').toLocaleString(); //=> '20/04/2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL); //=> 'April 20, 2017'
   * @example DateTime.now().toLocaleString(DateTime.DATE_FULL, { locale: 'fr' }); //=> '28 août 2022'
   * @example DateTime.now().toLocaleString(DateTime.TIME_SIMPLE); //=> '11:32 AM'
   * @example DateTime.now().toLocaleString(DateTime.DATETIME_SHORT); //=> '4/20/2017, 11:32 AM'
   * @example DateTime.now().toLocaleString({ weekday: 'long', month: 'long', day: '2-digit' }); //=> 'Thursday, April 20'
   * @example DateTime.now().toLocaleString({ weekday: 'short', month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' }); //=> 'Thu, Apr 20, 11:27 AM'
   * @example DateTime.now().toLocaleString({ hour: '2-digit', minute: '2-digit', hourCycle: 'h23' }); //=> '11:32'
   * @return {string}
   */
  toLocaleString(e = Ds, t = {}) {
    return this.isValid ? Me.create(this.loc.clone(t), e).formatDateTime(this) : en;
  }
  /**
   * Returns an array of format "parts", meaning individual tokens along with metadata. This is allows callers to post-process individual sections of the formatted output.
   * Defaults to the system's locale if no locale has been specified
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/formatToParts
   * @param opts {Object} - Intl.DateTimeFormat constructor options, same as `toLocaleString`.
   * @example DateTime.now().toLocaleParts(); //=> [
   *                                   //=>   { type: 'day', value: '25' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'month', value: '05' },
   *                                   //=>   { type: 'literal', value: '/' },
   *                                   //=>   { type: 'year', value: '1982' }
   *                                   //=> ]
   */
  toLocaleParts(e = {}) {
    return this.isValid ? Me.create(this.loc.clone(e), e).formatDateTimeParts(this) : [];
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=false] - add the time zone format extension
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'years', 'months', 'days', 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc(1983, 5, 25).toISO() //=> '1982-05-25T00:00:00.000Z'
   * @example DateTime.now().toISO() //=> '2017-04-22T20:47:05.335-04:00'
   * @example DateTime.now().toISO({ includeOffset: false }) //=> '2017-04-22T20:47:05.335'
   * @example DateTime.now().toISO({ format: 'basic' }) //=> '20170422T204705.335-0400'
   * @example DateTime.now().toISO({ precision: 'day' }) //=> '2017-04-22Z'
   * @example DateTime.now().toISO({ precision: 'minute' }) //=> '2017-04-22T20:47Z'
   * @return {string|null}
   */
  toISO({
    format: e = "extended",
    suppressSeconds: t = !1,
    suppressMilliseconds: i = !1,
    includeOffset: s = !0,
    extendedZone: n = !1,
    precision: a = "milliseconds"
  } = {}) {
    if (!this.isValid)
      return null;
    a = xs(a);
    const o = e === "extended";
    let l = nn(this, o, a);
    return Rs.indexOf(a) >= 3 && (l += "T"), l += Kr(
      this,
      o,
      t,
      i,
      s,
      n,
      a
    ), l;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's date component
   * @param {Object} opts - options
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='day'] - truncate output to desired precision: 'years', 'months', or 'days'.
   * @example DateTime.utc(1982, 5, 25).toISODate() //=> '1982-05-25'
   * @example DateTime.utc(1982, 5, 25).toISODate({ format: 'basic' }) //=> '19820525'
   * @example DateTime.utc(1982, 5, 25).toISODate({ precision: 'month' }) //=> '1982-05'
   * @return {string|null}
   */
  toISODate({ format: e = "extended", precision: t = "day" } = {}) {
    return this.isValid ? nn(this, e === "extended", xs(t)) : null;
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's week date
   * @example DateTime.utc(1982, 5, 25).toISOWeekDate() //=> '1982-W21-2'
   * @return {string}
   */
  toISOWeekDate() {
    return ys(this, "kkkk-'W'WW-c");
  }
  /**
   * Returns an ISO 8601-compliant string representation of this DateTime's time component
   * @param {Object} opts - options
   * @param {boolean} [opts.suppressMilliseconds=false] - exclude milliseconds from the format if they're 0
   * @param {boolean} [opts.suppressSeconds=false] - exclude seconds from the format if they're 0
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.extendedZone=true] - add the time zone format extension
   * @param {boolean} [opts.includePrefix=false] - include the `T` prefix
   * @param {string} [opts.format='extended'] - choose between the basic and extended format
   * @param {string} [opts.precision='milliseconds'] - truncate output to desired presicion: 'hours', 'minutes', 'seconds' or 'milliseconds'. When precision and suppressSeconds or suppressMilliseconds are used together, precision sets the maximum unit shown in the output, however seconds or milliseconds will still be suppressed if they are 0.
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime() //=> '07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, seconds: 0, milliseconds: 0 }).toISOTime({ suppressSeconds: true }) //=> '07:34Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ format: 'basic' }) //=> '073419.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34 }).toISOTime({ includePrefix: true }) //=> 'T07:34:19.361Z'
   * @example DateTime.utc().set({ hour: 7, minute: 34, second: 56 }).toISOTime({ precision: 'minute' }) //=> '07:34Z'
   * @return {string}
   */
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: t = !1,
    includeOffset: i = !0,
    includePrefix: s = !1,
    extendedZone: n = !1,
    format: a = "extended",
    precision: o = "milliseconds"
  } = {}) {
    return this.isValid ? (o = xs(o), (s && Rs.indexOf(o) >= 3 ? "T" : "") + Kr(
      this,
      a === "extended",
      t,
      e,
      i,
      n,
      o
    )) : null;
  }
  /**
   * Returns an RFC 2822-compatible string representation of this DateTime
   * @example DateTime.utc(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 +0000'
   * @example DateTime.local(2014, 7, 13).toRFC2822() //=> 'Sun, 13 Jul 2014 00:00:00 -0400'
   * @return {string}
   */
  toRFC2822() {
    return ys(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in HTTP headers. The output is always expressed in GMT.
   * Specifically, the string conforms to RFC 1123.
   * @see https://www.w3.org/Protocols/rfc2616/rfc2616-sec3.html#sec3.3.1
   * @example DateTime.utc(2014, 7, 13).toHTTP() //=> 'Sun, 13 Jul 2014 00:00:00 GMT'
   * @example DateTime.utc(2014, 7, 13, 19).toHTTP() //=> 'Sun, 13 Jul 2014 19:00:00 GMT'
   * @return {string}
   */
  toHTTP() {
    return ys(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Date
   * @example DateTime.utc(2014, 7, 13).toSQLDate() //=> '2014-07-13'
   * @return {string|null}
   */
  toSQLDate() {
    return this.isValid ? nn(this, !0) : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL Time
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc().toSQL() //=> '05:15:16.345'
   * @example DateTime.now().toSQL() //=> '05:15:16.345 -04:00'
   * @example DateTime.now().toSQL({ includeOffset: false }) //=> '05:15:16.345'
   * @example DateTime.now().toSQL({ includeZone: false }) //=> '05:15:16.345 America/New_York'
   * @return {string}
   */
  toSQLTime({ includeOffset: e = !0, includeZone: t = !1, includeOffsetSpace: i = !0 } = {}) {
    let s = "HH:mm:ss.SSS";
    return (t || e) && (i && (s += " "), t ? s += "z" : e && (s += "ZZ")), ys(this, s, !0);
  }
  /**
   * Returns a string representation of this DateTime appropriate for use in SQL DateTime
   * @param {Object} opts - options
   * @param {boolean} [opts.includeZone=false] - include the zone, such as 'America/New_York'. Overrides includeOffset.
   * @param {boolean} [opts.includeOffset=true] - include the offset, such as 'Z' or '-04:00'
   * @param {boolean} [opts.includeOffsetSpace=true] - include the space between the time and the offset, such as '05:15:16.345 -04:00'
   * @example DateTime.utc(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 Z'
   * @example DateTime.local(2014, 7, 13).toSQL() //=> '2014-07-13 00:00:00.000 -04:00'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeOffset: false }) //=> '2014-07-13 00:00:00.000'
   * @example DateTime.local(2014, 7, 13).toSQL({ includeZone: true }) //=> '2014-07-13 00:00:00.000 America/New_York'
   * @return {string}
   */
  toSQL(e = {}) {
    return this.isValid ? `${this.toSQLDate()} ${this.toSQLTime(e)}` : null;
  }
  /**
   * Returns a string representation of this DateTime appropriate for debugging
   * @return {string}
   */
  toString() {
    return this.isValid ? this.toISO() : en;
  }
  /**
   * Returns a string representation of this DateTime appropriate for the REPL.
   * @return {string}
   */
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return this.isValid ? `DateTime { ts: ${this.toISO()}, zone: ${this.zone.name}, locale: ${this.locale} }` : `DateTime { Invalid, reason: ${this.invalidReason} }`;
  }
  /**
   * Returns the epoch milliseconds of this DateTime. Alias of {@link DateTime#toMillis}
   * @return {number}
   */
  valueOf() {
    return this.toMillis();
  }
  /**
   * Returns the epoch milliseconds of this DateTime.
   * @return {number}
   */
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  /**
   * Returns the epoch seconds (including milliseconds in the fractional part) of this DateTime.
   * @return {number}
   */
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  /**
   * Returns the epoch seconds (as a whole number) of this DateTime.
   * @return {number}
   */
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  /**
   * Returns an ISO 8601 representation of this DateTime appropriate for use in JSON.
   * @return {string}
   */
  toJSON() {
    return this.toISO();
  }
  /**
   * Returns a BSON serializable equivalent to this DateTime.
   * @return {Date}
   */
  toBSON() {
    return this.toJSDate();
  }
  /**
   * Returns a JavaScript object with this DateTime's year, month, day, and so on.
   * @param opts - options for generating the object
   * @param {boolean} [opts.includeConfig=false] - include configuration attributes in the output
   * @example DateTime.now().toObject() //=> { year: 2017, month: 4, day: 22, hour: 20, minute: 49, second: 42, millisecond: 268 }
   * @return {Object}
   */
  toObject(e = {}) {
    if (!this.isValid) return {};
    const t = { ...this.c };
    return e.includeConfig && (t.outputCalendar = this.outputCalendar, t.numberingSystem = this.loc.numberingSystem, t.locale = this.loc.locale), t;
  }
  /**
   * Returns a JavaScript Date equivalent to this DateTime.
   * @return {Date}
   */
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  // COMPARE
  /**
   * Return the difference between two DateTimes as a Duration.
   * @param {DateTime} otherDateTime - the DateTime to compare this one to
   * @param {string|string[]} [unit=['milliseconds']] - the unit or array of units (such as 'hours' or 'days') to include in the duration.
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @example
   * var i1 = DateTime.fromISO('1982-05-25T09:45'),
   *     i2 = DateTime.fromISO('1983-10-14T10:30');
   * i2.diff(i1).toObject() //=> { milliseconds: 43807500000 }
   * i2.diff(i1, 'hours').toObject() //=> { hours: 12168.75 }
   * i2.diff(i1, ['months', 'days']).toObject() //=> { months: 16, days: 19.03125 }
   * i2.diff(i1, ['months', 'days', 'hours']).toObject() //=> { months: 16, days: 19, hours: 0.75 }
   * @return {Duration}
   */
  diff(e, t = "milliseconds", i = {}) {
    if (!this.isValid || !e.isValid)
      return Q.invalid("created by diffing an invalid DateTime");
    const s = { locale: this.locale, numberingSystem: this.numberingSystem, ...i }, n = sh(t).map(Q.normalizeUnit), a = e.valueOf() > this.valueOf(), o = a ? this : e, l = a ? e : this, h = au(o, l, n, s);
    return a ? h.negate() : h;
  }
  /**
   * Return the difference between this DateTime and right now.
   * See {@link DateTime#diff}
   * @param {string|string[]} [unit=['milliseconds']] - the unit or units units (such as 'hours' or 'days') to include in the duration
   * @param {Object} opts - options that affect the creation of the Duration
   * @param {string} [opts.conversionAccuracy='casual'] - the conversion system to use
   * @return {Duration}
   */
  diffNow(e = "milliseconds", t = {}) {
    return this.diff(U.now(), e, t);
  }
  /**
   * Return an Interval spanning between this DateTime and another DateTime
   * @param {DateTime} otherDateTime - the other end point of the Interval
   * @return {Interval|DateTime}
   */
  until(e) {
    return this.isValid ? me.fromDateTimes(this, e) : this;
  }
  /**
   * Return whether this DateTime is in the same unit of time as another DateTime.
   * Higher-order units must also be identical for this function to return `true`.
   * Note that time zones are **ignored** in this comparison, which compares the **local** calendar time. Use {@link DateTime#setZone} to convert one of the dates if needed.
   * @param {DateTime} otherDateTime - the other DateTime
   * @param {string} unit - the unit of time to check sameness on
   * @param {Object} opts - options
   * @param {boolean} [opts.useLocaleWeeks=false] - If true, use weeks based on the locale, i.e. use the locale-dependent start of the week; only the locale of this DateTime is used
   * @example DateTime.now().hasSame(otherDT, 'day'); //~> true if otherDT is in the same current calendar day
   * @return {boolean}
   */
  hasSame(e, t, i) {
    if (!this.isValid) return !1;
    const s = e.valueOf(), n = this.setZone(e.zone, { keepLocalTime: !0 });
    return n.startOf(t, i) <= s && s <= n.endOf(t, i);
  }
  /**
   * Equality check
   * Two DateTimes are equal if and only if they represent the same millisecond, have the same zone and location, and are both valid.
   * To compare just the millisecond values, use `+dt1 === +dt2`.
   * @param {DateTime} other - the other DateTime
   * @return {boolean}
   */
  equals(e) {
    return this.isValid && e.isValid && this.valueOf() === e.valueOf() && this.zone.equals(e.zone) && this.loc.equals(e.loc);
  }
  /**
   * Returns a string representation of a this time relative to now, such as "in two days". Can only internationalize if your
   * platform supports Intl.RelativeTimeFormat. Rounds towards zero by default.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} [options.style="long"] - the style of units, must be "long", "short", or "narrow"
   * @param {string|string[]} options.unit - use a specific unit or array of units; if omitted, or an array, the method will pick the best unit. Use an array or one of "years", "quarters", "months", "weeks", "days", "hours", "minutes", or "seconds"
   * @param {boolean} [options.round=true] - whether to round the numbers in the output.
   * @param {string} [options.rounding="trunc"] - rounding method to use when rounding the numbers in the output. Can be "trunc" (toward zero), "expand" (away from zero), "round", "floor", or "ceil".
   * @param {number} [options.padding=0] - padding in milliseconds. This allows you to round up the result if it fits inside the threshold. Don't use in combination with {round: false} because the decimal output will include the padding.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelative() //=> "in 1 day"
   * @example DateTime.now().setLocale("es").toRelative({ days: 1 }) //=> "dentro de 1 día"
   * @example DateTime.now().plus({ days: 1 }).toRelative({ locale: "fr" }) //=> "dans 23 heures"
   * @example DateTime.now().minus({ days: 2 }).toRelative() //=> "2 days ago"
   * @example DateTime.now().minus({ days: 2 }).toRelative({ unit: "hours" }) //=> "48 hours ago"
   * @example DateTime.now().minus({ hours: 36 }).toRelative({ round: false }) //=> "1.5 days ago"
   */
  toRelative(e = {}) {
    if (!this.isValid) return null;
    const t = e.base || U.fromObject({}, { zone: this.zone }), i = e.padding ? this < t ? -e.padding : e.padding : 0;
    let s = ["years", "months", "days", "hours", "minutes", "seconds"], n = e.unit;
    return Array.isArray(e.unit) && (s = e.unit, n = void 0), ea(t, this.plus(i), {
      ...e,
      numeric: "always",
      units: s,
      unit: n
    });
  }
  /**
   * Returns a string representation of this date relative to today, such as "yesterday" or "next month".
   * Only internationalizes on platforms that supports Intl.RelativeTimeFormat.
   * @param {Object} options - options that affect the output
   * @param {DateTime} [options.base=DateTime.now()] - the DateTime to use as the basis to which this time is compared. Defaults to now.
   * @param {string} options.locale - override the locale of this DateTime
   * @param {string} options.unit - use a specific unit; if omitted, the method will pick the unit. Use one of "years", "quarters", "months", "weeks", or "days"
   * @param {string} options.numberingSystem - override the numberingSystem of this DateTime. The Intl system may choose not to honor this
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar() //=> "tomorrow"
   * @example DateTime.now().setLocale("es").plus({ days: 1 }).toRelative() //=> ""mañana"
   * @example DateTime.now().plus({ days: 1 }).toRelativeCalendar({ locale: "fr" }) //=> "demain"
   * @example DateTime.now().minus({ days: 2 }).toRelativeCalendar() //=> "2 days ago"
   */
  toRelativeCalendar(e = {}) {
    return this.isValid ? ea(e.base || U.fromObject({}, { zone: this.zone }), this, {
      ...e,
      numeric: "auto",
      units: ["years", "months", "days"],
      calendary: !0
    }) : null;
  }
  /**
   * Return the min of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the minimum
   * @return {DateTime} the min DateTime, or undefined if called with no argument
   */
  static min(...e) {
    if (!e.every(U.isDateTime))
      throw new ke("min requires all arguments be DateTimes");
    return Nr(e, (t) => t.valueOf(), Math.min);
  }
  /**
   * Return the max of several date times
   * @param {...DateTime} dateTimes - the DateTimes from which to choose the maximum
   * @return {DateTime} the max DateTime, or undefined if called with no argument
   */
  static max(...e) {
    if (!e.every(U.isDateTime))
      throw new ke("max requires all arguments be DateTimes");
    return Nr(e, (t) => t.valueOf(), Math.max);
  }
  // MISC
  /**
   * Explain how a string would be parsed by fromFormat()
   * @param {string} text - the string to parse
   * @param {string} fmt - the format the string is expected to be in (see description)
   * @param {Object} options - options taken by fromFormat()
   * @return {Object}
   */
  static fromFormatExplain(e, t, i = {}) {
    const { locale: s = null, numberingSystem: n = null } = i, a = oe.fromOpts({
      locale: s,
      numberingSystem: n,
      defaultToEN: !0
    });
    return Co(a, e, t);
  }
  /**
   * @deprecated use fromFormatExplain instead
   */
  static fromStringExplain(e, t, i = {}) {
    return U.fromFormatExplain(e, t, i);
  }
  /**
   * Build a parser for `fmt` using the given locale. This parser can be passed
   * to {@link DateTime.fromFormatParser} to a parse a date in this format. This
   * can be used to optimize cases where many dates need to be parsed in a
   * specific format.
   *
   * @param {String} fmt - the format the string is expected to be in (see
   * description)
   * @param {Object} options - options used to set locale and numberingSystem
   * for parser
   * @returns {TokenParser} - opaque object to be used
   */
  static buildFormatParser(e, t = {}) {
    const { locale: i = null, numberingSystem: s = null } = t, n = oe.fromOpts({
      locale: i,
      numberingSystem: s,
      defaultToEN: !0
    });
    return new yo(n, e);
  }
  /**
   * Create a DateTime from an input string and format parser.
   *
   * The format parser must have been created with the same locale as this call.
   *
   * @param {String} text - the string to parse
   * @param {TokenParser} formatParser - parser from {@link DateTime.buildFormatParser}
   * @param {Object} opts - options taken by fromFormat()
   * @returns {DateTime}
   */
  static fromFormatParser(e, t, i = {}) {
    if (j(e) || j(t))
      throw new ke(
        "fromFormatParser requires an input string and a format parser"
      );
    const { locale: s = null, numberingSystem: n = null } = i, a = oe.fromOpts({
      locale: s,
      numberingSystem: n,
      defaultToEN: !0
    });
    if (!a.equals(t.locale))
      throw new ke(
        `fromFormatParser called with a locale of ${a}, but the format parser was created for ${t.locale}`
      );
    const { result: o, zone: l, specificOffset: h, invalidReason: u } = t.explainFromTokens(e);
    return u ? U.invalid(u) : ti(
      o,
      l,
      i,
      `format ${t.format}`,
      e,
      h
    );
  }
  // FORMAT PRESETS
  /**
   * {@link DateTime#toLocaleString} format like 10/14/1983
   * @type {Object}
   */
  static get DATE_SHORT() {
    return Ds;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED() {
    return ka;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, Oct 14, 1983'
   * @type {Object}
   */
  static get DATE_MED_WITH_WEEKDAY() {
    return Ll;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983'
   * @type {Object}
   */
  static get DATE_FULL() {
    return Ra;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Tuesday, October 14, 1983'
   * @type {Object}
   */
  static get DATE_HUGE() {
    return xa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_SIMPLE() {
    return Ma;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SECONDS() {
    return Sa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_SHORT_OFFSET() {
    return Da;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get TIME_WITH_LONG_OFFSET() {
    return La;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_SIMPLE() {
    return Fa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SECONDS() {
    return Oa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 EDT', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_SHORT_OFFSET() {
    return za;
  }
  /**
   * {@link DateTime#toLocaleString} format like '09:30:23 Eastern Daylight Time', always 24-hour.
   * @type {Object}
   */
  static get TIME_24_WITH_LONG_OFFSET() {
    return Ha;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT() {
    return Pa;
  }
  /**
   * {@link DateTime#toLocaleString} format like '10/14/1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_SHORT_WITH_SECONDS() {
    return Aa;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED() {
    return _a;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Oct 14, 1983, 9:30:33 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_SECONDS() {
    return Ia;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Fri, 14 Oct 1983, 9:30 AM'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_MED_WITH_WEEKDAY() {
    return Fl;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL() {
    return Na;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'October 14, 1983, 9:30:33 AM EDT'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_FULL_WITH_SECONDS() {
    return Va;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE() {
    return Ba;
  }
  /**
   * {@link DateTime#toLocaleString} format like 'Friday, October 14, 1983, 9:30:33 AM Eastern Daylight Time'. Only 12-hour if the locale is.
   * @type {Object}
   */
  static get DATETIME_HUGE_WITH_SECONDS() {
    return Wa;
  }
}
function Pi(r) {
  if (U.isDateTime(r))
    return r;
  if (r && r.valueOf && Rt(r.valueOf()))
    return U.fromJSDate(r);
  if (r && typeof r == "object")
    return U.fromObject(r);
  throw new ke(
    `Unknown datetime argument: ${r}, of type ${typeof r}`
  );
}
class Te {
  constructor(e) {
    this.table = e;
  }
  //////////////////////////////////////////
  /////////////// DataLoad /////////////////
  //////////////////////////////////////////
  reloadData(e, t, i) {
    return this.table.dataLoader.load(e, void 0, void 0, void 0, t, i);
  }
  //////////////////////////////////////////
  ///////////// Localization ///////////////
  //////////////////////////////////////////
  langText() {
    return this.table.modules.localize.getText(...arguments);
  }
  langBind() {
    return this.table.modules.localize.bind(...arguments);
  }
  langLocale() {
    return this.table.modules.localize.getLocale(...arguments);
  }
  //////////////////////////////////////////
  ////////// Inter Table Comms /////////////
  //////////////////////////////////////////
  commsConnections() {
    return this.table.modules.comms.getConnections(...arguments);
  }
  commsSend() {
    return this.table.modules.comms.send(...arguments);
  }
  //////////////////////////////////////////
  //////////////// Layout  /////////////////
  //////////////////////////////////////////
  layoutMode() {
    return this.table.modules.layout.getMode();
  }
  layoutRefresh(e) {
    return this.table.modules.layout.layout(e);
  }
  //////////////////////////////////////////
  /////////////// Event Bus ////////////////
  //////////////////////////////////////////
  subscribe() {
    return this.table.eventBus.subscribe(...arguments);
  }
  unsubscribe() {
    return this.table.eventBus.unsubscribe(...arguments);
  }
  subscribed(e) {
    return this.table.eventBus.subscribed(e);
  }
  subscriptionChange() {
    return this.table.eventBus.subscriptionChange(...arguments);
  }
  dispatch() {
    return this.table.eventBus.dispatch(...arguments);
  }
  chain() {
    return this.table.eventBus.chain(...arguments);
  }
  confirm() {
    return this.table.eventBus.confirm(...arguments);
  }
  dispatchExternal() {
    return this.table.externalEvents.dispatch(...arguments);
  }
  subscribedExternal(e) {
    return this.table.externalEvents.subscribed(e);
  }
  subscriptionChangeExternal() {
    return this.table.externalEvents.subscriptionChange(...arguments);
  }
  //////////////////////////////////////////
  //////////////// Options /////////////////
  //////////////////////////////////////////
  options(e) {
    return this.table.options[e];
  }
  setOption(e, t) {
    return typeof t < "u" && (this.table.options[e] = t), this.table.options[e];
  }
  //////////////////////////////////////////
  /////////// Deprecation Checks ///////////
  //////////////////////////////////////////
  deprecationCheck(e, t, i) {
    return this.table.deprecationAdvisor.check(e, t, i);
  }
  deprecationCheckMsg(e, t) {
    return this.table.deprecationAdvisor.checkMsg(e, t);
  }
  deprecationMsg(e) {
    return this.table.deprecationAdvisor.msg(e);
  }
  //////////////////////////////////////////
  //////////////// Modules /////////////////
  //////////////////////////////////////////
  module(e) {
    return this.table.module(e);
  }
}
class de {
  static elVisible(e) {
    return !(e.offsetWidth <= 0 && e.offsetHeight <= 0);
  }
  static elOffset(e) {
    var t = e.getBoundingClientRect();
    return {
      top: t.top + window.pageYOffset - document.documentElement.clientTop,
      left: t.left + window.pageXOffset - document.documentElement.clientLeft
    };
  }
  static retrieveNestedData(e, t, i) {
    var s = e ? t.split(e) : [t], n = s.length, a;
    for (let o = 0; o < n && (i = i[s[o]], a = i, !!i); o++)
      ;
    return a;
  }
  static deepClone(e, t, i = []) {
    var s = {}.__proto__, n = [].__proto__;
    t || (t = Object.assign(Array.isArray(e) ? [] : {}, e));
    for (var a in e) {
      let o = e[a], l, h;
      o != null && typeof o == "object" && (o.__proto__ === s || o.__proto__ === n) && (l = i.findIndex((u) => u.subject === o), l > -1 ? t[a] = i[l].copy : (h = Object.assign(Array.isArray(o) ? [] : {}, o), i.unshift({ subject: o, copy: h }), t[a] = this.deepClone(o, h, i)));
    }
    return t;
  }
}
let Ru = class Ro extends Te {
  constructor(e, t, i) {
    super(e), this.element = t, this.container = this._lookupContainer(), this.parent = i, this.reversedX = !1, this.childPopup = null, this.blurable = !1, this.blurCallback = null, this.blurEventsBound = !1, this.renderedCallback = null, this.visible = !1, this.hideable = !0, this.element.classList.add("tabulator-popup-container"), this.blurEvent = this.hide.bind(this, !1), this.escEvent = this._escapeCheck.bind(this), this.destroyBinding = this.tableDestroyed.bind(this), this.destroyed = !1;
  }
  tableDestroyed() {
    this.destroyed = !0, this.hide(!0);
  }
  _lookupContainer() {
    var e = this.table.options.popupContainer;
    return typeof e == "string" ? (e = document.querySelector(e), e || console.warn("Menu Error - no container element found matching selector:", this.table.options.popupContainer, "(defaulting to document body)")) : e === !0 && (e = this.table.element), e && !this._checkContainerIsParent(e) && (e = !1, console.warn("Menu Error - container element does not contain this table:", this.table.options.popupContainer, "(defaulting to document body)")), e || (e = document.body), e;
  }
  _checkContainerIsParent(e, t = this.table.element) {
    return e === t ? !0 : t.parentNode ? this._checkContainerIsParent(e, t.parentNode) : !1;
  }
  renderCallback(e) {
    this.renderedCallback = e;
  }
  containerEventCoords(e) {
    var t = !(e instanceof MouseEvent), i = t ? e.touches[0].pageX : e.pageX, s = t ? e.touches[0].pageY : e.pageY;
    if (this.container !== document.body) {
      let n = de.elOffset(this.container);
      i -= n.left, s -= n.top;
    }
    return { x: i, y: s };
  }
  elementPositionCoords(e, t = "right") {
    var i = de.elOffset(e), s, n, a;
    switch (this.container !== document.body && (s = de.elOffset(this.container), i.left -= s.left, i.top -= s.top), t) {
      case "right":
        n = i.left + e.offsetWidth, a = i.top - 1;
        break;
      case "bottom":
        n = i.left, a = i.top + e.offsetHeight;
        break;
      case "left":
        n = i.left, a = i.top - 1;
        break;
      case "top":
        n = i.left, a = i.top;
        break;
      case "center":
        n = i.left + e.offsetWidth / 2, a = i.top + e.offsetHeight / 2;
        break;
    }
    return { x: n, y: a, offset: i };
  }
  show(e, t) {
    var i, s, n, a, o;
    return this.destroyed || this.table.destroyed ? this : (e instanceof HTMLElement ? (n = e, o = this.elementPositionCoords(e, t), a = o.offset, i = o.x, s = o.y) : typeof e == "number" ? (a = { top: 0, left: 0 }, i = e, s = t) : (o = this.containerEventCoords(e), i = o.x, s = o.y, this.reversedX = !1), this.element.style.top = s + "px", this.element.style.left = i + "px", this.container.appendChild(this.element), typeof this.renderedCallback == "function" && this.renderedCallback(), this._fitToScreen(i, s, n, a, t), this.visible = !0, this.subscribe("table-destroy", this.destroyBinding), this.element.addEventListener("mousedown", (l) => {
      l.stopPropagation();
    }), this);
  }
  _fitToScreen(e, t, i, s, n) {
    var a = this.container === document.body ? document.documentElement.scrollTop : this.container.scrollTop;
    (e + this.element.offsetWidth >= this.container.offsetWidth || this.reversedX) && (this.element.style.left = "", i ? this.element.style.right = this.container.offsetWidth - s.left + "px" : this.element.style.right = this.container.offsetWidth - e + "px", this.reversedX = !0);
    let o = Math.max(this.container.offsetHeight, a ? this.container.scrollHeight : 0);
    if (t + this.element.offsetHeight > o)
      if (i)
        switch (n) {
          case "bottom":
            this.element.style.top = parseInt(this.element.style.top) - this.element.offsetHeight - i.offsetHeight - 1 + "px";
            break;
          default:
            this.element.style.top = parseInt(this.element.style.top) - this.element.offsetHeight + i.offsetHeight + 1 + "px";
        }
      else
        this.element.style.height = o + "px";
  }
  isVisible() {
    return this.visible;
  }
  hideOnBlur(e) {
    return this.blurable = !0, this.visible && (setTimeout(() => {
      this.visible && (this.table.rowManager.element.addEventListener("scroll", this.blurEvent), this.subscribe("cell-editing", this.blurEvent), document.body.addEventListener("click", this.blurEvent), document.body.addEventListener("contextmenu", this.blurEvent), document.body.addEventListener("mousedown", this.blurEvent), window.addEventListener("resize", this.blurEvent), document.body.addEventListener("keydown", this.escEvent), this.blurEventsBound = !0);
    }, 100), this.blurCallback = e), this;
  }
  _escapeCheck(e) {
    e.keyCode == 27 && this.hide();
  }
  blockHide() {
    this.hideable = !1;
  }
  restoreHide() {
    this.hideable = !0;
  }
  hide(e = !1) {
    return this.visible && this.hideable && (this.blurable && this.blurEventsBound && (document.body.removeEventListener("keydown", this.escEvent), document.body.removeEventListener("click", this.blurEvent), document.body.removeEventListener("contextmenu", this.blurEvent), document.body.removeEventListener("mousedown", this.blurEvent), window.removeEventListener("resize", this.blurEvent), this.table.rowManager.element.removeEventListener("scroll", this.blurEvent), this.unsubscribe("cell-editing", this.blurEvent), this.blurEventsBound = !1), this.childPopup && this.childPopup.hide(), this.parent && (this.parent.childPopup = null), this.element.parentNode && this.element.parentNode.removeChild(this.element), this.visible = !1, this.blurCallback && !e && this.blurCallback(), this.unsubscribe("table-destroy", this.destroyBinding)), this;
  }
  child(e) {
    return this.childPopup && this.childPopup.hide(), this.childPopup = new Ro(this.table, e, this), this.childPopup;
  }
};
class $ extends Te {
  constructor(e, t) {
    super(e), this._handler = null;
  }
  initialize() {
  }
  ///////////////////////////////////
  ////// Options Registration ///////
  ///////////////////////////////////
  registerTableOption(e, t) {
    this.table.optionsList.register(e, t);
  }
  registerColumnOption(e, t) {
    this.table.columnManager.optionsList.register(e, t);
  }
  ///////////////////////////////////
  /// Public Function Registration ///
  ///////////////////////////////////
  registerTableFunction(e, t) {
    typeof this.table[e] > "u" ? this.table[e] = (...i) => (this.table.initGuard(e), t(...i)) : console.warn("Unable to bind table function, name already in use", e);
  }
  registerComponentFunction(e, t, i) {
    return this.table.componentFunctionBinder.bind(e, t, i);
  }
  ///////////////////////////////////
  ////////// Data Pipeline //////////
  ///////////////////////////////////
  registerDataHandler(e, t) {
    this.table.rowManager.registerDataPipelineHandler(e, t), this._handler = e;
  }
  registerDisplayHandler(e, t) {
    this.table.rowManager.registerDisplayPipelineHandler(e, t), this._handler = e;
  }
  displayRows(e) {
    var t = this.table.rowManager.displayRows.length - 1, i;
    if (this._handler && (i = this.table.rowManager.displayPipeline.findIndex((s) => s.handler === this._handler), i > -1 && (t = i)), e && (t = t + e), this._handler)
      return t > -1 ? this.table.rowManager.getDisplayRows(t) : this.activeRows();
  }
  activeRows() {
    return this.table.rowManager.activeRows;
  }
  refreshData(e, t) {
    t || (t = this._handler), t && this.table.rowManager.refreshActiveData(t, !1, e);
  }
  ///////////////////////////////////
  //////// Footer Management ////////
  ///////////////////////////////////
  footerAppend(e) {
    return this.table.footerManager.append(e);
  }
  footerPrepend(e) {
    return this.table.footerManager.prepend(e);
  }
  footerRemove(e) {
    return this.table.footerManager.remove(e);
  }
  ///////////////////////////////////
  //////// Popups Management ////////
  ///////////////////////////////////
  popup(e, t) {
    return new Ru(this.table, e, t);
  }
  ///////////////////////////////////
  //////// Alert Management ////////
  ///////////////////////////////////
  alert(e, t) {
    return this.table.alertManager.alert(e, t);
  }
  clearAlert() {
    return this.table.alertManager.clear();
  }
}
var xu = {
  rownum: function(r, e, t, i, s, n) {
    return n.getPosition();
  }
};
const ni = class ni extends $ {
  constructor(e) {
    super(e), this.allowedTypes = ["", "data", "download", "clipboard", "print", "htmlOutput"], this.registerColumnOption("accessor"), this.registerColumnOption("accessorParams"), this.registerColumnOption("accessorData"), this.registerColumnOption("accessorDataParams"), this.registerColumnOption("accessorDownload"), this.registerColumnOption("accessorDownloadParams"), this.registerColumnOption("accessorClipboard"), this.registerColumnOption("accessorClipboardParams"), this.registerColumnOption("accessorPrint"), this.registerColumnOption("accessorPrintParams"), this.registerColumnOption("accessorHtmlOutput"), this.registerColumnOption("accessorHtmlOutputParams");
  }
  initialize() {
    this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("row-data-retrieve", this.transformRow.bind(this));
  }
  //initialize column accessor
  initializeColumn(e) {
    var t = !1, i = {};
    this.allowedTypes.forEach((s) => {
      var n = "accessor" + (s.charAt(0).toUpperCase() + s.slice(1)), a;
      e.definition[n] && (a = this.lookupAccessor(e.definition[n]), a && (t = !0, i[n] = {
        accessor: a,
        params: e.definition[n + "Params"] || {}
      }));
    }), t && (e.modules.accessor = i);
  }
  lookupAccessor(e) {
    var t = !1;
    switch (typeof e) {
      case "string":
        ni.accessors[e] ? t = ni.accessors[e] : console.warn("Accessor Error - No such accessor found, ignoring: ", e);
        break;
      case "function":
        t = e;
        break;
    }
    return t;
  }
  //apply accessor to row
  transformRow(e, t) {
    var i = "accessor" + (t.charAt(0).toUpperCase() + t.slice(1)), s = e.getComponent(), n = de.deepClone(e.data || {});
    return this.table.columnManager.traverse(function(a) {
      var o, l, h, u;
      a.modules.accessor && (l = a.modules.accessor[i] || a.modules.accessor.accessor || !1, l && (o = a.getFieldValue(n), o != "undefined" && (u = a.getComponent(), h = typeof l.params == "function" ? l.params(o, n, t, u, s) : l.params, a.setFieldValue(n, l.accessor(o, n, t, h, u, s)))));
    }), n;
  }
};
F(ni, "moduleName", "accessor"), //load defaults
F(ni, "accessors", xu);
let Tn = ni;
var Mu = {
  method: "GET"
};
function kn(r, e) {
  var t = [];
  if (e = e || "", Array.isArray(r))
    r.forEach((s, n) => {
      t = t.concat(kn(s, e ? e + "[" + n + "]" : n));
    });
  else if (typeof r == "object")
    for (var i in r)
      t = t.concat(kn(r[i], e ? e + "[" + i + "]" : i));
  else
    t.push({ key: e, value: r });
  return t;
}
function Su(r) {
  var e = kn(r), t = [];
  return e.forEach(function(i) {
    t.push(encodeURIComponent(i.key) + "=" + encodeURIComponent(i.value));
  }), t.join("&");
}
function xo(r, e, t) {
  return r && t && Object.keys(t).length && (!e.method || e.method.toLowerCase() == "get") && (e.method = "get", r += (r.includes("?") ? "&" : "?") + Su(t)), r;
}
function Du(r, e, t) {
  var i;
  return new Promise((s, n) => {
    if (r = this.urlGenerator.call(this.table, r, e, t), e.method.toUpperCase() != "GET")
      if (i = typeof this.table.options.ajaxContentType == "object" ? this.table.options.ajaxContentType : this.contentTypeFormatters[this.table.options.ajaxContentType], i) {
        for (var a in i.headers)
          e.headers || (e.headers = {}), typeof e.headers[a] > "u" && (e.headers[a] = i.headers[a]);
        e.body = i.body.call(this, r, e, t);
      } else
        console.warn("Ajax Error - Invalid ajaxContentType value:", this.table.options.ajaxContentType);
    r ? (typeof e.headers > "u" && (e.headers = {}), typeof e.headers.Accept > "u" && (e.headers.Accept = "application/json"), typeof e.headers["X-Requested-With"] > "u" && (e.headers["X-Requested-With"] = "XMLHttpRequest"), typeof e.mode > "u" && (e.mode = "cors"), e.mode == "cors" ? (typeof e.headers.Origin > "u" && (e.headers.Origin = window.location.origin), typeof e.credentials > "u" && (e.credentials = "same-origin")) : typeof e.credentials > "u" && (e.credentials = "include"), fetch(r, e).then((o) => {
      o.ok ? o.json().then((l) => {
        s(l);
      }).catch((l) => {
        n(l), console.warn("Ajax Load Error - Invalid JSON returned", l);
      }) : (console.error("Ajax Load Error - Connection Error: " + o.status, o.statusText), n(o));
    }).catch((o) => {
      console.error("Ajax Load Error - Connection Error: ", o), n(o);
    })) : (console.warn("Ajax Load Error - No URL Set"), s([]));
  });
}
function Rn(r, e) {
  var t = [];
  if (e = e || "", Array.isArray(r))
    r.forEach((s, n) => {
      t = t.concat(Rn(s, e ? e + "[" + n + "]" : n));
    });
  else if (typeof r == "object")
    for (var i in r)
      t = t.concat(Rn(r[i], e ? e + "[" + i + "]" : i));
  else
    t.push({ key: e, value: r });
  return t;
}
var Lu = {
  json: {
    headers: {
      "Content-Type": "application/json"
    },
    body: function(r, e, t) {
      return JSON.stringify(t);
    }
  },
  form: {
    headers: {},
    body: function(r, e, t) {
      var i = Rn(t), s = new FormData();
      return i.forEach(function(n) {
        s.append(n.key, n.value);
      }), s;
    }
  }
};
const Je = class Je extends $ {
  constructor(e) {
    super(e), this.config = {}, this.url = "", this.urlGenerator = !1, this.params = !1, this.loaderPromise = !1, this.registerTableOption("ajaxURL", !1), this.registerTableOption("ajaxURLGenerator", !1), this.registerTableOption("ajaxParams", {}), this.registerTableOption("ajaxConfig", "get"), this.registerTableOption("ajaxContentType", "form"), this.registerTableOption("ajaxRequestFunc", !1), this.registerTableOption("ajaxRequesting", function() {
    }), this.registerTableOption("ajaxResponse", !1), this.contentTypeFormatters = Je.contentTypeFormatters;
  }
  //initialize setup options
  initialize() {
    this.loaderPromise = this.table.options.ajaxRequestFunc || Je.defaultLoaderPromise, this.urlGenerator = this.table.options.ajaxURLGenerator || Je.defaultURLGenerator, this.table.options.ajaxURL && this.setUrl(this.table.options.ajaxURL), this.setDefaultConfig(this.table.options.ajaxConfig), this.registerTableFunction("getAjaxUrl", this.getUrl.bind(this)), this.subscribe("data-loading", this.requestDataCheck.bind(this)), this.subscribe("data-params", this.requestParams.bind(this)), this.subscribe("data-load", this.requestData.bind(this));
  }
  requestParams(e, t, i, s) {
    var n = this.table.options.ajaxParams;
    return n && (typeof n == "function" && (n = n.call(this.table)), s = Object.assign(Object.assign({}, n), s)), s;
  }
  requestDataCheck(e, t, i, s) {
    return !!(!e && this.url || typeof e == "string");
  }
  requestData(e, t, i, s, n) {
    var a;
    return !n && this.requestDataCheck(e) ? (e && this.setUrl(e), a = this.generateConfig(i), this.sendRequest(this.url, t, a)) : n;
  }
  setDefaultConfig(e = {}) {
    this.config = Object.assign({}, Je.defaultConfig), typeof e == "string" ? this.config.method = e : Object.assign(this.config, e);
  }
  //load config object
  generateConfig(e = {}) {
    var t = Object.assign({}, this.config);
    return typeof e == "string" ? t.method = e : Object.assign(t, e), t;
  }
  //set request url
  setUrl(e) {
    this.url = e;
  }
  //get request url
  getUrl() {
    return this.url;
  }
  //send ajax request
  sendRequest(e, t, i) {
    return this.table.options.ajaxRequesting.call(this.table, e, t) !== !1 ? this.loaderPromise(e, i, t).then((s) => (this.table.options.ajaxResponse && (s = this.table.options.ajaxResponse.call(this.table, e, t, s)), s)) : Promise.reject();
  }
};
F(Je, "moduleName", "ajax"), //load defaults
F(Je, "defaultConfig", Mu), F(Je, "defaultURLGenerator", xo), F(Je, "defaultLoaderPromise", Du), F(Je, "contentTypeFormatters", Lu);
let xn = Je;
var Fu = {
  replace: function(r) {
    return this.table.setData(r);
  },
  update: function(r) {
    return this.table.updateOrAddData(r);
  },
  insert: function(r) {
    return this.table.addData(r);
  }
}, Ou = {
  table: function(r) {
    var e = [], t = !0, i = this.table.columnManager.columns, s = [], n = [];
    return r = r.split(`
`), r.forEach(function(a) {
      e.push(a.split("	"));
    }), e.length && !(e.length === 1 && e[0].length < 2) ? (e[0].forEach(function(a) {
      var o = i.find(function(l) {
        return a && l.definition.title && a.trim() && l.definition.title.trim() === a.trim();
      });
      o ? s.push(o) : t = !1;
    }), t || (t = !0, s = [], e[0].forEach(function(a) {
      var o = i.find(function(l) {
        return a && l.field && a.trim() && l.field.trim() === a.trim();
      });
      o ? s.push(o) : t = !1;
    }), t || (s = this.table.columnManager.columnsByIndex)), t && e.shift(), e.forEach(function(a) {
      var o = {};
      a.forEach(function(l, h) {
        s[h] && (o[s[h].field] = l);
      }), n.push(o);
    }), n) : !1;
  }
}, zu = {
  copyToClipboard: ["ctrl + 67", "meta + 67"]
}, Hu = {
  copyToClipboard: function(r) {
    this.table.modules.edit.currentCell || this.table.modExists("clipboard", !0) && this.table.modules.clipboard.copy(!1, !0);
  }
}, Pu = {
  keybindings: {
    bindings: zu,
    actions: Hu
  }
};
const mt = class mt extends $ {
  constructor(e) {
    super(e), this.mode = !0, this.pasteParser = function() {
    }, this.pasteAction = function() {
    }, this.customSelection = !1, this.rowRange = !1, this.blocked = !0, this.registerTableOption("clipboard", !1), this.registerTableOption("clipboardCopyStyled", !0), this.registerTableOption("clipboardCopyConfig", !1), this.registerTableOption("clipboardCopyFormatter", !1), this.registerTableOption("clipboardCopyRowRange", "active"), this.registerTableOption("clipboardPasteParser", "table"), this.registerTableOption("clipboardPasteAction", "insert"), this.registerColumnOption("clipboard"), this.registerColumnOption("titleClipboard");
  }
  initialize() {
    this.mode = this.table.options.clipboard, this.rowRange = this.table.options.clipboardCopyRowRange, (this.mode === !0 || this.mode === "copy") && this.table.element.addEventListener("copy", (e) => {
      var t, i, s;
      this.blocked || (e.preventDefault(), this.customSelection ? (t = this.customSelection, this.table.options.clipboardCopyFormatter && (t = this.table.options.clipboardCopyFormatter("plain", t))) : (s = this.table.modules.export.generateExportList(this.table.options.clipboardCopyConfig, this.table.options.clipboardCopyStyled, this.rowRange, "clipboard"), i = this.table.modules.export.generateHTMLTable(s), t = i ? this.generatePlainContent(s) : "", this.table.options.clipboardCopyFormatter && (t = this.table.options.clipboardCopyFormatter("plain", t), i = this.table.options.clipboardCopyFormatter("html", i))), window.clipboardData && window.clipboardData.setData ? window.clipboardData.setData("Text", t) : e.clipboardData && e.clipboardData.setData ? (e.clipboardData.setData("text/plain", t), i && e.clipboardData.setData("text/html", i)) : e.originalEvent && e.originalEvent.clipboardData.setData && (e.originalEvent.clipboardData.setData("text/plain", t), i && e.originalEvent.clipboardData.setData("text/html", i)), this.dispatchExternal("clipboardCopied", t, i), this.reset());
    }), (this.mode === !0 || this.mode === "paste") && this.table.element.addEventListener("paste", (e) => {
      this.paste(e);
    }), this.setPasteParser(this.table.options.clipboardPasteParser), this.setPasteAction(this.table.options.clipboardPasteAction), this.registerTableFunction("copyToClipboard", this.copy.bind(this));
  }
  reset() {
    this.blocked = !0, this.customSelection = !1;
  }
  generatePlainContent(e) {
    var t = [];
    return e.forEach((i) => {
      var s = [];
      i.columns.forEach((n) => {
        var a = "";
        if (n)
          if (i.type === "group" && (n.value = n.component.getKey()), n.value === null)
            a = "";
          else
            switch (typeof n.value) {
              case "object":
                a = JSON.stringify(n.value);
                break;
              case "undefined":
                a = "";
                break;
              default:
                a = n.value;
            }
        s.push(a);
      }), t.push(s.join("	"));
    }), t.join(`
`);
  }
  copy(e, t) {
    var i, s;
    this.blocked = !1, this.customSelection = !1, (this.mode === !0 || this.mode === "copy") && (this.rowRange = e || this.table.options.clipboardCopyRowRange, typeof window.getSelection < "u" && typeof document.createRange < "u" ? (e = document.createRange(), e.selectNodeContents(this.table.element), i = window.getSelection(), i.toString() && t && (this.customSelection = i.toString()), i.removeAllRanges(), i.addRange(e)) : typeof document.selection < "u" && typeof document.body.createTextRange < "u" && (s = document.body.createTextRange(), s.moveToElementText(this.table.element), s.select()), document.execCommand("copy"), i && i.removeAllRanges());
  }
  //PASTE EVENT HANDLING
  setPasteAction(e) {
    switch (typeof e) {
      case "string":
        this.pasteAction = mt.pasteActions[e], this.pasteAction || console.warn("Clipboard Error - No such paste action found:", e);
        break;
      case "function":
        this.pasteAction = e;
        break;
    }
  }
  setPasteParser(e) {
    switch (typeof e) {
      case "string":
        this.pasteParser = mt.pasteParsers[e], this.pasteParser || console.warn("Clipboard Error - No such paste parser found:", e);
        break;
      case "function":
        this.pasteParser = e;
        break;
    }
  }
  paste(e) {
    var t, i, s;
    this.checkPasteOrigin(e) && (t = this.getPasteData(e), i = this.pasteParser.call(this, t), i ? (e.preventDefault(), this.table.modExists("mutator") && (i = this.mutateData(i)), s = this.pasteAction.call(this, i), this.dispatchExternal("clipboardPasted", t, i, s)) : this.dispatchExternal("clipboardPasteError", t));
  }
  mutateData(e) {
    var t = [];
    return Array.isArray(e) ? e.forEach((i) => {
      t.push(this.table.modules.mutator.transformRow(i, "clipboard"));
    }) : t = e, t;
  }
  checkPasteOrigin(e) {
    var t = !0, i = this.confirm("clipboard-paste", [e]);
    return (i || !["DIV", "SPAN"].includes(e.target.tagName)) && (t = !1), t;
  }
  getPasteData(e) {
    var t;
    return window.clipboardData && window.clipboardData.getData ? t = window.clipboardData.getData("Text") : e.clipboardData && e.clipboardData.getData ? t = e.clipboardData.getData("text/plain") : e.originalEvent && e.originalEvent.clipboardData.getData && (t = e.originalEvent.clipboardData.getData("text/plain")), t;
  }
};
F(mt, "moduleName", "clipboard"), F(mt, "moduleExtensions", Pu), //load defaults
F(mt, "pasteActions", Fu), F(mt, "pasteParsers", Ou);
let Mn = mt;
class Au {
  constructor(e) {
    return this._row = e, new Proxy(this, {
      get: function(t, i, s) {
        return typeof t[i] < "u" ? t[i] : t._row.table.componentFunctionBinder.handle("row", t._row, i);
      }
    });
  }
  getData(e) {
    return this._row.getData(e);
  }
  getElement() {
    return this._row.getElement();
  }
  getTable() {
    return this._row.table;
  }
  getCells() {
    var e = [];
    return this._row.getCells().forEach(function(t) {
      e.push(t.getComponent());
    }), e;
  }
  getCell(e) {
    var t = this._row.getCell(e);
    return t ? t.getComponent() : !1;
  }
  _getSelf() {
    return this._row;
  }
}
class Mo {
  constructor(e) {
    return this._cell = e, new Proxy(this, {
      get: function(t, i, s) {
        return typeof t[i] < "u" ? t[i] : t._cell.table.componentFunctionBinder.handle("cell", t._cell, i);
      }
    });
  }
  getValue() {
    return this._cell.getValue();
  }
  getOldValue() {
    return this._cell.getOldValue();
  }
  getInitialValue() {
    return this._cell.initialValue;
  }
  getElement() {
    return this._cell.getElement();
  }
  getRow() {
    return this._cell.row.getComponent();
  }
  getData(e) {
    return this._cell.row.getData(e);
  }
  getType() {
    return "cell";
  }
  getField() {
    return this._cell.column.getField();
  }
  getColumn() {
    return this._cell.column.getComponent();
  }
  setValue(e, t) {
    typeof t > "u" && (t = !0), this._cell.setValue(e, t);
  }
  restoreOldValue() {
    this._cell.setValueActual(this._cell.getOldValue());
  }
  restoreInitialValue() {
    this._cell.setValueActual(this._cell.initialValue);
  }
  checkHeight() {
    this._cell.checkHeight();
  }
  getTable() {
    return this._cell.table;
  }
  _getSelf() {
    return this._cell;
  }
}
class ns extends Te {
  constructor(e, t) {
    super(e.table), this.table = e.table, this.column = e, this.row = t, this.element = null, this.value = null, this.initialValue, this.oldValue = null, this.modules = {}, this.height = null, this.width = null, this.minWidth = null, this.component = null, this.loaded = !1, this.build();
  }
  //////////////// Setup Functions /////////////////
  //generate element
  build() {
    this.generateElement(), this.setWidth(), this._configureCell(), this.setValueActual(this.column.getFieldValue(this.row.data)), this.initialValue = this.value;
  }
  generateElement() {
    this.element = document.createElement("div"), this.element.className = "tabulator-cell", this.element.setAttribute("role", "gridcell"), this.column.isRowHeader && this.element.classList.add("tabulator-row-header");
  }
  _configureCell() {
    var e = this.element, t = this.column.getField(), i = {
      top: "flex-start",
      bottom: "flex-end",
      middle: "center"
    }, s = {
      left: "flex-start",
      right: "flex-end",
      center: "center"
    };
    if (e.style.textAlign = this.column.hozAlign, this.column.vertAlign && (e.style.display = "inline-flex", e.style.alignItems = i[this.column.vertAlign] || "", this.column.hozAlign && (e.style.justifyContent = s[this.column.hozAlign] || "")), t && e.setAttribute("tabulator-field", t), this.column.definition.cssClass) {
      var n = this.column.definition.cssClass.split(" ");
      n.forEach((a) => {
        e.classList.add(a);
      });
    }
    this.dispatch("cell-init", this), this.column.visible || this.hide();
  }
  //generate cell contents
  _generateContents() {
    var e;
    switch (e = this.chain("cell-format", this, null, () => this.element.innerHTML = this.value), typeof e) {
      case "object":
        if (e instanceof Node) {
          for (; this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
          this.element.appendChild(e);
        } else
          this.element.innerHTML = "", e != null && console.warn("Format Error - Formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", e);
        break;
      case "undefined":
        this.element.innerHTML = "";
        break;
      default:
        this.element.innerHTML = e;
    }
  }
  cellRendered() {
    this.dispatch("cell-rendered", this);
  }
  //////////////////// Getters ////////////////////
  getElement(e) {
    return this.loaded || (this.loaded = !0, e || this.layoutElement()), this.element;
  }
  getValue() {
    return this.value;
  }
  getOldValue() {
    return this.oldValue;
  }
  //////////////////// Actions ////////////////////
  setValue(e, t, i) {
    var s = this.setValueProcessData(e, t, i);
    s && (this.dispatch("cell-value-updated", this), this.cellRendered(), this.column.definition.cellEdited && this.column.definition.cellEdited.call(this.table, this.getComponent()), this.dispatchExternal("cellEdited", this.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()));
  }
  setValueProcessData(e, t, i) {
    var s = !1;
    return (this.value !== e || i) && (s = !0, t && (e = this.chain("cell-value-changing", [this, e], null, e))), this.setValueActual(e), s && this.dispatch("cell-value-changed", this), s;
  }
  setValueActual(e) {
    this.oldValue = this.value, this.value = e, this.dispatch("cell-value-save-before", this), this.column.setFieldValue(this.row.data, e), this.dispatch("cell-value-save-after", this), this.loaded && this.layoutElement();
  }
  layoutElement() {
    this._generateContents(), this.dispatch("cell-layout", this);
  }
  setWidth() {
    this.width = this.column.width, this.element.style.width = this.column.widthStyled;
  }
  clearWidth() {
    this.width = "", this.element.style.width = "";
  }
  getWidth() {
    return this.width || this.element.offsetWidth;
  }
  setMinWidth() {
    this.minWidth = this.column.minWidth, this.element.style.minWidth = this.column.minWidthStyled;
  }
  setMaxWidth() {
    this.maxWidth = this.column.maxWidth, this.element.style.maxWidth = this.column.maxWidthStyled;
  }
  checkHeight() {
    this.row.reinitializeHeight();
  }
  clearHeight() {
    this.element.style.height = "", this.height = null, this.dispatch("cell-height", this, "");
  }
  setHeight() {
    this.height = this.row.height, this.element.style.height = this.row.heightStyled, this.dispatch("cell-height", this, this.row.heightStyled);
  }
  getHeight() {
    return this.height || this.element.offsetHeight;
  }
  show() {
    this.element.style.display = this.column.vertAlign ? "inline-flex" : "";
  }
  hide() {
    this.element.style.display = "none";
  }
  delete() {
    this.dispatch("cell-delete", this), !this.table.rowManager.redrawBlock && this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = !1, this.column.deleteCell(this), this.row.deleteCell(this), this.calcs = {};
  }
  getIndex() {
    return this.row.getCellIndex(this);
  }
  //////////////// Object Generation /////////////////
  getComponent() {
    return this.component || (this.component = new Mo(this)), this.component;
  }
}
class So {
  constructor(e) {
    return this._column = e, this.type = "ColumnComponent", new Proxy(this, {
      get: function(t, i, s) {
        return typeof t[i] < "u" ? t[i] : t._column.table.componentFunctionBinder.handle("column", t._column, i);
      }
    });
  }
  getElement() {
    return this._column.getElement();
  }
  getDefinition() {
    return this._column.getDefinition();
  }
  getField() {
    return this._column.getField();
  }
  getTitleDownload() {
    return this._column.getTitleDownload();
  }
  getCells() {
    var e = [];
    return this._column.cells.forEach(function(t) {
      e.push(t.getComponent());
    }), e;
  }
  isVisible() {
    return this._column.visible;
  }
  show() {
    this._column.isGroup ? this._column.columns.forEach(function(e) {
      e.show();
    }) : this._column.show();
  }
  hide() {
    this._column.isGroup ? this._column.columns.forEach(function(e) {
      e.hide();
    }) : this._column.hide();
  }
  toggle() {
    this._column.visible ? this.hide() : this.show();
  }
  delete() {
    return this._column.delete();
  }
  getSubColumns() {
    var e = [];
    return this._column.columns.length && this._column.columns.forEach(function(t) {
      e.push(t.getComponent());
    }), e;
  }
  getParentColumn() {
    return this._column.getParentComponent();
  }
  _getSelf() {
    return this._column;
  }
  scrollTo(e, t) {
    return this._column.table.columnManager.scrollToColumn(this._column, e, t);
  }
  getTable() {
    return this._column.table;
  }
  move(e, t) {
    var i = this._column.table.columnManager.findColumn(e);
    i ? this._column.table.columnManager.moveColumn(this._column, i, t) : console.warn("Move Error - No matching column found:", i);
  }
  getNextColumn() {
    var e = this._column.nextColumn();
    return e ? e.getComponent() : !1;
  }
  getPrevColumn() {
    var e = this._column.prevColumn();
    return e ? e.getComponent() : !1;
  }
  updateDefinition(e) {
    return this._column.updateDefinition(e);
  }
  getWidth() {
    return this._column.getWidth();
  }
  setWidth(e) {
    var t;
    return e === !0 ? t = this._column.reinitializeWidth(!0) : t = this._column.setWidth(e), this._column.table.columnManager.rerenderColumns(!0), t;
  }
}
var Do = {
  title: void 0,
  field: void 0,
  columns: void 0,
  visible: void 0,
  hozAlign: void 0,
  vertAlign: void 0,
  width: void 0,
  minWidth: 40,
  maxWidth: void 0,
  maxInitialWidth: void 0,
  cssClass: void 0,
  variableHeight: void 0,
  headerVertical: void 0,
  headerHozAlign: void 0,
  headerWordWrap: !1,
  editableTitle: void 0
};
const Ht = class Ht extends Te {
  constructor(e, t, i) {
    super(t.table), this.definition = e, this.parent = t, this.type = "column", this.columns = [], this.cells = [], this.isGroup = !1, this.isRowHeader = i, this.element = this.createElement(), this.contentElement = !1, this.titleHolderElement = !1, this.titleElement = !1, this.groupElement = this.createGroupElement(), this.hozAlign = "", this.vertAlign = "", this.field = "", this.fieldStructure = "", this.getFieldValue = "", this.setFieldValue = "", this.titleDownload = null, this.titleFormatterRendered = !1, this.mapDefinitions(), this.setField(this.definition.field), this.modules = {}, this.width = null, this.widthStyled = "", this.maxWidth = null, this.maxWidthStyled = "", this.maxInitialWidth = null, this.minWidth = null, this.minWidthStyled = "", this.widthFixed = !1, this.visible = !0, this.component = null, this.definition.columns ? (this.isGroup = !0, this.definition.columns.forEach((s, n) => {
      var a = new Ht(s, this);
      this.attachColumn(a);
    }), this.checkColumnVisibility()) : t.registerColumnField(this), this._initialize();
  }
  createElement() {
    var e = document.createElement("div");
    switch (e.classList.add("tabulator-col"), e.setAttribute("role", "columnheader"), e.setAttribute("aria-sort", "none"), this.isRowHeader && e.classList.add("tabulator-row-header"), this.table.options.columnHeaderVertAlign) {
      case "middle":
        e.style.justifyContent = "center";
        break;
      case "bottom":
        e.style.justifyContent = "flex-end";
        break;
    }
    return e;
  }
  createGroupElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-col-group-cols"), e;
  }
  mapDefinitions() {
    var e = this.table.options.columnDefaults;
    if (e)
      for (let t in e)
        typeof this.definition[t] > "u" && (this.definition[t] = e[t]);
    this.definition = this.table.columnManager.optionsList.generate(Ht.defaultOptionList, this.definition);
  }
  checkDefinition() {
    Object.keys(this.definition).forEach((e) => {
      Ht.defaultOptionList.indexOf(e) === -1 && console.warn("Invalid column definition option in '" + (this.field || this.definition.title) + "' column:", e);
    });
  }
  setField(e) {
    this.field = e, this.fieldStructure = e ? this.table.options.nestedFieldSeparator ? e.split(this.table.options.nestedFieldSeparator) : [e] : [], this.getFieldValue = this.fieldStructure.length > 1 ? this._getNestedData : this._getFlatData, this.setFieldValue = this.fieldStructure.length > 1 ? this._setNestedData : this._setFlatData;
  }
  //register column position with column manager
  registerColumnPosition(e) {
    this.parent.registerColumnPosition(e);
  }
  //register column position with column manager
  registerColumnField(e) {
    this.parent.registerColumnField(e);
  }
  //trigger position registration
  reRegisterPosition() {
    this.isGroup ? this.columns.forEach(function(e) {
      e.reRegisterPosition();
    }) : this.registerColumnPosition(this);
  }
  //build header element
  _initialize() {
    for (var e = this.definition; this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
    e.headerVertical && (this.element.classList.add("tabulator-col-vertical"), e.headerVertical === "flip" && this.element.classList.add("tabulator-col-vertical-flip")), this.contentElement = this._buildColumnHeaderContent(), this.element.appendChild(this.contentElement), this.isGroup ? this._buildGroupHeader() : this._buildColumnHeader(), this.dispatch("column-init", this);
  }
  //build header element for header
  _buildColumnHeader() {
    var e = this.definition;
    if (this.dispatch("column-layout", this), typeof e.visible < "u" && (e.visible ? this.show(!0) : this.hide(!0)), e.cssClass) {
      var t = e.cssClass.split(" ");
      t.forEach((i) => {
        this.element.classList.add(i);
      });
    }
    e.field && this.element.setAttribute("tabulator-field", e.field), this.setMinWidth(parseInt(e.minWidth)), e.maxInitialWidth && (this.maxInitialWidth = parseInt(e.maxInitialWidth)), e.maxWidth && this.setMaxWidth(parseInt(e.maxWidth)), this.reinitializeWidth(), this.hozAlign = this.definition.hozAlign, this.vertAlign = this.definition.vertAlign, this.titleElement.style.textAlign = this.definition.headerHozAlign;
  }
  _buildColumnHeaderContent() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-col-content"), this.titleHolderElement = document.createElement("div"), this.titleHolderElement.classList.add("tabulator-col-title-holder"), e.appendChild(this.titleHolderElement), this.titleElement = this._buildColumnHeaderTitle(), this.titleHolderElement.appendChild(this.titleElement), e;
  }
  //build title element of column
  _buildColumnHeaderTitle() {
    var e = this.definition, t = document.createElement("div");
    if (t.classList.add("tabulator-col-title"), e.headerWordWrap && t.classList.add("tabulator-col-title-wrap"), e.editableTitle) {
      var i = document.createElement("input");
      i.classList.add("tabulator-title-editor"), i.addEventListener("click", (s) => {
        s.stopPropagation(), i.focus();
      }), i.addEventListener("mousedown", (s) => {
        s.stopPropagation();
      }), i.addEventListener("change", () => {
        e.title = i.value, this.dispatchExternal("columnTitleChanged", this.getComponent());
      }), t.appendChild(i), e.field ? this.langBind("columns|" + e.field, (s) => {
        i.value = s || e.title || "&nbsp;";
      }) : i.value = e.title || "&nbsp;";
    } else
      e.field ? this.langBind("columns|" + e.field, (s) => {
        this._formatColumnHeaderTitle(t, s || e.title || "&nbsp;");
      }) : this._formatColumnHeaderTitle(t, e.title || "&nbsp;");
    return t;
  }
  _formatColumnHeaderTitle(e, t) {
    var i = this.chain("column-format", [this, t, e], null, () => t);
    switch (typeof i) {
      case "object":
        i instanceof Node ? e.appendChild(i) : (e.innerHTML = "", console.warn("Format Error - Title formatter has returned a type of object, the only valid formatter object return is an instance of Node, the formatter returned:", i));
        break;
      case "undefined":
        e.innerHTML = "";
        break;
      default:
        e.innerHTML = i;
    }
  }
  //build header element for column group
  _buildGroupHeader() {
    if (this.element.classList.add("tabulator-col-group"), this.element.setAttribute("role", "columngroup"), this.element.setAttribute("aria-title", this.definition.title), this.definition.cssClass) {
      var e = this.definition.cssClass.split(" ");
      e.forEach((t) => {
        this.element.classList.add(t);
      });
    }
    this.titleElement.style.textAlign = this.definition.headerHozAlign, this.element.appendChild(this.groupElement);
  }
  //flat field lookup
  _getFlatData(e) {
    return e[this.field];
  }
  //nested field lookup
  _getNestedData(e) {
    var t = e, i = this.fieldStructure, s = i.length, n;
    for (let a = 0; a < s && (t = t[i[a]], n = t, !!t); a++)
      ;
    return n;
  }
  //flat field set
  _setFlatData(e, t) {
    this.field && (e[this.field] = t);
  }
  //nested field set
  _setNestedData(e, t) {
    var i = e, s = this.fieldStructure, n = s.length;
    for (let a = 0; a < n; a++)
      if (a == n - 1)
        i[s[a]] = t;
      else {
        if (!i[s[a]])
          if (typeof t < "u")
            i[s[a]] = {};
          else
            break;
        i = i[s[a]];
      }
  }
  //attach column to this group
  attachColumn(e) {
    this.groupElement ? (this.columns.push(e), this.groupElement.appendChild(e.getElement()), e.columnRendered()) : console.warn("Column Warning - Column being attached to another column instead of column group");
  }
  //vertically align header in column
  verticalAlign(e, t) {
    var i = this.parent.isGroup ? this.parent.getGroupElement().clientHeight : t || this.parent.getHeadersElement().clientHeight;
    this.element.style.height = i + "px", this.dispatch("column-height", this, this.element.style.height), this.isGroup && (this.groupElement.style.minHeight = i - this.contentElement.offsetHeight + "px"), this.columns.forEach(function(s) {
      s.verticalAlign(e);
    });
  }
  //clear vertical alignment
  clearVerticalAlign() {
    this.element.style.paddingTop = "", this.element.style.height = "", this.element.style.minHeight = "", this.groupElement.style.minHeight = "", this.columns.forEach(function(e) {
      e.clearVerticalAlign();
    }), this.dispatch("column-height", this, "");
  }
  //// Retrieve Column Information ////
  //return column header element
  getElement() {
    return this.element;
  }
  //return column group element
  getGroupElement() {
    return this.groupElement;
  }
  //return field name
  getField() {
    return this.field;
  }
  getTitleDownload() {
    return this.titleDownload;
  }
  //return the first column in a group
  getFirstColumn() {
    return this.isGroup ? this.columns.length ? this.columns[0].getFirstColumn() : !1 : this;
  }
  //return the last column in a group
  getLastColumn() {
    return this.isGroup ? this.columns.length ? this.columns[this.columns.length - 1].getLastColumn() : !1 : this;
  }
  //return all columns in a group
  getColumns(e) {
    var t = [];
    return e ? this.columns.forEach((i) => {
      t.push(i), t = t.concat(i.getColumns(!0));
    }) : t = this.columns, t;
  }
  //return all columns in a group
  getCells() {
    return this.cells;
  }
  //retrieve the top column in a group of columns
  getTopColumn() {
    return this.parent.isGroup ? this.parent.getTopColumn() : this;
  }
  //return column definition object
  getDefinition(e) {
    var t = [];
    return this.isGroup && e && (this.columns.forEach(function(i) {
      t.push(i.getDefinition(!0));
    }), this.definition.columns = t), this.definition;
  }
  //////////////////// Actions ////////////////////
  checkColumnVisibility() {
    var e = !1;
    this.columns.forEach(function(t) {
      t.visible && (e = !0);
    }), e ? (this.show(), this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !1)) : this.hide();
  }
  //show column
  show(e, t) {
    this.visible || (this.visible = !0, this.element.style.display = "", this.parent.isGroup && this.parent.checkColumnVisibility(), this.cells.forEach(function(i) {
      i.show();
    }), !this.isGroup && this.width === null && this.reinitializeWidth(), this.table.columnManager.verticalAlignHeaders(), this.dispatch("column-show", this, t), e || this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !0), this.parent.isGroup && this.parent.matchChildWidths(), this.silent || this.table.columnManager.rerenderColumns());
  }
  //hide column
  hide(e, t) {
    this.visible && (this.visible = !1, this.element.style.display = "none", this.table.columnManager.verticalAlignHeaders(), this.parent.isGroup && this.parent.checkColumnVisibility(), this.cells.forEach(function(i) {
      i.hide();
    }), this.dispatch("column-hide", this, t), e || this.dispatchExternal("columnVisibilityChanged", this.getComponent(), !1), this.parent.isGroup && this.parent.matchChildWidths(), this.silent || this.table.columnManager.rerenderColumns());
  }
  matchChildWidths() {
    var e = 0;
    this.contentElement && this.columns.length && (this.columns.forEach(function(t) {
      t.visible && (e += t.getWidth());
    }), this.contentElement.style.maxWidth = e - 1 + "px", this.table.initialized && (this.element.style.width = e + "px"), this.parent.isGroup && this.parent.matchChildWidths());
  }
  removeChild(e) {
    var t = this.columns.indexOf(e);
    t > -1 && this.columns.splice(t, 1), this.columns.length || this.delete();
  }
  setWidth(e) {
    this.widthFixed = !0, this.setWidthActual(e);
  }
  setWidthActual(e) {
    isNaN(e) && (e = Math.floor(this.table.element.clientWidth / 100 * parseInt(e))), e = Math.max(this.minWidth, e), this.maxWidth && (e = Math.min(this.maxWidth, e)), this.width = e, this.widthStyled = e ? e + "px" : "", this.element.style.width = this.widthStyled, this.isGroup || this.cells.forEach(function(t) {
      t.setWidth();
    }), this.parent.isGroup && this.parent.matchChildWidths(), this.dispatch("column-width", this), this.subscribedExternal("columnWidth") && this.dispatchExternal("columnWidth", this.getComponent());
  }
  checkCellHeights() {
    var e = [];
    this.cells.forEach(function(t) {
      t.row.heightInitialized && (t.row.getElement().offsetParent !== null ? (e.push(t.row), t.row.clearCellHeight()) : t.row.heightInitialized = !1);
    }), e.forEach(function(t) {
      t.calcHeight();
    }), e.forEach(function(t) {
      t.setCellHeight();
    });
  }
  getWidth() {
    var e = 0;
    return this.isGroup ? this.columns.forEach(function(t) {
      t.visible && (e += t.getWidth());
    }) : e = this.width, e;
  }
  getLeftOffset() {
    var e = this.element.offsetLeft;
    return this.parent.isGroup && (e += this.parent.getLeftOffset()), e;
  }
  getHeight() {
    return Math.ceil(this.element.getBoundingClientRect().height);
  }
  setMinWidth(e) {
    this.maxWidth && e > this.maxWidth && (e = this.maxWidth, console.warn("the minWidth (" + e + "px) for column '" + this.field + "' cannot be bigger that its maxWidth (" + this.maxWidthStyled + ")")), this.minWidth = e, this.minWidthStyled = e ? e + "px" : "", this.element.style.minWidth = this.minWidthStyled, this.cells.forEach(function(t) {
      t.setMinWidth();
    });
  }
  setMaxWidth(e) {
    this.minWidth && e < this.minWidth && (e = this.minWidth, console.warn("the maxWidth (" + e + "px) for column '" + this.field + "' cannot be smaller that its minWidth (" + this.minWidthStyled + ")")), this.maxWidth = e, this.maxWidthStyled = e ? e + "px" : "", this.element.style.maxWidth = this.maxWidthStyled, this.cells.forEach(function(t) {
      t.setMaxWidth();
    });
  }
  delete() {
    return new Promise((e, t) => {
      this.isGroup && this.columns.forEach(function(s) {
        s.delete();
      }), this.dispatch("column-delete", this);
      var i = this.cells.length;
      for (let s = 0; s < i; s++)
        this.cells[0].delete();
      this.element.parentNode && this.element.parentNode.removeChild(this.element), this.element = !1, this.contentElement = !1, this.titleElement = !1, this.groupElement = !1, this.parent.isGroup && this.parent.removeChild(this), this.table.columnManager.deregisterColumn(this), this.table.columnManager.rerenderColumns(!0), this.dispatch("column-deleted", this), e();
    });
  }
  columnRendered() {
    this.titleFormatterRendered && this.titleFormatterRendered(), this.dispatch("column-rendered", this);
  }
  //////////////// Cell Management /////////////////
  //generate cell for this column
  generateCell(e) {
    var t = new ns(this, e);
    return this.cells.push(t), t;
  }
  nextColumn() {
    var e = this.table.columnManager.findColumnIndex(this);
    return e > -1 ? this._nextVisibleColumn(e + 1) : !1;
  }
  _nextVisibleColumn(e) {
    var t = this.table.columnManager.getColumnByIndex(e);
    return !t || t.visible ? t : this._nextVisibleColumn(e + 1);
  }
  prevColumn() {
    var e = this.table.columnManager.findColumnIndex(this);
    return e > -1 ? this._prevVisibleColumn(e - 1) : !1;
  }
  _prevVisibleColumn(e) {
    var t = this.table.columnManager.getColumnByIndex(e);
    return !t || t.visible ? t : this._prevVisibleColumn(e - 1);
  }
  reinitializeWidth(e) {
    this.widthFixed = !1, typeof this.definition.width < "u" && !e && this.setWidth(this.definition.width), this.dispatch("column-width-fit-before", this), this.fitToData(e), this.dispatch("column-width-fit-after", this);
  }
  //set column width to maximum cell width for non group columns
  fitToData(e) {
    if (!this.isGroup) {
      this.widthFixed || (this.element.style.width = "", this.cells.forEach((s) => {
        s.clearWidth();
      }));
      var t = this.element.offsetWidth;
      if ((!this.width || !this.widthFixed) && (this.cells.forEach((s) => {
        var n = s.getWidth();
        n > t && (t = n);
      }), t)) {
        var i = t + 1;
        e ? this.setWidth(i) : (this.maxInitialWidth && !e && (i = Math.min(i, this.maxInitialWidth)), this.setWidthActual(i));
      }
    }
  }
  updateDefinition(e) {
    var t;
    return this.isGroup || this.parent.isGroup ? (console.error("Column Update Error - The updateDefinition function is only available on ungrouped columns"), Promise.reject("Column Update Error - The updateDefinition function is only available on columns, not column groups")) : (t = Object.assign({}, this.getDefinition()), t = Object.assign(t, e), this.table.columnManager.addColumn(t, !1, this).then((i) => (t.field == this.field && (this.field = !1), this.delete().then(() => i.getComponent()))));
  }
  deleteCell(e) {
    var t = this.cells.indexOf(e);
    t > -1 && this.cells.splice(t, 1);
  }
  //////////////// Object Generation /////////////////
  getComponent() {
    return this.component || (this.component = new So(this)), this.component;
  }
  getPosition() {
    return this.table.columnManager.getVisibleColumnsByIndex().indexOf(this) + 1;
  }
  getParentComponent() {
    return this.parent instanceof Ht ? this.parent.getComponent() : !1;
  }
};
F(Ht, "defaultOptionList", Do);
let jt = Ht;
class Vs {
  constructor(e) {
    return this._row = e, new Proxy(this, {
      get: function(t, i, s) {
        return typeof t[i] < "u" ? t[i] : t._row.table.componentFunctionBinder.handle("row", t._row, i);
      }
    });
  }
  getData(e) {
    return this._row.getData(e);
  }
  getElement() {
    return this._row.getElement();
  }
  getCells() {
    var e = [];
    return this._row.getCells().forEach(function(t) {
      e.push(t.getComponent());
    }), e;
  }
  getCell(e) {
    var t = this._row.getCell(e);
    return t ? t.getComponent() : !1;
  }
  getIndex() {
    return this._row.getData("data")[this._row.table.options.index];
  }
  getPosition() {
    return this._row.getPosition();
  }
  watchPosition(e) {
    return this._row.watchPosition(e);
  }
  delete() {
    return this._row.delete();
  }
  scrollTo(e, t) {
    return this._row.table.rowManager.scrollToRow(this._row, e, t);
  }
  move(e, t) {
    this._row.moveToRow(e, t);
  }
  update(e) {
    return this._row.updateData(e);
  }
  normalizeHeight() {
    this._row.normalizeHeight(!0);
  }
  _getSelf() {
    return this._row;
  }
  reformat() {
    return this._row.reinitialize();
  }
  getTable() {
    return this._row.table;
  }
  getNextRow() {
    var e = this._row.nextRow();
    return e && e.getComponent();
  }
  getPrevRow() {
    var e = this._row.prevRow();
    return e && e.getComponent();
  }
}
class xe extends Te {
  constructor(e, t, i = "row") {
    super(t.table), this.parent = t, this.data = {}, this.type = i, this.element = !1, this.modules = {}, this.cells = [], this.height = 0, this.heightStyled = "", this.manualHeight = !1, this.outerHeight = 0, this.initialized = !1, this.heightInitialized = !1, this.position = 0, this.positionWatchers = [], this.component = null, this.created = !1, this.setData(e);
  }
  create() {
    this.created || (this.created = !0, this.generateElement());
  }
  createElement() {
    var e = document.createElement("div");
    e.classList.add("tabulator-row"), e.setAttribute("role", "row"), this.element = e;
  }
  getElement() {
    return this.create(), this.element;
  }
  detachElement() {
    this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
  }
  generateElement() {
    this.createElement(), this.dispatch("row-init", this);
  }
  generateCells() {
    this.cells = this.table.columnManager.generateCells(this);
  }
  //functions to setup on first render
  initialize(e, t) {
    if (this.create(), !this.initialized || e) {
      for (this.deleteCells(); this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
      this.dispatch("row-layout-before", this), this.generateCells(), this.initialized = !0, this.table.columnManager.renderer.renderRowCells(this, t), e && this.normalizeHeight(), this.dispatch("row-layout", this), this.table.options.rowFormatter && this.table.options.rowFormatter(this.getComponent()), this.dispatch("row-layout-after", this);
    } else
      this.table.columnManager.renderer.rerenderRowCells(this, t);
  }
  rendered() {
    this.cells.forEach((e) => {
      e.cellRendered();
    });
  }
  reinitializeHeight() {
    this.heightInitialized = !1, this.element && this.element.offsetParent !== null && this.normalizeHeight(!0);
  }
  deinitialize() {
    this.initialized = !1;
  }
  deinitializeHeight() {
    this.heightInitialized = !1;
  }
  reinitialize(e) {
    this.initialized = !1, this.heightInitialized = !1, this.manualHeight || (this.height = 0, this.heightStyled = ""), this.element && this.element.offsetParent !== null && this.initialize(!0), this.dispatch("row-relayout", this);
  }
  //get heights when doing bulk row style calcs in virtual DOM
  calcHeight(e) {
    var t = 0, i = 0;
    this.table.options.rowHeight ? this.height = this.table.options.rowHeight : (i = this.calcMinHeight(), t = this.calcMaxHeight(), e ? this.height = Math.max(t, i) : this.height = this.manualHeight ? this.height : Math.max(t, i)), this.heightStyled = this.height ? this.height + "px" : "", this.outerHeight = this.element.offsetHeight;
  }
  calcMinHeight() {
    return this.table.options.resizableRows ? this.element.clientHeight : 0;
  }
  calcMaxHeight() {
    var e = 0;
    return this.cells.forEach(function(t) {
      var i = t.getHeight();
      i > e && (e = i);
    }), e;
  }
  //set of cells
  setCellHeight() {
    this.cells.forEach(function(e) {
      e.setHeight();
    }), this.heightInitialized = !0;
  }
  clearCellHeight() {
    this.cells.forEach(function(e) {
      e.clearHeight();
    });
  }
  //normalize the height of elements in the row
  normalizeHeight(e) {
    e && !this.table.options.rowHeight && this.clearCellHeight(), this.calcHeight(e), this.setCellHeight();
  }
  //set height of rows
  setHeight(e, t) {
    (this.height != e || t) && (this.manualHeight = !0, this.height = e, this.heightStyled = e ? e + "px" : "", this.setCellHeight(), this.outerHeight = this.element.offsetHeight, this.subscribedExternal("rowHeight") && this.dispatchExternal("rowHeight", this.getComponent()));
  }
  //return rows outer height
  getHeight() {
    return this.outerHeight;
  }
  //return rows outer Width
  getWidth() {
    return this.element.offsetWidth;
  }
  //////////////// Cell Management /////////////////
  deleteCell(e) {
    var t = this.cells.indexOf(e);
    t > -1 && this.cells.splice(t, 1);
  }
  //////////////// Data Management /////////////////
  setData(e) {
    this.data = this.chain("row-data-init-before", [this, e], void 0, e), this.dispatch("row-data-init-after", this);
  }
  //update the rows data
  updateData(e) {
    var t = this.element && de.elVisible(this.element), i = {}, s;
    return new Promise((n, a) => {
      typeof e == "string" && (e = JSON.parse(e)), this.dispatch("row-data-save-before", this), this.subscribed("row-data-changing") && (i = Object.assign(i, this.data), i = Object.assign(i, e)), s = this.chain("row-data-changing", [this, i, e], null, e);
      for (let o in s)
        this.data[o] = s[o];
      this.dispatch("row-data-save-after", this);
      for (let o in e)
        this.table.columnManager.getColumnsByFieldRoot(o).forEach((h) => {
          let u = this.getCell(h.getField());
          if (u) {
            let d = h.getFieldValue(s);
            u.getValue() !== d && (u.setValueProcessData(d), t && u.cellRendered());
          }
        });
      t ? (this.normalizeHeight(!0), this.table.options.rowFormatter && this.table.options.rowFormatter(this.getComponent())) : (this.initialized = !1, this.height = 0, this.heightStyled = ""), this.dispatch("row-data-changed", this, t, e), this.dispatchExternal("rowUpdated", this.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()), n();
    });
  }
  getData(e) {
    return e ? this.chain("row-data-retrieve", [this, e], null, this.data) : this.data;
  }
  getCell(e) {
    var t = !1;
    return e = this.table.columnManager.findColumn(e), !this.initialized && this.cells.length === 0 && this.generateCells(), t = this.cells.find(function(i) {
      return i.column === e;
    }), t;
  }
  getCellIndex(e) {
    return this.cells.findIndex(function(t) {
      return t === e;
    });
  }
  findCell(e) {
    return this.cells.find((t) => t.element === e);
  }
  getCells() {
    return !this.initialized && this.cells.length === 0 && this.generateCells(), this.cells;
  }
  nextRow() {
    var e = this.table.rowManager.nextDisplayRow(this, !0);
    return e || !1;
  }
  prevRow() {
    var e = this.table.rowManager.prevDisplayRow(this, !0);
    return e || !1;
  }
  moveToRow(e, t) {
    var i = this.table.rowManager.findRow(e);
    i ? (this.table.rowManager.moveRowActual(this, i, !t), this.table.rowManager.refreshActiveData("display", !1, !0)) : console.warn("Move Error - No matching row found:", e);
  }
  ///////////////////// Actions  /////////////////////
  delete() {
    return this.dispatch("row-delete", this), this.deleteActual(), Promise.resolve();
  }
  deleteActual(e) {
    this.detachModules(), this.table.rowManager.deleteRow(this, e), this.deleteCells(), this.initialized = !1, this.heightInitialized = !1, this.element = !1, this.dispatch("row-deleted", this);
  }
  detachModules() {
    this.dispatch("row-deleting", this);
  }
  deleteCells() {
    var e = this.cells.length;
    for (let t = 0; t < e; t++)
      this.cells[0].delete();
  }
  wipe() {
    if (this.detachModules(), this.deleteCells(), this.element) {
      for (; this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
      this.element.parentNode && this.element.parentNode.removeChild(this.element);
    }
    this.element = !1, this.modules = {};
  }
  isDisplayed() {
    return this.table.rowManager.getDisplayRows().includes(this);
  }
  getPosition() {
    return this.isDisplayed() ? this.position : !1;
  }
  setPosition(e) {
    e != this.position && (this.position = e, this.positionWatchers.forEach((t) => {
      t(this.position);
    }));
  }
  watchPosition(e) {
    this.positionWatchers.push(e), e(this.position);
  }
  getGroup() {
    return this.modules.group || !1;
  }
  //////////////// Object Generation /////////////////
  getComponent() {
    return this.component || (this.component = new Vs(this)), this.component;
  }
}
var _u = {
  avg: function(r, e, t) {
    var i = 0, s = typeof t.precision < "u" ? t.precision : 2;
    return r.length && (i = r.reduce(function(n, a) {
      return Number(n) + Number(a);
    }), i = i / r.length, i = s !== !1 ? i.toFixed(s) : i), parseFloat(i).toString();
  },
  max: function(r, e, t) {
    var i = null, s = typeof t.precision < "u" ? t.precision : !1;
    return r.forEach(function(n) {
      n = Number(n), (n > i || i === null) && (i = n);
    }), i !== null ? s !== !1 ? i.toFixed(s) : i : "";
  },
  min: function(r, e, t) {
    var i = null, s = typeof t.precision < "u" ? t.precision : !1;
    return r.forEach(function(n) {
      n = Number(n), (n < i || i === null) && (i = n);
    }), i !== null ? s !== !1 ? i.toFixed(s) : i : "";
  },
  sum: function(r, e, t) {
    var i = 0, s = typeof t.precision < "u" ? t.precision : !1;
    return r.length && r.forEach(function(n) {
      n = Number(n), i += isNaN(n) ? 0 : Number(n);
    }), s !== !1 ? i.toFixed(s) : i;
  },
  concat: function(r, e, t) {
    var i = 0;
    return r.length && (i = r.reduce(function(s, n) {
      return String(s) + String(n);
    })), i;
  },
  count: function(r, e, t) {
    var i = 0;
    return r.length && r.forEach(function(s) {
      s && i++;
    }), i;
  },
  unique: function(r, e, t) {
    var i = r.filter((s, n) => (r || s === 0) && r.indexOf(s) === n);
    return i.length;
  }
};
const pt = class pt extends $ {
  constructor(e) {
    super(e), this.topCalcs = [], this.botCalcs = [], this.genColumn = !1, this.topElement = this.createElement(), this.botElement = this.createElement(), this.topRow = !1, this.botRow = !1, this.topInitialized = !1, this.botInitialized = !1, this.blocked = !1, this.recalcAfterBlock = !1, this.registerTableOption("columnCalcs", !0), this.registerColumnOption("topCalc"), this.registerColumnOption("topCalcParams"), this.registerColumnOption("topCalcFormatter"), this.registerColumnOption("topCalcFormatterParams"), this.registerColumnOption("bottomCalc"), this.registerColumnOption("bottomCalcParams"), this.registerColumnOption("bottomCalcFormatter"), this.registerColumnOption("bottomCalcFormatterParams");
  }
  createElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-calcs-holder"), e;
  }
  initialize() {
    this.genColumn = new jt({ field: "value" }, this), this.subscribe("cell-value-changed", this.cellValueChanged.bind(this)), this.subscribe("column-init", this.initializeColumnCheck.bind(this)), this.subscribe("row-deleted", this.rowsUpdated.bind(this)), this.subscribe("scroll-horizontal", this.scrollHorizontal.bind(this)), this.subscribe("row-added", this.rowsUpdated.bind(this)), this.subscribe("column-moved", this.recalcActiveRows.bind(this)), this.subscribe("column-add", this.recalcActiveRows.bind(this)), this.subscribe("data-refreshed", this.recalcActiveRowsRefresh.bind(this)), this.subscribe("table-redraw", this.tableRedraw.bind(this)), this.subscribe("rows-visible", this.visibleRows.bind(this)), this.subscribe("scrollbar-vertical", this.adjustForScrollbar.bind(this)), this.subscribe("redraw-blocked", this.blockRedraw.bind(this)), this.subscribe("redraw-restored", this.restoreRedraw.bind(this)), this.subscribe("table-redrawing", this.resizeHolderWidth.bind(this)), this.subscribe("column-resized", this.resizeHolderWidth.bind(this)), this.subscribe("column-show", this.resizeHolderWidth.bind(this)), this.subscribe("column-hide", this.resizeHolderWidth.bind(this)), this.registerTableFunction("getCalcResults", this.getResults.bind(this)), this.registerTableFunction("recalc", this.userRecalc.bind(this)), this.resizeHolderWidth();
  }
  resizeHolderWidth() {
    this.topElement.style.minWidth = this.table.columnManager.headersElement.offsetWidth + "px";
  }
  tableRedraw(e) {
    this.recalc(this.table.rowManager.activeRows), e && this.redraw();
  }
  blockRedraw() {
    this.blocked = !0, this.recalcAfterBlock = !1;
  }
  restoreRedraw() {
    this.blocked = !1, this.recalcAfterBlock && (this.recalcAfterBlock = !1, this.recalcActiveRowsRefresh());
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  userRecalc() {
    this.recalc(this.table.rowManager.activeRows);
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  blockCheck() {
    return this.blocked && (this.recalcAfterBlock = !0), this.blocked;
  }
  visibleRows(e, t) {
    return this.topRow && t.unshift(this.topRow), this.botRow && t.push(this.botRow), t;
  }
  rowsUpdated(e) {
    this.table.options.groupBy ? this.recalcRowGroup(e) : this.recalcActiveRows();
  }
  recalcActiveRowsRefresh() {
    this.table.options.groupBy && this.table.options.dataTreeStartExpanded && this.table.options.dataTree ? this.recalcAll() : this.recalcActiveRows();
  }
  recalcActiveRows() {
    this.recalc(this.table.rowManager.activeRows);
  }
  cellValueChanged(e) {
    (e.column.definition.topCalc || e.column.definition.bottomCalc) && (this.table.options.groupBy ? ((this.table.options.columnCalcs == "table" || this.table.options.columnCalcs == "both") && this.recalcActiveRows(), this.table.options.columnCalcs != "table" && this.recalcRowGroup(e.row)) : this.recalcActiveRows());
  }
  initializeColumnCheck(e) {
    (e.definition.topCalc || e.definition.bottomCalc) && this.initializeColumn(e);
  }
  //initialize column calcs
  initializeColumn(e) {
    var t = e.definition, i = {
      topCalcParams: t.topCalcParams || {},
      botCalcParams: t.bottomCalcParams || {}
    };
    if (t.topCalc) {
      switch (typeof t.topCalc) {
        case "string":
          pt.calculations[t.topCalc] ? i.topCalc = pt.calculations[t.topCalc] : console.warn("Column Calc Error - No such calculation found, ignoring: ", t.topCalc);
          break;
        case "function":
          i.topCalc = t.topCalc;
          break;
      }
      i.topCalc && (e.modules.columnCalcs = i, this.topCalcs.push(e), this.table.options.columnCalcs != "group" && this.initializeTopRow());
    }
    if (t.bottomCalc) {
      switch (typeof t.bottomCalc) {
        case "string":
          pt.calculations[t.bottomCalc] ? i.botCalc = pt.calculations[t.bottomCalc] : console.warn("Column Calc Error - No such calculation found, ignoring: ", t.bottomCalc);
          break;
        case "function":
          i.botCalc = t.bottomCalc;
          break;
      }
      i.botCalc && (e.modules.columnCalcs = i, this.botCalcs.push(e), this.table.options.columnCalcs != "group" && this.initializeBottomRow());
    }
  }
  //dummy functions to handle being mock column manager
  registerColumnField() {
  }
  removeCalcs() {
    var e = !1;
    this.topInitialized && (this.topInitialized = !1, this.topElement.parentNode.removeChild(this.topElement), e = !0), this.botInitialized && (this.botInitialized = !1, this.footerRemove(this.botElement), e = !0), e && this.table.rowManager.adjustTableSize();
  }
  reinitializeCalcs() {
    this.topCalcs.length && this.initializeTopRow(), this.botCalcs.length && this.initializeBottomRow();
  }
  initializeTopRow() {
    var e = document.createDocumentFragment();
    this.topInitialized || (e.appendChild(document.createElement("br")), e.appendChild(this.topElement), this.table.columnManager.getContentsElement().insertBefore(e, this.table.columnManager.headersElement.nextSibling), this.topInitialized = !0);
  }
  initializeBottomRow() {
    this.botInitialized || (this.footerPrepend(this.botElement), this.botInitialized = !0);
  }
  scrollHorizontal(e) {
    this.botInitialized && this.botRow && (this.botElement.scrollLeft = e);
  }
  recalc(e) {
    var t, i;
    if (!this.blockCheck() && (this.topInitialized || this.botInitialized)) {
      if (t = this.rowsToData(e), this.topInitialized) {
        for (this.topRow && this.topRow.deleteCells(), i = this.generateRow("top", t), this.topRow = i; this.topElement.firstChild; ) this.topElement.removeChild(this.topElement.firstChild);
        this.topElement.appendChild(i.getElement()), i.initialize(!0);
      }
      if (this.botInitialized) {
        for (this.botRow && this.botRow.deleteCells(), i = this.generateRow("bottom", t), this.botRow = i; this.botElement.firstChild; ) this.botElement.removeChild(this.botElement.firstChild);
        this.botElement.appendChild(i.getElement()), i.initialize(!0);
      }
      this.table.rowManager.adjustTableSize(), this.table.modExists("frozenColumns") && this.table.modules.frozenColumns.layout();
    }
  }
  recalcRowGroup(e) {
    this.recalcGroup(this.table.modules.groupRows.getRowGroup(e));
  }
  recalcAll() {
    if ((this.topCalcs.length || this.botCalcs.length) && (this.table.options.columnCalcs !== "group" && this.recalcActiveRows(), this.table.options.groupBy && this.table.options.columnCalcs !== "table")) {
      var e = this.table.modules.groupRows.getChildGroups();
      e.forEach((t) => {
        this.recalcGroup(t);
      });
    }
  }
  recalcGroup(e) {
    var t, i;
    this.blockCheck() || e && e.calcs && (e.calcs.bottom && (t = this.rowsToData(e.rows), i = this.generateRowData("bottom", t), e.calcs.bottom.updateData(i), e.calcs.bottom.reinitialize()), e.calcs.top && (t = this.rowsToData(e.rows), i = this.generateRowData("top", t), e.calcs.top.updateData(i), e.calcs.top.reinitialize()));
  }
  //generate top stats row
  generateTopRow(e) {
    return this.generateRow("top", this.rowsToData(e));
  }
  //generate bottom stats row
  generateBottomRow(e) {
    return this.generateRow("bottom", this.rowsToData(e));
  }
  rowsToData(e) {
    var t = [], i = this.table.options.dataTree && this.table.options.dataTreeChildColumnCalcs, s = this.table.modules.dataTree;
    return e.forEach((n) => {
      var a;
      t.push(n.getData()), i && ((a = n.modules.dataTree) != null && a.open) && this.rowsToData(s.getFilteredTreeChildren(n)).forEach((o) => {
        t.push(n);
      });
    }), t;
  }
  //generate stats row
  generateRow(e, t) {
    var i = this.generateRowData(e, t), s;
    return this.table.modExists("mutator") && this.table.modules.mutator.disable(), s = new xe(i, this, "calc"), this.table.modExists("mutator") && this.table.modules.mutator.enable(), s.getElement().classList.add("tabulator-calcs", "tabulator-calcs-" + e), s.component = !1, s.getComponent = () => (s.component || (s.component = new Au(s)), s.component), s.generateCells = () => {
      var n = [];
      this.table.columnManager.columnsByIndex.forEach((a) => {
        this.genColumn.setField(a.getField()), this.genColumn.hozAlign = a.hozAlign, a.definition[e + "CalcFormatter"] && this.table.modExists("format") ? this.genColumn.modules.format = {
          formatter: this.table.modules.format.lookupFormatter(a.definition[e + "CalcFormatter"]),
          params: a.definition[e + "CalcFormatterParams"] || {}
        } : this.genColumn.modules.format = {
          formatter: this.table.modules.format.lookupFormatter("plaintext"),
          params: {}
        }, this.genColumn.definition.cssClass = a.definition.cssClass;
        var o = new ns(this.genColumn, s);
        o.getElement(), o.column = a, o.setWidth(), a.cells.push(o), n.push(o), a.visible || o.hide();
      }), s.cells = n;
    }, s;
  }
  //generate stats row
  generateRowData(e, t) {
    var i = {}, s = e == "top" ? this.topCalcs : this.botCalcs, n = e == "top" ? "topCalc" : "botCalc", a, o;
    return s.forEach(function(l) {
      var h = [];
      l.modules.columnCalcs && l.modules.columnCalcs[n] && (t.forEach(function(u) {
        h.push(l.getFieldValue(u));
      }), o = n + "Params", a = typeof l.modules.columnCalcs[o] == "function" ? l.modules.columnCalcs[o](h, t) : l.modules.columnCalcs[o], l.setFieldValue(i, l.modules.columnCalcs[n](h, t, a)));
    }), i;
  }
  hasTopCalcs() {
    return !!this.topCalcs.length;
  }
  hasBottomCalcs() {
    return !!this.botCalcs.length;
  }
  //handle table redraw
  redraw() {
    this.topRow && this.topRow.normalizeHeight(!0), this.botRow && this.botRow.normalizeHeight(!0);
  }
  //return the calculated
  getResults() {
    var e = {}, t;
    return this.table.options.groupBy && this.table.modExists("groupRows") ? (t = this.table.modules.groupRows.getGroups(!0), t.forEach((i) => {
      e[i.getKey()] = this.getGroupResults(i);
    })) : e = {
      top: this.topRow ? this.topRow.getData() : {},
      bottom: this.botRow ? this.botRow.getData() : {}
    }, e;
  }
  //get results from a group
  getGroupResults(e) {
    var t = e._getSelf(), i = e.getSubGroups(), s = {}, n = {};
    return i.forEach((a) => {
      s[a.getKey()] = this.getGroupResults(a);
    }), n = {
      top: t.calcs.top ? t.calcs.top.getData() : {},
      bottom: t.calcs.bottom ? t.calcs.bottom.getData() : {},
      groups: s
    }, n;
  }
  adjustForScrollbar(e) {
    this.botRow && (this.table.rtl ? this.botElement.style.paddingLeft = e + "px" : this.botElement.style.paddingRight = e + "px");
  }
};
F(pt, "moduleName", "columnCalcs"), //load defaults
F(pt, "calculations", _u);
let Sn = pt;
class Lo extends $ {
  constructor(e) {
    super(e), this.indent = 10, this.field = "", this.collapseEl = null, this.expandEl = null, this.branchEl = null, this.elementField = !1, this.startOpen = function() {
    }, this.registerTableOption("dataTree", !1), this.registerTableOption("dataTreeFilter", !0), this.registerTableOption("dataTreeSort", !0), this.registerTableOption("dataTreeElementColumn", !1), this.registerTableOption("dataTreeBranchElement", !0), this.registerTableOption("dataTreeChildIndent", 9), this.registerTableOption("dataTreeChildField", "_children"), this.registerTableOption("dataTreeCollapseElement", !1), this.registerTableOption("dataTreeExpandElement", !1), this.registerTableOption("dataTreeStartExpanded", !1), this.registerTableOption("dataTreeChildColumnCalcs", !1), this.registerTableOption("dataTreeSelectPropagate", !1), this.registerComponentFunction("row", "treeCollapse", this.collapseRow.bind(this)), this.registerComponentFunction("row", "treeExpand", this.expandRow.bind(this)), this.registerComponentFunction("row", "treeToggle", this.toggleRow.bind(this)), this.registerComponentFunction("row", "getTreeParent", this.getTreeParent.bind(this)), this.registerComponentFunction("row", "getTreeChildren", this.getRowChildren.bind(this)), this.registerComponentFunction("row", "addTreeChild", this.addTreeChildRow.bind(this)), this.registerComponentFunction("row", "isTreeExpanded", this.isRowExpanded.bind(this));
  }
  initialize() {
    if (this.table.options.dataTree) {
      var e = null, t = this.table.options;
      switch (this.field = t.dataTreeChildField, this.indent = t.dataTreeChildIndent, this.options("movableRows") && console.warn("The movableRows option is not available with dataTree enabled, moving of child rows could result in unpredictable behavior"), t.dataTreeBranchElement ? t.dataTreeBranchElement === !0 ? (this.branchEl = document.createElement("div"), this.branchEl.classList.add("tabulator-data-tree-branch")) : typeof t.dataTreeBranchElement == "string" ? (e = document.createElement("div"), e.innerHTML = t.dataTreeBranchElement, this.branchEl = e.firstChild) : this.branchEl = t.dataTreeBranchElement : (this.branchEl = document.createElement("div"), this.branchEl.classList.add("tabulator-data-tree-branch-empty")), t.dataTreeCollapseElement ? typeof t.dataTreeCollapseElement == "string" ? (e = document.createElement("div"), e.innerHTML = t.dataTreeCollapseElement, this.collapseEl = e.firstChild) : this.collapseEl = t.dataTreeCollapseElement : (this.collapseEl = document.createElement("div"), this.collapseEl.classList.add("tabulator-data-tree-control"), this.collapseEl.tabIndex = 0, this.collapseEl.innerHTML = "<div class='tabulator-data-tree-control-collapse'></div>"), t.dataTreeExpandElement ? typeof t.dataTreeExpandElement == "string" ? (e = document.createElement("div"), e.innerHTML = t.dataTreeExpandElement, this.expandEl = e.firstChild) : this.expandEl = t.dataTreeExpandElement : (this.expandEl = document.createElement("div"), this.expandEl.classList.add("tabulator-data-tree-control"), this.expandEl.tabIndex = 0, this.expandEl.innerHTML = "<div class='tabulator-data-tree-control-expand'></div>"), typeof t.dataTreeStartExpanded) {
        case "boolean":
          this.startOpen = function(i, s) {
            return t.dataTreeStartExpanded;
          };
          break;
        case "function":
          this.startOpen = t.dataTreeStartExpanded;
          break;
        default:
          this.startOpen = function(i, s) {
            return t.dataTreeStartExpanded[s];
          };
          break;
      }
      this.subscribe("row-init", this.initializeRow.bind(this)), this.subscribe("row-layout-after", this.layoutRow.bind(this)), this.subscribe("row-deleting", this.rowDeleting.bind(this)), this.subscribe("row-deleted", this.rowDelete.bind(this), 0), this.subscribe("row-data-changed", this.rowDataChanged.bind(this), 10), this.subscribe("cell-value-updated", this.cellValueChanged.bind(this)), this.subscribe("edit-cancelled", this.cellValueChanged.bind(this)), this.subscribe("column-moving-rows", this.columnMoving.bind(this)), this.subscribe("table-built", this.initializeElementField.bind(this)), this.subscribe("table-redrawing", this.tableRedrawing.bind(this)), this.registerDisplayHandler(this.getRows.bind(this), 30);
    }
  }
  tableRedrawing(e) {
    var t;
    e && (t = this.table.rowManager.getRows(), t.forEach((i) => {
      this.reinitializeRowChildren(i);
    }));
  }
  initializeElementField() {
    var e = this.table.columnManager.getFirstVisibleColumn();
    this.elementField = this.table.options.dataTreeElementColumn || (e ? e.field : !1);
  }
  getRowChildren(e) {
    return this.getTreeChildren(e, !0);
  }
  columnMoving() {
    var e = [];
    return this.table.rowManager.rows.forEach((t) => {
      e = e.concat(this.getTreeChildren(t, !1, !0));
    }), e;
  }
  rowDataChanged(e, t, i) {
    this.redrawNeeded(i) && (this.initializeRow(e), t && (this.layoutRow(e), this.refreshData(!0)));
  }
  cellValueChanged(e) {
    var t = e.column.getField();
    t === this.elementField && this.layoutRow(e.row);
  }
  initializeRow(e) {
    var t = e.getData()[this.field], i = Array.isArray(t), s = i || !i && typeof t == "object" && t !== null;
    !s && e.modules.dataTree && e.modules.dataTree.branchEl && e.modules.dataTree.branchEl.parentNode.removeChild(e.modules.dataTree.branchEl), !s && e.modules.dataTree && e.modules.dataTree.controlEl && e.modules.dataTree.controlEl.parentNode.removeChild(e.modules.dataTree.controlEl), e.modules.dataTree = {
      index: e.modules.dataTree ? e.modules.dataTree.index : 0,
      open: s ? e.modules.dataTree ? e.modules.dataTree.open : this.startOpen(e.getComponent(), 0) : !1,
      controlEl: e.modules.dataTree && s ? e.modules.dataTree.controlEl : !1,
      branchEl: e.modules.dataTree && s ? e.modules.dataTree.branchEl : !1,
      parent: e.modules.dataTree ? e.modules.dataTree.parent : !1,
      children: s
    };
  }
  reinitializeRowChildren(e) {
    var t = this.getTreeChildren(e, !1, !0);
    t.forEach(function(i) {
      i.reinitialize(!0);
    });
  }
  layoutRow(e) {
    var t = this.elementField ? e.getCell(this.elementField) : e.getCells()[0], i = t.getElement(), s = e.modules.dataTree;
    s.branchEl && (s.branchEl.parentNode && s.branchEl.parentNode.removeChild(s.branchEl), s.branchEl = !1), s.controlEl && (s.controlEl.parentNode && s.controlEl.parentNode.removeChild(s.controlEl), s.controlEl = !1), this.generateControlElement(e, i), e.getElement().classList.add("tabulator-tree-level-" + s.index), s.index && (this.branchEl ? (s.branchEl = this.branchEl.cloneNode(!0), i.insertBefore(s.branchEl, i.firstChild), this.table.rtl ? s.branchEl.style.marginRight = (s.branchEl.offsetWidth + s.branchEl.style.marginLeft) * (s.index - 1) + s.index * this.indent + "px" : s.branchEl.style.marginLeft = (s.branchEl.offsetWidth + s.branchEl.style.marginRight) * (s.index - 1) + s.index * this.indent + "px") : this.table.rtl ? i.style.paddingRight = parseInt(window.getComputedStyle(i, null).getPropertyValue("padding-right")) + s.index * this.indent + "px" : i.style.paddingLeft = parseInt(window.getComputedStyle(i, null).getPropertyValue("padding-left")) + s.index * this.indent + "px");
  }
  generateControlElement(e, t) {
    var i = e.modules.dataTree, s = i.controlEl;
    t = t || e.getCells()[0].getElement(), i.children !== !1 && (i.open ? (i.controlEl = this.collapseEl.cloneNode(!0), i.controlEl.addEventListener("click", (n) => {
      n.stopPropagation(), this.collapseRow(e);
    })) : (i.controlEl = this.expandEl.cloneNode(!0), i.controlEl.addEventListener("click", (n) => {
      n.stopPropagation(), this.expandRow(e);
    })), i.controlEl.addEventListener("mousedown", (n) => {
      n.stopPropagation();
    }), s && s.parentNode === t ? s.parentNode.replaceChild(i.controlEl, s) : t.insertBefore(i.controlEl, t.firstChild));
  }
  getRows(e) {
    var t = [];
    return e.forEach((i, s) => {
      var n, a;
      t.push(i), i instanceof xe && (i.create(), n = i.modules.dataTree, !n.index && n.children !== !1 && (a = this.getChildren(i, !1, !0), a.forEach((o) => {
        o.create(), t.push(o);
      })));
    }), t;
  }
  getChildren(e, t, i) {
    var s = e.modules.dataTree, n = [], a = [];
    return s.children !== !1 && (s.open || t) && (Array.isArray(s.children) || (s.children = this.generateChildren(e)), this.table.modExists("filter") && this.table.options.dataTreeFilter ? n = this.table.modules.filter.filter(s.children) : n = s.children, this.table.modExists("sort") && this.table.options.dataTreeSort && this.table.modules.sort.sort(n, i), n.forEach((o) => {
      a.push(o);
      var l = this.getChildren(o, !1, !0);
      l.forEach((h) => {
        a.push(h);
      });
    })), a;
  }
  generateChildren(e) {
    var t = [], i = e.getData()[this.field];
    return Array.isArray(i) || (i = [i]), i.forEach((s) => {
      var n = new xe(s || {}, this.table.rowManager);
      n.create(), n.modules.dataTree.index = e.modules.dataTree.index + 1, n.modules.dataTree.parent = e, n.modules.dataTree.children && (n.modules.dataTree.open = this.startOpen(n.getComponent(), n.modules.dataTree.index)), t.push(n);
    }), t;
  }
  expandRow(e, t) {
    var i = e.modules.dataTree;
    i.children !== !1 && (i.open = !0, e.reinitialize(), this.refreshData(!0), this.dispatchExternal("dataTreeRowExpanded", e.getComponent(), e.modules.dataTree.index));
  }
  collapseRow(e) {
    var t = e.modules.dataTree;
    t.children !== !1 && (t.open = !1, e.reinitialize(), this.refreshData(!0), this.dispatchExternal("dataTreeRowCollapsed", e.getComponent(), e.modules.dataTree.index));
  }
  toggleRow(e) {
    var t = e.modules.dataTree;
    t.children !== !1 && (t.open ? this.collapseRow(e) : this.expandRow(e));
  }
  isRowExpanded(e) {
    return e.modules.dataTree.open;
  }
  getTreeParent(e) {
    return e.modules.dataTree.parent ? e.modules.dataTree.parent.getComponent() : !1;
  }
  getTreeParentRoot(e) {
    return e.modules.dataTree && e.modules.dataTree.parent ? this.getTreeParentRoot(e.modules.dataTree.parent) : e;
  }
  getFilteredTreeChildren(e) {
    var t = e.modules.dataTree, i = [], s;
    return t.children && (Array.isArray(t.children) || (t.children = this.generateChildren(e)), this.table.modExists("filter") && this.table.options.dataTreeFilter ? s = this.table.modules.filter.filter(t.children) : s = t.children, s.forEach((n) => {
      n instanceof xe && i.push(n);
    })), i;
  }
  rowDeleting(e) {
    var t = e.modules.dataTree;
    t && t.children && Array.isArray(t.children) && t.children.forEach((i) => {
      i instanceof xe && i.wipe();
    });
  }
  rowDelete(e) {
    var t = e.modules.dataTree.parent, i;
    t && (i = this.findChildIndex(e, t), i !== !1 && t.data[this.field].splice(i, 1), t.data[this.field].length || delete t.data[this.field], this.initializeRow(t), this.layoutRow(t)), this.refreshData(!0);
  }
  addTreeChildRow(e, t, i, s) {
    var n = !1;
    typeof t == "string" && (t = JSON.parse(t)), Array.isArray(e.data[this.field]) || (e.data[this.field] = [], e.modules.dataTree.open = this.startOpen(e.getComponent(), e.modules.dataTree.index)), typeof s < "u" && (n = this.findChildIndex(s, e), n !== !1 && e.data[this.field].splice(i ? n : n + 1, 0, t)), n === !1 && (i ? e.data[this.field].unshift(t) : e.data[this.field].push(t)), this.initializeRow(e), this.layoutRow(e), this.refreshData(!0);
  }
  findChildIndex(e, t) {
    var i = !1;
    return typeof e == "object" ? e instanceof xe ? i = e.data : e instanceof Vs ? i = e._getSelf().data : typeof HTMLElement < "u" && e instanceof HTMLElement ? t.modules.dataTree && (i = t.modules.dataTree.children.find((s) => s instanceof xe ? s.element === e : !1), i && (i = i.data)) : e === null && (i = !1) : typeof e > "u" ? i = !1 : i = t.data[this.field].find((s) => s.data[this.table.options.index] == e), i && (Array.isArray(t.data[this.field]) && (i = t.data[this.field].indexOf(i)), i == -1 && (i = !1)), i;
  }
  getTreeChildren(e, t, i) {
    var s = e.modules.dataTree, n = [];
    return s && s.children && (Array.isArray(s.children) || (s.children = this.generateChildren(e)), s.children.forEach((a) => {
      a instanceof xe && (n.push(t ? a.getComponent() : a), i && this.getTreeChildren(a, t, i).forEach((o) => {
        n.push(o);
      }));
    })), n;
  }
  getChildField() {
    return this.field;
  }
  redrawNeeded(e) {
    return (this.field ? typeof e[this.field] < "u" : !1) || (this.elementField ? typeof e[this.elementField] < "u" : !1);
  }
}
F(Lo, "moduleName", "dataTree");
function Iu(r, e = {}, t) {
  var i = e.delimiter ? e.delimiter : ",", s = [], n = [];
  r.forEach((a) => {
    var o = [];
    switch (a.type) {
      case "group":
        console.warn("Download Warning - CSV downloader cannot process row groups");
        break;
      case "calc":
        console.warn("Download Warning - CSV downloader cannot process column calculations");
        break;
      case "header":
        a.columns.forEach((l, h) => {
          l && l.depth === 1 && (n[h] = typeof l.value > "u" || l.value === null ? "" : '"' + String(l.value).split('"').join('""') + '"');
        });
        break;
      case "row":
        a.columns.forEach((l) => {
          if (l) {
            switch (typeof l.value) {
              case "object":
                l.value = l.value !== null ? JSON.stringify(l.value) : "";
                break;
              case "undefined":
                l.value = "";
                break;
            }
            o.push('"' + String(l.value).split('"').join('""') + '"');
          }
        }), s.push(o.join(i));
        break;
    }
  }), n.length && s.unshift(n.join(i)), s = s.join(`
`), e.bom && (s = "\uFEFF" + s), t(s, "text/csv");
}
function Nu(r, e, t) {
  var i = [];
  r.forEach((s) => {
    var n = {};
    switch (s.type) {
      case "header":
        break;
      case "group":
        console.warn("Download Warning - JSON downloader cannot process row groups");
        break;
      case "calc":
        console.warn("Download Warning - JSON downloader cannot process column calculations");
        break;
      case "row":
        s.columns.forEach((a) => {
          a && (n[a.component.getTitleDownload() || a.component.getField()] = a.value);
        }), i.push(n);
        break;
    }
  }), i = JSON.stringify(i, null, "	"), t(i, "application/json");
}
function Vu(r, e = {}, t) {
  var i = [], s = [], n = {}, a = e.rowGroupStyles || {
    fontStyle: "bold",
    fontSize: 12,
    cellPadding: 6,
    fillColor: 220
  }, o = e.rowCalcStyles || {
    fontStyle: "bold",
    fontSize: 10,
    cellPadding: 4,
    fillColor: 232
  }, l = e.jsPDF || {}, h = e.title ? e.title : "", u, d;
  l.orientation || (l.orientation = e.orientation || "landscape"), l.unit || (l.unit = "pt"), r.forEach((b) => {
    switch (b.type) {
      case "header":
        i.push(f(b));
        break;
      case "group":
        s.push(f(b, a));
        break;
      case "calc":
        s.push(f(b, o));
        break;
      case "row":
        s.push(f(b));
        break;
    }
  });
  function f(b, T) {
    var E = [];
    return b.columns.forEach((S) => {
      var k;
      if (S) {
        switch (typeof S.value) {
          case "object":
            S.value = S.value !== null ? JSON.stringify(S.value) : "";
            break;
          case "undefined":
            S.value = "";
            break;
        }
        k = {
          content: S.value,
          colSpan: S.width,
          rowSpan: S.height
        }, T && (k.styles = T), E.push(k);
      }
    }), E;
  }
  u = this.dependencyRegistry.lookup("jspdf", "jsPDF"), d = new u(l), e.autoTable && (typeof e.autoTable == "function" ? n = e.autoTable(d) || {} : n = e.autoTable), h && (n.didDrawPage = function(b) {
    d.text(h, 40, 30);
  }), n.head = i, n.body = s, d.autoTable(n), e.documentProcessing && e.documentProcessing(d), t(d.output("arraybuffer"), "application/pdf");
}
function Bu(r, e, t) {
  var i = this, s = e.sheetName || "Sheet1", n = this.dependencyRegistry.lookup("XLSX"), a = n.utils.book_new(), o = new Te(this), l = "compress" in e ? e.compress : !0, h = e.writeOptions || { bookType: "xlsx", bookSST: !0, compression: l }, u;
  h.type = "binary", a.SheetNames = [], a.Sheets = {};
  function d() {
    var T = [], E = [], S = {}, k = { s: { c: 0, r: 0 }, e: { c: r[0] ? r[0].columns.reduce((z, N) => z + (N && N.width ? N.width : 1), 0) : 0, r: r.length } };
    return r.forEach((z, N) => {
      var J = [];
      z.columns.forEach(function(q, te) {
        q ? (J.push(!(q.value instanceof Date) && typeof q.value == "object" ? JSON.stringify(q.value) : q.value), (q.width > 1 || q.height > -1) && (q.height > 1 || q.width > 1) && E.push({ s: { r: N, c: te }, e: { r: N + q.height - 1, c: te + q.width - 1 } })) : J.push("");
      }), T.push(J);
    }), n.utils.sheet_add_aoa(S, T), S["!ref"] = n.utils.encode_range(k), E.length && (S["!merges"] = E), S;
  }
  if (e.sheetOnly) {
    t(d());
    return;
  }
  if (e.sheets)
    for (var f in e.sheets)
      e.sheets[f] === !0 ? (a.SheetNames.push(f), a.Sheets[f] = d()) : (a.SheetNames.push(f), o.commsSend(e.sheets[f], "download", "intercept", {
        type: "xlsx",
        options: { sheetOnly: !0 },
        active: i.active,
        intercept: function(T) {
          a.Sheets[f] = T;
        }
      }));
  else
    a.SheetNames.push(s), a.Sheets[s] = d();
  e.documentProcessing && (a = e.documentProcessing(a));
  function b(T) {
    for (var E = new ArrayBuffer(T.length), S = new Uint8Array(E), k = 0; k != T.length; ++k) S[k] = T.charCodeAt(k) & 255;
    return E;
  }
  u = n.write(a, h), t(b(u), "application/octet-stream");
}
function Wu(r, e, t) {
  this.modExists("export", !0) && t(this.modules.export.generateHTMLTable(r), "text/html");
}
function ju(r, e, t) {
  const i = [];
  r.forEach((s) => {
    const n = {};
    switch (s.type) {
      case "header":
        break;
      case "group":
        console.warn("Download Warning - JSON downloader cannot process row groups");
        break;
      case "calc":
        console.warn("Download Warning - JSON downloader cannot process column calculations");
        break;
      case "row":
        s.columns.forEach((a) => {
          a && (n[a.component.getTitleDownload() || a.component.getField()] = a.value);
        }), i.push(JSON.stringify(n));
        break;
    }
  }), t(i.join(`
`), "application/x-ndjson");
}
var Uu = {
  csv: Iu,
  json: Nu,
  jsonLines: ju,
  pdf: Vu,
  xlsx: Bu,
  html: Wu
};
const ri = class ri extends $ {
  constructor(e) {
    super(e), this.registerTableOption("downloadEncoder", function(t, i) {
      return new Blob([t], { type: i });
    }), this.registerTableOption("downloadConfig", {}), this.registerTableOption("downloadRowRange", "active"), this.registerColumnOption("download"), this.registerColumnOption("titleDownload");
  }
  initialize() {
    this.deprecatedOptionsCheck(), this.registerTableFunction("download", this.download.bind(this)), this.registerTableFunction("downloadToTab", this.downloadToTab.bind(this));
  }
  deprecatedOptionsCheck() {
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  downloadToTab(e, t, i, s) {
    this.download(e, t, i, s, !0);
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  //trigger file download
  download(e, t, i, s, n) {
    var a = !1;
    function o(h, u) {
      n ? n === !0 ? this.triggerDownload(h, u, e, t, !0) : n(h) : this.triggerDownload(h, u, e, t);
    }
    if (typeof e == "function" ? a = e : ri.downloaders[e] ? a = ri.downloaders[e] : console.warn("Download Error - No such download type found: ", e), a) {
      var l = this.generateExportList(s);
      a.call(this.table, l, i || {}, o.bind(this));
    }
  }
  generateExportList(e) {
    var t = this.table.modules.export.generateExportList(this.table.options.downloadConfig, !1, e || this.table.options.downloadRowRange, "download"), i = this.table.options.groupHeaderDownload;
    return i && !Array.isArray(i) && (i = [i]), t.forEach((s) => {
      var n;
      s.type === "group" && (n = s.columns[0], i && i[s.indent] && (n.value = i[s.indent](n.value, s.component._group.getRowCount(), s.component._group.getData(), s.component)));
    }), t;
  }
  triggerDownload(e, t, i, s, n) {
    var a = document.createElement("a"), o = this.table.options.downloadEncoder(e, t);
    o && (n ? window.open(window.URL.createObjectURL(o)) : (s = s || "Tabulator." + (typeof i == "function" ? "txt" : i), navigator.msSaveOrOpenBlob ? navigator.msSaveOrOpenBlob(o, s) : (a.setAttribute("href", window.URL.createObjectURL(o)), a.setAttribute("download", s), a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a))), this.dispatchExternal("downloadComplete"));
  }
  commsReceived(e, t, i) {
    switch (t) {
      case "intercept":
        this.download(i.type, "", i.options, i.active, i.intercept);
        break;
    }
  }
};
F(ri, "moduleName", "download"), //load defaults
F(ri, "downloaders", Uu);
let Dn = ri;
function Bs(r, e) {
  var t = e.mask, i = typeof e.maskLetterChar < "u" ? e.maskLetterChar : "A", s = typeof e.maskNumberChar < "u" ? e.maskNumberChar : "9", n = typeof e.maskWildcardChar < "u" ? e.maskWildcardChar : "*";
  function a(o) {
    var l = t[o];
    typeof l < "u" && l !== n && l !== i && l !== s && (r.value = r.value + "" + l, a(o + 1));
  }
  r.addEventListener("keydown", (o) => {
    var l = r.value.length, h = o.key;
    if (o.keyCode > 46 && !o.ctrlKey && !o.metaKey) {
      if (l >= t.length)
        return o.preventDefault(), o.stopPropagation(), !1;
      switch (t[l]) {
        case i:
          if (h.toUpperCase() == h.toLowerCase())
            return o.preventDefault(), o.stopPropagation(), !1;
          break;
        case s:
          if (isNaN(h))
            return o.preventDefault(), o.stopPropagation(), !1;
          break;
        case n:
          break;
        default:
          if (h !== t[l])
            return o.preventDefault(), o.stopPropagation(), !1;
      }
    }
  }), r.addEventListener("keyup", (o) => {
    o.keyCode > 46 && e.maskAutoFill && a(r.value.length);
  }), r.placeholder || (r.placeholder = t), e.maskAutoFill && a(r.value.length);
}
function Gu(r, e, t, i, s) {
  var n = r.getValue(), a = document.createElement("input");
  if (a.setAttribute("type", s.search ? "search" : "text"), a.style.padding = "4px", a.style.width = "100%", a.style.boxSizing = "border-box", s.elementAttributes && typeof s.elementAttributes == "object")
    for (let l in s.elementAttributes)
      l.charAt(0) == "+" ? (l = l.slice(1), a.setAttribute(l, a.getAttribute(l) + s.elementAttributes["+" + l])) : a.setAttribute(l, s.elementAttributes[l]);
  a.value = typeof n < "u" ? n : "", e(function() {
    r.getType() === "cell" && (a.focus({ preventScroll: !0 }), a.style.height = "100%", s.selectContents && a.select());
  });
  function o(l) {
    (n === null || typeof n > "u") && a.value !== "" || a.value !== n ? t(a.value) && (n = a.value) : i();
  }
  return a.addEventListener("change", o), a.addEventListener("blur", o), a.addEventListener("keydown", function(l) {
    switch (l.keyCode) {
      case 13:
        o();
        break;
      case 27:
        i();
        break;
      case 35:
      case 36:
        l.stopPropagation();
        break;
    }
  }), s.mask && Bs(a, s), a;
}
function $u(r, e, t, i, s) {
  var n = r.getValue(), a = s.verticalNavigation || "hybrid", o = String(n !== null && typeof n < "u" ? n : ""), l = document.createElement("textarea"), h = 0;
  if (l.style.display = "block", l.style.padding = "2px", l.style.height = "100%", l.style.width = "100%", l.style.boxSizing = "border-box", l.style.whiteSpace = "pre-wrap", l.style.resize = "none", s.elementAttributes && typeof s.elementAttributes == "object")
    for (let d in s.elementAttributes)
      d.charAt(0) == "+" ? (d = d.slice(1), l.setAttribute(d, l.getAttribute(d) + s.elementAttributes["+" + d])) : l.setAttribute(d, s.elementAttributes[d]);
  l.value = o, e(function() {
    r.getType() === "cell" && (l.focus({ preventScroll: !0 }), l.style.height = "100%", l.scrollHeight, l.style.height = l.scrollHeight + "px", r.getRow().normalizeHeight(), s.selectContents && l.select());
  });
  function u(d) {
    (n === null || typeof n > "u") && l.value !== "" || l.value !== n ? (t(l.value) && (n = l.value), setTimeout(function() {
      r.getRow().normalizeHeight();
    }, 300)) : i();
  }
  return l.addEventListener("change", u), l.addEventListener("blur", u), l.addEventListener("keyup", function() {
    l.style.height = "";
    var d = l.scrollHeight;
    l.style.height = d + "px", d != h && (h = d, r.getRow().normalizeHeight());
  }), l.addEventListener("keydown", function(d) {
    switch (d.keyCode) {
      case 13:
        d.shiftKey && s.shiftEnterSubmit && u();
        break;
      case 27:
        i();
        break;
      case 38:
        (a == "editor" || a == "hybrid" && l.selectionStart) && (d.stopImmediatePropagation(), d.stopPropagation());
        break;
      case 40:
        (a == "editor" || a == "hybrid" && l.selectionStart !== l.value.length) && (d.stopImmediatePropagation(), d.stopPropagation());
        break;
      case 35:
      case 36:
        d.stopPropagation();
        break;
    }
  }), s.mask && Bs(l, s), l;
}
function Yu(r, e, t, i, s) {
  var n = r.getValue(), a = s.verticalNavigation || "editor", o = document.createElement("input");
  if (o.setAttribute("type", "number"), typeof s.max < "u" && o.setAttribute("max", s.max), typeof s.min < "u" && o.setAttribute("min", s.min), typeof s.step < "u" && o.setAttribute("step", s.step), o.style.padding = "4px", o.style.width = "100%", o.style.boxSizing = "border-box", s.elementAttributes && typeof s.elementAttributes == "object")
    for (let u in s.elementAttributes)
      u.charAt(0) == "+" ? (u = u.slice(1), o.setAttribute(u, o.getAttribute(u) + s.elementAttributes["+" + u])) : o.setAttribute(u, s.elementAttributes[u]);
  o.value = n;
  var l = function(u) {
    h();
  };
  e(function() {
    r.getType() === "cell" && (o.removeEventListener("blur", l), o.focus({ preventScroll: !0 }), o.style.height = "100%", o.addEventListener("blur", l), s.selectContents && o.select());
  });
  function h() {
    var u = o.value;
    !isNaN(u) && u !== "" && (u = Number(u)), u !== n ? t(u) && (n = u) : i();
  }
  return o.addEventListener("keydown", function(u) {
    switch (u.keyCode) {
      case 13:
        h();
        break;
      case 27:
        i();
        break;
      case 38:
      case 40:
        a == "editor" && (u.stopImmediatePropagation(), u.stopPropagation());
        break;
      case 35:
      case 36:
        u.stopPropagation();
        break;
    }
  }), s.mask && Bs(o, s), o;
}
function qu(r, e, t, i, s) {
  var n = r.getValue(), a = document.createElement("input");
  if (a.setAttribute("type", "range"), typeof s.max < "u" && a.setAttribute("max", s.max), typeof s.min < "u" && a.setAttribute("min", s.min), typeof s.step < "u" && a.setAttribute("step", s.step), a.style.padding = "4px", a.style.width = "100%", a.style.boxSizing = "border-box", s.elementAttributes && typeof s.elementAttributes == "object")
    for (let l in s.elementAttributes)
      l.charAt(0) == "+" ? (l = l.slice(1), a.setAttribute(l, a.getAttribute(l) + s.elementAttributes["+" + l])) : a.setAttribute(l, s.elementAttributes[l]);
  a.value = n, e(function() {
    r.getType() === "cell" && (a.focus({ preventScroll: !0 }), a.style.height = "100%");
  });
  function o() {
    var l = a.value;
    !isNaN(l) && l !== "" && (l = Number(l)), l != n ? t(l) && (n = l) : i();
  }
  return a.addEventListener("blur", function(l) {
    o();
  }), a.addEventListener("keydown", function(l) {
    switch (l.keyCode) {
      case 13:
        o();
        break;
      case 27:
        i();
        break;
    }
  }), a;
}
function Zu(r, e, t, i, s) {
  var n = s.format, a = s.verticalNavigation || "editor", o = n ? window.DateTime || luxon.DateTime : null, l = r.getValue(), h = document.createElement("input");
  function u(f) {
    var b;
    return o.isDateTime(f) ? b = f : n === "iso" ? b = o.fromISO(String(f)) : b = o.fromFormat(String(f), n), b.toFormat("yyyy-MM-dd");
  }
  if (h.type = "date", h.style.padding = "4px", h.style.width = "100%", h.style.boxSizing = "border-box", s.max && h.setAttribute("max", n ? u(s.max) : s.max), s.min && h.setAttribute("min", n ? u(s.min) : s.min), s.elementAttributes && typeof s.elementAttributes == "object")
    for (let f in s.elementAttributes)
      f.charAt(0) == "+" ? (f = f.slice(1), h.setAttribute(f, h.getAttribute(f) + s.elementAttributes["+" + f])) : h.setAttribute(f, s.elementAttributes[f]);
  l = typeof l < "u" ? l : "", n && (o ? l = u(l) : console.error("Editor Error - 'date' editor 'format' param is dependant on luxon.js")), h.value = l, e(function() {
    r.getType() === "cell" && (h.focus({ preventScroll: !0 }), h.style.height = "100%", s.selectContents && h.select());
  });
  function d() {
    var f = h.value, b;
    if ((l === null || typeof l > "u") && f !== "" || f !== l) {
      if (f && n)
        switch (b = o.fromFormat(String(f), "yyyy-MM-dd"), n) {
          case !0:
            f = b;
            break;
          case "iso":
            f = b.toISO();
            break;
          default:
            f = b.toFormat(n);
        }
      t(f) && (l = h.value);
    } else
      i();
  }
  return h.addEventListener("blur", function(f) {
    (f.relatedTarget || f.rangeParent || f.explicitOriginalTarget !== h) && d();
  }), h.addEventListener("keydown", function(f) {
    switch (f.keyCode) {
      case 13:
        d();
        break;
      case 27:
        i();
        break;
      case 35:
      case 36:
        f.stopPropagation();
        break;
      case 38:
      case 40:
        a == "editor" && (f.stopImmediatePropagation(), f.stopPropagation());
        break;
    }
  }), h;
}
function Ju(r, e, t, i, s) {
  var n = s.format, a = s.verticalNavigation || "editor", o = n ? window.DateTime || luxon.DateTime : null, l, h = r.getValue(), u = document.createElement("input");
  if (u.type = "time", u.style.padding = "4px", u.style.width = "100%", u.style.boxSizing = "border-box", s.elementAttributes && typeof s.elementAttributes == "object")
    for (let f in s.elementAttributes)
      f.charAt(0) == "+" ? (f = f.slice(1), u.setAttribute(f, u.getAttribute(f) + s.elementAttributes["+" + f])) : u.setAttribute(f, s.elementAttributes[f]);
  h = typeof h < "u" ? h : "", n && (o ? (o.isDateTime(h) ? l = h : n === "iso" ? l = o.fromISO(String(h)) : l = o.fromFormat(String(h), n), h = l.toFormat("HH:mm")) : console.error("Editor Error - 'date' editor 'format' param is dependant on luxon.js")), u.value = h, e(function() {
    r.getType() == "cell" && (u.focus({ preventScroll: !0 }), u.style.height = "100%", s.selectContents && u.select());
  });
  function d() {
    var f = u.value, b;
    if ((h === null || typeof h > "u") && f !== "" || f !== h) {
      if (f && n)
        switch (b = o.fromFormat(String(f), "hh:mm"), n) {
          case !0:
            f = b;
            break;
          case "iso":
            f = b.toISO();
            break;
          default:
            f = b.toFormat(n);
        }
      t(f) && (h = u.value);
    } else
      i();
  }
  return u.addEventListener("blur", function(f) {
    (f.relatedTarget || f.rangeParent || f.explicitOriginalTarget !== u) && d();
  }), u.addEventListener("keydown", function(f) {
    switch (f.keyCode) {
      case 13:
        d();
        break;
      case 27:
        i();
        break;
      case 35:
      case 36:
        f.stopPropagation();
        break;
      case 38:
      case 40:
        a == "editor" && (f.stopImmediatePropagation(), f.stopPropagation());
        break;
    }
  }), u;
}
function Ku(r, e, t, i, s) {
  var n = s.format, a = s.verticalNavigation || "editor", o = n ? this.table.dependencyRegistry.lookup(["luxon", "DateTime"], "DateTime") : null, l, h = r.getValue(), u = document.createElement("input");
  if (u.type = "datetime-local", u.style.padding = "4px", u.style.width = "100%", u.style.boxSizing = "border-box", s.elementAttributes && typeof s.elementAttributes == "object")
    for (let f in s.elementAttributes)
      f.charAt(0) == "+" ? (f = f.slice(1), u.setAttribute(f, u.getAttribute(f) + s.elementAttributes["+" + f])) : u.setAttribute(f, s.elementAttributes[f]);
  h = typeof h < "u" ? h : "", n && (o ? (o.isDateTime(h) ? l = h : n === "iso" ? l = o.fromISO(String(h)) : l = o.fromFormat(String(h), n), h = l.toFormat("yyyy-MM-dd") + "T" + l.toFormat("HH:mm")) : console.error("Editor Error - 'date' editor 'format' param is dependant on luxon.js")), u.value = h, e(function() {
    r.getType() === "cell" && (u.focus({ preventScroll: !0 }), u.style.height = "100%", s.selectContents && u.select());
  });
  function d() {
    var f = u.value, b;
    if ((h === null || typeof h > "u") && f !== "" || f !== h) {
      if (f && n)
        switch (b = o.fromISO(String(f)), n) {
          case !0:
            f = b;
            break;
          case "iso":
            f = b.toISO();
            break;
          default:
            f = b.toFormat(n);
        }
      t(f) && (h = u.value);
    } else
      i();
  }
  return u.addEventListener("blur", function(f) {
    (f.relatedTarget || f.rangeParent || f.explicitOriginalTarget !== u) && d();
  }), u.addEventListener("keydown", function(f) {
    switch (f.keyCode) {
      case 13:
        d();
        break;
      case 27:
        i();
        break;
      case 35:
      case 36:
        f.stopPropagation();
        break;
      case 38:
      case 40:
        a == "editor" && (f.stopImmediatePropagation(), f.stopPropagation());
        break;
    }
  }), u;
}
let Xu = class {
  constructor(e, t, i, s, n, a) {
    this.edit = e, this.table = e.table, this.cell = t, this.params = this._initializeParams(a), this.data = [], this.displayItems = [], this.currentItems = [], this.focusedItem = null, this.input = this._createInputElement(), this.listEl = this._createListElement(), this.initialValues = null, this.isFilter = t.getType() === "header", this.filterTimeout = null, this.filtered = !1, this.typing = !1, this.values = [], this.popup = null, this.listIteration = 0, this.lastAction = "", this.filterTerm = "", this.blurable = !0, this.actions = {
      success: s,
      cancel: n
    }, this._deprecatedOptionsCheck(), this._initializeValue(), i(this._onRendered.bind(this));
  }
  _deprecatedOptionsCheck() {
  }
  _initializeValue() {
    var e = this.cell.getValue();
    typeof e > "u" && typeof this.params.defaultValue < "u" && (e = this.params.defaultValue), this.initialValues = this.params.multiselect ? e : [e], this.isFilter && (this.input.value = this.initialValues ? this.initialValues.join(",") : "", this.headerFilterInitialListGen());
  }
  _onRendered() {
    var e = this.cell.getElement();
    function t(i) {
      i.stopPropagation();
    }
    this.isFilter || (this.input.style.height = "100%", this.input.focus({ preventScroll: !0 })), e.addEventListener("click", t), setTimeout(() => {
      e.removeEventListener("click", t);
    }, 1e3), this.input.addEventListener("mousedown", this._preventPopupBlur.bind(this));
  }
  _createListElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-edit-list"), e.addEventListener("mousedown", this._preventBlur.bind(this)), e.addEventListener("keydown", this._inputKeyDown.bind(this)), e;
  }
  _setListWidth() {
    var e = this.isFilter ? this.input : this.cell.getElement();
    this.listEl.style.minWidth = e.offsetWidth + "px", this.params.maxWidth && (this.params.maxWidth === !0 ? this.listEl.style.maxWidth = e.offsetWidth + "px" : typeof this.params.maxWidth == "number" ? this.listEl.style.maxWidth = this.params.maxWidth + "px" : this.listEl.style.maxWidth = this.params.maxWidth);
  }
  _createInputElement() {
    var e = this.params.elementAttributes, t = document.createElement("input");
    if (t.setAttribute("type", this.params.clearable ? "search" : "text"), t.style.padding = "4px", t.style.width = "100%", t.style.boxSizing = "border-box", this.params.autocomplete || (t.style.cursor = "default", t.style.caretColor = "transparent"), e && typeof e == "object")
      for (let i in e)
        i.charAt(0) == "+" ? (i = i.slice(1), t.setAttribute(i, t.getAttribute(i) + e["+" + i])) : t.setAttribute(i, e[i]);
    return this.params.mask && Bs(t, this.params), this._bindInputEvents(t), t;
  }
  _initializeParams(e) {
    var t = ["values", "valuesURL", "valuesLookup"], i;
    return e = Object.assign({}, e), e.verticalNavigation = e.verticalNavigation || "editor", e.placeholderLoading = typeof e.placeholderLoading > "u" ? "Searching ..." : e.placeholderLoading, e.placeholderEmpty = typeof e.placeholderEmpty > "u" ? "No Results Found" : e.placeholderEmpty, e.filterDelay = typeof e.filterDelay > "u" ? 300 : e.filterDelay, e.emptyValue = Object.keys(e).includes("emptyValue") ? e.emptyValue : "", i = Object.keys(e).filter((s) => t.includes(s)).length, i ? i > 1 && console.warn("list editor config error - only one of the values, valuesURL, or valuesLookup options can be set on the same editor") : console.warn("list editor config error - either the values, valuesURL, or valuesLookup option must be set"), e.autocomplete ? e.multiselect && (e.multiselect = !1, console.warn("list editor config error - multiselect option is not available when autocomplete is enabled")) : (e.freetext && (e.freetext = !1, console.warn("list editor config error - freetext option is only available when autocomplete is enabled")), e.filterFunc && (e.filterFunc = !1, console.warn("list editor config error - filterFunc option is only available when autocomplete is enabled")), e.filterRemote && (e.filterRemote = !1, console.warn("list editor config error - filterRemote option is only available when autocomplete is enabled")), e.mask && (e.mask = !1, console.warn("list editor config error - mask option is only available when autocomplete is enabled")), e.allowEmpty && (e.allowEmpty = !1, console.warn("list editor config error - allowEmpty option is only available when autocomplete is enabled")), e.listOnEmpty && (e.listOnEmpty = !1, console.warn("list editor config error - listOnEmpty option is only available when autocomplete is enabled"))), e.filterRemote && !(typeof e.valuesLookup == "function" || e.valuesURL) && (e.filterRemote = !1, console.warn("list editor config error - filterRemote option should only be used when values list is populated from a remote source")), e;
  }
  //////////////////////////////////////
  ////////// Event Handling ////////////
  //////////////////////////////////////
  _bindInputEvents(e) {
    e.addEventListener("focus", this._inputFocus.bind(this)), e.addEventListener("click", this._inputClick.bind(this)), e.addEventListener("blur", this._inputBlur.bind(this)), e.addEventListener("keydown", this._inputKeyDown.bind(this)), e.addEventListener("search", this._inputSearch.bind(this)), this.params.autocomplete && e.addEventListener("keyup", this._inputKeyUp.bind(this));
  }
  _inputFocus(e) {
    this.rebuildOptionsList();
  }
  _filter() {
    this.params.filterRemote ? (clearTimeout(this.filterTimeout), this.filterTimeout = setTimeout(() => {
      this.rebuildOptionsList();
    }, this.params.filterDelay)) : this._filterList();
  }
  _inputClick(e) {
    e.stopPropagation();
  }
  _inputBlur(e) {
    this.blurable && (this.popup ? this.popup.hide() : this._resolveValue(!0));
  }
  _inputSearch() {
    this._clearChoices();
  }
  _inputKeyDown(e) {
    switch (e.keyCode) {
      case 38:
        this._keyUp(e);
        break;
      case 40:
        this._keyDown(e);
        break;
      case 37:
      case 39:
        this._keySide(e);
        break;
      case 13:
        this._keyEnter();
        break;
      case 27:
        this._keyEsc();
        break;
      case 36:
      case 35:
        this._keyHomeEnd(e);
        break;
      case 9:
        this._keyTab(e);
        break;
      default:
        this._keySelectLetter(e);
    }
  }
  _inputKeyUp(e) {
    switch (e.keyCode) {
      case 38:
      case 37:
      case 39:
      case 40:
      case 13:
      case 27:
        break;
      default:
        this._keyAutoCompLetter(e);
    }
  }
  _preventPopupBlur() {
    this.popup && this.popup.blockHide(), setTimeout(() => {
      this.popup && this.popup.restoreHide();
    }, 10);
  }
  _preventBlur() {
    this.blurable = !1, setTimeout(() => {
      this.blurable = !0;
    }, 10);
  }
  //////////////////////////////////////
  //////// Keyboard Navigation /////////
  //////////////////////////////////////
  _keyTab(e) {
    this.params.autocomplete && this.lastAction === "typing" ? this._resolveValue(!0) : this.focusedItem && this._chooseItem(this.focusedItem, !0);
  }
  _keyUp(e) {
    var t = this.displayItems.indexOf(this.focusedItem);
    (this.params.verticalNavigation == "editor" || this.params.verticalNavigation == "hybrid" && t) && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t > 0 && this._focusItem(this.displayItems[t - 1]));
  }
  _keyDown(e) {
    var t = this.displayItems.indexOf(this.focusedItem);
    (this.params.verticalNavigation == "editor" || this.params.verticalNavigation == "hybrid" && t < this.displayItems.length - 1) && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault(), t < this.displayItems.length - 1 && (t == -1 ? this._focusItem(this.displayItems[0]) : this._focusItem(this.displayItems[t + 1])));
  }
  _keySide(e) {
    this.params.autocomplete || (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault());
  }
  _keyEnter(e) {
    this.params.autocomplete && this.lastAction === "typing" ? this._resolveValue(!0) : this.focusedItem && this._chooseItem(this.focusedItem);
  }
  _keyEsc(e) {
    this._cancel();
  }
  _keyHomeEnd(e) {
    this.params.autocomplete && e.stopImmediatePropagation();
  }
  _keySelectLetter(e) {
    this.params.autocomplete || (e.preventDefault(), e.keyCode >= 38 && e.keyCode <= 90 && this._scrollToValue(e.keyCode));
  }
  _keyAutoCompLetter(e) {
    this._filter(), this.lastAction = "typing", this.typing = !0;
  }
  _scrollToValue(e) {
    clearTimeout(this.filterTimeout);
    var t = String.fromCharCode(e).toLowerCase();
    this.filterTerm += t.toLowerCase();
    var i = this.displayItems.find((s) => typeof s.label < "u" && s.label.toLowerCase().startsWith(this.filterTerm));
    i && this._focusItem(i), this.filterTimeout = setTimeout(() => {
      this.filterTerm = "";
    }, 800);
  }
  _focusItem(e) {
    this.lastAction = "focus", this.focusedItem && this.focusedItem.element && this.focusedItem.element.classList.remove("focused"), this.focusedItem = e, e && e.element && (e.element.classList.add("focused"), e.element.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "start" }));
  }
  //////////////////////////////////////
  /////// Data List Generation /////////
  //////////////////////////////////////
  headerFilterInitialListGen() {
    this._generateOptions(!0);
  }
  rebuildOptionsList() {
    this._generateOptions().then(this._sortOptions.bind(this)).then(this._buildList.bind(this)).then(this._showList.bind(this)).catch((e) => {
      Number.isInteger(e) || console.error("List generation error", e);
    });
  }
  _filterList() {
    this._buildList(this._filterOptions()), this._showList();
  }
  _generateOptions(e) {
    var t = [], i = ++this.listIteration;
    return this.filtered = !1, this.params.values ? t = this.params.values : this.params.valuesURL ? t = this._ajaxRequest(this.params.valuesURL, this.input.value) : typeof this.params.valuesLookup == "function" ? t = this.params.valuesLookup(this.cell, this.input.value) : this.params.valuesLookup && (t = this._uniqueColumnValues(this.params.valuesLookupField)), t instanceof Promise ? (e || this._addPlaceholder(this.params.placeholderLoading), t.then().then((s) => this.listIteration === i ? this._parseList(s) : Promise.reject(i))) : Promise.resolve(this._parseList(t));
  }
  _addPlaceholder(e) {
    var t = document.createElement("div");
    typeof e == "function" && (e = e(this.cell.getComponent(), this.listEl)), e && (this._clearList(), e instanceof HTMLElement ? t = e : (t.classList.add("tabulator-edit-list-placeholder"), t.innerHTML = e), this.listEl.appendChild(t), this._showList());
  }
  _ajaxRequest(e, t) {
    var i = this.params.filterRemote ? { term: t } : {};
    return e = xo(e, {}, i), fetch(e).then((s) => s.ok ? s.json().catch((n) => (console.warn("List Ajax Load Error - Invalid JSON returned", n), Promise.reject(n))) : (console.error("List Ajax Load Error - Connection Error: " + s.status, s.statusText), Promise.reject(s))).catch((s) => (console.error("List Ajax Load Error - Connection Error: ", s), Promise.reject(s)));
  }
  _uniqueColumnValues(e) {
    var t = {}, i = this.table.getData(this.params.valuesLookup), s;
    return e ? s = this.table.columnManager.getColumnByField(e) : s = this.cell.getColumn()._getSelf(), s ? i.forEach((n) => {
      var a = s.getFieldValue(n);
      this._emptyValueCheck(a) || (this.params.multiselect && Array.isArray(a) ? a.forEach((o) => {
        this._emptyValueCheck(o) || (t[o] = !0);
      }) : t[a] = !0);
    }) : (console.warn("unable to find matching column to create select lookup list:", e), t = []), Object.keys(t);
  }
  _emptyValueCheck(e) {
    return e === null || typeof e > "u" || e === "";
  }
  _parseList(e) {
    var t = [];
    return Array.isArray(e) || (e = Object.entries(e).map(([i, s]) => ({
      label: s,
      value: i
    }))), e.forEach((i) => {
      typeof i != "object" && (i = {
        label: i,
        value: i
      }), this._parseListItem(i, t, 0);
    }), !this.currentItems.length && this.params.freetext && (this.input.value = this.initialValues, this.typing = !0, this.lastAction = "typing"), this.data = t, t;
  }
  _parseListItem(e, t, i) {
    var s = {};
    e.options ? s = this._parseListGroup(e, i + 1) : (s = {
      label: e.label,
      value: e.value,
      itemParams: e.itemParams,
      elementAttributes: e.elementAttributes,
      element: !1,
      selected: !1,
      visible: !0,
      level: i,
      original: e
    }, this.initialValues && this.initialValues.indexOf(e.value) > -1 && this._chooseItem(s, !0)), t.push(s);
  }
  _parseListGroup(e, t) {
    var i = {
      label: e.label,
      group: !0,
      itemParams: e.itemParams,
      elementAttributes: e.elementAttributes,
      element: !1,
      visible: !0,
      level: t,
      options: [],
      original: e
    };
    return e.options.forEach((s) => {
      this._parseListItem(s, i.options, t);
    }), i;
  }
  _sortOptions(e) {
    var t;
    return this.params.sort && (t = typeof this.params.sort == "function" ? this.params.sort : this._defaultSortFunction.bind(this), this._sortGroup(t, e)), e;
  }
  _sortGroup(e, t) {
    t.sort((i, s) => e(i.label, s.label, i.value, s.value, i.original, s.original)), t.forEach((i) => {
      i.group && this._sortGroup(e, i.options);
    });
  }
  _defaultSortFunction(e, t) {
    var i, s, n, a, o = 0, l, h = /(\d+)|(\D+)/g, u = /\d/, d = 0;
    if (this.params.sort === "desc" && ([e, t] = [t, e]), !e && e !== 0)
      d = !t && t !== 0 ? 0 : -1;
    else if (!t && t !== 0)
      d = 1;
    else {
      if (isFinite(e) && isFinite(t)) return e - t;
      if (i = String(e).toLowerCase(), s = String(t).toLowerCase(), i === s) return 0;
      if (!(u.test(i) && u.test(s))) return i > s ? 1 : -1;
      for (i = i.match(h), s = s.match(h), l = i.length > s.length ? s.length : i.length; o < l; )
        if (n = i[o], a = s[o++], n !== a)
          return isFinite(n) && isFinite(a) ? (n.charAt(0) === "0" && (n = "." + n), a.charAt(0) === "0" && (a = "." + a), n - a) : n > a ? 1 : -1;
      return i.length > s.length;
    }
    return d;
  }
  _filterOptions() {
    var e = this.params.filterFunc || this._defaultFilterFunc, t = this.input.value;
    return t ? (this.filtered = !0, this.data.forEach((i) => {
      this._filterItem(e, t, i);
    })) : this.filtered = !1, this.data;
  }
  _filterItem(e, t, i) {
    var s = !1;
    return i.group ? (i.options.forEach((n) => {
      this._filterItem(e, t, n) && (s = !0);
    }), i.visible = s) : i.visible = e(t, i.label, i.value, i.original), i.visible;
  }
  _defaultFilterFunc(e, t, i, s) {
    return e = String(e).toLowerCase(), t !== null && typeof t < "u" && (String(t).toLowerCase().indexOf(e) > -1 || String(i).toLowerCase().indexOf(e) > -1);
  }
  //////////////////////////////////////
  /////////// Display List /////////////
  //////////////////////////////////////
  _clearList() {
    for (; this.listEl.firstChild; ) this.listEl.removeChild(this.listEl.firstChild);
    this.displayItems = [];
  }
  _buildList(e) {
    this._clearList(), e.forEach((t) => {
      this._buildItem(t);
    }), this.displayItems.length || this._addPlaceholder(this.params.placeholderEmpty);
  }
  _buildItem(e) {
    var t = e.element, i;
    if (!this.filtered || e.visible) {
      if (!t) {
        if (t = document.createElement("div"), t.tabIndex = 0, i = this.params.itemFormatter ? this.params.itemFormatter(e.label, e.value, e.original, t) : e.label, i instanceof HTMLElement ? t.appendChild(i) : t.innerHTML = i, e.group ? t.classList.add("tabulator-edit-list-group") : t.classList.add("tabulator-edit-list-item"), t.classList.add("tabulator-edit-list-group-level-" + e.level), e.elementAttributes && typeof e.elementAttributes == "object")
          for (let s in e.elementAttributes)
            s.charAt(0) == "+" ? (s = s.slice(1), t.setAttribute(s, this.input.getAttribute(s) + e.elementAttributes["+" + s])) : t.setAttribute(s, e.elementAttributes[s]);
        e.group ? t.addEventListener("click", this._groupClick.bind(this, e)) : t.addEventListener("click", this._itemClick.bind(this, e)), t.addEventListener("mousedown", this._preventBlur.bind(this)), e.element = t;
      }
      this._styleItem(e), this.listEl.appendChild(t), e.group ? e.options.forEach((s) => {
        this._buildItem(s);
      }) : this.displayItems.push(e);
    }
  }
  _showList() {
    var e = this.popup && this.popup.isVisible();
    if (this.input.parentNode) {
      if (this.params.autocomplete && this.input.value === "" && !this.params.listOnEmpty) {
        this.popup && this.popup.hide(!0);
        return;
      }
      this._setListWidth(), this.popup || (this.popup = this.edit.popup(this.listEl)), this.popup.show(this.cell.getElement(), "bottom"), e || setTimeout(() => {
        this.popup.hideOnBlur(this._resolveValue.bind(this, !0));
      }, 10);
    }
  }
  _styleItem(e) {
    e && e.element && (e.selected ? e.element.classList.add("active") : e.element.classList.remove("active"));
  }
  //////////////////////////////////////
  ///////// User Interaction ///////////
  //////////////////////////////////////
  _itemClick(e, t) {
    t.stopPropagation(), this._chooseItem(e);
  }
  _groupClick(e, t) {
    t.stopPropagation();
  }
  //////////////////////////////////////
  ////// Current Item Management ///////
  //////////////////////////////////////
  _cancel() {
    this.popup.hide(!0), this.actions.cancel();
  }
  _clearChoices() {
    this.typing = !0, this.currentItems.forEach((e) => {
      e.selected = !1, this._styleItem(e);
    }), this.currentItems = [], this.focusedItem = null;
  }
  _chooseItem(e, t) {
    var i;
    this.typing = !1, this.params.multiselect ? (i = this.currentItems.indexOf(e), i > -1 ? (this.currentItems.splice(i, 1), e.selected = !1) : (this.currentItems.push(e), e.selected = !0), this.input.value = this.currentItems.map((s) => s.label).join(","), this._styleItem(e)) : (this.currentItems = [e], e.selected = !0, this.input.value = e.label, this._styleItem(e), t || this._resolveValue()), this._focusItem(e);
  }
  _resolveValue(e) {
    var t, i;
    if (this.popup && this.popup.hide(!0), this.params.multiselect)
      t = this.currentItems.map((s) => s.value);
    else if (e && this.params.autocomplete && this.typing)
      if (this.params.freetext || this.params.allowEmpty && this.input.value === "")
        t = this.input.value;
      else {
        this.actions.cancel();
        return;
      }
    else
      this.currentItems[0] ? t = this.currentItems[0].value : (i = Array.isArray(this.initialValues) ? this.initialValues[0] : this.initialValues, i === null || typeof i > "u" || i === "" ? t = i : t = this.params.emptyValue);
    t === "" && (t = this.params.emptyValue), this.actions.success(t), this.isFilter && (this.initialValues = t && !Array.isArray(t) ? [t] : t, this.currentItems = []);
  }
};
function Qu(r, e, t, i, s) {
  var n = new Xu(this, r, e, t, i, s);
  return n.input;
}
function ed(r, e, t, i, s) {
  var n = this, a = r.getElement(), o = r.getValue(), l = a.getElementsByTagName("svg").length || 5, h = a.getElementsByTagName("svg")[0] ? a.getElementsByTagName("svg")[0].getAttribute("width") : 14, u = [], d = document.createElement("div"), f = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  function b(k) {
    u.forEach(function(z, N) {
      N < k ? (n.table.browser == "ie" ? z.setAttribute("class", "tabulator-star-active") : z.classList.replace("tabulator-star-inactive", "tabulator-star-active"), z.innerHTML = '<polygon fill="#488CE9" stroke="#014AAE" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>') : (n.table.browser == "ie" ? z.setAttribute("class", "tabulator-star-inactive") : z.classList.replace("tabulator-star-active", "tabulator-star-inactive"), z.innerHTML = '<polygon fill="#010155" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>');
    });
  }
  function T(k) {
    var z = document.createElement("span"), N = f.cloneNode(!0);
    u.push(N), z.addEventListener("mouseenter", function(J) {
      J.stopPropagation(), J.stopImmediatePropagation(), b(k);
    }), z.addEventListener("mousemove", function(J) {
      J.stopPropagation(), J.stopImmediatePropagation();
    }), z.addEventListener("click", function(J) {
      J.stopPropagation(), J.stopImmediatePropagation(), t(k), a.blur();
    }), z.appendChild(N), d.appendChild(z);
  }
  function E(k) {
    o = k, b(k);
  }
  if (a.style.whiteSpace = "nowrap", a.style.overflow = "hidden", a.style.textOverflow = "ellipsis", d.style.verticalAlign = "middle", d.style.display = "inline-block", d.style.padding = "4px", f.setAttribute("width", h), f.setAttribute("height", h), f.setAttribute("viewBox", "0 0 512 512"), f.setAttribute("xml:space", "preserve"), f.style.padding = "0 1px", s.elementAttributes && typeof s.elementAttributes == "object")
    for (let k in s.elementAttributes)
      k.charAt(0) == "+" ? (k = k.slice(1), d.setAttribute(k, d.getAttribute(k) + s.elementAttributes["+" + k])) : d.setAttribute(k, s.elementAttributes[k]);
  for (var S = 1; S <= l; S++)
    T(S);
  return o = Math.min(parseInt(o), l), b(o), d.addEventListener("mousemove", function(k) {
    b(0);
  }), d.addEventListener("click", function(k) {
    t(0);
  }), a.addEventListener("blur", function(k) {
    i();
  }), a.addEventListener("keydown", function(k) {
    switch (k.keyCode) {
      case 39:
        E(o + 1);
        break;
      case 37:
        E(o - 1);
        break;
      case 13:
        t(o);
        break;
      case 27:
        i();
        break;
    }
  }), d;
}
function td(r, e, t, i, s) {
  var n = r.getElement(), a = typeof s.max > "u" ? n.getElementsByTagName("div")[0] && n.getElementsByTagName("div")[0].getAttribute("max") || 100 : s.max, o = typeof s.min > "u" ? n.getElementsByTagName("div")[0] && n.getElementsByTagName("div")[0].getAttribute("min") || 0 : s.min, l = (a - o) / 100, h = r.getValue() || 0, u = document.createElement("div"), d = document.createElement("div"), f, b;
  function T() {
    var E = window.getComputedStyle(n, null), S = l * Math.round(d.offsetWidth / ((n.clientWidth - parseInt(E.getPropertyValue("padding-left")) - parseInt(E.getPropertyValue("padding-right"))) / 100)) + o;
    t(S), n.setAttribute("aria-valuenow", S), n.setAttribute("aria-label", h);
  }
  if (u.style.position = "absolute", u.style.right = "0", u.style.top = "0", u.style.bottom = "0", u.style.width = "5px", u.classList.add("tabulator-progress-handle"), d.style.display = "inline-block", d.style.position = "relative", d.style.height = "100%", d.style.backgroundColor = "#488CE9", d.style.maxWidth = "100%", d.style.minWidth = "0%", s.elementAttributes && typeof s.elementAttributes == "object")
    for (let E in s.elementAttributes)
      E.charAt(0) == "+" ? (E = E.slice(1), d.setAttribute(E, d.getAttribute(E) + s.elementAttributes["+" + E])) : d.setAttribute(E, s.elementAttributes[E]);
  return n.style.padding = "4px 4px", h = Math.min(parseFloat(h), a), h = Math.max(parseFloat(h), o), h = Math.round((h - o) / l), d.style.width = h + "%", n.setAttribute("aria-valuemin", o), n.setAttribute("aria-valuemax", a), d.appendChild(u), u.addEventListener("mousedown", function(E) {
    f = E.screenX, b = d.offsetWidth;
  }), u.addEventListener("mouseover", function() {
    u.style.cursor = "ew-resize";
  }), n.addEventListener("mousemove", function(E) {
    f && (d.style.width = b + E.screenX - f + "px");
  }), n.addEventListener("mouseup", function(E) {
    f && (E.stopPropagation(), E.stopImmediatePropagation(), f = !1, b = !1, T());
  }), n.addEventListener("keydown", function(E) {
    switch (E.keyCode) {
      case 39:
        E.preventDefault(), d.style.width = d.clientWidth + n.clientWidth / 100 + "px";
        break;
      case 37:
        E.preventDefault(), d.style.width = d.clientWidth - n.clientWidth / 100 + "px";
        break;
      case 9:
      case 13:
        T();
        break;
      case 27:
        i();
        break;
    }
  }), n.addEventListener("blur", function() {
    i();
  }), d;
}
function id(r, e, t, i, s) {
  var n = r.getValue(), a = document.createElement("input"), o = s.tristate, l = typeof s.indeterminateValue > "u" ? null : s.indeterminateValue, h = !1, u = Object.keys(s).includes("trueValue"), d = Object.keys(s).includes("falseValue");
  if (a.setAttribute("type", "checkbox"), a.style.marginTop = "5px", a.style.boxSizing = "border-box", s.elementAttributes && typeof s.elementAttributes == "object")
    for (let b in s.elementAttributes)
      b.charAt(0) == "+" ? (b = b.slice(1), a.setAttribute(b, a.getAttribute(b) + s.elementAttributes["+" + b])) : a.setAttribute(b, s.elementAttributes[b]);
  a.value = n, o && (typeof n > "u" || n === l || n === "") && (h = !0, a.indeterminate = !0), this.table.browser != "firefox" && this.table.browser != "safari" && e(function() {
    r.getType() === "cell" && a.focus({ preventScroll: !0 });
  }), a.checked = u ? n === s.trueValue : n === !0 || n === "true" || n === "True" || n === 1;
  function f(b) {
    var T = a.checked;
    return u && T ? T = s.trueValue : d && !T && (T = s.falseValue), o ? b ? h ? l : T : a.checked && !h ? (a.checked = !1, a.indeterminate = !0, h = !0, l) : (h = !1, T) : T;
  }
  return a.addEventListener("change", function(b) {
    t(f());
  }), a.addEventListener("blur", function(b) {
    t(f(!0));
  }), a.addEventListener("keydown", function(b) {
    b.keyCode == 13 && t(f()), b.keyCode == 27 && i();
  }), a;
}
function sd(r, e, t, i, s) {
  var n = r._getSelf().column, a, o, l;
  function h(u) {
    var d = u.getValue(), f = "input";
    switch (typeof d) {
      case "number":
        f = "number";
        break;
      case "boolean":
        f = "tickCross";
        break;
      case "string":
        d.includes(`
`) && (f = "textarea");
        break;
    }
    return f;
  }
  return a = s.editorLookup ? s.editorLookup(r) : h(r), s.paramsLookup && (l = typeof s.paramsLookup == "function" ? s.paramsLookup(a, r) : s.paramsLookup[a]), o = this.table.modules.edit.lookupEditor(a, n), o.call(this, r, e, t, i, l || {});
}
var nd = {
  input: Gu,
  textarea: $u,
  number: Yu,
  range: qu,
  date: Zu,
  time: Ju,
  datetime: Ku,
  list: Qu,
  star: ed,
  progress: td,
  tickCross: id,
  adaptable: sd
};
const Gi = class Gi extends $ {
  constructor(e) {
    super(e), this.currentCell = !1, this.mouseClick = !1, this.recursionBlock = !1, this.invalidEdit = !1, this.editedCells = [], this.convertEmptyValues = !1, this.editors = Gi.editors, this.registerTableOption("editTriggerEvent", "focus"), this.registerTableOption("editorEmptyValue"), this.registerTableOption("editorEmptyValueFunc", this.emptyValueCheck.bind(this)), this.registerColumnOption("editable"), this.registerColumnOption("editor"), this.registerColumnOption("editorParams"), this.registerColumnOption("editorEmptyValue"), this.registerColumnOption("editorEmptyValueFunc"), this.registerColumnOption("cellEditing"), this.registerColumnOption("cellEdited"), this.registerColumnOption("cellEditCancelled"), this.registerTableFunction("getEditedCells", this.getEditedCells.bind(this)), this.registerTableFunction("clearCellEdited", this.clearCellEdited.bind(this)), this.registerTableFunction("navigatePrev", this.navigatePrev.bind(this)), this.registerTableFunction("navigateNext", this.navigateNext.bind(this)), this.registerTableFunction("navigateLeft", this.navigateLeft.bind(this)), this.registerTableFunction("navigateRight", this.navigateRight.bind(this)), this.registerTableFunction("navigateUp", this.navigateUp.bind(this)), this.registerTableFunction("navigateDown", this.navigateDown.bind(this)), this.registerComponentFunction("cell", "isEdited", this.cellIsEdited.bind(this)), this.registerComponentFunction("cell", "clearEdited", this.clearEdited.bind(this)), this.registerComponentFunction("cell", "edit", this.editCell.bind(this)), this.registerComponentFunction("cell", "cancelEdit", this.cellCancelEdit.bind(this)), this.registerComponentFunction("cell", "navigatePrev", this.navigatePrev.bind(this)), this.registerComponentFunction("cell", "navigateNext", this.navigateNext.bind(this)), this.registerComponentFunction("cell", "navigateLeft", this.navigateLeft.bind(this)), this.registerComponentFunction("cell", "navigateRight", this.navigateRight.bind(this)), this.registerComponentFunction("cell", "navigateUp", this.navigateUp.bind(this)), this.registerComponentFunction("cell", "navigateDown", this.navigateDown.bind(this));
  }
  initialize() {
    this.subscribe("cell-init", this.bindEditor.bind(this)), this.subscribe("cell-delete", this.clearEdited.bind(this)), this.subscribe("cell-value-changed", this.updateCellClass.bind(this)), this.subscribe("column-layout", this.initializeColumnCheck.bind(this)), this.subscribe("column-delete", this.columnDeleteCheck.bind(this)), this.subscribe("row-deleting", this.rowDeleteCheck.bind(this)), this.subscribe("row-layout", this.rowEditableCheck.bind(this)), this.subscribe("data-refreshing", this.cancelEdit.bind(this)), this.subscribe("clipboard-paste", this.pasteBlocker.bind(this)), this.subscribe("keybinding-nav-prev", this.navigatePrev.bind(this, void 0)), this.subscribe("keybinding-nav-next", this.keybindingNavigateNext.bind(this)), this.subscribe("keybinding-nav-up", this.navigateUp.bind(this, void 0)), this.subscribe("keybinding-nav-down", this.navigateDown.bind(this, void 0)), Object.keys(this.table.options).includes("editorEmptyValue") && (this.convertEmptyValues = !0);
  }
  ///////////////////////////////////
  ///////// Paste Negation //////////
  ///////////////////////////////////
  pasteBlocker(e) {
    if (this.currentCell)
      return !0;
  }
  ///////////////////////////////////
  ////// Keybinding Functions ///////
  ///////////////////////////////////
  keybindingNavigateNext(e) {
    var t = this.currentCell, i = this.options("tabEndNewRow");
    t && (this.navigateNext(t, e) || i && (t.getElement().firstChild.blur(), this.invalidEdit || (i === !0 ? i = this.table.addRow({}) : typeof i == "function" ? i = this.table.addRow(i(t.row.getComponent())) : i = this.table.addRow(Object.assign({}, i)), i.then(() => {
      setTimeout(() => {
        t.getComponent().navigateNext();
      });
    }))));
  }
  ///////////////////////////////////
  ///////// Cell Functions //////////
  ///////////////////////////////////
  cellIsEdited(e) {
    return !!e.modules.edit && e.modules.edit.edited;
  }
  cellCancelEdit(e) {
    e === this.currentCell ? this.table.modules.edit.cancelEdit() : console.warn("Cancel Editor Error - This cell is not currently being edited ");
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  updateCellClass(e) {
    this.allowEdit(e) ? e.getElement().classList.add("tabulator-editable") : e.getElement().classList.remove("tabulator-editable");
  }
  clearCellEdited(e) {
    e || (e = this.table.modules.edit.getEditedCells()), Array.isArray(e) || (e = [e]), e.forEach((t) => {
      this.table.modules.edit.clearEdited(t._getSelf());
    });
  }
  navigatePrev(e = this.currentCell, t) {
    var i, s;
    if (e) {
      if (t && t.preventDefault(), i = this.navigateLeft(), i)
        return !0;
      if (s = this.table.rowManager.prevDisplayRow(e.row, !0), s && (i = this.findPrevEditableCell(s, s.cells.length), i))
        return i.getComponent().edit(), !0;
    }
    return !1;
  }
  navigateNext(e = this.currentCell, t) {
    var i, s;
    if (e) {
      if (t && t.preventDefault(), i = this.navigateRight(), i)
        return !0;
      if (s = this.table.rowManager.nextDisplayRow(e.row, !0), s && (i = this.findNextEditableCell(s, -1), i))
        return i.getComponent().edit(), !0;
    }
    return !1;
  }
  navigateLeft(e = this.currentCell, t) {
    var i, s;
    return e && (t && t.preventDefault(), i = e.getIndex(), s = this.findPrevEditableCell(e.row, i), s) ? (s.getComponent().edit(), !0) : !1;
  }
  navigateRight(e = this.currentCell, t) {
    var i, s;
    return e && (t && t.preventDefault(), i = e.getIndex(), s = this.findNextEditableCell(e.row, i), s) ? (s.getComponent().edit(), !0) : !1;
  }
  navigateUp(e = this.currentCell, t) {
    var i, s;
    return e && (t && t.preventDefault(), i = e.getIndex(), s = this.table.rowManager.prevDisplayRow(e.row, !0), s) ? (s.cells[i].getComponent().edit(), !0) : !1;
  }
  navigateDown(e = this.currentCell, t) {
    var i, s;
    return e && (t && t.preventDefault(), i = e.getIndex(), s = this.table.rowManager.nextDisplayRow(e.row, !0), s) ? (s.cells[i].getComponent().edit(), !0) : !1;
  }
  findNextEditableCell(e, t) {
    var i = !1;
    if (t < e.cells.length - 1)
      for (var s = t + 1; s < e.cells.length; s++) {
        let n = e.cells[s];
        if (n.column.modules.edit && de.elVisible(n.getElement()) && this.allowEdit(n)) {
          i = n;
          break;
        }
      }
    return i;
  }
  findPrevEditableCell(e, t) {
    var i = !1;
    if (t > 0)
      for (var s = t - 1; s >= 0; s--) {
        let n = e.cells[s];
        if (n.column.modules.edit && de.elVisible(n.getElement()) && this.allowEdit(n)) {
          i = n;
          break;
        }
      }
    return i;
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  initializeColumnCheck(e) {
    typeof e.definition.editor < "u" && this.initializeColumn(e);
  }
  columnDeleteCheck(e) {
    this.currentCell && this.currentCell.column === e && this.cancelEdit();
  }
  rowDeleteCheck(e) {
    this.currentCell && this.currentCell.row === e && this.cancelEdit();
  }
  rowEditableCheck(e) {
    e.getCells().forEach((t) => {
      t.column.modules.edit && typeof t.column.modules.edit.check == "function" && this.updateCellClass(t);
    });
  }
  //initialize column editor
  initializeColumn(e) {
    var t = Object.keys(e.definition).includes("editorEmptyValue"), i = {
      editor: !1,
      blocked: !1,
      check: e.definition.editable,
      params: e.definition.editorParams || {},
      convertEmptyValues: t,
      editorEmptyValue: e.definition.editorEmptyValue,
      editorEmptyValueFunc: e.definition.editorEmptyValueFunc
    };
    i.editor = this.lookupEditor(e.definition.editor, e), i.editor && (e.modules.edit = i);
  }
  lookupEditor(e, t) {
    var i;
    switch (typeof e) {
      case "string":
        this.editors[e] ? i = this.editors[e] : console.warn("Editor Error - No such editor found: ", e);
        break;
      case "function":
        i = e;
        break;
      case "boolean":
        e === !0 && (typeof t.definition.formatter != "function" ? this.editors[t.definition.formatter] ? i = this.editors[t.definition.formatter] : i = this.editors.input : console.warn("Editor Error - Cannot auto lookup editor for a custom formatter: ", t.definition.formatter));
        break;
    }
    return i;
  }
  getCurrentCell() {
    return this.currentCell ? this.currentCell.getComponent() : !1;
  }
  clearEditor(e) {
    var t = this.currentCell, i;
    if (this.invalidEdit = !1, t) {
      for (this.currentCell = !1, i = t.getElement(), this.dispatch("edit-editor-clear", t, e), i.classList.remove("tabulator-editing"); i.firstChild; ) i.removeChild(i.firstChild);
      t.row.getElement().classList.remove("tabulator-editing"), t.table.element.classList.remove("tabulator-editing");
    }
  }
  cancelEdit() {
    if (this.currentCell) {
      var e = this.currentCell, t = this.currentCell.getComponent();
      this.clearEditor(!0), e.setValueActual(e.getValue()), e.cellRendered(), (e.column.definition.editor == "textarea" || e.column.definition.variableHeight) && e.row.normalizeHeight(!0), e.column.definition.cellEditCancelled && e.column.definition.cellEditCancelled.call(this.table, t), this.dispatch("edit-cancelled", e), this.dispatchExternal("cellEditCancelled", t);
    }
  }
  //return a formatted value for a cell
  bindEditor(e) {
    if (e.column.modules.edit) {
      var t = this, i = e.getElement(!0);
      this.updateCellClass(e), i.setAttribute("tabindex", 0), i.addEventListener("mousedown", function(s) {
        s.button === 2 ? s.preventDefault() : t.mouseClick = !0;
      }), this.options("editTriggerEvent") === "dblclick" && i.addEventListener("dblclick", function(s) {
        i.classList.contains("tabulator-editing") || (i.focus({ preventScroll: !0 }), t.edit(e, s, !1));
      }), (this.options("editTriggerEvent") === "focus" || this.options("editTriggerEvent") === "click") && i.addEventListener("click", function(s) {
        i.classList.contains("tabulator-editing") || (i.focus({ preventScroll: !0 }), t.edit(e, s, !1));
      }), this.options("editTriggerEvent") === "focus" && i.addEventListener("focus", function(s) {
        t.recursionBlock || t.edit(e, s, !1);
      });
    }
  }
  focusCellNoEvent(e, t) {
    this.recursionBlock = !0, t && this.table.browser === "ie" || e.getElement().focus({ preventScroll: !0 }), this.recursionBlock = !1;
  }
  editCell(e, t) {
    this.focusCellNoEvent(e), this.edit(e, !1, t);
  }
  focusScrollAdjust(e) {
    if (this.table.rowManager.getRenderMode() == "virtual") {
      var t = this.table.rowManager.element.scrollTop, i = this.table.rowManager.element.clientHeight + this.table.rowManager.element.scrollTop, s = e.row.getElement();
      s.offsetTop < t ? this.table.rowManager.element.scrollTop -= t - s.offsetTop : s.offsetTop + s.offsetHeight > i && (this.table.rowManager.element.scrollTop += s.offsetTop + s.offsetHeight - i);
      var n = this.table.rowManager.element.scrollLeft, a = this.table.rowManager.element.clientWidth + this.table.rowManager.element.scrollLeft, o = e.getElement();
      this.table.modExists("frozenColumns") && (n += parseInt(this.table.modules.frozenColumns.leftMargin || 0), a -= parseInt(this.table.modules.frozenColumns.rightMargin || 0)), this.table.options.renderHorizontal === "virtual" && (n -= parseInt(this.table.columnManager.renderer.vDomPadLeft), a -= parseInt(this.table.columnManager.renderer.vDomPadLeft)), o.offsetLeft < n ? this.table.rowManager.element.scrollLeft -= n - o.offsetLeft : o.offsetLeft + o.offsetWidth > a && (this.table.rowManager.element.scrollLeft += o.offsetLeft + o.offsetWidth - a);
    }
  }
  allowEdit(e) {
    var t = !!e.column.modules.edit;
    if (e.column.modules.edit)
      switch (typeof e.column.modules.edit.check) {
        case "function":
          e.row.initialized && (t = e.column.modules.edit.check(e.getComponent()));
          break;
        case "string":
          t = !!e.row.data[e.column.modules.edit.check];
          break;
        case "boolean":
          t = e.column.modules.edit.check;
          break;
      }
    return t;
  }
  edit(e, t, i) {
    var s = this, n = !0, a = function() {
    }, o = e.getElement(), l = !1, h, u, d;
    if (this.currentCell) {
      !this.invalidEdit && this.currentCell !== e && this.cancelEdit();
      return;
    }
    function f(k) {
      if (s.currentCell === e && !l) {
        var z = s.chain("edit-success", [e, k], !0, !0);
        return z === !0 || s.table.options.validationMode === "highlight" ? (l = !0, s.clearEditor(), e.modules.edit || (e.modules.edit = {}), e.modules.edit.edited = !0, s.editedCells.indexOf(e) == -1 && s.editedCells.push(e), k = s.transformEmptyValues(k, e), e.setValue(k, !0), z === !0) : (l = !0, s.invalidEdit = !0, s.focusCellNoEvent(e, !0), a(), setTimeout(() => {
          l = !1;
        }, 10), !1);
      }
    }
    function b() {
      s.currentCell === e && !l && s.cancelEdit();
    }
    function T(k) {
      a = k;
    }
    if (e.column.modules.edit.blocked)
      return this.mouseClick = !1, this.blur(o), !1;
    if (t && t.stopPropagation(), n = this.allowEdit(e), n || i) {
      if (s.cancelEdit(), s.currentCell = e, this.focusScrollAdjust(e), u = e.getComponent(), this.mouseClick && (this.mouseClick = !1, e.column.definition.cellClick && e.column.definition.cellClick.call(this.table, t, u)), e.column.definition.cellEditing && e.column.definition.cellEditing.call(this.table, u), this.dispatch("cell-editing", e), this.dispatchExternal("cellEditing", u), d = typeof e.column.modules.edit.params == "function" ? e.column.modules.edit.params(u) : e.column.modules.edit.params, h = e.column.modules.edit.editor.call(s, u, T, f, b, d), this.currentCell && h !== !1)
        if (h instanceof Node) {
          for (o.classList.add("tabulator-editing"), e.row.getElement().classList.add("tabulator-editing"), e.table.element.classList.add("tabulator-editing"); o.firstChild; ) o.removeChild(o.firstChild);
          o.appendChild(h), a();
          for (var E = o.children, S = 0; S < E.length; S++)
            E[S].addEventListener("click", function(k) {
              k.stopPropagation();
            });
        } else
          return console.warn("Edit Error - Editor should return an instance of Node, the editor returned:", h), this.blur(o), !1;
      else
        return this.blur(o), !1;
      return !0;
    } else
      return this.mouseClick = !1, this.blur(o), !1;
  }
  emptyValueCheck(e) {
    return e === "" || e === null || typeof e > "u";
  }
  transformEmptyValues(e, t) {
    var i = t.column.modules.edit, s = i.convertEmptyValues || this.convertEmptyValues, n;
    return s && (n = i.editorEmptyValueFunc || this.options("editorEmptyValueFunc"), n && n(e) && (e = i.convertEmptyValues ? i.editorEmptyValue : this.options("editorEmptyValue"))), e;
  }
  blur(e) {
    this.confirm("edit-blur", [e]) || e.blur();
  }
  getEditedCells() {
    var e = [];
    return this.editedCells.forEach((t) => {
      e.push(t.getComponent());
    }), e;
  }
  clearEdited(e) {
    var t;
    e.modules.edit && e.modules.edit.edited && (e.modules.edit.edited = !1, this.dispatch("edit-edited-clear", e)), t = this.editedCells.indexOf(e), t > -1 && this.editedCells.splice(t, 1);
  }
};
F(Gi, "moduleName", "edit"), //load defaults
F(Gi, "editors", nd);
let Ln = Gi;
class ia {
  constructor(e, t, i, s) {
    this.type = e, this.columns = t, this.component = i || !1, this.indent = s || 0;
  }
}
class rn {
  constructor(e, t, i, s, n) {
    this.value = e, this.component = t || !1, this.width = i, this.height = s, this.depth = n;
  }
}
var rd = {}, ad = {
  visible: function() {
    return this.rowManager.getVisibleRows(!1, !0);
  },
  all: function() {
    return this.rowManager.rows;
  },
  selected: function() {
    return this.modules.selectRow.selectedRows;
  },
  active: function() {
    return this.options.pagination ? this.rowManager.getDisplayRows(this.rowManager.displayRows.length - 2) : this.rowManager.getDisplayRows();
  }
};
const gt = class gt extends $ {
  constructor(e) {
    super(e), this.config = {}, this.cloneTableStyle = !0, this.colVisProp = "", this.colVisPropAttach = "", this.registerTableOption("htmlOutputConfig", !1), this.registerColumnOption("htmlOutput"), this.registerColumnOption("titleHtmlOutput");
  }
  initialize() {
    this.registerTableFunction("getHtml", this.getHtml.bind(this));
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  generateExportList(e, t, i, s) {
    var n, a, o, l;
    return this.cloneTableStyle = t, this.config = e || {}, this.colVisProp = s, this.colVisPropAttach = this.colVisProp.charAt(0).toUpperCase() + this.colVisProp.slice(1), l = gt.columnLookups[i], l && (o = l.call(this.table), o = o.filter((h) => this.columnVisCheck(h))), n = this.config.columnHeaders !== !1 ? this.headersToExportRows(this.generateColumnGroupHeaders(o)) : [], o && (o = o.map((h) => h.getComponent())), a = this.bodyToExportRows(this.rowLookup(i), o), n.concat(a);
  }
  generateTable(e, t, i, s) {
    var n = this.generateExportList(e, t, i, s);
    return this.generateTableElement(n);
  }
  rowLookup(e) {
    var t = [], i;
    return typeof e == "function" ? e.call(this.table).forEach((s) => {
      s = this.table.rowManager.findRow(s), s && t.push(s);
    }) : (i = gt.rowLookups[e] || gt.rowLookups.active, t = i.call(this.table)), Object.assign([], t);
  }
  generateColumnGroupHeaders(e) {
    var t = [];
    return e || (e = this.config.columnGroups !== !1 ? this.table.columnManager.columns : this.table.columnManager.columnsByIndex), e.forEach((i) => {
      var s = this.processColumnGroup(i);
      s && t.push(s);
    }), t;
  }
  processColumnGroup(e) {
    var t = e.columns, i = 0, s = e.definition["title" + this.colVisPropAttach] || e.definition.title, n = {
      title: s,
      column: e,
      depth: 1
    };
    if (t.length) {
      if (n.subGroups = [], n.width = 0, t.forEach((a) => {
        var o = this.processColumnGroup(a);
        o && (n.width += o.width, n.subGroups.push(o), o.depth > i && (i = o.depth));
      }), n.depth += i, !n.width)
        return !1;
    } else if (this.columnVisCheck(e))
      n.width = 1;
    else
      return !1;
    return n;
  }
  columnVisCheck(e) {
    var t = e.definition[this.colVisProp];
    return this.config.rowHeaders === !1 && e.isRowHeader ? !1 : (typeof t == "function" && (t = t.call(this.table, e.getComponent())), t === !1 || t === !0 ? t : e.visible && e.field);
  }
  headersToExportRows(e) {
    var t = [], i = 0, s = [];
    function n(a, o) {
      var l = i - o;
      if (typeof t[o] > "u" && (t[o] = []), a.height = a.subGroups ? 1 : l - a.depth + 1, t[o].push(a), a.height > 1)
        for (let h = 1; h < a.height; h++)
          typeof t[o + h] > "u" && (t[o + h] = []), t[o + h].push(!1);
      if (a.width > 1)
        for (let h = 1; h < a.width; h++)
          t[o].push(!1);
      a.subGroups && a.subGroups.forEach(function(h) {
        n(h, o + 1);
      });
    }
    return e.forEach(function(a) {
      a.depth > i && (i = a.depth);
    }), e.forEach(function(a) {
      n(a, 0);
    }), t.forEach((a) => {
      var o = [];
      a.forEach((l) => {
        if (l) {
          let h = typeof l.title > "u" ? "" : l.title;
          o.push(new rn(h, l.column.getComponent(), l.width, l.height, l.depth));
        } else
          o.push(null);
      }), s.push(new ia("header", o));
    }), s;
  }
  bodyToExportRows(e, t = []) {
    var i = [];
    return t.length === 0 && this.table.columnManager.columnsByIndex.forEach((s) => {
      this.columnVisCheck(s) && t.push(s.getComponent());
    }), this.config.columnCalcs !== !1 && this.table.modExists("columnCalcs") && (this.table.modules.columnCalcs.topInitialized && e.unshift(this.table.modules.columnCalcs.topRow), this.table.modules.columnCalcs.botInitialized && e.push(this.table.modules.columnCalcs.botRow)), e = e.filter((s) => {
      switch (s.type) {
        case "group":
          return this.config.rowGroups !== !1;
        case "calc":
          return this.config.columnCalcs !== !1;
        case "row":
          return !(this.table.options.dataTree && this.config.dataTree === !1 && s.modules.dataTree.parent);
      }
      return !0;
    }), e.forEach((s, n) => {
      var a = s.getData(this.colVisProp), o = [], l = 0;
      switch (s.type) {
        case "group":
          l = s.level, o.push(new rn(s.key, s.getComponent(), t.length, 1));
          break;
        case "calc":
        case "row":
          t.forEach((h) => {
            o.push(new rn(h._column.getFieldValue(a), h, 1, 1));
          }), this.table.options.dataTree && this.config.dataTree !== !1 && (l = s.modules.dataTree.index);
          break;
      }
      i.push(new ia(s.type, o, s.getComponent(), l));
    }), i;
  }
  generateTableElement(e) {
    var t = document.createElement("table"), i = document.createElement("thead"), s = document.createElement("tbody"), n = this.lookupTableStyles(), a = this.table.options["rowFormatter" + this.colVisPropAttach], o = {};
    return o.rowFormatter = a !== null ? a : this.table.options.rowFormatter, this.table.options.dataTree && this.config.dataTree !== !1 && this.table.modExists("columnCalcs") && (o.treeElementField = this.table.modules.dataTree.elementField), o.groupHeader = this.table.options["groupHeader" + this.colVisPropAttach], o.groupHeader && !Array.isArray(o.groupHeader) && (o.groupHeader = [o.groupHeader]), t.classList.add("tabulator-print-table"), this.mapElementStyles(this.table.columnManager.getHeadersElement(), i, ["border-top", "border-left", "border-right", "border-bottom", "background-color", "color", "font-weight", "font-family", "font-size"]), e.length > 1e3 && console.warn("It may take a long time to render an HTML table with more than 1000 rows"), e.forEach((l, h) => {
      let u;
      switch (l.type) {
        case "header":
          i.appendChild(this.generateHeaderElement(l, o, n));
          break;
        case "group":
          s.appendChild(this.generateGroupElement(l, o, n));
          break;
        case "calc":
          s.appendChild(this.generateCalcElement(l, o, n));
          break;
        case "row":
          u = this.generateRowElement(l, o, n), this.mapElementStyles(h % 2 && n.evenRow ? n.evenRow : n.oddRow, u, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]), s.appendChild(u);
          break;
      }
    }), i.innerHTML && t.appendChild(i), t.appendChild(s), this.mapElementStyles(this.table.element, t, ["border-top", "border-left", "border-right", "border-bottom"]), t;
  }
  lookupTableStyles() {
    var e = {};
    return this.cloneTableStyle && window.getComputedStyle && (e.oddRow = this.table.element.querySelector(".tabulator-row-odd:not(.tabulator-group):not(.tabulator-calcs)"), e.evenRow = this.table.element.querySelector(".tabulator-row-even:not(.tabulator-group):not(.tabulator-calcs)"), e.calcRow = this.table.element.querySelector(".tabulator-row.tabulator-calcs"), e.firstRow = this.table.element.querySelector(".tabulator-row:not(.tabulator-group):not(.tabulator-calcs)"), e.firstGroup = this.table.element.getElementsByClassName("tabulator-group")[0], e.firstRow && (e.styleCells = e.firstRow.getElementsByClassName("tabulator-cell"), e.styleRowHeader = e.firstRow.getElementsByClassName("tabulator-row-header")[0], e.firstCell = e.styleCells[0], e.lastCell = e.styleCells[e.styleCells.length - 1])), e;
  }
  generateHeaderElement(e, t, i) {
    var s = document.createElement("tr");
    return e.columns.forEach((n) => {
      if (n) {
        var a = document.createElement("th"), o = n.component._column.definition.cssClass ? n.component._column.definition.cssClass.split(" ") : [];
        a.colSpan = n.width, a.rowSpan = n.height, a.innerHTML = n.value, this.cloneTableStyle && (a.style.boxSizing = "border-box"), o.forEach(function(l) {
          a.classList.add(l);
        }), this.mapElementStyles(n.component.getElement(), a, ["text-align", "border-left", "border-right", "background-color", "color", "font-weight", "font-family", "font-size"]), this.mapElementStyles(n.component._column.contentElement, a, ["padding-top", "padding-left", "padding-right", "padding-bottom"]), n.component._column.visible ? this.mapElementStyles(n.component.getElement(), a, ["width"]) : n.component._column.definition.width && (a.style.width = n.component._column.definition.width + "px"), n.component._column.parent && n.component._column.parent.isGroup ? this.mapElementStyles(n.component._column.parent.groupElement, a, ["border-top"]) : this.mapElementStyles(n.component.getElement(), a, ["border-top"]), n.component._column.isGroup ? this.mapElementStyles(n.component.getElement(), a, ["border-bottom"]) : this.mapElementStyles(this.table.columnManager.getElement(), a, ["border-bottom"]), s.appendChild(a);
      }
    }), s;
  }
  generateGroupElement(e, t, i) {
    var s = document.createElement("tr"), n = document.createElement("td"), a = e.columns[0];
    return s.classList.add("tabulator-print-table-row"), t.groupHeader && t.groupHeader[e.indent] ? a.value = t.groupHeader[e.indent](a.value, e.component._group.getRowCount(), e.component._group.getData(), e.component) : t.groupHeader !== !1 && (a.value = e.component._group.generator(a.value, e.component._group.getRowCount(), e.component._group.getData(), e.component)), n.colSpan = a.width, n.innerHTML = a.value, s.classList.add("tabulator-print-table-group"), s.classList.add("tabulator-group-level-" + e.indent), a.component.isVisible() && s.classList.add("tabulator-group-visible"), this.mapElementStyles(i.firstGroup, s, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]), this.mapElementStyles(i.firstGroup, n, ["padding-top", "padding-left", "padding-right", "padding-bottom"]), s.appendChild(n), s;
  }
  generateCalcElement(e, t, i) {
    var s = this.generateRowElement(e, t, i);
    return s.classList.add("tabulator-print-table-calcs"), this.mapElementStyles(i.calcRow, s, ["border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "background-color"]), s;
  }
  generateRowElement(e, t, i) {
    var s = document.createElement("tr");
    if (s.classList.add("tabulator-print-table-row"), e.columns.forEach((n, a) => {
      if (n) {
        var o = document.createElement("td"), l = n.component._column, h = this.table, u = h.columnManager.findColumnIndex(l), d = n.value, f, b, T = {
          modules: {},
          getValue: function() {
            return d;
          },
          getField: function() {
            return l.definition.field;
          },
          getElement: function() {
            return o;
          },
          getType: function() {
            return "cell";
          },
          getColumn: function() {
            return l.getComponent();
          },
          getData: function() {
            return e.component.getData();
          },
          getRow: function() {
            return e.component;
          },
          getTable: function() {
            return h;
          },
          getComponent: function() {
            return T;
          },
          column: l
        }, E = l.definition.cssClass ? l.definition.cssClass.split(" ") : [];
        if (E.forEach(function(S) {
          o.classList.add(S);
        }), this.table.modExists("format") && this.config.formatCells !== !1)
          d = this.table.modules.format.formatExportValue(T, this.colVisProp);
        else
          switch (typeof d) {
            case "object":
              d = d !== null ? JSON.stringify(d) : "";
              break;
            case "undefined":
              d = "";
              break;
          }
        d instanceof Node ? o.appendChild(d) : o.innerHTML = d, b = ["padding-top", "padding-left", "padding-right", "padding-bottom", "border-top", "border-left", "border-right", "border-bottom", "color", "font-weight", "font-family", "font-size", "text-align"], l.isRowHeader ? (f = i.styleRowHeader, b.push("background-color")) : f = i.styleCells && i.styleCells[u] ? i.styleCells[u] : i.firstCell, f && (this.mapElementStyles(f, o, b), l.definition.align && (o.style.textAlign = l.definition.align)), this.table.options.dataTree && this.config.dataTree !== !1 && (t.treeElementField && t.treeElementField == l.field || !t.treeElementField && a == 0) && (e.component._row.modules.dataTree.controlEl && o.insertBefore(e.component._row.modules.dataTree.controlEl.cloneNode(!0), o.firstChild), e.component._row.modules.dataTree.branchEl && o.insertBefore(e.component._row.modules.dataTree.branchEl.cloneNode(!0), o.firstChild)), s.appendChild(o), T.modules.format && T.modules.format.renderedCallback && T.modules.format.renderedCallback();
      }
    }), t.rowFormatter && e.type === "row" && this.config.formatCells !== !1) {
      let n = Object.assign(e.component);
      n.getElement = function() {
        return s;
      }, t.rowFormatter(e.component);
    }
    return s;
  }
  generateHTMLTable(e) {
    var t = document.createElement("div");
    return t.appendChild(this.generateTableElement(e)), t.innerHTML;
  }
  getHtml(e, t, i, s) {
    var n = this.generateExportList(i || this.table.options.htmlOutputConfig, t, e, s || "htmlOutput");
    return this.generateHTMLTable(n);
  }
  mapElementStyles(e, t, i) {
    if (this.cloneTableStyle && e && t) {
      var s = {
        "background-color": "backgroundColor",
        color: "fontColor",
        width: "width",
        "font-weight": "fontWeight",
        "font-family": "fontFamily",
        "font-size": "fontSize",
        "text-align": "textAlign",
        "border-top": "borderTop",
        "border-left": "borderLeft",
        "border-right": "borderRight",
        "border-bottom": "borderBottom",
        "padding-top": "paddingTop",
        "padding-left": "paddingLeft",
        "padding-right": "paddingRight",
        "padding-bottom": "paddingBottom"
      };
      if (window.getComputedStyle) {
        var n = window.getComputedStyle(e);
        i.forEach(function(a) {
          t.style[s[a]] || (t.style[s[a]] = n.getPropertyValue(a));
        });
      }
    }
  }
};
F(gt, "moduleName", "export"), F(gt, "columnLookups", rd), F(gt, "rowLookups", ad);
let Fn = gt;
var od = {
  //equal to
  "=": function(r, e, t, i) {
    return e == r;
  },
  //less than
  "<": function(r, e, t, i) {
    return e < r;
  },
  //less than or equal to
  "<=": function(r, e, t, i) {
    return e <= r;
  },
  //greater than
  ">": function(r, e, t, i) {
    return e > r;
  },
  //greater than or equal to
  ">=": function(r, e, t, i) {
    return e >= r;
  },
  //not equal to
  "!=": function(r, e, t, i) {
    return e != r;
  },
  regex: function(r, e, t, i) {
    return typeof r == "string" && (r = new RegExp(r)), r.test(e);
  },
  //contains the string
  like: function(r, e, t, i) {
    return r === null || typeof r > "u" ? e === r : typeof e < "u" && e !== null ? String(e).toLowerCase().indexOf(r.toLowerCase()) > -1 : !1;
  },
  //contains the keywords
  keywords: function(r, e, t, i) {
    var s = r.toLowerCase().split(typeof i.separator > "u" ? " " : i.separator), n = String(e === null || typeof e > "u" ? "" : e).toLowerCase(), a = [];
    return s.forEach((o) => {
      n.includes(o) && a.push(!0);
    }), i.matchAll ? a.length === s.length : !!a.length;
  },
  //starts with the string
  starts: function(r, e, t, i) {
    return r === null || typeof r > "u" ? e === r : typeof e < "u" && e !== null ? String(e).toLowerCase().startsWith(r.toLowerCase()) : !1;
  },
  //ends with the string
  ends: function(r, e, t, i) {
    return r === null || typeof r > "u" ? e === r : typeof e < "u" && e !== null ? String(e).toLowerCase().endsWith(r.toLowerCase()) : !1;
  },
  //in array
  in: function(r, e, t, i) {
    return Array.isArray(r) ? r.length ? r.indexOf(e) > -1 : !0 : (console.warn("Filter Error - filter value is not an array:", r), !1);
  }
};
const at = class at extends $ {
  constructor(e) {
    super(e), this.filterList = [], this.headerFilters = {}, this.headerFilterColumns = [], this.prevHeaderFilterChangeCheck = "", this.prevHeaderFilterChangeCheck = "{}", this.changed = !1, this.tableInitialized = !1, this.registerTableOption("filterMode", "local"), this.registerTableOption("initialFilter", !1), this.registerTableOption("initialHeaderFilter", !1), this.registerTableOption("headerFilterLiveFilterDelay", 300), this.registerTableOption("placeholderHeaderFilter", !1), this.registerColumnOption("headerFilter"), this.registerColumnOption("headerFilterPlaceholder"), this.registerColumnOption("headerFilterParams"), this.registerColumnOption("headerFilterEmptyCheck"), this.registerColumnOption("headerFilterFunc"), this.registerColumnOption("headerFilterFuncParams"), this.registerColumnOption("headerFilterLiveFilter"), this.registerTableFunction("searchRows", this.searchRows.bind(this)), this.registerTableFunction("searchData", this.searchData.bind(this)), this.registerTableFunction("setFilter", this.userSetFilter.bind(this)), this.registerTableFunction("refreshFilter", this.userRefreshFilter.bind(this)), this.registerTableFunction("addFilter", this.userAddFilter.bind(this)), this.registerTableFunction("getFilters", this.getFilters.bind(this)), this.registerTableFunction("setHeaderFilterFocus", this.userSetHeaderFilterFocus.bind(this)), this.registerTableFunction("getHeaderFilterValue", this.userGetHeaderFilterValue.bind(this)), this.registerTableFunction("setHeaderFilterValue", this.userSetHeaderFilterValue.bind(this)), this.registerTableFunction("getHeaderFilters", this.getHeaderFilters.bind(this)), this.registerTableFunction("removeFilter", this.userRemoveFilter.bind(this)), this.registerTableFunction("clearFilter", this.userClearFilter.bind(this)), this.registerTableFunction("clearHeaderFilter", this.userClearHeaderFilter.bind(this)), this.registerComponentFunction("column", "headerFilterFocus", this.setHeaderFilterFocus.bind(this)), this.registerComponentFunction("column", "reloadHeaderFilter", this.reloadHeaderFilter.bind(this)), this.registerComponentFunction("column", "getHeaderFilterValue", this.getHeaderFilterValue.bind(this)), this.registerComponentFunction("column", "setHeaderFilterValue", this.setHeaderFilterValue.bind(this));
  }
  initialize() {
    this.subscribe("column-init", this.initializeColumnHeaderFilter.bind(this)), this.subscribe("column-width-fit-before", this.hideHeaderFilterElements.bind(this)), this.subscribe("column-width-fit-after", this.showHeaderFilterElements.bind(this)), this.subscribe("table-built", this.tableBuilt.bind(this)), this.subscribe("placeholder", this.generatePlaceholder.bind(this)), this.table.options.filterMode === "remote" && this.subscribe("data-params", this.remoteFilterParams.bind(this)), this.registerDataHandler(this.filter.bind(this), 10);
  }
  tableBuilt() {
    this.table.options.initialFilter && this.setFilter(this.table.options.initialFilter), this.table.options.initialHeaderFilter && this.table.options.initialHeaderFilter.forEach((e) => {
      var t = this.table.columnManager.findColumn(e.field);
      if (t)
        this.setHeaderFilterValue(t, e.value);
      else
        return console.warn("Column Filter Error - No matching column found:", e.field), !1;
    }), this.tableInitialized = !0;
  }
  remoteFilterParams(e, t, i, s) {
    return s.filter = this.getFilters(!0, !0), s;
  }
  generatePlaceholder(e) {
    if (this.table.options.placeholderHeaderFilter && Object.keys(this.headerFilters).length)
      return this.table.options.placeholderHeaderFilter;
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  //set standard filters
  userSetFilter(e, t, i, s) {
    this.setFilter(e, t, i, s), this.refreshFilter();
  }
  //set standard filters
  userRefreshFilter() {
    this.refreshFilter();
  }
  //add filter to array
  userAddFilter(e, t, i, s) {
    this.addFilter(e, t, i, s), this.refreshFilter();
  }
  userSetHeaderFilterFocus(e) {
    var t = this.table.columnManager.findColumn(e);
    if (t)
      this.setHeaderFilterFocus(t);
    else
      return console.warn("Column Filter Focus Error - No matching column found:", e), !1;
  }
  userGetHeaderFilterValue(e) {
    var t = this.table.columnManager.findColumn(e);
    if (t)
      return this.getHeaderFilterValue(t);
    console.warn("Column Filter Error - No matching column found:", e);
  }
  userSetHeaderFilterValue(e, t) {
    var i = this.table.columnManager.findColumn(e);
    if (i)
      this.setHeaderFilterValue(i, t);
    else
      return console.warn("Column Filter Error - No matching column found:", e), !1;
  }
  //remove filter from array
  userRemoveFilter(e, t, i) {
    this.removeFilter(e, t, i), this.refreshFilter();
  }
  //clear filters
  userClearFilter(e) {
    this.clearFilter(e), this.refreshFilter();
  }
  //clear header filters
  userClearHeaderFilter() {
    this.clearHeaderFilter(), this.refreshFilter();
  }
  //search for specific row components
  searchRows(e, t, i) {
    return this.search("rows", e, t, i);
  }
  //search for specific data
  searchData(e, t, i) {
    return this.search("data", e, t, i);
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  initializeColumnHeaderFilter(e) {
    var t = e.definition;
    t.headerFilter && this.initializeColumn(e);
  }
  //initialize column header filter
  initializeColumn(e, t) {
    var i = this, s = e.getField();
    function n(a) {
      var o = e.modules.filter.tagType == "input" && e.modules.filter.attrType == "text" || e.modules.filter.tagType == "textarea" ? "partial" : "match", l = "", h = "", u;
      if (typeof e.modules.filter.prevSuccess > "u" || e.modules.filter.prevSuccess !== a) {
        if (e.modules.filter.prevSuccess = a, e.modules.filter.emptyFunc(a))
          delete i.headerFilters[s];
        else {
          switch (e.modules.filter.value = a, typeof e.definition.headerFilterFunc) {
            case "string":
              at.filters[e.definition.headerFilterFunc] ? (l = e.definition.headerFilterFunc, u = function(d) {
                var f = e.definition.headerFilterFuncParams || {}, b = e.getFieldValue(d);
                return f = typeof f == "function" ? f(a, b, d) : f, at.filters[e.definition.headerFilterFunc](a, b, d, f);
              }) : console.warn("Header Filter Error - Matching filter function not found: ", e.definition.headerFilterFunc);
              break;
            case "function":
              u = function(d) {
                var f = e.definition.headerFilterFuncParams || {}, b = e.getFieldValue(d);
                return f = typeof f == "function" ? f(a, b, d) : f, e.definition.headerFilterFunc(a, b, d, f);
              }, l = u;
              break;
          }
          if (!u)
            switch (o) {
              case "partial":
                u = function(d) {
                  var f = e.getFieldValue(d);
                  return typeof f < "u" && f !== null ? String(f).toLowerCase().indexOf(String(a).toLowerCase()) > -1 : !1;
                }, l = "like";
                break;
              default:
                u = function(d) {
                  return e.getFieldValue(d) == a;
                }, l = "=";
            }
          i.headerFilters[s] = { value: a, func: u, type: l };
        }
        e.modules.filter.value = a, h = JSON.stringify(i.headerFilters), i.prevHeaderFilterChangeCheck !== h && (i.prevHeaderFilterChangeCheck = h, i.trackChanges(), i.refreshFilter());
      }
      return !0;
    }
    e.modules.filter = {
      success: n,
      attrType: !1,
      tagType: !1,
      emptyFunc: !1
    }, this.generateHeaderFilterElement(e);
  }
  generateHeaderFilterElement(e, t, i) {
    var s = this, n = e.modules.filter.success, a = e.getField(), o, l, h, u, d, f, b, T;
    e.modules.filter.value = t;
    function E() {
    }
    function S(k) {
      T = k;
    }
    if (e.modules.filter.headerElement && e.modules.filter.headerElement.parentNode && e.contentElement.removeChild(e.modules.filter.headerElement.parentNode), a) {
      switch (e.modules.filter.emptyFunc = e.definition.headerFilterEmptyCheck || function(k) {
        return !k && k !== 0;
      }, o = document.createElement("div"), o.classList.add("tabulator-header-filter"), typeof e.definition.headerFilter) {
        case "string":
          s.table.modules.edit.editors[e.definition.headerFilter] ? (l = s.table.modules.edit.editors[e.definition.headerFilter], (e.definition.headerFilter === "tick" || e.definition.headerFilter === "tickCross") && !e.definition.headerFilterEmptyCheck && (e.modules.filter.emptyFunc = function(k) {
            return k !== !0 && k !== !1;
          })) : console.warn("Filter Error - Cannot build header filter, No such editor found: ", e.definition.editor);
          break;
        case "function":
          l = e.definition.headerFilter;
          break;
        case "boolean":
          e.modules.edit && e.modules.edit.editor ? l = e.modules.edit.editor : e.definition.formatter && s.table.modules.edit.editors[e.definition.formatter] ? (l = s.table.modules.edit.editors[e.definition.formatter], (e.definition.formatter === "tick" || e.definition.formatter === "tickCross") && !e.definition.headerFilterEmptyCheck && (e.modules.filter.emptyFunc = function(k) {
            return k !== !0 && k !== !1;
          })) : l = s.table.modules.edit.editors.input;
          break;
      }
      if (l) {
        if (u = {
          getValue: function() {
            return typeof t < "u" ? t : "";
          },
          getField: function() {
            return e.definition.field;
          },
          getElement: function() {
            return o;
          },
          getColumn: function() {
            return e.getComponent();
          },
          getTable: () => this.table,
          getType: () => "header",
          getRow: function() {
            return {
              normalizeHeight: function() {
              }
            };
          }
        }, b = e.definition.headerFilterParams || {}, b = typeof b == "function" ? b.call(s.table, u) : b, h = l.call(this.table.modules.edit, u, S, n, E, b), !h) {
          console.warn("Filter Error - Cannot add filter to " + a + " column, editor returned a value of false");
          return;
        }
        if (!(h instanceof Node)) {
          console.warn("Filter Error - Cannot add filter to " + a + " column, editor should return an instance of Node, the editor returned:", h);
          return;
        }
        s.langBind("headerFilters|columns|" + e.definition.field, function(k) {
          h.setAttribute("placeholder", typeof k < "u" && k ? k : e.definition.headerFilterPlaceholder || s.langText("headerFilters|default"));
        }), h.addEventListener("click", function(k) {
          k.stopPropagation(), h.focus();
        }), h.addEventListener("focus", (k) => {
          var z = this.table.columnManager.contentsElement.scrollLeft, N = this.table.rowManager.element.scrollLeft;
          z !== N && (this.table.rowManager.scrollHorizontal(z), this.table.columnManager.scrollHorizontal(z));
        }), d = !1, f = function(k) {
          d && clearTimeout(d), d = setTimeout(function() {
            n(h.value);
          }, s.table.options.headerFilterLiveFilterDelay);
        }, e.modules.filter.headerElement = h, e.modules.filter.attrType = h.hasAttribute("type") ? h.getAttribute("type").toLowerCase() : "", e.modules.filter.tagType = h.tagName.toLowerCase(), e.definition.headerFilterLiveFilter !== !1 && (e.definition.headerFilter === "autocomplete" || e.definition.headerFilter === "tickCross" || (e.definition.editor === "autocomplete" || e.definition.editor === "tickCross") && e.definition.headerFilter === !0 || (h.addEventListener("keyup", f), h.addEventListener("search", f), e.modules.filter.attrType == "number" && h.addEventListener("change", function(k) {
          n(h.value);
        }), e.modules.filter.attrType == "text" && this.table.browser !== "ie" && h.setAttribute("type", "search")), (e.modules.filter.tagType == "input" || e.modules.filter.tagType == "select" || e.modules.filter.tagType == "textarea") && h.addEventListener("mousedown", function(k) {
          k.stopPropagation();
        })), o.appendChild(h), e.contentElement.appendChild(o), i || s.headerFilterColumns.push(e), T && T();
      }
    } else
      console.warn("Filter Error - Cannot add header filter, column has no field set:", e.definition.title);
  }
  //hide all header filter elements (used to ensure correct column widths in "fitData" layout mode)
  hideHeaderFilterElements() {
    this.headerFilterColumns.forEach(function(e) {
      e.modules.filter && e.modules.filter.headerElement && (e.modules.filter.headerElement.style.display = "none");
    });
  }
  //show all header filter elements (used to ensure correct column widths in "fitData" layout mode)
  showHeaderFilterElements() {
    this.headerFilterColumns.forEach(function(e) {
      e.modules.filter && e.modules.filter.headerElement && (e.modules.filter.headerElement.style.display = "");
    });
  }
  //programmatically set focus of header filter
  setHeaderFilterFocus(e) {
    e.modules.filter && e.modules.filter.headerElement ? e.modules.filter.headerElement.focus() : console.warn("Column Filter Focus Error - No header filter set on column:", e.getField());
  }
  //programmatically get value of header filter
  getHeaderFilterValue(e) {
    if (e.modules.filter && e.modules.filter.headerElement)
      return e.modules.filter.value;
    console.warn("Column Filter Error - No header filter set on column:", e.getField());
  }
  //programmatically set value of header filter
  setHeaderFilterValue(e, t) {
    e && (e.modules.filter && e.modules.filter.headerElement ? (this.generateHeaderFilterElement(e, t, !0), e.modules.filter.success(t)) : console.warn("Column Filter Error - No header filter set on column:", e.getField()));
  }
  reloadHeaderFilter(e) {
    e && (e.modules.filter && e.modules.filter.headerElement ? this.generateHeaderFilterElement(e, e.modules.filter.value, !0) : console.warn("Column Filter Error - No header filter set on column:", e.getField()));
  }
  refreshFilter() {
    this.tableInitialized && (this.table.options.filterMode === "remote" ? this.reloadData(null, !1, !1) : this.refreshData(!0));
  }
  //check if the filters has changed since last use
  trackChanges() {
    this.changed = !0, this.dispatch("filter-changed");
  }
  //check if the filters has changed since last use
  hasChanged() {
    var e = this.changed;
    return this.changed = !1, e;
  }
  //set standard filters
  setFilter(e, t, i, s) {
    this.filterList = [], Array.isArray(e) || (e = [{ field: e, type: t, value: i, params: s }]), this.addFilter(e);
  }
  //add filter to array
  addFilter(e, t, i, s) {
    var n = !1;
    Array.isArray(e) || (e = [{ field: e, type: t, value: i, params: s }]), e.forEach((a) => {
      a = this.findFilter(a), a && (this.filterList.push(a), n = !0);
    }), n && this.trackChanges();
  }
  findFilter(e) {
    var t;
    if (Array.isArray(e))
      return this.findSubFilters(e);
    var i = !1;
    return typeof e.field == "function" ? i = function(s) {
      return e.field(s, e.type || {});
    } : at.filters[e.type] ? (t = this.table.columnManager.getColumnByField(e.field), t ? i = function(s) {
      return at.filters[e.type](e.value, t.getFieldValue(s), s, e.params || {});
    } : i = function(s) {
      return at.filters[e.type](e.value, s[e.field], s, e.params || {});
    }) : console.warn("Filter Error - No such filter type found, ignoring: ", e.type), e.func = i, e.func ? e : !1;
  }
  findSubFilters(e) {
    var t = [];
    return e.forEach((i) => {
      i = this.findFilter(i), i && t.push(i);
    }), t.length ? t : !1;
  }
  //get all filters
  getFilters(e, t) {
    var i = [];
    return e && (i = this.getHeaderFilters()), t && i.forEach(function(s) {
      typeof s.type == "function" && (s.type = "function");
    }), i = i.concat(this.filtersToArray(this.filterList, t)), i;
  }
  //filter to Object
  filtersToArray(e, t) {
    var i = [];
    return e.forEach((s) => {
      var n;
      Array.isArray(s) ? i.push(this.filtersToArray(s, t)) : (n = { field: s.field, type: s.type, value: s.value }, t && typeof n.type == "function" && (n.type = "function"), i.push(n));
    }), i;
  }
  //get all filters
  getHeaderFilters() {
    var e = [];
    for (var t in this.headerFilters)
      e.push({ field: t, type: this.headerFilters[t].type, value: this.headerFilters[t].value });
    return e;
  }
  //remove filter from array
  removeFilter(e, t, i) {
    Array.isArray(e) || (e = [{ field: e, type: t, value: i }]), e.forEach((s) => {
      var n = -1;
      typeof s.field == "object" ? n = this.filterList.findIndex((a) => s === a) : n = this.filterList.findIndex((a) => s.field === a.field && s.type === a.type && s.value === a.value), n > -1 ? this.filterList.splice(n, 1) : console.warn("Filter Error - No matching filter type found, ignoring: ", s.type);
    }), this.trackChanges();
  }
  //clear filters
  clearFilter(e) {
    this.filterList = [], e && this.clearHeaderFilter(), this.trackChanges();
  }
  //clear header filters
  clearHeaderFilter() {
    this.headerFilters = {}, this.prevHeaderFilterChangeCheck = "{}", this.headerFilterColumns.forEach((e) => {
      typeof e.modules.filter.value < "u" && delete e.modules.filter.value, e.modules.filter.prevSuccess = void 0, this.reloadHeaderFilter(e);
    }), this.trackChanges();
  }
  //search data and return matching rows
  search(e, t, i, s) {
    var n = [], a = [];
    return Array.isArray(t) || (t = [{ field: t, type: i, value: s }]), t.forEach((o) => {
      o = this.findFilter(o), o && a.push(o);
    }), this.table.rowManager.rows.forEach((o) => {
      var l = !0;
      a.forEach((h) => {
        this.filterRecurse(h, o.getData()) || (l = !1);
      }), l && n.push(e === "data" ? o.getData("data") : o.getComponent());
    }), n;
  }
  //filter row array
  filter(e, t) {
    var i = [], s = [];
    return this.subscribedExternal("dataFiltering") && this.dispatchExternal("dataFiltering", this.getFilters(!0)), this.table.options.filterMode !== "remote" && (this.filterList.length || Object.keys(this.headerFilters).length) ? e.forEach((n) => {
      this.filterRow(n) && i.push(n);
    }) : i = e.slice(0), this.subscribedExternal("dataFiltered") && (i.forEach((n) => {
      s.push(n.getComponent());
    }), this.dispatchExternal("dataFiltered", this.getFilters(!0), s)), i;
  }
  //filter individual row
  filterRow(e, t) {
    var i = !0, s = e.getData();
    this.filterList.forEach((a) => {
      this.filterRecurse(a, s) || (i = !1);
    });
    for (var n in this.headerFilters)
      this.headerFilters[n].func(s) || (i = !1);
    return i;
  }
  filterRecurse(e, t) {
    var i = !1;
    return Array.isArray(e) ? e.forEach((s) => {
      this.filterRecurse(s, t) && (i = !0);
    }) : i = e.func(t), i;
  }
};
F(at, "moduleName", "filter"), //load defaults
F(at, "filters", od);
let On = at;
function ld(r, e, t) {
  return this.emptyToSpace(this.sanitizeHTML(r.getValue()));
}
function hd(r, e, t) {
  return r.getValue();
}
function ud(r, e, t) {
  return r.getElement().style.whiteSpace = "pre-wrap", this.emptyToSpace(this.sanitizeHTML(r.getValue()));
}
function dd(r, e, t) {
  var i = parseFloat(r.getValue()), s = "", n, a, o, l, h, u = e.decimal || ".", d = e.thousand || ",", f = e.negativeSign || "-", b = e.symbol || "", T = !!e.symbolAfter, E = typeof e.precision < "u" ? e.precision : 2;
  if (isNaN(i))
    return this.emptyToSpace(this.sanitizeHTML(r.getValue()));
  if (i < 0 && (i = Math.abs(i), s = f), n = E !== !1 ? i.toFixed(E) : i, n = String(n).split("."), a = n[0], o = n.length > 1 ? u + n[1] : "", e.thousand !== !1)
    for (l = /(\d+)(\d{3})/; l.test(a); )
      a = a.replace(l, "$1" + d + "$2");
  return h = a + o, s === !0 ? (h = "(" + h + ")", T ? h + b : b + h) : T ? s + h + b : s + b + h;
}
function cd(r, e, t) {
  var i = r.getValue(), s = e.urlPrefix || "", n = e.download, a = i, o = document.createElement("a"), l;
  function h(u, d) {
    var f = u.shift(), b = d[f];
    return u.length && typeof b == "object" ? h(u, b) : b;
  }
  if (e.labelField && (l = r.getData(), a = h(e.labelField.split(this.table.options.nestedFieldSeparator), l)), e.label)
    switch (typeof e.label) {
      case "string":
        a = e.label;
        break;
      case "function":
        a = e.label(r);
        break;
    }
  if (a) {
    if (e.urlField && (l = r.getData(), i = de.retrieveNestedData(this.table.options.nestedFieldSeparator, e.urlField, l)), e.url)
      switch (typeof e.url) {
        case "string":
          i = e.url;
          break;
        case "function":
          i = e.url(r);
          break;
      }
    return o.setAttribute("href", s + i), e.target && o.setAttribute("target", e.target), e.download && (typeof n == "function" ? n = n(r) : n = n === !0 ? "" : n, o.setAttribute("download", n)), o.innerHTML = this.emptyToSpace(this.sanitizeHTML(a)), o;
  } else
    return "&nbsp;";
}
function fd(r, e, t) {
  var i = document.createElement("img"), s = r.getValue();
  switch (e.urlPrefix && (s = e.urlPrefix + r.getValue()), e.urlSuffix && (s = s + e.urlSuffix), i.setAttribute("src", s), typeof e.height) {
    case "number":
      i.style.height = e.height + "px";
      break;
    case "string":
      i.style.height = e.height;
      break;
  }
  switch (typeof e.width) {
    case "number":
      i.style.width = e.width + "px";
      break;
    case "string":
      i.style.width = e.width;
      break;
  }
  return i.addEventListener("load", function() {
    r.getRow().normalizeHeight();
  }), i;
}
function md(r, e, t) {
  var i = r.getValue(), s = r.getElement(), n = e.allowEmpty, a = e.allowTruthy, o = Object.keys(e).includes("trueValue"), l = typeof e.tickElement < "u" ? e.tickElement : '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>', h = typeof e.crossElement < "u" ? e.crossElement : '<svg enable-background="new 0 0 24 24" height="14" width="14"  viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
  return o && i === e.trueValue || !o && (a && i || i === !0 || i === "true" || i === "True" || i === 1 || i === "1") ? (s.setAttribute("aria-checked", !0), l || "") : n && (i === "null" || i === "" || i === null || typeof i > "u") ? (s.setAttribute("aria-checked", "mixed"), "") : (s.setAttribute("aria-checked", !1), h || "");
}
function pd(r, e, t) {
  var i = this.table.dependencyRegistry.lookup(["luxon", "DateTime"], "DateTime"), s = e.inputFormat || "yyyy-MM-dd HH:mm:ss", n = e.outputFormat || "dd/MM/yyyy HH:mm:ss", a = typeof e.invalidPlaceholder < "u" ? e.invalidPlaceholder : "", o = r.getValue();
  if (typeof i < "u") {
    var l;
    return i.isDateTime(o) ? l = o : s === "iso" ? l = i.fromISO(String(o)) : l = i.fromFormat(String(o), s), l.isValid ? (e.timezone && (l = l.setZone(e.timezone)), l.toFormat(n)) : a === !0 || !o ? o : typeof a == "function" ? a(o) : a;
  } else
    console.error("Format Error - 'datetime' formatter is dependant on luxon.js");
}
function gd(r, e, t) {
  var i = this.table.dependencyRegistry.lookup(["luxon", "DateTime"], "DateTime"), s = e.inputFormat || "yyyy-MM-dd HH:mm:ss", n = typeof e.invalidPlaceholder < "u" ? e.invalidPlaceholder : "", a = typeof e.suffix < "u" ? e.suffix : !1, o = typeof e.unit < "u" ? e.unit : "days", l = typeof e.humanize < "u" ? e.humanize : !1, h = typeof e.date < "u" ? e.date : i.now(), u = r.getValue();
  if (typeof i < "u") {
    var d;
    return i.isDateTime(u) ? d = u : s === "iso" ? d = i.fromISO(String(u)) : d = i.fromFormat(String(u), s), d.isValid ? l ? d.diff(h, o).toHuman() + (a ? " " + a : "") : parseInt(d.diff(h, o)[o]) + (a ? " " + a : "") : n === !0 ? u : typeof n == "function" ? n(u) : n;
  } else
    console.error("Format Error - 'datetimediff' formatter is dependant on luxon.js");
}
function bd(r, e, t) {
  var i = r.getValue();
  return typeof e[i] > "u" ? (console.warn("Missing display value for " + i), i) : e[i];
}
function vd(r, e, t) {
  var i = r.getValue(), s = r.getElement(), n = e && e.stars ? e.stars : 5, a = document.createElement("span"), o = document.createElementNS("http://www.w3.org/2000/svg", "svg"), l = '<polygon fill="#FFEA00" stroke="#C1AB60" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>', h = '<polygon fill="#D2D2D2" stroke="#686868" stroke-width="37.6152" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="259.216,29.942 330.27,173.919 489.16,197.007 374.185,309.08 401.33,467.31 259.216,392.612 117.104,467.31 144.25,309.08 29.274,197.007 188.165,173.919 "/>';
  a.style.verticalAlign = "middle", o.setAttribute("width", "14"), o.setAttribute("height", "14"), o.setAttribute("viewBox", "0 0 512 512"), o.setAttribute("xml:space", "preserve"), o.style.padding = "0 1px", i = i && !isNaN(i) ? parseInt(i) : 0, i = Math.max(0, Math.min(i, n));
  for (var u = 1; u <= n; u++) {
    var d = o.cloneNode(!0);
    d.innerHTML = u <= i ? l : h, a.appendChild(d);
  }
  return s.style.whiteSpace = "nowrap", s.style.overflow = "hidden", s.style.textOverflow = "ellipsis", s.setAttribute("aria-label", i), a;
}
function wd(r, e, t) {
  var i = this.sanitizeHTML(r.getValue()) || 0, s = document.createElement("span"), n = e && e.max ? e.max : 100, a = e && e.min ? e.min : 0, o = e && typeof e.color < "u" ? e.color : ["red", "orange", "green"], l = "#666666", h, u;
  if (!(isNaN(i) || typeof r.getValue() > "u")) {
    switch (s.classList.add("tabulator-traffic-light"), u = parseFloat(i) <= n ? parseFloat(i) : n, u = parseFloat(u) >= a ? parseFloat(u) : a, h = (n - a) / 100, u = Math.round((u - a) / h), typeof o) {
      case "string":
        l = o;
        break;
      case "function":
        l = o(i);
        break;
      case "object":
        if (Array.isArray(o)) {
          var d = 100 / o.length, f = Math.floor(u / d);
          f = Math.min(f, o.length - 1), f = Math.max(f, 0), l = o[f];
          break;
        }
    }
    return s.style.backgroundColor = l, s;
  }
}
function yd(r, e = {}, t) {
  var i = this.sanitizeHTML(r.getValue()) || 0, s = r.getElement(), n = e.max ? e.max : 100, a = e.min ? e.min : 0, o = e.legendAlign ? e.legendAlign : "center", l, h, u, d, f;
  switch (h = parseFloat(i) <= n ? parseFloat(i) : n, h = parseFloat(h) >= a ? parseFloat(h) : a, l = (n - a) / 100, h = Math.round((h - a) / l), typeof e.color) {
    case "string":
      u = e.color;
      break;
    case "function":
      u = e.color(i);
      break;
    case "object":
      if (Array.isArray(e.color)) {
        let S = 100 / e.color.length, k = Math.floor(h / S);
        k = Math.min(k, e.color.length - 1), k = Math.max(k, 0), u = e.color[k];
        break;
      }
    default:
      u = "#2DC214";
  }
  switch (typeof e.legend) {
    case "string":
      d = e.legend;
      break;
    case "function":
      d = e.legend(i);
      break;
    case "boolean":
      d = i;
      break;
    default:
      d = !1;
  }
  switch (typeof e.legendColor) {
    case "string":
      f = e.legendColor;
      break;
    case "function":
      f = e.legendColor(i);
      break;
    case "object":
      if (Array.isArray(e.legendColor)) {
        let S = 100 / e.legendColor.length, k = Math.floor(h / S);
        k = Math.min(k, e.legendColor.length - 1), k = Math.max(k, 0), f = e.legendColor[k];
      }
      break;
    default:
      f = "#000";
  }
  s.style.minWidth = "30px", s.style.position = "relative", s.setAttribute("aria-label", h);
  var b = document.createElement("div");
  b.style.display = "inline-block", b.style.width = h + "%", b.style.backgroundColor = u, b.style.height = "100%", b.setAttribute("data-max", n), b.setAttribute("data-min", a);
  var T = document.createElement("div");
  if (T.style.position = "relative", T.style.width = "100%", T.style.height = "100%", d) {
    var E = document.createElement("div");
    E.style.position = "absolute", E.style.top = 0, E.style.left = 0, E.style.textAlign = o, E.style.width = "100%", E.style.color = f, E.innerHTML = d;
  }
  return t(function() {
    if (!(r instanceof Mo)) {
      var S = document.createElement("div");
      S.style.position = "absolute", S.style.top = "4px", S.style.bottom = "4px", S.style.left = "4px", S.style.right = "4px", s.appendChild(S), s = S;
    }
    s.appendChild(T), T.appendChild(b), d && T.appendChild(E);
  }), "";
}
function Cd(r, e, t) {
  return r.getElement().style.backgroundColor = this.sanitizeHTML(r.getValue()), "";
}
function Ed(r, e, t) {
  return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#2DC214" clip-rule="evenodd" d="M21.652,3.211c-0.293-0.295-0.77-0.295-1.061,0L9.41,14.34  c-0.293,0.297-0.771,0.297-1.062,0L3.449,9.351C3.304,9.203,3.114,9.13,2.923,9.129C2.73,9.128,2.534,9.201,2.387,9.351  l-2.165,1.946C0.078,11.445,0,11.63,0,11.823c0,0.194,0.078,0.397,0.223,0.544l4.94,5.184c0.292,0.296,0.771,0.776,1.062,1.07  l2.124,2.141c0.292,0.293,0.769,0.293,1.062,0l14.366-14.34c0.293-0.294,0.293-0.777,0-1.071L21.652,3.211z" fill-rule="evenodd"/></svg>';
}
function Td(r, e, t) {
  return '<svg enable-background="new 0 0 24 24" height="14" width="14" viewBox="0 0 24 24" xml:space="preserve" ><path fill="#CE1515" d="M22.245,4.015c0.313,0.313,0.313,0.826,0,1.139l-6.276,6.27c-0.313,0.312-0.313,0.826,0,1.14l6.273,6.272  c0.313,0.313,0.313,0.826,0,1.14l-2.285,2.277c-0.314,0.312-0.828,0.312-1.142,0l-6.271-6.271c-0.313-0.313-0.828-0.313-1.141,0  l-6.276,6.267c-0.313,0.313-0.828,0.313-1.141,0l-2.282-2.28c-0.313-0.313-0.313-0.826,0-1.14l6.278-6.269  c0.313-0.312,0.313-0.826,0-1.14L1.709,5.147c-0.314-0.313-0.314-0.827,0-1.14l2.284-2.278C4.308,1.417,4.821,1.417,5.135,1.73  L11.405,8c0.314,0.314,0.828,0.314,1.141,0.001l6.276-6.267c0.312-0.312,0.826-0.312,1.141,0L22.245,4.015z"/></svg>';
}
function kd(r, e, t) {
  var i = r.getValue(), s = e.size || 15, n = s + "px", a, o, l = e.hasOwnProperty("onValue") ? e.onValue : !0, h = e.hasOwnProperty("offValue") ? e.offValue : !1, u = e.onTruthy ? i : i === l;
  return a = document.createElement("div"), a.classList.add("tabulator-toggle"), u ? (a.classList.add("tabulator-toggle-on"), a.style.flexDirection = "row-reverse", e.onColor && (a.style.background = e.onColor)) : e.offColor && (a.style.background = e.offColor), a.style.width = 2.5 * s + "px", a.style.borderRadius = n, e.clickable && a.addEventListener("click", (d) => {
    r.setValue(u ? h : l);
  }), o = document.createElement("div"), o.classList.add("tabulator-toggle-switch"), o.style.height = n, o.style.width = n, o.style.borderRadius = n, a.appendChild(o), a;
}
function Rd(r, e, t) {
  var i = document.createElement("span"), s = r.getRow(), n = r.getTable();
  return s.watchPosition((a) => {
    e.relativeToPage && (a += n.modules.page.getPageSize() * (n.modules.page.getPage() - 1)), i.innerText = a;
  }), i;
}
function xd(r, e, t) {
  return r.getElement().classList.add("tabulator-row-handle"), "<div class='tabulator-row-handle-box'><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div><div class='tabulator-row-handle-bar'></div></div>";
}
function Md(r, e, t) {
  var i, s, n;
  function a(o) {
    var l = o.getValue(), h = "plaintext";
    switch (typeof l) {
      case "boolean":
        h = "tickCross";
        break;
      case "string":
        l.includes(`
`) && (h = "textarea");
        break;
    }
    return h;
  }
  return i = e.formatterLookup ? e.formatterLookup(r) : a(r), e.paramsLookup && (n = typeof e.paramsLookup == "function" ? e.paramsLookup(i, r) : e.paramsLookup[i]), s = this.table.modules.format.lookupFormatter(i), s.call(this, r, n || {}, t);
}
function Sd(r, e, t) {
  var i = e.delimiter || ",", s = r.getValue(), n = this.table, a;
  return e.valueMap && (typeof e.valueMap == "string" ? a = function(o) {
    return o.map((l) => de.retrieveNestedData(n.options.nestedFieldSeparator, e.valueMap, l));
  } : a = e.valueMap), Array.isArray(s) ? (a && (s = a(s)), s.join(i)) : s;
}
function Dd(r, e, t) {
  var i = e.indent || "	", s = typeof e.multiline > "u" ? !0 : e.multiline, n = e.replacer || null, a = r.getValue();
  return s && (r.getElement().style.whiteSpace = "pre-wrap"), JSON.stringify(a, n, i);
}
var Ld = {
  plaintext: ld,
  html: hd,
  textarea: ud,
  money: dd,
  link: cd,
  image: fd,
  tickCross: md,
  datetime: pd,
  datetimediff: gd,
  lookup: bd,
  star: vd,
  traffic: wd,
  progress: yd,
  color: Cd,
  buttonTick: Ed,
  buttonCross: Td,
  toggle: kd,
  rownum: Rd,
  handle: xd,
  adaptable: Md,
  array: Sd,
  json: Dd
};
const bt = class bt extends $ {
  constructor(e) {
    super(e), this.registerColumnOption("formatter"), this.registerColumnOption("formatterParams"), this.registerColumnOption("formatterPrint"), this.registerColumnOption("formatterPrintParams"), this.registerColumnOption("formatterClipboard"), this.registerColumnOption("formatterClipboardParams"), this.registerColumnOption("formatterHtmlOutput"), this.registerColumnOption("formatterHtmlOutputParams"), this.registerColumnOption("titleFormatter"), this.registerColumnOption("titleFormatterParams");
  }
  initialize() {
    this.subscribe("cell-format", this.formatValue.bind(this)), this.subscribe("cell-rendered", this.cellRendered.bind(this)), this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("column-format", this.formatHeader.bind(this));
  }
  //initialize column formatter
  initializeColumn(e) {
    e.modules.format = this.lookupTypeFormatter(e, ""), typeof e.definition.formatterPrint < "u" && (e.modules.format.print = this.lookupTypeFormatter(e, "Print")), typeof e.definition.formatterClipboard < "u" && (e.modules.format.clipboard = this.lookupTypeFormatter(e, "Clipboard")), typeof e.definition.formatterHtmlOutput < "u" && (e.modules.format.htmlOutput = this.lookupTypeFormatter(e, "HtmlOutput"));
  }
  lookupTypeFormatter(e, t) {
    var i = { params: e.definition["formatter" + t + "Params"] || {} }, s = e.definition["formatter" + t];
    return i.formatter = this.lookupFormatter(s), i;
  }
  lookupFormatter(e) {
    var t;
    switch (typeof e) {
      case "string":
        bt.formatters[e] ? t = bt.formatters[e] : (console.warn("Formatter Error - No such formatter found: ", e), t = bt.formatters.plaintext);
        break;
      case "function":
        t = e;
        break;
      default:
        t = bt.formatters.plaintext;
        break;
    }
    return t;
  }
  cellRendered(e) {
    e.modules.format && e.modules.format.renderedCallback && !e.modules.format.rendered && (e.modules.format.renderedCallback(), e.modules.format.rendered = !0);
  }
  //return a formatted value for a column header
  formatHeader(e, t, i) {
    var s, n, a, o;
    return e.definition.titleFormatter ? (s = this.lookupFormatter(e.definition.titleFormatter), a = (l) => {
      e.titleFormatterRendered = l;
    }, o = {
      getValue: function() {
        return t;
      },
      getElement: function() {
        return i;
      },
      getType: function() {
        return "header";
      },
      getColumn: function() {
        return e.getComponent();
      },
      getTable: () => this.table
    }, n = e.definition.titleFormatterParams || {}, n = typeof n == "function" ? n() : n, s.call(this, o, n, a)) : t;
  }
  //return a formatted value for a cell
  formatValue(e) {
    var t = e.getComponent(), i = typeof e.column.modules.format.params == "function" ? e.column.modules.format.params(t) : e.column.modules.format.params;
    function s(n) {
      e.modules.format || (e.modules.format = {}), e.modules.format.renderedCallback = n, e.modules.format.rendered = !1;
    }
    return e.column.modules.format.formatter.call(this, t, i, s);
  }
  formatExportValue(e, t) {
    var i = e.column.modules.format[t], s;
    if (i) {
      let n = function(a) {
        e.modules.format || (e.modules.format = {}), e.modules.format.renderedCallback = a, e.modules.format.rendered = !1;
      };
      return s = typeof i.params == "function" ? i.params(e.getComponent()) : i.params, i.formatter.call(this, e.getComponent(), s, n);
    } else
      return this.formatValue(e);
  }
  sanitizeHTML(e) {
    if (e) {
      var t = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "/": "&#x2F;",
        "`": "&#x60;",
        "=": "&#x3D;"
      };
      return String(e).replace(/[&<>"'`=/]/g, function(i) {
        return t[i];
      });
    } else
      return e;
  }
  emptyToSpace(e) {
    return e === null || typeof e > "u" || e === "" ? "&nbsp;" : e;
  }
};
F(bt, "moduleName", "format"), //load defaults
F(bt, "formatters", Ld);
let zn = bt;
class Fo extends $ {
  constructor(e) {
    super(e), this.leftColumns = [], this.rightColumns = [], this.initializationMode = "left", this.active = !1, this.blocked = !0, this.registerColumnOption("frozen");
  }
  //reset initial state
  reset() {
    this.initializationMode = "left", this.leftColumns = [], this.rightColumns = [], this.active = !1;
  }
  initialize() {
    this.subscribe("cell-layout", this.layoutCell.bind(this)), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("column-width", this.layout.bind(this)), this.subscribe("row-layout-after", this.layoutRow.bind(this)), this.subscribe("table-layout", this.layout.bind(this)), this.subscribe("columns-loading", this.reset.bind(this)), this.subscribe("column-add", this.reinitializeColumns.bind(this)), this.subscribe("column-deleted", this.reinitializeColumns.bind(this)), this.subscribe("column-hide", this.reinitializeColumns.bind(this)), this.subscribe("column-show", this.reinitializeColumns.bind(this)), this.subscribe("columns-loaded", this.reinitializeColumns.bind(this)), this.subscribe("table-redraw", this.layout.bind(this)), this.subscribe("layout-refreshing", this.blockLayout.bind(this)), this.subscribe("layout-refreshed", this.unblockLayout.bind(this)), this.subscribe("scrollbar-vertical", this.adjustForScrollbar.bind(this));
  }
  blockLayout() {
    this.blocked = !0;
  }
  unblockLayout() {
    this.blocked = !1;
  }
  layoutCell(e) {
    this.layoutElement(e.element, e.column);
  }
  reinitializeColumns() {
    this.reset(), this.table.columnManager.columnsByIndex.forEach((e) => {
      this.initializeColumn(e);
    }), this.layout();
  }
  //initialize specific column
  initializeColumn(e) {
    var t = { margin: 0, edge: !1 };
    e.isGroup || (this.frozenCheck(e) ? (t.position = this.initializationMode, this.initializationMode == "left" ? this.leftColumns.push(e) : this.rightColumns.unshift(e), this.active = !0, e.modules.frozen = t) : this.initializationMode = "right");
  }
  frozenCheck(e) {
    return e.parent.isGroup && e.definition.frozen && console.warn("Frozen Column Error - Parent column group must be frozen, not individual columns or sub column groups"), e.parent.isGroup ? this.frozenCheck(e.parent) : e.definition.frozen;
  }
  //layout calculation rows
  layoutCalcRows() {
    this.table.modExists("columnCalcs") && (this.table.modules.columnCalcs.topInitialized && this.table.modules.columnCalcs.topRow && this.layoutRow(this.table.modules.columnCalcs.topRow), this.table.modules.columnCalcs.botInitialized && this.table.modules.columnCalcs.botRow && this.layoutRow(this.table.modules.columnCalcs.botRow), this.table.modExists("groupRows") && this.layoutGroupCalcs(this.table.modules.groupRows.getGroups()));
  }
  layoutGroupCalcs(e) {
    e.forEach((t) => {
      t.calcs.top && this.layoutRow(t.calcs.top), t.calcs.bottom && this.layoutRow(t.calcs.bottom), t.groupList && t.groupList.length && this.layoutGroupCalcs(t.groupList);
    });
  }
  //calculate column positions and layout headers
  layoutColumnPosition(e) {
    var t = [], i = 0, s = 0;
    this.leftColumns.forEach((n, a) => {
      if (n.modules.frozen.marginValue = i, n.modules.frozen.margin = n.modules.frozen.marginValue + "px", n.visible && (i += n.getWidth()), a == this.leftColumns.length - 1 ? n.modules.frozen.edge = !0 : n.modules.frozen.edge = !1, n.parent.isGroup) {
        var o = this.getColGroupParentElement(n);
        t.includes(o) || (this.layoutElement(o, n), t.push(o)), o.classList.toggle("tabulator-frozen-left", n.modules.frozen.edge && n.modules.frozen.position === "left"), o.classList.toggle("tabulator-frozen-right", n.modules.frozen.edge && n.modules.frozen.position === "right");
      } else
        this.layoutElement(n.getElement(), n);
      e && n.cells.forEach((l) => {
        this.layoutElement(l.getElement(!0), n);
      });
    }), this.rightColumns.forEach((n, a) => {
      n.modules.frozen.marginValue = s, n.modules.frozen.margin = n.modules.frozen.marginValue + "px", n.visible && (s += n.getWidth()), a == this.rightColumns.length - 1 ? n.modules.frozen.edge = !0 : n.modules.frozen.edge = !1, n.parent.isGroup ? this.layoutElement(this.getColGroupParentElement(n), n) : this.layoutElement(n.getElement(), n), e && n.cells.forEach((o) => {
        this.layoutElement(o.getElement(!0), n);
      });
    });
  }
  getColGroupParentElement(e) {
    return e.parent.isGroup ? this.getColGroupParentElement(e.parent) : e.getElement();
  }
  //layout columns appropriately
  layout() {
    this.active && !this.blocked && (this.layoutColumnPosition(), this.reinitializeRows(), this.layoutCalcRows());
  }
  reinitializeRows() {
    var e = this.table.rowManager.getVisibleRows(!0), t = this.table.rowManager.getRows().filter((i) => !e.includes(i));
    t.forEach((i) => {
      i.deinitialize();
    }), e.forEach((i) => {
      i.type === "row" && this.layoutRow(i);
    });
  }
  layoutRow(e) {
    this.table.options.layout === "fitDataFill" && this.rightColumns.length && (this.table.rowManager.getTableElement().style.minWidth = "calc(100% - " + this.rightMargin + ")"), this.leftColumns.forEach((t) => {
      var i = e.getCell(t);
      i && this.layoutElement(i.getElement(!0), t);
    }), this.rightColumns.forEach((t) => {
      var i = e.getCell(t);
      i && this.layoutElement(i.getElement(!0), t);
    });
  }
  layoutElement(e, t) {
    var i;
    t.modules.frozen && e && (e.style.position = "sticky", this.table.rtl ? i = t.modules.frozen.position === "left" ? "right" : "left" : i = t.modules.frozen.position, e.style[i] = t.modules.frozen.margin, e.classList.add("tabulator-frozen"), e.classList.toggle("tabulator-frozen-left", t.modules.frozen.edge && t.modules.frozen.position === "left"), e.classList.toggle("tabulator-frozen-right", t.modules.frozen.edge && t.modules.frozen.position === "right"));
  }
  adjustForScrollbar(e) {
    this.rightColumns.length && (this.table.columnManager.getContentsElement().style.width = "calc(100% - " + e + "px)");
  }
  getFrozenColumns() {
    return this.leftColumns.concat(this.rightColumns);
  }
  _calcSpace(e, t) {
    var i = 0;
    for (let s = 0; s < t; s++)
      e[s].visible && (i += e[s].getWidth());
    return i;
  }
}
F(Fo, "moduleName", "frozenColumns");
class Oo extends $ {
  constructor(e) {
    super(e), this.topElement = document.createElement("div"), this.rows = [], this.registerComponentFunction("row", "freeze", this.freezeRow.bind(this)), this.registerComponentFunction("row", "unfreeze", this.unfreezeRow.bind(this)), this.registerComponentFunction("row", "isFrozen", this.isRowFrozen.bind(this)), this.registerTableOption("frozenRowsField", "id"), this.registerTableOption("frozenRows", !1);
  }
  initialize() {
    var e = document.createDocumentFragment();
    this.rows = [], this.topElement.classList.add("tabulator-frozen-rows-holder"), e.appendChild(document.createElement("br")), e.appendChild(this.topElement), this.table.columnManager.getContentsElement().insertBefore(e, this.table.columnManager.headersElement.nextSibling), this.subscribe("row-deleting", this.detachRow.bind(this)), this.subscribe("rows-visible", this.visibleRows.bind(this)), this.registerDisplayHandler(this.getRows.bind(this), 10), this.table.options.frozenRows && (this.subscribe("data-processed", this.initializeRows.bind(this)), this.subscribe("row-added", this.initializeRow.bind(this)), this.subscribe("table-redrawing", this.resizeHolderWidth.bind(this)), this.subscribe("column-resized", this.resizeHolderWidth.bind(this)), this.subscribe("column-show", this.resizeHolderWidth.bind(this)), this.subscribe("column-hide", this.resizeHolderWidth.bind(this))), this.resizeHolderWidth();
  }
  resizeHolderWidth() {
    this.topElement.style.minWidth = this.table.columnManager.headersElement.offsetWidth + "px";
  }
  initializeRows() {
    this.table.rowManager.getRows().forEach((e) => {
      this.initializeRow(e);
    });
  }
  initializeRow(e) {
    var t = this.table.options.frozenRows, i = typeof t;
    i === "number" ? e.getPosition() && e.getPosition() + this.rows.length <= t && this.freezeRow(e) : i === "function" ? t.call(this.table, e.getComponent()) && this.freezeRow(e) : Array.isArray(t) && t.includes(e.data[this.options("frozenRowsField")]) && this.freezeRow(e);
  }
  isRowFrozen(e) {
    var t = this.rows.indexOf(e);
    return t > -1;
  }
  isFrozen() {
    return !!this.rows.length;
  }
  visibleRows(e, t) {
    return this.rows.forEach((i) => {
      t.push(i);
    }), t;
  }
  //filter frozen rows out of display data
  getRows(e) {
    var t = e.slice(0);
    return this.rows.forEach(function(i) {
      var s = t.indexOf(i);
      s > -1 && t.splice(s, 1);
    }), t;
  }
  freezeRow(e) {
    e.modules.frozen ? console.warn("Freeze Error - Row is already frozen") : (e.modules.frozen = !0, this.topElement.appendChild(e.getElement()), e.initialize(), e.normalizeHeight(), this.rows.push(e), this.refreshData(!1, "display"), this.table.rowManager.adjustTableSize(), this.styleRows());
  }
  unfreezeRow(e) {
    e.modules.frozen ? (e.modules.frozen = !1, this.detachRow(e), this.table.rowManager.adjustTableSize(), this.refreshData(!1, "display"), this.rows.length && this.styleRows()) : console.warn("Freeze Error - Row is already unfrozen");
  }
  detachRow(e) {
    var t = this.rows.indexOf(e);
    if (t > -1) {
      var i = e.getElement();
      i.parentNode && i.parentNode.removeChild(i), this.rows.splice(t, 1);
    }
  }
  styleRows(e) {
    this.rows.forEach((t, i) => {
      this.table.rowManager.styleRow(t, i);
    });
  }
}
F(Oo, "moduleName", "frozenRows");
class Fd {
  constructor(e) {
    return this._group = e, this.type = "GroupComponent", new Proxy(this, {
      get: function(t, i, s) {
        return typeof t[i] < "u" ? t[i] : t._group.groupManager.table.componentFunctionBinder.handle("group", t._group, i);
      }
    });
  }
  getKey() {
    return this._group.key;
  }
  getField() {
    return this._group.field;
  }
  getElement() {
    return this._group.element;
  }
  getRows() {
    return this._group.getRows(!0);
  }
  getSubGroups() {
    return this._group.getSubGroups(!0);
  }
  getParentGroup() {
    return this._group.parent ? this._group.parent.getComponent() : !1;
  }
  isVisible() {
    return this._group.visible;
  }
  show() {
    this._group.show();
  }
  hide() {
    this._group.hide();
  }
  toggle() {
    this._group.toggleVisibility();
  }
  scrollTo(e, t) {
    return this._group.groupManager.table.rowManager.scrollToRow(this._group, e, t);
  }
  _getSelf() {
    return this._group;
  }
  getTable() {
    return this._group.groupManager.table;
  }
}
class si {
  constructor(e, t, i, s, n, a, o) {
    this.groupManager = e, this.parent = t, this.key = s, this.level = i, this.field = n, this.hasSubGroups = i < e.groupIDLookups.length - 1, this.addRow = this.hasSubGroups ? this._addRowToGroup : this._addRow, this.type = "group", this.old = o, this.rows = [], this.groups = [], this.groupList = [], this.generator = a, this.element = !1, this.elementContents = !1, this.height = 0, this.outerHeight = 0, this.initialized = !1, this.calcs = {}, this.initialized = !1, this.modules = {}, this.arrowElement = !1, this.visible = o ? o.visible : typeof e.startOpen[i] < "u" ? e.startOpen[i] : e.startOpen[0], this.component = null, this.createElements(), this.addBindings(), this.createValueGroups();
  }
  wipe(e) {
    e || (this.groupList.length ? this.groupList.forEach(function(t) {
      t.wipe();
    }) : this.rows.forEach((t) => {
      t.modules && delete t.modules.group;
    })), this.element = !1, this.arrowElement = !1, this.elementContents = !1;
  }
  createElements() {
    var e = document.createElement("div");
    e.classList.add("tabulator-arrow"), this.element = document.createElement("div"), this.element.classList.add("tabulator-row"), this.element.classList.add("tabulator-group"), this.element.classList.add("tabulator-group-level-" + this.level), this.element.setAttribute("role", "rowgroup"), this.arrowElement = document.createElement("div"), this.arrowElement.classList.add("tabulator-group-toggle"), this.arrowElement.appendChild(e), this.groupManager.table.options.movableRows !== !1 && this.groupManager.table.modExists("moveRow") && this.groupManager.table.modules.moveRow.initializeGroupHeader(this);
  }
  createValueGroups() {
    var e = this.level + 1;
    this.groupManager.allowedValues && this.groupManager.allowedValues[e] && this.groupManager.allowedValues[e].forEach((t) => {
      this._createGroup(t, e);
    });
  }
  addBindings() {
    var e;
    this.groupManager.table.options.groupToggleElement && (e = this.groupManager.table.options.groupToggleElement == "arrow" ? this.arrowElement : this.element, e.addEventListener("click", (t) => {
      this.groupManager.table.options.groupToggleElement === "arrow" && (t.stopPropagation(), t.stopImmediatePropagation()), setTimeout(() => {
        this.toggleVisibility();
      });
    }));
  }
  _createGroup(e, t) {
    var i = t + "_" + e, s = new si(this.groupManager, this, t, e, this.groupManager.groupIDLookups[t].field, this.groupManager.headerGenerator[t] || this.groupManager.headerGenerator[0], this.old ? this.old.groups[i] : !1);
    this.groups[i] = s, this.groupList.push(s);
  }
  _addRowToGroup(e) {
    var t = this.level + 1;
    if (this.hasSubGroups) {
      var i = this.groupManager.groupIDLookups[t].func(e.getData()), s = t + "_" + i;
      this.groupManager.allowedValues && this.groupManager.allowedValues[t] ? this.groups[s] && this.groups[s].addRow(e) : (this.groups[s] || this._createGroup(i, t), this.groups[s].addRow(e));
    }
  }
  _addRow(e) {
    this.rows.push(e), e.modules.group = this;
  }
  insertRow(e, t, i) {
    var s = this.conformRowData({});
    e.updateData(s);
    var n = this.rows.indexOf(t);
    n > -1 ? i ? this.rows.splice(n + 1, 0, e) : this.rows.splice(n, 0, e) : i ? this.rows.push(e) : this.rows.unshift(e), e.modules.group = this, this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modules.columnCalcs.recalcGroup(this), this.groupManager.updateGroupRows(!0);
  }
  scrollHeader(e) {
    this.arrowElement && (this.arrowElement.style.marginLeft = e, this.groupList.forEach(function(t) {
      t.scrollHeader(e);
    }));
  }
  getRowIndex(e) {
  }
  //update row data to match grouping constraints
  conformRowData(e) {
    return this.field ? e[this.field] = this.key : console.warn("Data Conforming Error - Cannot conform row data to match new group as groupBy is a function"), this.parent && (e = this.parent.conformRowData(e)), e;
  }
  removeRow(e) {
    var t = this.rows.indexOf(e), i = e.getElement();
    t > -1 && this.rows.splice(t, 1), !this.groupManager.table.options.groupValues && !this.rows.length ? (this.parent ? this.parent.removeGroup(this) : this.groupManager.removeGroup(this), this.groupManager.updateGroupRows(!0)) : (i.parentNode && i.parentNode.removeChild(i), this.groupManager.blockRedraw || (this.generateGroupHeaderContents(), this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modules.columnCalcs.recalcGroup(this)));
  }
  removeGroup(e) {
    var t = e.level + "_" + e.key, i;
    this.groups[t] && (delete this.groups[t], i = this.groupList.indexOf(e), i > -1 && this.groupList.splice(i, 1), this.groupList.length || (this.parent ? this.parent.removeGroup(this) : this.groupManager.removeGroup(this)));
  }
  getHeadersAndRows() {
    var e = [];
    return e.push(this), this._visSet(), this.calcs.top && (this.calcs.top.detachElement(), this.calcs.top.deleteCells()), this.calcs.bottom && (this.calcs.bottom.detachElement(), this.calcs.bottom.deleteCells()), this.visible ? this.groupList.length ? this.groupList.forEach(function(t) {
      e = e.concat(t.getHeadersAndRows());
    }) : (this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasTopCalcs() && (this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows), e.push(this.calcs.top)), e = e.concat(this.rows), this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modExists("columnCalcs") && this.groupManager.table.modules.columnCalcs.hasBottomCalcs() && (this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows), e.push(this.calcs.bottom))) : !this.groupList.length && this.groupManager.table.options.columnCalcs != "table" && this.groupManager.table.modExists("columnCalcs") && (this.groupManager.table.modules.columnCalcs.hasTopCalcs() && this.groupManager.table.options.groupClosedShowCalcs && (this.calcs.top = this.groupManager.table.modules.columnCalcs.generateTopRow(this.rows), e.push(this.calcs.top)), this.groupManager.table.modules.columnCalcs.hasBottomCalcs() && this.groupManager.table.options.groupClosedShowCalcs && (this.calcs.bottom = this.groupManager.table.modules.columnCalcs.generateBottomRow(this.rows), e.push(this.calcs.bottom))), e;
  }
  getData(e, t) {
    var i = [];
    return this._visSet(), (!e || e && this.visible) && this.rows.forEach((s) => {
      i.push(s.getData(t || "data"));
    }), i;
  }
  getRowCount() {
    var e = 0;
    return this.groupList.length ? this.groupList.forEach((t) => {
      e += t.getRowCount();
    }) : e = this.rows.length, e;
  }
  toggleVisibility() {
    this.visible ? this.hide() : this.show();
  }
  hide() {
    this.visible = !1, this.groupManager.table.rowManager.getRenderMode() == "basic" && !this.groupManager.table.options.pagination ? (this.element.classList.remove("tabulator-group-visible"), this.groupList.length ? this.groupList.forEach((e) => {
      var t = e.getHeadersAndRows();
      t.forEach((i) => {
        i.detachElement();
      });
    }) : this.rows.forEach((e) => {
      var t = e.getElement();
      t.parentNode.removeChild(t);
    }), this.groupManager.updateGroupRows(!0)) : this.groupManager.updateGroupRows(!0), this.groupManager.table.externalEvents.dispatch("groupVisibilityChanged", this.getComponent(), !1);
  }
  show() {
    if (this.visible = !0, this.groupManager.table.rowManager.getRenderMode() == "basic" && !this.groupManager.table.options.pagination) {
      this.element.classList.add("tabulator-group-visible");
      var e = this.generateElement();
      this.groupList.length ? this.groupList.forEach((t) => {
        var i = t.getHeadersAndRows();
        i.forEach((s) => {
          var n = s.getElement();
          e.parentNode.insertBefore(n, e.nextSibling), s.initialize(), e = n;
        });
      }) : this.rows.forEach((t) => {
        var i = t.getElement();
        e.parentNode.insertBefore(i, e.nextSibling), t.initialize(), e = i;
      }), this.groupManager.updateGroupRows(!0);
    } else
      this.groupManager.updateGroupRows(!0);
    this.groupManager.table.externalEvents.dispatch("groupVisibilityChanged", this.getComponent(), !0);
  }
  _visSet() {
    var e = [];
    typeof this.visible == "function" && (this.rows.forEach(function(t) {
      e.push(t.getData());
    }), this.visible = this.visible(this.key, this.getRowCount(), e, this.getComponent()));
  }
  getRowGroup(e) {
    var t = !1;
    return this.groupList.length ? this.groupList.forEach(function(i) {
      var s = i.getRowGroup(e);
      s && (t = s);
    }) : this.rows.find(function(i) {
      return i === e;
    }) && (t = this), t;
  }
  getSubGroups(e) {
    var t = [];
    return this.groupList.forEach(function(i) {
      t.push(e ? i.getComponent() : i);
    }), t;
  }
  getRows(e, t) {
    var i = [];
    return t && this.groupList.length ? this.groupList.forEach((s) => {
      i = i.concat(s.getRows(e, t));
    }) : this.rows.forEach(function(s) {
      i.push(e ? s.getComponent() : s);
    }), i;
  }
  generateGroupHeaderContents() {
    var e = [], t = this.getRows(!1, !0);
    for (t.forEach(function(i) {
      e.push(i.getData());
    }), this.elementContents = this.generator(this.key, this.getRowCount(), e, this.getComponent()); this.element.firstChild; ) this.element.removeChild(this.element.firstChild);
    typeof this.elementContents == "string" ? this.element.innerHTML = this.elementContents : this.element.appendChild(this.elementContents), this.element.insertBefore(this.arrowElement, this.element.firstChild);
  }
  getPath(e = []) {
    return e.unshift(this.key), this.parent && this.parent.getPath(e), e;
  }
  ////////////// Standard Row Functions //////////////
  getElement() {
    return this.elementContents ? this.element : this.generateElement();
  }
  generateElement() {
    this.addBindings = !1, this._visSet(), this.visible ? this.element.classList.add("tabulator-group-visible") : this.element.classList.remove("tabulator-group-visible");
    for (var e = 0; e < this.element.childNodes.length; ++e)
      this.element.childNodes[e].parentNode.removeChild(this.element.childNodes[e]);
    return this.generateGroupHeaderContents(), this.element;
  }
  detachElement() {
    this.element && this.element.parentNode && this.element.parentNode.removeChild(this.element);
  }
  //normalize the height of elements in the row
  normalizeHeight() {
    this.setHeight(this.element.clientHeight);
  }
  initialize(e) {
    (!this.initialized || e) && (this.normalizeHeight(), this.initialized = !0);
  }
  reinitialize() {
    this.initialized = !1, this.height = 0, de.elVisible(this.element) && this.initialize(!0);
  }
  setHeight(e) {
    this.height != e && (this.height = e, this.outerHeight = this.element.offsetHeight);
  }
  //return rows outer height
  getHeight() {
    return this.outerHeight;
  }
  getGroup() {
    return this;
  }
  reinitializeHeight() {
  }
  calcHeight() {
  }
  setCellHeight() {
  }
  clearCellHeight() {
  }
  deinitializeHeight() {
  }
  rendered() {
  }
  //////////////// Object Generation /////////////////
  getComponent() {
    return this.component || (this.component = new Fd(this)), this.component;
  }
}
class zo extends $ {
  constructor(e) {
    super(e), this.groupIDLookups = !1, this.startOpen = [function() {
      return !1;
    }], this.headerGenerator = [function() {
      return "";
    }], this.groupList = [], this.allowedValues = !1, this.groups = {}, this.displayHandler = this.getRows.bind(this), this.blockRedraw = !1, this.registerTableOption("groupBy", !1), this.registerTableOption("groupStartOpen", !0), this.registerTableOption("groupValues", !1), this.registerTableOption("groupUpdateOnCellEdit", !1), this.registerTableOption("groupHeader", !1), this.registerTableOption("groupHeaderPrint", null), this.registerTableOption("groupHeaderClipboard", null), this.registerTableOption("groupHeaderHtmlOutput", null), this.registerTableOption("groupHeaderDownload", null), this.registerTableOption("groupToggleElement", "arrow"), this.registerTableOption("groupClosedShowCalcs", !1), this.registerTableFunction("setGroupBy", this.setGroupBy.bind(this)), this.registerTableFunction("setGroupValues", this.setGroupValues.bind(this)), this.registerTableFunction("setGroupStartOpen", this.setGroupStartOpen.bind(this)), this.registerTableFunction("setGroupHeader", this.setGroupHeader.bind(this)), this.registerTableFunction("getGroups", this.userGetGroups.bind(this)), this.registerTableFunction("getGroupedData", this.userGetGroupedData.bind(this)), this.registerComponentFunction("row", "getGroup", this.rowGetGroup.bind(this));
  }
  //initialize group configuration
  initialize() {
    this.subscribe("table-destroy", this._blockRedrawing.bind(this)), this.subscribe("rows-wipe", this._blockRedrawing.bind(this)), this.subscribe("rows-wiped", this._restore_redrawing.bind(this)), this.table.options.groupBy && (this.table.options.groupUpdateOnCellEdit && (this.subscribe("cell-value-updated", this.cellUpdated.bind(this)), this.subscribe("row-data-changed", this.reassignRowToGroup.bind(this), 0)), this.subscribe("table-built", this.configureGroupSetup.bind(this)), this.subscribe("row-deleting", this.rowDeleting.bind(this)), this.subscribe("row-deleted", this.rowsUpdated.bind(this)), this.subscribe("scroll-horizontal", this.scrollHeaders.bind(this)), this.subscribe("rows-wipe", this.wipe.bind(this)), this.subscribe("rows-added", this.rowsUpdated.bind(this)), this.subscribe("row-moving", this.rowMoving.bind(this)), this.subscribe("row-adding-index", this.rowAddingIndex.bind(this)), this.subscribe("rows-sample", this.rowSample.bind(this)), this.subscribe("render-virtual-fill", this.virtualRenderFill.bind(this)), this.registerDisplayHandler(this.displayHandler, 20), this.initialized = !0);
  }
  _blockRedrawing() {
    this.blockRedraw = !0;
  }
  _restore_redrawing() {
    this.blockRedraw = !1;
  }
  configureGroupSetup() {
    if (this.table.options.groupBy) {
      var e = this.table.options.groupBy, t = this.table.options.groupStartOpen, i = this.table.options.groupHeader;
      if (this.allowedValues = this.table.options.groupValues, Array.isArray(e) && Array.isArray(i) && e.length > i.length && console.warn("Error creating group headers, groupHeader array is shorter than groupBy array"), this.headerGenerator = [function() {
        return "";
      }], this.startOpen = [function() {
        return !1;
      }], this.langBind("groups|item", (n, a) => {
        this.headerGenerator[0] = (o, l, h) => (typeof o > "u" ? "" : o) + "<span>(" + l + " " + (l === 1 ? n : a.groups.items) + ")</span>";
      }), this.groupIDLookups = [], e)
        this.table.modExists("columnCalcs") && this.table.options.columnCalcs != "table" && this.table.options.columnCalcs != "both" && this.table.modules.columnCalcs.removeCalcs();
      else if (this.table.modExists("columnCalcs") && this.table.options.columnCalcs != "group") {
        var s = this.table.columnManager.getRealColumns();
        s.forEach((n) => {
          n.definition.topCalc && this.table.modules.columnCalcs.initializeTopRow(), n.definition.bottomCalc && this.table.modules.columnCalcs.initializeBottomRow();
        });
      }
      Array.isArray(e) || (e = [e]), e.forEach((n, a) => {
        var o, l;
        typeof n == "function" ? o = n : (l = this.table.columnManager.getColumnByField(n), l ? o = function(h) {
          return l.getFieldValue(h);
        } : o = function(h) {
          return h[n];
        }), this.groupIDLookups.push({
          field: typeof n == "function" ? !1 : n,
          func: o,
          values: this.allowedValues ? this.allowedValues[a] : !1
        });
      }), t && (Array.isArray(t) || (t = [t]), t.forEach((n) => {
      }), this.startOpen = t), i && (this.headerGenerator = Array.isArray(i) ? i : [i]);
    } else
      this.groupList = [], this.groups = {};
  }
  rowSample(e, t) {
    if (this.table.options.groupBy) {
      var i = this.getGroups(!1)[0];
      t.push(i.getRows(!1)[0]);
    }
    return t;
  }
  virtualRenderFill() {
    var e = this.table.rowManager.tableElement, t = this.table.rowManager.getVisibleRows();
    if (this.table.options.groupBy)
      t = t.filter((i) => i.type !== "group"), e.style.minWidth = t.length ? "" : this.table.columnManager.getWidth() + "px";
    else
      return t;
  }
  rowAddingIndex(e, t, i) {
    if (this.table.options.groupBy) {
      this.assignRowToGroup(e);
      var s = e.modules.group.rows;
      return s.length > 1 && (!t || t && s.indexOf(t) == -1 ? i ? s[0] !== e && (t = s[0], this.table.rowManager.moveRowInArray(e.modules.group.rows, e, t, !i)) : s[s.length - 1] !== e && (t = s[s.length - 1], this.table.rowManager.moveRowInArray(e.modules.group.rows, e, t, !i)) : this.table.rowManager.moveRowInArray(e.modules.group.rows, e, t, !i)), t;
    }
  }
  trackChanges() {
    this.dispatch("group-changed");
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  setGroupBy(e) {
    this.table.options.groupBy = e, this.initialized || this.initialize(), this.configureGroupSetup(), !e && this.table.modExists("columnCalcs") && this.table.options.columnCalcs === !0 && this.table.modules.columnCalcs.reinitializeCalcs(), this.refreshData(), this.trackChanges();
  }
  setGroupValues(e) {
    this.table.options.groupValues = e, this.configureGroupSetup(), this.refreshData(), this.trackChanges();
  }
  setGroupStartOpen(e) {
    this.table.options.groupStartOpen = e, this.configureGroupSetup(), this.table.options.groupBy ? (this.refreshData(), this.trackChanges()) : console.warn("Grouping Update - cant refresh view, no groups have been set");
  }
  setGroupHeader(e) {
    this.table.options.groupHeader = e, this.configureGroupSetup(), this.table.options.groupBy ? (this.refreshData(), this.trackChanges()) : console.warn("Grouping Update - cant refresh view, no groups have been set");
  }
  userGetGroups(e) {
    return this.getGroups(!0);
  }
  // get grouped table data in the same format as getData()
  userGetGroupedData() {
    return this.table.options.groupBy ? this.getGroupedData() : this.getData();
  }
  ///////////////////////////////////////
  ///////// Component Functions /////////
  ///////////////////////////////////////
  rowGetGroup(e) {
    return e.modules.group ? e.modules.group.getComponent() : !1;
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  rowMoving(e, t, i) {
    if (this.table.options.groupBy) {
      !i && t instanceof si && (t = this.table.rowManager.prevDisplayRow(e) || t);
      var s = t instanceof si ? t : t.modules.group, n = e instanceof si ? e : e.modules.group;
      s === n ? this.table.rowManager.moveRowInArray(s.rows, e, t, i) : (n && n.removeRow(e), s.insertRow(e, t, i));
    }
  }
  rowDeleting(e) {
    this.table.options.groupBy && e.modules.group && e.modules.group.removeRow(e);
  }
  rowsUpdated(e) {
    this.table.options.groupBy && this.updateGroupRows(!0);
  }
  cellUpdated(e) {
    this.table.options.groupBy && this.reassignRowToGroup(e.row);
  }
  //return appropriate rows with group headers
  getRows(e) {
    return this.table.options.groupBy && this.groupIDLookups.length ? (this.dispatchExternal("dataGrouping"), this.generateGroups(e), this.subscribedExternal("dataGrouped") && this.dispatchExternal("dataGrouped", this.getGroups(!0)), this.updateGroupRows()) : e.slice(0);
  }
  getGroups(e) {
    var t = [];
    return this.groupList.forEach(function(i) {
      t.push(e ? i.getComponent() : i);
    }), t;
  }
  getChildGroups(e) {
    var t = [];
    return e || (e = this), e.groupList.forEach((i) => {
      i.groupList.length ? t = t.concat(this.getChildGroups(i)) : t.push(i);
    }), t;
  }
  wipe() {
    this.table.options.groupBy && (this.groupList.forEach(function(e) {
      e.wipe();
    }), this.groupList = [], this.groups = {});
  }
  pullGroupListData(e) {
    var t = [];
    return e.forEach((i) => {
      var s = {};
      s.level = 0, s.rowCount = 0, s.headerContent = "";
      var n = [];
      i.hasSubGroups ? (n = this.pullGroupListData(i.groupList), s.level = i.level, s.rowCount = n.length - i.groupList.length, s.headerContent = i.generator(i.key, s.rowCount, i.rows, i), t.push(s), t = t.concat(n)) : (s.level = i.level, s.headerContent = i.generator(i.key, i.rows.length, i.rows, i), s.rowCount = i.getRows().length, t.push(s), i.getRows().forEach((a) => {
        t.push(a.getData("data"));
      }));
    }), t;
  }
  getGroupedData() {
    return this.pullGroupListData(this.groupList);
  }
  getRowGroup(e) {
    var t = !1;
    return this.options("dataTree") && (e = this.table.modules.dataTree.getTreeParentRoot(e)), this.groupList.forEach((i) => {
      var s = i.getRowGroup(e);
      s && (t = s);
    }), t;
  }
  countGroups() {
    return this.groupList.length;
  }
  generateGroups(e) {
    var t = this.groups;
    this.groups = {}, this.groupList = [], this.allowedValues && this.allowedValues[0] ? (this.allowedValues[0].forEach((i) => {
      this.createGroup(i, 0, t);
    }), e.forEach((i) => {
      this.assignRowToExistingGroup(i, t);
    })) : e.forEach((i) => {
      this.assignRowToGroup(i, t);
    }), Object.values(t).forEach((i) => {
      i.wipe(!0);
    });
  }
  createGroup(e, t, i) {
    var s = t + "_" + e, n;
    i = i || [], n = new si(this, !1, t, e, this.groupIDLookups[0].field, this.headerGenerator[0], i[s]), this.groups[s] = n, this.groupList.push(n);
  }
  assignRowToExistingGroup(e, t) {
    var i = this.groupIDLookups[0].func(e.getData()), s = "0_" + i;
    this.groups[s] && this.groups[s].addRow(e);
  }
  assignRowToGroup(e, t) {
    var i = this.groupIDLookups[0].func(e.getData()), s = !this.groups["0_" + i];
    return s && this.createGroup(i, 0, t), this.groups["0_" + i].addRow(e), !s;
  }
  reassignRowToGroup(e) {
    if (e.type === "row") {
      var t = e.modules.group, i = t.getPath(), s = this.getExpectedPath(e), n;
      n = i.length == s.length && i.every((a, o) => a === s[o]), n || (t.removeRow(e), this.assignRowToGroup(e, this.groups), this.refreshData(!0));
    }
  }
  getExpectedPath(e) {
    var t = [], i = e.getData();
    return this.groupIDLookups.forEach((s) => {
      t.push(s.func(i));
    }), t;
  }
  updateGroupRows(e) {
    var t = [];
    return this.blockRedraw || (this.groupList.forEach((i) => {
      t = t.concat(i.getHeadersAndRows());
    }), e && this.refreshData(!0)), t;
  }
  scrollHeaders(e) {
    this.table.options.groupBy && (this.table.options.renderHorizontal === "virtual" && (e -= this.table.columnManager.renderer.vDomPadLeft), e = e + "px", this.groupList.forEach((t) => {
      t.scrollHeader(e);
    }));
  }
  removeGroup(e) {
    var t = e.level + "_" + e.key, i;
    this.groups[t] && (delete this.groups[t], i = this.groupList.indexOf(e), i > -1 && this.groupList.splice(i, 1));
  }
  checkBasicModeGroupHeaderWidth() {
    var e = this.table.rowManager.tableElement, t = !0;
    this.table.rowManager.getDisplayRows().forEach((i, s) => {
      this.table.rowManager.styleRow(i, s), e.appendChild(i.getElement()), i.initialize(!0), i.type !== "group" && (t = !1);
    }), t ? e.style.minWidth = this.table.columnManager.getWidth() + "px" : e.style.minWidth = "";
  }
}
F(zo, "moduleName", "groupRows");
var Od = {
  cellEdit: function(r) {
    r.component.setValueProcessData(r.data.oldValue), r.component.cellRendered();
  },
  rowAdd: function(r) {
    r.component.deleteActual(), this.table.rowManager.checkPlaceholder();
  },
  rowDelete: function(r) {
    var e = this.table.rowManager.addRowActual(r.data.data, r.data.pos, r.data.index);
    this.table.options.groupBy && this.table.modExists("groupRows") && this.table.modules.groupRows.updateGroupRows(!0), this._rebindRow(r.component, e), this.table.rowManager.checkPlaceholder();
  },
  rowMove: function(r) {
    var e = r.data.posFrom - r.data.posTo > 0;
    this.table.rowManager.moveRowActual(r.component, this.table.rowManager.getRowFromPosition(r.data.posFrom), e), this.table.rowManager.regenerateRowPositions(), this.table.rowManager.reRenderInPosition();
  }
}, zd = {
  cellEdit: function(r) {
    r.component.setValueProcessData(r.data.newValue), r.component.cellRendered();
  },
  rowAdd: function(r) {
    var e = this.table.rowManager.addRowActual(r.data.data, r.data.pos, r.data.index);
    this.table.options.groupBy && this.table.modExists("groupRows") && this.table.modules.groupRows.updateGroupRows(!0), this._rebindRow(r.component, e), this.table.rowManager.checkPlaceholder();
  },
  rowDelete: function(r) {
    r.component.deleteActual(), this.table.rowManager.checkPlaceholder();
  },
  rowMove: function(r) {
    this.table.rowManager.moveRowActual(r.component, this.table.rowManager.getRowFromPosition(r.data.posTo), r.data.after), this.table.rowManager.regenerateRowPositions(), this.table.rowManager.reRenderInPosition();
  }
}, Hd = {
  undo: ["ctrl + 90", "meta + 90"],
  redo: ["ctrl + 89", "meta + 89"]
}, Pd = {
  undo: function(r) {
    var e = !1;
    this.table.options.history && this.table.modExists("history") && this.table.modExists("edit") && (e = this.table.modules.edit.currentCell, e || (r.preventDefault(), this.table.modules.history.undo()));
  },
  redo: function(r) {
    var e = !1;
    this.table.options.history && this.table.modExists("history") && this.table.modExists("edit") && (e = this.table.modules.edit.currentCell, e || (r.preventDefault(), this.table.modules.history.redo()));
  }
}, Ad = {
  keybindings: {
    bindings: Hd,
    actions: Pd
  }
};
const vt = class vt extends $ {
  constructor(e) {
    super(e), this.history = [], this.index = -1, this.registerTableOption("history", !1);
  }
  initialize() {
    this.table.options.history && (this.subscribe("cell-value-updated", this.cellUpdated.bind(this)), this.subscribe("cell-delete", this.clearComponentHistory.bind(this)), this.subscribe("row-delete", this.rowDeleted.bind(this)), this.subscribe("rows-wipe", this.clear.bind(this)), this.subscribe("row-added", this.rowAdded.bind(this)), this.subscribe("row-move", this.rowMoved.bind(this))), this.registerTableFunction("undo", this.undo.bind(this)), this.registerTableFunction("redo", this.redo.bind(this)), this.registerTableFunction("getHistoryUndoSize", this.getHistoryUndoSize.bind(this)), this.registerTableFunction("getHistoryRedoSize", this.getHistoryRedoSize.bind(this)), this.registerTableFunction("clearHistory", this.clear.bind(this));
  }
  rowMoved(e, t, i) {
    this.action("rowMove", e, { posFrom: e.getPosition(), posTo: t.getPosition(), to: t, after: i });
  }
  rowAdded(e, t, i, s) {
    this.action("rowAdd", e, { data: t, pos: i, index: s });
  }
  rowDeleted(e) {
    var t, i;
    this.table.options.groupBy ? (i = e.getComponent().getGroup()._getSelf().rows, t = i.indexOf(e), t && (t = i[t - 1])) : (t = e.table.rowManager.getRowIndex(e), t && (t = e.table.rowManager.rows[t - 1])), this.action("rowDelete", e, { data: e.getData(), pos: !t, index: t });
  }
  cellUpdated(e) {
    this.action("cellEdit", e, { oldValue: e.oldValue, newValue: e.value });
  }
  clear() {
    this.history = [], this.index = -1;
  }
  action(e, t, i) {
    this.history = this.history.slice(0, this.index + 1), this.history.push({
      type: e,
      component: t,
      data: i
    }), this.index++;
  }
  getHistoryUndoSize() {
    return this.index + 1;
  }
  getHistoryRedoSize() {
    return this.history.length - (this.index + 1);
  }
  clearComponentHistory(e) {
    var t = this.history.findIndex(function(i) {
      return i.component === e;
    });
    t > -1 && (this.history.splice(t, 1), t <= this.index && this.index--, this.clearComponentHistory(e));
  }
  undo() {
    if (this.index > -1) {
      let e = this.history[this.index];
      return vt.undoers[e.type].call(this, e), this.index--, this.dispatchExternal("historyUndo", e.type, e.component.getComponent(), e.data), !0;
    } else
      return console.warn(this.options("history") ? "History Undo Error - No more history to undo" : "History module not enabled"), !1;
  }
  redo() {
    if (this.history.length - 1 > this.index) {
      this.index++;
      let e = this.history[this.index];
      return vt.redoers[e.type].call(this, e), this.dispatchExternal("historyRedo", e.type, e.component.getComponent(), e.data), !0;
    } else
      return console.warn(this.options("history") ? "History Redo Error - No more history to redo" : "History module not enabled"), !1;
  }
  //rebind rows to new element after deletion
  _rebindRow(e, t) {
    this.history.forEach(function(i) {
      if (i.component instanceof xe)
        i.component === e && (i.component = t);
      else if (i.component instanceof ns && i.component.row === e) {
        var s = i.component.column.getField();
        s && (i.component = t.getCell(s));
      }
    });
  }
};
F(vt, "moduleName", "history"), F(vt, "moduleExtensions", Ad), //load defaults
F(vt, "undoers", Od), F(vt, "redoers", zd);
let Hn = vt;
class Ho extends $ {
  constructor(e) {
    super(e), this.fieldIndex = [], this.hasIndex = !1;
  }
  initialize() {
    this.tableElementCheck();
  }
  tableElementCheck() {
    this.table.originalElement && this.table.originalElement.tagName === "TABLE" && (this.table.originalElement.childNodes.length ? this.parseTable() : console.warn("Unable to parse data from empty table tag, Tabulator should be initialized on a div tag unless importing data from a table element."));
  }
  parseTable() {
    var e = this.table.originalElement, t = this.table.options, i = e.getElementsByTagName("th"), s = e.getElementsByTagName("tbody")[0], n = [];
    this.hasIndex = !1, this.dispatchExternal("htmlImporting"), s = s ? s.getElementsByTagName("tr") : [], this._extractOptions(e, t), i.length ? this._extractHeaders(i, s) : this._generateBlankHeaders(i, s);
    for (var a = 0; a < s.length; a++) {
      var o = s[a], l = o.getElementsByTagName("td"), h = {};
      this.hasIndex || (h[t.index] = a);
      for (var u = 0; u < l.length; u++) {
        var d = l[u];
        typeof this.fieldIndex[u] < "u" && (h[this.fieldIndex[u]] = d.innerHTML);
      }
      n.push(h);
    }
    t.data = n, this.dispatchExternal("htmlImported");
  }
  //extract tabulator attribute options
  _extractOptions(e, t, i) {
    var s = e.attributes, n = Object.keys(i || t), a = {};
    n.forEach((u) => {
      a[u.toLowerCase()] = u;
    });
    for (var o in s) {
      var l = s[o], h;
      l && typeof l == "object" && l.name && l.name.indexOf("tabulator-") === 0 && (h = l.name.replace("tabulator-", ""), typeof a[h] < "u" && (t[a[h]] = this._attribValue(l.value)));
    }
  }
  //get value of attribute
  _attribValue(e) {
    return e === "true" ? !0 : e === "false" ? !1 : e;
  }
  //find column if it has already been defined
  _findCol(e) {
    var t = this.table.options.columns.find((i) => i.title === e);
    return t || !1;
  }
  //extract column from headers
  _extractHeaders(e, t) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i], n = !1, a = this._findCol(s.textContent), o;
      a ? n = !0 : a = { title: s.textContent.trim() }, a.field || (a.field = s.textContent.trim().toLowerCase().replaceAll(" ", "_")), o = s.getAttribute("width"), o && !a.width && (a.width = o), this._extractOptions(s, a, this.table.columnManager.optionsList.registeredDefaults), this.fieldIndex[i] = a.field, a.field == this.table.options.index && (this.hasIndex = !0), n || this.table.options.columns.push(a);
    }
  }
  //generate blank headers
  _generateBlankHeaders(e, t) {
    for (var i = 0; i < e.length; i++) {
      var s = e[i], n = { title: "", field: "col" + i };
      this.fieldIndex[i] = n.field;
      var a = s.getAttribute("width");
      a && (n.width = a), this.table.options.columns.push(n);
    }
  }
}
F(Ho, "moduleName", "htmlTableImport");
function _d(r) {
  var e = [], t = 0, i = 0, s = !1;
  for (let n = 0; n < r.length; n++) {
    let a = r[n], o = r[n + 1];
    if (e[t] || (e[t] = []), e[t][i] || (e[t][i] = ""), a == '"' && s && o == '"') {
      e[t][i] += a, n++;
      continue;
    }
    if (a == '"') {
      s = !s;
      continue;
    }
    if (a == "," && !s) {
      i++;
      continue;
    }
    if (a == "\r" && o == `
` && !s) {
      i = 0, t++, n++;
      continue;
    }
    if ((a == "\r" || a == `
`) && !s) {
      i = 0, t++;
      continue;
    }
    e[t][i] += a;
  }
  return e;
}
function Id(r) {
  try {
    return JSON.parse(r);
  } catch (e) {
    return console.warn("JSON Import Error - File contents is invalid JSON", e), Promise.reject();
  }
}
function Nd(r) {
  return r;
}
function Vd(r) {
  var e = this.dependencyRegistry.lookup("XLSX"), t = e.read(r), i = t.Sheets[t.SheetNames[0]];
  return e.utils.sheet_to_json(i, { header: 1 });
}
var Bd = {
  csv: _d,
  json: Id,
  array: Nd,
  xlsx: Vd
};
const $i = class $i extends $ {
  constructor(e) {
    super(e), this.registerTableOption("importFormat"), this.registerTableOption("importReader", "text"), this.registerTableOption("importHeaderTransform"), this.registerTableOption("importValueTransform"), this.registerTableOption("importDataValidator"), this.registerTableOption("importFileValidator");
  }
  initialize() {
    this.registerTableFunction("import", this.importFromFile.bind(this)), this.table.options.importFormat && (this.subscribe("data-loading", this.loadDataCheck.bind(this), 10), this.subscribe("data-load", this.loadData.bind(this), 10));
  }
  loadDataCheck(e) {
    return this.table.options.importFormat && (typeof e == "string" || Array.isArray(e) && e.length && Array.isArray(e));
  }
  loadData(e, t, i, s, n) {
    return this.importData(this.lookupImporter(), e).then(this.structureData.bind(this)).catch((a) => (console.error("Import Error:", a || "Unable to import data"), Promise.reject(a)));
  }
  lookupImporter(e) {
    var t;
    return e || (e = this.table.options.importFormat), typeof e == "string" ? t = $i.importers[e] : t = e, t || console.error("Import Error - Importer not found:", e), t;
  }
  importFromFile(e, t, i) {
    var s = this.lookupImporter(e);
    if (s)
      return this.pickFile(t, i).then(this.importData.bind(this, s)).then(this.structureData.bind(this)).then(this.mutateData.bind(this)).then(this.validateData.bind(this)).then(this.setData.bind(this)).catch((n) => (this.dispatch("import-error", n), this.dispatchExternal("importError", n), console.error("Import Error:", n || "Unable to import file"), this.table.dataLoader.alertError(), setTimeout(() => {
        this.table.dataLoader.clearAlert();
      }, 3e3), Promise.reject(n)));
  }
  pickFile(e, t) {
    return new Promise((i, s) => {
      var n = document.createElement("input");
      n.type = "file", n.accept = e, n.addEventListener("change", (a) => {
        var o = n.files[0], l = new FileReader(), h = this.validateFile(o);
        if (h === !0) {
          switch (this.dispatch("import-importing", n.files), this.dispatchExternal("importImporting", n.files), t || this.table.options.importReader) {
            case "buffer":
              l.readAsArrayBuffer(o);
              break;
            case "binary":
              l.readAsBinaryString(o);
              break;
            case "url":
              l.readAsDataURL(o);
              break;
            case "text":
            default:
              l.readAsText(o);
          }
          l.onload = (u) => {
            i(l.result);
          }, l.onerror = (u) => {
            console.warn("File Load Error - Unable to read file"), s(u);
          };
        } else
          s(h);
      }), this.dispatch("import-choose"), this.dispatchExternal("importChoose"), n.click();
    });
  }
  importData(e, t) {
    var i;
    return this.table.dataLoader.alertLoader(), new Promise((s, n) => {
      setTimeout(() => {
        i = e.call(this.table, t), i instanceof Promise || i ? s(i) : n();
      }, 10);
    });
  }
  structureData(e) {
    var t = [];
    return Array.isArray(e) && e.length && Array.isArray(e[0]) ? (this.table.options.autoColumns ? t = this.structureArrayToObject(e) : t = this.structureArrayToColumns(e), t) : e;
  }
  mutateData(e) {
    var t = [];
    return Array.isArray(e) ? e.forEach((i) => {
      t.push(this.table.modules.mutator.transformRow(i, "import"));
    }) : t = e, t;
  }
  transformHeader(e) {
    var t = [];
    if (this.table.options.importHeaderTransform)
      e.forEach((i) => {
        t.push(this.table.options.importHeaderTransform.call(this.table, i, e));
      });
    else
      return e;
    return t;
  }
  transformData(e) {
    var t = [];
    if (this.table.options.importValueTransform)
      e.forEach((i) => {
        t.push(this.table.options.importValueTransform.call(this.table, i, e));
      });
    else
      return e;
    return t;
  }
  structureArrayToObject(e) {
    var t = this.transformHeader(e.shift()), i = e.map((s) => {
      var n = {};
      return s = this.transformData(s), t.forEach((a, o) => {
        n[a] = s[o];
      }), n;
    });
    return i;
  }
  structureArrayToColumns(e) {
    var t = [], i = this.transformHeader(e[0]), s = this.table.getColumns();
    return s[0] && i[0] && s[0].getDefinition().title === i[0] && e.shift(), e.forEach((n) => {
      var a = {};
      n = this.transformData(n), n.forEach((o, l) => {
        var h = s[l];
        h && (a[h.getField()] = o);
      }), t.push(a);
    }), t;
  }
  validateFile(e) {
    return this.table.options.importFileValidator ? this.table.options.importFileValidator.call(this.table, e) : !0;
  }
  validateData(e) {
    var t;
    return this.table.options.importDataValidator ? (t = this.table.options.importDataValidator.call(this.table, e), t === !0 ? e : Promise.reject(t)) : e;
  }
  setData(e) {
    return this.dispatch("import-imported", e), this.dispatchExternal("importImported", e), this.table.dataLoader.clearAlert(), this.table.setData(e);
  }
};
F($i, "moduleName", "import"), //load defaults
F($i, "importers", Bd);
let Pn = $i;
class Po extends $ {
  constructor(e) {
    super(e), this.eventMap = {
      //row events
      rowClick: "row-click",
      rowDblClick: "row-dblclick",
      rowContext: "row-contextmenu",
      rowMouseEnter: "row-mouseenter",
      rowMouseLeave: "row-mouseleave",
      rowMouseOver: "row-mouseover",
      rowMouseOut: "row-mouseout",
      rowMouseMove: "row-mousemove",
      rowMouseDown: "row-mousedown",
      rowMouseUp: "row-mouseup",
      rowTap: "row",
      rowDblTap: "row",
      rowTapHold: "row",
      //cell events
      cellClick: "cell-click",
      cellDblClick: "cell-dblclick",
      cellContext: "cell-contextmenu",
      cellMouseEnter: "cell-mouseenter",
      cellMouseLeave: "cell-mouseleave",
      cellMouseOver: "cell-mouseover",
      cellMouseOut: "cell-mouseout",
      cellMouseMove: "cell-mousemove",
      cellMouseDown: "cell-mousedown",
      cellMouseUp: "cell-mouseup",
      cellTap: "cell",
      cellDblTap: "cell",
      cellTapHold: "cell",
      //column header events
      headerClick: "column-click",
      headerDblClick: "column-dblclick",
      headerContext: "column-contextmenu",
      headerMouseEnter: "column-mouseenter",
      headerMouseLeave: "column-mouseleave",
      headerMouseOver: "column-mouseover",
      headerMouseOut: "column-mouseout",
      headerMouseMove: "column-mousemove",
      headerMouseDown: "column-mousedown",
      headerMouseUp: "column-mouseup",
      headerTap: "column",
      headerDblTap: "column",
      headerTapHold: "column",
      //group header
      groupClick: "group-click",
      groupDblClick: "group-dblclick",
      groupContext: "group-contextmenu",
      groupMouseEnter: "group-mouseenter",
      groupMouseLeave: "group-mouseleave",
      groupMouseOver: "group-mouseover",
      groupMouseOut: "group-mouseout",
      groupMouseMove: "group-mousemove",
      groupMouseDown: "group-mousedown",
      groupMouseUp: "group-mouseup",
      groupTap: "group",
      groupDblTap: "group",
      groupTapHold: "group"
    }, this.subscribers = {}, this.touchSubscribers = {}, this.columnSubscribers = {}, this.touchWatchers = {
      row: {
        tap: null,
        tapDbl: null,
        tapHold: null
      },
      cell: {
        tap: null,
        tapDbl: null,
        tapHold: null
      },
      column: {
        tap: null,
        tapDbl: null,
        tapHold: null
      },
      group: {
        tap: null,
        tapDbl: null,
        tapHold: null
      }
    }, this.registerColumnOption("headerClick"), this.registerColumnOption("headerDblClick"), this.registerColumnOption("headerContext"), this.registerColumnOption("headerMouseEnter"), this.registerColumnOption("headerMouseLeave"), this.registerColumnOption("headerMouseOver"), this.registerColumnOption("headerMouseOut"), this.registerColumnOption("headerMouseMove"), this.registerColumnOption("headerMouseDown"), this.registerColumnOption("headerMouseUp"), this.registerColumnOption("headerTap"), this.registerColumnOption("headerDblTap"), this.registerColumnOption("headerTapHold"), this.registerColumnOption("cellClick"), this.registerColumnOption("cellDblClick"), this.registerColumnOption("cellContext"), this.registerColumnOption("cellMouseEnter"), this.registerColumnOption("cellMouseLeave"), this.registerColumnOption("cellMouseOver"), this.registerColumnOption("cellMouseOut"), this.registerColumnOption("cellMouseMove"), this.registerColumnOption("cellMouseDown"), this.registerColumnOption("cellMouseUp"), this.registerColumnOption("cellTap"), this.registerColumnOption("cellDblTap"), this.registerColumnOption("cellTapHold");
  }
  initialize() {
    this.initializeExternalEvents(), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("cell-dblclick", this.cellContentsSelectionFixer.bind(this)), this.subscribe("scroll-horizontal", this.clearTouchWatchers.bind(this)), this.subscribe("scroll-vertical", this.clearTouchWatchers.bind(this));
  }
  clearTouchWatchers() {
    var e = Object.values(this.touchWatchers);
    e.forEach((t) => {
      for (let i in t)
        t[i] = null;
    });
  }
  cellContentsSelectionFixer(e, t) {
    var i;
    if (!(this.table.modExists("edit") && this.table.modules.edit.currentCell === t)) {
      e.preventDefault();
      try {
        document.selection ? (i = document.body.createTextRange(), i.moveToElementText(t.getElement()), i.select()) : window.getSelection && (i = document.createRange(), i.selectNode(t.getElement()), window.getSelection().removeAllRanges(), window.getSelection().addRange(i));
      } catch {
      }
    }
  }
  initializeExternalEvents() {
    for (let e in this.eventMap)
      this.subscriptionChangeExternal(e, this.subscriptionChanged.bind(this, e));
  }
  subscriptionChanged(e, t) {
    t ? this.subscribers[e] || (this.eventMap[e].includes("-") ? (this.subscribers[e] = this.handle.bind(this, e), this.subscribe(this.eventMap[e], this.subscribers[e])) : this.subscribeTouchEvents(e)) : this.eventMap[e].includes("-") ? this.subscribers[e] && !this.columnSubscribers[e] && !this.subscribedExternal(e) && (this.unsubscribe(this.eventMap[e], this.subscribers[e]), delete this.subscribers[e]) : this.unsubscribeTouchEvents(e);
  }
  subscribeTouchEvents(e) {
    var t = this.eventMap[e];
    this.touchSubscribers[t + "-touchstart"] || (this.touchSubscribers[t + "-touchstart"] = this.handleTouch.bind(this, t, "start"), this.touchSubscribers[t + "-touchend"] = this.handleTouch.bind(this, t, "end"), this.subscribe(t + "-touchstart", this.touchSubscribers[t + "-touchstart"]), this.subscribe(t + "-touchend", this.touchSubscribers[t + "-touchend"])), this.subscribers[e] = !0;
  }
  unsubscribeTouchEvents(e) {
    var t = !0, i = this.eventMap[e];
    if (this.subscribers[e] && !this.subscribedExternal(e)) {
      delete this.subscribers[e];
      for (let s in this.eventMap)
        this.eventMap[s] === i && this.subscribers[s] && (t = !1);
      t && (this.unsubscribe(i + "-touchstart", this.touchSubscribers[i + "-touchstart"]), this.unsubscribe(i + "-touchend", this.touchSubscribers[i + "-touchend"]), delete this.touchSubscribers[i + "-touchstart"], delete this.touchSubscribers[i + "-touchend"]);
    }
  }
  initializeColumn(e) {
    var t = e.definition;
    for (let i in this.eventMap)
      t[i] && (this.subscriptionChanged(i, !0), this.columnSubscribers[i] || (this.columnSubscribers[i] = []), this.columnSubscribers[i].push(e));
  }
  handle(e, t, i) {
    this.dispatchEvent(e, t, i);
  }
  handleTouch(e, t, i, s) {
    var n = this.touchWatchers[e];
    switch (e === "column" && (e = "header"), t) {
      case "start":
        n.tap = !0, clearTimeout(n.tapHold), n.tapHold = setTimeout(() => {
          clearTimeout(n.tapHold), n.tapHold = null, n.tap = null, clearTimeout(n.tapDbl), n.tapDbl = null, this.dispatchEvent(e + "TapHold", i, s);
        }, 1e3);
        break;
      case "end":
        n.tap && (n.tap = null, this.dispatchEvent(e + "Tap", i, s)), n.tapDbl ? (clearTimeout(n.tapDbl), n.tapDbl = null, this.dispatchEvent(e + "DblTap", i, s)) : n.tapDbl = setTimeout(() => {
          clearTimeout(n.tapDbl), n.tapDbl = null;
        }, 300), clearTimeout(n.tapHold), n.tapHold = null;
        break;
    }
  }
  dispatchEvent(e, t, i) {
    var s = i.getComponent(), n;
    this.columnSubscribers[e] && (i instanceof ns ? n = i.column.definition[e] : i instanceof jt && (n = i.definition[e]), n && n(t, s)), this.dispatchExternal(e, t, s);
  }
}
F(Po, "moduleName", "interaction");
var Wd = {
  navPrev: "shift + 9",
  navNext: 9,
  navUp: 38,
  navDown: 40,
  navLeft: 37,
  navRight: 39,
  scrollPageUp: 33,
  scrollPageDown: 34,
  scrollToStart: 36,
  scrollToEnd: 35
}, jd = {
  keyBlock: function(r) {
    r.stopPropagation(), r.preventDefault();
  },
  scrollPageUp: function(r) {
    var e = this.table.rowManager, t = e.scrollTop - e.element.clientHeight;
    r.preventDefault(), e.displayRowsCount && (t >= 0 ? e.element.scrollTop = t : e.scrollToRow(e.getDisplayRows()[0])), this.table.element.focus();
  },
  scrollPageDown: function(r) {
    var e = this.table.rowManager, t = e.scrollTop + e.element.clientHeight, i = e.element.scrollHeight;
    r.preventDefault(), e.displayRowsCount && (t <= i ? e.element.scrollTop = t : e.scrollToRow(e.getDisplayRows()[e.displayRowsCount - 1])), this.table.element.focus();
  },
  scrollToStart: function(r) {
    var e = this.table.rowManager;
    r.preventDefault(), e.displayRowsCount && e.scrollToRow(e.getDisplayRows()[0]), this.table.element.focus();
  },
  scrollToEnd: function(r) {
    var e = this.table.rowManager;
    r.preventDefault(), e.displayRowsCount && e.scrollToRow(e.getDisplayRows()[e.displayRowsCount - 1]), this.table.element.focus();
  },
  navPrev: function(r) {
    this.dispatch("keybinding-nav-prev", r);
  },
  navNext: function(r) {
    this.dispatch("keybinding-nav-next", r);
  },
  navLeft: function(r) {
    this.dispatch("keybinding-nav-left", r);
  },
  navRight: function(r) {
    this.dispatch("keybinding-nav-right", r);
  },
  navUp: function(r) {
    this.dispatch("keybinding-nav-up", r);
  },
  navDown: function(r) {
    this.dispatch("keybinding-nav-down", r);
  }
};
const wt = class wt extends $ {
  constructor(e) {
    super(e), this.watchKeys = null, this.pressedKeys = null, this.keyupBinding = !1, this.keydownBinding = !1, this.registerTableOption("keybindings", {}), this.registerTableOption("tabEndNewRow", !1);
  }
  initialize() {
    var e = this.table.options.keybindings, t = {};
    this.watchKeys = {}, this.pressedKeys = [], e !== !1 && (Object.assign(t, wt.bindings), Object.assign(t, e), this.mapBindings(t), this.bindEvents()), this.subscribe("table-destroy", this.clearBindings.bind(this));
  }
  mapBindings(e) {
    for (let t in e)
      wt.actions[t] ? e[t] && (typeof e[t] != "object" && (e[t] = [e[t]]), e[t].forEach((i) => {
        var s = Array.isArray(i) ? i : [i];
        s.forEach((n) => {
          this.mapBinding(t, n);
        });
      })) : console.warn("Key Binding Error - no such action:", t);
  }
  mapBinding(e, t) {
    var i = {
      action: wt.actions[e],
      keys: [],
      ctrl: !1,
      shift: !1,
      meta: !1
    }, s = t.toString().toLowerCase().split(" ").join("").split("+");
    s.forEach((n) => {
      switch (n) {
        case "ctrl":
          i.ctrl = !0;
          break;
        case "shift":
          i.shift = !0;
          break;
        case "meta":
          i.meta = !0;
          break;
        default:
          n = isNaN(n) ? n.toUpperCase().charCodeAt(0) : parseInt(n), i.keys.push(n), this.watchKeys[n] || (this.watchKeys[n] = []), this.watchKeys[n].push(i);
      }
    });
  }
  bindEvents() {
    var e = this;
    this.keyupBinding = function(t) {
      var i = t.keyCode, s = e.watchKeys[i];
      s && (e.pressedKeys.push(i), s.forEach(function(n) {
        e.checkBinding(t, n);
      }));
    }, this.keydownBinding = function(t) {
      var i = t.keyCode, s = e.watchKeys[i];
      if (s) {
        var n = e.pressedKeys.indexOf(i);
        n > -1 && e.pressedKeys.splice(n, 1);
      }
    }, this.table.element.addEventListener("keydown", this.keyupBinding), this.table.element.addEventListener("keyup", this.keydownBinding);
  }
  clearBindings() {
    this.keyupBinding && this.table.element.removeEventListener("keydown", this.keyupBinding), this.keydownBinding && this.table.element.removeEventListener("keyup", this.keydownBinding);
  }
  checkBinding(e, t) {
    var i = !0;
    return e.ctrlKey == t.ctrl && e.shiftKey == t.shift && e.metaKey == t.meta ? (t.keys.forEach((s) => {
      var n = this.pressedKeys.indexOf(s);
      n == -1 && (i = !1);
    }), i && t.action.call(this, e), !0) : !1;
  }
};
F(wt, "moduleName", "keybindings"), //load defaults
F(wt, "bindings", Wd), F(wt, "actions", jd);
let An = wt;
class Ao extends $ {
  constructor(e) {
    super(e), this.menuContainer = null, this.nestedMenuBlock = !1, this.currentComponent = null, this.rootPopup = null, this.columnSubscribers = {}, this.registerTableOption("rowContextMenu", !1), this.registerTableOption("rowClickMenu", !1), this.registerTableOption("rowDblClickMenu", !1), this.registerTableOption("groupContextMenu", !1), this.registerTableOption("groupClickMenu", !1), this.registerTableOption("groupDblClickMenu", !1), this.registerColumnOption("headerContextMenu"), this.registerColumnOption("headerClickMenu"), this.registerColumnOption("headerDblClickMenu"), this.registerColumnOption("headerMenu"), this.registerColumnOption("headerMenuIcon"), this.registerColumnOption("contextMenu"), this.registerColumnOption("clickMenu"), this.registerColumnOption("dblClickMenu");
  }
  initialize() {
    this.deprecatedOptionsCheck(), this.initializeRowWatchers(), this.initializeGroupWatchers(), this.subscribe("column-init", this.initializeColumn.bind(this));
  }
  deprecatedOptionsCheck() {
  }
  initializeRowWatchers() {
    this.table.options.rowContextMenu && (this.subscribe("row-contextmenu", this.loadMenuEvent.bind(this, this.table.options.rowContextMenu)), this.table.on("rowTapHold", this.loadMenuEvent.bind(this, this.table.options.rowContextMenu))), this.table.options.rowClickMenu && this.subscribe("row-click", this.loadMenuEvent.bind(this, this.table.options.rowClickMenu)), this.table.options.rowDblClickMenu && this.subscribe("row-dblclick", this.loadMenuEvent.bind(this, this.table.options.rowDblClickMenu));
  }
  initializeGroupWatchers() {
    this.table.options.groupContextMenu && (this.subscribe("group-contextmenu", this.loadMenuEvent.bind(this, this.table.options.groupContextMenu)), this.table.on("groupTapHold", this.loadMenuEvent.bind(this, this.table.options.groupContextMenu))), this.table.options.groupClickMenu && this.subscribe("group-click", this.loadMenuEvent.bind(this, this.table.options.groupClickMenu)), this.table.options.groupDblClickMenu && this.subscribe("group-dblclick", this.loadMenuEvent.bind(this, this.table.options.groupDblClickMenu));
  }
  initializeColumn(e) {
    var t = e.definition;
    t.headerContextMenu && !this.columnSubscribers.headerContextMenu && (this.columnSubscribers.headerContextMenu = this.loadMenuTableColumnEvent.bind(this, "headerContextMenu"), this.subscribe("column-contextmenu", this.columnSubscribers.headerContextMenu), this.table.on("headerTapHold", this.loadMenuTableColumnEvent.bind(this, "headerContextMenu"))), t.headerClickMenu && !this.columnSubscribers.headerClickMenu && (this.columnSubscribers.headerClickMenu = this.loadMenuTableColumnEvent.bind(this, "headerClickMenu"), this.subscribe("column-click", this.columnSubscribers.headerClickMenu)), t.headerDblClickMenu && !this.columnSubscribers.headerDblClickMenu && (this.columnSubscribers.headerDblClickMenu = this.loadMenuTableColumnEvent.bind(this, "headerDblClickMenu"), this.subscribe("column-dblclick", this.columnSubscribers.headerDblClickMenu)), t.headerMenu && this.initializeColumnHeaderMenu(e), t.contextMenu && !this.columnSubscribers.contextMenu && (this.columnSubscribers.contextMenu = this.loadMenuTableCellEvent.bind(this, "contextMenu"), this.subscribe("cell-contextmenu", this.columnSubscribers.contextMenu), this.table.on("cellTapHold", this.loadMenuTableCellEvent.bind(this, "contextMenu"))), t.clickMenu && !this.columnSubscribers.clickMenu && (this.columnSubscribers.clickMenu = this.loadMenuTableCellEvent.bind(this, "clickMenu"), this.subscribe("cell-click", this.columnSubscribers.clickMenu)), t.dblClickMenu && !this.columnSubscribers.dblClickMenu && (this.columnSubscribers.dblClickMenu = this.loadMenuTableCellEvent.bind(this, "dblClickMenu"), this.subscribe("cell-dblclick", this.columnSubscribers.dblClickMenu));
  }
  initializeColumnHeaderMenu(e) {
    var t = e.definition.headerMenuIcon, i;
    i = document.createElement("span"), i.classList.add("tabulator-header-popup-button"), t ? (typeof t == "function" && (t = t(e.getComponent())), t instanceof HTMLElement ? i.appendChild(t) : i.innerHTML = t) : i.innerHTML = "&vellip;", i.addEventListener("click", (s) => {
      s.stopPropagation(), s.preventDefault(), this.loadMenuEvent(e.definition.headerMenu, s, e);
    }), e.titleElement.insertBefore(i, e.titleElement.firstChild);
  }
  loadMenuTableCellEvent(e, t, i) {
    i._cell && (i = i._cell), i.column.definition[e] && this.loadMenuEvent(i.column.definition[e], t, i);
  }
  loadMenuTableColumnEvent(e, t, i) {
    i._column && (i = i._column), i.definition[e] && this.loadMenuEvent(i.definition[e], t, i);
  }
  loadMenuEvent(e, t, i) {
    i._group ? i = i._group : i._row && (i = i._row), e = typeof e == "function" ? e.call(this.table, t, i.getComponent()) : e, this.loadMenu(t, i, e);
  }
  loadMenu(e, t, i, s, n) {
    var a = !(e instanceof MouseEvent), o = document.createElement("div"), l;
    if (o.classList.add("tabulator-menu"), a || e.preventDefault(), !(!i || !i.length)) {
      if (s)
        l = n.child(o);
      else {
        if (this.nestedMenuBlock) {
          if (this.rootPopup)
            return;
        } else
          this.nestedMenuBlock = setTimeout(() => {
            this.nestedMenuBlock = !1;
          }, 100);
        this.rootPopup && this.rootPopup.hide(), this.rootPopup = l = this.popup(o);
      }
      i.forEach((h) => {
        var u = document.createElement("div"), d = h.label, f = h.disabled;
        h.separator ? u.classList.add("tabulator-menu-separator") : (u.classList.add("tabulator-menu-item"), typeof d == "function" && (d = d.call(this.table, t.getComponent())), d instanceof Node ? u.appendChild(d) : u.innerHTML = d, typeof f == "function" && (f = f.call(this.table, t.getComponent())), f ? (u.classList.add("tabulator-menu-item-disabled"), u.addEventListener("click", (b) => {
          b.stopPropagation();
        })) : h.menu && h.menu.length ? u.addEventListener("click", (b) => {
          b.stopPropagation(), this.loadMenu(b, t, h.menu, u, l);
        }) : h.action && u.addEventListener("click", (b) => {
          h.action(b, t.getComponent());
        }), h.menu && h.menu.length && u.classList.add("tabulator-menu-item-submenu")), o.appendChild(u);
      }), o.addEventListener("click", (h) => {
        this.rootPopup && this.rootPopup.hide();
      }), l.show(s || e), l === this.rootPopup && (this.rootPopup.hideOnBlur(() => {
        this.rootPopup = null, this.currentComponent && (this.dispatch("menu-closed", i, l), this.dispatchExternal("menuClosed", this.currentComponent.getComponent()), this.currentComponent = null);
      }), this.currentComponent = t, this.dispatch("menu-opened", i, l), this.dispatchExternal("menuOpened", t.getComponent()));
    }
  }
}
F(Ao, "moduleName", "menu");
class _o extends $ {
  constructor(e) {
    super(e), this.placeholderElement = this.createPlaceholderElement(), this.hoverElement = !1, this.checkTimeout = !1, this.checkPeriod = 250, this.moving = !1, this.toCol = !1, this.toColAfter = !1, this.startX = 0, this.autoScrollMargin = 40, this.autoScrollStep = 5, this.autoScrollTimeout = !1, this.touchMove = !1, this.moveHover = this.moveHover.bind(this), this.endMove = this.endMove.bind(this), this.registerTableOption("movableColumns", !1);
  }
  createPlaceholderElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-col"), e.classList.add("tabulator-col-placeholder"), e;
  }
  initialize() {
    this.table.options.movableColumns && (this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("alert-show", this.abortMove.bind(this)));
  }
  abortMove() {
    clearTimeout(this.checkTimeout);
  }
  initializeColumn(e) {
    var t = this, i = {}, s;
    !e.modules.frozen && !e.isGroup && !e.isRowHeader && (s = e.getElement(), i.mousemove = (function(n) {
      e.parent === t.moving.parent && ((t.touchMove ? n.touches[0].pageX : n.pageX) - de.elOffset(s).left + t.table.columnManager.contentsElement.scrollLeft > e.getWidth() / 2 ? (t.toCol !== e || !t.toColAfter) && (s.parentNode.insertBefore(t.placeholderElement, s.nextSibling), t.moveColumn(e, !0)) : (t.toCol !== e || t.toColAfter) && (s.parentNode.insertBefore(t.placeholderElement, s), t.moveColumn(e, !1)));
    }).bind(t), s.addEventListener("mousedown", function(n) {
      t.touchMove = !1, n.which === 1 && (t.checkTimeout = setTimeout(function() {
        t.startMove(n, e);
      }, t.checkPeriod));
    }), s.addEventListener("mouseup", function(n) {
      n.which === 1 && t.checkTimeout && clearTimeout(t.checkTimeout);
    }), t.bindTouchEvents(e)), e.modules.moveColumn = i;
  }
  bindTouchEvents(e) {
    var t = e.getElement(), i = !1, s, n, a, o, l, h;
    t.addEventListener("touchstart", (u) => {
      this.checkTimeout = setTimeout(() => {
        this.touchMove = !0, s = e.nextColumn(), a = s ? s.getWidth() / 2 : 0, n = e.prevColumn(), o = n ? n.getWidth() / 2 : 0, l = 0, h = 0, i = !1, this.startMove(u, e);
      }, this.checkPeriod);
    }, { passive: !0 }), t.addEventListener("touchmove", (u) => {
      var d, f;
      this.moving && (this.moveHover(u), i || (i = u.touches[0].pageX), d = u.touches[0].pageX - i, d > 0 ? s && d - l > a && (f = s, f !== e && (i = u.touches[0].pageX, f.getElement().parentNode.insertBefore(this.placeholderElement, f.getElement().nextSibling), this.moveColumn(f, !0))) : n && -d - h > o && (f = n, f !== e && (i = u.touches[0].pageX, f.getElement().parentNode.insertBefore(this.placeholderElement, f.getElement()), this.moveColumn(f, !1))), f && (s = f.nextColumn(), l = a, a = s ? s.getWidth() / 2 : 0, n = f.prevColumn(), h = o, o = n ? n.getWidth() / 2 : 0));
    }, { passive: !0 }), t.addEventListener("touchend", (u) => {
      this.checkTimeout && clearTimeout(this.checkTimeout), this.moving && this.endMove(u);
    });
  }
  startMove(e, t) {
    var i = t.getElement(), s = this.table.columnManager.getContentsElement(), n = this.table.columnManager.getHeadersElement();
    this.table.modules.selectRange && this.table.modules.selectRange.columnSelection && this.table.modules.selectRange.mousedown && this.table.modules.selectRange.selecting === "column" || (this.moving = t, this.startX = (this.touchMove ? e.touches[0].pageX : e.pageX) - de.elOffset(i).left, this.table.element.classList.add("tabulator-block-select"), this.placeholderElement.style.width = t.getWidth() + "px", this.placeholderElement.style.height = t.getHeight() + "px", i.parentNode.insertBefore(this.placeholderElement, i), i.parentNode.removeChild(i), this.hoverElement = i.cloneNode(!0), this.hoverElement.classList.add("tabulator-moving"), s.appendChild(this.hoverElement), this.hoverElement.style.left = "0", this.hoverElement.style.bottom = s.clientHeight - n.offsetHeight + "px", this.touchMove || (this._bindMouseMove(), document.body.addEventListener("mousemove", this.moveHover), document.body.addEventListener("mouseup", this.endMove)), this.moveHover(e), this.dispatch("column-moving", e, this.moving));
  }
  _bindMouseMove() {
    this.table.columnManager.columnsByIndex.forEach(function(e) {
      e.modules.moveColumn.mousemove && e.getElement().addEventListener("mousemove", e.modules.moveColumn.mousemove);
    });
  }
  _unbindMouseMove() {
    this.table.columnManager.columnsByIndex.forEach(function(e) {
      e.modules.moveColumn.mousemove && e.getElement().removeEventListener("mousemove", e.modules.moveColumn.mousemove);
    });
  }
  moveColumn(e, t) {
    var i = this.moving.getCells();
    this.toCol = e, this.toColAfter = t, t ? e.getCells().forEach(function(s, n) {
      var a = s.getElement(!0);
      a.parentNode && i[n] && a.parentNode.insertBefore(i[n].getElement(), a.nextSibling);
    }) : e.getCells().forEach(function(s, n) {
      var a = s.getElement(!0);
      a.parentNode && i[n] && a.parentNode.insertBefore(i[n].getElement(), a);
    });
  }
  endMove(e) {
    (e.which === 1 || this.touchMove) && (this._unbindMouseMove(), this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling), this.placeholderElement.parentNode.removeChild(this.placeholderElement), this.hoverElement.parentNode.removeChild(this.hoverElement), this.table.element.classList.remove("tabulator-block-select"), this.toCol && this.table.columnManager.moveColumnActual(this.moving, this.toCol, this.toColAfter), this.moving = !1, this.toCol = !1, this.toColAfter = !1, this.touchMove || (document.body.removeEventListener("mousemove", this.moveHover), document.body.removeEventListener("mouseup", this.endMove)));
  }
  moveHover(e) {
    var t = this.table.columnManager.getContentsElement(), i = t.scrollLeft, s = (this.touchMove ? e.touches[0].pageX : e.pageX) - de.elOffset(t).left + i, n;
    this.hoverElement.style.left = s - this.startX + "px", s - i < this.autoScrollMargin && (this.autoScrollTimeout || (this.autoScrollTimeout = setTimeout(() => {
      n = Math.max(0, i - 5), this.table.rowManager.getElement().scrollLeft = n, this.autoScrollTimeout = !1;
    }, 1))), i + t.clientWidth - s < this.autoScrollMargin && (this.autoScrollTimeout || (this.autoScrollTimeout = setTimeout(() => {
      n = Math.min(t.clientWidth, i + 5), this.table.rowManager.getElement().scrollLeft = n, this.autoScrollTimeout = !1;
    }, 1)));
  }
}
F(_o, "moduleName", "moveColumn");
var Ud = {
  delete: function(r, e, t) {
    r.delete();
  }
}, Gd = {
  insert: function(r, e, t) {
    return this.table.addRow(r.getData(), void 0, e), !0;
  },
  add: function(r, e, t) {
    return this.table.addRow(r.getData()), !0;
  },
  update: function(r, e, t) {
    return e ? (e.update(r.getData()), !0) : !1;
  },
  replace: function(r, e, t) {
    return e ? (this.table.addRow(r.getData(), void 0, e), e.delete(), !0) : !1;
  }
};
const Pt = class Pt extends $ {
  constructor(e) {
    super(e), this.placeholderElement = this.createPlaceholderElement(), this.hoverElement = !1, this.checkTimeout = !1, this.checkPeriod = 150, this.moving = !1, this.toRow = !1, this.toRowAfter = !1, this.hasHandle = !1, this.startY = 0, this.startX = 0, this.moveHover = this.moveHover.bind(this), this.endMove = this.endMove.bind(this), this.tableRowDropEvent = !1, this.touchMove = !1, this.connection = !1, this.connectionSelectorsTables = !1, this.connectionSelectorsElements = !1, this.connectionElements = [], this.connections = [], this.connectedTable = !1, this.connectedRow = !1, this.registerTableOption("movableRows", !1), this.registerTableOption("movableRowsConnectedTables", !1), this.registerTableOption("movableRowsConnectedElements", !1), this.registerTableOption("movableRowsSender", !1), this.registerTableOption("movableRowsReceiver", "insert"), this.registerColumnOption("rowHandle");
  }
  createPlaceholderElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-row"), e.classList.add("tabulator-row-placeholder"), e;
  }
  initialize() {
    this.table.options.movableRows && (this.connectionSelectorsTables = this.table.options.movableRowsConnectedTables, this.connectionSelectorsElements = this.table.options.movableRowsConnectedElements, this.connection = this.connectionSelectorsTables || this.connectionSelectorsElements, this.subscribe("cell-init", this.initializeCell.bind(this)), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("row-init", this.initializeRow.bind(this)));
  }
  initializeGroupHeader(e) {
    var t = this, i = {};
    i.mouseup = (function(s) {
      t.tableRowDrop(s, e);
    }).bind(t), i.mousemove = (function(s) {
      var n;
      s.pageY - de.elOffset(e.element).top + t.table.rowManager.element.scrollTop > e.getHeight() / 2 ? (t.toRow !== e || !t.toRowAfter) && (n = e.getElement(), n.parentNode.insertBefore(t.placeholderElement, n.nextSibling), t.moveRow(e, !0)) : (t.toRow !== e || t.toRowAfter) && (n = e.getElement(), n.previousSibling && (n.parentNode.insertBefore(t.placeholderElement, n), t.moveRow(e, !1)));
    }).bind(t), e.modules.moveRow = i;
  }
  initializeRow(e) {
    var t = this, i = {}, s;
    i.mouseup = (function(n) {
      t.tableRowDrop(n, e);
    }).bind(t), i.mousemove = (function(n) {
      var a = e.getElement();
      n.pageY - de.elOffset(a).top + t.table.rowManager.element.scrollTop > e.getHeight() / 2 ? (t.toRow !== e || !t.toRowAfter) && (a.parentNode.insertBefore(t.placeholderElement, a.nextSibling), t.moveRow(e, !0)) : (t.toRow !== e || t.toRowAfter) && (a.parentNode.insertBefore(t.placeholderElement, a), t.moveRow(e, !1));
    }).bind(t), this.hasHandle || (s = e.getElement(), s.addEventListener("mousedown", function(n) {
      n.which === 1 && (t.checkTimeout = setTimeout(function() {
        t.startMove(n, e);
      }, t.checkPeriod));
    }), s.addEventListener("mouseup", function(n) {
      n.which === 1 && t.checkTimeout && clearTimeout(t.checkTimeout);
    }), this.bindTouchEvents(e, e.getElement())), e.modules.moveRow = i;
  }
  initializeColumn(e) {
    e.definition.rowHandle && this.table.options.movableRows !== !1 && (this.hasHandle = !0);
  }
  initializeCell(e) {
    if (e.column.definition.rowHandle && this.table.options.movableRows !== !1) {
      var t = this, i = e.getElement(!0);
      i.addEventListener("mousedown", function(s) {
        s.which === 1 && (t.checkTimeout = setTimeout(function() {
          t.startMove(s, e.row);
        }, t.checkPeriod));
      }), i.addEventListener("mouseup", function(s) {
        s.which === 1 && t.checkTimeout && clearTimeout(t.checkTimeout);
      }), this.bindTouchEvents(e.row, i);
    }
  }
  bindTouchEvents(e, t) {
    var i = !1, s, n, a, o, l, h;
    t.addEventListener("touchstart", (u) => {
      this.checkTimeout = setTimeout(() => {
        this.touchMove = !0, s = e.nextRow(), a = s ? s.getHeight() / 2 : 0, n = e.prevRow(), o = n ? n.getHeight() / 2 : 0, l = 0, h = 0, i = !1, this.startMove(u, e);
      }, this.checkPeriod);
    }, { passive: !0 }), this.moving, this.toRow, this.toRowAfter, t.addEventListener("touchmove", (u) => {
      var d, f;
      this.moving && (u.preventDefault(), this.moveHover(u), i || (i = u.touches[0].pageY), d = u.touches[0].pageY - i, d > 0 ? s && d - l > a && (f = s, f !== e && (i = u.touches[0].pageY, f.getElement().parentNode.insertBefore(this.placeholderElement, f.getElement().nextSibling), this.moveRow(f, !0))) : n && -d - h > o && (f = n, f !== e && (i = u.touches[0].pageY, f.getElement().parentNode.insertBefore(this.placeholderElement, f.getElement()), this.moveRow(f, !1))), f && (s = f.nextRow(), l = a, a = s ? s.getHeight() / 2 : 0, n = f.prevRow(), h = o, o = n ? n.getHeight() / 2 : 0));
    }), t.addEventListener("touchend", (u) => {
      this.checkTimeout && clearTimeout(this.checkTimeout), this.moving && (this.endMove(u), this.touchMove = !1);
    });
  }
  _bindMouseMove() {
    this.table.rowManager.getDisplayRows().forEach((e) => {
      (e.type === "row" || e.type === "group") && e.modules.moveRow && e.modules.moveRow.mousemove && e.getElement().addEventListener("mousemove", e.modules.moveRow.mousemove);
    });
  }
  _unbindMouseMove() {
    this.table.rowManager.getDisplayRows().forEach((e) => {
      (e.type === "row" || e.type === "group") && e.modules.moveRow && e.modules.moveRow.mousemove && e.getElement().removeEventListener("mousemove", e.modules.moveRow.mousemove);
    });
  }
  startMove(e, t) {
    var i = t.getElement();
    this.setStartPosition(e, t), this.moving = t, this.table.element.classList.add("tabulator-block-select"), this.placeholderElement.style.width = t.getWidth() + "px", this.placeholderElement.style.height = t.getHeight() + "px", this.connection ? (this.table.element.classList.add("tabulator-movingrow-sending"), this.connectToTables(t)) : (i.parentNode.insertBefore(this.placeholderElement, i), i.parentNode.removeChild(i)), this.hoverElement = i.cloneNode(!0), this.hoverElement.classList.add("tabulator-moving"), this.connection ? (document.body.appendChild(this.hoverElement), this.hoverElement.style.left = "0", this.hoverElement.style.top = "0", this.hoverElement.style.width = this.table.element.clientWidth + "px", this.hoverElement.style.whiteSpace = "nowrap", this.hoverElement.style.overflow = "hidden", this.hoverElement.style.pointerEvents = "none") : (this.table.rowManager.getTableElement().appendChild(this.hoverElement), this.hoverElement.style.left = "0", this.hoverElement.style.top = "0", this._bindMouseMove()), document.body.addEventListener("mousemove", this.moveHover), document.body.addEventListener("mouseup", this.endMove), this.dispatchExternal("rowMoving", t.getComponent()), this.moveHover(e);
  }
  setStartPosition(e, t) {
    var i = this.touchMove ? e.touches[0].pageX : e.pageX, s = this.touchMove ? e.touches[0].pageY : e.pageY, n, a;
    n = t.getElement(), this.connection ? (a = n.getBoundingClientRect(), this.startX = a.left - i + window.pageXOffset, this.startY = a.top - s + window.pageYOffset) : this.startY = s - n.getBoundingClientRect().top;
  }
  endMove(e) {
    (!e || e.which === 1 || this.touchMove) && (this._unbindMouseMove(), this.connection || (this.placeholderElement.parentNode.insertBefore(this.moving.getElement(), this.placeholderElement.nextSibling), this.placeholderElement.parentNode.removeChild(this.placeholderElement)), this.hoverElement.parentNode.removeChild(this.hoverElement), this.table.element.classList.remove("tabulator-block-select"), this.toRow ? this.table.rowManager.moveRow(this.moving, this.toRow, this.toRowAfter) : this.dispatchExternal("rowMoveCancelled", this.moving.getComponent()), this.moving = !1, this.toRow = !1, this.toRowAfter = !1, document.body.removeEventListener("mousemove", this.moveHover), document.body.removeEventListener("mouseup", this.endMove), this.connection && (this.table.element.classList.remove("tabulator-movingrow-sending"), this.disconnectFromTables()));
  }
  moveRow(e, t) {
    this.toRow = e, this.toRowAfter = t;
  }
  moveHover(e) {
    this.connection ? this.moveHoverConnections.call(this, e) : this.moveHoverTable.call(this, e);
  }
  moveHoverTable(e) {
    var t = this.table.rowManager.getElement(), i = t.scrollTop, s = (this.touchMove ? e.touches[0].pageY : e.pageY) - t.getBoundingClientRect().top + i;
    this.hoverElement.style.top = Math.min(s - this.startY, this.table.rowManager.element.scrollHeight - this.hoverElement.offsetHeight) + "px";
  }
  moveHoverConnections(e) {
    this.hoverElement.style.left = this.startX + (this.touchMove ? e.touches[0].pageX : e.pageX) + "px", this.hoverElement.style.top = this.startY + (this.touchMove ? e.touches[0].pageY : e.pageY) + "px";
  }
  elementRowDrop(e, t, i) {
    this.dispatchExternal("movableRowsElementDrop", e, t, i ? i.getComponent() : !1);
  }
  //establish connection with other tables
  connectToTables(e) {
    var t;
    this.connectionSelectorsTables && (t = this.commsConnections(this.connectionSelectorsTables), this.dispatchExternal("movableRowsSendingStart", t), this.commsSend(this.connectionSelectorsTables, "moveRow", "connect", {
      row: e
    })), this.connectionSelectorsElements && (this.connectionElements = [], Array.isArray(this.connectionSelectorsElements) || (this.connectionSelectorsElements = [this.connectionSelectorsElements]), this.connectionSelectorsElements.forEach((i) => {
      typeof i == "string" ? this.connectionElements = this.connectionElements.concat(Array.prototype.slice.call(document.querySelectorAll(i))) : this.connectionElements.push(i);
    }), this.connectionElements.forEach((i) => {
      var s = (n) => {
        this.elementRowDrop(n, i, this.moving);
      };
      i.addEventListener("mouseup", s), i.tabulatorElementDropEvent = s, i.classList.add("tabulator-movingrow-receiving");
    }));
  }
  //disconnect from other tables
  disconnectFromTables() {
    var e;
    this.connectionSelectorsTables && (e = this.commsConnections(this.connectionSelectorsTables), this.dispatchExternal("movableRowsSendingStop", e), this.commsSend(this.connectionSelectorsTables, "moveRow", "disconnect")), this.connectionElements.forEach((t) => {
      t.classList.remove("tabulator-movingrow-receiving"), t.removeEventListener("mouseup", t.tabulatorElementDropEvent), delete t.tabulatorElementDropEvent;
    });
  }
  //accept incomming connection
  connect(e, t) {
    return this.connectedTable ? (console.warn("Move Row Error - Table cannot accept connection, already connected to table:", this.connectedTable), !1) : (this.connectedTable = e, this.connectedRow = t, this.table.element.classList.add("tabulator-movingrow-receiving"), this.table.rowManager.getDisplayRows().forEach((i) => {
      i.type === "row" && i.modules.moveRow && i.modules.moveRow.mouseup && i.getElement().addEventListener("mouseup", i.modules.moveRow.mouseup);
    }), this.tableRowDropEvent = this.tableRowDrop.bind(this), this.table.element.addEventListener("mouseup", this.tableRowDropEvent), this.dispatchExternal("movableRowsReceivingStart", t, e), !0);
  }
  //close incoming connection
  disconnect(e) {
    e === this.connectedTable ? (this.connectedTable = !1, this.connectedRow = !1, this.table.element.classList.remove("tabulator-movingrow-receiving"), this.table.rowManager.getDisplayRows().forEach((t) => {
      t.type === "row" && t.modules.moveRow && t.modules.moveRow.mouseup && t.getElement().removeEventListener("mouseup", t.modules.moveRow.mouseup);
    }), this.table.element.removeEventListener("mouseup", this.tableRowDropEvent), this.dispatchExternal("movableRowsReceivingStop", e)) : console.warn("Move Row Error - trying to disconnect from non connected table");
  }
  dropComplete(e, t, i) {
    var s = !1;
    if (i) {
      switch (typeof this.table.options.movableRowsSender) {
        case "string":
          s = Pt.senders[this.table.options.movableRowsSender];
          break;
        case "function":
          s = this.table.options.movableRowsSender;
          break;
      }
      s ? s.call(this, this.moving ? this.moving.getComponent() : void 0, t ? t.getComponent() : void 0, e) : this.table.options.movableRowsSender && console.warn("Mover Row Error - no matching sender found:", this.table.options.movableRowsSender), this.dispatchExternal("movableRowsSent", this.moving.getComponent(), t ? t.getComponent() : void 0, e);
    } else
      this.dispatchExternal("movableRowsSentFailed", this.moving.getComponent(), t ? t.getComponent() : void 0, e);
    this.endMove();
  }
  tableRowDrop(e, t) {
    var i = !1, s = !1;
    switch (e.stopImmediatePropagation(), typeof this.table.options.movableRowsReceiver) {
      case "string":
        i = Pt.receivers[this.table.options.movableRowsReceiver];
        break;
      case "function":
        i = this.table.options.movableRowsReceiver;
        break;
    }
    i ? s = i.call(this, this.connectedRow.getComponent(), t ? t.getComponent() : void 0, this.connectedTable) : console.warn("Mover Row Error - no matching receiver found:", this.table.options.movableRowsReceiver), s ? this.dispatchExternal("movableRowsReceived", this.connectedRow.getComponent(), t ? t.getComponent() : void 0, this.connectedTable) : this.dispatchExternal("movableRowsReceivedFailed", this.connectedRow.getComponent(), t ? t.getComponent() : void 0, this.connectedTable), this.commsSend(this.connectedTable, "moveRow", "dropcomplete", {
      row: t,
      success: s
    });
  }
  commsReceived(e, t, i) {
    switch (t) {
      case "connect":
        return this.connect(e, i.row);
      case "disconnect":
        return this.disconnect(e);
      case "dropcomplete":
        return this.dropComplete(e, i.row, i.success);
    }
  }
};
F(Pt, "moduleName", "moveRow"), //load defaults
F(Pt, "senders", Ud), F(Pt, "receivers", Gd);
let _n = Pt;
var $d = {};
const ai = class ai extends $ {
  constructor(e) {
    super(e), this.allowedTypes = ["", "data", "edit", "clipboard", "import"], this.enabled = !0, this.registerColumnOption("mutator"), this.registerColumnOption("mutatorParams"), this.registerColumnOption("mutatorData"), this.registerColumnOption("mutatorDataParams"), this.registerColumnOption("mutatorEdit"), this.registerColumnOption("mutatorEditParams"), this.registerColumnOption("mutatorClipboard"), this.registerColumnOption("mutatorClipboardParams"), this.registerColumnOption("mutatorImport"), this.registerColumnOption("mutatorImportParams"), this.registerColumnOption("mutateLink");
  }
  initialize() {
    this.subscribe("cell-value-changing", this.transformCell.bind(this)), this.subscribe("cell-value-changed", this.mutateLink.bind(this)), this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("row-data-init-before", this.rowDataChanged.bind(this)), this.subscribe("row-data-changing", this.rowDataChanged.bind(this));
  }
  rowDataChanged(e, t, i) {
    return this.transformRow(t, "data", i);
  }
  //initialize column mutator
  initializeColumn(e) {
    var t = !1, i = {};
    this.allowedTypes.forEach((s) => {
      var n = "mutator" + (s.charAt(0).toUpperCase() + s.slice(1)), a;
      e.definition[n] && (a = this.lookupMutator(e.definition[n]), a && (t = !0, i[n] = {
        mutator: a,
        params: e.definition[n + "Params"] || {}
      }));
    }), t && (e.modules.mutate = i);
  }
  lookupMutator(e) {
    var t = !1;
    switch (typeof e) {
      case "string":
        ai.mutators[e] ? t = ai.mutators[e] : console.warn("Mutator Error - No such mutator found, ignoring: ", e);
        break;
      case "function":
        t = e;
        break;
    }
    return t;
  }
  //apply mutator to row
  transformRow(e, t, i) {
    var s = "mutator" + (t.charAt(0).toUpperCase() + t.slice(1)), n;
    return this.enabled && this.table.columnManager.traverse((a) => {
      var o, l, h;
      a.modules.mutate && (o = a.modules.mutate[s] || a.modules.mutate.mutator || !1, o && (n = a.getFieldValue(typeof i < "u" ? i : e), (t == "data" && !i || typeof n < "u") && (h = a.getComponent(), l = typeof o.params == "function" ? o.params(n, e, t, h) : o.params, a.setFieldValue(e, o.mutator(n, e, t, l, h)))));
    }), e;
  }
  //apply mutator to new cell value
  transformCell(e, t) {
    if (e.column.modules.mutate) {
      var i = e.column.modules.mutate.mutatorEdit || e.column.modules.mutate.mutator || !1, s = {};
      if (i)
        return s = Object.assign(s, e.row.getData()), e.column.setFieldValue(s, t), i.mutator(t, s, "edit", i.params, e.getComponent());
    }
    return t;
  }
  mutateLink(e) {
    var t = e.column.definition.mutateLink;
    t && (Array.isArray(t) || (t = [t]), t.forEach((i) => {
      var s = e.row.getCell(i);
      s && s.setValue(s.getValue(), !0, !0);
    }));
  }
  enable() {
    this.enabled = !0;
  }
  disable() {
    this.enabled = !1;
  }
};
F(ai, "moduleName", "mutator"), //load defaults
F(ai, "mutators", $d);
let In = ai;
function Yd(r, e, t, i, s) {
  var n = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span"), l = document.createElement("span"), h = document.createElement("span"), u = document.createElement("span");
  return this.table.modules.localize.langBind("pagination|counter|showing", (d) => {
    a.innerHTML = d;
  }), this.table.modules.localize.langBind("pagination|counter|of", (d) => {
    l.innerHTML = d;
  }), this.table.modules.localize.langBind("pagination|counter|rows", (d) => {
    u.innerHTML = d;
  }), i ? (o.innerHTML = " " + e + "-" + Math.min(e + r - 1, i) + " ", h.innerHTML = " " + i + " ", n.appendChild(a), n.appendChild(o), n.appendChild(l), n.appendChild(h), n.appendChild(u)) : (o.innerHTML = " 0 ", n.appendChild(a), n.appendChild(o), n.appendChild(u)), n;
}
function qd(r, e, t, i, s) {
  var n = document.createElement("span"), a = document.createElement("span"), o = document.createElement("span"), l = document.createElement("span"), h = document.createElement("span"), u = document.createElement("span");
  return this.table.modules.localize.langBind("pagination|counter|showing", (d) => {
    a.innerHTML = d;
  }), o.innerHTML = " " + t + " ", this.table.modules.localize.langBind("pagination|counter|of", (d) => {
    l.innerHTML = d;
  }), h.innerHTML = " " + s + " ", this.table.modules.localize.langBind("pagination|counter|pages", (d) => {
    u.innerHTML = d;
  }), n.appendChild(a), n.appendChild(o), n.appendChild(l), n.appendChild(h), n.appendChild(u), n;
}
var Zd = {
  rows: Yd,
  pages: qd
};
const Yi = class Yi extends $ {
  constructor(e) {
    super(e), this.mode = "local", this.progressiveLoad = !1, this.element = null, this.pageCounterElement = null, this.pageCounter = null, this.size = 0, this.page = 1, this.count = 5, this.max = 1, this.remoteRowCountEstimate = null, this.initialLoad = !0, this.dataChanging = !1, this.pageSizes = [], this.registerTableOption("pagination", !1), this.registerTableOption("paginationMode", "local"), this.registerTableOption("paginationSize", !1), this.registerTableOption("paginationInitialPage", 1), this.registerTableOption("paginationCounter", !1), this.registerTableOption("paginationCounterElement", !1), this.registerTableOption("paginationButtonCount", 5), this.registerTableOption("paginationSizeSelector", !1), this.registerTableOption("paginationElement", !1), this.registerTableOption("paginationAddRow", "page"), this.registerTableOption("paginationOutOfRange", !1), this.registerTableOption("progressiveLoad", !1), this.registerTableOption("progressiveLoadDelay", 0), this.registerTableOption("progressiveLoadScrollMargin", 0), this.registerTableFunction("setMaxPage", this.setMaxPage.bind(this)), this.registerTableFunction("setPage", this.setPage.bind(this)), this.registerTableFunction("setPageToRow", this.userSetPageToRow.bind(this)), this.registerTableFunction("setPageSize", this.userSetPageSize.bind(this)), this.registerTableFunction("getPageSize", this.getPageSize.bind(this)), this.registerTableFunction("previousPage", this.previousPage.bind(this)), this.registerTableFunction("nextPage", this.nextPage.bind(this)), this.registerTableFunction("getPage", this.getPage.bind(this)), this.registerTableFunction("getPageMax", this.getPageMax.bind(this)), this.registerComponentFunction("row", "pageTo", this.setPageToRow.bind(this));
  }
  initialize() {
    this.table.options.pagination ? (this.subscribe("row-deleted", this.rowsUpdated.bind(this)), this.subscribe("row-added", this.rowsUpdated.bind(this)), this.subscribe("data-processed", this.initialLoadComplete.bind(this)), this.subscribe("table-built", this.calculatePageSizes.bind(this)), this.subscribe("footer-redraw", this.footerRedraw.bind(this)), this.table.options.paginationAddRow == "page" && this.subscribe("row-adding-position", this.rowAddingPosition.bind(this)), this.table.options.paginationMode === "remote" && (this.subscribe("data-params", this.remotePageParams.bind(this)), this.subscribe("data-loaded", this._parseRemoteData.bind(this))), this.table.options.progressiveLoad && console.error("Progressive Load Error - Pagination and progressive load cannot be used at the same time"), this.registerDisplayHandler(this.restOnRenderBefore.bind(this), 40), this.registerDisplayHandler(this.getRows.bind(this), 50), this.createElements(), this.initializePageCounter(), this.initializePaginator()) : this.table.options.progressiveLoad && (this.subscribe("data-params", this.remotePageParams.bind(this)), this.subscribe("data-loaded", this._parseRemoteData.bind(this)), this.subscribe("table-built", this.calculatePageSizes.bind(this)), this.subscribe("data-processed", this.initialLoadComplete.bind(this)), this.initializeProgressive(this.table.options.progressiveLoad), this.table.options.progressiveLoad === "scroll" && this.subscribe("scroll-vertical", this.scrollVertical.bind(this)));
  }
  rowAddingPosition(e, t) {
    var i = this.table.rowManager, s = i.getDisplayRows(), n;
    return t ? s.length ? n = s[0] : i.activeRows.length && (n = i.activeRows[i.activeRows.length - 1], t = !1) : s.length && (n = s[s.length - 1], t = !(s.length < this.size)), { index: n, top: t };
  }
  calculatePageSizes() {
    var e, t;
    this.table.options.paginationSize ? this.size = this.table.options.paginationSize : (e = document.createElement("div"), e.classList.add("tabulator-row"), e.style.visibility = "hidden", t = document.createElement("div"), t.classList.add("tabulator-cell"), t.innerHTML = "Page Row Test", e.appendChild(t), this.table.rowManager.getTableElement().appendChild(e), this.size = Math.floor(this.table.rowManager.getElement().clientHeight / e.offsetHeight), this.table.rowManager.getTableElement().removeChild(e)), this.dispatchExternal("pageSizeChanged", this.size), this.generatePageSizeSelectList();
  }
  initialLoadComplete() {
    this.initialLoad = !1;
  }
  remotePageParams(e, t, i, s) {
    return this.initialLoad || (this.progressiveLoad && !i || !this.progressiveLoad && !this.dataChanging) && this.reset(!0), s.page = this.page, this.size && (s.size = this.size), s;
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  userSetPageToRow(e) {
    return this.table.options.pagination && (e = this.table.rowManager.findRow(e), e) ? this.setPageToRow(e) : Promise.reject();
  }
  userSetPageSize(e) {
    return this.table.options.pagination ? (this.setPageSize(e), this.setPage(1)) : !1;
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  scrollVertical(e, t) {
    var i, s, n;
    !t && !this.table.dataLoader.loading && (i = this.table.rowManager.getElement(), s = i.scrollHeight - i.clientHeight - e, n = this.table.options.progressiveLoadScrollMargin || i.clientHeight * 2, s < n && this.nextPage().catch(() => {
    }));
  }
  restOnRenderBefore(e, t) {
    return t || this.mode === "local" && this.reset(), e;
  }
  rowsUpdated() {
    this.refreshData(!0, "all");
  }
  createElements() {
    var e;
    this.element = document.createElement("span"), this.element.classList.add("tabulator-paginator"), this.pagesElement = document.createElement("span"), this.pagesElement.classList.add("tabulator-pages"), e = document.createElement("button"), e.classList.add("tabulator-page"), e.setAttribute("type", "button"), e.setAttribute("role", "button"), e.setAttribute("aria-label", ""), e.setAttribute("title", ""), this.firstBut = e.cloneNode(!0), this.firstBut.setAttribute("data-page", "first"), this.prevBut = e.cloneNode(!0), this.prevBut.setAttribute("data-page", "prev"), this.nextBut = e.cloneNode(!0), this.nextBut.setAttribute("data-page", "next"), this.lastBut = e.cloneNode(!0), this.lastBut.setAttribute("data-page", "last"), this.table.options.paginationSizeSelector && (this.pageSizeSelect = document.createElement("select"), this.pageSizeSelect.classList.add("tabulator-page-size"));
  }
  generatePageSizeSelectList() {
    var e = [];
    if (this.pageSizeSelect) {
      if (Array.isArray(this.table.options.paginationSizeSelector))
        e = this.table.options.paginationSizeSelector, this.pageSizes = e, this.pageSizes.indexOf(this.size) == -1 && e.unshift(this.size);
      else if (this.pageSizes.indexOf(this.size) == -1) {
        e = [];
        for (let t = 1; t < 5; t++)
          e.push(this.size * t);
        this.pageSizes = e;
      } else
        e = this.pageSizes;
      for (; this.pageSizeSelect.firstChild; ) this.pageSizeSelect.removeChild(this.pageSizeSelect.firstChild);
      e.forEach((t) => {
        var i = document.createElement("option");
        i.value = t, t === !0 ? this.langBind("pagination|all", function(s) {
          i.innerHTML = s;
        }) : i.innerHTML = t, this.pageSizeSelect.appendChild(i);
      }), this.pageSizeSelect.value = this.size;
    }
  }
  initializePageCounter() {
    var e = this.table.options.paginationCounter, t = null;
    e && (typeof e == "function" ? t = e : t = Yi.pageCounters[e], t ? (this.pageCounter = t, this.pageCounterElement = document.createElement("span"), this.pageCounterElement.classList.add("tabulator-page-counter")) : console.warn("Pagination Error - No such page counter found: ", e));
  }
  //setup pagination
  initializePaginator(e) {
    var t, i;
    e || (this.langBind("pagination|first", (s) => {
      this.firstBut.innerHTML = s;
    }), this.langBind("pagination|first_title", (s) => {
      this.firstBut.setAttribute("aria-label", s), this.firstBut.setAttribute("title", s);
    }), this.langBind("pagination|prev", (s) => {
      this.prevBut.innerHTML = s;
    }), this.langBind("pagination|prev_title", (s) => {
      this.prevBut.setAttribute("aria-label", s), this.prevBut.setAttribute("title", s);
    }), this.langBind("pagination|next", (s) => {
      this.nextBut.innerHTML = s;
    }), this.langBind("pagination|next_title", (s) => {
      this.nextBut.setAttribute("aria-label", s), this.nextBut.setAttribute("title", s);
    }), this.langBind("pagination|last", (s) => {
      this.lastBut.innerHTML = s;
    }), this.langBind("pagination|last_title", (s) => {
      this.lastBut.setAttribute("aria-label", s), this.lastBut.setAttribute("title", s);
    }), this.firstBut.addEventListener("click", () => {
      this.setPage(1);
    }), this.prevBut.addEventListener("click", () => {
      this.previousPage();
    }), this.nextBut.addEventListener("click", () => {
      this.nextPage();
    }), this.lastBut.addEventListener("click", () => {
      this.setPage(this.max);
    }), this.table.options.paginationElement && (this.element = this.table.options.paginationElement), this.pageSizeSelect && (t = document.createElement("label"), this.langBind("pagination|page_size", (s) => {
      this.pageSizeSelect.setAttribute("aria-label", s), this.pageSizeSelect.setAttribute("title", s), t.innerHTML = s;
    }), this.element.appendChild(t), this.element.appendChild(this.pageSizeSelect), this.pageSizeSelect.addEventListener("change", (s) => {
      this.setPageSize(this.pageSizeSelect.value == "true" ? !0 : this.pageSizeSelect.value), this.setPage(1);
    })), this.element.appendChild(this.firstBut), this.element.appendChild(this.prevBut), this.element.appendChild(this.pagesElement), this.element.appendChild(this.nextBut), this.element.appendChild(this.lastBut), this.table.options.paginationElement || (this.table.options.paginationCounter && (this.table.options.paginationCounterElement ? this.table.options.paginationCounterElement instanceof HTMLElement ? this.table.options.paginationCounterElement.appendChild(this.pageCounterElement) : typeof this.table.options.paginationCounterElement == "string" && (i = document.querySelector(this.table.options.paginationCounterElement), i ? i.appendChild(this.pageCounterElement) : console.warn("Pagination Error - Unable to find element matching paginationCounterElement selector:", this.table.options.paginationCounterElement)) : this.footerAppend(this.pageCounterElement)), this.footerAppend(this.element)), this.page = this.table.options.paginationInitialPage, this.count = this.table.options.paginationButtonCount), this.mode = this.table.options.paginationMode;
  }
  initializeProgressive(e) {
    this.initializePaginator(!0), this.mode = "progressive_" + e, this.progressiveLoad = !0;
  }
  trackChanges() {
    this.dispatch("page-changed");
  }
  //calculate maximum page from number of rows
  setMaxRows(e) {
    e ? this.max = this.size === !0 ? 1 : Math.ceil(e / this.size) : this.max = 1, this.page > this.max && (this.page = this.max);
  }
  //reset to first page without triggering action
  reset(e) {
    this.initialLoad || (this.mode == "local" || e) && (this.page = 1, this.trackChanges());
  }
  //set the maximum page
  setMaxPage(e) {
    e = parseInt(e), this.max = e || 1, this.page > this.max && (this.page = this.max, this.trigger());
  }
  //set current page number
  setPage(e) {
    switch (e) {
      case "first":
        return this.setPage(1);
      case "prev":
        return this.previousPage();
      case "next":
        return this.nextPage();
      case "last":
        return this.setPage(this.max);
    }
    return e = parseInt(e), e > 0 && e <= this.max || this.mode !== "local" ? (this.page = e, this.trackChanges(), this.trigger()) : (console.warn("Pagination Error - Requested page is out of range of 1 - " + this.max + ":", e), Promise.reject());
  }
  setPageToRow(e) {
    var t = this.displayRows(-1), i = t.indexOf(e);
    if (i > -1) {
      var s = this.size === !0 ? 1 : Math.ceil((i + 1) / this.size);
      return this.setPage(s);
    } else
      return console.warn("Pagination Error - Requested row is not visible"), Promise.reject();
  }
  setPageSize(e) {
    e !== !0 && (e = parseInt(e)), e > 0 && (this.size = e, this.dispatchExternal("pageSizeChanged", e)), this.pageSizeSelect && this.generatePageSizeSelectList(), this.trackChanges();
  }
  _setPageCounter(e, t, i) {
    var s;
    if (this.pageCounter)
      switch (this.mode === "remote" && (t = this.size, i = (this.page - 1) * this.size + 1, e = this.remoteRowCountEstimate), s = this.pageCounter.call(this, t, i, this.page, e, this.max), typeof s) {
        case "object":
          if (s instanceof Node) {
            for (; this.pageCounterElement.firstChild; ) this.pageCounterElement.removeChild(this.pageCounterElement.firstChild);
            this.pageCounterElement.appendChild(s);
          } else
            this.pageCounterElement.innerHTML = "", s != null && console.warn("Page Counter Error - Page Counter has returned a type of object, the only valid page counter object return is an instance of Node, the page counter returned:", s);
          break;
        case "undefined":
          this.pageCounterElement.innerHTML = "";
          break;
        default:
          this.pageCounterElement.innerHTML = s;
      }
  }
  //setup the pagination buttons
  _setPageButtons() {
    let e = Math.floor((this.count - 1) / 2), t = Math.ceil((this.count - 1) / 2), i = this.max - this.page + e + 1 < this.count ? this.max - this.count + 1 : Math.max(this.page - e, 1), s = this.page <= t ? Math.min(this.count, this.max) : Math.min(this.page + t, this.max);
    for (; this.pagesElement.firstChild; ) this.pagesElement.removeChild(this.pagesElement.firstChild);
    this.page == 1 ? (this.firstBut.disabled = !0, this.prevBut.disabled = !0) : (this.firstBut.disabled = !1, this.prevBut.disabled = !1), this.page == this.max ? (this.lastBut.disabled = !0, this.nextBut.disabled = !0) : (this.lastBut.disabled = !1, this.nextBut.disabled = !1);
    for (let n = i; n <= s; n++)
      n > 0 && n <= this.max && this.pagesElement.appendChild(this._generatePageButton(n));
    this.footerRedraw();
  }
  _generatePageButton(e) {
    var t = document.createElement("button");
    return t.classList.add("tabulator-page"), e == this.page && t.classList.add("active"), t.setAttribute("type", "button"), t.setAttribute("role", "button"), this.langBind("pagination|page_title", (i) => {
      t.setAttribute("aria-label", i + " " + e), t.setAttribute("title", i + " " + e);
    }), t.setAttribute("data-page", e), t.textContent = e, t.addEventListener("click", (i) => {
      this.setPage(e);
    }), t;
  }
  //previous page
  previousPage() {
    return this.page > 1 ? (this.page--, this.trackChanges(), this.trigger()) : (console.warn("Pagination Error - Previous page would be less than page 1:", 0), Promise.reject());
  }
  //next page
  nextPage() {
    return this.page < this.max ? (this.page++, this.trackChanges(), this.trigger()) : (this.progressiveLoad || console.warn("Pagination Error - Next page would be greater than maximum page of " + this.max + ":", this.max + 1), Promise.reject());
  }
  //return current page number
  getPage() {
    return this.page;
  }
  //return max page number
  getPageMax() {
    return this.max;
  }
  getPageSize(e) {
    return this.size;
  }
  getMode() {
    return this.mode;
  }
  //return appropriate rows for current page
  getRows(e) {
    var t = 0, i, s, n, a, o = e.filter((l) => l.type === "row");
    if (this.mode == "local") {
      i = [], this.setMaxRows(e.length), this.size === !0 ? (s = 0, n = e.length) : (s = this.size * (this.page - 1), n = s + parseInt(this.size)), this._setPageButtons();
      for (let l = s; l < n; l++) {
        let h = e[l];
        h && (i.push(h), h.type === "row" && (a || (a = h), t++));
      }
      return this._setPageCounter(o.length, t, a ? o.indexOf(a) + 1 : 0), i;
    } else
      return this._setPageButtons(), this._setPageCounter(o.length), e.slice(0);
  }
  trigger() {
    var e;
    switch (this.mode) {
      case "local":
        return e = this.table.rowManager.scrollLeft, this.refreshData(), this.table.rowManager.scrollHorizontal(e), this.dispatchExternal("pageLoaded", this.getPage()), Promise.resolve();
      case "remote":
        return this.dataChanging = !0, this.reloadData(null).finally(() => {
          this.dataChanging = !1;
        });
      case "progressive_load":
      case "progressive_scroll":
        return this.reloadData(null, !0);
      default:
        return console.warn("Pagination Error - no such pagination mode:", this.mode), Promise.reject();
    }
  }
  _parseRemoteData(e) {
    var t, i;
    if (typeof e.last_page > "u" && console.warn("Remote Pagination Error - Server response missing '" + (this.options("dataReceiveParams").last_page || "last_page") + "' property"), e.data)
      if (this.max = parseInt(e.last_page) || 1, this.remoteRowCountEstimate = typeof e.last_row < "u" ? e.last_row : e.last_page * this.size - (this.page == e.last_page ? this.size - e.data.length : 0), this.progressiveLoad) {
        switch (this.mode) {
          case "progressive_load":
            this.page == 1 ? this.table.rowManager.setData(e.data, !1, this.page == 1) : this.table.rowManager.addRows(e.data), this.page < this.max && setTimeout(() => {
              this.nextPage();
            }, this.table.options.progressiveLoadDelay);
            break;
          case "progressive_scroll":
            e = this.page === 1 ? e.data : this.table.rowManager.getData().concat(e.data), this.table.rowManager.setData(e, this.page !== 1, this.page == 1), t = this.table.options.progressiveLoadScrollMargin || this.table.rowManager.element.clientHeight * 2, this.table.rowManager.element.scrollHeight <= this.table.rowManager.element.clientHeight + t && this.page < this.max && setTimeout(() => {
              this.nextPage();
            });
            break;
        }
        return !1;
      } else {
        if (this.page > this.max && (console.warn("Remote Pagination Error - Server returned last page value lower than the current page"), i = this.options("paginationOutOfRange"), i))
          return this.setPage(typeof i == "function" ? i.call(this, this.page, this.max) : i);
        this.dispatchExternal("pageLoaded", this.getPage());
      }
    else
      console.warn("Remote Pagination Error - Server response missing '" + (this.options("dataReceiveParams").data || "data") + "' property");
    return e.data;
  }
  //handle the footer element being redrawn
  footerRedraw() {
    var e = this.table.footerManager.containerElement;
    Math.ceil(e.clientWidth) - e.scrollWidth < 0 ? this.pagesElement.style.display = "none" : (this.pagesElement.style.display = "", Math.ceil(e.clientWidth) - e.scrollWidth < 0 && (this.pagesElement.style.display = "none"));
  }
};
F(Yi, "moduleName", "page"), //load defaults
F(Yi, "pageCounters", Zd);
let Nn = Yi;
var Jd = {
  local: function(r, e) {
    var t = localStorage.getItem(r + "-" + e);
    return t ? JSON.parse(t) : !1;
  },
  cookie: function(r, e) {
    var t = document.cookie, i = r + "-" + e, s = t.indexOf(i + "="), n, a;
    return s > -1 && (t = t.slice(s), n = t.indexOf(";"), n > -1 && (t = t.slice(0, n)), a = t.replace(i + "=", "")), a ? JSON.parse(a) : !1;
  }
}, Kd = {
  local: function(r, e, t) {
    localStorage.setItem(r + "-" + e, JSON.stringify(t));
  },
  cookie: function(r, e, t) {
    var i = /* @__PURE__ */ new Date();
    i.setDate(i.getDate() + 1e4), document.cookie = r + "-" + e + "=" + JSON.stringify(t) + "; expires=" + i.toUTCString();
  }
};
const He = class He extends $ {
  constructor(e) {
    super(e), this.mode = "", this.id = "", this.defWatcherBlock = !1, this.config = {}, this.readFunc = !1, this.writeFunc = !1, this.registerTableOption("persistence", !1), this.registerTableOption("persistenceID", ""), this.registerTableOption("persistenceMode", !0), this.registerTableOption("persistenceReaderFunc", !1), this.registerTableOption("persistenceWriterFunc", !1);
  }
  // Test for whether localStorage is available for use.
  localStorageTest() {
    var e = "_tabulator_test";
    try {
      return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0;
    } catch {
      return !1;
    }
  }
  //setup parameters
  initialize() {
    if (this.table.options.persistence) {
      var e = this.table.options.persistenceMode, t = this.table.options.persistenceID, i;
      this.mode = e !== !0 ? e : this.localStorageTest() ? "local" : "cookie", this.table.options.persistenceReaderFunc ? typeof this.table.options.persistenceReaderFunc == "function" ? this.readFunc = this.table.options.persistenceReaderFunc : He.readers[this.table.options.persistenceReaderFunc] ? this.readFunc = He.readers[this.table.options.persistenceReaderFunc] : console.warn("Persistence Read Error - invalid reader set", this.table.options.persistenceReaderFunc) : He.readers[this.mode] ? this.readFunc = He.readers[this.mode] : console.warn("Persistence Read Error - invalid reader set", this.mode), this.table.options.persistenceWriterFunc ? typeof this.table.options.persistenceWriterFunc == "function" ? this.writeFunc = this.table.options.persistenceWriterFunc : He.writers[this.table.options.persistenceWriterFunc] ? this.writeFunc = He.writers[this.table.options.persistenceWriterFunc] : console.warn("Persistence Write Error - invalid reader set", this.table.options.persistenceWriterFunc) : He.writers[this.mode] ? this.writeFunc = He.writers[this.mode] : console.warn("Persistence Write Error - invalid writer set", this.mode), this.id = "tabulator-" + (t || this.table.element.getAttribute("id") || ""), this.config = {
        sort: this.table.options.persistence === !0 || this.table.options.persistence.sort,
        filter: this.table.options.persistence === !0 || this.table.options.persistence.filter,
        headerFilter: this.table.options.persistence === !0 || this.table.options.persistence.headerFilter,
        group: this.table.options.persistence === !0 || this.table.options.persistence.group,
        page: this.table.options.persistence === !0 || this.table.options.persistence.page,
        columns: this.table.options.persistence === !0 ? ["title", "width", "visible"] : this.table.options.persistence.columns
      }, this.config.page && (i = this.retrieveData("page"), i && (typeof i.paginationSize < "u" && (this.config.page === !0 || this.config.page.size) && (this.table.options.paginationSize = i.paginationSize), typeof i.paginationInitialPage < "u" && (this.config.page === !0 || this.config.page.page) && (this.table.options.paginationInitialPage = i.paginationInitialPage))), this.config.group && (i = this.retrieveData("group"), i && (typeof i.groupBy < "u" && (this.config.group === !0 || this.config.group.groupBy) && (this.table.options.groupBy = i.groupBy), typeof i.groupStartOpen < "u" && (this.config.group === !0 || this.config.group.groupStartOpen) && (this.table.options.groupStartOpen = i.groupStartOpen), typeof i.groupHeader < "u" && (this.config.group === !0 || this.config.group.groupHeader) && (this.table.options.groupHeader = i.groupHeader))), this.config.columns && (this.table.options.columns = this.load("columns", this.table.options.columns), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("column-show", this.save.bind(this, "columns")), this.subscribe("column-hide", this.save.bind(this, "columns")), this.subscribe("column-moved", this.save.bind(this, "columns"))), this.subscribe("table-built", this.tableBuilt.bind(this), 0), this.subscribe("table-redraw", this.tableRedraw.bind(this)), this.subscribe("filter-changed", this.eventSave.bind(this, "filter")), this.subscribe("filter-changed", this.eventSave.bind(this, "headerFilter")), this.subscribe("sort-changed", this.eventSave.bind(this, "sort")), this.subscribe("group-changed", this.eventSave.bind(this, "group")), this.subscribe("page-changed", this.eventSave.bind(this, "page")), this.subscribe("column-resized", this.eventSave.bind(this, "columns")), this.subscribe("column-width", this.eventSave.bind(this, "columns")), this.subscribe("layout-refreshed", this.eventSave.bind(this, "columns"));
    }
    this.registerTableFunction("getColumnLayout", this.getColumnLayout.bind(this)), this.registerTableFunction("setColumnLayout", this.setColumnLayout.bind(this));
  }
  eventSave(e) {
    this.config[e] && this.save(e);
  }
  tableBuilt() {
    var e, t, i;
    this.config.sort && (e = this.load("sort"), e && (this.table.options.initialSort = e)), this.config.filter && (t = this.load("filter"), t && (this.table.options.initialFilter = t)), this.config.headerFilter && (i = this.load("headerFilter"), i && (this.table.options.initialHeaderFilter = i));
  }
  tableRedraw(e) {
    e && this.config.columns && this.save("columns");
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  getColumnLayout() {
    return this.parseColumns(this.table.columnManager.getColumns());
  }
  setColumnLayout(e) {
    return this.table.columnManager.setColumns(this.mergeDefinition(this.table.options.columns, e, !0)), !0;
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  initializeColumn(e) {
    var t, i;
    this.config.columns && (this.defWatcherBlock = !0, t = e.getDefinition(), i = this.config.columns === !0 ? Object.keys(t) : this.config.columns, i.forEach((s) => {
      var n = Object.getOwnPropertyDescriptor(t, s), a = t[s];
      n && Object.defineProperty(t, s, {
        set: (o) => {
          a = o, this.defWatcherBlock || this.save("columns"), n.set && n.set(o);
        },
        get: () => (n.get && n.get(), a)
      });
    }), this.defWatcherBlock = !1);
  }
  //load saved definitions
  load(e, t) {
    var i = this.retrieveData(e);
    return t && (i = i ? this.mergeDefinition(t, i) : t), i;
  }
  //retrieve data from memory
  retrieveData(e) {
    return this.readFunc ? this.readFunc(this.id, e) : !1;
  }
  //merge old and new column definitions
  mergeDefinition(e, t, i) {
    var s = [];
    return t = t || [], t.forEach((n, a) => {
      var o = this._findColumn(e, n), l;
      o && (i ? l = Object.keys(n) : this.config.columns === !0 || this.config.columns == null ? (l = Object.keys(o), l.push("width")) : l = this.config.columns, l.forEach((h) => {
        h !== "columns" && typeof n[h] < "u" && (o[h] = n[h]);
      }), o.columns && (o.columns = this.mergeDefinition(o.columns, n.columns)), s.push(o));
    }), e.forEach((n, a) => {
      var o = this._findColumn(t, n);
      o || (s.length > a ? s.splice(a, 0, n) : s.push(n));
    }), s;
  }
  //find matching columns
  _findColumn(e, t) {
    var i = t.columns ? "group" : t.field ? "field" : "object";
    return e.find(function(s) {
      switch (i) {
        case "group":
          return s.title === t.title && s.columns.length === t.columns.length;
        case "field":
          return s.field === t.field;
        case "object":
          return s === t;
      }
    });
  }
  //save data
  save(e) {
    var t = {};
    switch (e) {
      case "columns":
        t = this.parseColumns(this.table.columnManager.getColumns());
        break;
      case "filter":
        t = this.table.modules.filter.getFilters();
        break;
      case "headerFilter":
        t = this.table.modules.filter.getHeaderFilters();
        break;
      case "sort":
        t = this.validateSorters(this.table.modules.sort.getSort());
        break;
      case "group":
        t = this.getGroupConfig();
        break;
      case "page":
        t = this.getPageConfig();
        break;
    }
    this.writeFunc && this.writeFunc(this.id, e, t);
  }
  //ensure sorters contain no function data
  validateSorters(e) {
    return e.forEach(function(t) {
      t.column = t.field, delete t.field;
    }), e;
  }
  getGroupConfig() {
    var e = {};
    return this.config.group && ((this.config.group === !0 || this.config.group.groupBy) && (e.groupBy = this.table.options.groupBy), (this.config.group === !0 || this.config.group.groupStartOpen) && (e.groupStartOpen = this.table.options.groupStartOpen), (this.config.group === !0 || this.config.group.groupHeader) && (e.groupHeader = this.table.options.groupHeader)), e;
  }
  getPageConfig() {
    var e = {};
    return this.config.page && ((this.config.page === !0 || this.config.page.size) && (e.paginationSize = this.table.modules.page.getPageSize()), (this.config.page === !0 || this.config.page.page) && (e.paginationInitialPage = this.table.modules.page.getPage())), e;
  }
  //parse columns for data to store
  parseColumns(e) {
    var t = [], i = ["headerContextMenu", "headerMenu", "contextMenu", "clickMenu"];
    return e.forEach((s) => {
      var n = {}, a = s.getDefinition(), o;
      s.isGroup ? (n.title = a.title, n.columns = this.parseColumns(s.getColumns())) : (n.field = s.getField(), this.config.columns === !0 || this.config.columns == null ? (o = Object.keys(a), o.push("width"), o.push("visible")) : o = this.config.columns, o.forEach((l) => {
        switch (l) {
          case "width":
            n.width = s.getWidth();
            break;
          case "visible":
            n.visible = s.visible;
            break;
          default:
            typeof a[l] != "function" && i.indexOf(l) === -1 && (n[l] = a[l]);
        }
      })), t.push(n);
    }), t;
  }
};
F(He, "moduleName", "persistence"), F(He, "moduleInitOrder", -10), //load defaults
F(He, "readers", Jd), F(He, "writers", Kd);
let Vn = He;
class Io extends $ {
  constructor(e) {
    super(e), this.columnSubscribers = {}, this.registerTableOption("rowContextPopup", !1), this.registerTableOption("rowClickPopup", !1), this.registerTableOption("rowDblClickPopup", !1), this.registerTableOption("groupContextPopup", !1), this.registerTableOption("groupClickPopup", !1), this.registerTableOption("groupDblClickPopup", !1), this.registerColumnOption("headerContextPopup"), this.registerColumnOption("headerClickPopup"), this.registerColumnOption("headerDblClickPopup"), this.registerColumnOption("headerPopup"), this.registerColumnOption("headerPopupIcon"), this.registerColumnOption("contextPopup"), this.registerColumnOption("clickPopup"), this.registerColumnOption("dblClickPopup"), this.registerComponentFunction("cell", "popup", this._componentPopupCall.bind(this)), this.registerComponentFunction("column", "popup", this._componentPopupCall.bind(this)), this.registerComponentFunction("row", "popup", this._componentPopupCall.bind(this)), this.registerComponentFunction("group", "popup", this._componentPopupCall.bind(this));
  }
  initialize() {
    this.initializeRowWatchers(), this.initializeGroupWatchers(), this.subscribe("column-init", this.initializeColumn.bind(this));
  }
  _componentPopupCall(e, t, i) {
    this.loadPopupEvent(t, null, e, i);
  }
  initializeRowWatchers() {
    this.table.options.rowContextPopup && (this.subscribe("row-contextmenu", this.loadPopupEvent.bind(this, this.table.options.rowContextPopup)), this.table.on("rowTapHold", this.loadPopupEvent.bind(this, this.table.options.rowContextPopup))), this.table.options.rowClickPopup && this.subscribe("row-click", this.loadPopupEvent.bind(this, this.table.options.rowClickPopup)), this.table.options.rowDblClickPopup && this.subscribe("row-dblclick", this.loadPopupEvent.bind(this, this.table.options.rowDblClickPopup));
  }
  initializeGroupWatchers() {
    this.table.options.groupContextPopup && (this.subscribe("group-contextmenu", this.loadPopupEvent.bind(this, this.table.options.groupContextPopup)), this.table.on("groupTapHold", this.loadPopupEvent.bind(this, this.table.options.groupContextPopup))), this.table.options.groupClickPopup && this.subscribe("group-click", this.loadPopupEvent.bind(this, this.table.options.groupClickPopup)), this.table.options.groupDblClickPopup && this.subscribe("group-dblclick", this.loadPopupEvent.bind(this, this.table.options.groupDblClickPopup));
  }
  initializeColumn(e) {
    var t = e.definition;
    t.headerContextPopup && !this.columnSubscribers.headerContextPopup && (this.columnSubscribers.headerContextPopup = this.loadPopupTableColumnEvent.bind(this, "headerContextPopup"), this.subscribe("column-contextmenu", this.columnSubscribers.headerContextPopup), this.table.on("headerTapHold", this.loadPopupTableColumnEvent.bind(this, "headerContextPopup"))), t.headerClickPopup && !this.columnSubscribers.headerClickPopup && (this.columnSubscribers.headerClickPopup = this.loadPopupTableColumnEvent.bind(this, "headerClickPopup"), this.subscribe("column-click", this.columnSubscribers.headerClickPopup)), t.headerDblClickPopup && !this.columnSubscribers.headerDblClickPopup && (this.columnSubscribers.headerDblClickPopup = this.loadPopupTableColumnEvent.bind(this, "headerDblClickPopup"), this.subscribe("column-dblclick", this.columnSubscribers.headerDblClickPopup)), t.headerPopup && this.initializeColumnHeaderPopup(e), t.contextPopup && !this.columnSubscribers.contextPopup && (this.columnSubscribers.contextPopup = this.loadPopupTableCellEvent.bind(this, "contextPopup"), this.subscribe("cell-contextmenu", this.columnSubscribers.contextPopup), this.table.on("cellTapHold", this.loadPopupTableCellEvent.bind(this, "contextPopup"))), t.clickPopup && !this.columnSubscribers.clickPopup && (this.columnSubscribers.clickPopup = this.loadPopupTableCellEvent.bind(this, "clickPopup"), this.subscribe("cell-click", this.columnSubscribers.clickPopup)), t.dblClickPopup && !this.columnSubscribers.dblClickPopup && (this.columnSubscribers.dblClickPopup = this.loadPopupTableCellEvent.bind(this, "dblClickPopup"), this.subscribe("cell-click", this.columnSubscribers.dblClickPopup));
  }
  initializeColumnHeaderPopup(e) {
    var t = e.definition.headerPopupIcon, i;
    i = document.createElement("span"), i.classList.add("tabulator-header-popup-button"), t ? (typeof t == "function" && (t = t(e.getComponent())), t instanceof HTMLElement ? i.appendChild(t) : i.innerHTML = t) : i.innerHTML = "&vellip;", i.addEventListener("click", (s) => {
      s.stopPropagation(), s.preventDefault(), this.loadPopupEvent(e.definition.headerPopup, s, e);
    }), e.titleElement.insertBefore(i, e.titleElement.firstChild);
  }
  loadPopupTableCellEvent(e, t, i) {
    i._cell && (i = i._cell), i.column.definition[e] && this.loadPopupEvent(i.column.definition[e], t, i);
  }
  loadPopupTableColumnEvent(e, t, i) {
    i._column && (i = i._column), i.definition[e] && this.loadPopupEvent(i.definition[e], t, i);
  }
  loadPopupEvent(e, t, i, s) {
    var n;
    function a(o) {
      n = o;
    }
    i._group ? i = i._group : i._row && (i = i._row), e = typeof e == "function" ? e.call(this.table, t, i.getComponent(), a) : e, this.loadPopup(t, i, e, n, s);
  }
  loadPopup(e, t, i, s, n) {
    var a = !(e instanceof MouseEvent), o, l;
    i instanceof HTMLElement ? o = i : (o = document.createElement("div"), o.innerHTML = i), o.classList.add("tabulator-popup"), o.addEventListener("click", (h) => {
      h.stopPropagation();
    }), a || e.preventDefault(), l = this.popup(o), typeof s == "function" && l.renderCallback(s), e ? l.show(e) : l.show(t.getElement(), n || "center"), l.hideOnBlur(() => {
      this.dispatchExternal("popupClosed", t.getComponent());
    }), this.dispatchExternal("popupOpened", t.getComponent());
  }
}
F(Io, "moduleName", "popup");
class No extends $ {
  constructor(e) {
    super(e), this.element = !1, this.manualBlock = !1, this.beforeprintEventHandler = null, this.afterprintEventHandler = null, this.registerTableOption("printAsHtml", !1), this.registerTableOption("printFormatter", !1), this.registerTableOption("printHeader", !1), this.registerTableOption("printFooter", !1), this.registerTableOption("printStyled", !0), this.registerTableOption("printRowRange", "visible"), this.registerTableOption("printConfig", {}), this.registerColumnOption("print"), this.registerColumnOption("titlePrint");
  }
  initialize() {
    this.table.options.printAsHtml && (this.beforeprintEventHandler = this.replaceTable.bind(this), this.afterprintEventHandler = this.cleanup.bind(this), window.addEventListener("beforeprint", this.beforeprintEventHandler), window.addEventListener("afterprint", this.afterprintEventHandler), this.subscribe("table-destroy", this.destroy.bind(this))), this.registerTableFunction("print", this.printFullscreen.bind(this));
  }
  destroy() {
    this.table.options.printAsHtml && (window.removeEventListener("beforeprint", this.beforeprintEventHandler), window.removeEventListener("afterprint", this.afterprintEventHandler));
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  replaceTable() {
    this.manualBlock || (this.element = document.createElement("div"), this.element.classList.add("tabulator-print-table"), this.element.appendChild(this.table.modules.export.generateTable(this.table.options.printConfig, this.table.options.printStyled, this.table.options.printRowRange, "print")), this.table.element.style.display = "none", this.table.element.parentNode.insertBefore(this.element, this.table.element));
  }
  cleanup() {
    document.body.classList.remove("tabulator-print-fullscreen-hide"), this.element && this.element.parentNode && (this.element.parentNode.removeChild(this.element), this.table.element.style.display = "");
  }
  printFullscreen(e, t, i) {
    var s = window.scrollX, n = window.scrollY, a = document.createElement("div"), o = document.createElement("div"), l = this.table.modules.export.generateTable(typeof i < "u" ? i : this.table.options.printConfig, typeof t < "u" ? t : this.table.options.printStyled, e || this.table.options.printRowRange, "print"), h, u;
    this.manualBlock = !0, this.element = document.createElement("div"), this.element.classList.add("tabulator-print-fullscreen"), this.table.options.printHeader && (a.classList.add("tabulator-print-header"), h = typeof this.table.options.printHeader == "function" ? this.table.options.printHeader.call(this.table) : this.table.options.printHeader, typeof h == "string" ? a.innerHTML = h : a.appendChild(h), this.element.appendChild(a)), this.element.appendChild(l), this.table.options.printFooter && (o.classList.add("tabulator-print-footer"), u = typeof this.table.options.printFooter == "function" ? this.table.options.printFooter.call(this.table) : this.table.options.printFooter, typeof u == "string" ? o.innerHTML = u : o.appendChild(u), this.element.appendChild(o)), document.body.classList.add("tabulator-print-fullscreen-hide"), document.body.appendChild(this.element), this.table.options.printFormatter && this.table.options.printFormatter(this.element, l), window.print(), this.cleanup(), window.scrollTo(s, n), this.manualBlock = !1;
  }
}
F(No, "moduleName", "print");
class Vo extends $ {
  constructor(e) {
    super(e), this.data = !1, this.blocked = !1, this.origFuncs = {}, this.currentVersion = 0, this.registerTableOption("reactiveData", !1);
  }
  initialize() {
    this.table.options.reactiveData && (this.subscribe("cell-value-save-before", this.block.bind(this, "cellsave")), this.subscribe("cell-value-save-after", this.unblock.bind(this, "cellsave")), this.subscribe("row-data-save-before", this.block.bind(this, "rowsave")), this.subscribe("row-data-save-after", this.unblock.bind(this, "rowsave")), this.subscribe("row-data-init-after", this.watchRow.bind(this)), this.subscribe("data-processing", this.watchData.bind(this)), this.subscribe("table-destroy", this.unwatchData.bind(this)));
  }
  watchData(e) {
    var t = this, i;
    this.currentVersion++, i = this.currentVersion, this.unwatchData(), this.data = e, this.origFuncs.push = e.push, Object.defineProperty(this.data, "push", {
      enumerable: !1,
      configurable: !0,
      value: function() {
        var s = Array.from(arguments), n;
        return !t.blocked && i === t.currentVersion && (t.block("data-push"), s.forEach((a) => {
          t.table.rowManager.addRowActual(a, !1);
        }), n = t.origFuncs.push.apply(e, arguments), t.unblock("data-push")), n;
      }
    }), this.origFuncs.unshift = e.unshift, Object.defineProperty(this.data, "unshift", {
      enumerable: !1,
      configurable: !0,
      value: function() {
        var s = Array.from(arguments), n;
        return !t.blocked && i === t.currentVersion && (t.block("data-unshift"), s.forEach((a) => {
          t.table.rowManager.addRowActual(a, !0);
        }), n = t.origFuncs.unshift.apply(e, arguments), t.unblock("data-unshift")), n;
      }
    }), this.origFuncs.shift = e.shift, Object.defineProperty(this.data, "shift", {
      enumerable: !1,
      configurable: !0,
      value: function() {
        var s, n;
        return !t.blocked && i === t.currentVersion && (t.block("data-shift"), t.data.length && (s = t.table.rowManager.getRowFromDataObject(t.data[0]), s && s.deleteActual()), n = t.origFuncs.shift.call(e), t.unblock("data-shift")), n;
      }
    }), this.origFuncs.pop = e.pop, Object.defineProperty(this.data, "pop", {
      enumerable: !1,
      configurable: !0,
      value: function() {
        var s, n;
        return !t.blocked && i === t.currentVersion && (t.block("data-pop"), t.data.length && (s = t.table.rowManager.getRowFromDataObject(t.data[t.data.length - 1]), s && s.deleteActual()), n = t.origFuncs.pop.call(e), t.unblock("data-pop")), n;
      }
    }), this.origFuncs.splice = e.splice, Object.defineProperty(this.data, "splice", {
      enumerable: !1,
      configurable: !0,
      value: function() {
        var s = Array.from(arguments), n = s[0] < 0 ? e.length + s[0] : s[0], a = s[1], o = s[2] ? s.slice(2) : !1, l, h;
        if (!t.blocked && i === t.currentVersion) {
          if (t.block("data-splice"), o && (l = e[n] ? t.table.rowManager.getRowFromDataObject(e[n]) : !1, l ? o.forEach((d) => {
            t.table.rowManager.addRowActual(d, !0, l, !0);
          }) : (o = o.slice().reverse(), o.forEach((d) => {
            t.table.rowManager.addRowActual(d, !0, !1, !0);
          }))), a !== 0) {
            var u = e.slice(n, typeof s[1] > "u" ? s[1] : n + a);
            u.forEach((d, f) => {
              var b = t.table.rowManager.getRowFromDataObject(d);
              b && b.deleteActual(f !== u.length - 1);
            });
          }
          (o || a !== 0) && t.table.rowManager.reRenderInPosition(), h = t.origFuncs.splice.apply(e, arguments), t.unblock("data-splice");
        }
        return h;
      }
    });
  }
  unwatchData() {
    if (this.data !== !1)
      for (var e in this.origFuncs)
        Object.defineProperty(this.data, e, {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: this.origFuncs.key
        });
  }
  watchRow(e) {
    var t = e.getData();
    for (var i in t)
      this.watchKey(e, t, i);
    this.table.options.dataTree && this.watchTreeChildren(e);
  }
  watchTreeChildren(e) {
    var t = this, i = e.getData()[this.table.options.dataTreeChildField], s = {};
    i && (s.push = i.push, Object.defineProperty(i, "push", {
      enumerable: !1,
      configurable: !0,
      value: () => {
        if (!t.blocked) {
          t.block("tree-push");
          var n = s.push.apply(i, arguments);
          this.rebuildTree(e), t.unblock("tree-push");
        }
        return n;
      }
    }), s.unshift = i.unshift, Object.defineProperty(i, "unshift", {
      enumerable: !1,
      configurable: !0,
      value: () => {
        if (!t.blocked) {
          t.block("tree-unshift");
          var n = s.unshift.apply(i, arguments);
          this.rebuildTree(e), t.unblock("tree-unshift");
        }
        return n;
      }
    }), s.shift = i.shift, Object.defineProperty(i, "shift", {
      enumerable: !1,
      configurable: !0,
      value: () => {
        if (!t.blocked) {
          t.block("tree-shift");
          var n = s.shift.call(i);
          this.rebuildTree(e), t.unblock("tree-shift");
        }
        return n;
      }
    }), s.pop = i.pop, Object.defineProperty(i, "pop", {
      enumerable: !1,
      configurable: !0,
      value: () => {
        if (!t.blocked) {
          t.block("tree-pop");
          var n = s.pop.call(i);
          this.rebuildTree(e), t.unblock("tree-pop");
        }
        return n;
      }
    }), s.splice = i.splice, Object.defineProperty(i, "splice", {
      enumerable: !1,
      configurable: !0,
      value: () => {
        if (!t.blocked) {
          t.block("tree-splice");
          var n = s.splice.apply(i, arguments);
          this.rebuildTree(e), t.unblock("tree-splice");
        }
        return n;
      }
    }));
  }
  rebuildTree(e) {
    this.table.modules.dataTree.initializeRow(e), this.table.modules.dataTree.layoutRow(e), this.table.rowManager.refreshActiveData("tree", !1, !0);
  }
  watchKey(e, t, i) {
    var s = this, n = Object.getOwnPropertyDescriptor(t, i), a = t[i], o = this.currentVersion;
    Object.defineProperty(t, i, {
      set: (l) => {
        if (a = l, !s.blocked && o === s.currentVersion) {
          s.block("key");
          var h = {};
          h[i] = l, e.updateData(h), s.unblock("key");
        }
        n.set && n.set(l);
      },
      get: () => (n.get && n.get(), a)
    });
  }
  unwatchRow(e) {
    var t = e.getData();
    for (var i in t)
      Object.defineProperty(t, i, {
        value: t[i]
      });
  }
  block(e) {
    this.blocked || (this.blocked = e);
  }
  unblock(e) {
    this.blocked === e && (this.blocked = !1);
  }
}
F(Vo, "moduleName", "reactiveData");
class Bo extends $ {
  constructor(e) {
    super(e), this.startColumn = !1, this.startX = !1, this.startWidth = !1, this.latestX = !1, this.handle = null, this.initialNextColumn = null, this.nextColumn = null, this.initialized = !1, this.registerColumnOption("resizable", !0), this.registerTableOption("resizableColumnFit", !1), this.registerTableOption("resizableColumnGuide", !1);
  }
  initialize() {
    this.subscribe("column-rendered", this.layoutColumnHeader.bind(this));
  }
  initializeEventWatchers() {
    this.initialized || (this.subscribe("cell-rendered", this.layoutCellHandles.bind(this)), this.subscribe("cell-delete", this.deInitializeComponent.bind(this)), this.subscribe("cell-height", this.resizeHandle.bind(this)), this.subscribe("column-moved", this.columnLayoutUpdated.bind(this)), this.subscribe("column-hide", this.deInitializeColumn.bind(this)), this.subscribe("column-show", this.columnLayoutUpdated.bind(this)), this.subscribe("column-width", this.columnWidthUpdated.bind(this)), this.subscribe("column-delete", this.deInitializeComponent.bind(this)), this.subscribe("column-height", this.resizeHandle.bind(this)), this.initialized = !0);
  }
  layoutCellHandles(e) {
    e.row.type === "row" && (this.deInitializeComponent(e), this.initializeColumn("cell", e, e.column, e.element));
  }
  layoutColumnHeader(e) {
    e.definition.resizable && (this.initializeEventWatchers(), this.deInitializeComponent(e), this.initializeColumn("header", e, e, e.element));
  }
  columnLayoutUpdated(e) {
    var t = e.prevColumn();
    this.reinitializeColumn(e), t && this.reinitializeColumn(t);
  }
  columnWidthUpdated(e) {
    e.modules.frozen && (this.table.modules.frozenColumns.leftColumns.includes(e) ? this.table.modules.frozenColumns.leftColumns.forEach((t) => {
      this.reinitializeColumn(t);
    }) : this.table.modules.frozenColumns.rightColumns.includes(e) && this.table.modules.frozenColumns.rightColumns.forEach((t) => {
      this.reinitializeColumn(t);
    }));
  }
  frozenColumnOffset(e) {
    var t = !1;
    return e.modules.frozen && (t = e.modules.frozen.marginValue, e.modules.frozen.position === "left" ? t += e.getWidth() - 3 : t && (t -= 3)), t !== !1 ? t + "px" : !1;
  }
  reinitializeColumn(e) {
    var t = this.frozenColumnOffset(e);
    e.cells.forEach((i) => {
      i.modules.resize && i.modules.resize.handleEl && (t && (i.modules.resize.handleEl.style[e.modules.frozen.position] = t, i.modules.resize.handleEl.style["z-index"] = 11), i.element.after(i.modules.resize.handleEl));
    }), e.modules.resize && e.modules.resize.handleEl && (t && (e.modules.resize.handleEl.style[e.modules.frozen.position] = t), e.element.after(e.modules.resize.handleEl));
  }
  initializeColumn(e, t, i, s) {
    var n = this, a = !1, o = i.definition.resizable, l = {}, h = i.getLastColumn();
    if (e === "header" && (a = i.definition.formatter == "textarea" || i.definition.variableHeight, l = { variableHeight: a }), (o === !0 || o == e) && this._checkResizability(h)) {
      var u = document.createElement("span");
      u.className = "tabulator-col-resize-handle", u.addEventListener("click", function(f) {
        f.stopPropagation();
      });
      var d = function(f) {
        n.startColumn = i, n.initialNextColumn = n.nextColumn = h.nextColumn(), n._mouseDown(f, h, u);
      };
      u.addEventListener("mousedown", d), u.addEventListener("touchstart", d, { passive: !0 }), u.addEventListener("dblclick", (f) => {
        var b = h.getWidth();
        f.stopPropagation(), h.reinitializeWidth(!0), b !== h.getWidth() && (n.dispatch("column-resized", h), n.dispatchExternal("columnResized", h.getComponent()));
      }), i.modules.frozen && (u.style.position = "sticky", u.style[i.modules.frozen.position] = this.frozenColumnOffset(i)), l.handleEl = u, s.parentNode && i.visible && s.after(u);
    }
    t.modules.resize = l;
  }
  deInitializeColumn(e) {
    this.deInitializeComponent(e), e.cells.forEach((t) => {
      this.deInitializeComponent(t);
    });
  }
  deInitializeComponent(e) {
    var t;
    e.modules.resize && (t = e.modules.resize.handleEl, t && t.parentElement && t.parentElement.removeChild(t));
  }
  resizeHandle(e, t) {
    e.modules.resize && e.modules.resize.handleEl && (e.modules.resize.handleEl.style.height = t);
  }
  resize(e, t) {
    var i = typeof e.clientX > "u" ? e.touches[0].clientX : e.clientX, s = i - this.startX, n = i - this.latestX, a, o;
    if (this.latestX = i, this.table.rtl && (s = -s, n = -n), a = t.width == t.minWidth || t.width == t.maxWidth, t.setWidth(this.startWidth + s), o = t.width == t.minWidth || t.width == t.maxWidth, n < 0 && (this.nextColumn = this.initialNextColumn), this.table.options.resizableColumnFit && this.nextColumn && !(a && o)) {
      let l = this.nextColumn.getWidth();
      n > 0 && l <= this.nextColumn.minWidth && (this.nextColumn = this.nextColumn.nextColumn()), this.nextColumn && this.nextColumn.setWidth(this.nextColumn.getWidth() - n);
    }
    this.table.columnManager.rerenderColumns(!0), !this.table.browserSlow && t.modules.resize && t.modules.resize.variableHeight && t.checkCellHeights();
  }
  calcGuidePosition(e, t, i) {
    var s = typeof e.clientX > "u" ? e.touches[0].clientX : e.clientX, n = i.getBoundingClientRect().x - this.table.element.getBoundingClientRect().x, a = this.table.element.getBoundingClientRect().x, o = t.element.getBoundingClientRect().left - a, l = s - this.startX, h = Math.max(n + l, o + t.minWidth);
    return t.maxWidth && (h = Math.min(h, o + t.maxWidth)), h;
  }
  _checkResizability(e) {
    return e.definition.resizable;
  }
  _mouseDown(e, t, i) {
    var s = this, n;
    this.dispatchExternal("columnResizing", t.getComponent()), s.table.options.resizableColumnGuide && (n = document.createElement("span"), n.classList.add("tabulator-col-resize-guide"), s.table.element.appendChild(n), setTimeout(() => {
      n.style.left = s.calcGuidePosition(e, t, i) + "px";
    })), s.table.element.classList.add("tabulator-block-select");
    function a(l) {
      s.table.options.resizableColumnGuide ? n.style.left = s.calcGuidePosition(l, t, i) + "px" : s.resize(l, t);
    }
    function o(l) {
      s.table.options.resizableColumnGuide && (s.resize(l, t), n.remove()), s.startColumn.modules.edit && (s.startColumn.modules.edit.blocked = !1), s.table.browserSlow && t.modules.resize && t.modules.resize.variableHeight && t.checkCellHeights(), document.body.removeEventListener("mouseup", o), document.body.removeEventListener("mousemove", a), i.removeEventListener("touchmove", a), i.removeEventListener("touchend", o), s.table.element.classList.remove("tabulator-block-select"), s.startWidth !== t.getWidth() && (s.table.columnManager.verticalAlignHeaders(), s.dispatch("column-resized", t), s.dispatchExternal("columnResized", t.getComponent()));
    }
    e.stopPropagation(), s.startColumn.modules.edit && (s.startColumn.modules.edit.blocked = !0), s.startX = typeof e.clientX > "u" ? e.touches[0].clientX : e.clientX, s.latestX = s.startX, s.startWidth = t.getWidth(), document.body.addEventListener("mousemove", a), document.body.addEventListener("mouseup", o), i.addEventListener("touchmove", a, { passive: !0 }), i.addEventListener("touchend", o);
  }
}
F(Bo, "moduleName", "resizeColumns");
class Wo extends $ {
  constructor(e) {
    super(e), this.startColumn = !1, this.startY = !1, this.startHeight = !1, this.handle = null, this.prevHandle = null, this.registerTableOption("resizableRows", !1), this.registerTableOption("resizableRowGuide", !1);
  }
  initialize() {
    this.table.options.resizableRows && this.subscribe("row-layout-after", this.initializeRow.bind(this));
  }
  initializeRow(e) {
    var t = this, i = e.getElement(), s = document.createElement("div");
    s.className = "tabulator-row-resize-handle";
    var n = document.createElement("div");
    n.className = "tabulator-row-resize-handle prev", s.addEventListener("click", function(l) {
      l.stopPropagation();
    });
    var a = function(l) {
      t.startRow = e, t._mouseDown(l, e, s);
    };
    s.addEventListener("mousedown", a), s.addEventListener("touchstart", a, { passive: !0 }), n.addEventListener("click", function(l) {
      l.stopPropagation();
    });
    var o = function(l) {
      var h = t.table.rowManager.prevDisplayRow(e);
      h && (t.startRow = h, t._mouseDown(l, h, n));
    };
    n.addEventListener("mousedown", o), n.addEventListener("touchstart", o, { passive: !0 }), i.appendChild(s), i.appendChild(n);
  }
  resize(e, t) {
    t.setHeight(this.startHeight + ((typeof e.screenY > "u" ? e.touches[0].screenY : e.screenY) - this.startY));
  }
  calcGuidePosition(e, t, i) {
    var s = typeof e.screenY > "u" ? e.touches[0].screenY : e.screenY, n = i.getBoundingClientRect().y - this.table.element.getBoundingClientRect().y, a = this.table.element.getBoundingClientRect().y, o = t.element.getBoundingClientRect().top - a, l = s - this.startY;
    return Math.max(n + l, o);
  }
  _mouseDown(e, t, i) {
    var s = this, n;
    s.dispatchExternal("rowResizing", t.getComponent()), s.table.options.resizableRowGuide && (n = document.createElement("span"), n.classList.add("tabulator-row-resize-guide"), s.table.element.appendChild(n), setTimeout(() => {
      n.style.top = s.calcGuidePosition(e, t, i) + "px";
    })), s.table.element.classList.add("tabulator-block-select");
    function a(l) {
      s.table.options.resizableRowGuide ? n.style.top = s.calcGuidePosition(l, t, i) + "px" : s.resize(l, t);
    }
    function o(l) {
      s.table.options.resizableRowGuide && (s.resize(l, t), n.remove()), document.body.removeEventListener("mouseup", a), document.body.removeEventListener("mousemove", a), i.removeEventListener("touchmove", a), i.removeEventListener("touchend", o), s.table.element.classList.remove("tabulator-block-select"), s.dispatchExternal("rowResized", t.getComponent());
    }
    e.stopPropagation(), s.startY = typeof e.screenY > "u" ? e.touches[0].screenY : e.screenY, s.startHeight = t.getHeight(), document.body.addEventListener("mousemove", a), document.body.addEventListener("mouseup", o), i.addEventListener("touchmove", a, { passive: !0 }), i.addEventListener("touchend", o);
  }
}
F(Wo, "moduleName", "resizeRows");
class jo extends $ {
  constructor(e) {
    super(e), this.binding = !1, this.visibilityObserver = !1, this.resizeObserver = !1, this.containerObserver = !1, this.tableHeight = 0, this.tableWidth = 0, this.containerHeight = 0, this.containerWidth = 0, this.autoResize = !1, this.visible = !1, this.initialized = !1, this.initialRedraw = !1, this.registerTableOption("autoResize", !0);
  }
  initialize() {
    if (this.table.options.autoResize) {
      var e = this.table, t;
      this.tableHeight = e.element.clientHeight, this.tableWidth = e.element.clientWidth, e.element.parentNode && (this.containerHeight = e.element.parentNode.clientHeight, this.containerWidth = e.element.parentNode.clientWidth), typeof IntersectionObserver < "u" && typeof ResizeObserver < "u" && e.rowManager.getRenderMode() === "virtual" ? (this.initializeVisibilityObserver(), this.autoResize = !0, this.resizeObserver = new ResizeObserver((i) => {
        if (!e.browserMobile || e.browserMobile && (!e.modules.edit || e.modules.edit && !e.modules.edit.currentCell)) {
          var s = Math.floor(i[0].contentRect.height), n = Math.floor(i[0].contentRect.width);
          (this.tableHeight != s || this.tableWidth != n) && (this.tableHeight = s, this.tableWidth = n, e.element.parentNode && (this.containerHeight = e.element.parentNode.clientHeight, this.containerWidth = e.element.parentNode.clientWidth), this.redrawTable());
        }
      }), this.resizeObserver.observe(e.element), t = window.getComputedStyle(e.element), this.table.element.parentNode && !this.table.rowManager.fixedHeight && (t.getPropertyValue("max-height") || t.getPropertyValue("min-height")) && (this.containerObserver = new ResizeObserver((i) => {
        if (!e.browserMobile || e.browserMobile && (!e.modules.edit || e.modules.edit && !e.modules.edit.currentCell)) {
          var s = Math.floor(i[0].contentRect.height), n = Math.floor(i[0].contentRect.width);
          (this.containerHeight != s || this.containerWidth != n) && (this.containerHeight = s, this.containerWidth = n, this.tableHeight = e.element.clientHeight, this.tableWidth = e.element.clientWidth), this.redrawTable();
        }
      }), this.containerObserver.observe(this.table.element.parentNode)), this.subscribe("table-resize", this.tableResized.bind(this))) : (this.binding = function() {
        (!e.browserMobile || e.browserMobile && (!e.modules.edit || e.modules.edit && !e.modules.edit.currentCell)) && (e.columnManager.rerenderColumns(!0), e.redraw());
      }, window.addEventListener("resize", this.binding)), this.subscribe("table-destroy", this.clearBindings.bind(this));
    }
  }
  initializeVisibilityObserver() {
    this.visibilityObserver = new IntersectionObserver((e) => {
      this.visible = e[0].isIntersecting, this.initialized ? this.visible && (this.redrawTable(this.initialRedraw), this.initialRedraw = !1) : (this.initialized = !0, this.initialRedraw = !this.visible);
    }), this.visibilityObserver.observe(this.table.element);
  }
  redrawTable(e) {
    this.initialized && this.visible && (this.table.columnManager.rerenderColumns(!0), this.table.redraw(e));
  }
  tableResized() {
    this.table.rowManager.redraw();
  }
  clearBindings() {
    this.binding && window.removeEventListener("resize", this.binding), this.resizeObserver && this.resizeObserver.unobserve(this.table.element), this.visibilityObserver && this.visibilityObserver.unobserve(this.table.element), this.containerObserver && this.containerObserver.unobserve(this.table.element.parentNode);
  }
}
F(jo, "moduleName", "resizeTable");
function Xd(r, e, t) {
  var i = document.createElement("div"), s = r.getRow()._row.modules.responsiveLayout;
  i.classList.add("tabulator-responsive-collapse-toggle"), i.innerHTML = `<svg class='tabulator-responsive-collapse-toggle-open' viewbox="0 0 24 24">
  <line x1="7" y1="12" x2="17" y2="12" fill="none" stroke-width="3" stroke-linecap="round" />
  <line y1="7" x1="12" y2="17" x2="12" fill="none" stroke-width="3" stroke-linecap="round" />
</svg>

<svg class='tabulator-responsive-collapse-toggle-close' viewbox="0 0 24 24">
  <line x1="7" y1="12" x2="17" y2="12"  fill="none" stroke-width="3" stroke-linecap="round" />
</svg>`, r.getElement().classList.add("tabulator-row-handle");
  function n(a) {
    var o = s.element;
    s.open = a, o && (s.open ? (i.classList.add("open"), o.style.display = "") : (i.classList.remove("open"), o.style.display = "none"));
  }
  return i.addEventListener("click", function(a) {
    a.stopImmediatePropagation(), n(!s.open), r.getTable().rowManager.adjustTableSize();
  }), n(s.open), i;
}
var Qd = {
  format: {
    formatters: {
      responsiveCollapse: Xd
    }
  }
};
class Bn extends $ {
  constructor(e) {
    super(e), this.columns = [], this.hiddenColumns = [], this.mode = "", this.index = 0, this.collapseFormatter = [], this.collapseStartOpen = !0, this.collapseHandleColumn = !1, this.registerTableOption("responsiveLayout", !1), this.registerTableOption("responsiveLayoutCollapseStartOpen", !0), this.registerTableOption("responsiveLayoutCollapseUseFormatters", !0), this.registerTableOption("responsiveLayoutCollapseFormatter", !1), this.registerColumnOption("responsive");
  }
  //generate responsive columns list
  initialize() {
    this.table.options.responsiveLayout && (this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("column-show", this.updateColumnVisibility.bind(this)), this.subscribe("column-hide", this.updateColumnVisibility.bind(this)), this.subscribe("columns-loaded", this.initializeResponsivity.bind(this)), this.subscribe("column-moved", this.initializeResponsivity.bind(this)), this.subscribe("column-add", this.initializeResponsivity.bind(this)), this.subscribe("column-delete", this.initializeResponsivity.bind(this)), this.subscribe("table-redrawing", this.tableRedraw.bind(this)), this.table.options.responsiveLayout === "collapse" && (this.subscribe("row-data-changed", this.generateCollapsedRowContent.bind(this)), this.subscribe("row-init", this.initializeRow.bind(this)), this.subscribe("row-layout", this.layoutRow.bind(this))));
  }
  tableRedraw(e) {
    ["fitColumns", "fitDataStretch"].indexOf(this.layoutMode()) === -1 && (e || this.update());
  }
  initializeResponsivity() {
    var e = [];
    this.mode = this.table.options.responsiveLayout, this.collapseFormatter = this.table.options.responsiveLayoutCollapseFormatter || this.formatCollapsedData, this.collapseStartOpen = this.table.options.responsiveLayoutCollapseStartOpen, this.hiddenColumns = [], this.collapseFormatter && (this.collapseFormatter = this.collapseFormatter.bind(this.table)), this.table.columnManager.columnsByIndex.forEach((t, i) => {
      t.modules.responsive && t.modules.responsive.order && t.modules.responsive.visible && (t.modules.responsive.index = i, e.push(t), !t.visible && this.mode === "collapse" && this.hiddenColumns.push(t));
    }), e = e.reverse(), e = e.sort((t, i) => {
      var s = i.modules.responsive.order - t.modules.responsive.order;
      return s || i.modules.responsive.index - t.modules.responsive.index;
    }), this.columns = e, this.mode === "collapse" && this.generateCollapsedContent();
    for (let t of this.table.columnManager.columnsByIndex)
      if (t.definition.formatter == "responsiveCollapse") {
        this.collapseHandleColumn = t;
        break;
      }
    this.collapseHandleColumn && (this.hiddenColumns.length ? this.collapseHandleColumn.show() : this.collapseHandleColumn.hide());
  }
  //define layout information
  initializeColumn(e) {
    var t = e.getDefinition();
    e.modules.responsive = { order: typeof t.responsive > "u" ? 1 : t.responsive, visible: t.visible !== !1 };
  }
  initializeRow(e) {
    var t;
    e.type !== "calc" && (t = document.createElement("div"), t.classList.add("tabulator-responsive-collapse"), e.modules.responsiveLayout = {
      element: t,
      open: this.collapseStartOpen
    }, this.collapseStartOpen || (t.style.display = "none"));
  }
  layoutRow(e) {
    var t = e.getElement();
    e.modules.responsiveLayout && (t.appendChild(e.modules.responsiveLayout.element), this.generateCollapsedRowContent(e));
  }
  //update column visibility
  updateColumnVisibility(e, t) {
    !t && e.modules.responsive && (e.modules.responsive.visible = e.visible, this.initializeResponsivity());
  }
  hideColumn(e) {
    var t = this.hiddenColumns.length;
    e.hide(!1, !0), this.mode === "collapse" && (this.hiddenColumns.unshift(e), this.generateCollapsedContent(), this.collapseHandleColumn && !t && this.collapseHandleColumn.show());
  }
  showColumn(e) {
    var t;
    e.show(!1, !0), e.setWidth(e.getWidth()), this.mode === "collapse" && (t = this.hiddenColumns.indexOf(e), t > -1 && this.hiddenColumns.splice(t, 1), this.generateCollapsedContent(), this.collapseHandleColumn && !this.hiddenColumns.length && this.collapseHandleColumn.hide());
  }
  //redraw columns to fit space
  update() {
    for (var e = !0; e; ) {
      let t = this.table.modules.layout.getMode() == "fitColumns" ? this.table.columnManager.getFlexBaseWidth() : this.table.columnManager.getWidth(), i = (this.table.options.headerVisible ? this.table.columnManager.element.clientWidth : this.table.element.clientWidth) - t;
      if (i < 0) {
        let s = this.columns[this.index];
        s ? (this.hideColumn(s), this.index++) : e = !1;
      } else {
        let s = this.columns[this.index - 1];
        s && i > 0 && i >= s.getWidth() ? (this.showColumn(s), this.index--) : e = !1;
      }
      this.table.rowManager.activeRowsCount || this.table.rowManager.renderEmptyScroll();
    }
  }
  generateCollapsedContent() {
    var e = this.table.rowManager.getDisplayRows();
    e.forEach((t) => {
      this.generateCollapsedRowContent(t);
    });
  }
  generateCollapsedRowContent(e) {
    var t, i;
    if (e.modules.responsiveLayout) {
      for (t = e.modules.responsiveLayout.element; t.firstChild; ) t.removeChild(t.firstChild);
      i = this.collapseFormatter(this.generateCollapsedRowData(e)), i && t.appendChild(i), e.calcHeight(!0);
    }
  }
  generateCollapsedRowData(e) {
    var t = e.getData(), i = [], s;
    return this.hiddenColumns.forEach((n) => {
      var a = n.getFieldValue(t);
      if (n.definition.title && n.field)
        if (n.modules.format && this.table.options.responsiveLayoutCollapseUseFormatters) {
          let o = function(l) {
            l();
          };
          s = {
            value: !1,
            data: {},
            getValue: function() {
              return a;
            },
            getData: function() {
              return t;
            },
            getType: function() {
              return "cell";
            },
            getElement: function() {
              return document.createElement("div");
            },
            getRow: function() {
              return e.getComponent();
            },
            getColumn: function() {
              return n.getComponent();
            },
            getTable: () => this.table
          }, i.push({
            field: n.field,
            title: n.definition.title,
            value: n.modules.format.formatter.call(this.table.modules.format, s, n.modules.format.params, o)
          });
        } else
          i.push({
            field: n.field,
            title: n.definition.title,
            value: a
          });
    }), i;
  }
  formatCollapsedData(e) {
    var t = document.createElement("table");
    return e.forEach((i) => {
      var s = document.createElement("tr"), n = document.createElement("td"), a = document.createElement("td"), o, l = document.createElement("strong");
      n.appendChild(l), this.modules.localize.bind("columns|" + i.field, function(h) {
        l.innerHTML = h || i.title;
      }), i.value instanceof Node ? (o = document.createElement("div"), o.appendChild(i.value), a.appendChild(o)) : a.innerHTML = i.value, s.appendChild(n), s.appendChild(a), t.appendChild(s);
    }), Object.keys(e).length ? t : "";
  }
}
F(Bn, "moduleName", "responsiveLayout"), F(Bn, "moduleExtensions", Qd);
function ec(r, e, t) {
  var i = document.createElement("input"), s = !1;
  if (i.type = "checkbox", i.setAttribute("aria-label", "Select Row"), this.table.modExists("selectRow", !0))
    if (i.addEventListener("click", (a) => {
      a.stopPropagation();
    }), typeof r.getRow == "function") {
      var n = r.getRow();
      n instanceof Vs ? (i.addEventListener("change", (a) => {
        this.table.options.selectableRowsRangeMode === "click" && s ? s = !1 : n.toggleSelect();
      }), this.table.options.selectableRowsRangeMode === "click" && i.addEventListener("click", (a) => {
        s = !0, this.table.modules.selectRow.handleComplexRowClick(n._row, a);
      }), i.checked = n.isSelected && n.isSelected(), this.table.modules.selectRow.registerRowSelectCheckbox(n, i)) : i = "";
    } else
      i.addEventListener("change", (a) => {
        this.table.modules.selectRow.selectedRows.length ? this.table.deselectRow() : this.table.selectRow(e.rowRange);
      }), this.table.modules.selectRow.registerHeaderSelectCheckbox(i);
  return i;
}
var tc = {
  format: {
    formatters: {
      rowSelection: ec
    }
  }
};
class Wn extends $ {
  constructor(e) {
    super(e), this.selecting = !1, this.lastClickedRow = !1, this.selectPrev = [], this.selectedRows = [], this.headerCheckboxElement = null, this.registerTableOption("selectableRows", "highlight"), this.registerTableOption("selectableRowsRangeMode", "drag"), this.registerTableOption("selectableRowsRollingSelection", !0), this.registerTableOption("selectableRowsPersistence", !0), this.registerTableOption("selectableRowsCheck", function(t, i) {
      return !0;
    }), this.registerTableFunction("selectRow", this.selectRows.bind(this)), this.registerTableFunction("deselectRow", this.deselectRows.bind(this)), this.registerTableFunction("toggleSelectRow", this.toggleRow.bind(this)), this.registerTableFunction("getSelectedRows", this.getSelectedRows.bind(this)), this.registerTableFunction("getSelectedData", this.getSelectedData.bind(this)), this.registerComponentFunction("row", "select", this.selectRows.bind(this)), this.registerComponentFunction("row", "deselect", this.deselectRows.bind(this)), this.registerComponentFunction("row", "toggleSelect", this.toggleRow.bind(this)), this.registerComponentFunction("row", "isSelected", this.isRowSelected.bind(this));
  }
  initialize() {
    this.deprecatedOptionsCheck(), this.table.options.selectableRows === "highlight" && this.table.options.selectableRange && (this.table.options.selectableRows = !1), this.table.options.selectableRows !== !1 && (this.subscribe("row-init", this.initializeRow.bind(this)), this.subscribe("row-deleting", this.rowDeleted.bind(this)), this.subscribe("rows-wipe", this.clearSelectionData.bind(this)), this.subscribe("rows-retrieve", this.rowRetrieve.bind(this)), this.table.options.selectableRows && !this.table.options.selectableRowsPersistence && this.subscribe("data-refreshing", this.deselectRows.bind(this)));
  }
  deprecatedOptionsCheck() {
  }
  rowRetrieve(e, t) {
    return e === "selected" ? this.selectedRows : t;
  }
  rowDeleted(e) {
    this._deselectRow(e, !0);
  }
  clearSelectionData(e) {
    var t = this.selectedRows.length;
    this.selecting = !1, this.lastClickedRow = !1, this.selectPrev = [], this.selectedRows = [], t && e !== !0 && this._rowSelectionChanged();
  }
  initializeRow(e) {
    var t = this, i = t.checkRowSelectability(e), s = e.getElement(), n = function() {
      setTimeout(function() {
        t.selecting = !1;
      }, 50), document.body.removeEventListener("mouseup", n);
    };
    e.modules.select = { selected: !1 }, s.classList.toggle("tabulator-selectable", i), s.classList.toggle("tabulator-unselectable", !i), t.checkRowSelectability(e) && t.table.options.selectableRows && t.table.options.selectableRows != "highlight" && (t.table.options.selectableRowsRangeMode === "click" ? s.addEventListener("click", this.handleComplexRowClick.bind(this, e)) : (s.addEventListener("click", function(a) {
      (!t.table.modExists("edit") || !t.table.modules.edit.getCurrentCell()) && t.table._clearSelection(), t.selecting || t.toggleRow(e);
    }), s.addEventListener("mousedown", function(a) {
      if (a.shiftKey)
        return t.table._clearSelection(), t.selecting = !0, t.selectPrev = [], document.body.addEventListener("mouseup", n), document.body.addEventListener("keyup", n), t.toggleRow(e), !1;
    }), s.addEventListener("mouseenter", function(a) {
      t.selecting && (t.table._clearSelection(), t.toggleRow(e), t.selectPrev[1] == e && t.toggleRow(t.selectPrev[0]));
    }), s.addEventListener("mouseout", function(a) {
      t.selecting && (t.table._clearSelection(), t.selectPrev.unshift(e));
    })));
  }
  handleComplexRowClick(e, t) {
    if (t.shiftKey) {
      this.table._clearSelection(), this.lastClickedRow = this.lastClickedRow || e;
      var i = this.table.rowManager.getDisplayRowIndex(this.lastClickedRow), s = this.table.rowManager.getDisplayRowIndex(e), n = i <= s ? i : s, a = i >= s ? i : s, o = this.table.rowManager.getDisplayRows().slice(0), l = o.splice(n, a - n + 1);
      t.ctrlKey || t.metaKey ? (l.forEach((h) => {
        h !== this.lastClickedRow && (this.table.options.selectableRows !== !0 && !this.isRowSelected(e) ? this.selectedRows.length < this.table.options.selectableRows && this.toggleRow(h) : this.toggleRow(h));
      }), this.lastClickedRow = e) : (this.deselectRows(void 0, !0), this.table.options.selectableRows !== !0 && l.length > this.table.options.selectableRows && (l = l.slice(0, this.table.options.selectableRows)), this.selectRows(l)), this.table._clearSelection();
    } else t.ctrlKey || t.metaKey ? (this.toggleRow(e), this.lastClickedRow = e) : (this.deselectRows(void 0, !0), this.selectRows(e), this.lastClickedRow = e);
  }
  checkRowSelectability(e) {
    return e && e.type === "row" ? this.table.options.selectableRowsCheck.call(this.table, e.getComponent()) : !1;
  }
  //toggle row selection
  toggleRow(e) {
    this.checkRowSelectability(e) && (e.modules.select && e.modules.select.selected ? this._deselectRow(e) : this._selectRow(e));
  }
  //select a number of rows
  selectRows(e) {
    var t = [], i, s;
    switch (typeof e) {
      case "undefined":
        i = this.table.rowManager.rows;
        break;
      case "number":
        i = this.table.rowManager.findRow(e);
        break;
      case "string":
        i = this.table.rowManager.findRow(e), i || (i = this.table.rowManager.getRows(e));
        break;
      default:
        i = e;
        break;
    }
    Array.isArray(i) ? i.length && (i.forEach((n) => {
      s = this._selectRow(n, !0, !0), s && t.push(s);
    }), this._rowSelectionChanged(!1, t)) : i && this._selectRow(i, !1, !0);
  }
  //select an individual row
  _selectRow(e, t, i) {
    if (!isNaN(this.table.options.selectableRows) && this.table.options.selectableRows !== !0 && !i && this.selectedRows.length >= this.table.options.selectableRows)
      if (this.table.options.selectableRowsRollingSelection)
        this._deselectRow(this.selectedRows[0]);
      else
        return !1;
    var s = this.table.rowManager.findRow(e);
    if (s) {
      if (this.selectedRows.indexOf(s) == -1)
        return s.getElement().classList.add("tabulator-selected"), s.modules.select || (s.modules.select = {}), s.modules.select.selected = !0, s.modules.select.checkboxEl && (s.modules.select.checkboxEl.checked = !0), this.selectedRows.push(s), this.table.options.dataTreeSelectPropagate && this.childRowSelection(s, !0), this.dispatchExternal("rowSelected", s.getComponent()), this._rowSelectionChanged(t, s), s;
    } else
      t || console.warn("Selection Error - No such row found, ignoring selection:" + e);
  }
  isRowSelected(e) {
    return this.selectedRows.indexOf(e) !== -1;
  }
  //deselect a number of rows
  deselectRows(e, t) {
    var i = [], s, n;
    switch (typeof e) {
      case "undefined":
        s = Object.assign([], this.selectedRows);
        break;
      case "number":
        s = this.table.rowManager.findRow(e);
        break;
      case "string":
        s = this.table.rowManager.findRow(e), s || (s = this.table.rowManager.getRows(e));
        break;
      default:
        s = e;
        break;
    }
    Array.isArray(s) ? s.length && (s.forEach((a) => {
      n = this._deselectRow(a, !0, !0), n && i.push(n);
    }), this._rowSelectionChanged(t, [], i)) : s && this._deselectRow(s, t, !0);
  }
  //deselect an individual row
  _deselectRow(e, t) {
    var i = this, s = i.table.rowManager.findRow(e), n, a;
    if (s) {
      if (n = i.selectedRows.findIndex(function(o) {
        return o == s;
      }), n > -1)
        return a = s.getElement(), a && a.classList.remove("tabulator-selected"), s.modules.select || (s.modules.select = {}), s.modules.select.selected = !1, s.modules.select.checkboxEl && (s.modules.select.checkboxEl.checked = !1), i.selectedRows.splice(n, 1), this.table.options.dataTreeSelectPropagate && this.childRowSelection(s, !1), this.dispatchExternal("rowDeselected", s.getComponent()), i._rowSelectionChanged(t, void 0, s), s;
    } else
      t || console.warn("Deselection Error - No such row found, ignoring selection:" + e);
  }
  getSelectedData() {
    var e = [];
    return this.selectedRows.forEach(function(t) {
      e.push(t.getData());
    }), e;
  }
  getSelectedRows() {
    var e = [];
    return this.selectedRows.forEach(function(t) {
      e.push(t.getComponent());
    }), e;
  }
  _rowSelectionChanged(e, t = [], i = []) {
    this.headerCheckboxElement && (this.selectedRows.length === 0 ? (this.headerCheckboxElement.checked = !1, this.headerCheckboxElement.indeterminate = !1) : this.table.rowManager.rows.length === this.selectedRows.length ? (this.headerCheckboxElement.checked = !0, this.headerCheckboxElement.indeterminate = !1) : (this.headerCheckboxElement.indeterminate = !0, this.headerCheckboxElement.checked = !1)), e || (Array.isArray(t) || (t = [t]), t = t.map((s) => s.getComponent()), Array.isArray(i) || (i = [i]), i = i.map((s) => s.getComponent()), this.dispatchExternal("rowSelectionChanged", this.getSelectedData(), this.getSelectedRows(), t, i));
  }
  registerRowSelectCheckbox(e, t) {
    e._row.modules.select || (e._row.modules.select = {}), e._row.modules.select.checkboxEl = t;
  }
  registerHeaderSelectCheckbox(e) {
    this.headerCheckboxElement = e;
  }
  childRowSelection(e, t) {
    var i = this.table.modules.dataTree.getChildren(e, !0, !0);
    if (t)
      for (let s of i)
        this._selectRow(s, !0);
    else
      for (let s of i)
        this._deselectRow(s, !0);
  }
}
F(Wn, "moduleName", "selectRow"), F(Wn, "moduleExtensions", tc);
class ic {
  constructor(e) {
    return this._range = e, new Proxy(this, {
      get: function(t, i, s) {
        return typeof t[i] < "u" ? t[i] : t._range.table.componentFunctionBinder.handle("range", t._range, i);
      }
    });
  }
  getElement() {
    return this._range.element;
  }
  getData() {
    return this._range.getData();
  }
  getCells() {
    return this._range.getCells(!0, !0);
  }
  getStructuredCells() {
    return this._range.getStructuredCells();
  }
  getRows() {
    return this._range.getRows().map((e) => e.getComponent());
  }
  getColumns() {
    return this._range.getColumns().map((e) => e.getComponent());
  }
  getBounds() {
    return this._range.getBounds();
  }
  getTopEdge() {
    return this._range.top;
  }
  getBottomEdge() {
    return this._range.bottom;
  }
  getLeftEdge() {
    return this._range.left;
  }
  getRightEdge() {
    return this._range.right;
  }
  setBounds(e, t) {
    this._range.destroyedGuard("setBounds") && this._range.setBounds(e && e._cell, t && t._cell);
  }
  setStartBound(e) {
    this._range.destroyedGuard("setStartBound") && (this._range.setEndBound(e && e._cell), this._range.rangeManager.layoutElement());
  }
  setEndBound(e) {
    this._range.destroyedGuard("setEndBound") && (this._range.setEndBound(e && e._cell), this._range.rangeManager.layoutElement());
  }
  clearValues() {
    this._range.destroyedGuard("clearValues") && this._range.clearValues();
  }
  remove() {
    this._range.destroyedGuard("remove") && this._range.destroy(!0);
  }
}
class sc extends Te {
  constructor(e, t, i, s) {
    super(e), this.rangeManager = t, this.element = null, this.initialized = !1, this.initializing = {
      start: !1,
      end: !1
    }, this.destroyed = !1, this.top = 0, this.bottom = 0, this.left = 0, this.right = 0, this.table = e, this.start = { row: 0, col: 0 }, this.end = { row: 0, col: 0 }, this.rangeManager.rowHeader && (this.left = 1, this.right = 1, this.start.col = 1, this.end.col = 1), this.initElement(), setTimeout(() => {
      this.initBounds(i, s);
    });
  }
  initElement() {
    this.element = document.createElement("div"), this.element.classList.add("tabulator-range");
  }
  initBounds(e, t) {
    this._updateMinMax(), e && this.setBounds(e, t || e);
  }
  ///////////////////////////////////
  ///////   Boundary Setup    ///////
  ///////////////////////////////////
  setStart(e, t) {
    (this.start.row !== e || this.start.col !== t) && (this.start.row = e, this.start.col = t, this.initializing.start = !0, this._updateMinMax());
  }
  setEnd(e, t) {
    (this.end.row !== e || this.end.col !== t) && (this.end.row = e, this.end.col = t, this.initializing.end = !0, this._updateMinMax());
  }
  setBounds(e, t, i) {
    e && this.setStartBound(e), this.setEndBound(t || e), this.rangeManager.layoutElement(i);
  }
  setStartBound(e) {
    var t, i;
    e.type === "column" ? this.rangeManager.columnSelection && this.setStart(0, e.getPosition() - 1) : (t = e.row.position - 1, i = e.column.getPosition() - 1, e.column === this.rangeManager.rowHeader ? this.setStart(t, 1) : this.setStart(t, i));
  }
  setEndBound(e) {
    var t = this._getTableRows().length, i, s, n;
    e.type === "column" ? this.rangeManager.columnSelection && (this.rangeManager.selecting === "column" ? this.setEnd(t - 1, e.getPosition() - 1) : this.rangeManager.selecting === "cell" && this.setEnd(0, e.getPosition() - 1)) : (i = e.row.position - 1, s = e.column.getPosition() - 1, n = e.column === this.rangeManager.rowHeader, this.rangeManager.selecting === "row" ? this.setEnd(i, this._getTableColumns().length - 1) : this.rangeManager.selecting !== "row" && n ? this.setEnd(i, 0) : this.rangeManager.selecting === "column" ? this.setEnd(t - 1, s) : this.setEnd(i, s));
  }
  _updateMinMax() {
    this.top = Math.min(this.start.row, this.end.row), this.bottom = Math.max(this.start.row, this.end.row), this.left = Math.min(this.start.col, this.end.col), this.right = Math.max(this.start.col, this.end.col), this.initialized ? this.dispatchExternal("rangeChanged", this.getComponent()) : this.initializing.start && this.initializing.end && (this.initialized = !0, this.dispatchExternal("rangeAdded", this.getComponent()));
  }
  _getTableColumns() {
    return this.table.columnManager.getVisibleColumnsByIndex();
  }
  _getTableRows() {
    return this.table.rowManager.getDisplayRows().filter((e) => e.type === "row");
  }
  ///////////////////////////////////
  ///////      Rendering      ///////
  ///////////////////////////////////
  layout() {
    var e = this.table.rowManager.renderer.vDomTop, t = this.table.rowManager.renderer.vDomBottom, i = this.table.columnManager.renderer.leftCol, s = this.table.columnManager.renderer.rightCol, n, a, o, l, h, u, d, f, b, T;
    this.table.options.renderHorizontal === "virtual" && this.rangeManager.rowHeader && (s += 1), e == null && (e = 0), t == null && (t = 1 / 0), i == null && (i = 0), s == null && (s = 1 / 0), this.overlaps(i, e, s, t) && (n = Math.max(this.top, e), a = Math.min(this.bottom, t), o = Math.max(this.left, i), l = Math.min(this.right, s), h = this.rangeManager.getCell(n, o), u = this.rangeManager.getCell(a, l), d = h.getElement(), f = u.getElement(), b = h.row.getElement(), T = u.row.getElement(), this.element.classList.add("tabulator-range-active"), this.table.rtl ? (this.element.style.right = b.offsetWidth - d.offsetLeft - d.offsetWidth + "px", this.element.style.width = d.offsetLeft + d.offsetWidth - f.offsetLeft + "px") : (this.element.style.left = b.offsetLeft + d.offsetLeft + "px", this.element.style.width = f.offsetLeft + f.offsetWidth - d.offsetLeft + "px"), this.element.style.top = b.offsetTop + "px", this.element.style.height = T.offsetTop + T.offsetHeight - b.offsetTop + "px");
  }
  atTopLeft(e) {
    return e.row.position - 1 === this.top && e.column.getPosition() - 1 === this.left;
  }
  atBottomRight(e) {
    return e.row.position - 1 === this.bottom && e.column.getPosition() - 1 === this.right;
  }
  occupies(e) {
    return this.occupiesRow(e.row) && this.occupiesColumn(e.column);
  }
  occupiesRow(e) {
    return this.top <= e.position - 1 && e.position - 1 <= this.bottom;
  }
  occupiesColumn(e) {
    return this.left <= e.getPosition() - 1 && e.getPosition() - 1 <= this.right;
  }
  overlaps(e, t, i, s) {
    return !(this.left > i || e > this.right || this.top > s || t > this.bottom);
  }
  getData() {
    var e = [], t = this.getRows(), i = this.getColumns();
    return t.forEach((s) => {
      var n = s.getData(), a = {};
      i.forEach((o) => {
        a[o.field] = n[o.field];
      }), e.push(a);
    }), e;
  }
  getCells(e, t) {
    var i = [], s = this.getRows(), n = this.getColumns();
    return e ? i = s.map((a) => {
      var o = [];
      return a.getCells().forEach((l) => {
        n.includes(l.column) && o.push(t ? l.getComponent() : l);
      }), o;
    }) : s.forEach((a) => {
      a.getCells().forEach((o) => {
        n.includes(o.column) && i.push(t ? o.getComponent() : o);
      });
    }), i;
  }
  getStructuredCells() {
    return this.getCells(!0, !0);
  }
  getRows() {
    return this._getTableRows().slice(this.top, this.bottom + 1);
  }
  getColumns() {
    return this._getTableColumns().slice(this.left, this.right + 1);
  }
  clearValues() {
    var e = this.getCells(), t = this.table.options.selectableRangeClearCellsValue;
    this.table.blockRedraw(), e.forEach((i) => {
      i.setValue(t);
    }), this.table.restoreRedraw();
  }
  getBounds(e) {
    var t = this.getCells(!1, e), i = {
      start: null,
      end: null
    };
    return t.length ? (i.start = t[0], i.end = t[t.length - 1]) : console.warn("No bounds defined on range"), i;
  }
  getComponent() {
    return this.component || (this.component = new ic(this)), this.component;
  }
  destroy(e) {
    this.destroyed = !0, this.element.remove(), e && this.rangeManager.rangeRemoved(this), this.initialized && this.dispatchExternal("rangeRemoved", this.getComponent());
  }
  destroyedGuard(e) {
    return this.destroyed && console.warn("You cannot call the " + e + " function on a destroyed range"), !this.destroyed;
  }
}
var nc = {
  rangeJumpUp: ["ctrl + 38", "meta + 38"],
  rangeJumpDown: ["ctrl + 40", "meta + 40"],
  rangeJumpLeft: ["ctrl + 37", "meta + 37"],
  rangeJumpRight: ["ctrl + 39", "meta + 39"],
  rangeExpandUp: "shift + 38",
  rangeExpandDown: "shift + 40",
  rangeExpandLeft: "shift + 37",
  rangeExpandRight: "shift + 39",
  rangeExpandJumpUp: ["ctrl + shift + 38", "meta + shift + 38"],
  rangeExpandJumpDown: ["ctrl + shift + 40", "meta + shift + 40"],
  rangeExpandJumpLeft: ["ctrl + shift + 37", "meta + shift + 37"],
  rangeExpandJumpRight: ["ctrl + shift + 39", "meta + shift + 39"]
}, rc = {
  rangeJumpLeft: function(r) {
    this.dispatch("keybinding-nav-range", r, "left", !0, !1);
  },
  rangeJumpRight: function(r) {
    this.dispatch("keybinding-nav-range", r, "right", !0, !1);
  },
  rangeJumpUp: function(r) {
    this.dispatch("keybinding-nav-range", r, "up", !0, !1);
  },
  rangeJumpDown: function(r) {
    this.dispatch("keybinding-nav-range", r, "down", !0, !1);
  },
  rangeExpandLeft: function(r) {
    this.dispatch("keybinding-nav-range", r, "left", !1, !0);
  },
  rangeExpandRight: function(r) {
    this.dispatch("keybinding-nav-range", r, "right", !1, !0);
  },
  rangeExpandUp: function(r) {
    this.dispatch("keybinding-nav-range", r, "up", !1, !0);
  },
  rangeExpandDown: function(r) {
    this.dispatch("keybinding-nav-range", r, "down", !1, !0);
  },
  rangeExpandJumpLeft: function(r) {
    this.dispatch("keybinding-nav-range", r, "left", !0, !0);
  },
  rangeExpandJumpRight: function(r) {
    this.dispatch("keybinding-nav-range", r, "right", !0, !0);
  },
  rangeExpandJumpUp: function(r) {
    this.dispatch("keybinding-nav-range", r, "up", !0, !0);
  },
  rangeExpandJumpDown: function(r) {
    this.dispatch("keybinding-nav-range", r, "down", !0, !0);
  }
}, ac = {
  range: function(r) {
    var e = [], t = this.table.modules.selectRange.activeRange, i = !1, s, n, a, o, l;
    return l = r.length, t && (s = t.getBounds(), n = s.start, s.start === s.end && (i = !0), n && (e = this.table.rowManager.activeRows.slice(), a = e.indexOf(n.row), i ? o = r.length : o = e.indexOf(s.end.row) - a + 1, a > -1 && (this.table.blockRedraw(), e = e.slice(a, a + o), e.forEach((h, u) => {
      h.updateData(r[u % l]);
    }), this.table.restoreRedraw()))), e;
  }
}, oc = {
  range: function(r) {
    var e = [], t = [], i = this.table.modules.selectRange.activeRange, s = !1, n, a, o, l, h;
    return i && (n = i.getBounds(), a = n.start, n.start === n.end && (s = !0), a && (r = r.split(`
`), r.forEach(function(u) {
      e.push(u.split("	"));
    }), e.length && (l = this.table.columnManager.getVisibleColumnsByIndex(), h = l.indexOf(a.column), h > -1))) ? (s ? o = e[0].length : o = l.indexOf(n.end.column) - h + 1, l = l.slice(h, h + o), e.forEach((u) => {
      var d = {}, f = u.length;
      l.forEach(function(b, T) {
        d[b.field] = u[T % f];
      }), t.push(d);
    }), t) : !1;
  }
}, lc = {
  range: function() {
    var r = this.modules.selectRange.selectedColumns();
    return this.columnManager.rowHeader && r.unshift(this.columnManager.rowHeader), r;
  }
}, hc = {
  range: function() {
    return this.modules.selectRange.selectedRows();
  }
}, uc = {
  keybindings: {
    bindings: nc,
    actions: rc
  },
  clipboard: {
    pasteActions: ac,
    pasteParsers: oc
  },
  export: {
    columnLookups: lc,
    rowLookups: hc
  }
};
class Ms extends $ {
  constructor(e) {
    super(e), this.selecting = "cell", this.mousedown = !1, this.ranges = [], this.overlay = null, this.rowHeader = null, this.layoutChangeTimeout = null, this.columnSelection = !1, this.rowSelection = !1, this.maxRanges = 0, this.activeRange = !1, this.blockKeydown = !1, this.keyDownEvent = this._handleKeyDown.bind(this), this.mouseUpEvent = this._handleMouseUp.bind(this), this.registerTableOption("selectableRange", !1), this.registerTableOption("selectableRangeColumns", !1), this.registerTableOption("selectableRangeRows", !1), this.registerTableOption("selectableRangeClearCells", !1), this.registerTableOption("selectableRangeClearCellsValue", void 0), this.registerTableOption("selectableRangeAutoFocus", !0), this.registerTableFunction("getRangesData", this.getRangesData.bind(this)), this.registerTableFunction("getRanges", this.getRanges.bind(this)), this.registerTableFunction("addRange", this.addRangeFromComponent.bind(this)), this.registerComponentFunction("cell", "getRanges", this.cellGetRanges.bind(this)), this.registerComponentFunction("row", "getRanges", this.rowGetRanges.bind(this)), this.registerComponentFunction("column", "getRanges", this.colGetRanges.bind(this));
  }
  ///////////////////////////////////
  ///////    Initialization   ///////
  ///////////////////////////////////
  initialize() {
    this.options("selectableRange") && (this.options("selectableRows") ? console.warn("SelectRange functionality cannot be used in conjunction with row selection") : (this.maxRanges = this.options("selectableRange"), this.initializeTable(), this.initializeWatchers()), this.options("columns").findIndex((e) => e.frozen) > 0 && console.warn("Having frozen column in arbitrary position with selectRange option may result in unpredictable behavior."), this.options("columns").filter((e) => e.frozen) > 1 && console.warn("Having multiple frozen columns with selectRange option may result in unpredictable behavior."));
  }
  initializeTable() {
    this.overlay = document.createElement("div"), this.overlay.classList.add("tabulator-range-overlay"), this.rangeContainer = document.createElement("div"), this.rangeContainer.classList.add("tabulator-range-container"), this.activeRangeCellElement = document.createElement("div"), this.activeRangeCellElement.classList.add("tabulator-range-cell-active"), this.overlay.appendChild(this.rangeContainer), this.overlay.appendChild(this.activeRangeCellElement), this.table.rowManager.element.addEventListener("keydown", this.keyDownEvent), this.resetRanges(), this.table.rowManager.element.appendChild(this.overlay), this.table.columnManager.element.setAttribute("tabindex", 0), this.table.element.classList.add("tabulator-ranges");
  }
  initializeWatchers() {
    this.columnSelection = this.options("selectableRangeColumns"), this.rowSelection = this.options("selectableRangeRows"), this.subscribe("column-init", this.initializeColumn.bind(this)), this.subscribe("column-mousedown", this.handleColumnMouseDown.bind(this)), this.subscribe("column-mousemove", this.handleColumnMouseMove.bind(this)), this.subscribe("column-resized", this.handleColumnResized.bind(this)), this.subscribe("column-moving", this.handleColumnMoving.bind(this)), this.subscribe("column-moved", this.handleColumnMoved.bind(this)), this.subscribe("column-width", this.layoutChange.bind(this)), this.subscribe("column-height", this.layoutChange.bind(this)), this.subscribe("column-resized", this.layoutChange.bind(this)), this.subscribe("columns-loaded", this.updateHeaderColumn.bind(this)), this.subscribe("cell-height", this.layoutChange.bind(this)), this.subscribe("cell-rendered", this.renderCell.bind(this)), this.subscribe("cell-mousedown", this.handleCellMouseDown.bind(this)), this.subscribe("cell-mousemove", this.handleCellMouseMove.bind(this)), this.subscribe("cell-click", this.handleCellClick.bind(this)), this.subscribe("cell-editing", this.handleEditingCell.bind(this)), this.subscribe("page-changed", this.redraw.bind(this)), this.subscribe("scroll-vertical", this.layoutChange.bind(this)), this.subscribe("scroll-horizontal", this.layoutChange.bind(this)), this.subscribe("data-destroy", this.tableDestroyed.bind(this)), this.subscribe("data-processed", this.resetRanges.bind(this)), this.subscribe("table-layout", this.layoutElement.bind(this)), this.subscribe("table-redraw", this.redraw.bind(this)), this.subscribe("table-destroy", this.tableDestroyed.bind(this)), this.subscribe("edit-editor-clear", this.finishEditingCell.bind(this)), this.subscribe("edit-blur", this.restoreFocus.bind(this)), this.subscribe("keybinding-nav-prev", this.keyNavigate.bind(this, "left")), this.subscribe("keybinding-nav-next", this.keyNavigate.bind(this, "right")), this.subscribe("keybinding-nav-left", this.keyNavigate.bind(this, "left")), this.subscribe("keybinding-nav-right", this.keyNavigate.bind(this, "right")), this.subscribe("keybinding-nav-up", this.keyNavigate.bind(this, "up")), this.subscribe("keybinding-nav-down", this.keyNavigate.bind(this, "down")), this.subscribe("keybinding-nav-range", this.keyNavigateRange.bind(this));
  }
  initializeColumn(e) {
    this.columnSelection && e.definition.headerSort && this.options("headerSortClickElement") !== "icon" && console.warn("Using column headerSort with selectableRangeColumns option may result in unpredictable behavior. Consider using headerSortClickElement: 'icon'."), e.modules.edit;
  }
  updateHeaderColumn() {
    var e;
    this.rowSelection && (this.rowHeader = this.table.columnManager.getVisibleColumnsByIndex()[0], this.rowHeader && (this.rowHeader.definition.cssClass = this.rowHeader.definition.cssClass + " tabulator-range-row-header", this.rowHeader.definition.headerSort && console.warn("Using column headerSort with selectableRangeRows option may result in unpredictable behavior"), this.rowHeader.definition.editor && console.warn("Using column editor with selectableRangeRows option may result in unpredictable behavior"))), this.table.modules.frozenColumns && this.table.modules.frozenColumns.active && (e = this.table.modules.frozenColumns.getFrozenColumns(), (e.length > 1 || e.length === 1 && e[0] !== this.rowHeader) && console.warn("Using frozen columns that are not the range header in combination with the selectRange option may result in unpredictable behavior"));
  }
  ///////////////////////////////////
  ///////   Table Functions   ///////
  ///////////////////////////////////
  getRanges() {
    return this.ranges.map((e) => e.getComponent());
  }
  getRangesData() {
    return this.ranges.map((e) => e.getData());
  }
  addRangeFromComponent(e, t) {
    return e = e ? e._cell : null, t = t ? t._cell : null, this.addRange(e, t);
  }
  ///////////////////////////////////
  /////// Component Functions ///////
  ///////////////////////////////////
  cellGetRanges(e) {
    var t = [];
    return e.column === this.rowHeader ? t = this.ranges.filter((i) => i.occupiesRow(e.row)) : t = this.ranges.filter((i) => i.occupies(e)), t.map((i) => i.getComponent());
  }
  rowGetRanges(e) {
    var t = this.ranges.filter((i) => i.occupiesRow(e));
    return t.map((i) => i.getComponent());
  }
  colGetRanges(e) {
    var t = this.ranges.filter((i) => i.occupiesColumn(e));
    return t.map((i) => i.getComponent());
  }
  ///////////////////////////////////
  ////////// Event Handlers /////////
  ///////////////////////////////////
  _handleMouseUp(e) {
    this.mousedown = !1, document.removeEventListener("mouseup", this.mouseUpEvent);
  }
  _handleKeyDown(e) {
    if (!this.blockKeydown && (!this.table.modules.edit || this.table.modules.edit && !this.table.modules.edit.currentCell)) {
      if (e.key === "Enter") {
        if (this.table.modules.edit && this.table.modules.edit.currentCell)
          return;
        this.table.modules.edit.editCell(this.getActiveCell()), e.preventDefault();
      }
      (e.key === "Backspace" || e.key === "Delete") && this.options("selectableRangeClearCells") && this.activeRange && this.activeRange.clearValues();
    }
  }
  initializeFocus(e) {
    var t;
    this.restoreFocus();
    try {
      document.selection ? (t = document.body.createTextRange(), t.moveToElementText(e.getElement()), t.select()) : window.getSelection && (t = document.createRange(), t.selectNode(e.getElement()), window.getSelection().removeAllRanges(), window.getSelection().addRange(t));
    } catch {
    }
  }
  restoreFocus(e) {
    return this.table.rowManager.element.focus(), !0;
  }
  ///////////////////////////////////
  ////// Column Functionality ///////
  ///////////////////////////////////
  handleColumnResized(e) {
    var t;
    this.selecting !== "column" && this.selecting !== "all" || (t = this.ranges.some((i) => i.occupiesColumn(e)), t && this.ranges.forEach((i) => {
      var s = i.getColumns(!0);
      s.forEach((n) => {
        n !== e && n.setWidth(e.width);
      });
    }));
  }
  handleColumnMoving(e, t) {
    this.resetRanges().setBounds(t), this.overlay.style.visibility = "hidden";
  }
  handleColumnMoved(e, t, i) {
    this.activeRange.setBounds(e), this.layoutElement();
  }
  handleColumnMouseDown(e, t) {
    e.button === 2 && (this.selecting === "column" || this.selecting === "all") && this.activeRange.occupiesColumn(t) || this.table.options.movableColumns && this.selecting === "column" && this.activeRange.occupiesColumn(t) || (this.mousedown = !0, document.addEventListener("mouseup", this.mouseUpEvent), this.newSelection(e, t));
  }
  handleColumnMouseMove(e, t) {
    t === this.rowHeader || !this.mousedown || this.selecting === "all" || this.activeRange.setBounds(!1, t, !0);
  }
  ///////////////////////////////////
  //////// Cell Functionality ///////
  ///////////////////////////////////
  renderCell(e) {
    var t = e.getElement(), i = this.ranges.findIndex((s) => s.occupies(e));
    t.classList.toggle("tabulator-range-selected", i !== -1), t.classList.toggle("tabulator-range-only-cell-selected", this.ranges.length === 1 && this.ranges[0].atTopLeft(e) && this.ranges[0].atBottomRight(e)), t.dataset.range = i;
  }
  handleCellMouseDown(e, t) {
    e.button === 2 && (this.activeRange.occupies(t) || (this.selecting === "row" || this.selecting === "all") && this.activeRange.occupiesRow(t.row)) || (this.mousedown = !0, document.addEventListener("mouseup", this.mouseUpEvent), this.newSelection(e, t));
  }
  handleCellMouseMove(e, t) {
    !this.mousedown || this.selecting === "all" || this.activeRange.setBounds(!1, t, !0);
  }
  handleCellClick(e, t) {
    this.initializeFocus(t);
  }
  handleEditingCell(e) {
    this.activeRange && this.activeRange.setBounds(e);
  }
  finishEditingCell() {
    this.blockKeydown = !0, this.table.rowManager.element.focus(), setTimeout(() => {
      this.blockKeydown = !1;
    }, 10);
  }
  ///////////////////////////////////
  ///////     Navigation      ///////
  ///////////////////////////////////
  keyNavigate(e, t) {
    this.navigate(!1, !1, e), t.preventDefault();
  }
  keyNavigateRange(e, t, i, s) {
    this.navigate(i, s, t), e.preventDefault();
  }
  navigate(e, t, i) {
    var s = !1, n, a, o, l, h, u, d, f, b, T, E;
    if (this.table.modules.edit && this.table.modules.edit.currentCell)
      return !1;
    if (this.ranges.length > 1 && (this.ranges = this.ranges.filter((S) => S === this.activeRange ? (S.setEnd(S.start.row, S.start.col), !0) : (S.destroy(), !1))), n = this.activeRange, o = {
      top: n.top,
      bottom: n.bottom,
      left: n.left,
      right: n.right
    }, a = t ? n.end : n.start, l = a.row, h = a.col, e)
      switch (i) {
        case "left":
          h = this.findJumpCellLeft(n.start.row, a.col);
          break;
        case "right":
          h = this.findJumpCellRight(n.start.row, a.col);
          break;
        case "up":
          l = this.findJumpCellUp(a.row, n.start.col);
          break;
        case "down":
          l = this.findJumpCellDown(a.row, n.start.col);
          break;
      }
    else {
      if (t && (this.selecting === "row" && (i === "left" || i === "right") || this.selecting === "column" && (i === "up" || i === "down")))
        return;
      switch (i) {
        case "left":
          h = Math.max(h - 1, 0);
          break;
        case "right":
          h = Math.min(h + 1, this.getTableColumns().length - 1);
          break;
        case "up":
          l = Math.max(l - 1, 0);
          break;
        case "down":
          l = Math.min(l + 1, this.getTableRows().length - 1);
          break;
      }
    }
    if (this.rowHeader && h === 0 && (h = 1), t || n.setStart(l, h), n.setEnd(l, h), t || (this.selecting = "cell"), s = o.top !== n.top || o.bottom !== n.bottom || o.left !== n.left || o.right !== n.right, s)
      return u = this.getRowByRangePos(n.end.row), d = this.getColumnByRangePos(n.end.col), f = u.getElement().getBoundingClientRect(), T = d.getElement().getBoundingClientRect(), b = this.table.rowManager.getElement().getBoundingClientRect(), E = this.table.columnManager.getElement().getBoundingClientRect(), f.top >= b.top && f.bottom <= b.bottom || (u.getElement().parentNode && d.getElement().parentNode ? this.autoScroll(n, u.getElement(), d.getElement()) : u.getComponent().scrollTo(void 0, !1)), T.left >= E.left + this.getRowHeaderWidth() && T.right <= E.right || (u.getElement().parentNode && d.getElement().parentNode ? this.autoScroll(n, u.getElement(), d.getElement()) : d.getComponent().scrollTo(void 0, !1)), this.layoutElement(), !0;
  }
  rangeRemoved(e) {
    this.ranges = this.ranges.filter((t) => t !== e), this.activeRange === e && (this.ranges.length ? this.activeRange = this.ranges[this.ranges.length - 1] : this.addRange()), this.layoutElement();
  }
  findJumpRow(e, t, i, s, n) {
    return i && (t = t.reverse()), this.findJumpItem(s, n, t, function(a) {
      return a.getData()[e.getField()];
    });
  }
  findJumpCol(e, t, i, s, n) {
    return i && (t = t.reverse()), this.findJumpItem(s, n, t, function(a) {
      return e.getData()[a.getField()];
    });
  }
  findJumpItem(e, t, i, s) {
    var n;
    for (let a of i) {
      let o = s(a);
      if (e) {
        if (n = a, o)
          break;
      } else if (t) {
        if (n = a, o)
          break;
      } else if (o)
        n = a;
      else
        break;
    }
    return n;
  }
  findJumpCellLeft(e, t) {
    var i = this.getRowByRangePos(e), s = this.getTableColumns(), n = this.isEmpty(i.getData()[s[t].getField()]), a = s[t - 1] ? this.isEmpty(i.getData()[s[t - 1].getField()]) : !1, o = this.rowHeader ? s.slice(1, t) : s.slice(0, t), l = this.findJumpCol(i, o, !0, n, a);
    return l ? l.getPosition() - 1 : t;
  }
  findJumpCellRight(e, t) {
    var i = this.getRowByRangePos(e), s = this.getTableColumns(), n = this.isEmpty(i.getData()[s[t].getField()]), a = s[t + 1] ? this.isEmpty(i.getData()[s[t + 1].getField()]) : !1, o = this.findJumpCol(i, s.slice(t + 1, s.length), !1, n, a);
    return o ? o.getPosition() - 1 : t;
  }
  findJumpCellUp(e, t) {
    var i = this.getColumnByRangePos(t), s = this.getTableRows(), n = this.isEmpty(s[e].getData()[i.getField()]), a = s[e - 1] ? this.isEmpty(s[e - 1].getData()[i.getField()]) : !1, o = this.findJumpRow(i, s.slice(0, e), !0, n, a);
    return o ? o.position - 1 : e;
  }
  findJumpCellDown(e, t) {
    var i = this.getColumnByRangePos(t), s = this.getTableRows(), n = this.isEmpty(s[e].getData()[i.getField()]), a = s[e + 1] ? this.isEmpty(s[e + 1].getData()[i.getField()]) : !1, o = this.findJumpRow(i, s.slice(e + 1, s.length), !1, n, a);
    return o ? o.position - 1 : e;
  }
  ///////////////////////////////////
  ///////      Selection      ///////
  ///////////////////////////////////
  newSelection(e, t) {
    var i;
    if (t.type === "column") {
      if (!this.columnSelection)
        return;
      if (t === this.rowHeader) {
        i = this.resetRanges(), this.selecting = "all";
        var s, n = this.getCell(-1, -1);
        this.rowHeader ? s = this.getCell(0, 1) : s = this.getCell(0, 0), i.setBounds(s, n);
        return;
      } else
        this.selecting = "column";
    } else t.column === this.rowHeader ? this.selecting = "row" : this.selecting = "cell";
    e.shiftKey ? this.activeRange.setBounds(!1, t) : e.ctrlKey ? this.addRange().setBounds(t) : this.resetRanges().setBounds(t);
  }
  autoScroll(e, t, i) {
    var s = this.table.rowManager.element, n, a, o, l;
    typeof t > "u" && (t = this.getRowByRangePos(e.end.row).getElement()), typeof i > "u" && (i = this.getColumnByRangePos(e.end.col).getElement()), n = {
      left: i.offsetLeft,
      right: i.offsetLeft + i.offsetWidth,
      top: t.offsetTop,
      bottom: t.offsetTop + t.offsetHeight
    }, a = {
      left: s.scrollLeft + this.getRowHeaderWidth(),
      right: Math.ceil(s.scrollLeft + s.clientWidth),
      top: s.scrollTop,
      bottom: s.scrollTop + s.offsetHeight - this.table.rowManager.scrollbarWidth
    }, o = a.left < n.left && n.left < a.right && a.left < n.right && n.right < a.right, l = a.top < n.top && n.top < a.bottom && a.top < n.bottom && n.bottom < a.bottom, o || (n.left < a.left ? s.scrollLeft = n.left - this.getRowHeaderWidth() : n.right > a.right && (s.scrollLeft = Math.min(n.right - s.clientWidth, n.left - this.getRowHeaderWidth()))), l || (n.top < a.top ? s.scrollTop = n.top : n.bottom > a.bottom && (s.scrollTop = n.bottom - s.clientHeight));
  }
  ///////////////////////////////////
  ///////       Layout        ///////
  ///////////////////////////////////
  layoutChange() {
    this.overlay.style.visibility = "hidden", clearTimeout(this.layoutChangeTimeout), this.layoutChangeTimeout = setTimeout(this.layoutRanges.bind(this), 200);
  }
  redraw(e) {
    e && (this.selecting = "cell", this.resetRanges(), this.layoutElement());
  }
  layoutElement(e) {
    var t;
    e ? t = this.table.rowManager.getVisibleRows(!0) : t = this.table.rowManager.getRows(), t.forEach((i) => {
      i.type === "row" && (this.layoutRow(i), i.cells.forEach((s) => this.renderCell(s)));
    }), this.getTableColumns().forEach((i) => {
      this.layoutColumn(i);
    }), this.layoutRanges();
  }
  layoutRow(e) {
    var t = e.getElement(), i = !1, s = this.ranges.some((n) => n.occupiesRow(e));
    this.selecting === "row" ? i = s : this.selecting === "all" && (i = !0), t.classList.toggle("tabulator-range-selected", i), t.classList.toggle("tabulator-range-highlight", s);
  }
  layoutColumn(e) {
    var t = e.getElement(), i = !1, s = this.ranges.some((n) => n.occupiesColumn(e));
    this.selecting === "column" ? i = s : this.selecting === "all" && (i = !0), t.classList.toggle("tabulator-range-selected", i), t.classList.toggle("tabulator-range-highlight", s);
  }
  layoutRanges() {
    var e, t, i;
    this.table.initialized && (e = this.getActiveCell(), e && (t = e.getElement(), i = e.row.getElement(), this.table.rtl ? this.activeRangeCellElement.style.right = i.offsetWidth - t.offsetLeft - t.offsetWidth + "px" : this.activeRangeCellElement.style.left = i.offsetLeft + t.offsetLeft + "px", this.activeRangeCellElement.style.top = i.offsetTop + "px", this.activeRangeCellElement.style.width = t.offsetWidth + "px", this.activeRangeCellElement.style.height = i.offsetHeight + "px", this.ranges.forEach((s) => s.layout()), this.overlay.style.visibility = "visible"));
  }
  ///////////////////////////////////
  ///////  Helper Functions   ///////
  ///////////////////////////////////	
  getCell(e, t) {
    var i;
    return t < 0 && (t = this.getTableColumns().length + t, t < 0) ? null : (e < 0 && (e = this.getTableRows().length + e), i = this.table.rowManager.getRowFromPosition(e + 1), i ? i.getCells(!1, !0).filter((s) => s.column.visible)[t] : null);
  }
  getActiveCell() {
    return this.getCell(this.activeRange.start.row, this.activeRange.start.col);
  }
  getRowByRangePos(e) {
    return this.getTableRows()[e];
  }
  getColumnByRangePos(e) {
    return this.getTableColumns()[e];
  }
  getTableRows() {
    return this.table.rowManager.getDisplayRows().filter((e) => e.type === "row");
  }
  getTableColumns() {
    return this.table.columnManager.getVisibleColumnsByIndex();
  }
  addRange(e, t) {
    var i;
    return this.maxRanges !== !0 && this.ranges.length >= this.maxRanges && this.ranges.shift().destroy(), i = new sc(this.table, this, e, t), this.activeRange = i, this.ranges.push(i), this.rangeContainer.appendChild(i.element), i;
  }
  resetRanges() {
    var e, t, i;
    return this.ranges.forEach((s) => s.destroy()), this.ranges = [], e = this.addRange(), this.table.rowManager.activeRows.length && (i = this.table.rowManager.activeRows[0].cells.filter((s) => s.column.visible), t = i[this.rowHeader ? 1 : 0], t && (e.setBounds(t), this.options("selectableRangeAutoFocus") && this.initializeFocus(t))), e;
  }
  tableDestroyed() {
    document.removeEventListener("mouseup", this.mouseUpEvent), this.table.rowManager.element.removeEventListener("keydown", this.keyDownEvent);
  }
  selectedRows(e) {
    return e ? this.activeRange.getRows().map((t) => t.getComponent()) : this.activeRange.getRows();
  }
  selectedColumns(e) {
    return e ? this.activeRange.getColumns().map((t) => t.getComponent()) : this.activeRange.getColumns();
  }
  getRowHeaderWidth() {
    return this.rowHeader ? this.rowHeader.getElement().offsetWidth : 0;
  }
  isEmpty(e) {
    return e == null || e === "";
  }
}
F(Ms, "moduleName", "selectRange"), F(Ms, "moduleInitOrder", 1), F(Ms, "moduleExtensions", uc);
function dc(r, e, t, i, s, n, a) {
  var o = a.alignEmptyValues, l = a.decimalSeparator, h = a.thousandSeparator, u = 0;
  if (r = String(r), e = String(e), h && (r = r.split(h).join(""), e = e.split(h).join("")), l && (r = r.split(l).join("."), e = e.split(l).join(".")), r = parseFloat(r), e = parseFloat(e), isNaN(r))
    u = isNaN(e) ? 0 : -1;
  else if (isNaN(e))
    u = 1;
  else
    return r - e;
  return (o === "top" && n === "desc" || o === "bottom" && n === "asc") && (u *= -1), u;
}
function cc(r, e, t, i, s, n, a) {
  var o = a.alignEmptyValues, l = 0, h;
  if (!r)
    l = e ? -1 : 0;
  else if (!e)
    l = 1;
  else {
    switch (typeof a.locale) {
      case "boolean":
        a.locale && (h = this.langLocale());
        break;
      case "string":
        h = a.locale;
        break;
    }
    return String(r).toLowerCase().localeCompare(String(e).toLowerCase(), h);
  }
  return (o === "top" && n === "desc" || o === "bottom" && n === "asc") && (l *= -1), l;
}
function br(r, e, t, i, s, n, a) {
  var o = this.table.dependencyRegistry.lookup(["luxon", "DateTime"], "DateTime"), l = a.format || "dd/MM/yyyy HH:mm:ss", h = a.alignEmptyValues, u = 0;
  if (typeof o < "u") {
    if (o.isDateTime(r) || (l === "iso" ? r = o.fromISO(String(r)) : r = o.fromFormat(String(r), l)), o.isDateTime(e) || (l === "iso" ? e = o.fromISO(String(e)) : e = o.fromFormat(String(e), l)), !r.isValid)
      u = e.isValid ? -1 : 0;
    else if (!e.isValid)
      u = 1;
    else
      return r - e;
    return (h === "top" && n === "desc" || h === "bottom" && n === "asc") && (u *= -1), u;
  } else
    console.error("Sort Error - 'datetime' sorter is dependant on luxon.js");
}
function fc(r, e, t, i, s, n, a) {
  return a.format || (a.format = "dd/MM/yyyy"), br.call(this, r, e, t, i, s, n, a);
}
function mc(r, e, t, i, s, n, a) {
  return a.format || (a.format = "HH:mm"), br.call(this, r, e, t, i, s, n, a);
}
function pc(r, e, t, i, s, n, a) {
  var o = r === !0 || r === "true" || r === "True" || r === 1 ? 1 : 0, l = e === !0 || e === "true" || e === "True" || e === 1 ? 1 : 0;
  return o - l;
}
function gc(r, e, t, i, s, n, a) {
  var o = a.type || "length", l = a.alignEmptyValues, h = 0, u = this.table, d;
  a.valueMap && (typeof a.valueMap == "string" ? d = function(b) {
    return b.map((T) => de.retrieveNestedData(u.options.nestedFieldSeparator, a.valueMap, T));
  } : d = a.valueMap);
  function f(b) {
    var T;
    switch (d && (b = d(b)), o) {
      case "length":
        T = b.length;
        break;
      case "sum":
        T = b.reduce(function(E, S) {
          return E + S;
        });
        break;
      case "max":
        T = Math.max.apply(null, b);
        break;
      case "min":
        T = Math.min.apply(null, b);
        break;
      case "avg":
        T = b.reduce(function(E, S) {
          return E + S;
        }) / b.length;
        break;
      case "string":
        T = b.join("");
        break;
    }
    return T;
  }
  if (!Array.isArray(r))
    h = Array.isArray(e) ? -1 : 0;
  else if (!Array.isArray(e))
    h = 1;
  else
    return o === "string" ? String(f(r)).toLowerCase().localeCompare(String(f(e)).toLowerCase()) : f(e) - f(r);
  return (l === "top" && n === "desc" || l === "bottom" && n === "asc") && (h *= -1), h;
}
function bc(r, e, t, i, s, n, a) {
  var o = typeof r > "u" ? 0 : 1, l = typeof e > "u" ? 0 : 1;
  return o - l;
}
function vc(r, e, t, i, s, n, a) {
  var o, l, h, u, d = 0, f, b = /(\d+)|(\D+)/g, T = /\d/, E = a.alignEmptyValues, S = 0;
  if (!r && r !== 0)
    S = !e && e !== 0 ? 0 : -1;
  else if (!e && e !== 0)
    S = 1;
  else {
    if (isFinite(r) && isFinite(e)) return r - e;
    if (o = String(r).toLowerCase(), l = String(e).toLowerCase(), o === l) return 0;
    if (!(T.test(o) && T.test(l))) return o > l ? 1 : -1;
    for (o = o.match(b), l = l.match(b), f = o.length > l.length ? l.length : o.length; d < f; )
      if (h = o[d], u = l[d++], h !== u)
        return isFinite(h) && isFinite(u) ? (h.charAt(0) === "0" && (h = "." + h), u.charAt(0) === "0" && (u = "." + u), h - u) : h > u ? 1 : -1;
    return o.length > l.length;
  }
  return (E === "top" && n === "desc" || E === "bottom" && n === "asc") && (S *= -1), S;
}
var wc = {
  number: dc,
  string: cc,
  date: fc,
  time: mc,
  datetime: br,
  boolean: pc,
  array: gc,
  exists: bc,
  alphanum: vc
};
const At = class At extends $ {
  constructor(e) {
    super(e), this.sortList = [], this.changed = !1, this.registerTableOption("sortMode", "local"), this.registerTableOption("initialSort", !1), this.registerTableOption("columnHeaderSortMulti", !0), this.registerTableOption("sortOrderReverse", !1), this.registerTableOption("headerSortElement", "<div class='tabulator-arrow'></div>"), this.registerTableOption("headerSortClickElement", "header"), this.registerColumnOption("sorter"), this.registerColumnOption("sorterParams"), this.registerColumnOption("headerSort", !0), this.registerColumnOption("headerSortStartingDir"), this.registerColumnOption("headerSortTristate");
  }
  initialize() {
    this.subscribe("column-layout", this.initializeColumn.bind(this)), this.subscribe("table-built", this.tableBuilt.bind(this)), this.registerDataHandler(this.sort.bind(this), 20), this.registerTableFunction("setSort", this.userSetSort.bind(this)), this.registerTableFunction("getSorters", this.getSort.bind(this)), this.registerTableFunction("clearSort", this.clearSort.bind(this)), this.table.options.sortMode === "remote" && this.subscribe("data-params", this.remoteSortParams.bind(this));
  }
  tableBuilt() {
    this.table.options.initialSort && this.setSort(this.table.options.initialSort);
  }
  remoteSortParams(e, t, i, s) {
    var n = this.getSort();
    return n.forEach((a) => {
      delete a.column;
    }), s.sort = n, s;
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  userSetSort(e, t) {
    this.setSort(e, t), this.refreshSort();
  }
  clearSort() {
    this.clear(), this.refreshSort();
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  //initialize column header for sorting
  initializeColumn(e) {
    var t = !1, i, s;
    switch (typeof e.definition.sorter) {
      case "string":
        At.sorters[e.definition.sorter] ? t = At.sorters[e.definition.sorter] : console.warn("Sort Error - No such sorter found: ", e.definition.sorter);
        break;
      case "function":
        t = e.definition.sorter;
        break;
    }
    if (e.modules.sort = {
      sorter: t,
      dir: "none",
      params: e.definition.sorterParams || {},
      startingDir: e.definition.headerSortStartingDir || "asc",
      tristate: e.definition.headerSortTristate
    }, e.definition.headerSort !== !1) {
      switch (i = e.getElement(), i.classList.add("tabulator-sortable"), s = document.createElement("div"), s.classList.add("tabulator-col-sorter"), this.table.options.headerSortClickElement) {
        case "icon":
          s.classList.add("tabulator-col-sorter-element");
          break;
        case "header":
          i.classList.add("tabulator-col-sorter-element");
          break;
        default:
          i.classList.add("tabulator-col-sorter-element");
          break;
      }
      switch (this.table.options.headerSortElement) {
        case "function":
          break;
        case "object":
          s.appendChild(this.table.options.headerSortElement);
          break;
        default:
          s.innerHTML = this.table.options.headerSortElement;
      }
      e.titleHolderElement.appendChild(s), e.modules.sort.element = s, this.setColumnHeaderSortIcon(e, "none"), this.table.options.headerSortClickElement === "icon" && s.addEventListener("mousedown", (n) => {
        n.stopPropagation();
      }), (this.table.options.headerSortClickElement === "icon" ? s : i).addEventListener("click", (n) => {
        var a = "", o = [], l = !1;
        if (e.modules.sort) {
          if (e.modules.sort.tristate)
            e.modules.sort.dir == "none" ? a = e.modules.sort.startingDir : e.modules.sort.dir == e.modules.sort.startingDir ? a = e.modules.sort.dir == "asc" ? "desc" : "asc" : a = "none";
          else
            switch (e.modules.sort.dir) {
              case "asc":
                a = "desc";
                break;
              case "desc":
                a = "asc";
                break;
              default:
                a = e.modules.sort.startingDir;
            }
          this.table.options.columnHeaderSortMulti && (n.shiftKey || n.ctrlKey) ? (o = this.getSort(), l = o.findIndex((h) => h.field === e.getField()), l > -1 ? (o[l].dir = a, l = o.splice(l, 1)[0], a != "none" && o.push(l)) : a != "none" && o.push({ column: e, dir: a }), this.setSort(o)) : a == "none" ? this.clear() : this.setSort(e, a), this.refreshSort();
        }
      });
    }
  }
  refreshSort() {
    this.table.options.sortMode === "remote" ? this.reloadData(null, !1, !1) : this.refreshData(!0);
  }
  //check if the sorters have changed since last use
  hasChanged() {
    var e = this.changed;
    return this.changed = !1, e;
  }
  //return current sorters
  getSort() {
    var e = this, t = [];
    return e.sortList.forEach(function(i) {
      i.column && t.push({ column: i.column.getComponent(), field: i.column.getField(), dir: i.dir });
    }), t;
  }
  //change sort list and trigger sort
  setSort(e, t) {
    var i = this, s = [];
    Array.isArray(e) || (e = [{ column: e, dir: t }]), e.forEach(function(n) {
      var a;
      a = i.table.columnManager.findColumn(n.column), a ? (n.column = a, s.push(n), i.changed = !0) : console.warn("Sort Warning - Sort field does not exist and is being ignored: ", n.column);
    }), i.sortList = s, this.dispatch("sort-changed");
  }
  //clear sorters
  clear() {
    this.setSort([]);
  }
  //find appropriate sorter for column
  findSorter(e) {
    var t = this.table.rowManager.activeRows[0], i = "string", s, n;
    if (t && (t = t.getData(), s = e.getField(), s))
      switch (n = e.getFieldValue(t), typeof n) {
        case "undefined":
          i = "string";
          break;
        case "boolean":
          i = "boolean";
          break;
        default:
          !isNaN(n) && n !== "" ? i = "number" : n.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i) && (i = "alphanum");
          break;
      }
    return At.sorters[i];
  }
  //work through sort list sorting data
  sort(e, t) {
    var i = this, s = this.table.options.sortOrderReverse ? i.sortList.slice().reverse() : i.sortList, n = [], a = [];
    return this.subscribedExternal("dataSorting") && this.dispatchExternal("dataSorting", i.getSort()), t || i.clearColumnHeaders(), this.table.options.sortMode !== "remote" ? (s.forEach(function(o, l) {
      var h;
      o.column && (h = o.column.modules.sort, h && (h.sorter || (h.sorter = i.findSorter(o.column)), o.params = typeof h.params == "function" ? h.params(o.column.getComponent(), o.dir) : h.params, n.push(o)), t || i.setColumnHeader(o.column, o.dir));
    }), n.length && i._sortItems(e, n)) : t || s.forEach(function(o, l) {
      i.setColumnHeader(o.column, o.dir);
    }), this.subscribedExternal("dataSorted") && (e.forEach((o) => {
      a.push(o.getComponent());
    }), this.dispatchExternal("dataSorted", i.getSort(), a)), e;
  }
  //clear sort arrows on columns
  clearColumnHeaders() {
    this.table.columnManager.getRealColumns().forEach((e) => {
      e.modules.sort && (e.modules.sort.dir = "none", e.getElement().setAttribute("aria-sort", "none"), this.setColumnHeaderSortIcon(e, "none"));
    });
  }
  //set the column header sort direction
  setColumnHeader(e, t) {
    e.modules.sort.dir = t, e.getElement().setAttribute("aria-sort", t === "asc" ? "ascending" : "descending"), this.setColumnHeaderSortIcon(e, t);
  }
  setColumnHeaderSortIcon(e, t) {
    var i = e.modules.sort.element, s;
    if (e.definition.headerSort && typeof this.table.options.headerSortElement == "function") {
      for (; i.firstChild; ) i.removeChild(i.firstChild);
      s = this.table.options.headerSortElement.call(this.table, e.getComponent(), t), typeof s == "object" ? i.appendChild(s) : i.innerHTML = s;
    }
  }
  //sort each item in sort list
  _sortItems(e, t) {
    var i = t.length - 1;
    e.sort((s, n) => {
      for (var a, o = i; o >= 0; o--) {
        let l = t[o];
        if (a = this._sortRow(s, n, l.column, l.dir, l.params), a !== 0)
          break;
      }
      return a;
    });
  }
  //process individual rows for a sort function on active data
  _sortRow(e, t, i, s, n) {
    var a, o, l = s == "asc" ? e : t, h = s == "asc" ? t : e;
    return e = i.getFieldValue(l.getData()), t = i.getFieldValue(h.getData()), e = typeof e < "u" ? e : "", t = typeof t < "u" ? t : "", a = l.getComponent(), o = h.getComponent(), i.modules.sort.sorter.call(this, e, t, a, o, i.getComponent(), s, n);
  }
};
F(At, "moduleName", "sort"), //load defaults
F(At, "sorters", wc);
let jn = At;
class yc {
  constructor(e, t) {
    this.columnCount = e, this.rowCount = t, this.columnString = [], this.columns = [], this.rows = [];
  }
  genColumns(e) {
    var t = Math.max(this.columnCount, Math.max(...e.map((i) => i.length)));
    this.columnString = [], this.columns = [];
    for (let i = 1; i <= t; i++)
      this.incrementChar(this.columnString.length - 1), this.columns.push(this.columnString.join(""));
    return this.columns;
  }
  genRows(e) {
    var t = Math.max(this.rowCount, e.length);
    this.rows = [];
    for (let i = 1; i <= t; i++)
      this.rows.push(i);
    return this.rows;
  }
  incrementChar(e) {
    let t = this.columnString[e];
    t ? t !== "Z" ? this.columnString[e] = String.fromCharCode(this.columnString[e].charCodeAt(0) + 1) : (this.columnString[e] = "A", e ? this.incrementChar(e - 1) : this.columnString.push("A")) : this.columnString.push("A");
  }
  setRowCount(e) {
    this.rowCount = e;
  }
  setColumnCount(e) {
    this.columnCount = e;
  }
}
class Uo {
  constructor(e) {
    return this._sheet = e, new Proxy(this, {
      get: function(t, i, s) {
        return typeof t[i] < "u" ? t[i] : t._sheet.table.componentFunctionBinder.handle("sheet", t._sheet, i);
      }
    });
  }
  getTitle() {
    return this._sheet.title;
  }
  getKey() {
    return this._sheet.key;
  }
  getDefinition() {
    return this._sheet.getDefinition();
  }
  getData() {
    return this._sheet.getData();
  }
  setData(e) {
    return this._sheet.setData(e);
  }
  clear() {
    return this._sheet.clear();
  }
  remove() {
    return this._sheet.remove();
  }
  active() {
    return this._sheet.active();
  }
  setTitle(e) {
    return this._sheet.setTitle(e);
  }
  setRows(e) {
    return this._sheet.setRows(e);
  }
  setColumns(e) {
    return this._sheet.setColumns(e);
  }
}
class sa extends Te {
  constructor(e, t) {
    super(e.table), this.spreadsheetManager = e, this.definition = t, this.title = this.definition.title || "", this.key = this.definition.key || this.definition.title, this.rowCount = this.definition.rows, this.columnCount = this.definition.columns, this.data = this.definition.data || [], this.element = null, this.isActive = !1, this.grid = new yc(this.columnCount, this.rowCount), this.defaultColumnDefinition = { width: 100, headerHozAlign: "center", headerSort: !1 }, this.columnDefinition = Object.assign(this.defaultColumnDefinition, this.options("spreadsheetColumnDefinition")), this.columnDefs = [], this.rowDefs = [], this.columnFields = [], this.columns = [], this.rows = [], this.scrollTop = null, this.scrollLeft = null, this.initialize(), this.dispatchExternal("sheetAdded", this.getComponent());
  }
  ///////////////////////////////////
  ///////// Initialization //////////
  ///////////////////////////////////
  initialize() {
    this.initializeElement(), this.initializeColumns(), this.initializeRows();
  }
  reinitialize() {
    this.initializeColumns(), this.initializeRows();
  }
  initializeElement() {
    this.element = document.createElement("div"), this.element.classList.add("tabulator-spreadsheet-tab"), this.element.innerText = this.title, this.element.addEventListener("click", () => {
      this.spreadsheetManager.loadSheet(this);
    });
  }
  initializeColumns() {
    this.grid.setColumnCount(this.columnCount), this.columnFields = this.grid.genColumns(this.data), this.columnDefs = [], this.columnFields.forEach((e) => {
      var t = Object.assign({}, this.columnDefinition);
      t.field = e, t.title = e, this.columnDefs.push(t);
    });
  }
  initializeRows() {
    var e;
    this.grid.setRowCount(this.rowCount), e = this.grid.genRows(this.data), this.rowDefs = [], e.forEach((t, i) => {
      var s = { _id: t }, n = this.data[i];
      n && n.forEach((a, o) => {
        var l = this.columnFields[o];
        l && (s[l] = a);
      }), this.rowDefs.push(s);
    });
  }
  unload() {
    this.isActive = !1, this.scrollTop = this.table.rowManager.scrollTop, this.scrollLeft = this.table.rowManager.scrollLeft, this.data = this.getData(!0), this.element.classList.remove("tabulator-spreadsheet-tab-active");
  }
  load() {
    var e = !this.isActive;
    this.isActive = !0, this.table.blockRedraw(), this.table.setData([]), this.table.setColumns(this.columnDefs), this.table.setData(this.rowDefs), this.table.restoreRedraw(), e && this.scrollTop !== null && (this.table.rowManager.element.scrollLeft = this.scrollLeft, this.table.rowManager.element.scrollTop = this.scrollTop), this.element.classList.add("tabulator-spreadsheet-tab-active"), this.dispatchExternal("sheetLoaded", this.getComponent());
  }
  ///////////////////////////////////
  //////// Helper Functions /////////
  ///////////////////////////////////
  getComponent() {
    return new Uo(this);
  }
  getDefinition() {
    return {
      title: this.title,
      key: this.key,
      rows: this.rowCount,
      columns: this.columnCount,
      data: this.getData()
    };
  }
  getData(e) {
    var t = [], i, s, n;
    return this.rowDefs.forEach((a) => {
      var o = [];
      this.columnFields.forEach((l) => {
        o.push(a[l]);
      }), t.push(o);
    }), !e && !this.options("spreadsheetOutputFull") && (i = t.map((a) => a.findLastIndex((o) => typeof o < "u") + 1), s = Math.max(...i), n = i.findLastIndex((a) => a > 0) + 1, t = t.slice(0, n), t = t.map((a) => a.slice(0, s))), t;
  }
  setData(e) {
    this.data = e, this.reinitialize(), this.dispatchExternal("sheetUpdated", this.getComponent()), this.isActive && this.load();
  }
  clear() {
    this.setData([]);
  }
  setTitle(e) {
    this.title = e, this.element.innerText = e, this.dispatchExternal("sheetUpdated", this.getComponent());
  }
  setRows(e) {
    this.rowCount = e, this.initializeRows(), this.dispatchExternal("sheetUpdated", this.getComponent()), this.isActive && this.load();
  }
  setColumns(e) {
    this.columnCount = e, this.reinitialize(), this.dispatchExternal("sheetUpdated", this.getComponent()), this.isActive && this.load();
  }
  remove() {
    this.spreadsheetManager.removeSheet(this);
  }
  destroy() {
    this.element.parentNode && this.element.parentNode.removeChild(this.element), this.dispatchExternal("sheetRemoved", this.getComponent());
  }
  active() {
    this.spreadsheetManager.loadSheet(this);
  }
}
class Go extends $ {
  constructor(e) {
    super(e), this.sheets = [], this.element = null, this.registerTableOption("spreadsheet", !1), this.registerTableOption("spreadsheetRows", 50), this.registerTableOption("spreadsheetColumns", 50), this.registerTableOption("spreadsheetColumnDefinition", {}), this.registerTableOption("spreadsheetOutputFull", !1), this.registerTableOption("spreadsheetData", !1), this.registerTableOption("spreadsheetSheets", !1), this.registerTableOption("spreadsheetSheetTabs", !1), this.registerTableOption("spreadsheetSheetTabsElement", !1), this.registerTableFunction("setSheets", this.setSheets.bind(this)), this.registerTableFunction("addSheet", this.addSheet.bind(this)), this.registerTableFunction("getSheets", this.getSheets.bind(this)), this.registerTableFunction("getSheetDefinitions", this.getSheetDefinitions.bind(this)), this.registerTableFunction("setSheetData", this.setSheetData.bind(this)), this.registerTableFunction("getSheet", this.getSheet.bind(this)), this.registerTableFunction("getSheetData", this.getSheetData.bind(this)), this.registerTableFunction("clearSheet", this.clearSheet.bind(this)), this.registerTableFunction("removeSheet", this.removeSheetFunc.bind(this)), this.registerTableFunction("activeSheet", this.activeSheetFunc.bind(this));
  }
  ///////////////////////////////////
  ////// Module Initialization //////
  ///////////////////////////////////
  initialize() {
    this.options("spreadsheet") && (this.subscribe("table-initialized", this.tableInitialized.bind(this)), this.subscribe("data-loaded", this.loadRemoteData.bind(this)), this.table.options.index = "_id", this.options("spreadsheetData") && this.options("spreadsheetSheets") && (console.warn("You cannot use spreadsheetData and spreadsheetSheets at the same time, ignoring spreadsheetData"), this.table.options.spreadsheetData = !1), this.compatibilityCheck(), this.options("spreadsheetSheetTabs") && this.initializeTabset());
  }
  compatibilityCheck() {
    this.options("data") && console.warn("Do not use the data option when working with spreadsheets, use either spreadsheetData or spreadsheetSheets to pass data into the table"), this.options("pagination") && console.warn("The spreadsheet module is not compatible with the pagination module"), this.options("groupBy") && console.warn("The spreadsheet module is not compatible with the row grouping module"), this.options("responsiveCollapse") && console.warn("The spreadsheet module is not compatible with the responsive collapse module");
  }
  initializeTabset() {
    this.element = document.createElement("div"), this.element.classList.add("tabulator-spreadsheet-tabs");
    var e = this.options("spreadsheetSheetTabsElement");
    e && !(e instanceof HTMLElement) && (e = document.querySelector(e), e || console.warn("Unable to find element matching spreadsheetSheetTabsElement selector:", this.options("spreadsheetSheetTabsElement"))), e ? e.appendChild(this.element) : this.footerAppend(this.element);
  }
  tableInitialized() {
    this.sheets.length ? this.loadSheet(this.sheets[0]) : this.options("spreadsheetSheets") ? this.loadSheets(this.options("spreadsheetSheets")) : this.options("spreadsheetData") && this.loadData(this.options("spreadsheetData"));
  }
  ///////////////////////////////////
  /////////// Ajax Parsing //////////
  ///////////////////////////////////
  loadRemoteData(e, t, i) {
    return console.log("data", e, t, i), Array.isArray(e) ? (this.table.dataLoader.clearAlert(), this.dispatchExternal("dataLoaded", e), !e.length || Array.isArray(e[0]) ? this.loadData(e) : this.loadSheets(e)) : console.error(`Spreadsheet Loading Error - Unable to process remote data due to invalid data type 
Expecting: array 
Received: `, typeof e, `
Data:     `, e), !1;
  }
  ///////////////////////////////////
  ///////// Sheet Management ////////
  ///////////////////////////////////
  loadData(e) {
    var t = {
      data: e
    };
    this.loadSheet(this.newSheet(t));
  }
  destroySheets() {
    this.sheets.forEach((e) => {
      e.destroy();
    }), this.sheets = [], this.activeSheet = null;
  }
  loadSheets(e) {
    Array.isArray(e) || (e = []), this.destroySheets(), e.forEach((t) => {
      this.newSheet(t);
    }), this.loadSheet(this.sheets[0]);
  }
  loadSheet(e) {
    this.activeSheet !== e && (this.activeSheet && this.activeSheet.unload(), this.activeSheet = e, e.load());
  }
  newSheet(e = {}) {
    var t;
    return e.rows || (e.rows = this.options("spreadsheetRows")), e.columns || (e.columns = this.options("spreadsheetColumns")), t = new sa(this, e), this.sheets.push(t), this.element && this.element.appendChild(t.element), t;
  }
  removeSheet(e) {
    var t = this.sheets.indexOf(e), i;
    this.sheets.length > 1 ? t > -1 && (this.sheets.splice(t, 1), e.destroy(), this.activeSheet === e && (i = this.sheets[t - 1] || this.sheets[0], i ? this.loadSheet(i) : this.activeSheet = null)) : console.warn("Unable to remove sheet, at least one sheet must be active");
  }
  lookupSheet(e) {
    return e ? e instanceof sa ? e : e instanceof Uo ? e._sheet : this.sheets.find((t) => t.key === e) || !1 : this.activeSheet;
  }
  ///////////////////////////////////
  //////// Public Functions /////////
  ///////////////////////////////////
  setSheets(e) {
    return this.loadSheets(e), this.getSheets();
  }
  addSheet(e) {
    return this.newSheet(e).getComponent();
  }
  getSheetDefinitions() {
    return this.sheets.map((e) => e.getDefinition());
  }
  getSheets() {
    return this.sheets.map((e) => e.getComponent());
  }
  getSheet(e) {
    var t = this.lookupSheet(e);
    return t ? t.getComponent() : !1;
  }
  setSheetData(e, t) {
    e && !t && (t = e, e = !1);
    var i = this.lookupSheet(e);
    return i ? i.setData(t) : !1;
  }
  getSheetData(e) {
    var t = this.lookupSheet(e);
    return t ? t.getData() : !1;
  }
  clearSheet(e) {
    var t = this.lookupSheet(e);
    return t ? t.clear() : !1;
  }
  removeSheetFunc(e) {
    var t = this.lookupSheet(e);
    t && this.removeSheet(t);
  }
  activeSheetFunc(e) {
    var t = this.lookupSheet(e);
    return t ? this.loadSheet(t) : !1;
  }
}
F(Go, "moduleName", "spreadsheet");
class $o extends $ {
  constructor(e) {
    super(e), this.tooltipSubscriber = null, this.headerSubscriber = null, this.timeout = null, this.popupInstance = null, this.registerTableOption("tooltipDelay", 300), this.registerColumnOption("tooltip"), this.registerColumnOption("headerTooltip");
  }
  initialize() {
    this.deprecatedOptionsCheck(), this.subscribe("column-init", this.initializeColumn.bind(this));
  }
  deprecatedOptionsCheck() {
  }
  initializeColumn(e) {
    e.definition.headerTooltip && !this.headerSubscriber && (this.headerSubscriber = !0, this.subscribe("column-mousemove", this.mousemoveCheck.bind(this, "headerTooltip")), this.subscribe("column-mouseout", this.mouseoutCheck.bind(this, "headerTooltip"))), e.definition.tooltip && !this.tooltipSubscriber && (this.tooltipSubscriber = !0, this.subscribe("cell-mousemove", this.mousemoveCheck.bind(this, "tooltip")), this.subscribe("cell-mouseout", this.mouseoutCheck.bind(this, "tooltip")));
  }
  mousemoveCheck(e, t, i) {
    var s = e === "tooltip" ? i.column.definition.tooltip : i.definition.headerTooltip;
    s && (this.clearPopup(), this.timeout = setTimeout(this.loadTooltip.bind(this, t, i, s), this.table.options.tooltipDelay));
  }
  mouseoutCheck(e, t, i) {
    this.popupInstance || this.clearPopup();
  }
  clearPopup(e, t, i) {
    clearTimeout(this.timeout), this.timeout = null, this.popupInstance && this.popupInstance.hide();
  }
  loadTooltip(e, t, i) {
    var s, n, a;
    function o(l) {
      n = l;
    }
    typeof i == "function" && (i = i(e, t.getComponent(), o)), i instanceof HTMLElement ? s = i : (s = document.createElement("div"), i === !0 && (t instanceof ns ? i = t.value : t.definition.field ? this.langBind("columns|" + t.definition.field, (l) => {
      s.innerHTML = i = l || t.definition.title;
    }) : i = t.definition.title), s.innerHTML = i), (i || i === 0 || i === !1) && (s.classList.add("tabulator-tooltip"), s.addEventListener("mousemove", (l) => l.preventDefault()), this.popupInstance = this.popup(s), typeof n == "function" && this.popupInstance.renderCallback(n), a = this.popupInstance.containerEventCoords(e), this.popupInstance.show(a.x + 15, a.y + 15).hideOnBlur(() => {
      this.dispatchExternal("TooltipClosed", t.getComponent()), this.popupInstance = null;
    }), this.dispatchExternal("TooltipOpened", t.getComponent()));
  }
}
F($o, "moduleName", "tooltip");
var Cc = {
  //is integer
  integer: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : (e = Number(e), !isNaN(e) && isFinite(e) && Math.floor(e) === e);
  },
  //is float
  float: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : (e = Number(e), !isNaN(e) && isFinite(e) && e % 1 !== 0);
  },
  //must be a number
  numeric: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : !isNaN(e);
  },
  //must be a string
  string: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : isNaN(e);
  },
  //must be alphanumeric
  alphanumeric: function(r, e, t) {
    if (e === "" || e === null || typeof e > "u")
      return !0;
    var i = new RegExp(/^[a-z0-9]+$/i);
    return i.test(e);
  },
  //maximum value
  max: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : parseFloat(e) <= t;
  },
  //minimum value
  min: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : parseFloat(e) >= t;
  },
  //starts with  value
  starts: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : String(e).toLowerCase().startsWith(String(t).toLowerCase());
  },
  //ends with  value
  ends: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : String(e).toLowerCase().endsWith(String(t).toLowerCase());
  },
  //minimum string length
  minLength: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : String(e).length >= t;
  },
  //maximum string length
  maxLength: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : String(e).length <= t;
  },
  //in provided value list
  in: function(r, e, t) {
    return e === "" || e === null || typeof e > "u" ? !0 : (typeof t == "string" && (t = t.split("|")), t.indexOf(e) > -1);
  },
  //must match provided regex
  regex: function(r, e, t) {
    if (e === "" || e === null || typeof e > "u")
      return !0;
    var i = new RegExp(t);
    return i.test(e);
  },
  //value must be unique in this column
  unique: function(r, e, t) {
    if (e === "" || e === null || typeof e > "u")
      return !0;
    var i = !0, s = r.getData(), n = r.getColumn()._getSelf();
    return this.table.rowManager.rows.forEach(function(a) {
      var o = a.getData();
      o !== s && e == n.getFieldValue(o) && (i = !1);
    }), i;
  },
  //must have a value
  required: function(r, e, t) {
    return e !== "" && e !== null && typeof e < "u";
  }
};
const qi = class qi extends $ {
  constructor(e) {
    super(e), this.invalidCells = [], this.registerTableOption("validationMode", "blocking"), this.registerColumnOption("validator"), this.registerTableFunction("getInvalidCells", this.getInvalidCells.bind(this)), this.registerTableFunction("clearCellValidation", this.userClearCellValidation.bind(this)), this.registerTableFunction("validate", this.userValidate.bind(this)), this.registerComponentFunction("cell", "isValid", this.cellIsValid.bind(this)), this.registerComponentFunction("cell", "clearValidation", this.clearValidation.bind(this)), this.registerComponentFunction("cell", "validate", this.cellValidate.bind(this)), this.registerComponentFunction("column", "validate", this.columnValidate.bind(this)), this.registerComponentFunction("row", "validate", this.rowValidate.bind(this));
  }
  initialize() {
    this.subscribe("cell-delete", this.clearValidation.bind(this)), this.subscribe("column-layout", this.initializeColumnCheck.bind(this)), this.subscribe("edit-success", this.editValidate.bind(this)), this.subscribe("edit-editor-clear", this.editorClear.bind(this)), this.subscribe("edit-edited-clear", this.editedClear.bind(this));
  }
  ///////////////////////////////////
  ///////// Event Handling //////////
  ///////////////////////////////////
  editValidate(e, t, i) {
    var s = this.table.options.validationMode !== "manual" ? this.validate(e.column.modules.validate, e, t) : !0;
    return s !== !0 && setTimeout(() => {
      e.getElement().classList.add("tabulator-validation-fail"), this.dispatchExternal("validationFailed", e.getComponent(), t, s);
    }), s;
  }
  editorClear(e, t) {
    t && e.column.modules.validate && this.cellValidate(e), e.getElement().classList.remove("tabulator-validation-fail");
  }
  editedClear(e) {
    e.modules.validate && (e.modules.validate.invalid = !1);
  }
  ///////////////////////////////////
  ////////// Cell Functions /////////
  ///////////////////////////////////
  cellIsValid(e) {
    return e.modules.validate && e.modules.validate.invalid || !0;
  }
  cellValidate(e) {
    return this.validate(e.column.modules.validate, e, e.getValue());
  }
  ///////////////////////////////////
  ///////// Column Functions ////////
  ///////////////////////////////////
  columnValidate(e) {
    var t = [];
    return e.cells.forEach((i) => {
      this.cellValidate(i) !== !0 && t.push(i.getComponent());
    }), t.length ? t : !0;
  }
  ///////////////////////////////////
  ////////// Row Functions //////////
  ///////////////////////////////////
  rowValidate(e) {
    var t = [];
    return e.cells.forEach((i) => {
      this.cellValidate(i) !== !0 && t.push(i.getComponent());
    }), t.length ? t : !0;
  }
  ///////////////////////////////////
  ///////// Table Functions /////////
  ///////////////////////////////////
  userClearCellValidation(e) {
    e || (e = this.getInvalidCells()), Array.isArray(e) || (e = [e]), e.forEach((t) => {
      this.clearValidation(t._getSelf());
    });
  }
  userValidate(e) {
    var t = [];
    return this.table.rowManager.rows.forEach((i) => {
      i = i.getComponent();
      var s = i.validate();
      s !== !0 && (t = t.concat(s));
    }), t.length ? t : !0;
  }
  ///////////////////////////////////
  ///////// Internal Logic //////////
  ///////////////////////////////////
  initializeColumnCheck(e) {
    typeof e.definition.validator < "u" && this.initializeColumn(e);
  }
  //validate
  initializeColumn(e) {
    var t = this, i = [], s;
    e.definition.validator && (Array.isArray(e.definition.validator) ? e.definition.validator.forEach((n) => {
      s = t._extractValidator(n), s && i.push(s);
    }) : (s = this._extractValidator(e.definition.validator), s && i.push(s)), e.modules.validate = i.length ? i : !1);
  }
  _extractValidator(e) {
    var t, i, s;
    switch (typeof e) {
      case "string":
        return s = e.indexOf(":"), s > -1 ? (t = e.substring(0, s), i = e.substring(s + 1)) : t = e, this._buildValidator(t, i);
      case "function":
        return this._buildValidator(e);
      case "object":
        return this._buildValidator(e.type, e.parameters);
    }
  }
  _buildValidator(e, t) {
    var i = typeof e == "function" ? e : qi.validators[e];
    return i ? {
      type: typeof e == "function" ? "function" : e,
      func: i,
      params: t
    } : (console.warn("Validator Setup Error - No matching validator found:", e), !1);
  }
  validate(e, t, i) {
    var s = this, n = [], a = this.invalidCells.indexOf(t);
    return e && e.forEach((o) => {
      o.func.call(s, t.getComponent(), i, o.params) || n.push({
        type: o.type,
        parameters: o.params
      });
    }), t.modules.validate || (t.modules.validate = {}), n.length ? (t.modules.validate.invalid = n, this.table.options.validationMode !== "manual" && t.getElement().classList.add("tabulator-validation-fail"), a == -1 && this.invalidCells.push(t)) : (t.modules.validate.invalid = !1, t.getElement().classList.remove("tabulator-validation-fail"), a > -1 && this.invalidCells.splice(a, 1)), n.length ? n : !0;
  }
  getInvalidCells() {
    var e = [];
    return this.invalidCells.forEach((t) => {
      e.push(t.getComponent());
    }), e;
  }
  clearValidation(e) {
    var t;
    e.modules.validate && e.modules.validate.invalid && (e.getElement().classList.remove("tabulator-validation-fail"), e.modules.validate.invalid = !1, t = this.invalidCells.indexOf(e), t > -1 && this.invalidCells.splice(t, 1));
  }
};
F(qi, "moduleName", "validate"), //load defaults
F(qi, "validators", Cc);
let Un = qi;
var an = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  AccessorModule: Tn,
  AjaxModule: xn,
  ClipboardModule: Mn,
  ColumnCalcsModule: Sn,
  DataTreeModule: Lo,
  DownloadModule: Dn,
  EditModule: Ln,
  ExportModule: Fn,
  FilterModule: On,
  FormatModule: zn,
  FrozenColumnsModule: Fo,
  FrozenRowsModule: Oo,
  GroupRowsModule: zo,
  HistoryModule: Hn,
  HtmlTableImportModule: Ho,
  ImportModule: Pn,
  InteractionModule: Po,
  KeybindingsModule: An,
  MenuModule: Ao,
  MoveColumnsModule: _o,
  MoveRowsModule: _n,
  MutatorModule: In,
  PageModule: Nn,
  PersistenceModule: Vn,
  PopupModule: Io,
  PrintModule: No,
  ReactiveDataModule: Vo,
  ResizeColumnsModule: Bo,
  ResizeRowsModule: Wo,
  ResizeTableModule: jo,
  ResponsiveLayoutModule: Bn,
  SelectRangeModule: Ms,
  SelectRowModule: Wn,
  SortModule: jn,
  SpreadsheetModule: Go,
  TooltipModule: $o,
  ValidateModule: Un
}), Ec = {
  debugEventsExternal: !1,
  //flag to console log events
  debugEventsInternal: !1,
  //flag to console log events
  debugInvalidOptions: !0,
  //allow toggling of invalid option warnings
  debugInvalidComponentFuncs: !0,
  //allow toggling of invalid component warnings
  debugInitialization: !0,
  //allow toggling of pre initialization function call warnings
  debugDeprecation: !0,
  //allow toggling of deprecation warnings
  height: !1,
  //height of tabulator
  minHeight: !1,
  //minimum height of tabulator
  maxHeight: !1,
  //maximum height of tabulator
  columnHeaderVertAlign: "top",
  //vertical alignment of column headers
  popupContainer: !1,
  columns: [],
  //store for colum header info
  columnDefaults: {},
  //store column default props
  rowHeader: !1,
  data: !1,
  //default starting data
  autoColumns: !1,
  //build columns from data row structure
  autoColumnsDefinitions: !1,
  nestedFieldSeparator: ".",
  //separator for nested data
  footerElement: !1,
  //hold footer element
  index: "id",
  //filed for row index
  textDirection: "auto",
  addRowPos: "bottom",
  //position to insert blank rows, top|bottom
  headerVisible: !0,
  //hide header
  renderVertical: "virtual",
  renderHorizontal: "basic",
  renderVerticalBuffer: 0,
  // set virtual DOM buffer size
  scrollToRowPosition: "top",
  scrollToRowIfVisible: !0,
  scrollToColumnPosition: "left",
  scrollToColumnIfVisible: !0,
  rowFormatter: !1,
  rowFormatterPrint: null,
  rowFormatterClipboard: null,
  rowFormatterHtmlOutput: null,
  rowHeight: null,
  placeholder: !1,
  dataLoader: !0,
  dataLoaderLoading: !1,
  dataLoaderError: !1,
  dataLoaderErrorTimeout: 3e3,
  dataSendParams: {},
  dataReceiveParams: {},
  dependencies: {}
};
class Yo {
  constructor(e, t, i = {}) {
    this.table = e, this.msgType = t, this.registeredDefaults = Object.assign({}, i);
  }
  register(e, t) {
    this.registeredDefaults[e] = t;
  }
  generate(e, t = {}) {
    var i = Object.assign({}, this.registeredDefaults), s = this.table.options.debugInvalidOptions || t.debugInvalidOptions === !0;
    Object.assign(i, e);
    for (let n in t)
      i.hasOwnProperty(n) || (s && console.warn("Invalid " + this.msgType + " option:", n), i[n] = t.key);
    for (let n in i)
      n in t ? i[n] = t[n] : Array.isArray(i[n]) ? i[n] = Object.assign([], i[n]) : typeof i[n] == "object" && i[n] !== null ? i[n] = Object.assign({}, i[n]) : typeof i[n] > "u" && delete i[n];
    return i;
  }
}
class Ws extends Te {
  constructor(e) {
    super(e), this.elementVertical = e.rowManager.element, this.elementHorizontal = e.columnManager.element, this.tableElement = e.rowManager.tableElement, this.verticalFillMode = "fit";
  }
  ///////////////////////////////////
  /////// Internal Bindings /////////
  ///////////////////////////////////
  initialize() {
  }
  clearRows() {
  }
  clearColumns() {
  }
  reinitializeColumnWidths(e) {
  }
  renderRows() {
  }
  renderColumns() {
  }
  rerenderRows(e) {
    e && e();
  }
  rerenderColumns(e, t) {
  }
  renderRowCells(e) {
  }
  rerenderRowCells(e, t) {
  }
  scrollColumns(e, t) {
  }
  scrollRows(e, t) {
  }
  resize() {
  }
  scrollToRow(e) {
  }
  scrollToRowNearestTop(e) {
  }
  visibleRows(e) {
    return [];
  }
  ///////////////////////////////////
  //////// Helper Functions /////////
  ///////////////////////////////////
  rows() {
    return this.table.rowManager.getDisplayRows();
  }
  styleRow(e, t) {
    var i = e.getElement();
    t % 2 ? (i.classList.add("tabulator-row-even"), i.classList.remove("tabulator-row-odd")) : (i.classList.add("tabulator-row-odd"), i.classList.remove("tabulator-row-even"));
  }
  ///////////////////////////////////
  /////// External Triggers /////////
  /////// (DO NOT OVERRIDE) /////////
  ///////////////////////////////////
  clear() {
    this.clearRows(), this.clearColumns();
  }
  render() {
    this.renderRows(), this.renderColumns();
  }
  rerender(e) {
    this.rerenderRows(), this.rerenderColumns();
  }
  scrollToRowPosition(e, t, i) {
    var s = this.rows().indexOf(e), n = e.getElement(), a = 0;
    return new Promise((o, l) => {
      if (s > -1) {
        if (typeof i > "u" && (i = this.table.options.scrollToRowIfVisible), !i && de.elVisible(n) && (a = de.elOffset(n).top - de.elOffset(this.elementVertical).top, a > 0 && a < this.elementVertical.clientHeight - n.offsetHeight))
          return o(), !1;
        switch (typeof t > "u" && (t = this.table.options.scrollToRowPosition), t === "nearest" && (t = this.scrollToRowNearestTop(e) ? "top" : "bottom"), this.scrollToRow(e), t) {
          case "middle":
          case "center":
            this.elementVertical.scrollHeight - this.elementVertical.scrollTop == this.elementVertical.clientHeight ? this.elementVertical.scrollTop = this.elementVertical.scrollTop + (n.offsetTop - this.elementVertical.scrollTop) - (this.elementVertical.scrollHeight - n.offsetTop) / 2 : this.elementVertical.scrollTop = this.elementVertical.scrollTop - this.elementVertical.clientHeight / 2;
            break;
          case "bottom":
            this.elementVertical.scrollHeight - this.elementVertical.scrollTop == this.elementVertical.clientHeight ? this.elementVertical.scrollTop = this.elementVertical.scrollTop - (this.elementVertical.scrollHeight - n.offsetTop) + n.offsetHeight : this.elementVertical.scrollTop = this.elementVertical.scrollTop - this.elementVertical.clientHeight + n.offsetHeight;
            break;
          case "top":
            this.elementVertical.scrollTop = n.offsetTop;
            break;
        }
        o();
      } else
        console.warn("Scroll Error - Row not visible"), l("Scroll Error - Row not visible");
    });
  }
}
class Tc extends Ws {
  constructor(e) {
    super(e);
  }
  renderRowCells(e, t) {
    const i = document.createDocumentFragment();
    e.cells.forEach((s) => {
      i.appendChild(s.getElement());
    }), e.element.appendChild(i), t || e.cells.forEach((s) => {
      s.cellRendered();
    });
  }
  reinitializeColumnWidths(e) {
    e.forEach(function(t) {
      t.reinitializeWidth();
    });
  }
}
class kc extends Ws {
  constructor(e) {
    super(e), this.leftCol = 0, this.rightCol = 0, this.scrollLeft = 0, this.vDomScrollPosLeft = 0, this.vDomScrollPosRight = 0, this.vDomPadLeft = 0, this.vDomPadRight = 0, this.fitDataColAvg = 0, this.windowBuffer = 200, this.visibleRows = null, this.initialized = !1, this.isFitData = !1, this.columns = [];
  }
  initialize() {
    this.compatibilityCheck(), this.layoutCheck(), this.vertScrollListen();
  }
  compatibilityCheck() {
    this.options("layout") == "fitDataTable" && console.warn("Horizontal Virtual DOM is not compatible with fitDataTable layout mode"), this.options("responsiveLayout") && console.warn("Horizontal Virtual DOM is not compatible with responsive columns"), this.options("rtl") && console.warn("Horizontal Virtual DOM is not currently compatible with RTL text direction");
  }
  layoutCheck() {
    this.isFitData = this.options("layout").startsWith("fitData");
  }
  vertScrollListen() {
    this.subscribe("scroll-vertical", this.clearVisRowCache.bind(this)), this.subscribe("data-refreshed", this.clearVisRowCache.bind(this));
  }
  clearVisRowCache() {
    this.visibleRows = null;
  }
  //////////////////////////////////////
  ///////// Public Functions ///////////
  //////////////////////////////////////
  renderColumns(e, t) {
    this.dataChange();
  }
  scrollColumns(e, t) {
    this.scrollLeft != e && (this.scrollLeft = e, this.scroll(e - (this.vDomScrollPosLeft + this.windowBuffer)));
  }
  calcWindowBuffer() {
    var e = this.elementVertical.clientWidth;
    this.table.columnManager.columnsByIndex.forEach((t) => {
      if (t.visible) {
        var i = t.getWidth();
        i > e && (e = i);
      }
    }), this.windowBuffer = e * 2;
  }
  rerenderColumns(e, t) {
    var i = {
      cols: this.columns,
      leftCol: this.leftCol,
      rightCol: this.rightCol
    }, s = 0;
    e && !this.initialized || (this.clear(), this.calcWindowBuffer(), this.scrollLeft = this.elementVertical.scrollLeft, this.vDomScrollPosLeft = this.scrollLeft - this.windowBuffer, this.vDomScrollPosRight = this.scrollLeft + this.elementVertical.clientWidth + this.windowBuffer, this.table.columnManager.columnsByIndex.forEach((n) => {
      var a = {}, o;
      n.visible && (n.modules.frozen || (o = n.getWidth(), a.leftPos = s, a.rightPos = s + o, a.width = o, this.isFitData && (a.fitDataCheck = n.modules.vdomHoz ? n.modules.vdomHoz.fitDataCheck : !0), s + o > this.vDomScrollPosLeft && s < this.vDomScrollPosRight ? (this.leftCol == -1 && (this.leftCol = this.columns.length, this.vDomPadLeft = s), this.rightCol = this.columns.length) : this.leftCol !== -1 && (this.vDomPadRight += o), this.columns.push(n), n.modules.vdomHoz = a, s += o));
    }), this.tableElement.style.paddingLeft = this.vDomPadLeft + "px", this.tableElement.style.paddingRight = this.vDomPadRight + "px", this.initialized = !0, t || (!e || this.reinitChanged(i)) && this.reinitializeRows(), this.elementVertical.scrollLeft = this.scrollLeft);
  }
  renderRowCells(e) {
    if (this.initialized)
      this.initializeRow(e);
    else {
      const t = document.createDocumentFragment();
      e.cells.forEach((i) => {
        t.appendChild(i.getElement());
      }), e.element.appendChild(t), e.cells.forEach((i) => {
        i.cellRendered();
      });
    }
  }
  rerenderRowCells(e, t) {
    this.reinitializeRow(e, t);
  }
  reinitializeColumnWidths(e) {
    for (let t = this.leftCol; t <= this.rightCol; t++) {
      let i = this.columns[t];
      i && i.reinitializeWidth();
    }
  }
  //////////////////////////////////////
  //////// Internal Rendering //////////
  //////////////////////////////////////
  deinitialize() {
    this.initialized = !1;
  }
  clear() {
    this.columns = [], this.leftCol = -1, this.rightCol = 0, this.vDomScrollPosLeft = 0, this.vDomScrollPosRight = 0, this.vDomPadLeft = 0, this.vDomPadRight = 0;
  }
  dataChange() {
    var e = !1, t, i;
    if (this.isFitData) {
      if (this.table.columnManager.columnsByIndex.forEach((s) => {
        !s.definition.width && s.visible && (e = !0);
      }), e && this.table.rowManager.getDisplayRows().length && (this.vDomScrollPosRight = this.scrollLeft + this.elementVertical.clientWidth + this.windowBuffer, t = this.chain("rows-sample", [1], [], () => this.table.rowManager.getDisplayRows())[0], t)) {
        i = t.getElement(), t.generateCells(), this.tableElement.appendChild(i);
        for (let s = 0; s < t.cells.length; s++) {
          let n = t.cells[s];
          i.appendChild(n.getElement()), n.column.reinitializeWidth();
        }
        i.parentNode.removeChild(i), this.rerenderColumns(!1, !0);
      }
    } else
      this.options("layout") === "fitColumns" && (this.layoutRefresh(), this.rerenderColumns(!1, !0));
  }
  reinitChanged(e) {
    var t = !0;
    return e.cols.length !== this.columns.length || e.leftCol !== this.leftCol || e.rightCol !== this.rightCol ? !0 : (e.cols.forEach((i, s) => {
      i !== this.columns[s] && (t = !1);
    }), !t);
  }
  reinitializeRows() {
    var e = this.getVisibleRows(), t = this.table.rowManager.getRows().filter((i) => !e.includes(i));
    e.forEach((i) => {
      this.reinitializeRow(i, !0);
    }), t.forEach((i) => {
      i.deinitialize();
    });
  }
  getVisibleRows() {
    return this.visibleRows || (this.visibleRows = this.table.rowManager.getVisibleRows()), this.visibleRows;
  }
  scroll(e) {
    this.vDomScrollPosLeft += e, this.vDomScrollPosRight += e, Math.abs(e) > this.windowBuffer / 2 ? this.rerenderColumns() : e > 0 ? (this.addColRight(), this.removeColLeft()) : (this.addColLeft(), this.removeColRight());
  }
  colPositionAdjust(e, t, i) {
    for (let s = e; s < t; s++) {
      let n = this.columns[s];
      n.modules.vdomHoz.leftPos += i, n.modules.vdomHoz.rightPos += i;
    }
  }
  addColRight() {
    for (var e = !1, t = !0; t; ) {
      let i = this.columns[this.rightCol + 1];
      i && i.modules.vdomHoz.leftPos <= this.vDomScrollPosRight ? (e = !0, this.getVisibleRows().forEach((s) => {
        if (s.type !== "group") {
          var n = s.getCell(i);
          s.getElement().insertBefore(n.getElement(), s.getCell(this.columns[this.rightCol]).getElement().nextSibling), n.cellRendered();
        }
      }), this.fitDataColActualWidthCheck(i), this.rightCol++, this.getVisibleRows().forEach((s) => {
        s.type !== "group" && (s.modules.vdomHoz.rightCol = this.rightCol);
      }), this.rightCol >= this.columns.length - 1 ? this.vDomPadRight = 0 : this.vDomPadRight -= i.getWidth()) : t = !1;
    }
    e && (this.tableElement.style.paddingRight = this.vDomPadRight + "px");
  }
  addColLeft() {
    for (var e = !1, t = !0; t; ) {
      let i = this.columns[this.leftCol - 1];
      if (i)
        if (i.modules.vdomHoz.rightPos >= this.vDomScrollPosLeft) {
          e = !0, this.getVisibleRows().forEach((n) => {
            if (n.type !== "group") {
              var a = n.getCell(i);
              n.getElement().insertBefore(a.getElement(), n.getCell(this.columns[this.leftCol]).getElement()), a.cellRendered();
            }
          }), this.leftCol--, this.getVisibleRows().forEach((n) => {
            n.type !== "group" && (n.modules.vdomHoz.leftCol = this.leftCol);
          }), this.leftCol <= 0 ? this.vDomPadLeft = 0 : this.vDomPadLeft -= i.getWidth();
          let s = this.fitDataColActualWidthCheck(i);
          s && (this.scrollLeft = this.elementVertical.scrollLeft = this.elementVertical.scrollLeft + s, this.vDomPadRight -= s);
        } else
          t = !1;
      else
        t = !1;
    }
    e && (this.tableElement.style.paddingLeft = this.vDomPadLeft + "px");
  }
  removeColRight() {
    for (var e = !1, t = !0; t; ) {
      let i = this.columns[this.rightCol];
      i && i.modules.vdomHoz.leftPos > this.vDomScrollPosRight ? (e = !0, this.getVisibleRows().forEach((s) => {
        if (s.type !== "group") {
          var n = s.getCell(i);
          try {
            s.getElement().removeChild(n.getElement());
          } catch (a) {
            console.warn("Could not removeColRight", a.message);
          }
        }
      }), this.vDomPadRight += i.getWidth(), this.rightCol--, this.getVisibleRows().forEach((s) => {
        s.type !== "group" && (s.modules.vdomHoz.rightCol = this.rightCol);
      })) : t = !1;
    }
    e && (this.tableElement.style.paddingRight = this.vDomPadRight + "px");
  }
  removeColLeft() {
    for (var e = !1, t = !0; t; ) {
      let i = this.columns[this.leftCol];
      i && i.modules.vdomHoz.rightPos < this.vDomScrollPosLeft ? (e = !0, this.getVisibleRows().forEach((s) => {
        if (s.type !== "group") {
          var n = s.getCell(i);
          try {
            s.getElement().removeChild(n.getElement());
          } catch (a) {
            console.warn("Could not removeColLeft", a.message);
          }
        }
      }), this.vDomPadLeft += i.getWidth(), this.leftCol++, this.getVisibleRows().forEach((s) => {
        s.type !== "group" && (s.modules.vdomHoz.leftCol = this.leftCol);
      })) : t = !1;
    }
    e && (this.tableElement.style.paddingLeft = this.vDomPadLeft + "px");
  }
  fitDataColActualWidthCheck(e) {
    var t, i;
    return e.modules.vdomHoz.fitDataCheck && (e.reinitializeWidth(), t = e.getWidth(), i = t - e.modules.vdomHoz.width, i && (e.modules.vdomHoz.rightPos += i, e.modules.vdomHoz.width = t, this.colPositionAdjust(this.columns.indexOf(e) + 1, this.columns.length, i)), e.modules.vdomHoz.fitDataCheck = !1), i;
  }
  initializeRow(e) {
    if (e.type !== "group") {
      e.modules.vdomHoz = {
        leftCol: this.leftCol,
        rightCol: this.rightCol
      }, this.table.modules.frozenColumns && this.table.modules.frozenColumns.leftColumns.forEach((t) => {
        this.appendCell(e, t);
      });
      for (let t = this.leftCol; t <= this.rightCol; t++)
        this.appendCell(e, this.columns[t]);
      this.table.modules.frozenColumns && this.table.modules.frozenColumns.rightColumns.forEach((t) => {
        this.appendCell(e, t);
      });
    }
  }
  appendCell(e, t) {
    if (t && t.visible) {
      let i = e.getCell(t);
      e.getElement().appendChild(i.getElement()), i.cellRendered();
    }
  }
  reinitializeRow(e, t) {
    if (e.type !== "group" && (t || !e.modules.vdomHoz || e.modules.vdomHoz.leftCol !== this.leftCol || e.modules.vdomHoz.rightCol !== this.rightCol)) {
      for (var i = e.getElement(); i.firstChild; ) i.removeChild(i.firstChild);
      this.initializeRow(e);
    }
  }
}
class Rc extends Te {
  constructor(e) {
    super(e), this.blockHozScrollEvent = !1, this.headersElement = null, this.contentsElement = null, this.rowHeader = null, this.element = null, this.columns = [], this.columnsByIndex = [], this.columnsByField = {}, this.scrollLeft = 0, this.optionsList = new Yo(this.table, "column definition", Do), this.redrawBlock = !1, this.redrawBlockUpdate = null, this.renderer = null;
  }
  ////////////// Setup Functions /////////////////
  initialize() {
    this.initializeRenderer(), this.headersElement = this.createHeadersElement(), this.contentsElement = this.createHeaderContentsElement(), this.element = this.createHeaderElement(), this.contentsElement.insertBefore(this.headersElement, this.contentsElement.firstChild), this.element.insertBefore(this.contentsElement, this.element.firstChild), this.initializeScrollWheelWatcher(), this.subscribe("scroll-horizontal", this.scrollHorizontal.bind(this)), this.subscribe("scrollbar-vertical", this.padVerticalScrollbar.bind(this));
  }
  padVerticalScrollbar(e) {
    this.table.rtl ? this.headersElement.style.marginLeft = e + "px" : this.headersElement.style.marginRight = e + "px";
  }
  initializeRenderer() {
    var e, t = {
      virtual: kc,
      basic: Tc
    };
    typeof this.table.options.renderHorizontal == "string" ? e = t[this.table.options.renderHorizontal] : e = this.table.options.renderHorizontal, e ? (this.renderer = new e(this.table, this.element, this.tableElement), this.renderer.initialize()) : console.error("Unable to find matching renderer:", this.table.options.renderHorizontal);
  }
  createHeadersElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-headers"), e.setAttribute("role", "row"), e;
  }
  createHeaderContentsElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-header-contents"), e.setAttribute("role", "rowgroup"), e;
  }
  createHeaderElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-header"), e.setAttribute("role", "rowgroup"), this.table.options.headerVisible || e.classList.add("tabulator-header-hidden"), e;
  }
  //return containing element
  getElement() {
    return this.element;
  }
  //return containing contents element
  getContentsElement() {
    return this.contentsElement;
  }
  //return header containing element
  getHeadersElement() {
    return this.headersElement;
  }
  //scroll horizontally to match table body
  scrollHorizontal(e) {
    this.contentsElement.scrollLeft = e, this.scrollLeft = e, this.renderer.scrollColumns(e);
  }
  initializeScrollWheelWatcher() {
    this.contentsElement.addEventListener("wheel", (e) => {
      var t;
      e.deltaX && (t = this.contentsElement.scrollLeft + e.deltaX, this.table.rowManager.scrollHorizontal(t), this.table.columnManager.scrollHorizontal(t));
    });
  }
  ///////////// Column Setup Functions /////////////
  generateColumnsFromRowData(e) {
    var t = [], i = {}, s = this.table.options.autoColumns === "full" ? e : [e[0]], n = this.table.options.autoColumnsDefinitions;
    if (e && e.length) {
      if (s.forEach((a) => {
        Object.keys(a).forEach((o, l) => {
          let h = a[o], u;
          i[o] ? i[o] !== !0 && typeof h < "u" && (i[o].sorter = this.calculateSorterFromValue(h), i[o] = !0) : (u = {
            field: o,
            title: o,
            sorter: this.calculateSorterFromValue(h)
          }, t.splice(l, 0, u), i[o] = typeof h > "u" ? u : !0);
        });
      }), n)
        switch (typeof n) {
          case "function":
            this.table.options.columns = n.call(this.table, t);
            break;
          case "object":
            Array.isArray(n) ? t.forEach((a) => {
              var o = n.find((l) => l.field === a.field);
              o && Object.assign(a, o);
            }) : t.forEach((a) => {
              n[a.field] && Object.assign(a, n[a.field]);
            }), this.table.options.columns = t;
            break;
        }
      else
        this.table.options.columns = t;
      this.setColumns(this.table.options.columns);
    }
  }
  calculateSorterFromValue(e) {
    var t;
    switch (typeof e) {
      case "undefined":
        t = "string";
        break;
      case "boolean":
        t = "boolean";
        break;
      case "number":
        t = "number";
        break;
      case "object":
        Array.isArray(e) ? t = "array" : t = "string";
        break;
      default:
        !isNaN(e) && e !== "" ? t = "number" : e.match(/((^[0-9]+[a-z]+)|(^[a-z]+[0-9]+))+$/i) ? t = "alphanum" : t = "string";
        break;
    }
    return t;
  }
  setColumns(e, t) {
    for (; this.headersElement.firstChild; ) this.headersElement.removeChild(this.headersElement.firstChild);
    this.columns = [], this.columnsByIndex = [], this.columnsByField = {}, this.dispatch("columns-loading"), this.dispatchExternal("columnsLoading"), this.table.options.rowHeader && (this.rowHeader = new jt(this.table.options.rowHeader === !0 ? {} : this.table.options.rowHeader, this, !0), this.columns.push(this.rowHeader), this.headersElement.appendChild(this.rowHeader.getElement()), this.rowHeader.columnRendered()), e.forEach((i, s) => {
      this._addColumn(i);
    }), this._reIndexColumns(), this.dispatch("columns-loaded"), this.subscribedExternal("columnsLoaded") && this.dispatchExternal("columnsLoaded", this.getComponents()), this.rerenderColumns(!1, !0), this.redraw(!0);
  }
  _addColumn(e, t, i) {
    var s = new jt(e, this), n = s.getElement(), a = i && this.findColumnIndex(i);
    if (t && this.rowHeader && (!i || i === this.rowHeader) && (t = !1, i = this.rowHeader, a = 0), i && a > -1) {
      var o = i.getTopColumn(), l = this.columns.indexOf(o), h = o.getElement();
      t ? (this.columns.splice(l, 0, s), h.parentNode.insertBefore(n, h)) : (this.columns.splice(l + 1, 0, s), h.parentNode.insertBefore(n, h.nextSibling));
    } else
      t ? (this.columns.unshift(s), this.headersElement.insertBefore(s.getElement(), this.headersElement.firstChild)) : (this.columns.push(s), this.headersElement.appendChild(s.getElement()));
    return s.columnRendered(), s;
  }
  registerColumnField(e) {
    e.definition.field && (this.columnsByField[e.definition.field] = e);
  }
  registerColumnPosition(e) {
    this.columnsByIndex.push(e);
  }
  _reIndexColumns() {
    this.columnsByIndex = [], this.columns.forEach(function(e) {
      e.reRegisterPosition();
    });
  }
  //ensure column headers take up the correct amount of space in column groups
  verticalAlignHeaders() {
    var e = 0;
    this.redrawBlock || (this.headersElement.style.height = "", this.columns.forEach((t) => {
      t.clearVerticalAlign();
    }), this.columns.forEach((t) => {
      var i = t.getHeight();
      i > e && (e = i);
    }), this.headersElement.style.height = e + "px", this.columns.forEach((t) => {
      t.verticalAlign(this.table.options.columnHeaderVertAlign, e);
    }), this.table.rowManager.adjustTableSize());
  }
  //////////////// Column Details /////////////////
  findColumn(e) {
    var t;
    if (typeof e == "object") {
      if (e instanceof jt)
        return e;
      if (e instanceof So)
        return e._getSelf() || !1;
      if (typeof HTMLElement < "u" && e instanceof HTMLElement)
        return t = [], this.columns.forEach((s) => {
          t.push(s), t = t.concat(s.getColumns(!0));
        }), t.find((s) => s.element === e) || !1;
    } else
      return this.columnsByField[e] || !1;
    return !1;
  }
  getColumnByField(e) {
    return this.columnsByField[e];
  }
  getColumnsByFieldRoot(e) {
    var t = [];
    return Object.keys(this.columnsByField).forEach((i) => {
      var s = this.table.options.nestedFieldSeparator ? i.split(this.table.options.nestedFieldSeparator)[0] : i;
      s === e && t.push(this.columnsByField[i]);
    }), t;
  }
  getColumnByIndex(e) {
    return this.columnsByIndex[e];
  }
  getFirstVisibleColumn() {
    var e = this.columnsByIndex.findIndex((t) => t.visible);
    return e > -1 ? this.columnsByIndex[e] : !1;
  }
  getVisibleColumnsByIndex() {
    return this.columnsByIndex.filter((e) => e.visible);
  }
  getColumns() {
    return this.columns;
  }
  findColumnIndex(e) {
    return this.columnsByIndex.findIndex((t) => e === t);
  }
  //return all columns that are not groups
  getRealColumns() {
    return this.columnsByIndex;
  }
  //traverse across columns and call action
  traverse(e) {
    this.columnsByIndex.forEach((t, i) => {
      e(t, i);
    });
  }
  //get definitions of actual columns
  getDefinitions(e) {
    var t = [];
    return this.columnsByIndex.forEach((i) => {
      (!e || e && i.visible) && t.push(i.getDefinition());
    }), t;
  }
  //get full nested definition tree
  getDefinitionTree() {
    var e = [];
    return this.columns.forEach((t) => {
      e.push(t.getDefinition(!0));
    }), e;
  }
  getComponents(e) {
    var t = [], i = e ? this.columns : this.columnsByIndex;
    return i.forEach((s) => {
      t.push(s.getComponent());
    }), t;
  }
  getWidth() {
    var e = 0;
    return this.columnsByIndex.forEach((t) => {
      t.visible && (e += t.getWidth());
    }), e;
  }
  moveColumn(e, t, i) {
    t.element.parentNode.insertBefore(e.element, t.element), i && t.element.parentNode.insertBefore(t.element, e.element), this.moveColumnActual(e, t, i), this.verticalAlignHeaders(), this.table.rowManager.reinitialize();
  }
  moveColumnActual(e, t, i) {
    e.parent.isGroup ? this._moveColumnInArray(e.parent.columns, e, t, i) : this._moveColumnInArray(this.columns, e, t, i), this._moveColumnInArray(this.columnsByIndex, e, t, i, !0), this.rerenderColumns(!0), this.dispatch("column-moved", e, t, i), this.subscribedExternal("columnMoved") && this.dispatchExternal("columnMoved", e.getComponent(), this.table.columnManager.getComponents());
  }
  _moveColumnInArray(e, t, i, s, n) {
    var a = e.indexOf(t), o, l = [];
    a > -1 && (e.splice(a, 1), o = e.indexOf(i), o > -1 ? s && (o = o + 1) : o = a, e.splice(o, 0, t), n && (l = this.chain("column-moving-rows", [t, i, s], null, []) || [], l = l.concat(this.table.rowManager.rows), l.forEach(function(h) {
      if (h.cells.length) {
        var u = h.cells.splice(a, 1)[0];
        h.cells.splice(o, 0, u);
      }
    })));
  }
  scrollToColumn(e, t, i) {
    var s = 0, n = e.getLeftOffset(), a = 0, o = e.getElement();
    return new Promise((l, h) => {
      if (typeof t > "u" && (t = this.table.options.scrollToColumnPosition), typeof i > "u" && (i = this.table.options.scrollToColumnIfVisible), e.visible) {
        switch (t) {
          case "middle":
          case "center":
            a = -this.element.clientWidth / 2;
            break;
          case "right":
            a = o.clientWidth - this.headersElement.clientWidth;
            break;
        }
        if (!i && n > 0 && n + o.offsetWidth < this.element.clientWidth)
          return !1;
        s = n + a, s = Math.max(Math.min(s, this.table.rowManager.element.scrollWidth - this.table.rowManager.element.clientWidth), 0), this.table.rowManager.scrollHorizontal(s), this.scrollHorizontal(s), l();
      } else
        console.warn("Scroll Error - Column not visible"), h("Scroll Error - Column not visible");
    });
  }
  //////////////// Cell Management /////////////////
  generateCells(e) {
    var t = [];
    return this.columnsByIndex.forEach((i) => {
      t.push(i.generateCell(e));
    }), t;
  }
  //////////////// Column Management /////////////////
  getFlexBaseWidth() {
    var e = this.table.element.clientWidth, t = 0;
    return this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight && (e -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth), this.columnsByIndex.forEach(function(i) {
      var s, n, a;
      i.visible && (s = i.definition.width || 0, n = parseInt(i.minWidth), typeof s == "string" ? s.indexOf("%") > -1 ? a = e / 100 * parseInt(s) : a = parseInt(s) : a = s, t += a > n ? a : n);
    }), t;
  }
  addColumn(e, t, i) {
    return new Promise((s, n) => {
      var a = this._addColumn(e, t, i);
      this._reIndexColumns(), this.dispatch("column-add", e, t, i), this.layoutMode() != "fitColumns" && a.reinitializeWidth(), this.redraw(!0), this.table.rowManager.reinitialize(), this.rerenderColumns(), s(a);
    });
  }
  //remove column from system
  deregisterColumn(e) {
    var t = e.getField(), i;
    t && delete this.columnsByField[t], i = this.columnsByIndex.indexOf(e), i > -1 && this.columnsByIndex.splice(i, 1), i = this.columns.indexOf(e), i > -1 && this.columns.splice(i, 1), this.verticalAlignHeaders(), this.redraw();
  }
  rerenderColumns(e, t) {
    this.redrawBlock ? (e === !1 || e === !0 && this.redrawBlockUpdate === null) && (this.redrawBlockUpdate = e) : this.renderer.rerenderColumns(e, t);
  }
  blockRedraw() {
    this.redrawBlock = !0, this.redrawBlockUpdate = null;
  }
  restoreRedraw() {
    this.redrawBlock = !1, this.verticalAlignHeaders(), this.renderer.rerenderColumns(this.redrawBlockUpdate);
  }
  //redraw columns
  redraw(e) {
    de.elVisible(this.element) && this.verticalAlignHeaders(), e && (this.table.rowManager.resetScroll(), this.table.rowManager.reinitialize()), this.confirm("table-redrawing", e) || this.layoutRefresh(e), this.dispatch("table-redraw", e), this.table.footerManager.redraw();
  }
}
class xc extends Ws {
  constructor(e) {
    super(e), this.verticalFillMode = "fill", this.scrollTop = 0, this.scrollLeft = 0, this.scrollTop = 0, this.scrollLeft = 0;
  }
  clearRows() {
    for (var e = this.tableElement; e.firstChild; ) e.removeChild(e.firstChild);
    e.scrollTop = 0, e.scrollLeft = 0, e.style.minWidth = "", e.style.minHeight = "", e.style.display = "", e.style.visibility = "";
  }
  renderRows() {
    var e = this.tableElement, t = !0, i = document.createDocumentFragment(), s = this.rows();
    s.forEach((n, a) => {
      this.styleRow(n, a), n.initialize(!1, !0), n.type !== "group" && (t = !1), i.appendChild(n.getElement());
    }), e.appendChild(i), s.forEach((n) => {
      n.rendered(), n.heightInitialized || n.calcHeight(!0);
    }), s.forEach((n) => {
      n.heightInitialized || n.setCellHeight();
    }), t ? e.style.minWidth = this.table.columnManager.getWidth() + "px" : e.style.minWidth = "";
  }
  rerenderRows(e) {
    this.clearRows(), e && e(), this.renderRows(), this.rows().length || this.table.rowManager.tableEmpty();
  }
  scrollToRowNearestTop(e) {
    var t = de.elOffset(e.getElement()).top;
    return !(Math.abs(this.elementVertical.scrollTop - t) > Math.abs(this.elementVertical.scrollTop + this.elementVertical.clientHeight - t));
  }
  scrollToRow(e) {
    var t = e.getElement();
    this.elementVertical.scrollTop = de.elOffset(t).top - de.elOffset(this.elementVertical).top + this.elementVertical.scrollTop;
  }
  visibleRows(e) {
    return this.rows();
  }
}
class Mc extends Ws {
  constructor(e) {
    super(e), this.verticalFillMode = "fill", this.scrollTop = 0, this.scrollLeft = 0, this.vDomRowHeight = 20, this.vDomTop = 0, this.vDomBottom = 0, this.vDomScrollPosTop = 0, this.vDomScrollPosBottom = 0, this.vDomTopPad = 0, this.vDomBottomPad = 0, this.vDomMaxRenderChain = 90, this.vDomWindowBuffer = 0, this.vDomWindowMinTotalRows = 20, this.vDomWindowMinMarginRows = 5, this.vDomTopNewRows = [], this.vDomBottomNewRows = [];
  }
  //////////////////////////////////////
  ///////// Public Functions ///////////
  //////////////////////////////////////
  clearRows() {
    for (var e = this.tableElement; e.firstChild; ) e.removeChild(e.firstChild);
    e.style.paddingTop = "", e.style.paddingBottom = "", e.style.minHeight = "", e.style.display = "", e.style.visibility = "", this.elementVertical.scrollTop = 0, this.elementVertical.scrollLeft = 0, this.scrollTop = 0, this.scrollLeft = 0, this.vDomTop = 0, this.vDomBottom = 0, this.vDomTopPad = 0, this.vDomBottomPad = 0, this.vDomScrollPosTop = 0, this.vDomScrollPosBottom = 0;
  }
  renderRows() {
    this._virtualRenderFill();
  }
  rerenderRows(e) {
    for (var t = this.elementVertical.scrollTop, i = !1, s = !1, n = this.table.rowManager.scrollLeft, a = this.rows(), o = this.vDomTop; o <= this.vDomBottom; o++)
      if (a[o]) {
        var l = t - a[o].getElement().offsetTop;
        if (s === !1 || Math.abs(l) < s)
          s = l, i = o;
        else
          break;
      }
    a.forEach((h) => {
      h.deinitializeHeight();
    }), e && e(), this.rows().length ? this._virtualRenderFill(i === !1 ? this.rows.length - 1 : i, !0, s || 0) : (this.clear(), this.table.rowManager.tableEmpty()), this.scrollColumns(n);
  }
  scrollColumns(e) {
    this.table.rowManager.scrollHorizontal(e);
  }
  scrollRows(e, t) {
    var i = e - this.vDomScrollPosTop, s = e - this.vDomScrollPosBottom, n = this.vDomWindowBuffer * 2, a = this.rows();
    if (this.scrollTop = e, -i > n || s > n) {
      var o = this.table.rowManager.scrollLeft;
      this._virtualRenderFill(Math.floor(this.elementVertical.scrollTop / this.elementVertical.scrollHeight * a.length)), this.scrollColumns(o);
    } else
      t ? (i < 0 && this._addTopRow(a, -i), s < 0 && (this.vDomScrollHeight - this.scrollTop > this.vDomWindowBuffer ? this._removeBottomRow(a, -s) : this.vDomScrollPosBottom = this.scrollTop)) : (s >= 0 && this._addBottomRow(a, s), i >= 0 && (this.scrollTop > this.vDomWindowBuffer ? this._removeTopRow(a, i) : this.vDomScrollPosTop = this.scrollTop));
  }
  resize() {
    this.vDomWindowBuffer = this.table.options.renderVerticalBuffer || this.elementVertical.clientHeight;
  }
  scrollToRowNearestTop(e) {
    var t = this.rows().indexOf(e);
    return !(Math.abs(this.vDomTop - t) > Math.abs(this.vDomBottom - t));
  }
  scrollToRow(e) {
    var t = this.rows().indexOf(e);
    t > -1 && this._virtualRenderFill(t, !0);
  }
  visibleRows(e) {
    var t = this.elementVertical.scrollTop, i = this.elementVertical.clientHeight + t, s = !1, n = 0, a = 0, o = this.rows();
    if (e)
      n = this.vDomTop, a = this.vDomBottom;
    else
      for (var l = this.vDomTop; l <= this.vDomBottom; l++)
        if (o[l])
          if (s)
            if (i - o[l].getElement().offsetTop >= 0)
              a = l;
            else
              break;
          else if (t - o[l].getElement().offsetTop >= 0)
            n = l;
          else if (s = !0, i - o[l].getElement().offsetTop >= 0)
            a = l;
          else
            break;
    return o.slice(n, a + 1);
  }
  //////////////////////////////////////
  //////// Internal Rendering //////////
  //////////////////////////////////////
  //full virtual render
  _virtualRenderFill(e, t, i) {
    var s = this.tableElement, n = this.elementVertical, a = 0, o = 0, l = 0, h = 0, u = 0, d = 0, f = this.rows(), b = f.length, T = 0, E, S, k = [], z = 0, N = 0, J = this.table.rowManager.fixedHeight, q = this.elementVertical.clientHeight, te = this.table.options.rowHeight, ne = !0;
    if (e = e || 0, i = i || 0, !e)
      this.clear();
    else {
      for (; s.firstChild; ) s.removeChild(s.firstChild);
      h = (b - e + 1) * this.vDomRowHeight, h < q && (e -= Math.ceil((q - h) / this.vDomRowHeight), e < 0 && (e = 0)), a = Math.min(Math.max(Math.floor(this.vDomWindowBuffer / this.vDomRowHeight), this.vDomWindowMinMarginRows), e), e -= a;
    }
    if (b && de.elVisible(this.elementVertical)) {
      for (this.vDomTop = e, this.vDomBottom = e - 1, J || this.table.options.maxHeight ? (te && (N = q / te + this.vDomWindowBuffer / te), N = Math.max(this.vDomWindowMinTotalRows, Math.ceil(N))) : N = b; (N == b || o <= q + this.vDomWindowBuffer || z < this.vDomWindowMinTotalRows) && this.vDomBottom < b - 1; ) {
        for (k = [], S = document.createDocumentFragment(), d = 0; d < N && this.vDomBottom < b - 1; )
          T = this.vDomBottom + 1, E = f[T], this.styleRow(E, T), E.initialize(!1, !0), !E.heightInitialized && !this.table.options.rowHeight && E.clearCellHeight(), S.appendChild(E.getElement()), k.push(E), this.vDomBottom++, d++;
        if (!k.length)
          break;
        s.appendChild(S), k.forEach((B) => {
          B.rendered(), B.heightInitialized || B.calcHeight(!0);
        }), k.forEach((B) => {
          B.heightInitialized || B.setCellHeight();
        }), k.forEach((B) => {
          l = B.getHeight(), z < a ? u += l : o += l, l > this.vDomWindowBuffer && (this.vDomWindowBuffer = l * 2), z++;
        }), ne = this.table.rowManager.adjustTableSize(), q = this.elementVertical.clientHeight, ne && (J || this.table.options.maxHeight) && (te = o / z, N = Math.max(this.vDomWindowMinTotalRows, Math.ceil(q / te + this.vDomWindowBuffer / te)));
      }
      e ? (this.vDomTopPad = t ? this.vDomRowHeight * this.vDomTop + i : this.scrollTop - u, this.vDomBottomPad = this.vDomBottom == b - 1 ? 0 : Math.max(this.vDomScrollHeight - this.vDomTopPad - o - u, 0)) : (this.vDomTopPad = 0, this.vDomRowHeight = Math.floor((o + u) / z), this.vDomBottomPad = this.vDomRowHeight * (b - this.vDomBottom - 1), this.vDomScrollHeight = u + o + this.vDomBottomPad - q), s.style.paddingTop = this.vDomTopPad + "px", s.style.paddingBottom = this.vDomBottomPad + "px", t && (this.scrollTop = this.vDomTopPad + u + i - (this.elementVertical.scrollWidth > this.elementVertical.clientWidth ? this.elementVertical.offsetHeight - q : 0)), this.scrollTop = Math.min(this.scrollTop, this.elementVertical.scrollHeight - q), this.elementVertical.scrollWidth > this.elementVertical.clientWidth && t && (this.scrollTop += this.elementVertical.offsetHeight - q), this.vDomScrollPosTop = this.scrollTop, this.vDomScrollPosBottom = this.scrollTop, n.scrollTop = this.scrollTop, this.dispatch("render-virtual-fill");
    }
  }
  _addTopRow(e, t) {
    for (var i = this.tableElement, s = [], n = 0, a = this.vDomTop - 1, o = 0, l = !0; l; )
      if (this.vDomTop) {
        let h = e[a], u, d;
        h && o < this.vDomMaxRenderChain ? (u = h.getHeight() || this.vDomRowHeight, d = h.initialized, t >= u ? (this.styleRow(h, a), i.insertBefore(h.getElement(), i.firstChild), (!h.initialized || !h.heightInitialized) && s.push(h), h.initialize(), d || (u = h.getElement().offsetHeight, u > this.vDomWindowBuffer && (this.vDomWindowBuffer = u * 2)), t -= u, n += u, this.vDomTop--, a--, o++) : l = !1) : l = !1;
      } else
        l = !1;
    for (let h of s)
      h.clearCellHeight();
    this._quickNormalizeRowHeight(s), n && (this.vDomTopPad -= n, this.vDomTopPad < 0 && (this.vDomTopPad = a * this.vDomRowHeight), a < 1 && (this.vDomTopPad = 0), i.style.paddingTop = this.vDomTopPad + "px", this.vDomScrollPosTop -= n);
  }
  _removeTopRow(e, t) {
    for (var i = [], s = 0, n = 0, a = !0; a; ) {
      let o = e[this.vDomTop], l;
      o && n < this.vDomMaxRenderChain ? (l = o.getHeight() || this.vDomRowHeight, t >= l ? (this.vDomTop++, t -= l, s += l, i.push(o), n++) : a = !1) : a = !1;
    }
    for (let o of i) {
      let l = o.getElement();
      l.parentNode && l.parentNode.removeChild(l);
    }
    s && (this.vDomTopPad += s, this.tableElement.style.paddingTop = this.vDomTopPad + "px", this.vDomScrollPosTop += this.vDomTop ? s : s + this.vDomWindowBuffer);
  }
  _addBottomRow(e, t) {
    for (var i = this.tableElement, s = [], n = 0, a = this.vDomBottom + 1, o = 0, l = !0; l; ) {
      let h = e[a], u, d;
      h && o < this.vDomMaxRenderChain ? (u = h.getHeight() || this.vDomRowHeight, d = h.initialized, t >= u ? (this.styleRow(h, a), i.appendChild(h.getElement()), (!h.initialized || !h.heightInitialized) && s.push(h), h.initialize(), d || (u = h.getElement().offsetHeight, u > this.vDomWindowBuffer && (this.vDomWindowBuffer = u * 2)), t -= u, n += u, this.vDomBottom++, a++, o++) : l = !1) : l = !1;
    }
    for (let h of s)
      h.clearCellHeight();
    this._quickNormalizeRowHeight(s), n && (this.vDomBottomPad -= n, (this.vDomBottomPad < 0 || a == e.length - 1) && (this.vDomBottomPad = 0), i.style.paddingBottom = this.vDomBottomPad + "px", this.vDomScrollPosBottom += n);
  }
  _removeBottomRow(e, t) {
    for (var i = [], s = 0, n = 0, a = !0; a; ) {
      let o = e[this.vDomBottom], l;
      o && n < this.vDomMaxRenderChain ? (l = o.getHeight() || this.vDomRowHeight, t >= l ? (this.vDomBottom--, t -= l, s += l, i.push(o), n++) : a = !1) : a = !1;
    }
    for (let o of i) {
      let l = o.getElement();
      l.parentNode && l.parentNode.removeChild(l);
    }
    s && (this.vDomBottomPad += s, this.vDomBottomPad < 0 && (this.vDomBottomPad = 0), this.tableElement.style.paddingBottom = this.vDomBottomPad + "px", this.vDomScrollPosBottom -= s);
  }
  _quickNormalizeRowHeight(e) {
    for (let t of e)
      t.calcHeight();
    for (let t of e)
      t.setCellHeight();
  }
}
class Sc extends Te {
  constructor(e) {
    super(e), this.element = this.createHolderElement(), this.tableElement = this.createTableElement(), this.heightFixer = this.createTableElement(), this.placeholder = null, this.placeholderContents = null, this.firstRender = !1, this.renderMode = "virtual", this.fixedHeight = !1, this.rows = [], this.activeRowsPipeline = [], this.activeRows = [], this.activeRowsCount = 0, this.displayRows = [], this.displayRowsCount = 0, this.scrollTop = 0, this.scrollLeft = 0, this.redrawBlock = !1, this.redrawBlockRestoreConfig = !1, this.redrawBlockRenderInPosition = !1, this.dataPipeline = [], this.displayPipeline = [], this.scrollbarWidth = 0, this.renderer = null;
  }
  //////////////// Setup Functions /////////////////
  createHolderElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-tableholder"), e.setAttribute("tabindex", 0), e;
  }
  createTableElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-table"), e.setAttribute("role", "rowgroup"), e;
  }
  initializePlaceholder() {
    var e = this.table.options.placeholder;
    if (typeof e == "function" && (e = e.call(this.table)), e = this.chain("placeholder", [e], e, e) || e, e) {
      let t = document.createElement("div");
      if (t.classList.add("tabulator-placeholder"), typeof e == "string") {
        let i = document.createElement("div");
        i.classList.add("tabulator-placeholder-contents"), i.innerHTML = e, t.appendChild(i), this.placeholderContents = i;
      } else typeof HTMLElement < "u" && e instanceof HTMLElement ? (t.appendChild(e), this.placeholderContents = e) : (console.warn("Invalid placeholder provided, must be string or HTML Element", e), this.el = null);
      this.placeholder = t;
    }
  }
  //return containing element
  getElement() {
    return this.element;
  }
  //return table element
  getTableElement() {
    return this.tableElement;
  }
  initialize() {
    this.initializePlaceholder(), this.initializeRenderer(), this.element.appendChild(this.tableElement), this.firstRender = !0, this.element.addEventListener("scroll", () => {
      var e = this.element.scrollLeft, t = this.scrollLeft > e, i = this.element.scrollTop, s = this.scrollTop > i;
      this.scrollLeft != e && (this.scrollLeft = e, this.dispatch("scroll-horizontal", e, t), this.dispatchExternal("scrollHorizontal", e, t), this._positionPlaceholder()), this.scrollTop != i && (this.scrollTop = i, this.renderer.scrollRows(i, s), this.dispatch("scroll-vertical", i, s), this.dispatchExternal("scrollVertical", i, s));
    });
  }
  ////////////////// Row Manipulation //////////////////
  findRow(e) {
    if (typeof e == "object") {
      if (e instanceof xe)
        return e;
      if (e instanceof Vs)
        return e._getSelf() || !1;
      if (typeof HTMLElement < "u" && e instanceof HTMLElement)
        return this.rows.find((i) => i.getElement() === e) || !1;
      if (e === null)
        return !1;
    } else return typeof e > "u" ? !1 : this.rows.find((i) => i.data[this.table.options.index] == e) || !1;
    return !1;
  }
  getRowFromDataObject(e) {
    var t = this.rows.find((i) => i.data === e);
    return t || !1;
  }
  getRowFromPosition(e) {
    return this.getDisplayRows().find((t) => t.type === "row" && t.getPosition() === e && t.isDisplayed());
  }
  scrollToRow(e, t, i) {
    return this.renderer.scrollToRowPosition(e, t, i);
  }
  ////////////////// Data Handling //////////////////
  setData(e, t, i) {
    return new Promise((s, n) => {
      t && this.getDisplayRows().length ? this.table.options.pagination ? this._setDataActual(e, !0) : this.reRenderInPosition(() => {
        this._setDataActual(e);
      }) : (this.table.options.autoColumns && i && this.table.initialized && this.table.columnManager.generateColumnsFromRowData(e), this.resetScroll(), this._setDataActual(e)), s();
    });
  }
  _setDataActual(e, t) {
    this.dispatchExternal("dataProcessing", e), this._wipeElements(), Array.isArray(e) ? (this.dispatch("data-processing", e), e.forEach((i, s) => {
      if (i && typeof i == "object") {
        var n = new xe(i, this);
        this.rows.push(n);
      } else
        console.warn("Data Loading Warning - Invalid row data detected and ignored, expecting object but received:", i);
    }), this.refreshActiveData(!1, !1, t), this.dispatch("data-processed", e), this.dispatchExternal("dataProcessed", e)) : console.error(`Data Loading Error - Unable to process data due to invalid data type 
Expecting: array 
Received: `, typeof e, `
Data:     `, e);
  }
  _wipeElements() {
    this.dispatch("rows-wipe"), this.destroy(), this.adjustTableSize(), this.dispatch("rows-wiped");
  }
  destroy() {
    this.rows.forEach((e) => {
      e.wipe();
    }), this.rows = [], this.activeRows = [], this.activeRowsPipeline = [], this.activeRowsCount = 0, this.displayRows = [], this.displayRowsCount = 0;
  }
  deleteRow(e, t) {
    var i = this.rows.indexOf(e), s = this.activeRows.indexOf(e);
    s > -1 && this.activeRows.splice(s, 1), i > -1 && this.rows.splice(i, 1), this.setActiveRows(this.activeRows), this.displayRowIterator((n) => {
      var a = n.indexOf(e);
      a > -1 && n.splice(a, 1);
    }), t || this.reRenderInPosition(), this.regenerateRowPositions(), this.dispatchExternal("rowDeleted", e.getComponent()), this.displayRowsCount || this.tableEmpty(), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.getData());
  }
  addRow(e, t, i, s) {
    var n = this.addRowActual(e, t, i, s);
    return n;
  }
  //add multiple rows
  addRows(e, t, i, s) {
    var n = [];
    return new Promise((a, o) => {
      t = this.findAddRowPos(t), Array.isArray(e) || (e = [e]), (typeof i > "u" && t || typeof i < "u" && !t) && e.reverse(), e.forEach((l, h) => {
        var u = this.addRow(l, t, i, !0);
        n.push(u), this.dispatch("row-added", u, l, t, i);
      }), this.refreshActiveData(s ? "displayPipeline" : !1, !1, !0), this.regenerateRowPositions(), this.displayRowsCount && this._clearPlaceholder(), a(n);
    });
  }
  findAddRowPos(e) {
    return typeof e > "u" && (e = this.table.options.addRowPos), e === "pos" && (e = !0), e === "bottom" && (e = !1), e;
  }
  addRowActual(e, t, i, s) {
    var n = e instanceof xe ? e : new xe(e || {}, this), a = this.findAddRowPos(t), o = -1, l, h;
    return i || (h = this.chain("row-adding-position", [n, a], null, { index: i, top: a }), i = h.index, a = h.top), typeof i < "u" && (i = this.findRow(i)), i = this.chain("row-adding-index", [n, i, a], null, i), i && (o = this.rows.indexOf(i)), i && o > -1 ? (l = this.activeRows.indexOf(i), this.displayRowIterator(function(u) {
      var d = u.indexOf(i);
      d > -1 && u.splice(a ? d : d + 1, 0, n);
    }), l > -1 && this.activeRows.splice(a ? l : l + 1, 0, n), this.rows.splice(a ? o : o + 1, 0, n)) : a ? (this.displayRowIterator(function(u) {
      u.unshift(n);
    }), this.activeRows.unshift(n), this.rows.unshift(n)) : (this.displayRowIterator(function(u) {
      u.push(n);
    }), this.activeRows.push(n), this.rows.push(n)), this.setActiveRows(this.activeRows), this.dispatchExternal("rowAdded", n.getComponent()), this.subscribedExternal("dataChanged") && this.dispatchExternal("dataChanged", this.table.rowManager.getData()), s || this.reRenderInPosition(), n;
  }
  moveRow(e, t, i) {
    this.dispatch("row-move", e, t, i), this.moveRowActual(e, t, i), this.regenerateRowPositions(), this.dispatch("row-moved", e, t, i), this.dispatchExternal("rowMoved", e.getComponent());
  }
  moveRowActual(e, t, i) {
    this.moveRowInArray(this.rows, e, t, i), this.moveRowInArray(this.activeRows, e, t, i), this.displayRowIterator((s) => {
      this.moveRowInArray(s, e, t, i);
    }), this.dispatch("row-moving", e, t, i);
  }
  moveRowInArray(e, t, i, s) {
    var n, a, o, l;
    if (t !== i && (n = e.indexOf(t), n > -1 && (e.splice(n, 1), a = e.indexOf(i), a > -1 ? s ? e.splice(a + 1, 0, t) : e.splice(a, 0, t) : e.splice(n, 0, t)), e === this.getDisplayRows())) {
      o = n < a ? n : a, l = a > n ? a : n + 1;
      for (let h = o; h <= l; h++)
        e[h] && this.styleRow(e[h], h);
    }
  }
  clearData() {
    this.setData([]);
  }
  getRowIndex(e) {
    return this.findRowIndex(e, this.rows);
  }
  getDisplayRowIndex(e) {
    var t = this.getDisplayRows().indexOf(e);
    return t > -1 ? t : !1;
  }
  nextDisplayRow(e, t) {
    var i = this.getDisplayRowIndex(e), s = !1;
    return i !== !1 && i < this.displayRowsCount - 1 && (s = this.getDisplayRows()[i + 1]), s && (!(s instanceof xe) || s.type != "row") ? this.nextDisplayRow(s, t) : s;
  }
  prevDisplayRow(e, t) {
    var i = this.getDisplayRowIndex(e), s = !1;
    return i && (s = this.getDisplayRows()[i - 1]), t && s && (!(s instanceof xe) || s.type != "row") ? this.prevDisplayRow(s, t) : s;
  }
  findRowIndex(e, t) {
    var i;
    return e = this.findRow(e), e && (i = t.indexOf(e), i > -1) ? i : !1;
  }
  getData(e, t) {
    var i = [], s = this.getRows(e);
    return s.forEach(function(n) {
      n.type == "row" && i.push(n.getData(t || "data"));
    }), i;
  }
  getComponents(e) {
    var t = [], i = this.getRows(e);
    return i.forEach(function(s) {
      t.push(s.getComponent());
    }), t;
  }
  getDataCount(e) {
    var t = this.getRows(e);
    return t.length;
  }
  scrollHorizontal(e) {
    this.scrollLeft = e, this.element.scrollLeft = e, this.dispatch("scroll-horizontal", e);
  }
  registerDataPipelineHandler(e, t) {
    typeof t < "u" ? (this.dataPipeline.push({ handler: e, priority: t }), this.dataPipeline.sort((i, s) => i.priority - s.priority)) : console.error("Data pipeline handlers must have a priority in order to be registered");
  }
  registerDisplayPipelineHandler(e, t) {
    typeof t < "u" ? (this.displayPipeline.push({ handler: e, priority: t }), this.displayPipeline.sort((i, s) => i.priority - s.priority)) : console.error("Display pipeline handlers must have a priority in order to be registered");
  }
  //set active data set
  refreshActiveData(e, t, i) {
    var s = this.table, n = "", a = 0, o = ["all", "dataPipeline", "display", "displayPipeline", "end"];
    if (!this.table.destroyed) {
      if (typeof e == "function")
        if (a = this.dataPipeline.findIndex((l) => l.handler === e), a > -1)
          n = "dataPipeline", t && (a == this.dataPipeline.length - 1 ? n = "display" : a++);
        else if (a = this.displayPipeline.findIndex((l) => l.handler === e), a > -1)
          n = "displayPipeline", t && (a == this.displayPipeline.length - 1 ? n = "end" : a++);
        else {
          console.error("Unable to refresh data, invalid handler provided", e);
          return;
        }
      else
        n = e || "all", a = 0;
      if (this.redrawBlock) {
        (!this.redrawBlockRestoreConfig || this.redrawBlockRestoreConfig && (this.redrawBlockRestoreConfig.stage === n && a < this.redrawBlockRestoreConfig.index || o.indexOf(n) < o.indexOf(this.redrawBlockRestoreConfig.stage))) && (this.redrawBlockRestoreConfig = {
          handler: e,
          skipStage: t,
          renderInPosition: i,
          stage: n,
          index: a
        });
        return;
      } else
        de.elVisible(this.element) ? i ? this.reRenderInPosition(this.refreshPipelines.bind(this, e, n, a, i)) : (this.refreshPipelines(e, n, a, i), e || this.table.columnManager.renderer.renderColumns(), this.renderTable(), s.options.layoutColumnsOnNewData && this.table.columnManager.redraw(!0)) : this.refreshPipelines(e, n, a, i), this.dispatch("data-refreshed");
    }
  }
  refreshPipelines(e, t, i, s) {
    switch (this.dispatch("data-refreshing"), (!e || !this.activeRowsPipeline[0]) && (this.activeRowsPipeline[0] = this.rows.slice(0)), t) {
      case "all":
      case "dataPipeline":
        for (let n = i; n < this.dataPipeline.length; n++) {
          let a = this.dataPipeline[n].handler(this.activeRowsPipeline[n].slice(0));
          this.activeRowsPipeline[n + 1] = a || this.activeRowsPipeline[n].slice(0);
        }
        this.setActiveRows(this.activeRowsPipeline[this.dataPipeline.length]);
      case "display":
        i = 0, this.resetDisplayRows();
      case "displayPipeline":
        for (let n = i; n < this.displayPipeline.length; n++) {
          let a = this.displayPipeline[n].handler((n ? this.getDisplayRows(n - 1) : this.activeRows).slice(0), s);
          this.setDisplayRows(a || this.getDisplayRows(n - 1).slice(0), n);
        }
      case "end":
        this.regenerateRowPositions();
    }
    this.getDisplayRows().length && this._clearPlaceholder();
  }
  //regenerate row positions
  regenerateRowPositions() {
    var e = this.getDisplayRows(), t = 1;
    e.forEach((i) => {
      i.type === "row" && (i.setPosition(t), t++);
    });
  }
  setActiveRows(e) {
    this.activeRows = this.activeRows = Object.assign([], e), this.activeRowsCount = this.activeRows.length;
  }
  //reset display rows array
  resetDisplayRows() {
    this.displayRows = [], this.displayRows.push(this.activeRows.slice(0)), this.displayRowsCount = this.displayRows[0].length;
  }
  //set display row pipeline data
  setDisplayRows(e, t) {
    this.displayRows[t] = e, t == this.displayRows.length - 1 && (this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length);
  }
  getDisplayRows(e) {
    return typeof e > "u" ? this.displayRows.length ? this.displayRows[this.displayRows.length - 1] : [] : this.displayRows[e] || [];
  }
  getVisibleRows(e, t) {
    var i = Object.assign([], this.renderer.visibleRows(!t));
    return e && (i = this.chain("rows-visible", [t], i, i)), i;
  }
  //repeat action across display rows
  displayRowIterator(e) {
    this.activeRowsPipeline.forEach(e), this.displayRows.forEach(e), this.displayRowsCount = this.displayRows[this.displayRows.length - 1].length;
  }
  //return only actual rows (not group headers etc)
  getRows(e) {
    var t = [];
    switch (e) {
      case "active":
        t = this.activeRows;
        break;
      case "display":
        t = this.table.rowManager.getDisplayRows();
        break;
      case "visible":
        t = this.getVisibleRows(!1, !0);
        break;
      default:
        t = this.chain("rows-retrieve", e, null, this.rows) || this.rows;
    }
    return t;
  }
  ///////////////// Table Rendering /////////////////
  //trigger rerender of table in current position
  reRenderInPosition(e) {
    this.redrawBlock ? e ? e() : this.redrawBlockRenderInPosition = !0 : (this.dispatchExternal("renderStarted"), this.renderer.rerenderRows(e), this.fixedHeight || this.adjustTableSize(), this.scrollBarCheck(), this.dispatchExternal("renderComplete"));
  }
  scrollBarCheck() {
    var e = 0;
    this.element.scrollHeight > this.element.clientHeight && (e = this.element.offsetWidth - this.element.clientWidth), e !== this.scrollbarWidth && (this.scrollbarWidth = e, this.dispatch("scrollbar-vertical", e));
  }
  initializeRenderer() {
    var e, t = {
      virtual: Mc,
      basic: xc
    };
    typeof this.table.options.renderVertical == "string" ? e = t[this.table.options.renderVertical] : e = this.table.options.renderVertical, e ? (this.renderMode = this.table.options.renderVertical, this.renderer = new e(this.table, this.element, this.tableElement), this.renderer.initialize(), (this.table.element.clientHeight || this.table.options.height) && !(this.table.options.minHeight && this.table.options.maxHeight) ? this.fixedHeight = !0 : this.fixedHeight = !1) : console.error("Unable to find matching renderer:", this.table.options.renderVertical);
  }
  getRenderMode() {
    return this.renderMode;
  }
  renderTable() {
    this.dispatchExternal("renderStarted"), this.element.scrollTop = 0, this._clearTable(), this.displayRowsCount ? (this.renderer.renderRows(), this.firstRender && (this.firstRender = !1, this.fixedHeight || this.adjustTableSize(), this.layoutRefresh(!0))) : this.renderEmptyScroll(), this.fixedHeight || this.adjustTableSize(), this.dispatch("table-layout"), this.displayRowsCount || this._showPlaceholder(), this.scrollBarCheck(), this.dispatchExternal("renderComplete");
  }
  //show scrollbars on empty table div
  renderEmptyScroll() {
    this.placeholder ? this.tableElement.style.display = "none" : this.tableElement.style.minWidth = this.table.columnManager.getWidth() + "px";
  }
  _clearTable() {
    this._clearPlaceholder(), this.scrollTop = 0, this.scrollLeft = 0, this.renderer.clearRows();
  }
  tableEmpty() {
    this.renderEmptyScroll(), this._showPlaceholder();
  }
  checkPlaceholder() {
    this.displayRowsCount ? this._clearPlaceholder() : this.tableEmpty();
  }
  _showPlaceholder() {
    this.placeholder && (this.placeholder && this.placeholder.parentNode && this.placeholder.parentNode.removeChild(this.placeholder), this.initializePlaceholder(), this.placeholder.setAttribute("tabulator-render-mode", this.renderMode), this.getElement().appendChild(this.placeholder), this._positionPlaceholder(), this.adjustTableSize());
  }
  _clearPlaceholder() {
    this.placeholder && this.placeholder.parentNode && this.placeholder.parentNode.removeChild(this.placeholder), this.tableElement.style.minWidth = "", this.tableElement.style.display = "";
  }
  _positionPlaceholder() {
    this.placeholder && this.placeholder.parentNode && (this.placeholder.style.width = this.table.columnManager.getWidth() + "px", this.placeholderContents.style.width = this.table.rowManager.element.clientWidth + "px", this.placeholderContents.style.marginLeft = this.scrollLeft + "px");
  }
  styleRow(e, t) {
    var i = e.getElement();
    t % 2 ? (i.classList.add("tabulator-row-even"), i.classList.remove("tabulator-row-odd")) : (i.classList.add("tabulator-row-odd"), i.classList.remove("tabulator-row-even"));
  }
  //normalize height of active rows
  normalizeHeight(e) {
    this.activeRows.forEach(function(t) {
      t.normalizeHeight(e);
    });
  }
  //adjust the height of the table holder to fit in the Tabulator element
  adjustTableSize() {
    let e = this.element.clientHeight, t, i = !1;
    if (this.renderer.verticalFillMode === "fill") {
      let s = Math.floor(this.table.columnManager.getElement().getBoundingClientRect().height + (this.table.footerManager && this.table.footerManager.active && !this.table.footerManager.external ? this.table.footerManager.getElement().getBoundingClientRect().height : 0));
      if (this.fixedHeight) {
        t = isNaN(this.table.options.minHeight) ? this.table.options.minHeight : this.table.options.minHeight + "px";
        const n = "calc(100% - " + s + "px)";
        this.element.style.minHeight = t || "calc(100% - " + s + "px)", this.element.style.height = n, this.element.style.maxHeight = n;
      } else
        this.element.style.height = "", this.element.style.height = this.table.element.clientHeight - s + "px", this.element.scrollTop = this.scrollTop;
      this.renderer.resize(), !this.fixedHeight && e != this.element.clientHeight && (i = !0, this.subscribed("table-resize") ? this.dispatch("table-resize") : this.redraw()), this.scrollBarCheck();
    }
    return this._positionPlaceholder(), i;
  }
  //reinitialize all rows
  reinitialize() {
    this.rows.forEach(function(e) {
      e.reinitialize(!0);
    });
  }
  //prevent table from being redrawn
  blockRedraw() {
    this.redrawBlock = !0, this.redrawBlockRestoreConfig = !1;
  }
  //restore table redrawing
  restoreRedraw() {
    this.redrawBlock = !1, this.redrawBlockRestoreConfig ? (this.refreshActiveData(this.redrawBlockRestoreConfig.handler, this.redrawBlockRestoreConfig.skipStage, this.redrawBlockRestoreConfig.renderInPosition), this.redrawBlockRestoreConfig = !1) : this.redrawBlockRenderInPosition && this.reRenderInPosition(), this.redrawBlockRenderInPosition = !1;
  }
  //redraw table
  redraw(e) {
    this.adjustTableSize(), this.table.tableWidth = this.table.element.clientWidth, e ? this.renderTable() : (this.reRenderInPosition(), this.scrollHorizontal(this.scrollLeft));
  }
  resetScroll() {
    if (this.element.scrollLeft = 0, this.element.scrollTop = 0, this.table.browser === "ie") {
      var e = document.createEvent("Event");
      e.initEvent("scroll", !1, !0), this.element.dispatchEvent(e);
    } else
      this.element.dispatchEvent(new Event("scroll"));
  }
}
class Dc extends Te {
  constructor(e) {
    super(e), this.active = !1, this.element = this.createElement(), this.containerElement = this.createContainerElement(), this.external = !1;
  }
  initialize() {
    this.initializeElement();
  }
  createElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-footer"), e;
  }
  createContainerElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-footer-contents"), this.element.appendChild(e), e;
  }
  initializeElement() {
    if (this.table.options.footerElement)
      switch (typeof this.table.options.footerElement) {
        case "string":
          this.table.options.footerElement[0] === "<" ? this.containerElement.innerHTML = this.table.options.footerElement : (this.external = !0, this.containerElement = document.querySelector(this.table.options.footerElement));
          break;
        default:
          this.element = this.table.options.footerElement;
          break;
      }
  }
  getElement() {
    return this.element;
  }
  append(e) {
    this.activate(), this.containerElement.appendChild(e), this.table.rowManager.adjustTableSize();
  }
  prepend(e) {
    this.activate(), this.element.insertBefore(e, this.element.firstChild), this.table.rowManager.adjustTableSize();
  }
  remove(e) {
    e.parentNode.removeChild(e), this.deactivate();
  }
  deactivate(e) {
    (!this.element.firstChild || e) && (this.external || this.element.parentNode.removeChild(this.element), this.active = !1);
  }
  activate() {
    this.active || (this.active = !0, this.external || (this.table.element.appendChild(this.getElement()), this.table.element.style.display = ""));
  }
  redraw() {
    this.dispatch("footer-redraw");
  }
}
class Lc extends Te {
  constructor(e) {
    super(e), this.el = null, this.abortClasses = ["tabulator-headers", "tabulator-table"], this.previousTargets = {}, this.listeners = [
      "click",
      "dblclick",
      "contextmenu",
      "mouseenter",
      "mouseleave",
      "mouseover",
      "mouseout",
      "mousemove",
      "mouseup",
      "mousedown",
      "touchstart",
      "touchend"
    ], this.componentMap = {
      "tabulator-cell": "cell",
      "tabulator-row": "row",
      "tabulator-group": "group",
      "tabulator-col": "column"
    }, this.pseudoTrackers = {
      row: {
        subscriber: null,
        target: null
      },
      cell: {
        subscriber: null,
        target: null
      },
      group: {
        subscriber: null,
        target: null
      },
      column: {
        subscriber: null,
        target: null
      }
    }, this.pseudoTracking = !1;
  }
  initialize() {
    this.el = this.table.element, this.buildListenerMap(), this.bindSubscriptionWatchers();
  }
  buildListenerMap() {
    var e = {};
    this.listeners.forEach((t) => {
      e[t] = {
        handler: null,
        components: []
      };
    }), this.listeners = e;
  }
  bindPseudoEvents() {
    Object.keys(this.pseudoTrackers).forEach((e) => {
      this.pseudoTrackers[e].subscriber = this.pseudoMouseEnter.bind(this, e), this.subscribe(e + "-mouseover", this.pseudoTrackers[e].subscriber);
    }), this.pseudoTracking = !0;
  }
  pseudoMouseEnter(e, t, i) {
    this.pseudoTrackers[e].target !== i && (this.pseudoTrackers[e].target && this.dispatch(e + "-mouseleave", t, this.pseudoTrackers[e].target), this.pseudoMouseLeave(e, t), this.pseudoTrackers[e].target = i, this.dispatch(e + "-mouseenter", t, i));
  }
  pseudoMouseLeave(e, t) {
    var i = Object.keys(this.pseudoTrackers), s = {
      row: ["cell"],
      cell: ["row"]
    };
    i = i.filter((n) => {
      var a = s[e];
      return n !== e && (!a || a && !a.includes(n));
    }), i.forEach((n) => {
      var a = this.pseudoTrackers[n].target;
      this.pseudoTrackers[n].target && (this.dispatch(n + "-mouseleave", t, a), this.pseudoTrackers[n].target = null);
    });
  }
  bindSubscriptionWatchers() {
    var e = Object.keys(this.listeners), t = Object.values(this.componentMap);
    for (let i of t)
      for (let s of e) {
        let n = i + "-" + s;
        this.subscriptionChange(n, this.subscriptionChanged.bind(this, i, s));
      }
    this.subscribe("table-destroy", this.clearWatchers.bind(this));
  }
  subscriptionChanged(e, t, i) {
    var s = this.listeners[t].components, n = s.indexOf(e), a = !1;
    i ? n === -1 && (s.push(e), a = !0) : this.subscribed(e + "-" + t) || n > -1 && (s.splice(n, 1), a = !0), (t === "mouseenter" || t === "mouseleave") && !this.pseudoTracking && this.bindPseudoEvents(), a && this.updateEventListeners();
  }
  updateEventListeners() {
    for (let e in this.listeners) {
      let t = this.listeners[e];
      t.components.length ? t.handler || (t.handler = this.track.bind(this, e), this.el.addEventListener(e, t.handler)) : t.handler && (this.el.removeEventListener(e, t.handler), t.handler = null);
    }
  }
  track(e, t) {
    var i = t.composedPath && t.composedPath() || t.path, s = this.findTargets(i);
    s = this.bindComponents(e, s), this.triggerEvents(e, t, s), this.pseudoTracking && (e == "mouseover" || e == "mouseleave") && !Object.keys(s).length && this.pseudoMouseLeave("none", t);
  }
  findTargets(e) {
    var t = {};
    let i = Object.keys(this.componentMap);
    for (let s of e) {
      let n = s.classList ? [...s.classList] : [];
      if (n.filter((l) => this.abortClasses.includes(l)).length)
        break;
      let o = n.filter((l) => i.includes(l));
      for (let l of o)
        t[this.componentMap[l]] || (t[this.componentMap[l]] = s);
    }
    return t.group && t.group === t.row && delete t.row, t;
  }
  bindComponents(e, t) {
    var i = Object.keys(t).reverse(), s = this.listeners[e], n = {}, a = {}, o = {};
    for (let l of i) {
      let h, u = t[l], d = this.previousTargets[l];
      if (d && d.target === u)
        h = d.component;
      else
        switch (l) {
          case "row":
          case "group":
            (s.components.includes("row") || s.components.includes("cell") || s.components.includes("group")) && (h = this.table.rowManager.getVisibleRows(!0).find((b) => b.getElement() === u), t.row && t.row.parentNode && t.row.parentNode.closest(".tabulator-row") && (t[l] = !1));
            break;
          case "column":
            s.components.includes("column") && (h = this.table.columnManager.findColumn(u));
            break;
          case "cell":
            s.components.includes("cell") && (n.row instanceof xe ? h = n.row.findCell(u) : t.row && console.warn("Event Target Lookup Error - The row this cell is attached to cannot be found, has the table been reinitialized without being destroyed first?"));
            break;
        }
      h && (n[l] = h, o[l] = {
        target: u,
        component: h
      });
    }
    return this.previousTargets = o, Object.keys(t).forEach((l) => {
      let h = n[l];
      a[l] = h;
    }), a;
  }
  triggerEvents(e, t, i) {
    var s = this.listeners[e];
    for (let n in i)
      i[n] && s.components.includes(n) && this.dispatch(n + "-" + e, t, i[n]);
  }
  clearWatchers() {
    for (let e in this.listeners) {
      let t = this.listeners[e];
      t.handler && (this.el.removeEventListener(e, t.handler), t.handler = null);
    }
  }
}
class Fc {
  constructor(e) {
    this.table = e, this.bindings = {};
  }
  bind(e, t, i) {
    this.bindings[e] || (this.bindings[e] = {}), this.bindings[e][t] ? console.warn("Unable to bind component handler, a matching function name is already bound", e, t, i) : this.bindings[e][t] = i;
  }
  handle(e, t, i) {
    if (this.bindings[e] && this.bindings[e][i] && typeof this.bindings[e][i].bind == "function")
      return this.bindings[e][i].bind(null, t);
    i !== "then" && typeof i == "string" && !i.startsWith("_") && this.table.options.debugInvalidComponentFuncs && console.error("The " + e + " component does not have a " + i + " function, have you checked that you have the correct Tabulator module installed?");
  }
}
class Oc extends Te {
  constructor(e) {
    super(e), this.requestOrder = 0, this.loading = !1;
  }
  initialize() {
  }
  load(e, t, i, s, n, a) {
    var o = ++this.requestOrder;
    if (this.table.destroyed)
      return Promise.resolve();
    if (this.dispatchExternal("dataLoading", e), e && (e.indexOf("{") == 0 || e.indexOf("[") == 0) && (e = JSON.parse(e)), this.confirm("data-loading", [e, t, i, n])) {
      this.loading = !0, n || this.alertLoader(), t = this.chain("data-params", [e, i, n], t || {}, t || {}), t = this.mapParams(t, this.table.options.dataSendParams);
      var l = this.chain("data-load", [e, t, i, n], !1, Promise.resolve([]));
      return l.then((h) => {
        if (this.table.destroyed)
          console.warn("Data Load Response Blocked - Table has been destroyed");
        else {
          !Array.isArray(h) && typeof h == "object" && (h = this.mapParams(h, this.objectInvert(this.table.options.dataReceiveParams)));
          var u = this.chain("data-loaded", [h], null, h);
          o == this.requestOrder ? (this.clearAlert(), u !== !1 && (this.dispatchExternal("dataLoaded", u), this.table.rowManager.setData(u, s, typeof a > "u" ? !s : a))) : console.warn("Data Load Response Blocked - An active data load request was blocked by an attempt to change table data while the request was being made");
        }
      }).catch((h) => {
        console.error("Data Load Error: ", h), this.dispatchExternal("dataLoadError", h), n || this.alertError(), setTimeout(() => {
          this.clearAlert();
        }, this.table.options.dataLoaderErrorTimeout);
      }).finally(() => {
        this.loading = !1;
      });
    } else
      return this.dispatchExternal("dataLoaded", e), e || (e = []), this.table.rowManager.setData(e, s, typeof a > "u" ? !s : a), Promise.resolve();
  }
  mapParams(e, t) {
    var i = {};
    for (let s in e)
      i[t.hasOwnProperty(s) ? t[s] : s] = e[s];
    return i;
  }
  objectInvert(e) {
    var t = {};
    for (let i in e)
      t[e[i]] = i;
    return t;
  }
  blockActiveLoad() {
    this.requestOrder++;
  }
  alertLoader() {
    var e = typeof this.table.options.dataLoader == "function" ? this.table.options.dataLoader() : this.table.options.dataLoader;
    e && this.table.alertManager.alert(this.table.options.dataLoaderLoading || this.langText("data|loading"));
  }
  alertError() {
    this.table.alertManager.alert(this.table.options.dataLoaderError || this.langText("data|error"), "error");
  }
  clearAlert() {
    this.table.alertManager.clear();
  }
}
class zc {
  constructor(e, t, i) {
    this.table = e, this.events = {}, this.optionsList = t || {}, this.subscriptionNotifiers = {}, this.dispatch = i ? this._debugDispatch.bind(this) : this._dispatch.bind(this), this.debug = i;
  }
  subscriptionChange(e, t) {
    this.subscriptionNotifiers[e] || (this.subscriptionNotifiers[e] = []), this.subscriptionNotifiers[e].push(t), this.subscribed(e) && this._notifySubscriptionChange(e, !0);
  }
  subscribe(e, t) {
    this.events[e] || (this.events[e] = []), this.events[e].push(t), this._notifySubscriptionChange(e, !0);
  }
  unsubscribe(e, t) {
    var i;
    if (this.events[e])
      if (t)
        if (i = this.events[e].findIndex((s) => s === t), i > -1)
          this.events[e].splice(i, 1);
        else {
          console.warn("Cannot remove event, no matching event found:", e, t);
          return;
        }
      else
        delete this.events[e];
    else {
      console.warn("Cannot remove event, no events set on:", e);
      return;
    }
    this._notifySubscriptionChange(e, !1);
  }
  subscribed(e) {
    return this.events[e] && this.events[e].length;
  }
  _notifySubscriptionChange(e, t) {
    var i = this.subscriptionNotifiers[e];
    i && i.forEach((s) => {
      s(t);
    });
  }
  _dispatch() {
    var e = Array.from(arguments), t = e.shift(), i;
    return this.events[t] && this.events[t].forEach((s, n) => {
      let a = s.apply(this.table, e);
      n || (i = a);
    }), i;
  }
  _debugDispatch() {
    var e = Array.from(arguments), t = e[0];
    return e[0] = "ExternalEvent:" + e[0], (this.debug === !0 || this.debug.includes(t)) && console.log(...e), this._dispatch(...arguments);
  }
}
class Hc {
  constructor(e) {
    this.events = {}, this.subscriptionNotifiers = {}, this.dispatch = e ? this._debugDispatch.bind(this) : this._dispatch.bind(this), this.chain = e ? this._debugChain.bind(this) : this._chain.bind(this), this.confirm = e ? this._debugConfirm.bind(this) : this._confirm.bind(this), this.debug = e;
  }
  subscriptionChange(e, t) {
    this.subscriptionNotifiers[e] || (this.subscriptionNotifiers[e] = []), this.subscriptionNotifiers[e].push(t), this.subscribed(e) && this._notifySubscriptionChange(e, !0);
  }
  subscribe(e, t, i = 1e4) {
    this.events[e] || (this.events[e] = []), this.events[e].push({ callback: t, priority: i }), this.events[e].sort((s, n) => s.priority - n.priority), this._notifySubscriptionChange(e, !0);
  }
  unsubscribe(e, t) {
    var i;
    if (this.events[e]) {
      if (t)
        if (i = this.events[e].findIndex((s) => s.callback === t), i > -1)
          this.events[e].splice(i, 1);
        else {
          console.warn("Cannot remove event, no matching event found:", e, t);
          return;
        }
    } else {
      console.warn("Cannot remove event, no events set on:", e);
      return;
    }
    this._notifySubscriptionChange(e, !1);
  }
  subscribed(e) {
    return this.events[e] && this.events[e].length;
  }
  _chain(e, t, i, s) {
    var n = i;
    return Array.isArray(t) || (t = [t]), this.subscribed(e) ? (this.events[e].forEach((a, o) => {
      n = a.callback.apply(this, t.concat([n]));
    }), n) : typeof s == "function" ? s() : s;
  }
  _confirm(e, t) {
    var i = !1;
    return Array.isArray(t) || (t = [t]), this.subscribed(e) && this.events[e].forEach((s, n) => {
      s.callback.apply(this, t) && (i = !0);
    }), i;
  }
  _notifySubscriptionChange(e, t) {
    var i = this.subscriptionNotifiers[e];
    i && i.forEach((s) => {
      s(t);
    });
  }
  _dispatch() {
    var e = Array.from(arguments), t = e.shift();
    this.events[t] && this.events[t].forEach((i) => {
      i.callback.apply(this, e);
    });
  }
  _debugDispatch() {
    var e = Array.from(arguments), t = e[0];
    return e[0] = "InternalEvent:" + t, (this.debug === !0 || this.debug.includes(t)) && console.log(...e), this._dispatch(...arguments);
  }
  _debugChain() {
    var e = Array.from(arguments), t = e[0];
    return e[0] = "InternalEvent:" + t, (this.debug === !0 || this.debug.includes(t)) && console.log(...e), this._chain(...arguments);
  }
  _debugConfirm() {
    var e = Array.from(arguments), t = e[0];
    return e[0] = "InternalEvent:" + t, (this.debug === !0 || this.debug.includes(t)) && console.log(...e), this._confirm(...arguments);
  }
}
class Pc extends Te {
  constructor(e) {
    super(e);
  }
  _warnUser() {
    this.options("debugDeprecation") && console.warn(...arguments);
  }
  check(e, t, i) {
    var s = "";
    return typeof this.options(e) < "u" ? (s = "Deprecated Setup Option - Use of the %c" + e + "%c option is now deprecated", t ? (s = s + ", Please use the %c" + t + "%c option instead", this._warnUser(s, "font-weight: bold;", "font-weight: normal;", "font-weight: bold;", "font-weight: normal;"), i && (this.table.options[t] = this.table.options[e])) : this._warnUser(s, "font-weight: bold;", "font-weight: normal;"), !1) : !0;
  }
  checkMsg(e, t) {
    return typeof this.options(e) < "u" ? (this._warnUser("%cDeprecated Setup Option - Use of the %c" + e + " %c option is now deprecated, " + t, "font-weight: normal;", "font-weight: bold;", "font-weight: normal;"), !1) : !0;
  }
  msg(e) {
    this._warnUser(e);
  }
}
class Ac extends Te {
  constructor(e) {
    super(e), this.deps = {}, this.props = {};
  }
  initialize() {
    this.deps = Object.assign({}, this.options("dependencies"));
  }
  lookup(e, t, i) {
    if (Array.isArray(e)) {
      for (const n of e) {
        var s = this.lookup(n, t, !0);
        if (s)
          break;
      }
      if (s)
        return s;
      this.error(e);
    } else
      return t ? this.lookupProp(e, t, i) : this.lookupKey(e, i);
  }
  lookupProp(e, t, i) {
    var s;
    if (this.props[e] && this.props[e][t])
      return this.props[e][t];
    if (s = this.lookupKey(e, i), s)
      return this.props[e] || (this.props[e] = {}), this.props[e][t] = s[t] || s, this.props[e][t];
  }
  lookupKey(e, t) {
    var i;
    return this.deps[e] ? i = this.deps[e] : window[e] ? (this.deps[e] = window[e], i = this.deps[e]) : t || this.error(e), i;
  }
  error(e) {
    console.error("Unable to find dependency", e, "Please check documentation and ensure you have imported the required library into your project");
  }
}
function _c(r, e) {
  e && this.table.columnManager.renderer.reinitializeColumnWidths(r), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update();
}
function na(r, e) {
  r.forEach(function(t) {
    t.reinitializeWidth();
  }), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update();
}
function Ic(r, e) {
  var t = 0, i = this.table.rowManager.element.clientWidth, s = 0, n = !1;
  r.forEach((a, o) => {
    a.widthFixed || a.reinitializeWidth(), (this.table.options.responsiveLayout ? a.modules.responsive.visible : a.visible) && (n = a), a.visible && (t += a.getWidth());
  }), n ? (s = i - t + n.getWidth(), this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && (n.setWidth(0), this.table.modules.responsiveLayout.update()), s > 0 ? n.setWidth(s) : n.reinitializeWidth()) : this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update();
}
function Nc(r, e) {
  var t = this.table.rowManager.element.getBoundingClientRect().width, i = 0, s = 0, n = 0, a = 0, o = [], l = [], h = 0, u = 0, d = 0;
  function f(T) {
    var E;
    return typeof T == "string" ? T.indexOf("%") > -1 ? E = t / 100 * parseInt(T) : E = parseInt(T) : E = T, E;
  }
  function b(T, E, S, k) {
    var z = [], N = 0, J = 0, q = 0, te = n, ne = 0, B = 0, re = [];
    function ae(_) {
      return S * (_.column.definition.widthGrow || 1);
    }
    function Oe(_) {
      return f(_.width) - S * (_.column.definition.widthShrink || 0);
    }
    return T.forEach(function(_, ze) {
      var Gt = k ? Oe(_) : ae(_);
      _.column.minWidth >= Gt ? z.push(_) : _.column.maxWidth && _.column.maxWidth < Gt ? (_.width = _.column.maxWidth, E -= _.column.maxWidth, te -= k ? _.column.definition.widthShrink || 1 : _.column.definition.widthGrow || 1, te && (S = Math.floor(E / te))) : (re.push(_), B += k ? _.column.definition.widthShrink || 1 : _.column.definition.widthGrow || 1);
    }), z.length ? (z.forEach(function(_) {
      N += k ? _.width - _.column.minWidth : _.column.minWidth, _.width = _.column.minWidth;
    }), J = E - N, q = B ? Math.floor(J / B) : J, ne = b(re, J, q, k)) : (ne = B ? E - Math.floor(E / B) * B : E, re.forEach(function(_) {
      _.width = k ? Oe(_) : ae(_);
    })), ne;
  }
  this.table.options.responsiveLayout && this.table.modExists("responsiveLayout", !0) && this.table.modules.responsiveLayout.update(), this.table.rowManager.element.scrollHeight > this.table.rowManager.element.clientHeight && (t -= this.table.rowManager.element.offsetWidth - this.table.rowManager.element.clientWidth), r.forEach(function(T) {
    var E, S, k;
    T.visible && (E = T.definition.width, S = parseInt(T.minWidth), E ? (k = f(E), i += k > S ? k : S, T.definition.widthShrink && (l.push({
      column: T,
      width: k > S ? k : S
    }), h += T.definition.widthShrink)) : (o.push({
      column: T,
      width: 0
    }), n += T.definition.widthGrow || 1));
  }), s = t - i, a = Math.floor(s / n), d = b(o, s, a, !1), o.length && d > 0 && (o[o.length - 1].width += d), o.forEach(function(T) {
    s -= T.width;
  }), u = Math.abs(d) + s, u > 0 && h && (d = b(l, u, Math.floor(u / h), !0)), d && l.length && (l[l.length - 1].width -= d), o.forEach(function(T) {
    T.column.setWidth(T.width);
  }), l.forEach(function(T) {
    T.column.setWidth(T.width);
  });
}
var Vc = {
  fitData: _c,
  fitDataFill: na,
  fitDataTable: na,
  fitDataStretch: Ic,
  fitColumns: Nc
};
const oi = class oi extends $ {
  constructor(e) {
    super(e, "layout"), this.mode = null, this.registerTableOption("layout", "fitData"), this.registerTableOption("layoutColumnsOnNewData", !1), this.registerColumnOption("widthGrow"), this.registerColumnOption("widthShrink");
  }
  //initialize layout system
  initialize() {
    var e = this.table.options.layout;
    oi.modes[e] ? this.mode = e : (console.warn("Layout Error - invalid mode set, defaulting to 'fitData' : " + e), this.mode = "fitData"), this.table.element.setAttribute("tabulator-layout", this.mode), this.subscribe("column-init", this.initializeColumn.bind(this));
  }
  initializeColumn(e) {
    e.definition.widthGrow && (e.definition.widthGrow = Number(e.definition.widthGrow)), e.definition.widthShrink && (e.definition.widthShrink = Number(e.definition.widthShrink));
  }
  getMode() {
    return this.mode;
  }
  //trigger table layout
  layout(e) {
    var t = this.table.columnManager.columnsByIndex.find((i) => i.definition.variableHeight || i.definition.formatter === "textarea");
    this.dispatch("layout-refreshing"), oi.modes[this.mode].call(this, this.table.columnManager.columnsByIndex, e), t && this.table.rowManager.normalizeHeight(!0), this.dispatch("layout-refreshed");
  }
};
F(oi, "moduleName", "layout"), //load defaults
F(oi, "modes", Vc);
let Gn = oi;
var Bc = {
  default: {
    //hold default locale text
    groups: {
      item: "item",
      items: "items"
    },
    columns: {},
    data: {
      loading: "Loading",
      error: "Error"
    },
    pagination: {
      page_size: "Page Size",
      page_title: "Show Page",
      first: "First",
      first_title: "First Page",
      last: "Last",
      last_title: "Last Page",
      prev: "Prev",
      prev_title: "Prev Page",
      next: "Next",
      next_title: "Next Page",
      all: "All",
      counter: {
        showing: "Showing",
        of: "of",
        rows: "rows",
        pages: "pages"
      }
    },
    headerFilters: {
      default: "filter column...",
      columns: {}
    }
  }
};
const Zi = class Zi extends $ {
  constructor(e) {
    super(e), this.locale = "default", this.lang = !1, this.bindings = {}, this.langList = {}, this.registerTableOption("locale", !1), this.registerTableOption("langs", {});
  }
  initialize() {
    this.langList = de.deepClone(Zi.langs), this.table.options.columnDefaults.headerFilterPlaceholder !== !1 && this.setHeaderFilterPlaceholder(this.table.options.columnDefaults.headerFilterPlaceholder);
    for (let e in this.table.options.langs)
      this.installLang(e, this.table.options.langs[e]);
    this.setLocale(this.table.options.locale), this.registerTableFunction("setLocale", this.setLocale.bind(this)), this.registerTableFunction("getLocale", this.getLocale.bind(this)), this.registerTableFunction("getLang", this.getLang.bind(this));
  }
  //set header placeholder
  setHeaderFilterPlaceholder(e) {
    this.langList.default.headerFilters.default = e;
  }
  //setup a lang description object
  installLang(e, t) {
    this.langList[e] ? this._setLangProp(this.langList[e], t) : this.langList[e] = t;
  }
  _setLangProp(e, t) {
    for (let i in t)
      e[i] && typeof e[i] == "object" ? this._setLangProp(e[i], t[i]) : e[i] = t[i];
  }
  //set current locale
  setLocale(e) {
    e = e || "default";
    function t(i, s) {
      for (var n in i)
        typeof i[n] == "object" ? (s[n] || (s[n] = {}), t(i[n], s[n])) : s[n] = i[n];
    }
    if (e === !0 && navigator.language && (e = navigator.language.toLowerCase()), e && !this.langList[e]) {
      let i = e.split("-")[0];
      this.langList[i] ? (console.warn("Localization Error - Exact matching locale not found, using closest match: ", e, i), e = i) : (console.warn("Localization Error - Matching locale not found, using default: ", e), e = "default");
    }
    this.locale = e, this.lang = de.deepClone(this.langList.default || {}), e != "default" && t(this.langList[e], this.lang), this.dispatchExternal("localized", this.locale, this.lang), this._executeBindings();
  }
  //get current locale
  getLocale(e) {
    return this.locale;
  }
  //get lang object for given local or current if none provided
  getLang(e) {
    return e ? this.langList[e] : this.lang;
  }
  //get text for current locale
  getText(e, t) {
    var i = t ? e + "|" + t : e, s = i.split("|"), n = this._getLangElement(s, this.locale);
    return n || "";
  }
  //traverse langs object and find localized copy
  _getLangElement(e, t) {
    var i = this.lang;
    return e.forEach(function(s) {
      var n;
      i && (n = i[s], typeof n < "u" ? i = n : i = !1);
    }), i;
  }
  //set update binding
  bind(e, t) {
    this.bindings[e] || (this.bindings[e] = []), this.bindings[e].push(t), t(this.getText(e), this.lang);
  }
  //iterate through bindings and trigger updates
  _executeBindings() {
    for (let e in this.bindings)
      this.bindings[e].forEach((t) => {
        t(this.getText(e), this.lang);
      });
  }
};
F(Zi, "moduleName", "localize"), //load defaults
F(Zi, "langs", Bc);
let $n = Zi;
class qo extends $ {
  constructor(e) {
    super(e);
  }
  initialize() {
    this.registerTableFunction("tableComms", this.receive.bind(this));
  }
  getConnections(e) {
    var t = [], i;
    return i = this.table.constructor.registry.lookupTable(e), i.forEach((s) => {
      this.table !== s && t.push(s);
    }), t;
  }
  send(e, t, i, s) {
    var n = this.getConnections(e);
    n.forEach((a) => {
      a.tableComms(this.table.element, t, i, s);
    }), !n.length && e && console.warn("Table Connection Error - No tables matching selector found", e);
  }
  receive(e, t, i, s) {
    if (this.table.modExists(t))
      return this.table.modules[t].commsReceived(e, i, s);
    console.warn("Inter-table Comms Error - no such module:", t);
  }
}
F(qo, "moduleName", "comms");
var Wc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  CommsModule: qo,
  LayoutModule: Gn,
  LocalizeModule: $n
});
const Ve = class Ve {
  static findTable(e) {
    var t = Ve.registry.lookupTable(e, !0);
    return Array.isArray(t) && !t.length ? !1 : t;
  }
};
F(Ve, "registry", {
  tables: [],
  register(e) {
    Ve.registry.tables.push(e);
  },
  deregister(e) {
    var t = Ve.registry.tables.indexOf(e);
    t > -1 && Ve.registry.tables.splice(t, 1);
  },
  lookupTable(e, t) {
    var i = [], s, n;
    if (typeof e == "string") {
      if (s = document.querySelectorAll(e), s.length)
        for (var a = 0; a < s.length; a++)
          n = Ve.registry.matchElement(s[a]), n && i.push(n);
    } else typeof HTMLElement < "u" && e instanceof HTMLElement || e instanceof Ve ? (n = Ve.registry.matchElement(e), n && i.push(n)) : Array.isArray(e) ? e.forEach(function(o) {
      i = i.concat(Ve.registry.lookupTable(o));
    }) : t || console.warn("Table Connection Error - Invalid Selector", e);
    return i;
  },
  matchElement(e) {
    return Ve.registry.tables.find(function(t) {
      return e instanceof Ve ? t === e : t.element === e;
    });
  }
});
let Yn = Ve;
const he = class he extends Yn {
  constructor() {
    super();
  }
  static initializeModuleBinder(e) {
    he.modulesRegistered || (he.modulesRegistered = !0, he._registerModules(Wc, !0), e && he._registerModules(e));
  }
  static _extendModule(e, t, i) {
    if (he.moduleBindings[e]) {
      var s = he.moduleBindings[e][t];
      if (s)
        if (typeof i == "object")
          for (let n in i)
            s[n] = i[n];
        else
          console.warn("Module Error - Invalid value type, it must be an object");
      else
        console.warn("Module Error - property does not exist:", t);
    } else
      console.warn("Module Error - module does not exist:", e);
  }
  static _registerModules(e, t) {
    var i = Object.values(e);
    t && i.forEach((s) => {
      s.prototype.moduleCore = !0;
    }), he._registerModule(i);
  }
  static _registerModule(e) {
    Array.isArray(e) || (e = [e]), e.forEach((t) => {
      he._registerModuleBinding(t), he._registerModuleExtensions(t);
    });
  }
  static _registerModuleBinding(e) {
    e.moduleName ? he.moduleBindings[e.moduleName] = e : console.error("Unable to bind module, no moduleName defined", e.moduleName);
  }
  static _registerModuleExtensions(e) {
    var t = e.moduleExtensions;
    if (e.moduleExtensions)
      for (let i in t) {
        let s = t[i];
        if (he.moduleBindings[i])
          for (let n in s)
            he._extendModule(i, n, s[n]);
        else {
          he.moduleExtensions[i] || (he.moduleExtensions[i] = {});
          for (let n in s)
            he.moduleExtensions[i][n] || (he.moduleExtensions[i][n] = {}), Object.assign(he.moduleExtensions[i][n], s[n]);
        }
      }
    he._extendModuleFromQueue(e);
  }
  static _extendModuleFromQueue(e) {
    var t = he.moduleExtensions[e.moduleName];
    if (t)
      for (let i in t)
        he._extendModule(e.moduleName, i, t[i]);
  }
  //ensure that module are bound to instantiated function
  _bindModules() {
    var e = [], t = [], i = [];
    this.modules = {};
    for (var s in he.moduleBindings) {
      let n = he.moduleBindings[s], a = new n(this);
      this.modules[s] = a, n.prototype.moduleCore ? this.modulesCore.push(a) : n.moduleInitOrder ? n.moduleInitOrder < 0 ? e.push(a) : t.push(a) : i.push(a);
    }
    e.sort((n, a) => n.moduleInitOrder > a.moduleInitOrder ? 1 : -1), t.sort((n, a) => n.moduleInitOrder > a.moduleInitOrder ? 1 : -1), this.modulesRegular = e.concat(i.concat(t));
  }
};
F(he, "moduleBindings", {}), F(he, "moduleExtensions", {}), F(he, "modulesRegistered", !1), F(he, "defaultModules", !1);
let qn = he;
class jc extends Te {
  constructor(e) {
    super(e), this.element = this._createAlertElement(), this.msgElement = this._createMsgElement(), this.type = null, this.element.appendChild(this.msgElement);
  }
  _createAlertElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-alert"), e;
  }
  _createMsgElement() {
    var e = document.createElement("div");
    return e.classList.add("tabulator-alert-msg"), e.setAttribute("role", "alert"), e;
  }
  _typeClass() {
    return "tabulator-alert-state-" + this.type;
  }
  alert(e, t = "msg") {
    if (e) {
      for (this.clear(), this.dispatch("alert-show", t), this.type = t; this.msgElement.firstChild; ) this.msgElement.removeChild(this.msgElement.firstChild);
      this.msgElement.classList.add(this._typeClass()), typeof e == "function" && (e = e()), e instanceof HTMLElement ? this.msgElement.appendChild(e) : this.msgElement.innerHTML = e, this.table.element.appendChild(this.element);
    }
  }
  clear() {
    this.dispatch("alert-hide", this.type), this.element.parentNode && this.element.parentNode.removeChild(this.element), this.msgElement.classList.remove(this._typeClass());
  }
}
const ot = class ot extends qn {
  static extendModule() {
    ot.initializeModuleBinder(), ot._extendModule(...arguments);
  }
  static registerModule() {
    ot.initializeModuleBinder(), ot._registerModule(...arguments);
  }
  constructor(e, t, i) {
    super(), ot.initializeModuleBinder(i), this.options = {}, this.columnManager = null, this.rowManager = null, this.footerManager = null, this.alertManager = null, this.vdomHoz = null, this.externalEvents = null, this.eventBus = null, this.interactionMonitor = !1, this.browser = "", this.browserSlow = !1, this.browserMobile = !1, this.rtl = !1, this.originalElement = null, this.componentFunctionBinder = new Fc(this), this.dataLoader = !1, this.modules = {}, this.modulesCore = [], this.modulesRegular = [], this.deprecationAdvisor = new Pc(this), this.optionsList = new Yo(this, "table constructor"), this.dependencyRegistry = new Ac(this), this.initialized = !1, this.destroyed = !1, this.initializeElement(e) && (this.initializeCoreSystems(t), setTimeout(() => {
      this._create();
    })), this.constructor.registry.register(this);
  }
  initializeElement(e) {
    return typeof HTMLElement < "u" && e instanceof HTMLElement ? (this.element = e, !0) : typeof e == "string" ? (this.element = document.querySelector(e), this.element ? !0 : (console.error("Tabulator Creation Error - no element found matching selector: ", e), !1)) : (console.error("Tabulator Creation Error - Invalid element provided:", e), !1);
  }
  initializeCoreSystems(e) {
    this.columnManager = new Rc(this), this.rowManager = new Sc(this), this.footerManager = new Dc(this), this.dataLoader = new Oc(this), this.alertManager = new jc(this), this._bindModules(), this.options = this.optionsList.generate(ot.defaultOptions, e), this._clearObjectPointers(), this._mapDeprecatedFunctionality(), this.externalEvents = new zc(this, this.options, this.options.debugEventsExternal), this.eventBus = new Hc(this.options.debugEventsInternal), this.interactionMonitor = new Lc(this), this.dataLoader.initialize(), this.footerManager.initialize(), this.dependencyRegistry.initialize();
  }
  //convert deprecated functionality to new functions
  _mapDeprecatedFunctionality() {
  }
  _clearSelection() {
    this.element.classList.add("tabulator-block-select"), window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty(), this.element.classList.remove("tabulator-block-select");
  }
  //create table
  _create() {
    this.externalEvents.dispatch("tableBuilding"), this.eventBus.dispatch("table-building"), this._rtlCheck(), this._buildElement(), this._initializeTable(), this.initialized = !0, this._loadInitialData().finally(() => {
      this.eventBus.dispatch("table-initialized"), this.externalEvents.dispatch("tableBuilt");
    });
  }
  _rtlCheck() {
    var e = window.getComputedStyle(this.element);
    switch (this.options.textDirection) {
      case "auto":
        if (e.direction !== "rtl")
          break;
      case "rtl":
        this.element.classList.add("tabulator-rtl"), this.rtl = !0;
        break;
      case "ltr":
        this.element.classList.add("tabulator-ltr");
      default:
        this.rtl = !1;
    }
  }
  //clear pointers to objects in default config object
  _clearObjectPointers() {
    this.options.columns = this.options.columns.slice(0), Array.isArray(this.options.data) && !this.options.reactiveData && (this.options.data = this.options.data.slice(0));
  }
  //build tabulator element
  _buildElement() {
    var e = this.element, t = this.options, i;
    if (e.tagName === "TABLE") {
      this.originalElement = this.element, i = document.createElement("div");
      var s = e.attributes;
      for (var n in s)
        typeof s[n] == "object" && i.setAttribute(s[n].name, s[n].value);
      e.parentNode.replaceChild(i, e), this.element = e = i;
    }
    for (e.classList.add("tabulator"), e.setAttribute("role", "grid"); e.firstChild; ) e.removeChild(e.firstChild);
    t.height && (t.height = isNaN(t.height) ? t.height : t.height + "px", e.style.height = t.height), t.minHeight !== !1 && (t.minHeight = isNaN(t.minHeight) ? t.minHeight : t.minHeight + "px", e.style.minHeight = t.minHeight), t.maxHeight !== !1 && (t.maxHeight = isNaN(t.maxHeight) ? t.maxHeight : t.maxHeight + "px", e.style.maxHeight = t.maxHeight);
  }
  //initialize core systems and modules
  _initializeTable() {
    var e = this.element, t = this.options;
    this.interactionMonitor.initialize(), this.columnManager.initialize(), this.rowManager.initialize(), this._detectBrowser(), this.modulesCore.forEach((i) => {
      i.initialize();
    }), e.appendChild(this.columnManager.getElement()), e.appendChild(this.rowManager.getElement()), t.footerElement && this.footerManager.activate(), t.autoColumns && t.data && this.columnManager.generateColumnsFromRowData(this.options.data), this.modulesRegular.forEach((i) => {
      i.initialize();
    }), this.columnManager.setColumns(t.columns), this.eventBus.dispatch("table-built");
  }
  _loadInitialData() {
    return this.dataLoader.load(this.options.data).finally(() => {
      this.columnManager.verticalAlignHeaders();
    });
  }
  //deconstructor
  destroy() {
    var e = this.element;
    for (this.destroyed = !0, this.constructor.registry.deregister(this), this.eventBus.dispatch("table-destroy"), this.rowManager.destroy(); e.firstChild; ) e.removeChild(e.firstChild);
    e.classList.remove("tabulator"), this.externalEvents.dispatch("tableDestroyed");
  }
  _detectBrowser() {
    var e = navigator.userAgent || navigator.vendor || window.opera;
    e.indexOf("Trident") > -1 ? (this.browser = "ie", this.browserSlow = !0) : e.indexOf("Edge") > -1 ? (this.browser = "edge", this.browserSlow = !0) : e.indexOf("Firefox") > -1 ? (this.browser = "firefox", this.browserSlow = !1) : e.indexOf("Mac OS") > -1 ? (this.browser = "safari", this.browserSlow = !1) : (this.browser = "other", this.browserSlow = !1), this.browserMobile = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e.slice(0, 4));
  }
  initGuard(e, t) {
    var i, s;
    return this.options.debugInitialization && !this.initialized && (e || (i = new Error().stack.split(`
`), s = i[0] == "Error" ? i[2] : i[1], s[0] == " " ? e = s.trim().split(" ")[1].split(".")[1] : e = s.trim().split("@")[0]), console.warn("Table Not Initialized - Calling the " + e + " function before the table is initialized may result in inconsistent behavior, Please wait for the `tableBuilt` event before calling this function." + (t ? " " + t : ""))), this.initialized;
  }
  ////////////////// Data Handling //////////////////
  //block table redrawing
  blockRedraw() {
    this.initGuard(), this.eventBus.dispatch("redraw-blocking"), this.rowManager.blockRedraw(), this.columnManager.blockRedraw(), this.eventBus.dispatch("redraw-blocked");
  }
  //restore table redrawing
  restoreRedraw() {
    this.initGuard(), this.eventBus.dispatch("redraw-restoring"), this.rowManager.restoreRedraw(), this.columnManager.restoreRedraw(), this.eventBus.dispatch("redraw-restored");
  }
  //load data
  setData(e, t, i) {
    return this.initGuard(!1, "To set initial data please use the 'data' property in the table constructor."), this.dataLoader.load(e, t, i, !1);
  }
  //clear data
  clearData() {
    this.initGuard(), this.dataLoader.blockActiveLoad(), this.rowManager.clearData();
  }
  //get table data array
  getData(e) {
    return this.rowManager.getData(e);
  }
  //get table data array count
  getDataCount(e) {
    return this.rowManager.getDataCount(e);
  }
  //replace data, keeping table in position with same sort
  replaceData(e, t, i) {
    return this.initGuard(), this.dataLoader.load(e, t, i, !0, !0);
  }
  //update table data
  updateData(e) {
    var t = 0;
    return this.initGuard(), new Promise((i, s) => {
      this.dataLoader.blockActiveLoad(), typeof e == "string" && (e = JSON.parse(e)), e && e.length > 0 ? e.forEach((n) => {
        var a = this.rowManager.findRow(n[this.options.index]);
        a ? (t++, a.updateData(n).then(() => {
          t--, t || i();
        }).catch((o) => {
          s("Update Error - Unable to update row", n, o);
        })) : s("Update Error - Unable to find row", n);
      }) : (console.warn("Update Error - No data provided"), s("Update Error - No data provided"));
    });
  }
  addData(e, t, i) {
    return this.initGuard(), new Promise((s, n) => {
      this.dataLoader.blockActiveLoad(), typeof e == "string" && (e = JSON.parse(e)), e ? this.rowManager.addRows(e, t, i).then((a) => {
        var o = [];
        a.forEach(function(l) {
          o.push(l.getComponent());
        }), s(o);
      }) : (console.warn("Update Error - No data provided"), n("Update Error - No data provided"));
    });
  }
  //update table data
  updateOrAddData(e) {
    var t = [], i = 0;
    return this.initGuard(), new Promise((s, n) => {
      this.dataLoader.blockActiveLoad(), typeof e == "string" && (e = JSON.parse(e)), e && e.length > 0 ? e.forEach((a) => {
        var o = this.rowManager.findRow(a[this.options.index]);
        i++, o ? o.updateData(a).then(() => {
          i--, t.push(o.getComponent()), i || s(t);
        }) : this.rowManager.addRows(a).then((l) => {
          i--, t.push(l[0].getComponent()), i || s(t);
        });
      }) : (console.warn("Update Error - No data provided"), n("Update Error - No data provided"));
    });
  }
  //get row object
  getRow(e) {
    var t = this.rowManager.findRow(e);
    return t ? t.getComponent() : (console.warn("Find Error - No matching row found:", e), !1);
  }
  //get row object
  getRowFromPosition(e) {
    var t = this.rowManager.getRowFromPosition(e);
    return t ? t.getComponent() : (console.warn("Find Error - No matching row found:", e), !1);
  }
  //delete row from table
  deleteRow(e) {
    var t = [];
    this.initGuard(), Array.isArray(e) || (e = [e]);
    for (let i of e) {
      let s = this.rowManager.findRow(i, !0);
      if (s)
        t.push(s);
      else
        return console.error("Delete Error - No matching row found:", i), Promise.reject("Delete Error - No matching row found");
    }
    return t.sort((i, s) => this.rowManager.rows.indexOf(i) > this.rowManager.rows.indexOf(s) ? 1 : -1), t.forEach((i) => {
      i.delete();
    }), this.rowManager.reRenderInPosition(), Promise.resolve();
  }
  //add row to table
  addRow(e, t, i) {
    return this.initGuard(), typeof e == "string" && (e = JSON.parse(e)), this.rowManager.addRows(e, t, i, !0).then((s) => s[0].getComponent());
  }
  //update a row if it exists otherwise create it
  updateOrAddRow(e, t) {
    var i = this.rowManager.findRow(e);
    return this.initGuard(), typeof t == "string" && (t = JSON.parse(t)), i ? i.updateData(t).then(() => i.getComponent()) : this.rowManager.addRows(t).then((s) => s[0].getComponent());
  }
  //update row data
  updateRow(e, t) {
    var i = this.rowManager.findRow(e);
    return this.initGuard(), typeof t == "string" && (t = JSON.parse(t)), i ? i.updateData(t).then(() => Promise.resolve(i.getComponent())) : (console.warn("Update Error - No matching row found:", e), Promise.reject("Update Error - No matching row found"));
  }
  //scroll to row in DOM
  scrollToRow(e, t, i) {
    var s = this.rowManager.findRow(e);
    return s ? this.rowManager.scrollToRow(s, t, i) : (console.warn("Scroll Error - No matching row found:", e), Promise.reject("Scroll Error - No matching row found"));
  }
  moveRow(e, t, i) {
    var s = this.rowManager.findRow(e);
    this.initGuard(), s ? s.moveToRow(t, i) : console.warn("Move Error - No matching row found:", e);
  }
  getRows(e) {
    return this.rowManager.getComponents(e);
  }
  //get position of row in table
  getRowPosition(e) {
    var t = this.rowManager.findRow(e);
    return t ? t.getPosition() : (console.warn("Position Error - No matching row found:", e), !1);
  }
  /////////////// Column Functions  ///////////////
  setColumns(e) {
    this.initGuard(!1, "To set initial columns please use the 'columns' property in the table constructor"), this.columnManager.setColumns(e);
  }
  getColumns(e) {
    return this.columnManager.getComponents(e);
  }
  getColumn(e) {
    var t = this.columnManager.findColumn(e);
    return t ? t.getComponent() : (console.warn("Find Error - No matching column found:", e), !1);
  }
  getColumnDefinitions() {
    return this.columnManager.getDefinitionTree();
  }
  showColumn(e) {
    var t = this.columnManager.findColumn(e);
    if (this.initGuard(), t)
      t.show();
    else
      return console.warn("Column Show Error - No matching column found:", e), !1;
  }
  hideColumn(e) {
    var t = this.columnManager.findColumn(e);
    if (this.initGuard(), t)
      t.hide();
    else
      return console.warn("Column Hide Error - No matching column found:", e), !1;
  }
  toggleColumn(e) {
    var t = this.columnManager.findColumn(e);
    if (this.initGuard(), t)
      t.visible ? t.hide() : t.show();
    else
      return console.warn("Column Visibility Toggle Error - No matching column found:", e), !1;
  }
  addColumn(e, t, i) {
    var s = this.columnManager.findColumn(i);
    return this.initGuard(), this.columnManager.addColumn(e, t, s).then((n) => n.getComponent());
  }
  deleteColumn(e) {
    var t = this.columnManager.findColumn(e);
    return this.initGuard(), t ? t.delete() : (console.warn("Column Delete Error - No matching column found:", e), Promise.reject());
  }
  updateColumnDefinition(e, t) {
    var i = this.columnManager.findColumn(e);
    return this.initGuard(), i ? i.updateDefinition(t) : (console.warn("Column Update Error - No matching column found:", e), Promise.reject());
  }
  moveColumn(e, t, i) {
    var s = this.columnManager.findColumn(e), n = this.columnManager.findColumn(t);
    this.initGuard(), s ? n ? this.columnManager.moveColumn(s, n, i) : console.warn("Move Error - No matching column found:", n) : console.warn("Move Error - No matching column found:", e);
  }
  //scroll to column in DOM
  scrollToColumn(e, t, i) {
    return new Promise((s, n) => {
      var a = this.columnManager.findColumn(e);
      return a ? this.columnManager.scrollToColumn(a, t, i) : (console.warn("Scroll Error - No matching column found:", e), Promise.reject("Scroll Error - No matching column found"));
    });
  }
  //////////// General Public Functions ////////////
  //redraw list without updating data
  redraw(e) {
    this.initGuard(), this.columnManager.redraw(e), this.rowManager.redraw(e);
  }
  setHeight(e) {
    this.options.height = isNaN(e) ? e : e + "px", this.element.style.height = this.options.height, this.rowManager.initializeRenderer(), this.rowManager.redraw(!0);
  }
  //////////////////// Event Bus ///////////////////
  on(e, t) {
    this.externalEvents.subscribe(e, t);
  }
  off(e, t) {
    this.externalEvents.unsubscribe(e, t);
  }
  dispatchEvent() {
    var e = Array.from(arguments);
    e.shift(), this.externalEvents.dispatch(...arguments);
  }
  //////////////////// Alerts ///////////////////
  alert(e, t) {
    this.initGuard(), this.alertManager.alert(e, t);
  }
  clearAlert() {
    this.initGuard(), this.alertManager.clear();
  }
  ////////////// Extension Management //////////////
  modExists(e, t) {
    return this.modules[e] ? !0 : (t && console.error("Tabulator Module Not Installed: " + e), !1);
  }
  module(e) {
    var t = this.modules[e];
    return t || console.error("Tabulator module not installed: " + e), t;
  }
};
//default setup options
F(ot, "defaultOptions", Ec);
let Zn = ot;
var Ai = Zn;
class Uc extends Ai {
  static extendModule() {
    Ai.initializeModuleBinder(an), Ai._extendModule(...arguments);
  }
  static registerModule() {
    Ai.initializeModuleBinder(an), Ai._registerModule(...arguments);
  }
  constructor(e, t, i) {
    super(e, t, an);
  }
}
var Gc = Uc, vr = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(r) {
    return this.listeners.add(r), this.onSubscribe(), () => {
      this.listeners.delete(r), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, $c = {
  // We need the wrapper function syntax below instead of direct references to
  // global setTimeout etc.
  //
  // BAD: `setTimeout: setTimeout`
  // GOOD: `setTimeout: (cb, delay) => setTimeout(cb, delay)`
  //
  // If we use direct references here, then anything that wants to spy on or
  // replace the global setTimeout (like tests) won't work since we'll already
  // have a hard reference to the original implementation at the time when this
  // file was imported.
  setTimeout: (r, e) => setTimeout(r, e),
  clearTimeout: (r) => clearTimeout(r),
  setInterval: (r, e) => setInterval(r, e),
  clearInterval: (r) => clearInterval(r)
}, st, It, ba, Yc = (ba = class {
  constructor() {
    // We cannot have TimeoutManager<T> as we must instantiate it with a concrete
    // type at app boot; and if we leave that type, then any new timer provider
    // would need to support ReturnType<typeof setTimeout>, which is infeasible.
    //
    // We settle for type safety for the TimeoutProvider type, and accept that
    // this class is unsafe internally to allow for extension.
    fe(this, st, $c);
    fe(this, It, !1);
  }
  setTimeoutProvider(r) {
    process.env.NODE_ENV !== "production" && D(this, It) && r !== D(this, st) && console.error(
      "[timeoutManager]: Switching provider after calls to previous provider might result in unexpected behavior.",
      { previous: D(this, st), provider: r }
    ), Z(this, st, r), process.env.NODE_ENV !== "production" && Z(this, It, !1);
  }
  setTimeout(r, e) {
    return process.env.NODE_ENV !== "production" && Z(this, It, !0), D(this, st).setTimeout(r, e);
  }
  clearTimeout(r) {
    D(this, st).clearTimeout(r);
  }
  setInterval(r, e) {
    return process.env.NODE_ENV !== "production" && Z(this, It, !0), D(this, st).setInterval(r, e);
  }
  clearInterval(r) {
    D(this, st).clearInterval(r);
  }
}, st = new WeakMap(), It = new WeakMap(), ba), Cs = new Yc();
function qc(r) {
  setTimeout(r, 0);
}
var zs = typeof window > "u" || "Deno" in globalThis;
function Zc() {
}
function ra(r) {
  return typeof r == "number" && r >= 0 && r !== 1 / 0;
}
function Jc(r, e) {
  return Math.max(r + (e || 0) - Date.now(), 0);
}
function ji(r, e) {
  return typeof r == "function" ? r(e) : r;
}
function Ke(r, e) {
  return typeof r == "function" ? r(e) : r;
}
var Kc = Object.prototype.hasOwnProperty;
function Jn(r, e) {
  if (r === e)
    return r;
  const t = aa(r) && aa(e);
  if (!t && !(oa(r) && oa(e))) return e;
  const s = (t ? r : Object.keys(r)).length, n = t ? e : Object.keys(e), a = n.length, o = t ? new Array(a) : {};
  let l = 0;
  for (let h = 0; h < a; h++) {
    const u = t ? h : n[h], d = r[u], f = e[u];
    if (d === f) {
      o[u] = d, (t ? h < s : Kc.call(r, u)) && l++;
      continue;
    }
    if (d === null || f === null || typeof d != "object" || typeof f != "object") {
      o[u] = f;
      continue;
    }
    const b = Jn(d, f);
    o[u] = b, b === d && l++;
  }
  return s === a && l === s ? r : o;
}
function Kn(r, e) {
  if (!e || Object.keys(r).length !== Object.keys(e).length)
    return !1;
  for (const t in r)
    if (r[t] !== e[t])
      return !1;
  return !0;
}
function aa(r) {
  return Array.isArray(r) && r.length === Object.keys(r).length;
}
function oa(r) {
  if (!la(r))
    return !1;
  const e = r.constructor;
  if (e === void 0)
    return !0;
  const t = e.prototype;
  return !(!la(t) || !t.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(r) !== Object.prototype);
}
function la(r) {
  return Object.prototype.toString.call(r) === "[object Object]";
}
function ha(r, e, t) {
  if (typeof t.structuralSharing == "function")
    return t.structuralSharing(r, e);
  if (t.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return Jn(r, e);
      } catch (i) {
        throw console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${t.queryHash}]: ${i}`
        ), i;
      }
    return Jn(r, e);
  }
  return e;
}
function ua(r, e) {
  return typeof r == "function" ? r(...e) : !!r;
}
var Nt, Ct, ci, va, Xc = (va = class extends vr {
  constructor() {
    super();
    fe(this, Nt);
    fe(this, Ct);
    fe(this, ci);
    Z(this, ci, (e) => {
      if (!zs && window.addEventListener) {
        const t = () => e();
        return window.addEventListener("visibilitychange", t, !1), () => {
          window.removeEventListener("visibilitychange", t);
        };
      }
    });
  }
  onSubscribe() {
    D(this, Ct) || this.setEventListener(D(this, ci));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = D(this, Ct)) == null || e.call(this), Z(this, Ct, void 0));
  }
  setEventListener(e) {
    var t;
    Z(this, ci, e), (t = D(this, Ct)) == null || t.call(this), Z(this, Ct, e((i) => {
      typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
    }));
  }
  setFocused(e) {
    D(this, Nt) !== e && (Z(this, Nt, e), this.onFocus());
  }
  onFocus() {
    const e = this.isFocused();
    this.listeners.forEach((t) => {
      t(e);
    });
  }
  isFocused() {
    var e;
    return typeof D(this, Nt) == "boolean" ? D(this, Nt) : ((e = globalThis.document) == null ? void 0 : e.visibilityState) !== "hidden";
  }
}, Nt = new WeakMap(), Ct = new WeakMap(), ci = new WeakMap(), va), Qc = new Xc();
function da() {
  let r, e;
  const t = new Promise((s, n) => {
    r = s, e = n;
  });
  t.status = "pending", t.catch(() => {
  });
  function i(s) {
    Object.assign(t, s), delete t.resolve, delete t.reject;
  }
  return t.resolve = (s) => {
    i({
      status: "fulfilled",
      value: s
    }), r(s);
  }, t.reject = (s) => {
    i({
      status: "rejected",
      reason: s
    }), e(s);
  }, t;
}
var ef = qc;
function tf() {
  let r = [], e = 0, t = (o) => {
    o();
  }, i = (o) => {
    o();
  }, s = ef;
  const n = (o) => {
    e ? r.push(o) : s(() => {
      t(o);
    });
  }, a = () => {
    const o = r;
    r = [], o.length && s(() => {
      i(() => {
        o.forEach((l) => {
          t(l);
        });
      });
    });
  };
  return {
    batch: (o) => {
      let l;
      e++;
      try {
        l = o();
      } finally {
        e--, e || a();
      }
      return l;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (o) => (...l) => {
      n(() => {
        o(...l);
      });
    },
    schedule: n,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (o) => {
      t = o;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (o) => {
      i = o;
    },
    setScheduler: (o) => {
      s = o;
    }
  };
}
var sf = tf(), fi, Et, mi, wa, nf = (wa = class extends vr {
  constructor() {
    super();
    fe(this, fi, !0);
    fe(this, Et);
    fe(this, mi);
    Z(this, mi, (e) => {
      if (!zs && window.addEventListener) {
        const t = () => e(!0), i = () => e(!1);
        return window.addEventListener("online", t, !1), window.addEventListener("offline", i, !1), () => {
          window.removeEventListener("online", t), window.removeEventListener("offline", i);
        };
      }
    });
  }
  onSubscribe() {
    D(this, Et) || this.setEventListener(D(this, mi));
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || ((e = D(this, Et)) == null || e.call(this), Z(this, Et, void 0));
  }
  setEventListener(e) {
    var t;
    Z(this, mi, e), (t = D(this, Et)) == null || t.call(this), Z(this, Et, e(this.setOnline.bind(this)));
  }
  setOnline(e) {
    D(this, fi) !== e && (Z(this, fi, e), this.listeners.forEach((i) => {
      i(e);
    }));
  }
  isOnline() {
    return D(this, fi);
  }
}, fi = new WeakMap(), Et = new WeakMap(), mi = new WeakMap(), wa), rf = new nf();
function af(r) {
  return (r ?? "online") === "online" ? rf.isOnline() : !0;
}
function of(r, e) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: af(e.networkMode) ? "fetching" : "paused",
    ...r === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
var Pe, X, Xi, Le, Vt, pi, lt, Tt, Qi, gi, bi, Bt, Wt, kt, vi, le, Bi, Xn, Qn, er, tr, ir, sr, nr, Zo, ya, lf = (ya = class extends vr {
  constructor(e, t) {
    super();
    fe(this, le);
    fe(this, Pe);
    fe(this, X);
    fe(this, Xi);
    fe(this, Le);
    fe(this, Vt);
    fe(this, pi);
    fe(this, lt);
    fe(this, Tt);
    fe(this, Qi);
    fe(this, gi);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    fe(this, bi);
    fe(this, Bt);
    fe(this, Wt);
    fe(this, kt);
    fe(this, vi, /* @__PURE__ */ new Set());
    this.options = t, Z(this, Pe, e), Z(this, Tt, null), Z(this, lt, da()), this.bindMethods(), this.setOptions(t);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (D(this, X).addObserver(this), ca(D(this, X), this.options) ? ve(this, le, Bi).call(this) : this.updateResult(), ve(this, le, tr).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return rr(
      D(this, X),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return rr(
      D(this, X),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ve(this, le, ir).call(this), ve(this, le, sr).call(this), D(this, X).removeObserver(this);
  }
  setOptions(e) {
    const t = this.options, i = D(this, X);
    if (this.options = D(this, Pe).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof Ke(this.options.enabled, D(this, X)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    ve(this, le, nr).call(this), D(this, X).setOptions(this.options), t._defaulted && !Kn(this.options, t) && D(this, Pe).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: D(this, X),
      observer: this
    });
    const s = this.hasListeners();
    s && fa(
      D(this, X),
      i,
      this.options,
      t
    ) && ve(this, le, Bi).call(this), this.updateResult(), s && (D(this, X) !== i || Ke(this.options.enabled, D(this, X)) !== Ke(t.enabled, D(this, X)) || ji(this.options.staleTime, D(this, X)) !== ji(t.staleTime, D(this, X))) && ve(this, le, Xn).call(this);
    const n = ve(this, le, Qn).call(this);
    s && (D(this, X) !== i || Ke(this.options.enabled, D(this, X)) !== Ke(t.enabled, D(this, X)) || n !== D(this, kt)) && ve(this, le, er).call(this, n);
  }
  getOptimisticResult(e) {
    const t = D(this, Pe).getQueryCache().build(D(this, Pe), e), i = this.createResult(t, e);
    return uf(this, i) && (Z(this, Le, i), Z(this, pi, this.options), Z(this, Vt, D(this, X).state)), i;
  }
  getCurrentResult() {
    return D(this, Le);
  }
  trackResult(e, t) {
    return new Proxy(e, {
      get: (i, s) => (this.trackProp(s), t == null || t(s), s === "promise" && (this.trackProp("data"), !this.options.experimental_prefetchInRender && D(this, lt).status === "pending" && D(this, lt).reject(
        new Error(
          "experimental_prefetchInRender feature flag is not enabled"
        )
      )), Reflect.get(i, s))
    });
  }
  trackProp(e) {
    D(this, vi).add(e);
  }
  getCurrentQuery() {
    return D(this, X);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const t = D(this, Pe).defaultQueryOptions(e), i = D(this, Pe).getQueryCache().build(D(this, Pe), t);
    return i.fetch().then(() => this.createResult(i, t));
  }
  fetch(e) {
    return ve(this, le, Bi).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), D(this, Le)));
  }
  createResult(e, t) {
    var re;
    const i = D(this, X), s = this.options, n = D(this, Le), a = D(this, Vt), o = D(this, pi), h = e !== i ? e.state : D(this, Xi), { state: u } = e;
    let d = { ...u }, f = !1, b;
    if (t._optimisticResults) {
      const ae = this.hasListeners(), Oe = !ae && ca(e, t), _ = ae && fa(e, i, t, s);
      (Oe || _) && (d = {
        ...d,
        ...of(u.data, e.options)
      }), t._optimisticResults === "isRestoring" && (d.fetchStatus = "idle");
    }
    let { error: T, errorUpdatedAt: E, status: S } = d;
    b = d.data;
    let k = !1;
    if (t.placeholderData !== void 0 && b === void 0 && S === "pending") {
      let ae;
      n != null && n.isPlaceholderData && t.placeholderData === (o == null ? void 0 : o.placeholderData) ? (ae = n.data, k = !0) : ae = typeof t.placeholderData == "function" ? t.placeholderData(
        (re = D(this, bi)) == null ? void 0 : re.state.data,
        D(this, bi)
      ) : t.placeholderData, ae !== void 0 && (S = "success", b = ha(
        n == null ? void 0 : n.data,
        ae,
        t
      ), f = !0);
    }
    if (t.select && b !== void 0 && !k)
      if (n && b === (a == null ? void 0 : a.data) && t.select === D(this, Qi))
        b = D(this, gi);
      else
        try {
          Z(this, Qi, t.select), b = t.select(b), b = ha(n == null ? void 0 : n.data, b, t), Z(this, gi, b), Z(this, Tt, null);
        } catch (ae) {
          Z(this, Tt, ae);
        }
    D(this, Tt) && (T = D(this, Tt), b = D(this, gi), E = Date.now(), S = "error");
    const z = d.fetchStatus === "fetching", N = S === "pending", J = S === "error", q = N && z, te = b !== void 0, B = {
      status: S,
      fetchStatus: d.fetchStatus,
      isPending: N,
      isSuccess: S === "success",
      isError: J,
      isInitialLoading: q,
      isLoading: q,
      data: b,
      dataUpdatedAt: d.dataUpdatedAt,
      error: T,
      errorUpdatedAt: E,
      failureCount: d.fetchFailureCount,
      failureReason: d.fetchFailureReason,
      errorUpdateCount: d.errorUpdateCount,
      isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
      isFetchedAfterMount: d.dataUpdateCount > h.dataUpdateCount || d.errorUpdateCount > h.errorUpdateCount,
      isFetching: z,
      isRefetching: z && !N,
      isLoadingError: J && !te,
      isPaused: d.fetchStatus === "paused",
      isPlaceholderData: f,
      isRefetchError: J && te,
      isStale: wr(e, t),
      refetch: this.refetch,
      promise: D(this, lt),
      isEnabled: Ke(t.enabled, e) !== !1
    };
    if (this.options.experimental_prefetchInRender) {
      const ae = (ze) => {
        B.status === "error" ? ze.reject(B.error) : B.data !== void 0 && ze.resolve(B.data);
      }, Oe = () => {
        const ze = Z(this, lt, B.promise = da());
        ae(ze);
      }, _ = D(this, lt);
      switch (_.status) {
        case "pending":
          e.queryHash === i.queryHash && ae(_);
          break;
        case "fulfilled":
          (B.status === "error" || B.data !== _.value) && Oe();
          break;
        case "rejected":
          (B.status !== "error" || B.error !== _.reason) && Oe();
          break;
      }
    }
    return B;
  }
  updateResult() {
    const e = D(this, Le), t = this.createResult(D(this, X), this.options);
    if (Z(this, Vt, D(this, X).state), Z(this, pi, this.options), D(this, Vt).data !== void 0 && Z(this, bi, D(this, X)), Kn(t, e))
      return;
    Z(this, Le, t);
    const i = () => {
      if (!e)
        return !0;
      const { notifyOnChangeProps: s } = this.options, n = typeof s == "function" ? s() : s;
      if (n === "all" || !n && !D(this, vi).size)
        return !0;
      const a = new Set(
        n ?? D(this, vi)
      );
      return this.options.throwOnError && a.add("error"), Object.keys(D(this, Le)).some((o) => {
        const l = o;
        return D(this, Le)[l] !== e[l] && a.has(l);
      });
    };
    ve(this, le, Zo).call(this, { listeners: i() });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ve(this, le, tr).call(this);
  }
}, Pe = new WeakMap(), X = new WeakMap(), Xi = new WeakMap(), Le = new WeakMap(), Vt = new WeakMap(), pi = new WeakMap(), lt = new WeakMap(), Tt = new WeakMap(), Qi = new WeakMap(), gi = new WeakMap(), bi = new WeakMap(), Bt = new WeakMap(), Wt = new WeakMap(), kt = new WeakMap(), vi = new WeakMap(), le = new WeakSet(), Bi = function(e) {
  ve(this, le, nr).call(this);
  let t = D(this, X).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (t = t.catch(Zc)), t;
}, Xn = function() {
  ve(this, le, ir).call(this);
  const e = ji(
    this.options.staleTime,
    D(this, X)
  );
  if (zs || D(this, Le).isStale || !ra(e))
    return;
  const i = Jc(D(this, Le).dataUpdatedAt, e) + 1;
  Z(this, Bt, Cs.setTimeout(() => {
    D(this, Le).isStale || this.updateResult();
  }, i));
}, Qn = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(D(this, X)) : this.options.refetchInterval) ?? !1;
}, er = function(e) {
  ve(this, le, sr).call(this), Z(this, kt, e), !(zs || Ke(this.options.enabled, D(this, X)) === !1 || !ra(D(this, kt)) || D(this, kt) === 0) && Z(this, Wt, Cs.setInterval(() => {
    (this.options.refetchIntervalInBackground || Qc.isFocused()) && ve(this, le, Bi).call(this);
  }, D(this, kt)));
}, tr = function() {
  ve(this, le, Xn).call(this), ve(this, le, er).call(this, ve(this, le, Qn).call(this));
}, ir = function() {
  D(this, Bt) && (Cs.clearTimeout(D(this, Bt)), Z(this, Bt, void 0));
}, sr = function() {
  D(this, Wt) && (Cs.clearInterval(D(this, Wt)), Z(this, Wt, void 0));
}, nr = function() {
  const e = D(this, Pe).getQueryCache().build(D(this, Pe), this.options);
  if (e === D(this, X))
    return;
  const t = D(this, X);
  Z(this, X, e), Z(this, Xi, e.state), this.hasListeners() && (t == null || t.removeObserver(this), e.addObserver(this));
}, Zo = function(e) {
  sf.batch(() => {
    e.listeners && this.listeners.forEach((t) => {
      t(D(this, Le));
    }), D(this, Pe).getQueryCache().notify({
      query: D(this, X),
      type: "observerResultsUpdated"
    });
  });
}, ya);
function hf(r, e) {
  return Ke(e.enabled, r) !== !1 && r.state.data === void 0 && !(r.state.status === "error" && e.retryOnMount === !1);
}
function ca(r, e) {
  return hf(r, e) || r.state.data !== void 0 && rr(r, e, e.refetchOnMount);
}
function rr(r, e, t) {
  if (Ke(e.enabled, r) !== !1 && ji(e.staleTime, r) !== "static") {
    const i = typeof t == "function" ? t(r) : t;
    return i === "always" || i !== !1 && wr(r, e);
  }
  return !1;
}
function fa(r, e, t, i) {
  return (r !== e || Ke(i.enabled, r) === !1) && (!t.suspense || r.state.status !== "error") && wr(r, t);
}
function wr(r, e) {
  return Ke(e.enabled, r) !== !1 && r.isStaleByTime(ji(e.staleTime, r));
}
function uf(r, e) {
  return !Kn(r.getCurrentResult(), e);
}
var df = "VUE_QUERY_CLIENT";
function cf(r) {
  const e = r ? `:${r}` : "";
  return `${df}${e}`;
}
function ma(r, e) {
  Object.keys(r).forEach((t) => {
    r[t] = e[t];
  });
}
function ar(r, e, t = "", i = 0) {
  if (e) {
    const s = e(r, t, i);
    if (s === void 0 && Ca(r) || s !== void 0)
      return s;
  }
  if (Array.isArray(r))
    return r.map(
      (s, n) => ar(s, e, String(n), i + 1)
    );
  if (typeof r == "object" && mf(r)) {
    const s = Object.entries(r).map(([n, a]) => [
      n,
      ar(a, e, n, i + 1)
    ]);
    return Object.fromEntries(s);
  }
  return r;
}
function ff(r, e) {
  return ar(r, e);
}
function Ss(r, e = !1) {
  return ff(r, (t, i, s) => {
    if (s === 1 && i === "queryKey")
      return Ss(t, !0);
    if (e && pf(t))
      return Ss(t(), e);
    if (Ca(t))
      return Ss(_i(t), e);
  });
}
function mf(r) {
  if (Object.prototype.toString.call(r) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(r);
  return e === null || e === Object.prototype;
}
function pf(r) {
  return typeof r == "function";
}
function Jo(r = "") {
  if (!ul())
    throw new Error(
      "vue-query hooks can only be used inside setup() function or functions that support injection context."
    );
  const e = cf(r), t = lr(e);
  if (!t)
    throw new Error(
      "No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library."
    );
  return t;
}
function gf(r, e, t) {
  process.env.NODE_ENV === "development" && (dl() || console.warn(
    'vue-query composable like "useQuery()" should only be used inside a "setup()" function or a running effect scope. They might otherwise lead to memory leaks.'
  ));
  const i = Jo(), s = Ea(() => {
    var E;
    const b = Ss(e);
    typeof b.enabled == "function" && (b.enabled = b.enabled());
    const T = i.defaultQueryOptions(b);
    return T._optimisticResults = (E = i.isRestoring) != null && E.value ? "isRestoring" : "optimistic", T;
  }), n = new r(i, s.value), a = s.value.shallow ? cl(n.getCurrentResult()) : fl(n.getCurrentResult());
  let o = () => {
  };
  i.isRestoring && ht(
    i.isRestoring,
    (b) => {
      b || (o(), o = n.subscribe((T) => {
        ma(a, T);
      }));
    },
    { immediate: !0 }
  );
  const l = () => {
    n.setOptions(s.value), ma(a, n.getCurrentResult());
  };
  ht(s, l), ml(() => {
    o();
  });
  const h = (...b) => (l(), a.refetch(...b)), u = () => new Promise(
    (b, T) => {
      let E = () => {
      };
      const S = () => {
        if (s.value.enabled !== !1) {
          n.setOptions(s.value);
          const k = n.getOptimisticResult(
            s.value
          );
          k.isStale ? (E(), n.fetchOptimistic(s.value).then(b, (z) => {
            ua(s.value.throwOnError, [
              z,
              n.getCurrentQuery()
            ]) ? T(z) : b(n.getCurrentResult());
          })) : (E(), b(k));
        }
      };
      S(), E = ht(s, S);
    }
  );
  ht(
    () => a.error,
    (b) => {
      if (a.isError && !a.isFetching && ua(s.value.throwOnError, [
        b,
        n.getCurrentQuery()
      ]))
        throw b;
    }
  );
  const d = s.value.shallow ? pl(a) : gl(a), f = bl(d);
  for (const b in a)
    typeof a[b] == "function" && (f[b] = a[b]);
  return f.suspense = u, f.refetch = h, f;
}
function bf(r, e) {
  return gf(lf, r);
}
const vf = Symbol.for("y2kfund.supabase"), wf = {
  positions: (r, e) => ["positions", r, e],
  trades: (r) => ["trades", r],
  nlvMargin: (r, e) => ["nlvMargin", r, e],
  thesis: () => ["thesis"],
  thesisConnections: () => ["thesisConnections"],
  userAccountAccess: (r) => ["userAccountAccess", r]
};
function yf() {
  const r = lr(vf, null);
  if (!r) throw new Error("[@y2kfund/core] Supabase client not found. Did you install createCore()?");
  return r;
}
async function Cf(r, e) {
  if (!e)
    return console.log("⚠️ No userId provided, showing all positions"), [];
  try {
    console.log("👤 Fetching accessible accounts for user:", e);
    const { data: t, error: i } = await r.schema("hf").from("user_account_access").select("internal_account_id").eq("user_id", e).eq("is_active", !0);
    if (i)
      return console.error("❌ Error fetching user account access:", i), [];
    if (!t || t.length === 0)
      return console.log("⚠️ No account access found for user, showing all positions"), [];
    const s = t.map((n) => n.internal_account_id);
    return console.log("✅ User has access to accounts:", s), s;
  } catch (t) {
    return console.error("❌ Exception fetching account access:", t), [];
  }
}
function Ef(r, e) {
  const t = yf(), i = wf.trades(r), s = Jo(), n = bf({
    queryKey: i,
    queryFn: async () => {
      var o, l;
      const h = await Cf(t, e);
      console.log("🔍 Querying trades with config:", {
        accountId: r,
        schema: "hf",
        table: "trades",
        userId: e || "none",
        accessibleAccountIds: h.length > 0 ? h : "all"
      });
      const u = await t.schema("hf").from("trades").select("fetched_at").order("fetched_at", { ascending: !1 }).limit(1);
      if (u.error)
        throw console.error("❌ Max fetched_at query error:", u.error), u.error;
      if (!u.data || u.data.length === 0)
        return console.log("⚠️ No trades found in database"), [];
      const d = u.data[0].fetched_at;
      console.log("📅 Latest fetched_at:", d);
      let f = t.schema("hf").from("trades").select(`
          id,
          "accountId",
          internal_account_id,
          symbol,
          "assetCategory",
          quantity,
          "tradePrice",
          "buySell",
          "tradeDate",
          "settleDateTarget",
          "ibCommission",
          fetched_at,
          description,
          currency,
          "netCash",
          proceeds,
          "fifoPnlRealized",
          "openCloseIndicator",
          "multiplier",
          "mtmPnl",
          "closePrice",
          underlyingSymbol,
          "putCall",
          strike,
          expiry,
          "tradeID",
          conid,
          "underlyingConid",
          "tradeMoney"
        `).eq("fetched_at", d);
      h.length > 0 ? (console.log("🔒 Applying access filter for accounts:", h), f = f.in("internal_account_id", h)) : console.log("🔓 No access filter applied - showing all trades"), f = f.order('"tradeDate"', { ascending: !1 });
      const [b, T, E] = await Promise.all([
        f,
        t.schema("hf").from("user_accounts_master").select("internal_account_id, legal_entity"),
        e ? t.schema("hf").from("user_account_alias").select("internal_account_id, alias").eq("user_id", e) : { data: [], error: null }
      ]);
      if (b.error)
        throw console.error("❌ Trades query error:", b.error), b.error;
      if (T.error)
        throw console.error("❌ Accounts query error:", T.error), T.error;
      console.log("✅ Trades query success:", {
        latestFetchedAt: d,
        tradesCount: (o = b.data) == null ? void 0 : o.length,
        accountsCount: (l = T.data) == null ? void 0 : l.length,
        filtered: h.length > 0,
        accessibleAccounts: h.length > 0 ? h : "all"
      });
      const S = new Map(
        (T.data || []).map((z) => [z.internal_account_id, z.legal_entity])
      ), k = new Map(
        (E.data || []).map((z) => [z.internal_account_id, z.alias])
      );
      return (b.data || []).map((z) => {
        let N = S.get(z.internal_account_id) || void 0;
        return k.has(z.internal_account_id) && (N = k.get(z.internal_account_id)), {
          ...z,
          legal_entity: N
        };
      });
    },
    staleTime: 6e4
  }), a = t.channel(`trades:${r}`).on(
    "postgres_changes",
    {
      schema: "hf",
      table: "trades",
      event: "*"
    },
    () => s.invalidateQueries({ queryKey: i })
  ).subscribe();
  return {
    ...n,
    _cleanup: () => {
      var o;
      (o = a == null ? void 0 : a.unsubscribe) == null || o.call(a);
    }
  };
}
var on = [
  "onChange",
  "onClose",
  "onDayCreate",
  "onDestroy",
  "onKeyDown",
  "onMonthChange",
  "onOpen",
  "onParseConfig",
  "onReady",
  "onValueUpdate",
  "onYearChange",
  "onPreCalendarPosition"
], ui = {
  _disable: [],
  allowInput: !1,
  allowInvalidPreload: !1,
  altFormat: "F j, Y",
  altInput: !1,
  altInputClass: "form-control input",
  animate: typeof window == "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
  ariaDateFormat: "F j, Y",
  autoFillDefaultTime: !0,
  clickOpens: !0,
  closeOnSelect: !0,
  conjunction: ", ",
  dateFormat: "Y-m-d",
  defaultHour: 12,
  defaultMinute: 0,
  defaultSeconds: 0,
  disable: [],
  disableMobile: !1,
  enableSeconds: !1,
  enableTime: !1,
  errorHandler: function(r) {
    return typeof console < "u" && console.warn(r);
  },
  getWeek: function(r) {
    var e = new Date(r.getTime());
    e.setHours(0, 0, 0, 0), e.setDate(e.getDate() + 3 - (e.getDay() + 6) % 7);
    var t = new Date(e.getFullYear(), 0, 4);
    return 1 + Math.round(((e.getTime() - t.getTime()) / 864e5 - 3 + (t.getDay() + 6) % 7) / 7);
  },
  hourIncrement: 1,
  ignoredFocusElements: [],
  inline: !1,
  locale: "default",
  minuteIncrement: 5,
  mode: "single",
  monthSelectorType: "dropdown",
  nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
  noCalendar: !1,
  now: /* @__PURE__ */ new Date(),
  onChange: [],
  onClose: [],
  onDayCreate: [],
  onDestroy: [],
  onKeyDown: [],
  onMonthChange: [],
  onOpen: [],
  onParseConfig: [],
  onReady: [],
  onValueUpdate: [],
  onYearChange: [],
  onPreCalendarPosition: [],
  plugins: [],
  position: "auto",
  positionElement: void 0,
  prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
  shorthandCurrentMonth: !1,
  showMonths: 1,
  static: !1,
  time_24hr: !1,
  weekNumbers: !1,
  wrap: !1
}, Ki = {
  weekdays: {
    shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    longhand: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ]
  },
  months: {
    shorthand: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    longhand: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ]
  },
  daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  firstDayOfWeek: 0,
  ordinal: function(r) {
    var e = r % 100;
    if (e > 3 && e < 21)
      return "th";
    switch (e % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  },
  rangeSeparator: " to ",
  weekAbbreviation: "Wk",
  scrollTitle: "Scroll to increment",
  toggleTitle: "Click to toggle",
  amPM: ["AM", "PM"],
  yearAriaLabel: "Year",
  monthAriaLabel: "Month",
  hourAriaLabel: "Hour",
  minuteAriaLabel: "Minute",
  time_24hr: !1
}, Ae = function(r, e) {
  return e === void 0 && (e = 2), ("000" + r).slice(e * -1);
}, je = function(r) {
  return r === !0 ? 1 : 0;
};
function pa(r, e) {
  var t;
  return function() {
    var i = this, s = arguments;
    clearTimeout(t), t = setTimeout(function() {
      return r.apply(i, s);
    }, e);
  };
}
var ln = function(r) {
  return r instanceof Array ? r : [r];
};
function De(r, e, t) {
  if (t === !0)
    return r.classList.add(e);
  r.classList.remove(e);
}
function se(r, e, t) {
  var i = window.document.createElement(r);
  return e = e || "", t = t || "", i.className = e, t !== void 0 && (i.textContent = t), i;
}
function Es(r) {
  for (; r.firstChild; )
    r.removeChild(r.firstChild);
}
function Ko(r, e) {
  if (e(r))
    return r;
  if (r.parentNode)
    return Ko(r.parentNode, e);
}
function Ts(r, e) {
  var t = se("div", "numInputWrapper"), i = se("input", "numInput " + r), s = se("span", "arrowUp"), n = se("span", "arrowDown");
  if (navigator.userAgent.indexOf("MSIE 9.0") === -1 ? i.type = "number" : (i.type = "text", i.pattern = "\\d*"), e !== void 0)
    for (var a in e)
      i.setAttribute(a, e[a]);
  return t.appendChild(i), t.appendChild(s), t.appendChild(n), t;
}
function Ie(r) {
  try {
    if (typeof r.composedPath == "function") {
      var e = r.composedPath();
      return e[0];
    }
    return r.target;
  } catch {
    return r.target;
  }
}
var hn = function() {
}, Hs = function(r, e, t) {
  return t.months[e ? "shorthand" : "longhand"][r];
}, Tf = {
  D: hn,
  F: function(r, e, t) {
    r.setMonth(t.months.longhand.indexOf(e));
  },
  G: function(r, e) {
    r.setHours((r.getHours() >= 12 ? 12 : 0) + parseFloat(e));
  },
  H: function(r, e) {
    r.setHours(parseFloat(e));
  },
  J: function(r, e) {
    r.setDate(parseFloat(e));
  },
  K: function(r, e, t) {
    r.setHours(r.getHours() % 12 + 12 * je(new RegExp(t.amPM[1], "i").test(e)));
  },
  M: function(r, e, t) {
    r.setMonth(t.months.shorthand.indexOf(e));
  },
  S: function(r, e) {
    r.setSeconds(parseFloat(e));
  },
  U: function(r, e) {
    return new Date(parseFloat(e) * 1e3);
  },
  W: function(r, e, t) {
    var i = parseInt(e), s = new Date(r.getFullYear(), 0, 2 + (i - 1) * 7, 0, 0, 0, 0);
    return s.setDate(s.getDate() - s.getDay() + t.firstDayOfWeek), s;
  },
  Y: function(r, e) {
    r.setFullYear(parseFloat(e));
  },
  Z: function(r, e) {
    return new Date(e);
  },
  d: function(r, e) {
    r.setDate(parseFloat(e));
  },
  h: function(r, e) {
    r.setHours((r.getHours() >= 12 ? 12 : 0) + parseFloat(e));
  },
  i: function(r, e) {
    r.setMinutes(parseFloat(e));
  },
  j: function(r, e) {
    r.setDate(parseFloat(e));
  },
  l: hn,
  m: function(r, e) {
    r.setMonth(parseFloat(e) - 1);
  },
  n: function(r, e) {
    r.setMonth(parseFloat(e) - 1);
  },
  s: function(r, e) {
    r.setSeconds(parseFloat(e));
  },
  u: function(r, e) {
    return new Date(parseFloat(e));
  },
  w: hn,
  y: function(r, e) {
    r.setFullYear(2e3 + parseFloat(e));
  }
}, zt = {
  D: "",
  F: "",
  G: "(\\d\\d|\\d)",
  H: "(\\d\\d|\\d)",
  J: "(\\d\\d|\\d)\\w+",
  K: "",
  M: "",
  S: "(\\d\\d|\\d)",
  U: "(.+)",
  W: "(\\d\\d|\\d)",
  Y: "(\\d{4})",
  Z: "(.+)",
  d: "(\\d\\d|\\d)",
  h: "(\\d\\d|\\d)",
  i: "(\\d\\d|\\d)",
  j: "(\\d\\d|\\d)",
  l: "",
  m: "(\\d\\d|\\d)",
  n: "(\\d\\d|\\d)",
  s: "(\\d\\d|\\d)",
  u: "(.+)",
  w: "(\\d\\d|\\d)",
  y: "(\\d{2})"
}, Ui = {
  Z: function(r) {
    return r.toISOString();
  },
  D: function(r, e, t) {
    return e.weekdays.shorthand[Ui.w(r, e, t)];
  },
  F: function(r, e, t) {
    return Hs(Ui.n(r, e, t) - 1, !1, e);
  },
  G: function(r, e, t) {
    return Ae(Ui.h(r, e, t));
  },
  H: function(r) {
    return Ae(r.getHours());
  },
  J: function(r, e) {
    return e.ordinal !== void 0 ? r.getDate() + e.ordinal(r.getDate()) : r.getDate();
  },
  K: function(r, e) {
    return e.amPM[je(r.getHours() > 11)];
  },
  M: function(r, e) {
    return Hs(r.getMonth(), !0, e);
  },
  S: function(r) {
    return Ae(r.getSeconds());
  },
  U: function(r) {
    return r.getTime() / 1e3;
  },
  W: function(r, e, t) {
    return t.getWeek(r);
  },
  Y: function(r) {
    return Ae(r.getFullYear(), 4);
  },
  d: function(r) {
    return Ae(r.getDate());
  },
  h: function(r) {
    return r.getHours() % 12 ? r.getHours() % 12 : 12;
  },
  i: function(r) {
    return Ae(r.getMinutes());
  },
  j: function(r) {
    return r.getDate();
  },
  l: function(r, e) {
    return e.weekdays.longhand[r.getDay()];
  },
  m: function(r) {
    return Ae(r.getMonth() + 1);
  },
  n: function(r) {
    return r.getMonth() + 1;
  },
  s: function(r) {
    return r.getSeconds();
  },
  u: function(r) {
    return r.getTime();
  },
  w: function(r) {
    return r.getDay();
  },
  y: function(r) {
    return String(r.getFullYear()).substring(2);
  }
}, Xo = function(r) {
  var e = r.config, t = e === void 0 ? ui : e, i = r.l10n, s = i === void 0 ? Ki : i, n = r.isMobile, a = n === void 0 ? !1 : n;
  return function(o, l, h) {
    var u = h || s;
    return t.formatDate !== void 0 && !a ? t.formatDate(o, l, u) : l.split("").map(function(d, f, b) {
      return Ui[d] && b[f - 1] !== "\\" ? Ui[d](o, u, t) : d !== "\\" ? d : "";
    }).join("");
  };
}, or = function(r) {
  var e = r.config, t = e === void 0 ? ui : e, i = r.l10n, s = i === void 0 ? Ki : i;
  return function(n, a, o, l) {
    if (!(n !== 0 && !n)) {
      var h = l || s, u, d = n;
      if (n instanceof Date)
        u = new Date(n.getTime());
      else if (typeof n != "string" && n.toFixed !== void 0)
        u = new Date(n);
      else if (typeof n == "string") {
        var f = a || (t || ui).dateFormat, b = String(n).trim();
        if (b === "today")
          u = /* @__PURE__ */ new Date(), o = !0;
        else if (t && t.parseDate)
          u = t.parseDate(n, f);
        else if (/Z$/.test(b) || /GMT$/.test(b))
          u = new Date(n);
        else {
          for (var T = void 0, E = [], S = 0, k = 0, z = ""; S < f.length; S++) {
            var N = f[S], J = N === "\\", q = f[S - 1] === "\\" || J;
            if (zt[N] && !q) {
              z += zt[N];
              var te = new RegExp(z).exec(n);
              te && (T = !0) && E[N !== "Y" ? "push" : "unshift"]({
                fn: Tf[N],
                val: te[++k]
              });
            } else J || (z += ".");
          }
          u = !t || !t.noCalendar ? new Date((/* @__PURE__ */ new Date()).getFullYear(), 0, 1, 0, 0, 0, 0) : new Date((/* @__PURE__ */ new Date()).setHours(0, 0, 0, 0)), E.forEach(function(ne) {
            var B = ne.fn, re = ne.val;
            return u = B(u, re, h) || u;
          }), u = T ? u : void 0;
        }
      }
      if (!(u instanceof Date && !isNaN(u.getTime()))) {
        t.errorHandler(new Error("Invalid date provided: " + d));
        return;
      }
      return o === !0 && u.setHours(0, 0, 0, 0), u;
    }
  };
};
function Ne(r, e, t) {
  return t === void 0 && (t = !0), t !== !1 ? new Date(r.getTime()).setHours(0, 0, 0, 0) - new Date(e.getTime()).setHours(0, 0, 0, 0) : r.getTime() - e.getTime();
}
var kf = function(r, e, t) {
  return r > Math.min(e, t) && r < Math.max(e, t);
}, un = function(r, e, t) {
  return r * 3600 + e * 60 + t;
}, Rf = function(r) {
  var e = Math.floor(r / 3600), t = (r - e * 3600) / 60;
  return [e, t, r - e * 3600 - t * 60];
}, xf = {
  DAY: 864e5
};
function dn(r) {
  var e = r.defaultHour, t = r.defaultMinute, i = r.defaultSeconds;
  if (r.minDate !== void 0) {
    var s = r.minDate.getHours(), n = r.minDate.getMinutes(), a = r.minDate.getSeconds();
    e < s && (e = s), e === s && t < n && (t = n), e === s && t === n && i < a && (i = r.minDate.getSeconds());
  }
  if (r.maxDate !== void 0) {
    var o = r.maxDate.getHours(), l = r.maxDate.getMinutes();
    e = Math.min(e, o), e === o && (t = Math.min(l, t)), e === o && t === l && (i = r.maxDate.getSeconds());
  }
  return { hours: e, minutes: t, seconds: i };
}
typeof Object.assign != "function" && (Object.assign = function(r) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  if (!r)
    throw TypeError("Cannot convert undefined or null to object");
  for (var i = function(o) {
    o && Object.keys(o).forEach(function(l) {
      return r[l] = o[l];
    });
  }, s = 0, n = e; s < n.length; s++) {
    var a = n[s];
    i(a);
  }
  return r;
});
var Re = function() {
  return Re = Object.assign || function(r) {
    for (var e, t = 1, i = arguments.length; t < i; t++) {
      e = arguments[t];
      for (var s in e) Object.prototype.hasOwnProperty.call(e, s) && (r[s] = e[s]);
    }
    return r;
  }, Re.apply(this, arguments);
}, ga = function() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++) r += arguments[e].length;
  for (var i = Array(r), s = 0, e = 0; e < t; e++)
    for (var n = arguments[e], a = 0, o = n.length; a < o; a++, s++)
      i[s] = n[a];
  return i;
}, Mf = 300;
function Sf(r, e) {
  var t = {
    config: Re(Re({}, ui), be.defaultConfig),
    l10n: Ki
  };
  t.parseDate = or({ config: t.config, l10n: t.l10n }), t._handlers = [], t.pluginElements = [], t.loadedPlugins = [], t._bind = E, t._setHoursFromDate = f, t._positionCalendar = Jt, t.changeMonth = $e, t.changeYear = qt, t.clear = $t, t.close = Yt, t.onMouseOver = et, t._createElement = se, t.createDay = te, t.destroy = hs, t.isEnabled = Se, t.jumpToDate = z, t.updateValue = ee, t.open = Mi, t.redraw = Li, t.set = cs, t.setDate = fs, t.toggle = v;
  function i() {
    t.utils = {
      getDaysInMonth: function(c, g) {
        return c === void 0 && (c = t.currentMonth), g === void 0 && (g = t.currentYear), c === 1 && (g % 4 === 0 && g % 100 !== 0 || g % 400 === 0) ? 29 : t.l10n.daysInMonth[c];
      }
    };
  }
  function s() {
    t.element = t.input = r, t.isOpen = !1, Us(), ds(), m(), $s(), i(), t.isMobile || q(), k(), (t.selectedDates.length || t.config.noCalendar) && (t.config.enableTime && f(t.config.noCalendar ? t.latestSelectedDateObj : void 0), ee(!1)), o();
    var c = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    !t.isMobile && c && Jt(), C("onReady");
  }
  function n() {
    var c;
    return ((c = t.calendarContainer) === null || c === void 0 ? void 0 : c.getRootNode()).activeElement || document.activeElement;
  }
  function a(c) {
    return c.bind(t);
  }
  function o() {
    var c = t.config;
    c.weekNumbers === !1 && c.showMonths === 1 || c.noCalendar !== !0 && window.requestAnimationFrame(function() {
      if (t.calendarContainer !== void 0 && (t.calendarContainer.style.visibility = "hidden", t.calendarContainer.style.display = "block"), t.daysContainer !== void 0) {
        var g = (t.days.offsetWidth + 1) * c.showMonths;
        t.daysContainer.style.width = g + "px", t.calendarContainer.style.width = g + (t.weekWrapper !== void 0 ? t.weekWrapper.offsetWidth : 0) + "px", t.calendarContainer.style.removeProperty("visibility"), t.calendarContainer.style.removeProperty("display");
      }
    });
  }
  function l(c) {
    if (t.selectedDates.length === 0) {
      var g = t.config.minDate === void 0 || Ne(/* @__PURE__ */ new Date(), t.config.minDate) >= 0 ? /* @__PURE__ */ new Date() : new Date(t.config.minDate.getTime()), y = dn(t.config);
      g.setHours(y.hours, y.minutes, y.seconds, g.getMilliseconds()), t.selectedDates = [g], t.latestSelectedDateObj = g;
    }
    c !== void 0 && c.type !== "blur" && yr(c);
    var R = t._input.value;
    d(), ee(), t._input.value !== R && t._debouncedChange();
  }
  function h(c, g) {
    return c % 12 + 12 * je(g === t.l10n.amPM[1]);
  }
  function u(c) {
    switch (c % 24) {
      case 0:
      case 12:
        return 12;
      default:
        return c % 12;
    }
  }
  function d() {
    if (!(t.hourElement === void 0 || t.minuteElement === void 0)) {
      var c = (parseInt(t.hourElement.value.slice(-2), 10) || 0) % 24, g = (parseInt(t.minuteElement.value, 10) || 0) % 60, y = t.secondElement !== void 0 ? (parseInt(t.secondElement.value, 10) || 0) % 60 : 0;
      t.amPM !== void 0 && (c = h(c, t.amPM.textContent));
      var R = t.config.minTime !== void 0 || t.config.minDate && t.minDateHasTime && t.latestSelectedDateObj && Ne(t.latestSelectedDateObj, t.config.minDate, !0) === 0, O = t.config.maxTime !== void 0 || t.config.maxDate && t.maxDateHasTime && t.latestSelectedDateObj && Ne(t.latestSelectedDateObj, t.config.maxDate, !0) === 0;
      if (t.config.maxTime !== void 0 && t.config.minTime !== void 0 && t.config.minTime > t.config.maxTime) {
        var P = un(t.config.minTime.getHours(), t.config.minTime.getMinutes(), t.config.minTime.getSeconds()), G = un(t.config.maxTime.getHours(), t.config.maxTime.getMinutes(), t.config.maxTime.getSeconds()), I = un(c, g, y);
        if (I > G && I < P) {
          var Y = Rf(P);
          c = Y[0], g = Y[1], y = Y[2];
        }
      } else {
        if (O) {
          var A = t.config.maxTime !== void 0 ? t.config.maxTime : t.config.maxDate;
          c = Math.min(c, A.getHours()), c === A.getHours() && (g = Math.min(g, A.getMinutes())), g === A.getMinutes() && (y = Math.min(y, A.getSeconds()));
        }
        if (R) {
          var W = t.config.minTime !== void 0 ? t.config.minTime : t.config.minDate;
          c = Math.max(c, W.getHours()), c === W.getHours() && g < W.getMinutes() && (g = W.getMinutes()), g === W.getMinutes() && (y = Math.max(y, W.getSeconds()));
        }
      }
      b(c, g, y);
    }
  }
  function f(c) {
    var g = c || t.latestSelectedDateObj;
    g && g instanceof Date && b(g.getHours(), g.getMinutes(), g.getSeconds());
  }
  function b(c, g, y) {
    t.latestSelectedDateObj !== void 0 && t.latestSelectedDateObj.setHours(c % 24, g, y || 0, 0), !(!t.hourElement || !t.minuteElement || t.isMobile) && (t.hourElement.value = Ae(t.config.time_24hr ? c : (12 + c) % 12 + 12 * je(c % 12 === 0)), t.minuteElement.value = Ae(g), t.amPM !== void 0 && (t.amPM.textContent = t.l10n.amPM[je(c >= 12)]), t.secondElement !== void 0 && (t.secondElement.value = Ae(y)));
  }
  function T(c) {
    var g = Ie(c), y = parseInt(g.value) + (c.delta || 0);
    (y / 1e3 > 1 || c.key === "Enter" && !/[^\d]/.test(y.toString())) && qt(y);
  }
  function E(c, g, y, R) {
    if (g instanceof Array)
      return g.forEach(function(O) {
        return E(c, O, y, R);
      });
    if (c instanceof Array)
      return c.forEach(function(O) {
        return E(O, g, y, R);
      });
    c.addEventListener(g, y, R), t._handlers.push({
      remove: function() {
        return c.removeEventListener(g, y, R);
      }
    });
  }
  function S() {
    C("onChange");
  }
  function k() {
    if (t.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(y) {
      Array.prototype.forEach.call(t.element.querySelectorAll("[data-" + y + "]"), function(R) {
        return E(R, "click", t[y]);
      });
    }), t.isMobile) {
      w();
      return;
    }
    var c = pa(Mt, 50);
    if (t._debouncedChange = pa(S, Mf), t.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && E(t.daysContainer, "mouseover", function(y) {
      t.config.mode === "range" && et(Ie(y));
    }), E(t._input, "keydown", us), t.calendarContainer !== void 0 && E(t.calendarContainer, "keydown", us), !t.config.inline && !t.config.static && E(window, "resize", c), window.ontouchstart !== void 0 ? E(window.document, "touchstart", xi) : E(window.document, "mousedown", xi), E(window.document, "focus", xi, { capture: !0 }), t.config.clickOpens === !0 && (E(t._input, "focus", t.open), E(t._input, "click", t.open)), t.daysContainer !== void 0 && (E(t.monthNav, "click", dt), E(t.monthNav, ["keyup", "increment"], T), E(t.daysContainer, "click", ce)), t.timeContainer !== void 0 && t.minuteElement !== void 0 && t.hourElement !== void 0) {
      var g = function(y) {
        return Ie(y).select();
      };
      E(t.timeContainer, ["increment"], l), E(t.timeContainer, "blur", l, { capture: !0 }), E(t.timeContainer, "click", N), E([t.hourElement, t.minuteElement], ["focus", "click"], g), t.secondElement !== void 0 && E(t.secondElement, "focus", function() {
        return t.secondElement && t.secondElement.select();
      }), t.amPM !== void 0 && E(t.amPM, "click", function(y) {
        l(y);
      });
    }
    t.config.allowInput && E(t._input, "blur", js);
  }
  function z(c, g) {
    var y = c !== void 0 ? t.parseDate(c) : t.latestSelectedDateObj || (t.config.minDate && t.config.minDate > t.now ? t.config.minDate : t.config.maxDate && t.config.maxDate < t.now ? t.config.maxDate : t.now), R = t.currentYear, O = t.currentMonth;
    try {
      y !== void 0 && (t.currentYear = y.getFullYear(), t.currentMonth = y.getMonth());
    } catch (P) {
      P.message = "Invalid date supplied: " + y, t.config.errorHandler(P);
    }
    g && t.currentYear !== R && (C("onYearChange"), ze()), g && (t.currentYear !== R || t.currentMonth !== O) && C("onMonthChange"), t.redraw();
  }
  function N(c) {
    var g = Ie(c);
    ~g.className.indexOf("arrow") && J(c, g.classList.contains("arrowUp") ? 1 : -1);
  }
  function J(c, g, y) {
    var R = c && Ie(c), O = y || R && R.parentNode && R.parentNode.firstChild, P = x("increment");
    P.delta = g, O && O.dispatchEvent(P);
  }
  function q() {
    var c = window.document.createDocumentFragment();
    if (t.calendarContainer = se("div", "flatpickr-calendar"), t.calendarContainer.tabIndex = -1, !t.config.noCalendar) {
      if (c.appendChild(as()), t.innerContainer = se("div", "flatpickr-innerContainer"), t.config.weekNumbers) {
        var g = ls(), y = g.weekWrapper, R = g.weekNumbers;
        t.innerContainer.appendChild(y), t.weekNumbers = R, t.weekWrapper = y;
      }
      t.rContainer = se("div", "flatpickr-rContainer"), t.rContainer.appendChild(ki()), t.daysContainer || (t.daysContainer = se("div", "flatpickr-days"), t.daysContainer.tabIndex = -1), _(), t.rContainer.appendChild(t.daysContainer), t.innerContainer.appendChild(t.rContainer), c.appendChild(t.innerContainer);
    }
    t.config.enableTime && c.appendChild(os()), De(t.calendarContainer, "rangeMode", t.config.mode === "range"), De(t.calendarContainer, "animate", t.config.animate === !0), De(t.calendarContainer, "multiMonth", t.config.showMonths > 1), t.calendarContainer.appendChild(c);
    var O = t.config.appendTo !== void 0 && t.config.appendTo.nodeType !== void 0;
    if ((t.config.inline || t.config.static) && (t.calendarContainer.classList.add(t.config.inline ? "inline" : "static"), t.config.inline && (!O && t.element.parentNode ? t.element.parentNode.insertBefore(t.calendarContainer, t._input.nextSibling) : t.config.appendTo !== void 0 && t.config.appendTo.appendChild(t.calendarContainer)), t.config.static)) {
      var P = se("div", "flatpickr-wrapper");
      t.element.parentNode && t.element.parentNode.insertBefore(P, t.element), P.appendChild(t.element), t.altInput && P.appendChild(t.altInput), P.appendChild(t.calendarContainer);
    }
    !t.config.static && !t.config.inline && (t.config.appendTo !== void 0 ? t.config.appendTo : window.document.body).appendChild(t.calendarContainer);
  }
  function te(c, g, y, R) {
    var O = Se(g, !0), P = se("span", c, g.getDate().toString());
    return P.dateObj = g, P.$i = R, P.setAttribute("aria-label", t.formatDate(g, t.config.ariaDateFormat)), c.indexOf("hidden") === -1 && Ne(g, t.now) === 0 && (t.todayDateElem = P, P.classList.add("today"), P.setAttribute("aria-current", "date")), O ? (P.tabIndex = -1, M(g) && (P.classList.add("selected"), t.selectedDateElem = P, t.config.mode === "range" && (De(P, "startRange", t.selectedDates[0] && Ne(g, t.selectedDates[0], !0) === 0), De(P, "endRange", t.selectedDates[1] && Ne(g, t.selectedDates[1], !0) === 0), c === "nextMonthDay" && P.classList.add("inRange")))) : P.classList.add("flatpickr-disabled"), t.config.mode === "range" && L(g) && !M(g) && P.classList.add("inRange"), t.weekNumbers && t.config.showMonths === 1 && c !== "prevMonthDay" && R % 7 === 6 && t.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + t.config.getWeek(g) + "</span>"), C("onDayCreate", P), P;
  }
  function ne(c) {
    c.focus(), t.config.mode === "range" && et(c);
  }
  function B(c) {
    for (var g = c > 0 ? 0 : t.config.showMonths - 1, y = c > 0 ? t.config.showMonths : -1, R = g; R != y; R += c)
      for (var O = t.daysContainer.children[R], P = c > 0 ? 0 : O.children.length - 1, G = c > 0 ? O.children.length : -1, I = P; I != G; I += c) {
        var Y = O.children[I];
        if (Y.className.indexOf("hidden") === -1 && Se(Y.dateObj))
          return Y;
      }
  }
  function re(c, g) {
    for (var y = c.className.indexOf("Month") === -1 ? c.dateObj.getMonth() : t.currentMonth, R = g > 0 ? t.config.showMonths : -1, O = g > 0 ? 1 : -1, P = y - t.currentMonth; P != R; P += O)
      for (var G = t.daysContainer.children[P], I = y - t.currentMonth === P ? c.$i + g : g < 0 ? G.children.length - 1 : 0, Y = G.children.length, A = I; A >= 0 && A < Y && A != (g > 0 ? Y : -1); A += O) {
        var W = G.children[A];
        if (W.className.indexOf("hidden") === -1 && Se(W.dateObj) && Math.abs(c.$i - A) >= Math.abs(g))
          return ne(W);
      }
    t.changeMonth(O), ae(B(O), 0);
  }
  function ae(c, g) {
    var y = n(), R = Ye(y || document.body), O = c !== void 0 ? c : R ? y : t.selectedDateElem !== void 0 && Ye(t.selectedDateElem) ? t.selectedDateElem : t.todayDateElem !== void 0 && Ye(t.todayDateElem) ? t.todayDateElem : B(g > 0 ? 1 : -1);
    O === void 0 ? t._input.focus() : R ? re(O, g) : ne(O);
  }
  function Oe(c, g) {
    for (var y = (new Date(c, g, 1).getDay() - t.l10n.firstDayOfWeek + 7) % 7, R = t.utils.getDaysInMonth((g - 1 + 12) % 12, c), O = t.utils.getDaysInMonth(g, c), P = window.document.createDocumentFragment(), G = t.config.showMonths > 1, I = G ? "prevMonthDay hidden" : "prevMonthDay", Y = G ? "nextMonthDay hidden" : "nextMonthDay", A = R + 1 - y, W = 0; A <= R; A++, W++)
      P.appendChild(te("flatpickr-day " + I, new Date(c, g - 1, A), A, W));
    for (A = 1; A <= O; A++, W++)
      P.appendChild(te("flatpickr-day", new Date(c, g, A), A, W));
    for (var ue = O + 1; ue <= 42 - y && (t.config.showMonths === 1 || W % 7 !== 0); ue++, W++)
      P.appendChild(te("flatpickr-day " + Y, new Date(c, g + 1, ue % O), ue, W));
    var tt = se("div", "dayContainer");
    return tt.appendChild(P), tt;
  }
  function _() {
    if (t.daysContainer !== void 0) {
      Es(t.daysContainer), t.weekNumbers && Es(t.weekNumbers);
      for (var c = document.createDocumentFragment(), g = 0; g < t.config.showMonths; g++) {
        var y = new Date(t.currentYear, t.currentMonth, 1);
        y.setMonth(t.currentMonth + g), c.appendChild(Oe(y.getFullYear(), y.getMonth()));
      }
      t.daysContainer.appendChild(c), t.days = t.daysContainer.firstChild, t.config.mode === "range" && t.selectedDates.length === 1 && et();
    }
  }
  function ze() {
    if (!(t.config.showMonths > 1 || t.config.monthSelectorType !== "dropdown")) {
      var c = function(R) {
        return t.config.minDate !== void 0 && t.currentYear === t.config.minDate.getFullYear() && R < t.config.minDate.getMonth() ? !1 : !(t.config.maxDate !== void 0 && t.currentYear === t.config.maxDate.getFullYear() && R > t.config.maxDate.getMonth());
      };
      t.monthsDropdownContainer.tabIndex = -1, t.monthsDropdownContainer.innerHTML = "";
      for (var g = 0; g < 12; g++)
        if (c(g)) {
          var y = se("option", "flatpickr-monthDropdown-month");
          y.value = new Date(t.currentYear, g).getMonth().toString(), y.textContent = Hs(g, t.config.shorthandCurrentMonth, t.l10n), y.tabIndex = -1, t.currentMonth === g && (y.selected = !0), t.monthsDropdownContainer.appendChild(y);
        }
    }
  }
  function Gt() {
    var c = se("div", "flatpickr-month"), g = window.document.createDocumentFragment(), y;
    t.config.showMonths > 1 || t.config.monthSelectorType === "static" ? y = se("span", "cur-month") : (t.monthsDropdownContainer = se("select", "flatpickr-monthDropdown-months"), t.monthsDropdownContainer.setAttribute("aria-label", t.l10n.monthAriaLabel), E(t.monthsDropdownContainer, "change", function(G) {
      var I = Ie(G), Y = parseInt(I.value, 10);
      t.changeMonth(Y - t.currentMonth), C("onMonthChange");
    }), ze(), y = t.monthsDropdownContainer);
    var R = Ts("cur-year", { tabindex: "-1" }), O = R.getElementsByTagName("input")[0];
    O.setAttribute("aria-label", t.l10n.yearAriaLabel), t.config.minDate && O.setAttribute("min", t.config.minDate.getFullYear().toString()), t.config.maxDate && (O.setAttribute("max", t.config.maxDate.getFullYear().toString()), O.disabled = !!t.config.minDate && t.config.minDate.getFullYear() === t.config.maxDate.getFullYear());
    var P = se("div", "flatpickr-current-month");
    return P.appendChild(y), P.appendChild(R), g.appendChild(P), c.appendChild(g), {
      container: c,
      yearElement: O,
      monthElement: y
    };
  }
  function rs() {
    Es(t.monthNav), t.monthNav.appendChild(t.prevMonthNav), t.config.showMonths && (t.yearElements = [], t.monthElements = []);
    for (var c = t.config.showMonths; c--; ) {
      var g = Gt();
      t.yearElements.push(g.yearElement), t.monthElements.push(g.monthElement), t.monthNav.appendChild(g.container);
    }
    t.monthNav.appendChild(t.nextMonthNav);
  }
  function as() {
    return t.monthNav = se("div", "flatpickr-months"), t.yearElements = [], t.monthElements = [], t.prevMonthNav = se("span", "flatpickr-prev-month"), t.prevMonthNav.innerHTML = t.config.prevArrow, t.nextMonthNav = se("span", "flatpickr-next-month"), t.nextMonthNav.innerHTML = t.config.nextArrow, rs(), Object.defineProperty(t, "_hidePrevMonthArrow", {
      get: function() {
        return t.__hidePrevMonthArrow;
      },
      set: function(c) {
        t.__hidePrevMonthArrow !== c && (De(t.prevMonthNav, "flatpickr-disabled", c), t.__hidePrevMonthArrow = c);
      }
    }), Object.defineProperty(t, "_hideNextMonthArrow", {
      get: function() {
        return t.__hideNextMonthArrow;
      },
      set: function(c) {
        t.__hideNextMonthArrow !== c && (De(t.nextMonthNav, "flatpickr-disabled", c), t.__hideNextMonthArrow = c);
      }
    }), t.currentYearElement = t.yearElements[0], K(), t.monthNav;
  }
  function os() {
    t.calendarContainer.classList.add("hasTime"), t.config.noCalendar && t.calendarContainer.classList.add("noCalendar");
    var c = dn(t.config);
    t.timeContainer = se("div", "flatpickr-time"), t.timeContainer.tabIndex = -1;
    var g = se("span", "flatpickr-time-separator", ":"), y = Ts("flatpickr-hour", {
      "aria-label": t.l10n.hourAriaLabel
    });
    t.hourElement = y.getElementsByTagName("input")[0];
    var R = Ts("flatpickr-minute", {
      "aria-label": t.l10n.minuteAriaLabel
    });
    if (t.minuteElement = R.getElementsByTagName("input")[0], t.hourElement.tabIndex = t.minuteElement.tabIndex = -1, t.hourElement.value = Ae(t.latestSelectedDateObj ? t.latestSelectedDateObj.getHours() : t.config.time_24hr ? c.hours : u(c.hours)), t.minuteElement.value = Ae(t.latestSelectedDateObj ? t.latestSelectedDateObj.getMinutes() : c.minutes), t.hourElement.setAttribute("step", t.config.hourIncrement.toString()), t.minuteElement.setAttribute("step", t.config.minuteIncrement.toString()), t.hourElement.setAttribute("min", t.config.time_24hr ? "0" : "1"), t.hourElement.setAttribute("max", t.config.time_24hr ? "23" : "12"), t.hourElement.setAttribute("maxlength", "2"), t.minuteElement.setAttribute("min", "0"), t.minuteElement.setAttribute("max", "59"), t.minuteElement.setAttribute("maxlength", "2"), t.timeContainer.appendChild(y), t.timeContainer.appendChild(g), t.timeContainer.appendChild(R), t.config.time_24hr && t.timeContainer.classList.add("time24hr"), t.config.enableSeconds) {
      t.timeContainer.classList.add("hasSeconds");
      var O = Ts("flatpickr-second");
      t.secondElement = O.getElementsByTagName("input")[0], t.secondElement.value = Ae(t.latestSelectedDateObj ? t.latestSelectedDateObj.getSeconds() : c.seconds), t.secondElement.setAttribute("step", t.minuteElement.getAttribute("step")), t.secondElement.setAttribute("min", "0"), t.secondElement.setAttribute("max", "59"), t.secondElement.setAttribute("maxlength", "2"), t.timeContainer.appendChild(se("span", "flatpickr-time-separator", ":")), t.timeContainer.appendChild(O);
    }
    return t.config.time_24hr || (t.amPM = se("span", "flatpickr-am-pm", t.l10n.amPM[je((t.latestSelectedDateObj ? t.hourElement.value : t.config.defaultHour) > 11)]), t.amPM.title = t.l10n.toggleTitle, t.amPM.tabIndex = -1, t.timeContainer.appendChild(t.amPM)), t.timeContainer;
  }
  function ki() {
    t.weekdayContainer ? Es(t.weekdayContainer) : t.weekdayContainer = se("div", "flatpickr-weekdays");
    for (var c = t.config.showMonths; c--; ) {
      var g = se("div", "flatpickr-weekdaycontainer");
      t.weekdayContainer.appendChild(g);
    }
    return Ri(), t.weekdayContainer;
  }
  function Ri() {
    if (t.weekdayContainer) {
      var c = t.l10n.firstDayOfWeek, g = ga(t.l10n.weekdays.shorthand);
      c > 0 && c < g.length && (g = ga(g.splice(c, g.length), g.splice(0, c)));
      for (var y = t.config.showMonths; y--; )
        t.weekdayContainer.children[y].innerHTML = `
      <span class='flatpickr-weekday'>
        ` + g.join("</span><span class='flatpickr-weekday'>") + `
      </span>
      `;
    }
  }
  function ls() {
    t.calendarContainer.classList.add("hasWeeks");
    var c = se("div", "flatpickr-weekwrapper");
    c.appendChild(se("span", "flatpickr-weekday", t.l10n.weekAbbreviation));
    var g = se("div", "flatpickr-weeks");
    return c.appendChild(g), {
      weekWrapper: c,
      weekNumbers: g
    };
  }
  function $e(c, g) {
    g === void 0 && (g = !0);
    var y = g ? c : c - t.currentMonth;
    y < 0 && t._hidePrevMonthArrow === !0 || y > 0 && t._hideNextMonthArrow === !0 || (t.currentMonth += y, (t.currentMonth < 0 || t.currentMonth > 11) && (t.currentYear += t.currentMonth > 11 ? 1 : -1, t.currentMonth = (t.currentMonth + 12) % 12, C("onYearChange"), ze()), _(), C("onMonthChange"), K());
  }
  function $t(c, g) {
    if (c === void 0 && (c = !0), g === void 0 && (g = !0), t.input.value = "", t.altInput !== void 0 && (t.altInput.value = ""), t.mobileInput !== void 0 && (t.mobileInput.value = ""), t.selectedDates = [], t.latestSelectedDateObj = void 0, g === !0 && (t.currentYear = t._initialDate.getFullYear(), t.currentMonth = t._initialDate.getMonth()), t.config.enableTime === !0) {
      var y = dn(t.config), R = y.hours, O = y.minutes, P = y.seconds;
      b(R, O, P);
    }
    t.redraw(), c && C("onChange");
  }
  function Yt() {
    t.isOpen = !1, t.isMobile || (t.calendarContainer !== void 0 && t.calendarContainer.classList.remove("open"), t._input !== void 0 && t._input.classList.remove("active")), C("onClose");
  }
  function hs() {
    t.config !== void 0 && C("onDestroy");
    for (var c = t._handlers.length; c--; )
      t._handlers[c].remove();
    if (t._handlers = [], t.mobileInput)
      t.mobileInput.parentNode && t.mobileInput.parentNode.removeChild(t.mobileInput), t.mobileInput = void 0;
    else if (t.calendarContainer && t.calendarContainer.parentNode)
      if (t.config.static && t.calendarContainer.parentNode) {
        var g = t.calendarContainer.parentNode;
        if (g.lastChild && g.removeChild(g.lastChild), g.parentNode) {
          for (; g.firstChild; )
            g.parentNode.insertBefore(g.firstChild, g);
          g.parentNode.removeChild(g);
        }
      } else
        t.calendarContainer.parentNode.removeChild(t.calendarContainer);
    t.altInput && (t.input.type = "text", t.altInput.parentNode && t.altInput.parentNode.removeChild(t.altInput), delete t.altInput), t.input && (t.input.type = t.input._type, t.input.classList.remove("flatpickr-input"), t.input.removeAttribute("readonly")), [
      "_showTimeInput",
      "latestSelectedDateObj",
      "_hideNextMonthArrow",
      "_hidePrevMonthArrow",
      "__hideNextMonthArrow",
      "__hidePrevMonthArrow",
      "isMobile",
      "isOpen",
      "selectedDateElem",
      "minDateHasTime",
      "maxDateHasTime",
      "days",
      "daysContainer",
      "_input",
      "_positionElement",
      "innerContainer",
      "rContainer",
      "monthNav",
      "todayDateElem",
      "calendarContainer",
      "weekdayContainer",
      "prevMonthNav",
      "nextMonthNav",
      "monthsDropdownContainer",
      "currentMonthElement",
      "currentYearElement",
      "navigationCurrentMonth",
      "selectedDateElem",
      "config"
    ].forEach(function(y) {
      try {
        delete t[y];
      } catch {
      }
    });
  }
  function xt(c) {
    return t.calendarContainer.contains(c);
  }
  function xi(c) {
    if (t.isOpen && !t.config.inline) {
      var g = Ie(c), y = xt(g), R = g === t.input || g === t.altInput || t.element.contains(g) || c.path && c.path.indexOf && (~c.path.indexOf(t.input) || ~c.path.indexOf(t.altInput)), O = !R && !y && !xt(c.relatedTarget), P = !t.config.ignoredFocusElements.some(function(G) {
        return G.contains(g);
      });
      O && P && (t.config.allowInput && t.setDate(t._input.value, !1, t.config.altInput ? t.config.altFormat : t.config.dateFormat), t.timeContainer !== void 0 && t.minuteElement !== void 0 && t.hourElement !== void 0 && t.input.value !== "" && t.input.value !== void 0 && l(), t.close(), t.config && t.config.mode === "range" && t.selectedDates.length === 1 && t.clear(!1));
    }
  }
  function qt(c) {
    if (!(!c || t.config.minDate && c < t.config.minDate.getFullYear() || t.config.maxDate && c > t.config.maxDate.getFullYear())) {
      var g = c, y = t.currentYear !== g;
      t.currentYear = g || t.currentYear, t.config.maxDate && t.currentYear === t.config.maxDate.getFullYear() ? t.currentMonth = Math.min(t.config.maxDate.getMonth(), t.currentMonth) : t.config.minDate && t.currentYear === t.config.minDate.getFullYear() && (t.currentMonth = Math.max(t.config.minDate.getMonth(), t.currentMonth)), y && (t.redraw(), C("onYearChange"), ze());
    }
  }
  function Se(c, g) {
    var y;
    g === void 0 && (g = !0);
    var R = t.parseDate(c, void 0, g);
    if (t.config.minDate && R && Ne(R, t.config.minDate, g !== void 0 ? g : !t.minDateHasTime) < 0 || t.config.maxDate && R && Ne(R, t.config.maxDate, g !== void 0 ? g : !t.maxDateHasTime) > 0)
      return !1;
    if (!t.config.enable && t.config.disable.length === 0)
      return !0;
    if (R === void 0)
      return !1;
    for (var O = !!t.config.enable, P = (y = t.config.enable) !== null && y !== void 0 ? y : t.config.disable, G = 0, I = void 0; G < P.length; G++) {
      if (I = P[G], typeof I == "function" && I(R))
        return O;
      if (I instanceof Date && R !== void 0 && I.getTime() === R.getTime())
        return O;
      if (typeof I == "string") {
        var Y = t.parseDate(I, void 0, !0);
        return Y && Y.getTime() === R.getTime() ? O : !O;
      } else if (typeof I == "object" && R !== void 0 && I.from && I.to && R.getTime() >= I.from.getTime() && R.getTime() <= I.to.getTime())
        return O;
    }
    return !O;
  }
  function Ye(c) {
    return t.daysContainer !== void 0 ? c.className.indexOf("hidden") === -1 && c.className.indexOf("flatpickr-disabled") === -1 && t.daysContainer.contains(c) : !1;
  }
  function js(c) {
    var g = c.target === t._input, y = t._input.value.trimEnd() !== ge();
    g && y && !(c.relatedTarget && xt(c.relatedTarget)) && t.setDate(t._input.value, !0, c.target === t.altInput ? t.config.altFormat : t.config.dateFormat);
  }
  function us(c) {
    var g = Ie(c), y = t.config.wrap ? r.contains(g) : g === t._input, R = t.config.allowInput, O = t.isOpen && (!R || !y), P = t.config.inline && y && !R;
    if (c.keyCode === 13 && y) {
      if (R)
        return t.setDate(t._input.value, !0, g === t.altInput ? t.config.altFormat : t.config.dateFormat), t.close(), g.blur();
      t.open();
    } else if (xt(g) || O || P) {
      var G = !!t.timeContainer && t.timeContainer.contains(g);
      switch (c.keyCode) {
        case 13:
          G ? (c.preventDefault(), l(), Fi()) : ce(c);
          break;
        case 27:
          c.preventDefault(), Fi();
          break;
        case 8:
        case 46:
          y && !t.config.allowInput && (c.preventDefault(), t.clear());
          break;
        case 37:
        case 39:
          if (!G && !y) {
            c.preventDefault();
            var I = n();
            if (t.daysContainer !== void 0 && (R === !1 || I && Ye(I))) {
              var Y = c.keyCode === 39 ? 1 : -1;
              c.ctrlKey ? (c.stopPropagation(), $e(Y), ae(B(1), 0)) : ae(void 0, Y);
            }
          } else t.hourElement && t.hourElement.focus();
          break;
        case 38:
        case 40:
          c.preventDefault();
          var A = c.keyCode === 40 ? 1 : -1;
          t.daysContainer && g.$i !== void 0 || g === t.input || g === t.altInput ? c.ctrlKey ? (c.stopPropagation(), qt(t.currentYear - A), ae(B(1), 0)) : G || ae(void 0, A * 7) : g === t.currentYearElement ? qt(t.currentYear - A) : t.config.enableTime && (!G && t.hourElement && t.hourElement.focus(), l(c), t._debouncedChange());
          break;
        case 9:
          if (G) {
            var W = [
              t.hourElement,
              t.minuteElement,
              t.secondElement,
              t.amPM
            ].concat(t.pluginElements).filter(function(_e) {
              return _e;
            }), ue = W.indexOf(g);
            if (ue !== -1) {
              var tt = W[ue + (c.shiftKey ? -1 : 1)];
              c.preventDefault(), (tt || t._input).focus();
            }
          } else !t.config.noCalendar && t.daysContainer && t.daysContainer.contains(g) && c.shiftKey && (c.preventDefault(), t._input.focus());
          break;
      }
    }
    if (t.amPM !== void 0 && g === t.amPM)
      switch (c.key) {
        case t.l10n.amPM[0].charAt(0):
        case t.l10n.amPM[0].charAt(0).toLowerCase():
          t.amPM.textContent = t.l10n.amPM[0], d(), ee();
          break;
        case t.l10n.amPM[1].charAt(0):
        case t.l10n.amPM[1].charAt(0).toLowerCase():
          t.amPM.textContent = t.l10n.amPM[1], d(), ee();
          break;
      }
    (y || xt(g)) && C("onKeyDown", c);
  }
  function et(c, g) {
    if (g === void 0 && (g = "flatpickr-day"), !(t.selectedDates.length !== 1 || c && (!c.classList.contains(g) || c.classList.contains("flatpickr-disabled")))) {
      for (var y = c ? c.dateObj.getTime() : t.days.firstElementChild.dateObj.getTime(), R = t.parseDate(t.selectedDates[0], void 0, !0).getTime(), O = Math.min(y, t.selectedDates[0].getTime()), P = Math.max(y, t.selectedDates[0].getTime()), G = !1, I = 0, Y = 0, A = O; A < P; A += xf.DAY)
        Se(new Date(A), !0) || (G = G || A > O && A < P, A < R && (!I || A > I) ? I = A : A > R && (!Y || A < Y) && (Y = A));
      var W = Array.from(t.rContainer.querySelectorAll("*:nth-child(-n+" + t.config.showMonths + ") > ." + g));
      W.forEach(function(ue) {
        var tt = ue.dateObj, _e = tt.getTime(), zi = I > 0 && _e < I || Y > 0 && _e > Y;
        if (zi) {
          ue.classList.add("notAllowed"), ["inRange", "startRange", "endRange"].forEach(function(Kt) {
            ue.classList.remove(Kt);
          });
          return;
        } else if (G && !zi)
          return;
        ["startRange", "inRange", "endRange", "notAllowed"].forEach(function(Kt) {
          ue.classList.remove(Kt);
        }), c !== void 0 && (c.classList.add(y <= t.selectedDates[0].getTime() ? "startRange" : "endRange"), R < y && _e === R ? ue.classList.add("startRange") : R > y && _e === R && ue.classList.add("endRange"), _e >= I && (Y === 0 || _e <= Y) && kf(_e, R, y) && ue.classList.add("inRange"));
      });
    }
  }
  function Mt() {
    t.isOpen && !t.config.static && !t.config.inline && Jt();
  }
  function Mi(c, g) {
    if (g === void 0 && (g = t._positionElement), t.isMobile === !0) {
      if (c) {
        c.preventDefault();
        var y = Ie(c);
        y && y.blur();
      }
      t.mobileInput !== void 0 && (t.mobileInput.focus(), t.mobileInput.click()), C("onOpen");
      return;
    } else if (t._input.disabled || t.config.inline)
      return;
    var R = t.isOpen;
    t.isOpen = !0, R || (t.calendarContainer.classList.add("open"), t._input.classList.add("active"), C("onOpen"), Jt(g)), t.config.enableTime === !0 && t.config.noCalendar === !0 && t.config.allowInput === !1 && (c === void 0 || !t.timeContainer.contains(c.relatedTarget)) && setTimeout(function() {
      return t.hourElement.select();
    }, 50);
  }
  function Zt(c) {
    return function(g) {
      var y = t.config["_" + c + "Date"] = t.parseDate(g, t.config.dateFormat), R = t.config["_" + (c === "min" ? "max" : "min") + "Date"];
      y !== void 0 && (t[c === "min" ? "minDateHasTime" : "maxDateHasTime"] = y.getHours() > 0 || y.getMinutes() > 0 || y.getSeconds() > 0), t.selectedDates && (t.selectedDates = t.selectedDates.filter(function(O) {
        return Se(O);
      }), !t.selectedDates.length && c === "min" && f(y), ee()), t.daysContainer && (Li(), y !== void 0 ? t.currentYearElement[c] = y.getFullYear().toString() : t.currentYearElement.removeAttribute(c), t.currentYearElement.disabled = !!R && y !== void 0 && R.getFullYear() === y.getFullYear());
    };
  }
  function Us() {
    var c = [
      "wrap",
      "weekNumbers",
      "allowInput",
      "allowInvalidPreload",
      "clickOpens",
      "time_24hr",
      "enableTime",
      "noCalendar",
      "altInput",
      "shorthandCurrentMonth",
      "inline",
      "static",
      "enableSeconds",
      "disableMobile"
    ], g = Re(Re({}, JSON.parse(JSON.stringify(r.dataset || {}))), e), y = {};
    t.config.parseDate = g.parseDate, t.config.formatDate = g.formatDate, Object.defineProperty(t.config, "enable", {
      get: function() {
        return t.config._enable;
      },
      set: function(W) {
        t.config._enable = St(W);
      }
    }), Object.defineProperty(t.config, "disable", {
      get: function() {
        return t.config._disable;
      },
      set: function(W) {
        t.config._disable = St(W);
      }
    });
    var R = g.mode === "time";
    if (!g.dateFormat && (g.enableTime || R)) {
      var O = be.defaultConfig.dateFormat || ui.dateFormat;
      y.dateFormat = g.noCalendar || R ? "H:i" + (g.enableSeconds ? ":S" : "") : O + " H:i" + (g.enableSeconds ? ":S" : "");
    }
    if (g.altInput && (g.enableTime || R) && !g.altFormat) {
      var P = be.defaultConfig.altFormat || ui.altFormat;
      y.altFormat = g.noCalendar || R ? "h:i" + (g.enableSeconds ? ":S K" : " K") : P + (" h:i" + (g.enableSeconds ? ":S" : "") + " K");
    }
    Object.defineProperty(t.config, "minDate", {
      get: function() {
        return t.config._minDate;
      },
      set: Zt("min")
    }), Object.defineProperty(t.config, "maxDate", {
      get: function() {
        return t.config._maxDate;
      },
      set: Zt("max")
    });
    var G = function(W) {
      return function(ue) {
        t.config[W === "min" ? "_minTime" : "_maxTime"] = t.parseDate(ue, "H:i:S");
      };
    };
    Object.defineProperty(t.config, "minTime", {
      get: function() {
        return t.config._minTime;
      },
      set: G("min")
    }), Object.defineProperty(t.config, "maxTime", {
      get: function() {
        return t.config._maxTime;
      },
      set: G("max")
    }), g.mode === "time" && (t.config.noCalendar = !0, t.config.enableTime = !0), Object.assign(t.config, y, g);
    for (var I = 0; I < c.length; I++)
      t.config[c[I]] = t.config[c[I]] === !0 || t.config[c[I]] === "true";
    on.filter(function(W) {
      return t.config[W] !== void 0;
    }).forEach(function(W) {
      t.config[W] = ln(t.config[W] || []).map(a);
    }), t.isMobile = !t.config.disableMobile && !t.config.inline && t.config.mode === "single" && !t.config.disable.length && !t.config.enable && !t.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    for (var I = 0; I < t.config.plugins.length; I++) {
      var Y = t.config.plugins[I](t) || {};
      for (var A in Y)
        on.indexOf(A) > -1 ? t.config[A] = ln(Y[A]).map(a).concat(t.config[A]) : typeof g[A] > "u" && (t.config[A] = Y[A]);
    }
    g.altInputClass || (t.config.altInputClass = Si().className + " " + t.config.altInputClass), C("onParseConfig");
  }
  function Si() {
    return t.config.wrap ? r.querySelector("[data-input]") : r;
  }
  function ds() {
    typeof t.config.locale != "object" && typeof be.l10ns[t.config.locale] > "u" && t.config.errorHandler(new Error("flatpickr: invalid locale " + t.config.locale)), t.l10n = Re(Re({}, be.l10ns.default), typeof t.config.locale == "object" ? t.config.locale : t.config.locale !== "default" ? be.l10ns[t.config.locale] : void 0), zt.D = "(" + t.l10n.weekdays.shorthand.join("|") + ")", zt.l = "(" + t.l10n.weekdays.longhand.join("|") + ")", zt.M = "(" + t.l10n.months.shorthand.join("|") + ")", zt.F = "(" + t.l10n.months.longhand.join("|") + ")", zt.K = "(" + t.l10n.amPM[0] + "|" + t.l10n.amPM[1] + "|" + t.l10n.amPM[0].toLowerCase() + "|" + t.l10n.amPM[1].toLowerCase() + ")";
    var c = Re(Re({}, e), JSON.parse(JSON.stringify(r.dataset || {})));
    c.time_24hr === void 0 && be.defaultConfig.time_24hr === void 0 && (t.config.time_24hr = t.l10n.time_24hr), t.formatDate = Xo(t), t.parseDate = or({ config: t.config, l10n: t.l10n });
  }
  function Jt(c) {
    if (typeof t.config.position == "function")
      return void t.config.position(t, c);
    if (t.calendarContainer !== void 0) {
      C("onPreCalendarPosition");
      var g = c || t._positionElement, y = Array.prototype.reduce.call(t.calendarContainer.children, function(al, ol) {
        return al + ol.offsetHeight;
      }, 0), R = t.calendarContainer.offsetWidth, O = t.config.position.split(" "), P = O[0], G = O.length > 1 ? O[1] : null, I = g.getBoundingClientRect(), Y = window.innerHeight - I.bottom, A = P === "above" || P !== "below" && Y < y && I.top > y, W = window.pageYOffset + I.top + (A ? -y - 2 : g.offsetHeight + 2);
      if (De(t.calendarContainer, "arrowTop", !A), De(t.calendarContainer, "arrowBottom", A), !t.config.inline) {
        var ue = window.pageXOffset + I.left, tt = !1, _e = !1;
        G === "center" ? (ue -= (R - I.width) / 2, tt = !0) : G === "right" && (ue -= R - I.width, _e = !0), De(t.calendarContainer, "arrowLeft", !tt && !_e), De(t.calendarContainer, "arrowCenter", tt), De(t.calendarContainer, "arrowRight", _e);
        var zi = window.document.body.offsetWidth - (window.pageXOffset + I.right), Kt = ue + R > window.document.body.offsetWidth, Qo = zi + R > window.document.body.offsetWidth;
        if (De(t.calendarContainer, "rightMost", Kt), !t.config.static)
          if (t.calendarContainer.style.top = W + "px", !Kt)
            t.calendarContainer.style.left = ue + "px", t.calendarContainer.style.right = "auto";
          else if (!Qo)
            t.calendarContainer.style.left = "auto", t.calendarContainer.style.right = zi + "px";
          else {
            var Ys = Di();
            if (Ys === void 0)
              return;
            var el = window.document.body.offsetWidth, tl = Math.max(0, el / 2 - R / 2), il = ".flatpickr-calendar.centerMost:before", sl = ".flatpickr-calendar.centerMost:after", nl = Ys.cssRules.length, rl = "{left:" + I.left + "px;right:auto;}";
            De(t.calendarContainer, "rightMost", !1), De(t.calendarContainer, "centerMost", !0), Ys.insertRule(il + "," + sl + rl, nl), t.calendarContainer.style.left = tl + "px", t.calendarContainer.style.right = "auto";
          }
      }
    }
  }
  function Di() {
    for (var c = null, g = 0; g < document.styleSheets.length; g++) {
      var y = document.styleSheets[g];
      if (y.cssRules) {
        try {
          y.cssRules;
        } catch {
          continue;
        }
        c = y;
        break;
      }
    }
    return c ?? Gs();
  }
  function Gs() {
    var c = document.createElement("style");
    return document.head.appendChild(c), c.sheet;
  }
  function Li() {
    t.config.noCalendar || t.isMobile || (ze(), K(), _());
  }
  function Fi() {
    t._input.focus(), window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== void 0 ? setTimeout(t.close, 0) : t.close();
  }
  function ce(c) {
    c.preventDefault(), c.stopPropagation();
    var g = function(W) {
      return W.classList && W.classList.contains("flatpickr-day") && !W.classList.contains("flatpickr-disabled") && !W.classList.contains("notAllowed");
    }, y = Ko(Ie(c), g);
    if (y !== void 0) {
      var R = y, O = t.latestSelectedDateObj = new Date(R.dateObj.getTime()), P = (O.getMonth() < t.currentMonth || O.getMonth() > t.currentMonth + t.config.showMonths - 1) && t.config.mode !== "range";
      if (t.selectedDateElem = R, t.config.mode === "single")
        t.selectedDates = [O];
      else if (t.config.mode === "multiple") {
        var G = M(O);
        G ? t.selectedDates.splice(parseInt(G), 1) : t.selectedDates.push(O);
      } else t.config.mode === "range" && (t.selectedDates.length === 2 && t.clear(!1, !1), t.latestSelectedDateObj = O, t.selectedDates.push(O), Ne(O, t.selectedDates[0], !0) !== 0 && t.selectedDates.sort(function(W, ue) {
        return W.getTime() - ue.getTime();
      }));
      if (d(), P) {
        var I = t.currentYear !== O.getFullYear();
        t.currentYear = O.getFullYear(), t.currentMonth = O.getMonth(), I && (C("onYearChange"), ze()), C("onMonthChange");
      }
      if (K(), _(), ee(), !P && t.config.mode !== "range" && t.config.showMonths === 1 ? ne(R) : t.selectedDateElem !== void 0 && t.hourElement === void 0 && t.selectedDateElem && t.selectedDateElem.focus(), t.hourElement !== void 0 && t.hourElement !== void 0 && t.hourElement.focus(), t.config.closeOnSelect) {
        var Y = t.config.mode === "single" && !t.config.enableTime, A = t.config.mode === "range" && t.selectedDates.length === 2 && !t.config.enableTime;
        (Y || A) && Fi();
      }
      S();
    }
  }
  var nt = {
    locale: [ds, Ri],
    showMonths: [rs, o, ki],
    minDate: [z],
    maxDate: [z],
    positionElement: [p],
    clickOpens: [
      function() {
        t.config.clickOpens === !0 ? (E(t._input, "focus", t.open), E(t._input, "click", t.open)) : (t._input.removeEventListener("focus", t.open), t._input.removeEventListener("click", t.open));
      }
    ]
  };
  function cs(c, g) {
    if (c !== null && typeof c == "object") {
      Object.assign(t.config, c);
      for (var y in c)
        nt[y] !== void 0 && nt[y].forEach(function(R) {
          return R();
        });
    } else
      t.config[c] = g, nt[c] !== void 0 ? nt[c].forEach(function(R) {
        return R();
      }) : on.indexOf(c) > -1 && (t.config[c] = ln(g));
    t.redraw(), ee(!0);
  }
  function Oi(c, g) {
    var y = [];
    if (c instanceof Array)
      y = c.map(function(R) {
        return t.parseDate(R, g);
      });
    else if (c instanceof Date || typeof c == "number")
      y = [t.parseDate(c, g)];
    else if (typeof c == "string")
      switch (t.config.mode) {
        case "single":
        case "time":
          y = [t.parseDate(c, g)];
          break;
        case "multiple":
          y = c.split(t.config.conjunction).map(function(R) {
            return t.parseDate(R, g);
          });
          break;
        case "range":
          y = c.split(t.l10n.rangeSeparator).map(function(R) {
            return t.parseDate(R, g);
          });
          break;
      }
    else
      t.config.errorHandler(new Error("Invalid date supplied: " + JSON.stringify(c)));
    t.selectedDates = t.config.allowInvalidPreload ? y : y.filter(function(R) {
      return R instanceof Date && Se(R, !1);
    }), t.config.mode === "range" && t.selectedDates.sort(function(R, O) {
      return R.getTime() - O.getTime();
    });
  }
  function fs(c, g, y) {
    if (g === void 0 && (g = !1), y === void 0 && (y = t.config.dateFormat), c !== 0 && !c || c instanceof Array && c.length === 0)
      return t.clear(g);
    Oi(c, y), t.latestSelectedDateObj = t.selectedDates[t.selectedDates.length - 1], t.redraw(), z(void 0, g), f(), t.selectedDates.length === 0 && t.clear(!1), ee(g), g && C("onChange");
  }
  function St(c) {
    return c.slice().map(function(g) {
      return typeof g == "string" || typeof g == "number" || g instanceof Date ? t.parseDate(g, void 0, !0) : g && typeof g == "object" && g.from && g.to ? {
        from: t.parseDate(g.from, void 0),
        to: t.parseDate(g.to, void 0)
      } : g;
    }).filter(function(g) {
      return g;
    });
  }
  function $s() {
    t.selectedDates = [], t.now = t.parseDate(t.config.now) || /* @__PURE__ */ new Date();
    var c = t.config.defaultDate || ((t.input.nodeName === "INPUT" || t.input.nodeName === "TEXTAREA") && t.input.placeholder && t.input.value === t.input.placeholder ? null : t.input.value);
    c && Oi(c, t.config.dateFormat), t._initialDate = t.selectedDates.length > 0 ? t.selectedDates[0] : t.config.minDate && t.config.minDate.getTime() > t.now.getTime() ? t.config.minDate : t.config.maxDate && t.config.maxDate.getTime() < t.now.getTime() ? t.config.maxDate : t.now, t.currentYear = t._initialDate.getFullYear(), t.currentMonth = t._initialDate.getMonth(), t.selectedDates.length > 0 && (t.latestSelectedDateObj = t.selectedDates[0]), t.config.minTime !== void 0 && (t.config.minTime = t.parseDate(t.config.minTime, "H:i")), t.config.maxTime !== void 0 && (t.config.maxTime = t.parseDate(t.config.maxTime, "H:i")), t.minDateHasTime = !!t.config.minDate && (t.config.minDate.getHours() > 0 || t.config.minDate.getMinutes() > 0 || t.config.minDate.getSeconds() > 0), t.maxDateHasTime = !!t.config.maxDate && (t.config.maxDate.getHours() > 0 || t.config.maxDate.getMinutes() > 0 || t.config.maxDate.getSeconds() > 0);
  }
  function m() {
    if (t.input = Si(), !t.input) {
      t.config.errorHandler(new Error("Invalid input element specified"));
      return;
    }
    t.input._type = t.input.type, t.input.type = "text", t.input.classList.add("flatpickr-input"), t._input = t.input, t.config.altInput && (t.altInput = se(t.input.nodeName, t.config.altInputClass), t._input = t.altInput, t.altInput.placeholder = t.input.placeholder, t.altInput.disabled = t.input.disabled, t.altInput.required = t.input.required, t.altInput.tabIndex = t.input.tabIndex, t.altInput.type = "text", t.input.setAttribute("type", "hidden"), !t.config.static && t.input.parentNode && t.input.parentNode.insertBefore(t.altInput, t.input.nextSibling)), t.config.allowInput || t._input.setAttribute("readonly", "readonly"), p();
  }
  function p() {
    t._positionElement = t.config.positionElement || t._input;
  }
  function w() {
    var c = t.config.enableTime ? t.config.noCalendar ? "time" : "datetime-local" : "date";
    t.mobileInput = se("input", t.input.className + " flatpickr-mobile"), t.mobileInput.tabIndex = 1, t.mobileInput.type = c, t.mobileInput.disabled = t.input.disabled, t.mobileInput.required = t.input.required, t.mobileInput.placeholder = t.input.placeholder, t.mobileFormatStr = c === "datetime-local" ? "Y-m-d\\TH:i:S" : c === "date" ? "Y-m-d" : "H:i:S", t.selectedDates.length > 0 && (t.mobileInput.defaultValue = t.mobileInput.value = t.formatDate(t.selectedDates[0], t.mobileFormatStr)), t.config.minDate && (t.mobileInput.min = t.formatDate(t.config.minDate, "Y-m-d")), t.config.maxDate && (t.mobileInput.max = t.formatDate(t.config.maxDate, "Y-m-d")), t.input.getAttribute("step") && (t.mobileInput.step = String(t.input.getAttribute("step"))), t.input.type = "hidden", t.altInput !== void 0 && (t.altInput.type = "hidden");
    try {
      t.input.parentNode && t.input.parentNode.insertBefore(t.mobileInput, t.input.nextSibling);
    } catch {
    }
    E(t.mobileInput, "change", function(g) {
      t.setDate(Ie(g).value, !1, t.mobileFormatStr), C("onChange"), C("onClose");
    });
  }
  function v(c) {
    if (t.isOpen === !0)
      return t.close();
    t.open(c);
  }
  function C(c, g) {
    if (t.config !== void 0) {
      var y = t.config[c];
      if (y !== void 0 && y.length > 0)
        for (var R = 0; y[R] && R < y.length; R++)
          y[R](t.selectedDates, t.input.value, t, g);
      c === "onChange" && (t.input.dispatchEvent(x("change")), t.input.dispatchEvent(x("input")));
    }
  }
  function x(c) {
    var g = document.createEvent("Event");
    return g.initEvent(c, !0, !0), g;
  }
  function M(c) {
    for (var g = 0; g < t.selectedDates.length; g++) {
      var y = t.selectedDates[g];
      if (y instanceof Date && Ne(y, c) === 0)
        return "" + g;
    }
    return !1;
  }
  function L(c) {
    return t.config.mode !== "range" || t.selectedDates.length < 2 ? !1 : Ne(c, t.selectedDates[0]) >= 0 && Ne(c, t.selectedDates[1]) <= 0;
  }
  function K() {
    t.config.noCalendar || t.isMobile || !t.monthNav || (t.yearElements.forEach(function(c, g) {
      var y = new Date(t.currentYear, t.currentMonth, 1);
      y.setMonth(t.currentMonth + g), t.config.showMonths > 1 || t.config.monthSelectorType === "static" ? t.monthElements[g].textContent = Hs(y.getMonth(), t.config.shorthandCurrentMonth, t.l10n) + " " : t.monthsDropdownContainer.value = y.getMonth().toString(), c.value = y.getFullYear().toString();
    }), t._hidePrevMonthArrow = t.config.minDate !== void 0 && (t.currentYear === t.config.minDate.getFullYear() ? t.currentMonth <= t.config.minDate.getMonth() : t.currentYear < t.config.minDate.getFullYear()), t._hideNextMonthArrow = t.config.maxDate !== void 0 && (t.currentYear === t.config.maxDate.getFullYear() ? t.currentMonth + 1 > t.config.maxDate.getMonth() : t.currentYear > t.config.maxDate.getFullYear()));
  }
  function ge(c) {
    var g = c || (t.config.altInput ? t.config.altFormat : t.config.dateFormat);
    return t.selectedDates.map(function(y) {
      return t.formatDate(y, g);
    }).filter(function(y, R, O) {
      return t.config.mode !== "range" || t.config.enableTime || O.indexOf(y) === R;
    }).join(t.config.mode !== "range" ? t.config.conjunction : t.l10n.rangeSeparator);
  }
  function ee(c) {
    c === void 0 && (c = !0), t.mobileInput !== void 0 && t.mobileFormatStr && (t.mobileInput.value = t.latestSelectedDateObj !== void 0 ? t.formatDate(t.latestSelectedDateObj, t.mobileFormatStr) : ""), t.input.value = ge(t.config.dateFormat), t.altInput !== void 0 && (t.altInput.value = ge(t.config.altFormat)), c !== !1 && C("onValueUpdate");
  }
  function dt(c) {
    var g = Ie(c), y = t.prevMonthNav.contains(g), R = t.nextMonthNav.contains(g);
    y || R ? $e(y ? -1 : 1) : t.yearElements.indexOf(g) >= 0 ? g.select() : g.classList.contains("arrowUp") ? t.changeYear(t.currentYear + 1) : g.classList.contains("arrowDown") && t.changeYear(t.currentYear - 1);
  }
  function yr(c) {
    c.preventDefault();
    var g = c.type === "keydown", y = Ie(c), R = y;
    t.amPM !== void 0 && y === t.amPM && (t.amPM.textContent = t.l10n.amPM[je(t.amPM.textContent === t.l10n.amPM[0])]);
    var O = parseFloat(R.getAttribute("min")), P = parseFloat(R.getAttribute("max")), G = parseFloat(R.getAttribute("step")), I = parseInt(R.value, 10), Y = c.delta || (g ? c.which === 38 ? 1 : -1 : 0), A = I + G * Y;
    if (typeof R.value < "u" && R.value.length === 2) {
      var W = R === t.hourElement, ue = R === t.minuteElement;
      A < O ? (A = P + A + je(!W) + (je(W) && je(!t.amPM)), ue && J(void 0, -1, t.hourElement)) : A > P && (A = R === t.hourElement ? A - P - je(!t.amPM) : O, ue && J(void 0, 1, t.hourElement)), t.amPM && W && (G === 1 ? A + I === 23 : Math.abs(A - I) > G) && (t.amPM.textContent = t.l10n.amPM[je(t.amPM.textContent === t.l10n.amPM[0])]), R.value = Ae(A);
    }
  }
  return s(), t;
}
function di(r, e) {
  for (var t = Array.prototype.slice.call(r).filter(function(a) {
    return a instanceof HTMLElement;
  }), i = [], s = 0; s < t.length; s++) {
    var n = t[s];
    try {
      if (n.getAttribute("data-fp-omit") !== null)
        continue;
      n._flatpickr !== void 0 && (n._flatpickr.destroy(), n._flatpickr = void 0), n._flatpickr = Sf(n, e || {}), i.push(n._flatpickr);
    } catch (a) {
      console.error(a);
    }
  }
  return i.length === 1 ? i[0] : i;
}
typeof HTMLElement < "u" && typeof HTMLCollection < "u" && typeof NodeList < "u" && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(r) {
  return di(this, r);
}, HTMLElement.prototype.flatpickr = function(r) {
  return di([this], r);
});
var be = function(r, e) {
  return typeof r == "string" ? di(window.document.querySelectorAll(r), e) : r instanceof Node ? di([r], e) : di(r, e);
};
be.defaultConfig = {};
be.l10ns = {
  en: Re({}, Ki),
  default: Re({}, Ki)
};
be.localize = function(r) {
  be.l10ns.default = Re(Re({}, be.l10ns.default), r);
};
be.setDefaults = function(r) {
  be.defaultConfig = Re(Re({}, be.defaultConfig), r);
};
be.parseDate = or({});
be.formatDate = Xo({});
be.compareDates = Ne;
typeof jQuery < "u" && typeof jQuery.fn < "u" && (jQuery.fn.flatpickr = function(r) {
  return di(this, r);
});
Date.prototype.fp_incr = function(r) {
  return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof r == "string" ? parseInt(r, 10) : r));
};
typeof window < "u" && (window.flatpickr = be);
const Df = { class: "trades-card" }, Lf = { class: "toast-container" }, Ff = { key: 0 }, Of = ["onClick"], zf = {
  key: 0,
  class: "loading"
}, Hf = {
  key: 1,
  class: "error"
}, Pf = {
  key: 2,
  class: "trades-container"
}, Af = { class: "trades-header" }, _f = { key: 1 }, If = { class: "trades-tools" }, Nf = { class: "trades-count" }, Vf = ["title"], Bf = { class: "columns-content" }, Wf = ["value"], jf = { class: "column-label" }, Uf = { class: "columns-footer" }, Gf = {
  key: 0,
  class: "filters-bar"
}, $f = { class: "filters-tags" }, Yf = ["onClick"], qf = {
  key: 1,
  class: "universal-filter-bar",
  style: { "margin-bottom": "0.5rem", display: "flex", gap: "0.5rem", "align-items": "center" }
}, Zf = ["value"], Jf = {
  key: 3,
  class: "rename-dialog-backdrop"
}, Kf = { class: "rename-dialog" }, Xf = { class: "dialog-actions" }, Qf = /* @__PURE__ */ vl({
  __name: "Trades",
  props: {
    accountId: { default: "1" },
    highlightPnL: { type: Boolean, default: !1 },
    onRowClick: {},
    showHeaderLink: { type: Boolean, default: !1 },
    userId: { default: null },
    window: { default: null }
  },
  emits: ["row-click", "minimize", "maximize"],
  setup(r, { emit: e }) {
    window.luxon = { DateTime: U };
    const t = r, i = e, s = lr("eventBus"), n = ye([]), a = ye([]), o = Ef(t.accountId, t.userId), l = ye(null);
    let h = null;
    const u = ye(!1), d = ye(!1), f = ye([]);
    let b = 0;
    function T(m, p, w) {
      const v = b++;
      f.value.push({ id: v, type: m, title: p, message: w }), setTimeout(() => E(v), 5e3);
    }
    function E(m) {
      const p = f.value.findIndex((w) => w.id === m);
      p !== -1 && f.value.splice(p, 1);
    }
    function S(m) {
      if (!m)
        return "⏱️ Last Updated: Not available";
      try {
        const p = new Date(m), w = Intl.DateTimeFormat().resolvedOptions().timeZone, C = {
          "Asia/Kolkata": "IST",
          "Asia/Calcutta": "IST",
          "America/New_York": p.getMonth() >= 2 && p.getMonth() < 10 ? "EDT" : "EST",
          "America/Los_Angeles": p.getMonth() >= 2 && p.getMonth() < 10 ? "PDT" : "PST",
          "America/Chicago": p.getMonth() >= 2 && p.getMonth() < 10 ? "CDT" : "CST",
          "America/Denver": p.getMonth() >= 2 && p.getMonth() < 10 ? "MDT" : "MST",
          "Europe/London": p.getMonth() >= 2 && p.getMonth() < 9 ? "BST" : "GMT",
          "Europe/Paris": p.getMonth() >= 2 && p.getMonth() < 9 ? "CEST" : "CET",
          "Australia/Sydney": p.getMonth() >= 9 || p.getMonth() < 3 ? "AEDT" : "AEST"
        }[w] || w, x = p.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          timeZone: w
        }), M = p.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: !0,
          timeZone: w
        });
        return `⏱️ Last Updated: ${x} at ${M} ${C}`;
      } catch {
        return `⏱️ Last Updated: ${m}`;
      }
    }
    function k() {
      return [
        {
          label: (m) => {
            const p = m.getData();
            return S(p.fetched_at);
          },
          action: () => {
          },
          disabled: !0
        },
        {
          separator: !0
        },
        {
          label: "📋 Copy timestamp to clipboard",
          action: (m, p) => {
            const v = p.getData().fetched_at;
            v ? navigator.clipboard.writeText(v).then(() => {
              T("success", "Copied!", "Timestamp copied to clipboard");
            }).catch((C) => {
              console.error("Failed to copy:", C), T("error", "Copy Failed", "Could not copy timestamp");
            }) : T("warning", "No Data", "No timestamp available to copy");
          }
        }
      ];
    }
    function z(m) {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      }).format(m);
    }
    function N(m) {
      if (!m) return null;
      const p = String(m).trim(), w = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/.exec(p);
      if (w) {
        let C = Number(w[1]), x = Number(w[2]) - 1, M = Number(w[3]);
        M < 100 && (M += 2e3);
        const L = new Date(M, x, C);
        return isNaN(L.getTime()) ? null : L.getTime();
      }
      const v = new Date(p);
      return isNaN(v.getTime()) ? null : v.getTime();
    }
    function J(m) {
      if (!m) return "";
      const p = N(m);
      if (p)
        return new Date(p).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
      const w = new Date(String(m));
      return isNaN(w.getTime()) ? String(m) : w.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
    }
    function q(m) {
      return new Intl.NumberFormat("en-US").format(m);
    }
    function te(m, p) {
      if (m === "legal_entity") {
        if (ne.value === p) {
          ne.value = null;
          const w = new URL(window.location.href);
          w.searchParams.delete(`${t.window}_all_cts_clientId`), window.history.replaceState({}, "", w.toString()), s && s.emit("account-filter-changed", {
            accountId: null,
            source: "trades"
          });
        } else {
          ne.value = p;
          const w = new URL(window.location.href);
          w.searchParams.set(`${t.window}_all_cts_clientId`, p), window.history.replaceState({}, "", w.toString()), s && s.emit("account-filter-changed", {
            accountId: p,
            source: "trades"
          });
        }
        _();
      } else if (m === "symbol") {
        const w = a.value.indexOf(p);
        w > -1 ? a.value.splice(w, 1) : a.value.push(p);
        const v = new URL(window.location.href);
        a.value.length > 0 ? v.searchParams.set(`${t.window}_all_cts_fi`, a.value.join(",")) : v.searchParams.delete(`${t.window}_all_cts_fi`), window.history.replaceState({}, "", v.toString()), s && s.emit("symbol-filter-changed", {
          symbolTags: a.value,
          source: "trades"
        }), _();
      } else if (m === "assetCategory") {
        if (B.value === p) {
          B.value = null;
          const w = new URL(window.location.href);
          w.searchParams.delete(`${t.window}_all_cts_asset`), window.history.replaceState({}, "", w.toString()), s && s.emit("asset-filter-changed", { asset: null, source: "trades" });
        } else {
          B.value = p;
          const w = new URL(window.location.href);
          w.searchParams.set(`${t.window}_all_cts_asset`, p), window.history.replaceState({}, "", w.toString()), s && s.emit("asset-filter-changed", { asset: p, source: "trades" });
        }
        _();
      } else if (m === "quantity") {
        const w = Number(p);
        if (re.value !== null && Math.abs((re.value || 0) - w) < 1e-9) {
          re.value = null;
          const v = new URL(window.location.href);
          v.searchParams.delete(`${t.window}_all_cts_qty`), window.history.replaceState({}, "", v.toString()), s && s.emit("quantity-filter-changed", { quantity: null, source: "trades" });
        } else {
          re.value = w;
          const v = new URL(window.location.href);
          v.searchParams.set(`${t.window}_all_cts_qty`, String(w)), window.history.replaceState({}, "", v.toString()), s && s.emit("quantity-filter-changed", { quantity: w, source: "trades" });
        }
        _();
      }
    }
    const ne = ye(null), B = ye(null), re = ye(null);
    function ae(m, p) {
      const w = new URL(window.location.href);
      w.searchParams.set(`${t.window}_trades_sort`, `${m}:${p}`), window.history.replaceState({}, "", w.toString());
    }
    function Oe() {
      const p = new URL(window.location.href).searchParams.get(`${t.window}_trades_sort`);
      if (!p) return null;
      const [w, v] = p.split(":");
      return !w || !v ? null : { field: w, dir: v };
    }
    function _() {
      if (!(!h || !u.value))
        try {
          h.clearFilter(!0), h.setFilter((m) => {
            if (!m || ne.value && (typeof m.legal_entity == "object" && m.legal_entity !== null ? m.legal_entity.name || m.legal_entity.id : m.legal_entity) !== ne.value)
              return !1;
            if (B.value) {
              const p = typeof m.assetCategory == "object" && m.assetCategory !== null ? m.assetCategory.name || m.assetCategory.id : m.assetCategory;
              if (String(p) !== B.value) return !1;
            }
            if (re.value !== null) {
              const p = parseFloat((m == null ? void 0 : m.quantity) || 0) || 0, w = parseFloat((m == null ? void 0 : m.multiplier) || 1) || 1, v = p * w;
              if (Math.abs(v - (re.value || 0)) > 1e-6) return !1;
            }
            if (a.value.length > 0) {
              const p = Li(m.symbol || "");
              if (!a.value.every((v) => p.includes(v))) return !1;
            }
            if (ce.value.field && ce.value.value !== "") {
              const p = ce.value.field, w = ce.value.type, v = ce.value.value;
              if (p === "quantity") {
                const C = parseFloat((m == null ? void 0 : m.quantity) || 0) || 0, x = parseFloat((m == null ? void 0 : m.multiplier) || 1) || 1, M = C * x, L = parseFloat(v);
                switch (w) {
                  case "=":
                    if (M !== L) return !1;
                    break;
                  case "!=":
                    if (M === L) return !1;
                    break;
                  case "<":
                    if (!(M < L)) return !1;
                    break;
                  case "<=":
                    if (!(M <= L)) return !1;
                    break;
                  case ">":
                    if (!(M > L)) return !1;
                    break;
                  case ">=":
                    if (!(M >= L)) return !1;
                    break;
                  default:
                    return !1;
                }
              } else if (p === "tradePrice" || p === "tradeMoney" || p === "netCash" || p === "mtmPnl" || p === "fifoPnlRealized" || p === "ibCommission" || p === "closePrice") {
                const C = parseFloat(m[p]), x = parseFloat(v);
                switch (w) {
                  case "=":
                    if (C !== x) return !1;
                    break;
                  case "!=":
                    if (C === x) return !1;
                    break;
                  case "<":
                    if (!(C < x)) return !1;
                    break;
                  case "<=":
                    if (!(C <= x)) return !1;
                    break;
                  case ">":
                    if (!(C > x)) return !1;
                    break;
                  case ">=":
                    if (!(C >= x)) return !1;
                    break;
                  default:
                    return !1;
                }
              } else {
                let C = "";
                if (p === "tradeDate" || p === "settleDateTarget" ? C = J(m[p]) : C = String(m[p] ?? ""), w === "like") {
                  if (!C.toLowerCase().includes(v.toLowerCase())) return !1;
                } else
                  switch (w) {
                    case "=":
                      if (C !== v) return !1;
                      break;
                    case "!=":
                      if (C === v) return !1;
                      break;
                    case "<":
                      if (!(C < v)) return !1;
                      break;
                    case "<=":
                      if (!(C <= v)) return !1;
                      break;
                    case ">":
                      if (!(C > v)) return !1;
                      break;
                    case ">=":
                      if (!(C >= v)) return !1;
                      break;
                    default:
                      return !1;
                  }
              }
            }
            return !0;
          }), ze(), Dt(() => {
            h && h.redraw();
          });
        } catch (m) {
          console.warn("Error in updateFilters:", m);
        }
    }
    function ze() {
      var p;
      const m = [];
      ne.value && m.push({ field: "legal_entity", value: ne.value }), B.value && m.push({ field: "assetCategory", value: B.value }), re.value !== null && m.push({ field: "quantity", value: String(re.value) }), a.value.length > 0 && a.value.forEach((w) => {
        m.push({ field: "symbol", value: w });
      }), n.value = m, h && u.value ? Se.value = h.getDataCount("active") || 0 : Se.value = ((p = o.data.value) == null ? void 0 : p.length) || 0;
    }
    function Gt(m) {
      if (m === "legal_entity") {
        ne.value = null;
        const p = new URL(window.location.href);
        p.searchParams.delete(`${t.window}_all_cts_clientId`), window.history.replaceState({}, "", p.toString()), s && s.emit("account-filter-changed", {
          accountId: null,
          source: "trades"
        });
      } else if (m === "symbol") {
        a.value = [];
        const p = new URL(window.location.href);
        p.searchParams.delete(`${t.window}_all_cts_fi`), window.history.replaceState({}, "", p.toString());
      } else if (m === "assetCategory") {
        B.value = null;
        const p = new URL(window.location.href);
        p.searchParams.delete(`${t.window}_all_cts_asset`), window.history.replaceState({}, "", p.toString()), s && s.emit("asset-filter-changed", { asset: null, source: "trades" });
      } else if (m === "quantity") {
        re.value = null;
        const p = new URL(window.location.href);
        p.searchParams.delete(`${t.window}_all_cts_qty`), window.history.replaceState({}, "", p.toString()), s && s.emit("quantity-filter-changed", { quantity: null, source: "trades" });
      }
      _();
    }
    function rs() {
      ne.value = null, a.value = [], B.value = null, re.value = null;
      const m = new URL(window.location.href);
      m.searchParams.delete(`${t.window}_all_cts_clientId`), m.searchParams.delete(`${t.window}_all_cts_fi`), m.searchParams.delete(`${t.window}_all_cts_asset`), m.searchParams.delete(`${t.window}_all_cts_qty`), window.history.replaceState({}, "", m.toString()), s && (s.emit("account-filter-changed", { accountId: null, source: "trades" }), s.emit("asset-filter-changed", { asset: null, source: "trades" }), s.emit("quantity-filter-changed", { quantity: null, source: "trades" })), _();
    }
    function as() {
      const m = new URL(window.location.href), p = m.searchParams.get(`${t.window}_all_cts_clientId`) || void 0, w = m.searchParams.get(`${t.window}_all_cts_fi`) || void 0, v = w ? w.split(",").filter(Boolean) : void 0, C = m.searchParams.get(`${t.window}_all_cts_asset`) || void 0, x = m.searchParams.get(`${t.window}_all_cts_qty`) || void 0, M = x ? Number(x) : void 0;
      return { legal_entity: p, symbol: v, asset: C, quantity: M };
    }
    function os(m) {
      if (console.log("📍 [Trades] Received account filter:", m), m.source === "trades") return;
      ne.value = m.accountId;
      const p = new URL(window.location.href);
      m.accountId ? p.searchParams.set(`${t.window}_all_cts_clientId`, m.accountId) : p.searchParams.delete(`${t.window}_all_cts_clientId`), window.history.replaceState({}, "", p.toString()), _();
    }
    function ki(m) {
      if (console.log("📍 [Trades] Received symbol filter:", m), m.source === "trades") return;
      a.value = m.symbolTags;
      const p = new URL(window.location.href);
      m.symbolTags.length > 0 ? p.searchParams.set(`${t.window}_all_cts_fi`, m.symbolTags.join(",")) : p.searchParams.delete(`${t.window}_all_cts_fi`), window.history.replaceState({}, "", p.toString()), _();
    }
    function Ri(m) {
      if (m.source === "trades") return;
      B.value = m.asset;
      const p = new URL(window.location.href);
      m.asset ? p.searchParams.set(`${t.window}_all_cts_asset`, m.asset) : p.searchParams.delete(`${t.window}_all_cts_asset`), window.history.replaceState({}, "", p.toString()), _();
    }
    function ls(m) {
      if (m.source === "trades") return;
      re.value = m.quantity;
      const p = new URL(window.location.href);
      m.quantity !== null && m.quantity !== void 0 ? p.searchParams.set(`${t.window}_all_cts_qty`, String(m.quantity)) : p.searchParams.delete(`${t.window}_all_cts_qty`), window.history.replaceState({}, "", p.toString()), _();
    }
    const $e = ye("Trades"), $t = ye(!1), Yt = ye("");
    function hs() {
      return new URL(window.location.href).searchParams.get(`${t.window}_trades_app_name`) || "Trades";
    }
    function xt(m) {
      const p = new URL(window.location.href);
      m && m.trim() && m !== "Trades" ? p.searchParams.set(`${t.window}_trades_app_name`, m.trim()) : p.searchParams.delete(`${t.window}_trades_app_name`), window.history.replaceState({}, "", p.toString());
    }
    function xi() {
      Yt.value = $e.value, $t.value = !0;
    }
    function qt() {
      $e.value = Yt.value.trim() || "Trades", xt($e.value), $t.value = !1;
    }
    wl(async () => {
      $e.value = hs();
      const m = as();
      m.legal_entity && (ne.value = m.legal_entity), m.symbol && (a.value = m.symbol), m.asset && (B.value = m.asset), m.quantity !== void 0 && (re.value = m.quantity), o.isSuccess.value && l.value && !d.value && (await Dt(), Di(), d.value = !0), _(), s && (s.on("account-filter-changed", os), s.on("symbol-filter-changed", ki), s.on("asset-filter-changed", Ri), s.on("quantity-filter-changed", ls));
    }), Er(() => {
      var m;
      if (h)
        try {
          h.destroy();
        } catch (p) {
          console.warn("Error destroying tabulator:", p);
        }
      s && (s.off("account-filter-changed", os), s.off("symbol-filter-changed", ki), s.off("asset-filter-changed", Ri), s.off("quantity-filter-changed", ls)), (m = o._cleanup) == null || m.call(o);
    }), window.addEventListener("popstate", () => {
      $e.value = hs();
      const m = as();
      ne.value = m.legal_entity || null, a.value = m.symbol || [], B.value = m.asset || null, re.value = m.quantity ?? null;
      const p = fs();
      ce.value = p, p.field && p.value !== "" ? nt() : cs();
      const w = Oe();
      h && w && h.setSort(w.field, w.dir), _();
    }), ht(ne, () => {
      h && u.value && _();
    }), ht(a, () => {
      h && u.value && _();
    });
    const Se = ye(0), Ye = [
      { field: "legal_entity", label: "Account" },
      { field: "symbol", label: "Financial Instrument" },
      { field: "buySell", label: "Side" },
      { field: "openCloseIndicator", label: "Open / Close" },
      { field: "assetCategory", label: "Asset Class" },
      { field: "tradeDate", label: "Trade Date" },
      { field: "settleDateTarget", label: "Settlement Date Target" },
      { field: "quantity", label: "Quantity" },
      { field: "tradePrice", label: "Price" },
      { field: "tradeMoney", label: "Total Premium" },
      { field: "netCash", label: "Net Cash" },
      { field: "mtmPnl", label: "MTM PnL" },
      { field: "fifoPnlRealized", label: "FIFO Realized" },
      { field: "ibCommission", label: "Commission" },
      { field: "closePrice", label: "Close Price" }
    ];
    function js() {
      const p = new URL(window.location.href).searchParams.get(`${t.window}_trades_cols`);
      if (!p)
        return Ye.map((x) => x.field);
      const w = p.split("-and-").map((x) => x.trim()).filter(Boolean), v = new Set(Ye.map((x) => x.field)), C = w.filter((x) => v.has(x));
      return C.length ? C : Ye.map((x) => x.field);
    }
    function us(m) {
      const p = new URL(window.location.href);
      p.searchParams.set(`${t.window}_trades_cols`, m.join("-and-")), window.history.replaceState({}, "", p.toString());
    }
    const et = ye(js()), Mt = ye(!1), Mi = ye(null), Zt = ye(null);
    function Us() {
      Mt.value = !Mt.value;
    }
    function Si() {
      Mt.value = !1;
    }
    function ds(m) {
      Mt.value && Zt.value && Mi.value && !Zt.value.contains(m.target) && !Mi.value.contains(m.target) && Si();
    }
    document.addEventListener("click", ds), ht(et, (m) => {
      us(m), Dt(() => {
        Di();
      });
    }, { deep: !0 });
    const Jt = Ea(() => [
      {
        title: "Account",
        field: "legal_entity",
        minWidth: 120,
        frozen: !0,
        sorter: "string",
        headerFilter: "input",
        headerFilterPlaceholder: "Filter",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = typeof p == "object" && p !== null ? p.name || p.id || "" : p || "";
          return String(w).toLowerCase().includes(String(m).toLowerCase());
        },
        formatter: (m) => {
          const p = m.getValue();
          return typeof p == "object" && p !== null ? p.name || p.id || "" : p ? `<span style="font-weight: 500;">${p}</span>` : '<span style="color: #6c757d; font-style: italic;">N/A</span>';
        },
        cellClick: (m, p) => {
          const w = p.getValue(), v = typeof w == "object" && w !== null ? w.name || w.id : w;
          te("legal_entity", v);
        },
        contextMenu: k()
      },
      {
        title: "Financial Instrument",
        field: "symbol",
        minWidth: 120,
        frozen: !0,
        sorter: "string",
        headerFilter: "input",
        headerFilterPlaceholder: "Filter",
        headerFilterFunc: (m, p) => m ? String(p || "").toLowerCase().includes(String(m).toLowerCase()) : !0,
        formatter: (m) => {
          const p = m.getValue();
          if (!p) return '<span style="color: #6c757d; font-style: italic;">N/A</span>';
          const w = Li(p), v = a.value;
          return w.map((C) => (v.includes(C), `<span class="fi-tag" data-tag="${C}">${C}</span>`)).join(" ");
        },
        cellClick: (m, p) => {
          const w = m.target;
          if (w.classList.contains("fi-tag")) {
            const v = w.getAttribute("data-tag");
            v && te("symbol", v);
          }
        },
        contextMenu: k()
      },
      {
        title: "Side",
        field: "buySell",
        minWidth: 80,
        sorter: "string",
        headerFilter: "input",
        headerFilterPlaceholder: "Filter",
        headerFilterFunc: (m, p) => m ? String(p || "").toLowerCase().includes(String(m).toLowerCase()) : !0,
        formatter: (m) => {
          const p = m.getValue();
          return p === "BUY" ? '<span style="color: #28a745; font-weight: bold;">BUY</span>' : p === "SELL" ? '<span style="color: #dc3545; font-weight: bold;">SELL</span>' : p;
        },
        contextMenu: k()
      },
      {
        title: "Open / Close",
        field: "openCloseIndicator",
        minWidth: 100,
        sorter: "string",
        headerFilter: "input",
        headerFilterPlaceholder: "Filter",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = String(m).toLowerCase(), v = String(p ?? "").trim();
          let C = v;
          return v.toUpperCase() === "O" && (C = "OPEN"), v.toUpperCase() === "C" && (C = "CLOSE"), C.toLowerCase().includes(w) || v.toLowerCase().includes(w);
        },
        formatter: (m) => {
          const p = m.getValue();
          return p === "O" ? '<span style="color: #17a2b8; font-weight: bold;">OPEN</span>' : p === "C" ? '<span style="color: #6f42c1; font-weight: bold;">CLOSE</span>' : p;
        },
        contextMenu: k()
      },
      {
        title: "Asset Class",
        field: "assetCategory",
        minWidth: 120,
        sorter: "string",
        headerFilter: "input",
        headerFilterPlaceholder: "Filter",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = typeof p == "object" && p !== null ? p.name || p.id || "" : p || "";
          return String(w).toLowerCase().includes(String(m).toLowerCase());
        },
        cellClick: (m, p) => {
          const w = p.getValue(), v = typeof w == "object" && w !== null ? w.name || w.id : w;
          v && te("assetCategory", v);
        },
        contextMenu: k()
      },
      {
        title: "Trade Date",
        field: "tradeDate",
        minWidth: 120,
        sorter: "date",
        // header filter with min/max date inputs
        headerFilter: function(m, p, w) {
          const v = document.createElement("div");
          v.style.position = "relative";
          const C = document.createElement("input");
          C.type = "text", C.placeholder = "Select date range", C.style.width = "100%", C.style.boxSizing = "border-box", C.style.paddingRight = "28px", v.appendChild(C);
          const x = document.createElement("button");
          x.type = "button", x.innerText = "✕", x.title = "Clear", x.style.position = "absolute", x.style.right = "6px", x.style.top = "50%", x.style.transform = "translateY(-50%)", x.style.border = "none", x.style.background = "transparent", x.style.cursor = "pointer", x.style.fontSize = "12px", x.style.padding = "2px 6px", x.style.display = "none", x.style.color = "#6c757d", x.style.borderRadius = "3px", x.addEventListener("mouseenter", () => x.style.opacity = "1"), x.addEventListener("mouseleave", () => x.style.opacity = "0.9"), v.appendChild(x);
          let M = null;
          function L() {
            !!C.value && C.value.trim() !== "" && v.matches(":hover") ? x.style.display = "block" : x.style.display = "none";
          }
          return v.addEventListener("mouseenter", L), v.addEventListener("mouseleave", L), p(() => {
            try {
              M = be(C, {
                mode: "range",
                dateFormat: "Y-m-d",
                allowInput: !0,
                onChange: (K) => {
                  if (!K || K.length === 0) {
                    w({ min: "", max: "" }), C.value = "", L();
                    return;
                  }
                  const ge = K[0] ? K[0].toISOString().slice(0, 10) : "", ee = K[1] ? K[1].toISOString().slice(0, 10) : "";
                  C.value = ee ? `${ge} to ${ee}` : ge, w({ min: ge || "", max: ee || "" }), L();
                },
                onClose: () => {
                  L();
                }
              });
            } catch {
              C.addEventListener("change", () => {
                const ee = (C.value || "").split(" to ").map((dt) => dt.trim());
                w({ min: ee[0] || "", max: ee[1] || "" }), L();
              });
            }
          }), x.addEventListener("click", (K) => {
            if (K.preventDefault(), K.stopPropagation(), M)
              try {
                M.clear();
              } catch {
              }
            C.value = "", w({ min: "", max: "" }), L();
          }), C.addEventListener("input", L), v;
        },
        headerFilterFunc: (m, p) => {
          if (!m || !m.min && !m.max) return !0;
          const w = N(p);
          if (!w) return !1;
          if (m.min) {
            const v = new Date(m.min).getTime();
            if (isNaN(v) || w < v) return !1;
          }
          if (m.max) {
            const v = new Date(m.max).getTime();
            if (isNaN(v)) return !1;
            const C = v + 24 * 60 * 60 * 1e3 - 1;
            if (w > C) return !1;
          }
          return !0;
        },
        // custom sorter that compares parsed timestamps so dd/mm/yyyy sorts correctly
        sorterFunc: (m, p, w, v, C) => {
          const x = N(v.getData().tradeDate) || 0, M = N(C.getData().tradeDate) || 0;
          return x - M;
        },
        formatter: (m) => {
          const p = m.getValue();
          if (!p) return "";
          const w = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/.exec(String(p).trim());
          let v;
          if (w) {
            const C = Number(w[1]), x = Number(w[2]) - 1;
            let M = Number(w[3]);
            M < 100 && (M += 2e3), v = new Date(M, x, C);
          } else if (v = new Date(p), isNaN(v.getTime())) return String(p);
          return v.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        },
        contextMenu: k()
      },
      {
        title: "Settlement Date Target",
        field: "settleDateTarget",
        minWidth: 140,
        sorter: "date",
        headerFilter: function(m, p, w) {
          const v = document.createElement("div");
          v.style.position = "relative";
          const C = document.createElement("input");
          C.type = "text", C.placeholder = "Select date range", C.style.width = "100%", C.style.boxSizing = "border-box", C.style.paddingRight = "28px", v.appendChild(C);
          const x = document.createElement("button");
          x.type = "button", x.innerText = "✕", x.title = "Clear", x.style.position = "absolute", x.style.right = "6px", x.style.top = "50%", x.style.transform = "translateY(-50%)", x.style.border = "none", x.style.background = "transparent", x.style.cursor = "pointer", x.style.fontSize = "12px", x.style.padding = "2px 6px", x.style.display = "none", x.style.color = "#6c757d", x.style.borderRadius = "3px", x.addEventListener("mouseenter", () => x.style.opacity = "1"), x.addEventListener("mouseleave", () => x.style.opacity = "0.9"), v.appendChild(x);
          let M = null;
          function L() {
            !!C.value && C.value.trim() !== "" && v.matches(":hover") ? x.style.display = "block" : x.style.display = "none";
          }
          return v.addEventListener("mouseenter", L), v.addEventListener("mouseleave", L), p(() => {
            try {
              M = be(C, {
                mode: "range",
                dateFormat: "Y-m-d",
                allowInput: !0,
                onChange: (K) => {
                  if (!K || K.length === 0) {
                    w({ min: "", max: "" }), C.value = "", L();
                    return;
                  }
                  const ge = K[0] ? K[0].toISOString().slice(0, 10) : "", ee = K[1] ? K[1].toISOString().slice(0, 10) : "";
                  C.value = ee ? `${ge} to ${ee}` : ge, w({ min: ge || "", max: ee || "" }), L();
                },
                onClose: () => {
                  L();
                }
              });
            } catch {
              C.addEventListener("change", () => {
                const ee = (C.value || "").split(" to ").map((dt) => dt.trim());
                w({ min: ee[0] || "", max: ee[1] || "" }), L();
              });
            }
          }), x.addEventListener("click", (K) => {
            if (K.preventDefault(), K.stopPropagation(), M)
              try {
                M.clear();
              } catch {
              }
            C.value = "", w({ min: "", max: "" }), L();
          }), C.addEventListener("input", L), v;
        },
        headerFilterFunc: (m, p) => {
          if (!m || !m.min && !m.max) return !0;
          const w = N(p);
          if (!w) return !1;
          if (m.min) {
            const v = new Date(m.min).getTime();
            if (isNaN(v) || w < v) return !1;
          }
          if (m.max) {
            const v = new Date(m.max).getTime();
            if (isNaN(v)) return !1;
            const C = v + 24 * 60 * 60 * 1e3 - 1;
            if (w > C) return !1;
          }
          return !0;
        },
        // custom sorter that compares parsed timestamps so dd/mm/yyyy sorts correctly
        sorterFunc: (m, p, w, v, C) => {
          const x = N(v.getData().tradeDate) || 0, M = N(C.getData().tradeDate) || 0;
          return x - M;
        },
        formatter: (m) => {
          const p = m.getValue();
          if (!p) return "";
          const w = /^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/.exec(String(p).trim());
          let v;
          if (w) {
            const C = Number(w[1]), x = Number(w[2]) - 1;
            let M = Number(w[3]);
            M < 100 && (M += 2e3), v = new Date(M, x, C);
          } else if (v = new Date(p), isNaN(v.getTime())) return String(p);
          return v.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
        },
        contextMenu: k()
      },
      {
        title: "Quantity",
        field: "quantity",
        minWidth: 140,
        hozAlign: "right",
        sorter: "number",
        headerFilter: "input",
        headerFilterPlaceholder: "e.g. >100 or 100",
        headerFilterFunc: (m, p, w) => {
          if (!m) return !0;
          const v = parseFloat((w == null ? void 0 : w.quantity) || 0) || 0, C = parseFloat((w == null ? void 0 : w.multiplier) || 1) || 1, x = v * C, M = String(m).trim(), L = M.match(/^(<=|>=|=|!=|<|>)/);
          let K = "=", ge = M;
          L && (K = L[1], ge = M.slice(K.length).trim());
          const ee = parseFloat(ge);
          if (isNaN(ee)) return !1;
          switch (K) {
            case "=":
              return x === ee;
            case "!=":
              return x !== ee;
            case "<":
              return x < ee;
            case "<=":
              return x <= ee;
            case ">":
              return x > ee;
            case ">=":
              return x >= ee;
            default:
              return !1;
          }
        },
        formatter: (m) => {
          const p = m.getRow().getData(), w = (p == null ? void 0 : p.quantity) ?? "", v = (p == null ? void 0 : p.multiplier) ?? "", C = parseFloat(w) || 0, x = parseFloat(v) || 1, M = C * x;
          return q(M);
        },
        cellClick: (m, p) => {
          const w = p.getRow().getData(), v = parseFloat((w == null ? void 0 : w.quantity) || 0) || 0, C = parseFloat((w == null ? void 0 : w.multiplier) || 1) || 1, x = v * C;
          te("quantity", String(x));
        },
        contextMenu: k()
      },
      {
        title: "Price",
        field: "tradePrice",
        minWidth: 120,
        hozAlign: "right",
        sorter: "number",
        headerFilter: "input",
        headerFilterPlaceholder: "e.g. >10",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = String(m).trim(), v = w.match(/^(<=|>=|=|!=|<|>)/);
          let C = "=", x = w;
          v && (C = v[1], x = w.slice(C.length).trim());
          const M = parseFloat(x);
          if (isNaN(M)) return !1;
          const L = parseFloat(p) || 0;
          switch (C) {
            case "=":
              return L === M;
            case "!=":
              return L !== M;
            case "<":
              return L < M;
            case "<=":
              return L <= M;
            case ">":
              return L > M;
            case ">=":
              return L >= M;
            default:
              return !1;
          }
        },
        formatter: (m) => z(parseFloat(m.getValue()) || 0),
        contextMenu: k()
      },
      {
        title: "Total Premium",
        field: "tradeMoney",
        minWidth: 120,
        hozAlign: "right",
        sorter: "number",
        headerFilter: "input",
        headerFilterPlaceholder: "e.g. >1000",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = String(m).trim(), v = w.match(/^(<=|>=|=|!=|<|>)/);
          let C = "=", x = w;
          v && (C = v[1], x = w.slice(C.length).trim());
          const M = parseFloat(x);
          if (isNaN(M)) return !1;
          const L = parseFloat(p) || 0;
          switch (C) {
            case "=":
              return L === M;
            case "!=":
              return L !== M;
            case "<":
              return L < M;
            case "<=":
              return L <= M;
            case ">":
              return L > M;
            case ">=":
              return L >= M;
            default:
              return !1;
          }
        },
        formatter: (m) => z(parseFloat(m.getValue()) || 0),
        contextMenu: k()
      },
      {
        title: "Net Cash",
        field: "netCash",
        minWidth: 120,
        hozAlign: "right",
        sorter: "number",
        headerFilter: "input",
        headerFilterPlaceholder: "e.g. >0",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = String(m).trim(), v = w.match(/^(<=|>=|=|!=|<|>)/);
          let C = "=", x = w;
          v && (C = v[1], x = w.slice(C.length).trim());
          const M = parseFloat(x);
          if (isNaN(M)) return !1;
          const L = parseFloat(p) || 0;
          switch (C) {
            case "=":
              return L === M;
            case "!=":
              return L !== M;
            case "<":
              return L < M;
            case "<=":
              return L <= M;
            case ">":
              return L > M;
            case ">=":
              return L >= M;
            default:
              return !1;
          }
        },
        formatter: (m) => z(parseFloat(m.getValue()) || 0),
        contextMenu: k()
      },
      {
        title: "MTM PnL",
        field: "mtmPnl",
        minWidth: 80,
        hozAlign: "right",
        sorter: "number",
        headerFilter: "input",
        headerFilterPlaceholder: "Filter",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = String(m).trim(), v = w.match(/^(<=|>=|=|!=|<|>)/);
          let C = "=", x = w;
          v && (C = v[1], x = w.slice(C.length).trim());
          const M = parseFloat(x);
          if (isNaN(M)) return !1;
          const L = parseFloat(p) || 0;
          switch (C) {
            case "=":
              return L === M;
            case "!=":
              return L !== M;
            case "<":
              return L < M;
            case "<=":
              return L <= M;
            case ">":
              return L > M;
            case ">=":
              return L >= M;
            default:
              return !1;
          }
        },
        formatter: (m) => z(parseFloat(m.getValue()) || 0),
        contextMenu: k()
      },
      {
        title: "FIFO Realized",
        field: "fifoPnlRealized",
        minWidth: 80,
        hozAlign: "right",
        sorter: "number",
        headerFilter: "input",
        headerFilterPlaceholder: "Filter",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = String(m).trim(), v = w.match(/^(<=|>=|=|!=|<|>)/);
          let C = "=", x = w;
          v && (C = v[1], x = w.slice(C.length).trim());
          const M = parseFloat(x);
          if (isNaN(M)) return !1;
          const L = parseFloat(p) || 0;
          switch (C) {
            case "=":
              return L === M;
            case "!=":
              return L !== M;
            case "<":
              return L < M;
            case "<=":
              return L <= M;
            case ">":
              return L > M;
            case ">=":
              return L >= M;
            default:
              return !1;
          }
        },
        // ensure Tabulator sees a numeric value (DB stores text)
        mutator: (m) => {
          const p = parseFloat(m);
          return isNaN(p) ? 0 : p;
        },
        formatter: (m) => `<span style="font-weight: 600;">${z(parseFloat(m.getValue()) || 0)}</span>`,
        bottomCalc: "sum",
        bottomCalcFormatter: (m) => z(m.getValue() || 0),
        contextMenu: k()
      },
      {
        title: "Commission",
        field: "ibCommission",
        minWidth: 120,
        hozAlign: "right",
        sorter: "number",
        headerFilter: "input",
        headerFilterPlaceholder: "Filter",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = String(m).trim(), v = w.match(/^(<=|>=|=|!=|<|>)/);
          let C = "=", x = w;
          v && (C = v[1], x = w.slice(C.length).trim());
          const M = parseFloat(x);
          if (isNaN(M)) return !1;
          const L = parseFloat(p) || 0;
          switch (C) {
            case "=":
              return L === M;
            case "!=":
              return L !== M;
            case "<":
              return L < M;
            case "<=":
              return L <= M;
            case ">":
              return L > M;
            case ">=":
              return L >= M;
            default:
              return !1;
          }
        },
        formatter: (m) => `<span style="color: #dc3545; font-weight: 600;">${z(parseFloat(m.getValue()) || 0)}</span>`,
        bottomCalc: "sum",
        bottomCalcFormatter: (m) => z(m.getValue()),
        contextMenu: k()
      },
      {
        title: "Close Price",
        field: "closePrice",
        minWidth: 120,
        hozAlign: "right",
        sorter: "number",
        headerFilter: "input",
        headerFilterPlaceholder: "Filter",
        headerFilterFunc: (m, p) => {
          if (!m) return !0;
          const w = String(m).trim(), v = w.match(/^(<=|>=|=|!=|<|>)/);
          let C = "=", x = w;
          v && (C = v[1], x = w.slice(C.length).trim());
          const M = parseFloat(x);
          if (isNaN(M)) return !1;
          const L = parseFloat(p) || 0;
          switch (C) {
            case "=":
              return L === M;
            case "!=":
              return L !== M;
            case "<":
              return L < M;
            case "<=":
              return L <= M;
            case ">":
              return L > M;
            case ">=":
              return L >= M;
            default:
              return !1;
          }
        },
        formatter: (m) => z(parseFloat(m.getValue()) || 0),
        contextMenu: k()
      }
    ].filter((m) => et.value.includes(m.field)));
    function Di() {
      if (!l.value) return;
      if (h) {
        try {
          h.destroy();
        } catch {
        }
        h = null;
      }
      u.value = !1;
      let m = [];
      const p = Oe();
      p ? m = [{ column: p.field, dir: p.dir }] : m = [{ column: "tradeDate", dir: "desc" }];
      const w = {
        data: o.data.value || [],
        columns: Jt.value,
        layout: "fitColumns",
        placeholder: "No trades available",
        virtualDom: !1,
        rowClick: (v, C) => {
          const x = C.getData();
          i("row-click", x), t.onRowClick && t.onRowClick(x);
        },
        initialSort: m,
        sortChanged: (v) => {
          if (v && v.length > 0)
            ae(v[0].field, v[0].dir);
          else {
            const C = new URL(window.location.href);
            C.searchParams.delete(`${t.window}_trades_sort`), window.history.replaceState({}, "", C.toString());
          }
        }
      };
      try {
        h = new Gc(l.value, w), h.on("tableBuilt", function() {
          var C;
          u.value = !0, _(), h && (Se.value = h.getDataCount("active") || 0);
          const v = (C = l.value) == null ? void 0 : C.querySelectorAll(".tabulator-col");
          v == null || v.forEach((x) => {
            x.addEventListener("click", () => {
              var L;
              const M = (L = h == null ? void 0 : h.getSorters) == null ? void 0 : L.call(h)[0];
              M && ae(M.field, M.dir);
            });
          });
        });
      } catch (v) {
        console.error("Error creating Tabulator:", v);
      }
    }
    ht([() => o.isSuccess.value, l], async ([m, p]) => {
      var w;
      if (m && p && !d.value) {
        await Dt(), Di(), d.value = !0, Se.value = ((w = o.data.value) == null ? void 0 : w.length) || 0;
        const v = fs();
        v.field && v.value !== "" && (ce.value = v, await Dt(), nt());
      }
    }, { immediate: !0 }), ht(() => o.data.value, async (m) => {
      if (!(!h || !m))
        try {
          h.replaceData(m), Dt(() => {
            _(), h && (Se.value = h.getDataCount("active") || 0);
          });
        } catch (p) {
          console.warn("Error updating table data:", p);
        }
    }, { deep: !0 });
    function Gs() {
      i("minimize");
    }
    function Li(m) {
      var ge;
      if (!m) return [];
      const p = String(m).trim(), w = p.match(/^([A-Z]+)\s*/), v = (w == null ? void 0 : w[1]) ?? "", C = p.slice(((ge = w == null ? void 0 : w[0]) == null ? void 0 : ge.length) || 0), x = C.match(/(\d{6})([CP])/);
      let M = "", L = "", K = "";
      if (x) {
        M = Fi(x[1]), L = x[2];
        const dt = C.slice(x[0].length).match(/(\d+)/);
        dt && (K = (parseInt(dt[1], 10) / 1e3).toString());
      }
      return [v, M, K, L].filter(Boolean);
    }
    function Fi(m) {
      if (!m || m.length !== 6) return "";
      const p = m.substring(0, 2), w = m.substring(2, 4), v = m.substring(4, 6);
      return `20${p}-${w}-${v}`;
    }
    const ce = ye({
      field: "",
      type: "=",
      value: ""
    });
    function nt() {
      !h || !u.value || (h.clearFilter(!0), Oi(), _(), Dt(() => {
        h && (Se.value = h.getDataCount("active") || 0);
      }));
    }
    function cs() {
      ce.value = { field: "", type: "=", value: "" }, Oi(), _();
    }
    function Oi() {
      const m = new URL(window.location.href);
      ce.value.field && ce.value.value !== "" ? (m.searchParams.set(`${t.window}_uf_field`, ce.value.field), m.searchParams.set(`${t.window}_uf_type`, ce.value.type), m.searchParams.set(`${t.window}_uf_value`, ce.value.value)) : (m.searchParams.delete(`${t.window}_uf_field`), m.searchParams.delete(`${t.window}_uf_type`), m.searchParams.delete(`${t.window}_uf_value`)), window.history.replaceState({}, "", m.toString());
    }
    function fs() {
      const m = new URL(window.location.href), p = m.searchParams.get(`${t.window}_uf_field`) || "", w = m.searchParams.get(`${t.window}_uf_type`) || "=", v = m.searchParams.get(`${t.window}_uf_value`) || "";
      return { field: p, type: w, value: v };
    }
    const St = ye(
      !!(ce.value.field && ce.value.value)
    );
    function $s() {
      St.value = !St.value;
    }
    return Er(() => {
      var m;
      if (h)
        try {
          h.destroy();
        } catch (p) {
          console.warn("Error destroying tabulator:", p);
        }
      (m = o._cleanup) == null || m.call(o);
    }), (m, p) => {
      const w = yl("router-link");
      return Ce(), Ee("div", Df, [
        V("div", Lf, [
          (Ce(!0), Ee(ms, null, ps(f.value, (v) => (Ce(), Ee("div", {
            key: v.id,
            class: Cl(["toast", `toast-${v.type}`])
          }, [
            V("strong", null, it(v.title), 1),
            v.message ? (Ce(), Ee("span", Ff, it(v.message), 1)) : Lt("", !0),
            V("button", {
              onClick: (C) => E(v.id),
              class: "toast-close"
            }, "×", 8, Of)
          ], 2))), 128))
        ]),
        _i(o).isLoading.value ? (Ce(), Ee("div", zf, [...p[9] || (p[9] = [
          V("div", { class: "loading-spinner" }, null, -1),
          Xt(" Loading trades... ", -1)
        ])])) : _i(o).isError.value ? (Ce(), Ee("div", Hf, [
          p[10] || (p[10] = V("h3", null, "Error loading trades", -1)),
          V("p", null, it(_i(o).error.value), 1)
        ])) : _i(o).isSuccess.value ? (Ce(), Ee("div", Pf, [
          V("div", Af, [
            V("h2", null, [
              r.showHeaderLink ? (Ce(), El(w, {
                key: 0,
                to: "/trades"
              }, {
                default: Tl(() => [
                  Xt(it($e.value), 1)
                ]),
                _: 1
              })) : (Ce(), Ee("span", _f, it($e.value), 1)),
              V("button", {
                class: "appname-rename-btn",
                onClick: xi,
                title: "Rename app",
                style: { width: "auto", padding: "2px 7px", "font-size": "13px", background: "none", border: "none", color: "#888", cursor: "pointer" }
              }, "✎")
            ]),
            V("div", If, [
              V("div", Nf, it(Se.value) + " trades", 1),
              V("button", {
                class: "filter-btn",
                onClick: $s,
                title: St.value ? "Hide Filter" : "Show Filter"
              }, [...p[11] || (p[11] = [
                V("svg", {
                  width: "18",
                  height: "18",
                  viewBox: "0 0 24 24",
                  fill: "none"
                }, [
                  V("path", {
                    d: "M3 5h18M6 10h12M10 15h4",
                    stroke: "#007bff",
                    "stroke-width": "2",
                    "stroke-linecap": "round"
                  })
                ], -1)
              ])], 8, Vf),
              V("button", {
                ref_key: "tradesColumnsBtnRef",
                ref: Mi,
                class: "columns-btn",
                "aria-label": "Column settings",
                onClick: Tr(Us, ["stop"]),
                title: "Column Settings"
              }, [...p[12] || (p[12] = [
                V("svg", {
                  class: "icon",
                  viewBox: "0 0 24 24",
                  width: "18",
                  height: "18",
                  "aria-hidden": "true"
                }, [
                  V("path", {
                    fill: "currentColor",
                    d: "M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.21-.37-.3-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.03-.22-.22-.39-.44-.39h-3.84c-.22 0-.41.16-.44.39l-.36 2.54c-.59.24-1.13.56-1.62.94l-2.39-.96c-.22-.09-.47 0-.59.22l-1.92 3.32c-.12.21-.07.47.12.61l2.03 1.58c.04.31.06.63.06.94s-.02.63-.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.21.37.3.59.22l2.39.96c.5.38 1.03.7 1.62.94l.36 2.54c.03.22.22.39.44.39h3.84c.22 0 .41-.16.44-.39l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.09.47 0 .59-.22l1.92-3.32c.12-.21.07-.47-.12-.61l-2.03-1.58ZM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5Z"
                  })
                ], -1)
              ])], 512),
              V("button", {
                onClick: p[0] || (p[0] = (v) => i("maximize")),
                class: "minimize-button",
                title: "Maximize"
              }, " ⤢ "),
              r.showHeaderLink ? (Ce(), Ee("button", {
                key: 0,
                onClick: Gs,
                class: "minimize-button",
                title: "Close"
              }, " X ")) : Lt("", !0),
              Mt.value ? (Ce(), Ee("div", {
                key: 1,
                ref_key: "tradesColumnsPopupRef",
                ref: Zt,
                class: "columns-dropdown",
                onClick: p[3] || (p[3] = Tr(() => {
                }, ["stop"]))
              }, [
                p[13] || (p[13] = V("div", { class: "columns-header" }, [
                  V("span", { class: "columns-title" }, "Columns")
                ], -1)),
                V("div", Bf, [
                  (Ce(), Ee(ms, null, ps(Ye, (v) => V("label", {
                    key: v.field,
                    class: "column-option"
                  }, [
                    Hi(V("input", {
                      type: "checkbox",
                      value: v.field,
                      "onUpdate:modelValue": p[1] || (p[1] = (C) => et.value = C),
                      class: "column-checkbox"
                    }, null, 8, Wf), [
                      [kl, et.value]
                    ]),
                    V("span", jf, it(v.label), 1)
                  ])), 64))
                ]),
                V("div", Uf, [
                  V("button", {
                    class: "btn-link",
                    onClick: p[2] || (p[2] = (v) => et.value = Ye.map((C) => C.field))
                  }, " Show All "),
                  V("button", {
                    class: "btn-done",
                    onClick: Si
                  }, "Done")
                ])
              ], 512)) : Lt("", !0)
            ])
          ]),
          n.value.length ? (Ce(), Ee("div", Gf, [
            p[14] || (p[14] = V("span", { class: "filters-label" }, "Filtered by:", -1)),
            V("div", $f, [
              (Ce(!0), Ee(ms, null, ps(n.value, (v) => (Ce(), Ee("span", {
                key: `${v.field}-${v.value}`,
                class: "filter-tag"
              }, [
                V("strong", null, it(v.field === "legal_entity" ? "Account" : v.field === "symbol" ? "Symbol" : v.field === "assetCategory" ? "Asset Class" : v.field === "quantity" ? "Quantity" : "Unknown") + ":", 1),
                Xt(" " + it(v.value) + " ", 1),
                V("button", {
                  class: "tag-clear",
                  onClick: (C) => Gt(v.field)
                }, "✕", 8, Yf)
              ]))), 128)),
              V("button", {
                class: "btn-clear-all",
                onClick: rs
              }, "Clear all")
            ])
          ])) : Lt("", !0),
          St.value || ce.value.field && ce.value.value ? (Ce(), Ee("div", qf, [
            V("label", null, [
              p[16] || (p[16] = Xt(" Field: ", -1)),
              Hi(V("select", {
                "onUpdate:modelValue": p[4] || (p[4] = (v) => ce.value.field = v),
                style: { "margin-left": "0.25rem" }
              }, [
                p[15] || (p[15] = V("option", {
                  disabled: "",
                  value: ""
                }, "Select", -1)),
                (Ce(), Ee(ms, null, ps(Ye, (v) => V("option", {
                  key: v.field,
                  value: v.field
                }, it(v.label), 9, Zf)), 64))
              ], 512), [
                [kr, ce.value.field]
              ])
            ]),
            V("label", null, [
              p[18] || (p[18] = Xt(" Type: ", -1)),
              Hi(V("select", {
                "onUpdate:modelValue": p[5] || (p[5] = (v) => ce.value.type = v),
                style: { "margin-left": "0.25rem" }
              }, [...p[17] || (p[17] = [
                Rl('<option value="=" data-v-79b56bfd>=</option><option value="!=" data-v-79b56bfd>≠</option><option value="&lt;" data-v-79b56bfd>&lt;</option><option value="&lt;=" data-v-79b56bfd>&lt;=</option><option value="&gt;" data-v-79b56bfd>&gt;</option><option value="&gt;=" data-v-79b56bfd>&gt;=</option><option value="like" data-v-79b56bfd>contains</option>', 7)
              ])], 512), [
                [kr, ce.value.type]
              ])
            ]),
            V("label", null, [
              p[19] || (p[19] = Xt(" Value: ", -1)),
              Hi(V("input", {
                "onUpdate:modelValue": p[6] || (p[6] = (v) => ce.value.value = v),
                style: { "margin-left": "0.25rem", width: "120px" },
                onKeyup: xl(nt, ["enter"])
              }, null, 544), [
                [Rr, ce.value.value]
              ])
            ]),
            V("button", {
              onClick: nt,
              style: { "margin-left": "0.5rem" }
            }, "Apply Filter"),
            V("button", {
              onClick: cs,
              style: { "margin-left": "0.25rem" }
            }, "Clear")
          ])) : Lt("", !0),
          V("div", {
            ref_key: "tableDiv",
            ref: l,
            class: "trades-grid"
          }, null, 512)
        ])) : Lt("", !0),
        $t.value ? (Ce(), Ee("div", Jf, [
          V("div", Kf, [
            p[20] || (p[20] = V("h3", null, "Rename App", -1)),
            Hi(V("input", {
              "onUpdate:modelValue": p[7] || (p[7] = (v) => Yt.value = v),
              placeholder: "App name"
            }, null, 512), [
              [Rr, Yt.value]
            ]),
            V("div", Xf, [
              V("button", { onClick: qt }, "Save"),
              V("button", {
                onClick: p[8] || (p[8] = (v) => $t.value = !1)
              }, "Cancel")
            ])
          ])
        ])) : Lt("", !0)
      ]);
    };
  }
}), em = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [i, s] of e)
    t[i] = s;
  return t;
}, nm = /* @__PURE__ */ em(Qf, [["__scopeId", "data-v-79b56bfd"]]);
export {
  nm as Trades,
  nm as default
};
