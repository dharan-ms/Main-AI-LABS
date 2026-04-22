import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, Reveal } from "@/components/Section";
import { GradientImage } from "@/components/GradientImage";
import { StatCounter } from "@/components/StatCounter";
import { HoloOrb } from "@/components/HoloOrb";
import aboutPortrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Aura Infinity Labs" },
      { name: "description", content: "An editorial AI studio. Our philosophy, our craft, and the team building AI that works." },
      { property: "og:title", content: "About — Aura Infinity Labs" },
      { property: "og:description", content: "An editorial AI studio. Our philosophy, our craft, and the team building AI that works." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative pt-40 md:pt-48 pb-20 overflow-hidden">
        <HoloOrb size={360} className="absolute -top-10 -right-20 opacity-50" />
        <div className="mx-auto max-w-[1280px] px-5 md:px-20">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">About</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-5xl md:text-[100px] leading-[0.95] tracking-[-0.02em] max-w-5xl">
              An editorial studio for the <span className="holo-text">AI era</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <Section className="border-t hairline">
        <div className="grid md:grid-cols-[460px_1fr] gap-16 items-start">
          <Reveal>
            <GradientImage variant="portrait" src={aboutPortrait} label="Aura Infinity Labs studio" className="aspect-[3/4] w-full" />
          </Reveal>
          <div className="space-y-10">
            <Reveal>
              <p className="font-serif text-3xl md:text-5xl leading-[1.1] tracking-[-0.01em]">
                We believe AI deserves the same craft as a Swiss watch — quiet, precise, and built to last.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Aura Infinity Labs was founded on a single conviction: most AI products are shipped half-finished. We exist to do the opposite — websites that load like silk, agents that actually solve the task, and voice callers that sound like the best person on your team.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl">
                Every engagement is small, senior, and obsessive. No account managers, no decks. Just the work — and the people who built it.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section className="border-t hairline">
        <Reveal>
          <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">By the numbers</span>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10 border-t hairline pt-12">
          <StatCounter value={50} suffix="+" label="Projects shipped" />
          <StatCounter value={200} suffix="+" label="Automations live" />
          <StatCounter value={100000} label="Calls handled" />
        </div>
      </Section>

      <Section className="border-t hairline">
        <Reveal>
          <h2 className="font-serif text-4xl md:text-6xl tracking-[-0.02em] max-w-3xl">
            Three principles that <span className="holo-text">shape</span> our work.
          </h2>
        </Reveal>
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {[
            { n: "01", t: "Editorial craft", d: "Typography, motion, and pacing matter as much as the model behind the curtain." },
            { n: "02", t: "Ship reality", d: "We build for production, not demo. Evals, observability, and graceful failure are table stakes." },
            { n: "03", t: "Senior only", d: "The person you meet is the person who builds. No hand-offs, no juniors hidden behind email." },
          ].map((p) => (
            <Reveal key={p.n}>
              <div className="border hairline rounded-2xl p-8 h-full bg-card">
                <div className="text-xs text-muted-foreground tracking-[0.2em]">{p.n}</div>
                <div className="mt-6 font-serif text-2xl">{p.t}</div>
                <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <div className="mt-16">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-6 py-3 text-xs uppercase tracking-[0.2em] hover:scale-[1.03] transition-transform">
              Work with us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </Section>

      <Footer />
    </div>
  );
}
