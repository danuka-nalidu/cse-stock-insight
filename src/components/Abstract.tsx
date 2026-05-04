import { motion } from "framer-motion";
import { Brain, ShieldCheck, LineChart, Coins } from "lucide-react";

const pillars = [
  {
    icon: LineChart,
    title: "Price Prediction",
    desc: "Deep-learning models forecast short and mid-term CSE price movements.",
  },
  {
    icon: Coins,
    title: "Dividend Forecasting",
    desc: "Statistical & ML hybrid pipeline projects dividend yields across sectors.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Assessment",
    desc: "Volatility, VaR and drawdown analytics quantify exposure in real time.",
  },
  {
    icon: Brain,
    title: "Portfolio Optimisation",
    desc: "Mean-variance and reinforcement-learning agents craft optimal weights.",
  },
];

const Abstract = () => {
  return (
    <section id="abstract" className="py-28 relative">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">
              01 — Abstract
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              A unified intelligence layer for{" "}
              <span className="text-gradient-gold">Sri Lankan</span> capital
              markets.
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Retail investors and analysts on the Colombo Stock Exchange face
              fragmented data, limited predictive tooling and weak local risk
              models. Our system fuses historical CSE data, alternative sources
              and modern machine-learning to deliver an end-to-end decision
              support platform from <strong className="text-foreground">price prediction</strong> and{" "}
              <strong className="text-foreground">dividend forecasting</strong> to
              real-time <strong className="text-foreground">risk scoring</strong> and{" "}
              <strong className="text-foreground">portfolio optimisation</strong>.
            </p>
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-strong rounded-2xl p-6 group hover:-translate-y-1 transition-transform duration-500"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-gold grid place-items-center shadow-glow group-hover:scale-110 transition-transform">
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Abstract;