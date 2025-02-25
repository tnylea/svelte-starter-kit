<script lang="ts">
    import { SidebarInset } from '@/components/ui/sidebar';

    let { children, variant, class: className, ...attrs } = $props();
</script>

{#if variant === 'sidebar'}
    <SidebarInset {...attrs}>
        {@render children?.()}
    </SidebarInset>
{:else}
    <main class="mx-auto flex h-full w-full max-w-7xl flex-1 flex-col gap-4 rounded-xl {className}">
        {@render children?.()}
    </main>
{/if}
