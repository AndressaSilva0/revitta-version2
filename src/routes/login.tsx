import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { ShieldCheck } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Entrar — Revitta" }] }),
  component: LoginPage,
});

function LoginPage() {
  const nav = useNavigate();
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Visual side */}
      <aside className="relative hidden overflow-hidden bg-deep p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-mint/30 blur-3xl" />
        <Logo variant="light" />
        <div className="relative">
          <h2 className="text-4xl font-bold leading-tight">
            Conectamos saúde.<br /><span className="text-mint">Impulsionamos escolhas.</span>
          </h2>
          <p className="mt-4 max-w-md text-white/70">
            O marketplace que conecta sua rede aos melhores medicamentos com
            segurança, confiança e rastreabilidade.
          </p>
        </div>
        <p className="relative text-xs text-white/50">© 2026 Revitta</p>
      </aside>

      {/* Form side */}
      <main className="flex flex-col items-center justify-center bg-surface p-6">
        <div className="w-full max-w-sm">
          <div className="lg:hidden"><Logo /></div>
          <h1 className="mt-8 text-3xl font-bold text-deep">Entrar na Revitta</h1>
          <p className="mt-2 text-sm text-slate">Acesse o centro de controle da sua rede.</p>

          <form
            className="mt-8 space-y-4"
            onSubmit={(e) => { e.preventDefault(); toast.success("Bem-vindo de volta!"); nav({ to: "/dashboard" }); }}
          >
            <div>
              <Label htmlFor="email">E-mail corporativo</Label>
              <Input id="email" type="email" placeholder="voce@farmacia.com.br" required className="mt-1.5 h-11 bg-white" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
                <a href="#" className="text-xs font-medium text-primary hover:underline">Esqueceu?</a>
              </div>
              <Input id="password" type="password" required className="mt-1.5 h-11 bg-white" />
            </div>
            <label className="flex items-center gap-2 text-sm text-slate">
              <Checkbox /> Lembrar de mim
            </label>
            <Button type="submit" className="h-11 w-full rounded-full bg-deep text-white hover:bg-deep/90">
              Entrar
            </Button>
          </form>

          <div className="my-6 flex items-center gap-3 text-xs text-slate">
            <span className="h-px flex-1 bg-border" />OU<span className="h-px flex-1 bg-border" />
          </div>
          <Button variant="outline" className="h-11 w-full rounded-full border-border bg-white">
            Continuar com Google
          </Button>

          <p className="mt-8 text-center text-sm text-slate">
            Novo na Revitta?{" "}
            <Link to="/signup" className="font-semibold text-primary hover:underline">Crie sua conta</Link>
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate">
            <ShieldCheck className="h-3.5 w-3.5 text-primary" /> Conexão segura • LGPD
          </div>
        </div>
      </main>
    </div>
  );
}
