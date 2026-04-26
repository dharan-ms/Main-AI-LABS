import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { Brain, Compass, Instagram, Linkedin, Sparkles, Twitter } from "lucide-react";
import Hls from "hls.js";
import { motion, useScroll, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import logo from "@/assets/logo-original.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aura Infinity Labs — Newsletter platform" },
      { name: "description", content: "Aura Infinity Labs is a premium newsletter and content platform for meaningful updates, technology insights, and thoughtful publishing." },
      { property: "og:title", content: "Aura Infinity Labs — Newsletter platform" },
      { property: "og:description", content: "A dark monochrome newsletter platform for meaningful content and community." },
    ],
  }),
  component: HomePage,
});

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

const NAV_ITEMS = [
  { label: "Home", to: "/" },
  { label: "How It Works", to: "/services" },
  { label: "Philosophy", to: "/about" },
  { label: "Use Cases", to: "/projects" },
] as const;

const PLATFORM_CARDS = [
  {
    title: "ChatGPT",
    description: "People ask deeper questions in conversational AI before they ever open a traditional browser.",
    Icon: Brain,
  },
  {
    title: "Perplexity",
    description: "Research is now answer-first, source-aware, and built around clarity over keyword noise.",
    Icon: Compass,
  },
  {
    title: "Google AI",
    description: "Discovery keeps evolving as assistants summarize, compare, and decide what gets attention.",
    Icon: Sparkles,
  },
] as const;

const FEATURES = [
  {
    title: "Curated Feed",
    description: "Discover focused writing from voices that prioritize depth over volume.",
  },
  {
    title: "Writer Tools",
    description: "Create, edit, and publish with a workflow built for thoughtful long-form content.",
  },
  {
    title: "Community",
    description: "Build lasting reader relationships through consistent tone and valuable conversation.",
  },
  {
    title: "Distribution",
    description: "Reach audiences across channels without losing meaning or editorial quality.",
  },
] as const;

const MISSION_P1 = "We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having.";
const MISSION_P2 = "A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved.";

function RevealWord({
  word,
  index,
  total,
  progress,
  highlight,
}: {
  word: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  highlight?: boolean;
}) {
  const start = index / total;
  const end = Math.min(1, start + 0.12);
  const opacity = useTransform(progress, [start, end], [0.15, 1]);
  return (
    <motion.span style={{ opacity }} className={highlight ? "text-foreground" : "text-[hsl(var(--hero-subtitle))]"}>
      {word}{" "}
    </motion.span>
  );
}

