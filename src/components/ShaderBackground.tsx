import { useEffect, useState } from "react";
import { ShaderAnimation } from "./ui/shader-lines";

interface Props {
  opacity?: number;
  className?: string;
}

export function ShaderBackground({ opacity = 0.25, className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      {mounted && (
        <div className="absolute inset-0" style={{ opacity }}>
          <ShaderAnimation />
        </div>
      )}
      {/* Vignette + dark overlay to keep text legible */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.85) 70%, #0A0A0A 100%)",
        }}
      />
    </div>
  );
}
