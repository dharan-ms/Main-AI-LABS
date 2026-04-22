import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, Reveal } from "@/components/Section";
import { GradientImage } from "@/components/GradientImage";
import { HoloOrb } from "@/components/HoloOrb";
import workAurora from "@/assets/work-aurora.jpg";
import workPrism from "@/assets/work-prism.jpg";
import workSonic from "@/assets/work-sonic.jpg";
import workMeridian from "@/assets/work-meridian.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Aura Infinity Labs" },
      { name: "description", content: "Selected work — websites, AI agents, automations and voice callers shipped by Aura Infinity Labs." },
      { property: "og:title", content: "Projects — Aura Infinity Labs" },
      { property: "og:description", content: "Selected work — websites, AI agents, automations and voice callers." },
    ],
  }),
  component: ProjectsPage,
});

const projects = [
  { v: "violet" as const, t: "Aurora Studio", k: "Website + Agent", year: "2025", src: workAurora },
  { v: "amber" as const, t: "Sonic Voice", k: "AI Voice Caller", year: "2025", src: workSonic },
  { v: "rose" as const, t: "Prism Atelier", k: "Brand Site", year: "2024", src: workPrism },
  { v: "azure" as const, t: "Meridian AI", k: "Automation Suite", year: "2024", src: workMeridian },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative pt-40 md:pt-48 pb-20 overflow-hidden">
        <HoloOrb size={380} className="absolute -top-10 right-10 opacity-50" />
        <div className="mx-auto max-w-[1280px] px-5 md:px-20">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Selected work</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-5xl md:text-[100px] leading-[0.95] tracking-[-0.02em] max-w-5xl">
              Projects shipped with <span className="holo-text">intention</span>.
            </h1>
          </Reveal>
        </div>
      </section>

      <Section className="border-t hairline">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <Reveal key={p.t}>
              <Link to="/contact" className="group block">
                <div className="relative">
                  <GradientImage variant={p.v} src={p.src} label={p.t} className="aspect-[4/3] w-full transition-transform duration-500 group-hover:scale-[1.01]" />
                  <ArrowUpRight className="absolute top-5 right-5 h-5 w-5 text-white/80 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-5 flex items-end justify-between">
                  <div>
                    <div className="font-serif text-3xl tracking-tight">{p.t}</div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mt-1">{p.k}</div>
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{p.year}</div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      <Footer />
    </div>
  );
}
