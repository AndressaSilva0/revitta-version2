import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  AlertTriangle,
  TrendingUp,
  Boxes,
  ScanLine,
  ShoppingBag,
} from "lucide-react";
import { PriorityBadge } from "@/components/brand/PriorityBadge";

export const Route = createFileRoute("/mobile/")({
  component: MobileHome,
});

const alerts = [
  { name: "Omeprazol 20mg", days: 7, qty: 95 },
  { name: "Paracetamol 500mg", days: 12, qty: 450 },
  { name: "Ibuprofeno 600mg", days: 18, qty: 520 },
];

function MobileHome() {
  return (
    <div className="space-y-6 pb-6">
      {/* Header */}
      <header className="rounded-b-[2.5rem] bg-gradient-to-b from-deep via-deep to-[#093230] px-5 pb-8 pt-12 text-white shadow-lg shadow-deep/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint font-bold text-deep shadow-inner shadow-black/10">
              FC
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/60">Bom dia,</p>
              <p className="text-base font-bold leading-tight">Farmácia Central</p>
            </div>
          </div>
          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:scale-95 transition-all">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-risk-danger ring-2 ring-deep" />
          </button>
        </div>

        {/* Premium Monthly Recovery Card */}
        <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-mint p-5 text-deep shadow-md shadow-mint/10">
          <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />

          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-deep/70">
                Valor economizado
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight">R$ 184,2k</p>
            </div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <TrendingUp className="h-5 w-5 text-deep" />
            </span>
          </div>

          <div className="mt-4 flex items-center gap-2 text-xs font-semibold">
            <span className="rounded-full bg-white/30 px-2 py-0.5">+23%</span>
            <span className="text-deep/80">vs. mês anterior</span>
          </div>
        </div>
      </header>

      {/* Statistics Section */}
      <section className="grid grid-cols-3 gap-3 px-5">
        <MiniStat icon={AlertTriangle} color="risk-danger" value="247" label="Em risco" />
        <MiniStat icon={TrendingUp} color="primary" value="89" label="Ativas" />
        <MiniStat icon={Boxes} color="mint" value="12" label="Pendentes" />
      </section>

      {/* Critical Alerts Section */}
      <section className="px-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-extrabold tracking-tight text-deep">Alertas críticos</h2>
          <Link to="/mobile/products" className="text-xs font-bold text-primary hover:underline">
            Ver tudo
          </Link>
        </div>
        <div className="space-y-3">
          {alerts.map((a) => {
            const riskPercentage = Math.min(100, Math.max(10, (a.days / 30) * 100));
            const progressColor =
              a.days <= 7 ? "bg-risk-danger" : a.days <= 15 ? "bg-risk-warn" : "bg-risk-safe";
            return (
              <Link
                key={a.name}
                to="/mobile/products"
                className="group flex flex-col gap-3.5 rounded-2xl border border-border/60 bg-card p-4.5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-bold text-deep group-hover:text-primary transition-colors duration-200">
                      {a.name}
                    </p>
                    <p className="text-xs font-medium text-slate mt-0.5">
                      {a.qty} unidades disponíveis
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <PriorityBadge days={a.days} />
                    <ChevronRight className="h-4 w-4 text-slate/60 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>
                {/* Lifespan progress bar */}
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-[9px] text-slate font-semibold">
                    <span>Validade restante</span>
                    <span>{a.days} dias</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${progressColor}`}
                      style={{ width: `${riskPercentage}%` }}
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="px-5">
        <h2 className="mb-3 text-base font-extrabold tracking-tight text-deep">Ações rápidas</h2>
        <div className="grid grid-cols-2 gap-3.5">
          <Link
            to="/mobile/scanner"
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              <ScanLine className="h-5 w-5" />
            </div>
            <p className="font-bold text-deep group-hover:text-primary transition-colors duration-200">
              Escanear lote
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate">
              Cadastre ou consulte via código de barras
            </p>
          </Link>
          <Link
            to="/mobile/marketplace"
            className="group relative overflow-hidden rounded-2xl border border-border/60 bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
          >
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mint/20 text-deep transition-transform duration-300 group-hover:scale-110">
              <ShoppingBag className="h-5 w-5" />
            </div>
            <p className="font-bold text-deep group-hover:text-primary transition-colors duration-200">
              Rede B2B2C
            </p>
            <p className="mt-1 text-[11px] leading-relaxed text-slate">
              Lotes entre parceiros para redistribuição regional
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}

function MiniStat({ icon: Icon, color, value, label }: any) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-4 text-center shadow-sm shadow-deep/5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
      <div
        className="absolute top-0 left-0 h-1 w-full"
        style={{ backgroundColor: `var(--${color})` }}
      />
      <span
        className="mx-auto inline-flex h-9 w-9 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `color-mix(in oklab, var(--${color}) 12%, transparent)`,
          color: `var(--${color})`,
        }}
      >
        <Icon className="h-4.5 w-4.5" />
      </span>
      <p className="mt-2.5 text-2xl font-extrabold tracking-tight text-deep">{value}</p>
      <p className="text-[10px] font-semibold text-slate mt-0.5">{label}</p>
    </div>
  );
}
