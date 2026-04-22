import { useEffect, useState } from "react";
import { ShaderLinesRGB } from "./ui/shader-lines-rgb";

interface Props {
  opacity?: number;
  className?: string;
}

export function ShaderLinesBackground({ opacity = 0.22, className = "" }: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`} aria-hidden>
      {mounted && (
        <div className="absolute inset-0" style={{ opacity }}>
          <ShaderLinesRGB />
        </div>
      )}
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
