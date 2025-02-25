import { createInertiaApp } from '@inertiajs/svelte';
import { hydrate, mount } from 'svelte';

createInertiaApp({
    resolve: async (name: string): Promise<any> => {
        const pages = import.meta.glob<any>('./Pages/**/*.svelte', { eager: true });
        return pages[`./Pages/${name}.svelte`];
    },
    setup({ el, App, props }: { el: HTMLElement | null; App: any; props: any }) {
        if (!el) return;
        if (el.dataset.serverRendered === 'true') {
            hydrate(App, { target: el, props });
        } else {
            mount(App, { target: el, props });
        }
    },
});
