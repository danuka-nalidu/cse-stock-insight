import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Award } from "lucide-react";

const members = [
  {
    name: "Member One",
    role: "Open Price Prediction",
    id: "IT22306654",
    email: "it22306654@my.sliit.lk",
    achievement: "Designed the Ensemble open price forecasting engine",
    initials: "M1",
  },
  {
    name: "Member Two",
    role: "Dividend Forecasting",
    id: "IT22102614",
    email: "it22102614@my.sliit.lk",
    achievement: "Built dividend prediction & sector analytics module",
    initials: "M2",
  },
  {
    name: "Member Three",
    role: "Risk Assessment",
    id: "IT22271532",
    email: "it22271532@my.sliit.lk",
    achievement: "Built the risk prediction module",
    initials: "M3",
  },
  {
    name: "Member Four",
    role: "Sentiment Analysis module",
    id: "IT22069672",
    email: "it22069672@my.sliit.lk",
    achievement: "Developed Sentiment Analysis module for market insights",
    initials: "M4",
  },
];

const supervisors = [
  { name: "Dr. Kalpani Manathunga", role: "Supervisor", email: "kalpani.m@sliit.lk" },
  { name: "Ms. Suriyaa Kumari", role: "Co-Supervisor", email: "suriyaa.k@sliit.lk" },
];

const Team = () => {
  return (
    <section id="about" className="pb-28 pt-4 relative">
      <div className="container">
        {/* Members grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {members.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-strong rounded-2xl p-6 group hover:-translate-y-1 transition-all duration-500"
            >
              {/* Avatar */}
              <div className="relative mx-auto h-24 w-24 rounded-2xl bg-gradient-emerald grid place-items-center shadow-glow group-hover:scale-105 transition-transform">
                <span className="font-display font-bold text-2xl text-primary-foreground">
                  {m.initials}
                </span>
                <span className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-card border border-emerald2/40 grid place-items-center">
                  <Award className="h-3.5 w-3.5 text-emerald2" />
                </span>
              </div>

              <div className="mt-5 text-center">
                <h3 className="font-display font-semibold">{m.name}</h3>
                <p className="text-[11px] uppercase tracking-wider text-emerald2 mt-1">
                  {m.role}
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-mono">{m.id}</p>
              </div>

              <p className="mt-4 text-sm text-muted-foreground text-center leading-relaxed">
                {m.achievement}
              </p>

              <div className="mt-5 flex items-center justify-center gap-2">
                <a
                  href={`mailto:${m.email}`}
                  aria-label={`Email ${m.name}`}
                  className="h-8 w-8 grid place-items-center rounded-lg bg-secondary hover:bg-gradient-emerald hover:text-primary-foreground transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  className="h-8 w-8 grid place-items-center rounded-lg bg-secondary hover:bg-gradient-emerald hover:text-primary-foreground transition-colors"
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#"
                  aria-label="GitHub"
                  className="h-8 w-8 grid place-items-center rounded-lg bg-secondary hover:bg-gradient-emerald hover:text-primary-foreground transition-colors"
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supervisors */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {supervisors.map((s) => (
            <div
              key={s.name}
              className="glass rounded-xl p-5 flex items-center gap-4"
            >
              <div className="h-12 w-12 rounded-xl bg-secondary grid place-items-center">
                <Award className="h-5 w-5 text-emerald2" />
              </div>
              <div className="flex-1">
                <p className="font-display font-semibold">{s.name}</p>
                <p className="text-xs text-emerald2 uppercase tracking-wider">
                  {s.role}
                </p>
              </div>
              <a
                href={`mailto:${s.email}`}
                className="text-sm text-muted-foreground hover:text-foreground"
              >
                {s.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;