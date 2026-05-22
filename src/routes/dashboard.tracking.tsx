import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Package, Truck, MapPin, ShieldCheck, FileText, User } from "lucide-react";

export const Route = createFileRoute("/dashboard/tracking")({
  component: TrackingPage,
});

const shipments = [
  { id: "REV-2024-0892", product: "Paracetamol 500mg", lot: "L2024-4521", from: "Farmácia Central — SP", to: "Hospital São Lucas — SP", status: "Em trânsito", responsible: "Logística MedExpress", step: 2 },
  { id: "REV-2024-0891", product: "Amoxicilina 875mg", lot: "L2024-3892", from: "Drogaria Saúde — RJ", to: "Clínica Vida — RJ", status: "Entregue", responsible: "Carlos Mendes", step: 3 },
];

const timeline = [
  { label: "Reserva confirmada", icon: CheckCircle2, time: "10:24 · 22 mai" },
  { label: "Retirada na origem", icon: Package, time: "11:45 · 22 mai" },
  { label: "Em trânsito",        icon: Truck, time: "13:02 · 22 mai" },
  { label: "Entrega no destino", icon: ShieldCheck, time: "Estimado: 15:30" },
];

function TrackingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-deep">Rastreamento logístico farmacêutico</h1>
        <p className="text-sm text-slate">
          Cadeia de custódia B2B2C — do parceiro de origem até o estabelecimento que atende o
          consumidor final.
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-5">
        <aside className="space-y-3 xl:col-span-2">
          {shipments.map((s, i) => (
            <button key={s.id} className={`block w-full rounded-2xl border p-4 text-left transition ${i === 0 ? "border-primary bg-primary/5" : "border-border bg-card hover:border-primary/40"}`}>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-primary">{s.id}</span>
                <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold ${s.status === "Entregue" ? "bg-risk-safe/15 text-risk-safe" : "bg-primary/15 text-primary"}`}>{s.status}</span>
              </div>
              <p className="mt-2 font-semibold text-deep">{s.product}</p>
              <p className="text-xs text-slate">Lote {s.lot}</p>
              <p className="mt-3 text-xs text-slate"><MapPin className="mr-1 inline h-3 w-3" />{s.from} → {s.to}</p>
            </button>
          ))}
        </aside>

        <section className="rounded-2xl border border-border bg-card p-6 xl:col-span-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">REV-2024-0892</p>
              <h2 className="mt-1 text-xl font-bold text-deep">Paracetamol 500mg • 450 unidades</h2>
            </div>
            <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">Em trânsito</span>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Info icon={MapPin} label="Origem" value="Farmácia Central — São Paulo" />
            <Info icon={MapPin} label="Destino" value="Hospital São Lucas — São Paulo" />
            <Info icon={FileText} label="Lote" value="L2024-4521" />
            <Info icon={User} label="Responsável" value="Logística MedExpress" />
          </div>

          {/* Timeline */}
          <div className="mt-8">
            <h3 className="text-sm font-semibold text-deep">Linha do tempo</h3>
            <ol className="mt-4 space-y-4">
              {timeline.map((t, idx) => {
                const done = idx <= 2;
                const current = idx === 2;
                return (
                  <li key={t.label} className="relative flex gap-4 pb-4">
                    {idx < timeline.length - 1 && <span className={`absolute left-5 top-10 h-full w-px ${done ? "bg-primary" : "bg-border"}`} />}
                    <span className={`relative inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${done ? "bg-primary text-white" : "bg-surface text-slate"} ${current ? "ring-4 ring-primary/20" : ""}`}>
                      <t.icon className="h-4 w-4" />
                    </span>
                    <div className="pt-1.5">
                      <p className={`text-sm font-semibold ${done ? "text-deep" : "text-slate"}`}>{t.label}</p>
                      <p className="text-xs text-slate">{t.time}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-6 rounded-xl border border-border bg-surface p-4 text-xs text-slate">
            <p className="font-semibold text-deep">Registro de auditoria</p>
            <p className="mt-1">Hash da cadeia: <span className="font-mono text-primary">0x4f...8a2c</span> · ANVISA-OK · LGPD-OK</p>
          </div>
        </section>
      </div>
    </div>
  );
}
function Info({ icon: Icon, label, value }: any) {
  return (
    <div className="rounded-xl border border-border bg-surface p-4">
      <p className="inline-flex items-center gap-1.5 text-xs font-medium text-slate"><Icon className="h-3.5 w-3.5" /> {label}</p>
      <p className="mt-1 font-semibold text-deep">{value}</p>
    </div>
  );
}
