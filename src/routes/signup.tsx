import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Store,
  Hospital,
  Truck,
  FlaskConical,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import signupBg from "@/assets/signup-bg.png";

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

// Helper functions for masking
const formatCNPJ = (value: string) => {
  const digits = value.replace(/\D/g, "");
  return digits
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2")
    .substring(0, 18);
};

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "");
  if (digits.length <= 10) {
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{4})(\d)/, "$1-$2")
      .substring(0, 14);
  } else {
    return digits
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .substring(0, 15);
  }
};

function SignupPage() {
  const nav = useNavigate();
  const [step, setStep] = useState<1 | 2>(1);
  const [type, setType] = useState<string | null>(null);

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [org, setOrg] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };

  const handleCnpjChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(formatCNPJ(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      toast.error("Por favor, preencha seu nome completo.");
      return;
    }
    if (phone.length < 14) {
      toast.error("Por favor, insira um telefone válido.");
      return;
    }
    if (!email.includes("@")) {
      toast.error("Por favor, insira um e-mail corporativo válido.");
      return;
    }
    if (cnpj.length < 18) {
      toast.error("Por favor, insira um CNPJ completo.");
      return;
    }
    if (!org.trim()) {
      toast.error("Por favor, preencha o nome do estabelecimento.");
      return;
    }
    if (password.length < 8) {
      toast.error("A senha deve conter no mínimo 8 caracteres.");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success("Conta criada com sucesso! Bem-vindo à Revitta.");
      nav({ to: "/dashboard" });
    }, 1500);
  };

  return (
    <div className="grid min-h-screen bg-surface lg:grid-cols-[1fr_1.1fr]">
      {/* Brand side */}
      <aside className="relative hidden overflow-hidden bg-deep p-12 text-white lg:flex lg:flex-col lg:justify-between">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={signupBg}
            alt="Logística farmacêutica background"
            className="h-full w-full object-cover scale-105 filter blur-[1px] brightness-75 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/95 via-deep/85 to-primary/85 mix-blend-multiply" />
        </div>

        <div className="relative z-10">
          <Logo variant="light" imgClassName="h-28" />
        </div>

        <div className="relative z-10 max-w-md my-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-mint/30 bg-mint/10 px-3.5 py-1 text-xs font-semibold text-mint">
            <Sparkles className="h-3.5 w-3.5 text-mint" /> Grátis para começar
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.2] tracking-tight">
            Junte-se a <span className="text-mint">340+</span> estabelecimentos circulando valor,
            não desperdício.
          </h2>
          <ul className="mt-8 space-y-4">
            {perks.map((p) => (
              <li key={p} className="flex items-center gap-3.5 text-white/90 font-medium">
                <CheckCircle2 className="h-5.5 w-5.5 shrink-0 text-mint" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative z-10 flex items-center gap-4 text-xs text-white/60">
          <ShieldCheck className="h-4.5 w-4.5 text-mint" />
          <span>RDC ANVISA • LGPD compliant • SNGPC integrado</span>
        </div>
      </aside>

      {/* Form side */}
      <main className="flex flex-col bg-background">
        <header className="flex items-center justify-between px-6 py-6 lg:px-12">
          <div className="lg:hidden">
            <Logo imgClassName="h-24" />
          </div>
          <span className="hidden text-sm text-slate lg:block">
            Já tem conta?{" "}
            <Link to="/login" className="font-semibold text-primary hover:underline transition-all">
              Entrar
            </Link>
          </span>
          <Link to="/login" className="text-sm text-slate hover:text-primary lg:hidden">
            Já tenho conta
          </Link>
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
              <h1 className="text-3xl font-bold tracking-tight text-deep md:text-4xl">
                Qual o seu estabelecimento?
              </h1>
              <p className="mt-2 text-slate">
                Personalizamos sua experiência conforme seu perfil na rede.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {types.map((t) => {
                  const active = type === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setType(t.id)}
                      className={`group flex items-center gap-4 rounded-2xl border-2 p-5 text-left transition-all duration-300 hover:scale-[1.02] hover:-translate-y-0.5 active:scale-[0.98] ${
                        active
                          ? "border-primary bg-primary/5 shadow-lg shadow-primary/5"
                          : "border-border bg-card hover:border-primary/45 hover:shadow-md"
                      }`}
                    >
                      <span
                        className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${active ? "bg-primary text-white" : "bg-mint/15 text-primary group-hover:scale-105"}`}
                      >
                        <t.icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="font-bold text-deep transition-colors group-hover:text-primary">
                          {t.label}
                        </p>
                        <p className="text-xs text-slate mt-0.5">{t.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
              <Button
                disabled={!type}
                onClick={() => setStep(2)}
                className="mt-8 h-12 w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all hover:scale-[1.01] disabled:opacity-40 font-bold"
              >
                Continuar <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </>
          )}

          {step === 2 && (
            <>
              <h1 className="text-3xl font-bold tracking-tight text-deep md:text-4xl">Quase lá!</h1>
              <p className="mt-2 text-slate">
                Crie sua conta para ativar a rede de redistribuição.
              </p>

              <form className="mt-8 space-y-4.5" onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="Nome completo"
                    id="name"
                    placeholder="Maria Oliveira"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={isLoading}
                  />
                  <Field
                    label="Telefone"
                    id="phone"
                    type="tel"
                    placeholder="(11) 99999-0000"
                    value={phone}
                    onChange={handlePhoneChange}
                    disabled={isLoading}
                  />
                </div>
                <Field
                  label="E-mail corporativo"
                  id="email"
                  type="email"
                  placeholder="voce@farmacia.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                />
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field
                    label="CNPJ"
                    id="cnpj"
                    placeholder="00.000.000/0000-00"
                    value={cnpj}
                    onChange={handleCnpjChange}
                    disabled={isLoading}
                  />
                  <Field
                    label="Estabelecimento"
                    id="org"
                    placeholder="Farmácia Central"
                    value={org}
                    onChange={(e) => setOrg(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <Field
                  label="Senha"
                  id="password"
                  type="password"
                  placeholder="Mínimo 8 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isLoading}
                />

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="h-12 w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/95 transition-all hover:scale-[1.01] active:scale-[0.99] font-bold flex items-center justify-center"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Criando conta...
                    </>
                  ) : (
                    "Criar conta gratuita"
                  )}
                </Button>

                <Button
                  type="button"
                  disabled={isLoading}
                  className="h-12 w-full rounded-full border-border bg-white hover:bg-surface font-semibold text-deep transition-all hover:scale-[1.01] flex items-center justify-center border"
                >
                  <svg className="mr-2.5 h-4.5 w-4.5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Cadastrar com Google
                </Button>

                <button
                  type="button"
                  onClick={() => setStep(1)}
                  disabled={isLoading}
                  className="block w-full text-center text-sm font-semibold text-slate hover:text-primary transition-colors py-1"
                >
                  ← Voltar
                </button>

                <p className="text-center text-xs text-slate mt-4 leading-relaxed">
                  <ShieldCheck className="mr-1.5 inline h-3.5 w-3.5 text-primary" />
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

function StepDot({
  n,
  active,
  done,
  label,
}: {
  n: number;
  active: boolean;
  done: boolean;
  label: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-bold transition-all duration-300 ${
          done
            ? "bg-primary text-white"
            : active
              ? "bg-primary/15 text-primary ring-2 ring-primary/30"
              : "bg-muted text-slate"
        }`}
      >
        {done ? "✓" : `0${n}`}
      </span>
      <span
        className={`transition-colors duration-300 ${active || done ? "text-deep font-bold" : "text-slate"}`}
      >
        {label}
      </span>
    </div>
  );
}

interface FieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

function Field({ label, id, type = "text", placeholder, value, onChange, disabled }: FieldProps) {
  return (
    <div>
      <Label htmlFor={id} className="text-deep font-semibold">
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        required
        className="mt-1.5 h-12 rounded-xl border-border bg-surface px-4 transition-all focus-visible:ring-primary focus-visible:border-primary"
      />
    </div>
  );
}
