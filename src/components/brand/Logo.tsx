import { Pill } from "lucide-react";

export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  const text = variant === "light" ? "text-white" : "text-deep";
  const accent = variant === "light" ? "text-mint" : "text-primary";
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-sm">
        <Pill className="h-5 w-5 text-white" strokeWidth={2.2} />
        <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-mint ring-2 ring-white" />
      </span>
      <span className={`text-xl font-bold tracking-tight ${text}`}>
        re<span className={accent}>v</span>itta
      </span>
    </div>
  );
}
