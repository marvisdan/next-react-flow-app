import { AppSidebar } from "@/components/molecules/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<SidebarProvider>
			<AppSidebar />
			<main className="flex-1">
				<SidebarTrigger />
				{children}
			</main>
		</SidebarProvider>
	);
}
