interface GradientImageProps {
  variant?: "violet" | "amber" | "rose" | "azure" | "noir" | "portrait";
  className?: string;
  label?: string;
  src?: string;
  alt?: string;
}

const gradients: Record<string, string> = {
  violet:
    "linear-gradient(135deg, #1a1033 0%, #3b1d6b 40%, #C084FC 100%)",
  amber:
    "linear-gradient(135deg, #1a0f05 0%, #5b2a0a 40%, #FB923C 100%)",
  rose:
    "linear-gradient(135deg, #1f0a16 0%, #6b1d44 40%, #F472B6 100%)",
  azure:
    "linear-gradient(135deg, #06121f 0%, #0e3a66 45%, #60A5FA 100%)",
  noir:
    "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #2a2a2a 100%)",
  portrait:
    "linear-gradient(160deg, #0a0a0a 0%, #2a1a3a 35%, #6b3a8a 70%, #C084FC 100%)",
};

export function GradientImage({ variant = "violet", className = "", label, src, alt }: GradientImageProps) {
  if (src) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl ${className}`}
        style={{ background: gradients[variant] }}
        aria-label={label}
      >
        <img
          src={src}
          alt={alt ?? label ?? ""}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
      </div>
    );
  }
  return (
    <div
      className={`relative overflow-hidden rounded-2xl ${className}`}
      style={{ background: gradients[variant] }}
      aria-label={label}
    >
      <div
        className="absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          background:
            "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 70% 80%, rgba(0,0,0,0.6) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-2xl" />
    </div>
  );
}
