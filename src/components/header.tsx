'use client';

import {SidebarTrigger} from '@/components/ui/sidebar';
import {usePathname} from 'next/navigation';
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {navigationLinks} from '@/lib/navigation';

export function Header() {
  const pathname = usePathname();
  const page = navigationLinks.find(link => link.href === pathname);
  const pageTitle = page ? page.label : 'Dashboard';
  const PageIcon = page ? page.icon : navigationLinks[0].icon;

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:px-6">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div className="flex items-center gap-2">
          <PageIcon className="h-5 w-5 text-muted-foreground" />
          <h1 className="text-xl font-semibold">{pageTitle}</h1>
        </div>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="h-9 w-9 cursor-pointer">
              <AvatarImage
                src="https://picsum.photos/seed/user-avatar/40/40"
                alt="User"
                data-ai-hint="person portrait"
              />
              <AvatarFallback>PD</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
