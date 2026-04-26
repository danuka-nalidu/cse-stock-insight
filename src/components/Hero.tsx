import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-finance.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-gradient-hero"
    >
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Financial chart background"
          className="w-full h-full object-cover opacity-40"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>
      <div className="absolute inset-0 grid-bg -z-10" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 rounded-full bg-emerald2/20 blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-accent/15 blur-3xl animate-pulse-glow" />

      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass mb-8"
          >
            <Sparkles className="h-3.5 w-3.5 text-emerald2" />
            <span className="text-xs font-medium tracking-wide text-muted-foreground">
              SLIIT · Final Year Research Project · 2025
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight"
          >
            <span className="text-gradient">Predict. Manage.</span>
            <br />
            <span className="text-gradient-emerald">Outperform the CSE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            An AI-powered Stock Market Prediction, Risk &amp; Portfolio Management
            System engineered for the Colombo Stock Exchange.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
          >
            <Button asChild variant="hero" size="lg">
              <Link to="/domain">
                Explore Research <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link to="/documents">
                <BarChart3 className="h-4 w-4" /> View Documents
              </Link>
            </Button>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {[
              { k: "4", l: "Components" },
              { k: "300+", l: "CSE Tickers" },
              { k: "5+", l: "ML Models" },
              { k: "2025", l: "Final Year" },
            ].map((s) => (
              <div key={s.l} className="glass rounded-xl p-5 text-left">
                <p className="font-display text-3xl md:text-4xl text-gradient-emerald font-bold">
                  {s.k}
                </p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;