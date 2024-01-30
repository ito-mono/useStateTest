var Lr = { exports: {} }, He = {}, Nr = { exports: {} }, g = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ct;
function Wt() {
  if (ct)
    return g;
  ct = 1;
  var V = Symbol.for("react.element"), v = Symbol.for("react.portal"), de = Symbol.for("react.fragment"), q = Symbol.for("react.strict_mode"), pe = Symbol.for("react.profiler"), re = Symbol.for("react.provider"), te = Symbol.for("react.context"), Q = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), Z = Symbol.for("react.memo"), L = Symbol.for("react.lazy"), U = Symbol.iterator;
  function ee(n) {
    return n === null || typeof n != "object" ? null : (n = U && n[U] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var K = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, se = Object.assign, Ie = {};
  function ne(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || K;
  }
  ne.prototype.isReactComponent = {}, ne.prototype.setState = function(n, s) {
    if (typeof n != "object" && typeof n != "function" && n != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, n, s, "setState");
  }, ne.prototype.forceUpdate = function(n) {
    this.updater.enqueueForceUpdate(this, n, "forceUpdate");
  };
  function ae() {
  }
  ae.prototype = ne.prototype;
  function I(n, s, h) {
    this.props = n, this.context = s, this.refs = Ie, this.updater = h || K;
  }
  var he = I.prototype = new ae();
  he.constructor = I, se(he, ne.prototype), he.isPureReactComponent = !0;
  var oe = Array.isArray, N = Object.prototype.hasOwnProperty, H = { current: null }, ce = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ve(n, s, h) {
    var C, _ = {}, P = null, k = null;
    if (s != null)
      for (C in s.ref !== void 0 && (k = s.ref), s.key !== void 0 && (P = "" + s.key), s)
        N.call(s, C) && !ce.hasOwnProperty(C) && (_[C] = s[C]);
    var T = arguments.length - 2;
    if (T === 1)
      _.children = h;
    else if (1 < T) {
      for (var w = Array(T), W = 0; W < T; W++)
        w[W] = arguments[W + 2];
      _.children = w;
    }
    if (n && n.defaultProps)
      for (C in T = n.defaultProps, T)
        _[C] === void 0 && (_[C] = T[C]);
    return { $$typeof: V, type: n, key: P, ref: k, props: _, _owner: H.current };
  }
  function Re(n, s) {
    return { $$typeof: V, type: n.type, key: s, ref: n.ref, props: n.props, _owner: n._owner };
  }
  function Ce(n) {
    return typeof n == "object" && n !== null && n.$$typeof === V;
  }
  function Ue(n) {
    var s = { "=": "=0", ":": "=2" };
    return "$" + n.replace(/[=:]/g, function(h) {
      return s[h];
    });
  }
  var we = /\/+/g;
  function G(n, s) {
    return typeof n == "object" && n !== null && n.key != null ? Ue("" + n.key) : s.toString(36);
  }
  function J(n, s, h, C, _) {
    var P = typeof n;
    (P === "undefined" || P === "boolean") && (n = null);
    var k = !1;
    if (n === null)
      k = !0;
    else
      switch (P) {
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (n.$$typeof) {
            case V:
            case v:
              k = !0;
          }
      }
    if (k)
      return k = n, _ = _(k), n = C === "" ? "." + G(k, 0) : C, oe(_) ? (h = "", n != null && (h = n.replace(we, "$&/") + "/"), J(_, s, h, "", function(W) {
        return W;
      })) : _ != null && (Ce(_) && (_ = Re(_, h + (!_.key || k && k.key === _.key ? "" : ("" + _.key).replace(we, "$&/") + "/") + n)), s.push(_)), 1;
    if (k = 0, C = C === "" ? "." : C + ":", oe(n))
      for (var T = 0; T < n.length; T++) {
        P = n[T];
        var w = C + G(P, T);
        k += J(P, s, h, w, _);
      }
    else if (w = ee(n), typeof w == "function")
      for (n = w.call(n), T = 0; !(P = n.next()).done; )
        P = P.value, w = C + G(P, T++), k += J(P, s, h, w, _);
    else if (P === "object")
      throw s = String(n), Error("Objects are not valid as a React child (found: " + (s === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : s) + "). If you meant to render a collection of children, use an array instead.");
    return k;
  }
  function Y(n, s, h) {
    if (n == null)
      return n;
    var C = [], _ = 0;
    return J(n, C, "", "", function(P) {
      return s.call(h, P, _++);
    }), C;
  }
  function ue(n) {
    if (n._status === -1) {
      var s = n._result;
      s = s(), s.then(function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 1, n._result = h);
      }, function(h) {
        (n._status === 0 || n._status === -1) && (n._status = 2, n._result = h);
      }), n._status === -1 && (n._status = 0, n._result = s);
    }
    if (n._status === 1)
      return n._result.default;
    throw n._result;
  }
  var d = { current: null }, fe = { transition: null }, Se = { ReactCurrentDispatcher: d, ReactCurrentBatchConfig: fe, ReactCurrentOwner: H };
  return g.Children = { map: Y, forEach: function(n, s, h) {
    Y(n, function() {
      s.apply(this, arguments);
    }, h);
  }, count: function(n) {
    var s = 0;
    return Y(n, function() {
      s++;
    }), s;
  }, toArray: function(n) {
    return Y(n, function(s) {
      return s;
    }) || [];
  }, only: function(n) {
    if (!Ce(n))
      throw Error("React.Children.only expected to receive a single React element child.");
    return n;
  } }, g.Component = ne, g.Fragment = de, g.Profiler = pe, g.PureComponent = I, g.StrictMode = q, g.Suspense = $, g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Se, g.cloneElement = function(n, s, h) {
    if (n == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + n + ".");
    var C = se({}, n.props), _ = n.key, P = n.ref, k = n._owner;
    if (s != null) {
      if (s.ref !== void 0 && (P = s.ref, k = H.current), s.key !== void 0 && (_ = "" + s.key), n.type && n.type.defaultProps)
        var T = n.type.defaultProps;
      for (w in s)
        N.call(s, w) && !ce.hasOwnProperty(w) && (C[w] = s[w] === void 0 && T !== void 0 ? T[w] : s[w]);
    }
    var w = arguments.length - 2;
    if (w === 1)
      C.children = h;
    else if (1 < w) {
      T = Array(w);
      for (var W = 0; W < w; W++)
        T[W] = arguments[W + 2];
      C.children = T;
    }
    return { $$typeof: V, type: n.type, key: _, ref: P, props: C, _owner: k };
  }, g.createContext = function(n) {
    return n = { $$typeof: te, _currentValue: n, _currentValue2: n, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, n.Provider = { $$typeof: re, _context: n }, n.Consumer = n;
  }, g.createElement = ve, g.createFactory = function(n) {
    var s = ve.bind(null, n);
    return s.type = n, s;
  }, g.createRef = function() {
    return { current: null };
  }, g.forwardRef = function(n) {
    return { $$typeof: Q, render: n };
  }, g.isValidElement = Ce, g.lazy = function(n) {
    return { $$typeof: L, _payload: { _status: -1, _result: n }, _init: ue };
  }, g.memo = function(n, s) {
    return { $$typeof: Z, type: n, compare: s === void 0 ? null : s };
  }, g.startTransition = function(n) {
    var s = fe.transition;
    fe.transition = {};
    try {
      n();
    } finally {
      fe.transition = s;
    }
  }, g.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, g.useCallback = function(n, s) {
    return d.current.useCallback(n, s);
  }, g.useContext = function(n) {
    return d.current.useContext(n);
  }, g.useDebugValue = function() {
  }, g.useDeferredValue = function(n) {
    return d.current.useDeferredValue(n);
  }, g.useEffect = function(n, s) {
    return d.current.useEffect(n, s);
  }, g.useId = function() {
    return d.current.useId();
  }, g.useImperativeHandle = function(n, s, h) {
    return d.current.useImperativeHandle(n, s, h);
  }, g.useInsertionEffect = function(n, s) {
    return d.current.useInsertionEffect(n, s);
  }, g.useLayoutEffect = function(n, s) {
    return d.current.useLayoutEffect(n, s);
  }, g.useMemo = function(n, s) {
    return d.current.useMemo(n, s);
  }, g.useReducer = function(n, s, h) {
    return d.current.useReducer(n, s, h);
  }, g.useRef = function(n) {
    return d.current.useRef(n);
  }, g.useState = function(n) {
    return d.current.useState(n);
  }, g.useSyncExternalStore = function(n, s, h) {
    return d.current.useSyncExternalStore(n, s, h);
  }, g.useTransition = function() {
    return d.current.useTransition();
  }, g.version = "18.2.0", g;
}
var Ke = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
Ke.exports;
var ft;
function Vt() {
  return ft || (ft = 1, function(V, v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var de = "18.2.0", q = Symbol.for("react.element"), pe = Symbol.for("react.portal"), re = Symbol.for("react.fragment"), te = Symbol.for("react.strict_mode"), Q = Symbol.for("react.profiler"), $ = Symbol.for("react.provider"), Z = Symbol.for("react.context"), L = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), ee = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), se = Symbol.for("react.lazy"), Ie = Symbol.for("react.offscreen"), ne = Symbol.iterator, ae = "@@iterator";
      function I(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = ne && e[ne] || e[ae];
        return typeof r == "function" ? r : null;
      }
      var he = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, oe = {
        transition: null
      }, N = {
        current: null,
        // Used to reproduce behavior of `batchedUpdates` in legacy mode.
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, H = {
        /**
         * @internal
         * @type {ReactComponent}
         */
        current: null
      }, ce = {}, ve = null;
      function Re(e) {
        ve = e;
      }
      ce.setExtraStackFrame = function(e) {
        ve = e;
      }, ce.getCurrentStack = null, ce.getStackAddendum = function() {
        var e = "";
        ve && (e += ve);
        var r = ce.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Ce = !1, Ue = !1, we = !1, G = !1, J = !1, Y = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: oe,
        ReactCurrentOwner: H
      };
      Y.ReactDebugCurrentFrame = ce, Y.ReactCurrentActQueue = N;
      function ue(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("warn", e, a);
        }
      }
      function d(e) {
        {
          for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++)
            a[o - 1] = arguments[o];
          fe("error", e, a);
        }
      }
      function fe(e, r, a) {
        {
          var o = Y.ReactDebugCurrentFrame, i = o.getStackAddendum();
          i !== "" && (r += "%s", a = a.concat([i]));
          var p = a.map(function(l) {
            return String(l);
          });
          p.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, p);
        }
      }
      var Se = {};
      function n(e, r) {
        {
          var a = e.constructor, o = a && (a.displayName || a.name) || "ReactClass", i = o + "." + r;
          if (Se[i])
            return;
          d("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, o), Se[i] = !0;
        }
      }
      var s = {
        /**
         * Checks whether or not this composite component is mounted.
         * @param {ReactClass} publicInstance The instance we want to test.
         * @return {boolean} True if mounted, false otherwise.
         * @protected
         * @final
         */
        isMounted: function(e) {
          return !1;
        },
        /**
         * Forces an update. This should only be invoked when it is known with
         * certainty that we are **not** in a DOM transaction.
         *
         * You may want to call this when you know that some deeper aspect of the
         * component's state has changed but `setState` was not called.
         *
         * This will not invoke `shouldComponentUpdate`, but it will invoke
         * `componentWillUpdate` and `componentDidUpdate`.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueForceUpdate: function(e, r, a) {
          n(e, "forceUpdate");
        },
        /**
         * Replaces all of the state. Always use this or `setState` to mutate state.
         * You should treat `this.state` as immutable.
         *
         * There is no guarantee that `this.state` will be immediately updated, so
         * accessing `this.state` after calling this method may return the old value.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} completeState Next state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} callerName name of the calling function in the public API.
         * @internal
         */
        enqueueReplaceState: function(e, r, a, o) {
          n(e, "replaceState");
        },
        /**
         * Sets a subset of the state. This only exists because _pendingState is
         * internal. This provides a merging strategy that is not available to deep
         * properties which is confusing. TODO: Expose pendingState or don't use it
         * during the merge.
         *
         * @param {ReactClass} publicInstance The instance that should rerender.
         * @param {object} partialState Next partial state to be merged with state.
         * @param {?function} callback Called after component is updated.
         * @param {?string} Name of the calling function in the public API.
         * @internal
         */
        enqueueSetState: function(e, r, a, o) {
          n(e, "setState");
        }
      }, h = Object.assign, C = {};
      Object.freeze(C);
      function _(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      _.prototype.isReactComponent = {}, _.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, _.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var P = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, k = function(e, r) {
          Object.defineProperty(_.prototype, e, {
            get: function() {
              ue("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var T in P)
          P.hasOwnProperty(T) && k(T, P[T]);
      }
      function w() {
      }
      w.prototype = _.prototype;
      function W(e, r, a) {
        this.props = e, this.context = r, this.refs = C, this.updater = a || s;
      }
      var me = W.prototype = new w();
      me.constructor = W, h(me, _.prototype), me.isPureReactComponent = !0;
      function yr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Je = Array.isArray;
      function Fe(e) {
        return Je(e);
      }
      function hr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return a;
        }
      }
      function $e(e) {
        try {
          return Te(e), !1;
        } catch {
          return !0;
        }
      }
      function Te(e) {
        return "" + e;
      }
      function Oe(e) {
        if ($e(e))
          return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(e)), Te(e);
      }
      function Xe(e, r, a) {
        var o = e.displayName;
        if (o)
          return o;
        var i = r.displayName || r.name || "";
        return i !== "" ? a + "(" + i + ")" : a;
      }
      function Pe(e) {
        return e.displayName || "Context";
      }
      function le(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case re:
            return "Fragment";
          case pe:
            return "Portal";
          case Q:
            return "Profiler";
          case te:
            return "StrictMode";
          case U:
            return "Suspense";
          case ee:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case Z:
              var r = e;
              return Pe(r) + ".Consumer";
            case $:
              var a = e;
              return Pe(a._context) + ".Provider";
            case L:
              return Xe(e, e.render, "ForwardRef");
            case K:
              var o = e.displayName || null;
              return o !== null ? o : le(e.type) || "Memo";
            case se: {
              var i = e, p = i._payload, l = i._init;
              try {
                return le(l(p));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var ke = Object.prototype.hasOwnProperty, Le = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Qe, Ze, Ne;
      Ne = {};
      function Ye(e) {
        if (ke.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function ge(e) {
        if (ke.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function mr(e, r) {
        var a = function() {
          Qe || (Qe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
      function er(e, r) {
        var a = function() {
          Ze || (Ze = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
      function rr(e) {
        if (typeof e.ref == "string" && H.current && e.__self && H.current.stateNode !== e.__self) {
          var r = le(H.current.type);
          Ne[r] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), Ne[r] = !0);
        }
      }
      var je = function(e, r, a, o, i, p, l) {
        var y = {
          // This tag allows us to uniquely identify this as a React Element
          $$typeof: q,
          // Built-in properties that belong on the element
          type: e,
          key: r,
          ref: a,
          props: l,
          // Record the component responsible for creating this element.
          _owner: p
        };
        return y._store = {}, Object.defineProperty(y._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(y, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: o
        }), Object.defineProperty(y, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
      };
      function gr(e, r, a) {
        var o, i = {}, p = null, l = null, y = null, E = null;
        if (r != null) {
          Ye(r) && (l = r.ref, rr(r)), ge(r) && (Oe(r.key), p = "" + r.key), y = r.__self === void 0 ? null : r.__self, E = r.__source === void 0 ? null : r.__source;
          for (o in r)
            ke.call(r, o) && !Le.hasOwnProperty(o) && (i[o] = r[o]);
        }
        var O = arguments.length - 2;
        if (O === 1)
          i.children = a;
        else if (O > 1) {
          for (var j = Array(O), A = 0; A < O; A++)
            j[A] = arguments[A + 2];
          Object.freeze && Object.freeze(j), i.children = j;
        }
        if (e && e.defaultProps) {
          var D = e.defaultProps;
          for (o in D)
            i[o] === void 0 && (i[o] = D[o]);
        }
        if (p || l) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && mr(i, M), l && er(i, M);
        }
        return je(e, p, l, y, E, H.current, i);
      }
      function _r(e, r) {
        var a = je(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return a;
      }
      function br(e, r, a) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var o, i = h({}, e.props), p = e.key, l = e.ref, y = e._self, E = e._source, O = e._owner;
        if (r != null) {
          Ye(r) && (l = r.ref, O = H.current), ge(r) && (Oe(r.key), p = "" + r.key);
          var j;
          e.type && e.type.defaultProps && (j = e.type.defaultProps);
          for (o in r)
            ke.call(r, o) && !Le.hasOwnProperty(o) && (r[o] === void 0 && j !== void 0 ? i[o] = j[o] : i[o] = r[o]);
        }
        var A = arguments.length - 2;
        if (A === 1)
          i.children = a;
        else if (A > 1) {
          for (var D = Array(A), M = 0; M < A; M++)
            D[M] = arguments[M + 2];
          i.children = D;
        }
        return je(e.type, p, l, y, E, O, i);
      }
      function _e(e) {
        return typeof e == "object" && e !== null && e.$$typeof === q;
      }
      var tr = ".", Er = ":";
      function Rr(e) {
        var r = /[=:]/g, a = {
          "=": "=0",
          ":": "=2"
        }, o = e.replace(r, function(i) {
          return a[i];
        });
        return "$" + o;
      }
      var Me = !1, nr = /\/+/g;
      function ye(e) {
        return e.replace(nr, "$&/");
      }
      function Ae(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (Oe(e.key), Rr("" + e.key)) : r.toString(36);
      }
      function be(e, r, a, o, i) {
        var p = typeof e;
        (p === "undefined" || p === "boolean") && (e = null);
        var l = !1;
        if (e === null)
          l = !0;
        else
          switch (p) {
            case "string":
            case "number":
              l = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case q:
                case pe:
                  l = !0;
              }
          }
        if (l) {
          var y = e, E = i(y), O = o === "" ? tr + Ae(y, 0) : o;
          if (Fe(E)) {
            var j = "";
            O != null && (j = ye(O) + "/"), be(E, r, j, "", function(Mt) {
              return Mt;
            });
          } else
            E != null && (_e(E) && (E.key && (!y || y.key !== E.key) && Oe(E.key), E = _r(
              E,
              // Keep both the (mapped) and old keys if they differ, just as
              // traverseAllChildren used to do for objects as children
              a + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
              (E.key && (!y || y.key !== E.key) ? (
                // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                // eslint-disable-next-line react-internal/safe-string-coercion
                ye("" + E.key) + "/"
              ) : "") + O
            )), r.push(E));
          return 1;
        }
        var A, D, M = 0, z = o === "" ? tr : o + Er;
        if (Fe(e))
          for (var vr = 0; vr < e.length; vr++)
            A = e[vr], D = z + Ae(A, vr), M += be(A, r, a, D, i);
        else {
          var $r = I(e);
          if (typeof $r == "function") {
            var ut = e;
            $r === ut.entries && (Me || ue("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Me = !0);
            for (var Lt = $r.call(ut), it, Nt = 0; !(it = Lt.next()).done; )
              A = it.value, D = z + Ae(A, Nt++), M += be(A, r, a, D, i);
          } else if (p === "object") {
            var st = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (st === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : st) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return M;
      }
      function xe(e, r, a) {
        if (e == null)
          return e;
        var o = [], i = 0;
        return be(e, o, "", "", function(p) {
          return r.call(a, p, i++);
        }), o;
      }
      function Cr(e) {
        var r = 0;
        return xe(e, function() {
          r++;
        }), r;
      }
      function ar(e, r, a) {
        xe(e, function() {
          r.apply(this, arguments);
        }, a);
      }
      function wr(e) {
        return xe(e, function(r) {
          return r;
        }) || [];
      }
      function or(e) {
        if (!_e(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function ur(e) {
        var r = {
          $$typeof: Z,
          // As a workaround to support multiple concurrent renderers, we categorize
          // some renderers as primary and others as secondary. We only expect
          // there to be two concurrent renderers at most: React Native (primary) and
          // Fabric (secondary); React DOM (primary) and React ART (secondary).
          // Secondary renderers store their context values on separate fields.
          _currentValue: e,
          _currentValue2: e,
          // Used to track how many concurrent renderers this context currently
          // supports within in a single renderer. Such as parallel server rendering.
          _threadCount: 0,
          // These are circular
          Provider: null,
          Consumer: null,
          // Add these to use same hidden class in VM as ServerContext
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: $,
          _context: r
        };
        var a = !1, o = !1, i = !1;
        {
          var p = {
            $$typeof: Z,
            _context: r
          };
          Object.defineProperties(p, {
            Provider: {
              get: function() {
                return o || (o = !0, d("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(l) {
                r.Provider = l;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(l) {
                r._currentValue = l;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(l) {
                r._currentValue2 = l;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(l) {
                r._threadCount = l;
              }
            },
            Consumer: {
              get: function() {
                return a || (a = !0, d("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(l) {
                i || (ue("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", l), i = !0);
              }
            }
          }), r.Consumer = p;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var De = -1, Be = 0, ze = 1, Sr = 2;
      function Tr(e) {
        if (e._status === De) {
          var r = e._result, a = r();
          if (a.then(function(p) {
            if (e._status === Be || e._status === De) {
              var l = e;
              l._status = ze, l._result = p;
            }
          }, function(p) {
            if (e._status === Be || e._status === De) {
              var l = e;
              l._status = Sr, l._result = p;
            }
          }), e._status === De) {
            var o = e;
            o._status = Be, o._result = a;
          }
        }
        if (e._status === ze) {
          var i = e._result;
          return i === void 0 && d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || d(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function Or(e) {
        var r = {
          // We use these fields to store the result.
          _status: De,
          _result: e
        }, a = {
          $$typeof: se,
          _payload: r,
          _init: Tr
        };
        {
          var o, i;
          Object.defineProperties(a, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return o;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), o = p, Object.defineProperty(a, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(p) {
                d("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = p, Object.defineProperty(a, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return a;
      }
      function Pr(e) {
        e != null && e.$$typeof === K ? d("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? d("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && d("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && d("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: L,
          render: e
        };
        {
          var a;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(o) {
              a = o, !e.name && !e.displayName && (e.displayName = o);
            }
          });
        }
        return r;
      }
      var t;
      t = Symbol.for("react.module.reference");
      function u(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === re || e === Q || J || e === te || e === U || e === ee || G || e === Ie || Ce || Ue || we || typeof e == "object" && e !== null && (e.$$typeof === se || e.$$typeof === K || e.$$typeof === $ || e.$$typeof === Z || e.$$typeof === L || // This needs to include all possible module reference object
        // types supported by any Flight configuration anywhere since
        // we don't know which Flight build this will end up being used
        // with.
        e.$$typeof === t || e.getModuleId !== void 0));
      }
      function c(e, r) {
        u(e) || d("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var a = {
          $$typeof: K,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var o;
          Object.defineProperty(a, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return o;
            },
            set: function(i) {
              o = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return a;
      }
      function f() {
        var e = he.current;
        return e === null && d(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function R(e) {
        var r = f();
        if (e._context !== void 0) {
          var a = e._context;
          a.Consumer === e ? d("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : a.Provider === e && d("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function S(e) {
        var r = f();
        return r.useState(e);
      }
      function b(e, r, a) {
        var o = f();
        return o.useReducer(e, r, a);
      }
      function m(e) {
        var r = f();
        return r.useRef(e);
      }
      function B(e, r) {
        var a = f();
        return a.useEffect(e, r);
      }
      function x(e, r) {
        var a = f();
        return a.useInsertionEffect(e, r);
      }
      function F(e, r) {
        var a = f();
        return a.useLayoutEffect(e, r);
      }
      function X(e, r) {
        var a = f();
        return a.useCallback(e, r);
      }
      function Ee(e, r) {
        var a = f();
        return a.useMemo(e, r);
      }
      function ir(e, r, a) {
        var o = f();
        return o.useImperativeHandle(e, r, a);
      }
      function ie(e, r) {
        {
          var a = f();
          return a.useDebugValue(e, r);
        }
      }
      function vt() {
        var e = f();
        return e.useTransition();
      }
      function yt(e) {
        var r = f();
        return r.useDeferredValue(e);
      }
      function ht() {
        var e = f();
        return e.useId();
      }
      function mt(e, r, a) {
        var o = f();
        return o.useSyncExternalStore(e, r, a);
      }
      var qe = 0, Wr, Vr, Ur, Yr, Br, zr, qr;
      function Hr() {
      }
      Hr.__reactDisabledLog = !0;
      function gt() {
        {
          if (qe === 0) {
            Wr = console.log, Vr = console.info, Ur = console.warn, Yr = console.error, Br = console.group, zr = console.groupCollapsed, qr = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: Hr,
              writable: !0
            };
            Object.defineProperties(console, {
              info: e,
              log: e,
              warn: e,
              error: e,
              group: e,
              groupCollapsed: e,
              groupEnd: e
            });
          }
          qe++;
        }
      }
      function _t() {
        {
          if (qe--, qe === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: h({}, e, {
                value: Wr
              }),
              info: h({}, e, {
                value: Vr
              }),
              warn: h({}, e, {
                value: Ur
              }),
              error: h({}, e, {
                value: Yr
              }),
              group: h({}, e, {
                value: Br
              }),
              groupCollapsed: h({}, e, {
                value: zr
              }),
              groupEnd: h({}, e, {
                value: qr
              })
            });
          }
          qe < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var kr = Y.ReactCurrentDispatcher, jr;
      function sr(e, r, a) {
        {
          if (jr === void 0)
            try {
              throw Error();
            } catch (i) {
              var o = i.stack.trim().match(/\n( *(at )?)/);
              jr = o && o[1] || "";
            }
          return `
` + jr + e;
        }
      }
      var Ar = !1, cr;
      {
        var bt = typeof WeakMap == "function" ? WeakMap : Map;
        cr = new bt();
      }
      function Gr(e, r) {
        if (!e || Ar)
          return "";
        {
          var a = cr.get(e);
          if (a !== void 0)
            return a;
        }
        var o;
        Ar = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var p;
        p = kr.current, kr.current = null, gt();
        try {
          if (r) {
            var l = function() {
              throw Error();
            };
            if (Object.defineProperty(l.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(l, []);
              } catch (z) {
                o = z;
              }
              Reflect.construct(e, [], l);
            } else {
              try {
                l.call();
              } catch (z) {
                o = z;
              }
              e.call(l.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (z) {
              o = z;
            }
            e();
          }
        } catch (z) {
          if (z && o && typeof z.stack == "string") {
            for (var y = z.stack.split(`
`), E = o.stack.split(`
`), O = y.length - 1, j = E.length - 1; O >= 1 && j >= 0 && y[O] !== E[j]; )
              j--;
            for (; O >= 1 && j >= 0; O--, j--)
              if (y[O] !== E[j]) {
                if (O !== 1 || j !== 1)
                  do
                    if (O--, j--, j < 0 || y[O] !== E[j]) {
                      var A = `
` + y[O].replace(" at new ", " at ");
                      return e.displayName && A.includes("<anonymous>") && (A = A.replace("<anonymous>", e.displayName)), typeof e == "function" && cr.set(e, A), A;
                    }
                  while (O >= 1 && j >= 0);
                break;
              }
          }
        } finally {
          Ar = !1, kr.current = p, _t(), Error.prepareStackTrace = i;
        }
        var D = e ? e.displayName || e.name : "", M = D ? sr(D) : "";
        return typeof e == "function" && cr.set(e, M), M;
      }
      function Et(e, r, a) {
        return Gr(e, !1);
      }
      function Rt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function fr(e, r, a) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return Gr(e, Rt(e));
        if (typeof e == "string")
          return sr(e);
        switch (e) {
          case U:
            return sr("Suspense");
          case ee:
            return sr("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case L:
              return Et(e.render);
            case K:
              return fr(e.type, r, a);
            case se: {
              var o = e, i = o._payload, p = o._init;
              try {
                return fr(p(i), r, a);
              } catch {
              }
            }
          }
        return "";
      }
      var Kr = {}, Jr = Y.ReactDebugCurrentFrame;
      function lr(e) {
        if (e) {
          var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
          Jr.setExtraStackFrame(a);
        } else
          Jr.setExtraStackFrame(null);
      }
      function Ct(e, r, a, o, i) {
        {
          var p = Function.call.bind(ke);
          for (var l in e)
            if (p(e, l)) {
              var y = void 0;
              try {
                if (typeof e[l] != "function") {
                  var E = Error((o || "React class") + ": " + a + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw E.name = "Invariant Violation", E;
                }
                y = e[l](r, l, o, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (O) {
                y = O;
              }
              y && !(y instanceof Error) && (lr(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", o || "React class", a, l, typeof y), lr(null)), y instanceof Error && !(y.message in Kr) && (Kr[y.message] = !0, lr(i), d("Failed %s type: %s", a, y.message), lr(null));
            }
        }
      }
      function We(e) {
        if (e) {
          var r = e._owner, a = fr(e.type, e._source, r ? r.type : null);
          Re(a);
        } else
          Re(null);
      }
      var xr;
      xr = !1;
      function Xr() {
        if (H.current) {
          var e = le(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function wt(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
      function St(e) {
        return e != null ? wt(e.__source) : "";
      }
      var Qr = {};
      function Tt(e) {
        var r = Xr();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
      function Zr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var a = Tt(r);
          if (!Qr[a]) {
            Qr[a] = !0;
            var o = "";
            e && e._owner && e._owner !== H.current && (o = " It was passed a child from " + le(e._owner.type) + "."), We(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, o), We(null);
          }
        }
      }
      function et(e, r) {
        if (typeof e == "object") {
          if (Fe(e))
            for (var a = 0; a < e.length; a++) {
              var o = e[a];
              _e(o) && Zr(o, r);
            }
          else if (_e(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = I(e);
            if (typeof i == "function" && i !== e.entries)
              for (var p = i.call(e), l; !(l = p.next()).done; )
                _e(l.value) && Zr(l.value, r);
          }
        }
      }
      function rt(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var a;
          if (typeof r == "function")
            a = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === L || // Note: Memo only checks outer props here.
          // Inner props are checked in the reconciler.
          r.$$typeof === K))
            a = r.propTypes;
          else
            return;
          if (a) {
            var o = le(r);
            Ct(a, e.props, "prop", o, e);
          } else if (r.PropTypes !== void 0 && !xr) {
            xr = !0;
            var i = le(r);
            d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ot(e) {
        {
          for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
            var o = r[a];
            if (o !== "children" && o !== "key") {
              We(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", o), We(null);
              break;
            }
          }
          e.ref !== null && (We(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), We(null));
        }
      }
      function tt(e, r, a) {
        var o = u(e);
        if (!o) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = St(r);
          p ? i += p : i += Xr();
          var l;
          e === null ? l = "null" : Fe(e) ? l = "array" : e !== void 0 && e.$$typeof === q ? (l = "<" + (le(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, i);
        }
        var y = gr.apply(this, arguments);
        if (y == null)
          return y;
        if (o)
          for (var E = 2; E < arguments.length; E++)
            et(arguments[E], e);
        return e === re ? Ot(y) : rt(y), y;
      }
      var nt = !1;
      function Pt(e) {
        var r = tt.bind(null, e);
        return r.type = e, nt || (nt = !0, ue("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return ue("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function kt(e, r, a) {
        for (var o = br.apply(this, arguments), i = 2; i < arguments.length; i++)
          et(arguments[i], o.type);
        return rt(o), o;
      }
      function jt(e, r) {
        var a = oe.transition;
        oe.transition = {};
        var o = oe.transition;
        oe.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (oe.transition = a, a === null && o._updatedFibers) {
            var i = o._updatedFibers.size;
            i > 10 && ue("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), o._updatedFibers.clear();
          }
        }
      }
      var at = !1, dr = null;
      function At(e) {
        if (dr === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), a = V && V[r];
            dr = a.call(V, "timers").setImmediate;
          } catch {
            dr = function(i) {
              at === !1 && (at = !0, typeof MessageChannel > "u" && d("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var p = new MessageChannel();
              p.port1.onmessage = i, p.port2.postMessage(void 0);
            };
          }
        return dr(e);
      }
      var Ve = 0, ot = !1;
      function xt(e) {
        {
          var r = Ve;
          Ve++, N.current === null && (N.current = []);
          var a = N.isBatchingLegacy, o;
          try {
            if (N.isBatchingLegacy = !0, o = e(), !a && N.didScheduleLegacyUpdate) {
              var i = N.current;
              i !== null && (N.didScheduleLegacyUpdate = !1, Fr(i));
            }
          } catch (D) {
            throw pr(r), D;
          } finally {
            N.isBatchingLegacy = a;
          }
          if (o !== null && typeof o == "object" && typeof o.then == "function") {
            var p = o, l = !1, y = {
              then: function(D, M) {
                l = !0, p.then(function(z) {
                  pr(r), Ve === 0 ? Dr(z, D, M) : D(z);
                }, function(z) {
                  pr(r), M(z);
                });
              }
            };
            return !ot && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              l || (ot = !0, d("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), y;
          } else {
            var E = o;
            if (pr(r), Ve === 0) {
              var O = N.current;
              O !== null && (Fr(O), N.current = null);
              var j = {
                then: function(D, M) {
                  N.current === null ? (N.current = [], Dr(E, D, M)) : D(E);
                }
              };
              return j;
            } else {
              var A = {
                then: function(D, M) {
                  D(E);
                }
              };
              return A;
            }
          }
        }
      }
      function pr(e) {
        e !== Ve - 1 && d("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), Ve = e;
      }
      function Dr(e, r, a) {
        {
          var o = N.current;
          if (o !== null)
            try {
              Fr(o), At(function() {
                o.length === 0 ? (N.current = null, r(e)) : Dr(e, r, a);
              });
            } catch (i) {
              a(i);
            }
          else
            r(e);
        }
      }
      var Ir = !1;
      function Fr(e) {
        if (!Ir) {
          Ir = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var a = e[r];
              do
                a = a(!0);
              while (a !== null);
            }
            e.length = 0;
          } catch (o) {
            throw e = e.slice(r + 1), o;
          } finally {
            Ir = !1;
          }
        }
      }
      var Dt = tt, It = kt, Ft = Pt, $t = {
        map: xe,
        forEach: ar,
        count: Cr,
        toArray: wr,
        only: or
      };
      v.Children = $t, v.Component = _, v.Fragment = re, v.Profiler = Q, v.PureComponent = W, v.StrictMode = te, v.Suspense = U, v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y, v.cloneElement = It, v.createContext = ur, v.createElement = Dt, v.createFactory = Ft, v.createRef = yr, v.forwardRef = Pr, v.isValidElement = _e, v.lazy = Or, v.memo = c, v.startTransition = jt, v.unstable_act = xt, v.useCallback = X, v.useContext = R, v.useDebugValue = ie, v.useDeferredValue = yt, v.useEffect = B, v.useId = ht, v.useImperativeHandle = ir, v.useInsertionEffect = x, v.useLayoutEffect = F, v.useMemo = Ee, v.useReducer = b, v.useRef = m, v.useState = S, v.useSyncExternalStore = mt, v.useTransition = vt, v.version = de, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Ke, Ke.exports)), Ke.exports;
}
process.env.NODE_ENV === "production" ? Nr.exports = Wt() : Nr.exports = Vt();
var Mr = Nr.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lt;
function Ut() {
  if (lt)
    return He;
  lt = 1;
  var V = Mr, v = Symbol.for("react.element"), de = Symbol.for("react.fragment"), q = Object.prototype.hasOwnProperty, pe = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, re = { key: !0, ref: !0, __self: !0, __source: !0 };
  function te(Q, $, Z) {
    var L, U = {}, ee = null, K = null;
    Z !== void 0 && (ee = "" + Z), $.key !== void 0 && (ee = "" + $.key), $.ref !== void 0 && (K = $.ref);
    for (L in $)
      q.call($, L) && !re.hasOwnProperty(L) && (U[L] = $[L]);
    if (Q && Q.defaultProps)
      for (L in $ = Q.defaultProps, $)
        U[L] === void 0 && (U[L] = $[L]);
    return { $$typeof: v, type: Q, key: ee, ref: K, props: U, _owner: pe.current };
  }
  return He.Fragment = de, He.jsx = te, He.jsxs = te, He;
}
var Ge = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dt;
function Yt() {
  return dt || (dt = 1, process.env.NODE_ENV !== "production" && function() {
    var V = Mr, v = Symbol.for("react.element"), de = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), pe = Symbol.for("react.strict_mode"), re = Symbol.for("react.profiler"), te = Symbol.for("react.provider"), Q = Symbol.for("react.context"), $ = Symbol.for("react.forward_ref"), Z = Symbol.for("react.suspense"), L = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), ee = Symbol.for("react.lazy"), K = Symbol.for("react.offscreen"), se = Symbol.iterator, Ie = "@@iterator";
    function ne(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = se && t[se] || t[Ie];
      return typeof u == "function" ? u : null;
    }
    var ae = V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function I(t) {
      {
        for (var u = arguments.length, c = new Array(u > 1 ? u - 1 : 0), f = 1; f < u; f++)
          c[f - 1] = arguments[f];
        he("error", t, c);
      }
    }
    function he(t, u, c) {
      {
        var f = ae.ReactDebugCurrentFrame, R = f.getStackAddendum();
        R !== "" && (u += "%s", c = c.concat([R]));
        var S = c.map(function(b) {
          return String(b);
        });
        S.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, S);
      }
    }
    var oe = !1, N = !1, H = !1, ce = !1, ve = !1, Re;
    Re = Symbol.for("react.module.reference");
    function Ce(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === q || t === re || ve || t === pe || t === Z || t === L || ce || t === K || oe || N || H || typeof t == "object" && t !== null && (t.$$typeof === ee || t.$$typeof === U || t.$$typeof === te || t.$$typeof === Q || t.$$typeof === $ || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Re || t.getModuleId !== void 0));
    }
    function Ue(t, u, c) {
      var f = t.displayName;
      if (f)
        return f;
      var R = u.displayName || u.name || "";
      return R !== "" ? c + "(" + R + ")" : c;
    }
    function we(t) {
      return t.displayName || "Context";
    }
    function G(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && I("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case q:
          return "Fragment";
        case de:
          return "Portal";
        case re:
          return "Profiler";
        case pe:
          return "StrictMode";
        case Z:
          return "Suspense";
        case L:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case Q:
            var u = t;
            return we(u) + ".Consumer";
          case te:
            var c = t;
            return we(c._context) + ".Provider";
          case $:
            return Ue(t, t.render, "ForwardRef");
          case U:
            var f = t.displayName || null;
            return f !== null ? f : G(t.type) || "Memo";
          case ee: {
            var R = t, S = R._payload, b = R._init;
            try {
              return G(b(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, Y = 0, ue, d, fe, Se, n, s, h;
    function C() {
    }
    C.__reactDisabledLog = !0;
    function _() {
      {
        if (Y === 0) {
          ue = console.log, d = console.info, fe = console.warn, Se = console.error, n = console.group, s = console.groupCollapsed, h = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: C,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        Y++;
      }
    }
    function P() {
      {
        if (Y--, Y === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: ue
            }),
            info: J({}, t, {
              value: d
            }),
            warn: J({}, t, {
              value: fe
            }),
            error: J({}, t, {
              value: Se
            }),
            group: J({}, t, {
              value: n
            }),
            groupCollapsed: J({}, t, {
              value: s
            }),
            groupEnd: J({}, t, {
              value: h
            })
          });
        }
        Y < 0 && I("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var k = ae.ReactCurrentDispatcher, T;
    function w(t, u, c) {
      {
        if (T === void 0)
          try {
            throw Error();
          } catch (R) {
            var f = R.stack.trim().match(/\n( *(at )?)/);
            T = f && f[1] || "";
          }
        return `
` + T + t;
      }
    }
    var W = !1, me;
    {
      var yr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new yr();
    }
    function Je(t, u) {
      if (!t || W)
        return "";
      {
        var c = me.get(t);
        if (c !== void 0)
          return c;
      }
      var f;
      W = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = k.current, k.current = null, _();
      try {
        if (u) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (ie) {
              f = ie;
            }
            Reflect.construct(t, [], b);
          } else {
            try {
              b.call();
            } catch (ie) {
              f = ie;
            }
            t.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ie) {
            f = ie;
          }
          t();
        }
      } catch (ie) {
        if (ie && f && typeof ie.stack == "string") {
          for (var m = ie.stack.split(`
`), B = f.stack.split(`
`), x = m.length - 1, F = B.length - 1; x >= 1 && F >= 0 && m[x] !== B[F]; )
            F--;
          for (; x >= 1 && F >= 0; x--, F--)
            if (m[x] !== B[F]) {
              if (x !== 1 || F !== 1)
                do
                  if (x--, F--, F < 0 || m[x] !== B[F]) {
                    var X = `
` + m[x].replace(" at new ", " at ");
                    return t.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", t.displayName)), typeof t == "function" && me.set(t, X), X;
                  }
                while (x >= 1 && F >= 0);
              break;
            }
        }
      } finally {
        W = !1, k.current = S, P(), Error.prepareStackTrace = R;
      }
      var Ee = t ? t.displayName || t.name : "", ir = Ee ? w(Ee) : "";
      return typeof t == "function" && me.set(t, ir), ir;
    }
    function Fe(t, u, c) {
      return Je(t, !1);
    }
    function hr(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function $e(t, u, c) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Je(t, hr(t));
      if (typeof t == "string")
        return w(t);
      switch (t) {
        case Z:
          return w("Suspense");
        case L:
          return w("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case $:
            return Fe(t.render);
          case U:
            return $e(t.type, u, c);
          case ee: {
            var f = t, R = f._payload, S = f._init;
            try {
              return $e(S(R), u, c);
            } catch {
            }
          }
        }
      return "";
    }
    var Te = Object.prototype.hasOwnProperty, Oe = {}, Xe = ae.ReactDebugCurrentFrame;
    function Pe(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        Xe.setExtraStackFrame(c);
      } else
        Xe.setExtraStackFrame(null);
    }
    function le(t, u, c, f, R) {
      {
        var S = Function.call.bind(Te);
        for (var b in t)
          if (S(t, b)) {
            var m = void 0;
            try {
              if (typeof t[b] != "function") {
                var B = Error((f || "React class") + ": " + c + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw B.name = "Invariant Violation", B;
              }
              m = t[b](u, b, f, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              m = x;
            }
            m && !(m instanceof Error) && (Pe(R), I("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", c, b, typeof m), Pe(null)), m instanceof Error && !(m.message in Oe) && (Oe[m.message] = !0, Pe(R), I("Failed %s type: %s", c, m.message), Pe(null));
          }
      }
    }
    var ke = Array.isArray;
    function Le(t) {
      return ke(t);
    }
    function Qe(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, c = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return c;
      }
    }
    function Ze(t) {
      try {
        return Ne(t), !1;
      } catch {
        return !0;
      }
    }
    function Ne(t) {
      return "" + t;
    }
    function Ye(t) {
      if (Ze(t))
        return I("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(t)), Ne(t);
    }
    var ge = ae.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, je;
    je = {};
    function gr(t) {
      if (Te.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function _r(t) {
      if (Te.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function br(t, u) {
      if (typeof t.ref == "string" && ge.current && u && ge.current.stateNode !== u) {
        var c = G(ge.current.type);
        je[c] || (I('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ge.current.type), t.ref), je[c] = !0);
      }
    }
    function _e(t, u) {
      {
        var c = function() {
          er || (er = !0, I("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function tr(t, u) {
      {
        var c = function() {
          rr || (rr = !0, I("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        c.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var Er = function(t, u, c, f, R, S, b) {
      var m = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: v,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: c,
        props: b,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return m._store = {}, Object.defineProperty(m._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(m, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(m, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(m.props), Object.freeze(m)), m;
    };
    function Rr(t, u, c, f, R) {
      {
        var S, b = {}, m = null, B = null;
        c !== void 0 && (Ye(c), m = "" + c), _r(u) && (Ye(u.key), m = "" + u.key), gr(u) && (B = u.ref, br(u, R));
        for (S in u)
          Te.call(u, S) && !mr.hasOwnProperty(S) && (b[S] = u[S]);
        if (t && t.defaultProps) {
          var x = t.defaultProps;
          for (S in x)
            b[S] === void 0 && (b[S] = x[S]);
        }
        if (m || B) {
          var F = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          m && _e(b, F), B && tr(b, F);
        }
        return Er(t, m, B, R, f, ge.current, b);
      }
    }
    var Me = ae.ReactCurrentOwner, nr = ae.ReactDebugCurrentFrame;
    function ye(t) {
      if (t) {
        var u = t._owner, c = $e(t.type, t._source, u ? u.type : null);
        nr.setExtraStackFrame(c);
      } else
        nr.setExtraStackFrame(null);
    }
    var Ae;
    Ae = !1;
    function be(t) {
      return typeof t == "object" && t !== null && t.$$typeof === v;
    }
    function xe() {
      {
        if (Me.current) {
          var t = G(Me.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Cr(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), c = t.lineNumber;
          return `

Check your code at ` + u + ":" + c + ".";
        }
        return "";
      }
    }
    var ar = {};
    function wr(t) {
      {
        var u = xe();
        if (!u) {
          var c = typeof t == "string" ? t : t.displayName || t.name;
          c && (u = `

Check the top-level render call using <` + c + ">.");
        }
        return u;
      }
    }
    function or(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var c = wr(u);
        if (ar[c])
          return;
        ar[c] = !0;
        var f = "";
        t && t._owner && t._owner !== Me.current && (f = " It was passed a child from " + G(t._owner.type) + "."), ye(t), I('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, f), ye(null);
      }
    }
    function ur(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Le(t))
          for (var c = 0; c < t.length; c++) {
            var f = t[c];
            be(f) && or(f, u);
          }
        else if (be(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var R = ne(t);
          if (typeof R == "function" && R !== t.entries)
            for (var S = R.call(t), b; !(b = S.next()).done; )
              be(b.value) && or(b.value, u);
        }
      }
    }
    function De(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var c;
        if (typeof u == "function")
          c = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === $ || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === U))
          c = u.propTypes;
        else
          return;
        if (c) {
          var f = G(u);
          le(c, t.props, "prop", f, t);
        } else if (u.PropTypes !== void 0 && !Ae) {
          Ae = !0;
          var R = G(u);
          I("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && I("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Be(t) {
      {
        for (var u = Object.keys(t.props), c = 0; c < u.length; c++) {
          var f = u[c];
          if (f !== "children" && f !== "key") {
            ye(t), I("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ye(null);
            break;
          }
        }
        t.ref !== null && (ye(t), I("Invalid attribute `ref` supplied to `React.Fragment`."), ye(null));
      }
    }
    function ze(t, u, c, f, R, S) {
      {
        var b = Ce(t);
        if (!b) {
          var m = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (m += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var B = Cr(R);
          B ? m += B : m += xe();
          var x;
          t === null ? x = "null" : Le(t) ? x = "array" : t !== void 0 && t.$$typeof === v ? (x = "<" + (G(t.type) || "Unknown") + " />", m = " Did you accidentally export a JSX literal instead of a component?") : x = typeof t, I("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, m);
        }
        var F = Rr(t, u, c, R, S);
        if (F == null)
          return F;
        if (b) {
          var X = u.children;
          if (X !== void 0)
            if (f)
              if (Le(X)) {
                for (var Ee = 0; Ee < X.length; Ee++)
                  ur(X[Ee], t);
                Object.freeze && Object.freeze(X);
              } else
                I("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ur(X, t);
        }
        return t === q ? Be(F) : De(F), F;
      }
    }
    function Sr(t, u, c) {
      return ze(t, u, c, !0);
    }
    function Tr(t, u, c) {
      return ze(t, u, c, !1);
    }
    var Or = Tr, Pr = Sr;
    Ge.Fragment = q, Ge.jsx = Or, Ge.jsxs = Pr;
  }()), Ge;
}
process.env.NODE_ENV === "production" ? Lr.exports = Ut() : Lr.exports = Yt();
var pt = Lr.exports;
function Bt() {
  const [V, v] = Mr.useState(!1);
  return /* @__PURE__ */ pt.jsx("button", { onClick: de, children: V ? "ON" : "OFF" });
  function de() {
    v((q) => !q);
  }
}
function zt({ children: V }) {
  return /* @__PURE__ */ pt.jsx("p", { children: V });
}
export {
  zt as Text,
  Bt as ToggleButton
};
