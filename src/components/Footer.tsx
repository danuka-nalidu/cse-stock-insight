import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const navLinks = [
  { to: "/domain", label: "Domain" },
  { to: "/milestones", label: "Milestones" },
  { to: "/documents", label: "Documents" },
  { to: "/presentations", label: "Slides" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Back to top button */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-8 right-6 z-40 h-10 w-10 rounded-xl bg-gradient-gold shadow-glow grid place-items-center hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4 text-primary-foreground" />
          </motion.button>
        )}
      </AnimatePresence>

      <footer className="relative border-t border-border/50 mt-12 overflow-hidden">
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 rounded-full bg-gold/5 blur-3xl pointer-events-none" />

        <div className="container relative py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {/* Brand */}
            <div>
              <Link to="/" className="inline-flex items-center gap-2 group mb-4">
                <motion.span
                  whileHover={{ scale: 1.08, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-9 w-9 rounded-xl bg-gradient-gold grid place-items-center shadow-glow"
                >
                  <TrendingUp className="h-5 w-5 text-primary-foreground" />
                </motion.span>
                <div>
                  <p className="font-display font-bold text-sm">InvestWise</p>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Research Project
                  </p>
                </div>
              </Link>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-[220px]">
                AI-powered stock market prediction &amp; portfolio management for the Colombo Stock Exchange.
              </p>
              <div className="flex gap-2 mt-4">
                {[
                  { icon: Mail, href: "mailto:investwisefinance@gmail.com", label: "Email" },
                  { icon: Github, href: "https://github.com/danuka-nalidu", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/danukanalindu/", label: "LinkedIn" },
                ].map(({ icon: Icon, href, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="h-8 w-8 rounded-lg bg-secondary grid place-items-center hover:bg-gradient-gold hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Navigation</p>
              <ul className="space-y-2">
                {navLinks.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground hover:text-gold transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="inline-block w-0 group-hover:w-3 h-px bg-gold transition-all duration-300" />
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project info */}
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Project Info</p>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Sri Lanka Institute of Information Technology</p>
                <p>Faculty of Computing</p>
                <p className="text-gold font-medium">Final Year Research · 2025</p>
                <div className="pt-2 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-xs">Active Research</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-border/40 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © 2026 InvestWise — Final Year Research. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with React · Framer Motion · Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
