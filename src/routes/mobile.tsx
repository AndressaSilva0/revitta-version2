import { createFileRoute, Link, Outlet, useLocation } from "@tanstack/react-router";
import { Home, ScanLine, Package, ShoppingBag, Truck } from "lucide-react";

export const Route = createFileRoute("/mobile")({
  head: () => ({ meta: [{ title: "Revitta App" }] }),
  component: MobileLayout,
});

const tabs = [
  { to: "/mobile", label: "Início", icon: Home, exact: true },
  { to: "/mobile/products", label: "Produtos", icon: Package },
  { to: "/mobile/scanner", label: "Scanner", icon: ScanLine, primary: true },
  { to: "/mobile/marketplace", label: "Rede", icon: ShoppingBag },
  { to: "/mobile/tracking", label: "Tracking", icon: Truck },
];

function MobileLayout() {
  const { pathname } = useLocation();
  return (
    <div className="flex min-h-screen items-start justify-center bg-deep p-0 lg:p-8">
      <div className="relative flex min-h-screen w-full max-w-md flex-col overflow-hidden bg-surface shadow-2xl lg:min-h-[860px] lg:rounded-[2.5rem] lg:border-8 lg:border-deep">
        <main className="flex-1 overflow-y-auto pb-24"><Outlet /></main>

        {/* Bottom nav */}
        <nav className="absolute inset-x-0 bottom-0 border-t border-border bg-card/95 backdrop-blur-xl">
          <ul className="flex items-end justify-around px-2 pb-2 pt-2">
            {tabs.map(t => {
              const active = t.exact ? pathname === t.to : pathname.startsWith(t.to);
              if (t.primary) {
                return (
                  <li key={t.to}>
                    <Link to={t.to} className="-mt-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white shadow-lg shadow-primary/40">
                      <t.icon className="h-6 w-6" />
                    </Link>
                  </li>
                );
              }
              return (
                <li key={t.to}>
                  <Link to={t.to} className={`flex flex-col items-center gap-1 rounded-xl px-3 py-1.5 text-[10px] font-medium ${active ? "text-primary" : "text-slate"}`}>
                    <t.icon className={`h-5 w-5 ${active ? "stroke-[2.4]" : ""}`} />
                    {t.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
