import { createFileRoute } from "@tanstack/react-router";
import {
  AlertTriangle, TrendingDown, DollarSign, Boxes, ArrowUpRight, ArrowDownRight, MapPin,
  ShieldCheck, Heart, Tag, BellRing, Compass, Store, Ticket, CheckCircle2, ChevronRight, Truck
} from "lucide-react";
import { PriorityBadge } from "@/components/brand/PriorityBadge";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { useUserType } from "@/hooks/useUserType";

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
  { name: "Paracetamol 500mg", lot: "L2024-4521", qty: 450, price: "R$ 12.400", loc: "Farmácia Central — SP", days: 62 },
  { name: "Loratadina 10mg",    lot: "L2024-3892", qty: 280, price: "R$ 8.960",  loc: "Drogaria Saúde — RJ", days: 75 },
  { name: "Ibuprofeno 400mg",  lot: "L2024-5134", qty: 520, price: "R$ 15.600", loc: "Farmácia Popular — BH", days: 98 },
  { name: "Dipirona 500mg",     lot: "L2024-4789", qty: 340, price: "R$ 6.800",  loc: "Clínica Vital — Curitiba", days: 110 },
];

const activity = [
  { t: "Redistribuição aceita", d: "Paracetamol 500mg • Central → Drogaria SP",         time: "5 min", color: "primary" },
  { t: "Produto cadastrado",   d: "Loratadina 10mg • Drogaria Saúde",                  time: "12 min", color: "mint" },
  { t: "Entrega confirmada",   d: "Ibuprofeno 400mg • Popular → MedCenter",            time: "1h",     color: "primary" },
  { t: "Alerta de validade",   d: "Dipirona 500mg • Clínica Vital — 110 dias restantes", time: "2h",     color: "risk-warn" },
];

const regions = [
  { name: "São Paulo",      pct: 92, lvl: "danger" as const },
  { name: "Rio de Janeiro", pct: 74, lvl: "warn" as const },
  { name: "Belo Horizonte", pct: 58, lvl: "warn" as const },
  { name: "Curitiba",       pct: 32, lvl: "safe" as const },
  { name: "Porto Alegre",   pct: 24, lvl: "safe" as const },
];

// Mock data for B2C consumer dashboard
const consumerRecommendations = [
  { name: "Dorflex 36 Comprimidos", origPrice: "R$ 24,90", salePrice: "R$ 9,90", discount: "60% OFF", pharmacy: "Drogaria São Paulo", validity: "Pré-vencido (75 dias)", validityColor: "risk-warn" },
  { name: "Loratadina Medley 10mg", origPrice: "R$ 18,50", salePrice: "R$ 5,90", discount: "68% OFF", pharmacy: "Drogaria Araújo", validity: "Pré-vencido (92 dias)", validityColor: "risk-safe" },
  { name: "Ibuprofeno EMS 600mg", origPrice: "R$ 29,90", salePrice: "R$ 11,90", discount: "60% OFF", pharmacy: "Farmácia Popular", validity: "Pré-vencido (64 dias)", validityColor: "risk-warn" },
];

const consumerCoupons = [
  { code: "REVITTA20", desc: "20% OFF extra em medicamentos de marca própria na primeira compra", expires: "Expira amanhã" },
  { code: "PREVENCIDO10", desc: "10% OFF extra em qualquer lote pré-vencido sinalizado", expires: "Válido por 3 dias" },
];

const partnerAds = [
  { name: "Drogaria São Paulo", rating: "4.9", dist: "0.8 km", tag: "Parceira Ouro • Descarte Inteligente", bg: "from-blue-50 to-emerald-50" },
  { name: "Drogaria Araújo", rating: "4.8", dist: "1.5 km", tag: "Parceira Prata • Economia Circular", bg: "from-rose-50 to-emerald-50" },
];

function DashboardHome() {
  const { isConsumer } = useUserType();
  return isConsumer ? <ConsumerDashboard /> : <BusinessDashboard />;
}

