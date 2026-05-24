import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScanBarcode, Upload, Save } from "lucide-react";
import { PriorityBadge, priorityLevel } from "@/components/brand/PriorityBadge";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/products")({
  component: ProductsPage,
});

function ProductsPage() {
  const [validity, setValidity] = useState("");
  const [otcConfirm, setOtcConfirm] = useState(false);

  const calculateDays = (dateStr: string) => {
    if (!dateStr) return 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const valDate = new Date(dateStr + "T00:00:00");
    const diffTime = valDate.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  };

  const days = calculateDays(validity);
  const level = priorityLevel(days);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validity) {
      toast.error("Por favor, preencha a data de validade.");
      return;
    }
    const rDays = calculateDays(validity);
    if (rDays < 60) {
      toast.error("A validade do medicamento deve ser de no mínimo 2 meses (60 dias) a partir de hoje.");
      return;
    }
    if (rDays > 180) {
      toast.error("A validade do medicamento deve ser de no máximo 6 meses (180 dias) a partir de hoje.");
      return;
    }
    if (!otcConfirm) {
      toast.error("Você deve confirmar a conformidade OTC antes de cadastrar.");
      return;
    }
    toast.success("Produto cadastrado com sucesso na rede B2B2C!");
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-deep">Cadastro de produtos</h1>
          <p className="text-sm text-slate">
            Cadastre lotes na rede B2B2C. O risco é calculado automaticamente antes da
            redistribuição aos parceiros e ao consumidor final.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full bg-card"><ScanBarcode className="mr-2 h-4 w-4" /> Código de barras</Button>
          <Button variant="outline" className="rounded-full bg-card"><Upload className="mr-2 h-4 w-4" /> Upload em lote</Button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid gap-6 lg:grid-cols-3"
      >
        <div className="space-y-5 rounded-2xl border border-border bg-card p-6 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <F label="Nome do produto" id="name" placeholder="Paracetamol 500mg" />
            <F label="Lote" id="lot" placeholder="L2024-1234" />
            <div>
              <Label htmlFor="val">Validade (min 2 meses, max 6 meses)</Label>
              <Input id="val" type="date" value={validity} onChange={(e) => setValidity(e.target.value)} className="mt-1.5 h-11 bg-surface" required />
            </div>
            <F label="Quantidade" id="qty" type="number" placeholder="100" />
            <div>
              <Label>Categoria (Apenas OTC)</Label>
              <Select defaultValue="analgesicos">
                <SelectTrigger className="mt-1.5 h-11 bg-surface"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="analgesicos">Analgésicos</SelectItem>
                  <SelectItem value="anti-inflamatorios">Anti-inflamatórios</SelectItem>
                  <SelectItem value="vitaminas">Vitaminas / Suplementos</SelectItem>
                  <SelectItem value="antiacidos">Antiácidos / Gástricos</SelectItem>
                  <SelectItem value="antialergicos">Anti-alérgicos</SelectItem>
                  <SelectItem value="dermatologicos">Dermatológicos</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label>Armazenamento</Label>
              <Select>
                <SelectTrigger className="mt-1.5 h-11 bg-surface"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ambiente">Temperatura ambiente</SelectItem>
                  <SelectItem value="refrigerado">Refrigerado (2-8°C)</SelectItem>
                  <SelectItem value="congelado">Congelado</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <F label="Preço original (R$)" id="p1" type="number" step="0.01" placeholder="29,90" />
            <F label="Preço redistribuído (R$)" id="p2" type="number" step="0.01" placeholder="14,90" />
          </div>

          <div className="flex items-start gap-3 rounded-xl border border-primary/20 bg-surface/50 p-4">
            <Checkbox id="otc-confirm" checked={otcConfirm} onCheckedChange={(val) => setOtcConfirm(!!val)} className="mt-1" />
            <div className="grid gap-1">
              <Label htmlFor="otc-confirm" className="text-sm font-bold text-deep select-none cursor-pointer">
                Declaração de Conformidade OTC
              </Label>
              <p className="text-xs text-slate leading-relaxed">
                Confirmo que este produto é um medicamento isento de prescrição (OTC) e <strong>não é tarjado</strong>, antibiótico ou psicotrópico.
              </p>
            </div>
          </div>

          <Button type="submit" className="h-11 w-full rounded-full bg-deep text-white hover:bg-deep/90 font-bold shadow-md">
            <Save className="mr-2 h-4 w-4" /> Cadastrar produto
          </Button>
        </div>

        <aside className="space-y-4">
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate">Status automático</p>
            {validity ? (
              <>
                <PriorityBadge days={days} size="lg" className="mt-3" />
                <p className={`mt-4 text-2xl font-bold ${level === "danger" ? "text-risk-danger" : level === "warn" ? "text-risk-warn" : "text-risk-safe"}`}>
                  {level === "danger" ? "Redistribuição urgente" : level === "warn" ? "Atenção" : "Baixo risco"}
                </p>
                <p className="mt-1 text-sm text-slate">
                  {level === "danger" ? "Recomendamos publicar imediatamente na rede B2B2C." : level === "warn" ? "Monitore — pode ser publicado em breve." : "Estoque saudável."}
                </p>
              </>
            ) : (
              <p className="mt-4 text-sm text-slate">Selecione a validade para calcular o nível de prioridade.</p>
            )}
          </div>
          <div className="rounded-2xl border border-border bg-mint/10 p-6">
            <p className="text-sm font-semibold text-deep">💡 Dica Revitta</p>
            <p className="mt-2 text-sm text-slate">
              Medicamentos OTC com 60 a 180 dias de validade têm prioridade máxima de circulação na rede B2B2C.
            </p>
          </div>
        </aside>
      </form>
    </div>
  );
}
function F({ label, id, ...rest }: any) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <Input id={id} {...rest} className="mt-1.5 h-11 bg-surface" />
    </div>
  );
}
