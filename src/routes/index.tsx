import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HoloOrb } from "@/components/HoloOrb";
import { ShaderBackground } from "@/components/ShaderBackground";
import RadialShader from "@/components/ui/radial-shader";
import { Section, Reveal } from "@/components/Section";
import { GradientImage } from "@/components/GradientImage";
import { StatCounter } from "@/components/StatCounter";
import { ServiceRow } from "@/components/ServiceRow";
import { services } from "@/lib/services";
import workNeoBlob from "@/assets/work-neo-blob.png";
import workCodeWave from "@/assets/work-code-wave.png";
import workAiParticle from "@/assets/work-ai-particle.png";
import workAiRibbon from "@/assets/work-ai-ribbon.png";
import workNeoOrb from "@/assets/work-neo-orb.png";
import aboutAiNetwork from "@/assets/about-ai-network.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Infinity Labs — We build AI that works" },
      { name: "description", content: "Premium AI agency — websites, automations, custom agents and AI voice callers. Built with editorial craft." },
      { property: "og:title", content: "Aura Infinity Labs — We build AI that works" },
      { property: "og:description", content: "Premium AI agency — websites, automations, custom agents and AI voice callers." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const reduce = useReducedMotion();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 md:pt-32 pb-16 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-28 mix-blend-screen">
          <RadialShader className="absolute inset-0" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background/55" />
        <div className="mx-auto max-w-[1280px] w-full px-5 md:px-20 grid md:grid-cols-[1.4fr_1fr] gap-12 items-end">
          <div>
            <Reveal delay={0.1}>
              <h1 className="mt-8 font-serif text-[14vw] md:text-[100px] leading-[0.95] tracking-[-0.02em] text-white [text-shadow:0_0_22px_rgba(255,255,255,0.28)]">
                We build <span className="holo-text">AI</span><br />
                that works.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.2em] hover:scale-[1.03] transition-transform"
                >
                  Start Project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-full border hairline px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.3} className="md:pb-4">
            <p className="relative z-10 !text-white font-medium bg-black/35 border border-white/20 rounded-xl px-5 py-4 backdrop-blur-sm [text-shadow:0_0_14px_rgba(255,255,255,0.95),0_0_34px_rgba(255,255,255,0.7),0_0_56px_rgba(255,255,255,0.45)] text-base md:text-lg leading-relaxed max-w-sm md:ml-auto">
              An editorial AI studio crafting premium websites, automations, custom agents, and voice callers - engineered to ship and built to convert.
            </p>
          </Reveal>
        </div>

        {/* Scroll indicator */}
        <motion.div
          aria-hidden
          className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted-foreground"
          animate={reduce ? undefined : { y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </section>

      {/* ABOUT TEASER */}
      <Section className="border-t hairline">
        <div className="grid md:grid-cols-[420px_1fr] gap-12 md:gap-20 items-start">
          <Reveal>
            <GradientImage variant="portrait" src={workNeoBlob} label="Aura Infinity Labs studio" className="aspect-[3/4] w-full" />
          </Reveal>
          <div>
            <Reveal>
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">About</span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-serif text-4xl md:text-6xl leading-[1.05] tracking-[-0.02em]">
                We treat every build like a <span className="holo-text">flagship</span> — code, copy, motion, and AI woven into one taut object.
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-12 grid grid-cols-3 gap-6 border-t hairline pt-10">
                <StatCounter value={50} suffix="+" label="Projects shipped" />
                <StatCounter value={200} suffix="+" label="Automations live" />
                <StatCounter value={100000} label="Calls handled" />
              </div>
            </Reveal>
            <Reveal delay={0.25}>
              <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-muted-foreground transition-colors">
                About Us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* SERVICES TEASER */}
      <Section className="border-t hairline">
        <div className="flex items-end justify-between mb-12">
          <Reveal>
            <div>
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Services</span>
              <h2 className="mt-4 font-serif text-4xl md:text-6xl tracking-[-0.02em]">What we craft.</h2>
            </div>
          </Reveal>
          <Reveal>
            <Link to="/services" className="hidden md:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground transition-colors">
              All services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div>
          {services.slice(0, 4).map((s, i) => (
            <ServiceRow key={s.number} service={s} defaultOpen={i === 0} />
          ))}
        </div>
      </Section>

      {/* FEATURED WORK */}
      <Section className="border-t hairline">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-7xl leading-[1.02] tracking-[-0.02em] max-w-4xl">
            Decorate every pixel with <span className="holo-text">intention</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-xl text-muted-foreground">A glimpse at recent flagships — websites, agents, and voice systems shipped this season.</p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {[
            { v: "violet" as const, t: "Neo Morph", k: "Visual Identity", src: workNeoOrb },
            { v: "amber" as const, t: "Code Neon", k: "Engineering Workflow", src: workCodeWave },
            { v: "rose" as const, t: "AI Workflow", k: "Safety Pipeline", src: workAiRibbon },
            { v: "azure" as const, t: "AI Agent", k: "Agent Systems", src: workAiParticle, featured: true },
          ].map((p) => (
            <div key={p.t} className="group relative">
              <GradientImage variant={p.v} src={p.src} label={p.t} className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.01]" />
              <div className="absolute inset-0 flex items-end justify-between p-6">
                <div>
                  <div className="font-serif text-2xl md:text-3xl">{p.t}</div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-white/70">{p.k}</div>
                </div>
                {p.featured && (
                  <Link to="/projects" className="inline-flex items-center gap-2 rounded-full bg-background/80 backdrop-blur border hairline px-4 py-2 text-[11px] uppercase tracking-[0.2em]">
                    Learn More <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t hairline">
        <ShaderBackground opacity={0.3} />
        <HoloOrb size={520} className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2" intensity={0.65} />
        <div className="relative mx-auto max-w-[1280px] px-5 md:px-20 py-32 md:py-56 text-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Get in touch</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-serif text-[16vw] md:text-[160px] leading-[0.9] tracking-[-0.03em]">
              Start <span className="holo-text">project</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/contact"
              className="mt-12 inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.2em] hover:scale-[1.03] transition-transform"
            >
              Contact us <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
