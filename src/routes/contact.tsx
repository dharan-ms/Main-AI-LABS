import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { Section, Reveal } from "@/components/Section";
import { HoloOrb } from "@/components/HoloOrb";
import { ShaderBackground } from "@/components/ShaderBackground";
import { GradientTracing } from "@/components/ui/gradient-tracing";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Aura Infinity Labs" },
      { name: "description", content: "Start a project with Aura Infinity Labs — websites, automations, agents and AI voice callers." },
      { property: "og:title", content: "Contact — Aura Infinity Labs" },
      { property: "og:description", content: "Start a project with Aura Infinity Labs." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      <section className="relative pt-40 md:pt-48 pb-20 overflow-hidden">
        <ShaderBackground opacity={0.3} />
        <HoloOrb size={520} className="absolute left-1/2 -translate-x-1/2 top-32 opacity-60" />
        <div className="relative mx-auto max-w-[1280px] px-5 md:px-20 text-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Get in touch</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 font-serif text-[16vw] md:text-[160px] leading-[0.9] tracking-[-0.03em]">
              Start <span className="holo-text">project</span>.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-muted-foreground text-lg max-w-xl mx-auto">
              Tell us about the work. We reply within one business day.
            </p>
          </Reveal>
        </div>
      </section>

      <Section className="border-t hairline">
        <div className="relative overflow-hidden rounded-2xl">
          <div className="pointer-events-none absolute inset-0 opacity-70">
            <div className="absolute left-1/2 top-0 -translate-x-1/2">
              <GradientTracing
                width={1100}
                height={90}
                path="M0,45 C80,0 160,90 240,45 S400,0 560,45 S720,90 880,45 S1020,0 1100,45"
                gradientColors={["#FF6B6B", "#FF6B6B", "#4ECDC4"]}
                baseColor="#1f1f1f"
              />
            </div>
            <div className="absolute left-1/2 bottom-0 -translate-x-1/2 rotate-180">
              <GradientTracing
                width={1100}
                height={90}
                path="M0,45 C80,0 160,90 240,45 S400,0 560,45 S720,90 880,45 S1020,0 1100,45"
                gradientColors={["#4ECDC4", "#FF6B6B", "#FF6B6B"]}
                baseColor="#1f1f1f"
              />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 origin-center">
              <GradientTracing
                width={760}
                height={90}
                path="M0,45 C70,0 140,90 210,45 S350,0 490,45 S630,90 760,45"
                gradientColors={["#9E00FF", "#2EB9DF", "#9E00FF"]}
                baseColor="#1f1f1f"
              />
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 origin-center">
              <GradientTracing
                width={760}
                height={90}
                path="M0,45 C70,0 140,90 210,45 S350,0 490,45 S630,90 760,45"
                gradientColors={["#2EB9DF", "#9E00FF", "#2EB9DF"]}
                baseColor="#1f1f1f"
              />
            </div>
          </div>

          <div className="relative grid md:grid-cols-[1fr_1.4fr] gap-16">
            <Reveal>
              <div className="space-y-8">
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Email</div>
                  <a href="mailto:san.sankarms@gmail.com" className="mt-2 block font-serif text-xl md:text-2xl hover:text-muted-foreground transition-colors break-all">
                    san.sankarms@gmail.com
                  </a>
                  <a href="mailto:dharranesh.rajms@gmail.com" className="mt-2 block font-serif text-xl md:text-2xl hover:text-muted-foreground transition-colors break-all">
                    dharranesh.rajms@gmail.com
                  </a>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Studio</div>
                  <p className="mt-2 font-serif text-2xl">Remote — global</p>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Hours</div>
                  <p className="mt-2 text-muted-foreground">Mon–Fri · 9–18 CET</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = String(data.get("name") ?? "");
                  const email = String(data.get("email") ?? "");
                  const company = String(data.get("company") ?? "");
                  const project = String(data.get("project") ?? "");
                  const subject = encodeURIComponent(`New project inquiry — ${name || "Aura Infinity Labs"}`);
                  const body = encodeURIComponent(
                    `Name: ${name}\nEmail: ${email}\nCompany: ${company}\n\nProject:\n${project}`,
                  );
                  window.location.href = `mailto:san.sankarms@gmail.com,dharranesh.rajms@gmail.com?subject=${subject}&body=${body}`;
                  setSent(true);
                }}
                className="space-y-6"
              >
                <Field label="Your name" name="name" />
                <Field label="Email" name="email" type="email" />
                <Field label="Company" name="company" />
                <div>
                  <label className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Project</label>
                  <textarea
                    required
                    name="project"
                    rows={5}
                    className="mt-2 w-full bg-transparent border-b hairline focus:border-foreground outline-none py-3 text-base resize-none transition-colors"
                    placeholder="Tell us what you're building…"
                  />
                </div>
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={sent}
                    className="inline-flex items-center gap-2 rounded-full bg-foreground text-background px-8 py-4 text-xs uppercase tracking-[0.2em] hover:scale-[1.03] transition-transform disabled:opacity-60"
                  >
                    {sent ? "Thank you — we'll reply soon" : <>Send inquiry <ArrowRight className="h-4 w-4" /></>}
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </Section>

      <Footer />
    </div>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={name} className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-2 w-full bg-transparent border-b hairline focus:border-foreground outline-none py-3 text-base transition-colors"
      />
    </div>
  );
}
