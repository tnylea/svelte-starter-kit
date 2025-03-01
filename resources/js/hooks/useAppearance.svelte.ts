import { onMount } from 'svelte';

export type Appearance = 'light' | 'dark' | 'system';

export function updateTheme(value: Appearance) {
    if (value === 'system') {
        const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.classList.toggle('dark', systemTheme === 'dark');
    } else {
        document.documentElement.classList.toggle('dark', value === 'dark');
    }
}

const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

const handleSystemThemeChange = () => {
    const currentAppearance = localStorage.getItem('appearance') as Appearance | null;
    updateTheme(currentAppearance || 'system');
};

export function initializeTheme() {
    const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
    updateTheme(savedAppearance || 'system');
    mediaQuery.addEventListener('change', handleSystemThemeChange);
}

export function useAppearance() {
    let appearance = $state('system');

    onMount(() => {
        initializeTheme();
        const savedAppearance = localStorage.getItem('appearance') as Appearance | null;
        if (savedAppearance) {
            appearance = savedAppearance;
        }

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    });

    function updateAppearance(value: Appearance) {
        appearance = value;
        localStorage.setItem('appearance', value);
        updateTheme(value);
    }

    return {
        get appearance() {
            return appearance;
        },
        updateAppearance,
    };
}
