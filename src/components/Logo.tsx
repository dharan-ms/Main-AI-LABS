export function Logo({ className = "" }: { className?: string; alt?: string }) {
  return (
    <span
      className={`font-serif tracking-[-0.02em] leading-none whitespace-nowrap text-base md:text-lg ${className}`}
    >
      Aura Infinity Labs
    </span>
  );
}