import { motion } from "framer-motion";
import { Brain, ShieldCheck, LineChart, Coins } from "lucide-react";

const pillars = [
  {
    icon: LineChart,
    title: "Price Prediction",
    desc: "Deep-learning models forecast short and mid-term CSE price movements.",
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Coins,
    title: "Dividend Forecasting",
    desc: "Statistical & ML hybrid pipeline projects dividend yields across sectors.",
    color: "from-accent/20 to-accent/5",
  },
  {
    icon: ShieldCheck,
    title: "Risk Assessment",
    desc: "Volatility, VaR and drawdown analytics quantify exposure in real time.",
    color: "from-gold/20 to-gold/5",
  },
  {
    icon: Brain,
    title: "Portfolio Optimisation",
    desc: "Mean-variance and reinforcement-learning agents craft optimal weights.",
    color: "from-accent/20 to-accent/5",
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
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-gold/50" />
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

            {/* Decorative divider */}
            <motion.div
              className="mt-8 h-px w-24 bg-gradient-to-r from-gold/60 to-transparent"
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-strong rounded-2xl p-6 group relative overflow-hidden"
              >
                {/* Card bg glow on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

                <motion.div
                  whileHover={{ scale: 1.12, rotate: -4 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="relative h-11 w-11 rounded-xl bg-gradient-gold grid place-items-center shadow-glow"
                >
                  <p.icon className="h-5 w-5 text-primary-foreground" />
                </motion.div>
                <h3 className="relative mt-5 font-display text-lg font-semibold group-hover:text-gold transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">
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
