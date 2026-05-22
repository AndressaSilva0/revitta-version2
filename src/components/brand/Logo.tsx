import logoSrc from "@/assets/revitta-logo.png";

export function Logo({ variant = "dark", className = "" }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Revitta"
        className={`h-9 w-auto ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}
