import { defineAsyncComponent, onMounted, onUnmounted, ref, shallowRef } from 'vue';

export function useMonitor() {
    const breakpoint = ref('sm');
    const menu = shallowRef(
        defineAsyncComponent(() => import('../components/menu/MenuSuperiorXs.vue')),
    );

    const updateBreakpoint = () => {
        const width = window.innerWidth;
        if (width < 576) {
            breakpoint.value = 'xs';
            menu.value = defineAsyncComponent(() =>
                import('../components/menu/MenuSuperiorXs.vue'),
            );
        } else if (width < 768) {
            breakpoint.value = 'sm';
            menu.value = defineAsyncComponent(() =>
                import('../components/menu/MenuSuperiorSm.vue'),
            );
        } else if (width < 992) {
            breakpoint.value = 'md';
            menu.value = defineAsyncComponent(() =>
                import('../components/menu/MenuSuperiorMd.vue'),
            );
        } else if (width < 1200) {
            breakpoint.value = 'lg';
            menu.value = defineAsyncComponent(() =>
                import('../components/menu/MenuSuperiorLg.vue'),
            );
        } else {
            breakpoint.value = 'xl';
            menu.value = defineAsyncComponent(() =>
                import('../components/menu/MenuSuperiorXl.vue'),
            );
        }
    };

    onMounted(() => {
        updateBreakpoint();
        window.addEventListener('resize', updateBreakpoint);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateBreakpoint);
    });

    return {
        breakpoint,
        menu,
    };
}