function HomePage() {
  const missionRef = useRef<HTMLElement | null>(null);
  const ctaVideoRef = useRef<HTMLVideoElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: missionRef,
    offset: ["start end", "end start"],
  });

  useEffect(() => {
    const video = ctaVideoRef.current;
    if (!video) return;

    const src = "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8";
    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(video);
    } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
      video.src = src;
    }

    return () => {
      hls?.destroy();
    };
  }, []);

  const missionOneWords = MISSION_P1.split(" ");
  const missionTwoWords = MISSION_P2.split(" ");

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 px-8 py-4 md:px-28">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="Aura Infinity Labs logo" className="h-14 w-auto object-contain invert" />
            <span className="text-lg md:text-xl font-serif tracking-[0.06em] text-white">Aura Infinity Labs</span>
          </Link>
          <nav className="hidden items-center gap-3 text-sm md:flex">
            {NAV_ITEMS.map((item, index) => (
              <div key={item.label} className="flex items-center gap-3">
                <Link to={item.to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </Link>
                {index < NAV_ITEMS.length - 1 && <span className="text-muted-foreground">•</span>}
              </div>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="liquid-glass flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="relative h-screen overflow-hidden">
          <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover z-0">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 z-[1] bg-black/55" />
          <div className="absolute inset-x-0 bottom-0 z-[2] h-64 bg-gradient-to-t from-background to-transparent" />
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8 pt-28 md:px-28 md:pt-32">
            <div className="grid w-full items-end gap-12 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <motion.h1 {...fadeUp(0.12)} className="text-5xl font-medium leading-[0.95] tracking-[-2px] text-foreground md:text-7xl lg:text-8xl">
                  We build AI
                  <br />
                  that works.
                </motion.h1>
                <motion.div {...fadeUp(0.2)} className="mt-10 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-xs uppercase tracking-[0.2em] text-background transition-transform hover:scale-[1.03]"
                  >
                    Start Project
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 rounded-full border border-foreground/30 px-6 py-3 text-xs uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    Learn More
                  </Link>
                </motion.div>
              </div>
              <motion.p
                {...fadeUp(0.28)}
                className="max-w-md text-base font-medium leading-relaxed text-foreground md:justify-self-end"
              >
                An editorial AI studio crafting premium websites, automations, custom agents, and voice callers - engineered to ship and built to convert.
              </motion.p>
            </div>
          </div>
        </section>

        <section className="px-8 pb-6 pt-52 text-center md:px-28 md:pb-9 md:pt-64">
          <motion.h2 {...fadeUp(0.05)} className="text-5xl font-medium tracking-[-2px] md:text-7xl lg:text-8xl">
            Search has <span className="font-serif italic font-normal">changed.</span> Have you?
          </motion.h2>
          <motion.p {...fadeUp(0.12)} className="mx-auto mb-24 mt-6 max-w-2xl text-lg text-muted-foreground">
            Discovery has moved from links to answers. The brands and creators that shape the next wave are the ones people can find in these new conversations.
          </motion.p>

          <div className="mb-20 grid gap-12 md:grid-cols-3 md:gap-8">
            {PLATFORM_CARDS.map((card, i) => (
              <motion.article key={card.title} {...fadeUp(0.16 + i * 0.08)} className="flex flex-col items-center">
                <div className="liquid-glass flex h-[200px] w-[200px] items-center justify-center rounded-2xl">
                  <card.Icon className="h-16 w-16 text-foreground/85" />
                </div>
                <h3 className="mt-6 text-base font-semibold">{card.title}</h3>
                <p className="mt-2 max-w-xs text-sm text-muted-foreground">{card.description}</p>
              </motion.article>
            ))}
          </div>
          <motion.p {...fadeUp(0.34)} className="text-center text-sm text-muted-foreground">
            If you don&apos;t answer the questions, someone else will.
          </motion.p>
        </section>

        <section ref={missionRef} className="px-8 pb-32 pt-0 md:px-28 md:pb-44">
          <motion.div {...fadeUp(0.05)} className="mx-auto mb-16 flex justify-center">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="h-[400px] w-[400px] rounded-2xl object-cover md:h-[800px] md:w-[800px]"
            >
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <p className="mx-auto max-w-5xl text-2xl font-medium tracking-[-1px] md:text-4xl lg:text-5xl">
            {missionOneWords.map((word, index) => (
              <RevealWord
                key={`m1-${index}-${word}`}
                word={word}
                index={index}
                total={missionOneWords.length}
                progress={scrollYProgress}
                highlight={["curiosity", "meets", "clarity"].includes(word.replace(/[^\w]/g, "").toLowerCase())}
              />
            ))}
          </p>
          <p className="mx-auto mt-10 max-w-5xl text-xl font-medium md:text-2xl lg:text-3xl">
            {missionTwoWords.map((word, index) => (
              <RevealWord
                key={`m2-${index}-${word}`}
                word={word}
                index={index}
                total={missionTwoWords.length}
                progress={scrollYProgress}
              />
            ))}
          </p>
        </section>

        <section className="border-t border-border/30 px-8 py-32 md:px-28 md:py-44">
          <motion.span {...fadeUp(0.05)} className="text-xs uppercase tracking-[3px] text-muted-foreground">
            Solution
          </motion.span>
          <motion.h2 {...fadeUp(0.1)} className="mt-4 text-4xl md:text-6xl">
            The platform for <span className="font-serif italic font-normal">meaningful</span> content
          </motion.h2>
          <motion.div {...fadeUp(0.16)} className="mt-12 overflow-hidden rounded-2xl">
            <video autoPlay loop muted playsInline className="aspect-[3/1] w-full object-cover">
              <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4" type="video/mp4" />
            </video>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {FEATURES.map((feature, i) => (
              <motion.article key={feature.title} {...fadeUp(0.2 + i * 0.06)}>
                <h3 className="text-base font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden border-t border-border/30 px-8 py-32 md:px-28 md:py-44">
          <video ref={ctaVideoRef} autoPlay loop muted playsInline className="absolute inset-0 z-0 h-full w-full object-cover" />
          <div className="absolute inset-0 z-[1] bg-background/45" />
          <div className="relative z-10 mx-auto max-w-4xl text-center">
            <motion.div {...fadeUp(0.05)} className="mb-6 flex justify-center">
              <span className="relative flex h-10 w-10 items-center justify-center rounded-full border-2 border-foreground/70">
                <span className="h-5 w-5 rounded-full border border-foreground/70" />
              </span>
            </motion.div>
            <motion.h2 {...fadeUp(0.1)} className="text-4xl md:text-6xl">
              Start Your <span className="font-serif italic font-normal">Journey</span>
            </motion.h2>
            <motion.p {...fadeUp(0.16)} className="mx-auto mt-5 max-w-2xl text-muted-foreground">
              Whether you publish once a week or every day, Aura Infinity Labs gives your words the space and structure to matter.
            </motion.p>
            <motion.div {...fadeUp(0.24)} className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="rounded-lg bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-opacity hover:opacity-90">
                Subscribe Now
              </Link>
              <Link to="/services" className="liquid-glass rounded-lg px-8 py-3.5 text-sm font-medium text-foreground">
                Start Writing
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-4 px-8 py-12 md:flex-row md:items-center md:justify-between md:px-28">
        <p className="text-sm text-muted-foreground">© 2026 Aura Infinity Labs. All rights reserved.</p>
        <div className="flex items-center gap-6 text-sm text-muted-foreground">
          <a href="#" className="transition-colors hover:text-foreground">Privacy</a>
          <a href="#" className="transition-colors hover:text-foreground">Terms</a>
          <Link to="/contact" className="transition-colors hover:text-foreground">Contact</Link>
        </div>
      </footer>
    </div>
  );
}
