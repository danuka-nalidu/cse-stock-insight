import { useEffect, useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/domain", label: "Domain" },
  { to: "/milestones", label: "Milestones" },
  { to: "/documents", label: "Documents" },
  { to: "/presentations", label: "Slides" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 md:px-6 py-3 transition-all duration-500",
            scrolled ? "glass-strong" : "bg-transparent"
          )}
        >
          <Link to="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
            <motion.span
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-gold shadow-glow"
            >
              <TrendingUp className="h-5 w-5 text-primary-foreground" />
            </motion.span>
            <div className="leading-tight">
              <p className="font-display font-bold text-sm md:text-base">InvestWise</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Research Project
              </p>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <NavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "px-3 py-2 text-sm rounded-md transition-colors relative group",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {l.label}
                      <span
                        className={cn(
                          "absolute left-3 right-3 -bottom-0.5 h-px bg-gradient-gold transition-transform duration-300 origin-left",
                          isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        )}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <Button asChild variant="hero" size="sm">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </nav>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0, y: -8 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden mt-2 glass-strong rounded-2xl overflow-hidden"
            >
              <ul className="flex flex-col gap-1 p-4">
                {links.map((l, i) => (
                  <motion.li
                    key={l.to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.22 }}
                  >
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          "block px-3 py-2 rounded-md hover:bg-secondary transition-colors",
                          isActive
                            ? "text-foreground bg-secondary/60"
                            : "text-muted-foreground hover:text-foreground"
                        )
                      }
                    >
                      {l.label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
