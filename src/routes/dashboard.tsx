import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import {
  LayoutGrid, Package, ShoppingBag, Truck, BarChart3, Settings, Bell, Search, Smartphone,
} from "lucide-react";
import { Input } from "@/components/ui/input";

export const Route = createFileRoute("/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Revitta" }] }),
  component: DashboardLayout,
});

const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutGrid, exact: true },
  { to: "/dashboard/products", label: "Cadastro de Produtos", icon: Package },
  { to: "/dashboard/marketplace", label: "Rede B2B2C", icon: ShoppingBag, badge: 24 },
  { to: "/dashboard/tracking", label: "Rastreamento", icon: Truck },
  { to: "/dashboard/insights", label: "Insights", icon: BarChart3 },
];

function DashboardLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-card lg:flex">
        <div className="p-6"><Logo imgClassName="h-24" /></div>
        <nav className="flex-1 space-y-1 px-3">
          {nav.map(item => {
            const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${active ? "bg-deep text-white shadow-sm" : "text-slate hover:bg-mint/15 hover:text-deep"}`}
              >
                <span className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" /> {item.label}
                </span>
                {item.badge && (
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${active ? "bg-mint text-deep" : "bg-primary/10 text-primary"}`}>{item.badge}</span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="space-y-1 px-3 pb-6">
          <Link to="/mobile" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate hover:bg-mint/15 hover:text-deep">
            <Smartphone className="h-4 w-4" /> App Mobile
          </Link>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate hover:bg-mint/15 hover:text-deep">
            <Settings className="h-4 w-4" /> Configurações
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center gap-4 border-b border-border bg-card/80 px-6 backdrop-blur">
          <div className="relative flex-1 max-w-md lg:ml-2">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <Input placeholder="Buscar produto, lote, farmácia..." className="h-10 bg-surface pl-9" />
          </div>
          <div className="ml-auto flex items-center gap-4 lg:mr-2">
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-slate hover:text-deep">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-risk-danger" />
            </button>
            <div className="flex items-center gap-3">
              <div className="hidden text-right md:block">
                <p className="text-sm font-semibold text-deep">Admin Revitta</p>
                <p className="text-xs text-slate">admin@revitta.com</p>
              </div>
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-brand text-sm font-bold text-white">AR</span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden p-6 lg:p-8"><Outlet /></main>
      </div>
    </div>
  );
}
