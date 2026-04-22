import { motion, useReducedMotion } from "framer-motion";

interface HoloOrbProps {
  size?: number;
  className?: string;
  intensity?: number;
}

export function HoloOrb({ size = 120, className = "", intensity = 0.7 }: HoloOrbProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none rounded-full blur-3xl ${className}`}
      style={{
        width: size,
        height: size,
        opacity: intensity,
        background:
          "radial-gradient(circle at 30% 30%, #C084FC 0%, transparent 55%), radial-gradient(circle at 70% 30%, #60A5FA 0%, transparent 55%), radial-gradient(circle at 50% 75%, #FB923C 0%, transparent 55%), radial-gradient(circle at 30% 70%, #F472B6 0%, transparent 55%)",
      }}
      animate={
        reduce
          ? undefined
          : { y: [0, -18, 0], x: [0, 10, 0], scale: [1, 1.05, 1] }
      }
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
