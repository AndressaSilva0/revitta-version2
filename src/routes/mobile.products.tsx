import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PriorityBadge } from "@/components/brand/PriorityBadge";
import { Search, ChevronRight, Hash } from "lucide-react";

export const Route = createFileRoute("/mobile/products")({
  component: MobileProducts,
});

const items = [
  { name: "Paracetamol 500mg", days: 65,  qty: 450, lot: "L2024-4521" },
  { name: "Simeticona 75mg",    days: 72,  qty: 95,  lot: "L2024-9001" },
  { name: "Loratadina 10mg",    days: 85,  qty: 280, lot: "L2024-3892" },
  { name: "Ibuprofeno 400mg",  days: 98,  qty: 520, lot: "L2024-5134" },
  { name: "Dipirona 500mg",     days: 110, qty: 340, lot: "L2024-4789" },
  { name: "Vitamina C 1g",      days: 140, qty: 180, lot: "L2024-7711" },
];

const filters = ["Todos", "Crítico", "Atenção", "Seguro"];

function MobileProducts() {
  const [f, setF] = useState("Todos");
  const [query, setQuery] = useState("");

  const data = items.filter((i) => {
    const matchesFilter =
      f === "Todos" ||
      (f === "Crítico" && i.days <= 90) ||
      (f === "Atenção" && i.days > 90 && i.days <= 120) ||
      (f === "Seguro" && i.days > 120);
    const matchesSearch =
      i.name.toLowerCase().includes(query.toLowerCase()) ||
      i.lot.toLowerCase().includes(query.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="space-y-4 pb-6">
      <header className="space-y-4 bg-gradient-to-b from-deep via-deep to-[#093230] px-5 pb-6 pt-12 text-white rounded-b-[2.5rem] shadow-lg shadow-deep/10">
        <h1 className="text-2xl font-extrabold tracking-tight">Meus produtos</h1>
        <div className="relative">
          <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate/80" />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome ou lote..."
            className="h-11 border-0 bg-white/10 hover:bg-white/15 focus:bg-white text-white focus:text-deep pl-10 pr-4 rounded-full transition-all placeholder:text-white/50 focus:placeholder:text-slate/60 shadow-inner"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {filters.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                f === x
                  ? "bg-mint text-deep shadow-md shadow-mint/10 scale-105"
                  : "bg-white/10 text-white hover:bg-white/15"
              }`}
            >
              {x}
            </button>
          ))}
        </div>
      </header>

      <div className="space-y-3 px-5">
        {data.length > 0 ? (
          data.map((i) => {
            const riskPercentage = Math.min(100, Math.max(10, (i.days / 90) * 100));
            const progressColor =
              i.days <= 15 ? "bg-risk-danger" : i.days <= 30 ? "bg-risk-warn" : "bg-risk-safe";
            return (
              <div
                key={i.lot}
                className="group flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:border-primary/20 hover:shadow-md"
              >
                <div className="flex w-full items-start justify-between">
                  <div>
                    <p className="font-bold text-deep group-hover:text-primary transition-colors duration-200">
                      {i.name}
                    </p>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="inline-flex items-center gap-0.5 rounded bg-surface px-1.5 py-0.5 text-[10px] font-semibold text-slate font-mono uppercase tracking-wider">
                        <Hash className="h-2.5 w-2.5" /> {i.lot}
                      </span>
                      <span className="text-xs text-slate font-medium">{i.qty} unidades</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <PriorityBadge days={i.days} />
                    <ChevronRight className="h-4 w-4 text-slate/50 group-hover:translate-x-0.5 transition-transform duration-200" />
                  </div>
                </div>

                {/* Progress bar visual */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-[9px] text-slate font-semibold">
                    <span>Validade restante</span>
                    <span>{i.days} dias</span>
                  </div>
                  <div className="h-1.5 w-full rounded-full bg-surface overflow-hidden">
                    <div
                      className={`h-full rounded-full ${progressColor}`}
                      style={{ width: `${riskPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-12 text-center">
            <p className="text-sm font-semibold text-slate">Nenhum produto encontrado</p>
            <p className="text-xs text-slate/60 mt-1">
              Experimente mudar o termo de busca ou o filtro
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
