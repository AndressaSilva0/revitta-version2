import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Home, ScanLine, Package, ShoppingBag, Truck } from "lucide-react";
import { useUserType } from "@/hooks/useUserType";

export const Route = createFileRoute("/mobile")({
  head: () => ({ meta: [{ title: "Revitta App" }] }),
  component: MobileLayout,
});

function MobileLayout() {
  const { pathname } = useLocation();
  const { isConsumer, toggleUserType } = useUserType();

  const tabs = isConsumer
    ? [
        { to: "/mobile", label: "Início", icon: Home, exact: true },
        { to: "/mobile/marketplace", label: "Comprar", icon: ShoppingBag, primary: true },
        { to: "/mobile/tracking", label: "Entregas", icon: Truck },
      ]
    : [
        { to: "/mobile", label: "Início", icon: Home, exact: true },
        { to: "/mobile/products", label: "Produtos", icon: Package },
        { to: "/mobile/scanner", label: "Scanner", icon: ScanLine, primary: true },
        { to: "/mobile/marketplace", label: "Rede B2B2C", icon: ShoppingBag },
        { to: "/mobile/tracking", label: "Tracking", icon: Truck },
      ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-deep via-deep/95 to-primary/80 p-0 lg:p-8">
      {/* Device Wrapper */}
      <div className="relative flex h-screen w-full max-w-md flex-col overflow-hidden bg-surface shadow-2xl lg:h-[850px] lg:rounded-[3rem] lg:border-[10px] lg:border-deep lg:ring-4 lg:ring-white/10">
        {/* Notch simulation */}
        <div className="absolute left-1/2 top-2 z-50 hidden h-5.5 w-32 -translate-x-1/2 rounded-full bg-deep lg:block">
          <span className="absolute left-4 top-1.5 h-2 w-2 rounded-full bg-black/40" />
          <span className="absolute right-4 top-1.5 h-2.5 w-10 rounded-full bg-black/35" />
        </div>

        {/* Dynamic header with switch */}
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border bg-card/90 px-4 py-3 backdrop-blur-md lg:pt-8">
          <span className="text-xs font-bold uppercase tracking-wider text-slate">Revitta App</span>
          <button
            onClick={toggleUserType}
            className="inline-flex items-center gap-1.5 rounded-full bg-surface border border-border px-3 py-1 text-xs font-semibold shadow-sm hover:bg-border/20 active:scale-95 transition"
          >
            <span className={`h-2 w-2 rounded-full ${isConsumer ? "bg-primary" : "bg-deep"}`} />
            <span className="text-deep font-bold">{isConsumer ? "Consumidor" : "Empresa"}</span>
          </button>
        </header>

        <main className="flex-1 overflow-y-auto pb-28 scrollbar-none">
          <Outlet />
        </main>

        {/* Floating Bottom Nav */}
        <div className="absolute inset-x-0 bottom-4 z-40 px-4">
          <nav className="rounded-3xl border border-white/40 bg-card/80 backdrop-blur-xl shadow-lg shadow-deep/10">
            <ul className="flex items-center justify-around px-2 py-2.5">
              {tabs.map((t) => {
                const active = t.exact ? pathname === t.to : pathname.startsWith(t.to);
                if (t.primary) {
                  return (
                    <li key={t.to} className="relative">
                      <Link
                        to={t.to}
                        className="flex h-12 w-12 -translate-y-5 items-center justify-center rounded-full bg-gradient-brand text-white shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-200"
                      >
                        <t.icon className="h-5 w-5" />
                      </Link>
                    </li>
                  );
                }
                return (
                  <li key={t.to}>
                    <Link
                      to={t.to}
                      className={`flex flex-col items-center gap-0.5 rounded-xl px-3 py-1.5 text-[10px] font-semibold transition-all duration-250 ${
                        active ? "text-primary scale-105" : "text-slate hover:text-deep"
                      }`}
                    >
                      <t.icon
                        className={`h-5 w-5 transition-transform duration-250 ${
                          active ? "stroke-[2.5] scale-110" : "stroke-[2]"
                        }`}
                      />
                      {t.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

