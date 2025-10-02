import { LayoutDashboard, Users, UserCheck, Building2, FileText, BarChart3, Settings } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const menuItems = [
  { title: "Dashboard", icon: LayoutDashboard, url: "/" },
  { title: "User", icon: Users, url: "/organization-admins" },
  { title: "Registered User", icon: UserCheck, url: "/runners" },
  { title: "Organization", icon: Building2, url: "/organizations" },
  { title: "Content", icon: FileText, url: "/content" },
  { title: "Reports", icon: BarChart3, url: "/reports" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r-0">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-sidebar-foreground">
          Pace<span className="text-[#EF6D58]">point</span>
        </h1>
      </div>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                          isActive
                            ? "bg-[hsl(var(--active-blue))] text-white"
                            : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground"
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t border-sidebar-border">
        <SidebarMenuButton asChild>
          <NavLink
            to="/settings"
            className="flex items-center gap-3 px-4 py-3 text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-foreground rounded-lg transition-colors"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </NavLink>
        </SidebarMenuButton>
        
        <div className="flex items-center gap-3 px-4 py-3 mt-2">
          <Avatar className="h-8 w-8 bg-[#10B981]">
            <AvatarFallback className="bg-[#10B981] text-white text-sm">N</AvatarFallback>
          </Avatar>
          <span className="text-sidebar-foreground text-sm">Name</span>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
