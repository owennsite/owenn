(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        r(i);
    new MutationObserver(i => {
        for (const s of i)
            if (s.type === "childList")
                for (const o of s.addedNodes)
                    o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function n(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function r(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = n(i);
        fetch(i.href, s)
    }
}
)();
var td = {
    exports: {}
}
  , As = {}
  , nd = {
    exports: {}
}
  , U = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ai = Symbol.for("react.element")
  , Wm = Symbol.for("react.portal")
  , Hm = Symbol.for("react.fragment")
  , Km = Symbol.for("react.strict_mode")
  , Gm = Symbol.for("react.profiler")
  , Qm = Symbol.for("react.provider")
  , Xm = Symbol.for("react.context")
  , Ym = Symbol.for("react.forward_ref")
  , bm = Symbol.for("react.suspense")
  , Zm = Symbol.for("react.memo")
  , qm = Symbol.for("react.lazy")
  , Pu = Symbol.iterator;
function Jm(e) {
    return e === null || typeof e != "object" ? null : (e = Pu && e[Pu] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var rd = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , id = Object.assign
  , sd = {};
function or(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = sd,
    this.updater = n || rd
}
or.prototype.isReactComponent = {};
or.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
or.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function od() {}
od.prototype = or.prototype;
function bl(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = sd,
    this.updater = n || rd
}
var Zl = bl.prototype = new od;
Zl.constructor = bl;
id(Zl, or.prototype);
Zl.isPureReactComponent = !0;
var Eu = Array.isArray
  , ld = Object.prototype.hasOwnProperty
  , ql = {
    current: null
}
  , ad = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ud(e, t, n) {
    var r, i = {}, s = null, o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (s = "" + t.key),
        t)
            ld.call(t, r) && !ad.hasOwnProperty(r) && (i[r] = t[r]);
    var l = arguments.length - 2;
    if (l === 1)
        i.children = n;
    else if (1 < l) {
        for (var a = Array(l), u = 0; u < l; u++)
            a[u] = arguments[u + 2];
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in l = e.defaultProps,
        l)
            i[r] === void 0 && (i[r] = l[r]);
    return {
        $$typeof: ai,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: ql.current
    }
}
function e0(e, t) {
    return {
        $$typeof: ai,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Jl(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ai
}
function t0(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var Mu = /\/+/g;
function qs(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? t0("" + e.key) : t.toString(36)
}
function Fi(e, t, n, r, i) {
    var s = typeof e;
    (s === "undefined" || s === "boolean") && (e = null);
    var o = !1;
    if (e === null)
        o = !0;
    else
        switch (s) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case ai:
            case Wm:
                o = !0
            }
        }
    if (o)
        return o = e,
        i = i(o),
        e = r === "" ? "." + qs(o, 0) : r,
        Eu(i) ? (n = "",
        e != null && (n = e.replace(Mu, "$&/") + "/"),
        Fi(i, t, n, "", function(u) {
            return u
        })) : i != null && (Jl(i) && (i = e0(i, n + (!i.key || o && o.key === i.key ? "" : ("" + i.key).replace(Mu, "$&/") + "/") + e)),
        t.push(i)),
        1;
    if (o = 0,
    r = r === "" ? "." : r + ":",
    Eu(e))
        for (var l = 0; l < e.length; l++) {
            s = e[l];
            var a = r + qs(s, l);
            o += Fi(s, t, n, a, i)
        }
    else if (a = Jm(e),
    typeof a == "function")
        for (e = a.call(e),
        l = 0; !(s = e.next()).done; )
            s = s.value,
            a = r + qs(s, l++),
            o += Fi(s, t, n, a, i);
    else if (s === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}
function yi(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , i = 0;
    return Fi(e, r, "", "", function(s) {
        return t.call(n, s, i++)
    }),
    r
}
function n0(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ae = {
    current: null
}
  , Oi = {
    transition: null
}
  , r0 = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: Oi,
    ReactCurrentOwner: ql
};
function cd() {
    throw Error("act(...) is not supported in production builds of React.")
}
U.Children = {
    map: yi,
    forEach: function(e, t, n) {
        yi(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return yi(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return yi(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Jl(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
U.Component = or;
U.Fragment = Hm;
U.Profiler = Gm;
U.PureComponent = bl;
U.StrictMode = Km;
U.Suspense = bm;
U.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = r0;
U.act = cd;
U.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = id({}, e.props)
      , i = e.key
      , s = e.ref
      , o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (s = t.ref,
        o = ql.current),
        t.key !== void 0 && (i = "" + t.key),
        e.type && e.type.defaultProps)
            var l = e.type.defaultProps;
        for (a in t)
            ld.call(t, a) && !ad.hasOwnProperty(a) && (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a])
    }
    var a = arguments.length - 2;
    if (a === 1)
        r.children = n;
    else if (1 < a) {
        l = Array(a);
        for (var u = 0; u < a; u++)
            l[u] = arguments[u + 2];
        r.children = l
    }
    return {
        $$typeof: ai,
        type: e.type,
        key: i,
        ref: s,
        props: r,
        _owner: o
    }
}
;
U.createContext = function(e) {
    return e = {
        $$typeof: Xm,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Qm,
        _context: e
    },
    e.Consumer = e
}
;
U.createElement = ud;
U.createFactory = function(e) {
    var t = ud.bind(null, e);
    return t.type = e,
    t
}
;
U.createRef = function() {
    return {
        current: null
    }
}
;
U.forwardRef = function(e) {
    return {
        $$typeof: Ym,
        render: e
    }
}
;
U.isValidElement = Jl;
U.lazy = function(e) {
    return {
        $$typeof: qm,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: n0
    }
}
;
U.memo = function(e, t) {
    return {
        $$typeof: Zm,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
U.startTransition = function(e) {
    var t = Oi.transition;
    Oi.transition = {};
    try {
        e()
    } finally {
        Oi.transition = t
    }
}
;
U.unstable_act = cd;
U.useCallback = function(e, t) {
    return Ae.current.useCallback(e, t)
}
;
U.useContext = function(e) {
    return Ae.current.useContext(e)
}
;
U.useDebugValue = function() {}
;
U.useDeferredValue = function(e) {
    return Ae.current.useDeferredValue(e)
}
;
U.useEffect = function(e, t) {
    return Ae.current.useEffect(e, t)
}
;
U.useId = function() {
    return Ae.current.useId()
}
;
U.useImperativeHandle = function(e, t, n) {
    return Ae.current.useImperativeHandle(e, t, n)
}
;
U.useInsertionEffect = function(e, t) {
    return Ae.current.useInsertionEffect(e, t)
}
;
U.useLayoutEffect = function(e, t) {
    return Ae.current.useLayoutEffect(e, t)
}
;
U.useMemo = function(e, t) {
    return Ae.current.useMemo(e, t)
}
;
U.useReducer = function(e, t, n) {
    return Ae.current.useReducer(e, t, n)
}
;
U.useRef = function(e) {
    return Ae.current.useRef(e)
}
;
U.useState = function(e) {
    return Ae.current.useState(e)
}
;
U.useSyncExternalStore = function(e, t, n) {
    return Ae.current.useSyncExternalStore(e, t, n)
}
;
U.useTransition = function() {
    return Ae.current.useTransition()
}
;
U.version = "18.3.1";
nd.exports = U;
var S = nd.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i0 = S
  , s0 = Symbol.for("react.element")
  , o0 = Symbol.for("react.fragment")
  , l0 = Object.prototype.hasOwnProperty
  , a0 = i0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , u0 = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function fd(e, t, n) {
    var r, i = {}, s = null, o = null;
    n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
    for (r in t)
        l0.call(t, r) && !u0.hasOwnProperty(r) && (i[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            i[r] === void 0 && (i[r] = t[r]);
    return {
        $$typeof: s0,
        type: e,
        key: s,
        ref: o,
        props: i,
        _owner: a0.current
    }
}
As.Fragment = o0;
As.jsx = fd;
As.jsxs = fd;
td.exports = As;
var g = td.exports
  , dd = {
    exports: {}
}
  , He = {}
  , hd = {
    exports: {}
}
  , pd = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(E, A) {
        var R = E.length;
        E.push(A);
        e: for (; 0 < R; ) {
            var $ = R - 1 >>> 1
              , _ = E[$];
            if (0 < i(_, A))
                E[$] = A,
                E[R] = _,
                R = $;
            else
                break e
        }
    }
    function n(E) {
        return E.length === 0 ? null : E[0]
    }
    function r(E) {
        if (E.length === 0)
            return null;
        var A = E[0]
          , R = E.pop();
        if (R !== A) {
            E[0] = R;
            e: for (var $ = 0, _ = E.length, X = _ >>> 1; $ < X; ) {
                var se = 2 * ($ + 1) - 1
                  , nn = E[se]
                  , gt = se + 1
                  , Cn = E[gt];
                if (0 > i(nn, R))
                    gt < _ && 0 > i(Cn, nn) ? (E[$] = Cn,
                    E[gt] = R,
                    $ = gt) : (E[$] = nn,
                    E[se] = R,
                    $ = se);
                else if (gt < _ && 0 > i(Cn, R))
                    E[$] = Cn,
                    E[gt] = R,
                    $ = gt;
                else
                    break e
            }
        }
        return A
    }
    function i(E, A) {
        var R = E.sortIndex - A.sortIndex;
        return R !== 0 ? R : E.id - A.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var s = performance;
        e.unstable_now = function() {
            return s.now()
        }
    } else {
        var o = Date
          , l = o.now();
        e.unstable_now = function() {
            return o.now() - l
        }
    }
    var a = []
      , u = []
      , c = 1
      , f = null
      , d = 3
      , y = !1
      , v = !1
      , x = !1
      , T = typeof setTimeout == "function" ? setTimeout : null
      , p = typeof clearTimeout == "function" ? clearTimeout : null
      , h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function m(E) {
        for (var A = n(u); A !== null; ) {
            if (A.callback === null)
                r(u);
            else if (A.startTime <= E)
                r(u),
                A.sortIndex = A.expirationTime,
                t(a, A);
            else
                break;
            A = n(u)
        }
    }
    function w(E) {
        if (x = !1,
        m(E),
        !v)
            if (n(a) !== null)
                v = !0,
                J(k);
            else {
                var A = n(u);
                A !== null && z(w, A.startTime - E)
            }
    }
    function k(E, A) {
        v = !1,
        x && (x = !1,
        p(C),
        C = -1),
        y = !0;
        var R = d;
        try {
            for (m(A),
            f = n(a); f !== null && (!(f.expirationTime > A) || E && !H()); ) {
                var $ = f.callback;
                if (typeof $ == "function") {
                    f.callback = null,
                    d = f.priorityLevel;
                    var _ = $(f.expirationTime <= A);
                    A = e.unstable_now(),
                    typeof _ == "function" ? f.callback = _ : f === n(a) && r(a),
                    m(A)
                } else
                    r(a);
                f = n(a)
            }
            if (f !== null)
                var X = !0;
            else {
                var se = n(u);
                se !== null && z(w, se.startTime - A),
                X = !1
            }
            return X
        } finally {
            f = null,
            d = R,
            y = !1
        }
    }
    var P = !1
      , N = null
      , C = -1
      , I = 5
      , V = -1;
    function H() {
        return !(e.unstable_now() - V < I)
    }
    function fe() {
        if (N !== null) {
            var E = e.unstable_now();
            V = E;
            var A = !0;
            try {
                A = N(!0, E)
            } finally {
                A ? O() : (P = !1,
                N = null)
            }
        } else
            P = !1
    }
    var O;
    if (typeof h == "function")
        O = function() {
            h(fe)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var L = new MessageChannel
          , j = L.port2;
        L.port1.onmessage = fe,
        O = function() {
            j.postMessage(null)
        }
    } else
        O = function() {
            T(fe, 0)
        }
        ;
    function J(E) {
        N = E,
        P || (P = !0,
        O())
    }
    function z(E, A) {
        C = T(function() {
            E(e.unstable_now())
        }, A)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(E) {
        E.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        v || y || (v = !0,
        J(k))
    }
    ,
    e.unstable_forceFrameRate = function(E) {
        0 > E || 125 < E ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < E ? Math.floor(1e3 / E) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return d
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(a)
    }
    ,
    e.unstable_next = function(E) {
        switch (d) {
        case 1:
        case 2:
        case 3:
            var A = 3;
            break;
        default:
            A = d
        }
        var R = d;
        d = A;
        try {
            return E()
        } finally {
            d = R
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(E, A) {
        switch (E) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            E = 3
        }
        var R = d;
        d = E;
        try {
            return A()
        } finally {
            d = R
        }
    }
    ,
    e.unstable_scheduleCallback = function(E, A, R) {
        var $ = e.unstable_now();
        switch (typeof R == "object" && R !== null ? (R = R.delay,
        R = typeof R == "number" && 0 < R ? $ + R : $) : R = $,
        E) {
        case 1:
            var _ = -1;
            break;
        case 2:
            _ = 250;
            break;
        case 5:
            _ = 1073741823;
            break;
        case 4:
            _ = 1e4;
            break;
        default:
            _ = 5e3
        }
        return _ = R + _,
        E = {
            id: c++,
            callback: A,
            priorityLevel: E,
            startTime: R,
            expirationTime: _,
            sortIndex: -1
        },
        R > $ ? (E.sortIndex = R,
        t(u, E),
        n(a) === null && E === n(u) && (x ? (p(C),
        C = -1) : x = !0,
        z(w, R - $))) : (E.sortIndex = _,
        t(a, E),
        v || y || (v = !0,
        J(k))),
        E
    }
    ,
    e.unstable_shouldYield = H,
    e.unstable_wrapCallback = function(E) {
        var A = d;
        return function() {
            var R = d;
            d = A;
            try {
                return E.apply(this, arguments)
            } finally {
                d = R
            }
        }
    }
}
)(pd);
hd.exports = pd;
var c0 = hd.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f0 = S
  , $e = c0;
function M(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var md = new Set
  , Br = {};
function Sn(e, t) {
    bn(e, t),
    bn(e + "Capture", t)
}
function bn(e, t) {
    for (Br[e] = t,
    e = 0; e < t.length; e++)
        md.add(t[e])
}
var Ct = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Uo = Object.prototype.hasOwnProperty
  , d0 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Nu = {}
  , ju = {};
function h0(e) {
    return Uo.call(ju, e) ? !0 : Uo.call(Nu, e) ? !1 : d0.test(e) ? ju[e] = !0 : (Nu[e] = !0,
    !1)
}
function p0(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function m0(e, t, n, r) {
    if (t === null || typeof t > "u" || p0(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function De(e, t, n, r, i, s, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = i,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = s,
    this.removeEmptyString = o
}
var we = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    we[e] = new De(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    we[t] = new De(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    we[e] = new De(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    we[e] = new De(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    we[e] = new De(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    we[e] = new De(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    we[e] = new De(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    we[e] = new De(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    we[e] = new De(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var ea = /[\-:]([a-z])/g;
function ta(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ea, ta);
    we[t] = new De(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ea, ta);
    we[t] = new De(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ea, ta);
    we[t] = new De(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    we[e] = new De(e,1,!1,e.toLowerCase(),null,!1,!1)
});
we.xlinkHref = new De("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    we[e] = new De(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function na(e, t, n, r) {
    var i = we.hasOwnProperty(t) ? we[t] : null;
    (i !== null ? i.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (m0(t, n, i, r) && (n = null),
    r || i === null ? h0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (t = i.attributeName,
    r = i.attributeNamespace,
    n === null ? e.removeAttribute(t) : (i = i.type,
    n = i === 3 || i === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var jt = f0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , vi = Symbol.for("react.element")
  , Mn = Symbol.for("react.portal")
  , Nn = Symbol.for("react.fragment")
  , ra = Symbol.for("react.strict_mode")
  , $o = Symbol.for("react.profiler")
  , gd = Symbol.for("react.provider")
  , yd = Symbol.for("react.context")
  , ia = Symbol.for("react.forward_ref")
  , Wo = Symbol.for("react.suspense")
  , Ho = Symbol.for("react.suspense_list")
  , sa = Symbol.for("react.memo")
  , Vt = Symbol.for("react.lazy")
  , vd = Symbol.for("react.offscreen")
  , Au = Symbol.iterator;
function fr(e) {
    return e === null || typeof e != "object" ? null : (e = Au && e[Au] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var ie = Object.assign, Js;
function wr(e) {
    if (Js === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            Js = t && t[1] || ""
        }
    return `
` + Js + e
}
var eo = !1;
function to(e, t) {
    if (!e || eo)
        return "";
    eo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var i = u.stack.split(`
`), s = r.stack.split(`
`), o = i.length - 1, l = s.length - 1; 1 <= o && 0 <= l && i[o] !== s[l]; )
                l--;
            for (; 1 <= o && 0 <= l; o--,
            l--)
                if (i[o] !== s[l]) {
                    if (o !== 1 || l !== 1)
                        do
                            if (o--,
                            l--,
                            0 > l || i[o] !== s[l]) {
                                var a = `
` + i[o].replace(" at new ", " at ");
                                return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)),
                                a
                            }
                        while (1 <= o && 0 <= l);
                    break
                }
        }
    } finally {
        eo = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? wr(e) : ""
}
function g0(e) {
    switch (e.tag) {
    case 5:
        return wr(e.type);
    case 16:
        return wr("Lazy");
    case 13:
        return wr("Suspense");
    case 19:
        return wr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = to(e.type, !1),
        e;
    case 11:
        return e = to(e.type.render, !1),
        e;
    case 1:
        return e = to(e.type, !0),
        e;
    default:
        return ""
    }
}
function Ko(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Nn:
        return "Fragment";
    case Mn:
        return "Portal";
    case $o:
        return "Profiler";
    case ra:
        return "StrictMode";
    case Wo:
        return "Suspense";
    case Ho:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case yd:
            return (e.displayName || "Context") + ".Consumer";
        case gd:
            return (e._context.displayName || "Context") + ".Provider";
        case ia:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case sa:
            return t = e.displayName || null,
            t !== null ? t : Ko(e.type) || "Memo";
        case Vt:
            t = e._payload,
            e = e._init;
            try {
                return Ko(e(t))
            } catch {}
        }
    return null
}
function y0(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Ko(t);
    case 8:
        return t === ra ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function Xt(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function xd(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function v0(e) {
    var t = xd(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var i = n.get
          , s = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return i.call(this)
            },
            set: function(o) {
                r = "" + o,
                s.call(this, o)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function xi(e) {
    e._valueTracker || (e._valueTracker = v0(e))
}
function wd(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = xd(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Ji(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Go(e, t) {
    var n = t.checked;
    return ie({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function Du(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = Xt(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function Sd(e, t) {
    t = t.checked,
    t != null && na(e, "checked", t, !1)
}
function Qo(e, t) {
    Sd(e, t);
    var n = Xt(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Xo(e, t.type, n) : t.hasOwnProperty("defaultValue") && Xo(e, t.type, Xt(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function Lu(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Xo(e, t, n) {
    (t !== "number" || Ji(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Sr = Array.isArray;
function Hn(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var i = 0; i < n.length; i++)
            t["$" + n[i]] = !0;
        for (n = 0; n < e.length; n++)
            i = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== i && (e[n].selected = i),
            i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Xt(n),
        t = null,
        i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                e[i].selected = !0,
                r && (e[i].defaultSelected = !0);
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Yo(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(M(91));
    return ie({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function Ru(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(M(92));
            if (Sr(n)) {
                if (1 < n.length)
                    throw Error(M(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: Xt(n)
    }
}
function kd(e, t) {
    var n = Xt(t.value)
      , r = Xt(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function Vu(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function Td(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function bo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Td(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var wi, Cd = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, i) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, i)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (wi = wi || document.createElement("div"),
        wi.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = wi.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function Ur(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Mr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , x0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Mr).forEach(function(e) {
    x0.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Mr[t] = Mr[e]
    })
});
function Pd(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Mr.hasOwnProperty(e) && Mr[e] ? ("" + t).trim() : t + "px"
}
function Ed(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , i = Pd(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, i) : e[n] = i
        }
}
var w0 = ie({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Zo(e, t) {
    if (t) {
        if (w0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(M(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(M(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(M(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(M(62))
    }
}
function qo(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Jo = null;
function oa(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var el = null
  , Kn = null
  , Gn = null;
function _u(e) {
    if (e = fi(e)) {
        if (typeof el != "function")
            throw Error(M(280));
        var t = e.stateNode;
        t && (t = _s(t),
        el(e.stateNode, e.type, t))
    }
}
function Md(e) {
    Kn ? Gn ? Gn.push(e) : Gn = [e] : Kn = e
}
function Nd() {
    if (Kn) {
        var e = Kn
          , t = Gn;
        if (Gn = Kn = null,
        _u(e),
        t)
            for (e = 0; e < t.length; e++)
                _u(t[e])
    }
}
function jd(e, t) {
    return e(t)
}
function Ad() {}
var no = !1;
function Dd(e, t, n) {
    if (no)
        return e(t, n);
    no = !0;
    try {
        return jd(e, t, n)
    } finally {
        no = !1,
        (Kn !== null || Gn !== null) && (Ad(),
        Nd())
    }
}
function $r(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = _s(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(M(231, t, typeof n));
    return n
}
var tl = !1;
if (Ct)
    try {
        var dr = {};
        Object.defineProperty(dr, "passive", {
            get: function() {
                tl = !0
            }
        }),
        window.addEventListener("test", dr, dr),
        window.removeEventListener("test", dr, dr)
    } catch {
        tl = !1
    }
function S0(e, t, n, r, i, s, o, l, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var Nr = !1
  , es = null
  , ts = !1
  , nl = null
  , k0 = {
    onError: function(e) {
        Nr = !0,
        es = e
    }
};
function T0(e, t, n, r, i, s, o, l, a) {
    Nr = !1,
    es = null,
    S0.apply(k0, arguments)
}
function C0(e, t, n, r, i, s, o, l, a) {
    if (T0.apply(this, arguments),
    Nr) {
        if (Nr) {
            var u = es;
            Nr = !1,
            es = null
        } else
            throw Error(M(198));
        ts || (ts = !0,
        nl = u)
    }
}
function kn(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Ld(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function zu(e) {
    if (kn(e) !== e)
        throw Error(M(188))
}
function P0(e) {
    var t = e.alternate;
    if (!t) {
        if (t = kn(e),
        t === null)
            throw Error(M(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return;
        if (i === null)
            break;
        var s = i.alternate;
        if (s === null) {
            if (r = i.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (i.child === s.child) {
            for (s = i.child; s; ) {
                if (s === n)
                    return zu(i),
                    e;
                if (s === r)
                    return zu(i),
                    t;
                s = s.sibling
            }
            throw Error(M(188))
        }
        if (n.return !== r.return)
            n = i,
            r = s;
        else {
            for (var o = !1, l = i.child; l; ) {
                if (l === n) {
                    o = !0,
                    n = i,
                    r = s;
                    break
                }
                if (l === r) {
                    o = !0,
                    r = i,
                    n = s;
                    break
                }
                l = l.sibling
            }
            if (!o) {
                for (l = s.child; l; ) {
                    if (l === n) {
                        o = !0,
                        n = s,
                        r = i;
                        break
                    }
                    if (l === r) {
                        o = !0,
                        r = s,
                        n = i;
                        break
                    }
                    l = l.sibling
                }
                if (!o)
                    throw Error(M(189))
            }
        }
        if (n.alternate !== r)
            throw Error(M(190))
    }
    if (n.tag !== 3)
        throw Error(M(188));
    return n.stateNode.current === n ? e : t
}
function Rd(e) {
    return e = P0(e),
    e !== null ? Vd(e) : null
}
function Vd(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = Vd(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var _d = $e.unstable_scheduleCallback
  , Iu = $e.unstable_cancelCallback
  , E0 = $e.unstable_shouldYield
  , M0 = $e.unstable_requestPaint
  , ce = $e.unstable_now
  , N0 = $e.unstable_getCurrentPriorityLevel
  , la = $e.unstable_ImmediatePriority
  , zd = $e.unstable_UserBlockingPriority
  , ns = $e.unstable_NormalPriority
  , j0 = $e.unstable_LowPriority
  , Id = $e.unstable_IdlePriority
  , Ds = null
  , dt = null;
function A0(e) {
    if (dt && typeof dt.onCommitFiberRoot == "function")
        try {
            dt.onCommitFiberRoot(Ds, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var st = Math.clz32 ? Math.clz32 : R0
  , D0 = Math.log
  , L0 = Math.LN2;
function R0(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (D0(e) / L0 | 0) | 0
}
var Si = 64
  , ki = 4194304;
function kr(e) {
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
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function rs(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , i = e.suspendedLanes
      , s = e.pingedLanes
      , o = n & 268435455;
    if (o !== 0) {
        var l = o & ~i;
        l !== 0 ? r = kr(l) : (s &= o,
        s !== 0 && (r = kr(s)))
    } else
        o = n & ~i,
        o !== 0 ? r = kr(o) : s !== 0 && (r = kr(s));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & i) && (i = r & -r,
    s = t & -t,
    i >= s || i === 16 && (s & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - st(t),
            i = 1 << n,
            r |= e[n],
            t &= ~i;
    return r
}
function V0(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function _0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, s = e.pendingLanes; 0 < s; ) {
        var o = 31 - st(s)
          , l = 1 << o
          , a = i[o];
        a === -1 ? (!(l & n) || l & r) && (i[o] = V0(l, t)) : a <= t && (e.expiredLanes |= l),
        s &= ~l
    }
}
function rl(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Fd() {
    var e = Si;
    return Si <<= 1,
    !(Si & 4194240) && (Si = 64),
    e
}
function ro(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function ui(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - st(t),
    e[t] = n
}
function z0(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - st(n)
          , s = 1 << i;
        t[i] = 0,
        r[i] = -1,
        e[i] = -1,
        n &= ~s
    }
}
function aa(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - st(n)
          , i = 1 << r;
        i & t | e[r] & t && (e[r] |= t),
        n &= ~i
    }
}
var Q = 0;
function Od(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Bd, ua, Ud, $d, Wd, il = !1, Ti = [], Bt = null, Ut = null, $t = null, Wr = new Map, Hr = new Map, zt = [], I0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Fu(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        Bt = null;
        break;
    case "dragenter":
    case "dragleave":
        Ut = null;
        break;
    case "mouseover":
    case "mouseout":
        $t = null;
        break;
    case "pointerover":
    case "pointerout":
        Wr.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Hr.delete(t.pointerId)
    }
}
function hr(e, t, n, r, i, s) {
    return e === null || e.nativeEvent !== s ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i]
    },
    t !== null && (t = fi(t),
    t !== null && ua(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    i !== null && t.indexOf(i) === -1 && t.push(i),
    e)
}
function F0(e, t, n, r, i) {
    switch (t) {
    case "focusin":
        return Bt = hr(Bt, e, t, n, r, i),
        !0;
    case "dragenter":
        return Ut = hr(Ut, e, t, n, r, i),
        !0;
    case "mouseover":
        return $t = hr($t, e, t, n, r, i),
        !0;
    case "pointerover":
        var s = i.pointerId;
        return Wr.set(s, hr(Wr.get(s) || null, e, t, n, r, i)),
        !0;
    case "gotpointercapture":
        return s = i.pointerId,
        Hr.set(s, hr(Hr.get(s) || null, e, t, n, r, i)),
        !0
    }
    return !1
}
function Hd(e) {
    var t = un(e.target);
    if (t !== null) {
        var n = kn(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Ld(n),
                t !== null) {
                    e.blockedOn = t,
                    Wd(e.priority, function() {
                        Ud(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Bi(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = sl(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Jo = r,
            n.target.dispatchEvent(r),
            Jo = null
        } else
            return t = fi(n),
            t !== null && ua(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function Ou(e, t, n) {
    Bi(e) && n.delete(t)
}
function O0() {
    il = !1,
    Bt !== null && Bi(Bt) && (Bt = null),
    Ut !== null && Bi(Ut) && (Ut = null),
    $t !== null && Bi($t) && ($t = null),
    Wr.forEach(Ou),
    Hr.forEach(Ou)
}
function pr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    il || (il = !0,
    $e.unstable_scheduleCallback($e.unstable_NormalPriority, O0)))
}
function Kr(e) {
    function t(i) {
        return pr(i, e)
    }
    if (0 < Ti.length) {
        pr(Ti[0], e);
        for (var n = 1; n < Ti.length; n++) {
            var r = Ti[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Bt !== null && pr(Bt, e),
    Ut !== null && pr(Ut, e),
    $t !== null && pr($t, e),
    Wr.forEach(t),
    Hr.forEach(t),
    n = 0; n < zt.length; n++)
        r = zt[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < zt.length && (n = zt[0],
    n.blockedOn === null); )
        Hd(n),
        n.blockedOn === null && zt.shift()
}
var Qn = jt.ReactCurrentBatchConfig
  , is = !0;
function B0(e, t, n, r) {
    var i = Q
      , s = Qn.transition;
    Qn.transition = null;
    try {
        Q = 1,
        ca(e, t, n, r)
    } finally {
        Q = i,
        Qn.transition = s
    }
}
function U0(e, t, n, r) {
    var i = Q
      , s = Qn.transition;
    Qn.transition = null;
    try {
        Q = 4,
        ca(e, t, n, r)
    } finally {
        Q = i,
        Qn.transition = s
    }
}
function ca(e, t, n, r) {
    if (is) {
        var i = sl(e, t, n, r);
        if (i === null)
            po(e, t, r, ss, n),
            Fu(e, r);
        else if (F0(i, e, t, n, r))
            r.stopPropagation();
        else if (Fu(e, r),
        t & 4 && -1 < I0.indexOf(e)) {
            for (; i !== null; ) {
                var s = fi(i);
                if (s !== null && Bd(s),
                s = sl(e, t, n, r),
                s === null && po(e, t, r, ss, n),
                s === i)
                    break;
                i = s
            }
            i !== null && r.stopPropagation()
        } else
            po(e, t, r, null, n)
    }
}
var ss = null;
function sl(e, t, n, r) {
    if (ss = null,
    e = oa(r),
    e = un(e),
    e !== null)
        if (t = kn(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Ld(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return ss = e,
    null
}
function Kd(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (N0()) {
        case la:
            return 1;
        case zd:
            return 4;
        case ns:
        case j0:
            return 16;
        case Id:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var Ft = null
  , fa = null
  , Ui = null;
function Gd() {
    if (Ui)
        return Ui;
    var e, t = fa, n = t.length, r, i = "value"in Ft ? Ft.value : Ft.textContent, s = i.length;
    for (e = 0; e < n && t[e] === i[e]; e++)
        ;
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === i[s - r]; r++)
        ;
    return Ui = i.slice(e, 1 < r ? 1 - r : void 0)
}
function $i(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Ci() {
    return !0
}
function Bu() {
    return !1
}
function Ke(e) {
    function t(n, r, i, s, o) {
        this._reactName = n,
        this._targetInst = i,
        this.type = r,
        this.nativeEvent = s,
        this.target = o,
        this.currentTarget = null;
        for (var l in e)
            e.hasOwnProperty(l) && (n = e[l],
            this[l] = n ? n(s) : s[l]);
        return this.isDefaultPrevented = (s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1) ? Ci : Bu,
        this.isPropagationStopped = Bu,
        this
    }
    return ie(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Ci)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Ci)
        },
        persist: function() {},
        isPersistent: Ci
    }),
    t
}
var lr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, da = Ke(lr), ci = ie({}, lr, {
    view: 0,
    detail: 0
}), $0 = Ke(ci), io, so, mr, Ls = ie({}, ci, {
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
    getModifierState: ha,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== mr && (mr && e.type === "mousemove" ? (io = e.screenX - mr.screenX,
        so = e.screenY - mr.screenY) : so = io = 0,
        mr = e),
        io)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : so
    }
}), Uu = Ke(Ls), W0 = ie({}, Ls, {
    dataTransfer: 0
}), H0 = Ke(W0), K0 = ie({}, ci, {
    relatedTarget: 0
}), oo = Ke(K0), G0 = ie({}, lr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Q0 = Ke(G0), X0 = ie({}, lr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Y0 = Ke(X0), b0 = ie({}, lr, {
    data: 0
}), $u = Ke(b0), Z0 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, q0 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, J0 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function eg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = J0[e]) ? !!t[e] : !1
}
function ha() {
    return eg
}
var tg = ie({}, ci, {
    key: function(e) {
        if (e.key) {
            var t = Z0[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = $i(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? q0[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ha,
    charCode: function(e) {
        return e.type === "keypress" ? $i(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? $i(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , ng = Ke(tg)
  , rg = ie({}, Ls, {
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
})
  , Wu = Ke(rg)
  , ig = ie({}, ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ha
})
  , sg = Ke(ig)
  , og = ie({}, lr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , lg = Ke(og)
  , ag = ie({}, Ls, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , ug = Ke(ag)
  , cg = [9, 13, 27, 32]
  , pa = Ct && "CompositionEvent"in window
  , jr = null;
Ct && "documentMode"in document && (jr = document.documentMode);
var fg = Ct && "TextEvent"in window && !jr
  , Qd = Ct && (!pa || jr && 8 < jr && 11 >= jr)
  , Hu = " "
  , Ku = !1;
function Xd(e, t) {
    switch (e) {
    case "keyup":
        return cg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Yd(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var jn = !1;
function dg(e, t) {
    switch (e) {
    case "compositionend":
        return Yd(t);
    case "keypress":
        return t.which !== 32 ? null : (Ku = !0,
        Hu);
    case "textInput":
        return e = t.data,
        e === Hu && Ku ? null : e;
    default:
        return null
    }
}
function hg(e, t) {
    if (jn)
        return e === "compositionend" || !pa && Xd(e, t) ? (e = Gd(),
        Ui = fa = Ft = null,
        jn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return Qd && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var pg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Gu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!pg[e.type] : t === "textarea"
}
function bd(e, t, n, r) {
    Md(r),
    t = os(t, "onChange"),
    0 < t.length && (n = new da("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var Ar = null
  , Gr = null;
function mg(e) {
    lh(e, 0)
}
function Rs(e) {
    var t = Ln(e);
    if (wd(t))
        return e
}
function gg(e, t) {
    if (e === "change")
        return t
}
var Zd = !1;
if (Ct) {
    var lo;
    if (Ct) {
        var ao = "oninput"in document;
        if (!ao) {
            var Qu = document.createElement("div");
            Qu.setAttribute("oninput", "return;"),
            ao = typeof Qu.oninput == "function"
        }
        lo = ao
    } else
        lo = !1;
    Zd = lo && (!document.documentMode || 9 < document.documentMode)
}
function Xu() {
    Ar && (Ar.detachEvent("onpropertychange", qd),
    Gr = Ar = null)
}
function qd(e) {
    if (e.propertyName === "value" && Rs(Gr)) {
        var t = [];
        bd(t, Gr, e, oa(e)),
        Dd(mg, t)
    }
}
function yg(e, t, n) {
    e === "focusin" ? (Xu(),
    Ar = t,
    Gr = n,
    Ar.attachEvent("onpropertychange", qd)) : e === "focusout" && Xu()
}
function vg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return Rs(Gr)
}
function xg(e, t) {
    if (e === "click")
        return Rs(t)
}
function wg(e, t) {
    if (e === "input" || e === "change")
        return Rs(t)
}
function Sg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var lt = typeof Object.is == "function" ? Object.is : Sg;
function Qr(e, t) {
    if (lt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var i = n[r];
        if (!Uo.call(t, i) || !lt(e[i], t[i]))
            return !1
    }
    return !0
}
function Yu(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function bu(e, t) {
    var n = Yu(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Yu(n)
    }
}
function Jd(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Jd(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function eh() {
    for (var e = window, t = Ji(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Ji(e.document)
    }
    return t
}
function ma(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function kg(e) {
    var t = eh()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Jd(n.ownerDocument.documentElement, n)) {
        if (r !== null && ma(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var i = n.textContent.length
                  , s = Math.min(r.start, i);
                r = r.end === void 0 ? s : Math.min(r.end, i),
                !e.extend && s > r && (i = r,
                r = s,
                s = i),
                i = bu(n, s);
                var o = bu(n, r);
                i && o && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(),
                t.setStart(i.node, i.offset),
                e.removeAllRanges(),
                s > r ? (e.addRange(t),
                e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Tg = Ct && "documentMode"in document && 11 >= document.documentMode
  , An = null
  , ol = null
  , Dr = null
  , ll = !1;
function Zu(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ll || An == null || An !== Ji(r) || (r = An,
    "selectionStart"in r && ma(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    Dr && Qr(Dr, r) || (Dr = r,
    r = os(ol, "onSelect"),
    0 < r.length && (t = new da("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = An)))
}
function Pi(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var Dn = {
    animationend: Pi("Animation", "AnimationEnd"),
    animationiteration: Pi("Animation", "AnimationIteration"),
    animationstart: Pi("Animation", "AnimationStart"),
    transitionend: Pi("Transition", "TransitionEnd")
}
  , uo = {}
  , th = {};
Ct && (th = document.createElement("div").style,
"AnimationEvent"in window || (delete Dn.animationend.animation,
delete Dn.animationiteration.animation,
delete Dn.animationstart.animation),
"TransitionEvent"in window || delete Dn.transitionend.transition);
function Vs(e) {
    if (uo[e])
        return uo[e];
    if (!Dn[e])
        return e;
    var t = Dn[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in th)
            return uo[e] = t[n];
    return e
}
var nh = Vs("animationend")
  , rh = Vs("animationiteration")
  , ih = Vs("animationstart")
  , sh = Vs("transitionend")
  , oh = new Map
  , qu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function qt(e, t) {
    oh.set(e, t),
    Sn(t, [e])
}
for (var co = 0; co < qu.length; co++) {
    var fo = qu[co]
      , Cg = fo.toLowerCase()
      , Pg = fo[0].toUpperCase() + fo.slice(1);
    qt(Cg, "on" + Pg)
}
qt(nh, "onAnimationEnd");
qt(rh, "onAnimationIteration");
qt(ih, "onAnimationStart");
qt("dblclick", "onDoubleClick");
qt("focusin", "onFocus");
qt("focusout", "onBlur");
qt(sh, "onTransitionEnd");
bn("onMouseEnter", ["mouseout", "mouseover"]);
bn("onMouseLeave", ["mouseout", "mouseover"]);
bn("onPointerEnter", ["pointerout", "pointerover"]);
bn("onPointerLeave", ["pointerout", "pointerover"]);
Sn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Sn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Sn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Sn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Sn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , Eg = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tr));
function Ju(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    C0(r, t, void 0, e),
    e.currentTarget = null
}
function lh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , i = r.event;
        r = r.listeners;
        e: {
            var s = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var l = r[o]
                      , a = l.instance
                      , u = l.currentTarget;
                    if (l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    Ju(i, l, u),
                    s = a
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (l = r[o],
                    a = l.instance,
                    u = l.currentTarget,
                    l = l.listener,
                    a !== s && i.isPropagationStopped())
                        break e;
                    Ju(i, l, u),
                    s = a
                }
        }
    }
    if (ts)
        throw e = nl,
        ts = !1,
        nl = null,
        e
}
function b(e, t) {
    var n = t[dl];
    n === void 0 && (n = t[dl] = new Set);
    var r = e + "__bubble";
    n.has(r) || (ah(t, e, 2, !1),
    n.add(r))
}
function ho(e, t, n) {
    var r = 0;
    t && (r |= 4),
    ah(n, e, r, t)
}
var Ei = "_reactListening" + Math.random().toString(36).slice(2);
function Xr(e) {
    if (!e[Ei]) {
        e[Ei] = !0,
        md.forEach(function(n) {
            n !== "selectionchange" && (Eg.has(n) || ho(n, !1, e),
            ho(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ei] || (t[Ei] = !0,
        ho("selectionchange", !1, t))
    }
}
function ah(e, t, n, r) {
    switch (Kd(t)) {
    case 1:
        var i = B0;
        break;
    case 4:
        i = U0;
        break;
    default:
        i = ca
    }
    n = i.bind(null, t, n, e),
    i = void 0,
    !tl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (i = !0),
    r ? i !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: i
    }) : e.addEventListener(t, n, !0) : i !== void 0 ? e.addEventListener(t, n, {
        passive: i
    }) : e.addEventListener(t, n, !1)
}
function po(e, t, n, r, i) {
    var s = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var o = r.tag;
            if (o === 3 || o === 4) {
                var l = r.stateNode.containerInfo;
                if (l === i || l.nodeType === 8 && l.parentNode === i)
                    break;
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var a = o.tag;
                        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo,
                        a === i || a.nodeType === 8 && a.parentNode === i))
                            return;
                        o = o.return
                    }
                for (; l !== null; ) {
                    if (o = un(l),
                    o === null)
                        return;
                    if (a = o.tag,
                    a === 5 || a === 6) {
                        r = s = o;
                        continue e
                    }
                    l = l.parentNode
                }
            }
            r = r.return
        }
    Dd(function() {
        var u = s
          , c = oa(n)
          , f = [];
        e: {
            var d = oh.get(e);
            if (d !== void 0) {
                var y = da
                  , v = e;
                switch (e) {
                case "keypress":
                    if ($i(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = ng;
                    break;
                case "focusin":
                    v = "focus",
                    y = oo;
                    break;
                case "focusout":
                    v = "blur",
                    y = oo;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = oo;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = Uu;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = H0;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = sg;
                    break;
                case nh:
                case rh:
                case ih:
                    y = Q0;
                    break;
                case sh:
                    y = lg;
                    break;
                case "scroll":
                    y = $0;
                    break;
                case "wheel":
                    y = ug;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = Y0;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Wu
                }
                var x = (t & 4) !== 0
                  , T = !x && e === "scroll"
                  , p = x ? d !== null ? d + "Capture" : null : d;
                x = [];
                for (var h = u, m; h !== null; ) {
                    m = h;
                    var w = m.stateNode;
                    if (m.tag === 5 && w !== null && (m = w,
                    p !== null && (w = $r(h, p),
                    w != null && x.push(Yr(h, w, m)))),
                    T)
                        break;
                    h = h.return
                }
                0 < x.length && (d = new y(d,v,null,n,c),
                f.push({
                    event: d,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (d = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                d && n !== Jo && (v = n.relatedTarget || n.fromElement) && (un(v) || v[Pt]))
                    break e;
                if ((y || d) && (d = c.window === c ? c : (d = c.ownerDocument) ? d.defaultView || d.parentWindow : window,
                y ? (v = n.relatedTarget || n.toElement,
                y = u,
                v = v ? un(v) : null,
                v !== null && (T = kn(v),
                v !== T || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null,
                v = u),
                y !== v)) {
                    if (x = Uu,
                    w = "onMouseLeave",
                    p = "onMouseEnter",
                    h = "mouse",
                    (e === "pointerout" || e === "pointerover") && (x = Wu,
                    w = "onPointerLeave",
                    p = "onPointerEnter",
                    h = "pointer"),
                    T = y == null ? d : Ln(y),
                    m = v == null ? d : Ln(v),
                    d = new x(w,h + "leave",y,n,c),
                    d.target = T,
                    d.relatedTarget = m,
                    w = null,
                    un(c) === u && (x = new x(p,h + "enter",v,n,c),
                    x.target = m,
                    x.relatedTarget = T,
                    w = x),
                    T = w,
                    y && v)
                        t: {
                            for (x = y,
                            p = v,
                            h = 0,
                            m = x; m; m = Pn(m))
                                h++;
                            for (m = 0,
                            w = p; w; w = Pn(w))
                                m++;
                            for (; 0 < h - m; )
                                x = Pn(x),
                                h--;
                            for (; 0 < m - h; )
                                p = Pn(p),
                                m--;
                            for (; h--; ) {
                                if (x === p || p !== null && x === p.alternate)
                                    break t;
                                x = Pn(x),
                                p = Pn(p)
                            }
                            x = null
                        }
                    else
                        x = null;
                    y !== null && ec(f, d, y, x, !1),
                    v !== null && T !== null && ec(f, T, v, x, !0)
                }
            }
            e: {
                if (d = u ? Ln(u) : window,
                y = d.nodeName && d.nodeName.toLowerCase(),
                y === "select" || y === "input" && d.type === "file")
                    var k = gg;
                else if (Gu(d))
                    if (Zd)
                        k = wg;
                    else {
                        k = vg;
                        var P = yg
                    }
                else
                    (y = d.nodeName) && y.toLowerCase() === "input" && (d.type === "checkbox" || d.type === "radio") && (k = xg);
                if (k && (k = k(e, u))) {
                    bd(f, k, n, c);
                    break e
                }
                P && P(e, d, u),
                e === "focusout" && (P = d._wrapperState) && P.controlled && d.type === "number" && Xo(d, "number", d.value)
            }
            switch (P = u ? Ln(u) : window,
            e) {
            case "focusin":
                (Gu(P) || P.contentEditable === "true") && (An = P,
                ol = u,
                Dr = null);
                break;
            case "focusout":
                Dr = ol = An = null;
                break;
            case "mousedown":
                ll = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                ll = !1,
                Zu(f, n, c);
                break;
            case "selectionchange":
                if (Tg)
                    break;
            case "keydown":
            case "keyup":
                Zu(f, n, c)
            }
            var N;
            if (pa)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                    }
                    C = void 0
                }
            else
                jn ? Xd(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");
            C && (Qd && n.locale !== "ko" && (jn || C !== "onCompositionStart" ? C === "onCompositionEnd" && jn && (N = Gd()) : (Ft = c,
            fa = "value"in Ft ? Ft.value : Ft.textContent,
            jn = !0)),
            P = os(u, C),
            0 < P.length && (C = new $u(C,e,null,n,c),
            f.push({
                event: C,
                listeners: P
            }),
            N ? C.data = N : (N = Yd(n),
            N !== null && (C.data = N)))),
            (N = fg ? dg(e, n) : hg(e, n)) && (u = os(u, "onBeforeInput"),
            0 < u.length && (c = new $u("onBeforeInput","beforeinput",null,n,c),
            f.push({
                event: c,
                listeners: u
            }),
            c.data = N))
        }
        lh(f, t)
    })
}
function Yr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function os(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var i = e
          , s = i.stateNode;
        i.tag === 5 && s !== null && (i = s,
        s = $r(e, n),
        s != null && r.unshift(Yr(e, s, i)),
        s = $r(e, t),
        s != null && r.push(Yr(e, s, i))),
        e = e.return
    }
    return r
}
function Pn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function ec(e, t, n, r, i) {
    for (var s = t._reactName, o = []; n !== null && n !== r; ) {
        var l = n
          , a = l.alternate
          , u = l.stateNode;
        if (a !== null && a === r)
            break;
        l.tag === 5 && u !== null && (l = u,
        i ? (a = $r(n, s),
        a != null && o.unshift(Yr(n, a, l))) : i || (a = $r(n, s),
        a != null && o.push(Yr(n, a, l)))),
        n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var Mg = /\r\n?/g
  , Ng = /\u0000|\uFFFD/g;
function tc(e) {
    return (typeof e == "string" ? e : "" + e).replace(Mg, `
`).replace(Ng, "")
}
function Mi(e, t, n) {
    if (t = tc(t),
    tc(e) !== t && n)
        throw Error(M(425))
}
function ls() {}
var al = null
  , ul = null;
function cl(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var fl = typeof setTimeout == "function" ? setTimeout : void 0
  , jg = typeof clearTimeout == "function" ? clearTimeout : void 0
  , nc = typeof Promise == "function" ? Promise : void 0
  , Ag = typeof queueMicrotask == "function" ? queueMicrotask : typeof nc < "u" ? function(e) {
    return nc.resolve(null).then(e).catch(Dg)
}
: fl;
function Dg(e) {
    setTimeout(function() {
        throw e
    })
}
function mo(e, t) {
    var n = t
      , r = 0;
    do {
        var i = n.nextSibling;
        if (e.removeChild(n),
        i && i.nodeType === 8)
            if (n = i.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(i),
                    Kr(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = i
    } while (n);
    Kr(t)
}
function Wt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function rc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var ar = Math.random().toString(36).slice(2)
  , ft = "__reactFiber$" + ar
  , br = "__reactProps$" + ar
  , Pt = "__reactContainer$" + ar
  , dl = "__reactEvents$" + ar
  , Lg = "__reactListeners$" + ar
  , Rg = "__reactHandles$" + ar;
function un(e) {
    var t = e[ft];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[Pt] || n[ft]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = rc(e); e !== null; ) {
                    if (n = e[ft])
                        return n;
                    e = rc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function fi(e) {
    return e = e[ft] || e[Pt],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function Ln(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(M(33))
}
function _s(e) {
    return e[br] || null
}
var hl = []
  , Rn = -1;
function Jt(e) {
    return {
        current: e
    }
}
function Z(e) {
    0 > Rn || (e.current = hl[Rn],
    hl[Rn] = null,
    Rn--)
}
function Y(e, t) {
    Rn++,
    hl[Rn] = e.current,
    e.current = t
}
var Yt = {}
  , Me = Jt(Yt)
  , Ve = Jt(!1)
  , gn = Yt;
function Zn(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return Yt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var i = {}, s;
    for (s in n)
        i[s] = t[s];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = i),
    i
}
function _e(e) {
    return e = e.childContextTypes,
    e != null
}
function as() {
    Z(Ve),
    Z(Me)
}
function ic(e, t, n) {
    if (Me.current !== Yt)
        throw Error(M(168));
    Y(Me, t),
    Y(Ve, n)
}
function uh(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var i in r)
        if (!(i in t))
            throw Error(M(108, y0(e) || "Unknown", i));
    return ie({}, n, r)
}
function us(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Yt,
    gn = Me.current,
    Y(Me, e),
    Y(Ve, Ve.current),
    !0
}
function sc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(M(169));
    n ? (e = uh(e, t, gn),
    r.__reactInternalMemoizedMergedChildContext = e,
    Z(Ve),
    Z(Me),
    Y(Me, e)) : Z(Ve),
    Y(Ve, n)
}
var vt = null
  , zs = !1
  , go = !1;
function ch(e) {
    vt === null ? vt = [e] : vt.push(e)
}
function Vg(e) {
    zs = !0,
    ch(e)
}
function en() {
    if (!go && vt !== null) {
        go = !0;
        var e = 0
          , t = Q;
        try {
            var n = vt;
            for (Q = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            vt = null,
            zs = !1
        } catch (i) {
            throw vt !== null && (vt = vt.slice(e + 1)),
            _d(la, en),
            i
        } finally {
            Q = t,
            go = !1
        }
    }
    return null
}
var Vn = []
  , _n = 0
  , cs = null
  , fs = 0
  , Xe = []
  , Ye = 0
  , yn = null
  , xt = 1
  , wt = "";
function sn(e, t) {
    Vn[_n++] = fs,
    Vn[_n++] = cs,
    cs = e,
    fs = t
}
function fh(e, t, n) {
    Xe[Ye++] = xt,
    Xe[Ye++] = wt,
    Xe[Ye++] = yn,
    yn = e;
    var r = xt;
    e = wt;
    var i = 32 - st(r) - 1;
    r &= ~(1 << i),
    n += 1;
    var s = 32 - st(t) + i;
    if (30 < s) {
        var o = i - i % 5;
        s = (r & (1 << o) - 1).toString(32),
        r >>= o,
        i -= o,
        xt = 1 << 32 - st(t) + i | n << i | r,
        wt = s + e
    } else
        xt = 1 << s | n << i | r,
        wt = e
}
function ga(e) {
    e.return !== null && (sn(e, 1),
    fh(e, 1, 0))
}
function ya(e) {
    for (; e === cs; )
        cs = Vn[--_n],
        Vn[_n] = null,
        fs = Vn[--_n],
        Vn[_n] = null;
    for (; e === yn; )
        yn = Xe[--Ye],
        Xe[Ye] = null,
        wt = Xe[--Ye],
        Xe[Ye] = null,
        xt = Xe[--Ye],
        Xe[Ye] = null
}
var Be = null
  , Oe = null
  , ee = !1
  , it = null;
function dh(e, t) {
    var n = be(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function oc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Be = e,
        Oe = Wt(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Be = e,
        Oe = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = yn !== null ? {
            id: xt,
            overflow: wt
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = be(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Be = e,
        Oe = null,
        !0) : !1;
    default:
        return !1
    }
}
function pl(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ml(e) {
    if (ee) {
        var t = Oe;
        if (t) {
            var n = t;
            if (!oc(e, t)) {
                if (pl(e))
                    throw Error(M(418));
                t = Wt(n.nextSibling);
                var r = Be;
                t && oc(e, t) ? dh(r, n) : (e.flags = e.flags & -4097 | 2,
                ee = !1,
                Be = e)
            }
        } else {
            if (pl(e))
                throw Error(M(418));
            e.flags = e.flags & -4097 | 2,
            ee = !1,
            Be = e
        }
    }
}
function lc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Be = e
}
function Ni(e) {
    if (e !== Be)
        return !1;
    if (!ee)
        return lc(e),
        ee = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !cl(e.type, e.memoizedProps)),
    t && (t = Oe)) {
        if (pl(e))
            throw hh(),
            Error(M(418));
        for (; t; )
            dh(e, t),
            t = Wt(t.nextSibling)
    }
    if (lc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(M(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Oe = Wt(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Oe = null
        }
    } else
        Oe = Be ? Wt(e.stateNode.nextSibling) : null;
    return !0
}
function hh() {
    for (var e = Oe; e; )
        e = Wt(e.nextSibling)
}
function qn() {
    Oe = Be = null,
    ee = !1
}
function va(e) {
    it === null ? it = [e] : it.push(e)
}
var _g = jt.ReactCurrentBatchConfig;
function gr(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(M(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(M(147, e));
            var i = r
              , s = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === s ? t.ref : (t = function(o) {
                var l = i.refs;
                o === null ? delete l[s] : l[s] = o
            }
            ,
            t._stringRef = s,
            t)
        }
        if (typeof e != "string")
            throw Error(M(284));
        if (!n._owner)
            throw Error(M(290, e))
    }
    return e
}
function ji(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(M(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function ac(e) {
    var t = e._init;
    return t(e._payload)
}
function ph(e) {
    function t(p, h) {
        if (e) {
            var m = p.deletions;
            m === null ? (p.deletions = [h],
            p.flags |= 16) : m.push(h)
        }
    }
    function n(p, h) {
        if (!e)
            return null;
        for (; h !== null; )
            t(p, h),
            h = h.sibling;
        return null
    }
    function r(p, h) {
        for (p = new Map; h !== null; )
            h.key !== null ? p.set(h.key, h) : p.set(h.index, h),
            h = h.sibling;
        return p
    }
    function i(p, h) {
        return p = Qt(p, h),
        p.index = 0,
        p.sibling = null,
        p
    }
    function s(p, h, m) {
        return p.index = m,
        e ? (m = p.alternate,
        m !== null ? (m = m.index,
        m < h ? (p.flags |= 2,
        h) : m) : (p.flags |= 2,
        h)) : (p.flags |= 1048576,
        h)
    }
    function o(p) {
        return e && p.alternate === null && (p.flags |= 2),
        p
    }
    function l(p, h, m, w) {
        return h === null || h.tag !== 6 ? (h = To(m, p.mode, w),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function a(p, h, m, w) {
        var k = m.type;
        return k === Nn ? c(p, h, m.props.children, w, m.key) : h !== null && (h.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Vt && ac(k) === h.type) ? (w = i(h, m.props),
        w.ref = gr(p, h, m),
        w.return = p,
        w) : (w = Yi(m.type, m.key, m.props, null, p.mode, w),
        w.ref = gr(p, h, m),
        w.return = p,
        w)
    }
    function u(p, h, m, w) {
        return h === null || h.tag !== 4 || h.stateNode.containerInfo !== m.containerInfo || h.stateNode.implementation !== m.implementation ? (h = Co(m, p.mode, w),
        h.return = p,
        h) : (h = i(h, m.children || []),
        h.return = p,
        h)
    }
    function c(p, h, m, w, k) {
        return h === null || h.tag !== 7 ? (h = pn(m, p.mode, w, k),
        h.return = p,
        h) : (h = i(h, m),
        h.return = p,
        h)
    }
    function f(p, h, m) {
        if (typeof h == "string" && h !== "" || typeof h == "number")
            return h = To("" + h, p.mode, m),
            h.return = p,
            h;
        if (typeof h == "object" && h !== null) {
            switch (h.$$typeof) {
            case vi:
                return m = Yi(h.type, h.key, h.props, null, p.mode, m),
                m.ref = gr(p, null, h),
                m.return = p,
                m;
            case Mn:
                return h = Co(h, p.mode, m),
                h.return = p,
                h;
            case Vt:
                var w = h._init;
                return f(p, w(h._payload), m)
            }
            if (Sr(h) || fr(h))
                return h = pn(h, p.mode, m, null),
                h.return = p,
                h;
            ji(p, h)
        }
        return null
    }
    function d(p, h, m, w) {
        var k = h !== null ? h.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number")
            return k !== null ? null : l(p, h, "" + m, w);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case vi:
                return m.key === k ? a(p, h, m, w) : null;
            case Mn:
                return m.key === k ? u(p, h, m, w) : null;
            case Vt:
                return k = m._init,
                d(p, h, k(m._payload), w)
            }
            if (Sr(m) || fr(m))
                return k !== null ? null : c(p, h, m, w, null);
            ji(p, m)
        }
        return null
    }
    function y(p, h, m, w, k) {
        if (typeof w == "string" && w !== "" || typeof w == "number")
            return p = p.get(m) || null,
            l(h, p, "" + w, k);
        if (typeof w == "object" && w !== null) {
            switch (w.$$typeof) {
            case vi:
                return p = p.get(w.key === null ? m : w.key) || null,
                a(h, p, w, k);
            case Mn:
                return p = p.get(w.key === null ? m : w.key) || null,
                u(h, p, w, k);
            case Vt:
                var P = w._init;
                return y(p, h, m, P(w._payload), k)
            }
            if (Sr(w) || fr(w))
                return p = p.get(m) || null,
                c(h, p, w, k, null);
            ji(h, w)
        }
        return null
    }
    function v(p, h, m, w) {
        for (var k = null, P = null, N = h, C = h = 0, I = null; N !== null && C < m.length; C++) {
            N.index > C ? (I = N,
            N = null) : I = N.sibling;
            var V = d(p, N, m[C], w);
            if (V === null) {
                N === null && (N = I);
                break
            }
            e && N && V.alternate === null && t(p, N),
            h = s(V, h, C),
            P === null ? k = V : P.sibling = V,
            P = V,
            N = I
        }
        if (C === m.length)
            return n(p, N),
            ee && sn(p, C),
            k;
        if (N === null) {
            for (; C < m.length; C++)
                N = f(p, m[C], w),
                N !== null && (h = s(N, h, C),
                P === null ? k = N : P.sibling = N,
                P = N);
            return ee && sn(p, C),
            k
        }
        for (N = r(p, N); C < m.length; C++)
            I = y(N, p, C, m[C], w),
            I !== null && (e && I.alternate !== null && N.delete(I.key === null ? C : I.key),
            h = s(I, h, C),
            P === null ? k = I : P.sibling = I,
            P = I);
        return e && N.forEach(function(H) {
            return t(p, H)
        }),
        ee && sn(p, C),
        k
    }
    function x(p, h, m, w) {
        var k = fr(m);
        if (typeof k != "function")
            throw Error(M(150));
        if (m = k.call(m),
        m == null)
            throw Error(M(151));
        for (var P = k = null, N = h, C = h = 0, I = null, V = m.next(); N !== null && !V.done; C++,
        V = m.next()) {
            N.index > C ? (I = N,
            N = null) : I = N.sibling;
            var H = d(p, N, V.value, w);
            if (H === null) {
                N === null && (N = I);
                break
            }
            e && N && H.alternate === null && t(p, N),
            h = s(H, h, C),
            P === null ? k = H : P.sibling = H,
            P = H,
            N = I
        }
        if (V.done)
            return n(p, N),
            ee && sn(p, C),
            k;
        if (N === null) {
            for (; !V.done; C++,
            V = m.next())
                V = f(p, V.value, w),
                V !== null && (h = s(V, h, C),
                P === null ? k = V : P.sibling = V,
                P = V);
            return ee && sn(p, C),
            k
        }
        for (N = r(p, N); !V.done; C++,
        V = m.next())
            V = y(N, p, C, V.value, w),
            V !== null && (e && V.alternate !== null && N.delete(V.key === null ? C : V.key),
            h = s(V, h, C),
            P === null ? k = V : P.sibling = V,
            P = V);
        return e && N.forEach(function(fe) {
            return t(p, fe)
        }),
        ee && sn(p, C),
        k
    }
    function T(p, h, m, w) {
        if (typeof m == "object" && m !== null && m.type === Nn && m.key === null && (m = m.props.children),
        typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
            case vi:
                e: {
                    for (var k = m.key, P = h; P !== null; ) {
                        if (P.key === k) {
                            if (k = m.type,
                            k === Nn) {
                                if (P.tag === 7) {
                                    n(p, P.sibling),
                                    h = i(P, m.props.children),
                                    h.return = p,
                                    p = h;
                                    break e
                                }
                            } else if (P.elementType === k || typeof k == "object" && k !== null && k.$$typeof === Vt && ac(k) === P.type) {
                                n(p, P.sibling),
                                h = i(P, m.props),
                                h.ref = gr(p, P, m),
                                h.return = p,
                                p = h;
                                break e
                            }
                            n(p, P);
                            break
                        } else
                            t(p, P);
                        P = P.sibling
                    }
                    m.type === Nn ? (h = pn(m.props.children, p.mode, w, m.key),
                    h.return = p,
                    p = h) : (w = Yi(m.type, m.key, m.props, null, p.mode, w),
                    w.ref = gr(p, h, m),
                    w.return = p,
                    p = w)
                }
                return o(p);
            case Mn:
                e: {
                    for (P = m.key; h !== null; ) {
                        if (h.key === P)
                            if (h.tag === 4 && h.stateNode.containerInfo === m.containerInfo && h.stateNode.implementation === m.implementation) {
                                n(p, h.sibling),
                                h = i(h, m.children || []),
                                h.return = p,
                                p = h;
                                break e
                            } else {
                                n(p, h);
                                break
                            }
                        else
                            t(p, h);
                        h = h.sibling
                    }
                    h = Co(m, p.mode, w),
                    h.return = p,
                    p = h
                }
                return o(p);
            case Vt:
                return P = m._init,
                T(p, h, P(m._payload), w)
            }
            if (Sr(m))
                return v(p, h, m, w);
            if (fr(m))
                return x(p, h, m, w);
            ji(p, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m,
        h !== null && h.tag === 6 ? (n(p, h.sibling),
        h = i(h, m),
        h.return = p,
        p = h) : (n(p, h),
        h = To(m, p.mode, w),
        h.return = p,
        p = h),
        o(p)) : n(p, h)
    }
    return T
}
var Jn = ph(!0)
  , mh = ph(!1)
  , ds = Jt(null)
  , hs = null
  , zn = null
  , xa = null;
function wa() {
    xa = zn = hs = null
}
function Sa(e) {
    var t = ds.current;
    Z(ds),
    e._currentValue = t
}
function gl(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function Xn(e, t) {
    hs = e,
    xa = zn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Re = !0),
    e.firstContext = null)
}
function qe(e) {
    var t = e._currentValue;
    if (xa !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        zn === null) {
            if (hs === null)
                throw Error(M(308));
            zn = e,
            hs.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            zn = zn.next = e;
    return t
}
var cn = null;
function ka(e) {
    cn === null ? cn = [e] : cn.push(e)
}
function gh(e, t, n, r) {
    var i = t.interleaved;
    return i === null ? (n.next = n,
    ka(t)) : (n.next = i.next,
    i.next = n),
    t.interleaved = n,
    Et(e, r)
}
function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var _t = !1;
function Ta(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function yh(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function St(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function Ht(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    K & 2) {
        var i = r.pending;
        return i === null ? t.next = t : (t.next = i.next,
        i.next = t),
        r.pending = t,
        Et(e, n)
    }
    return i = r.interleaved,
    i === null ? (t.next = t,
    ka(r)) : (t.next = i.next,
    i.next = t),
    r.interleaved = t,
    Et(e, n)
}
function Wi(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        aa(e, n)
    }
}
function uc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var i = null
          , s = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                s === null ? i = s = o : s = s.next = o,
                n = n.next
            } while (n !== null);
            s === null ? i = s = t : s = s.next = t
        } else
            i = s = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: s,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function ps(e, t, n, r) {
    var i = e.updateQueue;
    _t = !1;
    var s = i.firstBaseUpdate
      , o = i.lastBaseUpdate
      , l = i.shared.pending;
    if (l !== null) {
        i.shared.pending = null;
        var a = l
          , u = a.next;
        a.next = null,
        o === null ? s = u : o.next = u,
        o = a;
        var c = e.alternate;
        c !== null && (c = c.updateQueue,
        l = c.lastBaseUpdate,
        l !== o && (l === null ? c.firstBaseUpdate = u : l.next = u,
        c.lastBaseUpdate = a))
    }
    if (s !== null) {
        var f = i.baseState;
        o = 0,
        c = u = a = null,
        l = s;
        do {
            var d = l.lane
              , y = l.eventTime;
            if ((r & d) === d) {
                c !== null && (c = c.next = {
                    eventTime: y,
                    lane: 0,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                });
                e: {
                    var v = e
                      , x = l;
                    switch (d = t,
                    y = n,
                    x.tag) {
                    case 1:
                        if (v = x.payload,
                        typeof v == "function") {
                            f = v.call(y, f, d);
                            break e
                        }
                        f = v;
                        break e;
                    case 3:
                        v.flags = v.flags & -65537 | 128;
                    case 0:
                        if (v = x.payload,
                        d = typeof v == "function" ? v.call(y, f, d) : v,
                        d == null)
                            break e;
                        f = ie({}, f, d);
                        break e;
                    case 2:
                        _t = !0
                    }
                }
                l.callback !== null && l.lane !== 0 && (e.flags |= 64,
                d = i.effects,
                d === null ? i.effects = [l] : d.push(l))
            } else
                y = {
                    eventTime: y,
                    lane: d,
                    tag: l.tag,
                    payload: l.payload,
                    callback: l.callback,
                    next: null
                },
                c === null ? (u = c = y,
                a = f) : c = c.next = y,
                o |= d;
            if (l = l.next,
            l === null) {
                if (l = i.shared.pending,
                l === null)
                    break;
                d = l,
                l = d.next,
                d.next = null,
                i.lastBaseUpdate = d,
                i.shared.pending = null
            }
        } while (!0);
        if (c === null && (a = f),
        i.baseState = a,
        i.firstBaseUpdate = u,
        i.lastBaseUpdate = c,
        t = i.shared.interleaved,
        t !== null) {
            i = t;
            do
                o |= i.lane,
                i = i.next;
            while (i !== t)
        } else
            s === null && (i.shared.lanes = 0);
        xn |= o,
        e.lanes = o,
        e.memoizedState = f
    }
}
function cc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , i = r.callback;
            if (i !== null) {
                if (r.callback = null,
                r = n,
                typeof i != "function")
                    throw Error(M(191, i));
                i.call(r)
            }
        }
}
var di = {}
  , ht = Jt(di)
  , Zr = Jt(di)
  , qr = Jt(di);
function fn(e) {
    if (e === di)
        throw Error(M(174));
    return e
}
function Ca(e, t) {
    switch (Y(qr, t),
    Y(Zr, e),
    Y(ht, di),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : bo(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = bo(t, e)
    }
    Z(ht),
    Y(ht, t)
}
function er() {
    Z(ht),
    Z(Zr),
    Z(qr)
}
function vh(e) {
    fn(qr.current);
    var t = fn(ht.current)
      , n = bo(t, e.type);
    t !== n && (Y(Zr, e),
    Y(ht, n))
}
function Pa(e) {
    Zr.current === e && (Z(ht),
    Z(Zr))
}
var te = Jt(0);
function ms(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var yo = [];
function Ea() {
    for (var e = 0; e < yo.length; e++)
        yo[e]._workInProgressVersionPrimary = null;
    yo.length = 0
}
var Hi = jt.ReactCurrentDispatcher
  , vo = jt.ReactCurrentBatchConfig
  , vn = 0
  , re = null
  , he = null
  , me = null
  , gs = !1
  , Lr = !1
  , Jr = 0
  , zg = 0;
function Se() {
    throw Error(M(321))
}
function Ma(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!lt(e[n], t[n]))
            return !1;
    return !0
}
function Na(e, t, n, r, i, s) {
    if (vn = s,
    re = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    Hi.current = e === null || e.memoizedState === null ? Bg : Ug,
    e = n(r, i),
    Lr) {
        s = 0;
        do {
            if (Lr = !1,
            Jr = 0,
            25 <= s)
                throw Error(M(301));
            s += 1,
            me = he = null,
            t.updateQueue = null,
            Hi.current = $g,
            e = n(r, i)
        } while (Lr)
    }
    if (Hi.current = ys,
    t = he !== null && he.next !== null,
    vn = 0,
    me = he = re = null,
    gs = !1,
    t)
        throw Error(M(300));
    return e
}
function ja() {
    var e = Jr !== 0;
    return Jr = 0,
    e
}
function ct() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return me === null ? re.memoizedState = me = e : me = me.next = e,
    me
}
function Je() {
    if (he === null) {
        var e = re.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = he.next;
    var t = me === null ? re.memoizedState : me.next;
    if (t !== null)
        me = t,
        he = e;
    else {
        if (e === null)
            throw Error(M(310));
        he = e,
        e = {
            memoizedState: he.memoizedState,
            baseState: he.baseState,
            baseQueue: he.baseQueue,
            queue: he.queue,
            next: null
        },
        me === null ? re.memoizedState = me = e : me = me.next = e
    }
    return me
}
function ei(e, t) {
    return typeof t == "function" ? t(e) : t
}
function xo(e) {
    var t = Je()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = he
      , i = r.baseQueue
      , s = n.pending;
    if (s !== null) {
        if (i !== null) {
            var o = i.next;
            i.next = s.next,
            s.next = o
        }
        r.baseQueue = i = s,
        n.pending = null
    }
    if (i !== null) {
        s = i.next,
        r = r.baseState;
        var l = o = null
          , a = null
          , u = s;
        do {
            var c = u.lane;
            if ((vn & c) === c)
                a !== null && (a = a.next = {
                    lane: 0,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                }),
                r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var f = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                a === null ? (l = a = f,
                o = r) : a = a.next = f,
                re.lanes |= c,
                xn |= c
            }
            u = u.next
        } while (u !== null && u !== s);
        a === null ? o = r : a.next = l,
        lt(r, t.memoizedState) || (Re = !0),
        t.memoizedState = r,
        t.baseState = o,
        t.baseQueue = a,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        i = e;
        do
            s = i.lane,
            re.lanes |= s,
            xn |= s,
            i = i.next;
        while (i !== e)
    } else
        i === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function wo(e) {
    var t = Je()
      , n = t.queue;
    if (n === null)
        throw Error(M(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , i = n.pending
      , s = t.memoizedState;
    if (i !== null) {
        n.pending = null;
        var o = i = i.next;
        do
            s = e(s, o.action),
            o = o.next;
        while (o !== i);
        lt(s, t.memoizedState) || (Re = !0),
        t.memoizedState = s,
        t.baseQueue === null && (t.baseState = s),
        n.lastRenderedState = s
    }
    return [s, r]
}
function xh() {}
function wh(e, t) {
    var n = re
      , r = Je()
      , i = t()
      , s = !lt(r.memoizedState, i);
    if (s && (r.memoizedState = i,
    Re = !0),
    r = r.queue,
    Aa(Th.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || me !== null && me.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        ti(9, kh.bind(null, n, r, i, t), void 0, null),
        ge === null)
            throw Error(M(349));
        vn & 30 || Sh(n, t, i)
    }
    return i
}
function Sh(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = re.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    re.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function kh(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Ch(t) && Ph(e)
}
function Th(e, t, n) {
    return n(function() {
        Ch(t) && Ph(e)
    })
}
function Ch(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !lt(e, n)
    } catch {
        return !0
    }
}
function Ph(e) {
    var t = Et(e, 1);
    t !== null && ot(t, e, 1, -1)
}
function fc(e) {
    var t = ct();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ei,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = Og.bind(null, re, e),
    [t.memoizedState, e]
}
function ti(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = re.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    re.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function Eh() {
    return Je().memoizedState
}
function Ki(e, t, n, r) {
    var i = ct();
    re.flags |= e,
    i.memoizedState = ti(1 | t, n, void 0, r === void 0 ? null : r)
}
function Is(e, t, n, r) {
    var i = Je();
    r = r === void 0 ? null : r;
    var s = void 0;
    if (he !== null) {
        var o = he.memoizedState;
        if (s = o.destroy,
        r !== null && Ma(r, o.deps)) {
            i.memoizedState = ti(t, n, s, r);
            return
        }
    }
    re.flags |= e,
    i.memoizedState = ti(1 | t, n, s, r)
}
function dc(e, t) {
    return Ki(8390656, 8, e, t)
}
function Aa(e, t) {
    return Is(2048, 8, e, t)
}
function Mh(e, t) {
    return Is(4, 2, e, t)
}
function Nh(e, t) {
    return Is(4, 4, e, t)
}
function jh(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Ah(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    Is(4, 4, jh.bind(null, t, e), n)
}
function Da() {}
function Dh(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ma(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Lh(e, t) {
    var n = Je();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Ma(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Rh(e, t, n) {
    return vn & 21 ? (lt(n, t) || (n = Fd(),
    re.lanes |= n,
    xn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Re = !0),
    e.memoizedState = n)
}
function Ig(e, t) {
    var n = Q;
    Q = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = vo.transition;
    vo.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Q = n,
        vo.transition = r
    }
}
function Vh() {
    return Je().memoizedState
}
function Fg(e, t, n) {
    var r = Gt(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    _h(e))
        zh(t, n);
    else if (n = gh(e, t, n, r),
    n !== null) {
        var i = je();
        ot(n, e, r, i),
        Ih(n, t, r)
    }
}
function Og(e, t, n) {
    var r = Gt(e)
      , i = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (_h(e))
        zh(t, i);
    else {
        var s = e.alternate;
        if (e.lanes === 0 && (s === null || s.lanes === 0) && (s = t.lastRenderedReducer,
        s !== null))
            try {
                var o = t.lastRenderedState
                  , l = s(o, n);
                if (i.hasEagerState = !0,
                i.eagerState = l,
                lt(l, o)) {
                    var a = t.interleaved;
                    a === null ? (i.next = i,
                    ka(t)) : (i.next = a.next,
                    a.next = i),
                    t.interleaved = i;
                    return
                }
            } catch {} finally {}
        n = gh(e, t, i, r),
        n !== null && (i = je(),
        ot(n, e, r, i),
        Ih(n, t, r))
    }
}
function _h(e) {
    var t = e.alternate;
    return e === re || t !== null && t === re
}
function zh(e, t) {
    Lr = gs = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Ih(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        aa(e, n)
    }
}
var ys = {
    readContext: qe,
    useCallback: Se,
    useContext: Se,
    useEffect: Se,
    useImperativeHandle: Se,
    useInsertionEffect: Se,
    useLayoutEffect: Se,
    useMemo: Se,
    useReducer: Se,
    useRef: Se,
    useState: Se,
    useDebugValue: Se,
    useDeferredValue: Se,
    useTransition: Se,
    useMutableSource: Se,
    useSyncExternalStore: Se,
    useId: Se,
    unstable_isNewReconciler: !1
}
  , Bg = {
    readContext: qe,
    useCallback: function(e, t) {
        return ct().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: qe,
    useEffect: dc,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        Ki(4194308, 4, jh.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return Ki(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return Ki(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = ct();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = ct();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Fg.bind(null, re, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = ct();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: fc,
    useDebugValue: Da,
    useDeferredValue: function(e) {
        return ct().memoizedState = e
    },
    useTransition: function() {
        var e = fc(!1)
          , t = e[0];
        return e = Ig.bind(null, e[1]),
        ct().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = re
          , i = ct();
        if (ee) {
            if (n === void 0)
                throw Error(M(407));
            n = n()
        } else {
            if (n = t(),
            ge === null)
                throw Error(M(349));
            vn & 30 || Sh(r, t, n)
        }
        i.memoizedState = n;
        var s = {
            value: n,
            getSnapshot: t
        };
        return i.queue = s,
        dc(Th.bind(null, r, s, e), [e]),
        r.flags |= 2048,
        ti(9, kh.bind(null, r, s, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = ct()
          , t = ge.identifierPrefix;
        if (ee) {
            var n = wt
              , r = xt;
            n = (r & ~(1 << 32 - st(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = Jr++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = zg++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , Ug = {
    readContext: qe,
    useCallback: Dh,
    useContext: qe,
    useEffect: Aa,
    useImperativeHandle: Ah,
    useInsertionEffect: Mh,
    useLayoutEffect: Nh,
    useMemo: Lh,
    useReducer: xo,
    useRef: Eh,
    useState: function() {
        return xo(ei)
    },
    useDebugValue: Da,
    useDeferredValue: function(e) {
        var t = Je();
        return Rh(t, he.memoizedState, e)
    },
    useTransition: function() {
        var e = xo(ei)[0]
          , t = Je().memoizedState;
        return [e, t]
    },
    useMutableSource: xh,
    useSyncExternalStore: wh,
    useId: Vh,
    unstable_isNewReconciler: !1
}
  , $g = {
    readContext: qe,
    useCallback: Dh,
    useContext: qe,
    useEffect: Aa,
    useImperativeHandle: Ah,
    useInsertionEffect: Mh,
    useLayoutEffect: Nh,
    useMemo: Lh,
    useReducer: wo,
    useRef: Eh,
    useState: function() {
        return wo(ei)
    },
    useDebugValue: Da,
    useDeferredValue: function(e) {
        var t = Je();
        return he === null ? t.memoizedState = e : Rh(t, he.memoizedState, e)
    },
    useTransition: function() {
        var e = wo(ei)[0]
          , t = Je().memoizedState;
        return [e, t]
    },
    useMutableSource: xh,
    useSyncExternalStore: wh,
    useId: Vh,
    unstable_isNewReconciler: !1
};
function nt(e, t) {
    if (e && e.defaultProps) {
        t = ie({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function yl(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : ie({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var Fs = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? kn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = je()
          , i = Gt(e)
          , s = St(r, i);
        s.payload = t,
        n != null && (s.callback = n),
        t = Ht(e, s, i),
        t !== null && (ot(t, e, i, r),
        Wi(t, e, i))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = je()
          , i = Gt(e)
          , s = St(r, i);
        s.tag = 1,
        s.payload = t,
        n != null && (s.callback = n),
        t = Ht(e, s, i),
        t !== null && (ot(t, e, i, r),
        Wi(t, e, i))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = je()
          , r = Gt(e)
          , i = St(n, r);
        i.tag = 2,
        t != null && (i.callback = t),
        t = Ht(e, i, r),
        t !== null && (ot(t, e, r, n),
        Wi(t, e, r))
    }
};
function hc(e, t, n, r, i, s, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, s, o) : t.prototype && t.prototype.isPureReactComponent ? !Qr(n, r) || !Qr(i, s) : !0
}
function Fh(e, t, n) {
    var r = !1
      , i = Yt
      , s = t.contextType;
    return typeof s == "object" && s !== null ? s = qe(s) : (i = _e(t) ? gn : Me.current,
    r = t.contextTypes,
    s = (r = r != null) ? Zn(e, i) : Yt),
    t = new t(n,s),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = Fs,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = i,
    e.__reactInternalMemoizedMaskedChildContext = s),
    t
}
function pc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Fs.enqueueReplaceState(t, t.state, null)
}
function vl(e, t, n, r) {
    var i = e.stateNode;
    i.props = n,
    i.state = e.memoizedState,
    i.refs = {},
    Ta(e);
    var s = t.contextType;
    typeof s == "object" && s !== null ? i.context = qe(s) : (s = _e(t) ? gn : Me.current,
    i.context = Zn(e, s)),
    i.state = e.memoizedState,
    s = t.getDerivedStateFromProps,
    typeof s == "function" && (yl(e, t, s, n),
    i.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (t = i.state,
    typeof i.componentWillMount == "function" && i.componentWillMount(),
    typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(),
    t !== i.state && Fs.enqueueReplaceState(i, i.state, null),
    ps(e, n, i, r),
    i.state = e.memoizedState),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308)
}
function tr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += g0(r),
            r = r.return;
        while (r);
        var i = n
    } catch (s) {
        i = `
Error generating stack: ` + s.message + `
` + s.stack
    }
    return {
        value: e,
        source: t,
        stack: i,
        digest: null
    }
}
function So(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function xl(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Wg = typeof WeakMap == "function" ? WeakMap : Map;
function Oh(e, t, n) {
    n = St(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        xs || (xs = !0,
        jl = r),
        xl(e, t)
    }
    ,
    n
}
function Bh(e, t, n) {
    n = St(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var i = t.value;
        n.payload = function() {
            return r(i)
        }
        ,
        n.callback = function() {
            xl(e, t)
        }
    }
    var s = e.stateNode;
    return s !== null && typeof s.componentDidCatch == "function" && (n.callback = function() {
        xl(e, t),
        typeof r != "function" && (Kt === null ? Kt = new Set([this]) : Kt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    n
}
function mc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Wg;
        var i = new Set;
        r.set(t, i)
    } else
        i = r.get(t),
        i === void 0 && (i = new Set,
        r.set(t, i));
    i.has(n) || (i.add(n),
    e = ry.bind(null, e, t, n),
    t.then(e, e))
}
function gc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function yc(e, t, n, r, i) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = i,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = St(-1, 1),
    t.tag = 2,
    Ht(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Hg = jt.ReactCurrentOwner
  , Re = !1;
function Ne(e, t, n, r) {
    t.child = e === null ? mh(t, null, n, r) : Jn(t, e.child, n, r)
}
function vc(e, t, n, r, i) {
    n = n.render;
    var s = t.ref;
    return Xn(t, i),
    r = Na(e, t, n, r, s, i),
    n = ja(),
    e !== null && !Re ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Mt(e, t, i)) : (ee && n && ga(t),
    t.flags |= 1,
    Ne(e, t, r, i),
    t.child)
}
function xc(e, t, n, r, i) {
    if (e === null) {
        var s = n.type;
        return typeof s == "function" && !Oa(s) && s.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = s,
        Uh(e, t, s, r, i)) : (e = Yi(n.type, null, r, t, t.mode, i),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (s = e.child,
    !(e.lanes & i)) {
        var o = s.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : Qr,
        n(o, r) && e.ref === t.ref)
            return Mt(e, t, i)
    }
    return t.flags |= 1,
    e = Qt(s, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function Uh(e, t, n, r, i) {
    if (e !== null) {
        var s = e.memoizedProps;
        if (Qr(s, r) && e.ref === t.ref)
            if (Re = !1,
            t.pendingProps = r = s,
            (e.lanes & i) !== 0)
                e.flags & 131072 && (Re = !0);
            else
                return t.lanes = e.lanes,
                Mt(e, t, i)
    }
    return wl(e, t, n, r, i)
}
function $h(e, t, n) {
    var r = t.pendingProps
      , i = r.children
      , s = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            Y(Fn, Fe),
            Fe |= n;
        else {
            if (!(n & 1073741824))
                return e = s !== null ? s.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                Y(Fn, Fe),
                Fe |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = s !== null ? s.baseLanes : n,
            Y(Fn, Fe),
            Fe |= r
        }
    else
        s !== null ? (r = s.baseLanes | n,
        t.memoizedState = null) : r = n,
        Y(Fn, Fe),
        Fe |= r;
    return Ne(e, t, i, n),
    t.child
}
function Wh(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function wl(e, t, n, r, i) {
    var s = _e(n) ? gn : Me.current;
    return s = Zn(t, s),
    Xn(t, i),
    n = Na(e, t, n, r, s, i),
    r = ja(),
    e !== null && !Re ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~i,
    Mt(e, t, i)) : (ee && r && ga(t),
    t.flags |= 1,
    Ne(e, t, n, i),
    t.child)
}
function wc(e, t, n, r, i) {
    if (_e(n)) {
        var s = !0;
        us(t)
    } else
        s = !1;
    if (Xn(t, i),
    t.stateNode === null)
        Gi(e, t),
        Fh(t, n, r),
        vl(t, n, r, i),
        r = !0;
    else if (e === null) {
        var o = t.stateNode
          , l = t.memoizedProps;
        o.props = l;
        var a = o.context
          , u = n.contextType;
        typeof u == "object" && u !== null ? u = qe(u) : (u = _e(n) ? gn : Me.current,
        u = Zn(t, u));
        var c = n.getDerivedStateFromProps
          , f = typeof c == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        f || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== r || a !== u) && pc(t, o, r, u),
        _t = !1;
        var d = t.memoizedState;
        o.state = d,
        ps(t, r, o, i),
        a = t.memoizedState,
        l !== r || d !== a || Ve.current || _t ? (typeof c == "function" && (yl(t, n, c, r),
        a = t.memoizedState),
        (l = _t || hc(t, n, l, r, d, a, u)) ? (f || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = a),
        o.props = r,
        o.state = a,
        o.context = u,
        r = l) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        o = t.stateNode,
        yh(e, t),
        l = t.memoizedProps,
        u = t.type === t.elementType ? l : nt(t.type, l),
        o.props = u,
        f = t.pendingProps,
        d = o.context,
        a = n.contextType,
        typeof a == "object" && a !== null ? a = qe(a) : (a = _e(n) ? gn : Me.current,
        a = Zn(t, a));
        var y = n.getDerivedStateFromProps;
        (c = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (l !== f || d !== a) && pc(t, o, r, a),
        _t = !1,
        d = t.memoizedState,
        o.state = d,
        ps(t, r, o, i);
        var v = t.memoizedState;
        l !== f || d !== v || Ve.current || _t ? (typeof y == "function" && (yl(t, n, y, r),
        v = t.memoizedState),
        (u = _t || hc(t, n, u, r, d, v, a) || !1) ? (c || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, a),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, a)),
        typeof o.componentDidUpdate == "function" && (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = v),
        o.props = r,
        o.state = v,
        o.context = a,
        r = u) : (typeof o.componentDidUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || l === e.memoizedProps && d === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return Sl(e, t, n, r, s, i)
}
function Sl(e, t, n, r, i, s) {
    Wh(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o)
        return i && sc(t, n, !1),
        Mt(e, t, s);
    r = t.stateNode,
    Hg.current = t;
    var l = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && o ? (t.child = Jn(t, e.child, null, s),
    t.child = Jn(t, null, l, s)) : Ne(e, t, l, s),
    t.memoizedState = r.state,
    i && sc(t, n, !0),
    t.child
}
function Hh(e) {
    var t = e.stateNode;
    t.pendingContext ? ic(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ic(e, t.context, !1),
    Ca(e, t.containerInfo)
}
function Sc(e, t, n, r, i) {
    return qn(),
    va(i),
    t.flags |= 256,
    Ne(e, t, n, r),
    t.child
}
var kl = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Tl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Kh(e, t, n) {
    var r = t.pendingProps, i = te.current, s = !1, o = (t.flags & 128) !== 0, l;
    if ((l = o) || (l = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    l ? (s = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1),
    Y(te, i & 1),
    e === null)
        return ml(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (o = r.children,
        e = r.fallback,
        s ? (r = t.mode,
        s = t.child,
        o = {
            mode: "hidden",
            children: o
        },
        !(r & 1) && s !== null ? (s.childLanes = 0,
        s.pendingProps = o) : s = Us(o, r, 0, null),
        e = pn(e, r, n, null),
        s.return = t,
        e.return = t,
        s.sibling = e,
        t.child = s,
        t.child.memoizedState = Tl(n),
        t.memoizedState = kl,
        e) : La(t, o));
    if (i = e.memoizedState,
    i !== null && (l = i.dehydrated,
    l !== null))
        return Kg(e, t, o, r, l, i, n);
    if (s) {
        s = r.fallback,
        o = t.mode,
        i = e.child,
        l = i.sibling;
        var a = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== i ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = a,
        t.deletions = null) : (r = Qt(i, a),
        r.subtreeFlags = i.subtreeFlags & 14680064),
        l !== null ? s = Qt(l, s) : (s = pn(s, o, n, null),
        s.flags |= 2),
        s.return = t,
        r.return = t,
        r.sibling = s,
        t.child = r,
        r = s,
        s = t.child,
        o = e.child.memoizedState,
        o = o === null ? Tl(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        },
        s.memoizedState = o,
        s.childLanes = e.childLanes & ~n,
        t.memoizedState = kl,
        r
    }
    return s = e.child,
    e = s.sibling,
    r = Qt(s, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function La(e, t) {
    return t = Us({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function Ai(e, t, n, r) {
    return r !== null && va(r),
    Jn(t, e.child, null, n),
    e = La(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Kg(e, t, n, r, i, s, o) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = So(Error(M(422))),
        Ai(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (s = r.fallback,
        i = t.mode,
        r = Us({
            mode: "visible",
            children: r.children
        }, i, 0, null),
        s = pn(s, i, o, null),
        s.flags |= 2,
        r.return = t,
        s.return = t,
        r.sibling = s,
        t.child = r,
        t.mode & 1 && Jn(t, e.child, null, o),
        t.child.memoizedState = Tl(o),
        t.memoizedState = kl,
        s);
    if (!(t.mode & 1))
        return Ai(e, t, o, null);
    if (i.data === "$!") {
        if (r = i.nextSibling && i.nextSibling.dataset,
        r)
            var l = r.dgst;
        return r = l,
        s = Error(M(419)),
        r = So(s, r, void 0),
        Ai(e, t, o, r)
    }
    if (l = (o & e.childLanes) !== 0,
    Re || l) {
        if (r = ge,
        r !== null) {
            switch (o & -o) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
                break;
            case 64:
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
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default:
                i = 0
            }
            i = i & (r.suspendedLanes | o) ? 0 : i,
            i !== 0 && i !== s.retryLane && (s.retryLane = i,
            Et(e, i),
            ot(r, e, i, -1))
        }
        return Fa(),
        r = So(Error(M(421))),
        Ai(e, t, o, r)
    }
    return i.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = iy.bind(null, e),
    i._reactRetry = t,
    null) : (e = s.treeContext,
    Oe = Wt(i.nextSibling),
    Be = t,
    ee = !0,
    it = null,
    e !== null && (Xe[Ye++] = xt,
    Xe[Ye++] = wt,
    Xe[Ye++] = yn,
    xt = e.id,
    wt = e.overflow,
    yn = t),
    t = La(t, r.children),
    t.flags |= 4096,
    t)
}
function kc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    gl(e.return, t, n)
}
function ko(e, t, n, r, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i
    } : (s.isBackwards = t,
    s.rendering = null,
    s.renderingStartTime = 0,
    s.last = r,
    s.tail = n,
    s.tailMode = i)
}
function Gh(e, t, n) {
    var r = t.pendingProps
      , i = r.revealOrder
      , s = r.tail;
    if (Ne(e, t, r.children, n),
    r = te.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && kc(e, n, t);
                else if (e.tag === 19)
                    kc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (Y(te, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (i) {
        case "forwards":
            for (n = t.child,
            i = null; n !== null; )
                e = n.alternate,
                e !== null && ms(e) === null && (i = n),
                n = n.sibling;
            n = i,
            n === null ? (i = t.child,
            t.child = null) : (i = n.sibling,
            n.sibling = null),
            ko(t, !1, i, n, s);
            break;
        case "backwards":
            for (n = null,
            i = t.child,
            t.child = null; i !== null; ) {
                if (e = i.alternate,
                e !== null && ms(e) === null) {
                    t.child = i;
                    break
                }
                e = i.sibling,
                i.sibling = n,
                n = i,
                i = e
            }
            ko(t, !0, n, null, s);
            break;
        case "together":
            ko(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Gi(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Mt(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    xn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(M(153));
    if (t.child !== null) {
        for (e = t.child,
        n = Qt(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = Qt(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Gg(e, t, n) {
    switch (t.tag) {
    case 3:
        Hh(t),
        qn();
        break;
    case 5:
        vh(t);
        break;
    case 1:
        _e(t.type) && us(t);
        break;
    case 4:
        Ca(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , i = t.memoizedProps.value;
        Y(ds, r._currentValue),
        r._currentValue = i;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (Y(te, te.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Kh(e, t, n) : (Y(te, te.current & 1),
            e = Mt(e, t, n),
            e !== null ? e.sibling : null);
        Y(te, te.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return Gh(e, t, n);
            t.flags |= 128
        }
        if (i = t.memoizedState,
        i !== null && (i.rendering = null,
        i.tail = null,
        i.lastEffect = null),
        Y(te, te.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        $h(e, t, n)
    }
    return Mt(e, t, n)
}
var Qh, Cl, Xh, Yh;
Qh = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
Cl = function() {}
;
Xh = function(e, t, n, r) {
    var i = e.memoizedProps;
    if (i !== r) {
        e = t.stateNode,
        fn(ht.current);
        var s = null;
        switch (n) {
        case "input":
            i = Go(e, i),
            r = Go(e, r),
            s = [];
            break;
        case "select":
            i = ie({}, i, {
                value: void 0
            }),
            r = ie({}, r, {
                value: void 0
            }),
            s = [];
            break;
        case "textarea":
            i = Yo(e, i),
            r = Yo(e, r),
            s = [];
            break;
        default:
            typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ls)
        }
        Zo(n, r);
        var o;
        n = null;
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === "style") {
                    var l = i[u];
                    for (o in l)
                        l.hasOwnProperty(o) && (n || (n = {}),
                        n[o] = "")
                } else
                    u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Br.hasOwnProperty(u) ? s || (s = []) : (s = s || []).push(u, null));
        for (u in r) {
            var a = r[u];
            if (l = i != null ? i[u] : void 0,
            r.hasOwnProperty(u) && a !== l && (a != null || l != null))
                if (u === "style")
                    if (l) {
                        for (o in l)
                            !l.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}),
                            n[o] = "");
                        for (o in a)
                            a.hasOwnProperty(o) && l[o] !== a[o] && (n || (n = {}),
                            n[o] = a[o])
                    } else
                        n || (s || (s = []),
                        s.push(u, n)),
                        n = a;
                else
                    u === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                    l = l ? l.__html : void 0,
                    a != null && l !== a && (s = s || []).push(u, a)) : u === "children" ? typeof a != "string" && typeof a != "number" || (s = s || []).push(u, "" + a) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Br.hasOwnProperty(u) ? (a != null && u === "onScroll" && b("scroll", e),
                    s || l === a || (s = [])) : (s = s || []).push(u, a))
        }
        n && (s = s || []).push("style", n);
        var u = s;
        (t.updateQueue = u) && (t.flags |= 4)
    }
}
;
Yh = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function yr(e, t) {
    if (!ee)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags & 14680064,
            r |= i.flags & 14680064,
            i.return = e,
            i = i.sibling;
    else
        for (i = e.child; i !== null; )
            n |= i.lanes | i.childLanes,
            r |= i.subtreeFlags,
            r |= i.flags,
            i.return = e,
            i = i.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Qg(e, t, n) {
    var r = t.pendingProps;
    switch (ya(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return ke(t),
        null;
    case 1:
        return _e(t.type) && as(),
        ke(t),
        null;
    case 3:
        return r = t.stateNode,
        er(),
        Z(Ve),
        Z(Me),
        Ea(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (Ni(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        it !== null && (Ll(it),
        it = null))),
        Cl(e, t),
        ke(t),
        null;
    case 5:
        Pa(t);
        var i = fn(qr.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Xh(e, t, n, r, i),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(M(166));
                return ke(t),
                null
            }
            if (e = fn(ht.current),
            Ni(t)) {
                r = t.stateNode,
                n = t.type;
                var s = t.memoizedProps;
                switch (r[ft] = t,
                r[br] = s,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    b("cancel", r),
                    b("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    b("load", r);
                    break;
                case "video":
                case "audio":
                    for (i = 0; i < Tr.length; i++)
                        b(Tr[i], r);
                    break;
                case "source":
                    b("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    b("error", r),
                    b("load", r);
                    break;
                case "details":
                    b("toggle", r);
                    break;
                case "input":
                    Du(r, s),
                    b("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!s.multiple
                    },
                    b("invalid", r);
                    break;
                case "textarea":
                    Ru(r, s),
                    b("invalid", r)
                }
                Zo(n, s),
                i = null;
                for (var o in s)
                    if (s.hasOwnProperty(o)) {
                        var l = s[o];
                        o === "children" ? typeof l == "string" ? r.textContent !== l && (s.suppressHydrationWarning !== !0 && Mi(r.textContent, l, e),
                        i = ["children", l]) : typeof l == "number" && r.textContent !== "" + l && (s.suppressHydrationWarning !== !0 && Mi(r.textContent, l, e),
                        i = ["children", "" + l]) : Br.hasOwnProperty(o) && l != null && o === "onScroll" && b("scroll", r)
                    }
                switch (n) {
                case "input":
                    xi(r),
                    Lu(r, s, !0);
                    break;
                case "textarea":
                    xi(r),
                    Vu(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof s.onClick == "function" && (r.onclick = ls)
                }
                r = i,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                o = i.nodeType === 9 ? i : i.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = Td(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                    is: r.is
                }) : (e = o.createElement(n),
                n === "select" && (o = e,
                r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n),
                e[ft] = t,
                e[br] = r,
                Qh(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (o = qo(n, r),
                    n) {
                    case "dialog":
                        b("cancel", e),
                        b("close", e),
                        i = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        b("load", e),
                        i = r;
                        break;
                    case "video":
                    case "audio":
                        for (i = 0; i < Tr.length; i++)
                            b(Tr[i], e);
                        i = r;
                        break;
                    case "source":
                        b("error", e),
                        i = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        b("error", e),
                        b("load", e),
                        i = r;
                        break;
                    case "details":
                        b("toggle", e),
                        i = r;
                        break;
                    case "input":
                        Du(e, r),
                        i = Go(e, r),
                        b("invalid", e);
                        break;
                    case "option":
                        i = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        i = ie({}, r, {
                            value: void 0
                        }),
                        b("invalid", e);
                        break;
                    case "textarea":
                        Ru(e, r),
                        i = Yo(e, r),
                        b("invalid", e);
                        break;
                    default:
                        i = r
                    }
                    Zo(n, i),
                    l = i;
                    for (s in l)
                        if (l.hasOwnProperty(s)) {
                            var a = l[s];
                            s === "style" ? Ed(e, a) : s === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0,
                            a != null && Cd(e, a)) : s === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && Ur(e, a) : typeof a == "number" && Ur(e, "" + a) : s !== "suppressContentEditableWarning" && s !== "suppressHydrationWarning" && s !== "autoFocus" && (Br.hasOwnProperty(s) ? a != null && s === "onScroll" && b("scroll", e) : a != null && na(e, s, a, o))
                        }
                    switch (n) {
                    case "input":
                        xi(e),
                        Lu(e, r, !1);
                        break;
                    case "textarea":
                        xi(e),
                        Vu(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + Xt(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        s = r.value,
                        s != null ? Hn(e, !!r.multiple, s, !1) : r.defaultValue != null && Hn(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof i.onClick == "function" && (e.onclick = ls)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return ke(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Yh(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(M(166));
            if (n = fn(qr.current),
            fn(ht.current),
            Ni(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[ft] = t,
                (s = r.nodeValue !== n) && (e = Be,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        Mi(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && Mi(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                s && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[ft] = t,
                t.stateNode = r
        }
        return ke(t),
        null;
    case 13:
        if (Z(te),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ee && Oe !== null && t.mode & 1 && !(t.flags & 128))
                hh(),
                qn(),
                t.flags |= 98560,
                s = !1;
            else if (s = Ni(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!s)
                        throw Error(M(318));
                    if (s = t.memoizedState,
                    s = s !== null ? s.dehydrated : null,
                    !s)
                        throw Error(M(317));
                    s[ft] = t
                } else
                    qn(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                ke(t),
                s = !1
            } else
                it !== null && (Ll(it),
                it = null),
                s = !0;
            if (!s)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || te.current & 1 ? pe === 0 && (pe = 3) : Fa())),
        t.updateQueue !== null && (t.flags |= 4),
        ke(t),
        null);
    case 4:
        return er(),
        Cl(e, t),
        e === null && Xr(t.stateNode.containerInfo),
        ke(t),
        null;
    case 10:
        return Sa(t.type._context),
        ke(t),
        null;
    case 17:
        return _e(t.type) && as(),
        ke(t),
        null;
    case 19:
        if (Z(te),
        s = t.memoizedState,
        s === null)
            return ke(t),
            null;
        if (r = (t.flags & 128) !== 0,
        o = s.rendering,
        o === null)
            if (r)
                yr(s, !1);
            else {
                if (pe !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (o = ms(e),
                        o !== null) {
                            for (t.flags |= 128,
                            yr(s, !1),
                            r = o.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                s = n,
                                e = r,
                                s.flags &= 14680066,
                                o = s.alternate,
                                o === null ? (s.childLanes = 0,
                                s.lanes = e,
                                s.child = null,
                                s.subtreeFlags = 0,
                                s.memoizedProps = null,
                                s.memoizedState = null,
                                s.updateQueue = null,
                                s.dependencies = null,
                                s.stateNode = null) : (s.childLanes = o.childLanes,
                                s.lanes = o.lanes,
                                s.child = o.child,
                                s.subtreeFlags = 0,
                                s.deletions = null,
                                s.memoizedProps = o.memoizedProps,
                                s.memoizedState = o.memoizedState,
                                s.updateQueue = o.updateQueue,
                                s.type = o.type,
                                e = o.dependencies,
                                s.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return Y(te, te.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                s.tail !== null && ce() > nr && (t.flags |= 128,
                r = !0,
                yr(s, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = ms(o),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    yr(s, !0),
                    s.tail === null && s.tailMode === "hidden" && !o.alternate && !ee)
                        return ke(t),
                        null
                } else
                    2 * ce() - s.renderingStartTime > nr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    yr(s, !1),
                    t.lanes = 4194304);
            s.isBackwards ? (o.sibling = t.child,
            t.child = o) : (n = s.last,
            n !== null ? n.sibling = o : t.child = o,
            s.last = o)
        }
        return s.tail !== null ? (t = s.tail,
        s.rendering = t,
        s.tail = t.sibling,
        s.renderingStartTime = ce(),
        t.sibling = null,
        n = te.current,
        Y(te, r ? n & 1 | 2 : n & 1),
        t) : (ke(t),
        null);
    case 22:
    case 23:
        return Ia(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Fe & 1073741824 && (ke(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : ke(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(M(156, t.tag))
}
function Xg(e, t) {
    switch (ya(t),
    t.tag) {
    case 1:
        return _e(t.type) && as(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return er(),
        Z(Ve),
        Z(Me),
        Ea(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return Pa(t),
        null;
    case 13:
        if (Z(te),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(M(340));
            qn()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return Z(te),
        null;
    case 4:
        return er(),
        null;
    case 10:
        return Sa(t.type._context),
        null;
    case 22:
    case 23:
        return Ia(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Di = !1
  , Pe = !1
  , Yg = typeof WeakSet == "function" ? WeakSet : Set
  , D = null;
function In(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                le(e, t, r)
            }
        else
            n.current = null
}
function Pl(e, t, n) {
    try {
        n()
    } catch (r) {
        le(e, t, r)
    }
}
var Tc = !1;
function bg(e, t) {
    if (al = is,
    e = eh(),
    ma(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var i = r.anchorOffset
                      , s = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        s.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var o = 0
                      , l = -1
                      , a = -1
                      , u = 0
                      , c = 0
                      , f = e
                      , d = null;
                    t: for (; ; ) {
                        for (var y; f !== n || i !== 0 && f.nodeType !== 3 || (l = o + i),
                        f !== s || r !== 0 && f.nodeType !== 3 || (a = o + r),
                        f.nodeType === 3 && (o += f.nodeValue.length),
                        (y = f.firstChild) !== null; )
                            d = f,
                            f = y;
                        for (; ; ) {
                            if (f === e)
                                break t;
                            if (d === n && ++u === i && (l = o),
                            d === s && ++c === r && (a = o),
                            (y = f.nextSibling) !== null)
                                break;
                            f = d,
                            d = f.parentNode
                        }
                        f = y
                    }
                    n = l === -1 || a === -1 ? null : {
                        start: l,
                        end: a
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (ul = {
        focusedElem: e,
        selectionRange: n
    },
    is = !1,
    D = t; D !== null; )
        if (t = D,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            D = e;
        else
            for (; D !== null; ) {
                t = D;
                try {
                    var v = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (v !== null) {
                                var x = v.memoizedProps
                                  , T = v.memoizedState
                                  , p = t.stateNode
                                  , h = p.getSnapshotBeforeUpdate(t.elementType === t.type ? x : nt(t.type, x), T);
                                p.__reactInternalSnapshotBeforeUpdate = h
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(M(163))
                        }
                } catch (w) {
                    le(t, t.return, w)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    D = e;
                    break
                }
                D = t.return
            }
    return v = Tc,
    Tc = !1,
    v
}
function Rr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var i = r = r.next;
        do {
            if ((i.tag & e) === e) {
                var s = i.destroy;
                i.destroy = void 0,
                s !== void 0 && Pl(t, n, s)
            }
            i = i.next
        } while (i !== r)
    }
}
function Os(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function El(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function bh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    bh(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[ft],
    delete t[br],
    delete t[dl],
    delete t[Lg],
    delete t[Rg])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Zh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Cc(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Zh(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function Ml(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = ls));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Ml(e, t, n),
        e = e.sibling; e !== null; )
            Ml(e, t, n),
            e = e.sibling
}
function Nl(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (Nl(e, t, n),
        e = e.sibling; e !== null; )
            Nl(e, t, n),
            e = e.sibling
}
var ye = null
  , rt = !1;
function Dt(e, t, n) {
    for (n = n.child; n !== null; )
        qh(e, t, n),
        n = n.sibling
}
function qh(e, t, n) {
    if (dt && typeof dt.onCommitFiberUnmount == "function")
        try {
            dt.onCommitFiberUnmount(Ds, n)
        } catch {}
    switch (n.tag) {
    case 5:
        Pe || In(n, t);
    case 6:
        var r = ye
          , i = rt;
        ye = null,
        Dt(e, t, n),
        ye = r,
        rt = i,
        ye !== null && (rt ? (e = ye,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ye.removeChild(n.stateNode));
        break;
    case 18:
        ye !== null && (rt ? (e = ye,
        n = n.stateNode,
        e.nodeType === 8 ? mo(e.parentNode, n) : e.nodeType === 1 && mo(e, n),
        Kr(e)) : mo(ye, n.stateNode));
        break;
    case 4:
        r = ye,
        i = rt,
        ye = n.stateNode.containerInfo,
        rt = !0,
        Dt(e, t, n),
        ye = r,
        rt = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Pe && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            i = r = r.next;
            do {
                var s = i
                  , o = s.destroy;
                s = s.tag,
                o !== void 0 && (s & 2 || s & 4) && Pl(n, t, o),
                i = i.next
            } while (i !== r)
        }
        Dt(e, t, n);
        break;
    case 1:
        if (!Pe && (In(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (l) {
                le(n, t, l)
            }
        Dt(e, t, n);
        break;
    case 21:
        Dt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (Pe = (r = Pe) || n.memoizedState !== null,
        Dt(e, t, n),
        Pe = r) : Dt(e, t, n);
        break;
    default:
        Dt(e, t, n)
    }
}
function Pc(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Yg),
        t.forEach(function(r) {
            var i = sy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(i, i))
        })
    }
}
function et(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r];
            try {
                var s = e
                  , o = t
                  , l = o;
                e: for (; l !== null; ) {
                    switch (l.tag) {
                    case 5:
                        ye = l.stateNode,
                        rt = !1;
                        break e;
                    case 3:
                        ye = l.stateNode.containerInfo,
                        rt = !0;
                        break e;
                    case 4:
                        ye = l.stateNode.containerInfo,
                        rt = !0;
                        break e
                    }
                    l = l.return
                }
                if (ye === null)
                    throw Error(M(160));
                qh(s, o, i),
                ye = null,
                rt = !1;
                var a = i.alternate;
                a !== null && (a.return = null),
                i.return = null
            } catch (u) {
                le(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Jh(t, e),
            t = t.sibling
}
function Jh(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (et(t, e),
        at(e),
        r & 4) {
            try {
                Rr(3, e, e.return),
                Os(3, e)
            } catch (x) {
                le(e, e.return, x)
            }
            try {
                Rr(5, e, e.return)
            } catch (x) {
                le(e, e.return, x)
            }
        }
        break;
    case 1:
        et(t, e),
        at(e),
        r & 512 && n !== null && In(n, n.return);
        break;
    case 5:
        if (et(t, e),
        at(e),
        r & 512 && n !== null && In(n, n.return),
        e.flags & 32) {
            var i = e.stateNode;
            try {
                Ur(i, "")
            } catch (x) {
                le(e, e.return, x)
            }
        }
        if (r & 4 && (i = e.stateNode,
        i != null)) {
            var s = e.memoizedProps
              , o = n !== null ? n.memoizedProps : s
              , l = e.type
              , a = e.updateQueue;
            if (e.updateQueue = null,
            a !== null)
                try {
                    l === "input" && s.type === "radio" && s.name != null && Sd(i, s),
                    qo(l, o);
                    var u = qo(l, s);
                    for (o = 0; o < a.length; o += 2) {
                        var c = a[o]
                          , f = a[o + 1];
                        c === "style" ? Ed(i, f) : c === "dangerouslySetInnerHTML" ? Cd(i, f) : c === "children" ? Ur(i, f) : na(i, c, f, u)
                    }
                    switch (l) {
                    case "input":
                        Qo(i, s);
                        break;
                    case "textarea":
                        kd(i, s);
                        break;
                    case "select":
                        var d = i._wrapperState.wasMultiple;
                        i._wrapperState.wasMultiple = !!s.multiple;
                        var y = s.value;
                        y != null ? Hn(i, !!s.multiple, y, !1) : d !== !!s.multiple && (s.defaultValue != null ? Hn(i, !!s.multiple, s.defaultValue, !0) : Hn(i, !!s.multiple, s.multiple ? [] : "", !1))
                    }
                    i[br] = s
                } catch (x) {
                    le(e, e.return, x)
                }
        }
        break;
    case 6:
        if (et(t, e),
        at(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(M(162));
            i = e.stateNode,
            s = e.memoizedProps;
            try {
                i.nodeValue = s
            } catch (x) {
                le(e, e.return, x)
            }
        }
        break;
    case 3:
        if (et(t, e),
        at(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                Kr(t.containerInfo)
            } catch (x) {
                le(e, e.return, x)
            }
        break;
    case 4:
        et(t, e),
        at(e);
        break;
    case 13:
        et(t, e),
        at(e),
        i = e.child,
        i.flags & 8192 && (s = i.memoizedState !== null,
        i.stateNode.isHidden = s,
        !s || i.alternate !== null && i.alternate.memoizedState !== null || (_a = ce())),
        r & 4 && Pc(e);
        break;
    case 22:
        if (c = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (Pe = (u = Pe) || c,
        et(t, e),
        Pe = u) : et(t, e),
        at(e),
        r & 8192) {
            if (u = e.memoizedState !== null,
            (e.stateNode.isHidden = u) && !c && e.mode & 1)
                for (D = e,
                c = e.child; c !== null; ) {
                    for (f = D = c; D !== null; ) {
                        switch (d = D,
                        y = d.child,
                        d.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Rr(4, d, d.return);
                            break;
                        case 1:
                            In(d, d.return);
                            var v = d.stateNode;
                            if (typeof v.componentWillUnmount == "function") {
                                r = d,
                                n = d.return;
                                try {
                                    t = r,
                                    v.props = t.memoizedProps,
                                    v.state = t.memoizedState,
                                    v.componentWillUnmount()
                                } catch (x) {
                                    le(r, n, x)
                                }
                            }
                            break;
                        case 5:
                            In(d, d.return);
                            break;
                        case 22:
                            if (d.memoizedState !== null) {
                                Mc(f);
                                continue
                            }
                        }
                        y !== null ? (y.return = d,
                        D = y) : Mc(f)
                    }
                    c = c.sibling
                }
            e: for (c = null,
            f = e; ; ) {
                if (f.tag === 5) {
                    if (c === null) {
                        c = f;
                        try {
                            i = f.stateNode,
                            u ? (s = i.style,
                            typeof s.setProperty == "function" ? s.setProperty("display", "none", "important") : s.display = "none") : (l = f.stateNode,
                            a = f.memoizedProps.style,
                            o = a != null && a.hasOwnProperty("display") ? a.display : null,
                            l.style.display = Pd("display", o))
                        } catch (x) {
                            le(e, e.return, x)
                        }
                    }
                } else if (f.tag === 6) {
                    if (c === null)
                        try {
                            f.stateNode.nodeValue = u ? "" : f.memoizedProps
                        } catch (x) {
                            le(e, e.return, x)
                        }
                } else if ((f.tag !== 22 && f.tag !== 23 || f.memoizedState === null || f === e) && f.child !== null) {
                    f.child.return = f,
                    f = f.child;
                    continue
                }
                if (f === e)
                    break e;
                for (; f.sibling === null; ) {
                    if (f.return === null || f.return === e)
                        break e;
                    c === f && (c = null),
                    f = f.return
                }
                c === f && (c = null),
                f.sibling.return = f.return,
                f = f.sibling
            }
        }
        break;
    case 19:
        et(t, e),
        at(e),
        r & 4 && Pc(e);
        break;
    case 21:
        break;
    default:
        et(t, e),
        at(e)
    }
}
function at(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Zh(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(M(160))
            }
            switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (Ur(i, ""),
                r.flags &= -33);
                var s = Cc(e);
                Nl(e, s, i);
                break;
            case 3:
            case 4:
                var o = r.stateNode.containerInfo
                  , l = Cc(e);
                Ml(e, l, o);
                break;
            default:
                throw Error(M(161))
            }
        } catch (a) {
            le(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Zg(e, t, n) {
    D = e,
    ep(e)
}
function ep(e, t, n) {
    for (var r = (e.mode & 1) !== 0; D !== null; ) {
        var i = D
          , s = i.child;
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Di;
            if (!o) {
                var l = i.alternate
                  , a = l !== null && l.memoizedState !== null || Pe;
                l = Di;
                var u = Pe;
                if (Di = o,
                (Pe = a) && !u)
                    for (D = i; D !== null; )
                        o = D,
                        a = o.child,
                        o.tag === 22 && o.memoizedState !== null ? Nc(i) : a !== null ? (a.return = o,
                        D = a) : Nc(i);
                for (; s !== null; )
                    D = s,
                    ep(s),
                    s = s.sibling;
                D = i,
                Di = l,
                Pe = u
            }
            Ec(e)
        } else
            i.subtreeFlags & 8772 && s !== null ? (s.return = i,
            D = s) : Ec(e)
    }
}
function Ec(e) {
    for (; D !== null; ) {
        var t = D;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Pe || Os(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !Pe)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = t.elementType === t.type ? n.memoizedProps : nt(t.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var s = t.updateQueue;
                        s !== null && cc(t, s, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            cc(t, o, n)
                        }
                        break;
                    case 5:
                        var l = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = l;
                            var a = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                a.autoFocus && n.focus();
                                break;
                            case "img":
                                a.src && (n.src = a.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var c = u.memoizedState;
                                if (c !== null) {
                                    var f = c.dehydrated;
                                    f !== null && Kr(f)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(M(163))
                    }
                Pe || t.flags & 512 && El(t)
            } catch (d) {
                le(t, t.return, d)
            }
        }
        if (t === e) {
            D = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function Mc(e) {
    for (; D !== null; ) {
        var t = D;
        if (t === e) {
            D = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            D = n;
            break
        }
        D = t.return
    }
}
function Nc(e) {
    for (; D !== null; ) {
        var t = D;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    Os(4, t)
                } catch (a) {
                    le(t, n, a)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = t.return;
                    try {
                        r.componentDidMount()
                    } catch (a) {
                        le(t, i, a)
                    }
                }
                var s = t.return;
                try {
                    El(t)
                } catch (a) {
                    le(t, s, a)
                }
                break;
            case 5:
                var o = t.return;
                try {
                    El(t)
                } catch (a) {
                    le(t, o, a)
                }
            }
        } catch (a) {
            le(t, t.return, a)
        }
        if (t === e) {
            D = null;
            break
        }
        var l = t.sibling;
        if (l !== null) {
            l.return = t.return,
            D = l;
            break
        }
        D = t.return
    }
}
var qg = Math.ceil
  , vs = jt.ReactCurrentDispatcher
  , Ra = jt.ReactCurrentOwner
  , Ze = jt.ReactCurrentBatchConfig
  , K = 0
  , ge = null
  , de = null
  , xe = 0
  , Fe = 0
  , Fn = Jt(0)
  , pe = 0
  , ni = null
  , xn = 0
  , Bs = 0
  , Va = 0
  , Vr = null
  , Le = null
  , _a = 0
  , nr = 1 / 0
  , yt = null
  , xs = !1
  , jl = null
  , Kt = null
  , Li = !1
  , Ot = null
  , ws = 0
  , _r = 0
  , Al = null
  , Qi = -1
  , Xi = 0;
function je() {
    return K & 6 ? ce() : Qi !== -1 ? Qi : Qi = ce()
}
function Gt(e) {
    return e.mode & 1 ? K & 2 && xe !== 0 ? xe & -xe : _g.transition !== null ? (Xi === 0 && (Xi = Fd()),
    Xi) : (e = Q,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Kd(e.type)),
    e) : 1
}
function ot(e, t, n, r) {
    if (50 < _r)
        throw _r = 0,
        Al = null,
        Error(M(185));
    ui(e, n, r),
    (!(K & 2) || e !== ge) && (e === ge && (!(K & 2) && (Bs |= n),
    pe === 4 && It(e, xe)),
    ze(e, r),
    n === 1 && K === 0 && !(t.mode & 1) && (nr = ce() + 500,
    zs && en()))
}
function ze(e, t) {
    var n = e.callbackNode;
    _0(e, t);
    var r = rs(e, e === ge ? xe : 0);
    if (r === 0)
        n !== null && Iu(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && Iu(n),
        t === 1)
            e.tag === 0 ? Vg(jc.bind(null, e)) : ch(jc.bind(null, e)),
            Ag(function() {
                !(K & 6) && en()
            }),
            n = null;
        else {
            switch (Od(r)) {
            case 1:
                n = la;
                break;
            case 4:
                n = zd;
                break;
            case 16:
                n = ns;
                break;
            case 536870912:
                n = Id;
                break;
            default:
                n = ns
            }
            n = ap(n, tp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function tp(e, t) {
    if (Qi = -1,
    Xi = 0,
    K & 6)
        throw Error(M(327));
    var n = e.callbackNode;
    if (Yn() && e.callbackNode !== n)
        return null;
    var r = rs(e, e === ge ? xe : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = Ss(e, r);
    else {
        t = r;
        var i = K;
        K |= 2;
        var s = rp();
        (ge !== e || xe !== t) && (yt = null,
        nr = ce() + 500,
        hn(e, t));
        do
            try {
                ty();
                break
            } catch (l) {
                np(e, l)
            }
        while (!0);
        wa(),
        vs.current = s,
        K = i,
        de !== null ? t = 0 : (ge = null,
        xe = 0,
        t = pe)
    }
    if (t !== 0) {
        if (t === 2 && (i = rl(e),
        i !== 0 && (r = i,
        t = Dl(e, i))),
        t === 1)
            throw n = ni,
            hn(e, 0),
            It(e, r),
            ze(e, ce()),
            n;
        if (t === 6)
            It(e, r);
        else {
            if (i = e.current.alternate,
            !(r & 30) && !Jg(i) && (t = Ss(e, r),
            t === 2 && (s = rl(e),
            s !== 0 && (r = s,
            t = Dl(e, s))),
            t === 1))
                throw n = ni,
                hn(e, 0),
                It(e, r),
                ze(e, ce()),
                n;
            switch (e.finishedWork = i,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(M(345));
            case 2:
                on(e, Le, yt);
                break;
            case 3:
                if (It(e, r),
                (r & 130023424) === r && (t = _a + 500 - ce(),
                10 < t)) {
                    if (rs(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes,
                    (i & r) !== r) {
                        je(),
                        e.pingedLanes |= e.suspendedLanes & i;
                        break
                    }
                    e.timeoutHandle = fl(on.bind(null, e, Le, yt), t);
                    break
                }
                on(e, Le, yt);
                break;
            case 4:
                if (It(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                i = -1; 0 < r; ) {
                    var o = 31 - st(r);
                    s = 1 << o,
                    o = t[o],
                    o > i && (i = o),
                    r &= ~s
                }
                if (r = i,
                r = ce() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qg(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = fl(on.bind(null, e, Le, yt), r);
                    break
                }
                on(e, Le, yt);
                break;
            case 5:
                on(e, Le, yt);
                break;
            default:
                throw Error(M(329))
            }
        }
    }
    return ze(e, ce()),
    e.callbackNode === n ? tp.bind(null, e) : null
}
function Dl(e, t) {
    var n = Vr;
    return e.current.memoizedState.isDehydrated && (hn(e, t).flags |= 256),
    e = Ss(e, t),
    e !== 2 && (t = Le,
    Le = n,
    t !== null && Ll(t)),
    e
}
function Ll(e) {
    Le === null ? Le = e : Le.push.apply(Le, e)
}
function Jg(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r]
                      , s = i.getSnapshot;
                    i = i.value;
                    try {
                        if (!lt(s(), i))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function It(e, t) {
    for (t &= ~Va,
    t &= ~Bs,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - st(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function jc(e) {
    if (K & 6)
        throw Error(M(327));
    Yn();
    var t = rs(e, 0);
    if (!(t & 1))
        return ze(e, ce()),
        null;
    var n = Ss(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = rl(e);
        r !== 0 && (t = r,
        n = Dl(e, r))
    }
    if (n === 1)
        throw n = ni,
        hn(e, 0),
        It(e, t),
        ze(e, ce()),
        n;
    if (n === 6)
        throw Error(M(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    on(e, Le, yt),
    ze(e, ce()),
    null
}
function za(e, t) {
    var n = K;
    K |= 1;
    try {
        return e(t)
    } finally {
        K = n,
        K === 0 && (nr = ce() + 500,
        zs && en())
    }
}
function wn(e) {
    Ot !== null && Ot.tag === 0 && !(K & 6) && Yn();
    var t = K;
    K |= 1;
    var n = Ze.transition
      , r = Q;
    try {
        if (Ze.transition = null,
        Q = 1,
        e)
            return e()
    } finally {
        Q = r,
        Ze.transition = n,
        K = t,
        !(K & 6) && en()
    }
}
function Ia() {
    Fe = Fn.current,
    Z(Fn)
}
function hn(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    jg(n)),
    de !== null)
        for (n = de.return; n !== null; ) {
            var r = n;
            switch (ya(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && as();
                break;
            case 3:
                er(),
                Z(Ve),
                Z(Me),
                Ea();
                break;
            case 5:
                Pa(r);
                break;
            case 4:
                er();
                break;
            case 13:
                Z(te);
                break;
            case 19:
                Z(te);
                break;
            case 10:
                Sa(r.type._context);
                break;
            case 22:
            case 23:
                Ia()
            }
            n = n.return
        }
    if (ge = e,
    de = e = Qt(e.current, null),
    xe = Fe = t,
    pe = 0,
    ni = null,
    Va = Bs = xn = 0,
    Le = Vr = null,
    cn !== null) {
        for (t = 0; t < cn.length; t++)
            if (n = cn[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var i = r.next
                  , s = n.pending;
                if (s !== null) {
                    var o = s.next;
                    s.next = i,
                    r.next = o
                }
                n.pending = r
            }
        cn = null
    }
    return e
}
function np(e, t) {
    do {
        var n = de;
        try {
            if (wa(),
            Hi.current = ys,
            gs) {
                for (var r = re.memoizedState; r !== null; ) {
                    var i = r.queue;
                    i !== null && (i.pending = null),
                    r = r.next
                }
                gs = !1
            }
            if (vn = 0,
            me = he = re = null,
            Lr = !1,
            Jr = 0,
            Ra.current = null,
            n === null || n.return === null) {
                pe = 1,
                ni = t,
                de = null;
                break
            }
            e: {
                var s = e
                  , o = n.return
                  , l = n
                  , a = t;
                if (t = xe,
                l.flags |= 32768,
                a !== null && typeof a == "object" && typeof a.then == "function") {
                    var u = a
                      , c = l
                      , f = c.tag;
                    if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
                        var d = c.alternate;
                        d ? (c.updateQueue = d.updateQueue,
                        c.memoizedState = d.memoizedState,
                        c.lanes = d.lanes) : (c.updateQueue = null,
                        c.memoizedState = null)
                    }
                    var y = gc(o);
                    if (y !== null) {
                        y.flags &= -257,
                        yc(y, o, l, s, t),
                        y.mode & 1 && mc(s, u, t),
                        t = y,
                        a = u;
                        var v = t.updateQueue;
                        if (v === null) {
                            var x = new Set;
                            x.add(a),
                            t.updateQueue = x
                        } else
                            v.add(a);
                        break e
                    } else {
                        if (!(t & 1)) {
                            mc(s, u, t),
                            Fa();
                            break e
                        }
                        a = Error(M(426))
                    }
                } else if (ee && l.mode & 1) {
                    var T = gc(o);
                    if (T !== null) {
                        !(T.flags & 65536) && (T.flags |= 256),
                        yc(T, o, l, s, t),
                        va(tr(a, l));
                        break e
                    }
                }
                s = a = tr(a, l),
                pe !== 4 && (pe = 2),
                Vr === null ? Vr = [s] : Vr.push(s),
                s = o;
                do {
                    switch (s.tag) {
                    case 3:
                        s.flags |= 65536,
                        t &= -t,
                        s.lanes |= t;
                        var p = Oh(s, a, t);
                        uc(s, p);
                        break e;
                    case 1:
                        l = a;
                        var h = s.type
                          , m = s.stateNode;
                        if (!(s.flags & 128) && (typeof h.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Kt === null || !Kt.has(m)))) {
                            s.flags |= 65536,
                            t &= -t,
                            s.lanes |= t;
                            var w = Bh(s, l, t);
                            uc(s, w);
                            break e
                        }
                    }
                    s = s.return
                } while (s !== null)
            }
            sp(n)
        } catch (k) {
            t = k,
            de === n && n !== null && (de = n = n.return);
            continue
        }
        break
    } while (!0)
}
function rp() {
    var e = vs.current;
    return vs.current = ys,
    e === null ? ys : e
}
function Fa() {
    (pe === 0 || pe === 3 || pe === 2) && (pe = 4),
    ge === null || !(xn & 268435455) && !(Bs & 268435455) || It(ge, xe)
}
function Ss(e, t) {
    var n = K;
    K |= 2;
    var r = rp();
    (ge !== e || xe !== t) && (yt = null,
    hn(e, t));
    do
        try {
            ey();
            break
        } catch (i) {
            np(e, i)
        }
    while (!0);
    if (wa(),
    K = n,
    vs.current = r,
    de !== null)
        throw Error(M(261));
    return ge = null,
    xe = 0,
    pe
}
function ey() {
    for (; de !== null; )
        ip(de)
}
function ty() {
    for (; de !== null && !E0(); )
        ip(de)
}
function ip(e) {
    var t = lp(e.alternate, e, Fe);
    e.memoizedProps = e.pendingProps,
    t === null ? sp(e) : de = t,
    Ra.current = null
}
function sp(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Xg(n, t),
            n !== null) {
                n.flags &= 32767,
                de = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                pe = 6,
                de = null;
                return
            }
        } else if (n = Qg(n, t, Fe),
        n !== null) {
            de = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            de = t;
            return
        }
        de = t = e
    } while (t !== null);
    pe === 0 && (pe = 5)
}
function on(e, t, n) {
    var r = Q
      , i = Ze.transition;
    try {
        Ze.transition = null,
        Q = 1,
        ny(e, t, n, r)
    } finally {
        Ze.transition = i,
        Q = r
    }
    return null
}
function ny(e, t, n, r) {
    do
        Yn();
    while (Ot !== null);
    if (K & 6)
        throw Error(M(327));
    n = e.finishedWork;
    var i = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(M(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var s = n.lanes | n.childLanes;
    if (z0(e, s),
    e === ge && (de = ge = null,
    xe = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Li || (Li = !0,
    ap(ns, function() {
        return Yn(),
        null
    })),
    s = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || s) {
        s = Ze.transition,
        Ze.transition = null;
        var o = Q;
        Q = 1;
        var l = K;
        K |= 4,
        Ra.current = null,
        bg(e, n),
        Jh(n, e),
        kg(ul),
        is = !!al,
        ul = al = null,
        e.current = n,
        Zg(n),
        M0(),
        K = l,
        Q = o,
        Ze.transition = s
    } else
        e.current = n;
    if (Li && (Li = !1,
    Ot = e,
    ws = i),
    s = e.pendingLanes,
    s === 0 && (Kt = null),
    A0(n.stateNode),
    ze(e, ce()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            i = t[n],
            r(i.value, {
                componentStack: i.stack,
                digest: i.digest
            });
    if (xs)
        throw xs = !1,
        e = jl,
        jl = null,
        e;
    return ws & 1 && e.tag !== 0 && Yn(),
    s = e.pendingLanes,
    s & 1 ? e === Al ? _r++ : (_r = 0,
    Al = e) : _r = 0,
    en(),
    null
}
function Yn() {
    if (Ot !== null) {
        var e = Od(ws)
          , t = Ze.transition
          , n = Q;
        try {
            if (Ze.transition = null,
            Q = 16 > e ? 16 : e,
            Ot === null)
                var r = !1;
            else {
                if (e = Ot,
                Ot = null,
                ws = 0,
                K & 6)
                    throw Error(M(331));
                var i = K;
                for (K |= 4,
                D = e.current; D !== null; ) {
                    var s = D
                      , o = s.child;
                    if (D.flags & 16) {
                        var l = s.deletions;
                        if (l !== null) {
                            for (var a = 0; a < l.length; a++) {
                                var u = l[a];
                                for (D = u; D !== null; ) {
                                    var c = D;
                                    switch (c.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Rr(8, c, s)
                                    }
                                    var f = c.child;
                                    if (f !== null)
                                        f.return = c,
                                        D = f;
                                    else
                                        for (; D !== null; ) {
                                            c = D;
                                            var d = c.sibling
                                              , y = c.return;
                                            if (bh(c),
                                            c === u) {
                                                D = null;
                                                break
                                            }
                                            if (d !== null) {
                                                d.return = y,
                                                D = d;
                                                break
                                            }
                                            D = y
                                        }
                                }
                            }
                            var v = s.alternate;
                            if (v !== null) {
                                var x = v.child;
                                if (x !== null) {
                                    v.child = null;
                                    do {
                                        var T = x.sibling;
                                        x.sibling = null,
                                        x = T
                                    } while (x !== null)
                                }
                            }
                            D = s
                        }
                    }
                    if (s.subtreeFlags & 2064 && o !== null)
                        o.return = s,
                        D = o;
                    else
                        e: for (; D !== null; ) {
                            if (s = D,
                            s.flags & 2048)
                                switch (s.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Rr(9, s, s.return)
                                }
                            var p = s.sibling;
                            if (p !== null) {
                                p.return = s.return,
                                D = p;
                                break e
                            }
                            D = s.return
                        }
                }
                var h = e.current;
                for (D = h; D !== null; ) {
                    o = D;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null)
                        m.return = o,
                        D = m;
                    else
                        e: for (o = h; D !== null; ) {
                            if (l = D,
                            l.flags & 2048)
                                try {
                                    switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Os(9, l)
                                    }
                                } catch (k) {
                                    le(l, l.return, k)
                                }
                            if (l === o) {
                                D = null;
                                break e
                            }
                            var w = l.sibling;
                            if (w !== null) {
                                w.return = l.return,
                                D = w;
                                break e
                            }
                            D = l.return
                        }
                }
                if (K = i,
                en(),
                dt && typeof dt.onPostCommitFiberRoot == "function")
                    try {
                        dt.onPostCommitFiberRoot(Ds, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Q = n,
            Ze.transition = t
        }
    }
    return !1
}
function Ac(e, t, n) {
    t = tr(n, t),
    t = Oh(e, t, 1),
    e = Ht(e, t, 1),
    t = je(),
    e !== null && (ui(e, 1, t),
    ze(e, t))
}
function le(e, t, n) {
    if (e.tag === 3)
        Ac(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                Ac(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Kt === null || !Kt.has(r))) {
                    e = tr(n, e),
                    e = Bh(t, e, 1),
                    t = Ht(t, e, 1),
                    e = je(),
                    t !== null && (ui(t, 1, e),
                    ze(t, e));
                    break
                }
            }
            t = t.return
        }
}
function ry(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = je(),
    e.pingedLanes |= e.suspendedLanes & n,
    ge === e && (xe & n) === n && (pe === 4 || pe === 3 && (xe & 130023424) === xe && 500 > ce() - _a ? hn(e, 0) : Va |= n),
    ze(e, t)
}
function op(e, t) {
    t === 0 && (e.mode & 1 ? (t = ki,
    ki <<= 1,
    !(ki & 130023424) && (ki = 4194304)) : t = 1);
    var n = je();
    e = Et(e, t),
    e !== null && (ui(e, t, n),
    ze(e, n))
}
function iy(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    op(e, n)
}
function sy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(M(314))
    }
    r !== null && r.delete(t),
    op(e, n)
}
var lp;
lp = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ve.current)
            Re = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Re = !1,
                Gg(e, t, n);
            Re = !!(e.flags & 131072)
        }
    else
        Re = !1,
        ee && t.flags & 1048576 && fh(t, fs, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Gi(e, t),
        e = t.pendingProps;
        var i = Zn(t, Me.current);
        Xn(t, n),
        i = Na(null, t, r, e, i, n);
        var s = ja();
        return t.flags |= 1,
        typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        _e(r) ? (s = !0,
        us(t)) : s = !1,
        t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null,
        Ta(t),
        i.updater = Fs,
        t.stateNode = i,
        i._reactInternals = t,
        vl(t, r, e, n),
        t = Sl(null, t, r, !0, s, n)) : (t.tag = 0,
        ee && s && ga(t),
        Ne(null, t, i, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Gi(e, t),
            e = t.pendingProps,
            i = r._init,
            r = i(r._payload),
            t.type = r,
            i = t.tag = ly(r),
            e = nt(r, e),
            i) {
            case 0:
                t = wl(null, t, r, e, n);
                break e;
            case 1:
                t = wc(null, t, r, e, n);
                break e;
            case 11:
                t = vc(null, t, r, e, n);
                break e;
            case 14:
                t = xc(null, t, r, nt(r.type, e), n);
                break e
            }
            throw Error(M(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : nt(r, i),
        wl(e, t, r, i, n);
    case 1:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : nt(r, i),
        wc(e, t, r, i, n);
    case 3:
        e: {
            if (Hh(t),
            e === null)
                throw Error(M(387));
            r = t.pendingProps,
            s = t.memoizedState,
            i = s.element,
            yh(e, t),
            ps(t, r, null, n);
            var o = t.memoizedState;
            if (r = o.element,
            s.isDehydrated)
                if (s = {
                    element: r,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                t.updateQueue.baseState = s,
                t.memoizedState = s,
                t.flags & 256) {
                    i = tr(Error(M(423)), t),
                    t = Sc(e, t, r, n, i);
                    break e
                } else if (r !== i) {
                    i = tr(Error(M(424)), t),
                    t = Sc(e, t, r, n, i);
                    break e
                } else
                    for (Oe = Wt(t.stateNode.containerInfo.firstChild),
                    Be = t,
                    ee = !0,
                    it = null,
                    n = mh(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (qn(),
                r === i) {
                    t = Mt(e, t, n);
                    break e
                }
                Ne(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return vh(t),
        e === null && ml(t),
        r = t.type,
        i = t.pendingProps,
        s = e !== null ? e.memoizedProps : null,
        o = i.children,
        cl(r, i) ? o = null : s !== null && cl(r, s) && (t.flags |= 32),
        Wh(e, t),
        Ne(e, t, o, n),
        t.child;
    case 6:
        return e === null && ml(t),
        null;
    case 13:
        return Kh(e, t, n);
    case 4:
        return Ca(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Jn(t, null, r, n) : Ne(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : nt(r, i),
        vc(e, t, r, i, n);
    case 7:
        return Ne(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Ne(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Ne(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            i = t.pendingProps,
            s = t.memoizedProps,
            o = i.value,
            Y(ds, r._currentValue),
            r._currentValue = o,
            s !== null)
                if (lt(s.value, o)) {
                    if (s.children === i.children && !Ve.current) {
                        t = Mt(e, t, n);
                        break e
                    }
                } else
                    for (s = t.child,
                    s !== null && (s.return = t); s !== null; ) {
                        var l = s.dependencies;
                        if (l !== null) {
                            o = s.child;
                            for (var a = l.firstContext; a !== null; ) {
                                if (a.context === r) {
                                    if (s.tag === 1) {
                                        a = St(-1, n & -n),
                                        a.tag = 2;
                                        var u = s.updateQueue;
                                        if (u !== null) {
                                            u = u.shared;
                                            var c = u.pending;
                                            c === null ? a.next = a : (a.next = c.next,
                                            c.next = a),
                                            u.pending = a
                                        }
                                    }
                                    s.lanes |= n,
                                    a = s.alternate,
                                    a !== null && (a.lanes |= n),
                                    gl(s.return, n, t),
                                    l.lanes |= n;
                                    break
                                }
                                a = a.next
                            }
                        } else if (s.tag === 10)
                            o = s.type === t.type ? null : s.child;
                        else if (s.tag === 18) {
                            if (o = s.return,
                            o === null)
                                throw Error(M(341));
                            o.lanes |= n,
                            l = o.alternate,
                            l !== null && (l.lanes |= n),
                            gl(o, n, t),
                            o = s.sibling
                        } else
                            o = s.child;
                        if (o !== null)
                            o.return = s;
                        else
                            for (o = s; o !== null; ) {
                                if (o === t) {
                                    o = null;
                                    break
                                }
                                if (s = o.sibling,
                                s !== null) {
                                    s.return = o.return,
                                    o = s;
                                    break
                                }
                                o = o.return
                            }
                        s = o
                    }
            Ne(e, t, i.children, n),
            t = t.child
        }
        return t;
    case 9:
        return i = t.type,
        r = t.pendingProps.children,
        Xn(t, n),
        i = qe(i),
        r = r(i),
        t.flags |= 1,
        Ne(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        i = nt(r, t.pendingProps),
        i = nt(r.type, i),
        xc(e, t, r, i, n);
    case 15:
        return Uh(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        i = t.pendingProps,
        i = t.elementType === r ? i : nt(r, i),
        Gi(e, t),
        t.tag = 1,
        _e(r) ? (e = !0,
        us(t)) : e = !1,
        Xn(t, n),
        Fh(t, r, i),
        vl(t, r, i, n),
        Sl(null, t, r, !0, e, n);
    case 19:
        return Gh(e, t, n);
    case 22:
        return $h(e, t, n)
    }
    throw Error(M(156, t.tag))
}
;
function ap(e, t) {
    return _d(e, t)
}
function oy(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function be(e, t, n, r) {
    return new oy(e,t,n,r)
}
function Oa(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function ly(e) {
    if (typeof e == "function")
        return Oa(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === ia)
            return 11;
        if (e === sa)
            return 14
    }
    return 2
}
function Qt(e, t) {
    var n = e.alternate;
    return n === null ? (n = be(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Yi(e, t, n, r, i, s) {
    var o = 2;
    if (r = e,
    typeof e == "function")
        Oa(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case Nn:
            return pn(n.children, i, s, t);
        case ra:
            o = 8,
            i |= 8;
            break;
        case $o:
            return e = be(12, n, t, i | 2),
            e.elementType = $o,
            e.lanes = s,
            e;
        case Wo:
            return e = be(13, n, t, i),
            e.elementType = Wo,
            e.lanes = s,
            e;
        case Ho:
            return e = be(19, n, t, i),
            e.elementType = Ho,
            e.lanes = s,
            e;
        case vd:
            return Us(n, i, s, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case gd:
                    o = 10;
                    break e;
                case yd:
                    o = 9;
                    break e;
                case ia:
                    o = 11;
                    break e;
                case sa:
                    o = 14;
                    break e;
                case Vt:
                    o = 16,
                    r = null;
                    break e
                }
            throw Error(M(130, e == null ? e : typeof e, ""))
        }
    return t = be(o, n, t, i),
    t.elementType = e,
    t.type = r,
    t.lanes = s,
    t
}
function pn(e, t, n, r) {
    return e = be(7, e, r, t),
    e.lanes = n,
    e
}
function Us(e, t, n, r) {
    return e = be(22, e, r, t),
    e.elementType = vd,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function To(e, t, n) {
    return e = be(6, e, null, t),
    e.lanes = n,
    e
}
function Co(e, t, n) {
    return t = be(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function ay(e, t, n, r, i) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = ro(0),
    this.expirationTimes = ro(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = ro(0),
    this.identifierPrefix = r,
    this.onRecoverableError = i,
    this.mutableSourceEagerHydrationData = null
}
function Ba(e, t, n, r, i, s, o, l, a) {
    return e = new ay(e,t,n,l,a),
    t === 1 ? (t = 1,
    s === !0 && (t |= 8)) : t = 0,
    s = be(3, null, null, t),
    e.current = s,
    s.stateNode = e,
    s.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    Ta(s),
    e
}
function uy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Mn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function up(e) {
    if (!e)
        return Yt;
    e = e._reactInternals;
    e: {
        if (kn(e) !== e || e.tag !== 1)
            throw Error(M(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (_e(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(M(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (_e(n))
            return uh(e, n, t)
    }
    return t
}
function cp(e, t, n, r, i, s, o, l, a) {
    return e = Ba(n, r, !0, e, i, s, o, l, a),
    e.context = up(null),
    n = e.current,
    r = je(),
    i = Gt(n),
    s = St(r, i),
    s.callback = t ?? null,
    Ht(n, s, i),
    e.current.lanes = i,
    ui(e, i, r),
    ze(e, r),
    e
}
function $s(e, t, n, r) {
    var i = t.current
      , s = je()
      , o = Gt(i);
    return n = up(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = St(s, o),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = Ht(i, t, o),
    e !== null && (ot(e, i, o, s),
    Wi(e, i, o)),
    o
}
function ks(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function Dc(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Ua(e, t) {
    Dc(e, t),
    (e = e.alternate) && Dc(e, t)
}
function cy() {
    return null
}
var fp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function $a(e) {
    this._internalRoot = e
}
Ws.prototype.render = $a.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(M(409));
    $s(e, t, null, null)
}
;
Ws.prototype.unmount = $a.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wn(function() {
            $s(null, e, null, null)
        }),
        t[Pt] = null
    }
}
;
function Ws(e) {
    this._internalRoot = e
}
Ws.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = $d();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < zt.length && t !== 0 && t < zt[n].priority; n++)
            ;
        zt.splice(n, 0, e),
        n === 0 && Hd(e)
    }
}
;
function Wa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Hs(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function Lc() {}
function fy(e, t, n, r, i) {
    if (i) {
        if (typeof r == "function") {
            var s = r;
            r = function() {
                var u = ks(o);
                s.call(u)
            }
        }
        var o = cp(t, r, e, 0, null, !1, !1, "", Lc);
        return e._reactRootContainer = o,
        e[Pt] = o.current,
        Xr(e.nodeType === 8 ? e.parentNode : e),
        wn(),
        o
    }
    for (; i = e.lastChild; )
        e.removeChild(i);
    if (typeof r == "function") {
        var l = r;
        r = function() {
            var u = ks(a);
            l.call(u)
        }
    }
    var a = Ba(e, 0, !1, null, null, !1, !1, "", Lc);
    return e._reactRootContainer = a,
    e[Pt] = a.current,
    Xr(e.nodeType === 8 ? e.parentNode : e),
    wn(function() {
        $s(t, a, n, r)
    }),
    a
}
function Ks(e, t, n, r, i) {
    var s = n._reactRootContainer;
    if (s) {
        var o = s;
        if (typeof i == "function") {
            var l = i;
            i = function() {
                var a = ks(o);
                l.call(a)
            }
        }
        $s(t, o, e, i)
    } else
        o = fy(n, t, e, i, r);
    return ks(o)
}
Bd = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = kr(t.pendingLanes);
            n !== 0 && (aa(t, n | 1),
            ze(t, ce()),
            !(K & 6) && (nr = ce() + 500,
            en()))
        }
        break;
    case 13:
        wn(function() {
            var r = Et(e, 1);
            if (r !== null) {
                var i = je();
                ot(r, e, 1, i)
            }
        }),
        Ua(e, 1)
    }
}
;
ua = function(e) {
    if (e.tag === 13) {
        var t = Et(e, 134217728);
        if (t !== null) {
            var n = je();
            ot(t, e, 134217728, n)
        }
        Ua(e, 134217728)
    }
}
;
Ud = function(e) {
    if (e.tag === 13) {
        var t = Gt(e)
          , n = Et(e, t);
        if (n !== null) {
            var r = je();
            ot(n, e, t, r)
        }
        Ua(e, t)
    }
}
;
$d = function() {
    return Q
}
;
Wd = function(e, t) {
    var n = Q;
    try {
        return Q = e,
        t()
    } finally {
        Q = n
    }
}
;
el = function(e, t, n) {
    switch (t) {
    case "input":
        if (Qo(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var i = _s(r);
                    if (!i)
                        throw Error(M(90));
                    wd(r),
                    Qo(r, i)
                }
            }
        }
        break;
    case "textarea":
        kd(e, n);
        break;
    case "select":
        t = n.value,
        t != null && Hn(e, !!n.multiple, t, !1)
    }
}
;
jd = za;
Ad = wn;
var dy = {
    usingClientEntryPoint: !1,
    Events: [fi, Ln, _s, Md, Nd, za]
}
  , vr = {
    findFiberByHostInstance: un,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , hy = {
    bundleType: vr.bundleType,
    version: vr.version,
    rendererPackageName: vr.rendererPackageName,
    rendererConfig: vr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: jt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Rd(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: vr.findFiberByHostInstance || cy,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ri = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ri.isDisabled && Ri.supportsFiber)
        try {
            Ds = Ri.inject(hy),
            dt = Ri
        } catch {}
}
He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dy;
He.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Wa(t))
        throw Error(M(200));
    return uy(e, t, null, n)
}
;
He.createRoot = function(e, t) {
    if (!Wa(e))
        throw Error(M(299));
    var n = !1
      , r = ""
      , i = fp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    t = Ba(e, 1, !1, null, null, n, !1, r, i),
    e[Pt] = t.current,
    Xr(e.nodeType === 8 ? e.parentNode : e),
    new $a(t)
}
;
He.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(M(188)) : (e = Object.keys(e).join(","),
        Error(M(268, e)));
    return e = Rd(t),
    e = e === null ? null : e.stateNode,
    e
}
;
He.flushSync = function(e) {
    return wn(e)
}
;
He.hydrate = function(e, t, n) {
    if (!Hs(t))
        throw Error(M(200));
    return Ks(null, e, t, !0, n)
}
;
He.hydrateRoot = function(e, t, n) {
    if (!Wa(e))
        throw Error(M(405));
    var r = n != null && n.hydratedSources || null
      , i = !1
      , s = ""
      , o = fp;
    if (n != null && (n.unstable_strictMode === !0 && (i = !0),
    n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    t = cp(t, null, e, 1, n ?? null, i, !1, s, o),
    e[Pt] = t.current,
    Xr(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            i = n._getVersion,
            i = i(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, i] : t.mutableSourceEagerHydrationData.push(n, i);
    return new Ws(t)
}
;
He.render = function(e, t, n) {
    if (!Hs(t))
        throw Error(M(200));
    return Ks(null, e, t, !1, n)
}
;
He.unmountComponentAtNode = function(e) {
    if (!Hs(e))
        throw Error(M(40));
    return e._reactRootContainer ? (wn(function() {
        Ks(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[Pt] = null
        })
    }),
    !0) : !1
}
;
He.unstable_batchedUpdates = za;
He.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Hs(n))
        throw Error(M(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(M(38));
    return Ks(e, t, n, !1, r)
}
;
He.version = "18.3.1-next-f1338f8080-20240426";
function dp() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dp)
        } catch (e) {
            console.error(e)
        }
}
dp(),
dd.exports = He;
var py = dd.exports, hp, Rc = py;
hp = Rc.createRoot,
Rc.hydrateRoot;
const my = "modulepreload"
  , gy = function(e) {
    return "/" + e
}
  , Vc = {}
  , yy = function(t, n, r) {
    let i = Promise.resolve();
    if (n && n.length > 0) {
        document.getElementsByTagName("link");
        const o = document.querySelector("meta[property=csp-nonce]")
          , l = (o == null ? void 0 : o.nonce) || (o == null ? void 0 : o.getAttribute("nonce"));
        i = Promise.allSettled(n.map(a => {
            if (a = gy(a),
            a in Vc)
                return;
            Vc[a] = !0;
            const u = a.endsWith(".css")
              , c = u ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${a}"]${c}`))
                return;
            const f = document.createElement("link");
            if (f.rel = u ? "stylesheet" : my,
            u || (f.as = "script"),
            f.crossOrigin = "",
            f.href = a,
            l && f.setAttribute("nonce", l),
            document.head.appendChild(f),
            u)
                return new Promise( (d, y) => {
                    f.addEventListener("load", d),
                    f.addEventListener("error", () => y(new Error(`Unable to preload CSS for ${a}`)))
                }
                )
        }
        ))
    }
    function s(o) {
        const l = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (l.payload = o,
        window.dispatchEvent(l),
        !l.defaultPrevented)
            throw o
    }
    return i.then(o => {
        for (const l of o || [])
            l.status === "rejected" && s(l.reason);
        return t().catch(s)
    }
    )
}
  , Ha = S.createContext({});
function Ka(e) {
    const t = S.useRef(null);
    return t.current === null && (t.current = e()),
    t.current
}
const Gs = S.createContext(null)
  , Ga = S.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
});
class vy extends S.Component {
    getSnapshotBeforeUpdate(t) {
        const n = this.props.childRef.current;
        if (n && t.isPresent && !this.props.isPresent) {
            const r = this.props.sizeRef.current;
            r.height = n.offsetHeight || 0,
            r.width = n.offsetWidth || 0,
            r.top = n.offsetTop,
            r.left = n.offsetLeft
        }
        return null
    }
    componentDidUpdate() {}
    render() {
        return this.props.children
    }
}
function xy({children: e, isPresent: t}) {
    const n = S.useId()
      , r = S.useRef(null)
      , i = S.useRef({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    })
      , {nonce: s} = S.useContext(Ga);
    return S.useInsertionEffect( () => {
        const {width: o, height: l, top: a, left: u} = i.current;
        if (t || !r.current || !o || !l)
            return;
        r.current.dataset.motionPopId = n;
        const c = document.createElement("style");
        return s && (c.nonce = s),
        document.head.appendChild(c),
        c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${o}px !important;
            height: ${l}px !important;
            top: ${a}px !important;
            left: ${u}px !important;
          }
        `),
        () => {
            document.head.removeChild(c)
        }
    }
    , [t]),
    g.jsx(vy, {
        isPresent: t,
        childRef: r,
        sizeRef: i,
        children: S.cloneElement(e, {
            ref: r
        })
    })
}
const wy = ({children: e, initial: t, isPresent: n, onExitComplete: r, custom: i, presenceAffectsLayout: s, mode: o}) => {
    const l = Ka(Sy)
      , a = S.useId()
      , u = S.useCallback(f => {
        l.set(f, !0);
        for (const d of l.values())
            if (!d)
                return;
        r && r()
    }
    , [l, r])
      , c = S.useMemo( () => ({
        id: a,
        initial: t,
        isPresent: n,
        custom: i,
        onExitComplete: u,
        register: f => (l.set(f, !1),
        () => l.delete(f))
    }), s ? [Math.random(), u] : [n, u]);
    return S.useMemo( () => {
        l.forEach( (f, d) => l.set(d, !1))
    }
    , [n]),
    S.useEffect( () => {
        !n && !l.size && r && r()
    }
    , [n]),
    o === "popLayout" && (e = g.jsx(xy, {
        isPresent: n,
        children: e
    })),
    g.jsx(Gs.Provider, {
        value: c,
        children: e
    })
}
;
function Sy() {
    return new Map
}
function pp(e=!0) {
    const t = S.useContext(Gs);
    if (t === null)
        return [!0, null];
    const {isPresent: n, onExitComplete: r, register: i} = t
      , s = S.useId();
    S.useEffect( () => {
        e && i(s)
    }
    , [e]);
    const o = S.useCallback( () => e && r && r(s), [s, r, e]);
    return !n && r ? [!1, o] : [!0]
}
const Vi = e => e.key || "";
function _c(e) {
    const t = [];
    return S.Children.forEach(e, n => {
        S.isValidElement(n) && t.push(n)
    }
    ),
    t
}
const Qa = typeof window < "u"
  , mp = Qa ? S.useLayoutEffect : S.useEffect
  , zc = ({children: e, custom: t, initial: n=!0, onExitComplete: r, presenceAffectsLayout: i=!0, mode: s="sync", propagate: o=!1}) => {
    const [l,a] = pp(o)
      , u = S.useMemo( () => _c(e), [e])
      , c = o && !l ? [] : u.map(Vi)
      , f = S.useRef(!0)
      , d = S.useRef(u)
      , y = Ka( () => new Map)
      , [v,x] = S.useState(u)
      , [T,p] = S.useState(u);
    mp( () => {
        f.current = !1,
        d.current = u;
        for (let w = 0; w < T.length; w++) {
            const k = Vi(T[w]);
            c.includes(k) ? y.delete(k) : y.get(k) !== !0 && y.set(k, !1)
        }
    }
    , [T, c.length, c.join("-")]);
    const h = [];
    if (u !== v) {
        let w = [...u];
        for (let k = 0; k < T.length; k++) {
            const P = T[k]
              , N = Vi(P);
            c.includes(N) || (w.splice(k, 0, P),
            h.push(P))
        }
        s === "wait" && h.length && (w = h),
        p(_c(w)),
        x(u);
        return
    }
    const {forceRender: m} = S.useContext(Ha);
    return g.jsx(g.Fragment, {
        children: T.map(w => {
            const k = Vi(w)
              , P = o && !l ? !1 : u === T || c.includes(k)
              , N = () => {
                if (y.has(k))
                    y.set(k, !0);
                else
                    return;
                let C = !0;
                y.forEach(I => {
                    I || (C = !1)
                }
                ),
                C && (m == null || m(),
                p(d.current),
                o && (a == null || a()),
                r && r())
            }
            ;
            return g.jsx(wy, {
                isPresent: P,
                initial: !f.current || n ? void 0 : !1,
                custom: P ? void 0 : t,
                presenceAffectsLayout: i,
                mode: s,
                onExitComplete: P ? void 0 : N,
                children: w
            }, k)
        }
        )
    })
}
  , Ue = e => e;
let Rl = Ue;
function Xa(e) {
    let t;
    return () => (t === void 0 && (t = e()),
    t)
}
const rr = (e, t, n) => {
    const r = t - e;
    return r === 0 ? 1 : (n - e) / r
}
  , kt = e => e * 1e3
  , Tt = e => e / 1e3
  , ky = {
    skipAnimations: !1,
    useManualTiming: !1
};
function Ty(e) {
    let t = new Set
      , n = new Set
      , r = !1
      , i = !1;
    const s = new WeakSet;
    let o = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    };
    function l(u) {
        s.has(u) && (a.schedule(u),
        e()),
        u(o)
    }
    const a = {
        schedule: (u, c=!1, f=!1) => {
            const y = f && r ? t : n;
            return c && s.add(u),
            y.has(u) || y.add(u),
            u
        }
        ,
        cancel: u => {
            n.delete(u),
            s.delete(u)
        }
        ,
        process: u => {
            if (o = u,
            r) {
                i = !0;
                return
            }
            r = !0,
            [t,n] = [n, t],
            t.forEach(l),
            t.clear(),
            r = !1,
            i && (i = !1,
            a.process(u))
        }
    };
    return a
}
const _i = ["read", "resolveKeyframes", "update", "preRender", "render", "postRender"]
  , Cy = 40;
function gp(e, t) {
    let n = !1
      , r = !0;
    const i = {
        delta: 0,
        timestamp: 0,
        isProcessing: !1
    }
      , s = () => n = !0
      , o = _i.reduce( (p, h) => (p[h] = Ty(s),
    p), {})
      , {read: l, resolveKeyframes: a, update: u, preRender: c, render: f, postRender: d} = o
      , y = () => {
        const p = performance.now();
        n = !1,
        i.delta = r ? 1e3 / 60 : Math.max(Math.min(p - i.timestamp, Cy), 1),
        i.timestamp = p,
        i.isProcessing = !0,
        l.process(i),
        a.process(i),
        u.process(i),
        c.process(i),
        f.process(i),
        d.process(i),
        i.isProcessing = !1,
        n && t && (r = !1,
        e(y))
    }
      , v = () => {
        n = !0,
        r = !0,
        i.isProcessing || e(y)
    }
    ;
    return {
        schedule: _i.reduce( (p, h) => {
            const m = o[h];
            return p[h] = (w, k=!1, P=!1) => (n || v(),
            m.schedule(w, k, P)),
            p
        }
        , {}),
        cancel: p => {
            for (let h = 0; h < _i.length; h++)
                o[_i[h]].cancel(p)
        }
        ,
        state: i,
        steps: o
    }
}
const {schedule: q, cancel: bt, state: ve, steps: Po} = gp(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ue, !0)
  , yp = S.createContext({
    strict: !1
})
  , Ic = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
}
  , ir = {};
for (const e in Ic)
    ir[e] = {
        isEnabled: t => Ic[e].some(n => !!t[n])
    };
function Py(e) {
    for (const t in e)
        ir[t] = {
            ...ir[t],
            ...e[t]
        }
}
const Ey = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "ignoreStrict", "viewport"]);
function Ts(e) {
    return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || Ey.has(e)
}
let vp = e => !Ts(e);
function My(e) {
    e && (vp = t => t.startsWith("on") ? !Ts(t) : e(t))
}
try {
    My(require("@emotion/is-prop-valid").default)
} catch {}
function Ny(e, t, n) {
    const r = {};
    for (const i in e)
        i === "values" && typeof e.values == "object" || (vp(i) || n === !0 && Ts(i) || !t && !Ts(i) || e.draggable && i.startsWith("onDrag")) && (r[i] = e[i]);
    return r
}
function jy(e) {
    if (typeof Proxy > "u")
        return e;
    const t = new Map
      , n = (...r) => e(...r);
    return new Proxy(n,{
        get: (r, i) => i === "create" ? e : (t.has(i) || t.set(i, e(i)),
        t.get(i))
    })
}
const Qs = S.createContext({});
function ri(e) {
    return typeof e == "string" || Array.isArray(e)
}
function Xs(e) {
    return e !== null && typeof e == "object" && typeof e.start == "function"
}
const Ya = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , ba = ["initial", ...Ya];
function Ys(e) {
    return Xs(e.animate) || ba.some(t => ri(e[t]))
}
function xp(e) {
    return !!(Ys(e) || e.variants)
}
function Ay(e, t) {
    if (Ys(e)) {
        const {initial: n, animate: r} = e;
        return {
            initial: n === !1 || ri(n) ? n : void 0,
            animate: ri(r) ? r : void 0
        }
    }
    return e.inherit !== !1 ? t : {}
}
function Dy(e) {
    const {initial: t, animate: n} = Ay(e, S.useContext(Qs));
    return S.useMemo( () => ({
        initial: t,
        animate: n
    }), [Fc(t), Fc(n)])
}
function Fc(e) {
    return Array.isArray(e) ? e.join(" ") : e
}
const Ly = Symbol.for("motionComponentSymbol");
function On(e) {
    return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function Ry(e, t, n) {
    return S.useCallback(r => {
        r && e.onMount && e.onMount(r),
        t && (r ? t.mount(r) : t.unmount()),
        n && (typeof n == "function" ? n(r) : On(n) && (n.current = r))
    }
    , [t])
}
const Za = e => e.replace(/([a-z])([A-Z])/gu, "$1-$2").toLowerCase()
  , Vy = "framerAppearId"
  , wp = "data-" + Za(Vy)
  , {schedule: qa, cancel: uS} = gp(queueMicrotask, !1)
  , Sp = S.createContext({});
function _y(e, t, n, r, i) {
    var s, o;
    const {visualElement: l} = S.useContext(Qs)
      , a = S.useContext(yp)
      , u = S.useContext(Gs)
      , c = S.useContext(Ga).reducedMotion
      , f = S.useRef(null);
    r = r || a.renderer,
    !f.current && r && (f.current = r(e, {
        visualState: t,
        parent: l,
        props: n,
        presenceContext: u,
        blockInitialAnimation: u ? u.initial === !1 : !1,
        reducedMotionConfig: c
    }));
    const d = f.current
      , y = S.useContext(Sp);
    d && !d.projection && i && (d.type === "html" || d.type === "svg") && zy(f.current, n, i, y);
    const v = S.useRef(!1);
    S.useInsertionEffect( () => {
        d && v.current && d.update(n, u)
    }
    );
    const x = n[wp]
      , T = S.useRef(!!x && !(!((s = window.MotionHandoffIsComplete) === null || s === void 0) && s.call(window, x)) && ((o = window.MotionHasOptimisedAnimation) === null || o === void 0 ? void 0 : o.call(window, x)));
    return mp( () => {
        d && (v.current = !0,
        window.MotionIsMounted = !0,
        d.updateFeatures(),
        qa.render(d.render),
        T.current && d.animationState && d.animationState.animateChanges())
    }
    ),
    S.useEffect( () => {
        d && (!T.current && d.animationState && d.animationState.animateChanges(),
        T.current && (queueMicrotask( () => {
            var p;
            (p = window.MotionHandoffMarkAsComplete) === null || p === void 0 || p.call(window, x)
        }
        ),
        T.current = !1))
    }
    ),
    d
}
function zy(e, t, n, r) {
    const {layoutId: i, layout: s, drag: o, dragConstraints: l, layoutScroll: a, layoutRoot: u} = t;
    e.projection = new n(e.latestValues,t["data-framer-portal-id"] ? void 0 : kp(e.parent)),
    e.projection.setOptions({
        layoutId: i,
        layout: s,
        alwaysMeasureLayout: !!o || l && On(l),
        visualElement: e,
        animationType: typeof s == "string" ? s : "both",
        initialPromotionConfig: r,
        layoutScroll: a,
        layoutRoot: u
    })
}
function kp(e) {
    if (e)
        return e.options.allowProjection !== !1 ? e.projection : kp(e.parent)
}
function Iy({preloadedFeatures: e, createVisualElement: t, useRender: n, useVisualState: r, Component: i}) {
    var s, o;
    e && Py(e);
    function l(u, c) {
        let f;
        const d = {
            ...S.useContext(Ga),
            ...u,
            layoutId: Fy(u)
        }
          , {isStatic: y} = d
          , v = Dy(u)
          , x = r(u, y);
        if (!y && Qa) {
            Oy();
            const T = By(d);
            f = T.MeasureLayout,
            v.visualElement = _y(i, x, d, t, T.ProjectionNode)
        }
        return g.jsxs(Qs.Provider, {
            value: v,
            children: [f && v.visualElement ? g.jsx(f, {
                visualElement: v.visualElement,
                ...d
            }) : null, n(i, u, Ry(x, v.visualElement, c), x, y, v.visualElement)]
        })
    }
    l.displayName = `motion.${typeof i == "string" ? i : `create(${(o = (s = i.displayName) !== null && s !== void 0 ? s : i.name) !== null && o !== void 0 ? o : ""})`}`;
    const a = S.forwardRef(l);
    return a[Ly] = i,
    a
}
function Fy({layoutId: e}) {
    const t = S.useContext(Ha).id;
    return t && e !== void 0 ? t + "-" + e : e
}
function Oy(e, t) {
    S.useContext(yp).strict
}
function By(e) {
    const {drag: t, layout: n} = ir;
    if (!t && !n)
        return {};
    const r = {
        ...t,
        ...n
    };
    return {
        MeasureLayout: t != null && t.isEnabled(e) || n != null && n.isEnabled(e) ? r.MeasureLayout : void 0,
        ProjectionNode: r.ProjectionNode
    }
}
const Uy = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function Ja(e) {
    return typeof e != "string" || e.includes("-") ? !1 : !!(Uy.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function Oc(e) {
    const t = [{}, {}];
    return e == null || e.values.forEach( (n, r) => {
        t[0][r] = n.get(),
        t[1][r] = n.getVelocity()
    }
    ),
    t
}
function eu(e, t, n, r) {
    if (typeof t == "function") {
        const [i,s] = Oc(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    if (typeof t == "string" && (t = e.variants && e.variants[t]),
    typeof t == "function") {
        const [i,s] = Oc(r);
        t = t(n !== void 0 ? n : e.custom, i, s)
    }
    return t
}
const Vl = e => Array.isArray(e)
  , $y = e => !!(e && typeof e == "object" && e.mix && e.toValue)
  , Wy = e => Vl(e) ? e[e.length - 1] || 0 : e
  , Ee = e => !!(e && e.getVelocity);
function bi(e) {
    const t = Ee(e) ? e.get() : e;
    return $y(t) ? t.toValue() : t
}
function Hy({scrapeMotionValuesFromProps: e, createRenderState: t, onUpdate: n}, r, i, s) {
    const o = {
        latestValues: Ky(r, i, s, e),
        renderState: t()
    };
    return n && (o.onMount = l => n({
        props: r,
        current: l,
        ...o
    }),
    o.onUpdate = l => n(l)),
    o
}
const Tp = e => (t, n) => {
    const r = S.useContext(Qs)
      , i = S.useContext(Gs)
      , s = () => Hy(e, t, r, i);
    return n ? s() : Ka(s)
}
;
function Ky(e, t, n, r) {
    const i = {}
      , s = r(e, {});
    for (const d in s)
        i[d] = bi(s[d]);
    let {initial: o, animate: l} = e;
    const a = Ys(e)
      , u = xp(e);
    t && u && !a && e.inherit !== !1 && (o === void 0 && (o = t.initial),
    l === void 0 && (l = t.animate));
    let c = n ? n.initial === !1 : !1;
    c = c || o === !1;
    const f = c ? l : o;
    if (f && typeof f != "boolean" && !Xs(f)) {
        const d = Array.isArray(f) ? f : [f];
        for (let y = 0; y < d.length; y++) {
            const v = eu(e, d[y]);
            if (v) {
                const {transitionEnd: x, transition: T, ...p} = v;
                for (const h in p) {
                    let m = p[h];
                    if (Array.isArray(m)) {
                        const w = c ? m.length - 1 : 0;
                        m = m[w]
                    }
                    m !== null && (i[h] = m)
                }
                for (const h in x)
                    i[h] = x[h]
            }
        }
    }
    return i
}
const ur = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Tn = new Set(ur)
  , Cp = e => t => typeof t == "string" && t.startsWith(e)
  , Pp = Cp("--")
  , Gy = Cp("var(--")
  , tu = e => Gy(e) ? Qy.test(e.split("/*")[0].trim()) : !1
  , Qy = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu
  , Ep = (e, t) => t && typeof e == "number" ? t.transform(e) : e
  , Nt = (e, t, n) => n > t ? t : n < e ? e : n
  , cr = {
    test: e => typeof e == "number",
    parse: parseFloat,
    transform: e => e
}
  , ii = {
    ...cr,
    transform: e => Nt(0, 1, e)
}
  , zi = {
    ...cr,
    default: 1
}
  , hi = e => ({
    test: t => typeof t == "string" && t.endsWith(e) && t.split(" ").length === 1,
    parse: parseFloat,
    transform: t => `${t}${e}`
})
  , Rt = hi("deg")
  , pt = hi("%")
  , F = hi("px")
  , Xy = hi("vh")
  , Yy = hi("vw")
  , Bc = {
    ...pt,
    parse: e => pt.parse(e) / 100,
    transform: e => pt.transform(e * 100)
}
  , by = {
    borderWidth: F,
    borderTopWidth: F,
    borderRightWidth: F,
    borderBottomWidth: F,
    borderLeftWidth: F,
    borderRadius: F,
    radius: F,
    borderTopLeftRadius: F,
    borderTopRightRadius: F,
    borderBottomRightRadius: F,
    borderBottomLeftRadius: F,
    width: F,
    maxWidth: F,
    height: F,
    maxHeight: F,
    top: F,
    right: F,
    bottom: F,
    left: F,
    padding: F,
    paddingTop: F,
    paddingRight: F,
    paddingBottom: F,
    paddingLeft: F,
    margin: F,
    marginTop: F,
    marginRight: F,
    marginBottom: F,
    marginLeft: F,
    backgroundPositionX: F,
    backgroundPositionY: F
}
  , Zy = {
    rotate: Rt,
    rotateX: Rt,
    rotateY: Rt,
    rotateZ: Rt,
    scale: zi,
    scaleX: zi,
    scaleY: zi,
    scaleZ: zi,
    skew: Rt,
    skewX: Rt,
    skewY: Rt,
    distance: F,
    translateX: F,
    translateY: F,
    translateZ: F,
    x: F,
    y: F,
    z: F,
    perspective: F,
    transformPerspective: F,
    opacity: ii,
    originX: Bc,
    originY: Bc,
    originZ: F
}
  , Uc = {
    ...cr,
    transform: Math.round
}
  , nu = {
    ...by,
    ...Zy,
    zIndex: Uc,
    size: F,
    fillOpacity: ii,
    strokeOpacity: ii,
    numOctaves: Uc
}
  , qy = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective"
}
  , Jy = ur.length;
function ev(e, t, n) {
    let r = ""
      , i = !0;
    for (let s = 0; s < Jy; s++) {
        const o = ur[s]
          , l = e[o];
        if (l === void 0)
            continue;
        let a = !0;
        if (typeof l == "number" ? a = l === (o.startsWith("scale") ? 1 : 0) : a = parseFloat(l) === 0,
        !a || n) {
            const u = Ep(l, nu[o]);
            if (!a) {
                i = !1;
                const c = qy[o] || o;
                r += `${c}(${u}) `
            }
            n && (t[o] = u)
        }
    }
    return r = r.trim(),
    n ? r = n(t, i ? "" : r) : i && (r = "none"),
    r
}
function ru(e, t, n) {
    const {style: r, vars: i, transformOrigin: s} = e;
    let o = !1
      , l = !1;
    for (const a in t) {
        const u = t[a];
        if (Tn.has(a)) {
            o = !0;
            continue
        } else if (Pp(a)) {
            i[a] = u;
            continue
        } else {
            const c = Ep(u, nu[a]);
            a.startsWith("origin") ? (l = !0,
            s[a] = c) : r[a] = c
        }
    }
    if (t.transform || (o || n ? r.transform = ev(t, e.transform, n) : r.transform && (r.transform = "none")),
    l) {
        const {originX: a="50%", originY: u="50%", originZ: c=0} = s;
        r.transformOrigin = `${a} ${u} ${c}`
    }
}
const tv = {
    offset: "stroke-dashoffset",
    array: "stroke-dasharray"
}
  , nv = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
};
function rv(e, t, n=1, r=0, i=!0) {
    e.pathLength = 1;
    const s = i ? tv : nv;
    e[s.offset] = F.transform(-r);
    const o = F.transform(t)
      , l = F.transform(n);
    e[s.array] = `${o} ${l}`
}
function $c(e, t, n) {
    return typeof e == "string" ? e : F.transform(t + n * e)
}
function iv(e, t, n) {
    const r = $c(t, e.x, e.width)
      , i = $c(n, e.y, e.height);
    return `${r} ${i}`
}
function iu(e, {attrX: t, attrY: n, attrScale: r, originX: i, originY: s, pathLength: o, pathSpacing: l=1, pathOffset: a=0, ...u}, c, f) {
    if (ru(e, u, f),
    c) {
        e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
        return
    }
    e.attrs = e.style,
    e.style = {};
    const {attrs: d, style: y, dimensions: v} = e;
    d.transform && (v && (y.transform = d.transform),
    delete d.transform),
    v && (i !== void 0 || s !== void 0 || y.transform) && (y.transformOrigin = iv(v, i !== void 0 ? i : .5, s !== void 0 ? s : .5)),
    t !== void 0 && (d.x = t),
    n !== void 0 && (d.y = n),
    r !== void 0 && (d.scale = r),
    o !== void 0 && rv(d, o, l, a, !1)
}
const su = () => ({
    style: {},
    transform: {},
    transformOrigin: {},
    vars: {}
})
  , Mp = () => ({
    ...su(),
    attrs: {}
})
  , ou = e => typeof e == "string" && e.toLowerCase() === "svg";
function Np(e, {style: t, vars: n}, r, i) {
    Object.assign(e.style, t, i && i.getProjectionStyles(r));
    for (const s in n)
        e.style.setProperty(s, n[s])
}
const jp = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"]);
function Ap(e, t, n, r) {
    Np(e, t, void 0, r);
    for (const i in t.attrs)
        e.setAttribute(jp.has(i) ? i : Za(i), t.attrs[i])
}
const Cs = {};
function sv(e) {
    Object.assign(Cs, e)
}
function Dp(e, {layout: t, layoutId: n}) {
    return Tn.has(e) || e.startsWith("origin") || (t || n !== void 0) && (!!Cs[e] || e === "opacity")
}
function lu(e, t, n) {
    var r;
    const {style: i} = e
      , s = {};
    for (const o in i)
        (Ee(i[o]) || t.style && Ee(t.style[o]) || Dp(o, e) || ((r = n == null ? void 0 : n.getValue(o)) === null || r === void 0 ? void 0 : r.liveStyle) !== void 0) && (s[o] = i[o]);
    return s
}
function Lp(e, t, n) {
    const r = lu(e, t, n);
    for (const i in e)
        if (Ee(e[i]) || Ee(t[i])) {
            const s = ur.indexOf(i) !== -1 ? "attr" + i.charAt(0).toUpperCase() + i.substring(1) : i;
            r[s] = e[i]
        }
    return r
}
function ov(e, t) {
    try {
        t.dimensions = typeof e.getBBox == "function" ? e.getBBox() : e.getBoundingClientRect()
    } catch {
        t.dimensions = {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    }
}
const Wc = ["x", "y", "width", "height", "cx", "cy", "r"]
  , lv = {
    useVisualState: Tp({
        scrapeMotionValuesFromProps: Lp,
        createRenderState: Mp,
        onUpdate: ({props: e, prevProps: t, current: n, renderState: r, latestValues: i}) => {
            if (!n)
                return;
            let s = !!e.drag;
            if (!s) {
                for (const l in i)
                    if (Tn.has(l)) {
                        s = !0;
                        break
                    }
            }
            if (!s)
                return;
            let o = !t;
            if (t)
                for (let l = 0; l < Wc.length; l++) {
                    const a = Wc[l];
                    e[a] !== t[a] && (o = !0)
                }
            o && q.read( () => {
                ov(n, r),
                q.render( () => {
                    iu(r, i, ou(n.tagName), e.transformTemplate),
                    Ap(n, r)
                }
                )
            }
            )
        }
    })
}
  , av = {
    useVisualState: Tp({
        scrapeMotionValuesFromProps: lu,
        createRenderState: su
    })
};
function Rp(e, t, n) {
    for (const r in t)
        !Ee(t[r]) && !Dp(r, n) && (e[r] = t[r])
}
function uv({transformTemplate: e}, t) {
    return S.useMemo( () => {
        const n = su();
        return ru(n, t, e),
        Object.assign({}, n.vars, n.style)
    }
    , [t])
}
function cv(e, t) {
    const n = e.style || {}
      , r = {};
    return Rp(r, n, e),
    Object.assign(r, uv(e, t)),
    r
}
function fv(e, t) {
    const n = {}
      , r = cv(e, t);
    return e.drag && e.dragListener !== !1 && (n.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0),
    n.style = r,
    n
}
function dv(e, t, n, r) {
    const i = S.useMemo( () => {
        const s = Mp();
        return iu(s, t, ou(r), e.transformTemplate),
        {
            ...s.attrs,
            style: {
                ...s.style
            }
        }
    }
    , [t]);
    if (e.style) {
        const s = {};
        Rp(s, e.style, e),
        i.style = {
            ...s,
            ...i.style
        }
    }
    return i
}
function hv(e=!1) {
    return (n, r, i, {latestValues: s}, o) => {
        const a = (Ja(n) ? dv : fv)(r, s, o, n)
          , u = Ny(r, typeof n == "string", e)
          , c = n !== S.Fragment ? {
            ...u,
            ...a,
            ref: i
        } : {}
          , {children: f} = r
          , d = S.useMemo( () => Ee(f) ? f.get() : f, [f]);
        return S.createElement(n, {
            ...c,
            children: d
        })
    }
}
function pv(e, t) {
    return function(r, {forwardMotionProps: i}={
        forwardMotionProps: !1
    }) {
        const o = {
            ...Ja(r) ? lv : av,
            preloadedFeatures: e,
            useRender: hv(i),
            createVisualElement: t,
            Component: r
        };
        return Iy(o)
    }
}
function Vp(e, t) {
    if (!Array.isArray(t))
        return !1;
    const n = t.length;
    if (n !== e.length)
        return !1;
    for (let r = 0; r < n; r++)
        if (t[r] !== e[r])
            return !1;
    return !0
}
function bs(e, t, n) {
    const r = e.getProps();
    return eu(r, t, n !== void 0 ? n : r.custom, e)
}
const mv = Xa( () => window.ScrollTimeline !== void 0);
class gv {
    constructor(t) {
        this.stop = () => this.runAll("stop"),
        this.animations = t.filter(Boolean)
    }
    get finished() {
        return Promise.all(this.animations.map(t => "finished"in t ? t.finished : t))
    }
    getAll(t) {
        return this.animations[0][t]
    }
    setAll(t, n) {
        for (let r = 0; r < this.animations.length; r++)
            this.animations[r][t] = n
    }
    attachTimeline(t, n) {
        const r = this.animations.map(i => {
            if (mv() && i.attachTimeline)
                return i.attachTimeline(t);
            if (typeof n == "function")
                return n(i)
        }
        );
        return () => {
            r.forEach( (i, s) => {
                i && i(),
                this.animations[s].stop()
            }
            )
        }
    }
    get time() {
        return this.getAll("time")
    }
    set time(t) {
        this.setAll("time", t)
    }
    get speed() {
        return this.getAll("speed")
    }
    set speed(t) {
        this.setAll("speed", t)
    }
    get startTime() {
        return this.getAll("startTime")
    }
    get duration() {
        let t = 0;
        for (let n = 0; n < this.animations.length; n++)
            t = Math.max(t, this.animations[n].duration);
        return t
    }
    runAll(t) {
        this.animations.forEach(n => n[t]())
    }
    flatten() {
        this.runAll("flatten")
    }
    play() {
        this.runAll("play")
    }
    pause() {
        this.runAll("pause")
    }
    cancel() {
        this.runAll("cancel")
    }
    complete() {
        this.runAll("complete")
    }
}
class yv extends gv {
    then(t, n) {
        return Promise.all(this.animations).then(t).catch(n)
    }
}
function au(e, t) {
    return e ? e[t] || e.default || e : void 0
}
const _l = 2e4;
function _p(e) {
    let t = 0;
    const n = 50;
    let r = e.next(t);
    for (; !r.done && t < _l; )
        t += n,
        r = e.next(t);
    return t >= _l ? 1 / 0 : t
}
function uu(e) {
    return typeof e == "function"
}
function Hc(e, t) {
    e.timeline = t,
    e.onfinish = null
}
const cu = e => Array.isArray(e) && typeof e[0] == "number"
  , vv = {
    linearEasing: void 0
};
function xv(e, t) {
    const n = Xa(e);
    return () => {
        var r;
        return (r = vv[t]) !== null && r !== void 0 ? r : n()
    }
}
const Ps = xv( () => {
    try {
        document.createElement("div").animate({
            opacity: 0
        }, {
            easing: "linear(0, 1)"
        })
    } catch {
        return !1
    }
    return !0
}
, "linearEasing")
  , zp = (e, t, n=10) => {
    let r = "";
    const i = Math.max(Math.round(t / n), 2);
    for (let s = 0; s < i; s++)
        r += e(rr(0, i - 1, s)) + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
}
;
function Ip(e) {
    return !!(typeof e == "function" && Ps() || !e || typeof e == "string" && (e in zl || Ps()) || cu(e) || Array.isArray(e) && e.every(Ip))
}
const Cr = ([e,t,n,r]) => `cubic-bezier(${e}, ${t}, ${n}, ${r})`
  , zl = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Cr([0, .65, .55, 1]),
    circOut: Cr([.55, 0, 1, .45]),
    backIn: Cr([.31, .01, .66, -.59]),
    backOut: Cr([.33, 1.53, .69, .99])
};
function Fp(e, t) {
    if (e)
        return typeof e == "function" && Ps() ? zp(e, t) : cu(e) ? Cr(e) : Array.isArray(e) ? e.map(n => Fp(n, t) || zl.easeOut) : zl[e]
}
const tt = {
    x: !1,
    y: !1
};
function Op() {
    return tt.x || tt.y
}
function wv(e, t, n) {
    var r;
    if (e instanceof Element)
        return [e];
    if (typeof e == "string") {
        let i = document;
        const s = (r = void 0) !== null && r !== void 0 ? r : i.querySelectorAll(e);
        return s ? Array.from(s) : []
    }
    return Array.from(e)
}
function Bp(e, t) {
    const n = wv(e)
      , r = new AbortController
      , i = {
        passive: !0,
        ...t,
        signal: r.signal
    };
    return [n, i, () => r.abort()]
}
function Kc(e) {
    return t => {
        t.pointerType === "touch" || Op() || e(t)
    }
}
function Sv(e, t, n={}) {
    const [r,i,s] = Bp(e, n)
      , o = Kc(l => {
        const {target: a} = l
          , u = t(l);
        if (typeof u != "function" || !a)
            return;
        const c = Kc(f => {
            u(f),
            a.removeEventListener("pointerleave", c)
        }
        );
        a.addEventListener("pointerleave", c, i)
    }
    );
    return r.forEach(l => {
        l.addEventListener("pointerenter", o, i)
    }
    ),
    s
}
const Up = (e, t) => t ? e === t ? !0 : Up(e, t.parentElement) : !1
  , fu = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , kv = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function Tv(e) {
    return kv.has(e.tagName) || e.tabIndex !== -1
}
const Pr = new WeakSet;
function Gc(e) {
    return t => {
        t.key === "Enter" && e(t)
    }
}
function Eo(e, t) {
    e.dispatchEvent(new PointerEvent("pointer" + t,{
        isPrimary: !0,
        bubbles: !0
    }))
}
const Cv = (e, t) => {
    const n = e.currentTarget;
    if (!n)
        return;
    const r = Gc( () => {
        if (Pr.has(n))
            return;
        Eo(n, "down");
        const i = Gc( () => {
            Eo(n, "up")
        }
        )
          , s = () => Eo(n, "cancel");
        n.addEventListener("keyup", i, t),
        n.addEventListener("blur", s, t)
    }
    );
    n.addEventListener("keydown", r, t),
    n.addEventListener("blur", () => n.removeEventListener("keydown", r), t)
}
;
function Qc(e) {
    return fu(e) && !Op()
}
function Pv(e, t, n={}) {
    const [r,i,s] = Bp(e, n)
      , o = l => {
        const a = l.currentTarget;
        if (!Qc(l) || Pr.has(a))
            return;
        Pr.add(a);
        const u = t(l)
          , c = (y, v) => {
            window.removeEventListener("pointerup", f),
            window.removeEventListener("pointercancel", d),
            !(!Qc(y) || !Pr.has(a)) && (Pr.delete(a),
            typeof u == "function" && u(y, {
                success: v
            }))
        }
          , f = y => {
            c(y, n.useGlobalTarget || Up(a, y.target))
        }
          , d = y => {
            c(y, !1)
        }
        ;
        window.addEventListener("pointerup", f, i),
        window.addEventListener("pointercancel", d, i)
    }
    ;
    return r.forEach(l => {
        !Tv(l) && l.getAttribute("tabindex") === null && (l.tabIndex = 0),
        (n.useGlobalTarget ? window : l).addEventListener("pointerdown", o, i),
        l.addEventListener("focus", u => Cv(u, i), i)
    }
    ),
    s
}
function Ev(e) {
    return e === "x" || e === "y" ? tt[e] ? null : (tt[e] = !0,
    () => {
        tt[e] = !1
    }
    ) : tt.x || tt.y ? null : (tt.x = tt.y = !0,
    () => {
        tt.x = tt.y = !1
    }
    )
}
const $p = new Set(["width", "height", "top", "left", "right", "bottom", ...ur]);
let Zi;
function Mv() {
    Zi = void 0
}
const mt = {
    now: () => (Zi === void 0 && mt.set(ve.isProcessing || ky.useManualTiming ? ve.timestamp : performance.now()),
    Zi),
    set: e => {
        Zi = e,
        queueMicrotask(Mv)
    }
};
function du(e, t) {
    e.indexOf(t) === -1 && e.push(t)
}
function hu(e, t) {
    const n = e.indexOf(t);
    n > -1 && e.splice(n, 1)
}
class pu {
    constructor() {
        this.subscriptions = []
    }
    add(t) {
        return du(this.subscriptions, t),
        () => hu(this.subscriptions, t)
    }
    notify(t, n, r) {
        const i = this.subscriptions.length;
        if (i)
            if (i === 1)
                this.subscriptions[0](t, n, r);
            else
                for (let s = 0; s < i; s++) {
                    const o = this.subscriptions[s];
                    o && o(t, n, r)
                }
    }
    getSize() {
        return this.subscriptions.length
    }
    clear() {
        this.subscriptions.length = 0
    }
}
function Wp(e, t) {
    return t ? e * (1e3 / t) : 0
}
const Xc = 30
  , Nv = e => !isNaN(parseFloat(e));
class jv {
    constructor(t, n={}) {
        this.version = "11.18.2",
        this.canTrackVelocity = null,
        this.events = {},
        this.updateAndNotify = (r, i=!0) => {
            const s = mt.now();
            this.updatedAt !== s && this.setPrevFrameValue(),
            this.prev = this.current,
            this.setCurrent(r),
            this.current !== this.prev && this.events.change && this.events.change.notify(this.current),
            i && this.events.renderRequest && this.events.renderRequest.notify(this.current)
        }
        ,
        this.hasAnimated = !1,
        this.setCurrent(t),
        this.owner = n.owner
    }
    setCurrent(t) {
        this.current = t,
        this.updatedAt = mt.now(),
        this.canTrackVelocity === null && t !== void 0 && (this.canTrackVelocity = Nv(this.current))
    }
    setPrevFrameValue(t=this.current) {
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt
    }
    onChange(t) {
        return this.on("change", t)
    }
    on(t, n) {
        this.events[t] || (this.events[t] = new pu);
        const r = this.events[t].add(n);
        return t === "change" ? () => {
            r(),
            q.read( () => {
                this.events.change.getSize() || this.stop()
            }
            )
        }
        : r
    }
    clearListeners() {
        for (const t in this.events)
            this.events[t].clear()
    }
    attach(t, n) {
        this.passiveEffect = t,
        this.stopPassiveEffect = n
    }
    set(t, n=!0) {
        !n || !this.passiveEffect ? this.updateAndNotify(t, n) : this.passiveEffect(t, this.updateAndNotify)
    }
    setWithVelocity(t, n, r) {
        this.set(n),
        this.prev = void 0,
        this.prevFrameValue = t,
        this.prevUpdatedAt = this.updatedAt - r
    }
    jump(t, n=!0) {
        this.updateAndNotify(t),
        this.prev = t,
        this.prevUpdatedAt = this.prevFrameValue = void 0,
        n && this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
    get() {
        return this.current
    }
    getPrevious() {
        return this.prev
    }
    getVelocity() {
        const t = mt.now();
        if (!this.canTrackVelocity || this.prevFrameValue === void 0 || t - this.updatedAt > Xc)
            return 0;
        const n = Math.min(this.updatedAt - this.prevUpdatedAt, Xc);
        return Wp(parseFloat(this.current) - parseFloat(this.prevFrameValue), n)
    }
    start(t) {
        return this.stop(),
        new Promise(n => {
            this.hasAnimated = !0,
            this.animation = t(n),
            this.events.animationStart && this.events.animationStart.notify()
        }
        ).then( () => {
            this.events.animationComplete && this.events.animationComplete.notify(),
            this.clearAnimation()
        }
        )
    }
    stop() {
        this.animation && (this.animation.stop(),
        this.events.animationCancel && this.events.animationCancel.notify()),
        this.clearAnimation()
    }
    isAnimating() {
        return !!this.animation
    }
    clearAnimation() {
        delete this.animation
    }
    destroy() {
        this.clearListeners(),
        this.stop(),
        this.stopPassiveEffect && this.stopPassiveEffect()
    }
}
function si(e, t) {
    return new jv(e,t)
}
function Av(e, t, n) {
    e.hasValue(t) ? e.getValue(t).set(n) : e.addValue(t, si(n))
}
function Dv(e, t) {
    const n = bs(e, t);
    let {transitionEnd: r={}, transition: i={}, ...s} = n || {};
    s = {
        ...s,
        ...r
    };
    for (const o in s) {
        const l = Wy(s[o]);
        Av(e, o, l)
    }
}
function Lv(e) {
    return !!(Ee(e) && e.add)
}
function Il(e, t) {
    const n = e.getValue("willChange");
    if (Lv(n))
        return n.add(t)
}
function Hp(e) {
    return e.props[wp]
}
const Kp = (e, t, n) => (((1 - 3 * n + 3 * t) * e + (3 * n - 6 * t)) * e + 3 * t) * e
  , Rv = 1e-7
  , Vv = 12;
function _v(e, t, n, r, i) {
    let s, o, l = 0;
    do
        o = t + (n - t) / 2,
        s = Kp(o, r, i) - e,
        s > 0 ? n = o : t = o;
    while (Math.abs(s) > Rv && ++l < Vv);
    return o
}
function pi(e, t, n, r) {
    if (e === t && n === r)
        return Ue;
    const i = s => _v(s, 0, 1, e, n);
    return s => s === 0 || s === 1 ? s : Kp(i(s), t, r)
}
const Gp = e => t => t <= .5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2
  , Qp = e => t => 1 - e(1 - t)
  , Xp = pi(.33, 1.53, .69, .99)
  , mu = Qp(Xp)
  , Yp = Gp(mu)
  , bp = e => (e *= 2) < 1 ? .5 * mu(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , gu = e => 1 - Math.sin(Math.acos(e))
  , Zp = Qp(gu)
  , qp = Gp(gu)
  , Jp = e => /^0[^.\s]+$/u.test(e);
function zv(e) {
    return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || Jp(e) : !0
}
const zr = e => Math.round(e * 1e5) / 1e5
  , yu = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Iv(e) {
    return e == null
}
const Fv = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , vu = (e, t) => n => !!(typeof n == "string" && Fv.test(n) && n.startsWith(e) || t && !Iv(n) && Object.prototype.hasOwnProperty.call(n, t))
  , em = (e, t, n) => r => {
    if (typeof r != "string")
        return r;
    const [i,s,o,l] = r.match(yu);
    return {
        [e]: parseFloat(i),
        [t]: parseFloat(s),
        [n]: parseFloat(o),
        alpha: l !== void 0 ? parseFloat(l) : 1
    }
}
  , Ov = e => Nt(0, 255, e)
  , Mo = {
    ...cr,
    transform: e => Math.round(Ov(e))
}
  , dn = {
    test: vu("rgb", "red"),
    parse: em("red", "green", "blue"),
    transform: ({red: e, green: t, blue: n, alpha: r=1}) => "rgba(" + Mo.transform(e) + ", " + Mo.transform(t) + ", " + Mo.transform(n) + ", " + zr(ii.transform(r)) + ")"
};
function Bv(e) {
    let t = ""
      , n = ""
      , r = ""
      , i = "";
    return e.length > 5 ? (t = e.substring(1, 3),
    n = e.substring(3, 5),
    r = e.substring(5, 7),
    i = e.substring(7, 9)) : (t = e.substring(1, 2),
    n = e.substring(2, 3),
    r = e.substring(3, 4),
    i = e.substring(4, 5),
    t += t,
    n += n,
    r += r,
    i += i),
    {
        red: parseInt(t, 16),
        green: parseInt(n, 16),
        blue: parseInt(r, 16),
        alpha: i ? parseInt(i, 16) / 255 : 1
    }
}
const Fl = {
    test: vu("#"),
    parse: Bv,
    transform: dn.transform
}
  , Bn = {
    test: vu("hsl", "hue"),
    parse: em("hue", "saturation", "lightness"),
    transform: ({hue: e, saturation: t, lightness: n, alpha: r=1}) => "hsla(" + Math.round(e) + ", " + pt.transform(zr(t)) + ", " + pt.transform(zr(n)) + ", " + zr(ii.transform(r)) + ")"
}
  , Te = {
    test: e => dn.test(e) || Fl.test(e) || Bn.test(e),
    parse: e => dn.test(e) ? dn.parse(e) : Bn.test(e) ? Bn.parse(e) : Fl.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? dn.transform(e) : Bn.transform(e)
}
  , Uv = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function $v(e) {
    var t, n;
    return isNaN(e) && typeof e == "string" && (((t = e.match(yu)) === null || t === void 0 ? void 0 : t.length) || 0) + (((n = e.match(Uv)) === null || n === void 0 ? void 0 : n.length) || 0) > 0
}
const tm = "number"
  , nm = "color"
  , Wv = "var"
  , Hv = "var("
  , Yc = "${}"
  , Kv = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function oi(e) {
    const t = e.toString()
      , n = []
      , r = {
        color: [],
        number: [],
        var: []
    }
      , i = [];
    let s = 0;
    const l = t.replace(Kv, a => (Te.test(a) ? (r.color.push(s),
    i.push(nm),
    n.push(Te.parse(a))) : a.startsWith(Hv) ? (r.var.push(s),
    i.push(Wv),
    n.push(a)) : (r.number.push(s),
    i.push(tm),
    n.push(parseFloat(a))),
    ++s,
    Yc)).split(Yc);
    return {
        values: n,
        split: l,
        indexes: r,
        types: i
    }
}
function rm(e) {
    return oi(e).values
}
function im(e) {
    const {split: t, types: n} = oi(e)
      , r = t.length;
    return i => {
        let s = "";
        for (let o = 0; o < r; o++)
            if (s += t[o],
            i[o] !== void 0) {
                const l = n[o];
                l === tm ? s += zr(i[o]) : l === nm ? s += Te.transform(i[o]) : s += i[o]
            }
        return s
    }
}
const Gv = e => typeof e == "number" ? 0 : e;
function Qv(e) {
    const t = rm(e);
    return im(e)(t.map(Gv))
}
const Zt = {
    test: $v,
    parse: rm,
    createTransformer: im,
    getAnimatableNone: Qv
}
  , Xv = new Set(["brightness", "contrast", "saturate", "opacity"]);
function Yv(e) {
    const [t,n] = e.slice(0, -1).split("(");
    if (t === "drop-shadow")
        return e;
    const [r] = n.match(yu) || [];
    if (!r)
        return e;
    const i = n.replace(r, "");
    let s = Xv.has(t) ? 1 : 0;
    return r !== n && (s *= 100),
    t + "(" + s + i + ")"
}
const bv = /\b([a-z-]*)\(.*?\)/gu
  , Ol = {
    ...Zt,
    getAnimatableNone: e => {
        const t = e.match(bv);
        return t ? t.map(Yv).join(" ") : e
    }
}
  , Zv = {
    ...nu,
    color: Te,
    backgroundColor: Te,
    outlineColor: Te,
    fill: Te,
    stroke: Te,
    borderColor: Te,
    borderTopColor: Te,
    borderRightColor: Te,
    borderBottomColor: Te,
    borderLeftColor: Te,
    filter: Ol,
    WebkitFilter: Ol
}
  , xu = e => Zv[e];
function sm(e, t) {
    let n = xu(e);
    return n !== Ol && (n = Zt),
    n.getAnimatableNone ? n.getAnimatableNone(t) : void 0
}
const qv = new Set(["auto", "none", "0"]);
function Jv(e, t, n) {
    let r = 0, i;
    for (; r < e.length && !i; ) {
        const s = e[r];
        typeof s == "string" && !qv.has(s) && oi(s).values.length && (i = e[r]),
        r++
    }
    if (i && n)
        for (const s of t)
            e[s] = sm(n, i)
}
const bc = e => e === cr || e === F
  , Zc = (e, t) => parseFloat(e.split(", ")[t])
  , qc = (e, t) => (n, {transform: r}) => {
    if (r === "none" || !r)
        return 0;
    const i = r.match(/^matrix3d\((.+)\)$/u);
    if (i)
        return Zc(i[1], t);
    {
        const s = r.match(/^matrix\((.+)\)$/u);
        return s ? Zc(s[1], e) : 0
    }
}
  , e1 = new Set(["x", "y", "z"])
  , t1 = ur.filter(e => !e1.has(e));
function n1(e) {
    const t = [];
    return t1.forEach(n => {
        const r = e.getValue(n);
        r !== void 0 && (t.push([n, r.get()]),
        r.set(n.startsWith("scale") ? 1 : 0))
    }
    ),
    t
}
const sr = {
    width: ({x: e}, {paddingLeft: t="0", paddingRight: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    height: ({y: e}, {paddingTop: t="0", paddingBottom: n="0"}) => e.max - e.min - parseFloat(t) - parseFloat(n),
    top: (e, {top: t}) => parseFloat(t),
    left: (e, {left: t}) => parseFloat(t),
    bottom: ({y: e}, {top: t}) => parseFloat(t) + (e.max - e.min),
    right: ({x: e}, {left: t}) => parseFloat(t) + (e.max - e.min),
    x: qc(4, 13),
    y: qc(5, 14)
};
sr.translateX = sr.x;
sr.translateY = sr.y;
const mn = new Set;
let Bl = !1
  , Ul = !1;
function om() {
    if (Ul) {
        const e = Array.from(mn).filter(r => r.needsMeasurement)
          , t = new Set(e.map(r => r.element))
          , n = new Map;
        t.forEach(r => {
            const i = n1(r);
            i.length && (n.set(r, i),
            r.render())
        }
        ),
        e.forEach(r => r.measureInitialState()),
        t.forEach(r => {
            r.render();
            const i = n.get(r);
            i && i.forEach( ([s,o]) => {
                var l;
                (l = r.getValue(s)) === null || l === void 0 || l.set(o)
            }
            )
        }
        ),
        e.forEach(r => r.measureEndState()),
        e.forEach(r => {
            r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
        }
        )
    }
    Ul = !1,
    Bl = !1,
    mn.forEach(e => e.complete()),
    mn.clear()
}
function lm() {
    mn.forEach(e => {
        e.readKeyframes(),
        e.needsMeasurement && (Ul = !0)
    }
    )
}
function r1() {
    lm(),
    om()
}
class wu {
    constructor(t, n, r, i, s, o=!1) {
        this.isComplete = !1,
        this.isAsync = !1,
        this.needsMeasurement = !1,
        this.isScheduled = !1,
        this.unresolvedKeyframes = [...t],
        this.onComplete = n,
        this.name = r,
        this.motionValue = i,
        this.element = s,
        this.isAsync = o
    }
    scheduleResolve() {
        this.isScheduled = !0,
        this.isAsync ? (mn.add(this),
        Bl || (Bl = !0,
        q.read(lm),
        q.resolveKeyframes(om))) : (this.readKeyframes(),
        this.complete())
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, name: n, element: r, motionValue: i} = this;
        for (let s = 0; s < t.length; s++)
            if (t[s] === null)
                if (s === 0) {
                    const o = i == null ? void 0 : i.get()
                      , l = t[t.length - 1];
                    if (o !== void 0)
                        t[0] = o;
                    else if (r && n) {
                        const a = r.readValue(n, l);
                        a != null && (t[0] = a)
                    }
                    t[0] === void 0 && (t[0] = l),
                    i && o === void 0 && i.set(t[0])
                } else
                    t[s] = t[s - 1]
    }
    setFinalKeyframe() {}
    measureInitialState() {}
    renderEndStyles() {}
    measureEndState() {}
    complete() {
        this.isComplete = !0,
        this.onComplete(this.unresolvedKeyframes, this.finalKeyframe),
        mn.delete(this)
    }
    cancel() {
        this.isComplete || (this.isScheduled = !1,
        mn.delete(this))
    }
    resume() {
        this.isComplete || this.scheduleResolve()
    }
}
const am = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e)
  , i1 = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function s1(e) {
    const t = i1.exec(e);
    if (!t)
        return [, ];
    const [,n,r,i] = t;
    return [`--${n ?? r}`, i]
}
function um(e, t, n=1) {
    const [r,i] = s1(e);
    if (!r)
        return;
    const s = window.getComputedStyle(t).getPropertyValue(r);
    if (s) {
        const o = s.trim();
        return am(o) ? parseFloat(o) : o
    }
    return tu(i) ? um(i, t, n + 1) : i
}
const cm = e => t => t.test(e)
  , o1 = {
    test: e => e === "auto",
    parse: e => e
}
  , fm = [cr, F, pt, Rt, Yy, Xy, o1]
  , Jc = e => fm.find(cm(e));
class dm extends wu {
    constructor(t, n, r, i, s) {
        super(t, n, r, i, s, !0)
    }
    readKeyframes() {
        const {unresolvedKeyframes: t, element: n, name: r} = this;
        if (!n || !n.current)
            return;
        super.readKeyframes();
        for (let a = 0; a < t.length; a++) {
            let u = t[a];
            if (typeof u == "string" && (u = u.trim(),
            tu(u))) {
                const c = um(u, n.current);
                c !== void 0 && (t[a] = c),
                a === t.length - 1 && (this.finalKeyframe = u)
            }
        }
        if (this.resolveNoneKeyframes(),
        !$p.has(r) || t.length !== 2)
            return;
        const [i,s] = t
          , o = Jc(i)
          , l = Jc(s);
        if (o !== l)
            if (bc(o) && bc(l))
                for (let a = 0; a < t.length; a++) {
                    const u = t[a];
                    typeof u == "string" && (t[a] = parseFloat(u))
                }
            else
                this.needsMeasurement = !0
    }
    resolveNoneKeyframes() {
        const {unresolvedKeyframes: t, name: n} = this
          , r = [];
        for (let i = 0; i < t.length; i++)
            zv(t[i]) && r.push(i);
        r.length && Jv(t, r, n)
    }
    measureInitialState() {
        const {element: t, unresolvedKeyframes: n, name: r} = this;
        if (!t || !t.current)
            return;
        r === "height" && (this.suspendedScrollY = window.pageYOffset),
        this.measuredOrigin = sr[r](t.measureViewportBox(), window.getComputedStyle(t.current)),
        n[0] = this.measuredOrigin;
        const i = n[n.length - 1];
        i !== void 0 && t.getValue(r, i).jump(i, !1)
    }
    measureEndState() {
        var t;
        const {element: n, name: r, unresolvedKeyframes: i} = this;
        if (!n || !n.current)
            return;
        const s = n.getValue(r);
        s && s.jump(this.measuredOrigin, !1);
        const o = i.length - 1
          , l = i[o];
        i[o] = sr[r](n.measureViewportBox(), window.getComputedStyle(n.current)),
        l !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = l),
        !((t = this.removedTransforms) === null || t === void 0) && t.length && this.removedTransforms.forEach( ([a,u]) => {
            n.getValue(a).set(u)
        }
        ),
        this.resolveNoneKeyframes()
    }
}
const ef = (e, t) => t === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Zt.test(e) || e === "0") && !e.startsWith("url("));
function l1(e) {
    const t = e[0];
    if (e.length === 1)
        return !0;
    for (let n = 0; n < e.length; n++)
        if (e[n] !== t)
            return !0
}
function a1(e, t, n, r) {
    const i = e[0];
    if (i === null)
        return !1;
    if (t === "display" || t === "visibility")
        return !0;
    const s = e[e.length - 1]
      , o = ef(i, t)
      , l = ef(s, t);
    return !o || !l ? !1 : l1(e) || (n === "spring" || uu(n)) && r
}
const u1 = e => e !== null;
function Zs(e, {repeat: t, repeatType: n="loop"}, r) {
    const i = e.filter(u1)
      , s = t && n !== "loop" && t % 2 === 1 ? 0 : i.length - 1;
    return !s || r === void 0 ? i[s] : r
}
const c1 = 40;
class hm {
    constructor({autoplay: t=!0, delay: n=0, type: r="keyframes", repeat: i=0, repeatDelay: s=0, repeatType: o="loop", ...l}) {
        this.isStopped = !1,
        this.hasAttemptedResolve = !1,
        this.createdAt = mt.now(),
        this.options = {
            autoplay: t,
            delay: n,
            type: r,
            repeat: i,
            repeatDelay: s,
            repeatType: o,
            ...l
        },
        this.updateFinishedPromise()
    }
    calcStartTime() {
        return this.resolvedAt ? this.resolvedAt - this.createdAt > c1 ? this.resolvedAt : this.createdAt : this.createdAt
    }
    get resolved() {
        return !this._resolved && !this.hasAttemptedResolve && r1(),
        this._resolved
    }
    onKeyframesResolved(t, n) {
        this.resolvedAt = mt.now(),
        this.hasAttemptedResolve = !0;
        const {name: r, type: i, velocity: s, delay: o, onComplete: l, onUpdate: a, isGenerator: u} = this.options;
        if (!u && !a1(t, r, i, s))
            if (o)
                this.options.duration = 0;
            else {
                a && a(Zs(t, this.options, n)),
                l && l(),
                this.resolveFinishedPromise();
                return
            }
        const c = this.initPlayback(t, n);
        c !== !1 && (this._resolved = {
            keyframes: t,
            finalKeyframe: n,
            ...c
        },
        this.onPostResolved())
    }
    onPostResolved() {}
    then(t, n) {
        return this.currentFinishedPromise.then(t, n)
    }
    flatten() {
        this.options.type = "keyframes",
        this.options.ease = "linear"
    }
    updateFinishedPromise() {
        this.currentFinishedPromise = new Promise(t => {
            this.resolveFinishedPromise = t
        }
        )
    }
}
const ne = (e, t, n) => e + (t - e) * n;
function No(e, t, n) {
    return n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6 ? e + (t - e) * 6 * n : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e
}
function f1({hue: e, saturation: t, lightness: n, alpha: r}) {
    e /= 360,
    t /= 100,
    n /= 100;
    let i = 0
      , s = 0
      , o = 0;
    if (!t)
        i = s = o = n;
    else {
        const l = n < .5 ? n * (1 + t) : n + t - n * t
          , a = 2 * n - l;
        i = No(a, l, e + 1 / 3),
        s = No(a, l, e),
        o = No(a, l, e - 1 / 3)
    }
    return {
        red: Math.round(i * 255),
        green: Math.round(s * 255),
        blue: Math.round(o * 255),
        alpha: r
    }
}
function Es(e, t) {
    return n => n > 0 ? t : e
}
const jo = (e, t, n) => {
    const r = e * e
      , i = n * (t * t - r) + r;
    return i < 0 ? 0 : Math.sqrt(i)
}
  , d1 = [Fl, dn, Bn]
  , h1 = e => d1.find(t => t.test(e));
function tf(e) {
    const t = h1(e);
    if (!t)
        return !1;
    let n = t.parse(e);
    return t === Bn && (n = f1(n)),
    n
}
const nf = (e, t) => {
    const n = tf(e)
      , r = tf(t);
    if (!n || !r)
        return Es(e, t);
    const i = {
        ...n
    };
    return s => (i.red = jo(n.red, r.red, s),
    i.green = jo(n.green, r.green, s),
    i.blue = jo(n.blue, r.blue, s),
    i.alpha = ne(n.alpha, r.alpha, s),
    dn.transform(i))
}
  , p1 = (e, t) => n => t(e(n))
  , mi = (...e) => e.reduce(p1)
  , $l = new Set(["none", "hidden"]);
function m1(e, t) {
    return $l.has(e) ? n => n <= 0 ? e : t : n => n >= 1 ? t : e
}
function g1(e, t) {
    return n => ne(e, t, n)
}
function Su(e) {
    return typeof e == "number" ? g1 : typeof e == "string" ? tu(e) ? Es : Te.test(e) ? nf : x1 : Array.isArray(e) ? pm : typeof e == "object" ? Te.test(e) ? nf : y1 : Es
}
function pm(e, t) {
    const n = [...e]
      , r = n.length
      , i = e.map( (s, o) => Su(s)(s, t[o]));
    return s => {
        for (let o = 0; o < r; o++)
            n[o] = i[o](s);
        return n
    }
}
function y1(e, t) {
    const n = {
        ...e,
        ...t
    }
      , r = {};
    for (const i in n)
        e[i] !== void 0 && t[i] !== void 0 && (r[i] = Su(e[i])(e[i], t[i]));
    return i => {
        for (const s in r)
            n[s] = r[s](i);
        return n
    }
}
function v1(e, t) {
    var n;
    const r = []
      , i = {
        color: 0,
        var: 0,
        number: 0
    };
    for (let s = 0; s < t.values.length; s++) {
        const o = t.types[s]
          , l = e.indexes[o][i[o]]
          , a = (n = e.values[l]) !== null && n !== void 0 ? n : 0;
        r[s] = a,
        i[o]++
    }
    return r
}
const x1 = (e, t) => {
    const n = Zt.createTransformer(t)
      , r = oi(e)
      , i = oi(t);
    return r.indexes.var.length === i.indexes.var.length && r.indexes.color.length === i.indexes.color.length && r.indexes.number.length >= i.indexes.number.length ? $l.has(e) && !i.values.length || $l.has(t) && !r.values.length ? m1(e, t) : mi(pm(v1(r, i), i.values), n) : Es(e, t)
}
;
function mm(e, t, n) {
    return typeof e == "number" && typeof t == "number" && typeof n == "number" ? ne(e, t, n) : Su(e)(e, t)
}
const w1 = 5;
function gm(e, t, n) {
    const r = Math.max(t - w1, 0);
    return Wp(n - e(r), t - r)
}
const oe = {
    stiffness: 100,
    damping: 10,
    mass: 1,
    velocity: 0,
    duration: 800,
    bounce: .3,
    visualDuration: .3,
    restSpeed: {
        granular: .01,
        default: 2
    },
    restDelta: {
        granular: .005,
        default: .5
    },
    minDuration: .01,
    maxDuration: 10,
    minDamping: .05,
    maxDamping: 1
}
  , Ao = .001;
function S1({duration: e=oe.duration, bounce: t=oe.bounce, velocity: n=oe.velocity, mass: r=oe.mass}) {
    let i, s, o = 1 - t;
    o = Nt(oe.minDamping, oe.maxDamping, o),
    e = Nt(oe.minDuration, oe.maxDuration, Tt(e)),
    o < 1 ? (i = u => {
        const c = u * o
          , f = c * e
          , d = c - n
          , y = Wl(u, o)
          , v = Math.exp(-f);
        return Ao - d / y * v
    }
    ,
    s = u => {
        const f = u * o * e
          , d = f * n + n
          , y = Math.pow(o, 2) * Math.pow(u, 2) * e
          , v = Math.exp(-f)
          , x = Wl(Math.pow(u, 2), o);
        return (-i(u) + Ao > 0 ? -1 : 1) * ((d - y) * v) / x
    }
    ) : (i = u => {
        const c = Math.exp(-u * e)
          , f = (u - n) * e + 1;
        return -Ao + c * f
    }
    ,
    s = u => {
        const c = Math.exp(-u * e)
          , f = (n - u) * (e * e);
        return c * f
    }
    );
    const l = 5 / e
      , a = T1(i, s, l);
    if (e = kt(e),
    isNaN(a))
        return {
            stiffness: oe.stiffness,
            damping: oe.damping,
            duration: e
        };
    {
        const u = Math.pow(a, 2) * r;
        return {
            stiffness: u,
            damping: o * 2 * Math.sqrt(r * u),
            duration: e
        }
    }
}
const k1 = 12;
function T1(e, t, n) {
    let r = n;
    for (let i = 1; i < k1; i++)
        r = r - e(r) / t(r);
    return r
}
function Wl(e, t) {
    return e * Math.sqrt(1 - t * t)
}
const C1 = ["duration", "bounce"]
  , P1 = ["stiffness", "damping", "mass"];
function rf(e, t) {
    return t.some(n => e[n] !== void 0)
}
function E1(e) {
    let t = {
        velocity: oe.velocity,
        stiffness: oe.stiffness,
        damping: oe.damping,
        mass: oe.mass,
        isResolvedFromDuration: !1,
        ...e
    };
    if (!rf(e, P1) && rf(e, C1))
        if (e.visualDuration) {
            const n = e.visualDuration
              , r = 2 * Math.PI / (n * 1.2)
              , i = r * r
              , s = 2 * Nt(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(i);
            t = {
                ...t,
                mass: oe.mass,
                stiffness: i,
                damping: s
            }
        } else {
            const n = S1(e);
            t = {
                ...t,
                ...n,
                mass: oe.mass
            },
            t.isResolvedFromDuration = !0
        }
    return t
}
function ym(e=oe.visualDuration, t=oe.bounce) {
    const n = typeof e != "object" ? {
        visualDuration: e,
        keyframes: [0, 1],
        bounce: t
    } : e;
    let {restSpeed: r, restDelta: i} = n;
    const s = n.keyframes[0]
      , o = n.keyframes[n.keyframes.length - 1]
      , l = {
        done: !1,
        value: s
    }
      , {stiffness: a, damping: u, mass: c, duration: f, velocity: d, isResolvedFromDuration: y} = E1({
        ...n,
        velocity: -Tt(n.velocity || 0)
    })
      , v = d || 0
      , x = u / (2 * Math.sqrt(a * c))
      , T = o - s
      , p = Tt(Math.sqrt(a / c))
      , h = Math.abs(T) < 5;
    r || (r = h ? oe.restSpeed.granular : oe.restSpeed.default),
    i || (i = h ? oe.restDelta.granular : oe.restDelta.default);
    let m;
    if (x < 1) {
        const k = Wl(p, x);
        m = P => {
            const N = Math.exp(-x * p * P);
            return o - N * ((v + x * p * T) / k * Math.sin(k * P) + T * Math.cos(k * P))
        }
    } else if (x === 1)
        m = k => o - Math.exp(-p * k) * (T + (v + p * T) * k);
    else {
        const k = p * Math.sqrt(x * x - 1);
        m = P => {
            const N = Math.exp(-x * p * P)
              , C = Math.min(k * P, 300);
            return o - N * ((v + x * p * T) * Math.sinh(C) + k * T * Math.cosh(C)) / k
        }
    }
    const w = {
        calculatedDuration: y && f || null,
        next: k => {
            const P = m(k);
            if (y)
                l.done = k >= f;
            else {
                let N = 0;
                x < 1 && (N = k === 0 ? kt(v) : gm(m, k, P));
                const C = Math.abs(N) <= r
                  , I = Math.abs(o - P) <= i;
                l.done = C && I
            }
            return l.value = l.done ? o : P,
            l
        }
        ,
        toString: () => {
            const k = Math.min(_p(w), _l)
              , P = zp(N => w.next(k * N).value, k, 30);
            return k + "ms " + P
        }
    };
    return w
}
function sf({keyframes: e, velocity: t=0, power: n=.8, timeConstant: r=325, bounceDamping: i=10, bounceStiffness: s=500, modifyTarget: o, min: l, max: a, restDelta: u=.5, restSpeed: c}) {
    const f = e[0]
      , d = {
        done: !1,
        value: f
    }
      , y = C => l !== void 0 && C < l || a !== void 0 && C > a
      , v = C => l === void 0 ? a : a === void 0 || Math.abs(l - C) < Math.abs(a - C) ? l : a;
    let x = n * t;
    const T = f + x
      , p = o === void 0 ? T : o(T);
    p !== T && (x = p - f);
    const h = C => -x * Math.exp(-C / r)
      , m = C => p + h(C)
      , w = C => {
        const I = h(C)
          , V = m(C);
        d.done = Math.abs(I) <= u,
        d.value = d.done ? p : V
    }
    ;
    let k, P;
    const N = C => {
        y(d.value) && (k = C,
        P = ym({
            keyframes: [d.value, v(d.value)],
            velocity: gm(m, C, d.value),
            damping: i,
            stiffness: s,
            restDelta: u,
            restSpeed: c
        }))
    }
    ;
    return N(0),
    {
        calculatedDuration: null,
        next: C => {
            let I = !1;
            return !P && k === void 0 && (I = !0,
            w(C),
            N(C)),
            k !== void 0 && C >= k ? P.next(C - k) : (!I && w(C),
            d)
        }
    }
}
const M1 = pi(.42, 0, 1, 1)
  , N1 = pi(0, 0, .58, 1)
  , vm = pi(.42, 0, .58, 1)
  , j1 = e => Array.isArray(e) && typeof e[0] != "number"
  , of = {
    linear: Ue,
    easeIn: M1,
    easeInOut: vm,
    easeOut: N1,
    circIn: gu,
    circInOut: qp,
    circOut: Zp,
    backIn: mu,
    backInOut: Yp,
    backOut: Xp,
    anticipate: bp
}
  , lf = e => {
    if (cu(e)) {
        Rl(e.length === 4);
        const [t,n,r,i] = e;
        return pi(t, n, r, i)
    } else if (typeof e == "string")
        return Rl(of[e] !== void 0),
        of[e];
    return e
}
;
function A1(e, t, n) {
    const r = []
      , i = n || mm
      , s = e.length - 1;
    for (let o = 0; o < s; o++) {
        let l = i(e[o], e[o + 1]);
        if (t) {
            const a = Array.isArray(t) ? t[o] || Ue : t;
            l = mi(a, l)
        }
        r.push(l)
    }
    return r
}
function D1(e, t, {clamp: n=!0, ease: r, mixer: i}={}) {
    const s = e.length;
    if (Rl(s === t.length),
    s === 1)
        return () => t[0];
    if (s === 2 && t[0] === t[1])
        return () => t[1];
    const o = e[0] === e[1];
    e[0] > e[s - 1] && (e = [...e].reverse(),
    t = [...t].reverse());
    const l = A1(t, r, i)
      , a = l.length
      , u = c => {
        if (o && c < e[0])
            return t[0];
        let f = 0;
        if (a > 1)
            for (; f < e.length - 2 && !(c < e[f + 1]); f++)
                ;
        const d = rr(e[f], e[f + 1], c);
        return l[f](d)
    }
    ;
    return n ? c => u(Nt(e[0], e[s - 1], c)) : u
}
function L1(e, t) {
    const n = e[e.length - 1];
    for (let r = 1; r <= t; r++) {
        const i = rr(0, t, r);
        e.push(ne(n, 1, i))
    }
}
function R1(e) {
    const t = [0];
    return L1(t, e.length - 1),
    t
}
function V1(e, t) {
    return e.map(n => n * t)
}
function _1(e, t) {
    return e.map( () => t || vm).splice(0, e.length - 1)
}
function Ms({duration: e=300, keyframes: t, times: n, ease: r="easeInOut"}) {
    const i = j1(r) ? r.map(lf) : lf(r)
      , s = {
        done: !1,
        value: t[0]
    }
      , o = V1(n && n.length === t.length ? n : R1(t), e)
      , l = D1(o, t, {
        ease: Array.isArray(i) ? i : _1(t, i)
    });
    return {
        calculatedDuration: e,
        next: a => (s.value = l(a),
        s.done = a >= e,
        s)
    }
}
const z1 = e => {
    const t = ({timestamp: n}) => e(n);
    return {
        start: () => q.update(t, !0),
        stop: () => bt(t),
        now: () => ve.isProcessing ? ve.timestamp : mt.now()
    }
}
  , I1 = {
    decay: sf,
    inertia: sf,
    tween: Ms,
    keyframes: Ms,
    spring: ym
}
  , F1 = e => e / 100;
class ku extends hm {
    constructor(t) {
        super(t),
        this.holdTime = null,
        this.cancelTime = null,
        this.currentTime = 0,
        this.playbackSpeed = 1,
        this.pendingPlayState = "running",
        this.startTime = null,
        this.state = "idle",
        this.stop = () => {
            if (this.resolver.cancel(),
            this.isStopped = !0,
            this.state === "idle")
                return;
            this.teardown();
            const {onStop: a} = this.options;
            a && a()
        }
        ;
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options
          , o = (i == null ? void 0 : i.KeyframeResolver) || wu
          , l = (a, u) => this.onKeyframesResolved(a, u);
        this.resolver = new o(s,l,n,r,i),
        this.resolver.scheduleResolve()
    }
    flatten() {
        super.flatten(),
        this._resolved && Object.assign(this._resolved, this.initPlayback(this._resolved.keyframes))
    }
    initPlayback(t) {
        const {type: n="keyframes", repeat: r=0, repeatDelay: i=0, repeatType: s, velocity: o=0} = this.options
          , l = uu(n) ? n : I1[n] || Ms;
        let a, u;
        l !== Ms && typeof t[0] != "number" && (a = mi(F1, mm(t[0], t[1])),
        t = [0, 100]);
        const c = l({
            ...this.options,
            keyframes: t
        });
        s === "mirror" && (u = l({
            ...this.options,
            keyframes: [...t].reverse(),
            velocity: -o
        })),
        c.calculatedDuration === null && (c.calculatedDuration = _p(c));
        const {calculatedDuration: f} = c
          , d = f + i
          , y = d * (r + 1) - i;
        return {
            generator: c,
            mirroredGenerator: u,
            mapPercentToKeyframes: a,
            calculatedDuration: f,
            resolvedDuration: d,
            totalDuration: y
        }
    }
    onPostResolved() {
        const {autoplay: t=!0} = this.options;
        this.play(),
        this.pendingPlayState === "paused" || !t ? this.pause() : this.state = this.pendingPlayState
    }
    tick(t, n=!1) {
        const {resolved: r} = this;
        if (!r) {
            const {keyframes: C} = this.options;
            return {
                done: !0,
                value: C[C.length - 1]
            }
        }
        const {finalKeyframe: i, generator: s, mirroredGenerator: o, mapPercentToKeyframes: l, keyframes: a, calculatedDuration: u, totalDuration: c, resolvedDuration: f} = r;
        if (this.startTime === null)
            return s.next(0);
        const {delay: d, repeat: y, repeatType: v, repeatDelay: x, onUpdate: T} = this.options;
        this.speed > 0 ? this.startTime = Math.min(this.startTime, t) : this.speed < 0 && (this.startTime = Math.min(t - c / this.speed, this.startTime)),
        n ? this.currentTime = t : this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = Math.round(t - this.startTime) * this.speed;
        const p = this.currentTime - d * (this.speed >= 0 ? 1 : -1)
          , h = this.speed >= 0 ? p < 0 : p > c;
        this.currentTime = Math.max(p, 0),
        this.state === "finished" && this.holdTime === null && (this.currentTime = c);
        let m = this.currentTime
          , w = s;
        if (y) {
            const C = Math.min(this.currentTime, c) / f;
            let I = Math.floor(C)
              , V = C % 1;
            !V && C >= 1 && (V = 1),
            V === 1 && I--,
            I = Math.min(I, y + 1),
            !!(I % 2) && (v === "reverse" ? (V = 1 - V,
            x && (V -= x / f)) : v === "mirror" && (w = o)),
            m = Nt(0, 1, V) * f
        }
        const k = h ? {
            done: !1,
            value: a[0]
        } : w.next(m);
        l && (k.value = l(k.value));
        let {done: P} = k;
        !h && u !== null && (P = this.speed >= 0 ? this.currentTime >= c : this.currentTime <= 0);
        const N = this.holdTime === null && (this.state === "finished" || this.state === "running" && P);
        return N && i !== void 0 && (k.value = Zs(a, this.options, i)),
        T && T(k.value),
        N && this.finish(),
        k
    }
    get duration() {
        const {resolved: t} = this;
        return t ? Tt(t.calculatedDuration) : 0
    }
    get time() {
        return Tt(this.currentTime)
    }
    set time(t) {
        t = kt(t),
        this.currentTime = t,
        this.holdTime !== null || this.speed === 0 ? this.holdTime = t : this.driver && (this.startTime = this.driver.now() - t / this.speed)
    }
    get speed() {
        return this.playbackSpeed
    }
    set speed(t) {
        const n = this.playbackSpeed !== t;
        this.playbackSpeed = t,
        n && (this.time = Tt(this.currentTime))
    }
    play() {
        if (this.resolver.isScheduled || this.resolver.resume(),
        !this._resolved) {
            this.pendingPlayState = "running";
            return
        }
        if (this.isStopped)
            return;
        const {driver: t=z1, onPlay: n, startTime: r} = this.options;
        this.driver || (this.driver = t(s => this.tick(s))),
        n && n();
        const i = this.driver.now();
        this.holdTime !== null ? this.startTime = i - this.holdTime : this.startTime ? this.state === "finished" && (this.startTime = i) : this.startTime = r ?? this.calcStartTime(),
        this.state === "finished" && this.updateFinishedPromise(),
        this.cancelTime = this.startTime,
        this.holdTime = null,
        this.state = "running",
        this.driver.start()
    }
    pause() {
        var t;
        if (!this._resolved) {
            this.pendingPlayState = "paused";
            return
        }
        this.state = "paused",
        this.holdTime = (t = this.currentTime) !== null && t !== void 0 ? t : 0
    }
    complete() {
        this.state !== "running" && this.play(),
        this.pendingPlayState = this.state = "finished",
        this.holdTime = null
    }
    finish() {
        this.teardown(),
        this.state = "finished";
        const {onComplete: t} = this.options;
        t && t()
    }
    cancel() {
        this.cancelTime !== null && this.tick(this.cancelTime),
        this.teardown(),
        this.updateFinishedPromise()
    }
    teardown() {
        this.state = "idle",
        this.stopDriver(),
        this.resolveFinishedPromise(),
        this.updateFinishedPromise(),
        this.startTime = this.cancelTime = null,
        this.resolver.cancel()
    }
    stopDriver() {
        this.driver && (this.driver.stop(),
        this.driver = void 0)
    }
    sample(t) {
        return this.startTime = 0,
        this.tick(t, !0)
    }
}
const O1 = new Set(["opacity", "clipPath", "filter", "transform"]);
function B1(e, t, n, {delay: r=0, duration: i=300, repeat: s=0, repeatType: o="loop", ease: l="easeInOut", times: a}={}) {
    const u = {
        [t]: n
    };
    a && (u.offset = a);
    const c = Fp(l, i);
    return Array.isArray(c) && (u.easing = c),
    e.animate(u, {
        delay: r,
        duration: i,
        easing: Array.isArray(c) ? "linear" : c,
        fill: "both",
        iterations: s + 1,
        direction: o === "reverse" ? "alternate" : "normal"
    })
}
const U1 = Xa( () => Object.hasOwnProperty.call(Element.prototype, "animate"))
  , Ns = 10
  , $1 = 2e4;
function W1(e) {
    return uu(e.type) || e.type === "spring" || !Ip(e.ease)
}
function H1(e, t) {
    const n = new ku({
        ...t,
        keyframes: e,
        repeat: 0,
        delay: 0,
        isGenerator: !0
    });
    let r = {
        done: !1,
        value: e[0]
    };
    const i = [];
    let s = 0;
    for (; !r.done && s < $1; )
        r = n.sample(s),
        i.push(r.value),
        s += Ns;
    return {
        times: void 0,
        keyframes: i,
        duration: s - Ns,
        ease: "linear"
    }
}
const xm = {
    anticipate: bp,
    backInOut: Yp,
    circInOut: qp
};
function K1(e) {
    return e in xm
}
class af extends hm {
    constructor(t) {
        super(t);
        const {name: n, motionValue: r, element: i, keyframes: s} = this.options;
        this.resolver = new dm(s, (o, l) => this.onKeyframesResolved(o, l),n,r,i),
        this.resolver.scheduleResolve()
    }
    initPlayback(t, n) {
        let {duration: r=300, times: i, ease: s, type: o, motionValue: l, name: a, startTime: u} = this.options;
        if (!l.owner || !l.owner.current)
            return !1;
        if (typeof s == "string" && Ps() && K1(s) && (s = xm[s]),
        W1(this.options)) {
            const {onComplete: f, onUpdate: d, motionValue: y, element: v, ...x} = this.options
              , T = H1(t, x);
            t = T.keyframes,
            t.length === 1 && (t[1] = t[0]),
            r = T.duration,
            i = T.times,
            s = T.ease,
            o = "keyframes"
        }
        const c = B1(l.owner.current, a, t, {
            ...this.options,
            duration: r,
            times: i,
            ease: s
        });
        return c.startTime = u ?? this.calcStartTime(),
        this.pendingTimeline ? (Hc(c, this.pendingTimeline),
        this.pendingTimeline = void 0) : c.onfinish = () => {
            const {onComplete: f} = this.options;
            l.set(Zs(t, this.options, n)),
            f && f(),
            this.cancel(),
            this.resolveFinishedPromise()
        }
        ,
        {
            animation: c,
            duration: r,
            times: i,
            type: o,
            ease: s,
            keyframes: t
        }
    }
    get duration() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {duration: n} = t;
        return Tt(n)
    }
    get time() {
        const {resolved: t} = this;
        if (!t)
            return 0;
        const {animation: n} = t;
        return Tt(n.currentTime || 0)
    }
    set time(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.currentTime = kt(t)
    }
    get speed() {
        const {resolved: t} = this;
        if (!t)
            return 1;
        const {animation: n} = t;
        return n.playbackRate
    }
    set speed(t) {
        const {resolved: n} = this;
        if (!n)
            return;
        const {animation: r} = n;
        r.playbackRate = t
    }
    get state() {
        const {resolved: t} = this;
        if (!t)
            return "idle";
        const {animation: n} = t;
        return n.playState
    }
    get startTime() {
        const {resolved: t} = this;
        if (!t)
            return null;
        const {animation: n} = t;
        return n.startTime
    }
    attachTimeline(t) {
        if (!this._resolved)
            this.pendingTimeline = t;
        else {
            const {resolved: n} = this;
            if (!n)
                return Ue;
            const {animation: r} = n;
            Hc(r, t)
        }
        return Ue
    }
    play() {
        if (this.isStopped)
            return;
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.playState === "finished" && this.updateFinishedPromise(),
        n.play()
    }
    pause() {
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n} = t;
        n.pause()
    }
    stop() {
        if (this.resolver.cancel(),
        this.isStopped = !0,
        this.state === "idle")
            return;
        this.resolveFinishedPromise(),
        this.updateFinishedPromise();
        const {resolved: t} = this;
        if (!t)
            return;
        const {animation: n, keyframes: r, duration: i, type: s, ease: o, times: l} = t;
        if (n.playState === "idle" || n.playState === "finished")
            return;
        if (this.time) {
            const {motionValue: u, onUpdate: c, onComplete: f, element: d, ...y} = this.options
              , v = new ku({
                ...y,
                keyframes: r,
                duration: i,
                type: s,
                ease: o,
                times: l,
                isGenerator: !0
            })
              , x = kt(this.time);
            u.setWithVelocity(v.sample(x - Ns).value, v.sample(x).value, Ns)
        }
        const {onStop: a} = this.options;
        a && a(),
        this.cancel()
    }
    complete() {
        const {resolved: t} = this;
        t && t.animation.finish()
    }
    cancel() {
        const {resolved: t} = this;
        t && t.animation.cancel()
    }
    static supports(t) {
        const {motionValue: n, name: r, repeatDelay: i, repeatType: s, damping: o, type: l} = t;
        if (!n || !n.owner || !(n.owner.current instanceof HTMLElement))
            return !1;
        const {onUpdate: a, transformTemplate: u} = n.owner.getProps();
        return U1() && r && O1.has(r) && !a && !u && !i && s !== "mirror" && o !== 0 && l !== "inertia"
    }
}
const G1 = {
    type: "spring",
    stiffness: 500,
    damping: 25,
    restSpeed: 10
}
  , Q1 = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
})
  , X1 = {
    type: "keyframes",
    duration: .8
}
  , Y1 = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
}
  , b1 = (e, {keyframes: t}) => t.length > 2 ? X1 : Tn.has(e) ? e.startsWith("scale") ? Q1(t[1]) : G1 : Y1;
function Z1({when: e, delay: t, delayChildren: n, staggerChildren: r, staggerDirection: i, repeat: s, repeatType: o, repeatDelay: l, from: a, elapsed: u, ...c}) {
    return !!Object.keys(c).length
}
const Tu = (e, t, n, r={}, i, s) => o => {
    const l = au(r, e) || {}
      , a = l.delay || r.delay || 0;
    let {elapsed: u=0} = r;
    u = u - kt(a);
    let c = {
        keyframes: Array.isArray(n) ? n : [null, n],
        ease: "easeOut",
        velocity: t.getVelocity(),
        ...l,
        delay: -u,
        onUpdate: d => {
            t.set(d),
            l.onUpdate && l.onUpdate(d)
        }
        ,
        onComplete: () => {
            o(),
            l.onComplete && l.onComplete()
        }
        ,
        name: e,
        motionValue: t,
        element: s ? void 0 : i
    };
    Z1(l) || (c = {
        ...c,
        ...b1(e, c)
    }),
    c.duration && (c.duration = kt(c.duration)),
    c.repeatDelay && (c.repeatDelay = kt(c.repeatDelay)),
    c.from !== void 0 && (c.keyframes[0] = c.from);
    let f = !1;
    if ((c.type === !1 || c.duration === 0 && !c.repeatDelay) && (c.duration = 0,
    c.delay === 0 && (f = !0)),
    f && !s && t.get() !== void 0) {
        const d = Zs(c.keyframes, l);
        if (d !== void 0)
            return q.update( () => {
                c.onUpdate(d),
                c.onComplete()
            }
            ),
            new yv([])
    }
    return !s && af.supports(c) ? new af(c) : new ku(c)
}
;
function q1({protectedKeys: e, needsAnimating: t}, n) {
    const r = e.hasOwnProperty(n) && t[n] !== !0;
    return t[n] = !1,
    r
}
function wm(e, t, {delay: n=0, transitionOverride: r, type: i}={}) {
    var s;
    let {transition: o=e.getDefaultTransition(), transitionEnd: l, ...a} = t;
    r && (o = r);
    const u = []
      , c = i && e.animationState && e.animationState.getState()[i];
    for (const f in a) {
        const d = e.getValue(f, (s = e.latestValues[f]) !== null && s !== void 0 ? s : null)
          , y = a[f];
        if (y === void 0 || c && q1(c, f))
            continue;
        const v = {
            delay: n,
            ...au(o || {}, f)
        };
        let x = !1;
        if (window.MotionHandoffAnimation) {
            const p = Hp(e);
            if (p) {
                const h = window.MotionHandoffAnimation(p, f, q);
                h !== null && (v.startTime = h,
                x = !0)
            }
        }
        Il(e, f),
        d.start(Tu(f, d, y, e.shouldReduceMotion && $p.has(f) ? {
            type: !1
        } : v, e, x));
        const T = d.animation;
        T && u.push(T)
    }
    return l && Promise.all(u).then( () => {
        q.update( () => {
            l && Dv(e, l)
        }
        )
    }
    ),
    u
}
function Hl(e, t, n={}) {
    var r;
    const i = bs(e, t, n.type === "exit" ? (r = e.presenceContext) === null || r === void 0 ? void 0 : r.custom : void 0);
    let {transition: s=e.getDefaultTransition() || {}} = i || {};
    n.transitionOverride && (s = n.transitionOverride);
    const o = i ? () => Promise.all(wm(e, i, n)) : () => Promise.resolve()
      , l = e.variantChildren && e.variantChildren.size ? (u=0) => {
        const {delayChildren: c=0, staggerChildren: f, staggerDirection: d} = s;
        return J1(e, t, c + u, f, d, n)
    }
    : () => Promise.resolve()
      , {when: a} = s;
    if (a) {
        const [u,c] = a === "beforeChildren" ? [o, l] : [l, o];
        return u().then( () => c())
    } else
        return Promise.all([o(), l(n.delay)])
}
function J1(e, t, n=0, r=0, i=1, s) {
    const o = []
      , l = (e.variantChildren.size - 1) * r
      , a = i === 1 ? (u=0) => u * r : (u=0) => l - u * r;
    return Array.from(e.variantChildren).sort(ex).forEach( (u, c) => {
        u.notify("AnimationStart", t),
        o.push(Hl(u, t, {
            ...s,
            delay: n + a(c)
        }).then( () => u.notify("AnimationComplete", t)))
    }
    ),
    Promise.all(o)
}
function ex(e, t) {
    return e.sortNodePosition(t)
}
function tx(e, t, n={}) {
    e.notify("AnimationStart", t);
    let r;
    if (Array.isArray(t)) {
        const i = t.map(s => Hl(e, s, n));
        r = Promise.all(i)
    } else if (typeof t == "string")
        r = Hl(e, t, n);
    else {
        const i = typeof t == "function" ? bs(e, t, n.custom) : t;
        r = Promise.all(wm(e, i, n))
    }
    return r.then( () => {
        e.notify("AnimationComplete", t)
    }
    )
}
const nx = ba.length;
function Sm(e) {
    if (!e)
        return;
    if (!e.isControllingVariants) {
        const n = e.parent ? Sm(e.parent) || {} : {};
        return e.props.initial !== void 0 && (n.initial = e.props.initial),
        n
    }
    const t = {};
    for (let n = 0; n < nx; n++) {
        const r = ba[n]
          , i = e.props[r];
        (ri(i) || i === !1) && (t[r] = i)
    }
    return t
}
const rx = [...Ya].reverse()
  , ix = Ya.length;
function sx(e) {
    return t => Promise.all(t.map( ({animation: n, options: r}) => tx(e, n, r)))
}
function ox(e) {
    let t = sx(e)
      , n = uf()
      , r = !0;
    const i = a => (u, c) => {
        var f;
        const d = bs(e, c, a === "exit" ? (f = e.presenceContext) === null || f === void 0 ? void 0 : f.custom : void 0);
        if (d) {
            const {transition: y, transitionEnd: v, ...x} = d;
            u = {
                ...u,
                ...x,
                ...v
            }
        }
        return u
    }
    ;
    function s(a) {
        t = a(e)
    }
    function o(a) {
        const {props: u} = e
          , c = Sm(e.parent) || {}
          , f = []
          , d = new Set;
        let y = {}
          , v = 1 / 0;
        for (let T = 0; T < ix; T++) {
            const p = rx[T]
              , h = n[p]
              , m = u[p] !== void 0 ? u[p] : c[p]
              , w = ri(m)
              , k = p === a ? h.isActive : null;
            k === !1 && (v = T);
            let P = m === c[p] && m !== u[p] && w;
            if (P && r && e.manuallyAnimateOnMount && (P = !1),
            h.protectedKeys = {
                ...y
            },
            !h.isActive && k === null || !m && !h.prevProp || Xs(m) || typeof m == "boolean")
                continue;
            const N = lx(h.prevProp, m);
            let C = N || p === a && h.isActive && !P && w || T > v && w
              , I = !1;
            const V = Array.isArray(m) ? m : [m];
            let H = V.reduce(i(p), {});
            k === !1 && (H = {});
            const {prevResolvedValues: fe={}} = h
              , O = {
                ...fe,
                ...H
            }
              , L = z => {
                C = !0,
                d.has(z) && (I = !0,
                d.delete(z)),
                h.needsAnimating[z] = !0;
                const E = e.getValue(z);
                E && (E.liveStyle = !1)
            }
            ;
            for (const z in O) {
                const E = H[z]
                  , A = fe[z];
                if (y.hasOwnProperty(z))
                    continue;
                let R = !1;
                Vl(E) && Vl(A) ? R = !Vp(E, A) : R = E !== A,
                R ? E != null ? L(z) : d.add(z) : E !== void 0 && d.has(z) ? L(z) : h.protectedKeys[z] = !0
            }
            h.prevProp = m,
            h.prevResolvedValues = H,
            h.isActive && (y = {
                ...y,
                ...H
            }),
            r && e.blockInitialAnimation && (C = !1),
            C && (!(P && N) || I) && f.push(...V.map(z => ({
                animation: z,
                options: {
                    type: p
                }
            })))
        }
        if (d.size) {
            const T = {};
            d.forEach(p => {
                const h = e.getBaseTarget(p)
                  , m = e.getValue(p);
                m && (m.liveStyle = !0),
                T[p] = h ?? null
            }
            ),
            f.push({
                animation: T
            })
        }
        let x = !!f.length;
        return r && (u.initial === !1 || u.initial === u.animate) && !e.manuallyAnimateOnMount && (x = !1),
        r = !1,
        x ? t(f) : Promise.resolve()
    }
    function l(a, u) {
        var c;
        if (n[a].isActive === u)
            return Promise.resolve();
        (c = e.variantChildren) === null || c === void 0 || c.forEach(d => {
            var y;
            return (y = d.animationState) === null || y === void 0 ? void 0 : y.setActive(a, u)
        }
        ),
        n[a].isActive = u;
        const f = o(a);
        for (const d in n)
            n[d].protectedKeys = {};
        return f
    }
    return {
        animateChanges: o,
        setActive: l,
        setAnimateFunction: s,
        getState: () => n,
        reset: () => {
            n = uf(),
            r = !0
        }
    }
}
function lx(e, t) {
    return typeof t == "string" ? t !== e : Array.isArray(t) ? !Vp(t, e) : !1
}
function rn(e=!1) {
    return {
        isActive: e,
        protectedKeys: {},
        needsAnimating: {},
        prevResolvedValues: {}
    }
}
function uf() {
    return {
        animate: rn(!0),
        whileInView: rn(),
        whileHover: rn(),
        whileTap: rn(),
        whileDrag: rn(),
        whileFocus: rn(),
        exit: rn()
    }
}
class tn {
    constructor(t) {
        this.isMounted = !1,
        this.node = t
    }
    update() {}
}
class ax extends tn {
    constructor(t) {
        super(t),
        t.animationState || (t.animationState = ox(t))
    }
    updateAnimationControlsSubscription() {
        const {animate: t} = this.node.getProps();
        Xs(t) && (this.unmountControls = t.subscribe(this.node))
    }
    mount() {
        this.updateAnimationControlsSubscription()
    }
    update() {
        const {animate: t} = this.node.getProps()
          , {animate: n} = this.node.prevProps || {};
        t !== n && this.updateAnimationControlsSubscription()
    }
    unmount() {
        var t;
        this.node.animationState.reset(),
        (t = this.unmountControls) === null || t === void 0 || t.call(this)
    }
}
let ux = 0;
class cx extends tn {
    constructor() {
        super(...arguments),
        this.id = ux++
    }
    update() {
        if (!this.node.presenceContext)
            return;
        const {isPresent: t, onExitComplete: n} = this.node.presenceContext
          , {isPresent: r} = this.node.prevPresenceContext || {};
        if (!this.node.animationState || t === r)
            return;
        const i = this.node.animationState.setActive("exit", !t);
        n && !t && i.then( () => n(this.id))
    }
    mount() {
        const {register: t} = this.node.presenceContext || {};
        t && (this.unmount = t(this.id))
    }
    unmount() {}
}
const fx = {
    animation: {
        Feature: ax
    },
    exit: {
        Feature: cx
    }
};
function li(e, t, n, r={
    passive: !0
}) {
    return e.addEventListener(t, n, r),
    () => e.removeEventListener(t, n)
}
function gi(e) {
    return {
        point: {
            x: e.pageX,
            y: e.pageY
        }
    }
}
const dx = e => t => fu(t) && e(t, gi(t));
function Ir(e, t, n, r) {
    return li(e, t, dx(n), r)
}
const cf = (e, t) => Math.abs(e - t);
function hx(e, t) {
    const n = cf(e.x, t.x)
      , r = cf(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2)
}
class km {
    constructor(t, n, {transformPagePoint: r, contextWindow: i, dragSnapToOrigin: s=!1}={}) {
        if (this.startEvent = null,
        this.lastMoveEvent = null,
        this.lastMoveEventInfo = null,
        this.handlers = {},
        this.contextWindow = window,
        this.updatePoint = () => {
            if (!(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const f = Lo(this.lastMoveEventInfo, this.history)
              , d = this.startEvent !== null
              , y = hx(f.offset, {
                x: 0,
                y: 0
            }) >= 3;
            if (!d && !y)
                return;
            const {point: v} = f
              , {timestamp: x} = ve;
            this.history.push({
                ...v,
                timestamp: x
            });
            const {onStart: T, onMove: p} = this.handlers;
            d || (T && T(this.lastMoveEvent, f),
            this.startEvent = this.lastMoveEvent),
            p && p(this.lastMoveEvent, f)
        }
        ,
        this.handlePointerMove = (f, d) => {
            this.lastMoveEvent = f,
            this.lastMoveEventInfo = Do(d, this.transformPagePoint),
            q.update(this.updatePoint, !0)
        }
        ,
        this.handlePointerUp = (f, d) => {
            this.end();
            const {onEnd: y, onSessionEnd: v, resumeAnimation: x} = this.handlers;
            if (this.dragSnapToOrigin && x && x(),
            !(this.lastMoveEvent && this.lastMoveEventInfo))
                return;
            const T = Lo(f.type === "pointercancel" ? this.lastMoveEventInfo : Do(d, this.transformPagePoint), this.history);
            this.startEvent && y && y(f, T),
            v && v(f, T)
        }
        ,
        !fu(t))
            return;
        this.dragSnapToOrigin = s,
        this.handlers = n,
        this.transformPagePoint = r,
        this.contextWindow = i || window;
        const o = gi(t)
          , l = Do(o, this.transformPagePoint)
          , {point: a} = l
          , {timestamp: u} = ve;
        this.history = [{
            ...a,
            timestamp: u
        }];
        const {onSessionStart: c} = n;
        c && c(t, Lo(l, this.history)),
        this.removeListeners = mi(Ir(this.contextWindow, "pointermove", this.handlePointerMove), Ir(this.contextWindow, "pointerup", this.handlePointerUp), Ir(this.contextWindow, "pointercancel", this.handlePointerUp))
    }
    updateHandlers(t) {
        this.handlers = t
    }
    end() {
        this.removeListeners && this.removeListeners(),
        bt(this.updatePoint)
    }
}
function Do(e, t) {
    return t ? {
        point: t(e.point)
    } : e
}
function ff(e, t) {
    return {
        x: e.x - t.x,
        y: e.y - t.y
    }
}
function Lo({point: e}, t) {
    return {
        point: e,
        delta: ff(e, Tm(t)),
        offset: ff(e, px(t)),
        velocity: mx(t, .1)
    }
}
function px(e) {
    return e[0]
}
function Tm(e) {
    return e[e.length - 1]
}
function mx(e, t) {
    if (e.length < 2)
        return {
            x: 0,
            y: 0
        };
    let n = e.length - 1
      , r = null;
    const i = Tm(e);
    for (; n >= 0 && (r = e[n],
    !(i.timestamp - r.timestamp > kt(t))); )
        n--;
    if (!r)
        return {
            x: 0,
            y: 0
        };
    const s = Tt(i.timestamp - r.timestamp);
    if (s === 0)
        return {
            x: 0,
            y: 0
        };
    const o = {
        x: (i.x - r.x) / s,
        y: (i.y - r.y) / s
    };
    return o.x === 1 / 0 && (o.x = 0),
    o.y === 1 / 0 && (o.y = 0),
    o
}
const Cm = 1e-4
  , gx = 1 - Cm
  , yx = 1 + Cm
  , Pm = .01
  , vx = 0 - Pm
  , xx = 0 + Pm;
function We(e) {
    return e.max - e.min
}
function wx(e, t, n) {
    return Math.abs(e - t) <= n
}
function df(e, t, n, r=.5) {
    e.origin = r,
    e.originPoint = ne(t.min, t.max, e.origin),
    e.scale = We(n) / We(t),
    e.translate = ne(n.min, n.max, e.origin) - e.originPoint,
    (e.scale >= gx && e.scale <= yx || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= vx && e.translate <= xx || isNaN(e.translate)) && (e.translate = 0)
}
function Fr(e, t, n, r) {
    df(e.x, t.x, n.x, r ? r.originX : void 0),
    df(e.y, t.y, n.y, r ? r.originY : void 0)
}
function hf(e, t, n) {
    e.min = n.min + t.min,
    e.max = e.min + We(t)
}
function Sx(e, t, n) {
    hf(e.x, t.x, n.x),
    hf(e.y, t.y, n.y)
}
function pf(e, t, n) {
    e.min = t.min - n.min,
    e.max = e.min + We(t)
}
function Or(e, t, n) {
    pf(e.x, t.x, n.x),
    pf(e.y, t.y, n.y)
}
function kx(e, {min: t, max: n}, r) {
    return t !== void 0 && e < t ? e = r ? ne(t, e, r.min) : Math.max(e, t) : n !== void 0 && e > n && (e = r ? ne(n, e, r.max) : Math.min(e, n)),
    e
}
function mf(e, t, n) {
    return {
        min: t !== void 0 ? e.min + t : void 0,
        max: n !== void 0 ? e.max + n - (e.max - e.min) : void 0
    }
}
function Tx(e, {top: t, left: n, bottom: r, right: i}) {
    return {
        x: mf(e.x, n, i),
        y: mf(e.y, t, r)
    }
}
function gf(e, t) {
    let n = t.min - e.min
      , r = t.max - e.max;
    return t.max - t.min < e.max - e.min && ([n,r] = [r, n]),
    {
        min: n,
        max: r
    }
}
function Cx(e, t) {
    return {
        x: gf(e.x, t.x),
        y: gf(e.y, t.y)
    }
}
function Px(e, t) {
    let n = .5;
    const r = We(e)
      , i = We(t);
    return i > r ? n = rr(t.min, t.max - r, e.min) : r > i && (n = rr(e.min, e.max - i, t.min)),
    Nt(0, 1, n)
}
function Ex(e, t) {
    const n = {};
    return t.min !== void 0 && (n.min = t.min - e.min),
    t.max !== void 0 && (n.max = t.max - e.min),
    n
}
const Kl = .35;
function Mx(e=Kl) {
    return e === !1 ? e = 0 : e === !0 && (e = Kl),
    {
        x: yf(e, "left", "right"),
        y: yf(e, "top", "bottom")
    }
}
function yf(e, t, n) {
    return {
        min: vf(e, t),
        max: vf(e, n)
    }
}
function vf(e, t) {
    return typeof e == "number" ? e : e[t] || 0
}
const xf = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
})
  , Un = () => ({
    x: xf(),
    y: xf()
})
  , wf = () => ({
    min: 0,
    max: 0
})
  , ue = () => ({
    x: wf(),
    y: wf()
});
function Qe(e) {
    return [e("x"), e("y")]
}
function Em({top: e, left: t, right: n, bottom: r}) {
    return {
        x: {
            min: t,
            max: n
        },
        y: {
            min: e,
            max: r
        }
    }
}
function Nx({x: e, y: t}) {
    return {
        top: t.min,
        right: e.max,
        bottom: t.max,
        left: e.min
    }
}
function jx(e, t) {
    if (!t)
        return e;
    const n = t({
        x: e.left,
        y: e.top
    })
      , r = t({
        x: e.right,
        y: e.bottom
    });
    return {
        top: n.y,
        left: n.x,
        bottom: r.y,
        right: r.x
    }
}
function Ro(e) {
    return e === void 0 || e === 1
}
function Gl({scale: e, scaleX: t, scaleY: n}) {
    return !Ro(e) || !Ro(t) || !Ro(n)
}
function ln(e) {
    return Gl(e) || Mm(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function Mm(e) {
    return Sf(e.x) || Sf(e.y)
}
function Sf(e) {
    return e && e !== "0%"
}
function js(e, t, n) {
    const r = e - n
      , i = t * r;
    return n + i
}
function kf(e, t, n, r, i) {
    return i !== void 0 && (e = js(e, i, r)),
    js(e, n, r) + t
}
function Ql(e, t=0, n=1, r, i) {
    e.min = kf(e.min, t, n, r, i),
    e.max = kf(e.max, t, n, r, i)
}
function Nm(e, {x: t, y: n}) {
    Ql(e.x, t.translate, t.scale, t.originPoint),
    Ql(e.y, n.translate, n.scale, n.originPoint)
}
const Tf = .999999999999
  , Cf = 1.0000000000001;
function Ax(e, t, n, r=!1) {
    const i = n.length;
    if (!i)
        return;
    t.x = t.y = 1;
    let s, o;
    for (let l = 0; l < i; l++) {
        s = n[l],
        o = s.projectionDelta;
        const {visualElement: a} = s.options;
        a && a.props.style && a.props.style.display === "contents" || (r && s.options.layoutScroll && s.scroll && s !== s.root && Wn(e, {
            x: -s.scroll.offset.x,
            y: -s.scroll.offset.y
        }),
        o && (t.x *= o.x.scale,
        t.y *= o.y.scale,
        Nm(e, o)),
        r && ln(s.latestValues) && Wn(e, s.latestValues))
    }
    t.x < Cf && t.x > Tf && (t.x = 1),
    t.y < Cf && t.y > Tf && (t.y = 1)
}
function $n(e, t) {
    e.min = e.min + t,
    e.max = e.max + t
}
function Pf(e, t, n, r, i=.5) {
    const s = ne(e.min, e.max, i);
    Ql(e, t, n, s, r)
}
function Wn(e, t) {
    Pf(e.x, t.x, t.scaleX, t.scale, t.originX),
    Pf(e.y, t.y, t.scaleY, t.scale, t.originY)
}
function jm(e, t) {
    return Em(jx(e.getBoundingClientRect(), t))
}
function Dx(e, t, n) {
    const r = jm(e, n)
      , {scroll: i} = t;
    return i && ($n(r.x, i.offset.x),
    $n(r.y, i.offset.y)),
    r
}
const Am = ({current: e}) => e ? e.ownerDocument.defaultView : null
  , Lx = new WeakMap;
class Rx {
    constructor(t) {
        this.openDragLock = null,
        this.isDragging = !1,
        this.currentDirection = null,
        this.originPoint = {
            x: 0,
            y: 0
        },
        this.constraints = !1,
        this.hasMutatedConstraints = !1,
        this.elastic = ue(),
        this.visualElement = t
    }
    start(t, {snapToCursor: n=!1}={}) {
        const {presenceContext: r} = this.visualElement;
        if (r && r.isPresent === !1)
            return;
        const i = c => {
            const {dragSnapToOrigin: f} = this.getProps();
            f ? this.pauseAnimation() : this.stopAnimation(),
            n && this.snapToCursor(gi(c).point)
        }
          , s = (c, f) => {
            const {drag: d, dragPropagation: y, onDragStart: v} = this.getProps();
            if (d && !y && (this.openDragLock && this.openDragLock(),
            this.openDragLock = Ev(d),
            !this.openDragLock))
                return;
            this.isDragging = !0,
            this.currentDirection = null,
            this.resolveConstraints(),
            this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
            Qe(T => {
                let p = this.getAxisMotionValue(T).get() || 0;
                if (pt.test(p)) {
                    const {projection: h} = this.visualElement;
                    if (h && h.layout) {
                        const m = h.layout.layoutBox[T];
                        m && (p = We(m) * (parseFloat(p) / 100))
                    }
                }
                this.originPoint[T] = p
            }
            ),
            v && q.postRender( () => v(c, f)),
            Il(this.visualElement, "transform");
            const {animationState: x} = this.visualElement;
            x && x.setActive("whileDrag", !0)
        }
          , o = (c, f) => {
            const {dragPropagation: d, dragDirectionLock: y, onDirectionLock: v, onDrag: x} = this.getProps();
            if (!d && !this.openDragLock)
                return;
            const {offset: T} = f;
            if (y && this.currentDirection === null) {
                this.currentDirection = Vx(T),
                this.currentDirection !== null && v && v(this.currentDirection);
                return
            }
            this.updateAxis("x", f.point, T),
            this.updateAxis("y", f.point, T),
            this.visualElement.render(),
            x && x(c, f)
        }
          , l = (c, f) => this.stop(c, f)
          , a = () => Qe(c => {
            var f;
            return this.getAnimationState(c) === "paused" && ((f = this.getAxisMotionValue(c).animation) === null || f === void 0 ? void 0 : f.play())
        }
        )
          , {dragSnapToOrigin: u} = this.getProps();
        this.panSession = new km(t,{
            onSessionStart: i,
            onStart: s,
            onMove: o,
            onSessionEnd: l,
            resumeAnimation: a
        },{
            transformPagePoint: this.visualElement.getTransformPagePoint(),
            dragSnapToOrigin: u,
            contextWindow: Am(this.visualElement)
        })
    }
    stop(t, n) {
        const r = this.isDragging;
        if (this.cancel(),
        !r)
            return;
        const {velocity: i} = n;
        this.startAnimation(i);
        const {onDragEnd: s} = this.getProps();
        s && q.postRender( () => s(t, n))
    }
    cancel() {
        this.isDragging = !1;
        const {projection: t, animationState: n} = this.visualElement;
        t && (t.isAnimationBlocked = !1),
        this.panSession && this.panSession.end(),
        this.panSession = void 0;
        const {dragPropagation: r} = this.getProps();
        !r && this.openDragLock && (this.openDragLock(),
        this.openDragLock = null),
        n && n.setActive("whileDrag", !1)
    }
    updateAxis(t, n, r) {
        const {drag: i} = this.getProps();
        if (!r || !Ii(t, i, this.currentDirection))
            return;
        const s = this.getAxisMotionValue(t);
        let o = this.originPoint[t] + r[t];
        this.constraints && this.constraints[t] && (o = kx(o, this.constraints[t], this.elastic[t])),
        s.set(o)
    }
    resolveConstraints() {
        var t;
        const {dragConstraints: n, dragElastic: r} = this.getProps()
          , i = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : (t = this.visualElement.projection) === null || t === void 0 ? void 0 : t.layout
          , s = this.constraints;
        n && On(n) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : n && i ? this.constraints = Tx(i.layoutBox, n) : this.constraints = !1,
        this.elastic = Mx(r),
        s !== this.constraints && i && this.constraints && !this.hasMutatedConstraints && Qe(o => {
            this.constraints !== !1 && this.getAxisMotionValue(o) && (this.constraints[o] = Ex(i.layoutBox[o], this.constraints[o]))
        }
        )
    }
    resolveRefConstraints() {
        const {dragConstraints: t, onMeasureDragConstraints: n} = this.getProps();
        if (!t || !On(t))
            return !1;
        const r = t.current
          , {projection: i} = this.visualElement;
        if (!i || !i.layout)
            return !1;
        const s = Dx(r, i.root, this.visualElement.getTransformPagePoint());
        let o = Cx(i.layout.layoutBox, s);
        if (n) {
            const l = n(Nx(o));
            this.hasMutatedConstraints = !!l,
            l && (o = Em(l))
        }
        return o
    }
    startAnimation(t) {
        const {drag: n, dragMomentum: r, dragElastic: i, dragTransition: s, dragSnapToOrigin: o, onDragTransitionEnd: l} = this.getProps()
          , a = this.constraints || {}
          , u = Qe(c => {
            if (!Ii(c, n, this.currentDirection))
                return;
            let f = a && a[c] || {};
            o && (f = {
                min: 0,
                max: 0
            });
            const d = i ? 200 : 1e6
              , y = i ? 40 : 1e7
              , v = {
                type: "inertia",
                velocity: r ? t[c] : 0,
                bounceStiffness: d,
                bounceDamping: y,
                timeConstant: 750,
                restDelta: 1,
                restSpeed: 10,
                ...s,
                ...f
            };
            return this.startAxisValueAnimation(c, v)
        }
        );
        return Promise.all(u).then(l)
    }
    startAxisValueAnimation(t, n) {
        const r = this.getAxisMotionValue(t);
        return Il(this.visualElement, t),
        r.start(Tu(t, r, 0, n, this.visualElement, !1))
    }
    stopAnimation() {
        Qe(t => this.getAxisMotionValue(t).stop())
    }
    pauseAnimation() {
        Qe(t => {
            var n;
            return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.pause()
        }
        )
    }
    getAnimationState(t) {
        var n;
        return (n = this.getAxisMotionValue(t).animation) === null || n === void 0 ? void 0 : n.state
    }
    getAxisMotionValue(t) {
        const n = `_drag${t.toUpperCase()}`
          , r = this.visualElement.getProps()
          , i = r[n];
        return i || this.visualElement.getValue(t, (r.initial ? r.initial[t] : void 0) || 0)
    }
    snapToCursor(t) {
        Qe(n => {
            const {drag: r} = this.getProps();
            if (!Ii(n, r, this.currentDirection))
                return;
            const {projection: i} = this.visualElement
              , s = this.getAxisMotionValue(n);
            if (i && i.layout) {
                const {min: o, max: l} = i.layout.layoutBox[n];
                s.set(t[n] - ne(o, l, .5))
            }
        }
        )
    }
    scalePositionWithinConstraints() {
        if (!this.visualElement.current)
            return;
        const {drag: t, dragConstraints: n} = this.getProps()
          , {projection: r} = this.visualElement;
        if (!On(n) || !r || !this.constraints)
            return;
        this.stopAnimation();
        const i = {
            x: 0,
            y: 0
        };
        Qe(o => {
            const l = this.getAxisMotionValue(o);
            if (l && this.constraints !== !1) {
                const a = l.get();
                i[o] = Px({
                    min: a,
                    max: a
                }, this.constraints[o])
            }
        }
        );
        const {transformTemplate: s} = this.visualElement.getProps();
        this.visualElement.current.style.transform = s ? s({}, "") : "none",
        r.root && r.root.updateScroll(),
        r.updateLayout(),
        this.resolveConstraints(),
        Qe(o => {
            if (!Ii(o, t, null))
                return;
            const l = this.getAxisMotionValue(o)
              , {min: a, max: u} = this.constraints[o];
            l.set(ne(a, u, i[o]))
        }
        )
    }
    addListeners() {
        if (!this.visualElement.current)
            return;
        Lx.set(this.visualElement, this);
        const t = this.visualElement.current
          , n = Ir(t, "pointerdown", a => {
            const {drag: u, dragListener: c=!0} = this.getProps();
            u && c && this.start(a)
        }
        )
          , r = () => {
            const {dragConstraints: a} = this.getProps();
            On(a) && a.current && (this.constraints = this.resolveRefConstraints())
        }
          , {projection: i} = this.visualElement
          , s = i.addEventListener("measure", r);
        i && !i.layout && (i.root && i.root.updateScroll(),
        i.updateLayout()),
        q.read(r);
        const o = li(window, "resize", () => this.scalePositionWithinConstraints())
          , l = i.addEventListener("didUpdate", ({delta: a, hasLayoutChanged: u}) => {
            this.isDragging && u && (Qe(c => {
                const f = this.getAxisMotionValue(c);
                f && (this.originPoint[c] += a[c].translate,
                f.set(f.get() + a[c].translate))
            }
            ),
            this.visualElement.render())
        }
        );
        return () => {
            o(),
            n(),
            s(),
            l && l()
        }
    }
    getProps() {
        const t = this.visualElement.getProps()
          , {drag: n=!1, dragDirectionLock: r=!1, dragPropagation: i=!1, dragConstraints: s=!1, dragElastic: o=Kl, dragMomentum: l=!0} = t;
        return {
            ...t,
            drag: n,
            dragDirectionLock: r,
            dragPropagation: i,
            dragConstraints: s,
            dragElastic: o,
            dragMomentum: l
        }
    }
}
function Ii(e, t, n) {
    return (t === !0 || t === e) && (n === null || n === e)
}
function Vx(e, t=10) {
    let n = null;
    return Math.abs(e.y) > t ? n = "y" : Math.abs(e.x) > t && (n = "x"),
    n
}
class _x extends tn {
    constructor(t) {
        super(t),
        this.removeGroupControls = Ue,
        this.removeListeners = Ue,
        this.controls = new Rx(t)
    }
    mount() {
        const {dragControls: t} = this.node.getProps();
        t && (this.removeGroupControls = t.subscribe(this.controls)),
        this.removeListeners = this.controls.addListeners() || Ue
    }
    unmount() {
        this.removeGroupControls(),
        this.removeListeners()
    }
}
const Ef = e => (t, n) => {
    e && q.postRender( () => e(t, n))
}
;
class zx extends tn {
    constructor() {
        super(...arguments),
        this.removePointerDownListener = Ue
    }
    onPointerDown(t) {
        this.session = new km(t,this.createPanHandlers(),{
            transformPagePoint: this.node.getTransformPagePoint(),
            contextWindow: Am(this.node)
        })
    }
    createPanHandlers() {
        const {onPanSessionStart: t, onPanStart: n, onPan: r, onPanEnd: i} = this.node.getProps();
        return {
            onSessionStart: Ef(t),
            onStart: Ef(n),
            onMove: r,
            onEnd: (s, o) => {
                delete this.session,
                i && q.postRender( () => i(s, o))
            }
        }
    }
    mount() {
        this.removePointerDownListener = Ir(this.node.current, "pointerdown", t => this.onPointerDown(t))
    }
    update() {
        this.session && this.session.updateHandlers(this.createPanHandlers())
    }
    unmount() {
        this.removePointerDownListener(),
        this.session && this.session.end()
    }
}
const qi = {
    hasAnimatedSinceResize: !0,
    hasEverUpdated: !1
};
function Mf(e, t) {
    return t.max === t.min ? 0 : e / (t.max - t.min) * 100
}
const xr = {
    correct: (e, t) => {
        if (!t.target)
            return e;
        if (typeof e == "string")
            if (F.test(e))
                e = parseFloat(e);
            else
                return e;
        const n = Mf(e, t.target.x)
          , r = Mf(e, t.target.y);
        return `${n}% ${r}%`
    }
}
  , Ix = {
    correct: (e, {treeScale: t, projectionDelta: n}) => {
        const r = e
          , i = Zt.parse(e);
        if (i.length > 5)
            return r;
        const s = Zt.createTransformer(e)
          , o = typeof i[0] != "number" ? 1 : 0
          , l = n.x.scale * t.x
          , a = n.y.scale * t.y;
        i[0 + o] /= l,
        i[1 + o] /= a;
        const u = ne(l, a, .5);
        return typeof i[2 + o] == "number" && (i[2 + o] /= u),
        typeof i[3 + o] == "number" && (i[3 + o] /= u),
        s(i)
    }
};
class Fx extends S.Component {
    componentDidMount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r, layoutId: i} = this.props
          , {projection: s} = t;
        sv(Ox),
        s && (n.group && n.group.add(s),
        r && r.register && i && r.register(s),
        s.root.didUpdate(),
        s.addEventListener("animationComplete", () => {
            this.safeToRemove()
        }
        ),
        s.setOptions({
            ...s.options,
            onExitComplete: () => this.safeToRemove()
        })),
        qi.hasEverUpdated = !0
    }
    getSnapshotBeforeUpdate(t) {
        const {layoutDependency: n, visualElement: r, drag: i, isPresent: s} = this.props
          , o = r.projection;
        return o && (o.isPresent = s,
        i || t.layoutDependency !== n || n === void 0 ? o.willUpdate() : this.safeToRemove(),
        t.isPresent !== s && (s ? o.promote() : o.relegate() || q.postRender( () => {
            const l = o.getStack();
            (!l || !l.members.length) && this.safeToRemove()
        }
        ))),
        null
    }
    componentDidUpdate() {
        const {projection: t} = this.props.visualElement;
        t && (t.root.didUpdate(),
        qa.postRender( () => {
            !t.currentAnimation && t.isLead() && this.safeToRemove()
        }
        ))
    }
    componentWillUnmount() {
        const {visualElement: t, layoutGroup: n, switchLayoutGroup: r} = this.props
          , {projection: i} = t;
        i && (i.scheduleCheckAfterUnmount(),
        n && n.group && n.group.remove(i),
        r && r.deregister && r.deregister(i))
    }
    safeToRemove() {
        const {safeToRemove: t} = this.props;
        t && t()
    }
    render() {
        return null
    }
}
function Dm(e) {
    const [t,n] = pp()
      , r = S.useContext(Ha);
    return g.jsx(Fx, {
        ...e,
        layoutGroup: r,
        switchLayoutGroup: S.useContext(Sp),
        isPresent: t,
        safeToRemove: n
    })
}
const Ox = {
    borderRadius: {
        ...xr,
        applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: xr,
    borderTopRightRadius: xr,
    borderBottomLeftRadius: xr,
    borderBottomRightRadius: xr,
    boxShadow: Ix
};
function Bx(e, t, n) {
    const r = Ee(e) ? e : si(e);
    return r.start(Tu("", r, t, n)),
    r.animation
}
function Ux(e) {
    return e instanceof SVGElement && e.tagName !== "svg"
}
const $x = (e, t) => e.depth - t.depth;
class Wx {
    constructor() {
        this.children = [],
        this.isDirty = !1
    }
    add(t) {
        du(this.children, t),
        this.isDirty = !0
    }
    remove(t) {
        hu(this.children, t),
        this.isDirty = !0
    }
    forEach(t) {
        this.isDirty && this.children.sort($x),
        this.isDirty = !1,
        this.children.forEach(t)
    }
}
function Hx(e, t) {
    const n = mt.now()
      , r = ({timestamp: i}) => {
        const s = i - n;
        s >= t && (bt(r),
        e(s - t))
    }
    ;
    return q.read(r, !0),
    () => bt(r)
}
const Lm = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"]
  , Kx = Lm.length
  , Nf = e => typeof e == "string" ? parseFloat(e) : e
  , jf = e => typeof e == "number" || F.test(e);
function Gx(e, t, n, r, i, s) {
    i ? (e.opacity = ne(0, n.opacity !== void 0 ? n.opacity : 1, Qx(r)),
    e.opacityExit = ne(t.opacity !== void 0 ? t.opacity : 1, 0, Xx(r))) : s && (e.opacity = ne(t.opacity !== void 0 ? t.opacity : 1, n.opacity !== void 0 ? n.opacity : 1, r));
    for (let o = 0; o < Kx; o++) {
        const l = `border${Lm[o]}Radius`;
        let a = Af(t, l)
          , u = Af(n, l);
        if (a === void 0 && u === void 0)
            continue;
        a || (a = 0),
        u || (u = 0),
        a === 0 || u === 0 || jf(a) === jf(u) ? (e[l] = Math.max(ne(Nf(a), Nf(u), r), 0),
        (pt.test(u) || pt.test(a)) && (e[l] += "%")) : e[l] = u
    }
    (t.rotate || n.rotate) && (e.rotate = ne(t.rotate || 0, n.rotate || 0, r))
}
function Af(e, t) {
    return e[t] !== void 0 ? e[t] : e.borderRadius
}
const Qx = Rm(0, .5, Zp)
  , Xx = Rm(.5, .95, Ue);
function Rm(e, t, n) {
    return r => r < e ? 0 : r > t ? 1 : n(rr(e, t, r))
}
function Df(e, t) {
    e.min = t.min,
    e.max = t.max
}
function Ge(e, t) {
    Df(e.x, t.x),
    Df(e.y, t.y)
}
function Lf(e, t) {
    e.translate = t.translate,
    e.scale = t.scale,
    e.originPoint = t.originPoint,
    e.origin = t.origin
}
function Rf(e, t, n, r, i) {
    return e -= t,
    e = js(e, 1 / n, r),
    i !== void 0 && (e = js(e, 1 / i, r)),
    e
}
function Yx(e, t=0, n=1, r=.5, i, s=e, o=e) {
    if (pt.test(t) && (t = parseFloat(t),
    t = ne(o.min, o.max, t / 100) - o.min),
    typeof t != "number")
        return;
    let l = ne(s.min, s.max, r);
    e === s && (l -= t),
    e.min = Rf(e.min, t, n, l, i),
    e.max = Rf(e.max, t, n, l, i)
}
function Vf(e, t, [n,r,i], s, o) {
    Yx(e, t[n], t[r], t[i], t.scale, s, o)
}
const bx = ["x", "scaleX", "originX"]
  , Zx = ["y", "scaleY", "originY"];
function _f(e, t, n, r) {
    Vf(e.x, t, bx, n ? n.x : void 0, r ? r.x : void 0),
    Vf(e.y, t, Zx, n ? n.y : void 0, r ? r.y : void 0)
}
function zf(e) {
    return e.translate === 0 && e.scale === 1
}
function Vm(e) {
    return zf(e.x) && zf(e.y)
}
function If(e, t) {
    return e.min === t.min && e.max === t.max
}
function qx(e, t) {
    return If(e.x, t.x) && If(e.y, t.y)
}
function Ff(e, t) {
    return Math.round(e.min) === Math.round(t.min) && Math.round(e.max) === Math.round(t.max)
}
function _m(e, t) {
    return Ff(e.x, t.x) && Ff(e.y, t.y)
}
function Of(e) {
    return We(e.x) / We(e.y)
}
function Bf(e, t) {
    return e.translate === t.translate && e.scale === t.scale && e.originPoint === t.originPoint
}
class Jx {
    constructor() {
        this.members = []
    }
    add(t) {
        du(this.members, t),
        t.scheduleRender()
    }
    remove(t) {
        if (hu(this.members, t),
        t === this.prevLead && (this.prevLead = void 0),
        t === this.lead) {
            const n = this.members[this.members.length - 1];
            n && this.promote(n)
        }
    }
    relegate(t) {
        const n = this.members.findIndex(i => t === i);
        if (n === 0)
            return !1;
        let r;
        for (let i = n; i >= 0; i--) {
            const s = this.members[i];
            if (s.isPresent !== !1) {
                r = s;
                break
            }
        }
        return r ? (this.promote(r),
        !0) : !1
    }
    promote(t, n) {
        const r = this.lead;
        if (t !== r && (this.prevLead = r,
        this.lead = t,
        t.show(),
        r)) {
            r.instance && r.scheduleRender(),
            t.scheduleRender(),
            t.resumeFrom = r,
            n && (t.resumeFrom.preserveOpacity = !0),
            r.snapshot && (t.snapshot = r.snapshot,
            t.snapshot.latestValues = r.animationValues || r.latestValues),
            t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
            const {crossfade: i} = t.options;
            i === !1 && r.hide()
        }
    }
    exitAnimationComplete() {
        this.members.forEach(t => {
            const {options: n, resumingFrom: r} = t;
            n.onExitComplete && n.onExitComplete(),
            r && r.options.onExitComplete && r.options.onExitComplete()
        }
        )
    }
    scheduleRender() {
        this.members.forEach(t => {
            t.instance && t.scheduleRender(!1)
        }
        )
    }
    removeLeadSnapshot() {
        this.lead && this.lead.snapshot && (this.lead.snapshot = void 0)
    }
}
function ew(e, t, n) {
    let r = "";
    const i = e.x.translate / t.x
      , s = e.y.translate / t.y
      , o = (n == null ? void 0 : n.z) || 0;
    if ((i || s || o) && (r = `translate3d(${i}px, ${s}px, ${o}px) `),
    (t.x !== 1 || t.y !== 1) && (r += `scale(${1 / t.x}, ${1 / t.y}) `),
    n) {
        const {transformPerspective: u, rotate: c, rotateX: f, rotateY: d, skewX: y, skewY: v} = n;
        u && (r = `perspective(${u}px) ${r}`),
        c && (r += `rotate(${c}deg) `),
        f && (r += `rotateX(${f}deg) `),
        d && (r += `rotateY(${d}deg) `),
        y && (r += `skewX(${y}deg) `),
        v && (r += `skewY(${v}deg) `)
    }
    const l = e.x.scale * t.x
      , a = e.y.scale * t.y;
    return (l !== 1 || a !== 1) && (r += `scale(${l}, ${a})`),
    r || "none"
}
const an = {
    type: "projectionFrame",
    totalNodes: 0,
    resolvedTargetDeltas: 0,
    recalculatedProjection: 0
}
  , Er = typeof window < "u" && window.MotionDebug !== void 0
  , Vo = ["", "X", "Y", "Z"]
  , tw = {
    visibility: "hidden"
}
  , Uf = 1e3;
let nw = 0;
function _o(e, t, n, r) {
    const {latestValues: i} = t;
    i[e] && (n[e] = i[e],
    t.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function zm(e) {
    if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
        return;
    const {visualElement: t} = e.options;
    if (!t)
        return;
    const n = Hp(t);
    if (window.MotionHasOptimisedAnimation(n, "transform")) {
        const {layout: i, layoutId: s} = e.options;
        window.MotionCancelOptimisedAnimation(n, "transform", q, !(i || s))
    }
    const {parent: r} = e;
    r && !r.hasCheckedOptimisedAppear && zm(r)
}
function Im({attachResizeListener: e, defaultParent: t, measureScroll: n, checkIsScrollRoot: r, resetTransform: i}) {
    return class {
        constructor(o={}, l=t == null ? void 0 : t()) {
            this.id = nw++,
            this.animationId = 0,
            this.children = new Set,
            this.options = {},
            this.isTreeAnimating = !1,
            this.isAnimationBlocked = !1,
            this.isLayoutDirty = !1,
            this.isProjectionDirty = !1,
            this.isSharedProjectionDirty = !1,
            this.isTransformDirty = !1,
            this.updateManuallyBlocked = !1,
            this.updateBlockedByResize = !1,
            this.isUpdating = !1,
            this.isSVG = !1,
            this.needsReset = !1,
            this.shouldResetTransform = !1,
            this.hasCheckedOptimisedAppear = !1,
            this.treeScale = {
                x: 1,
                y: 1
            },
            this.eventHandlers = new Map,
            this.hasTreeAnimated = !1,
            this.updateScheduled = !1,
            this.scheduleUpdate = () => this.update(),
            this.projectionUpdateScheduled = !1,
            this.checkUpdateFailed = () => {
                this.isUpdating && (this.isUpdating = !1,
                this.clearAllSnapshots())
            }
            ,
            this.updateProjection = () => {
                this.projectionUpdateScheduled = !1,
                Er && (an.totalNodes = an.resolvedTargetDeltas = an.recalculatedProjection = 0),
                this.nodes.forEach(sw),
                this.nodes.forEach(cw),
                this.nodes.forEach(fw),
                this.nodes.forEach(ow),
                Er && window.MotionDebug.record(an)
            }
            ,
            this.resolvedRelativeTargetAt = 0,
            this.hasProjected = !1,
            this.isVisible = !0,
            this.animationProgress = 0,
            this.sharedNodes = new Map,
            this.latestValues = o,
            this.root = l ? l.root || l : this,
            this.path = l ? [...l.path, l] : [],
            this.parent = l,
            this.depth = l ? l.depth + 1 : 0;
            for (let a = 0; a < this.path.length; a++)
                this.path[a].shouldResetTransform = !0;
            this.root === this && (this.nodes = new Wx)
        }
        addEventListener(o, l) {
            return this.eventHandlers.has(o) || this.eventHandlers.set(o, new pu),
            this.eventHandlers.get(o).add(l)
        }
        notifyListeners(o, ...l) {
            const a = this.eventHandlers.get(o);
            a && a.notify(...l)
        }
        hasListeners(o) {
            return this.eventHandlers.has(o)
        }
        mount(o, l=this.root.hasTreeAnimated) {
            if (this.instance)
                return;
            this.isSVG = Ux(o),
            this.instance = o;
            const {layoutId: a, layout: u, visualElement: c} = this.options;
            if (c && !c.current && c.mount(o),
            this.root.nodes.add(this),
            this.parent && this.parent.children.add(this),
            l && (u || a) && (this.isLayoutDirty = !0),
            e) {
                let f;
                const d = () => this.root.updateBlockedByResize = !1;
                e(o, () => {
                    this.root.updateBlockedByResize = !0,
                    f && f(),
                    f = Hx(d, 250),
                    qi.hasAnimatedSinceResize && (qi.hasAnimatedSinceResize = !1,
                    this.nodes.forEach(Wf))
                }
                )
            }
            a && this.root.registerSharedNode(a, this),
            this.options.animate !== !1 && c && (a || u) && this.addEventListener("didUpdate", ({delta: f, hasLayoutChanged: d, hasRelativeTargetChanged: y, layout: v}) => {
                if (this.isTreeAnimationBlocked()) {
                    this.target = void 0,
                    this.relativeTarget = void 0;
                    return
                }
                const x = this.options.transition || c.getDefaultTransition() || gw
                  , {onLayoutAnimationStart: T, onLayoutAnimationComplete: p} = c.getProps()
                  , h = !this.targetLayout || !_m(this.targetLayout, v) || y
                  , m = !d && y;
                if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || m || d && (h || !this.currentAnimation)) {
                    this.resumeFrom && (this.resumingFrom = this.resumeFrom,
                    this.resumingFrom.resumingFrom = void 0),
                    this.setAnimationOrigin(f, m);
                    const w = {
                        ...au(x, "layout"),
                        onPlay: T,
                        onComplete: p
                    };
                    (c.shouldReduceMotion || this.options.layoutRoot) && (w.delay = 0,
                    w.type = !1),
                    this.startAnimation(w)
                } else
                    d || Wf(this),
                    this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
                this.targetLayout = v
            }
            )
        }
        unmount() {
            this.options.layoutId && this.willUpdate(),
            this.root.nodes.remove(this);
            const o = this.getStack();
            o && o.remove(this),
            this.parent && this.parent.children.delete(this),
            this.instance = void 0,
            bt(this.updateProjection)
        }
        blockUpdate() {
            this.updateManuallyBlocked = !0
        }
        unblockUpdate() {
            this.updateManuallyBlocked = !1
        }
        isUpdateBlocked() {
            return this.updateManuallyBlocked || this.updateBlockedByResize
        }
        isTreeAnimationBlocked() {
            return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
        }
        startUpdate() {
            this.isUpdateBlocked() || (this.isUpdating = !0,
            this.nodes && this.nodes.forEach(dw),
            this.animationId++)
        }
        getTransformTemplate() {
            const {visualElement: o} = this.options;
            return o && o.getProps().transformTemplate
        }
        willUpdate(o=!0) {
            if (this.root.hasTreeAnimated = !0,
            this.root.isUpdateBlocked()) {
                this.options.onExitComplete && this.options.onExitComplete();
                return
            }
            if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && zm(this),
            !this.root.isUpdating && this.root.startUpdate(),
            this.isLayoutDirty)
                return;
            this.isLayoutDirty = !0;
            for (let c = 0; c < this.path.length; c++) {
                const f = this.path[c];
                f.shouldResetTransform = !0,
                f.updateScroll("snapshot"),
                f.options.layoutRoot && f.willUpdate(!1)
            }
            const {layoutId: l, layout: a} = this.options;
            if (l === void 0 && !a)
                return;
            const u = this.getTransformTemplate();
            this.prevTransformTemplateValue = u ? u(this.latestValues, "") : void 0,
            this.updateSnapshot(),
            o && this.notifyListeners("willUpdate")
        }
        update() {
            if (this.updateScheduled = !1,
            this.isUpdateBlocked()) {
                this.unblockUpdate(),
                this.clearAllSnapshots(),
                this.nodes.forEach($f);
                return
            }
            this.isUpdating || this.nodes.forEach(aw),
            this.isUpdating = !1,
            this.nodes.forEach(uw),
            this.nodes.forEach(rw),
            this.nodes.forEach(iw),
            this.clearAllSnapshots();
            const l = mt.now();
            ve.delta = Nt(0, 1e3 / 60, l - ve.timestamp),
            ve.timestamp = l,
            ve.isProcessing = !0,
            Po.update.process(ve),
            Po.preRender.process(ve),
            Po.render.process(ve),
            ve.isProcessing = !1
        }
        didUpdate() {
            this.updateScheduled || (this.updateScheduled = !0,
            qa.read(this.scheduleUpdate))
        }
        clearAllSnapshots() {
            this.nodes.forEach(lw),
            this.sharedNodes.forEach(hw)
        }
        scheduleUpdateProjection() {
            this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
            q.preRender(this.updateProjection, !1, !0))
        }
        scheduleCheckAfterUnmount() {
            q.postRender( () => {
                this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
            }
            )
        }
        updateSnapshot() {
            this.snapshot || !this.instance || (this.snapshot = this.measure())
        }
        updateLayout() {
            if (!this.instance || (this.updateScroll(),
            !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
                return;
            if (this.resumeFrom && !this.resumeFrom.instance)
                for (let a = 0; a < this.path.length; a++)
                    this.path[a].updateScroll();
            const o = this.layout;
            this.layout = this.measure(!1),
            this.layoutCorrected = ue(),
            this.isLayoutDirty = !1,
            this.projectionDelta = void 0,
            this.notifyListeners("measure", this.layout.layoutBox);
            const {visualElement: l} = this.options;
            l && l.notify("LayoutMeasure", this.layout.layoutBox, o ? o.layoutBox : void 0)
        }
        updateScroll(o="measure") {
            let l = !!(this.options.layoutScroll && this.instance);
            if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === o && (l = !1),
            l) {
                const a = r(this.instance);
                this.scroll = {
                    animationId: this.root.animationId,
                    phase: o,
                    isRoot: a,
                    offset: n(this.instance),
                    wasRoot: this.scroll ? this.scroll.isRoot : a
                }
            }
        }
        resetTransform() {
            if (!i)
                return;
            const o = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
              , l = this.projectionDelta && !Vm(this.projectionDelta)
              , a = this.getTransformTemplate()
              , u = a ? a(this.latestValues, "") : void 0
              , c = u !== this.prevTransformTemplateValue;
            o && (l || ln(this.latestValues) || c) && (i(this.instance, u),
            this.shouldResetTransform = !1,
            this.scheduleRender())
        }
        measure(o=!0) {
            const l = this.measurePageBox();
            let a = this.removeElementScroll(l);
            return o && (a = this.removeTransform(a)),
            yw(a),
            {
                animationId: this.root.animationId,
                measuredBox: l,
                layoutBox: a,
                latestValues: {},
                source: this.id
            }
        }
        measurePageBox() {
            var o;
            const {visualElement: l} = this.options;
            if (!l)
                return ue();
            const a = l.measureViewportBox();
            if (!(((o = this.scroll) === null || o === void 0 ? void 0 : o.wasRoot) || this.path.some(vw))) {
                const {scroll: c} = this.root;
                c && ($n(a.x, c.offset.x),
                $n(a.y, c.offset.y))
            }
            return a
        }
        removeElementScroll(o) {
            var l;
            const a = ue();
            if (Ge(a, o),
            !((l = this.scroll) === null || l === void 0) && l.wasRoot)
                return a;
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u]
                  , {scroll: f, options: d} = c;
                c !== this.root && f && d.layoutScroll && (f.wasRoot && Ge(a, o),
                $n(a.x, f.offset.x),
                $n(a.y, f.offset.y))
            }
            return a
        }
        applyTransform(o, l=!1) {
            const a = ue();
            Ge(a, o);
            for (let u = 0; u < this.path.length; u++) {
                const c = this.path[u];
                !l && c.options.layoutScroll && c.scroll && c !== c.root && Wn(a, {
                    x: -c.scroll.offset.x,
                    y: -c.scroll.offset.y
                }),
                ln(c.latestValues) && Wn(a, c.latestValues)
            }
            return ln(this.latestValues) && Wn(a, this.latestValues),
            a
        }
        removeTransform(o) {
            const l = ue();
            Ge(l, o);
            for (let a = 0; a < this.path.length; a++) {
                const u = this.path[a];
                if (!u.instance || !ln(u.latestValues))
                    continue;
                Gl(u.latestValues) && u.updateSnapshot();
                const c = ue()
                  , f = u.measurePageBox();
                Ge(c, f),
                _f(l, u.latestValues, u.snapshot ? u.snapshot.layoutBox : void 0, c)
            }
            return ln(this.latestValues) && _f(l, this.latestValues),
            l
        }
        setTargetDelta(o) {
            this.targetDelta = o,
            this.root.scheduleUpdateProjection(),
            this.isProjectionDirty = !0
        }
        setOptions(o) {
            this.options = {
                ...this.options,
                ...o,
                crossfade: o.crossfade !== void 0 ? o.crossfade : !0
            }
        }
        clearMeasurements() {
            this.scroll = void 0,
            this.layout = void 0,
            this.snapshot = void 0,
            this.prevTransformTemplateValue = void 0,
            this.targetDelta = void 0,
            this.target = void 0,
            this.isLayoutDirty = !1
        }
        forceRelativeParentToResolveTarget() {
            this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ve.timestamp && this.relativeParent.resolveTargetDelta(!0)
        }
        resolveTargetDelta(o=!1) {
            var l;
            const a = this.getLead();
            this.isProjectionDirty || (this.isProjectionDirty = a.isProjectionDirty),
            this.isTransformDirty || (this.isTransformDirty = a.isTransformDirty),
            this.isSharedProjectionDirty || (this.isSharedProjectionDirty = a.isSharedProjectionDirty);
            const u = !!this.resumingFrom || this !== a;
            if (!(o || u && this.isSharedProjectionDirty || this.isProjectionDirty || !((l = this.parent) === null || l === void 0) && l.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
                return;
            const {layout: f, layoutId: d} = this.options;
            if (!(!this.layout || !(f || d))) {
                if (this.resolvedRelativeTargetAt = ve.timestamp,
                !this.targetDelta && !this.relativeTarget) {
                    const y = this.getClosestProjectingParent();
                    y && y.layout && this.animationProgress !== 1 ? (this.relativeParent = y,
                    this.forceRelativeParentToResolveTarget(),
                    this.relativeTarget = ue(),
                    this.relativeTargetOrigin = ue(),
                    Or(this.relativeTargetOrigin, this.layout.layoutBox, y.layout.layoutBox),
                    Ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                }
                if (!(!this.relativeTarget && !this.targetDelta)) {
                    if (this.target || (this.target = ue(),
                    this.targetWithTransforms = ue()),
                    this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
                    Sx(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ge(this.target, this.layout.layoutBox),
                    Nm(this.target, this.targetDelta)) : Ge(this.target, this.layout.layoutBox),
                    this.attemptToResolveRelativeTarget) {
                        this.attemptToResolveRelativeTarget = !1;
                        const y = this.getClosestProjectingParent();
                        y && !!y.resumingFrom == !!this.resumingFrom && !y.options.layoutScroll && y.target && this.animationProgress !== 1 ? (this.relativeParent = y,
                        this.forceRelativeParentToResolveTarget(),
                        this.relativeTarget = ue(),
                        this.relativeTargetOrigin = ue(),
                        Or(this.relativeTargetOrigin, this.target, y.target),
                        Ge(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0
                    }
                    Er && an.resolvedTargetDeltas++
                }
            }
        }
        getClosestProjectingParent() {
            if (!(!this.parent || Gl(this.parent.latestValues) || Mm(this.parent.latestValues)))
                return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
        }
        isProjecting() {
            return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
        }
        calcProjection() {
            var o;
            const l = this.getLead()
              , a = !!this.resumingFrom || this !== l;
            let u = !0;
            if ((this.isProjectionDirty || !((o = this.parent) === null || o === void 0) && o.isProjectionDirty) && (u = !1),
            a && (this.isSharedProjectionDirty || this.isTransformDirty) && (u = !1),
            this.resolvedRelativeTargetAt === ve.timestamp && (u = !1),
            u)
                return;
            const {layout: c, layoutId: f} = this.options;
            if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
            this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
            !this.layout || !(c || f))
                return;
            Ge(this.layoutCorrected, this.layout.layoutBox);
            const d = this.treeScale.x
              , y = this.treeScale.y;
            Ax(this.layoutCorrected, this.treeScale, this.path, a),
            l.layout && !l.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (l.target = l.layout.layoutBox,
            l.targetWithTransforms = ue());
            const {target: v} = l;
            if (!v) {
                this.prevProjectionDelta && (this.createProjectionDeltas(),
                this.scheduleRender());
                return
            }
            !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Lf(this.prevProjectionDelta.x, this.projectionDelta.x),
            Lf(this.prevProjectionDelta.y, this.projectionDelta.y)),
            Fr(this.projectionDelta, this.layoutCorrected, v, this.latestValues),
            (this.treeScale.x !== d || this.treeScale.y !== y || !Bf(this.projectionDelta.x, this.prevProjectionDelta.x) || !Bf(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
            this.scheduleRender(),
            this.notifyListeners("projectionUpdate", v)),
            Er && an.recalculatedProjection++
        }
        hide() {
            this.isVisible = !1
        }
        show() {
            this.isVisible = !0
        }
        scheduleRender(o=!0) {
            var l;
            if ((l = this.options.visualElement) === null || l === void 0 || l.scheduleRender(),
            o) {
                const a = this.getStack();
                a && a.scheduleRender()
            }
            this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
        }
        createProjectionDeltas() {
            this.prevProjectionDelta = Un(),
            this.projectionDelta = Un(),
            this.projectionDeltaWithTransform = Un()
        }
        setAnimationOrigin(o, l=!1) {
            const a = this.snapshot
              , u = a ? a.latestValues : {}
              , c = {
                ...this.latestValues
            }
              , f = Un();
            (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
            this.attemptToResolveRelativeTarget = !l;
            const d = ue()
              , y = a ? a.source : void 0
              , v = this.layout ? this.layout.source : void 0
              , x = y !== v
              , T = this.getStack()
              , p = !T || T.members.length <= 1
              , h = !!(x && !p && this.options.crossfade === !0 && !this.path.some(mw));
            this.animationProgress = 0;
            let m;
            this.mixTargetDelta = w => {
                const k = w / 1e3;
                Hf(f.x, o.x, k),
                Hf(f.y, o.y, k),
                this.setTargetDelta(f),
                this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Or(d, this.layout.layoutBox, this.relativeParent.layout.layoutBox),
                pw(this.relativeTarget, this.relativeTargetOrigin, d, k),
                m && qx(this.relativeTarget, m) && (this.isProjectionDirty = !1),
                m || (m = ue()),
                Ge(m, this.relativeTarget)),
                x && (this.animationValues = c,
                Gx(c, u, this.latestValues, k, h, p)),
                this.root.scheduleUpdateProjection(),
                this.scheduleRender(),
                this.animationProgress = k
            }
            ,
            this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
        }
        startAnimation(o) {
            this.notifyListeners("animationStart"),
            this.currentAnimation && this.currentAnimation.stop(),
            this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(),
            this.pendingAnimation && (bt(this.pendingAnimation),
            this.pendingAnimation = void 0),
            this.pendingAnimation = q.update( () => {
                qi.hasAnimatedSinceResize = !0,
                this.currentAnimation = Bx(0, Uf, {
                    ...o,
                    onUpdate: l => {
                        this.mixTargetDelta(l),
                        o.onUpdate && o.onUpdate(l)
                    }
                    ,
                    onComplete: () => {
                        o.onComplete && o.onComplete(),
                        this.completeAnimation()
                    }
                }),
                this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
                this.pendingAnimation = void 0
            }
            )
        }
        completeAnimation() {
            this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
            this.resumingFrom.preserveOpacity = void 0);
            const o = this.getStack();
            o && o.exitAnimationComplete(),
            this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
            this.notifyListeners("animationComplete")
        }
        finishAnimation() {
            this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Uf),
            this.currentAnimation.stop()),
            this.completeAnimation()
        }
        applyTransformsToTarget() {
            const o = this.getLead();
            let {targetWithTransforms: l, target: a, layout: u, latestValues: c} = o;
            if (!(!l || !a || !u)) {
                if (this !== o && this.layout && u && Fm(this.options.animationType, this.layout.layoutBox, u.layoutBox)) {
                    a = this.target || ue();
                    const f = We(this.layout.layoutBox.x);
                    a.x.min = o.target.x.min,
                    a.x.max = a.x.min + f;
                    const d = We(this.layout.layoutBox.y);
                    a.y.min = o.target.y.min,
                    a.y.max = a.y.min + d
                }
                Ge(l, a),
                Wn(l, c),
                Fr(this.projectionDeltaWithTransform, this.layoutCorrected, l, c)
            }
        }
        registerSharedNode(o, l) {
            this.sharedNodes.has(o) || this.sharedNodes.set(o, new Jx),
            this.sharedNodes.get(o).add(l);
            const u = l.options.initialPromotionConfig;
            l.promote({
                transition: u ? u.transition : void 0,
                preserveFollowOpacity: u && u.shouldPreserveFollowOpacity ? u.shouldPreserveFollowOpacity(l) : void 0
            })
        }
        isLead() {
            const o = this.getStack();
            return o ? o.lead === this : !0
        }
        getLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? ((o = this.getStack()) === null || o === void 0 ? void 0 : o.lead) || this : this
        }
        getPrevLead() {
            var o;
            const {layoutId: l} = this.options;
            return l ? (o = this.getStack()) === null || o === void 0 ? void 0 : o.prevLead : void 0
        }
        getStack() {
            const {layoutId: o} = this.options;
            if (o)
                return this.root.sharedNodes.get(o)
        }
        promote({needsReset: o, transition: l, preserveFollowOpacity: a}={}) {
            const u = this.getStack();
            u && u.promote(this, a),
            o && (this.projectionDelta = void 0,
            this.needsReset = !0),
            l && this.setOptions({
                transition: l
            })
        }
        relegate() {
            const o = this.getStack();
            return o ? o.relegate(this) : !1
        }
        resetSkewAndRotation() {
            const {visualElement: o} = this.options;
            if (!o)
                return;
            let l = !1;
            const {latestValues: a} = o;
            if ((a.z || a.rotate || a.rotateX || a.rotateY || a.rotateZ || a.skewX || a.skewY) && (l = !0),
            !l)
                return;
            const u = {};
            a.z && _o("z", o, u, this.animationValues);
            for (let c = 0; c < Vo.length; c++)
                _o(`rotate${Vo[c]}`, o, u, this.animationValues),
                _o(`skew${Vo[c]}`, o, u, this.animationValues);
            o.render();
            for (const c in u)
                o.setStaticValue(c, u[c]),
                this.animationValues && (this.animationValues[c] = u[c]);
            o.scheduleRender()
        }
        getProjectionStyles(o) {
            var l, a;
            if (!this.instance || this.isSVG)
                return;
            if (!this.isVisible)
                return tw;
            const u = {
                visibility: ""
            }
              , c = this.getTransformTemplate();
            if (this.needsReset)
                return this.needsReset = !1,
                u.opacity = "",
                u.pointerEvents = bi(o == null ? void 0 : o.pointerEvents) || "",
                u.transform = c ? c(this.latestValues, "") : "none",
                u;
            const f = this.getLead();
            if (!this.projectionDelta || !this.layout || !f.target) {
                const x = {};
                return this.options.layoutId && (x.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
                x.pointerEvents = bi(o == null ? void 0 : o.pointerEvents) || ""),
                this.hasProjected && !ln(this.latestValues) && (x.transform = c ? c({}, "") : "none",
                this.hasProjected = !1),
                x
            }
            const d = f.animationValues || f.latestValues;
            this.applyTransformsToTarget(),
            u.transform = ew(this.projectionDeltaWithTransform, this.treeScale, d),
            c && (u.transform = c(d, u.transform));
            const {x: y, y: v} = this.projectionDelta;
            u.transformOrigin = `${y.origin * 100}% ${v.origin * 100}% 0`,
            f.animationValues ? u.opacity = f === this ? (a = (l = d.opacity) !== null && l !== void 0 ? l : this.latestValues.opacity) !== null && a !== void 0 ? a : 1 : this.preserveOpacity ? this.latestValues.opacity : d.opacityExit : u.opacity = f === this ? d.opacity !== void 0 ? d.opacity : "" : d.opacityExit !== void 0 ? d.opacityExit : 0;
            for (const x in Cs) {
                if (d[x] === void 0)
                    continue;
                const {correct: T, applyTo: p} = Cs[x]
                  , h = u.transform === "none" ? d[x] : T(d[x], f);
                if (p) {
                    const m = p.length;
                    for (let w = 0; w < m; w++)
                        u[p[w]] = h
                } else
                    u[x] = h
            }
            return this.options.layoutId && (u.pointerEvents = f === this ? bi(o == null ? void 0 : o.pointerEvents) || "" : "none"),
            u
        }
        clearSnapshot() {
            this.resumeFrom = this.snapshot = void 0
        }
        resetTree() {
            this.root.nodes.forEach(o => {
                var l;
                return (l = o.currentAnimation) === null || l === void 0 ? void 0 : l.stop()
            }
            ),
            this.root.nodes.forEach($f),
            this.root.sharedNodes.clear()
        }
    }
}
function rw(e) {
    e.updateLayout()
}
function iw(e) {
    var t;
    const n = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
    if (e.isLead() && e.layout && n && e.hasListeners("didUpdate")) {
        const {layoutBox: r, measuredBox: i} = e.layout
          , {animationType: s} = e.options
          , o = n.source !== e.layout.source;
        s === "size" ? Qe(f => {
            const d = o ? n.measuredBox[f] : n.layoutBox[f]
              , y = We(d);
            d.min = r[f].min,
            d.max = d.min + y
        }
        ) : Fm(s, n.layoutBox, r) && Qe(f => {
            const d = o ? n.measuredBox[f] : n.layoutBox[f]
              , y = We(r[f]);
            d.max = d.min + y,
            e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[f].max = e.relativeTarget[f].min + y)
        }
        );
        const l = Un();
        Fr(l, r, n.layoutBox);
        const a = Un();
        o ? Fr(a, e.applyTransform(i, !0), n.measuredBox) : Fr(a, r, n.layoutBox);
        const u = !Vm(l);
        let c = !1;
        if (!e.resumeFrom) {
            const f = e.getClosestProjectingParent();
            if (f && !f.resumeFrom) {
                const {snapshot: d, layout: y} = f;
                if (d && y) {
                    const v = ue();
                    Or(v, n.layoutBox, d.layoutBox);
                    const x = ue();
                    Or(x, r, y.layoutBox),
                    _m(v, x) || (c = !0),
                    f.options.layoutRoot && (e.relativeTarget = x,
                    e.relativeTargetOrigin = v,
                    e.relativeParent = f)
                }
            }
        }
        e.notifyListeners("didUpdate", {
            layout: r,
            snapshot: n,
            delta: a,
            layoutDelta: l,
            hasLayoutChanged: u,
            hasRelativeTargetChanged: c
        })
    } else if (e.isLead()) {
        const {onExitComplete: r} = e.options;
        r && r()
    }
    e.options.transition = void 0
}
function sw(e) {
    Er && an.totalNodes++,
    e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function ow(e) {
    e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function lw(e) {
    e.clearSnapshot()
}
function $f(e) {
    e.clearMeasurements()
}
function aw(e) {
    e.isLayoutDirty = !1
}
function uw(e) {
    const {visualElement: t} = e.options;
    t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function Wf(e) {
    e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function cw(e) {
    e.resolveTargetDelta()
}
function fw(e) {
    e.calcProjection()
}
function dw(e) {
    e.resetSkewAndRotation()
}
function hw(e) {
    e.removeLeadSnapshot()
}
function Hf(e, t, n) {
    e.translate = ne(t.translate, 0, n),
    e.scale = ne(t.scale, 1, n),
    e.origin = t.origin,
    e.originPoint = t.originPoint
}
function Kf(e, t, n, r) {
    e.min = ne(t.min, n.min, r),
    e.max = ne(t.max, n.max, r)
}
function pw(e, t, n, r) {
    Kf(e.x, t.x, n.x, r),
    Kf(e.y, t.y, n.y, r)
}
function mw(e) {
    return e.animationValues && e.animationValues.opacityExit !== void 0
}
const gw = {
    duration: .45,
    ease: [.4, 0, .1, 1]
}
  , Gf = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Qf = Gf("applewebkit/") && !Gf("chrome/") ? Math.round : Ue;
function Xf(e) {
    e.min = Qf(e.min),
    e.max = Qf(e.max)
}
function yw(e) {
    Xf(e.x),
    Xf(e.y)
}
function Fm(e, t, n) {
    return e === "position" || e === "preserve-aspect" && !wx(Of(t), Of(n), .2)
}
function vw(e) {
    var t;
    return e !== e.root && ((t = e.scroll) === null || t === void 0 ? void 0 : t.wasRoot)
}
const xw = Im({
    attachResizeListener: (e, t) => li(e, "resize", t),
    measureScroll: () => ({
        x: document.documentElement.scrollLeft || document.body.scrollLeft,
        y: document.documentElement.scrollTop || document.body.scrollTop
    }),
    checkIsScrollRoot: () => !0
})
  , zo = {
    current: void 0
}
  , Om = Im({
    measureScroll: e => ({
        x: e.scrollLeft,
        y: e.scrollTop
    }),
    defaultParent: () => {
        if (!zo.current) {
            const e = new xw({});
            e.mount(window),
            e.setOptions({
                layoutScroll: !0
            }),
            zo.current = e
        }
        return zo.current
    }
    ,
    resetTransform: (e, t) => {
        e.style.transform = t !== void 0 ? t : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
})
  , ww = {
    pan: {
        Feature: zx
    },
    drag: {
        Feature: _x,
        ProjectionNode: Om,
        MeasureLayout: Dm
    }
};
function Yf(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileHover && e.animationState.setActive("whileHover", n === "Start");
    const i = "onHover" + n
      , s = r[i];
    s && q.postRender( () => s(t, gi(t)))
}
class Sw extends tn {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = Sv(t, n => (Yf(this.node, n, "Start"),
        r => Yf(this.node, r, "End"))))
    }
    unmount() {}
}
class kw extends tn {
    constructor() {
        super(...arguments),
        this.isActive = !1
    }
    onFocus() {
        let t = !1;
        try {
            t = this.node.current.matches(":focus-visible")
        } catch {
            t = !0
        }
        !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
        this.isActive = !0)
    }
    onBlur() {
        !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
        this.isActive = !1)
    }
    mount() {
        this.unmount = mi(li(this.node.current, "focus", () => this.onFocus()), li(this.node.current, "blur", () => this.onBlur()))
    }
    unmount() {}
}
function bf(e, t, n) {
    const {props: r} = e;
    e.animationState && r.whileTap && e.animationState.setActive("whileTap", n === "Start");
    const i = "onTap" + (n === "End" ? "" : n)
      , s = r[i];
    s && q.postRender( () => s(t, gi(t)))
}
class Tw extends tn {
    mount() {
        const {current: t} = this.node;
        t && (this.unmount = Pv(t, n => (bf(this.node, n, "Start"),
        (r, {success: i}) => bf(this.node, r, i ? "End" : "Cancel")), {
            useGlobalTarget: this.node.props.globalTapTarget
        }))
    }
    unmount() {}
}
const Xl = new WeakMap
  , Io = new WeakMap
  , Cw = e => {
    const t = Xl.get(e.target);
    t && t(e)
}
  , Pw = e => {
    e.forEach(Cw)
}
;
function Ew({root: e, ...t}) {
    const n = e || document;
    Io.has(n) || Io.set(n, {});
    const r = Io.get(n)
      , i = JSON.stringify(t);
    return r[i] || (r[i] = new IntersectionObserver(Pw,{
        root: e,
        ...t
    })),
    r[i]
}
function Mw(e, t, n) {
    const r = Ew(t);
    return Xl.set(e, n),
    r.observe(e),
    () => {
        Xl.delete(e),
        r.unobserve(e)
    }
}
const Nw = {
    some: 0,
    all: 1
};
class jw extends tn {
    constructor() {
        super(...arguments),
        this.hasEnteredView = !1,
        this.isInView = !1
    }
    startObserver() {
        this.unmount();
        const {viewport: t={}} = this.node.getProps()
          , {root: n, margin: r, amount: i="some", once: s} = t
          , o = {
            root: n ? n.current : void 0,
            rootMargin: r,
            threshold: typeof i == "number" ? i : Nw[i]
        }
          , l = a => {
            const {isIntersecting: u} = a;
            if (this.isInView === u || (this.isInView = u,
            s && !u && this.hasEnteredView))
                return;
            u && (this.hasEnteredView = !0),
            this.node.animationState && this.node.animationState.setActive("whileInView", u);
            const {onViewportEnter: c, onViewportLeave: f} = this.node.getProps()
              , d = u ? c : f;
            d && d(a)
        }
        ;
        return Mw(this.node.current, o, l)
    }
    mount() {
        this.startObserver()
    }
    update() {
        if (typeof IntersectionObserver > "u")
            return;
        const {props: t, prevProps: n} = this.node;
        ["amount", "margin", "root"].some(Aw(t, n)) && this.startObserver()
    }
    unmount() {}
}
function Aw({viewport: e={}}, {viewport: t={}}={}) {
    return n => e[n] !== t[n]
}
const Dw = {
    inView: {
        Feature: jw
    },
    tap: {
        Feature: Tw
    },
    focus: {
        Feature: kw
    },
    hover: {
        Feature: Sw
    }
}
  , Lw = {
    layout: {
        ProjectionNode: Om,
        MeasureLayout: Dm
    }
}
  , Yl = {
    current: null
}
  , Bm = {
    current: !1
};
function Rw() {
    if (Bm.current = !0,
    !!Qa)
        if (window.matchMedia) {
            const e = window.matchMedia("(prefers-reduced-motion)")
              , t = () => Yl.current = e.matches;
            e.addListener(t),
            t()
        } else
            Yl.current = !1
}
const Vw = [...fm, Te, Zt]
  , _w = e => Vw.find(cm(e))
  , Zf = new WeakMap;
function zw(e, t, n) {
    for (const r in t) {
        const i = t[r]
          , s = n[r];
        if (Ee(i))
            e.addValue(r, i);
        else if (Ee(s))
            e.addValue(r, si(i, {
                owner: e
            }));
        else if (s !== i)
            if (e.hasValue(r)) {
                const o = e.getValue(r);
                o.liveStyle === !0 ? o.jump(i) : o.hasAnimated || o.set(i)
            } else {
                const o = e.getStaticValue(r);
                e.addValue(r, si(o !== void 0 ? o : i, {
                    owner: e
                }))
            }
    }
    for (const r in n)
        t[r] === void 0 && e.removeValue(r);
    return t
}
const qf = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
class Iw {
    scrapeMotionValuesFromProps(t, n, r) {
        return {}
    }
    constructor({parent: t, props: n, presenceContext: r, reducedMotionConfig: i, blockInitialAnimation: s, visualState: o}, l={}) {
        this.current = null,
        this.children = new Set,
        this.isVariantNode = !1,
        this.isControllingVariants = !1,
        this.shouldReduceMotion = null,
        this.values = new Map,
        this.KeyframeResolver = wu,
        this.features = {},
        this.valueSubscriptions = new Map,
        this.prevMotionValues = {},
        this.events = {},
        this.propEventSubscriptions = {},
        this.notifyUpdate = () => this.notify("Update", this.latestValues),
        this.render = () => {
            this.current && (this.triggerBuild(),
            this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
        }
        ,
        this.renderScheduledAt = 0,
        this.scheduleRender = () => {
            const y = mt.now();
            this.renderScheduledAt < y && (this.renderScheduledAt = y,
            q.render(this.render, !1, !0))
        }
        ;
        const {latestValues: a, renderState: u, onUpdate: c} = o;
        this.onUpdate = c,
        this.latestValues = a,
        this.baseTarget = {
            ...a
        },
        this.initialValues = n.initial ? {
            ...a
        } : {},
        this.renderState = u,
        this.parent = t,
        this.props = n,
        this.presenceContext = r,
        this.depth = t ? t.depth + 1 : 0,
        this.reducedMotionConfig = i,
        this.options = l,
        this.blockInitialAnimation = !!s,
        this.isControllingVariants = Ys(n),
        this.isVariantNode = xp(n),
        this.isVariantNode && (this.variantChildren = new Set),
        this.manuallyAnimateOnMount = !!(t && t.current);
        const {willChange: f, ...d} = this.scrapeMotionValuesFromProps(n, {}, this);
        for (const y in d) {
            const v = d[y];
            a[y] !== void 0 && Ee(v) && v.set(a[y], !1)
        }
    }
    mount(t) {
        this.current = t,
        Zf.set(t, this),
        this.projection && !this.projection.instance && this.projection.mount(t),
        this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
        this.values.forEach( (n, r) => this.bindToMotionValue(r, n)),
        Bm.current || Rw(),
        this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Yl.current,
        this.parent && this.parent.children.add(this),
        this.update(this.props, this.presenceContext)
    }
    unmount() {
        Zf.delete(this.current),
        this.projection && this.projection.unmount(),
        bt(this.notifyUpdate),
        bt(this.render),
        this.valueSubscriptions.forEach(t => t()),
        this.valueSubscriptions.clear(),
        this.removeFromVariantTree && this.removeFromVariantTree(),
        this.parent && this.parent.children.delete(this);
        for (const t in this.events)
            this.events[t].clear();
        for (const t in this.features) {
            const n = this.features[t];
            n && (n.unmount(),
            n.isMounted = !1)
        }
        this.current = null
    }
    bindToMotionValue(t, n) {
        this.valueSubscriptions.has(t) && this.valueSubscriptions.get(t)();
        const r = Tn.has(t)
          , i = n.on("change", l => {
            this.latestValues[t] = l,
            this.props.onUpdate && q.preRender(this.notifyUpdate),
            r && this.projection && (this.projection.isTransformDirty = !0)
        }
        )
          , s = n.on("renderRequest", this.scheduleRender);
        let o;
        window.MotionCheckAppearSync && (o = window.MotionCheckAppearSync(this, t, n)),
        this.valueSubscriptions.set(t, () => {
            i(),
            s(),
            o && o(),
            n.owner && n.stop()
        }
        )
    }
    sortNodePosition(t) {
        return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current)
    }
    updateFeatures() {
        let t = "animation";
        for (t in ir) {
            const n = ir[t];
            if (!n)
                continue;
            const {isEnabled: r, Feature: i} = n;
            if (!this.features[t] && i && r(this.props) && (this.features[t] = new i(this)),
            this.features[t]) {
                const s = this.features[t];
                s.isMounted ? s.update() : (s.mount(),
                s.isMounted = !0)
            }
        }
    }
    triggerBuild() {
        this.build(this.renderState, this.latestValues, this.props)
    }
    measureViewportBox() {
        return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ue()
    }
    getStaticValue(t) {
        return this.latestValues[t]
    }
    setStaticValue(t, n) {
        this.latestValues[t] = n
    }
    update(t, n) {
        (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
        this.prevProps = this.props,
        this.props = t,
        this.prevPresenceContext = this.presenceContext,
        this.presenceContext = n;
        for (let r = 0; r < qf.length; r++) {
            const i = qf[r];
            this.propEventSubscriptions[i] && (this.propEventSubscriptions[i](),
            delete this.propEventSubscriptions[i]);
            const s = "on" + i
              , o = t[s];
            o && (this.propEventSubscriptions[i] = this.on(i, o))
        }
        this.prevMotionValues = zw(this, this.scrapeMotionValuesFromProps(t, this.prevProps, this), this.prevMotionValues),
        this.handleChildMotionValue && this.handleChildMotionValue(),
        this.onUpdate && this.onUpdate(this)
    }
    getProps() {
        return this.props
    }
    getVariant(t) {
        return this.props.variants ? this.props.variants[t] : void 0
    }
    getDefaultTransition() {
        return this.props.transition
    }
    getTransformPagePoint() {
        return this.props.transformPagePoint
    }
    getClosestVariantNode() {
        return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
    }
    addVariantChild(t) {
        const n = this.getClosestVariantNode();
        if (n)
            return n.variantChildren && n.variantChildren.add(t),
            () => n.variantChildren.delete(t)
    }
    addValue(t, n) {
        const r = this.values.get(t);
        n !== r && (r && this.removeValue(t),
        this.bindToMotionValue(t, n),
        this.values.set(t, n),
        this.latestValues[t] = n.get())
    }
    removeValue(t) {
        this.values.delete(t);
        const n = this.valueSubscriptions.get(t);
        n && (n(),
        this.valueSubscriptions.delete(t)),
        delete this.latestValues[t],
        this.removeValueFromRenderState(t, this.renderState)
    }
    hasValue(t) {
        return this.values.has(t)
    }
    getValue(t, n) {
        if (this.props.values && this.props.values[t])
            return this.props.values[t];
        let r = this.values.get(t);
        return r === void 0 && n !== void 0 && (r = si(n === null ? void 0 : n, {
            owner: this
        }),
        this.addValue(t, r)),
        r
    }
    readValue(t, n) {
        var r;
        let i = this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : (r = this.getBaseTargetFromProps(this.props, t)) !== null && r !== void 0 ? r : this.readValueFromInstance(this.current, t, this.options);
        return i != null && (typeof i == "string" && (am(i) || Jp(i)) ? i = parseFloat(i) : !_w(i) && Zt.test(n) && (i = sm(t, n)),
        this.setBaseTarget(t, Ee(i) ? i.get() : i)),
        Ee(i) ? i.get() : i
    }
    setBaseTarget(t, n) {
        this.baseTarget[t] = n
    }
    getBaseTarget(t) {
        var n;
        const {initial: r} = this.props;
        let i;
        if (typeof r == "string" || typeof r == "object") {
            const o = eu(this.props, r, (n = this.presenceContext) === null || n === void 0 ? void 0 : n.custom);
            o && (i = o[t])
        }
        if (r && i !== void 0)
            return i;
        const s = this.getBaseTargetFromProps(this.props, t);
        return s !== void 0 && !Ee(s) ? s : this.initialValues[t] !== void 0 && i === void 0 ? void 0 : this.baseTarget[t]
    }
    on(t, n) {
        return this.events[t] || (this.events[t] = new pu),
        this.events[t].add(n)
    }
    notify(t, ...n) {
        this.events[t] && this.events[t].notify(...n)
    }
}
class Um extends Iw {
    constructor() {
        super(...arguments),
        this.KeyframeResolver = dm
    }
    sortInstanceNodePosition(t, n) {
        return t.compareDocumentPosition(n) & 2 ? 1 : -1
    }
    getBaseTargetFromProps(t, n) {
        return t.style ? t.style[n] : void 0
    }
    removeValueFromRenderState(t, {vars: n, style: r}) {
        delete n[t],
        delete r[t]
    }
    handleChildMotionValue() {
        this.childSubscription && (this.childSubscription(),
        delete this.childSubscription);
        const {children: t} = this.props;
        Ee(t) && (this.childSubscription = t.on("change", n => {
            this.current && (this.current.textContent = `${n}`)
        }
        ))
    }
}
function Fw(e) {
    return window.getComputedStyle(e)
}
class Ow extends Um {
    constructor() {
        super(...arguments),
        this.type = "html",
        this.renderInstance = Np
    }
    readValueFromInstance(t, n) {
        if (Tn.has(n)) {
            const r = xu(n);
            return r && r.default || 0
        } else {
            const r = Fw(t)
              , i = (Pp(n) ? r.getPropertyValue(n) : r[n]) || 0;
            return typeof i == "string" ? i.trim() : i
        }
    }
    measureInstanceViewportBox(t, {transformPagePoint: n}) {
        return jm(t, n)
    }
    build(t, n, r) {
        ru(t, n, r.transformTemplate)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return lu(t, n, r)
    }
}
class Bw extends Um {
    constructor() {
        super(...arguments),
        this.type = "svg",
        this.isSVGTag = !1,
        this.measureInstanceViewportBox = ue
    }
    getBaseTargetFromProps(t, n) {
        return t[n]
    }
    readValueFromInstance(t, n) {
        if (Tn.has(n)) {
            const r = xu(n);
            return r && r.default || 0
        }
        return n = jp.has(n) ? n : Za(n),
        t.getAttribute(n)
    }
    scrapeMotionValuesFromProps(t, n, r) {
        return Lp(t, n, r)
    }
    build(t, n, r) {
        iu(t, n, this.isSVGTag, r.transformTemplate)
    }
    renderInstance(t, n, r, i) {
        Ap(t, n, r, i)
    }
    mount(t) {
        this.isSVGTag = ou(t.tagName),
        super.mount(t)
    }
}
const Uw = (e, t) => Ja(e) ? new Bw(t) : new Ow(t,{
    allowProjection: e !== S.Fragment
})
  , $w = pv({
    ...fx,
    ...Dw,
    ...ww,
    ...Lw
}, Uw)
  , Ce = jy($w);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ww = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Hw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase().trim()
  , Ie = (e, t) => {
    const n = S.forwardRef( ({color: r="currentColor", size: i=24, strokeWidth: s=2, absoluteStrokeWidth: o, className: l="", children: a, ...u}, c) => S.createElement("svg", {
        ref: c,
        ...Ww,
        width: i,
        height: i,
        stroke: r,
        strokeWidth: o ? Number(s) * 24 / Number(i) : s,
        className: ["lucide", `lucide-${Hw(e)}`, l].join(" "),
        ...u
    }, [...t.map( ([f,d]) => S.createElement(f, d)), ...Array.isArray(a) ? a : [a]]));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Kw = Ie("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Gw = Ie("Download", [["path", {
    d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
    key: "ih7n3h"
}], ["polyline", {
    points: "7 10 12 15 17 10",
    key: "2ggqvy"
}], ["line", {
    x1: "12",
    x2: "12",
    y1: "15",
    y2: "3",
    key: "1vk2je"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $m = Ie("HelpCircle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}], ["path", {
    d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",
    key: "1u773s"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Qw = Ie("Mail", [["rect", {
    width: "20",
    height: "16",
    x: "2",
    y: "4",
    rx: "2",
    key: "18n3k1"
}], ["path", {
    d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",
    key: "1ocrg3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Xw = Ie("Maximize2", [["polyline", {
    points: "15 3 21 3 21 9",
    key: "mznyad"
}], ["polyline", {
    points: "9 21 3 21 3 15",
    key: "1avn1i"
}], ["line", {
    x1: "21",
    x2: "14",
    y1: "3",
    y2: "10",
    key: "ota7mn"
}], ["line", {
    x1: "3",
    x2: "10",
    y1: "21",
    y2: "14",
    key: "1atl0r"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Yw = Ie("Minus", [["path", {
    d: "M5 12h14",
    key: "1ays0h"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bw = Ie("Pause", [["rect", {
    width: "4",
    height: "16",
    x: "6",
    y: "4",
    key: "iffhe4"
}], ["rect", {
    width: "4",
    height: "16",
    x: "14",
    y: "4",
    key: "sjin7j"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Zw = Ie("Play", [["polygon", {
    points: "5 3 19 12 5 21 5 3",
    key: "191637"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const qw = Ie("Share2", [["circle", {
    cx: "18",
    cy: "5",
    r: "3",
    key: "gq8acd"
}], ["circle", {
    cx: "6",
    cy: "12",
    r: "3",
    key: "w7nqdw"
}], ["circle", {
    cx: "18",
    cy: "19",
    r: "3",
    key: "1xt0gg"
}], ["line", {
    x1: "8.59",
    x2: "15.42",
    y1: "13.51",
    y2: "17.49",
    key: "47mynk"
}], ["line", {
    x1: "15.41",
    x2: "8.59",
    y1: "6.51",
    y2: "10.49",
    key: "1n3mei"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jw = Ie("SkipBack", [["polygon", {
    points: "19 20 9 12 19 4 19 20",
    key: "o2sva"
}], ["line", {
    x1: "5",
    x2: "5",
    y1: "19",
    y2: "5",
    key: "1ocqjk"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const eS = Ie("SkipForward", [["polygon", {
    points: "5 4 15 12 5 20 5 4",
    key: "16p6eg"
}], ["line", {
    x1: "19",
    x2: "19",
    y1: "5",
    y2: "19",
    key: "futhcm"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const tS = Ie("Trophy", [["path", {
    d: "M6 9H4.5a2.5 2.5 0 0 1 0-5H6",
    key: "17hqa7"
}], ["path", {
    d: "M18 9h1.5a2.5 2.5 0 0 0 0-5H18",
    key: "lmptdp"
}], ["path", {
    d: "M4 22h16",
    key: "57wxv0"
}], ["path", {
    d: "M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",
    key: "1nw9bq"
}], ["path", {
    d: "M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",
    key: "1np0yb"
}], ["path", {
    d: "M18 2H6v7a6 6 0 0 0 12 0V2Z",
    key: "u46fv3"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const nS = Ie("Volume2", [["polygon", {
    points: "11 5 6 9 2 9 2 15 6 15 11 19 11 5",
    key: "16drj5"
}], ["path", {
    d: "M15.54 8.46a5 5 0 0 1 0 7.07",
    key: "ltjumu"
}], ["path", {
    d: "M19.07 4.93a10 10 0 0 1 0 14.14",
    key: "1kegas"
}]]);
/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Cu = Ie("X", [["path", {
    d: "M18 6 6 18",
    key: "1bl5f8"
}], ["path", {
    d: "m6 6 12 12",
    key: "d8bk6v"
}]])
  , rS = ({audioRef: e}) => {
    const t = S.useRef(null)
      , n = S.useRef([])
      , r = S.useRef()
      , i = S.useRef(null)
      , s = S.useRef(null)
      , o = S.useRef(new Uint8Array(0))
      , l = S.useRef(0)
      , a = S.useRef([]);
    return S.useEffect( () => {
        var p;
        const u = t.current;
        if (!u)
            return;
        const c = u.getContext("2d");
        if (!c)
            return;
        const f = () => {
            if (!e.current || i.current)
                return;
            const h = new (window.AudioContext || window.webkitAudioContext);
            i.current = h;
            const m = h.createAnalyser();
            return m.fftSize = 64,
            h.createMediaElementSource(e.current).connect(m),
            m.connect(h.destination),
            s.current = m,
            o.current = new Uint8Array(m.frequencyBinCount),
            h
        }
          , d = async () => {
            const h = f();
            h && h.state === "suspended" && await h.resume()
        }
          , y = () => {
            u.width = window.innerWidth,
            u.height = window.innerHeight,
            v()
        }
          , v = () => {
            n.current = Array(100).fill(0).map( () => ({
                x: Math.random() * u.width,
                y: Math.random() * u.height,
                size: Math.random() * .8 + .2,
                speed: Math.random() * .05 + .05,
                opacity: Math.random() * .5 + .3,
                isVisualizer: !1,
                glowPhase: Math.random() * Math.PI * 2
            }))
        }
          , x = () => {
            if (!s.current)
                return;
            s.current.getByteFrequencyData(o.current);
            const h = o.current.slice(0, 5).reduce( (m, w) => m + w, 0) / 5;
            l.current = h / 255
        }
          , T = () => {
            c.clearRect(0, 0, u.width, u.height),
            x();
            const h = l.current;
            if (h > .3) {
                a.current.forEach(w => {
                    n.current[w].isVisualizer = !1
                }
                ),
                a.current = [];
                const m = Math.floor(h * 5) + 1;
                for (let w = 0; w < m; w++) {
                    const k = Math.floor(Math.random() * n.current.length);
                    n.current[k].isVisualizer = !0,
                    a.current.push(k)
                }
            }
            n.current.forEach(m => {
                m.glowPhase += .05;
                let w = m.size
                  , k = m.opacity + Math.sin(m.glowPhase) * .1;
                k = Math.max(0, Math.min(1, k)),
                m.isVisualizer && h > .2 ? (w = m.size * (1 + h * 2),
                c.shadowBlur = 15,
                c.shadowColor = "rgba(255, 255, 255, 0.7)") : (c.shadowBlur = 5,
                c.shadowColor = "rgba(255, 255, 255, 0.2)"),
                c.fillStyle = `rgba(255, 255, 255, ${k})`,
                c.beginPath(),
                c.arc(m.x, m.y, w, 0, Math.PI * 2),
                c.fill(),
                m.y += m.speed,
                m.y > u.height && (m.y = 0,
                m.x = Math.random() * u.width,
                m.isVisualizer = !1)
            }
            ),
            r.current = requestAnimationFrame(T)
        }
        ;
        return y(),
        r.current = requestAnimationFrame(T),
        window.addEventListener("resize", y),
        (p = e.current) == null || p.addEventListener("play", d),
        () => {
            var h;
            r.current && cancelAnimationFrame(r.current),
            window.removeEventListener("resize", y),
            (h = e.current) == null || h.removeEventListener("play", d)
        }
    }
    , []),
    g.jsx("canvas", {
        ref: t,
        className: "fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    })
}
  , W = [{
    title: "Nope your too late i already died",
    artist: "wifiskeleton, i wanna be a jack-o-lantern",
    coverUrl: "nopeyourtoolate.png",
    url: "sounds/nopeyourtoolate.mp3",
    duration: "1:30"
}, {
    title: "Complicated",
    artist: "Avril Lavigne ",
    coverUrl: "Complicated.png",
    url: "/sounds/Complicated.mp3",
    duration: "4:13"
}, {
    title: "t r a n s p a r e n t s o u l",
    artist: "WILLOW, Travis Barker",
    coverUrl: "transparentsoul.png",
    url: "sounds/transparentsoul.mp3",
    duration: "2:48"
}, {
    title: "Ain't It Fun",
    artist: "Paramore",
    coverUrl: "aintitfun.png",
    url: "sounds/aintitfun.mp3",
    duration: "4:56"
}, {
    title: "All I Wanted",
    artist: "Paramore",
    coverUrl: "alliwanted.png",
    url: "sounds/alliwanted.mp3",
    duration: "3:45"
}, {
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    coverUrl: "thelessiknow.png",
    url: "sounds/thelessiknow.mp3",
    duration: "3:36"
}]
  , iS = ({audioRef: e, audioContextAllowed: t}) => {
    const [n,r] = S.useState(0)
      , [i,s] = S.useState(!1)
      , [o,l] = S.useState(0)
      , [a,u] = S.useState("0:00")
      , [c,f] = S.useState(50)
      , [d,y] = S.useState(!1)
      , [v,x] = S.useState(!1)
      , [T,p] = S.useState(!1)
      , [h,m] = S.useState(!1)
      , [w,k] = S.useState(!1)
      , [P,N] = S.useState(!1)
      , [C,I] = S.useState({})
      , V = S.useRef(null)
      , H = S.useRef(null)
      , fe = S.useRef(null)
      , O = S.useRef()
      , L = S.useRef(0)
      , j = S.useRef({});
    S.useEffect( () => ((async () => {
        const G = {};
        await Promise.all(W.map(async ae => {
            const At = new Image;
            At.src = ae.coverUrl,
            await At.decode(),
            G[ae.coverUrl] = ae.coverUrl
        }
        )),
        I(G)
    }
    )(),
    [0, 1].forEach(G => {
        const ae = new Audio(W[G].url);
        ae.preload = "auto",
        j.current[W[G].url] = ae
    }
    ),
    () => {
        O.current && clearTimeout(O.current),
        Object.values(j.current).forEach(G => G.remove())
    }
    ), []),
    S.useEffect( () => {
        [W[n === 0 ? W.length - 1 : n - 1].url, W[n === W.length - 1 ? 0 : n + 1].url].forEach(G => {
            if (!j.current[G]) {
                const ae = new Audio(G);
                ae.preload = "auto",
                j.current[G] = ae
            }
        }
        )
    }
    , [n]);
    const J = B => (j.current[B] || (j.current[B] = new Audio(B),
    j.current[B].preload = "auto"),
    j.current[B])
      , z = async () => {
        if (!(!e.current || !t))
            try {
                if (k(!0),
                i)
                    await e.current.pause(),
                    L.current = e.current.currentTime,
                    s(!1);
                else {
                    const B = J(W[n].url);
                    e.current.src !== B.src && (e.current.src = B.src),
                    L.current > 0 && (e.current.currentTime = L.current),
                    await e.current.play(),
                    s(!0)
                }
            } catch (B) {
                console.error("Playback failed:", B),
                s(!1)
            } finally {
                k(!1)
            }
    }
      , E = () => {
        L.current = 0,
        r(B => B === 0 ? W.length - 1 : B - 1),
        s(!1),
        e.current && (e.current.currentTime = 0,
        e.current.src = W[n === 0 ? W.length - 1 : n - 1].url)
    }
      , A = () => {
        L.current = 0,
        r(B => B === W.length - 1 ? 0 : B + 1),
        s(!1),
        e.current && (e.current.currentTime = 0,
        e.current.src = W[n === W.length - 1 ? 0 : n + 1].url)
    }
      , R = B => {
        const G = Math.floor(B / 60)
          , ae = Math.floor(B % 60);
        return `${G}:${ae.toString().padStart(2, "0")}`
    }
      , $ = B => {
        const [G,ae] = B.split(":").map(Number);
        return `${G} minute${G !== 1 ? "s" : ""} ${ae} second${ae !== 1 ? "s" : ""}`
    }
      , _ = B => {
        y(!0),
        se(B)
    }
      , X = B => {
        x(!0),
        nn(B)
    }
      , se = B => {
        if (V.current && e.current) {
            const G = V.current.getBoundingClientRect()
              , At = Math.max(0, Math.min(B.clientX - G.left, G.width)) / G.width * 100;
            l(At),
            e.current.currentTime = At / 100 * e.current.duration,
            u(R(e.current.currentTime)),
            L.current = e.current.currentTime
        }
    }
      , nn = B => {
        if (H.current) {
            const G = H.current.getBoundingClientRect()
              , At = Math.max(0, Math.min(B.clientX - G.left, G.width)) / G.width * 100;
            f(At),
            e.current && (e.current.volume = At / 100)
        }
    }
      , gt = () => {
        const B = document.createElement("a");
        B.href = W[n].url,
        B.download = `${W[n].title} - ${W[n].artist}.mp3`,
        document.body.appendChild(B),
        B.click(),
        document.body.removeChild(B),
        p(!1)
    }
      , Cn = () => {
        const B = "https://owenn.wiki"
          , G = W[n].url.startsWith("/") ? W[n].url : `/${W[n].url}`
          , ae = encodeURIComponent(G).replace(/%2F/g, "/");
        navigator.clipboard.writeText(`${B}${ae}`),
        m(!0),
        O.current = setTimeout( () => m(!1), 2e3)
    }
    ;
    return S.useEffect( () => {
        const B = ae => {
            d && se(ae),
            v && nn(ae)
        }
          , G = () => {
            y(!1),
            x(!1)
        }
        ;
        return document.addEventListener("mousemove", B),
        document.addEventListener("mouseup", G),
        () => {
            document.removeEventListener("mousemove", B),
            document.removeEventListener("mouseup", G)
        }
    }
    , [d, v]),
    g.jsxs("div", {
        className: "space-y-2 p-3 border border-zinc-800/30 rounded hover:border-zinc-700/30 transition-colors",
        children: [g.jsxs("div", {
            className: "flex items-center gap-2",
            children: [g.jsx(Ce.div, {
                whileHover: {
                    opacity: .8
                },
                whileTap: {
                    scale: .95
                },
                className: "cursor-pointer",
                onClick: () => p(!0),
                children: g.jsx("img", {
                    src: C[W[n].coverUrl] || W[n].coverUrl,
                    alt: W[n].title,
                    className: "w-7 h-7 rounded"
                })
            }), g.jsxs("div", {
                className: "flex-1 cursor-pointer group",
                onClick: () => p(!0),
                children: [g.jsx("h3", {
                    className: "text-xs font-medium text-gray-300 group-hover:text-white transition-colors",
                    children: W[n].title
                }), g.jsx("p", {
                    className: "text-xs text-gray-500 group-hover:text-gray-400 transition-colors",
                    children: W[n].artist
                })]
            })]
        }), g.jsxs("div", {
            className: "flex items-center justify-between gap-3",
            children: [g.jsxs("div", {
                className: "flex items-center gap-2",
                children: [g.jsx(Ce.button, {
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .95
                    },
                    onClick: E,
                    className: "text-gray-500 hover:text-white transition-colors",
                    children: g.jsx(Jw, {
                        size: 14
                    })
                }), g.jsx(Ce.button, {
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .95
                    },
                    onClick: z,
                    className: "text-white hover:text-gray-200 transition-colors",
                    disabled: w || !t,
                    children: w ? g.jsx("div", {
                        className: "w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"
                    }) : i ? g.jsx(bw, {
                        size: 16
                    }) : g.jsx(Zw, {
                        size: 16
                    })
                }), g.jsx(Ce.button, {
                    whileHover: {
                        scale: 1.1
                    },
                    whileTap: {
                        scale: .95
                    },
                    onClick: A,
                    className: "text-gray-500 hover:text-white transition-colors",
                    children: g.jsx(eS, {
                        size: 14
                    })
                })]
            }), g.jsxs("div", {
                className: "flex items-center gap-2",
                children: [g.jsx(nS, {
                    size: 14,
                    className: "text-gray-500"
                }), g.jsx("div", {
                    ref: H,
                    className: "w-12 h-0.5 bg-gray-800 rounded-full overflow-hidden cursor-pointer relative group",
                    onMouseDown: X,
                    onClick: nn,
                    children: g.jsx("div", {
                        className: "h-full bg-gray-400 rounded-full absolute top-0 left-0 group-hover:bg-white transition-colors",
                        style: {
                            width: `${c}%`
                        }
                    })
                }), g.jsxs("span", {
                    className: "text-xs text-gray-500 w-6",
                    children: [Math.round(c), "%"]
                })]
            })]
        }), g.jsxs("div", {
            className: "relative",
            children: [P && g.jsx("div", {
                className: "absolute top-0 left-0 right-0 h-0.5 bg-gray-800 overflow-hidden",
                children: g.jsx("div", {
                    className: "h-full bg-gray-600 animate-pulse",
                    style: {
                        width: "100%"
                    }
                })
            }), g.jsx("div", {
                ref: V,
                className: "h-0.5 bg-gray-800 rounded-full overflow-hidden cursor-pointer relative group",
                onMouseDown: _,
                onClick: se,
                children: g.jsx("div", {
                    className: "h-full bg-gray-400 rounded-full absolute top-0 left-0 group-hover:bg-white transition-colors",
                    style: {
                        width: `${o}%`
                    }
                })
            }), g.jsxs("div", {
                className: "flex justify-between mt-0.5",
                children: [g.jsx("span", {
                    className: "text-xs text-gray-500",
                    children: a
                }), g.jsx("span", {
                    className: "text-xs text-gray-500",
                    children: W[n].duration
                })]
            })]
        }), g.jsx(zc, {
            children: T && g.jsx(Ce.div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50",
                children: g.jsxs(Ce.div, {
                    ref: fe,
                    initial: {
                        scale: .9,
                        y: 20
                    },
                    animate: {
                        scale: 1,
                        y: 0
                    },
                    exit: {
                        scale: .9,
                        y: 20
                    },
                    className: "bg-black/90 border border-zinc-800/30 rounded-lg p-4 max-w-xs w-full relative",
                    children: [g.jsx("button", {
                        className: "absolute top-2 right-2 text-gray-400 hover:text-white transition-colors",
                        onClick: () => p(!1),
                        children: g.jsx(Cu, {
                            size: 16
                        })
                    }), g.jsxs("div", {
                        className: "flex gap-4 items-start pt-2",
                        children: [g.jsx(Ce.div, {
                            whileHover: {
                                opacity: .8
                            },
                            whileTap: {
                                scale: .95
                            },
                            className: "cursor-pointer",
                            onClick: () => window.open(W[n].coverUrl, "_blank"),
                            children: g.jsx("img", {
                                src: C[W[n].coverUrl] || W[n].coverUrl,
                                alt: W[n].title,
                                className: "w-14 h-14 rounded"
                            })
                        }), g.jsxs("div", {
                            className: "flex-1",
                            children: [g.jsx("h3", {
                                className: "text-sm font-medium",
                                children: W[n].title
                            }), g.jsx("p", {
                                className: "text-xs text-gray-400",
                                children: W[n].artist
                            }), g.jsx("p", {
                                className: "text-xs text-gray-500 mb-3",
                                children: $(W[n].duration)
                            }), g.jsxs("div", {
                                className: "flex gap-4",
                                children: [g.jsx(Ce.button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    onClick: gt,
                                    className: "text-white hover:text-gray-200 transition-colors",
                                    title: "Download",
                                    children: g.jsx(Gw, {
                                        size: 20
                                    })
                                }), g.jsx(Ce.button, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    whileTap: {
                                        scale: .95
                                    },
                                    onClick: Cn,
                                    className: "text-white hover:text-gray-200 transition-colors",
                                    title: "Share",
                                    children: g.jsx(qw, {
                                        size: 20
                                    })
                                })]
                            })]
                        })]
                    })]
                })
            })
        }), g.jsx(zc, {
            children: h && g.jsxs(Ce.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                exit: {
                    opacity: 0,
                    y: 20
                },
                className: "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/80 border border-zinc-800/30 rounded-lg px-4 py-2 flex items-center gap-2 z-50",
                children: [g.jsx(Kw, {
                    size: 16,
                    className: "text-green-400"
                }), g.jsx("span", {
                    className: "text-sm",
                    children: "Copied to clipboard"
                })]
            })
        }), g.jsx("audio", {
            ref: e,
            src: W[n].url,
            preload: "auto",
            onTimeUpdate: () => {
                if (e.current && !d) {
                    const B = e.current.currentTime
                      , G = e.current.duration || 0;
                    G > 0 && (l(B / G * 100),
                    u(R(B)),
                    L.current = B)
                }
            }
            ,
            onEnded: A,
            onWaiting: () => N(!0),
            onPlaying: () => N(!1),
            onLoadedMetadata: () => {
                e.current && (L.current > 0 ? (e.current.currentTime = L.current,
                l(L.current / e.current.duration * 100),
                u(R(L.current))) : (u("0:00"),
                l(0)))
            }
            ,
            onError: B => {
                console.error("Audio error:", B),
                N(!1)
            }
        })]
    })
}
  , sS = ({isOpen: e, onClose: t, onMinimize: n, onOpenSnake: r}) => {
    const [i,s] = S.useState({
        x: 20,
        y: 60
    })
      , [o,l] = S.useState(!1)
      , [a,u] = S.useState({
        x: 0,
        y: 0
    })
      , [c,f] = S.useState([{
        input: "",
        output: 'Terminal v1.0.0 - Type "help" for available commands'
    }])
      , [d,y] = S.useState("")
      , [v,x] = S.useState("rgba(10, 10, 15, 0.8)")
      , T = S.useRef(null)
      , p = S.useRef(null)
      , h = S.useRef(null);
    S.useEffect( () => {
        e && T.current && T.current.focus()
    }
    , [e]),
    S.useEffect( () => {
        h.current && (h.current.scrollTop = h.current.scrollHeight)
    }
    , [c]);
    const m = O => {
        var L;
        if (O.target instanceof HTMLElement && O.target.classList.contains("drag-handle")) {
            l(!0);
            const j = (L = p.current) == null ? void 0 : L.getBoundingClientRect();
            j && u({
                x: O.clientX - j.left,
                y: O.clientY - j.top
            })
        }
    }
      , w = O => {
        var L;
        if (O.target instanceof HTMLElement && O.target.classList.contains("drag-handle")) {
            l(!0);
            const j = (L = p.current) == null ? void 0 : L.getBoundingClientRect();
            j && u({
                x: O.touches[0].clientX - j.left,
                y: O.touches[0].clientY - j.top
            })
        }
    }
      , k = O => {
        var L, j;
        if (o) {
            const J = Math.max(0, Math.min(window.innerWidth - (((L = p.current) == null ? void 0 : L.offsetWidth) || 300), O.clientX - a.x))
              , z = Math.max(0, Math.min(window.innerHeight - (((j = p.current) == null ? void 0 : j.offsetHeight) || 200), O.clientY - a.y));
            s({
                x: J,
                y: z
            })
        }
    }
      , P = O => {
        var L, j;
        if (o) {
            O.preventDefault();
            const J = Math.max(0, Math.min(window.innerWidth - (((L = p.current) == null ? void 0 : L.offsetWidth) || 300), O.touches[0].clientX - a.x))
              , z = Math.max(0, Math.min(window.innerHeight - (((j = p.current) == null ? void 0 : j.offsetHeight) || 200), O.touches[0].clientY - a.y));
            s({
                x: J,
                y: z
            })
        }
    }
      , N = () => {
        l(!1)
    }
      , C = () => {
        l(!1)
    }
    ;
    S.useEffect( () => (o ? (window.addEventListener("mousemove", k),
    window.addEventListener("mouseup", N),
    window.addEventListener("touchmove", P, {
        passive: !1
    }),
    window.addEventListener("touchend", C)) : (window.removeEventListener("mousemove", k),
    window.removeEventListener("mouseup", N),
    window.removeEventListener("touchmove", P),
    window.removeEventListener("touchend", C)),
    () => {
        window.removeEventListener("mousemove", k),
        window.removeEventListener("mouseup", N),
        window.removeEventListener("touchmove", P),
        window.removeEventListener("touchend", C)
    }
    ), [o]);
    const I = () => typeof window > "u" ? !0 : window.innerWidth < 600 || window.innerHeight < 400
      , V = O => {
        const L = O.trim()
          , j = L.split(" ")
          , J = j[0].toLowerCase();
        let z = ""
          , E = !1;
        switch (J) {
        case "help":
            z = `Available commands:
- ping: Test connectivity
- clear: Clear console
- color [hex/name]: Change terminal color
- close: Close the terminal
- minimize: Minimize the terminal
- echo [text]: Echo text back
- snake: Play snake game`;
            break;
        case "ping":
            z = "pong!";
            break;
        case "clear":
            f([]);
            return;
        case "close":
            t();
            return;
        case "minimize":
            n();
            return;
        case "snake":
            I() ? (z = "You cannot play Snake on this device.",
            E = !0) : (r(),
            z = "Launching snake game...");
            break;
        case "color":
            if (j.length < 2)
                z = "Error: Missing color parameter. Usage: color [hex/name]",
                E = !0;
            else
                try {
                    const A = j[1]
                      , R = /^#[0-9A-Fa-f]{3,6}$/i.test(A)
                      , $ = /^[a-zA-Z]+$/.test(A) && !R;
                    if (R)
                        x(`${A}33`);
                    else if ($)
                        x(A);
                    else {
                        z = "Error: Invalid color format. Use color name or hex (#RRGGBB)",
                        E = !0;
                        break
                    }
                    z = `Terminal color changed to ${A}`
                } catch {
                    z = "Error: Invalid color format",
                    E = !0
                }
            break;
        case "echo":
            z = L.substring(5) || "(empty)";
            break;
        case "":
            return;
        default:
            z = `Command not found: ${J}. Type "help" for available commands`,
            E = !0
        }
        f(A => [...A, {
            input: O,
            output: z,
            isError: E
        }])
    }
      , H = O => {
        O.preventDefault(),
        d.trim() && (V(d),
        y(""))
    }
      , fe = () => window.innerWidth <= 768 ? "90%" : "350px";
    return e ? g.jsxs("div", {
        ref: p,
        className: "fixed overflow-hidden text-white rounded-md border border-zinc-700/50 shadow-lg z-50",
        style: {
            width: fe(),
            maxWidth: "350px",
            top: `${i.y}px`,
            left: `${i.x}px`,
            backgroundColor: v,
            backdropFilter: "blur(8px)"
        },
        children: [g.jsxs("div", {
            className: "drag-handle flex items-center justify-between px-2 py-1 bg-zinc-900/70 cursor-move border-b border-zinc-700/50",
            onMouseDown: m,
            onTouchStart: w,
            children: [g.jsxs("div", {
                className: "flex items-center",
                children: [g.jsx($m, {
                    size: 14,
                    className: "mr-1.5 text-gray-400"
                }), g.jsx("span", {
                    className: "text-xs text-gray-300 font-mono",
                    children: "terminal"
                })]
            }), g.jsxs("div", {
                className: "flex items-center gap-1.5",
                children: [g.jsx("button", {
                    onClick: n,
                    className: "text-gray-400 hover:text-gray-200 transition-colors p-0.5",
                    children: g.jsx(Yw, {
                        size: 14
                    })
                }), g.jsx("button", {
                    onClick: t,
                    className: "text-gray-400 hover:text-gray-200 transition-colors p-0.5",
                    children: g.jsx(Cu, {
                        size: 14
                    })
                })]
            })]
        }), g.jsxs("div", {
            className: "p-2 h-[200px] flex flex-col",
            children: [g.jsx("div", {
                ref: h,
                className: "flex-1 overflow-y-auto mb-1 font-mono text-xs",
                children: c.map( (O, L) => g.jsxs("div", {
                    className: "mb-1",
                    children: [O.input !== "" && g.jsxs("div", {
                        className: "flex",
                        children: [g.jsx("span", {
                            className: "text-green-500 mr-1",
                            children: "$"
                        }), g.jsx("span", {
                            children: O.input
                        })]
                    }), O.output && g.jsx("div", {
                        className: `whitespace-pre-wrap ${O.isError ? "text-red-400" : "text-gray-300"}`,
                        children: O.output
                    })]
                }, L))
            }), g.jsxs("form", {
                onSubmit: H,
                className: "flex items-center",
                children: [g.jsx("span", {
                    className: "text-green-500 mr-1 text-xs font-mono",
                    children: "$"
                }), g.jsx("input", {
                    ref: T,
                    type: "text",
                    value: d,
                    onChange: O => y(O.target.value),
                    className: "flex-1 bg-transparent border-none outline-none text-white font-mono text-xs",
                    placeholder: "Type a command...",
                    autoFocus: !0
                })]
            })]
        })]
    }) : null
}
  , En = 15
  , ut = 12
  , Jf = [{
    x: 7,
    y: 7
}, {
    x: 6,
    y: 7
}, {
    x: 5,
    y: 7
}]
  , Lt = {
    UP: {
        x: 0,
        y: -1
    },
    RIGHT: {
        x: 1,
        y: 0
    },
    DOWN: {
        x: 0,
        y: 1
    },
    LEFT: {
        x: -1,
        y: 0
    }
}
  , oS = ({isOpen: e, onClose: t}) => {
    const [n,r] = S.useState({
        x: 400,
        y: 100
    })
      , [i,s] = S.useState(!1)
      , [o,l] = S.useState({
        x: 0,
        y: 0
    })
      , [a,u] = S.useState(Jf)
      , [c,f] = S.useState({
        x: 10,
        y: 10
    })
      , [d,y] = S.useState(Lt.RIGHT)
      , [v,x] = S.useState(Lt.RIGHT)
      , [T,p] = S.useState(0)
      , [h,m] = S.useState(!1)
      , [w,k] = S.useState(!0)
      , [P,N] = S.useState(0)
      , [C,I] = S.useState(150)
      , V = S.useRef(null)
      , H = S.useRef()
      , fe = S.useRef(0)
      , O = () => {
        const _ = {
            x: Math.floor(Math.random() * En),
            y: Math.floor(Math.random() * En)
        };
        return a.some(se => se.x === _.x && se.y === _.y) ? O() : _
    }
      , L = () => {
        u(Jf),
        f(O()),
        y(Lt.RIGHT),
        x(Lt.RIGHT),
        p(0),
        m(!1),
        k(!0),
        I(150)
    }
      , j = _ => {
        if (_.x < 0 || _.y < 0 || _.x >= En || _.y >= En)
            return !0;
        for (let X = 1; X < a.length; X++)
            if (_.x === a[X].x && _.y === a[X].y)
                return !0;
        return !1
    }
      , J = () => {
        if (h || w)
            return;
        x(d);
        const _ = [...a]
          , X = {
            ..._[0]
        };
        if (X.x += d.x,
        X.y += d.y,
        j(X)) {
            m(!0),
            T > P && N(T);
            return
        }
        _.unshift(X),
        X.x === c.x && X.y === c.y ? (f(O()),
        p(se => se + 1),
        T > 0 && T % 5 === 0 && I(se => Math.max(50, se - 10))) : _.pop(),
        u(_)
    }
      , z = _ => {
        var X;
        if (_.target instanceof HTMLElement && _.target.classList.contains("drag-handle")) {
            s(!0);
            const se = (X = V.current) == null ? void 0 : X.getBoundingClientRect();
            se && l({
                x: _.clientX - se.left,
                y: _.clientY - se.top
            })
        }
    }
      , E = _ => {
        i && r({
            x: _.clientX - o.x,
            y: _.clientY - o.y
        })
    }
      , A = () => {
        s(!1)
    }
      , R = _ => {
        if (!h)
            switch (_.key) {
            case "ArrowUp":
                v.y !== 1 && y(Lt.UP);
                break;
            case "ArrowRight":
                v.x !== -1 && y(Lt.RIGHT);
                break;
            case "ArrowDown":
                v.y !== -1 && y(Lt.DOWN);
                break;
            case "ArrowLeft":
                v.x !== 1 && y(Lt.LEFT);
                break;
            case " ":
                h ? L() : k(!w);
                break
            }
    }
      , $ = _ => {
        fe.current || (fe.current = _),
        _ - fe.current > C && (J(),
        fe.current = _),
        H.current = requestAnimationFrame($)
    }
    ;
    return S.useEffect( () => (e && !w && !h && (H.current = requestAnimationFrame($)),
    () => {
        H.current && cancelAnimationFrame(H.current)
    }
    ), [e, w, h, a, d, C]),
    S.useEffect( () => (i ? (window.addEventListener("mousemove", E),
    window.addEventListener("mouseup", A)) : (window.removeEventListener("mousemove", E),
    window.removeEventListener("mouseup", A)),
    () => {
        window.removeEventListener("mousemove", E),
        window.removeEventListener("mouseup", A)
    }
    ), [i]),
    S.useEffect( () => (e && window.addEventListener("keydown", R),
    () => {
        window.removeEventListener("keydown", R)
    }
    ), [e, v, h, w]),
    S.useEffect( () => {
        e && L()
    }
    , [e]),
    e ? g.jsxs("div", {
        ref: V,
        className: "fixed overflow-hidden text-white rounded-md border border-zinc-700/50 shadow-lg z-50",
        style: {
            width: "240px",
            top: `${n.y}px`,
            left: `${n.x}px`,
            backgroundColor: "rgba(10, 10, 15, 0.85)",
            backdropFilter: "blur(8px)"
        },
        children: [g.jsxs("div", {
            className: "drag-handle flex items-center justify-between px-2 py-1 bg-zinc-900/70 cursor-move border-b border-zinc-700/50",
            onMouseDown: z,
            children: [g.jsxs("div", {
                className: "flex items-center",
                children: [g.jsx(tS, {
                    size: 14,
                    className: "mr-1.5 text-yellow-400"
                }), g.jsx("span", {
                    className: "text-xs text-gray-300 font-mono",
                    children: "snake"
                })]
            }), g.jsx("div", {
                className: "flex items-center gap-1.5",
                children: g.jsx("button", {
                    onClick: t,
                    className: "text-gray-400 hover:text-gray-200 transition-colors p-0.5",
                    children: g.jsx(Cu, {
                        size: 14
                    })
                })
            })]
        }), g.jsxs("div", {
            className: "p-3 flex flex-col items-center",
            children: [g.jsxs("div", {
                className: "flex justify-between items-center mb-2 w-full",
                children: [g.jsxs("div", {
                    className: "text-xs font-mono",
                    children: ["Score: ", g.jsx("span", {
                        className: "text-green-400",
                        children: T
                    })]
                }), g.jsxs("div", {
                    className: "text-xs font-mono",
                    children: ["High: ", g.jsx("span", {
                        className: "text-yellow-400",
                        children: P
                    })]
                })]
            }), g.jsxs("div", {
                className: "relative border border-zinc-700/70 rounded-sm bg-zinc-900/50",
                style: {
                    width: `${En * ut}px`,
                    height: `${En * ut}px`
                },
                children: [a.map( (_, X) => g.jsx("div", {
                    className: `absolute rounded-sm ${X === 0 ? "bg-green-500" : "bg-green-400"}`,
                    style: {
                        width: `${ut - 1}px`,
                        height: `${ut - 1}px`,
                        left: `${_.x * ut}px`,
                        top: `${_.y * ut}px`,
                        transition: X === 0 ? "none" : "all 0.1s linear"
                    }
                }, X)), g.jsx("div", {
                    className: "absolute bg-red-500 rounded-sm",
                    style: {
                        width: `${ut - 1}px`,
                        height: `${ut - 1}px`,
                        left: `${c.x * ut}px`,
                        top: `${c.y * ut}px`
                    }
                }), (h || w) && g.jsx("div", {
                    className: "absolute inset-0 bg-black/70 flex flex-col items-center justify-center",
                    children: h ? g.jsxs(g.Fragment, {
                        children: [g.jsx("p", {
                            className: "text-red-500 font-bold text-sm mb-2",
                            children: "GAME OVER"
                        }), g.jsxs("p", {
                            className: "text-xs text-gray-300 mb-2",
                            children: ["Score: ", T]
                        }), g.jsx("button", {
                            onClick: L,
                            className: "flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-sm text-xs hover:bg-gray-700 transition-colors",
                            children: "Restart"
                        })]
                    }) : g.jsxs(g.Fragment, {
                        children: [g.jsx("p", {
                            className: "text-gray-300 font-bold text-sm mb-2",
                            children: "SNAKE"
                        }), g.jsx("p", {
                            className: "text-xs text-gray-400 mb-1",
                            children: "Press arrow keys to move"
                        }), g.jsx("p", {
                            className: "text-xs text-gray-400 mb-2",
                            children: "Space to pause/resume"
                        }), g.jsx("button", {
                            onClick: () => k(!1),
                            className: "flex items-center gap-1 bg-gray-800 px-2 py-1 rounded-sm text-xs hover:bg-gray-700 transition-colors",
                            children: "Start Game"
                        })]
                    })
                })]
            }), g.jsx("div", {
                className: "mt-2 text-gray-400 text-[10px] text-center",
                children: "Use arrow keys to move • Space to pause"
            })]
        })]
    }) : null
}
  , lS = S.lazy( () => yy( () => import("./projects.js"), []))
  , Fo = "1016818217290846218"
  , ed = e => {
    const t = Math.floor(e / 60)
      , n = Math.floor(e % 60);
    return `${t}:${n.toString().padStart(2, "0")}`
}
  , Oo = ({text: e, active: t=!1, onClick: n}) => g.jsx(Ce.button, {
    whileHover: {
        opacity: 1
    },
    onClick: n,
    className: `${t ? "text-white" : "text-gray-500"} px-3 py-1 text-xs transition-colors`,
    children: e
})
  , Bo = ({text: e, children: t}) => {
    const [n,r] = S.useState(!1);
    return g.jsxs("div", {
        className: "relative",
        children: [g.jsx("div", {
            onMouseEnter: () => r(!0),
            onMouseLeave: () => r(!1),
            children: t
        }), n && g.jsxs("div", {
            className: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-xs bg-gray-900 text-white rounded whitespace-nowrap",
            children: [e, g.jsx("div", {
                className: "absolute top-full left-1/2 w-2 h-2 bg-gray-900 transform -translate-x-1/2 -translate-y-1/2 rotate-45"
            })]
        })]
    })
}
;
function aS() {
    const [e,t] = S.useState("home")
      , [n,r] = S.useState(null)
      , [i,s] = S.useState(!0)
      , o = S.useRef(null)
      , [l,a] = S.useState(!1)
      , [u,c] = S.useState(!1)
      , f = S.useRef(null)
      , [d,y] = S.useState(Date.now())
      , [v,x] = S.useState({})
      , [T,p] = S.useState(!1)
      , [h,m] = S.useState(!1)
      , [w,k] = S.useState(!1);
    S.useEffect( () => {
        a(!0);
        const L = setInterval( () => y(Date.now()), 1e3);
        return () => clearInterval(L)
    }
    , []),
    S.useEffect( () => {
        const L = () => {
            const j = new WebSocket("wss://api.lanyard.rest/socket");
            return f.current = j,
            j.onopen = () => {
                j.send(JSON.stringify({
                    op: 2,
                    d: {
                        subscribe_to_id: Fo
                    }
                }))
            }
            ,
            j.onmessage = J => {
                const z = JSON.parse(J.data);
                if (z.op === 1) {
                    const E = z.d.heartbeat_interval;
                    setInterval( () => j.readyState === WebSocket.OPEN && j.send(JSON.stringify({
                        op: 3
                    })), E)
                } else
                    z.op === 0 && (z.t === "INIT_STATE" || z.t === "PRESENCE_UPDATE") && (r(z.d),
                    s(!1))
            }
            ,
            j.onclose = () => setTimeout(L, 5e3),
            () => j.readyState === WebSocket.OPEN && j.close()
        }
        ;
        return L(),
        () => {
            var j;
            return (j = f.current) == null ? void 0 : j.close()
        }
    }
    , []);
    const P = () => {
        c(!0),
        t("projects")
    }
      , N = () => {
        h ? m(!1) : p(!T)
    }
      , C = S.useMemo( () => {
        var L;
        return n && (n.spotify || ((L = n.activities) == null ? void 0 : L.filter(j => j.type === 0).length) > 0)
    }
    , [n])
      , I = S.useMemo( () => {
        var L;
        return (L = n == null ? void 0 : n.activities) == null ? void 0 : L.find(j => j.type === 4)
    }
    , [n])
      , V = S.useMemo( () => n && !C && I, [n, C, I])
      , H = S.useMemo( () => {
        var R;
        if (!((R = n == null ? void 0 : n.spotify) != null && R.timestamps))
            return {
                progress: 0,
                currentTime: 0,
                duration: 0
            };
        const L = d
          , j = n.spotify.timestamps.start
          , J = n.spotify.timestamps.end;
        if (L >= J) {
            const $ = (J - j) / 1e3;
            return {
                progress: 100,
                currentTime: $,
                duration: $
            }
        }
        const z = (L - j) / 1e3
          , E = (J - j) / 1e3
          , A = z / E * 100;
        return {
            progress: Math.min(A, 100),
            currentTime: Math.min(z, E),
            duration: E
        }
    }
    , [n, d])
      , fe = L => {
        var j;
        return v[L.application_id] ? null : (j = L.assets) != null && j.large_image ? `https://cdn.discordapp.com/app-assets/${L.application_id}/${L.assets.large_image.replace("mp:", "")}.png` : `https://dcdn.dstn.to/app-icons/${L.application_id}`
    }
      , O = () => {
        var L;
        switch (e) {
        case "projects":
            return g.jsx(S.Suspense, {
                fallback: g.jsxs("div", {
                    className: "space-y-3",
                    children: [g.jsx("h2", {
                        className: "text-lg font-semibold mb-3",
                        children: "projects"
                    }), g.jsxs("div", {
                        className: "flex items-start gap-3 bg-zinc-900/20 rounded p-3 hover:bg-zinc-900/40 transition-colors",
                        children: [g.jsx("div", {
                            className: "w-8 h-8 rounded bg-zinc-800 animate-pulse"
                        }), g.jsxs("div", {
                            className: "flex-1 space-y-2",
                            children: [g.jsxs("div", {
                                className: "flex justify-between",
                                children: [g.jsxs("div", {
                                    className: "flex items-center gap-2",
                                    children: [g.jsx("div", {
                                        className: "w-16 h-4 bg-zinc-800 rounded animate-pulse"
                                    }), g.jsx("div", {
                                        className: "w-12 h-4 bg-zinc-800 rounded animate-pulse"
                                    })]
                                }), g.jsx("div", {
                                    className: "w-4 h-4 bg-zinc-800 rounded animate-pulse"
                                })]
                            }), g.jsx("div", {
                                className: "w-full h-3 bg-zinc-800 rounded animate-pulse"
                            }), g.jsxs("div", {
                                className: "flex gap-1",
                                children: [g.jsx("div", {
                                    className: "w-10 h-4 bg-zinc-800 rounded animate-pulse"
                                }), g.jsx("div", {
                                    className: "w-10 h-4 bg-zinc-800 rounded animate-pulse"
                                })]
                            })]
                        })]
                    })]
                }),
                children: u && g.jsx(lS, {})
            });
        case "contact":
            return g.jsxs(Ce.div, {
                initial: {
                    opacity: 0,
                    y: 20
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                className: "space-y-2",
                children: [g.jsxs("div", {
                    className: "flex items-center gap-2 text-gray-400",
                    children: [g.jsx("svg", {
                        className: "w-3.5 h-3.5 text-gray-400",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: g.jsx("path", {
                            d: "M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"
                        })
                    }), g.jsx("a", {
                        href: "https://discord.com/users/1016818217290846218",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:text-white transition-colors text-xs",
                        children: "@spiritive"
                    })]
                }), g.jsxs("div", {
                    className: "flex items-center gap-2 text-gray-400",
                    children: [g.jsx("svg", {
                        className: "w-3.5 h-3.5 text-gray-400",
                        viewBox: "0 0 24 24",
                        fill: "currentColor",
                        children: g.jsx("path", {
                            d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.023c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"
                        })
                    }), g.jsx("a", {
                        href: "https://t.me/TemporalLobeNecrosis",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "hover:text-white transition-colors text-xs",
                        children: "@TemporalLobeNecrosis"
                    })]
                }), g.jsxs("div", {
                    className: "flex items-center gap-2 text-gray-400",
                    children: [g.jsx(Qw, {
                        size: 14,
                        className: "text-gray-400"
                    }), g.jsx("a", {
                        href: "mailto:a@owenn.wiki",
                        className: "hover:text-white transition-colors text-xs",
                        children: "a@owenn.wiki"
                    })]
                })]
            });
        default:
            return g.jsxs(g.Fragment, {
                children: [g.jsxs("div", {
                    className: "mb-6",
                    children: [g.jsx("h1", {
                        className: "text-5xl mb-0 font-proggy leading-none",
                        children: "owenn"
                    }), g.jsx("p", {
                        className: "text-gray-400 text-xs leading-none",
                        children: "full stack developer specializing in modern web technologies"
                    })]
                }), !i && n && g.jsxs(Ce.div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    className: `bg-zinc-900/20 rounded border border-zinc-800/30 mb-6 ${C ? "p-2" : "p-1.5"}`,
                    children: [g.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [g.jsxs("div", {
                            className: "relative",
                            children: [g.jsx(Bo, {
                                text: `${n.discord_user.username} (${n.discord_status})`,
                                children: g.jsx("img", {
                                    src: `https://cdn.discordapp.com/avatars/${Fo}/${n.discord_user.avatar}.png`,
                                    alt: "Discord Avatar",
                                    className: "w-7 h-7 rounded-full"
                                })
                            }), g.jsx("div", {
                                className: `absolute bottom-0 right-0 w-2 h-2 rounded-full border border-zinc-900 ${n.discord_status === "online" ? "bg-green-500" : n.discord_status === "idle" ? "bg-yellow-500" : n.discord_status === "dnd" ? "bg-red-500" : "bg-gray-500"}`
                            })]
                        }), g.jsxs("div", {
                            className: "flex flex-col",
                            children: [g.jsx("a", {
                                href: `https://discord.com/users/${Fo}`,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group text-xs text-gray-200 w-fit",
                                children: g.jsxs("span", {
                                    className: "relative",
                                    children: [n.discord_user.username, g.jsx("span", {
                                        className: "absolute bottom-0 left-0 w-full h-px bg-gray-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                                    })]
                                })
                            }), I && g.jsx("span", {
                                className: "text-xs text-gray-400 truncate max-w-[180px]",
                                children: I.state
                            }), !I && n.discord_status === "offline" && g.jsx("span", {
                                className: "text-xs text-gray-500",
                                children: "Offline"
                            })]
                        })]
                    }), C && g.jsxs("div", {
                        className: "mt-2 space-y-2",
                        children: [n.spotify && g.jsxs("div", {
                            className: "flex items-center gap-2",
                            children: [g.jsx(Bo, {
                                text: "Listening to Spotify",
                                children: g.jsx("div", {
                                    className: "relative",
                                    children: g.jsx("img", {
                                        src: n.spotify.album_art_url,
                                        alt: "Album Art",
                                        className: "w-7 h-7 rounded-sm"
                                    })
                                })
                            }), g.jsxs("div", {
                                className: "text-xs text-gray-500 flex-1 min-w-0",
                                children: [g.jsxs("div", {
                                    className: "truncate",
                                    children: [n.spotify.track_id ? g.jsx("a", {
                                        href: `https://open.spotify.com/track/${n.spotify.track_id}`,
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        className: "text-gray-400 hover:text-green-400 transition-colors",
                                        children: n.spotify.song
                                    }) : g.jsx("span", {
                                        className: "text-gray-400",
                                        children: n.spotify.song
                                    }), " • ", n.spotify.artist]
                                }), n.spotify.timestamps && g.jsxs("div", {
                                    className: "flex items-center gap-1 mt-1",
                                    children: [g.jsx("span", {
                                        className: "text-[0.7rem] text-gray-500",
                                        children: ed(H.currentTime)
                                    }), g.jsx("div", {
                                        className: "flex-1 bg-gray-800 rounded-full h-1",
                                        children: g.jsx("div", {
                                            className: "bg-green-500 h-1 rounded-full",
                                            style: {
                                                width: `${H.progress}%`
                                            }
                                        })
                                    }), g.jsx("span", {
                                        className: "text-[0.7rem] text-gray-500",
                                        children: ed(H.duration)
                                    })]
                                })]
                            })]
                        }), (L = n.activities) == null ? void 0 : L.filter(j => j.type === 0).map(j => {
                            var J, z, E;
                            return g.jsxs("div", {
                                className: "flex items-center gap-2",
                                children: [g.jsx(Bo, {
                                    text: ((J = j.assets) == null ? void 0 : J.large_text) || j.name,
                                    children: g.jsxs("div", {
                                        className: "relative",
                                        children: [fe(j) ? g.jsx("img", {
                                            src: fe(j),
                                            alt: j.name,
                                            className: "w-7 h-7 rounded-sm",
                                            onError: A => {
                                                const R = A.target;
                                                R.src.includes("dcdn.dstn.to") ? x($ => ({
                                                    ...$,
                                                    [j.application_id]: !0
                                                })) : R.src = `https://dcdn.dstn.to/app-icons/${j.application_id}`
                                            }
                                        }) : g.jsx("div", {
                                            className: "w-7 h-7 rounded-sm bg-zinc-800 flex items-center justify-center",
                                            children: g.jsx(Xw, {
                                                className: "w-4 h-4 text-gray-500"
                                            })
                                        }), ((z = j.assets) == null ? void 0 : z.small_image) && g.jsx("img", {
                                            src: `https://cdn.discordapp.com/app-assets/${j.application_id}/${j.assets.small_image.replace("mp:", "")}.png`,
                                            alt: "Small icon",
                                            className: "absolute -bottom-1 -right-1 w-4 h-4 rounded-full border border-zinc-900"
                                        })]
                                    })
                                }), g.jsxs("div", {
                                    className: "text-xs text-gray-500 flex-1 min-w-0",
                                    children: [g.jsx("div", {
                                        className: "truncate",
                                        children: j.details ? g.jsxs(g.Fragment, {
                                            children: [g.jsx("span", {
                                                className: "text-gray-400",
                                                children: j.details
                                            }), j.state && g.jsxs("span", {
                                                children: [" • ", j.state]
                                            })]
                                        }) : g.jsx("span", {
                                            className: "text-gray-400",
                                            children: j.name
                                        })
                                    }), ((E = j.timestamps) == null ? void 0 : E.start) && g.jsx("div", {
                                        className: "text-gray-500 text-[0.7rem] mt-1",
                                        children: ( () => {
                                            const A = d - j.timestamps.start
                                              , R = Math.floor(A / 36e5)
                                              , $ = Math.floor(A % 36e5 / 6e4)
                                              , _ = Math.floor(A % 6e4 / 1e3);
                                            return R > 0 ? `${R}:${String($).padStart(2, "0")}:${String(_).padStart(2, "0")} elapsed` : `${$}:${String(_).padStart(2, "0")} elapsed`
                                        }
                                        )()
                                    })]
                                })]
                            }, j.id)
                        }
                        )]
                    })]
                })]
            })
        }
    }
    ;
    return g.jsxs("div", {
        className: "min-h-screen bg-black text-white relative overflow-hidden flex items-center justify-center p-6",
        children: [l && g.jsx(rS, {
            audioRef: o
        }), g.jsxs(Ce.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            className: "w-full max-w-md bg-black/30 backdrop-blur-sm rounded-xl border border-zinc-800/30 overflow-visible",
            children: [g.jsxs("div", {
                className: "flex justify-between p-2 border-b border-zinc-800/30",
                children: [g.jsxs("div", {
                    className: "flex gap-1",
                    children: [g.jsx(Oo, {
                        text: "home",
                        active: e === "home",
                        onClick: () => t("home")
                    }), g.jsx(Oo, {
                        text: "projects",
                        active: e === "projects",
                        onClick: P
                    }), g.jsx(Oo, {
                        text: "contact",
                        active: e === "contact",
                        onClick: () => t("contact")
                    })]
                }), g.jsx(Ce.button, {
                    onClick: N,
                    className: `px-2 text-xs text-gray-400 hover:text-white transition-colors ${h ? "text-green-400" : T ? "text-gray-400" : ""}`,
                    children: "[?]"
                })]
            }), g.jsxs("div", {
                className: "p-4",
                children: [O(), g.jsxs("div", {
                    className: "mt-6",
                    children: [g.jsx("p", {
                        className: "text-xs text-gray-400 mb-1",
                        children: "currently in rotation. A personal collection of music i've been listening to lately"
                    }), g.jsx(iS, {
                        audioRef: o,
                        audioContextAllowed: l
                    })]
                })]
            })]
        }), (T || h) && g.jsx(sS, {
            isOpen: T && !h,
            onClose: () => p(!1),
            onMinimize: () => m(!0),
            onOpenSnake: () => k(!0)
        }), h && g.jsxs(Ce.div, {
            initial: {
                opacity: 0,
                y: 20
            },
            animate: {
                opacity: 1,
                y: 0
            },
            onClick: () => m(!1),
            className: "fixed bottom-4 right-4 px-3 py-1.5 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-md cursor-pointer z-50 flex items-center gap-2 shadow-lg",
            children: [g.jsx($m, {
                size: 14,
                className: "text-green-400"
            }), g.jsx("span", {
                className: "text-xs text-gray-300 font-mono",
                children: "terminal"
            })]
        }), g.jsx(oS, {
            isOpen: w,
            onClose: () => k(!1)
        })]
    })
}
hp(document.getElementById("root")).render(g.jsx(S.StrictMode, {
    children: g.jsx(aS, {})
}));
export {Ie as c, g as j, Ce as m, S as r};
