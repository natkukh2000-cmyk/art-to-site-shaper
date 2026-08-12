import { Link, useRouterState } from "@tanstack/react-router";
import {
  Home,
  Users,
  CalendarDays,
  BarChart3,
  UsersRound,
  ClipboardList,
  Settings,
  Bell,
  ChevronDown,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { currentUser } from "@/lib/data";
import { Avatar } from "@/components/ui-kit";

const nav = [
  { to: "/", label: "Главная", icon: Home },
  { to: "/clients", label: "Клиенты", icon: Users },
  { to: "/content-plans", label: "Контент-планы", icon: CalendarDays },
  { to: "/analytics", label: "Аналитика", icon: BarChart3 },
  { to: "/team", label: "Команда", icon: UsersRound },
  { to: "/tasks", label: "Мои задачи", icon: ClipboardList },
  { to: "/settings", label: "Настройки", icon: Settings },
];

function Sidebar() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  return (
    <aside className="fixed inset-y-0 left-0 z-20 hidden w-[220px] flex-col border-r border-sidebar-border bg-sidebar lg:flex">
      <Link to="/" className="flex items-center gap-2.5 px-6 pb-6 pt-7">
        <span className="text-3xl font-black leading-none text-primary">P</span>
        <span className="leading-tight">
          <span className="block text-lg font-bold tracking-tight">Pageli</span>
          <span className="block text-xs text-muted-foreground">Operations</span>
        </span>
      </Link>

      <nav className="flex-1 space-y-1 px-3">
        {nav.map((item) => {
          const active = item.to === "/" ? pathname === "/" : pathname.startsWith(item.to);
          return (
            <Link
              key={item.to}
              to={item.to}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                active
                  ? "bg-sidebar-accent text-sidebar-accent-foreground"
                  : "text-sidebar-foreground hover:bg-secondary",
              )}
            >
              <item.icon className="h-[18px] w-[18px]" strokeWidth={1.8} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="m-3 flex items-center gap-3 rounded-xl border border-sidebar-border p-3">
        <Avatar initials={currentUser.initials} className="h-9 w-9 text-xs" />
        <div className="min-w-0 flex-1 leading-tight">
          <p className="truncate text-sm font-semibold">{currentUser.short}</p>
          <p className="truncate text-xs text-muted-foreground">{currentUser.role}</p>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </div>
    </aside>
  );
}

export function TopUser() {
  return (
    <div className="flex items-center gap-5">
      <button className="relative text-muted-foreground transition-colors hover:text-foreground">
        <Bell className="h-5 w-5" strokeWidth={1.8} />
        <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-primary" />
      </button>
      <div className="h-8 w-px bg-border" />
      <div className="flex items-center gap-3">
        <Avatar initials={currentUser.initials} className="h-10 w-10 text-sm" />
        <div className="leading-tight">
          <p className="text-sm font-semibold">{currentUser.short}</p>
          <p className="text-xs text-muted-foreground">{currentUser.role}</p>
        </div>
        <ChevronDown className="h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  );
}

export function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <main className="lg:pl-[220px]">
        <div className="mx-auto max-w-[1320px] px-6 py-7 lg:px-10">{children}</div>
      </main>
    </div>
  );
}
