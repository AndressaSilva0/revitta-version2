import { createFileRoute } from "@tanstack/react-router";
import { AlertTriangle, TrendingDown, DollarSign, Boxes, ArrowUpRight, ArrowDownRight, MapPin } from "lucide-react";
import { PriorityBadge } from "@/components/brand/PriorityBadge";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export const Route = createFileRoute("/dashboard/")({
  component: DashboardHome,
});

const trend = [
  { m: "Jan", recuperado: 120, perdido: 60 },
  { m: "Fev", recuperado: 180, perdido: 55 },
  { m: "Mar", recuperado: 240, perdido: 48 },
  { m: "Abr", recuperado: 310, perdido: 40 },
  { m: "Mai", recuperado: 380, perdido: 35 },
  { m: "Jun", recuperado: 521, perdido: 28 },
];

const critical = [
  { name: "Paracetamol 500mg", lot: "L2024-4521", qty: 450, price: "R$ 12.400", loc: "Farmácia Central — SP", days: 8 },
  { name: "Amoxicilina 875mg", lot: "L2024-3892", qty: 280, price: "R$ 8.960",  loc: "Drogaria Saúde — RJ", days: 12 },
  { name: "Ibuprofeno 600mg",  lot: "L2024-5134", qty: 520, price: "R$ 15.600", loc: "Farmácia Popular — BH", days: 18 },
  { name: "Dipirona 1g",        lot: "L2024-4789", qty: 340, price: "R$ 6.800",  loc: "Clínica Vital — Curitiba", days: 25 },
];

const activity = [
  { t: "Redistribuição aceita", d: "Paracetamol 500mg • Central → Hospital São Lucas", time: "5 min", color: "primary" },
  { t: "Produto cadastrado",   d: "Amoxicilina 875mg • Drogaria Saúde",                time: "12 min", color: "mint" },
  { t: "Entrega confirmada",   d: "Ibuprofeno 600mg • Popular → MedCenter",            time: "1h",     color: "primary" },
  { t: "Alerta de validade",   d: "Dipirona 1g • Clínica Vital — 25 dias restantes",  time: "2h",     color: "risk-warn" },
];

const regions = [
  { name: "São Paulo",      pct: 92, lvl: "danger" as const },
  { name: "Rio de Janeiro", pct: 74, lvl: "warn" as const },
  { name: "Belo Horizonte", pct: 58, lvl: "warn" as const },
  { name: "Curitiba",       pct: 32, lvl: "safe" as const },
  { name: "Porto Alegre",   pct: 24, lvl: "safe" as const },
];

function DashboardHome() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Centro de controle farmacêutico</p>
          <h1 className="mt-1 text-3xl font-bold text-deep">Visão geral da rede</h1>
        </div>
        <p className="text-sm text-slate">Atualizado agora · 22 mai 2026</p>
      </div>

      {/* KPIs */}
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Kpi icon={AlertTriangle} color="risk-danger" label="Produtos em risco" value="247" delta="+12%" up />
        <Kpi icon={TrendingDown} color="primary" label="Perdas evitadas" value="R$ 184,2k" delta="+23%" up />
        <Kpi icon={DollarSign} color="mint" label="Valor recuperado" value="R$ 521,8k" delta="+18%" up />
        <Kpi icon={Boxes} color="deep" label="Redistribuições ativas" value="89" delta="+7%" up />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {/* Chart */}
        <div className="rounded-2xl border border-border bg-card p-6 xl:col-span-2">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-deep">Recuperação vs perda</h2>
              <p className="text-xs text-slate">em milhares de reais (R$)</p>
            </div>
            <div className="flex gap-3 text-xs">
              <Legend color="primary" label="Recuperado" />
              <Legend color="risk-danger" label="Perdido" />
            </div>
          </div>
          <div className="mt-4 h-72">
            <ResponsiveContainer>
              <AreaChart data={trend}>
                <defs>
                  <linearGradient id="rec" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--primary)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="var(--primary)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="loss" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--risk-danger)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--risk-danger)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="m" stroke="var(--slate)" fontSize={12} />
                <YAxis stroke="var(--slate)" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
                <Area type="monotone" dataKey="recuperado" stroke="var(--primary)" strokeWidth={2.5} fill="url(#rec)" />
                <Area type="monotone" dataKey="perdido" stroke="var(--risk-danger)" strokeWidth={2.5} fill="url(#loss)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Activity */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-deep">Atividades recentes</h2>
          <ul className="mt-4 space-y-4">
            {activity.map((a, i) => (
              <li key={i} className="flex gap-3">
                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full" style={{ background: `var(--${a.color})` }} />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-deep">{a.t}</p>
                  <p className="truncate text-xs text-slate">{a.d}</p>
                  <p className="mt-0.5 text-[11px] text-slate/70">{a.time} atrás</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        {/* Critical */}
        <div className="rounded-2xl border border-border bg-card p-6 xl:col-span-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-deep">Produtos críticos</h2>
            <a className="text-xs font-semibold text-primary hover:underline" href="#">Ver todos →</a>
          </div>
          <div className="mt-4 space-y-3">
            {critical.map(p => {
              const pct = Math.max(8, Math.min(100, Math.round((p.days / 90) * 100)));
              const color = p.days <= 15 ? "risk-danger" : p.days <= 30 ? "risk-warn" : "risk-safe";
              return (
                <div key={p.lot} className="rounded-xl border border-border bg-surface p-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-3">
                      <h3 className="font-semibold text-deep">{p.name}</h3>
                      <PriorityBadge days={p.days} />
                    </div>
                    <span className="text-sm font-bold text-deep">{p.price}</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-slate">
                    <span>Lote: {p.lot}</span>
                    <span>Qtd: {p.qty} un</span>
                    <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" />{p.loc}</span>
                  </div>
                  <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-border">
                    <div className="h-full rounded-full" style={{ width: `${pct}%`, background: `var(--${color})` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Region map */}
        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-deep">Prioridade por região</h2>
          <p className="text-xs text-slate">% de risco no estoque ativo</p>
          <ul className="mt-5 space-y-4">
            {regions.map(r => (
              <li key={r.name}>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-deep">{r.name}</span>
                  <span className="font-semibold text-slate">{r.pct}%</span>
                </div>
                <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-border">
                  <div className={`h-full rounded-full ${r.lvl === "danger" ? "bg-risk-danger" : r.lvl === "warn" ? "bg-risk-warn" : "bg-risk-safe"}`} style={{ width: `${r.pct}%` }} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

function Kpi({ icon: Icon, color, label, value, delta, up }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className="flex items-start justify-between">
        <p className="text-sm font-medium text-slate">{label}</p>
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl" style={{ background: `color-mix(in oklab, var(--${color}) 14%, transparent)`, color: `var(--${color})` }}>
          <Icon className="h-4 w-4" />
        </span>
      </div>
      <p className="mt-3 text-3xl font-bold text-deep">{value}</p>
      <p className={`mt-1 inline-flex items-center gap-1 text-xs font-semibold ${up ? "text-risk-safe" : "text-risk-danger"}`}>
        {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />} {delta} <span className="text-slate font-normal">vs mês anterior</span>
      </p>
    </div>
  );
}
function Legend({ color, label }: { color: string; label: string }) {
  return <span className="inline-flex items-center gap-1.5 text-slate"><span className="h-2 w-2 rounded-full" style={{ background: `var(--${color})` }} />{label}</span>;
}
