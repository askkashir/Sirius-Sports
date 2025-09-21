'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import {Rocket} from 'lucide-react';
import {navigationLinks} from '@/lib/navigation';

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Rocket className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold">PeakDeploy</h1>
        </div>
      </SidebarHeader>
      <SidebarMenu>
        {navigationLinks.map(link => (
          <SidebarMenuItem key={link.href}>
            <Link href={link.href} legacyBehavior passHref>
              <SidebarMenuButton
                isActive={pathname === link.href}
                tooltip={{children: link.label, side: 'right'}}
              >
                <link.icon className="h-5 w-5" />
                <span>{link.label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </>
  );
}
