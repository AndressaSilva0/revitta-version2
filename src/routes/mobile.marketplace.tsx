import { createFileRoute } from "@tanstack/react-router";
import { PriorityBadge } from "@/components/brand/PriorityBadge";
import { MapPin, Boxes, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/mobile/marketplace")({
  component: MobileMarketplace,
});

const items = [
  {
    name: "Paracetamol 500mg",
    days: 12,
    dist: "2,3 km",
    loc: "Farmácia Central",
    price: "R$ 6,90",
    qty: 450,
  },
  {
    name: "Omeprazol 20mg",
    days: 7,
    dist: "0,9 km",
    loc: "Farmácia 24h",
    price: "R$ 4,80",
    qty: 95,
  },
  {
    name: "Amoxicilina 875mg",
    days: 35,
    dist: "5,1 km",
    loc: "Drogaria Saúde",
    price: "R$ 18,00",
    qty: 280,
  },
  {
    name: "Ibuprofeno 600mg",
    days: 18,
    dist: "1,8 km",
    loc: "Farmácia Popular",
    price: "R$ 9,50",
    qty: 520,
  },
];

function MobileMarketplace() {
  const [reserved, setReserved] = useState<string[]>([]);

  const handleReserve = (name: string) => {
    if (reserved.includes(name)) {
      setReserved(reserved.filter((n) => n !== name));
      toast.info(`Reserva cancelada: ${name}`);
    } else {
      setReserved([...reserved, name]);
      toast.success(`Reservado com sucesso: ${name}`);
    }
  };

  return (
    <div className="pb-6">
      <header className="rounded-b-[2.5rem] bg-gradient-to-b from-deep via-deep to-[#093230] px-5 pb-6 pt-12 text-white shadow-lg shadow-deep/10">
        <h1 className="text-2xl font-extrabold tracking-tight">Rede B2B2C Revitta</h1>
        <p className="text-xs text-white/70 mt-1">
          Lotes entre parceiros — prontos para redistribuição até a prateleira do consumidor
        </p>
      </header>

      <div className="space-y-4 p-5">
        {items.map((p) => {
          const isReserved = reserved.includes(p.name);
          return (
            <article
              key={p.name}
              className={`rounded-2xl border bg-card p-4.5 shadow-sm transition-all duration-300 ${
                isReserved
                  ? "border-mint/50 ring-2 ring-mint/10 bg-mint/5"
                  : "border-border/60 hover:border-primary/20 hover:shadow-md"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-bold text-deep text-[15px]">{p.name}</h3>
                  <div className="mt-1 flex items-baseline gap-1">
                    <span className="text-2xl font-extrabold text-primary tracking-tight">
                      {p.price}
                    </span>
                    <span className="text-[10px] font-semibold text-slate">/ unidade</span>
                  </div>
                </div>
                <PriorityBadge days={p.days} />
              </div>

              {/* Tags / Meta info */}
              <div className="mt-3.5 flex flex-wrap gap-2 text-[11px] font-medium text-slate">
                <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-deep/80">
                  <Boxes className="h-3.5 w-3.5 text-primary" /> {p.qty} unidades
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-deep/80">
                  <MapPin className="h-3.5 w-3.5 text-primary" /> {p.dist}
                </span>
              </div>

              <div className="mt-2 text-[10px] font-semibold text-slate/60 px-0.5">
                Ofertado por: <span className="text-slate">{p.loc}</span>
              </div>

              <Button
                onClick={() => handleReserve(p.name)}
                className={`mt-4 h-10 w-full rounded-full transition-all font-bold flex items-center justify-center gap-1.5 shadow-sm ${
                  isReserved
                    ? "bg-mint text-deep hover:bg-mint/90 hover:scale-[1.01]"
                    : "bg-deep hover:bg-deep/95 text-white hover:scale-[1.01] active:scale-[0.99]"
                }`}
              >
                {isReserved ? (
                  <>
                    <Check className="h-4 w-4 stroke-[3]" />
                    Reservado
                  </>
                ) : (
                  "Reservar"
                )}
              </Button>
            </article>
          );
        })}
      </div>
    </div>
  );
}
