(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/andreas-technology-v2/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "A",
    ()=>useStore,
    "B",
    ()=>Block,
    "C",
    ()=>useThree,
    "D",
    ()=>useFrame,
    "E",
    ()=>ErrorBoundary,
    "F",
    ()=>useGraph,
    "G",
    ()=>useLoader,
    "_",
    ()=>_roots,
    "a",
    ()=>useMutableCallback,
    "b",
    ()=>useIsomorphicLayoutEffect,
    "c",
    ()=>createRoot,
    "d",
    ()=>unmountComponentAtNode,
    "e",
    ()=>extend,
    "f",
    ()=>createPointerEvents,
    "g",
    ()=>createEvents,
    "h",
    ()=>flushGlobalEffects,
    "i",
    ()=>isRef,
    "j",
    ()=>addEffect,
    "k",
    ()=>addAfterEffect,
    "l",
    ()=>addTail,
    "m",
    ()=>invalidate,
    "n",
    ()=>advance,
    "o",
    ()=>createPortal,
    "p",
    ()=>flushSync,
    "q",
    ()=>context,
    "r",
    ()=>reconciler,
    "s",
    ()=>applyProps,
    "t",
    ()=>threeTypes,
    "u",
    ()=>useBridge,
    "v",
    ()=>getRootState,
    "w",
    ()=>dispose,
    "x",
    ()=>act,
    "y",
    ()=>buildGraph,
    "z",
    ()=>useInstanceHandle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_call_super.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_construct.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_inherits.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/react-reconciler/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$zustand$2f$esm$2f$traditional$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/zustand/esm/traditional.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/suspend-react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$reconciler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/react-reconciler/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@react-three/fiber/node_modules/scheduler/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$its$2d$fine$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/its-fine/dist/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var threeTypes = /*#__PURE__*/ Object.freeze({
    __proto__: null
});
/**
 * Returns the instance's initial (outmost) root.
 */ function findInitialRoot(instance) {
    var root = instance.root;
    while(root.getState().previousRoot)root = root.getState().previousRoot;
    return root;
}
/**
 * Safely flush async effects when testing, simulating a legacy root.
 * @deprecated Import from React instead. import { act } from 'react'
 */ // Reference with computed key to break Webpack static analysis
// https://github.com/webpack/webpack/issues/14814
var act = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__['act' + ''];
var isOrthographicCamera = function(def) {
    return def && def.isOrthographicCamera;
};
var isRef = function(obj) {
    return obj && obj.hasOwnProperty('current');
};
var isColorRepresentation = function(value) {
    return value != null && (typeof value === 'string' || typeof value === 'number' || value.isColor);
};
/**
 * An SSR-friendly useLayoutEffect.
 *
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect elsewhere.
 *
 * @see https://github.com/facebook/react/issues/14927
 */ var useIsomorphicLayoutEffect = /* @__PURE__ */ function(_window$document, _window$navigator) {
    return typeof window !== 'undefined' && (((_window$document = window.document) == null ? void 0 : _window$document.createElement) || ((_window$navigator = window.navigator) == null ? void 0 : _window$navigator.product) === 'ReactNative');
}() ? __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useLayoutEffect : __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useEffect;
function useMutableCallback(fn) {
    var ref = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(fn);
    useIsomorphicLayoutEffect({
        "useMutableCallback.useIsomorphicLayoutEffect": function() {
            return void (ref.current = fn);
        }
    }["useMutableCallback.useIsomorphicLayoutEffect"], [
        fn
    ]);
    return ref;
}
/**
 * Bridges renderer Context and StrictMode from a primary renderer.
 */ function useBridge() {
    var fiber = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$its$2d$fine$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFiber"])();
    var ContextBridge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$its$2d$fine$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContextBridge"])();
    return __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useBridge.useMemo": function() {
            return ({
                "useBridge.useMemo": function(param) {
                    var children = param.children;
                    var strict = !!(0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$its$2d$fine$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["traverseFiber"])(fiber, true, {
                        "useBridge.useMemo": function(node) {
                            return node.type === __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.StrictMode;
                        }
                    }["useBridge.useMemo"]);
                    var Root = strict ? __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.StrictMode : __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Fragment;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Root, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ContextBridge, {
                            children: children
                        })
                    });
                }
            })["useBridge.useMemo"];
        }
    }["useBridge.useMemo"], [
        fiber,
        ContextBridge
    ]);
}
function Block(param) {
    var set = param.set;
    useIsomorphicLayoutEffect({
        "Block.useIsomorphicLayoutEffect": function() {
            set(new Promise({
                "Block.useIsomorphicLayoutEffect": function() {
                    return null;
                }
            }["Block.useIsomorphicLayoutEffect"]));
            return ({
                "Block.useIsomorphicLayoutEffect": function() {
                    return set(false);
                }
            })["Block.useIsomorphicLayoutEffect"];
        }
    }["Block.useIsomorphicLayoutEffect"], [
        set
    ]);
    return null;
}
// NOTE: static members get down-level transpiled to mutations which break tree-shaking
var ErrorBoundary = /* @__PURE__ */ function(_ErrorBoundary) {
    return _ErrorBoundary = /*#__PURE__*/ function(_React_Component) {
        "use strict";
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_inherits$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ErrorBoundary, _React_Component);
        function ErrorBoundary() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ErrorBoundary);
            var _this;
            _this = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_call_super$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, ErrorBoundary, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
            _this.state = {
                error: false
            };
            return _this;
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(ErrorBoundary, [
            {
                key: "componentDidCatch",
                value: function componentDidCatch(err) {
                    this.props.set(err);
                }
            },
            {
                key: "render",
                value: function render() {
                    return this.state.error ? null : this.props.children;
                }
            }
        ]);
        return ErrorBoundary;
    }(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.Component), _ErrorBoundary.getDerivedStateFromError = function() {
        return {
            error: true
        };
    }, _ErrorBoundary;
}();
function calculateDpr(dpr) {
    var _window$devicePixelRa;
    // Err on the side of progress by assuming 2x dpr if we can't detect it
    // This will happen in workers where window is defined but dpr isn't.
    var target = typeof window !== 'undefined' ? (_window$devicePixelRa = window.devicePixelRatio) != null ? _window$devicePixelRa : 2 : 1;
    return Array.isArray(dpr) ? Math.min(Math.max(dpr[0], target), dpr[1]) : dpr;
}
/**
 * Returns instance root state
 */ function getRootState(obj) {
    var _r3f;
    return (_r3f = obj.__r3f) == null ? void 0 : _r3f.root.getState();
}
// A collection of compare functions
var is = {
    obj: function(a) {
        return a === Object(a) && !is.arr(a) && typeof a !== 'function';
    },
    fun: function(a) {
        return typeof a === 'function';
    },
    str: function(a) {
        return typeof a === 'string';
    },
    num: function(a) {
        return typeof a === 'number';
    },
    boo: function(a) {
        return typeof a === 'boolean';
    },
    und: function(a) {
        return a === void 0;
    },
    nul: function(a) {
        return a === null;
    },
    arr: function(a) {
        return Array.isArray(a);
    },
    equ: function equ(a, b) {
        var _ref = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, _ref_arrays = _ref.arrays, arrays = _ref_arrays === void 0 ? 'shallow' : _ref_arrays, _ref_objects = _ref.objects, objects = _ref_objects === void 0 ? 'reference' : _ref_objects, _ref_strict = _ref.strict, strict = _ref_strict === void 0 ? true : _ref_strict;
        // Wrong type or one of the two undefined, doesn't match
        if ((typeof a === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(a)) !== (typeof b === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(b)) || !!a !== !!b) return false;
        // Atomic, just compare a against b
        if (is.str(a) || is.num(a) || is.boo(a)) return a === b;
        var isObj = is.obj(a);
        if (isObj && objects === 'reference') return a === b;
        var isArr = is.arr(a);
        if (isArr && arrays === 'reference') return a === b;
        // Array or Object, shallow compare first to see if it's a match
        if ((isArr || isObj) && a === b) return true;
        // Last resort, go through keys
        var i;
        // Check if a has all the keys of b
        for(i in a)if (!(i in b)) return false;
        // Check if values between keys match
        if (isObj && arrays === 'shallow' && objects === 'shallow') {
            for(i in strict ? b : a)if (!is.equ(a[i], b[i], {
                strict: strict,
                objects: 'reference'
            })) return false;
        } else {
            for(i in strict ? b : a)if (a[i] !== b[i]) return false;
        }
        // If i is undefined
        if (is.und(i)) {
            // If both arrays are empty we consider them equal
            if (isArr && a.length === 0 && b.length === 0) return true;
            // If both objects are empty we consider them equal
            if (isObj && Object.keys(a).length === 0 && Object.keys(b).length === 0) return true;
            // Otherwise match them by value
            if (a !== b) return false;
        }
        return true;
    }
};
// Collects nodes and materials from a THREE.Object3D
function buildGraph(object) {
    var data = {
        nodes: {},
        materials: {},
        meshes: {}
    };
    if (object) {
        object.traverse(function(obj) {
            if (obj.name) data.nodes[obj.name] = obj;
            if (obj.material && !data.materials[obj.material.name]) data.materials[obj.material.name] = obj.material;
            if (obj.isMesh && !data.meshes[obj.name]) data.meshes[obj.name] = obj;
        });
    }
    return data;
}
// Disposes an object and all its properties
function dispose(obj) {
    if (obj.type !== 'Scene') obj.dispose == null ? void 0 : obj.dispose();
    for(var p in obj){
        var prop = obj[p];
        if ((prop == null ? void 0 : prop.type) !== 'Scene') prop == null ? void 0 : prop.dispose == null ? void 0 : prop.dispose();
    }
}
var REACT_INTERNAL_PROPS = [
    'children',
    'key',
    'ref'
];
// Gets only instance props from reconciler fibers
function getInstanceProps(queue) {
    var props = {};
    for(var key in queue){
        if (!REACT_INTERNAL_PROPS.includes(key)) props[key] = queue[key];
    }
    return props;
}
// Each object in the scene carries a small LocalState descriptor
function prepare(target, root, type, props) {
    var object = target;
    // Create instance descriptor
    var instance = object == null ? void 0 : object.__r3f;
    if (!instance) {
        instance = {
            root: root,
            type: type,
            parent: null,
            children: [],
            props: getInstanceProps(props),
            object: object,
            eventCount: 0,
            handlers: {},
            isHidden: false
        };
        if (object) object.__r3f = instance;
    }
    return instance;
}
function resolve(root, key) {
    if (!key.includes('-')) return {
        root: root,
        key: key,
        target: root[key]
    };
    // First try the entire key as a single property (e.g., 'foo-bar')
    if (key in root) {
        return {
            root: root,
            key: key,
            target: root[key]
        };
    }
    // Try piercing (e.g., 'material-color' -> material.color)
    var target = root;
    var parts = key.split('-');
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var part = _step.value;
            if ((typeof target === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target)) !== 'object' || target === null) {
                if (target !== undefined) {
                    // Property exists but has unexpected shape
                    var remaining = parts.slice(parts.indexOf(part)).join('-');
                    return {
                        root: target,
                        key: remaining,
                        target: undefined
                    };
                }
                // Property doesn't exist - fallback to original key
                return {
                    root: root,
                    key: key,
                    target: undefined
                };
            }
            key = part;
            root = target;
            target = target[key];
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    return {
        root: root,
        key: key,
        target: target
    };
}
// Checks if a dash-cased string ends with an integer
var INDEX_REGEX = /-\d+$/;
function attach(parent, child) {
    if (is.str(child.props.attach)) {
        // If attaching into an array (foo-0), create one
        if (INDEX_REGEX.test(child.props.attach)) {
            var index = child.props.attach.replace(INDEX_REGEX, '');
            var _resolve = resolve(parent.object, index), root = _resolve.root, key = _resolve.key;
            if (!Array.isArray(root[key])) root[key] = [];
        }
        var _resolve1 = resolve(parent.object, child.props.attach), root1 = _resolve1.root, key1 = _resolve1.key;
        child.previousAttach = root1[key1];
        root1[key1] = child.object;
    } else if (is.fun(child.props.attach)) {
        child.previousAttach = child.props.attach(parent.object, child.object);
    }
}
function detach(parent, child) {
    if (is.str(child.props.attach)) {
        var _resolve = resolve(parent.object, child.props.attach), root = _resolve.root, key = _resolve.key;
        var previous = child.previousAttach;
        // When the previous value was undefined, it means the value was never set to begin with
        if (previous === undefined) delete root[key];
        else root[key] = previous;
    } else {
        child.previousAttach == null ? void 0 : child.previousAttach(parent.object, child.object);
    }
    delete child.previousAttach;
}
var RESERVED_PROPS = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(REACT_INTERNAL_PROPS).concat([
    // Instance props
    'args',
    'dispose',
    'attach',
    'object',
    'onUpdate',
    // Behavior flags
    'dispose'
]);
var MEMOIZED_PROTOTYPES = new Map();
function getMemoizedPrototype(root) {
    var ctor = MEMOIZED_PROTOTYPES.get(root.constructor);
    try {
        if (!ctor) {
            ctor = new root.constructor();
            MEMOIZED_PROTOTYPES.set(root.constructor, ctor);
        }
    } catch (e) {
    // ...
    }
    return ctor;
}
// This function prepares a set of changes to be applied to the instance
function diffProps(instance, newProps) {
    var changedProps = {};
    // Sort through props
    for(var prop in newProps){
        // Skip reserved keys
        if (RESERVED_PROPS.includes(prop)) continue;
        // Skip if props match
        if (is.equ(newProps[prop], instance.props[prop])) continue;
        // Props changed, add them
        changedProps[prop] = newProps[prop];
        // Reset pierced props
        for(var other in newProps){
            if (other.startsWith("".concat(prop, "-"))) changedProps[other] = newProps[other];
        }
    }
    // Reset removed props for HMR
    for(var prop1 in instance.props){
        if (RESERVED_PROPS.includes(prop1) || newProps.hasOwnProperty(prop1)) continue;
        var _resolve = resolve(instance.object, prop1), root = _resolve.root, key = _resolve.key;
        // https://github.com/mrdoob/three.js/issues/21209
        // HMR/fast-refresh relies on the ability to cancel out props, but threejs
        // has no means to do this. Hence we curate a small collection of value-classes
        // with their respective constructor/set arguments
        // For removed props, try to set default values, if possible
        if (root.constructor && root.constructor.length === 0) {
            // create a blank slate of the instance and copy the particular parameter.
            var ctor = getMemoizedPrototype(root);
            if (!is.und(ctor)) changedProps[key] = ctor[key];
        } else {
            // instance does not have constructor, just set it to 0
            changedProps[key] = 0;
        }
    }
    return changedProps;
}
// https://github.com/mrdoob/three.js/pull/27042
// https://github.com/mrdoob/three.js/pull/22748
var colorMaps = [
    'map',
    'emissiveMap',
    'sheenColorMap',
    'specularColorMap',
    'envMap'
];
var EVENT_REGEX = /^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/;
// This function applies a set of changes to the instance
function applyProps(object, props) {
    var _instance$object;
    var instance = object.__r3f;
    var rootState = instance && findInitialRoot(instance).getState();
    var prevHandlers = instance == null ? void 0 : instance.eventCount;
    for(var prop in props){
        var value = props[prop];
        // Don't mutate reserved keys
        if (RESERVED_PROPS.includes(prop)) continue;
        // Deal with pointer events, including removing them if undefined
        if (instance && EVENT_REGEX.test(prop)) {
            if (typeof value === 'function') instance.handlers[prop] = value;
            else delete instance.handlers[prop];
            instance.eventCount = Object.keys(instance.handlers).length;
            continue;
        }
        // Ignore setting undefined props
        // https://github.com/pmndrs/react-three-fiber/issues/274
        if (value === undefined) continue;
        var _resolve = resolve(object, prop), root = _resolve.root, key = _resolve.key, target = _resolve.target;
        // Throw an error if we attempted to set a pierced prop to a non-object
        if (target === undefined && ((typeof root === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(root)) !== 'object' || root === null)) {
            throw Error('R3F: Cannot set "'.concat(prop, '". Ensure it is an object before setting "').concat(key, '".'));
        }
        // Layers must be written to the mask property
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layers"]) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layers"])) {
            target.mask = value.mask;
        } else if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]) && isColorRepresentation(value)) {
            target.set(value);
        } else if (target !== null && (typeof target === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target)) === 'object' && typeof target.set === 'function' && typeof target.copy === 'function' && value != null && value.constructor && target.constructor === value.constructor) {
            target.copy(value);
        } else if (target !== null && (typeof target === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target)) === 'object' && typeof target.set === 'function' && Array.isArray(value)) {
            var _target;
            if (typeof target.fromArray === 'function') target.fromArray(value);
            else (_target = target).set.apply(_target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(value));
        } else if (target !== null && (typeof target === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target)) === 'object' && typeof target.set === 'function' && typeof value === 'number') {
            // Allow setting array scalars
            if (typeof target.setScalar === 'function') target.setScalar(value);
            else target.set(value);
        } else {
            var _root$key;
            root[key] = value;
            // Auto-convert sRGB texture parameters for built-in materials
            // https://github.com/pmndrs/react-three-fiber/issues/344
            // https://github.com/mrdoob/three.js/pull/25857
            if (rootState && !rootState.linear && colorMaps.includes(key) && (_root$key = root[key]) != null && _root$key.isTexture && // sRGB textures must be RGBA8 since r137 https://github.com/mrdoob/three.js/pull/23129
            root[key].format === __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["RGBAFormat"] && root[key].type === __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UnsignedByteType"]) {
                // NOTE: this cannot be set from the renderer (e.g. sRGB source textures rendered to P3)
                root[key].colorSpace = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
            }
        }
    }
    // Register event handlers
    if (instance != null && instance.parent && rootState != null && rootState.internal && (_instance$object = instance.object) != null && _instance$object.isObject3D && prevHandlers !== instance.eventCount) {
        var _$object = instance.object;
        // Pre-emptively remove the instance from the interaction manager
        var index = rootState.internal.interaction.indexOf(_$object);
        if (index > -1) rootState.internal.interaction.splice(index, 1);
        // Add the instance to the interaction manager only when it has handlers
        if (instance.eventCount && _$object.raycast !== null) {
            rootState.internal.interaction.push(_$object);
        }
    }
    // Auto-attach geometries and materials
    if (instance && instance.props.attach === undefined) {
        if (instance.object.isBufferGeometry) instance.props.attach = 'geometry';
        else if (instance.object.isMaterial) instance.props.attach = 'material';
    }
    // Instance was updated, request a frame
    if (instance) invalidateInstance(instance);
    return object;
}
function invalidateInstance(instance) {
    var _instance$root;
    if (!instance.parent) return;
    instance.props.onUpdate == null ? void 0 : instance.props.onUpdate(instance.object);
    var state = (_instance$root = instance.root) == null ? void 0 : _instance$root.getState == null ? void 0 : _instance$root.getState();
    if (state && state.internal.frames === 0) state.invalidate();
}
function updateCamera(camera, size) {
    // Do not mess with the camera if it belongs to the user
    // https://github.com/pmndrs/react-three-fiber/issues/92
    if (camera.manual) return;
    if (isOrthographicCamera(camera)) {
        camera.left = size.width / -2;
        camera.right = size.width / 2;
        camera.top = size.height / 2;
        camera.bottom = size.height / -2;
    } else {
        camera.aspect = size.width / size.height;
    }
    camera.updateProjectionMatrix();
}
var isObject3D = function(object) {
    return object == null ? void 0 : object.isObject3D;
};
function makeId(event) {
    return (event.eventObject || event.object).uuid + '/' + event.index + event.instanceId;
}
/**
 * Release pointer captures.
 * This is called by releasePointerCapture in the API, and when an object is removed.
 */ function releaseInternalPointerCapture(capturedMap, obj, captures, pointerId) {
    var captureData = captures.get(obj);
    if (captureData) {
        captures["delete"](obj);
        // If this was the last capturing object for this pointer
        if (captures.size === 0) {
            capturedMap["delete"](pointerId);
            captureData.target.releasePointerCapture(pointerId);
        }
    }
}
function removeInteractivity(store, object) {
    var internal = store.getState().internal;
    // Removes every trace of an object from the data store
    internal.interaction = internal.interaction.filter(function(o) {
        return o !== object;
    });
    internal.initialHits = internal.initialHits.filter(function(o) {
        return o !== object;
    });
    internal.hovered.forEach(function(value, key) {
        if (value.eventObject === object || value.object === object) {
            // Clear out intersects, they are outdated by now
            internal.hovered["delete"](key);
        }
    });
    internal.capturedMap.forEach(function(captures, pointerId) {
        releaseInternalPointerCapture(internal.capturedMap, object, captures, pointerId);
    });
}
function createEvents(store) {
    /** Calculates delta */ function calculateDistance(event) {
        var internal = store.getState().internal;
        var dx = event.offsetX - internal.initialClick[0];
        var dy = event.offsetY - internal.initialClick[1];
        return Math.round(Math.sqrt(dx * dx + dy * dy));
    }
    /** Returns true if an instance has a valid pointer-event registered, this excludes scroll, clicks etc */ function filterPointerEvents(objects) {
        return objects.filter(function(obj) {
            return [
                'Move',
                'Over',
                'Enter',
                'Out',
                'Leave'
            ].some(function(name) {
                var _r3f;
                return (_r3f = obj.__r3f) == null ? void 0 : _r3f.handlers['onPointer' + name];
            });
        });
    }
    function intersect(event, filter) {
        var state = store.getState();
        var duplicates = new Set();
        var intersections = [];
        // Allow callers to eliminate event objects
        var eventsObjects = filter ? filter(state.internal.interaction) : state.internal.interaction;
        // Reset all raycaster cameras to undefined
        for(var i = 0; i < eventsObjects.length; i++){
            var state1 = getRootState(eventsObjects[i]);
            if (state1) {
                state1.raycaster.camera = undefined;
            }
        }
        if (!state.previousRoot) {
            // Make sure root-level pointer and ray are set up
            state.events.compute == null ? void 0 : state.events.compute(event, state);
        }
        function handleRaycast(obj) {
            var state = getRootState(obj);
            // Skip event handling when noEvents is set, or when the raycasters camera is null
            if (!state || !state.events.enabled || state.raycaster.camera === null) return [];
            // When the camera is undefined we have to call the event layers update function
            if (state.raycaster.camera === undefined) {
                var _state$previousRoot;
                state.events.compute == null ? void 0 : state.events.compute(event, state, (_state$previousRoot = state.previousRoot) == null ? void 0 : _state$previousRoot.getState());
                // If the camera is still undefined we have to skip this layer entirely
                if (state.raycaster.camera === undefined) state.raycaster.camera = null;
            }
            // Intersect object by object
            return state.raycaster.camera ? state.raycaster.intersectObject(obj, true) : [];
        }
        // Collect events
        var hits = eventsObjects// Intersect objects
        .flatMap(handleRaycast)// Sort by event priority and distance
        .sort(function(a, b) {
            var aState = getRootState(a.object);
            var bState = getRootState(b.object);
            if (!aState || !bState) return a.distance - b.distance;
            return bState.events.priority - aState.events.priority || a.distance - b.distance;
        })// Filter out duplicates
        .filter(function(item) {
            var id = makeId(item);
            if (duplicates.has(id)) return false;
            duplicates.add(id);
            return true;
        });
        // https://github.com/mrdoob/three.js/issues/16031
        // Allow custom userland intersect sort order, this likely only makes sense on the root filter
        if (state.events.filter) hits = state.events.filter(hits, state);
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            // Bubble up the events, find the event source (eventObject)
            for(var _iterator = hits[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                var hit = _step.value;
                var eventObject = hit.object;
                // Bubble event up
                while(eventObject){
                    var _r3f2;
                    if ((_r3f2 = eventObject.__r3f) != null && _r3f2.eventCount) intersections.push((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, hit), {
                        eventObject: eventObject
                    }));
                    eventObject = eventObject.parent;
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
        // If the interaction is captured, make all capturing targets part of the intersect.
        if ('pointerId' in event && state.internal.capturedMap.has(event.pointerId)) {
            var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
            try {
                for(var _iterator1 = state.internal.capturedMap.get(event.pointerId).values()[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                    var captureData = _step1.value;
                    if (!duplicates.has(makeId(captureData.intersection))) intersections.push(captureData.intersection);
                }
            } catch (err) {
                _didIteratorError1 = true;
                _iteratorError1 = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion1 && _iterator1["return"] != null) {
                        _iterator1["return"]();
                    }
                } finally{
                    if (_didIteratorError1) {
                        throw _iteratorError1;
                    }
                }
            }
        }
        return intersections;
    }
    /**  Handles intersections by forwarding them to handlers */ function handleIntersects(intersections, event, delta, callback) {
        // If anything has been found, forward it to the event listeners
        if (intersections.length) {
            var localState = {
                stopped: false
            };
            var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
            try {
                var _loop = function() {
                    var hit = _step.value;
                    var state = getRootState(hit.object);
                    // If the object is not managed by R3F, it might be parented to an element which is.
                    // Traverse upwards until we find a managed parent and use its state instead.
                    if (!state) {
                        hit.object.traverseAncestors(function(obj) {
                            var parentState = getRootState(obj);
                            if (parentState) {
                                state = parentState;
                                return false;
                            }
                        });
                    }
                    if (state) {
                        var raycaster = state.raycaster, pointer = state.pointer, camera = state.camera, internal = state.internal;
                        var unprojectedPoint = new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](pointer.x, pointer.y, 0).unproject(camera);
                        var hasPointerCapture = function(id) {
                            var _internal$capturedMap, _internal$capturedMap2;
                            return (_internal$capturedMap = (_internal$capturedMap2 = internal.capturedMap.get(id)) == null ? void 0 : _internal$capturedMap2.has(hit.eventObject)) != null ? _internal$capturedMap : false;
                        };
                        var setPointerCapture = function(id) {
                            var captureData = {
                                intersection: hit,
                                target: event.target
                            };
                            if (internal.capturedMap.has(id)) {
                                // if the pointerId was previously captured, we add the hit to the
                                // event capturedMap.
                                internal.capturedMap.get(id).set(hit.eventObject, captureData);
                            } else {
                                // if the pointerId was not previously captured, we create a map
                                // containing the hitObject, and the hit. hitObject is used for
                                // faster access.
                                internal.capturedMap.set(id, new Map([
                                    [
                                        hit.eventObject,
                                        captureData
                                    ]
                                ]));
                            }
                            event.target.setPointerCapture(id);
                        };
                        var releasePointerCapture = function(id) {
                            var captures = internal.capturedMap.get(id);
                            if (captures) {
                                releaseInternalPointerCapture(internal.capturedMap, hit.eventObject, captures, id);
                            }
                        };
                        // Add native event props
                        var extractEventProps = {};
                        // This iterates over the event's properties including the inherited ones. Native PointerEvents have most of their props as getters which are inherited, but polyfilled PointerEvents have them all as their own properties (i.e. not inherited). We can't use Object.keys() or Object.entries() as they only return "own" properties; nor Object.getPrototypeOf(event) as that *doesn't* return "own" properties, only inherited ones.
                        for(var prop in event){
                            var property = event[prop];
                            // Only copy over atomics, leave functions alone as these should be
                            // called as event.nativeEvent.fn()
                            if (typeof property !== 'function') extractEventProps[prop] = property;
                        }
                        var raycastEvent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, hit, extractEventProps), {
                            pointer: pointer,
                            intersections: intersections,
                            stopped: localState.stopped,
                            delta: delta,
                            unprojectedPoint: unprojectedPoint,
                            ray: raycaster.ray,
                            camera: camera,
                            // Hijack stopPropagation, which just sets a flag
                            stopPropagation: function stopPropagation() {
                                // https://github.com/pmndrs/react-three-fiber/issues/596
                                // Events are not allowed to stop propagation if the pointer has been captured
                                var capturesForPointer = 'pointerId' in event && internal.capturedMap.get(event.pointerId);
                                // We only authorize stopPropagation...
                                if (// ...if this pointer hasn't been captured
                                !capturesForPointer || // ... or if the hit object is capturing the pointer
                                capturesForPointer.has(hit.eventObject)) {
                                    raycastEvent.stopped = localState.stopped = true;
                                    // Propagation is stopped, remove all other hover records
                                    // An event handler is only allowed to flush other handlers if it is hovered itself
                                    if (internal.hovered.size && Array.from(internal.hovered.values()).find(function(i) {
                                        return i.eventObject === hit.eventObject;
                                    })) {
                                        // Objects cannot flush out higher up objects that have already caught the event
                                        var higher = intersections.slice(0, intersections.indexOf(hit));
                                        cancelPointer((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(higher).concat([
                                            hit
                                        ]));
                                    }
                                }
                            },
                            // there should be a distinction between target and currentTarget
                            target: {
                                hasPointerCapture: hasPointerCapture,
                                setPointerCapture: setPointerCapture,
                                releasePointerCapture: releasePointerCapture
                            },
                            currentTarget: {
                                hasPointerCapture: hasPointerCapture,
                                setPointerCapture: setPointerCapture,
                                releasePointerCapture: releasePointerCapture
                            },
                            nativeEvent: event
                        });
                        // Call subscribers
                        callback(raycastEvent);
                        // Event bubbling may be interrupted by stopPropagation
                        if (localState.stopped === true) return "break";
                    }
                };
                for(var _iterator = intersections[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
                    var _ret = _loop();
                    if (_ret === "break") break;
                }
            } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
            } finally{
                try {
                    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                        _iterator["return"]();
                    }
                } finally{
                    if (_didIteratorError) {
                        throw _iteratorError;
                    }
                }
            }
        }
        return intersections;
    }
    function cancelPointer(intersections) {
        var internal = store.getState().internal;
        var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
        try {
            var _loop = function() {
                var hoveredObj = _step.value;
                // When no objects were hit or the the hovered object wasn't found underneath the cursor
                // we call onPointerOut and delete the object from the hovered-elements map
                if (!intersections.length || !intersections.find(function(hit) {
                    return hit.object === hoveredObj.object && hit.index === hoveredObj.index && hit.instanceId === hoveredObj.instanceId;
                })) {
                    var eventObject = hoveredObj.eventObject;
                    var instance = eventObject.__r3f;
                    internal.hovered["delete"](makeId(hoveredObj));
                    if (instance != null && instance.eventCount) {
                        var handlers = instance.handlers;
                        // Clear out intersects, they are outdated by now
                        var data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, hoveredObj), {
                            intersections: intersections
                        });
                        handlers.onPointerOut == null ? void 0 : handlers.onPointerOut(data);
                        handlers.onPointerLeave == null ? void 0 : handlers.onPointerLeave(data);
                    }
                }
            };
            for(var _iterator = internal.hovered.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true)_loop();
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally{
            try {
                if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                    _iterator["return"]();
                }
            } finally{
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    }
    function pointerMissed(event, objects) {
        for(var i = 0; i < objects.length; i++){
            var instance = objects[i].__r3f;
            instance == null ? void 0 : instance.handlers.onPointerMissed == null ? void 0 : instance.handlers.onPointerMissed(event);
        }
    }
    function handlePointer(name) {
        // Deal with cancelation
        switch(name){
            case 'onPointerLeave':
            case 'onPointerCancel':
                return function() {
                    return cancelPointer([]);
                };
            case 'onLostPointerCapture':
                return function(event) {
                    var internal = store.getState().internal;
                    if ('pointerId' in event && internal.capturedMap.has(event.pointerId)) {
                        // If the object event interface had onLostPointerCapture, we'd call it here on every
                        // object that's getting removed. We call it on the next frame because onLostPointerCapture
                        // fires before onPointerUp. Otherwise pointerUp would never be called if the event didn't
                        // happen in the object it originated from, leaving components in a in-between state.
                        requestAnimationFrame(function() {
                            // Only release if pointer-up didn't do it already
                            if (internal.capturedMap.has(event.pointerId)) {
                                internal.capturedMap["delete"](event.pointerId);
                                cancelPointer([]);
                            }
                        });
                    }
                };
        }
        // Any other pointer goes here ...
        return function handleEvent(event) {
            var _store_getState = store.getState(), onPointerMissed = _store_getState.onPointerMissed, internal = _store_getState.internal;
            // prepareRay(event)
            internal.lastEvent.current = event;
            // Get fresh intersects
            var isPointerMove = name === 'onPointerMove';
            var isClickEvent = name === 'onClick' || name === 'onContextMenu' || name === 'onDoubleClick';
            var filter = isPointerMove ? filterPointerEvents : undefined;
            var hits = intersect(event, filter);
            var delta = isClickEvent ? calculateDistance(event) : 0;
            // Save initial coordinates on pointer-down
            if (name === 'onPointerDown') {
                internal.initialClick = [
                    event.offsetX,
                    event.offsetY
                ];
                internal.initialHits = hits.map(function(hit) {
                    return hit.eventObject;
                });
            }
            // If a click yields no results, pass it back to the user as a miss
            // Missed events have to come first in order to establish user-land side-effect clean up
            if (isClickEvent && !hits.length) {
                if (delta <= 2) {
                    pointerMissed(event, internal.interaction);
                    if (onPointerMissed) onPointerMissed(event);
                }
            }
            // Take care of unhover
            if (isPointerMove) cancelPointer(hits);
            function onIntersect(data) {
                var eventObject = data.eventObject;
                var instance = eventObject.__r3f;
                // Check presence of handlers
                if (!(instance != null && instance.eventCount)) return;
                var handlers = instance.handlers;
                /*
        MAYBE TODO, DELETE IF NOT: 
          Check if the object is captured, captured events should not have intersects running in parallel
          But wouldn't it be better to just replace capturedMap with a single entry?
          Also, are we OK with straight up making picking up multiple objects impossible?
          
        const pointerId = (data as ThreeEvent<PointerEvent>).pointerId        
        if (pointerId !== undefined) {
          const capturedMeshSet = internal.capturedMap.get(pointerId)
          if (capturedMeshSet) {
            const captured = capturedMeshSet.get(eventObject)
            if (captured && captured.localState.stopped) return
          }
        }*/ if (isPointerMove) {
                    // Move event ...
                    if (handlers.onPointerOver || handlers.onPointerEnter || handlers.onPointerOut || handlers.onPointerLeave) {
                        // When enter or out is present take care of hover-state
                        var id = makeId(data);
                        var hoveredItem = internal.hovered.get(id);
                        if (!hoveredItem) {
                            // If the object wasn't previously hovered, book it and call its handler
                            internal.hovered.set(id, data);
                            handlers.onPointerOver == null ? void 0 : handlers.onPointerOver(data);
                            handlers.onPointerEnter == null ? void 0 : handlers.onPointerEnter(data);
                        } else if (hoveredItem.stopped) {
                            // If the object was previously hovered and stopped, we shouldn't allow other items to proceed
                            data.stopPropagation();
                        }
                    }
                    // Call mouse move
                    handlers.onPointerMove == null ? void 0 : handlers.onPointerMove(data);
                } else {
                    // All other events ...
                    var handler = handlers[name];
                    if (handler) {
                        // Forward all events back to their respective handlers with the exception of click events,
                        // which must use the initial target
                        if (!isClickEvent || internal.initialHits.includes(eventObject)) {
                            // Missed events have to come first
                            pointerMissed(event, internal.interaction.filter(function(object) {
                                return !internal.initialHits.includes(object);
                            }));
                            // Now call the handler
                            handler(data);
                        }
                    } else {
                        // Trigger onPointerMissed on all elements that have pointer over/out handlers, but not click and weren't hit
                        if (isClickEvent && internal.initialHits.includes(eventObject)) {
                            pointerMissed(event, internal.interaction.filter(function(object) {
                                return !internal.initialHits.includes(object);
                            }));
                        }
                    }
                }
            }
            handleIntersects(hits, event, delta, onIntersect);
        };
    }
    return {
        handlePointer: handlePointer
    };
}
var isRenderer = function(def) {
    return !!(def != null && def.render);
};
var context = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null);
var createStore = function(invalidate, advance) {
    var rootStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$zustand$2f$esm$2f$traditional$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWithEqualityFn"])(function(set, get) {
        var getCurrentViewport = function getCurrentViewport() {
            var camera = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : get().camera, target = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : defaultTarget, size = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : get().size;
            var _tempTarget;
            var width = size.width, height = size.height, top = size.top, left = size.left;
            var aspect = width / height;
            if (target.isVector3) tempTarget.copy(target);
            else (_tempTarget = tempTarget).set.apply(_tempTarget, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target));
            var distance = camera.getWorldPosition(position).distanceTo(tempTarget);
            if (isOrthographicCamera(camera)) {
                return {
                    width: width / camera.zoom,
                    height: height / camera.zoom,
                    top: top,
                    left: left,
                    factor: 1,
                    distance: distance,
                    aspect: aspect
                };
            } else {
                var fov = camera.fov * Math.PI / 180; // convert vertical fov to radians
                var h = 2 * Math.tan(fov / 2) * distance; // visible height
                var w = h * (width / height);
                return {
                    width: w,
                    height: h,
                    top: top,
                    left: left,
                    factor: width / w,
                    distance: distance,
                    aspect: aspect
                };
            }
        };
        var position = new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        var defaultTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        var tempTarget = new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"]();
        var performanceTimeout = undefined;
        var setPerformanceCurrent = function(current) {
            return set(function(state) {
                return {
                    performance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.performance), {
                        current: current
                    })
                };
            });
        };
        var pointer = new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        var rootState = {
            set: set,
            get: get,
            // Mock objects that have to be configured
            gl: null,
            camera: null,
            raycaster: null,
            events: {
                priority: 1,
                enabled: true,
                connected: false
            },
            scene: null,
            xr: null,
            invalidate: function() {
                var frames = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
                return invalidate(get(), frames);
            },
            advance: function(timestamp, runGlobalEffects) {
                return advance(timestamp, runGlobalEffects, get());
            },
            legacy: false,
            linear: false,
            flat: false,
            controls: null,
            clock: new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Clock"](),
            pointer: pointer,
            mouse: pointer,
            frameloop: 'always',
            onPointerMissed: undefined,
            performance: {
                current: 1,
                min: 0.5,
                max: 1,
                debounce: 200,
                regress: function() {
                    var state = get();
                    // Clear timeout
                    if (performanceTimeout) clearTimeout(performanceTimeout);
                    // Set lower bound performance
                    if (state.performance.current !== state.performance.min) setPerformanceCurrent(state.performance.min);
                    // Go back to upper bound performance after a while unless something regresses meanwhile
                    performanceTimeout = setTimeout(function() {
                        return setPerformanceCurrent(get().performance.max);
                    }, state.performance.debounce);
                }
            },
            size: {
                width: 0,
                height: 0,
                top: 0,
                left: 0
            },
            viewport: {
                initialDpr: 0,
                dpr: 0,
                width: 0,
                height: 0,
                top: 0,
                left: 0,
                aspect: 0,
                distance: 0,
                factor: 0,
                getCurrentViewport: getCurrentViewport
            },
            setEvents: function(events) {
                return set(function(state) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state), {
                        events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.events, events)
                    });
                });
            },
            setSize: function(width, height) {
                var top = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, left = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
                var camera = get().camera;
                var size = {
                    width: width,
                    height: height,
                    top: top,
                    left: left
                };
                set(function(state) {
                    return {
                        size: size,
                        viewport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.viewport, getCurrentViewport(camera, defaultTarget, size))
                    };
                });
            },
            setDpr: function(dpr) {
                return set(function(state) {
                    var resolved = calculateDpr(dpr);
                    return {
                        viewport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.viewport), {
                            dpr: resolved,
                            initialDpr: state.viewport.initialDpr || resolved
                        })
                    };
                });
            },
            setFrameloop: function() {
                var frameloop = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 'always';
                var clock = get().clock;
                // if frameloop === "never" clock.elapsedTime is updated using advance(timestamp)
                clock.stop();
                clock.elapsedTime = 0;
                if (frameloop !== 'never') {
                    clock.start();
                    clock.elapsedTime = 0;
                }
                set(function() {
                    return {
                        frameloop: frameloop
                    };
                });
            },
            previousRoot: undefined,
            internal: {
                // Events
                interaction: [],
                hovered: new Map(),
                subscribers: [],
                initialClick: [
                    0,
                    0
                ],
                initialHits: [],
                capturedMap: new Map(),
                lastEvent: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createRef(),
                // Updates
                active: false,
                frames: 0,
                priority: 0,
                subscribe: function(ref, priority, store) {
                    var internal = get().internal;
                    // If this subscription was given a priority, it takes rendering into its own hands
                    // For that reason we switch off automatic rendering and increase the manual flag
                    // As long as this flag is positive there can be no internal rendering at all
                    // because there could be multiple render subscriptions
                    internal.priority = internal.priority + (priority > 0 ? 1 : 0);
                    internal.subscribers.push({
                        ref: ref,
                        priority: priority,
                        store: store
                    });
                    // Register subscriber and sort layers from lowest to highest, meaning,
                    // highest priority renders last (on top of the other frames)
                    internal.subscribers = internal.subscribers.sort(function(a, b) {
                        return a.priority - b.priority;
                    });
                    return function() {
                        var internal = get().internal;
                        if (internal != null && internal.subscribers) {
                            // Decrease manual flag if this subscription had a priority
                            internal.priority = internal.priority - (priority > 0 ? 1 : 0);
                            // Remove subscriber from list
                            internal.subscribers = internal.subscribers.filter(function(s) {
                                return s.ref !== ref;
                            });
                        }
                    };
                }
            }
        };
        return rootState;
    });
    var state = rootStore.getState();
    var oldSize = state.size;
    var oldDpr = state.viewport.dpr;
    var oldCamera = state.camera;
    rootStore.subscribe(function() {
        var _rootStore_getState = rootStore.getState(), camera = _rootStore_getState.camera, size = _rootStore_getState.size, viewport = _rootStore_getState.viewport, gl = _rootStore_getState.gl, set = _rootStore_getState.set;
        // Resize camera and renderer on changes to size and pixelratio
        if (size.width !== oldSize.width || size.height !== oldSize.height || viewport.dpr !== oldDpr) {
            oldSize = size;
            oldDpr = viewport.dpr;
            // Update camera & renderer
            updateCamera(camera, size);
            if (viewport.dpr > 0) gl.setPixelRatio(viewport.dpr);
            var updateStyle = typeof HTMLCanvasElement !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(gl.domElement, HTMLCanvasElement);
            gl.setSize(size.width, size.height, updateStyle);
        }
        // Update viewport once the camera changes
        if (camera !== oldCamera) {
            oldCamera = camera;
            // Update viewport
            set(function(state) {
                return {
                    viewport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.viewport, state.viewport.getCurrentViewport(camera))
                };
            });
        }
    });
    // Invalidate on any change
    rootStore.subscribe(function(state) {
        return invalidate(state);
    });
    // Return root state
    return rootStore;
};
/**
 * Exposes an object's {@link Instance}.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#useInstanceHandle
 *
 * **Note**: this is an escape hatch to react-internal fields. Expect this to change significantly between versions.
 */ function useInstanceHandle(ref) {
    var instance = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useRef(null);
    __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useImperativeHandle(instance, {
        "useInstanceHandle.useImperativeHandle": function() {
            return ref.current.__r3f;
        }
    }["useInstanceHandle.useImperativeHandle"], [
        ref
    ]);
    return instance;
}
/**
 * Returns the R3F Canvas' Zustand store. Useful for [transient updates](https://github.com/pmndrs/zustand#transient-updates-for-often-occurring-state-changes).
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usestore
 */ function useStore() {
    var store = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useContext(context);
    if (!store) throw new Error('R3F: Hooks can only be used within the Canvas component!');
    return store;
}
/**
 * Accesses R3F's internal state, containing renderer, canvas, scene, etc.
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usethree
 */ function useThree() {
    var selector = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(state) {
        return state;
    }, equalityFn = arguments.length > 1 ? arguments[1] : void 0;
    return useStore()(selector, equalityFn);
}
/**
 * Executes a callback before render in a shared frame loop.
 * Can order effects with render priority or manually render with a positive priority.
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useframe
 */ function useFrame(callback) {
    var renderPriority = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var store = useStore();
    var subscribe = store.getState().internal.subscribe;
    // Memoize ref
    var ref = useMutableCallback(callback);
    // Subscribe on mount, unsubscribe on unmount
    useIsomorphicLayoutEffect({
        "useFrame.useIsomorphicLayoutEffect": function() {
            return subscribe(ref, renderPriority, store);
        }
    }["useFrame.useIsomorphicLayoutEffect"], [
        renderPriority,
        subscribe,
        store
    ]);
    return null;
}
/**
 * Returns a node graph of an object with named nodes & materials.
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#usegraph
 */ function useGraph(object) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "useGraph.useMemo": function() {
            return buildGraph(object);
        }
    }["useGraph.useMemo"], [
        object
    ]);
}
var memoizedLoaders = new WeakMap();
var isConstructor$1 = function(value) {
    var _value$prototype;
    return typeof value === 'function' && (value == null ? void 0 : (_value$prototype = value.prototype) == null ? void 0 : _value$prototype.constructor) === value;
};
function loadingFn(extensions, onProgress) {
    return function(Proto) {
        for(var _len = arguments.length, input = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
            input[_key - 1] = arguments[_key];
        }
        var loader;
        // Construct and cache loader if constructor was passed
        if (isConstructor$1(Proto)) {
            loader = memoizedLoaders.get(Proto);
            if (!loader) {
                loader = new Proto();
                memoizedLoaders.set(Proto, loader);
            }
        } else {
            loader = Proto;
        }
        // Apply loader extensions
        if (extensions) extensions(loader);
        // Go through the urls and load them
        return Promise.all(input.map(function(input) {
            return new Promise(function(res, reject) {
                return loader.load(input, function(data) {
                    if (isObject3D(data == null ? void 0 : data.scene)) Object.assign(data, buildGraph(data.scene));
                    res(data);
                }, onProgress, function(error) {
                    return reject(new Error("Could not load ".concat(input, ": ").concat(error == null ? void 0 : error.message)));
                });
            });
        }));
    };
}
/**
 * Synchronously loads and caches assets with a three loader.
 *
 * Note: this hook's caller must be wrapped with `React.Suspense`
 * @see https://docs.pmnd.rs/react-three-fiber/api/hooks#useloader
 */ function useLoader(loader, input, extensions, onProgress) {
    // Use suspense to load async assets
    var keys = Array.isArray(input) ? input : [
        input
    ];
    var results = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["suspend"])(loadingFn(extensions, onProgress), [
        loader
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(keys)), {
        equal: is.equ
    });
    // Return the object(s)
    return Array.isArray(input) ? results : results[0];
}
/**
 * Preloads an asset into cache as a side-effect.
 */ useLoader.preload = function(loader, input, extensions) {
    var keys = Array.isArray(input) ? input : [
        input
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preload"])(loadingFn(extensions), [
        loader
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(keys)));
};
/**
 * Removes a loaded asset from cache.
 */ useLoader.clear = function(loader, input) {
    var keys = Array.isArray(input) ? input : [
        input
    ];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$suspend$2d$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clear"])([
        loader
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(keys)));
};
var packageData = {
    name: "@react-three/fiber",
    version: "9.4.2",
    description: "A React renderer for Threejs",
    keywords: [
        "react",
        "renderer",
        "fiber",
        "three",
        "threejs"
    ],
    author: "Paul Henschel (https://github.com/drcmda)",
    license: "MIT",
    maintainers: [
        "Josh Ellis (https://github.com/joshuaellis)",
        "Cody Bennett (https://github.com/codyjasonbennett)",
        "Kris Baumgarter (https://github.com/krispya)"
    ],
    bugs: {
        url: "https://github.com/pmndrs/react-three-fiber/issues"
    },
    homepage: "https://github.com/pmndrs/react-three-fiber#readme",
    repository: {
        type: "git",
        url: "git+https://github.com/pmndrs/react-three-fiber.git"
    },
    collective: {
        type: "opencollective",
        url: "https://opencollective.com/react-three-fiber"
    },
    main: "dist/react-three-fiber.cjs.js",
    module: "dist/react-three-fiber.esm.js",
    types: "dist/react-three-fiber.cjs.d.ts",
    "react-native": "native/dist/react-three-fiber-native.cjs.js",
    sideEffects: false,
    preconstruct: {
        entrypoints: [
            "index.tsx",
            "native.tsx"
        ]
    },
    scripts: {
        prebuild: "cp ../../readme.md readme.md"
    },
    dependencies: {
        "@babel/runtime": "^7.17.8",
        "@types/react-reconciler": "^0.32.0",
        "@types/webxr": "*",
        "base64-js": "^1.5.1",
        buffer: "^6.0.3",
        "its-fine": "^2.0.0",
        "react-reconciler": "^0.31.0",
        "react-use-measure": "^2.1.7",
        scheduler: "^0.25.0",
        "suspend-react": "^0.1.3",
        "use-sync-external-store": "^1.4.0",
        zustand: "^5.0.3"
    },
    peerDependencies: {
        expo: ">=43.0",
        "expo-asset": ">=8.4",
        "expo-file-system": ">=11.0",
        "expo-gl": ">=11.0",
        react: "^19.0.0",
        "react-dom": "^19.0.0",
        "react-native": ">=0.78",
        three: ">=0.156"
    },
    peerDependenciesMeta: {
        "react-dom": {
            optional: true
        },
        "react-native": {
            optional: true
        },
        expo: {
            optional: true
        },
        "expo-asset": {
            optional: true
        },
        "expo-file-system": {
            optional: true
        },
        "expo-gl": {
            optional: true
        }
    }
};
function createReconciler(config) {
    var reconciler = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$reconciler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config);
    // @ts-ignore DefinitelyTyped is not up to date
    reconciler.injectIntoDevTools();
    return reconciler;
}
var NoEventPriority = 0;
// TODO: handle constructor overloads
// https://github.com/pmndrs/react-three-fiber/pull/2931
// https://github.com/microsoft/TypeScript/issues/37079
var catalogue = {};
var PREFIX_REGEX = /^three(?=[A-Z])/;
var toPascalCase = function(type) {
    return "".concat(type[0].toUpperCase()).concat(type.slice(1));
};
var i = 0;
var isConstructor = function(object) {
    return typeof object === 'function';
};
function extend(objects) {
    if (isConstructor(objects)) {
        var Component = "".concat(i++);
        catalogue[Component] = objects;
        return Component;
    } else {
        Object.assign(catalogue, objects);
    }
}
function validateInstance(type, props) {
    // Get target from catalogue
    var name = toPascalCase(type);
    var target = catalogue[name];
    // Validate element target
    if (type !== 'primitive' && !target) throw new Error("R3F: ".concat(name, " is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively"));
    // Validate primitives
    if (type === 'primitive' && !props.object) throw new Error("R3F: Primitives without 'object' are invalid!");
    // Throw if an object or literal was passed for args
    if (props.args !== undefined && !Array.isArray(props.args)) throw new Error('R3F: The args prop must be an array!');
}
function createInstance(type, props, root) {
    var _props$object;
    // Remove three* prefix from elements if native element not present
    type = toPascalCase(type) in catalogue ? type : type.replace(PREFIX_REGEX, '');
    validateInstance(type, props);
    // Regenerate the R3F instance for primitives to simulate a new object
    if (type === 'primitive' && (_props$object = props.object) != null && _props$object.__r3f) delete props.object.__r3f;
    return prepare(props.object, root, type, props);
}
function hideInstance(instance) {
    if (!instance.isHidden) {
        var _instance$parent;
        if (instance.props.attach && (_instance$parent = instance.parent) != null && _instance$parent.object) {
            detach(instance.parent, instance);
        } else if (isObject3D(instance.object)) {
            instance.object.visible = false;
        }
        instance.isHidden = true;
        invalidateInstance(instance);
    }
}
function unhideInstance(instance) {
    if (instance.isHidden) {
        var _instance$parent2;
        if (instance.props.attach && (_instance$parent2 = instance.parent) != null && _instance$parent2.object) {
            attach(instance.parent, instance);
        } else if (isObject3D(instance.object) && instance.props.visible !== false) {
            instance.object.visible = true;
        }
        instance.isHidden = false;
        invalidateInstance(instance);
    }
}
// https://github.com/facebook/react/issues/20271
// This will make sure events and attach are only handled once when trees are complete
function handleContainerEffects(parent, child, beforeChild) {
    // Bail if tree isn't mounted or parent is not a container.
    // This ensures that the tree is finalized and React won't discard results to Suspense
    var state = child.root.getState();
    if (!parent.parent && parent.object !== state.scene) return;
    // Create & link object on first run
    if (!child.object) {
        var _child$props$object, _child$props$args;
        // Get target from catalogue
        var target = catalogue[toPascalCase(child.type)];
        // Create object
        child.object = (_child$props$object = child.props.object) != null ? _child$props$object : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((_child$props$args = child.props.args) != null ? _child$props$args : []));
        child.object.__r3f = child;
    }
    // Set initial props
    applyProps(child.object, child.props);
    // Append instance
    if (child.props.attach) {
        attach(parent, child);
    } else if (isObject3D(child.object) && isObject3D(parent.object)) {
        var childIndex = parent.object.children.indexOf(beforeChild == null ? void 0 : beforeChild.object);
        if (beforeChild && childIndex !== -1) {
            // If the child is already in the parent's children array, move it to the new position
            // Otherwise, just insert it at the target position
            var existingIndex = parent.object.children.indexOf(child.object);
            if (existingIndex !== -1) {
                parent.object.children.splice(existingIndex, 1);
                var adjustedIndex = existingIndex < childIndex ? childIndex - 1 : childIndex;
                parent.object.children.splice(adjustedIndex, 0, child.object);
            } else {
                child.object.parent = parent.object;
                parent.object.children.splice(childIndex, 0, child.object);
                child.object.dispatchEvent({
                    type: 'added'
                });
                parent.object.dispatchEvent({
                    type: 'childadded',
                    child: child.object
                });
            }
        } else {
            parent.object.add(child.object);
        }
    }
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Link subtree
        for(var _iterator = child.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var childInstance = _step.value;
            handleContainerEffects(child, childInstance);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    // Tree was updated, request a frame
    invalidateInstance(child);
}
function appendChild(parent, child) {
    if (!child) return;
    // Link instances
    child.parent = parent;
    parent.children.push(child);
    // Attach tree once complete
    handleContainerEffects(parent, child);
}
function insertBefore(parent, child, beforeChild) {
    if (!child || !beforeChild) return;
    // Link instances
    child.parent = parent;
    var childIndex = parent.children.indexOf(beforeChild);
    if (childIndex !== -1) parent.children.splice(childIndex, 0, child);
    else parent.children.push(child);
    // Attach tree once complete
    handleContainerEffects(parent, child, beforeChild);
}
function disposeOnIdle(object) {
    if (typeof object.dispose === 'function') {
        var handleDispose = function() {
            try {
                object.dispose();
            } catch (e) {
            // no-op
            }
        };
        // In a testing environment, cleanup immediately
        if (typeof IS_REACT_ACT_ENVIRONMENT !== 'undefined') handleDispose();
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_scheduleCallback"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["unstable_IdlePriority"], handleDispose);
    }
}
function removeChild(parent, child, dispose) {
    if (!child) return;
    // Unlink instances
    child.parent = null;
    var childIndex = parent.children.indexOf(child);
    if (childIndex !== -1) parent.children.splice(childIndex, 1);
    // Eagerly tear down tree
    if (child.props.attach) {
        detach(parent, child);
    } else if (isObject3D(child.object) && isObject3D(parent.object)) {
        parent.object.remove(child.object);
        removeInteractivity(findInitialRoot(child), child.object);
    }
    // Allow objects to bail out of unmount disposal with dispose={null}
    var shouldDispose = child.props.dispose !== null && dispose !== false;
    // Recursively remove instance children
    for(var i = child.children.length - 1; i >= 0; i--){
        var node = child.children[i];
        removeChild(child, node, shouldDispose);
    }
    child.children.length = 0;
    // Unlink instance object
    delete child.object.__r3f;
    // Dispose object whenever the reconciler feels like it.
    // Never dispose of primitives because their state may be kept outside of React!
    // In order for an object to be able to dispose it
    //   - has a dispose method
    //   - cannot be a <primitive object={...} />
    //   - cannot be a THREE.Scene, because three has broken its own API
    if (shouldDispose && child.type !== 'primitive' && child.object.type !== 'Scene') {
        disposeOnIdle(child.object);
    }
    // Tree was updated, request a frame for top-level instance
    if (dispose === undefined) invalidateInstance(child);
}
function setFiberRef(fiber, publicInstance) {
    for(var _i = 0, _iter = [
        fiber,
        fiber.alternate
    ]; _i < _iter.length; _i++){
        var _fiber = _iter[_i];
        if (_fiber !== null) {
            if (typeof _fiber.ref === 'function') {
                _fiber.refCleanup == null ? void 0 : _fiber.refCleanup();
                var cleanup = _fiber.ref(publicInstance);
                if (typeof cleanup === 'function') _fiber.refCleanup = cleanup;
            } else if (_fiber.ref) {
                _fiber.ref.current = publicInstance;
            }
        }
    }
}
var reconstructed = [];
function swapInstances() {
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        // Detach instance
        for(var _iterator = reconstructed[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var _step_value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_step.value, 1), instance = _step_value[0];
            var parent = instance.parent;
            if (parent) {
                if (instance.props.attach) {
                    detach(parent, instance);
                } else if (isObject3D(instance.object) && isObject3D(parent.object)) {
                    parent.object.remove(instance.object);
                }
                var _iteratorNormalCompletion1 = true, _didIteratorError1 = false, _iteratorError1 = undefined;
                try {
                    for(var _iterator1 = instance.children[Symbol.iterator](), _step1; !(_iteratorNormalCompletion1 = (_step1 = _iterator1.next()).done); _iteratorNormalCompletion1 = true){
                        var child = _step1.value;
                        if (child.props.attach) {
                            detach(instance, child);
                        } else if (isObject3D(child.object) && isObject3D(instance.object)) {
                            instance.object.remove(child.object);
                        }
                    }
                } catch (err) {
                    _didIteratorError1 = true;
                    _iteratorError1 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion1 && _iterator1["return"] != null) {
                            _iterator1["return"]();
                        }
                    } finally{
                        if (_didIteratorError1) {
                            throw _iteratorError1;
                        }
                    }
                }
            }
            // If the old instance is hidden, we need to unhide it.
            // React assumes it can discard instances since they're pure for DOM.
            // This isn't true for us since our lifetimes are impure and longliving.
            // So, we manually check if an instance was hidden and unhide it.
            if (instance.isHidden) unhideInstance(instance);
            // Dispose of old object if able
            if (instance.object.__r3f) delete instance.object.__r3f;
            if (instance.type !== 'primitive') disposeOnIdle(instance.object);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    var _iteratorNormalCompletion2 = true, _didIteratorError2 = false, _iteratorError2 = undefined;
    try {
        // Update instance
        for(var _iterator2 = reconstructed[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true){
            var _step_value1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_step2.value, 3), instance1 = _step_value1[0], props = _step_value1[1], fiber = _step_value1[2];
            instance1.props = props;
            var parent1 = instance1.parent;
            if (parent1) {
                var _instance$props$objec, _instance$props$args;
                // Get target from catalogue
                var target = catalogue[toPascalCase(instance1.type)];
                // Create object
                instance1.object = (_instance$props$objec = instance1.props.object) != null ? _instance$props$objec : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_construct$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(target, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((_instance$props$args = instance1.props.args) != null ? _instance$props$args : []));
                instance1.object.__r3f = instance1;
                setFiberRef(fiber, instance1.object);
                // Set initial props
                applyProps(instance1.object, instance1.props);
                if (instance1.props.attach) {
                    attach(parent1, instance1);
                } else if (isObject3D(instance1.object) && isObject3D(parent1.object)) {
                    parent1.object.add(instance1.object);
                }
                var _iteratorNormalCompletion3 = true, _didIteratorError3 = false, _iteratorError3 = undefined;
                try {
                    for(var _iterator3 = instance1.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true){
                        var child1 = _step3.value;
                        if (child1.props.attach) {
                            attach(instance1, child1);
                        } else if (isObject3D(child1.object) && isObject3D(instance1.object)) {
                            instance1.object.add(child1.object);
                        }
                    }
                } catch (err) {
                    _didIteratorError3 = true;
                    _iteratorError3 = err;
                } finally{
                    try {
                        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
                            _iterator3["return"]();
                        }
                    } finally{
                        if (_didIteratorError3) {
                            throw _iteratorError3;
                        }
                    }
                }
                // Tree was updated, request a frame
                invalidateInstance(instance1);
            }
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
            }
        } finally{
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
    reconstructed.length = 0;
}
// Don't handle text instances, make it no-op
var handleTextInstance = function() {};
var NO_CONTEXT = {};
var currentUpdatePriority = NoEventPriority;
// https://github.com/facebook/react/blob/main/packages/react-reconciler/src/ReactFiberFlags.js
var NoFlags = 0;
var Update = 4;
var reconciler = /* @__PURE__ */ createReconciler({
    isPrimaryRenderer: false,
    warnsIfNotActing: false,
    supportsMutation: true,
    supportsPersistence: false,
    supportsHydration: false,
    createInstance: createInstance,
    removeChild: removeChild,
    appendChild: appendChild,
    appendInitialChild: appendChild,
    insertBefore: insertBefore,
    appendChildToContainer: function appendChildToContainer(container, child) {
        var scene = container.getState().scene.__r3f;
        if (!child || !scene) return;
        appendChild(scene, child);
    },
    removeChildFromContainer: function removeChildFromContainer(container, child) {
        var scene = container.getState().scene.__r3f;
        if (!child || !scene) return;
        removeChild(scene, child);
    },
    insertInContainerBefore: function insertInContainerBefore(container, child, beforeChild) {
        var scene = container.getState().scene.__r3f;
        if (!child || !beforeChild || !scene) return;
        insertBefore(scene, child, beforeChild);
    },
    getRootHostContext: function() {
        return NO_CONTEXT;
    },
    getChildHostContext: function() {
        return NO_CONTEXT;
    },
    commitUpdate: function commitUpdate(instance, type, oldProps, newProps, fiber) {
        var _newProps$args, _oldProps$args, _newProps$args2;
        validateInstance(type, newProps);
        var reconstruct = false;
        // Reconstruct primitives if object prop changes
        if (instance.type === 'primitive' && oldProps.object !== newProps.object) reconstruct = true;
        else if (((_newProps$args = newProps.args) == null ? void 0 : _newProps$args.length) !== ((_oldProps$args = oldProps.args) == null ? void 0 : _oldProps$args.length)) reconstruct = true;
        else if ((_newProps$args2 = newProps.args) != null && _newProps$args2.some(function(value, index) {
            var _oldProps$args2;
            return value !== ((_oldProps$args2 = oldProps.args) == null ? void 0 : _oldProps$args2[index]);
        })) reconstruct = true;
        // Reconstruct when args or <primitive object={...} have changes
        if (reconstruct) {
            reconstructed.push([
                instance,
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, newProps),
                fiber
            ]);
        } else {
            // Create a diff-set, flag if there are any changes
            var changedProps = diffProps(instance, newProps);
            if (Object.keys(changedProps).length) {
                Object.assign(instance.props, changedProps);
                applyProps(instance.object, changedProps);
            }
        }
        // Flush reconstructed siblings when we hit the last updated child in a sequence
        var isTailSibling = fiber.sibling === null || (fiber.flags & Update) === NoFlags;
        if (isTailSibling) swapInstances();
    },
    finalizeInitialChildren: function() {
        return false;
    },
    commitMount: function commitMount() {},
    getPublicInstance: function(instance) {
        return instance == null ? void 0 : instance.object;
    },
    prepareForCommit: function() {
        return null;
    },
    preparePortalMount: function(container) {
        return prepare(container.getState().scene, container, '', {});
    },
    resetAfterCommit: function() {},
    shouldSetTextContent: function() {
        return false;
    },
    clearContainer: function() {
        return false;
    },
    hideInstance: hideInstance,
    unhideInstance: unhideInstance,
    createTextInstance: handleTextInstance,
    hideTextInstance: handleTextInstance,
    unhideTextInstance: handleTextInstance,
    scheduleTimeout: typeof setTimeout === 'function' ? setTimeout : undefined,
    cancelTimeout: typeof clearTimeout === 'function' ? clearTimeout : undefined,
    noTimeout: -1,
    getInstanceFromNode: function() {
        return null;
    },
    beforeActiveInstanceBlur: function beforeActiveInstanceBlur() {},
    afterActiveInstanceBlur: function afterActiveInstanceBlur() {},
    detachDeletedInstance: function detachDeletedInstance() {},
    prepareScopeUpdate: function prepareScopeUpdate() {},
    getInstanceFromScope: function() {
        return null;
    },
    shouldAttemptEagerTransition: function() {
        return false;
    },
    trackSchedulerEvent: function() {},
    resolveEventType: function() {
        return null;
    },
    resolveEventTimeStamp: function() {
        return -1.1;
    },
    requestPostPaintCallback: function requestPostPaintCallback() {},
    maySuspendCommit: function() {
        return false;
    },
    preloadInstance: function() {
        return true;
    },
    // true indicates already loaded
    startSuspendingCommit: function startSuspendingCommit() {},
    suspendInstance: function suspendInstance() {},
    waitForCommitToBeReady: function() {
        return null;
    },
    NotPendingTransition: null,
    // The reconciler types use the internal ReactContext with all the hidden properties
    // so we have to cast from the public React.Context type
    HostTransitionContext: /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.createContext(null),
    setCurrentUpdatePriority: function setCurrentUpdatePriority(newPriority) {
        currentUpdatePriority = newPriority;
    },
    getCurrentUpdatePriority: function getCurrentUpdatePriority() {
        return currentUpdatePriority;
    },
    resolveUpdatePriority: function resolveUpdatePriority() {
        var _window$event;
        if (currentUpdatePriority !== NoEventPriority) return currentUpdatePriority;
        switch(typeof window !== 'undefined' && ((_window$event = window.event) == null ? void 0 : _window$event.type)){
            case 'click':
            case 'contextmenu':
            case 'dblclick':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointerup':
                return __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DiscreteEventPriority"];
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerenter':
            case 'pointerleave':
            case 'wheel':
                return __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContinuousEventPriority"];
            default:
                return __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DefaultEventPriority"];
        }
    },
    resetFormInstance: function resetFormInstance() {},
    // @ts-ignore DefinitelyTyped is not up to date
    rendererPackageName: '@react-three/fiber',
    rendererVersion: packageData.version
});
var _roots = new Map();
var shallowLoose = {
    objects: 'shallow',
    strict: false
};
function computeInitialSize(canvas, size) {
    if (!size && typeof HTMLCanvasElement !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(canvas, HTMLCanvasElement) && canvas.parentElement) {
        var _canvas_parentElement_getBoundingClientRect = canvas.parentElement.getBoundingClientRect(), width = _canvas_parentElement_getBoundingClientRect.width, height = _canvas_parentElement_getBoundingClientRect.height, top = _canvas_parentElement_getBoundingClientRect.top, left = _canvas_parentElement_getBoundingClientRect.left;
        return {
            width: width,
            height: height,
            top: top,
            left: left
        };
    } else if (!size && typeof OffscreenCanvas !== 'undefined' && (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(canvas, OffscreenCanvas)) {
        return {
            width: canvas.width,
            height: canvas.height,
            top: 0,
            left: 0
        };
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        width: 0,
        height: 0,
        top: 0,
        left: 0
    }, size);
}
function createRoot(canvas) {
    // Check against mistaken use of createRoot
    var prevRoot = _roots.get(canvas);
    var prevFiber = prevRoot == null ? void 0 : prevRoot.fiber;
    var prevStore = prevRoot == null ? void 0 : prevRoot.store;
    if (prevRoot) console.warn('R3F.createRoot should only be called once!');
    // Report when an error was detected in a previous render
    // https://github.com/pmndrs/react-three-fiber/pull/2261
    var logRecoverableError = typeof reportError === 'function' ? // In modern browsers, reportError will dispatch an error event,
    // emulating an uncaught JavaScript error.
    reportError : // In older browsers and test environments, fallback to console.error.
    console.error;
    // Create store
    var store = prevStore || createStore(invalidate, advance);
    // Create renderer
    var fiber = prevFiber || reconciler.createContainer(store, // container
    __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ConcurrentRoot"], // tag
    null, // hydration callbacks
    false, // isStrictMode
    null, // concurrentUpdatesByDefaultOverride
    '', // identifierPrefix
    logRecoverableError, // onUncaughtError
    logRecoverableError, // onCaughtError
    logRecoverableError, // onRecoverableError
    null // transitionCallbacks
    );
    // Map it
    if (!prevRoot) _roots.set(canvas, {
        fiber: fiber,
        store: store
    });
    // Locals
    var onCreated;
    var lastCamera;
    var configured = false;
    var pending = null;
    return {
        configure: function configure() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(function() {
                var props, resolve, glConfig, propsSize, sceneOptions, events, onCreatedCallback, _props_shadows, shadows, _props_linear, linear, _props_flat, flat, _props_legacy, legacy, _props_orthographic, orthographic, _props_frameloop, frameloop, _props_dpr, dpr, performance, raycastOptions, cameraOptions, onPointerMissed, state, gl, defaultProps, customRenderer, _tmp, raycaster, _ref, params, options, isCamera, camera, scene, size, _gl$xr, handleXRFrame, handleSessionChange, xr, oldEnabled, oldType, _types$shadows, types;
                var _arguments = arguments;
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, function(_state) {
                    switch(_state.label){
                        case 0:
                            props = _arguments.length > 0 && _arguments[0] !== void 0 ? _arguments[0] : {};
                            pending = new Promise(function(_resolve) {
                                return resolve = _resolve;
                            });
                            glConfig = props.gl, propsSize = props.size, sceneOptions = props.scene, events = props.events, onCreatedCallback = props.onCreated, _props_shadows = props.shadows, shadows = _props_shadows === void 0 ? false : _props_shadows, _props_linear = props.linear, linear = _props_linear === void 0 ? false : _props_linear, _props_flat = props.flat, flat = _props_flat === void 0 ? false : _props_flat, _props_legacy = props.legacy, legacy = _props_legacy === void 0 ? false : _props_legacy, _props_orthographic = props.orthographic, orthographic = _props_orthographic === void 0 ? false : _props_orthographic, _props_frameloop = props.frameloop, frameloop = _props_frameloop === void 0 ? 'always' : _props_frameloop, _props_dpr = props.dpr, dpr = _props_dpr === void 0 ? [
                                1,
                                2
                            ] : _props_dpr, performance = props.performance, raycastOptions = props.raycaster, cameraOptions = props.camera, onPointerMissed = props.onPointerMissed;
                            state = store.getState();
                            // Set up renderer (one time only!)
                            gl = state.gl;
                            if (!!state.gl) return [
                                3,
                                4
                            ];
                            defaultProps = {
                                canvas: canvas,
                                powerPreference: 'high-performance',
                                antialias: true,
                                alpha: true
                            };
                            if (!(typeof glConfig === 'function')) return [
                                3,
                                2
                            ];
                            return [
                                4,
                                glConfig(defaultProps)
                            ];
                        case 1:
                            _tmp = _state.sent();
                            return [
                                3,
                                3
                            ];
                        case 2:
                            _tmp = glConfig;
                            _state.label = 3;
                        case 3:
                            customRenderer = _tmp;
                            if (isRenderer(customRenderer)) {
                                gl = customRenderer;
                            } else {
                                gl = new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, defaultProps, glConfig));
                            }
                            state.set({
                                gl: gl
                            });
                            _state.label = 4;
                        case 4:
                            // Set up raycaster (one time only!)
                            raycaster = state.raycaster;
                            if (!raycaster) state.set({
                                raycaster: raycaster = new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"]()
                            });
                            // Set raycaster options
                            _ref = raycastOptions || {}, params = _ref.params, options = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_ref, [
                                "params"
                            ]);
                            if (!is.equ(options, raycaster, shallowLoose)) applyProps(raycaster, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, options));
                            if (!is.equ(params, raycaster.params, shallowLoose)) applyProps(raycaster, {
                                params: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, raycaster.params, params)
                            });
                            // Create default camera, don't overwrite any user-set state
                            if (!state.camera || state.camera === lastCamera && !is.equ(lastCamera, cameraOptions, shallowLoose)) {
                                lastCamera = cameraOptions;
                                isCamera = cameraOptions == null ? void 0 : cameraOptions.isCamera;
                                camera = isCamera ? cameraOptions : orthographic ? new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrthographicCamera"](0, 0, 0, 0, 0.1, 1000) : new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](75, 0, 0.1, 1000);
                                if (!isCamera) {
                                    camera.position.z = 5;
                                    if (cameraOptions) {
                                        applyProps(camera, cameraOptions);
                                        // Preserve user-defined frustum if possible
                                        // https://github.com/pmndrs/react-three-fiber/issues/3160
                                        if (!camera.manual) {
                                            if ('aspect' in cameraOptions || 'left' in cameraOptions || 'right' in cameraOptions || 'bottom' in cameraOptions || 'top' in cameraOptions) {
                                                camera.manual = true;
                                                camera.updateProjectionMatrix();
                                            }
                                        }
                                    }
                                    // Always look at center by default
                                    if (!state.camera && !(cameraOptions != null && cameraOptions.rotation)) camera.lookAt(0, 0, 0);
                                }
                                state.set({
                                    camera: camera
                                });
                                // Configure raycaster
                                // https://github.com/pmndrs/react-xr/issues/300
                                raycaster.camera = camera;
                            }
                            // Set up scene (one time only!)
                            if (!state.scene) {
                                ;
                                if (sceneOptions != null && sceneOptions.isScene) {
                                    scene = sceneOptions;
                                    prepare(scene, store, '', {});
                                } else {
                                    scene = new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                                    prepare(scene, store, '', {});
                                    if (sceneOptions) applyProps(scene, sceneOptions);
                                }
                                state.set({
                                    scene: scene
                                });
                            }
                            // Store events internally
                            if (events && !state.events.handlers) state.set({
                                events: events(store)
                            });
                            // Check size, allow it to take on container bounds initially
                            size = computeInitialSize(canvas, propsSize);
                            if (!is.equ(size, state.size, shallowLoose)) {
                                state.setSize(size.width, size.height, size.top, size.left);
                            }
                            // Check pixelratio
                            if (dpr && state.viewport.dpr !== calculateDpr(dpr)) state.setDpr(dpr);
                            // Check frameloop
                            if (state.frameloop !== frameloop) state.setFrameloop(frameloop);
                            // Check pointer missed
                            if (!state.onPointerMissed) state.set({
                                onPointerMissed: onPointerMissed
                            });
                            // Check performance
                            if (performance && !is.equ(performance, state.performance, shallowLoose)) state.set(function(state) {
                                return {
                                    performance: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.performance, performance)
                                };
                            });
                            // Set up XR (one time only!)
                            if (!state.xr) {
                                ;
                                // Handle frame behavior in WebXR
                                handleXRFrame = function(timestamp, frame) {
                                    var state = store.getState();
                                    if (state.frameloop === 'never') return;
                                    advance(timestamp, true, state, frame);
                                };
                                // Toggle render switching on session
                                handleSessionChange = function() {
                                    var state = store.getState();
                                    state.gl.xr.enabled = state.gl.xr.isPresenting;
                                    state.gl.xr.setAnimationLoop(state.gl.xr.isPresenting ? handleXRFrame : null);
                                    if (!state.gl.xr.isPresenting) invalidate(state);
                                };
                                // WebXR session manager
                                xr = {
                                    connect: function connect() {
                                        var gl = store.getState().gl;
                                        gl.xr.addEventListener('sessionstart', handleSessionChange);
                                        gl.xr.addEventListener('sessionend', handleSessionChange);
                                    },
                                    disconnect: function disconnect() {
                                        var gl = store.getState().gl;
                                        gl.xr.removeEventListener('sessionstart', handleSessionChange);
                                        gl.xr.removeEventListener('sessionend', handleSessionChange);
                                    }
                                };
                                // Subscribe to WebXR session events
                                if (typeof ((_gl$xr = gl.xr) == null ? void 0 : _gl$xr.addEventListener) === 'function') xr.connect();
                                state.set({
                                    xr: xr
                                });
                            }
                            // Set shadowmap
                            if (gl.shadowMap) {
                                oldEnabled = gl.shadowMap.enabled;
                                oldType = gl.shadowMap.type;
                                gl.shadowMap.enabled = !!shadows;
                                if (is.boo(shadows)) {
                                    gl.shadowMap.type = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
                                } else if (is.str(shadows)) {
                                    ;
                                    types = {
                                        basic: __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BasicShadowMap"],
                                        percentage: __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFShadowMap"],
                                        soft: __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"],
                                        variance: __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VSMShadowMap"]
                                    };
                                    gl.shadowMap.type = (_types$shadows = types[shadows]) != null ? _types$shadows : __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PCFSoftShadowMap"];
                                } else if (is.obj(shadows)) {
                                    Object.assign(gl.shadowMap, shadows);
                                }
                                if (oldEnabled !== gl.shadowMap.enabled || oldType !== gl.shadowMap.type) gl.shadowMap.needsUpdate = true;
                            }
                            __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ColorManagement"].enabled = !legacy;
                            // Set color space and tonemapping preferences
                            if (!configured) {
                                gl.outputColorSpace = linear ? __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinearSRGBColorSpace"] : __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SRGBColorSpace"];
                                gl.toneMapping = flat ? __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NoToneMapping"] : __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"];
                            }
                            // Update color management state
                            if (state.legacy !== legacy) state.set(function() {
                                return {
                                    legacy: legacy
                                };
                            });
                            if (state.linear !== linear) state.set(function() {
                                return {
                                    linear: linear
                                };
                            });
                            if (state.flat !== flat) state.set(function() {
                                return {
                                    flat: flat
                                };
                            });
                            // Set gl props
                            if (glConfig && !is.fun(glConfig) && !isRenderer(glConfig) && !is.equ(glConfig, gl, shallowLoose)) applyProps(gl, glConfig);
                            // Set locals
                            onCreated = onCreatedCallback;
                            configured = true;
                            resolve();
                            return [
                                2,
                                this
                            ];
                    }
                });
            }).apply(this, arguments);
        },
        render: function render(children) {
            // The root has to be configured before it can be rendered
            if (!configured && !pending) this.configure();
            pending.then(function() {
                reconciler.updateContainer(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Provider, {
                    store: store,
                    children: children,
                    onCreated: onCreated,
                    rootElement: canvas
                }), fiber, null, function() {
                    return undefined;
                });
            });
            return store;
        },
        unmount: function unmount() {
            unmountComponentAtNode(canvas);
        }
    };
}
function Provider(param) {
    var store = param.store, children = param.children, onCreated = param.onCreated, rootElement = param.rootElement;
    useIsomorphicLayoutEffect({
        "Provider.useIsomorphicLayoutEffect": function() {
            var state = store.getState();
            // Flag the canvas active, rendering will now begin
            state.set({
                "Provider.useIsomorphicLayoutEffect": function(state) {
                    return {
                        internal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.internal), {
                            active: true
                        })
                    };
                }
            }["Provider.useIsomorphicLayoutEffect"]);
            // Notify that init is completed, the scene graph exists, but nothing has yet rendered
            if (onCreated) onCreated(state);
            // Connect events to the targets parent, this is done to ensure events are registered on
            // a shared target, and not on the canvas itself
            if (!store.getState().events.connected) state.events.connect == null ? void 0 : state.events.connect(rootElement);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Provider.useIsomorphicLayoutEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(context.Provider, {
        value: store,
        children: children
    });
}
function unmountComponentAtNode(canvas, callback) {
    var root = _roots.get(canvas);
    var fiber = root == null ? void 0 : root.fiber;
    if (fiber) {
        var state = root == null ? void 0 : root.store.getState();
        if (state) state.internal.active = false;
        reconciler.updateContainer(null, fiber, null, function() {
            if (state) {
                setTimeout(function() {
                    try {
                        var _state$gl, _state$gl$renderLists, _state$gl2, _state$gl3;
                        state.events.disconnect == null ? void 0 : state.events.disconnect();
                        (_state$gl = state.gl) == null ? void 0 : (_state$gl$renderLists = _state$gl.renderLists) == null ? void 0 : _state$gl$renderLists.dispose == null ? void 0 : _state$gl$renderLists.dispose();
                        (_state$gl2 = state.gl) == null ? void 0 : _state$gl2.forceContextLoss == null ? void 0 : _state$gl2.forceContextLoss();
                        if ((_state$gl3 = state.gl) != null && _state$gl3.xr) state.xr.disconnect();
                        dispose(state.scene);
                        _roots["delete"](canvas);
                        if (callback) callback(canvas);
                    } catch (e) {
                    /* ... */ }
                }, 500);
            }
        });
    }
}
function createPortal(children, container, state) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Portal, {
        children: children,
        container: container,
        state: state
    });
}
function Portal(param) {
    var _param_state = param.state, state = _param_state === void 0 ? {} : _param_state, children = param.children, container = param.container;
    /** This has to be a component because it would not be able to call useThree/useStore otherwise since
   *  if this is our environment, then we are not in r3f's renderer but in react-dom, it would trigger
   *  the "R3F hooks can only be used within the Canvas component!" warning:
   *  <Canvas>
   *    {createPortal(...)} */ var events = state.events, size = state.size, rest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(state, [
        "events",
        "size"
    ]);
    var previousRoot = useStore();
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "Portal._React_useState.useState": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Raycaster"]();
        }
    }["Portal._React_useState.useState"]), 1), raycaster = _React_useState[0];
    var _React_useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useState({
        "Portal._React_useState.useState": function() {
            return new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector2"]();
        }
    }["Portal._React_useState.useState"]), 1), pointer = _React_useState1[0];
    var inject = useMutableCallback({
        "Portal.useMutableCallback[inject]": function(rootState, injectState) {
            var viewport = undefined;
            if (injectState.camera && size) {
                var camera = injectState.camera;
                // Calculate the override viewport, if present
                viewport = rootState.viewport.getCurrentViewport(camera, new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Vector3"](), size);
                // Update the portal camera, if it differs from the previous layer
                if (camera !== rootState.camera) updateCamera(camera, size);
            }
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, rootState, injectState), {
                // Portals have their own scene, which forms the root, a raycaster and a pointer
                scene: container,
                raycaster: raycaster,
                pointer: pointer,
                mouse: pointer,
                // Their previous root is the layer before it
                previousRoot: previousRoot,
                // Events, size and viewport can be overridden by the inject layer
                events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, rootState.events, injectState.events, events),
                size: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, rootState.size, size),
                viewport: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, rootState.viewport, viewport),
                // Layers are allowed to override events
                setEvents: {
                    "Portal.useMutableCallback[inject]": function(events) {
                        return injectState.set({
                            "Portal.useMutableCallback[inject]": function(state) {
                                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state), {
                                    events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.events, events)
                                });
                            }
                        }["Portal.useMutableCallback[inject]"]);
                    }
                }["Portal.useMutableCallback[inject]"]
            });
        }
    }["Portal.useMutableCallback[inject]"]);
    var usePortalStore = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__.useMemo({
        "Portal.useMemo[usePortalStore]": function() {
            // Create a mirrored store, based on the previous root with a few overrides ...
            var store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$zustand$2f$esm$2f$traditional$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createWithEqualityFn"])({
                "Portal.useMemo[usePortalStore].store": function(set, get) {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, rest), {
                        set: set,
                        get: get
                    });
                }
            }["Portal.useMemo[usePortalStore].store"]);
            // Subscribe to previous root-state and copy changes over to the mirrored portal-state
            var onMutate = {
                "Portal.useMemo[usePortalStore].onMutate": function(prev) {
                    return store.setState({
                        "Portal.useMemo[usePortalStore].onMutate": function(state) {
                            return inject.current(prev, state);
                        }
                    }["Portal.useMemo[usePortalStore].onMutate"]);
                }
            }["Portal.useMemo[usePortalStore].onMutate"];
            onMutate(previousRoot.getState());
            previousRoot.subscribe(onMutate);
            return store;
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["Portal.useMemo[usePortalStore]"], [
        previousRoot,
        container
    ]);
    return(/*#__PURE__*/ // @ts-ignore, reconciler types are not maintained
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: reconciler.createPortal(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(context.Provider, {
            value: usePortalStore,
            children: children
        }), usePortalStore, null)
    }));
}
/**
 * Force React to flush any updates inside the provided callback synchronously and immediately.
 * All the same caveats documented for react-dom's `flushSync` apply here (see https://react.dev/reference/react-dom/flushSync).
 * Nevertheless, sometimes one needs to render synchronously, for example to keep DOM and 3D changes in lock-step without
 * having to revert to a non-React solution. Note: this will only flush updates within the `Canvas` root.
 */ function flushSync(fn) {
    // @ts-ignore - reconciler types are not maintained
    return reconciler.flushSyncFromReconciler(fn);
}
function createSubs(callback, subs) {
    var sub = {
        callback: callback
    };
    subs.add(sub);
    return function() {
        return void subs["delete"](sub);
    };
}
var globalEffects = new Set();
var globalAfterEffects = new Set();
var globalTailEffects = new Set();
/**
 * Adds a global render callback which is called each frame.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#addEffect
 */ var addEffect = function(callback) {
    return createSubs(callback, globalEffects);
};
/**
 * Adds a global after-render callback which is called each frame.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#addAfterEffect
 */ var addAfterEffect = function(callback) {
    return createSubs(callback, globalAfterEffects);
};
/**
 * Adds a global callback which is called when rendering stops.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#addTail
 */ var addTail = function(callback) {
    return createSubs(callback, globalTailEffects);
};
function run(effects, timestamp) {
    if (!effects.size) return;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = effects.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var callback = _step.value.callback;
            callback(timestamp);
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
}
function flushGlobalEffects(type, timestamp) {
    switch(type){
        case 'before':
            return run(globalEffects, timestamp);
        case 'after':
            return run(globalAfterEffects, timestamp);
        case 'tail':
            return run(globalTailEffects, timestamp);
    }
}
var subscribers;
var subscription;
function update(timestamp, state, frame) {
    // Run local effects
    var delta = state.clock.getDelta();
    // In frameloop='never' mode, clock times are updated using the provided timestamp
    if (state.frameloop === 'never' && typeof timestamp === 'number') {
        delta = timestamp - state.clock.elapsedTime;
        state.clock.oldTime = state.clock.elapsedTime;
        state.clock.elapsedTime = timestamp;
    }
    // Call subscribers (useFrame)
    subscribers = state.internal.subscribers;
    for(var i = 0; i < subscribers.length; i++){
        subscription = subscribers[i];
        subscription.ref.current(subscription.store.getState(), delta, frame);
    }
    // Render content
    if (!state.internal.priority && state.gl.render) state.gl.render(state.scene, state.camera);
    // Decrease frame count
    state.internal.frames = Math.max(0, state.internal.frames - 1);
    return state.frameloop === 'always' ? 1 : state.internal.frames;
}
var running = false;
var useFrameInProgress = false;
var repeat;
var frame;
var state;
function loop(timestamp) {
    frame = requestAnimationFrame(loop);
    running = true;
    repeat = 0;
    // Run effects
    flushGlobalEffects('before', timestamp);
    // Render all roots
    useFrameInProgress = true;
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    try {
        for(var _iterator = _roots.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var root = _step.value;
            var _state$gl$xr;
            state = root.store.getState();
            // If the frameloop is invalidated, do not run another frame
            if (state.internal.active && (state.frameloop === 'always' || state.internal.frames > 0) && !((_state$gl$xr = state.gl.xr) != null && _state$gl$xr.isPresenting)) {
                repeat += update(timestamp, state);
            }
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    useFrameInProgress = false;
    // Run after-effects
    flushGlobalEffects('after', timestamp);
    // Stop the loop if nothing invalidates it
    if (repeat === 0) {
        // Tail call effects, they are called when rendering stops
        flushGlobalEffects('tail', timestamp);
        // Flag end of operation
        running = false;
        return cancelAnimationFrame(frame);
    }
}
/**
 * Invalidates the view, requesting a frame to be rendered. Will globally invalidate unless passed a root's state.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#invalidate
 */ function invalidate(state) {
    var frames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
    var _state$gl$xr2;
    if (!state) return _roots.forEach(function(root) {
        return invalidate(root.store.getState(), frames);
    });
    if ((_state$gl$xr2 = state.gl.xr) != null && _state$gl$xr2.isPresenting || !state.internal.active || state.frameloop === 'never') return;
    if (frames > 1) {
        // legacy support for people using frames parameters
        // Increase frames, do not go higher than 60
        state.internal.frames = Math.min(60, state.internal.frames + frames);
    } else {
        if (useFrameInProgress) {
            //called from within a useFrame, it means the user wants an additional frame
            state.internal.frames = 2;
        } else {
            //the user need a new frame, no need to increment further than 1
            state.internal.frames = 1;
        }
    }
    // If the render-loop isn't active, start it
    if (!running) {
        running = true;
        requestAnimationFrame(loop);
    }
}
/**
 * Advances the frameloop and runs render effects, useful for when manually rendering via `frameloop="never"`.
 * @see https://docs.pmnd.rs/react-three-fiber/api/additional-exports#advance
 */ function advance(timestamp) {
    var runGlobalEffects = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, state = arguments.length > 2 ? arguments[2] : void 0, frame = arguments.length > 3 ? arguments[3] : void 0;
    if (runGlobalEffects) flushGlobalEffects('before', timestamp);
    var _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;
    if (!state) try {
        for(var _iterator = _roots.values()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true){
            var root = _step.value;
            update(timestamp, root.store.getState());
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally{
        try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
            }
        } finally{
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }
    else update(timestamp, state, frame);
    if (runGlobalEffects) flushGlobalEffects('after', timestamp);
}
var DOM_EVENTS = {
    onClick: [
        'click',
        false
    ],
    onContextMenu: [
        'contextmenu',
        false
    ],
    onDoubleClick: [
        'dblclick',
        false
    ],
    onWheel: [
        'wheel',
        true
    ],
    onPointerDown: [
        'pointerdown',
        true
    ],
    onPointerUp: [
        'pointerup',
        true
    ],
    onPointerLeave: [
        'pointerleave',
        true
    ],
    onPointerMove: [
        'pointermove',
        true
    ],
    onPointerCancel: [
        'pointercancel',
        true
    ],
    onLostPointerCapture: [
        'lostpointercapture',
        true
    ]
};
/** Default R3F event manager for web */ function createPointerEvents(store) {
    var handlePointer = createEvents(store).handlePointer;
    return {
        priority: 1,
        enabled: true,
        compute: function compute(event, state, previous) {
            // https://github.com/pmndrs/react-three-fiber/pull/782
            // Events trigger outside of canvas when moved, use offsetX/Y by default and allow overrides
            state.pointer.set(event.offsetX / state.size.width * 2 - 1, -(event.offsetY / state.size.height) * 2 + 1);
            state.raycaster.setFromCamera(state.pointer, state.camera);
        },
        connected: undefined,
        handlers: Object.keys(DOM_EVENTS).reduce(function(acc, key) {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, acc), (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, key, handlePointer(key)));
        }, {}),
        update: function() {
            var _internal$lastEvent;
            var _store_getState = store.getState(), events = _store_getState.events, internal = _store_getState.internal;
            if ((_internal$lastEvent = internal.lastEvent) != null && _internal$lastEvent.current && events.handlers) events.handlers.onPointerMove(internal.lastEvent.current);
        },
        connect: function(target) {
            var _store_getState = store.getState(), set = _store_getState.set, events = _store_getState.events;
            events.disconnect == null ? void 0 : events.disconnect();
            set(function(state) {
                return {
                    events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.events), {
                        connected: target
                    })
                };
            });
            if (events.handlers) {
                for(var name in events.handlers){
                    var event = events.handlers[name];
                    var _DOM_EVENTS_name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DOM_EVENTS[name], 2), eventName = _DOM_EVENTS_name[0], passive = _DOM_EVENTS_name[1];
                    target.addEventListener(eventName, event, {
                        passive: passive
                    });
                }
            }
        },
        disconnect: function() {
            var _store_getState = store.getState(), set = _store_getState.set, events = _store_getState.events;
            if (events.connected) {
                if (events.handlers) {
                    for(var name in events.handlers){
                        var event = events.handlers[name];
                        var _DOM_EVENTS_name = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(DOM_EVENTS[name], 1), eventName = _DOM_EVENTS_name[0];
                        events.connected.removeEventListener(eventName, event);
                    }
                }
                set(function(state) {
                    return {
                        events: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, state.events), {
                            connected: undefined
                        })
                    };
                });
            }
        }
    };
}
;
}),
"[project]/andreas-technology-v2/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Canvas",
    ()=>Canvas
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_async_to_generator.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_object_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_object_spread_props.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_object_without_properties.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript) <export __generator as _>");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/three/build/three.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/react-use-measure/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$its$2d$fine$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/its-fine/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$reconciler$2f$constants$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/react-reconciler/constants.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$reconciler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/react-reconciler/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$node_modules$2f$scheduler$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@react-three/fiber/node_modules/scheduler/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function CanvasImpl(_param) {
    var ref = _param.ref, children = _param.children, fallback = _param.fallback, resize = _param.resize, style = _param.style, gl = _param.gl, _param_events = _param.events, events = _param_events === void 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["f"] : _param_events, eventSource = _param.eventSource, eventPrefix = _param.eventPrefix, shadows = _param.shadows, linear = _param.linear, flat = _param.flat, legacy = _param.legacy, orthographic = _param.orthographic, frameloop = _param.frameloop, dpr = _param.dpr, performance = _param.performance, raycaster = _param.raycaster, camera = _param.camera, scene = _param.scene, onPointerMissed = _param.onPointerMissed, onCreated = _param.onCreated, props = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_without_properties$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_param, [
        "ref",
        "children",
        "fallback",
        "resize",
        "style",
        "gl",
        "events",
        "eventSource",
        "eventPrefix",
        "shadows",
        "linear",
        "flat",
        "legacy",
        "orthographic",
        "frameloop",
        "dpr",
        "performance",
        "raycaster",
        "camera",
        "scene",
        "onPointerMissed",
        "onCreated"
    ]);
    // Create a known catalogue of Threejs-native elements
    // This will include the entire THREE namespace by default, users can extend
    // their own elements by using the createRoot API instead
    __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"]({
        "CanvasImpl.useMemo": function() {
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["e"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__);
        }
    }["CanvasImpl.useMemo"], []);
    var Bridge = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["u"])();
    var _useMeasure = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$react$2d$use$2d$measure$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        scroll: true,
        debounce: {
            scroll: 50,
            resize: 0
        }
    }, resize)), 2), containerRef = _useMeasure[0], containerRect = _useMeasure[1];
    var canvasRef = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    var divRef = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"](ref, {
        "CanvasImpl.useImperativeHandle": function() {
            return canvasRef.current;
        }
    }["CanvasImpl.useImperativeHandle"]);
    var handlePointerMissed = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["a"])(onPointerMissed);
    var _React_useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false), 2), block = _React_useState[0], setBlock = _React_useState[1];
    var _React_useState1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"](false), 2), error = _React_useState1[0], setError = _React_useState1[1];
    // Suspend this component if block is a promise (2nd run)
    if (block) throw block;
    // Throw exception outwards if anything within canvas throws
    if (error) throw error;
    var root = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"](null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["b"])({
        "CanvasImpl.useIsomorphicLayoutEffect": function() {
            var canvas = canvasRef.current;
            if (containerRect.width > 0 && containerRect.height > 0 && canvas) {
                var run = function run() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_async_to_generator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
                        "CanvasImpl.useIsomorphicLayoutEffect.run": function() {
                            var _handlePointerMissed;
                            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__$5f$_generator__as__$5f3e$__["_"])(this, {
                                "CanvasImpl.useIsomorphicLayoutEffect.run": function(_state) {
                                    switch(_state.label){
                                        case 0:
                                            return [
                                                4,
                                                root.current.configure({
                                                    gl: gl,
                                                    scene: scene,
                                                    events: events,
                                                    shadows: shadows,
                                                    linear: linear,
                                                    flat: flat,
                                                    legacy: legacy,
                                                    orthographic: orthographic,
                                                    frameloop: frameloop,
                                                    dpr: dpr,
                                                    performance: performance,
                                                    raycaster: raycaster,
                                                    camera: camera,
                                                    size: containerRect,
                                                    // Pass mutable reference to onPointerMissed so it's free to update
                                                    onPointerMissed: {
                                                        "CanvasImpl.useIsomorphicLayoutEffect.run": function() {
                                                            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                                                                args[_key] = arguments[_key];
                                                            }
                                                            return handlePointerMissed.current == null ? void 0 : (_handlePointerMissed = handlePointerMissed).current.apply(_handlePointerMissed, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
                                                        }
                                                    }["CanvasImpl.useIsomorphicLayoutEffect.run"],
                                                    onCreated: {
                                                        "CanvasImpl.useIsomorphicLayoutEffect.run": function(state) {
                                                            // Connect to event source
                                                            state.events.connect == null ? void 0 : state.events.connect(eventSource ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["i"])(eventSource) ? eventSource.current : eventSource : divRef.current);
                                                            // Set up compute function
                                                            if (eventPrefix) {
                                                                state.setEvents({
                                                                    compute: {
                                                                        "CanvasImpl.useIsomorphicLayoutEffect.run": function(event, state) {
                                                                            var x = event[eventPrefix + 'X'];
                                                                            var y = event[eventPrefix + 'Y'];
                                                                            state.pointer.set(x / state.size.width * 2 - 1, -(y / state.size.height) * 2 + 1);
                                                                            state.raycaster.setFromCamera(state.pointer, state.camera);
                                                                        }
                                                                    }["CanvasImpl.useIsomorphicLayoutEffect.run"]
                                                                });
                                                            }
                                                            // Call onCreated callback
                                                            onCreated == null ? void 0 : onCreated(state);
                                                        }
                                                    }["CanvasImpl.useIsomorphicLayoutEffect.run"]
                                                })
                                            ];
                                        case 1:
                                            _state.sent();
                                            root.current.render(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Bridge, {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["E"], {
                                                    set: setError,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                                        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["B"], {
                                                            set: setBlock
                                                        }),
                                                        children: children != null ? children : null
                                                    })
                                                })
                                            }));
                                            return [
                                                2
                                            ];
                                    }
                                }
                            }["CanvasImpl.useIsomorphicLayoutEffect.run"]);
                        }
                    }["CanvasImpl.useIsomorphicLayoutEffect.run"])();
                };
                if (!root.current) root.current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(canvas);
                run();
            }
        }
    }["CanvasImpl.useIsomorphicLayoutEffect"]);
    __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"]({
        "CanvasImpl.useEffect": function() {
            var canvas = canvasRef.current;
            if (canvas) return ({
                "CanvasImpl.useEffect": function() {
                    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["d"])(canvas);
                }
            })["CanvasImpl.useEffect"];
        }
    }["CanvasImpl.useEffect"], []);
    // When the event source is not this div, we need to set pointer-events to none
    // Or else the canvas will block events from reaching the event source
    var pointerEvents = eventSource ? 'none' : 'auto';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread_props$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
        ref: divRef,
        style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({
            position: 'relative',
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            pointerEvents: pointerEvents
        }, style)
    }, props), {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
            ref: containerRef,
            style: {
                width: '100%',
                height: '100%'
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("canvas", {
                ref: canvasRef,
                style: {
                    display: 'block'
                },
                children: fallback
            })
        })
    }));
}
/**
 * A DOM canvas which accepts threejs elements as children.
 * @see https://docs.pmnd.rs/react-three-fiber/api/canvas
 */ function Canvas(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$its$2d$fine$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiberProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(CanvasImpl, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_object_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])({}, props))
    });
}
;
}),
"[project]/andreas-technology-v2/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript) <export D as useFrame>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFrame",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["D"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$1eccaf1c$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@react-three/fiber/dist/events-1eccaf1c.esm.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=8e458_%40react-three_fiber_dist_7306bd9b._.js.map