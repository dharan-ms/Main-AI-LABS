import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, Reveal } from "@/components/Section";
import { ServiceRow } from "@/components/ServiceRow";
import { HoloOrb } from "@/components/HoloOrb";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Aura Infinity Labs" },
      { name: "description", content: "Websites, automations, custom AI agents and voice callers — eight services, one studio." },
      { property: "og:title", content: "Services — Aura Infinity Labs" },
      { property: "og:description", content: "Websites, automations, custom AI agents and voice callers — eight services, one studio." },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative pt-40 md:pt-48 pb-20 overflow-hidden">
        <HoloOrb size={420} className="absolute -top-16 -left-24 opacity-50" />
        <div className="mx-auto max-w-[1280px] px-5 md:px-20">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Services</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-5xl md:text-[100px] leading-[0.95] tracking-[-0.02em] max-w-5xl">
              Eight ways we build <span className="holo-text">AI</span> that works.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-xl text-muted-foreground text-lg">
              From landing pages to voice callers — every engagement is senior, scoped, and shipped with measurable outcomes.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="border-t hairline pt-10 md:pt-16">
        <div>
          {services.map((s, i) => (
            <ServiceRow key={s.number} service={s} defaultOpen={i === 0} />
          ))}
        </div>
        <Reveal delay={0.1}>
          <div className="mt-20 text-center">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.2em] hover:scale-[1.03] transition-transform">
              Start a project <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </div>
  );
}
