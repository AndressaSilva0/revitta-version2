import { cn } from "@/lib/utils";

export function priorityLevel(days: number): "danger" | "warn" | "safe" {
  if (days <= 15) return "danger";
  if (days <= 30) return "warn";
  return "safe";
}

export function PriorityBadge({ days, size = "md", className }: { days: number; size?: "sm" | "md" | "lg"; className?: string }) {
  const level = priorityLevel(days);
  const styles = {
    danger: "bg-risk-danger/10 text-risk-danger border-risk-danger/30",
    warn:   "bg-risk-warn/15  text-risk-warn  border-risk-warn/30",
    safe:   "bg-risk-safe/12  text-risk-safe  border-risk-safe/30",
  }[level];
  const dot = {
    danger: "bg-risk-danger",
    warn:   "bg-risk-warn",
    safe:   "bg-risk-safe",
  }[level];
  const sizes = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-sm px-3 py-1.5 font-semibold",
  }[size];
  return (
    <span className={cn("inline-flex items-center gap-1.5 rounded-full border font-medium", styles, sizes, className)}>
      <span className={cn("h-1.5 w-1.5 rounded-full animate-pulse", dot)} />
      {days} dias
    </span>
  );
}
