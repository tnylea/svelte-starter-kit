<script lang="ts">
    import UserInfo from '@/components/UserInfo.svelte';
    import UserMenuContent from '@/components/UserMenuContent.svelte';
    import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
    import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
    import type { User } from '@/types';
    import { page } from '@inertiajs/svelte';
    import { ChevronsUpDown } from 'lucide-svelte';

    const user: User = $derived($page.props.auth.user);
</script>

<SidebarMenu>
    <SidebarMenuItem>
        <DropdownMenu>
            <DropdownMenuTrigger>
                <SidebarMenuButton size="lg" class="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                    <UserInfo {user} />
                    <ChevronsUpDown class="ml-auto size-4" />
                </SidebarMenuButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg" side="bottom" align="end" sideOffset={4}>
                <UserMenuContent {user} />
            </DropdownMenuContent>
        </DropdownMenu>
    </SidebarMenuItem>
</SidebarMenu>
