import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t hairline mt-20">
      <div className="mx-auto max-w-[1280px] px-5 md:px-20 py-16 grid gap-10 md:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Aura Infinity Labs — building AI that works. Premium websites, automations, agents and voice callers.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-[11px] uppercase tracking-[0.18em]">
          <div className="flex flex-col gap-3">
            <Link to="/about" className="text-muted-foreground hover:text-foreground">About</Link>
            <Link to="/services" className="text-muted-foreground hover:text-foreground">Services</Link>
            <Link to="/projects" className="text-muted-foreground hover:text-foreground">Projects</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground">Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a>
          </div>
        </div>
        <div className="text-sm text-muted-foreground md:text-right space-y-1">
          <div>aurainfinitylabs.com</div>
          <a href="mailto:san.sankarms@gmail.com" className="block hover:text-foreground transition-colors">san.sankarms@gmail.com</a>
          <a href="mailto:dharanesh.rajms@gmail.com" className="block hover:text-foreground transition-colors">dharanesh.rajms@gmail.com</a>
        </div>
      </div>

      <div className="border-t hairline">
        <div className="mx-auto max-w-[1280px] px-5 md:px-20 py-6 flex flex-col md:flex-row justify-between text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} Aura Infinity Labs. All rights reserved.</span>
          <span>Crafted with intention.</span>
        </div>
      </div>
    </footer>
  );
}
