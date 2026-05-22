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

const statusColors: Record<string, string> = {
  "Em trânsito": "bg-primary/10 text-primary border-primary/20",
  "Entregue": "bg-risk-safe/10 text-risk-safe border-risk-safe/25",
  "Em retirada": "bg-risk-warn/15 text-risk-warn border-risk-warn/25",
};

function MobileTracking() {
  return (
    <div className="pb-6">
      <header className="rounded-b-[2.5rem] bg-gradient-to-b from-deep via-deep to-[#093230] px-5 pb-6 pt-12 text-white shadow-lg shadow-deep/10">
        <h1 className="text-2xl font-extrabold tracking-tight">Rastreamento</h1>
        <p className="text-xs text-white/70 mt-1">Suas redistribuições ativas em tempo real</p>
      </header>

      <div className="space-y-4 p-5">
        {shipments.map(s => (
          <article key={s.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md">
            <div className="flex items-center justify-between">
              <p className="text-xs font-bold text-primary font-mono tracking-wider">{s.id}</p>
              <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold ${statusColors[s.status] || "bg-slate/10 text-slate border-slate/20"}`}>
                {s.status}
              </span>
            </div>
            <p className="mt-2 text-[15px] font-extrabold text-deep">{s.product}</p>

            <div className="relative mt-6 flex items-center justify-between">
              {/* Connecting line behind steps */}
              <div className="absolute left-[10%] right-[10%] top-4 h-0.5 bg-border pointer-events-none">
                <div 
                  className="h-full bg-primary transition-all duration-500" 
                  style={{ width: `${(s.step / (steps.length - 1)) * 100}%` }} 
                />
              </div>

              {steps.map((st, i) => {
                const done = i <= s.step;
                const active = i === s.step;
                return (
                  <div key={st.label} className="relative z-10 flex flex-col items-center">
                    <span 
                      className={`flex h-8 w-8 items-center justify-center rounded-full transition-all duration-350 ${
                        done 
                          ? "bg-primary text-white shadow-md shadow-primary/20" 
                          : "bg-surface text-slate"
                      } ${active ? "ring-4 ring-primary/20 scale-105" : ""}`}
                    >
                      <st.icon className="h-4 w-4" />
                    </span>
                    <span 
                      className={`mt-2 text-[10px] font-bold transition-colors duration-200 ${
                        active 
                          ? "text-primary" 
                          : done 
                            ? "text-deep" 
                            : "text-slate/60"
                      }`}
                    >
                      {st.label}
                    </span>
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
