import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Store, Hospital, Truck, FlaskConical, ArrowRight, ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/signup")({
  head: () => ({ meta: [{ title: "Criar conta — Revitta" }] }),
  component: SignupPage,
});

const types = [
  { id: "farmacia", label: "Farmácia", icon: Store },
  { id: "clinica", label: "Clínica / Hospital", icon: Hospital },
  { id: "distribuidora", label: "Distribuidora", icon: Truck },
  { id: "laboratorio", label: "Laboratório", icon: FlaskConical },
];

function SignupPage() {
  const nav = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [type, setType] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-surface">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
        <Logo />
        <Link to="/login" className="text-sm text-slate hover:text-primary">Já tenho conta</Link>
      </header>

      <main className="mx-auto max-w-2xl px-6 pb-16">
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate">
          <span className={step >= 1 ? "text-primary" : ""}>01 · Tipo</span>
          <span className="h-px w-8 bg-border" />
          <span className={step >= 2 ? "text-primary" : ""}>02 · Dados</span>
        </div>

        {step === 1 && (
          <>
            <h1 className="text-3xl font-bold text-deep md:text-4xl">Qual o seu estabelecimento?</h1>
            <p className="mt-2 text-slate">Personalizamos sua experiência conforme seu perfil na rede.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {types.map(t => (
                <button
                  key={t.id}
                  onClick={() => setType(t.id)}
                  className={`group flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition ${type === t.id ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`}
                >
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${type === t.id ? "bg-primary text-white" : "bg-mint/15 text-primary"}`}>
                    <t.icon className="h-6 w-6" />
                  </span>
                  <span className="font-semibold text-deep">{t.label}</span>
                </button>
              ))}
            </div>
            <Button
              disabled={!type}
              onClick={() => setStep(2)}
              className="mt-8 h-11 w-full rounded-full bg-deep text-white hover:bg-deep/90"
            >
              Continuar <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-3xl font-bold text-deep md:text-4xl">Quase lá!</h1>
            <p className="mt-2 text-slate">Crie sua conta para ativar a rede de redistribuição.</p>

            <form
              className="mt-8 space-y-4"
              onSubmit={(e) => { e.preventDefault(); toast.success("Conta criada! Bem-vindo à Revitta."); nav({ to: "/dashboard" }); }}
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Nome completo" id="name" />
                <Field label="Telefone" id="phone" type="tel" />
              </div>
              <Field label="E-mail corporativo" id="email" type="email" />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="CNPJ" id="cnpj" />
                <Field label="Estabelecimento" id="org" />
              </div>
              <Field label="Senha" id="password" type="password" />

              <Button type="submit" className="h-11 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                Criar conta gratuita
              </Button>

              <Button type="button" variant="outline" className="h-11 w-full rounded-full bg-white">
                Cadastrar com Google
              </Button>

              <p className="text-center text-xs text-slate">
                <ShieldCheck className="mr-1 inline h-3.5 w-3.5 text-primary" />
                Ao continuar, você aceita os termos e a política de privacidade da Revitta.
              </p>
            </form>
          </>
        )}
      </main>
    </div>
  );
}

function Field({ label, id, type = "text" }: { label: string; id: string; type?: string }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} type={type} required className="mt-1.5 h-11 bg-white" />
    </div>
  );
}
