import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PriorityBadge } from "@/components/brand/PriorityBadge";
import { Search, ChevronRight } from "lucide-react";

export const Route = createFileRoute("/mobile/products")({
  component: MobileProducts,
});

const items = [
  { name: "Omeprazol 20mg", days: 7, qty: 95, lot: "L2024-9001" },
  { name: "Paracetamol 500mg", days: 12, qty: 450, lot: "L2024-4521" },
  { name: "Ibuprofeno 600mg", days: 18, qty: 520, lot: "L2024-5134" },
  { name: "Amoxicilina 875mg", days: 28, qty: 280, lot: "L2024-3892" },
  { name: "Dipirona 1g", days: 62, qty: 340, lot: "L2024-4789" },
  { name: "Vitamina C 1g", days: 90, qty: 180, lot: "L2024-7711" },
];

const filters = ["Todos", "Crítico", "Atenção", "Seguro"];

function MobileProducts() {
  const [f, setF] = useState("Todos");
  const data = items.filter(i => f === "Todos" || (f === "Crítico" && i.days <= 15) || (f === "Atenção" && i.days > 15 && i.days <= 30) || (f === "Seguro" && i.days > 30));
  return (
    <div className="space-y-4">
      <header className="space-y-3 bg-deep px-5 pb-5 pt-12 text-white rounded-b-3xl">
        <h1 className="text-2xl font-bold">Meus produtos</h1>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
          <Input placeholder="Buscar..." className="h-11 border-0 bg-white pl-9 text-deep" />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map(x => (
            <button key={x} onClick={() => setF(x)} className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-semibold ${f === x ? "bg-mint text-deep" : "bg-white/10 text-white"}`}>{x}</button>
          ))}
        </div>
      </header>

      <div className="space-y-2 px-5">
        {data.map(i => (
          <button key={i.lot} className="flex w-full items-center justify-between rounded-2xl border border-border bg-card p-4 text-left">
            <div>
              <p className="font-semibold text-deep">{i.name}</p>
              <p className="text-xs text-slate">{i.lot} · {i.qty} un</p>
            </div>
            <div className="flex items-center gap-2">
              <PriorityBadge days={i.days} />
              <ChevronRight className="h-4 w-4 text-slate" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
