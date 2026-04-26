import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Lightbulb,
  Target,
  Crosshair,
  Workflow,
  Cpu,
} from "lucide-react";
import { cn } from "@/lib/utils";

const tabs = [
  {
    id: "lit",
    icon: BookOpen,
    label: "Literature Survey",
    body: (
      <>
        <p>
          Existing research extensively covers ML-driven equity prediction in
          mature markets (NYSE, NASDAQ, NSE). Studies leverage LSTM, ARIMA,
          Transformer and ensemble approaches with sentiment overlays. However,
          frontier markets — particularly the Colombo Stock Exchange — remain
          underrepresented.
        </p>
        <ul className="mt-4 space-y-2 text-sm">
          <li>• 40+ peer-reviewed papers reviewed across forecasting, risk and portfolio domains.</li>
          <li>• Comparative analysis of statistical (ARIMA, GARCH) vs deep models (LSTM, GRU, Transformer).</li>
          <li>• Survey of dividend prediction techniques and sector-aware models.</li>
        </ul>
      </>
    ),
  },
  {
    id: "gap",
    icon: Lightbulb,
    label: "Research Gap",
    body: (
      <p>
        Sri Lankan retail investors lack a unified, locally-trained decision
        support tool. Existing platforms either provide raw data without
        intelligence, or apply foreign-market models that fail to capture CSE
        liquidity, regulatory cycles and dividend behaviour.
      </p>
    ),
  },
  {
    id: "problem",
    icon: Target,
    label: "Research Problem",
    body: (
      <p>
        How can we design an integrated, ML-powered platform that delivers
        accurate price predictions, dividend forecasts and personalised risk &
        portfolio insights tailored specifically for the Colombo Stock Exchange?
      </p>
    ),
  },
  {
    id: "objectives",
    icon: Crosshair,
    label: "Research Objectives",
    body: (
      <ul className="space-y-3 text-sm">
        <li>① Build a CSE-specific price-prediction engine with &gt; 85% directional accuracy.</li>
        <li>② Design a dividend forecasting module aware of sector and corporate-action cycles.</li>
        <li>③ Quantify portfolio risk using VaR, CVaR and stress-test simulations.</li>
        <li>④ Recommend optimised portfolios via ML-assisted allocation strategies.</li>
        <li>⑤ Deliver a polished, web-based interface accessible to retail investors.</li>
      </ul>
    ),
  },
  {
    id: "methodology",
    icon: Workflow,
    label: "Methodology",
    body: (
      <ol className="space-y-3 text-sm list-decimal list-inside">
        <li>Data acquisition from CSE feeds, broker APIs and macro indicators.</li>
        <li>Preprocessing, feature engineering and sentiment ingestion.</li>
        <li>Model training: LSTM / Transformer for prices, regression ensembles for dividends.</li>
        <li>Risk &amp; portfolio engine using Monte-Carlo, mean-variance and RL agents.</li>
        <li>Evaluation, deployment and continuous online learning.</li>
      </ol>
    ),
  },
  {
    id: "tech",
    icon: Cpu,
    label: "Technologies",
    body: (
      <div className="grid sm:grid-cols-2 gap-3">
        {[
          "React + TypeScript",
          "Next.js / Vite",
          "Tailwind CSS",
          "Python · FastAPI",
          "TensorFlow · PyTorch",
          "Scikit-learn · XGBoost",
          "PostgreSQL · TimescaleDB",
          "CSE Data APIs",
        ].map((t) => (
          <div key={t} className="glass rounded-lg px-4 py-3 text-sm">
            {t}
          </div>
        ))}
      </div>
    ),
  },
];

const Domain = () => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active)!;

  return (
    <section id="domain" className="pb-28 pt-4 relative">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-6">
          <aside className="lg:col-span-4 space-y-2">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 border",
                  active === t.id
                    ? "glass-strong border-emerald2/40 shadow-glow"
                    : "glass border-transparent hover:border-white/10 hover:bg-card/60"
                )}
              >
                <span
                  className={cn(
                    "h-9 w-9 rounded-lg grid place-items-center shrink-0 transition-colors",
                    active === t.id
                      ? "bg-gradient-emerald text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  )}
                >
                  <t.icon className="h-4 w-4" />
                </span>
                <span
                  className={cn(
                    "font-medium",
                    active === t.id ? "text-foreground" : "text-muted-foreground"
                  )}
                >
                  {t.label}
                </span>
              </button>
            ))}
          </aside>

          <div className="lg:col-span-8">
            <div className="glass-strong rounded-2xl p-8 md:p-10 min-h-[420px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                >
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">
                    {current.label}
                  </h3>
                  <div className="h-px w-16 bg-gradient-emerald mb-6" />
                  <div className="text-muted-foreground leading-relaxed space-y-3">
                    {current.body}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Domain;