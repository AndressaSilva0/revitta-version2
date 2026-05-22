import { createFileRoute } from "@tanstack/react-router";
import { ScanLine, Type, X, Loader2, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/mobile/scanner")({
  component: ScannerPage,
});

function ScannerPage() {
  const [code, setCode] = useState("");
  const [searching, setSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) {
      toast.error("Por favor, digite um código ou lote");
      return;
    }
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      toast.success(`Produto encontrado: Lote ${code.toUpperCase()}`);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#082a28] to-[#041a19] pb-8">
      {/* Self-contained sweeping laser animation */}
      <style>{`
        @keyframes scan-laser {
          0% { top: 10%; opacity: 0.8; }
          50% { top: 90%; opacity: 1; }
          100% { top: 10%; opacity: 0.8; }
        }
        .scanner-laser {
          position: absolute;
          left: 6%;
          right: 6%;
          height: 2px;
          background-color: var(--mint);
          box-shadow: 0 0 16px 4px var(--mint);
          animation: scan-laser 2.5s ease-in-out infinite;
        }
      `}</style>

      <header className="flex items-center justify-between px-5 pt-12 text-white">
        <Link
          to="/mobile"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          <X className="h-5 w-5" />
        </Link>
        <p className="font-bold tracking-tight">Escanear código</p>
        <span className="w-10" />
      </header>

      <div className="mx-5 mt-8 space-y-6">
        {/* Viewfinder Camera Area */}
        <div className="relative aspect-square overflow-hidden rounded-3xl border-4 border-white/15 bg-black/50 shadow-2xl">
          {/* Camera HUD Overlays */}
          <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full bg-black/60 px-2.5 py-1 text-[9px] font-bold tracking-widest text-white uppercase">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-risk-danger" />
            REC 1080p
          </div>
          <div className="absolute right-4 top-4 z-20 rounded-full bg-black/60 px-2.5 py-1 text-[9px] font-bold text-white/80 font-mono">
            FPS 60
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <ScanLine className="h-24 w-24 text-mint/20" />
          </div>

          {/* Sweeping Laser */}
          <div className="scanner-laser pointer-events-none" />

          {/* Corner brackets */}
          {[
            "top-4 left-4 border-l-4 border-t-4",
            "top-4 right-4 border-r-4 border-t-4",
            "bottom-4 left-4 border-l-4 border-b-4",
            "bottom-4 right-4 border-r-4 border-b-4",
          ].map((c, i) => (
            <span
              key={i}
              className={`absolute h-8 w-8 border-mint ${c} rounded-sm pointer-events-none`}
            />
          ))}
        </div>

        <p className="text-center text-xs font-semibold text-white/50">
          Posicione o código de barras ou lote dentro do visor
        </p>

        {/* Manual search card */}
        <div className="rounded-3xl border border-white/10 bg-card/90 backdrop-blur-md p-5 shadow-xl">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-deep">
            <Type className="h-4 w-4 text-primary" /> Ou digite manualmente
          </p>
          <form onSubmit={handleSearch} className="mt-3.5 space-y-3">
            <Input
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Digite o código EAN ou lote"
              className="h-11 border-border/80 bg-surface text-deep focus:ring-brand font-semibold text-sm rounded-xl placeholder:text-slate/40"
            />
            <Button
              type="submit"
              disabled={searching}
              className="h-11 w-full rounded-full bg-primary text-white font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
            >
              {searching ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Buscando...
                </>
              ) : (
                <>
                  Buscar produto
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
