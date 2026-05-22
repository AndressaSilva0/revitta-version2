import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Truck,
  Tag,
  Heart,
  Activity,
  Leaf,
  TrendingDown,
  MapPin,
  BarChart3,
  CheckCircle2,
  Sparkles,
  Menu,
  X,
  ChevronDown,
  HelpCircle,
  Calculator,
  Package,
  HelpCircle as HelpIcon,
  Users,
  LineChart,
  Zap,
} from "lucide-react";
import heroDoctor from "@/assets/hero-doctor.png";
import aboutPharmacist from "@/assets/about-pharmacist.png";
import productVitamins from "@/assets/product-vitamins.png";
import productAntibiotics from "@/assets/product-antibiotics.png";
import productSyrup from "@/assets/product-syrup.png";
import productCapsules from "@/assets/product-capsules.png";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Revitta — Uma nova vida para medicamentos" }] }),
  component: Landing,
});

function Landing() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface text-foreground font-sans selection:bg-primary/20 selection:text-deep">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-28 max-w-7xl items-center justify-between px-6">
          <Logo imgClassName="h-24" />

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
            <a href="#produto" className="hover:text-primary transition-colors">
              Produto
            </a>
            <a href="#planos" className="hover:text-primary transition-colors">
              Planos
            </a>
            <a href="#como" className="hover:text-primary transition-colors">
              Como funciona
            </a>
            <a href="#simulador" className="hover:text-primary transition-colors">
              Simulador
            </a>
            <a href="#impacto" className="hover:text-primary transition-colors">
              Impacto
            </a>
            <a href="#depoimentos" className="hover:text-primary transition-colors">
              Clientes
            </a>
            <a href="#faq" className="hover:text-primary transition-colors">
              FAQ
            </a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <Link
              to="/login"
              className="text-sm font-medium text-deep hover:text-primary transition-colors"
            >
              Entrar
            </Link>
            <Link to="/signup">
              <Button className="rounded-full bg-deep text-white hover:bg-deep/90 shadow-md shadow-deep/10 transition-all hover:scale-105">
                Começar grátis
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-deep md:hidden hover:bg-surface transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="border-t border-border/60 bg-background px-6 py-4 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
            <nav className="flex flex-col gap-4 text-sm font-medium text-slate">
              <a
                href="#produto"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-border/40 hover:text-primary"
              >
                Produto
              </a>
              <a
                href="#planos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-border/40 hover:text-primary"
              >
                Planos
              </a>
              <a
                href="#como"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-border/40 hover:text-primary"
              >
                Como funciona
              </a>
              <a
                href="#simulador"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-border/40 hover:text-primary"
              >
                Simulador
              </a>
              <a
                href="#impacto"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-border/40 hover:text-primary"
              >
                Impacto
              </a>
              <a
                href="#depoimentos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-border/40 hover:text-primary"
              >
                Clientes
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-border/40 hover:text-primary"
              >
                FAQ
              </a>
              <div className="flex flex-col gap-3 pt-4">
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-center py-2 text-deep font-semibold hover:text-primary"
                >
                  Entrar
                </Link>
                <Link to="/signup" onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full rounded-full bg-primary text-white hover:bg-primary/90">
                    Começar grátis
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-mint/30 blur-3xl" />
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary animate-pulse">
              <Sparkles className="h-3.5 w-3.5" /> B2B2C Healthtech • Líder em Economia Circular
            </span>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-deep sm:text-5xl md:text-6xl lg:text-7xl">
              Uma nova vida
              <br />
              para{" "}
              <span className="bg-gradient-to-r from-primary to-mint bg-clip-text text-transparent">
                medicamentos
              </span>{" "}
              <br className="hidden md:block" />
              próximos da validade.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate leading-relaxed">
              Rede B2B2C de redistribuição farmacêutica: parceiros circulam estoque com segurança e
              consumidores acessam benefícios e medicamentos com preço justo. Comece no plano
              gratuito e evolua conforme o seu perfil.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/95 shadow-lg shadow-primary/20 transition-all hover:scale-105"
                >
                  Começar grátis <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
              <a href="#planos">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-deep/20 text-deep hover:bg-deep/5 transition-all hover:scale-105"
                >
                  Ver planos
                </Button>
              </a>
            </div>

            <div className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-6">
              <Stat value="R$ 2,4M" label="recuperados" />
              <Stat value="12.800+" label="caixas salvas" />
              <Stat value="340+" label="empresas ativas" />
            </div>
          </div>

          {/* Visual Hero Side */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Blur Backing */}
              <div className="absolute -inset-4 rounded-full bg-gradient-brand opacity-25 blur-3xl animate-pulse" />

              {/* Central Circular Doctor Graphic */}
              <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 via-mint/30 to-primary/10 p-2 shadow-xl border border-white/40 mb-6">
                <div className="h-full w-full rounded-full overflow-hidden border-4 border-white bg-card shadow-inner">
                  <img
                    src={heroDoctor}
                    alt="Médico especialista parceiro Revitta"
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-2 -right-4 bg-glass border border-white/30 backdrop-blur-md rounded-2xl px-3 py-1.5 shadow-lg flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-risk-safe" />
                  <span className="text-[10px] font-bold text-deep uppercase tracking-wider">
                    ANVISA RDC 304
                  </span>
                </div>

                <div className="absolute -bottom-2 -left-4 bg-glass border border-white/30 backdrop-blur-md rounded-2xl px-3 py-1.5 shadow-lg flex items-center gap-2">
                  <span className="flex h-2 w-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-bold text-deep uppercase tracking-wider">
                    SNGPC Integrado
                  </span>
                </div>
              </div>

              {/* Floating HUD glassmorphic details */}
              <div className="relative rounded-3xl border border-border/60 bg-card/90 backdrop-blur-md p-6 shadow-2xl transition-transform duration-500 hover:scale-[1.01]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-slate uppercase tracking-wider">
                      Centro de Controle
                    </p>
                    <p className="text-base font-bold text-deep">Redistribuição em tempo real</p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint/20 text-primary">
                    <Activity className="h-4 w-4" />
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <MiniMetric color="risk-danger" label="Em risco de descarte" value="247 lotes" />
                  <MiniMetric color="primary" label="Recuperado (Rede)" value="R$ 184.200" />
                </div>

                <div className="mt-4 space-y-2">
                  <ProductRow name="Paracetamol 500mg" days={8} />
                  <ProductRow name="Amoxicilina 875mg" days={12} />
                  <ProductRow name="Ibuprofeno 600mg" days={28} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border/60 bg-background/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-6 py-6 text-sm font-semibold uppercase tracking-wider text-slate/70">
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> RDC ANVISA 304/340
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> LGPD 100% COMPLIANT
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> INTEGRAÇÃO SNGPC
          </span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-primary" /> RASTREABILIDADE TOTAL
          </span>
        </div>
      </section>

      {/* LOTES RECÉM-ANUNCIADOS */}
      <section className="mx-auto max-w-7xl px-6 py-20 bg-background">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mint/15 px-3 py-1.5 text-xs font-bold text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Oportunidades em Tempo Real
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl">
              Lotes Recém-Anunciados
            </h2>
            <p className="mt-2 text-slate text-sm max-w-xl">
              Lotes publicados por parceiros da rede B2B2C — redistribua entre estabelecimentos e
              escoe estoque que pode chegar ao consumidor final nas farmácias receptoras.
            </p>
          </div>
          <Link to="/signup" className="mt-4 md:mt-0">
            <Button
              variant="outline"
              className="rounded-full border-primary/30 text-primary hover:bg-primary/5 transition-all"
            >
              Ver todos os lotes <ArrowRight className="ml-1.5 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              id: 1,
              name: "Vitamina C + Zinco 1000mg",
              category: "Vitaminas / Suplementos",
              img: productVitamins,
              quantity: "320 caixas",
              originalPrice: "R$ 28,90",
              revittaPrice: "R$ 11,50",
              discount: "60% OFF",
              expiry: "18/06/2026",
              daysLeft: 27,
              location: "São Paulo - SP",
            },
            {
              id: 2,
              name: "Amoxicilina 500mg (G)",
              category: "Antibióticos",
              img: productAntibiotics,
              quantity: "150 caixas",
              originalPrice: "R$ 42,00",
              revittaPrice: "R$ 14,70",
              discount: "65% OFF",
              expiry: "02/06/2026",
              daysLeft: 11,
              location: "Rio de Janeiro - RJ",
            },
            {
              id: 3,
              name: "Xarope Fitoterápico 120ml",
              category: "Líquidos / Xaropes",
              img: productSyrup,
              quantity: "580 frascos",
              originalPrice: "R$ 19,80",
              revittaPrice: "R$ 6,90",
              discount: "65% OFF",
              expiry: "29/06/2026",
              daysLeft: 38,
              location: "Belo Horizonte - MG",
            },
            {
              id: 4,
              name: "Cápsulas Gelatinosas Ômega 3",
              category: "Cápsulas / Softgel",
              img: productCapsules,
              quantity: "240 potes",
              originalPrice: "R$ 55,00",
              revittaPrice: "R$ 22,00",
              discount: "60% OFF",
              expiry: "12/06/2026",
              daysLeft: 21,
              location: "Curitiba - PR",
            },
          ].map((lot) => {
            const level =
              lot.daysLeft <= 15 ? "risk-danger" : lot.daysLeft <= 30 ? "risk-warn" : "risk-safe";
            return (
              <div
                key={lot.id}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border/60 bg-card p-4 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-xl"
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-surface">
                  <img
                    src={lot.img}
                    alt={lot.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-glass border border-white/20 backdrop-blur-md rounded-full px-2.5 py-1 shadow-sm">
                    <p className="text-[10px] font-bold text-deep">{lot.category}</p>
                  </div>
                  <div className="absolute top-3 right-3 bg-primary text-white rounded-full px-2 py-0.5 text-[10px] font-extrabold shadow-md">
                    {lot.discount}
                  </div>
                </div>

                {/* Content */}
                <div className="mt-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-extrabold text-deep group-hover:text-primary transition-colors line-clamp-1">
                      {lot.name}
                    </h3>
                    <div className="mt-2 flex items-center justify-between text-xs text-slate">
                      <span className="flex items-center gap-1 font-semibold">
                        <Package className="h-3.5 w-3.5 text-slate/70" />
                        {lot.quantity}
                      </span>
                      <span className="flex items-center gap-1 font-semibold">
                        <MapPin className="h-3.5 w-3.5 text-slate/70" />
                        {lot.location}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-border/50">
                    {/* Validade Warning */}
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-slate font-semibold">Validade: {lot.expiry}</span>
                      <span
                        className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold"
                        style={{
                          background: `color-mix(in oklab, var(--${level}) 12%, transparent)`,
                          color: `var(--${level})`,
                        }}
                      >
                        <span
                          className={`h-1.5 w-1.5 rounded-full ${lot.daysLeft <= 15 ? "animate-pulse" : ""}`}
                          style={{ backgroundColor: `var(--${level})` }}
                        />
                        {lot.daysLeft}d restantes
                      </span>
                    </div>

                    {/* Price & Action */}
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] text-slate/70 line-through block font-medium">
                          {lot.originalPrice}
                        </span>
                        <span className="text-lg font-black text-primary">{lot.revittaPrice}</span>
                      </div>
                      <Link to="/signup">
                        <Button className="rounded-full bg-deep text-white hover:bg-deep/90 text-xs px-4 h-9 shadow-md shadow-deep/5 transition-all hover:scale-105">
                          Tenho Interesse
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FEATURES */}
      <section id="produto" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">Plataforma B2B2C</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl md:text-5xl">
            Da operação do parceiro à prateleira do consumidor — com rastreio e conformidade.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={Tag}
            title="Cadastro Inteligente"
            text="Lote, validade e armazenamento via leitura de código de barras e importação de planilha em lote."
          />
          <Feature
            icon={ShieldCheck}
            title="Rede B2B2C Segura"
            text="Parceiros negociam lotes entre si na rede; o estoque redistribuído chega às farmácias que atendem o consumidor final."
          />
          <Feature
            icon={Truck}
            title="Rastreio Logístico"
            text="Timeline de retirada, transporte e entrega em conformidade com as regras de temperatura ANVISA."
          />
          <Feature
            icon={BarChart3}
            title="Insights Preditivos"
            text="Previsão de vencimentos no estoque, perdas financeiras evitadas e relatórios ESG prontos para auditoria."
          />
        </div>
      </section>

      {/* PLANOS */}
      <section id="planos" className="border-y border-border/60 bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">Planos & preços</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl md:text-5xl">
              Do exploratório gratuito ao SaaS para grandes redes
            </h2>
            <p className="mt-4 text-slate leading-relaxed">
              Parceiros B2B entram sem mensalidade fixa. Consumidores e operações avançadas têm
              planos pagos conforme a maturidade do produto.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <PricingPlan
              highlight
              badge="Disponível agora"
              icon={Zap}
              name="Explorar"
              subtitle="Gratuito — conheça como funciona"
              price="R$ 0"
              priceDetail="/mês · sem fidelidade"
              audience="Farmácias, clínicas, distribuidoras e laboratórios"
              timeline="Disponível agora"
              features={[
                "Cadastro na rede B2B2C e painel demonstrativo",
                "Simulador de ROI e publicação de lotes de teste",
                "Comissão apenas em redistribuições concluídas",
              ]}
              ctaLabel="Começar grátis"
              ctaTo="/signup"
            />
            <PricingPlan
              badge="Ano 1"
              icon={Users}
              name="Assinatura B2C — Saúde+"
              subtitle="Consumidor paga mensalidade por benefícios extras"
              price="R$ 14,90"
              priceDetail="/mês"
              audience="Consumidor"
              timeline="A partir do Ano 1"
              features={[
                "Alertas de medicamentos e validade na região",
                "Descontos em lotes redistribuídos nas farmácias parceiras",
                "Histórico de tratamentos e lembretes de reposição",
              ]}
              ctaLabel="Lista de espera"
              ctaTo="/signup"
            />
            <PricingPlan
              badge="Ano 1"
              icon={Heart}
              name="Assinatura B2C — Plus"
              subtitle="Plano família para cuidadores e idosos com polifarmácia"
              price="R$ 29,90"
              priceDetail="/mês"
              audience="Consumidor (cuidadores)"
              timeline="A partir do Ano 1"
              features={[
                "Tudo do Saúde+ para até 4 dependentes",
                "Gestão de polifarmácia e interações",
                "Suporte prioritário para cuidadores",
              ]}
              ctaLabel="Lista de espera"
              ctaTo="/signup"
            />
            <PricingPlan
              badge="Ano 2"
              icon={LineChart}
              name="Inteligência de dados (SaaS)"
              subtitle="Relatórios de perdas e previsão de vencimento por SKU e região"
              price="R$ 199–499"
              priceDetail="/mês por cliente"
              audience="Distribuidoras, redes, labs"
              timeline="A partir do Ano 2"
              features={[
                "Dashboard por SKU, região e canal",
                "Previsão de vencimento e descarte com IA",
                "API e exportação para ERP e BI",
              ]}
              ctaLabel="Falar com vendas"
              ctaHref="#faq"
            />
          </div>

          <p className="mt-10 text-center text-xs text-slate max-w-2xl mx-auto">
            Valores de referência para o roadmap comercial. O plano Explorar não cobra mensalidade;
            planos B2C e SaaS entram em operação nas fases indicadas.
          </p>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como" className="bg-deep text-white relative overflow-hidden">
        <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-widest text-mint">Fluxo Simples</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl md:text-5xl">
              Da prateleira em risco até a redistribuição, em{" "}
              <span className="text-mint">4 passos práticos</span>.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                n: "01",
                t: "Cadastre",
                d: "Escaneie o código de barras ou envie seu inventário. A inteligência Revitta faz o cálculo de risco.",
              },
              {
                n: "02",
                t: "Publique",
                d: "Lotes próximos ao vencimento entram na rede B2B2C — visíveis para parceiros homologados da sua região.",
              },
              {
                n: "03",
                t: "Combine",
                d: "Farmácias e clínicas reservam entre si; o medicamento segue para quem pode colocá-lo na prateleira do consumidor.",
              },
              {
                n: "04",
                t: "Rastreie",
                d: "Coleta e entrega feitas por parceiros homologados da saúde com auditoria digital.",
              },
            ].map((s) => (
              <div
                key={s.n}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition-all duration-300 hover:bg-white/[0.06] hover:border-mint/30"
              >
                <span className="text-xs font-mono font-bold text-mint bg-mint/10 px-2.5 py-1 rounded-full">
                  {s.n}
                </span>
                <h3 className="mt-5 text-xl font-bold group-hover:text-mint transition-colors">
                  {s.t}
                </h3>
                <p className="mt-2.5 text-sm text-white/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIMULATOR SECTION */}
      <section id="simulador" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          <div className="lg:col-span-5">
            <p className="text-sm font-bold uppercase tracking-widest text-primary">
              Simulação de ROI
            </p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl">
              Pare de jogar dinheiro no lixo. Comece a recuperar hoje.
            </h2>
            <p className="mt-5 text-slate leading-relaxed">
              O descarte incorreto gera passivos ambientais e prejuízos operacionais severos. Na rede
              B2B2C Revitta, você recupera receita entre parceiros e evita que medicamentos úteis
              deixem de chegar ao paciente nas farmácias da região.
            </p>
            <div className="mt-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-deep">
                  Sem custos fixos de adesão ou taxas ocultas
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-deep">
                  Cálculo em conformidade com o preço fábrica (PF)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span className="text-sm font-semibold text-deep">
                  Resultados integrados ao seu balancete contábil
                </span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <CalculatorWidget />
          </div>
        </div>
      </section>

      {/* IMPACT & ESG */}
      <section id="impacto" className="bg-surface border-y border-border/60">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-primary">
                Conformidade & ESG
              </p>
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl md:text-5xl">
                Redução de até <span className="text-primary">70%</span> nas perdas de medicamentos.
              </h2>
              <p className="mt-5 max-w-lg text-slate leading-relaxed">
                Cada lote circularizado reduz descarte, amplia o acesso do consumidor final a
                tratamentos com preço mais justo nas farmácias parceiras e gera relatórios ESG
                auditáveis para o seu negócio.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Recuperação média de 62% do custo de aquisição original",
                  "Auditoria completa de cadeia e temperatura (ANVISA RDC 304)",
                  "Integração contábil e de inventário com ERPs líderes do setor",
                  "Certificação digital de CO₂ equivalente evitado por lote",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="font-semibold text-deep text-sm">{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-20 blur-3xl" />

              {/* Main Image Container */}
              <div className="relative h-[480px] w-full overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
                <img
                  src={aboutPharmacist}
                  alt="Farmacêutica parceira Revitta no laboratório"
                  className="h-full w-full object-cover object-center"
                />

                {/* Gradient Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/40 to-transparent" />

                {/* Floating Glassmorphic Stats Panel */}
                <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-deep/85 backdrop-blur-md p-6 text-white shadow-xl">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-black leading-none tracking-tight text-white">
                      70%
                    </span>
                    <span className="text-mint font-extrabold uppercase text-xs tracking-wider">
                      de redução de descarte
                    </span>
                  </div>
                  <p className="mt-2 text-white/80 text-xs leading-relaxed">
                    Média auditada entre as 340 farmácias conectadas no ecossistema nacional no ano
                    de 2025.
                  </p>
                  <div className="mt-5 grid grid-cols-3 gap-4 border-t border-white/15 pt-4 text-center">
                    <Mini t="R$ 521k" s="recuperados/mês" />
                    <Mini t="8.940" s="redistribuições" />
                    <Mini t="25.4t" s="CO₂ evitado" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-primary">
            Depoimentos reais
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-deep sm:text-4xl">
            Quem já circula seu estoque com a Revitta
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Quote
            name="Maria Oliveira"
            role="Gerente de Compras • Farmácia Central — SP"
            quote="Cortamos 82% das perdas de validade em menos de 4 meses de uso da plataforma. O sistema se pagou em duas semanas."
            avatarUrl="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&h=120&q=80"
          />
          <Quote
            name="Carlos Santos"
            role="Diretor de Logística • Drogaria Saúde — RJ"
            quote="Já redistribuímos mais de R$ 47 mil em mercadorias que antes iam direto para a incineração. A rastreabilidade ANVISA é impecável."
            avatarUrl="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80"
          />
          <Quote
            name="Ana Costa"
            role="Coordenadora Farmacêutica • Clínica Vital — PR"
            quote="Conseguimos escoar lotes muito perto do vencimento. Excelente para o caixa e mantém nosso estoque sempre saudável."
            avatarUrl="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&h=120&q=80"
          />
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-surface border-t border-border/60">
        <div className="mx-auto max-w-4xl px-6 py-24">
          <div className="text-center mb-12">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary mb-3">
              <HelpIcon className="h-5 w-5" />
            </span>
            <h2 className="text-3xl font-extrabold text-deep">Dúvidas Frequentes</h2>
            <p className="mt-2 text-slate text-sm">
              Respostas para as principais perguntas sobre conformidade e operações
            </p>
          </div>

          <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-lg sm:p-8 space-y-2">
            <FAQItem
              question="A Revitta está em conformidade com as exigências da ANVISA?"
              answer="Sim. A plataforma foi desenhada sob as regras da RDC 304 e RDC 340, que regulamentam a distribuição e armazenamento de medicamentos. Todos os processos de transporte, verificação de lote e registro de temperatura contam com registro auditável em nossa base de dados."
            />
            <FAQItem
              question="O que significa a Revitta ser uma plataforma B2B2C?"
              answer="Parceiros B2B — farmácias, clínicas, distribuidoras e laboratórios — usam a Revitta para cadastrar, negociar e rastrear redistribuições entre si. O efeito B2C é indireto: medicamentos que seriam descartados voltam ao estoque de farmácias que atendem o consumidor final, com maior disponibilidade e preços mais acessíveis na prateleira."
            />
            <FAQItem
              question="Qual é o custo para começar a usar a plataforma?"
              answer="O plano Explorar é gratuito: cadastro, painel demonstrativo e simulador, sem mensalidade fixa — cobramos comissão apenas sobre redistribuições concluídas. Assinaturas B2C (Saúde+ e Plus) e o SaaS de Inteligência de dados entram nas fases Ano 1 e Ano 2, conforme a tabela de planos na página."
            />
            <FAQItem
              question="Como funciona a logística de coleta e entrega?"
              answer="A logística é realizada por transportadoras licenciadas na ANVISA e integradas ao ecossistema da Revitta. Após o matching e aceitação da redistribuição, o sistema emite o roteiro de coleta inteligente com garantia de controle térmico do início ao fim."
            />
            <FAQItem
              question="A plataforma se integra com o nosso sistema ERP interno?"
              answer="Sim, oferecemos APIs de fácil integração com os principais ERPs farmacêuticos e hospitalares do mercado. Isso possibilita a sincronização automática de lotes e validade sem a necessidade de digitação dupla."
            />
            <FAQItem
              question="Quem define o valor de venda do medicamento próximo ao vencimento?"
              answer="O estabelecimento proprietário do medicamento possui total autonomia para escolher o preço de oferta do lote. A plataforma sugere um desconto estratégico baseado no tempo restante de validade para acelerar o processo de redistribuição."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24 pt-12">
        <div className="relative overflow-hidden rounded-3xl bg-deep px-8 py-16 text-center text-white sm:px-12 sm:py-20 shadow-2xl">
          {/* Subtle decoration blobs */}
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-mint/20 blur-3xl" />

          <div className="relative max-w-3xl mx-auto flex flex-col items-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-mint/25 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">
              Inicie em 5 minutos
            </span>
            <h3 className="mt-6 text-3xl font-extrabold md:text-5xl leading-tight">
              Pronto para otimizar seu estoque e impulsionar suas margens?
            </h3>
            <p className="mt-4 text-white/70 max-w-xl text-base">
              Junte-se a centenas de estabelecimentos na rede B2B2C Revitta — rentabilidade para o
              parceiro, mais medicamentos disponíveis para quem compra na farmácia. Teste gratuito
              imediato.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/signup">
                <Button
                  size="lg"
                  className="rounded-full bg-mint text-deep hover:bg-mint/90 font-bold transition-all hover:scale-105 px-8"
                >
                  Criar conta grátis
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/35 bg-transparent text-white hover:bg-white/10 transition-all hover:scale-105 px-8"
                >
                  Acessar painel demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-12 text-sm text-slate md:flex-row">
          <Logo imgClassName="h-24" />
          <p>
            © 2026 Revitta Tecnologia. Todos os direitos reservados. Uma nova vida para
            medicamentos.
          </p>
          <div className="flex gap-6 font-semibold">
            <a href="#" className="hover:text-primary transition-colors">
              Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Suporte
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-2xl font-black text-deep md:text-3xl">{value}</p>
      <p className="text-xs font-semibold text-slate mt-0.5">{label}</p>
    </div>
  );
}

function MiniMetric({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-surface p-3 transition-colors hover:bg-border/30">
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate">{label}</p>
      <p className="mt-1 text-lg font-black" style={{ color: `var(--${color})` }}>
        {value}
      </p>
    </div>
  );
}

function ProductRow({ name, days }: { name: string; days: number }) {
  const level = days <= 15 ? "risk-danger" : days <= 30 ? "risk-warn" : "risk-safe";
  return (
    <div className="flex items-center justify-between rounded-xl border border-border/50 bg-surface px-4 py-2.5 hover:bg-border/10 transition-colors">
      <span className="text-sm font-semibold text-deep">{name}</span>
      <span
        className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-bold transition-all"
        style={{
          background: `color-mix(in oklab, var(--${level}) 12%, transparent)`,
          color: `var(--${level})`,
        }}
      >
        <span
          className={`h-2 w-2 rounded-full ${days <= 15 ? "animate-pulse" : ""}`}
          style={{ background: `var(--${level})` }}
        />
        {days}d
      </span>
    </div>
  );
}

function PricingPlan({
  icon: Icon,
  name,
  subtitle,
  price,
  priceDetail,
  audience,
  timeline,
  features,
  ctaLabel,
  ctaTo,
  ctaHref,
  badge,
  highlight,
}: {
  icon: any;
  name: string;
  subtitle: string;
  price: string;
  priceDetail: string;
  audience: string;
  timeline: string;
  features: string[];
  ctaLabel: string;
  ctaTo?: string;
  ctaHref?: string;
  badge: string;
  highlight?: boolean;
}) {
  const ctaClass = highlight
    ? "rounded-full bg-primary text-primary-foreground hover:bg-primary/95 shadow-md shadow-primary/15"
    : "rounded-full border border-border bg-surface text-deep hover:border-primary/40 hover:bg-primary/5";

  return (
    <article
      className={`relative flex flex-col rounded-2xl border p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
        highlight
          ? "border-primary bg-card ring-2 ring-primary/20"
          : "border-border/60 bg-card"
      }`}
    >
      {highlight && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-primary px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground">
          Recomendado para começar
        </span>
      )}
      <span
        className={`inline-flex w-fit rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ${
          highlight ? "bg-mint/20 text-deep" : "bg-surface text-slate"
        }`}
      >
        {badge}
      </span>
      <span
        className={`mt-4 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
          highlight ? "bg-primary text-white" : "bg-mint/15 text-primary"
        }`}
      >
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-4 text-lg font-bold text-deep leading-snug">{name}</h3>
      <p className="mt-1 text-sm text-slate leading-relaxed">{subtitle}</p>
      <div className="mt-5 flex items-baseline gap-1">
        <span className="text-3xl font-black text-deep">{price}</span>
        <span className="text-xs font-semibold text-slate">{priceDetail}</span>
      </div>
      <div className="mt-4 space-y-2 rounded-xl bg-surface/80 p-3 text-xs">
        <p>
          <span className="font-bold text-deep">Público: </span>
          <span className="text-slate">{audience}</span>
        </p>
        <p>
          <span className="font-bold text-deep">Disponibilidade: </span>
          <span className="text-slate">{timeline}</span>
        </p>
      </div>
      <ul className="mt-5 flex-1 space-y-2.5">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-slate">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        {ctaTo ? (
          <Link to={ctaTo} className="block">
            <Button className={`w-full font-bold ${ctaClass}`}>{ctaLabel}</Button>
          </Link>
        ) : (
          <a href={ctaHref ?? "#planos"} className="block">
            <Button
              variant={highlight ? "default" : "outline"}
              className={`w-full font-bold ${ctaClass}`}
            >
              {ctaLabel}
            </Button>
          </a>
        )}
      </div>
    </article>
  );
}

