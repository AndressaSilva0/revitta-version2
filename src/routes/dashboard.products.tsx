import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ScanBarcode, Upload, Save } from "lucide-react";
import { PriorityBadge, priorityLevel } from "@/components/brand/PriorityBadge";
import { toast } from "sonner";

export const Route = createFileRoute("/dashboard/products")({
  component: ProductsPage,
});

function ProductsPage() {
  const [validity, setValidity] = useState("");
  const days = validity ? Math.max(0, Math.round((new Date(validity).getTime() - Date.now()) / 86400000)) : 0;
  const level = priorityLevel(days);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-deep">Cadastro de produtos</h1>
          <p className="text-sm text-slate">Adicione medicamentos à rede. O risco é calculado automaticamente.</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="rounded-full bg-card"><ScanBarcode className="mr-2 h-4 w-4" /> Código de barras</Button>
          <Button variant="outline" className="rounded-full bg-card"><Upload className="mr-2 h-4 w-4" /> Upload em lote</Button>
        </div>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); toast.success("Produto cadastrado na rede!"); }}
        className="grid gap-6 lg:grid-cols-3"
      >
        <div className="space-y-4 rounded-2xl border border-border bg-card p-6 lg:col-span-2">
          <div className="grid gap-4 sm:grid-cols-2">
            <F label="Nome do produto" id="name" placeholder="Paracetamol 500mg" />
            <F label="Lote" id="lot" placeholder="L2024-1234" />
            <div>
              <Label htmlFor="val">Validade</Label>
              <Input id="val" type="date" value={validity} onChange={(e) => setValidity(e.target.value)} className="mt-1.5 h-11 bg-surface" required />
            </div>
            <F label="Quantidade" id="qty" type="number" placeholder="100" />
            <div>
              <Label>Categoria</Label>
              <Select>
                <SelectTrigger className="mt-1.5 h-11 bg-surface"><SelectValue placeholder="Selecione" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="analgesicos">Analgésicos</SelectItem>
                  <SelectItem value="antibioticos">Antibióticos</SelectItem>
                  <SelectItem value="anti-inflamatorios">Anti-inflamatórios</SelectItem>
                  <SelectItem value="vitaminas">Vitaminas</SelectItem>
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
          <Button type="submit" className="h-11 w-full rounded-full bg-deep text-white hover:bg-deep/90">
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
                  {level === "danger" ? "Recomendamos publicar imediatamente no marketplace." : level === "warn" ? "Monitore — pode ser publicado em breve." : "Estoque saudável."}
                </p>
              </>
            ) : (
              <p className="mt-4 text-sm text-slate">Selecione a validade para calcular o nível de prioridade.</p>
            )}
          </div>
          <div className="rounded-2xl border border-border bg-mint/10 p-6">
            <p className="text-sm font-semibold text-deep">💡 Dica Revitta</p>
            <p className="mt-2 text-sm text-slate">
              Produtos publicados com 30+ dias têm 3x mais chance de redistribuição completa.
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
