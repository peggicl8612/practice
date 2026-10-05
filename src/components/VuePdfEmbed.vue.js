/// <reference types="C:/Users/peggy.lin/Desktop/practice/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="C:/Users/peggy.lin/Desktop/practice/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import VuePdfEmbed from 'vue-pdf-embed';
const pdfUrl = '/test.pdf';
console.log("pdfUrl", pdfUrl);
console.log("pdfUrl type", typeof pdfUrl);
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
void {};
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.VuePdfEmbed} */
VuePdfEmbed;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    source: (__VLS_unwrap(pdfUrl, {})),
}));
const __VLS_2 = __VLS_1({
    source: (__VLS_unwrap(pdfUrl, {})),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
// @ts-ignore
[pdfUrl,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
