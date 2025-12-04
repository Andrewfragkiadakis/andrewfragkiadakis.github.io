(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/andreas-technology-v2/src/components/SmoothScroll.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$react$2d$lenis$2f$dist$2f$react$2d$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@studio-freight/react-lenis/dist/react-lenis.mjs [app-client] (ecmascript)");
'use client';
;
;
;
function SmoothScroll(param) {
    var children = param.children;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$react$2d$lenis$2f$dist$2f$react$2d$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ReactLenis"], {
        root: true,
        options: {
            lerp: 0.1,
            duration: 1.5
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/andreas-technology-v2/src/components/SmoothScroll.tsx",
        lineNumber: 7,
        columnNumber: 9
    }, this);
}
_c = SmoothScroll;
const __TURBOPACK__default__export__ = SmoothScroll;
var _c;
__turbopack_context__.k.register(_c, "SmoothScroll");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/andreas-technology-v2/src/contexts/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
var LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProvider(param) {
    var children = param.children;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('en'), 2), language = _useState[0], setLanguage = _useState[1];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            language: language,
            setLanguage: setLanguage
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/andreas-technology-v2/src/contexts/LanguageContext.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_s(LanguageProvider, "fVUtOCD1O58HgvMjnE8lxRQa0QA=");
_c = LanguageProvider;
function useLanguage() {
    _s1();
    var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "LanguageProvider");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/andreas-technology-v2/src/contexts/ThemeContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
var ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function ThemeProvider(param) {
    var children = param.children;
    _s();
    var _useState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('dark'), 2), theme = _useState[0], setTheme = _useState[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": function() {
            // Check system preference
            var mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            var updateTheme = {
                "ThemeProvider.useEffect.updateTheme": function(e) {
                    setTheme(e.matches ? 'dark' : 'light');
                }
            }["ThemeProvider.useEffect.updateTheme"];
            // Set initial theme
            updateTheme(mediaQuery);
            // Listen for changes
            mediaQuery.addEventListener('change', updateTheme);
            return ({
                "ThemeProvider.useEffect": function() {
                    return mediaQuery.removeEventListener('change', updateTheme);
                }
            })["ThemeProvider.useEffect"];
        }
    }["ThemeProvider.useEffect"], []);
    // Apply theme class to document
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": function() {
            document.documentElement.classList.remove('light', 'dark');
            document.documentElement.classList.add(theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme: theme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/andreas-technology-v2/src/contexts/ThemeContext.tsx",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
_s(ThemeProvider, "FaR+67HYMnxyxOLL3EkvHKRjhfs=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    var context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
}
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
var _type_of = __turbopack_context__.r("[project]/andreas-technology-v2/node_modules/@swc/helpers/cjs/_type_of.cjs [app-client] (ecmascript)");
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === (typeof type === "undefined" ? "undefined" : _type_of._(type))) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === (typeof type === "undefined" ? "undefined" : _type_of._(type)) && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === (typeof node === "undefined" ? "undefined" : _type_of._(node)) && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === (typeof object === "undefined" ? "undefined" : _type_of._(object)) && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol["for"]("react.transitional.element"), REACT_PORTAL_TYPE = Symbol["for"]("react.portal"), REACT_FRAGMENT_TYPE = Symbol["for"]("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol["for"]("react.strict_mode"), REACT_PROFILER_TYPE = Symbol["for"]("react.profiler"), REACT_CONSUMER_TYPE = Symbol["for"]("react.consumer"), REACT_CONTEXT_TYPE = Symbol["for"]("react.context"), REACT_FORWARD_REF_TYPE = Symbol["for"]("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol["for"]("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol["for"]("react.suspense_list"), REACT_MEMO_TYPE = Symbol["for"]("react.memo"), REACT_LAZY_TYPE = Symbol["for"]("react.lazy"), REACT_ACTIVITY_TYPE = Symbol["for"]("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol["for"]("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol["for"]("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function createTask() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function react_stack_bottom_frame(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_with_holes
]);
function _array_with_holes(arr) {
    if (Array.isArray(arr)) return arr;
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_iterable_to_array_limit
]);
function _iterable_to_array_limit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
        for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_non_iterable_rest
]);
function _non_iterable_rest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_like_to_array
]);
function _array_like_to_array(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_unsupported_iterable_to_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)");
;
function _unsupported_iterable_to_array(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(o, minLen);
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_sliced_to_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_array_with_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_iterable_to_array_limit.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_non_iterable_rest.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _sliced_to_array(arr, i) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_with_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array_limit$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr, i) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr, i) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_rest$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_array_without_holes
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_array_like_to_array.js [app-client] (ecmascript)");
;
function _array_without_holes(arr) {
    if (Array.isArray(arr)) return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_like_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr);
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_iterable_to_array
]);
function _iterable_to_array(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) {
        return Array.from(iter);
    }
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_non_iterable_spread
]);
function _non_iterable_spread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_to_consumable_array
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_array_without_holes.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_iterable_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_non_iterable_spread.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_unsupported_iterable_to_array.js [app-client] (ecmascript)");
;
;
;
;
function _to_consumable_array(arr) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_array_without_holes$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_unsupported_iterable_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(arr) || (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_non_iterable_spread$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])();
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_class_call_check
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_instanceof.js [app-client] (ecmascript)");
;
function _class_call_check(instance, Constructor) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_instanceof$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(instance, Constructor)) throw new TypeError("Cannot call a class as a function");
}
;
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_create_class
]);
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
;
}),
"[project]/andreas-technology-v2/node_modules/@studio-freight/tempus/dist/tempus.modern.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>a
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
;
;
var a = "undefined" != typeof window && new (/*#__PURE__*/ function() {
    "use strict";
    function _class() {
        var _this = this;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, _class);
        this.raf = function(a) {
            requestAnimationFrame(_this.raf);
            var t = a - _this.now;
            _this.now = a;
            for(var s = 0; s < _this.callbacks.length; s++)_this.callbacks[s].callback(a, t);
        }, this.callbacks = [], this.now = performance.now(), requestAnimationFrame(this.raf);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(_class, [
        {
            key: "add",
            value: function add(a) {
                var _this = this;
                var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                return this.callbacks.push({
                    callback: a,
                    priority: t
                }), this.callbacks.sort(function(a, t) {
                    return a.priority - t.priority;
                }), function() {
                    return _this.remove(a);
                };
            }
        },
        {
            key: "remove",
            value: function remove(a) {
                this.callbacks = this.callbacks.filter(function(param) {
                    var t = param.callback;
                    return a !== t;
                });
            }
        }
    ]);
    return _class;
}());
;
 //# sourceMappingURL=tempus.modern.mjs.map
}),
"[project]/andreas-technology-v2/node_modules/just-debounce-it/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>functionDebounce
]);
var functionDebounce = debounce;
function debounce(fn, wait, callFirst) {
    var timeout = null;
    var debouncedFn = null;
    var clear = function clear() {
        if (timeout) {
            clearTimeout(timeout);
            debouncedFn = null;
            timeout = null;
        }
    };
    var flush = function flush() {
        var call = debouncedFn;
        clear();
        if (call) {
            call();
        }
    };
    var debounceWrapper = function debounceWrapper() {
        if (!wait) {
            return fn.apply(this, arguments);
        }
        var context = this;
        var args = arguments;
        var callNow = callFirst && !timeout;
        clear();
        debouncedFn = function debouncedFn() {
            fn.apply(context, args);
        };
        timeout = setTimeout(function() {
            timeout = null;
            if (!callNow) {
                var call = debouncedFn;
                debouncedFn = null;
                return call();
            }
        }, wait);
        if (callNow) {
            return debouncedFn();
        }
    };
    debounceWrapper.cancel = clear;
    debounceWrapper.flush = flush;
    return debounceWrapper;
}
;
}),
"[project]/andreas-technology-v2/node_modules/nanoevents/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createNanoEvents",
    ()=>createNanoEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
