import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-original.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/70 backdrop-blur-xl border-b hairline" : "bg-transparent"
      }`}
    >
      <div className="w-full h-16 md:h-20 pl-0 pr-5 md:pr-10 flex items-center justify-between">
        <Link
          to="/"
          className="inline-flex items-center gap-3"
          aria-label="Home"
        >
          <img src={logo} alt="Aura Infinity Labs logo" className="h-14 w-auto object-contain invert" />
          <span className="text-lg md:text-xl font-serif tracking-[0.06em] text-white">
            Aura Infinity Labs
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-10 text-[11px] tracking-[0.18em] uppercase">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "text-foreground" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full border hairline px-5 py-2 text-[11px] tracking-[0.18em] uppercase hover:bg-foreground hover:text-background transition-colors"
        >
          Start Project →
        </Link>
        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex flex-col">
          <div className="flex justify-between items-center h-16 pl-0 pr-5">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-3"
              aria-label="Home"
            >
              <img src={logo} alt="Aura Infinity Labs logo" className="h-14 w-auto object-contain invert" />
              <span className="text-lg font-serif tracking-[0.06em] text-white">
                Aura Infinity Labs
              </span>
            </Link>
            <button onClick={() => setOpen(false)} aria-label="Close menu">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col items-center justify-center gap-8 text-3xl font-serif">
            {links.map((l) => (
              <Link key={l.to} to={l.to} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
