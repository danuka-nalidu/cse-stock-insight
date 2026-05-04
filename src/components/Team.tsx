import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Award } from "lucide-react";

type Member = {
  name: string;
  role: string;
  id: string;
  email: string;
  achievement: string;
  initials: string;
  image?: string;
  linkedin?: string;
  github?: string;
};

type Supervisor = {
  name: string;
  role: string;
  email: string;
  image?: string;
  imagePosition?: string;
};

const members: Member[] = [
  {
    name: "Dushan Waranakulasooriya",
    role: "Sentiment Analysis module",
    id: "dushanbolonghe@gmail.com",
    email: "it22306654@my.sliit.lk",
    achievement: "Developed Sentiment Analysis module for market insights",
    initials: "M1",
    image: "/memberImages/dushan.png",
    linkedin: "https://www.linkedin.com/in/warnakulasuriyadushan/",
    github: "https://github.com/DushanUB",
  },
  {
    name: "Madhawa Awishka",
    role: "Risk Assessment",
    id: "madhawaawishka@gmail.com",
    email: "it22271532@my.sliit.lk",
    achievement: "Built the risk prediction module",
    initials: "M3",
    image: "/memberImages/madhawa.JPG",
    linkedin: "https://www.linkedin.com/in/madhawaawishka/",
    github: "https://github.com/madhawaawishka",
  },
  {
    name: "Banuka wahalathanthri",
    role: "Dividend Forecasting",
    id: "banukawahalathanthri@gmail.com",
    email: "it22102614@my.sliit.lk",
    achievement: "Built dividend prediction & sector analytics module",
    initials: "M2",
    image: "/memberImages/banuka.jpeg",
    linkedin: "https://www.linkedin.com/in/banuka-wahalathanthri-0b1793311/",
    github: "https://github.com/banuka1",
  },
  {
    name: "Danuka Nalindu",
    role: "Open Price Prediction",
    id: "danukanalidu2002@gmail.com",
    email: "it22069672@my.sliit.lk",
    achievement: "Developed the Ensemble open price forecasting engine",
    initials: "M4",
    image: "/memberImages/danuka.jpeg",
    linkedin: "https://www.linkedin.com/in/danukanalindu/",
    github: "https://github.com/danuka-nalidu",
  },
];

const supervisors: Supervisor[] = [
  {
    name: "Dr. Kalpani Manathunga",
    role: "Supervisor",
    email: "kalpani.m@sliit.lk",
    image: "/memberImages/kalpani.jpg",
  },
  {
    name: "Ms. Suriyaa Kumari",
    role: "Co-Supervisor",
    email: "suriyaa.k@sliit.lk",
    image: "/memberImages/suriya.png",
    imagePosition: "center 72%",
  },
];

const socialLinks = (m: Member) => [
  { icon: Mail, href: `mailto:${m.email}`, label: `Email ${m.name}` },
  { icon: Linkedin, href: m.linkedin ?? "#", label: `LinkedIn ${m.name}`, external: !!m.linkedin },
  { icon: Github, href: m.github ?? "#", label: `GitHub ${m.name}`, external: !!m.github },
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
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.25, ease: "easeOut" } }}
              className="glass-strong rounded-2xl p-6 group relative overflow-hidden cursor-default"
            >
              {/* Hover glow background */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, hsl(var(--gold) / 0.07), transparent 70%)" }}
              />

              {/* Border shimmer on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: "inset 0 0 0 1px hsl(var(--gold) / 0.25)" }}
              />

              {/* Avatar */}
              <div className="relative mx-auto h-24 w-24 rounded-2xl bg-gradient-gold grid place-items-center shadow-glow group-hover:scale-105 transition-transform duration-500">
                {m.image ? (
                  <div className="h-full w-full overflow-hidden rounded-2xl">
                    <img
                      src={m.image}
                      alt={`${m.name} portrait`}
                      loading="lazy"
                      className="block h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <span className="font-display font-bold text-2xl text-primary-foreground">
                    {m.initials}
                  </span>
                )}
                <span className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-card border border-gold/40 grid place-items-center">
                  <Award className="h-3.5 w-3.5 text-gold" />
                </span>
              </div>

              <div className="mt-5 text-center">
                <h3 className="font-display font-semibold">{m.name}</h3>
                <p className="text-[11px] uppercase tracking-wider text-gold mt-1">
                  {m.role}
                </p>
                <p className="text-xs text-muted-foreground mt-2 font-mono">{m.id}</p>
              </div>

              <p className="mt-4 text-sm text-muted-foreground text-center leading-relaxed">
                {m.achievement}
              </p>

              <div className="mt-5 flex items-center justify-center gap-2">
                {socialLinks(m).map(({ icon: Icon, href, label, external }) => (
                  <motion.a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noreferrer" : undefined}
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.92 }}
                    className="h-8 w-8 grid place-items-center rounded-lg bg-secondary hover:bg-gradient-gold hover:text-primary-foreground transition-colors duration-200"
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Supervisors */}
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {supervisors.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              whileHover={{ y: -3, transition: { duration: 0.2 } }}
              className="glass grid min-h-[132px] grid-cols-[5rem_minmax(0,1fr)] items-center gap-x-5 gap-y-3 overflow-hidden rounded-2xl p-6 sm:p-7 lg:flex lg:gap-5 group hover:border-gold/20 transition-all duration-300"
            >
              <div className="relative row-span-2 h-20 w-20 shrink-0 rounded-2xl bg-secondary grid place-items-center overflow-hidden group-hover:shadow-glow transition-shadow duration-300">
                {s.image ? (
                  <img
                    src={s.image}
                    alt={`${s.name} portrait`}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{ objectPosition: s.imagePosition }}
                  />
                ) : (
                  <Award className="h-7 w-7 text-gold" />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-display text-lg font-semibold leading-tight">{s.name}</p>
                <p className="mt-1 text-xs text-gold uppercase tracking-wider">
                  {s.role}
                </p>
              </div>
              <a
                href={`mailto:${s.email}`}
                className="min-w-0 max-w-full break-all text-sm text-muted-foreground hover:text-gold sm:text-base lg:ml-auto lg:shrink-0 lg:break-normal transition-colors duration-200"
              >
                {s.email}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