function ConsumerDashboard() {
  return (
    <div className="space-y-6">
      {/* Top Welcome Banner */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-deep via-deep/95 to-primary p-6 md:p-8 text-white shadow-xl">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold text-mint">
            <MapPin className="h-3.5 w-3.5" /> Belo Horizonte, MG
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight md:text-4xl">Olá, Ana Silva! 👋</h1>
          <p className="max-w-xl text-sm text-white/80 font-medium">
            Economize em medicamentos de farmácias parceiras e evite o desperdício de lotes pré-vencidos.
          </p>
        </div>
        <div className="flex items-center gap-4 bg-white/10 backdrop-blur rounded-2xl p-4">
          <div className="text-right">
            <p className="text-xs text-white/70 font-semibold uppercase">Economia Acumulada</p>
            <p className="text-2xl font-black text-mint">R$ 145,20</p>
          </div>
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint text-deep font-bold">
            <TrendingDown className="h-6 w-6" />
          </span>
        </div>
      </div>

      {/* Safety Alert and Explanation */}
      <div className="rounded-2xl border border-risk-danger/25 bg-risk-danger/5 p-5">
        <div className="flex gap-3">
          <AlertTriangle className="h-6 w-6 shrink-0 text-risk-danger" />
          <div>
            <h3 className="text-sm font-bold text-deep">Compromisso com a Segurança e Legislação ANVISA</h3>
            <p className="mt-1 text-xs text-slate leading-relaxed">
              Todos os produtos comercializados na Revitta são <strong className="text-deep font-bold">lotes pré-vencidos com validade ativa</strong> (mínimo de 60 dias). Nós <strong className="text-risk-danger font-bold">nunca redistribuímos medicamentos vencidos</strong>. Medicamentos expirados são coletados e direcionados exclusivamente para parceiros certificados de eco-descarte ou logística reversa autorizada.
            </p>
          </div>
        </div>
      </div>

      {/* Main Grid content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Recommended & Offers */}
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-6 w-1 bg-primary rounded-full" />
              <h2 className="text-lg font-bold text-deep">Medicamentos recomendados com descontos</h2>
            </div>
            <span className="text-xs font-bold text-primary px-2.5 py-1 rounded-full bg-primary/10">Belo Horizonte</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {consumerRecommendations.map((prod, idx) => (
              <div key={idx} className="flex flex-col rounded-2xl border border-border bg-card p-4 hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start justify-between">
                  <span className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-bold text-white bg-${prod.validityColor}`}>
                    {prod.validity}
                  </span>
                  <span className="rounded-full bg-risk-danger/10 px-2 py-0.5 text-[10px] font-extrabold text-risk-danger">
                    {prod.discount}
                  </span>
                </div>
                <h3 className="mt-3 font-bold text-deep line-clamp-1">{prod.name}</h3>
                <p className="text-xs text-slate mt-1 inline-flex items-center gap-1">
                  <Store className="h-3 w-3 text-primary shrink-0" /> {prod.pharmacy}
                </p>
                <div className="mt-4 pt-3 border-t border-border flex items-end justify-between">
                  <div>
                    <span className="text-xs text-slate line-through block">{prod.origPrice}</span>
                    <span className="text-lg font-black text-primary">{prod.salePrice}</span>
                  </div>
                  <button className="rounded-lg bg-deep px-3 py-1.5 text-xs font-bold text-white hover:bg-primary transition-all">
                    Reservar
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Partner Ads & Banners */}
          <div className="space-y-3 pt-2">
            <h2 className="text-sm font-bold text-slate uppercase tracking-wider">Parceiros de Confiança Recomendados</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {partnerAds.map((ad, idx) => (
                <div key={idx} className={`rounded-2xl border border-border bg-gradient-to-br ${ad.bg} p-5 flex items-center justify-between`}>
                  <div className="space-y-1">
                    <p className="font-bold text-deep text-base">{ad.name}</p>
                    <p className="text-xs text-slate/85 font-medium">{ad.tag}</p>
                    <p className="text-xs text-emerald-700 font-semibold mt-1">Avaliação: ⭐ {ad.rating} ({ad.dist})</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-deep" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar coupons & alerts */}
        <div className="space-y-6">
          {/* Active Coupons Section */}
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Ticket className="h-5 w-5 text-primary" />
              <h2 className="text-base font-bold text-deep">Seus cupons ativos</h2>
            </div>
            <div className="space-y-3">
              {consumerCoupons.map((coupon, idx) => (
                <div key={idx} className="rounded-xl border border-dashed border-primary/40 bg-primary/5 p-4 flex flex-col justify-between gap-3 relative overflow-hidden">
                  {/* Decorative dot indicators */}
                  <span className="absolute -left-2 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-card border-r border-dashed border-primary/40" />
                  <span className="absolute -right-2 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-card border-l border-dashed border-primary/40" />
                  
                  <div>
                    <span className="rounded bg-primary px-2.5 py-0.5 text-xs font-black text-white">
                      {coupon.code}
                    </span>
                    <p className="mt-2 text-xs text-deep font-semibold leading-snug">
                      {coupon.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-1 text-[10px] text-slate/75 font-semibold">
                    <span>{coupon.expires}</span>
                    <button className="text-primary hover:underline font-bold">Copiar código</button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Tracking Quick Card */}
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Truck className="h-5 w-5 text-primary" />
                <h2 className="text-base font-bold text-deep">Minhas Entregas</h2>
              </div>
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            </div>
            <div className="rounded-xl bg-surface p-3.5 border border-border flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-deep">Pedido #RVT-8902</p>
                <p className="text-[11px] text-slate">Paracetamol • Drogaria Araújo</p>
                <p className="text-xs font-extrabold text-primary mt-1">Saiu para entrega</p>
              </div>
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">12 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BusinessDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary">Rede B2B2C · Centro de controle</p>
          <h1 className="mt-1 text-3xl font-bold text-deep">Visão geral da rede</h1>
          <p className="mt-1 text-sm text-slate">Operação entre parceiros e impacto no consumidor final na região.</p>
        </div>
        <p className="text-sm text-slate">Atualizado agora · 22 mai 2026</p>
      </div>

      {/* Warning regarding the Economy Simulator & Safety rules */}
      <div className="rounded-2xl border border-risk-danger/25 bg-risk-danger/5 p-5">
        <div className="flex gap-3">
          <AlertTriangle className="h-6 w-6 shrink-0 text-risk-danger" />
          <div>
            <h3 className="text-sm font-bold text-deep">Aviso Importante: Diretrizes ANVISA de Redistribuição</h3>
            <p className="mt-1 text-xs text-slate leading-relaxed">
              O simulador de economia abaixo estima os lucros evitados apenas para redistribuição de <strong className="text-deep">lotes pré-vencidos (com validade entre 60 e 180 dias restantes)</strong>. É expressamente proibida a distribuição de medicamentos vencidos. Lotes vencidos devem ser descartados ecologicamente através dos coletores parceiros listados em Configurações.
            </p>
          </div>
        </div>
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
