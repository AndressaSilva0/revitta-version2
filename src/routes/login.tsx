import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck, Pill, Leaf, Activity, Heart, Sparkles } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Entrar — Revitta" }] }),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  return (
    <div className="grid min-h-screen bg-surface lg:grid-cols-2">
      {/* Illustration side */}
      <aside className="relative hidden overflow-hidden lg:flex lg:flex-col lg:justify-between lg:p-12">
        {/* Soft organic blobs */}
        <svg viewBox="0 0 600 600" className="pointer-events-none absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="g1" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--mint))" stopOpacity="0.45" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.25" />
            </linearGradient>
          </defs>
          <path fill="url(#g1)" d="M421,121 C492,162 540,257 511,338 C482,419 376,486 285,479 C194,472 117,391 100,303 C83,215 126,120 209,87 C292,54 350,80 421,121 Z" />
          <path fill="hsl(var(--mint))" fillOpacity="0.18" d="M120,470 C170,430 250,440 290,490 C330,540 290,600 220,590 C150,580 70,510 120,470 Z" />
          <circle cx="500" cy="500" r="6" fill="hsl(var(--primary))" />
          <circle cx="80" cy="120" r="4" fill="hsl(var(--primary))" />
          <circle cx="540" cy="80" r="5" fill="hsl(var(--mint))" />
          <path d="M60,260 Q150,200 240,260" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="4 6" fill="none" opacity="0.4" />
        </svg>

        <div className="relative z-10">
          <Logo />
        </div>

        {/* Floating illustration card */}
        <div className="relative z-10 mx-auto w-full max-w-md">
          <div className="relative rounded-3xl border border-border/60 bg-white p-6 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full bg-mint/20 px-3 py-1 text-xs font-semibold text-primary">
                <Activity className="h-3.5 w-3.5" /> Rede ativa
              </span>
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div className="mt-5 flex items-end gap-2">
              <p className="text-5xl font-bold text-deep">340+</p>
              <p className="pb-1.5 text-sm text-slate">farmácias conectadas</p>
            </div>
            <div className="mt-5 space-y-2.5">
              {[
                { icon: Pill, t: "Paracetamol 500mg", d: "Redistribuído • 8d" },
                { icon: Heart, t: "Amoxicilina 875mg", d: "Reservado • 12d" },
                { icon: Leaf, t: "2,1t CO₂ evitado", d: "este mês" },
              ].map((r) => (
                <div key={r.t} className="flex items-center gap-3 rounded-xl border border-border/50 bg-surface px-3 py-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-mint/20 text-primary">
                    <r.icon className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-deep">{r.t}</p>
                    <p className="text-xs text-slate">{r.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-slate">
            "Cortamos <span className="font-semibold text-deep">82%</span> das perdas em 4 meses."
          </p>
        </div>

        <p className="relative z-10 text-xs text-slate/70">© 2026 Revitta — Uma nova vida para medicamentos.</p>
      </aside>

      {/* Form side */}
      <main className="relative flex flex-col items-center justify-center bg-background p-6">
        <div className="w-full max-w-sm">
          <div className="mb-10 lg:hidden"><Logo /></div>

          <h1 className="text-3xl font-bold tracking-tight text-deep">Bem-vindo de volta</h1>
          <p className="mt-2 text-sm text-slate">Acesse o centro de controle da sua rede.</p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => { e.preventDefault(); toast.success("Bem-vindo de volta!"); nav({ to: "/dashboard" }); }}
          >
            <div>
              <Label htmlFor="email" className="text-deep">E-mail corporativo</Label>
              <Input id="email" type="email" placeholder="voce@farmacia.com.br" required className="mt-1.5 h-12 rounded-xl border-border bg-surface" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-deep">Senha</Label>
                <a href="#" className="text-xs font-medium text-primary hover:underline">Esqueceu?</a>
              </div>
              <Input id="password" type="password" placeholder="••••••••" required className="mt-1.5 h-12 rounded-xl border-border bg-surface" />
            </div>
            <label className="flex items-center gap-2 text-sm text-slate">
              <Checkbox /> Lembrar de mim
            </label>
            <Button type="submit" className="h-12 w-full rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90">
              Entrar na Revitta
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-slate">
            <span className="h-px flex-1 bg-border" />OU<span className="h-px flex-1 bg-border" />
          </div>
          <Button variant="outline" className="h-12 w-full rounded-full border-border bg-white">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
            Continuar com Google
          </Button>

          <p className="mt-8 text-center text-sm text-slate">
            Novo na Revitta?{" "}
            <Link to="/signup" className="font-semibold text-primary hover:underline">Crie sua conta grátis</Link>
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Conexão segura • LGPD compliant
          </div>
        </div>
      </main>
    </div>
  );
}
