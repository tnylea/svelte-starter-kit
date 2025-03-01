import { createInertiaApp } from '@inertiajs/svelte';
import { hydrate, mount } from 'svelte';
import '../css/app.css';
import './bootstrap';

createInertiaApp({
    resolve: async (name: string): Promise<any> => {
        const pages = import.meta.glob<any>('./pages/**/*.svelte', { eager: true });
        return pages[`./pages/${name}.svelte`];
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
