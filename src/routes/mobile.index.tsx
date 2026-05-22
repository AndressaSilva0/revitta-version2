import { createFileRoute, Link } from "@tanstack/react-router";
import { Bell, ChevronRight, AlertTriangle, TrendingUp, Boxes } from "lucide-react";
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
    <div className="space-y-5">
      {/* Header */}
      <header className="rounded-b-3xl bg-deep px-5 pb-8 pt-12 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-white/60">Bom dia,</p>
            <p className="text-lg font-bold">Farmácia Central</p>
          </div>
          <button className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-risk-danger ring-2 ring-deep" />
          </button>
        </div>

        <div className="mt-6 rounded-2xl bg-gradient-mint p-4 text-deep">
          <p className="text-xs font-semibold">Valor recuperado este mês</p>
          <p className="mt-1 text-3xl font-bold">R$ 184,2k</p>
          <p className="text-xs">+23% vs mês anterior</p>
        </div>
      </header>

      <section className="grid grid-cols-3 gap-3 px-5">
        <MiniStat icon={AlertTriangle} color="risk-danger" value="247" label="Em risco" />
        <MiniStat icon={TrendingUp} color="primary" value="89" label="Ativas" />
        <MiniStat icon={Boxes} color="mint" value="12" label="Pendentes" />
      </section>

      <section className="px-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-bold text-deep">Alertas críticos</h2>
          <Link to="/mobile/products" className="text-xs font-semibold text-primary">Ver tudo</Link>
        </div>
        <div className="space-y-2">
          {alerts.map(a => (
            <Link key={a.name} to="/mobile/products" className="flex items-center justify-between rounded-2xl border border-border bg-card p-4">
              <div>
                <p className="font-semibold text-deep">{a.name}</p>
                <p className="text-xs text-slate">{a.qty} unidades</p>
              </div>
              <div className="flex items-center gap-2">
                <PriorityBadge days={a.days} />
                <ChevronRight className="h-4 w-4 text-slate" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="px-5">
        <h2 className="mb-3 text-base font-bold text-deep">Ações rápidas</h2>
        <div className="grid grid-cols-2 gap-3">
          <Link to="/mobile/scanner" className="rounded-2xl border border-border bg-card p-4">
            <p className="font-semibold text-deep">📷 Escanear produto</p>
            <p className="mt-1 text-xs text-slate">Cadastro em 5 segundos</p>
          </Link>
          <Link to="/mobile/marketplace" className="rounded-2xl border border-border bg-card p-4">
            <p className="font-semibold text-deep">🛒 Explorar rede</p>
            <p className="mt-1 text-xs text-slate">Próximos a você</p>
          </Link>
        </div>
      </section>
    </div>
  );
}

function MiniStat({ icon: Icon, color, value, label }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-3 text-center">
      <span className="mx-auto inline-flex h-8 w-8 items-center justify-center rounded-lg" style={{ background: `color-mix(in oklab, var(--${color}) 14%, transparent)`, color: `var(--${color})` }}>
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-2 text-lg font-bold text-deep">{value}</p>
      <p className="text-[10px] text-slate">{label}</p>
    </div>
  );
}
