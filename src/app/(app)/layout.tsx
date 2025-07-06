import { AppSidebar } from '@/components/layout/sidebar';
import { SidebarProvider, SidebarInset, SidebarTrigger, SidebarHeader } from '@/components/ui/sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <SidebarHeader className="md:hidden flex items-center border-b p-2">
            <SidebarTrigger />
            <h1 className="font-headline text-lg font-semibold ml-2">Samskriti</h1>
        </SidebarHeader>
        <div className="p-4 sm:p-6 lg:p-8">
            {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
