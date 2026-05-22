import { createFileRoute } from "@tanstack/react-router";
import { Leaf, TrendingUp, Award, AlertCircle } from "lucide-react";
import {
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  PieChart, Pie, Cell, LineChart, Line,
} from "recharts";

export const Route = createFileRoute("/dashboard/insights")({
  component: InsightsPage,
});

const categories = [
  { name: "Analgésicos", value: 42 },
  { name: "Antibióticos", value: 28 },
  { name: "Anti-inflam.", value: 18 },
  { name: "Vitaminas", value: 12 },
];
const colors = ["var(--primary)", "var(--mint)", "var(--deep)", "var(--risk-warn)"];

const forecast = [
  { w: "Sem 1", desc: 32, prev: 28 },
  { w: "Sem 2", desc: 41, prev: 35 },
  { w: "Sem 3", desc: 28, prev: 30 },
  { w: "Sem 4", desc: 52, prev: 38 },
  { w: "Sem 5", desc: 45, prev: 36 },
  { w: "Sem 6", desc: 58, prev: 40 },
];

const top = [
  { name: "Paracetamol 500mg", qty: 1240 },
  { name: "Ibuprofeno 600mg", qty: 980 },
  { name: "Amoxicilina 875mg", qty: 720 },
  { name: "Dipirona 1g", qty: 640 },
  { name: "Omeprazol 20mg", qty: 510 },
];

function InsightsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-deep">Insights & inteligência</h1>
        <p className="text-sm text-slate">
          Análise preditiva da rede B2B2C — operação entre parceiros e impacto no consumidor
          final.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat icon={TrendingUp} color="primary" label="Economia gerada" value="R$ 2,4M" sub="acumulado 2025" />
        <Stat icon={Award} color="mint" label="Taxa de sucesso" value="94%" sub="redistribuições completas" />
        <Stat icon={Leaf} color="risk-safe" label="CO₂ evitado" value="2,1 t" sub="impacto ambiental" />
        <Stat icon={AlertCircle} color="risk-warn" label="Previsão descarte" value="58 lotes" sub="próximas 6 semanas" />
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-6 xl:col-span-2">
          <h2 className="text-lg font-bold text-deep">Previsão de descarte vs Revitta</h2>
          <p className="text-xs text-slate">comparativo de lotes em risco — com e sem redistribuição</p>
          <div className="mt-4 h-72">
            <ResponsiveContainer>
              <LineChart data={forecast}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
                <XAxis dataKey="w" stroke="var(--slate)" fontSize={12} />
                <YAxis stroke="var(--slate)" fontSize={12} />
                <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
                <Line type="monotone" dataKey="desc" stroke="var(--risk-danger)" strokeWidth={2.5} dot={{ r: 3 }} name="Sem Revitta" />
                <Line type="monotone" dataKey="prev" stroke="var(--primary)" strokeWidth={2.5} dot={{ r: 3 }} name="Com Revitta" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-lg font-bold text-deep">Categorias com maior perda</h2>
          <div className="mt-2 h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={categories} dataKey="value" innerRadius={50} outerRadius={85} paddingAngle={3}>
                  {categories.map((_, i) => <Cell key={i} fill={colors[i]} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="mt-2 space-y-1.5 text-sm">
            {categories.map((c, i) => (
              <li key={c.name} className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-slate">
                  <span className="h-2 w-2 rounded-full" style={{ background: colors[i] }} />{c.name}
                </span>
                <span className="font-semibold text-deep">{c.value}%</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl border border-border bg-card p-6">
        <h2 className="text-lg font-bold text-deep">Top produtos redistribuídos</h2>
        <div className="mt-4 h-72">
          <ResponsiveContainer>
            <BarChart data={top} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis type="number" stroke="var(--slate)" fontSize={12} />
              <YAxis type="category" dataKey="name" stroke="var(--slate)" fontSize={12} width={140} />
              <Tooltip contentStyle={{ borderRadius: 12, border: "1px solid var(--border)" }} />
              <Bar dataKey="qty" fill="var(--primary)" radius={[0, 8, 8, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

function Stat({ icon: Icon, color, label, value, sub }: any) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl" style={{ background: `color-mix(in oklab, var(--${color}) 14%, transparent)`, color: `var(--${color})` }}>
        <Icon className="h-5 w-5" />
      </span>
      <p className="mt-4 text-sm font-medium text-slate">{label}</p>
      <p className="mt-1 text-2xl font-bold text-deep">{value}</p>
      <p className="text-xs text-slate">{sub}</p>
    </div>
  );
}
