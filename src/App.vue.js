/// <reference types="C:/Users/peggy.lin/Desktop/practice/node_modules/@vue/language-core/types/template-helpers.d.ts" />
/// <reference types="C:/Users/peggy.lin/Desktop/practice/node_modules/@vue/language-core/types/props-fallback.d.ts" />
import { computed, ref } from 'vue';
import { Icon } from '@iconify/vue';
const posts = [
    { id: 1, text: '秋日小禮物抽獎！留言告訴我你最近最喜歡的一件小事 🍂', date: '2026 年 10 月 3 日', replies: 183, likes: 421, tone: 'coral' },
    { id: 2, text: '新品開箱｜陪我一起看看這次的新色，你最喜歡哪一款？', date: '2026 年 9 月 28 日', replies: 57, likes: 208, tone: 'violet' },
    { id: 3, text: '週末散步日記，分享三間最近很喜歡的城市角落。', date: '2026 年 9 月 21 日', replies: 32, likes: 156, tone: 'mint' },
];
const entrants = [
    { handle: '@cocoday', name: 'Coco', avatar: 'CO', comment: '最近最喜歡的事，是每天都有好好吃早餐！', time: '2 小時' },
    { handle: '@mori.life', name: 'Mori', avatar: 'MO', comment: '開始學會慢慢生活，也開始喜歡秋天了 🍂', time: '3 小時' },
    { handle: '@ann.__day', name: 'Ann', avatar: 'AN', comment: '和好久不見的朋友見面聊天！', time: '5 小時' },
    { handle: '@yuuuuu_17', name: 'Yuu', avatar: 'YU', comment: '完成了拖很久的房間整理 ✨', time: '6 小時' },
    { handle: '@littlemei', name: '小美', avatar: 'ME', comment: '最近最喜歡下班後散步回家的時間。', time: '8 小時' },
    { handle: '@hao.eats', name: 'Hao', avatar: 'HA', comment: '找到一間很好吃的巷口麵店！', time: '9 小時' },
    { handle: '@ru.living', name: 'Ru', avatar: 'RU', comment: '第一次烤出成功的可頌，超開心。', time: '12 小時' },
];
const loggedIn = ref(false);
const currentStep = ref('posts');
const selectedPostId = ref(1);
const isImporting = ref(false);
const showPostMenu = ref(false);
const prizeName = ref('秋日限定禮盒');
const winnerCount = ref(3);
const uniqueOnly = ref(true);
const noRepeatWinner = ref(true);
const excludeMe = ref(true);
const winners = ref([]);
const isDrawing = ref(false);
const selectedPost = computed(() => posts.find((post) => post.id === selectedPostId.value) ?? posts[0]);
const stepNumber = computed(() => currentStep.value === 'posts' ? 1 : currentStep.value === 'rules' ? 2 : 3);
function login() {
    loggedIn.value = true;
}
function selectPost(id) {
    selectedPostId.value = id;
    showPostMenu.value = false;
}
function importReplies() {
    isImporting.value = true;
    window.setTimeout(() => {
        isImporting.value = false;
        currentStep.value = 'rules';
    }, 850);
}
function drawWinners() {
    isDrawing.value = true;
    winners.value = [];
    window.setTimeout(() => {
        const pool = [...entrants].sort(() => Math.random() - 0.5);
        winners.value = pool.slice(0, winnerCount.value);
        isDrawing.value = false;
        currentStep.value = 'result';
    }, 1300);
}
function restart() {
    winners.value = [];
    currentStep.value = 'posts';
}
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
void __VLS_ctx, __VLS_components, __VLS_intrinsics, __VLS_directives;
// @ts-ignore
__VLS_withDotValue(loggedIn, {});
// @ts-ignore
__VLS_withDotValue(currentStep, {});
// @ts-ignore
__VLS_withDotValue(stepNumber, {});
// @ts-ignore
__VLS_withDotValue(showPostMenu, {});
// @ts-ignore
__VLS_withDotValue(selectedPostId, {});
// @ts-ignore
__VLS_withDotValue(isImporting, {});
// @ts-ignore
__VLS_withDotValue(selectedPost, {});
// @ts-ignore
__VLS_withDotValue(winnerCount, {});
// @ts-ignore
__VLS_withDotValue(entrants, {});
// @ts-ignore
__VLS_withDotValue(isDrawing, {});
// @ts-ignore
__VLS_withDotValue(winners, {});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "app-shell" },
});
/** @type {__VLS_StyleScopedClasses['app-shell']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.header, __VLS_intrinsics.header)({
    ...{ class: "topbar" },
});
/** @type {__VLS_StyleScopedClasses['topbar']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (restart) },
    ...{ class: "brand" },
    type: "button",
});
/** @type {__VLS_StyleScopedClasses['brand']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
    ...{ class: "brand-mark" },
});
/** @type {__VLS_StyleScopedClasses['brand-mark']} */ ;
let __VLS_0;
/** @ts-ignore @type { | typeof __VLS_components.Icon} */
Icon;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    // @ts-ignore
    icon: "solar:gift-bold",
}));
const __VLS_2 = __VLS_1({
    icon: "solar:gift-bold",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "header-actions" },
});
/** @type {__VLS_StyleScopedClasses['header-actions']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#how-it-works",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ class: "icon-button" },
    type: "button",
    'aria-label': "切換外觀",
});
/** @type {__VLS_StyleScopedClasses['icon-button']} */ ;
let __VLS_5;
/** @ts-ignore @type { | typeof __VLS_components.Icon} */
Icon;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent1(__VLS_5, new __VLS_5({
    // @ts-ignore
    icon: "solar:sun-2-linear",
}));
const __VLS_7 = __VLS_6({
    icon: "solar:sun-2-linear",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
if (loggedIn.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "account-chip" },
    });
    /** @type {__VLS_StyleScopedClasses['account-chip']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: "mini-avatar" },
    });
    /** @type {__VLS_StyleScopedClasses['mini-avatar']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    let __VLS_10;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent1(__VLS_10, new __VLS_10({
        // @ts-ignore
        icon: "solar:alt-arrow-down-linear",
    }));
    const __VLS_12 = __VLS_11({
        icon: "solar:alt-arrow-down-linear",
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
}
if (!loggedIn.value) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
        ...{ class: "landing" },
    });
    /** @type {__VLS_StyleScopedClasses['landing']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
        ...{ class: "hero-section" },
    });
    /** @type {__VLS_StyleScopedClasses['hero-section']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "hero-copy" },
    });
    /** @type {__VLS_StyleScopedClasses['hero-copy']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "eyebrow" },
    });
    /** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.br)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.em, __VLS_intrinsics.em)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.br)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (login) },
        ...{ class: "primary-button login-button" },
        type: "button",
    });
    /** @type {__VLS_StyleScopedClasses['primary-button']} */ ;
    /** @type {__VLS_StyleScopedClasses['login-button']} */ ;
    let __VLS_15;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_16 = __VLS_asFunctionalComponent1(__VLS_15, new __VLS_15({
        // @ts-ignore
        icon: "simple-icons:threads",
    }));
    const __VLS_17 = __VLS_16({
        icon: "simple-icons:threads",
    }, ...__VLS_functionalComponentArgsRest(__VLS_16));
    let __VLS_20;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_21 = __VLS_asFunctionalComponent1(__VLS_20, new __VLS_20({
        // @ts-ignore
        icon: "solar:arrow-right-linear",
    }));
    const __VLS_22 = __VLS_21({
        icon: "solar:arrow-right-linear",
    }, ...__VLS_functionalComponentArgsRest(__VLS_21));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "security-note" },
    });
    /** @type {__VLS_StyleScopedClasses['security-note']} */ ;
    let __VLS_25;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_26 = __VLS_asFunctionalComponent1(__VLS_25, new __VLS_25({
        // @ts-ignore
        icon: "solar:shield-check-linear",
    }));
    const __VLS_27 = __VLS_26({
        icon: "solar:shield-check-linear",
    }, ...__VLS_functionalComponentArgsRest(__VLS_26));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "hero-visual" },
        'aria-hidden': "true",
    });
    /** @type {__VLS_StyleScopedClasses['hero-visual']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "decor-star star-one" },
    });
    /** @type {__VLS_StyleScopedClasses['decor-star']} */ ;
    /** @type {__VLS_StyleScopedClasses['star-one']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "decor-star star-two" },
    });
    /** @type {__VLS_StyleScopedClasses['decor-star']} */ ;
    /** @type {__VLS_StyleScopedClasses['star-two']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "post-card-demo" },
    });
    /** @type {__VLS_StyleScopedClasses['post-card-demo']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "demo-user" },
    });
    /** @type {__VLS_StyleScopedClasses['demo-user']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "demo-avatar" },
    });
    /** @type {__VLS_StyleScopedClasses['demo-avatar']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    let __VLS_30;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_31 = __VLS_asFunctionalComponent1(__VLS_30, new __VLS_30({
        // @ts-ignore
        icon: "solar:menu-dots-bold",
    }));
    const __VLS_32 = __VLS_31({
        icon: "solar:menu-dots-bold",
    }, ...__VLS_functionalComponentArgsRest(__VLS_31));
    __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.br)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "demo-icons" },
    });
    /** @type {__VLS_StyleScopedClasses['demo-icons']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    let __VLS_35;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_36 = __VLS_asFunctionalComponent1(__VLS_35, new __VLS_35({
        // @ts-ignore
        icon: "solar:heart-linear",
    }));
    const __VLS_37 = __VLS_36({
        icon: "solar:heart-linear",
    }, ...__VLS_functionalComponentArgsRest(__VLS_36));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    let __VLS_40;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_41 = __VLS_asFunctionalComponent1(__VLS_40, new __VLS_40({
        // @ts-ignore
        icon: "solar:chat-round-line-linear",
    }));
    const __VLS_42 = __VLS_41({
        icon: "solar:chat-round-line-linear",
    }, ...__VLS_functionalComponentArgsRest(__VLS_41));
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    let __VLS_45;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_46 = __VLS_asFunctionalComponent1(__VLS_45, new __VLS_45({
        // @ts-ignore
        icon: "solar:repeat-linear",
    }));
    const __VLS_47 = __VLS_46({
        icon: "solar:repeat-linear",
    }, ...__VLS_functionalComponentArgsRest(__VLS_46));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "comment-float comment-a" },
    });
    /** @type {__VLS_StyleScopedClasses['comment-float']} */ ;
    /** @type {__VLS_StyleScopedClasses['comment-a']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    let __VLS_50;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_51 = __VLS_asFunctionalComponent1(__VLS_50, new __VLS_50({
        // @ts-ignore
        icon: "solar:check-circle-bold",
    }));
    const __VLS_52 = __VLS_51({
        icon: "solar:check-circle-bold",
    }, ...__VLS_functionalComponentArgsRest(__VLS_51));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "comment-float comment-b" },
    });
    /** @type {__VLS_StyleScopedClasses['comment-float']} */ ;
    /** @type {__VLS_StyleScopedClasses['comment-b']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    let __VLS_55;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_56 = __VLS_asFunctionalComponent1(__VLS_55, new __VLS_55({
        // @ts-ignore
        icon: "solar:check-circle-bold",
    }));
    const __VLS_57 = __VLS_56({
        icon: "solar:check-circle-bold",
    }, ...__VLS_functionalComponentArgsRest(__VLS_56));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "winner-badge" },
    });
    /** @type {__VLS_StyleScopedClasses['winner-badge']} */ ;
    let __VLS_60;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_61 = __VLS_asFunctionalComponent1(__VLS_60, new __VLS_60({
        // @ts-ignore
        icon: "solar:cup-star-bold",
    }));
    const __VLS_62 = __VLS_61({
        icon: "solar:cup-star-bold",
    }, ...__VLS_functionalComponentArgsRest(__VLS_61));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
        id: "how-it-works",
        ...{ class: "trust-row" },
    });
    /** @type {__VLS_StyleScopedClasses['trust-row']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({});
    let __VLS_65;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent1(__VLS_65, new __VLS_65({
        // @ts-ignore
        icon: "solar:bolt-circle-bold",
    }));
    const __VLS_67 = __VLS_66({
        icon: "solar:bolt-circle-bold",
    }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({});
    let __VLS_70;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_71 = __VLS_asFunctionalComponent1(__VLS_70, new __VLS_70({
        // @ts-ignore
        icon: "solar:users-group-rounded-bold",
    }));
    const __VLS_72 = __VLS_71({
        icon: "solar:users-group-rounded-bold",
    }, ...__VLS_functionalComponentArgsRest(__VLS_71));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({});
    let __VLS_75;
    /** @ts-ignore @type { | typeof __VLS_components.Icon} */
    Icon;
    // @ts-ignore
    const __VLS_76 = __VLS_asFunctionalComponent1(__VLS_75, new __VLS_75({
        // @ts-ignore
        icon: "solar:shield-check-bold",
    }));
    const __VLS_77 = __VLS_76({
        icon: "solar:shield-check-bold",
    }, ...__VLS_functionalComponentArgsRest(__VLS_76));
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.main, __VLS_intrinsics.main)({
        ...{ class: "dashboard" },
    });
    /** @type {__VLS_StyleScopedClasses['dashboard']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
        ...{ class: "dashboard-head" },
    });
    /** @type {__VLS_StyleScopedClasses['dashboard-head']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "eyebrow" },
    });
    /** @type {__VLS_StyleScopedClasses['eyebrow']} */ ;
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
    if (currentStep.value === 'posts') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
    }
    else if (currentStep.value === 'rules') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({});
    }
    if (currentStep.value === 'posts') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    }
    else if (currentStep.value === 'rules') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
    }
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: "steps" },
    });
    /** @type {__VLS_StyleScopedClasses['steps']} */ ;
    const __VLS_80 = __VLS_tryAsConstant((['選擇貼文', '設定規則', '抽出得主']));
    for (const [label, index] of __VLS_vFor(__VLS_nonNull(__VLS_80))) {
        __VLS_asFunctionalElement1(__VLS_intrinsics.template)({
            key: (label),
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: (['step', { active: stepNumber.value === index + 1, done: stepNumber.value > index + 1 }]) },
        });
        /** @type {__VLS_StyleScopedClasses['active']} */ ;
        /** @type {__VLS_StyleScopedClasses['done']} */ ;
        /** @type {__VLS_StyleScopedClasses['step']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        if (stepNumber.value > index + 1) {
            let __VLS_81;
            /** @ts-ignore @type { | typeof __VLS_components.Icon} */
            Icon;
            // @ts-ignore
            const __VLS_82 = __VLS_asFunctionalComponent1(__VLS_81, new __VLS_81({
                // @ts-ignore
                icon: "solar:check-read-linear",
            }));
            const __VLS_83 = __VLS_82({
                icon: "solar:check-read-linear",
            }, ...__VLS_functionalComponentArgsRest(__VLS_82));
        }
        (stepNumber.value > index + 1 ? '' : index + 1);
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
        (label);
        if (index < 2) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
        }
        // @ts-ignore
        [loggedIn, loggedIn, currentStep, currentStep, currentStep, currentStep, stepNumber, stepNumber, stepNumber, stepNumber,];
    }
    if (currentStep.value === 'posts') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
            ...{ class: "workspace" },
        });
        /** @type {__VLS_StyleScopedClasses['workspace']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "section-title" },
        });
        /** @type {__VLS_StyleScopedClasses['section-title']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "post-select" },
        });
        /** @type {__VLS_StyleScopedClasses['post-select']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: // @ts-ignore
                (...[$event]) => {
                    void $event;
                    if (!!(!loggedIn.value))
                        throw 0;
                    if (!(currentStep.value === 'posts'))
                        throw 0;
                    return (showPostMenu.value = !showPostMenu.value);
                    // @ts-ignore
                    [currentStep, showPostMenu, showPostMenu,];
                } },
            type: "button",
        });
        let __VLS_86;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_87 = __VLS_asFunctionalComponent1(__VLS_86, new __VLS_86({
            // @ts-ignore
            icon: "solar:sort-from-top-to-bottom-linear",
        }));
        const __VLS_88 = __VLS_87({
            icon: "solar:sort-from-top-to-bottom-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_87));
        let __VLS_91;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_92 = __VLS_asFunctionalComponent1(__VLS_91, new __VLS_91({
            // @ts-ignore
            icon: "solar:alt-arrow-down-linear",
        }));
        const __VLS_93 = __VLS_92({
            icon: "solar:alt-arrow-down-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_92));
        if (showPostMenu.value) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "select-menu" },
            });
            /** @type {__VLS_StyleScopedClasses['select-menu']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                type: "button",
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                type: "button",
            });
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "post-grid" },
        });
        /** @type {__VLS_StyleScopedClasses['post-grid']} */ ;
        const __VLS_96 = __VLS_tryAsConstant((__VLS_unwrap(posts, {})));
        for (const [post] of __VLS_vFor(__VLS_nonNull(__VLS_96))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                ...{ onClick: // @ts-ignore
                    (...[$event]) => {
                        void $event;
                        if (!!(!loggedIn.value))
                            throw 0;
                        if (!(currentStep.value === 'posts'))
                            throw 0;
                        return (selectPost(post.id));
                        // @ts-ignore
                        [showPostMenu, posts,];
                    } },
                key: (post.id),
                ...{ class: (['post-option', { selected: selectedPostId.value === post.id }]) },
                type: "button",
            });
            /** @type {__VLS_StyleScopedClasses['selected']} */ ;
            /** @type {__VLS_StyleScopedClasses['post-option']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: (['post-illustration', post.tone]) },
            });
            /** @type {__VLS_StyleScopedClasses['post-illustration']} */ ;
            let __VLS_97;
            /** @ts-ignore @type { | typeof __VLS_components.Icon} */
            Icon;
            // @ts-ignore
            const __VLS_98 = __VLS_asFunctionalComponent1(__VLS_97, new __VLS_97({
                // @ts-ignore
                icon: (post.id === 1 ? 'solar:gift-bold-duotone' : post.id === 2 ? 'solar:camera-bold-duotone' : 'solar:leaf-bold-duotone'),
            }));
            const __VLS_99 = __VLS_98({
                icon: (post.id === 1 ? 'solar:gift-bold-duotone' : post.id === 2 ? 'solar:camera-bold-duotone' : 'solar:leaf-bold-duotone'),
            }, ...__VLS_functionalComponentArgsRest(__VLS_98));
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "post-content" },
            });
            /** @type {__VLS_StyleScopedClasses['post-content']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
            (post.date);
            __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
            (post.text);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "post-stats" },
            });
            /** @type {__VLS_StyleScopedClasses['post-stats']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
            let __VLS_102;
            /** @ts-ignore @type { | typeof __VLS_components.Icon} */
            Icon;
            // @ts-ignore
            const __VLS_103 = __VLS_asFunctionalComponent1(__VLS_102, new __VLS_102({
                // @ts-ignore
                icon: "solar:chat-round-line-linear",
            }));
            const __VLS_104 = __VLS_103({
                icon: "solar:chat-round-line-linear",
            }, ...__VLS_functionalComponentArgsRest(__VLS_103));
            (post.replies);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
            let __VLS_107;
            /** @ts-ignore @type { | typeof __VLS_components.Icon} */
            Icon;
            // @ts-ignore
            const __VLS_108 = __VLS_asFunctionalComponent1(__VLS_107, new __VLS_107({
                // @ts-ignore
                icon: "solar:heart-linear",
            }));
            const __VLS_109 = __VLS_108({
                icon: "solar:heart-linear",
            }, ...__VLS_functionalComponentArgsRest(__VLS_108));
            (post.likes);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "radio-dot" },
            });
            /** @type {__VLS_StyleScopedClasses['radio-dot']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
            // @ts-ignore
            [selectedPostId,];
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "workspace-footer" },
        });
        /** @type {__VLS_StyleScopedClasses['workspace-footer']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        let __VLS_112;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_113 = __VLS_asFunctionalComponent1(__VLS_112, new __VLS_112({
            // @ts-ignore
            icon: "solar:info-circle-linear",
        }));
        const __VLS_114 = __VLS_113({
            icon: "solar:info-circle-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_113));
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (importReplies) },
            ...{ class: "primary-button" },
            type: "button",
            disabled: (isImporting.value),
        });
        /** @type {__VLS_StyleScopedClasses['primary-button']} */ ;
        if (isImporting.value) {
            let __VLS_117;
            /** @ts-ignore @type { | typeof __VLS_components.Icon} */
            Icon;
            // @ts-ignore
            const __VLS_118 = __VLS_asFunctionalComponent1(__VLS_117, new __VLS_117({
                // @ts-ignore
                icon: "svg-spinners:180-ring-with-bg",
            }));
            const __VLS_119 = __VLS_118({
                icon: "svg-spinners:180-ring-with-bg",
            }, ...__VLS_functionalComponentArgsRest(__VLS_118));
        }
        else {
            let __VLS_122;
            /** @ts-ignore @type { | typeof __VLS_components.Icon} */
            Icon;
            // @ts-ignore
            const __VLS_123 = __VLS_asFunctionalComponent1(__VLS_122, new __VLS_122({
                // @ts-ignore
                icon: "solar:download-minimalistic-linear",
            }));
            const __VLS_124 = __VLS_123({
                icon: "solar:download-minimalistic-linear",
            }, ...__VLS_functionalComponentArgsRest(__VLS_123));
        }
        (isImporting.value ? '正在匯入留言...' : `匯入 ${selectedPost.value.replies} 則留言`);
        if (!isImporting.value) {
            let __VLS_127;
            /** @ts-ignore @type { | typeof __VLS_components.Icon} */
            Icon;
            // @ts-ignore
            const __VLS_128 = __VLS_asFunctionalComponent1(__VLS_127, new __VLS_127({
                // @ts-ignore
                icon: "solar:arrow-right-linear",
            }));
            const __VLS_129 = __VLS_128({
                icon: "solar:arrow-right-linear",
            }, ...__VLS_functionalComponentArgsRest(__VLS_128));
        }
    }
    else if (currentStep.value === 'rules') {
        __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
            ...{ class: "rules-layout" },
        });
        /** @type {__VLS_StyleScopedClasses['rules-layout']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "rules-card" },
        });
        /** @type {__VLS_StyleScopedClasses['rules-card']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-heading" },
        });
        /** @type {__VLS_StyleScopedClasses['card-heading']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        let __VLS_132;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_133 = __VLS_asFunctionalComponent1(__VLS_132, new __VLS_132({
            // @ts-ignore
            icon: "solar:tuning-2-bold",
        }));
        const __VLS_134 = __VLS_133({
            icon: "solar:tuning-2-bold",
        }, ...__VLS_functionalComponentArgsRest(__VLS_133));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "field-label" },
        });
        /** @type {__VLS_StyleScopedClasses['field-label']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "text-field" },
        });
        /** @type {__VLS_StyleScopedClasses['text-field']} */ ;
        let __VLS_137;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_138 = __VLS_asFunctionalComponent1(__VLS_137, new __VLS_137({
            // @ts-ignore
            icon: "solar:gift-linear",
        }));
        const __VLS_139 = __VLS_138({
            icon: "solar:gift-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_138));
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({});
        (__VLS_unwrap(prizeName, {}));
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "field-label" },
        });
        /** @type {__VLS_StyleScopedClasses['field-label']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "counter-field" },
        });
        /** @type {__VLS_StyleScopedClasses['counter-field']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: // @ts-ignore
                (...[$event]) => {
                    void $event;
                    if (!!(!loggedIn.value))
                        throw 0;
                    if (!!(currentStep.value === 'posts'))
                        throw 0;
                    if (!(currentStep.value === 'rules'))
                        throw 0;
                    return (winnerCount.value = Math.max(1, winnerCount.value - 1));
                    // @ts-ignore
                    [currentStep, isImporting, isImporting, isImporting, isImporting, selectedPost, prizeName, winnerCount, winnerCount,];
                } },
            type: "button",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
        (winnerCount.value);
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: // @ts-ignore
                (...[$event]) => {
                    void $event;
                    if (!!(!loggedIn.value))
                        throw 0;
                    if (!!(currentStep.value === 'posts'))
                        throw 0;
                    if (!(currentStep.value === 'rules'))
                        throw 0;
                    return (winnerCount.value = Math.min(7, winnerCount.value + 1));
                    // @ts-ignore
                    [winnerCount, winnerCount, winnerCount,];
                } },
            type: "button",
        });
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "divider" },
        });
        /** @type {__VLS_StyleScopedClasses['divider']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "toggle-row" },
        });
        /** @type {__VLS_StyleScopedClasses['toggle-row']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            type: "checkbox",
        });
        (__VLS_unwrap(uniqueOnly, {}));
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "toggle-row" },
        });
        /** @type {__VLS_StyleScopedClasses['toggle-row']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            type: "checkbox",
        });
        (__VLS_unwrap(noRepeatWinner, {}));
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
            ...{ class: "toggle-row" },
        });
        /** @type {__VLS_StyleScopedClasses['toggle-row']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.input)({
            type: "checkbox",
        });
        (__VLS_unwrap(excludeMe, {}));
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "summary-card" },
        });
        /** @type {__VLS_StyleScopedClasses['summary-card']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "card-heading" },
        });
        /** @type {__VLS_StyleScopedClasses['card-heading']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
            ...{ class: "green" },
        });
        /** @type {__VLS_StyleScopedClasses['green']} */ ;
        let __VLS_142;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_143 = __VLS_asFunctionalComponent1(__VLS_142, new __VLS_142({
            // @ts-ignore
            icon: "solar:users-group-rounded-bold",
        }));
        const __VLS_144 = __VLS_143({
            icon: "solar:users-group-rounded-bold",
        }, ...__VLS_functionalComponentArgsRest(__VLS_143));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.h2, __VLS_intrinsics.h2)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            type: "button",
        });
        let __VLS_147;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_148 = __VLS_asFunctionalComponent1(__VLS_147, new __VLS_147({
            // @ts-ignore
            icon: "solar:refresh-linear",
        }));
        const __VLS_149 = __VLS_148({
            icon: "solar:refresh-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_148));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "stats-panel" },
        });
        /** @type {__VLS_StyleScopedClasses['stats-panel']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({
            ...{ class: "muted" },
        });
        /** @type {__VLS_StyleScopedClasses['muted']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.i, __VLS_intrinsics.i)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({
            ...{ class: "green-text" },
        });
        /** @type {__VLS_StyleScopedClasses['green-text']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "entrant-preview" },
        });
        /** @type {__VLS_StyleScopedClasses['entrant-preview']} */ ;
        const __VLS_152 = __VLS_tryAsConstant((entrants.value.slice(0, 4)));
        for (const [person] of __VLS_vFor(__VLS_nonNull(__VLS_152))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                key: (person.handle),
            });
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "entrant-avatar" },
            });
            /** @type {__VLS_StyleScopedClasses['entrant-avatar']} */ ;
            (person.avatar);
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
            __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
            (person.handle);
            __VLS_asFunctionalElement1(__VLS_intrinsics.small, __VLS_intrinsics.small)({});
            (person.comment);
            __VLS_asFunctionalElement1(__VLS_intrinsics.em, __VLS_intrinsics.em)({});
            (person.time);
            // @ts-ignore
            [uniqueOnly, noRepeatWinner, excludeMe, entrants,];
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "more-entrants" },
        });
        /** @type {__VLS_StyleScopedClasses['more-entrants']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "draw-bar" },
        });
        /** @type {__VLS_StyleScopedClasses['draw-bar']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: // @ts-ignore
                (...[$event]) => {
                    void $event;
                    if (!!(!loggedIn.value))
                        throw 0;
                    if (!!(currentStep.value === 'posts'))
                        throw 0;
                    if (!(currentStep.value === 'rules'))
                        throw 0;
                    return (currentStep.value = 'posts');
                    // @ts-ignore
                    [currentStep,];
                } },
            ...{ class: "back-button" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['back-button']} */ ;
        let __VLS_153;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_154 = __VLS_asFunctionalComponent1(__VLS_153, new __VLS_153({
            // @ts-ignore
            icon: "solar:arrow-left-linear",
        }));
        const __VLS_155 = __VLS_154({
            icon: "solar:arrow-left-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_154));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
        __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
        (winnerCount.value);
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (drawWinners) },
            ...{ class: "primary-button draw-button" },
            type: "button",
            disabled: (isDrawing.value),
        });
        /** @type {__VLS_StyleScopedClasses['primary-button']} */ ;
        /** @type {__VLS_StyleScopedClasses['draw-button']} */ ;
        let __VLS_158;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_159 = __VLS_asFunctionalComponent1(__VLS_158, new __VLS_158({
            // @ts-ignore
            icon: (isDrawing.value ? 'svg-spinners:180-ring-with-bg' : 'solar:magic-stick-3-bold'),
        }));
        const __VLS_160 = __VLS_159({
            icon: (isDrawing.value ? 'svg-spinners:180-ring-with-bg' : 'solar:magic-stick-3-bold'),
        }, ...__VLS_functionalComponentArgsRest(__VLS_159));
        (isDrawing.value ? '正在公平抽選...' : '開始抽獎');
    }
    else {
        __VLS_asFunctionalElement1(__VLS_intrinsics.section, __VLS_intrinsics.section)({
            ...{ class: "result-section" },
        });
        /** @type {__VLS_StyleScopedClasses['result-section']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "confetti confetti-a" },
        });
        /** @type {__VLS_StyleScopedClasses['confetti']} */ ;
        /** @type {__VLS_StyleScopedClasses['confetti-a']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "confetti confetti-b" },
        });
        /** @type {__VLS_StyleScopedClasses['confetti']} */ ;
        /** @type {__VLS_StyleScopedClasses['confetti-b']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "confetti confetti-c" },
        });
        /** @type {__VLS_StyleScopedClasses['confetti']} */ ;
        /** @type {__VLS_StyleScopedClasses['confetti-c']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "trophy" },
        });
        /** @type {__VLS_StyleScopedClasses['trophy']} */ ;
        let __VLS_163;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_164 = __VLS_asFunctionalComponent1(__VLS_163, new __VLS_163({
            // @ts-ignore
            icon: "solar:cup-star-bold-duotone",
        }));
        const __VLS_165 = __VLS_164({
            icon: "solar:cup-star-bold-duotone",
        }, ...__VLS_functionalComponentArgsRest(__VLS_164));
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "result-meta" },
        });
        /** @type {__VLS_StyleScopedClasses['result-meta']} */ ;
        let __VLS_168;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_169 = __VLS_asFunctionalComponent1(__VLS_168, new __VLS_168({
            // @ts-ignore
            icon: "solar:gift-linear",
        }));
        const __VLS_170 = __VLS_169({
            icon: "solar:gift-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_169));
        (__VLS_unwrap(prizeName, {}));
        (winners.value.length);
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "winner-grid" },
        });
        /** @type {__VLS_StyleScopedClasses['winner-grid']} */ ;
        const __VLS_173 = __VLS_tryAsConstant((winners.value));
        for (const [winner, index] of __VLS_vFor(__VLS_nonNull(__VLS_173))) {
            __VLS_asFunctionalElement1(__VLS_intrinsics.article, __VLS_intrinsics.article)({
                key: (winner.handle),
                ...{ class: ({ champion: index === 0 }) },
            });
            /** @type {__VLS_StyleScopedClasses['champion']} */ ;
            __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
                ...{ class: "place" },
            });
            /** @type {__VLS_StyleScopedClasses['place']} */ ;
            (index + 1);
            __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
                ...{ class: "winner-avatar" },
            });
            /** @type {__VLS_StyleScopedClasses['winner-avatar']} */ ;
            (winner.avatar);
            __VLS_asFunctionalElement1(__VLS_intrinsics.h3, __VLS_intrinsics.h3)({});
            (winner.name);
            __VLS_asFunctionalElement1(__VLS_intrinsics.b, __VLS_intrinsics.b)({});
            (winner.handle);
            __VLS_asFunctionalElement1(__VLS_intrinsics.p, __VLS_intrinsics.p)({});
            (winner.comment);
            __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
                type: "button",
            });
            let __VLS_174;
            /** @ts-ignore @type { | typeof __VLS_components.Icon} */
            Icon;
            // @ts-ignore
            const __VLS_175 = __VLS_asFunctionalComponent1(__VLS_174, new __VLS_174({
                // @ts-ignore
                icon: "solar:copy-linear",
            }));
            const __VLS_176 = __VLS_175({
                icon: "solar:copy-linear",
            }, ...__VLS_functionalComponentArgsRest(__VLS_175));
            // @ts-ignore
            [prizeName, winnerCount, isDrawing, isDrawing, isDrawing, winners, winners,];
        }
        __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
            ...{ class: "result-actions" },
        });
        /** @type {__VLS_StyleScopedClasses['result-actions']} */ ;
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: // @ts-ignore
                (...[$event]) => {
                    void $event;
                    if (!!(!loggedIn.value))
                        throw 0;
                    if (!!(currentStep.value === 'posts'))
                        throw 0;
                    if (!!(currentStep.value === 'rules'))
                        throw 0;
                    return (currentStep.value = 'rules');
                    // @ts-ignore
                    [currentStep,];
                } },
            ...{ class: "back-button" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['back-button']} */ ;
        let __VLS_179;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_180 = __VLS_asFunctionalComponent1(__VLS_179, new __VLS_179({
            // @ts-ignore
            icon: "solar:restart-linear",
        }));
        const __VLS_181 = __VLS_180({
            icon: "solar:restart-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_180));
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ class: "primary-button" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['primary-button']} */ ;
        let __VLS_184;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_185 = __VLS_asFunctionalComponent1(__VLS_184, new __VLS_184({
            // @ts-ignore
            icon: "solar:share-linear",
        }));
        const __VLS_186 = __VLS_185({
            icon: "solar:share-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_185));
        __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
            ...{ onClick: (restart) },
            ...{ class: "new-draw" },
            type: "button",
        });
        /** @type {__VLS_StyleScopedClasses['new-draw']} */ ;
        let __VLS_189;
        /** @ts-ignore @type { | typeof __VLS_components.Icon} */
        Icon;
        // @ts-ignore
        const __VLS_190 = __VLS_asFunctionalComponent1(__VLS_189, new __VLS_189({
            // @ts-ignore
            icon: "solar:arrow-right-linear",
        }));
        const __VLS_191 = __VLS_190({
            icon: "solar:arrow-right-linear",
        }, ...__VLS_functionalComponentArgsRest(__VLS_190));
    }
}
__VLS_asFunctionalElement1(__VLS_intrinsics.footer, __VLS_intrinsics.footer)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.nav, __VLS_intrinsics.nav)({});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#",
});
__VLS_asFunctionalElement1(__VLS_intrinsics.a, __VLS_intrinsics.a)({
    href: "#",
});
// @ts-ignore
[];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
