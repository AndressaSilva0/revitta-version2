import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PriorityBadge } from "@/components/brand/PriorityBadge";
import { MapPin, Search, SlidersHorizontal, Boxes } from "lucide-react";
import { toast } from "sonner";
import { useUserType } from "@/hooks/useUserType";

export const Route = createFileRoute("/dashboard/marketplace")({
  component: MarketplacePage,
});

const items = [
  { name: "Dorflex 36 Comprimidos", cat: "Analgésicos",    days: 75,  qty: 45, dist: "0,8 km", loc: "Drogaria São Paulo", price: "R$ 9,90", original: "R$ 24,90" },
  { name: "Loratadina Medley 10mg",    cat: "Anti-alérgicos", days: 92,  qty: 28, dist: "1,5 km", loc: "Drogaria Araújo",   price: "R$ 5,90", original: "R$ 18,50" },
  { name: "Ibuprofeno EMS 600mg",  cat: "Anti-inflam.",   days: 64,  qty: 52, dist: "1,8 km", loc: "Farmácia Popular", price: "R$ 11,90",  original: "R$ 29,90" },
  { name: "Paracetamol 500mg", cat: "Analgésicos",    days: 65,  qty: 450, dist: "2,3 km", loc: "Farmácia Central — SP", price: "R$ 6,90", original: "R$ 14,90" },
  { name: "Simeticona 75mg",    cat: "Gastro",         days: 72,  qty: 95,  dist: "0,9 km", loc: "Farmácia 24h — SP",      price: "R$ 4,80",  original: "R$ 16,50" },
  { name: "Vitamina C 1g",      cat: "Vitaminas",      days: 140, qty: 180, dist: "3,7 km", loc: "FarmaPlus — SP",         price: "R$ 12,40", original: "R$ 24,90" },
];

const filters = ["Todos", "Crítico", "Atenção", "Seguro"];

function MarketplacePage() {
  const [active, setActive] = useState("Todos");
  const { isConsumer } = useUserType();

  const data = items.filter(i =>
    active === "Todos" || (active === "Crítico" && i.days <= 90) || (active === "Atenção" && i.days > 90 && i.days <= 120) || (active === "Seguro" && i.days > 120)
  );

  const handleAction = (itemName: string) => {
    if (isConsumer) {
      toast.success(`Pedido criado para ${itemName}! Redirecionando para entrega...`);
    } else {
      toast.success(`Interesse registrado em ${itemName}`);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-deep">
          {isConsumer ? "Comprar Medicamentos Pré-vencidos" : "Rede B2B2C de redistribuição"}
        </h1>
        <p className="text-sm text-slate">
          {isConsumer
            ? "Encontre medicamentos com até 80% de desconto próximo de você. Economia circular para evitar desperdício de lotes pré-vencidos (validade de 60 a 180 dias)."
            : "Negocie lotes entre parceiros e escoe estoque que pode chegar ao consumidor final nas farmácias da sua região."}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card p-4">
        <div className="relative min-w-[240px] flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate" />
          <Input 
            placeholder={isConsumer ? "Buscar remédio pré-vencido, farmácia..." : "Buscar medicamento, lote, categoria..."} 
            className="h-10 bg-surface pl-9" 
          />
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {filters.map(f => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${active === f ? "border-primary bg-primary text-white" : "border-border bg-surface text-slate hover:border-primary/40"}`}
            >{f}</button>
          ))}
        </div>
        <Button variant="outline" className="ml-auto rounded-full bg-surface"><SlidersHorizontal className="mr-2 h-4 w-4" /> Filtros</Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {data.map(p => (
          <article key={p.name} className="group rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-primary">{p.cat}</p>
                <h3 className="mt-1 text-lg font-bold text-deep">{p.name}</h3>
              </div>
              <PriorityBadge days={p.days} size="lg" />
            </div>
            <div className="mt-4 flex items-baseline gap-2">
              <span className="text-3xl font-bold text-deep">{p.price}</span>
              <span className="text-sm text-slate line-through">{p.original}</span>
            </div>
            <div className="mt-4 space-y-1.5 text-xs text-slate">
              <p className="inline-flex items-center gap-1.5"><Boxes className="h-3.5 w-3.5" /> {p.qty} unidades disponíveis</p>
              <p className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> {p.loc} • {p.dist}</p>
            </div>
            <Button onClick={() => handleAction(p.name)} className="mt-5 h-10 w-full rounded-full bg-deep text-white group-hover:bg-primary font-bold">
              {isConsumer ? "Comprar agora" : "Reservar lote"}
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}

