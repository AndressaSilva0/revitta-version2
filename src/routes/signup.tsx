import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Store, Hospital, Truck, FlaskConical, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Criar conta — Revitta" }] }),
  component: SignupPage,
});

const types = [
  { id: "farmacia", label: "Farmácia", desc: "Drogarias e redes", icon: Store },
  { id: "clinica", label: "Clínica / Hospital", desc: "Unidades de saúde", icon: Hospital },
  { id: "distribuidora", label: "Distribuidora", desc: "Logística farma", icon: Truck },
  { id: "laboratorio", label: "Laboratório", desc: "Fabricantes", icon: FlaskConical },
];

const perks = [
  "Marketplace privado da rede",
  "Rastreabilidade ANVISA completa",
  "Insights preditivos de descarte",
  "Relatório ESG de impacto",
];

function SignupPage() {
  const nav = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [type, setType] = useState<string | null>(null);

  return (
    <div className="grid min-h-screen bg-surface lg:grid-cols-[1fr_1.1fr]">
      {/* Brand side */}
      <aside className="relative hidden overflow-hidden bg-deep p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <svg viewBox="0 0 600 800" className="pointer-events-none absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="sg" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.45" />
              <stop offset="100%" stopColor="hsl(var(--mint))" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <path fill="url(#sg)" d="M-50,650 C100,500 350,680 500,560 C650,440 700,720 600,850 L-50,850 Z" />
          <circle cx="480" cy="120" r="160" fill="hsl(var(--mint))" fillOpacity="0.12" />
          <circle cx="80" cy="300" r="80" fill="hsl(var(--primary))" fillOpacity="0.18" />
          <circle cx="540" cy="400" r="3" fill="hsl(var(--mint))" />
          <circle cx="120" cy="500" r="3" fill="hsl(var(--mint))" />
          <circle cx="420" cy="660" r="4" fill="white" opacity="0.6" />
        </svg>

        <div className="relative z-10">
          <Logo variant="light" />
        </div>

        <div className="relative z-10 max-w-md">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3 py-1 text-xs font-semibold text-mint">
            <Sparkles className="h-3.5 w-3.5" /> Grátis para começar
          </span>
          <h2 className="mt-6 text-4xl font-bold leading-tight">
            Junte-se a <span className="text-mint">340+</span> estabelecimentos circulando valor, não desperdício.
          </h2>
          <ul className="mt-8 space-y-3">
            {perks.map((p) => (
              <li key={p} className="flex items-start gap-3 text-white/85">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-mint" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-xs text-white/60">
          <ShieldCheck className="h-4 w-4 text-mint" />
          <span>RDC ANVISA • LGPD compliant • SNGPC integrado</span>
        </div>
      </aside>

      {/* Form side */}
      <main className="flex flex-col bg-background">
        <header className="flex items-center justify-between px-6 py-6 lg:px-12">
          <div className="lg:hidden"><Logo /></div>
          <span className="hidden text-sm text-slate lg:block">
            Já tem conta?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline">Entrar</Link>
          </span>
          <Link to="/login" className="text-sm text-slate hover:text-primary lg:hidden">Já tenho conta</Link>
        </header>

        <div className="mx-auto w-full max-w-xl flex-1 px-6 pb-16 pt-4 lg:px-12">
          {/* Stepper */}
          <div className="mb-10 flex items-center gap-3 text-xs font-semibold">
            <StepDot n={1} active={step >= 1} done={step > 1} label="Tipo" />
            <span className="h-px w-10 bg-border" />
            <StepDot n={2} active={step >= 2} done={false} label="Dados" />
          </div>

          {step === 1 && (
            <>
              <h1 className="text-3xl font-bold tracking-tight text-deep md:text-4xl">Qual o seu estabelecimento?</h1>
              <p className="mt-2 text-slate">Personalizamos sua experiência conforme seu perfil na rede.</p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {types.map((t) => {
                  const active = type === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`group flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition ${
                        active
                          ? "border-primary bg-primary/5 shadow-md shadow-primary/10"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition ${active ? "bg-primary text-white" : "bg-mint/15 text-primary"}`}>
                        <t.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="font-semibold text-deep">{t.label}</p>
                        <p className="text-xs text-slate">{t.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              <Button
                disabled={!type}
                onClick={() => setStep(2)}
                className="mt-8 h-12 w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 disabled:opacity-40"
              >
                Continuar <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl font-bold tracking-tight text-deep md:text-4xl">Quase lá!</h1>
              <p className="mt-2 text-slate">Crie sua conta para ativar a rede de redistribuição.</p>

              <form
                className="mt-8 space-y-4"
                onSubmit={(e) => { e.preventDefault(); toast.success("Conta criada! Bem-vindo à Revitta."); nav({ to: "/dashboard" }); }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Nome completo" id="name" placeholder="Maria Oliveira" />
                  <Field label="Telefone" id="phone" type="tel" placeholder="(11) 99999-0000" />
                </div>
                <Field label="E-mail corporativo" id="email" type="email" placeholder="voce@farmacia.com.br" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="CNPJ" id="cnpj" placeholder="00.000.000/0000-00" />
                  <Field label="Estabelecimento" id="org" placeholder="Farmácia Central" />
                </div>
                <Field label="Senha" id="password" type="password" placeholder="Mínimo 8 caracteres" />

                <Button type="submit" className="h-12 w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90">
                  Criar conta gratuita
                </Button>

                <Button type="button" variant="outline" className="h-12 w-full rounded-full border-border bg-white">
                  <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                  Cadastrar com Google
                </Button>

                <button type="button" onClick={() => setStep(1)} className="block w-full text-center text-sm text-slate hover:text-primary">
                  ← Voltar
                </button>

                <p className="text-center text-xs text-slate">
                  <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-primary" />
                  Ao continuar, você aceita os termos e a política de privacidade da Revitta.
                </p>
              </form>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

function StepDot({ n, active, done, label }: { n: number; active: boolean; done: boolean; label: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold transition ${
        done ? "bg-primary text-white" : active ? "bg-primary/15 text-primary ring-2 ring-primary/30" : "bg-muted text-slate"
      }`}>
        {done ? "✓" : `0${n}`}
      </span>
      <span className={active || done ? "text-deep" : "text-slate"}>{label}</span>
    </div>
  );
}

function Field({ label, id, type = "text", placeholder }: { label: string; id: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <Label htmlFor={id} className="text-deep">{label}</Label>
      <Input id={id} type={type} placeholder={placeholder} required className="mt-1.5 h-12 rounded-xl border-border bg-surface" />
    </div>
  );
}
