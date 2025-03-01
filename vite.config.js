import { svelte } from '@sveltejs/vite-plugin-svelte';
import autoprefixer from 'autoprefixer';
import laravel from 'laravel-vite-plugin';
import { resolve } from 'path';
import tailwindcss from 'tailwindcss';
import { defineConfig } from 'vite';

const projectRootDir = resolve(__dirname);

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/app.ts'],
            refresh: true,
        }),
        svelte(),
    ],
    resolve: {
        alias: {
            '@': resolve(projectRootDir, 'resources/js'),
        },
        extensions: ['.svelte', '.ts', '.js', '.svelte.js', '.svelte.ts', '.json'],
    },
    css: {
        postcss: {
            plugins: [tailwindcss, autoprefixer],
        },
    },
});
