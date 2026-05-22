import { createFileRoute } from "@tanstack/react-router";
import { PriorityBadge } from "@/components/brand/PriorityBadge";
import { MapPin, Boxes } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/mobile/marketplace")({
  component: MobileMarketplace,
});

const items = [
  { name: "Paracetamol 500mg", days: 12, dist: "2,3 km", loc: "Farmácia Central", price: "R$ 6,90", qty: 450 },
  { name: "Omeprazol 20mg", days: 7, dist: "0,9 km", loc: "Farmácia 24h", price: "R$ 4,80", qty: 95 },
  { name: "Amoxicilina 875mg", days: 35, dist: "5,1 km", loc: "Drogaria Saúde", price: "R$ 18,00", qty: 280 },
  { name: "Ibuprofeno 600mg", days: 18, dist: "1,8 km", loc: "Farmácia Popular", price: "R$ 9,50", qty: 520 },
];

function MobileMarketplace() {
  return (
    <div>
      <header className="rounded-b-3xl bg-deep px-5 pb-6 pt-12 text-white">
        <h1 className="text-2xl font-bold">Rede Revitta</h1>
        <p className="text-sm text-white/70">Produtos disponíveis próximos a você</p>
      </header>

      <div className="space-y-3 p-5">
        {items.map(p => (
          <article key={p.name} className="rounded-2xl border border-border bg-card p-4">
            <div className="flex items-start justify-between">
              <h3 className="font-bold text-deep">{p.name}</h3>
              <PriorityBadge days={p.days} />
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-2xl font-bold text-primary">{p.price}</span>
              <span className="text-xs text-slate">/ unidade</span>
            </div>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate">
              <span className="inline-flex items-center gap-1"><Boxes className="h-3 w-3" /> {p.qty} un</span>
              <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {p.loc} · {p.dist}</span>
            </div>
            <Button onClick={() => toast.success(`Reservado: ${p.name}`)} className="mt-3 h-10 w-full rounded-full bg-deep text-white">
              Reservar
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
