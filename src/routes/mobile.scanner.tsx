import { createFileRoute } from "@tanstack/react-router";
import { ScanLine, Type, X } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/mobile/scanner")({
  component: ScannerPage,
});

function ScannerPage() {
  return (
    <div className="relative min-h-full bg-deep">
      <header className="flex items-center justify-between px-5 pt-12 text-white">
        <Link to="/mobile" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10"><X className="h-5 w-5" /></Link>
        <p className="font-semibold">Escanear código</p>
        <span className="w-10" />
      </header>

      <div className="mx-5 mt-8">
        <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-primary/40 bg-black/40">
          <div className="absolute inset-0 flex items-center justify-center">
            <ScanLine className="h-24 w-24 text-mint/60" />
          </div>
          {/* corner brackets */}
          {["top-4 left-4 border-l-2 border-t-2", "top-4 right-4 border-r-2 border-t-2", "bottom-4 left-4 border-l-2 border-b-2", "bottom-4 right-4 border-r-2 border-b-2"].map((c, i) => (
            <span key={i} className={`absolute h-10 w-10 border-mint ${c} rounded-md`} />
          ))}
          {/* scan line */}
          <div className="absolute inset-x-8 top-1/2 h-px animate-pulse bg-mint shadow-[0_0_12px_var(--mint)]" />
        </div>

        <p className="mt-6 text-center text-sm text-white/70">Posicione o código de barras dentro da área.</p>

        <div className="mt-8 rounded-3xl bg-card p-5">
          <p className="inline-flex items-center gap-2 text-sm font-semibold text-deep"><Type className="h-4 w-4" /> Ou digite manualmente</p>
          <Input placeholder="EAN-13 ou lote" className="mt-3 h-11 bg-surface" />
          <Button className="mt-3 h-11 w-full rounded-full bg-primary text-white">Buscar produto</Button>
        </div>
      </div>
    </div>
  );
}
