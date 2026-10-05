/// <reference types="C:/Users/peggy.lin/Desktop/practice/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="C:/Users/peggy.lin/Desktop/practice/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { ref } from 'vue';
import heroImg from '../assets/hero.png';
import viteLogo from '../assets/vite.svg';
import vueLogo from '../assets/vue.svg';
const count = ref(0);
const __VLS_ctx = /** @type {import('vue').ComponentPublicInstance} */ ({});
/** @typedef {{}} __VLS_LocalComponents */ ;
/** @typedef {import('vue').GlobalComponents} __VLS_GlobalComponents */ ;
var __VLS_components = /** @type {__VLS_LocalComponents & __VLS_GlobalComponents} */ ({});
var __VLS_intrinsics = /** @type {import('vue/jsx-runtime').JSX.IntrinsicElements} */ ({});
/** @typedef {{}} __VLS_LocalDirectives */ ;
var __VLS_directives = /** @type {__VLS_LocalDirectives & import('vue').GlobalDirectives} */ ({});
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(count, /** @type {import('vue').Ref<unknown>} */ ({}));
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    id: "center",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "hero" },
});
/** @type {__VLS_StyleScopedClasses['hero']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_unwrap(heroImg, /** @type {import('vue').Ref<unknown>} */ ({}))),
    ...{ class: "base" },
    width: "170",
    height: "179",
    alt: "",
});
/** @type {__VLS_StyleScopedClasses['base']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_unwrap(vueLogo, /** @type {import('vue').Ref<unknown>} */ ({}))),
    ...{ class: "framework" },
    alt: "Vue logo",
});
/** @type {__VLS_StyleScopedClasses['framework']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    src: (__VLS_unwrap(viteLogo, /** @type {import('vue').Ref<unknown>} */ ({}))),
    ...{ class: "vite" },
    alt: "Vite logo",
});
/** @type {__VLS_StyleScopedClasses['vite']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.code, __VLS_intrinsics.code)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: // @ts-ignore
        (...[$event]) => {
            void $event;
            return (count.value++);
            // @ts-ignore
            [heroImg, vueLogo, viteLogo, count,];
        } },
    type: "button",
    ...{ class: "counter" },
});
/** @type {__VLS_StyleScopedClasses['counter']} */ ;
(count.value);
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "ticks" },
});
/** @type {__VLS_StyleScopedClasses['ticks']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    id: "next-steps",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "docs",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...{ class: "icon" },
    role: "presentation",
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.use, __VLS_intrinsics.use)({
    href: "/icons.svg#documentation-icon",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "https://vite.dev/",
    target: "_blank",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "logo" },
    src: (__VLS_unwrap(viteLogo, /** @type {import('vue').Ref<unknown>} */ ({}))),
    alt: "",
});
/** @type {__VLS_StyleScopedClasses['logo']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "https://vuejs.org/",
    target: "_blank",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.img)({
    ...{ class: "button-icon" },
    src: (__VLS_unwrap(vueLogo, /** @type {import('vue').Ref<unknown>} */ ({}))),
    alt: "",
});
/** @type {__VLS_StyleScopedClasses['button-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    id: "social",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...{ class: "icon" },
    role: "presentation",
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.use, __VLS_intrinsics.use)({
    href: "/icons.svg#social-icon",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.ul, __VLS_intrinsics.ul)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "https://github.com/vitejs/vite",
    target: "_blank",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...{ class: "button-icon" },
    role: "presentation",
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['button-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.use, __VLS_intrinsics.use)({
    href: "/icons.svg#github-icon",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "https://chat.vite.dev/",
    target: "_blank",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...{ class: "button-icon" },
    role: "presentation",
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['button-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.use, __VLS_intrinsics.use)({
    href: "/icons.svg#discord-icon",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "https://x.com/vite_js",
    target: "_blank",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...{ class: "button-icon" },
    role: "presentation",
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['button-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.use, __VLS_intrinsics.use)({
    href: "/icons.svg#x-icon",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.li, __VLS_intrinsics.li)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "https://bsky.app/profile/vite.dev",
    target: "_blank",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.svg, __VLS_intrinsics.svg)({
    ...{ class: "button-icon" },
    role: "presentation",
    'aria-hidden': "true",
});
/** @type {__VLS_StyleScopedClasses['button-icon']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.use, __VLS_intrinsics.use)({
    href: "/icons.svg#bluesky-icon",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "ticks" },
});
/** @type {__VLS_StyleScopedClasses['ticks']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
    id: "spacer",
});
// @ts-ignore
[vueLogo, viteLogo, count,];
const __VLS_export = (await import('vue')).defineComponent({});
export default /** @type {typeof __VLS_export} */ ({});
