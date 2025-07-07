'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
    Sidebar,
    SidebarHeader,
    SidebarContent,
    SidebarMenu,
    SidebarMenuItem,
    SidebarMenuButton,
    useSidebar,
} from '@/components/ui/sidebar';
import {
    BookText,
    Bot,
    FilePenLine,
    LayoutGrid,
    Layers,
    Mic,
    PencilRuler,
    Scaling,
    Swords,
    Wand2,
} from 'lucide-react';
import { DiyaLampIcon, Logo } from '@/components/icons';
import { SidebarTrigger } from '../ui/sidebar';

const menuItems = [
    { href: '/dashboard', label: 'Dashboard', icon: LayoutGrid },
    { href: '/textbook', label: 'Textbook', icon: BookText },
    { href: '/grammar', label: 'Grammar', icon: Scaling },
    { href: '/practice', label: 'Practice', icon: PencilRuler },
    { href: '/flashcards', label: 'Flashcards', icon: Layers },
    { href: '/pronunciation', label: 'Pronunciation AI', icon: Mic },
    { href: '/grammar-tool', label: 'Grammar Tool', icon: Wand2 },
    { href: '/word-builder', label: 'Word Builder', icon: Swords },
    { href: '/writing-practice', label: 'Writing Practice', icon: FilePenLine },
    { href: '/culture', label: 'Culture', icon: DiyaLampIcon },
];

export function AppSidebar() {
    const pathname = usePathname();
    const { setOpenMobile } = useSidebar();

    const handleLinkClick = () => {
        setOpenMobile(false);
    };

    return (
        <Sidebar collapsible="icon" className="border-r">
            <SidebarHeader className="h-16 flex items-center justify-between p-2">
                <div className="flex items-center gap-2 [&_span]:opacity-100 group-data-[collapsible=icon]:[&_span]:opacity-0 transition-opacity duration-200">
                    <Logo className="w-8 h-8 text-primary" />
                    <span className="font-headline text-2xl font-bold">7K polyglot</span>
                </div>
                <div className="hidden md:block">
                  <SidebarTrigger />
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu>
                    {menuItems.map((item) => (
                        <SidebarMenuItem key={item.href}>
                            <SidebarMenuButton
                                asChild
                                isActive={pathname.startsWith(item.href)}
                                tooltip={{ children: item.label }}
                                onClick={handleLinkClick}
                            >
                                <Link href={item.href}>
                                    <item.icon />
                                    <span>{item.label}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
        </Sidebar>
    );
}
