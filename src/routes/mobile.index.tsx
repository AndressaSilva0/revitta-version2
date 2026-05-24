import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Bell,
  ChevronRight,
  AlertTriangle,
  TrendingUp,
  Boxes,
  ScanLine,
  ShoppingBag,
  Heart,
  Tag,
  Truck,
  Store,
} from "lucide-react";
import { PriorityBadge } from "@/components/brand/PriorityBadge";
import { useUserType } from "@/hooks/useUserType";
import { useState } from "react";

export const Route = createFileRoute("/mobile/")({
  component: MobileHome,
});

const alerts = [
  { name: "Paracetamol 500mg", days: 65, qty: 450 },
  { name: "Simeticona 75mg",    days: 72, qty: 95 },
  { name: "Ibuprofeno 400mg",  days: 98, qty: 520 },
];

function MobileHome() {
  const { isConsumer } = useUserType();

  if (isConsumer) {
    return <ConsumerMobileHome />;
  }

  return <BusinessMobileHome />;
}

// B2C Consumer Home View
function ConsumerMobileHome() {
  const [showNotifications, setShowNotifications] = useState(false);
  const [favorites, setFavorites] = useState<string[]>(["Dorflex", "Loratadina"]);

  const consumerAlerts = [
    { name: "Dorflex 36 Comprimidos", days: 18, price: "R$ 9,90", originalPrice: "R$ 24,90" },
    { name: "Loratadina Medley 10mg", days: 25, price: "R$ 5,90", originalPrice: "R$ 14,90" },
  ];

  const recommendations = [
    { id: "1", name: "Dipirona Monoidratada 500mg", price: "R$ 4,50", discount: "55% OFF", days: 45 },
    { id: "2", name: "Vitamina C Zinco 10 Comprimidos", price: "R$ 12,90", discount: "40% OFF", days: 60 },
  ];

  const partners = [
    { name: "Drogaria São Paulo", offer: "Entrega Grátis acima de R$ 30", logo: "DSP" },
    { name: "Drogaria Araújo", offer: "Ganhe 15% OFF extra em genéricos", logo: "DA" },
  ];

  const notifications = [
    { text: "Seu pedido de Dorflex foi retirado pelo Motoboy!", time: "Há 10 min" },
    { text: "Novo cupom de 20% OFF disponível na Drogaria São Paulo", time: "Há 1 hora" },
  ];

  const toggleFavorite = (name: string) => {
    if (favorites.includes(name)) {
      setFavorites(favorites.filter((f) => f !== name));
    } else {
      setFavorites([...favorites, name]);
    }
  };

  return (
    <div className="space-y-6 pb-6">
      {/* Consumer Header */}
      <header className="rounded-b-[2.5rem] bg-gradient-to-b from-primary via-primary to-[#065b53] px-5 pb-8 pt-12 text-white shadow-lg shadow-primary/10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-mint font-bold text-deep shadow-inner shadow-black/10">
              A
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider text-white/70">Olá, bem-vinda!</p>
              <p className="text-base font-bold leading-tight">Andressa Silva</p>
            </div>
          </div>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/25 active:scale-95 transition-all"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-risk-danger ring-2 ring-primary" />
          </button>
        </div>

        {/* Notifications Dropdown */}
        {showNotifications && (
          <div className="mt-4 rounded-2xl border border-white/20 bg-card p-4 text-deep shadow-xl transition-all">
            <h4 className="text-xs font-bold uppercase tracking-wider text-primary">Notificações Recentes</h4>
            <div className="mt-2 divide-y divide-border">
              {notifications.map((n, i) => (
                <div key={i} className="py-2 text-xs">
                  <p className="font-semibold text-deep">{n.text}</p>
                  <span className="text-[10px] text-slate">{n.time}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Saved/Economy Summary Card */}
        <div className="relative mt-6 overflow-hidden rounded-2xl bg-gradient-mint p-5 text-deep shadow-md shadow-mint/10">
          <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-white/10 blur-xl" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-deep/70">
                Minha economia acumulada
              </p>
              <p className="mt-1 text-3xl font-extrabold tracking-tight">R$ 412,90</p>
            </div>
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/20">
              <TrendingUp className="h-5 w-5 text-deep" />
            </span>
          </div>
          <div className="mt-3 text-xs text-deep/80">
            Você salvou <span className="font-bold">6 medicamentos</span> do desperdício!
          </div>
        </div>
      </header>

      {/* Expiry Warning / Safety Advice */}
      <section className="mx-5 rounded-2xl border border-risk-warn/30 bg-risk-warn/5 p-4">
        <div className="flex gap-3">
          <AlertTriangle className="h-5 w-5 shrink-0 text-risk-warn" />
          <div>
            <h4 className="text-xs font-bold text-deep">Alerta de Uso e Segurança</h4>
            <p className="mt-1 text-[11px] leading-relaxed text-slate">
              Medicamentos pré-vencidos possuem eficácia total até a data na embalagem. Planeje seu tratamento e nunca consuma após a validade.
            </p>
          </div>
        </div>
      </section>

      {/* Active Delivery Tracking Section */}
      <section className="px-5">
        <h2 className="mb-3 text-base font-extrabold tracking-tight text-deep">Acompanhar Minha Entrega</h2>
        <Link
          to="/mobile/tracking"
          className="flex items-center justify-between rounded-2xl border border-border/60 bg-card p-4.5 shadow-sm hover:border-primary/20 transition-all"
        >
          <div className="flex items-center gap-3.5">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Truck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold text-primary">Pedido REV-B2C-9042</p>
              <p className="font-bold text-deep text-sm mt-0.5">Em trânsito (Motoboy)</p>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-slate/50" />
        </Link>
      </section>

      {/* Expiry & Pre-expired Alerts */}
      <section className="px-5">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-extrabold tracking-tight text-deep">Urgentes na Região (Validade Curta)</h2>
          <span className="text-[10px] font-bold text-risk-danger uppercase bg-risk-danger/10 px-2 py-0.5 rounded">
            Preços Reduzidos
          </span>
        </div>
        <div className="space-y-3">
          {consumerAlerts.map((a) => (
            <div
              key={a.name}
              className="flex items-center justify-between rounded-2xl border border-border bg-card p-4 shadow-sm"
            >
              <div>
                <p className="font-bold text-deep text-sm">{a.name}</p>
                <div className="mt-1.5 flex items-center gap-2">
                  <span className="text-xs font-bold text-risk-danger">{a.price}</span>
                  <span className="text-[10px] text-slate line-through">{a.originalPrice}</span>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className="inline-flex items-center gap-1 rounded bg-risk-danger/10 px-1.5 py-0.5 text-[9px] font-bold text-risk-danger">
                  Vence em {a.days} dias
                </span>
                <Link
                  to="/mobile/marketplace"
                  className="rounded-lg bg-primary px-3 py-1 text-xs font-bold text-white shadow-sm shadow-primary/25 hover:bg-primary/95"
                >
                  Ver
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations & Offers */}
      <section className="px-5">
        <h2 className="mb-3 text-base font-extrabold tracking-tight text-deep">Recomendações para Você</h2>
        <div className="grid grid-cols-2 gap-3.5">
          {recommendations.map((r) => (
            <div key={r.id} className="relative rounded-2xl border border-border bg-card p-4 shadow-sm">
              <button
                onClick={() => toggleFavorite(r.name)}
                className="absolute right-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-surface hover:bg-border/20 active:scale-95 transition-all text-slate"
              >
                <Heart className={`h-4 w-4 ${favorites.includes(r.name) ? "fill-risk-danger text-risk-danger" : ""}`} />
              </button>

              <span className="inline-block rounded-md bg-mint/30 px-1.5 py-0.5 text-[9px] font-bold text-deep">
                {r.discount}
              </span>
              <p className="mt-2 font-bold text-deep text-xs line-clamp-2 min-h-[2rem]">{r.name}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-extrabold text-deep text-sm">{r.price}</span>
                <span className="text-[9px] font-semibold text-slate">{r.days} dias rest.</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Active Coupons */}
      <section className="px-5">
        <h2 className="mb-3 text-base font-extrabold tracking-tight text-deep">Meus Cupons Disponíveis</h2>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-4">
            <Tag className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs font-extrabold text-deep">REVITTA15</p>
              <p className="text-[10px] text-slate">15% de desconto extra</p>
            </div>
          </div>
          <div className="flex shrink-0 items-center gap-3 rounded-2xl border border-dashed border-mint/65 bg-mint/10 p-4">
            <Tag className="h-5 w-5 text-deep" />
            <div>
              <p className="text-xs font-extrabold text-deep">ENTREGAFREE</p>
              <p className="text-[10px] text-slate">Frete grátis na 1ª compra</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Pharmacy Ads */}
      <section className="px-5">
        <h2 className="mb-3 text-base font-extrabold tracking-tight text-deep">Farmácias Parceiras</h2>
        <div className="space-y-3">
          {partners.map((p) => (
            <div key={p.name} className="flex items-center gap-3.5 rounded-2xl border border-border bg-surface p-3.5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-card border font-bold text-primary">
                {p.logo}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-deep text-xs truncate">{p.name}</p>
                <p className="text-[10px] text-slate mt-0.5 truncate">{p.offer}</p>
              </div>
              <Link
                to="/mobile/marketplace"
                className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-card border border-border hover:border-primary/40 text-slate hover:text-primary transition-all"
              >
                <Store className="h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// B2B Business Home View (original layout)
function BusinessMobileHome() {
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
            const riskPercentage = Math.min(100, Math.max(10, ((180 - a.days) / 120) * 100));
            const progressColor =
              a.days <= 90 ? "bg-risk-danger" : a.days <= 120 ? "bg-risk-warn" : "bg-risk-safe";
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

