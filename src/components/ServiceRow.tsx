import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Plus } from "lucide-react";
import { GradientImage } from "./GradientImage";

export interface Service {
  number: string;
  title: string;
  description: string;
  tag?: string;
  variant: "violet" | "amber" | "rose" | "azure" | "noir";
  image?: string;
}

export function ServiceRow({ service, defaultOpen = false }: { service: Service; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b hairline">
      <button
        onClick={() => setOpen((v) => !v)}
        className="group w-full py-7 md:py-9 flex items-center gap-6 text-left"
      >
        <span className="text-xs text-muted-foreground tracking-[0.2em] w-10">{service.number}</span>
        <span className="flex-1 font-serif text-3xl md:text-5xl tracking-tight">
          {service.title}
        </span>
        {service.tag && (
          <span className="hidden md:inline-block text-[10px] uppercase tracking-[0.2em] border hairline rounded-full px-3 py-1 text-muted-foreground">
            {service.tag}
          </span>
        )}
        <motion.span animate={{ rotate: open ? 45 : 0 }} className="text-muted-foreground">
          <Plus className="h-6 w-6" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pb-10 grid md:grid-cols-[1fr_360px] gap-8 items-start">
              <p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
                {service.description}
              </p>
              <GradientImage variant={service.variant} src={service.image} label={service.title} className="aspect-[4/3] w-full" />
            </div>
            <div className="pb-8 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
              Learn more <ArrowUpRight className="h-4 w-4" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
