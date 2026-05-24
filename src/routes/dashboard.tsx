import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import {
  LayoutGrid, Package, ShoppingBag, Truck, BarChart3, Settings, Bell, Search, Smartphone, ShieldCheck,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { useUserType } from "@/hooks/useUserType";

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
  const { userType, toggleUserType, isConsumer } = useUserType();

  // Filter sidebar navigation items based on active role
  const filteredNav = nav.filter(item => {
    if (isConsumer) {
      // Consumers only see: Dashboard, Marketplace, Tracking
      return item.to === "/dashboard" || item.to === "/dashboard/marketplace" || item.to === "/dashboard/tracking";
    }
    // Business sees all
    return true;
  });

  const getNavLabel = (to: string) => {
    if (isConsumer) {
      if (to === "/dashboard") return "Área do Consumidor";
      if (to === "/dashboard/marketplace") return "Comprar Pré-vencidos";
      if (to === "/dashboard/tracking") return "Minhas Entregas";
    }
    return nav.find(item => item.to === to)?.label || "";
  };

  const getNavBadge = (to: string) => {
    if (isConsumer) {
      if (to === "/dashboard/marketplace") return "Ofertas";
      return undefined;
    }
    return nav.find(item => item.to === to)?.badge;
  };

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-border bg-card lg:flex">
        <div className="p-6"><Logo imgClassName="h-24" /></div>
        
        {/* Role visual indication in sidebar */}
        <div className="mx-4 mb-4 rounded-xl border border-border bg-surface/50 p-3 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate">Modo de Acesso</p>
          <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-semibold bg-white border border-border">
            <span className={`h-2 w-2 rounded-full ${isConsumer ? "bg-primary" : "bg-deep"}`} />
            <span className="text-deep">{isConsumer ? "Consumidor B2C" : "Empresa B2B"}</span>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {filteredNav.map(item => {
            const active = item.exact ? pathname === item.to : pathname.startsWith(item.to);
            const label = getNavLabel(item.to);
            const badge = getNavBadge(item.to);
            return (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition ${active ? "bg-deep text-white shadow-sm" : "text-slate hover:bg-mint/15 hover:text-deep"}`}
              >
                <span className="flex items-center gap-3">
                  <item.icon className="h-4 w-4" /> {label}
                </span>
                {badge && (
                  <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold ${active ? "bg-mint text-deep" : "bg-primary/10 text-primary"}`}>{badge}</span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="space-y-1 px-3 pb-6 border-t border-border pt-4">
          <Link to="/mobile" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate hover:bg-mint/15 hover:text-deep">
            <Smartphone className="h-4 w-4" /> App Mobile (Consumidor)
          </Link>
          <button className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-slate hover:bg-mint/15 hover:text-deep">
            <Settings className="h-4 w-4" /> Configurações
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center gap-4 border-b border-border bg-card/80 px-6 backdrop-blur">
          <div className="relative flex-1 max-w-sm lg:ml-2">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
            <Input placeholder={isConsumer ? "Buscar remédio pré-vencido, farmácia..." : "Buscar produto, lote, farmácia..."} className="h-10 bg-surface pl-9" />
          </div>

          {/* Interactive B2B/B2C Mode Selector */}
          <div className="flex items-center gap-1 rounded-full bg-surface p-1 border border-border shadow-inner">
            <button
              onClick={() => isConsumer && toggleUserType()}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
                !isConsumer
                  ? "bg-deep text-white shadow"
                  : "text-slate hover:text-deep hover:bg-white/50"
              }`}
            >
              Empresa B2B
            </button>
            <button
              onClick={() => !isConsumer && toggleUserType()}
              className={`rounded-full px-3.5 py-1 text-xs font-bold transition-all ${
                isConsumer
                  ? "bg-primary text-primary-foreground shadow"
                  : "text-slate hover:text-deep hover:bg-white/50"
              }`}
            >
              Consumidor B2C
            </button>
          </div>

          <div className="ml-auto flex items-center gap-4 lg:mr-2">
            <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-surface text-slate hover:text-deep">
              <Bell className="h-4 w-4" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-risk-danger" />
            </button>
            <div className="flex items-center gap-3">
              <div className="hidden text-right md:block">
                <p className="text-sm font-semibold text-deep">
                  {isConsumer ? "Ana Silva" : "Admin Revitta"}
                </p>
                <p className="text-xs text-slate">
                  {isConsumer ? "ana.silva@email.com" : "admin@revitta.com"}
                </p>
              </div>
              <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-white transition-colors duration-300 ${
                isConsumer ? "bg-primary" : "bg-deep"
              }`}>
                {isConsumer ? "AS" : "AR"}
              </span>
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden p-6 lg:p-8"><Outlet /></main>
      </div>
    </div>
  );
}
