import { createFileRoute, Link } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, ShieldCheck, Truck, Tag, Heart, Activity, Leaf,
  TrendingDown, MapPin, BarChart3, CheckCircle2, Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Revitta — Uma nova vida para medicamentos" }] }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-surface text-foreground">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
            <a href="#produto" className="hover:text-primary">Produto</a>
            <a href="#como" className="hover:text-primary">Como funciona</a>
            <a href="#impacto" className="hover:text-primary">Impacto</a>
            <a href="#depoimentos" className="hover:text-primary">Clientes</a>
          </nav>
          <div className="flex items-center gap-2">
            <Link to="/login" className="hidden text-sm font-medium text-deep hover:text-primary sm:inline-block">Entrar</Link>
            <Link to="/signup">
              <Button className="rounded-full bg-deep text-white hover:bg-deep/90">Começar grátis</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-mint/30 blur-3xl" />
          <div className="absolute right-0 top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:py-28">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Healthtech B2B • Brasil
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight text-deep md:text-6xl lg:text-7xl">
              Uma nova vida<br />
              para <span className="text-primary">medicamentos</span> <br className="hidden md:block" />
              próximos do vencimento.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate">
              Revitta conecta farmácias, clínicas, distribuidoras e laboratórios em uma
              rede segura de redistribuição. Menos descarte, mais recuperação de valor.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/signup">
                <Button size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Começar agora <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/dashboard">
                <Button size="lg" variant="outline" className="rounded-full border-deep/20 text-deep hover:bg-deep/5">
                  Ver dashboard demo
                </Button>
              </Link>
            </div>

            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border/60 pt-6">
              <Stat value="R$ 2,4M" label="recuperados" />
              <Stat value="12.8k" label="medicamentos" />
              <Stat value="340+" label="farmácias" />
            </div>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-brand opacity-20 blur-2xl" />
              <div className="relative rounded-3xl border border-border/60 bg-card p-5 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-slate">Centro de Controle</p>
                    <p className="text-sm font-semibold text-deep">Farmácia Central — SP</p>
                  </div>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-mint/20 text-primary">
                    <Activity className="h-4 w-4" />
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <MiniMetric color="risk-danger" label="Em risco" value="247" />
                  <MiniMetric color="primary" label="Recuperado" value="R$ 184k" />
                </div>
                <div className="mt-4 space-y-2">
                  <ProductRow name="Paracetamol 500mg" days={8} />
                  <ProductRow name="Amoxicilina 875mg" days={12} />
                  <ProductRow name="Ibuprofeno 600mg" days={28} />
                  <ProductRow name="Dipirona 1g" days={62} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-border/60 bg-background/60">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-12 gap-y-4 px-6 py-8 text-sm font-semibold uppercase tracking-wider text-slate/70">
          <span>RDC ANVISA</span>
          <span>•</span>
          <span>LGPD compliant</span>
          <span>•</span>
          <span>SNGPC integrado</span>
          <span>•</span>
          <span>Rastreabilidade total</span>
        </div>
      </section>

      {/* FEATURES */}
      <section id="produto" className="mx-auto max-w-7xl px-6 py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Plataforma</p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight text-deep md:text-5xl">
            Tudo que sua rede precisa para circular valor, não desperdício.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Tag} title="Cadastro inteligente" text="Lote, validade e armazenagem com leitura de código de barras e upload em lote." />
          <Feature icon={ShieldCheck} title="Marketplace seguro" text="Redistribua para a rede certa, com prioridade visual e reserva em 1 clique." />
          <Feature icon={Truck} title="Rastreio farmacêutico" text="Timeline de retirada, transporte e entrega com registro de auditoria." />
          <Feature icon={BarChart3} title="Insights preditivos" text="Previsão de descarte, perdas evitadas e impacto ambiental em tempo real." />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como" className="bg-deep text-white">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-mint">Como funciona</p>
            <h2 className="mt-3 text-4xl font-bold md:text-5xl">
              Da prateleira em risco até a redistribuição, em <span className="text-mint">4 passos</span>.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "01", t: "Cadastre", d: "Leitor de barras ou upload em lote — Revitta calcula o risco automaticamente." },
              { n: "02", t: "Publique", d: "Produtos próximos do vencimento entram no marketplace privado da rede." },
              { n: "03", t: "Conecte", d: "Farmácias e clínicas próximas reservam em tempo real, com prioridade visual." },
              { n: "04", t: "Rastreie", d: "Logística farmacêutica auditável até a entrega final, com prova de cadeia." },
            ].map(s => (
              <div key={s.n} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur">
                <span className="text-sm font-mono text-mint">{s.n}</span>
                <h3 className="mt-3 text-xl font-semibold">{s.t}</h3>
                <p className="mt-2 text-sm text-white/70">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section id="impacto" className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">Impacto real</p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight text-deep md:text-5xl">
              Redução de <span className="text-primary">70%</span> em perdas farmacêuticas.
            </h2>
            <p className="mt-5 max-w-lg text-slate">
              Cada caixa redistribuída é menos descarte, mais acesso e mais margem.
              Revitta transforma o vencimento em uma nova oportunidade.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                "Recuperação média de 62% do valor original",
                "Auditoria completa para conformidade ANVISA",
                "Integração com SNGPC e ERPs farmacêuticos",
                "Relatório ESG de impacto ambiental evitado",
              ].map(t => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <span className="text-slate">{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-brand p-8 text-white shadow-xl">
              <div className="flex items-baseline gap-2">
                <span className="text-7xl font-bold leading-none">70%</span>
                <span className="text-mint">menos perdas</span>
              </div>
              <p className="mt-3 text-white/80">média entre as 340 farmácias da rede em 2025.</p>
              <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/15 pt-6 text-sm">
                <Mini t="R$ 521k" s="recuperado/mês" />
                <Mini t="89" s="redistribuições" />
                <Mini t="2.1t" s="CO₂ evitado" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="depoimentos" className="bg-surface">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <h2 className="text-center text-4xl font-bold tracking-tight text-deep md:text-5xl">
            Quem já circula com a <span className="text-primary">Revitta</span>.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Quote name="Maria Oliveira" role="Farmácia Central — SP" quote="Cortamos 82% das perdas em 4 meses. O sistema se pagou em duas semanas." />
            <Quote name="Carlos Santos" role="Drogaria Saúde — RJ" quote="Já redistribuímos mais de R$ 47 mil que iam para descarte." />
            <Quote name="Ana Costa" role="Clínica Vital — PR" quote="Vendemos mais perto do vencimento. Estoque saudável, conta no azul." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-3xl bg-deep p-12 text-white">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
          <div className="relative grid items-center gap-6 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-3xl font-bold md:text-4xl">Pronto para dar uma nova vida ao seu estoque?</h3>
              <p className="mt-3 text-white/70">Junte-se a 340+ estabelecimentos. Sem cartão de crédito.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/signup"><Button size="lg" className="rounded-full bg-mint text-deep hover:bg-mint/90">Começar grátis</Button></Link>
              <Link to="/dashboard"><Button size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10">Ver demo</Button></Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 bg-background">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-slate md:flex-row">
          <Logo />
          <p>© 2026 Revitta. Uma nova vida para medicamentos.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacidade</a>
            <a href="#" className="hover:text-primary">Termos</a>
            <a href="#" className="hover:text-primary">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="text-2xl font-bold text-deep">{value}</p>
      <p className="text-xs text-slate">{label}</p>
    </div>
  );
}
function MiniMetric({ color, label, value }: { color: string; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-surface p-3">
      <p className="text-[11px] font-medium text-slate">{label}</p>
      <p className="mt-1 text-lg font-bold" style={{ color: `var(--${color})` }}>{value}</p>
    </div>
  );
}
function ProductRow({ name, days }: { name: string; days: number }) {
  const level = days <= 15 ? "risk-danger" : days <= 30 ? "risk-warn" : "risk-safe";
  return (
    <div className="flex items-center justify-between rounded-lg border border-border/50 bg-surface px-3 py-2">
      <span className="text-sm font-medium text-deep">{name}</span>
      <span className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[11px] font-semibold" style={{ background: `color-mix(in oklab, var(--${level}) 14%, transparent)`, color: `var(--${level})` }}>
        <span className="h-1.5 w-1.5 rounded-full" style={{ background: `var(--${level})` }} />
        {days}d
      </span>
    </div>
  );
}
function Feature({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="group rounded-2xl border border-border/60 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-mint/15 text-primary group-hover:bg-primary group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <h3 className="mt-5 text-lg font-semibold text-deep">{title}</h3>
      <p className="mt-2 text-sm text-slate">{text}</p>
    </div>
  );
}
function Mini({ t, s }: { t: string; s: string }) {
  return <div><p className="text-xl font-bold">{t}</p><p className="text-xs text-white/70">{s}</p></div>;
}
function Quote({ name, role, quote }: { name: string; role: string; quote: string }) {
  return (
    <figure className="rounded-2xl border border-border/60 bg-card p-6">
      <Heart className="h-5 w-5 text-primary" />
      <blockquote className="mt-4 text-deep">"{quote}"</blockquote>
      <figcaption className="mt-5 flex items-center gap-3 border-t border-border/60 pt-4">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-mint/30 text-sm font-bold text-deep">
          {name.split(" ").map(n => n[0]).slice(0, 2).join("")}
        </span>
        <div>
          <p className="text-sm font-semibold text-deep">{name}</p>
          <p className="text-xs text-slate">{role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