function Feature({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/55 hover:shadow-lg">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint/15 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-lg font-bold text-deep group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="mt-2.5 text-sm text-slate leading-relaxed">{text}</p>
    </div>
  );
}

function Mini({ t, s }: { t: string; s: string }) {
  return (
    <div>
      <p className="text-xl font-black md:text-2xl">{t}</p>
      <p className="text-[10px] font-bold uppercase tracking-wider text-white/70 mt-0.5">{s}</p>
    </div>
  );
}

function Quote({
  name,
  role,
  quote,
  avatarUrl,
}: {
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}) {
  return (
    <figure className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
      <div>
        <Heart className="h-5 w-5 text-primary fill-primary/10" />
        <blockquote className="mt-4 text-sm font-medium text-deep leading-relaxed">
          "{quote}"
        </blockquote>
      </div>
      <figcaption className="mt-6 flex items-center gap-3 border-t border-border/60 pt-4">
        <img
          src={avatarUrl}
          alt={name}
          className="h-10 w-10 rounded-full object-cover ring-2 ring-primary/20"
        />
        <div>
          <p className="text-sm font-bold text-deep">{name}</p>
          <p className="text-xs text-slate">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-border/50 py-4.5 last:border-b-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left font-bold text-deep hover:text-primary transition-colors focus:outline-none"
      >
        <span className="text-base sm:text-lg pr-4">{question}</span>
        <ChevronDown
          className={`h-5 w-5 text-slate shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary" : ""}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-sm text-slate leading-relaxed font-medium bg-surface/50 rounded-xl p-3 border border-border/30">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

function CalculatorWidget() {
  const [monthlyLoss, setMonthlyLoss] = useState(15000);

  // Recovery is 62%
  const annualSavings = Math.round(monthlyLoss * 12 * 0.62);
  const totalAnnualLoss = monthlyLoss * 12;
  const medicinesSaved = Math.round((monthlyLoss / 50) * 12);
  const co2Avoided = ((monthlyLoss / 100) * 0.05 * 12).toFixed(1);

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-6 shadow-xl lg:p-8 relative">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <Calculator className="h-5 w-5" />
        </span>
        <div>
          <h3 className="text-lg font-extrabold text-deep">Simulador de Economia</h3>
          <p className="text-xs text-slate">Calcule o retorno sobre descarte evitado</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex items-center justify-between font-bold text-sm">
          <span className="text-deep">Lotes a vencer por mês</span>
          <span className="text-lg font-black text-primary">
            R$ {monthlyLoss.toLocaleString("pt-BR")}
          </span>
        </div>
        <input
          type="range"
          min="2000"
          max="150000"
          step="1000"
          value={monthlyLoss}
          onChange={(e) => setMonthlyLoss(parseInt(e.target.value))}
          className="mt-4 h-2 w-full cursor-pointer rounded-lg bg-border accent-primary focus:outline-none"
        />
        <div className="mt-2 flex justify-between text-[10px] font-bold text-slate">
          <span>R$ 2.000</span>
          <span>R$ 75.000</span>
          <span>R$ 150.000</span>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-border/60 bg-surface p-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate">
            Economia Anual Estimada
          </p>
          <p className="mt-2 text-2xl font-black text-primary">
            R$ {annualSavings.toLocaleString("pt-BR")}
          </p>
          <p className="mt-1 text-[10px] font-semibold text-slate/85">
            recuperação estimada de 62%
          </p>
        </div>

        <div className="rounded-2xl border border-border/60 bg-surface p-4 text-center">
          <p className="text-[10px] font-bold uppercase tracking-wider text-slate">
            Prejuízo Anual sem Revitta
          </p>
          <p className="mt-2 text-xl font-extrabold text-risk-danger">
            R$ {totalAnnualLoss.toLocaleString("pt-BR")}
          </p>
          <p className="mt-1 text-[10px] font-semibold text-slate/85">prejuízo de incineração</p>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border/60 pt-4 text-center">
        <div>
          <p className="text-[10px] font-bold text-slate uppercase tracking-wider">
            Unidades Salvas/Ano
          </p>
          <p className="mt-1.5 font-extrabold text-deep flex items-center justify-center gap-1.5 text-sm">
            <Package className="h-4 w-4 text-mint" /> {medicinesSaved} un.
          </p>
        </div>
        <div>
          <p className="text-[10px] font-bold text-slate uppercase tracking-wider">
            Pegada de Carbono Evitada
          </p>
          <p className="mt-1.5 font-extrabold text-deep flex items-center justify-center gap-1.5 text-sm">
            <Leaf className="h-4 w-4 text-primary" /> {co2Avoided}t CO₂
          </p>
        </div>
      </div>
    </div>
  );
}
