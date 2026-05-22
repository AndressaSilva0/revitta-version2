import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Package, Truck, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/mobile/tracking")({
  component: MobileTracking,
});

const shipments = [
  { id: "REV-0892", product: "Paracetamol 500mg", status: "Em trânsito", step: 2 },
  { id: "REV-0891", product: "Amoxicilina 875mg", status: "Entregue", step: 3 },
  { id: "REV-0890", product: "Ibuprofeno 600mg", status: "Em retirada", step: 1 },
];

const steps = [
  { label: "Reserva", icon: CheckCircle2 },
  { label: "Retirada", icon: Package },
  { label: "Trânsito", icon: Truck },
  { label: "Entrega", icon: ShieldCheck },
];

function MobileTracking() {
  return (
    <div>
      <header className="rounded-b-3xl bg-deep px-5 pb-6 pt-12 text-white">
        <h1 className="text-2xl font-bold">Rastreamento</h1>
        <p className="text-sm text-white/70">Suas redistribuições ativas</p>
      </header>

      <div className="space-y-3 p-5">
        {shipments.map(s => (
          <article key={s.id} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold text-primary">{s.id}</p>
              <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${s.status === "Entregue" ? "bg-risk-safe/15 text-risk-safe" : "bg-primary/15 text-primary"}`}>{s.status}</span>
            </div>
            <p className="mt-2 font-bold text-deep">{s.product}</p>

            <div className="mt-4 flex items-center justify-between">
              {steps.map((st, i) => {
                const done = i <= s.step;
                return (
                  <div key={st.label} className="flex flex-1 flex-col items-center">
                    <span className={`flex h-8 w-8 items-center justify-center rounded-full ${done ? "bg-primary text-white" : "bg-surface text-slate"}`}>
                      <st.icon className="h-4 w-4" />
                    </span>
                    <span className={`mt-1 text-[10px] ${done ? "font-semibold text-deep" : "text-slate"}`}>{st.label}</span>
                    {i < steps.length - 1 && <span className={`mt-[-18px] h-px w-full ${done ? "bg-primary" : "bg-border"}`} style={{ marginLeft: "60%" }} />}
                  </div>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
