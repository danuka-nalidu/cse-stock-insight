import { motion } from "framer-motion";
import { CalendarDays, CheckCircle2, Clock, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const milestones = [
  {
    id: "1",
    title: "Project Proposal",
    date: "August 2024",
    weight: "100%",
    status: "completed",
    desc: "Defined research problem, scope and methodology. Submitted formal proposal document and presented to evaluation panel.",
  },
  {
    id: "2",
    title: "Progress Presentation 1",
    date: "December 2024",
    weight: "100%",
    status: "completed",
    desc: "Demonstrated 50% completion: data pipeline, baseline ML models, and initial risk module prototype.",
  },
  {
    id: "3",
    title: "Progress Presentation 2",
    date: "April 2025",
    weight: "100%",
    status: "completed",
    desc: "75% completion checkpoint with full prediction engine, dividend forecaster and integrated dashboard.",
  },
  {
    id: "4",
    title: "Final Assessment",
    date: "August 2025",
    weight: "40%",
    status: "in-progress",
    desc: "Complete system delivery, integration testing, evaluation against benchmarks and final research documentation.",
  },
  {
    id: "5",
    title: "Viva",
    date: "September 2025",
    weight: "15%",
    status: "upcoming",
    desc: "Oral defence covering research contribution, technical depth and individual component ownership.",
  },
];

const statusMap = {
  completed: { label: "Completed", icon: CheckCircle2, cls: "bg-gold/12 text-gold border-gold/30" },
  "in-progress": { label: "In Progress", icon: Clock, cls: "bg-slate-blue/12 text-slate-blue border-slate-blue/30" },
  upcoming: { label: "Upcoming", icon: Award, cls: "bg-muted text-muted-foreground border-border" },
} as const;

const Milestones = () => {
  return (
    <section id="milestones" className="pb-28 pt-4 relative">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Visual timeline */}
          <div className="lg:col-span-5">
            <div className="relative pl-8">
              <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-gold via-slate-blue/40 to-transparent" />
              {milestones.map((m, i) => {
                const S = statusMap[m.status as keyof typeof statusMap];
                return (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: i * 0.08 }}
                    className="relative pb-8 last:pb-0"
                  >
                    <span className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full bg-gold shadow-glow" />
                    <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                      <CalendarDays className="h-3 w-3" />
                      {m.date}
                    </p>
                    <p className="font-display font-semibold mt-1">{m.title}</p>
                    <Badge variant="outline" className={`mt-2 ${S.cls} text-[10px]`}>
                      <S.icon className="h-3 w-3 mr-1" />
                      {S.label} · {m.weight}
                    </Badge>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Accordion details */}
          <div className="lg:col-span-7">
            <div className="glass-strong rounded-2xl p-2 md:p-4">
              <Accordion type="single" collapsible defaultValue="1" className="space-y-2">
                {milestones.map((m) => {
                  const S = statusMap[m.status as keyof typeof statusMap];
                  return (
                    <AccordionItem
                      key={m.id}
                      value={m.id}
                      className="border border-border/40 rounded-xl px-4 bg-card/40 data-[state=open]:bg-card/80"
                    >
                      <AccordionTrigger className="hover:no-underline py-4">
                        <div className="flex flex-1 items-center justify-between gap-3 text-left">
                          <div>
                            <p className="font-display font-semibold">{m.title}</p>
                            <p className="text-xs text-muted-foreground mt-0.5">
                              {m.date} · Weight {m.weight}
                            </p>
                          </div>
                          <Badge variant="outline" className={`${S.cls} text-[10px] mr-2`}>
                            {S.label}
                          </Badge>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground pb-4">
                        {m.desc}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;