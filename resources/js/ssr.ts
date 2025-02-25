/* prettier-ignore */
import type { ResolvedComponent } from '@inertiajs/svelte';
import { createInertiaApp } from '@inertiajs/svelte';
import createServer from '@inertiajs/svelte/server';
import type { ComponentType } from 'svelte';
import { render } from 'svelte/server';

createServer((page) =>
    createInertiaApp({
        resolve: async (name: string): Promise<ResolvedComponent> => {
            const pages = import.meta.glob<{ default: ComponentType }>('./pages/**/*.svelte', { eager: true });
            return pages[`./pages/${name}.svelte`].default as unknown as ResolvedComponent;
        },
        setup({ el, App, props }) {
            return render(App, { props });
        },
    }),
);
