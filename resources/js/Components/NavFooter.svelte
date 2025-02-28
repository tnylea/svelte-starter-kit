<script lang="ts">
    import { SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
    import { Link } from '@inertiajs/svelte';

    interface Props {
        items: Array<{
            title: string;
            href: string;
            icon: any;
        }>;
        class?: string;
    }

    let { items, class: className }: Props = $props();
</script>

<SidebarGroup class="group-data-[collapsible=icon]:p-0 ${className}">
    <SidebarGroupContent>
        <SidebarMenu>
            {#each items as item, index (index)}
                <SidebarMenuItem>
                    <SidebarMenuButton class="text-neutral-600 hover:text-neutral-800 dark:text-neutral-300 dark:hover:text-neutral-100">
                        <Link href={item.href} target="_blank" rel="noopener noreferrer">
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            {/each}
        </SidebarMenu>
    </SidebarGroupContent>
</SidebarGroup>
