(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolio.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const links = [
    {
        href: "#about",
        label: "About"
    },
    {
        href: "#skills",
        label: "Skills"
    },
    {
        href: "#experience",
        label: "Experience"
    },
    {
        href: "#projects",
        label: "Projects"
    },
    {
        href: "#contact",
        label: "Contact"
    }
];
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 8)
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-200" : "bg-transparent"}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "mx-auto flex max-w-6xl items-center justify-between px-6 py-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#top",
                        className: "font-semibold tracking-tight text-zinc-900",
                        children: [
                            "Subban",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-brand",
                                children: "."
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 34,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "hidden items-center gap-8 md:flex",
                        children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: l.href,
                                    className: "text-sm text-zinc-700 transition-colors hover:text-brand",
                                    children: l.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 40,
                                    columnNumber: 15
                                }, this)
                            }, l.href, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 39,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hidden items-center gap-4 md:flex",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": "LinkedIn",
                                className: "text-zinc-700 transition-colors hover:text-brand",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedInIcon"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 51,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                className: "rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-dark",
                                children: "Hire Me"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 60,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        "aria-label": "Toggle menu",
                        onClick: ()=>setOpen((v)=>!v),
                        className: "flex h-9 w-9 items-center justify-center rounded-md text-zinc-900 md:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "relative block h-4 w-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-0 h-0.5 w-5 bg-zinc-900 transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 74,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-[7px] h-0.5 w-5 bg-zinc-900 transition-opacity ${open ? "opacity-0" : "opacity-100"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 79,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `absolute left-0 top-[14px] h-0.5 w-5 bg-zinc-900 transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-zinc-200 bg-white/95 px-6 py-4 backdrop-blur-md md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col gap-4",
                    children: [
                        links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: l.href,
                                    onClick: ()=>setOpen(false),
                                    className: "block text-sm text-zinc-700 hover:text-brand",
                                    children: l.label
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.tsx",
                                    lineNumber: 98,
                                    columnNumber: 17
                                }, this)
                            }, l.href, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 97,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolio$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profile"].linkedin,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                onClick: ()=>setOpen(false),
                                className: "flex items-center gap-2 text-sm text-zinc-700 hover:text-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkedInIcon"], {
                                        className: "h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    "LinkedIn"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 108,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#contact",
                                onClick: ()=>setOpen(false),
                                className: "inline-block rounded-full bg-brand px-4 py-2 text-sm font-medium text-white",
                                children: "Hire Me"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.tsx",
                                lineNumber: 120,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Navbar.tsx",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Navbar.tsx",
                    lineNumber: 95,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.tsx",
                lineNumber: 94,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Navbar.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(Navbar, "jPnA7EYNjCLn3fxFn1srHOcQMBA=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AndroidIcon",
    ()=>AndroidIcon,
    "AppleIcon",
    ()=>AppleIcon,
    "ArrowUpRightIcon",
    ()=>ArrowUpRightIcon,
    "GlobeIcon",
    ()=>GlobeIcon,
    "LinkedInIcon",
    ()=>LinkedInIcon,
    "MailIcon",
    ()=>MailIcon,
    "MapPinIcon",
    ()=>MapPinIcon,
    "PhoneIcon",
    ()=>PhoneIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function AppleIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = AppleIcon;
function AndroidIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0004.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02 1.9973-3.4592a.416.416 0 0 0-.1521-.5676.416.416 0 0 0-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0803L4.841 5.4493a.4161.4161 0 0 0-.5677-.1521.4157.4157 0 0 0-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 12,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
_c1 = AndroidIcon;
function GlobeIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "12",
                r: "9"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
_c2 = GlobeIcon;
function ArrowUpRightIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M7 17 17 7M7 7h10v10"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 45,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_c3 = ArrowUpRightIcon;
function MailIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                x: "3",
                y: "5",
                width: "18",
                height: "14",
                rx: "2"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 61,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "m3 7 9 6 9-6"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
_c4 = MailIcon;
function PhoneIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92Z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_c5 = PhoneIcon;
function MapPinIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.8,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                cx: "12",
                cy: "10",
                r: "3"
            }, void 0, false, {
                fileName: "[project]/src/components/icons.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
_c6 = MapPinIcon;
function LinkedInIcon(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: "currentColor",
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM7.114 20.452H3.558V9h3.556v11.452z"
        }, void 0, false, {
            fileName: "[project]/src/components/icons.tsx",
            lineNumber: 103,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/icons.tsx",
        lineNumber: 102,
        columnNumber: 5
    }, this);
}
_c7 = LinkedInIcon;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7;
__turbopack_context__.k.register(_c, "AppleIcon");
__turbopack_context__.k.register(_c1, "AndroidIcon");
__turbopack_context__.k.register(_c2, "GlobeIcon");
__turbopack_context__.k.register(_c3, "ArrowUpRightIcon");
__turbopack_context__.k.register(_c4, "MailIcon");
__turbopack_context__.k.register(_c5, "PhoneIcon");
__turbopack_context__.k.register(_c6, "MapPinIcon");
__turbopack_context__.k.register(_c7, "LinkedInIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/portfolio.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "currentlyExpanding",
    ()=>currentlyExpanding,
    "experience",
    ()=>experience,
    "interests",
    ()=>interests,
    "mobileProjects",
    ()=>mobileProjects,
    "profile",
    ()=>profile,
    "skills",
    ()=>skills,
    "webProjects",
    ()=>webProjects
]);
const profile = {
    name: "Subban Khan",
    title: "Full Stack + AI Engineer",
    tagline: "4+ Years Experience",
    email: "subbankhan96@gmail.com",
    phone: "+91 7568262629",
    location: "Jaipur, Rajasthan (Open to Remote)",
    summary: "Full Stack + AI Engineer with 4+ years of experience designing and building scalable, production-grade applications across the MERN stack — from RESTful APIs and microservices on the backend to responsive, user-facing interfaces on the frontend. Strong expertise in Node.js, React.js, and real-time communication systems (Socket.io, WebRTC), along with hands-on AI/LLM integration using OpenAI, Anthropic Claude, AWS Bedrock, RAG pipelines and vector databases. Proven track record shipping multiple live mobile and web applications end-to-end while collaborating remotely with cross-functional, cross-timezone teams.",
    linkedin: "https://www.linkedin.com/in/subban-khan-494966228/"
};
const skills = [
    {
        category: "Languages",
        items: [
            "JavaScript (ES6+)",
            "TypeScript",
            "Python",
            "SQL",
            "HTML5",
            "CSS3",
            "SASS/SCSS"
        ]
    },
    {
        category: "Backend",
        items: [
            "Node.js",
            "Express.js",
            "NestJS",
            "FastAPI",
            "RESTful API Design",
            "Microservices Architecture",
            "Socket.io",
            "WebRTC",
            "GraphQL",
            "Webhooks"
        ]
    },
    {
        category: "Frontend",
        items: [
            "React.js",
            "React Native",
            "Redux Toolkit",
            "Next.js",
            "Tailwind CSS",
            "Material-UI",
            "Bootstrap"
        ]
    },
    {
        category: "AI & LLM Integration",
        items: [
            "OpenAI API (GPT-4o, GPT-4o-mini)",
            "Anthropic Claude API",
            "AWS Bedrock",
            "LangChain",
            "LangGraph",
            "LlamaIndex",
            "Prompt Engineering",
            "Function Calling / Tool Use"
        ]
    },
    {
        category: "RAG & Vector Databases",
        items: [
            "Retrieval-Augmented Generation (RAG)",
            "Pinecone",
            "Embeddings (OpenAI, HuggingFace)"
        ]
    },
    {
        category: "State Management",
        items: [
            "Redux",
            "Context API",
            "Zustand"
        ]
    },
    {
        category: "Databases",
        items: [
            "MongoDB",
            "MySQL",
            "PostgreSQL",
            "Redis",
            "Prisma"
        ]
    },
    {
        category: "Message Brokers",
        items: [
            "Kafka",
            "Redis",
            "RabbitMQ"
        ]
    },
    {
        category: "APIs",
        items: [
            "RESTful APIs",
            "GraphQL",
            "WebSockets",
            "Socket.io",
            "SOAP APIs"
        ]
    },
    {
        category: "System Design",
        items: [
            "Microservices",
            "Monolithic Architecture",
            "NGINX",
            "Load Balancing",
            "API Gateway"
        ]
    },
    {
        category: "Auth & Security",
        items: [
            "OAuth",
            "JWT",
            "Role-Based Access Control (RBAC)",
            "API Security"
        ]
    },
    {
        category: "Testing & Debugging",
        items: [
            "Jest",
            "React Testing Library",
            "PyTest",
            "Chrome DevTools",
            "Postman"
        ]
    },
    {
        category: "DevOps & Cloud",
        items: [
            "Docker",
            "AWS (EC2, S3, Bedrock)",
            "CI/CD (GitHub Actions)",
            "Linux",
            "Nginx"
        ]
    },
    {
        category: "Version Control",
        items: [
            "Git",
            "GitHub",
            "GitLab"
        ]
    }
];
const currentlyExpanding = [
    "NestJS Microservices",
    "Advanced GraphQL",
    "Webhooks"
];
const experience = [
    {
        role: " Full Stack + AI  Engineer ",
        company: "Freelance",
        period: "Current",
        points: [
            "Working independently with clients to design, build, and ship full-stack web and mobile applications end-to-end using the MERN stack.",
            "Delivering RESTful APIs and backend services with Node.js and Express.js, paired with responsive React.js interfaces.",
            "Integrating AI/LLM features into client applications using OpenAI, Claude and AWS Bedrock, including RAG pipelines with vector databases.",
            "Managing projects from requirements through deployment, handling architecture, integrations, and client communication directly."
        ]
    },
    {
        role: "Full Stack Engineer",
        company: "Next Big Technology, Jaipur",
        period: "Previous",
        points: [
            "Developed and maintained full-stack features end-to-end — RESTful APIs and backend services using Node.js and Express.js, paired with responsive React.js interfaces.",
            "Designed MongoDB data models and integrations to support efficient storage and retrieval for web applications.",
            "Built and integrated front-end components with server-side logic, ensuring smooth end-to-end functionality across the stack.",
            "Contributed to the design of scalable microservices architecture for enterprise-grade applications."
        ]
    }
];
const mobileProjects = [
    {
        name: "Xtrafyl — Customer",
        description: "Customer-facing app for the Xtrafyl mobility platform.",
        links: [
            {
                label: "Android",
                url: "https://play.google.com/store/apps/details?id=com.xtrafylcustomer"
            },
            {
                label: "iOS",
                url: "https://apps.apple.com/us/app/xtrafyl/id6757584838"
            }
        ]
    },
    {
        name: "Xtrafyl — Driver",
        description: "Driver-side companion app for the Xtrafyl mobility platform.",
        links: [
            {
                label: "Android",
                url: "https://play.google.com/store/apps/details?id=com.xtrafyldriver"
            },
            {
                label: "iOS",
                url: "https://apps.apple.com/us/app/xtrafyl-driver/id6757585425"
            }
        ]
    },
    {
        name: "Travlo",
        description: "Travel booking and planning mobile experience.",
        links: [
            {
                label: "Android",
                url: "https://play.google.com/store/apps/details?id=com.travlo"
            },
            {
                label: "iOS",
                url: "https://apps.apple.com/in/app/travlo/id6738392849"
            }
        ]
    },
    {
        name: "Intercambio Inmobiliario",
        description: "Real-estate exchange platform for the Latin American market.",
        links: [
            {
                label: "Android",
                url: "https://play.google.com/store/apps/details?id=com.intercambio.inmobiliario"
            },
            {
                label: "iOS",
                url: "https://apps.apple.com/gt/app/intercambio-inmobiliario/id1624068664"
            }
        ]
    },
    {
        name: "Zenbase",
        description: "Meditate-to-earn wellness app.",
        links: [
            {
                label: "iOS",
                url: "https://apps.apple.com/in/app/zenbase-meditate-to-earn/id1619530022"
            }
        ]
    },
    {
        name: "Bloop — AI Social Network",
        description: "AI-powered social networking application.",
        featured: true,
        links: [
            {
                label: "Android",
                url: "https://play.google.com/store/apps/details?id=com.makeablooper"
            },
            {
                label: "iOS",
                url: "https://apps.apple.com/in/app/bloop-the-ai-social-network/id6752389728"
            }
        ]
    },
    {
        name: "Red Pocket Mobile",
        description: "Mobile carrier account management app.",
        links: [
            {
                label: "Android",
                url: "https://play.google.com/store/apps/details?id=com.redpocket"
            }
        ]
    },
    {
        name: "Boatflex",
        description: "Boat rental and marketplace platform.",
        links: [
            {
                label: "Android",
                url: "https://play.google.com/store/apps/details?id=com.boatflexaps"
            },
            {
                label: "iOS",
                url: "https://apps.apple.com/in/app/boatflex/id1563762907"
            }
        ]
    },
    {
        name: "Rapid Pair Portal",
        description: "Pairing and portal management mobile app.",
        links: [
            {
                label: "Android",
                url: "https://play.google.com/store/apps/details?id=com.rapid_pair_portal"
            },
            {
                label: "iOS",
                url: "https://apps.apple.com/in/app/rapid-pair-portal/id6743496437"
            }
        ]
    }
];
const webProjects = [
    {
        name: "Lucidia",
        links: [
            {
                label: "Web",
                url: "https://lucidia.vercel.app/"
            }
        ]
    },
    {
        name: "NextERP",
        links: [
            {
                label: "Web",
                url: "https://nexterp-murex.vercel.app/login"
            }
        ]
    },
    {
        name: "Xtrafyl",
        links: [
            {
                label: "Web",
                url: "https://xtrafyl.com/"
            }
        ]
    },
    {
        name: "Optimal Rating",
        links: [
            {
                label: "Web",
                url: "https://optimalrating.com/"
            }
        ]
    },
    {
        name: "Jockey Driver Challenge",
        links: [
            {
                label: "Web",
                url: "https://jockeydriverchallenge.com/"
            }
        ]
    },
    {
        name: "Tasky.ae",
        links: [
            {
                label: "Web",
                url: "https://tasky.ae/"
            }
        ]
    },
    {
        name: "Noonmar",
        links: [
            {
                label: "Web",
                url: "https://noonmar.com/"
            }
        ]
    },
    {
        name: "Vantage Commercial Realty",
        links: [
            {
                label: "Web",
                url: "https://vantagecr.com/"
            }
        ]
    }
];
const interests = [
    "Photography",
    "Traveling",
    "Graphic Designing",
    "Blogging",
    "Cooking"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0bm_x9h._.js.map