;
var createNanoEvents = function() {
    return {
        emit: function emit(event) {
            for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                args[_key - 1] = arguments[_key];
            }
            for(var callbacks = this.events[event] || [], i = 0, length = callbacks.length; i < length; i++){
                var _callbacks;
                (_callbacks = callbacks)[i].apply(_callbacks, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(args));
            }
        },
        events: {},
        on: function on(event, cb) {
            var _this = this;
            var _this_events, _event;
            ;
            ((_this_events = this.events)[_event = event] || (_this_events[_event] = [])).push(cb);
            return function() {
                var _this_events_event;
                _this.events[event] = (_this_events_event = _this.events[event]) === null || _this_events_event === void 0 ? void 0 : _this_events_event.filter(function(i) {
                    return cb !== i;
                });
            };
        }
    };
};
}),
"[project]/andreas-technology-v2/node_modules/@studio-freight/hamo/dist/hamo.modern.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useDebug",
    ()=>d,
    "useDocumentReadyState",
    ()=>l,
    "useFrame",
    ()=>f,
    "useIntersectionObserver",
    ()=>h,
    "useInterval",
    ()=>m,
    "useIsClient",
    ()=>a,
    "useIsTouchDevice",
    ()=>v,
    "useMediaQuery",
    ()=>w,
    "useOutsideClickEvent",
    ()=>s,
    "useRect",
    ()=>k,
    "useResizeObserver",
    ()=>x,
    "useSlots",
    ()=>O,
    "useWindowSize",
    ()=>S
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$tempus$2f$dist$2f$tempus$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@studio-freight/tempus/dist/tempus.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$just$2d$debounce$2d$it$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/just-debounce-it/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$nanoevents$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/nanoevents/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
function s(n, r) {
    var o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(e) {
        n.current && !n.current.contains(e.target) && r();
    }, [
        n,
        r
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (n.current) return document.addEventListener("mousedown", o), function() {
            document.removeEventListener("mousedown", o);
        };
    }, [
        o,
        n
    ]);
}
function a() {
    var _n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!1), 2), e = _n[0], r = _n[1];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        r(!0);
    }, []), e;
}
function d() {
    var e = a();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        if (!e) return;
        var t = window.location, n = t.href, _$r = new URLSearchParams(t.search), o = n.includes("#debug") || n.includes("/_debug") || _$r.has("debug") || "development" === ("TURBOPACK compile-time value", "development"), c = n.includes("#production") || _$r.has("production");
        return o && !c;
    }, [
        e
    ]);
}
function l() {
    var _n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), e = _n[0], r = _n[1];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var e = function e() {
            r(document.readyState);
        };
        return document.addEventListener("readystatechange", e, !1), e(), function() {
            return document.removeEventListener("readystatechange", e, !1);
        };
    }, []), e;
}
function f(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (e) return __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$tempus$2f$dist$2f$tempus$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].add(e, n), function() {
            return __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$tempus$2f$dist$2f$tempus$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].remove(e);
        };
    }, [
        e,
        n
    ]);
}
function h() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, tmp = _ref.root, r = tmp === void 0 ? null : tmp, tmp1 = _ref.rootMargin, c = tmp1 === void 0 ? "0px" : tmp1, tmp2 = _ref.threshold, i = tmp2 === void 0 ? 0 : tmp2, tmp3 = _ref.once, _$u = tmp3 === void 0 ? !1 : tmp3, tmp4 = _ref.lazy, s = tmp4 === void 0 ? !1 : tmp4, tmp5 = _ref.callback, a = tmp5 === void 0 ? function() {} : tmp5, d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({}), _n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), f = _n[0], h = _n[1], _n1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), m = _n1[0], v = _n1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!m) return;
        var _$e = new IntersectionObserver(function(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 1), _$t = _param[0];
            s ? l.current = _$t : h(_$t), a(_$t), _$u && _$t.isIntersecting && _$e.disconnect();
        }, {
            root: r,
            rootMargin: c,
            threshold: i
        });
        return _$e.observe(m), function() {
            _$e.disconnect();
        };
    }, [
        m,
        r,
        c,
        i,
        s,
        _$u
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(d)));
    var w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        return l.current;
    }, []);
    return [
        v,
        s ? w : f
    ];
}
function m(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1e3, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var _$t = setInterval(e, n);
        return function() {
            return clearInterval(_$t);
        };
    }, [
        n
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(r)));
}
function v() {
    var _n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), e = _n[0], r = _n[1];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var e = function e() {
            r("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0);
        };
        return window.addEventListener("resize", e, !1), e(), function() {
            window.removeEventListener("resize", e, !1);
        };
    }, []), e;
}
function w(e) {
    var _n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), r = _n[0], o = _n[1];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var _$n = function _$n() {
            o(_$t.matches);
        };
        var _$t = window.matchMedia(e);
        return _$t.addEventListener("change", _$n, !1), _$n(), function() {
            return _$t.removeEventListener("change", _$n, !1);
        };
    }, [
        e
    ]), r;
}
function g() {
    return g = ("TURBOPACK compile-time truthy", 1) ? Object.assign.bind() : "TURBOPACK unreachable", g.apply(this, arguments);
}
function p(e) {
    "sticky" === getComputedStyle(e).position && (e.style.setProperty("position", "static"), e.dataset.sticky = "true"), e.offsetParent && p(e.offsetParent);
}
function b(e) {
    var t;
    "true" === (null == e || null == (t = e.dataset) ? void 0 : t.sticky) && (e.style.removeProperty("position"), e.dataset.sticky = "true", delete e.dataset.sticky), e.parentNode && b(e.parentNode);
}
function y(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var n = t + e.offsetTop;
    return e.offsetParent ? y(e.offsetParent, n) : n;
}
function z(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var n = t + e.offsetLeft;
    return e.offsetParent ? z(e.offsetParent, n) : n;
}
function P(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var n = t + e.scrollTop;
    return e.offsetParent ? P(e.offsetParent, n) : n + window.scrollY;
}
function E(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
    var n = t + e.scrollLeft;
    return e.offsetParent ? E(e.offsetParent, n) : n + window.scrollX;
}
var L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$nanoevents$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNanoEvents"])();
function k() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, tmp = _ref.ignoreTransform, r = tmp === void 0 ? !1 : tmp, tmp1 = _ref.ignoreSticky, c = tmp1 === void 0 ? !0 : tmp1, tmp2 = _ref.debounce, _$u = tmp2 === void 0 ? 500 : tmp2, tmp3 = _ref.lazy, s = tmp3 === void 0 ? !1 : tmp3, a = _ref.callback;
    var _n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), d = _n[0], l = _n[1], f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({}), _n1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), h = _n1[0], m = _n1[1], v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(param) {
        var _$e = param.top, _$t = param.left, _$n = param.width, r = param.height, _$o = param.element;
        var c, i, _$u, d, l;
        _$e = null != (c = _$e) ? c : f.current.top, _$t = null != (i = _$t) ? i : f.current.left, _$n = null != (_$u = _$n) ? _$u : f.current.width, r = null != (d = r) ? d : f.current.height, _$o = null != (l = _$o) ? l : f.current.element, _$e === f.current.top && _$t === f.current.left && _$n === f.current.width && r === f.current.height && _$o === f.current.element || (f.current.top = _$e, f.current.y = _$e, f.current.width = _$n, f.current.height = r, f.current.left = _$t, f.current.x = _$t, f.current.bottom = _$e + r, f.current.right = _$t + _$n, f.current.element = _$o, null == a || a(f.current), s || m(g({}, f.current)));
    }, [
        s
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!d) return;
        var _$e = d.getBoundingClientRect();
        v({
            width: _$e.width,
            height: _$e.height
        });
        var _$t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$just$2d$debounce$2d$it$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 1), _$e = _param[0];
            v({
                width: _$e.borderBoxSize[0].inlineSize,
                height: _$e.borderBoxSize[0].blockSize
            });
        }, _$u), _$n = new ResizeObserver(_$t);
        return _$n.observe(d), function() {
            _$n.disconnect(), _$t.cancel();
        };
    }, [
        d,
        _$u,
        v
    ]);
    var _n2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), w = _n2[0], _$k = _n2[1], x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        if (!d) return;
        var _$e, _$t;
        if (c && p(d), r) _$e = y(d), _$t = z(d);
        else {
            var _$n = d.getBoundingClientRect();
            _$e = _$n.top + P(d), _$t = _$n.left + E(d);
        }
        c && b(d), v({
            top: _$e,
            left: _$t,
            element: d
        });
    }, [
        r,
        c,
        d,
        v
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        x();
        var _$e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$just$2d$debounce$2d$it$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(x, _$u), _$t = new ResizeObserver(_$e);
        return _$t.observe(null != w ? w : document.body), function() {
            _$t.disconnect(), _$e.cancel();
        };
    }, [
        w,
        _$u,
        x
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return L.on("resize", function() {
            if (!d) return;
            var _$e = d.getBoundingClientRect();
            v({
                width: _$e.width,
                height: _$e.height
            }), x();
        });
    }, [
        d,
        x,
        v
    ]);
    var O = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        return f.current;
    }, []);
    return [
        l,
        s ? O : h,
        _$k
    ];
}
function x() {
    var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, tmp = _ref.lazy, r = tmp === void 0 ? !1 : tmp, tmp1 = _ref.debounce, c = tmp1 === void 0 ? 500 : tmp1, tmp2 = _ref.box, _$u = tmp2 === void 0 ? "border-box" : tmp2, tmp3 = _ref.callback, s = tmp3 === void 0 ? function() {} : tmp3;
    var a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({}), _n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({}), 2), d = _n[0], l = _n[1], _n1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), f = _n1[0], h = _n1[1];
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (!f) return;
        var _$e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$just$2d$debounce$2d$it$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function(param) {
            var _param = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(param, 1), _$e = _param[0];
            a.current = _$e, s(_$e), r || l(_$e);
        }, c, !0), _$t = new ResizeObserver(_$e);
        return _$t.observe(f, {
            box: _$u
        }), function() {
            _$t.disconnect(), _$e.cancel();
        };
    }, [
        f,
        r,
        c,
        _$u
    ]);
    var m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        return a.current;
    }, []);
    return [
        h,
        r ? m : d
    ];
}
function O() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return t && [
            t
        ].flat();
    }, [
        t
    ]), o = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        return e && [
            e
        ].flat();
    }, [
        e
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])(function() {
        if (!n || !o) return;
        var t = o.map(function(e) {
            var t;
            return null == (t = n.find(function(t) {
                return t.type === e;
            })) ? void 0 : t.props.children;
        });
        return e[0] ? t : t[0];
    }, [
        n,
        o
    ]);
}
function S() {
    var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 500;
    var _n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), r = _n[0], o = _n[1], _n1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(), 2), c = _n1[0], _$u = _n1[1];
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var _$t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$just$2d$debounce$2d$it$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(function() {
            o(Math.min(window.innerWidth, document.documentElement.clientWidth)), _$u(Math.min(window.innerHeight, document.documentElement.clientHeight));
        }, e);
        return window.addEventListener("resize", _$t, !1), _$t(), function() {
            return window.removeEventListener("resize", _$t, !1);
        };
    }, [
        e
    ]), {
        width: r,
        height: c
    };
}
k.resize = function() {
    L.emit("resize");
};
;
 //# sourceMappingURL=hamo.modern.mjs.map
}),
"[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
"[project]/andreas-technology-v2/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Lenis
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_class_call_check.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_create_class.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
;
;
;
;
function t(t, e, i) {
    return Math.max(t, Math.min(e, i));
}
var Animate = /*#__PURE__*/ function() {
    "use strict";
    function Animate() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Animate);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Animate, [
        {
            key: "advance",
            value: function advance(e) {
                var _this_onUpdate, _this;
                if (!this.isRunning) return;
                var i = !1;
                if (this.lerp) this.value = (s1 = this.value, o1 = this.to, n = 60 * this.lerp, r = e, function(t, e, i) {
                    return (1 - i) * t + i * e;
                }(s1, o1, 1 - Math.exp(-n * r))), Math.round(this.value) === this.to && (this.value = this.to, i = !0);
                else {
                    this.currentTime += e;
                    var s = t(0, this.currentTime / this.duration, 1);
                    i = s >= 1;
                    var o = i ? 1 : this.easing(s);
                    this.value = this.from + (this.to - this.from) * o;
                }
                var s1, o1, n, r;
                (_this_onUpdate = (_this = this).onUpdate) === null || _this_onUpdate === void 0 ? void 0 : _this_onUpdate.call(_this, this.value, i), i && this.stop();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.isRunning = !1;
            }
        },
        {
            key: "fromTo",
            value: function fromTo(t, e, param) {
                var tmp = param.lerp, i = tmp === void 0 ? .1 : tmp, tmp1 = param.duration, s = tmp1 === void 0 ? 1 : tmp1, tmp2 = param.easing, o = tmp2 === void 0 ? function(t) {
                    return t;
                } : tmp2, n = param.onStart, r = param.onUpdate;
                this.from = this.value = t, this.to = e, this.lerp = i, this.duration = s, this.easing = o, this.currentTime = 0, this.isRunning = !0, n === null || n === void 0 ? void 0 : n(), this.onUpdate = r;
            }
        }
    ]);
    return Animate;
}();
var Dimensions = /*#__PURE__*/ function() {
    "use strict";
    function Dimensions() {
        var _this = this;
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = _ref.wrapper, e = _ref.content, tmp = _ref.autoResize, i = tmp === void 0 ? !0 : tmp, tmp1 = _ref.debounce, s = tmp1 === void 0 ? 250 : tmp1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Dimensions);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "resize", function() {
            _this.onWrapperResize(), _this.onContentResize();
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWrapperResize", function() {
            _this.wrapper === window ? (_this.width = window.innerWidth, _this.height = window.innerHeight) : (_this.width = _this.wrapper.clientWidth, _this.height = _this.wrapper.clientHeight);
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onContentResize", function() {
            _this.wrapper === window ? (_this.scrollHeight = _this.content.scrollHeight, _this.scrollWidth = _this.content.scrollWidth) : (_this.scrollHeight = _this.wrapper.scrollHeight, _this.scrollWidth = _this.wrapper.scrollWidth);
        });
        this.wrapper = t, this.content = e, i && (this.debouncedResize = function(t, e) {
            var i;
            return function() {
                var s = arguments, o = this;
                clearTimeout(i), i = setTimeout(function() {
                    t.apply(o, s);
                }, e);
            };
        }(this.resize, s), this.wrapper === window ? window.addEventListener("resize", this.debouncedResize, !1) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize();
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Dimensions, [
        {
            key: "destroy",
            value: function destroy() {
                var _this_wrapperResizeObserver, _this_contentResizeObserver;
                (_this_wrapperResizeObserver = this.wrapperResizeObserver) === null || _this_wrapperResizeObserver === void 0 ? void 0 : _this_wrapperResizeObserver.disconnect(), (_this_contentResizeObserver = this.contentResizeObserver) === null || _this_contentResizeObserver === void 0 ? void 0 : _this_contentResizeObserver.disconnect(), window.removeEventListener("resize", this.debouncedResize, !1);
            }
        },
        {
            key: "limit",
            get: function get() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                };
            }
        }
    ]);
    return Dimensions;
}();
var Emitter = /*#__PURE__*/ function() {
    "use strict";
    function Emitter() {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Emitter);
        this.events = {};
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Emitter, [
        {
            key: "emit",
            value: function emit(t) {
                for(var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
                    e[_key - 1] = arguments[_key];
                }
                var _i;
                var i = this.events[t] || [];
                for(var _$t = 0, s = i.length; _$t < s; _$t++)(_i = i)[_$t].apply(_i, (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(e));
            }
        },
        {
            key: "on",
            value: function on(t, e) {
                var _this = this;
                var _this_events_t;
                return ((_this_events_t = this.events[t]) === null || _this_events_t === void 0 ? void 0 : _this_events_t.push(e)) || (this.events[t] = [
                    e
                ]), function() {
                    var _this_events_t;
                    _this.events[t] = (_this_events_t = _this.events[t]) === null || _this_events_t === void 0 ? void 0 : _this_events_t.filter(function(t) {
                        return e !== t;
                    });
                };
            }
        },
        {
            key: "off",
            value: function off(t, e) {
                var _this_events_t;
                this.events[t] = (_this_events_t = this.events[t]) === null || _this_events_t === void 0 ? void 0 : _this_events_t.filter(function(t) {
                    return e !== t;
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.events = {};
            }
        }
    ]);
    return Emitter;
}();
var e = 100 / 6;
var VirtualScroll = /*#__PURE__*/ function() {
    "use strict";
    function VirtualScroll(t, param) {
        var _this = this;
        var tmp = param.wheelMultiplier, e1 = tmp === void 0 ? 1 : tmp, tmp1 = param.touchMultiplier, i = tmp1 === void 0 ? 1 : tmp1;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, VirtualScroll);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchStart", function(t) {
            var _ref = t.targetTouches ? t.targetTouches[0] : t, e = _ref.clientX, i = _ref.clientY;
            _this.touchStart.x = e, _this.touchStart.y = i, _this.lastDelta = {
                x: 0,
                y: 0
            }, _this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: t
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchMove", function(t) {
            var _ref = t.targetTouches ? t.targetTouches[0] : t, e = _ref.clientX, i = _ref.clientY, s = -(e - _this.touchStart.x) * _this.touchMultiplier, o = -(i - _this.touchStart.y) * _this.touchMultiplier;
            _this.touchStart.x = e, _this.touchStart.y = i, _this.lastDelta = {
                x: s,
                y: o
            }, _this.emitter.emit("scroll", {
                deltaX: s,
                deltaY: o,
                event: t
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onTouchEnd", function(t) {
            _this.emitter.emit("scroll", {
                deltaX: _this.lastDelta.x,
                deltaY: _this.lastDelta.y,
                event: t
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWheel", function(t) {
            var i = t.deltaX, s = t.deltaY, o = t.deltaMode;
            i *= 1 === o ? e : 2 === o ? _this.windowWidth : 1, s *= 1 === o ? e : 2 === o ? _this.windowHeight : 1, i *= _this.wheelMultiplier, s *= _this.wheelMultiplier, _this.emitter.emit("scroll", {
                deltaX: i,
                deltaY: s,
                event: t
            });
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_define_property$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, "onWindowResize", function() {
            _this.windowWidth = window.innerWidth, _this.windowHeight = window.innerHeight;
        });
        this.element = t, this.wheelMultiplier = e1, this.touchMultiplier = i, this.touchStart = {
            x: null,
            y: null
        }, this.emitter = new Emitter, window.addEventListener("resize", this.onWindowResize, !1), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, {
            passive: !1
        }), this.element.addEventListener("touchstart", this.onTouchStart, {
            passive: !1
        }), this.element.addEventListener("touchmove", this.onTouchMove, {
            passive: !1
        }), this.element.addEventListener("touchend", this.onTouchEnd, {
            passive: !1
        });
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(VirtualScroll, [
        {
            key: "on",
            value: function on(t, e) {
                return this.emitter.on(t, e);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize, !1), this.element.removeEventListener("wheel", this.onWheel, {
                    passive: !1
                }), this.element.removeEventListener("touchstart", this.onTouchStart, {
                    passive: !1
                }), this.element.removeEventListener("touchmove", this.onTouchMove, {
                    passive: !1
                }), this.element.removeEventListener("touchend", this.onTouchEnd, {
                    passive: !1
                });
            }
        }
    ]);
    return VirtualScroll;
}();
var Lenis = /*#__PURE__*/ function() {
    "use strict";
    function Lenis() {
        var _this = this;
        var _ref = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, tmp = _ref.wrapper, t = tmp === void 0 ? window : tmp, tmp1 = _ref.content, e = tmp1 === void 0 ? document.documentElement : tmp1, tmp2 = _ref.wheelEventsTarget, i = tmp2 === void 0 ? t : tmp2, tmp3 = _ref.eventsTarget, s = tmp3 === void 0 ? i : tmp3, tmp4 = _ref.smoothWheel, o = tmp4 === void 0 ? !0 : tmp4, tmp5 = _ref.syncTouch, n = tmp5 === void 0 ? !1 : tmp5, tmp6 = _ref.syncTouchLerp, r = tmp6 === void 0 ? .075 : tmp6, tmp7 = _ref.touchInertiaMultiplier, l = tmp7 === void 0 ? 35 : tmp7, h = _ref.duration, tmp8 = _ref.easing, a = tmp8 === void 0 ? function(t) {
            return Math.min(1, 1.001 - Math.pow(2, -10 * t));
        } : tmp8, tmp9 = _ref.lerp, c = tmp9 === void 0 ? !h && .1 : tmp9, tmp10 = _ref.infinite, d = tmp10 === void 0 ? !1 : tmp10, tmp11 = _ref.orientation, p = tmp11 === void 0 ? "vertical" : tmp11, tmp12 = _ref.gestureOrientation, u = tmp12 === void 0 ? "vertical" : tmp12, tmp13 = _ref.touchMultiplier, m = tmp13 === void 0 ? 1 : tmp13, tmp14 = _ref.wheelMultiplier, v = tmp14 === void 0 ? 1 : tmp14, tmp15 = _ref.autoResize, g = tmp15 === void 0 ? !0 : tmp15, tmp16 = _ref.__experimental__naiveDimensions, S = tmp16 === void 0 ? !1 : tmp16;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_class_call_check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(this, Lenis);
        this.__isSmooth = !1, this.__isScrolling = !1, this.__isStopped = !1, this.__isLocked = !1, this.onVirtualScroll = function(param) {
            var t = param.deltaX, e = param.deltaY, i = param.event;
            if (i.ctrlKey) return;
            var s = i.type.includes("touch"), o = i.type.includes("wheel");
            if (_this.options.syncTouch && s && "touchstart" === i.type && !_this.isStopped && !_this.isLocked) return void _this.reset();
            var n = 0 === t && 0 === e, r = "vertical" === _this.options.gestureOrientation && 0 === e || "horizontal" === _this.options.gestureOrientation && 0 === t;
            if (n || r) return;
            var l = i.composedPath();
            if (l = l.slice(0, l.indexOf(_this.rootElement)), l.find(function(t) {
                var e, i, n, r, l;
                return (null === (e = t.hasAttribute) || void 0 === e ? void 0 : e.call(t, "data-lenis-prevent")) || s && (null === (i = t.hasAttribute) || void 0 === i ? void 0 : i.call(t, "data-lenis-prevent-touch")) || o && (null === (n = t.hasAttribute) || void 0 === n ? void 0 : n.call(t, "data-lenis-prevent-wheel")) || (null === (r = t.classList) || void 0 === r ? void 0 : r.contains("lenis")) && !(null === (l = t.classList) || void 0 === l ? void 0 : l.contains("lenis-stopped"));
            })) return;
            if (_this.isStopped || _this.isLocked) return void i.preventDefault();
            if (_this.isSmooth = _this.options.syncTouch && s || _this.options.smoothWheel && o, !_this.isSmooth) return _this.isScrolling = !1, void _this.animate.stop();
            i.preventDefault();
            var h = e;
            "both" === _this.options.gestureOrientation ? h = Math.abs(e) > Math.abs(t) ? e : t : "horizontal" === _this.options.gestureOrientation && (h = t);
            var a = s && _this.options.syncTouch, c = s && "touchend" === i.type && Math.abs(h) > 5;
            c && (h = _this.velocity * _this.options.touchInertiaMultiplier), _this.scrollTo(_this.targetScroll + h, Object.assign({
                programmatic: !1
            }, a ? {
                lerp: c ? _this.options.syncTouchLerp : 1
            } : {
                lerp: _this.options.lerp,
                duration: _this.options.duration,
                easing: _this.options.easing
            }));
        }, this.onNativeScroll = function() {
            if (!_this.__preventNextScrollEvent && !_this.isScrolling) {
                var t = _this.animatedScroll;
                _this.animatedScroll = _this.targetScroll = _this.actualScroll, _this.velocity = 0, _this.direction = Math.sign(_this.animatedScroll - t), _this.emit();
            }
        }, window.lenisVersion = "1.0.42", t !== document.documentElement && t !== document.body || (t = window), this.options = {
            wrapper: t,
            content: e,
            wheelEventsTarget: i,
            eventsTarget: s,
            smoothWheel: o,
            syncTouch: n,
            syncTouchLerp: r,
            touchInertiaMultiplier: l,
            duration: h,
            easing: a,
            lerp: c,
            infinite: d,
            gestureOrientation: u,
            orientation: p,
            touchMultiplier: m,
            wheelMultiplier: v,
            autoResize: g,
            __experimental__naiveDimensions: S
        }, this.animate = new Animate, this.emitter = new Emitter, this.dimensions = new Dimensions({
            wrapper: t,
            content: e,
            autoResize: g
        }), this.toggleClassName("lenis", !0), this.velocity = 0, this.isLocked = !1, this.isStopped = !1, this.isSmooth = n || o, this.isScrolling = !1, this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll = new VirtualScroll(s, {
            touchMultiplier: m,
            wheelMultiplier: v
        }), this.virtualScroll.on("scroll", this.onVirtualScroll);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_create_class$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(Lenis, [
        {
            key: "destroy",
            value: function destroy() {
                this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll, !1), this.virtualScroll.destroy(), this.dimensions.destroy(), this.toggleClassName("lenis", !1), this.toggleClassName("lenis-smooth", !1), this.toggleClassName("lenis-scrolling", !1), this.toggleClassName("lenis-stopped", !1), this.toggleClassName("lenis-locked", !1);
            }
        },
        {
            key: "on",
            value: function on(t, e) {
                return this.emitter.on(t, e);
            }
        },
        {
            key: "off",
            value: function off(t, e) {
                return this.emitter.off(t, e);
            }
        },
        {
            key: "setScroll",
            value: function setScroll(t) {
                this.isHorizontal ? this.rootElement.scrollLeft = t : this.rootElement.scrollTop = t;
            }
        },
        {
            key: "resize",
            value: function resize() {
                this.dimensions.resize();
            }
        },
        {
            key: "emit",
            value: function emit() {
                this.emitter.emit("scroll", this);
            }
        },
        {
            key: "reset",
            value: function reset() {
                this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.velocity = 0, this.animate.stop();
            }
        },
        {
            key: "start",
            value: function start() {
                this.isStopped && (this.isStopped = !1, this.reset());
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.isStopped || (this.isStopped = !0, this.animate.stop(), this.reset());
            }
        },
        {
            key: "raf",
            value: function raf(t) {
                var e = t - (this.time || t);
                this.time = t, this.animate.advance(.001 * e);
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(e) {
                var _this = this;
                var _ref = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, tmp = _ref.offset, i = tmp === void 0 ? 0 : tmp, tmp1 = _ref.immediate, s = tmp1 === void 0 ? !1 : tmp1, tmp2 = _ref.lock, o = tmp2 === void 0 ? !1 : tmp2, tmp3 = _ref.duration, n = tmp3 === void 0 ? this.options.duration : tmp3, tmp4 = _ref.easing, r = tmp4 === void 0 ? this.options.easing : tmp4, tmp5 = _ref.lerp, l = tmp5 === void 0 ? !n && this.options.lerp : tmp5, h = _ref.onComplete, tmp6 = _ref.force, a = tmp6 === void 0 ? !1 : tmp6, tmp7 = _ref.programmatic, c = tmp7 === void 0 ? !0 : tmp7;
                if (!this.isStopped && !this.isLocked || a) {
                    if ([
                        "top",
                        "left",
                        "start"
                    ].includes(e)) e = 0;
                    else if ([
                        "bottom",
                        "right",
                        "end"
                    ].includes(e)) e = this.limit;
                    else {
                        var _$t;
                        if ("string" == typeof e ? _$t = document.querySelector(e) : (null == e ? void 0 : e.nodeType) && (_$t = e), _$t) {
                            if (this.options.wrapper !== window) {
                                var _$t1 = this.options.wrapper.getBoundingClientRect();
                                i -= this.isHorizontal ? _$t1.left : _$t1.top;
                            }
                            var s1 = _$t.getBoundingClientRect();
                            e = (this.isHorizontal ? s1.left : s1.top) + this.animatedScroll;
                        }
                    }
                    if ("number" == typeof e) {
                        if (e += i, e = Math.round(e), this.options.infinite ? c && (this.targetScroll = this.animatedScroll = this.scroll) : e = t(0, e, this.limit), s) return this.animatedScroll = this.targetScroll = e, this.setScroll(this.scroll), this.reset(), void (null == h || h(this));
                        if (!c) {
                            if (e === this.targetScroll) return;
                            this.targetScroll = e;
                        }
                        this.animate.fromTo(this.animatedScroll, e, {
                            duration: n,
                            easing: r,
                            lerp: l,
                            onStart: function() {
                                o && (_this.isLocked = !0), _this.isScrolling = !0;
                            },
                            onUpdate: function(t, e) {
                                _this.isScrolling = !0, _this.velocity = t - _this.animatedScroll, _this.direction = Math.sign(_this.velocity), _this.animatedScroll = t, _this.setScroll(_this.scroll), c && (_this.targetScroll = t), e || _this.emit(), e && (_this.reset(), _this.emit(), null == h || h(_this), _this.__preventNextScrollEvent = !0, requestAnimationFrame(function() {
                                    delete _this.__preventNextScrollEvent;
                                }));
                            }
                        });
                    }
                }
            }
        },
        {
            key: "rootElement",
            get: function get() {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
            }
        },
        {
            key: "limit",
            get: function get() {
                return this.options.__experimental__naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"];
            }
        },
        {
            key: "isHorizontal",
            get: function get() {
                return "horizontal" === this.options.orientation;
            }
        },
        {
            key: "actualScroll",
            get: function get() {
                return this.isHorizontal ? this.rootElement.scrollLeft : this.rootElement.scrollTop;
            }
        },
        {
            key: "scroll",
            get: function get() {
                return this.options.infinite ? (t = this.animatedScroll, e = this.limit, (t % e + e) % e) : this.animatedScroll;
                //TURBOPACK unreachable
                ;
                var t, e;
            }
        },
        {
            key: "progress",
            get: function get() {
                return 0 === this.limit ? 1 : this.scroll / this.limit;
            }
        },
        {
            key: "isSmooth",
            get: function get() {
                return this.__isSmooth;
            },
            set: function set(t) {
                this.__isSmooth !== t && (this.__isSmooth = t, this.toggleClassName("lenis-smooth", t));
            }
        },
        {
            key: "isScrolling",
            get: function get() {
                return this.__isScrolling;
            },
            set: function set(t) {
                this.__isScrolling !== t && (this.__isScrolling = t, this.toggleClassName("lenis-scrolling", t));
            }
        },
        {
            key: "isStopped",
            get: function get() {
                return this.__isStopped;
            },
            set: function set(t) {
                this.__isStopped !== t && (this.__isStopped = t, this.toggleClassName("lenis-stopped", t));
            }
        },
        {
            key: "isLocked",
            get: function get() {
                return this.__isLocked;
            },
            set: function set(t) {
                this.__isLocked !== t && (this.__isLocked = t, this.toggleClassName("lenis-locked", t));
            }
        },
        {
            key: "className",
            get: function get() {
                var t = "lenis";
                return this.isStopped && (t += " lenis-stopped"), this.isLocked && (t += " lenis-locked"), this.isScrolling && (t += " lenis-scrolling"), this.isSmooth && (t += " lenis-smooth"), t;
            }
        },
        {
            key: "toggleClassName",
            value: function toggleClassName(t, e) {
                this.rootElement.classList.toggle(t, e), this.emitter.emit("className change", this);
            }
        }
    ]);
    return Lenis;
}();
;
 //# sourceMappingURL=lenis.mjs.map
}),
"[project]/andreas-technology-v2/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clsx",
    ()=>clsx,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
;
function r(e) {
    var t, f, n = "";
    if ("string" == typeof e || "number" == typeof e) n += e;
    else if ("object" == (typeof e === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(e))) if (Array.isArray(e)) {
        var o = e.length;
        for(t = 0; t < o; t++)e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
    } else for(f in e)e[f] && (n && (n += " "), n += f);
    return n;
}
function clsx() {
    for(var e, t, f = 0, n = "", o = arguments.length; f < o; f++)(e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
    return n;
}
const __TURBOPACK__default__export__ = clsx;
}),
"[project]/andreas-technology-v2/node_modules/@studio-freight/react-lenis/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStore",
    ()=>createStore,
    "default",
    ()=>vanilla
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("andreas-technology-v2/node_modules/@studio-freight/react-lenis/node_modules/zustand/esm/vanilla.mjs")}`;
    }
};
;
var createStoreImpl = function(createState) {
    var state;
    var listeners = /* @__PURE__ */ new Set();
    var setState = function(partial, replace) {
        var nextState = typeof partial === "function" ? partial(state) : partial;
        if (!Object.is(nextState, state)) {
            var previousState = state;
            state = (replace != null ? replace : (typeof nextState === "undefined" ? "undefined" : (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(nextState)) !== "object" || nextState === null) ? nextState : Object.assign({}, state, nextState);
            listeners.forEach(function(listener) {
                return listener(state, previousState);
            });
        }
    };
    var getState = function() {
        return state;
    };
    var getInitialState = function() {
        return initialState;
    };
    var subscribe = function(listener) {
        listeners.add(listener);
        return function() {
            return listeners["delete"](listener);
        };
    };
    var destroy = function() {
        if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
            console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected.");
        }
        listeners.clear();
    };
    var api = {
        setState: setState,
        getState: getState,
        getInitialState: getInitialState,
        subscribe: subscribe,
        destroy: destroy
    };
    var initialState = state = createState(setState, getState, api);
    return api;
};
var createStore = function(createState) {
    return createState ? createStoreImpl(createState) : createStoreImpl;
};
var vanilla = function(createState) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'.");
    }
    return createStore(createState);
};
;
}),
"[project]/andreas-technology-v2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/andreas-technology-v2/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/andreas-technology-v2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/andreas-technology-v2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), shim = __turbopack_context__.r("[project]/andreas-technology-v2/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/andreas-technology-v2/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/andreas-technology-v2/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/andreas-technology-v2/node_modules/@studio-freight/react-lenis/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "create",
    ()=>create,
    "default",
    ()=>react,
    "useStore",
    ()=>useStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$react$2d$lenis$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@studio-freight/react-lenis/node_modules/zustand/esm/vanilla.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
const __TURBOPACK__import$2e$meta__ = {
    get url () {
        return `file://${__turbopack_context__.P("andreas-technology-v2/node_modules/@studio-freight/react-lenis/node_modules/zustand/esm/index.mjs")}`;
    }
};
;
;
;
;
var useDebugValue = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useDebugValue;
var useSyncExternalStoreWithSelector = __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useSyncExternalStoreWithSelector;
var didWarnAboutEqualityFn = false;
var identity = function(arg) {
    return arg;
};
function useStore(api) {
    var selector = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : identity, equalityFn = arguments.length > 2 ? arguments[2] : void 0;
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && equalityFn && !didWarnAboutEqualityFn) {
        console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937");
        didWarnAboutEqualityFn = true;
    }
    var slice = useSyncExternalStoreWithSelector(api.subscribe, api.getState, api.getServerState || api.getInitialState, selector, equalityFn);
    useDebugValue(slice);
    return slice;
}
var createImpl = function(createState) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production" && typeof createState !== "function") {
        console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");
    }
    var api = typeof createState === "function" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$react$2d$lenis$2f$node_modules$2f$zustand$2f$esm$2f$vanilla$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStore"])(createState) : createState;
    var useBoundStore = function(selector, equalityFn) {
        return useStore(api, selector, equalityFn);
    };
    Object.assign(useBoundStore, api);
    return useBoundStore;
};
var create = function(createState) {
    return createState ? createImpl(createState) : createImpl;
};
var react = function(createState) {
    if ((__TURBOPACK__import$2e$meta__.env ? __TURBOPACK__import$2e$meta__.env.MODE : void 0) !== "production") {
        console.warn("[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`.");
    }
    return create(createState);
};
;
}),
"[project]/andreas-technology-v2/node_modules/@studio-freight/react-lenis/dist/react-lenis.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lenis",
    ()=>y,
    "LenisContext",
    ()=>d,
    "ReactLenis",
    ()=>y,
    "default",
    ()=>y,
    "useLenis",
    ()=>b
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_sliced_to_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_to_consumable_array.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$hamo$2f$dist$2f$hamo$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@studio-freight/hamo/dist/hamo.modern.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@studio-freight/lenis/dist/lenis.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$react$2d$lenis$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@studio-freight/react-lenis/node_modules/zustand/esm/index.mjs [app-client] (ecmascript) <locals>");
;
;
;
;
;
;
;
"function" == typeof SuppressedError && SuppressedError;
"undefined" != typeof window && (window.reactLenisVersion = "0.0.47");
var d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$react$2d$lenis$2f$node_modules$2f$zustand$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["create"])(function() {
    return {};
});
function b(r) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
    var _ref = function() {
        var r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(d), e = m();
        return null != r ? r : e;
    }(), n = _ref.lenis, _$o = _ref.addCallback, _$a = _ref.removeCallback;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        if (r && _$o && _$a && n) return _$o(r, t), r(n), function() {
            _$a(r);
        };
    }, [
        n,
        _$o,
        _$a,
        t
    ].concat((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_to_consumable_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(e))), n;
}
var y = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(function(o, a) {
    var f = o.children, tmp = o.root, _$p = tmp === void 0 ? !1 : tmp, tmp1 = o.options, b = tmp1 === void 0 ? {} : tmp1, tmp2 = o.autoRaf, y = tmp2 === void 0 ? !0 : tmp2, tmp3 = o.rafPriority, v = tmp3 === void 0 ? 0 : tmp3, O = o.className, g = function(r, e) {
        var _$t = {};
        for(var _$n in r)Object.prototype.hasOwnProperty.call(r, _$n) && e.indexOf(_$n) < 0 && (_$t[_$n] = r[_$n]);
        if (null != r && "function" == typeof Object.getOwnPropertySymbols) {
            var _$o = 0;
            for(_$n = Object.getOwnPropertySymbols(r); _$o < _$n.length; _$o++)e.indexOf(_$n[_$o]) < 0 && Object.prototype.propertyIsEnumerable.call(r, _$n[_$o]) && (_$t[_$n[_$o]] = r[_$n[_$o]]);
        }
        return _$t;
    }(o, [
        "children",
        "root",
        "options",
        "autoRaf",
        "rafPriority",
        "className"
    ]);
    var h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), w = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null), _s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_sliced_to_array$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(void 0), 2), k = _s[0], N = _s[1], j = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]), C = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(r, e) {
        j.current.push({
            callback: r,
            priority: e
        }), j.current.sort(function(r, e) {
            return r.priority - e.priority;
        });
    }, []), E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(r) {
        j.current = j.current.filter(function(e) {
            return e.callback !== r;
        });
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useImperativeHandle"])(a, function() {
        return {
            wrapper: h.current,
            content: w.current,
            lenis: k
        };
    }, [
        k
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        var _$r = new __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$lenis$2f$dist$2f$lenis$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](Object.assign(Object.assign({}, b), !_$p && {
            wrapper: h.current,
            content: w.current
        }));
        return N(_$r), function() {
            _$r.destroy(), N(void 0);
        };
    }, [
        _$p,
        JSON.stringify(b)
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$studio$2d$freight$2f$hamo$2f$dist$2f$hamo$2e$modern$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useFrame"])(function(r) {
        y && (null == k || k.raf(r));
    }, v), (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        _$p && k && m.setState({
            lenis: k,
            addCallback: C,
            removeCallback: E
        });
    }, [
        _$p,
        k,
        C,
        E
    ]);
    var P = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function(r) {
        for(var e = 0; e < j.current.length; e++)j.current[e].callback(r);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return null == k || k.on("scroll", P), function() {
            null == k || k.off("scroll", P);
        };
    }, [
        k,
        P
    ]);
    var S = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])(function() {
        h.current && (h.current.className = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null == k ? void 0 : k.className, O));
    }, [
        k,
        O
    ]);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(function() {
        return S(), null == k || k.on("className change", S), function() {
            null == k || k.off("className change", S);
        };
    }, [
        k,
        S
    ]), __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(d.Provider, {
        value: {
            lenis: k,
            addCallback: C,
            removeCallback: E
        }
    }, _$p ? f : __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", Object.assign({
        ref: h,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(null == k ? void 0 : k.className, O)
    }, g), __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ref: w
    }, f)));
});
;
 //# sourceMappingURL=react-lenis.mjs.map
}),
]);

//# sourceMappingURL=andreas-technology-v2_4ffd0208._.js.map