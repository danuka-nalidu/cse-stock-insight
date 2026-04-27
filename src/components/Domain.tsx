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
          Existing research in stock market prediction primarily focuses on
          isolated tasks such as price forecasting, sentiment analysis, or
          financial risk modeling. Studies commonly apply statistical models
          (ARIMA, GARCH) and machine learning approaches (LSTM, XGBoost,
          Transformers) in developed markets.
        </p>
        <p className="pt-3">However, key limitations exist:</p>
        <ul className="mt-2 space-y-2 text-sm">
          <li>• Most approaches operate independently, lacking an integrated decision-support system.</li>
          <li>• Financial news impact is often modeled assuming instant market reaction, ignoring delayed effects.</li>
          <li>• Traditional risk metrics like Altman Z-score are static, not forward-looking.</li>
          <li>• Dividend studies are largely explanatory, not predictive.</li>
          <li>• Emerging markets like the Colombo Stock Exchange (CSE) remain significantly underexplored.</li>
        </ul>
        <p className="pt-3 font-medium text-foreground">
          This motivates the need for a unified, explainable, and market-specific AI framework.
        </p>
      </>
    ),
  },
  {
    id: "gap",
    icon: Lightbulb,
    label: "Research Gap",
    body: (
      <>
        <p>Retail investors in the Colombo Stock Exchange face:</p>
        <ul className="mt-2 space-y-2 text-sm">
          <li>• Fragmented tools for price, risk, and dividend analysis</li>
          <li>• Lack of context-aware insights from financial news</li>
          <li>• Absence of forward-looking financial health prediction</li>
          <li>• Limited availability of interpretable AI-driven decision systems</li>
        </ul>
        <p className="pt-3">Existing solutions either:</p>
        <ul className="mt-2 space-y-2 text-sm">
          <li>• Provide raw data without intelligence, or</li>
          <li>
            • Apply foreign-trained models that fail to capture CSE-specific
            characteristics such as:
            <ul className="mt-2 ml-6 space-y-2">
              <li>• Low liquidity</li>
              <li>• Delayed information absorption</li>
              <li>• Unique dividend behavior patterns</li>
            </ul>
          </li>
        </ul>
        <p className="pt-3 font-medium text-foreground">
          There is no integrated, explainable AI platform tailored to CSE.
        </p>
      </>
    ),
  },
  {
    id: "problem",
    icon: Target,
    label: "Research Problem",
    body: (
      <>
        <p>
          How can we design a multi-stage, explainable AI-driven platform that:
        </p>
        <ul className="mt-2 space-y-2 text-sm">
          <li>• Accurately predicts short-term stock price movements</li>
          <li>• Identifies and explains market-moving financial news</li>
          <li>• Forecasts future financial stability (risk)</li>
          <li>• Predicts dividend cut probability</li>
          <li>• Provides interpretable and actionable portfolio insights</li>
        </ul>
        <p className="pt-3 font-medium text-foreground">
          All tailored specifically for the Colombo Stock Exchange (CSE).
        </p>
      </>
    ),
  },
  {
    id: "objectives",
    icon: Crosshair,
    label: "Research Objectives",
    body: (
      <ol className="space-y-3 text-sm list-decimal list-inside">
        <li>
          Develop a <strong>two-stage news impact prediction system</strong> to
          detect and classify market-moving financial news.
        </li>
        <li>
          Build a <strong>forward-looking financial risk model</strong> to
          predict future Altman Z-score trajectories.
        </li>
        <li>
          Design a <strong>dividend cut prediction model</strong> using
          interpretable machine learning.
        </li>
        <li>
          Implement an <strong>ensemble-based price forecasting model</strong>
          for short-term predictions.
        </li>
        <li>
          Integrate all modules into a
          <strong> unified, explainable decision-support platform (InvestWise)</strong>.
        </li>
        <li>
          Provide <strong>interpretability using XAI techniques</strong> (SHAP,
          feature contributions, retrieval-based explanations).
        </li>
      </ol>
    ),
  },
  {
    id: "methodology",
    icon: Workflow,
    label: "Methodology",
    body: (
      <ol className="space-y-3 text-sm list-decimal list-inside">
        <li>
          <strong>Data Acquisition</strong>
          <p className="mt-1">
            Collect stock prices, financial reports, and news data from CSE
            sources and APIs.
          </p>
        </li>
        <li>
          <strong>Data Processing &amp; Feature Engineering</strong>
          <p className="mt-1">
            Clean, normalize, and transform data, including financial ratios,
            technical indicators, and text embeddings.
          </p>
        </li>
        <li>
          <strong>Multi-Model Prediction Framework</strong>
          <p className="mt-1">Apply specialized ML models for:</p>
          <ul className="mt-2 ml-6 space-y-2 list-disc">
            <li>News impact detection</li>
            <li>Financial risk forecasting</li>
            <li>Dividend prediction</li>
            <li>Short-term price forecasting</li>
          </ul>
        </li>
        <li>
          <strong>Explainability Layer</strong>
          <p className="mt-1">
            Integrate XAI techniques (e.g., SHAP, similarity retrieval) to
            provide transparent and interpretable insights.
          </p>
        </li>
        <li>
          <strong>System Deployment</strong>
          <p className="mt-1">
            Deploy as a scalable web-based platform with real-time data updates
            and integrated decision support.
          </p>
        </li>
      </ol>
    ),
  },
  {
    id: "tech",
    icon: Cpu,
    label: "Technologies",
    body: (
      <>
        <ul className="space-y-2 text-sm">
          <li>
            • <strong>Frontend:</strong> React, Next.js, Tailwind CSS
          </li>
          <li>
            • <strong>Backend:</strong> Python, FastAPI
          </li>
          <li>
            • <strong>Machine Learning:</strong>
            <ul className="mt-2 ml-6 space-y-2 list-disc">
              <li>XGBoost, LightGBM, CatBoost</li>
              <li>SVR, Logistic Regression</li>
              <li>TensorFlow / PyTorch (for embeddings)</li>
            </ul>
          </li>
          <li>
            • <strong>Data Processing:</strong> Scikit-learn, Pandas
          </li>
          <li>
            • <strong>Database:</strong> PostgreSQL, TimescaleDB
          </li>
          <li>
            • <strong>Other:</strong> FAISS (semantic search), SHAP (XAI), CSE
            Data APIs
          </li>
        </ul>
      </>
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