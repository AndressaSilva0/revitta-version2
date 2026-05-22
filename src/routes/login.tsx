import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  ShieldCheck,
  Pill,
  Leaf,
  Activity,
  Heart,
  Sparkles,
  Eye,
  EyeOff,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";
import loginBg from "@/assets/login-bg.png";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Entrar — Revitta" }] }),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.includes("@")) {
      toast.error("Por favor, insira um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      toast.error("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    setIsLoading(true);

    // Simulate loading for realistic feedback
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Bem-vindo de volta à Revitta!");
      nav({ to: "/dashboard" });
    }, 1500);
  };

  return (
    <div className="grid min-h-screen bg-surface lg:grid-cols-2">
      {/* Illustration side */}
      <aside className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between lg:p-12">
        {/* Background Image with overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={loginBg}
            alt="Farmácia moderna background"
            className="h-full w-full object-cover scale-105 filter blur-[1px] brightness-90 animate-fade-in"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-deep/90 via-deep/75 to-primary/80 mix-blend-multiply" />
        </div>

        <div className="relative z-10">
          <Logo variant="light" imgClassName="h-28" />
        </div>

        {/* Floating illustration card - Premium Glassmorphism */}
        <div className="relative z-10 mx-auto w-full max-w-md my-auto">
          <div className="relative rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md transition-all duration-500 hover:scale-[1.01] hover:border-white/20">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3.5 py-1 text-xs font-semibold text-mint">
                <Activity className="h-3.5 w-3.5 text-mint" /> Rede ativa
              </span>
              <Sparkles className="h-4 w-4 text-mint animate-pulse" />
            </div>
            <div className="mt-6 flex items-end gap-2 text-white">
              <p className="text-5xl font-black tracking-tight text-white">340+</p>
              <p className="pb-1.5 text-sm text-slate-300 font-medium">farmácias conectadas</p>
            </div>
            <div className="mt-6 space-y-3.5">
              {[
                { icon: Pill, t: "Paracetamol 500mg", d: "Redistribuído • 8d" },
                { icon: Heart, t: "Amoxicilina 875mg", d: "Reservado • 12d" },
                { icon: Leaf, t: "2,1t CO₂ evitado", d: "este mês" },
              ].map((r) => (
                <div
                  key={r.t}
                  className="flex items-center gap-4.5 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors px-4 py-3"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-mint/20 text-mint">
                    <r.icon className="h-4.5 w-4.5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-white">{r.t}</p>
                    <p className="text-xs text-slate-300">{r.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-8 text-center text-sm font-medium text-white/90 italic">
            "Cortamos <span className="font-bold text-mint">82%</span> das perdas em 4 meses."
          </p>
        </div>

        <p className="relative z-10 text-xs text-white/60">
          © 2026 Revitta — Uma nova vida para medicamentos.
        </p>
      </aside>

      {/* Form side */}
      <main className="relative flex flex-col items-center justify-center bg-background p-6">
        <div className="w-full max-w-sm">
          <div className="mb-10 lg:hidden">
            <Logo imgClassName="h-24" />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-deep">Bem-vindo de volta</h1>
          <p className="mt-2 text-sm text-slate">Acesse o centro de controle da sua rede.</p>

          <form className="mt-8 space-y-4.5" onSubmit={handleSubmit}>
            <div>
              <Label htmlFor="email" className="text-deep font-semibold">
                E-mail corporativo
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@farmacia.com.br"
                disabled={isLoading}
                required
                className="mt-1.5 h-12 rounded-xl border-border bg-surface px-4 transition-all focus-visible:ring-primary focus-visible:border-primary"
              />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-deep font-semibold">
                  Senha
                </Label>
                <a
                  href="#"
                  className="text-xs font-semibold text-primary hover:underline transition-all"
                >
                  Esqueceu?
                </a>
              </div>
              <div className="relative mt-1.5">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  disabled={isLoading}
                  required
                  className="h-12 rounded-xl border-border bg-surface pl-4 pr-11 transition-all focus-visible:ring-primary focus-visible:border-primary"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isLoading}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate hover:text-deep transition-colors p-1"
                  aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>
            <label className="flex items-center gap-2.5 text-sm text-slate select-none cursor-pointer">
              <Checkbox id="remember" disabled={isLoading} />
              <span>Lembrar de mim</span>
            </label>
            <Button
              type="submit"
              disabled={isLoading}
              className="h-12 w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/95 hover:shadow-primary/30 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center font-bold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Conectando...
                </>
              ) : (
                "Entrar"
              )}
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs font-semibold text-slate/60">
            <span className="h-px flex-1 bg-border" />
            OU
            <span className="h-px flex-1 bg-border" />
          </div>
          <Button
            variant="outline"
            disabled={isLoading}
            className="h-12 w-full rounded-full border-border bg-white hover:bg-surface font-semibold text-deep transition-all hover:scale-[1.01] flex items-center justify-center"
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
            Continuar com Google
          </Button>

          <p className="mt-8 text-center text-sm text-slate">
            Novo na Revitta?{" "}
            <Link
              to="/signup"
              className="font-semibold text-primary hover:underline transition-all"
            >
              Crie sua conta grátis
            </Link>
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate/80">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Conexão segura • LGPD compliant
          </div>
        </div>
      </main>
    </div>
  );
}
