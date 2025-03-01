<script lang="ts">
    import { SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
    import { Link, page } from '@inertiajs/svelte';

    interface Props {
        items: Array<{
            title: string;
            href: string;
            icon: any;
        }>;
    }

    let { items }: Props = $props();
</script>

<SidebarGroup class="px-2 py-0">
    <SidebarGroupLabel>Platform</SidebarGroupLabel>
    <SidebarMenu>
        {#each items as item}
            <SidebarMenuItem>
                <SidebarMenuButton>
                    {#snippet child()}
                        <Link href={item.href} isActive={item.href === $page.url}>
                            <item.icon />
                            <span>{item.title}</span>
                        </Link>
                    {/snippet}
                </SidebarMenuButton>
            </SidebarMenuItem>
        {/each}
    </SidebarMenu>
</SidebarGroup>
