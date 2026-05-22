import logoSrc from "@/assets/revitta-logo.png";

export function Logo({
  variant = "dark",
  className = "",
  imgClassName = "h-20",
}: {
  variant?: "dark" | "light";
  className?: string;
  imgClassName?: string;
}) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={logoSrc}
        alt="Revitta"
        className={`${imgClassName} w-auto object-contain transition-all ${variant === "light" ? "brightness-0 invert" : ""}`}
      />
    </div>
  );
}
