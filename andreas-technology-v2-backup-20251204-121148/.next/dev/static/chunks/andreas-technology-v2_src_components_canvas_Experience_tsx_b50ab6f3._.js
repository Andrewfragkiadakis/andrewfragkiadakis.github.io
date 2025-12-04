(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/andreas-technology-v2/src/components/canvas/Experience.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Experience
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/@swc/helpers/esm/_type_of.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/src/contexts/ThemeContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/andreas-technology-v2/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function Experience() {
    _s();
    var canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    var particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    var mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0,
        lastX: 0,
        lastY: 0
    });
    var animationFrameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(undefined);
    var isInitializedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    var theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])().theme;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Experience.useEffect": function() {
            var canvas = canvasRef.current;
            if (!canvas) return;
            var ctx = canvas.getContext('2d');
            if (!ctx) return;
            // Set canvas size
            var resizeCanvas = {
                "Experience.useEffect.resizeCanvas": function() {
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                }
            }["Experience.useEffect.resizeCanvas"];
            resizeCanvas();
            window.addEventListener('resize', resizeCanvas);
            // Mouse move handler
            var handleMouseMove = {
                "Experience.useEffect.handleMouseMove": function(e) {
                    // Use clientX/clientY directly since canvas fills the screen
                    // Initialize mouse position on first movement
                    if (!isInitializedRef.current) {
                        mouseRef.current.x = e.clientX;
                        mouseRef.current.y = e.clientY;
                        mouseRef.current.lastX = mouseRef.current.x;
                        mouseRef.current.lastY = mouseRef.current.y;
                        isInitializedRef.current = true;
                        return; // Don't create particles on first movement
                    }
                    mouseRef.current.lastX = mouseRef.current.x;
                    mouseRef.current.lastY = mouseRef.current.y;
                    mouseRef.current.x = e.clientX;
                    mouseRef.current.y = e.clientY;
                    // Create particles along the path
                    var dx = mouseRef.current.x - mouseRef.current.lastX;
                    var dy = mouseRef.current.y - mouseRef.current.lastY;
                    var distance = Math.sqrt(dx * dx + dy * dy);
                    // Add particles with moderate frequency
                    var particlesToAdd = Math.floor(distance / 20);
                    for(var i = 0; i < particlesToAdd; i++){
                        var t = i / particlesToAdd;
                        var x = mouseRef.current.lastX + dx * t;
                        var y = mouseRef.current.lastY + dy * t;
                        particlesRef.current.push({
                            x: x,
                            y: y,
                            char: Math.random() > 0.5 ? '1' : '0',
                            life: 0,
                            maxLife: 40 + Math.random() * 20,
                            velocity: {
                                x: (Math.random() - 0.5) * 0.3,
                                y: Math.random() * 0.5 // Gentle downward only
                            }
                        });
                    }
                }
            }["Experience.useEffect.handleMouseMove"];
            window.addEventListener('mousemove', handleMouseMove);
            // Clear canvas when scrolling away from hero section
            var handleScroll = {
                "Experience.useEffect.handleScroll": function() {
                    var heroSection = document.getElementById('hero');
                    var scroller = document.getElementById('scroller');
                    if (heroSection && scroller) {
                        var rect = heroSection.getBoundingClientRect();
                        // If hero section is mostly out of view, clear particles
                        if (rect.bottom < window.innerHeight * 0.3) {
                            particlesRef.current = [];
                        }
                    }
                }
            }["Experience.useEffect.handleScroll"];
            var scroller = document.getElementById('scroller');
            if (scroller) {
                scroller.addEventListener('scroll', handleScroll);
            } else {
                window.addEventListener('scroll', handleScroll);
            }
            // Animation loop
            var animate = {
                "Experience.useEffect.animate": function() {
                    // Theme-aware background colors with faster fade
                    var bgColor = theme === 'light' ? 'rgba(255, 255, 255, 0.25)' // Faster fade for light mode
                     : 'rgba(9, 9, 11, 0.25)' // Faster fade for dark mode
                    ;
                    ctx.fillStyle = bgColor;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                    // Update and draw particles
                    particlesRef.current = particlesRef.current.filter({
                        "Experience.useEffect.animate": function(particle) {
                            particle.life++;
                            particle.x += particle.velocity.x;
                            particle.y += particle.velocity.y;
                            particle.velocity.y += 0.02; // Very gentle gravity
                            if (particle.life >= particle.maxLife) {
                                return false;
                            }
                            // Calculate opacity based on life with faster fade
                            var opacity = Math.max(0, 1 - particle.life / particle.maxLife * 1.5);
                            // Theme-aware colors: dark gray for light mode, Matrix green for dark
                            var color = theme === 'light' ? "rgba(31, 41, 55, ".concat(opacity, ")") // gray-800
                             : "rgba(0, 255, 65, ".concat(opacity, ")") // Matrix green
                            ;
                            ctx.fillStyle = color;
                            ctx.font = 'bold 24px monospace';
                            ctx.fillText(particle["char"], particle.x, particle.y);
                            return true;
                        }
                    }["Experience.useEffect.animate"]);
                    // Limit number of particles for performance and visual clarity
                    if (particlesRef.current.length > 100) {
                        particlesRef.current = particlesRef.current.slice(-100);
                    }
                    animationFrameRef.current = requestAnimationFrame(animate);
                }
            }["Experience.useEffect.animate"];
            animate();
            return ({
                "Experience.useEffect": function() {
                    window.removeEventListener('resize', resizeCanvas);
                    var scroller = document.getElementById('scroller');
                    if (scroller) {
                        scroller.removeEventListener('scroll', handleScroll);
                    } else {
                        window.removeEventListener('scroll', handleScroll);
                    }
                    window.removeEventListener('mousemove', handleMouseMove);
                    if (animationFrameRef.current) {
                        cancelAnimationFrame(animationFrameRef.current);
                    }
                }
            })["Experience.useEffect"];
        }
    }["Experience.useEffect"], [
        theme
    ]); // Re-run when theme changes
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-full w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            className: "w-full h-full cursor-none pointer-events-none",
            style: {
                background: theme === 'light' ? '#ffffff' : '#09090b'
            }
        }, void 0, false, {
            fileName: "[project]/andreas-technology-v2/src/components/canvas/Experience.tsx",
            lineNumber: 168,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/andreas-technology-v2/src/components/canvas/Experience.tsx",
        lineNumber: 167,
        columnNumber: 9
    }, this);
}
_s(Experience, "pZE0fAkcB39avc1JGyYBTcJmapw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$src$2f$contexts$2f$ThemeContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = Experience;
var _c;
__turbopack_context__.k.register(_c, "Experience");
if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$andreas$2d$technology$2d$v2$2f$node_modules$2f40$swc$2f$helpers$2f$esm$2f$_type_of$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["_"])(globalThis.$RefreshHelpers$) === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/andreas-technology-v2/src/components/canvas/Experience.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/andreas-technology-v2/src/components/canvas/Experience.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=andreas-technology-v2_src_components_canvas_Experience_tsx_b50ab6f3._.js.map