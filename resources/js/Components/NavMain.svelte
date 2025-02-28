<script lang="ts">
    import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
    import { Link } from '@inertiajs/svelte';

    interface Props {
        currentUrl: string;
        items: Array<{
            title: string;
            href: string;
            icon: any;
        }>;
    }

    let { currentUrl, items }: Props = $props();
</script>

<SidebarGroup class="px-2 py-0">
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarMenu>
        {#each items as item}
            <SidebarMenuItem>
                <SidebarMenuButton>
                    {#snippet child({ props: btnProps })}
                        <Link href={item.href} class={item.href === currentUrl ? 'text-sidebar-primary' : ''} {...btnProps}>
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    {/snippet}
                </SidebarMenuButton>
            </SidebarMenuItem>
        {/each}
    </SidebarMenu>
</SidebarGroup>
